// Volcanology - Level 3: Volcanic Hazards & Risk Assessment
(function() {
  const level3 = {
    name: {
      en: "Volcanic Hazards & Risk Assessment",
      es: "Peligros Volcánicos y Evaluación de Riesgos",
      de: "Vulkanische Gefahren und Risikobewertung",
      nl: "Vulkanische Gevaren en Risicobeoordeling"
    },
    questions: [
      {
        question: {
          en: "How do pyroclastic density currents pose different hazard levels based on their concentration and temperature?",
          es: "¿Cómo representan las corrientes de densidad piroclástica diferentes niveles de peligro basados en su concentración y temperatura?",
          de: "Wie stellen pyroklastische Dichteströme unterschiedliche Gefahrenniveaus basierend auf ihrer Konzentration und Temperatur dar?",
          nl: "Hoe vormen pyroklastische dichtheidsstromen verschillende gevaarniveaus gebaseerd op hun concentratie en temperatuur?"
        },
        options: [
          { en: "Concentrated, high-temperature flows are lethal within 10 km, while dilute surges can cause mortality from asphyxiation and burns over broader areas", es: "Flujos concentrados de alta temperatura son letales dentro de 10 km, mientras que oleadas diluidas pueden causar mortalidad por asfixia y quemaduras en áreas más amplias", de: "Konzentrierte, hochtemperierte Ströme sind innerhalb von 10 km tödlich, während verdünnte Ströme Sterblichkeit durch Erstickung und Verbrennungen über breitere Bereiche verursachen können", nl: "Geconcentreerde, hoge-temperatuurstromen zijn dodelijk binnen 10 km, terwijl verdunde golven sterfte kunnen veroorzaken door verstikking en brandwonden over bredere gebieden" },
          { en: "All pyroclastic flows have identical hazard impacts", es: "Todos los flujos piroclásticos tienen impactos de peligro idénticos", de: "Alle pyroklastischen Ströme haben identische Gefahrenauswirkungen", nl: "Alle pyroklastische stromen hebben identieke gevaarimpacts" },
          { en: "Temperature is irrelevant to hazard assessment", es: "La temperatura es irrelevante para la evaluación de peligros", de: "Temperatur ist irrelevant für Gefahreneinschätzung", nl: "Temperatuur is irrelevant voor gevarenbeoordeling" },
          { en: "Only dilute flows pose serious threats", es: "Solo los flujos diluidos representan amenazas serias", de: "Nur verdünnte Ströme stellen ernste Bedrohungen dar", nl: "Alleen verdunde stromen vormen serieuze bedreigingen" }
        ],
        correct: 0,
        explanation: {
          en: "Pyroclastic density currents create different hazard zones based on concentration and temperature. Concentrated flows (block-and-ash flows, pyroclastic flows) with temperatures of 300-800°C are lethal within their runout zones (~10 km from source) due to extreme heat, burial, and impact forces. Dilute surges can travel much farther (>20 km) at lower concentrations but still cause mortality through asphyxiation from ash inhalation and thermal burns, requiring different evacuation strategies and hazard zone definitions.",
          es: "Las corrientes de densidad piroclástica crean diferentes zonas de peligro basadas en concentración y temperatura. Los flujos concentrados (flujos de bloques y cenizas, flujos piroclásticos) con temperaturas de 300-800°C son letales dentro de sus zonas de alcance (~10 km desde la fuente) debido al calor extremo, enterramiento y fuerzas de impacto. Las oleadas diluidas pueden viajar mucho más lejos (>20 km) a concentraciones más bajas pero aún causan mortalidad a través de asfixia por inhalación de ceniza y quemaduras térmicas, requiriendo diferentes estrategias de evacuación y definiciones de zona de peligro.",
          de: "Pyroklastische Dichteströme schaffen verschiedene Gefahrenzonen basierend auf Konzentration und Temperatur. Konzentrierte Ströme (Block-und-Asche-Ströme, pyroklastische Ströme) mit Temperaturen von 300-800°C sind tödlich innerhalb ihrer Auslaufzonen (~10 km von der Quelle) aufgrund extremer Hitze, Verschüttung und Aufprallkräften. Verdünnte Ströme können viel weiter reisen (>20 km) bei niedrigeren Konzentrationen, verursachen aber immer noch Sterblichkeit durch Erstickung von Ascheinhalation und thermischen Verbrennungen, erfordern verschiedene Evakuierungsstrategien und Gefahrenzonendefinitionen.",
          nl: "Pyroklastische dichtheidsstromen creëren verschillende gevarenzones gebaseerd op concentratie en temperatuur. Geconcentreerde stromen (blok-en-as stromen, pyroklastische stromen) met temperaturen van 300-800°C zijn dodelijk binnen hun uitloopzones (~10 km van bron) door extreme hitte, begraving en impactkrachten. Verdunde golven kunnen veel verder reizen (>20 km) bij lagere concentraties maar veroorzaken nog steeds sterfte door verstikking van as-inhalatie en thermische brandwonden, vereisen verschillende evacuatiestrategieën en gevarenzonedefinities."
        }
      },
      {
        question: {
          en: "What factors determine lahar formation potential and runout distances for volcanic hazard assessment?",
          es: "¿Qué factores determinan el potencial de formación de lahares y distancias de alcance para la evaluación de peligros volcánicos?",
          de: "Welche Faktoren bestimmen das Lahar-Bildungspotential und Auslaufdistanzen für vulkanische Gefahrenbewertung?",
          nl: "Welke factoren bepalen lahar-vormingspotentieel en uitloopafstanden voor vulkanische gevarenbeoordeling?"
        },
        options: [
          { en: "Water availability, pyroclastic deposit volume, drainage basin morphology, and rainfall patterns control lahar generation and mobility", es: "Disponibilidad de agua, volumen de depósito piroclástico, morfología de cuenca de drenaje y patrones de lluvia controlan generación y movilidad de lahar", de: "Wasserverfügbarkeit, pyroklastisches Ablagerungsvolumen, Einzugsgebiet-Morphologie und Niederschlagsmuster kontrollieren Lahar-Erzeugung und Mobilität", nl: "Waterbeschikbaarheid, pyroklastisch afzettingvolume, drainagebekken morfologie, en regenvalpatronen controleren lahar-generatie en mobiliteit" },
          { en: "Only volcanic eruption size matters", es: "Solo el tamaño de la erupción volcánica importa", de: "Nur die vulkanische Eruptionsgröße ist wichtig", nl: "Alleen vulkanische eruptiegrootte is belangrijk" },
          { en: "Lahars cannot be predicted or modeled", es: "Los lahares no pueden ser predichos o modelados", de: "Lahars können nicht vorhergesagt oder modelliert werden", nl: "Lahars kunnen niet voorspeld of gemodelleerd worden" },
          { en: "Distance from volcano is the sole determining factor", es: "La distancia del volcán es el único factor determinante", de: "Entfernung vom Vulkan ist der einzige bestimmende Faktor", nl: "Afstand van vulkaan is de enige bepalende factor" }
        ],
        correct: 0,
        explanation: {
          en: "Lahar formation and runout depend on multiple interacting factors: water source availability (crater lakes, rivers, rainfall, snow/ice), volume and grain size of loose pyroclastic material, drainage basin geometry (channel gradients, confinement), and triggering mechanisms. Computational models (LAHARZ, TITAN2D) use these parameters to predict inundation zones. Climate patterns affecting rainfall intensity and frequency are particularly important for post-eruption lahar generation, making long-term hazard assessment complex.",
          es: "La formación y alcance de lahares depende de múltiples factores que interactúan: disponibilidad de fuente de agua (lagos de cráter, ríos, lluvia, nieve/hielo), volumen y tamaño de grano de material piroclástico suelto, geometría de cuenca de drenaje (gradientes de canal, confinamiento), y mecanismos desencadenantes. Modelos computacionales (LAHARZ, TITAN2D) usan estos parámetros para predecir zonas de inundación. Los patrones climáticos que afectan la intensidad y frecuencia de lluvia son particularmente importantes para generación de lahar post-erupción, haciendo compleja la evaluación de peligro a largo plazo.",
          de: "Lahar-Bildung und Auslauf hängen von mehreren interagierenden Faktoren ab: Wasserquellenverfügbarkeit (Kraterseen, Flüsse, Niederschlag, Schnee/Eis), Volumen und Korngröße von losem pyroklastischem Material, Einzugsgebiet-Geometrie (Kanalgradiente, Eingrenzung) und Auslösemechanismen. Computermodelle (LAHARZ, TITAN2D) verwenden diese Parameter zur Vorhersage von Überflutungszonen. Klimamuster, die Niederschlagsintensität und -häufigkeit beeinflussen, sind besonders wichtig für Post-Eruptions-Lahar-Generierung, was langfristige Gefahrenbewertung komplex macht.",
          nl: "Lahar-vorming en uitloop hangen af van meerdere interacterende factoren: waterbronbeschikbaarheid (kratermeren, rivieren, regenval, sneeuw/ijs), volume en korrelgrootte van los pyroklastisch materiaal, drainagebekken geometrie (kanaalgradiënten, opsluiting), en triggeringsmechanismen. Computationele modellen (LAHARZ, TITAN2D) gebruiken deze parameters om overstromingszones te voorspellen. Klimaatpatronen die regenvalintensiteit en frequentie beïnvloeden zijn bijzonder belangrijk voor post-eruptie lahar-generatie, wat langetermijn gevarenbeoordeling complex maakt."
        }
      },
      {
        question: {
          en: "How do volcanic ash dispersal models account for atmospheric conditions and particle characteristics in hazard forecasting?",
          es: "¿Cómo los modelos de dispersión de ceniza volcánica tienen en cuenta las condiciones atmosféricas y características de partículas en el pronóstico de peligros?",
          de: "Wie berücksichtigen vulkanische Aschedispersionsmodelle atmosphärische Bedingungen und Partikeleigenschaften in der Gefahrenvorhersage?",
          nl: "Hoe houden vulkanische as-dispersiemodellen rekening met atmosferische omstandigheden en deeltjeskarakteristieken in gevaarvoorspelling?"
        },
        options: [
          { en: "Models integrate 3D wind fields, particle settling velocities, aggregation processes, and scavenging by precipitation to predict ash concentration and deposition", es: "Los modelos integran campos de viento 3D, velocidades de sedimentación de partículas, procesos de agregación y barrido por precipitación para predecir concentración y deposición de ceniza", de: "Modelle integrieren 3D-Windfelder, Partikel-Setzungsgeschwindigkeiten, Aggregationsprozesse und Auswaschung durch Niederschlag zur Vorhersage von Aschekonzentration und -ablagerung", nl: "Modellen integreren 3D-windvelden, deeltjeszettingssnelheden, aggregatieprocessen, en uitwassing door neerslag om as-concentratie en -afzetting te voorspellen" },
          { en: "Only wind direction is considered in ash models", es: "Solo la dirección del viento se considera en modelos de ceniza", de: "Nur Windrichtung wird in Aschemodellen berücksichtigt", nl: "Alleen windrichting wordt overwogen in asmodellen" },
          { en: "Ash dispersal cannot be accurately modeled", es: "La dispersión de ceniza no puede ser modelada con precisión", de: "Aschezerpersion kann nicht genau modelliert werden", nl: "As-dispersie kan niet accuraat gemodelleerd worden" },
          { en: "All volcanic ash behaves identically in the atmosphere", es: "Toda ceniza volcánica se comporta idénticamente en la atmósfera", de: "Alle vulkanische Asche verhält sich identisch in der Atmosphäre", nl: "Alle vulkanische as gedraagt zich identiek in de atmosfeer" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic ash dispersal models (FALL3D, HYSPLIT, NAME) are sophisticated tools that couple eruption source parameters with atmospheric dynamics. They incorporate 3D meteorological data (wind velocity, temperature, humidity), particle characteristics (size distribution, density, shape), and atmospheric processes including turbulent diffusion, gravitational settling, particle aggregation, and wet/dry deposition. These models provide quantitative forecasts of ash concentration, ground loading, and arrival times essential for aviation safety and public health warnings.",
          es: "Los modelos de dispersión de ceniza volcánica (FALL3D, HYSPLIT, NAME) son herramientas sofisticadas que acoplan parámetros de fuente de erupción con dinámica atmosférica. Incorporan datos meteorológicos 3D (velocidad del viento, temperatura, humedad), características de partículas (distribución de tamaño, densidad, forma), y procesos atmosféricos incluyendo difusión turbulenta, sedimentación gravitacional, agregación de partículas, y deposición húmeda/seca. Estos modelos proporcionan pronósticos cuantitativos de concentración de ceniza, carga terrestre y tiempos de llegada esenciales para seguridad de aviación y advertencias de salud pública.",
          de: "Vulkanische Aschedispersionsmodelle (FALL3D, HYSPLIT, NAME) sind anspruchsvolle Werkzeuge, die Eruptionsquellparameter mit atmosphärischer Dynamik koppeln. Sie integrieren 3D-meteorologische Daten (Windgeschwindigkeit, Temperatur, Feuchtigkeit), Partikeleigenschaften (Größenverteilung, Dichte, Form) und atmosphärische Prozesse einschließlich turbulenter Diffusion, Gravitationssetzung, Partikelaggregation und nasser/trockener Ablagerung. Diese Modelle liefern quantitative Vorhersagen von Aschekonzentration, Bodenbelastung und Ankunftszeiten, die für Luftfahrtsicherheit und öffentliche Gesundheitswarnungen wesentlich sind.",
          nl: "Vulkanische as-dispersiemodellen (FALL3D, HYSPLIT, NAME) zijn geavanceerde tools die eruptiebronparameters koppelen met atmosferische dynamiek. Ze incorporeren 3D-meteorologische data (windsnelheid, temperatuur, luchtvochtigheid), deeltjeskarakteristieken (grootteverdeling, dichtheid, vorm), en atmosferische processen inclusief turbulente diffusie, gravitationele settling, deeltjesaggregatie, en natte/droge afzetting. Deze modellen bieden kwantitatieve voorspellingen van as-concentratie, grondbelasting, en aankomsttijden essentieel voor luchtvaart-veiligheid en volksgezondheidswaarschuwingen."
        }
      },
      {
        question: {
          en: "What role do volcanic gases play in both proximal and distal hazard assessment?",
          es: "¿Qué papel juegan los gases volcánicos en la evaluación de peligros tanto proximales como distales?",
          de: "Welche Rolle spielen vulkanische Gase sowohl bei proximalen als auch distalen Gefahrenbewertungen?",
          nl: "Welke rol spelen vulkanische gassen in zowel proximale als distale gevarenbeoordeling?"
        },
        options: [
          { en: "CO2 creates deadly ground-hugging concentrations, SO2 causes respiratory problems and acid rain, and H2S poses acute toxicity risks at different spatial scales", es: "CO2 crea concentraciones mortales que abrazan el suelo, SO2 causa problemas respiratorios y lluvia ácida, y H2S presenta riesgos de toxicidad aguda a diferentes escalas espaciales", de: "CO2 schafft tödliche bodennahe Konzentrationen, SO2 verursacht Atemprobleme und sauren Regen, und H2S birgt akute Toxizitätsrisiken auf verschiedenen räumlichen Skalen", nl: "CO2 creëert dodelijke grond-omarmende concentraties, SO2 veroorzaakt ademhalingsproblemen en zure regen, en H2S vormt acute toxiciteitsrisico's op verschillende ruimtelijke schalen" },
          { en: "Volcanic gases are harmless to human health", es: "Los gases volcánicos son inofensivos para la salud humana", de: "Vulkanische Gase sind harmlos für die menschliche Gesundheit", nl: "Vulkanische gassen zijn onschadelijk voor menselijke gezondheid" },
          { en: "Only water vapor poses any volcanic gas hazard", es: "Solo el vapor de agua representa algún peligro de gas volcánico", de: "Nur Wasserdampf stellt eine vulkanische Gasgefahr dar", nl: "Alleen waterdamp vormt enig vulkanisch gasgevaar" },
          { en: "Gas hazards only occur during active eruptions", es: "Los peligros de gas solo ocurren durante erupciones activas", de: "Gasgefahren treten nur während aktiver Eruptionen auf", nl: "Gasgevaren komen alleen voor tijdens actieve erupties" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic gas hazards operate at multiple scales and persist beyond eruptive periods. Proximal hazards include CO2 accumulation in topographic depressions (deadly concentrations >30%), H2S acute toxicity (fatal at >700 ppm), and SO2 respiratory irritation. Distal hazards involve SO2 transport creating acid rain and air quality degradation hundreds of kilometers downwind, potentially affecting agriculture and human health. Gas hazard mapping requires understanding gas flux rates, meteorological dispersion, and topographic controls on gas accumulation.",
          es: "Los peligros de gases volcánicos operan a múltiples escalas y persisten más allá de períodos eruptivos. Los peligros proximales incluyen acumulación de CO2 en depresiones topográficas (concentraciones mortales >30%), toxicidad aguda de H2S (fatal a >700 ppm), e irritación respiratoria por SO2. Los peligros distales involucran transporte de SO2 creando lluvia ácida y degradación de calidad del aire a cientos de kilómetros viento abajo, potencialmente afectando agricultura y salud humana. El mapeo de peligros de gas requiere entender tasas de flujo de gas, dispersión meteorológica y controles topográficos en acumulación de gas.",
          de: "Vulkanische Gasgefahren operieren auf mehreren Skalen und bestehen über eruptive Perioden hinaus. Proximale Gefahren umfassen CO2-Akkumulation in topographischen Senken (tödliche Konzentrationen >30%), H2S-akute Toxizität (tödlich bei >700 ppm) und SO2-Atemwegsreizung. Distale Gefahren beinhalten SO2-Transport, der sauren Regen und Luftqualitätsverschlechterung hunderte Kilometer windabwärts schafft, potenziell Landwirtschaft und menschliche Gesundheit beeinträchtigend. Gasgefahrenkartierung erfordert Verständnis von Gasflussraten, meteorologischer Dispersion und topographischen Kontrollen über Gasakkumulation.",
          nl: "Vulkanische gasgevaren opereren op meerdere schalen en persisteren voorbij eruptieve perioden. Proximale gevaren omvatten CO2-accumulatie in topografische depressies (dodelijke concentraties >30%), H2S acute toxiciteit (fataal bij >700 ppm), en SO2 ademhalingsirraitatie. Distale gevaren betrekken SO2-transport dat zure regen en luchtkwaliteitsdegradatie creëert honderden kilometers benedenwinds, potentieel landbouw en menselijke gezondheid beïnvloedend. Gas gevarenkartering vereist begrip van gasfluxsnelheden, meteorologische dispersie, en topografische controles op gasaccumulatie."
        }
      },
      {
        question: {
          en: "How are probabilistic volcanic hazard assessments integrated with exposure and vulnerability analyses for comprehensive risk evaluation?",
          es: "¿Cómo se integran las evaluaciones probabilísticas de peligros volcánicos con análisis de exposición y vulnerabilidad para evaluación integral de riesgos?",
          de: "Wie werden probabilistische vulkanische Gefahrenbewertungen mit Exposition- und Vulnerabilitätsanalysen für umfassende Risikoevaluierung integriert?",
          nl: "Hoe worden probabilistische vulkanische gevarenbeoordeling geïntegreerd met blootstelling en kwetsbaarheidsanalyses voor uitgebreide risicoevaluatie?"
        },
        options: [
          { en: "Risk combines hazard probability maps with population density, infrastructure vulnerability, and socioeconomic factors using GIS-based quantitative frameworks", es: "El riesgo combina mapas de probabilidad de peligro con densidad poblacional, vulnerabilidad de infraestructura y factores socioeconómicos usando marcos cuantitativos basados en SIG", de: "Risiko kombiniert Gefahrwahrscheinlichkeitskarten mit Bevölkerungsdichte, Infrastrukturvulnerabilität und sozioökonomischen Faktoren unter Verwendung GIS-basierter quantitativer Rahmen", nl: "Risico combineert gevaarkanskaarten met bevolkingsdichtheid, infrastructuurkwetsbaarheid, en socio-economische factoren gebruikmakend van GIS-gebaseerde kwantitatieve raamwerken" },
          { en: "Only geological hazard maps are needed for risk assessment", es: "Solo se necesitan mapas de peligros geológicos para evaluación de riesgo", de: "Nur geologische Gefahrenkarten werden für Risikobewertung benötigt", nl: "Alleen geologische gevaarkaarten zijn nodig voor risicobeoordeling" },
          { en: "Vulnerability and exposure cannot be quantified", es: "La vulnerabilidad y exposición no pueden ser cuantificadas", de: "Vulnerabilität und Exposition können nicht quantifiziert werden", nl: "Kwetsbaarheid en blootstelling kunnen niet gekwantificeerd worden" },
          { en: "Risk assessment is purely qualitative", es: "La evaluación de riesgo es puramente cualitativa", de: "Risikobewertung ist rein qualitativ", nl: "Risicobeoordeling is puur kwalitatief" }
        ],
        correct: 0,
        explanation: {
          en: "Comprehensive volcanic risk assessment integrates three components using quantitative frameworks: (1) Hazard probability derived from geological records, analog studies, and expert elicitation creating spatial probability maps for different scenarios; (2) Exposure analysis identifying population, infrastructure, and economic assets within hazard zones using census data and satellite imagery; (3) Vulnerability assessment determining susceptibility of exposed elements to different volcanic phenomena. GIS-based risk models combine these components to produce quantitative risk maps, enabling cost-benefit analysis of mitigation strategies and emergency planning prioritization.",
          es: "La evaluación integral de riesgo volcánico integra tres componentes usando marcos cuantitativos: (1) Probabilidad de peligro derivada de registros geológicos, estudios análogos y elicitación de expertos creando mapas de probabilidad espacial para diferentes escenarios; (2) Análisis de exposición identificando población, infraestructura y activos económicos dentro de zonas de peligro usando datos de censo e imágenes satelitales; (3) Evaluación de vulnerabilidad determinando susceptibilidad de elementos expuestos a diferentes fenómenos volcánicos. Modelos de riesgo basados en SIG combinan estos componentes para producir mapas de riesgo cuantitativos, permitiendo análisis costo-beneficio de estrategias de mitigación y priorización de planificación de emergencia.",
          de: "Umfassende vulkanische Risikobewertung integriert drei Komponenten mit quantitativen Rahmen: (1) Gefahrwahrscheinlichkeit abgeleitet aus geologischen Aufzeichnungen, Analogstudien und Expertenerhebung, die räumliche Wahrscheinlichkeitskarten für verschiedene Szenarien schaffen; (2) Expositionsanalyse, die Bevölkerung, Infrastruktur und wirtschaftliche Vermögenswerte in Gefahrenzonen mit Zensusdaten und Satellitenbildern identifiziert; (3) Vulnerabilitätsbewertung, die Anfälligkeit exponierter Elemente für verschiedene vulkanische Phänomene bestimmt. GIS-basierte Risikomodelle kombinieren diese Komponenten zur Produktion quantitativer Risikokarten, ermöglichen Kosten-Nutzen-Analyse von Minderungsstrategien und Notfallplanungspriorisierung.",
          nl: "Uitgebreide vulkanische risicobeoordeling integreert drie componenten gebruikmakend van kwantitatieve raamwerken: (1) Gevaarkans afgeleid van geologische records, analoogstudie, en expertelicitatie creërend ruimtelijke kanskaarten voor verschillende scenario's; (2) Blootstellingsanalyse identificerend bevolking, infrastructuur, en economische activa binnen gevarenzones gebruikmakend van censusdata en satellietbeelden; (3) Kwetsbaarheidsbeoordeling bepalend vatbaarheid van blootgestelde elementen aan verschillende vulkanische fenomenen. GIS-gebaseerde risicomodellen combineren deze componenten om kwantitatieve risicokaarten te produceren, kosten-batenanalyse van mitigatiestrategieën en noodplanningsprioritering mogelijk makend."
        }
      },
      {
        question: {
          en: "What is the primary mechanism behind volcanic lightning generation?",
          es: "¿Cuál es el mecanismo principal detrás de la generación de rayos volcánicos?",
          de: "Was ist der Hauptmechanismus hinter der Entstehung vulkanischer Blitze?",
          nl: "Wat is het primaire mechanisme achter vulkanische bliksemvorming?"
        },
        options: [
          { en: "Triboelectric charging of ash particles during fragmentation and collision", es: "Carga triboeléctrica de partículas de ceniza durante fragmentación y colisión", de: "Triboelektrische Aufladung von Aschepartikeln während Fragmentierung und Kollision", nl: "Triboelektrische oplading van asdeeltjes tijdens fragmentatie en botsing" },
          { en: "Ionization of volcanic gases by magma heat", es: "Ionización de gases volcánicos por calor del magma", de: "Ionisierung vulkanischer Gase durch Magmahitze", nl: "Ionisatie van vulkanische gassen door magmawarmte" },
          { en: "Atmospheric pressure changes during eruption", es: "Cambios de presión atmosférica durante erupción", de: "Atmosphärische Druckänderungen während der Eruption", nl: "Atmosferische drukveranderingen tijdens uitbarsting" },
          { en: "Magnetic field disruption by lava flows", es: "Disrupción del campo magnético por flujos de lava", de: "Magnetfeldstörung durch Lavaströme", nl: "Magnetisch veld verstoring door lavastromen" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic lightning results from triboelectric charging when ash particles collide and fragment in the eruption column. This charge separation creates electrical fields strong enough to produce lightning discharges, particularly in the early stages of explosive eruptions.",
          es: "Los rayos volcánicos resultan de la carga triboeléctrica cuando las partículas de ceniza colisionan y se fragmentan en la columna eruptiva. Esta separación de carga crea campos eléctricos lo suficientemente fuertes para producir descargas de rayos, particularmente en las etapas tempranas de erupciones explosivas.",
          de: "Vulkanische Blitze entstehen durch triboelektrische Aufladung, wenn Aschepartikel in der Eruptionssäule kollidieren und fragmentieren. Diese Ladungstrennung erzeugt elektrische Felder, die stark genug sind, um Blitzentladungen zu erzeugen, besonders in den frühen Stadien explosiver Eruptionen.",
          nl: "Vulkanische bliksem ontstaat door triboelektrische oplading wanneer asdeeltjes botsen en fragmenteren in de eruptiekolom. Deze ladingsscheiding creëert elektrische velden sterk genoeg om bliksemontladingen te produceren, vooral in de vroege stadia van explosieve uitbarstingen."
        }
      },
      {
        question: {
          en: "What is the significance of the Volcanic Explosivity Index (VEI) in hazard assessment?",
          es: "¿Cuál es la importancia del Índice de Explosividad Volcánica (VEI) en la evaluación de peligros?",
          de: "Was ist die Bedeutung des Vulkanischen Explosivitätsindex (VEI) in der Gefahrenbewertung?",
          nl: "Wat is de betekenis van de Vulkanische Explosiviteitsindex (VEI) in gevaarsbeoordeling?"
        },
        options: [
          { en: "It quantifies eruption magnitude based on ejecta volume and column height", es: "Cuantifica la magnitud de erupción basada en volumen de eyectos y altura de columna", de: "Er quantifiziert die Eruptionsstärke basierend auf Auswurfvolumen und Säulenhöhe", nl: "Het kwantificeert eruptiemagnitude gebaseerd op ejecta volume en kolomhoogte" },
          { en: "It measures the temperature of erupted materials", es: "Mide la temperatura de materiales erupcionados", de: "Er misst die Temperatur ausgeworfener Materialien", nl: "Het meet de temperatuur van uitgeworpen materialen" },
          { en: "It predicts the timing of future eruptions", es: "Predice el momento de futuras erupciones", de: "Er sagt den Zeitpunkt zukünftiger Eruptionen voraus", nl: "Het voorspelt de timing van toekomstige uitbarstingen" },
          { en: "It calculates the chemical composition of magma", es: "Calcula la composición química del magma", de: "Er berechnet die chemische Zusammensetzung des Magmas", nl: "Het berekent de chemische samenstelling van magma" }
        ],
        correct: 0,
        explanation: {
          en: "The VEI is a logarithmic scale from 0-8 that quantifies eruption magnitude based on the volume of tephra ejected and eruption column height. It's crucial for comparing historical eruptions, assessing potential impacts, and communicating volcanic hazards to the public and emergency managers.",
          es: "El VEI es una escala logarítmica de 0-8 que cuantifica la magnitud de erupción basada en el volumen de tefra eyectada y altura de columna eruptiva. Es crucial para comparar erupciones históricas, evaluar impactos potenciales y comunicar peligros volcánicos al público y gestores de emergencias.",
          de: "Der VEI ist eine logarithmische Skala von 0-8, die die Eruptionsstärke basierend auf dem Volumen ausgeworfener Tephra und der Eruptionssäulenhöhe quantifiziert. Er ist entscheidend für den Vergleich historischer Eruptionen, die Bewertung potenzieller Auswirkungen und die Kommunikation vulkanischer Gefahren.",
          nl: "De VEI is een logaritmische schaal van 0-8 die eruptiemagnitude kwantificeert gebaseerd op het volume uitgeworpen tefra en eruptiekolomhoogte. Het is cruciaal voor het vergelijken van historische uitbarstingen, beoordelen van potentiële impacts en communiceren van vulkanische gevaren."
        }
      },
      {
        question: {
          en: "What is the primary hazard associated with volcanic debris avalanches?",
          es: "¿Cuál es el peligro principal asociado con avalanchas de escombros volcánicos?",
          de: "Was ist die Hauptgefahr bei vulkanischen Schuttlawinen?",
          nl: "Wat is het primaire gevaar geassocieerd met vulkanische puinlawines?"
        },
        options: [
          { en: "Catastrophic sector collapse creating high-velocity debris flows over vast areas", es: "Colapso catastrófico de sector creando flujos de escombros de alta velocidad sobre áreas vastas", de: "Katastrophaler Sektorkollaps, der hochgeschwindigkeits-Schuttströme über weite Gebiete erzeugt", nl: "Catastrofale sector instorting die hoge snelheid puinstromen over uitgestrekte gebieden creëert" },
          { en: "Slow-moving lava flows blocking roads", es: "Flujos de lava de movimiento lento bloqueando carreteras", de: "Langsam fließende Lavaströme, die Straßen blockieren", nl: "Langzaam bewegende lavastromen die wegen blokkeren" },
          { en: "Ash fall causing respiratory problems", es: "Caída de ceniza causando problemas respiratorios", de: "Aschefall, der Atemprobleme verursacht", nl: "Asval die ademhalingsproblemen veroorzaakt" },
          { en: "Steam explosions near crater rims", es: "Explosiones de vapor cerca de bordes del cráter", de: "Dampfexplosionen nahe Kraterrändern", nl: "Stoomexplosies nabij kraterranden" }
        ],
        correct: 0,
        explanation: {
          en: "Debris avalanches result from catastrophic failure of volcanic edifices, often triggered by magma intrusion, earthquakes, or heavy rainfall. They can travel at speeds exceeding 200 km/h, cover areas of hundreds of km², and trigger secondary hazards like tsunamis if they enter water bodies.",
          es: "Las avalanchas de escombros resultan del fallo catastrófico de edificios volcánicos, a menudo desencadenado por intrusión de magma, terremotos o lluvia intensa. Pueden viajar a velocidades superiores a 200 km/h, cubrir áreas de cientos de km² y desencadenar peligros secundarios como tsunamis si entran en cuerpos de agua.",
          de: "Schuttlawinen entstehen durch katastrophales Versagen vulkanischer Gebäude, oft ausgelöst durch Magmaintrusion, Erdbeben oder starke Niederschläge. Sie können Geschwindigkeiten über 200 km/h erreichen, Flächen von hunderten km² bedecken und Sekundärgefahren wie Tsunamis auslösen.",
          nl: "Puinlawines ontstaan door catastrofaal falen van vulkanische structuren, vaak getriggerd door magma-intrusie, aardbevingen of hevige regenval. Ze kunnen snelheden boven 200 km/u bereiken, gebieden van honderden km² bedekken en secundaire gevaren zoals tsunami's veroorzaken."
        }
      },
      {
        question: {
          en: "How do volcanic ballistic projectiles differ from tephra fall deposits?",
          es: "¿Cómo difieren los proyectiles balísticos volcánicos de los depósitos de caída de tefra?",
          de: "Wie unterscheiden sich vulkanische ballistische Projektile von Tephra-Fallablagerungen?",
          nl: "Hoe verschillen vulkanische ballistische projectielen van tefra-val afzettingen?"
        },
        options: [
          { en: "Ballistics follow parabolic trajectories independent of wind, tephra is wind-transported", es: "Los balísticos siguen trayectorias parabólicas independientes del viento, la tefra es transportada por viento", de: "Ballistische folgen parabolischen Bahnen unabhängig vom Wind, Tephra wird vom Wind transportiert", nl: "Ballistieken volgen parabolische trajecten onafhankelijk van wind, tefra wordt door wind getransporteerd" },
          { en: "Ballistics are always smaller than tephra particles", es: "Los balísticos son siempre más pequeños que partículas de tefra", de: "Ballistische sind immer kleiner als Tephrapartikel", nl: "Ballistieken zijn altijd kleiner dan tefra deeltjes" },
          { en: "Tephra travels faster than ballistic projectiles", es: "La tefra viaja más rápido que proyectiles balísticos", de: "Tephra reist schneller als ballistische Projektile", nl: "Tefra reist sneller dan ballistische projectielen" },
          { en: "Ballistics only occur in effusive eruptions", es: "Los balísticos solo ocurren en erupciones efusivas", de: "Ballistische treten nur bei effusiven Eruptionen auf", nl: "Ballistieken komen alleen voor bij effusieve uitbarstingen" }
        ],
        correct: 0,
        explanation: {
          en: "Ballistic projectiles are large clasts (>64 mm) ejected on ballistic trajectories determined by initial velocity and gravity, typically impacting within 5 km of the vent. Tephra fall consists of smaller particles transported by eruption columns and wind, potentially traveling thousands of kilometers.",
          es: "Los proyectiles balísticos son clastos grandes (>64 mm) eyectados en trayectorias balísticas determinadas por velocidad inicial y gravedad, típicamente impactando dentro de 5 km del conducto. La caída de tefra consiste en partículas más pequeñas transportadas por columnas eruptivas y viento, potencialmente viajando miles de kilómetros.",
          de: "Ballistische Projektile sind große Klasten (>64 mm), die auf ballistischen Bahnen ausgeworfen werden, bestimmt durch Anfangsgeschwindigkeit und Schwerkraft, typischerweise innerhalb von 5 km vom Schlot einschlagend. Tephrafall besteht aus kleineren Partikeln, die durch Eruptionssäulen und Wind transportiert werden.",
          nl: "Ballistische projectielen zijn grote klasten (>64 mm) uitgeworpen op ballistische banen bepaald door beginsnelheid en zwaartekracht, typisch inslaand binnen 5 km van de opening. Tefra-val bestaat uit kleinere deeltjes getransporteerd door eruptiekolommen en wind."
        }
      },
      {
        question: {
          en: "What role does topography play in pyroclastic density current behavior?",
          es: "¿Qué papel juega la topografía en el comportamiento de corrientes de densidad piroclástica?",
          de: "Welche Rolle spielt die Topographie beim Verhalten pyroklastischer Dichteströme?",
          nl: "Welke rol speelt topografie in pyroclastische dichtheidsstroom gedrag?"
        },
        options: [
          { en: "Controls flow channeling, runout distance, and deposition patterns", es: "Controla canalización del flujo, distancia de alcance y patrones de deposición", de: "Kontrolliert Strömungskanalisierung, Auslaufdistanz und Ablagerungsmuster", nl: "Controleert stroomkanalisering, uitloopafstand en afzettingspatronen" },
          { en: "Has no effect on flow dynamics", es: "No tiene efecto en la dinámica del flujo", de: "Hat keinen Einfluss auf die Strömungsdynamik", nl: "Heeft geen effect op stroomdynamiek" },
          { en: "Only affects flow temperature", es: "Solo afecta la temperatura del flujo", de: "Beeinflusst nur die Strömungstemperatur", nl: "Beïnvloedt alleen stroomtemperatuur" },
          { en: "Determines eruption column height", es: "Determina la altura de la columna eruptiva", de: "Bestimmt die Höhe der Eruptionssäule", nl: "Bepaalt eruptiekolomhoogte" }
        ],
        correct: 0,
        explanation: {
          en: "Topography fundamentally controls PDC behavior by channeling flows into valleys, creating flow stripping at ridges, influencing runout distances through slope changes, and determining deposition patterns. Understanding topographic effects is crucial for hazard mapping and risk assessment.",
          es: "La topografía controla fundamentalmente el comportamiento de CDP canalizando flujos en valles, creando separación de flujo en crestas, influenciando distancias de alcance mediante cambios de pendiente y determinando patrones de deposición. Entender efectos topográficos es crucial para mapeo de peligros.",
          de: "Die Topographie kontrolliert grundlegend das PDC-Verhalten durch Kanalisierung von Strömen in Täler, Strömungsablösung an Graten, Beeinflussung der Auslaufdistanz durch Neigungsänderungen und Bestimmung von Ablagerungsmustern. Das Verständnis topographischer Effekte ist entscheidend für die Gefahrenkartierung.",
          nl: "Topografie controleert fundamenteel PDC-gedrag door stromen te kanaliseren in valleien, stroomstripping te creëren bij ruggen, uitloopafstanden te beïnvloeden door hellingveranderingen en afzettingspatronen te bepalen. Begrip van topografische effecten is cruciaal voor gevarenkaartering."
        }
      },
      {
        question: {
          en: "What is the primary monitoring technique for detecting volcanic deformation?",
          es: "¿Cuál es la técnica de monitoreo principal para detectar deformación volcánica?",
          de: "Was ist die primäre Überwachungstechnik zur Erkennung vulkanischer Deformation?",
          nl: "Wat is de primaire monitoringtechniek voor het detecteren van vulkanische deformatie?"
        },
        options: [
          { en: "InSAR (Interferometric Synthetic Aperture Radar) for measuring ground displacement", es: "InSAR (Radar de Apertura Sintética Interferométrico) para medir desplazamiento del suelo", de: "InSAR (Interferometrisches Synthetisches Apertur Radar) zur Messung von Bodenverschiebungen", nl: "InSAR (Interferometrische Synthetische Apertuur Radar) voor het meten van grondverplaatsing" },
          { en: "Thermal cameras for heat detection", es: "Cámaras térmicas para detección de calor", de: "Wärmekameras zur Wärmeerkennung", nl: "Thermische camera's voor warmtedetectie" },
          { en: "Seismometers for earthquake monitoring", es: "Sismómetros para monitoreo de terremotos", de: "Seismometer zur Erdbebenüberwachung", nl: "Seismometers voor aardbevingsmonitoring" },
          { en: "Gas analyzers for emission monitoring", es: "Analizadores de gas para monitoreo de emisiones", de: "Gasanalysatoren zur Emissionsüberwachung", nl: "Gasanalysatoren voor emissiemonitoring" }
        ],
        correct: 0,
        explanation: {
          en: "InSAR technology uses satellite radar to detect millimeter-scale ground deformation over large areas, providing crucial information about magma intrusion, reservoir pressurization, and potential eruption precursors. It complements GPS and tiltmeter networks for comprehensive deformation monitoring.",
          es: "La tecnología InSAR usa radar satelital para detectar deformación del suelo a escala milimétrica sobre áreas grandes, proporcionando información crucial sobre intrusión de magma, presurización del reservorio y precursores potenciales de erupción. Complementa redes de GPS e inclinómetros.",
          de: "Die InSAR-Technologie nutzt Satellitenradar zur Erkennung millimetergenauer Bodendeformation über große Gebiete und liefert wichtige Informationen über Magmaintrusion, Reservoirdruckaufbau und potenzielle Eruptionsvorläufer. Sie ergänzt GPS- und Neigungsmesser-Netzwerke.",
          nl: "InSAR-technologie gebruikt satellietradar om millimeter-schaal gronddeformatie over grote gebieden te detecteren, wat cruciale informatie geeft over magma-intrusie, reservoir drukopbouw en potentiële uitbarstingsvoortekenen. Het complementeert GPS- en tiltmeter netwerken."
        }
      },
      {
        question: {
          en: "What is the significance of phreatomagmatic eruptions in hazard assessment?",
          es: "¿Cuál es la importancia de las erupciones freatomagmáticas en la evaluación de peligros?",
          de: "Was ist die Bedeutung phreatomagmatischer Eruptionen in der Gefahrenbewertung?",
          nl: "Wat is de betekenis van freatomagmatische uitbarstingen in gevaarsbeoordeling?"
        },
        options: [
          { en: "They produce more violent explosions due to magma-water interaction", es: "Producen explosiones más violentas debido a interacción magma-agua", de: "Sie erzeugen heftigere Explosionen durch Magma-Wasser-Interaktion", nl: "Ze produceren heftigere explosies door magma-water interactie" },
          { en: "They only occur in submarine volcanoes", es: "Solo ocurren en volcanes submarinos", de: "Sie treten nur bei Unterwasservulkanen auf", nl: "Ze komen alleen voor bij onderzeese vulkanen" },
          { en: "They produce less hazardous eruptions", es: "Producen erupciones menos peligrosas", de: "Sie erzeugen weniger gefährliche Eruptionen", nl: "Ze produceren minder gevaarlijke uitbarstingen" },
          { en: "They cannot be monitored effectively", es: "No pueden ser monitoreadas efectivamente", de: "Sie können nicht effektiv überwacht werden", nl: "Ze kunnen niet effectief gemonitord worden" }
        ],
        correct: 0,
        explanation: {
          en: "Phreatomagmatic eruptions occur when magma interacts with external water, causing rapid steam expansion and violent fragmentation. These eruptions produce fine ash, base surges, and can occur with little warning, making them particularly hazardous in populated coastal and lake areas.",
          es: "Las erupciones freatomagmáticas ocurren cuando el magma interactúa con agua externa, causando expansión rápida de vapor y fragmentación violenta. Estas erupciones producen ceniza fina, oleadas basales y pueden ocurrir con poca advertencia, haciéndolas particularmente peligrosas en áreas costeras y lacustres pobladas.",
          de: "Phreatomagmatische Eruptionen treten auf, wenn Magma mit externem Wasser interagiert, was zu schneller Dampfexpansion und heftiger Fragmentierung führt. Diese Eruptionen erzeugen feine Asche, Basiswellen und können mit wenig Vorwarnung auftreten, was sie in besiedelten Küsten- und Seegebieten besonders gefährlich macht.",
          nl: "Freatomagmatische uitbarstingen treden op wanneer magma interageert met extern water, wat leidt tot snelle stoomexpansie en heftige fragmentatie. Deze uitbarstingen produceren fijne as, basisgolven en kunnen met weinig waarschuwing optreden, wat ze bijzonder gevaarlijk maakt in bevolkte kust- en meergebieden."
        }
      },
      {
        question: {
          en: "How do volcanic tsunamis differ from tectonic tsunamis?",
          es: "¿Cómo difieren los tsunamis volcánicos de los tsunamis tectónicos?",
          de: "Wie unterscheiden sich vulkanische Tsunamis von tektonischen Tsunamis?",
          nl: "Hoe verschillen vulkanische tsunami's van tektonische tsunami's?"
        },
        options: [
          { en: "Generated by multiple mechanisms including pyroclastic flows entering water, underwater explosions, and flank collapse", es: "Generados por múltiples mecanismos incluyendo flujos piroclásticos entrando al agua, explosiones submarinas y colapso de flancos", de: "Erzeugt durch mehrere Mechanismen einschließlich pyroklastischer Ströme ins Wasser, Unterwasserexplosionen und Flankenkollaps", nl: "Gegenereerd door meerdere mechanismen inclusief pyroclastische stromen die water ingaan, onderwaterexplosies en flankinstorting" },
          { en: "Always larger than tectonic tsunamis", es: "Siempre más grandes que tsunamis tectónicos", de: "Immer größer als tektonische Tsunamis", nl: "Altijd groter dan tektonische tsunami's" },
          { en: "Only occur in deep ocean basins", es: "Solo ocurren en cuencas oceánicas profundas", de: "Treten nur in tiefen Ozeanbecken auf", nl: "Komen alleen voor in diepe oceaanbekkens" },
          { en: "Travel slower than tectonic tsunamis", es: "Viajan más lento que tsunamis tectónicos", de: "Reisen langsamer als tektonische Tsunamis", nl: "Reizen langzamer dan tektonische tsunami's" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic tsunamis can be generated through various mechanisms: pyroclastic flows entering the sea, submarine explosions, lava entering water, debris avalanches, and volcanic earthquakes. They tend to be more localized but can be devastating near the source, as demonstrated by Krakatau 1883 and Anak Krakatau 2018.",
          es: "Los tsunamis volcánicos pueden generarse mediante varios mecanismos: flujos piroclásticos entrando al mar, explosiones submarinas, lava entrando al agua, avalanchas de escombros y terremotos volcánicos. Tienden a ser más localizados pero pueden ser devastadores cerca de la fuente, como demostrado por Krakatau 1883.",
          de: "Vulkanische Tsunamis können durch verschiedene Mechanismen erzeugt werden: pyroklastische Ströme ins Meer, submarine Explosionen, Lava ins Wasser, Schuttlawinen und vulkanische Erdbeben. Sie sind tendenziell lokalisierter, können aber nahe der Quelle verheerend sein, wie Krakatau 1883 zeigte.",
          nl: "Vulkanische tsunami's kunnen gegenereerd worden door verschillende mechanismen: pyroclastische stromen die de zee ingaan, onderzeese explosies, lava die water ingaat, puinlawines en vulkanische aardbevingen. Ze zijn meestal meer gelokaliseerd maar kunnen verwoestend zijn nabij de bron, zoals Krakatau 1883 aantoonde."
        }
      },
      {
        question: {
          en: "What is the concept of 'vulnerability' in volcanic risk assessment?",
          es: "¿Cuál es el concepto de 'vulnerabilidad' en la evaluación de riesgo volcánico?",
          de: "Was ist das Konzept der 'Vulnerabilität' in der vulkanischen Risikobewertung?",
          nl: "Wat is het concept van 'kwetsbaarheid' in vulkanische risicobeoordeling?"
        },
        options: [
          { en: "The susceptibility of exposed elements to damage from volcanic hazards", es: "La susceptibilidad de elementos expuestos al daño por peligros volcánicos", de: "Die Anfälligkeit exponierter Elemente für Schäden durch vulkanische Gefahren", nl: "De vatbaarheid van blootgestelde elementen voor schade door vulkanische gevaren" },
          { en: "The probability of an eruption occurring", es: "La probabilidad de que ocurra una erupción", de: "Die Wahrscheinlichkeit des Auftretens einer Eruption", nl: "De waarschijnlijkheid dat een uitbarsting optreedt" },
          { en: "The distance from the volcanic vent", es: "La distancia desde el conducto volcánico", de: "Die Entfernung vom vulkanischen Schlot", nl: "De afstand vanaf de vulkanische opening" },
          { en: "The magnitude of the eruption", es: "La magnitud de la erupción", de: "Die Größe der Eruption", nl: "De magnitude van de uitbarsting" }
        ],
        correct: 0,
        explanation: {
          en: "Vulnerability represents the degree to which people, infrastructure, and economic activities are susceptible to damage from volcanic hazards. It varies with hazard type, building construction, preparedness levels, and socioeconomic factors. Understanding vulnerability is essential for effective risk reduction strategies.",
          es: "La vulnerabilidad representa el grado en que personas, infraestructura y actividades económicas son susceptibles al daño por peligros volcánicos. Varía con el tipo de peligro, construcción de edificios, niveles de preparación y factores socioeconómicos. Entender la vulnerabilidad es esencial para estrategias efectivas de reducción de riesgo.",
          de: "Vulnerabilität repräsentiert den Grad, zu dem Menschen, Infrastruktur und wirtschaftliche Aktivitäten anfällig für Schäden durch vulkanische Gefahren sind. Sie variiert mit Gefahrentyp, Gebäudekonstruktion, Vorbereitungsgrad und sozioökonomischen Faktoren. Das Verständnis von Vulnerabilität ist wesentlich für effektive Risikominderungsstrategien.",
          nl: "Kwetsbaarheid vertegenwoordigt de mate waarin mensen, infrastructuur en economische activiteiten vatbaar zijn voor schade door vulkanische gevaren. Het varieert met gevaartype, gebouwconstructie, paraadheidsniveaus en sociaal-economische factoren. Begrip van kwetsbaarheid is essentieel voor effectieve risicoreductiestrategieën."
        }
      },
      {
        question: {
          en: "What is the role of evacuation zones in volcanic crisis management?",
          es: "¿Cuál es el papel de las zonas de evacuación en la gestión de crisis volcánicas?",
          de: "Was ist die Rolle von Evakuierungszonen im vulkanischen Krisenmanagement?",
          nl: "Wat is de rol van evacuatiezones in vulkanisch crisismanagement?"
        },
        options: [
          { en: "Pre-defined areas based on hazard modeling for staged population evacuation", es: "Áreas predefinidas basadas en modelado de peligros para evacuación escalonada de población", de: "Vordefinierte Gebiete basierend auf Gefahrenmodellierung für gestaffelte Bevölkerungsevakuierung", nl: "Vooraf gedefinieerde gebieden gebaseerd op gevaarmodellering voor gefaseerde bevolkingsevacuatie" },
          { en: "Random areas selected during eruption", es: "Áreas aleatorias seleccionadas durante erupción", de: "Zufällige Gebiete während der Eruption ausgewählt", nl: "Willekeurige gebieden geselecteerd tijdens uitbarsting" },
          { en: "Fixed circular zones around the volcano", es: "Zonas circulares fijas alrededor del volcán", de: "Feste kreisförmige Zonen um den Vulkan", nl: "Vaste cirkelvormige zones rond de vulkaan" },
          { en: "Areas where monitoring equipment is placed", es: "Áreas donde se coloca equipo de monitoreo", de: "Gebiete, in denen Überwachungsgeräte platziert sind", nl: "Gebieden waar monitoringapparatuur geplaatst is" }
        ],
        correct: 0,
        explanation: {
          en: "Evacuation zones are scientifically determined areas based on hazard modeling, historical eruption data, and topographic analysis. They allow authorities to implement phased evacuations based on threat levels, minimizing unnecessary displacement while ensuring public safety. Effective zoning considers multiple hazard types and scenarios.",
          es: "Las zonas de evacuación son áreas determinadas científicamente basadas en modelado de peligros, datos históricos de erupciones y análisis topográfico. Permiten a las autoridades implementar evacuaciones por fases basadas en niveles de amenaza, minimizando desplazamiento innecesario mientras aseguran la seguridad pública.",
          de: "Evakuierungszonen sind wissenschaftlich bestimmte Gebiete basierend auf Gefahrenmodellierung, historischen Eruptionsdaten und topographischer Analyse. Sie ermöglichen Behörden phasenweise Evakuierungen basierend auf Bedrohungsstufen durchzuführen, unnötige Vertreibung minimierend während öffentliche Sicherheit gewährleistet wird.",
          nl: "Evacuatiezones zijn wetenschappelijk bepaalde gebieden gebaseerd op gevaarmodellering, historische uitbarstingsdata en topografische analyse. Ze stellen autoriteiten in staat gefaseerde evacuaties uit te voeren gebaseerd op dreigingsniveaus, onnodige verplaatsing minimaliserend terwijl publieke veiligheid gewaarborgd wordt."
        }
      },
      {
        question: {
          en: "What is the significance of volcanic gas composition in eruption forecasting?",
          es: "¿Cuál es la importancia de la composición de gases volcánicos en el pronóstico de erupciones?",
          de: "Was ist die Bedeutung der vulkanischen Gaszusammensetzung in der Eruptionsvorhersage?",
          nl: "Wat is de betekenis van vulkanische gassamenstelling in uitbarstingsvoorspelling?"
        },
        options: [
          { en: "Changes in SO2/CO2 ratios indicate magma ascent and degassing depth", es: "Cambios en proporciones SO2/CO2 indican ascenso de magma y profundidad de desgasificación", de: "Änderungen in SO2/CO2-Verhältnissen zeigen Magmaaufstieg und Entgasungstiefe an", nl: "Veranderingen in SO2/CO2 verhoudingen duiden op magma opstijging en ontgassingsdiepte" },
          { en: "Gas composition remains constant before eruptions", es: "La composición de gas permanece constante antes de erupciones", de: "Die Gaszusammensetzung bleibt vor Eruptionen konstant", nl: "Gassamenstelling blijft constant voor uitbarstingen" },
          { en: "Only water vapor is important for forecasting", es: "Solo el vapor de agua es importante para el pronóstico", de: "Nur Wasserdampf ist wichtig für die Vorhersage", nl: "Alleen waterdamp is belangrijk voor voorspelling" },
          { en: "Gas emissions decrease before eruptions", es: "Las emisiones de gas disminuyen antes de erupciones", de: "Gasemissionen nehmen vor Eruptionen ab", nl: "Gasemissies nemen af voor uitbarstingen" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic gas composition provides crucial information about magma depth and state. CO2 degasses at greater depths than SO2, so increasing SO2/CO2 ratios often indicate ascending magma. Multi-gas monitoring systems can detect these changes days to weeks before eruptions, providing valuable forecasting information.",
          es: "La composición de gas volcánico proporciona información crucial sobre profundidad y estado del magma. El CO2 desgasifica a mayores profundidades que el SO2, así que proporciones SO2/CO2 crecientes a menudo indican magma ascendente. Sistemas de monitoreo multi-gas pueden detectar estos cambios días a semanas antes de erupciones.",
          de: "Die vulkanische Gaszusammensetzung liefert wichtige Informationen über Magmatiefe und -zustand. CO2 entgast in größeren Tiefen als SO2, daher deuten steigende SO2/CO2-Verhältnisse oft auf aufsteigendes Magma hin. Multi-Gas-Überwachungssysteme können diese Änderungen Tage bis Wochen vor Eruptionen erkennen.",
          nl: "Vulkanische gassamenstelling geeft cruciale informatie over magmadiepte en -toestand. CO2 ontgast op grotere dieptes dan SO2, dus toenemende SO2/CO2 verhoudingen duiden vaak op opstijgend magma. Multi-gas monitoringsystemen kunnen deze veranderingen dagen tot weken voor uitbarstingen detecteren."
        }
      },
      {
        question: {
          en: "What characterizes a 'sector collapse' hazard at stratovolcanoes?",
          es: "¿Qué caracteriza un peligro de 'colapso de sector' en estratovolcanes?",
          de: "Was charakterisiert eine 'Sektorkollaps'-Gefahr bei Stratovulkanen?",
          nl: "Wat kenmerkt een 'sector instorting' gevaar bij stratovulkanen?"
        },
        options: [
          { en: "Large-scale gravitational failure of the volcanic edifice creating debris avalanches", es: "Falla gravitacional a gran escala del edificio volcánico creando avalanchas de escombros", de: "Großflächiges gravitatives Versagen des vulkanischen Gebäudes, das Schuttlawinen erzeugt", nl: "Grootschalig gravitationeel falen van het vulkanische gebouw dat puinlawines creëert" },
          { en: "Small rockfalls from the crater rim", es: "Pequeños desprendimientos de rocas del borde del cráter", de: "Kleine Steinschläge vom Kraterrand", nl: "Kleine steenval van de kraterrand" },
          { en: "Slow subsidence of the summit", es: "Subsidencia lenta de la cumbre", de: "Langsames Absinken des Gipfels", nl: "Langzame verzakking van de top" },
          { en: "Formation of new vents", es: "Formación de nuevos conductos", de: "Bildung neuer Schlote", nl: "Vorming van nieuwe openingen" }
        ],
        correct: 0,
        explanation: {
          en: "Sector collapse involves catastrophic failure of a significant portion of the volcanic cone, often triggered by magma intrusion, earthquakes, or eruptions. Historic examples like Mount St. Helens 1980 show these can remove cubic kilometers of material, drastically alter volcano morphology, and trigger lateral blasts.",
          es: "El colapso de sector involucra falla catastrófica de una porción significativa del cono volcánico, a menudo desencadenada por intrusión de magma, terremotos o erupciones. Ejemplos históricos como Monte St. Helens 1980 muestran que pueden remover kilómetros cúbicos de material y desencadenar explosiones laterales.",
          de: "Sektorkollaps beinhaltet katastrophales Versagen eines bedeutenden Teils des vulkanischen Kegels, oft ausgelöst durch Magmaintrusion, Erdbeben oder Eruptionen. Historische Beispiele wie Mount St. Helens 1980 zeigen, dass diese Kubikkilometer Material entfernen und laterale Explosionen auslösen können.",
          nl: "Sector instorting betreft catastrofaal falen van een significant deel van de vulkanische kegel, vaak getriggerd door magma-intrusie, aardbevingen of uitbarstingen. Historische voorbeelden zoals Mount St. Helens 1980 tonen dat deze kubieke kilometers materiaal kunnen verwijderen en laterale explosies triggeren."
        }
      },
      {
        question: {
          en: "How do lava flow hazard maps account for topographic steering?",
          es: "¿Cómo los mapas de peligro de flujos de lava consideran la dirección topográfica?",
          de: "Wie berücksichtigen Lavafluss-Gefahrenkarten topographische Lenkung?",
          nl: "Hoe houden lavastroom gevarenkaarten rekening met topografische sturing?"
        },
        options: [
          { en: "Use digital elevation models to predict flow paths based on steepest descent algorithms", es: "Usan modelos digitales de elevación para predecir rutas de flujo basadas en algoritmos de descenso más empinado", de: "Verwenden digitale Höhenmodelle zur Vorhersage von Fließwegen basierend auf steilsten Abstiegsalgorithmen", nl: "Gebruiken digitale hoogtemodellen om stroompaden te voorspellen gebaseerd op steilste afdalingsalgoritmes" },
          { en: "Assume random flow directions", es: "Asumen direcciones de flujo aleatorias", de: "Nehmen zufällige Fließrichtungen an", nl: "Nemen willekeurige stroomrichtingen aan" },
          { en: "Only consider historical flow paths", es: "Solo consideran rutas de flujo históricas", de: "Berücksichtigen nur historische Fließwege", nl: "Overwegen alleen historische stroompaden" },
          { en: "Ignore topographic effects", es: "Ignoran efectos topográficos", de: "Ignorieren topographische Effekte", nl: "Negeren topografische effecten" }
        ],
        correct: 0,
        explanation: {
          en: "Modern lava flow hazard maps use high-resolution DEMs and physics-based models to simulate thousands of potential flow scenarios. These models account for topographic steering, flow thickness, rheology changes, and obstacles to create probabilistic inundation maps essential for land-use planning and emergency response.",
          es: "Los mapas modernos de peligro de flujos de lava usan DEMs de alta resolución y modelos basados en física para simular miles de escenarios potenciales de flujo. Estos modelos consideran dirección topográfica, espesor de flujo, cambios reológicos y obstáculos para crear mapas probabilísticos de inundación.",
          de: "Moderne Lavafluss-Gefahrenkarten verwenden hochauflösende DEMs und physikbasierte Modelle zur Simulation tausender potenzieller Fließszenarien. Diese Modelle berücksichtigen topographische Lenkung, Fließdicke, rheologische Änderungen und Hindernisse zur Erstellung probabilistischer Überflutungskarten.",
          nl: "Moderne lavastroom gevarenkaarten gebruiken hoge-resolutie DEMs en fysica-gebaseerde modellen om duizenden potentiële stroomscenario's te simuleren. Deze modellen houden rekening met topografische sturing, stroomdikte, reologische veranderingen en obstakels om probabilistische overstromingskaarten te creëren."
        }
      },
      {
        question: {
          en: "What is the concept of 'crisis levels' in volcanic alert systems?",
          es: "¿Cuál es el concepto de 'niveles de crisis' en sistemas de alerta volcánica?",
          de: "Was ist das Konzept der 'Krisenstufen' in vulkanischen Warnsystemen?",
          nl: "Wat is het concept van 'crisisniveaus' in vulkanische waarschuwingssystemen?"
        },
        options: [
          { en: "Graduated alert levels based on monitoring data to trigger specific response actions", es: "Niveles de alerta graduados basados en datos de monitoreo para activar acciones específicas de respuesta", de: "Abgestufte Warnstufen basierend auf Überwachungsdaten zur Auslösung spezifischer Reaktionsmaßnahmen", nl: "Graduele waarschuwingsniveaus gebaseerd op monitoringdata om specifieke responsacties te triggeren" },
          { en: "Binary system of safe or dangerous", es: "Sistema binario de seguro o peligroso", de: "Binäres System von sicher oder gefährlich", nl: "Binair systeem van veilig of gevaarlijk" },
          { en: "Levels based only on eruption size", es: "Niveles basados solo en tamaño de erupción", de: "Stufen basierend nur auf Eruptionsgröße", nl: "Niveaus gebaseerd alleen op uitbarstingsgrootte" },
          { en: "Random warning categories", es: "Categorías de advertencia aleatorias", de: "Zufällige Warnkategorien", nl: "Willekeurige waarschuwingscategorieën" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic alert levels (typically 4-5 stages) communicate threat levels to authorities and public, ranging from background activity to imminent/ongoing eruption. Each level triggers predetermined actions like increased monitoring, access restrictions, or evacuations. Effective systems balance scientific uncertainty with decision-making needs.",
          es: "Los niveles de alerta volcánica (típicamente 4-5 etapas) comunican niveles de amenaza a autoridades y público, desde actividad de fondo hasta erupción inminente/en curso. Cada nivel activa acciones predeterminadas como monitoreo aumentado, restricciones de acceso o evacuaciones.",
          de: "Vulkanische Warnstufen (typischerweise 4-5 Stufen) kommunizieren Bedrohungsstufen an Behörden und Öffentlichkeit, von Hintergrundaktivität bis zu bevorstehender/laufender Eruption. Jede Stufe löst vorbestimmte Aktionen wie verstärkte Überwachung, Zugangsbeschränkungen oder Evakuierungen aus.",
          nl: "Vulkanische waarschuwingsniveaus (typisch 4-5 fasen) communiceren dreigingsniveaus aan autoriteiten en publiek, van achtergrondactiviteit tot dreigende/lopende uitbarsting. Elk niveau triggert vooraf bepaalde acties zoals verhoogde monitoring, toegangsbeperkingen of evacuaties."
        }
      },
      {
        question: {
          en: "What role does tephra thickness play in agricultural impact assessment?",
          es: "¿Qué papel juega el espesor de tefra en la evaluación de impacto agrícola?",
          de: "Welche Rolle spielt die Tephradicke bei der Bewertung landwirtschaftlicher Auswirkungen?",
          nl: "Welke rol speelt tefra dikte in landbouwimpact beoordeling?"
        },
        options: [
          { en: "Determines crop survival, soil fertility changes, and recovery timeframes", es: "Determina supervivencia de cultivos, cambios en fertilidad del suelo y plazos de recuperación", de: "Bestimmt Pflanzenüberleben, Bodenfruchtbarkeitsänderungen und Erholungszeiträume", nl: "Bepaalt gewasoverleving, bodemvruchtbaarheidsveranderingen en hersteltijdlijnen" },
          { en: "Has no effect on agriculture", es: "No tiene efecto en la agricultura", de: "Hat keine Auswirkung auf die Landwirtschaft", nl: "Heeft geen effect op landbouw" },
          { en: "Only affects crop color", es: "Solo afecta el color de los cultivos", de: "Beeinflusst nur die Pflanzenfarbe", nl: "Beïnvloedt alleen gewaskleur" },
          { en: "Improves all soil conditions", es: "Mejora todas las condiciones del suelo", de: "Verbessert alle Bodenbedingungen", nl: "Verbetert alle bodemcondities" }
        ],
        correct: 0,
        explanation: {
          en: "Tephra thickness critically affects agriculture: <10mm may provide nutrients, 10-100mm can damage crops but allow recovery, >100mm typically causes total crop loss and requires soil rehabilitation. Chemical composition, grain size, and compaction also influence impacts on soil chemistry, water retention, and recovery rates.",
          es: "El espesor de tefra afecta críticamente la agricultura: <10mm puede proporcionar nutrientes, 10-100mm puede dañar cultivos pero permite recuperación, >100mm típicamente causa pérdida total de cultivos y requiere rehabilitación del suelo. Composición química, tamaño de grano y compactación también influyen.",
          de: "Die Tephradicke beeinflusst die Landwirtschaft kritisch: <10mm kann Nährstoffe liefern, 10-100mm kann Pflanzen schädigen aber Erholung ermöglichen, >100mm verursacht typischerweise totalen Ernteverlust und erfordert Bodenrehabilitation. Chemische Zusammensetzung und Korngröße beeinflussen ebenfalls.",
          nl: "Tefra dikte beïnvloedt landbouw kritisch: <10mm kan nutriënten leveren, 10-100mm kan gewassen beschadigen maar herstel toestaan, >100mm veroorzaakt typisch totaal gewasverlies en vereist bodemrehabilitatie. Chemische samenstelling en korrelgrootte beïnvloeden ook."
        }
      },
      {
        question: {
          en: "How do volcanic hazard assessments incorporate recurrence intervals?",
          es: "¿Cómo las evaluaciones de peligros volcánicos incorporan intervalos de recurrencia?",
          de: "Wie integrieren vulkanische Gefahrenbewertungen Wiederholungsintervalle?",
          nl: "Hoe integreren vulkanische gevaarsbeoordelingen herhalingsintervallen?"
        },
        options: [
          { en: "Statistical analysis of eruption frequency to estimate probability of future events", es: "Análisis estadístico de frecuencia de erupciones para estimar probabilidad de eventos futuros", de: "Statistische Analyse der Eruptionshäufigkeit zur Schätzung der Wahrscheinlichkeit zukünftiger Ereignisse", nl: "Statistische analyse van uitbarstingsfrequentie om waarschijnlijkheid van toekomstige gebeurtenissen te schatten" },
          { en: "Assuming regular periodic eruptions", es: "Asumiendo erupciones periódicas regulares", de: "Annahme regelmäßiger periodischer Eruptionen", nl: "Aannemend regelmatige periodieke uitbarstingen" },
          { en: "Ignoring temporal patterns", es: "Ignorando patrones temporales", de: "Ignorieren zeitlicher Muster", nl: "Negeren van temporele patronen" },
          { en: "Using only the most recent eruption", es: "Usando solo la erupción más reciente", de: "Verwendung nur der jüngsten Eruption", nl: "Gebruiken alleen de meest recente uitbarsting" }
        ],
        correct: 0,
        explanation: {
          en: "Recurrence intervals from geological and historical records help estimate eruption probability over different time scales. Statistical methods like Poisson processes, renewal models, and Bayesian approaches account for data uncertainty and irregular eruption patterns to produce probabilistic hazard forecasts for risk assessment.",
          es: "Los intervalos de recurrencia de registros geológicos e históricos ayudan a estimar la probabilidad de erupción en diferentes escalas de tiempo. Métodos estadísticos como procesos de Poisson, modelos de renovación y enfoques Bayesianos consideran incertidumbre de datos y patrones irregulares de erupción.",
          de: "Wiederholungsintervalle aus geologischen und historischen Aufzeichnungen helfen, die Eruptionswahrscheinlichkeit über verschiedene Zeitskalen zu schätzen. Statistische Methoden wie Poisson-Prozesse, Erneuerungsmodelle und Bayessche Ansätze berücksichtigen Datenunsicherheit und unregelmäßige Eruptionsmuster.",
          nl: "Herhalingsintervallen uit geologische en historische records helpen uitbarstingswaarschijnlijkheid over verschillende tijdschalen te schatten. Statistische methoden zoals Poisson processen, vernieuwingsmodellen en Bayesiaanse benaderingen houden rekening met data-onzekerheid en onregelmatige uitbarstingspatronen."
        }
      },
      {
        question: {
          en: "What distinguishes 'cold' lahars from 'hot' lahars?",
          es: "¿Qué distingue los lahares 'fríos' de los lahares 'calientes'?",
          de: "Was unterscheidet 'kalte' Lahare von 'heißen' Laharen?",
          nl: "Wat onderscheidt 'koude' lahars van 'hete' lahars?"
        },
        options: [
          { en: "Cold lahars form from rainfall remobilizing deposits; hot lahars form during eruptions", es: "Lahares fríos se forman por lluvia removilizando depósitos; lahares calientes se forman durante erupciones", de: "Kalte Lahare entstehen durch Regen, der Ablagerungen remobilisiert; heiße Lahare entstehen während Eruptionen", nl: "Koude lahars vormen door regen die afzettingen remobiliseert; hete lahars vormen tijdens uitbarstingen" },
          { en: "Temperature difference is minimal", es: "La diferencia de temperatura es mínima", de: "Der Temperaturunterschied ist minimal", nl: "Temperatuurverschil is minimaal" },
          { en: "Cold lahars are always smaller", es: "Los lahares fríos son siempre más pequeños", de: "Kalte Lahare sind immer kleiner", nl: "Koude lahars zijn altijd kleiner" },
          { en: "Hot lahars only occur in tropical regions", es: "Los lahares calientes solo ocurren en regiones tropicales", de: "Heiße Lahare treten nur in tropischen Regionen auf", nl: "Hete lahars komen alleen voor in tropische gebieden" }
        ],
        correct: 0,
        explanation: {
          en: "Cold (secondary) lahars form when rainfall remobilizes unconsolidated volcanic deposits, potentially occurring years after eruptions. Hot (primary) lahars form during eruptions from pyroclastic flows mixing with water or snow/ice melting. Both types pose significant hazards but have different triggering mechanisms and warning times.",
          es: "Los lahares fríos (secundarios) se forman cuando la lluvia removiliza depósitos volcánicos no consolidados, potencialmente ocurriendo años después de erupciones. Los lahares calientes (primarios) se forman durante erupciones por flujos piroclásticos mezclándose con agua o fusión de nieve/hielo.",
          de: "Kalte (sekundäre) Lahare entstehen, wenn Regen unkonsolidierte vulkanische Ablagerungen remobilisiert, möglicherweise Jahre nach Eruptionen. Heiße (primäre) Lahare entstehen während Eruptionen durch pyroklastische Ströme, die sich mit Wasser mischen oder Schnee/Eis schmelzen.",
          nl: "Koude (secundaire) lahars vormen wanneer regen ongeconsolideerde vulkanische afzettingen remobiliseert, mogelijk jaren na uitbarstingen. Hete (primaire) lahars vormen tijdens uitbarstingen door pyroclastische stromen die mengen met water of sneeuw/ijs smelting."
        }
      },
      {
        question: {
          en: "What is the purpose of lahar detection systems using acoustic flow monitors?",
          es: "¿Cuál es el propósito de los sistemas de detección de lahares usando monitores de flujo acústico?",
          de: "Was ist der Zweck von Lahar-Erkennungssystemen mit akustischen Strömungsmonitoren?",
          nl: "Wat is het doel van lahar detectiesystemen met akoestische stroommonitoren?"
        },
        options: [
          { en: "Detect ground vibrations from approaching debris flows to trigger warnings", es: "Detectar vibraciones del suelo de flujos de escombros aproximándose para activar advertencias", de: "Bodenschwingungen von herannahenden Schuttströmen erkennen, um Warnungen auszulösen", nl: "Grondtrillingen van naderende puinstromen detecteren om waarschuwingen te triggeren" },
          { en: "Measure lahar temperature", es: "Medir temperatura del lahar", de: "Lahar-Temperatur messen", nl: "Lahar temperatuur meten" },
          { en: "Predict eruption timing", es: "Predecir momento de erupción", de: "Eruptionszeitpunkt vorhersagen", nl: "Uitbarstingstiming voorspellen" },
          { en: "Sample lahar composition", es: "Muestrear composición del lahar", de: "Lahar-Zusammensetzung beproben", nl: "Lahar samenstelling bemonsteren" }
        ],
        correct: 0,
        explanation: {
          en: "Acoustic flow monitors (AFMs) detect high-frequency ground vibrations generated by debris flows and lahars. These systems provide real-time warnings to downstream communities, typically offering 5-45 minutes advance notice depending on sensor placement. They're essential components of lahar warning systems at volcanoes like Merapi and Ruapehu.",
          es: "Los monitores de flujo acústico (AFM) detectan vibraciones de alta frecuencia del suelo generadas por flujos de escombros y lahares. Estos sistemas proporcionan advertencias en tiempo real a comunidades río abajo, típicamente ofreciendo 5-45 minutos de aviso anticipado dependiendo de la ubicación del sensor.",
          de: "Akustische Strömungsmonitore (AFMs) erkennen hochfrequente Bodenschwingungen, die von Schuttströmen und Laharen erzeugt werden. Diese Systeme liefern Echtzeitwarnungen an flussabwärts gelegene Gemeinden, typischerweise mit 5-45 Minuten Vorwarnzeit je nach Sensorplatzierung.",
          nl: "Akoestische stroommonitoren (AFMs) detecteren hoogfrequente grondtrillingen gegenereerd door puinstromen en lahars. Deze systemen bieden real-time waarschuwingen aan stroomafwaartse gemeenschappen, typisch 5-45 minuten vooraf afhankelijk van sensorplaatsing."
        }
      },
      {
        question: {
          en: "What is the significance of 'exposure' in volcanic risk equations?",
          es: "¿Cuál es la importancia de la 'exposición' en las ecuaciones de riesgo volcánico?",
          de: "Was ist die Bedeutung der 'Exposition' in vulkanischen Risikogleichungen?",
          nl: "Wat is de betekenis van 'blootstelling' in vulkanische risicovergelijkingen?"
        },
        options: [
          { en: "The inventory of people and assets in hazard zones that could be affected", es: "El inventario de personas y activos en zonas de peligro que podrían ser afectados", de: "Das Inventar von Menschen und Vermögenswerten in Gefahrenzonen, die betroffen sein könnten", nl: "De inventaris van mensen en bezittingen in gevarenzones die getroffen kunnen worden" },
          { en: "The duration of the eruption", es: "La duración de la erupción", de: "Die Dauer der Eruption", nl: "De duur van de uitbarsting" },
          { en: "The chemical exposure to gases", es: "La exposición química a gases", de: "Die chemische Exposition gegenüber Gasen", nl: "De chemische blootstelling aan gassen" },
          { en: "The media coverage of the event", es: "La cobertura mediática del evento", de: "Die Medienberichterstattung über das Ereignis", nl: "De media dekking van het evenement" }
        ],
        correct: 0,
        explanation: {
          en: "Exposure quantifies the elements at risk: population, buildings, infrastructure, economic activities, and environmental assets within hazard zones. Risk is calculated as the product of hazard probability, exposure, and vulnerability. Accurate exposure assessment is crucial for risk reduction planning and emergency preparedness.",
          es: "La exposición cuantifica los elementos en riesgo: población, edificios, infraestructura, actividades económicas y activos ambientales dentro de zonas de peligro. El riesgo se calcula como el producto de probabilidad de peligro, exposición y vulnerabilidad.",
          de: "Exposition quantifiziert die gefährdeten Elemente: Bevölkerung, Gebäude, Infrastruktur, wirtschaftliche Aktivitäten und Umweltgüter in Gefahrenzonen. Risiko wird als Produkt aus Gefahrenwahrscheinlichkeit, Exposition und Vulnerabilität berechnet.",
          nl: "Blootstelling kwantificeert de elementen at risk: bevolking, gebouwen, infrastructuur, economische activiteiten en milieuactiva binnen gevarenzones. Risico wordt berekend als het product van gevaarwaarschijnlijkheid, blootstelling en kwetsbaarheid."
        }
      },
      {
        question: {
          en: "How do volcanic ash advisories support aviation safety?",
          es: "¿Cómo los avisos de ceniza volcánica apoyan la seguridad de la aviación?",
          de: "Wie unterstützen vulkanische Aschewarnungen die Flugsicherheit?",
          nl: "Hoe ondersteunen vulkanische aswaarschuwingen luchtvaartveiligheid?"
        },
        options: [
          { en: "Provide real-time ash cloud tracking and dispersion forecasts for flight planning", es: "Proporcionan seguimiento en tiempo real de nubes de ceniza y pronósticos de dispersión para planificación de vuelos", de: "Bieten Echtzeit-Aschewolkenverfolgung und Ausbreitungsprognosen für die Flugplanung", nl: "Bieden real-time aswolk tracking en dispersievoorspellingen voor vluchtplanning" },
          { en: "Only report past ash emissions", es: "Solo reportan emisiones de ceniza pasadas", de: "Berichten nur über vergangene Ascheemissionen", nl: "Rapporteren alleen voorbije as-emissies" },
          { en: "Measure aircraft engine performance", es: "Miden el rendimiento del motor de aeronaves", de: "Messen die Triebwerksleistung von Flugzeugen", nl: "Meten vliegtuigmotorprestaties" },
          { en: "Control air traffic directly", es: "Controlan el tráfico aéreo directamente", de: "Kontrollieren den Luftverkehr direkt", nl: "Controleren luchtverkeer direct" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic Ash Advisory Centers (VAACs) use satellite data, pilot reports, and dispersion models to track ash clouds and forecast their movement. They issue advisories every 6 hours during events, helping airlines avoid dangerous ash concentrations that can damage engines and compromise flight safety.",
          es: "Los Centros de Avisos de Ceniza Volcánica (VAAC) usan datos satelitales, reportes de pilotos y modelos de dispersión para rastrear nubes de ceniza y pronosticar su movimiento. Emiten avisos cada 6 horas durante eventos, ayudando a aerolíneas a evitar concentraciones peligrosas de ceniza.",
          de: "Vulkanasche-Beratungszentren (VAACs) nutzen Satellitendaten, Pilotenberichte und Ausbreitungsmodelle zur Verfolgung von Aschewolken und Vorhersage ihrer Bewegung. Sie geben während Ereignissen alle 6 Stunden Warnungen heraus und helfen Fluggesellschaften, gefährliche Aschekonzentrationen zu vermeiden.",
          nl: "Vulkanische As Adviescentra (VAACs) gebruiken satellietdata, pilootrapporten en dispersiemodellen om aswolken te volgen en hun beweging te voorspellen. Ze geven elke 6 uur adviezen tijdens gebeurtenissen, helpend luchtvaartmaatschappijen gevaarlijke asconcentraties te vermijden."
        }
      },
      {
        question: {
          en: "What is the role of community-based monitoring in volcanic risk reduction?",
          es: "¿Cuál es el papel del monitoreo basado en la comunidad en la reducción del riesgo volcánico?",
          de: "Was ist die Rolle der gemeindebasierten Überwachung bei der vulkanischen Risikominderung?",
          nl: "Wat is de rol van gemeenschapsgebaseerde monitoring in vulkanische risicoreductie?"
        },
        options: [
          { en: "Empowers local observers to report changes and enhances early warning capabilities", es: "Empodera a observadores locales para reportar cambios y mejora capacidades de alerta temprana", de: "Befähigt lokale Beobachter, Veränderungen zu melden und verbessert Frühwarnfähigkeiten", nl: "Stelt lokale waarnemers in staat veranderingen te rapporteren en verbetert vroege waarschuwingscapaciteiten" },
          { en: "Replaces scientific monitoring entirely", es: "Reemplaza el monitoreo científico completamente", de: "Ersetzt wissenschaftliche Überwachung vollständig", nl: "Vervangt wetenschappelijke monitoring volledig" },
          { en: "Only involves evacuation planning", es: "Solo involucra planificación de evacuación", de: "Betrifft nur Evakuierungsplanung", nl: "Betreft alleen evacuatieplanning" },
          { en: "Has no scientific value", es: "No tiene valor científico", de: "Hat keinen wissenschaftlichen Wert", nl: "Heeft geen wetenschappelijke waarde" }
        ],
        correct: 0,
        explanation: {
          en: "Community-based monitoring engages local residents in observing and reporting volcanic phenomena, complementing instrumental monitoring. It provides continuous observations, enhances community preparedness, builds trust between scientists and communities, and can detect precursory changes that instruments might miss, particularly at remote volcanoes.",
          es: "El monitoreo basado en la comunidad involucra a residentes locales en observar y reportar fenómenos volcánicos, complementando el monitoreo instrumental. Proporciona observaciones continuas, mejora la preparación comunitaria, construye confianza entre científicos y comunidades.",
          de: "Gemeindebasierte Überwachung bezieht lokale Bewohner in die Beobachtung und Meldung vulkanischer Phänomene ein und ergänzt die instrumentelle Überwachung. Sie bietet kontinuierliche Beobachtungen, verbessert die Gemeindebereitschaft und baut Vertrauen zwischen Wissenschaftlern und Gemeinden auf.",
          nl: "Gemeenschapsgebaseerde monitoring betrekt lokale bewoners bij het observeren en rapporteren van vulkanische fenomenen, aanvullend op instrumentele monitoring. Het biedt continue observaties, verbetert gemeenschapsparaatheid, bouwt vertrouwen tussen wetenschappers en gemeenschappen."
        }
      },
      {
        question: {
          en: "What factors control the runout distance of pyroclastic density currents?",
          es: "¿Qué factores controlan la distancia de alcance de las corrientes de densidad piroclástica?",
          de: "Welche Faktoren kontrollieren die Auslaufdistanz pyroklastischer Dichteströme?",
          nl: "Welke factoren controleren de uitloopafstand van pyroclastische dichtheidsstromen?"
        },
        options: [
          { en: "Initial volume, velocity, temperature, grain size distribution, and topography", es: "Volumen inicial, velocidad, temperatura, distribución de tamaño de grano y topografía", de: "Anfangsvolumen, Geschwindigkeit, Temperatur, Korngrößenverteilung und Topographie", nl: "Initieel volume, snelheid, temperatuur, korrelgrootteverdeling en topografie" },
          { en: "Only the wind direction", es: "Solo la dirección del viento", de: "Nur die Windrichtung", nl: "Alleen de windrichting" },
          { en: "Time of day of eruption", es: "Hora del día de la erupción", de: "Tageszeit der Eruption", nl: "Tijd van de dag van uitbarsting" },
          { en: "Lunar phase during eruption", es: "Fase lunar durante la erupción", de: "Mondphase während der Eruption", nl: "Maanfase tijdens uitbarsting" }
        ],
        correct: 0,
        explanation: {
          en: "PDC runout is controlled by complex interactions between initial conditions (volume, velocity, temperature), particle characteristics (size distribution, density), topographic effects (channeling, obstacles), and flow dynamics (turbulence, sedimentation). Understanding these factors is crucial for hazard zone mapping and risk assessment.",
          es: "El alcance de CDP es controlado por interacciones complejas entre condiciones iniciales (volumen, velocidad, temperatura), características de partículas (distribución de tamaño, densidad), efectos topográficos (canalización, obstáculos) y dinámica de flujo (turbulencia, sedimentación).",
          de: "Die PDC-Auslaufdistanz wird durch komplexe Wechselwirkungen zwischen Anfangsbedingungen (Volumen, Geschwindigkeit, Temperatur), Partikeleigenschaften (Größenverteilung, Dichte), topographischen Effekten (Kanalisierung, Hindernisse) und Strömungsdynamik (Turbulenz, Sedimentation) kontrolliert.",
          nl: "PDC uitloop wordt gecontroleerd door complexe interacties tussen beginvoorwaarden (volume, snelheid, temperatuur), deeltjeskenmerken (grootteverdeling, dichtheid), topografische effecten (kanalisering, obstakels) en stroomdynamiek (turbulentie, sedimentatie)."
        }
      },
      {
        question: {
          en: "How do volcanic hazard maps communicate uncertainty to stakeholders?",
          es: "¿Cómo los mapas de peligros volcánicos comunican incertidumbre a las partes interesadas?",
          de: "Wie kommunizieren vulkanische Gefahrenkarten Unsicherheit an Interessengruppen?",
          nl: "Hoe communiceren vulkanische gevarenkaarten onzekerheid aan belanghebbenden?"
        },
        options: [
          { en: "Using probabilistic zones, confidence intervals, and multiple scenarios", es: "Usando zonas probabilísticas, intervalos de confianza y múltiples escenarios", de: "Verwendung probabilistischer Zonen, Konfidenzintervalle und mehrerer Szenarien", nl: "Gebruiken van probabilistische zones, betrouwbaarheidsintervallen en meerdere scenario's" },
          { en: "Showing only worst-case scenarios", es: "Mostrando solo escenarios del peor caso", de: "Nur Worst-Case-Szenarien zeigen", nl: "Alleen worst-case scenario's tonen" },
          { en: "Avoiding uncertainty discussions", es: "Evitando discusiones de incertidumbre", de: "Unsicherheitsdiskussionen vermeiden", nl: "Onzekerheidsdiscussies vermijden" },
          { en: "Using single deterministic predictions", es: "Usando predicciones determinísticas únicas", de: "Verwendung einzelner deterministischer Vorhersagen", nl: "Gebruiken van enkele deterministische voorspellingen" }
        ],
        correct: 0,
        explanation: {
          en: "Modern hazard maps use probabilistic approaches showing likelihood of impacts in different areas, multiple eruption scenarios, confidence bounds on hazard zones, and transparent documentation of assumptions and limitations. This helps decision-makers understand and plan for uncertainty in volcanic hazard assessment.",
          es: "Los mapas de peligros modernos usan enfoques probabilísticos mostrando probabilidad de impactos en diferentes áreas, múltiples escenarios de erupción, límites de confianza en zonas de peligro y documentación transparente de suposiciones y limitaciones.",
          de: "Moderne Gefahrenkarten verwenden probabilistische Ansätze, die die Wahrscheinlichkeit von Auswirkungen in verschiedenen Gebieten, mehrere Eruptionsszenarien, Vertrauensgrenzen für Gefahrenzonen und transparente Dokumentation von Annahmen und Einschränkungen zeigen.",
          nl: "Moderne gevarenkaarten gebruiken probabilistische benaderingen die waarschijnlijkheid van impacts in verschillende gebieden tonen, meerdere uitbarstingsscenario's, vertrouwensgrenzen op gevarenzones en transparante documentatie van aannames en beperkingen."
        }
      },
      {
        question: {
          en: "What is the significance of 'rain-triggered' lahars in long-term hazard planning?",
          es: "¿Cuál es la importancia de los lahares 'desencadenados por lluvia' en la planificación de peligros a largo plazo?",
          de: "Was ist die Bedeutung von 'regenausgelösten' Laharen in der langfristigen Gefahrenplanung?",
          nl: "Wat is de betekenis van 'regen-getriggerde' lahars in langetermijn gevarenplanning?"
        },
        options: [
          { en: "They can occur for decades after eruptions, requiring persistent monitoring and mitigation", es: "Pueden ocurrir durante décadas después de erupciones, requiriendo monitoreo y mitigación persistentes", de: "Sie können jahrzehntelang nach Eruptionen auftreten und erfordern anhaltende Überwachung und Minderung", nl: "Ze kunnen decennia na uitbarstingen optreden, vereisend aanhoudende monitoring en mitigatie" },
          { en: "They only occur during eruptions", es: "Solo ocurren durante erupciones", de: "Sie treten nur während Eruptionen auf", nl: "Ze komen alleen voor tijdens uitbarstingen" },
          { en: "They are less dangerous than primary lahars", es: "Son menos peligrosos que lahares primarios", de: "Sie sind weniger gefährlich als primäre Lahare", nl: "Ze zijn minder gevaarlijk dan primaire lahars" },
          { en: "They cannot be predicted", es: "No pueden ser predichos", de: "Sie können nicht vorhergesagt werden", nl: "Ze kunnen niet voorspeld worden" }
        ],
        correct: 0,
        explanation: {
          en: "Rain-triggered lahars remobilize loose volcanic deposits for years to decades after eruptions, as seen at Pinatubo where lahars continued for >10 years. Long-term hazard planning must account for changing lahar potential as deposits stabilize, requiring sustained monitoring, early warning systems, and engineering interventions.",
          es: "Los lahares desencadenados por lluvia removilizan depósitos volcánicos sueltos durante años a décadas después de erupciones, como visto en Pinatubo donde los lahares continuaron por >10 años. La planificación de peligros a largo plazo debe considerar el potencial cambiante de lahares.",
          de: "Regenausgelöste Lahare remobilisieren lose vulkanische Ablagerungen für Jahre bis Jahrzehnte nach Eruptionen, wie am Pinatubo gesehen, wo Lahare >10 Jahre anhielten. Langfristige Gefahrenplanung muss sich änderndes Lahar-Potential berücksichtigen.",
          nl: "Regen-getriggerde lahars remobiliseren losse vulkanische afzettingen voor jaren tot decennia na uitbarstingen, zoals gezien bij Pinatubo waar lahars >10 jaar doorgingen. Langetermijn gevarenplanning moet rekening houden met veranderend lahar potentieel."
        }
      },
      {
        question: {
          en: "How do volcanic risk assessments account for cascading hazards?",
          es: "¿Cómo las evaluaciones de riesgo volcánico consideran los peligros en cascada?",
          de: "Wie berücksichtigen vulkanische Risikobewertungen kaskadierende Gefahren?",
          nl: "Hoe houden vulkanische risicobeoordelingen rekening met cascaderende gevaren?"
        },
        options: [
          { en: "Model sequences where primary hazards trigger secondary events with compounding impacts", es: "Modelan secuencias donde peligros primarios desencadenan eventos secundarios con impactos compuestos", de: "Modellieren Sequenzen, bei denen primäre Gefahren sekundäre Ereignisse mit sich verstärkenden Auswirkungen auslösen", nl: "Modelleren sequenties waar primaire gevaren secundaire gebeurtenissen triggeren met samengestelde impacts" },
          { en: "Consider only direct volcanic impacts", es: "Consideran solo impactos volcánicos directos", de: "Berücksichtigen nur direkte vulkanische Auswirkungen", nl: "Overwegen alleen directe vulkanische impacts" },
          { en: "Assess hazards independently", es: "Evalúan peligros independientemente", de: "Bewerten Gefahren unabhängig", nl: "Beoordelen gevaren onafhankelijk" },
          { en: "Focus on single hazard types", es: "Se enfocan en tipos de peligro únicos", de: "Konzentrieren sich auf einzelne Gefahrentypen", nl: "Focussen op enkele gevaartypes" }
        ],
        correct: 0,
        explanation: {
          en: "Cascading hazards occur when primary volcanic events trigger secondary hazards: PDCs generating lahars, tephra damming rivers causing floods, or edifice collapse triggering tsunamis. Modern risk assessments use event trees and multi-hazard models to capture these complex interactions and their cumulative impacts on communities.",
          es: "Los peligros en cascada ocurren cuando eventos volcánicos primarios desencadenan peligros secundarios: CDP generando lahares, tefra represando ríos causando inundaciones, o colapso del edificio desencadenando tsunamis. Las evaluaciones modernas usan árboles de eventos y modelos multi-peligro.",
          de: "Kaskadierende Gefahren treten auf, wenn primäre vulkanische Ereignisse sekundäre Gefahren auslösen: PDCs erzeugen Lahare, Tephra staut Flüsse und verursacht Überschwemmungen, oder Gebäudekollaps löst Tsunamis aus. Moderne Bewertungen verwenden Ereignisbäume und Multi-Gefahren-Modelle.",
          nl: "Cascaderende gevaren treden op wanneer primaire vulkanische gebeurtenissen secundaire gevaren triggeren: PDCs genereren lahars, tefra dammen rivieren veroorzaken overstromingen, of gebouwinstorting triggert tsunami's. Moderne beoordelingen gebruiken gebeurtenisbomen en multi-gevaar modellen."
        }
      },
      {
        question: {
          en: "What role does social vulnerability play in volcanic disaster outcomes?",
          es: "¿Qué papel juega la vulnerabilidad social en los resultados de desastres volcánicos?",
          de: "Welche Rolle spielt soziale Vulnerabilität bei vulkanischen Katastrophenergebnissen?",
          nl: "Welke rol speelt sociale kwetsbaarheid in vulkanische ramp uitkomsten?"
        },
        options: [
          { en: "Determines differential impacts based on poverty, education, health access, and social networks", es: "Determina impactos diferenciales basados en pobreza, educación, acceso a salud y redes sociales", de: "Bestimmt unterschiedliche Auswirkungen basierend auf Armut, Bildung, Gesundheitszugang und sozialen Netzwerken", nl: "Bepaalt differentiële impacts gebaseerd op armoede, educatie, gezondheidstoegang en sociale netwerken" },
          { en: "Affects only economic losses", es: "Afecta solo pérdidas económicas", de: "Betrifft nur wirtschaftliche Verluste", nl: "Beïnvloedt alleen economische verliezen" },
          { en: "Is less important than physical hazards", es: "Es menos importante que peligros físicos", de: "Ist weniger wichtig als physische Gefahren", nl: "Is minder belangrijk dan fysieke gevaren" },
          { en: "Cannot be measured or addressed", es: "No puede ser medida o abordada", de: "Kann nicht gemessen oder angegangen werden", nl: "Kan niet gemeten of aangepakt worden" }
        ],
        correct: 0,
        explanation: {
          en: "Social vulnerability encompasses factors like poverty, marginalization, education levels, health status, and social capital that affect communities' capacity to prepare for, respond to, and recover from volcanic disasters. Addressing social vulnerability through inclusive planning and capacity building is essential for disaster risk reduction.",
          es: "La vulnerabilidad social abarca factores como pobreza, marginalización, niveles de educación, estado de salud y capital social que afectan la capacidad de las comunidades para prepararse, responder y recuperarse de desastres volcánicos.",
          de: "Soziale Vulnerabilität umfasst Faktoren wie Armut, Marginalisierung, Bildungsniveau, Gesundheitszustand und Sozialkapital, die die Fähigkeit von Gemeinschaften beeinflussen, sich auf vulkanische Katastrophen vorzubereiten, darauf zu reagieren und sich davon zu erholen.",
          nl: "Sociale kwetsbaarheid omvat factoren zoals armoede, marginalisering, onderwijsniveaus, gezondheidsstatus en sociaal kapitaal die de capaciteit van gemeenschappen beïnvloeden om zich voor te bereiden op, te reageren op en te herstellen van vulkanische rampen."
        }
      },
      {
        question: {
          en: "What is the purpose of volcanic hazard scenario exercises?",
          es: "¿Cuál es el propósito de los ejercicios de escenarios de peligros volcánicos?",
          de: "Was ist der Zweck von vulkanischen Gefahrenszenario-Übungen?",
          nl: "Wat is het doel van vulkanische gevaarscenario oefeningen?"
        },
        options: [
          { en: "Test emergency response plans and identify gaps in preparedness", es: "Probar planes de respuesta de emergencia e identificar brechas en la preparación", de: "Notfallpläne testen und Lücken in der Vorbereitung identifizieren", nl: "Testen van noodresponsplannen en identificeren van gaten in paraatheid" },
          { en: "Predict exact eruption timing", es: "Predecir el momento exacto de erupción", de: "Genauen Eruptionszeitpunkt vorhersagen", nl: "Exacte uitbarstingstiming voorspellen" },
          { en: "Replace real monitoring systems", es: "Reemplazar sistemas de monitoreo reales", de: "Echte Überwachungssysteme ersetzen", nl: "Echte monitoringsystemen vervangen" },
          { en: "Entertain the public", es: "Entretener al público", de: "Die Öffentlichkeit unterhalten", nl: "Het publiek vermaken" }
        ],
        correct: 0,
        explanation: {
          en: "Scenario exercises simulate volcanic crises to test response capabilities, communication protocols, and decision-making processes. They reveal weaknesses in plans, improve coordination between agencies, build relationships among stakeholders, and enhance community preparedness without the pressure of an actual emergency.",
          es: "Los ejercicios de escenarios simulan crisis volcánicas para probar capacidades de respuesta, protocolos de comunicación y procesos de toma de decisiones. Revelan debilidades en planes, mejoran coordinación entre agencias, construyen relaciones entre partes interesadas.",
          de: "Szenarioübungen simulieren vulkanische Krisen, um Reaktionsfähigkeiten, Kommunikationsprotokolle und Entscheidungsprozesse zu testen. Sie decken Schwächen in Plänen auf, verbessern die Koordination zwischen Behörden und bauen Beziehungen zwischen Interessengruppen auf.",
          nl: "Scenario-oefeningen simuleren vulkanische crises om responscapaciteiten, communicatieprotocollen en besluitvormingsprocessen te testen. Ze onthullen zwakheden in plannen, verbeteren coördinatie tussen instanties, bouwen relaties tussen belanghebbenden."
        }
      },
      {
        question: {
          en: "How do tephra fall impacts on infrastructure vary with accumulation thickness?",
          es: "¿Cómo varían los impactos de caída de tefra en infraestructura con el espesor de acumulación?",
          de: "Wie variieren die Auswirkungen von Tephrafall auf die Infrastruktur mit der Akkumulationsdicke?",
          nl: "Hoe variëren tefra-val impacts op infrastructuur met accumulatiedikte?"
        },
        options: [
          { en: "2-10cm disrupts transport; 10-30cm damages roofs; >30cm causes structural collapse", es: "2-10cm interrumpe transporte; 10-30cm daña techos; >30cm causa colapso estructural", de: "2-10cm stört Transport; 10-30cm beschädigt Dächer; >30cm verursacht strukturellen Kollaps", nl: "2-10cm verstoort transport; 10-30cm beschadigt daken; >30cm veroorzaakt structurele instorting" },
          { en: "All thicknesses have equal impact", es: "Todos los espesores tienen igual impacto", de: "Alle Dicken haben gleiche Auswirkung", nl: "Alle diktes hebben gelijke impact" },
          { en: "Only affects aesthetics", es: "Solo afecta la estética", de: "Betrifft nur die Ästhetik", nl: "Beïnvloedt alleen esthetiek" },
          { en: "Thickness is irrelevant to damage", es: "El espesor es irrelevante para el daño", de: "Dicke ist irrelevant für Schäden", nl: "Dikte is irrelevant voor schade" }
        ],
        correct: 0,
        explanation: {
          en: "Tephra impacts increase non-linearly with thickness: thin deposits (<2cm) affect air quality and electronics; moderate accumulations (2-30cm) disrupt transportation, damage roofs (especially when wet), and affect water supplies; thick deposits (>30cm) cause building collapse, bury infrastructure, and require major cleanup operations.",
          es: "Los impactos de tefra aumentan no linealmente con el espesor: depósitos delgados (<2cm) afectan calidad del aire y electrónica; acumulaciones moderadas (2-30cm) interrumpen transporte, dañan techos y afectan suministros de agua; depósitos gruesos (>30cm) causan colapso de edificios.",
          de: "Tephra-Auswirkungen nehmen nicht-linear mit der Dicke zu: dünne Ablagerungen (<2cm) beeinflussen Luftqualität und Elektronik; moderate Ansammlungen (2-30cm) stören Transport, beschädigen Dächer und beeinträchtigen Wasserversorgung; dicke Ablagerungen (>30cm) verursachen Gebäudeeinsturz.",
          nl: "Tefra impacts nemen niet-lineair toe met dikte: dunne afzettingen (<2cm) beïnvloeden luchtkwaliteit en elektronica; matige accumulaties (2-30cm) verstoren transport, beschadigen daken en beïnvloeden watervoorziening; dikke afzettingen (>30cm) veroorzaken gebouwinstorting."
        }
      },
      {
        question: {
          en: "What is the significance of 'resilience' in volcanic risk management?",
          es: "¿Cuál es la importancia de la 'resiliencia' en la gestión del riesgo volcánico?",
          de: "Was ist die Bedeutung von 'Resilienz' im vulkanischen Risikomanagement?",
          nl: "Wat is de betekenis van 'veerkracht' in vulkanisch risicomanagement?"
        },
        options: [
          { en: "The capacity to absorb, adapt to, and recover from volcanic impacts while maintaining function", es: "La capacidad de absorber, adaptarse y recuperarse de impactos volcánicos manteniendo la función", de: "Die Fähigkeit, vulkanische Auswirkungen zu absorbieren, sich anzupassen und sich davon zu erholen, während die Funktion erhalten bleibt", nl: "De capaciteit om vulkanische impacts te absorberen, aan te passen en te herstellen terwijl functie behouden blijft" },
          { en: "Complete prevention of all impacts", es: "Prevención completa de todos los impactos", de: "Vollständige Verhinderung aller Auswirkungen", nl: "Complete preventie van alle impacts" },
          { en: "Accepting losses without response", es: "Aceptar pérdidas sin respuesta", de: "Verluste ohne Reaktion akzeptieren", nl: "Verliezen accepteren zonder respons" },
          { en: "Avoiding volcanic areas entirely", es: "Evitar áreas volcánicas completamente", de: "Vulkanische Gebiete vollständig meiden", nl: "Vulkanische gebieden volledig vermijden" }
        ],
        correct: 0,
        explanation: {
          en: "Resilience encompasses the ability of communities and systems to withstand, adapt to, and recover from volcanic hazards. It involves building adaptive capacity through preparedness, maintaining critical functions during crises, learning from events, and transforming to reduce future vulnerability while living with volcanic risk.",
          es: "La resiliencia abarca la capacidad de comunidades y sistemas para resistir, adaptarse y recuperarse de peligros volcánicos. Involucra construir capacidad adaptativa mediante preparación, mantener funciones críticas durante crisis, aprender de eventos y transformarse para reducir vulnerabilidad futura.",
          de: "Resilienz umfasst die Fähigkeit von Gemeinschaften und Systemen, vulkanischen Gefahren zu widerstehen, sich anzupassen und sich davon zu erholen. Es beinhaltet den Aufbau adaptiver Kapazität durch Vorbereitung, Aufrechterhaltung kritischer Funktionen während Krisen und Lernen aus Ereignissen.",
          nl: "Veerkracht omvat het vermogen van gemeenschappen en systemen om vulkanische gevaren te weerstaan, zich aan te passen en te herstellen. Het behelst het opbouwen van adaptieve capaciteit door paraatheid, handhaven van kritieke functies tijdens crises en leren van gebeurtenissen."
        }
      },
      {
        question: {
          en: "How do volcanic gas emissions affect regional climate and air quality?",
          es: "¿Cómo afectan las emisiones de gases volcánicos al clima regional y la calidad del aire?",
          de: "Wie beeinflussen vulkanische Gasemissionen das regionale Klima und die Luftqualität?",
          nl: "Hoe beïnvloeden vulkanische gasemissies regionaal klimaat en luchtkwaliteit?"
        },
        options: [
          { en: "SO2 forms sulfate aerosols causing acid rain and temporary cooling; CO2 contributes to greenhouse effect", es: "SO2 forma aerosoles de sulfato causando lluvia ácida y enfriamiento temporal; CO2 contribuye al efecto invernadero", de: "SO2 bildet Sulfat-Aerosole, die sauren Regen und temporäre Abkühlung verursachen; CO2 trägt zum Treibhauseffekt bei", nl: "SO2 vormt sulfaat aerosolen die zure regen en tijdelijke afkoeling veroorzaken; CO2 draagt bij aan broeikaseffect" },
          { en: "Gases have no environmental impact", es: "Los gases no tienen impacto ambiental", de: "Gase haben keine Umweltauswirkungen", nl: "Gassen hebben geen milieu-impact" },
          { en: "Only affect the immediate crater area", es: "Solo afectan el área inmediata del cráter", de: "Betreffen nur den unmittelbaren Kraterbereich", nl: "Beïnvloeden alleen het directe kratergebied" },
          { en: "Always improve air quality", es: "Siempre mejoran la calidad del aire", de: "Verbessern immer die Luftqualität", nl: "Verbeteren altijd luchtkwaliteit" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic gas emissions significantly impact atmosphere and climate. SO2 converts to sulfate aerosols causing acid rain, respiratory problems, and short-term cooling. Large eruptions like Pinatubo 1991 can cool global climate by ~0.5°C. CO2 emissions contribute to long-term greenhouse warming. Regional effects include vog formation and agricultural damage.",
          es: "Las emisiones de gases volcánicos impactan significativamente la atmósfera y el clima. El SO2 se convierte en aerosoles de sulfato causando lluvia ácida, problemas respiratorios y enfriamiento a corto plazo. Grandes erupciones como Pinatubo 1991 pueden enfriar el clima global ~0.5°C.",
          de: "Vulkanische Gasemissionen beeinflussen Atmosphäre und Klima erheblich. SO2 wird zu Sulfat-Aerosolen, die sauren Regen, Atemprobleme und kurzfristige Abkühlung verursachen. Große Eruptionen wie Pinatubo 1991 können das globale Klima um ~0,5°C abkühlen.",
          nl: "Vulkanische gasemissies beïnvloeden atmosfeer en klimaat significant. SO2 converteert naar sulfaat aerosolen die zure regen, ademhalingsproblemen en kortetermijn afkoeling veroorzaken. Grote uitbarstingen zoals Pinatubo 1991 kunnen globaal klimaat ~0.5°C afkoelen."
        }
      },
      {
        question: {
          en: "What is the role of ground-based radar in monitoring active lava domes?",
          es: "¿Cuál es el papel del radar terrestre en el monitoreo de domos de lava activos?",
          de: "Was ist die Rolle des bodengestützten Radars bei der Überwachung aktiver Lavadome?",
          nl: "Wat is de rol van grondgebaseerde radar in het monitoren van actieve lavakoepels?"
        },
        options: [
          { en: "Detects millimeter-scale deformation indicating dome growth and potential collapse", es: "Detecta deformación a escala milimétrica indicando crecimiento del domo y colapso potencial", de: "Erkennt millimetergroße Deformationen, die Domwachstum und potenziellen Kollaps anzeigen", nl: "Detecteert millimeter-schaal deformatie die koepelgroei en potentiële instorting aanduidt" },
          { en: "Measures dome temperature only", es: "Mide solo la temperatura del domo", de: "Misst nur die Domtemperatur", nl: "Meet alleen koepeltemperatuur" },
          { en: "Samples rock composition", es: "Muestrea composición de rocas", de: "Beprobt Gesteinszusammensetzung", nl: "Bemonstert rotssamenstelling" },
          { en: "Predicts eruption chemistry", es: "Predice química de erupción", de: "Sagt Eruptionschemie voraus", nl: "Voorspelt uitbarstingschemie" }
        ],
        correct: 0,
        explanation: {
          en: "Ground-based radar provides continuous, high-resolution monitoring of lava dome deformation, detecting precursory changes before collapses that generate pyroclastic flows. Systems can measure sub-millimeter movements through ash and weather, providing critical real-time data for hazard assessment at volcanoes like Merapi and Soufrière Hills.",
          es: "El radar terrestre proporciona monitoreo continuo de alta resolución de la deformación del domo de lava, detectando cambios precursores antes de colapsos que generan flujos piroclásticos. Los sistemas pueden medir movimientos sub-milimétricos a través de ceniza y clima.",
          de: "Bodengestütztes Radar bietet kontinuierliche, hochauflösende Überwachung der Lavadom-Deformation und erkennt Vorläuferveränderungen vor Kollaps, der pyroklastische Ströme erzeugt. Systeme können sub-millimeter Bewegungen durch Asche und Wetter messen.",
          nl: "Grondgebaseerde radar biedt continue, hoge-resolutie monitoring van lavakoepel deformatie, detecterend voortekenen voor instortingen die pyroclastische stromen genereren. Systemen kunnen sub-millimeter bewegingen meten door as en weer."
        }
      },
      {
        question: {
          en: "What factors influence the effectiveness of volcanic crisis communication?",
          es: "¿Qué factores influyen en la efectividad de la comunicación de crisis volcánicas?",
          de: "Welche Faktoren beeinflussen die Wirksamkeit der vulkanischen Krisenkommunikation?",
          nl: "Welke factoren beïnvloeden de effectiviteit van vulkanische crisiscommunicatie?"
        },
        options: [
          { en: "Trust in sources, message clarity, cultural appropriateness, and communication channels", es: "Confianza en fuentes, claridad del mensaje, adecuación cultural y canales de comunicación", de: "Vertrauen in Quellen, Nachrichtenklarheit, kulturelle Angemessenheit und Kommunikationskanäle", nl: "Vertrouwen in bronnen, berichthelder, culturele geschiktheid en communicatiekanalen" },
          { en: "Only the volume of messages sent", es: "Solo el volumen de mensajes enviados", de: "Nur das Volumen der gesendeten Nachrichten", nl: "Alleen het volume van verzonden berichten" },
          { en: "Technical complexity of information", es: "Complejidad técnica de la información", de: "Technische Komplexität der Informationen", nl: "Technische complexiteit van informatie" },
          { en: "Use of scientific jargon", es: "Uso de jerga científica", de: "Verwendung wissenschaftlichen Jargons", nl: "Gebruik van wetenschappelijk jargon" }
        ],
        correct: 0,
        explanation: {
          en: "Effective crisis communication depends on established trust between authorities and communities, clear and consistent messaging, culturally appropriate content and delivery methods, multiple communication channels for redundancy, and two-way dialogue. Failed communication can lead to unnecessary panic or dangerous complacency during volcanic crises.",
          es: "La comunicación efectiva de crisis depende de confianza establecida entre autoridades y comunidades, mensajes claros y consistentes, contenido y métodos de entrega culturalmente apropiados, múltiples canales de comunicación para redundancia y diálogo bidireccional.",
          de: "Effektive Krisenkommunikation hängt ab von etabliertem Vertrauen zwischen Behörden und Gemeinden, klaren und konsistenten Botschaften, kulturell angemessenen Inhalten und Übermittlungsmethoden, mehreren Kommunikationskanälen für Redundanz und zweiseitigem Dialog.",
          nl: "Effectieve crisiscommunicatie hangt af van gevestigd vertrouwen tussen autoriteiten en gemeenschappen, heldere en consistente berichtgeving, cultureel geschikte inhoud en leveringsmethoden, meerdere communicatiekanalen voor redundantie en tweerichtingsdialoog."
        }
      },
      {
        question: {
          en: "How do volcanic hazards impact critical infrastructure networks?",
          es: "¿Cómo impactan los peligros volcánicos las redes de infraestructura crítica?",
          de: "Wie wirken sich vulkanische Gefahren auf kritische Infrastrukturnetzwerke aus?",
          nl: "Hoe beïnvloeden vulkanische gevaren kritieke infrastructuurnetwerken?"
        },
        options: [
          { en: "Create cascading failures through interdependencies between power, water, transport, and communications", es: "Crean fallas en cascada a través de interdependencias entre energía, agua, transporte y comunicaciones", de: "Erzeugen kaskadierende Ausfälle durch Abhängigkeiten zwischen Strom, Wasser, Transport und Kommunikation", nl: "Creëren cascaderende storingen door onderlinge afhankelijkheden tussen stroom, water, transport en communicatie" },
          { en: "Affect only individual components", es: "Afectan solo componentes individuales", de: "Betreffen nur einzelne Komponenten", nl: "Beïnvloeden alleen individuele componenten" },
          { en: "Have no systemic effects", es: "No tienen efectos sistémicos", de: "Haben keine systemischen Auswirkungen", nl: "Hebben geen systemische effecten" },
          { en: "Improve network resilience", es: "Mejoran la resiliencia de la red", de: "Verbessern die Netzwerkresilienz", nl: "Verbeteren netwerkveerkracht" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic hazards trigger cascading infrastructure failures: ash contaminates water supplies and shorts electrical systems; power outages affect water pumping and communications; transport disruption prevents repair access. Understanding these interdependencies is crucial for infrastructure resilience planning and prioritizing protection measures.",
          es: "Los peligros volcánicos desencadenan fallas de infraestructura en cascada: la ceniza contamina suministros de agua y cortocircuita sistemas eléctricos; los cortes de energía afectan el bombeo de agua y las comunicaciones; la interrupción del transporte impide el acceso para reparaciones.",
          de: "Vulkanische Gefahren lösen kaskadierende Infrastrukturausfälle aus: Asche kontaminiert Wasserversorgung und verursacht Kurzschlüsse in elektrischen Systemen; Stromausfälle beeinflussen Wasserpumpen und Kommunikation; Transportunterbrechungen verhindern Reparaturzugang.",
          nl: "Vulkanische gevaren triggeren cascaderende infrastructuurstoringen: as vervuilt watervoorzieningen en veroorzaakt kortsluiting in elektrische systemen; stroomuitval beïnvloedt waterpompen en communicatie; transportverstoring verhindert reparatietoegang."
        }
      },
      {
        question: {
          en: "What is the concept of 'acceptable risk' in volcanic hazard management?",
          es: "¿Cuál es el concepto de 'riesgo aceptable' en la gestión de peligros volcánicos?",
          de: "Was ist das Konzept des 'akzeptablen Risikos' im vulkanischen Gefahrenmanagement?",
          nl: "Wat is het concept van 'acceptabel risico' in vulkanisch gevarenbeheer?"
        },
        options: [
          { en: "The level of risk society tolerates balanced against benefits of living near volcanoes", es: "El nivel de riesgo que la sociedad tolera equilibrado contra beneficios de vivir cerca de volcanes", de: "Das Risikoniveau, das die Gesellschaft toleriert, ausbalanciert gegen Vorteile des Lebens nahe Vulkanen", nl: "Het risiconiveau dat de samenleving tolereert gebalanceerd tegen voordelen van wonen nabij vulkanen" },
          { en: "Zero risk tolerance", es: "Tolerancia cero al riesgo", de: "Null-Risiko-Toleranz", nl: "Nul risicotolerantie" },
          { en: "Maximum possible risk", es: "Máximo riesgo posible", de: "Maximal mögliches Risiko", nl: "Maximaal mogelijk risico" },
          { en: "Risk that scientists accept", es: "Riesgo que los científicos aceptan", de: "Risiko, das Wissenschaftler akzeptieren", nl: "Risico dat wetenschappers accepteren" }
        ],
        correct: 0,
        explanation: {
          en: "Acceptable risk reflects the risk level communities and authorities are willing to tolerate, considering economic benefits (fertile soils, tourism, geothermal energy), cultural attachment to place, cost of risk reduction measures, and competing priorities. It varies between societies and influences land-use planning and investment in mitigation.",
          es: "El riesgo aceptable refleja el nivel de riesgo que las comunidades y autoridades están dispuestas a tolerar, considerando beneficios económicos (suelos fértiles, turismo, energía geotérmica), apego cultural al lugar, costo de medidas de reducción de riesgo y prioridades competitivas.",
          de: "Akzeptables Risiko spiegelt das Risikoniveau wider, das Gemeinschaften und Behörden zu tolerieren bereit sind, unter Berücksichtigung wirtschaftlicher Vorteile (fruchtbare Böden, Tourismus, geothermische Energie), kultureller Bindung an den Ort und Kosten von Risikominderungsmaßnahmen.",
          nl: "Acceptabel risico weerspiegelt het risiconiveau dat gemeenschappen en autoriteiten bereid zijn te tolereren, overwegend economische voordelen (vruchtbare bodems, toerisme, geothermische energie), culturele binding aan plaats, kosten van risicoreductiemaatregelen."
        }
      },
      {
        question: {
          en: "How do pyroclastic density currents interact with water bodies?",
          es: "¿Cómo interactúan las corrientes de densidad piroclástica con cuerpos de agua?",
          de: "Wie interagieren pyroklastische Dichteströme mit Wasserkörpern?",
          nl: "Hoe interageren pyroclastische dichtheidsstromen met waterlichamen?"
        },
        options: [
          { en: "Can travel over water surfaces, generate tsunamis, and cause explosive steam generation", es: "Pueden viajar sobre superficies de agua, generar tsunamis y causar generación explosiva de vapor", de: "Können über Wasseroberflächen reisen, Tsunamis erzeugen und explosive Dampferzeugung verursachen", nl: "Kunnen over wateroppervlakken reizen, tsunami's genereren en explosieve stoomgeneratie veroorzaken" },
          { en: "Always stop at water edges", es: "Siempre se detienen en bordes de agua", de: "Stoppen immer an Wasserkanten", nl: "Stoppen altijd bij waterranden" },
          { en: "Have no interaction with water", es: "No tienen interacción con agua", de: "Haben keine Interaktion mit Wasser", nl: "Hebben geen interactie met water" },
          { en: "Only cool down slightly", es: "Solo se enfrían ligeramente", de: "Kühlen nur leicht ab", nl: "Koelen alleen licht af" }
        ],
        correct: 0,
        explanation: {
          en: "PDCs can travel across water bodies on a cushion of steam, maintaining lethal temperatures and velocities. They generate tsunamis through displacement, trigger phreatomagmatic explosions, and create extensive steam clouds. Historical examples include Krakatau 1883 PDCs crossing the Sunda Strait, devastating coastal areas 40km away.",
          es: "Las CDP pueden viajar a través de cuerpos de agua sobre un colchón de vapor, manteniendo temperaturas y velocidades letales. Generan tsunamis por desplazamiento, desencadenan explosiones freatomagmáticas y crean extensas nubes de vapor. Ejemplos históricos incluyen CDP de Krakatau 1883.",
          de: "PDCs können auf einem Dampfkissen über Wasserkörper reisen und dabei tödliche Temperaturen und Geschwindigkeiten beibehalten. Sie erzeugen Tsunamis durch Verdrängung, lösen phreatomagmatische Explosionen aus und erzeugen ausgedehnte Dampfwolken.",
          nl: "PDCs kunnen over waterlichamen reizen op een stoomkussen, dodelijke temperaturen en snelheden behoudend. Ze genereren tsunami's door verplaatsing, triggeren freatomagmatische explosies en creëren uitgebreide stoomwolken."
        }
      },
      {
        question: {
          en: "What is the purpose of probabilistic volcanic hazard assessment (PVHA)?",
          es: "¿Cuál es el propósito de la evaluación probabilística de peligros volcánicos (PVHA)?",
          de: "Was ist der Zweck der probabilistischen vulkanischen Gefahrenbewertung (PVHA)?",
          nl: "Wat is het doel van probabilistische vulkanische gevarenbeoordeling (PVHA)?"
        },
        options: [
          { en: "Quantify likelihood of hazardous events over specified time periods for risk-based decisions", es: "Cuantificar probabilidad de eventos peligrosos sobre períodos específicos para decisiones basadas en riesgo", de: "Wahrscheinlichkeit gefährlicher Ereignisse über bestimmte Zeiträume für risikobasierte Entscheidungen quantifizieren", nl: "Kwantificeren waarschijnlijkheid van gevaarlijke gebeurtenissen over specifieke tijdsperioden voor risico-gebaseerde beslissingen" },
          { en: "Predict exact eruption dates", es: "Predecir fechas exactas de erupción", de: "Genaue Eruptionsdaten vorhersagen", nl: "Exacte uitbarstingsdata voorspellen" },
          { en: "Eliminate all uncertainty", es: "Eliminar toda incertidumbre", de: "Alle Unsicherheit eliminieren", nl: "Alle onzekerheid elimineren" },
          { en: "Replace monitoring systems", es: "Reemplazar sistemas de monitoreo", de: "Überwachungssysteme ersetzen", nl: "Monitoringsystemen vervangen" }
        ],
        correct: 0,
        explanation: {
          en: "PVHA integrates geological data, eruption records, and statistical models to estimate probabilities of different hazard scenarios over various time frames (1, 10, 100 years). It provides quantitative risk metrics for land-use planning, building codes, insurance, and investment decisions while explicitly accounting for uncertainties.",
          es: "PVHA integra datos geológicos, registros de erupciones y modelos estadísticos para estimar probabilidades de diferentes escenarios de peligro sobre varios marcos temporales. Proporciona métricas de riesgo cuantitativas para planificación del uso del suelo, códigos de construcción y decisiones de inversión.",
          de: "PVHA integriert geologische Daten, Eruptionsaufzeichnungen und statistische Modelle zur Schätzung von Wahrscheinlichkeiten verschiedener Gefahrenszenarien über verschiedene Zeitrahmen. Es liefert quantitative Risikometriken für Landnutzungsplanung und Bauvorschriften.",
          nl: "PVHA integreert geologische data, uitbarstingsrecords en statistische modellen om waarschijnlijkheden van verschillende gevaarscenario's over verschillende tijdsframes te schatten. Het biedt kwantitatieve risicometrieken voor landgebruiksplanning en bouwcodes."
        }
      },
      {
        question: {
          en: "What distinguishes 'proximal' from 'distal' volcanic hazards?",
          es: "¿Qué distingue los peligros volcánicos 'proximales' de los 'distales'?",
          de: "Was unterscheidet 'proximale' von 'distalen' vulkanischen Gefahren?",
          nl: "Wat onderscheidt 'proximale' van 'distale' vulkanische gevaren?"
        },
        options: [
          { en: "Proximal hazards affect areas <30km from vent; distal hazards extend hundreds of kilometers", es: "Peligros proximales afectan áreas <30km del conducto; peligros distales se extienden cientos de kilómetros", de: "Proximale Gefahren betreffen Gebiete <30km vom Schlot; distale Gefahren erstrecken sich über hunderte Kilometer", nl: "Proximale gevaren treffen gebieden <30km van opening; distale gevaren strekken honderden kilometers" },
          { en: "They are identical in extent", es: "Son idénticos en extensión", de: "Sie sind identisch in der Ausdehnung", nl: "Ze zijn identiek in omvang" },
          { en: "Proximal means underwater", es: "Proximal significa bajo el agua", de: "Proximal bedeutet unter Wasser", nl: "Proximaal betekent onderwater" },
          { en: "Distal only refers to ash", es: "Distal solo se refiere a ceniza", de: "Distal bezieht sich nur auf Asche", nl: "Distaal verwijst alleen naar as" }
        ],
        correct: 0,
        explanation: {
          en: "Proximal hazards (PDCs, ballistics, lava flows, debris avalanches) primarily threaten areas within ~30km of vents with little warning time. Distal hazards (tephra fall, lahars, gas dispersal) can affect regions hundreds to thousands of kilometers away, allowing more preparation time but affecting larger populations and areas.",
          es: "Los peligros proximales (CDP, balísticos, flujos de lava, avalanchas de escombros) amenazan principalmente áreas dentro de ~30km de conductos con poco tiempo de advertencia. Los peligros distales (caída de tefra, lahares, dispersión de gas) pueden afectar regiones a cientos de kilómetros.",
          de: "Proximale Gefahren (PDCs, Ballistik, Lavaströme, Schuttlawinen) bedrohen hauptsächlich Gebiete innerhalb von ~30km von Schloten mit wenig Warnzeit. Distale Gefahren (Tephrafall, Lahare, Gasausbreitung) können Regionen hunderte Kilometer entfernt betreffen.",
          nl: "Proximale gevaren (PDCs, ballistieken, lavastromen, puinlawines) bedreigen vooral gebieden binnen ~30km van openingen met weinig waarschuwingstijd. Distale gevaren (tefra-val, lahars, gasverspreiding) kunnen regio's honderden kilometers treffen."
        }
      },
      {
        question: {
          en: "What role do early warning systems play in volcanic risk reduction?",
          es: "¿Qué papel juegan los sistemas de alerta temprana en la reducción del riesgo volcánico?",
          de: "Welche Rolle spielen Frühwarnungssysteme bei der vulkanischen Risikominderung?",
          nl: "Welke rol spelen vroege waarschuwingssystemen in vulkanische risicoreductie?"
        },
        options: [
          { en: "Provide timely information to enable protective actions and evacuation decisions", es: "Proporcionan información oportuna para permitir acciones protectoras y decisiones de evacuación", de: "Liefern rechtzeitige Informationen zur Ermöglichung von Schutzmaßnahmen und Evakuierungsentscheidungen", nl: "Bieden tijdige informatie om beschermende acties en evacuatiebeslissingen mogelijk te maken" },
          { en: "Prevent all volcanic eruptions", es: "Previenen todas las erupciones volcánicas", de: "Verhindern alle vulkanischen Eruptionen", nl: "Voorkomen alle vulkanische uitbarstingen" },
          { en: "Only work for large eruptions", es: "Solo funcionan para erupciones grandes", de: "Funktionieren nur bei großen Eruptionen", nl: "Werken alleen voor grote uitbarstingen" },
          { en: "Replace evacuation planning", es: "Reemplazan la planificación de evacuación", de: "Ersetzen Evakuierungsplanung", nl: "Vervangen evacuatieplanning" }
        ],
        correct: 0,
        explanation: {
          en: "Early warning systems integrate monitoring data to detect precursory changes and issue alerts that trigger predetermined response actions. They provide crucial lead time for evacuation, resource mobilization, and protective measures, potentially saving thousands of lives and reducing economic losses from volcanic disasters.",
          es: "Los sistemas de alerta temprana integran datos de monitoreo para detectar cambios precursores y emitir alertas que activen acciones de respuesta predeterminadas. Proporcionan tiempo crucial para evacuación, movilización de recursos y medidas protectoras, potencialmente salvando miles de vidas.",
          de: "Frühwarnungssysteme integrieren Überwachungsdaten zur Erkennung von Vorläuferveränderungen und geben Warnungen aus, die vorbestimmte Reaktionsmaßnahmen auslösen. Sie bieten entscheidende Vorlaufzeit für Evakuierung, Ressourcenmobilisierung und Schutzmaßnahmen.",
          nl: "Vroege waarschuwingssystemen integreren monitoringdata om precursorveranderingen te detecteren en waarschuwingen uit te geven die vooraf bepaalde responsacties triggeren. Ze bieden cruciale voorbereidingstijd voor evacuatie, resourcemobilisatie en beschermende maatregelen."
        }
      },
      {
        question: {
          en: "How do volcanic explosivity and effusivity affect hazard patterns?",
          es: "¿Cómo afectan la explosividad volcánica y efusividad los patrones de peligro?",
          de: "Wie beeinflussen vulkanische Explosivität und Effusivität Gefahrenmuster?",
          nl: "Hoe beïnvloeden vulkanische explosiviteit en effusiviteit gevaarpatronen?"
        },
        options: [
          { en: "Explosive eruptions create widespread ash hazards; effusive eruptions produce localized lava flow hazards", es: "Erupciones explosivas crean peligros de ceniza extendidos; erupciones efusivas producen peligros localizados de flujo de lava", de: "Explosive Eruptionen erzeugen weitverbreitete Aschegefahren; effusive Eruptionen produzieren lokalisierte Lavaflussgefahren", nl: "Explosieve uitbarstingen creëren wijdverspreide asgevaren; effusieve uitbarstingen produceren gelokaliseerde lavastroomgevaren" },
          { en: "Both types create identical hazard patterns", es: "Ambos tipos crean patrones de peligro idénticos", de: "Beide Typen erzeugen identische Gefahrenmuster", nl: "Beide types creëren identieke gevaarpatronen" },
          { en: "Effusive eruptions are always more dangerous", es: "Las erupciones efusivas son siempre más peligrosas", de: "Effusive Eruptionen sind immer gefährlicher", nl: "Effusieve uitbarstingen zijn altijd gevaarlijker" },
          { en: "Hazard patterns are independent of eruption style", es: "Los patrones de peligro son independientes del estilo de erupción", de: "Gefahrenmuster sind unabhängig vom Eruptionsstil", nl: "Gevaarpatronen zijn onafhankelijk van uitbarstingsstijl" }
        ],
        correct: 0,
        explanation: {
          en: "Eruption style fundamentally controls hazard distribution. Explosive eruptions generate widespread ash fall, pyroclastic flows, and ballistic projectiles affecting large areas. Effusive eruptions primarily produce lava flows that follow topographic lows, creating more predictable but persistent hazards in specific drainage systems.",
          es: "El estilo de erupción controla fundamentalmente la distribución de peligros. Las erupciones explosivas generan caída de ceniza extendida, flujos piroclásticos y proyectiles balísticos afectando áreas grandes. Las erupciones efusivas producen principalmente flujos de lava que siguen depresiones topográficas.",
          de: "Der Eruptionsstil kontrolliert grundlegend die Gefahrenverteilung. Explosive Eruptionen erzeugen weitverbreiteten Aschefall, pyroklastische Ströme und ballistische Projektile, die große Gebiete betreffen. Effusive Eruptionen produzieren hauptsächlich Lavaströme, die topographischen Senken folgen.",
          nl: "Uitbarstingsstijl controleert fundamenteel gevaarverdeling. Explosieve uitbarstingen genereren wijdverspreide asval, pyroclastische stromen en ballistische projectielen die grote gebieden treffen. Effusieve uitbarstingen produceren vooral lavastromen die topografische laagte volgen."
        }
      },
      {
        question: {
          en: "What is the importance of temporal probability in volcanic hazard forecasting?",
          es: "¿Cuál es la importancia de la probabilidad temporal en el pronóstico de peligros volcánicos?",
          de: "Was ist die Bedeutung der zeitlichen Wahrscheinlichkeit in der vulkanischen Gefahrenvorhersage?",
          nl: "Wat is het belang van temporele waarschijnlijkheid in vulkanische gevaarvoorspelling?"
        },
        options: [
          { en: "Estimates likelihood of eruption within specific time windows for planning and preparedness", es: "Estima probabilidad de erupción dentro de ventanas de tiempo específicas para planificación y preparación", de: "Schätzt Wahrscheinlichkeit einer Eruption innerhalb spezifischer Zeitfenster für Planung und Vorbereitung", nl: "Schat waarschijnlijkheid van uitbarsting binnen specifieke tijdvensters voor planning en paraatheid" },
          { en: "Provides exact eruption dates", es: "Proporciona fechas exactas de erupción", de: "Liefert genaue Eruptionsdaten", nl: "Biedt exacte uitbarstingsdata" },
          { en: "Only applies to dormant volcanoes", es: "Solo se aplica a volcanes dormidos", de: "Gilt nur für ruhende Vulkane", nl: "Geldt alleen voor slapende vulkanen" },
          { en: "Is irrelevant for emergency management", es: "Es irrelevante para manejo de emergencias", de: "Ist irrelevant für Notfallmanagement", nl: "Is irrelevant voor noodmanagement" }
        ],
        correct: 0,
        explanation: {
          en: "Temporal probability quantifies the likelihood of eruption occurring within specific timeframes (days, months, years), enabling risk-informed decision making. It helps authorities balance preparedness costs against eruption likelihood, optimize resource allocation, and communicate uncertainty to stakeholders effectively.",
          es: "La probabilidad temporal cuantifica la probabilidad de que ocurra erupción dentro de marcos temporales específicos, permitiendo toma de decisiones informada por riesgo. Ayuda a autoridades a equilibrar costos de preparación contra probabilidad de erupción, optimizar asignación de recursos.",
          de: "Zeitliche Wahrscheinlichkeit quantifiziert die Wahrscheinlichkeit des Auftretens einer Eruption innerhalb spezifischer Zeitrahmen und ermöglicht risikoinformierte Entscheidungsfindung. Sie hilft Behörden, Vorbereitungskosten gegen Eruptionswahrscheinlichkeit abzuwägen.",
          nl: "Temporele waarschijnlijkheid kwantificeert de kans op uitbarsting binnen specifieke tijdsframes, waardoor risico-geïnformeerde besluitvorming mogelijk wordt. Het helpt autoriteiten paraadheidkosten af te wegen tegen uitbarstingskans en resourceallocatie te optimaliseren."
        }
      },
      {
        question: {
          en: "How do building codes incorporate volcanic hazard considerations?",
          es: "¿Cómo los códigos de construcción incorporan consideraciones de peligros volcánicos?",
          de: "Wie integrieren Bauvorschriften Betrachtungen vulkanischer Gefahren?",
          nl: "Hoe integreren bouwcodes vulkanische gevaaroverwegingen?"
        },
        options: [
          { en: "Specify ash loading requirements, building materials, and structural designs for volcanic environments", es: "Especifican requisitos de carga de ceniza, materiales de construcción y diseños estructurales para ambientes volcánicos", de: "Spezifizieren Aschebelastungsanforderungen, Baumaterialien und Strukturdesigns für vulkanische Umgebungen", nl: "Specificeren asbelastingsvereisten, bouwmaterialen en structurele ontwerpen voor vulkanische omgevingen" },
          { en: "Prohibit all construction near volcanoes", es: "Prohíben toda construcción cerca de volcanes", de: "Verbieten allen Bau in der Nähe von Vulkanen", nl: "Verbieden alle constructie nabij vulkanen" },
          { en: "Only address earthquake risks", es: "Solo abordan riesgos de terremotos", de: "Behandeln nur Erdbebenrisiken", nl: "Behandelen alleen aardbevingsrisico's" },
          { en: "Are identical worldwide", es: "Son idénticos en todo el mundo", de: "Sind weltweit identisch", nl: "Zijn wereldwijd identiek" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic building codes address specific hazards like ash loading on roofs, corrosion-resistant materials for acidic environments, HVAC filtration systems, and structural designs to withstand ground motion. They vary by volcanic setting and local hazard assessments, balancing safety with economic considerations.",
          es: "Los códigos de construcción volcánicos abordan peligros específicos como carga de ceniza en techos, materiales resistentes a corrosión para ambientes ácidos, sistemas de filtración HVAC y diseños estructurales para resistir movimiento del suelo.",
          de: "Vulkanische Bauvorschriften behandeln spezifische Gefahren wie Aschebelastung auf Dächern, korrosionsbeständige Materialien für saure Umgebungen, HVAC-Filtrationssysteme und Strukturdesigns zur Widerstandsfähigkeit gegen Bodenbewegung.",
          nl: "Vulkanische bouwcodes behandelen specifieke gevaren zoals asbelasting op daken, corrosiebestendige materialen voor zure omgevingen, HVAC-filtratiesystemen en structurele ontwerpen om grondbeweging te weerstaan."
        }
      },
      {
        question: {
          en: "What challenges exist in volcanic hazard communication to diverse communities?",
          es: "¿Qué desafíos existen en la comunicación de peligros volcánicos a comunidades diversas?",
          de: "Welche Herausforderungen bestehen bei der Kommunikation vulkanischer Gefahren an diverse Gemeinschaften?",
          nl: "Welke uitdagingen bestaan in vulkanische gevaarcommunicatie naar diverse gemeenschappen?"
        },
        options: [
          { en: "Language barriers, cultural beliefs, literacy levels, and varying risk perceptions", es: "Barreras de idioma, creencias culturales, niveles de alfabetización y percepciones de riesgo variables", de: "Sprachbarrieren, kulturelle Überzeugungen, Alphabetisierungsgrade und unterschiedliche Risikowahrnehmungen", nl: "Taalbarrières, culturele overtuigingen, geletterdheidsgraden en variërende risicopercepties" },
          { en: "Only technical complexity", es: "Solo complejidad técnica", de: "Nur technische Komplexität", nl: "Alleen technische complexiteit" },
          { en: "Lack of scientific knowledge", es: "Falta de conocimiento científico", de: "Mangel an wissenschaftlichem Wissen", nl: "Gebrek aan wetenschappelijke kennis" },
          { en: "Communication is always effective", es: "La comunicación es siempre efectiva", de: "Kommunikation ist immer effektiv", nl: "Communicatie is altijd effectief" }
        ],
        correct: 0,
        explanation: {
          en: "Effective volcanic hazard communication must overcome multiple barriers: translating complex scientific concepts into accessible language, respecting cultural worldviews about volcanoes, accommodating varying education levels, addressing different risk tolerances, and building trust across social and economic divides.",
          es: "La comunicación efectiva de peligros volcánicos debe superar múltiples barreras: traducir conceptos científicos complejos a lenguaje accesible, respetar visiones culturales sobre volcanes, acomodar niveles de educación variables, abordar diferentes tolerancias al riesgo.",
          de: "Effektive vulkanische Gefahrenkommunikation muss mehrere Barrieren überwinden: komplexe wissenschaftliche Konzepte in zugängliche Sprache übersetzen, kulturelle Weltanschauungen über Vulkane respektieren, unterschiedliche Bildungsniveaus berücksichtigen.",
          nl: "Effectieve vulkanische gevaarcommunicatie moet meerdere barrières overwinnen: complexe wetenschappelijke concepten vertalen naar toegankelijke taal, culturele wereldbeelden over vulkanen respecteren, verschillende onderwijsniveaus accommoderen."
        }
      },
      {
        question: {
          en: "How do insurance and financial instruments support volcanic risk management?",
          es: "¿Cómo apoyan los seguros e instrumentos financieros la gestión del riesgo volcánico?",
          de: "Wie unterstützen Versicherungen und Finanzinstrumente das vulkanische Risikomanagement?",
          nl: "Hoe ondersteunen verzekeringen en financiële instrumenten vulkanisch risicomanagement?"
        },
        options: [
          { en: "Transfer financial risk, incentivize risk reduction, and provide post-disaster recovery funding", es: "Transfieren riesgo financiero, incentivan reducción de riesgo y proporcionan financiamiento de recuperación post-desastre", de: "Übertragen finanzielles Risiko, incentivieren Risikominderung und bieten Finanzierung für Wiederherstellung nach Katastrophen", nl: "Dragen financiële risico's over, stimuleren risicoreductie en bieden financiering voor post-ramp herstel" },
          { en: "Prevent all volcanic damage", es: "Previenen todo daño volcánico", de: "Verhindern alle vulkanischen Schäden", nl: "Voorkomen alle vulkanische schade" },
          { en: "Only benefit insurance companies", es: "Solo benefician a compañías de seguros", de: "Nutzen nur Versicherungsunternehmen", nl: "Profiteren alleen verzekeringsmaatschappijen" },
          { en: "Have no role in disaster management", es: "No tienen papel en manejo de desastres", de: "Haben keine Rolle im Katastrophenmanagement", nl: "Hebben geen rol in rampmanagement" }
        ],
        correct: 0,
        explanation: {
          en: "Financial instruments spread volcanic risk across broader populations, reduce individual financial exposure, and create incentives for risk reduction through premium structures. Catastrophe bonds, parametric insurance, and government disaster funds help communities recover faster while encouraging hazard mitigation investments.",
          es: "Los instrumentos financieros distribuyen el riesgo volcánico a través de poblaciones más amplias, reducen la exposición financiera individual y crean incentivos para reducción de riesgo mediante estructuras de primas. Bonos de catástrofe, seguros paramétricos y fondos de desastre gubernamentales.",
          de: "Finanzinstrumente verteilen vulkanisches Risiko über breitere Bevölkerungsgruppen, reduzieren individuelle finanzielle Exposition und schaffen Anreize für Risikominderung durch Prämienstrukturen. Katastrophenanleihen, parametrische Versicherungen und staatliche Katastrophenfonds.",
          nl: "Financiële instrumenten spreiden vulkanisch risico over bredere populaties, verminderen individuele financiële blootstelling en creëren prikkels voor risicoreductie door premiestructuren. Catastrofe-obligaties, parametrische verzekeringen en overheidsrampfondsen."
        }
      },
      {
        question: {
          en: "What is the role of international cooperation in volcanic hazard management?",
          es: "¿Cuál es el papel de la cooperación internacional en la gestión de peligros volcánicos?",
          de: "Was ist die Rolle internationaler Zusammenarbeit im vulkanischen Gefahrenmanagement?",
          nl: "Wat is de rol van internationale samenwerking in vulkanisch gevarenbeheer?"
        },
        options: [
          { en: "Facilitates data sharing, technology transfer, capacity building, and coordinated monitoring across borders", es: "Facilita intercambio de datos, transferencia de tecnología, construcción de capacidades y monitoreo coordinado a través de fronteras", de: "Erleichtert Datenaustausch, Technologietransfer, Kapazitätsaufbau und koordinierte Überwachung über Grenzen hinweg", nl: "Faciliteert data-uitwisseling, technologieoverdracht, capaciteitsopbouw en gecoordineerde monitoring over grenzen" },
          { en: "Creates barriers to information sharing", es: "Crea barreras para el intercambio de información", de: "Schafft Barrieren für den Informationsaustausch", nl: "Creëert barrières voor informatie-uitwisseling" },
          { en: "Is only useful for oceanic volcanoes", es: "Solo es útil para volcanes oceánicos", de: "Ist nur für ozeanische Vulkane nützlich", nl: "Is alleen nuttig voor oceanische vulkanen" },
          { en: "Reduces local autonomy in decision making", es: "Reduce la autonomía local en la toma de decisiones", de: "Reduziert lokale Autonomie bei der Entscheidungsfindung", nl: "Vermindert lokale autonomie in besluitvorming" }
        ],
        correct: 0,
        explanation: {
          en: "International cooperation enhances volcanic risk management through shared expertise, standardized monitoring protocols, joint research initiatives, and rapid information exchange during crises. Organizations like IAVCEI, USGS/VDAP, and regional volcanic observatories coordinate efforts to improve global volcanic hazard preparedness.",
          es: "La cooperación internacional mejora la gestión del riesgo volcánico a través de experiencia compartida, protocolos de monitoreo estandarizados, iniciativas de investigación conjunta e intercambio rápido de información durante crisis. Organizaciones como IAVCEI, USGS/VDAP y observatorios volcánicos regionales.",
          de: "Internationale Zusammenarbeit verbessert das vulkanische Risikomanagement durch geteilte Expertise, standardisierte Überwachungsprotokolle, gemeinsame Forschungsinitiativen und schnellen Informationsaustausch während Krisen. Organisationen wie IAVCEI, USGS/VDAP und regionale Vulkanobservatorien.",
          nl: "Internationale samenwerking verbetert vulkanisch risicomanagement door gedeelde expertise, gestandaardiseerde monitoringprotocollen, gezamenlijke onderzoeksinitiatieven en snelle informatie-uitwisseling tijdens crises. Organisaties zoals IAVCEI, USGS/VDAP en regionale vulkaanobservatoria."
        }
      },
      {
        question: {
          en: "How do volcanic hazard mitigation strategies evolve with advancing technology?",
          es: "¿Cómo evolucionan las estrategias de mitigación de peligros volcánicos con el avance de la tecnología?",
          de: "Wie entwickeln sich vulkanische Gefahrenminderungsstrategien mit fortschreitender Technologie?",
          nl: "Hoe evolueren vulkanische gevaar mitigatie strategieën met voortschrijdende technologie?"
        },
        options: [
          { en: "Enable real-time monitoring, improved forecasting models, and enhanced communication systems for better preparedness", es: "Permiten monitoreo en tiempo real, modelos de pronóstico mejorados y sistemas de comunicación mejorados para mejor preparación", de: "Ermöglichen Echtzeitüberwachung, verbesserte Vorhersagemodelle und erweiterte Kommunikationssysteme für bessere Vorbereitung", nl: "Maken real-time monitoring, verbeterde voorspellingsmodellen en verbeterde communicatiesystemen mogelijk voor betere paraatheid" },
          { en: "Replace all traditional monitoring methods", es: "Reemplazan todos los métodos de monitoreo tradicionales", de: "Ersetzen alle traditionellen Überwachungsmethoden", nl: "Vervangen alle traditionele monitoringmethoden" },
          { en: "Make volcanoes completely predictable", es: "Hacen que los volcanes sean completamente predecibles", de: "Machen Vulkane vollständig vorhersagbar", nl: "Maken vulkanen volledig voorspelbaar" },
          { en: "Eliminate all volcanic risks", es: "Eliminan todos los riesgos volcánicos", de: "Eliminieren alle vulkanischen Risiken", nl: "Elimineren alle vulkanische risico's" }
        ],
        correct: 0,
        explanation: {
          en: "Technological advances continuously improve volcanic hazard mitigation through satellite monitoring, machine learning for pattern recognition, drone-based sampling, improved sensor networks, and mobile communication systems. These innovations enhance our ability to detect precursors, model hazard scenarios, and disseminate warnings effectively.",
          es: "Los avances tecnológicos mejoran continuamente la mitigación de peligros volcánicos a través de monitoreo satelital, aprendizaje automático para reconocimiento de patrones, muestreo basado en drones, redes de sensores mejoradas y sistemas de comunicación móvil.",
          de: "Technologische Fortschritte verbessern kontinuierlich die vulkanische Gefahrenminderung durch Satellitenüberwachung, maschinelles Lernen für Mustererkennung, drohnenbasierte Probenahme, verbesserte Sensornetzwerke und mobile Kommunikationssysteme.",
          nl: "Technologische vooruitgang verbetert continu vulkanische gevaarmtigatie door satellietmonitoring, machine learning voor patroonherkenning, drone-gebaseerde bemonstering, verbeterde sensornetwerken en mobiele communicatiesystemen."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mind-bender/volcanology', level3);
  }
})();
