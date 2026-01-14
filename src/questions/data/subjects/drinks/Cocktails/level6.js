// Cocktails Quiz - Level 6
(function() {
  const level6 = {
    name: {
          "en": "Molecular Mixology and Modern Bartending",
          "es": "Mixología Molecular y Bartending Moderno",
          "de": "Molekulare Mixologie und Modernes Bartending",
          "nl": "Moleculaire Mixologie en Modern Bartending"
    },
    questions: [
      {
        question: {
                  "en": "What is the primary purpose of liquid nitrogen in molecular cocktails?",
                  "es": "¿Cuál es el propósito principal del nitrógeno líquido en cócteles moleculares?",
                  "de": "Was ist der Hauptzweck von flüssigem Stickstoff in molekularen Cocktails?",
                  "nl": "Wat is het hoofddoel van vloeibare stikstof in moleculaire cocktails?"
        },
        options: [
        {
                  "en": "Instant freezing and dramatic presentation",
                  "es": "Congelación instantánea y presentación dramática",
                  "de": "Sofortiges Einfrieren und dramatische Präsentation",
                  "nl": "Onmiddellijke bevriezing en dramatische presentatie"
        },
        {
                  "en": "Making cocktails lighter",
                  "es": "Hacer cócteles más ligeros",
                  "de": "Cocktails leichter machen",
                  "nl": "Cocktails lichter maken"
        },
        {
                  "en": "Adding flavor to cocktails",
                  "es": "Añadir sabor a cócteles",
                  "de": "Geschmack zu Cocktails hinzufügen",
                  "nl": "Smaak toevoegen aan cocktails"
        },
        {
                  "en": "Increasing alcohol content",
                  "es": "Aumentar contenido alcohólico",
                  "de": "Alkoholgehalt erhöhen",
                  "nl": "Alcoholgehalte verhogen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Liquid nitrogen at -196°C instantly freezes ingredients, creating dramatic smoking effects, flash-frozen garnishes, and unique textures while preserving flavors and creating theatrical presentation.",
                  "es": "El nitrógeno líquido a -196°C congela instantáneamente ingredientes, creando efectos dramáticos de humo, guarniciones congeladas instantáneamente y texturas únicas mientras preserva sabores y crea presentación teatral.",
                  "de": "Flüssiger Stickstoff bei -196°C friert Zutaten sofort ein, schafft dramatische Raucheffekte, blitzgefrorene Garnituren und einzigartige Texturen während Geschmack bewahrt und theatralische Präsentation schafft.",
                  "nl": "Vloeibare stikstof bij -196°C bevriest ingrediënten onmiddellijk, creëert dramatische rookeffecten, bliksem-bevroren garneringen en unieke texturen terwijl smaken behouden blijven en theatrale presentatie wordt gecreëerd."
        }
      },
      {
        question: {
                  "en": "What is spherification in molecular mixology?",
                  "es": "¿Qué es la esferificación en mixología molecular?",
                  "de": "Was ist Sphärifizierung in der molekularen Mixologie?",
                  "nl": "Wat is sferificatie in moleculaire mixologie?"
        },
        options: [
        {
                  "en": "Arranging garnishes in a sphere",
                  "es": "Organizar guarniciones en una esfera",
                  "de": "Garnituren in einer Sphäre anordnen",
                  "nl": "Garneringen in een bol arrangeren"
        },
        {
                  "en": "Creating sphere-shaped ice cubes",
                  "es": "Crear cubitos de hielo en forma de esfera",
                  "de": "Sphärenförmige Eiswürfel erstellen",
                  "nl": "Bolvormige ijsblokjes maken"
        },
        {
                  "en": "Forming liquid-filled spheres using calcium chloride and sodium alginate",
                  "es": "Formar esferas llenas de líquido usando cloruro de calcio y alginato de sodio",
                  "de": "Flüssigkeitsgefüllte Kugeln mit Calciumchlorid und Natriumalginat bilden",
                  "nl": "Vloeistof-gevulde bollen vormen met calciumchloride en natriumalginaat"
        },
        {
                  "en": "Making perfectly round cocktail glasses",
                  "es": "Hacer copas de cóctel perfectamente redondas",
                  "de": "Perfekt runde Cocktailgläser herstellen",
                  "nl": "Perfect ronde cocktailglazen maken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Spherification uses calcium chloride and sodium alginate to create gel membranes around liquid, forming caviar-like pearls or larger spheres that burst with flavor when consumed.",
                  "es": "La esferificación usa cloruro de calcio y alginato de sodio para crear membranas de gel alrededor del líquido, formando perlas similares al caviar o esferas más grandes que explotan con sabor al consumirse.",
                  "de": "Sphärifizierung verwendet Calciumchlorid und Natriumalginat, um Gelmembranen um Flüssigkeit zu schaffen, bildet kaviar-ähnliche Perlen oder größere Kugeln, die beim Verzehr mit Geschmack platzen.",
                  "nl": "Sferificatie gebruikt calciumchloride en natriumalginaat om gel membranen rond vloeistof te maken, vormt kaviaar-achtige parels of grotere bollen die barsten met smaak wanneer geconsumeerd."
        }
      },
      {
        question: {
                  "en": "What is gelification in cocktail making?",
                  "es": "¿Qué es la gelificación en la preparación de cócteles?",
                  "de": "Was ist Gelierung bei der Cocktailherstellung?",
                  "nl": "Wat is gelificatie bij het maken van cocktails?"
        },
        options: [
        {
                  "en": "Freezing cocktails completely",
                  "es": "Congelar cócteles completamente",
                  "de": "Cocktails vollständig einfrieren",
                  "nl": "Cocktails volledig bevriezen"
        },
        {
                  "en": "Making cocktails with ice",
                  "es": "Hacer cócteles con hielo",
                  "de": "Cocktails mit Eis machen",
                  "nl": "Cocktails maken met ijs"
        },
        {
                  "en": "Converting liquids into gel-like substances using hydrocolloids",
                  "es": "Convertir líquidos en sustancias similares al gel usando hidrocoloides",
                  "de": "Flüssigkeiten mit Hydrokolloiden in gelartige Substanzen umwandeln",
                  "nl": "Vloeistoffen omzetten in gel-achtige stoffen met hydrocolloïden"
        },
        {
                  "en": "Adding gelatin to thicken drinks",
                  "es": "Añadir gelatina para espesar bebidas",
                  "de": "Gelatine hinzufügen, um Getränke zu verdicken",
                  "nl": "Gelatine toevoegen om drankjes te verdikken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Gelification uses hydrocolloids like agar, carrageenan, or xanthan gum to transform liquid cocktails into gel textures while maintaining their original flavors and creating unique mouthfeel experiences.",
                  "es": "La gelificación usa hidrocoloides como agar, carragenina o goma xantana para transformar cócteles líquidos en texturas de gel mientras mantiene sus sabores originales y crea experiencias únicas de sensación en boca.",
                  "de": "Gelierung verwendet Hydrokolloide wie Agar, Carrageen oder Xanthan, um flüssige Cocktails in Geltexturen zu verwandeln, während ihre ursprünglichen Geschmäcker beibehalten und einzigartige Mundgefühl-Erfahrungen geschaffen werden.",
                  "nl": "Gelificatie gebruikt hydrocolloïden zoals agar, carrageen of xanthaangom om vloeibare cocktails om te zetten in gel texturen terwijl hun oorspronkelijke smaken behouden blijven en unieke mondgevoel ervaringen worden gecreëerd."
        }
      },
      {
        question: {
                  "en": "What is the function of xanthan gum in modern cocktails?",
                  "es": "¿Cuál es la función de la goma xantana en cócteles modernos?",
                  "de": "Was ist die Funktion von Xanthan in modernen Cocktails?",
                  "nl": "Wat is de functie van xanthaangom in moderne cocktails?"
        },
        options: [
        {
                  "en": "To create stable foams and adjust viscosity",
                  "es": "Para crear espumas estables y ajustar viscosidad",
                  "de": "Um stabile Schäume zu erzeugen und Viskosität anzupassen",
                  "nl": "Om stabiele schuimen te creëren en viscositeit aan te passen"
        },
        {
                  "en": "To preserve cocktails longer",
                  "es": "Para conservar cócteles por más tiempo",
                  "de": "Um Cocktails länger zu konservieren",
                  "nl": "Om cocktails langer te bewaren"
        },
        {
                  "en": "To add sweetness",
                  "es": "Para añadir dulzura",
                  "de": "Um Süße hinzuzufügen",
                  "nl": "Om zoetheid toe te voegen"
        },
        {
                  "en": "To add color",
                  "es": "Para añadir color",
                  "de": "Um Farbe hinzuzufügen",
                  "nl": "Om kleur toe te voegen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Xanthan gum is a stabilizing agent that creates lasting foams, adjusts viscosity, and enables suspension of particles in cocktails without affecting taste, crucial for modern textural cocktails.",
                  "es": "La goma xantana es un agente estabilizador que crea espumas duraderas, ajusta viscosidad y permite suspensión de partículas en cócteles sin afectar el sabor, crucial para cócteles texturales modernos.",
                  "de": "Xanthan ist ein Stabilisator, der dauerhafte Schäume erzeugt, Viskosität anpasst und Partikelsuspension in Cocktails ermöglicht ohne Geschmack zu beeinflussen, entscheidend für moderne Textur-Cocktails.",
                  "nl": "Xanthaangom is een stabiliserend middel dat langdurige schuimen creëert, viscositeit aanpast en suspensie van deeltjes in cocktails mogelijk maakt zonder smaak te beïnvloeden, cruciaal voor moderne textuur cocktails."
        }
      },
      {
        question: {
                  "en": "What is 'caviar spherification' used for in cocktails?",
                  "es": "¿Para qué se usa la 'esferificación de caviar' en cócteles?",
                  "de": "Wofür wird 'Kaviar-Sphärifizierung' in Cocktails verwendet?",
                  "nl": "Waarvoor wordt 'kaviaar sferificatie' gebruikt in cocktails?"
        },
        options: [
        {
                  "en": "Adding real caviar to drinks",
                  "es": "Añadir caviar real a bebidas",
                  "de": "Echten Kaviar zu Getränken hinzufügen",
                  "nl": "Echte kaviaar toevoegen aan drankjes"
        },
        {
                  "en": "Expensive garnish decoration",
                  "es": "Decoración de guarnición costosa",
                  "de": "Teure Garniturdekoration",
                  "nl": "Dure garnering decoratie"
        },
        {
                  "en": "Creating small flavor-burst pearls that pop in the mouth",
                  "es": "Crear pequeñas perlas de explosión de sabor que explotan en la boca",
                  "de": "Kleine geschmacksplatzende Perlen schaffen, die im Mund platzen",
                  "nl": "Kleine smaak-barst parels maken die in de mond knappen"
        },
        {
                  "en": "Making black-colored cocktails",
                  "es": "Hacer cócteles de color negro",
                  "de": "Schwarze Cocktails herstellen",
                  "nl": "Zwart gekleurde cocktails maken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Caviar spherification creates tiny gel spheres filled with flavored liquid that burst when bitten, providing intense flavor releases and unique textural experiences in cocktails.",
                  "es": "La esferificación de caviar crea pequeñas esferas de gel llenas de líquido saborizado que explotan al morderlas, proporcionando liberaciones intensas de sabor y experiencias texturales únicas en cócteles.",
                  "de": "Kaviar-Sphärifizierung schafft winzige Gelkugeln gefüllt mit aromatisierter Flüssigkeit, die beim Beißen platzen, bietet intensive Geschmacksfreisetzungen und einzigartige Texturerfahrungen in Cocktails.",
                  "nl": "Kaviaar sferificatie creëert kleine gel bollen gevuld met gearomatiseerde vloeistof die knappen wanneer gebeten, wat intense smaakafgifte en unieke textuur ervaringen in cocktails biedt."
        }
      },
      {
        question: {
                  "en": "What is the purpose of using dry ice in cocktail presentation?",
                  "es": "¿Cuál es el propósito de usar hielo seco en la presentación de cócteles?",
                  "de": "Was ist der Zweck der Verwendung von Trockeneis in der Cocktailpräsentation?",
                  "nl": "Wat is het doel van het gebruik van droogijs in cocktail presentatie?"
        },
        options: [
        {
                  "en": "To make drinks colder than regular ice",
                  "es": "Para hacer bebidas más frías que el hielo regular",
                  "de": "Um Getränke kälter als normales Eis zu machen",
                  "nl": "Om drankjes kouder te maken dan gewoon ijs"
        },
        {
                  "en": "To preserve cocktails for days",
                  "es": "Para conservar cócteles por días",
                  "de": "Um Cocktails tagelang zu konservieren",
                  "nl": "Om cocktails dagenlang te bewaren"
        },
        {
                  "en": "To add carbon dioxide flavor",
                  "es": "Para añadir sabor de dióxido de carbono",
                  "de": "Um Kohlendioxid-Geschmack hinzuzufügen",
                  "nl": "Om kooldioxide smaak toe te voegen"
        },
        {
                  "en": "To create dramatic fog effects and maintain temperature",
                  "es": "Para crear efectos dramáticos de niebla y mantener temperatura",
                  "de": "Um dramatische Nebeleffekte zu schaffen und Temperatur zu halten",
                  "nl": "Om dramatische misteffecten te creëren en temperatuur te behouden"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Dry ice sublimates from solid to gas at -78.5°C, creating dramatic fog effects for presentation while maintaining extremely cold temperatures without diluting the cocktail.",
                  "es": "El hielo seco sublima de sólido a gas a -78.5°C, creando efectos dramáticos de niebla para presentación mientras mantiene temperaturas extremadamente frías sin diluir el cóctel.",
                  "de": "Trockeneis sublimiert von fest zu gasförmig bei -78.5°C, schafft dramatische Nebeleffekte für Präsentation während extrem kalte Temperaturen gehalten werden ohne den Cocktail zu verdünnen.",
                  "nl": "Droogijs sublimeert van vast naar gas bij -78.5°C, creëert dramatische misteffecten voor presentatie terwijl extreem koude temperaturen worden behouden zonder de cocktail te verdunnen."
        }
      },
      {
        question: {
                  "en": "What is 'foam stabilization' in molecular cocktails?",
                  "es": "¿Qué es la 'estabilización de espuma' en cócteles moleculares?",
                  "de": "Was ist 'Schaumstabilisierung' in molekularen Cocktails?",
                  "nl": "Wat is 'schuim stabilisatie' in moleculaire cocktails?"
        },
        options: [
        {
                  "en": "Adding soap to cocktails",
                  "es": "Añadir jabón a cócteles",
                  "de": "Seife zu Cocktails hinzufügen",
                  "nl": "Zeep toevoegen aan cocktails"
        },
        {
                  "en": "Adding carbonated water",
                  "es": "Añadir agua carbonatada",
                  "de": "Kohlensäurehaltiges Wasser hinzufügen",
                  "nl": "Koolzuurhoudend water toevoegen"
        },
        {
                  "en": "Using lecithin, agar, or gellan to maintain foam structure",
                  "es": "Usar lecitina, agar o gellan para mantener estructura de espuma",
                  "de": "Lecithin, Agar oder Gellan verwenden, um Schaumstruktur zu erhalten",
                  "nl": "Lecithine, agar of gellan gebruiken om schuimstructuur te behouden"
        },
        {
                  "en": "Whipping cream into cocktails",
                  "es": "Batir crema en cócteles",
                  "de": "Sahne in Cocktails schlagen",
                  "nl": "Room in cocktails kloppen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Foam stabilization uses emulsifiers like lecithin, agar, or gellan gum to create and maintain stable, long-lasting foams that don't collapse quickly, essential for modern cocktail presentations.",
                  "es": "La estabilización de espuma usa emulsificantes como lecitina, agar o goma gellan para crear y mantener espumas estables y duraderas que no colapsan rápidamente, esencial para presentaciones modernas de cócteles.",
                  "de": "Schaumstabilisierung verwendet Emulgatoren wie Lecithin, Agar oder Gellan, um stabile, langanhaltende Schäume zu schaffen und zu erhalten, die nicht schnell kollabieren, essentiell für moderne Cocktailpräsentationen.",
                  "nl": "Schuim stabilisatie gebruikt emulgatoren zoals lecithine, agar of gellan gom om stabiele, langdurige schuimen te creëren en behouden die niet snel instorten, essentieel voor moderne cocktail presentaties."
        }
      },
      {
        question: {
                  "en": "What is 'transglutaminase' used for in molecular mixology?",
                  "es": "¿Para qué se usa la 'transglutaminasa' en mixología molecular?",
                  "de": "Wofür wird 'Transglutaminase' in der molekularen Mixologie verwendet?",
                  "nl": "Waarvoor wordt 'transglutaminase' gebruikt in moleculaire mixologie?"
        },
        options: [
        {
                  "en": "Creating carbonation",
                  "es": "Crear carbonatación",
                  "de": "Kohlensäure erzeugen",
                  "nl": "Koolzuur creëren"
        },
        {
                  "en": "Preserving cocktail color",
                  "es": "Preservar color del cóctel",
                  "de": "Cocktailfarbe bewahren",
                  "nl": "Cocktail kleur bewaren"
        },
        {
                  "en": "Adding sweetness to cocktails",
                  "es": "Añadir dulzura a cócteles",
                  "de": "Süße zu Cocktails hinzufügen",
                  "nl": "Zoetheid toevoegen aan cocktails"
        },
        {
                  "en": "Bonding proteins to create unusual textures and combinations",
                  "es": "Unir proteínas para crear texturas y combinaciones inusuales",
                  "de": "Proteine binden, um ungewöhnliche Texturen und Kombinationen zu schaffen",
                  "nl": "Eiwitten binden om ongewone texturen en combinaties te creëren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Transglutaminase, known as 'meat glue,' is an enzyme that bonds proteins together, allowing creation of unusual food combinations and textures in avant-garde cocktail garnishes and presentations.",
                  "es": "La transglutaminasa, conocida como 'pegamento de carne', es una enzima que une proteínas, permitiendo crear combinaciones y texturas inusuales de alimentos en guarniciones y presentaciones de cócteles de vanguardia.",
                  "de": "Transglutaminase, bekannt als 'Fleischkleber', ist ein Enzym, das Proteine bindet, ermöglicht die Schaffung ungewöhnlicher Lebensmittelkombinationen und Texturen in avantgardistischen Cocktailgarnituren und Präsentationen.",
                  "nl": "Transglutaminase, bekend als 'vleeslijm', is een enzym dat eiwitten bindt, waardoor ongewone voedselcombinaties en texturen kunnen worden gecreëerd in avant-garde cocktail garneringen en presentaties."
        }
      },
      {
        question: {
                  "en": "What is 'clarification through enzyme treatment' in cocktails?",
                  "es": "¿Qué es la 'clarificación a través de tratamiento enzimático' en cócteles?",
                  "de": "Was ist 'Klärung durch Enzymbehandlung' in Cocktails?",
                  "nl": "Wat is 'verheldering door enzymbehandeling' in cocktails?"
        },
        options: [
        {
                  "en": "Enzyme cleaning of glassware",
                  "es": "Limpieza enzimática de cristalería",
                  "de": "Enzymreinigung von Glaswaren",
                  "nl": "Enzym reiniging van glaswerk"
        },
        {
                  "en": "Using pectinase to break down fruit particles",
                  "es": "Usar pectinasa para descomponer partículas de fruta",
                  "de": "Pektinase verwenden, um Fruchtpartikel abzubauen",
                  "nl": "Pectinase gebruiken om fruitdeeltjes af te breken"
        },
        {
                  "en": "Adding alcohol enzymes",
                  "es": "Añadir enzimas de alcohol",
                  "de": "Alkoholenzyme hinzufügen",
                  "nl": "Alcohol enzymen toevoegen"
        },
        {
                  "en": "Using digestive enzymes",
                  "es": "Usar enzimas digestivas",
                  "de": "Verdauungsenzyme verwenden",
                  "nl": "Spijsverteringsenenzymen gebruiken"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Pectinase enzyme breaks down pectin in fruit juices, eliminating cloudiness and creating crystal-clear fruit-flavored cocktails while maintaining full flavor intensity.",
                  "es": "La enzima pectinasa descompone la pectina en jugos de fruta, eliminando la turbidez y creando cócteles con sabor a fruta cristalinos mientras mantiene la intensidad completa del sabor.",
                  "de": "Pektinase-Enzym baut Pektin in Fruchtsäften ab, eliminiert Trübung und schafft kristallklare fruchtige Cocktails während volle Geschmacksintensität erhalten bleibt.",
                  "nl": "Pectinase enzym breekt pectine in vruchtensappen af, elimineert troebeling en creëert kristalheldere fruit-gearomatiseerde cocktails terwijl volledige smaakintensiteit behouden blijft."
        }
      },
      {
        question: {
                  "en": "What is 'levitation presentation' in molecular cocktails?",
                  "es": "¿Qué es la 'presentación de levitación' en cócteles moleculares?",
                  "de": "Was ist 'Levitations-Präsentation' in molekularen Cocktails?",
                  "nl": "Wat is 'levitatie presentatie' in moleculaire cocktails?"
        },
        options: [
        {
                  "en": "Anti-gravity cocktail preparation",
                  "es": "Preparación de cócteles anti-gravedad",
                  "de": "Anti-Schwerkraft Cocktailzubereitung",
                  "nl": "Anti-zwaartekracht cocktail bereiding"
        },
        {
                  "en": "Creating the illusion of floating elements through clever glassware design",
                  "es": "Crear la ilusión de elementos flotantes a través del diseño inteligente de cristalería",
                  "de": "Illusion schwebender Elemente durch cleveres Glaswarendesign schaffen",
                  "nl": "De illusie van zwevende elementen creëren door slim glaswerk ontwerp"
        },
        {
                  "en": "Using magnets to float garnishes",
                  "es": "Usar imanes para hacer flotar guarniciones",
                  "de": "Magnete verwenden, um Garnituren schweben zu lassen",
                  "nl": "Magneten gebruiken om garneringen te laten zweven"
        },
        {
                  "en": "Using helium to make drinks float",
                  "es": "Usar helio para hacer flotar bebidas",
                  "de": "Helium verwenden, um Getränke schweben zu lassen",
                  "nl": "Helium gebruiken om drankjes te laten zweven"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Levitation presentation uses specially designed glassware with hidden supports, invisible threads, or optical illusions to create the appearance of floating garnishes or cocktail elements for dramatic effect.",
                  "es": "La presentación de levitación usa cristalería especialmente diseñada con soportes ocultos, hilos invisibles o ilusiones ópticas para crear la apariencia de guarniciones flotantes o elementos de cóctel para efecto dramático.",
                  "de": "Levitations-Präsentation verwendet speziell designte Glaswaren mit versteckten Stützen, unsichtbaren Fäden oder optischen Illusionen, um das Erscheinungsbild schwebender Garnituren oder Cocktailelemente für dramatischen Effekt zu schaffen.",
                  "nl": "Levitatie presentatie gebruikt speciaal ontworpen glaswerk met verborgen steunen, onzichtbare draden of optische illusies om het uiterlijk van zwevende garneringen of cocktail elementen te creëren voor dramatisch effect."
        }
      },
      {
        question: {
                  "en": "What is a 'reverse dry shake'?",
                  "es": "¿Qué es un 'batido seco inverso'?",
                  "de": "Was ist ein 'umgekehrter Dry Shake'?",
                  "nl": "Wat is een 'omgekeerde droge shake'?"
        },
        options: [
        {
                  "en": "Shaking very gently",
                  "es": "Agitar muy suavemente",
                  "de": "Sehr sanft schütteln",
                  "nl": "Heel zachtjes schudden"
        },
        {
                  "en": "Shaking without liquid",
                  "es": "Agitar sin líquido",
                  "de": "Ohne Flüssigkeit schütteln",
                  "nl": "Schudden zonder vloeistof"
        },
        {
                  "en": "Using dry ice",
                  "es": "Usar hielo seco",
                  "de": "Trockeneis verwenden",
                  "nl": "Droogijs gebruiken"
        },
        {
                  "en": "Shake with ice first, strain, then dry shake with egg white",
                  "es": "Agitar con hielo primero, colar, luego agitar en seco con clara",
                  "de": "Zuerst mit Eis schütteln, abseihen, dann trocken mit Eiweiß schütteln",
                  "nl": "Eerst met ijs schudden, zeven, dan droog schudden met eiwit"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Reverse dry shake means shaking with ice first to chill and dilute, straining out ice, then dry shaking to create maximum foam without ice diluting the texture.",
                  "es": "Batido seco inverso significa agitar con hielo primero para enfriar y diluir, colar el hielo, luego agitar en seco para crear espuma máxima sin que el hielo diluya la textura.",
                  "de": "Umgekehrter Dry Shake bedeutet zuerst mit Eis schütteln zum Kühlen und Verdünnen, Eis abseihen, dann trocken schütteln für maximalen Schaum ohne dass Eis die Textur verdünnt.",
                  "nl": "Omgekeerde droge shake betekent eerst met ijs schudden om te koelen en verdunnen, ijs zeven, dan droog schudden voor maximaal schuim zonder dat ijs de textuur verdunt."
        }
      },
      {
        question: {
                  "en": "What is a 'Corpse Reviver #2' made with?",
                  "es": "¿Con qué se hace un 'Corpse Reviver #2'?",
                  "de": "Woraus wird ein 'Corpse Reviver #2' gemacht?",
                  "nl": "Waarvan wordt een 'Corpse Reviver #2' gemaakt?"
        },
        options: [
        {
                  "en": "Vodka and cranberry",
                  "es": "Vodka y arándano",
                  "de": "Wodka und Preiselbeere",
                  "nl": "Vodka en cranberry"
        },
        {
                  "en": "Gin, Lillet, Cointreau, lemon, absinthe rinse",
                  "es": "Ginebra, Lillet, Cointreau, limón, enjuague de absenta",
                  "de": "Gin, Lillet, Cointreau, Zitrone, Absinth-Spülung",
                  "nl": "Gin, Lillet, Cointreau, citroen, absint spoeling"
        },
        {
                  "en": "Whiskey and ginger",
                  "es": "Whisky y jengibre",
                  "de": "Whiskey und Ingwer",
                  "nl": "Whiskey en gember"
        },
        {
                  "en": "Rum and cola",
                  "es": "Ron y cola",
                  "de": "Rum und Cola",
                  "nl": "Rum en cola"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Corpse Reviver #2 is a classic 'hair of the dog' cocktail with equal parts gin, Lillet Blanc, Cointreau, and lemon juice, with an absinthe rinse. Supposedly revives the dead (or hungover).",
                  "es": "Corpse Reviver #2 es un cóctel clásico 'pelo del perro' con partes iguales de ginebra, Lillet Blanc, Cointreau y jugo de limón, con enjuague de absenta. Supuestamente revive a los muertos (o con resaca).",
                  "de": "Corpse Reviver #2 ist ein klassischer 'Kater'-Cocktail mit gleichen Teilen Gin, Lillet Blanc, Cointreau und Zitronensaft, mit Absinth-Spülung. Soll angeblich Tote (oder Verkaterte) wiederbeleben.",
                  "nl": "Corpse Reviver #2 is een klassieke 'tegen de kater' cocktail met gelijke delen gin, Lillet Blanc, Cointreau en citroensap, met absint spoeling. Zou doden (of kater-lijders) nieuw leven inblazen."
        }
      },
      {
        question: {
                  "en": "What is 'aquafaba' used for in cocktails?",
                  "es": "¿Para qué se usa 'aquafaba' en cócteles?",
                  "de": "Wofür wird 'Aquafaba' in Cocktails verwendet?",
                  "nl": "Waarvoor wordt 'aquafaba' in cocktails gebruikt?"
        },
        options: [
        {
                  "en": "Flavored water",
                  "es": "Agua saborizada",
                  "de": "Aromatisiertes Wasser",
                  "nl": "Gearomatiseerd water"
        },
        {
                  "en": "Type of garnish",
                  "es": "Tipo de guarnición",
                  "de": "Art der Garnitur",
                  "nl": "Soort garnering"
        },
        {
                  "en": "Water purification",
                  "es": "Purificación de agua",
                  "de": "Wasserreinigung",
                  "nl": "Waterzuivering"
        },
        {
                  "en": "Vegan egg white substitute for foam",
                  "es": "Sustituto vegano de clara de huevo para espuma",
                  "de": "Veganer Eiweißersatz für Schaum",
                  "nl": "Veganistische eiwitvervanger voor schuim"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Aquafaba is chickpea brine (the liquid from canned chickpeas) used as a vegan egg white substitute. It froths beautifully when shaken, creating perfect foam in sours.",
                  "es": "Aquafaba es salmuera de garbanzos (el líquido de garbanzos enlatados) usado como sustituto vegano de clara de huevo. Hace espuma hermosamente cuando se agita, creando espuma perfecta en sours.",
                  "de": "Aquafaba ist Kichererbsenwasser (die Flüssigkeit aus Kichererbsenkonserven), das als veganer Eiweißersatz verwendet wird. Es schäumt wunderbar beim Schütteln und erzeugt perfekten Schaum in Sours.",
                  "nl": "Aquafaba is kikkererwtenvocht (de vloeistof uit kikkererwtenblikken) gebruikt als veganistische eiwitvervanger. Het schuimt prachtig wanneer geschud, wat perfect schuim creëert in sours."
        }
      },
      {
        question: {
                  "en": "What is a 'Last Word' cocktail?",
                  "es": "¿Qué es un cóctel 'Last Word'?",
                  "de": "Was ist ein 'Last Word'-Cocktail?",
                  "nl": "Wat is een 'Last Word' cocktail?"
        },
        options: [
        {
                  "en": "Whiskey and bitters",
                  "es": "Whisky y amargos",
                  "de": "Whiskey und Bitter",
                  "nl": "Whiskey en bitters"
        },
        {
                  "en": "Vodka martini variation",
                  "es": "Variación de vodka martini",
                  "de": "Wodka-Martini-Variation",
                  "nl": "Vodka martini variatie"
        },
        {
                  "en": "Equal parts gin, Green Chartreuse, maraschino, lime",
                  "es": "Partes iguales de ginebra, Chartreuse verde, marrasquino, lima",
                  "de": "Gleiche Teile Gin, grüne Chartreuse, Maraschino, Limette",
                  "nl": "Gelijke delen gin, groene Chartreuse, maraschino, limoen"
        },
        {
                  "en": "Rum punch",
                  "es": "Ponche de ron",
                  "de": "Rum-Punsch",
                  "nl": "Rum punch"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The Last Word is a Prohibition-era cocktail with equal parts gin, Green Chartreuse, maraschino liqueur, and lime juice. Rediscovered in 2004, it sparked a craft cocktail renaissance.",
                  "es": "El Last Word es un cóctel de la era de la Prohibición con partes iguales de ginebra, Chartreuse verde, licor de marrasquino y jugo de lima. Redescubierto en 2004, desencadenó un renacimiento de cóctel artesanal.",
                  "de": "Das Last Word ist ein Cocktail aus der Prohibitionszeit mit gleichen Teilen Gin, grüner Chartreuse, Maraschinolikör und Limettensaft. 2004 wiederentdeckt, löste es eine Craft-Cocktail-Renaissance aus.",
                  "nl": "De Last Word is een cocktail uit het Droogleggingstijdperk met gelijke delen gin, groene Chartreuse, maraschino likeur en limoensap. Herontdekt in 2004, leidde het tot een ambachtelijke cocktail renaissance."
        }
      },
      {
        question: {
                  "en": "What is 'perlage' in cocktails?",
                  "es": "¿Qué es 'perlage' en cócteles?",
                  "de": "Was ist 'Perlage' in Cocktails?",
                  "nl": "Wat is 'perlage' in cocktails?"
        },
        options: [
        {
                  "en": "Stirring technique",
                  "es": "Técnica de revolver",
                  "de": "Rührtechnik",
                  "nl": "Roertechniek"
        },
        {
                  "en": "Type of pearl garnish",
                  "es": "Tipo de guarnición de perla",
                  "de": "Art der Perlengarnitur",
                  "nl": "Soort parelgarnering"
        },
        {
                  "en": "French liqueur",
                  "es": "Licor francés",
                  "de": "Französischer Likör",
                  "nl": "Franse likeur"
        },
        {
                  "en": "The bubbles in sparkling wine or champagne",
                  "es": "Las burbujas en vino espumoso o champán",
                  "de": "Die Blasen in Sekt oder Champagner",
                  "nl": "De bubbels in mousserende wijn of champagne"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Perlage refers to the bubbles in sparkling wine—their size, persistence, and quality. Fine, persistent perlage indicates quality champagne, important in champagne cocktails like French 75.",
                  "es": "Perlage se refiere a las burbujas en vino espumoso—su tamaño, persistencia y calidad. Perlage fino y persistente indica champán de calidad, importante en cócteles de champán como French 75.",
                  "de": "Perlage bezeichnet die Blasen in Sekt—ihre Größe, Beständigkeit und Qualität. Feine, beständige Perlage zeigt Qualitätschampagner an, wichtig in Champagner-Cocktails wie French 75.",
                  "nl": "Perlage verwijst naar de bubbels in mousserende wijn—hun grootte, persistentie en kwaliteit. Fijne, persistente perlage duidt op kwaliteitschampagne, belangrijk in champagne cocktails zoals French 75."
        }
      },
      {
        question: {
                  "en": "What cocktail is considered the 'holy grail' of tiki drinks?",
                  "es": "¿Qué cóctel se considera el 'santo grial' de las bebidas tiki?",
                  "de": "Welcher Cocktail gilt als 'heiliger Gral' der Tiki-Getränke?",
                  "nl": "Welke cocktail wordt beschouwd als de 'heilige graal' van tiki drankjes?"
        },
        options: [
        {
                  "en": "Navy Grog",
                  "es": "Navy Grog",
                  "de": "Navy Grog",
                  "nl": "Navy Grog"
        },
        {
                  "en": "Zombie",
                  "es": "Zombie",
                  "de": "Zombie",
                  "nl": "Zombie"
        },
        {
                  "en": "Blue Hawaiian",
                  "es": "Blue Hawaiian",
                  "de": "Blue Hawaiian",
                  "nl": "Blue Hawaiian"
        },
        {
                  "en": "Mai Tai",
                  "es": "Mai Tai",
                  "de": "Mai Tai",
                  "nl": "Mai Tai"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Don the Beachcomber's Navy Grog is considered the holy grail—the recipe was lost for decades. It uses three rums, lime, grapefruit, honey syrup, and a special ice cone.",
                  "es": "El Navy Grog de Don the Beachcomber se considera el santo grial—la receta se perdió durante décadas. Usa tres rones, lima, toronja, jarabe de miel y un cono de hielo especial.",
                  "de": "Don the Beachcombers Navy Grog gilt als heiliger Gral—das Rezept war jahrzehntelang verloren. Es verwendet drei Rumsorten, Limette, Grapefruit, Honigsirup und einen speziellen Eiskegel.",
                  "nl": "Don the Beachcomber's Navy Grog wordt beschouwd als de heilige graal—het recept was tientallen jaren verloren. Het gebruikt drie soorten rum, limoen, grapefruit, honing siroop en een speciale ijskegel."
        }
      },
      {
        question: {
                  "en": "What is 'batching' cocktails?",
                  "es": "¿Qué es 'batching' de cócteles?",
                  "de": "Was ist 'Batching' von Cocktails?",
                  "nl": "Wat is 'batchen' van cocktails?"
        },
        options: [
        {
                  "en": "Organizing bottles",
                  "es": "Organizar botellas",
                  "de": "Flaschen organisieren",
                  "nl": "Flessen organiseren"
        },
        {
                  "en": "Shaking multiple cocktails at once",
                  "es": "Agitar múltiples cócteles a la vez",
                  "de": "Mehrere Cocktails gleichzeitig schütteln",
                  "nl": "Meerdere cocktails tegelijk schudden"
        },
        {
                  "en": "Cleaning equipment",
                  "es": "Limpiar equipo",
                  "de": "Ausrüstung reinigen",
                  "nl": "Apparatuur schoonmaken"
        },
        {
                  "en": "Making cocktails in large quantities ahead of time",
                  "es": "Hacer cócteles en grandes cantidades con anticipación",
                  "de": "Cocktails in großen Mengen im Voraus zubereiten",
                  "nl": "Cocktails in grote hoeveelheden van tevoren maken"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Batching means pre-mixing cocktails in large quantities, accounting for dilution that would occur from shaking/stirring. Perfect for parties or busy bars, maintaining consistency.",
                  "es": "Batching significa pre-mezclar cócteles en grandes cantidades, contabilizando la dilución que ocurriría al agitar/revolver. Perfecto para fiestas o bares ocupados, manteniendo consistencia.",
                  "de": "Batching bedeutet Cocktails in großen Mengen vorher zu mischen, wobei die Verdünnung vom Schütteln/Rühren berücksichtigt wird. Perfekt für Partys oder geschäftige Bars, hält Konsistenz.",
                  "nl": "Batchen betekent cocktails vooraf in grote hoeveelheden mengen, rekening houdend met verdunning die zou optreden door schudden/roeren. Perfect voor feesten of drukke bars, behoudt consistentie."
        }
      },
      {
        question: {
                  "en": "What is 'sous vide' infusion in cocktails?",
                  "es": "¿Qué es la infusión 'sous vide' en cócteles?",
                  "de": "Was ist 'Sous-vide'-Infusion in Cocktails?",
                  "nl": "Wat is 'sous vide' infusie in cocktails?"
        },
        options: [
        {
                  "en": "French liqueur technique",
                  "es": "Técnica de licor francés",
                  "de": "Französische Likörtechnik",
                  "nl": "Franse likeur techniek"
        },
        {
                  "en": "Cold extraction method",
                  "es": "Método de extracción en frío",
                  "de": "Kaltextraktionsmethode",
                  "nl": "Koude extractie methode"
        },
        {
                  "en": "Pressure infusion",
                  "es": "Infusión a presión",
                  "de": "Druckinfusion",
                  "nl": "Druk infusie"
        },
        {
                  "en": "Vacuum-sealing ingredients with spirits and heating at precise low temperatures",
                  "es": "Sellar al vacío ingredientes con licores y calentar a temperaturas bajas precisas",
                  "de": "Zutaten mit Spirituosen vakuumversiegeln und bei präzisen niedrigen Temperaturen erhitzen",
                  "nl": "Ingrediënten vacuüm verzegelen met spirits en verwarmen op precieze lage temperaturen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Sous vide infusion vacuum-seals ingredients with spirits in a bag, then heats at precise low temps (typically 55-65°C) for hours, extracting maximum flavor without cooking or degrading the spirit.",
                  "es": "La infusión sous vide sella al vacío ingredientes con licores en una bolsa, luego calienta a temperaturas bajas precisas (típicamente 55-65°C) durante horas, extrayendo sabor máximo sin cocinar o degradar el licor.",
                  "de": "Sous-vide-Infusion versiegelt Zutaten mit Spirituosen vakuumiert in einem Beutel, erhitzt dann bei präzisen niedrigen Temperaturen (typisch 55-65°C) stundenlang, extrahiert maximalen Geschmack ohne Kochen oder Degradieren des Spirits.",
                  "nl": "Sous vide infusie verzegelt ingrediënten vacuüm met spirits in een zak, verwarmt dan op precieze lage temperaturen (typisch 55-65°C) urenlang, extraheert maximale smaak zonder koken of degraderen van de spirit."
        }
      },
      {
        question: {
                  "en": "What is the 'Hemingway Daiquiri' also known as?",
                  "es": "¿Cómo se conoce también el 'Hemingway Daiquiri'?",
                  "de": "Wie wird der 'Hemingway Daiquiri' auch genannt?",
                  "nl": "Hoe wordt de 'Hemingway Daiquiri' ook wel genoemd?"
        },
        options: [
        {
                  "en": "Cuban Special",
                  "es": "Especial Cubano",
                  "de": "Kubanisches Spezial",
                  "nl": "Cubaans Speciaal"
        },
        {
                  "en": "Papa Doble",
                  "es": "Papa Doble",
                  "de": "Papa Doble",
                  "nl": "Papa Doble"
        },
        {
                  "en": "Old Man Cocktail",
                  "es": "Cóctel del Viejo",
                  "de": "Alter-Mann-Cocktail",
                  "nl": "Oude Man Cocktail"
        },
        {
                  "en": "Writer's Block",
                  "es": "Bloqueo del Escritor",
                  "de": "Schreibblockade",
                  "nl": "Writer's Block"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The Hemingway Daiquiri is also called 'Papa Doble'—a daiquiri variation with white rum, lime, grapefruit juice, and maraschino liqueur, created for Ernest Hemingway without sugar.",
                  "es": "El Hemingway Daiquiri también se llama 'Papa Doble'—una variación de daiquiri con ron blanco, lima, jugo de toronja y licor de marrasquino, creado para Ernest Hemingway sin azúcar.",
                  "de": "Der Hemingway Daiquiri wird auch 'Papa Doble' genannt—eine Daiquiri-Variation mit weißem Rum, Limette, Grapefruitsaft und Maraschinolikör, für Ernest Hemingway ohne Zucker kreiert.",
                  "nl": "De Hemingway Daiquiri wordt ook 'Papa Doble' genoemd—een daiquiri variatie met witte rum, limoen, grapefruitsap en maraschino likeur, gecreëerd voor Ernest Hemingway zonder suiker."
        }
      },
      {
        question: {
                  "en": "What is a 'smoking gun' used for in cocktails?",
                  "es": "¿Para qué se usa una 'pistola de humo' en cócteles?",
                  "de": "Wofür wird eine 'Rauchpistole' in Cocktails verwendet?",
                  "nl": "Waarvoor wordt een 'rookpistool' in cocktails gebruikt?"
        },
        options: [
        {
                  "en": "Rapid chilling",
                  "es": "Enfriamiento rápido",
                  "de": "Schnelles Kühlen",
                  "nl": "Snel koelen"
        },
        {
                  "en": "Lighting cocktails on fire",
                  "es": "Encender cócteles en fuego",
                  "de": "Cocktails anzünden",
                  "nl": "Cocktails in brand steken"
        },
        {
                  "en": "Infusing cocktails with cold smoke from wood chips or herbs",
                  "es": "Infusionar cócteles con humo frío de astillas de madera o hierbas",
                  "de": "Cocktails mit kaltem Rauch von Holzspänen oder Kräutern infundieren",
                  "nl": "Cocktails infuseren met koude rook van houtsnippers of kruiden"
        },
        {
                  "en": "Measuring alcohol content",
                  "es": "Medir contenido de alcohol",
                  "de": "Alkoholgehalt messen",
                  "nl": "Alcoholgehalte meten"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A smoking gun is a handheld device that burns wood chips, herbs, or spices to create cold smoke, which is then infused into cocktails under a cloche or directly into the glass for aromatic complexity.",
                  "es": "Una pistola de humo es un dispositivo portátil que quema astillas de madera, hierbas o especias para crear humo frío, que luego se infusiona en cócteles bajo una campana o directamente en el vaso para complejidad aromática.",
                  "de": "Eine Rauchpistole ist ein Handgerät, das Holzspäne, Kräuter oder Gewürze verbrennt, um kalten Rauch zu erzeugen, der dann unter einer Glocke oder direkt ins Glas für aromatische Komplexität in Cocktails infundiert wird.",
                  "nl": "Een rookpistool is een handheld apparaat dat houtsnippers, kruiden of specerijen verbrandt om koude rook te creëren, die vervolgens onder een stolp of direct in het glas wordt geïnfuseerd voor aromatische complexiteit."
        }
      },
      {
        question: {
                  "en": "What is a cocktail?",
                  "es": "What is a cocktail?",
                  "de": "What is a cocktail?",
                  "nl": "What is a cocktail?"
        },
        options: [
        {
                  "en": "Mixed drink with alcohol",
                  "es": "Mixed drink with alcohol",
                  "de": "Mixed drink with alcohol",
                  "nl": "Mixed drink with alcohol"
        },
        {
                  "en": "Beer-based drink",
                  "es": "Beer-based drink",
                  "de": "Beer-based drink",
                  "nl": "Beer-based drink"
        },
        {
                  "en": "Non-alcoholic drink",
                  "es": "Non-alcoholic drink",
                  "de": "Non-alcoholic drink",
                  "nl": "Non-alcoholic drink"
        },
        {
                  "en": "Hot beverage",
                  "es": "Hot beverage",
                  "de": "Hot beverage",
                  "nl": "Hot beverage"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A cocktail is a mixed drink typically containing one or more types of alcohol mixed with other ingredients.",
                  "es": "A cocktail is a mixed drink typically containing one or more types of alcohol mixed with other ingredients.",
                  "de": "A cocktail is a mixed drink typically containing one or more types of alcohol mixed with other ingredients.",
                  "nl": "A cocktail is a mixed drink typically containing one or more types of alcohol mixed with other ingredients."
        }
      },
      {
        question: {
                  "en": "What is a martini made with?",
                  "es": "What is a martini made with?",
                  "de": "What is a martini made with?",
                  "nl": "What is a martini made with?"
        },
        options: [
        {
                  "en": "Vodka and cranberry",
                  "es": "Vodka and cranberry",
                  "de": "Vodka and cranberry",
                  "nl": "Vodka and cranberry"
        },
        {
                  "en": "Rum and cola",
                  "es": "Rum and cola",
                  "de": "Rum and cola",
                  "nl": "Rum and cola"
        },
        {
                  "en": "Gin and vermouth",
                  "es": "Gin and vermouth",
                  "de": "Gin and vermouth",
                  "nl": "Gin and vermouth"
        },
        {
                  "en": "Whiskey and soda",
                  "es": "Whiskey and soda",
                  "de": "Whiskey and soda",
                  "nl": "Whiskey and soda"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A classic martini is made with gin and dry vermouth, garnished with an olive or lemon twist.",
                  "es": "A classic martini is made with gin and dry vermouth, garnished with an olive or lemon twist.",
                  "de": "A classic martini is made with gin and dry vermouth, garnished with an olive or lemon twist.",
                  "nl": "A classic martini is made with gin and dry vermouth, garnished with an olive or lemon twist."
        }
      },
      {
        question: {
                  "en": "What is a mojito?",
                  "es": "What is a mojito?",
                  "de": "What is a mojito?",
                  "nl": "What is a mojito?"
        },
        options: [
        {
                  "en": "Rum, mint, lime, sugar, soda water",
                  "es": "Rum, mint, lime, sugar, soda water",
                  "de": "Rum, mint, lime, sugar, soda water",
                  "nl": "Rum, mint, lime, sugar, soda water"
        },
        {
                  "en": "Tequila and lime",
                  "es": "Tequila and lime",
                  "de": "Tequila and lime",
                  "nl": "Tequila and lime"
        },
        {
                  "en": "Vodka and orange juice",
                  "es": "Vodka and orange juice",
                  "de": "Vodka and orange juice",
                  "nl": "Vodka and orange juice"
        },
        {
                  "en": "Gin and tonic",
                  "es": "Gin and tonic",
                  "de": "Gin and tonic",
                  "nl": "Gin and tonic"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A mojito is a Cuban cocktail made with white rum, mint, lime juice, sugar, and soda water.",
                  "es": "A mojito is a Cuban cocktail made with white rum, mint, lime juice, sugar, and soda water.",
                  "de": "A mojito is a Cuban cocktail made with white rum, mint, lime juice, sugar, and soda water.",
                  "nl": "A mojito is a Cuban cocktail made with white rum, mint, lime juice, sugar, and soda water."
        }
      },
      {
        question: {
                  "en": "What spirit is in a margarita?",
                  "es": "What spirit is in a margarita?",
                  "de": "What spirit is in a margarita?",
                  "nl": "What spirit is in a margarita?"
        },
        options: [
        {
                  "en": "Gin",
                  "es": "Gin",
                  "de": "Gin",
                  "nl": "Gin"
        },
        {
                  "en": "Vodka",
                  "es": "Vodka",
                  "de": "Vodka",
                  "nl": "Vodka"
        },
        {
                  "en": "Rum",
                  "es": "Rum",
                  "de": "Rum",
                  "nl": "Rum"
        },
        {
                  "en": "Tequila",
                  "es": "Tequila",
                  "de": "Tequila",
                  "nl": "Tequila"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A margarita is made with tequila, lime juice, and orange liqueur (like Cointreau or Triple Sec).",
                  "es": "A margarita is made with tequila, lime juice, and orange liqueur (like Cointreau or Triple Sec).",
                  "de": "A margarita is made with tequila, lime juice, and orange liqueur (like Cointreau or Triple Sec).",
                  "nl": "A margarita is made with tequila, lime juice, and orange liqueur (like Cointreau or Triple Sec)."
        }
      },
      {
        question: {
                  "en": "What is a cosmopolitan?",
                  "es": "What is a cosmopolitan?",
                  "de": "What is a cosmopolitan?",
                  "nl": "What is a cosmopolitan?"
        },
        options: [
        {
                  "en": "Rum and cola",
                  "es": "Rum and cola",
                  "de": "Rum and cola",
                  "nl": "Rum and cola"
        },
        {
                  "en": "Whiskey sour",
                  "es": "Whiskey sour",
                  "de": "Whiskey sour",
                  "nl": "Whiskey sour"
        },
        {
                  "en": "Vodka, cranberry, lime, triple sec",
                  "es": "Vodka, cranberry, lime, triple sec",
                  "de": "Vodka, cranberry, lime, triple sec",
                  "nl": "Vodka, cranberry, lime, triple sec"
        },
        {
                  "en": "Gin and vermouth",
                  "es": "Gin and vermouth",
                  "de": "Gin and vermouth",
                  "nl": "Gin and vermouth"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A cosmopolitan is made with vodka, cranberry juice, lime juice, and triple sec.",
                  "es": "A cosmopolitan is made with vodka, cranberry juice, lime juice, and triple sec.",
                  "de": "A cosmopolitan is made with vodka, cranberry juice, lime juice, and triple sec.",
                  "nl": "A cosmopolitan is made with vodka, cranberry juice, lime juice, and triple sec."
        }
      },
      {
        question: {
                  "en": "What is a bartender's tool for mixing called?",
                  "es": "What is a bartender's tool for mixing called?",
                  "de": "What is a bartender's tool for mixing called?",
                  "nl": "What is a bartender's tool for mixing called?"
        },
        options: [
        {
                  "en": "Cocktail shaker",
                  "es": "Cocktail shaker",
                  "de": "Cocktail shaker",
                  "nl": "Cocktail shaker"
        },
        {
                  "en": "Muddler",
                  "es": "Muddler",
                  "de": "Muddler",
                  "nl": "Muddler"
        },
        {
                  "en": "Jigger",
                  "es": "Jigger",
                  "de": "Jigger",
                  "nl": "Jigger"
        },
        {
                  "en": "Strainer",
                  "es": "Strainer",
                  "de": "Strainer",
                  "nl": "Strainer"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A cocktail shaker is used to mix ingredients by shaking with ice.",
                  "es": "A cocktail shaker is used to mix ingredients by shaking with ice.",
                  "de": "A cocktail shaker is used to mix ingredients by shaking with ice.",
                  "nl": "A cocktail shaker is used to mix ingredients by shaking with ice."
        }
      },
      {
        question: {
                  "en": "What is a daiquiri made with?",
                  "es": "What is a daiquiri made with?",
                  "de": "What is a daiquiri made with?",
                  "nl": "What is a daiquiri made with?"
        },
        options: [
        {
                  "en": "Tequila and lime",
                  "es": "Tequila and lime",
                  "de": "Tequila and lime",
                  "nl": "Tequila and lime"
        },
        {
                  "en": "Rum, lime juice, simple syrup",
                  "es": "Rum, lime juice, simple syrup",
                  "de": "Rum, lime juice, simple syrup",
                  "nl": "Rum, lime juice, simple syrup"
        },
        {
                  "en": "Vodka and strawberry",
                  "es": "Vodka and strawberry",
                  "de": "Vodka and strawberry",
                  "nl": "Vodka and strawberry"
        },
        {
                  "en": "Gin and tonic",
                  "es": "Gin and tonic",
                  "de": "Gin and tonic",
                  "nl": "Gin and tonic"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A classic daiquiri is made with white rum, lime juice, and simple syrup.",
                  "es": "A classic daiquiri is made with white rum, lime juice, and simple syrup.",
                  "de": "A classic daiquiri is made with white rum, lime juice, and simple syrup.",
                  "nl": "A classic daiquiri is made with white rum, lime juice, and simple syrup."
        }
      },
      {
        question: {
                  "en": "What is a Manhattan cocktail?",
                  "es": "What is a Manhattan cocktail?",
                  "de": "What is a Manhattan cocktail?",
                  "nl": "What is a Manhattan cocktail?"
        },
        options: [
        {
                  "en": "Whiskey, sweet vermouth, bitters",
                  "es": "Whiskey, sweet vermouth, bitters",
                  "de": "Whiskey, sweet vermouth, bitters",
                  "nl": "Whiskey, sweet vermouth, bitters"
        },
        {
                  "en": "Vodka and cranberry",
                  "es": "Vodka and cranberry",
                  "de": "Vodka and cranberry",
                  "nl": "Vodka and cranberry"
        },
        {
                  "en": "Gin and dry vermouth",
                  "es": "Gin and dry vermouth",
                  "de": "Gin and dry vermouth",
                  "nl": "Gin and dry vermouth"
        },
        {
                  "en": "Rum and cola",
                  "es": "Rum and cola",
                  "de": "Rum and cola",
                  "nl": "Rum and cola"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A Manhattan is made with whiskey, sweet vermouth, and aromatic bitters.",
                  "es": "A Manhattan is made with whiskey, sweet vermouth, and aromatic bitters.",
                  "de": "A Manhattan is made with whiskey, sweet vermouth, and aromatic bitters.",
                  "nl": "A Manhattan is made with whiskey, sweet vermouth, and aromatic bitters."
        }
      },
      {
        question: {
                  "en": "What garnish is traditional for a martini?",
                  "es": "What garnish is traditional for a martini?",
                  "de": "What garnish is traditional for a martini?",
                  "nl": "What garnish is traditional for a martini?"
        },
        options: [
        {
                  "en": "Orange slice",
                  "es": "Orange slice",
                  "de": "Orange slice",
                  "nl": "Orange slice"
        },
        {
                  "en": "Mint",
                  "es": "Mint",
                  "de": "Mint",
                  "nl": "Mint"
        },
        {
                  "en": "Cherry",
                  "es": "Cherry",
                  "de": "Cherry",
                  "nl": "Cherry"
        },
        {
                  "en": "Olive or lemon twist",
                  "es": "Olive or lemon twist",
                  "de": "Olive or lemon twist",
                  "nl": "Olive or lemon twist"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A classic martini is garnished with either an olive or a lemon twist.",
                  "es": "A classic martini is garnished with either an olive or a lemon twist.",
                  "de": "A classic martini is garnished with either an olive or a lemon twist.",
                  "nl": "A classic martini is garnished with either an olive or a lemon twist."
        }
      },
      {
        question: {
                  "en": "What is muddling in cocktail making?",
                  "es": "What is muddling in cocktail making?",
                  "de": "What is muddling in cocktail making?",
                  "nl": "What is muddling in cocktail making?"
        },
        options: [
        {
                  "en": "Straining liquid",
                  "es": "Straining liquid",
                  "de": "Straining liquid",
                  "nl": "Straining liquid"
        },
        {
                  "en": "Shaking vigorously",
                  "es": "Shaking vigorously",
                  "de": "Shaking vigorously",
                  "nl": "Shaking vigorously"
        },
        {
                  "en": "Mixing with ice",
                  "es": "Mixing with ice",
                  "de": "Mixing with ice",
                  "nl": "Mixing with ice"
        },
        {
                  "en": "Crushing ingredients to release flavors",
                  "es": "Crushing ingredients to release flavors",
                  "de": "Crushing ingredients to release flavors",
                  "nl": "Crushing ingredients to release flavors"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Muddling involves pressing and crushing ingredients like mint or fruit to release their flavors.",
                  "es": "Muddling involves pressing and crushing ingredients like mint or fruit to release their flavors.",
                  "de": "Muddling involves pressing and crushing ingredients like mint or fruit to release their flavors.",
                  "nl": "Muddling involves pressing and crushing ingredients like mint or fruit to release their flavors."
        }
      },
      {
        question: {
                  "en": "What is a piña colada made with?",
                  "es": "What is a piña colada made with?",
                  "de": "What is a piña colada made with?",
                  "nl": "What is a piña colada made with?"
        },
        options: [
        {
                  "en": "Rum, coconut cream, pineapple",
                  "es": "Rum, coconut cream, pineapple",
                  "de": "Rum, coconut cream, pineapple",
                  "nl": "Rum, coconut cream, pineapple"
        },
        {
                  "en": "Gin and tonic",
                  "es": "Gin and tonic",
                  "de": "Gin and tonic",
                  "nl": "Gin and tonic"
        },
        {
                  "en": "Tequila and lime",
                  "es": "Tequila and lime",
                  "de": "Tequila and lime",
                  "nl": "Tequila and lime"
        },
        {
                  "en": "Vodka and orange juice",
                  "es": "Vodka and orange juice",
                  "de": "Vodka and orange juice",
                  "nl": "Vodka and orange juice"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A piña colada is made with rum, coconut cream, and pineapple juice, often blended with ice.",
                  "es": "A piña colada is made with rum, coconut cream, and pineapple juice, often blended with ice.",
                  "de": "A piña colada is made with rum, coconut cream, and pineapple juice, often blended with ice.",
                  "nl": "A piña colada is made with rum, coconut cream, and pineapple juice, often blended with ice."
        }
      },
      {
        question: {
                  "en": "What is the base spirit in an Old Fashioned?",
                  "es": "What is the base spirit in an Old Fashioned?",
                  "de": "What is the base spirit in an Old Fashioned?",
                  "nl": "What is the base spirit in an Old Fashioned?"
        },
        options: [
        {
                  "en": "Whiskey",
                  "es": "Whiskey",
                  "de": "Whiskey",
                  "nl": "Whiskey"
        },
        {
                  "en": "Rum",
                  "es": "Rum",
                  "de": "Rum",
                  "nl": "Rum"
        },
        {
                  "en": "Gin",
                  "es": "Gin",
                  "de": "Gin",
                  "nl": "Gin"
        },
        {
                  "en": "Vodka",
                  "es": "Vodka",
                  "de": "Vodka",
                  "nl": "Vodka"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "An Old Fashioned is made with whiskey, sugar, bitters, and a twist of citrus.",
                  "es": "An Old Fashioned is made with whiskey, sugar, bitters, and a twist of citrus.",
                  "de": "An Old Fashioned is made with whiskey, sugar, bitters, and a twist of citrus.",
                  "nl": "An Old Fashioned is made with whiskey, sugar, bitters, and a twist of citrus."
        }
      },
      {
        question: {
                  "en": "What is a jigger?",
                  "es": "What is a jigger?",
                  "de": "What is a jigger?",
                  "nl": "What is a jigger?"
        },
        options: [
        {
                  "en": "Measuring tool for cocktails",
                  "es": "Measuring tool for cocktails",
                  "de": "Measuring tool for cocktails",
                  "nl": "Measuring tool for cocktails"
        },
        {
                  "en": "Type of cocktail",
                  "es": "Type of cocktail",
                  "de": "Type of cocktail",
                  "nl": "Type of cocktail"
        },
        {
                  "en": "Mixing spoon",
                  "es": "Mixing spoon",
                  "de": "Mixing spoon",
                  "nl": "Mixing spoon"
        },
        {
                  "en": "Ice crusher",
                  "es": "Ice crusher",
                  "de": "Ice crusher",
                  "nl": "Ice crusher"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A jigger is a measuring device used to ensure accurate proportions in cocktail mixing.",
                  "es": "A jigger is a measuring device used to ensure accurate proportions in cocktail mixing.",
                  "de": "A jigger is a measuring device used to ensure accurate proportions in cocktail mixing.",
                  "nl": "A jigger is a measuring device used to ensure accurate proportions in cocktail mixing."
        }
      },
      {
        question: {
                  "en": "What makes a cocktail 'on the rocks'?",
                  "es": "What makes a cocktail 'on the rocks'?",
                  "de": "What makes a cocktail 'on the rocks'?",
                  "nl": "What makes a cocktail 'on the rocks'?"
        },
        options: [
        {
                  "en": "No ice",
                  "es": "No ice",
                  "de": "No ice",
                  "nl": "No ice"
        },
        {
                  "en": "Shaken with ice then strained",
                  "es": "Shaken with ice then strained",
                  "de": "Shaken with ice then strained",
                  "nl": "Shaken with ice then strained"
        },
        {
                  "en": "Served over ice",
                  "es": "Served over ice",
                  "de": "Served over ice",
                  "nl": "Served over ice"
        },
        {
                  "en": "Blended with ice",
                  "es": "Blended with ice",
                  "de": "Blended with ice",
                  "nl": "Blended with ice"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A drink served 'on the rocks' is poured over ice cubes in the glass.",
                  "es": "A drink served 'on the rocks' is poured over ice cubes in the glass.",
                  "de": "A drink served 'on the rocks' is poured over ice cubes in the glass.",
                  "nl": "A drink served 'on the rocks' is poured over ice cubes in the glass."
        }
      },
      {
        question: {
                  "en": "What is a Bloody Mary made with?",
                  "es": "What is a Bloody Mary made with?",
                  "de": "What is a Bloody Mary made with?",
                  "nl": "What is a Bloody Mary made with?"
        },
        options: [
        {
                  "en": "Tequila and orange juice",
                  "es": "Tequila and orange juice",
                  "de": "Tequila and orange juice",
                  "nl": "Tequila and orange juice"
        },
        {
                  "en": "Gin and tonic",
                  "es": "Gin and tonic",
                  "de": "Gin and tonic",
                  "nl": "Gin and tonic"
        },
        {
                  "en": "Vodka and tomato juice",
                  "es": "Vodka and tomato juice",
                  "de": "Vodka and tomato juice",
                  "nl": "Vodka and tomato juice"
        },
        {
                  "en": "Rum and cola",
                  "es": "Rum and cola",
                  "de": "Rum and cola",
                  "nl": "Rum and cola"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A Bloody Mary is made with vodka, tomato juice, and various spices and flavorings.",
                  "es": "A Bloody Mary is made with vodka, tomato juice, and various spices and flavorings.",
                  "de": "A Bloody Mary is made with vodka, tomato juice, and various spices and flavorings.",
                  "nl": "A Bloody Mary is made with vodka, tomato juice, and various spices and flavorings."
        }
      },
      {
        question: {
                  "en": "What is simple syrup?",
                  "es": "What is simple syrup?",
                  "de": "What is simple syrup?",
                  "nl": "What is simple syrup?"
        },
        options: [
        {
                  "en": "Alcohol mixture",
                  "es": "Alcohol mixture",
                  "de": "Alcohol mixture",
                  "nl": "Alcohol mixture"
        },
        {
                  "en": "Lemon juice",
                  "es": "Lemon juice",
                  "de": "Lemon juice",
                  "nl": "Lemon juice"
        },
        {
                  "en": "Fruit syrup",
                  "es": "Fruit syrup",
                  "de": "Fruit syrup",
                  "nl": "Fruit syrup"
        },
        {
                  "en": "Sugar dissolved in water",
                  "es": "Sugar dissolved in water",
                  "de": "Sugar dissolved in water",
                  "nl": "Sugar dissolved in water"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Simple syrup is equal parts sugar and water, heated until sugar dissolves, used to sweeten cocktails.",
                  "es": "Simple syrup is equal parts sugar and water, heated until sugar dissolves, used to sweeten cocktails.",
                  "de": "Simple syrup is equal parts sugar and water, heated until sugar dissolves, used to sweeten cocktails.",
                  "nl": "Simple syrup is equal parts sugar and water, heated until sugar dissolves, used to sweeten cocktails."
        }
      },
      {
        question: {
                  "en": "What is a Tom Collins?",
                  "es": "What is a Tom Collins?",
                  "de": "What is a Tom Collins?",
                  "nl": "What is a Tom Collins?"
        },
        options: [
        {
                  "en": "Vodka and cranberry",
                  "es": "Vodka and cranberry",
                  "de": "Vodka and cranberry",
                  "nl": "Vodka and cranberry"
        },
        {
                  "en": "Whiskey sour",
                  "es": "Whiskey sour",
                  "de": "Whiskey sour",
                  "nl": "Whiskey sour"
        },
        {
                  "en": "Rum and cola",
                  "es": "Rum and cola",
                  "de": "Rum and cola",
                  "nl": "Rum and cola"
        },
        {
                  "en": "Gin, lemon, sugar, soda water",
                  "es": "Gin, lemon, sugar, soda water",
                  "de": "Gin, lemon, sugar, soda water",
                  "nl": "Gin, lemon, sugar, soda water"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A Tom Collins is made with gin, lemon juice, simple syrup, and soda water.",
                  "es": "A Tom Collins is made with gin, lemon juice, simple syrup, and soda water.",
                  "de": "A Tom Collins is made with gin, lemon juice, simple syrup, and soda water.",
                  "nl": "A Tom Collins is made with gin, lemon juice, simple syrup, and soda water."
        }
      },
      {
        question: {
                  "en": "What does 'neat' mean for serving spirits?",
                  "es": "What does 'neat' mean for serving spirits?",
                  "de": "What does 'neat' mean for serving spirits?",
                  "nl": "What does 'neat' mean for serving spirits?"
        },
        options: [
        {
                  "en": "Straight, no ice or mixers",
                  "es": "Straight, no ice or mixers",
                  "de": "Straight, no ice or mixers",
                  "nl": "Straight, no ice or mixers"
        },
        {
                  "en": "Mixed with soda",
                  "es": "Mixed with soda",
                  "de": "Mixed with soda",
                  "nl": "Mixed with soda"
        },
        {
                  "en": "With water",
                  "es": "With water",
                  "de": "With water",
                  "nl": "With water"
        },
        {
                  "en": "Over ice",
                  "es": "Over ice",
                  "de": "Over ice",
                  "nl": "Over ice"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A spirit served 'neat' is poured straight from the bottle with no ice or mixers.",
                  "es": "A spirit served 'neat' is poured straight from the bottle with no ice or mixers.",
                  "de": "A spirit served 'neat' is poured straight from the bottle with no ice or mixers.",
                  "nl": "A spirit served 'neat' is poured straight from the bottle with no ice or mixers."
        }
      },
      {
        question: {
                  "en": "What is a mai tai made with?",
                  "es": "What is a mai tai made with?",
                  "de": "What is a mai tai made with?",
                  "nl": "What is a mai tai made with?"
        },
        options: [
        {
                  "en": "Vodka and pineapple",
                  "es": "Vodka and pineapple",
                  "de": "Vodka and pineapple",
                  "nl": "Vodka and pineapple"
        },
        {
                  "en": "Gin and tonic",
                  "es": "Gin and tonic",
                  "de": "Gin and tonic",
                  "nl": "Gin and tonic"
        },
        {
                  "en": "Rum, lime, orgeat, orange liqueur",
                  "es": "Rum, lime, orgeat, orange liqueur",
                  "de": "Rum, lime, orgeat, orange liqueur",
                  "nl": "Rum, lime, orgeat, orange liqueur"
        },
        {
                  "en": "Tequila and lime",
                  "es": "Tequila and lime",
                  "de": "Tequila and lime",
                  "nl": "Tequila and lime"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A mai tai is made with rum, lime juice, orgeat syrup, and orange liqueur.",
                  "es": "A mai tai is made with rum, lime juice, orgeat syrup, and orange liqueur.",
                  "de": "A mai tai is made with rum, lime juice, orgeat syrup, and orange liqueur.",
                  "nl": "A mai tai is made with rum, lime juice, orgeat syrup, and orange liqueur."
        }
      },
      {
        question: {
                  "en": "What is the difference between shaken and stirred?",
                  "es": "What is the difference between shaken and stirred?",
                  "de": "What is the difference between shaken and stirred?",
                  "nl": "What is the difference between shaken and stirred?"
        },
        options: [
        {
                  "en": "No difference",
                  "es": "No difference",
                  "de": "No difference",
                  "nl": "No difference"
        },
        {
                  "en": "Shaken is more vigorous; stirred is gentle",
                  "es": "Shaken is more vigorous; stirred is gentle",
                  "de": "Shaken is more vigorous; stirred is gentle",
                  "nl": "Shaken is more vigorous; stirred is gentle"
        },
        {
                  "en": "Stirred is faster",
                  "es": "Stirred is faster",
                  "de": "Stirred is faster",
                  "nl": "Stirred is faster"
        },
        {
                  "en": "Shaken uses ice; stirred doesn't",
                  "es": "Shaken uses ice; stirred doesn't",
                  "de": "Shaken uses ice; stirred doesn't",
                  "nl": "Shaken uses ice; stirred doesn't"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Shaken cocktails are vigorously shaken with ice for dilution and aeration; stirred cocktails are gently mixed.",
                  "es": "Shaken cocktails are vigorously shaken with ice for dilution and aeration; stirred cocktails are gently mixed.",
                  "de": "Shaken cocktails are vigorously shaken with ice for dilution and aeration; stirred cocktails are gently mixed.",
                  "nl": "Shaken cocktails are vigorously shaken with ice for dilution and aeration; stirred cocktails are gently mixed."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  }
})();