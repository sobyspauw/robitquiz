// Volcanology - Level 10: Cutting-edge Volcanology Research
(function() {
  const level10 = {
    name: {
      en: "Cutting-edge Volcanology Research",
      es: "Investigación Vulcanológica de Vanguardia",
      de: "Hochmoderne Vulkanologie-Forschung",
      nl: "Geavanceerd Vulkanologie Onderzoek"
    },
    questions: [
      {
        question: {
          en: "How are machine learning algorithms revolutionizing volcanic eruption forecasting?",
          es: "¿Cómo están revolucionando los algoritmos de aprendizaje automático el pronóstico de erupciones volcánicas?",
          de: "Wie revolutionieren maschinelle Lernalgorithmen die Vorhersage vulkanischer Eruptionen?",
          nl: "Hoe revolutioneren machine learning algoritmen vulkanische eruptie voorspelling?"
        },
        options: [
          { en: "AI analyzes multi-parameter datasets identifying subtle precursory patterns invisible to traditional methods", es: "IA analiza conjuntos de datos multiparámetro identificando patrones precursores sutiles invisibles para métodos tradicionales", de: "KI analysiert Mehrparameter-Datensätze und identifiziert subtile Vorläufermuster, die für traditionelle Methoden unsichtbar sind", nl: "AI analyseert multi-parameter datasets identificerend subtiele precursoire patronen onzichtbaar voor traditionele methoden" },
          { en: "Only improves data storage capacity", es: "Solo mejora capacidad de almacenamiento de datos", de: "Verbessert nur Datenspeicherkapazität", nl: "Verbetert alleen gegevenopslagcapaciteit" },
          { en: "Has no application in volcanology", es: "No tiene aplicación en vulcanología", de: "Hat keine Anwendung in der Vulkanologie", nl: "Heeft geen toepassing in vulkanologie" },
          { en: "Only works for individual parameters", es: "Solo funciona para parámetros individuales", de: "Funktioniert nur für einzelne Parameter", nl: "Werkt alleen voor individuele parameters" }
        ],
        correct: 0,
        explanation: {
          en: "Machine learning is transforming eruption forecasting by processing vast, multi-dimensional datasets including seismic waveforms, InSAR deformation, gas chemistry, thermal imagery, and gravity changes. Deep learning networks can identify complex, non-linear patterns and subtle precursory signatures that escape human detection, while ensemble methods improve prediction reliability by combining multiple algorithms and uncertainty quantification.",
          es: "El aprendizaje automático está transformando el pronóstico de erupciones procesando vastos conjuntos de datos multidimensionales incluyendo formas de onda sísmicas, deformación InSAR, química de gases, imágenes térmicas y cambios de gravedad. Las redes de aprendizaje profundo pueden identificar patrones complejos no lineales y firmas precursores sutiles que escapan a la detección humana, mientras métodos de conjunto mejoran confiabilidad de predicción combinando múltiples algoritmos y cuantificación de incertidumbre.",
          de: "Maschinelles Lernen transformiert Eruptionsvorhersagen durch Verarbeitung riesiger, multidimensionaler Datensätze einschließlich seismischer Wellenformen, InSAR-Deformation, Gaschemie, thermische Bildgebung und Gravitationsänderungen. Deep-Learning-Netzwerke können komplexe, nichtlineare Muster und subtile Vorläufersignaturen identifizieren, die der menschlichen Erkennung entgehen, während Ensemble-Methoden die Vorhersagezuverlässigkeit durch Kombination mehrerer Algorithmen und Unsicherheitsquantifizierung verbessern.",
          nl: "Machine learning transformeert eruptie voorspelling door verwerking van enorme, multidimensionale datasets inclusief seismische golfvormen, InSAR deformatie, gaschemie, thermische beeldvorming en zwaartekracht veranderingen. Deep learning netwerken kunnen complexe, niet-lineaire patronen en subtiele precursoire handtekeningen identificeren die aan menselijke detectie ontsnappen, terwijl ensemble methoden voorspellingsbetrouwbaarheid verbeteren door meerdere algoritmen en onzekerheids kwantificatie te combineren."
        }
      },
      {
        question: {
          en: "What new insights have space-based observations provided about global volcanic activity?",
          es: "¿Qué nuevas perspectivas han proporcionado las observaciones espaciales sobre actividad volcánica global?",
          de: "Welche neuen Erkenntnisse haben weltraumbasierte Beobachtungen über globale vulkanische Aktivität geliefert?",
          nl: "Welke nieuwe inzichten hebben ruimte-gebaseerde waarnemingen geboden over globale vulkanische activiteit?"
        },
        options: [
          { en: "Satellite systems now provide continuous global monitoring, detecting unreported eruptions and quantifying emissions in real-time", es: "Sistemas satelitales ahora proporcionan monitoreo global continuo, detectando erupciones no reportadas y cuantificando emisiones en tiempo real", de: "Satellitensysteme bieten nun kontinuierliche globale Überwachung, erkennen nicht gemeldete Eruptionen und quantifizieren Emissionen in Echtzeit", nl: "Satellietsystemen bieden nu continue globale monitoring, detecterend niet-gerapporteerde erupties en kwantificerend emissies in real-time" },
          { en: "Only provide better photographs", es: "Solo proporcionan mejores fotografías", de: "Bieten nur bessere Fotografien", nl: "Bieden alleen betere foto's" },
          { en: "Cannot detect volcanic activity", es: "No pueden detectar actividad volcánica", de: "Können vulkanische Aktivität nicht erkennen", nl: "Kunnen vulkanische activiteit niet detecteren" },
          { en: "Only work during daylight hours", es: "Solo funcionan durante horas de día", de: "Funktionieren nur bei Tageslicht", nl: "Werken alleen tijdens daglichturen" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced satellite missions like Sentinel-2, MODIS, OMI, TROPOMI, and GOES provide unprecedented global volcanic monitoring capabilities. These systems detect thermal anomalies, measure SO2 and ash emissions, track deformation through InSAR, monitor ground displacement, and identify previously unknown eruptions in remote areas. Real-time data enables rapid aviation hazard warnings and climate impact assessments, while long-term records reveal global volcanic patterns and trends.",
          es: "Misiones satelitales avanzadas como Sentinel-2, MODIS, OMI, TROPOMI y GOES proporcionan capacidades de monitoreo volcánico global sin precedentes. Estos sistemas detectan anomalías térmicas, miden emisiones de SO2 y ceniza, rastrean deformación a través de InSAR, monitorean desplazamiento de suelo e identifican erupciones previamente desconocidas en áreas remotas. Datos en tiempo real permiten advertencias rápidas de peligros de aviación y evaluaciones de impacto climático, mientras registros a largo plazo revelan patrones y tendencias volcánicas globales.",
          de: "Fortgeschrittene Satellitenmissionen wie Sentinel-2, MODIS, OMI, TROPOMI und GOES bieten beispiellose globale vulkanische Überwachungsfähigkeiten. Diese Systeme erkennen thermische Anomalien, messen SO2- und Asche-Emissionen, verfolgen Deformation durch InSAR, überwachen Bodenverschiebung und identifizieren zuvor unbekannte Eruptionen in abgelegenen Gebieten. Echtzeitdaten ermöglichen schnelle Luftfahrtgefahren-Warnungen und Klimaauswirkungsbewertungen, während langfristige Aufzeichnungen globale vulkanische Muster und Trends offenbaren.",
          nl: "Geavanceerde satelliet missies zoals Sentinel-2, MODIS, OMI, TROPOMI en GOES bieden ongekende globale vulkanische monitoring capaciteiten. Deze systemen detecteren thermische anomalieën, meten SO2 en as emissies, volgen deformatie door InSAR, monitoren grondverplaatsing en identificeren eerder onbekende erupties in afgelegen gebieden. Real-time gegevens maken snelle luchtvaart gevaar waarschuwingen en klimaat impact beoordelingen mogelijk, terwijl langetermijn records globale vulkanische patronen en trends onthullen."
        }
      },
      {
        question: {
          en: "How are supervolcano monitoring systems advancing our understanding of caldera dynamics?",
          es: "¿Cómo están avanzando los sistemas de monitoreo de supervolcanes en nuestro entendimiento de la dinámica de calderas?",
          de: "Wie fördern Supervulkan-Überwachungssysteme unser Verständnis der Caldera-Dynamik?",
          nl: "Hoe bevorderen supervulkaan monitoring systemen ons begrip van caldera dynamiek?"
        },
        options: [
          { en: "Dense sensor networks reveal complex magma chamber processes, ground deformation patterns, and hydrothermal system evolution", es: "Redes densas de sensores revelan procesos complejos de cámaras magmáticas, patrones de deformación de suelo y evolución de sistemas hidrotermales", de: "Dichte Sensornetzwerke enthüllen komplexe Magmakammerprozesse, Bodendeformationsmuster und hydrothermale Systementwicklung", nl: "Dichte sensor netwerken onthullen complexe magmakamer processen, gronddeformatie patronen en hydrothermale systeem evolutie" },
          { en: "Only monitor surface temperature", es: "Solo monitorean temperatura superficial", de: "Überwachen nur Oberflächentemperatur", nl: "Monitoren alleen oppervlakte temperatuur" },
          { en: "Cannot detect subsurface processes", es: "No pueden detectar procesos subsuperficiales", de: "Können subsurface Prozesse nicht erkennen", nl: "Kunnen ondergrondse processen niet detecteren" },
          { en: "Are too expensive to deploy", es: "Son demasiado costosos para desplegar", de: "Sind zu teuer zur Bereitstellung", nl: "Zijn te duur om in te zetten" }
        ],
        correct: 0,
        explanation: {
          en: "Modern supervolcano monitoring employs dense arrays of seismometers, GPS stations, tiltmeters, gravimeters, gas sensors, and thermal cameras providing unprecedented resolution of caldera processes. Advanced techniques like ambient noise tomography image magma chamber geometry, persistent scatterer InSAR tracks millimeter-scale deformation, and multigas sensors monitor volatile fluxes, revealing complex interactions between magmatic, hydrothermal, and tectonic processes in systems like Yellowstone and Long Valley.",
          es: "El monitoreo moderno de supervolcanes emplea arreglos densos de sismómetros, estaciones GPS, inclinómetros, gravímetros, sensores de gas y cámaras térmicas proporcionando resolución sin precedentes de procesos de caldera. Técnicas avanzadas como tomografía de ruido ambiental visualizan geometría de cámara magmática, InSAR de dispersor persistente rastrea deformación a escala de milímetro, y sensores multigas monitorean flujos volátiles, revelando interacciones complejas entre procesos magmáticos, hidrotermales y tectónicos en sistemas como Yellowstone y Long Valley.",
          de: "Moderne Supervulkan-Überwachung verwendet dichte Arrays von Seismometern, GPS-Stationen, Neigungsmessern, Gravimetern, Gassensoren und Wärmekameras, die beispiellose Auflösung von Caldera-Prozessen bieten. Fortgeschrittene Techniken wie Umgebungsgeräusch-Tomographie bilden Magmakammer-Geometrie ab, persistente Streuer-InSAR verfolgt millimetermaßstäbliche Deformation, und Multigas-Sensoren überwachen volatile Flüsse und enthüllen komplexe Wechselwirkungen zwischen magmatischen, hydrothermalen und tektonischen Prozessen in Systemen wie Yellowstone und Long Valley.",
          nl: "Moderne supervulkaan monitoring gebruikt dichte arrays van seismometers, GPS stations, hellingsmeters, gravimeters, gas sensoren en thermische camera's biedend ongekende resolutie van caldera processen. Geavanceerde technieken zoals omgevingsgeluid tomografie beelden magmakamer geometrie af, persistente scatterer InSAR volgt millimeter-schaal deformatie, en multigas sensoren monitoren vluchtige fluxen, onthullend complexe interacties tussen magmatische, hydrothermale en tektonische processen in systemen zoals Yellowstone en Long Valley."
        }
      },
      {
        question: {
          en: "What role do volatiles play in controlling magma storage and eruption dynamics according to recent research?",
          es: "¿Qué papel juegan los volátiles en controlar almacenamiento de magma y dinámica de erupción según investigación reciente?",
          de: "Welche Rolle spielen Volatile bei der Kontrolle von Magmalagerung und Eruptionsdynamik laut aktueller Forschung?",
          nl: "Welke rol spelen vluchtige stoffen in het controleren van magma opslag en eruptie dynamiek volgens recent onderzoek?"
        },
        options: [
          { en: "Volatiles create critical pressure thresholds controlling eruption triggering and influence magma buoyancy, storage depth, and rheology", es: "Volátiles crean umbrales de presión críticos controlando activación de erupción e influyen flotabilidad de magma, profundidad de almacenamiento y reología", de: "Volatile schaffen kritische Druckschwellen, die Eruptionsauslösung kontrollieren und beeinflussen Magmaauftrieb, Lagerungstiefe und Rheologie", nl: "Vluchtige stoffen creëren kritische druk drempels controlerend eruptie activering en beïnvloeden magma drijfvermogen, opslag diepte en reologie" },
          { en: "Volatiles only affect gas emissions", es: "Volátiles solo afectan emisiones de gas", de: "Volatile beeinflussen nur Gasemissionen", nl: "Vluchtige stoffen beïnvloeden alleen gasemissies" },
          { en: "Have no influence on eruption processes", es: "No tienen influencia en procesos de erupción", de: "Haben keinen Einfluss auf Eruptionsprozesse", nl: "Hebben geen invloed op eruptie processen" },
          { en: "Only important during crystallization", es: "Solo importantes durante cristalización", de: "Nur wichtig während Kristallisation", nl: "Alleen belangrijk tijdens kristallisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Cutting-edge research reveals volatiles as fundamental controllers of magmatic systems: H2O and CO2 solubility determines magma storage depths and creates pressure-release triggers for eruptions, volatile oversaturation drives explosive fragmentation, dissolved volatiles affect magma density controlling buoyancy and ascent rates, and volatile gradients within reservoirs control convection patterns and residence times, fundamentally linking volatile behavior to eruption forecasting and hazard assessment.",
          es: "Investigación de vanguardia revela volátiles como controladores fundamentales de sistemas magmáticos: solubilidad de H2O y CO2 determina profundidades de almacenamiento de magma y crea activadores de liberación de presión para erupciones, sobresaturación volátil impulsa fragmentación explosiva, volátiles disueltos afectan densidad de magma controlando flotabilidad y tasas de ascenso, y gradientes volátiles dentro de reservorios controlan patrones de convección y tiempos de residencia, vinculando fundamentalmente comportamiento volátil a pronóstico de erupción y evaluación de peligros.",
          de: "Hochmoderne Forschung enthüllt Volatile als fundamentale Kontrollen magmatischer Systeme: H2O- und CO2-Löslichkeit bestimmt Magmalagerungstiefen und schafft Druckentlastungs-Auslöser für Eruptionen, Volatil-Übersättigung treibt explosive Fragmentierung an, gelöste Volatile beeinflussen Magmadichte und kontrollieren Auftrieb und Aufstiegsraten, und volatile Gradienten innerhalb von Reservoirs kontrollieren Konvektionsmuster und Verweilzeiten, wodurch volatiles Verhalten fundamental mit Eruptionsvorhersage und Gefahrenbewertung verknüpft wird.",
          nl: "Geavanceerd onderzoek onthult vluchtige stoffen als fundamentele controllers van magmatische systemen: H2O en CO2 oplosbaarheid bepaalt magma opslag diepten en creëert druk-vrijgave triggers voor erupties, vluchtige oververzadiging drijft explosieve fragmentatie aan, opgeloste vluchtige stoffen beïnvloeden magma dichtheid controlerend drijfvermogen en stijgsnelheden, en vluchtige gradiënten binnen reservoirs controleren convectie patronen en verblijftijden, fundamenteel verbindend vluchtig gedrag aan eruptie voorspelling en gevaar beoordeling."
        }
      },
      {
        question: {
          en: "How are fiber optic sensing technologies revolutionizing volcanic monitoring?",
          es: "¿Cómo están revolucionando las tecnologías de detección de fibra óptica el monitoreo volcánico?",
          de: "Wie revolutionieren Glasfaser-Sensortechnologien die vulkanische Überwachung?",
          nl: "Hoe revolutioneren glasvezel sensor technologieën vulkanische monitoring?"
        },
        options: [
          { en: "Distributed sensing enables continuous spatial monitoring of strain, temperature, and seismic activity over kilometers of cable", es: "Detección distribuida permite monitoreo espacial continuo de tensión, temperatura y actividad sísmica sobre kilómetros de cable", de: "Verteilte Sensorik ermöglicht kontinuierliche räumliche Überwachung von Spannung, Temperatur und seismischer Aktivität über Kilometer von Kabeln", nl: "Gedistribueerde detectie maakt continue ruimtelijke monitoring van spanning, temperatuur en seismische activiteit over kilometers kabel mogelijk" },
          { en: "Only provides internet connectivity", es: "Solo proporciona conectividad a internet", de: "Bietet nur Internetkonnektivität", nl: "Biedt alleen internetverbinding" },
          { en: "Cannot withstand volcanic environments", es: "No puede resistir ambientes volcánicos", de: "Können vulkanischen Umgebungen nicht standhalten", nl: "Kunnen vulkanische omgevingen niet weerstaan" },
          { en: "Only works underground", es: "Solo funciona bajo tierra", de: "Funktioniert nur unterirdisch", nl: "Werkt alleen ondergronds" }
        ],
        correct: 0,
        explanation: {
          en: "Fiber optic distributed sensing transforms volcanic monitoring by converting kilometers of optical cable into thousands of virtual sensors. Distributed Acoustic Sensing (DAS) detects seismic waves and ground vibrations, Distributed Temperature Sensing (DTS) monitors thermal changes, and Distributed Strain Sensing (DSS) measures ground deformation. These systems provide unprecedented spatial resolution, survive harsh volcanic environments, and enable monitoring in previously inaccessible areas like crater floors and active lava flows.",
          es: "La detección distribuida de fibra óptica transforma el monitoreo volcánico convirtiendo kilómetros de cable óptico en miles de sensores virtuales. Detección Acústica Distribuida (DAS) detecta ondas sísmicas y vibraciones de suelo, Detección de Temperatura Distribuida (DTS) monitorea cambios térmicos, y Detección de Tensión Distribuida (DSS) mide deformación de suelo. Estos sistemas proporcionan resolución espacial sin precedentes, sobreviven ambientes volcánicos hostiles, y permiten monitoreo en áreas previamente inaccesibles como pisos de cráteres y flujos de lava activos.",
          de: "Verteilte Glasfaser-Sensorik transformiert vulkanische Überwachung durch Umwandlung von Kilometern optischen Kabels in Tausende virtueller Sensoren. Verteilte Akustische Sensorik (DAS) erkennt seismische Wellen und Bodenschwingungen, Verteilte Temperatursensorik (DTS) überwacht thermische Änderungen, und Verteilte Spannungssensorik (DSS) misst Bodendeformation. Diese Systeme bieten beispiellose räumliche Auflösung, überstehen raue vulkanische Umgebungen und ermöglichen Überwachung in zuvor unzugänglichen Bereichen wie Kraterböden und aktiven Lavaströmen.",
          nl: "Glasvezel gedistribueerde detectie transformeert vulkanische monitoring door kilometers optische kabel om te zetten in duizenden virtuele sensoren. Gedistribueerde Akoestische Detectie (DAS) detecteert seismische golven en grond trillingen, Gedistribueerde Temperatuur Detectie (DTS) monitort thermische veranderingen, en Gedistribueerde Spanning Detectie (DSS) meet grond deformatie. Deze systemen bieden ongekende ruimtelijke resolutie, overleven harde vulkanische omgevingen, en maken monitoring mogelijk in eerder ontoegankelijke gebieden zoals kratervloeren en actieve lava stromen."
        }
      },
      {
        question: {
          en: "What advances in petrological modeling are revealing about magma chamber processes?",
          es: "¿Qué avances en modelado petrológico están revelando sobre procesos de cámaras magmáticas?",
          de: "Was enthüllen Fortschritte in der petrologischen Modellierung über Magmakammerprozesse?",
          nl: "Wat onthullen vooruitgangen in petrologisch modelleren over magmakamer processen?"
        },
        options: [
          { en: "Thermodynamic models coupled with kinetic processes reveal complex crystallization sequences and magma mixing dynamics", es: "Modelos termodinámicos acoplados con procesos cinéticos revelan secuencias complejas de cristalización y dinámica de mezcla de magma", de: "Thermodynamische Modelle gekoppelt mit kinetischen Prozessen enthüllen komplexe Kristallisationssequenzen und Magmamischungsdynamik", nl: "Thermodynamische modellen gekoppeld met kinetische processen onthullen complexe kristallisatie sequenties en magma mengings dynamiek" },
          { en: "Only describe mineral identification", es: "Solo describen identificación de minerales", de: "Beschreiben nur Mineralidentifikation", nl: "Beschrijven alleen mineraal identificatie" },
          { en: "Cannot model complex systems", es: "No pueden modelar sistemas complejos", de: "Können komplexe Systeme nicht modellieren", nl: "Kunnen complexe systemen niet modelleren" },
          { en: "Are purely theoretical with no practical application", es: "Son puramente teóricos sin aplicación práctica", de: "Sind rein theoretisch ohne praktische Anwendung", nl: "Zijn puur theoretisch zonder praktische toepassing" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced petrological modeling integrates thermodynamic equilibrium calculations with kinetic processes, revealing how magmas evolve in real-world conditions. MELTS-based models predict phase stability and crystallization paths, while incorporating kinetic effects explains textural development and disequilibrium features. Coupled thermal-chemical-mechanical models simulate convection, mixing, and differentiation processes, providing insights into magma chamber architecture, residence times, and eruption triggering mechanisms essential for volcano monitoring interpretation.",
          es: "El modelado petrológico avanzado integra cálculos de equilibrio termodinámico con procesos cinéticos, revelando cómo evolucionan los magmas en condiciones del mundo real. Modelos basados en MELTS predicen estabilidad de fase y caminos de cristalización, mientras incorporar efectos cinéticos explica desarrollo textural y características de desequilibrio. Modelos acoplados térmico-químico-mecánicos simulan procesos de convección, mezcla y diferenciación, proporcionando perspectivas sobre arquitectura de cámara magmática, tiempos de residencia y mecanismos de activación de erupción esenciales para interpretación de monitoreo volcánico.",
          de: "Fortgeschrittene petrologische Modellierung integriert thermodynamische Gleichgewichtsberechnungen mit kinetischen Prozessen und enthüllt, wie sich Magmen unter realen Bedingungen entwickeln. MELTS-basierte Modelle sagen Phasenstabilität und Kristallisationspfade vorher, während die Einbeziehung kinetischer Effekte Texturentwicklung und Ungleichgewichtsmerkmale erklärt. Gekoppelte thermisch-chemisch-mechanische Modelle simulieren Konvektion, Mischung und Differenzierungsprozesse und bieten Einblicke in Magmakammer-Architektur, Verweilzeiten und Eruptionsauslösemechanismen, die für die Interpretation vulkanischer Überwachung wesentlich sind.",
          nl: "Geavanceerde petrologische modellering integreert thermodynamische evenwicht berekeningen met kinetische processen, onthullend hoe magma's evolueren in echte wereldomstandigheden. MELTS-gebaseerde modellen voorspellen fase stabiliteit en kristallisatie paden, terwijl het incorporeren van kinetische effecten texturele ontwikkeling en onevenwichtigheids kenmerken verklaart. Gekoppelde thermisch-chemisch-mechanische modellen simuleren convectie, menging en differentiatie processen, biedend inzichten in magmakamer architectuur, verblijftijden en eruptie activering mechanismen essentieel voor vulkaan monitoring interpretatie."
        }
      },
      {
        question: {
          en: "How is drone technology advancing hazardous volcanic environment research?",
          es: "¿Cómo está avanzando la tecnología de drones la investigación de ambientes volcánicos peligrosos?",
          de: "Wie fördert Drohnentechnologie die Forschung gefährlicher vulkanischer Umgebungen?",
          nl: "Hoe bevordert drone technologie onderzoek van gevaarlijke vulkanische omgevingen?"
        },
        options: [
          { en: "UAVs enable direct sampling of volcanic gases, thermal mapping, and close-range monitoring in previously inaccessible areas", es: "UAVs permiten muestreo directo de gases volcánicos, mapeo térmico y monitoreo de corto alcance en áreas previamente inaccesibles", de: "UAVs ermöglichen direkte Probenahme vulkanischer Gase, thermische Kartierung und Nahbereichsüberwachung in zuvor unzugänglichen Gebieten", nl: "UAV's maken directe bemonstering van vulkanische gassen, thermische kartering en dichtbij monitoring mogelijk in eerder ontoegankelijke gebieden" },
          { en: "Only provide aerial photography", es: "Solo proporcionan fotografía aérea", de: "Bieten nur Luftfotografie", nl: "Bieden alleen luchtfotografie" },
          { en: "Cannot operate in volcanic conditions", es: "No pueden operar en condiciones volcánicas", de: "Können nicht unter vulkanischen Bedingungen arbeiten", nl: "Kunnen niet opereren in vulkanische omstandigheden" },
          { en: "Are too expensive for research use", es: "Son demasiado costosos para uso de investigación", de: "Sind zu teuer für Forschungszwecke", nl: "Zijn te duur voor onderzoek gebruik" }
        ],
        correct: 0,
        explanation: {
          en: "Specialized volcanic drones equipped with gas sensors (DOAS, electrochemical), thermal cameras (LWIR), particle samplers, and magnetometers enable unprecedented access to active volcanic systems. These platforms collect real-time gas flux measurements, map thermal anomalies, sample volcanic ash and aerosols, and monitor crater changes without endangering researchers. Advanced autonomous systems can operate in extreme conditions including acid gas environments and high temperatures, revolutionizing our ability to study active volcanic processes.",
          es: "Drones volcánicos especializados equipados con sensores de gas (DOAS, electroquímicos), cámaras térmicas (LWIR), muestreadores de partículas y magnetómetros permiten acceso sin precedentes a sistemas volcánicos activos. Estas plataformas recolectan mediciones de flujo de gas en tiempo real, mapean anomalías térmicas, muestrean ceniza volcánica y aerosoles, y monitorean cambios de cráter sin poner en peligro investigadores. Sistemas autónomos avanzados pueden operar en condiciones extremas incluyendo ambientes de gas ácido y altas temperaturas, revolucionando nuestra capacidad de estudiar procesos volcánicos activos.",
          de: "Spezialisierte vulkanische Drohnen ausgestattet mit Gassensoren (DOAS, elektrochemisch), Wärmekameras (LWIR), Partikelsammlern und Magnetometern ermöglichen beispiellosen Zugang zu aktiven vulkanischen Systemen. Diese Plattformen sammeln Echtzeit-Gasfluss-Messungen, kartieren thermische Anomalien, sammeln vulkanische Asche und Aerosole und überwachen Kraterveränderungen ohne Gefährdung von Forschern. Fortgeschrittene autonome Systeme können unter extremen Bedingungen einschließlich saurer Gasumgebungen und hohen Temperaturen arbeiten und revolutionieren unsere Fähigkeit, aktive vulkanische Prozesse zu studieren.",
          nl: "Gespecialiseerde vulkanische drones uitgerust met gas sensoren (DOAS, elektrochemisch), thermische camera's (LWIR), deeltje samplers en magnetometers maken ongekende toegang tot actieve vulkanische systemen mogelijk. Deze platforms verzamelen real-time gas flux metingen, kaarten thermische anomalieën, bemonsteren vulkanische as en aerosolen, en monitoren krater veranderingen zonder onderzoekers in gevaar te brengen. Geavanceerde autonome systemen kunnen opereren in extreme omstandigheden inclusief zuur gas omgevingen en hoge temperaturen, revolutionerend ons vermogen om actieve vulkanische processen te bestuderen."
        }
      },
      {
        question: {
          en: "What breakthroughs in understanding crystal textures reveal about magma storage conditions?",
          es: "¿Qué avances en entender texturas de cristal revelan sobre condiciones de almacenamiento de magma?",
          de: "Welche Durchbrüche im Verständnis von Kristalltexturen enthüllen über Magmalagerungsbedingungen?",
          nl: "Welke doorbraken in het begrijpen van kristal texturen onthullen over magma opslag omstandigheden?"
        },
        options: [
          { en: "High-resolution imaging and geochemical analysis decode crystallization timescales and storage depths from zoning patterns", es: "Imágenes de alta resolución y análisis geoquímico decodifican escalas de tiempo de cristalización y profundidades de almacenamiento de patrones de zonación", de: "Hochauflösende Bildgebung und geochemische Analyse dekodieren Kristallisations-Zeitskalen und Lagerungstiefen aus Zonierungsmustern", nl: "Hoge-resolutie beeldvorming en geochemische analyse decoderen kristallisatie tijdschalen en opslag diepten uit zonerings patronen" },
          { en: "Only identify mineral types", es: "Solo identifican tipos de minerales", de: "Identifizieren nur Mineraltypen", nl: "Identificeren alleen mineraal typen" },
          { en: "Cannot reveal storage conditions", es: "No pueden revelar condiciones de almacenamiento", de: "Können Lagerungsbedingungen nicht enthüllen", nl: "Kunnen opslag omstandigheden niet onthullen" },
          { en: "Are purely descriptive", es: "Son puramente descriptivos", de: "Sind rein deskriptiv", nl: "Zijn puur beschrijvend" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced crystal texture analysis combines high-resolution imaging (BSE, CL, micro-CT) with in-situ geochemical techniques (SIMS, LA-ICP-MS, EPMA) to reveal magma storage histories. Oscillatory zoning records pressure-temperature fluctuations, resorption textures indicate mixing events, crystal size distributions reflect nucleation and growth kinetics, and trace element profiles constrain timescales from hours to millennia, providing unprecedented insights into pre-eruptive magma chamber dynamics and processes.",
          es: "El análisis avanzado de textura de cristal combina imágenes de alta resolución (BSE, CL, micro-CT) con técnicas geoquímicas in-situ (SIMS, LA-ICP-MS, EPMA) para revelar historias de almacenamiento de magma. Zonación oscilatoria registra fluctuaciones presión-temperatura, texturas de reabsorción indican eventos de mezcla, distribuciones de tamaño de cristal reflejan cinética de nucleación y crecimiento, y perfiles de elementos traza restringen escalas de tiempo de horas a milenios, proporcionando perspectivas sin precedentes sobre dinámica y procesos de cámaras magmáticas pre-eruptivas.",
          de: "Fortgeschrittene Kristalltextur-Analyse kombiniert hochauflösende Bildgebung (BSE, CL, Micro-CT) mit in-situ geochemischen Techniken (SIMS, LA-ICP-MS, EPMA) zur Enthüllung von Magmalagerungs-Geschichten. Oszillatorische Zonierung zeichnet Druck-Temperatur-Fluktuationen auf, Resorptions-Texturen zeigen Mischungsereignisse an, Kristallgrößenverteilungen reflektieren Nukleations- und Wachstumskinetik, und Spurenelementprofile beschränken Zeitskalen von Stunden bis Jahrtausenden und bieten beispiellose Einblicke in prä-eruptive Magmakammer-Dynamik und -Prozesse.",
          nl: "Geavanceerde kristal textuur analyse combineert hoge-resolutie beeldvorming (BSE, CL, micro-CT) met in-situ geochemische technieken (SIMS, LA-ICP-MS, EPMA) om magma opslag geschiedenissen te onthullen. Oscillerende zonering registreert druk-temperatuur fluctuaties, resorptie texturen geven mengings gebeurtenissen aan, kristal grootte distributies reflecteren nucleatie en groei kinetiek, en spoor element profielen beperken tijdschalen van uren tot millennia, biedend ongekende inzichten in pre-eruptieve magmakamer dynamiek en processen."
        }
      },
      {
        question: {
          en: "How are computational fluid dynamics models improving eruption column and pyroclastic flow predictions?",
          es: "¿Cómo están mejorando los modelos de dinámica de fluidos computacional las predicciones de columna de erupción y flujo piroclástico?",
          de: "Wie verbessern rechnerische Strömungsdynamik-Modelle Vorhersagen von Eruptionssäulen und pyroklastischen Strömen?",
          nl: "Hoe verbeteren computationele vloeistof dynamiek modellen eruptie kolom en pyroklastische stroom voorspellingen?"
        },
        options: [
          { en: "3D multiphase models resolve complex gas-particle interactions, atmospheric coupling, and terrain effects on flow behavior", es: "Modelos multifásicos 3D resuelven interacciones complejas gas-partícula, acoplamiento atmosférico y efectos de terreno en comportamiento de flujo", de: "3D-Mehrphasenmodelle lösen komplexe Gas-Partikel-Wechselwirkungen, atmosphärische Kopplung und Geländeeffekte auf Strömungsverhalten auf", nl: "3D multifase modellen lossen complexe gas-deeltje interacties, atmosferische koppeling en terrein effecten op stroom gedrag op" },
          { en: "Only provide basic wind direction data", es: "Solo proporcionan datos básicos de dirección del viento", de: "Bieten nur grundlegende Windrichtungsdaten", nl: "Bieden alleen basis windrichting data" },
          { en: "Cannot model multiphase flows", es: "No pueden modelar flujos multifásicos", de: "Können Mehrphasenströmungen nicht modellieren", nl: "Kunnen multifase stromen niet modelleren" },
          { en: "Are too slow for real-time applications", es: "Son demasiado lentos para aplicaciones en tiempo real", de: "Sind zu langsam für Echtzeitanwendungen", nl: "Zijn te langzaam voor real-time toepassingen" }
        ],
        correct: 0,
        explanation: {
          en: "State-of-the-art CFD models simulate complex multiphase volcanic flows using Large Eddy Simulation (LES) and advanced turbulence modeling. These models resolve gas-particle interactions, atmospheric stratification effects, complex topography influence, and entrainment processes. High-performance computing enables real-time hazard mapping during eruptions, while ensemble forecasting quantifies uncertainties in ash dispersal and pyroclastic flow runout distances, dramatically improving aviation safety and evacuation planning.",
          es: "Modelos CFD de vanguardia simulan flujos volcánicos multifásicos complejos usando Simulación de Gran Vórtice (LES) y modelado avanzado de turbulencia. Estos modelos resuelven interacciones gas-partícula, efectos de estratificación atmosférica, influencia de topografía compleja y procesos de arrastre. Computación de alto rendimiento permite mapeo de peligros en tiempo real durante erupciones, mientras pronóstico de conjunto cuantifica incertidumbres en dispersión de ceniza y distancias de recorrido de flujo piroclástico, mejorando dramáticamente seguridad de aviación y planificación de evacuación.",
          de: "Hochmoderne CFD-Modelle simulieren komplexe vulkanische Mehrphasenströmungen mit Large Eddy Simulation (LES) und fortgeschrittener Turbulenz-Modellierung. Diese Modelle lösen Gas-Partikel-Wechselwirkungen, atmosphärische Schichtungseffekte, komplexe Topographie-Einflüsse und Entrainment-Prozesse auf. Hochleistungsrechnen ermöglicht Echtzeit-Gefahrenkartierung während Eruptionen, während Ensemble-Vorhersagen Unsicherheiten in Ascheausbreitung und pyroklastischen Strom-Auslaufentfernungen quantifizieren und Luftfahrtsicherheit und Evakuierungsplanung dramatisch verbessern.",
          nl: "State-of-the-art CFD modellen simuleren complexe multifase vulkanische stromen gebruikmakend van Large Eddy Simulation (LES) en geavanceerde turbulentie modellering. Deze modellen lossen gas-deeltje interacties, atmosferische stratificatie effecten, complexe topografie invloed en entrainment processen op. High-performance computing maakt real-time gevaar kartering tijdens erupties mogelijk, terwijl ensemble voorspelling onzekerheden in as verspreiding en pyroklastische stroom uitloop afstanden kwantificeert, dramatisch verbeterend luchtvaart veiligheid en evacuatie planning."
        }
      },
      {
        question: {
          en: "What new understanding of volcanic lightning has emerged from recent electromagnetic studies?",
          es: "¿Qué nuevo entendimiento del rayo volcánico ha surgido de estudios electromagnéticos recientes?",
          de: "Welches neue Verständnis vulkanischer Blitze ist aus aktuellen elektromagnetischen Studien hervorgegangen?",
          nl: "Welk nieuw begrip van vulkanische bliksem is ontstaan uit recente elektromagnetische studies?"
        },
        options: [
          { en: "High-speed imaging and electromagnetic sensors reveal charge separation mechanisms and lightning's role in ash aggregation and removal", es: "Imágenes de alta velocidad y sensores electromagnéticos revelan mecanismos de separación de carga y papel del rayo en agregación y remoción de ceniza", de: "Hochgeschwindigkeits-Bildgebung und elektromagnetische Sensoren enthüllen Ladungstrennungs-Mechanismen und Blitzrolle in Asche-Aggregation und -Entfernung", nl: "Hoge-snelheid beeldvorming en elektromagnetische sensoren onthullen ladingsscheiding mechanismen en bliksem's rol in as aggregatie en verwijdering" },
          { en: "Lightning is purely atmospheric phenomenon", es: "Rayo es fenómeno puramente atmosférico", de: "Blitz ist rein atmosphärisches Phänomen", nl: "Bliksem is puur atmosferisch fenomeen" },
          { en: "Has no impact on volcanic processes", es: "No tiene impacto en procesos volcánicos", de: "Hat keinen Einfluss auf vulkanische Prozesse", nl: "Heeft geen impact op vulkanische processen" },
          { en: "Cannot be studied with current technology", es: "No puede estudiarse con tecnología actual", de: "Kann mit aktueller Technologie nicht untersucht werden", nl: "Kan niet bestudeerd worden met huidige technologie" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced studies using high-speed cameras, lightning mapping arrays, and electromagnetic field measurements reveal volcanic lightning as a complex multiscale phenomenon. Research shows charge separation occurs through triboelectric effects during particle collisions, ice formation in high-altitude plumes, and fracto-emission during explosive fragmentation. Lightning plays crucial roles in ash particle aggregation, chemical reactions producing NOx, and plume electrodynamics affecting dispersal patterns, revolutionizing understanding of eruption column processes.",
          es: "Estudios avanzados usando cámaras de alta velocidad, arreglos de mapeo de rayos y mediciones de campo electromagnético revelan rayo volcánico como fenómeno multiescala complejo. Investigación muestra separación de carga ocurre a través de efectos triboeléctricos durante colisiones de partículas, formación de hielo en plumas de alta altitud y fracto-emisión durante fragmentación explosiva. Rayo juega papeles cruciales en agregación de partículas de ceniza, reacciones químicas produciendo NOx, y electrodinámica de pluma afectando patrones de dispersión, revolucionando entendimiento de procesos de columna de erupción.",
          de: "Fortgeschrittene Studien mit Hochgeschwindigkeits-Kameras, Blitz-Kartierungs-Arrays und elektromagnetischen Feldmessungen enthüllen vulkanische Blitze als komplexes mehrskaliges Phänomen. Forschung zeigt, dass Ladungstrennung durch triboelektrische Effekte während Partikelkollisionen, Eisbildung in hochgelegenen Wolken und Frakto-Emission während explosiver Fragmentierung auftritt. Blitze spielen entscheidende Rollen bei Asche-Partikel-Aggregation, chemischen Reaktionen die NOx produzieren, und Wolken-Elektrodynamik die Dispersions-Muster beeinflusst und revolutioniert das Verständnis von Eruptionssäulenprozessen.",
          nl: "Geavanceerde studies gebruikmakend van hoge-snelheid camera's, bliksem kartering arrays en elektromagnetische veld metingen onthullen vulkanische bliksem als complex multischaal fenomeen. Onderzoek toont ladingsscheiding treedt op door triboelektrische effecten tijdens deeltje botsingen, ijs vorming in hoge-hoogte pluimen, en fracto-emissie tijdens explosieve fragmentatie. Bliksem speelt cruciale rollen in as deeltje aggregatie, chemische reacties producerend NOx, en pluim elektrodynamica beïnvloedend dispersie patronen, revolutionerend begrip van eruptie kolom processen."
        }
      },
      {
        question: {
          en: "How are isotopic fingerprinting techniques advancing our understanding of magma sources and processes?",
          es: "¿Cómo están avanzando las técnicas de huella isotópica nuestro entendimiento de fuentes y procesos de magma?",
          de: "Wie fördern isotopische Fingerabdruck-Techniken unser Verständnis von Magmaquellen und -prozessen?",
          nl: "Hoe bevorderen isotopische vingerafdruk technieken ons begrip van magma bronnen en processen?"
        },
        options: [
          { en: "Multi-isotope analysis reveals mantle heterogeneity, crustal contamination, and temporal evolution of volcanic systems", es: "Análisis multi-isotópico revela heterogeneidad mantélica, contaminación cortical y evolución temporal de sistemas volcánicos", de: "Multi-Isotopen-Analyse enthüllt Mantelheterogenität, Krustenkontamination und zeitliche Evolution vulkanischer Systeme", nl: "Multi-isotoop analyse onthult mantel heterogeniteit, kortale contaminatie en temporale evolutie van vulkanische systemen" },
          { en: "Only useful for age dating", es: "Solo útil para datación de edad", de: "Nur nützlich für Altersdatierung", nl: "Alleen nuttig voor leeftijdsbepaling" },
          { en: "Cannot distinguish different sources", es: "No pueden distinguir diferentes fuentes", de: "Können verschiedene Quellen nicht unterscheiden", nl: "Kunnen verschillende bronnen niet onderscheiden" },
          { en: "Too expensive for routine analysis", es: "Demasiado costoso para análisis rutinario", de: "Zu teuer für Routineanalyse", nl: "Te duur voor routine analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced isotopic studies using high-precision mass spectrometry (TIMS, MC-ICP-MS) analyze multiple isotope systems (Sr-Nd-Pb-Hf-Os-He) to fingerprint magma sources and processes. These techniques reveal mantle domain contributions, crustal assimilation degrees, magma mixing proportions, and temporal changes in source characteristics. Combined with radiogenic isotopes and stable isotope ratios, these analyses constrain magma genesis, storage processes, and volcanic system evolution with unprecedented precision.",
          es: "Estudios isotópicos avanzados usando espectrometría de masas de alta precisión (TIMS, MC-ICP-MS) analizan múltiples sistemas isotópicos (Sr-Nd-Pb-Hf-Os-He) para identificar fuentes y procesos de magma. Estas técnicas revelan contribuciones de dominios mantélicos, grados de asimilación cortical, proporciones de mezcla de magma y cambios temporales en características de fuente. Combinadas con isótopos radiogénicos y proporciones de isótopos estables, estos análisis restringen génesis de magma, procesos de almacenamiento y evolución de sistema volcánico con precisión sin precedentes.",
          de: "Fortgeschrittene isotopische Studien mit hochpräziser Massenspektrometrie (TIMS, MC-ICP-MS) analysieren multiple Isotopensysteme (Sr-Nd-Pb-Hf-Os-He) um Magmaquellen und -prozesse zu identifizieren. Diese Techniken enthüllen Manteldomänen-Beiträge, Krustenassimilations-Grade, Magmamischungs-Verhältnisse und zeitliche Änderungen in Quellcharakteristika. Kombiniert mit radiogenen Isotopen und stabilen Isotopenverhältnissen beschränken diese Analysen Magmagenesis, Lagerungsprozesse und vulkanische Systementwicklung mit beispielloser Präzision.",
          nl: "Geavanceerde isotopische studies gebruikmakend van hoge-precisie massa spectrometrie (TIMS, MC-ICP-MS) analyseren meerdere isotoop systemen (Sr-Nd-Pb-Hf-Os-He) om magma bronnen en processen te identificeren. Deze technieken onthullen mantel domein bijdragen, kortale assimilatie graden, magma menging verhoudingen, en temporale veranderingen in bron karakteristieken. Gecombineerd met radiogene isotopen en stabiele isotoop verhoudingen, beperken deze analyses magma genese, opslag processen en vulkanische systeem evolutie met ongekende precisie."
        }
      },
      {
        question: {
          en: "What role does artificial intelligence play in processing big data from volcano monitoring networks?",
          es: "¿Qué papel juega la inteligencia artificial en procesar big data de redes de monitoreo volcánico?",
          de: "Welche Rolle spielt künstliche Intelligenz bei der Verarbeitung von Big Data aus vulkanischen Überwachungsnetzwerken?",
          nl: "Welke rol speelt kunstmatige intelligentie in het verwerken van big data van vulkaan monitoring netwerken?"
        },
        options: [
          { en: "AI algorithms automatically detect anomalies, classify event types, and integrate multi-sensor data streams in real-time", es: "Algoritmos de IA detectan automáticamente anomalías, clasifican tipos de eventos e integran flujos de datos multi-sensor en tiempo real", de: "KI-Algorithmen erkennen automatisch Anomalien, klassifizieren Ereignistypen und integrieren Multi-Sensor-Datenströme in Echtzeit", nl: "AI algoritmen detecteren automatisch anomalieën, classificeren gebeurtenis typen en integreren multi-sensor data stromen in real-time" },
          { en: "Only stores data more efficiently", es: "Solo almacena datos más eficientemente", de: "Speichert Daten nur effizienter", nl: "Slaat alleen data efficiënter op" },
          { en: "Cannot handle complex datasets", es: "No puede manejar conjuntos de datos complejos", de: "Kann komplexe Datensätze nicht handhaben", nl: "Kan complexe datasets niet handhaben" },
          { en: "Requires too much computational power", es: "Requiere demasiado poder computacional", de: "Benötigt zu viel Rechenleistung", nl: "Vereist te veel rekenkracht" }
        ],
        correct: 0,
        explanation: {
          en: "AI transforms volcano monitoring by processing massive multi-parameter datasets from dense sensor networks. Machine learning algorithms automatically detect seismic events, classify tremor types, identify gas composition anomalies, and recognize deformation patterns. Deep neural networks integrate heterogeneous data (seismic, geodetic, geochemical, thermal) for holistic system state assessment. Real-time processing enables automated alert generation, reduces false alarms, and reveals subtle patterns indicating volcanic unrest, dramatically enhancing monitoring capabilities.",
          es: "IA transforma monitoreo volcánico procesando conjuntos de datos multiparámetro masivos de redes densas de sensores. Algoritmos de aprendizaje automático detectan automáticamente eventos sísmicos, clasifican tipos de temblor, identifican anomalías de composición de gas y reconocen patrones de deformación. Redes neuronales profundas integran datos heterogéneos (sísmicos, geodésicos, geoquímicos, térmicos) para evaluación holística de estado del sistema. Procesamiento en tiempo real permite generación automática de alertas, reduce alarmas falsas y revela patrones sutiles indicando inquietud volcánica, mejorando dramáticamente capacidades de monitoreo.",
          de: "KI transformiert vulkanische Überwachung durch Verarbeitung massiver Mehrparameter-Datensätze aus dichten Sensornetzwerken. Maschinelle Lernalgorithmen erkennen automatisch seismische Ereignisse, klassifizieren Tremortypen, identifizieren Gaszusammensetzungs-Anomalien und erkennen Deformationsmuster. Tiefe neuronale Netzwerke integrieren heterogene Daten (seismisch, geodätisch, geochemisch, thermisch) für holistische Systemzustands-Bewertung. Echtzeitverarbeitung ermöglicht automatische Alarmgenerierung, reduziert Fehlalarme und enthüllt subtile Muster die vulkanische Unruhe anzeigen und verbessert Überwachungsfähigkeiten dramatisch.",
          nl: "AI transformeert vulkaan monitoring door verwerking van massieve multi-parameter datasets van dichte sensor netwerken. Machine learning algoritmen detecteren automatisch seismische gebeurtenissen, classificeren tremor typen, identificeren gas compositie anomalieën en herkennen deformatie patronen. Diepe neurale netwerken integreren heterogene data (seismisch, geodetisch, geochemisch, thermisch) voor holistische systeem staat beoordeling. Real-time verwerking maakt geautomatiseerde alarm generatie mogelijk, vermindert valse alarmen en onthult subtiele patronen die vulkanische onrust aangeven, dramatisch versterkend monitoring capaciteiten."
        }
      },
      {
        question: {
          en: "How are laboratory analog experiments advancing understanding of explosive eruption dynamics?",
          es: "¿Cómo están avanzando los experimentos análogos de laboratorio el entendimiento de la dinámica de erupciones explosivas?",
          de: "Wie fördern Labor-Analogexperimente das Verständnis explosiver Eruptionsdynamik?",
          nl: "Hoe bevorderen laboratorium analoog experimenten begrip van explosieve eruptie dynamiek?"
        },
        options: [
          { en: "Scaled experiments reveal fragmentation physics, gas-particle interactions, and conduit flow processes under controlled conditions", es: "Experimentos a escala revelan física de fragmentación, interacciones gas-partícula y procesos de flujo de conducto bajo condiciones controladas", de: "Skalierte Experimente enthüllen Fragmentierungsphysik, Gas-Partikel-Wechselwirkungen und Kanal-Strömungsprozesse unter kontrollierten Bedingungen", nl: "Geschaalde experimenten onthullen fragmentatie fysica, gas-deeltje interacties en conduit stroom processen onder gecontroleerde omstandigheden" },
          { en: "Cannot simulate real volcanic conditions", es: "No pueden simular condiciones volcánicas reales", de: "Können echte vulkanische Bedingungen nicht simulieren", nl: "Kunnen echte vulkanische omstandigheden niet simuleren" },
          { en: "Only study simple material properties", es: "Solo estudian propiedades simples de materiales", de: "Untersuchen nur einfache Materialeigenschaften", nl: "Bestuderen alleen eenvoudige materiaal eigenschappen" },
          { en: "Are too small-scale to be relevant", es: "Son de escala demasiado pequeña para ser relevantes", de: "Sind zu kleinmaßstäblich um relevant zu sein", nl: "Zijn te klein-schalig om relevant te zijn" }
        ],
        correct: 0,
        explanation: {
          en: "Sophisticated analog experiments using shock tubes, decompression chambers, and high-speed imaging reveal fundamental explosive eruption processes. These studies examine bubble nucleation and growth, fragmentation thresholds, conduit flow regimes, and gas-pyroclast interactions under precisely controlled pressure, temperature, and volatile conditions. Scaling laws derived from experiments enable extrapolation to natural systems, while advanced diagnostics (PIV, pressure sensors, acoustic monitoring) quantify processes impossible to observe directly in nature.",
          es: "Experimentos análogos sofisticados usando tubos de choque, cámaras de descompresión e imágenes de alta velocidad revelan procesos fundamentales de erupción explosiva. Estos estudios examinan nucleación y crecimiento de burbujas, umbrales de fragmentación, regímenes de flujo de conducto e interacciones gas-piroclasto bajo condiciones precisamente controladas de presión, temperatura y volátiles. Leyes de escalamiento derivadas de experimentos permiten extrapolación a sistemas naturales, mientras diagnósticos avanzados (PIV, sensores de presión, monitoreo acústico) cuantifican procesos imposibles de observar directamente en la naturaleza.",
          de: "Raffinierte Analogexperimente mit Stoßrohren, Dekompressionskammern und Hochgeschwindigkeits-Bildgebung enthüllen fundamentale explosive Eruptionsprozesse. Diese Studien untersuchen Blasennukleation und -wachstum, Fragmentierungsschwellen, Kanal-Strömungsregime und Gas-Pyroklast-Wechselwirkungen unter präzise kontrollierten Druck-, Temperatur- und Volatilbedingungen. Aus Experimenten abgeleitete Skalierungsgesetze ermöglichen Extrapolation auf natürliche Systeme, während fortgeschrittene Diagnostik (PIV, Drucksensoren, akustische Überwachung) Prozesse quantifiziert, die in der Natur unmöglich direkt zu beobachten sind.",
          nl: "Geavanceerde analoog experimenten gebruikmakend van shock tubes, decompressie kamers en hoge-snelheid beeldvorming onthullen fundamentele explosieve eruptie processen. Deze studies onderzoeken bel nucleatie en groei, fragmentatie drempels, conduit stroom regimes en gas-pyroklast interacties onder nauwkeurig gecontroleerde druk, temperatuur en vluchtige omstandigheden. Schaalingswetten afgeleid uit experimenten maken extrapolatie naar natuurlijke systemen mogelijk, terwijl geavanceerde diagnostiek (PIV, druk sensoren, akoestische monitoring) processen kwantificeert onmogelijk direct te observeren in de natuur."
        }
      },
      {
        question: {
          en: "What advances in space-based volcanism research are revealing about planetary volcanic processes?",
          es: "¿Qué avances en investigación de vulcanismo espacial están revelando sobre procesos volcánicos planetarios?",
          de: "Welche Fortschritte in weltraumbasierten Vulkanismus-Forschung enthüllen über planetare vulkanische Prozesse?",
          nl: "Welke vooruitgangen in ruimte-gebaseerd vulkanisme onderzoek onthullen over planetaire vulkanische processen?"
        },
        options: [
          { en: "Comparative planetology reveals diverse volcanic processes across solar system bodies with different atmospheric and gravitational conditions", es: "Planetología comparativa revela procesos volcánicos diversos en cuerpos del sistema solar con diferentes condiciones atmosféricas y gravitacionales", de: "Vergleichende Planetologie enthüllt diverse vulkanische Prozesse in Sonnensystemkörpern mit verschiedenen atmosphärischen und gravitationalen Bedingungen", nl: "Vergelijkende planetologie onthult diverse vulkanische processen over zonnestelsel lichamen met verschillende atmosferische en gravitationele omstandigheden" },
          { en: "Only confirms Earth-based theories", es: "Solo confirma teorías basadas en la Tierra", de: "Bestätigt nur erdbasierte Theorien", nl: "Bevestigt alleen aarde-gebaseerde theorieën" },
          { en: "Cannot detect volcanic activity on other planets", es: "No puede detectar actividad volcánica en otros planetas", de: "Kann vulkanische Aktivität auf anderen Planeten nicht erkennen", nl: "Kan vulkanische activiteit op andere planeten niet detecteren" },
          { en: "Limited to historical observations only", es: "Limitado solo a observaciones históricas", de: "Begrenzt nur auf historische Beobachtungen", nl: "Beperkt tot alleen historische waarnemingen" }
        ],
        correct: 0,
        explanation: {
          en: "Planetary volcano studies using spacecraft missions (Cassini, Juno, Mars orbiters) reveal remarkable volcanic diversity: Io's sulfur-driven volcanism with 400+ active volcanoes, Enceladus's cryovolcanism creating geysers, Martian shield volcanoes dwarfing terrestrial examples, and Venus's global resurfacing events. These observations constrain volcanic processes under extreme conditions, revealing how atmospheric pressure, gravity, volatile composition, and planetary evolution influence volcanism, providing crucial insights for understanding Earth's volcanic past and future.",
          es: "Estudios de volcanes planetarios usando misiones espaciales (Cassini, Juno, orbitadores de Marte) revelan diversidad volcánica notable: vulcanismo impulsado por azufre de Io con 400+ volcanes activos, criovolcanismo de Encelado creando géiseres, volcanes escudo marcianos empequeñeciendo ejemplos terrestres, y eventos de resuperficie global de Venus. Estas observaciones restringen procesos volcánicos bajo condiciones extremas, revelando cómo presión atmosférica, gravedad, composición volátil y evolución planetaria influyen vulcanismo, proporcionando perspectivas cruciales para entender pasado y futuro volcánico de la Tierra.",
          de: "Planetare Vulkanstudien mit Raumfahrtmissionen (Cassini, Juno, Mars-Orbiter) enthüllen bemerkenswerte vulkanische Vielfalt: Ios schwefelgetriebener Vulkanismus mit 400+ aktiven Vulkanen, Enceladus' Kryovulkanismus der Geysire schafft, marsianische Schildvulkane die terrestrische Beispiele übertreffen, und Venus' globale Oberflächenerneuerungs-Ereignisse. Diese Beobachtungen beschränken vulkanische Prozesse unter extremen Bedingungen und enthüllen, wie atmosphärischer Druck, Schwerkraft, Volatilzusammensetzung und planetare Evolution Vulkanismus beeinflussen und liefern entscheidende Einblicke zum Verständnis der vulkanischen Vergangenheit und Zukunft der Erde.",
          nl: "Planetaire vulkaan studies gebruikmakend van ruimtevaartuig missies (Cassini, Juno, Mars orbiters) onthullen opmerkelijke vulkanische diversiteit: Io's zwavel-gedreven vulkanisme met 400+ actieve vulkanen, Enceladus's cryovulkanisme creërend geysers, Martiaanse schild vulkanen die terrestrische voorbeelden overtreffen, en Venus's globale heroppervlakking gebeurtenissen. Deze waarnemingen beperken vulkanische processen onder extreme omstandigheden, onthullend hoe atmosferische druk, zwaartekracht, vluchtige compositie en planetaire evolutie vulkanisme beïnvloeden, biedend cruciale inzichten voor begrip van Aarde's vulkanische verleden en toekomst."
        }
      },
      {
        question: {
          en: "How are quantum sensors revolutionizing volcanic gravimetry and magnetic field measurements?",
          es: "¿Cómo están revolucionando los sensores cuánticos la gravimetría volcánica y mediciones de campo magnético?",
          de: "Wie revolutionieren Quantensensoren vulkanische Gravimetrie und Magnetfeldmessungen?",
          nl: "Hoe revolutioneren kwantum sensoren vulkanische gravimetrie en magnetisch veld metingen?"
        },
        options: [
          { en: "Quantum gravimeters and magnetometers achieve unprecedented sensitivity enabling detection of subtle subsurface mass and magnetic changes", es: "Gravímetros cuánticos y magnetómetros alcanzan sensibilidad sin precedentes permitiendo detección de cambios sutiles de masa subsuperficial y magnéticos", de: "Quantengravimeter und Magnetometer erreichen beispiellose Empfindlichkeit und ermöglichen Erkennung subtiler unterirdischer Masse- und Magnetänderungen", nl: "Kwantum gravimeters en magnetometers bereiken ongekende gevoeligheid mogelijk makend detectie van subtiele ondergrondse massa en magnetische veranderingen" },
          { en: "Only work at extremely low temperatures", es: "Solo funcionan a temperaturas extremadamente bajas", de: "Funktionieren nur bei extrem niedrigen Temperaturen", nl: "Werken alleen bij extreem lage temperaturen" },
          { en: "Cannot operate in volcanic environments", es: "No pueden operar en ambientes volcánicos", de: "Können nicht in vulkanischen Umgebungen arbeiten", nl: "Kunnen niet opereren in vulkanische omgevingen" },
          { en: "Are purely theoretical at present", es: "Son puramente teóricos en la actualidad", de: "Sind derzeit rein theoretisch", nl: "Zijn momenteel puur theoretisch" }
        ],
        correct: 0,
        explanation: {
          en: "Quantum sensors exploit quantum mechanical effects for ultra-precise measurements. Cold atom interferometry-based gravimeters detect gravity changes as small as nano-Gals, revealing subtle magma chamber filling or emptying. Quantum magnetometers using atomic vapor cells or nitrogen-vacancy centers achieve femtotesla sensitivity, detecting minute magnetic field variations from subsurface magma movement. These technologies enable unprecedented monitoring of deep volcanic processes previously undetectable with classical instruments.",
          es: "Sensores cuánticos explotan efectos mecánicos cuánticos para mediciones ultra-precisas. Gravímetros basados en interferometría de átomos fríos detectan cambios de gravedad tan pequeños como nano-Gals, revelando llenado o vaciado sutil de cámaras magmáticas. Magnetómetros cuánticos usando celdas de vapor atómico o centros de vacante de nitrógeno alcanzan sensibilidad de femtotesla, detectando variaciones minúsculas de campo magnético de movimiento de magma subsuperficial. Estas tecnologías permiten monitoreo sin precedentes de procesos volcánicos profundos previamente indetectables con instrumentos clásicos.",
          de: "Quantensensoren nutzen quantenmechanische Effekte für ultra-präzise Messungen. Auf kalter Atominterferometrie basierende Gravimeter erkennen Gravitationsänderungen so klein wie Nano-Gals und enthüllen subtile Magmakammer-Füllung oder -Entleerung. Quantenmagnetometer mit atomaren Dampfzellen oder Stickstoff-Vakanz-Zentren erreichen Femtotesla-Empfindlichkeit und erkennen winzige Magnetfeldvariationen von unterirdischer Magmabewegung. Diese Technologien ermöglichen beispiellose Überwachung tiefer vulkanischer Prozesse, die zuvor mit klassischen Instrumenten nicht nachweisbar waren.",
          nl: "Kwantum sensoren exploiteren kwantum mechanische effecten voor ultra-precieze metingen. Koude atoom interferometrie-gebaseerde gravimeters detecteren zwaartekracht veranderingen zo klein als nano-Gals, onthullend subtiele magmakamer vulling of lediging. Kwantum magnetometers gebruikmakend van atomaire damp cellen of stikstof-vacature centra bereiken femtotesla gevoeligheid, detecterend minieme magnetisch veld variaties van ondergrondse magma beweging. Deze technologieën maken ongekende monitoring van diepe vulkanische processen mogelijk eerder ondetecteerbaar met klassieke instrumenten."
        }
      },
      {
        question: {
          en: "What new insights about volcanic hazard cascades have emerged from systems science approaches?",
          es: "¿Qué nuevas perspectivas sobre cascadas de peligros volcánicos han surgido de enfoques de ciencia de sistemas?",
          de: "Welche neuen Erkenntnisse über vulkanische Gefahrenkaskaden sind aus systemwissenschaftlichen Ansätzen hervorgegangen?",
          nl: "Welke nieuwe inzichten over vulkanische gevaar cascades zijn ontstaan uit systeem wetenschap benaderingen?"
        },
        options: [
          { en: "Complex network analysis reveals how primary volcanic hazards trigger cascading secondary effects across interconnected infrastructure systems", es: "Análisis de red compleja revela cómo peligros volcánicos primarios activan efectos secundarios en cascada a través de sistemas de infraestructura interconectados", de: "Komplexe Netzwerkanalyse enthüllt, wie primäre vulkanische Gefahren kaskadierende sekundäre Effekte in vernetzten Infrastruktursystemen auslösen", nl: "Complexe netwerk analyse onthult hoe primaire vulkanische gevaren cascaderende secundaire effecten activeren over onderling verbonden infrastructuur systemen" },
          { en: "Hazards occur independently without interaction", es: "Peligros ocurren independientemente sin interacción", de: "Gefahren treten unabhängig ohne Wechselwirkung auf", nl: "Gevaren treden onafhankelijk op zonder interactie" },
          { en: "Only direct volcanic effects matter", es: "Solo importan efectos volcánicos directos", de: "Nur direkte vulkanische Effekte sind wichtig", nl: "Alleen directe vulkanische effecten zijn belangrijk" },
          { en: "Systems approaches are too complex for practical use", es: "Enfoques de sistemas son demasiado complejos para uso práctico", de: "Systemansätze sind zu komplex für praktische Anwendung", nl: "Systeem benaderingen zijn te complex voor praktisch gebruik" }
        ],
        correct: 0,
        explanation: {
          en: "Systems science approaches reveal volcanic hazards as complex, interconnected networks where primary hazards (ash, lava, pyroclastic flows) trigger cascading failures across critical infrastructure. Network analysis identifies vulnerable nodes and pathways, showing how airport closures cascade through global transportation, power grid failures amplify telecommunication disruptions, and water contamination affects food security. These insights enable development of resilient systems and targeted interventions to minimize cascade propagation during volcanic crises.",
          es: "Enfoques de ciencia de sistemas revelan peligros volcánicos como redes complejas interconectadas donde peligros primarios (ceniza, lava, flujos piroclásticos) activan fallas en cascada a través de infraestructura crítica. Análisis de red identifica nodos y vías vulnerables, mostrando cómo cierres de aeropuertos se propagan a través de transporte global, fallas de red eléctrica amplifican disrupciones de telecomunicación, y contaminación de agua afecta seguridad alimentaria. Estas perspectivas permiten desarrollo de sistemas resilientes e intervenciones dirigidas para minimizar propagación de cascada durante crisis volcánicas.",
          de: "Systemwissenschaftliche Ansätze enthüllen vulkanische Gefahren als komplexe, vernetzte Netzwerke, wo primäre Gefahren (Asche, Lava, pyroklastische Ströme) kaskadierende Ausfälle in kritischer Infrastruktur auslösen. Netzwerkanalyse identifiziert verletzliche Knoten und Pfade und zeigt, wie Flughafenschließungen sich durch globalen Transport fortpflanzen, Stromnetzausfälle Telekommunikationsstörungen verstärken und Wasserverschmutzung Nahrungssicherheit beeinflusst. Diese Erkenntnisse ermöglichen Entwicklung widerstandsfähiger Systeme und gezielter Interventionen zur Minimierung von Kaskadenausbreitung während vulkanischer Krisen.",
          nl: "Systeem wetenschap benaderingen onthullen vulkanische gevaren als complexe, onderling verbonden netwerken waar primaire gevaren (as, lava, pyroklastische stromen) cascaderende storingen activeren over kritieke infrastructuur. Netwerk analyse identificeert kwetsbare knooppunten en paden, tonend hoe luchthaven sluitingen cascaderen door globaal transport, elektriciteitsnet storingen telecommunicatie verstoringen versterken, en water contaminatie voedselzekerheid beïnvloedt. Deze inzichten maken ontwikkeling van veerkrachtige systemen en gerichte interventies mogelijk om cascade propagatie te minimaliseren tijdens vulkanische crises."
        }
      },
      {
        question: {
          en: "How are biogeochemical studies revealing the role of volcanic activity in global element cycles?",
          es: "¿Cómo están revelando los estudios biogeoquímicos el papel de la actividad volcánica en ciclos globales de elementos?",
          de: "Wie enthüllen biogeochemische Studien die Rolle vulkanischer Aktivität in globalen Elementkreisläufen?",
          nl: "Hoe onthullen biogeochemische studies de rol van vulkanische activiteit in globale element cycli?"
        },
        options: [
          { en: "Multi-element flux studies quantify volcanic contributions to global budgets of carbon, sulfur, halogens, and trace metals", es: "Estudios de flujo multi-elemento cuantifican contribuciones volcánicas a presupuestos globales de carbono, azufre, halógenos y metales traza", de: "Multi-Element-Flussstudien quantifizieren vulkanische Beiträge zu globalen Budgets von Kohlenstoff, Schwefel, Halogenen und Spurenmetallen", nl: "Multi-element flux studies kwantificeren vulkanische bijdragen aan globale budgetten van koolstof, zwavel, halogenen en spoor metalen" },
          { en: "Volcanoes only emit water vapor", es: "Volcanes solo emiten vapor de agua", de: "Vulkane emittieren nur Wasserdampf", nl: "Vulkanen geven alleen waterdamp af" },
          { en: "Have no impact on global geochemistry", es: "No tienen impacto en geoquímica global", de: "Haben keinen Einfluss auf globale Geochemie", nl: "Hebben geen impact op globale geochemie" },
          { en: "Only affect local soil chemistry", es: "Solo afectan química local del suelo", de: "Beeinflussen nur lokale Bodenchemie", nl: "Beïnvloeden alleen lokale bodem chemie" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced biogeochemical studies using isotopic tracers, satellite monitoring, and global flux measurements reveal volcanism as a major driver of planetary element cycles. Volcanic emissions contribute ~0.15-0.26 Gt C/yr to the carbon cycle, 10-20 Tg S/yr sulfur, significant halogens affecting ozone chemistry, and trace metals influencing ocean productivity. Long-term studies show volcanic fluxes modulate climate, ocean chemistry, and ecosystem productivity across geological timescales, fundamentally linking solid Earth processes to surface environmental systems.",
          es: "Estudios biogeoquímicos avanzados usando trazadores isotópicos, monitoreo satelital y mediciones de flujo global revelan vulcanismo como impulsor mayor de ciclos de elementos planetarios. Emisiones volcánicas contribuyen ~0.15-0.26 Gt C/año al ciclo de carbono, 10-20 Tg S/año de azufre, halógenos significativos afectando química de ozono, y metales traza influyendo productividad oceánica. Estudios a largo plazo muestran flujos volcánicos modulan clima, química oceánica y productividad ecosistémica a través de escalas de tiempo geológicas, vinculando fundamentalmente procesos de Tierra sólida a sistemas ambientales superficiales.",
          de: "Fortgeschrittene biogeochemische Studien mit isotopischen Tracern, Satellitenüberwachung und globalen Flussmessungen enthüllen Vulkanismus als Hauptantrieb planetarer Elementkreisläufe. Vulkanische Emissionen tragen ~0,15-0,26 Gt C/Jahr zum Kohlenstoffkreislauf bei, 10-20 Tg S/Jahr Schwefel, signifikante Halogene die Ozonchemie beeinflussen, und Spurenmetalle die Ozeanproduktivität beeinflussen. Langzeitstudien zeigen vulkanische Flüsse modulieren Klima, Ozeanchemie und Ökosystemproduktivität über geologische Zeitskalen und verknüpfen fundamental Prozesse der festen Erde mit oberflächlichen Umweltsystemen.",
          nl: "Geavanceerde biogeochemische studies gebruikmakend van isotopische tracers, satelliet monitoring en globale flux metingen onthullen vulkanisme als hoofdaandrijver van planetaire element cycli. Vulkanische emissies dragen ~0,15-0,26 Gt C/jaar bij aan de koolstof cyclus, 10-20 Tg S/jaar zwavel, significante halogenen beïnvloedend ozon chemie, en spoor metalen beïnvloedend oceaan productiviteit. Langetermijn studies tonen vulkanische fluxen moduleren klimaat, oceaan chemie en ecosysteem productiviteit over geologische tijdschalen, fundamenteel verbindend vaste Aarde processen aan oppervlakte milieu systemen."
        }
      },
      {
        question: {
          en: "What emerging technologies are transforming real-time volcanic gas analysis?",
          es: "¿Qué tecnologías emergentes están transformando el análisis de gases volcánicos en tiempo real?",
          de: "Welche aufkommenden Technologien transformieren Echtzeit-vulkanische Gasanalyse?",
          nl: "Welke opkomende technologieën transformeren real-time vulkanische gas analyse?"
        },
        options: [
          { en: "Miniaturized spectrometers, laser-based sensors, and IoT networks enable continuous multi-gas monitoring with high temporal resolution", es: "Espectrómetros miniaturizados, sensores basados en láser y redes IoT permiten monitoreo continuo multi-gas con alta resolución temporal", de: "Miniaturisierte Spektrometer, laserbasierte Sensoren und IoT-Netzwerke ermöglichen kontinuierliche Multi-Gas-Überwachung mit hoher zeitlicher Auflösung", nl: "Geminiaturiseerde spectrometers, laser-gebaseerde sensoren en IoT netwerken maken continue multi-gas monitoring met hoge temporele resolutie mogelijk" },
          { en: "Only traditional wet chemistry methods work", es: "Solo funcionan métodos tradicionales de química húmeda", de: "Nur traditionelle Nasschemie-Methoden funktionieren", nl: "Alleen traditionele natte chemie methoden werken" },
          { en: "Gas analysis requires laboratory processing only", es: "Análisis de gas requiere solo procesamiento de laboratorio", de: "Gasanalyse erfordert nur Laborverarbeitung", nl: "Gas analyse vereist alleen laboratorium verwerking" },
          { en: "Real-time analysis is impossible for volcanic gases", es: "Análisis en tiempo real es imposible para gases volcánicos", de: "Echtzeitanalyse ist für vulkanische Gase unmöglich", nl: "Real-time analyse is onmogelijk voor vulkanische gassen" }
        ],
        correct: 0,
        explanation: {
          en: "Revolutionary gas sensing technologies include miniaturized FTIR and UV spectrometers for real-time SO2, CO2, H2S measurements, tunable diode laser spectroscopy (TDLS) for isotopic analysis, electrochemical sensor arrays for multi-gas detection, and machine learning-enabled pattern recognition. IoT sensor networks with satellite connectivity provide continuous data streams, while drone-deployed sensors access dangerous areas. These advances enable high-frequency monitoring revealing short-term gas flux variations critical for eruption forecasting.",
          es: "Tecnologías revolucionarias de detección de gas incluyen espectrómetros FTIR y UV miniaturizados para mediciones en tiempo real de SO2, CO2, H2S, espectroscopía láser de diodo sintonizable (TDLS) para análisis isotópico, arreglos de sensores electroquímicos para detección multi-gas, y reconocimiento de patrones habilitado por aprendizaje automático. Redes de sensores IoT con conectividad satelital proporcionan flujos de datos continuos, mientras sensores desplegados por drones acceden áreas peligrosas. Estos avances permiten monitoreo de alta frecuencia revelando variaciones de flujo de gas a corto plazo críticas para pronóstico de erupción.",
          de: "Revolutionäre Gasdetektionstechnologien umfassen miniaturisierte FTIR- und UV-Spektrometer für Echtzeit-SO2-, CO2-, H2S-Messungen, abstimmbare Diodenlaserspektroskopie (TDLS) für Isotopenanalyse, elektrochemische Sensor-Arrays für Multi-Gas-Detektion und maschinelles Lernen-ermöglichte Mustererkennung. IoT-Sensornetzwerke mit Satellitenkonnektivität bieten kontinuierliche Datenströme, während drohnen-eingesetzte Sensoren gefährliche Bereiche erreichen. Diese Fortschritte ermöglichen Hochfrequenz-Überwachung, die kurzfristige Gasfluss-Variationen enthüllt, die für Eruptionsvorhersagen kritisch sind.",
          nl: "Revolutionaire gas detectie technologieën omvatten geminiaturiseerde FTIR en UV spectrometers voor real-time SO2, CO2, H2S metingen, afstembare diode laser spectroscopie (TDLS) voor isotopische analyse, elektrochemische sensor arrays voor multi-gas detectie, en machine learning-mogelijk gemaakte patroon herkenning. IoT sensor netwerken met satelliet connectiviteit bieden continue data stromen, terwijl drone-ingezette sensoren gevaarlijke gebieden bereiken. Deze vooruitgangen maken hoge-frequentie monitoring mogelijk onthullend kortetermijn gas flux variaties kritisch voor eruptie voorspelling."
        }
      },
      {
        question: {
          en: "How are advances in crystallization kinetics experiments revealing magma chamber dynamics?",
          es: "¿Cómo están revelando los avances en experimentos de cinética de cristalización la dinámica de cámaras magmáticas?",
          de: "Wie enthüllen Fortschritte in Kristallisationskinetik-Experimenten Magmakammer-Dynamik?",
          nl: "Hoe onthullen vooruitgangen in kristallisatie kinetiek experimenten magmakamer dynamiek?"
        },
        options: [
          { en: "Time-resolved crystallization experiments constrain magma residence times and reveal rapid pre-eruptive processes occurring over days to months", es: "Experimentos de cristalización resueltos en tiempo restringen tiempos de residencia de magma y revelan procesos pre-eruptivos rápidos ocurriendo durante días a meses", de: "Zeitaufgelöste Kristallisationsexperimente beschränken Magma-Verweilzeiten und enthüllen schnelle prä-eruptive Prozesse über Tage bis Monate", nl: "Tijd-opgeloste kristallisatie experimenten beperken magma verblijftijden en onthullen snelle pre-eruptieve processen die plaatsvinden over dagen tot maanden" },
          { en: "Only confirm slow geological processes", es: "Solo confirman procesos geológicos lentos", de: "Bestätigen nur langsame geologische Prozesse", nl: "Bevestigen alleen langzame geologische processen" },
          { en: "Cannot reproduce natural conditions", es: "No pueden reproducir condiciones naturales", de: "Können natürliche Bedingungen nicht reproduzieren", nl: "Kunnen natuurlijke omstandigheden niet reproduceren" },
          { en: "Are limited to simple compositions", es: "Están limitados a composiciones simples", de: "Sind auf einfache Zusammensetzungen beschränkt", nl: "Zijn beperkt tot eenvoudige samenstellingen" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced crystallization kinetics experiments using synchrotron X-ray tomography, in-situ observation chambers, and rapid quench techniques reveal the timescales of magma chamber processes. These studies show crystal nucleation and growth occur over hours to days, while diffusion-controlled processes span days to years. Combined with natural crystal textures and geospeedometry, experiments constrain pre-eruptive timescales, revealing rapid magma mixing, volatile saturation, and crystallization events that trigger eruptions, revolutionizing understanding of volcano 'unrest' signals.",
          es: "Experimentos avanzados de cinética de cristalización usando tomografía de rayos X de sincrotrón, cámaras de observación in-situ y técnicas de enfriamiento rápido revelan escalas de tiempo de procesos de cámara magmática. Estos estudios muestran nucleación y crecimiento de cristal ocurren durante horas a días, mientras procesos controlados por difusión abarcan días a años. Combinados con texturas de cristal naturales y geovelocimetría, experimentos restringen escalas de tiempo pre-eruptivas, revelando mezcla rápida de magma, saturación volátil y eventos de cristalización que activan erupciones, revolucionando entendimiento de señales de 'inquietud' volcánica.",
          de: "Fortgeschrittene Kristallisationskinetik-Experimente mit Synchrotron-Röntgentomographie, in-situ Beobachtungskammern und schnellen Abschrecktechniken enthüllen Zeitskalen von Magmakammerprozessen. Diese Studien zeigen, dass Kristallnukleation und -wachstum über Stunden bis Tage auftreten, während diffusionsgesteuerte Prozesse Tage bis Jahre umspannen. Kombiniert mit natürlichen Kristalltexturen und Geospeedometrie beschränken Experimente prä-eruptive Zeitskalen und enthüllen schnelle Magmamischung, Volatilsättigung und Kristallisationsereignisse, die Eruptionen auslösen und das Verständnis vulkanischer 'Unruhe'-Signale revolutionieren.",
          nl: "Geavanceerde kristallisatie kinetiek experimenten gebruikmakend van synchrotron röntgen tomografie, in-situ observatie kamers en snelle afschrik technieken onthullen tijdschalen van magmakamer processen. Deze studies tonen kristal nucleatie en groei treden op over uren tot dagen, terwijl diffusie-gecontroleerde processen dagen tot jaren omspannen. Gecombineerd met natuurlijke kristal texturen en geosnelheidsmeting, beperken experimenten pre-eruptieve tijdschalen, onthullend snelle magma menging, vluchtige verzadiging en kristallisatie gebeurtenissen die erupties activeren, revolutionerend begrip van vulkaan 'onrust' signalen."
        }
      },
      {
        question: {
          en: "What role do volcanic aerosols play in stratospheric chemistry?",
          es: "¿Qué papel juegan los aerosoles volcánicos en la química estratosférica?",
          de: "Welche Rolle spielen vulkanische Aerosole in der stratosphärischen Chemie?",
          nl: "Welke rol spelen vulkanische aerosolen in de stratosferische chemie?"
        },
        options: [
          { en: "They catalyze ozone depletion through heterogeneous chemical reactions", es: "Catalizan el agotamiento del ozono mediante reacciones químicas heterogéneas", de: "Sie katalysieren den Ozonabbau durch heterogene chemische Reaktionen", nl: "Ze katalyseren ozonafbraak door heterogene chemische reacties" },
          { en: "They increase ozone production through photochemical processes", es: "Aumentan la producción de ozono mediante procesos fotoquímicos", de: "Sie erhöhen die Ozonproduktion durch photochemische Prozesse", nl: "Ze verhogen de ozonproductie door fotochemische processen" },
          { en: "They neutralize atmospheric pollutants", es: "Neutralizan los contaminantes atmosféricos", de: "Sie neutralisieren atmosphärische Schadstoffe", nl: "Ze neutraliseren atmosferische verontreinigende stoffen" },
          { en: "They stabilize atmospheric temperature gradients", es: "Estabilizan los gradientes de temperatura atmosférica", de: "Sie stabilisieren atmosphärische Temperaturgradienten", nl: "Ze stabiliseren atmosferische temperatuurgradiënten" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic aerosols, particularly sulfate particles, provide surfaces for heterogeneous chemical reactions that convert chlorine reservoir species into active forms, leading to enhanced ozone depletion in the stratosphere.",
          es: "Los aerosoles volcánicos, particularmente las partículas de sulfato, proporcionan superficies para reacciones químicas heterogéneas que convierten especies de cloro de reserva en formas activas, llevando a un mayor agotamiento del ozono en la estratosfera.",
          de: "Vulkanische Aerosole, insbesondere Sulfatpartikel, bieten Oberflächen für heterogene chemische Reaktionen, die Chlor-Reservoirspezies in aktive Formen umwandeln und zu einem verstärkten Ozonabbau in der Stratosphäre führen.",
          nl: "Vulkanische aerosolen, met name sulfaatdeeltjes, bieden oppervlakken voor heterogene chemische reacties die chloor-reservoirsoorten omzetten in actieve vormen, wat leidt tot verhoogde ozonafbraak in de stratosfeer."
        }
      },
      {
        question: {
          en: "How are distributed acoustic sensing (DAS) systems revolutionizing volcano monitoring?",
          es: "¿Cómo están revolucionando los sistemas de detección acústica distribuida (DAS) el monitoreo de volcanes?",
          de: "Wie revolutionieren verteilte akustische Sensorsysteme (DAS) die Vulkanüberwachung?",
          nl: "Hoe revolutioneren gedistribueerde akoestische detectiesystemen (DAS) vulkaanmonitoring?"
        },
        options: [
          { en: "Converting fiber optic cables into thousands of seismic sensors along their length", es: "Convirtiendo cables de fibra óptica en miles de sensores sísmicos a lo largo de su longitud", de: "Umwandlung von Glasfaserkabeln in Tausende von seismischen Sensoren entlang ihrer Länge", nl: "Omzetten van glasvezelkabels in duizenden seismische sensoren langs hun lengte" },
          { en: "Detecting infrasound waves from eruptions", es: "Detectando ondas infrasónicas de erupciones", de: "Erkennung von Infraschallwellen von Eruptionen", nl: "Detecteren van infrageluidsgolven van uitbarstingen" },
          { en: "Measuring atmospheric pressure changes", es: "Midiendo cambios de presión atmosférica", de: "Messung von atmosphärischen Druckänderungen", nl: "Meten van atmosferische drukveranderingen" },
          { en: "Recording electromagnetic emissions", es: "Registrando emisiones electromagnéticas", de: "Aufzeichnung elektromagnetischer Emissionen", nl: "Registreren van elektromagnetische emissies" }
        ],
        correct: 0,
        explanation: {
          en: "DAS technology transforms standard telecommunication fiber optic cables into dense arrays of seismic sensors, providing unprecedented spatial resolution for detecting and locating volcanic tremor, earthquakes, and other dynamic processes.",
          es: "La tecnología DAS transforma los cables de fibra óptica de telecomunicaciones estándar en matrices densas de sensores sísmicos, proporcionando una resolución espacial sin precedentes para detectar y localizar tremor volcánico, terremotos y otros procesos dinámicos.",
          de: "Die DAS-Technologie verwandelt Standard-Telekommunikations-Glasfaserkabel in dichte Arrays seismischer Sensoren und bietet eine beispiellose räumliche Auflösung zur Erkennung und Lokalisierung vulkanischer Tremor, Erdbeben und anderer dynamischer Prozesse.",
          nl: "DAS-technologie transformeert standaard telecommunicatie glasvezelkabels in dichte arrays van seismische sensoren, wat ongekende ruimtelijke resolutie biedt voor het detecteren en lokaliseren van vulkanische tremor, aardbevingen en andere dynamische processen."
        }
      },
      {
        question: {
          en: "What is the significance of volcanic lightning in eruption dynamics?",
          es: "¿Cuál es la importancia de los rayos volcánicos en la dinámica de erupciones?",
          de: "Was ist die Bedeutung vulkanischer Blitze in der Eruptionsdynamik?",
          nl: "Wat is de betekenis van vulkanische bliksem in uitbarstingsdynamiek?"
        },
        options: [
          { en: "It indicates particle collision rates and charge separation in the eruption column", es: "Indica tasas de colisión de partículas y separación de carga en la columna eruptiva", de: "Es zeigt Partikelkollisionsraten und Ladungstrennung in der Eruptionssäule an", nl: "Het geeft botsingssnelheden van deeltjes en ladingsscheiding in de eruptiekolom aan" },
          { en: "It triggers secondary explosions in the magma chamber", es: "Desencadena explosiones secundarias en la cámara magmática", de: "Es löst sekundäre Explosionen in der Magmakammer aus", nl: "Het triggert secundaire explosies in de magmakamer" },
          { en: "It controls the direction of pyroclastic flows", es: "Controla la dirección de los flujos piroclásticos", de: "Es kontrolliert die Richtung pyroklastischer Ströme", nl: "Het controleert de richting van pyroclastische stromen" },
          { en: "It determines the chemical composition of volcanic gases", es: "Determina la composición química de los gases volcánicos", de: "Es bestimmt die chemische Zusammensetzung vulkanischer Gase", nl: "Het bepaalt de chemische samenstelling van vulkanische gassen" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic lightning results from triboelectric charging during particle collisions in the eruption column. Its frequency and intensity provide real-time information about eruption intensity, particle size distribution, and column dynamics.",
          es: "Los rayos volcánicos resultan de la carga triboeléctrica durante las colisiones de partículas en la columna eruptiva. Su frecuencia e intensidad proporcionan información en tiempo real sobre la intensidad de la erupción, distribución del tamaño de partículas y dinámica de la columna.",
          de: "Vulkanische Blitze entstehen durch triboelektrische Aufladung bei Partikelkollisionen in der Eruptionssäule. Ihre Häufigkeit und Intensität liefern Echtzeitinformationen über Eruptionsintensität, Partikelgrößenverteilung und Säulendynamik.",
          nl: "Vulkanische bliksem ontstaat door tribo-elektrische oplading tijdens deeltjesbotsingen in de eruptiekolom. De frequentie en intensiteit ervan leveren real-time informatie over eruptie-intensiteit, deeltjesgrootteverdeling en kolomdynamiek."
        }
      },
      {
        question: {
          en: "How do muon detectors contribute to volcano imaging?",
          es: "¿Cómo contribuyen los detectores de muones a la imagen de volcanes?",
          de: "Wie tragen Myonendetektoren zur Vulkanbildgebung bei?",
          nl: "Hoe dragen muondetectoren bij aan vulkaanbeeldvorming?"
        },
        options: [
          { en: "They measure cosmic ray muon absorption to map internal density structures", es: "Miden la absorción de muones de rayos cósmicos para mapear estructuras de densidad internas", de: "Sie messen die Absorption kosmischer Myonen zur Kartierung interner Dichtestrukturen", nl: "Ze meten kosmische straling muon absorptie om interne dichtheidsstructuren in kaart te brengen" },
          { en: "They detect underground magma movements through gravitational effects", es: "Detectan movimientos de magma subterráneo a través de efectos gravitacionales", de: "Sie erkennen unterirdische Magmabewegungen durch Gravitationseffekte", nl: "Ze detecteren ondergrondse magmabewegingen door gravitationele effecten" },
          { en: "They measure electromagnetic fields generated by magma", es: "Miden campos electromagnéticos generados por el magma", de: "Sie messen vom Magma erzeugte elektromagnetische Felder", nl: "Ze meten elektromagnetische velden gegenereerd door magma" },
          { en: "They track radioactive decay in volcanic rocks", es: "Rastrean la desintegración radiactiva en rocas volcánicas", de: "Sie verfolgen radioaktiven Zerfall in vulkanischen Gesteinen", nl: "Ze volgen radioactief verval in vulkanisch gesteente" }
        ],
        correct: 0,
        explanation: {
          en: "Muon radiography uses naturally occurring cosmic ray muons that penetrate rock. By measuring muon flux attenuation, scientists can create 3D density maps of volcanic interiors, revealing magma chambers, conduits, and structural features.",
          es: "La radiografía de muones utiliza muones de rayos cósmicos naturales que penetran la roca. Al medir la atenuación del flujo de muones, los científicos pueden crear mapas de densidad 3D del interior volcánico, revelando cámaras magmáticas, conductos y características estructurales.",
          de: "Die Myonen-Radiographie nutzt natürlich vorkommende kosmische Myonen, die Gestein durchdringen. Durch Messung der Myonenfluss-Abschwächung können Wissenschaftler 3D-Dichtekarten vulkanischer Innenräume erstellen und Magmakammern, Leitungen und strukturelle Merkmale aufzeigen.",
          nl: "Muon-radiografie gebruikt natuurlijk voorkomende kosmische straling muonen die gesteente doordringen. Door muonflux-verzwakking te meten, kunnen wetenschappers 3D-dichtheidskaarten van vulkanische interieurs maken, waarbij magmakamers, kanalen en structurele kenmerken worden onthuld."
        }
      },
      {
        question: {
          en: "What is the role of volatile saturation pressure in controlling eruption style?",
          es: "¿Cuál es el papel de la presión de saturación volátil en el control del estilo de erupción?",
          de: "Welche Rolle spielt der Sättigungsdruck flüchtiger Stoffe bei der Kontrolle des Eruptionsstils?",
          nl: "Wat is de rol van vluchtige verzadigingsdruk bij het beheersen van uitbarstingsstijl?"
        },
        options: [
          { en: "It determines the depth at which gas bubbles nucleate and drive explosive fragmentation", es: "Determina la profundidad a la que se nuclean las burbujas de gas e impulsan la fragmentación explosiva", de: "Er bestimmt die Tiefe, in der Gasblasen entstehen und explosive Fragmentierung antreiben", nl: "Het bepaalt de diepte waarop gasbellen nucleëren en explosieve fragmentatie aandrijven" },
          { en: "It controls the temperature of ascending magma", es: "Controla la temperatura del magma ascendente", de: "Er kontrolliert die Temperatur des aufsteigenden Magmas", nl: "Het controleert de temperatuur van opstijgend magma" },
          { en: "It regulates crystal growth rates", es: "Regula las tasas de crecimiento de cristales", de: "Er reguliert die Kristallwachstumsraten", nl: "Het reguleert kristalgroeisnelheden" },
          { en: "It determines magma viscosity changes", es: "Determina los cambios de viscosidad del magma", de: "Er bestimmt Viskositätsänderungen des Magmas", nl: "Het bepaalt magma viscositeitsveranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "Volatile saturation pressure controls when dissolved gases (H2O, CO2, SO2) exsolve from magma during ascent. This bubble nucleation and growth drives magma fragmentation, determining whether eruptions are effusive or explosive.",
          es: "La presión de saturación volátil controla cuándo los gases disueltos (H2O, CO2, SO2) se exuelven del magma durante el ascenso. Esta nucleación y crecimiento de burbujas impulsa la fragmentación del magma, determinando si las erupciones son efusivas o explosivas.",
          de: "Der Sättigungsdruck flüchtiger Stoffe kontrolliert, wann gelöste Gase (H2O, CO2, SO2) während des Aufstiegs aus dem Magma entweichen. Diese Blasenbildung und -wachstum treibt die Magmafragmentierung an und bestimmt, ob Eruptionen effusiv oder explosiv sind.",
          nl: "Vluchtige verzadigingsdruk controleert wanneer opgeloste gassen (H2O, CO2, SO2) uit magma ontwijken tijdens opstijging. Deze bellennucleatie en groei drijft magmafragmentatie aan, wat bepaalt of uitbarstingen effusief of explosief zijn."
        }
      },
      {
        question: {
          en: "How do volcanic tremor harmonics reveal conduit processes?",
          es: "¿Cómo revelan los armónicos del tremor volcánico los procesos del conducto?",
          de: "Wie enthüllen vulkanische Tremor-Harmonische Prozesse im Schlot?",
          nl: "Hoe onthullen vulkanische tremor harmonischen kanaalprocessen?"
        },
        options: [
          { en: "Harmonic frequencies indicate resonance in magma-filled cracks and conduits", es: "Las frecuencias armónicas indican resonancia en grietas y conductos llenos de magma", de: "Harmonische Frequenzen zeigen Resonanz in magmagefüllten Rissen und Schloten an", nl: "Harmonische frequenties duiden op resonantie in met magma gevulde scheuren en kanalen" },
          { en: "They measure the speed of magma ascent", es: "Miden la velocidad de ascenso del magma", de: "Sie messen die Geschwindigkeit des Magmaaufstiegs", nl: "Ze meten de snelheid van magma-opstijging" },
          { en: "They indicate the chemical composition of volcanic gases", es: "Indican la composición química de los gases volcánicos", de: "Sie zeigen die chemische Zusammensetzung vulkanischer Gase an", nl: "Ze geven de chemische samenstelling van vulkanische gassen aan" },
          { en: "They track crystal formation rates", es: "Rastrean las tasas de formación de cristales", de: "Sie verfolgen Kristallbildungsraten", nl: "Ze volgen kristalvormingssnelheden" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic tremor often exhibits harmonic overtones that result from resonance in fluid-filled conduits. The frequency content provides information about conduit geometry, magma properties, and gas-liquid interactions during ascent.",
          es: "El tremor volcánico a menudo exhibe armónicos que resultan de la resonancia en conductos llenos de fluido. El contenido de frecuencia proporciona información sobre la geometría del conducto, propiedades del magma e interacciones gas-líquido durante el ascenso.",
          de: "Vulkanischer Tremor zeigt oft harmonische Obertöne, die aus Resonanz in flüssigkeitsgefüllten Schloten resultieren. Der Frequenzinhalt liefert Informationen über Schlotgeometrie, Magmaeigenschaften und Gas-Flüssigkeits-Wechselwirkungen während des Aufstiegs.",
          nl: "Vulkanische tremor vertoont vaak harmonische boventonen die het gevolg zijn van resonantie in met vloeistof gevulde kanalen. De frequentie-inhoud geeft informatie over kanaalgeometrie, magma-eigenschappen en gas-vloeistof interacties tijdens opstijging."
        }
      },
      {
        question: {
          en: "What insights do melt inclusions provide about pre-eruptive conditions?",
          es: "¿Qué información proporcionan las inclusiones de fundido sobre las condiciones pre-eruptivas?",
          de: "Welche Einblicke liefern Schmelzeinschlüsse über prä-eruptive Bedingungen?",
          nl: "Welke inzichten bieden smeltinsluitsels over pre-eruptieve omstandigheden?"
        },
        options: [
          { en: "They preserve snapshots of magma composition, temperature, and volatile content at depth", es: "Preservan instantáneas de la composición del magma, temperatura y contenido volátil en profundidad", de: "Sie bewahren Momentaufnahmen der Magmazusammensetzung, Temperatur und des Gehalts flüchtiger Stoffe in der Tiefe", nl: "Ze behouden momentopnames van magmasamenstelling, temperatuur en vluchtig gehalte op diepte" },
          { en: "They record seismic activity before eruptions", es: "Registran la actividad sísmica antes de las erupciones", de: "Sie zeichnen seismische Aktivität vor Eruptionen auf", nl: "Ze registreren seismische activiteit voor uitbarstingen" },
          { en: "They indicate the age of the volcanic system", es: "Indican la edad del sistema volcánico", de: "Sie zeigen das Alter des vulkanischen Systems an", nl: "Ze geven de leeftijd van het vulkanische systeem aan" },
          { en: "They measure ground deformation patterns", es: "Miden patrones de deformación del suelo", de: "Sie messen Bodenverformungsmuster", nl: "Ze meten grondvervormingspatronen" }
        ],
        correct: 0,
        explanation: {
          en: "Melt inclusions are tiny pockets of magma trapped in growing crystals. They preserve the chemical composition, dissolved volatile content, and temperature of magma at the time of entrapment, providing crucial information about storage conditions and triggering mechanisms.",
          es: "Las inclusiones de fundido son pequeñas bolsas de magma atrapadas en cristales en crecimiento. Preservan la composición química, contenido volátil disuelto y temperatura del magma al momento del atrapamiento, proporcionando información crucial sobre condiciones de almacenamiento y mecanismos desencadenantes.",
          de: "Schmelzeinschlüsse sind winzige Magmataschen, die in wachsenden Kristallen eingeschlossen sind. Sie bewahren die chemische Zusammensetzung, den gelösten Gehalt flüchtiger Stoffe und die Temperatur des Magmas zum Zeitpunkt des Einschlusses und liefern wichtige Informationen über Lagerbedingungen und Auslösemechanismen.",
          nl: "Smeltinsluitsels zijn kleine zakjes magma gevangen in groeiende kristallen. Ze behouden de chemische samenstelling, opgelost vluchtig gehalte en temperatuur van magma op het moment van insluiting, wat cruciale informatie geeft over opslagomstandigheden en triggermechanismen."
        }
      },
      {
        question: {
          en: "How do phreatomagmatic eruptions differ from magmatic eruptions in terms of fragmentation?",
          es: "¿Cómo difieren las erupciones freatomagmáticas de las magmáticas en términos de fragmentación?",
          de: "Wie unterscheiden sich phreatomagmatische von magmatischen Eruptionen hinsichtlich der Fragmentierung?",
          nl: "Hoe verschillen freatomagmatische uitbarstingen van magmatische uitbarstingen qua fragmentatie?"
        },
        options: [
          { en: "Phreatomagmatic fragmentation occurs through thermal shock and steam expansion when magma contacts water", es: "La fragmentación freatomagmática ocurre por choque térmico y expansión de vapor cuando el magma contacta agua", de: "Phreatomagmatische Fragmentierung erfolgt durch thermischen Schock und Dampfexpansion beim Kontakt von Magma mit Wasser", nl: "Freatomagmatische fragmentatie treedt op door thermische schok en stoomexpansie wanneer magma water raakt" },
          { en: "Phreatomagmatic eruptions only produce lava flows", es: "Las erupciones freatomagmáticas solo producen flujos de lava", de: "Phreatomagmatische Eruptionen produzieren nur Lavaströme", nl: "Freatomagmatische uitbarstingen produceren alleen lavastromen" },
          { en: "They have identical fragmentation mechanisms", es: "Tienen mecanismos de fragmentación idénticos", de: "Sie haben identische Fragmentierungsmechanismen", nl: "Ze hebben identieke fragmentatiemechanismen" },
          { en: "Phreatomagmatic eruptions occur only in submarine settings", es: "Las erupciones freatomagmáticas ocurren solo en entornos submarinos", de: "Phreatomagmatische Eruptionen treten nur in submarinen Umgebungen auf", nl: "Freatomagmatische uitbarstingen komen alleen voor in onderzeese omgevingen" }
        ],
        correct: 0,
        explanation: {
          en: "Phreatomagmatic eruptions involve rapid heat transfer from magma to external water, causing instantaneous vaporization and violent steam expansion. This produces finer-grained pyroclasts and more efficient fragmentation than purely magmatic gas-driven eruptions.",
          es: "Las erupciones freatomagmáticas involucran transferencia rápida de calor del magma al agua externa, causando vaporización instantánea y expansión violenta de vapor. Esto produce piroclastos de grano más fino y fragmentación más eficiente que las erupciones puramente magmáticas impulsadas por gas.",
          de: "Phreatomagmatische Eruptionen beinhalten schnellen Wärmetransfer von Magma zu externem Wasser, was zu sofortiger Verdampfung und heftiger Dampfexpansion führt. Dies erzeugt feinkörnigere Pyroklasten und effizientere Fragmentierung als rein magmatische gasgetriebene Eruptionen.",
          nl: "Freatomagmatische uitbarstingen omvatten snelle warmteoverdracht van magma naar extern water, wat onmiddellijke verdamping en heftige stoomexpansie veroorzaakt. Dit produceert fijnkorreliger pyroclasten en efficiëntere fragmentatie dan puur magmatische gasgedreven uitbarstingen."
        }
      },
      {
        question: {
          en: "What is the significance of uranium-series disequilibria in volcanic rocks?",
          es: "¿Cuál es la importancia del desequilibrio de series de uranio en rocas volcánicas?",
          de: "Was ist die Bedeutung von Uran-Serien-Ungleichgewichten in vulkanischen Gesteinen?",
          nl: "Wat is de betekenis van uranium-serie disequilibria in vulkanisch gesteente?"
        },
        options: [
          { en: "It provides timescales for magma storage, crystallization, and ascent processes", es: "Proporciona escalas de tiempo para almacenamiento de magma, cristalización y procesos de ascenso", de: "Es liefert Zeitskalen für Magmaspeicherung, Kristallisation und Aufstiegsprozesse", nl: "Het geeft tijdschalen voor magmaopslag, kristallisatie en opstijgingsprocessen" },
          { en: "It determines the explosive potential of magma", es: "Determina el potencial explosivo del magma", de: "Es bestimmt das explosive Potenzial des Magmas", nl: "Het bepaalt het explosieve potentieel van magma" },
          { en: "It measures the depth of magma chambers", es: "Mide la profundidad de las cámaras magmáticas", de: "Es misst die Tiefe von Magmakammern", nl: "Het meet de diepte van magmakamers" },
          { en: "It indicates the temperature of eruption", es: "Indica la temperatura de erupción", de: "Es zeigt die Eruptionstemperatur an", nl: "Het geeft de temperatuur van uitbarsting aan" }
        ],
        correct: 0,
        explanation: {
          en: "Uranium-series isotopes have half-lives ranging from days to hundreds of thousands of years. Disequilibria between parent and daughter isotopes record the timing of magmatic processes like partial melting, fractional crystallization, and magma mixing on these timescales.",
          es: "Los isótopos de series de uranio tienen vidas medias que van desde días hasta cientos de miles de años. Los desequilibrios entre isótopos padres e hijos registran el tiempo de procesos magmáticos como fusión parcial, cristalización fraccionada y mezcla de magma en estas escalas de tiempo.",
          de: "Uran-Serien-Isotope haben Halbwertszeiten von Tagen bis zu Hunderttausenden von Jahren. Ungleichgewichte zwischen Mutter- und Tochterisotopen zeichnen das Timing magmatischer Prozesse wie partielle Schmelze, fraktionierte Kristallisation und Magmamischung auf diesen Zeitskalen auf.",
          nl: "Uranium-serie isotopen hebben halfwaardetijden variërend van dagen tot honderdduizenden jaren. Disequilibria tussen ouder- en dochterisotopen registreren de timing van magmatische processen zoals partieel smelten, fractionele kristallisatie en magmamenging op deze tijdschalen."
        }
      }
      },
      {
        question: {
          en: "How do volcanic aerosol-cloud interactions affect regional precipitation?",
          es: "¿Cómo afectan las interacciones aerosol volcánico-nube la precipitación regional?",
          de: "Wie beeinflussen vulkanische Aerosol-Wolken-Wechselwirkungen den regionalen Niederschlag?",
          nl: "Hoe beïnvloeden vulkanische aerosol-wolk interacties regionale neerslag?"
        },
        options: [
          { en: "Aerosols act as cloud condensation nuclei, potentially suppressing precipitation through the Twomey effect", es: "Los aerosoles actúan como núcleos de condensación de nubes, potencialmente suprimiendo la precipitación a través del efecto Twomey", de: "Aerosole wirken als Wolkenkondensationskeime und unterdrücken möglicherweise Niederschlag durch den Twomey-Effekt", nl: "Aerosolen fungeren als wolkencondensatiekernen, mogelijk onderdrukken ze neerslag door het Twomey-effect" },
          { en: "They always increase rainfall downwind of volcanoes", es: "Siempre aumentan la lluvia a sotavento de los volcanes", de: "Sie erhöhen immer den Niederschlag windabwärts von Vulkanen", nl: "Ze verhogen altijd de regenval benedenwinds van vulkanen" },
          { en: "They have no effect on precipitation patterns", es: "No tienen efecto en los patrones de precipitación", de: "Sie haben keinen Einfluss auf Niederschlagsmuster", nl: "Ze hebben geen effect op neerslagpatronen" },
          { en: "They only affect snow formation", es: "Solo afectan la formación de nieve", de: "Sie beeinflussen nur die Schneebildung", nl: "Ze beïnvloeden alleen sneeuwvorming" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic aerosols increase cloud droplet concentrations while reducing droplet size, leading to more reflective but less precipitating clouds. This 'Twomey effect' can suppress rainfall regionally, potentially causing droughts in affected areas.",
          es: "Los aerosoles volcánicos aumentan las concentraciones de gotitas de nubes mientras reducen el tamaño de las gotitas, llevando a nubes más reflectantes pero menos precipitantes. Este 'efecto Twomey' puede suprimir la lluvia regionalmente, potencialmente causando sequías en áreas afectadas.",
          de: "Vulkanische Aerosole erhöhen die Wolkentröpfchenkonzentrationen bei gleichzeitiger Reduzierung der Tröpfchengröße, was zu reflektierenderen, aber weniger niederschlagenden Wolken führt. Dieser 'Twomey-Effekt' kann regional Niederschlag unterdrücken und möglicherweise Dürren in betroffenen Gebieten verursachen.",
          nl: "Vulkanische aerosolen verhogen wolkendruppelconcentraties terwijl ze de druppelgrootte verminderen, wat leidt tot meer reflecterende maar minder neerslaggevende wolken. Dit 'Twomey-effect' kan regionaal neerslag onderdrukken, mogelijk veroorzaakt het droogtes in getroffen gebieden."
        }
      },
      {
        question: {
          en: "What role does magma compressibility play in eruption dynamics?",
          es: "¿Qué papel juega la compresibilidad del magma en la dinámica de erupciones?",
          de: "Welche Rolle spielt die Magmakompressibilität in der Eruptionsdynamik?",
          nl: "Welke rol speelt magma samendrukbaarheid in uitbarstingsdynamiek?"
        },
        options: [
          { en: "It affects pressure wave propagation and can trigger eruptions through decompression", es: "Afecta la propagación de ondas de presión y puede desencadenar erupciones por descompresión", de: "Sie beeinflusst die Druckwellenausbreitung und kann Eruptionen durch Dekompression auslösen", nl: "Het beïnvloedt drukgolfvoortplanting en kan uitbarstingen triggeren door decompressie" },
          { en: "It only influences lava flow rates", es: "Solo influye en las tasas de flujo de lava", de: "Sie beeinflusst nur Lavaflussraten", nl: "Het beïnvloedt alleen lavastroomsnelheden" },
          { en: "It determines crystal sizes in volcanic rocks", es: "Determina los tamaños de cristales en rocas volcánicas", de: "Sie bestimmt Kristallgrößen in vulkanischen Gesteinen", nl: "Het bepaalt kristalgroottes in vulkanisch gesteente" },
          { en: "It controls the color of volcanic ash", es: "Controla el color de la ceniza volcánica", de: "Sie kontrolliert die Farbe vulkanischer Asche", nl: "Het controleert de kleur van vulkanische as" }
        ],
        correct: 0,
        explanation: {
          en: "Magma compressibility, especially with dissolved gases, allows significant volume changes with pressure variations. This affects how pressure waves propagate through magma bodies and can lead to runaway decompression and explosive eruptions.",
          es: "La compresibilidad del magma, especialmente con gases disueltos, permite cambios significativos de volumen con variaciones de presión. Esto afecta cómo se propagan las ondas de presión a través de cuerpos de magma y puede llevar a descompresión descontrolada y erupciones explosivas.",
          de: "Die Magmakompressibilität, insbesondere mit gelösten Gasen, ermöglicht signifikante Volumenänderungen bei Druckvariationen. Dies beeinflusst, wie sich Druckwellen durch Magmakörper ausbreiten und kann zu unkontrollierter Dekompression und explosiven Eruptionen führen.",
          nl: "Magma samendrukbaarheid, vooral met opgeloste gassen, maakt significante volumeveranderingen mogelijk bij drukvariaties. Dit beïnvloedt hoe drukgolven zich door magmalichamen voortplanten en kan leiden tot ongecontroleerde decompressie en explosieve uitbarstingen."
        }
      },
      {
        question: {
          en: "How do submarine volcanic eruptions contribute to ocean chemistry?",
          es: "¿Cómo contribuyen las erupciones volcánicas submarinas a la química oceánica?",
          de: "Wie tragen submarine Vulkanausbrüche zur Ozeanchemie bei?",
          nl: "Hoe dragen onderzeese vulkanische uitbarstingen bij aan oceaanchemie?"
        },
        options: [
          { en: "They release iron and other trace metals that fertilize ocean productivity", es: "Liberan hierro y otros metales traza que fertilizan la productividad oceánica", de: "Sie setzen Eisen und andere Spurenmetalle frei, die die Ozeanproduktivität düngen", nl: "Ze geven ijzer en andere sporemetalen vrij die oceaanproductiviteit bevruchten" },
          { en: "They only affect water temperature", es: "Solo afectan la temperatura del agua", de: "Sie beeinflussen nur die Wassertemperatur", nl: "Ze beïnvloeden alleen de watertemperatuur" },
          { en: "They decrease ocean salinity globally", es: "Disminuyen la salinidad oceánica globalmente", de: "Sie verringern global die Ozeansalinität", nl: "Ze verminderen wereldwijd de oceaanzoutgehalte" },
          { en: "They have no chemical impact", es: "No tienen impacto químico", de: "Sie haben keine chemische Auswirkung", nl: "Ze hebben geen chemische impact" }
        ],
        correct: 0,
        explanation: {
          en: "Submarine eruptions inject dissolved iron, manganese, and other bioessential trace metals into seawater. These nutrients can stimulate phytoplankton blooms, affecting marine food webs and carbon cycling in iron-limited ocean regions.",
          es: "Las erupciones submarinas inyectan hierro disuelto, manganeso y otros metales traza bioesenciales en el agua de mar. Estos nutrientes pueden estimular floraciones de fitoplancton, afectando las redes alimentarias marinas y el ciclo del carbono en regiones oceánicas limitadas por hierro.",
          de: "Submarine Eruptionen injizieren gelöstes Eisen, Mangan und andere bioessentielle Spurenmetalle ins Meerwasser. Diese Nährstoffe können Phytoplanktonblüten stimulieren und marine Nahrungsnetze sowie den Kohlenstoffkreislauf in eisenlimitierten Ozeanregionen beeinflussen.",
          nl: "Onderzeese uitbarstingen injecteren opgelost ijzer, mangaan en andere bio-essentiële sporemetalen in zeewater. Deze voedingsstoffen kunnen fytoplanktonbloei stimuleren, wat mariene voedselwebben en koolstofcycli in ijzer-gelimiteerde oceaanregio's beïnvloedt."
        }
      },
      {
        question: {
          en: "What is the importance of crystal size distributions (CSDs) in volcanic rocks?",
          es: "¿Cuál es la importancia de las distribuciones de tamaño de cristales (CSD) en rocas volcánicas?",
          de: "Was ist die Bedeutung von Kristallgrößenverteilungen (CSDs) in vulkanischen Gesteinen?",
          nl: "Wat is het belang van kristalgrootteverdelingen (CSDs) in vulkanisch gesteente?"
        },
        options: [
          { en: "CSDs record crystallization rates and residence times in magma storage regions", es: "Las CSD registran tasas de cristalización y tiempos de residencia en regiones de almacenamiento de magma", de: "CSDs zeichnen Kristallisationsraten und Verweilzeiten in Magmaspeicherregionen auf", nl: "CSDs registreren kristallisatiesnelheden en verblijftijden in magmaopslaggebieden" },
          { en: "They only indicate rock hardness", es: "Solo indican la dureza de la roca", de: "Sie zeigen nur die Gesteinshärte an", nl: "Ze geven alleen de hardheid van gesteente aan" },
          { en: "They determine the color of volcanic rocks", es: "Determinan el color de las rocas volcánicas", de: "Sie bestimmen die Farbe vulkanischer Gesteine", nl: "Ze bepalen de kleur van vulkanisch gesteente" },
          { en: "They measure gas content in magma", es: "Miden el contenido de gas en el magma", de: "Sie messen den Gasgehalt im Magma", nl: "Ze meten het gasgehalte in magma" }
        ],
        correct: 0,
        explanation: {
          en: "Crystal size distributions provide quantitative information about nucleation and growth rates during crystallization. By analyzing CSDs, scientists can determine magma cooling rates, mixing events, and residence times in different parts of the volcanic plumbing system.",
          es: "Las distribuciones de tamaño de cristales proporcionan información cuantitativa sobre tasas de nucleación y crecimiento durante la cristalización. Al analizar las CSD, los científicos pueden determinar tasas de enfriamiento del magma, eventos de mezcla y tiempos de residencia en diferentes partes del sistema de plomería volcánica.",
          de: "Kristallgrößenverteilungen liefern quantitative Informationen über Nukleations- und Wachstumsraten während der Kristallisation. Durch die Analyse von CSDs können Wissenschaftler Magmakühlraten, Mischungsereignisse und Verweilzeiten in verschiedenen Teilen des vulkanischen Rohrleitungssystems bestimmen.",
          nl: "Kristalgrootteverdelingen bieden kwantitatieve informatie over nucleatie- en groeisnelheden tijdens kristallisatie. Door CSDs te analyseren kunnen wetenschappers magma-afkoelsnelheden, menggebeurtenissen en verblijftijden in verschillende delen van het vulkanische leidingsysteem bepalen."
        }
      },
      {
        question: {
          en: "How do volcanic gases influence atmospheric photochemistry?",
          es: "¿Cómo influyen los gases volcánicos en la fotoquímica atmosférica?",
          de: "Wie beeinflussen vulkanische Gase die atmosphärische Photochemie?",
          nl: "Hoe beïnvloeden vulkanische gassen atmosferische fotochemie?"
        },
        options: [
          { en: "SO2 oxidation to sulfate aerosols affects UV radiation and ozone chemistry", es: "La oxidación de SO2 a aerosoles de sulfato afecta la radiación UV y la química del ozono", de: "SO2-Oxidation zu Sulfat-Aerosolen beeinflusst UV-Strahlung und Ozonchemie", nl: "SO2-oxidatie tot sulfaataerosolen beïnvloedt UV-straling en ozonchemie" },
          { en: "They only affect local air quality", es: "Solo afectan la calidad del aire local", de: "Sie beeinflussen nur die lokale Luftqualität", nl: "Ze beïnvloeden alleen de lokale luchtkwaliteit" },
          { en: "They have no photochemical effects", es: "No tienen efectos fotoquímicos", de: "Sie haben keine photochemischen Effekte", nl: "Ze hebben geen fotochemische effecten" },
          { en: "They only interact with water vapor", es: "Solo interactúan con el vapor de agua", de: "Sie interagieren nur mit Wasserdampf", nl: "Ze interageren alleen met waterdamp" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic SO2 undergoes photochemical oxidation to form sulfate aerosols, which scatter UV radiation and provide surfaces for heterogeneous chemistry. This affects ozone depletion, atmospheric oxidation capacity, and the formation of photochemical smog.",
          es: "El SO2 volcánico sufre oxidación fotoquímica para formar aerosoles de sulfato, que dispersan la radiación UV y proporcionan superficies para química heterogénea. Esto afecta el agotamiento del ozono, la capacidad de oxidación atmosférica y la formación de smog fotoquímico.",
          de: "Vulkanisches SO2 unterliegt photochemischer Oxidation zur Bildung von Sulfat-Aerosolen, die UV-Strahlung streuen und Oberflächen für heterogene Chemie bieten. Dies beeinflusst den Ozonabbau, die atmosphärische Oxidationskapazität und die Bildung von photochemischem Smog.",
          nl: "Vulkanisch SO2 ondergaat fotochemische oxidatie om sulfaataerosolen te vormen, die UV-straling verstrooien en oppervlakken bieden voor heterogene chemie. Dit beïnvloedt ozonafbraak, atmosferische oxidatiecapaciteit en de vorming van fotochemische smog."
        }
      },
      {
        question: {
          en: "What is the role of volatiles in controlling magma ascent rates?",
          es: "¿Cuál es el papel de los volátiles en el control de las tasas de ascenso del magma?",
          de: "Welche Rolle spielen flüchtige Stoffe bei der Kontrolle der Magmaaufstiegsraten?",
          nl: "Wat is de rol van vluchtige stoffen bij het beheersen van magma-opstijgsnelheden?"
        },
        options: [
          { en: "Volatile exsolution reduces magma density and increases buoyancy, accelerating ascent", es: "La exsolución de volátiles reduce la densidad del magma y aumenta la flotabilidad, acelerando el ascenso", de: "Die Entgasung flüchtiger Stoffe reduziert die Magmadichte und erhöht den Auftrieb, was den Aufstieg beschleunigt", nl: "Vluchtige exsolutie vermindert magmadichtheid en verhoogt drijfvermogen, wat opstijging versnelt" },
          { en: "Volatiles always slow down magma movement", es: "Los volátiles siempre ralentizan el movimiento del magma", de: "Flüchtige Stoffe verlangsamen immer die Magmabewegung", nl: "Vluchtige stoffen vertragen altijd magmabeweging" },
          { en: "They have no effect on ascent rates", es: "No tienen efecto en las tasas de ascenso", de: "Sie haben keinen Einfluss auf Aufstiegsraten", nl: "Ze hebben geen effect op opstijgsnelheden" },
          { en: "They only affect surface eruptions", es: "Solo afectan las erupciones superficiales", de: "Sie beeinflussen nur Oberflächeneruptionen", nl: "Ze beïnvloeden alleen oppervlakte-uitbarstingen" }
        ],
        correct: 0,
        explanation: {
          en: "As magma rises and pressure decreases, dissolved volatiles exsolve to form gas bubbles. This reduces bulk magma density, increases buoyancy forces, and can lead to rapid acceleration of ascent rates, potentially triggering explosive eruptions.",
          es: "A medida que el magma sube y la presión disminuye, los volátiles disueltos se exuelven para formar burbujas de gas. Esto reduce la densidad del magma, aumenta las fuerzas de flotabilidad y puede llevar a una rápida aceleración de las tasas de ascenso, potencialmente desencadenando erupciones explosivas.",
          de: "Wenn Magma aufsteigt und der Druck abnimmt, entgasen gelöste flüchtige Stoffe und bilden Gasblasen. Dies reduziert die Magmadichte, erhöht Auftriebskräfte und kann zu einer schnellen Beschleunigung der Aufstiegsraten führen, was möglicherweise explosive Eruptionen auslöst.",
          nl: "Als magma stijgt en de druk afneemt, komen opgeloste vluchtige stoffen vrij om gasbellen te vormen. Dit vermindert de bulkdichtheid van magma, verhoogt drijfkrachten en kan leiden tot snelle versnelling van opstijgsnelheden, mogelijk triggert het explosieve uitbarstingen."
        }
      },
      {
        question: {
          en: "How do cryptodomes differ from conventional lava domes?",
          es: "¿Cómo difieren los criptodomos de los domos de lava convencionales?",
          de: "Wie unterscheiden sich Kryptodome von konventionellen Lavadomen?",
          nl: "Hoe verschillen cryptodomes van conventionele lavakoepels?"
        },
        options: [
          { en: "Cryptodomes form beneath the surface, causing ground deformation without extrusion", es: "Los criptodomos se forman bajo la superficie, causando deformación del suelo sin extrusión", de: "Kryptodome bilden sich unter der Oberfläche und verursachen Bodenverformung ohne Extrusion", nl: "Cryptodomes vormen zich onder het oppervlak, veroorzaken grondvervorming zonder extrusie" },
          { en: "They are always larger than surface domes", es: "Siempre son más grandes que los domos superficiales", de: "Sie sind immer größer als Oberflächendome", nl: "Ze zijn altijd groter dan oppervlaktekoepels" },
          { en: "They only form in water", es: "Solo se forman en agua", de: "Sie bilden sich nur im Wasser", nl: "Ze vormen zich alleen in water" },
          { en: "They have different chemical compositions", es: "Tienen composiciones químicas diferentes", de: "Sie haben unterschiedliche chemische Zusammensetzungen", nl: "Ze hebben verschillende chemische samenstellingen" }
        ],
        correct: 0,
        explanation: {
          en: "Cryptodomes are shallow intrusions that deform the overlying ground without breaking through to the surface. They represent failed eruptions where magma stalls at shallow depth, potentially leading to lateral blasts like the 1980 Mount St. Helens eruption.",
          es: "Los criptodomos son intrusiones poco profundas que deforman el suelo suprayacente sin atravesar hasta la superficie. Representan erupciones fallidas donde el magma se detiene a poca profundidad, potencialmente llevando a explosiones laterales como la erupción del Monte Santa Helena de 1980.",
          de: "Kryptodome sind flache Intrusionen, die den darüberliegenden Boden verformen, ohne an die Oberfläche durchzubrechen. Sie repräsentieren gescheiterte Eruptionen, bei denen Magma in geringer Tiefe stecken bleibt und möglicherweise zu lateralen Explosionen wie beim Ausbruch des Mount St. Helens 1980 führt.",
          nl: "Cryptodomes zijn ondiepe intrusies die de bovenliggende grond vervormen zonder door te breken naar het oppervlak. Ze vertegenwoordigen mislukte uitbarstingen waarbij magma op geringe diepte blijft steken, mogelijk leidend tot laterale explosies zoals de 1980 Mount St. Helens uitbarsting."
        }
      },
      {
        question: {
          en: "What insights do olivine-hosted melt inclusions provide about mantle sources?",
          es: "¿Qué información proporcionan las inclusiones de fundido alojadas en olivino sobre las fuentes del manto?",
          de: "Welche Einblicke liefern Olivin-gehostete Schmelzeinschlüsse über Mantelquellen?",
          nl: "Welke inzichten bieden olivijn-gehoste smeltinsluitsels over mantelbronnen?"
        },
        options: [
          { en: "They preserve primitive melt compositions before crustal contamination and differentiation", es: "Preservan composiciones de fundido primitivas antes de la contaminación crustal y diferenciación", de: "Sie bewahren primitive Schmelzzusammensetzungen vor krustaler Kontamination und Differenzierung", nl: "Ze behouden primitieve smeltcomposities voor korstbesmetting en differentiatie" },
          { en: "They only record surface conditions", es: "Solo registran condiciones superficiales", de: "Sie zeichnen nur Oberflächenbedingungen auf", nl: "Ze registreren alleen oppervlakteomstandigheden" },
          { en: "They indicate the age of the Earth", es: "Indican la edad de la Tierra", de: "Sie zeigen das Alter der Erde an", nl: "Ze geven de leeftijd van de Aarde aan" },
          { en: "They measure seismic velocities", es: "Miden velocidades sísmicas", de: "Sie messen seismische Geschwindigkeiten", nl: "Ze meten seismische snelheden" }
        ],
        correct: 0,
        explanation: {
          en: "Olivine crystallizes early from primitive magmas, trapping melt inclusions that preserve original mantle-derived compositions. These inclusions provide direct evidence of mantle heterogeneity, volatile contents, and melting conditions unmodified by later processes.",
          es: "El olivino cristaliza temprano de magmas primitivos, atrapando inclusiones de fundido que preservan composiciones originales derivadas del manto. Estas inclusiones proporcionan evidencia directa de heterogeneidad del manto, contenidos volátiles y condiciones de fusión no modificadas por procesos posteriores.",
          de: "Olivin kristallisiert früh aus primitiven Magmen und schließt Schmelzeinschlüsse ein, die ursprüngliche mantelabgeleitete Zusammensetzungen bewahren. Diese Einschlüsse liefern direkte Beweise für Mantelheterogenität, flüchtige Inhalte und Schmelzbedingungen, die durch spätere Prozesse unverändert sind.",
          nl: "Olivijn kristalliseert vroeg uit primitieve magma's, waarbij smeltinsluitsels worden gevangen die oorspronkelijke mantel-afgeleide composities behouden. Deze insluitsels bieden direct bewijs van mantelheterogeniteit, vluchtige inhouden en smeltomstandigheden ongewijzigd door latere processen."
        }
      },
      {
        question: {
          en: "How do peperites form and what do they indicate?",
          es: "¿Cómo se forman las peperitas y qué indican?",
          de: "Wie entstehen Peperite und was zeigen sie an?",
          nl: "Hoe vormen peperieten zich en wat geven ze aan?"
        },
        options: [
          { en: "They form when magma intrudes wet, unconsolidated sediments, indicating shallow subvolcanic environments", es: "Se forman cuando el magma intruye sedimentos húmedos no consolidados, indicando ambientes subvolcánicos poco profundos", de: "Sie entstehen, wenn Magma in nasse, unverfestigte Sedimente eindringt, was auf flache subvulkanische Umgebungen hinweist", nl: "Ze vormen zich wanneer magma natte, ongeconsolideerde sedimenten binnendringt, wat ondiepe subvulkanische omgevingen aangeeft" },
          { en: "They are purely explosive deposits", es: "Son depósitos puramente explosivos", de: "Sie sind rein explosive Ablagerungen", nl: "Het zijn puur explosieve afzettingen" },
          { en: "They only form in deep ocean trenches", es: "Solo se forman en fosas oceánicas profundas", de: "Sie bilden sich nur in tiefen Ozeangräben", nl: "Ze vormen zich alleen in diepe oceaantroggen" },
          { en: "They indicate meteorite impacts", es: "Indican impactos de meteoritos", de: "Sie zeigen Meteoriteneinschläge an", nl: "Ze geven meteorietinslagen aan" }
        ],
        correct: 0,
        explanation: {
          en: "Peperites are rock textures formed by the mingling of magma with wet, unconsolidated sediments. Steam generation causes fluidization and mixing, creating distinctive textures that indicate shallow intrusion depths and the presence of water-saturated host rocks.",
          es: "Las peperitas son texturas de roca formadas por la mezcla de magma con sedimentos húmedos no consolidados. La generación de vapor causa fluidización y mezcla, creando texturas distintivas que indican profundidades de intrusión poco profundas y la presencia de rocas huésped saturadas de agua.",
          de: "Peperite sind Gesteinstexturen, die durch die Vermischung von Magma mit nassen, unverfestigten Sedimenten entstehen. Die Dampferzeugung verursacht Fluidisierung und Vermischung und erzeugt charakteristische Texturen, die auf geringe Intrussionstiefen und das Vorhandensein wassergesättigter Wirtsgesteine hinweisen.",
          nl: "Peperieten zijn gesteentetexturen gevormd door de vermenging van magma met natte, ongeconsolideerde sedimenten. Stoomgeneratie veroorzaakt fluïdisatie en menging, wat kenmerkende texturen creëert die ondiepe intrusie diepten en de aanwezigheid van waterverzadigde gastgesteenten aangeven."
        }
      },
      {
        question: {
          en: "What is the significance of sulfur isotope fractionation in volcanic systems?",
          es: "¿Cuál es la importancia del fraccionamiento isotópico del azufre en sistemas volcánicos?",
          de: "Was ist die Bedeutung der Schwefelisotopenfraktionierung in vulkanischen Systemen?",
          nl: "Wat is de betekenis van zwavel isotoop fractionering in vulkanische systemen?"
        },
        options: [
          { en: "It traces sulfur sources, oxidation states, and hydrothermal-magmatic interactions", es: "Rastrea fuentes de azufre, estados de oxidación e interacciones hidrotermales-magmáticas", de: "Sie verfolgt Schwefelquellen, Oxidationszustände und hydrothermale-magmatische Wechselwirkungen", nl: "Het traceert zwavelbronnen, oxidatietoestanden en hydrothermale-magmatische interacties" },
          { en: "It only measures temperature", es: "Solo mide la temperatura", de: "Sie misst nur die Temperatur", nl: "Het meet alleen temperatuur" },
          { en: "It determines eruption timing", es: "Determina el momento de la erupción", de: "Sie bestimmt den Eruptionszeitpunkt", nl: "Het bepaalt uitbarstingstiming" },
          { en: "It indicates magma volume", es: "Indica el volumen de magma", de: "Sie zeigt das Magmavolumen an", nl: "Het geeft magmavolume aan" }
        ],
        correct: 0,
        explanation: {
          en: "Sulfur isotope ratios (δ34S) vary with source (mantle vs. crustal), oxidation state (SO2 vs. H2S), and temperature. This fractionation helps identify magma sources, track hydrothermal fluid circulation, and understand degassing processes.",
          es: "Las proporciones de isótopos de azufre (δ34S) varían con la fuente (manto vs. corteza), estado de oxidación (SO2 vs. H2S) y temperatura. Este fraccionamiento ayuda a identificar fuentes de magma, rastrear la circulación de fluidos hidrotermales y entender procesos de desgasificación.",
          de: "Schwefelisotopenverhältnisse (δ34S) variieren mit der Quelle (Mantel vs. Kruste), dem Oxidationszustand (SO2 vs. H2S) und der Temperatur. Diese Fraktionierung hilft, Magmaquellen zu identifizieren, hydrothermale Flüssigkeitszirkulation zu verfolgen und Entgasungsprozesse zu verstehen.",
          nl: "Zwavel isotoopverhoudingen (δ34S) variëren met bron (mantel vs. korst), oxidatietoestand (SO2 vs. H2S) en temperatuur. Deze fractionering helpt magmabronnen te identificeren, hydrothermale vloeistofcirculatie te volgen en ontgassingsprocessen te begrijpen."
        }
      },
      {
        question: {
          en: "How do volcanic tremor spectra relate to magma properties?",
          es: "¿Cómo se relacionan los espectros de tremor volcánico con las propiedades del magma?",
          de: "Wie hängen vulkanische Tremorspektren mit Magmaeigenschaften zusammen?",
          nl: "Hoe verhouden vulkanische tremor spectra zich tot magma-eigenschappen?"
        },
        options: [
          { en: "Spectral peaks correspond to resonance frequencies controlled by magma viscosity and gas content", es: "Los picos espectrales corresponden a frecuencias de resonancia controladas por viscosidad del magma y contenido de gas", de: "Spektrale Spitzen entsprechen Resonanzfrequenzen, die durch Magmaviskosität und Gasgehalt gesteuert werden", nl: "Spectrale pieken corresponderen met resonantiefrequenties gecontroleerd door magmaviscositeit en gasgehalte" },
          { en: "They only indicate earthquake magnitude", es: "Solo indican la magnitud del terremoto", de: "Sie zeigen nur die Erdbebenstärke an", nl: "Ze geven alleen aardbevingsmagnitude aan" },
          { en: "They measure ground temperature", es: "Miden la temperatura del suelo", de: "Sie messen die Bodentemperatur", nl: "Ze meten grondtemperatuur" },
          { en: "They have no relation to magma", es: "No tienen relación con el magma", de: "Sie haben keine Beziehung zum Magma", nl: "Ze hebben geen relatie met magma" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic tremor frequency content reflects resonance in magma-filled conduits. Changes in spectral characteristics indicate variations in magma viscosity, gas content, and flow conditions, providing real-time monitoring of eruption dynamics.",
          es: "El contenido de frecuencia del tremor volcánico refleja resonancia en conductos llenos de magma. Los cambios en características espectrales indican variaciones en viscosidad del magma, contenido de gas y condiciones de flujo, proporcionando monitoreo en tiempo real de la dinámica eruptiva.",
          de: "Der Frequenzinhalt vulkanischer Tremor spiegelt Resonanz in magmagefüllten Schloten wider. Änderungen der spektralen Eigenschaften zeigen Variationen in Magmaviskosität, Gasgehalt und Flussbedingungen an und ermöglichen Echtzeitüberwachung der Eruptionsdynamik.",
          nl: "Vulkanische tremor frequentie-inhoud weerspiegelt resonantie in met magma gevulde kanalen. Veranderingen in spectrale kenmerken duiden op variaties in magmaviscositeit, gasgehalte en stromingsomstandigheden, wat real-time monitoring van uitbarstingsdynamiek biedt."
        }
      },
      {
        question: {
          en: "What role do xenoliths play in understanding volcanic plumbing systems?",
          es: "¿Qué papel juegan los xenolitos en la comprensión de los sistemas de plomería volcánica?",
          de: "Welche Rolle spielen Xenolithe beim Verständnis vulkanischer Rohrleitungssysteme?",
          nl: "Welke rol spelen xenolieten in het begrijpen van vulkanische leidingsystemen?"
        },
        options: [
          { en: "They provide samples of wall rocks from different depths along the magma ascent path", es: "Proporcionan muestras de rocas de pared de diferentes profundidades a lo largo del camino de ascenso del magma", de: "Sie liefern Proben von Wandgesteinen aus verschiedenen Tiefen entlang des Magmaaufstiegswegs", nl: "Ze leveren monsters van wandgesteenten van verschillende diepten langs het magma-opstijgpad" },
          { en: "They only indicate surface weathering", es: "Solo indican meteorización superficial", de: "Sie zeigen nur Oberflächenverwitterung an", nl: "Ze geven alleen oppervlakteverwering aan" },
          { en: "They determine eruption frequency", es: "Determinan la frecuencia de erupción", de: "Sie bestimmen die Eruptionsfrequenz", nl: "Ze bepalen uitbarstingsfrequentie" },
          { en: "They measure atmospheric pressure", es: "Miden la presión atmosférica", de: "Sie messen den atmosphärischen Druck", nl: "Ze meten atmosferische druk" }
        ],
        correct: 0,
        explanation: {
          en: "Xenoliths are fragments of country rock entrained by ascending magma. They provide direct samples of crustal and mantle materials from various depths, revealing the lithology, structure, and conditions along the magma transport pathway.",
          es: "Los xenolitos son fragmentos de roca encajante arrastrados por el magma ascendente. Proporcionan muestras directas de materiales corticales y del manto de varias profundidades, revelando la litología, estructura y condiciones a lo largo del camino de transporte del magma.",
          de: "Xenolithe sind Fragmente von Nebengestein, die vom aufsteigenden Magma mitgerissen werden. Sie liefern direkte Proben von Krusten- und Mantelmaterialien aus verschiedenen Tiefen und enthüllen Lithologie, Struktur und Bedingungen entlang des Magmatransportwegs.",
          nl: "Xenolieten zijn fragmenten van nevengesteente meegesleurd door opstijgend magma. Ze leveren directe monsters van korst- en mantelmaterialen van verschillende diepten, onthullen de lithologie, structuur en omstandigheden langs het magmatransportpad."
        }
      },
      {
        question: {
          en: "How does magma mixing trigger explosive eruptions?",
          es: "¿Cómo desencadena la mezcla de magmas erupciones explosivas?",
          de: "Wie löst Magmamischung explosive Eruptionen aus?",
          nl: "Hoe triggert magmamenging explosieve uitbarstingen?"
        },
        options: [
          { en: "Hot mafic magma injection causes volatile oversaturation and rapid vesiculation in silicic magma", es: "La inyección de magma máfico caliente causa sobresaturación volátil y vesiculación rápida en magma silícico", de: "Heiße mafische Magmainjektion verursacht flüchtige Übersättigung und schnelle Vesikulierung in silizischem Magma", nl: "Hete mafische magma-injectie veroorzaakt vluchtige oververzadiging en snelle vesiculatie in silicisch magma" },
          { en: "It always produces quiet effusive eruptions", es: "Siempre produce erupciones efusivas tranquilas", de: "Sie erzeugt immer ruhige effusive Eruptionen", nl: "Het produceert altijd rustige effusieve uitbarstingen" },
          { en: "It prevents eruptions from occurring", es: "Previene que ocurran erupciones", de: "Sie verhindert das Auftreten von Eruptionen", nl: "Het voorkomt dat uitbarstingen plaatsvinden" },
          { en: "It only affects lava color", es: "Solo afecta el color de la lava", de: "Sie beeinflusst nur die Lavafarbe", nl: "Het beïnvloedt alleen de kleur van lava" }
        ],
        correct: 0,
        explanation: {
          en: "When hot, volatile-rich mafic magma mixes with cooler silicic magma, it increases temperature and lowers volatile solubility. This causes rapid bubble nucleation and growth, potentially triggering explosive eruptions within hours to days.",
          es: "Cuando el magma máfico caliente y rico en volátiles se mezcla con magma silícico más frío, aumenta la temperatura y reduce la solubilidad volátil. Esto causa nucleación y crecimiento rápido de burbujas, potencialmente desencadenando erupciones explosivas en horas o días.",
          de: "Wenn heißes, flüchtiges mafisches Magma sich mit kühlerem silizischem Magma mischt, erhöht es die Temperatur und senkt die Löslichkeit flüchtiger Stoffe. Dies verursacht schnelle Blasenbildung und -wachstum und kann innerhalb von Stunden bis Tagen explosive Eruptionen auslösen.",
          nl: "Wanneer heet, vluchtig-rijk mafisch magma zich mengt met koeler silicisch magma, verhoogt het de temperatuur en verlaagt de vluchtige oplosbaarheid. Dit veroorzaakt snelle belnucleatie en groei, mogelijk triggert het explosieve uitbarstingen binnen uren tot dagen."
        }
      },
      {
        question: {
          en: "What information do volcanic glass water contents provide?",
          es: "¿Qué información proporcionan los contenidos de agua del vidrio volcánico?",
          de: "Welche Informationen liefern die Wassergehalte vulkanischer Gläser?",
          nl: "Welke informatie bieden vulkanisch glas watergehalten?"
        },
        options: [
          { en: "They record quenching pressure and help reconstruct eruption dynamics and fragmentation depths", es: "Registran la presión de enfriamiento y ayudan a reconstruir la dinámica eruptiva y profundidades de fragmentación", de: "Sie zeichnen den Abschreckdruck auf und helfen, Eruptionsdynamik und Fragmentierungstiefen zu rekonstruieren", nl: "Ze registreren afschrikdruk en helpen uitbarstingsdynamiek en fragmentatiediepten te reconstrueren" },
          { en: "They only indicate rainfall amounts", es: "Solo indican cantidades de lluvia", de: "Sie zeigen nur Niederschlagsmengen an", nl: "Ze geven alleen neerslaghoeveelheden aan" },
          { en: "They measure air temperature", es: "Miden la temperatura del aire", de: "Sie messen die Lufttemperatur", nl: "Ze meten luchttemperatuur" },
          { en: "They have no volcanic significance", es: "No tienen importancia volcánica", de: "Sie haben keine vulkanische Bedeutung", nl: "Ze hebben geen vulkanische betekenis" }
        ],
        correct: 0,
        explanation: {
          en: "Water solubility in silicate melts is pressure-dependent. The dissolved water content in volcanic glass records the pressure at which the melt was quenched, providing information about fragmentation depth, ascent rate, and eruption intensity.",
          es: "La solubilidad del agua en fundidos de silicato depende de la presión. El contenido de agua disuelta en vidrio volcánico registra la presión a la que se enfrió el fundido, proporcionando información sobre profundidad de fragmentación, tasa de ascenso e intensidad eruptiva.",
          de: "Die Wasserlöslichkeit in Silikatschmelzen ist druckabhängig. Der gelöste Wassergehalt in vulkanischem Glas zeichnet den Druck auf, bei dem die Schmelze abgeschreckt wurde, und liefert Informationen über Fragmentierungstiefe, Aufstiegsrate und Eruptionsintensität.",
          nl: "Wateroplosbaarheid in silicaatsmelten is drukafhankelijk. Het opgeloste watergehalte in vulkanisch glas registreert de druk waarbij de smelt werd afgeschrikt, wat informatie geeft over fragmentatiediepte, opstijgsnelheid en uitbarstingsintensiteit."
        }
      },
      {
        question: {
          en: "How do volcanic plumes interact with the atmospheric boundary layer?",
          es: "¿Cómo interactúan las plumas volcánicas con la capa límite atmosférica?",
          de: "Wie interagieren vulkanische Fahnen mit der atmosphärischen Grenzschicht?",
          nl: "Hoe interageren vulkanische pluimen met de atmosferische grenslaag?"
        },
        options: [
          { en: "Plume buoyancy and atmospheric stratification determine injection height and dispersal patterns", es: "La flotabilidad de la pluma y estratificación atmosférica determinan altura de inyección y patrones de dispersión", de: "Fahnenauftrieb und atmosphärische Schichtung bestimmen Injektionshöhe und Ausbreitungsmuster", nl: "Pluim drijfvermogen en atmosferische stratificatie bepalen injectiehoogte en verspreidingspatronen" },
          { en: "They never reach the boundary layer", es: "Nunca alcanzan la capa límite", de: "Sie erreichen nie die Grenzschicht", nl: "Ze bereiken nooit de grenslaag" },
          { en: "They only affect local wind patterns", es: "Solo afectan patrones de viento locales", de: "Sie beeinflussen nur lokale Windmuster", nl: "Ze beïnvloeden alleen lokale windpatronen" },
          { en: "They have no atmospheric interactions", es: "No tienen interacciones atmosféricas", de: "Sie haben keine atmosphärischen Wechselwirkungen", nl: "Ze hebben geen atmosferische interacties" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic plume rise depends on the balance between plume buoyancy and atmospheric density stratification. The boundary layer structure controls whether plumes penetrate into the free troposphere or spread laterally, affecting ash dispersal and aviation hazards.",
          es: "El ascenso de la pluma volcánica depende del equilibrio entre flotabilidad de la pluma y estratificación de densidad atmosférica. La estructura de la capa límite controla si las plumas penetran en la troposfera libre o se dispersan lateralmente, afectando la dispersión de ceniza y peligros para la aviación.",
          de: "Der Aufstieg vulkanischer Fahnen hängt vom Gleichgewicht zwischen Fahnenauftrieb und atmosphärischer Dichteschichtung ab. Die Grenzschichtstruktur kontrolliert, ob Fahnen in die freie Troposphäre eindringen oder sich seitlich ausbreiten, was die Ascheausbreitung und Luftfahrtgefahren beeinflusst.",
          nl: "Vulkanische pluimstijging hangt af van de balans tussen pluimdrijfvermogen en atmosferische dichtheidsstratificatie. De grenslaagstructuur controleert of pluimen doordringen in de vrije troposfeer of zich lateraal verspreiden, wat asverspreiding en luchtvaartgevaren beïnvloedt."
        }
      },
      {
        question: {
          en: "What controls the transition from strombolian to vulcanian eruption style?",
          es: "¿Qué controla la transición del estilo eruptivo estromboliano al vulcaniano?",
          de: "Was kontrolliert den Übergang vom strombolianischen zum vulkanischen Eruptionsstil?",
          nl: "Wat controleert de overgang van stromboliaanse naar vulcaniaanse uitbarstingsstijl?"
        },
        options: [
          { en: "Increasing magma viscosity and crystallinity leads to higher fragmentation efficiency", es: "El aumento de viscosidad y cristalinidad del magma lleva a mayor eficiencia de fragmentación", de: "Zunehmende Magmaviskosität und Kristallinität führt zu höherer Fragmentierungseffizienz", nl: "Toenemende magmaviscositeit en kristalliniteit leidt tot hogere fragmentatie-efficiëntie" },
          { en: "Changes in atmospheric pressure", es: "Cambios en la presión atmosférica", de: "Änderungen des atmosphärischen Drucks", nl: "Veranderingen in atmosferische druk" },
          { en: "Variations in gravity", es: "Variaciones en la gravedad", de: "Variationen der Schwerkraft", nl: "Variaties in zwaartekracht" },
          { en: "Seasonal temperature changes", es: "Cambios estacionales de temperatura", de: "Saisonale Temperaturänderungen", nl: "Seizoensgebonden temperatuurveranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "The transition from strombolian to vulcanian activity occurs as magma becomes more viscous and crystal-rich. This increases fragmentation threshold pressure, leading to more violent gas release and complete conduit evacuation characteristic of vulcanian eruptions.",
          es: "La transición de actividad estromboliana a vulcaniana ocurre cuando el magma se vuelve más viscoso y rico en cristales. Esto aumenta la presión umbral de fragmentación, llevando a liberación de gas más violenta y evacuación completa del conducto característica de erupciones vulcanianas.",
          de: "Der Übergang von strombolianischer zu vulkanischer Aktivität tritt auf, wenn Magma viskoser und kristallreicher wird. Dies erhöht den Fragmentierungsschwellendruck, was zu heftigerer Gasfreisetzung und vollständiger Schlotevakuierung führt, die für vulkanische Eruptionen charakteristisch ist.",
          nl: "De overgang van stromboliaanse naar vulcaniaanse activiteit treedt op wanneer magma visceuzer en kristalrijker wordt. Dit verhoogt de fragmentatiedrempeldruk, wat leidt tot heftiger gasafgifte en volledige kanaalevacuatie kenmerkend voor vulcaniaanse uitbarstingen."
        }
      },
      {
        question: {
          en: "How do fumarolic gas compositions evolve during volcanic unrest?",
          es: "¿Cómo evolucionan las composiciones de gases fumarólicos durante la inquietud volcánica?",
          de: "Wie entwickeln sich fumarolische Gaszusammensetzungen während vulkanischer Unruhe?",
          nl: "Hoe evolueren fumarolische gascomposities tijdens vulkanische onrust?"
        },
        options: [
          { en: "Increasing SO2/H2S and CO2/CH4 ratios indicate rising magmatic input", es: "El aumento de las proporciones SO2/H2S y CO2/CH4 indica aumento de aporte magmático", de: "Steigende SO2/H2S- und CO2/CH4-Verhältnisse zeigen zunehmenden magmatischen Eintrag an", nl: "Toenemende SO2/H2S en CO2/CH4 verhoudingen duiden op stijgende magmatische input" },
          { en: "Gas compositions remain constant", es: "Las composiciones de gas permanecen constantes", de: "Gaszusammensetzungen bleiben konstant", nl: "Gascomposities blijven constant" },
          { en: "Only water vapor changes", es: "Solo cambia el vapor de agua", de: "Nur Wasserdampf ändert sich", nl: "Alleen waterdamp verandert" },
          { en: "Gases disappear completely", es: "Los gases desaparecen completamente", de: "Gase verschwinden vollständig", nl: "Gassen verdwijnen volledig" }
        ],
        correct: 0,
        explanation: {
          en: "During volcanic unrest, increasing magmatic gas input shifts fumarolic compositions toward more oxidized species. Rising SO2/H2S and CO2/CH4 ratios indicate higher temperatures and more direct magmatic contribution, serving as eruption precursors.",
          es: "Durante la inquietud volcánica, el aumento del aporte de gas magmático cambia las composiciones fumarólicas hacia especies más oxidadas. El aumento de las proporciones SO2/H2S y CO2/CH4 indica temperaturas más altas y contribución magmática más directa, sirviendo como precursores eruptivos.",
          de: "Während vulkanischer Unruhe verschiebt zunehmender magmatischer Gaseintrag fumarolische Zusammensetzungen zu stärker oxidierten Spezies. Steigende SO2/H2S- und CO2/CH4-Verhältnisse zeigen höhere Temperaturen und direkteren magmatischen Beitrag an und dienen als Eruptionsvorläufer.",
          nl: "Tijdens vulkanische onrust verschuift toenemende magmatische gasinput fumarolische composities naar meer geoxideerde soorten. Stijgende SO2/H2S en CO2/CH4 verhoudingen duiden op hogere temperaturen en meer directe magmatische bijdrage, dienend als uitbarstingsvoortekenen."
        }
      },
      {
        question: {
          en: "What is the role of decompression rate in controlling eruption explosivity?",
          es: "¿Cuál es el papel de la tasa de descompresión en el control de la explosividad eruptiva?",
          de: "Welche Rolle spielt die Dekompressionsrate bei der Kontrolle der Eruptionsexplosivität?",
          nl: "Wat is de rol van decompressiesnelheid bij het beheersen van uitbarstingsexplosiviteit?"
        },
        options: [
          { en: "Rapid decompression promotes disequilibrium degassing and explosive fragmentation", es: "La descompresión rápida promueve desgasificación en desequilibrio y fragmentación explosiva", de: "Schnelle Dekompression fördert Ungleichgewichtsentgasung und explosive Fragmentierung", nl: "Snelle decompressie bevordert disequilibrium ontgassing en explosieve fragmentatie" },
          { en: "Decompression rate has no effect", es: "La tasa de descompresión no tiene efecto", de: "Die Dekompressionsrate hat keinen Effekt", nl: "Decompressiesnelheid heeft geen effect" },
          { en: "Slow decompression causes explosions", es: "La descompresión lenta causa explosiones", de: "Langsame Dekompression verursacht Explosionen", nl: "Langzame decompressie veroorzaakt explosies" },
          { en: "It only affects lava temperature", es: "Solo afecta la temperatura de la lava", de: "Sie beeinflusst nur die Lavatemperatur", nl: "Het beïnvloedt alleen lavatemperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Rapid decompression during magma ascent prevents equilibrium degassing, leading to volatile supersaturation. This promotes extensive bubble nucleation and growth, increasing internal pressure until explosive fragmentation occurs.",
          es: "La descompresión rápida durante el ascenso del magma previene la desgasificación en equilibrio, llevando a sobresaturación volátil. Esto promueve nucleación y crecimiento extensivo de burbujas, aumentando la presión interna hasta que ocurre fragmentación explosiva.",
          de: "Schnelle Dekompression während des Magmaaufstiegs verhindert Gleichgewichtsentgasung und führt zu flüchtiger Übersättigung. Dies fördert extensive Blasenbildung und -wachstum, erhöht den Innendruck bis explosive Fragmentierung auftritt.",
          nl: "Snelle decompressie tijdens magma-opstijging voorkomt evenwichtsontgassing, wat leidt tot vluchtige oververzadiging. Dit bevordert uitgebreide belnucleatie en groei, verhoogt interne druk tot explosieve fragmentatie optreedt."
        }
      },
      {
        question: {
          en: "How do pyroclastic density currents interact with topography?",
          es: "¿Cómo interactúan las corrientes de densidad piroclástica con la topografía?",
          de: "Wie interagieren pyroklastische Dichteströme mit der Topographie?",
          nl: "Hoe interageren pyroclastische dichtheidsstromen met topografie?"
        },
        options: [
          { en: "Flow dynamics change from supercritical to subcritical at topographic obstacles, causing deposition", es: "La dinámica de flujo cambia de supercrítica a subcrítica en obstáculos topográficos, causando deposición", de: "Die Strömungsdynamik wechselt von überkritisch zu unterkritisch an topographischen Hindernissen und verursacht Ablagerung", nl: "Stromingsdynamiek verandert van superkritisch naar subkritisch bij topografische obstakels, veroorzaakt afzetting" },
          { en: "They ignore all topographic features", es: "Ignoran todas las características topográficas", de: "Sie ignorieren alle topographischen Merkmale", nl: "Ze negeren alle topografische kenmerken" },
          { en: "They only flow uphill", es: "Solo fluyen cuesta arriba", de: "Sie fließen nur bergauf", nl: "Ze stromen alleen bergop" },
          { en: "They stop at any obstacle", es: "Se detienen en cualquier obstáculo", de: "Sie stoppen bei jedem Hindernis", nl: "Ze stoppen bij elk obstakel" }
        ],
        correct: 0,
        explanation: {
          en: "Pyroclastic density currents exhibit hydraulic jumps at topographic obstacles where flow transitions from supercritical to subcritical. This causes rapid deceleration, enhanced deposition, and flow transformation, affecting runout distance and hazard zones.",
          es: "Las corrientes de densidad piroclástica exhiben saltos hidráulicos en obstáculos topográficos donde el flujo transiciona de supercrítico a subcrítico. Esto causa desaceleración rápida, deposición mejorada y transformación del flujo, afectando distancia de alcance y zonas de peligro.",
          de: "Pyroklastische Dichteströme zeigen hydraulische Sprünge an topographischen Hindernissen, wo die Strömung von überkritisch zu unterkritisch übergeht. Dies verursacht schnelle Verzögerung, verstärkte Ablagerung und Strömungstransformation, was Auslaufdistanz und Gefahrenzonen beeinflusst.",
          nl: "Pyroclastische dichtheidsstromen vertonen hydraulische sprongen bij topografische obstakels waar stroming overgaat van superkritisch naar subkritisch. Dit veroorzaakt snelle vertraging, verhoogde afzetting en stromingstransformatie, wat uitloopafstand en gevarenzones beïnvloedt."
        }
      },
      {
        question: {
          en: "What do diffusion profiles in crystals reveal about magmatic timescales?",
          es: "¿Qué revelan los perfiles de difusión en cristales sobre las escalas de tiempo magmáticas?",
          de: "Was enthüllen Diffusionsprofile in Kristallen über magmatische Zeitskalen?",
          nl: "Wat onthullen diffusieprofielen in kristallen over magmatische tijdschalen?"
        },
        options: [
          { en: "Element concentration gradients record time between magmatic events based on temperature-dependent diffusion rates", es: "Los gradientes de concentración de elementos registran tiempo entre eventos magmáticos basados en tasas de difusión dependientes de temperatura", de: "Elementkonzentrationsgradienten zeichnen Zeit zwischen magmatischen Ereignissen basierend auf temperaturabhängigen Diffusionsraten auf", nl: "Element concentratiegradiënten registreren tijd tussen magmatische gebeurtenissen gebaseerd op temperatuurafhankelijke diffusiesnelheden" },
          { en: "They only show crystal color", es: "Solo muestran el color del cristal", de: "Sie zeigen nur die Kristallfarbe", nl: "Ze tonen alleen kristalkleur" },
          { en: "They indicate water depth", es: "Indican la profundidad del agua", de: "Sie zeigen die Wassertiefe an", nl: "Ze geven waterdiepte aan" },
          { en: "They have no time information", es: "No tienen información temporal", de: "Sie haben keine Zeitinformationen", nl: "Ze hebben geen tijdinformatie" }
        ],
        correct: 0,
        explanation: {
          en: "Chemical diffusion in crystals creates concentration gradients that relax over time. By measuring these profiles and knowing temperature-dependent diffusion coefficients, scientists can determine timescales of processes like magma mixing, storage, and ascent.",
          es: "La difusión química en cristales crea gradientes de concentración que se relajan con el tiempo. Al medir estos perfiles y conocer coeficientes de difusión dependientes de temperatura, los científicos pueden determinar escalas de tiempo de procesos como mezcla de magma, almacenamiento y ascenso.",
          de: "Chemische Diffusion in Kristallen erzeugt Konzentrationsgradienten, die sich über Zeit entspannen. Durch Messung dieser Profile und Kenntnis temperaturabhängiger Diffusionskoeffizienten können Wissenschaftler Zeitskalen von Prozessen wie Magmamischung, -speicherung und -aufstieg bestimmen.",
          nl: "Chemische diffusie in kristallen creëert concentratiegradiënten die ontspannen over tijd. Door deze profielen te meten en temperatuurafhankelijke diffusiecoëfficiënten te kennen, kunnen wetenschappers tijdschalen bepalen van processen zoals magmamenging, opslag en opstijging."
        }
      },
      {
        question: {
          en: "What is the significance of volcanic ash aggregation processes?",
          es: "¿Cuál es la importancia de los procesos de agregación de ceniza volcánica?",
          de: "Was ist die Bedeutung vulkanischer Aschenaggregationsprozesse?",
          nl: "Wat is de betekenis van vulkanische as-aggregatieprocessen?"
        },
        options: [
          { en: "Aggregation enhances particle settling rates, reducing atmospheric residence time and aviation hazards", es: "La agregación mejora las tasas de sedimentación de partículas, reduciendo tiempo de residencia atmosférica y peligros para la aviación", de: "Aggregation erhöht Partikelsedimentationsraten, reduziert atmosphärische Verweilzeit und Luftfahrtgefahren", nl: "Aggregatie verhoogt deeltjesbezinkingssnelheden, vermindert atmosferische verblijftijd en luchtvaartgevaren" },
          { en: "It only affects ash color", es: "Solo afecta el color de la ceniza", de: "Sie beeinflusst nur die Aschefarbe", nl: "Het beïnvloedt alleen askleur" },
          { en: "It prevents ash from falling", es: "Previene que la ceniza caiga", de: "Sie verhindert das Fallen von Asche", nl: "Het voorkomt dat as valt" },
          { en: "It has no atmospheric impact", es: "No tiene impacto atmosférico", de: "Sie hat keine atmosphärische Auswirkung", nl: "Het heeft geen atmosferische impact" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic ash aggregation through electrostatic attraction and liquid binding creates larger particles that settle faster than individual grains. This reduces fine ash in the atmosphere, affecting dispersal patterns, climate impacts, and aviation safety.",
          es: "La agregación de ceniza volcánica a través de atracción electrostática y unión líquida crea partículas más grandes que se sedimentan más rápido que granos individuales. Esto reduce ceniza fina en la atmósfera, afectando patrones de dispersión, impactos climáticos y seguridad aérea.",
          de: "Vulkanische Aschenaggregation durch elektrostatische Anziehung und Flüssigkeitsbindung erzeugt größere Partikel, die schneller als einzelne Körner sedimentieren. Dies reduziert Feinasche in der Atmosphäre und beeinflusst Ausbreitungsmuster, Klimaauswirkungen und Flugsicherheit.",
          nl: "Vulkanische as-aggregatie door elektrostatische aantrekking en vloeistofbinding creëert grotere deeltjes die sneller bezinken dan individuele korrels. Dit vermindert fijne as in de atmosfeer, beïnvloedt verspreidingspatronen, klimaatimpacts en luchtvaartveiligheid."
        }
      },
      {
        question: {
          en: "What advances in neutron activation analysis are revealing about volcanic processes?",
          es: "¿Qué avances en análisis de activación neutrónica están revelando sobre procesos volcánicos?",
          de: "Welche Fortschritte in der Neutronenaktivierungsanalyse enthüllen über vulkanische Prozesse?",
          nl: "Welke vooruitgangen in neutronactivatie analyse onthullen over vulkanische processen?"
        },
        options: [
          { en: "High-precision trace element analysis reveals source regions, differentiation pathways, and contamination processes", es: "Análisis de elementos traza de alta precisión revela regiones fuente, vías de diferenciación y procesos de contaminación", de: "Hochpräzise Spurenelement-Analyse enthüllt Quellregionen, Differenzierungswege und Kontaminationsprozesse", nl: "Hoge-precisie spoorelement analyse onthult bronregio's, differentiatie paden en contaminatie processen" },
          { en: "Only determines major element compositions", es: "Solo determina composiciones de elementos mayores", de: "Bestimmt nur Hauptelementzusammensetzungen", nl: "Bepaalt alleen hoofdelement composities" },
          { en: "Cannot detect trace elements in volcanic rocks", es: "No puede detectar elementos traza en rocas volcánicas", de: "Kann Spurenelemente in vulkanischen Gesteinen nicht erkennen", nl: "Kan spoorelementen in vulkanisch gesteente niet detecteren" },
          { en: "Is limited to fresh samples only", es: "Está limitado solo a muestras frescas", de: "Ist nur auf frische Proben beschränkt", nl: "Is beperkt tot alleen verse monsters" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced neutron activation analysis provides ultra-sensitive detection of trace elements including rare earth elements, platinum group elements, and other critical indicators. This technique reveals magma source characteristics, crustal contamination signatures, and differentiation processes with unprecedented precision, enabling detailed petrogenetic modeling and volcanic system evolution studies.",
          es: "El análisis avanzado de activación neutrónica proporciona detección ultra-sensible de elementos traza incluyendo elementos de tierras raras, elementos del grupo del platino y otros indicadores críticos. Esta técnica revela características de fuente de magma, firmas de contaminación cortical y procesos de diferenciación con precisión sin precedentes, permitiendo modelado petrogenético detallado y estudios de evolución de sistemas volcánicos.",
          de: "Fortgeschrittene Neutronenaktivierungsanalyse bietet ultra-empfindliche Erkennung von Spurenelementen einschließlich Seltenerdelementen, Platingruppenelementen und anderen kritischen Indikatoren. Diese Technik enthüllt Magmaquellencharakteristika, Krustenkontaminations-Signaturen und Differenzierungsprozesse mit beispielloser Präzision und ermöglicht detaillierte petrogenetische Modellierung und Studien zur Evolution vulkanischer Systeme.",
          nl: "Geavanceerde neutronactivatie analyse biedt ultra-gevoelige detectie van spoorelementen inclusief zeldzame aarde elementen, platina groep elementen en andere kritieke indicatoren. Deze techniek onthult magma bron karakteristieken, kortale contaminatie handtekeningen en differentiatie processen met ongekende precisie, mogelijk makend gedetailleerde petrogenetische modellering en vulkanische systeem evolutie studies."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mind-bender/volcanology', level10);
  }
})();
