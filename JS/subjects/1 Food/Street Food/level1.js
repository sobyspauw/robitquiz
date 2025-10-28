// Quiz Level 1: Street Food - Basic Street Food Knowledge & Popular Items
(function() {
  "use strict";

  const level1 = {
    name: {
      en: "Basic Street Food Knowledge & Popular Items",
      es: "Conocimientos Básicos de Comida Callejera y Artículos Populares",
      de: "Grundwissen über Straßenessen & Beliebte Artikel",
      nl: "Basiskennis Straatvoedsel & Populaire Items"
    },
    questions: [
      {
        question: {
          en: "What is street food?",
          es: "¿Qué es la comida callejera?",
          de: "Was ist Straßenessen?",
          nl: "Wat is straatvoedsel?"
        },
        options: [
          { en: "Food prepared and sold by vendors in streets or public places", es: "Comida preparada y vendida por vendedores en calles o lugares públicos", de: "Essen, das von Verkäufern auf Straßen oder öffentlichen Plätzen zubereitet und verkauft wird", nl: "Voedsel bereid en verkocht door verkopers op straten of openbare plaatsen" },
          { en: "Food only served in restaurants", es: "Comida servida solo en restaurantes", de: "Essen nur in Restaurants serviert", nl: "Voedsel alleen geserveerd in restaurants" },
          { en: "Frozen food products", es: "Productos de comida congelada", de: "Tiefkühlkost-Produkte", nl: "Diepvriesproducten" },
          { en: "Home-cooked meals", es: "Comidas caseras", de: "Hausgemachte Mahlzeiten", nl: "Thuisgemaakte maaltijden" }
        ],
        correct: 0,
        explanation: {
          en: "Street food refers to ready-to-eat food or drinks sold by vendors in streets, markets, or other public places, often prepared and served from portable stalls or carts.",
          es: "La comida callejera se refiere a alimentos listos para comer o bebidas vendidas por vendedores en calles, mercados u otros lugares públicos, a menudo preparadas y servidas desde puestos o carritos portátiles.",
          de: "Straßenessen bezieht sich auf verzehrfertige Speisen oder Getränke, die von Verkäufern auf Straßen, Märkten oder anderen öffentlichen Orten verkauft werden, oft von tragbaren Ständen oder Karren zubereitet und serviert.",
          nl: "Straatvoedsel verwijst naar kant-en-klare voedsel of dranken verkocht door verkopers op straten, markten of andere openbare plaatsen, vaak bereid en geserveerd vanuit draagbare kramen of karren."
        }
      },
      {
        question: {
          en: "Which of these is a popular street food snack worldwide?",
          es: "¿Cuál de estos es un bocadillo de comida callejera popular en todo el mundo?",
          de: "Welcher dieser Snacks ist weltweit beliebtes Straßenessen?",
          nl: "Welke van deze is een populaire straatvoedsel snack wereldwijd?"
        },
        options: [
          { en: "Caviar", es: "Caviar", de: "Kaviar", nl: "Kaviaar" },
          { en: "French fries", es: "Papas fritas", de: "Pommes frites", nl: "Frietjes" },
          { en: "Lobster thermidor", es: "Langosta termidor", de: "Hummer Thermidor", nl: "Kreeft thermidor" },
          { en: "Foie gras", es: "Foie gras", de: "Foie gras", nl: "Foie gras" }
        ],
        correct: 1,
        explanation: {
          en: "French fries are one of the most popular street foods worldwide, found in various forms across different cultures and easily prepared in portable fryers.",
          es: "Las papas fritas son una de las comidas callejeras más populares en todo el mundo, encontradas en varias formas a través de diferentes culturas y fáciles de preparar en freidoras portátiles.",
          de: "Pommes frites sind eines der beliebtesten Straßenessen weltweit, in verschiedenen Formen in verschiedenen Kulturen zu finden und leicht in tragbaren Fritteusen zuzubereiten.",
          nl: "Frietjes zijn een van de populairste straatvoedsel wereldwijd, gevonden in verschillende vormen over verschillende culturen en gemakkelijk te bereiden in draagbare friteuses."
        }
      },
      {
        question: {
          en: "What type of cooking equipment is commonly used by street food vendors?",
          es: "¿Qué tipo de equipo de cocina usan comúnmente los vendedores de comida callejera?",
          de: "Welche Art von Kochausrüstung wird häufig von Straßenessen-Verkäufern verwendet?",
          nl: "Wat voor soort kookuitrusting wordt veel gebruikt door straatvoedselverkopers?"
        },
        options: [
          { en: "Industrial ovens", es: "Hornos industriales", de: "Industrieöfen", nl: "Industriële ovens" },
          { en: "Portable grills and fryers", es: "Parrillas y freidoras portátiles", de: "Tragbare Grills und Fritteusen", nl: "Draagbare grills en friteuses" },
          { en: "Microwave ovens only", es: "Solo hornos microondas", de: "Nur Mikrowellenöfen", nl: "Alleen magnetrons" },
          { en: "Wood-fired pizza ovens", es: "Hornos de pizza de leña", de: "Holzofen für Pizza", nl: "Houtgestookte pizza-ovens" }
        ],
        correct: 1,
        explanation: {
          en: "Street food vendors typically use portable, compact equipment like grills, fryers, and hotplates that can be easily transported and set up in various locations.",
          es: "Los vendedores de comida callejera típicamente usan equipos portátiles y compactos como parrillas, freidoras y planchas que pueden ser fácilmente transportados e instalados en varios lugares.",
          de: "Straßenessen-Verkäufer verwenden typischerweise tragbare, kompakte Geräte wie Grills, Fritteusen und Kochplatten, die leicht transportiert und an verschiedenen Orten aufgebaut werden können.",
          nl: "Straatvoedselverkopers gebruiken meestal draagbare, compacte apparatuur zoals grills, friteuses en kookplaten die gemakkelijk kunnen worden vervoerd en opgezet op verschillende locaties."
        }
      },
      {
        question: {
          en: "Which characteristic is typical of street food?",
          es: "¿Qué característica es típica de la comida callejera?",
          de: "Welche Eigenschaft ist typisch für Straßenessen?",
          nl: "Welke eigenschap is typisch voor straatvoedsel?"
        },
        options: [
          { en: "Expensive fine dining presentation", es: "Presentación cara de alta cocina", de: "Teure gehobene Gastronomie-Präsentation", nl: "Dure haute cuisine presentatie" },
          { en: "Quick service and affordable prices", es: "Servicio rápido y precios asequibles", de: "Schneller Service und erschwingliche Preise", nl: "Snelle service en betaalbare prijzen" },
          { en: "Formal dining environment", es: "Ambiente de comida formal", de: "Formelle Essensumgebung", nl: "Formele eetomgeving" },
          { en: "Multi-course meal service", es: "Servicio de comida de varios platos", de: "Mehrgängiges Menü-Service", nl: "Meergangen maaltijdservice" }
        ],
        correct: 1,
        explanation: {
          en: "Street food is characterized by quick service, affordable prices, and casual consumption, making it accessible to a wide range of people as convenient, on-the-go dining.",
          es: "La comida callejera se caracteriza por el servicio rápido, precios asequibles y consumo casual, haciéndola accesible a una amplia gama de personas como una comida conveniente para llevar.",
          de: "Straßenessen zeichnet sich durch schnellen Service, erschwingliche Preise und ungezwungenen Verzehr aus, was es für eine breite Palette von Menschen als bequemes Essen für unterwegs zugänglich macht.",
          nl: "Straatvoedsel wordt gekenmerkt door snelle service, betaalbare prijzen en casual consumptie, waardoor het toegankelijk is voor een breed scala aan mensen als handige, onderweg-eten."
        }
      },
      {
        question: {
          en: "What is a 'taco'?",
          es: "¿Qué es un 'taco'?",
          de: "Was ist ein 'Taco'?",
          nl: "Wat is een 'taco'?"
        },
        options: [
          { en: "A Mexican dish with filling wrapped in a tortilla", es: "Un plato mexicano con relleno envuelto en una tortilla", de: "Ein mexikanisches Gericht mit Füllung in einer Tortilla", nl: "Een Mexicaans gerecht met vulling gewikkeld in een tortilla" },
          { en: "A French pastry", es: "Un pastel francés", de: "Ein französisches Gebäck", nl: "Een Frans gebak" },
          { en: "An Italian pasta dish", es: "Un plato de pasta italiano", de: "Ein italienisches Nudelgericht", nl: "Een Italiaans pasta gerecht" },
          { en: "A Japanese soup", es: "Una sopa japonesa", de: "Eine japanische Suppe", nl: "Een Japanse soep" }
        ],
        correct: 0,
        explanation: {
          en: "A taco is a traditional Mexican dish consisting of a tortilla (corn or wheat) folded or rolled around various fillings such as meat, beans, cheese, and vegetables.",
          es: "Un taco es un plato tradicional mexicano que consiste en una tortilla (de maíz o trigo) doblada o enrollada alrededor de varios rellenos como carne, frijoles, queso y verduras.",
          de: "Ein Taco ist ein traditionelles mexikanisches Gericht, das aus einer Tortilla (Mais oder Weizen) besteht, die um verschiedene Füllungen wie Fleisch, Bohnen, Käse und Gemüse gefaltet oder gerollt wird.",
          nl: "Een taco is een traditioneel Mexicaans gerecht bestaande uit een tortilla (maïs of tarwe) gevouwen of gerold rond verschillende vullingen zoals vlees, bonen, kaas en groenten."
        }
      },
      {
        question: {
          en: "Which utensil is commonly NOT needed for eating street food?",
          es: "¿Qué utensilio comúnmente NO se necesita para comer comida callejera?",
          de: "Welches Besteck wird normalerweise NICHT zum Essen von Straßenessen benötigt?",
          nl: "Welk bestek is gewoonlijk NIET nodig voor het eten van straatvoedsel?"
        },
        options: [
          { en: "Hands", es: "Manos", de: "Hände", nl: "Handen" },
          { en: "Napkins", es: "Servilletas", de: "Servietten", nl: "Servetten" },
          { en: "Formal knife and fork set", es: "Juego formal de cuchillo y tenedor", de: "Formelles Messer- und Gabel-Set", nl: "Formeel mes en vork set" },
          { en: "Toothpicks", es: "Palillos", de: "Zahnstocher", nl: "Tandenstokers" }
        ],
        correct: 2,
        explanation: {
          en: "Street food is typically designed to be eaten by hand or with simple disposable utensils. Formal knife and fork sets are not commonly used as street food is meant to be casual and convenient.",
          es: "La comida callejera está típicamente diseñada para ser comida a mano o con utensilios desechables simples. Los juegos formales de cuchillo y tenedor no se usan comúnmente ya que la comida callejera está destinada a ser casual y conveniente.",
          de: "Straßenessen ist normalerweise so konzipiert, dass es mit der Hand oder mit einfachem Einwegbesteck gegessen wird. Formelle Messer- und Gabel-Sets werden nicht häufig verwendet, da Straßenessen ungezwungen und bequem sein soll.",
          nl: "Straatvoedsel is meestal ontworpen om met de hand te worden gegeten of met eenvoudig wegwerpbestek. Formele mes en vork sets worden niet vaak gebruikt omdat straatvoedsel bedoeld is om casual en handig te zijn."
        }
      },
      {
        question: {
          en: "What is 'street food culture'?",
          es: "¿Qué es la 'cultura de comida callejera'?",
          de: "Was ist 'Straßenessen-Kultur'?",
          nl: "Wat is 'straatvoedselcultuur'?"
        },
        options: [
          { en: "Only eating at expensive restaurants", es: "Solo comer en restaurantes caros", de: "Nur in teuren Restaurants essen", nl: "Alleen eten in dure restaurants" },
          { en: "The social practice of eating and enjoying street food as part of local tradition", es: "La práctica social de comer y disfrutar la comida callejera como parte de la tradición local", de: "Die soziale Praxis, Straßenessen zu essen und zu genießen als Teil der lokalen Tradition", nl: "De sociale praktijk van het eten en genieten van straatvoedsel als onderdeel van lokale traditie" },
          { en: "Avoiding all outdoor food", es: "Evitar toda comida al aire libre", de: "Alle Outdoor-Speisen vermeiden", nl: "Het vermijden van al het buitenvoedsel" },
          { en: "Only eating at home", es: "Solo comer en casa", de: "Nur zu Hause essen", nl: "Alleen thuis eten" }
        ],
        correct: 1,
        explanation: {
          en: "Street food culture refers to the social traditions, practices, and community aspects surrounding the preparation, sale, and consumption of street food as part of local culinary heritage.",
          es: "La cultura de comida callejera se refiere a las tradiciones sociales, prácticas y aspectos comunitarios que rodean la preparación, venta y consumo de comida callejera como parte del patrimonio culinario local.",
          de: "Straßenessen-Kultur bezieht sich auf die sozialen Traditionen, Praktiken und Gemeinschaftsaspekte rund um die Zubereitung, den Verkauf und den Konsum von Straßenessen als Teil des lokalen kulinarischen Erbes.",
          nl: "Straatvoedselcultuur verwijst naar de sociale tradities, praktijken en gemeenschapsaspecten rond de voorbereiding, verkoop en consumptie van straatvoedsel als onderdeel van lokaal culinair erfgoed."
        }
      },
      {
        question: {
          en: "Which is a common characteristic of street food vendors?",
          es: "¿Cuál es una característica común de los vendedores de comida callejera?",
          de: "Was ist ein gemeinsames Merkmal von Straßenessen-Verkäufern?",
          nl: "Wat is een gemeenschappelijk kenmerk van straatvoedselverkopers?"
        },
        options: [
          { en: "They only work in shopping malls", es: "Solo trabajan en centros comerciales", de: "Sie arbeiten nur in Einkaufszentren", nl: "Ze werken alleen in winkelcentra" },
          { en: "They use mobile carts or small stalls", es: "Usan carritos móviles o puestos pequeños", de: "Sie verwenden mobile Karren oder kleine Stände", nl: "Ze gebruiken mobiele karren of kleine kramen" },
          { en: "They require formal dining reservations", es: "Requieren reservaciones formales para cenar", de: "Sie benötigen formelle Essensreservierungen", nl: "Ze vereisen formele dinereservaties" },
          { en: "They only serve frozen food", es: "Solo sirven comida congelada", de: "Sie servieren nur Tiefkühlkost", nl: "Ze serveren alleen diepvriesvoedsel" }
        ],
        correct: 1,
        explanation: {
          en: "Street food vendors typically operate from mobile carts, small stalls, or temporary setups that allow them to move locations and serve customers in various public spaces.",
          es: "Los vendedores de comida callejera típicamente operan desde carritos móviles, puestos pequeños o instalaciones temporales que les permiten cambiar de ubicación y servir clientes en varios espacios públicos.",
          de: "Straßenessen-Verkäufer arbeiten normalerweise von mobilen Karren, kleinen Ständen oder temporären Aufbauten aus, die es ihnen ermöglichen, Standorte zu wechseln und Kunden in verschiedenen öffentlichen Räumen zu bedienen.",
          nl: "Straatvoedselverkopers werken meestal vanuit mobiele karren, kleine kramen of tijdelijke opstellingen die hen in staat stellen om van locatie te veranderen en klanten te bedienen in verschillende openbare ruimtes."
        }
      },
      {
        question: {
          en: "What makes street food appealing to many people?",
          es: "¿Qué hace que la comida callejera sea atractiva para muchas personas?",
          de: "Was macht Straßenessen für viele Menschen attraktiv?",
          nl: "Wat maakt straatvoedsel aantrekkelijk voor veel mensen?"
        },
        options: [
          { en: "High prices and formal atmosphere", es: "Precios altos y atmósfera formal", de: "Hohe Preise und formelle Atmosphäre", nl: "Hoge prijzen en formele sfeer" },
          { en: "Convenience, affordability, and authentic flavors", es: "Conveniencia, asequibilidad y sabores auténticos", de: "Bequemlichkeit, Erschwinglichkeit und authentische Aromen", nl: "Gemak, betaalbaarheid en authentieke smaken" },
          { en: "Long waiting times", es: "Largos tiempos de espera", de: "Lange Wartezeiten", nl: "Lange wachttijden" },
          { en: "Complex ordering procedures", es: "Procedimientos de pedido complejos", de: "Komplexe Bestellverfahren", nl: "Complexe bestelprocedures" }
        ],
        correct: 1,
        explanation: {
          en: "Street food appeals to people because it offers convenient, affordable, and often authentic local flavors that can be enjoyed quickly without formal dining procedures.",
          es: "La comida callejera atrae a las personas porque ofrece sabores locales convenientes, asequibles y a menudo auténticos que pueden disfrutarse rápidamente sin procedimientos formales de comida.",
          de: "Straßenessen ist für Menschen attraktiv, weil es bequeme, erschwingliche und oft authentische lokale Aromen bietet, die schnell ohne formelle Essensverfahren genossen werden können.",
          nl: "Straatvoedsel spreekt mensen aan omdat het handige, betaalbare en vaak authentieke lokale smaken biedt die snel kunnen worden genoten zonder formele eetprocedures."
        }
      },
      {
        question: {
          en: "Which food is commonly sold as street food globally?",
          es: "¿Qué comida se vende comúnmente como comida callejera globalmente?",
          de: "Welches Essen wird weltweit häufig als Straßenessen verkauft?",
          nl: "Welk voedsel wordt wereldwijd vaak verkocht als straatvoedsel?"
        },
        options: [
          { en: "Grilled skewers/kebabs", es: "Pinchos/kebabs a la parrilla", de: "Gegrillte Spieße/Kebabs", nl: "Gegrilde spiesjes/kebabs" },
          { en: "Caviar and champagne", es: "Caviar y champán", de: "Kaviar und Champagner", nl: "Kaviaar en champagne" },
          { en: "Formal multi-course meals", es: "Comidas formales de varios platos", de: "Formelle Menüs mit mehreren Gängen", nl: "Formele meergangen maaltijden" },
          { en: "Expensive steakhouse cuts", es: "Cortes caros de steakhouse", de: "Teure Steakhouse-Schnitte", nl: "Dure steakhouse stukken" }
        ],
        correct: 0,
        explanation: {
          en: "Grilled skewers and kebabs are popular street foods worldwide because they're portable, can be prepared quickly on portable grills, and offer protein with vegetables in an easy-to-eat format.",
          es: "Los pinchos y kebabs a la parrilla son comidas callejeras populares en todo el mundo porque son portátiles, pueden prepararse rápidamente en parrillas portátiles y ofrecen proteína con verduras en un formato fácil de comer.",
          de: "Gegrillte Spieße und Kebabs sind weltweit beliebte Straßenessen, weil sie tragbar sind, schnell auf tragbaren Grills zubereitet werden können und Protein mit Gemüse in einem leicht zu essenden Format bieten.",
          nl: "Gegrilde spiesjes en kebabs zijn populaire straatvoedsel wereldwijd omdat ze draagbaar zijn, snel kunnen worden bereid op draagbare grills en eiwit met groenten bieden in een gemakkelijk te eten formaat."
        }
      },
      {
        question: {
          en: "What is important about street food preparation?",
          es: "¿Qué es importante sobre la preparación de comida callejera?",
          de: "Was ist wichtig bei der Zubereitung von Straßenessen?",
          nl: "Wat is belangrijk bij de bereiding van straatvoedsel?"
        },
        options: [
          { en: "Using only the most expensive ingredients", es: "Usar solo los ingredientes más caros", de: "Nur die teuersten Zutaten verwenden", nl: "Alleen de duurste ingrediënten gebruiken" },
          { en: "Maintaining cleanliness and food safety", es: "Mantener la limpieza y seguridad alimentaria", de: "Sauberkeit und Lebensmittelsicherheit aufrechterhalten", nl: "Netheid en voedselveiligheid handhaven" },
          { en: "Making food as slowly as possible", es: "Hacer la comida lo más lentamente posible", de: "Essen so langsam wie möglich zubereiten", nl: "Voedsel zo langzaam mogelijk maken" },
          { en: "Using complicated cooking methods", es: "Usar métodos de cocina complicados", de: "Komplizierte Kochmethoden verwenden", nl: "Gecompliceerde kookmethoden gebruiken" }
        ],
        correct: 1,
        explanation: {
          en: "Food safety and cleanliness are crucial for street food vendors to prevent foodborne illnesses and maintain customer trust, especially when serving the public from portable setups.",
          es: "La seguridad alimentaria y la limpieza son cruciales para los vendedores de comida callejera para prevenir enfermedades transmitidas por alimentos y mantener la confianza del cliente, especialmente al servir al público desde instalaciones portátiles.",
          de: "Lebensmittelsicherheit und Sauberkeit sind entscheidend für Straßenessen-Verkäufer, um lebensmittelbedingte Krankheiten zu verhindern und das Vertrauen der Kunden zu erhalten, besonders wenn sie die Öffentlichkeit von tragbaren Aufbauten aus bedienen.",
          nl: "Voedselveiligheid en netheid zijn cruciaal voor straatvoedselverkopers om voedselgerelateerde ziektes te voorkomen en het vertrouwen van klanten te behouden, vooral bij het bedienen van het publiek vanuit draagbare opstellingen."
        }
      },
      {
        question: {
          en: "Which beverage is commonly sold with street food?",
          es: "¿Qué bebida se vende comúnmente con comida callejera?",
          de: "Welches Getränk wird häufig mit Straßenessen verkauft?",
          nl: "Welke drank wordt vaak verkocht met straatvoedsel?"
        },
        options: [
          { en: "Fine wine", es: "Vino fino", de: "Edler Wein", nl: "Fijne wijn" },
          { en: "Fresh juices and sodas", es: "Jugos frescos y refrescos", de: "Frische Säfte und Limonaden", nl: "Verse sappen en frisdranken" },
          { en: "Imported bottled water only", es: "Solo agua embotellada importada", de: "Nur importiertes Flaschenwasser", nl: "Alleen geïmporteerd flessenwater" },
          { en: "Expensive coffee blends", es: "Mezclas de café caras", de: "Teure Kaffeemischungen", nl: "Dure koffiemengsels" }
        ],
        correct: 1,
        explanation: {
          en: "Fresh juices, sodas, and other refreshing beverages are commonly sold alongside street food as they complement the casual dining experience and help cleanse the palate.",
          es: "Los jugos frescos, refrescos y otras bebidas refrescantes se venden comúnmente junto con la comida callejera ya que complementan la experiencia de comida casual y ayudan a limpiar el paladar.",
          de: "Frische Säfte, Limonaden und andere erfrischende Getränke werden häufig neben Straßenessen verkauft, da sie das ungezwungene Esserlebnis ergänzen und helfen, den Gaumen zu reinigen.",
          nl: "Verse sappen, frisdranken en andere verfrissende dranken worden vaak verkocht naast straatvoedsel omdat ze de casual eetervaring aanvullen en helpen het gehemelte te reinigen."
        }
      },
      {
        question: {
          en: "What time of day is street food most commonly available?",
          es: "¿A qué hora del día está más comúnmente disponible la comida callejera?",
          de: "Zu welcher Tageszeit ist Straßenessen am häufigsten verfügbar?",
          nl: "Op welk moment van de dag is straatvoedsel het meest beschikbaar?"
        },
        options: [
          { en: "Only late at night", es: "Solo muy tarde en la noche", de: "Nur spät in der Nacht", nl: "Alleen laat in de nacht" },
          { en: "Throughout the day, especially during meal times", es: "Durante todo el día, especialmente durante las horas de comida", de: "Den ganzen Tag über, besonders zu den Mahlzeiten", nl: "Gedurende de dag, vooral tijdens maaltijden" },
          { en: "Only during business hours", es: "Solo durante horas de oficina", de: "Nur während der Geschäftszeiten", nl: "Alleen tijdens kantooruren" },
          { en: "Only on weekends", es: "Solo los fines de semana", de: "Nur an Wochenenden", nl: "Alleen in het weekend" }
        ],
        correct: 1,
        explanation: {
          en: "Street food vendors typically operate throughout the day, with peak times during breakfast, lunch, and dinner hours when people are looking for convenient and quick meal options.",
          es: "Los vendedores de comida callejera típicamente operan durante todo el día, con horarios pico durante el desayuno, almuerzo y cena cuando las personas buscan opciones de comida convenientes y rápidas.",
          de: "Straßenessen-Verkäufer arbeiten normalerweise den ganzen Tag über, mit Spitzenzeiten während des Frühstücks, Mittagessens und Abendessens, wenn Menschen nach bequemen und schnellen Mahlzeiten suchen.",
          nl: "Straatvoedselverkopers werken meestal gedurende de dag, met piekmomenten tijdens ontbijt, lunch en diner wanneer mensen op zoek zijn naar handige en snelle maaltijdopties."
        }
      },
      {
        question: {
          en: "Which cooking method is popular for street food?",
          es: "¿Qué método de cocina es popular para la comida callejera?",
          de: "Welche Kochmethode ist für Straßenessen beliebt?",
          nl: "Welke kookmethode is populair voor straatvoedsel?"
        },
        options: [
          { en: "Grilling and frying", es: "Asar a la parrilla y freír", de: "Grillen und Braten", nl: "Grillen en bakken" },
          { en: "Sous vide cooking", es: "Cocina al vacío", de: "Sous-Vide-Kochen", nl: "Sous vide koken" },
          { en: "Molecular gastronomy", es: "Gastronomía molecular", de: "Molekulare Gastronomie", nl: "Moleculaire gastronomie" },
          { en: "Complex braising techniques", es: "Técnicas complejas de estofado", de: "Komplexe Schmortechniken", nl: "Complexe stooftechnieken" }
        ],
        correct: 0,
        explanation: {
          en: "Grilling and frying are popular street food cooking methods because they're quick, create appealing flavors and aromas, and can be done with portable equipment.",
          es: "Asar a la parrilla y freír son métodos populares de cocina para comida callejera porque son rápidos, crean sabores y aromas atractivos, y pueden hacerse con equipo portátil.",
          de: "Grillen und Braten sind beliebte Kochmethoden für Straßenessen, weil sie schnell sind, ansprechende Geschmäcker und Aromen erzeugen und mit tragbarer Ausrüstung gemacht werden können.",
          nl: "Grillen en bakken zijn populaire kookmethoden voor straatvoedsel omdat ze snel zijn, aantrekkelijke smaken en aroma's creëren, en kunnen worden gedaan met draagbare apparatuur."
        }
      },
      {
        question: {
          en: "What is a food truck?",
          es: "¿Qué es un food truck?",
          de: "Was ist ein Food Truck?",
          nl: "Wat is een foodtruck?"
        },
        options: [
          { en: "A vehicle equipped with kitchen facilities for preparing and selling food", es: "Un vehículo equipado con instalaciones de cocina para preparar y vender comida", de: "Ein Fahrzeug mit Küchenausstattung zur Zubereitung und zum Verkauf von Essen", nl: "Een voertuig uitgerust met keukenfaciliteiten voor het bereiden en verkopen van voedsel" },
          { en: "A delivery truck for restaurants", es: "Un camión de entrega para restaurantes", de: "Ein Lieferwagen für Restaurants", nl: "Een bezorgwagen voor restaurants" },
          { en: "A garbage truck", es: "Un camión de basura", de: "Ein Müllwagen", nl: "Een vuilniswagen" },
          { en: "A truck that sells only drinks", es: "Un camión que vende solo bebidas", de: "Ein Lastwagen, der nur Getränke verkauft", nl: "Een vrachtwagen die alleen dranken verkoopt" }
        ],
        correct: 0,
        explanation: {
          en: "A food truck is a mobile vehicle equipped with cooking equipment and facilities to prepare, cook, and serve food to customers, representing a modern evolution of street food vendors.",
          es: "Un food truck es un vehículo móvil equipado con equipo de cocina e instalaciones para preparar, cocinar y servir comida a los clientes, representando una evolución moderna de los vendedores de comida callejera.",
          de: "Ein Food Truck ist ein mobiles Fahrzeug, das mit Kochausrüstung und Einrichtungen ausgestattet ist, um Essen für Kunden zu zubereiten, zu kochen und zu servieren, und stellt eine moderne Entwicklung der Straßenessen-Verkäufer dar.",
          nl: "Een foodtruck is een mobiel voertuig uitgerust met kookuitrusting en faciliteiten om voedsel voor klanten te bereiden, koken en serveren, wat een moderne evolutie van straatvoedselverkopers vertegenwoordigt."
        }
      },
      {
        question: {
          en: "Which factor is important when choosing street food?",
          es: "¿Qué factor es importante al elegir comida callejera?",
          de: "Welcher Faktor ist wichtig bei der Auswahl von Straßenessen?",
          nl: "Welke factor is belangrijk bij het kiezen van straatvoedsel?"
        },
        options: [
          { en: "The most expensive option available", es: "La opción más cara disponible", de: "Die teuerste verfügbare Option", nl: "De duurste beschikbare optie" },
          { en: "Cleanliness of the vendor and freshness of ingredients", es: "Limpieza del vendedor y frescura de los ingredientes", de: "Sauberkeit des Verkäufers und Frische der Zutaten", nl: "Netheid van de verkoper en versheid van de ingrediënten" },
          { en: "The longest line of customers", es: "La línea más larga de clientes", de: "Die längste Kundenschlange", nl: "De langste rij klanten" },
          { en: "The fanciest presentation", es: "La presentación más elegante", de: "Die schickste Präsentation", nl: "De mooiste presentatie" }
        ],
        correct: 1,
        explanation: {
          en: "When choosing street food, it's important to observe the cleanliness of the vendor's setup and the freshness of ingredients to ensure food safety and quality.",
          es: "Al elegir comida callejera, es importante observar la limpieza de la instalación del vendedor y la frescura de los ingredientes para asegurar la seguridad y calidad de los alimentos.",
          de: "Bei der Auswahl von Straßenessen ist es wichtig, die Sauberkeit des Verkäuferaufbaus und die Frische der Zutaten zu beobachten, um Lebensmittelsicherheit und -qualität zu gewährleisten.",
          nl: "Bij het kiezen van straatvoedsel is het belangrijk om de netheid van de opstelling van de verkoper en de versheid van de ingrediënten te observeren om voedselveiligheid en kwaliteit te garanderen."
        }
      },
      {
        question: {
          en: "What makes street food different from restaurant food?",
          es: "¿Qué hace que la comida callejera sea diferente de la comida de restaurante?",
          de: "Was macht Straßenessen anders als Restaurantessen?",
          nl: "Wat maakt straatvoedsel anders dan restaurantvoedsel?"
        },
        options: [
          { en: "Street food is always more expensive", es: "La comida callejera siempre es más cara", de: "Straßenessen ist immer teurer", nl: "Straatvoedsel is altijd duurder" },
          { en: "Street food is prepared and served in outdoor/public settings with portable equipment", es: "La comida callejera se prepara y sirve en entornos exteriores/públicos con equipo portátil", de: "Straßenessen wird in Außen-/öffentlichen Umgebungen mit tragbarer Ausrüstung zubereitet und serviert", nl: "Straatvoedsel wordt bereid en geserveerd in buitenomgevingen/openbare plekken met draagbare apparatuur" },
          { en: "Street food requires reservations", es: "La comida callejera requiere reservaciones", de: "Straßenessen erfordert Reservierungen", nl: "Straatvoedsel vereist reserveringen" },
          { en: "Street food only includes desserts", es: "La comida callejera solo incluye postres", de: "Straßenessen umfasst nur Desserts", nl: "Straatvoedsel omvat alleen desserts" }
        ],
        correct: 1,
        explanation: {
          en: "Street food differs from restaurant food primarily in its preparation and service in outdoor or public spaces using portable equipment, creating a more casual and accessible dining experience.",
          es: "La comida callejera se diferencia de la comida de restaurante principalmente en su preparación y servicio en espacios exteriores o públicos usando equipo portátil, creando una experiencia de comida más casual y accesible.",
          de: "Straßenessen unterscheidet sich von Restaurantessen hauptsächlich in der Zubereitung und dem Service in Außen- oder öffentlichen Räumen mit tragbarer Ausrüstung, wodurch ein ungezwungeneres und zugänglicheres Esserlebnis entsteht.",
          nl: "Straatvoedsel verschilt van restaurantvoedsel voornamelijk in de bereiding en service in buitenruimtes of openbare plekken met behulp van draagbare apparatuur, wat een meer casual en toegankelijke eetervaring creëert."
        }
      },
      {
        question: {
          en: "Which is a benefit of street food for local communities?",
          es: "¿Cuál es un beneficio de la comida callejera para las comunidades locales?",
          de: "Was ist ein Vorteil von Straßenessen für lokale Gemeinschaften?",
          nl: "Wat is een voordeel van straatvoedsel voor lokale gemeenschappen?"
        },
        options: [
          { en: "It eliminates all restaurants", es: "Elimina todos los restaurantes", de: "Es eliminiert alle Restaurants", nl: "Het elimineert alle restaurants" },
          { en: "It provides affordable food options and supports local entrepreneurship", es: "Proporciona opciones de comida asequible y apoya el emprendimiento local", de: "Es bietet erschwingliche Essensoptionen und unterstützt lokale Unternehmertätigkeit", nl: "Het biedt betaalbare voedselopties en ondersteunt lokaal ondernemerschap" },
          { en: "It only serves tourists", es: "Solo sirve a turistas", de: "Es dient nur Touristen", nl: "Het bedient alleen toeristen" },
          { en: "It requires expensive permits", es: "Requiere permisos caros", de: "Es erfordert teure Genehmigungen", nl: "Het vereist dure vergunningen" }
        ],
        correct: 1,
        explanation: {
          en: "Street food benefits local communities by providing affordable dining options for residents and creating opportunities for small-scale entrepreneurs to start food businesses with lower startup costs.",
          es: "La comida callejera beneficia a las comunidades locales proporcionando opciones de comida asequible para los residentes y creando oportunidades para emprendedores a pequeña escala para comenzar negocios de comida con menores costos de arranque.",
          de: "Straßenessen kommt lokalen Gemeinschaften zugute, indem es erschwingliche Essensoptionen für Bewohner bietet und Möglichkeiten für kleinunternehmerische Unternehmer schafft, Lebensmittelgeschäfte mit geringeren Startkosten zu beginnen.",
          nl: "Straatvoedsel komt lokale gemeenschappen ten goede door betaalbare eetopties voor bewoners te bieden en kansen te creëren voor kleinschalige ondernemers om voedselbedrijven te starten met lagere opstartkosten."
        }
      },
      {
        question: {
          en: "What should you do after eating street food?",
          es: "¿Qué debes hacer después de comer comida callejera?",
          de: "Was sollten Sie nach dem Essen von Straßenessen tun?",
          nl: "Wat moet je doen na het eten van straatvoedsel?"
        },
        options: [
          { en: "Immediately go to a hospital", es: "Ir inmediatamente a un hospital", de: "Sofort ins Krankenhaus gehen", nl: "Onmiddellijk naar een ziekenhuis gaan" },
          { en: "Dispose of waste properly and wash your hands", es: "Desechar los residuos adecuadamente y lavarse las manos", de: "Abfall ordnungsgemäß entsorgen und Hände waschen", nl: "Afval goed wegdoen en handen wassen" },
          { en: "Never eat street food again", es: "Nunca volver a comer comida callejera", de: "Nie wieder Straßenessen essen", nl: "Nooit meer straatvoedsel eten" },
          { en: "Run away from the vendor", es: "Huir del vendedor", de: "Vom Verkäufer weglaufen", nl: "Wegrennen van de verkoper" }
        ],
        correct: 1,
        explanation: {
          en: "After eating street food, it's good practice to dispose of any packaging or waste properly and wash your hands to maintain hygiene and keep public spaces clean.",
          es: "Después de comer comida callejera, es buena práctica desechar cualquier empaque o residuo adecuadamente y lavarse las manos para mantener la higiene y mantener limpios los espacios públicos.",
          de: "Nach dem Essen von Straßenessen ist es gute Praxis, Verpackungen oder Abfall ordnungsgemäß zu entsorgen und die Hände zu waschen, um die Hygiene aufrechtzuerhalten und öffentliche Räume sauber zu halten.",
          nl: "Na het eten van straatvoedsel is het goede praktijk om verpakkingen of afval goed weg te doen en je handen te wassen om hygiëne te behouden en openbare ruimtes schoon te houden."
        }
      },
      {
        question: {
          en: "What is street food?",
          es: "¿Qué es la comida callejera?",
          de: "Was ist Straßenessen?",
          nl: "Wat is straatvoedsel?"
        },
        options: [
          { en: "Food prepared and sold by vendors in streets or public places", es: "Comida preparada y vendida por vendedores en calles o lugares públicos", de: "Essen, das von Verkäufern auf Straßen oder öffentlichen Plätzen zubereitet und verkauft wird", nl: "Voedsel bereid en verkocht door verkopers op straten of openbare plaatsen" },
          { en: "Food only served in restaurants", es: "Comida servida solo en restaurantes", de: "Essen nur in Restaurants serviert", nl: "Voedsel alleen geserveerd in restaurants" },
          { en: "Frozen food products", es: "Productos de comida congelada", de: "Tiefkühlkost-Produkte", nl: "Diepvriesproducten" },
          { en: "Home-cooked meals", es: "Comidas caseras", de: "Hausgemachte Mahlzeiten", nl: "Thuisgemaakte maaltijden" }
        ],
        correct: 0,
        explanation: {
          en: "Street food refers to ready-to-eat food or drinks sold by vendors in streets, markets, or other public places, often prepared and served from portable stalls or carts.",
          es: "La comida callejera se refiere a alimentos listos para comer o bebidas vendidas por vendedores en calles, mercados u otros lugares públicos, a menudo preparadas y servidas desde puestos o carritos portátiles.",
          de: "Straßenessen bezieht sich auf verzehrfertige Speisen oder Getränke, die von Verkäufern auf Straßen, Märkten oder anderen öffentlichen Orten verkauft werden, oft von tragbaren Ständen oder Karren zubereitet und serviert.",
          nl: "Straatvoedsel verwijst naar kant-en-klare voedsel of dranken verkocht door verkopers op straten, markten of andere openbare plaatsen, vaak bereid en geserveerd vanuit draagbare kramen of karren."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }

  return level1;
})();