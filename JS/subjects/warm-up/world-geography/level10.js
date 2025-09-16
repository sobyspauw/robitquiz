// World Geography - Level 10: Advanced Geography and World Records
(function() {
  const level10 = {
    name: {
      en: "Advanced Geography and World Records",
      es: "Geografía Avanzada y Récords Mundiales",
      de: "Erweiterte Geografie und Weltrekorde",
      nl: "Gevorderde Geografie en Wereldrecords"
    },
    questions: [
      {
        question: {
          en: "What is the most linguistically diverse country in the world?",
          es: "¿Cuál es el país más diverso lingüísticamente del mundo?",
          de: "Was ist das sprachlich vielfältigste Land der Welt?",
          nl: "Wat is het meest taalkundig diverse land ter wereld?"
        },
        options: [
          { en: "Papua New Guinea", es: "Papúa Nueva Guinea", de: "Papua-Neuguinea", nl: "Papoea-Nieuw-Guinea" },
          { en: "Indonesia", es: "Indonesia", de: "Indonesien", nl: "Indonesië" },
          { en: "Nigeria", es: "Nigeria", de: "Nigeria", nl: "Nigeria" },
          { en: "India", es: "India", de: "Indien", nl: "India" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which point is the farthest from any ocean on Earth?",
          es: "¿Cuál es el punto más alejado de cualquier océano en la Tierra?",
          de: "Welcher Punkt ist am weitesten von jedem Ozean auf der Erde entfernt?",
          nl: "Welk punt is het verst verwijderd van elke oceaan op aarde?"
        },
        options: [
          { en: "Pole of Inaccessibility (Eurasia)", es: "Polo de Inaccesibilidad (Eurasia)", de: "Pol der Unzugänglichkeit (Eurasien)", nl: "Pool van Ontoegankelijkheid (Eurazië)" },
          { en: "Geographic center of Africa", es: "Centro geográfico de África", de: "Geografisches Zentrum Afrikas", nl: "Geografisch centrum van Afrika" },
          { en: "Center of Australia", es: "Centro de Australia", de: "Zentrum Australiens", nl: "Centrum van Australië" },
          { en: "Middle of Siberia", es: "Medio de Siberia", de: "Mitte Sibiriens", nl: "Midden van Siberië" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the name of the supercontinent that existed 300 million years ago?",
          es: "¿Cuál es el nombre del supercontinente que existió hace 300 millones de años?",
          de: "Wie heißt der Superkontinent, der vor 300 Millionen Jahren existierte?",
          nl: "Wat is de naam van het supercontinent dat 300 miljoen jaar geleden bestond?"
        },
        options: [
          { en: "Pangaea", es: "Pangea", de: "Pangäa", nl: "Pangaea" },
          { en: "Gondwana", es: "Gondwana", de: "Gondwana", nl: "Gondwana" },
          { en: "Laurasia", es: "Laurasia", de: "Laurasia", nl: "Laurazië" },
          { en: "Rodinia", es: "Rodinia", de: "Rodinia", nl: "Rodinia" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which country has the most UNESCO World Heritage Sites?",
          es: "¿Qué país tiene más sitios del Patrimonio Mundial de la UNESCO?",
          de: "Welches Land hat die meisten UNESCO-Welterbestätten?",
          nl: "Welk land heeft de meeste UNESCO Werelderfgoedlocaties?"
        },
        options: [
          { en: "Italy", es: "Italia", de: "Italien", nl: "Italië" },
          { en: "China", es: "China", de: "China", nl: "China" },
          { en: "Spain", es: "España", de: "Spanien", nl: "Spanje" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the deepest point accessible by land on Earth?",
          es: "¿Cuál es el punto más profundo accesible por tierra en la Tierra?",
          de: "Was ist der tiefste von Land aus zugängliche Punkt auf der Erde?",
          nl: "Wat is het diepste punt dat over land toegankelijk is op aarde?"
        },
        options: [
          { en: "Dead Sea shore", es: "Orilla del Mar Muerto", de: "Ufer des Toten Meeres", nl: "Oever van de Dode Zee" },
          { en: "Death Valley", es: "Valle de la Muerte", de: "Death Valley", nl: "Death Valley" },
          { en: "Lake Assal", es: "Lago Assal", de: "Assalsee", nl: "Assalmeer" },
          { en: "Turpan Depression", es: "Depresión de Turpan", de: "Turpan-Senke", nl: "Turpan-depressie" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which tectonic plate is the largest?",
          es: "¿Cuál es la placa tectónica más grande?",
          de: "Welche tektonische Platte ist die größte?",
          nl: "Welke tektonische plaat is de grootste?"
        },
        options: [
          { en: "Pacific Plate", es: "Placa del Pacífico", de: "Pazifische Platte", nl: "Pacifische Plaat" },
          { en: "North American Plate", es: "Placa Norteamericana", de: "Nordamerikanische Platte", nl: "Noord-Amerikaanse Plaat" },
          { en: "Eurasian Plate", es: "Placa Euroasiática", de: "Eurasische Platte", nl: "Euraziatische Plaat" },
          { en: "African Plate", es: "Placa Africana", de: "Afrikanische Platte", nl: "Afrikaanse Plaat" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the most remote inhabited island in the world?",
          es: "¿Cuál es la isla habitada más remota del mundo?",
          de: "Was ist die abgelegenste bewohnte Insel der Welt?",
          nl: "Wat is het meest afgelegen bewoonde eiland ter wereld?"
        },
        options: [
          { en: "Tristan da Cunha", es: "Tristán de Acuña", de: "Tristan da Cunha", nl: "Tristan da Cunha" },
          { en: "Easter Island", es: "Isla de Pascua", de: "Osterinsel", nl: "Paaseiland" },
          { en: "Pitcairn Island", es: "Isla Pitcairn", de: "Pitcairninseln", nl: "Pitcairneilanden" },
          { en: "St. Helena", es: "Santa Elena", de: "St. Helena", nl: "Sint-Helena" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which country has the most natural lakes?",
          es: "¿Qué país tiene más lagos naturales?",
          de: "Welches Land hat die meisten natürlichen Seen?",
          nl: "Welk land heeft de meeste natuurlijke meren?"
        },
        options: [
          { en: "Canada", es: "Canadá", de: "Kanada", nl: "Canada" },
          { en: "Finland", es: "Finlandia", de: "Finnland", nl: "Finland" },
          { en: "Sweden", es: "Suecia", de: "Schweden", nl: "Zweden" },
          { en: "Russia", es: "Rusia", de: "Russland", nl: "Rusland" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the most volcanically active region on Earth?",
          es: "¿Cuál es la región más volcánicamente activa de la Tierra?",
          de: "Was ist die vulkanisch aktivste Region der Erde?",
          nl: "Wat is de meest vulkanisch actieve regio op aarde?"
        },
        options: [
          { en: "Ring of Fire", es: "Anillo de Fuego", de: "Feuerring", nl: "Ring van Vuur" },
          { en: "Mid-Atlantic Ridge", es: "Dorsal Mesoatlántica", de: "Mittelatlantischer Rücken", nl: "Mid-Atlantische Rug" },
          { en: "East African Rift", es: "Gran Valle del Rift", de: "Ostafrikanischer Graben", nl: "Oost-Afrikaanse Slenk" },
          { en: "Mediterranean Belt", es: "Cinturón Mediterráneo", de: "Mediterrane Gürtel", nl: "Mediterrane Gordel" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which country has the longest total coastline?",
          es: "¿Qué país tiene la costa total más larga?",
          de: "Welches Land hat die längste Gesamtküstenlinie?",
          nl: "Welk land heeft de langste totale kustlijn?"
        },
        options: [
          { en: "Canada", es: "Canadá", de: "Kanada", nl: "Canada" },
          { en: "Norway", es: "Noruega", de: "Norwegen", nl: "Noorwegen" },
          { en: "Indonesia", es: "Indonesia", de: "Indonesien", nl: "Indonesië" },
          { en: "Greenland", es: "Groenlandia", de: "Grönland", nl: "Groenland" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the largest hot desert in the world?",
          es: "¿Cuál es el desierto cálido más grande del mundo?",
          de: "Was ist die größte heiße Wüste der Welt?",
          nl: "Wat is de grootste hete woestijn ter wereld?"
        },
        options: [
          { en: "Sahara Desert", es: "Desierto del Sahara", de: "Sahara", nl: "Sahara" },
          { en: "Arabian Desert", es: "Desierto Arábigo", de: "Arabische Wüste", nl: "Arabische woestijn" },
          { en: "Kalahari Desert", es: "Desierto de Kalahari", de: "Kalahari", nl: "Kalahari" },
          { en: "Great Victoria Desert", es: "Gran Desierto Victoria", de: "Große Victoria-Wüste", nl: "Grote Victoria-woestijn" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which country spans the most latitude?",
          es: "¿Qué país abarca más latitud?",
          de: "Welches Land erstreckt sich über die meisten Breitengrade?",
          nl: "Welk land beslaat de meeste breedtegraden?"
        },
        options: [
          { en: "Chile", es: "Chile", de: "Chile", nl: "Chili" },
          { en: "Russia", es: "Rusia", de: "Russland", nl: "Rusland" },
          { en: "Canada", es: "Canadá", de: "Kanada", nl: "Canada" },
          { en: "Brazil", es: "Brasil", de: "Brasilien", nl: "Brazilië" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the largest river delta in the world?",
          es: "¿Cuál es el delta fluvial más grande del mundo?",
          de: "Was ist das größte Flussdelta der Welt?",
          nl: "Wat is de grootste rivierdelta ter wereld?"
        },
        options: [
          { en: "Ganges-Brahmaputra Delta", es: "Delta del Ganges-Brahmaputra", de: "Ganges-Brahmaputra-Delta", nl: "Ganges-Brahmaputra-delta" },
          { en: "Mississippi River Delta", es: "Delta del Río Mississippi", de: "Mississippi-Delta", nl: "Mississippi-delta" },
          { en: "Nile Delta", es: "Delta del Nilo", de: "Nil-Delta", nl: "Nijl-delta" },
          { en: "Amazon Delta", es: "Delta del Amazonas", de: "Amazonas-Delta", nl: "Amazone-delta" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which mountain range has the most peaks over 8,000 meters?",
          es: "¿Qué cordillera tiene más picos de más de 8,000 metros?",
          de: "Welches Gebirge hat die meisten Gipfel über 8.000 Meter?",
          nl: "Welk gebergte heeft de meeste pieken boven de 8.000 meter?"
        },
        options: [
          { en: "Himalayas", es: "Himalaya", de: "Himalaya", nl: "Himalaya" },
          { en: "Karakoram", es: "Karakórum", de: "Karakorum", nl: "Karakorum" },
          { en: "Hindu Kush", es: "Hindu Kush", de: "Hindukusch", nl: "Hindu Kush" },
          { en: "Andes", es: "Andes", de: "Anden", nl: "Andes" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the most seismically active country in the world?",
          es: "¿Cuál es el país sísmicamente más activo del mundo?",
          de: "Was ist das seismisch aktivste Land der Welt?",
          nl: "Wat is het seismisch meest actieve land ter wereld?"
        },
        options: [
          { en: "Japan", es: "Japón", de: "Japan", nl: "Japan" },
          { en: "Indonesia", es: "Indonesia", de: "Indonesien", nl: "Indonesië" },
          { en: "Chile", es: "Chile", de: "Chile", nl: "Chili" },
          { en: "Turkey", es: "Turquía", de: "Türkei", nl: "Turkije" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which country has the highest population density?",
          es: "¿Qué país tiene la mayor densidad de población?",
          de: "Welches Land hat die höchste Bevölkerungsdichte?",
          nl: "Welk land heeft de hoogste bevolkingsdichtheid?"
        },
        options: [
          { en: "Monaco", es: "Mónaco", de: "Monaco", nl: "Monaco" },
          { en: "Singapore", es: "Singapur", de: "Singapur", nl: "Singapore" },
          { en: "Vatican City", es: "Ciudad del Vaticano", de: "Vatikanstadt", nl: "Vaticaanstad" },
          { en: "Bahrain", es: "Baréin", de: "Bahrain", nl: "Bahrein" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the largest archipelago in the world?",
          es: "¿Cuál es el archipiélago más grande del mundo?",
          de: "Was ist der größte Archipel der Welt?",
          nl: "Wat is de grootste archipel ter wereld?"
        },
        options: [
          { en: "Malay Archipelago", es: "Archipiélago Malayo", de: "Malaiischer Archipel", nl: "Maleise Archipel" },
          { en: "Caribbean Islands", es: "Islas del Caribe", de: "Karibische Inseln", nl: "Caribische Eilanden" },
          { en: "Japanese Archipelago", es: "Archipiélago Japonés", de: "Japanischer Archipel", nl: "Japanse Archipel" },
          { en: "Greek Islands", es: "Islas Griegas", de: "Griechische Inseln", nl: "Griekse Eilanden" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which country has the most neighbors (land borders)?",
          es: "¿Qué país tiene más vecinos (fronteras terrestres)?",
          de: "Welches Land hat die meisten Nachbarn (Landgrenzen)?",
          nl: "Welk land heeft de meeste buurlanden (landgrenzen)?"
        },
        options: [
          { en: "China", es: "China", de: "China", nl: "China" },
          { en: "Russia", es: "Rusia", de: "Russland", nl: "Rusland" },
          { en: "Brazil", es: "Brasil", de: "Brasilien", nl: "Brazilië" },
          { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the longest mountain range in the world?",
          es: "¿Cuál es la cordillera más larga del mundo?",
          de: "Was ist das längste Gebirge der Welt?",
          nl: "Wat is het langste gebergte ter wereld?"
        },
        options: [
          { en: "Andes Mountains", es: "Cordillera de los Andes", de: "Anden", nl: "Andes" },
          { en: "Rocky Mountains", es: "Montañas Rocosas", de: "Rocky Mountains", nl: "Rocky Mountains" },
          { en: "Himalayas", es: "Himalaya", de: "Himalaya", nl: "Himalaya" },
          { en: "Great Dividing Range", es: "Gran Cordillera Divisoria", de: "Great Dividing Range", nl: "Great Dividing Range" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which continent has the most countries?",
          es: "¿Qué continente tiene más países?",
          de: "Welcher Kontinent hat die meisten Länder?",
          nl: "Welk continent heeft de meeste landen?"
        },
        options: [
          { en: "Africa", es: "África", de: "Afrika", nl: "Afrika" },
          { en: "Asia", es: "Asia", de: "Asien", nl: "Azië" },
          { en: "Europe", es: "Europa", de: "Europa", nl: "Europa" },
          { en: "South America", es: "América del Sur", de: "Südamerika", nl: "Zuid-Amerika" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the largest freshwater island in the world?",
          es: "¿Cuál es la isla de agua dulce más grande del mundo?",
          de: "Was ist die größte Süßwasserinsel der Welt?",
          nl: "Wat is het grootste zoetwatereilend ter wereld?"
        },
        options: [
          { en: "Manitoulin Island", es: "Isla Manitoulin", de: "Manitoulin-Insel", nl: "Manitoulin-eiland" },
          { en: "Isle Royale", es: "Isla Royale", de: "Isle Royale", nl: "Isle Royale" },
          { en: "Drummond Island", es: "Isla Drummond", de: "Drummond Island", nl: "Drummond Island" },
          { en: "Pelee Island", es: "Isla Pelee", de: "Pelee Island", nl: "Pelee Island" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which desert covers the most countries?",
          es: "¿Qué desierto cubre más países?",
          de: "Welche Wüste erstreckt sich über die meisten Länder?",
          nl: "Welke woestijn beslaat de meeste landen?"
        },
        options: [
          { en: "Sahara Desert", es: "Desierto del Sahara", de: "Sahara", nl: "Sahara" },
          { en: "Arabian Desert", es: "Desierto Arábigo", de: "Arabische Wüste", nl: "Arabische woestijn" },
          { en: "Gobi Desert", es: "Desierto de Gobi", de: "Gobi-Wüste", nl: "Gobi-woestijn" },
          { en: "Kalahari Desert", es: "Desierto de Kalahari", de: "Kalahari", nl: "Kalahari" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the highest navigable lake in the world?",
          es: "¿Cuál es el lago navegable más alto del mundo?",
          de: "Was ist der höchstgelegene schiffbare See der Welt?",
          nl: "Wat is het hoogst bevaarbare meer ter wereld?"
        },
        options: [
          { en: "Lake Titicaca", es: "Lago Titicaca", de: "Titicacasee", nl: "Titicacameer" },
          { en: "Lake Nam Co", es: "Lago Nam Co", de: "Nam Co", nl: "Nam Co" },
          { en: "Lake Manasarovar", es: "Lago Manasarovar", de: "Manasarovar", nl: "Manasarovar" },
          { en: "Pangong Tso", es: "Pangong Tso", de: "Pangong Tso", nl: "Pangong Tso" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which country has the most glaciers outside of Antarctica and Greenland?",
          es: "¿Qué país tiene más glaciares fuera de la Antártida y Groenlandia?",
          de: "Welches Land hat die meisten Gletscher außerhalb der Antarktis und Grönlands?",
          nl: "Welk land heeft de meeste gletsjers buiten Antarctica en Groenland?"
        },
        options: [
          { en: "Alaska (USA)", es: "Alaska (EE.UU.)", de: "Alaska (USA)", nl: "Alaska (VS)" },
          { en: "Canada", es: "Canadá", de: "Kanada", nl: "Canada" },
          { en: "Norway", es: "Noruega", de: "Norwegen", nl: "Noorwegen" },
          { en: "Iceland", es: "Islandia", de: "Island", nl: "IJsland" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the largest cave system in the world?",
          es: "¿Cuál es el sistema de cuevas más grande del mundo?",
          de: "Was ist das größte Höhlensystem der Welt?",
          nl: "Wat is het grootste grotensysteem ter wereld?"
        },
        options: [
          { en: "Mammoth Cave System", es: "Sistema de Cuevas Mammoth", de: "Mammoth-Höhlensystem", nl: "Mammoth Cave-systeem" },
          { en: "Carlsbad Caverns", es: "Cavernas de Carlsbad", de: "Carlsbad-Höhlen", nl: "Carlsbad Caverns" },
          { en: "Son Tra Cave", es: "Cueva Son Tra", de: "Son Tra Höhle", nl: "Son Tra-grot" },
          { en: "Lechuguilla Cave", es: "Cueva Lechuguilla", de: "Lechuguilla-Höhle", nl: "Lechuguilla-grot" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which country has the most active volcanoes?",
          es: "¿Qué país tiene más volcanes activos?",
          de: "Welches Land hat die meisten aktiven Vulkane?",
          nl: "Welk land heeft de meeste actieve vulkanen?"
        },
        options: [
          { en: "Indonesia", es: "Indonesia", de: "Indonesien", nl: "Indonesië" },
          { en: "Japan", es: "Japón", de: "Japan", nl: "Japan" },
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },
          { en: "Russia", es: "Rusia", de: "Russland", nl: "Rusland" }
        ],
        correct: 0
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
          { en: "Ganges River", es: "Río Ganges", de: "Ganges", nl: "Ganges" },
          { en: "Mississippi River", es: "Río Mississippi", de: "Mississippi", nl: "Mississippi" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which strait has the strongest ocean current?",
          es: "¿Qué estrecho tiene la corriente oceánica más fuerte?",
          de: "Welche Meerenge hat die stärkste Meeresströmung?",
          nl: "Welke zeestraat heeft de sterkste oceaanstroom?"
        },
        options: [
          { en: "Drake Passage", es: "Pasaje de Drake", de: "Drake-Passage", nl: "Drakepassage" },
          { en: "Strait of Gibraltar", es: "Estrecho de Gibraltar", de: "Straße von Gibraltar", nl: "Straat van Gibraltar" },
          { en: "Bering Strait", es: "Estrecho de Bering", de: "Beringstraße", nl: "Beringstraat" },
          { en: "Strait of Malacca", es: "Estrecho de Malaca", de: "Straße von Malakka", nl: "Straat van Malakka" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the oldest national park in the world?",
          es: "¿Cuál es el parque nacional más antiguo del mundo?",
          de: "Was ist der älteste Nationalpark der Welt?",
          nl: "Wat is het oudste nationale park ter wereld?"
        },
        options: [
          { en: "Yellowstone National Park", es: "Parque Nacional Yellowstone", de: "Yellowstone-Nationalpark", nl: "Yellowstone National Park" },
          { en: "Banff National Park", es: "Parque Nacional Banff", de: "Banff-Nationalpark", nl: "Banff National Park" },
          { en: "Kruger National Park", es: "Parque Nacional Kruger", de: "Kruger-Nationalpark", nl: "Kruger National Park" },
          { en: "Royal National Park", es: "Parque Nacional Real", de: "Royal-Nationalpark", nl: "Royal National Park" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which country has the most varied climate zones?",
          es: "¿Qué país tiene las zonas climáticas más variadas?",
          de: "Welches Land hat die vielfältigsten Klimazonen?",
          nl: "Welk land heeft de meest gevarieerde klimaatzones?"
        },
        options: [
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },
          { en: "Russia", es: "Rusia", de: "Russland", nl: "Rusland" },
          { en: "China", es: "China", de: "China", nl: "China" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the largest salt flat in the world?",
          es: "¿Cuál es el salar más grande del mundo?",
          de: "Was ist die größte Salzwüste der Welt?",
          nl: "Wat is de grootste zoutvlakte ter wereld?"
        },
        options: [
          { en: "Salar de Uyuni", es: "Salar de Uyuni", de: "Salar de Uyuni", nl: "Salar de Uyuni" },
          { en: "Bonneville Salt Flats", es: "Salinas de Bonneville", de: "Bonneville Salt Flats", nl: "Bonneville Salt Flats" },
          { en: "Makgadikgadi Pan", es: "Makgadikgadi Pan", de: "Makgadikgadi-Salzpfannen", nl: "Makgadikgadi Pan" },
          { en: "Chott el Djerid", es: "Chott el Djerid", de: "Chott el Djerid", nl: "Chott el Djerid" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which country has the most endemic species?",
          es: "¿Qué país tiene más especies endémicas?",
          de: "Welches Land hat die meisten endemischen Arten?",
          nl: "Welk land heeft de meeste endemische soorten?"
        },
        options: [
          { en: "Madagascar", es: "Madagascar", de: "Madagaskar", nl: "Madagaskar" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "Brazil", es: "Brasil", de: "Brasilien", nl: "Brazilië" },
          { en: "Indonesia", es: "Indonesia", de: "Indonesien", nl: "Indonesië" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the largest river island in the world?",
          es: "¿Cuál es la isla fluvial más grande del mundo?",
          de: "Was ist die größte Flussinsel der Welt?",
          nl: "Wat is het grootste riviereiland ter wereld?"
        },
        options: [
          { en: "Majuli Island", es: "Isla Majuli", de: "Majuli-Insel", nl: "Majuli-eiland" },
          { en: "Bananal Island", es: "Isla Bananal", de: "Bananal-Insel", nl: "Bananal-eiland" },
          { en: "Bhola Island", es: "Isla Bhola", de: "Bhola-Insel", nl: "Bhola-eiland" },
          { en: "Tupinambarana", es: "Tupinambarana", de: "Tupinambarana", nl: "Tupinambarana" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which ocean trench is the deepest?",
          es: "¿Qué fosa oceánica es la más profunda?",
          de: "Welcher Ozeangraben ist der tiefste?",
          nl: "Welke oceaantrog is de diepste?"
        },
        options: [
          { en: "Mariana Trench", es: "Fosa de las Marianas", de: "Marianengraben", nl: "Marianentrog" },
          { en: "Tonga Trench", es: "Fosa de Tonga", de: "Tongagraben", nl: "Tongatrog" },
          { en: "Philippine Trench", es: "Fosa de Filipinas", de: "Philippinengraben", nl: "Filipijnentrog" },
          { en: "Kermadec Trench", es: "Fosa de Kermadec", de: "Kermadecgraben", nl: "Kermadectrog" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the largest man-made lake by surface area?",
          es: "¿Cuál es el lago artificial más grande por superficie?",
          de: "Was ist der größte künstliche See nach Oberfläche?",
          nl: "Wat is het grootste kunstmatige meer qua oppervlakte?"
        },
        options: [
          { en: "Lake Kariba", es: "Lago Kariba", de: "Karibasee", nl: "Karibameer" },
          { en: "Lake Nasser", es: "Lago Nasser", de: "Nassersee", nl: "Nassermeer" },
          { en: "Lake Volta", es: "Lago Volta", de: "Voltasee", nl: "Voltameer" },
          { en: "Lake Mead", es: "Lago Mead", de: "Lake Mead", nl: "Lake Mead" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which country has the most distinct ecosystems?",
          es: "¿Qué país tiene más ecosistemas distintos?",
          de: "Welches Land hat die meisten verschiedenen Ökosysteme?",
          nl: "Welk land heeft de meest verschillende ecosystemen?"
        },
        options: [
          { en: "Mexico", es: "México", de: "Mexiko", nl: "Mexico" },
          { en: "Brazil", es: "Brasil", de: "Brasilien", nl: "Brazilië" },
          { en: "Colombia", es: "Colombia", de: "Kolumbien", nl: "Colombia" },
          { en: "Peru", es: "Perú", de: "Peru", nl: "Peru" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the largest ice shelf in Antarctica?",
          es: "¿Cuál es la plataforma de hielo más grande de la Antártida?",
          de: "Was ist das größte Schelfeis in der Antarktis?",
          nl: "Wat is de grootste ijsplaat in Antarctica?"
        },
        options: [
          { en: "Ross Ice Shelf", es: "Plataforma de Hielo Ross", de: "Ross-Schelfeis", nl: "Ross-ijsplaat" },
          { en: "Ronne Ice Shelf", es: "Plataforma de Hielo Ronne", de: "Ronne-Schelfeis", nl: "Ronne-ijsplaat" },
          { en: "Larsen Ice Shelf", es: "Plataforma de Hielo Larsen", de: "Larsen-Schelfeis", nl: "Larsen-ijsplaat" },
          { en: "Filchner Ice Shelf", es: "Plataforma de Hielo Filchner", de: "Filchner-Schelfeis", nl: "Filchner-ijsplaat" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which country has the most rivers?",
          es: "¿Qué país tiene más ríos?",
          de: "Welches Land hat die meisten Flüsse?",
          nl: "Welk land heeft de meeste rivieren?"
        },
        options: [
          { en: "Russia", es: "Rusia", de: "Russland", nl: "Rusland" },
          { en: "Canada", es: "Canadá", de: "Kanada", nl: "Canada" },
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },
          { en: "China", es: "China", de: "China", nl: "China" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the tallest uninterrupted waterfall in the world?",
          es: "¿Cuál es la cascada ininterrumpida más alta del mundo?",
          de: "Was ist der höchste ununterbrochene Wasserfall der Welt?",
          nl: "Wat is de hoogste ononderbroken waterval ter wereld?"
        },
        options: [
          { en: "Angel Falls", es: "Salto Ángel", de: "Angelfall", nl: "Angelwaterval" },
          { en: "Tugela Falls", es: "Cataratas Tugela", de: "Tugela-Fälle", nl: "Tugelawatervallen" },
          { en: "Tres Hermanas Falls", es: "Cataratas Tres Hermanas", de: "Tres Hermanas Fälle", nl: "Tres Hermanas watervallen" },
          { en: "Olo'upena Falls", es: "Cataratas Olo'upena", de: "Olo'upena Fälle", nl: "Olo'upena watervallen" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which geological formation is the oldest on Earth?",
          es: "¿Qué formación geológica es la más antigua de la Tierra?",
          de: "Welche geologische Formation ist die älteste auf der Erde?",
          nl: "Welke geologische formatie is de oudste op aarde?"
        },
        options: [
          { en: "Jack Hills (Australia)", es: "Jack Hills (Australia)", de: "Jack Hills (Australien)", nl: "Jack Hills (Australië)" },
          { en: "Canadian Shield", es: "Escudo Canadiense", de: "Kanadischer Schild", nl: "Canadees Schild" },
          { en: "Barberton Greenstone Belt", es: "Cinturón de Rocas Verdes de Barberton", de: "Barberton-Grünsteingürtel", nl: "Barberton Greenstone Belt" },
          { en: "Acasta Gneiss", es: "Gneis de Acasta", de: "Acasta-Gneis", nl: "Acasta-gneis" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the most biodiverse marine ecosystem?",
          es: "¿Cuál es el ecosistema marino más biodiverso?",
          de: "Was ist das artenreichste marine Ökosystem?",
          nl: "Wat is het meest biodiverse mariene ecosysteem?"
        },
        options: [
          { en: "Coral Triangle", es: "Triángulo de Coral", de: "Korallendreieck", nl: "Koraaldriehoek" },
          { en: "Great Barrier Reef", es: "Gran Barrera de Coral", de: "Great Barrier Reef", nl: "Great Barrier Reef" },
          { en: "Caribbean Reef", es: "Arrecife del Caribe", de: "Karibisches Riff", nl: "Caribisch Rif" },
          { en: "Red Sea Coral Reef", es: "Arrecife del Mar Rojo", de: "Rotes Meer Korallenriff", nl: "Rode Zee Koraalrif" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which country has the most diverse landscape in the smallest area?",
          es: "¿Qué país tiene el paisaje más diverso en la menor área?",
          de: "Welches Land hat die vielfältigste Landschaft auf kleinstem Raum?",
          nl: "Welk land heeft het meest diverse landschap in het kleinste gebied?"
        },
        options: [
          { en: "New Zealand", es: "Nueva Zelanda", de: "Neuseeland", nl: "Nieuw-Zeeland" },
          { en: "Switzerland", es: "Suiza", de: "Schweiz", nl: "Zwitserland" },
          { en: "Costa Rica", es: "Costa Rica", de: "Costa Rica", nl: "Costa Rica" },
          { en: "Nepal", es: "Nepal", de: "Nepal", nl: "Nepal" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the largest river basin in the world?",
          es: "¿Cuál es la cuenca fluvial más grande del mundo?",
          de: "Was ist das größte Flussbecken der Welt?",
          nl: "Wat is het grootste stroomgebied ter wereld?"
        },
        options: [
          { en: "Amazon Basin", es: "Cuenca del Amazonas", de: "Amazonasbecken", nl: "Amazone-bekken" },
          { en: "Congo Basin", es: "Cuenca del Congo", de: "Kongobecken", nl: "Congobekken" },
          { en: "Mississippi Basin", es: "Cuenca del Mississippi", de: "Mississippi-Becken", nl: "Mississippi-bekken" },
          { en: "Ob Basin", es: "Cuenca del Ob", de: "Ob-Becken", nl: "Ob-bekken" }
        ],
        correct: 0,
        explanation: {
          en: "The Amazon Basin is the largest river basin in the world, covering approximately 7 million square kilometers and draining about 40% of South America.",
          es: "La Cuenca del Amazonas es la cuenca fluvial más grande del mundo, cubriendo aproximadamente 7 millones de kilómetros cuadrados y drenando alrededor del 40% de América del Sur.",
          de: "Das Amazonasbecken ist das größte Flussbecken der Welt und umfasst etwa 7 Millionen Quadratkilometer und entwässert etwa 40% Südamerikas.",
          nl: "Het Amazone-bekken is het grootste stroomgebied ter wereld, dat ongeveer 7 miljoen vierkante kilometer beslaat en ongeveer 40% van Zuid-Amerika draineert."
        }
      },
      {
        question: {
          en: "Which tectonic plate collision created the Himalayan mountain range?",
          es: "¿Qué colisión de placas tectónicas creó la cordillera del Himalaya?",
          de: "Welche tektonische Plattenkollision schuf die Himalaya-Bergkette?",
          nl: "Welke tektonische plaatcollisie creëerde het Himalaya-gebergte?"
        },
        options: [
          { en: "Indian Plate and Eurasian Plate", es: "Placa India y Placa Euroasiática", de: "Indische Platte und Eurasische Platte", nl: "Indische Plaat en Euraziatische Plaat" },
          { en: "Pacific Plate and North American Plate", es: "Placa del Pacífico y Placa Norteamericana", de: "Pazifische Platte und Nordamerikanische Platte", nl: "Pacifische Plaat en Noord-Amerikaanse Plaat" },
          { en: "African Plate and Arabian Plate", es: "Placa Africana y Placa Arábiga", de: "Afrikanische Platte und Arabische Platte", nl: "Afrikaanse Plaat en Arabische Plaat" },
          { en: "South American Plate and Nazca Plate", es: "Placa Sudamericana y Placa de Nazca", de: "Südamerikanische Platte und Nazca-Platte", nl: "Zuid-Amerikaanse Plaat en Nazca-plaat" }
        ],
        correct: 0,
        explanation: {
          en: "The Himalayan mountain range was formed by the collision of the Indian Plate and the Eurasian Plate approximately 50 million years ago, a process that continues today.",
          es: "La cordillera del Himalaya se formó por la colisión de la Placa India y la Placa Euroasiática hace aproximadamente 50 millones de años, un proceso que continúa hoy.",
          de: "Die Himalaya-Bergkette entstand durch die Kollision der Indischen Platte und der Eurasischen Platte vor etwa 50 Millionen Jahren, ein Prozess, der heute noch andauert.",
          nl: "Het Himalaya-gebergte werd gevormd door de botsing van de Indische Plaat en de Euraziatische Plaat ongeveer 50 miljoen jaar geleden, een proces dat vandaag nog steeds doorgaat."
        }
      },
      {
        question: {
          en: "What is the term for the boundary between two different air masses?",
          es: "¿Cuál es el término para la frontera entre dos masas de aire diferentes?",
          de: "Wie nennt man die Grenze zwischen zwei verschiedenen Luftmassen?",
          nl: "Wat is de term voor de grens tussen twee verschillende luchtmassa's?"
        },
        options: [
          { en: "Front", es: "Frente", de: "Front", nl: "Front" },
          { en: "Convergence zone", es: "Zona de convergencia", de: "Konvergenzzone", nl: "Convergentiezone" },
          { en: "Pressure gradient", es: "Gradiente de presión", de: "Druckgradient", nl: "Drukgradient" },
          { en: "Thermal boundary", es: "Frontera térmica", de: "Thermische Grenze", nl: "Thermische grens" }
        ],
        correct: 0,
        explanation: {
          en: "A front is the boundary between two air masses with different characteristics (temperature, humidity, density). Different types include cold fronts, warm fronts, and occluded fronts.",
          es: "Un frente es la frontera entre dos masas de aire con características diferentes (temperatura, humedad, densidad). Los tipos diferentes incluyen frentes fríos, frentes cálidos y frentes ocluidos.",
          de: "Eine Front ist die Grenze zwischen zwei Luftmassen mit unterschiedlichen Eigenschaften (Temperatur, Feuchtigkeit, Dichte). Verschiedene Typen umfassen Kaltfronten, Warmfronten und Okklusionsfronten.",
          nl: "Een front is de grens tussen twee luchtmassa's met verschillende eigenschappen (temperatuur, vochtigheid, dichtheid). Verschillende types omvatten koufronten, warmtefronten en occlusie fronten."
        }
      },
      {
        question: {
          en: "Which phenomenon causes the formation of volcanic island chains like Hawaii?",
          es: "¿Qué fenómeno causa la formación de cadenas de islas volcánicas como Hawaii?",
          de: "Welches Phänomen verursacht die Bildung von vulkanischen Inselketten wie Hawaii?",
          nl: "Welk fenomeen veroorzaakt de vorming van vulkanische eilandketens zoals Hawaii?"
        },
        options: [
          { en: "Hotspot", es: "Punto caliente", de: "Hotspot", nl: "Hotspot" },
          { en: "Subduction zone", es: "Zona de subducción", de: "Subduktionszone", nl: "Subductiezone" },
          { en: "Transform fault", es: "Falla transformante", de: "Transformstörung", nl: "Transformbreuk" },
          { en: "Mid-ocean ridge", es: "Dorsal oceánica", de: "Mittelozeanischer Rücken", nl: "Mid-oceanische rug" }
        ],
        correct: 0,
        explanation: {
          en: "Hotspots are stationary plumes of hot material rising from deep within the Earth's mantle that create volcanic islands as tectonic plates move over them, forming chains like the Hawaiian Islands.",
          es: "Los puntos calientes son plumas estacionarias de material caliente que se elevan desde las profundidades del manto terrestre y crean islas volcánicas mientras las placas tectónicas se mueven sobre ellos, formando cadenas como las Islas Hawaianas.",
          de: "Hotspots sind stationäre Säulen heißen Materials, die aus der Tiefe des Erdmantels aufsteigen und vulkanische Inseln bilden, während tektonische Platten über sie hinwegziehen, wodurch Ketten wie die Hawaiianischen Inseln entstehen.",
          nl: "Hotspots zijn stationaire pluimen van heet materiaal die opstijgen uit de diepte van de aardmantel en vulkanische eilanden creëren terwijl tektonische platen erover bewegen, waardoor ketens zoals de Hawaiiaanse Eilanden ontstaan."
        }
      },
      {
        question: {
          en: "What is the name of the underwater mountain range that extends around the globe?",
          es: "¿Cuál es el nombre de la cordillera submarina que se extiende alrededor del globo?",
          de: "Wie heißt die Unterwasser-Bergkette, die sich um den Globus erstreckt?",
          nl: "Wat is de naam van de onderwater bergketen die zich rond de wereldbol uitstrekt?"
        },
        options: [
          { en: "Mid-ocean ridge system", es: "Sistema de dorsales oceánicas", de: "Mittelozeanisches Rückensystem", nl: "Mid-oceanisch rugsysteem" },
          { en: "Abyssal plains", es: "Llanuras abisales", de: "Tiefseebenen", nl: "Abyssale vlakten" },
          { en: "Continental rise", es: "Elevación continental", de: "Kontinentalanstieg", nl: "Continentale opgang" },
          { en: "Oceanic trenches", es: "Fosas oceánicas", de: "Ozeangräben", nl: "Oceanische troggen" }
        ],
        correct: 0,
        explanation: {
          en: "The mid-ocean ridge system is the longest mountain range on Earth, extending over 65,000 kilometers underwater and forming new oceanic crust through seafloor spreading.",
          es: "El sistema de dorsales oceánicas es la cordillera más larga de la Tierra, extendiéndose más de 65,000 kilómetros bajo el agua y formando nueva corteza oceánica a través de la expansión del fondo marino.",
          de: "Das mittelozeanische Rückensystem ist die längste Bergkette der Erde, die sich über 65.000 Kilometer unter Wasser erstreckt und durch Meeresbodenspreizung neue ozeanische Kruste bildet.",
          nl: "Het mid-oceanisch rugsysteem is de langste bergketen op aarde, die zich meer dan 65.000 kilometer onder water uitstrekt en nieuwe oceanische korst vormt door zeebodemspreidung."
        }
      },
      {
        question: {
          en: "Which type of rock is formed from the cooling and solidification of magma?",
          es: "¿Qué tipo de roca se forma del enfriamiento y solidificación del magma?",
          de: "Welche Art von Gestein entsteht durch die Abkühlung und Erstarrung von Magma?",
          nl: "Welk type gesteente wordt gevormd door het afkoelen en stollen van magma?"
        },
        options: [
          { en: "Igneous rock", es: "Roca ígnea", de: "Magmatisches Gestein", nl: "Stollingsgesteente" },
          { en: "Sedimentary rock", es: "Roca sedimentaria", de: "Sedimentgestein", nl: "Sedimentair gesteente" },
          { en: "Metamorphic rock", es: "Roca metamórfica", de: "Metamorphes Gestein", nl: "Metamorf gesteente" },
          { en: "Volcanic glass", es: "Vidrio volcánico", de: "Vulkanglas", nl: "Vulkanisch glas" }
        ],
        correct: 0,
        explanation: {
          en: "Igneous rock is formed from the cooling and solidification of magma or lava. Examples include granite (intrusive) and basalt (extrusive), depending on where the cooling occurs.",
          es: "La roca ígnea se forma del enfriamiento y solidificación del magma o lava. Los ejemplos incluyen granito (intrusivo) y basalto (extrusivo), dependiendo de dónde ocurre el enfriamiento.",
          de: "Magmatisches Gestein entsteht durch die Abkühlung und Erstarrung von Magma oder Lava. Beispiele sind Granit (intrusiv) und Basalt (extrusiv), je nachdem, wo die Abkühlung stattfindet.",
          nl: "Stollingsgesteente wordt gevormd door het afkoelen en stollen van magma of lava. Voorbeelden zijn graniet (intrusief) en basalt (extrusief), afhankelijk van waar het afkoelen plaatsvindt."
        }
      },
      {
        question: {
          en: "What is the term for the process where ocean water becomes increasingly saline due to evaporation?",
          es: "¿Cuál es el término para el proceso donde el agua del océano se vuelve cada vez más salina debido a la evaporación?",
          de: "Wie nennt man den Prozess, bei dem Meerwasser durch Verdunstung zunehmend salziger wird?",
          nl: "Wat is de term voor het proces waarbij oceaanwater steeds zouter wordt door verdamping?"
        },
        options: [
          { en: "Hypersalination", es: "Hipersalinización", de: "Hypersalinisation", nl: "Hypersalinisatie" },
          { en: "Desalination", es: "Desalinización", de: "Entsalzung", nl: "Ontzilting" },
          { en: "Precipitation", es: "Precipitación", de: "Niederschlag", nl: "Neerslag" },
          { en: "Dilution", es: "Dilución", de: "Verdünnung", nl: "Verdunning" }
        ],
        correct: 0,
        explanation: {
          en: "Hypersalination occurs when evaporation removes fresh water from seawater, leaving behind salt and increasing salinity. This process is common in enclosed seas and salt lakes.",
          es: "La hipersalinización ocurre cuando la evaporación remueve agua dulce del agua de mar, dejando atrás sal y aumentando la salinidad. Este proceso es común en mares cerrados y lagos salados.",
          de: "Hypersalinisation tritt auf, wenn Verdunstung Süßwasser aus Meerwasser entfernt und Salz zurücklässt, wodurch die Salinität steigt. Dieser Prozess ist in abgeschlossenen Meeren und Salzseen üblich.",
          nl: "Hypersalinisatie treedt op wanneer verdamping zoet water uit zeewater wegneemt, zout achterlaat en de saliniteit verhoogt. Dit proces komt vaak voor in afgesloten zeeën en zoutmeren."
        }
      },
      {
        question: {
          en: "Which atmospheric layer contains the ozone layer that protects Earth from UV radiation?",
          es: "¿Qué capa atmosférica contiene la capa de ozono que protege la Tierra de la radiación UV?",
          de: "Welche Atmosphärenschicht enthält die Ozonschicht, die die Erde vor UV-Strahlung schützt?",
          nl: "Welke atmosferische laag bevat de ozonlaag die de aarde beschermt tegen UV-straling?"
        },
        options: [
          { en: "Stratosphere", es: "Estratósfera", de: "Stratosphäre", nl: "Stratosfeer" },
          { en: "Troposphere", es: "Tropósfera", de: "Troposphäre", nl: "Troposfeer" },
          { en: "Mesosphere", es: "Mesósfera", de: "Mesosphäre", nl: "Mesosfeer" },
          { en: "Thermosphere", es: "Termósfera", de: "Thermosphäre", nl: "Thermosfeer" }
        ],
        correct: 0,
        explanation: {
          en: "The stratosphere contains the ozone layer, located approximately 15-35 kilometers above Earth's surface, which absorbs harmful ultraviolet radiation from the sun.",
          es: "La estratósfera contiene la capa de ozono, ubicada aproximadamente de 15-35 kilómetros sobre la superficie terrestre, que absorbe la radiación ultravioleta dañina del sol.",
          de: "Die Stratosphäre enthält die Ozonschicht, die etwa 15-35 Kilometer über der Erdoberfläche liegt und schädliche ultraviolette Strahlung der Sonne absorbiert.",
          nl: "De stratosfeer bevat de ozonlaag, gelegen ongeveer 15-35 kilometer boven het aardoppervlak, die schadelijke ultraviolette straling van de zon absorbeert."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('warm-up/world-geography', level10);
  }
})();