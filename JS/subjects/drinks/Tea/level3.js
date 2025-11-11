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
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
