// Oceanography - Level 6: Ocean Circulation and Water Masses
(function() {
  const level6 = {
  name: {
    en: "Ocean Circulation and Water Masses",
    es: "Circulación Oceánica y Masas de Agua",
    de: "Ozeanzirkulation und Wassermassen",
    nl: "Oceaancirculatie en Watermassa's"
  },
  questions: [
    {
      question: {
        en: "What is the primary driving force behind surface ocean currents?",
        es: "¿Cuál es la fuerza impulsora principal detrás de las corrientes oceánicas superficiales?",
        de: "Was ist die primäre Antriebskraft hinter Oberflächenmeeresströmungen?",
        nl: "Wat is de primaire drijfkracht achter oppervlakte oceaanstromingen?"
      },
      options: [
        { en: "Tidal forces", es: "Fuerzas de marea", de: "Gezeitenkräfte", nl: "Getijdenkrachten" },
        { en: "Wind patterns", es: "Patrones de viento", de: "Windmuster", nl: "Windpatronen" },
        { en: "Temperature differences", es: "Diferencias de temperatura", de: "Temperaturunterschiede", nl: "Temperatuurverschillen" },
        { en: "Salinity gradients", es: "Gradientes de salinidad", de: "Salzgradienten", nl: "Zoutgehalte gradiënten" }
      ],
      correct: 1,
      explanation: {
        en: "Wind patterns are the primary driving force behind surface ocean currents. The friction between moving air masses and the ocean surface transfers energy to the water, creating surface currents.",
        es: "Los patrones de viento son la fuerza impulsora principal detrás de las corrientes oceánicas superficiales. La fricción entre las masas de aire en movimiento y la superficie oceánica transfiere energía al agua, creando corrientes superficiales.",
        de: "Windmuster sind die primäre Antriebskraft hinter Oberflächenmeeresströmungen. Die Reibung zwischen bewegten Luftmassen und der Ozeanoberfläche überträgt Energie auf das Wasser und erzeugt Oberflächenströmungen.",
        nl: "Windpatronen zijn de primaire drijfkracht achter oppervlakte oceaanstromingen. De wrijving tussen bewegende luchtmassa's en het oceaanoppervlak draagt energie over aan het water, waardoor oppervlaktestromingen ontstaan."
      }
    },
    {
      question: {
        en: "What is thermohaline circulation?",
        es: "¿Qué es la circulación termohalina?",
        de: "Was ist thermohaline Zirkulation?",
        nl: "Wat is thermohaliene circulatie?"
      },
      options: [
        { en: "Ocean currents driven by temperature and salinity differences", es: "Corrientes oceánicas impulsadas por diferencias de temperatura y salinidad", de: "Meeresströmungen angetrieben durch Temperatur- und Salzgehaltunterschiede", nl: "Oceaanstromingen gedreven door temperatuur en zoutgehalte verschillen" },
        { en: "Currents caused by tidal forces", es: "Corrientes causadas por fuerzas de marea", de: "Strömungen verursacht durch Gezeitenkräfte", nl: "Stromingen veroorzaakt door getijdenkrachten" },
        { en: "Surface currents driven by wind", es: "Corrientes superficiales impulsadas por el viento", de: "Oberflächenströmungen angetrieben durch Wind", nl: "Oppervlaktestromingen gedreven door wind" },
        { en: "Currents around underwater mountains", es: "Corrientes alrededor de montañas submarinas", de: "Strömungen um Unterwasserberge", nl: "Stromingen rond onderwater bergen" }
      ],
      correct: 0,
      explanation: {
        en: "Thermohaline circulation is the global ocean circulation driven by density differences caused by variations in temperature (thermo) and salinity (haline). Cold, salty water is denser and sinks, driving deep ocean circulation.",
        es: "La circulación termohalina es la circulación oceánica global impulsada por diferencias de densidad causadas por variaciones en temperatura (termo) y salinidad (halina). El agua fría y salada es más densa y se hunde, impulsando la circulación oceánica profunda.",
        de: "Thermohaline Zirkulation ist die globale Ozeanzirkulation, die durch Dichteunterschiede angetrieben wird, die durch Variationen in Temperatur (thermo) und Salzgehalt (halin) verursacht werden. Kaltes, salziges Wasser ist dichter und sinkt ab, wodurch die tiefe Ozeanzirkulation angetrieben wird.",
        nl: "Thermohaliene circulatie is de mondiale oceaancirculatie gedreven door dichtheidsverschillen veroorzaakt door variaties in temperatuur (thermo) en zoutgehalte (halien). Koud, zout water is dichter en zinkt, waardoor diepe oceaancirculatie wordt aangedreven."
      }
    },
    {
      question: {
        en: "What is the Coriolis effect's role in ocean currents?",
        es: "¿Cuál es el papel del efecto Coriolis en las corrientes oceánicas?",
        de: "Welche Rolle spielt der Coriolis-Effekt bei Meeresströmungen?",
        nl: "Wat is de rol van het Coriolis effect bij oceaanstromingen?"
      },
      options: [
        { en: "It makes currents flow faster", es: "Hace que las corrientes fluyan más rápido", de: "Es lässt Strömungen schneller fließen", nl: "Het laat stromingen sneller stromen" },
        { en: "It deflects moving water to the right in the Northern Hemisphere", es: "Desvía el agua en movimiento hacia la derecha en el Hemisferio Norte", de: "Es lenkt bewegtes Wasser nach rechts in der Nordhalbkugel ab", nl: "Het buigt bewegend water naar rechts af op het noordelijk halfrond" },
        { en: "It stops ocean currents completely", es: "Detiene las corrientes oceánicas completamente", de: "Es stoppt Meeresströmungen vollständig", nl: "Het stopt oceaanstromingen volledig" },
        { en: "It only affects surface currents", es: "Solo afecta las corrientes superficiales", de: "Es beeinflusst nur Oberflächenströmungen", nl: "Het beïnvloedt alleen oppervlaktestromingen" }
      ],
      correct: 1,
      explanation: {
        en: "The Coriolis effect, caused by Earth's rotation, deflects moving water to the right in the Northern Hemisphere and to the left in the Southern Hemisphere. This deflection shapes the circular patterns of ocean currents called gyres.",
        es: "El efecto Coriolis, causado por la rotación de la Tierra, desvía el agua en movimiento hacia la derecha en el Hemisferio Norte y hacia la izquierda en el Hemisferio Sur. Esta desviación forma los patrones circulares de corrientes oceánicas llamados giros.",
        de: "Der Coriolis-Effekt, verursacht durch die Erdrotation, lenkt bewegtes Wasser nach rechts in der Nordhalbkugel und nach links in der Südhalbkugel ab. Diese Ablenkung formt die kreisförmigen Muster von Meeresströmungen, die Wirbel genannt werden.",
        nl: "Het Coriolis effect, veroorzaakt door de aardrotatie, buigt bewegend water naar rechts af op het noordelijk halfrond en naar links op het zuidelijk halfrond. Deze afbuiging vormt de circulaire patronen van oceaanstromingen genaamd gyres."
      }
    },
    {
      question: {
        en: "What is upwelling in oceanography?",
        es: "¿Qué es el afloramiento en oceanografía?",
        de: "Was ist Auftrieb in der Ozeanographie?",
        nl: "Wat is opwelling in de oceanografie?"
      },
      options: [
        { en: "The rise of warm surface water", es: "El ascenso de agua superficial cálida", de: "Der Aufstieg warmen Oberflächenwassers", nl: "De opkomst van warm oppervlaktewater" },
        { en: "The vertical movement of cold, nutrient-rich deep water to the surface", es: "El movimiento vertical de agua profunda fría y rica en nutrientes hacia la superficie", de: "Die vertikale Bewegung kalten, nährstoffreichen Tiefenwassers zur Oberfläche", nl: "De verticale beweging van koud, nutriënt-rijk diep water naar het oppervlak" },
        { en: "The formation of ocean waves", es: "La formación de olas oceánicas", de: "Die Bildung von Ozeanwellen", nl: "De vorming van oceaangolven" },
        { en: "The mixing of different water masses", es: "La mezcla de diferentes masas de agua", de: "Die Vermischung verschiedener Wassermassen", nl: "De menging van verschillende watermassa's" }
      ],
      correct: 1,
      explanation: {
        en: "Upwelling is the vertical movement of cold, nutrient-rich deep water to the surface. This process brings essential nutrients to surface waters, supporting highly productive marine ecosystems.",
        es: "El afloramiento es el movimiento vertical de agua profunda fría y rica en nutrientes hacia la superficie. Este proceso trae nutrientes esenciales a las aguas superficiales, apoyando ecosistemas marinos altamente productivos.",
        de: "Auftrieb ist die vertikale Bewegung kalten, nährstoffreichen Tiefenwassers zur Oberfläche. Dieser Prozess bringt wesentliche Nährstoffe in Oberflächengewässer und unterstützt hochproduktive marine Ökosysteme.",
        nl: "Opwelling is de verticale beweging van koud, nutriënt-rijk diep water naar het oppervlak. Dit proces brengt essentiële nutriënten naar oppervlaktewater, wat zeer productieve mariene ecosystemen ondersteunt."
      }
    },
    {
      question: {
        en: "What characterizes Antarctic Bottom Water (AABW)?",
        es: "¿Qué caracteriza al Agua de Fondo Antártica (AFA)?",
        de: "Was charakterisiert Antarktisches Bodenwasser (AABW)?",
        nl: "Wat kenmerkt Antarctisch Bodemwater (AABW)?"
      },
      options: [
        { en: "Warm and low-salinity water", es: "Agua cálida y de baja salinidad", de: "Warmes und salzarmes Wasser", nl: "Warm en laag-zout water" },
        { en: "Cold, dense, and oxygen-rich water", es: "Agua fría, densa y rica en oxígeno", de: "Kaltes, dichtes und sauerstoffreiches Wasser", nl: "Koud, dicht en zuurstofrijk water" },
        { en: "Shallow surface water", es: "Agua superficial poco profunda", de: "Flaches Oberflächenwasser", nl: "Ondiep oppervlaktewater" },
        { en: "High-temperature water near the equator", es: "Agua de alta temperatura cerca del ecuador", de: "Hochtemperatur-Wasser in der Nähe des Äquators", nl: "Hoge-temperatuur water nabij de evenaar" }
      ],
      correct: 1,
      explanation: {
        en: "Antarctic Bottom Water (AABW) is characterized by being very cold (near freezing), dense, and oxygen-rich. It forms around Antarctica and spreads northward along the ocean floor, playing a crucial role in global deep ocean circulation.",
        es: "El Agua de Fondo Antártica (AFA) se caracteriza por ser muy fría (cerca del punto de congelación), densa y rica en oxígeno. Se forma alrededor de la Antártida y se extiende hacia el norte a lo largo del fondo oceánico, desempeñando un papel crucial en la circulación oceánica profunda global.",
        de: "Antarktisches Bodenwasser (AABW) ist charakterisiert durch sehr kalt (nahe dem Gefrierpunkt), dicht und sauerstoffreich. Es bildet sich um die Antarktis und breitet sich nordwärts entlang des Ozeanbodens aus, wobei es eine entscheidende Rolle in der globalen tiefen Ozeanzirkulation spielt.",
        nl: "Antarctisch Bodemwater (AABW) wordt gekenmerkt door zeer koud (nabij het vriespunt), dicht en zuurstofrijk te zijn. Het vormt zich rond Antarctica en verspreidt zich noordwaarts langs de oceaanbodem, waarbij het een cruciale rol speelt in de mondiale diepe oceaancirculatie."
      }
    },
    {
      question: {
        en: "What is the global conveyor belt in ocean circulation?",
        es: "¿Qué es la cinta transportadora global en la circulación oceánica?",
        de: "Was ist das globale Förderband in der Ozeanzirkulation?",
        nl: "Wat is de mondiale transportband in oceaancirculatie?"
      },
      options: [
        { en: "A system of surface currents only", es: "Un sistema solo de corrientes superficiales", de: "Ein System nur von Oberflächenströmungen", nl: "Een systeem van alleen oppervlaktestromingen" },
        { en: "The global thermohaline circulation connecting all ocean basins", es: "La circulación termohalina global que conecta todas las cuencas oceánicas", de: "Die globale thermohaline Zirkulation, die alle Ozeanbecken verbindet", nl: "De mondiale thermohaliene circulatie die alle oceaanbekkens verbindt" },
        { en: "Tidal movements around continents", es: "Movimientos de marea alrededor de continentes", de: "Gezeitenbewegungen um Kontinente", nl: "Getijdenbewegingen rond continenten" },
        { en: "Wind-driven currents in the Pacific", es: "Corrientes impulsadas por viento en el Pacífico", de: "Windgetriebene Strömungen im Pazifik", nl: "Door wind gedreven stromingen in de Stille Oceaan" }
      ],
      correct: 1,
      explanation: {
        en: "The global conveyor belt is the global thermohaline circulation system that connects all ocean basins through deep and surface water movements. It transports heat, salt, nutrients, and dissolved gases around the planet over timescales of hundreds to thousands of years.",
        es: "La cinta transportadora global es el sistema de circulación termohalina global que conecta todas las cuencas oceánicas a través de movimientos de agua profunda y superficial. Transporta calor, sal, nutrientes y gases disueltos alrededor del planeta en escalas de tiempo de cientos a miles de años.",
        de: "Das globale Förderband ist das globale thermohaline Zirkulationssystem, das alle Ozeanbecken durch tiefe und oberflächliche Wasserbewegungen verbindet. Es transportiert Wärme, Salz, Nährstoffe und gelöste Gase um den Planeten über Zeiträume von Hunderten bis Tausenden von Jahren.",
        nl: "De mondiale transportband is het wereldwijde thermohaliene circulatiesysteem dat alle oceaanbekkens verbindt door diepe en oppervlakte waterbewegingen. Het transporteert warmte, zout, nutriënten en opgeloste gassen rond de planeet over tijdschalen van honderden tot duizenden jaren."
      }
    },
    {
      question: {
        en: "What is a gyre in ocean circulation?",
        es: "¿Qué es un giro en la circulación oceánica?",
        de: "Was ist ein Wirbel in der Ozeanzirkulation?",
        nl: "Wat is een gyre in oceaancirculatie?"
      },
      options: [
        { en: "A large-scale circular current system", es: "Un sistema de corrientes circulares a gran escala", de: "Ein großskaliges kreisförmiges Strömungssystem", nl: "Een grootschalig circulair stroomsysteem" },
        { en: "A vertical water column", es: "Una columna de agua vertical", de: "Eine vertikale Wassersäule", nl: "Een verticale waterkolom" },
        { en: "A type of ocean wave", es: "Un tipo de ola oceánica", de: "Eine Art von Ozeanwelle", nl: "Een type oceaangolf" },
        { en: "An underwater mountain", es: "Una montaña submarina", de: "Ein Unterwasserberg", nl: "Een onderwater berg" }
      ],
      correct: 0,
      explanation: {
        en: "A gyre is a large-scale circular current system in ocean basins, driven by wind patterns and modified by the Coriolis effect. Major gyres include the North Atlantic, South Atlantic, North Pacific, South Pacific, and Indian Ocean gyres.",
        es: "Un giro es un sistema de corrientes circulares a gran escala en las cuencas oceánicas, impulsado por patrones de viento y modificado por el efecto Coriolis. Los giros principales incluyen los giros del Atlántico Norte, Atlántico Sur, Pacífico Norte, Pacífico Sur e Índico.",
        de: "Ein Wirbel ist ein großskaliges kreisförmiges Strömungssystem in Ozeanbecken, angetrieben durch Windmuster und modifiziert durch den Coriolis-Effekt. Hauptwirbel umfassen die Wirbel des Nordatlantiks, Südatlantiks, Nordpazifiks, Südpazifiks und Indischen Ozeans.",
        nl: "Een gyre is een grootschalig circulair stroomsysteem in oceaanbekkens, gedreven door windpatronen en gewijzigd door het Coriolis effect. Belangrijke gyres omvatten de Noord-Atlantische, Zuid-Atlantische, Noord-Pacifische, Zuid-Pacifische en Indische Oceaan gyres."
      }
    },
    {
      question: {
        en: "What causes seasonal variations in ocean currents?",
        es: "¿Qué causa las variaciones estacionales en las corrientes oceánicas?",
        de: "Was verursacht saisonale Schwankungen in Meeresströmungen?",
        nl: "Wat veroorzaakt seizoensgebonden variaties in oceaanstromingen?"
      },
      options: [
        { en: "Changes in ocean depth", es: "Cambios en la profundidad oceánica", de: "Änderungen in der Ozeantiefe", nl: "Veranderingen in oceaandiepte" },
        { en: "Seasonal changes in wind patterns and solar heating", es: "Cambios estacionales en patrones de viento y calentamiento solar", de: "Saisonale Änderungen in Windmustern und Sonnenerwärmung", nl: "Seizoensgebonden veranderingen in windpatronen en zonne-opwarming" },
        { en: "Volcanic activity on the sea floor", es: "Actividad volcánica en el fondo marino", de: "Vulkanische Aktivität am Meeresboden", nl: "Vulkanische activiteit op de zeebodem" },
        { en: "Changes in Earth's magnetic field", es: "Cambios en el campo magnético de la Tierra", de: "Änderungen im Magnetfeld der Erde", nl: "Veranderingen in het magnetische veld van de aarde" }
      ],
      correct: 1,
      explanation: {
        en: "Seasonal variations in ocean currents are primarily caused by seasonal changes in wind patterns (such as monsoons) and variations in solar heating that affect temperature gradients and atmospheric circulation patterns.",
        es: "Las variaciones estacionales en las corrientes oceánicas son causadas principalmente por cambios estacionales en los patrones de viento (como los monzones) y variaciones en el calentamiento solar que afectan los gradientes de temperatura y los patrones de circulación atmosférica.",
        de: "Saisonale Schwankungen in Meeresströmungen werden hauptsächlich durch saisonale Änderungen in Windmustern (wie Monsune) und Variationen in der Sonnenerwärmung verursacht, die Temperaturgradienten und atmosphärische Zirkulationsmuster beeinflussen.",
        nl: "Seizoensgebonden variaties in oceaanstromingen worden voornamelijk veroorzaakt door seizoensgebonden veranderingen in windpatronen (zoals moessons) en variaties in zonne-opwarming die temperatuurgradiënten en atmosferische circulatiepatronen beïnvloeden."
      }
    },
    {
      question: {
        en: "What is the role of the Antarctic Circumpolar Current?",
        es: "¿Cuál es el papel de la Corriente Circumpolar Antártica?",
        de: "Welche Rolle spielt der Antarktische Zirkumpolarstrom?",
        nl: "Wat is de rol van de Antarctische Circumpolaire Stroom?"
      },
      options: [
        { en: "It only affects local Antarctic waters", es: "Solo afecta las aguas antárticas locales", de: "Es beeinflusst nur lokale antarktische Gewässer", nl: "Het beïnvloedt alleen lokale Antarctische wateren" },
        { en: "It connects the Atlantic, Pacific, and Indian Oceans and isolates Antarctica", es: "Conecta los océanos Atlántico, Pacífico e Índico y aísla la Antártida", de: "Es verbindet den Atlantik, Pazifik und Indischen Ozean und isoliert die Antarktis", nl: "Het verbindt de Atlantische, Stille en Indische Oceaan en isoleert Antarctica" },
        { en: "It prevents ice formation around Antarctica", es: "Previene la formación de hielo alrededor de la Antártida", de: "Es verhindert Eisbildung um die Antarktis", nl: "Het voorkomt ijsvorming rond Antarctica" },
        { en: "It transports warm water to Antarctica", es: "Transporta agua cálida a la Antártida", de: "Es transportiert warmes Wasser zur Antarktis", nl: "Het transporteert warm water naar Antarctica" }
      ],
      correct: 1,
      explanation: {
        en: "The Antarctic Circumpolar Current is the world's strongest ocean current that flows eastward around Antarctica, connecting the Atlantic, Pacific, and Indian Oceans. It plays a crucial role in global climate by thermally isolating Antarctica and facilitating global water mass exchange.",
        es: "La Corriente Circumpolar Antártica es la corriente oceánica más fuerte del mundo que fluye hacia el este alrededor de la Antártida, conectando los océanos Atlántico, Pacífico e Índico. Desempeña un papel crucial en el clima global al aislar térmicamente la Antártida y facilitar el intercambio global de masas de agua.",
        de: "Der Antarktische Zirkumpolarstrom ist die stärkste Meeresströmung der Welt, die ostwärts um die Antarktis fließt und den Atlantik, Pazifik und Indischen Ozean verbindet. Er spielt eine entscheidende Rolle im globalen Klima durch thermische Isolierung der Antarktis und Erleichterung des globalen Wassermassenaustausches.",
        nl: "De Antarctische Circumpolaire Stroom is 's werelds sterkste oceaanstroom die oostwaarts rond Antarctica stroomt, en de Atlantische, Stille en Indische Oceaan verbindt. Het speelt een cruciale rol in het mondiale klimaat door Antarctica thermisch te isoleren en mondiale watermassa-uitwisseling te faciliteren."
      }
    },
    {
      question: {
        en: "What is Ekman transport in oceanography?",
        es: "¿Qué es el transporte de Ekman en oceanografía?",
        de: "Was ist Ekman-Transport in der Ozeanographie?",
        nl: "Wat is Ekman transport in de oceanografie?"
      },
      options: [
        { en: "The direct movement of water in the same direction as wind", es: "El movimiento directo del agua en la misma dirección que el viento", de: "Die direkte Bewegung von Wasser in die gleiche Richtung wie der Wind", nl: "De directe beweging van water in dezelfde richting als de wind" },
        { en: "The net movement of water 90° to the right of wind direction in the Northern Hemisphere", es: "El movimiento neto del agua 90° a la derecha de la dirección del viento en el Hemisferio Norte", de: "Die Nettobewegung von Wasser 90° rechts von der Windrichtung in der Nordhalbkugel", nl: "De netto beweging van water 90° naar rechts van de windrichting op het noordelijk halfrond" },
        { en: "Water movement caused by tides", es: "Movimiento del agua causado por las mareas", de: "Wasserbewegung verursacht durch Gezeiten", nl: "Waterbeweging veroorzaakt door getijden" },
        { en: "Deep water circulation patterns", es: "Patrones de circulación de agua profunda", de: "Tiefwasser-Zirkulationsmuster", nl: "Diep water circulatiepatronen" }
      ],
      correct: 1,
      explanation: {
        en: "Ekman transport is the net movement of water 90° to the right of the wind direction in the Northern Hemisphere (and to the left in the Southern Hemisphere) due to the Coriolis effect. This phenomenon is crucial for coastal upwelling and downwelling processes.",
        es: "El transporte de Ekman es el movimiento neto del agua 90° a la derecha de la dirección del viento en el Hemisferio Norte (y a la izquierda en el Hemisferio Sur) debido al efecto Coriolis. Este fenómeno es crucial para los procesos de afloramiento y hundimiento costeros.",
        de: "Ekman-Transport ist die Nettobewegung von Wasser 90° rechts von der Windrichtung in der Nordhalbkugel (und links in der Südhalbkugel) aufgrund des Coriolis-Effekts. Dieses Phänomen ist entscheidend für Küstenauftrieb und -abtrieb-Prozesse.",
        nl: "Ekman transport is de netto beweging van water 90° naar rechts van de windrichting op het noordelijk halfrond (en naar links op het zuidelijk halfrond) door het Coriolis effect. Dit fenomeen is cruciaal voor kustale opwelling en neerwaartse processen."
      }
    },
    {
      question: {
        en: "What is the North Atlantic Deep Water (NADW) formation process?",
        es: "¿Cuál es el proceso de formación del Agua Profunda del Atlántico Norte (APAN)?",
        de: "Was ist der Bildungsprozess von Nordatlantischem Tiefenwasser (NADW)?",
        nl: "Wat is het vormingsproces van Noord-Atlantisch Diep Water (NADW)?"
      },
      options: [
        { en: "Cooling and sinking of surface water in the North Atlantic", es: "Enfriamiento y hundimiento de agua superficial en el Atlántico Norte", de: "Abkühlung und Absinken von Oberflächenwasser im Nordatlantik", nl: "Afkoeling en zinken van oppervlaktewater in de Noord-Atlantische Oceaan" },
        { en: "Evaporation in tropical regions", es: "Evaporación en regiones tropicales", de: "Verdunstung in tropischen Regionen", nl: "Verdamping in tropische gebieden" },
        { en: "River discharge into the Atlantic", es: "Descarga fluvial hacia el Atlántico", de: "Flusszufluss in den Atlantik", nl: "Rivier afvoer naar de Atlantische Oceaan" },
        { en: "Ice melting in the Arctic", es: "Derretimiento de hielo en el Ártico", de: "Eisschmelze in der Arktis", nl: "IJs smelten in de Arctis" }
      ],
      correct: 0,
      explanation: {
        en: "North Atlantic Deep Water (NADW) forms through the cooling and sinking of warm, salty surface water in the North Atlantic, particularly in the Greenland and Norwegian Seas. This dense water mass then spreads southward at depth.",
        es: "El Agua Profunda del Atlántico Norte (APAN) se forma a través del enfriamiento y hundimiento de agua superficial cálida y salada en el Atlántico Norte, particularmente en los mares de Groenlandia y Noruega. Esta masa de agua densa luego se extiende hacia el sur en profundidad.",
        de: "Nordatlantisches Tiefenwasser (NADW) bildet sich durch Abkühlung und Absinken von warmem, salzigem Oberflächenwasser im Nordatlantik, besonders in der Grönland- und Norwegischen See. Diese dichte Wassermasse breitet sich dann in der Tiefe nach Süden aus.",
        nl: "Noord-Atlantisch Diep Water (NADW) vormt zich door afkoeling en zinken van warm, zout oppervlaktewater in de Noord-Atlantische Oceaan, vooral in de Groenlandse en Noorse Zeeën. Deze dichte watermassa verspreidt zich dan zuidwaarts op diepte."
      }
    },
    {
      question: {
        en: "What is a water mass in oceanography?",
        es: "¿Qué es una masa de agua en oceanografía?",
        de: "Was ist eine Wassermasse in der Ozeanographie?",
        nl: "Wat is een watermassa in de oceanografie?"
      },
      options: [
        { en: "A body of water with distinct temperature and salinity characteristics", es: "Un cuerpo de agua con características distintivas de temperatura y salinidad", de: "Ein Wasserkörper mit charakteristischen Temperatur- und Salzgehalteigenschaften", nl: "Een waterlichaam met onderscheidende temperatuur en saliniteitskenmerken" },
        { en: "Any large volume of ocean water", es: "Cualquier gran volumen de agua oceánica", de: "Jedes große Volumen von Ozeanwasser", nl: "Elk groot volume oceaanwater" },
        { en: "Water in a specific geographic location", es: "Agua en una ubicación geográfica específica", de: "Wasser an einem bestimmten geografischen Ort", nl: "Water op een specifieke geografische locatie" },
        { en: "The total amount of water in an ocean basin", es: "La cantidad total de agua en una cuenca oceánica", de: "Die Gesamtmenge Wasser in einem Ozeanbecken", nl: "De totale hoeveelheid water in een oceaanbekken" }
      ],
      correct: 0,
      explanation: {
        en: "A water mass is a body of water with relatively uniform temperature and salinity characteristics that can be traced over large distances. These properties are acquired at the surface in specific formation regions and serve as fingerprints for tracking water movement.",
        es: "Una masa de agua es un cuerpo de agua con características relativamente uniformes de temperatura y salinidad que pueden rastrearse a grandes distancias. Estas propiedades se adquieren en la superficie en regiones específicas de formación y sirven como huellas dactilares para rastrear el movimiento del agua.",
        de: "Eine Wassermasse ist ein Wasserkörper mit relativ einheitlichen Temperatur- und Salzgehalteigenschaften, die über große Entfernungen verfolgt werden können. Diese Eigenschaften werden an der Oberfläche in bestimmten Bildungsregionen erworben und dienen als Fingerabdrücke zur Verfolgung von Wasserbewegungen.",
        nl: "Een watermassa is een waterlichaam met relatief uniforme temperatuur en saliniteitskenmerken die over grote afstanden kunnen worden gevolgd. Deze eigenschappen worden verworven aan het oppervlak in specifieke vormingsgebieden en dienen als vingerafdrukken voor het volgen van waterbeweging."
      }
    },
    {
      question: {
        en: "What drives equatorial upwelling?",
        es: "¿Qué impulsa el afloramiento ecuatorial?",
        de: "Was treibt äquatorialen Auftrieb an?",
        nl: "Wat drijft equatoriale opwelling aan?"
      },
      options: [
        { en: "Divergent Ekman transport caused by trade winds", es: "Transporte de Ekman divergente causado por vientos alisios", de: "Divergenter Ekman-Transport verursacht durch Passatwinde", nl: "Divergent Ekman transport veroorzaakt door passaatwinden" },
        { en: "High temperatures at the equator", es: "Altas temperaturas en el ecuador", de: "Hohe Temperaturen am Äquator", nl: "Hoge temperaturen op de evenaar" },
        { en: "Tidal forces", es: "Fuerzas de marea", de: "Gezeitenkräfte", nl: "Getijdenkrachten" },
        { en: "Seasonal monsoon patterns", es: "Patrones monzónicos estacionales", de: "Saisonale Monsunmuster", nl: "Seizoensgebonden moessonpatronen" }
      ],
      correct: 0,
      explanation: {
        en: "Equatorial upwelling is driven by divergent Ekman transport. The trade winds blow westward along the equator, but due to the Coriolis effect, water moves away from the equator on both sides, creating upwelling of deep, cold water to replace the divergent surface water.",
        es: "El afloramiento ecuatorial es impulsado por transporte de Ekman divergente. Los vientos alisios soplan hacia el oeste a lo largo del ecuador, pero debido al efecto Coriolis, el agua se aleja del ecuador en ambos lados, creando afloramiento de agua profunda y fría para reemplazar el agua superficial divergente.",
        de: "Äquatorialer Auftrieb wird durch divergenten Ekman-Transport angetrieben. Die Passatwinde wehen westwärts entlang des Äquators, aber aufgrund des Coriolis-Effekts bewegt sich Wasser vom Äquator weg auf beiden Seiten, wodurch Auftrieb von tiefem, kaltem Wasser entsteht, um das divergente Oberflächenwasser zu ersetzen.",
        nl: "Equatoriale opwelling wordt aangedreven door divergent Ekman transport. De passaatwinden waaien westwaarts langs de evenaar, maar door het Coriolis effect beweegt water weg van de evenaar aan beide kanten, waardoor opwelling van diep, koud water ontstaat om het divergente oppervlaktewater te vervangen."
      }
    },
    {
      question: {
        en: "What is the Meridional Overturning Circulation (MOC)?",
        es: "¿Qué es la Circulación de Volteo Meridional (CVM)?",
        de: "Was ist die Meridionale Umwälzzirkulation (MOC)?",
        nl: "Wat is de Meridionale Omkeringscirculatie (MOC)?"
      },
      options: [
        { en: "The large-scale overturning circulation in the vertical-meridional plane of ocean basins", es: "La circulación de volteo a gran escala en el plano vertical-meridional de las cuencas oceánicas", de: "Die großskalige Umwälzzirkulation in der vertikal-meridionalen Ebene von Ozeanbecken", nl: "De grootschalige omkeringscirculatie in het verticaal-meridionale vlak van oceaanbekkens" },
        { en: "Horizontal currents around ocean basins", es: "Corrientes horizontales alrededor de cuencas oceánicas", de: "Horizontale Strömungen um Ozeanbecken", nl: "Horizontale stromingen rond oceaanbekkens" },
        { en: "Surface currents driven by wind", es: "Corrientes superficiales impulsadas por el viento", de: "Oberflächenströmungen angetrieben durch Wind", nl: "Oppervlaktestromingen gedreven door wind" },
        { en: "Tidal oscillations in ocean levels", es: "Oscilaciones de marea en niveles oceánicos", de: "Gezeitenschwankungen in Ozeanpegeln", nl: "Getijdenoscillaties in oceaanniveaus" }
      ],
      correct: 0,
      explanation: {
        en: "The Meridional Overturning Circulation (MOC) refers to the large-scale overturning circulation in the vertical-meridional (north-south) plane of ocean basins. It includes both the wind-driven and thermohaline components and is crucial for global heat and carbon transport.",
        es: "La Circulación de Volteo Meridional (CVM) se refiere a la circulación de volteo a gran escala en el plano vertical-meridional (norte-sur) de las cuencas oceánicas. Incluye tanto los componentes impulsados por viento como termohalinos y es crucial para el transporte global de calor y carbono.",
        de: "Die Meridionale Umwälzzirkulation (MOC) bezieht sich auf die großskalige Umwälzzirkulation in der vertikal-meridionalen (Nord-Süd) Ebene von Ozeanbecken. Sie umfasst sowohl windgetriebene als auch thermohaline Komponenten und ist entscheidend für globalen Wärme- und Kohlenstofftransport.",
        nl: "De Meridionale Omkeringscirculatie (MOC) verwijst naar de grootschalige omkeringscirculatie in het verticaal-meridionale (noord-zuid) vlak van oceaanbekkens. Het omvat zowel de door wind gedreven als thermohaliene componenten en is cruciaal voor mondiale warmte- en koolstoftransport."
      }
    },
    {
      question: {
        en: "What characterizes Mediterranean Water in the North Atlantic?",
        es: "¿Qué caracteriza al Agua Mediterránea en el Atlántico Norte?",
        de: "Was charakterisiert Mittelmeerwasser im Nordatlantik?",
        nl: "Wat kenmerkt Mediterraan Water in de Noord-Atlantische Oceaan?"
      },
      options: [
        { en: "High salinity and intermediate temperature at mid-depths", es: "Alta salinidad y temperatura intermedia a profundidades medias", de: "Hoher Salzgehalt und mittlere Temperatur in mittleren Tiefen", nl: "Hoge saliniteit en tussenliggende temperatuur op middlere diepten" },
        { en: "Very cold and fresh water", es: "Agua muy fría y dulce", de: "Sehr kaltes und süßes Wasser", nl: "Zeer koud en zoet water" },
        { en: "Warm surface water only", es: "Solo agua superficial cálida", de: "Nur warmes Oberflächenwasser", nl: "Alleen warm oppervlaktewater" },
        { en: "Low oxygen content", es: "Bajo contenido de oxígeno", de: "Niedriger Sauerstoffgehalt", nl: "Laag zuurstofgehalte" }
      ],
      correct: 0,
      explanation: {
        en: "Mediterranean Water is characterized by high salinity (acquired through evaporation in the Mediterranean Sea) and intermediate temperature. It flows out through the Strait of Gibraltar and can be tracked as a subsurface water mass at intermediate depths in the North Atlantic.",
        es: "El Agua Mediterránea se caracteriza por alta salinidad (adquirida a través de evaporación en el Mar Mediterráneo) y temperatura intermedia. Fluye hacia afuera a través del Estrecho de Gibraltar y puede rastrearse como masa de agua subsuperficial a profundidades intermedias en el Atlántico Norte.",
        de: "Mittelmeerwasser ist charakterisiert durch hohen Salzgehalt (erworben durch Verdunstung im Mittelmeer) und mittlere Temperatur. Es fließt durch die Straße von Gibraltar hinaus und kann als Unterwasser-Wassermasse in mittleren Tiefen im Nordatlantik verfolgt werden.",
        nl: "Mediterraan Water wordt gekenmerkt door hoge saliniteit (verkregen door verdamping in de Middellandse Zee) en tussenliggende temperatuur. Het stroomt naar buiten door de Straat van Gibraltar en kan worden gevolgd als een ondergrondse watermassa op middlere diepten in de Noord-Atlantische Oceaan."
      }
    },
    {
      question: {
        en: "What is the role of eddies in ocean circulation?",
        es: "¿Cuál es el papel de los remolinos en la circulación oceánica?",
        de: "Welche Rolle spielen Wirbel in der Ozeanzirkulation?",
        nl: "Wat is de rol van wervelingen in oceaancirculatie?"
      },
      options: [
        { en: "They transport heat, salt, and nutrients across ocean basins", es: "Transportan calor, sal y nutrientes a través de las cuencas oceánicas", de: "Sie transportieren Wärme, Salz und Nährstoffe über Ozeanbecken", nl: "Ze transporteren warmte, zout en nutriënten over oceaanbekkens" },
        { en: "They only create surface turbulence", es: "Solo crean turbulencia superficial", de: "Sie erzeugen nur Oberflächenturbulenz", nl: "Ze creëren alleen oppervlakteturbulentie" },
        { en: "They have no significant impact", es: "No tienen impacto significativo", de: "Sie haben keinen signifikanten Einfluss", nl: "Ze hebben geen significante impact" },
        { en: "They only occur in shallow waters", es: "Solo ocurren en aguas poco profundas", de: "Sie treten nur in flachen Gewässern auf", nl: "Ze komen alleen voor in ondiepe wateren" }
      ],
      correct: 0,
      explanation: {
        en: "Ocean eddies are circular currents that play a crucial role in transporting heat, salt, nutrients, and other properties across ocean basins. They contribute significantly to mixing and can transport water masses far from their source regions.",
        es: "Los remolinos oceánicos son corrientes circulares que desempeñan un papel crucial en el transporte de calor, sal, nutrientes y otras propiedades a través de las cuencas oceánicas. Contribuyen significativamente a la mezcla y pueden transportar masas de agua lejos de sus regiones fuente.",
        de: "Ozeanwirbel sind kreisförmige Strömungen, die eine entscheidende Rolle beim Transport von Wärme, Salz, Nährstoffen und anderen Eigenschaften über Ozeanbecken spielen. Sie tragen erheblich zur Vermischung bei und können Wassermassen weit von ihren Quellregionen transportieren.",
        nl: "Oceaanwervelingen zijn circulaire stromingen die een cruciale rol spelen in het transporteren van warmte, zout, nutriënten en andere eigenschappen over oceaanbekkens. Ze dragen significant bij aan menging en kunnen watermassa's ver van hun brongebieden transporteren."
      }
    },
    {
      question: {
        en: "What is the Agulhas Current system?",
        es: "¿Qué es el sistema de Corriente de Agulhas?",
        de: "Was ist das Agulhas-Stromsystem?",
        nl: "Wat is het Agulhas Stroomsysteem?"
      },
      options: [
        { en: "A western boundary current along the east coast of South Africa", es: "Una corriente de frontera occidental a lo largo de la costa este de Sudáfrica", de: "Ein westlicher Grenzstrom entlang der Ostküste Südafrikas", nl: "Een westelijke grensstroming langs de oostkust van Zuid-Afrika" },
        { en: "An equatorial current in the Atlantic", es: "Una corriente ecuatorial en el Atlántico", de: "Ein äquatorialer Strom im Atlantik", nl: "Een equatoriale stroming in de Atlantische Oceaan" },
        { en: "A deep water current in the Pacific", es: "Una corriente de agua profunda en el Pacífico", de: "Ein Tiefwasserstrom im Pazifik", nl: "Een diepe waterstroming in de Stille Oceaan" },
        { en: "A polar current in the Arctic", es: "Una corriente polar en el Ártico", de: "Ein Polarstrom in der Arktis", nl: "Een polaire stroming in de Arctis" }
      ],
      correct: 0,
      explanation: {
        en: "The Agulhas Current is a western boundary current that flows southward along the east coast of South Africa. It's one of the strongest ocean currents and plays an important role in global thermohaline circulation through Agulhas leakage into the Atlantic.",
        es: "La Corriente de Agulhas es una corriente de frontera occidental que fluye hacia el sur a lo largo de la costa este de Sudáfrica. Es una de las corrientes oceánicas más fuertes y desempeña un papel importante en la circulación termohalina global a través de la filtración de Agulhas hacia el Atlántico.",
        de: "Der Agulhas-Strom ist ein westlicher Grenzstrom, der südwärts entlang der Ostküste Südafrikas fließt. Er ist eine der stärksten Meeresströmungen und spielt eine wichtige Rolle in der globalen thermohalinen Zirkulation durch Agulhas-Leckage in den Atlantik.",
        nl: "De Agulhas Stroom is een westelijke grensstroming die zuidwaarts langs de oostkust van Zuid-Afrika stroomt. Het is een van de sterkste oceaanstromingen en speelt een belangrijke rol in mondiale thermohaliene circulatie door Agulhas lekkage naar de Atlantische Oceaan."
      }
    },
    {
      question: {
        en: "What is coastal downwelling?",
        es: "¿Qué es el hundimiento costero?",
        de: "Was ist Küstenabtrieb?",
        nl: "Wat is kustale neerwaartse stroming?"
      },
      options: [
        { en: "The sinking of surface water near coastlines due to wind-driven Ekman transport", es: "El hundimiento de agua superficial cerca de las costas debido al transporte de Ekman impulsado por el viento", de: "Das Absinken von Oberflächenwasser in der Nähe von Küsten durch windgetriebenen Ekman-Transport", nl: "Het zinken van oppervlaktewater nabij kustlijnen door wind-gedreven Ekman transport" },
        { en: "The formation of deep water masses", es: "La formación de masas de agua profunda", de: "Die Bildung tiefer Wassermassen", nl: "De vorming van diepe watermassa's" },
        { en: "Tidal movements in coastal areas", es: "Movimientos de marea en áreas costeras", de: "Gezeitenbewegungen in Küstengebieten", nl: "Getijdenbewegingen in kustgebieden" },
        { en: "River discharge into the ocean", es: "Descarga fluvial hacia el océano", de: "Flusszufluss in den Ozean", nl: "Rivier afvoer naar de oceaan" }
      ],
      correct: 0,
      explanation: {
        en: "Coastal downwelling occurs when wind-driven Ekman transport pushes surface water toward the coast, causing it to sink. This process brings warm, nutrient-poor surface water down and typically results in lower biological productivity compared to upwelling areas.",
        es: "El hundimiento costero ocurre cuando el transporte de Ekman impulsado por el viento empuja agua superficial hacia la costa, causando que se hunda. Este proceso trae agua superficial cálida y pobre en nutrientes hacia abajo y típicamente resulta en menor productividad biológica comparado con áreas de afloramiento.",
        de: "Küstenabtrieb tritt auf, wenn windgetriebener Ekman-Transport Oberflächenwasser zur Küste drückt und es zum Absinken bringt. Dieser Prozess bringt warmes, nährstoffarmes Oberflächenwasser nach unten und führt typischerweise zu geringerer biologischer Produktivität im Vergleich zu Auftriebsgebieten.",
        nl: "Kustale neerwaartse stroming treedt op wanneer wind-gedreven Ekman transport oppervlaktewater naar de kust duwt, waardoor het zinkt. Dit proces brengt warm, nutriënt-arm oppervlaktewater naar beneden en resulteert typisch in lagere biologische productiviteit vergeleken met opwellingsgebieden."
      }
    },
    {
      question: {
        en: "What is the Drake Passage and why is it oceanographically important?",
        es: "¿Qué es el Pasaje de Drake y por qué es oceanográficamente importante?",
        de: "Was ist die Drake-Passage und warum ist sie ozeanographisch wichtig?",
        nl: "Wat is de Drake Passage en waarom is het oceanografisch belangrijk?"
      },
      options: [
        { en: "A narrow strait that allows the Antarctic Circumpolar Current to flow unobstructed", es: "Un estrecho angosto que permite que la Corriente Circumpolar Antártica fluya sin obstáculos", de: "Eine schmale Meerenge, die dem Antarktischen Zirkumpolarstrom ermöglicht, ungehindert zu fließen", nl: "Een smalle zeestraat die de Antarctische Circumpolaire Stroom toelaat ongehinderd te stromen" },
        { en: "A deep ocean trench in the Pacific", es: "Una fosa oceánica profunda en el Pacífico", de: "Ein tiefer Ozeangraben im Pazifik", nl: "Een diepe oceaantrog in de Stille Oceaan" },
        { en: "A underwater mountain range", es: "Una cordillera submarina", de: "Ein Unterwasser-Gebirgszug", nl: "Een onderwater bergketen" },
        { en: "A region of hydrothermal vents", es: "Una región de fuentes hidrotermales", de: "Eine Region mit Hydrothermalquellen", nl: "Een gebied van hydrothermale bronnen" }
      ],
      correct: 0,
      explanation: {
        en: "The Drake Passage is the narrow body of water between South America and Antarctica. It's oceanographically crucial because it's the only place where the Antarctic Circumpolar Current can flow completely around Antarctica unobstructed by land, making it the strongest ocean current and key to global circulation.",
        es: "El Pasaje de Drake es el estrecho cuerpo de agua entre América del Sur y la Antártida. Es oceanográficamente crucial porque es el único lugar donde la Corriente Circumpolar Antártica puede fluir completamente alrededor de la Antártida sin obstáculos terrestres, convirtiéndola en la corriente oceánica más fuerte y clave para la circulación global.",
        de: "Die Drake-Passage ist die schmale Wasserfläche zwischen Südamerika und der Antarktis. Sie ist ozeanographisch entscheidend, weil sie der einzige Ort ist, wo der Antarktische Zirkumpolarstrom vollständig um die Antarktis fließen kann, ohne durch Land behindert zu werden, was ihn zur stärksten Meeresströmung und Schlüssel zur globalen Zirkulation macht.",
        nl: "De Drake Passage is het smalle waterlichaam tussen Zuid-Amerika en Antarctica. Het is oceanografisch cruciaal omdat het de enige plaats is waar de Antarctische Circumpolaire Stroom volledig rond Antarctica kan stromen ongehinderd door land, waardoor het de sterkste oceaanstroom wordt en sleutel tot mondiale circulatie."
      }
    },
    {
      question: {
        en: "What distinguishes cyclonic from anticyclonic eddies?",
        es: "¿Qué distingue los remolinos ciclónicos de los anticiclónicos?",
        de: "Was unterscheidet zyklonische von antizyklonischen Wirbeln?",
        nl: "Wat onderscheidt cyclonische van anticyclonische wervelingen?"
      },
      options: [
        { en: "Cyclonic eddies rotate counterclockwise in the Northern Hemisphere and have upward doming centers", es: "Los remolinos ciclónicos rotan en sentido antihorario en el Hemisferio Norte y tienen centros con domo hacia arriba", de: "Zyklonische Wirbel rotieren gegen den Uhrzeigersinn in der Nordhalbkugel und haben nach oben gewölbte Zentren", nl: "Cyclonische wervelingen draaien tegen de klok in op het noordelijk halfrond en hebben opwaarts gewelfde centra" },
        { en: "They are the same, only size differs", es: "Son iguales, solo difiere el tamaño", de: "Sie sind gleich, nur die Größe unterscheidet sich", nl: "Ze zijn hetzelfde, alleen de grootte verschilt" },
        { en: "Cyclonic eddies only occur in tropical regions", es: "Los remolinos ciclónicos solo ocurren en regiones tropicales", de: "Zyklonische Wirbel treten nur in tropischen Regionen auf", nl: "Cyclonische wervelingen komen alleen voor in tropische gebieden" },
        { en: "Anticyclonic eddies move faster than cyclonic ones", es: "Los remolinos anticiclónicos se mueven más rápido que los ciclónicos", de: "Antizyklonische Wirbel bewegen sich schneller als zyklonische", nl: "Anticyclonische wervelingen bewegen sneller dan cyclonische" }
      ],
      correct: 0,
      explanation: {
        en: "Cyclonic eddies rotate counterclockwise in the Northern Hemisphere (clockwise in Southern Hemisphere) and have cold, upward-doming centers with lower sea surface height. Anticyclonic eddies rotate in the opposite direction with warm, downward-doming centers and higher sea surface height.",
        es: "Los remolinos ciclónicos rotan en sentido antihorario en el Hemisferio Norte (horario en el Hemisferio Sur) y tienen centros fríos con domo hacia arriba con menor altura de superficie marina. Los remolinos anticiclónicos rotan en dirección opuesta con centros cálidos con domo hacia abajo y mayor altura de superficie marina.",
        de: "Zyklonische Wirbel rotieren gegen den Uhrzeigersinn in der Nordhalbkugel (im Uhrzeigersinn in der Südhalbkugel) und haben kalte, nach oben gewölbte Zentren mit geringerer Meeresoberflächenhöhe. Antizyklonische Wirbel rotieren in entgegengesetzter Richtung mit warmen, nach unten gewölbten Zentren und höherer Meeresoberflächenhöhe.",
        nl: "Cyclonische wervelingen draaien tegen de klok in op het noordelijk halfrond (met de klok mee op zuidelijk halfrond) en hebben koude, opwaarts gewelfde centra met lagere zeespiegelhoogte. Anticyclonische wervelingen draaien in tegengestelde richting met warme, neerwaarts gewelfde centra en hogere zeespiegelhoogte."
      }
    },
    {
      question: {
        en: "What is the Labrador Current and its climatic significance?",
        es: "¿Qué es la Corriente de Labrador y cuál es su importancia climática?",
        de: "Was ist der Labradorstrom und welche klimatische Bedeutung hat er?",
        nl: "Wat is de Labrador Stroom en wat is zijn klimatologische betekenis?"
      },
      options: [
        { en: "A cold current that transports Arctic water southward along eastern North America", es: "Una corriente fría que transporta agua ártica hacia el sur a lo largo del este de América del Norte", de: "Ein kalter Strom, der arktisches Wasser südwärts entlang des östlichen Nordamerikas transportiert", nl: "Een koude stroming die Arctisch water zuidwaarts transporteert langs oostelijk Noord-Amerika" },
        { en: "A warm current in the Pacific Ocean", es: "Una corriente cálida en el Océano Pacífico", de: "Ein warmer Strom im Pazifischen Ozean", nl: "Een warme stroming in de Stille Oceaan" },
        { en: "A deep water current in the Indian Ocean", es: "Una corriente de agua profunda en el Océano Índico", de: "Ein Tiefwasserstrom im Indischen Ozean", nl: "Een diepe waterstroming in de Indische Oceaan" },
        { en: "A seasonal current that only flows in summer", es: "Una corriente estacional que solo fluye en verano", de: "Ein saisonaler Strom, der nur im Sommer fließt", nl: "Een seizoensgebonden stroming die alleen in de zomer stroomt" }
      ],
      correct: 0,
      explanation: {
        en: "The Labrador Current is a cold ocean current that flows southward along the eastern coast of North America, carrying cold Arctic water. It significantly influences the climate of eastern Canada and the northeastern United States, and carries icebergs from Greenland into shipping lanes.",
        es: "La Corriente de Labrador es una corriente oceánica fría que fluye hacia el sur a lo largo de la costa este de América del Norte, transportando agua ártica fría. Influye significativamente en el clima del este de Canadá y el noreste de Estados Unidos, y transporta icebergs desde Groenlandia hacia las rutas marítimas.",
        de: "Der Labradorstrom ist eine kalte Meeresströmung, die südwärts entlang der Ostküste Nordamerikas fließt und kaltes arktisches Wasser transportiert. Er beeinflusst das Klima Ostkanadas und der nordöstlichen Vereinigten Staaten erheblich und transportiert Eisberge von Grönland in die Schifffahrtsrouten.",
        nl: "De Labrador Stroom is een koude oceaanstroom die zuidwaarts langs de oostkust van Noord-Amerika stroomt, koud Arctisch water transporterend. Het beïnvloedt het klimaat van oostelijk Canada en noordoostelijk Verenigde Staten aanzienlijk, en transporteert ijsbergen van Groenland naar scheepvaartroutes."
      }
    },
    {
      question: {
        en: "What is the Indonesian Throughflow?",
        es: "¿Qué es el Flujo a través de Indonesia?",
        de: "Was ist der Indonesische Durchfluss?",
        nl: "Wat is de Indonesische Doorstroom?"
      },
      options: [
        { en: "The flow of Pacific water into the Indian Ocean through Indonesian seas", es: "El flujo de agua del Pacífico hacia el Océano Índico a través de los mares indonesios", de: "Der Fluss pazifischen Wassers in den Indischen Ozean durch indonesische Meere", nl: "De stroom van Pacifisch water naar de Indische Oceaan door Indonesische zeeën" },
        { en: "A river system in Indonesia", es: "Un sistema fluvial en Indonesia", de: "Ein Flusssystem in Indonesien", nl: "Een riviersysteem in Indonesië" },
        { en: "Underground water flow beneath Indonesia", es: "Flujo de agua subterránea debajo de Indonesia", de: "Unterirdischer Wasserfluss unter Indonesien", nl: "Ondergrondse waterstroom onder Indonesië" },
        { en: "Atmospheric water vapor transport", es: "Transporte de vapor de agua atmosférico", de: "Atmosphärischer Wasserdampftransport", nl: "Atmosferisch waterdamptransport" }
      ],
      correct: 0,
      explanation: {
        en: "The Indonesian Throughflow is the only tropical connection between ocean basins, allowing Pacific water to flow westward into the Indian Ocean through the complex Indonesian archipelago. This flow significantly affects global ocean circulation and climate patterns.",
        es: "El Flujo a través de Indonesia es la única conexión tropical entre cuencas oceánicas, permitiendo que el agua del Pacífico fluya hacia el oeste hacia el Océano Índico a través del complejo archipiélago indonesio. Este flujo afecta significativamente la circulación oceánica global y los patrones climáticos.",
        de: "Der Indonesische Durchfluss ist die einzige tropische Verbindung zwischen Ozeanbecken, die es pazifischem Wasser ermöglicht, westwärts in den Indischen Ozean durch den komplexen indonesischen Archipel zu fließen. Dieser Fluss beeinflusst die globale Ozeanzirkulation und Klimamuster erheblich.",
        nl: "De Indonesische Doorstroom is de enige tropische verbinding tussen oceaanbekkens, die Pacifisch water toelaat westwaarts naar de Indische Oceaan te stromen door de complexe Indonesische archipel. Deze stroom beïnvloedt mondiale oceaancirculatie en klimaatpatronen aanzienlijk."
      }
    },
    {
      question: {
        en: "How do western boundary currents form?",
        es: "¿Cómo se forman las corrientes de frontera occidental?",
        de: "Wie bilden sich westliche Grenzströme?",
        nl: "Hoe vormen westelijke grensstromen zich?"
      },
      options: [
        { en: "Through the westward intensification of gyre circulation due to the Coriolis parameter variation", es: "A través de la intensificación hacia el oeste de la circulación de giro debido a la variación del parámetro de Coriolis", de: "Durch westliche Intensivierung der Wirbelzirkulation aufgrund der Variation des Coriolis-Parameters", nl: "Door westelijke intensivering van gyre circulatie door variatie van de Coriolis parameter" },
        { en: "Only from river discharge into the ocean", es: "Solo por descarga fluvial hacia el océano", de: "Nur durch Flusszufluss in den Ozean", nl: "Alleen door rivier afvoer naar de oceaan" },
        { en: "From tidal forces alone", es: "Solo por fuerzas de marea", de: "Nur durch Gezeitenkräfte", nl: "Alleen door getijdenkrachten" },
        { en: "Through random ocean fluctuations", es: "A través de fluctuaciones oceánicas aleatorias", de: "Durch zufällige Ozeanschwankungen", nl: "Door willekeurige oceaanfluctuaties" }
      ],
      correct: 0,
      explanation: {
        en: "Western boundary currents form due to the westward intensification of oceanic gyres caused by the variation of the Coriolis parameter with latitude (beta effect). This creates narrow, fast, deep currents on the western sides of ocean basins like the Gulf Stream and Kuroshio.",
        es: "Las corrientes de frontera occidental se forman debido a la intensificación hacia el oeste de los giros oceánicos causada por la variación del parámetro de Coriolis con la latitud (efecto beta). Esto crea corrientes estrechas, rápidas y profundas en los lados occidentales de las cuencas oceánicas como la Corriente del Golfo y Kuroshio.",
        de: "Westliche Grenzströme bilden sich aufgrund der westlichen Intensivierung ozeanischer Wirbel, verursacht durch die Variation des Coriolis-Parameters mit dem Breitengrad (Beta-Effekt). Dies erzeugt schmale, schnelle, tiefe Strömungen auf den westlichen Seiten von Ozeanbecken wie dem Golfstrom und Kuroshio.",
        nl: "Westelijke grensstromen vormen zich door westelijke intensivering van oceanische gyres veroorzaakt door variatie van de Coriolis parameter met breedtegraad (beta effect). Dit creëert smalle, snelle, diepe stromingen aan de westelijke kanten van oceaanbekkens zoals de Golfstroom en Kuroshio."
      }
    },
    {
      question: {
        en: "What are mode waters in oceanography?",
        es: "¿Qué son las aguas modales en oceanografía?",
        de: "Was sind Modenwasser in der Ozeanographie?",
        nl: "Wat zijn mode wateren in de oceanografie?"
      },
      options: [
        { en: "Water masses with nearly uniform temperature and salinity over large volumes", es: "Masas de agua con temperatura y salinidad casi uniformes en grandes volúmenes", de: "Wassermassen mit nahezu einheitlicher Temperatur und Salzgehalt über große Volumina", nl: "Watermassa's met bijna uniforme temperatuur en saliniteit over grote volumes" },
        { en: "Waters that only exist at specific depths", es: "Aguas que solo existen a profundidades específicas", de: "Wasser, das nur in bestimmten Tiefen existiert", nl: "Wateren die alleen op specifieke diepten bestaan" },
        { en: "Transitional waters between ocean basins", es: "Aguas transicionales entre cuencas oceánicas", de: "Übergangswasser zwischen Ozeanbecken", nl: "Overgangswateren tussen oceaanbekkens" },
        { en: "Waters with high variability in properties", es: "Aguas con alta variabilidad en propiedades", de: "Wasser mit hoher Variabilität in Eigenschaften", nl: "Wateren met hoge variabiliteit in eigenschappen" }
      ],
      correct: 0,
      explanation: {
        en: "Mode waters are characterized by having nearly uniform temperature and salinity properties over large volumes, typically forming in regions of deep winter convection. They occupy thick layers in the ocean and represent the most voluminous water masses in their density range.",
        es: "Las aguas modales se caracterizan por tener propiedades de temperatura y salinidad casi uniformes en grandes volúmenes, típicamente formándose en regiones de convección invernal profunda. Ocupan capas gruesas en el océano y representan las masas de agua más voluminosas en su rango de densidad.",
        de: "Modenwasser sind charakterisiert durch nahezu einheitliche Temperatur- und Salzgehalteigenschaften über große Volumina, typischerweise gebildet in Regionen tiefer winterlicher Konvektion. Sie besetzen dicke Schichten im Ozean und repräsentieren die voluminösesten Wassermassen in ihrem Dichtebereich.",
        nl: "Mode wateren worden gekenmerkt door bijna uniforme temperatuur en saliniteits eigenschappen over grote volumes, typisch vormend in gebieden van diepe winter convectie. Ze beslaan dikke lagen in de oceaan en vertegenwoordigen de meest volumineuze watermassa's in hun dichtheidsbereik."
      }
    },
    {
      question: {
        en: "How does the North Atlantic Oscillation (NAO) affect ocean circulation?",
        es: "¿Cómo afecta la Oscilación del Atlántico Norte (OAN) la circulación oceánica?",
        de: "Wie beeinflusst die Nordatlantische Oszillation (NAO) die Ozeanzirkulation?",
        nl: "Hoe beïnvloedt de Noord-Atlantische Oscillatie (NAO) oceaancirculatie?"
      },
      options: [
        { en: "It modulates wind patterns that drive surface currents and deep water formation", es: "Modula los patrones de viento que impulsan las corrientes superficiales y la formación de agua profunda", de: "Es moduliert Windmuster, die Oberflächenströmungen und Tiefenwasserbildung antreiben", nl: "Het moduleert windpatronen die oppervlaktestromingen en diepe watervorming aandrijven" },
        { en: "It only affects atmospheric conditions", es: "Solo afecta las condiciones atmosféricas", de: "Es beeinflusst nur atmosphärische Bedingungen", nl: "Het beïnvloedt alleen atmosferische omstandigheden" },
        { en: "It directly controls ocean temperature", es: "Controla directamente la temperatura oceánica", de: "Es kontrolliert direkt die Ozeantemperatur", nl: "Het controleert direct oceaantemperatuur" },
        { en: "It has no impact on ocean circulation", es: "No tiene impacto en la circulación oceánica", de: "Es hat keinen Einfluss auf die Ozeanzirkulation", nl: "Het heeft geen impact op oceaancirculatie" }
      ],
      correct: 0,
      explanation: {
        en: "The North Atlantic Oscillation (NAO) affects ocean circulation by modulating atmospheric pressure patterns and associated wind systems. During positive NAO phases, stronger westerlies enhance the Gulf Stream and increase deep water formation in the Labrador Sea, while negative phases have opposite effects.",
        es: "La Oscilación del Atlántico Norte (OAN) afecta la circulación oceánica modulando patrones de presión atmosférica y sistemas de viento asociados. Durante fases positivas de OAN, vientos del oeste más fuertes intensifican la Corriente del Golfo e incrementan la formación de agua profunda en el Mar de Labrador, mientras que las fases negativas tienen efectos opuestos.",
        de: "Die Nordatlantische Oszillation (NAO) beeinflusst die Ozeanzirkulation durch Modulation atmosphärischer Druckmuster und zugehöriger Windsysteme. Während positiven NAO-Phasen verstärken stärkere Westwinde den Golfstrom und erhöhen die Tiefenwasserbildung in der Labradorsee, während negative Phasen entgegengesetzte Effekte haben.",
        nl: "De Noord-Atlantische Oscillatie (NAO) beïnvloedt oceaancirculatie door modulatie van atmosferische drukpatronen en geassocieerde windsystemen. Tijdens positieve NAO fasen versterken sterkere westenwinden de Golfstroom en verhogen diepe watervorming in de Labrador Zee, terwijl negatieve fasen tegengestelde effecten hebben."
      }
    },
    {
      question: {
        en: "What characterizes intermediate waters in the ocean?",
        es: "¿Qué caracteriza las aguas intermedias en el océano?",
        de: "Was charakterisiert Zwischenwasser im Ozean?",
        nl: "Wat kenmerkt tussenwateren in de oceaan?"
      },
      options: [
        { en: "Waters found at depths between 500-1500m with distinct temperature and salinity signatures", es: "Aguas encontradas a profundidades entre 500-1500m con firmas distintivas de temperatura y salinidad", de: "Wasser in Tiefen zwischen 500-1500m mit charakteristischen Temperatur- und Salzgehaltsignaturen", nl: "Wateren gevonden op diepten tussen 500-1500m met onderscheidende temperatuur en saliniteits kenmerken" },
        { en: "Only surface waters", es: "Solo aguas superficiales", de: "Nur Oberflächenwasser", nl: "Alleen oppervlaktewateren" },
        { en: "The deepest waters in ocean basins", es: "Las aguas más profundas en cuencas oceánicas", de: "Die tiefsten Wasser in Ozeanbecken", nl: "De diepste wateren in oceaanbekkens" },
        { en: "Waters with constant temperature", es: "Aguas con temperatura constante", de: "Wasser mit konstanter Temperatur", nl: "Wateren met constante temperatuur" }
      ],
      correct: 0,
      explanation: {
        en: "Intermediate waters are typically found at depths between 500-1500 meters and are characterized by distinct temperature and salinity properties that reflect their formation regions. Examples include Antarctic Intermediate Water and Mediterranean Water, which can be traced by their characteristic T-S signatures.",
        es: "Las aguas intermedias se encuentran típicamente a profundidades entre 500-1500 metros y se caracterizan por propiedades distintivas de temperatura y salinidad que reflejan sus regiones de formación. Ejemplos incluyen el Agua Intermedia Antártica y el Agua Mediterránea, que pueden rastrearse por sus firmas T-S características.",
        de: "Zwischenwasser werden typischerweise in Tiefen zwischen 500-1500 Metern gefunden und sind durch charakteristische Temperatur- und Salzgehalteigenschaften gekennzeichnet, die ihre Bildungsregionen widerspiegeln. Beispiele umfassen Antarktisches Zwischenwasser und Mittelmeerwasser, die durch ihre charakteristischen T-S-Signaturen verfolgt werden können.",
        nl: "Tussenwateren worden typisch gevonden op diepten tussen 500-1500 meter en worden gekenmerkt door onderscheidende temperatuur en saliniteits eigenschappen die hun vormingsgebieden weerspiegelen. Voorbeelden omvatten Antarctisch Tussenwater en Mediterraan Water, die kunnen worden gevolgd door hun karakteristieke T-S kenmerken."
      }
    },
    {
      question: {
        en: "What is topographic steering in ocean currents?",
        es: "¿Qué es la dirección topográfica en las corrientes oceánicas?",
        de: "Was ist topographische Lenkung in Meeresströmungen?",
        nl: "Wat is topografische sturing in oceaanstromingen?"
      },
      options: [
        { en: "The deflection of ocean currents by underwater topography following geostrophic contours", es: "La desviación de corrientes oceánicas por topografía submarina siguiendo contornos geostróficos", de: "Die Ablenkung von Meeresströmungen durch Unterwassertopographie entlang geostrophischer Konturen", nl: "De afbuiging van oceaanstromingen door onderwater topografie volgend geostrofische contouren" },
        { en: "Currents that only flow over flat ocean floors", es: "Corrientes que solo fluyen sobre fondos oceánicos planos", de: "Strömungen, die nur über flache Ozeanböden fließen", nl: "Stromingen die alleen over vlakke oceaanbodems stromen" },
        { en: "Surface currents unaffected by bottom topography", es: "Corrientes superficiales no afectadas por topografía del fondo", de: "Oberflächenströmungen unbeeinflusst von Bodentopographie", nl: "Oppervlaktestromingen onbeïnvloed door bodemtopografie" },
        { en: "Random changes in current direction", es: "Cambios aleatorios en dirección de corriente", de: "Zufällige Änderungen in Strömungsrichtung", nl: "Willekeurige veranderingen in stroomrichting" }
      ],
      correct: 0,
      explanation: {
        en: "Topographic steering occurs when ocean currents are deflected by underwater topography such as ridges, seamounts, and continental margins. Deep currents tend to follow bathymetric contours due to the conservation of potential vorticity, affecting the pathways of water masses.",
        es: "La dirección topográfica ocurre cuando las corrientes oceánicas son desviadas por topografía submarina como dorsales, montes submarinos y márgenes continentales. Las corrientes profundas tienden a seguir contornos batimétricos debido a la conservación de vorticidad potencial, afectando las rutas de las masas de agua.",
        de: "Topographische Lenkung tritt auf, wenn Meeresströmungen durch Unterwassertopographie wie Rücken, Seeberge und Kontinentalränder abgelenkt werden. Tiefe Strömungen neigen dazu, bathymetrischen Konturen aufgrund der Erhaltung potentieller Vorticity zu folgen, was die Pfade von Wassermassen beeinflusst.",
        nl: "Topografische sturing treedt op wanneer oceaanstromingen worden afgebogen door onderwater topografie zoals ruggen, zeebergen en continentale marges. Diepe stromingen neigen ertoe bathymetrische contouren te volgen door behoud van potentiële vorticity, wat de paden van watermassa's beïnvloedt."
      }
    },
    {
      question: {
        en: "What is density stratification in the ocean?",
        es: "¿Qué es la estratificación de densidad en el océano?",
        de: "Was ist Dichteschichtung im Ozean?",
        nl: "Wat is dichtheidsstratificatie in de oceaan?"
      },
      options: [
        { en: "The vertical layering of water masses based on density differences", es: "La estratificación vertical de masas de agua basada en diferencias de densidad", de: "Die vertikale Schichtung von Wassermassen basierend auf Dichteunterschieden", nl: "De verticale gelaagdheid van watermassa's gebaseerd op dichtheidsverschillen" },
        { en: "Only horizontal density variations", es: "Solo variaciones horizontales de densidad", de: "Nur horizontale Dichtevariationen", nl: "Alleen horizontale dichtheidsvariaties" },
        { en: "Uniform density throughout the water column", es: "Densidad uniforme a través de la columna de agua", de: "Einheitliche Dichte durch die Wassersäule", nl: "Uniforme dichtheid door de waterkolom" },
        { en: "Density changes only at the surface", es: "Cambios de densidad solo en la superficie", de: "Dichteänderungen nur an der Oberfläche", nl: "Dichtheidsveranderingen alleen aan het oppervlak" }
      ],
      correct: 0,
      explanation: {
        en: "Density stratification refers to the vertical layering of ocean water based on density differences, with denser water underlying less dense water. This stable configuration is fundamental to ocean structure and affects vertical mixing, internal waves, and the propagation of disturbances.",
        es: "La estratificación de densidad se refiere a la estratificación vertical del agua oceánica basada en diferencias de densidad, con agua más densa subyacente al agua menos densa. Esta configuración estable es fundamental para la estructura oceánica y afecta la mezcla vertical, ondas internas y la propagación de perturbaciones.",
        de: "Dichteschichtung bezieht sich auf die vertikale Schichtung von Ozeanwasser basierend auf Dichteunterschieden, wobei dichteres Wasser unter weniger dichtem Wasser liegt. Diese stabile Konfiguration ist grundlegend für die Ozeanstruktur und beeinflusst vertikale Vermischung, interne Wellen und die Ausbreitung von Störungen.",
        nl: "Dichtheidsstratificatie verwijst naar de verticale gelaagdheid van oceaanwater gebaseerd op dichtheidsverschillen, met dichter water onder minder dicht water. Deze stabiele configuratie is fundamenteel voor oceaanstructuur en beïnvloedt verticale menging, interne golven en de voortplanting van verstoringen."
      }
    },
    {
      question: {
        en: "What is water mass ventilation?",
        es: "¿Qué es la ventilación de masas de agua?",
        de: "Was ist Wassermassen-Belüftung?",
        nl: "Wat is watermassa ventilatie?"
      },
      options: [
        { en: "The process by which surface waters carry atmospheric gases to ocean interior", es: "El proceso por el cual las aguas superficiales transportan gases atmosféricos al interior oceánico", de: "Der Prozess, durch den Oberflächenwasser atmosphärische Gase ins Ozeaninnere transportiert", nl: "Het proces waarbij oppervlaktewateren atmosferische gassen naar het oceaaninterieur transporteren" },
        { en: "Only the movement of water at the surface", es: "Solo el movimiento de agua en la superficie", de: "Nur die Bewegung von Wasser an der Oberfläche", nl: "Alleen de beweging van water aan het oppervlak" },
        { en: "The evaporation of seawater", es: "La evaporación del agua de mar", de: "Die Verdunstung von Meerwasser", nl: "De verdamping van zeewater" },
        { en: "Wind-driven surface turbulence only", es: "Solo turbulencia superficial impulsada por viento", de: "Nur windgetriebene Oberflächenturbulenz", nl: "Alleen wind-gedreven oppervlakteturbulentie" }
      ],
      correct: 0,
      explanation: {
        en: "Water mass ventilation is the process by which surface waters, having equilibrated with the atmosphere, subduct and carry atmospheric properties (like oxygen, carbon dioxide, and other tracers) into the ocean interior. This process is crucial for ocean biogeochemistry and climate.",
        es: "La ventilación de masas de agua es el proceso por el cual las aguas superficiales, habiendo equilibrado con la atmósfera, se subducen y transportan propiedades atmosféricas (como oxígeno, dióxido de carbono y otros trazadores) al interior oceánico. Este proceso es crucial para la biogeoquímica oceánica y el clima.",
        de: "Wassermassen-Belüftung ist der Prozess, durch den Oberflächenwasser, das mit der Atmosphäre equilibriert hat, subduziert und atmosphärische Eigenschaften (wie Sauerstoff, Kohlendioxid und andere Tracer) ins Ozeaninnere transportiert. Dieser Prozess ist entscheidend für ozeanische Biogeochemie und Klima.",
        nl: "Watermassa ventilatie is het proces waarbij oppervlaktewateren, na evenwicht met de atmosfeer, subduceren en atmosferische eigenschappen (zoals zuurstof, kooldioxide en andere tracers) naar het oceaaninterieur transporteren. Dit proces is cruciaal voor oceaan biogeochemie en klimaat."
      }
    },
    {
      question: {
        en: "What is the role of the Antarctic Polar Front?",
        es: "¿Cuál es el papel del Frente Polar Antártico?",
        de: "Welche Rolle spielt die Antarktische Polarfront?",
        nl: "Wat is de rol van het Antarctisch Polair Front?"
      },
      options: [
        { en: "A sharp boundary separating cold Antarctic waters from warmer subantarctic waters", es: "Una frontera aguda que separa las aguas antárticas frías de las aguas subantárticas más cálidas", de: "Eine scharfe Grenze, die kalte antarktische Gewässer von wärmeren subantarktischen Gewässern trennt", nl: "Een scherpe grens die koude Antarctische wateren scheidt van warmere subantarctische wateren" },
        { en: "A surface current only", es: "Solo una corriente superficial", de: "Nur eine Oberflächenströmung", nl: "Alleen een oppervlaktestroming" },
        { en: "A seasonal ice formation", es: "Una formación de hielo estacional", de: "Eine saisonale Eisbildung", nl: "Een seizoensgebonden ijsvorming" },
        { en: "A deep water mass", es: "Una masa de agua profunda", de: "Eine tiefe Wassermasse", nl: "Een diepe watermassa" }
      ],
      correct: 0,
      explanation: {
        en: "The Antarctic Polar Front (also called the Polar Frontal Zone) is a sharp oceanic boundary that encircles Antarctica, separating cold, less saline Antarctic waters from the warmer, more saline Subantarctic waters. This front is crucial for marine ecosystems and global circulation.",
        es: "El Frente Polar Antártico (también llamado Zona Frontal Polar) es una frontera oceánica aguda que rodea la Antártida, separando las aguas antárticas frías y menos salinas de las aguas subantárticas más cálidas y salinas. Este frente es crucial para los ecosistemas marinos y la circulación global.",
        de: "Die Antarktische Polarfront (auch Polare Frontalzone genannt) ist eine scharfe ozeanische Grenze, die die Antarktis umkreist und kalte, weniger salzige antarktische Gewässer von wärmeren, salzigeren subantarktischen Gewässern trennt. Diese Front ist entscheidend für marine Ökosysteme und die globale Zirkulation.",
        nl: "Het Antarctisch Polair Front (ook wel Polaire Frontale Zone genoemd) is een scherpe oceanische grens die Antarctica omcirkelt, koude, minder zoute Antarctische wateren scheidend van warmere, meer zoute Subantarctische wateren. Dit front is cruciaal voor mariene ecosystemen en mondiale circulatie."
      }
    },
    {
      question: {
        en: "What characterizes the formation of Central Waters?",
        es: "¿Qué caracteriza la formación de Aguas Centrales?",
        de: "Was charakterisiert die Bildung von Zentralwasser?",
        nl: "Wat kenmerkt de vorming van Centrale Wateren?"
      },
      options: [
        { en: "Subduction of surface waters in subtropical gyres with linear temperature-salinity relationships", es: "Subducción de aguas superficiales en giros subtropicales con relaciones lineales temperatura-salinidad", de: "Subduktion von Oberflächenwasser in subtropischen Wirbeln mit linearen Temperatur-Salzgehalt-Beziehungen", nl: "Subductie van oppervlaktewateren in subtropische gyres met lineaire temperatuur-saliniteit relaties" },
        { en: "Only deep convection in polar regions", es: "Solo convección profunda en regiones polares", de: "Nur tiefe Konvektion in polaren Regionen", nl: "Alleen diepe convectie in polaire gebieden" },
        { en: "River discharge into ocean basins", es: "Descarga fluvial hacia cuencas oceánicas", de: "Flusszufluss in Ozeanbecken", nl: "Rivier afvoer naar oceaanbekkens" },
        { en: "Evaporation in tropical regions only", es: "Solo evaporación en regiones tropicales", de: "Nur Verdunstung in tropischen Regionen", nl: "Alleen verdamping in tropische gebieden" }
      ],
      correct: 0,
      explanation: {
        en: "Central Waters are formed by the subduction of surface waters in subtropical gyres, creating water masses with characteristic linear temperature-salinity relationships. These waters fill the main thermocline in ocean basins and represent a major component of the global water mass inventory.",
        es: "Las Aguas Centrales se forman por la subducción de aguas superficiales en giros subtropicales, creando masas de agua con relaciones características lineales temperatura-salinidad. Estas aguas llenan la termoclina principal en cuencas oceánicas y representan un componente principal del inventario global de masas de agua.",
        de: "Zentralwasser bilden sich durch Subduktion von Oberflächenwasser in subtropischen Wirbeln und erzeugen Wassermassen mit charakteristischen linearen Temperatur-Salzgehalt-Beziehungen. Diese Wasser füllen die Hauptthermokline in Ozeanbecken und stellen einen Hauptbestandteil des globalen Wassermassen-Inventars dar.",
        nl: "Centrale Wateren vormen zich door subductie van oppervlaktewateren in subtropische gyres, creërend watermassa's met karakteristieke lineaire temperatuur-saliniteit relaties. Deze wateren vullen de hoofdthermocline in oceaanbekkens en vertegenwoordigen een belangrijk onderdeel van de mondiale watermassa inventaris."
      }
    },
    {
      question: {
        en: "What is the significance of the Brazil-Malvinas Confluence?",
        es: "¿Cuál es la importancia de la Confluencia Brasil-Malvinas?",
        de: "Was ist die Bedeutung der Brasilien-Malvinas-Konfluenz?",
        nl: "Wat is de betekenis van de Brazilië-Malvinas Samenkomst?"
      },
      options: [
        { en: "A highly energetic region where warm Brazil Current meets cold Malvinas Current", es: "Una región altamente energética donde la cálida Corriente de Brasil se encuentra con la fría Corriente de Malvinas", de: "Eine hochenergetische Region, wo der warme Brasilstrom auf den kalten Malvinasstrom trifft", nl: "Een zeer energetische regio waar de warme Brazilië Stroom de koude Malvinas Stroom ontmoet" },
        { en: "A calm area with no significant currents", es: "Un área tranquila sin corrientes significativas", de: "Ein ruhiges Gebiet ohne signifikante Strömungen", nl: "Een rustig gebied zonder significante stromingen" },
        { en: "Only a seasonal phenomenon", es: "Solo un fenómeno estacional", de: "Nur ein saisonales Phänomen", nl: "Alleen een seizoensgebonden fenomeen" },
        { en: "A region with uniform water properties", es: "Una región con propiedades uniformes del agua", de: "Eine Region mit einheitlichen Wassereigenschaften", nl: "Een regio met uniforme watereigenschappen" }
      ],
      correct: 0,
      explanation: {
        en: "The Brazil-Malvinas Confluence is one of the most energetic regions in the world's oceans, where the warm, salty Brazil Current flowing southward meets the cold, fresh Malvinas (Falkland) Current flowing northward. This creates intense mesoscale eddies and strong temperature gradients.",
        es: "La Confluencia Brasil-Malvinas es una de las regiones más energéticas en los océanos del mundo, donde la cálida y salada Corriente de Brasil que fluye hacia el sur se encuentra con la fría y dulce Corriente de Malvinas (Falkland) que fluye hacia el norte. Esto crea remolinos de mesoescala intensos y fuertes gradientes de temperatura.",
        de: "Die Brasilien-Malvinas-Konfluenz ist eine der energetischsten Regionen in den Weltmeeren, wo der warme, salzige Brasilstrom, der südwärts fließt, auf den kalten, süßen Malvinasstrom (Falklandstrom) trifft, der nordwärts fließt. Dies erzeugt intensive mesoskalige Wirbel und starke Temperaturgradienten.",
        nl: "De Brazilië-Malvinas Samenkomst is een van de meest energetische regio's in 's werelds oceanen, waar de warme, zoute Brazilië Stroom zuidwaarts stromend de koude, zoete Malvinas (Falkland) Stroom noordwaarts stromend ontmoet. Dit creëert intense mesoschalige wervelingen en sterke temperatuurgradiënten."
      }
    },
    {
      question: {
        en: "What is the role of overflow waters in deep ocean circulation?",
        es: "¿Cuál es el papel de las aguas de desbordamiento en la circulación oceánica profunda?",
        de: "Welche Rolle spielen Überlaufwasser in der tiefen Ozeanzirkulation?",
        nl: "Wat is de rol van overloopwateren in diepe oceaancirculatie?"
      },
      options: [
        { en: "Dense waters that flow over sills and contribute to deep water formation", es: "Aguas densas que fluyen sobre umbrales y contribuyen a la formación de agua profunda", de: "Dichte Wasser, die über Schwellen fließen und zur Tiefenwasserbildung beitragen", nl: "Dichte wateren die over drempels stromen en bijdragen aan diepe watervorming" },
        { en: "Only surface waters during storms", es: "Solo aguas superficiales durante tormentas", de: "Nur Oberflächenwasser während Stürmen", nl: "Alleen oppervlaktewateren tijdens stormen" },
        { en: "Waters that evaporate quickly", es: "Aguas que se evaporan rápidamente", de: "Wasser, das schnell verdunstet", nl: "Wateren die snel verdampen" },
        { en: "Shallow coastal currents only", es: "Solo corrientes costeras superficiales", de: "Nur flache Küstenströmungen", nl: "Alleen ondiepe kuststromingen" }
      ],
      correct: 0,
      explanation: {
        en: "Overflow waters are dense water masses that flow over topographic barriers (sills) between ocean basins. Examples include Denmark Strait Overflow Water and Faroe Bank Channel Overflow Water, which are crucial components of North Atlantic Deep Water formation and the global thermohaline circulation.",
        es: "Las aguas de desbordamiento son masas de agua densas que fluyen sobre barreras topográficas (umbrales) entre cuencas oceánicas. Ejemplos incluyen el Agua de Desbordamiento del Estrecho de Dinamarca y el Agua de Desbordamiento del Canal del Banco Faroe, que son componentes cruciales de la formación del Agua Profunda del Atlántico Norte y la circulación termohalina global.",
        de: "Überlaufwasser sind dichte Wassermassen, die über topographische Barrieren (Schwellen) zwischen Ozeanbecken fließen. Beispiele umfassen Denmark Strait Overflow Water und Faroe Bank Channel Overflow Water, die entscheidende Komponenten der Nordatlantischen Tiefenwasserbildung und der globalen thermohalinen Zirkulation sind.",
        nl: "Overloopwateren zijn dichte watermassa's die over topografische barrières (drempels) tussen oceaanbekkens stromen. Voorbeelden zijn Denmark Strait Overloopwater en Faroe Bank Channel Overloopwater, die cruciale componenten zijn van Noord-Atlantische Diepe Watervorming en de mondiale thermohaliene circulatie."
      }
    },
    {
      question: {
        en: "What causes the formation of Mediterranean Outflow Water plumes?",
        es: "¿Qué causa la formación de plumas de Agua de Salida Mediterránea?",
        de: "Was verursacht die Bildung von Mittelmeer-Abflusswasser-Fahnen?",
        nl: "Wat veroorzaakt de vorming van Mediterrane Uitstroom Water pluimen?"
      },
      options: [
        { en: "Entrainment and mixing of dense Mediterranean water with Atlantic water as it flows down the continental slope", es: "Arrastre y mezcla de agua mediterránea densa con agua atlántica mientras fluye por la pendiente continental", de: "Mitreißen und Vermischen von dichtem Mittelmeerwasser mit Atlantikwasser, während es den Kontinentalhang hinunterfließt", nl: "Meevoering en menging van dicht Mediterraan water met Atlantisch water terwijl het de continentale helling afstroomt" },
        { en: "Only tidal forces", es: "Solo fuerzas de marea", de: "Nur Gezeitenkräfte", nl: "Alleen getijdenkrachten" },
        { en: "Seasonal temperature changes", es: "Cambios estacionales de temperatura", de: "Saisonale Temperaturänderungen", nl: "Seizoensgebonden temperatuurveranderingen" },
        { en: "Wind-driven surface currents", es: "Corrientes superficiales impulsadas por viento", de: "Windgetriebene Oberflächenströmungen", nl: "Door wind gedreven oppervlaktestromingen" }
      ],
      correct: 0,
      explanation: {
        en: "Mediterranean Outflow Water forms characteristic plumes as the dense, salty water exits the Mediterranean Sea through the Strait of Gibraltar. As it flows down the continental slope into the Atlantic, it entrains and mixes with ambient Atlantic water, creating distinctive plume structures that can be traced far into the Atlantic basin.",
        es: "El Agua de Salida Mediterránea forma plumas características cuando el agua densa y salada sale del Mar Mediterráneo a través del Estrecho de Gibraltar. Mientras fluye por la pendiente continental hacia el Atlántico, arrastra y se mezcla con agua atlántica ambiente, creando estructuras de pluma distintivas que pueden rastrearse lejos en la cuenca atlántica.",
        de: "Mittelmeer-Abflusswasser bildet charakteristische Fahnen, wenn das dichte, salzige Wasser das Mittelmeer durch die Straße von Gibraltar verlässt. Während es den Kontinentalhang in den Atlantik hinunterfließt, reißt es Atlantikwasser mit und vermischt sich damit, wodurch charakteristische Fahnenstrukturen entstehen, die weit in das Atlantikbecken verfolgt werden können.",
        nl: "Mediterrane Uitstroom Water vormt karakteristieke pluimen wanneer het dichte, zoute water de Middellandse Zee verlaat via de Straat van Gibraltar. Terwijl het de continentale helling afstroomt naar de Atlantische Oceaan, voert het Atlantisch water mee en mengt ermee, creërend onderscheidende pluimstructuren die ver in het Atlantische bekken kunnen worden gevolgd."
      }
    },
    {
      question: {
        en: "What is the significance of Rossby waves in ocean circulation?",
        es: "¿Cuál es la importancia de las ondas de Rossby en la circulación oceánica?",
        de: "Was ist die Bedeutung von Rossby-Wellen in der Ozeanzirkulation?",
        nl: "Wat is de betekenis van Rossby golven in oceaancirculatie?"
      },
      options: [
        { en: "Long-period planetary waves that transport energy and adjust ocean circulation patterns", es: "Ondas planetarias de largo período que transportan energía y ajustan patrones de circulación oceánica", de: "Langperiodische planetarische Wellen, die Energie transportieren und Ozeanzirkulationsmuster anpassen", nl: "Lange-periode planetaire golven die energie transporteren en oceaancirculatie patronen aanpassen" },
        { en: "Only surface wind waves", es: "Solo ondas de viento superficiales", de: "Nur Oberflächenwindwellen", nl: "Alleen oppervlakte windgolven" },
        { en: "Tidal oscillations only", es: "Solo oscilaciones de marea", de: "Nur Gezeitenschwingungen", nl: "Alleen getijdenoscillaties" },
        { en: "Tsunami waves", es: "Ondas de tsunami", de: "Tsunami-Wellen", nl: "Tsunami golven" }
      ],
      correct: 0,
      explanation: {
        en: "Rossby waves are large-scale, long-period planetary waves that propagate westward in the ocean due to the beta effect (variation of Coriolis parameter with latitude). They play a crucial role in adjusting ocean circulation to changes in forcing and transporting energy across ocean basins.",
        es: "Las ondas de Rossby son ondas planetarias de gran escala y largo período que se propagan hacia el oeste en el océano debido al efecto beta (variación del parámetro de Coriolis con la latitud). Desempeñan un papel crucial en ajustar la circulación oceánica a cambios en el forzamiento y transportar energía a través de cuencas oceánicas.",
        de: "Rossby-Wellen sind großskalige, langperiodische planetarische Wellen, die sich aufgrund des Beta-Effekts (Variation des Coriolis-Parameters mit dem Breitengrad) westwärts im Ozean ausbreiten. Sie spielen eine entscheidende Rolle bei der Anpassung der Ozeanzirkulation an Änderungen der Antriebskräfte und beim Energietransport über Ozeanbecken.",
        nl: "Rossby golven zijn grootschalige, lange-periode planetaire golven die westwaarts in de oceaan voortplanten door het beta effect (variatie van Coriolis parameter met breedtegraad). Ze spelen een cruciale rol in het aanpassen van oceaancirculatie aan veranderingen in forcering en het transporteren van energie over oceaanbekkens."
      }
    },
    {
      question: {
        en: "What characterizes the formation of Eighteen Degree Water?",
        es: "¿Qué caracteriza la formación del Agua de Dieciocho Grados?",
        de: "Was charakterisiert die Bildung von Achtzehn-Grad-Wasser?",
        nl: "Wat kenmerkt de vorming van Achttien Graden Water?"
      },
      options: [
        { en: "A mode water with temperature near 18°C formed by deep winter convection in the Sargasso Sea", es: "Un agua modal con temperatura cerca de 18°C formada por convección invernal profunda en el Mar de Sargazos", de: "Ein Modenwasser mit Temperatur nahe 18°C, gebildet durch tiefe winterliche Konvektion in der Sargassosee", nl: "Een mode water met temperatuur nabij 18°C gevormd door diepe winter convectie in de Sargasso Zee" },
        { en: "Only tropical surface water", es: "Solo agua superficial tropical", de: "Nur tropisches Oberflächenwasser", nl: "Alleen tropisch oppervlaktewater" },
        { en: "Deep water from the Arctic", es: "Agua profunda del Ártico", de: "Tiefenwasser aus der Arktis", nl: "Diep water uit de Arctis" },
        { en: "River water discharge", es: "Descarga de agua fluvial", de: "Flusswasserabfluss", nl: "Rivier water afvoer" }
      ],
      correct: 0,
      explanation: {
        en: "Eighteen Degree Water is a classic example of a mode water, formed by deep winter convection in the Sargasso Sea. It has a remarkably uniform temperature near 18°C and occupies a thick layer in the main thermocline of the North Atlantic subtropical gyre.",
        es: "El Agua de Dieciocho Grados es un ejemplo clásico de agua modal, formada por convección invernal profunda en el Mar de Sargazos. Tiene una temperatura notablemente uniforme cerca de 18°C y ocupa una capa gruesa en la termoclina principal del giro subtropical del Atlántico Norte.",
        de: "Achtzehn-Grad-Wasser ist ein klassisches Beispiel für Modenwasser, gebildet durch tiefe winterliche Konvektion in der Sargassosee. Es hat eine bemerkenswert einheitliche Temperatur nahe 18°C und nimmt eine dicke Schicht in der Hauptthermokline des nordatlantischen subtropischen Wirbels ein.",
        nl: "Achttien Graden Water is een klassiek voorbeeld van mode water, gevormd door diepe winter convectie in de Sargasso Zee. Het heeft een opmerkelijk uniforme temperatuur nabij 18°C en neemt een dikke laag in de hoofdthermocline van de Noord-Atlantische subtropische gyre in."
      }
    },
    {
      question: {
        en: "What is the role of the Somali Current system?",
        es: "¿Cuál es el papel del sistema de la Corriente de Somalia?",
        de: "Welche Rolle spielt das Somalia-Stromsystem?",
        nl: "Wat is de rol van het Somalische Stroomsysteem?"
      },
      options: [
        { en: "A seasonally reversing boundary current driven by monsoon winds in the western Indian Ocean", es: "Una corriente de frontera que se invierte estacionalmente impulsada por vientos monzónicos en el océano Índico occidental", de: "Ein saisonal umkehrender Grenzstrom, angetrieben durch Monsunwinde im westlichen Indischen Ozean", nl: "Een seizoensgebonden omkerende grensstroming gedreven door moessonwinden in de westelijke Indische Oceaan" },
        { en: "A constant eastward current", es: "Una corriente constante hacia el este", de: "Ein konstanter ostwärts gerichteter Strom", nl: "Een constante oostwaartse stroming" },
        { en: "Only a deep water current", es: "Solo una corriente de agua profunda", de: "Nur ein Tiefwasserstrom", nl: "Alleen een diepe waterstroming" },
        { en: "A current that never changes direction", es: "Una corriente que nunca cambia de dirección", de: "Ein Strom, der niemals die Richtung ändert", nl: "Een stroming die nooit van richting verandert" }
      ],
      correct: 0,
      explanation: {
        en: "The Somali Current system is a remarkable western boundary current in the Indian Ocean that completely reverses direction twice yearly in response to the monsoon wind patterns. During the southwest monsoon, it flows northeastward with intense upwelling, while during the northeast monsoon, it flows southward.",
        es: "El sistema de la Corriente de Somalia es una notable corriente de frontera occidental en el Océano Índico que invierte completamente la dirección dos veces al año en respuesta a los patrones de viento monzónico. Durante el monzón del suroeste, fluye hacia el noreste con afloramiento intenso, mientras que durante el monzón del noreste, fluye hacia el sur.",
        de: "Das Somalia-Stromsystem ist ein bemerkenswerter westlicher Grenzstrom im Indischen Ozean, der als Reaktion auf die Monsunwindmuster zweimal jährlich vollständig die Richtung umkehrt. Während des Südwestmonsuns fließt er nordostwärts mit intensivem Auftrieb, während des Nordostmonsuns fließt er südwärts.",
        nl: "Het Somalische Stroomsysteem is een opmerkelijke westelijke grensstroming in de Indische Oceaan die tweemaal per jaar volledig van richting omkeert als reactie op de moessonwindpatronen. Tijdens de zuidwest moesson stroomt het noordoostwaarts met intense opwelling, terwijl het tijdens de noordoost moesson zuidwaarts stroomt."
      }
    },
    {
      question: {
        en: "What is the Antarctic Bottom Water formation mechanism in the Weddell Sea?",
        es: "¿Cuál es el mecanismo de formación del Agua de Fondo Antártica en el Mar de Weddell?",
        de: "Was ist der Bildungsmechanismus von Antarktischem Bodenwasser in der Weddellsee?",
        nl: "Wat is het vormingsmechanisme van Antarctisch Bodemwater in de Weddell Zee?"
      },
      options: [
        { en: "Brine rejection during sea ice formation creating dense, cold water that sinks to the bottom", es: "Rechazo de salmuera durante la formación de hielo marino creando agua densa y fría que se hunde hasta el fondo", de: "Sole-Verwerfung während der Meereisbildung, die dichtes, kaltes Wasser erzeugt, das zum Boden absinkt", nl: "Pekel afwijzing tijdens zee-ijs vorming creëerend dicht, koud water dat naar de bodem zinkt" },
        { en: "Only wind-driven mixing", es: "Solo mezcla impulsada por viento", de: "Nur windgetriebene Vermischung", nl: "Alleen wind-gedreven menging" },
        { en: "River discharge from Antarctica", es: "Descarga fluvial desde la Antártida", de: "Flusszufluss aus der Antarktis", nl: "Rivier afvoer vanuit Antarctica" },
        { en: "Evaporation in summer only", es: "Solo evaporación en verano", de: "Nur Verdunstung im Sommer", nl: "Alleen verdamping in de zomer" }
      ],
      correct: 0,
      explanation: {
        en: "Antarctic Bottom Water formation in the Weddell Sea occurs through a process called brine rejection. When sea ice forms, salt is expelled, creating very cold, dense, high-salinity water that sinks to the ocean floor. This process is enhanced by katabatic winds and continental shelf processes.",
        es: "La formación del Agua de Fondo Antártica en el Mar de Weddell ocurre a través de un proceso llamado rechazo de salmuera. Cuando se forma hielo marino, la sal es expulsada, creando agua muy fría, densa y de alta salinidad que se hunde al fondo oceánico. Este proceso es intensificado por vientos catabáticos y procesos de plataforma continental.",
        de: "Die Bildung Antarktischen Bodenwassers in der Weddellsee erfolgt durch einen Prozess namens Sole-Verwerfung. Wenn sich Meereis bildet, wird Salz ausgestoßen, wodurch sehr kaltes, dichtes, hochsalziges Wasser entsteht, das zum Ozeanboden absinkt. Dieser Prozess wird durch katabatische Winde und Kontinentalschelf-Prozesse verstärkt.",
        nl: "Antarctisch Bodemwater vorming in de Weddell Zee treedt op door een proces genaamd pekel afwijzing. Wanneer zee-ijs vormt, wordt zout uitgestoten, creërend zeer koud, dicht, hoog-saliniteit water dat naar de oceaanbodem zinkt. Dit proces wordt versterkt door katabatische winden en continentaal plat processen."
      }
    },
    {
      question: {
        en: "What is the significance of the Kuroshio Extension?",
        es: "¿Cuál es la importancia de la Extensión de Kuroshio?",
        de: "Was ist die Bedeutung der Kuroshio-Erweiterung?",
        nl: "Wat is de betekenis van de Kuroshio Extensie?"
      },
      options: [
        { en: "The eastward continuation of the Kuroshio Current that becomes a free jet with intense meandering", es: "La continuación hacia el este de la Corriente de Kuroshio que se convierte en un chorro libre con meandreo intenso", de: "Die ostwärtige Fortsetzung des Kuroshio-Stroms, der zu einem freien Strahl mit intensiver Mäandrierung wird", nl: "De oostwaartse voortzetting van de Kuroshio Stroom die een vrije straal wordt met intense meanderende" },
        { en: "A shallow coastal current only", es: "Solo una corriente costera superficial", de: "Nur ein flacher Küstenstrom", nl: "Alleen een ondiepe kuststroming" },
        { en: "A current that flows only in winter", es: "Una corriente que fluye solo en invierno", de: "Ein Strom, der nur im Winter fließt", nl: "Een stroming die alleen in de winter stroomt" },
        { en: "A deep water mass formation region", es: "Una región de formación de masa de agua profunda", de: "Eine Tiefenwassermassen-Bildungsregion", nl: "Een diepe watermassa vormingsgebied" }
      ],
      correct: 0,
      explanation: {
        en: "The Kuroshio Extension is the eastward continuation of the Kuroshio Current after it separates from the Japanese coast. It becomes a free jet that exhibits intense meandering, creating large eddies and playing a crucial role in heat transport and air-sea interaction in the North Pacific.",
        es: "La Extensión de Kuroshio es la continuación hacia el este de la Corriente de Kuroshio después de que se separa de la costa japonesa. Se convierte en un chorro libre que exhibe meandreo intenso, creando grandes remolinos y desempeñando un papel crucial en el transporte de calor y la interacción aire-mar en el Pacífico Norte.",
        de: "Die Kuroshio-Erweiterung ist die ostwärtige Fortsetzung des Kuroshio-Stroms, nachdem er sich von der japanischen Küste getrennt hat. Er wird zu einem freien Strahl, der intensive Mäandrierung zeigt, große Wirbel erzeugt und eine entscheidende Rolle beim Wärmetransport und der Luft-See-Wechselwirkung im Nordpazifik spielt.",
        nl: "De Kuroshio Extensie is de oostwaartse voortzetting van de Kuroshio Stroom nadat deze zich heeft gescheiden van de Japanse kust. Het wordt een vrije straal die intense meandering vertoont, grote wervelingen creëert en een cruciale rol speelt in warmtetransport en lucht-zee interactie in de Noord-Pacifische Oceaan."
      }
    },
    {
      question: {
        en: "What drives the formation of subtropical underwater?",
        es: "¿Qué impulsa la formación de agua submarina subtropical?",
        de: "Was treibt die Bildung von subtropischem Unterwasser an?",
        nl: "Wat drijft de vorming van subtropisch onderwater aan?"
      },
      options: [
        { en: "High evaporation rates in subtropical regions creating a subsurface salinity maximum", es: "Altas tasas de evaporación en regiones subtropicales creando un máximo de salinidad subsuperficial", de: "Hohe Verdunstungsraten in subtropischen Regionen, die ein suboberflächen Salzgehaltmaximum erzeugen", nl: "Hoge verdampingssnelheden in subtropische gebieden creërend een onderoppervlakte saliniteitsmaximum" },
        { en: "Only winter cooling", es: "Solo enfriamiento invernal", de: "Nur winterliche Abkühlung", nl: "Alleen winter afkoeling" },
        { en: "Deep convection processes", es: "Procesos de convección profunda", de: "Tiefe Konvektionsprozesse", nl: "Diepe convectie processen" },
        { en: "River discharge effects", es: "Efectos de descarga fluvial", de: "Flusszuflusseffekte", nl: "Rivier afvoer effecten" }
      ],
      correct: 0,
      explanation: {
        en: "Subtropical underwater forms in the centers of subtropical gyres where high evaporation rates exceed precipitation, creating surface waters with elevated salinity. These waters are then subducted, forming a characteristic subsurface salinity maximum that can be traced across ocean basins.",
        es: "El agua submarina subtropical se forma en los centros de giros subtropicales donde las altas tasas de evaporación exceden la precipitación, creando aguas superficiales con salinidad elevada. Estas aguas luego se subducen, formando un máximo de salinidad subsuperficial característico que puede rastrearse a través de cuencas oceánicas.",
        de: "Subtropisches Unterwasser bildet sich in den Zentren subtropischer Wirbel, wo hohe Verdunstungsraten den Niederschlag übersteigen und Oberflächenwasser mit erhöhtem Salzgehalt erzeugen. Diese Wasser werden dann subduziert und bilden ein charakteristisches suboberflächen Salzgehaltmaximum, das über Ozeanbecken verfolgt werden kann.",
        nl: "Subtropisch onderwater vormt zich in de centra van subtropische gyres waar hoge verdampingssnelheden de neerslag overtreffen, oppervlaktewateren creërend met verhoogde saliniteit. Deze wateren worden dan gesubduceerd, vormend een karakteristiek onderoppervlakte saliniteitsmaximum dat over oceaanbekkens kan worden gevolgd."
      }
    },
    {
      question: {
        en: "What characterizes the Circumpolar Deep Water mass?",
        es: "¿Qué caracteriza la masa de Agua Profunda Circumpolar?",
        de: "Was charakterisiert die Zirkumpolare Tiefenwassermasse?",
        nl: "Wat kenmerkt de Circumpolaire Diepe Watermassa?"
      },
      options: [
        { en: "A mixture of North Atlantic Deep Water and other water masses circulating around Antarctica", es: "Una mezcla de Agua Profunda del Atlántico Norte y otras masas de agua que circulan alrededor de la Antártida", de: "Eine Mischung aus Nordatlantischem Tiefenwasser und anderen Wassermassen, die um die Antarktis zirkulieren", nl: "Een mengsel van Noord-Atlantisch Diep Water en andere watermassa's circulerend rond Antarctica" },
        { en: "Only Antarctic-formed water", es: "Solo agua formada en la Antártida", de: "Nur antarktisch gebildetes Wasser", nl: "Alleen Antarctisch gevormd water" },
        { en: "Purely North Atlantic water", es: "Agua puramente del Atlántico Norte", de: "Rein nordatlantisches Wasser", nl: "Puur Noord-Atlantisch water" },
        { en: "Surface water only", es: "Solo agua superficial", de: "Nur Oberflächenwasser", nl: "Alleen oppervlaktewater" }
      ],
      correct: 0,
      explanation: {
        en: "Circumpolar Deep Water (CDW) is the most voluminous water mass in the Southern Ocean, formed by the mixing of North Atlantic Deep Water with other water masses as they circulate around Antarctica via the Antarctic Circumpolar Current. It plays a key role in global ocean circulation and ventilation.",
        es: "El Agua Profunda Circumpolar (APC) es la masa de agua más voluminosa en el Océano Austral, formada por la mezcla del Agua Profunda del Atlántico Norte con otras masas de agua mientras circulan alrededor de la Antártida a través de la Corriente Circumpolar Antártica. Desempeña un papel clave en la circulación y ventilación oceánica global.",
        de: "Zirkulares Tiefenwasser (CDW) ist die voluminöseste Wassermasse im Südlichen Ozean, gebildet durch die Vermischung von Nordatlantischem Tiefenwasser mit anderen Wassermassen, während sie über den Antarktischen Zirkumpolarstrom um die Antarktis zirkulieren. Es spielt eine Schlüsselrolle in der globalen Ozeanzirkulation und Belüftung.",
        nl: "Circumpolair Diep Water (CDW) is de meest volumineuze watermassa in de Zuidelijke Oceaan, gevormd door menging van Noord-Atlantisch Diep Water met andere watermassa's terwijl ze rond Antarctica circuleren via de Antarctische Circumpolaire Stroom. Het speelt een sleutelrol in mondiale oceaancirculatie en ventilatie."
      }
    },
    {
      question: {
        en: "What is the role of the Leeuwin Current?",
        es: "¿Cuál es el papel de la Corriente de Leeuwin?",
        de: "Welche Rolle spielt der Leeuwin-Strom?",
        nl: "Wat is de rol van de Leeuwin Stroom?"
      },
      options: [
        { en: "An unusual poleward-flowing eastern boundary current along Western Australia", es: "Una corriente de frontera oriental que fluye hacia el polo inusual a lo largo de Australia Occidental", de: "Ein ungewöhnlicher polwärts fließender östlicher Grenzstrom entlang Westaustraliens", nl: "Een ongewone poolwaarts stromende oostelijke grensstroming langs West-Australië" },
        { en: "An equatorward current like most eastern boundary currents", es: "Una corriente hacia el ecuador como la mayoría de corrientes de frontera oriental", de: "Ein äquatorwärts gerichteter Strom wie die meisten östlichen Grenzströme", nl: "Een evenaarwaartse stroming zoals de meeste oostelijke grensstromen" },
        { en: "A deep water current only", es: "Solo una corriente de agua profunda", de: "Nur ein Tiefwasserstrom", nl: "Alleen een diepe waterstroming" },
        { en: "A seasonal current that reverses direction", es: "Una corriente estacional que invierte dirección", de: "Ein saisonaler Strom, der die Richtung umkehrt", nl: "Een seizoensgebonden stroming die van richting omkeert" }
      ],
      correct: 0,
      explanation: {
        en: "The Leeuwin Current is unusual among eastern boundary currents because it flows poleward (southward) along the coast of Western Australia, carrying warm, low-salinity tropical water southward. This is opposite to most eastern boundary currents, which flow equatorward and are associated with upwelling.",
        es: "La Corriente de Leeuwin es inusual entre las corrientes de frontera oriental porque fluye hacia el polo (hacia el sur) a lo largo de la costa de Australia Occidental, transportando agua tropical cálida y de baja salinidad hacia el sur. Esto es opuesto a la mayoría de corrientes de frontera oriental, que fluyen hacia el ecuador y están asociadas con afloramiento.",
        de: "Der Leeuwin-Strom ist unter den östlichen Grenzströmen ungewöhnlich, weil er polwärts (südwärts) entlang der Küste Westaustraliens fließt und warmes, salzarmes tropisches Wasser südwärts transportiert. Dies ist das Gegenteil der meisten östlichen Grenzströme, die äquatorwärts fließen und mit Auftrieb verbunden sind.",
        nl: "De Leeuwin Stroom is ongewoon onder oostelijke grensstromen omdat het poolwaarts (zuidwaarts) langs de kust van West-Australië stroomt, warm, laag-saliniteit tropisch water zuidwaarts transporterend. Dit is tegengesteld aan de meeste oostelijke grensstromen, die evenaarwaarts stromen en geassocieerd zijn met opwelling."
      }
    },
    {
      question: {
        en: "What drives the seasonal cycle of the California Current System?",
        es: "¿Qué impulsa el ciclo estacional del Sistema de Corriente de California?",
        de: "Was treibt den saisonalen Zyklus des Kalifornischen Stromsystems an?",
        nl: "Wat drijft de seizoenscyclus van het Californische Stroomsysteem aan?"
      },
      options: [
        { en: "Seasonal changes in wind patterns driving alternating upwelling and downwelling", es: "Cambios estacionales en patrones de viento impulsando afloramiento y hundimiento alternantes", de: "Saisonale Änderungen in Windmustern, die abwechselnden Auftrieb und Abtrieb antreiben", nl: "Seizoensgebonden veranderingen in windpatronen die afwisselende opwelling en neerwaartse stroming aandrijven" },
        { en: "Only temperature changes", es: "Solo cambios de temperatura", de: "Nur Temperaturänderungen", nl: "Alleen temperatuurveranderingen" },
        { en: "Tidal forces exclusively", es: "Solo fuerzas de marea", de: "Ausschließlich Gezeitenkräfte", nl: "Uitsluitend getijdenkrachten" },
        { en: "River discharge variations only", es: "Solo variaciones de descarga fluvial", de: "Nur Flusszuflussvariationen", nl: "Alleen rivier afvoer variaties" }
      ],
      correct: 0,
      explanation: {
        en: "The California Current System exhibits strong seasonal variability driven by changes in wind patterns. During spring and summer, northerly winds drive upwelling of cold, nutrient-rich water. In fall and winter, the winds weaken or reverse, leading to downwelling and the intrusion of warm water from the south.",
        es: "El Sistema de Corriente de California exhibe fuerte variabilidad estacional impulsada por cambios en patrones de viento. Durante primavera y verano, vientos del norte impulsan afloramiento de agua fría rica en nutrientes. En otoño e invierno, los vientos se debilitan o revierten, llevando a hundimiento y la intrusión de agua cálida del sur.",
        de: "Das Kalifornische Stromsystem zeigt starke saisonale Variabilität, angetrieben durch Änderungen in Windmustern. Während Frühling und Sommer treiben nördliche Winde Auftrieb von kaltem, nährstoffreichem Wasser an. Im Herbst und Winter schwächen sich die Winde ab oder kehren um, was zu Abtrieb und dem Eindringen warmen Wassers aus dem Süden führt.",
        nl: "Het Californische Stroomsysteem vertoont sterke seizoensvariabiliteit gedreven door veranderingen in windpatronen. Tijdens lente en zomer drijven noordelijke winden opwelling van koud, nutriënt-rijk water aan. In herfst en winter verzwakken de winden of keren om, leidend tot neerwaartse stroming en de indring van warm water uit het zuiden."
      }
    },
    {
      question: {
        en: "What is the significance of the Bering Strait throughflow?",
        es: "¿Cuál es la importancia del flujo a través del Estrecho de Bering?",
        de: "Was ist die Bedeutung des Bering-Straßen-Durchflusses?",
        nl: "Wat is de betekenis van de Bering Straat doorstroom?"
      },
      options: [
        { en: "The only Arctic-Pacific water exchange pathway affecting global thermohaline circulation", es: "El único camino de intercambio de agua Ártico-Pacífico que afecta la circulación termohalina global", de: "Der einzige Arktisch-Pazifische Wasseraustausch-Pfad, der die globale thermohaline Zirkulation beeinflusst", nl: "De enige Arctisch-Pacifische water uitwisselingsroute die mondiale thermohaliene circulatie beïnvloedt" },
        { en: "Only a seasonal current", es: "Solo una corriente estacional", de: "Nur ein saisonaler Strom", nl: "Alleen een seizoensgebonden stroming" },
        { en: "A deep water formation region", es: "Una región de formación de agua profunda", de: "Eine Tiefenwasserbildungsregion", nl: "Een diepe watervorming gebied" },
        { en: "An equatorial current system", es: "Un sistema de corriente ecuatorial", de: "Ein äquatoriales Stromsystem", nl: "Een equatoriaal stroomsysteem" }
      ],
      correct: 0,
      explanation: {
        en: "The Bering Strait throughflow is the only connection between the Arctic and Pacific Oceans, allowing relatively fresh Pacific water to flow northward into the Arctic Ocean. This exchange plays an important role in Arctic Ocean circulation, sea ice formation, and global thermohaline circulation.",
        es: "El flujo a través del Estrecho de Bering es la única conexión entre los océanos Ártico y Pacífico, permitiendo que agua relativamente dulce del Pacífico fluya hacia el norte hacia el Océano Ártico. Este intercambio desempeña un papel importante en la circulación del Océano Ártico, formación de hielo marino y circulación termohalina global.",
        de: "Der Bering-Straßen-Durchfluss ist die einzige Verbindung zwischen dem Arktischen und Pazifischen Ozean, die es relativ süßem pazifischem Wasser ermöglicht, nordwärts in den Arktischen Ozean zu fließen. Dieser Austausch spielt eine wichtige Rolle in der Arktischen Ozeanzirkulation, Meereisbildung und globalen thermohalinen Zirkulation.",
        nl: "De Bering Straat doorstroom is de enige verbinding tussen de Arctische en Pacifische Oceanen, toelaten relatief zoet Pacifisch water noordwaarts naar de Arctische Oceaan te stromen. Deze uitwisseling speelt een belangrijke rol in Arctische Oceaan circulatie, zee-ijs vorming en mondiale thermohaliene circulatie."
      }
    },
    {
      question: {
        en: "What characterizes the formation of Red Sea Water?",
        es: "¿Qué caracteriza la formación del Agua del Mar Rojo?",
        de: "Was charakterisiert die Bildung von Rotes-Meer-Wasser?",
        nl: "Wat kenmerkt de vorming van Rode Zee Water?"
      },
      options: [
        { en: "Extreme evaporation in a semi-enclosed basin creating very warm, highly saline water", es: "Evaporación extrema en una cuenca semi-cerrada creando agua muy cálida y altamente salina", de: "Extreme Verdunstung in einem halbgeschlossenen Becken, die sehr warmes, hochsalziges Wasser erzeugt", nl: "Extreme verdamping in een semi-afgesloten bekken creërend zeer warm, zeer zout water" },
        { en: "Cold water formation only", es: "Solo formación de agua fría", de: "Nur Kaltwasserbildung", nl: "Alleen koude watervorming" },
        { en: "River discharge effects", es: "Efectos de descarga fluvial", de: "Flusszuflusseffekte", nl: "Rivier afvoer effecten" },
        { en: "Winter cooling processes", es: "Procesos de enfriamiento invernal", de: "Winterliche Abkühlungsprozesse", nl: "Winter afkoeling processen" }
      ],
      correct: 0,
      explanation: {
        en: "Red Sea Water is formed by extreme evaporation in the semi-enclosed Red Sea basin, where evaporation greatly exceeds precipitation. This creates some of the warmest and most saline water masses in the world ocean, which then flow out through the Strait of Bab-el-Mandeb into the Indian Ocean.",
        es: "El Agua del Mar Rojo se forma por evaporación extrema en la cuenca semi-cerrada del Mar Rojo, donde la evaporación excede grandemente la precipitación. Esto crea algunas de las masas de agua más cálidas y salinas en el océano mundial, que luego fluyen hacia afuera a través del Estrecho de Bab-el-Mandeb hacia el Océano Índico.",
        de: "Rotes-Meer-Wasser bildet sich durch extreme Verdunstung im halbgeschlossenen Rote-Meer-Becken, wo die Verdunstung den Niederschlag erheblich übersteigt. Dies erzeugt einige der wärmsten und salzigsten Wassermassen im Weltmeer, die dann durch die Straße von Bab-el-Mandeb in den Indischen Ozean fließen.",
        nl: "Rode Zee Water vormt zich door extreme verdamping in het semi-afgesloten Rode Zee bekken, waar verdamping neerslag aanzienlijk overtreft. Dit creëert enkele van de warmste en meest zoute watermassa's in de wereldoceaan, die dan door de Straat van Bab-el-Mandeb naar de Indische Oceaan stromen."
      }
    },
    {
      question: {
        en: "What is the role of the Irminger Current?",
        es: "¿Cuál es el papel de la Corriente de Irminger?",
        de: "Welche Rolle spielt der Irminger-Strom?",
        nl: "Wat is de rol van de Irminger Stroom?"
      },
      options: [
        { en: "A warm branch of the North Atlantic Current that flows around the Irminger Sea", es: "Una rama cálida de la Corriente del Atlántico Norte que fluye alrededor del Mar de Irminger", de: "Ein warmer Zweig des Nordatlantikstroms, der um die Irmingersee fließt", nl: "Een warme tak van de Noord-Atlantische Stroom die rond de Irminger Zee stroomt" },
        { en: "A cold Arctic current only", es: "Solo una corriente ártica fría", de: "Nur ein kalter arktischer Strom", nl: "Alleen een koude Arctische stroming" },
        { en: "A deep water formation current", es: "Una corriente de formación de agua profunda", de: "Ein Tiefenwasserbildungsstrom", nl: "Een diepe watervorming stroming" },
        { en: "An equatorial current", es: "Una corriente ecuatorial", de: "Ein äquatorialer Strom", nl: "Een equatoriale stroming" }
      ],
      correct: 0,
      explanation: {
        en: "The Irminger Current is a warm branch of the North Atlantic Current that flows northward along the west coast of Iceland and around the Irminger Sea. It transports relatively warm, saline water into the subpolar North Atlantic, moderating the climate of Iceland and playing a role in deep water formation processes.",
        es: "La Corriente de Irminger es una rama cálida de la Corriente del Atlántico Norte que fluye hacia el norte a lo largo de la costa oeste de Islandia y alrededor del Mar de Irminger. Transporta agua relativamente cálida y salina hacia el Atlántico Norte subpolar, moderando el clima de Islandia y desempeñando un papel en procesos de formación de agua profunda.",
        de: "Der Irminger-Strom ist ein warmer Zweig des Nordatlantikstroms, der nordwärts entlang der Westküste Islands und um die Irmingersee fließt. Er transportiert relativ warmes, salziges Wasser in den subpolaren Nordatlantik, mildert das Klima Islands und spielt eine Rolle in Tiefenwasserbildungsprozessen.",
        nl: "De Irminger Stroom is een warme tak van de Noord-Atlantische Stroom die noordwaarts langs de westkust van IJsland en rond de Irminger Zee stroomt. Het transporteert relatief warm, zout water naar de subpolaire Noord-Atlantische Oceaan, modererend het klimaat van IJsland en spelend een rol in diepe watervorming processen."
      }
    },
    {
      question: {
        en: "What drives the formation of Persian Gulf Water?",
        es: "¿Qué impulsa la formación del Agua del Golfo Pérsico?",
        de: "Was treibt die Bildung von Persischer-Golf-Wasser an?",
        nl: "Wat drijft de vorming van Perzische Golf Water aan?"
      },
      options: [
        { en: "Intense evaporation and winter cooling creating dense, saline water that cascades into the Indian Ocean", es: "Evaporación intensa y enfriamiento invernal creando agua densa y salina que se vierte hacia el Océano Índico", de: "Intensive Verdunstung und winterliche Abkühlung, die dichtes, salziges Wasser erzeugt, das in den Indischen Ozean fließt", nl: "Intense verdamping en winter afkoeling creërend dicht, zout water dat naar de Indische Oceaan stroomt" },
        { en: "Only summer heating", es: "Solo calentamiento de verano", de: "Nur sommerliche Erwärmung", nl: "Alleen zomer verwarming" },
        { en: "River discharge from surrounding countries", es: "Descarga fluvial de países circundantes", de: "Flusszufluss aus umliegenden Ländern", nl: "Rivier afvoer uit omringende landen" },
        { en: "Monsoon rainfall effects", es: "Efectos de lluvia monzónica", de: "Monsunregeneffekte", nl: "Moesson regenval effecten" }
      ],
      correct: 0,
      explanation: {
        en: "Persian Gulf Water forms through intense evaporation during summer combined with winter cooling in the shallow Persian Gulf. This creates very dense, highly saline water that flows out through the Strait of Hormuz and cascades down the continental slope into the Arabian Sea, forming a distinctive intermediate water mass.",
        es: "El Agua del Golfo Pérsico se forma a través de evaporación intensa durante el verano combinada con enfriamiento invernal en el Golfo Pérsico poco profundo. Esto crea agua muy densa y altamente salina que fluye hacia afuera a través del Estrecho de Hormuz y se vierte por la pendiente continental hacia el Mar Arábigo, formando una masa de agua intermedia distintiva.",
        de: "Persischer-Golf-Wasser bildet sich durch intensive Verdunstung während des Sommers kombiniert mit winterlicher Abkühlung im flachen Persischen Golf. Dies erzeugt sehr dichtes, hochsalziges Wasser, das durch die Straße von Hormuz abfließt und den Kontinentalhang in das Arabische Meer hinabfließt, wodurch eine charakteristische Zwischenwassermasse entsteht.",
        nl: "Perzische Golf Water vormt zich door intense verdamping tijdens de zomer gecombineerd met winter afkoeling in de ondiepe Perzische Golf. Dit creëert zeer dicht, zeer zout water dat door de Straat van Hormuz naar buiten stroomt en de continentale helling af naar de Arabische Zee stroomt, vormend een onderscheidende tussenwater massa."
      }
    },
    {
      question: {
        en: "What is the significance of the Tasman Leakage?",
        es: "¿Cuál es la importancia de la Filtración de Tasmania?",
        de: "Was ist die Bedeutung der Tasmanischen Leckage?",
        nl: "Wat is de betekenis van de Tasmaanse Lekkage?"
      },
      options: [
        { en: "The transport of Pacific water into the Indian Ocean south of Australia", es: "El transporte de agua del Pacífico hacia el Océano Índico al sur de Australia", de: "Der Transport pazifischen Wassers in den Indischen Ozean südlich von Australien", nl: "Het transport van Pacifisch water naar de Indische Oceaan ten zuiden van Australië" },
        { en: "Only a surface current phenomenon", es: "Solo un fenómeno de corriente superficial", de: "Nur ein Oberflächenströmungsphänomen", nl: "Alleen een oppervlaktestroming fenomeen" },
        { en: "A deep water formation process", es: "Un proceso de formación de agua profunda", de: "Ein Tiefenwasserbildungsprozess", nl: "Een diepe watervorming proces" },
        { en: "An atmospheric phenomenon only", es: "Solo un fenómeno atmosférico", de: "Nur ein atmosphärisches Phänomen", nl: "Alleen een atmosferisch fenomeen" }
      ],
      correct: 0,
      explanation: {
        en: "The Tasman Leakage refers to the transport of Pacific water into the Indian Ocean through passages south of Australia and around Tasmania. This inter-ocean exchange affects the properties of water masses in both oceans and contributes to the global overturning circulation.",
        es: "La Filtración de Tasmania se refiere al transporte de agua del Pacífico hacia el Océano Índico a través de pasajes al sur de Australia y alrededor de Tasmania. Este intercambio inter-oceánico afecta las propiedades de masas de agua en ambos océanos y contribuye a la circulación global de volteo.",
        de: "Die Tasmanische Leckage bezieht sich auf den Transport pazifischen Wassers in den Indischen Ozean durch Passagen südlich von Australien und um Tasmanien. Dieser interozenische Austausch beeinflusst die Eigenschaften von Wassermassen in beiden Ozeanen und trägt zur globalen Umwälzzirkulation bei.",
        nl: "De Tasmaanse Lekkage verwijst naar het transport van Pacifisch water naar de Indische Oceaan door passages ten zuiden van Australië en rond Tasmanië. Deze inter-oceaan uitwisseling beïnvloedt de eigenschappen van watermassa's in beide oceanen en draagt bij aan de mondiale omkeringscirculatie."
      }
    },
    {
      question: {
        en: "What characterizes the East Australian Current Extension?",
        es: "¿Qué caracteriza la Extensión de la Corriente de Australia Oriental?",
        de: "Was charakterisiert die Ost-Australische Stromerweiterung?",
        nl: "Wat kenmerkt de Oost-Australische Stroom Extensie?"
      },
      options: [
        { en: "A warm current that separates from the coast and flows eastward with strong eddy activity", es: "Una corriente cálida que se separa de la costa y fluye hacia el este con fuerte actividad de remolinos", de: "Ein warmer Strom, der sich von der Küste trennt und ostwärts mit starker Wirbelaktivität fließt", nl: "Een warme stroming die zich van de kust scheidt en oostwaarts stroomt met sterke wervelingsactiviteit" },
        { en: "A cold current flowing northward", es: "Una corriente fría que fluye hacia el norte", de: "Ein kalter Strom, der nordwärts fließt", nl: "Een koude stroming die noordwaarts stroomt" },
        { en: "A current that stays close to the coast", es: "Una corriente que permanece cerca de la costa", de: "Ein Strom, der nahe der Küste bleibt", nl: "Een stroming die dicht bij de kust blijft" },
        { en: "A deep water current only", es: "Solo una corriente de agua profunda", de: "Nur ein Tiefwasserstrom", nl: "Alleen een diepe waterstroming" }
      ],
      correct: 0,
      explanation: {
        en: "The East Australian Current Extension occurs when the warm East Australian Current separates from the Australian coast and flows eastward into the Tasman Sea. This separation creates intense mesoscale eddy activity and plays an important role in heat transport and the regional climate of the southwest Pacific.",
        es: "La Extensión de la Corriente de Australia Oriental ocurre cuando la cálida Corriente de Australia Oriental se separa de la costa australiana y fluye hacia el este hacia el Mar de Tasmania. Esta separación crea actividad intensa de remolinos de mesoescala y desempeña un papel importante en el transporte de calor y el clima regional del Pacífico suroeste.",
        de: "Die Ost-Australische Stromerweiterung tritt auf, wenn sich der warme Ost-Australische Strom von der australischen Küste trennt und ostwärts in die Tasmansee fließt. Diese Trennung erzeugt intensive mesoskalige Wirbelaktivität und spielt eine wichtige Rolle beim Wärmetransport und dem regionalen Klima des südwestlichen Pazifiks.",
        nl: "De Oost-Australische Stroom Extensie treedt op wanneer de warme Oost-Australische Stroom zich van de Australische kust scheidt en oostwaarts naar de Tasman Zee stroomt. Deze scheiding creëert intense mesoschalige wervelingsactiviteit en speelt een belangrijke rol in warmtetransport en het regionale klimaat van de zuidwestelijke Stille Oceaan."
      }
    },
    {
      question: {
        en: "What is the role of marginal sea overflows in global circulation?",
        es: "¿Cuál es el papel de los desbordamientos de mares marginales en la circulación global?",
        de: "Welche Rolle spielen Randmeer-Überläufe in der globalen Zirkulation?",
        nl: "Wat is de rol van marginale zee overloops in mondiale circulatie?"
      },
      options: [
        { en: "Dense water formation in marginal seas that contributes to deep ocean ventilation and thermohaline circulation", es: "Formación de agua densa en mares marginales que contribuye a la ventilación oceánica profunda y circulación termohalina", de: "Dichte Wasserbildung in Randmeeren, die zur tiefen Ozeanbelüftung und thermohalinen Zirkulation beiträgt", nl: "Dichte watervorming in marginale zeeën die bijdraagt aan diepe oceaan ventilatie en thermohaliene circulatie" },
        { en: "Only surface water exchange", es: "Solo intercambio de agua superficial", de: "Nur Oberflächenwasseraustausch", nl: "Alleen oppervlaktewater uitwisseling" },
        { en: "Seasonal river discharge effects", es: "Efectos estacionales de descarga fluvial", de: "Saisonale Flusszuflusseffekte", nl: "Seizoensgebonden rivier afvoer effecten" },
        { en: "Atmospheric pressure variations only", es: "Solo variaciones de presión atmosférica", de: "Nur atmosphärische Druckvariationen", nl: "Alleen atmosferische drukvariaties" }
      ],
      correct: 0,
      explanation: {
        en: "Marginal sea overflows occur when dense water formed in semi-enclosed seas (like the Mediterranean, Red Sea, or Persian Gulf) flows over sills into adjacent ocean basins. These overflows are crucial for deep ocean ventilation, contributing to the global thermohaline circulation and maintaining oxygen levels in deep waters.",
        es: "Los desbordamientos de mares marginales ocurren cuando agua densa formada en mares semi-cerrados (como el Mediterráneo, Mar Rojo o Golfo Pérsico) fluye sobre umbrales hacia cuencas oceánicas adyacentes. Estos desbordamientos son cruciales para la ventilación oceánica profunda, contribuyendo a la circulación termohalina global y manteniendo niveles de oxígeno en aguas profundas.",
        de: "Randmeer-Überläufe treten auf, wenn dichtes Wasser, das in halbgeschlossenen Meeren (wie dem Mittelmeer, Roten Meer oder Persischen Golf) gebildet wird, über Schwellen in benachbarte Ozeanbecken fließt. Diese Überläufe sind entscheidend für die tiefe Ozeanbelüftung und tragen zur globalen thermohalinen Zirkulation bei und erhalten Sauerstoffgehalte in tiefen Gewässern aufrecht.",
        nl: "Marginale zee overloops treden op wanneer dicht water gevormd in semi-afgesloten zeeën (zoals de Middellandse Zee, Rode Zee of Perzische Golf) over drempels naar aangrenzende oceaanbekkens stroomt. Deze overloops zijn cruciaal voor diepe oceaan ventilatie, bijdragend aan de mondiale thermohaliene circulatie en het handhaven van zuurstofniveaus in diepe wateren."
      }
    }
  ];

  if (typeof window.addLevel === 'function') {
    window.addLevel('mind-bender/oceanography', level6);
  }
})();
