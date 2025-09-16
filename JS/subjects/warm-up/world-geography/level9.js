// World Geography - Level 9: Climate, Time Zones, and Natural Phenomena
(function() {
  const level9 = {
    name: {
      en: "Climate, Time Zones, and Natural Phenomena",
      es: "Clima, Zonas Horarias y Fenómenos Naturales",
      de: "Klima, Zeitzonen und Naturphänomene",
      nl: "Klimaat, Tijdzones en Natuurverschijnselen"
    },
    questions: [
      {
        question: {
          en: "How many time zones does the Earth have?",
          es: "¿Cuántas zonas horarias tiene la Tierra?",
          de: "Wie viele Zeitzonen hat die Erde?",
          nl: "Hoeveel tijdzones heeft de aarde?"
        },
        options: [
          { en: "24", es: "24", de: "24", nl: "24" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "36", es: "36", de: "36", nl: "36" },
          { en: "48", es: "48", de: "48", nl: "48" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What climate zone is characterized by hot summers and mild winters?",
          es: "¿Qué zona climática se caracteriza por veranos calurosos e inviernos suaves?",
          de: "Welche Klimazone ist durch heiße Sommer und milde Winter charakterisiert?",
          nl: "Welke klimaatzone wordt gekenmerkt door hete zomers en milde winters?"
        },
        options: [
          { en: "Mediterranean", es: "Mediterráneo", de: "Mediterran", nl: "Mediterraans" },
          { en: "Tropical", es: "Tropical", de: "Tropisch", nl: "Tropisch" },
          { en: "Continental", es: "Continental", de: "Kontinental", nl: "Continentaal" },
          { en: "Polar", es: "Polar", de: "Polar", nl: "Polair" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which phenomenon causes the Northern and Southern Lights?",
          es: "¿Qué fenómeno causa las Auroras Boreales y Australes?",
          de: "Welches Phänomen verursacht die Nord- und Südlichter?",
          nl: "Welk verschijnsel veroorzaakt het noorderlicht en zuiderlicht?"
        },
        options: [
          { en: "Solar wind", es: "Viento solar", de: "Sonnenwind", nl: "Zonnewind" },
          { en: "Volcanic eruptions", es: "Erupciones volcánicas", de: "Vulkanausbrüche", nl: "Vulkanische uitbarstingen" },
          { en: "Ocean currents", es: "Corrientes oceánicas", de: "Meeresströmungen", nl: "Oceaanstromingen" },
          { en: "Atmospheric pressure", es: "Presión atmosférica", de: "Atmosphärendruck", nl: "Luchtdruk" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the term for the imaginary line at 0° longitude?",
          es: "¿Cuál es el término para la línea imaginaria a 0° de longitud?",
          de: "Wie nennt man die imaginäre Linie bei 0° Längengrad?",
          nl: "Wat is de term voor de denkbeeldige lijn op 0° lengtegraad?"
        },
        options: [
          { en: "Prime Meridian", es: "Meridiano de Greenwich", de: "Nullmeridian", nl: "Nulmeridiaan" },
          { en: "Equator", es: "Ecuador", de: "Äquator", nl: "Evenaar" },
          { en: "Tropic of Cancer", es: "Trópico de Cáncer", de: "Wendekreis des Krebses", nl: "Kreeftskeerkring" },
          { en: "International Date Line", es: "Línea Internacional de Cambio de Fecha", de: "Internationale Datumsgrenze", nl: "Internationale datumgrens" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which country has the most time zones?",
          es: "¿Qué país tiene más zonas horarias?",
          de: "Welches Land hat die meisten Zeitzonen?",
          nl: "Welk land heeft de meeste tijdzones?"
        },
        options: [
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Russia", es: "Rusia", de: "Russland", nl: "Rusland" },
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },
          { en: "China", es: "China", de: "China", nl: "China" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What type of climate is found near the equator?",
          es: "¿Qué tipo de clima se encuentra cerca del ecuador?",
          de: "Welche Art von Klima findet man in der Nähe des Äquators?",
          nl: "Wat voor soort klimaat wordt gevonden nabij de evenaar?"
        },
        options: [
          { en: "Tropical", es: "Tropical", de: "Tropisch", nl: "Tropisch" },
          { en: "Temperate", es: "Templado", de: "Gemäßigt", nl: "Gematigd" },
          { en: "Polar", es: "Polar", de: "Polar", nl: "Polair" },
          { en: "Arid", es: "Árido", de: "Trocken", nl: "Droog" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which scale is used to measure the intensity of hurricanes?",
          es: "¿Qué escala se usa para medir la intensidad de los huracanes?",
          de: "Welche Skala wird zur Messung der Intensität von Hurrikans verwendet?",
          nl: "Welke schaal wordt gebruikt om de intensiteit van orkanen te meten?"
        },
        options: [
          { en: "Saffir-Simpson Scale", es: "Escala de Saffir-Simpson", de: "Saffir-Simpson-Skala", nl: "Saffir-Simpson-schaal" },
          { en: "Richter Scale", es: "Escala de Richter", de: "Richter-Skala", nl: "Richter-schaal" },
          { en: "Fujita Scale", es: "Escala de Fujita", de: "Fujita-Skala", nl: "Fujita-schaal" },
          { en: "Beaufort Scale", es: "Escala de Beaufort", de: "Beaufort-Skala", nl: "Beaufort-schaal" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the phenomenon where warm ocean water affects global weather patterns?",
          es: "¿Cuál es el fenómeno donde el agua cálida del océano afecta los patrones climáticos globales?",
          de: "Wie nennt man das Phänomen, bei dem warmes Meerwasser die globalen Wettermuster beeinflusst?",
          nl: "Wat is het verschijnsel waarbij warm oceaanwater de wereldwijde weerpatronen beïnvloedt?"
        },
        options: [
          { en: "El Niño", es: "El Niño", de: "El Niño", nl: "El Niño" },
          { en: "La Niña", es: "La Niña", de: "La Niña", nl: "La Niña" },
          { en: "Gulf Stream", es: "Corriente del Golfo", de: "Golfstrom", nl: "Golfstroom" },
          { en: "Monsoon", es: "Monzón", de: "Monsun", nl: "Moesson" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which line of latitude marks the northernmost point where the sun appears directly overhead?",
          es: "¿Qué línea de latitud marca el punto más al norte donde el sol aparece directamente arriba?",
          de: "Welcher Breitengrad markiert den nördlichsten Punkt, an dem die Sonne direkt über dem Kopf steht?",
          nl: "Welke breedtegraad markeert het noordelijkste punt waar de zon recht boven het hoofd verschijnt?"
        },
        options: [
          { en: "Tropic of Cancer", es: "Trópico de Cáncer", de: "Wendekreis des Krebses", nl: "Kreeftskeerkring" },
          { en: "Tropic of Capricorn", es: "Trópico de Capricornio", de: "Wendekreis des Steinbocks", nl: "Steenbokskeerkring" },
          { en: "Arctic Circle", es: "Círculo Polar Ártico", de: "Nordpolarkreis", nl: "Noordpoolcirkel" },
          { en: "Equator", es: "Ecuador", de: "Äquator", nl: "Evenaar" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What causes the seasons on Earth?",
          es: "¿Qué causa las estaciones en la Tierra?",
          de: "Was verursacht die Jahreszeiten auf der Erde?",
          nl: "Wat veroorzaakt de seizoenen op aarde?"
        },
        options: [
          { en: "Earth's tilt on its axis", es: "La inclinación de la Tierra en su eje", de: "Die Neigung der Erde auf ihrer Achse", nl: "De kanteling van de aarde op zijn as" },
          { en: "Distance from the sun", es: "Distancia del sol", de: "Entfernung zur Sonne", nl: "Afstand tot de zon" },
          { en: "Solar flares", es: "Llamaradas solares", de: "Sonneneruptionen", nl: "Zonnevlammen" },
          { en: "Moon's gravitational pull", es: "Atracción gravitacional de la luna", de: "Gravitationskraft des Mondes", nl: "Gravitatiekracht van de maan" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which wind pattern brings monsoon rains to South Asia?",
          es: "¿Qué patrón de viento trae las lluvias monzónicas al sur de Asia?",
          de: "Welches Windmuster bringt Monsunregen nach Südasien?",
          nl: "Welk windpatroon brengt moessonregens naar Zuid-Azië?"
        },
        options: [
          { en: "Southwest Monsoon", es: "Monzón del Suroeste", de: "Südwestmonsun", nl: "Zuidwestmoesson" },
          { en: "Northeast Monsoon", es: "Monzón del Noreste", de: "Nordostmonsun", nl: "Noordoostmoesson" },
          { en: "Trade winds", es: "Vientos alisios", de: "Passatwinde", nl: "Passaatwinden" },
          { en: "Westerlies", es: "Vientos del oeste", de: "Westwind", nl: "Westenwinden" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the coldest permanently inhabited place on Earth?",
          es: "¿Cuál es el lugar permanentemente habitado más frío de la Tierra?",
          de: "Was ist der kälteste dauerhaft bewohnte Ort der Erde?",
          nl: "Wat is de koudste permanent bewoonde plaats op aarde?"
        },
        options: [
          { en: "Oymyakon, Russia", es: "Oymyakon, Rusia", de: "Oimjakon, Russland", nl: "Oymyakon, Rusland" },
          { en: "Barrow, Alaska", es: "Barrow, Alaska", de: "Barrow, Alaska", nl: "Barrow, Alaska" },
          { en: "Yellowknife, Canada", es: "Yellowknife, Canadá", de: "Yellowknife, Kanada", nl: "Yellowknife, Canada" },
          { en: "Norilsk, Russia", es: "Norilsk, Rusia", de: "Norilsk, Russland", nl: "Norilsk, Rusland" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which country experiences the midnight sun phenomenon?",
          es: "¿Qué país experimenta el fenómeno del sol de medianoche?",
          de: "Welches Land erlebt das Phänomen der Mitternachtssonne?",
          nl: "Welk land ervaart het middernachtzonverschijnsel?"
        },
        options: [
          { en: "Norway", es: "Noruega", de: "Norwegen", nl: "Noorwegen" },
          { en: "Sweden", es: "Suecia", de: "Schweden", nl: "Zweden" },
          { en: "Finland", es: "Finlandia", de: "Finnland", nl: "Finland" },
          { en: "All of the above", es: "Todos los anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
        ],
        correct: 3
      },
      {
        question: {
          en: "What is the term for a prolonged period of abnormally hot weather?",
          es: "¿Cuál es el término para un período prolongado de clima anormalmente caluroso?",
          de: "Wie nennt man eine längere Periode mit ungewöhnlich heißem Wetter?",
          nl: "Wat is de term voor een langdurige periode van abnormaal heet weer?"
        },
        options: [
          { en: "Heat wave", es: "Ola de calor", de: "Hitzewelle", nl: "Hittegolf" },
          { en: "Drought", es: "Sequía", de: "Dürre", nl: "Droogte" },
          { en: "Monsoon", es: "Monzón", de: "Monsun", nl: "Moesson" },
          { en: "Cyclone", es: "Ciclón", de: "Zyklon", nl: "Cyclone" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which ocean current helps warm the climate of Western Europe?",
          es: "¿Qué corriente oceánica ayuda a calentar el clima de Europa Occidental?",
          de: "Welche Meeresströmung hilft dabei, das Klima Westeuropas zu erwärmen?",
          nl: "Welke oceaanstroom helpt het klimaat van West-Europa te verwarmen?"
        },
        options: [
          { en: "Gulf Stream", es: "Corriente del Golfo", de: "Golfstrom", nl: "Golfstroom" },
          { en: "Kuroshio Current", es: "Corriente Kuroshio", de: "Kuroshio-Strom", nl: "Kuroshio-stroom" },
          { en: "Humboldt Current", es: "Corriente de Humboldt", de: "Humboldtstrom", nl: "Humboldtstroom" },
          { en: "California Current", es: "Corriente de California", de: "Kalifornienstrom", nl: "Californische stroom" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the scientific term for the study of weather?",
          es: "¿Cuál es el término científico para el estudio del clima?",
          de: "Wie lautet der wissenschaftliche Begriff für das Studium des Wetters?",
          nl: "Wat is de wetenschappelijke term voor de studie van het weer?"
        },
        options: [
          { en: "Meteorology", es: "Meteorología", de: "Meteorologie", nl: "Meteorologie" },
          { en: "Climatology", es: "Climatología", de: "Klimatologie", nl: "Climatologie" },
          { en: "Geology", es: "Geología", de: "Geologie", nl: "Geologie" },
          { en: "Astronomy", es: "Astronomía", de: "Astronomie", nl: "Astronomie" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which type of cloud is associated with thunderstorms?",
          es: "¿Qué tipo de nube está asociada con las tormentas?",
          de: "Welcher Wolkentyp ist mit Gewittern verbunden?",
          nl: "Welk type wolk wordt geassocieerd met onweersbuien?"
        },
        options: [
          { en: "Cumulonimbus", es: "Cumulonimbo", de: "Cumulonimbus", nl: "Cumulonimbus" },
          { en: "Cirrus", es: "Cirro", de: "Zirrus", nl: "Cirrus" },
          { en: "Stratus", es: "Estrato", de: "Stratus", nl: "Stratus" },
          { en: "Cumulus", es: "Cúmulo", de: "Cumulus", nl: "Cumulus" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the name of the boundary between two air masses?",
          es: "¿Cómo se llama la frontera entre dos masas de aire?",
          de: "Wie nennt man die Grenze zwischen zwei Luftmassen?",
          nl: "Wat is de naam van de grens tussen twee luchtmassa's?"
        },
        options: [
          { en: "Front", es: "Frente", de: "Front", nl: "Front" },
          { en: "Ridge", es: "Dorsal", de: "Hochdruckrücken", nl: "Rug" },
          { en: "Trough", es: "Vaguada", de: "Trog", nl: "Trog" },
          { en: "Jet stream", es: "Corriente en chorro", de: "Jetstream", nl: "Jetstream" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which region experiences four distinct seasons?",
          es: "¿Qué región experimenta cuatro estaciones distintas?",
          de: "Welche Region erlebt vier ausgeprägte Jahreszeiten?",
          nl: "Welke regio ervaart vier verschillende seizoenen?"
        },
        options: [
          { en: "Temperate zone", es: "Zona templada", de: "Gemäßigte Zone", nl: "Gematigde zone" },
          { en: "Tropical zone", es: "Zona tropical", de: "Tropische Zone", nl: "Tropische zone" },
          { en: "Polar zone", es: "Zona polar", de: "Polare Zone", nl: "Polaire zone" },
          { en: "Arid zone", es: "Zona árida", de: "Trockene Zone", nl: "Droge zone" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the term for the spinning effect of the Earth on moving air and water?",
          es: "¿Cuál es el término para el efecto giratorio de la Tierra sobre el aire y el agua en movimiento?",
          de: "Wie nennt man den Dreheffekt der Erde auf sich bewegende Luft und Wasser?",
          nl: "Wat is de term voor het draaieffect van de aarde op bewegende lucht en water?"
        },
        options: [
          { en: "Coriolis effect", es: "Efecto Coriolis", de: "Coriolis-Effekt", nl: "Coriolis-effect" },
          { en: "Centrifugal force", es: "Fuerza centrífuga", de: "Zentrifugalkraft", nl: "Middelpuntvliedende kracht" },
          { en: "Gravitational pull", es: "Atracción gravitacional", de: "Gravitationskraft", nl: "Gravitatiekracht" },
          { en: "Magnetic field", es: "Campo magnético", de: "Magnetfeld", nl: "Magnetisch veld" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which desert is known as the driest place on Earth?",
          es: "¿Qué desierto es conocido como el lugar más seco de la Tierra?",
          de: "Welche Wüste ist als der trockenste Ort der Erde bekannt?",
          nl: "Welke woestijn staat bekend als de droogste plaats op aarde?"
        },
        options: [
          { en: "Atacama Desert", es: "Desierto de Atacama", de: "Atacama-Wüste", nl: "Atacama-woestijn" },
          { en: "Sahara Desert", es: "Desierto del Sahara", de: "Sahara", nl: "Sahara" },
          { en: "Antarctic Desert", es: "Desierto Antártico", de: "Antarktische Wüste", nl: "Antarctische woestijn" },
          { en: "Gobi Desert", es: "Desierto de Gobi", de: "Gobi-Wüste", nl: "Gobi-woestijn" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the term for a violent rotating column of air?",
          es: "¿Cuál es el término para una columna de aire violenta y rotatoria?",
          de: "Wie nennt man eine heftig rotierende Luftsäule?",
          nl: "Wat is de term voor een gewelddadige draaiende luchtkolom?"
        },
        options: [
          { en: "Tornado", es: "Tornado", de: "Tornado", nl: "Tornado" },
          { en: "Hurricane", es: "Huracán", de: "Hurrikan", nl: "Orkaan" },
          { en: "Cyclone", es: "Ciclón", de: "Zyklon", nl: "Cyclone" },
          { en: "Typhoon", es: "Tifón", de: "Taifun", nl: "Tyfoon" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which phenomenon occurs when cold air sinks and warm air rises?",
          es: "¿Qué fenómeno ocurre cuando el aire frío desciende y el aire cálido asciende?",
          de: "Welches Phänomen tritt auf, wenn kalte Luft sinkt und warme Luft steigt?",
          nl: "Welk verschijnsel treedt op wanneer koude lucht daalt en warme lucht stijgt?"
        },
        options: [
          { en: "Convection", es: "Convección", de: "Konvektion", nl: "Convectie" },
          { en: "Conduction", es: "Conducción", de: "Leitung", nl: "Geleiding" },
          { en: "Radiation", es: "Radiación", de: "Strahlung", nl: "Straling" },
          { en: "Evaporation", es: "Evaporación", de: "Verdunstung", nl: "Verdamping" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the average temperature difference between summer and winter in tropical climates?",
          es: "¿Cuál es la diferencia de temperatura promedio entre verano e invierno en climas tropicales?",
          de: "Was ist der durchschnittliche Temperaturunterschied zwischen Sommer und Winter in tropischen Klimazonen?",
          nl: "Wat is het gemiddelde temperatuurverschil tussen zomer en winter in tropische klimaten?"
        },
        options: [
          { en: "Less than 5°C", es: "Menos de 5°C", de: "Weniger als 5°C", nl: "Minder dan 5°C" },
          { en: "5-10°C", es: "5-10°C", de: "5-10°C", nl: "5-10°C" },
          { en: "10-15°C", es: "10-15°C", de: "10-15°C", nl: "10-15°C" },
          { en: "More than 15°C", es: "Más de 15°C", de: "Mehr als 15°C", nl: "Meer dan 15°C" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which instrument is used to measure atmospheric pressure?",
          es: "¿Qué instrumento se usa para medir la presión atmosférica?",
          de: "Welches Instrument wird zur Messung des Luftdrucks verwendet?",
          nl: "Welk instrument wordt gebruikt om de luchtdruk te meten?"
        },
        options: [
          { en: "Barometer", es: "Barómetro", de: "Barometer", nl: "Barometer" },
          { en: "Thermometer", es: "Termómetro", de: "Thermometer", nl: "Thermometer" },
          { en: "Hygrometer", es: "Higrómetro", de: "Hygrometer", nl: "Hygrometer" },
          { en: "Anemometer", es: "Anemómetro", de: "Anemometer", nl: "Anemometer" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the name of the warm phase of the El Niño-Southern Oscillation?",
          es: "¿Cuál es el nombre de la fase cálida de la Oscilación del Sur El Niño?",
          de: "Wie heißt die warme Phase der El Niño-Südlichen Oszillation?",
          nl: "Wat is de naam van de warme fase van de El Niño-Southern Oscillation?"
        },
        options: [
          { en: "El Niño", es: "El Niño", de: "El Niño", nl: "El Niño" },
          { en: "La Niña", es: "La Niña", de: "La Niña", nl: "La Niña" },
          { en: "ENSO", es: "ENSO", de: "ENSO", nl: "ENSO" },
          { en: "IOD", es: "IOD", de: "IOD", nl: "IOD" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which type of precipitation forms when raindrops freeze before hitting the ground?",
          es: "¿Qué tipo de precipitación se forma cuando las gotas de lluvia se congelan antes de tocar el suelo?",
          de: "Welche Art von Niederschlag entsteht, wenn Regentropfen vor dem Aufprall auf den Boden gefrieren?",
          nl: "Welk type neerslag vormt zich wanneer regendruppels bevriezen voordat ze de grond raken?"
        },
        options: [
          { en: "Sleet", es: "Aguanieve", de: "Schneematsch", nl: "IJzel" },
          { en: "Hail", es: "Granizo", de: "Hagel", nl: "Hagel" },
          { en: "Snow", es: "Nieve", de: "Schnee", nl: "Sneeuw" },
          { en: "Freezing rain", es: "Lluvia helada", de: "Eisregen", nl: "Ijsregen" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the boundary called where the trade winds meet near the equator?",
          es: "¿Cómo se llama la frontera donde los vientos alisios se encuentran cerca del ecuador?",
          de: "Wie heißt die Grenze, wo sich die Passatwinde in der Nähe des Äquators treffen?",
          nl: "Hoe heet de grens waar de passaatwinden elkaar ontmoeten nabij de evenaar?"
        },
        options: [
          { en: "Intertropical Convergence Zone", es: "Zona de Convergencia Intertropical", de: "Innertropische Konvergenzzone", nl: "Intertropische Convergentiezone" },
          { en: "Polar Front", es: "Frente Polar", de: "Polarfront", nl: "Polaire Front" },
          { en: "Subtropical High", es: "Anticiclón Subtropical", de: "Subtropisches Hoch", nl: "Subtropische Hogedrukgebied" },
          { en: "Jet Stream", es: "Corriente en Chorro", de: "Jetstream", nl: "Jetstream" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which climate classification system is most widely used?",
          es: "¿Qué sistema de clasificación climática es el más ampliamente usado?",
          de: "Welches Klimaklassifikationssystem wird am häufigsten verwendet?",
          nl: "Welk klimaatclassificatiesysteem wordt het meest gebruikt?"
        },
        options: [
          { en: "Köppen climate classification", es: "Clasificación climática de Köppen", de: "Köppen-Klimaklassifikation", nl: "Köppen-klimaatclassificatie" },
          { en: "Thornthwaite system", es: "Sistema de Thornthwaite", de: "Thornthwaite-System", nl: "Thornthwaite-systeem" },
          { en: "Trewartha system", es: "Sistema de Trewartha", de: "Trewartha-System", nl: "Trewartha-systeem" },
          { en: "Holdridge system", es: "Sistema de Holdridge", de: "Holdridge-System", nl: "Holdridge-systeem" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What causes the greenhouse effect?",
          es: "¿Qué causa el efecto invernadero?",
          de: "Was verursacht den Treibhauseffekt?",
          nl: "Wat veroorzaakt het broeikaseffect?"
        },
        options: [
          { en: "Atmospheric gases trapping heat", es: "Gases atmosféricos atrapando calor", de: "Atmosphärische Gase, die Wärme einfangen", nl: "Atmosferische gassen die warmte vasthouden" },
          { en: "Solar flares", es: "Llamaradas solares", de: "Sonneneruptionen", nl: "Zonnevlammen" },
          { en: "Ocean currents", es: "Corrientes oceánicas", de: "Meeresströmungen", nl: "Oceaanstromingen" },
          { en: "Earth's magnetic field", es: "Campo magnético terrestre", de: "Erdmagnetfeld", nl: "Magnetisch veld van de aarde" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which layer of the atmosphere contains the ozone layer?",
          es: "¿Qué capa de la atmósfera contiene la capa de ozono?",
          de: "Welche Schicht der Atmosphäre enthält die Ozonschicht?",
          nl: "Welke laag van de atmosfeer bevat de ozonlaag?"
        },
        options: [
          { en: "Stratosphere", es: "Estratosfera", de: "Stratosphäre", nl: "Stratosfeer" },
          { en: "Troposphere", es: "Troposfera", de: "Troposphäre", nl: "Troposfeer" },
          { en: "Mesosphere", es: "Mesosfera", de: "Mesosphäre", nl: "Mesosfeer" },
          { en: "Thermosphere", es: "Termosfera", de: "Thermosphäre", nl: "Thermosfeer" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the term for the measurement of humidity in the air?",
          es: "¿Cuál es el término para la medición de humedad en el aire?",
          de: "Wie nennt man die Messung der Luftfeuchtigkeit?",
          nl: "Wat is de term voor het meten van luchtvochtigheid?"
        },
        options: [
          { en: "Relative humidity", es: "Humedad relativa", de: "Relative Luftfeuchtigkeit", nl: "Relatieve luchtvochtigheid" },
          { en: "Absolute humidity", es: "Humedad absoluta", de: "Absolute Luftfeuchtigkeit", nl: "Absolute luchtvochtigheid" },
          { en: "Dew point", es: "Punto de rocío", de: "Taupunkt", nl: "Dauwpunt" },
          { en: "Vapor pressure", es: "Presión de vapor", de: "Dampfdruck", nl: "Dampdruk" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which phenomenon can cause temporary cooling of global temperatures?",
          es: "¿Qué fenómeno puede causar enfriamiento temporal de las temperaturas globales?",
          de: "Welches Phänomen kann eine vorübergehende Abkühlung der globalen Temperaturen verursachen?",
          nl: "Welk verschijnsel kan tijdelijke afkoeling van wereldwijde temperaturen veroorzaken?"
        },
        options: [
          { en: "Volcanic eruptions", es: "Erupciones volcánicas", de: "Vulkanausbrüche", nl: "Vulkanische uitbarstingen" },
          { en: "Solar flares", es: "Llamaradas solares", de: "Sonneneruptionen", nl: "Zonnevlammen" },
          { en: "Ocean warming", es: "Calentamiento oceánico", de: "Meereserwärmung", nl: "Opwarming van oceanen" },
          { en: "Deforestation", es: "Deforestación", de: "Entwaldung", nl: "Ontbossing" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the name of the cold ocean current off the west coast of South America?",
          es: "¿Cuál es el nombre de la corriente oceánica fría en la costa oeste de América del Sur?",
          de: "Wie heißt die kalte Meeresströmung vor der Westküste Südamerikas?",
          nl: "Wat is de naam van de koude oceaanstroom voor de westkust van Zuid-Amerika?"
        },
        options: [
          { en: "Humboldt Current", es: "Corriente de Humboldt", de: "Humboldtstrom", nl: "Humboldtstroom" },
          { en: "California Current", es: "Corriente de California", de: "Kalifornienstrom", nl: "Californische stroom" },
          { en: "Canary Current", es: "Corriente de Canarias", de: "Kanarenstrom", nl: "Canarische stroom" },
          { en: "Benguela Current", es: "Corriente de Benguela", de: "Benguelastrom", nl: "Benguela-stroom" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which climate zone is characterized by permafrost?",
          es: "¿Qué zona climática se caracteriza por el permafrost?",
          de: "Welche Klimazone ist durch Permafrost charakterisiert?",
          nl: "Welke klimaatzone wordt gekenmerkt door permafrost?"
        },
        options: [
          { en: "Tundra", es: "Tundra", de: "Tundra", nl: "Toendra" },
          { en: "Taiga", es: "Taiga", de: "Taiga", nl: "Taiga" },
          { en: "Temperate", es: "Templado", de: "Gemäßigt", nl: "Gematigd" },
          { en: "Mediterranean", es: "Mediterráneo", de: "Mediterran", nl: "Mediterraans" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the average global temperature increase since pre-industrial times?",
          es: "¿Cuál es el aumento promedio de temperatura global desde los tiempos preindustriales?",
          de: "Wie hoch ist der durchschnittliche globale Temperaturanstieg seit vorindustrieller Zeit?",
          nl: "Wat is de gemiddelde wereldwijde temperatuurstijging sinds de pre-industriële tijd?"
        },
        options: [
          { en: "Approximately 1.1°C", es: "Aproximadamente 1.1°C", de: "Etwa 1,1°C", nl: "Ongeveer 1,1°C" },
          { en: "Approximately 2.5°C", es: "Aproximadamente 2.5°C", de: "Etwa 2,5°C", nl: "Ongeveer 2,5°C" },
          { en: "Approximately 0.5°C", es: "Aproximadamente 0.5°C", de: "Etwa 0,5°C", nl: "Ongeveer 0,5°C" },
          { en: "Approximately 3°C", es: "Aproximadamente 3°C", de: "Etwa 3°C", nl: "Ongeveer 3°C" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which scale measures tornado intensity?",
          es: "¿Qué escala mide la intensidad de los tornados?",
          de: "Welche Skala misst die Intensität von Tornados?",
          nl: "Welke schaal meet tornado-intensiteit?"
        },
        options: [
          { en: "Enhanced Fujita Scale", es: "Escala Fujita Mejorada", de: "Erweiterte Fujita-Skala", nl: "Verbeterde Fujita-schaal" },
          { en: "Saffir-Simpson Scale", es: "Escala de Saffir-Simpson", de: "Saffir-Simpson-Skala", nl: "Saffir-Simpson-schaal" },
          { en: "Richter Scale", es: "Escala de Richter", de: "Richter-Skala", nl: "Richter-schaal" },
          { en: "Beaufort Scale", es: "Escala de Beaufort", de: "Beaufort-Skala", nl: "Beaufort-schaal" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the term for the boundary between day and night on Earth?",
          es: "¿Cuál es el término para la frontera entre el día y la noche en la Tierra?",
          de: "Wie nennt man die Grenze zwischen Tag und Nacht auf der Erde?",
          nl: "Wat is de term voor de grens tussen dag en nacht op aarde?"
        },
        options: [
          { en: "Terminator", es: "Terminador", de: "Terminator", nl: "Terminator" },
          { en: "Prime meridian", es: "Meridiano principal", de: "Nullmeridian", nl: "Nulmeridiaan" },
          { en: "Equator", es: "Ecuador", de: "Äquator", nl: "Evenaar" },
          { en: "International Date Line", es: "Línea Internacional de Cambio de Fecha", de: "Internationale Datumsgrenze", nl: "Internationale datumgrens" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which type of climate has hot, dry summers and mild, wet winters?",
          es: "¿Qué tipo de clima tiene veranos calurosos y secos e inviernos suaves y húmedos?",
          de: "Welche Art von Klima hat heiße, trockene Sommer und milde, feuchte Winter?",
          nl: "Welk type klimaat heeft hete, droge zomers en milde, natte winters?"
        },
        options: [
          { en: "Mediterranean", es: "Mediterráneo", de: "Mediterran", nl: "Mediterraans" },
          { en: "Continental", es: "Continental", de: "Kontinental", nl: "Continentaal" },
          { en: "Oceanic", es: "Oceánico", de: "Ozeanisch", nl: "Oceanisch" },
          { en: "Subarctic", es: "Subártico", de: "Subarktisch", nl: "Subarctisch" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the name of the high-altitude, fast-moving air currents?",
          es: "¿Cuál es el nombre de las corrientes de aire rápidas de gran altitud?",
          de: "Wie heißen die schnellen Luftströmungen in großer Höhe?",
          nl: "Wat is de naam van de snelbewegende luchtstromingen op grote hoogte?"
        },
        options: [
          { en: "Jet streams", es: "Corrientes en chorro", de: "Jetstreams", nl: "Jetstreams" },
          { en: "Trade winds", es: "Vientos alisios", de: "Passatwinde", nl: "Passaatwinden" },
          { en: "Westerlies", es: "Vientos del oeste", de: "Westwind", nl: "Westenwinden" },
          { en: "Polar easterlies", es: "Vientos polares del este", de: "Polare Ostwinde", nl: "Polaire oostenwinden" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which atmospheric layer is closest to Earth's surface?",
          es: "¿Qué capa atmosférica está más cerca de la superficie de la Tierra?",
          de: "Welche Atmosphärenschicht liegt der Erdoberfläche am nächsten?",
          nl: "Welke atmosferische laag ligt het dichtst bij het aardoppervlak?"
        },
        options: [
          { en: "Troposphere", es: "Troposfera", de: "Troposphäre", nl: "Troposfeer" },
          { en: "Stratosphere", es: "Estratosfera", de: "Stratosphäre", nl: "Stratosfeer" },
          { en: "Mesosphere", es: "Mesosfera", de: "Mesosphäre", nl: "Mesosfeer" },
          { en: "Thermosphere", es: "Termosfera", de: "Thermosphäre", nl: "Thermosfeer" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the term for precipitation that evaporates before reaching the ground?",
          es: "¿Cuál es el término para la precipitación que se evapora antes de llegar al suelo?",
          de: "Wie nennt man Niederschlag, der verdunstet, bevor er den Boden erreicht?",
          nl: "Wat is de term voor neerslag die verdampt voordat ze de grond bereikt?"
        },
        options: [
          { en: "Virga", es: "Virga", de: "Virga", nl: "Virga" },
          { en: "Drizzle", es: "Llovizna", de: "Nieselregen", nl: "Motregen" },
          { en: "Mist", es: "Neblina", de: "Nebel", nl: "Mist" },
          { en: "Fog", es: "Niebla", de: "Nebel", nl: "Mist" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which ocean phenomenon affects weather patterns across the Pacific?",
          es: "¿Qué fenómeno oceánico afecta los patrones climáticos a través del Pacífico?",
          de: "Welches Ozeanphänomen beeinflusst Wettermuster über den Pazifik?",
          nl: "Welk oceaanverschijnsel beïnvloedt weerpatronen over de Grote Oceaan?"
        },
        options: [
          { en: "El Niño-Southern Oscillation", es: "Oscilación del Sur El Niño", de: "El Niño-Südliche Oszillation", nl: "El Niño-Southern Oscillation" },
          { en: "North Atlantic Oscillation", es: "Oscilación del Atlántico Norte", de: "Nordatlantische Oszillation", nl: "Noord-Atlantische Oscillatie" },
          { en: "Arctic Oscillation", es: "Oscilación Ártica", de: "Arktische Oszillation", nl: "Arctische Oscillatie" },
          { en: "Indian Ocean Dipole", es: "Dipolo del Océano Índico", de: "Indischer Ozean Dipol", nl: "Indische Oceaan Dipool" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What is the coldest recorded temperature on Earth?",
          es: "¿Cuál es la temperatura más fría registrada en la Tierra?",
          de: "Was ist die kälteste auf der Erde gemessene Temperatur?",
          nl: "Wat is de koudste geregistreerde temperatuur op aarde?"
        },
        options: [
          { en: "-89.2°C (-128.6°F)", es: "-89.2°C (-128.6°F)", de: "-89,2°C (-128,6°F)", nl: "-89,2°C (-128,6°F)" },
          { en: "-75°C (-103°F)", es: "-75°C (-103°F)", de: "-75°C (-103°F)", nl: "-75°C (-103°F)" },
          { en: "-95°C (-139°F)", es: "-95°C (-139°F)", de: "-95°C (-139°F)", nl: "-95°C (-139°F)" },
          { en: "-82°C (-116°F)", es: "-82°C (-116°F)", de: "-82°C (-116°F)", nl: "-82°C (-116°F)" }
        ],
        correct: 0
      },
      {
        question: {
          en: "Which type of weather front typically brings thunderstorms?",
          es: "¿Qué tipo de frente meteorológico típicamente trae tormentas?",
          de: "Welche Art von Wetterfront bringt typischerweise Gewitter?",
          nl: "Welk type weerfront brengt typisch onweersbuien?"
        },
        options: [
          { en: "Cold front", es: "Frente frío", de: "Kaltfront", nl: "Koufront" },
          { en: "Warm front", es: "Frente cálido", de: "Warmfront", nl: "Warmtefront" },
          { en: "Occluded front", es: "Frente ocluido", de: "Okklusionsfront", nl: "Occlusie front" },
          { en: "Stationary front", es: "Frente estacionario", de: "Stationäre Front", nl: "Stationair front" }
        ],
        correct: 0,
        explanation: {
          en: "Cold fronts typically bring thunderstorms because they force warm, moist air to rise rapidly, creating unstable atmospheric conditions that lead to cumulonimbus clouds and severe weather.",
          es: "Los frentes fríos típicamente traen tormentas porque fuerzan al aire cálido y húmedo a subir rápidamente, creando condiciones atmosféricas inestables que llevan a nubes cumulonimbos y clima severo.",
          de: "Kaltfronten bringen typischerweise Gewitter, weil sie warme, feuchte Luft schnell zum Aufsteigen zwingen und instabile atmosphärische Bedingungen schaffen, die zu Cumulonimbus-Wolken und schwerem Wetter führen.",
          nl: "Koufronten brengen typisch onweersbuien omdat ze warme, vochtige lucht dwingen snel op te stijgen, wat instabiele atmosferische omstandigheden creëert die leiden tot cumulonimbus wolken en zwaar weer."
        }
      },
      {
        question: {
          en: "What is the process by which water vapor turns directly into ice crystals?",
          es: "¿Cuál es el proceso por el cual el vapor de agua se convierte directamente en cristales de hielo?",
          de: "Wie heißt der Prozess, bei dem Wasserdampf direkt zu Eiskristallen wird?",
          nl: "Wat is het proces waarbij waterdamp direct verandert in ijskristallen?"
        },
        options: [
          { en: "Deposition", es: "Deposición", de: "Resublimation", nl: "Depositie" },
          { en: "Condensation", es: "Condensación", de: "Kondensation", nl: "Condensatie" },
          { en: "Sublimation", es: "Sublimación", de: "Sublimation", nl: "Sublimatie" },
          { en: "Evaporation", es: "Evaporación", de: "Verdunstung", nl: "Verdamping" }
        ],
        correct: 0,
        explanation: {
          en: "Deposition is the phase transition where water vapor changes directly into ice crystals without first becoming liquid water, commonly observed in frost formation and snowflake creation.",
          es: "La deposición es la transición de fase donde el vapor de agua cambia directamente a cristales de hielo sin convertirse primero en agua líquida, comúnmente observada en la formación de escarcha y creación de copos de nieve.",
          de: "Resublimation ist der Phasenübergang, bei dem Wasserdampf direkt zu Eiskristallen wird, ohne zuerst flüssiges Wasser zu werden, häufig bei der Frostbildung und Schneeflocken-Entstehung zu beobachten.",
          nl: "Depositie is de faseovergang waarbij waterdamp direct verandert in ijskristallen zonder eerst vloeibaar water te worden, vaak waargenomen bij rijpvorming en sneeuwvlok creatie."
        }
      },
      {
        question: {
          en: "Which scale is used to measure tornado intensity?",
          es: "¿Qué escala se usa para medir la intensidad de los tornados?",
          de: "Welche Skala wird zur Messung der Tornado-Intensität verwendet?",
          nl: "Welke schaal wordt gebruikt om tornado-intensiteit te meten?"
        },
        options: [
          { en: "Enhanced Fujita Scale", es: "Escala Fujita Mejorada", de: "Erweiterte Fujita-Skala", nl: "Enhanced Fujita Scale" },
          { en: "Saffir-Simpson Scale", es: "Escala Saffir-Simpson", de: "Saffir-Simpson-Skala", nl: "Saffir-Simpson Schaal" },
          { en: "Richter Scale", es: "Escala de Richter", de: "Richter-Skala", nl: "Richter Schaal" },
          { en: "Beaufort Scale", es: "Escala de Beaufort", de: "Beaufort-Skala", nl: "Beaufort Schaal" }
        ],
        correct: 0,
        explanation: {
          en: "The Enhanced Fujita Scale (EF Scale) is used to measure tornado intensity based on damage caused, ranging from EF0 (light damage) to EF5 (incredible destruction).",
          es: "La Escala Fujita Mejorada (Escala EF) se usa para medir la intensidad de tornados basada en el daño causado, desde EF0 (daño leve) hasta EF5 (destrucción increíble).",
          de: "Die Erweiterte Fujita-Skala (EF-Skala) wird zur Messung der Tornado-Intensität basierend auf verursachten Schäden verwendet, von EF0 (leichte Schäden) bis EF5 (unglaubliche Zerstörung).",
          nl: "De Enhanced Fujita Scale (EF Scale) wordt gebruikt om tornado-intensiteit te meten gebaseerd op veroorzaakte schade, van EF0 (lichte schade) tot EF5 (ongelooflijke vernietiging)."
        }
      },
      {
        question: {
          en: "What causes the Aurora Borealis (Northern Lights)?",
          es: "¿Qué causa la Aurora Boreal?",
          de: "Was verursacht das Nordlicht (Aurora Borealis)?",
          nl: "Wat veroorzaakt het Noorderlicht (Aurora Borealis)?"
        },
        options: [
          { en: "Solar particles interacting with Earth's magnetosphere", es: "Partículas solares interactuando con la magnetósfera terrestre", de: "Sonnenteilchen, die mit der Magnetosphäre der Erde interagieren", nl: "Zondeeltjes die interacteren met de magnetosfeer van de aarde" },
          { en: "Reflection of sunlight by ice crystals", es: "Reflexión de la luz solar por cristales de hielo", de: "Reflexion des Sonnenlichts durch Eiskristalle", nl: "Reflectie van zonlicht door ijskristallen" },
          { en: "Lightning in the upper atmosphere", es: "Rayos en la atmósfera superior", de: "Blitze in der oberen Atmosphäre", nl: "Bliksem in de bovenste atmosfeer" },
          { en: "Volcanic ash particles", es: "Partículas de ceniza volcánica", de: "Vulkanische Aschepartikel", nl: "Vulkanische asdeeltjes" }
        ],
        correct: 0,
        explanation: {
          en: "The Aurora Borealis is caused by charged particles from the solar wind interacting with Earth's magnetic field and atmosphere, creating beautiful light displays in the polar regions.",
          es: "La Aurora Boreal es causada por partículas cargadas del viento solar que interactúan con el campo magnético y la atmósfera de la Tierra, creando hermosos espectáculos de luz en las regiones polares.",
          de: "Das Nordlicht wird durch geladene Teilchen des Sonnenwinds verursacht, die mit dem Magnetfeld und der Atmosphäre der Erde interagieren und wunderschöne Lichterscheinungen in den Polarregionen erzeugen.",
          nl: "Het Noorderlicht wordt veroorzaakt door geladen deeltjes van de zonnewind die interacteren met het magnetische veld en de atmosfeer van de aarde, wat prachtige lichtvertoningen in de poolgebieden creëert."
        }
      },
      {
        question: {
          en: "What is the term for a large rotating storm system with low pressure at its center?",
          es: "¿Cuál es el término para un gran sistema de tormenta rotativo con baja presión en su centro?",
          de: "Wie nennt man ein großes rotierendes Sturmsystem mit niedrigem Druck in seinem Zentrum?",
          nl: "Wat is de term voor een groot roterend stormsysteem met lage druk in het centrum?"
        },
        options: [
          { en: "Cyclone", es: "Ciclón", de: "Zyklon", nl: "Cycloon" },
          { en: "Anticyclone", es: "Anticiclón", de: "Antizyklon", nl: "Anticycloon" },
          { en: "Downdraft", es: "Corriente descendente", de: "Fallwind", nl: "Neerwaartse luchtstroom" },
          { en: "Ridge", es: "Cresta", de: "Hochdruckrücken", nl: "Hogedrukrug" }
        ],
        correct: 0,
        explanation: {
          en: "A cyclone is a large-scale rotating storm system characterized by low atmospheric pressure at its center, with air circulation moving counterclockwise in the Northern Hemisphere.",
          es: "Un ciclón es un sistema de tormenta rotativo a gran escala caracterizado por baja presión atmosférica en su centro, con circulación de aire moviéndose en sentido contrario a las manecillas del reloj en el Hemisferio Norte.",
          de: "Ein Zyklon ist ein großskaliges rotierendes Sturmsystem, das durch niedrigen Luftdruck in seinem Zentrum gekennzeichnet ist, mit Luftzirkulation gegen den Uhrzeigersinn auf der Nordhalbkugel.",
          nl: "Een cycloon is een grootschalig roterend stormsysteem gekenmerkt door lage atmosferische druk in het centrum, met luchtcirculatie die tegen de klok in beweegt op het noordelijk halfrond."
        }
      },
      {
        question: {
          en: "What percentage of Earth's surface is covered by water?",
          es: "¿Qué porcentaje de la superficie terrestre está cubierto por agua?",
          de: "Welcher Prozentsatz der Erdoberfläche ist von Wasser bedeckt?",
          nl: "Welk percentage van het aardoppervlak is bedekt met water?"
        },
        options: [
          { en: "71%", es: "71%", de: "71%", nl: "71%" },
          { en: "65%", es: "65%", de: "65%", nl: "65%" },
          { en: "78%", es: "78%", de: "78%", nl: "78%" },
          { en: "83%", es: "83%", de: "83%", nl: "83%" }
        ],
        correct: 0,
        explanation: {
          en: "Approximately 71% of Earth's surface is covered by water, with oceans containing about 97% of all water on Earth. This vast water coverage plays a crucial role in regulating global climate.",
          es: "Aproximadamente el 71% de la superficie terrestre está cubierta por agua, con los océanos conteniendo alrededor del 97% de toda el agua en la Tierra. Esta vasta cobertura de agua juega un papel crucial en la regulación del clima global.",
          de: "Etwa 71% der Erdoberfläche sind von Wasser bedeckt, wobei die Ozeane etwa 97% allen Wassers auf der Erde enthalten. Diese riesige Wasserbedeckung spielt eine entscheidende Rolle bei der Regulierung des globalen Klimas.",
          nl: "Ongeveer 71% van het aardoppervlak is bedekt met water, waarbij oceanen ongeveer 97% van al het water op aarde bevatten. Deze uitgestrekte waterbedekking speelt een cruciale rol bij het reguleren van het mondiale klimaat."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('warm-up/world-geography', level9);
  }
})();