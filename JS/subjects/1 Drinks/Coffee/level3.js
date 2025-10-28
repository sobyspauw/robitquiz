// Coffee Quiz - Level 3: Intermediate Coffee Knowledge
(function() {
  const level3 = {
    name: {
      en: "Coffee Level 3",
      es: "Café Nivel 3",
      de: "Kaffee Stufe 3",
      nl: "Koffie Level 3"
    },
    questions: [
      {
        question: {
          en: "What is the 'third wave' coffee movement?",
          es: "¿Qué es el movimiento del café de 'tercera ola'?",
          de: "Was ist die 'Third Wave' Kaffeebewegung?",
          nl: "Wat is de 'derde golf' koffiebeweging?"
        },
        options: [
          { en: "A movement treating coffee as an artisanal product with focus on quality and origin", es: "Un movimiento que trata el café como un producto artesanal con enfoque en calidad y origen", de: "Eine Bewegung, die Kaffee als handwerkliches Produkt mit Fokus auf Qualität und Herkunft behandelt", nl: "Een beweging die koffie behandelt als ambachtelijk product met focus op kwaliteit en herkomst" },
          { en: "A new way to surf while drinking coffee", es: "Una nueva forma de surfear mientras tomas café", de: "Eine neue Art zu surfen beim Kaffeetrinken", nl: "Een nieuwe manier om te surfen tijdens het koffiedrinken" },
          { en: "Coffee served in three cups", es: "Café servido en tres tazas", de: "Kaffee serviert in drei Tassen", nl: "Koffie geserveerd in drie kopjes" },
          { en: "The third time coffee is brewed", es: "La tercera vez que se prepara el café", de: "Das dritte Mal, dass Kaffee gebrüht wird", nl: "De derde keer dat koffie wordt gezet" }
        ],
        correct: 0,
        explanation: {
          en: "Third wave coffee focuses on coffee as an artisanal product, emphasizing quality, direct trade, sustainability, lighter roasts, and the unique characteristics of single-origin beans.",
          es: "El café de tercera ola se centra en el café como producto artesanal, enfatizando la calidad, comercio directo, sostenibilidad, tuestes más claros y las características únicas de granos de origen único.",
          de: "Third Wave Kaffee konzentriert sich auf Kaffee als handwerkliches Produkt und betont Qualität, Direkthandel, Nachhaltigkeit, hellere Röstungen und die einzigartigen Eigenschaften von Single-Origin-Bohnen.",
          nl: "Derde golf koffie richt zich op koffie als ambachtelijk product, met nadruk op kwaliteit, directe handel, duurzaamheid, lichtere brandingen en de unieke kenmerken van single-origin bonen."
        }
      },
      {
        question: {
          en: "What is the ideal water temperature for brewing coffee?",
          es: "¿Cuál es la temperatura ideal del agua para preparar café?",
          de: "Was ist die ideale Wassertemperatur zum Brühen von Kaffee?",
          nl: "Wat is de ideale watertemperatuur voor het zetten van koffie?"
        },
        options: [
          { en: "90-96°C (195-205°F)", es: "90-96°C (195-205°F)", de: "90-96°C (195-205°F)", nl: "90-96°C (195-205°F)" },
          { en: "100°C (212°F) - boiling", es: "100°C (212°F) - hirviendo", de: "100°C (212°F) - kochend", nl: "100°C (212°F) - kokend" },
          { en: "50°C (122°F)", es: "50°C (122°F)", de: "50°C (122°F)", nl: "50°C (122°F)" },
          { en: "20°C (68°F) - room temperature", es: "20°C (68°F) - temperatura ambiente", de: "20°C (68°F) - Raumtemperatur", nl: "20°C (68°F) - kamertemperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "The ideal brewing temperature is 90-96°C (195-205°F). Water that's too hot extracts bitter compounds, while water that's too cool under-extracts, resulting in weak, sour coffee.",
          es: "La temperatura ideal de preparación es 90-96°C (195-205°F). El agua demasiado caliente extrae compuestos amargos, mientras que el agua demasiado fría sub-extrae, resultando en café débil y agrio.",
          de: "Die ideale Brühtemperatur ist 90-96°C (195-205°F). Zu heißes Wasser extrahiert bittere Verbindungen, während zu kühles Wasser unterextrahiert, was zu schwachem, saurem Kaffee führt.",
          nl: "De ideale zettemperatuur is 90-96°C (195-205°F). Water dat te heet is extraheert bittere stoffen, terwijl water dat te koel is onderextraheert, wat resulteert in zwakke, zure koffie."
        }
      },
      {
        question: {
          en: "What is the difference between washed and natural processed coffee?",
          es: "¿Cuál es la diferencia entre café lavado y procesado natural?",
          de: "Was ist der Unterschied zwischen gewaschenem und natürlich verarbeitetem Kaffee?",
          nl: "Wat is het verschil tussen gewassen en natuurlijk verwerkte koffie?"
        },
        options: [
          { en: "Washed removes fruit before drying, natural dries with fruit intact", es: "Lavado remueve la fruta antes de secar, natural seca con la fruta intacta", de: "Gewaschen entfernt Frucht vor dem Trocknen, natürlich trocknet mit intakter Frucht", nl: "Gewassen verwijdert vrucht voor drogen, natuurlijk droogt met vrucht intact" },
          { en: "They are exactly the same", es: "Son exactamente iguales", de: "Sie sind genau gleich", nl: "Ze zijn precies hetzelfde" },
          { en: "Washed coffee is cleaned with soap", es: "Café lavado se limpia con jabón", de: "Gewaschener Kaffee wird mit Seife gereinigt", nl: "Gewassen koffie wordt schoongemaakt met zeep" },
          { en: "Natural coffee grows in forests", es: "Café natural crece en bosques", de: "Natürlicher Kaffee wächst in Wäldern", nl: "Natuurlijke koffie groeit in bossen" }
        ],
        correct: 0,
        explanation: {
          en: "Washed (wet) processing removes the fruit pulp before drying, creating cleaner, brighter flavors. Natural (dry) processing dries the whole cherry with fruit intact, resulting in fruitier, sweeter, more complex flavors.",
          es: "El procesado lavado (húmedo) remueve la pulpa de la fruta antes de secar, creando sabores más limpios y brillantes. El procesado natural (seco) seca la cereza entera con la fruta intacta, resultando en sabores más frutales, dulces y complejos.",
          de: "Gewaschene (nasse) Verarbeitung entfernt das Fruchtfleisch vor dem Trocknen und erzeugt sauberere, hellere Aromen. Natürliche (trockene) Verarbeitung trocknet die ganze Kirsche mit intakter Frucht, was fruchtigere, süßere, komplexere Aromen ergibt.",
          nl: "Gewassen (natte) verwerking verwijdert het vruchtvruchtvlees voor het drogen, wat schonere, heldere smaken creëert. Natuurlijke (droge) verwerking droogt de hele kers met vrucht intact, wat resulteert in fruitigere, zoetere, complexere smaken."
        }
      },
      {
        question: {
          en: "What does 'cupping' mean in coffee terminology?",
          es: "¿Qué significa 'catación' en terminología del café?",
          de: "Was bedeutet 'Cupping' in der Kaffeeterminologie?",
          nl: "Wat betekent 'cupping' in koffieterminologie?"
        },
        options: [
          { en: "Professional tasting method to evaluate coffee quality and flavor", es: "Método de degustación profesional para evaluar calidad y sabor del café", de: "Professionelle Verkostungsmethode zur Bewertung von Kaffeequalität und Geschmack", nl: "Professionele proefmethode om koffiekwaliteit en smaak te evalueren" },
          { en: "Holding a coffee cup", es: "Sostener una taza de café", de: "Eine Kaffeetasse halten", nl: "Een koffiekopje vasthouden" },
          { en: "Making coffee in cups", es: "Hacer café en tazas", de: "Kaffee in Tassen machen", nl: "Koffie maken in kopjes" },
          { en: "Collecting coffee cups", es: "Coleccionar tazas de café", de: "Kaffeetassen sammeln", nl: "Koffiekopjes verzamelen" }
        ],
        correct: 0,
        explanation: {
          en: "Cupping is a standardized method used by coffee professionals to taste and evaluate coffee. Coarsely ground coffee is steeped in hot water, then tasted by slurping to spray the coffee across the palate.",
          es: "La catación es un método estandarizado usado por profesionales del café para degustar y evaluar café. El café molido grueso se empapa en agua caliente, luego se degusta sorbiendo para rociar el café por el paladar.",
          de: "Cupping ist eine standardisierte Methode, die von Kaffeeprofis zum Verkosten und Bewerten von Kaffee verwendet wird. Grob gemahlener Kaffee wird in heißem Wasser gezogen, dann durch Schlürfen verkostet, um den Kaffee über den Gaumen zu sprühen.",
          nl: "Cupping is een gestandaardiseerde methode die door koffieprofessionals wordt gebruikt om koffie te proeven en evalueren. Grof gemalen koffie wordt getrokken in heet water, dan geproefd door te slurpen om de koffie over het gehemelte te sproeien."
        }
      },
      {
        question: {
          en: "What is the golden ratio for brewing coffee?",
          es: "¿Cuál es la proporción dorada para preparar café?",
          de: "Was ist das goldene Verhältnis zum Brühen von Kaffee?",
          nl: "Wat is de gouden ratio voor het zetten van koffie?"
        },
        options: [
          { en: "1:15 to 1:18 (coffee to water by weight)", es: "1:15 a 1:18 (café a agua por peso)", de: "1:15 bis 1:18 (Kaffee zu Wasser nach Gewicht)", nl: "1:15 tot 1:18 (koffie tot water op gewicht)" },
          { en: "1:1 (equal parts)", es: "1:1 (partes iguales)", de: "1:1 (gleiche Teile)", nl: "1:1 (gelijke delen)" },
          { en: "1:100", es: "1:100", de: "1:100", nl: "1:100" },
          { en: "No ratio needed", es: "No se necesita proporción", de: "Kein Verhältnis nötig", nl: "Geen ratio nodig" }
        ],
        correct: 0,
        explanation: {
          en: "The golden ratio is typically 1:15 to 1:18 coffee to water by weight. For example, 15-18 grams of water for every gram of coffee. This can be adjusted based on personal preference.",
          es: "La proporción dorada es típicamente 1:15 a 1:18 de café a agua por peso. Por ejemplo, 15-18 gramos de agua por cada gramo de café. Esto puede ajustarse según la preferencia personal.",
          de: "Das goldene Verhältnis ist typischerweise 1:15 bis 1:18 Kaffee zu Wasser nach Gewicht. Zum Beispiel 15-18 Gramm Wasser für jedes Gramm Kaffee. Dies kann nach persönlicher Vorliebe angepasst werden.",
          nl: "De gouden ratio is typisch 1:15 tot 1:18 koffie tot water op gewicht. Bijvoorbeeld 15-18 gram water voor elke gram koffie. Dit kan worden aangepast op basis van persoonlijke voorkeur."
        }
      },
      {
        question: {
          en: "What is the purpose of blooming when brewing pour-over coffee?",
          es: "¿Cuál es el propósito del 'blooming' al preparar café de vertido?",
          de: "Was ist der Zweck des Bloomings beim Brühen von Pour-Over-Kaffee?",
          nl: "Wat is het doel van blooming bij het zetten van pour-over koffie?"
        },
        options: [
          { en: "To release CO2 and allow better water absorption", es: "Para liberar CO2 y permitir mejor absorción de agua", de: "Um CO2 freizusetzen und bessere Wasserabsorption zu ermöglichen", nl: "Om CO2 vrij te geven en betere waterabsorptie mogelijk te maken" },
          { en: "To make coffee flowers grow", es: "Para hacer crecer flores de café", de: "Um Kaffeeblumen wachsen zu lassen", nl: "Om koffiebloemen te laten groeien" },
          { en: "To cool down the coffee", es: "Para enfriar el café", de: "Um den Kaffee abzukühlen", nl: "Om de koffie af te koelen" },
          { en: "It has no purpose", es: "No tiene propósito", de: "Es hat keinen Zweck", nl: "Het heeft geen doel" }
        ],
        correct: 0,
        explanation: {
          en: "Blooming is the initial 30-45 second stage where you wet the grounds with a small amount of water. This releases trapped CO2 gas from freshly roasted beans, allowing water to extract flavors more evenly during brewing.",
          es: "El blooming es la etapa inicial de 30-45 segundos donde mojas el café molido con una pequeña cantidad de agua. Esto libera gas CO2 atrapado de granos recién tostados, permitiendo que el agua extraiga sabores más uniformemente durante la preparación.",
          de: "Blooming ist die anfängliche 30-45 Sekunden Phase, in der man das Kaffeepulver mit einer kleinen Menge Wasser benetzt. Dies setzt eingeschlossenes CO2-Gas aus frisch gerösteten Bohnen frei und ermöglicht es dem Wasser, Aromen gleichmäßiger beim Brühen zu extrahieren.",
          nl: "Blooming is de initiële 30-45 seconden fase waar je het gemalen koffie nat maakt met een kleine hoeveelheid water. Dit geeft gevangen CO2 gas vrij uit vers gebrande bonen, waardoor water smaken gelijkmatiger kan extraheren tijdens het zetten."
        }
      },
      {
        question: {
          en: "What is a Chemex?",
          es: "¿Qué es un Chemex?",
          de: "Was ist ein Chemex?",
          nl: "Wat is een Chemex?"
        },
        options: [
          { en: "An hourglass-shaped pour-over coffee maker with thick filters", es: "Una cafetera de vertido en forma de reloj de arena con filtros gruesos", de: "Ein sanduhrenförmiger Pour-Over-Kaffeebereiter mit dicken Filtern", nl: "Een zandloper-vormig pour-over koffiezetapparaat met dikke filters" },
          { en: "A type of chemistry experiment", es: "Un tipo de experimento de química", de: "Eine Art Chemie-Experiment", nl: "Een soort scheikundig experiment" },
          { en: "A coffee flavoring syrup", es: "Un jarabe saborizante de café", de: "Ein Kaffee-Aromasirup", nl: "Een koffiesmaaksiroop" },
          { en: "An espresso machine brand", es: "Una marca de máquina de espresso", de: "Eine Espressomaschinen-Marke", nl: "Een espressomachine merk" }
        ],
        correct: 0,
        explanation: {
          en: "A Chemex is an elegant, hourglass-shaped glass coffee maker invented in 1941. It uses thick, bonded paper filters that produce exceptionally clean, bright coffee by removing oils and sediment.",
          es: "Un Chemex es una elegante cafetera de vidrio en forma de reloj de arena inventada en 1941. Usa filtros de papel gruesos y unidos que producen café excepcionalmente limpio y brillante al remover aceites y sedimentos.",
          de: "Ein Chemex ist ein eleganter, sanduhrenförmiger Glas-Kaffeebereiter, der 1941 erfunden wurde. Er verwendet dicke, gebondete Papierfilter, die außergewöhnlich sauberen, hellen Kaffee produzieren, indem sie Öle und Sedimente entfernen.",
          nl: "Een Chemex is een elegante, zandloper-vormige glazen koffiezetapparaat uitgevonden in 1941. Het gebruikt dikke, gebonden papieren filters die uitzonderlijk schone, heldere koffie produceren door oliën en sediment te verwijderen."
        }
      },
      {
        question: {
          en: "What does SCA stand for in the coffee industry?",
          es: "¿Qué significa SCA en la industria del café?",
          de: "Wofür steht SCA in der Kaffeeindustrie?",
          nl: "Waar staat SCA voor in de koffie-industrie?"
        },
        options: [
          { en: "Specialty Coffee Association", es: "Asociación de Café Especial", de: "Specialty Coffee Association", nl: "Specialty Coffee Association" },
          { en: "Strong Coffee Always", es: "Café Fuerte Siempre", de: "Starker Kaffee Immer", nl: "Sterke Koffie Altijd" },
          { en: "Sweet Coffee Aroma", es: "Aroma de Café Dulce", de: "Süßes Kaffee-Aroma", nl: "Zoet Koffie Aroma" },
          { en: "Simple Coffee Art", es: "Arte de Café Simple", de: "Einfache Kaffeekunst", nl: "Simpele Koffie Kunst" }
        ],
        correct: 0,
        explanation: {
          en: "The Specialty Coffee Association (SCA) is a global organization that sets standards for specialty coffee, conducts research, and provides education and certification programs for coffee professionals worldwide.",
          es: "La Asociación de Café Especial (SCA) es una organización global que establece estándares para café especial, realiza investigación y proporciona educación y programas de certificación para profesionales del café en todo el mundo.",
          de: "Die Specialty Coffee Association (SCA) ist eine globale Organisation, die Standards für Spezialitätenkaffee setzt, Forschung betreibt und Bildungs- und Zertifizierungsprogramme für Kaffeeprofis weltweit anbietet.",
          nl: "De Specialty Coffee Association (SCA) is een wereldwijde organisatie die standaarden stelt voor specialty koffie, onderzoek doet en opleidings- en certificeringsprogramma's biedt voor koffieprofessionals wereldwijd."
        }
      },
      {
        question: {
          en: "What is the difference between a lungo and a ristretto?",
          es: "¿Cuál es la diferencia entre un lungo y un ristretto?",
          de: "Was ist der Unterschied zwischen einem Lungo und einem Ristretto?",
          nl: "Wat is het verschil tussen een lungo en een ristretto?"
        },
        options: [
          { en: "Lungo uses more water for a longer shot, ristretto uses less for a shorter shot", es: "Lungo usa más agua para un trago más largo, ristretto usa menos para un trago más corto", de: "Lungo verwendet mehr Wasser für einen längeren Shot, Ristretto weniger für einen kürzeren Shot", nl: "Lungo gebruikt meer water voor een langere shot, ristretto gebruikt minder voor een kortere shot" },
          { en: "They are the same drink", es: "Son la misma bebida", de: "Sie sind das gleiche Getränk", nl: "Ze zijn hetzelfde drankje" },
          { en: "Lungo is cold, ristretto is hot", es: "Lungo es frío, ristretto es caliente", de: "Lungo ist kalt, Ristretto ist heiß", nl: "Lungo is koud, ristretto is warm" },
          { en: "Lungo has milk, ristretto doesn't", es: "Lungo tiene leche, ristretto no", de: "Lungo hat Milch, Ristretto nicht", nl: "Lungo heeft melk, ristretto niet" }
        ],
        correct: 0,
        explanation: {
          en: "A lungo ('long' in Italian) uses more water than espresso, extracting for 45-60 seconds, creating a milder, larger drink. A ristretto ('restricted') uses less water, extracting for 15-20 seconds, making a concentrated, sweeter shot.",
          es: "Un lungo ('largo' en italiano) usa más agua que el espresso, extrayendo por 45-60 segundos, creando una bebida más suave y grande. Un ristretto ('restringido') usa menos agua, extrayendo por 15-20 segundos, haciendo un trago concentrado y dulce.",
          de: "Ein Lungo ('lang' auf Italienisch) verwendet mehr Wasser als Espresso, extrahiert für 45-60 Sekunden und erzeugt ein milderes, größeres Getränk. Ein Ristretto ('eingeschränkt') verwendet weniger Wasser, extrahiert für 15-20 Sekunden und macht einen konzentrierten, süßeren Shot.",
          nl: "Een lungo ('lang' in het Italiaans) gebruikt meer water dan espresso, extraheert gedurende 45-60 seconden, en creëert een milder, groter drankje. Een ristretto ('beperkt') gebruikt minder water, extraheert gedurende 15-20 seconden, wat een geconcentreerde, zoetere shot maakt."
        }
      },
      {
        question: {
          en: "What altitude is considered ideal for growing high-quality Arabica coffee?",
          es: "¿Qué altitud se considera ideal para cultivar café Arábica de alta calidad?",
          de: "Welche Höhe gilt als ideal für den Anbau von hochwertigem Arabica-Kaffee?",
          nl: "Welke hoogte wordt als ideaal beschouwd voor het telen van hoogwaardige Arabica koffie?"
        },
        options: [
          { en: "1200-2000 meters (4000-6500 feet)", es: "1200-2000 metros (4000-6500 pies)", de: "1200-2000 Meter (4000-6500 Fuß)", nl: "1200-2000 meter (4000-6500 voet)" },
          { en: "0-100 meters (sea level)", es: "0-100 metros (nivel del mar)", de: "0-100 Meter (Meeresspiegel)", nl: "0-100 meter (zeeniveau)" },
          { en: "5000+ meters (above snow line)", es: "5000+ metros (sobre línea de nieve)", de: "5000+ Meter (über Schneegrenze)", nl: "5000+ meter (boven sneeuwgrens)" },
          { en: "Altitude doesn't matter", es: "La altitud no importa", de: "Höhe spielt keine Rolle", nl: "Hoogte maakt niet uit" }
        ],
        correct: 0,
        explanation: {
          en: "The best Arabica coffee grows at high altitudes (1200-2000m). Cooler temperatures at elevation slow cherry maturation, allowing beans to develop more complex sugars and flavors, resulting in denser, higher-quality beans.",
          es: "El mejor café Arábica crece en altitudes altas (1200-2000m). Las temperaturas más frías en elevación ralentizan la maduración de la cereza, permitiendo que los granos desarrollen azúcares y sabores más complejos, resultando en granos más densos y de mayor calidad.",
          de: "Der beste Arabica-Kaffee wächst in großen Höhen (1200-2000m). Kühlere Temperaturen in der Höhe verlangsamen die Kirschreifung, sodass Bohnen komplexere Zucker und Aromen entwickeln können, was zu dichteren, qualitativ hochwertigeren Bohnen führt.",
          nl: "De beste Arabica koffie groeit op grote hoogte (1200-2000m). Koelere temperaturen op hoogte vertragen kersen rijping, waardoor bonen complexere suikers en smaken kunnen ontwikkelen, wat resulteert in dichtere, hoogwaardige bonen."
        }
      },
      {
        question: {
          en: "What is the 'bloom' when brewing pour-over coffee?",
          es: "¿Qué es la 'floración' al preparar café de vertido?",
          de: "Was ist die 'Blüte' beim Pour-Over-Kaffee brauen?",
          nl: "Wat is de 'bloei' bij het zetten van pour-over koffie?"
        },
        options: [
          { en: "The initial release of CO2 when hot water first hits the grounds", es: "La liberación inicial de CO2 cuando el agua caliente toca primero los granos", de: "Die anfängliche CO2-Freisetzung wenn heißes Wasser erstmals auf das Pulver trifft", nl: "De initiële afgifte van CO2 wanneer heet water voor het eerst het poeder raakt" },
          { en: "When milk foam blooms in shape", es: "Cuando la espuma de leche florece en forma", de: "Wenn Milchschaum in Form blüht", nl: "Wanneer melkschuim in vorm bloeit" },
          { en: "Adding flowers to coffee", es: "Añadir flores al café", de: "Blumen zum Kaffee hinzufügen", nl: "Bloemen toevoegen aan koffie" },
          { en: "The coffee plant flowering", es: "La planta de café floreciendo", de: "Die Kaffeepflanze blüht", nl: "De koffieplant bloeit" }
        ],
        correct: 0,
        explanation: {
          en: "The bloom is when you pour a small amount of hot water over fresh grounds and wait 30-45 seconds. The coffee releases trapped CO2, causing it to bubble and expand. This allows for better extraction during brewing.",
          es: "La floración es cuando viertes una pequeña cantidad de agua caliente sobre granos frescos y esperas 30-45 segundos. El café libera CO2 atrapado, causando que burbujee y se expanda. Esto permite una mejor extracción durante la preparación.",
          de: "Die Blüte ist, wenn man eine kleine Menge heißes Wasser über frisches Pulver gießt und 30-45 Sekunden wartet. Der Kaffee setzt eingeschlossenes CO2 frei, wodurch er sprudelt und sich ausdehnt. Dies ermöglicht eine bessere Extraktion beim Brühen.",
          nl: "De bloei is wanneer je een kleine hoeveelheid heet water over vers poeder giet en 30-45 seconden wacht. De koffie geeft gevangen CO2 af, waardoor het borrelt en uitzet. Dit zorgt voor betere extractie tijdens het zetten."
        }
      },
      {
        question: {
          en: "What is a cortado?",
          es: "¿Qué es un cortado?",
          de: "Was ist ein Cortado?",
          nl: "Wat is een cortado?"
        },
        options: [
          { en: "Espresso 'cut' with equal amount of warm milk (1:1 ratio)", es: "Espresso 'cortado' con igual cantidad de leche tibia (proporción 1:1)", de: "Espresso 'geschnitten' mit gleicher Menge warmer Milch (1:1 Verhältnis)", nl: "Espresso 'gesneden' met gelijke hoeveelheid warme melk (1:1 verhouding)" },
          { en: "Extra strong espresso", es: "Espresso extra fuerte", de: "Extra starker Espresso", nl: "Extra sterke espresso" },
          { en: "Iced coffee with cream", es: "Café helado con crema", de: "Eiskaffee mit Sahne", nl: "IJskoffie met room" },
          { en: "Coffee with orange juice", es: "Café con jugo de naranja", de: "Kaffee mit Orangensaft", nl: "Koffie met sinaasappelsap" }
        ],
        correct: 0,
        explanation: {
          en: "Cortado means 'cut' in Spanish. It's an espresso cut with an equal amount of warm milk (not steamed or frothed). This creates a smooth drink that reduces acidity while maintaining strong coffee flavor.",
          es: "Cortado significa 'cortado' en español. Es un espresso cortado con una cantidad igual de leche tibia (no al vapor ni espumada). Esto crea una bebida suave que reduce la acidez mientras mantiene un fuerte sabor a café.",
          de: "Cortado bedeutet 'geschnitten' auf Spanisch. Es ist ein Espresso, geschnitten mit einer gleichen Menge warmer Milch (nicht gedämpft oder aufgeschäumt). Dies schafft ein glattes Getränk, das Säure reduziert während starker Kaffeegeschmack erhalten bleibt.",
          nl: "Cortado betekent 'gesneden' in het Spaans. Het is een espresso gesneden met een gelijke hoeveelheid warme melk (niet gestoomd of opgeschuimd). Dit creëert een glad drankje dat zuurgraad vermindert terwijl sterke koffiesmaken behouden blijven."
        }
      },
      {
        question: {
          en: "What is the purpose of tamping espresso?",
          es: "¿Cuál es el propósito de compactar el espresso?",
          de: "Was ist der Zweck des Tampens von Espresso?",
          nl: "Wat is het doel van het tampen van espresso?"
        },
        options: [
          { en: "To compress grounds evenly for consistent water flow", es: "Para comprimir los granos uniformemente para flujo de agua consistente", de: "Um Pulver gleichmäßig zu verdichten für gleichmäßigen Wasserfluss", nl: "Om poeder gelijkmatig samen te drukken voor consistente waterstroom" },
          { en: "To add flavor to coffee", es: "Para añadir sabor al café", de: "Um Geschmack zum Kaffee hinzuzufügen", nl: "Om smaak aan koffie toe te voegen" },
          { en: "To heat up the coffee", es: "Para calentar el café", de: "Um den Kaffee zu erhitzen", nl: "Om de koffie op te warmen" },
          { en: "To remove caffeine", es: "Para eliminar la cafeína", de: "Um Koffein zu entfernen", nl: "Om cafeïne te verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Tamping compresses ground coffee in the portafilter to create an even, compact puck. This ensures water flows through uniformly at 9 bars pressure, extracting flavors evenly and preventing channeling (water finding easy paths).",
          es: "Compactar comprime el café molido en el portafiltro para crear un disco uniforme y compacto. Esto asegura que el agua fluya uniformemente a 9 bares de presión, extrayendo sabores uniformemente y previniendo canales (agua encontrando caminos fáciles).",
          de: "Tampen verdichtet gemahlenen Kaffee im Siebträger, um einen gleichmäßigen, kompakten Puck zu erzeugen. Dies stellt sicher, dass Wasser gleichmäßig bei 9 Bar Druck fließt, Aromen gleichmäßig extrahiert und Channeling (Wasser findet einfache Wege) verhindert.",
          nl: "Tampen drukt gemalen koffie in de portafilter samen om een gelijkmatige, compacte puck te creëren. Dit zorgt ervoor dat water uniform stroomt op 9 bar druk, smaken gelijkmatig extraheert en channeling (water vindt gemakkelijke paden) voorkomt."
        }
      },
      {
        question: {
          en: "What processing method involves fermenting coffee in its own mucilage?",
          es: "¿Qué método de procesamiento implica fermentar café en su propio mucílago?",
          de: "Welche Verarbeitungsmethode beinhaltet die Fermentation von Kaffee in seinem eigenen Schleim?",
          nl: "Welke verwerkingsmethode omvat het fermenteren van koffie in zijn eigen slijm?"
        },
        options: [
          { en: "Honey process (pulped natural)", es: "Proceso honey (natural despulpado)", de: "Honey-Prozess (entpulpt natürlich)", nl: "Honey proces (pulped natural)" },
          { en: "Washed process", es: "Proceso lavado", de: "Gewaschener Prozess", nl: "Gewassen proces" },
          { en: "Dry process", es: "Proceso seco", de: "Trockenprozess", nl: "Droog proces" },
          { en: "Instant process", es: "Proceso instantáneo", de: "Instant-Prozess", nl: "Instant proces" }
        ],
        correct: 0,
        explanation: {
          en: "In honey processing, cherry skin is removed but sticky mucilage (honey-like layer) stays on during drying. This creates sweeter, fruitier coffees with more body than washed but cleaner than natural process.",
          es: "En el procesamiento honey, se elimina la piel de la cereza pero el mucílago pegajoso (capa similar a la miel) se mantiene durante el secado. Esto crea cafés más dulces y afrutados con más cuerpo que el lavado pero más limpios que el proceso natural.",
          de: "Beim Honey-Prozess wird die Kirschschale entfernt, aber klebriger Schleim (honigähnliche Schicht) bleibt während des Trocknens. Dies erzeugt süßere, fruchtigere Kaffees mit mehr Körper als gewaschen aber sauberer als natürlich verarbeitet.",
          nl: "Bij honey verwerking wordt de kers schil verwijderd maar plakkerig slijm (honing-achtige laag) blijft tijdens het drogen. Dit creëert zoetere, fruitigere koffies met meer body dan gewassen maar schoner dan natuurlijk proces."
        }
      },
      {
        question: {
          en: "What is the 'golden cup standard' for coffee brewing?",
          es: "¿Qué es el 'estándar de taza dorada' para preparar café?",
          de: "Was ist der 'Golden Cup Standard' für Kaffeebrühen?",
          nl: "Wat is de 'golden cup standaard' voor koffiezetten?"
        },
        options: [
          { en: "18-22% extraction with 1.15-1.35% TDS", es: "18-22% de extracción con 1.15-1.35% TDS", de: "18-22% Extraktion mit 1,15-1,35% TDS", nl: "18-22% extractie met 1,15-1,35% TDS" },
          { en: "Using gold equipment", es: "Usar equipo de oro", de: "Goldene Ausrüstung verwenden", nl: "Gouden apparatuur gebruiken" },
          { en: "Coffee in gold cups", es: "Café en tazas de oro", de: "Kaffee in goldenen Tassen", nl: "Koffie in gouden kopjes" },
          { en: "Most expensive coffee", es: "Café más caro", de: "Teuerster Kaffee", nl: "Duurste koffie" }
        ],
        correct: 0,
        explanation: {
          en: "The SCA Golden Cup Standard defines optimal brewing: 18-22% of coffee mass extracted, with 1.15-1.35% total dissolved solids (TDS) in the cup. This typically requires 1:15 to 1:17 coffee-to-water ratio.",
          es: "El Estándar de Taza Dorada SCA define la preparación óptima: 18-22% de masa de café extraída, con 1.15-1.35% de sólidos disueltos totales (TDS) en la taza. Esto típicamente requiere proporción de café a agua de 1:15 a 1:17.",
          de: "Der SCA Golden Cup Standard definiert optimales Brühen: 18-22% Kaffeemasse extrahiert, mit 1,15-1,35% gesamt gelöste Feststoffe (TDS) in der Tasse. Dies erfordert typisch 1:15 bis 1:17 Kaffee-zu-Wasser-Verhältnis.",
          nl: "De SCA Golden Cup Standard definieert optimaal zetten: 18-22% van koffie massa geëxtraheerd, met 1,15-1,35% totaal opgeloste vaste stoffen (TDS) in de kop. Dit vereist typisch 1:15 tot 1:17 koffie-naar-water verhouding."
        }
      },
      {
        question: {
          en: "What causes 'coffee staling' after roasting?",
          es: "¿Qué causa el 'envejecimiento del café' después del tostado?",
          de: "Was verursacht 'Kaffee-Alterung' nach dem Rösten?",
          nl: "Wat veroorzaakt 'koffie veroudering' na het branden?"
        },
        options: [
          { en: "Oxidation of oils and loss of CO2/aromatics", es: "Oxidación de aceites y pérdida de CO2/aromáticos", de: "Oxidation von Ölen und Verlust von CO2/Aromastoffen", nl: "Oxidatie van oliën en verlies van CO2/aromaten" },
          { en: "Beans growing mold", es: "Granos desarrollando moho", de: "Bohnen entwickeln Schimmel", nl: "Bonen krijgen schimmel" },
          { en: "Adding too much sugar", es: "Añadir demasiada azúcar", de: "Zu viel Zucker hinzufügen", nl: "Te veel suiker toevoegen" },
          { en: "Beans getting old", es: "Granos envejeciendo", de: "Bohnen werden alt", nl: "Bonen worden oud" }
        ],
        correct: 0,
        explanation: {
          en: "After roasting, coffee stales through oxidation (oxygen reacting with oils creating off-flavors) and degassing (CO2 and aromatics escaping). Coffee tastes best 3-14 days post-roast and should be stored airtight.",
          es: "Después del tostado, el café envejece a través de oxidación (oxígeno reaccionando con aceites creando sabores desagradables) y desgasificación (CO2 y aromáticos escapando). El café sabe mejor 3-14 días post-tostado y debe almacenarse herméticamente.",
          de: "Nach dem Rösten altert Kaffee durch Oxidation (Sauerstoff reagiert mit Ölen und erzeugt Fehlaromen) und Ausgasung (CO2 und Aromastoffe entweichen). Kaffee schmeckt am besten 3-14 Tage nach Röstung und sollte luftdicht gelagert werden.",
          nl: "Na het branden veroudert koffie door oxidatie (zuurstof reageert met oliën en creëert vieze smaken) en ontgassing (CO2 en aromaten ontsnappen). Koffie smaakt het beste 3-14 dagen na branden en moet luchtdicht bewaard worden."
        }
      },
      {
        question: {
          en: "What is a 'red eye' or 'shot in the dark'?",
          es: "¿Qué es un 'ojo rojo' o 'disparo en la oscuridad'?",
          de: "Was ist ein 'Red Eye' oder 'Shot in the Dark'?",
          nl: "Wat is een 'red eye' of 'shot in the dark'?"
        },
        options: [
          { en: "Drip coffee with espresso shot added", es: "Café de goteo con trago de espresso añadido", de: "Filterkaffee mit Espresso-Shot hinzugefügt", nl: "Filterkoffie met espresso shot toegevoegd" },
          { en: "Coffee with red coloring", es: "Café con colorante rojo", de: "Kaffee mit rotem Farbstoff", nl: "Koffie met rode kleurstof" },
          { en: "Coffee in darkness", es: "Café en oscuridad", de: "Kaffee im Dunkeln", nl: "Koffie in duisternis" },
          { en: "Only decaf coffee", es: "Solo café descafeinado", de: "Nur koffeinfreier Kaffee", nl: "Alleen decaf koffie" }
        ],
        correct: 0,
        explanation: {
          en: "A red eye is drip coffee with one or more espresso shots added. Named for bloodshot eyes of tired travelers, it provides intense caffeine boost. Also called 'shot in the dark' or 'hammerhead'.",
          es: "Un ojo rojo es café de goteo con uno o más tragos de espresso añadidos. Nombrado por los ojos inyectados en sangre de viajeros cansados, proporciona impulso intenso de cafeína. También llamado 'disparo en la oscuridad' o 'cabeza de martillo'.",
          de: "Ein Red Eye ist Filterkaffee mit einem oder mehreren Espresso-Shots hinzugefügt. Nach blutunterlaufenen Augen müder Reisender benannt, bietet er intensiven Koffein-Schub. Auch 'Shot in the Dark' oder 'Hammerhead' genannt.",
          nl: "Een red eye is filterkoffie met één of meer espresso shots toegevoegd. Vernoemd naar bloeddoorlopen ogen van vermoeide reizigers, geeft het intense cafeïne boost. Ook wel 'shot in the dark' of 'hammerhead' genoemd."
        }
      },
      {
        question: {
          en: "What is the Maillard reaction in coffee roasting?",
          es: "¿Qué es la reacción de Maillard en el tostado de café?",
          de: "Was ist die Maillard-Reaktion beim Kaffeerösten?",
          nl: "Wat is de Maillard reactie bij koffiebrandingen?"
        },
        options: [
          { en: "Amino acids and sugars react creating brown color and complex flavors", es: "Aminoácidos y azúcares reaccionan creando color marrón y sabores complejos", de: "Aminosäuren und Zucker reagieren und erzeugen braune Farbe und komplexe Aromen", nl: "Aminozuren en suikers reageren en creëren bruine kleur en complexe smaken" },
          { en: "Beans turn liquid", es: "Granos se vuelven líquido", de: "Bohnen werden flüssig", nl: "Bonen worden vloeibaar" },
          { en: "Name of a farmer", es: "Nombre de un agricultor", de: "Name eines Bauern", nl: "Naam van een boer" },
          { en: "Type of machine", es: "Tipo de máquina", de: "Art von Maschine", nl: "Type machine" }
        ],
        correct: 0,
        explanation: {
          en: "The Maillard reaction occurs at 150-200°C during roasting when amino acids and sugars react, creating hundreds of flavor/aroma compounds. This gives coffee its brown color, toasted flavors, and complex taste.",
          es: "La reacción de Maillard ocurre a 150-200°C durante el tostado cuando aminoácidos y azúcares reaccionan, creando cientos de compuestos de sabor/aroma. Esto da al café su color marrón, sabores tostados y sabor complejo.",
          de: "Die Maillard-Reaktion tritt bei 150-200°C während des Röstens auf, wenn Aminosäuren und Zucker reagieren und Hunderte von Geschmacks-/Aromaverbindungen erzeugen. Dies verleiht Kaffee braune Farbe, geröstete Aromen und komplexen Geschmack.",
          nl: "De Maillard reactie vindt plaats op 150-200°C tijdens branden wanneer aminozuren en suikers reageren, wat honderden smaak/aroma verbindingen creëert. Dit geeft koffie zijn bruine kleur, geroosterde smaken en complexe smaak."
        }
      },
      {
        question: {
          en: "What is channeling in espresso extraction?",
          es: "¿Qué es la canalización en la extracción de espresso?",
          de: "Was ist Channeling bei der Espresso-Extraktion?",
          nl: "Wat is channeling bij espresso extractie?"
        },
        options: [
          { en: "Water finds paths of least resistance through coffee causing uneven extraction", es: "Agua encuentra caminos de menor resistencia a través del café causando extracción desigual", de: "Wasser findet Wege des geringsten Widerstands durch Kaffee was ungleichmäßige Extraktion verursacht", nl: "Water vindt paden van minste weerstand door koffie wat ongelijke extractie veroorzaakt" },
          { en: "Adding milk channels", es: "Añadir canales de leche", de: "Milchkanäle hinzufügen", nl: "Melkkanalen toevoegen" },
          { en: "TV channel for coffee", es: "Canal de TV para café", de: "TV-Kanal für Kaffee", nl: "TV-kanaal voor koffie" },
          { en: "Storing in channels", es: "Almacenar en canales", de: "In Kanälen lagern", nl: "Opslaan in kanalen" }
        ],
        correct: 0,
        explanation: {
          en: "Channeling occurs when water creates preferential paths through the puck, usually from uneven tamping or grind. This causes under-extraction in some areas, over-extraction in others, resulting in sour, bitter, or weak espresso.",
          es: "La canalización ocurre cuando el agua crea caminos preferenciales a través del disco, generalmente por compactación desigual o molienda. Esto causa sub-extracción en algunas áreas, sobre-extracción en otras, resultando en espresso agrio, amargo o débil.",
          de: "Channeling tritt auf, wenn Wasser bevorzugte Wege durch den Puck schafft, normalerweise von ungleichmäßigem Tampen oder Mahlung. Dies verursacht Unterextraktion in einigen Bereichen, Überextraktion in anderen, was zu saurem, bitterem oder schwachem Espresso führt.",
          nl: "Channeling treedt op wanneer water voorkeurspaden door de puck creëert, meestal door ongelijkmatig tampen of maling. Dit veroorzaakt onder-extractie in sommige gebieden, over-extractie in anderen, wat resulteert in zure, bittere of zwakke espresso."
        }
      },
      {
        question: {
          en: "What is a peaberry coffee bean?",
          es: "¿Qué es un grano de café peaberry?",
          de: "Was ist eine Peaberry-Kaffeebohne?",
          nl: "Wat is een peaberry koffieboon?"
        },
        options: [
          { en: "Single round bean instead of usual two flat-sided beans in a cherry", es: "Un solo grano redondo en lugar de los dos granos habituales de lados planos en una cereza", de: "Eine einzelne runde Bohne anstelle der üblichen zwei flachseitigen Bohnen in einer Kirsche", nl: "Enkele ronde boon in plaats van gebruikelijke twee platte bonen in een kers" },
          { en: "Bean flavored with peas", es: "Grano con sabor a guisantes", de: "Bohne mit Erbsengeschmack", nl: "Boon met erwten smaak" },
          { en: "Smallest beans", es: "Granos más pequeños", de: "Kleinste Bohnen", nl: "Kleinste bonen" },
          { en: "Grown with peas", es: "Cultivado con guisantes", de: "Mit Erbsen angebaut", nl: "Geteeld met erwten" }
        ],
        correct: 0,
        explanation: {
          en: "Normally each cherry contains two beans facing each other (flat sides). In 5-10% of cherries, only one bean develops into a small, round peaberry. Many believe peaberries have more concentrated, intense flavors.",
          es: "Normalmente cada cereza contiene dos granos enfrentados (lados planos). En 5-10% de cerezas, solo un grano se desarrolla en un pequeño peaberry redondo. Muchos creen que los peaberries tienen sabores más concentrados e intensos.",
          de: "Normalerweise enthält jede Kirsche zwei Bohnen, die einander gegenüberliegen (flache Seiten). In 5-10% der Kirschen entwickelt sich nur eine Bohne zu einer kleinen, runden Peaberry. Viele glauben, dass Peaberries konzentriertere, intensivere Aromen haben.",
          nl: "Normaal bevat elke kers twee bonen die elkaar aankijken (platte zijden). In 5-10% van de kersen ontwikkelt slechts één boon zich tot een kleine, ronde peaberry. Velen geloven dat peaberries meer geconcentreerde, intense smaken hebben."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
