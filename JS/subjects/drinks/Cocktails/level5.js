// Quiz Level 5: Drinken - Cocktails (Advanced Mixology and Craft Cocktails)
(function() {
  const level5 = {
    name: {
      en: "Advanced Mixology and Craft Cocktails",
      es: "Mixología Avanzada y Cócteles Artesanales",
      de: "Fortgeschrittene Mixologie und Craft Cocktails",
      nl: "Geavanceerde Mixologie en Craft Cocktails"
    },
    questions: [
      {
        question: {
          en: "What is the primary function of egg white in cocktails?",
          es: "¿Cuál es la función principal de la clara de huevo en los cócteles?",
          de: "Was ist die primäre Funktion von Eiweiß in Cocktails?",
          nl: "Wat is de primaire functie van eiwit in cocktails?"
        },
        options: [
          { en: "To add sweetness", es: "Para añadir dulzura", de: "Um Süße hinzuzufügen", nl: "Om zoetheid toe te voegen" },
          { en: "To create foam and silky texture", es: "Para crear espuma y textura sedosa", de: "Um Schaum und seidige Textur zu erzeugen", nl: "Om schuim en zijdeachtige textuur te creëren" },
          { en: "To preserve the cocktail", es: "Para conservar el cóctel", de: "Um den Cocktail zu konservieren", nl: "Om de cocktail te bewaren" },
          { en: "To add alcohol content", es: "Para añadir contenido alcohólico", de: "Um Alkoholgehalt hinzuzufügen", nl: "Om alcoholgehalte toe te voegen" }
        ],
        correct: 1,
        explanation: {
          en: "Egg white acts as a foaming agent, creating a rich, velvety foam on top of cocktails and adding body and silky mouthfeel without affecting flavor significantly.",
          es: "La clara de huevo actúa como agente espumante, creando una espuma rica y aterciopelada encima de los cócteles y añadiendo cuerpo y sensación sedosa en boca sin afectar significativamente el sabor.",
          de: "Eiweiß wirkt als Schaumbildner, erzeugt einen reichen, samtigen Schaum auf Cocktails und fügt Körper und seidige Mundgefühl hinzu, ohne den Geschmack wesentlich zu beeinflussen.",
          nl: "Eiwit werkt als schuimmiddel, creëert een rijke, fluweelachtige schuim bovenop cocktails en voegt body en zijdeachtig mondgevoel toe zonder de smaak significant te beïnvloeden."
        }
      },
      {
        question: {
          en: "What is the difference between a 'wet' and 'dry' shake technique?",
          es: "¿Cuál es la diferencia entre la técnica de agitado 'húmedo' y 'seco'?",
          de: "Was ist der Unterschied zwischen 'nasser' und 'trockener' Schütteltechnik?",
          nl: "Wat is het verschil tussen een 'natte' en 'droge' schudtechniek?"
        },
        options: [
          { en: "Wet shake uses more ice", es: "Agitado húmedo usa más hielo", de: "Nasses Schütteln verwendet mehr Eis", nl: "Nat schudden gebruikt meer ijs" },
          { en: "Dry shake is without ice first, then with ice", es: "Agitado seco es primero sin hielo, luego con hielo", de: "Trockenes Schütteln ist zuerst ohne Eis, dann mit Eis", nl: "Droog schudden is eerst zonder ijs, dan met ijs" },
          { en: "Wet shake is for alcoholic drinks only", es: "Agitado húmedo es solo para bebidas alcohólicas", de: "Nasses Schütteln ist nur für alkoholische Getränke", nl: "Nat schudden is alleen voor alcoholische drankjes" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 1,
        explanation: {
          en: "Dry shake involves shaking ingredients (especially with egg white) without ice first to emulsify proteins, then adding ice for a second shake to chill and dilute, creating better foam texture.",
          es: "El agitado seco implica agitar ingredientes (especialmente con clara de huevo) primero sin hielo para emulsificar proteínas, luego añadir hielo para un segundo agitado para enfriar y diluir, creando mejor textura de espuma.",
          de: "Trockenes Schütteln beinhaltet das Schütteln von Zutaten (besonders mit Eiweiß) zuerst ohne Eis, um Proteine zu emulgieren, dann Eis hinzufügen für ein zweites Schütteln zum Kühlen und Verdünnen, was bessere Schaumtextur erzeugt.",
          nl: "Droog schudden houdt in dat ingrediënten (vooral met eiwit) eerst zonder ijs worden geschud om eiwitten te emulgeren, dan ijs toevoegen voor een tweede schud om te koelen en verdunnen, wat betere schuimtextuur creëert."
        }
      },
      {
        question: {
          en: "What is a 'fat wash' technique in mixology?",
          es: "¿Qué es la técnica de 'lavado graso' en mixología?",
          de: "Was ist eine 'Fett-Waschung' Technik in der Mixologie?",
          nl: "Wat is een 'vet-was' techniek in de mixologie?"
        },
        options: [
          { en: "Washing glasses with fatty substances", es: "Lavar vasos con sustancias grasas", de: "Gläser mit fettigen Substanzen waschen", nl: "Glazen wassen met vettige stoffen" },
          { en: "Infusing spirits with fat-soluble flavors", es: "Infundir licores con sabores solubles en grasa", de: "Spirituosen mit fettlöslichen Aromen anreichern", nl: "Spirits infuseren met vetoplosbare smaken" },
          { en: "Removing fat from ingredients", es: "Eliminar grasa de ingredientes", de: "Fett aus Zutaten entfernen", nl: "Vet verwijderen uit ingrediënten" },
          { en: "Adding cream to cocktails", es: "Añadir crema a cócteles", de: "Sahne zu Cocktails hinzufügen", nl: "Room toevoegen aan cocktails" }
        ],
        correct: 1,
        explanation: {
          en: "Fat washing involves infusing spirits with fat (like bacon fat or butter) at room temperature, then freezing to solidify the fat for removal, leaving behind unique fat-soluble flavors in the spirit.",
          es: "El lavado graso implica infundir licores con grasa (como grasa de tocino o mantequilla) a temperatura ambiente, luego congelar para solidificar la grasa y removerla, dejando sabores únicos solubles en grasa en el licor.",
          de: "Fett-Waschung beinhaltet das Anreichern von Spirituosen mit Fett (wie Speckfett oder Butter) bei Raumtemperatur, dann Einfrieren, um das Fett zu verfestigen und zu entfernen, wobei einzigartige fettlösliche Aromen in der Spirituose zurückbleiben.",
          nl: "Vet-wassen houdt in dat spirits worden geïnfuseerd met vet (zoals spekvet of boter) op kamertemperatuur, dan bevriezen om het vet te verstevigen voor verwijdering, waarbij unieke vetoplosbare smaken in de spirit achterblijven."
        }
      },
      {
        question: {
          en: "What is the purpose of 'clarifying' cocktails?",
          es: "¿Cuál es el propósito de 'clarificar' cócteles?",
          de: "Was ist der Zweck der 'Klärung' von Cocktails?",
          nl: "Wat is het doel van het 'verhelderen' van cocktails?"
        },
        options: [
          { en: "To remove alcohol content", es: "Para eliminar contenido alcohólico", de: "Um Alkoholgehalt zu entfernen", nl: "Om alcoholgehalte te verwijderen" },
          { en: "To create crystal clear appearance while retaining flavor", es: "Para crear apariencia cristalina manteniendo el sabor", de: "Um kristallklares Aussehen zu schaffen bei Beibehaltung des Geschmacks", nl: "Om kristalheldere uitstraling te creëren terwijl smaak behouden blijft" },
          { en: "To make cocktails stronger", es: "Para hacer cócteles más fuertes", de: "Um Cocktails stärker zu machen", nl: "Om cocktails sterker te maken" },
          { en: "To add carbonation", es: "Para añadir carbonatación", de: "Um Kohlensäure hinzuzufügen", nl: "Om koolzuur toe te voegen" }
        ],
        correct: 1,
        explanation: {
          en: "Clarification techniques (like milk clarification or gelatin filtering) remove particles and cloudiness while preserving or even enhancing flavors, creating visually stunning clear cocktails.",
          es: "Las técnicas de clarificación (como clarificación con leche o filtrado con gelatina) eliminan partículas y turbidez mientras preservan o incluso realzan sabores, creando cócteles claros visualmente impresionantes.",
          de: "Klärtechniken (wie Milchklärung oder Gelatinefilterung) entfernen Partikel und Trübung bei Erhaltung oder sogar Verstärkung der Aromen, schaffen visuell beeindruckende klare Cocktails.",
          nl: "Verhelderingstechnieken (zoals melkverheldering of gelatinefiltering) verwijderen deeltjes en troebeling terwijl smaken behouden of zelfs versterkt worden, wat visueel verbluffende heldere cocktails creëert."
        }
      },
      {
        question: {
          en: "What is the ideal dilution percentage for most shaken cocktails?",
          es: "¿Cuál es el porcentaje ideal de dilución para la mayoría de cócteles agitados?",
          de: "Was ist der ideale Verdünnungsprozentsatz für die meisten geschüttelten Cocktails?",
          nl: "Wat is het ideale verdunningspercentage voor de meeste geschudde cocktails?"
        },
        options: [
          { en: "5-10%", es: "5-10%", de: "5-10%", nl: "5-10%" },
          { en: "20-25%", es: "20-25%", de: "20-25%", nl: "20-25%" },
          { en: "35-40%", es: "35-40%", de: "35-40%", nl: "35-40%" },
          { en: "50-55%", es: "50-55%", de: "50-55%", nl: "50-55%" }
        ],
        correct: 1,
        explanation: {
          en: "Most properly shaken cocktails achieve optimal balance with 20-25% dilution from melted ice, which integrates flavors, reduces alcohol burn, and creates proper mouthfeel.",
          es: "La mayoría de cócteles agitados correctamente logran equilibrio óptimo con 20-25% de dilución del hielo derretido, que integra sabores, reduce el ardor del alcohol y crea sensación bucal apropiada.",
          de: "Die meisten richtig geschüttelten Cocktails erreichen optimale Balance mit 20-25% Verdünnung durch geschmolzenes Eis, was Aromen integriert, Alkoholbrennen reduziert und richtiges Mundgefühl schafft.",
          nl: "De meeste goed geschudde cocktails bereiken optimale balans met 20-25% verdunning van gesmolten ijs, wat smaken integreert, alcoholbrand vermindert en juist mondgevoel creëert."
        }
      },
      {
        question: {
          en: "What is 'reverse dry shake' technique?",
          es: "¿Qué es la técnica de 'agitado seco inverso'?",
          de: "Was ist die 'umgekehrte trockene Schüttel' Technik?",
          nl: "Wat is de 'omgekeerde droge schud' techniek?"
        },
        options: [
          { en: "Shaking with ice first, then without ice", es: "Agitar con hielo primero, luego sin hielo", de: "Erst mit Eis schütteln, dann ohne Eis", nl: "Eerst met ijs schudden, dan zonder ijs" },
          { en: "Using dry ice instead of regular ice", es: "Usar hielo seco en lugar de hielo regular", de: "Trockeneis statt normalem Eis verwenden", nl: "Droogijs gebruiken in plaats van gewoon ijs" },
          { en: "Shaking ingredients separately", es: "Agitar ingredientes por separado", de: "Zutaten separat schütteln", nl: "Ingrediënten afzonderlijk schudden" },
          { en: "Not shaking at all", es: "No agitar en absoluto", de: "Überhaupt nicht schütteln", nl: "Helemaal niet schudden" }
        ],
        correct: 0,
        explanation: {
          en: "Reverse dry shake involves first shaking with ice to chill and dilute, then removing ice and dry shaking again to create dense, long-lasting foam, often preferred for egg white cocktails.",
          es: "El agitado seco inverso implica primero agitar con hielo para enfriar y diluir, luego quitar el hielo y agitar seco otra vez para crear espuma densa y duradera, a menudo preferido para cócteles con clara de huevo.",
          de: "Umgekehrtes trockenes Schütteln beinhaltet zuerst Schütteln mit Eis zum Kühlen und Verdünnen, dann Eis entfernen und erneut trocken schütteln, um dichten, langanhaltenden Schaum zu erzeugen, oft bevorzugt für Eiweiß-Cocktails.",
          nl: "Omgekeerde droge schud houdt in dat eerst met ijs wordt geschud om te koelen en verdunnen, dan ijs weggenomen en opnieuw droog geschud om dichte, langdurige schuim te creëren, vaak geprefereerd voor eiwit cocktails."
        }
      },
      {
        question: {
          en: "What is the primary purpose of using bitters in cocktails?",
          es: "¿Cuál es el propósito principal de usar amargos en cócteles?",
          de: "Was ist der Hauptzweck der Verwendung von Bittern in Cocktails?",
          nl: "Wat is het hoofddoel van het gebruiken van bitters in cocktails?"
        },
        options: [
          { en: "To add sweetness", es: "Para añadir dulzura", de: "Um Süße hinzuzufügen", nl: "Om zoetheid toe te voegen" },
          { en: "To balance flavors and add complexity", es: "Para equilibrar sabores y añadir complejidad", de: "Um Aromen auszugleichen und Komplexität hinzuzufügen", nl: "Om smaken te balanceren en complexiteit toe te voegen" },
          { en: "To increase alcohol content", es: "Para aumentar contenido alcohólico", de: "Um Alkoholgehalt zu erhöhen", nl: "Om alcoholgehalte te verhogen" },
          { en: "To make drinks fizzy", es: "Para hacer bebidas gaseosas", de: "Um Getränke sprudelnd zu machen", nl: "Om drankjes bruisend te maken" }
        ],
        correct: 1,
        explanation: {
          en: "Bitters function as the 'salt and pepper' of cocktails, adding depth, balancing sweet and sour elements, and providing aromatic complexity with just a few dashes.",
          es: "Los amargos funcionan como la 'sal y pimienta' de los cócteles, añadiendo profundidad, equilibrando elementos dulces y ácidos, y proporcionando complejidad aromática con solo unas gotas.",
          de: "Bitter funktionieren als 'Salz und Pfeffer' von Cocktails, fügen Tiefe hinzu, gleichen süße und saure Elemente aus und bieten aromatische Komplexität mit nur wenigen Spritzern.",
          nl: "Bitters functioneren als het 'zout en peper' van cocktails, voegen diepte toe, balanceren zoete en zure elementen, en bieden aromatische complexiteit met slechts een paar druppels."
        }
      },
      {
        question: {
          en: "What is the technique called when you ignite citrus oils over a cocktail?",
          es: "¿Cómo se llama la técnica cuando enciendes aceites cítricos sobre un cóctel?",
          de: "Wie heißt die Technik, wenn man Zitrusöle über einem Cocktail anzündet?",
          nl: "Hoe heet de techniek wanneer je citrusoliën boven een cocktail ontsteekt?"
        },
        options: [
          { en: "Flaming", es: "Flameado", de: "Flambieren", nl: "Flammen" },
          { en: "Expressing", es: "Expresar", de: "Ausdrücken", nl: "Uitdrukken" },
          { en: "Torching", es: "Quemado", de: "Brennen", nl: "Branden" },
          { en: "Igniting", es: "Encendido", de: "Entzünden", nl: "Ontsteken" }
        ],
        correct: 0,
        explanation: {
          en: "Flaming involves expressing citrus oils through an open flame, which ignites the oils creating a dramatic visual effect and adding caramelized citrus aromatics to the cocktail.",
          es: "El flameado implica expresar aceites cítricos a través de una llama abierta, que enciende los aceites creando un efecto visual dramático y añadiendo aromáticos cítricos caramelizados al cóctel.",
          de: "Flambieren beinhaltet das Ausdrücken von Zitrusölen durch eine offene Flamme, die die Öle entzündet und einen dramatischen visuellen Effekt schafft sowie karamelisierte Zitrusaromen zum Cocktail hinzufügt.",
          nl: "Flammen houdt in dat citrusoliën door een open vlam worden uitgedrukt, wat de oliën ontsteekt en een dramatisch visueel effect creëert en gekarameliseerde citrusaroma's aan de cocktail toevoegt."
        }
      },
      {
        question: {
          en: "What is the purpose of 'rinsing' a glass in cocktail preparation?",
          es: "¿Cuál es el propósito de 'enjuagar' un vaso en la preparación de cócteles?",
          de: "Was ist der Zweck des 'Spülens' eines Glases bei der Cocktailzubereitung?",
          nl: "Wat is het doel van het 'spoelen' van een glas bij cocktailbereiding?"
        },
        options: [
          { en: "To clean the glass", es: "Para limpiar el vaso", de: "Um das Glas zu reinigen", nl: "Om het glas te reinigen" },
          { en: "To coat the glass with aromatic spirit", es: "Para recubrir el vaso con licor aromático", de: "Um das Glas mit aromatischer Spirituose zu beschichten", nl: "Om het glas te bekleden met aromatische spirit" },
          { en: "To chill the glass", es: "Para enfriar el vaso", de: "Um das Glas zu kühlen", nl: "Om het glas te koelen" },
          { en: "To remove ice crystals", es: "Para eliminar cristales de hielo", de: "Um Eiskristalle zu entfernen", nl: "Om ijskristallen te verwijderen" }
        ],
        correct: 1,
        explanation: {
          en: "Rinsing involves coating the inside of a glass with a small amount of aromatic spirit (like absinthe or scotch), then discarding the excess, leaving only the aroma and subtle flavor enhancement.",
          es: "Enjuagar implica recubrir el interior de un vaso con una pequeña cantidad de licor aromático (como absenta o whisky escocés), luego descartar el exceso, dejando solo el aroma y mejora sutil del sabor.",
          de: "Spülen beinhaltet das Beschichten des Glasinneren mit einer kleinen Menge aromatischer Spirituose (wie Absinth oder Scotch), dann den Überschuss entfernen, nur Aroma und subtile Geschmacksverstärkung hinterlassend.",
          nl: "Spoelen houdt in dat de binnenkant van een glas wordt bekleed met een kleine hoeveelheid aromatische spirit (zoals absint of scotch), dan het overschot weggooien, alleen de geur en subtiele smaakverbetering achterlatend."
        }
      },
      {
        question: {
          en: "What is 'nitro muddling' in modern mixology?",
          es: "¿Qué es el 'machacado con nitrógeno' en mixología moderna?",
          de: "Was ist 'Nitro-Muddeln' in der modernen Mixologie?",
          nl: "Wat is 'nitro muddlen' in moderne mixologie?"
        },
        options: [
          { en: "Using liquid nitrogen to instantly freeze ingredients", es: "Usar nitrógeno líquido para congelar instantáneamente ingredientes", de: "Flüssigstickstoff verwenden, um Zutaten sofort einzufrieren", nl: "Vloeibare stikstof gebruiken om ingrediënten onmiddellijk te bevriezen" },
          { en: "Adding nitrogen gas to cocktails", es: "Añadir gas nitrógeno a cócteles", de: "Stickstoffgas zu Cocktails hinzufügen", nl: "Stikstofgas toevoegen aan cocktails" },
          { en: "Muddling with special nitrogen-infused tools", es: "Machacar con herramientas especiales infundidas con nitrógeno", de: "Muddeln mit speziellen stickstoffinfundierten Werkzeugen", nl: "Muddlen met speciale stikstof-geïnfuseerde gereedschappen" },
          { en: "A marketing term with no real meaning", es: "Un término de marketing sin significado real", de: "Ein Marketingbegriff ohne echte Bedeutung", nl: "Een marketingterm zonder echte betekenis" }
        ],
        correct: 0,
        explanation: {
          en: "Nitro muddling uses liquid nitrogen to instantly freeze herbs or fruits at extremely low temperatures, creating unique textures and preserving volatile aromatics when muddled.",
          es: "El machacado con nitrógeno usa nitrógeno líquido para congelar instantáneamente hierbas o frutas a temperaturas extremadamente bajas, creando texturas únicas y preservando aromáticos volátiles cuando se machacan.",
          de: "Nitro-Muddeln verwendet flüssigen Stickstoff, um Kräuter oder Früchte bei extrem niedrigen Temperaturen sofort einzufrieren, einzigartige Texturen zu schaffen und flüchtige Aromastoffe beim Muddeln zu bewahren.",
          nl: "Nitro muddlen gebruikt vloeibare stikstof om kruiden of fruit onmiddellijk te bevriezen bij extreem lage temperaturen, unieke texturen te creëren en vluchtige aromastoffen te behouden bij het muddlen."
        }
      },
      {
        question: {
          en: "What is a 'Nick and Nora' glass?",
          es: "¿Qué es una copa 'Nick and Nora'?",
          de: "Was ist ein 'Nick and Nora'-Glas?",
          nl: "Wat is een 'Nick and Nora' glas?"
        },
        options: [
          { en: "Beer mug", es: "Jarra de cerveza", de: "Bierkrug", nl: "Bierpul" },
          { en: "Bell-shaped coupe glass for cocktails", es: "Copa en forma de campana para cócteles", de: "Glockenförmiges Coupe-Glas für Cocktails", nl: "Klokvormig coupe glas voor cocktails" },
          { en: "Shot glass", es: "Vaso de chupito", de: "Schnapsglas", nl: "Shotglaasje" },
          { en: "Tall Collins glass", es: "Vaso Collins alto", de: "Hohes Collins-Glas", nl: "Hoog Collins glas" }
        ],
        correct: 1,
        explanation: {
          en: "Nick and Nora glasses are elegant, bell-shaped stemmed glasses holding 5-6oz, named after characters from 'The Thin Man,' perfect for stirred cocktails without ice.",
          es: "Las copas Nick and Nora son elegantes copas en forma de campana que contienen 5-6oz, nombradas por personajes de 'The Thin Man,' perfectas para cócteles revueltos sin hielo.",
          de: "Nick and Nora-Gläser sind elegante, glockenförmige Stielgläser mit 5-6oz, benannt nach Charakteren aus 'The Thin Man,' perfekt für gerührte Cocktails ohne Eis.",
          nl: "Nick and Nora glazen zijn elegante, klokvormige gesteelde glazen van 5-6oz, vernoemd naar personages uit 'The Thin Man,' perfect voor geroerde cocktails zonder ijs."
        }
      },
      {
        question: {
          en: "What distinguishes Japanese bartending style?",
          es: "¿Qué distingue el estilo de coctelería japonés?",
          de: "Was zeichnet den japanischen Barkeeper-Stil aus?",
          nl: "Wat onderscheidt de Japanse bartender stijl?"
        },
        options: [
          { en: "Fast speed service", es: "Servicio de velocidad rápida", de: "Schneller Service", nl: "Snelle service" },
          { en: "Precision, ritual, and meticulous technique", es: "Precisión, ritual y técnica meticulosa", de: "Präzision, Ritual und akribische Technik", nl: "Precisie, ritueel en nauwgezette techniek" },
          { en: "Large portions", es: "Porciones grandes", de: "Große Portionen", nl: "Grote porties" },
          { en: "Using only sake", es: "Usar solo sake", de: "Nur Sake verwenden", nl: "Alleen sake gebruiken" }
        ],
        correct: 1,
        explanation: {
          en: "Japanese bartending emphasizes precision, respect for ingredients, perfect dilution, hand-carved ice, and ritualistic preparation—elevating cocktail making to an art form.",
          es: "La coctelería japonesa enfatiza la precisión, respeto por los ingredientes, dilución perfecta, hielo tallado a mano y preparación ritualista—elevando la preparación de cócteles a una forma de arte.",
          de: "Japanisches Bartending betont Präzision, Respekt vor Zutaten, perfekte Verdünnung, handgeschnitztes Eis und rituelle Zubereitung—hebt Cocktail-Making zur Kunstform.",
          nl: "Japanse bartending benadrukt precisie, respect voor ingrediënten, perfecte verdunning, handgesneden ijs en rituele bereiding—verheft cocktail maken tot kunstvorm."
        }
      },
      {
        question: {
          en: "What is 'fat washing' in mixology?",
          es: "¿Qué es el 'lavado de grasa' en mixología?",
          de: "Was ist 'Fettwaschen' in der Mixologie?",
          nl: "Wat is 'vetwassen' in mixologie?"
        },
        options: [
          { en: "Cleaning bar equipment", es: "Limpiar equipo de bar", de: "Barausrüstung reinigen", nl: "Bar apparatuur schoonmaken" },
          { en: "Infusing spirits with fat flavors (bacon, butter)", es: "Infusionar licores con sabores grasos (tocino, mantequilla)", de: "Spirituosen mit Fettaromen (Speck, Butter) infundieren", nl: "Spirits infuseren met vetsmaken (spek, boter)" },
          { en: "Removing oil from citrus", es: "Eliminar aceite de cítricos", de: "Öl von Zitrusfrüchten entfernen", nl: "Olie van citrus verwijderen" },
          { en: "Straining technique", es: "Técnica de colado", de: "Abseihtechnik", nl: "Zeeftechniek" }
        ],
        correct: 1,
        explanation: {
          en: "Fat washing infuses spirits with rich flavors by mixing with melted fat (bacon, brown butter), freezing to separate, then straining. Famous in cocktails like bacon-washed bourbon Old Fashioned.",
          es: "El lavado de grasa infusiona licores con sabores ricos mezclando con grasa derretida (tocino, mantequilla marrón), congelando para separar, luego colando. Famoso en cócteles como Old Fashioned de bourbon lavado con tocino.",
          de: "Fettwaschen infundiert Spirituosen mit reichen Aromen durch Mischen mit geschmolzenem Fett (Speck, braune Butter), Einfrieren zur Trennung, dann Abseihen. Berühmt in Cocktails wie Speck-gewaschenem Bourbon Old Fashioned.",
          nl: "Vetwassen infuseert spirits met rijke smaken door te mengen met gesmolten vet (spek, bruine boter), bevriezen om te scheiden, dan zeven. Beroemd in cocktails zoals bacon-gewassen bourbon Old Fashioned."
        }
      },
      {
        question: {
          en: "What is a 'Death Flip'?",
          es: "¿Qué es un 'Death Flip'?",
          de: "Was ist ein 'Death Flip'?",
          nl: "Wat is een 'Death Flip'?"
        },
        options: [
          { en: "Flipping bottles", es: "Voltear botellas", de: "Flaschen werfen", nl: "Flessen omkeren" },
          { en: "Adding whole egg to spirit-forward cocktails", es: "Agregar huevo entero a cócteles con base de licor", de: "Ganzes Ei zu spirituosenstarken Cocktails hinzufügen", nl: "Heel ei toevoegen aan spirit-forward cocktails" },
          { en: "Inverting the glass", es: "Invertir el vaso", de: "Das Glas umdrehen", nl: "Het glas omkeren" },
          { en: "Layering ingredients", es: "Capas de ingredientes", de: "Zutaten schichten", nl: "Ingrediënten lagen" }
        ],
        correct: 1,
        explanation: {
          en: "A Death Flip uses a whole egg in spirit-forward cocktails (like adding egg to a Manhattan), creating rich texture while maintaining strength. Named for the risky technique.",
          es: "Un Death Flip usa un huevo entero en cócteles con base de licor (como agregar huevo a un Manhattan), creando textura rica mientras mantiene la fuerza. Nombrado por la técnica arriesgada.",
          de: "Ein Death Flip verwendet ein ganzes Ei in spirituosenstarken Cocktails (wie Ei zu einem Manhattan hinzufügen), schafft reiche Textur bei Beibehaltung der Stärke. Benannt nach der riskanten Technik.",
          nl: "Een Death Flip gebruikt een heel ei in spirit-forward cocktails (zoals ei toevoegen aan een Manhattan), wat rijke textuur creëert terwijl sterkte behouden blijft. Vernoemd naar de risicovolle techniek."
        }
      },
      {
        question: {
          en: "What is a 'Collins' cocktail template?",
          es: "¿Qué es una plantilla de cóctel 'Collins'?",
          de: "Was ist eine 'Collins'-Cocktail-Vorlage?",
          nl: "Wat is een 'Collins' cocktail sjabloon?"
        },
        options: [
          { en: "Hot drink template", es: "Plantilla de bebida caliente", de: "Heißgetränk-Vorlage", nl: "Warm drankje sjabloon" },
          { en: "Spirit, lemon juice, sugar, topped with soda", es: "Licor, jugo de limón, azúcar, cubierto con soda", de: "Spirituose, Zitronensaft, Zucker, mit Soda aufgefüllt", nl: "Spirit, citroensap, suiker, aangevuld met soda" },
          { en: "Layered shot", es: "Chupito en capas", de: "Geschichteter Shot", nl: "Gelaagde shot" },
          { en: "Frozen drink", es: "Bebida congelada", de: "Gefrorenes Getränk", nl: "Bevroren drankje" }
        ],
        correct: 1,
        explanation: {
          en: "A Collins is a tall, refreshing cocktail: base spirit, lemon juice, sugar, shaken and topped with soda water over ice. Tom Collins (gin), Vodka Collins, Whiskey Collins variations exist.",
          es: "Un Collins es un cóctel alto y refrescante: licor base, jugo de limón, azúcar, agitado y cubierto con agua de soda sobre hielo. Existen variaciones de Tom Collins (ginebra), Vodka Collins, Whiskey Collins.",
          de: "Ein Collins ist ein hoher, erfrischender Cocktail: Basis-Spirituose, Zitronensaft, Zucker, geschüttelt und mit Sodawasser über Eis aufgefüllt. Tom Collins (Gin), Vodka Collins, Whiskey Collins Variationen existieren.",
          nl: "Een Collins is een hoge, verfrissende cocktail: basis spirit, citroensap, suiker, geschud en aangevuld met sodawater over ijs. Tom Collins (gin), Vodka Collins, Whiskey Collins variaties bestaan."
        }
      },
      {
        question: {
          en: "What is 'clarified milk punch'?",
          es: "¿Qué es el 'ponche de leche clarificado'?",
          de: "Was ist 'geklärter Milchpunsch'?",
          nl: "Wat is 'heldere melk punch'?"
        },
        options: [
          { en: "Adding cream to cocktails", es: "Agregar crema a cócteles", de: "Sahne zu Cocktails hinzufügen", nl: "Room toevoegen aan cocktails" },
          { en: "Using milk to clarify spirits by curdling and straining", es: "Usar leche para clarificar licores cuajando y colando", de: "Milch zur Klärung von Spirituosen durch Gerinnen und Abseihen verwenden", nl: "Melk gebruiken om spirits te verhelderen door te stremmen en zeven" },
          { en: "Milk-based shot", es: "Chupito a base de leche", de: "Milchbasierter Shot", nl: "Melkgebaseerde shot" },
          { en: "Hot milk cocktail", es: "Cóctel de leche caliente", de: "Heißer Milchcocktail", nl: "Warme melk cocktail" }
        ],
        correct: 1,
        explanation: {
          en: "Clarified milk punch uses acid to curdle milk, which traps impurities. After straining, you get a crystal-clear, silky-textured cocktail with extended shelf life. Historic technique from 1700s.",
          es: "El ponche de leche clarificado usa ácido para cuajar la leche, que atrapa impurezas. Después de colar, obtienes un cóctel cristalino con textura sedosa y vida útil extendida. Técnica histórica de los 1700s.",
          de: "Geklärter Milchpunsch verwendet Säure zum Gerinnen von Milch, die Unreinheiten einfängt. Nach dem Abseihen erhält man einen kristallklaren Cocktail mit seidiger Textur und verlängerter Haltbarkeit. Historische Technik aus den 1700ern.",
          nl: "Heldere melk punch gebruikt zuur om melk te stremmen, wat onzuiverheden vangt. Na zeven krijg je een kristalheldere cocktail met zijdezachte textuur en langere houdbaarheid. Historische techniek uit de jaren 1700."
        }
      },
      {
        question: {
          en: "What is the difference between a Fizz and Collins?",
          es: "¿Cuál es la diferencia entre un Fizz y un Collins?",
          de: "Was ist der Unterschied zwischen Fizz und Collins?",
          nl: "Wat is het verschil tussen een Fizz en Collins?"
        },
        options: [
          { en: "Fizz has no ice", es: "Fizz no tiene hielo", de: "Fizz hat kein Eis", nl: "Fizz heeft geen ijs" },
          { en: "Fizz is shaken without ice first, served in smaller glass", es: "Fizz se agita primero sin hielo, servido en vaso más pequeño", de: "Fizz wird zuerst ohne Eis geschüttelt, in kleinerem Glas serviert", nl: "Fizz wordt eerst zonder ijs geschud, geserveerd in kleiner glas" },
          { en: "Collins has egg white", es: "Collins tiene clara de huevo", de: "Collins hat Eiweiß", nl: "Collins heeft eiwit" },
          { en: "No difference", es: "Sin diferencia", de: "Kein Unterschied", nl: "Geen verschil" }
        ],
        correct: 1,
        explanation: {
          en: "A Fizz is shaken vigorously without ice first (or with egg white), then strained and served in a smaller glass with less dilution. Collins is built in a tall glass with ice.",
          es: "Un Fizz se agita vigorosamente primero sin hielo (o con clara de huevo), luego se cuela y se sirve en un vaso más pequeño con menos dilución. Collins se construye en un vaso alto con hielo.",
          de: "Ein Fizz wird zuerst kräftig ohne Eis geschüttelt (oder mit Eiweiß), dann abgeseiht und in einem kleineren Glas mit weniger Verdünnung serviert. Collins wird in einem hohen Glas mit Eis gebaut.",
          nl: "Een Fizz wordt eerst krachtig zonder ijs geschud (of met eiwit), dan gezeefd en geserveerd in een kleiner glas met minder verdunning. Collins wordt in een hoog glas met ijs gebouwd."
        }
      },
      {
        question: {
          en: "What is 'Oleo Saccharum'?",
          es: "¿Qué es 'Oleo Saccharum'?",
          de: "Was ist 'Oleo Saccharum'?",
          nl: "Wat is 'Oleo Saccharum'?"
        },
        options: [
          { en: "Type of rum", es: "Tipo de ron", de: "Rumsorte", nl: "Soort rum" },
          { en: "Citrus oil extracted with sugar", es: "Aceite de cítricos extraído con azúcar", de: "Mit Zucker extrahiertes Zitrusöl", nl: "Citrusolie geëxtraheerd met suiker" },
          { en: "Italian liqueur", es: "Licor italiano", de: "Italienischer Likör", nl: "Italiaanse likeur" },
          { en: "Garnish technique", es: "Técnica de guarnición", de: "Garnierungstechnik", nl: "Garnering techniek" }
        ],
        correct: 1,
        explanation: {
          en: "Oleo Saccharum ('oil sugar') extracts citrus oils from peels using sugar, creating an intensely flavored syrup used in punches and classic cocktails. Key ingredient in historic punch recipes.",
          es: "Oleo Saccharum ('aceite azúcar') extrae aceites de cítricos de las cáscaras usando azúcar, creando un jarabe intensamente saborizado usado en ponches y cócteles clásicos. Ingrediente clave en recetas históricas de ponche.",
          de: "Oleo Saccharum ('Ölzucker') extrahiert Zitrusöle aus Schalen mit Zucker und erzeugt einen intensiv aromatisierten Sirup für Punches und klassische Cocktails. Schlüsselzutat in historischen Punch-Rezepten.",
          nl: "Oleo Saccharum ('olie suiker') extraheert citrusoliën uit schillen met suiker, wat een intens gearomatiseerde siroop creëert gebruikt in punches en klassieke cocktails. Belangrijk ingrediënt in historische punch recepten."
        }
      },
      {
        question: {
          en: "What is 'Navy Strength' spirit?",
          es: "¿Qué es un licor 'Navy Strength'?",
          de: "Was ist 'Navy Strength'-Spirituose?",
          nl: "Wat is 'Navy Strength' spirit?"
        },
        options: [
          { en: "Made for sailors", es: "Hecho para marineros", de: "Für Seeleute gemacht", nl: "Gemaakt voor zeelui" },
          { en: "Minimum 57% ABV (114 proof)", es: "Mínimo 57% ABV (114 proof)", de: "Mindestens 57% ABV (114 proof)", nl: "Minimaal 57% ABV (114 proof)" },
          { en: "Contains sea salt", es: "Contiene sal marina", de: "Enthält Meersalz", nl: "Bevat zeezout" },
          { en: "Aged at sea", es: "Envejecido en el mar", de: "Auf See gereift", nl: "Gerijpt op zee" }
        ],
        correct: 1,
        explanation: {
          en: "Navy Strength spirits are minimum 57% ABV—historically the strength at which gunpowder would still ignite if soaked, proving the spirit's proof to British Royal Navy sailors.",
          es: "Los licores Navy Strength son mínimo 57% ABV—históricamente la fuerza a la que la pólvora aún se encendería si se empapaba, probando el grado del licor a los marineros de la Royal Navy británica.",
          de: "Navy Strength-Spirituosen sind mindestens 57% ABV—historisch die Stärke, bei der Schießpulver noch zünden würde, wenn eingeweicht, was den Beweis der Spirituose für britische Royal Navy-Seeleute erbrachte.",
          nl: "Navy Strength spirits zijn minimaal 57% ABV—historisch de sterkte waarbij buskruit nog zou ontbranden als gedrenkt, wat het bewijs van de spirit leverde aan Britse Royal Navy zeelui."
        }
      },
      {
        question: {
          en: "What is 'centrifugation' in cocktail making?",
          es: "¿Qué es la 'centrifugación' en la preparación de cócteles?",
          de: "Was ist 'Zentrifugation' bei der Cocktail-Zubereitung?",
          nl: "Wat is 'centrifugeren' in cocktail maken?"
        },
        options: [
          { en: "Spinning the shaker very fast", es: "Girar la coctelera muy rápido", de: "Den Shaker sehr schnell drehen", nl: "De shaker heel snel draaien" },
          { en: "Using centrifugal force to clarify and separate ingredients", es: "Usar fuerza centrífuga para clarificar y separar ingredientes", de: "Zentrifugalkraft verwenden, um Zutaten zu klären und zu trennen", nl: "Centrifugale kracht gebruiken om ingrediënten te verhelderen en scheiden" },
          { en: "Stirring in circles", es: "Revolver en círculos", de: "Im Kreis rühren", nl: "In cirkels roeren" },
          { en: "Using a blender", es: "Usar una licuadora", de: "Einen Mixer verwenden", nl: "Een blender gebruiken" }
        ],
        correct: 1,
        explanation: {
          en: "Centrifugation uses high-speed spinning equipment to separate liquids by density, creating crystal-clear juices and infusions. A molecular gastronomy technique adopted by high-end cocktail bars.",
          es: "La centrifugación usa equipo de giro de alta velocidad para separar líquidos por densidad, creando jugos e infusiones cristalinos. Una técnica de gastronomía molecular adoptada por bares de cócteles de alta gama.",
          de: "Zentrifugation verwendet Hochgeschwindigkeits-Drehgeräte, um Flüssigkeiten nach Dichte zu trennen und kristallklare Säfte und Infusionen zu erzeugen. Eine molekulare Gastronomietechnik, die von High-End-Cocktailbars übernommen wurde.",
          nl: "Centrifugeren gebruikt hoge-snelheids draaiapparatuur om vloeistoffen te scheiden op dichtheid, wat kristalheldere sappen en infusies creëert. Een moleculaire gastronomie techniek geadopteerd door high-end cocktailbars."
        }
      }]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();
