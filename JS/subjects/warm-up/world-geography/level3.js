// World Geography - Level 3: Mountains, Rivers, and Physical Geography
(function() {
  const level3 = {
    name: {
      en: "Mountains, Rivers, and Physical Geography",
      es: "Montañas, Ríos y Geografía Física",
      de: "Berge, Flüsse und physische Geografie",
      nl: "Bergen, Rivieren en Fysische Geografie"
    },
    questions: [
      {
        question: {
          en: "What is the highest mountain in the world?",
          es: "¿Cuál es la montaña más alta del mundo?",
          de: "Was ist der höchste Berg der Welt?",
          nl: "Wat is de hoogste berg ter wereld?"
        },
        options: [
          { en: "Mount Everest", es: "Monte Everest", de: "Mount Everest", nl: "Mount Everest" },
          { en: "K2", es: "K2", de: "K2", nl: "K2" },
          { en: "Kangchenjunga", es: "Kangchenjunga", de: "Kangchenjunga", nl: "Kangchenjunga" },
          { en: "Lhotse", es: "Lhotse", de: "Lhotse", nl: "Lhotse" }
        ],
        correct: 0,
        explanation: {
          en: "Mount Everest is the highest mountain at 8,849 meters above sea level, located on the border between Nepal and Tibet (China).",
          es: "El Monte Everest es la montaña más alta con 8,849 metros sobre el nivel del mar, ubicada en la frontera entre Nepal y Tíbet (China).",
          de: "Mount Everest ist der höchste Berg mit 8.849 Metern über dem Meeresspiegel, an der Grenze zwischen Nepal und Tibet (China) gelegen.",
          nl: "Mount Everest is de hoogste berg op 8.849 meter boven zeeniveau, gelegen op de grens tussen Nepal en Tibet (China)."
        }
      },
      {
        question: {
          en: "What is the longest river in the world?",
          es: "¿Cuál es el río más largo del mundo?",
          de: "Was ist der längste Fluss der Welt?",
          nl: "Wat is de langste rivier ter wereld?"
        },
        options: [
          { en: "Nile River", es: "Río Nilo", de: "Nil", nl: "Nijl" },
          { en: "Amazon River", es: "Río Amazonas", de: "Amazonas", nl: "Amazone" },
          { en: "Yangtze River", es: "Río Yangtsé", de: "Jangtsekiang", nl: "Yangtze" },
          { en: "Mississippi River", es: "Río Mississippi", de: "Mississippi", nl: "Mississippi" }
        ],
        correct: 0,
        explanation: {
          en: "The Nile River is the longest river at about 6,650 kilometers, flowing through northeastern Africa into the Mediterranean Sea.",
          es: "El Río Nilo es el río más largo con aproximadamente 6,650 kilómetros, fluyendo a través del noreste de África hacia el Mar Mediterráneo.",
          de: "Der Nil ist der längste Fluss mit etwa 6.650 Kilometern und fließt durch Nordostafrika ins Mittelmeer.",
          nl: "De Nijl is de langste rivier met ongeveer 6.650 kilometer, stromend door noordoostelijk Afrika naar de Middellandse Zee."
        }
      },
      {
        question: {
          en: "In which mountain range is Mount Everest located?",
          es: "¿En qué cordillera se encuentra el Monte Everest?",
          de: "In welchem Gebirge liegt der Mount Everest?",
          nl: "In welk gebergte ligt de Mount Everest?"
        },
        options: [
          { en: "Himalayas", es: "Himalaya", de: "Himalaya", nl: "Himalaya" },
          { en: "Andes", es: "Andes", de: "Anden", nl: "Andes" },
          { en: "Rocky Mountains", es: "Montañas Rocosas", de: "Rocky Mountains", nl: "Rocky Mountains" },
          { en: "Alps", es: "Alpes", de: "Alpen", nl: "Alpen" }
        ],
        correct: 0,
        explanation: {
          en: "Mount Everest is located in the Himalayas, the world's highest mountain range stretching across several Asian countries.",
          es: "El Monte Everest está ubicado en el Himalaya, la cordillera más alta del mundo que se extiende por varios países asiáticos.",
          de: "Mount Everest liegt im Himalaya, der höchsten Bergkette der Welt, die sich über mehrere asiatische Länder erstreckt.",
          nl: "Mount Everest ligt in de Himalaya, 's werelds hoogste gebergte dat zich uitstrekt over verschillende Aziatische landen."
        }
      },
      {
        question: {
          en: "Which river flows through the Grand Canyon?",
          es: "¿Qué río fluye por el Gran Cañón?",
          de: "Welcher Fluss fließt durch den Grand Canyon?",
          nl: "Welke rivier stroomt door de Grand Canyon?"
        },
        options: [
          { en: "Colorado River", es: "Río Colorado", de: "Colorado River", nl: "Colorado rivier" },
          { en: "Rio Grande", es: "Río Grande", de: "Rio Grande", nl: "Rio Grande" },
          { en: "Missouri River", es: "Río Missouri", de: "Missouri River", nl: "Missouri rivier" },
          { en: "Snake River", es: "Río Snake", de: "Snake River", nl: "Snake rivier" }
        ],
        correct: 0,
        explanation: {
          en: "The Colorado River flows through the Grand Canyon, carving this magnificent canyon over millions of years in Arizona, USA.",
          es: "El Río Colorado fluye por el Gran Cañón, tallando este magnífico cañón durante millones de años en Arizona, EE.UU.",
          de: "Der Colorado River fließt durch den Grand Canyon und hat diese prächtige Schlucht über Millionen von Jahren in Arizona, USA, geformt.",
          nl: "De Colorado rivier stroomt door de Grand Canyon en heeft deze prachtige canyon over miljoenen jaren uitgesleten in Arizona, VS."
        }
      },
      {
        question: {
          en: "What is the largest desert in the world?",
          es: "¿Cuál es el desierto más grande del mundo?",
          de: "Was ist die größte Wüste der Welt?",
          nl: "Wat is de grootste woestijn ter wereld?"
        },
        options: [
          { en: "Antarctica", es: "Antártida", de: "Antarktis", nl: "Antarctica" },
          { en: "Sahara", es: "Sahara", de: "Sahara", nl: "Sahara" },
          { en: "Gobi", es: "Gobi", de: "Gobi", nl: "Gobi" },
          { en: "Kalahari", es: "Kalahari", de: "Kalahari", nl: "Kalahari" }
        ],
        correct: 0,
        explanation: {
          en: "Antarctica is the largest desert in the world by area, classified as a cold desert due to its extremely low precipitation.",
          es: "La Antártida es el desierto más grande del mundo por área, clasificado como un desierto frío debido a su precipitación extremadamente baja.",
          de: "Die Antarktis ist die größte Wüste der Welt nach Fläche, klassifiziert als kalte Wüste aufgrund ihrer extrem geringen Niederschläge.",
          nl: "Antarctica is de grootste woestijn ter wereld qua oppervlakte, geclassificeerd als een koude woestijn vanwege zijn extreem lage neerslag."
        }
      },
      {
        question: {
          en: "Which volcano destroyed Pompeii in 79 AD?",
          es: "¿Qué volcán destruyó Pompeya en el 79 d.C.?",
          de: "Welcher Vulkan zerstörte Pompeji im Jahr 79 n. Chr.?",
          nl: "Welke vulkaan verwoestte Pompeii in 79 na Christus?"
        },
        options: [
          { en: "Mount Vesuvius", es: "Monte Vesubio", de: "Vesuv", nl: "Vesuvius" },
          { en: "Mount Etna", es: "Monte Etna", de: "Ätna", nl: "Etna" },
          { en: "Stromboli", es: "Estrómboli", de: "Stromboli", nl: "Stromboli" },
          { en: "Mount Krakatoa", es: "Monte Krakatoa", de: "Krakatau", nl: "Krakatau" }
        ],
        correct: 0,
        explanation: {
          en: "Mount Vesuvius destroyed Pompeii in 79 AD, burying the Roman city under volcanic ash and preserving it for archaeological study.",
          es: "El Monte Vesubio destruyó Pompeya en el 79 d.C., enterrando la ciudad romana bajo ceniza volcánica y preservándola para estudio arqueológico.",
          de: "Der Vesuv zerstörte Pompeji im Jahr 79 n. Chr., begrub die römische Stadt unter Vulkanasche und bewahrte sie für archäologische Studien.",
          nl: "De Vesuvius verwoestte Pompeii in 79 na Christus, begroef de Romeinse stad onder vulkanische as en bewaarde het voor archeologische studie."
        }
      },
      {
        question: {
          en: "What is the deepest lake in the world?",
          es: "¿Cuál es el lago más profundo del mundo?",
          de: "Was ist der tiefste See der Welt?",
          nl: "Wat is het diepste meer ter wereld?"
        },
        options: [
          { en: "Lake Baikal", es: "Lago Baikal", de: "Baikalsee", nl: "Baikalmeer" },
          { en: "Lake Tanganyika", es: "Lago Tanganyika", de: "Tanganjikasee", nl: "Tanganjikameer" },
          { en: "Caspian Sea", es: "Mar Caspio", de: "Kaspisches Meer", nl: "Kaspische Zee" },
          { en: "Lake Superior", es: "Lago Superior", de: "Oberer See", nl: "Lake Superior" }
        ],
        correct: 0,
        explanation: {
          en: "Lake Baikal is the deepest lake at 1,642 meters deep, containing about 20% of the world's unfrozen fresh water in Siberia, Russia.",
          es: "El Lago Baikal es el lago más profundo con 1,642 metros de profundidad, conteniendo aproximadamente el 20% del agua dulce no congelada del mundo en Siberia, Rusia.",
          de: "Der Baikalsee ist der tiefste See mit 1.642 Metern Tiefe und enthält etwa 20% des ungefrorenen Süßwassers der Welt in Sibirien, Russland.",
          nl: "Het Baikalmeer is het diepste meer op 1.642 meter diep en bevat ongeveer 20% van 's werelds onbevroren zoetwater in Siberië, Rusland."
        }
      },
      {
        question: {
          en: "Which mountain range runs along the western coast of South America?",
          es: "¿Qué cordillera corre a lo largo de la costa occidental de América del Sur?",
          de: "Welche Bergkette verläuft entlang der Westküste Südamerikas?",
          nl: "Welk gebergte loopt langs de westkust van Zuid-Amerika?"
        },
        options: [
          { en: "Andes Mountains", es: "Cordillera de los Andes", de: "Anden", nl: "Andes" },
          { en: "Rocky Mountains", es: "Montañas Rocosas", de: "Rocky Mountains", nl: "Rocky Mountains" },
          { en: "Sierra Nevada", es: "Sierra Nevada", de: "Sierra Nevada", nl: "Sierra Nevada" },
          { en: "Appalachian Mountains", es: "Montes Apalaches", de: "Appalachen", nl: "Appalachen" }
        ],
        correct: 0,
        explanation: {
          en: "The Andes Mountains run along South America's western coast, forming the world's longest continental mountain range at over 7,000 kilometers.",
          es: "Las Montañas de los Andes corren a lo largo de la costa occidental de América del Sur, formando la cordillera continental más larga del mundo con más de 7,000 kilómetros.",
          de: "Die Anden verlaufen entlang der Westküste Südamerikas und bilden die längste kontinentale Bergkette der Welt mit über 7.000 Kilometern.",
          nl: "Het Andesgebergte loopt langs de westkust van Zuid-Amerika en vormt 's werelds langste continentale bergketen van meer dan 7.000 kilometer."
        }
      },
      {
        question: {
          en: "What is the largest freshwater lake by surface area?",
          es: "¿Cuál es el lago de agua dulce más grande por superficie?",
          de: "Was ist der größte Süßwassersee nach Oberfläche?",
          nl: "Wat is het grootste zoetwatermeer qua oppervlakte?"
        },
        options: [
          { en: "Lake Superior", es: "Lago Superior", de: "Oberer See", nl: "Lake Superior" },
          { en: "Lake Baikal", es: "Lago Baikal", de: "Baikalsee", nl: "Baikalmeer" },
          { en: "Lake Victoria", es: "Lago Victoria", de: "Victoriasee", nl: "Victoriameer" },
          { en: "Lake Huron", es: "Lago Hurón", de: "Huronsee", nl: "Huronmeer" }
        ],
        correct: 0,
        explanation: {
          en: "Lake Superior is the largest freshwater lake by surface area, covering 82,100 square kilometers between the USA and Canada.",
          es: "El Lago Superior es el lago de agua dulce más grande por superficie, cubriendo 82,100 kilómetros cuadrados entre EE.UU. y Canadá.",
          de: "Der Obere See ist der größte Süßwassersee nach Oberfläche und bedeckt 82.100 Quadratkilometer zwischen den USA und Kanada.",
          nl: "Lake Superior is het grootste zoetwatermeer qua oppervlakte, dat 82.100 vierkante kilometer beslaat tussen de VS en Canada."
        }
      },
      {
        question: {
          en: "Which waterfall is located on the border between the USA and Canada?",
          es: "¿Qué cascada está ubicada en la frontera entre Estados Unidos y Canadá?",
          de: "Welcher Wasserfall liegt an der Grenze zwischen den USA und Kanada?",
          nl: "Welke waterval ligt op de grens tussen de VS en Canada?"
        },
        options: [
          { en: "Niagara Falls", es: "Cataratas del Niágara", de: "Niagarafälle", nl: "Niagarawatervallen" },
          { en: "Angel Falls", es: "Salto Ángel", de: "Angelfall", nl: "Angelwaterval" },
          { en: "Victoria Falls", es: "Cataratas Victoria", de: "Victoriafälle", nl: "Victoriawatervallen" },
          { en: "Iguazu Falls", es: "Cataratas del Iguazú", de: "Iguazú-Wasserfälle", nl: "Iguazuwatervallen" }
        ],
        correct: 0,
        explanation: {
          en: "Niagara Falls is located on the border between the USA and Canada, consisting of three waterfalls that attract millions of visitors annually.",
          es: "Las Cataratas del Niágara están ubicadas en la frontera entre EE.UU. y Canadá, consistiendo en tres cascadas que atraen millones de visitantes anualmente.",
          de: "Die Niagarafälle liegen an der Grenze zwischen den USA und Kanada und bestehen aus drei Wasserfällen, die jährlich Millionen von Besuchern anziehen.",
          nl: "De Niagarawatervallen liggen op de grens tussen de VS en Canada, bestaande uit drie watervallen die jaarlijks miljoenen bezoekers trekken."
        }
      },
      {
        question: {
          en: "What is the highest waterfall in the world?",
          es: "¿Cuál es la cascada más alta del mundo?",
          de: "Was ist der höchste Wasserfall der Welt?",
          nl: "Wat is de hoogste waterval ter wereld?"
        },
        options: [
          { en: "Angel Falls", es: "Salto Ángel", de: "Angelfall", nl: "Angelwaterval" },
          { en: "Tugela Falls", es: "Cataratas Tugela", de: "Tugela-Fälle", nl: "Tugelawatervallen" },
          { en: "Niagara Falls", es: "Cataratas del Niágara", de: "Niagarafälle", nl: "Niagarawatervallen" },
          { en: "Victoria Falls", es: "Cataratas Victoria", de: "Victoriafälle", nl: "Victoriawatervallen" }
        ],
        correct: 0,
        explanation: {
          en: "Angel Falls is the highest waterfall at 979 meters, located in Venezuela and named after American aviator Jimmy Angel who spotted it.",
          es: "El Salto Ángel es la cascada más alta con 979 metros, ubicada en Venezuela y nombrada por el aviador estadounidense Jimmy Angel que la descubrió.",
          de: "Der Angelfall ist der höchste Wasserfall mit 979 Metern, liegt in Venezuela und ist nach dem amerikanischen Flieger Jimmy Angel benannt, der ihn entdeckte.",
          nl: "De Angelwaterval is de hoogste waterval op 979 meter, gelegen in Venezuela en genoemd naar de Amerikaanse vlieger Jimmy Angel die het ontdekte."
        }
      },
      {
        question: {
          en: "The Dead Sea is located between which two countries?",
          es: "¿Entre qué dos países está ubicado el Mar Muerto?",
          de: "Zwischen welchen zwei Ländern liegt das Tote Meer?",
          nl: "Tussen welke twee landen ligt de Dode Zee?"
        },
        options: [
          { en: "Israel and Jordan", es: "Israel y Jordania", de: "Israel und Jordanien", nl: "Israël en Jordanië" },
          { en: "Israel and Palestine", es: "Israel y Palestina", de: "Israel und Palästina", nl: "Israël en Palestina" },
          { en: "Jordan and Syria", es: "Jordania y Siria", de: "Jordanien und Syrien", nl: "Jordanië en Syrië" },
          { en: "Syria and Lebanon", es: "Siria y Líbano", de: "Syrien und Libanon", nl: "Syrië en Libanon" }
        ],
        correct: 0,
        explanation: {
          en: "The Dead Sea is located between Israel and Jordan, famous for being the lowest point on Earth's surface at 430 meters below sea level.",
          es: "El Mar Muerto está ubicado entre Israel y Jordania, famoso por ser el punto más bajo de la superficie terrestre a 430 metros bajo el nivel del mar.",
          de: "Das Tote Meer liegt zwischen Israel und Jordanien und ist berühmt dafür, der tiefste Punkt der Erdoberfläche zu sein, 430 Meter unter dem Meeresspiegel.",
          nl: "De Dode Zee ligt tussen Israël en Jordanië, beroemd omdat het het laagste punt op het aardoppervlak is op 430 meter onder zeeniveau."
        }
      },
      {
        question: {
          en: "Which river is the longest in Europe?",
          es: "¿Cuál es el río más largo de Europa?",
          de: "Welcher Fluss ist der längste in Europa?",
          nl: "Welke rivier is de langste in Europa?"
        },
        options: [
          { en: "Volga River", es: "Río Volga", de: "Wolga", nl: "Wolga" },
          { en: "Danube River", es: "Río Danubio", de: "Donau", nl: "Donau" },
          { en: "Rhine River", es: "Río Rin", de: "Rhein", nl: "Rijn" },
          { en: "Dnieper River", es: "Río Dniéper", de: "Dnepr", nl: "Dnieper" }
        ],
        correct: 0,
        explanation: {
          en: "The Volga River is Europe's longest river at 3,530 kilometers, flowing through Russia from the Valdai Hills to the Caspian Sea.",
          es: "El Río Volga es el río más largo de Europa con 3,530 kilómetros, fluyendo por Rusia desde las Colinas Valdai hasta el Mar Caspio.",
          de: "Die Wolga ist Europas längster Fluss mit 3.530 Kilometern und fließt durch Russland von den Waldai-Höhen zum Kaspischen Meer.",
          nl: "De Wolga is Europa's langste rivier op 3.530 kilometer, stromend door Rusland van de Valdai-heuvels naar de Kaspische Zee."
        }
      },
      {
        question: {
          en: "Mount Kilimanjaro is located in which country?",
          es: "¿En qué país se encuentra el Monte Kilimanjaro?",
          de: "In welchem Land liegt der Kilimandscharo?",
          nl: "In welk land ligt de Kilimanjaro?"
        },
        options: [
          { en: "Tanzania", es: "Tanzania", de: "Tansania", nl: "Tanzania" },
          { en: "Kenya", es: "Kenia", de: "Kenia", nl: "Kenia" },
          { en: "Uganda", es: "Uganda", de: "Uganda", nl: "Oeganda" },
          { en: "Ethiopia", es: "Etiopía", de: "Äthiopien", nl: "Ethiopië" }
        ],
        correct: 0,
        explanation: {
          en: "Mount Kilimanjaro is located in Tanzania, Africa's highest peak at 5,895 meters with three volcanic cones and famous snow-capped summit.",
          es: "El Monte Kilimanjaro está ubicado en Tanzania, el pico más alto de África a 5,895 metros con tres conos volcánicos y famosa cumbre nevada.",
          de: "Der Kilimandscharo liegt in Tansania, Afrikas höchster Gipfel mit 5.895 Metern, drei Vulkankegeln und berühmtem schneebedecktem Gipfel.",
          nl: "De Kilimanjaro ligt in Tanzania, Afrika's hoogste piek op 5.895 meter met drie vulkanische kegels en beroemde besneeuwde top."
        }
      },
      {
        question: {
          en: "Which desert is the hottest in the world?",
          es: "¿Cuál es el desierto más caliente del mundo?",
          de: "Welche Wüste ist die heißeste der Welt?",
          nl: "Welke woestijn is de heetste ter wereld?"
        },
        options: [
          { en: "Lut Desert", es: "Desierto de Lut", de: "Lut-Wüste", nl: "Lut-woestijn" },
          { en: "Sahara Desert", es: "Desierto del Sahara", de: "Sahara-Wüste", nl: "Sahara-woestijn" },
          { en: "Death Valley", es: "Valle de la Muerte", de: "Death Valley", nl: "Death Valley" },
          { en: "Atacama Desert", es: "Desierto de Atacama", de: "Atacama-Wüste", nl: "Atacama-woestijn" }
        ],
        correct: 0,
        explanation: {
          en: "The Lut Desert in Iran is the hottest desert, with ground temperatures reaching up to 70°C (158°F), hotter than Death Valley.",
          es: "El Desierto de Lut en Irán es el desierto más caliente, con temperaturas del suelo que alcanzan hasta 70°C (158°F), más caliente que el Valle de la Muerte.",
          de: "Die Lut-Wüste im Iran ist die heißeste Wüste, mit Bodentemperaturen bis zu 70°C (158°F), heißer als das Death Valley.",
          nl: "De Lut-woestijn in Iran is de heetste woestijn, met grondtemperaturen tot 70°C (158°F), heter dan Death Valley."
        }
      },
      {
        question: {
          en: "The Amazon River flows into which ocean?",
          es: "¿En qué océano desemboca el río Amazonas?",
          de: "In welchen Ozean mündet der Amazonas?",
          nl: "In welke oceaan mondt de Amazone uit?"
        },
        options: [
          { en: "Atlantic Ocean", es: "Océano Atlántico", de: "Atlantischer Ozean", nl: "Atlantische Oceaan" },
          { en: "Pacific Ocean", es: "Océano Pacífico", de: "Pazifischer Ozean", nl: "Grote Oceaan" },
          { en: "Indian Ocean", es: "Océano Índico", de: "Indischer Ozean", nl: "Indische Oceaan" },
          { en: "Southern Ocean", es: "Océano Austral", de: "Südlicher Ozean", nl: "Zuidelijke Oceaan" }
        ],
        correct: 0,
        explanation: {
          en: "The Amazon River flows into the Atlantic Ocean in Brazil, carrying more water than any other river in the world.",
          es: "El Río Amazonas desemboca en el Océano Atlántico en Brasil, transportando más agua que cualquier otro río del mundo.",
          de: "Der Amazonas mündet in den Atlantischen Ozean in Brasilien und führt mehr Wasser als jeder andere Fluss der Welt.",
          nl: "De Amazone mondt uit in de Atlantische Oceaan in Brazilië en voert meer water dan welke andere rivier ter wereld ook."
        }
      },
      {
        question: {
          en: "What is the lowest point on Earth's surface?",
          es: "¿Cuál es el punto más bajo de la superficie terrestre?",
          de: "Was ist der niedrigste Punkt auf der Erdoberfläche?",
          nl: "Wat is het laagste punt op het aardoppervlak?"
        },
        options: [
          { en: "Dead Sea shore", es: "Orilla del Mar Muerto", de: "Ufer des Toten Meeres", nl: "Oever van de Dode Zee" },
          { en: "Death Valley", es: "Valle de la Muerte", de: "Death Valley", nl: "Death Valley" },
          { en: "Lake Assal", es: "Lago Assal", de: "Assalsee", nl: "Assalmeer" },
          { en: "Turpan Depression", es: "Depresión de Turpan", de: "Turpan-Senke", nl: "Turpan-depressie" }
        ],
        correct: 0,
        explanation: {
          en: "The Dead Sea shore is the lowest point on Earth's surface at 430 meters below sea level, located between Israel and Jordan.",
          es: "La orilla del Mar Muerto es el punto más bajo de la superficie terrestre a 430 metros bajo el nivel del mar, ubicado entre Israel y Jordania.",
          de: "Das Ufer des Toten Meeres ist der tiefste Punkt der Erdoberfläche, 430 Meter unter dem Meeresspiegel, zwischen Israel und Jordanien gelegen.",
          nl: "De oever van de Dode Zee is het laagste punt op het aardoppervlak op 430 meter onder zeeniveau, gelegen tussen Israël en Jordanië."
        }
      },
      {
        question: {
          en: "Which mountain range separates Europe and Asia?",
          es: "¿Qué cordillera separa Europa y Asia?",
          de: "Welche Bergkette trennt Europa und Asien?",
          nl: "Welk gebergte scheidt Europa en Azië?"
        },
        options: [
          { en: "Ural Mountains", es: "Montes Urales", de: "Ural", nl: "Oeral" },
          { en: "Caucasus Mountains", es: "Cáucaso", de: "Kaukasus", nl: "Kaukasus" },
          { en: "Altai Mountains", es: "Montes Altái", de: "Altai", nl: "Altai" },
          { en: "Carpathian Mountains", es: "Cárpatos", de: "Karpaten", nl: "Karpaten" }
        ],
        correct: 0,
        explanation: {
          en: "The Ural Mountains separate Europe and Asia, running north-south through Russia for about 2,500 kilometers.",
          es: "Los Montes Urales separan Europa y Asia, corriendo de norte a sur por Rusia por aproximadamente 2,500 kilómetros.",
          de: "Der Ural trennt Europa und Asien und verläuft nord-südlich durch Russland über etwa 2.500 Kilometer.",
          nl: "Het Oeralgebergte scheidt Europa en Azië en loopt noord-zuid door Rusland over ongeveer 2.500 kilometer."
        }
      },
      {
        question: {
          en: "What is the largest volcano in the world?",
          es: "¿Cuál es el volcán más grande del mundo?",
          de: "Was ist der größte Vulkan der Welt?",
          nl: "Wat is de grootste vulkaan ter wereld?"
        },
        options: [
          { en: "Mauna Loa", es: "Mauna Loa", de: "Mauna Loa", nl: "Mauna Loa" },
          { en: "Mount Fuji", es: "Monte Fuji", de: "Fujisan", nl: "Fuji" },
          { en: "Mount Vesuvius", es: "Monte Vesubio", de: "Vesuv", nl: "Vesuvius" },
          { en: "Mount Etna", es: "Monte Etna", de: "Ätna", nl: "Etna" }
        ],
        correct: 0,
        explanation: {
          en: "Mauna Loa in Hawaii is the largest volcano by volume and mass, covering half of the Big Island of Hawaii.",
          es: "Mauna Loa en Hawai es el volcán más grande por volumen y masa, cubriendo la mitad de la Isla Grande de Hawai.",
          de: "Mauna Loa auf Hawaii ist der größte Vulkan nach Volumen und Masse und bedeckt die Hälfte der Großen Insel Hawaii.",
          nl: "Mauna Loa op Hawaï is de grootste vulkaan qua volume en massa, die de helft van het Grote Eiland van Hawaï bedekt."
        }
      },
      {
        question: {
          en: "The Ganges River is sacred in which religion?",
          es: "¿El río Ganges es sagrado en qué religión?",
          de: "Der Ganges ist in welcher Religion heilig?",
          nl: "De Ganges is heilig in welke religie?"
        },
        options: [
          { en: "Hinduism", es: "Hinduismo", de: "Hinduismus", nl: "Hindoeïsme" },
          { en: "Buddhism", es: "Budismo", de: "Buddhismus", nl: "Boeddhisme" },
          { en: "Sikhism", es: "Sijismo", de: "Sikhismus", nl: "Sikhisme" },
          { en: "Jainism", es: "Jainismo", de: "Jainismus", nl: "Jaïnisme" }
        ],
        correct: 0,
        explanation: {
          en: "The Ganges River is sacred in Hinduism, considered the goddess Ganga and believed to purify sins when bathed in.",
          es: "El Río Ganges es sagrado en el hinduismo, considerado la diosa Ganga y se cree que purifica los pecados al bañarse en él.",
          de: "Der Ganges ist im Hinduismus heilig, gilt als Göttin Ganga und soll Sünden reinigen, wenn man darin badet.",
          nl: "De Ganges is heilig in het hindoeïsme, beschouwd als de godin Ganga en geloofd dat het zonden zuivert bij het baden erin."
        }
      },
      {
        question: {
          en: "Which plateau is known as 'the Roof of the World'?",
          es: "¿Qué meseta es conocida como 'el Techo del Mundo'?",
          de: "Welches Plateau wird als 'Dach der Welt' bezeichnet?",
          nl: "Welk plateau staat bekend als 'het Dak van de Wereld'?"
        },
        options: [
          { en: "Tibetan Plateau", es: "Meseta Tibetana", de: "Tibetisches Plateau", nl: "Tibetaans Plateau" },
          { en: "Altiplano", es: "Altiplano", de: "Altiplano", nl: "Altiplano" },
          { en: "Deccan Plateau", es: "Meseta del Decán", de: "Dekkan-Plateau", nl: "Deccan-plateau" },
          { en: "Colorado Plateau", es: "Meseta de Colorado", de: "Colorado-Plateau", nl: "Colorado-plateau" }
        ],
        correct: 0,
        explanation: {
          en: "The Tibetan Plateau is known as 'the Roof of the World' due to its extremely high elevation, averaging over 4,500 meters above sea level.",
          es: "La Meseta Tibetana es conocida como 'el Techo del Mundo' debido a su elevación extremadamente alta, promediando más de 4,500 metros sobre el nivel del mar.",
          de: "Das Tibetische Plateau wird als 'Dach der Welt' bezeichnet aufgrund seiner extrem hohen Höhe von durchschnittlich über 4.500 Metern über dem Meeresspiegel.",
          nl: "Het Tibetaans Plateau staat bekend als 'het Dak van de Wereld' vanwege zijn extreem hoge hoogte, gemiddeld meer dan 4.500 meter boven zeeniveau."
        }
      },
      {
        question: {
          en: "What is the largest canyon in the world?",
          es: "¿Cuál es el cañón más grande del mundo?",
          de: "Was ist der größte Canyon der Welt?",
          nl: "Wat is de grootste canyon ter wereld?"
        },
        options: [
          { en: "Grand Canyon", es: "Gran Cañón", de: "Grand Canyon", nl: "Grand Canyon" },
          { en: "Fish River Canyon", es: "Cañón del Río Fish", de: "Fish River Canyon", nl: "Fish River Canyon" },
          { en: "Copper Canyon", es: "Cañón del Cobre", de: "Copper Canyon", nl: "Copper Canyon" },
          { en: "Antelope Canyon", es: "Cañón del Antílope", de: "Antelope Canyon", nl: "Antelope Canyon" }
        ],
        correct: 0,
        explanation: {
          en: "The Grand Canyon is the largest canyon, carved by the Colorado River over millions of years, stretching 446 kilometers long and up to 1.6 kilometers deep.",
          es: "El Gran Cañón es el cañón más grande, tallado por el Río Colorado durante millones de años, extendiéndose 446 kilómetros de largo y hasta 1.6 kilómetros de profundidad.",
          de: "Der Grand Canyon ist die größte Schlucht, vom Colorado River über Millionen von Jahren geschnitzt, 446 Kilometer lang und bis zu 1,6 Kilometer tief.",
          nl: "De Grand Canyon is de grootste canyon, uitgesleten door de Colorado rivier over miljoenen jaren, 446 kilometer lang en tot 1,6 kilometer diep."
        }
      },
      {
        question: {
          en: "Which sea is the saltiest body of water on Earth?",
          es: "¿Cuál es el cuerpo de agua más salado de la Tierra?",
          de: "Welches Meer ist das salzigste Gewässer der Erde?",
          nl: "Welke zee is het zoutste waterlichaam op aarde?"
        },
        options: [
          { en: "Dead Sea", es: "Mar Muerto", de: "Totes Meer", nl: "Dode Zee" },
          { en: "Great Salt Lake", es: "Gran Lago Salado", de: "Großer Salzsee", nl: "Great Salt Lake" },
          { en: "Salton Sea", es: "Mar de Salton", de: "Saltonsee", nl: "Salton Sea" },
          { en: "Lake Urmia", es: "Lago Urmia", de: "Urmia-See", nl: "Urmiameer" }
        ],
        correct: 0,
        explanation: {
          en: "The Dead Sea is the saltiest body of water on Earth, with salinity about 10 times higher than most oceans, allowing people to float easily.",
          es: "El Mar Muerto es el cuerpo de agua más salado de la Tierra, con salinidad aproximadamente 10 veces mayor que la mayoría de los océanos, permitiendo que las personas floten fácilmente.",
          de: "Das Tote Meer ist das salzigste Gewässer der Erde, mit etwa 10-mal höherem Salzgehalt als die meisten Ozeane, wodurch Menschen leicht schwimmen können.",
          nl: "De Dode Zee is het zoutste waterlichaam op aarde, met een zoutgehalte ongeveer 10 keer hoger dan de meeste oceanen, waardoor mensen gemakkelijk kunnen drijven."
        }
      },
      {
        question: {
          en: "Mount McKinley is located in which US state?",
          es: "¿En qué estado de Estados Unidos se encuentra el Monte McKinley?",
          de: "In welchem US-Bundesstaat liegt Mount McKinley?",
          nl: "In welke Amerikaanse staat ligt Mount McKinley?"
        },
        options: [
          { en: "Alaska", es: "Alaska", de: "Alaska", nl: "Alaska" },
          { en: "Colorado", es: "Colorado", de: "Colorado", nl: "Colorado" },
          { en: "Montana", es: "Montana", de: "Montana", nl: "Montana" },
          { en: "Washington", es: "Washington", de: "Washington", nl: "Washington" }
        ],
        correct: 0,
        explanation: {
          en: "Mount McKinley (now called Denali) is located in Alaska, the highest mountain in North America at 6,190 meters above sea level.",
          es: "El Monte McKinley (ahora llamado Denali) está ubicado en Alaska, la montaña más alta de América del Norte a 6,190 metros sobre el nivel del mar.",
          de: "Mount McKinley (jetzt Denali genannt) liegt in Alaska, der höchste Berg Nordamerikas mit 6.190 Metern über dem Meeresspiegel.",
          nl: "Mount McKinley (nu Denali genoemd) ligt in Alaska, de hoogste berg van Noord-Amerika op 6.190 meter boven zeeniveau."
        }
      },
      {
        question: {
          en: "The Mekong River flows through how many countries?",
          es: "¿Por cuántos países fluye el río Mekong?",
          de: "Durch wie viele Länder fließt der Mekong?",
          nl: "Door hoeveel landen stroomt de Mekong?"
        },
        options: [
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "7", es: "7", de: "7", nl: "7" }
        ],
        correct: 0,
        explanation: {
          en: "The Mekong River flows through 6 countries: China, Myanmar, Laos, Thailand, Cambodia, and Vietnam, supporting over 60 million people.",
          es: "El Río Mekong fluye por 6 países: China, Myanmar, Laos, Tailandia, Camboya y Vietnam, sustentando a más de 60 millones de personas.",
          de: "Der Mekong fließt durch 6 Länder: China, Myanmar, Laos, Thailand, Kambodscha und Vietnam und unterstützt über 60 Millionen Menschen.",
          nl: "De Mekong stroomt door 6 landen: China, Myanmar, Laos, Thailand, Cambodja en Vietnam, en ondersteunt meer dan 60 miljoen mensen."
        }
      },
      {
        question: {
          en: "What is the name of the mountain range in eastern North America?",
          es: "¿Cuál es el nombre de la cordillera en el este de América del Norte?",
          de: "Wie heißt die Bergkette im Osten Nordamerikas?",
          nl: "Wat is de naam van het gebergte in het oosten van Noord-Amerika?"
        },
        options: [
          { en: "Appalachian Mountains", es: "Montes Apalaches", de: "Appalachen", nl: "Appalachen" },
          { en: "Rocky Mountains", es: "Montañas Rocosas", de: "Rocky Mountains", nl: "Rocky Mountains" },
          { en: "Sierra Nevada", es: "Sierra Nevada", de: "Sierra Nevada", nl: "Sierra Nevada" },
          { en: "Cascade Range", es: "Cordillera de las Cascadas", de: "Kaskadenkette", nl: "Cascade Range" }
        ],
        correct: 0,
        explanation: {
          en: "The Appalachian Mountains are the mountain range in eastern North America, extending from Canada to Alabama over 3,200 kilometers.",
          es: "Los Montes Apalaches son la cordillera en el este de América del Norte, extendiéndose desde Canadá hasta Alabama por más de 3,200 kilómetros.",
          de: "Die Appalachen sind die Bergkette im Osten Nordamerikas und erstrecken sich von Kanada bis Alabama über 3.200 Kilometer.",
          nl: "De Appalachen zijn het gebergte in het oosten van Noord-Amerika, zich uitstrekkend van Canada tot Alabama over 3.200 kilometer."
        }
      },
      {
        question: {
          en: "Which river forms much of the border between Mexico and the United States?",
          es: "¿Qué río forma gran parte de la frontera entre México y Estados Unidos?",
          de: "Welcher Fluss bildet einen Großteil der Grenze zwischen Mexiko und den USA?",
          nl: "Welke rivier vormt een groot deel van de grens tussen Mexico en de Verenigde Staten?"
        },
        options: [
          { en: "Rio Grande", es: "Río Grande", de: "Rio Grande", nl: "Rio Grande" },
          { en: "Colorado River", es: "Río Colorado", de: "Colorado River", nl: "Colorado rivier" },
          { en: "Brazos River", es: "Río Brazos", de: "Brazos River", nl: "Brazos rivier" },
          { en: "Pecos River", es: "Río Pecos", de: "Pecos River", nl: "Pecos rivier" }
        ],
        correct: 0,
        explanation: {
          en: "The Rio Grande forms much of the border between Mexico and the United States, flowing 3,034 kilometers from Colorado to the Gulf of Mexico.",
          es: "El Río Grande forma gran parte de la frontera entre México y Estados Unidos, fluyendo 3,034 kilómetros desde Colorado hasta el Golfo de México.",
          de: "Der Rio Grande bildet einen Großteil der Grenze zwischen Mexiko und den USA und fließt 3.034 Kilometer von Colorado bis zum Golf von Mexiko.",
          nl: "De Rio Grande vormt een groot deel van de grens tussen Mexico en de Verenigde Staten, stromend 3.034 kilometer van Colorado tot de Golf van Mexico."
        }
      },
      {
        question: {
          en: "The Gobi Desert spans across which two countries?",
          es: "¿El Desierto de Gobi se extiende por qué dos países?",
          de: "Die Gobi-Wüste erstreckt sich über welche zwei Länder?",
          nl: "De Gobi-woestijn strekt zich uit over welke twee landen?"
        },
        options: [
          { en: "Mongolia and China", es: "Mongolia y China", de: "Mongolei und China", nl: "Mongolië en China" },
          { en: "China and Kazakhstan", es: "China y Kazajistán", de: "China und Kasachstan", nl: "China en Kazachstan" },
          { en: "Mongolia and Russia", es: "Mongolia y Rusia", de: "Mongolei und Russland", nl: "Mongolië en Rusland" },
          { en: "China and India", es: "China e India", de: "China und Indien", nl: "China en India" }
        ],
        correct: 0,
        explanation: {
          en: "The Gobi Desert spans across Mongolia and China, covering about 1.3 million square kilometers and known for extreme temperature variations.",
          es: "El Desierto de Gobi se extiende por Mongolia y China, cubriendo aproximadamente 1.3 millones de kilómetros cuadrados y conocido por variaciones extremas de temperatura.",
          de: "Die Gobi-Wüste erstreckt sich über die Mongolei und China, bedeckt etwa 1,3 Millionen Quadratkilometer und ist für extreme Temperaturschwankungen bekannt.",
          nl: "De Gobi-woestijn strekt zich uit over Mongolië en China, beslaat ongeveer 1,3 miljoen vierkante kilometer en staat bekend om extreme temperatuurvariaties."
        }
      },
      {
        question: {
          en: "What is the largest island in the Mediterranean Sea?",
          es: "¿Cuál es la isla más grande del Mar Mediterráneo?",
          de: "Was ist die größte Insel im Mittelmeer?",
          nl: "Wat is het grootste eiland in de Middellandse Zee?"
        },
        options: [
          { en: "Sicily", es: "Sicilia", de: "Sizilien", nl: "Sicilië" },
          { en: "Sardinia", es: "Cerdeña", de: "Sardinien", nl: "Sardinië" },
          { en: "Cyprus", es: "Chipre", de: "Zypern", nl: "Cyprus" },
          { en: "Corsica", es: "Córcega", de: "Korsika", nl: "Corsica" }
        ],
        correct: 0,
        explanation: {
          en: "Sicily is the largest island in the Mediterranean Sea, covering 25,711 square kilometers and located at the southern tip of Italy.",
          es: "Sicilia es la isla más grande del Mar Mediterráneo, cubriendo 25,711 kilómetros cuadrados y ubicada en el extremo sur de Italia.",
          de: "Sizilien ist die größte Insel im Mittelmeer, bedeckt 25.711 Quadratkilometer und liegt an der Südspitze Italiens.",
          nl: "Sicilië is het grootste eiland in de Middellandse Zee, beslaat 25.711 vierkante kilometer en ligt aan de zuidpunt van Italië."
        }
      },
      {
        question: {
          en: "The Atacama Desert is located in which continent?",
          es: "¿En qué continente se encuentra el Desierto de Atacama?",
          de: "Auf welchem Kontinent liegt die Atacama-Wüste?",
          nl: "Op welk continent ligt de Atacama-woestijn?"
        },
        options: [
          { en: "South America", es: "América del Sur", de: "Südamerika", nl: "Zuid-Amerika" },
          { en: "North America", es: "América del Norte", de: "Nordamerika", nl: "Noord-Amerika" },
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" }
        ],
        correct: 0,
        explanation: {
          en: "The Atacama Desert is located in South America, primarily in Chile, and is the world's driest non-polar desert.",
          es: "El Desierto de Atacama está ubicado en América del Sur, principalmente en Chile, y es el desierto no polar más seco del mundo.",
          de: "Die Atacama-Wüste liegt in Südamerika, hauptsächlich in Chile, und ist die trockenste nicht-polare Wüste der Welt.",
          nl: "De Atacama-woestijn ligt in Zuid-Amerika, voornamelijk in Chili, en is de droogste niet-polaire woestijn ter wereld."
        }
      },
      {
        question: {
          en: "Which lake is shared by Peru and Bolivia?",
          es: "¿Qué lago comparten Perú y Bolivia?",
          de: "Welcher See wird von Peru und Bolivien geteilt?",
          nl: "Welk meer wordt gedeeld door Peru en Bolivia?"
        },
        options: [
          { en: "Lake Titicaca", es: "Lago Titicaca", de: "Titicacasee", nl: "Titicacameer" },
          { en: "Lake Maracaibo", es: "Lago de Maracaibo", de: "Maracaibo-See", nl: "Maracaibomeer" },
          { en: "Lake Poopó", es: "Lago Poopó", de: "Poopó-See", nl: "Poopómeer" },
          { en: "Lake Junín", es: "Lago Junín", de: "Junín-See", nl: "Junínmeer" }
        ],
        correct: 0,
        explanation: {
          en: "Lake Titicaca is shared by Peru and Bolivia, the world's highest navigable lake at 3,812 meters above sea level in the Andes Mountains.",
          es: "El Lago Titicaca es compartido por Perú y Bolivia, el lago navegable más alto del mundo a 3,812 metros sobre el nivel del mar en las Montañas de los Andes.",
          de: "Der Titicacasee wird von Peru und Bolivien geteilt, der höchste schiffbare See der Welt auf 3.812 Metern über dem Meeresspiegel in den Anden.",
          nl: "Het Titicacameer wordt gedeeld door Peru en Bolivia, het hoogste bevaarbare meer ter wereld op 3.812 meter boven zeeniveau in het Andesgebergte."
        }
      },
      {
        question: {
          en: "Mount Aconcagua, the highest peak in South America, is located in which country?",
          es: "¿En qué país se encuentra el Monte Aconcagua, el pico más alto de América del Sur?",
          de: "In welchem Land liegt der Aconcagua, der höchste Gipfel Südamerikas?",
          nl: "In welk land ligt Mount Aconcagua, de hoogste piek van Zuid-Amerika?"
        },
        options: [
          { en: "Argentina", es: "Argentina", de: "Argentinien", nl: "Argentinië" },
          { en: "Chile", es: "Chile", de: "Chile", nl: "Chili" },
          { en: "Peru", es: "Perú", de: "Peru", nl: "Peru" },
          { en: "Bolivia", es: "Bolivia", de: "Bolivien", nl: "Bolivia" }
        ],
        correct: 0,
        explanation: {
          en: "Mount Aconcagua is located in Argentina, standing at 6,960 meters as the highest peak in both South America and the Western Hemisphere.",
          es: "El Monte Aconcagua está ubicado en Argentina, alzándose a 6,960 metros como el pico más alto tanto de América del Sur como del Hemisferio Occidental.",
          de: "Der Aconcagua liegt in Argentinien und ist mit 6.960 Metern der höchste Gipfel Südamerikas und der westlichen Hemisphäre.",
          nl: "Mount Aconcagua ligt in Argentinië, op 6.960 meter de hoogste piek van zowel Zuid-Amerika als het westelijk halfrond."
        }
      },
      {
        question: {
          en: "What is the largest river by volume in the world?",
          es: "¿Cuál es el río más grande por volumen en el mundo?",
          de: "Was ist der größte Fluss nach Volumen der Welt?",
          nl: "Wat is de grootste rivier qua volume ter wereld?"
        },
        options: [
          { en: "Amazon River", es: "Río Amazonas", de: "Amazonas", nl: "Amazone" },
          { en: "Congo River", es: "Río Congo", de: "Kongo", nl: "Congo" },
          { en: "Yangtze River", es: "Río Yangtsé", de: "Jangtsekiang", nl: "Yangtze" },
          { en: "Mississippi River", es: "Río Mississippi", de: "Mississippi", nl: "Mississippi" }
        ],
        correct: 0,
        explanation: {
          en: "The Amazon River is the largest river by volume, discharging more water into the Atlantic Ocean than the next seven largest rivers combined.",
          es: "El Río Amazonas es el río más grande por volumen, descargando más agua en el Océano Atlántico que los siguientes siete ríos más grandes combinados.",
          de: "Der Amazonas ist der größte Fluss nach Volumen und leitet mehr Wasser in den Atlantik als die nächsten sieben größten Flüsse zusammen.",
          nl: "De Amazone is de grootste rivier qua volume en loost meer water in de Atlantische Oceaan dan de volgende zeven grootste rivieren samen."
        }
      },
      {
        question: {
          en: "Which strait separates Spain from Morocco?",
          es: "¿Qué estrecho separa España de Marruecos?",
          de: "Welche Meerenge trennt Spanien von Marokko?",
          nl: "Welke zeestraat scheidt Spanje van Marokko?"
        },
        options: [
          { en: "Strait of Gibraltar", es: "Estrecho de Gibraltar", de: "Straße von Gibraltar", nl: "Straat van Gibraltar" },
          { en: "Strait of Hormuz", es: "Estrecho de Ormuz", de: "Straße von Hormus", nl: "Straat van Hormuz" },
          { en: "Bosphorus Strait", es: "Estrecho del Bósforo", de: "Bosporus", nl: "Bosporus" },
          { en: "Dardanelles", es: "Dardanelos", de: "Dardanellen", nl: "Dardanellen" }
        ],
        correct: 0,
        explanation: {
          en: "The Strait of Gibraltar separates Spain from Morocco, with only 14 kilometers between Europe and Africa at its narrowest point.",
          es: "El Estrecho de Gibraltar separa España de Marruecos, con solo 14 kilómetros entre Europa y África en su punto más estrecho.",
          de: "Die Straße von Gibraltar trennt Spanien von Marokko, mit nur 14 Kilometern zwischen Europa und Afrika an der schmalsten Stelle.",
          nl: "De Straat van Gibraltar scheidt Spanje van Marokko, met slechts 14 kilometer tussen Europa en Afrika op het smalste punt."
        }
      },
      {
        question: {
          en: "The Victoria Falls are located on which river?",
          es: "¿En qué río se encuentran las Cataratas Victoria?",
          de: "An welchem Fluss liegen die Victoriafälle?",
          nl: "Aan welke rivier liggen de Victoriawatervallen?"
        },
        options: [
          { en: "Zambezi River", es: "Río Zambeze", de: "Sambesi", nl: "Zambezi" },
          { en: "Congo River", es: "Río Congo", de: "Kongo", nl: "Congo" },
          { en: "Niger River", es: "Río Níger", de: "Niger", nl: "Niger" },
          { en: "Orange River", es: "Río Orange", de: "Oranje", nl: "Oranjerivier" }
        ],
        correct: 0,
        explanation: {
          en: "The Victoria Falls are located on the Zambezi River, on the border between Zambia and Zimbabwe, and are one of the world's largest waterfalls.",
          es: "Las Cataratas Victoria están ubicadas en el Río Zambeze, en la frontera entre Zambia y Zimbabue, y son una de las cascadas más grandes del mundo.",
          de: "Die Victoriafälle liegen am Sambesi, an der Grenze zwischen Sambia und Simbabwe, und sind einer der größten Wasserfälle der Welt.",
          nl: "De Victoriawatervallen liggen aan de Zambezi, op de grens tussen Zambia en Zimbabwe, en zijn een van 's werelds grootste watervallen."
        }
      },
      {
        question: {
          en: "What is the highest mountain in Africa?",
          es: "¿Cuál es la montaña más alta de África?",
          de: "Was ist der höchste Berg in Afrika?",
          nl: "Wat is de hoogste berg in Afrika?"
        },
        options: [
          { en: "Mount Kilimanjaro", es: "Monte Kilimanjaro", de: "Kilimandscharo", nl: "Kilimanjaro" },
          { en: "Mount Kenya", es: "Monte Kenia", de: "Mount Kenya", nl: "Mount Kenya" },
          { en: "Mount Elgon", es: "Monte Elgon", de: "Mount Elgon", nl: "Mount Elgon" },
          { en: "Mount Cameroon", es: "Monte Camerún", de: "Kamerunberg", nl: "Mount Cameroon" }
        ],
        correct: 0,
        explanation: {
          en: "Mount Kilimanjaro is the highest mountain in Africa at 5,895 meters, located in Tanzania with three volcanic cones and glaciers near the summit.",
          es: "El Monte Kilimanjaro es la montaña más alta de África a 5,895 metros, ubicado en Tanzania con tres conos volcánicos y glaciares cerca de la cumbre.",
          de: "Der Kilimandscharo ist der höchste Berg Afrikas mit 5.895 Metern, liegt in Tansania mit drei Vulkankegeln und Gletschern nahe dem Gipfel.",
          nl: "De Kilimanjaro is de hoogste berg van Afrika op 5.895 meter, gelegen in Tanzania met drie vulkanische kegels en gletsjers nabij de top."
        }
      },
      {
        question: {
          en: "The Ring of Fire is associated with which geological feature?",
          es: "¿El Anillo de Fuego está asociado con qué característica geológica?",
          de: "Der Feuerring ist mit welchem geologischen Merkmal verbunden?",
          nl: "De Ring van Vuur wordt geassocieerd met welk geologisch kenmerk?"
        },
        options: [
          { en: "Volcanoes", es: "Volcanes", de: "Vulkane", nl: "Vulkanen" },
          { en: "Deserts", es: "Desiertos", de: "Wüsten", nl: "Woestijnen" },
          { en: "Glaciers", es: "Glaciares", de: "Gletscher", nl: "Gletsjers" },
          { en: "Canyons", es: "Cañones", de: "Schluchten", nl: "Canyons" }
        ],
        correct: 0,
        explanation: {
          en: "The Ring of Fire is associated with volcanoes, forming a horseshoe-shaped zone around the Pacific Ocean with frequent volcanic and seismic activity.",
          es: "El Anillo de Fuego está asociado con volcanes, formando una zona en forma de herradura alrededor del Océano Pacífico con frecuente actividad volcánica y sísmica.",
          de: "Der Feuerring ist mit Vulkanen verbunden und bildet eine hufeisenförmige Zone um den Pazifischen Ozean mit häufiger vulkanischer und seismischer Aktivität.",
          nl: "De Ring van Vuur wordt geassocieerd met vulkanen, vormend een hoefijzervormige zone rond de Grote Oceaan met frequente vulkanische en seismische activiteit."
        }
      },
      {
        question: {
          en: "What is the deepest point in the ocean?",
          es: "¿Cuál es el punto más profundo del océano?",
          de: "Was ist der tiefste Punkt im Ozean?",
          nl: "Wat is het diepste punt in de oceaan?"
        },
        options: [
          { en: "Challenger Deep", es: "Abismo Challenger", de: "Challengertief", nl: "Challenger Deep" },
          { en: "Puerto Rico Trench", es: "Fosa de Puerto Rico", de: "Puerto-Rico-Graben", nl: "Puerto Rico-trog" },
          { en: "Peru-Chile Trench", es: "Fosa Perú-Chile", de: "Peru-Chile-Graben", nl: "Peru-Chili-trog" },
          { en: "Java Trench", es: "Fosa de Java", de: "Java-Graben", nl: "Java-trog" }
        ],
        correct: 0,
        explanation: {
          en: "Challenger Deep is the deepest point in the ocean at over 11,000 meters below sea level, located in the Mariana Trench in the Pacific Ocean.",
          es: "El Abismo Challenger es el punto más profundo del océano a más de 11,000 metros bajo el nivel del mar, ubicado en la Fosa de las Marianas en el Océano Pacífico.",
          de: "Das Challengertief ist der tiefste Punkt im Ozean mit über 11.000 Metern unter dem Meeresspiegel, im Marianengraben im Pazifischen Ozean gelegen.",
          nl: "Challenger Deep is het diepste punt in de oceaan op meer dan 11.000 meter onder zeeniveau, gelegen in de Marianentrog in de Grote Oceaan."
        }
      },
      {
        question: {
          en: "The Sahara Desert covers most of which type of climate zone?",
          es: "¿El Desierto del Sahara cubre la mayor parte de qué tipo de zona climática?",
          de: "Die Sahara-Wüste bedeckt hauptsächlich welche Art von Klimazone?",
          nl: "De Sahara-woestijn beslaat het grootste deel van welk type klimaatzone?"
        },
        options: [
          { en: "Arid", es: "Árido", de: "Trocken", nl: "Droog" },
          { en: "Tropical", es: "Tropical", de: "Tropisch", nl: "Tropisch" },
          { en: "Temperate", es: "Templado", de: "Gemäßigt", nl: "Gematigd" },
          { en: "Polar", es: "Polar", de: "Polar", nl: "Polair" }
        ],
        correct: 0,
        explanation: {
          en: "The Sahara Desert covers most of the arid climate zone in North Africa, characterized by very low rainfall and extreme temperatures.",
          es: "El Desierto del Sahara cubre la mayor parte de la zona climática árida en el Norte de África, caracterizada por muy poca lluvia y temperaturas extremas.",
          de: "Die Sahara-Wüste bedeckt den größten Teil der trockenen Klimazone in Nordafrika, gekennzeichnet durch sehr geringe Niederschläge und extreme Temperaturen.",
          nl: "De Sahara-woestijn beslaat het grootste deel van de droge klimaatzone in Noord-Afrika, gekenmerkt door zeer weinig regenval en extreme temperaturen."
        }
      },
      {
        question: {
          en: "Which mountain range contains the Matterhorn?",
          es: "¿Qué cordillera contiene el Matterhorn?",
          de: "Welche Bergkette enthält das Matterhorn?",
          nl: "Welk gebergte bevat de Matterhorn?"
        },
        options: [
          { en: "Alps", es: "Alpes", de: "Alpen", nl: "Alpen" },
          { en: "Pyrenees", es: "Pirineos", de: "Pyrenäen", nl: "Pyreneeën" },
          { en: "Carpathians", es: "Cárpatos", de: "Karpaten", nl: "Karpaten" },
          { en: "Apennines", es: "Apeninos", de: "Apenninen", nl: "Apennijnen" }
        ],
        correct: 0,
        explanation: {
          en: "The Alps contain the Matterhorn, a famous pyramid-shaped mountain peak on the border between Switzerland and Italy at 4,478 meters high.",
          es: "Los Alpes contienen el Matterhorn, un famoso pico montañoso en forma de pirámide en la frontera entre Suiza e Italia a 4,478 metros de altura.",
          de: "Die Alpen enthalten das Matterhorn, einen berühmten pyramidenförmigen Berggipfel an der Grenze zwischen der Schweiz und Italien auf 4.478 Metern Höhe.",
          nl: "De Alpen bevatten de Matterhorn, een beroemde piramidevoormige bergpiek op de grens tussen Zwitserland en Italië op 4.478 meter hoogte."
        }
      },
      {
        question: {
          en: "The Great Rift Valley runs through which continent?",
          es: "¿El Gran Valle del Rift atraviesa qué continente?",
          de: "Das Große Rift Valley verläuft durch welchen Kontinent?",
          nl: "De Great Rift Valley loopt door welk continent?"
        },
        options: [
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "South America", es: "América del Sur", de: "Südamerika", nl: "Zuid-Amerika" },
          { en: "North America", es: "América del Norte", de: "Nordamerika", nl: "Noord-Amerika" }
        ],
        correct: 0,
        explanation: {
          en: "The Great Rift Valley runs through Africa, a geological trench system extending from Lebanon to Mozambique, created by tectonic plate movements.",
          es: "El Gran Valle del Rift atraviesa África, un sistema de fosas geológicas que se extiende desde Líbano hasta Mozambique, creado por movimientos de placas tectónicas.",
          de: "Das Große Rift Valley verläuft durch Afrika, ein geologisches Grabensystem, das sich vom Libanon bis Mosambik erstreckt und durch tektonische Plattenbewegungen entstanden ist.",
          nl: "De Great Rift Valley loopt door Afrika, een geologisch spleetsysteem dat zich uitstrekt van Libanon tot Mozambique, ontstaan door tektonische plaatbewegingen."
        }
      },
      {
        question: {
          en: "Which peninsula is the largest in the world?",
          es: "¿Cuál es la península más grande del mundo?",
          de: "Welche Halbinsel ist die größte der Welt?",
          nl: "Welk schiereiland is het grootste ter wereld?"
        },
        options: [
          { en: "Arabian Peninsula", es: "Península Arábiga", de: "Arabische Halbinsel", nl: "Arabisch Schiereiland" },
          { en: "Indian Peninsula", es: "Península Índica", de: "Indische Halbinsel", nl: "Indiase Schiereiland" },
          { en: "Iberian Peninsula", es: "Península Ibérica", de: "Iberische Halbinsel", nl: "Iberisch Schiereiland" },
          { en: "Scandinavian Peninsula", es: "Península Escandinava", de: "Skandinavische Halbinsel", nl: "Scandinavisch Schiereiland" }
        ],
        correct: 0,
        explanation: {
          en: "The Arabian Peninsula is the largest peninsula in the world, covering about 3.2 million square kilometers in Southwest Asia.",
          es: "La Península Arábiga es la península más grande del mundo, cubriendo aproximadamente 3.2 millones de kilómetros cuadrados en el Suroeste de Asia.",
          de: "Die Arabische Halbinsel ist die größte Halbinsel der Welt und bedeckt etwa 3,2 Millionen Quadratkilometer in Südwestasien.",
          nl: "Het Arabisch Schiereiland is het grootste schiereiland ter wereld, dat ongeveer 3,2 miljoen vierkante kilometer beslaat in Zuidwest-Azië."
        }
      },
      {
        question: {
          en: "What is the longest mountain range in the world?",
          es: "¿Cuál es la cordillera más larga del mundo?",
          de: "Was ist die längste Bergkette der Welt?",
          nl: "Wat is het langste gebergte ter wereld?"
        },
        options: [
          { en: "Andes Mountains", es: "Cordillera de los Andes", de: "Anden", nl: "Andes" },
          { en: "Rocky Mountains", es: "Montañas Rocosas", de: "Rocky Mountains", nl: "Rocky Mountains" },
          { en: "Himalayas", es: "Himalaya", de: "Himalaya", nl: "Himalaya" },
          { en: "Great Dividing Range", es: "Gran Cordillera Divisoria", de: "Great Dividing Range", nl: "Great Dividing Range" }
        ],
        correct: 0,
        explanation: {
          en: "The Andes Mountains are the longest mountain range in the world, stretching over 7,000 kilometers along South America's western coast.",
          es: "Las Montañas de los Andes son la cordillera más larga del mundo, extendiéndose más de 7,000 kilómetros a lo largo de la costa occidental de América del Sur.",
          de: "Die Anden sind die längste Bergkette der Welt und erstrecken sich über 7.000 Kilometer entlang der Westküste Südamerikas.",
          nl: "Het Andesgebergte is de langste bergketen ter wereld, die zich meer dan 7.000 kilometer uitstrekt langs de westkust van Zuid-Amerika."
        }
      },
      {
        question: {
          en: "The Bering Sea separates which two continents?",
          es: "¿El Mar de Bering separa qué dos continentes?",
          de: "Das Beringmeer trennt welche zwei Kontinente?",
          nl: "De Beringzee scheidt welke twee continenten?"
        },
        options: [
          { en: "Asia and North America", es: "Asia y América del Norte", de: "Asien und Nordamerika", nl: "Azië en Noord-Amerika" },
          { en: "Europe and Asia", es: "Europa y Asia", de: "Europa und Asien", nl: "Europa en Azië" },
          { en: "North and South America", es: "América del Norte y del Sur", de: "Nord- und Südamerika", nl: "Noord- en Zuid-Amerika" },
          { en: "Africa and Europe", es: "África y Europa", de: "Afrika und Europa", nl: "Afrika en Europa" }
        ],
        correct: 0,
        explanation: {
          en: "The Bering Sea separates Asia and North America, located between Alaska and Russia in the northernmost part of the Pacific Ocean.",
          es: "El Mar de Bering separa Asia y América del Norte, ubicado entre Alaska y Rusia en la parte más norteña del Océano Pacífico.",
          de: "Das Beringmeer trennt Asien und Nordamerika und liegt zwischen Alaska und Russland im nördlichsten Teil des Pazifischen Ozeans.",
          nl: "De Beringzee scheidt Azië en Noord-Amerika, gelegen tussen Alaska en Rusland in het noordelijkste deel van de Grote Oceaan."
        }
      },
      {
        question: {
          en: "What type of landform is Uluru in Australia?",
          es: "¿Qué tipo de formación terrestre es Uluru en Australia?",
          de: "Was für eine Landform ist Uluru in Australien?",
          nl: "Wat voor type landvorm is Uluru in Australië?"
        },
        options: [
          { en: "Monolith", es: "Monolito", de: "Monolith", nl: "Monoliet" },
          { en: "Volcano", es: "Volcán", de: "Vulkan", nl: "Vulkaan" },
          { en: "Mesa", es: "Mesa", de: "Tafelberg", nl: "Tafelberg" },
          { en: "Canyon", es: "Cañón", de: "Schlucht", nl: "Canyon" }
        ],
        correct: 0,
        explanation: {
          en: "Uluru is a monolith, a massive single rock formation rising 348 meters above the surrounding desert in central Australia.",
          es: "Uluru es un monolito, una formación rocosa masi va que se eleva 348 metros sobre el desierto circundante en el centro de Australia.",
          de: "Uluru ist ein Monolith, eine massive Einzelfelsformation, die 348 Meter über die umgebende Wüste in Zentralaustralien aufragt.",
          nl: "Uluru is een monoliet, een massieve enkele rotsformatie die 348 meter boven de omringende woestijn in centraal Australië uitsteekt."
        }
      },
      {
        question: {
          en: "The Patagonia region spans across which two countries?",
          es: "¿La región de la Patagonia se extiende por qué dos países?",
          de: "Die Region Patagonien erstreckt sich über welche zwei Länder?",
          nl: "De Patagonië-regio strekt zich uit over welke twee landen?"
        },
        options: [
          { en: "Argentina and Chile", es: "Argentina y Chile", de: "Argentinien und Chile", nl: "Argentinië en Chili" },
          { en: "Chile and Bolivia", es: "Chile y Bolivia", de: "Chile und Bolivien", nl: "Chili en Bolivia" },
          { en: "Argentina and Uruguay", es: "Argentina y Uruguay", de: "Argentinien und Uruguay", nl: "Argentinië en Uruguay" },
          { en: "Brazil and Argentina", es: "Brasil y Argentina", de: "Brasilien und Argentinien", nl: "Brazilië en Argentinië" }
        ],
        correct: 0,
        explanation: {
          en: "The Patagonia region spans across Argentina and Chile, covering the southern portion of South America with diverse landscapes from glaciers to deserts.",
          es: "La región de la Patagonia se extiende por Argentina y Chile, cubriendo la porción sur de América del Sur con paisajes diversos desde glaciares hasta desiertos.",
          de: "Die Region Patagonien erstreckt sich über Argentinien und Chile und bedeckt den südlichen Teil Südamerikas mit vielfältigen Landschaften von Gletschern bis Wüsten.",
          nl: "De Patagonië-regio strekt zich uit over Argentinië en Chili en beslaat het zuidelijke deel van Zuid-Amerika met diverse landschappen van gletsjers tot woestijnen."
        }
      },
      {
        question: {
          en: "What is the deepest point on Earth?",
          es: "¿Cuál es el punto más profundo de la Tierra?",
          de: "Was ist der tiefste Punkt auf der Erde?",
          nl: "Wat is het diepste punt op aarde?"
        },
        options: [
          { en: "Mariana Trench", es: "Fosa de las Marianas", de: "Marianengraben", nl: "Marianentrog" },
          { en: "Puerto Rico Trench", es: "Fosa de Puerto Rico", de: "Puerto-Rico-Graben", nl: "Puerto Rico-trog" },
          { en: "Japan Trench", es: "Fosa de Japón", de: "Japan-Graben", nl: "Japan-trog" },
          { en: "Peru-Chile Trench", es: "Fosa Perú-Chile", de: "Peru-Chile-Graben", nl: "Peru-Chili-trog" }
        ],
        correct: 0,
        explanation: {
          en: "The Mariana Trench is the deepest point on Earth, reaching a maximum depth of about 11,034 meters (36,200 feet) at Challenger Deep in the Pacific Ocean.",
          es: "La Fosa de las Marianas es el punto más profundo de la Tierra, alcanzando una profundidad máxima de unos 11,034 metros (36,200 pies) en el Abismo Challenger en el Océano Pacífico.",
          de: "Der Marianengraben ist der tiefste Punkt der Erde und erreicht eine maximale Tiefe von etwa 11.034 Metern (36.200 Fuß) im Challenger-Tief im Pazifischen Ozean.",
          nl: "De Marianentrog is het diepste punt op aarde en bereikt een maximale diepte van ongeveer 11.034 meter (36.200 voet) in de Challenger Deep in de Grote Oceaan."
        }
      },
      {
        question: {
          en: "Which desert is the largest hot desert in the world?",
          es: "¿Cuál desierto es el desierto cálido más grande del mundo?",
          de: "Welche Wüste ist die größte heiße Wüste der Welt?",
          nl: "Welke woestijn is de grootste hete woestijn ter wereld?"
        },
        options: [
          { en: "Sahara Desert", es: "Desierto del Sahara", de: "Sahara-Wüste", nl: "Sahara-woestijn" },
          { en: "Arabian Desert", es: "Desierto Arábigo", de: "Arabische Wüste", nl: "Arabische woestijn" },
          { en: "Kalahari Desert", es: "Desierto de Kalahari", de: "Kalahari-Wüste", nl: "Kalahari-woestijn" },
          { en: "Great Victoria Desert", es: "Gran Desierto Victoria", de: "Great Victoria Desert", nl: "Great Victoria Desert" }
        ],
        correct: 0,
        explanation: {
          en: "The Sahara Desert is the largest hot desert in the world, covering approximately 9 million square kilometers across North Africa, roughly the size of the United States.",
          es: "El Desierto del Sahara es el desierto cálido más grande del mundo, cubriendo aproximadamente 9 millones de kilómetros cuadrados a través del norte de África, aproximadamente del tamaño de Estados Unidos.",
          de: "Die Sahara-Wüste ist die größte heiße Wüste der Welt und erstreckt sich über etwa 9 Millionen Quadratkilometer in Nordafrika, ungefähr so groß wie die Vereinigten Staaten.",
          nl: "De Sahara-woestijn is de grootste hete woestijn ter wereld en beslaat ongeveer 9 miljoen vierkante kilometer in Noord-Afrika, ongeveer zo groot als de Verenigde Staten."
        }
      },
      {
        question: {
          en: "What type of volcano is Mount Fuji?",
          es: "¿Qué tipo de volcán es el Monte Fuji?",
          de: "Was für ein Vulkantyp ist der Mount Fuji?",
          nl: "Wat voor type vulkaan is Mount Fuji?"
        },
        options: [
          { en: "Stratovolcano", es: "Estratovolcán", de: "Schichtvulkan", nl: "Stratovulkaan" },
          { en: "Shield volcano", es: "Volcán escudo", de: "Schildvulkan", nl: "Schildvulkaan" },
          { en: "Cinder cone", es: "Cono de ceniza", de: "Schlackenkegel", nl: "Sinterkegel" },
          { en: "Caldera", es: "Caldera", de: "Caldera", nl: "Caldera" }
        ],
        correct: 0,
        explanation: {
          en: "Mount Fuji is a stratovolcano (also called composite volcano), characterized by its steep-sided, symmetrical cone shape formed by alternating layers of lava flows and volcanic debris.",
          es: "El Monte Fuji es un estratovolcán (también llamado volcán compuesto), caracterizado por su forma cónica simétrica de lados empinados formada por capas alternadas de flujos de lava y desechos volcánicos.",
          de: "Der Mount Fuji ist ein Schichtvulkan (auch zusammengesetzter Vulkan genannt), charakterisiert durch seine steile, symmetrische Kegelform, die durch abwechselnde Schichten von Lavaströmen und vulkanischen Trümmern gebildet wird.",
          nl: "Mount Fuji is een stratovulkaan (ook wel samengestelde vulkaan genoemd), gekenmerkt door zijn steile, symmetrische kegelvorm gevormd door afwisselende lagen lavastromen en vulkanisch puin."
        }
      },
      {
        question: {
          en: "Which plateau is known as the 'Roof of the World'?",
          es: "¿Qué meseta es conocida como el 'Techo del Mundo'?",
          de: "Welches Plateau ist als 'Dach der Welt' bekannt?",
          nl: "Welk plateau staat bekend als het 'Dak van de Wereld'?"
        },
        options: [
          { en: "Tibetan Plateau", es: "Meseta Tibetana", de: "Tibetisches Plateau", nl: "Tibetaans Plateau" },
          { en: "Altiplano", es: "Altiplano", de: "Altiplano", nl: "Altiplano" },
          { en: "Deccan Plateau", es: "Meseta del Decán", de: "Dekkan-Plateau", nl: "Deccan-plateau" },
          { en: "Brazilian Highlands", es: "Altiplano Brasileño", de: "Brasilianisches Bergland", nl: "Braziliaanse Hooglanden" }
        ],
        correct: 0,
        explanation: {
          en: "The Tibetan Plateau is known as the 'Roof of the World' due to its extremely high elevation, with an average altitude of over 4,500 meters (14,800 feet) above sea level.",
          es: "La Meseta Tibetana es conocida como el 'Techo del Mundo' debido a su elevación extremadamente alta, con una altitud promedio de más de 4,500 metros (14,800 pies) sobre el nivel del mar.",
          de: "Das Tibetische Plateau ist als 'Dach der Welt' bekannt aufgrund seiner extrem hohen Erhebung, mit einer durchschnittlichen Höhe von über 4.500 Metern (14.800 Fuß) über dem Meeresspiegel.",
          nl: "Het Tibetaans Plateau staat bekend als het 'Dak van de Wereld' vanwege zijn extreem hoge hoogte, met een gemiddelde hoogte van meer dan 4.500 meter (14.800 voet) boven zeeniveau."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('warm-up/world-geography', level3);
  }
})();