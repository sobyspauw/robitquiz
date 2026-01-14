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
          en: "Where do street food festivals typically take place?",
          es: "¿Dónde se llevan a cabo típicamente los festivales de comida callejera?",
          de: "Wo finden Straßenessen-Festivals normalerweise statt?",
          nl: "Waar vinden straatvoedsel festivals meestal plaats?"
        },
        options: [
          { en: "Inside private homes", es: "Dentro de hogares privados", de: "In Privathäusern", nl: "Binnen in privéwoningen" },
          { en: "In parks, plazas, and public gathering spaces", es: "En parques, plazas y espacios públicos de reunión", de: "In Parks, Plätzen und öffentlichen Versammlungsräumen", nl: "In parken, pleinen en openbare verzamelruimtes" },
          { en: "Only in museums", es: "Solo en museos", de: "Nur in Museen", nl: "Alleen in musea" },
          { en: "Underground in tunnels", es: "Bajo tierra en túneles", de: "Unterirdisch in Tunneln", nl: "Ondergronds in tunnels" }
        ],
        correct: 1,
        explanation: {
          en: "Street food festivals are typically held in open public spaces like parks, plazas, and pedestrian areas where vendors can set up and large crowds can gather to enjoy diverse food options.",
          es: "Los festivales de comida callejera se llevan a cabo típicamente en espacios públicos abiertos como parques, plazas y áreas peatonales donde los vendedores pueden instalarse y grandes multitudes pueden reunirse para disfrutar diversas opciones de comida.",
          de: "Straßenessen-Festivals finden normalerweise in offenen öffentlichen Räumen wie Parks, Plätzen und Fußgängerzonen statt, wo Verkäufer sich aufstellen können und große Menschenmengen zusammenkommen können, um verschiedene Essensoptionen zu genießen.",
          nl: "Straatvoedsel festivals worden meestal gehouden in open openbare ruimtes zoals parken, pleinen en voetgangerszones waar verkopers zich kunnen opstellen en grote menigten kunnen verzamelen om diverse voedselopties te genieten."
        }
      },
      {
        question: {
          en: "What is the main advantage of street food's portability?",
          es: "¿Cuál es la ventaja principal de la portabilidad de la comida callejera?",
          de: "Was ist der Hauptvorteil der Tragbarkeit von Straßenessen?",
          nl: "Wat is het belangrijkste voordeel van de draagbaarheid van straatvoedsel?"
        },
        options: [
          { en: "It requires sitting at a table", es: "Requiere sentarse en una mesa", de: "Es erfordert das Sitzen an einem Tisch", nl: "Het vereist zitten aan een tafel" },
          { en: "You can eat while walking or traveling", es: "Puedes comer mientras caminas o viajas", de: "Man kann beim Gehen oder Reisen essen", nl: "Je kunt eten tijdens het lopen of reizen" },
          { en: "It needs refrigeration", es: "Necesita refrigeración", de: "Es benötigt Kühlung", nl: "Het heeft koeling nodig" },
          { en: "It must be eaten with special utensils", es: "Debe comerse con utensilios especiales", de: "Es muss mit speziellem Besteck gegessen werden", nl: "Het moet worden gegeten met speciaal bestek" }
        ],
        correct: 1,
        explanation: {
          en: "The portability of street food means it can be eaten on-the-go without needing to sit down, making it perfect for busy people who want to eat while walking, commuting, or exploring.",
          es: "La portabilidad de la comida callejera significa que puede comerse sobre la marcha sin necesidad de sentarse, haciéndola perfecta para personas ocupadas que quieren comer mientras caminan, viajan o exploran.",
          de: "Die Tragbarkeit von Straßenessen bedeutet, dass es unterwegs gegessen werden kann, ohne sich hinsetzen zu müssen, was es perfekt für beschäftigte Menschen macht, die beim Gehen, Pendeln oder Erkunden essen möchten.",
          nl: "De draagbaarheid van straatvoedsel betekent dat het onderweg kan worden gegeten zonder te hoeven zitten, waardoor het perfect is voor drukke mensen die willen eten tijdens het lopen, pendelen of verkennen."
        }
      },
      {
        question: {
          en: "What packaging is commonly used for street food?",
          es: "¿Qué embalaje se usa comúnmente para la comida callejera?",
          de: "Welche Verpackung wird häufig für Straßenessen verwendet?",
          nl: "Welke verpakking wordt vaak gebruikt voor straatvoedsel?"
        },
        options: [
          { en: "Crystal glassware", es: "Cristalería de cristal", de: "Kristallglas", nl: "Kristallen glaswerk" },
          { en: "Paper, cardboard, or biodegradable containers", es: "Papel, cartón o envases biodegradables", de: "Papier, Karton oder biologisch abbaubare Behälter", nl: "Papier, karton of biologisch afbreekbare containers" },
          { en: "Fine china plates", es: "Platos de porcelana fina", de: "Feine Porzellanteller", nl: "Fijn porselein borden" },
          { en: "Stainless steel serving sets", es: "Juegos de servicio de acero inoxidable", de: "Edelstahl-Serviersets", nl: "Roestvrijstalen serveersets" }
        ],
        correct: 1,
        explanation: {
          en: "Street food is typically served in disposable paper, cardboard boxes, or biodegradable containers that are lightweight, inexpensive, and easy for customers to carry and dispose of properly.",
          es: "La comida callejera se sirve típicamente en papel desechable, cajas de cartón o envases biodegradables que son ligeros, económicos y fáciles para que los clientes los lleven y desechen adecuadamente.",
          de: "Straßenessen wird normalerweise in Einweg-Papier, Kartons oder biologisch abbaubaren Behältern serviert, die leicht, kostengünstig und für Kunden einfach zu tragen und ordnungsgemäß zu entsorgen sind.",
          nl: "Straatvoedsel wordt meestal geserveerd in wegwerp papier, kartonnen dozen of biologisch afbreekbare containers die licht, goedkoop en gemakkelijk zijn voor klanten om te dragen en op de juiste manier weg te gooien."
        }
      },
      {
        question: {
          en: "What role do spices play in street food?",
          es: "¿Qué papel juegan las especias en la comida callejera?",
          de: "Welche Rolle spielen Gewürze beim Straßenessen?",
          nl: "Welke rol spelen kruiden bij straatvoedsel?"
        },
        options: [
          { en: "They are never used in street food", es: "Nunca se usan en la comida callejera", de: "Sie werden nie in Straßenessen verwendet", nl: "Ze worden nooit gebruikt in straatvoedsel" },
          { en: "They add flavor and reflect regional cuisines", es: "Añaden sabor y reflejan cocinas regionales", de: "Sie verleihen Geschmack und spiegeln regionale Küchen wider", nl: "Ze voegen smaak toe en weerspiegelen regionale keukens" },
          { en: "They only serve as decoration", es: "Solo sirven como decoración", de: "Sie dienen nur zur Dekoration", nl: "Ze dienen alleen als decoratie" },
          { en: "They make food more expensive", es: "Hacen la comida más cara", de: "Sie machen Essen teurer", nl: "Ze maken voedsel duurder" }
        ],
        correct: 1,
        explanation: {
          en: "Spices are essential in street food to create bold flavors and distinctive tastes that reflect local culinary traditions and regional preferences, making each street food unique to its culture.",
          es: "Las especias son esenciales en la comida callejera para crear sabores audaces y gustos distintivos que reflejan tradiciones culinarias locales y preferencias regionales, haciendo que cada comida callejera sea única a su cultura.",
          de: "Gewürze sind wesentlich für Straßenessen, um kräftige Geschmäcker und unverwechselbare Aromen zu schaffen, die lokale kulinarische Traditionen und regionale Vorlieben widerspiegeln und jedes Straßenessen einzigartig für seine Kultur machen.",
          nl: "Kruiden zijn essentieel in straatvoedsel om gedurfde smaken en onderscheidende smaken te creëren die lokale culinaire tradities en regionale voorkeuren weerspiegelen, waardoor elk straatvoedsel uniek is voor zijn cultuur."
        }
      },
      {
        question: {
          en: "What is typically a sign of a popular street food vendor?",
          es: "¿Qué es típicamente una señal de un vendedor de comida callejera popular?",
          de: "Was ist normalerweise ein Zeichen für einen beliebten Straßenessen-Verkäufer?",
          nl: "Wat is meestal een teken van een populaire straatvoedselverkoper?"
        },
        options: [
          { en: "Empty stall with no customers", es: "Puesto vacío sin clientes", de: "Leerer Stand ohne Kunden", nl: "Lege kraam zonder klanten" },
          { en: "Long queue of waiting customers", es: "Larga cola de clientes esperando", de: "Lange Schlange wartender Kunden", nl: "Lange rij wachtende klanten" },
          { en: "Closed most of the day", es: "Cerrado la mayor parte del día", de: "Die meiste Zeit des Tages geschlossen", nl: "De meeste tijd van de dag gesloten" },
          { en: "Hidden location", es: "Ubicación oculta", de: "Versteckter Standort", nl: "Verborgen locatie" }
        ],
        correct: 1,
        explanation: {
          en: "A long queue of customers is often a good indicator of quality street food, as locals and experienced food lovers know which vendors serve the best and freshest items.",
          es: "Una larga cola de clientes es a menudo un buen indicador de comida callejera de calidad, ya que los locales y amantes de la comida experimentados saben qué vendedores sirven los mejores y más frescos artículos.",
          de: "Eine lange Warteschlange von Kunden ist oft ein guter Indikator für qualitativ hochwertiges Straßenessen, da Einheimische und erfahrene Feinschmecker wissen, welche Verkäufer die besten und frischesten Artikel servieren.",
          nl: "Een lange rij klanten is vaak een goede indicator van kwaliteit straatvoedsel, omdat locals en ervaren voedselliefhebbers weten welke verkopers de beste en verste items serveren."
        }
      },
      {
        question: {
          en: "How does street food contribute to tourism?",
          es: "¿Cómo contribuye la comida callejera al turismo?",
          de: "Wie trägt Straßenessen zum Tourismus bei?",
          nl: "Hoe draagt straatvoedsel bij aan toerisme?"
        },
        options: [
          { en: "It discourages tourists from visiting", es: "Desalienta a los turistas de visitar", de: "Es schreckt Touristen vom Besuch ab", nl: "Het ontmoedigt toeristen om te bezoeken" },
          { en: "It offers authentic cultural experiences and local flavors", es: "Ofrece experiencias culturales auténticas y sabores locales", de: "Es bietet authentische kulturelle Erlebnisse und lokale Geschmäcker", nl: "Het biedt authentieke culturele ervaringen en lokale smaken" },
          { en: "It has no connection to tourism", es: "No tiene conexión con el turismo", de: "Es hat keine Verbindung zum Tourismus", nl: "Het heeft geen verband met toerisme" },
          { en: "It only serves expensive luxury foods", es: "Solo sirve comidas de lujo caras", de: "Es serviert nur teure Luxusspeisen", nl: "Het serveert alleen dure luxe voedingsmiddelen" }
        ],
        correct: 1,
        explanation: {
          en: "Street food is a major tourist attraction as it provides visitors with authentic, affordable ways to experience local culture and traditional flavors, often becoming a highlight of their travel experience.",
          es: "La comida callejera es una atracción turística importante ya que proporciona a los visitantes formas auténticas y asequibles de experimentar la cultura local y sabores tradicionales, a menudo convirtiéndose en un punto destacado de su experiencia de viaje.",
          de: "Straßenessen ist eine wichtige Touristenattraktion, da es Besuchern authentische, erschwingliche Möglichkeiten bietet, lokale Kultur und traditionelle Geschmäcker zu erleben, und oft zu einem Highlight ihres Reiseerlebnisses wird.",
          nl: "Straatvoedsel is een belangrijke toeristische attractie omdat het bezoekers authentieke, betaalbare manieren biedt om lokale cultuur en traditionele smaken te ervaren, vaak een hoogtepunt van hun reiservaring wordt."
        }
      },
      {
        question: {
          en: "What safety precaution should you take when eating street food?",
          es: "¿Qué precaución de seguridad debes tomar al comer comida callejera?",
          de: "Welche Sicherheitsvorkehrung sollten Sie beim Essen von Straßenessen treffen?",
          nl: "Welke veiligheidsmaatregel moet je nemen bij het eten van straatvoedsel?"
        },
        options: [
          { en: "Eat food that looks old and cold", es: "Comer comida que se ve vieja y fría", de: "Essen, das alt und kalt aussieht, essen", nl: "Eten dat er oud en koud uitziet" },
          { en: "Choose vendors with visible cooking areas and fresh ingredients", es: "Elegir vendedores con áreas de cocina visibles e ingredientes frescos", de: "Verkäufer mit sichtbaren Kochbereichen und frischen Zutaten wählen", nl: "Kies verkopers met zichtbare kookgebieden en verse ingrediënten" },
          { en: "Ignore hand washing", es: "Ignorar el lavado de manos", de: "Händewaschen ignorieren", nl: "Handen wassen negeren" },
          { en: "Buy from unlicensed vendors only", es: "Comprar solo de vendedores sin licencia", de: "Nur von unlizenziertenVerkäufern kaufen", nl: "Alleen kopen van verkopers zonder vergunning" }
        ],
        correct: 1,
        explanation: {
          en: "For safety, choose street food vendors where you can see the food being prepared, ingredients look fresh, and the cooking area appears clean, reducing the risk of foodborne illness.",
          es: "Por seguridad, elige vendedores de comida callejera donde puedas ver la comida siendo preparada, los ingredientes se vean frescos y el área de cocina parezca limpia, reduciendo el riesgo de enfermedades transmitidas por alimentos.",
          de: "Aus Sicherheitsgründen wählen Sie Straßenessen-Verkäufer, bei denen Sie die Zubereitung des Essens sehen können, die Zutaten frisch aussehen und der Kochbereich sauber erscheint, um das Risiko lebensmittelbedingter Krankheiten zu reduzieren.",
          nl: "Voor de veiligheid, kies straatvoedselverkopers waar je het voedsel kunt zien bereiden, ingrediënten er vers uitzien en het kookgebied schoon lijkt, waardoor het risico op voedselgerelateerde ziekten wordt verminderd."
        }
      },
      {
        question: {
          en: "What is a common payment method for street food?",
          es: "¿Cuál es un método de pago común para la comida callejera?",
          de: "Was ist eine übliche Zahlungsmethode für Straßenessen?",
          nl: "Wat is een veelgebruikte betaalmethode voor straatvoedsel?"
        },
        options: [
          { en: "Only credit cards accepted", es: "Solo se aceptan tarjetas de crédito", de: "Nur Kreditkarten akzeptiert", nl: "Alleen creditcards geaccepteerd" },
          { en: "Cash, though mobile payments are becoming popular", es: "Efectivo, aunque los pagos móviles se están volviendo populares", de: "Bargeld, obwohl mobile Zahlungen immer beliebter werden", nl: "Contant geld, hoewel mobiele betalingen populair worden" },
          { en: "Barter system only", es: "Solo sistema de trueque", de: "Nur Tauschsystem", nl: "Alleen ruilhandel" },
          { en: "Payment not required", es: "Pago no requerido", de: "Zahlung nicht erforderlich", nl: "Betaling niet vereist" }
        ],
        correct: 1,
        explanation: {
          en: "Street food vendors traditionally accept cash payments, though increasingly many are adopting mobile payment systems like digital wallets and QR codes for customer convenience.",
          es: "Los vendedores de comida callejera tradicionalmente aceptan pagos en efectivo, aunque cada vez más están adoptando sistemas de pago móvil como billeteras digitales y códigos QR para conveniencia del cliente.",
          de: "Straßenessen-Verkäufer akzeptieren traditionell Barzahlungen, obwohl immer mehr mobile Zahlungssysteme wie digitale Geldbörsen und QR-Codes für den Kundenkomfort übernehmen.",
          nl: "Straatvoedselverkopers accepteren traditioneel contante betalingen, hoewel steeds meer mobiele betaalsystemen zoals digitale portemonnees en QR-codes overnemen voor klantgemak."
        }
      },
      {
        question: {
          en: "What makes street food sustainable for vendors?",
          es: "¿Qué hace que la comida callejera sea sostenible para los vendedores?",
          de: "Was macht Straßenessen für Verkäufer nachhaltig?",
          nl: "Wat maakt straatvoedsel duurzaam voor verkopers?"
        },
        options: [
          { en: "High overhead costs and rent", es: "Altos costos generales y alquiler", de: "Hohe Gemeinkosten und Miete", nl: "Hoge algemene kosten en huur" },
          { en: "Low startup costs and minimal infrastructure needs", es: "Bajos costos de inicio y necesidades mínimas de infraestructura", de: "Niedrige Startkosten und minimaler Infrastrukturbedarf", nl: "Lage opstartkosten en minimale infrastructuurbehoeften" },
          { en: "Expensive licensing requirements", es: "Requisitos de licencia caros", de: "Teure Lizenzanforderungen", nl: "Dure licentievereiesten" },
          { en: "Need for large staff", es: "Necesidad de personal grande", de: "Bedarf an großem Personal", nl: "Behoefte aan groot personeel" }
        ],
        correct: 1,
        explanation: {
          en: "Street food is sustainable for vendors because it requires relatively low startup costs, minimal infrastructure, and can be operated by one or two people, making it an accessible business opportunity.",
          es: "La comida callejera es sostenible para los vendedores porque requiere costos de inicio relativamente bajos, infraestructura mínima y puede ser operada por una o dos personas, haciéndola una oportunidad de negocio accesible.",
          de: "Straßenessen ist für Verkäufer nachhaltig, weil es relativ niedrige Startkosten, minimale Infrastruktur erfordert und von einer oder zwei Personen betrieben werden kann, was es zu einer zugänglichen Geschäftsmöglichkeit macht.",
          nl: "Straatvoedsel is duurzaam voor verkopers omdat het relatief lage opstartkosten, minimale infrastructuur vereist en kan worden beheerd door een of twee mensen, waardoor het een toegankelijke zakelijke kans is."
        }
      },
      {
        question: {
          en: "What weather consideration affects street food vendors?",
          es: "¿Qué consideración climática afecta a los vendedores de comida callejera?",
          de: "Welche Wetterüberlegung betrifft Straßenessen-Verkäufer?",
          nl: "Welke weeromstandigheid beïnvloedt straatvoedselverkopers?"
        },
        options: [
          { en: "Weather has no impact on street food", es: "El clima no tiene impacto en la comida callejera", de: "Wetter hat keinen Einfluss auf Straßenessen", nl: "Weer heeft geen impact op straatvoedsel" },
          { en: "Rain, extreme heat, and cold can affect operations and customer flow", es: "La lluvia, el calor extremo y el frío pueden afectar las operaciones y el flujo de clientes", de: "Regen, extreme Hitze und Kälte können Betrieb und Kundenfluss beeinflussen", nl: "Regen, extreme hitte en kou kunnen de activiteiten en klantenstroom beïnvloeden" },
          { en: "Vendors only work in perfect weather", es: "Los vendedores solo trabajan en clima perfecto", de: "Verkäufer arbeiten nur bei perfektem Wetter", nl: "Verkopers werken alleen bij perfect weer" },
          { en: "Indoor locations solve all problems", es: "Las ubicaciones interiores resuelven todos los problemas", de: "Indoor-Standorte lösen alle Probleme", nl: "Binnenlocaties lossen alle problemen op" }
        ],
        correct: 1,
        explanation: {
          en: "Weather significantly impacts street food vendors as rain, extreme temperatures, and harsh conditions can affect both their ability to operate and customer willingness to buy, requiring vendors to adapt with coverings and seasonal adjustments.",
          es: "El clima impacta significativamente a los vendedores de comida callejera ya que la lluvia, temperaturas extremas y condiciones duras pueden afectar tanto su capacidad de operar como la disposición del cliente para comprar, requiriendo que los vendedores se adapten con coberturas y ajustes estacionales.",
          de: "Wetter beeinflusst Straßenessen-Verkäufer erheblich, da Regen, extreme Temperaturen und harte Bedingungen sowohl ihre Betriebsfähigkeit als auch die Kaufbereitschaft der Kunden beeinflussen können, was Verkäufer erfordert, sich mit Überdachungen und saisonalen Anpassungen anzupassen.",
          nl: "Weer heeft een aanzienlijke impact op straatvoedselverkopers omdat regen, extreme temperaturen en harde omstandigheden zowel hun vermogen om te werken als de bereidheid van klanten om te kopen kunnen beïnvloeden, waardoor verkopers zich moeten aanpassen met overkappingen en seizoensaanpassingen."
        }
      },
      {
        question: {
          en: "What is the typical serving size of street food?",
          es: "¿Cuál es el tamaño de porción típico de la comida callejera?",
          de: "Was ist die typische Portionsgröße von Straßenessen?",
          nl: "Wat is de typische portiegrootte van straatvoedsel?"
        },
        options: [
          { en: "Family-sized portions only", es: "Solo porciones de tamaño familiar", de: "Nur familiengroße Portionen", nl: "Alleen gezinsformaten" },
          { en: "Individual, ready-to-eat portions", es: "Porciones individuales listas para comer", de: "Einzelne, verzehrfertige Portionen", nl: "Individuele, kant-en-klare porties" },
          { en: "Bulk quantities requiring preparation", es: "Cantidades a granel que requieren preparación", de: "Mengen, die Vorbereitung erfordern", nl: "Bulkhoeveelheden die voorbereiding vereisen" },
          { en: "Sample sizes only", es: "Solo tamaños de muestra", de: "Nur Probengrößen", nl: "Alleen proefformaten" }
        ],
        correct: 1,
        explanation: {
          en: "Street food is typically served in individual, ready-to-eat portions that are just right for one person, making it convenient for quick consumption without the need for additional preparation or sharing.",
          es: "La comida callejera se sirve típicamente en porciones individuales listas para comer que son justas para una persona, haciéndola conveniente para consumo rápido sin necesidad de preparación adicional o compartir.",
          de: "Straßenessen wird normalerweise in einzelnen, verzehrfertigen Portionen serviert, die genau richtig für eine Person sind, was es bequem für schnellen Verzehr ohne zusätzliche Vorbereitung oder Teilen macht.",
          nl: "Straatvoedsel wordt meestal geserveerd in individuele, kant-en-klare porties die precies goed zijn voor één persoon, waardoor het handig is voor snelle consumptie zonder de noodzaak van extra voorbereiding of delen."
        }
      },
      {
        question: {
          en: "Why is street food considered an important part of urban life?",
          es: "¿Por qué se considera la comida callejera una parte importante de la vida urbana?",
          de: "Warum wird Straßenessen als wichtiger Teil des städtischen Lebens betrachtet?",
          nl: "Waarom wordt straatvoedsel beschouwd als een belangrijk onderdeel van het stedelijk leven?"
        },
        options: [
          { en: "It replaces all formal dining", es: "Reemplaza toda la comida formal", de: "Es ersetzt alle formellen Mahlzeiten", nl: "Het vervangt alle formele maaltijden" },
          { en: "It provides quick, affordable meals for busy city dwellers", es: "Proporciona comidas rápidas y asequibles para habitantes ocupados de la ciudad", de: "Es bietet schnelle, erschwingliche Mahlzeiten für beschäftigte Stadtbewohner", nl: "Het biedt snelle, betaalbare maaltijden voor drukke stadsbewoners" },
          { en: "It only exists in rural areas", es: "Solo existe en áreas rurales", de: "Es existiert nur in ländlichen Gebieten", nl: "Het bestaat alleen in landelijke gebieden" },
          { en: "It's only for special occasions", es: "Es solo para ocasiones especiales", de: "Es ist nur für besondere Anlässe", nl: "Het is alleen voor speciale gelegenheden" }
        ],
        correct: 1,
        explanation: {
          en: "Street food is integral to urban life because it provides quick, affordable, and accessible meals for busy city workers, students, and residents who need convenient dining options throughout their day.",
          es: "La comida callejera es integral a la vida urbana porque proporciona comidas rápidas, asequibles y accesibles para trabajadores de la ciudad ocupados, estudiantes y residentes que necesitan opciones de comida convenientes durante su día.",
          de: "Straßenessen ist integraler Bestandteil des städtischen Lebens, weil es schnelle, erschwingliche und zugängliche Mahlzeiten für beschäftigte Stadtarbeiter, Studenten und Bewohner bietet, die bequeme Essensoptionen während ihres Tages benötigen.",
          nl: "Straatvoedsel is integraal onderdeel van het stedelijk leven omdat het snelle, betaalbare en toegankelijke maaltijden biedt voor drukke stadsarbeiders, studenten en bewoners die handige eetopties nodig hebben gedurende hun dag."
        }
      },
      {
        question: {
          en: "What distinguishes street food from fast food chains?",
          es: "¿Qué distingue la comida callejera de las cadenas de comida rápida?",
          de: "Was unterscheidet Straßenessen von Fast-Food-Ketten?",
          nl: "Wat onderscheidt straatvoedsel van fastfoodketens?"
        },
        options: [
          { en: "Street food is always unhealthy", es: "La comida callejera siempre es poco saludable", de: "Straßenessen ist immer ungesund", nl: "Straatvoedsel is altijd ongezond" },
          { en: "Street food offers unique, often handmade local recipes", es: "La comida callejera ofrece recetas locales únicas y a menudo hechas a mano", de: "Straßenessen bietet einzigartige, oft handgemachte lokale Rezepte", nl: "Straatvoedsel biedt unieke, vaak handgemaakte lokale recepten" },
          { en: "Both are exactly the same", es: "Ambos son exactamente iguales", de: "Beide sind genau gleich", nl: "Beide zijn precies hetzelfde" },
          { en: "Street food uses frozen ingredients only", es: "La comida callejera usa solo ingredientes congelados", de: "Straßenessen verwendet nur gefrorene Zutaten", nl: "Straatvoedsel gebruikt alleen bevroren ingrediënten" }
        ],
        correct: 1,
        explanation: {
          en: "Street food differs from fast food chains by offering unique, often handmade local recipes that reflect cultural traditions, rather than standardized corporate menus, providing more authentic and varied flavors.",
          es: "La comida callejera se diferencia de las cadenas de comida rápida al ofrecer recetas locales únicas y a menudo hechas a mano que reflejan tradiciones culturales, en lugar de menús corporativos estandarizados, proporcionando sabores más auténticos y variados.",
          de: "Straßenessen unterscheidet sich von Fast-Food-Ketten, indem es einzigartige, oft handgemachte lokale Rezepte anbietet, die kulturelle Traditionen widerspiegeln, anstatt standardisierte Unternehmensmenüs, und authentischere und vielfältigere Geschmäcker bietet.",
          nl: "Straatvoedsel verschilt van fastfoodketens door unieke, vaak handgemaakte lokale recepten aan te bieden die culturele tradities weerspiegelen, in plaats van gestandaardiseerde bedrijfsmenu's, waardoor meer authentieke en gevarieerde smaken worden geboden."
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
