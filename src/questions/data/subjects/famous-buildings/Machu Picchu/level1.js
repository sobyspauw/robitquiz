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
      },
      {
        question: {
          en: "What is the Temple of the Sun at Machu Picchu?",
          es: "¿Qué es el Templo del Sol en Machu Picchu?",
          de: "Was ist der Sonnentempel in Machu Picchu?",
          nl: "Wat is de Tempel van de Zon in Machu Picchu?"
        },
        options: [
          { en: "A religious building", es: "Un edificio religioso", de: "Ein religiöses Gebäude", nl: "Een religieus gebouw" },
          { en: "A storage facility", es: "Una instalación de almacenamiento", de: "Eine Lagereinrichtung", nl: "Een opslagfaciliteit" },
          { en: "A residential area", es: "Una zona residencial", de: "Ein Wohngebiet", nl: "Een woongebied" },
          { en: "A marketplace", es: "Un mercado", de: "Ein Marktplatz", nl: "Een marktplaats" }
        ],
        correct: 0,
        explanation: {
          en: "The Temple of the Sun is one of the most important religious buildings at Machu Picchu, used for astronomical observations and ceremonies.",
          es: "El Templo del Sol es uno de los edificios religiosos más importantes de Machu Picchu, utilizado para observaciones astronómicas y ceremonias.",
          de: "Der Sonnentempel ist eines der wichtigsten religiösen Gebäude in Machu Picchu, genutzt für astronomische Beobachtungen und Zeremonien.",
          nl: "De Tempel van de Zon is een van de belangrijkste religieuze gebouwen in Machu Picchu, gebruikt voor astronomische waarnemingen en ceremonies."
        }
      },
      {
        question: {
          en: "How do most tourists reach Machu Picchu?",
          es: "¿Cómo llegan la mayoría de los turistas a Machu Picchu?",
          de: "Wie erreichen die meisten Touristen Machu Picchu?",
          nl: "Hoe bereiken de meeste toeristen Machu Picchu?"
        },
        options: [
          { en: "By car", es: "En coche", de: "Mit dem Auto", nl: "Met de auto" },
          { en: "By train and bus", es: "En tren y autobús", de: "Mit Zug und Bus", nl: "Met de trein en bus" },
          { en: "By helicopter", es: "En helicóptero", de: "Mit dem Hubschrauber", nl: "Met de helikopter" },
          { en: "By boat", es: "En barco", de: "Mit dem Boot", nl: "Met de boot" }
        ],
        correct: 1,
        explanation: {
          en: "Most tourists reach Machu Picchu by taking a train from Cusco to Aguas Calientes, then a bus up the mountain to the site.",
          es: "La mayoría de los turistas llegan a Machu Picchu tomando un tren desde Cusco hasta Aguas Calientes, luego un autobús que sube la montaña hasta el sitio.",
          de: "Die meisten Touristen erreichen Machu Picchu mit einem Zug von Cusco nach Aguas Calientes und dann mit einem Bus den Berg hinauf zur Stätte.",
          nl: "De meeste toeristen bereiken Machu Picchu door een trein te nemen van Cusco naar Aguas Calientes, dan een bus de berg op naar de site."
        }
      },
      {
        question: {
          en: "What animals are native to the Machu Picchu area?",
          es: "¿Qué animales son nativos del área de Machu Picchu?",
          de: "Welche Tiere sind im Gebiet von Machu Picchu heimisch?",
          nl: "Welke dieren zijn inheems in het gebied van Machu Picchu?"
        },
        options: [
          { en: "Llamas and alpacas", es: "Llamas y alpacas", de: "Lamas und Alpakas", nl: "Lama's en alpaca's" },
          { en: "Elephants and tigers", es: "Elefantes y tigres", de: "Elefanten und Tiger", nl: "Olifanten en tijgers" },
          { en: "Kangaroos and koalas", es: "Canguros y koalas", de: "Kängurus und Koalas", nl: "Kangoeroes en koala's" },
          { en: "Zebras and giraffes", es: "Cebras y jirafas", de: "Zebras und Giraffen", nl: "Zebra's en giraffen" }
        ],
        correct: 0,
        explanation: {
          en: "Llamas and alpacas are native to the Andean region. Today, llamas graze at Machu Picchu and are iconic symbols of the site.",
          es: "Las llamas y alpacas son nativas de la región andina. Hoy en día, las llamas pastan en Machu Picchu y son símbolos icónicos del sitio.",
          de: "Lamas und Alpakas sind in der Andenregion heimisch. Heute grasen Lamas in Machu Picchu und sind ikonische Symbole der Stätte.",
          nl: "Lama's en alpaca's zijn inheems in de Andes-regio. Vandaag grazen lama's in Machu Picchu en zijn iconische symbolen van de site."
        }
      },
      {
        question: {
          en: "Who was Hiram Bingham?",
          es: "¿Quién fue Hiram Bingham?",
          de: "Wer war Hiram Bingham?",
          nl: "Wie was Hiram Bingham?"
        },
        options: [
          { en: "An Inca emperor", es: "Un emperador Inca", de: "Ein Inka-Kaiser", nl: "Een Inca-keizer" },
          { en: "An American historian who found Machu Picchu", es: "Un historiador estadounidense que encontró Machu Picchu", de: "Ein amerikanischer Historiker der Machu Picchu fand", nl: "Een Amerikaanse historicus die Machu Picchu vond" },
          { en: "A Spanish conquistador", es: "Un conquistador español", de: "Ein spanischer Eroberer", nl: "Een Spaanse conquistador" },
          { en: "A local guide", es: "Un guía local", de: "Ein lokaler Führer", nl: "Een lokale gids" }
        ],
        correct: 1,
        explanation: {
          en: "Hiram Bingham was an American historian and explorer from Yale University who brought Machu Picchu to international attention in 1911.",
          es: "Hiram Bingham fue un historiador y explorador estadounidense de la Universidad de Yale que dio a conocer Machu Picchu internacionalmente en 1911.",
          de: "Hiram Bingham war ein amerikanischer Historiker und Forscher von der Yale University, der Machu Picchu 1911 international bekannt machte.",
          nl: "Hiram Bingham was een Amerikaanse historicus en ontdekkingsreiziger van Yale University die Machu Picchu in 1911 onder internationale aandacht bracht."
        }
      },
      {
        question: {
          en: "What type of site was Machu Picchu?",
          es: "¿Qué tipo de sitio era Machu Picchu?",
          de: "Was für eine Art von Stätte war Machu Picchu?",
          nl: "Wat voor soort locatie was Machu Picchu?"
        },
        options: [
          { en: "A fortress", es: "Una fortaleza", de: "Eine Festung", nl: "Een fort" },
          { en: "A royal estate", es: "Una finca real", de: "Ein königliches Anwesen", nl: "Een koninklijk landgoed" },
          { en: "A prison", es: "Una prisión", de: "Ein Gefängnis", nl: "Een gevangenis" },
          { en: "A market", es: "Un mercado", de: "Ein Markt", nl: "Een markt" }
        ],
        correct: 1,
        explanation: {
          en: "Machu Picchu is believed to have been a royal estate for the Inca emperor Pachacuti and possibly a sacred religious site.",
          es: "Se cree que Machu Picchu fue una finca real para el emperador Inca Pachacuti y posiblemente un sitio religioso sagrado.",
          de: "Es wird angenommen, dass Machu Picchu ein königliches Anwesen für den Inka-Kaiser Pachacuti und möglicherweise eine heilige religiöse Stätte war.",
          nl: "Er wordt aangenomen dat Machu Picchu een koninklijk landgoed was voor de Inca-keizer Pachacuti en mogelijk een heilige religieuze plaats."
        }
      },
      {
        question: {
          en: "What is special about the stone work at Machu Picchu?",
          es: "¿Qué hay de especial en el trabajo de piedra de Machu Picchu?",
          de: "Was ist besonders an der Steinarbeit in Machu Picchu?",
          nl: "Wat is speciaal aan het steenwerk in Machu Picchu?"
        },
        options: [
          { en: "Stones were glued together", es: "Las piedras fueron pegadas", de: "Die Steine wurden geklebt", nl: "Stenen werden aan elkaar gelijmd" },
          { en: "Stones fit perfectly without mortar", es: "Las piedras encajan perfectamente sin mortero", de: "Steine passen perfekt ohne Mörtel", nl: "Stenen passen perfect zonder mortel" },
          { en: "Stones were painted", es: "Las piedras fueron pintadas", de: "Die Steine wurden bemalt", nl: "Stenen werden geschilderd" },
          { en: "Stones were hollow", es: "Las piedras eran huecas", de: "Die Steine waren hohl", nl: "Stenen waren hol" }
        ],
        correct: 1,
        explanation: {
          en: "The Inca stonework at Machu Picchu is famous for its precision. Stones were cut and fitted so perfectly that no mortar was needed.",
          es: "El trabajo de piedra Inca en Machu Picchu es famoso por su precisión. Las piedras fueron cortadas y ajustadas tan perfectamente que no se necesitó mortero.",
          de: "Die Inka-Steinarbeit in Machu Picchu ist berühmt für ihre Präzision. Steine wurden so perfekt geschnitten und angepasst, dass kein Mörtel benötigt wurde.",
          nl: "Het Inca-steenwerk in Machu Picchu is beroemd om zijn precisie. Stenen werden zo perfect gesneden en gepast dat er geen mortel nodig was."
        }
      },
      {
        question: {
          en: "Why was Machu Picchu built at such a high altitude?",
          es: "¿Por qué se construyó Machu Picchu a tan gran altitud?",
          de: "Warum wurde Machu Picchu in solch großer Höhe gebaut?",
          nl: "Waarom werd Machu Picchu op zo'n grote hoogte gebouwd?"
        },
        options: [
          { en: "For defense and secrecy", es: "Por defensa y secreto", de: "Zur Verteidigung und Geheimhaltung", nl: "Voor verdediging en geheimhouding" },
          { en: "For better weather", es: "Por mejor clima", de: "Für besseres Wetter", nl: "Voor beter weer" },
          { en: "For mining gold", es: "Para extraer oro", de: "Zum Goldabbau", nl: "Voor het delven van goud" },
          { en: "By accident", es: "Por accidente", de: "Aus Versehen", nl: "Bij ongeluk" }
        ],
        correct: 0,
        explanation: {
          en: "The high altitude location provided natural defense and secrecy, helping to keep Machu Picchu hidden from invaders and making it a secure royal retreat.",
          es: "La ubicación a gran altitud proporcionó defensa natural y secreto, ayudando a mantener Machu Picchu oculto de los invasores y convirtiéndolo en un retiro real seguro.",
          de: "Die Lage in großer Höhe bot natürlichen Schutz und Geheimhaltung, half Machu Picchu vor Eindringlingen verborgen zu halten und machte es zu einem sicheren königlichen Rückzugsort.",
          nl: "De locatie op grote hoogte bood natuurlijke verdediging en geheimhouding, waardoor Machu Picchu verborgen bleef voor indringers en het een veilig koninklijk toevluchtsoord werd."
        }
      },
      {
        question: {
          en: "What season has the most rain at Machu Picchu?",
          es: "¿Qué estación tiene más lluvia en Machu Picchu?",
          de: "Welche Jahreszeit hat am meisten Regen in Machu Picchu?",
          nl: "Welk seizoen heeft de meeste regen in Machu Picchu?"
        },
        options: [
          { en: "Summer (Dec-Mar)", es: "Verano (Dic-Mar)", de: "Sommer (Dez-März)", nl: "Zomer (Dec-Mrt)" },
          { en: "Fall (Apr-Jun)", es: "Otoño (Abr-Jun)", de: "Herbst (Apr-Jun)", nl: "Herfst (Apr-Jun)" },
          { en: "Winter (Jul-Sep)", es: "Invierno (Jul-Sep)", de: "Winter (Jul-Sep)", nl: "Winter (Jul-Sep)" },
          { en: "Spring (Oct-Nov)", es: "Primavera (Oct-Nov)", de: "Frühling (Okt-Nov)", nl: "Lente (Okt-Nov)" }
        ],
        correct: 0,
        explanation: {
          en: "The rainy season at Machu Picchu runs from December to March. Many tourists prefer visiting during the dry season (May-September).",
          es: "La temporada de lluvias en Machu Picchu va de diciembre a marzo. Muchos turistas prefieren visitar durante la temporada seca (mayo-septiembre).",
          de: "Die Regenzeit in Machu Picchu dauert von Dezember bis März. Viele Touristen bevorzugen einen Besuch während der Trockenzeit (Mai-September).",
          nl: "Het regenseizoen in Machu Picchu loopt van december tot maart. Veel toeristen geven de voorkeur aan een bezoek tijdens het droge seizoen (mei-september)."
        }
      },
      {
        question: {
          en: "What crop did the Incas grow at Machu Picchu?",
          es: "¿Qué cultivo cultivaron los Incas en Machu Picchu?",
          de: "Welche Nutzpflanze bauten die Inkas in Machu Picchu an?",
          nl: "Welk gewas verbouwden de Inca's in Machu Picchu?"
        },
        options: [
          { en: "Wheat", es: "Trigo", de: "Weizen", nl: "Tarwe" },
          { en: "Rice", es: "Arroz", de: "Reis", nl: "Rijst" },
          { en: "Potatoes and corn", es: "Papas y maíz", de: "Kartoffeln und Mais", nl: "Aardappelen en maïs" },
          { en: "Bananas", es: "Plátanos", de: "Bananen", nl: "Bananen" }
        ],
        correct: 2,
        explanation: {
          en: "The Incas grew potatoes, corn, and other crops on the agricultural terraces at Machu Picchu to feed the residents.",
          es: "Los Incas cultivaron papas, maíz y otros cultivos en las terrazas agrícolas de Machu Picchu para alimentar a los residentes.",
          de: "Die Inkas bauten Kartoffeln, Mais und andere Nutzpflanzen auf den landwirtschaftlichen Terrassen in Machu Picchu an, um die Bewohner zu ernähren.",
          nl: "De Inca's verbouwden aardappelen, maïs en andere gewassen op de landbouwterrassen in Machu Picchu om de bewoners te voeden."
        }
      },
      {
        question: {
          en: "How long was Machu Picchu inhabited?",
          es: "¿Cuánto tiempo estuvo habitado Machu Picchu?",
          de: "Wie lange war Machu Picchu bewohnt?",
          nl: "Hoe lang was Machu Picchu bewoond?"
        },
        options: [
          { en: "About 10 years", es: "Alrededor de 10 años", de: "Etwa 10 Jahre", nl: "Ongeveer 10 jaar" },
          { en: "About 50 years", es: "Alrededor de 50 años", de: "Etwa 50 Jahre", nl: "Ongeveer 50 jaar" },
          { en: "About 100 years", es: "Alrededor de 100 años", de: "Etwa 100 Jahre", nl: "Ongeveer 100 jaar" },
          { en: "About 500 years", es: "Alrededor de 500 años", de: "Etwa 500 Jahre", nl: "Ongeveer 500 jaar" }
        ],
        correct: 2,
        explanation: {
          en: "Machu Picchu was inhabited for approximately 100 years, from around 1450 until it was abandoned around 1550 during the Spanish conquest.",
          es: "Machu Picchu estuvo habitado durante aproximadamente 100 años, desde alrededor de 1450 hasta que fue abandonado alrededor de 1550 durante la conquista española.",
          de: "Machu Picchu war etwa 100 Jahre lang bewohnt, von etwa 1450 bis es um 1550 während der spanischen Eroberung aufgegeben wurde.",
          nl: "Machu Picchu was ongeveer 100 jaar bewoond, van rond 1450 tot het rond 1550 werd verlaten tijdens de Spaanse verovering."
        }
      },
      {
        question: {
          en: "What is Huayna Picchu?",
          es: "¿Qué es Huayna Picchu?",
          de: "Was ist Huayna Picchu?",
          nl: "Wat is Huayna Picchu?"
        },
        options: [
          { en: "A neighboring mountain peak", es: "Un pico montañoso vecino", de: "Ein benachbarter Berggipfel", nl: "Een naburige bergpiek" },
          { en: "A type of food", es: "Un tipo de comida", de: "Eine Art von Essen", nl: "Een soort voedsel" },
          { en: "An Inca king", es: "Un rey Inca", de: "Ein Inka-König", nl: "Een Inca-koning" },
          { en: "A river", es: "Un río", de: "Ein Fluss", nl: "Een rivier" }
        ],
        correct: 0,
        explanation: {
          en: "Huayna Picchu is the mountain peak that rises behind Machu Picchu in most photographs. Visitors can hike to its summit for spectacular views.",
          es: "Huayna Picchu es el pico de montaña que se eleva detrás de Machu Picchu en la mayoría de las fotografías. Los visitantes pueden subir a su cumbre para vistas espectaculares.",
          de: "Huayna Picchu ist der Berggipfel, der auf den meisten Fotografien hinter Machu Picchu emporragt. Besucher können zu seinem Gipfel wandern für spektakuläre Aussichten.",
          nl: "Huayna Picchu is de bergpiek die achter Machu Picchu oprijst op de meeste foto's. Bezoekers kunnen naar de top wandelen voor spectaculaire uitzichten."
        }
      },
      {
        question: {
          en: "What material did the Incas use for roofs at Machu Picchu?",
          es: "¿Qué material usaron los Incas para los techos en Machu Picchu?",
          de: "Welches Material verwendeten die Inkas für Dächer in Machu Picchu?",
          nl: "Welk materiaal gebruikten de Inca's voor daken in Machu Picchu?"
        },
        options: [
          { en: "Thatch (grass)", es: "Paja (hierba)", de: "Stroh (Gras)", nl: "Stro (gras)" },
          { en: "Tiles", es: "Tejas", de: "Ziegel", nl: "Tegels" },
          { en: "Metal sheets", es: "Láminas de metal", de: "Metallbleche", nl: "Metalen platen" },
          { en: "Concrete", es: "Concreto", de: "Beton", nl: "Beton" }
        ],
        correct: 0,
        explanation: {
          en: "The Incas used thatch made from ichu grass for roofs. These organic materials have not survived, so only the stone walls remain today.",
          es: "Los Incas usaron paja hecha de hierba ichu para los techos. Estos materiales orgánicos no han sobrevivido, por lo que solo quedan las paredes de piedra hoy.",
          de: "Die Inkas verwendeten Stroh aus Ichu-Gras für Dächer. Diese organischen Materialien haben nicht überlebt, daher sind heute nur die Steinmauern erhalten.",
          nl: "De Inca's gebruikten stro gemaakt van ichu-gras voor daken. Deze organische materialen hebben het niet overleefd, dus alleen de stenen muren blijven vandaag over."
        }
      },
      {
        question: {
          en: "What does Machu Picchu demonstrate about Inca engineering?",
          es: "¿Qué demuestra Machu Picchu sobre la ingeniería Inca?",
          de: "Was demonstriert Machu Picchu über Inka-Ingenieurskunst?",
          nl: "Wat toont Machu Picchu aan over Inca-techniek?"
        },
        options: [
          { en: "They were poor builders", es: "Eran malos constructores", de: "Sie waren schlechte Baumeister", nl: "Ze waren slechte bouwers" },
          { en: "They had advanced skills", es: "Tenían habilidades avanzadas", de: "Sie hatten fortgeschrittene Fähigkeiten", nl: "Ze hadden geavanceerde vaardigheden" },
          { en: "They copied other cultures", es: "Copiaron otras culturas", de: "Sie kopierten andere Kulturen", nl: "Ze kopieerden andere culturen" },
          { en: "They used modern tools", es: "Usaron herramientas modernas", de: "Sie benutzten moderne Werkzeuge", nl: "Ze gebruikten moderne gereedschappen" }
        ],
        correct: 1,
        explanation: {
          en: "Machu Picchu demonstrates the Incas' advanced engineering skills in stonework, drainage, agriculture, and astronomy without modern tools.",
          es: "Machu Picchu demuestra las habilidades avanzadas de ingeniería de los Incas en trabajo de piedra, drenaje, agricultura y astronomía sin herramientas modernas.",
          de: "Machu Picchu demonstriert die fortgeschrittenen Ingenieurfähigkeiten der Inkas in Steinarbeit, Entwässerung, Landwirtschaft und Astronomie ohne moderne Werkzeuge.",
          nl: "Machu Picchu toont de geavanceerde technische vaardigheden van de Inca's in steenbewerking, drainage, landbouw en astronomie zonder moderne gereedschappen."
        }
      },
      {
        question: {
          en: "Why do visitors need to acclimatize before visiting Machu Picchu?",
          es: "¿Por qué los visitantes necesitan aclimatarse antes de visitar Machu Picchu?",
          de: "Warum müssen sich Besucher vor dem Besuch von Machu Picchu akklimatisieren?",
          nl: "Waarom moeten bezoekers acclimatiseren voor een bezoek aan Machu Picchu?"
        },
        options: [
          { en: "Because of the heat", es: "Debido al calor", de: "Wegen der Hitze", nl: "Vanwege de hitte" },
          { en: "Because of the high altitude", es: "Debido a la gran altitud", de: "Wegen der großen Höhe", nl: "Vanwege de grote hoogte" },
          { en: "Because of the cold", es: "Debido al frío", de: "Wegen der Kälte", nl: "Vanwege de kou" },
          { en: "Because of the rain", es: "Debido a la lluvia", de: "Wegen des Regens", nl: "Vanwege de regen" }
        ],
        correct: 1,
        explanation: {
          en: "At 2,430 meters elevation, the high altitude can cause altitude sickness. Visitors should spend time in Cusco first to adjust to the thinner air.",
          es: "A 2,430 metros de altitud, la gran altitud puede causar mal de altura. Los visitantes deben pasar tiempo en Cusco primero para ajustarse al aire más delgado.",
          de: "Auf 2.430 Metern Höhe kann die große Höhe Höhenkrankheit verursachen. Besucher sollten zuerst Zeit in Cusco verbringen, um sich an die dünnere Luft zu gewöhnen.",
          nl: "Op 2.430 meter hoogte kan de grote hoogte hoogteziekte veroorzaken. Bezoekers moeten eerst tijd in Cusco doorbrengen om aan de ijlere lucht te wennen."
        }
      },
      {
        question: {
          en: "What famous hiking trail leads to Machu Picchu?",
          es: "¿Qué famoso sendero de senderismo conduce a Machu Picchu?",
          de: "Welcher berühmte Wanderweg führt nach Machu Picchu?",
          nl: "Welk beroemd wandelpad leidt naar Machu Picchu?"
        },
        options: [
          { en: "The Appalachian Trail", es: "El Sendero de los Apalaches", de: "Der Appalachian Trail", nl: "Het Appalachian Trail" },
          { en: "The Inca Trail", es: "El Camino Inca", de: "Der Inka-Pfad", nl: "Het Inca-pad" },
          { en: "The Pacific Crest Trail", es: "El Sendero de la Cresta del Pacífico", de: "Der Pacific Crest Trail", nl: "Het Pacific Crest Trail" },
          { en: "The Silk Road", es: "La Ruta de la Seda", de: "Die Seidenstraße", nl: "De Zijderoute" }
        ],
        correct: 1,
        explanation: {
          en: "The Inca Trail is a famous multi-day hiking route that follows ancient Inca pathways to reach Machu Picchu. It takes about 4 days to complete.",
          es: "El Camino Inca es una famosa ruta de senderismo de varios días que sigue antiguos caminos Incas para llegar a Machu Picchu. Toma alrededor de 4 días completarlo.",
          de: "Der Inka-Pfad ist eine berühmte mehrtägige Wanderroute, die alten Inka-Wegen folgt, um Machu Picchu zu erreichen. Es dauert etwa 4 Tage.",
          nl: "Het Inca-pad is een beroemde meerdaagse wandelroute die oude Inca-paden volgt om Machu Picchu te bereiken. Het duurt ongeveer 4 dagen om te voltooien."
        }
      },
      {
        question: {
          en: "Why is Machu Picchu considered sacred?",
          es: "¿Por qué se considera sagrado Machu Picchu?",
          de: "Warum wird Machu Picchu als heilig angesehen?",
          nl: "Waarom wordt Machu Picchu als heilig beschouwd?"
        },
        options: [
          { en: "It was a place of worship and astronomy", es: "Era un lugar de culto y astronomía", de: "Es war ein Ort der Anbetung und Astronomie", nl: "Het was een plaats van aanbidding en astronomie" },
          { en: "It was a shopping center", es: "Era un centro comercial", de: "Es war ein Einkaufszentrum", nl: "Het was een winkelcentrum" },
          { en: "It was a sports stadium", es: "Era un estadio deportivo", de: "Es war ein Sportstadion", nl: "Het was een sportstadion" },
          { en: "It was a school", es: "Era una escuela", de: "Es war eine Schule", nl: "Het was een school" }
        ],
        correct: 0,
        explanation: {
          en: "Machu Picchu had religious temples and was used for astronomical observations. The Incas worshipped the sun and used the site for ceremonies.",
          es: "Machu Picchu tenía templos religiosos y se usaba para observaciones astronómicas. Los Incas adoraban al sol y usaban el sitio para ceremonias.",
          de: "Machu Picchu hatte religiöse Tempel und wurde für astronomische Beobachtungen genutzt. Die Inkas verehrten die Sonne und nutzten die Stätte für Zeremonien.",
          nl: "Machu Picchu had religieuze tempels en werd gebruikt voor astronomische waarnemingen. De Inca's aanbaden de zon en gebruikten de site voor ceremonies."
        }
      },
      {
        question: {
          en: "What is the Intihuatana stone?",
          es: "¿Qué es la piedra Intihuatana?",
          de: "Was ist der Intihuatana-Stein?",
          nl: "Wat is de Intihuatana-steen?"
        },
        options: [
          { en: "A sundial stone", es: "Una piedra de reloj solar", de: "Ein Sonnenuhren-Stein", nl: "Een zonnewijzersteen" },
          { en: "A cooking stone", es: "Una piedra de cocina", de: "Ein Kochstein", nl: "Een kooksteen" },
          { en: "A sleeping stone", es: "Una piedra para dormir", de: "Ein Schlafstein", nl: "Een slaapsteen" },
          { en: "A decorative stone", es: "Una piedra decorativa", de: "Ein Dekorationsstein", nl: "Een decoratieve steen" }
        ],
        correct: 0,
        explanation: {
          en: "The Intihuatana stone was used as an astronomical clock or sundial by the Incas to mark solstices and track the sun's movements.",
          es: "La piedra Intihuatana fue utilizada como reloj astronómico o reloj solar por los Incas para marcar solsticios y rastrear los movimientos del sol.",
          de: "Der Intihuatana-Stein wurde von den Inkas als astronomische Uhr oder Sonnenuhr verwendet, um Sonnenwenden zu markieren und die Bewegungen der Sonne zu verfolgen.",
          nl: "De Intihuatana-steen werd door de Inca's gebruikt als astronomische klok of zonnewijzer om zonnewendes te markeren en de bewegingen van de zon te volgen."
        }
      },
      {
        question: {
          en: "How many tourists visit Machu Picchu each year?",
          es: "¿Cuántos turistas visitan Machu Picchu cada año?",
          de: "Wie viele Touristen besuchen Machu Picchu jedes Jahr?",
          nl: "Hoeveel toeristen bezoeken Machu Picchu elk jaar?"
        },
        options: [
          { en: "About 50,000", es: "Alrededor de 50,000", de: "Etwa 50.000", nl: "Ongeveer 50.000" },
          { en: "About 500,000", es: "Alrededor de 500,000", de: "Etwa 500.000", nl: "Ongeveer 500.000" },
          { en: "About 1.5 million", es: "Alrededor de 1.5 millones", de: "Etwa 1,5 Millionen", nl: "Ongeveer 1,5 miljoen" },
          { en: "About 5 million", es: "Alrededor de 5 millones", de: "Etwa 5 Millionen", nl: "Ongeveer 5 miljoen" }
        ],
        correct: 2,
        explanation: {
          en: "Approximately 1.5 million tourists visit Machu Picchu each year, making it Peru's most visited tourist attraction.",
          es: "Aproximadamente 1.5 millones de turistas visitan Machu Picchu cada año, convirtiéndolo en la atracción turística más visitada de Perú.",
          de: "Etwa 1,5 Millionen Touristen besuchen Machu Picchu jedes Jahr, was es zu Perus meistbesuchter Touristenattraktion macht.",
          nl: "Ongeveer 1,5 miljoen toeristen bezoeken Machu Picchu elk jaar, waardoor het Peru's meest bezochte toeristische attractie is."
        }
      },
      {
        question: {
          en: "What is the purpose of the drainage system at Machu Picchu?",
          es: "¿Cuál es el propósito del sistema de drenaje en Machu Picchu?",
          de: "Was ist der Zweck des Entwässerungssystems in Machu Picchu?",
          nl: "Wat is het doel van het afvoersysteem in Machu Picchu?"
        },
        options: [
          { en: "To remove rainwater", es: "Para eliminar el agua de lluvia", de: "Um Regenwasser abzuleiten", nl: "Om regenwater af te voeren" },
          { en: "To store water", es: "Para almacenar agua", de: "Um Wasser zu speichern", nl: "Om water op te slaan" },
          { en: "To heat buildings", es: "Para calentar edificios", de: "Um Gebäude zu heizen", nl: "Om gebouwen te verwarmen" },
          { en: "For decoration", es: "Para decoración", de: "Zur Dekoration", nl: "Voor decoratie" }
        ],
        correct: 0,
        explanation: {
          en: "The Incas built an advanced drainage system with channels to remove the heavy rainfall and prevent erosion, which helps preserve the site today.",
          es: "Los Incas construyeron un avanzado sistema de drenaje con canales para eliminar las fuertes lluvias y prevenir la erosión, lo que ayuda a preservar el sitio hoy.",
          de: "Die Inkas bauten ein fortschrittliches Entwässerungssystem mit Kanälen, um den starken Niederschlag abzuleiten und Erosion zu verhindern, was hilft, die Stätte heute zu erhalten.",
          nl: "De Inca's bouwden een geavanceerd afvoersysteem met kanalen om de zware regenval af te voeren en erosie te voorkomen, wat helpt de site vandaag te bewaren."
        }
      },
      {
        question: {
          en: "What continent is Machu Picchu on?",
          es: "¿En qué continente está Machu Picchu?",
          de: "Auf welchem Kontinent liegt Machu Picchu?",
          nl: "Op welk continent ligt Machu Picchu?"
        },
        options: [
          { en: "North America", es: "América del Norte", de: "Nordamerika", nl: "Noord-Amerika" },
          { en: "South America", es: "América del Sur", de: "Südamerika", nl: "Zuid-Amerika" },
          { en: "Europe", es: "Europa", de: "Europa", nl: "Europa" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" }
        ],
        correct: 1,
        explanation: {
          en: "Machu Picchu is located in South America, specifically in the country of Peru in the Andes Mountains.",
          es: "Machu Picchu está ubicado en América del Sur, específicamente en el país de Perú en la cordillera de los Andes.",
          de: "Machu Picchu liegt in Südamerika, genauer gesagt im Land Peru in den Anden.",
          nl: "Machu Picchu ligt in Zuid-Amerika, specifiek in het land Peru in het Andesgebergte."
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