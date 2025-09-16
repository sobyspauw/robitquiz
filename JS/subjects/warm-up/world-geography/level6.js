// World Geography - Level 6: American Geography (North and South)
(function() {
  const level6 = {
    name: {
      en: "American Geography (North and South)",
      es: "Geografía Americana (Norte y Sur)",
      de: "Amerikanische Geografie (Nord und Süd)",
      nl: "Amerikaanse Geografie (Noord en Zuid)"
    },
    questions: [
      {
        question: {
          en: "What is the longest river in North America?",
          es: "¿Cuál es el río más largo de América del Norte?",
          de: "Was ist der längste Fluss in Nordamerika?",
          nl: "Wat is de langste rivier in Noord-Amerika?"
        },
        options: [
          { en: "Missouri River", es: "Río Missouri", de: "Missouri", nl: "Missouri" },
          { en: "Mississippi River", es: "Río Mississippi", de: "Mississippi", nl: "Mississippi" },
          { en: "Colorado River", es: "Río Colorado", de: "Colorado", nl: "Colorado" },
          { en: "Rio Grande", es: "Río Grande", de: "Rio Grande", nl: "Rio Grande" }
        ],
        correct: 0,
        explanation: {
          en: "The Missouri River is the longest river in North America at approximately 2,341 miles (3,767 km). It flows from the Rocky Mountains of western Montana to the Mississippi River north of St. Louis, Missouri.",
          es: "El río Missouri es el río más largo de América del Norte con aproximadamente 2,341 millas (3,767 km). Fluye desde las Montañas Rocosas del oeste de Montana hasta el río Mississippi al norte de St. Louis, Missouri.",
          de: "Der Missouri ist mit etwa 2.341 Meilen (3.767 km) der längste Fluss Nordamerikas. Er fließt von den Rocky Mountains im Westen Montanas zum Mississippi nördlich von St. Louis, Missouri.",
          nl: "De Missouri is met ongeveer 2.341 mijl (3.767 km) de langste rivier van Noord-Amerika. Hij stroomt van de Rocky Mountains in het westen van Montana naar de Mississippi ten noorden van St. Louis, Missouri."
        }
      },
      {
        question: {
          en: "Which mountain range runs along the western coast of North America?",
          es: "¿Qué cordillera corre a lo largo de la costa occidental de América del Norte?",
          de: "Welche Bergkette verläuft entlang der Westküste Nordamerikas?",
          nl: "Welk gebergte loopt langs de westkust van Noord-Amerika?"
        },
        options: [
          { en: "Rocky Mountains", es: "Montañas Rocosas", de: "Rocky Mountains", nl: "Rocky Mountains" },
          { en: "Appalachian Mountains", es: "Montes Apalaches", de: "Appalachen", nl: "Appalachen" },
          { en: "Sierra Nevada", es: "Sierra Nevada", de: "Sierra Nevada", nl: "Sierra Nevada" },
          { en: "Cascade Range", es: "Cordillera de las Cascadas", de: "Kaskadenkette", nl: "Cascade Range" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the highest mountain in North America?",
          es: "¿Cuál es la montaña más alta de América del Norte?",
          de: "Was ist der höchste Berg in Nordamerika?",
          nl: "Wat is de hoogste berg in Noord-Amerika?"
        },
        options: [
          { en: "Denali (Mount McKinley)", es: "Denali (Monte McKinley)", de: "Denali (Mount McKinley)", nl: "Denali (Mount McKinley)" },
          { en: "Mount Logan", es: "Monte Logan", de: "Mount Logan", nl: "Mount Logan" },
          { en: "Mount Whitney", es: "Monte Whitney", de: "Mount Whitney", nl: "Mount Whitney" },
          { en: "Mount Rainier", es: "Monte Rainier", de: "Mount Rainier", nl: "Mount Rainier" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which Great Lake is the largest by surface area?",
          es: "¿Cuál de los Grandes Lagos es el más grande por superficie?",
          de: "Welcher der Großen Seen ist der größte nach Oberfläche?",
          nl: "Welk Groot Meer is het grootste qua oppervlakte?"
        },
        options: [
          { en: "Lake Superior", es: "Lago Superior", de: "Oberer See", nl: "Lake Superior" },
          { en: "Lake Michigan", es: "Lago Michigan", de: "Michigansee", nl: "Michiganmeer" },
          { en: "Lake Huron", es: "Lago Hurón", de: "Huronsee", nl: "Huronmeer" },
          { en: "Lake Ontario", es: "Lago Ontario", de: "Ontariosee", nl: "Ontariomeer" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the capital of Brazil?",
          es: "¿Cuál es la capital de Brasil?",
          de: "Was ist die Hauptstadt von Brasilien?",
          nl: "Wat is de hoofdstad van Brazilië?"
        },
        options: [
          { en: "Brasília", es: "Brasilia", de: "Brasília", nl: "Brasília" },
          { en: "Rio de Janeiro", es: "Río de Janeiro", de: "Rio de Janeiro", nl: "Rio de Janeiro" },
          { en: "São Paulo", es: "São Paulo", de: "São Paulo", nl: "São Paulo" },
          { en: "Salvador", es: "Salvador", de: "Salvador", nl: "Salvador" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which desert is located in the southwestern United States and northwestern Mexico?",
          es: "¿Qué desierto está ubicado en el suroeste de Estados Unidos y noroeste de México?",
          de: "Welche Wüste liegt im Südwesten der USA und Nordwesten Mexikos?",
          nl: "Welke woestijn ligt in het zuidwesten van de Verenigde Staten en noordwesten van Mexico?"
        },
        options: [
          { en: "Sonoran Desert", es: "Desierto de Sonora", de: "Sonora-Wüste", nl: "Sonora-woestijn" },
          { en: "Mojave Desert", es: "Desierto de Mojave", de: "Mojave-Wüste", nl: "Mojave-woestijn" },
          { en: "Chihuahuan Desert", es: "Desierto Chihuahuense", de: "Chihuahua-Wüste", nl: "Chihuahua-woestijn" },
          { en: "Great Basin Desert", es: "Desierto de la Gran Cuenca", de: "Great-Basin-Wüste", nl: "Great Basin-woestijn" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the largest country in South America?",
          es: "¿Cuál es el país más grande de América del Sur?",
          de: "Was ist das größte Land in Südamerika?",
          nl: "Wat is het grootste land in Zuid-Amerika?"
        },
        options: [
          { en: "Brazil", es: "Brasil", de: "Brasilien", nl: "Brazilië" },
          { en: "Argentina", es: "Argentina", de: "Argentinien", nl: "Argentinië" },
          { en: "Peru", es: "Perú", de: "Peru", nl: "Peru" },
          { en: "Colombia", es: "Colombia", de: "Kolumbien", nl: "Colombia" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which waterfall is located on the border between the United States and Canada?",
          es: "¿Qué cascada está ubicada en la frontera entre Estados Unidos y Canadá?",
          de: "Welcher Wasserfall liegt an der Grenze zwischen den USA und Kanada?",
          nl: "Welke waterval ligt op de grens tussen de Verenigde Staten en Canada?"
        },
        options: [
          { en: "Niagara Falls", es: "Cataratas del Niágara", de: "Niagarafälle", nl: "Niagarawatervallen" },
          { en: "Multnomah Falls", es: "Cataratas Multnomah", de: "Multnomah Falls", nl: "Multnomah Falls" },
          { en: "Yosemite Falls", es: "Cataratas de Yosemite", de: "Yosemite-Fälle", nl: "Yosemite-watervallen" },
          { en: "American Falls", es: "Cataratas Americanas", de: "American Falls", nl: "American Falls" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the driest desert in South America?",
          es: "¿Cuál es el desierto más seco de América del Sur?",
          de: "Was ist die trockenste Wüste in Südamerika?",
          nl: "Wat is de droogste woestijn in Zuid-Amerika?"
        },
        options: [
          { en: "Atacama Desert", es: "Desierto de Atacama", de: "Atacama-Wüste", nl: "Atacama-woestijn" },
          { en: "Patagonian Desert", es: "Desierto Patagónico", de: "Patagonische Wüste", nl: "Patagonische woestijn" },
          { en: "La Guajira Desert", es: "Desierto de la Guajira", de: "Guajira-Wüste", nl: "Guajira-woestijn" },
          { en: "Monte Desert", es: "Desierto del Monte", de: "Monte-Wüste", nl: "Monte-woestijn" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which Canadian province is the largest by area?",
          es: "¿Qué provincia canadiense es la más grande por área?",
          de: "Welche kanadische Provinz ist flächenmäßig die größte?",
          nl: "Welke Canadese provincie is het grootst qua oppervlakte?"
        },
        options: [
          { en: "Quebec", es: "Quebec", de: "Québec", nl: "Quebec" },
          { en: "Ontario", es: "Ontario", de: "Ontario", nl: "Ontario" },
          { en: "British Columbia", es: "Columbia Británica", de: "British Columbia", nl: "Brits-Columbia" },
          { en: "Alberta", es: "Alberta", de: "Alberta", nl: "Alberta" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the name of the large bay on the eastern coast of Canada?",
          es: "¿Cuál es el nombre de la gran bahía en la costa oriental de Canadá?",
          de: "Wie heißt die große Bucht an der Ostküste Kanadas?",
          nl: "Wat is de naam van de grote baai aan de oostkust van Canada?"
        },
        options: [
          { en: "Hudson Bay", es: "Bahía de Hudson", de: "Hudson Bay", nl: "Hudsonbaai" },
          { en: "Bay of Fundy", es: "Bahía de Fundy", de: "Bay of Fundy", nl: "Baai van Fundy" },
          { en: "James Bay", es: "Bahía James", de: "James Bay", nl: "Jamesbaai" },
          { en: "Ungava Bay", es: "Bahía Ungava", de: "Ungava Bay", nl: "Ungavabaai" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which river forms part of the border between Mexico and the United States?",
          es: "¿Qué río forma parte de la frontera entre México y Estados Unidos?",
          de: "Welcher Fluss bildet einen Teil der Grenze zwischen Mexiko und den USA?",
          nl: "Welke rivier vormt een deel van de grens tussen Mexico en de Verenigde Staten?"
        },
        options: [
          { en: "Rio Grande", es: "Río Grande", de: "Rio Grande", nl: "Rio Grande" },
          { en: "Colorado River", es: "Río Colorado", de: "Colorado", nl: "Colorado" },
          { en: "Gila River", es: "Río Gila", de: "Gila", nl: "Gila" },
          { en: "Pecos River", es: "Río Pecos", de: "Pecos", nl: "Pecos" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the highest mountain in South America?",
          es: "¿Cuál es la montaña más alta de América del Sur?",
          de: "Was ist der höchste Berg in Südamerika?",
          nl: "Wat is de hoogste berg in Zuid-Amerika?"
        },
        options: [
          { en: "Aconcagua", es: "Aconcagua", de: "Aconcagua", nl: "Aconcagua" },
          { en: "Ojos del Salado", es: "Ojos del Salado", de: "Ojos del Salado", nl: "Ojos del Salado" },
          { en: "Monte Pissis", es: "Monte Pissis", de: "Monte Pissis", nl: "Monte Pissis" },
          { en: "Huascarán", es: "Huascarán", de: "Huascarán", nl: "Huascarán" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which US state has the most national parks?",
          es: "¿Qué estado de EE.UU. tiene más parques nacionales?",
          de: "Welcher US-Bundesstaat hat die meisten Nationalparks?",
          nl: "Welke Amerikaanse staat heeft de meeste nationale parken?"
        },
        options: [
          { en: "California", es: "California", de: "Kalifornien", nl: "Californië" },
          { en: "Alaska", es: "Alaska", de: "Alaska", nl: "Alaska" },
          { en: "Utah", es: "Utah", de: "Utah", nl: "Utah" },
          { en: "Colorado", es: "Colorado", de: "Colorado", nl: "Colorado" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the capital of Argentina?",
          es: "¿Cuál es la capital de Argentina?",
          de: "Was ist die Hauptstadt von Argentinien?",
          nl: "Wat is de hoofdstad van Argentinië?"
        },
        options: [
          { en: "Buenos Aires", es: "Buenos Aires", de: "Buenos Aires", nl: "Buenos Aires" },
          { en: "Córdoba", es: "Córdoba", de: "Córdoba", nl: "Córdoba" },
          { en: "Rosario", es: "Rosario", de: "Rosario", nl: "Rosario" },
          { en: "Mendoza", es: "Mendoza", de: "Mendoza", nl: "Mendoza" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which Central American country connects North and South America?",
          es: "¿Qué país centroamericano conecta América del Norte y América del Sur?",
          de: "Welches mittelamerikanische Land verbindet Nord- und Südamerika?",
          nl: "Welk Midden-Amerikaans land verbindt Noord- en Zuid-Amerika?"
        },
        options: [
          { en: "Panama", es: "Panamá", de: "Panama", nl: "Panama" },
          { en: "Costa Rica", es: "Costa Rica", de: "Costa Rica", nl: "Costa Rica" },
          { en: "Nicaragua", es: "Nicaragua", de: "Nicaragua", nl: "Nicaragua" },
          { en: "Colombia", es: "Colombia", de: "Kolumbien", nl: "Colombia" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the largest lake in South America?",
          es: "¿Cuál es el lago más grande de América del Sur?",
          de: "Was ist der größte See in Südamerika?",
          nl: "Wat is het grootste meer in Zuid-Amerika?"
        },
        options: [
          { en: "Lake Titicaca", es: "Lago Titicaca", de: "Titicacasee", nl: "Titicacameer" },
          { en: "Lake Maracaibo", es: "Lago de Maracaibo", de: "Maracaibo-See", nl: "Maracaibomeer" },
          { en: "Laguna dos Patos", es: "Laguna de los Patos", de: "Lagoa dos Patos", nl: "Lagoa dos Patos" },
          { en: "Lake Buenos Aires", es: "Lago Buenos Aires", de: "Buenos-Aires-See", nl: "Buenos Aires-meer" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which volcano destroyed the city of Pompeii is located where?",
          es: "¿En qué región de América se encuentran los volcanes más activos?",
          de: "In welcher amerikanischen Region befinden sich die aktivsten Vulkane?",
          nl: "In welke Amerikaanse regio bevinden zich de meest actieve vulkanen?"
        },
        options: [
          { en: "Ring of Fire (Pacific Coast)", es: "Anillo de Fuego (Costa del Pacífico)", de: "Feuerring (Pazifikküste)", nl: "Ring van Vuur (Pacifische Kust)" },
          { en: "Atlantic Coast", es: "Costa Atlántica", de: "Atlantikküste", nl: "Atlantische Kust" },
          { en: "Great Plains", es: "Grandes Llanuras", de: "Great Plains", nl: "Great Plains" },
          { en: "Caribbean Islands", es: "Islas del Caribe", de: "Karibische Inseln", nl: "Caribische Eilanden" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the southernmost city in the world?",
          es: "¿Cuál es la ciudad más al sur del mundo?",
          de: "Was ist die südlichste Stadt der Welt?",
          nl: "Wat is de zuidelijkste stad ter wereld?"
        },
        options: [
          { en: "Ushuaia, Argentina", es: "Ushuaia, Argentina", de: "Ushuaia, Argentinien", nl: "Ushuaia, Argentinië" },
          { en: "Punta Arenas, Chile", es: "Punta Arenas, Chile", de: "Punta Arenas, Chile", nl: "Punta Arenas, Chili" },
          { en: "Puerto Williams, Chile", es: "Puerto Williams, Chile", de: "Puerto Williams, Chile", nl: "Puerto Williams, Chili" },
          { en: "Rio Gallegos, Argentina", es: "Río Gallegos, Argentina", de: "Río Gallegos, Argentinien", nl: "Río Gallegos, Argentinië" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which country in South America has no coastline?",
          es: "¿Qué país de América del Sur no tiene costa?",
          de: "Welches Land in Südamerika hat keine Küste?",
          nl: "Welk land in Zuid-Amerika heeft geen kustlijn?"
        },
        options: [
          { en: "Bolivia", es: "Bolivia", de: "Bolivien", nl: "Bolivia" },
          { en: "Paraguay", es: "Paraguay", de: "Paraguay", nl: "Paraguay" },
          { en: "Uruguay", es: "Uruguay", de: "Uruguay", nl: "Uruguay" },
          { en: "Ecuador", es: "Ecuador", de: "Ecuador", nl: "Ecuador" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the name of the large tropical wetland in Brazil?",
          es: "¿Cuál es el nombre del gran humedal tropical en Brasil?",
          de: "Wie heißt das große tropische Feuchtgebiet in Brasilien?",
          nl: "Wat is de naam van het grote tropische moerasgebied in Brazilië?"
        },
        options: [
          { en: "Pantanal", es: "Pantanal", de: "Pantanal", nl: "Pantanal" },
          { en: "Cerrado", es: "Cerrado", de: "Cerrado", nl: "Cerrado" },
          { en: "Caatinga", es: "Caatinga", de: "Caatinga", nl: "Caatinga" },
          { en: "Atlantic Forest", es: "Mata Atlántica", de: "Atlantischer Regenwald", nl: "Atlantisch Regenwoud" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which strait separates South America from Antarctica?",
          es: "¿Qué estrecho separa América del Sur de la Antártida?",
          de: "Welche Meerenge trennt Südamerika von der Antarktis?",
          nl: "Welke zeestraat scheidt Zuid-Amerika van Antarctica?"
        },
        options: [
          { en: "Drake Passage", es: "Pasaje de Drake", de: "Drake-Passage", nl: "Drakepassage" },
          { en: "Strait of Magellan", es: "Estrecho de Magallanes", de: "Magellanstraße", nl: "Straat van Magalhães" },
          { en: "Beagle Channel", es: "Canal Beagle", de: "Beagle-Kanal", nl: "Beaglekanaal" },
          { en: "Lemaire Channel", es: "Canal Lemaire", de: "Lemaire-Kanal", nl: "Lemairekanaal" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the capital of Chile?",
          es: "¿Cuál es la capital de Chile?",
          de: "Was ist die Hauptstadt von Chile?",
          nl: "Wat is de hoofdstad van Chili?"
        },
        options: [
          { en: "Santiago", es: "Santiago", de: "Santiago", nl: "Santiago" },
          { en: "Valparaíso", es: "Valparaíso", de: "Valparaíso", nl: "Valparaíso" },
          { en: "Concepción", es: "Concepción", de: "Concepción", nl: "Concepción" },
          { en: "La Serena", es: "La Serena", de: "La Serena", nl: "La Serena" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which US state is known as 'The Last Frontier'?",
          es: "¿Qué estado de EE.UU. es conocido como 'La Última Frontera'?",
          de: "Welcher US-Bundesstaat ist als 'The Last Frontier' bekannt?",
          nl: "Welke Amerikaanse staat staat bekend als 'The Last Frontier'?"
        },
        options: [
          { en: "Alaska", es: "Alaska", de: "Alaska", nl: "Alaska" },
          { en: "Montana", es: "Montana", de: "Montana", nl: "Montana" },
          { en: "Wyoming", es: "Wyoming", de: "Wyoming", nl: "Wyoming" },
          { en: "North Dakota", es: "Dakota del Norte", de: "North Dakota", nl: "North Dakota" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the largest island in the Caribbean?",
          es: "¿Cuál es la isla más grande del Caribe?",
          de: "Was ist die größte Insel in der Karibik?",
          nl: "Wat is het grootste eiland in de Caribische Zee?"
        },
        options: [
          { en: "Cuba", es: "Cuba", de: "Kuba", nl: "Cuba" },
          { en: "Hispaniola", es: "La Española", de: "Hispaniola", nl: "Hispaniola" },
          { en: "Jamaica", es: "Jamaica", de: "Jamaika", nl: "Jamaica" },
          { en: "Puerto Rico", es: "Puerto Rico", de: "Puerto Rico", nl: "Puerto Rico" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which mountain range runs through Venezuela, Colombia, Ecuador, Peru, Bolivia, Chile, and Argentina?",
          es: "¿Qué cordillera atraviesa Venezuela, Colombia, Ecuador, Perú, Bolivia, Chile y Argentina?",
          de: "Welche Bergkette verläuft durch Venezuela, Kolumbien, Ecuador, Peru, Bolivien, Chile und Argentinien?",
          nl: "Welk gebergte loopt door Venezuela, Colombia, Ecuador, Peru, Bolivia, Chili en Argentinië?"
        },
        options: [
          { en: "Andes Mountains", es: "Cordillera de los Andes", de: "Anden", nl: "Andes" },
          { en: "Sierra Nevada", es: "Sierra Nevada", de: "Sierra Nevada", nl: "Sierra Nevada" },
          { en: "Brazilian Highlands", es: "Altiplano Brasileño", de: "Brasilianisches Bergland", nl: "Braziliaanse Hooglanden" },
          { en: "Guiana Highlands", es: "Macizo Guayanés", de: "Guayana-Hochland", nl: "Guyana-hooglanden" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the capital of Peru?",
          es: "¿Cuál es la capital de Perú?",
          de: "Was ist die Hauptstadt von Peru?",
          nl: "Wat is de hoofdstad van Peru?"
        },
        options: [
          { en: "Lima", es: "Lima", de: "Lima", nl: "Lima" },
          { en: "Cusco", es: "Cusco", de: "Cusco", nl: "Cusco" },
          { en: "Arequipa", es: "Arequipa", de: "Arequipa", nl: "Arequipa" },
          { en: "Trujillo", es: "Trujillo", de: "Trujillo", nl: "Trujillo" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which US state is home to Yellowstone National Park?",
          es: "¿Qué estado de EE.UU. alberga el Parque Nacional Yellowstone?",
          de: "Welcher US-Bundesstaat beherbergt den Yellowstone-Nationalpark?",
          nl: "Welke Amerikaanse staat herbergt Yellowstone National Park?"
        },
        options: [
          { en: "Wyoming", es: "Wyoming", de: "Wyoming", nl: "Wyoming" },
          { en: "Montana", es: "Montana", de: "Montana", nl: "Montana" },
          { en: "Idaho", es: "Idaho", de: "Idaho", nl: "Idaho" },
          { en: "Colorado", es: "Colorado", de: "Colorado", nl: "Colorado" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the largest rainforest in the world?",
          es: "¿Cuál es la selva tropical más grande del mundo?",
          de: "Was ist der größte Regenwald der Welt?",
          nl: "Wat is het grootste regenwoud ter wereld?"
        },
        options: [
          { en: "Amazon Rainforest", es: "Selva Amazónica", de: "Amazonas-Regenwald", nl: "Amazone-regenwoud" },
          { en: "Congo Basin", es: "Cuenca del Congo", de: "Kongobecken", nl: "Congobekken" },
          { en: "Boreal Forest", es: "Bosque Boreal", de: "Borealer Wald", nl: "Boreaal Woud" },
          { en: "Valdivian Rainforest", es: "Selva Valdiviana", de: "Valdivianischer Regenwald", nl: "Valdivisch Regenwoud" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which Canadian territory is the largest?",
          es: "¿Cuál territorio canadiense es el más grande?",
          de: "Welches kanadische Territorium ist das größte?",
          nl: "Welk Canadees territorium is het grootste?"
        },
        options: [
          { en: "Nunavut", es: "Nunavut", de: "Nunavut", nl: "Nunavut" },
          { en: "Northwest Territories", es: "Territorios del Noroeste", de: "Nordwest-Territorien", nl: "Northwest Territories" },
          { en: "Yukon", es: "Yukón", de: "Yukon", nl: "Yukon" },
          { en: "Quebec", es: "Quebec", de: "Québec", nl: "Quebec" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the capital of Colombia?",
          es: "¿Cuál es la capital de Colombia?",
          de: "Was ist die Hauptstadt von Kolumbien?",
          nl: "Wat is de hoofdstad van Colombia?"
        },
        options: [
          { en: "Bogotá", es: "Bogotá", de: "Bogotá", nl: "Bogotá" },
          { en: "Medellín", es: "Medellín", de: "Medellín", nl: "Medellín" },
          { en: "Cali", es: "Cali", de: "Cali", nl: "Cali" },
          { en: "Cartagena", es: "Cartagena", de: "Cartagena", nl: "Cartagena" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which peninsula makes up most of Mexico?",
          es: "¿Qué península forma la mayor parte de México?",
          de: "Welche Halbinsel macht den größten Teil Mexikos aus?",
          nl: "Welk schiereiland vormt het grootste deel van Mexico?"
        },
        options: [
          { en: "Yucatan Peninsula", es: "Península de Yucatán", de: "Yucatan-Halbinsel", nl: "Yucatan-schiereiland" },
          { en: "Baja California Peninsula", es: "Península de Baja California", de: "Baja-California-Halbinsel", nl: "Baja California-schiereiland" },
          { en: "Florida Peninsula", es: "Península de Florida", de: "Florida-Halbinsel", nl: "Florida-schiereiland" },
          { en: "Labrador Peninsula", es: "Península del Labrador", de: "Labrador-Halbinsel", nl: "Labrador-schiereiland" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the deepest canyon in North America?",
          es: "¿Cuál es el cañón más profundo de América del Norte?",
          de: "Was ist der tiefste Canyon in Nordamerika?",
          nl: "Wat is de diepste canyon in Noord-Amerika?"
        },
        options: [
          { en: "Hells Canyon", es: "Cañón del Infierno", de: "Hells Canyon", nl: "Hells Canyon" },
          { en: "Grand Canyon", es: "Gran Cañón", de: "Grand Canyon", nl: "Grand Canyon" },
          { en: "Black Canyon", es: "Cañón Negro", de: "Black Canyon", nl: "Black Canyon" },
          { en: "Palo Duro Canyon", es: "Cañón Palo Duro", de: "Palo Duro Canyon", nl: "Palo Duro Canyon" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which South American country is famous for its wine production?",
          es: "¿Qué país sudamericano es famoso por su producción de vino?",
          de: "Welches südamerikanische Land ist berühmt für seine Weinproduktion?",
          nl: "Welk Zuid-Amerikaans land is beroemd om zijn wijnproductie?"
        },
        options: [
          { en: "Argentina", es: "Argentina", de: "Argentinien", nl: "Argentinië" },
          { en: "Chile", es: "Chile", de: "Chile", nl: "Chili" },
          { en: "Uruguay", es: "Uruguay", de: "Uruguay", nl: "Uruguay" },
          { en: "Brazil", es: "Brasil", de: "Brasilien", nl: "Brazilië" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the capital of Ecuador?",
          es: "¿Cuál es la capital de Ecuador?",
          de: "Was ist die Hauptstadt von Ecuador?",
          nl: "Wat is de hoofdstad van Ecuador?"
        },
        options: [
          { en: "Quito", es: "Quito", de: "Quito", nl: "Quito" },
          { en: "Guayaquil", es: "Guayaquil", de: "Guayaquil", nl: "Guayaquil" },
          { en: "Cuenca", es: "Cuenca", de: "Cuenca", nl: "Cuenca" },
          { en: "Ambato", es: "Ambato", de: "Ambato", nl: "Ambato" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which river system drains most of South America?",
          es: "¿Qué sistema fluvial drena la mayor parte de América del Sur?",
          de: "Welches Flusssystem entwässert den größten Teil Südamerikas?",
          nl: "Welk riviersysteem draineert het grootste deel van Zuid-Amerika?"
        },
        options: [
          { en: "Amazon River system", es: "Sistema del río Amazonas", de: "Amazonas-Flusssystem", nl: "Amazone-riviersysteem" },
          { en: "Orinoco River system", es: "Sistema del río Orinoco", de: "Orinoco-Flusssystem", nl: "Orinoco-riviersysteem" },
          { en: "Paraná River system", es: "Sistema del río Paraná", de: "Paraná-Flusssystem", nl: "Paraná-riviersysteem" },
          { en: "Magdalena River system", es: "Sistema del río Magdalena", de: "Magdalena-Flusssystem", nl: "Magdalena-riviersysteem" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the most populous city in South America?",
          es: "¿Cuál es la ciudad más poblada de América del Sur?",
          de: "Was ist die bevölkerungsreichste Stadt in Südamerika?",
          nl: "Wat is de meest bevolkte stad in Zuid-Amerika?"
        },
        options: [
          { en: "São Paulo", es: "São Paulo", de: "São Paulo", nl: "São Paulo" },
          { en: "Buenos Aires", es: "Buenos Aires", de: "Buenos Aires", nl: "Buenos Aires" },
          { en: "Lima", es: "Lima", de: "Lima", nl: "Lima" },
          { en: "Bogotá", es: "Bogotá", de: "Bogotá", nl: "Bogotá" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which US state is known for its lobster industry?",
          es: "¿Qué estado de EE.UU. es conocido por su industria de langosta?",
          de: "Welcher US-Bundesstaat ist für seine Hummerindustrie bekannt?",
          nl: "Welke Amerikaanse staat staat bekend om zijn kreeftenindustrie?"
        },
        options: [
          { en: "Maine", es: "Maine", de: "Maine", nl: "Maine" },
          { en: "Massachusetts", es: "Massachusetts", de: "Massachusetts", nl: "Massachusetts" },
          { en: "New Hampshire", es: "Nuevo Hampshire", de: "New Hampshire", nl: "New Hampshire" },
          { en: "Connecticut", es: "Connecticut", de: "Connecticut", nl: "Connecticut" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the capital of Venezuela?",
          es: "¿Cuál es la capital de Venezuela?",
          de: "Was ist die Hauptstadt von Venezuela?",
          nl: "Wat is de hoofdstad van Venezuela?"
        },
        options: [
          { en: "Caracas", es: "Caracas", de: "Caracas", nl: "Caracas" },
          { en: "Maracaibo", es: "Maracaibo", de: "Maracaibo", nl: "Maracaibo" },
          { en: "Valencia", es: "Valencia", de: "Valencia", nl: "Valencia" },
          { en: "Barquisimeto", es: "Barquisimeto", de: "Barquisimeto", nl: "Barquisimeto" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which region of South America is known for its flat grasslands?",
          es: "¿Qué región de América del Sur es conocida por sus pastizales planos?",
          de: "Welche Region Südamerikas ist für ihre flachen Graslandschaften bekannt?",
          nl: "Welke regio van Zuid-Amerika staat bekend om zijn vlakke graslanden?"
        },
        options: [
          { en: "Pampas", es: "Pampas", de: "Pampas", nl: "Pampas" },
          { en: "Llanos", es: "Llanos", de: "Llanos", nl: "Llanos" },
          { en: "Patagonia", es: "Patagonia", de: "Patagonien", nl: "Patagonië" },
          { en: "Cerrado", es: "Cerrado", de: "Cerrado", nl: "Cerrado" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the largest city in Alaska?",
          es: "¿Cuál es la ciudad más grande de Alaska?",
          de: "Was ist die größte Stadt in Alaska?",
          nl: "Wat is de grootste stad in Alaska?"
        },
        options: [
          { en: "Anchorage", es: "Anchorage", de: "Anchorage", nl: "Anchorage" },
          { en: "Juneau", es: "Juneau", de: "Juneau", nl: "Juneau" },
          { en: "Fairbanks", es: "Fairbanks", de: "Fairbanks", nl: "Fairbanks" },
          { en: "Sitka", es: "Sitka", de: "Sitka", nl: "Sitka" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which waterway connects the Atlantic and Pacific Oceans through Central America?",
          es: "¿Qué vía fluvial conecta los océanos Atlántico y Pacífico a través de América Central?",
          de: "Welcher Wasserweg verbindet den Atlantik und Pazifik durch Mittelamerika?",
          nl: "Welke waterweg verbindt de Atlantische en Grote Oceaan door Midden-Amerika?"
        },
        options: [
          { en: "Panama Canal", es: "Canal de Panamá", de: "Panamakanal", nl: "Panamakanaal" },
          { en: "Nicaragua Canal", es: "Canal de Nicaragua", de: "Nicaragua-Kanal", nl: "Nicaraguakanaal" },
          { en: "Suez Canal", es: "Canal de Suez", de: "Suezkanal", nl: "Suezkanaal" },
          { en: "Strait of Magellan", es: "Estrecho de Magallanes", de: "Magellanstraße", nl: "Straat van Magalhães" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the capital of Uruguay?",
          es: "¿Cuál es la capital de Uruguay?",
          de: "Was ist die Hauptstadt von Uruguay?",
          nl: "Wat is de hoofdstad van Uruguay?"
        },
        options: [
          { en: "Montevideo", es: "Montevideo", de: "Montevideo", nl: "Montevideo" },
          { en: "Salto", es: "Salto", de: "Salto", nl: "Salto" },
          { en: "Paysandú", es: "Paysandú", de: "Paysandú", nl: "Paysandú" },
          { en: "Maldonado", es: "Maldonado", de: "Maldonado", nl: "Maldonado" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which mountain peak straddles the border between Chile and Argentina?",
          es: "¿Qué pico montañoso se extiende por la frontera entre Chile y Argentina?",
          de: "Welcher Berggipfel liegt an der Grenze zwischen Chile und Argentinien?",
          nl: "Welke bergtop ligt op de grens tussen Chili en Argentinië?"
        },
        options: [
          { en: "Aconcagua", es: "Aconcagua", de: "Aconcagua", nl: "Aconcagua" },
          { en: "Cerro Torre", es: "Cerro Torre", de: "Cerro Torre", nl: "Cerro Torre" },
          { en: "Fitz Roy", es: "Fitz Roy", de: "Fitz Roy", nl: "Fitz Roy" },
          { en: "Ojos del Salado", es: "Ojos del Salado", de: "Ojos del Salado", nl: "Ojos del Salado" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the smallest country in South America?",
          es: "¿Cuál es el país más pequeño de América del Sur?",
          de: "Was ist das kleinste Land in Südamerika?",
          nl: "Wat is het kleinste land in Zuid-Amerika?"
        },
        options: [
          { en: "Suriname", es: "Surinam", de: "Suriname", nl: "Suriname" },
          { en: "Uruguay", es: "Uruguay", de: "Uruguay", nl: "Uruguay" },
          { en: "Guyana", es: "Guyana", de: "Guyana", nl: "Guyana" },
          { en: "French Guiana", es: "Guayana Francesa", de: "Französisch-Guayana", nl: "Frans-Guyana" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which body of water lies between Florida and Cuba?",
          es: "¿Qué cuerpo de agua se encuentra entre Florida y Cuba?",
          de: "Welches Gewässer liegt zwischen Florida und Kuba?",
          nl: "Welk water ligt tussen Florida en Cuba?"
        },
        options: [
          { en: "Straits of Florida", es: "Estrecho de Florida", de: "Floridastraße", nl: "Straat van Florida" },
          { en: "Gulf of Mexico", es: "Golfo de México", de: "Golf von Mexiko", nl: "Golf van Mexico" },
          { en: "Caribbean Sea", es: "Mar Caribe", de: "Karibisches Meer", nl: "Caribische Zee" },
          { en: "Yucatan Channel", es: "Canal de Yucatán", de: "Yucatan-Kanal", nl: "Yucatan-kanaal" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the capital of Paraguay?",
          es: "¿Cuál es la capital de Paraguay?",
          de: "Was ist die Hauptstadt von Paraguay?",
          nl: "Wat is de hoofdstad van Paraguay?"
        },
        options: [
          { en: "Asunción", es: "Asunción", de: "Asunción", nl: "Asunción" },
          { en: "Ciudad del Este", es: "Ciudad del Este", de: "Ciudad del Este", nl: "Ciudad del Este" },
          { en: "San Lorenzo", es: "San Lorenzo", de: "San Lorenzo", nl: "San Lorenzo" },
          { en: "Capiatá", es: "Capiatá", de: "Capiatá", nl: "Capiatá" }
        ],
        correct: 0,
        explanation: {
          en: "Asunción is the capital and largest city of Paraguay, founded in 1537. It sits on the eastern bank of the Paraguay River and is one of the oldest cities in South America.",
          es: "Asunción es la capital y ciudad más grande de Paraguay, fundada en 1537. Se sitúa en la ribera oriental del río Paraguay y es una de las ciudades más antiguas de América del Sur.",
          de: "Asunción ist die Hauptstadt und größte Stadt Paraguays, gegründet 1537. Sie liegt am östlichen Ufer des Paraguay-Flusses und ist eine der ältesten Städte Südamerikas.",
          nl: "Asunción is de hoofdstad en grootste stad van Paraguay, gesticht in 1537. Het ligt aan de oostelijke oever van de Paraguay-rivier en is een van de oudste steden van Zuid-Amerika."
        }
      },
      {
        question: {
          en: "Which volcano is considered the most active in Central America?",
          es: "¿Qué volcán se considera el más activo de América Central?",
          de: "Welcher Vulkan gilt als der aktivste in Mittelamerika?",
          nl: "Welke vulkaan wordt beschouwd als de meest actieve in Midden-Amerika?"
        },
        options: [
          { en: "Arenal", es: "Arenal", de: "Arenal", nl: "Arenal" },
          { en: "Masaya", es: "Masaya", de: "Masaya", nl: "Masaya" },
          { en: "Poás", es: "Poás", de: "Poás", nl: "Poás" },
          { en: "Irazú", es: "Irazú", de: "Irazú", nl: "Irazú" }
        ],
        correct: 0,
        explanation: {
          en: "Arenal Volcano in Costa Rica is considered one of the most active volcanoes in Central America. It was in a state of constant activity from 1968 to 2010, with regular lava flows and explosive eruptions.",
          es: "El volcán Arenal en Costa Rica se considera uno de los volcanes más activos de América Central. Estuvo en estado de actividad constante desde 1968 hasta 2010, con flujos de lava regulares y erupciones explosivas.",
          de: "Der Vulkan Arenal in Costa Rica gilt als einer der aktivsten Vulkane Mittelamerikas. Er war von 1968 bis 2010 in ständiger Aktivität, mit regelmäßigen Lavaströmen und explosiven Eruptionen.",
          nl: "De Arenal-vulkaan in Costa Rica wordt beschouwd als een van de meest actieve vulkanen van Midden-Amerika. Hij was van 1968 tot 2010 in constante activiteit, met regelmatige lavastromen en explosieve uitbarstingen."
        }
      },
      {
        question: {
          en: "What is the highest waterfall in North America?",
          es: "¿Cuál es la cascada más alta de América del Norte?",
          de: "Was ist der höchste Wasserfall in Nordamerika?",
          nl: "Wat is de hoogste waterval in Noord-Amerika?"
        },
        options: [
          { en: "Yosemite Falls", es: "Cataratas de Yosemite", de: "Yosemite-Fälle", nl: "Yosemite-watervallen" },
          { en: "Niagara Falls", es: "Cataratas del Niágara", de: "Niagarafälle", nl: "Niagarawatervallen" },
          { en: "Multnomah Falls", es: "Cataratas Multnomah", de: "Multnomah Falls", nl: "Multnomah Falls" },
          { en: "Takakkaw Falls", es: "Cataratas Takakkaw", de: "Takakkaw Falls", nl: "Takakkaw Falls" }
        ],
        correct: 0,
        explanation: {
          en: "Yosemite Falls in California is the highest waterfall in North America at 2,425 feet (739 meters) tall. It consists of three separate falls: Upper Yosemite Fall, Middle Cascades, and Lower Yosemite Fall.",
          es: "Las cataratas de Yosemite en California son la cascada más alta de América del Norte con 2,425 pies (739 metros) de altura. Consiste en tres caídas separadas: Catarata Superior de Yosemite, Cascadas Medias y Catarata Inferior de Yosemite.",
          de: "Die Yosemite-Fälle in Kalifornien sind mit 2.425 Fuß (739 Metern) der höchste Wasserfall Nordamerikas. Sie bestehen aus drei separaten Fällen: Upper Yosemite Fall, Middle Cascades und Lower Yosemite Fall.",
          nl: "Yosemite Falls in Californië is met 2.425 voet (739 meter) de hoogste waterval in Noord-Amerika. Het bestaat uit drie afzonderlijke vallen: Upper Yosemite Fall, Middle Cascades en Lower Yosemite Fall."
        }
      },
      {
        question: {
          en: "Which South American country has three capital cities?",
          es: "¿Qué país sudamericano tiene tres ciudades capitales?",
          de: "Welches südamerikanische Land hat drei Hauptstädte?",
          nl: "Welk Zuid-Amerikaans land heeft drie hoofdsteden?"
        },
        options: [
          { en: "Bolivia", es: "Bolivia", de: "Bolivien", nl: "Bolivia" },
          { en: "Ecuador", es: "Ecuador", de: "Ecuador", nl: "Ecuador" },
          { en: "Colombia", es: "Colombia", de: "Kolumbien", nl: "Colombia" },
          { en: "Venezuela", es: "Venezuela", de: "Venezuela", nl: "Venezuela" }
        ],
        correct: 0,
        explanation: {
          en: "Bolivia is unique in having three capital cities: Sucre (constitutional and judicial capital), La Paz (administrative capital and seat of government), and Santa Cruz (economic capital). This arrangement reflects the country's complex political and economic history.",
          es: "Bolivia es único al tener tres ciudades capitales: Sucre (capital constitucional y judicial), La Paz (capital administrativa y sede del gobierno), y Santa Cruz (capital económica). Este arreglo refleja la compleja historia política y económica del país.",
          de: "Bolivien ist einzigartig mit drei Hauptstädten: Sucre (Verfassungs- und Justizhauptstadt), La Paz (Verwaltungshauptstadt und Regierungssitz) und Santa Cruz (Wirtschaftshauptstadt). Diese Anordnung spiegelt die komplexe politische und wirtschaftliche Geschichte des Landes wider.",
          nl: "Bolivia is uniek met drie hoofdsteden: Sucre (constitutionele en gerechtelijke hoofdstad), La Paz (administratieve hoofdstad en regeringszetel), en Santa Cruz (economische hoofdstad). Deze regeling weerspiegelt de complexe politieke en economische geschiedenis van het land."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('warm-up/world-geography', level6);
  }
})();