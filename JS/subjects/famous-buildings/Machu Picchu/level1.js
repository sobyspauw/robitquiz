// Quiz Level 1: Famous buildings - Machu Picchu
(function() {
  const level1 = {
    name: {
      en: "Machu Picchu",
      es: "Machu Picchu",
      de: "Machu Picchu",
      nl: "Machu Picchu"
    },
    questions: [
      {
        question: {
          en: "In which country is Machu Picchu located?",
          es: "¿En qué país se encuentra Machu Picchu?",
          de: "In welchem Land befindet sich Machu Picchu?",
          nl: "In welk land ligt Machu Picchu?"
        },
        options: [
          { en: "Peru", es: "Perú", de: "Peru", nl: "Peru" },
          { en: "Bolivia", es: "Bolivia", de: "Bolivien", nl: "Bolivia" },
          { en: "Ecuador", es: "Ecuador", de: "Ecuador", nl: "Ecuador" },
          { en: "Chile", es: "Chile", de: "Chile", nl: "Chili" }
        ],
        correct: 0,
        explanation: {
          en: "Machu Picchu is located in Peru, in the Cusco Region, high in the Andes Mountains.",
          es: "Machu Picchu se encuentra en Perú, en la región de Cusco, en lo alto de los Andes.",
          de: "Machu Picchu liegt in Peru, in der Region Cusco, hoch in den Anden.",
          nl: "Machu Picchu ligt in Peru, in de regio Cusco, hoog in het Andesgebergte."
        }
      },
      {
        question: {
          en: "Which ancient civilization built Machu Picchu?",
          es: "¿Qué civilización antigua construyó Machu Picchu?",
          de: "Welche antike Zivilisation hat Machu Picchu erbaut?",
          nl: "Welke oude beschaving bouwde Machu Picchu?"
        },
        options: [
          { en: "Maya", es: "Maya", de: "Maya", nl: "Maya" },
          { en: "Aztec", es: "Azteca", de: "Azteken", nl: "Azteeks" },
          { en: "Inca", es: "Inca", de: "Inka", nl: "Inca" },
          { en: "Olmec", es: "Olmeca", de: "Olmeken", nl: "Olmeken" }
        ],
        correct: 2,
        explanation: {
          en: "Machu Picchu was built by the Inca civilization around 1450 AD during the reign of Emperor Pachacuti.",
          es: "Machu Picchu fue construido por la civilización Inca alrededor de 1450 d.C. durante el reinado del emperador Pachacuti.",
          de: "Machu Picchu wurde um 1450 n. Chr. von der Inka-Zivilisation während der Herrschaft von Kaiser Pachacuti erbaut.",
          nl: "Machu Picchu werd gebouwd door de Inca-beschaving rond 1450 na Christus tijdens de regering van keizer Pachacuti."
        }
      },
      {
        question: {
          en: "In which mountain range is Machu Picchu situated?",
          es: "¿En qué cordillera se encuentra Machu Picchu?",
          de: "In welchem Gebirge liegt Machu Picchu?",
          nl: "In welk gebergte ligt Machu Picchu?"
        },
        options: [
          { en: "Rocky Mountains", es: "Montañas Rocosas", de: "Rocky Mountains", nl: "Rocky Mountains" },
          { en: "Himalayas", es: "Himalaya", de: "Himalaya", nl: "Himalaya" },
          { en: "Andes", es: "Andes", de: "Anden", nl: "Andes" },
          { en: "Alps", es: "Alpes", de: "Alpen", nl: "Alpen" }
        ],
        correct: 2,
        explanation: {
          en: "Machu Picchu is located in the Andes Mountains of South America, at an elevation of approximately 2,430 meters above sea level.",
          es: "Machu Picchu está ubicado en la cordillera de los Andes de América del Sur, a una altitud de aproximadamente 2,430 metros sobre el nivel del mar.",
          de: "Machu Picchu liegt in den Anden Südamerikas auf einer Höhe von etwa 2.430 Metern über dem Meeresspiegel.",
          nl: "Machu Picchu ligt in het Andesgebergte in Zuid-Amerika, op een hoogte van ongeveer 2.430 meter boven zeeniveau."
        }
      },
      {
        question: {
          en: "In which century was Machu Picchu built?",
          es: "¿En qué siglo se construyó Machu Picchu?",
          de: "In welchem Jahrhundert wurde Machu Picchu erbaut?",
          nl: "In welke eeuw werd Machu Picchu gebouwd?"
        },
        options: [
          { en: "13th century", es: "Siglo XIII", de: "13. Jahrhundert", nl: "13e eeuw" },
          { en: "14th century", es: "Siglo XIV", de: "14. Jahrhundert", nl: "14e eeuw" },
          { en: "15th century", es: "Siglo XV", de: "15. Jahrhundert", nl: "15e eeuw" },
          { en: "16th century", es: "Siglo XVI", de: "16. Jahrhundert", nl: "16e eeuw" }
        ],
        correct: 2,
        explanation: {
          en: "Machu Picchu was constructed in the 15th century, around 1450 AD, during the height of the Inca Empire.",
          es: "Machu Picchu fue construido en el siglo XV, alrededor de 1450 d.C., durante el apogeo del Imperio Inca.",
          de: "Machu Picchu wurde im 15. Jahrhundert, um 1450 n. Chr., während der Blütezeit des Inkareiches erbaut.",
          nl: "Machu Picchu werd gebouwd in de 15e eeuw, rond 1450 na Christus, tijdens de hoogtijdagen van het Inca-rijk."
        }
      },
      {
        question: {
          en: "When was Machu Picchu rediscovered by the Western world?",
          es: "¿Cuándo fue redescubierto Machu Picchu por el mundo occidental?",
          de: "Wann wurde Machu Picchu von der westlichen Welt wiederentdeckt?",
          nl: "Wanneer werd Machu Picchu herontdekt door de westerse wereld?"
        },
        options: [
          { en: "1911", es: "1911", de: "1911", nl: "1911" },
          { en: "1888", es: "1888", de: "1888", nl: "1888" },
          { en: "1935", es: "1935", de: "1935", nl: "1935" },
          { en: "1867", es: "1867", de: "1867", nl: "1867" }
        ],
        correct: 0,
        explanation: {
          en: "Machu Picchu was brought to international attention in 1911 by American historian Hiram Bingham, though local people knew of its existence.",
          es: "Machu Picchu fue dado a conocer internacionalmente en 1911 por el historiador estadounidense Hiram Bingham, aunque la gente local conocía su existencia.",
          de: "Machu Picchu wurde 1911 durch den amerikanischen Historiker Hiram Bingham international bekannt, obwohl die lokale Bevölkerung von seiner Existenz wusste.",
          nl: "Machu Picchu werd in 1911 onder internationale aandacht gebracht door de Amerikaanse historicus Hiram Bingham, hoewel lokale mensen van het bestaan wisten."
        }
      },
      {
        question: {
          en: "What does the name 'Machu Picchu' mean?",
          es: "¿Qué significa el nombre 'Machu Picchu'?",
          de: "Was bedeutet der Name 'Machu Picchu'?",
          nl: "Wat betekent de naam 'Machu Picchu'?"
        },
        options: [
          { en: "Old Mountain", es: "Montaña Vieja", de: "Alter Berg", nl: "Oude Berg" },
          { en: "Sacred City", es: "Ciudad Sagrada", de: "Heilige Stadt", nl: "Heilige Stad" },
          { en: "Sky Temple", es: "Templo del Cielo", de: "Himmelstempel", nl: "Hemeltempel" },
          { en: "Lost City", es: "Ciudad Perdida", de: "Verlorene Stadt", nl: "Verloren Stad" }
        ],
        correct: 0,
        explanation: {
          en: "Machu Picchu means 'Old Mountain' or 'Old Peak' in Quechua, referring to the mountain on which the site is built.",
          es: "Machu Picchu significa 'Montaña Vieja' o 'Pico Viejo' en quechua, refiriéndose a la montaña sobre la cual se construyó el sitio.",
          de: "Machu Picchu bedeutet 'Alter Berg' oder 'Alte Spitze' auf Quechua und bezieht sich auf den Berg, auf dem die Stätte erbaut wurde.",
          nl: "Machu Picchu betekent 'Oude Berg' of 'Oude Piek' in het Quechua, verwijzend naar de berg waarop de site is gebouwd."
        }
      },
      {
        question: {
          en: "Approximately how high above sea level is Machu Picchu?",
          es: "¿Aproximadamente a qué altura sobre el nivel del mar está Machu Picchu?",
          de: "Ungefähr wie hoch über dem Meeresspiegel liegt Machu Picchu?",
          nl: "Ongeveer hoe hoog boven zeeniveau ligt Machu Picchu?"
        },
        options: [
          { en: "1,500 m", es: "1.500 metros", de: "1.500 Meter", nl: "1.500 meter" },
          { en: "2,430 m", es: "2.430 metros", de: "2.430 Meter", nl: "2.430 meter" },
          { en: "3,200 m", es: "3.200 metros", de: "3.200 Meter", nl: "3.200 meter" },
          { en: "4,000 m", es: "4.000 metros", de: "4.000 Meter", nl: "4.000 meter" }
        ],
        correct: 1,
        explanation: {
          en: "Machu Picchu sits at an elevation of approximately 2,430 meters (7,970 feet) above sea level on a mountain ridge.",
          es: "Machu Picchu se encuentra a una altitud de aproximadamente 2.430 metros (7.970 pies) sobre el nivel del mar en una cresta montañosa.",
          de: "Machu Picchu liegt auf etwa 2.430 Metern (7.970 Fuß) über dem Meeresspiegel auf einem Bergrücken.",
          nl: "Machu Picchu ligt op een hoogte van ongeveer 2.430 meter (7.970 voet) boven zeeniveau op een bergkam."
        }
      },
      {
        question: {
          en: "What type of stones were primarily used to build Machu Picchu?",
          es: "¿Qué tipo de piedras se utilizaron principalmente para construir Machu Picchu?",
          de: "Welche Art von Steinen wurde hauptsächlich zum Bau von Machu Picchu verwendet?",
          nl: "Welk type stenen werd voornamelijk gebruikt om Machu Picchu te bouwen?"
        },
        options: [
          { en: "Limestone", es: "Piedra caliza", de: "Kalkstein", nl: "Kalksteen" },
          { en: "Granite", es: "Granito", de: "Granit", nl: "Graniet" },
          { en: "Sandstone", es: "Arenisca", de: "Sandstein", nl: "Zandsteen" },
          { en: "Marble", es: "Mármol", de: "Marmor", nl: "Marmer" }
        ],
        correct: 1,
        explanation: {
          en: "Machu Picchu was built primarily using granite stones, which were cut and fitted together without mortar in the dry stone technique.",
          es: "Machu Picchu fue construido principalmente con piedras de granito, que fueron cortadas y encajadas sin mortero en la técnica de piedra seca.",
          de: "Machu Picchu wurde hauptsächlich aus Granitsteinen gebaut, die ohne Mörtel in der Trockenmauertechnik geschnitten und zusammengefügt wurden.",
          nl: "Machu Picchu werd voornamelijk gebouwd met granieten stenen, die werden gesneden en zonder mortel in de droge-steentechniek in elkaar pasten."
        }
      },
      {
        question: {
          en: "What is Machu Picchu often called?",
          es: "¿Cómo se llama a menudo Machu Picchu?",
          de: "Wie wird Machu Picchu oft genannt?",
          nl: "Hoe wordt Machu Picchu vaak genoemd?"
        },
        options: [
          { en: "The Lost City of the Incas", es: "La Ciudad Perdida de los Incas", de: "Die Verlorene Stadt der Inkas", nl: "De Verloren Stad van de Inca's" },
          { en: "The Golden Temple", es: "El Templo Dorado", de: "Der Goldene Tempel", nl: "De Gouden Tempel" },
          { en: "The Mountain Palace", es: "El Palacio de la Montaña", de: "Der Bergpalast", nl: "Het Bergpaleis" },
          { en: "The Sky Fortress", es: "La Fortaleza del Cielo", de: "Die Himmelsfestung", nl: "Het Hemelfort" }
        ],
        correct: 0,
        explanation: {
          en: "Machu Picchu is often referred to as 'The Lost City of the Incas' because it was hidden from the Spanish conquistadors and largely unknown to the outside world until 1911.",
          es: "Machu Picchu a menudo se conoce como 'La Ciudad Perdida de los Incas' porque estuvo oculta de los conquistadores españoles y en gran parte desconocida para el mundo exterior hasta 1911.",
          de: "Machu Picchu wird oft als 'Die Verlorene Stadt der Inkas' bezeichnet, weil sie vor den spanischen Eroberern verborgen und der Außenwelt bis 1911 weitgehend unbekannt war.",
          nl: "Machu Picchu wordt vaak 'De Verloren Stad van de Inca's' genoemd omdat het verborgen was voor de Spaanse conquistadores en grotendeels onbekend bij de buitenwereld tot 1911."
        }
      },
      {
        question: {
          en: "When did Machu Picchu become a UNESCO World Heritage Site?",
          es: "¿Cuándo se convirtió Machu Picchu en Patrimonio de la Humanidad de la UNESCO?",
          de: "Wann wurde Machu Picchu UNESCO-Weltkulturerbe?",
          nl: "Wanneer werd Machu Picchu een UNESCO Werelderfgoed?"
        },
        options: [
          { en: "1972", es: "1972", de: "1972", nl: "1972" },
          { en: "1983", es: "1983", de: "1983", nl: "1983" },
          { en: "1995", es: "1995", de: "1995", nl: "1995" },
          { en: "2001", es: "2001", de: "2001", nl: "2001" }
        ],
        correct: 1,
        explanation: {
          en: "Machu Picchu was designated as a UNESCO World Heritage Site in 1983 in recognition of its cultural and historical significance.",
          es: "Machu Picchu fue designado Patrimonio de la Humanidad por la UNESCO en 1983 en reconocimiento a su importancia cultural e histórica.",
          de: "Machu Picchu wurde 1983 zum UNESCO-Weltkulturerbe erklärt, in Anerkennung seiner kulturellen und historischen Bedeutung.",
          nl: "Machu Picchu werd in 1983 aangewezen als UNESCO Werelderfgoed ter erkenning van zijn culturele en historische betekenis."
        }
      },
      {
        question: {
          en: "What river flows near Machu Picchu?",
          es: "¿Qué río fluye cerca de Machu Picchu?",
          de: "Welcher Fluss fließt in der Nähe von Machu Picchu?",
          nl: "Welke rivier stroomt in de buurt van Machu Picchu?"
        },
        options: [
          { en: "Amazon River", es: "Río Amazonas", de: "Amazonas", nl: "Amazone" },
          { en: "Urubamba River", es: "Río Urubamba", de: "Urubamba", nl: "Urubamba" },
          { en: "Marañón River", es: "Río Marañón", de: "Marañón", nl: "Marañón" },
          { en: "Apurímac River", es: "Río Apurímac", de: "Apurímac", nl: "Apurímac" }
        ],
        correct: 1,
        explanation: {
          en: "The Urubamba River flows through the valley below Machu Picchu, also known as the Sacred Valley of the Incas.",
          es: "El río Urubamba fluye por el valle debajo de Machu Picchu, también conocido como el Valle Sagrado de los Incas.",
          de: "Der Urubamba-Fluss fließt durch das Tal unterhalb von Machu Picchu, auch bekannt als das Heilige Tal der Inkas.",
          nl: "De Urubamba-rivier stroomt door de vallei onder Machu Picchu, ook bekend als de Heilige Vallei van de Inca's."
        }
      },
      {
        question: {
          en: "In what year was Machu Picchu named one of the New Seven Wonders of the World?",
          es: "¿En qué año fue nombrado Machu Picchu una de las Nuevas Siete Maravillas del Mundo?",
          de: "In welchem Jahr wurde Machu Picchu zu einem der Neuen Sieben Weltwunder ernannt?",
          nl: "In welk jaar werd Machu Picchu uitgeroepen tot een van de Nieuwe Zeven Wereldwonderen?"
        },
        options: [
          { en: "2000", es: "2000", de: "2000", nl: "2000" },
          { en: "2005", es: "2005", de: "2005", nl: "2005" },
          { en: "2007", es: "2007", de: "2007", nl: "2007" },
          { en: "2010", es: "2010", de: "2010", nl: "2010" }
        ],
        correct: 2,
        explanation: {
          en: "Machu Picchu was voted one of the New Seven Wonders of the World in 2007 through a global poll.",
          es: "Machu Picchu fue elegido como una de las Nuevas Siete Maravillas del Mundo en 2007 mediante una votación mundial.",
          de: "Machu Picchu wurde 2007 durch eine weltweite Abstimmung zu einem der Neuen Sieben Weltwunder gewählt.",
          nl: "Machu Picchu werd in 2007 gekozen tot een van de Nieuwe Zeven Wereldwonderen door middel van een wereldwijde stemming."
        }
      },
      {
        question: {
          en: "What construction technique was used for Machu Picchu's walls?",
          es: "¿Qué técnica de construcción se utilizó para las paredes de Machu Picchu?",
          de: "Welche Bautechnik wurde für die Mauern von Machu Picchu verwendet?",
          nl: "Welke bouwtechniek werd gebruikt voor de muren van Machu Picchu?"
        },
        options: [
          { en: "Brick and mortar", es: "Ladrillo y mortero", de: "Ziegel und Mörtel", nl: "Baksteen en mortel" },
          { en: "Dry stone (no mortar)", es: "Piedra seca (sin mortero)", de: "Trockenmauer (ohne Mörtel)", nl: "Droge steen (geen mortel)" },
          { en: "Concrete blocks", es: "Bloques de concreto", de: "Betonblöcke", nl: "Betonblokken" },
          { en: "Wood and clay", es: "Madera y arcilla", de: "Holz und Lehm", nl: "Hout en klei" }
        ],
        correct: 1,
        explanation: {
          en: "Machu Picchu was built using the dry stone technique, where stones were cut and fitted so precisely that no mortar was needed.",
          es: "Machu Picchu fue construido utilizando la técnica de piedra seca, donde las piedras fueron cortadas y encajadas con tal precisión que no se necesitó mortero.",
          de: "Machu Picchu wurde mit der Trockenmauertechnik gebaut, bei der Steine so präzise geschnitten und zusammengefügt wurden, dass kein Mörtel benötigt wurde.",
          nl: "Machu Picchu werd gebouwd met behulp van de droge-steentechniek, waarbij stenen zo precies werden gesneden en in elkaar gepast dat er geen mortel nodig was."
        }
      },
      {
        question: {
          en: "Approximately how many structures are found at Machu Picchu?",
          es: "¿Aproximadamente cuántas estructuras se encuentran en Machu Picchu?",
          de: "Ungefähr wie viele Strukturen befinden sich in Machu Picchu?",
          nl: "Ongeveer hoeveel structuren zijn er te vinden in Machu Picchu?"
        },
        options: [
          { en: "About 100", es: "Alrededor de 100", de: "Etwa 100", nl: "Ongeveer 100" },
          { en: "About 200", es: "Alrededor de 200", de: "Etwa 200", nl: "Ongeveer 200" },
          { en: "About 350", es: "Alrededor de 350", de: "Etwa 350", nl: "Ongeveer 350" },
          { en: "About 500", es: "Alrededor de 500", de: "Etwa 500", nl: "Ongeveer 500" }
        ],
        correct: 1,
        explanation: {
          en: "Machu Picchu contains approximately 200 structures, including temples, residences, storage facilities, and other buildings.",
          es: "Machu Picchu contiene aproximadamente 200 estructuras, incluyendo templos, residencias, instalaciones de almacenamiento y otros edificios.",
          de: "Machu Picchu umfasst etwa 200 Strukturen, darunter Tempel, Wohnhäuser, Lagereinrichtungen und andere Gebäude.",
          nl: "Machu Picchu bevat ongeveer 200 structuren, waaronder tempels, woningen, opslagfaciliteiten en andere gebouwen."
        }
      },
      {
        question: {
          en: "What language was spoken by the people who built Machu Picchu?",
          es: "¿Qué idioma hablaba la gente que construyó Machu Picchu?",
          de: "Welche Sprache sprachen die Menschen, die Machu Picchu erbauten?",
          nl: "Welke taal werd gesproken door de mensen die Machu Picchu bouwden?"
        },
        options: [
          { en: "Spanish", es: "Español", de: "Spanisch", nl: "Spaans" },
          { en: "Portuguese", es: "Portugués", de: "Portugiesisch", nl: "Portugees" },
          { en: "Nahuatl", es: "Náhuatl", de: "Nahuatl", nl: "Nahuatl" },
          { en: "Quechua", es: "Quechua", de: "Quechua", nl: "Quechua" }
        ],
        correct: 3,
        explanation: {
          en: "The Inca people who built Machu Picchu spoke Quechua, a language still spoken by millions in the Andean region today.",
          es: "El pueblo Inca que construyó Machu Picchu hablaba quechua, un idioma que todavía hablan millones de personas en la región andina hoy en día.",
          de: "Die Inka-Menschen, die Machu Picchu erbauten, sprachen Quechua, eine Sprache, die heute noch von Millionen in der Andenregion gesprochen wird.",
          nl: "De Inca-mensen die Machu Picchu bouwden, spraken Quechua, een taal die vandaag de dag nog door miljoenen mensen in de Andes-regio wordt gesproken."
        }
      },
      {
        question: {
          en: "What was the primary purpose of the terraces at Machu Picchu?",
          es: "¿Cuál era el propósito principal de las terrazas en Machu Picchu?",
          de: "Was war der Hauptzweck der Terrassen in Machu Picchu?",
          nl: "Wat was het primaire doel van de terrassen in Machu Picchu?"
        },
        options: [
          { en: "Religious ceremonies", es: "Ceremonias religiosas", de: "Religiöse Zeremonien", nl: "Religieuze ceremonies" },
          { en: "Agriculture", es: "Agricultura", de: "Landwirtschaft", nl: "Landbouw" },
          { en: "Defense", es: "Defensa", de: "Verteidigung", nl: "Verdediging" },
          { en: "Recreation", es: "Recreación", de: "Erholung", nl: "Recreatie" }
        ],
        correct: 1,
        explanation: {
          en: "The terraces at Machu Picchu were primarily used for agriculture, allowing the Incas to grow crops on the steep mountain slopes.",
          es: "Las terrazas de Machu Picchu se utilizaron principalmente para la agricultura, permitiendo a los Incas cultivar en las empinadas laderas de las montañas.",
          de: "Die Terrassen von Machu Picchu wurden hauptsächlich für die Landwirtschaft genutzt, wodurch die Inkas Nutzpflanzen an den steilen Berghängen anbauen konnten.",
          nl: "De terrassen in Machu Picchu werden voornamelijk gebruikt voor landbouw, waardoor de Inca's gewassen konden verbouwen op de steile berghellingen."
        }
      },
      {
        question: {
          en: "What is the nearest major city to Machu Picchu?",
          es: "¿Cuál es la ciudad principal más cercana a Machu Picchu?",
          de: "Welche ist die nächstgelegene Großstadt zu Machu Picchu?",
          nl: "Wat is de dichtstbijzijnde grote stad bij Machu Picchu?"
        },
        options: [
          { en: "Lima", es: "Lima", de: "Lima", nl: "Lima" },
          { en: "Cusco", es: "Cusco", de: "Cusco", nl: "Cusco" },
          { en: "Arequipa", es: "Arequipa", de: "Arequipa", nl: "Arequipa" },
          { en: "La Paz", es: "La Paz", de: "La Paz", nl: "La Paz" }
        ],
        correct: 1,
        explanation: {
          en: "Cusco is the nearest major city to Machu Picchu, located about 75 kilometers away. It was the capital of the Inca Empire.",
          es: "Cusco es la ciudad principal más cercana a Machu Picchu, ubicada a unos 75 kilómetros de distancia. Fue la capital del Imperio Inca.",
          de: "Cusco ist die nächstgelegene Großstadt zu Machu Picchu, etwa 75 Kilometer entfernt. Es war die Hauptstadt des Inkareiches.",
          nl: "Cusco is de dichtstbijzijnde grote stad bij Machu Picchu, gelegen op ongeveer 75 kilometer afstand. Het was de hoofdstad van het Inca-rijk."
        }
      },
      {
        question: {
          en: "Why did the Spanish conquistadors never find Machu Picchu?",
          es: "¿Por qué los conquistadores españoles nunca encontraron Machu Picchu?",
          de: "Warum haben die spanischen Eroberer Machu Picchu nie gefunden?",
          nl: "Waarom hebben de Spaanse conquistadores Machu Picchu nooit gevonden?"
        },
        options: [
          { en: "It was destroyed before they arrived", es: "Fue destruido antes de que llegaran", de: "Es wurde zerstört bevor sie ankamen", nl: "Het werd vernietigd voordat ze aankwamen" },
          { en: "It was hidden by dense jungle and remote location", es: "Estaba oculto por una densa selva y ubicación remota", de: "Es war versteckt durch dichten Dschungel und abgelegene Lage", nl: "Het was verborgen door dicht oerwoud en afgelegen locatie" },
          { en: "The Incas moved it to another location", es: "Los Incas lo trasladaron a otro lugar", de: "Die Inkas verlegten es an einen anderen Ort", nl: "De Inca's verplaatsten het naar een andere locatie" },
          { en: "It was underwater at that time", es: "Estaba bajo el agua en ese momento", de: "Es war zu dieser Zeit unter Wasser", nl: "Het was destijds onder water" }
        ],
        correct: 1,
        explanation: {
          en: "Machu Picchu's remote mountain location and the dense jungle vegetation that grew over it kept the site hidden from Spanish conquistadors, preserving it from destruction.",
          es: "La ubicación remota en las montañas de Machu Picchu y la densa vegetación de la selva que creció sobre ella mantuvieron el sitio oculto de los conquistadores españoles, preservándolo de la destrucción.",
          de: "Die abgelegene Berglage von Machu Picchu und die dichte Dschungelvegetation, die darüber wuchs, hielten die Stätte vor den spanischen Eroberern verborgen und bewahrten sie vor der Zerstörung.",
          nl: "De afgelegen berglocatie van Machu Picchu en de dichte junglevegetatie die eroverheen groeide, hielden de site verborgen voor Spaanse conquistadores, waardoor het bewaard bleef van vernietiging."
        }
      },
      {
        question: {
          en: "What climate zone is Machu Picchu located in?",
          es: "¿En qué zona climática se encuentra Machu Picchu?",
          de: "In welcher Klimazone liegt Machu Picchu?",
          nl: "In welke klimaatzone ligt Machu Picchu?"
        },
        options: [
          { en: "Desert", es: "Desierto", de: "Wüste", nl: "Woestijn" },
          { en: "Tropical cloud forest", es: "Bosque nuboso tropical", de: "Tropischer Nebelwald", nl: "Tropisch nevelwoud" },
          { en: "Arctic tundra", es: "Tundra ártica", de: "Arktische Tundra", nl: "Arctische toendra" },
          { en: "Mediterranean", es: "Mediterráneo", de: "Mittelmeer", nl: "Mediterraan" }
        ],
        correct: 1,
        explanation: {
          en: "Machu Picchu is located in a tropical cloud forest climate zone, characterized by high humidity, frequent fog, and lush vegetation.",
          es: "Machu Picchu se encuentra en una zona climática de bosque nuboso tropical, caracterizada por alta humedad, niebla frecuente y vegetación exuberante.",
          de: "Machu Picchu liegt in einer tropischen Nebelwald-Klimazone, gekennzeichnet durch hohe Luftfeuchtigkeit, häufigen Nebel und üppige Vegetation.",
          nl: "Machu Picchu ligt in een tropische nevelwoud klimaatzone, gekenmerkt door hoge luchtvochtigheid, frequente mist en weelderige vegetatie."
        }
      },
      {
        question: {
          en: "What was NOT used in the construction of Machu Picchu?",
          es: "¿Qué NO se utilizó en la construcción de Machu Picchu?",
          de: "Was wurde NICHT beim Bau von Machu Picchu verwendet?",
          nl: "Wat werd NIET gebruikt bij de bouw van Machu Picchu?"
        },
        options: [
          { en: "Stone hammers", es: "Martillos de piedra", de: "Steinhämmer", nl: "Stenen hamers" },
          { en: "Bronze tools", es: "Herramientas de bronce", de: "Bronzewerkzeuge", nl: "Bronzen gereedschap" },
          { en: "Iron tools", es: "Herramientas de hierro", de: "Eisenwerkzeuge", nl: "IJzeren gereedschap" },
          { en: "Manual labor", es: "Trabajo manual", de: "Handarbeit", nl: "Handarbeid" }
        ],
        correct: 2,
        explanation: {
          en: "The Incas did not have iron tools. They used stone hammers, bronze tools, and tremendous manual labor to build Machu Picchu.",
          es: "Los Incas no tenían herramientas de hierro. Utilizaron martillos de piedra, herramientas de bronce y un tremendo trabajo manual para construir Machu Picchu.",
          de: "Die Inkas hatten keine Eisenwerkzeuge. Sie verwendeten Steinhämmer, Bronzewerkzeuge und enorme Handarbeit zum Bau von Machu Picchu.",
          nl: "De Inca's hadden geen ijzeren gereedschap. Ze gebruikten stenen hamers, bronzen gereedschap en enorm veel handarbeid om Machu Picchu te bouwen."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();