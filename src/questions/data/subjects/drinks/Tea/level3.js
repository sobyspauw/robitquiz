// Quiz Level 3: Drinken - Thee - Tea Processing & Preparation
(function() {
  const level3 = {
    name: {
      en: "Tea Processing & Preparation",
      es: "Procesamiento y Preparación del Té",
      de: "Teeaufbereitung und Zubereitung",
      nl: "Theeverwerking & Bereiding"
    },
    questions: [
      {
        question: {
          en: "What is the CTC processing method?",
          es: "¿Qué es el método de procesamiento CTC?",
          de: "Was ist die CTC-Verarbeitungsmethode?",
          nl: "Wat is de CTC verwerkingsmethode?"
        },
        options: [
          { en: "Cut, Tear, and Curl", es: "Cortar, Rasgar y Curvar", de: "Schneiden, Reißen und Rollen", nl: "Snijden, Scheuren en Krullen" },
          { en: "Cool, Temperature, Control", es: "Control de Temperatura Fresco", de: "Kühle Temperaturkontrolle", nl: "Koele Temperatuur Controle" },
          { en: "Chinese Traditional Cultivation", es: "Cultivo Tradicional Chino", de: "Chinesischer Traditioneller Anbau", nl: "Chinese Traditionele Teelt" },
          { en: "Ceylon Tea Company", es: "Compañía de Té de Ceilán", de: "Ceylon Tee Gesellschaft", nl: "Ceylon Thee Bedrijf" }
        ],
        correct: 0,
        explanation: {
          en: "CTC stands for Cut, Tear, and Curl - a processing method that produces smaller, uniform tea particles ideal for tea bags.",
          es: "CTC significa Cortar, Rasgar y Curvar - un método de procesamiento que produce partículas de té más pequeñas y uniformes ideales para bolsas de té.",
          de: "CTC steht für Schneiden, Reißen und Rollen - eine Verarbeitungsmethode, die kleinere, gleichmäßige Teeteilchen produziert, ideal für Teebeutel.",
          nl: "CTC staat voor Snijden, Scheuren en Krullen - een verwerkingsmethode die kleinere, uniforme theedeeltjes produceert, ideaal voor theezakjes."
        }
      },
      {
        question: {
          en: "What is the optimal water-to-tea ratio for brewing loose leaf tea?",
          es: "¿Cuál es la proporción óptima de agua a té para preparar té de hojas sueltas?",
          de: "Was ist das optimale Wasser-zu-Tee-Verhältnis für die Zubereitung von losem Blatttee?",
          nl: "Wat is de optimale water-thee verhouding voor het zetten van losse bladthee?"
        },
        options: [
          { en: "1 teaspoon per cup", es: "1 cucharadita por taza", de: "1 Teelöffel pro Tasse", nl: "1 theelepel per kopje" },
          { en: "1 tablespoon per cup", es: "1 cucharada por taza", de: "1 Esslöffel pro Tasse", nl: "1 eetlepel per kopje" },
          { en: "2 grams per 100ml", es: "2 gramos por 100ml", de: "2 Gramm pro 100ml", nl: "2 gram per 100ml" },
          { en: "5 grams per 50ml", es: "5 gramos por 50ml", de: "5 Gramm pro 50ml", nl: "5 gram per 50ml" }
        ],
        correct: 2,
        explanation: {
          en: "The standard ratio is about 2 grams of tea per 100ml of water, roughly equivalent to 1 teaspoon per cup for most teas.",
          es: "La proporción estándar es de aproximadamente 2 gramos de té por 100ml de agua, aproximadamente equivalente a 1 cucharadita por taza para la mayoría de los tés.",
          de: "Das Standardverhältnis beträgt etwa 2 Gramm Tee pro 100ml Wasser, etwa gleichwertig mit 1 Teelöffel pro Tasse für die meisten Tees.",
          nl: "De standaard verhouding is ongeveer 2 gram thee per 100ml water, ongeveer gelijk aan 1 theelepel per kopje voor de meeste theeën."
        }
      },
      {
        question: {
          en: "What is the withering process in tea production?",
          es: "¿Qué es el proceso de marchitamiento en la producción de té?",
          de: "Was ist der Welkprozess in der Teeproduktion?",
          nl: "Wat is het verwelkproces in de theeproductie?"
        },
        options: [
          { en: "Removing moisture from fresh leaves", es: "Eliminar la humedad de las hojas frescas", de: "Entfernung von Feuchtigkeit aus frischen Blättern", nl: "Vocht verwijderen uit verse bladeren" },
          { en: "Adding flavor to the tea", es: "Agregar sabor al té", de: "Geschmack zum Tee hinzufügen", nl: "Smaak toevoegen aan de thee" },
          { en: "Grinding the tea leaves", es: "Moler las hojas de té", de: "Mahlen der Teeblätter", nl: "Malen van de theebladeren" },
          { en: "Packaging the finished tea", es: "Empacar el té terminado", de: "Verpackung des fertigen Tees", nl: "Verpakken van de afgewerkte thee" }
        ],
        correct: 0,
        explanation: {
          en: "Withering is the first step in tea processing where fresh leaves lose moisture, becoming soft and pliable for further processing.",
          es: "El marchitamiento es el primer paso en el procesamiento del té donde las hojas frescas pierden humedad, volviéndose suaves y flexibles para un procesamiento adicional.",
          de: "Das Welken ist der erste Schritt in der Teeaufbereitung, bei dem frische Blätter Feuchtigkeit verlieren und weich und biegsam für die weitere Verarbeitung werden.",
          nl: "Verwelken is de eerste stap in theeverwerking waarbij verse bladeren vocht verliezen en zacht en buigzaam worden voor verdere verwerking."
        }
      },
      {
        question: {
          en: "What temperature should water be for brewing white tea?",
          es: "¿Qué temperatura debe tener el agua para preparar té blanco?",
          de: "Welche Temperatur sollte das Wasser für die Zubereitung von weißem Tee haben?",
          nl: "Welke temperatuur moet het water hebben voor het zetten van witte thee?"
        },
        options: [
          { en: "60-70°C (140-158°F)", es: "60-70°C (140-158°F)", de: "60-70°C (140-158°F)", nl: "60-70°C (140-158°F)" },
          { en: "75-85°C (167-185°F)", es: "75-85°C (167-185°F)", de: "75-85°C (167-185°F)", nl: "75-85°C (167-185°F)" },
          { en: "90-95°C (194-203°F)", es: "90-95°C (194-203°F)", de: "90-95°C (194-203°F)", nl: "90-95°C (194-203°F)" },
          { en: "100°C (212°F)", es: "100°C (212°F)", de: "100°C (212°F)", nl: "100°C (212°F)" }
        ],
        correct: 1,
        explanation: {
          en: "White tea should be brewed with water at 75-85°C to preserve its delicate flavors and prevent bitterness.",
          es: "El té blanco debe prepararse con agua a 75-85°C para preservar sus sabores delicados y prevenir la amargura.",
          de: "Weißer Tee sollte mit Wasser bei 75-85°C aufgebrüht werden, um seine delikaten Aromen zu bewahren und Bitterkeit zu vermeiden.",
          nl: "Witte thee moet gezet worden met water van 75-85°C om de delicate smaken te behouden en bitterheid te voorkomen."
        }
      },
      {
        question: {
          en: "What is the rolling process in tea production?",
          es: "¿Qué es el proceso de enrollamiento en la producción de té?",
          de: "Was ist der Rollprozess in der Teeproduktion?",
          nl: "Wat is het rolproces in de theeproductie?"
        },
        options: [
          { en: "Shaping leaves to release essential oils", es: "Dar forma a las hojas para liberar aceites esenciales", de: "Blätter formen um ätherische Öle freizusetzen", nl: "Bladeren vormen om essentiële oliën vrij te maken" },
          { en: "Drying the tea leaves", es: "Secar las hojas de té", de: "Trocknen der Teeblätter", nl: "Drogen van de theebladeren" },
          { en: "Sorting by size", es: "Clasificar por tamaño", de: "Nach Größe sortieren", nl: "Sorteren op grootte" },
          { en: "Adding flavoring", es: "Agregar saborizante", de: "Geschmack hinzufügen", nl: "Aroma toevoegen" }
        ],
        correct: 0,
        explanation: {
          en: "Rolling shapes the tea leaves and breaks cell walls to release essential oils, enzymes, and juices that develop flavor during oxidation.",
          es: "El enrollamiento da forma a las hojas de té y rompe las paredes celulares para liberar aceites esenciales, enzimas y jugos que desarrollan sabor durante la oxidación.",
          de: "Das Rollen formt die Teeblätter und bricht Zellwände auf, um ätherische Öle, Enzyme und Säfte freizusetzen, die während der Oxidation Geschmack entwickeln.",
          nl: "Rollen vormt de theebladeren en breekt celwanden om essentiële oliën, enzymen en sappen vrij te maken die smaak ontwikkelen tijdens oxidatie."
        }
      },
      {
        question: {
          en: "How long should oolong tea typically steep?",
          es: "¿Cuánto tiempo debe reposar típicamente el té oolong?",
          de: "Wie lange sollte Oolong-Tee normalerweise ziehen?",
          nl: "Hoe lang moet oolong thee meestal trekken?"
        },
        options: [
          { en: "30 seconds to 1 minute", es: "30 segundos a 1 minuto", de: "30 Sekunden bis 1 Minute", nl: "30 seconden tot 1 minuut" },
          { en: "3-7 min", es: "3-7 minutos", de: "3-7 Minuten", nl: "3-7 minuten" },
          { en: "10-15 min", es: "10-15 minutos", de: "10-15 Minuten", nl: "10-15 minuten" },
          { en: "20-30 min", es: "20-30 minutos", de: "20-30 Minuten", nl: "20-30 minuten" }
        ],
        correct: 1,
        explanation: {
          en: "Oolong tea should steep for 3-7 minutes, depending on the specific variety and desired strength.",
          es: "El té oolong debe reposar de 3-7 minutos, dependiendo de la variedad específica y la fuerza deseada.",
          de: "Oolong-Tee sollte 3-7 Minuten ziehen, je nach spezifischer Sorte und gewünschter Stärke.",
          nl: "Oolong thee moet 3-7 minuten trekken, afhankelijk van de specifieke variëteit en gewenste sterkte."
        }
      },
      {
        question: {
          en: "What is the pan-firing method in tea processing?",
          es: "¿Qué es el método de tostado en sartén en el procesamiento del té?",
          de: "Was ist die Pfannenröstmethode in der Teeaufbereitung?",
          nl: "Wat is de panroostmethode bij theeverwerking?"
        },
        options: [
          { en: "A method to stop oxidation using heat", es: "Un método para detener la oxidación usando calor", de: "Eine Methode zur Oxidationsstoppung durch Hitze", nl: "Een methode om oxidatie te stoppen met warmte" },
          { en: "A way to add smoky flavor", es: "Una forma de agregar sabor ahumado", de: "Eine Art, rauchigen Geschmack hinzuzufügen", nl: "Een manier om rokerige smaak toe te voegen" },
          { en: "A storage technique", es: "Una técnica de almacenamiento", de: "Eine Lagerungstechnik", nl: "Een opslagtechniek" },
          { en: "A packaging method", es: "Un método de empaque", de: "Eine Verpackungsmethode", nl: "Een verpakkingsmethode" }
        ],
        correct: 0,
        explanation: {
          en: "Pan-firing uses high heat in a wok or pan to halt oxidation in green teas, giving them their characteristic 'fired' or toasted flavor.",
          es: "El tostado en sartén usa calor alto en un wok o sartén para detener la oxidación en tés verdes, dándoles su sabor característico 'tostado'.",
          de: "Pfannenrösten verwendet hohe Hitze in einem Wok oder einer Pfanne, um die Oxidation in grünen Tees zu stoppen und ihnen ihren charakteristischen 'gerösteten' Geschmack zu geben.",
          nl: "Panroosten gebruikt hoge temperatuur in een wok of pan om oxidatie in groene theeën te stoppen, wat hun karakteristieke 'geroosterde' smaak geeft."
        }
      },
      {
        question: {
          en: "What does 'firing' mean in tea production?",
          es: "¿Qué significa 'firing' en la producción de té?",
          de: "Was bedeutet 'Brennen' in der Teeproduktion?",
          nl: "Wat betekent 'vuren' in de theeproductie?"
        },
        options: [
          { en: "Final drying to stop all enzyme activity", es: "Secado final para detener toda actividad enzimática", de: "Abschließende Trocknung zur Stopp aller Enzymaktivität", nl: "Definitieve droging om alle enzymactiviteit te stoppen" },
          { en: "Setting tea on fire", es: "Prender fuego al té", de: "Tee anzünden", nl: "Thee in brand steken" },
          { en: "Rapid cooling process", es: "Proceso de enfriamiento rápido", de: "Schneller Abkühlungsprozess", nl: "Snel afkoelingsproces" },
          { en: "Adding water to tea", es: "Agregar agua al té", de: "Wasser zum Tee hinzufügen", nl: "Water toevoegen aan thee" }
        ],
        correct: 0,
        explanation: {
          en: "Firing is the final drying process that removes remaining moisture and stops all enzyme activity, stabilizing the tea for storage.",
          es: "El firing es el proceso final de secado que elimina la humedad restante y detiene toda actividad enzimática, estabilizando el té para almacenamiento.",
          de: "Brennen ist der abschließende Trocknungsprozess, der verbleibende Feuchtigkeit entfernt und alle Enzymaktivität stoppt, wodurch der Tee für die Lagerung stabilisiert wird.",
          nl: "Vuren is het definitieve droogproces dat resterende vocht verwijdert en alle enzymactiviteit stopt, waardoor de thee gestabiliseerd wordt voor opslag."
        }
      },
      {
        question: {
          en: "What is the gongfu brewing method?",
          es: "¿Qué es el método de preparación gongfu?",
          de: "Was ist die Gongfu-Brühmethode?",
          nl: "Wat is de gongfu zetmethode?"
        },
        options: [
          { en: "Using martial arts while brewing", es: "Usar artes marciales mientras se prepara", de: "Kampfkunst beim Aufbrühen verwenden", nl: "Vechtsport gebruiken tijdens het zetten" },
          { en: "Multiple short steeps with small teapots", es: "Múltiples reposos cortos con teteras pequeñas", de: "Mehrere kurze Ziehzeiten mit kleinen Teekannen", nl: "Meerdere korte trekken met kleine theepotten" },
          { en: "Using only green tea", es: "Usar solo té verde", de: "Nur grünen Tee verwenden", nl: "Alleen groene thee gebruiken" },
          { en: "Brewing with cold water", es: "Preparar con agua fría", de: "Mit kaltem Wasser aufbrühen", nl: "Zetten met koud water" }
        ],
        correct: 1,
        explanation: {
          en: "Gongfu brewing uses multiple short steepings with concentrated tea-to-water ratios, allowing exploration of a tea's evolving flavors.",
          es: "La preparación gongfu usa múltiples reposos cortos con proporciones concentradas de té a agua, permitiendo explorar los sabores evolutivos del té.",
          de: "Gongfu-Brühen verwendet mehrere kurze Ziehzeiten mit konzentrierten Tee-zu-Wasser-Verhältnissen, um die sich entwickelnden Aromen eines Tees zu erkunden.",
          nl: "Gongfu zetten gebruikt meerdere korte trekperiodes met geconcentreerde thee-water verhoudingen, waardoor je de evoluerende smaken van een thee kunt verkennen."
        }
      },
      {
        question: {
          en: "What causes tea to become astringent?",
          es: "¿Qué causa que el té se vuelva astringente?",
          de: "Was verursacht die Herbheit von Tee?",
          nl: "Wat zorgt ervoor dat thee wrang wordt?"
        },
        options: [
          { en: "Too much sugar", es: "Demasiada azúcar", de: "Zu viel Zucker", nl: "Te veel suiker" },
          { en: "High levels of tannins", es: "Altos niveles de taninos", de: "Hohe Tanninwerte", nl: "Hoge tanninegehalten" },
          { en: "Low water temperature", es: "Baja temperatura del agua", de: "Niedrige Wassertemperatur", nl: "Lage watertemperatuur" },
          { en: "Adding milk", es: "Agregar leche", de: "Milch hinzufügen", nl: "Melk toevoegen" }
        ],
        correct: 1,
        explanation: {
          en: "Astringency in tea comes from high levels of tannins, which are released when tea is over-steeped or brewed too hot.",
          es: "La astringencia en el té proviene de altos niveles de taninos, que se liberan cuando el té se deja reposar demasiado tiempo o se prepara muy caliente.",
          de: "Herbheit im Tee kommt von hohen Tanninwerten, die freigesetzt werden, wenn Tee zu lange gezogen oder zu heiß aufgebrüht wird.",
          nl: "Wrangheid in thee komt van hoge tanninegehalten, die vrijkomen wanneer thee te lang trekt of te heet gezet wordt."
        }
      },
      {
        question: {
          en: "What is the purpose of steaming in Japanese green tea production?",
          es: "¿Cuál es el propósito del vapor en la producción de té verde japonés?",
          de: "Was ist der Zweck des Dämpfens bei der japanischen Grünteeproduktion?",
          nl: "Wat is het doel van stomen bij de productie van Japanse groene thee?"
        },
        options: [
          { en: "To add moisture", es: "Para agregar humedad", de: "Um Feuchtigkeit hinzuzufügen", nl: "Om vocht toe te voegen" },
          { en: "To stop oxidation", es: "Para detener la oxidación", de: "Um Oxidation zu stoppen", nl: "Om oxidatie te stoppen" },
          { en: "To increase caffeine", es: "Para aumentar la cafeína", de: "Um Koffein zu erhöhen", nl: "Om cafeïne te verhogen" },
          { en: "To remove bitterness", es: "Para eliminar el amargor", de: "Um Bitterkeit zu entfernen", nl: "Om bitterheid te verwijderen" }
        ],
        correct: 1,
        explanation: {
          en: "Steaming halts oxidation by deactivating enzymes, preserving the green color and fresh flavor characteristic of Japanese green teas.",
          es: "El vapor detiene la oxidación desactivando las enzimas, preservando el color verde y el sabor fresco característico de los tés verdes japoneses.",
          de: "Das Dämpfen stoppt die Oxidation durch Deaktivierung von Enzymen und bewahrt die grüne Farbe und den frischen Geschmack japanischer Grüntees.",
          nl: "Stomen stopt oxidatie door enzymen te deactiveren, waardoor de groene kleur en frisse smaak kenmerkend voor Japanse groene thee behouden blijven."
        }
      },
      {
        question: {
          en: "What oxidation level characterizes oolong tea?",
          es: "¿Qué nivel de oxidación caracteriza al té oolong?",
          de: "Welcher Oxidationsgrad charakterisiert Oolong-Tee?",
          nl: "Welk oxidatieniveau kenmerkt oolong thee?"
        },
        options: [
          { en: "0% (no oxidation)", es: "0% (sin oxidación)", de: "0% (keine Oxidation)", nl: "0% (geen oxidatie)" },
          { en: "10-20% (partially oxidized)", es: "10-20% (parcialmente oxidado)", de: "10-20% (teilweise oxidiert)", nl: "10-20% (gedeeltelijk geoxideerd)" },
          { en: "20-80% (partially oxidized)", es: "20-80% (parcialmente oxidado)", de: "20-80% (teilweise oxidiert)", nl: "20-80% (gedeeltelijk geoxideerd)" },
          { en: "100% (fully oxidized)", es: "100% (completamente oxidado)", de: "100% (vollständig oxidiert)", nl: "100% (volledig geoxideerd)" }
        ],
        correct: 2,
        explanation: {
          en: "Oolong tea is semi-oxidized, typically ranging from 20-80%, creating a spectrum of flavors between green and black tea.",
          es: "El té oolong está semi-oxidado, típicamente oscilando entre 20-80%, creando un espectro de sabores entre té verde y negro.",
          de: "Oolong-Tee ist halbfermentiert, typischerweise zwischen 20-80%, was ein Geschmacksspektrum zwischen grünem und schwarzem Tee schafft.",
          nl: "Oolong thee is semi-geoxideerd, meestal tussen 20-80%, wat een spectrum van smaken creëert tussen groene en zwarte thee."
        }
      },
      {
        question: {
          en: "What is the purpose of 'kill-green' in tea processing?",
          es: "¿Cuál es el propósito de 'matar el verde' en el procesamiento del té?",
          de: "Was ist der Zweck von 'Kill-Green' bei der Teeverarbeitung?",
          nl: "Wat is het doel van 'kill-green' bij theeverwerking?"
        },
        options: [
          { en: "Remove green color", es: "Eliminar el color verde", de: "Grüne Farbe entfernen", nl: "Groene kleur verwijderen" },
          { en: "Halt enzyme activity", es: "Detener la actividad enzimática", de: "Enzymaktivität stoppen", nl: "Enzymactiviteit stoppen" },
          { en: "Add chlorophyll", es: "Agregar clorofila", de: "Chlorophyll hinzufügen", nl: "Chlorofyl toevoegen" },
          { en: "Increase oxidation", es: "Aumentar la oxidación", de: "Oxidation erhöhen", nl: "Oxidatie verhogen" }
        ],
        correct: 1,
        explanation: {
          en: "Kill-green stops enzyme activity through heat application, preventing further oxidation and fixing the tea's characteristics at the desired level.",
          es: "Matar el verde detiene la actividad enzimática mediante aplicación de calor, previniendo mayor oxidación y fijando las características del té al nivel deseado.",
          de: "Kill-Green stoppt die Enzymaktivität durch Wärmeeinwirkung, verhindert weitere Oxidation und fixiert die Tee-Eigenschaften auf dem gewünschten Niveau.",
          nl: "Kill-green stopt enzymactiviteit door warmte toepassing, voorkomt verdere oxidatie en fixeert de thee-eigenschappen op het gewenste niveau."
        }
      },
      {
        question: {
          en: "What is the ideal water hardness for brewing tea?",
          es: "¿Cuál es la dureza del agua ideal para preparar té?",
          de: "Was ist die ideale Wasserhärte zum Teeaufbrühen?",
          nl: "Wat is de ideale waterhardheid voor het zetten van thee?"
        },
        options: [
          { en: "Very hard water (high mineral content)", es: "Agua muy dura (alto contenido mineral)", de: "Sehr hartes Wasser (hoher Mineralgehalt)", nl: "Zeer hard water (hoog mineraalgehalte)" },
          { en: "Moderately soft water (balanced minerals)", es: "Agua moderadamente blanda (minerales equilibrados)", de: "Mäßig weiches Wasser (ausgewogene Mineralien)", nl: "Matig zacht water (gebalanceerde mineralen)" },
          { en: "Distilled water (no minerals)", es: "Agua destilada (sin minerales)", de: "Destilliertes Wasser (keine Mineralien)", nl: "Gedestilleerd water (geen mineralen)" },
          { en: "Saltwater", es: "Agua salada", de: "Salzwasser", nl: "Zout water" }
        ],
        correct: 1,
        explanation: {
          en: "Moderately soft water with balanced mineral content (50-100 ppm) extracts flavors optimally without interfering with tea compounds or creating off-flavors.",
          es: "Agua moderadamente blanda con contenido mineral equilibrado (50-100 ppm) extrae sabores óptimamente sin interferir con los compuestos del té o crear sabores desagradables.",
          de: "Mäßig weiches Wasser mit ausgewogenem Mineralgehalt (50-100 ppm) extrahiert Aromen optimal, ohne Teeverbindungen zu beeinträchtigen oder Fehlaromen zu erzeugen.",
          nl: "Matig zacht water met gebalanceerd mineraalgehalte (50-100 ppm) extraheert smaken optimaal zonder thee-verbindingen te verstoren of afwijkende smaken te creëren."
        }
      },
      {
        question: {
          en: "What does 'scenting' mean in jasmine tea production?",
          es: "¿Qué significa 'perfumar' en la producción de té de jazmín?",
          de: "Was bedeutet 'Beduften' bei der Jasmin-Tee-Produktion?",
          nl: "Wat betekent 'parfumeren' bij de productie van jasmijnthee?"
        },
        options: [
          { en: "Adding artificial jasmine flavor", es: "Agregar sabor artificial de jazmín", de: "Künstliches Jasmin-Aroma hinzufügen", nl: "Kunstmatige jasmijnsmaak toevoegen" },
          { en: "Layering tea with fresh jasmine flowers", es: "Colocar té en capas con flores frescas de jazmín", de: "Tee mit frischen Jasminblüten schichten", nl: "Thee in lagen aanbrengen met verse jasmijnbloemen" },
          { en: "Spraying jasmine oil on leaves", es: "Rociar aceite de jazmín en las hojas", de: "Jasminöl auf Blätter sprühen", nl: "Jasmijnolie op bladeren spuiten" },
          { en: "Boiling jasmine petals", es: "Hervir pétalos de jazmín", de: "Jasminblütenblätter kochen", nl: "Jasmijnblaadjes koken" }
        ],
        correct: 1,
        explanation: {
          en: "Scenting involves layering tea leaves with fresh jasmine flowers (usually at night when they bloom), allowing natural absorption of floral fragrance. This process may be repeated multiple times.",
          es: "Perfumar implica colocar hojas de té en capas con flores frescas de jazmín (usualmente de noche cuando florecen), permitiendo absorción natural de fragancia floral. Este proceso puede repetirse varias veces.",
          de: "Beduften beinhaltet das Schichten von Teeblättern mit frischen Jasminblüten (meist nachts, wenn sie blühen), wodurch natürliche Absorption des Blütendufts ermöglicht wird. Dieser Prozess kann mehrmals wiederholt werden.",
          nl: "Parfumeren houdt in dat theebladeren in lagen worden aangebracht met verse jasmijnbloemen (meestal 's nachts wanneer ze bloeien), waardoor natuurlijke absorptie van bloemengeur mogelijk wordt. Dit proces kan meerdere keren worden herhaald."
        }
      },
      {
        question: {
          en: "What is 'shade-growing' in matcha production?",
          es: "¿Qué es el 'cultivo en sombra' en la producción de matcha?",
          de: "Was ist 'Schattenanbau' bei der Matcha-Produktion?",
          nl: "Wat is 'schaduwteelt' bij matcha productie?"
        },
        options: [
          { en: "Growing tea plants in caves", es: "Cultivar plantas de té en cuevas", de: "Teepflanzen in Höhlen anbauen", nl: "Theeplanten in grotten kweken" },
          { en: "Covering plants to reduce sunlight before harvest", es: "Cubrir plantas para reducir luz solar antes de la cosecha", de: "Pflanzen abdecken, um Sonnenlicht vor der Ernte zu reduzieren", nl: "Planten bedekken om zonlicht voor de oogst te verminderen" },
          { en: "Growing only at night", es: "Cultivar solo de noche", de: "Nur nachts anbauen", nl: "Alleen 's nachts kweken" },
          { en: "Using black soil", es: "Usar tierra negra", de: "Schwarze Erde verwenden", nl: "Zwarte grond gebruiken" }
        ],
        correct: 1,
        explanation: {
          en: "Shade-growing involves covering tea plants 20-30 days before harvest, reducing sunlight to 10-20%. This increases chlorophyll, amino acids (especially L-theanine), and creates matcha's vibrant green color and umami flavor.",
          es: "El cultivo en sombra implica cubrir plantas de té 20-30 días antes de la cosecha, reduciendo luz solar a 10-20%. Esto aumenta clorofila, aminoácidos (especialmente L-teanina), y crea el color verde vibrante y sabor umami del matcha.",
          de: "Schattenanbau beinhaltet das Abdecken von Teepflanzen 20-30 Tage vor der Ernte, wodurch das Sonnenlicht auf 10-20% reduziert wird. Dies erhöht Chlorophyll, Aminosäuren (besonders L-Theanin) und erzeugt Matchas lebendige grüne Farbe und Umami-Geschmack.",
          nl: "Schaduwteelt houdt in dat theeplanten 20-30 dagen voor de oogst worden bedekt, waardoor zonlicht wordt verminderd tot 10-20%. Dit verhoogt chlorofyl, aminozuren (vooral L-theanine), en creëert matcha's levendige groene kleur en umami smaak."
        }
      },
      {
        question: {
          en: "What is the difference between orthodox and CTC processing?",
          es: "¿Cuál es la diferencia entre procesamiento ortodoxo y CTC?",
          de: "Was ist der Unterschied zwischen orthodoxer und CTC-Verarbeitung?",
          nl: "Wat is het verschil tussen orthodoxe en CTC verwerking?"
        },
        options: [
          { en: "Orthodox uses machines, CTC is manual", es: "Ortodoxo usa máquinas, CTC es manual", de: "Orthodox verwendet Maschinen, CTC ist manuell", nl: "Orthodox gebruikt machines, CTC is handmatig" },
          { en: "Orthodox preserves whole leaves, CTC crushes them", es: "Ortodoxo preserva hojas enteras, CTC las tritura", de: "Orthodox bewahrt ganze Blätter, CTC zerkleinert sie", nl: "Orthodox behoudt hele bladeren, CTC verpulvert ze" },
          { en: "Orthodox is faster, CTC is slower", es: "Ortodoxo es más rápido, CTC es más lento", de: "Orthodox ist schneller, CTC ist langsamer", nl: "Orthodox is sneller, CTC is langzamer" },
          { en: "No difference", es: "Sin diferencia", de: "Kein Unterschied", nl: "Geen verschil" }
        ],
        correct: 1,
        explanation: {
          en: "Orthodox processing carefully rolls and preserves whole or large leaf pieces for nuanced flavors. CTC (Cut, Tear, Curl) crushes leaves into uniform granules for quick, strong infusion in tea bags.",
          es: "El procesamiento ortodoxo enrolla cuidadosamente y preserva piezas de hojas enteras o grandes para sabores matizados. CTC (Cortar, Rasgar, Enrollar) tritura hojas en gránulos uniformes para infusión rápida y fuerte en bolsitas de té.",
          de: "Orthodoxe Verarbeitung rollt sorgfältig und bewahrt ganze oder große Blattstücke für nuancierte Aromen. CTC (Cut, Tear, Curl) zerkleinert Blätter zu gleichmäßigen Granulaten für schnelle, kräftige Infusion in Teebeuteln.",
          nl: "Orthodoxe verwerking rolt zorgvuldig en behoudt hele of grote bladstukken voor genuanceerde smaken. CTC (Cut, Tear, Curl) verpulvert bladeren tot uniforme korrels voor snelle, sterke infusie in theezakjes."
        }
      },
      {
        question: {
          en: "What is 'piling' in pu-erh tea production?",
          es: "¿Qué es el 'apilamiento' en la producción de té pu-erh?",
          de: "Was ist 'Häufeln' bei der Pu-Erh-Tee-Produktion?",
          nl: "Wat is 'stapelen' bij pu-erh thee productie?"
        },
        options: [
          { en: "Stacking dried tea for storage", es: "Apilar té seco para almacenamiento", de: "Getrockneten Tee stapeln zur Lagerung", nl: "Gedroogde thee stapelen voor opslag" },
          { en: "Wet-piling for accelerated fermentation", es: "Apilamiento húmedo para fermentación acelerada", de: "Nassaufhäufung für beschleunigte Fermentation", nl: "Nat stapelen voor versnelde fermentatie" },
          { en: "Crushing leaves into piles", es: "Triturar hojas en pilas", de: "Blätter zu Haufen zerkleinern", nl: "Bladeren tot stapels verpulveren" },
          { en: "Sorting by leaf size", es: "Clasificar por tamaño de hoja", de: "Nach Blattgröße sortieren", nl: "Sorteren op bladgrootte" }
        ],
        correct: 1,
        explanation: {
          en: "Piling (wo dui) is a controlled wet-piling process for ripe pu-erh, where moistened tea leaves are heaped and covered, promoting microbial fermentation that develops earthy, mellow flavors in months rather than years.",
          es: "El apilamiento (wo dui) es un proceso controlado de apilamiento húmedo para pu-erh maduro, donde hojas de té humedecidas se apilan y cubren, promoviendo fermentación microbiana que desarrolla sabores terrosos y suaves en meses en lugar de años.",
          de: "Häufeln (wo dui) ist ein kontrollierter Nassaufhäufungsprozess für reifen Pu-Erh, bei dem befeuchtete Teeblätter aufgehäuft und abgedeckt werden, was mikrobielle Fermentation fördert, die erdige, milde Aromen in Monaten statt Jahren entwickelt.",
          nl: "Stapelen (wo dui) is een gecontroleerd nat stapelproces voor rijpe pu-erh, waarbij bevochtigde theebladeren worden opgestapeld en bedekt, wat microbiële fermentatie bevordert die aardse, zachte smaken ontwikkelt in maanden in plaats van jaren."
        }
      },
      {
        question: {
          en: "What temperature is ideal for brewing black tea?",
          es: "¿Qué temperatura es ideal para preparar té negro?",
          de: "Welche Temperatur ist ideal zum Aufbrühen von Schwarztee?",
          nl: "Welke temperatuur is ideaal voor het zetten van zwarte thee?"
        },
        options: [
          { en: "60-70°C", es: "60-70°C", de: "60-70°C", nl: "60-70°C" },
          { en: "75-85°C", es: "75-85°C", de: "75-85°C", nl: "75-85°C" },
          { en: "90-100°C", es: "90-100°C", de: "90-100°C", nl: "90-100°C" },
          { en: "Above 100°C (steam)", es: "Por encima de 100°C (vapor)", de: "Über 100°C (Dampf)", nl: "Boven 100°C (stoom)" }
        ],
        correct: 2,
        explanation: {
          en: "Black tea is fully oxidized and requires 90-100°C (near-boiling) water to fully extract its robust flavors, tannins, and aromatics.",
          es: "El té negro está completamente oxidado y requiere agua de 90-100°C (casi hirviendo) para extraer completamente sus sabores robustos, taninos y aromáticos.",
          de: "Schwarztee ist vollständig oxidiert und benötigt 90-100°C (fast kochendes) Wasser, um seine robusten Aromen, Tannine und Aromastoffe vollständig zu extrahieren.",
          nl: "Zwarte thee is volledig geoxideerd en vereist 90-100°C (bijna kokend) water om zijn robuuste smaken, tannines en aromastoffen volledig te extraheren."
        }
      },
      {
        question: {
          en: "What is 'roasting' in tea processing?",
          es: "¿Qué es el 'tostado' en el procesamiento del té?",
          de: "Was ist 'Rösten' bei der Teeverarbeitung?",
          nl: "Wat is 'roosteren' bij theeverwerking?"
        },
        options: [
          { en: "Burning leaves to ash", es: "Quemar hojas hasta cenizas", de: "Blätter zu Asche verbrennen", nl: "Bladeren tot as verbranden" },
          { en: "Applying charcoal heat to develop flavor", es: "Aplicar calor de carbón para desarrollar sabor", de: "Holzkohlewärme anwenden, um Geschmack zu entwickeln", nl: "Houtskoolwarmte toepassen om smaak te ontwikkelen" },
          { en: "Sun-drying only", es: "Solo secado al sol", de: "Nur Sonnentrocknung", nl: "Alleen zonnedroog" },
          { en: "Freezing tea leaves", es: "Congelar hojas de té", de: "Teeblätter einfrieren", nl: "Theebladeren bevriezen" }
        ],
        correct: 1,
        explanation: {
          en: "Roasting applies controlled heat (often over charcoal) to finished tea, reducing moisture, enhancing storage stability, and developing toasted, nutty, or caramelized flavor notes.",
          es: "El tostado aplica calor controlado (a menudo sobre carbón) al té terminado, reduciendo humedad, mejorando estabilidad de almacenamiento, y desarrollando notas de sabor tostado, a nuez o caramelizado.",
          de: "Rösten wendet kontrollierte Wärme (oft über Holzkohle) auf fertigen Tee an, reduziert Feuchtigkeit, verbessert Lagerstabilität und entwickelt geröstete, nussige oder karamellisierte Geschmacksnoten.",
          nl: "Roosteren past gecontroleerde warmte (vaak boven houtskool) toe op afgewerkte thee, vermindert vocht, verbetert opslagstabiliteit en ontwikkelt geroosterde, nootachtige of gekarameliseerde smaaknotities."
        }
      },
      {
        question: {
          en: "What does 'plucking standard' refer to?",
          es: "¿A qué se refiere el 'estándar de recolección'?",
          de: "Worauf bezieht sich der 'Pflückstandard'?",
          nl: "Waar verwijst 'plukstandaard' naar?"
        },
        options: [
          { en: "The time of day tea is picked", es: "La hora del día en que se recoge el té", de: "Die Tageszeit, zu der Tee gepflückt wird", nl: "Het tijdstip van de dag waarop thee wordt geplukt" },
          { en: "Which leaves and buds are harvested", es: "Qué hojas y brotes se cosechan", de: "Welche Blätter und Knospen geerntet werden", nl: "Welke bladeren en knoppen worden geoogst" },
          { en: "The quality of harvesting tools", es: "La calidad de las herramientas de cosecha", de: "Die Qualität der Erntewerkzeuge", nl: "De kwaliteit van oogstgereedschap" },
          { en: "The worker's experience level", es: "El nivel de experiencia del trabajador", de: "Das Erfahrungsniveau des Arbeiters", nl: "Het ervaringsniveau van de werker" }
        ],
        correct: 1,
        explanation: {
          en: "Plucking standard defines which leaves and buds are harvested (e.g., 'two leaves and a bud', 'fine plucking', 'coarse plucking'), directly affecting tea quality and character.",
          es: "El estándar de recolección define qué hojas y brotes se cosechan (p. ej., 'dos hojas y un brote', 'recolección fina', 'recolección gruesa'), afectando directamente la calidad y carácter del té.",
          de: "Der Pflückstandard definiert, welche Blätter und Knospen geerntet werden (z.B. 'zwei Blätter und eine Knospe', 'feine Pflückung', 'grobe Pflückung'), was direkt Teequalität und Charakter beeinflusst.",
          nl: "Plukstandaard definieert welke bladeren en knoppen worden geoogst (bijv. 'twee bladeren en een knop', 'fijn plukken', 'grof plukken'), wat direct theekwaliteit en karakter beïnvloedt."
        }
      },
      {
        question: {
          en: "What is 'yellowing' in yellow tea production?",
          es: "¿Qué es el 'amarilleamiento' en la producción de té amarillo?",
          de: "Was ist 'Vergilben' bei der Gelbtee-Produktion?",
          nl: "Wat is 'vergeling' bij gele thee productie?"
        },
        options: [
          { en: "Oxidation in sunlight", es: "Oxidación a la luz solar", de: "Oxidation im Sonnenlicht", nl: "Oxidatie in zonlicht" },
          { en: "Wrapping warm leaves to gently oxidize", es: "Envolver hojas tibias para oxidar suavemente", de: "Warme Blätter einwickeln, um sanft zu oxidieren", nl: "Warme bladeren inwikkelen om zachtjes te oxideren" },
          { en: "Adding yellow dye", es: "Agregar colorante amarillo", de: "Gelben Farbstoff hinzufügen", nl: "Gele kleurstof toevoegen" },
          { en: "Fermenting with bacteria", es: "Fermentar con bacterias", de: "Mit Bakterien fermentieren", nl: "Fermenteren met bacteriën" }
        ],
        correct: 1,
        explanation: {
          en: "Yellowing (men huan) involves wrapping warm, damp tea leaves in cloth or paper, allowing gentle oxidation and enzymatic changes that create yellow tea's mellow, sweet character.",
          es: "El amarilleamiento (men huan) implica envolver hojas de té tibias y húmedas en tela o papel, permitiendo oxidación suave y cambios enzimáticos que crean el carácter suave y dulce del té amarillo.",
          de: "Vergilben (men huan) beinhaltet das Einwickeln warmer, feuchter Teeblätter in Tuch oder Papier, was sanfte Oxidation und enzymatische Veränderungen ermöglicht, die den milden, süßen Charakter von Gelbtee erzeugen.",
          nl: "Vergeling (men huan) houdt in dat warme, vochtige theebladeren in doek of papier worden gewikkeld, wat zachte oxidatie en enzymatische veranderingen mogelijk maakt die het zachte, zoete karakter van gele thee creëren."
        }
      },
      {
        question: {
          en: "What is the purpose of 'sorting' or grading tea?",
          es: "¿Cuál es el propósito de 'clasificar' o graduar el té?",
          de: "Was ist der Zweck des 'Sortierens' oder Gradierens von Tee?",
          nl: "Wat is het doel van 'sorteren' of graderen van thee?"
        },
        options: [
          { en: "Separate by leaf size and quality", es: "Separar por tamaño y calidad de hoja", de: "Nach Blattgröße und Qualität trennen", nl: "Scheiden op bladgrootte en kwaliteit" },
          { en: "Mix different batches", es: "Mezclar diferentes lotes", de: "Verschiedene Chargen mischen", nl: "Verschillende batches mengen" },
          { en: "Add flavor", es: "Agregar sabor", de: "Geschmack hinzufügen", nl: "Smaak toevoegen" },
          { en: "Remove caffeine", es: "Eliminar cafeína", de: "Koffein entfernen", nl: "Cafeïne verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Sorting separates tea by leaf size, appearance, and quality (e.g., whole leaf, broken, fannings, dust), ensuring consistency and determining market grade and price.",
          es: "La clasificación separa el té por tamaño, apariencia y calidad de hoja (p. ej., hoja entera, rota, fannings, polvo), asegurando consistencia y determinando grado de mercado y precio.",
          de: "Sortieren trennt Tee nach Blattgröße, Aussehen und Qualität (z.B. ganzes Blatt, gebrochen, Fannings, Staub), gewährleistet Konsistenz und bestimmt Marktgrad und Preis.",
          nl: "Sorteren scheidt thee op bladgrootte, uiterlijk en kwaliteit (bijv. heel blad, gebroken, fannings, stof), zorgt voor consistentie en bepaalt marktgraad en prijs."
        }
      },
      {
        question: {
          en: "What effect does water temperature have on caffeine extraction?",
          es: "¿Qué efecto tiene la temperatura del agua en la extracción de cafeína?",
          de: "Welchen Effekt hat die Wassertemperatur auf die Koffeinextraktion?",
          nl: "Welk effect heeft watertemperatuur op cafeïne-extractie?"
        },
        options: [
          { en: "Higher temperature extracts more caffeine", es: "Mayor temperatura extrae más cafeína", de: "Höhere Temperatur extrahiert mehr Koffein", nl: "Hogere temperatuur extraheert meer cafeïne" },
          { en: "Lower temperature extracts more caffeine", es: "Menor temperatura extrae más cafeína", de: "Niedrigere Temperatur extrahiert mehr Koffein", nl: "Lagere temperatuur extraheert meer cafeïne" },
          { en: "Temperature has no effect", es: "La temperatura no tiene efecto", de: "Temperatur hat keinen Effekt", nl: "Temperatuur heeft geen effect" },
          { en: "Only time affects caffeine extraction", es: "Solo el tiempo afecta la extracción de cafeína", de: "Nur Zeit beeinflusst Koffeinextraktion", nl: "Alleen tijd beïnvloedt cafeïne-extractie" }
        ],
        correct: 0,
        explanation: {
          en: "Higher water temperatures extract caffeine more efficiently and quickly. Brewing at 90-100°C extracts significantly more caffeine than lower temperatures like 60-70°C.",
          es: "Temperaturas más altas del agua extraen cafeína más eficientemente y rápidamente. Preparar a 90-100°C extrae significativamente más cafeína que temperaturas más bajas como 60-70°C.",
          de: "Höhere Wassertemperaturen extrahieren Koffein effizienter und schneller. Aufbrühen bei 90-100°C extrahiert deutlich mehr Koffein als niedrigere Temperaturen wie 60-70°C.",
          nl: "Hogere watertemperaturen extraheren cafeïne efficiënter en sneller. Zetten bij 90-100°C extraheert aanzienlijk meer cafeïne dan lagere temperaturen zoals 60-70°C."
        }
      },
      {
        question: {
          en: "What is 'bruising' in oolong tea processing?",
          es: "¿Qué es el 'magullado' en el procesamiento de té oolong?",
          de: "Was ist 'Quetschen' bei der Oolong-Tee-Verarbeitung?",
          nl: "Wat is 'kneuzen' bij oolong thee verwerking?"
        },
        options: [
          { en: "Removing damaged leaves", es: "Eliminar hojas dañadas", de: "Beschädigte Blätter entfernen", nl: "Beschadigde bladeren verwijderen" },
          { en: "Gently shaking/tossing leaves to promote edge oxidation", es: "Agitar/voltear suavemente hojas para promover oxidación en bordes", de: "Blätter sanft schütteln/werfen, um Randoxidation zu fördern", nl: "Bladeren zachtjes schudden/gooien om randoxidatie te bevorderen" },
          { en: "Crushing leaves completely", es: "Triturar hojas completamente", de: "Blätter vollständig zerkleinern", nl: "Bladeren volledig verpulveren" },
          { en: "Freezing tea leaves", es: "Congelar hojas de té", de: "Teeblätter einfrieren", nl: "Theebladeren bevriezen" }
        ],
        correct: 1,
        explanation: {
          en: "Bruising involves gently shaking, tossing, or tumbling withered leaves to break cell walls along edges, promoting controlled oxidation that creates oolong's characteristic 'green leaf with red edges'.",
          es: "El magullado implica agitar, voltear o voltear suavemente hojas marchitas para romper paredes celulares en bordes, promoviendo oxidación controlada que crea la característica 'hoja verde con bordes rojos' del oolong.",
          de: "Quetschen beinhaltet sanftes Schütteln, Werfen oder Wälzen verwelkter Blätter, um Zellwände entlang der Ränder zu brechen und kontrollierte Oxidation zu fördern, die Oolongs charakteristisches 'grünes Blatt mit roten Rändern' erzeugt.",
          nl: "Kneuzen houdt in dat verwelkte bladeren zachtjes worden geschud, gegooid of gekanteld om celwanden langs randen te breken, wat gecontroleerde oxidatie bevordert die oolongs kenmerkende 'groen blad met rode randen' creëert."
        }
      },
      {
        question: {
          en: "What is the ideal storage humidity for tea?",
          es: "¿Cuál es la humedad de almacenamiento ideal para el té?",
          de: "Was ist die ideale Lagerfeuchtigkeit für Tee?",
          nl: "Wat is de ideale opslagvochtigheid voor thee?"
        },
        options: [
          { en: "80-90% (very humid)", es: "80-90% (muy húmedo)", de: "80-90% (sehr feucht)", nl: "80-90% (zeer vochtig)" },
          { en: "50-60% (moderate)", es: "50-60% (moderado)", de: "50-60% (mäßig)", nl: "50-60% (matig)" },
          { en: "20-30% (dry)", es: "20-30% (seco)", de: "20-30% (trocken)", nl: "20-30% (droog)" },
          { en: "0% (completely dry)", es: "0% (completamente seco)", de: "0% (völlig trocken)", nl: "0% (volledig droog)" }
        ],
        correct: 1,
        explanation: {
          en: "Tea should be stored at 50-60% relative humidity to prevent moisture absorption (which causes mold and degradation) while avoiding excessive dryness that can make leaves brittle.",
          es: "El té debe almacenarse a 50-60% de humedad relativa para prevenir absorción de humedad (que causa moho y degradación) mientras se evita sequedad excesiva que puede hacer las hojas quebradizas.",
          de: "Tee sollte bei 50-60% relativer Luftfeuchtigkeit gelagert werden, um Feuchtigkeitsaufnahme (die Schimmel und Abbau verursacht) zu verhindern, während übermäßige Trockenheit vermieden wird, die Blätter spröde machen kann.",
          nl: "Thee moet worden opgeslagen bij 50-60% relatieve vochtigheid om vochtopname (die schimmel en degradatie veroorzaakt) te voorkomen, terwijl overmatige droogte wordt vermeden die bladeren bros kan maken."
        }
      },
      {
        question: {
          en: "What is 'fixation' in tea processing?",
          es: "¿Qué es la 'fijación' en el procesamiento del té?",
          de: "Was ist 'Fixierung' bei der Teeverarbeitung?",
          nl: "Wat is 'fixatie' bij theeverwerking?"
        },
        options: [
          { en: "Packaging tea in boxes", es: "Empaquetar té en cajas", de: "Tee in Schachteln verpacken", nl: "Thee in dozen verpakken" },
          { en: "Heat treatment to halt oxidation", es: "Tratamiento térmico para detener oxidación", de: "Wärmebehandlung zum Stoppen der Oxidation", nl: "Warmtebehandeling om oxidatie te stoppen" },
          { en: "Adding preservatives", es: "Agregar conservantes", de: "Konservierungsstoffe hinzufügen", nl: "Conserveermiddelen toevoegen" },
          { en: "Compressing tea into cakes", es: "Comprimir té en pasteles", de: "Tee zu Kuchen pressen", nl: "Thee tot koeken persen" }
        ],
        correct: 1,
        explanation: {
          en: "Fixation (also called 'kill-green') uses heat to deactivate enzymes responsible for oxidation, fixing the tea at its desired oxidation level and preventing further chemical changes.",
          es: "La fijación (también llamada 'matar el verde') usa calor para desactivar enzimas responsables de la oxidación, fijando el té en su nivel de oxidación deseado y previniendo más cambios químicos.",
          de: "Fixierung (auch 'Kill-Green' genannt) verwendet Wärme, um Enzyme zu deaktivieren, die für Oxidation verantwortlich sind, fixiert den Tee auf seinem gewünschten Oxidationsniveau und verhindert weitere chemische Veränderungen.",
          nl: "Fixatie (ook wel 'kill-green' genoemd) gebruikt warmte om enzymen verantwoordelijk voor oxidatie te deactiveren, fixeert de thee op het gewenste oxidatieniveau en voorkomt verdere chemische veranderingen."
        }
      },
      {
        question: {
          en: "What is 'needle' tea referring to?",
          es: "¿A qué se refiere el té 'aguja'?",
          de: "Worauf bezieht sich 'Nadel'-Tee?",
          nl: "Waar verwijst 'naald' thee naar?"
        },
        options: [
          { en: "Tea brewed with needles", es: "Té preparado con agujas", de: "Mit Nadeln aufgebrühter Tee", nl: "Thee gezet met naalden" },
          { en: "Tea with long, thin, pointed leaf shape", es: "Té con forma de hoja larga, delgada y puntiaguda", de: "Tee mit langer, dünner, spitzer Blattform", nl: "Thee met lange, dunne, puntige bladvorm" },
          { en: "Tea that removes toxins", es: "Té que elimina toxinas", de: "Tee, der Toxine entfernt", nl: "Thee die giftige stoffen verwijdert" },
          { en: "Tea made from pine needles", es: "Té hecho de agujas de pino", de: "Tee aus Kiefernnadeln", nl: "Thee gemaakt van dennennaalden" }
        ],
        correct: 1,
        explanation: {
          en: "Needle tea describes teas with long, thin, pointed leaves resembling needles, such as Silver Needle (Bai Hao Yin Zhen) white tea or certain green teas processed into needle-like shapes.",
          es: "El té aguja describe tés con hojas largas, delgadas y puntiagudas que se asemejan a agujas, como el té blanco Silver Needle (Bai Hao Yin Zhen) o ciertos tés verdes procesados en formas de aguja.",
          de: "Nadeltee beschreibt Tees mit langen, dünnen, spitzen Blättern, die Nadeln ähneln, wie Silver Needle (Bai Hao Yin Zhen) Weißtee oder bestimmte Grüntees, die zu nadelartigen Formen verarbeitet werden.",
          nl: "Naaldthee beschrijft theeën met lange, dunne, puntige bladeren die op naalden lijken, zoals Silver Needle (Bai Hao Yin Zhen) witte thee of bepaalde groene theeën verwerkt in naaldachtige vormen."
        }
      },
      {
        question: {
          en: "What is 'rinsing' or 'awakening' the tea?",
          es: "¿Qué es 'enjuagar' o 'despertar' el té?",
          de: "Was ist das 'Spülen' oder 'Aufwecken' des Tees?",
          nl: "Wat is 'spoelen' of 'wekken' van thee?"
        },
        options: [
          { en: "Washing dirty tea leaves", es: "Lavar hojas de té sucias", de: "Schmutzige Teeblätter waschen", nl: "Vuile theebladeren wassen" },
          { en: "Brief initial infusion discarded before drinking", es: "Infusión inicial breve descartada antes de beber", de: "Kurze anfängliche Infusion vor dem Trinken verworfen", nl: "Korte initiële infusie weggegooid voor het drinken" },
          { en: "Adding cold water first", es: "Agregar agua fría primero", de: "Zuerst kaltes Wasser hinzufügen", nl: "Eerst koud water toevoegen" },
          { en: "Stirring tea vigorously", es: "Revolver té vigorosamente", de: "Tee kräftig umrühren", nl: "Thee krachtig roeren" }
        ],
        correct: 1,
        explanation: {
          en: "Rinsing involves a quick 5-10 second infusion that's discarded, 'awakening' compressed or aged teas, removing dust, and preparing leaves to unfurl for subsequent infusions.",
          es: "Enjuagar implica una infusión rápida de 5-10 segundos que se descarta, 'despertando' tés comprimidos o envejecidos, eliminando polvo y preparando hojas para desplegarse para infusiones posteriores.",
          de: "Spülen beinhaltet eine schnelle 5-10 Sekunden Infusion, die verworfen wird, 'weckt' komprimierte oder gealterte Tees auf, entfernt Staub und bereitet Blätter vor, sich für nachfolgende Infusionen zu entfalten.",
          nl: "Spoelen houdt een snelle 5-10 seconden infusie in die wordt weggegooid, 'wekt' gecomprimeerde of oude theeën, verwijdert stof en bereidt bladeren voor om te ontvouwen voor volgende infusies."
        }
      },
      {
        question: {
          en: "What is 'shaping' in tea processing?",
          es: "¿Qué es el 'moldeado' en el procesamiento del té?",
          de: "Was ist 'Formen' bei der Teeverarbeitung?",
          nl: "Wat is 'vormen' bij theeverwerking?"
        },
        options: [
          { en: "Cutting leaves into geometric shapes", es: "Cortar hojas en formas geométricas", de: "Blätter in geometrische Formen schneiden", nl: "Bladeren in geometrische vormen snijden" },
          { en: "Rolling/twisting leaves into desired forms", es: "Enrollar/torcer hojas en formas deseadas", de: "Blätter in gewünschte Formen rollen/drehen", nl: "Bladeren in gewenste vormen rollen/draaien" },
          { en: "Adding artificial shapes", es: "Agregar formas artificiales", de: "Künstliche Formen hinzufügen", nl: "Kunstmatige vormen toevoegen" },
          { en: "Flattening all leaves", es: "Aplanar todas las hojas", de: "Alle Blätter flach drücken", nl: "Alle bladeren plat drukken" }
        ],
        correct: 1,
        explanation: {
          en: "Shaping involves rolling, twisting, curling, or otherwise manipulating processed leaves into characteristic forms (e.g., twisted, curled, pellet, needle) that affect appearance, brewing, and flavor release.",
          es: "El moldeado implica enrollar, torcer, rizar o manipular de otra manera hojas procesadas en formas características (p. ej., retorcido, rizado, pellet, aguja) que afectan apariencia, preparación y liberación de sabor.",
          de: "Formen beinhaltet Rollen, Drehen, Kräuseln oder anderweitiges Manipulieren verarbeiteter Blätter in charakteristische Formen (z.B. gedreht, gelockt, Pellet, Nadel), die Aussehen, Aufbrühen und Geschmacksfreisetzung beeinflussen.",
          nl: "Vormen houdt in dat verwerkte bladeren worden gerold, gedraaid, gekruld of anderszins gemanipuleerd in karakteristieke vormen (bijv. gedraaid, gekruld, pellet, naald) die uiterlijk, zetten en smaakafgifte beïnvloeden."
        }
      },
      {
        question: {
          en: "What is 'compression' in tea production?",
          es: "¿Qué es la 'compresión' en la producción de té?",
          de: "Was ist 'Kompression' bei der Teeproduktion?",
          nl: "Wat is 'compressie' bij thee productie?"
        },
        options: [
          { en: "Pressing tea into cakes, bricks, or shapes", es: "Prensar té en pasteles, ladrillos o formas", de: "Tee zu Kuchen, Ziegeln oder Formen pressen", nl: "Thee persen tot koeken, stenen of vormen" },
          { en: "Vacuum-sealing tea bags", es: "Sellado al vacío de bolsas de té", de: "Vakuumversiegelung von Teebeuteln", nl: "Vacuümverzegeling van theezakjes" },
          { en: "Crushing leaves to powder", es: "Triturar hojas a polvo", de: "Blätter zu Pulver zerkleinern", nl: "Bladeren tot poeder verpulveren" },
          { en: "Removing air from packaging", es: "Eliminar aire del empaque", de: "Luft aus der Verpackung entfernen", nl: "Lucht uit verpakking verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Compression presses processed tea into dense forms (cakes, bricks, tuos, mushrooms) for easier storage, transport, and aging, especially common with pu-erh and some dark teas.",
          es: "La compresión prensa té procesado en formas densas (pasteles, ladrillos, tuos, hongos) para almacenamiento, transporte y envejecimiento más fáciles, especialmente común con pu-erh y algunos tés oscuros.",
          de: "Kompression presst verarbeiteten Tee in dichte Formen (Kuchen, Ziegel, Tuos, Pilze) für einfachere Lagerung, Transport und Alterung, besonders üblich bei Pu-Erh und einigen dunklen Tees.",
          nl: "Compressie perst verwerkte thee in dichte vormen (koeken, stenen, tuos, paddenstoelen) voor gemakkelijkere opslag, transport en veroudering, vooral gebruikelijk bij pu-erh en sommige donkere theeën."
        }
      },
      {
        question: {
          en: "What is 'creaming down' in tea?",
          es: "¿Qué es el 'cremado' en el té?",
          de: "Was ist 'Aufrahmen' bei Tee?",
          nl: "Wat is 'opromen' bij thee?"
        },
        options: [
          { en: "Adding cream to tea", es: "Agregar crema al té", de: "Sahne zum Tee hinzufügen", nl: "Room aan thee toevoegen" },
          { en: "Cloudiness when tea cools due to tannin-caffeine complexes", es: "Turbidez cuando el té se enfría debido a complejos tanino-cafeína", de: "Trübung beim Abkühlen von Tee aufgrund von Tannin-Koffein-Komplexen", nl: "Troebelheid wanneer thee afkoelt door tannine-cafeïne complexen" },
          { en: "Whipping tea into foam", es: "Batir té en espuma", de: "Tee zu Schaum schlagen", nl: "Thee tot schuim kloppen" },
          { en: "Fermentation process", es: "Proceso de fermentación", de: "Fermentationsprozess", nl: "Fermentatieproces" }
        ],
        correct: 1,
        explanation: {
          en: "Creaming down occurs when cooled black tea becomes cloudy due to tannin-caffeine complexes precipitating. This is reversible upon reheating and indicates high-quality, fresh tea with abundant polyphenols.",
          es: "El cremado ocurre cuando el té negro enfriado se vuelve turbio debido a que los complejos tanino-cafeína precipitan. Esto es reversible al recalentar e indica té fresco de alta calidad con abundantes polifenoles.",
          de: "Aufrahmen tritt auf, wenn abgekühlter Schwarztee aufgrund von ausfallenden Tannin-Koffein-Komplexen trüb wird. Dies ist beim Wiedererhitzen reversibel und weist auf hochwertigen, frischen Tee mit reichlich Polyphenolen hin.",
          nl: "Opromen treedt op wanneer afgekoelde zwarte thee troebel wordt door precipiterende tannine-cafeïne complexen. Dit is omkeerbaar bij opwarmen en duidt op hoogwaardige, verse thee met overvloedige polyfenolen."
        }
      },
      {
        question: {
          en: "What is 'tippy' tea?",
          es: "¿Qué es el té 'tippy'?",
          de: "Was ist 'Tippy'-Tee?",
          nl: "Wat is 'tippy' thee?"
        },
        options: [
          { en: "Tea that makes you dizzy", es: "Té que te marea", de: "Tee, der schwindelig macht", nl: "Thee die je duizelig maakt" },
          { en: "Tea with many golden or silver leaf tips", es: "Té con muchas puntas de hoja doradas o plateadas", de: "Tee mit vielen goldenen oder silbernen Blattspitzen", nl: "Thee met veel gouden of zilveren bladpunten" },
          { en: "Tea served at high temperatures", es: "Té servido a altas temperaturas", de: "Tee bei hohen Temperaturen serviert", nl: "Thee geserveerd bij hoge temperaturen" },
          { en: "Tea with extra caffeine", es: "Té con cafeína extra", de: "Tee mit extra Koffein", nl: "Thee met extra cafeïne" }
        ],
        correct: 1,
        explanation: {
          en: "Tippy tea contains abundant leaf tips (young buds), often appearing golden or silver, indicating high quality with sweet, delicate flavors. Common in premium Darjeeling, Assam, and white teas.",
          es: "El té tippy contiene abundantes puntas de hoja (brotes jóvenes), a menudo apareciendo dorados o plateados, indicando alta calidad con sabores dulces y delicados. Común en Darjeeling premium, Assam y tés blancos.",
          de: "Tippy-Tee enthält reichlich Blattspitzen (junge Knospen), die oft golden oder silbern erscheinen, was hohe Qualität mit süßen, zarten Aromen anzeigt. Üblich in Premium-Darjeeling, Assam und Weißtees.",
          nl: "Tippy thee bevat overvloedige bladpunten (jonge knoppen), vaak goudkleurig of zilverkleurig, wat duidt op hoge kwaliteit met zoete, delicate smaken. Gebruikelijk in premium Darjeeling, Assam en witte theeën."
        }
      },
      {
        question: {
          en: "What is 'de-enzyming' in tea processing?",
          es: "¿Qué es la 'desenzimación' en el procesamiento del té?",
          de: "Was ist 'Ent-Enzymierung' bei der Teeverarbeitung?",
          nl: "Wat is 'de-enzyming' bij theeverwerking?"
        },
        options: [
          { en: "Adding enzymes to tea", es: "Agregar enzimas al té", de: "Enzyme zum Tee hinzufügen", nl: "Enzymen aan thee toevoegen" },
          { en: "Halting enzyme activity with heat", es: "Detener actividad enzimática con calor", de: "Enzymaktivität mit Wärme stoppen", nl: "Enzymactiviteit stoppen met warmte" },
          { en: "Removing caffeine", es: "Eliminar cafeína", de: "Koffein entfernen", nl: "Cafeïne verwijderen" },
          { en: "Fermenting with special enzymes", es: "Fermentar con enzimas especiales", de: "Mit speziellen Enzymen fermentieren", nl: "Fermenteren met speciale enzymen" }
        ],
        correct: 1,
        explanation: {
          en: "De-enzyming (also fixation or kill-green) uses heat to deactivate polyphenol oxidase and other enzymes, stopping oxidation at the desired level and stabilizing the tea's flavor profile.",
          es: "La desenzimación (también fijación o matar el verde) usa calor para desactivar la polifenol oxidasa y otras enzimas, deteniendo la oxidación al nivel deseado y estabilizando el perfil de sabor del té.",
          de: "Ent-Enzymierung (auch Fixierung oder Kill-Green) verwendet Wärme, um Polyphenoloxidase und andere Enzyme zu deaktivieren, stoppt Oxidation auf dem gewünschten Niveau und stabilisiert das Geschmacksprofil des Tees.",
          nl: "De-enzyming (ook fixatie of kill-green) gebruikt warmte om polyfenol oxidase en andere enzymen te deactiveren, stopt oxidatie op het gewenste niveau en stabiliseert het smaakprofiel van thee."
        }
      },
      {
        question: {
          en: "What is 'pluck to cup' time in tea quality?",
          es: "¿Qué es el tiempo 'de recolección a taza' en la calidad del té?",
          de: "Was ist die 'Pflück-zu-Tasse'-Zeit bei der Teequalität?",
          nl: "Wat is 'pluk naar kop' tijd bij theekwaliteit?"
        },
        options: [
          { en: "Time to drink tea after brewing", es: "Tiempo para beber té después de preparar", de: "Zeit zum Teetrinken nach dem Aufbrühen", nl: "Tijd om thee te drinken na het zetten" },
          { en: "Duration from harvest to processing completion", es: "Duración desde cosecha hasta finalización del procesamiento", de: "Dauer von Ernte bis Verarbeitungsabschluss", nl: "Duur van oogst tot voltooiing verwerking" },
          { en: "Shelf life of tea", es: "Vida útil del té", de: "Haltbarkeit von Tee", nl: "Houdbaarheid van thee" },
          { en: "Steeping time", es: "Tiempo de reposo", de: "Ziehzeit", nl: "Trektijd" }
        ],
        correct: 1,
        explanation: {
          en: "Pluck to cup (or 'leaf to liquor') time measures how quickly harvested leaves are processed. Shorter times (especially under 24 hours) preserve freshness, aroma, and quality in delicate teas like first flush Darjeeling or high-grade greens.",
          es: "El tiempo de recolección a taza (o 'de hoja a líquido') mide qué tan rápido se procesan las hojas cosechadas. Tiempos más cortos (especialmente bajo 24 horas) preservan frescura, aroma y calidad en tés delicados como first flush Darjeeling o verdes de alto grado.",
          de: "Pflück-zu-Tasse (oder 'Blatt-zu-Flüssigkeit')-Zeit misst, wie schnell geerntete Blätter verarbeitet werden. Kürzere Zeiten (besonders unter 24 Stunden) bewahren Frische, Aroma und Qualität in zarten Tees wie First Flush Darjeeling oder hochwertigen Grüntees.",
          nl: "Pluk naar kop (of 'blad naar vloeistof') tijd meet hoe snel geoogste bladeren worden verwerkt. Kortere tijden (vooral onder 24 uur) behouden versheid, aroma en kwaliteit in delicate theeën zoals first flush Darjeeling of hoogwaardige groene theeën."
        }
      },
      {
        question: {
          en: "What is 'monsooning' in tea processing?",
          es: "¿Qué es el 'monzónico' en el procesamiento del té?",
          de: "Was ist 'Monsunierung' bei der Teeverarbeitung?",
          nl: "Wat is 'monsooning' bij theeverwerking?"
        },
        options: [
          { en: "Harvesting tea during monsoon season", es: "Cosechar té durante temporada de monzones", de: "Tee während Monsunzeit ernten", nl: "Thee oogsten tijdens moessonseizoen" },
          { en: "Exposing tea to monsoon winds and humidity to alter flavor", es: "Exponer té a vientos y humedad del monzón para alterar sabor", de: "Tee Monsunwinden und Feuchtigkeit aussetzen, um Geschmack zu verändern", nl: "Thee blootstellen aan moessonwinden en vochtigheid om smaak te veranderen" },
          { en: "Washing tea with rainwater", es: "Lavar té con agua de lluvia", de: "Tee mit Regenwasser waschen", nl: "Thee wassen met regenwater" },
          { en: "Adding moisture artificially", es: "Agregar humedad artificialmente", de: "Feuchtigkeit künstlich hinzufügen", nl: "Vocht kunstmatig toevoegen" }
        ],
        correct: 1,
        explanation: {
          en: "Monsooning is a process used in South India where processed tea is exposed to humid monsoon winds in ventilated warehouses for several weeks, creating a unique mellow, mild flavor profile and golden color.",
          es: "El monzónico es un proceso usado en el sur de India donde el té procesado se expone a vientos húmedos del monzón en almacenes ventilados durante varias semanas, creando un perfil de sabor único suave y delicado y color dorado.",
          de: "Monsunierung ist ein in Südindien verwendeter Prozess, bei dem verarbeiteter Tee mehrere Wochen lang in belüfteten Lagerhäusern feuchten Monsunwinden ausgesetzt wird, was ein einzigartiges mildes, sanftes Geschmacksprofil und goldene Farbe erzeugt.",
          nl: "Monsooning is een proces gebruikt in Zuid-India waarbij verwerkte thee gedurende enkele weken wordt blootgesteld aan vochtige moessonwinden in geventileerde pakhuizen, wat een uniek zacht, mild smaakprofiel en gouden kleur creëert."
        }
      },
      {
        question: {
          en: "What is 'grassy' flavor in tea caused by?",
          es: "¿Qué causa el sabor 'herbáceo' en el té?",
          de: "Was verursacht 'grasigen' Geschmack bei Tee?",
          nl: "Wat veroorzaakt 'grasachtige' smaak bij thee?"
        },
        options: [
          { en: "Adding grass to tea", es: "Agregar hierba al té", de: "Gras zum Tee hinzufügen", nl: "Gras aan thee toevoegen" },
          { en: "Insufficient heat during fixation/kill-green", es: "Calor insuficiente durante fijación/matar el verde", de: "Unzureichende Hitze während Fixierung/Kill-Green", nl: "Onvoldoende warmte tijdens fixatie/kill-green" },
          { en: "Over-oxidation", es: "Sobre-oxidación", de: "Überoxidation", nl: "Over-oxidatie" },
          { en: "High caffeine content", es: "Alto contenido de cafeína", de: "Hoher Koffeingehalt", nl: "Hoog cafeïnegehalte" }
        ],
        correct: 1,
        explanation: {
          en: "Grassy or hay-like flavors in green tea often result from insufficient heat during fixation (kill-green), leaving some enzyme activity that produces vegetal, grassy notes. Proper fixation creates cleaner, sweeter flavors.",
          es: "Sabores herbáceos o a heno en té verde a menudo resultan de calor insuficiente durante fijación (matar el verde), dejando algo de actividad enzimática que produce notas vegetales y herbáceas. La fijación adecuada crea sabores más limpios y dulces.",
          de: "Grasige oder heuähnliche Aromen in Grüntee resultieren oft aus unzureichender Hitze während Fixierung (Kill-Green), was etwas Enzymaktivität hinterlässt, die pflanzliche, grasige Noten erzeugt. Richtige Fixierung erzeugt sauberere, süßere Aromen.",
          nl: "Grasachtige of hooiachtige smaken in groene thee resulteren vaak uit onvoldoende warmte tijdens fixatie (kill-green), wat enige enzymactiviteit achterlaat die plantaardige, grasachtige noten produceert. Goede fixatie creëert schonere, zoetere smaken."
        }
      },
      {
        question: {
          en: "What does 'flush' refer to in tea terminology?",
          es: "¿A qué se refiere 'flush' en terminología de té?",
          de: "Worauf bezieht sich 'Flush' in der Tee-Terminologie?",
          nl: "Waar verwijst 'flush' naar in thee terminologie?"
        },
        options: [
          { en: "Washing tea leaves", es: "Lavar hojas de té", de: "Teeblätter waschen", nl: "Theebladeren wassen" },
          { en: "Seasonal harvest period producing new growth", es: "Período de cosecha estacional produciendo nuevo crecimiento", de: "Saisonale Ernteperiode mit neuem Wachstum", nl: "Seizoensgebonden oogstperiode met nieuwe groei" },
          { en: "Tea color intensity", es: "Intensidad de color del té", de: "Tee-Farbintensität", nl: "Thee kleurintensiteit" },
          { en: "Brewing method", es: "Método de preparación", de: "Brühmethode", nl: "Zetmethode" }
        ],
        correct: 1,
        explanation: {
          en: "Flush refers to seasonal harvest periods when tea plants produce new growth. First flush (spring) yields delicate, aromatic teas; second flush (summer) produces fuller-bodied, muscatel flavors, especially prized in Darjeeling.",
          es: "Flush se refiere a períodos de cosecha estacionales cuando las plantas de té producen nuevo crecimiento. First flush (primavera) produce tés delicados y aromáticos; second flush (verano) produce sabores más corpulentos y a moscatel, especialmente valorados en Darjeeling.",
          de: "Flush bezieht sich auf saisonale Ernteperioden, wenn Teepflanzen neues Wachstum produzieren. First Flush (Frühling) ergibt zarte, aromatische Tees; Second Flush (Sommer) produziert vollmundigere Muskateller-Aromen, besonders geschätzt bei Darjeeling.",
          nl: "Flush verwijst naar seizoensgebonden oogstperioden wanneer theeplanten nieuwe groei produceren. First flush (lente) levert delicate, aromatische theeën; second flush (zomer) produceert vollere, muskaat smaken, bijzonder gewaardeerd bij Darjeeling."
        }
      },
      {
        question: {
          en: "What is 'wet storage' in pu-erh aging?",
          es: "¿Qué es el 'almacenamiento húmedo' en el envejecimiento del pu-erh?",
          de: "Was ist 'Nasslagerung' bei der Pu-Erh-Alterung?",
          nl: "Wat is 'natte opslag' bij pu-erh veroudering?"
        },
        options: [
          { en: "Storing pu-erh underwater", es: "Almacenar pu-erh bajo agua", de: "Pu-Erh unter Wasser lagern", nl: "Pu-erh onder water opslaan" },
          { en: "Controlled high-humidity aging (70-90%)", es: "Envejecimiento controlado de alta humedad (70-90%)", de: "Kontrollierte Hochfeuchtigkeitsalterung (70-90%)", nl: "Gecontroleerde hoge vochtigheid veroudering (70-90%)" },
          { en: "Storing before drying", es: "Almacenar antes de secar", de: "Vor dem Trocknen lagern", nl: "Opslaan voor het drogen" },
          { en: "Storing in wet climates only", es: "Almacenar solo en climas húmedos", de: "Nur in feuchten Klimazonen lagern", nl: "Alleen in vochtige klimaten opslaan" }
        ],
        correct: 1,
        explanation: {
          en: "Wet storage ages raw pu-erh in high-humidity environments (70-90%) to accelerate fermentation and develop deeper, earthier flavors faster, though it can reduce complexity compared to dry storage (50-70% humidity).",
          es: "El almacenamiento húmedo envejece pu-erh crudo en ambientes de alta humedad (70-90%) para acelerar fermentación y desarrollar sabores más profundos y terrosos más rápido, aunque puede reducir complejidad comparado con almacenamiento seco (50-70% humedad).",
          de: "Nasslagerung altert rohen Pu-Erh in hochfeuchten Umgebungen (70-90%), um Fermentation zu beschleunigen und tiefere, erdigere Aromen schneller zu entwickeln, obwohl es die Komplexität im Vergleich zur Trockenlagerung (50-70% Feuchtigkeit) reduzieren kann.",
          nl: "Natte opslag veroudert rauwe pu-erh in omgevingen met hoge vochtigheid (70-90%) om fermentatie te versnellen en diepere, aardse smaken sneller te ontwikkelen, hoewel het de complexiteit kan verminderen vergeleken met droge opslag (50-70% vochtigheid)."
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
