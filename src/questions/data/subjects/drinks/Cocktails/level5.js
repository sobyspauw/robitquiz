// Cocktails Quiz - Level 5
(function() {
  const level5 = {
    name: {
          "en": "Advanced Mixology and Craft Cocktails",
          "es": "Mixología Avanzada y Cócteles Artesanales",
          "de": "Fortgeschrittene Mixologie und Craft Cocktails",
          "nl": "Geavanceerde Mixologie en Craft Cocktails"
    },
    questions: [
      {
        question: {
                  "en": "What is the primary function of egg white in cocktails?",
                  "es": "¿Cuál es la función principal de la clara de huevo en los cócteles?",
                  "de": "Was ist die primäre Funktion von Eiweiß in Cocktails?",
                  "nl": "Wat is de primaire functie van eiwit in cocktails?"
        },
        options: [
        {
                  "en": "To add alcohol content",
                  "es": "Para añadir contenido alcohólico",
                  "de": "Um Alkoholgehalt hinzuzufügen",
                  "nl": "Om alcoholgehalte toe te voegen"
        },
        {
                  "en": "To create foam and silky texture",
                  "es": "Para crear espuma y textura sedosa",
                  "de": "Um Schaum und seidige Textur zu erzeugen",
                  "nl": "Om schuim en zijdeachtige textuur te creëren"
        },
        {
                  "en": "To add sweetness",
                  "es": "Para añadir dulzura",
                  "de": "Um Süße hinzuzufügen",
                  "nl": "Om zoetheid toe te voegen"
        },
        {
                  "en": "To preserve the cocktail",
                  "es": "Para conservar el cóctel",
                  "de": "Um den Cocktail zu konservieren",
                  "nl": "Om de cocktail te bewaren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Egg white acts as a foaming agent, creating a rich, velvety foam on top of cocktails and adding body and silky mouthfeel without affecting flavor significantly.",
                  "es": "La clara de huevo actúa como agente espumante, creando una espuma rica y aterciopelada encima de los cócteles y añadiendo cuerpo y sensación sedosa en boca sin afectar significativamente el sabor.",
                  "de": "Eiweiß wirkt als Schaumbildner, erzeugt einen reichen, samtigen Schaum auf Cocktails und fügt Körper und seidige Mundgefühl hinzu, ohne den Geschmack wesentlich zu beeinflussen.",
                  "nl": "Eiwit werkt als schuimmiddel, creëert een rijke, fluweelachtige schuim bovenop cocktails en voegt body en zijdeachtig mondgevoel toe zonder de smaak significant te beïnvloeden."
        }
      },
      {
        question: {
                  "en": "What is the difference between a 'wet' and 'dry' shake technique?",
                  "es": "¿Cuál es la diferencia entre la técnica de agitado 'húmedo' y 'seco'?",
                  "de": "Was ist der Unterschied zwischen 'nasser' und 'trockener' Schütteltechnik?",
                  "nl": "Wat is het verschil tussen een 'natte' en 'droge' schudtechniek?"
        },
        options: [
        {
                  "en": "Wet shake is for alcoholic drinks only",
                  "es": "Agitado húmedo es solo para bebidas alcohólicas",
                  "de": "Nasses Schütteln ist nur für alkoholische Getränke",
                  "nl": "Nat schudden is alleen voor alcoholische drankjes"
        },
        {
                  "en": "Wet shake uses more ice",
                  "es": "Agitado húmedo usa más hielo",
                  "de": "Nasses Schütteln verwendet mehr Eis",
                  "nl": "Nat schudden gebruikt meer ijs"
        },
        {
                  "en": "There is no difference",
                  "es": "No hay diferencia",
                  "de": "Es gibt keinen Unterschied",
                  "nl": "Er is geen verschil"
        },
        {
                  "en": "Dry shake is without ice first, then with ice",
                  "es": "Agitado seco es primero sin hielo, luego con hielo",
                  "de": "Trockenes Schütteln ist zuerst ohne Eis, dann mit Eis",
                  "nl": "Droog schudden is eerst zonder ijs, dan met ijs"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Dry shake involves shaking ingredients (especially with egg white) without ice first to emulsify proteins, then adding ice for a second shake to chill and dilute, creating better foam texture.",
                  "es": "El agitado seco implica agitar ingredientes (especialmente con clara de huevo) primero sin hielo para emulsificar proteínas, luego añadir hielo para un segundo agitado para enfriar y diluir, creando mejor textura de espuma.",
                  "de": "Trockenes Schütteln beinhaltet das Schütteln von Zutaten (besonders mit Eiweiß) zuerst ohne Eis, um Proteine zu emulgieren, dann Eis hinzufügen für ein zweites Schütteln zum Kühlen und Verdünnen, was bessere Schaumtextur erzeugt.",
                  "nl": "Droog schudden houdt in dat ingrediënten (vooral met eiwit) eerst zonder ijs worden geschud om eiwitten te emulgeren, dan ijs toevoegen voor een tweede schud om te koelen en verdunnen, wat betere schuimtextuur creëert."
        }
      },
      {
        question: {
                  "en": "What is a 'fat wash' technique in mixology?",
                  "es": "¿Qué es la técnica de 'lavado graso' en mixología?",
                  "de": "Was ist eine 'Fett-Waschung' Technik in der Mixologie?",
                  "nl": "Wat is een 'vet-was' techniek in de mixologie?"
        },
        options: [
        {
                  "en": "Infusing spirits with fat-soluble flavors",
                  "es": "Infundir licores con sabores solubles en grasa",
                  "de": "Spirituosen mit fettlöslichen Aromen anreichern",
                  "nl": "Spirits infuseren met vetoplosbare smaken"
        },
        {
                  "en": "Removing fat from ingredients",
                  "es": "Eliminar grasa de ingredientes",
                  "de": "Fett aus Zutaten entfernen",
                  "nl": "Vet verwijderen uit ingrediënten"
        },
        {
                  "en": "Adding cream to cocktails",
                  "es": "Añadir crema a cócteles",
                  "de": "Sahne zu Cocktails hinzufügen",
                  "nl": "Room toevoegen aan cocktails"
        },
        {
                  "en": "Washing glasses with fatty substances",
                  "es": "Lavar vasos con sustancias grasas",
                  "de": "Gläser mit fettigen Substanzen waschen",
                  "nl": "Glazen wassen met vettige stoffen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Fat washing involves infusing spirits with fat (like bacon fat or butter) at room temperature, then freezing to solidify the fat for removal, leaving behind unique fat-soluble flavors in the spirit.",
                  "es": "El lavado graso implica infundir licores con grasa (como grasa de tocino o mantequilla) a temperatura ambiente, luego congelar para solidificar la grasa y removerla, dejando sabores únicos solubles en grasa en el licor.",
                  "de": "Fett-Waschung beinhaltet das Anreichern von Spirituosen mit Fett (wie Speckfett oder Butter) bei Raumtemperatur, dann Einfrieren, um das Fett zu verfestigen und zu entfernen, wobei einzigartige fettlösliche Aromen in der Spirituose zurückbleiben.",
                  "nl": "Vet-wassen houdt in dat spirits worden geïnfuseerd met vet (zoals spekvet of boter) op kamertemperatuur, dan bevriezen om het vet te verstevigen voor verwijdering, waarbij unieke vetoplosbare smaken in de spirit achterblijven."
        }
      },
      {
        question: {
                  "en": "What is the purpose of 'clarifying' cocktails?",
                  "es": "¿Cuál es el propósito de 'clarificar' cócteles?",
                  "de": "Was ist der Zweck der 'Klärung' von Cocktails?",
                  "nl": "Wat is het doel van het 'verhelderen' van cocktails?"
        },
        options: [
        {
                  "en": "To make cocktails stronger",
                  "es": "Para hacer cócteles más fuertes",
                  "de": "Um Cocktails stärker zu machen",
                  "nl": "Om cocktails sterker te maken"
        },
        {
                  "en": "To remove alcohol content",
                  "es": "Para eliminar contenido alcohólico",
                  "de": "Um Alkoholgehalt zu entfernen",
                  "nl": "Om alcoholgehalte te verwijderen"
        },
        {
                  "en": "To add carbonation",
                  "es": "Para añadir carbonatación",
                  "de": "Um Kohlensäure hinzuzufügen",
                  "nl": "Om koolzuur toe te voegen"
        },
        {
                  "en": "To create crystal clear appearance while retaining flavor",
                  "es": "Para crear apariencia cristalina manteniendo el sabor",
                  "de": "Um kristallklares Aussehen zu schaffen bei Beibehaltung des Geschmacks",
                  "nl": "Om kristalheldere uitstraling te creëren terwijl smaak behouden blijft"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Clarification techniques (like milk clarification or gelatin filtering) remove particles and cloudiness while preserving or even enhancing flavors, creating visually stunning clear cocktails.",
                  "es": "Las técnicas de clarificación (como clarificación con leche o filtrado con gelatina) eliminan partículas y turbidez mientras preservan o incluso realzan sabores, creando cócteles claros visualmente impresionantes.",
                  "de": "Klärtechniken (wie Milchklärung oder Gelatinefilterung) entfernen Partikel und Trübung bei Erhaltung oder sogar Verstärkung der Aromen, schaffen visuell beeindruckende klare Cocktails.",
                  "nl": "Verhelderingstechnieken (zoals melkverheldering of gelatinefiltering) verwijderen deeltjes en troebeling terwijl smaken behouden of zelfs versterkt worden, wat visueel verbluffende heldere cocktails creëert."
        }
      },
      {
        question: {
                  "en": "What is the ideal dilution percentage for most shaken cocktails?",
                  "es": "¿Cuál es el porcentaje ideal de dilución para la mayoría de cócteles agitados?",
                  "de": "Was ist der ideale Verdünnungsprozentsatz für die meisten geschüttelten Cocktails?",
                  "nl": "Wat is het ideale verdunningspercentage voor de meeste geschudde cocktails?"
        },
        options: [
        {
                  "en": "20-25%",
                  "es": "20-25%",
                  "de": "20-25%",
                  "nl": "20-25%"
        },
        {
                  "en": "35-40%",
                  "es": "35-40%",
                  "de": "35-40%",
                  "nl": "35-40%"
        },
        {
                  "en": "50-55%",
                  "es": "50-55%",
                  "de": "50-55%",
                  "nl": "50-55%"
        },
        {
                  "en": "5-10%",
                  "es": "5-10%",
                  "de": "5-10%",
                  "nl": "5-10%"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Most properly shaken cocktails achieve optimal balance with 20-25% dilution from melted ice, which integrates flavors, reduces alcohol burn, and creates proper mouthfeel.",
                  "es": "La mayoría de cócteles agitados correctamente logran equilibrio óptimo con 20-25% de dilución del hielo derretido, que integra sabores, reduce el ardor del alcohol y crea sensación bucal apropiada.",
                  "de": "Die meisten richtig geschüttelten Cocktails erreichen optimale Balance mit 20-25% Verdünnung durch geschmolzenes Eis, was Aromen integriert, Alkoholbrennen reduziert und richtiges Mundgefühl schafft.",
                  "nl": "De meeste goed geschudde cocktails bereiken optimale balans met 20-25% verdunning van gesmolten ijs, wat smaken integreert, alcoholbrand vermindert en juist mondgevoel creëert."
        }
      },
      {
        question: {
                  "en": "What is 'reverse dry shake' technique?",
                  "es": "¿Qué es la técnica de 'agitado seco inverso'?",
                  "de": "Was ist die 'umgekehrte trockene Schüttel' Technik?",
                  "nl": "Wat is de 'omgekeerde droge schud' techniek?"
        },
        options: [
        {
                  "en": "Shaking with ice first, then without ice",
                  "es": "Agitar con hielo primero, luego sin hielo",
                  "de": "Erst mit Eis schütteln, dann ohne Eis",
                  "nl": "Eerst met ijs schudden, dan zonder ijs"
        },
        {
                  "en": "Not shaking at all",
                  "es": "No agitar en absoluto",
                  "de": "Überhaupt nicht schütteln",
                  "nl": "Helemaal niet schudden"
        },
        {
                  "en": "Using dry ice instead of regular ice",
                  "es": "Usar hielo seco en lugar de hielo regular",
                  "de": "Trockeneis statt normalem Eis verwenden",
                  "nl": "Droogijs gebruiken in plaats van gewoon ijs"
        },
        {
                  "en": "Shaking ingredients separately",
                  "es": "Agitar ingredientes por separado",
                  "de": "Zutaten separat schütteln",
                  "nl": "Ingrediënten afzonderlijk schudden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Reverse dry shake involves first shaking with ice to chill and dilute, then removing ice and dry shaking again to create dense, long-lasting foam, often preferred for egg white cocktails.",
                  "es": "El agitado seco inverso implica primero agitar con hielo para enfriar y diluir, luego quitar el hielo y agitar seco otra vez para crear espuma densa y duradera, a menudo preferido para cócteles con clara de huevo.",
                  "de": "Umgekehrtes trockenes Schütteln beinhaltet zuerst Schütteln mit Eis zum Kühlen und Verdünnen, dann Eis entfernen und erneut trocken schütteln, um dichten, langanhaltenden Schaum zu erzeugen, oft bevorzugt für Eiweiß-Cocktails.",
                  "nl": "Omgekeerde droge schud houdt in dat eerst met ijs wordt geschud om te koelen en verdunnen, dan ijs weggenomen en opnieuw droog geschud om dichte, langdurige schuim te creëren, vaak geprefereerd voor eiwit cocktails."
        }
      },
      {
        question: {
                  "en": "What is the primary purpose of using bitters in cocktails?",
                  "es": "¿Cuál es el propósito principal de usar amargos en cócteles?",
                  "de": "Was ist der Hauptzweck der Verwendung von Bittern in Cocktails?",
                  "nl": "Wat is het hoofddoel van het gebruiken van bitters in cocktails?"
        },
        options: [
        {
                  "en": "To make drinks fizzy",
                  "es": "Para hacer bebidas gaseosas",
                  "de": "Um Getränke sprudelnd zu machen",
                  "nl": "Om drankjes bruisend te maken"
        },
        {
                  "en": "To add sweetness",
                  "es": "Para añadir dulzura",
                  "de": "Um Süße hinzuzufügen",
                  "nl": "Om zoetheid toe te voegen"
        },
        {
                  "en": "To increase alcohol content",
                  "es": "Para aumentar contenido alcohólico",
                  "de": "Um Alkoholgehalt zu erhöhen",
                  "nl": "Om alcoholgehalte te verhogen"
        },
        {
                  "en": "To balance flavors and add complexity",
                  "es": "Para equilibrar sabores y añadir complejidad",
                  "de": "Um Aromen auszugleichen und Komplexität hinzuzufügen",
                  "nl": "Om smaken te balanceren en complexiteit toe te voegen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Bitters function as the 'salt and pepper' of cocktails, adding depth, balancing sweet and sour elements, and providing aromatic complexity with just a few dashes.",
                  "es": "Los amargos funcionan como la 'sal y pimienta' de los cócteles, añadiendo profundidad, equilibrando elementos dulces y ácidos, y proporcionando complejidad aromática con solo unas gotas.",
                  "de": "Bitter funktionieren als 'Salz und Pfeffer' von Cocktails, fügen Tiefe hinzu, gleichen süße und saure Elemente aus und bieten aromatische Komplexität mit nur wenigen Spritzern.",
                  "nl": "Bitters functioneren als het 'zout en peper' van cocktails, voegen diepte toe, balanceren zoete en zure elementen, en bieden aromatische complexiteit met slechts een paar druppels."
        }
      },
      {
        question: {
                  "en": "What is the technique called when you ignite citrus oils over a cocktail?",
                  "es": "¿Cómo se llama la técnica cuando enciendes aceites cítricos sobre un cóctel?",
                  "de": "Wie heißt die Technik, wenn man Zitrusöle über einem Cocktail anzündet?",
                  "nl": "Hoe heet de techniek wanneer je citrusoliën boven een cocktail ontsteekt?"
        },
        options: [
        {
                  "en": "Igniting",
                  "es": "Encendido",
                  "de": "Entzünden",
                  "nl": "Ontsteken"
        },
        {
                  "en": "Torching",
                  "es": "Quemado",
                  "de": "Brennen",
                  "nl": "Branden"
        },
        {
                  "en": "Flaming",
                  "es": "Flameado",
                  "de": "Flambieren",
                  "nl": "Flammen"
        },
        {
                  "en": "Expressing",
                  "es": "Expresar",
                  "de": "Ausdrücken",
                  "nl": "Uitdrukken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Flaming involves expressing citrus oils through an open flame, which ignites the oils creating a dramatic visual effect and adding caramelized citrus aromatics to the cocktail.",
                  "es": "El flameado implica expresar aceites cítricos a través de una llama abierta, que enciende los aceites creando un efecto visual dramático y añadiendo aromáticos cítricos caramelizados al cóctel.",
                  "de": "Flambieren beinhaltet das Ausdrücken von Zitrusölen durch eine offene Flamme, die die Öle entzündet und einen dramatischen visuellen Effekt schafft sowie karamelisierte Zitrusaromen zum Cocktail hinzufügt.",
                  "nl": "Flammen houdt in dat citrusoliën door een open vlam worden uitgedrukt, wat de oliën ontsteekt en een dramatisch visueel effect creëert en gekarameliseerde citrusaroma's aan de cocktail toevoegt."
        }
      },
      {
        question: {
                  "en": "What is the purpose of 'rinsing' a glass in cocktail preparation?",
                  "es": "¿Cuál es el propósito de 'enjuagar' un vaso en la preparación de cócteles?",
                  "de": "Was ist der Zweck des 'Spülens' eines Glases bei der Cocktailzubereitung?",
                  "nl": "Wat is het doel van het 'spoelen' van een glas bij cocktailbereiding?"
        },
        options: [
        {
                  "en": "To remove ice crystals",
                  "es": "Para eliminar cristales de hielo",
                  "de": "Um Eiskristalle zu entfernen",
                  "nl": "Om ijskristallen te verwijderen"
        },
        {
                  "en": "To chill the glass",
                  "es": "Para enfriar el vaso",
                  "de": "Um das Glas zu kühlen",
                  "nl": "Om het glas te koelen"
        },
        {
                  "en": "To clean the glass",
                  "es": "Para limpiar el vaso",
                  "de": "Um das Glas zu reinigen",
                  "nl": "Om het glas te reinigen"
        },
        {
                  "en": "To coat the glass with aromatic spirit",
                  "es": "Para recubrir el vaso con licor aromático",
                  "de": "Um das Glas mit aromatischer Spirituose zu beschichten",
                  "nl": "Om het glas te bekleden met aromatische spirit"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Rinsing involves coating the inside of a glass with a small amount of aromatic spirit (like absinthe or scotch), then discarding the excess, leaving only the aroma and subtle flavor enhancement.",
                  "es": "Enjuagar implica recubrir el interior de un vaso con una pequeña cantidad de licor aromático (como absenta o whisky escocés), luego descartar el exceso, dejando solo el aroma y mejora sutil del sabor.",
                  "de": "Spülen beinhaltet das Beschichten des Glasinneren mit einer kleinen Menge aromatischer Spirituose (wie Absinth oder Scotch), dann den Überschuss entfernen, nur Aroma und subtile Geschmacksverstärkung hinterlassend.",
                  "nl": "Spoelen houdt in dat de binnenkant van een glas wordt bekleed met een kleine hoeveelheid aromatische spirit (zoals absint of scotch), dan het overschot weggooien, alleen de geur en subtiele smaakverbetering achterlatend."
        }
      },
      {
        question: {
                  "en": "What is 'nitro muddling' in modern mixology?",
                  "es": "¿Qué es el 'machacado con nitrógeno' en mixología moderna?",
                  "de": "Was ist 'Nitro-Muddeln' in der modernen Mixologie?",
                  "nl": "Wat is 'nitro muddlen' in moderne mixologie?"
        },
        options: [
        {
                  "en": "A marketing term with no real meaning",
                  "es": "Un término de marketing sin significado real",
                  "de": "Ein Marketingbegriff ohne echte Bedeutung",
                  "nl": "Een marketingterm zonder echte betekenis"
        },
        {
                  "en": "Using liquid nitrogen to instantly freeze ingredients",
                  "es": "Usar nitrógeno líquido para congelar instantáneamente ingredientes",
                  "de": "Flüssigstickstoff verwenden, um Zutaten sofort einzufrieren",
                  "nl": "Vloeibare stikstof gebruiken om ingrediënten onmiddellijk te bevriezen"
        },
        {
                  "en": "Muddling with special nitrogen-infused tools",
                  "es": "Machacar con herramientas especiales infundidas con nitrógeno",
                  "de": "Muddeln mit speziellen stickstoffinfundierten Werkzeugen",
                  "nl": "Muddlen met speciale stikstof-geïnfuseerde gereedschappen"
        },
        {
                  "en": "Adding nitrogen gas to cocktails",
                  "es": "Añadir gas nitrógeno a cócteles",
                  "de": "Stickstoffgas zu Cocktails hinzufügen",
                  "nl": "Stikstofgas toevoegen aan cocktails"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Nitro muddling uses liquid nitrogen to instantly freeze herbs or fruits at extremely low temperatures, creating unique textures and preserving volatile aromatics when muddled.",
                  "es": "El machacado con nitrógeno usa nitrógeno líquido para congelar instantáneamente hierbas o frutas a temperaturas extremadamente bajas, creando texturas únicas y preservando aromáticos volátiles cuando se machacan.",
                  "de": "Nitro-Muddeln verwendet flüssigen Stickstoff, um Kräuter oder Früchte bei extrem niedrigen Temperaturen sofort einzufrieren, einzigartige Texturen zu schaffen und flüchtige Aromastoffe beim Muddeln zu bewahren.",
                  "nl": "Nitro muddlen gebruikt vloeibare stikstof om kruiden of fruit onmiddellijk te bevriezen bij extreem lage temperaturen, unieke texturen te creëren en vluchtige aromastoffen te behouden bij het muddlen."
        }
      },
      {
        question: {
                  "en": "What is a 'Nick and Nora' glass?",
                  "es": "¿Qué es una copa 'Nick and Nora'?",
                  "de": "Was ist ein 'Nick and Nora'-Glas?",
                  "nl": "Wat is een 'Nick and Nora' glas?"
        },
        options: [
        {
                  "en": "Bell-shaped coupe glass for cocktails",
                  "es": "Copa en forma de campana para cócteles",
                  "de": "Glockenförmiges Coupe-Glas für Cocktails",
                  "nl": "Klokvormig coupe glas voor cocktails"
        },
        {
                  "en": "Tall Collins glass",
                  "es": "Vaso Collins alto",
                  "de": "Hohes Collins-Glas",
                  "nl": "Hoog Collins glas"
        },
        {
                  "en": "Shot glass",
                  "es": "Vaso de chupito",
                  "de": "Schnapsglas",
                  "nl": "Shotglaasje"
        },
        {
                  "en": "Beer mug",
                  "es": "Jarra de cerveza",
                  "de": "Bierkrug",
                  "nl": "Bierpul"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Nick and Nora glasses are elegant, bell-shaped stemmed glasses holding 5-6oz, named after characters from 'The Thin Man,' perfect for stirred cocktails without ice.",
                  "es": "Las copas Nick and Nora son elegantes copas en forma de campana que contienen 5-6oz, nombradas por personajes de 'The Thin Man,' perfectas para cócteles revueltos sin hielo.",
                  "de": "Nick and Nora-Gläser sind elegante, glockenförmige Stielgläser mit 5-6oz, benannt nach Charakteren aus 'The Thin Man,' perfekt für gerührte Cocktails ohne Eis.",
                  "nl": "Nick and Nora glazen zijn elegante, klokvormige gesteelde glazen van 5-6oz, vernoemd naar personages uit 'The Thin Man,' perfect voor geroerde cocktails zonder ijs."
        }
      },
      {
        question: {
                  "en": "What distinguishes Japanese bartending style?",
                  "es": "¿Qué distingue el estilo de coctelería japonés?",
                  "de": "Was zeichnet den japanischen Barkeeper-Stil aus?",
                  "nl": "Wat onderscheidt de Japanse bartender stijl?"
        },
        options: [
        {
                  "en": "Precision, ritual, and meticulous technique",
                  "es": "Precisión, ritual y técnica meticulosa",
                  "de": "Präzision, Ritual und akribische Technik",
                  "nl": "Precisie, ritueel en nauwgezette techniek"
        },
        {
                  "en": "Large portions",
                  "es": "Porciones grandes",
                  "de": "Große Portionen",
                  "nl": "Grote porties"
        },
        {
                  "en": "Using only sake",
                  "es": "Usar solo sake",
                  "de": "Nur Sake verwenden",
                  "nl": "Alleen sake gebruiken"
        },
        {
                  "en": "Fast speed service",
                  "es": "Servicio de velocidad rápida",
                  "de": "Schneller Service",
                  "nl": "Snelle service"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Japanese bartending emphasizes precision, respect for ingredients, perfect dilution, hand-carved ice, and ritualistic preparation—elevating cocktail making to an art form.",
                  "es": "La coctelería japonesa enfatiza la precisión, respeto por los ingredientes, dilución perfecta, hielo tallado a mano y preparación ritualista—elevando la preparación de cócteles a una forma de arte.",
                  "de": "Japanisches Bartending betont Präzision, Respekt vor Zutaten, perfekte Verdünnung, handgeschnitztes Eis und rituelle Zubereitung—hebt Cocktail-Making zur Kunstform.",
                  "nl": "Japanse bartending benadrukt precisie, respect voor ingrediënten, perfecte verdunning, handgesneden ijs en rituele bereiding—verheft cocktail maken tot kunstvorm."
        }
      },
      {
        question: {
                  "en": "What is 'fat washing' in mixology?",
                  "es": "¿Qué es el 'lavado de grasa' en mixología?",
                  "de": "Was ist 'Fettwaschen' in der Mixologie?",
                  "nl": "Wat is 'vetwassen' in mixologie?"
        },
        options: [
        {
                  "en": "Cleaning bar equipment",
                  "es": "Limpiar equipo de bar",
                  "de": "Barausrüstung reinigen",
                  "nl": "Bar apparatuur schoonmaken"
        },
        {
                  "en": "Removing oil from citrus",
                  "es": "Eliminar aceite de cítricos",
                  "de": "Öl von Zitrusfrüchten entfernen",
                  "nl": "Olie van citrus verwijderen"
        },
        {
                  "en": "Straining technique",
                  "es": "Técnica de colado",
                  "de": "Abseihtechnik",
                  "nl": "Zeeftechniek"
        },
        {
                  "en": "Infusing spirits with fat flavors (bacon, butter)",
                  "es": "Infusionar licores con sabores grasos (tocino, mantequilla)",
                  "de": "Spirituosen mit Fettaromen (Speck, Butter) infundieren",
                  "nl": "Spirits infuseren met vetsmaken (spek, boter)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Fat washing infuses spirits with rich flavors by mixing with melted fat (bacon, brown butter), freezing to separate, then straining. Famous in cocktails like bacon-washed bourbon Old Fashioned.",
                  "es": "El lavado de grasa infusiona licores con sabores ricos mezclando con grasa derretida (tocino, mantequilla marrón), congelando para separar, luego colando. Famoso en cócteles como Old Fashioned de bourbon lavado con tocino.",
                  "de": "Fettwaschen infundiert Spirituosen mit reichen Aromen durch Mischen mit geschmolzenem Fett (Speck, braune Butter), Einfrieren zur Trennung, dann Abseihen. Berühmt in Cocktails wie Speck-gewaschenem Bourbon Old Fashioned.",
                  "nl": "Vetwassen infuseert spirits met rijke smaken door te mengen met gesmolten vet (spek, bruine boter), bevriezen om te scheiden, dan zeven. Beroemd in cocktails zoals bacon-gewassen bourbon Old Fashioned."
        }
      },
      {
        question: {
                  "en": "What is a 'Death Flip'?",
                  "es": "¿Qué es un 'Death Flip'?",
                  "de": "Was ist ein 'Death Flip'?",
                  "nl": "Wat is een 'Death Flip'?"
        },
        options: [
        {
                  "en": "Layering ingredients",
                  "es": "Capas de ingredientes",
                  "de": "Zutaten schichten",
                  "nl": "Ingrediënten lagen"
        },
        {
                  "en": "Adding whole egg to spirit-forward cocktails",
                  "es": "Agregar huevo entero a cócteles con base de licor",
                  "de": "Ganzes Ei zu spirituosenstarken Cocktails hinzufügen",
                  "nl": "Heel ei toevoegen aan spirit-forward cocktails"
        },
        {
                  "en": "Flipping bottles",
                  "es": "Voltear botellas",
                  "de": "Flaschen werfen",
                  "nl": "Flessen omkeren"
        },
        {
                  "en": "Inverting the glass",
                  "es": "Invertir el vaso",
                  "de": "Das Glas umdrehen",
                  "nl": "Het glas omkeren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A Death Flip uses a whole egg in spirit-forward cocktails (like adding egg to a Manhattan), creating rich texture while maintaining strength. Named for the risky technique.",
                  "es": "Un Death Flip usa un huevo entero en cócteles con base de licor (como agregar huevo a un Manhattan), creando textura rica mientras mantiene la fuerza. Nombrado por la técnica arriesgada.",
                  "de": "Ein Death Flip verwendet ein ganzes Ei in spirituosenstarken Cocktails (wie Ei zu einem Manhattan hinzufügen), schafft reiche Textur bei Beibehaltung der Stärke. Benannt nach der riskanten Technik.",
                  "nl": "Een Death Flip gebruikt een heel ei in spirit-forward cocktails (zoals ei toevoegen aan een Manhattan), wat rijke textuur creëert terwijl sterkte behouden blijft. Vernoemd naar de risicovolle techniek."
        }
      },
      {
        question: {
                  "en": "What is a 'Collins' cocktail template?",
                  "es": "¿Qué es una plantilla de cóctel 'Collins'?",
                  "de": "Was ist eine 'Collins'-Cocktail-Vorlage?",
                  "nl": "Wat is een 'Collins' cocktail sjabloon?"
        },
        options: [
        {
                  "en": "Spirit, lemon juice, sugar, topped with soda",
                  "es": "Licor, jugo de limón, azúcar, cubierto con soda",
                  "de": "Spirituose, Zitronensaft, Zucker, mit Soda aufgefüllt",
                  "nl": "Spirit, citroensap, suiker, aangevuld met soda"
        },
        {
                  "en": "Frozen drink",
                  "es": "Bebida congelada",
                  "de": "Gefrorenes Getränk",
                  "nl": "Bevroren drankje"
        },
        {
                  "en": "Hot drink template",
                  "es": "Plantilla de bebida caliente",
                  "de": "Heißgetränk-Vorlage",
                  "nl": "Warm drankje sjabloon"
        },
        {
                  "en": "Layered shot",
                  "es": "Chupito en capas",
                  "de": "Geschichteter Shot",
                  "nl": "Gelaagde shot"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A Collins is a tall, refreshing cocktail: base spirit, lemon juice, sugar, shaken and topped with soda water over ice. Tom Collins (gin), Vodka Collins, Whiskey Collins variations exist.",
                  "es": "Un Collins es un cóctel alto y refrescante: licor base, jugo de limón, azúcar, agitado y cubierto con agua de soda sobre hielo. Existen variaciones de Tom Collins (ginebra), Vodka Collins, Whiskey Collins.",
                  "de": "Ein Collins ist ein hoher, erfrischender Cocktail: Basis-Spirituose, Zitronensaft, Zucker, geschüttelt und mit Sodawasser über Eis aufgefüllt. Tom Collins (Gin), Vodka Collins, Whiskey Collins Variationen existieren.",
                  "nl": "Een Collins is een hoge, verfrissende cocktail: basis spirit, citroensap, suiker, geschud en aangevuld met sodawater over ijs. Tom Collins (gin), Vodka Collins, Whiskey Collins variaties bestaan."
        }
      },
      {
        question: {
                  "en": "What is 'clarified milk punch'?",
                  "es": "¿Qué es el 'ponche de leche clarificado'?",
                  "de": "Was ist 'geklärter Milchpunsch'?",
                  "nl": "Wat is 'heldere melk punch'?"
        },
        options: [
        {
                  "en": "Using milk to clarify spirits by curdling and straining",
                  "es": "Usar leche para clarificar licores cuajando y colando",
                  "de": "Milch zur Klärung von Spirituosen durch Gerinnen und Abseihen verwenden",
                  "nl": "Melk gebruiken om spirits te verhelderen door te stremmen en zeven"
        },
        {
                  "en": "Adding cream to cocktails",
                  "es": "Agregar crema a cócteles",
                  "de": "Sahne zu Cocktails hinzufügen",
                  "nl": "Room toevoegen aan cocktails"
        },
        {
                  "en": "Milk-based shot",
                  "es": "Chupito a base de leche",
                  "de": "Milchbasierter Shot",
                  "nl": "Melkgebaseerde shot"
        },
        {
                  "en": "Hot milk cocktail",
                  "es": "Cóctel de leche caliente",
                  "de": "Heißer Milchcocktail",
                  "nl": "Warme melk cocktail"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Clarified milk punch uses acid to curdle milk, which traps impurities. After straining, you get a crystal-clear, silky-textured cocktail with extended shelf life. Historic technique from 1700s.",
                  "es": "El ponche de leche clarificado usa ácido para cuajar la leche, que atrapa impurezas. Después de colar, obtienes un cóctel cristalino con textura sedosa y vida útil extendida. Técnica histórica de los 1700s.",
                  "de": "Geklärter Milchpunsch verwendet Säure zum Gerinnen von Milch, die Unreinheiten einfängt. Nach dem Abseihen erhält man einen kristallklaren Cocktail mit seidiger Textur und verlängerter Haltbarkeit. Historische Technik aus den 1700ern.",
                  "nl": "Heldere melk punch gebruikt zuur om melk te stremmen, wat onzuiverheden vangt. Na zeven krijg je een kristalheldere cocktail met zijdezachte textuur en langere houdbaarheid. Historische techniek uit de jaren 1700."
        }
      },
      {
        question: {
                  "en": "What is the difference between a Fizz and Collins?",
                  "es": "¿Cuál es la diferencia entre un Fizz y un Collins?",
                  "de": "Was ist der Unterschied zwischen Fizz und Collins?",
                  "nl": "Wat is het verschil tussen een Fizz en Collins?"
        },
        options: [
        {
                  "en": "Fizz is shaken without ice first, served in smaller glass",
                  "es": "Fizz se agita primero sin hielo, servido en vaso más pequeño",
                  "de": "Fizz wird zuerst ohne Eis geschüttelt, in kleinerem Glas serviert",
                  "nl": "Fizz wordt eerst zonder ijs geschud, geserveerd in kleiner glas"
        },
        {
                  "en": "Fizz has no ice",
                  "es": "Fizz no tiene hielo",
                  "de": "Fizz hat kein Eis",
                  "nl": "Fizz heeft geen ijs"
        },
        {
                  "en": "Collins has egg white",
                  "es": "Collins tiene clara de huevo",
                  "de": "Collins hat Eiweiß",
                  "nl": "Collins heeft eiwit"
        },
        {
                  "en": "No difference",
                  "es": "Sin diferencia",
                  "de": "Kein Unterschied",
                  "nl": "Geen verschil"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A Fizz is shaken vigorously without ice first (or with egg white), then strained and served in a smaller glass with less dilution. Collins is built in a tall glass with ice.",
                  "es": "Un Fizz se agita vigorosamente primero sin hielo (o con clara de huevo), luego se cuela y se sirve en un vaso más pequeño con menos dilución. Collins se construye en un vaso alto con hielo.",
                  "de": "Ein Fizz wird zuerst kräftig ohne Eis geschüttelt (oder mit Eiweiß), dann abgeseiht und in einem kleineren Glas mit weniger Verdünnung serviert. Collins wird in einem hohen Glas mit Eis gebaut.",
                  "nl": "Een Fizz wordt eerst krachtig zonder ijs geschud (of met eiwit), dan gezeefd en geserveerd in een kleiner glas met minder verdunning. Collins wordt in een hoog glas met ijs gebouwd."
        }
      },
      {
        question: {
                  "en": "What is 'Oleo Saccharum'?",
                  "es": "¿Qué es 'Oleo Saccharum'?",
                  "de": "Was ist 'Oleo Saccharum'?",
                  "nl": "Wat is 'Oleo Saccharum'?"
        },
        options: [
        {
                  "en": "Citrus oil extracted with sugar",
                  "es": "Aceite de cítricos extraído con azúcar",
                  "de": "Mit Zucker extrahiertes Zitrusöl",
                  "nl": "Citrusolie geëxtraheerd met suiker"
        },
        {
                  "en": "Garnish technique",
                  "es": "Técnica de guarnición",
                  "de": "Garnierungstechnik",
                  "nl": "Garnering techniek"
        },
        {
                  "en": "Italian liqueur",
                  "es": "Licor italiano",
                  "de": "Italienischer Likör",
                  "nl": "Italiaanse likeur"
        },
        {
                  "en": "Type of rum",
                  "es": "Tipo de ron",
                  "de": "Rumsorte",
                  "nl": "Soort rum"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Oleo Saccharum ('oil sugar') extracts citrus oils from peels using sugar, creating an intensely flavored syrup used in punches and classic cocktails. Key ingredient in historic punch recipes.",
                  "es": "Oleo Saccharum ('aceite azúcar') extrae aceites de cítricos de las cáscaras usando azúcar, creando un jarabe intensamente saborizado usado en ponches y cócteles clásicos. Ingrediente clave en recetas históricas de ponche.",
                  "de": "Oleo Saccharum ('Ölzucker') extrahiert Zitrusöle aus Schalen mit Zucker und erzeugt einen intensiv aromatisierten Sirup für Punches und klassische Cocktails. Schlüsselzutat in historischen Punch-Rezepten.",
                  "nl": "Oleo Saccharum ('olie suiker') extraheert citrusoliën uit schillen met suiker, wat een intens gearomatiseerde siroop creëert gebruikt in punches en klassieke cocktails. Belangrijk ingrediënt in historische punch recepten."
        }
      },
      {
        question: {
                  "en": "What is 'Navy Strength' spirit?",
                  "es": "¿Qué es un licor 'Navy Strength'?",
                  "de": "Was ist 'Navy Strength'-Spirituose?",
                  "nl": "Wat is 'Navy Strength' spirit?"
        },
        options: [
        {
                  "en": "Minimum 57% ABV (114 proof)",
                  "es": "Mínimo 57% ABV (114 proof)",
                  "de": "Mindestens 57% ABV (114 proof)",
                  "nl": "Minimaal 57% ABV (114 proof)"
        },
        {
                  "en": "Contains sea salt",
                  "es": "Contiene sal marina",
                  "de": "Enthält Meersalz",
                  "nl": "Bevat zeezout"
        },
        {
                  "en": "Aged at sea",
                  "es": "Envejecido en el mar",
                  "de": "Auf See gereift",
                  "nl": "Gerijpt op zee"
        },
        {
                  "en": "Made for sailors",
                  "es": "Hecho para marineros",
                  "de": "Für Seeleute gemacht",
                  "nl": "Gemaakt voor zeelui"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Navy Strength spirits are minimum 57% ABV—historically the strength at which gunpowder would still ignite if soaked, proving the spirit's proof to British Royal Navy sailors.",
                  "es": "Los licores Navy Strength son mínimo 57% ABV—históricamente la fuerza a la que la pólvora aún se encendería si se empapaba, probando el grado del licor a los marineros de la Royal Navy británica.",
                  "de": "Navy Strength-Spirituosen sind mindestens 57% ABV—historisch die Stärke, bei der Schießpulver noch zünden würde, wenn eingeweicht, was den Beweis der Spirituose für britische Royal Navy-Seeleute erbrachte.",
                  "nl": "Navy Strength spirits zijn minimaal 57% ABV—historisch de sterkte waarbij buskruit nog zou ontbranden als gedrenkt, wat het bewijs van de spirit leverde aan Britse Royal Navy zeelui."
        }
      },
      {
        question: {
                  "en": "What is 'centrifugation' in cocktail making?",
                  "es": "¿Qué es la 'centrifugación' en la preparación de cócteles?",
                  "de": "Was ist 'Zentrifugation' bei der Cocktail-Zubereitung?",
                  "nl": "Wat is 'centrifugeren' in cocktail maken?"
        },
        options: [
        {
                  "en": "Using centrifugal force to clarify and separate ingredients",
                  "es": "Usar fuerza centrífuga para clarificar y separar ingredientes",
                  "de": "Zentrifugalkraft verwenden, um Zutaten zu klären und zu trennen",
                  "nl": "Centrifugale kracht gebruiken om ingrediënten te verhelderen en scheiden"
        },
        {
                  "en": "Using a blender",
                  "es": "Usar una licuadora",
                  "de": "Einen Mixer verwenden",
                  "nl": "Een blender gebruiken"
        },
        {
                  "en": "Stirring in circles",
                  "es": "Revolver en círculos",
                  "de": "Im Kreis rühren",
                  "nl": "In cirkels roeren"
        },
        {
                  "en": "Spinning the shaker very fast",
                  "es": "Girar la coctelera muy rápido",
                  "de": "Den Shaker sehr schnell drehen",
                  "nl": "De shaker heel snel draaien"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Centrifugation uses high-speed spinning equipment to separate liquids by density, creating crystal-clear juices and infusions. A molecular gastronomy technique adopted by high-end cocktail bars.",
                  "es": "La centrifugación usa equipo de giro de alta velocidad para separar líquidos por densidad, creando jugos e infusiones cristalinos. Una técnica de gastronomía molecular adoptada por bares de cócteles de alta gama.",
                  "de": "Zentrifugation verwendet Hochgeschwindigkeits-Drehgeräte, um Flüssigkeiten nach Dichte zu trennen und kristallklare Säfte und Infusionen zu erzeugen. Eine molekulare Gastronomietechnik, die von High-End-Cocktailbars übernommen wurde.",
                  "nl": "Centrifugeren gebruikt hoge-snelheids draaiapparatuur om vloeistoffen te scheiden op dichtheid, wat kristalheldere sappen en infusies creëert. Een moleculaire gastronomie techniek geadopteerd door high-end cocktailbars."
        }
      },
      {
        question: {
                  "en": "What is the 'perfect' ratio in cocktails and which drinks use it?",
                  "es": "¿Cuál es la proporción 'perfecta' en cócteles y qué bebidas la usan?",
                  "de": "Was ist das 'perfekte' Verhältnis in Cocktails und welche Drinks verwenden es?",
                  "nl": "Wat is de 'perfecte' verhouding in cocktails en welke drankjes gebruiken het?"
        },
        options: [
        {
                  "en": "Equal parts sweet and dry vermouth (Perfect Manhattan, Perfect Martini)",
                  "es": "Partes iguales de vermut dulce y seco (Perfect Manhattan, Perfect Martini)",
                  "de": "Gleiche Teile süßer und trockener Wermut (Perfect Manhattan, Perfect Martini)",
                  "nl": "Gelijke delen zoete en droge vermouth (Perfect Manhattan, Perfect Martini)"
        },
        {
                  "en": "Exactly 2 oz of spirit",
                  "es": "Exactamente 2 oz de licor",
                  "de": "Genau 2 oz Spirituose",
                  "nl": "Precies 2 oz spirit"
        },
        {
                  "en": "1:1:1 ratio of all ingredients",
                  "es": "Proporción 1:1:1 de todos los ingredientes",
                  "de": "1:1:1 Verhältnis aller Zutaten",
                  "nl": "1:1:1 verhouding van alle ingrediënten"
        },
        {
                  "en": "Perfect temperature serving",
                  "es": "Servicio a temperatura perfecta",
                  "de": "Perfekte Temperatur-Servierung",
                  "nl": "Perfecte temperatuur serving"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A 'Perfect' cocktail uses equal parts sweet and dry vermouth instead of all sweet or all dry. Perfect Manhattan splits vermouth equally, creating more complex, balanced flavor than classic version.",
                  "es": "Un cóctel 'Perfecto' usa partes iguales de vermut dulce y seco en lugar de todo dulce o todo seco. Perfect Manhattan divide el vermut igualmente, creando sabor más complejo y equilibrado que la versión clásica.",
                  "de": "Ein 'Perfect' Cocktail verwendet gleiche Teile süßen und trockenen Wermut anstatt ganz süß oder ganz trocken. Perfect Manhattan teilt Wermut gleichmäßig, schafft komplexeren, ausgewogeneren Geschmack als klassische Version.",
                  "nl": "Een 'Perfect' cocktail gebruikt gelijke delen zoete en droge vermouth in plaats van alleen zoet of alleen droog. Perfect Manhattan verdeelt vermouth gelijk, creëert complexere, gebalanceerde smaak dan klassieke versie."
        }
      },
      {
        question: {
                  "en": "What is 'crusta' style serving?",
                  "es": "¿Qué es el estilo de servicio 'crusta'?",
                  "de": "Was ist 'Crusta'-Servierstil?",
                  "nl": "Wat is 'crusta' stijl serveren?"
        },
        options: [
        {
                  "en": "Sugar rim with wide spiral citrus peel lining the glass",
                  "es": "Borde de azúcar con cáscara de cítrico en espiral ancha revistiendo el vaso",
                  "de": "Zuckerrand mit breiter spiralförmiger Zitrusschale, die das Glas auskleidet",
                  "nl": "Suikerrand met brede spiraal citrusschil die het glas bekleedt"
        },
        {
                  "en": "Crushed ice serving",
                  "es": "Servicio con hielo triturado",
                  "de": "Servieren mit zerstoßenem Eis",
                  "nl": "Serveren met crushed ijs"
        },
        {
                  "en": "Layered drink presentation",
                  "es": "Presentación de bebida en capas",
                  "de": "Geschichtete Getränkepräsentation",
                  "nl": "Gelaagde drink presentatie"
        },
        {
                  "en": "Frozen rim glass",
                  "es": "Vaso con borde congelado",
                  "de": "Glas mit gefrorenem Rand",
                  "nl": "Glas met bevroren rand"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Crusta style involves a sugar-rimmed glass lined with a wide, continuous spiral of citrus peel. Brandy Crusta (1850s) is the classic example, showcasing elaborate presentation technique.",
                  "es": "El estilo crusta implica un vaso con borde de azúcar revestido con una espiral ancha y continua de cáscara de cítrico. Brandy Crusta (1850s) es el ejemplo clásico, mostrando técnica de presentación elaborada.",
                  "de": "Crusta-Stil beinhaltet ein zuckerberandetes Glas, das mit einer breiten, durchgehenden Spirale aus Zitrusschale ausgekleidet ist. Brandy Crusta (1850er) ist das klassische Beispiel für aufwendige Präsentationstechnik.",
                  "nl": "Crusta stijl houdt een suiker-omrande glas in bekleed met een brede, continue spiraal van citrusschil. Brandy Crusta (1850s) is het klassieke voorbeeld, toont uitgebreide presentatie techniek."
        }
      },
      {
        question: {
                  "en": "What is 'demerara syrup' and why is it preferred in some cocktails?",
                  "es": "¿Qué es el 'jarabe de demerara' y por qué se prefiere en algunos cócteles?",
                  "de": "Was ist 'Demerara-Sirup' und warum wird er in einigen Cocktails bevorzugt?",
                  "nl": "Wat is 'demerara siroop' en waarom heeft het de voorkeur in sommige cocktails?"
        },
        options: [
        {
                  "en": "Artificial sweetener",
                  "es": "Edulcorante artificial",
                  "de": "Künstlicher Süßstoff",
                  "nl": "Kunstmatige zoetstof"
        },
        {
                  "en": "Flavored simple syrup",
                  "es": "Jarabe simple saborizado",
                  "de": "Aromatisierter Einfachsirup",
                  "nl": "Gearomatiseerde simpele siroop"
        },
        {
                  "en": "Honey-based syrup",
                  "es": "Jarabe basado en miel",
                  "de": "Honigbasierter Sirup",
                  "nl": "Honing-gebaseerde siroop"
        },
        {
                  "en": "Syrup made with raw demerara sugar, adding caramel depth to cocktails",
                  "es": "Jarabe hecho con azúcar demerara cruda, añadiendo profundidad de caramelo a cócteles",
                  "de": "Sirup aus rohem Demerara-Zucker, fügt Karamelltiefe zu Cocktails hinzu",
                  "nl": "Siroop gemaakt met ruwe demerara suiker, voegt caramel diepte toe aan cocktails"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Demerara syrup uses raw demerara sugar (from Guyana) with molasses content intact, providing richer, more complex sweetness with caramel and toffee notes. Preferred in Old Fashioneds and spirit-forward cocktails.",
                  "es": "El jarabe de demerara usa azúcar demerara cruda (de Guyana) con contenido de melaza intacto, proporcionando dulzura más rica y compleja con notas de caramelo y toffee. Preferido en Old Fashioneds y cócteles con predominio de licor.",
                  "de": "Demerara-Sirup verwendet rohen Demerara-Zucker (aus Guyana) mit intaktem Melassegehalt, bietet reichere, komplexere Süße mit Karamell- und Toffee-Noten. Bevorzugt in Old Fashioneds und spirituosenbetonten Cocktails.",
                  "nl": "Demerara siroop gebruikt ruwe demerara suiker (uit Guyana) met melasse inhoud intact, biedt rijkere, complexere zoetheid met caramel en toffee noten. Voorkeur in Old Fashioneds en spirit-forward cocktails."
        }
      },
      {
        question: {
                  "en": "What does 'aperitif-style' mean for a cocktail?",
                  "es": "¿Qué significa 'estilo aperitivo' para un cóctel?",
                  "de": "Was bedeutet 'Aperitif-Stil' für einen Cocktail?",
                  "nl": "Wat betekent 'aperitief-stijl' voor een cocktail?"
        },
        options: [
        {
                  "en": "Always served with olives",
                  "es": "Siempre servido con aceitunas",
                  "de": "Immer mit Oliven serviert",
                  "nl": "Altijd geserveerd met olijven"
        },
        {
                  "en": "Low-ABV, bitter-sweet drinks designed to stimulate appetite before meals",
                  "es": "Bebidas de bajo ABV, agridulces diseñadas para estimular el apetito antes de comidas",
                  "de": "Niedrig-ABV, bittersüße Drinks zur Appetitanregung vor Mahlzeiten",
                  "nl": "Laag-ABV, bitterzoete drankjes ontworpen om eetlust te stimuleren voor maaltijden"
        },
        {
                  "en": "Only champagne cocktails",
                  "es": "Solo cócteles de champán",
                  "de": "Nur Champagner-Cocktails",
                  "nl": "Alleen champagne cocktails"
        },
        {
                  "en": "Morning cocktails only",
                  "es": "Solo cócteles matutinos",
                  "de": "Nur Morgen-Cocktails",
                  "nl": "Alleen ochtend cocktails"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Aperitif cocktails are lower-alcohol, often bitter-sweet drinks (Negroni Sbagliato, Spritz) meant to stimulate appetite. They use fortified wines, amari, and sparkling ingredients for refreshing pre-dinner drinking.",
                  "es": "Los cócteles aperitivo son bebidas de menor alcohol, a menudo agridulces (Negroni Sbagliato, Spritz) destinadas a estimular el apetito. Usan vinos fortificados, amari e ingredientes espumosos para beber refrescante antes de la cena.",
                  "de": "Aperitif-Cocktails sind alkoholärmere, oft bittersüße Drinks (Negroni Sbagliato, Spritz) zur Appetitanregung. Sie verwenden angereicherte Weine, Amari und sprudelnde Zutaten für erfrischendes Vor-dem-Essen-Trinken.",
                  "nl": "Aperitief cocktails zijn lagere-alcohol, vaak bitterzoete drankjes (Negroni Sbagliato, Spritz) bedoeld om eetlust te stimuleren. Ze gebruiken versterkte wijnen, amari en bruisende ingrediënten voor verfrissend voor-diner drinken."
        }
      },
      {
        question: {
                  "en": "What is a 'float' in cocktail construction?",
                  "es": "¿Qué es un 'flotador' en la construcción de cócteles?",
                  "de": "Was ist ein 'Float' in der Cocktail-Konstruktion?",
                  "nl": "Wat is een 'float' in cocktail constructie?"
        },
        options: [
        {
                  "en": "Gently layering a final spirit on top without mixing",
                  "es": "Capas suaves de un licor final encima sin mezclar",
                  "de": "Sanftes Schichten einer finalen Spirituose oben ohne Mischen",
                  "nl": "Zachtjes een laatste spirit bovenop lagen zonder mengen"
        },
        {
                  "en": "Ice floating in the drink",
                  "es": "Hielo flotando en la bebida",
                  "de": "Eis, das im Getränk schwimmt",
                  "nl": "Ijs dat in de drank drijft"
        },
        {
                  "en": "Garnish placement",
                  "es": "Colocación de guarnición",
                  "de": "Garnitur-Platzierung",
                  "nl": "Garnering plaatsing"
        },
        {
                  "en": "Foam topping",
                  "es": "Cobertura de espuma",
                  "de": "Schaumtopping",
                  "nl": "Schuim topping"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A float involves carefully pouring a final ingredient (often high-proof spirit or liqueur) over the back of a bar spoon so it layers on top. Dark 'n' Stormy traditionally floats dark rum on ginger beer.",
                  "es": "Un flotador implica verter cuidadosamente un ingrediente final (a menudo licor de alta graduación) sobre el dorso de una cuchara de bar para que forme capas encima. Dark 'n' Stormy tradicionalmente flota ron oscuro en cerveza de jengibre.",
                  "de": "Ein Float beinhaltet vorsichtiges Gießen einer finalen Zutat (oft hochprozentiger Spirituose oder Likör) über den Rücken eines Barlöffels, sodass sie oben aufliegt. Dark 'n' Stormy floatet traditionell dunklen Rum auf Ginger Beer.",
                  "nl": "Een float houdt in dat zorgvuldig een laatste ingrediënt (vaak sterke drank of likeur) over de rug van een barlepel wordt gegoten zodat het bovenop laagt. Dark 'n' Stormy float traditioneel donkere rum op gemberbier."
        }
      },
      {
        question: {
                  "en": "What is 'gomme syrup' (gum syrup)?",
                  "es": "¿Qué es el 'jarabe gomme' (jarabe de goma)?",
                  "de": "Was ist 'Gomme-Sirup' (Gummi-Sirup)?",
                  "nl": "Wat is 'gomme siroop' (gom siroop)?"
        },
        options: [
        {
                  "en": "Simple syrup with gum arabic added for silky texture",
                  "es": "Jarabe simple con goma arábiga añadida para textura sedosa",
                  "de": "Einfachsirup mit Gummi arabicum für seidige Textur",
                  "nl": "Simpele siroop met arabische gom toegevoegd voor zijdezachte textuur"
        },
        {
                  "en": "Chewing gum flavored syrup",
                  "es": "Jarabe con sabor a chicle",
                  "de": "Kaugummi-aromatisierter Sirup",
                  "nl": "Kauwgom gearomatiseerde siroop"
        },
        {
                  "en": "Gelatin-based syrup",
                  "es": "Jarabe basado en gelatina",
                  "de": "Gelatinebasierter Sirup",
                  "nl": "Gelatine-gebaseerde siroop"
        },
        {
                  "en": "Thick honey syrup",
                  "es": "Jarabe de miel espeso",
                  "de": "Dicker Honigsirup",
                  "nl": "Dikke honing siroop"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Gomme syrup is traditional simple syrup with gum arabic (acacia gum) dissolved in it, creating silky mouthfeel and preventing crystallization. Used in classic cocktails for superior texture.",
                  "es": "El jarabe gomme es jarabe simple tradicional con goma arábiga (goma de acacia) disuelta en él, creando sensación sedosa en boca y previniendo cristalización. Usado en cócteles clásicos para textura superior.",
                  "de": "Gomme-Sirup ist traditioneller Einfachsirup mit Gummi arabicum (Akaziengummi) darin gelöst, schafft seidiges Mundgefühl und verhindert Kristallisation. Verwendet in klassischen Cocktails für überlegene Textur.",
                  "nl": "Gomme siroop is traditionele simpele siroop met arabische gom (acacia gom) erin opgelost, creëert zijdezacht mondgevoel en voorkomt kristallisatie. Gebruikt in klassieke cocktails voor superieure textuur."
        }
      },
      {
        question: {
                  "en": "What is 'lengthening' a cocktail?",
                  "es": "¿Qué es 'alargar' un cóctel?",
                  "de": "Was ist das 'Verlängern' eines Cocktails?",
                  "nl": "Wat is het 'verlengen' van een cocktail?"
        },
        options: [
        {
                  "en": "Stirring longer",
                  "es": "Revolver más tiempo",
                  "de": "Länger rühren",
                  "nl": "Langer roeren"
        },
        {
                  "en": "Making drink taller in glass",
                  "es": "Hacer la bebida más alta en el vaso",
                  "de": "Getränk im Glas höher machen",
                  "nl": "Drankje hoger maken in glas"
        },
        {
                  "en": "Adding more ice",
                  "es": "Añadir más hielo",
                  "de": "Mehr Eis hinzufügen",
                  "nl": "Meer ijs toevoegen"
        },
        {
                  "en": "Adding soda, tonic, or sparkling water to lower ABV and increase volume",
                  "es": "Añadir soda, tónica o agua con gas para bajar ABV y aumentar volumen",
                  "de": "Soda, Tonic oder Sprudelwasser hinzufügen um ABV zu senken und Volumen zu erhöhen",
                  "nl": "Soda, tonic of bruisend water toevoegen om ABV te verlagen en volume te verhogen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Lengthening involves adding carbonated or still water to spirit-forward drinks, creating highball versions. Scotch & Soda lengthens scotch; Gin & Tonic lengthens gin. Reduces alcohol percentage for sessionability.",
                  "es": "Alargar implica añadir agua carbonatada o natural a bebidas con predominio de licor, creando versiones highball. Scotch & Soda alarga scotch; Gin & Tonic alarga ginebra. Reduce porcentaje de alcohol para sesionabilidad.",
                  "de": "Verlängern beinhaltet Hinzufügen von kohlensäurehaltigem oder stillem Wasser zu spirituosenbetonten Drinks, schafft Highball-Versionen. Scotch & Soda verlängert Scotch; Gin & Tonic verlängert Gin. Reduziert Alkoholprozentsatz für Sessionability.",
                  "nl": "Verlengen houdt in dat koolzuurhoudend of stil water wordt toegevoegd aan spirit-forward drankjes, creëert highball versies. Scotch & Soda verlengt scotch; Gin & Tonic verlengt gin. Vermindert alcoholpercentage voor sessionability."
        }
      },
      {
        question: {
                  "en": "What is a 'smoked cocktail' technique?",
                  "es": "¿Qué es la técnica de 'cóctel ahumado'?",
                  "de": "Was ist eine 'geräucherte Cocktail'-Technik?",
                  "nl": "Wat is een 'gerookte cocktail' techniek?"
        },
        options: [
        {
                  "en": "Charred garnish only",
                  "es": "Solo guarnición carbonizada",
                  "de": "Nur verkohlte Garnitur",
                  "nl": "Alleen verkoold garnering"
        },
        {
                  "en": "Serving with dry ice",
                  "es": "Servir con hielo seco",
                  "de": "Mit Trockeneis servieren",
                  "nl": "Serveren met droogijs"
        },
        {
                  "en": "Adding liquid smoke flavoring",
                  "es": "Añadir aromatizante de humo líquido",
                  "de": "Flüssig-Rauch-Aroma hinzufügen",
                  "nl": "Vloeibare rook smaakstof toevoegen"
        },
        {
                  "en": "Infusing smoke into cocktail using smoking gun or wood chips",
                  "es": "Infundir humo en cóctel usando pistola de humo o astillas de madera",
                  "de": "Rauch in Cocktail infundieren mit Rauchpistole oder Holzspänen",
                  "nl": "Rook in cocktail infuseren met rookpistool of houtsnippers"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Smoked cocktails use smoking guns or torched wood chips to infuse actual wood smoke into the drink or glass. Popular with whiskey cocktails (Smoked Old Fashioned), adding campfire complexity.",
                  "es": "Los cócteles ahumados usan pistolas de humo o astillas de madera quemadas para infundir humo real de madera en la bebida o vaso. Popular con cócteles de whisky (Smoked Old Fashioned), añadiendo complejidad de fogata.",
                  "de": "Geräucherte Cocktails verwenden Rauchpistolen oder angebrannte Holzspäne, um echten Holzrauch ins Getränk oder Glas zu infundieren. Beliebt bei Whiskey-Cocktails (Smoked Old Fashioned), fügt Lagerfeuer-Komplexität hinzu.",
                  "nl": "Gerookte cocktails gebruiken rookpistolen of gebrande houtsnippers om echte houtrook in de drank of glas te infuseren. Populair bij whiskey cocktails (Smoked Old Fashioned), voegt kampvuur complexiteit toe."
        }
      },
      {
        question: {
                  "en": "What is 'split base' in cocktail recipes?",
                  "es": "¿Qué es 'base dividida' en recetas de cócteles?",
                  "de": "Was ist 'Split Base' in Cocktail-Rezepten?",
                  "nl": "Wat is 'gesplitste basis' in cocktailrecepten?"
        },
        options: [
        {
                  "en": "Half alcohol, half mixer",
                  "es": "Mitad alcohol, mitad mezclador",
                  "de": "Halb Alkohol, halb Mixer",
                  "nl": "Half alcohol, half mixer"
        },
        {
                  "en": "Dividing cocktail between two glasses",
                  "es": "Dividir cóctel entre dos vasos",
                  "de": "Cocktail zwischen zwei Gläsern teilen",
                  "nl": "Cocktail verdelen tussen twee glazen"
        },
        {
                  "en": "Cracked ice technique",
                  "es": "Técnica de hielo agrietado",
                  "de": "Gebrochene Eis-Technik",
                  "nl": "Gebroken ijs techniek"
        },
        {
                  "en": "Using two different spirits as the base instead of one",
                  "es": "Usar dos licores diferentes como base en lugar de uno",
                  "de": "Zwei verschiedene Spirituosen als Basis verwenden statt einer",
                  "nl": "Twee verschillende spirits als basis gebruiken in plaats van één"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Split base uses two spirits together as the base (e.g., half bourbon/half rye, or gin/mezcal combo). Creates complexity and unique flavor profiles by blending complementary spirits.",
                  "es": "La base dividida usa dos licores juntos como base (ej., mitad bourbon/mitad centeno, o combo ginebra/mezcal). Crea complejidad y perfiles de sabor únicos mezclando licores complementarios.",
                  "de": "Split Base verwendet zwei Spirituosen zusammen als Basis (z.B. halb Bourbon/halb Roggen, oder Gin/Mezcal-Kombi). Schafft Komplexität und einzigartige Geschmacksprofile durch Mischen komplementärer Spirituosen.",
                  "nl": "Gesplitste basis gebruikt twee spirits samen als basis (bijv. half bourbon/half rogge, of gin/mezcal combo). Creëert complexiteit en unieke smaakprofielen door complementaire spirits te mengen."
        }
      },
      {
        question: {
                  "en": "What is 'saline solution' used for in cocktails?",
                  "es": "¿Para qué se usa 'solución salina' en cócteles?",
                  "de": "Wofür wird 'Salzlösung' in Cocktails verwendet?",
                  "nl": "Waarvoor wordt 'zoutoplossing' gebruikt in cocktails?"
        },
        options: [
        {
                  "en": "A few drops enhance flavors and balance sweetness, like salt in cooking",
                  "es": "Unas gotas realzan sabores y equilibran dulzura, como sal en cocina",
                  "de": "Ein paar Tropfen verbessern Aromen und balancieren Süße, wie Salz beim Kochen",
                  "nl": "Een paar druppels versterken smaken en balanceren zoetheid, zoals zout in koken"
        },
        {
                  "en": "Rimming glasses",
                  "es": "Decorar bordes de vasos",
                  "de": "Gläser beranden",
                  "nl": "Glazen randen"
        },
        {
                  "en": "Medical ingredient",
                  "es": "Ingrediente médico",
                  "de": "Medizinische Zutat",
                  "nl": "Medisch ingrediënt"
        },
        {
                  "en": "Preservative only",
                  "es": "Solo conservante",
                  "de": "Nur Konservierungsmittel",
                  "nl": "Alleen conserveermiddel"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Saline solution (20% salt in water) is used in drops to enhance flavor perception, reduce bitterness, and balance sweetness—much like salt in cooking. Particularly effective in citrus and tiki cocktails.",
                  "es": "La solución salina (20% sal en agua) se usa en gotas para realzar percepción de sabor, reducir amargura y equilibrar dulzura—muy similar a la sal en cocina. Particularmente efectiva en cócteles cítricos y tiki.",
                  "de": "Salzlösung (20% Salz in Wasser) wird tropfenweise verwendet, um Geschmackswahrnehmung zu verbessern, Bitterkeit zu reduzieren und Süße zu balancieren—ähnlich wie Salz beim Kochen. Besonders effektiv in Zitrus- und Tiki-Cocktails.",
                  "nl": "Zoutoplossing (20% zout in water) wordt in druppels gebruikt om smaakperceptie te versterken, bitterheid te verminderen en zoetheid te balanceren—veel zoals zout in koken. Bijzonder effectief in citrus en tiki cocktails."
        }
      },
      {
        question: {
                  "en": "What is the 'golden ratio' for balanced sour cocktails?",
                  "es": "¿Cuál es la 'proporción áurea' para cócteles agrios equilibrados?",
                  "de": "Was ist das 'goldene Verhältnis' für ausgewogene Sour-Cocktails?",
                  "nl": "Wat is de 'gouden verhouding' voor gebalanceerde sour cocktails?"
        },
        options: [
        {
                  "en": "4:1 spirit to citrus only",
                  "es": "4:1 licor a cítrico solo",
                  "de": "4:1 Spirituose zu Zitrus nur",
                  "nl": "4:1 spirit tot citrus alleen"
        },
        {
                  "en": "3:2:1 ratio",
                  "es": "Proporción 3:2:1",
                  "de": "3:2:1 Verhältnis",
                  "nl": "3:2:1 verhouding"
        },
        {
                  "en": "1:1:1 equal parts",
                  "es": "1:1:1 partes iguales",
                  "de": "1:1:1 gleiche Teile",
                  "nl": "1:1:1 gelijke delen"
        },
        {
                  "en": "2:1:1 - spirit:citrus:sweetener (e.g., 2oz gin, 1oz lemon, 1oz simple)",
                  "es": "2:1:1 - licor:cítrico:edulcorante (ej., 2oz ginebra, 1oz limón, 1oz simple)",
                  "de": "2:1:1 - Spirituose:Zitrus:Süßungsmittel (z.B. 2oz Gin, 1oz Zitrone, 1oz Simple)",
                  "nl": "2:1:1 - spirit:citrus:zoetstof (bijv. 2oz gin, 1oz citroen, 1oz simpel)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The golden ratio for sours is 2:1:1 (2 parts spirit, 1 part citrus juice, 1 part sweetener). This creates balanced cocktails like Daiquiri, Margarita, Whiskey Sour. Adjustments made for ingredient variations.",
                  "es": "La proporción áurea para sours es 2:1:1 (2 partes licor, 1 parte jugo cítrico, 1 parte edulcorante). Esto crea cócteles equilibrados como Daiquiri, Margarita, Whiskey Sour. Ajustes hechos para variaciones de ingredientes.",
                  "de": "Das goldene Verhältnis für Sours ist 2:1:1 (2 Teile Spirituose, 1 Teil Zitrus saft, 1 Teil Süßungsmittel). Dies schafft ausgewogene Cocktails wie Daiquiri, Margarita, Whiskey Sour. Anpassungen für Zutatenvariationen vorgenommen.",
                  "nl": "De gouden verhouding voor sours is 2:1:1 (2 delen spirit, 1 deel citrus sap, 1 deel zoetstof). Dit creëert gebalanceerde cocktails zoals Daiquiri, Margarita, Whiskey Sour. Aanpassingen gemaakt voor ingrediënt variaties."
        }
      },
      {
        question: {
                  "en": "What is 'velvet falernum'?",
                  "es": "¿Qué es 'velvet falernum'?",
                  "de": "Was ist 'Velvet Falernum'?",
                  "nl": "Wat is 'velvet falernum'?"
        },
        options: [
        {
                  "en": "Cream liqueur",
                  "es": "Licor de crema",
                  "de": "Sahnelikör",
                  "nl": "Room likeur"
        },
        {
                  "en": "Type of vermouth",
                  "es": "Tipo de vermut",
                  "de": "Art von Wermut",
                  "nl": "Soort vermouth"
        },
        {
                  "en": "Velvet texture additive",
                  "es": "Aditivo de textura aterciopelada",
                  "de": "Samt-Textur-Zusatz",
                  "nl": "Fluwelen textuur additief"
        },
        {
                  "en": "Caribbean liqueur with lime, almond, ginger, cloves - essential in tiki cocktails",
                  "es": "Licor caribeño con lima, almendra, jengibre, clavos - esencial en cócteles tiki",
                  "de": "Karibischer Likör mit Limette, Mandel, Ingwer, Nelken - essentiell in Tiki-Cocktails",
                  "nl": "Caribische likeur met limoen, amandel, gember, kruidnagel - essentieel in tiki cocktails"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Velvet Falernum is a sweet Caribbean liqueur flavored with lime, almond, ginger, cloves, and sometimes vanilla. Essential in tiki cocktails (Zombie, Corn 'n' Oil), adding complex spiced-tropical notes.",
                  "es": "Velvet Falernum es un licor dulce caribeño saborizado con lima, almendra, jengibre, clavos y a veces vainilla. Esencial en cócteles tiki (Zombie, Corn 'n' Oil), añadiendo notas especiadas-tropicales complejas.",
                  "de": "Velvet Falernum ist ein süßer karibischer Likör mit Limette, Mandel, Ingwer, Nelken und manchmal Vanille aromatisiert. Essentiell in Tiki-Cocktails (Zombie, Corn 'n' Oil), fügt komplexe gewürzt-tropische Noten hinzu.",
                  "nl": "Velvet Falernum is een zoete Caribische likeur gearomatiseerd met limoen, amandel, gember, kruidnagel en soms vanille. Essentieel in tiki cocktails (Zombie, Corn 'n' Oil), voegt complexe gekruide-tropische noten toe."
        }
      },
      {
        question: {
                  "en": "What is 'orgeat syrup'?",
                  "es": "¿Qué es el 'jarabe orgeat'?",
                  "de": "Was ist 'Orgeat-Sirup'?",
                  "nl": "Wat is 'orgeat siroop'?"
        },
        options: [
        {
                  "en": "Coconut syrup",
                  "es": "Jarabe de coco",
                  "de": "Kokossirup",
                  "nl": "Kokos siroop"
        },
        {
                  "en": "Herbal liqueur",
                  "es": "Licor herbal",
                  "de": "Kräuterlikör",
                  "nl": "Kruidenlikeur"
        },
        {
                  "en": "Almond-flavored syrup with orange flower water, used in Mai Tai",
                  "es": "Jarabe con sabor a almendra con agua de azahar, usado en Mai Tai",
                  "de": "Mandelaromatisierter Sirup mit Orangenblütenwasser, verwendet in Mai Tai",
                  "nl": "Amandel-gearomatiseerde siroop met oranjebloesemwater, gebruikt in Mai Tai"
        },
        {
                  "en": "Organic sweetener",
                  "es": "Edulcorante orgánico",
                  "de": "Organischer Süßstoff",
                  "nl": "Organische zoetstof"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Orgeat is a sweet almond syrup traditionally made with bitter almonds, sugar, and orange flower water. Essential in tiki cocktails (Mai Tai, Japanese Cocktail), providing nutty, floral complexity.",
                  "es": "Orgeat es un jarabe dulce de almendra tradicionalmente hecho con almendras amargas, azúcar y agua de azahar. Esencial en cócteles tiki (Mai Tai, Japanese Cocktail), proporcionando complejidad de nuez y floral.",
                  "de": "Orgeat ist ein süßer Mandelsirup traditionell aus Bittermandeln, Zucker und Orangenblütenwasser hergestellt. Essentiell in Tiki-Cocktails (Mai Tai, Japanese Cocktail), bietet nussige, florale Komplexität.",
                  "nl": "Orgeat is een zoete amandelsiroop traditioneel gemaakt met bittere amandelen, suiker en oranjebloesemwater. Essentieel in tiki cocktails (Mai Tai, Japanese Cocktail), biedt nootachtige, florale complexiteit."
        }
      },
      {
        question: {
                  "en": "What is 'flash blending'?",
                  "es": "¿Qué es el 'licuado rápido'?",
                  "de": "Was ist 'Flash Blending'?",
                  "nl": "Wat is 'flash blenden'?"
        },
        options: [
        {
                  "en": "Layering technique",
                  "es": "Técnica de capas",
                  "de": "Schichttechnik",
                  "nl": "Laagjes techniek"
        },
        {
                  "en": "Very brief blending with crushed ice for fluffy texture without over-dilution",
                  "es": "Licuado muy breve con hielo triturado para textura esponjosa sin sobre-dilución",
                  "de": "Sehr kurzes Mixen mit zerstoßenem Eis für fluffige Textur ohne Überverdünnung",
                  "nl": "Zeer kort blenden met crushed ijs voor luchtige textuur zonder overdunning"
        },
        {
                  "en": "Blending with a blowtorch",
                  "es": "Licuar con soplete",
                  "de": "Mixen mit Lötlampe",
                  "nl": "Blenden met een brander"
        },
        {
                  "en": "Fast shaking technique",
                  "es": "Técnica de agitado rápido",
                  "de": "Schnelle Schütteltechnik",
                  "nl": "Snelle schudtechniek"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Flash blending uses just 3-5 seconds of blending with crushed ice and a drink mixer, creating fluffy, aerated texture without excessive dilution. Popular in tiki and swizzle-style cocktails for optimal texture.",
                  "es": "El licuado rápido usa solo 3-5 segundos de licuado con hielo triturado y mezclador de bebidas, creando textura esponjosa y aireada sin dilución excesiva. Popular en cócteles tiki y estilo swizzle para textura óptima.",
                  "de": "Flash Blending verwendet nur 3-5 Sekunden Mixen mit zerstoßenem Eis und einem Drink-Mixer, schafft fluffige, belüftete Textur ohne übermäßige Verdünnung. Beliebt in Tiki- und Swizzle-Stil-Cocktails für optimale Textur.",
                  "nl": "Flash blenden gebruikt slechts 3-5 seconden blenden met crushed ijs en een drank mixer, creëert luchtige, beluchte textuur zonder buitensporige verdunning. Populair in tiki en swizzle-stijl cocktails voor optimale textuur."
        }
      },
      {
        question: {
                  "en": "What is 'proof-testing' ice?",
                  "es": "¿Qué es 'probar graduación' del hielo?",
                  "de": "Was ist 'Proof-Testing' von Eis?",
                  "nl": "Wat is 'alcoholgehalte testen' van ijs?"
        },
        options: [
        {
                  "en": "Testing ice clarity and taste to ensure no off-flavors affect cocktails",
                  "es": "Probar claridad y sabor del hielo para asegurar que no haya sabores extraños que afecten cócteles",
                  "de": "Eisklarheit und Geschmack testen um sicherzustellen, dass keine Fehlgeschmäcker Cocktails beeinflussen",
                  "nl": "IJs helderheid en smaak testen om te verzekeren dat geen bijsmaken cocktails beïnvloeden"
        },
        {
                  "en": "Testing freezer alcohol content",
                  "es": "Probar contenido de alcohol del congelador",
                  "de": "Gefrierschrank-Alkoholgehalt testen",
                  "nl": "Vriezer alcoholgehalte testen"
        },
        {
                  "en": "Measuring ice temperature",
                  "es": "Medir temperatura del hielo",
                  "de": "Eistemperatur messen",
                  "nl": "IJs temperatuur meten"
        },
        {
                  "en": "Checking ice hardness",
                  "es": "Verificar dureza del hielo",
                  "de": "Eishärte prüfen",
                  "nl": "IJs hardheid controleren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Proof-testing ice involves tasting and smelling ice to detect freezer odors, chlorine, or off-flavors that could compromise cocktails. Professional bars ensure ice quality matches ingredient standards, sometimes using filtered water or dedicated ice machines.",
                  "es": "Probar graduación del hielo implica probar y oler el hielo para detectar olores de congelador, cloro o sabores extraños que podrían comprometer cócteles. Bares profesionales aseguran que calidad del hielo coincida con estándares de ingredientes, a veces usando agua filtrada o máquinas dedicadas de hielo.",
                  "de": "Proof-Testing von Eis beinhaltet Schmecken und Riechen von Eis um Gefrierschrankgerüche, Chlor oder Fehlgeschmäcker zu erkennen, die Cocktails beeinträchtigen könnten. Professionelle Bars stellen sicher, dass Eisqualität Zutatensstandards entspricht, manchmal mit gefiltertem Wasser oder dedizierten Eismaschinen.",
                  "nl": "Alcoholgehalte testen van ijs houdt in dat ijs wordt geproefd en geroken om vriezergeuren, chloor of bijsmaken te detecteren die cocktails kunnen compromitteren. Professionele bars verzekeren dat ijskwaliteit overeenkomt met ingrediënt standaarden, soms met gefilterd water of toegewijde ijsmachines."
        }
      },
      {
        question: {
                  "en": "What is the 'Japanese hard shake' (Kazuo Uyeda technique)?",
                  "es": "¿Qué es el 'agitado duro japonés' (técnica Kazuo Uyeda)?",
                  "de": "Was ist der 'japanische harte Shake' (Kazuo Uyeda-Technik)?",
                  "nl": "Wat is de 'Japanse harde schud' (Kazuo Uyeda techniek)?"
        },
        options: [
        {
                  "en": "Using frozen shaker",
                  "es": "Usar coctelera congelada",
                  "de": "Gefrorenen Shaker verwenden",
                  "nl": "Bevroren shaker gebruiken"
        },
        {
                  "en": "Extra long shaking time",
                  "es": "Tiempo de agitado extra largo",
                  "de": "Extra lange Schüttelzeit",
                  "nl": "Extra lange schudtijd"
        },
        {
                  "en": "Shaking with special Japanese ice",
                  "es": "Agitar con hielo japonés especial",
                  "de": "Mit speziellem japanischen Eis schütteln",
                  "nl": "Schudden met speciaal Japans ijs"
        },
        {
                  "en": "Vigorous 3-directional shaking creating superior dilution and aeration",
                  "es": "Agitado vigoroso de 3 direcciones creando dilución y aireación superior",
                  "de": "Kräftiges 3-Richtungs-Schütteln, das überlegene Verdünnung und Belüftung schafft",
                  "nl": "Krachtige 3-richtingen schudden creërend superieure verdunning en beluchting"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The Japanese hard shake (by master bartender Kazuo Uyeda) involves vigorous three-directional shaking - horizontal, vertical, and diagonal - creating optimal dilution, temperature, and fine ice chips for silky texture. Requires precise technique and practice.",
                  "es": "El agitado duro japonés (por el maestro bartender Kazuo Uyeda) implica agitado vigoroso de tres direcciones - horizontal, vertical y diagonal - creando dilución óptima, temperatura y chips finos de hielo para textura sedosa. Requiere técnica precisa y práctica.",
                  "de": "Der japanische harte Shake (vom Meister-Barkeeper Kazuo Uyeda) beinhaltet kräftiges dreidimensionales Schütteln - horizontal, vertikal und diagonal - schafft optimale Verdünnung, Temperatur und feine Eissplitter für seidige Textur. Erfordert präzise Technik und Übung.",
                  "nl": "De Japanse harde schud (door meester bartender Kazuo Uyeda) houdt krachtige drierichtingen schudden in - horizontaal, verticaal en diagonaal - creërend optimale verdunning, temperatuur en fijne ijssplinters voor zijdezachte textuur. Vereist precieze techniek en oefening."
        }
      },
      {
        question: {
                  "en": "What is a 'pony' measurement in classic cocktails?",
                  "es": "¿Qué es una medida 'pony' en cócteles clásicos?",
                  "de": "Was ist eine 'Pony'-Messung in klassischen Cocktails?",
                  "nl": "Wat is een 'pony' meting in klassieke cocktails?"
        },
        options: [
        {
                  "en": "2 oz measure",
                  "es": "Medida de 2 oz",
                  "de": "2 oz Maß",
                  "nl": "2 oz maat"
        },
        {
                  "en": "Half ounce (15ml)",
                  "es": "Media onza (15ml)",
                  "de": "Halbe Unze (15ml)",
                  "nl": "Halve ons (15ml)"
        },
        {
                  "en": "Small glass type",
                  "es": "Tipo de vaso pequeño",
                  "de": "Kleine Glasart",
                  "nl": "Klein glas type"
        },
        {
                  "en": "1 oz (30ml) - half of a standard jigger",
                  "es": "1 oz (30ml) - mitad de un jigger estándar",
                  "de": "1 oz (30ml) - Hälfte eines Standard-Jiggers",
                  "nl": "1 oz (30ml) - helft van een standaard jigger"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A pony is a 1 oz (30ml) measurement, traditionally the smaller side of a double jigger (2oz/1oz). Historical cocktail recipes often call for 'pony' amounts of modifiers or sweeteners.",
                  "es": "Un pony es una medida de 1 oz (30ml), tradicionalmente el lado más pequeño de un jigger doble (2oz/1oz). Recetas históricas de cócteles a menudo piden cantidades 'pony' de modificadores o edulcorantes.",
                  "de": "Ein Pony ist eine 1 oz (30ml) Messung, traditionell die kleinere Seite eines Doppel-Jiggers (2oz/1oz). Historische Cocktail-Rezepte fordern oft 'Pony'-Mengen an Modifikatoren oder Süßungsmitteln.",
                  "nl": "Een pony is een 1 oz (30ml) meting, traditioneel de kleinere kant van een dubbele jigger (2oz/1oz). Historische cocktailrecepten vragen vaak om 'pony' hoeveelheden modifiers of zoetstoffen."
        }
      },
      {
        question: {
                  "en": "What is 'aquafaba' and how is it used in vegan cocktails?",
                  "es": "¿Qué es 'aquafaba' y cómo se usa en cócteles veganos?",
                  "de": "Was ist 'Aquafaba' und wie wird es in veganen Cocktails verwendet?",
                  "nl": "Wat is 'aquafaba' en hoe wordt het gebruikt in vegan cocktails?"
        },
        options: [
        {
                  "en": "Plant-based milk",
                  "es": "Leche vegetal",
                  "de": "Pflanzenmilch",
                  "nl": "Plantaardige melk"
        },
        {
                  "en": "Algae extract",
                  "es": "Extracto de algas",
                  "de": "Algenextrakt",
                  "nl": "Algen extract"
        },
        {
                  "en": "Chickpea liquid that creates foam similar to egg whites",
                  "es": "Líquido de garbanzos que crea espuma similar a claras de huevo",
                  "de": "Kichererbsenflüssigkeit, die Schaum ähnlich Eiweiß erzeugt",
                  "nl": "Kikkererwten vloeistof die schuim creëert vergelijkbaar met eiwitten"
        },
        {
                  "en": "Mineral water brand",
                  "es": "Marca de agua mineral",
                  "de": "Mineralwassermarke",
                  "nl": "Mineraalwater merk"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Aquafaba is the liquid from canned chickpeas (or other legumes), which whips into stable foam like egg whites. It's the perfect vegan egg white substitute for sours and fizzes, creating identical texture and foam.",
                  "es": "Aquafaba es el líquido de garbanzos enlatados (u otras legumbres), que se bate en espuma estable como claras de huevo. Es el sustituto vegano perfecto de claras de huevo para sours y fizzes, creando textura y espuma idénticas.",
                  "de": "Aquafaba ist die Flüssigkeit aus Kichererbsen in Dosen (oder anderen Hülsenfrüchten), die zu stabilem Schaum wie Eiweiß aufgeschlagen wird. Es ist der perfekte vegane Eiweiß-Ersatz für Sours und Fizzes, erzeugt identische Textur und Schaum.",
                  "nl": "Aquafaba is de vloeistof van ingeblikte kikkererwten (of andere peulvruchten), die tot stabiel schuim klopt zoals eiwitten. Het is de perfecte vegan eiwit vervanger voor sours en fizzes, creëert identieke textuur en schuim."
        }
      },
      {
        question: {
                  "en": "What is the purpose of 'agar clarification'?",
                  "es": "¿Cuál es el propósito de la 'clarificación con agar'?",
                  "de": "Was ist der Zweck der 'Agar-Klärung'?",
                  "nl": "Wat is het doel van 'agar verhelderin'?"
        },
        options: [
        {
                  "en": "Thickening cocktails",
                  "es": "Espesar cócteles",
                  "de": "Cocktails verdicken",
                  "nl": "Cocktails verdikken"
        },
        {
                  "en": "Creating jelly garnishes",
                  "es": "Crear guarniciones de gelatina",
                  "de": "Gelee-Garnituren erstellen",
                  "nl": "Gelei garneringen maken"
        },
        {
                  "en": "Using agar gel to trap particles and create crystal-clear cocktails",
                  "es": "Usar gel de agar para atrapar partículas y crear cócteles cristalinos",
                  "de": "Agar-Gel verwenden um Partikel zu fangen und kristallklare Cocktails zu schaffen",
                  "nl": "Agar gel gebruiken om deeltjes te vangen en kristalheldere cocktails te creëren"
        },
        {
                  "en": "Adding seaweed flavor",
                  "es": "Añadir sabor a algas",
                  "de": "Algengeschmack hinzufügen",
                  "nl": "Zeewier smaak toevoegen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Agar clarification uses agar-agar (seaweed gelatin) which, when heated with cocktail ingredients then frozen and thawed, traps all particles in the gel while releasing crystal-clear liquid. Advanced technique for visually stunning clarified cocktails.",
                  "es": "La clarificación con agar usa agar-agar (gelatina de algas) que, cuando se calienta con ingredientes de cóctel luego se congela y descongela, atrapa todas las partículas en el gel mientras libera líquido cristalino. Técnica avanzada para cócteles clarificados visualmente impresionantes.",
                  "de": "Agar-Klärung verwendet Agar-Agar (Seetang-Gelatine), die, wenn mit Cocktail-Zutaten erhitzt, dann gefroren und aufgetaut, alle Partikel im Gel fängt während kristallklare Flüssigkeit freigegeben wird. Fortgeschrittene Technik für visuell beeindruckende geklärte Cocktails.",
                  "nl": "Agar verheldering gebruikt agar-agar (zeewier gelatine) die, wanneer verwarmd met cocktail ingrediënten dan bevroren en ontdooid, alle deeltjes in de gel vangt terwijl kristalheldere vloeistof wordt vrijgegeven. Geavanceerde techniek voor visueel verbluffende verhelderde cocktails."
        }
      },
      {
        question: {
                  "en": "What is 'milk punch clarification' and what does it achieve?",
                  "es": "¿Qué es la 'clarificación con leche punch' y qué logra?",
                  "de": "Was ist 'Milk Punch Klärung' und was erreicht sie?",
                  "nl": "Wat is 'melk punch verheldering' en wat bereikt het?"
        },
        options: [
        {
                  "en": "Adding milk for creaminess",
                  "es": "Agregar leche para cremosidad",
                  "de": "Milch für Cremigkeit hinzufügen",
                  "nl": "Melk toevoegen voor romigheid"
        },
        {
                  "en": "Adding milk to acidic cocktails causes curdling; straining removes curds, leaving a silky, shelf-stable, clarified drink with unique texture",
                  "es": "Agregar leche a cócteles ácidos causa cuajado; colar elimina cuajos, dejando una bebida clarificada sedosa, estable en estante, con textura única",
                  "de": "Milch zu sauren Cocktails hinzufügen verursacht Gerinnung; Abseihen entfernt Gerinnsel, hinterlässt ein seidiges, haltbares, geklärtes Getränk mit einzigartiger Textur",
                  "nl": "Melk toevoegen aan zure cocktails veroorzaakt stremming; zeven verwijdert wrongel, laat een zijdezachte, houdbare, verhelderde drank met unieke textuur achter"
        },
        {
                  "en": "Freezing milk cubes for chilling",
                  "es": "Congelar cubos de leche para enfriar",
                  "de": "Milchwürfel zum Kühlen einfrieren",
                  "nl": "Melkblokjes bevriezen voor koeling"
        },
        {
                  "en": "Using milk foam as garnish",
                  "es": "Usar espuma de leche como decoración",
                  "de": "Milchschaum als Garnitur verwenden",
                  "nl": "Melkschuim als garnering gebruiken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Milk punch clarification is a historical technique popularized by Benjamin Franklin. Milk proteins coagulate when mixed with acidic cocktail ingredients (citrus, wine), forming curds that trap impurities. After straining through cheesecloth or coffee filters, the result is a crystal-clear, silky-textured cocktail with extended shelf life (weeks to months). The process mellows harsh flavors and creates remarkable clarity.",
                  "es": "La clarificación con leche punch es una técnica histórica popularizada por Benjamin Franklin. Las proteínas de la leche coagulan cuando se mezclan con ingredientes de cóctel ácidos (cítricos, vino), formando cuajos que atrapan impurezas. Después de colar con tela de queso o filtros de café, el resultado es un cóctel cristalino con textura sedosa y vida útil extendida (semanas a meses). El proceso suaviza sabores fuertes y crea claridad notable.",
                  "de": "Milk Punch Klärung ist eine historische Technik, popularisiert von Benjamin Franklin. Milchproteine koagulieren, wenn sie mit sauren Cocktail-Zutaten (Zitrus, Wein) gemischt werden und Gerinnsel bilden, die Verunreinigungen einfangen. Nach dem Abseihen durch Käsetuch oder Kaffeefilter ist das Ergebnis ein kristallklarer, seidig texturierter Cocktail mit verlängerter Haltbarkeit (Wochen bis Monate). Der Prozess mildert harte Aromen und schafft bemerkenswerte Klarheit.",
                  "nl": "Melk punch verheldering is een historische techniek gepopulariseerd door Benjamin Franklin. Melkeiwitten stremmen wanneer gemengd met zure cocktail ingrediënten (citrus, wijn), waarbij wrongel wordt gevormd die onzuiverheden opvangt. Na zeven door kaasdoek of koffiefilters is het resultaat een kristalheldere, zijdezacht getextureerde cocktail met verlengde houdbaarheid (weken tot maanden). Het proces maakt harde smaken zachter en creëert opmerkelijke helderheid."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  }
})();