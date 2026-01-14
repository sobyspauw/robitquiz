// Rice Dishes Quiz - Level 1
(function() {
  const level1 = {
    name: {
      en: "Rice  Dishes Level 1",
      es: "Rice  Dishes Nivel 1",
      de: "Rice  Dishes Stufe 1",
      nl: "Rice  Dishes Level 1"
    },
    questions: [
      {
        question: {
          en: "What is onigiri?",
          es: "¿Qué es el onigiri?",
          de: "Was ist Onigiri?",
          nl: "Wat is onigiri?"
        },
        options: [
          { en: "Japanese rice ball", es: "Bola de arroz japonesa", de: "Japanischer Reisball", nl: "Japanse rijstbal" },
          { en: "Korean rice cake", es: "Pastel de arroz coreano", de: "Koreanischer Reiskuchen", nl: "Koreaanse rijstkoek" },
          { en: "Thai rice noodle", es: "Fideo de arroz tailandés", de: "Thailändische Reisnudel", nl: "Thaise rijstnoedel" },
          { en: "Chinese rice dumpling", es: "Empanadilla de arroz china", de: "Chinesischer Reis-Knödel", nl: "Chinese rijst dumpling" }
        ],
        correct: 0,
        explanation: {
          en: "Onigiri is a Japanese rice ball, typically formed into triangular or cylindrical shapes and often wrapped in nori (seaweed). It's a popular portable snack in Japan.",
          es: "El onigiri es una bola de arroz japonesa, típicamente formada en formas triangulares o cilíndricas y a menudo envuelta en nori (alga marina). Es un aperitivo portátil popular en Japón.",
          de: "Onigiri ist ein japanischer Reisball, der typischerweise in dreieckige oder zylindrische Formen geformt und oft in Nori (Seetang) eingewickelt wird. Es ist ein beliebter tragbarer Snack in Japan.",
          nl: "Onigiri is een Japanse rijstbal, doorgaans gevormd in driehoekige of cilindrische vormen en vaak gewikkeld in nori (zeewier). Het is een populaire draagbare snack in Japan."
        }
      },
      {
        question: {
          en: "Which Spanish rice dish is traditionally cooked in a wide, shallow pan?",
          es: "¿Qué plato español de arroz se cocina tradicionalmente en una sartén ancha y poco profunda?",
          de: "Welches spanische Reisgericht wird traditionell in einer breiten, flachen Pfanne gekocht?",
          nl: "Welk Spaans rijstgerecht wordt traditioneel gekookt in een brede, ondiepe pan?"
        },
        options: [
          { en: "Risotto", es: "Risotto", de: "Risotto", nl: "Risotto" },
          { en: "Paella", es: "Paella", de: "Paella", nl: "Paella" },
          { en: "Pilaf", es: "Pilaf", de: "Pilaf", nl: "Pilaf" },
          { en: "Jambalaya", es: "Jambalaya", de: "Jambalaya", nl: "Jambalaya" }
        ],
        correct: 1,
        explanation: {
          en: "Paella is a traditional Spanish rice dish cooked in a paellera, a wide, shallow pan that allows the rice to form a thin layer for even cooking.",
          es: "La paella es un plato tradicional español de arroz cocinado en una paellera, una sartén ancha y poco profunda que permite que el arroz forme una capa fina para una cocción uniforme.",
          de: "Paella ist ein traditionelles spanisches Reisgericht, das in einer Paellera gekocht wird, einer breiten, flachen Pfanne, die es dem Reis ermöglicht, eine dünne Schicht für gleichmäßiges Garen zu bilden.",
          nl: "Paella is een traditioneel Spaans rijstgerecht dat wordt gekookt in een paellera, een brede, ondiepe pan waardoor de rijst een dunne laag kan vormen voor gelijkmatig koken."
        }
      },
      {
        question: {
          en: "What is the ideal water-to-rice ratio for cooking basic white rice?",
          es: "¿Cuál es la proporción ideal de agua a arroz para cocinar arroz blanco básico?",
          de: "Wie ist das ideale Wasser-zu-Reis-Verhältnis beim Kochen von weißem Reis?",
          nl: "Wat is de ideale water-rijst verhouding voor het koken van gewone witte rijst?"
        },
        options: [
          { en: "1:1", es: "1:1", de: "1:1", nl: "1:1" },
          { en: "2:1", es: "2:1", de: "2:1", nl: "2:1" },
          { en: "3:1", es: "3:1", de: "3:1", nl: "3:1" },
          { en: "1:2", es: "1:2", de: "1:2", nl: "1:2" }
        ],
        correct: 1,
        explanation: {
          en: "The standard ratio for cooking white rice is 2:1 (two cups of water to one cup of rice), which ensures proper absorption and texture.",
          es: "La proporción estándar para cocinar arroz blanco es 2:1 (dos tazas de agua por una taza de arroz), lo que asegura una absorción y textura adecuadas.",
          de: "Das Standardverhältnis für das Kochen von weißem Reis ist 2:1 (zwei Tassen Wasser zu einer Tasse Reis), was eine ordnungsgemäße Absorption und Textur gewährleistet.",
          nl: "De standaardverhouding voor het koken van witte rijst is 2:1 (twee kopjes water op één kopje rijst), wat zorgt voor goede absorptie en textuur."
        }
      },
      {
        question: {
          en: "Which Asian rice dish is known for being stir-fried with vegetables and often includes egg?",
          es: "¿Qué plato asiático de arroz se conoce por ser salteado con verduras y a menudo incluye huevo?",
          de: "Welches asiatische Reisgericht ist dafür bekannt, mit Gemüse gebraten zu werden und oft Ei zu enthalten?",
          nl: "Welk Aziatisch rijstgerecht staat bekend om het roerbakken met groenten en bevat vaak ei?"
        },
        options: [
          { en: "Sushi", es: "Sushi", de: "Sushi", nl: "Sushi" },
          { en: "Fried rice", es: "Arroz frito", de: "Gebratener Reis", nl: "Gebakken rijst" },
          { en: "Rice pudding", es: "Arroz con leche", de: "Milchreis", nl: "Rijstpudding" },
          { en: "Congee", es: "Congee", de: "Congee", nl: "Congee" }
        ],
        correct: 1,
        explanation: {
          en: "Fried rice is a popular Asian dish made by stir-frying cooked rice with vegetables, proteins, and often scrambled eggs.",
          es: "El arroz frito es un plato asiático popular hecho salteando arroz cocido con verduras, proteínas y a menudo huevos revueltos.",
          de: "Gebratener Reis ist ein beliebtes asiatisches Gericht, das durch das Braten von gekochtem Reis mit Gemüse, Proteinen und oft Rührei zubereitet wird.",
          nl: "Gebakken rijst is een populair Aziatisch gerecht gemaakt door gekookte rijst te roerbakken met groenten, eiwitten en vaak roerei."
        }
      },
      {
        question: {
          en: "What is the main ingredient that gives saffron rice its distinctive yellow color?",
          es: "¿Cuál es el ingrediente principal que le da al arroz con azafrán su distintivo color amarillo?",
          de: "Was ist die Hauptzutat, die Safranreis seine charakteristische gelbe Farbe verleiht?",
          nl: "Wat is het hoofdingrediënt dat saffraan rijst zijn kenmerkende gele kleur geeft?"
        },
        options: [
          { en: "Turmeric", es: "Cúrcuma", de: "Kurkuma", nl: "Kurkuma" },
          { en: "Saffron", es: "Azafrán", de: "Safran", nl: "Saffraan" },
          { en: "Curry powder", es: "Polvo de curry", de: "Currypulver", nl: "Kerrie poeder" },
          { en: "Paprika", es: "Pimentón", de: "Paprika", nl: "Paprika" }
        ],
        correct: 1,
        explanation: {
          en: "Saffron, derived from the Crocus flower, is the most expensive spice in the world and gives rice its distinctive golden-yellow color and unique flavor.",
          es: "El azafrán, derivado de la flor de azafrán, es la especia más cara del mundo y le da al arroz su distintivo color amarillo dorado y sabor único.",
          de: "Safran, gewonnen aus der Krokusblüte, ist das teuerste Gewürz der Welt und verleiht dem Reis seine charakteristische goldgelbe Farbe und den einzigartigen Geschmack.",
          nl: "Saffraan, afgeleid van de krokusbloem, is de duurste specerij ter wereld en geeft rijst zijn kenmerkende goudgele kleur en unieke smaak."
        }
      },
      {
        question: {
          en: "Which cooking method involves gradually adding warm stock to rice while stirring constantly?",
          es: "¿Qué método de cocción implica agregar gradualmente caldo caliente al arroz mientras se remueve constantemente?",
          de: "Welche Kochmethode beinhaltet das schrittweise Hinzufügen von warmer Brühe zu Reis unter ständigem Rühren?",
          nl: "Welke kookmethode houdt in dat je geleidelijk warme bouillon aan rijst toevoegt terwijl je constant roert?"
        },
        options: [
          { en: "Boiling", es: "Hervir", de: "Kochen", nl: "Koken" },
          { en: "Steaming", es: "Cocinar al vapor", de: "Dämpfen", nl: "Stomen" },
          { en: "Risotto method", es: "Método de risotto", de: "Risotto-Methode", nl: "Risotto methode" },
          { en: "Absorption method", es: "Método de absorción", de: "Absorptionsmethode", nl: "Absorptie methode" }
        ],
        correct: 2,
        explanation: {
          en: "The risotto method involves gradually adding warm stock to rice while stirring constantly, creating a creamy texture as the starch is released.",
          es: "El método de risotto implica agregar gradualmente caldo caliente al arroz mientras se remueve constantemente, creando una textura cremosa a medida que se libera el almidón.",
          de: "Die Risotto-Methode beinhaltet das schrittweise Hinzufügen von warmer Brühe zu Reis unter ständigem Rühren, wodurch eine cremige Textur entsteht, wenn die Stärke freigesetzt wird.",
          nl: "De risotto methode houdt in dat je geleidelijk warme bouillon aan rijst toevoegt terwijl je constant roert, waardoor een romige textuur ontstaat doordat het zetmeel vrijkomt."
        }
      },
      {
        question: {
          en: "What type of rice is traditionally used for making sushi?",
          es: "¿Qué tipo de arroz se utiliza tradicionalmente para hacer sushi?",
          de: "Welche Reisart wird traditionell für die Herstellung von Sushi verwendet?",
          nl: "Welk type rijst wordt traditioneel gebruikt voor het maken van sushi?"
        },
        options: [
          { en: "Long-grain rice", es: "Arroz de grano largo", de: "Langkornreis", nl: "Langkorrelige rijst" },
          { en: "Short-grain rice", es: "Arroz de grano corto", de: "Rundkornreis", nl: "Kortkorrelige rijst" },
          { en: "Wild rice", es: "Arroz salvaje", de: "Wildreis", nl: "Wilde rijst" },
          { en: "Brown rice", es: "Arroz integral", de: "Vollkornreis", nl: "Bruine rijst" }
        ],
        correct: 1,
        explanation: {
          en: "Short-grain rice is used for sushi because it becomes sticky when cooked, allowing it to hold together well when shaped and seasoned with rice vinegar.",
          es: "El arroz de grano corto se usa para sushi porque se vuelve pegajoso cuando se cocina, permitiendo que se mantenga unido bien cuando se forma y se sazona con vinagre de arroz.",
          de: "Rundkornreis wird für Sushi verwendet, weil er beim Kochen klebrig wird und sich gut zusammenhält, wenn er geformt und mit Reisessig gewürzt wird.",
          nl: "Kortkorrelige rijst wordt gebruikt voor sushi omdat het plakkerig wordt als het gekookt is, waardoor het goed bij elkaar blijft als het gevormd en gekruid wordt met rijstazijn."
        }
      },
      {
        question: {
          en: "In which country did rice cultivation first begin?",
          es: "¿En qué país comenzó por primera vez el cultivo de arroz?",
          de: "In welchem Land begann der Reisanbau zuerst?",
          nl: "In welk land begon de rijstteelt voor het eerst?"
        },
        options: [
          { en: "India", es: "India", de: "Indien", nl: "India" },
          { en: "Thailand", es: "Tailandia", de: "Thailand", nl: "Thailand" },
          { en: "China", es: "China", de: "China", nl: "China" },
          { en: "Japan", es: "Japón", de: "Japan", nl: "Japan" }
        ],
        correct: 2,
        explanation: {
          en: "Rice cultivation began in China around 9,000 years ago in the Yangtze River valley, making it one of humanity's oldest agricultural practices.",
          es: "El cultivo de arroz comenzó en China hace aproximadamente 9,000 años en el valle del río Yangtze, convirtiéndolo en una de las prácticas agrícolas más antiguas de la humanidad.",
          de: "Der Reisanbau begann vor etwa 9.000 Jahren in China im Jangtse-Tal und ist damit eine der ältesten landwirtschaftlichen Praktiken der Menschheit.",
          nl: "Rijstteelt begon in China ongeveer 9.000 jaar geleden in de Yangtze-vallei, waardoor het een van de oudste landbouwpraktijken van de mensheid is."
        }
      },
      {
        question: {
          en: "What is the difference between brown and white rice?",
          es: "¿Cuál es la diferencia entre el arroz integral y el arroz blanco?",
          de: "Was ist der Unterschied zwischen braunem und weißem Reis?",
          nl: "Wat is het verschil tussen bruine en witte rijst?"
        },
        options: [
          { en: "Different varieties", es: "Diferentes variedades", de: "Verschiedene Sorten", nl: "Verschillende variëteiten" },
          { en: "Processing level", es: "Nivel de procesamiento", de: "Verarbeitungsgrad", nl: "Verwerkingsniveau" },
          { en: "Growing conditions", es: "Condiciones de cultivo", de: "Anbaubedingungen", nl: "Groeiomstandigheden" },
          { en: "Cooking method", es: "Método de cocción", de: "Kochmethode", nl: "Kookmethode" }
        ],
        correct: 1,
        explanation: {
          en: "Brown rice retains its bran and germ layers, while white rice has these removed during processing, making brown rice more nutritious but with a longer cooking time.",
          es: "El arroz integral conserva sus capas de salvado y germen, mientras que el arroz blanco las tiene removidas durante el procesamiento, haciendo que el arroz integral sea más nutritivo pero con un tiempo de cocción más largo.",
          de: "Brauner Reis behält seine Kleie- und Keimschichten, während weißer Reis diese während der Verarbeitung entfernt hat, wodurch brauner Reis nahrhafter ist, aber eine längere Kochzeit hat.",
          nl: "Bruine rijst behoudt zijn zemelen en kiemlagen, terwijl witte rijst deze tijdens de verwerking heeft laten verwijderen, waardoor bruine rijst voedzamer is maar een langere kooktijd heeft."
        }
      },
      {
        question: {
          en: "Which Indian rice dish is known for its layered preparation with meat and spices?",
          es: "¿Qué plato indio de arroz es conocido por su preparación en capas con carne y especias?",
          de: "Welches indische Reisgericht ist für seine schichtweise Zubereitung mit Fleisch und Gewürzen bekannt?",
          nl: "Welk Indiaas rijstgerecht staat bekend om zijn gelaagde bereiding met vlees en kruiden?"
        },
        options: [
          { en: "Pulao", es: "Pulao", de: "Pulao", nl: "Pulao" },
          { en: "Biryani", es: "Biryani", de: "Biryani", nl: "Biryani" },
          { en: "Kheer", es: "Kheer", de: "Kheer", nl: "Kheer" },
          { en: "Idli", es: "Idli", de: "Idli", nl: "Idli" }
        ],
        correct: 1,
        explanation: {
          en: "Biryani is a famous Indian rice dish prepared by layering partially cooked rice with marinated meat, vegetables, and aromatic spices, then slow-cooked together.",
          es: "El biryani es un famoso plato indio de arroz preparado colocando en capas arroz parcialmente cocido con carne marinada, verduras y especias aromáticas, luego cocido lentamente junto.",
          de: "Biryani ist ein berühmtes indisches Reisgericht, das durch Schichten von teilweise gekochtem Reis mit mariniertem Fleisch, Gemüse und aromatischen Gewürzen zubereitet und dann langsam zusammen gekocht wird.",
          nl: "Biryani is een beroemd Indiaas rijstgerecht bereid door het leggen van lagen van gedeeltelijk gekookte rijst met gemarineerd vlees, groenten en aromatische kruiden, vervolgens langzaam samen gekookt."
        }
      },
      {
        question: {
          en: "What is the typical cooking time for white rice using the absorption method?",
          es: "¿Cuál es el tiempo de cocción típico para el arroz blanco usando el método de absorción?",
          de: "Wie ist die typische Kochzeit für weißen Reis mit der Absorptionsmethode?",
          nl: "Wat is de typische kooktijd voor witte rijst met de absorptiemethode?"
        },
        options: [
          { en: "10-12 min", es: "10-12 minutos", de: "10-12 Minuten", nl: "10-12 minuten" },
          { en: "18-20 min", es: "18-20 minutos", de: "18-20 Minuten", nl: "18-20 minuten" },
          { en: "25-30 min", es: "25-30 minutos", de: "25-30 Minuten", nl: "25-30 minuten" },
          { en: "35-40 min", es: "35-40 minutos", de: "35-40 Minuten", nl: "35-40 minuten" }
        ],
        correct: 1,
        explanation: {
          en: "White rice typically takes 18-20 minutes to cook using the absorption method, where rice absorbs all the water during cooking.",
          es: "El arroz blanco típicamente toma 18-20 minutos para cocinar usando el método de absorción, donde el arroz absorbe toda el agua durante la cocción.",
          de: "Weißer Reis benötigt normalerweise 18-20 Minuten zum Kochen mit der Absorptionsmethode, bei der der Reis das gesamte Wasser während des Kochens aufnimmt.",
          nl: "Witte rijst heeft gewoonlijk 18-20 minuten nodig om te koken met de absorptiemethode, waarbij rijst al het water tijdens het koken absorbeert."
        }
      },
      {
        question: {
          en: "Which Middle Eastern rice dish is often cooked with vermicelli noodles?",
          es: "¿Qué plato de arroz del Medio Oriente se cocina a menudo con fideos vermicelli?",
          de: "Welches nahöstliche Reisgericht wird oft mit Fadennudeln gekocht?",
          nl: "Welk Midden-Oosters rijstgerecht wordt vaak gekookt met vermicelli noedels?"
        },
        options: [
          { en: "Kabsa", es: "Kabsa", de: "Kabsa", nl: "Kabsa" },
          { en: "Pilaf", es: "Pilaf", de: "Pilaf", nl: "Pilaf" },
          { en: "Mansaf", es: "Mansaf", de: "Mansaf", nl: "Mansaf" },
          { en: "Mujadara", es: "Mujadara", de: "Mujadara", nl: "Mujadara" }
        ],
        correct: 1,
        explanation: {
          en: "Pilaf is a Middle Eastern rice dish often prepared with broken vermicelli noodles that are toasted before adding rice and liquid for extra flavor and texture.",
          es: "El pilaf es un plato de arroz del Medio Oriente a menudo preparado con fideos vermicelli rotos que se tuestan antes de agregar arroz y líquido para sabor y textura extra.",
          de: "Pilaf ist ein nahöstliches Reisgericht, das oft mit gebrochenen Fadennudeln zubereitet wird, die vor dem Hinzufügen von Reis und Flüssigkeit geröstet werden, um zusätzlichen Geschmack und Textur zu erhalten.",
          nl: "Pilaf is een Midden-Oosters rijstgerecht dat vaak wordt bereid met gebroken vermicelli noedels die worden geroosterd voordat rijst en vloeistof worden toegevoegd voor extra smaak en textuur."
        }
      },
      {
        question: {
          en: "What should you do to rice before cooking to remove excess starch?",
          es: "¿Qué debes hacer con el arroz antes de cocinar para eliminar el exceso de almidón?",
          de: "Was sollten Sie mit Reis vor dem Kochen tun, um überschüssige Stärke zu entfernen?",
          nl: "Wat moet je met rijst doen voor het koken om overtollig zetmeel te verwijderen?"
        },
        options: [
          { en: "Soak it", es: "Remojarlo", de: "Einweichen", nl: "Weken" },
          { en: "Rinse it", es: "Enjuagarlo", de: "Spülen", nl: "Spoelen" },
          { en: "Toast it", es: "Tostarlo", de: "Rösten", nl: "Roosteren" },
          { en: "Freeze it", es: "Congelarlo", de: "Einfrieren", nl: "Invriezen" }
        ],
        correct: 1,
        explanation: {
          en: "Rinsing rice before cooking removes excess surface starch, preventing the rice from becoming too sticky and ensuring separate, fluffy grains.",
          es: "Enjuagar el arroz antes de cocinar elimina el exceso de almidón de la superficie, evitando que el arroz se vuelva demasiado pegajoso y asegurando granos separados y esponjosos.",
          de: "Das Spülen von Reis vor dem Kochen entfernt überschüssige Oberflächenstärke und verhindert, dass der Reis zu klebrig wird, und sorgt für getrennte, fluffige Körner.",
          nl: "Het spoelen van rijst voor het koken verwijdert overtollig oppervlaktezetmeel, waardoor wordt voorkomen dat de rijst te plakkerig wordt en zorgt voor gescheiden, luchtige korrels."
        }
      },
      {
        question: {
          en: "Which type of rice takes the longest time to cook?",
          es: "¿Qué tipo de arroz toma más tiempo para cocinar?",
          de: "Welche Reisart braucht die längste Kochzeit?",
          nl: "Welk type rijst heeft de langste kooktijd nodig?"
        },
        options: [
          { en: "White rice", es: "Arroz blanco", de: "Weißer Reis", nl: "Witte rijst" },
          { en: "Brown rice", es: "Arroz integral", de: "Vollkornreis", nl: "Bruine rijst" },
          { en: "Jasmine rice", es: "Arroz jazmín", de: "Jasminreis", nl: "Jasmijn rijst" },
          { en: "Basmati rice", es: "Arroz basmati", de: "Basmatireis", nl: "Basmati rijst" }
        ],
        correct: 1,
        explanation: {
          en: "Brown rice takes the longest to cook (45-50 minutes) because it retains its bran layer, which requires more time and water to soften compared to processed white rice.",
          es: "El arroz integral toma más tiempo para cocinar (45-50 minutos) porque conserva su capa de salvado, que requiere más tiempo y agua para ablandarse comparado con el arroz blanco procesado.",
          de: "Vollkornreis braucht am längsten zum Kochen (45-50 Minuten), weil er seine Kleieschicht behält, die mehr Zeit und Wasser zum Erweichen benötigt als verarbeiteter weißer Reis.",
          nl: "Bruine rijst heeft de langste kooktijd nodig (45-50 minuten) omdat het zijn zemellaag behoudt, die meer tijd en water nodig heeft om zacht te worden vergeleken met bewerkte witte rijst."
        }
      },
      {
        question: {
          en: "What is the key characteristic of perfectly cooked rice?",
          es: "¿Cuál es la característica clave del arroz perfectamente cocido?",
          de: "Was ist das Hauptmerkmal von perfekt gekochtem Reis?",
          nl: "Wat is het belangrijkste kenmerk van perfect gekookte rijst?"
        },
        options: [
          { en: "Mushy texture", es: "Textura pastosa", de: "Matschige Textur", nl: "Papperige textuur" },
          { en: "Tender and separate grains", es: "Granos tiernos y separados", de: "Zarte und getrennte Körner", nl: "Zachte en gescheiden korrels" },
          { en: "Crunchy center", es: "Centro crujiente", de: "Knuspriges Zentrum", nl: "Knapperig midden" },
          { en: "Burnt bottom", es: "Fondo quemado", de: "Angebrannter Boden", nl: "Verbrande bodem" }
        ],
        correct: 1,
        explanation: {
          en: "Perfectly cooked rice should have tender grains that are separate from each other, not mushy or sticky, with each grain maintaining its individual integrity.",
          es: "El arroz perfectamente cocido debe tener granos tiernos que estén separados entre sí, no pastosos o pegajosos, con cada grano manteniendo su integridad individual.",
          de: "Perfekt gekochter Reis sollte zarte Körner haben, die voneinander getrennt sind, nicht matschig oder klebrig, wobei jedes Korn seine individuelle Integrität behält.",
          nl: "Perfect gekookte rijst moet zachte korrels hebben die van elkaar gescheiden zijn, niet papperig of plakkerig, waarbij elke korrel zijn individuele integriteit behoudt."
        }
      },
      {
        question: {
          en: "Which cooking vessel is traditionally used for making Persian rice with a crispy bottom?",
          es: "¿Qué recipiente de cocción se usa tradicionalmente para hacer arroz persa con fondo crujiente?",
          de: "Welches Kochgefäß wird traditionell für die Herstellung von persischem Reis mit knusprigem Boden verwendet?",
          nl: "Welk kookgerei wordt traditioneel gebruikt voor het maken van Perzische rijst met een knapperige bodem?"
        },
        options: [
          { en: "Wok", es: "Wok", de: "Wok", nl: "Wok" },
          { en: "Tagine", es: "Tagine", de: "Tagine", nl: "Tagine" },
          { en: "Tahdig pot", es: "Olla tahdig", de: "Tahdig-Topf", nl: "Tahdig pot" },
          { en: "Paellera", es: "Paellera", de: "Paellera", nl: "Paellera" }
        ],
        correct: 2,
        explanation: {
          en: "A tahdig pot is traditionally used in Persian cooking to create rice with a golden, crispy bottom crust called 'tahdig', which is considered a delicacy.",
          es: "Una olla tahdig se usa tradicionalmente en la cocina persa para crear arroz con una corteza dorada y crujiente en el fondo llamada 'tahdig', que se considera una delicia.",
          de: "Ein Tahdig-Topf wird traditionell in der persischen Küche verwendet, um Reis mit einer goldenen, knusprigen Bodenkruste namens 'Tahdig' zu kreieren, die als Delikatesse gilt.",
          nl: "Een tahdig pot wordt traditioneel gebruikt in de Perzische keuken om rijst te maken met een gouden, knapperige bodemkorst genaamd 'tahdig', wat als een delicatesse wordt beschouwd."
        }
      },
      {
        question: {
          en: "What is the main difference between risotto and regular rice dishes?",
          es: "¿Cuál es la principal diferencia entre el risotto y los platos de arroz regulares?",
          de: "Was ist der Hauptunterschied zwischen Risotto und normalen Reisgerichten?",
          nl: "Wat is het belangrijkste verschil tussen risotto en gewone rijstgerechten?"
        },
        options: [
          { en: "Type of rice used", es: "Tipo de arroz usado", de: "Verwendete Reisart", nl: "Type rijst gebruikt" },
          { en: "Cooking technique", es: "Técnica de cocción", de: "Kochtechnik", nl: "Kooktechniek" },
          { en: "Temperature served", es: "Temperatura servida", de: "Serviertemperatur", nl: "Serveertemperatuur" },
          { en: "Origin country", es: "País de origen", de: "Herkunftsland", nl: "Land van herkomst" }
        ],
        correct: 1,
        explanation: {
          en: "The main difference is the cooking technique: risotto involves gradually adding liquid while constantly stirring to release starch and create a creamy texture, unlike other rice cooking methods.",
          es: "La principal diferencia es la técnica de cocción: el risotto implica agregar gradualmente líquido mientras se remueve constantemente para liberar almidón y crear una textura cremosa, a diferencia de otros métodos de cocción de arroz.",
          de: "Der Hauptunterschied liegt in der Kochtechnik: Risotto beinhaltet das schrittweise Hinzufügen von Flüssigkeit unter ständigem Rühren, um Stärke freizusetzen und eine cremige Textur zu erzeugen, im Gegensatz zu anderen Reiskochmethoden.",
          nl: "Het belangrijkste verschil is de kooktechniek: risotto houdt in dat je geleidelijk vloeistof toevoegt terwijl je constant roert om zetmeel vrij te maken en een romige textuur te creëren, in tegenstelling tot andere rijstkookmethoden."
        }
      },
      {
        question: {
          en: "Which grain is often confused with rice but is actually a seed?",
          es: "¿Qué grano se confunde a menudo con el arroz pero en realidad es una semilla?",
          de: "Welches Getreide wird oft mit Reis verwechselt, ist aber eigentlich ein Samen?",
          nl: "Welk graan wordt vaak verward met rijst maar is eigenlijk een zaad?"
        },
        options: [
          { en: "Quinoa", es: "Quinoa", de: "Quinoa", nl: "Quinoa" },
          { en: "Wild rice", es: "Arroz salvaje", de: "Wildreis", nl: "Wilde rijst" },
          { en: "Barley", es: "Cebada", de: "Gerste", nl: "Gerst" },
          { en: "Bulgur", es: "Bulgur", de: "Bulgur", nl: "Bulgur" }
        ],
        correct: 1,
        explanation: {
          en: "Wild rice is not actually rice but the seed of an aquatic grass, despite its name and rice-like appearance when cooked.",
          es: "El arroz salvaje no es realmente arroz sino la semilla de un pasto acuático, a pesar de su nombre y apariencia similar al arroz cuando se cocina.",
          de: "Wildreis ist eigentlich kein Reis, sondern der Samen eines Wassergrases, trotz seines Namens und reisähnlichen Aussehens beim Kochen.",
          nl: "Wilde rijst is eigenlijk geen rijst maar het zaad van een watergras, ondanks zijn naam en rijstachtige uiterlijk wanneer gekookt."
        }
      },
      {
        question: {
          en: "What happens if you lift the lid too often while cooking rice?",
          es: "¿Qué pasa si levantas la tapa demasiado a menudo mientras cocinas arroz?",
          de: "Was passiert, wenn Sie den Deckel zu oft anheben, während Sie Reis kochen?",
          nl: "Wat gebeurt er als je het deksel te vaak optilt tijdens het koken van rijst?"
        },
        options: [
          { en: "Rice cooks faster", es: "El arroz se cocina más rápido", de: "Reis kocht schneller", nl: "Rijst kookt sneller" },
          { en: "Steam escapes and rice may be undercooked", es: "El vapor escapa y el arroz puede quedar poco cocido", de: "Dampf entweicht und Reis kann ungekocht bleiben", nl: "Stoom ontsnapt en rijst kan niet gaar zijn" },
          { en: "Rice becomes more flavorful", es: "El arroz se vuelve más sabroso", de: "Reis wird geschmackvoller", nl: "Rijst wordt smaakvoller" },
          { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" }
        ],
        correct: 1,
        explanation: {
          en: "Lifting the lid frequently allows steam to escape, which can result in uneven cooking and potentially undercooked rice, as steam is essential for proper rice cooking.",
          es: "Levantar la tapa frecuentemente permite que el vapor escape, lo que puede resultar en cocción desigual y posiblemente arroz poco cocido, ya que el vapor es esencial para cocinar arroz adecuadamente.",
          de: "Häufiges Anheben des Deckels lässt Dampf entweichen, was zu ungleichmäßigem Garen und möglicherweise ungekochtem Reis führen kann, da Dampf für das ordnungsgemäße Reiskochen wesentlich ist.",
          nl: "Het deksel vaak optillen laat stoom ontsnappen, wat kan resulteren in ongelijkmatig koken en mogelijk niet gaar gekookte rijst, omdat stoom essentieel is voor het goed koken van rijst."
        }
      },
      {
        question: {
          en: "What is sticky rice also known as?",
          es: "¿Cómo se conoce también el arroz pegajoso?",
          de: "Wie wird Klebreis auch genannt?",
          nl: "Hoe wordt kleverige rijst ook genoemd?"
        },
        options: [
          { en: "Glutinous rice", es: "Arroz glutinoso", de: "Klebreis", nl: "Glutenrijst" },
          { en: "Sweet rice", es: "Arroz dulce", de: "Süßer Reis", nl: "Zoete rijst" },
          { en: "Waxy rice", es: "Arroz ceroso", de: "Wachsreis", nl: "Wasachtige rijst" },
          { en: "Regular rice", es: "Arroz regular", de: "Normaler Reis", nl: "Normale rijst" }
        ],
        correct: 0,
        explanation: {
          en: "Sticky rice is also known as glutinous rice or sweet rice. Despite the name, it contains no gluten; the term refers to its sticky, glue-like texture when cooked.",
          es: "El arroz pegajoso también se conoce como arroz glutinoso o arroz dulce. A pesar del nombre, no contiene gluten; el término se refiere a su textura pegajosa similar al pegamento cuando se cocina.",
          de: "Klebreis wird auch als glutinöser Reis oder süßer Reis bezeichnet. Trotz des Namens enthält er kein Gluten; der Begriff bezieht sich auf seine klebrige, leimartige Textur beim Kochen.",
          nl: "Kleverige rijst staat ook bekend als glutenrijst of zoete rijst. Ondanks de naam bevat het geen gluten; de term verwijst naar de plakkerige, lijmachtige textuur wanneer het gekookt is."
        }
      },
      {
        question: {
          en: "What is the main ingredient in risotto?",
          es: "¿Cuál es el ingrediente principal del risotto?",
          de: "Was ist die Hauptzutat in Risotto?",
          nl: "Wat is het hoofdingrediënt in risotto?"
        },
        options: [
          { en: "Arborio rice", es: "Arroz Arborio", de: "Arborio-Reis", nl: "Arborio rijst" },
          { en: "Basmati rice", es: "Arroz Basmati", de: "Basmati-Reis", nl: "Basmati rijst" },
          { en: "Jasmine rice", es: "Arroz Jazmín", de: "Jasminreis", nl: "Jasmijn rijst" },
          { en: "Long grain rice", es: "Arroz de grano largo", de: "Langkornreis", nl: "Langkorrelige rijst" }
        ],
        correct: 0,
        explanation: {
          en: "Arborio rice is the traditional rice used in risotto. This short-grain rice releases starch during cooking, creating the creamy texture characteristic of risotto.",
          es: "El arroz Arborio es el arroz tradicional utilizado en el risotto. Este arroz de grano corto libera almidón durante la cocción, creando la textura cremosa característica del risotto.",
          de: "Arborio-Reis ist der traditionelle Reis für Risotto. Dieser Rundkornreis gibt beim Kochen Stärke ab, wodurch die cremige Textur entsteht, die für Risotto charakteristisch ist.",
          nl: "Arborio rijst is de traditionele rijst die gebruikt wordt in risotto. Deze kortkorrelige rijst geeft zetmeel af tijdens het koken, waardoor de romige textuur ontstaat die kenmerkend is voor risotto."
        }
      },
      {
        question: {
          en: "Which rice dish is a staple in Spanish cuisine?",
          es: "¿Qué plato de arroz es básico en la cocina española?",
          de: "Welches Reisgericht ist ein Grundnahrungsmittel in der spanischen Küche?",
          nl: "Welk rijstgerecht is een hoofdbestanddeel in de Spaanse keuken?"
        },
        options: [
          { en: "Paella", es: "Paella", de: "Paella", nl: "Paella" },
          { en: "Biryani", es: "Biryani", de: "Biryani", nl: "Biryani" },
          { en: "Pilaf", es: "Pilaf", de: "Pilaw", nl: "Pilav" },
          { en: "Jambalaya", es: "Jambalaya", de: "Jambalaya", nl: "Jambalaya" }
        ],
        correct: 0,
        explanation: {
          en: "Paella is a famous Spanish rice dish that originated in Valencia. It typically includes saffron-flavored rice cooked with various meats, seafood, and vegetables.",
          es: "La paella es un famoso plato español de arroz que se originó en Valencia. Típicamente incluye arroz aromatizado con azafrán cocinado con varias carnes, mariscos y verduras.",
          de: "Paella ist ein berühmtes spanisches Reisgericht, das aus Valencia stammt. Es enthält typischerweise safrangewürzten Reis, der mit verschiedenen Fleischsorten, Meeresfrüchten und Gemüse gekocht wird.",
          nl: "Paella is een beroemd Spaans rijstgerecht dat zijn oorsprong vindt in Valencia. Het bevat doorgaans met saffraan gearomatiseerde rijst, gekookt met verschillende soorten vlees, zeevruchten en groenten."
        }
      },
      {
        question: {
          en: "What type of rice is commonly used in sushi?",
          es: "¿Qué tipo de arroz se usa comúnmente en sushi?",
          de: "Welche Art von Reis wird üblicherweise für Sushi verwendet?",
          nl: "Welk type rijst wordt gewoonlijk gebruikt in sushi?"
        },
        options: [
          { en: "Short-grain rice", es: "Arroz de grano corto", de: "Rundkornreis", nl: "Kortkorrelige rijst" },
          { en: "Long-grain rice", es: "Arroz de grano largo", de: "Langkornreis", nl: "Langkorrelige rijst" },
          { en: "Wild rice", es: "Arroz salvaje", de: "Wildreis", nl: "Wilde rijst" },
          { en: "Parboiled rice", es: "Arroz precocido", de: "Parboiled-Reis", nl: "Voorgekookte rijst" }
        ],
        correct: 0,
        explanation: {
          en: "Sushi uses short-grain Japanese rice that becomes sticky when cooked, allowing it to hold together when shaped. It's seasoned with rice vinegar, sugar, and salt.",
          es: "El sushi usa arroz japonés de grano corto que se vuelve pegajoso al cocinarse, permitiéndole mantenerse unido al darle forma. Se sazona con vinagre de arroz, azúcar y sal.",
          de: "Für Sushi wird japanischer Rundkornreis verwendet, der beim Kochen klebrig wird und so zusammenhält, wenn er geformt wird. Er wird mit Reisessig, Zucker und Salz gewürzt.",
          nl: "Sushi gebruikt Japanse kortkorrelige rijst die plakkerig wordt wanneer het gekookt is, waardoor het bij elkaar blijft wanneer het gevormd wordt. Het wordt gekruid met rijstazijn, suiker en zout."
        }
      },
      {
        question: {
          en: "Which rice dish is traditionally served with Indian curry?",
          es: "¿Qué plato de arroz se sirve tradicionalmente con curry indio?",
          de: "Welches Reisgericht wird traditionell zu indischem Curry serviert?",
          nl: "Welk rijstgerecht wordt traditioneel geserveerd bij Indiase curry?"
        },
        options: [
          { en: "Basmati rice", es: "Arroz Basmati", de: "Basmati-Reis", nl: "Basmati rijst" },
          { en: "Arborio rice", es: "Arroz Arborio", de: "Arborio-Reis", nl: "Arborio rijst" },
          { en: "Jasmine rice", es: "Arroz Jazmín", de: "Jasminreis", nl: "Jasmijn rijst" },
          { en: "Black rice", es: "Arroz negro", de: "Schwarzer Reis", nl: "Zwarte rijst" }
        ],
        correct: 0,
        explanation: {
          en: "Basmati rice is the traditional accompaniment to Indian curry. This aromatic long-grain rice from the Indian subcontinent has a distinctive fragrance and fluffy texture.",
          es: "El arroz Basmati es el acompañamiento tradicional del curry indio. Este arroz aromático de grano largo del subcontinente indio tiene una fragancia distintiva y textura esponjosa.",
          de: "Basmati-Reis ist die traditionelle Beilage zu indischem Curry. Dieser aromatische Langkornreis vom indischen Subkontinent hat einen ausgeprägten Duft und eine fluffige Textur.",
          nl: "Basmati rijst is de traditionele begeleiding bij Indiase curry. Deze aromatische langkorrelige rijst van het Indiase subcontinent heeft een kenmerkende geur en een luchtige textuur."
        }
      },
      {
        question: {
          en: "What is fried rice typically cooked in?",
          es: "¿En qué se cocina típicamente el arroz frito?",
          de: "Worin wird gebratener Reis typischerweise gekocht?",
          nl: "Worin wordt gebakken rijst doorgaans gekookt?"
        },
        options: [
          { en: "A wok", es: "Un wok", de: "Einem Wok", nl: "Een wok" },
          { en: "A rice cooker", es: "Una arrocera", de: "Einem Reiskocher", nl: "Een rijstkoker" },
          { en: "A pressure cooker", es: "Una olla a presión", de: "Einem Schnellkochtopf", nl: "Een snelkookpan" },
          { en: "A steamer", es: "Una vaporera", de: "Einem Dampfgarer", nl: "Een stomer" }
        ],
        correct: 0,
        explanation: {
          en: "Fried rice is traditionally cooked in a wok, a round-bottomed cooking vessel that allows for high-heat stir-frying and even distribution of heat.",
          es: "El arroz frito se cocina tradicionalmente en un wok, un recipiente de cocción con fondo redondo que permite freír a alta temperatura y una distribución uniforme del calor.",
          de: "Gebratener Reis wird traditionell in einem Wok zubereitet, einem Kochgefäß mit rundem Boden, das Braten bei hoher Hitze und gleichmäßige Wärmeverteilung ermöglicht.",
          nl: "Gebakken rijst wordt traditioneel gekookt in een wok, een kookgerei met ronde bodem dat roerbakken op hoge temperatuur en gelijkmatige warmteverdeling mogelijk maakt."
        }
      },
      {
        question: {
          en: "Which country is famous for biryani?",
          es: "¿Qué país es famoso por el biryani?",
          de: "Welches Land ist berühmt für Biryani?",
          nl: "Welk land staat bekend om biryani?"
        },
        options: [
          { en: "India", es: "India", de: "Indien", nl: "India" },
          { en: "China", es: "China", de: "China", nl: "China" },
          { en: "Japan", es: "Japón", de: "Japan", nl: "Japan" },
          { en: "Thailand", es: "Tailandia", de: "Thailand", nl: "Thailand" }
        ],
        correct: 0,
        explanation: {
          en: "India is famous for biryani, a mixed rice dish made with spices, rice, and meat or vegetables. It's one of the most popular dishes in South Asian cuisine.",
          es: "India es famosa por el biryani, un plato de arroz mixto hecho con especias, arroz y carne o verduras. Es uno de los platos más populares de la cocina del sur de Asia.",
          de: "Indien ist berühmt für Biryani, ein gemischtes Reisgericht aus Gewürzen, Reis und Fleisch oder Gemüse. Es ist eines der beliebtesten Gerichte in der südasiatischen Küche.",
          nl: "India staat bekend om biryani, een gemengd rijstgerecht gemaakt met kruiden, rijst en vlees of groenten. Het is een van de populairste gerechten in de Zuid-Aziatische keuken."
        }
      },
      {
        question: {
          en: "What is congee?",
          es: "¿Qué es el congee?",
          de: "Was ist Congee?",
          nl: "Wat is congee?"
        },
        options: [
          { en: "Rice porridge", es: "Papilla de arroz", de: "Reisbrei", nl: "Rijstepap" },
          { en: "Rice cake", es: "Pastel de arroz", de: "Reiskuchen", nl: "Rijstkoek" },
          { en: "Rice noodles", es: "Fideos de arroz", de: "Reisnudeln", nl: "Rijstnoedels" },
          { en: "Rice wine", es: "Vino de arroz", de: "Reiswein", nl: "Rijstwijn" }
        ],
        correct: 0,
        explanation: {
          en: "Congee is a type of rice porridge popular in many Asian countries. It's made by boiling rice in a large amount of water until it breaks down into a thick, creamy consistency.",
          es: "El congee es un tipo de papilla de arroz popular en muchos países asiáticos. Se hace hirviendo arroz en una gran cantidad de agua hasta que se descompone en una consistencia espesa y cremosa.",
          de: "Congee ist eine Art Reisbrei, der in vielen asiatischen Ländern beliebt ist. Er wird hergestellt, indem Reis in viel Wasser gekocht wird, bis er in eine dicke, cremige Konsistenz zerfällt.",
          nl: "Congee is een soort rijstepap die populair is in veel Aziatische landen. Het wordt gemaakt door rijst te koken in een grote hoeveelheid water totdat het uiteenvalt in een dikke, romige consistentie."
        }
      },
      {
        question: {
          en: "What gives yellow rice its color?",
          es: "¿Qué le da al arroz amarillo su color?",
          de: "Was gibt gelbem Reis seine Farbe?",
          nl: "Wat geeft gele rijst zijn kleur?"
        },
        options: [
          { en: "Turmeric or saffron", es: "Cúrcuma o azafrán", de: "Kurkuma oder Safran", nl: "Kurkuma of saffraan" },
          { en: "Food coloring", es: "Colorante alimentario", de: "Lebensmittelfarbe", nl: "Voedselkleurstof" },
          { en: "Butter", es: "Mantequilla", de: "Butter", nl: "Boter" },
          { en: "Egg yolk", es: "Yema de huevo", de: "Eigelb", nl: "Eidooier" }
        ],
        correct: 0,
        explanation: {
          en: "Yellow rice gets its vibrant color from turmeric or saffron. Turmeric is more commonly used due to its affordability, while saffron provides a more delicate flavor and golden hue.",
          es: "El arroz amarillo obtiene su color vibrante de la cúrcuma o el azafrán. La cúrcuma se usa más comúnmente debido a su asequibilidad, mientras que el azafrán proporciona un sabor más delicado y un tono dorado.",
          de: "Gelber Reis erhält seine leuchtende Farbe durch Kurkuma oder Safran. Kurkuma wird aufgrund seiner Erschwinglichkeit häufiger verwendet, während Safran einen delikateren Geschmack und einen goldenen Farbton bietet.",
          nl: "Gele rijst krijgt zijn levendige kleur van kurkuma of saffraan. Kurkuma wordt vaker gebruikt vanwege de betaalbaarheid, terwijl saffraan een delicatere smaak en gouden tint geeft."
        }
      },
      {
        question: {
          en: "What is the main difference between white and brown rice?",
          es: "¿Cuál es la principal diferencia entre el arroz blanco y el integral?",
          de: "Was ist der Hauptunterschied zwischen weißem und braunem Reis?",
          nl: "Wat is het belangrijkste verschil tussen witte en bruine rijst?"
        },
        options: [
          { en: "Brown rice retains the bran layer", es: "El arroz integral conserva la capa de salvado", de: "Brauner Reis behält die Kleie-Schicht", nl: "Bruine rijst behoudt de zemelen laag" },
          { en: "Brown rice is artificially colored", es: "El arroz integral está coloreado artificialmente", de: "Brauner Reis ist künstlich gefärbt", nl: "Bruine rijst is kunstmatig gekleurd" },
          { en: "White rice is sweeter", es: "El arroz blanco es más dulce", de: "Weißer Reis ist süßer", nl: "Witte rijst is zoeter" },
          { en: "White rice cooks faster", es: "El arroz blanco se cocina más rápido", de: "Weißer Reis kocht schneller", nl: "Witte rijst kookt sneller" }
        ],
        correct: 0,
        explanation: {
          en: "Brown rice retains its outer bran layer and germ, making it more nutritious with higher fiber content. White rice has these layers removed during processing.",
          es: "El arroz integral conserva su capa exterior de salvado y germen, lo que lo hace más nutritivo con mayor contenido de fibra. Al arroz blanco se le eliminan estas capas durante el procesamiento.",
          de: "Brauner Reis behält seine äußere Kleie-Schicht und den Keim bei, wodurch er nahrhafter ist und einen höheren Ballaststoffgehalt aufweist. Bei weißem Reis werden diese Schichten während der Verarbeitung entfernt.",
          nl: "Bruine rijst behoudt zijn buitenste zemelen laag en kiem, waardoor het voedzamer is met een hoger vezelgehalte. Bij witte rijst worden deze lagen tijdens de verwerking verwijderd."
        }
      },
      {
        question: {
          en: "What is pilaf?",
          es: "¿Qué es el pilaf?",
          de: "Was ist Pilaw?",
          nl: "Wat is pilav?"
        },
        options: [
          { en: "Rice cooked in seasoned broth", es: "Arroz cocido en caldo sazonado", de: "In gewürzter Brühe gekochter Reis", nl: "Rijst gekookt in gekruid bouillon" },
          { en: "Sweet rice dessert", es: "Postre de arroz dulce", de: "Süßes Reis-Dessert", nl: "Zoet rijstdessert" },
          { en: "Rice flour noodles", es: "Fideos de harina de arroz", de: "Reismehlnudeln", nl: "Rijstmeel noedels" },
          { en: "Fried rice balls", es: "Bolas de arroz fritas", de: "Frittierte Reisbällchen", nl: "Gebakken rijstballetjes" }
        ],
        correct: 0,
        explanation: {
          en: "Pilaf is a rice dish where rice is cooked in a seasoned broth, often with added vegetables, meat, or spices. The rice is typically sautéed before adding liquid.",
          es: "El pilaf es un plato de arroz donde el arroz se cocina en un caldo sazonado, a menudo con verduras, carne o especias añadidas. El arroz generalmente se saltea antes de agregar líquido.",
          de: "Pilaw ist ein Reisgericht, bei dem Reis in gewürzter Brühe gekocht wird, oft mit Gemüse, Fleisch oder Gewürzen. Der Reis wird typischerweise vor dem Hinzufügen von Flüssigkeit angebraten.",
          nl: "Pilav is een rijstgerecht waarbij rijst wordt gekookt in gekruid bouillon, vaak met toegevoegde groenten, vlees of kruiden. De rijst wordt doorgaans gesauteerd voordat vloeistof wordt toegevoegd."
        }
      },
      {
        question: {
          en: "Which rice dish is popular in the Caribbean?",
          es: "¿Qué plato de arroz es popular en el Caribe?",
          de: "Welches Reisgericht ist in der Karibik beliebt?",
          nl: "Welk rijstgerecht is populair in het Caribisch gebied?"
        },
        options: [
          { en: "Rice and peas", es: "Arroz con guisantes", de: "Reis mit Erbsen", nl: "Rijst en erwten" },
          { en: "Paella", es: "Paella", de: "Paella", nl: "Paella" },
          { en: "Risotto", es: "Risotto", de: "Risotto", nl: "Risotto" },
          { en: "Biryani", es: "Biryani", de: "Biryani", nl: "Biryani" }
        ],
        correct: 0,
        explanation: {
          en: "Rice and peas is a popular Caribbean dish made with rice, kidney beans (called 'peas'), coconut milk, and spices. It's a staple side dish in many Caribbean countries.",
          es: "El arroz con guisantes es un plato caribeño popular hecho con arroz, frijoles rojos (llamados 'guisantes'), leche de coco y especias. Es un acompañamiento básico en muchos países caribeños.",
          de: "Reis mit Erbsen ist ein beliebtes karibisches Gericht aus Reis, Kidneybohnen (genannt 'Erbsen'), Kokosmilch und Gewürzen. Es ist eine Grundbeilage in vielen karibischen Ländern.",
          nl: "Rijst en erwten is een populair Caribisch gerecht gemaakt met rijst, kidneybonen (genaamd 'erwten'), kokosmelk en kruiden. Het is een basis bijgerecht in veel Caribische landen."
        }
      },
      {
        question: {
          en: "What is the key ingredient in rice pudding?",
          es: "¿Cuál es el ingrediente clave en el pudín de arroz?",
          de: "Was ist die Schlüsselzutat in Reispudding?",
          nl: "Wat is het belangrijkste ingrediënt in rijstepudding?"
        },
        options: [
          { en: "Milk", es: "Leche", de: "Milch", nl: "Melk" },
          { en: "Broth", es: "Caldo", de: "Brühe", nl: "Bouillon" },
          { en: "Soy sauce", es: "Salsa de soja", de: "Sojasauce", nl: "Sojasaus" },
          { en: "Vinegar", es: "Vinagre", de: "Essig", nl: "Azijn" }
        ],
        correct: 0,
        explanation: {
          en: "Rice pudding is made by cooking rice in milk with sugar and often flavored with vanilla, cinnamon, or other spices. It's a sweet dessert enjoyed in many cultures.",
          es: "El pudín de arroz se hace cocinando arroz en leche con azúcar y a menudo se aromatiza con vainilla, canela u otras especias. Es un postre dulce disfrutado en muchas culturas.",
          de: "Reispudding wird hergestellt, indem Reis in Milch mit Zucker gekocht wird und oft mit Vanille, Zimt oder anderen Gewürzen aromatisiert wird. Es ist ein süßes Dessert, das in vielen Kulturen genossen wird.",
          nl: "Rijstepudding wordt gemaakt door rijst te koken in melk met suiker en vaak op smaak gebracht met vanille, kaneel of andere kruiden. Het is een zoet dessert dat in veel culturen wordt genoten."
        }
      },
      {
        question: {
          en: "What is jambalaya?",
          es: "¿Qué es la jambalaya?",
          de: "Was ist Jambalaya?",
          nl: "Wat is jambalaya?"
        },
        options: [
          { en: "A Louisiana rice dish", es: "Un plato de arroz de Luisiana", de: "Ein Reisgericht aus Louisiana", nl: "Een rijstgerecht uit Louisiana" },
          { en: "A Japanese rice ball", es: "Una bola de arroz japonesa", de: "Ein japanischer Reisball", nl: "Een Japanse rijstbal" },
          { en: "An Italian rice cake", es: "Un pastel de arroz italiano", de: "Ein italienischer Reiskuchen", nl: "Een Italiaanse rijstkoek" },
          { en: "A Chinese rice soup", es: "Una sopa de arroz china", de: "Eine chinesische Reissuppe", nl: "Een Chinese rijstsoep" }
        ],
        correct: 0,
        explanation: {
          en: "Jambalaya is a Louisiana Creole dish made with rice, vegetables, and meat or seafood. It's similar to Spanish paella and reflects the multicultural influences of Louisiana cuisine.",
          es: "La jambalaya es un plato criollo de Luisiana hecho con arroz, verduras y carne o mariscos. Es similar a la paella española y refleja las influencias multiculturales de la cocina de Luisiana.",
          de: "Jambalaya ist ein kreolisches Gericht aus Louisiana, das mit Reis, Gemüse und Fleisch oder Meeresfrüchten zubereitet wird. Es ähnelt der spanischen Paella und spiegelt die multikulturellen Einflüsse der Louisiana-Küche wider.",
          nl: "Jambalaya is een Creools gerecht uit Louisiana gemaakt met rijst, groenten en vlees of zeevruchten. Het lijkt op Spaanse paella en weerspiegelt de multiculturele invloeden van de Louisiana keuken."
        }
      },
      {
        question: {
          en: "What is the traditional way to eat rice in many Asian cultures?",
          es: "¿Cuál es la forma tradicional de comer arroz en muchas culturas asiáticas?",
          de: "Was ist die traditionelle Art, Reis in vielen asiatischen Kulturen zu essen?",
          nl: "Wat is de traditionele manier om rijst te eten in veel Aziatische culturen?"
        },
        options: [
          { en: "With chopsticks", es: "Con palillos", de: "Mit Stäbchen", nl: "Met eetstokjes" },
          { en: "With a fork", es: "Con un tenedor", de: "Mit einer Gabel", nl: "Met een vork" },
          { en: "With hands only", es: "Solo con las manos", de: "Nur mit den Händen", nl: "Alleen met handen" },
          { en: "With a knife", es: "Con un cuchillo", de: "Mit einem Messer", nl: "Met een mes" }
        ],
        correct: 0,
        explanation: {
          en: "In many Asian cultures, particularly in East Asia, rice is traditionally eaten with chopsticks. The sticky nature of the rice makes it easier to pick up with chopsticks.",
          es: "En muchas culturas asiáticas, particularmente en Asia Oriental, el arroz se come tradicionalmente con palillos. La naturaleza pegajosa del arroz hace que sea más fácil recogerlo con palillos.",
          de: "In vielen asiatischen Kulturen, insbesondere in Ostasien, wird Reis traditionell mit Stäbchen gegessen. Die klebrige Natur des Reises macht es einfacher, ihn mit Stäbchen aufzunehmen.",
          nl: "In veel Aziatische culturen, met name in Oost-Azië, wordt rijst traditioneel gegeten met eetstokjes. De plakkerige aard van de rijst maakt het gemakkelijker om het op te pakken met eetstokjes."
        }
      },
      {
        question: {
          en: "What is arancini?",
          es: "¿Qué es el arancini?",
          de: "Was ist Arancini?",
          nl: "Wat is arancini?"
        },
        options: [
          { en: "Italian fried rice balls", es: "Bolas de arroz fritas italianas", de: "Italienische frittierte Reisbällchen", nl: "Italiaanse gebakken rijstballen" },
          { en: "Spanish rice casserole", es: "Cazuela de arroz española", de: "Spanischer Reisauflauf", nl: "Spaanse rijstschotel" },
          { en: "Chinese rice wine", es: "Vino de arroz chino", de: "Chinesischer Reiswein", nl: "Chinese rijstwijn" },
          { en: "Indian rice flatbread", es: "Pan plano de arroz indio", de: "Indisches Reis-Fladenbrot", nl: "Indiaas rijst platbrood" }
        ],
        correct: 0,
        explanation: {
          en: "Arancini are Italian rice balls that are stuffed, coated with breadcrumbs, and deep-fried. They typically contain risotto rice with various fillings like meat, cheese, or vegetables.",
          es: "Los arancini son bolas de arroz italianas que se rellenan, se cubren con pan rallado y se fríen. Típicamente contienen arroz risotto con varios rellenos como carne, queso o verduras.",
          de: "Arancini sind italienische Reisbällchen, die gefüllt, mit Semmelbröseln paniert und frittiert werden. Sie enthalten typischerweise Risotto-Reis mit verschiedenen Füllungen wie Fleisch, Käse oder Gemüse.",
          nl: "Arancini zijn Italiaanse rijstballen die gevuld, bedekt met paneermeel en gefriteerd worden. Ze bevatten doorgaans risotto rijst met verschillende vullingen zoals vlees, kaas of groenten."
        }
      },
      {
        question: {
          en: "What is the main characteristic of wild rice?",
          es: "¿Cuál es la característica principal del arroz salvaje?",
          de: "Was ist das Hauptmerkmal von Wildreis?",
          nl: "Wat is het belangrijkste kenmerk van wilde rijst?"
        },
        options: [
          { en: "It's actually a grass seed", es: "En realidad es una semilla de hierba", de: "Es ist eigentlich ein Grassamen", nl: "Het is eigenlijk een graszaad" },
          { en: "It grows in the desert", es: "Crece en el desierto", de: "Es wächst in der Wüste", nl: "Het groeit in de woestijn" },
          { en: "It's genetically modified", es: "Está modificado genéticamente", de: "Es ist gentechnisch verändert", nl: "Het is genetisch gemodificeerd" },
          { en: "It's artificially colored", es: "Está coloreado artificialmente", de: "Es ist künstlich gefärbt", nl: "Het is kunstmatig gekleurd" }
        ],
        correct: 0,
        explanation: {
          en: "Wild rice is not actually rice but the seed of aquatic grasses native to North America. It has a nutty flavor, chewy texture, and is higher in protein than regular rice.",
          es: "El arroz salvaje no es realmente arroz sino la semilla de hierbas acuáticas nativas de América del Norte. Tiene un sabor a nuez, textura masticable y es más rico en proteínas que el arroz regular.",
          de: "Wildreis ist eigentlich kein Reis, sondern der Samen von Wassergräsern, die in Nordamerika heimisch sind. Er hat einen nussigen Geschmack, eine zähe Textur und ist proteinreicher als normaler Reis.",
          nl: "Wilde rijst is eigenlijk geen rijst maar het zaad van watergras dat oorspronkelijk uit Noord-Amerika komt. Het heeft een nootachtige smaak, een stevige textuur en is rijker aan eiwitten dan gewone rijst."
        }
      },
      {
        question: {
          en: "What is the purpose of washing rice before cooking?",
          es: "¿Cuál es el propósito de lavar el arroz antes de cocinarlo?",
          de: "Was ist der Zweck des Waschens von Reis vor dem Kochen?",
          nl: "Wat is het doel van het wassen van rijst voor het koken?"
        },
        options: [
          { en: "To remove excess starch", es: "Para eliminar el exceso de almidón", de: "Um überschüssige Stärke zu entfernen", nl: "Om overtollig zetmeel te verwijderen" },
          { en: "To add flavor", es: "Para añadir sabor", de: "Um Geschmack hinzuzufügen", nl: "Om smaak toe te voegen" },
          { en: "To change the color", es: "Para cambiar el color", de: "Um die Farbe zu ändern", nl: "Om de kleur te veranderen" },
          { en: "To make it cook faster", es: "Para que se cocine más rápido", de: "Damit es schneller kocht", nl: "Om het sneller te laten koken" }
        ],
        correct: 0,
        explanation: {
          en: "Washing rice before cooking removes excess starch from the surface, preventing the rice from becoming too sticky or gummy. It also removes any dust or debris.",
          es: "Lavar el arroz antes de cocinarlo elimina el exceso de almidón de la superficie, evitando que el arroz se vuelva demasiado pegajoso o gomoso. También elimina cualquier polvo o residuo.",
          de: "Das Waschen von Reis vor dem Kochen entfernt überschüssige Stärke von der Oberfläche und verhindert, dass der Reis zu klebrig oder gummiartig wird. Es entfernt auch Staub oder Schmutz.",
          nl: "Het wassen van rijst voor het koken verwijdert overtollig zetmeel van het oppervlak, waardoor wordt voorkomen dat de rijst te plakkerig of kleverig wordt. Het verwijdert ook stof of vuil."
        }
      },
      {
        question: {
          en: "Which rice dish is commonly served for breakfast in Asia?",
          es: "¿Qué plato de arroz se sirve comúnmente para el desayuno en Asia?",
          de: "Welches Reisgericht wird in Asien üblicherweise zum Frühstück serviert?",
          nl: "Welk rijstgerecht wordt gewoonlijk als ontbijt geserveerd in Azië?"
        },
        options: [
          { en: "Congee", es: "Congee", de: "Congee", nl: "Congee" },
          { en: "Paella", es: "Paella", de: "Paella", nl: "Paella" },
          { en: "Risotto", es: "Risotto", de: "Risotto", nl: "Risotto" },
          { en: "Jambalaya", es: "Jambalaya", de: "Jambalaya", nl: "Jambalaya" }
        ],
        correct: 0,
        explanation: {
          en: "Congee, a rice porridge, is commonly served for breakfast throughout Asia. It's easy to digest and can be topped with various ingredients like eggs, meat, or pickled vegetables.",
          es: "El congee, una papilla de arroz, se sirve comúnmente para el desayuno en toda Asia. Es fácil de digerir y se puede cubrir con varios ingredientes como huevos, carne o verduras en escabeche.",
          de: "Congee, ein Reisbrei, wird in ganz Asien üblicherweise zum Frühstück serviert. Es ist leicht verdaulich und kann mit verschiedenen Zutaten wie Eiern, Fleisch oder eingelegtem Gemüse belegt werden.",
          nl: "Congee, een rijstepap, wordt gewoonlijk als ontbijt geserveerd in heel Azië. Het is gemakkelijk verteerbaar en kan bedekt worden met verschillende ingrediënten zoals eieren, vlees of ingemaakte groenten."
        }
      },
      {
        question: {
          en: "What is black rice also known as?",
          es: "¿Cómo se conoce también el arroz negro?",
          de: "Wie wird schwarzer Reis auch genannt?",
          nl: "Hoe wordt zwarte rijst ook genoemd?"
        },
        options: [
          { en: "Forbidden rice", es: "Arroz prohibido", de: "Verbotener Reis", nl: "Verboden rijst" },
          { en: "Emperor rice", es: "Arroz emperador", de: "Kaiser-Reis", nl: "Keizer rijst" },
          { en: "Royal rice", es: "Arroz real", de: "Königlicher Reis", nl: "Koninklijke rijst" },
          { en: "Sacred rice", es: "Arroz sagrado", de: "Heiliger Reis", nl: "Heilige rijst" }
        ],
        correct: 0,
        explanation: {
          en: "Black rice is also known as forbidden rice because in ancient China, it was reserved exclusively for the emperor and nobility. It's rich in antioxidants and has a nutty flavor.",
          es: "El arroz negro también se conoce como arroz prohibido porque en la antigua China estaba reservado exclusivamente para el emperador y la nobleza. Es rico en antioxidantes y tiene un sabor a nuez.",
          de: "Schwarzer Reis wird auch verbotener Reis genannt, weil er im alten China ausschließlich dem Kaiser und dem Adel vorbehalten war. Er ist reich an Antioxidantien und hat einen nussigen Geschmack.",
          nl: "Zwarte rijst staat ook bekend als verboden rijst omdat het in het oude China exclusief gereserveerd was voor de keizer en adel. Het is rijk aan antioxidanten en heeft een nootachtige smaak."
        }
      },
      {
        question: {
          en: "What is the typical cooking method for making fried rice?",
          es: "¿Cuál es el método de cocción típico para hacer arroz frito?",
          de: "Was ist die typische Kochmethode für gebratenen Reis?",
          nl: "Wat is de typische kookmethode voor het maken van gebakken rijst?"
        },
        options: [
          { en: "Using leftover cooked rice", es: "Usar arroz cocido sobrante", de: "Übrig gebliebenen gekochten Reis verwenden", nl: "Het gebruik van restjes gekookte rijst" },
          { en: "Using freshly cooked hot rice", es: "Usar arroz caliente recién cocido", de: "Frisch gekochten heißen Reis verwenden", nl: "Het gebruik van vers gekookte hete rijst" },
          { en: "Using uncooked raw rice", es: "Usar arroz crudo sin cocer", de: "Ungekochten rohen Reis verwenden", nl: "Het gebruik van ongekookte rauwe rijst" },
          { en: "Using instant rice", es: "Usar arroz instantáneo", de: "Instant-Reis verwenden", nl: "Het gebruik van instantrijst" }
        ],
        correct: 0,
        explanation: {
          en: "The best fried rice is made with leftover cooked rice that has been refrigerated. Day-old rice is drier and separates better, preventing the fried rice from becoming mushy.",
          es: "El mejor arroz frito se hace con arroz cocido sobrante que ha sido refrigerado. El arroz de un día es más seco y se separa mejor, evitando que el arroz frito se vuelva blando.",
          de: "Der beste gebratene Reis wird aus übrig gebliebenem gekochten Reis hergestellt, der gekühlt wurde. Einen Tag alter Reis ist trockener und trennt sich besser, wodurch verhindert wird, dass der gebratene Reis matschig wird.",
          nl: "De beste gebakken rijst wordt gemaakt met restjes gekookte rijst die gekoeld is geweest. Een dag oude rijst is droger en scheidt beter, waardoor wordt voorkomen dat de gebakken rijst zompig wordt."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
