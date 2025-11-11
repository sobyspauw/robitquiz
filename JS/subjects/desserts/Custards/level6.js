// Custards Quiz - Level 6: International Custard Desserts
(function() {
  const level6 = {
    name: {
      en: "International Custard Desserts",
      es: "Postres Internacionales de Natillas",
      de: "Internationale Pudding-Desserts",
      nl: "Internationale Custard Desserts"
    },
    questions: [
      {
        question: {
          en: "What is the origin of flan and what distinguishes it from other custard desserts?",
          es: "¿Cuál es el origen del flan y qué lo distingue de otros postres de natillas?",
          de: "Was ist der Ursprung von Flan und was unterscheidet ihn von anderen Pudding-Desserts?",
          nl: "Wat is de oorsprong van flan en wat onderscheidt het van andere custard desserts?"
        },
        options: [
          { en: "French origin; distinguished by vanilla flavoring", es: "Origen francés; distinguido por sabor a vainilla", de: "Französischer Ursprung; durch Vanillearoma ausgezeichnet", nl: "Franse oorsprong; onderscheiden door vanille smaak" },
          { en: "Roman origin; distinguished by liquid caramel base and inverted serving", es: "Origen romano; distinguido por base de caramelo líquido y servido invertido", de: "Römischer Ursprung; durch flüssige Karamellbasis und umgekehrtes Servieren ausgezeichnet", nl: "Romeinse oorsprong; onderscheiden door vloeibare karamel basis en omgekeerd serveren" },
          { en: "Spanish origin; distinguished by use of condensed milk", es: "Origen español; distinguido por uso de leche condensada", de: "Spanischer Ursprung; durch Verwendung von Kondensmilch ausgezeichnet", nl: "Spaanse oorsprong; onderscheiden door gebruik van gecondenseerde melk" },
          { en: "Italian origin; distinguished by ricotta cheese addition", es: "Origen italiano; distinguido por adición de queso ricotta", de: "Italienischer Ursprung; durch Ricotta-Käse-Zusatz ausgezeichnet", nl: "Italiaanse oorsprong; onderscheiden door ricotta kaas toevoeging" }
        ],
        correct: 1,
        explanation: {
          en: "Flan has Roman origins and is distinguished by its liquid caramel base that becomes a sauce when the custard is inverted for serving. This creates the characteristic caramel layer on top.",
          es: "El flan tiene orígenes romanos y se distingue por su base de caramelo líquido que se convierte en salsa cuando las natillas se invierten para servir. Esto crea la característica capa de caramelo encima.",
          de: "Flan hat römische Ursprünge und zeichnet sich durch seine flüssige Karamellbasis aus, die zu einer Sauce wird, wenn der Pudding zum Servieren umgekehrt wird. Dies schafft die charakteristische Karamellschicht oben.",
          nl: "Flan heeft Romeinse oorsprong en onderscheidt zich door zijn vloeibare karamel basis die een saus wordt wanneer de custard wordt omgekeerd voor serveren. Dit creëert de karakteristieke karamel laag bovenop."
        }
      },
      {
        question: {
          en: "What is panna cotta and what ingredient distinguishes it from other custards?",
          es: "¿Qué es la panna cotta y qué ingrediente la distingue de otras natillas?",
          de: "Was ist Panna Cotta und welche Zutat unterscheidet sie von anderen Puddings?",
          nl: "Wat is panna cotta en welk ingrediënt onderscheidt het van andere custards?"
        },
        options: [
          { en: "Italian cream dessert; distinguished by gelatin instead of eggs", es: "Postre de nata italiano; distinguido por gelatina en lugar de huevos", de: "Italienisches Sahne-Dessert; durch Gelatine statt Eier ausgezeichnet", nl: "Italiaans room dessert; onderscheiden door gelatine in plaats van eieren" },
          { en: "French custard; distinguished by cornstarch thickening", es: "Natilla francesa; distinguida por espesado con maicena", de: "Französischer Pudding; durch Maisstärke-Verdickung ausgezeichnet", nl: "Franse custard; onderscheiden door maïszetmeel verdikking" },
          { en: "Spanish dessert; distinguished by condensed milk", es: "Postre español; distinguido por leche condensada", de: "Spanisches Dessert; durch Kondensmilch ausgezeichnet", nl: "Spaans dessert; onderscheiden door gecondenseerde melk" },
          { en: "German dessert; distinguished by quark cheese", es: "Postre alemán; distinguido por queso quark", de: "Deutsches Dessert; durch Quark ausgezeichnet", nl: "Duits dessert; onderscheiden door kwark kaas" }
        ],
        correct: 0,
        explanation: {
          en: "Panna cotta is an Italian cream dessert that uses gelatin as a thickening agent instead of eggs. The name literally means 'cooked cream' and creates a smooth, silky texture.",
          es: "La panna cotta es un postre de nata italiano que usa gelatina como agente espesante en lugar de huevos. El nombre literalmente significa 'nata cocida' y crea una textura suave y sedosa.",
          de: "Panna Cotta ist ein italienisches Sahne-Dessert, das Gelatine als Verdickungsmittel anstelle von Eiern verwendet. Der Name bedeutet wörtlich 'gekochte Sahne' und schafft eine glatte, seidige Textur.",
          nl: "Panna cotta is een Italiaans room dessert dat gelatine gebruikt als verdikkingsmiddel in plaats van eieren. De naam betekent letterlijk 'gekookte room' en creëert een gladde, zijdeachtige textuur."
        }
      },
      {
        question: {
          en: "What is kulfi and how does it differ from regular ice cream custards?",
          es: "¿Qué es el kulfi y cómo difiere de las natillas de helado regulares?",
          de: "Was ist Kulfi und wie unterscheidet es sich von normalen Eiscreme-Puddings?",
          nl: "Wat is kulfi en hoe verschilt het van gewone ijs custards?"
        },
        options: [
          { en: "Thai frozen custard; made with coconut milk and no churning", es: "Natilla congelada tailandesa; hecha con leche de coco y sin batir", de: "Thailändischer gefrorener Pudding; mit Kokosmilch und ohne Churning", nl: "Thaise bevroren custard; gemaakt met kokosmelk en zonder karnen" },
          { en: "Indian frozen dessert; made by slow-cooking milk until concentrated, no churning", es: "Postre congelado indio; hecho cocinando leche lentamente hasta concentrar, sin batir", de: "Indisches gefrorenes Dessert; durch langsames Kochen von Milch bis zur Konzentration, ohne Churning", nl: "Indiaas bevroren dessert; gemaakt door melk langzaam te koken tot geconcentreerd, zonder karnen" },
          { en: "Chinese ice cream; distinguished by rice flour thickening", es: "Helado chino; distinguido por espesado con harina de arroz", de: "Chinesisches Eis; durch Reismehl-Verdickung ausgezeichnet", nl: "Chinees ijs; onderscheiden door rijstmeel verdikking" },
          { en: "Japanese dessert; made with green tea and agar", es: "Postre japonés; hecho con té verde y agar", de: "Japanisches Dessert; mit grünem Tee und Agar", nl: "Japans dessert; gemaakt met groene thee en agar" }
        ],
        correct: 1,
        explanation: {
          en: "Kulfi is an Indian frozen dessert made by slowly cooking milk until it concentrates and reduces by about half. Unlike ice cream, it's not churned, creating a denser, more intense flavor.",
          es: "El kulfi es un postre congelado indio hecho cocinando leche lentamente hasta que se concentra y reduce aproximadamente a la mitad. A diferencia del helado, no se bate, creando un sabor más denso e intenso.",
          de: "Kulfi ist ein indisches gefrorenes Dessert, das durch langsames Kochen von Milch hergestellt wird, bis sie sich konzentriert und um etwa die Hälfte reduziert. Im Gegensatz zu Eiscreme wird es nicht geschlagen, was einen dichteren, intensiveren Geschmack schafft.",
          nl: "Kulfi is een Indiaas bevroren dessert gemaakt door melk langzaam te koken tot het concentreert en reduceert tot ongeveer de helft. In tegenstelling tot ijs wordt het niet gekarnd, wat een dichtere, intensere smaak creëert."
        }
      },
      {
        question: {
          en: "What are natillas and how do they differ from other Spanish custard desserts?",
          es: "¿Qué son las natillas y cómo difieren de otros postres de natillas españoles?",
          de: "Was sind Natillas und wie unterscheiden sie sich von anderen spanischen Pudding-Desserts?",
          nl: "Wat zijn natillas en hoe verschillen ze van andere Spaanse custard desserts?"
        },
        options: [
          { en: "Baked custard with caramel; served in ramekins", es: "Natilla horneada con caramelo; servida en moldes individuales", de: "Gebackener Pudding mit Karamell; in Förmchen serviert", nl: "Gebakken custard met karamel; geserveerd in ramequins" },
          { en: "Stirred custard sauce; lighter consistency, flavored with cinnamon and lemon", es: "Salsa de natilla revuelta; consistencia más ligera, con sabor a canela y limón", de: "Gerührte Pudding-Sauce; leichtere Konsistenz, mit Zimt und Zitrone aromatisiert", nl: "Geroerde custard saus; lichtere consistentie, op smaak gebracht met kaneel en citroen" },
          { en: "Frozen custard; served like ice cream", es: "Natilla congelada; servida como helado", de: "Gefrorener Pudding; wie Eiscreme serviert", nl: "Bevroren custard; geserveerd als ijs" },
          { en: "Cheese-based custard; made with fresh goat cheese", es: "Natilla a base de queso; hecha con queso de cabra fresco", de: "Käse-basierter Pudding; mit frischem Ziegenkäse", nl: "Kaas-gebaseerde custard; gemaakt met verse geitenkaas" }
        ],
        correct: 1,
        explanation: {
          en: "Natillas are Spanish stirred custards with a lighter, more pourable consistency than baked custards. They're traditionally flavored with cinnamon and lemon zest, creating a distinctive aromatic profile.",
          es: "Las natillas son natillas españolas revueltas con una consistencia más ligera y vertible que las natillas horneadas. Tradicionalmente se aromatizan con canela y ralladura de limón, creando un perfil aromático distintivo.",
          de: "Natillas sind spanische gerührte Puddings mit einer leichteren, gießbareren Konsistenz als gebackene Puddings. Sie werden traditionell mit Zimt und Zitronenschale aromatisiert, was ein charakteristisches Aromaprofil schafft.",
          nl: "Natillas zijn Spaanse geroerde custards met een lichtere, meer gietbare consistentie dan gebakken custards. Ze worden traditioneel op smaak gebracht met kaneel en citroenschil, wat een onderscheidend aromatisch profiel creëert."
        }
      },
      {
        question: {
          en: "What is leche flan and how does it differ from European flan?",
          es: "¿Qué es el leche flan y cómo difiere del flan europeo?",
          de: "Was ist Leche Flan und wie unterscheidet es sich von europäischem Flan?",
          nl: "Wat is leche flan en hoe verschilt het van Europese flan?"
        },
        options: [
          { en: "Same dessert with different names", es: "Mismo postre con nombres diferentes", de: "Dasselbe Dessert mit verschiedenen Namen", nl: "Hetzelfde dessert met verschillende namen" },
          { en: "Filipino/Spanish version using more egg yolks for richer texture", es: "Versión filipina/española usando más yemas para textura más rica", de: "Philippinische/spanische Version mit mehr Eigelb für reichere Textur", nl: "Filipijnse/Spaanse versie met meer eidooiers voor rijkere textuur" },
          { en: "Uses coconut milk instead of regular milk", es: "Usa leche de coco en lugar de leche regular", de: "Verwendet Kokosmilch anstelle von normaler Milch", nl: "Gebruikt kokosmelk in plaats van gewone melk" },
          { en: "Served hot instead of cold", es: "Servido caliente en lugar de frío", de: "Heiß statt kalt serviert", nl: "Warm geserveerd in plaats van koud" }
        ],
        correct: 1,
        explanation: {
          en: "Leche flan, popular in the Philippines and parts of Spain, typically uses a higher proportion of egg yolks (often 10-12 yolks) compared to European versions, creating an extremely rich, dense, and silky texture.",
          es: "El leche flan, popular en Filipinas y partes de España, típicamente usa una mayor proporción de yemas de huevo (a menudo 10-12 yemas) comparado con versiones europeas, creando una textura extremadamente rica, densa y sedosa.",
          de: "Leche Flan, beliebt auf den Philippinen und in Teilen Spaniens, verwendet typischerweise einen höheren Anteil an Eigelb (oft 10-12 Eigelb) im Vergleich zu europäischen Versionen, was eine extrem reiche, dichte und seidige Textur schafft.",
          nl: "Leche flan, populair in de Filipijnen en delen van Spanje, gebruikt typisch een hogere verhouding eidooiers (vaak 10-12 dooiers) vergeleken met Europese versies, wat een extreem rijke, dichte en zijdeachtige textuur creëert."
        }
      },
      {
        question: {
          en: "What is crème catalane and how does it differ from crème brûlée?",
          es: "¿Qué es la crème catalane y cómo difiere de la crème brûlée?",
          de: "Was ist Crème Catalane und wie unterscheidet sie sich von Crème brûlée?",
          nl: "Wat is crème catalane en hoe verschilt het van crème brûlée?"
        },
        options: [
          { en: "Spanish version; flavored with orange and cinnamon, thickened with cornstarch", es: "Versión española; con sabor a naranja y canela, espesada con maicena", de: "Spanische Version; mit Orange und Zimt aromatisiert, mit Maisstärke verdickt", nl: "Spaanse versie; op smaak gebracht met sinaasappel en kaneel, verdikt met maïszetmeel" },
          { en: "French version; uses only vanilla flavoring", es: "Versión francesa; usa solo sabor a vainilla", de: "Französische Version; verwendet nur Vanillearoma", nl: "Franse versie; gebruikt alleen vanille smaak" },
          { en: "They are identical desserts", es: "Son postres idénticos", de: "Sie sind identische Desserts", nl: "Het zijn identieke desserts" },
          { en: "Catalane is served warm, brûlée is served cold", es: "La catalana se sirve tibia, la brûlée se sirve fría", de: "Catalane wird warm serviert, Brûlée wird kalt serviert", nl: "Catalane wordt warm geserveerd, brûlée wordt koud geserveerd" }
        ],
        correct: 0,
        explanation: {
          en: "Crème catalane is the Spanish (Catalan) version that's flavored with orange zest and cinnamon, and traditionally thickened with cornstarch rather than just eggs like French crème brûlée.",
          es: "La crème catalane es la versión española (catalana) que se aromatiza con ralladura de naranja y canela, y tradicionalmente se espesa con maicena en lugar de solo huevos como la crème brûlée francesa.",
          de: "Crème Catalane ist die spanische (katalanische) Version, die mit Orangenschale und Zimt aromatisiert und traditionell mit Maisstärke anstatt nur mit Eiern wie die französische Crème brûlée verdickt wird.",
          nl: "Crème catalane is de Spaanse (Catalaanse) versie die op smaak wordt gebracht met sinaasappelschil en kaneel, en traditioneel wordt verdikt met maïszetmeel in plaats van alleen eieren zoals Franse crème brûlée."
        }
      },
      {
        question: {
          en: "What is tres leches cake's custard component and what makes it unique?",
          es: "¿Cuál es el componente de natilla del pastel tres leches y qué lo hace único?",
          de: "Was ist die Pudding-Komponente des Tres Leches Kuchens und was macht sie einzigartig?",
          nl: "Wat is het custard component van tres leches cake en wat maakt het uniek?"
        },
        options: [
          { en: "Traditional custard filling between cake layers", es: "Relleno de natilla tradicional entre capas de pastel", de: "Traditionelle Pudding-Füllung zwischen Kuchenschichten", nl: "Traditionele custard vulling tussen cake lagen" },
          { en: "Milk mixture (evaporated, condensed, heavy cream) that soaks into sponge cake", es: "Mezcla de leches (evaporada, condensada, nata) que empapa el bizcocho", de: "Milchmischung (Dosenmilch, Kondensmilch, Sahne) die in Biskuitkuchen einzieht", nl: "Melkmengsel (gecondenseerde, geëvaporeerde, slagroom) dat in spongecake trekt" },
          { en: "Three types of custard layered separately", es: "Tres tipos de natilla en capas separadas", de: "Drei Arten von Pudding separat geschichtet", nl: "Drie soorten custard apart gelaagd" },
          { en: "Custard made with three different eggs types", es: "Natilla hecha con tres tipos diferentes de huevos", de: "Pudding aus drei verschiedenen Eierarten", nl: "Custard gemaakt met drie verschillende eiertypes" }
        ],
        correct: 1,
        explanation: {
          en: "Tres leches cake features a unique 'liquid custard' made from three milks (evaporated milk, condensed milk, and heavy cream) that completely saturates a light sponge cake, creating a moist, custardy texture.",
          es: "El pastel tres leches presenta una 'natilla líquida' única hecha de tres leches (leche evaporada, leche condensada y nata) que satura completamente un bizcocho ligero, creando una textura húmeda y como natilla.",
          de: "Tres Leches Kuchen bietet einen einzigartigen 'flüssigen Pudding' aus drei Milcharten (Dosenmilch, Kondensmilch und Sahne), der einen leichten Biskuitkuchen vollständig durchtränkt und eine feuchte, puddingartige Textur schafft.",
          nl: "Tres leches cake heeft een unieke 'vloeibare custard' gemaakt van drie melksoorten (gecondenseerde melk, geëvaporeerde melk en slagroom) die een lichte spongecake volledig doortrekt, wat een vochtige, custard-achtige textuur creëert."
        }
      },
      {
        question: {
          en: "What is bavarian cream and how does it differ from other custard desserts?",
          es: "¿Qué es la crema bávara y cómo difiere de otros postres de natillas?",
          de: "Was ist Bayerische Creme und wie unterscheidet sie sich von anderen Pudding-Desserts?",
          nl: "Wat is Beierse room en hoe verschilt het van andere custard desserts?"
        },
        options: [
          { en: "German baked custard with beer flavoring", es: "Natilla alemana horneada con sabor a cerveza", de: "Deutscher gebackener Pudding mit Biergeschmack", nl: "Duitse gebakken custard met bier smaak" },
          { en: "Custard base with whipped cream and gelatin, creating a light mousse texture", es: "Base de natilla con nata montada y gelatina, creando textura ligera de mousse", de: "Pudding-Basis mit Schlagsahne und Gelatine, schafft leichte Mousse-Textur", nl: "Custard basis met slagroom en gelatine, creëert lichte mousse textuur" },
          { en: "Custard made with Bavarian cheese", es: "Natilla hecha con queso bávaro", de: "Pudding mit bayerischem Käse", nl: "Custard gemaakt met Beierse kaas" },
          { en: "Frozen custard served in Bavaria", es: "Natilla congelada servida en Baviera", de: "Gefrorener Pudding serviert in Bayern", nl: "Bevroren custard geserveerd in Beieren" }
        ],
        correct: 1,
        explanation: {
          en: "Bavarian cream (bavarois) combines a custard base (crème anglaise) with whipped cream and gelatin, creating a light, airy, mousse-like texture that's set but not baked.",
          es: "La crema bávara (bavarois) combina una base de natilla (crème anglaise) con nata montada y gelatina, creando una textura ligera, aireada, como mousse que está cuajada pero no horneada.",
          de: "Bayerische Creme (Bavarois) kombiniert eine Pudding-Basis (Crème Anglaise) mit Schlagsahne und Gelatine, was eine leichte, luftige, mousse-ähnliche Textur schafft, die fest aber nicht gebacken ist.",
          nl: "Beierse room (bavarois) combineert een custard basis (crème anglaise) met slagroom en gelatine, wat een lichte, luchtige, mousse-achtige textuur creëert die gestold maar niet gebakken is."
        }
      },
      {
        question: {
          en: "What is Portuguese pastéis de nata and what makes them distinctive?",
          es: "¿Qué son los pastéis de nata portugueses y qué los hace distintivos?",
          de: "Was sind portugiesische Pastéis de Nata und was macht sie charakteristisch?",
          nl: "Wat zijn Portugese pastéis de nata en wat maakt ze onderscheidend?"
        },
        options: [
          { en: "Custard tarts with puff pastry, baked at high heat for caramelized spots", es: "Tartas de natilla con masa hojaldre, horneadas a alta temperatura para puntos caramelizados", de: "Pudding-Törtchen mit Blätterteig, bei hoher Hitze gebacken für karamelisierte Stellen", nl: "Custard taartjes met bladerdeeg, gebakken op hoge temperatuur voor gekarameliseerde vlekjes" },
          { en: "Custard-filled donuts from Portugal", es: "Donas rellenas de natilla de Portugal", de: "Mit Pudding gefüllte Donuts aus Portugal", nl: "Met custard gevulde donuts uit Portugal" },
          { en: "Portuguese ice cream with custard base", es: "Helado portugués con base de natilla", de: "Portugiesisches Eis mit Pudding-Basis", nl: "Portugees ijs met custard basis" },
          { en: "Custard soup traditionally served hot", es: "Sopa de natilla tradicionalmente servida caliente", de: "Pudding-Suppe traditionell heiß serviert", nl: "Custard soep traditioneel warm geserveerd" }
        ],
        correct: 0,
        explanation: {
          en: "Pastéis de nata are Portuguese custard tarts with flaky puff pastry shells filled with rich egg custard, baked at very high temperatures (around 250°C) to create characteristic caramelized spots on the surface.",
          es: "Los pastéis de nata son tartas de natilla portuguesas con bases de masa hojaldre rellenas de rica natilla de huevo, horneadas a temperaturas muy altas (alrededor de 250°C) para crear puntos caramelizados característicos en la superficie.",
          de: "Pastéis de Nata sind portugiesische Pudding-Törtchen mit blättrigen Blätterteigschalen, gefüllt mit reichhaltigem Eier-Pudding, bei sehr hohen Temperaturen (um 250°C) gebacken, um charakteristische karamelisierte Flecken auf der Oberfläche zu erzeugen.",
          nl: "Pastéis de nata zijn Portugese custard taartjes met bladerige bladerdeeg schillen gevuld met rijke eier custard, gebakken op zeer hoge temperaturen (rond 250°C) om karakteristieke gekarameliseerde vlekjes op het oppervlak te creëren."
        }
      },
      {
        question: {
          en: "What is kheer and what distinguishes it from other rice-based desserts?",
          es: "¿Qué es el kheer y qué lo distingue de otros postres a base de arroz?",
          de: "Was ist Kheer und was unterscheidet es von anderen Reis-basierten Desserts?",
          nl: "Wat is kheer en wat onderscheidt het van andere rijst-gebaseerde desserts?"
        },
        options: [
          { en: "Thai rice pudding with coconut milk", es: "Pudín de arroz tailandés con leche de coco", de: "Thailändischer Reispudding mit Kokosmilch", nl: "Thaise rijstpudding met kokosmelk" },
          { en: "Indian rice pudding; slow-cooked until creamy, flavored with cardamom and nuts", es: "Pudín de arroz indio; cocido lentamente hasta cremoso, con sabor a cardamomo y nueces", de: "Indischer Reispudding; langsam gekocht bis cremig, mit Kardamom und Nüssen aromatisiert", nl: "Indiase rijstpudding; langzaam gekookt tot romig, op smaak gebracht met kardemom en noten" },
          { en: "Japanese rice dessert with green tea", es: "Postre de arroz japonés con té verde", de: "Japanisches Reisdessert mit grünem Tee", nl: "Japans rijst dessert met groene thee" },
          { en: "Chinese rice porridge served cold", es: "Gachas de arroz chinas servidas frías", de: "Chinesischer Reisbrei kalt serviert", nl: "Chinese rijstpap koud geserveerd" }
        ],
        correct: 1,
        explanation: {
          en: "Kheer is an Indian rice pudding made by slow-cooking rice in milk until it becomes creamy and custard-like. It's typically flavored with cardamom, saffron, and garnished with almonds and pistachios.",
          es: "El kheer es un pudín de arroz indio hecho cocinando arroz lentamente en leche hasta que se vuelve cremoso y como natilla. Típicamente se aromatiza con cardamomo, azafrán y se adorna con almendras y pistachos.",
          de: "Kheer ist ein indischer Reispudding, der durch langsames Kochen von Reis in Milch hergestellt wird, bis er cremig und pudding-ähnlich wird. Er wird typischerweise mit Kardamom, Safran aromatisiert und mit Mandeln und Pistazien garniert.",
          nl: "Kheer is een Indiase rijstpudding gemaakt door rijst langzaam te koken in melk tot het romig en custard-achtig wordt. Het wordt typisch op smaak gebracht met kardemom, saffraan en gegarneerd met amandelen en pistachenoten."
        }
      },
      {
        question: {
          en: "What is trifle and how does custard function in this English dessert?",
          es: "¿Qué es el trifle y cómo funciona la natilla en este postre inglés?",
          de: "Was ist Trifle und wie funktioniert Pudding in diesem englischen Dessert?",
          nl: "Wat is trifle en hoe functioneert custard in dit Engelse dessert?"
        },
        options: [
          { en: "Custard is the only component, flavored with sherry", es: "La natilla es el único componente, con sabor a jerez", de: "Pudding ist die einzige Komponente, mit Sherry aromatisiert", nl: "Custard is het enige component, op smaak gebracht met sherry" },
          { en: "Layered dessert; custard is one layer between cake, fruit, and whipped cream", es: "Postre en capas; la natilla es una capa entre pastel, fruta y nata montada", de: "Geschichtetes Dessert; Pudding ist eine Schicht zwischen Kuchen, Obst und Schlagsahne", nl: "Gelaagd dessert; custard is een laag tussen cake, fruit en slagroom" },
          { en: "Custard is used only as garnish on top", es: "La natilla se usa solo como adorno encima", de: "Pudding wird nur als Garnierung oben verwendet", nl: "Custard wordt alleen als garnering bovenop gebruikt" },
          { en: "Custard is mixed throughout all components", es: "La natilla se mezcla en todos los componentes", de: "Pudding wird durch alle Komponenten gemischt", nl: "Custard wordt door alle componenten gemengd" }
        ],
        correct: 1,
        explanation: {
          en: "Trifle is a layered English dessert where custard serves as one of the distinct layers, typically placed between sponge cake (often soaked with sherry), fruit, and topped with whipped cream.",
          es: "El trifle es un postre inglés en capas donde la natilla sirve como una de las capas distintas, típicamente colocada entre bizcocho (a menudo empapado con jerez), fruta y cubierto con nata montada.",
          de: "Trifle ist ein geschichtetes englisches Dessert, bei dem Pudding als eine der verschiedenen Schichten dient, typischerweise zwischen Biskuitkuchen (oft mit Sherry getränkt), Obst platziert und mit Schlagsahne belegt.",
          nl: "Trifle is een gelaagd Engels dessert waar custard dient als een van de verschillende lagen, typisch geplaatst tussen spongecake (vaak gedrenkt met sherry), fruit en bedekt met slagroom."
        }
      },
      {
        question: {
          en: "What is ube halaya and what makes this Filipino dessert unique?",
          es: "¿Qué es el ube halaya y qué hace único a este postre filipino?",
          de: "Was ist Ube Halaya und was macht dieses philippinische Dessert einzigartig?",
          nl: "Wat is ube halaya en wat maakt dit Filipijnse dessert uniek?"
        },
        options: [
          { en: "Purple yam custard; distinctive purple color and nutty flavor", es: "Natilla de ñame morado; color morado distintivo y sabor a nuez", de: "Lila Yam-Pudding; charakteristische lila Farbe und nussiger Geschmack", nl: "Paarse yam custard; kenmerkende paarse kleur en nootachtige smaak" },
          { en: "Coconut custard with purple food coloring", es: "Natilla de coco con colorante alimentario morado", de: "Kokos-Pudding mit lila Lebensmittelfarbe", nl: "Kokos custard met paarse voedselkleurstof" },
          { en: "Traditional vanilla custard served in purple bowls", es: "Natilla de vainilla tradicional servida en tazones morados", de: "Traditioneller Vanille-Pudding in lila Schüsseln serviert", nl: "Traditionele vanille custard geserveerd in paarse kommen" },
          { en: "Filipino ice cream with custard base", es: "Helado filipino con base de natilla", de: "Philippinisches Eis mit Pudding-Basis", nl: "Filipijns ijs met custard basis" }
        ],
        correct: 0,
        explanation: {
          en: "Ube halaya is a Filipino custard dessert made from purple yam (ube), giving it a distinctive purple color and sweet, nutty flavor. It's thickened with condensed milk and often topped with cheese or latik (coconut curd).",
          es: "El ube halaya es un postre de natilla filipino hecho de ñame morado (ube), dándole un color morado distintivo y sabor dulce a nuez. Se espesa con leche condensada y a menudo se cubre con queso o latik (cuajada de coco).",
          de: "Ube Halaya ist ein philippinisches Pudding-Dessert aus lila Yam (Ube), was ihm eine charakteristische lila Farbe und süßen, nussigen Geschmack verleiht. Es wird mit Kondensmilch verdickt und oft mit Käse oder Latik (Kokosquark) belegt.",
          nl: "Ube halaya is een Filipijns custard dessert gemaakt van paarse yam (ube), wat het een kenmerkende paarse kleur en zoete, nootachtige smaak geeft. Het wordt verdikt met gecondenseerde melk en vaak bedekt met kaas of latik (kokos wrongel)."
        }
      },
      {
        question: {
          en: "What is sabayon and in what culinary contexts is it traditionally used?",
          es: "¿Qué es el sabayon y en qué contextos culinarios se usa tradicionalmente?",
          de: "Was ist Sabayon und in welchen kulinarischen Kontexten wird es traditionell verwendet?",
          nl: "Wat is sabayon en in welke culinaire contexten wordt het traditioneel gebruikt?"
        },
        options: [
          { en: "French frozen dessert served in summer", es: "Postre francés congelado servido en verano", de: "Französisches gefrorenes Dessert im Sommer serviert", nl: "Frans bevroren dessert geserveerd in de zomer" },
          { en: "Warm, foamy custard sauce; used as dessert or sauce for fruits and cakes", es: "Salsa de natilla tibia y espumosa; usada como postre o salsa para frutas y pasteles", de: "Warme, schaumige Pudding-Sauce; als Dessert oder Sauce für Früchte und Kuchen verwendet", nl: "Warme, schuimige custard saus; gebruikt als dessert of saus voor fruit en taarten" },
          { en: "Cold custard filling for eclairs", es: "Relleno de natilla fría para eclairs", de: "Kalte Pudding-Füllung für Eclairs", nl: "Koude custard vulling voor eclairs" },
          { en: "Baked custard tart from Savoy region", es: "Tarta de natilla horneada de la región de Saboya", de: "Gebackene Pudding-Torte aus der Savoyen-Region", nl: "Gebakken custard taart uit de Savoie regio" }
        ],
        correct: 1,
        explanation: {
          en: "Sabayon (French) or zabaglione (Italian) is a warm, foamy custard sauce made by whisking egg yolks, sugar, and wine over heat. It's served as a dessert or as a sauce over fruits, cakes, or other desserts.",
          es: "El sabayon (francés) o zabaglione (italiano) es una salsa de natilla tibia y espumosa hecha batiendo yemas de huevo, azúcar y vino sobre calor. Se sirve como postre o como salsa sobre frutas, pasteles u otros postres.",
          de: "Sabayon (französisch) oder Zabaglione (italienisch) ist eine warme, schaumige Pudding-Sauce, die durch Schlagen von Eigelb, Zucker und Wein über Hitze hergestellt wird. Es wird als Dessert oder als Sauce über Früchten, Kuchen oder anderen Desserts serviert.",
          nl: "Sabayon (Frans) of zabaglione (Italiaans) is een warme, schuimige custard saus gemaakt door eidooiers, suiker en wijn te kloppen boven hitte. Het wordt geserveerd als dessert of als saus over fruit, taarten of andere desserts."
        }
      },
      {
        question: {
          en: "What is dulce de leche and how is it related to custard preparation?",
          es: "¿Qué es el dulce de leche y cómo se relaciona con la preparación de natillas?",
          de: "Was ist Dulce de Leche und wie hängt es mit der Pudding-Zubereitung zusammen?",
          nl: "Wat is dulce de leche en hoe hangt het samen met custard bereiding?"
        },
        options: [
          { en: "Traditional custard dessert from Argentina", es: "Postre de natilla tradicional de Argentina", de: "Traditionelles Pudding-Dessert aus Argentinien", nl: "Traditioneel custard dessert uit Argentinië" },
          { en: "Caramelized milk; used as custard sauce or filling", es: "Leche caramelizada; usada como salsa de natilla o relleno", de: "Karamelisierte Milch; als Pudding-Sauce oder Füllung verwendet", nl: "Gekarameliseerde melk; gebruikt als custard saus of vulling" },
          { en: "Type of cheese used in custards", es: "Tipo de queso usado en natillas", de: "Käsesorte für Puddings verwendet", nl: "Type kaas gebruikt in custards" },
          { en: "Spanish custard made with goat milk", es: "Natilla española hecha con leche de cabra", de: "Spanischer Pudding mit Ziegenmilch", nl: "Spaanse custard gemaakt met geitenmelk" }
        ],
        correct: 1,
        explanation: {
          en: "Dulce de leche is milk slowly cooked with sugar until caramelized and thickened. While not technically a custard, it's often used as a custard-like sauce or filling and shares similar cooking techniques.",
          es: "El dulce de leche es leche cocida lentamente con azúcar hasta caramelizar y espesar. Aunque técnicamente no es una natilla, a menudo se usa como salsa o relleno tipo natilla y comparte técnicas de cocción similares.",
          de: "Dulce de Leche ist Milch, die langsam mit Zucker gekocht wird, bis sie karamelisiert und verdickt. Obwohl es technisch kein Pudding ist, wird es oft als pudding-ähnliche Sauce oder Füllung verwendet und teilt ähnliche Kochtechniken.",
          nl: "Dulce de leche is melk die langzaam wordt gekookt met suiker tot het karameliseert en verdikt. Hoewel het technisch geen custard is, wordt het vaak gebruikt als custard-achtige saus of vulling en deelt het vergelijkbare kooktechnieken."
        }
      },
      {
        question: {
          en: "What is syllabub and how does it represent early English custard evolution?",
          es: "¿Qué es el syllabub y cómo representa la evolución temprana de las natillas inglesas?",
          de: "Was ist Syllabub und wie repräsentiert es die frühe englische Pudding-Evolution?",
          nl: "Wat is syllabub en hoe vertegenwoordigt het de vroege Engelse custard evolutie?"
        },
        options: [
          { en: "Modern custard with British flavoring", es: "Natilla moderna con sabor británico", de: "Moderner Pudding mit britischem Geschmack", nl: "Moderne custard met Britse smaak" },
          { en: "Historical English dessert; wine/sherry mixed with cream, early form of set custard", es: "Postre histórico inglés; vino/jerez mezclado con nata, forma temprana de natilla cuajada", de: "Historisches englisches Dessert; Wein/Sherry mit Sahne gemischt, frühe Form von gesetztem Pudding", nl: "Historisch Engels dessert; wijn/sherry gemengd met room, vroege vorm van gestolde custard" },
          { en: "Type of custard tart from medieval times", es: "Tipo de tarta de natilla de tiempos medievales", de: "Art von Pudding-Torte aus mittelalterlichen Zeiten", nl: "Type custard taart uit middeleeuwse tijden" },
          { en: "Custard sauce for roasted meats", es: "Salsa de natilla para carnes asadas", de: "Pudding-Sauce für Braten", nl: "Custard saus voor geroosterd vlees" }
        ],
        correct: 1,
        explanation: {
          en: "Syllabub is a historical English dessert dating back to the 16th century, made by mixing wine or sherry with cream and sometimes sugar. It represents an early evolution toward set custard desserts.",
          es: "El syllabub es un postre histórico inglés que data del siglo XVI, hecho mezclando vino o jerez con nata y a veces azúcar. Representa una evolución temprana hacia postres de natilla cuajada.",
          de: "Syllabub ist ein historisches englisches Dessert aus dem 16. Jahrhundert, hergestellt durch Mischen von Wein oder Sherry mit Sahne und manchmal Zucker. Es repräsentiert eine frühe Entwicklung hin zu gesetzten Pudding-Desserts.",
          nl: "Syllabub is een historisch Engels dessert uit de 16e eeuw, gemaakt door wijn of sherry te mengen met room en soms suiker. Het vertegenwoordigt een vroege evolutie naar gestolde custard desserts."
        }
      },
      {
        question: {
          en: "What is floating island (île flottante) and how does custard feature in it?",
          es: "¿Qué es la isla flotante (île flottante) y cómo aparece la natilla en ella?",
          de: "Was ist schwimmende Insel (Île Flottante) und wie kommt Pudding darin vor?",
          nl: "Wat is drijvend eiland (île flottante) en hoe komt custard erin voor?"
        },
        options: [
          { en: "Custard island surrounded by fruit sauce", es: "Isla de natilla rodeada de salsa de frutas", de: "Pudding-Insel umgeben von Fruchtsauce", nl: "Custard eiland omringd door fruitsaus" },
          { en: "Poached meringue floating on crème anglaise custard sauce", es: "Merengue escalfado flotando en salsa de natilla crème anglaise", de: "Pochierte Baiser schwimmend auf Crème Anglaise Pudding-Sauce", nl: "Gepocheerde meringue drijvend op crème anglaise custard saus" },
          { en: "Ice cream scoops in custard soup", es: "Bolas de helado en sopa de natilla", de: "Eiskugeln in Pudding-Suppe", nl: "IJsbolletjes in custard soep" },
          { en: "Custard molds shaped like islands", es: "Moldes de natilla con forma de islas", de: "Pudding-Formen in Inselform", nl: "Custard vormen gevormd als eilanden" }
        ],
        correct: 1,
        explanation: {
          en: "Île flottante (floating island) is a classic French dessert featuring poached meringue 'islands' floating on a sea of crème anglaise custard sauce, often topped with caramel sauce.",
          es: "Île flottante (isla flotante) es un postre francés clásico con 'islas' de merengue escalfado flotando en un mar de salsa de natilla crème anglaise, a menudo cubierto con salsa de caramelo.",
          de: "Île Flottante (schwimmende Insel) ist ein klassisches französisches Dessert mit pochierten Baiser-'Inseln', die auf einem Meer von Crème Anglaise Pudding-Sauce schwimmen, oft mit Karamellsauce belegt.",
          nl: "Île flottante (drijvend eiland) is een klassiek Frans dessert met gepocheerde meringue 'eilanden' drijvend op een zee van crème anglaise custard saus, vaak bedekt met karamelsaus."
        }
      },
      {
        question: {
          en: "What is flan parisien and how does it differ from other French custard desserts?",
          es: "¿Qué es el flan parisien y cómo difiere de otros postres franceses de natillas?",
          de: "Was ist Flan Parisien und wie unterscheidet er sich von anderen französischen Pudding-Desserts?",
          nl: "Wat is flan parisien en hoe verschilt het van andere Franse custard desserts?"
        },
        options: [
          { en: "Caramel custard tart with pastry crust", es: "Tarta de natilla con caramelo y base de masa", de: "Karamell-Pudding-Torte mit Teigkruste", nl: "Karamel custard taart met deegbodem" },
          { en: "Vanilla custard tart with pastry crust, no caramel", es: "Tarta de natilla de vainilla con base de masa, sin caramelo", de: "Vanille-Pudding-Torte mit Teigkruste, ohne Karamell", nl: "Vanille custard taart met deegbodem, geen karamel" },
          { en: "Individual custard molds from Paris", es: "Moldes individuales de natilla de París", de: "Individuelle Pudding-Formen aus Paris", nl: "Individuele custard vormen uit Parijs" },
          { en: "Custard soup served in Parisian restaurants", es: "Sopa de natilla servida en restaurantes parisinos", de: "Pudding-Suppe in Pariser Restaurants serviert", nl: "Custard soep geserveerd in Parijse restaurants" }
        ],
        correct: 1,
        explanation: {
          en: "Flan parisien is a French vanilla custard tart baked in a pastry crust, distinguished from Spanish flan by having no caramel and being baked in a tart shell rather than individual molds.",
          es: "El flan parisien es una tarta francesa de natilla de vainilla horneada en una corteza de masa, distinguida del flan español por no tener caramelo y ser horneada en una base de tarta en lugar de moldes individuales.",
          de: "Flan Parisien ist eine französische Vanille-Pudding-Torte, die in einer Teigkruste gebacken wird, unterscheidet sich vom spanischen Flan dadurch, dass er kein Karamell hat und in einer Tortenform statt in einzelnen Formen gebacken wird.",
          nl: "Flan parisien is een Franse vanille custard taart gebakken in een deegkorst, onderscheiden van Spaanse flan door geen karamel te hebben en gebakken te worden in een taartvorm in plaats van individuele vormen."
        }
      },
      {
        question: {
          en: "What is budino and how does it represent Italian custard tradition?",
          es: "¿Qué es el budino y cómo representa la tradición italiana de natillas?",
          de: "Was ist Budino und wie repräsentiert es die italienische Pudding-Tradition?",
          nl: "Wat is budino en hoe vertegenwoordigt het de Italiaanse custard traditie?"
        },
        options: [
          { en: "Italian bread pudding with custard sauce", es: "Pudín de pan italiano con salsa de natilla", de: "Italienischer Brotpudding mit Pudding-Sauce", nl: "Italiaanse broodpudding met custard saus" },
          { en: "Steamed or baked Italian pudding, can be sweet or savory", es: "Pudín italiano al vapor o horneado, puede ser dulce o salado", de: "Gedämpfter oder gebackener italienischer Pudding, kann süß oder herzhaft sein", nl: "Gestoomde of gebakken Italiaanse pudding, kan zoet of hartig zijn" },
          { en: "Italian gelato with custard base", es: "Gelato italiano con base de natilla", de: "Italienisches Gelato mit Pudding-Basis", nl: "Italiaans gelato met custard basis" },
          { en: "Italian custard served only at Christmas", es: "Natilla italiana servida solo en Navidad", de: "Italienischer Pudding nur zu Weihnachten serviert", nl: "Italiaanse custard alleen geserveerd met Kerstmis" }
        ],
        correct: 1,
        explanation: {
          en: "Budino is the Italian term for pudding that can refer to both sweet and savory steamed or baked custard-like dishes. Sweet versions often feature chocolate, vanilla, or fruit flavors.",
          es: "Budino es el término italiano para pudín que puede referirse tanto a platos dulces como salados al vapor o horneados tipo natilla. Las versiones dulces a menudo presentan sabores de chocolate, vainilla o frutas.",
          de: "Budino ist der italienische Begriff für Pudding, der sich sowohl auf süße als auch herzhafte gedämpfte oder gebackene pudding-ähnliche Gerichte beziehen kann. Süße Versionen haben oft Schokoladen-, Vanille- oder Fruchtaromen.",
          nl: "Budino is de Italiaanse term voor pudding die kan verwijzen naar zowel zoete als hartige gestoomde of gebakken custard-achtige gerechten. Zoete versies hebben vaak chocolade, vanille of fruit smaken."
        }
      },
      {
        question: {
          en: "What is advocaat and how does it relate to custard preparation techniques?",
          es: "¿Qué es el advocaat y cómo se relaciona con las técnicas de preparación de natillas?",
          de: "Was ist Advocaat und wie hängt es mit Pudding-Zubereitungstechniken zusammen?",
          nl: "Wat is advocaat en hoe hangt het samen met custard bereidingstechnieken?"
        },
        options: [
          { en: "Dutch custard tart with almonds", es: "Tarta de natilla holandesa con almendras", de: "Niederländische Pudding-Torte mit Mandeln", nl: "Nederlandse custard taart met amandelen" },
          { en: "Dutch liqueur; thick custard-like mixture of eggs, sugar, and brandy", es: "Licor holandés; mezcla espesa tipo natilla de huevos, azúcar y brandy", de: "Niederländischer Likör; dicke pudding-ähnliche Mischung aus Eiern, Zucker und Brandy", nl: "Nederlandse likeur; dikke custard-achtige mengsel van eieren, suiker en brandy" },
          { en: "Dutch ice cream with custard base", es: "Helado holandés con base de natilla", de: "Niederländisches Eis mit Pudding-Basis", nl: "Nederlands ijs met custard basis" },
          { en: "Dutch pancake with custard filling", es: "Panqueque holandés con relleno de natilla", de: "Niederländischer Pfannkuchen mit Pudding-Füllung", nl: "Nederlandse pannenkoek met custard vulling" }
        ],
        correct: 1,
        explanation: {
          en: "Advocaat is a Dutch liqueur with a thick, custard-like consistency made from eggs, sugar, and brandy. It uses similar emulsification techniques as custard but results in an alcoholic beverage rather than a dessert.",
          es: "El advocaat es un licor holandés con una consistencia espesa tipo natilla hecho de huevos, azúcar y brandy. Usa técnicas de emulsificación similares a las natillas pero resulta en una bebida alcohólica en lugar de un postre.",
          de: "Advocaat ist ein niederländischer Likör mit einer dicken, pudding-ähnlichen Konsistenz aus Eiern, Zucker und Brandy. Er verwendet ähnliche Emulgiertechniken wie Pudding, resultiert aber in einem alkoholischen Getränk statt einem Dessert.",
          nl: "Advocaat is een Nederlandse likeur met een dikke, custard-achtige consistentie gemaakt van eieren, suiker en brandy. Het gebruikt vergelijkbare emulgatietechnieken als custard maar resulteert in een alcoholische drank in plaats van een dessert."
        }
      },
      {
        question: {
          en: "What is the traditional topping for Portuguese pastéis de nata?",
          es: "¿Cuál es la cobertura tradicional para los pastéis de nata portugueses?",
          de: "Was ist der traditionelle Belag für portugiesische Pastéis de Nata?",
          nl: "Wat is de traditionele topping voor Portugese pastéis de nata?"
        },
        options: [
          { en: "Caramelized sugar and cinnamon", es: "Azúcar caramelizado y canela", de: "Karamellisierter Zucker und Zimt", nl: "Gekarameliseerde suiker en kaneel" },
          { en: "Fresh fruit", es: "Fruta fresca", de: "Frische Früchte", nl: "Vers fruit" },
          { en: "Whipped cream only", es: "Solo nata montada", de: "Nur Schlagsahne", nl: "Alleen slagroom" },
          { en: "Chocolate shavings", es: "Virutas de chocolate", de: "Schokoladenspäne", nl: "Chocoladeschaafsel" }
        ],
        correct: 0,
        explanation: {
          en: "Traditional pastéis de nata are topped with caramelized sugar that creates characteristic dark spots and a sprinkle of cinnamon, giving them their distinctive appearance and flavor.",
          es: "Los pastéis de nata tradicionales se cubren con azúcar caramelizado que crea manchas oscuras características y un toque de canela, dándoles su apariencia y sabor distintivos.",
          de: "Traditionelle Pastéis de Nata werden mit karamellisiertem Zucker belegt, der charakteristische dunkle Flecken erzeugt, und einer Prise Zimt, was ihnen ihr unverwechselbares Aussehen und Geschmack verleiht.",
          nl: "Traditionele pastéis de nata worden bedekt met gekarameliseerde suiker die karakteristieke donkere vlekken creëert en een snufje kaneel, wat hen hun onderscheidende uiterlijk en smaak geeft."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level6;
  } else {
    window.custardsLevel6 = level6;
  }
})();