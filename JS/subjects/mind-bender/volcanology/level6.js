// Volcanology - Level 6: Volcanic Monitoring and Hazard Assessment
window.addLevel('mind-bender/volcanology', {
  name: { 
    en: 'Volcanic Monitoring & Hazard Assessment', 
    es: 'Monitoreo Volcánico y Evaluación de Riesgos', 
    de: 'Vulkanüberwachung & Gefährdungsbeurteilung', 
    nl: 'Vulkanische Monitoring & Risicoanalyse' 
  },
  questions: [
    {
      question: {
        en: "Which seismic wave pattern is most characteristic of imminent volcanic eruptions?",
        es: "¿Qué patrón de ondas sísmicas es más característico de erupciones volcánicas inminentes?",
        de: "Welches seismische Wellenmuster ist am charakteristischsten für bevorstehende Vulkanausbrüche?",
        nl: "Welk seismisch golfpatroon is het meest kenmerkend voor dreigende vulkaan uitbarstingen?"
      },
      options: [
        { en: "Volcanic tremor and earthquake swarms", es: "Tremor volcánico y enjambres sísmicos", de: "Vulkanisches Beben und Erdbebenschwärme", nl: "Vulkanische tremor en aardbevingszwermen" },
        { en: "Deep tectonic earthquakes", es: "Terremotos tectónicos profundos", de: "Tiefe tektonische Erdbeben", nl: "Diepe tektonische aardbevingen" },
        { en: "Surface wave propagation", es: "Propagación de ondas superficiales", de: "Oberflächenwellenausbreitung", nl: "Oppervlaktegolfvoortplanting" },
        { en: "Regional seismic silence", es: "Silencio sísmico regional", de: "Regionale seismische Stille", nl: "Regionale seismische stilte" }
      ],
      correct: 0,
      explanation: {
        en: "Volcanic tremor (continuous low-frequency shaking) and earthquake swarms (clusters of small earthquakes) are the most reliable seismic indicators of rising magma and imminent eruption.",
        es: "El tremor volcánico (sacudida continua de baja frecuencia) y los enjambres sísmicos (grupos de pequeños terremotos) son los indicadores sísmicos más confiables de magma ascendente y erupción inminente.",
        de: "Vulkanisches Beben (kontinuierliches niederfrequentes Zittern) und Erdbebenschwärme (Cluster kleiner Erdbeben) sind die zuverlässigsten seismischen Indikatoren für aufsteigendes Magma und bevorstehende Eruptionen.",
        nl: "Vulkanische tremor (continue laagfrequente trillingen) en aardbevingszwermen (clusters van kleine aardbevingen) zijn de meest betrouwbare seismische indicatoren van stijgend magma en dreigende uitbarsting."
      }
    },
    {
      question: {
        en: "What is the primary purpose of measuring ground deformation around active volcanoes?",
        es: "¿Cuál es el propósito principal de medir la deformación del suelo alrededor de volcanes activos?",
        de: "Was ist der Hauptzweck der Messung von Bodenverformungen um aktive Vulkane?",
        nl: "Wat is het primaire doel van het meten van gronddeformatie rond actieve vulkanen?"
      },
      options: [
        { en: "Detect magma chamber inflation and intrusion", es: "Detectar inflación e intrusión de cámara magmática", de: "Magmakammer-Inflation und Intrusion erkennen", nl: "Magmakamer opzwelling en intrusie detecteren" },
        { en: "Measure volcanic gas emissions", es: "Medir emisiones de gases volcánicos", de: "Vulkanische Gasemissionen messen", nl: "Vulkanische gasemissies meten" },
        { en: "Monitor lava flow temperatures", es: "Monitorear temperaturas de flujos de lava", de: "Lavafluss-Temperaturen überwachen", nl: "Lavastroomtemperaturen monitoren" },
        { en: "Track ash cloud movement", es: "Rastrear movimiento de nubes de ceniza", de: "Aschewolkenbewegung verfolgen", nl: "Aswolkbeweging volgen" }
      ],
      correct: 0,
      explanation: {
        en: "Ground deformation measurements using GPS and InSAR detect the swelling of volcanic edifices caused by rising magma, providing critical early warning of potential eruptions.",
        es: "Las mediciones de deformación del suelo usando GPS e InSAR detectan el hinchamiento de edificios volcánicos causado por magma ascendente, proporcionando alerta temprana crítica de posibles erupciones.",
        de: "Bodenverformungsmessungen mit GPS und InSAR erkennen die Schwellung vulkanischer Strukturen durch aufsteigendes Magma und liefern kritische Frühwarnungen vor möglichen Eruptionen.",
        nl: "Gronddeformatiemetingen met GPS en InSAR detecteren de zwelling van vulkanische structuren veroorzaakt door stijgend magma, wat cruciale vroege waarschuwing biedt voor mogelijke uitbarstingen."
      }
    },
    {
      question: {
        en: "Which volcanic gas ratio is most useful for monitoring changes in magma composition?",
        es: "¿Qué proporción de gases volcánicos es más útil para monitorear cambios en la composición del magma?",
        de: "Welches vulkanische Gasverhältnis ist am nützlichsten zur Überwachung von Änderungen der Magmazusammensetzung?",
        nl: "Welke vulkanische gasverhouding is het meest nuttig voor het monitoren van veranderingen in magmasamenstelling?"
      },
      options: [
        { en: "SO2/H2S ratio", es: "Proporción SO2/H2S", de: "SO2/H2S-Verhältnis", nl: "SO2/H2S verhouding" },
        { en: "CO2/H2O ratio", es: "Proporción CO2/H2O", de: "CO2/H2O-Verhältnis", nl: "CO2/H2O verhouding" },
        { en: "N2/Ar ratio", es: "Proporción N2/Ar", de: "N2/Ar-Verhältnis", nl: "N2/Ar verhouding" },
        { en: "CH4/H2 ratio", es: "Proporción CH4/H2", de: "CH4/H2-Verhältnis", nl: "CH4/H2 verhouding" }
      ],
      correct: 0,
      explanation: {
        en: "The SO2/H2S ratio reflects the oxidation state and temperature of magma - higher ratios indicate hotter, more oxidized conditions often associated with more explosive potential.",
        es: "La proporción SO2/H2S refleja el estado de oxidación y temperatura del magma - proporciones más altas indican condiciones más calientes y oxidadas frecuentemente asociadas con mayor potencial explosivo.",
        de: "Das SO2/H2S-Verhältnis spiegelt den Oxidationszustand und die Temperatur des Magmas wider - höhere Verhältnisse deuten auf heißere, oxidierte Bedingungen hin, die oft mit explosiverem Potenzial verbunden sind.",
        nl: "De SO2/H2S verhouding weergeeft de oxidatietoestand en temperatuur van magma - hogere verhoudingen duiden op hetere, meer geoxideerde omstandigheden die vaak geassocieerd zijn met explosiever potentieel."
      }
    },
    {
      question: {
        en: "What is the most critical factor in determining volcanic hazard zones around populated areas?",
        es: "¿Cuál es el factor más crítico para determinar zonas de peligro volcánico alrededor de áreas pobladas?",
        de: "Was ist der kritischste Faktor bei der Bestimmung vulkanischer Gefahrenzonen um besiedelte Gebiete?",
        nl: "Wat is de meest kritieke factor bij het bepalen van vulkanische gevarenzones rond bevolkte gebieden?"
      },
      options: [
        { en: "Pyroclastic flow reach and lahar pathways", es: "Alcance de flujos piroclásticos y rutas de lahares", de: "Reichweite pyroklastischer Ströme und Lahar-Pfade", nl: "Pyroclastische stroomreikwijdte en lahar-routes" },
        { en: "Lava flow maximum temperature", es: "Temperatura máxima de flujos de lava", de: "Maximale Lavafluss-Temperatur", nl: "Maximale lavastroomtemperatuur" },
        { en: "Volcanic gas concentration levels", es: "Niveles de concentración de gases volcánicos", de: "Vulkanische Gaskonzentrationsniveaus", nl: "Vulkanische gasconcentratieniveaus" },
        { en: "Seismic wave amplification", es: "Amplificación de ondas sísmicas", de: "Seismische Wellenverstärkung", nl: "Seismische golfversterking" }
      ],
      correct: 0,
      explanation: {
        en: "Pyroclastic flows and lahars pose the greatest threat to human life due to their speed, high temperatures, and ability to travel far from the volcano along valleys and drainage systems.",
        es: "Los flujos piroclásticos y lahares representan la mayor amenaza para la vida humana debido a su velocidad, altas temperaturas y capacidad de viajar lejos del volcán por valles y sistemas de drenaje.",
        de: "Pyroklastische Ströme und Lahars stellen die größte Bedrohung für menschliches Leben dar aufgrund ihrer Geschwindigkeit, hohen Temperaturen und Fähigkeit, weit vom Vulkan entlang von Tälern und Entwässerungssystemen zu reisen.",
        nl: "Pyroclastische stromen en lahars vormen de grootste bedreiging voor mensenlevens vanwege hun snelheid, hoge temperaturen en vermogen om ver van de vulkaan te reizen langs valleien en afwateringssystemen."
      }
    },
    {
      question: {
        en: "Which remote sensing technique provides the most accurate real-time monitoring of volcanic ash clouds?",
        es: "¿Qué técnica de teledetección proporciona el monitoreo en tiempo real más preciso de nubes de ceniza volcánica?",
        de: "Welche Fernerkundungstechnik bietet die genaueste Echtzeit-Überwachung vulkanischer Aschewolken?",
        nl: "Welke remote sensing techniek biedt de meest nauwkeurige real-time monitoring van vulkanische aswolken?"
      },
      options: [
        { en: "Thermal infrared satellite imagery", es: "Imágenes satelitales de infrarrojo térmico", de: "Thermische Infrarot-Satellitenbilder", nl: "Thermische infrarood satellietbeelden" },
        { en: "Visible light photography", es: "Fotografía de luz visible", de: "Sichtlichtfotografie", nl: "Zichtbaar licht fotografie" },
        { en: "Radio wave propagation", es: "Propagación de ondas de radio", de: "Radiowellenausbreitung", nl: "Radiogolfvoortplanting" },
        { en: "Ground-penetrating radar", es: "Radar de penetración terrestre", de: "Bodenradar", nl: "Grond penetrerende radar" }
      ],
      correct: 0,
      explanation: {
        en: "Thermal infrared sensors can detect volcanic ash clouds day and night, regardless of weather conditions, by sensing the temperature contrast between ash and surrounding atmosphere.",
        es: "Los sensores de infrarrojo térmico pueden detectar nubes de ceniza volcánica día y noche, independientemente de las condiciones climáticas, detectando el contraste de temperatura entre ceniza y atmósfera circundante.",
        de: "Thermische Infrarotsensoren können vulkanische Aschewolken Tag und Nacht erkennen, unabhängig von Wetterbedingungen, durch Erfassung des Temperaturkontrasts zwischen Asche und umgebender Atmosphäre.",
        nl: "Thermische infraroodsensoren kunnen vulkanische aswolken dag en nacht detecteren, ongeacht weersomstandigheden, door het temperatuurcontrast tussen as en omringende atmosfeer te meten."
      }
    },
    {
      question: {
        en: "What is the primary advantage of using InSAR (Interferometric Synthetic Aperture Radar) for volcanic monitoring?",
        es: "¿Cuál es la principal ventaja de usar InSAR (Radar de Apertura Sintética Interferométrica) para monitoreo volcánico?",
        de: "Was ist der Hauptvorteil der Verwendung von InSAR (Interferometrisches Synthetic Aperture Radar) für die Vulkanüberwachung?",
        nl: "Wat is het primaire voordeel van het gebruik van InSAR (Interferometrische Synthetische Aperture Radar) voor vulkanische monitoring?"
      },
      options: [
        { en: "Millimeter-scale ground deformation detection", es: "Detección de deformación del suelo a escala milimétrica", de: "Millimeter-genaue Bodenverformungserkennung", nl: "Millimeter-schaal gronddeformatie detectie" },
        { en: "High-resolution temperature measurement", es: "Medición de temperatura de alta resolución", de: "Hochauflösende Temperaturmessung", nl: "Hoge resolutie temperatuurmeting" },
        { en: "Real-time gas composition analysis", es: "Análisis de composición de gases en tiempo real", de: "Echtzeit-Gaszusammensetzungsanalyse", nl: "Real-time gassamenstelling analyse" },
        { en: "Direct magma chamber imaging", es: "Imagen directa de cámara magmática", de: "Direkte Magmakammer-Bildgebung", nl: "Directe magmakamer beeldvorming" }
      ],
      correct: 0,
      explanation: {
        en: "InSAR can detect ground deformation as small as a few millimeters over large areas, making it invaluable for monitoring volcanic inflation/deflation cycles and magma intrusions.",
        es: "InSAR puede detectar deformación del suelo tan pequeña como unos pocos milímetros en grandes áreas, haciéndolo invaluable para monitorear ciclos de inflación/deflación volcánica e intrusiones magmáticas.",
        de: "InSAR kann Bodenverformungen von nur wenigen Millimetern über große Bereiche erkennen, was es unschätzbar für die Überwachung vulkanischer Inflation/Deflation-Zyklen und Magma-Intrusionen macht.",
        nl: "InSAR kan gronddeformatie van slechts enkele millimeters over grote gebieden detecteren, wat het van onschatbare waarde maakt voor het monitoren van vulkanische inflatie/deflatie cycli en magma-intrusies."
      }
    },
    {
      question: {
        en: "Which volcanic monitoring parameter is most effective for short-term eruption forecasting (hours to days)?",
        es: "¿Qué parámetro de monitoreo volcánico es más efectivo para pronósticos de erupción a corto plazo (horas a días)?",
        de: "Welcher vulkanische Überwachungsparameter ist am effektivsten für kurzfristige Eruptionsvorhersagen (Stunden bis Tage)?",
        nl: "Welke vulkanische monitoringparameter is het meest effectief voor korte-termijn uitbarstingsvoorspellingen (uren tot dagen)?"
      },
      options: [
        { en: "Seismic activity increase and migration", es: "Aumento y migración de actividad sísmica", de: "Zunahme und Migration seismischer Aktivität", nl: "Toename en migratie van seismische activiteit" },
        { en: "Long-term ground deformation trends", es: "Tendencias de deformación del suelo a largo plazo", de: "Langfristige Bodenverformungstrends", nl: "Lange-termijn gronddeformatie trends" },
        { en: "Annual gas emission patterns", es: "Patrones anuales de emisión de gases", de: "Jährliche Gasemissionsmuster", nl: "Jaarlijkse gasemissie patronen" },
        { en: "Regional tectonic stress changes", es: "Cambios de estrés tectónico regional", de: "Regionale tektonische Spannungsänderungen", nl: "Regionale tektonische spanningsveranderingen" }
      ],
      correct: 0,
      explanation: {
        en: "Rapid increases in seismic activity, especially when earthquakes migrate upward toward the surface, indicate rising magma and provide the most reliable short-term warning of eruptions.",
        es: "Los aumentos rápidos en actividad sísmica, especialmente cuando los terremotos migran hacia arriba hacia la superficie, indican magma ascendente y proporcionan la advertencia a corto plazo más confiable de erupciones.",
        de: "Rasche Zunahmen seismischer Aktivität, besonders wenn Erdbeben nach oben zur Oberfläche wandern, zeigen aufsteigendes Magma an und liefern die zuverlässigste kurzfristige Warnung vor Eruptionen.",
        nl: "Snelle toenames in seismische activiteit, vooral wanneer aardbevingen naar boven naar het oppervlak migreren, duiden op stijgend magma en bieden de meest betrouwbare korte-termijn waarschuwing voor uitbarstingen."
      }
    },
    {
      question: {
        en: "What is the most dangerous aspect of pyroclastic density currents for hazard assessment?",
        es: "¿Cuál es el aspecto más peligroso de las corrientes de densidad piroclástica para la evaluación de riesgos?",
        de: "Was ist der gefährlichste Aspekt pyroklastischer Dichteströme für die Gefährdungsbeurteilung?",
        nl: "Wat is het meest gevaarlijke aspect van pyroclastische dichtheidsstromen voor risicoanalyse?"
      },
      options: [
        { en: "High mobility and ability to surmount topographic barriers", es: "Alta movilidad y capacidad de superar barreras topográficas", de: "Hohe Mobilität und Fähigkeit, topographische Barrieren zu überwinden", nl: "Hoge mobiliteit en vermogen om topografische barrières te overwinnen" },
        { en: "Extreme temperatures only", es: "Solo temperaturas extremas", de: "Nur extreme Temperaturen", nl: "Alleen extreme temperaturen" },
        { en: "Limited spatial extent", es: "Extensión espacial limitada", de: "Begrenzte räumliche Ausdehnung", nl: "Beperkte ruimtelijke uitbreiding" },
        { en: "Slow movement speed", es: "Velocidad de movimiento lenta", de: "Langsame Bewegungsgeschwindigkeit", nl: "Langzame bewegingssnelheid" }
      ],
      correct: 0,
      explanation: {
        en: "Pyroclastic density currents can travel at speeds exceeding 100 km/h, carry temperatures over 800°C, and their low density allows them to climb over hills and ridges, making escape extremely difficult.",
        es: "Las corrientes de densidad piroclástica pueden viajar a velocidades superiores a 100 km/h, llevar temperaturas sobre 800°C, y su baja densidad les permite escalar colinas y crestas, haciendo el escape extremadamente difícil.",
        de: "Pyroklastische Dichteströme können mit Geschwindigkeiten über 100 km/h reisen, Temperaturen über 800°C tragen, und ihre geringe Dichte ermöglicht es ihnen, über Hügel und Grate zu steigen, was Flucht extrem schwierig macht.",
        nl: "Pyroclastische dichtheidsstromen kunnen reizen met snelheden boven 100 km/h, temperaturen boven 800°C dragen, en hun lage dichtheid stelt ze in staat om over heuvels en ruggen te klimmen, waardoor ontsnapping extreem moeilijk wordt."
      }
    },
    {
      question: {
        en: "Which type of volcanic earthquake is most directly associated with magma movement?",
        es: "¿Qué tipo de terremoto volcánico está más directamente asociado con el movimiento de magma?",
        de: "Welche Art von vulkanischem Erdbeben ist am direktesten mit Magmabewegung verbunden?",
        nl: "Welk type vulkanische aardbeving is het meest direct geassocieerd met magmabeweging?"
      },
      options: [
        { en: "Long-period (LP) earthquakes", es: "Terremotos de período largo (LP)", de: "Langperioden-Erdbeben (LP)", nl: "Lange-periode aardbevingen (LP)" },
        { en: "High-frequency volcanic earthquakes", es: "Terremotos volcánicos de alta frecuencia", de: "Hochfrequente vulkanische Erdbeben", nl: "Hoogfrequente vulkanische aardbevingen" },
        { en: "Regional tectonic earthquakes", es: "Terremotos tectónicos regionales", de: "Regionale tektonische Erdbeben", nl: "Regionale tektonische aardbevingen" },
        { en: "Explosion earthquakes only", es: "Solo terremotos de explosión", de: "Nur Explosions-Erdbeben", nl: "Alleen explosie aardbevingen" }
      ],
      correct: 0,
      explanation: {
        en: "Long-period earthquakes are caused by the resonance of fluid-filled cavities and conduits as magma and gas move through the volcanic system, making them excellent indicators of magma transport.",
        es: "Los terremotos de período largo son causados por la resonancia de cavidades y conductos llenos de fluido cuando magma y gas se mueven por el sistema volcánico, haciéndolos excelentes indicadores del transporte de magma.",
        de: "Langperioden-Erdbeben werden durch die Resonanz flüssigkeitsgefüllter Hohlräume und Leitungen verursacht, wenn sich Magma und Gas durch das vulkanische System bewegen, was sie zu ausgezeichneten Indikatoren des Magmatransports macht.",
        nl: "Lange-periode aardbevingen worden veroorzaakt door de resonantie van vloeistof-gevulde holtes en kanalen wanneer magma en gas door het vulkanische systeem bewegen, waardoor ze uitstekende indicatoren zijn van magmatransport."
      }
    },
    {
      question: {
        en: "What is the primary purpose of volcanic ash dispersion modeling in aviation safety?",
        es: "¿Cuál es el propósito principal del modelado de dispersión de ceniza volcánica en seguridad aérea?",
        de: "Was ist der Hauptzweck der Modellierung vulkanischer Ascheverbreitung in der Luftfahrtsicherheit?",
        nl: "Wat is het primaire doel van vulkanische as-dispersiemodellering in luchtvaarveiligheid?"
      },
      options: [
        { en: "Predict flight path hazard zones and closure times", es: "Predecir zonas de peligro de rutas de vuelo y tiempos de cierre", de: "Vorhersage von Flugweg-Gefahrenzonen und Sperrungszeiten", nl: "Voorspellen van vliegroute gevarenzones en sluitingstijden" },
        { en: "Calculate engine fuel efficiency", es: "Calcular eficiencia de combustible del motor", de: "Kraftstoffeffizienz des Motors berechnen", nl: "Brandstofefficiëntie van motor berekenen" },
        { en: "Determine optimal cruising altitude", es: "Determinar altitud de crucero óptima", de: "Optimale Reiseflughöhe bestimmen", nl: "Optimale kruishoogte bepalen" },
        { en: "Monitor aircraft structural integrity", es: "Monitorear integridad estructural de aeronaves", de: "Strukturelle Integrität von Flugzeugen überwachen", nl: "Structurele integriteit van vliegtuigen monitoren" }
      ],
      correct: 0,
      explanation: {
        en: "Volcanic ash can damage aircraft engines and instruments, so dispersion models predict where ash clouds will travel to enable flight path planning and airspace closures for aviation safety.",
        es: "La ceniza volcánica puede dañar motores e instrumentos de aeronaves, así que los modelos de dispersión predicen dónde viajarán las nubes de ceniza para permitir planificación de rutas de vuelo y cierres de espacio aéreo para seguridad aérea.",
        de: "Vulkanasche kann Flugzeugmotoren und -instrumente beschädigen, daher sagen Verbreitungsmodelle vorher, wohin Aschewolken reisen werden, um Flugwegplanung und Luftraumsperrungen für die Luftfahrtsicherheit zu ermöglichen.",
        nl: "Vulkanische as kan vliegtuigmotoren en instrumenten beschadigen, dus dispersiemodellen voorspellen waar aswolken zullen reizen om vliegroute planning en luchtruimsluitingen voor luchtvaartveiligheid mogelijk te maken."
      }
    },
    {
      question: {
        en: "Which geochemical indicator is most reliable for detecting deep magma recharge in volcanic systems?",
        es: "¿Qué indicador geoquímico es más confiable para detectar recarga de magma profundo en sistemas volcánicos?",
        de: "Welcher geochemische Indikator ist am zuverlässigsten für die Erkennung tiefer Magma-Aufladung in vulkanischen Systemen?",
        nl: "Welke geochemische indicator is het meest betrouwbaar voor het detecteren van diepe magma-hernieuwing in vulkanische systemen?"
      },
      options: [
        { en: "Changes in 3He/4He ratios in volcanic gases", es: "Cambios en proporciones 3He/4He en gases volcánicos", de: "Änderungen der 3He/4He-Verhältnisse in vulkanischen Gasen", nl: "Veranderingen in 3He/4He verhoudingen in vulkanische gassen" },
        { en: "Surface temperature fluctuations", es: "Fluctuaciones de temperatura superficial", de: "Oberflächentemperaturschwankungen", nl: "Oppervlakte temperatuurfluctuaties" },
        { en: "Magnetic field variations", es: "Variaciones del campo magnético", de: "Magnetfeldvariationen", nl: "Magnetische veld variaties" },
        { en: "Changes in local gravity", es: "Cambios en gravedad local", de: "Änderungen der lokalen Schwerkraft", nl: "Veranderingen in lokale zwaartekracht" }
      ],
      correct: 0,
      explanation: {
        en: "Helium isotope ratios (3He/4He) in volcanic gases reflect the input of deep mantle-derived magma, with higher ratios indicating fresh magma recharge from depth.",
        es: "Las proporciones de isótopos de helio (3He/4He) en gases volcánicos reflejan la entrada de magma derivado del manto profundo, con proporciones más altas indicando recarga de magma fresco desde profundidad.",
        de: "Helium-Isotopenverhältnisse (3He/4He) in vulkanischen Gasen spiegeln den Eintrag von tiefem mantelstämmigem Magma wider, wobei höhere Verhältnisse frische Magma-Aufladung aus der Tiefe anzeigen.",
        nl: "Helium isotoopverhoudingen (3He/4He) in vulkanische gassen weerspiegelen de input van diep mantel-afgeleid magma, waarbij hogere verhoudingen verse magma-hernieuwing vanuit de diepte aanduiden."
      }
    },
    {
      question: {
        en: "What is the most significant limitation of current volcanic eruption prediction capabilities?",
        es: "¿Cuál es la limitación más significativa de las capacidades actuales de predicción de erupciones volcánicas?",
        de: "Was ist die bedeutendste Einschränkung der aktuellen Fähigkeiten zur Vorhersage von Vulkanausbrüchen?",
        nl: "Wat is de meest significante beperking van huidige vulkanische uitbarstingsvoorspellingsmogelijkheden?"
      },
      options: [
        { en: "Inability to predict exact timing and magnitude", es: "Incapacidad de predecir tiempo exacto y magnitud", de: "Unfähigkeit, genaue Zeit und Stärke vorherzusagen", nl: "Onvermogen om exacte timing en grootte te voorspellen" },
        { en: "Lack of seismic monitoring equipment", es: "Falta de equipo de monitoreo sísmico", de: "Mangel an seismischen Überwachungsgeräten", nl: "Gebrek aan seismische monitoringapparatuur" },
        { en: "Insufficient satellite coverage", es: "Cobertura satelital insuficiente", de: "Unzureichende Satellitenabdeckung", nl: "Onvoldoende satellietdekking" },
        { en: "Limited gas measurement techniques", es: "Técnicas limitadas de medición de gases", de: "Begrenzte Gasmessungstechniken", nl: "Beperkte gasmeetechnieken" }
      ],
      correct: 0,
      explanation: {
        en: "While we can detect volcanic unrest and increased eruption probability, predicting the exact timing, duration, and size of eruptions remains extremely challenging due to complex magma system dynamics.",
        es: "Aunque podemos detectar inquietud volcánica y probabilidad aumentada de erupción, predecir el tiempo exacto, duración y tamaño de erupciones sigue siendo extremadamente desafiante debido a dinámicas complejas del sistema magmático.",
        de: "Obwohl wir vulkanische Unruhe und erhöhte Eruptionswahrscheinlichkeit erkennen können, bleibt die Vorhersage der genauen Zeit, Dauer und Größe von Eruptionen extrem herausfordernd aufgrund komplexer Magmasystem-Dynamiken.",
        nl: "Hoewel we vulkanische onrust en verhoogde uitbarstingskans kunnen detecteren, blijft het voorspellen van exacte timing, duur en grootte van uitbarstingen extreem uitdagend vanwege complexe magmasysteemdynamiek."
      }
    },
    {
      question: {
        en: "Which monitoring technique is most effective for tracking lava dome growth and instability?",
        es: "¿Qué técnica de monitoreo es más efectiva para rastrear crecimiento e inestabilidad de domos de lava?",
        de: "Welche Überwachungstechnik ist am effektivsten für die Verfolgung von Lavadom-Wachstum und -Instabilität?",
        nl: "Welke monitoringtechniek is het meest effectief voor het volgen van lavakoepel groei en instabiliteit?"
      },
      options: [
        { en: "High-resolution photogrammetry and thermal imaging", es: "Fotogrametría de alta resolución e imágenes térmicas", de: "Hochauflösende Photogrammetrie und Wärmebildgebung", nl: "Hoge resolutie fotogrammetrie en thermische beeldvorming" },
        { en: "Deep drilling and core sampling", es: "Perforación profunda y muestreo de núcleos", de: "Tiefbohrung und Kernprobenentnahme", nl: "Diep boren en kernbemonstering" },
        { en: "Chemical analysis of rainfall", es: "Análisis químico de lluvia", de: "Chemische Analyse von Niederschlag", nl: "Chemische analyse van regenval" },
        { en: "Magnetic susceptibility measurements", es: "Mediciones de susceptibilidad magnética", de: "Magnetische Suszeptibilitätsmessungen", nl: "Magnetische gevoeligheidsmetingen" }
      ],
      correct: 0,
      explanation: {
        en: "Photogrammetry provides precise 3D models to track dome growth rates and detect structural changes, while thermal imaging reveals internal temperature patterns that indicate stability or impending collapse.",
        es: "La fotogrametría proporciona modelos 3D precisos para rastrear tasas de crecimiento de domos y detectar cambios estructurales, mientras que las imágenes térmicas revelan patrones de temperatura internos que indican estabilidad o colapso inminente.",
        de: "Photogrammetrie liefert präzise 3D-Modelle zur Verfolgung von Dom-Wachstumsraten und Erkennung struktureller Änderungen, während Wärmebildgebung interne Temperaturmuster offenbart, die Stabilität oder bevorstehenden Kollaps anzeigen.",
        nl: "Fotogrammetrie biedt precieze 3D-modellen om koepelgroeisnelheden te volgen en structurele veranderingen te detecteren, terwijl thermische beeldvorming interne temperatuurpatronen onthult die stabiliteit of dreigende instorting aangeven."
      }
    },
    {
      question: {
        en: "What is the primary challenge in volcanic hazard communication to local populations?",
        es: "¿Cuál es el desafío principal en la comunicación de peligros volcánicos a poblaciones locales?",
        de: "Was ist die Hauptherausforderung bei der Kommunikation vulkanischer Gefahren an lokale Bevölkerungen?",
        nl: "Wat is de primaire uitdaging in vulkanische gevaarscommunicatie naar lokale bevolkingen?"
      },
      options: [
        { en: "Balancing scientific uncertainty with actionable warnings", es: "Equilibrar incertidumbre científica con advertencias accionables", de: "Wissenschaftliche Unsicherheit mit umsetzbaren Warnungen ausbalancieren", nl: "Wetenschappelijke onzekerheid balanceren met uitvoerbare waarschuwingen" },
        { en: "Language translation difficulties", es: "Dificultades de traducción de idioma", de: "Sprachübersetzungsschwierigkeiten", nl: "Taalvertaalmoeilijkheden" },
        { en: "Lack of communication technology", es: "Falta de tecnología de comunicación", de: "Mangel an Kommunikationstechnologie", nl: "Gebrek aan communicatietechnologie" },
        { en: "Insufficient scientific data", es: "Datos científicos insuficientes", de: "Unzureichende wissenschaftliche Daten", nl: "Onvoldoende wetenschappelijke gegevens" }
      ],
      correct: 0,
      explanation: {
        en: "Volcanic systems are inherently unpredictable, so scientists must communicate probabilistic risks and uncertainties while providing clear guidance for decision-making and evacuation planning.",
        es: "Los sistemas volcánicos son inherentemente impredecibles, así que los científicos deben comunicar riesgos probabilísticos e incertidumbres mientras proporcionan orientación clara para toma de decisiones y planificación de evacuación.",
        de: "Vulkanische Systeme sind von Natur aus unvorhersagbar, daher müssen Wissenschaftler probabilistische Risiken und Unsicherheiten kommunizieren und gleichzeitig klare Anleitung für Entscheidungsfindung und Evakuierungsplanung bieten.",
        nl: "Vulkanische systemen zijn inherent onvoorspelbaar, dus wetenschappers moeten probabilistische risico's en onzekerheden communiceren terwijl ze duidelijke begeleiding bieden voor besluitvorming en evacuatieplanning."
      }
    },
    {
      question: {
        en: "Which factor is most critical for determining lahar hazard zones in volcanic risk assessment?",
        es: "¿Qué factor es más crítico para determinar zonas de peligro de lahares en evaluación de riesgo volcánico?",
        de: "Welcher Faktor ist am kritischsten für die Bestimmung von Lahar-Gefahrenzonen in vulkanischen Risikobewertungen?",
        nl: "Welke factor is het meest kritiek voor het bepalen van lahar gevarenzones in vulkanische risicoanalyse?"
      },
      options: [
        { en: "Drainage basin topography and sediment availability", es: "Topografía de cuenca de drenaje y disponibilidad de sedimentos", de: "Entwässerungsbecken-Topographie und Sedimentverfügbarkeit", nl: "Afwateringsbekken topografie en sedimentbeschikbaarheid" },
        { en: "Wind patterns and atmospheric conditions", es: "Patrones de viento y condiciones atmosféricas", de: "Windmuster und atmosphärische Bedingungen", nl: "Windpatronen en atmosferische omstandigheden" },
        { en: "Magnetic field strength variations", es: "Variaciones de fuerza del campo magnético", de: "Magnetfeldstärkevariationen", nl: "Magnetische veldsterktevariaties" },
        { en: "Solar radiation levels", es: "Niveles de radiación solar", de: "Sonnenstrahlung-Niveaus", nl: "Zonnestralingsniveaus" }
      ],
      correct: 0,
      explanation: {
        en: "Lahars follow drainage networks and their destructive potential depends on valley morphology, channel confinement, and the amount of loose volcanic material available for entrainment along flow paths.",
        es: "Los lahares siguen redes de drenaje y su potencial destructivo depende de la morfología del valle, confinamiento del canal, y la cantidad de material volcánico suelto disponible para arrastre a lo largo de las rutas de flujo.",
        de: "Lahars folgen Entwässerungsnetzen und ihr zerstörerisches Potenzial hängt von der Tallmorphologie, Kanaleinschluss und der Menge an losem vulkanischem Material ab, das entlang der Fließwege mitgerissen werden kann.",
        nl: "Lahars volgen afwateringsnetwerken en hun destructieve potentieel hangt af van valleimorfologie, kanaalbeperking, en de hoeveelheid los vulkanisch materiaal beschikbaar voor meevoering langs stroompaden."
      }
    },
    {
      question: {
        en: "What is the most reliable indicator for distinguishing between phreatomagmatic and purely magmatic eruptions in real-time monitoring?",
        es: "¿Cuál es el indicador más confiable para distinguir entre erupciones freatomagmáticas y puramente magmáticas en monitoreo en tiempo real?",
        de: "Was ist der zuverlässigste Indikator zur Unterscheidung zwischen phreatomagmatischen und rein magmatischen Eruptionen bei der Echtzeitüberwachung?",
        nl: "Wat is de meest betrouwbare indicator voor het onderscheiden tussen phreatomagmatische en puur magmatische uitbarstingen in real-time monitoring?"
      },
      options: [
        { en: "Ash particle morphology and water content analysis", es: "Análisis de morfología de partículas de ceniza y contenido de agua", de: "Aschepartikel-Morphologie und Wassergehaltanalyse", nl: "Asdeeltjes morfologie en watergehalte analyse" },
        { en: "Seismic wave frequency only", es: "Solo frecuencia de ondas sísmicas", de: "Nur seismische Wellenfrequenz", nl: "Alleen seismische golffrequentie" },
        { en: "Atmospheric pressure changes", es: "Cambios de presión atmosférica", de: "Atmosphärische Druckänderungen", nl: "Atmosferische drukveranderingen" },
        { en: "Regional magnetic variations", es: "Variaciones magnéticas regionales", de: "Regionale magnetische Variationen", nl: "Regionale magnetische variaties" }
      ],
      correct: 0,
      explanation: {
        en: "Phreatomagmatic eruptions produce distinctive angular, glassy ash particles and higher water content due to magma-water interaction, which can be detected through rapid ash sampling and analysis.",
        es: "Las erupciones freatomagmáticas producen partículas de ceniza angulares y vítreas distintivas y mayor contenido de agua debido a la interacción magma-agua, que puede detectarse a través de muestreo y análisis rápido de ceniza.",
        de: "Phreatomagmatische Eruptionen produzieren charakteristische eckige, glasige Aschepartikel und höheren Wassergehalt aufgrund der Magma-Wasser-Wechselwirkung, was durch schnelle Ascheprobenentnahme und -analyse erkannt werden kann.",
        nl: "Phreatomagmatische uitbarstingen produceren onderscheidende hoekige, glasachtige asdeeltjes en hoger watergehalte door magma-water interactie, wat gedetecteerd kan worden door snelle asbemonstering en analyse."
      }
    },
    {
      question: {
        en: "Which advanced monitoring approach shows the most promise for improving volcanic eruption forecasting accuracy?",
        es: "¿Qué enfoque avanzado de monitoreo muestra la mayor promesa para mejorar la precisión de pronósticos de erupciones volcánicas?",
        de: "Welcher fortgeschrittene Überwachungsansatz zeigt das größte Potenzial zur Verbesserung der Genauigkeit vulkanischer Eruptionsvorhersagen?",
        nl: "Welke geavanceerde monitoring benadering toont de meeste belofte voor het verbeteren van vulkanische uitbarstingsvoorspellingnauwkeurigheid?"
      },
      options: [
        { en: "Integrated multi-parameter machine learning models", es: "Modelos integrados de aprendizaje automático multi-parámetro", de: "Integrierte Multi-Parameter-Machine-Learning-Modelle", nl: "Geïntegreerde multi-parameter machine learning modellen" },
        { en: "Single-parameter threshold systems", es: "Sistemas de umbral de un solo parámetro", de: "Einparameter-Schwellwertsysteme", nl: "Enkele-parameter drempelsystemen" },
        { en: "Historical pattern recognition only", es: "Solo reconocimiento de patrones históricos", de: "Nur historische Mustererkennung", nl: "Alleen historische patroonherkenning" },
        { en: "Manual visual observation", es: "Observación visual manual", de: "Manuelle visuelle Beobachtung", nl: "Handmatige visuele observatie" }
      ],
      correct: 0,
      explanation: {
        en: "Machine learning models that integrate multiple monitoring parameters (seismic, deformation, gas, thermal) can identify complex patterns and relationships that single-parameter approaches miss, improving forecast reliability.",
        es: "Los modelos de aprendizaje automático que integran múltiples parámetros de monitoreo (sísmico, deformación, gas, térmico) pueden identificar patrones y relaciones complejas que los enfoques de un solo parámetro pierden, mejorando la confiabilidad del pronóstico.",
        de: "Machine-Learning-Modelle, die mehrere Überwachungsparameter (seismisch, Deformation, Gas, thermisch) integrieren, können komplexe Muster und Beziehungen identifizieren, die Einparameter-Ansätze übersehen, und verbessern die Vorhersagezuverlässigkeit.",
        nl: "Machine learning modellen die meerdere monitoringparameters (seismisch, deformatie, gas, thermisch) integreren kunnen complexe patronen en relaties identificeren die enkele-parameter benaderingen missen, waardoor voorspellingsbetrouwbaarheid verbetert."
      }
    },
    {
      question: {
        en: "What is the significance of volcanic lightning detection in hazard monitoring?",
        es: "¿Cuál es la significancia de la detección de rayos volcánicos en monitoreo de peligros?",
        de: "Was ist die Bedeutung der vulkanischen Blitzerkkennung in der Gefahrenüberwachung?",
        nl: "Wat is de betekenis van vulkanische bliksemdetectie in gevarenmonitoring?"
      },
      options: [
        { en: "Real-time indication of explosive eruption intensity", es: "Indicación en tiempo real de intensidad de erupción explosiva", de: "Echtzeitanzeige der explosiven Eruptionsintensität", nl: "Real-time indicatie van explosieve uitbarstingsintensiteit" },
        { en: "Prediction of earthquake occurrence", es: "Predicción de ocurrencia de terremotos", de: "Vorhersage von Erdbebenauftreten", nl: "Voorspelling van aardbevingvoorkomen" },
        { en: "Measurement of ground temperature", es: "Medición de temperatura del suelo", de: "Messung der Bodentemperatur", nl: "Meting van grondtemperatuur" },
        { en: "Detection of gas emissions only", es: "Solo detección de emisiones de gas", de: "Nur Nachweis von Gasemissionen", nl: "Alleen detectie van gasemissies" }
      ],
      correct: 0,
      explanation: {
        en: "Volcanic lightning occurs during explosive eruptions due to ash particle charging, and its frequency and intensity correlate with eruption column height and explosivity, providing real-time assessment of hazard levels.",
        es: "Los rayos volcánicos ocurren durante erupciones explosivas debido a la carga de partículas de ceniza, y su frecuencia e intensidad se correlacionan con la altura de la columna eruptiva y explosividad, proporcionando evaluación en tiempo real de niveles de peligro.",
        de: "Vulkanische Blitze treten während explosiver Eruptionen aufgrund der Aufladung von Aschepartikeln auf, und ihre Häufigkeit und Intensität korrelieren mit Eruptionssäulenhöhe und Explosivität und bieten Echtzeitbewertung von Gefahrenniveaus.",
        nl: "Vulkanische bliksem treedt op tijdens explosieve uitbarstingen door oplading van asdeeltjes, en de frequentie en intensiteit correleren met uitbarstingskolomhoogte en explosiviteit, wat real-time beoordeling van gevaarniveaus biedt."
      }
    },
    {
      question: {
        en: "Which characteristic of effusive eruptions makes them particularly suitable for hazard zone evacuation planning?",
        es: "¿Qué característica de las erupciones efusivas las hace particularmente adecuadas para planificación de evacuación de zonas de peligro?",
        de: "Welche Eigenschaft effusiver Eruptionen macht sie besonders geeignet für die Evakuierungsplanung von Gefahrenzonen?",
        nl: "Welke eigenschap van effusieve uitbarstingen maakt ze bijzonder geschikt voor evacuatieplanning van gevarenzones?"
      },
      options: [
        { en: "Predictable lava flow paths and slow advance rates", es: "Rutas predecibles de flujos de lava y tasas de avance lento", de: "Vorhersagbare Lavastrompfade und langsame Vorschubsraten", nl: "Voorspelbare lavastroomroutes en langzame voortgangsnelheden" },
        { en: "High eruption temperatures", es: "Altas temperaturas de erupción", de: "Hohe Eruptionstemperaturen", nl: "Hoge uitbarstingstemperaturen" },
        { en: "Large gas emission volumes", es: "Grandes volúmenes de emisión de gases", de: "Große Gasemissionsvolumina", nl: "Grote gasemissievolumes" },
        { en: "Unpredictable explosive phases", es: "Fases explosivas impredecibles", de: "Unvorhersagbare explosive Phasen", nl: "Onvoorspelbare explosieve fasen" }
      ],
      correct: 0,
      explanation: {
        en: "Effusive eruptions produce lava flows that follow predictable topographic pathways and advance slowly (typically meters to kilometers per day), allowing time for evacuation planning and implementation.",
        es: "Las erupciones efusivas producen flujos de lava que siguen rutas topográficas predecibles y avanzan lentamente (típicamente metros a kilómetros por día), permitiendo tiempo para planificación e implementación de evacuación.",
        de: "Effusive Eruptionen produzieren Lavaströme, die vorhersagbaren topographischen Pfaden folgen und langsam voranschreiten (typischerweise Meter bis Kilometer pro Tag), was Zeit für Evakuierungsplanung und -umsetzung ermöglicht.",
        nl: "Effusieve uitbarstingen produceren lavastromen die voorspelbare topografische routes volgen en langzaam voortgaan (typisch meters tot kilometers per dag), wat tijd biedt voor evacuatieplanning en implementatie."
      }
    },
    {
      question: {
        en: "What is the significance of real-time seismic amplitude measurement (RSAM) in volcanic monitoring?",
        es: "¿Cuál es la importancia de la medición de amplitud sísmica en tiempo real (RSAM) en monitoreo volcánico?",
        de: "Was ist die Bedeutung der Echtzeit-seismischen Amplitudenmessung (RSAM) in der Vulkanüberwachung?",
        nl: "Wat is de betekenis van real-time seismische amplitude meting (RSAM) in vulkanische monitoring?"
      },
      options: [
        { en: "RSAM provides continuous quantitative measure of volcanic unrest intensity and helps detect changes in activity levels", es: "RSAM proporciona medida cuantitativa continua de intensidad de inquietud volcánica y ayuda detectar cambios en niveles de actividad", de: "RSAM bietet kontinuierliche quantitative Messung vulkanischer Unruheintensität und hilft Aktivitätsleveländerungen zu erkennen", nl: "RSAM biedt continue kwantitatieve meting van vulkanische onrust intensiteit en helpt veranderingen in activiteitsniveaus detecteren" },
        { en: "RSAM only measures earthquake magnitude", es: "RSAM solo mide magnitud de terremotos", de: "RSAM misst nur Erdbebenmagnitude", nl: "RSAM meet alleen aardbeving magnitude" },
        { en: "RSAM cannot detect volcanic signals", es: "RSAM no puede detectar señales volcánicas", de: "RSAM kann vulkanische Signale nicht erkennen", nl: "RSAM kan vulkanische signalen niet detecteren" },
        { en: "RSAM requires manual data processing", es: "RSAM requiere procesamiento manual de datos", de: "RSAM erfordert manuelle Datenverarbeitung", nl: "RSAM vereist handmatige dataverwerking" }
      ],
      correct: 0,
      explanation: {
        en: "RSAM (Real-time Seismic Amplitude Measurement) calculates the average seismic amplitude over time windows, providing a continuous, automated measure of volcanic activity intensity. It helps identify trends, detect swarms, and monitor escalating unrest without requiring detailed event analysis.",
        es: "RSAM (Medición de Amplitud Sísmica en Tiempo Real) calcula la amplitud sísmica promedio sobre ventanas de tiempo, proporcionando una medida continua y automatizada de intensidad de actividad volcánica. Ayuda identificar tendencias, detectar enjambres, y monitorear inquietud escalante sin requerir análisis detallado de eventos.",
        de: "RSAM (Echtzeit-seismische Amplitudenmessung) berechnet die durchschnittliche seismische Amplitude über Zeitfenster und bietet eine kontinuierliche, automatisierte Messung vulkanischer Aktivitätsintensität. Es hilft Trends zu identifizieren, Schwärme zu erkennen und eskalierende Unruhe zu überwachen ohne detaillierte Ereignisanalyse.",
        nl: "RSAM (Real-time Seismische Amplitude Meting) berekent de gemiddelde seismische amplitude over tijdvensters, een continue, geautomatiseerde meting van vulkanische activiteit intensiteit biedend. Het helpt trends identificeren, zwermen detecteren, en escalerende onrust monitoren zonder gedetailleerde gebeurtenis analyse."
      }
    },
    {
      question: {
        en: "How do volcanic gas emission rates and compositions provide early warning indicators for eruptions?",
        es: "¿Cómo las tasas de emisión de gases volcánicos y composiciones proporcionan indicadores de alerta temprana para erupciones?",
        de: "Wie liefern vulkanische Gasemissionsraten und -zusammensetzungen Frühwarnindikatoren für Eruptionen?",
        nl: "Hoe bieden vulkanische gas emissie snelheden en samenstellingen vroege waarschuwing indicatoren voor erupties?"
      },
      options: [
        { en: "Increasing SO2/H2S ratios and elevated CO2 fluxes indicate rising magma and degassing processes that precede eruptions", es: "Relaciones SO2/H2S crecientes y flujos CO2 elevados indican magma ascendente y procesos de desgasificación que preceden erupciones", de: "Steigende SO2/H2S-Verhältnisse und erhöhte CO2-Flüsse zeigen aufsteigendes Magma und Entgasungsprozesse an, die Eruptionen vorausgehen", nl: "Toenemende SO2/H2S verhoudingen en verhoogde CO2 fluxen geven stijgend magma en ontgassing processen aan die erupties voorafgaan" },
        { en: "Gas emissions remain constant before eruptions", es: "Las emisiones de gas permanecen constantes antes de erupciones", de: "Gasemissionen bleiben vor Eruptionen konstant", nl: "Gas emissies blijven constant voor erupties" },
        { en: "Only explosive eruptions show gas emission changes", es: "Solo erupciones explosivas muestran cambios de emisión de gas", de: "Nur explosive Eruptionen zeigen Gasemissionsänderungen", nl: "Alleen explosieve erupties tonen gas emissie veranderingen" },
        { en: "Gas monitoring requires direct sampling from vents", es: "Monitoreo de gas requiere muestreo directo de respiraderos", de: "Gasüberwachung erfordert direkte Probenahme aus Schloten", nl: "Gas monitoring vereist directe bemonstering van openingen" }
      ],
      correct: 0,
      explanation: {
        en: "Volcanic gas monitoring tracks changes in emission rates and gas ratios that reflect magma movement and degassing. Increasing SO2/H2S ratios suggest magma ascent bringing high-temperature gases, while elevated CO2 indicates deep magma movement. These changes often occur days to weeks before eruptions.",
        es: "Monitoreo de gases volcánicos rastrea cambios en tasas de emisión y relaciones de gas que reflejan movimiento de magma y desgasificación. Relaciones SO2/H2S crecientes sugieren ascenso de magma trayendo gases de alta temperatura, mientras CO2 elevado indica movimiento profundo de magma. Estos cambios a menudo ocurren días a semanas antes de erupciones.",
        de: "Vulkanische Gasüberwachung verfolgt Änderungen in Emissionsraten und Gasverhältnissen, die Magmabewegung und Entgasung widerspiegeln. Steigende SO2/H2S-Verhältnisse deuten auf Magmaaufstieg hin, der Hochtemperaturgase bringt, während erhöhtes CO2 tiefe Magmabewegung anzeigt. Diese Änderungen treten oft Tage bis Wochen vor Eruptionen auf.",
        nl: "Vulkanische gas monitoring volgt veranderingen in emissie snelheden en gas verhoudingen die magma beweging en ontgassing reflecteren. Toenemende SO2/H2S verhoudingen suggereren magma opstijging die hoge-temperatuur gassen brengt, terwijl verhoogd CO2 diepe magma beweging aangeeft. Deze veranderingen treden vaak dagen tot weken voor erupties op."
      }
    },
    {
      question: {
        en: "What role does ground deformation monitoring play in understanding magma chamber dynamics?",
        es: "¿Qué papel juega el monitoreo de deformación del suelo en entender dinámicas de cámara magmática?",
        de: "Welche Rolle spielt die Bodendeformationsüberwachung beim Verständnis von Magmakammerdynamik?",
        nl: "Welke rol speelt grond deformatie monitoring in begrip van magmakamer dynamiek?"
      },
      options: [
        { en: "Deformation patterns reveal magma intrusion locations, chamber pressure changes, and volume variations through precise geodetic measurements", es: "Patrones de deformación revelan ubicaciones de intrusión de magma, cambios de presión de cámara y variaciones de volumen a través de mediciones geodésicas precisas", de: "Deformationsmuster offenbaren Magmaintrusionsstandorte, Kammerdruckänderungen und Volumenvariationen durch präzise geodätische Messungen", nl: "Deformatie patronen onthullen magma intrusie locaties, kamer druk veranderingen, en volume variaties door precieze geodetische metingen" },
        { en: "Ground deformation only occurs during eruptions", es: "Deformación del suelo solo ocurre durante erupciones", de: "Bodendeformation tritt nur während Eruptionen auf", nl: "Grond deformatie treedt alleen op tijdens erupties" },
        { en: "Deformation measurements are too imprecise for monitoring", es: "Mediciones de deformación son demasiado imprecisas para monitoreo", de: "Deformationsmessungen sind zu ungenau für Überwachung", nl: "Deformatie metingen zijn te onnauwkeurig voor monitoring" },
        { en: "Only tiltmeters can detect volcanic deformation", es: "Solo inclinómetros pueden detectar deformación volcánica", de: "Nur Neigungsmesser können vulkanische Deformation erkennen", nl: "Alleen hellingsmeters kunnen vulkanische deformatie detecteren" }
      ],
      correct: 0,
      explanation: {
        en: "Ground deformation monitoring using GPS, InSAR, and tiltmeters provides crucial insights into subsurface magma processes. Inflation indicates magma intrusion and chamber pressurization, while deflation suggests eruption or magma withdrawal. The patterns help locate intrusion sources and estimate volume changes.",
        es: "Monitoreo de deformación del suelo usando GPS, InSAR e inclinómetros proporciona información crucial sobre procesos subsuperficiales de magma. Inflación indica intrusión de magma y presurización de cámara, mientras deflación sugiere erupción o retiro de magma. Los patrones ayudan localizar fuentes de intrusión y estimar cambios de volumen.",
        de: "Bodendeformationsüberwachung mit GPS, InSAR und Neigungsmessern bietet entscheidende Einblicke in unterirdische Magmaprozesse. Inflation zeigt Magmaintrusion und Kammerpressurisierung an, während Deflation Eruption oder Magmarückzug nahelegt. Die Muster helfen Intrusionsquellen zu lokalisieren und Volumenänderungen zu schätzen.",
        nl: "Grond deformatie monitoring gebruikmakend van GPS, InSAR, en hellingsmeters biedt cruciale inzichten in ondergrondse magma processen. Inflatie geeft magma intrusie en kamer druktoename aan, terwijl deflatie eruptie of magma terugtrekking suggereert. De patronen helpen intrusie bronnen lokaliseren en volume veranderingen schatten."
      }
    },
    {
      question: {
        en: "How do thermal monitoring techniques detect pre-eruptive magma movement?",
        es: "¿Cómo las técnicas de monitoreo térmico detectan movimiento de magma pre-eruptivo?",
        de: "Wie erkennen thermische Überwachungstechniken prä-eruptive Magmabewegung?",
        nl: "Hoe detecteren thermische monitoring technieken pre-eruptieve magma beweging?"
      },
      options: [
        { en: "Infrared and thermal imaging detect temperature anomalies, hot spots, and ground heating patterns associated with rising magma", es: "Imagen infrarroja y térmica detecta anomalías de temperatura, puntos calientes y patrones de calentamiento del suelo asociados con magma ascendente", de: "Infrarot- und Wärmebildgebung erkennt Temperaturanomalien, heiße Stellen und Bodenerwärmungsmuster im Zusammenhang mit aufsteigendem Magma", nl: "Infrarood en thermische beeldvorming detecteert temperatuur anomalieën, hete plekken, en grond verwarmingspatronen geassocieerd met stijgend magma" },
        { en: "Thermal monitoring only works during active eruptions", es: "Monitoreo térmico solo funciona durante erupciones activas", de: "Thermische Überwachung funktioniert nur während aktiver Eruptionen", nl: "Thermische monitoring werkt alleen tijdens actieve erupties" },
        { en: "Temperature changes are too small to detect", es: "Cambios de temperatura son demasiado pequeños para detectar", de: "Temperaturänderungen sind zu klein zum Erkennen", nl: "Temperatuur veranderingen zijn te klein om te detecteren" },
        { en: "Thermal sensors cannot penetrate ground surface", es: "Sensores térmicos no pueden penetrar superficie del suelo", de: "Thermische Sensoren können Bodenoberfläche nicht durchdringen", nl: "Thermische sensoren kunnen grond oppervlak niet doordringen" }
      ],
      correct: 0,
      explanation: {
        en: "Thermal monitoring uses satellite and ground-based infrared sensors to detect temperature changes that indicate magma movement toward the surface. Even subtle heating can be detected before visible signs appear, providing early warning of potential volcanic activity.",
        es: "Monitoreo térmico usa sensores infrarrojos satelitales y terrestres para detectar cambios de temperatura que indican movimiento de magma hacia la superficie. Incluso calentamiento sutil puede detectarse antes de que aparezcan signos visibles, proporcionando alerta temprana de actividad volcánica potencial.",
        de: "Thermische Überwachung verwendet satelliten- und bodenbasierte Infrarotsensoren zur Erkennung von Temperaturänderungen, die Magmabewegung zur Oberfläche anzeigen. Selbst subtile Erwärmung kann erkannt werden, bevor sichtbare Zeichen auftreten, was Frühwarnung vor potenzieller vulkanischer Aktivität bietet.",
        nl: "Thermische monitoring gebruikt satelliet en grond-gebaseerde infrarood sensoren om temperatuur veranderingen te detecteren die magma beweging naar het oppervlak aangeven. Zelfs subtiele opwarming kan gedetecteerd worden voordat zichtbare tekenen verschijnen, vroege waarschuwing biedend voor potentiële vulkanische activiteit."
      }
    },
    {
      question: {
        en: "What is the importance of establishing volcano alert level systems for hazard communication?",
        es: "¿Cuál es la importancia de establecer sistemas de nivel de alerta volcánica para comunicación de peligros?",
        de: "Was ist die Bedeutung der Etablierung von Vulkan-Alarmstufen-Systemen für Gefahrenkommunikation?",
        nl: "Wat is het belang van het vaststellen van vulkaan waarschuwingsniveau systemen voor gevaar communicatie?"
      },
      options: [
        { en: "Alert levels provide standardized communication framework linking monitoring data to specific hazard conditions and response actions", es: "Niveles de alerta proporcionan marco de comunicación estandarizado vinculando datos de monitoreo a condiciones de peligro específicas y acciones de respuesta", de: "Alarmstufen bieten standardisierten Kommunikationsrahmen, der Überwachungsdaten mit spezifischen Gefahrenbedingungen und Reaktionsmaßnahmen verknüpft", nl: "Waarschuwingsniveaus bieden gestandaardiseerd communicatie kader dat monitoring data koppelt aan specifieke gevaar omstandigheden en reactie acties" },
        { en: "Alert systems only create public panic", es: "Sistemas de alerta solo crean pánico público", de: "Alarmsysteme erzeugen nur öffentliche Panik", nl: "Waarschuwingssystemen creëren alleen publieke paniek" },
        { en: "Volcano behavior is too unpredictable for alert systems", es: "Comportamiento volcánico es demasiado impredecible para sistemas de alerta", de: "Vulkanverhalten ist zu unvorhersagbar für Alarmsysteme", nl: "Vulkaan gedrag is te onvoorspelbaar voor waarschuwingssystemen" },
        { en: "Alert levels are only needed for explosive volcanoes", es: "Niveles de alerta solo se necesitan para volcanes explosivos", de: "Alarmstufen werden nur für explosive Vulkane benötigt", nl: "Waarschuwingsniveaus zijn alleen nodig voor explosieve vulkanen" }
      ],
      correct: 0,
      explanation: {
        en: "Volcano alert level systems translate complex monitoring data into clear, actionable information for emergency managers and the public. They provide consistent terminology, define specific hazard conditions, and outline appropriate response measures for different threat levels.",
        es: "Sistemas de nivel de alerta volcánica traducen datos complejos de monitoreo en información clara y procesable para gestores de emergencia y el público. Proporcionan terminología consistente, definen condiciones específicas de peligro, y delinean medidas de respuesta apropiadas para diferentes niveles de amenaza.",
        de: "Vulkan-Alarmstufen-Systeme übersetzen komplexe Überwachungsdaten in klare, umsetzbare Informationen für Notfallmanager und die Öffentlichkeit. Sie bieten konsistente Terminologie, definieren spezifische Gefahrenbedingungen und umreißen angemessene Reaktionsmaßnahmen für verschiedene Bedrohungsstufen.",
        nl: "Vulkaan waarschuwingsniveau systemen vertalen complexe monitoring data naar duidelijke, uitvoerbare informatie voor noodmanagers en het publiek. Ze bieden consistente terminologie, definiëren specifieke gevaar omstandigheden, en schetsen gepaste reactie maatregelen voor verschillende dreigingsniveaus."
      }
    },
    {
      question: {
        en: "How do probabilistic volcanic hazard assessments improve risk management decisions?",
        es: "¿Cómo las evaluaciones probabilísticas de peligros volcánicos mejoran decisiones de gestión de riesgos?",
        de: "Wie verbessern probabilistische vulkanische Gefahrenbewertungen Risikomanagement-Entscheidungen?",
        nl: "Hoe verbeteren probabilistische vulkanische gevaar beoordelingen risico management beslissingen?"
      },
      options: [
        { en: "Probabilistic assessments quantify uncertainties and provide risk-cost-benefit frameworks for decision making under uncertainty", es: "Evaluaciones probabilísticas cuantifican incertidumbres y proporcionan marcos riesgo-costo-beneficio para toma de decisiones bajo incertidumbre", de: "Probabilistische Bewertungen quantifizieren Unsicherheiten und bieten Risiko-Kosten-Nutzen-Rahmen für Entscheidungsfindung unter Unsicherheit", nl: "Probabilistische beoordelingen kwantificeren onzekerheden en bieden risico-kosten-baten kaders voor besluitvorming onder onzekerheid" },
        { en: "Volcanic hazards cannot be quantified probabilistically", es: "Peligros volcánicos no pueden cuantificarse probabilísticamente", de: "Vulkanische Gefahren können nicht probabilistisch quantifiziert werden", nl: "Vulkanische gevaren kunnen niet probabilistisch gekwantificeerd worden" },
        { en: "Risk assessments only consider worst-case scenarios", es: "Evaluaciones de riesgo solo consideran escenarios de peor caso", de: "Risikobewertungen berücksichtigen nur Worst-Case-Szenarien", nl: "Risico beoordelingen overwegen alleen worst-case scenario's" },
        { en: "Probabilistic methods are too complex for practical use", es: "Métodos probabilísticos son demasiado complejos para uso práctico", de: "Probabilistische Methoden sind zu komplex für praktische Anwendung", nl: "Probabilistische methoden zijn te complex voor praktisch gebruik" }
      ],
      correct: 0,
      explanation: {
        en: "Probabilistic volcanic hazard assessment (PVHA) explicitly incorporates uncertainties in volcanic processes, providing a range of possible outcomes with associated probabilities. This enables evidence-based risk management, cost-benefit analysis of mitigation measures, and more informed decision-making in the face of inherent volcanic unpredictability.",
        es: "Evaluación probabilística de peligros volcánicos (PVHA) incorpora explícitamente incertidumbres en procesos volcánicos, proporcionando un rango de resultados posibles con probabilidades asociadas. Esto permite gestión de riesgos basada en evidencia, análisis costo-beneficio de medidas de mitigación, y toma de decisiones más informada ante impredecibilidad volcánica inherente.",
        de: "Probabilistische vulkanische Gefahrenbewertung (PVHA) bezieht explizit Unsicherheiten in vulkanischen Prozessen ein und bietet eine Reihe möglicher Ergebnisse mit zugehörigen Wahrscheinlichkeiten. Dies ermöglicht evidenzbasiertes Risikomanagement, Kosten-Nutzen-Analyse von Minderungsmaßnahmen und informiertere Entscheidungsfindung angesichts inhärenter vulkanischer Unvorhersagbarkeit.",
        nl: "Probabilistische vulkanische gevaar beoordeling (PVHA) incorporeert expliciet onzekerheden in vulkanische processen, een reeks mogelijke uitkomsten met geassocieerde waarschijnlijkheden biedend. Dit maakt bewijs-gebaseerd risico management mogelijk, kosten-baten analyse van mitigatie maatregelen, en meer geïnformeerde besluitvorming geconfronteerd met inherente vulkanische onvoorspelbaarheid."
      }
    },
    {
      question: {
        en: "What role do volcanic ash dispersion models play in aviation hazard mitigation?",
        es: "¿Qué papel juegan los modelos de dispersión de ceniza volcánica en mitigación de peligros de aviación?",
        de: "Welche Rolle spielen vulkanische Ascheverbreitungsmodelle bei der Luftfahrt-Gefahrenminderung?",
        nl: "Welke rol spelen vulkanische as verspreidingsmodellen in luchtvaart gevaar mitigatie?"
      },
      options: [
        { en: "Dispersion models predict ash cloud trajectories and concentrations enabling flight path planning and airspace closure decisions", es: "Modelos de dispersión predicen trayectorias de nubes de ceniza y concentraciones habilitando planificación de rutas de vuelo y decisiones de cierre de espacio aéreo", de: "Ausbreitungsmodelle sagen Aschewolkentrajektorien und -konzentrationen voraus, ermöglichen Flugwegplanung und Luftraumsperrungsentscheidungen", nl: "Verspreidingsmodellen voorspellen as wolk trajecten en concentraties die vluchtroute planning en luchtruim sluiting beslissingen mogelijk maken" },
        { en: "Ash models are too inaccurate for aviation use", es: "Modelos de ceniza son demasiado inexactos para uso de aviación", de: "Aschemodelle sind zu ungenau für Luftfahrtnutzung", nl: "As modellen zijn te onnauwkeurig voor luchtvaart gebruik" },
        { en: "Aircraft can safely fly through any ash concentration", es: "Aeronaves pueden volar seguramente a través de cualquier concentración de ceniza", de: "Flugzeuge können sicher durch jede Aschekonzentration fliegen", nl: "Vliegtuigen kunnen veilig door elke as concentratie vliegen" },
        { en: "Ash dispersion is too unpredictable to model", es: "Dispersión de ceniza es demasiado impredecible para modelar", de: "Ascheverbreitung ist zu unvorhersagbar zum Modellieren", nl: "As verspreiding is te onvoorspelbaar om te modelleren" }
      ],
      correct: 0,
      explanation: {
        en: "Volcanic ash dispersion models combine eruption source parameters with meteorological data to predict ash cloud movement, concentration, and duration. These forecasts enable aviation authorities to make informed decisions about flight restrictions, route diversions, and airspace closures to protect aircraft from ash damage.",
        es: "Modelos de dispersión de ceniza volcánica combinan parámetros de fuente de erupción con datos meteorológicos para predecir movimiento, concentración y duración de nubes de ceniza. Estos pronósticos permiten a autoridades de aviación tomar decisiones informadas sobre restricciones de vuelo, desvíos de rutas y cierres de espacio aéreo para proteger aeronaves de daño por ceniza.",
        de: "Vulkanische Ascheverbreitungsmodelle kombinieren Eruptionsquellenparameter mit meteorologischen Daten zur Vorhersage von Aschewolkenbewegung, -konzentration und -dauer. Diese Prognosen ermöglichen Luftfahrtbehörden informierte Entscheidungen über Flugbeschränkungen, Routenumleitung und Luftraumsperrungen zum Schutz von Flugzeugen vor Ascheschäden.",
        nl: "Vulkanische as verspreidingsmodellen combineren eruptie bron parameters met meteorologische data om as wolk beweging, concentratie, en duur te voorspellen. Deze voorspellingen stellen luchtvaart autoriteiten in staat geïnformeerde beslissingen te maken over vlucht restricties, route omleidingen, en luchtruim sluitingen om vliegtuigen tegen as schade te beschermen."
      }
    },
    {
      question: {
        en: "How do lahar hazard maps contribute to community emergency planning?",
        es: "¿Cómo los mapas de peligro de lahar contribuyen a planificación de emergencia comunitaria?",
        de: "Wie tragen Lahar-Gefahrenkarten zur gemeinschaftlichen Notfallplanung bei?",
        nl: "Hoe dragen lahar gevaar kaarten bij aan gemeenschap noodplanning?"
      },
      options: [
        { en: "Lahar maps identify inundation zones, evacuation routes, and safe areas based on topographic flow modeling and historical events", es: "Mapas de lahar identifican zonas de inundación, rutas de evacuación y áreas seguras basadas en modelado de flujo topográfico y eventos históricos", de: "Lahar-Karten identifizieren Überflutungszonen, Evakuierungsrouten und sichere Bereiche basierend auf topographischer Strömungsmodellierung und historischen Ereignissen", nl: "Lahar kaarten identificeren overstroming zones, evacuatie routes, en veilige gebieden gebaseerd op topografische stroming modellering en historische gebeurtenissen" },
        { en: "Lahars only occur during explosive eruptions", es: "Lahars solo ocurren durante erupciones explosivas", de: "Lahare treten nur während explosiver Eruptionen auf", nl: "Lahars treden alleen op tijdens explosieve erupties" },
        { en: "Lahar paths cannot be predicted from topography", es: "Rutas de lahar no pueden predecirse de topografía", de: "Lahar-Pfade können nicht aus Topographie vorhergesagt werden", nl: "Lahar paden kunnen niet voorspeld worden van topografie" },
        { en: "Emergency planning is not needed for lahar hazards", es: "Planificación de emergencia no se necesita para peligros de lahar", de: "Notfallplanung ist für Lahar-Gefahren nicht erforderlich", nl: "Noodplanning is niet nodig voor lahar gevaren" }
      ],
      correct: 0,
      explanation: {
        en: "Lahar hazard maps delineate areas at risk from volcanic debris flows based on digital elevation models, flow simulations, and historical lahar deposits. They provide essential information for land-use planning, evacuation procedures, and emergency response strategies in volcanic regions.",
        es: "Mapas de peligro de lahar delinean áreas en riesgo de flujos de escombros volcánicos basados en modelos digitales de elevación, simulaciones de flujo y depósitos históricos de lahar. Proporcionan información esencial para planificación de uso de suelo, procedimientos de evacuación y estrategias de respuesta de emergencia en regiones volcánicas.",
        de: "Lahar-Gefahrenkarten delineieren gefährdete Bereiche durch vulkanische Schuttströme basierend auf digitalen Höhenmodellen, Strömungssimulationen und historischen Lahar-Ablagerungen. Sie bieten wesentliche Informationen für Landnutzungsplanung, Evakuierungsverfahren und Notfallstrategien in vulkanischen Regionen.",
        nl: "Lahar gevaar kaarten bakenen gebieden af die risico lopen van vulkanische puin stromen gebaseerd op digitale hoogte modellen, stroming simulaties, en historische lahar afzettingen. Ze bieden essentiële informatie voor landgebruik planning, evacuatie procedures, en nood reactie strategieën in vulkanische regio's."
      }
    },
    {
      question: {
        en: "What is the significance of long-term seismic monitoring networks in understanding regional volcanic systems?",
        es: "¿Cuál es la importancia de redes de monitoreo sísmico a largo plazo en entender sistemas volcánicos regionales?",
        de: "Was ist die Bedeutung langfristiger seismischer Überwachungsnetze für das Verständnis regionaler vulkanischer Systeme?",
        nl: "Wat is de betekenis van lange-termijn seismische monitoring netwerken in begrip van regionale vulkanische systemen?"
      },
      options: [
        { en: "Long-term networks reveal background seismicity patterns, magma migration pathways, and inter-volcano connections across volcanic regions", es: "Redes a largo plazo revelan patrones de sismicidad de fondo, vías de migración de magma y conexiones entre volcanes a través de regiones volcánicas", de: "Langfristige Netze offenbaren Hintergrundseismizitätsmuster, Magmamigrationswege und Vulkan-Verbindungen über vulkanische Regionen", nl: "Lange-termijn netwerken onthullen achtergrond seismiciteit patronen, magma migratie paden, en inter-vulkaan verbindingen over vulkanische regio's" },
        { en: "Short-term monitoring is sufficient for volcanic surveillance", es: "Monitoreo a corto plazo es suficiente para vigilancia volcánica", de: "Kurzfristige Überwachung ist ausreichend für vulkanische Überwachung", nl: "Korte-termijn monitoring is voldoende voor vulkanische surveillance" },
        { en: "Regional seismic networks cannot distinguish volcanic signals", es: "Redes sísmicas regionales no pueden distinguir señales volcánicas", de: "Regionale seismische Netze können vulkanische Signale nicht unterscheiden", nl: "Regionale seismische netwerken kunnen vulkanische signalen niet onderscheiden" },
        { en: "Each volcano operates independently without regional connections", es: "Cada volcán opera independientemente sin conexiones regionales", de: "Jeder Vulkan operiert unabhängig ohne regionale Verbindungen", nl: "Elke vulkaan opereert onafhankelijk zonder regionale verbindingen" }
      ],
      correct: 0,
      explanation: {
        en: "Long-term regional seismic networks provide baseline data on normal volcanic behavior, detect deep magma movements between volcanoes, and reveal large-scale processes like regional stress changes or shared magma sources that may affect multiple volcanic centers simultaneously.",
        es: "Redes sísmicas regionales a largo plazo proporcionan datos de línea base sobre comportamiento volcánico normal, detectan movimientos profundos de magma entre volcanes, y revelan procesos a gran escala como cambios de estrés regional o fuentes compartidas de magma que pueden afectar múltiples centros volcánicos simultáneamente.",
        de: "Langfristige regionale seismische Netze bieten Basisdaten über normales vulkanisches Verhalten, erkennen tiefe Magmabewegungen zwischen Vulkanen und offenbaren großmaßstäbliche Prozesse wie regionale Stressänderungen oder geteilte Magmaquellen, die mehrere vulkanische Zentren gleichzeitig beeinflussen können.",
        nl: "Lange-termijn regionale seismische netwerken bieden baseline data over normaal vulkanisch gedrag, detecteren diepe magma bewegingen tussen vulkanen, en onthullen grootschalige processen zoals regionale stress veranderingen of gedeelde magma bronnen die meerdere vulkanische centra gelijktijdig kunnen beïnvloeden."
      }
    },
    {
      question: {
        en: "How do multi-parameter monitoring approaches enhance volcanic eruption forecasting accuracy?",
        es: "¿Cómo los enfoques de monitoreo multi-parámetro mejoran precisión de pronóstico de erupciones volcánicas?",
        de: "Wie verbessern Multiparameter-Überwachungsansätze die Genauigkeit vulkanischer Eruptionsvorhersagen?",
        nl: "Hoe verbeteren multi-parameter monitoring benaderingen vulkanische eruptie voorspelling nauwkeurigheid?"
      },
      options: [
        { en: "Integrating seismic, deformation, gas, and thermal data provides convergent evidence and reduces false alarm rates", es: "Integrar datos sísmicos, de deformación, gas y térmicos proporciona evidencia convergente y reduce tasas de falsas alarmas", de: "Integration seismischer, Deformations-, Gas- und thermischer Daten bietet konvergente Evidenz und reduziert Fehlalarmraten", nl: "Integratie van seismische, deformatie, gas, en thermische data biedt convergente bewijs en reduceert vals alarm percentages" },
        { en: "Single monitoring methods are more reliable than combined approaches", es: "Métodos de monitoreo únicos son más confiables que enfoques combinados", de: "Einzelne Überwachungsmethoden sind zuverlässiger als kombinierte Ansätze", nl: "Enkele monitoring methoden zijn betrouwbaarder dan gecombineerde benaderingen" },
        { en: "Multi-parameter systems are too complex to interpret", es: "Sistemas multi-parámetro son demasiado complejos para interpretar", de: "Multiparameter-Systeme sind zu komplex zum Interpretieren", nl: "Multi-parameter systemen zijn te complex om te interpreteren" },
        { en: "Different monitoring techniques often contradict each other", es: "Diferentes técnicas de monitoreo a menudo se contradicen", de: "Verschiedene Überwachungstechniken widersprechen sich oft", nl: "Verschillende monitoring technieken spreken elkaar vaak tegen" }
      ],
      correct: 0,
      explanation: {
        en: "Multi-parameter monitoring integrates diverse geophysical and geochemical signals that respond to different aspects of volcanic processes. When multiple parameters show consistent changes, confidence in eruption forecasts increases significantly. This approach also helps distinguish true volcanic unrest from false alarms caused by non-volcanic sources.",
        es: "Monitoreo multi-parámetro integra señales geofísicas y geoquímicas diversas que responden a diferentes aspectos de procesos volcánicos. Cuando múltiples parámetros muestran cambios consistentes, confianza en pronósticos de erupción aumenta significativamente. Este enfoque también ayuda distinguir inquietud volcánica verdadera de falsas alarmas causadas por fuentes no volcánicas.",
        de: "Multiparameter-Überwachung integriert diverse geophysikalische und geochemische Signale, die auf verschiedene Aspekte vulkanischer Prozesse reagieren. Wenn mehrere Parameter konsistente Änderungen zeigen, steigt das Vertrauen in Eruptionsvorhersagen erheblich. Dieser Ansatz hilft auch, echte vulkanische Unruhe von Fehlalarmen durch nicht-vulkanische Quellen zu unterscheiden.",
        nl: "Multi-parameter monitoring integreert diverse geofysische en geochemische signalen die reageren op verschillende aspecten van vulkanische processen. Wanneer meerdere parameters consistente veranderingen tonen, neemt vertrouwen in eruptie voorspellingen significant toe. Deze benadering helpt ook echte vulkanische onrust onderscheiden van valse alarmen veroorzaakt door niet-vulkanische bronnen."
      }
    },
    {
      question: {
        en: "How do volcanic edifice instability and sector collapse hazards affect long-term land use planning?",
        es: "¿Cómo la inestabilidad del edificio volcánico y los peligros de colapso sectorial afectan la planificación del uso del suelo a largo plazo?",
        de: "Wie beeinflussen vulkanische Edifice-Instabilität und Sektorkollaps-Gefahren langfristige Landnutzungsplanung?",
        nl: "Hoe beïnvloeden vulkanische edifice instabiliteit en sector ineenstorting gevaren lange-termijn landgebruik planning?"
      },
      options: [
        { en: "Large-scale slope failures can extend hazard zones far beyond typical eruptive processes, requiring regional planning approaches", es: "Fallas de ladera a gran escala pueden extender zonas de peligro mucho más allá de procesos eruptivos típicos, requiriendo enfoques de planificación regional", de: "Großmaßstäbliche Hangausfälle können Gefahrenzonen weit über typische eruptive Prozesse hinaus erweitern und erfordern regionale Planungsansätze", nl: "Grootschalige hellingfalen kunnen gevarenzones ver voorbij typische eruptieve processen uitbreiden, regionale planningbenaderingen vereisend" },
        { en: "Volcanic slopes are always stable", es: "Laderas volcánicas son siempre estables", de: "Vulkanische Hänge sind immer stabil", nl: "Vulkanische hellingen zijn altijd stabiel" },
        { en: "Sector collapse only occurs during eruptions", es: "Colapso sectorial solo ocurre durante erupciones", de: "Sektorkollaps tritt nur während Eruptionen auf", nl: "Sector ineenstorting treedt alleen op tijdens erupties" },
        { en: "Land use restrictions are unnecessary for slope hazards", es: "Restricciones de uso de suelo son innecesarias para peligros de ladera", de: "Landnutzungsbeschränkungen sind für Hanggefährdungen unnötig", nl: "Landgebruikbeperkingen zijn onnodig voor hellinggevaren" }
      ],
      correct: 0,
      explanation: {
        en: "Large volcanic edifices can be inherently unstable due to weak volcanic deposits, hydrothermal alteration, and steep slopes. Sector collapse can travel tens of kilometers from the volcano, requiring hazard assessments that extend far beyond typical lava flow or pyroclastic density current zones.",
        es: "Grandes edificios volcánicos pueden ser inherentemente inestables debido a depósitos volcánicos débiles, alteración hidrotermal y laderas empinadas. El colapso sectorial puede viajar decenas de kilómetros del volcán, requiriendo evaluaciones de peligro que se extienden mucho más allá de zonas típicas de flujos de lava o corrientes de densidad piroclástica.",
        de: "Große vulkanische Edifices können aufgrund schwacher vulkanischer Ablagerungen, hydrothermaler Alteration und steiler Hänge von Natur aus instabil sein. Sektorkollaps kann Dutzende von Kilometern vom Vulkan reisen und erfordert Gefahrenbewertungen, die weit über typische Lavafluss- oder pyroklastische Dichtestromzonen hinausgehen.",
        nl: "Grote vulkanische edifices kunnen inherent instabiel zijn door zwakke vulkanische afzettingen, hydrothermale alteratie, en steile hellingen. Sector ineenstorting kan tientallen kilometers van de vulkaan reizen, gevarenbeoordelingen vereisend die ver voorbij typische lavastroomzones of pyroclastische dichtheidsstroomzones reiken."
      }
    },
    {
      question: {
        en: "What is the role of volcanic gas flux measurements in distinguishing between different eruption styles?",
        es: "¿Cuál es el papel de las mediciones de flujo de gas volcánico en distinguir entre diferentes estilos de erupción?",
        de: "Was ist die Rolle vulkanischer Gasfluxmessungen bei der Unterscheidung verschiedener Eruptionsstile?",
        nl: "Wat is de rol van vulkanische gasflux metingen in het onderscheiden van verschillende eruptiestijlen?"
      },
      options: [
        { en: "High gas flux with low SO2/H2S ratios indicates effusive potential, while low flux with high ratios suggests explosive conditions", es: "Alto flujo de gas con bajas proporciones SO2/H2S indica potencial efusivo, mientras bajo flujo con altas proporciones sugiere condiciones explosivas", de: "Hoher Gasflux mit niedrigen SO2/H2S-Verhältnissen zeigt effusives Potenzial an, während niedriger Flux mit hohen Verhältnissen explosive Bedingungen nahelegt", nl: "Hoge gasflux met lage SO2/H2S verhoudingen geeft effusief potentieel aan, terwijl lage flux met hoge verhoudingen explosieve omstandigheden suggereert" },
        { en: "Gas measurements cannot predict eruption style", es: "Mediciones de gas no pueden predecir estilo de erupción", de: "Gasmessungen können Eruptionsstil nicht vorhersagen", nl: "Gasmetingen kunnen eruptiestijl niet voorspellen" },
        { en: "All volcanic gases have the same composition", es: "Todos los gases volcánicos tienen la misma composición", de: "Alle vulkanischen Gase haben die gleiche Zusammensetzung", nl: "Alle vulkanische gassen hebben dezelfde samenstelling" },
        { en: "Gas flux only increases during active eruptions", es: "Flujo de gas solo aumenta durante erupciones activas", de: "Gasflux steigt nur während aktiver Eruptionen", nl: "Gasflux neemt alleen toe tijdens actieve erupties" }
      ],
      correct: 0,
      explanation: {
        en: "Gas flux and composition reflect magma degassing processes that differ between eruption styles. Open system degassing produces high flux and low-temperature gas signatures, favoring effusive eruptions. Closed system degassing leads to gas accumulation and high-temperature signatures, increasing explosive potential.",
        es: "Flujo y composición de gas reflejan procesos de desgasificación de magma que difieren entre estilos de erupción. Desgasificación de sistema abierto produce alto flujo y firmas de gas de baja temperatura, favoreciendo erupciones efusivas. Desgasificación de sistema cerrado lleva a acumulación de gas y firmas de alta temperatura, aumentando potencial explosivo.",
        de: "Gasflux und -zusammensetzung spiegeln Magma-Entgasungsprozesse wider, die sich zwischen Eruptionsstilen unterscheiden. Offene System-Entgasung produziert hohen Flux und Niedertemperatur-Gassignaturen, was effusive Eruptionen begünstigt. Geschlossene System-Entgasung führt zu Gasansammlung und Hochtemperatur-Signaturen, was explosives Potenzial erhöht.",
        nl: "Gasflux en samenstelling weerspiegelen magma ontgassingsprocessen die verschillen tussen eruptiestijlen. Open systeem ontgassing produceert hoge flux en lage-temperatuur gassignaturen, effusieve erupties begunstigend. Gesloten systeem ontgassing leidt tot gasaccumulatie en hoge-temperatuur signaturen, explosief potentieel verhogend."
      }
    },
    {
      question: {
        en: "How do volcanic tremor characteristics provide insights into eruption mechanics and magma properties?",
        es: "¿Cómo las características del tremor volcánico proporcionan información sobre mecánicas de erupción y propiedades del magma?",
        de: "Wie bieten vulkanische Tremor-Eigenschaften Einblicke in Eruptionsmechanik und Magmaeigenschaften?",
        nl: "Hoe bieden vulkanische tremor karakteristieken inzichten in eruptiemechanica en magma eigenschappen?"
      },
      options: [
        { en: "Tremor frequency and amplitude correlate with magma viscosity, gas content, and conduit geometry during transport processes", es: "Frecuencia y amplitud de tremor se correlacionan con viscosidad de magma, contenido de gas y geometría de conducto durante procesos de transporte", de: "Tremor-Frequenz und -Amplitude korrelieren mit Magmaviskosität, Gasgehalt und Conduit-Geometrie während Transportprozessen", nl: "Tremor frequentie en amplitude correleren met magmaviscositeit, gasgehalte, en kanaalgeometrie tijdens transportprocessen" },
        { en: "Volcanic tremor is unrelated to magma properties", es: "Tremor volcánico no está relacionado con propiedades del magma", de: "Vulkanisches Tremor steht nicht mit Magmaeigenschaften in Verbindung", nl: "Vulkanische tremor is niet gerelateerd aan magma eigenschappen" },
        { en: "Tremor only occurs during explosive eruptions", es: "Tremor solo ocurre durante erupciones explosivas", de: "Tremor tritt nur während explosiver Eruptionen auf", nl: "Tremor treedt alleen op tijdens explosieve erupties" },
        { en: "All volcanic tremor has the same frequency", es: "Todo tremor volcánico tiene la misma frecuencia", de: "Alle vulkanischen Tremor haben die gleiche Frequenz", nl: "Alle vulkanische tremor heeft dezelfde frequentie" }
      ],
      correct: 0,
      explanation: {
        en: "Volcanic tremor results from fluid flow through conduits and reflects the interaction between magma properties and pathway geometry. High-frequency tremor often indicates low-viscosity magma with efficient degassing, while low-frequency tremor suggests high-viscosity magma or restricted flow conditions.",
        es: "Tremor volcánico resulta del flujo de fluido a través de conductos y refleja la interacción entre propiedades del magma y geometría del camino. Tremor de alta frecuencia a menudo indica magma de baja viscosidad con desgasificación eficiente, mientras tremor de baja frecuencia sugiere magma de alta viscosidad o condiciones de flujo restringidas.",
        de: "Vulkanisches Tremor resultiert aus Fluidströmung durch Conduits und spiegelt die Wechselwirkung zwischen Magmaeigenschaften und Pfadgeometrie wider. Hochfrequentes Tremor zeigt oft niedervisköses Magma mit effizienter Entgasung an, während niederfrequentes Tremor hochvisköses Magma oder eingeschränkte Strömungsbedingungen nahelegt.",
        nl: "Vulkanische tremor resulteert uit vloeistofstroming door kanalen en weerspiegelt de interactie tussen magma eigenschappen en padgeometrie. Hoge-frequentie tremor geeft vaak lage-viscositeit magma met efficiënte ontgassing aan, terwijl lage-frequentie tremor hoge-viscositeit magma of beperkte stroomcondities suggereert."
      }
    },
    {
      question: {
        en: "What is the significance of baseline monitoring periods in volcanic surveillance programs?",
        es: "¿Cuál es la importancia de períodos de monitoreo de línea base en programas de vigilancia volcánica?",
        de: "Was ist die Bedeutung von Baseline-Überwachungsperioden in vulkanischen Überwachungsprogrammen?",
        nl: "Wat is de betekenis van baseline monitoring perioden in vulkanische surveillance programma's?"
      },
      options: [
        { en: "Baseline data establishes normal background conditions against which anomalous changes can be detected and interpreted", es: "Datos de línea base establecen condiciones de fondo normales contra las cuales cambios anómalos pueden detectarse e interpretarse", de: "Baseline-Daten etablieren normale Hintergrundbedingungen, gegen die anomale Änderungen erkannt und interpretiert werden können", nl: "Baseline data vestigt normale achtergrond omstandigheden waartegen afwijkende veranderingen gedetecteerd en geïnterpreteerd kunnen worden" },
        { en: "Baseline monitoring is unnecessary for volcanic surveillance", es: "Monitoreo de línea base es innecesario para vigilancia volcánica", de: "Baseline-Überwachung ist für vulkanische Überwachung unnötig", nl: "Baseline monitoring is onnodig voor vulkanische surveillance" },
        { en: "Volcanic activity is too variable to establish baselines", es: "Actividad volcánica es demasiado variable para establecer líneas base", de: "Vulkanische Aktivität ist zu variabel, um Baselines zu etablieren", nl: "Vulkanische activiteit is te variabel om baselines vast te stellen" },
        { en: "Short-term monitoring provides sufficient baseline data", es: "Monitoreo a corto plazo proporciona datos de línea base suficientes", de: "Kurzfristige Überwachung bietet ausreichende Baseline-Daten", nl: "Korte-termijn monitoring biedt voldoende baseline data" }
      ],
      correct: 0,
      explanation: {
        en: "Baseline monitoring periods, typically spanning multiple years, establish the range of normal variability for each monitoring parameter. This background characterization is essential for recognizing when volcanic systems deviate from normal behavior and for avoiding false alarms from natural fluctuations.",
        es: "Períodos de monitoreo de línea base, típicamente abarcando múltiples años, establecen el rango de variabilidad normal para cada parámetro de monitoreo. Esta caracterización de fondo es esencial para reconocer cuándo sistemas volcánicos se desvían del comportamiento normal y para evitar falsas alarmas de fluctuaciones naturales.",
        de: "Baseline-Überwachungsperioden, die typischerweise mehrere Jahre umfassen, etablieren die Bandbreite normaler Variabilität für jeden Überwachungsparameter. Diese Hintergrundcharakterisierung ist wesentlich für die Erkennung, wann vulkanische Systeme vom normalen Verhalten abweichen, und zur Vermeidung von Fehlalarmen durch natürliche Schwankungen.",
        nl: "Baseline monitoring perioden, typisch meerdere jaren omvattend, vestigen de range van normale variabiliteit voor elke monitoring parameter. Deze achtergrond karakterisering is essentieel voor het herkennen wanneer vulkanische systemen afwijken van normaal gedrag en voor het vermijden van valse alarmen van natuurlijke fluctuaties."
      }
    },
    {
      question: {
        en: "How do space-based geodetic techniques revolutionize volcano deformation monitoring capabilities?",
        es: "¿Cómo las técnicas geodésicas espaciales revolucionan capacidades de monitoreo de deformación volcánica?",
        de: "Wie revolutionieren weltraumbasierte geodätische Techniken vulkanische Deformationsüberwachungsfähigkeiten?",
        nl: "Hoe revolutioneren ruimte-gebaseerde geodetische technieken vulkanische deformatie monitoring mogelijkheden?"
      },
      options: [
        { en: "Satellite InSAR enables comprehensive monitoring of remote volcanoes with millimeter precision across wide areas", es: "InSAR satelital permite monitoreo integral de volcanes remotos con precisión milimétrica en áreas amplias", de: "Satelliten-InSAR ermöglicht umfassende Überwachung entlegener Vulkane mit Millimeter-Präzision über weite Gebiete", nl: "Satelliet InSAR maakt uitgebreide monitoring van afgelegen vulkanen mogelijk met millimeter precisie over brede gebieden" },
        { en: "Space techniques are less accurate than ground-based methods", es: "Técnicas espaciales son menos precisas que métodos terrestres", de: "Weltraumtechniken sind weniger genau als bodenbasierte Methoden", nl: "Ruimtetechnieken zijn minder nauwkeurig dan grond-gebaseerde methoden" },
        { en: "Satellite monitoring only works for large deformation signals", es: "Monitoreo satelital solo funciona para señales de deformación grandes", de: "Satellitenüberwachung funktioniert nur für große Deformationssignale", nl: "Satelliet monitoring werkt alleen voor grote deformatie signalen" },
        { en: "Remote sensing cannot detect volcanic deformation", es: "Teledetección no puede detectar deformación volcánica", de: "Fernerkundung kann vulkanische Deformation nicht erkennen", nl: "Remote sensing kan vulkanische deformatie niet detecteren" }
      ],
      correct: 0,
      explanation: {
        en: "Satellite-based Interferometric Synthetic Aperture Radar (InSAR) provides unprecedented capability to monitor ground deformation at hundreds of volcanoes simultaneously, detecting changes as small as centimeters across entire volcanic regions. This global perspective revolutionizes our ability to study volcanic unrest patterns.",
        es: "Radar de Apertura Sintética Interferométrica (InSAR) satelital proporciona capacidad sin precedentes para monitorear deformación del suelo en cientos de volcanes simultáneamente, detectando cambios tan pequeños como centímetros a través de regiones volcánicas enteras. Esta perspectiva global revoluciona nuestra capacidad de estudiar patrones de inquietud volcánica.",
        de: "Satellitenbasiertes Interferometrisches Synthetic Aperture Radar (InSAR) bietet beispiellose Fähigkeit zur Überwachung von Bodendeformation an Hunderten von Vulkanen gleichzeitig und erkennt Änderungen von nur Zentimetern über ganze vulkanische Regionen. Diese globale Perspektive revolutioniert unsere Fähigkeit, vulkanische Unruhemuster zu studieren.",
        nl: "Satelliet-gebaseerde Interferometrische Synthetische Aperture Radar (InSAR) biedt ongekende mogelijkheid om gronddeformatie bij honderden vulkanen gelijktijdig te monitoren, veranderingen van slechts centimeters over hele vulkanische regio's detecterend. Dit globale perspectief revolutioneert ons vermogen om vulkanische onrustpatronen te bestuderen."
      }
    },
    {
      question: {
        en: "What role do volcano observatories play in integrating monitoring data and communicating hazard assessments?",
        es: "¿Qué papel juegan los observatorios volcánicos en integrar datos de monitoreo y comunicar evaluaciones de peligro?",
        de: "Welche Rolle spielen Vulkanobservatorien bei der Integration von Überwachungsdaten und Kommunikation von Gefahrenbewertungen?",
        nl: "Welke rol spelen vulkaanobservatoria in het integreren van monitoring data en communiceren van gevarenbeoordelingen?"
      },
      options: [
        { en: "Observatories serve as centers for data integration, scientific interpretation, and official hazard communication to authorities and public", es: "Observatorios sirven como centros para integración de datos, interpretación científica y comunicación oficial de peligros a autoridades y público", de: "Observatorien dienen als Zentren für Datenintegration, wissenschaftliche Interpretation und offizielle Gefahrenkommunikation an Behörden und Öffentlichkeit", nl: "Observatoria dienen als centra voor data integratie, wetenschappelijke interpretatie, en officiële gevaar communicatie naar autoriteiten en publiek" },
        { en: "Volcano observatories only collect data without interpretation", es: "Observatorios volcánicos solo recolectan datos sin interpretación", de: "Vulkanobservatorien sammeln nur Daten ohne Interpretation", nl: "Vulkaanobservatoria verzamelen alleen data zonder interpretatie" },
        { en: "Academic institutions handle all volcano monitoring", es: "Instituciones académicas manejan todo monitoreo volcánico", de: "Akademische Institutionen handhaben alle Vulkanüberwachung", nl: "Academische instellingen behandelen alle vulkaanmonitoring" },
        { en: "Observatories work independently without coordination", es: "Observatorios trabajan independientemente sin coordinación", de: "Observatorien arbeiten unabhängig ohne Koordination", nl: "Observatoria werken onafhankelijk zonder coördinatie" }
      ],
      correct: 0,
      explanation: {
        en: "Volcano observatories are specialized institutions that integrate multidisciplinary monitoring data, provide expert scientific interpretation, maintain 24/7 surveillance capabilities, and serve as the authoritative source for volcanic hazard information to emergency managers, aviation authorities, and the public.",
        es: "Observatorios volcánicos son instituciones especializadas que integran datos de monitoreo multidisciplinarios, proporcionan interpretación científica experta, mantienen capacidades de vigilancia 24/7, y sirven como fuente autoritativa para información de peligros volcánicos a gestores de emergencia, autoridades de aviación, y el público.",
        de: "Vulkanobservatorien sind spezialisierte Institutionen, die multidisziplinäre Überwachungsdaten integrieren, fachkundige wissenschaftliche Interpretation bieten, 24/7-Überwachungsfähigkeiten aufrechterhalten und als autoritative Quelle für vulkanische Gefahreninformationen für Notfallmanager, Luftfahrtbehörden und die Öffentlichkeit dienen.",
        nl: "Vulkaanobservatoria zijn gespecialiseerde instellingen die multidisciplinaire monitoring data integreren, expert wetenschappelijke interpretatie bieden, 24/7 surveillance mogelijkheden onderhouden, en dienen als gezaghebbende bron voor vulkanische gevaar informatie naar noodmanagers, luchtvaart autoriteiten, en het publiek."
      }
    },
    {
      question: {
        en: "How do volcanic monitoring networks adapt to different volcano types and eruption styles?",
        es: "¿Cómo las redes de monitoreo volcánico se adaptan a diferentes tipos de volcanes y estilos de erupción?",
        de: "Wie passen sich vulkanische Überwachungsnetze an verschiedene Vulkantypen und Eruptionsstile an?",
        nl: "Hoe passen vulkanische monitoring netwerken zich aan aan verschillende vulkaantypes en eruptiestijlen?"
      },
      options: [
        { en: "Monitoring strategies are customized based on volcano morphology, eruption history, and dominant hazard types for each volcanic system", es: "Estrategias de monitoreo se personalizan basadas en morfología volcánica, historia de erupciones, y tipos de peligro dominantes para cada sistema volcánico", de: "Überwachungsstrategien werden basierend auf Vulkanmorphologie, Eruptionsgeschichte und dominierenden Gefahrentypen für jedes vulkanische System angepasst", nl: "Monitoring strategieën worden aangepast gebaseerd op vulkaan morfologie, eruptie geschiedenis, en dominante gevaartypes voor elk vulkanisch systeem" },
        { en: "All volcanoes use identical monitoring approaches", es: "Todos los volcanes usan enfoques de monitoreo idénticos", de: "Alle Vulkane verwenden identische Überwachungsansätze", nl: "Alle vulkanen gebruiken identieke monitoring benaderingen" },
        { en: "Monitoring networks cannot be adapted to specific volcanoes", es: "Redes de monitoreo no pueden adaptarse a volcanes específicos", de: "Überwachungsnetze können nicht an spezifische Vulkane angepasst werden", nl: "Monitoring netwerken kunnen niet worden aangepast aan specifieke vulkanen" },
        { en: "Volcano type has no influence on monitoring design", es: "Tipo de volcán no tiene influencia en diseño de monitoreo", de: "Vulkantyp hat keinen Einfluss auf Überwachungsdesign", nl: "Vulkaantype heeft geen invloed op monitoring ontwerp" }
      ],
      correct: 0,
      explanation: {
        en: "Effective volcanic monitoring requires tailored approaches that consider each volcano's unique characteristics. Shield volcanoes may emphasize thermal and deformation monitoring for lava flows, while stratovolcanoes focus on seismic and gas monitoring for explosive hazards. Monitoring density and sensor placement are optimized for the expected hazard footprint.",
        es: "Monitoreo volcánico efectivo requiere enfoques adaptados que consideren características únicas de cada volcán. Volcanes escudo pueden enfatizar monitoreo térmico y de deformación para flujos de lava, mientras estratovolcanes se enfocan en monitoreo sísmico y de gas para peligros explosivos. Densidad de monitoreo y colocación de sensores se optimizan para la huella de peligro esperada.",
        de: "Effektive vulkanische Überwachung erfordert maßgeschneiderte Ansätze, die die einzigartigen Eigenschaften jedes Vulkans berücksichtigen. Schildvulkane können thermische und Deformationsüberwachung für Lavaströme betonen, während Stratovulkane sich auf seismische und Gasüberwachung für explosive Gefahren konzentrieren. Überwachungsdichte und Sensorplatzierung werden für den erwarteten Gefahren-Footprint optimiert.",
        nl: "Effectieve vulkanische monitoring vereist op maat gemaakte benaderingen die unieke karakteristieken van elke vulkaan overwegen. Schildvulkanen kunnen thermische en deformatie monitoring voor lavastromen benadrukken, terwijl stratovulkanen zich richten op seismische en gas monitoring voor explosieve gevaren. Monitoring dichtheid en sensor plaatsing worden geoptimaliseerd voor de verwachte gevaar voetafdruk."
      }
    },
    {
      question: {
        en: "What is the importance of real-time data transmission and processing in modern volcanic monitoring systems?",
        es: "¿Cuál es la importancia de la transmisión y procesamiento de datos en tiempo real en sistemas modernos de monitoreo volcánico?",
        de: "Was ist die Bedeutung von Echtzeit-Datenübertragung und -verarbeitung in modernen vulkanischen Überwachungssystemen?",
        nl: "Wat is het belang van real-time data transmissie en verwerking in moderne vulkanische monitoring systemen?"
      },
      options: [
        { en: "Real-time systems enable immediate detection of volcanic unrest and rapid response to changing hazard conditions", es: "Sistemas en tiempo real permiten detección inmediata de inquietud volcánica y respuesta rápida a condiciones de peligro cambiantes", de: "Echtzeitsysteme ermöglichen sofortige Erkennung vulkanischer Unruhe und schnelle Reaktion auf sich ändernde Gefahrenbedingungen", nl: "Real-time systemen maken onmiddellijke detectie van vulkanische onrust mogelijk en snelle reactie op veranderende gevaar omstandigheden" },
        { en: "Weekly data processing is sufficient for volcano monitoring", es: "Procesamiento de datos semanal es suficiente para monitoreo volcánico", de: "Wöchentliche Datenverarbeitung ist für Vulkanüberwachung ausreichend", nl: "Wekelijkse dataverwerking is voldoende voor vulkaanmonitoring" },
        { en: "Manual data collection provides better results", es: "Recolección manual de datos proporciona mejores resultados", de: "Manuelle Datensammlung liefert bessere Ergebnisse", nl: "Handmatige data verzameling biedt betere resultaten" },
        { en: "Data transmission quality is unimportant for monitoring", es: "Calidad de transmisión de datos no es importante para monitoreo", de: "Datenübertragungsqualität ist für Überwachung unwichtig", nl: "Data transmissie kwaliteit is onbelangrijk voor monitoring" }
      ],
      correct: 0,
      explanation: {
        en: "Real-time monitoring systems provide continuous data streams that enable automated alert generation, immediate expert review of anomalous activity, and rapid communication of changing hazard conditions. This capability is crucial for providing timely warnings when volcanic systems transition from unrest to eruption.",
        es: "Sistemas de monitoreo en tiempo real proporcionan flujos de datos continuos que permiten generación automática de alertas, revisión experta inmediata de actividad anómala, y comunicación rápida de condiciones de peligro cambiantes. Esta capacidad es crucial para proporcionar advertencias oportunas cuando sistemas volcánicos transicionan de inquietud a erupción.",
        de: "Echtzeit-Überwachungssysteme bieten kontinuierliche Datenströme, die automatische Alarmgenerierung, sofortige Expertenbewertung anomaler Aktivität und schnelle Kommunikation sich ändernder Gefahrenbedingungen ermöglichen. Diese Fähigkeit ist entscheidend für rechtzeitige Warnungen, wenn vulkanische Systeme von Unruhe zu Eruption übergehen.",
        nl: "Real-time monitoring systemen bieden continue data stromen die geautomatiseerde alarm generatie mogelijk maken, onmiddellijke expert beoordeling van afwijkende activiteit, en snelle communicatie van veranderende gevaar omstandigheden. Deze mogelijkheid is cruciaal voor het bieden van tijdige waarschuwingen wanneer vulkanische systemen overgaan van onrust naar eruptie."
      }
    },
    {
      question: {
        en: "How do cultural and social factors influence volcanic hazard perception and emergency response effectiveness?",
        es: "¿Cómo los factores culturales y sociales influyen en la percepción de peligros volcánicos y efectividad de respuesta de emergencia?",
        de: "Wie beeinflussen kulturelle und soziale Faktoren vulkanische Gefahrenwahrnehmung und Notfallreaktionseffektivität?",
        nl: "Hoe beïnvloeden culturele en sociale factoren vulkanische gevaarperceptie en noodreactie effectiviteit?"
      },
      options: [
        { en: "Local beliefs, risk tolerance, economic dependencies, and communication channels significantly affect community response to volcanic warnings", es: "Creencias locales, tolerancia al riesgo, dependencias económicas y canales de comunicación afectan significativamente la respuesta comunitaria a advertencias volcánicas", de: "Lokale Überzeugungen, Risikotoleranz, wirtschaftliche Abhängigkeiten und Kommunikationskanäle beeinflussen die Gemeinschaftsreaktion auf vulkanische Warnungen erheblich", nl: "Lokale overtuigingen, risicotolerantie, economische afhankelijkheden, en communicatiekanalen beïnvloeden gemeenschapsreactie op vulkanische waarschuwingen aanzienlijk" },
        { en: "Cultural factors have no impact on volcanic hazard response", es: "Factores culturales no tienen impacto en respuesta a peligros volcánicos", de: "Kulturelle Faktoren haben keinen Einfluss auf vulkanische Gefahrenreaktion", nl: "Culturele factoren hebben geen impact op vulkanische gevaarreactie" },
        { en: "Scientific information alone determines response effectiveness", es: "Información científica sola determina efectividad de respuesta", de: "Wissenschaftliche Information allein bestimmt Reaktionseffektivität", nl: "Wetenschappelijke informatie alleen bepaalt reactie effectiviteit" },
        { en: "All communities respond identically to volcanic threats", es: "Todas las comunidades responden idénticamente a amenazas volcánicas", de: "Alle Gemeinschaften reagieren identisch auf vulkanische Bedrohungen", nl: "Alle gemeenschappen reageren identiek op vulkanische bedreigingen" }
      ],
      correct: 0,
      explanation: {
        en: "Effective volcanic risk management must consider local cultural context, including traditional beliefs about volcanic activity, economic factors that influence evacuation decisions, social networks for information dissemination, and community trust in scientific authorities. Understanding these factors is essential for developing culturally appropriate communication strategies.",
        es: "Gestión efectiva de riesgos volcánicos debe considerar contexto cultural local, incluyendo creencias tradicionales sobre actividad volcánica, factores económicos que influyen decisiones de evacuación, redes sociales para diseminación de información, y confianza comunitaria en autoridades científicas. Entender estos factores es esencial para desarrollar estrategias de comunicación culturalmente apropiadas.",
        de: "Effektives vulkanisches Risikomanagement muss lokalen kulturellen Kontext berücksichtigen, einschließlich traditioneller Überzeugungen über vulkanische Aktivität, wirtschaftlicher Faktoren, die Evakuierungsentscheidungen beeinflussen, sozialer Netzwerke für Informationsverbreitung und Gemeinschaftsvertrauen in wissenschaftliche Behörden. Das Verständnis dieser Faktoren ist wesentlich für die Entwicklung kulturell angemessener Kommunikationsstrategien.",
        nl: "Effectief vulkanisch risicomanagement moet lokale culturele context overwegen, inclusief traditionele overtuigingen over vulkanische activiteit, economische factoren die evacuatie beslissingen beïnvloeden, sociale netwerken voor informatie verspreiding, en gemeenschapsvertrouwen in wetenschappelijke autoriteiten. Begrip van deze factoren is essentieel voor het ontwikkelen van cultureel gepaste communicatie strategieën."
      }
    },
    {
      question: {
        en: "What role does uncertainty quantification play in volcanic hazard assessment and decision-making processes?",
        es: "¿Qué papel juega la cuantificación de incertidumbre en evaluación de peligros volcánicos y procesos de toma de decisiones?",
        de: "Welche Rolle spielt Unsicherheitsquantifizierung in vulkanischen Gefahrenbewertungen und Entscheidungsprozessen?",
        nl: "Welke rol speelt onzekerheid kwantificatie in vulkanische gevaar beoordeling en besluitvormingsprocessen?"
      },
      options: [
        { en: "Explicit uncertainty quantification enables transparent risk communication and supports robust decision-making under incomplete knowledge", es: "Cuantificación explícita de incertidumbre permite comunicación transparente de riesgos y apoya toma de decisiones robusta bajo conocimiento incompleto", de: "Explizite Unsicherheitsquantifizierung ermöglicht transparente Risikokommunikation und unterstützt robuste Entscheidungsfindung bei unvollständigem Wissen", nl: "Expliciete onzekerheid kwantificatie maakt transparante risico communicatie mogelijk en ondersteunt robuuste besluitvorming onder onvolledige kennis" },
        { en: "Uncertainty should be hidden from decision makers", es: "Incertidumbre debe ocultarse de tomadores de decisiones", de: "Unsicherheit sollte vor Entscheidungsträgern verborgen werden", nl: "Onzekerheid moet verborgen worden voor besluitvormers" },
        { en: "Volcanic processes are too well understood to have uncertainties", es: "Procesos volcánicos están demasiado bien entendidos para tener incertidumbres", de: "Vulkanische Prozesse sind zu gut verstanden, um Unsicherheiten zu haben", nl: "Vulkanische processen zijn te goed begrepen om onzekerheden te hebben" },
        { en: "Uncertainty quantification is unnecessary for risk assessment", es: "Cuantificación de incertidumbre es innecesaria para evaluación de riesgos", de: "Unsicherheitsquantifizierung ist für Risikobewertung unnötig", nl: "Onzekerheid kwantificatie is onnodig voor risico beoordeling" }
      ],
      correct: 0,
      explanation: {
        en: "Volcanic systems are inherently complex and unpredictable, making uncertainty quantification essential for honest hazard assessment. Explicit treatment of uncertainties allows decision-makers to understand confidence levels in scientific assessments, consider worst-case scenarios, and make informed choices about acceptable risk levels.",
        es: "Sistemas volcánicos son inherentemente complejos e impredecibles, haciendo la cuantificación de incertidumbre esencial para evaluación honesta de peligros. Tratamiento explícito de incertidumbres permite a tomadores de decisiones entender niveles de confianza en evaluaciones científicas, considerar escenarios de peor caso, y tomar decisiones informadas sobre niveles de riesgo aceptables.",
        de: "Vulkanische Systeme sind von Natur aus komplex und unvorhersagbar, was Unsicherheitsquantifizierung für ehrliche Gefahrenbewertung wesentlich macht. Explizite Behandlung von Unsicherheiten ermöglicht Entscheidungsträgern, Vertrauensniveaus in wissenschaftlichen Bewertungen zu verstehen, Worst-Case-Szenarien zu betrachten und informierte Entscheidungen über akzeptable Risikoniveaus zu treffen.",
        nl: "Vulkanische systemen zijn inherent complex en onvoorspelbaar, onzekerheid kwantificatie essentieel makend voor eerlijke gevaar beoordeling. Expliciete behandeling van onzekerheden stelt besluitvormers in staat vertrouwensniveaus in wetenschappelijke beoordelingen te begrijpen, worst-case scenario's te overwegen, en geïnformeerde keuzes te maken over acceptabele risiconiveaus."
      }
    },
    {
      question: {
        en: "How do advances in machine learning and artificial intelligence enhance volcanic monitoring and eruption forecasting?",
        es: "¿Cómo los avances en aprendizaje automático e inteligencia artificial mejoran monitoreo volcánico y pronóstico de erupciones?",
        de: "Wie verbessern Fortschritte in maschinellem Lernen und künstlicher Intelligenz vulkanische Überwachung und Eruptionsvorhersage?",
        nl: "Hoe verbeteren vooruitgangen in machine learning en kunstmatige intelligentie vulkanische monitoring en eruptie voorspelling?"
      },
      options: [
        { en: "AI techniques can identify complex patterns in multi-parameter datasets and detect subtle precursory signals that traditional methods might miss", es: "Técnicas de IA pueden identificar patrones complejos en conjuntos de datos multi-parámetro y detectar señales precursoras sutiles que métodos tradicionales podrían perder", de: "KI-Techniken können komplexe Muster in Multiparameter-Datensätzen identifizieren und subtile Vorläufersignale erkennen, die traditionelle Methoden übersehen könnten", nl: "AI technieken kunnen complexe patronen in multi-parameter datasets identificeren en subtiele voorbode signalen detecteren die traditionele methoden zouden kunnen missen" },
        { en: "Machine learning cannot handle volcanic data complexity", es: "Aprendizaje automático no puede manejar complejidad de datos volcánicos", de: "Maschinelles Lernen kann vulkanische Datenkomplexität nicht bewältigen", nl: "Machine learning kan vulkanische data complexiteit niet hanteren" },
        { en: "AI replaces the need for scientific understanding", es: "IA reemplaza la necesidad de entendimiento científico", de: "KI ersetzt die Notwendigkeit wissenschaftlichen Verständnisses", nl: "AI vervangt de behoefte aan wetenschappelijk begrip" },
        { en: "Traditional monitoring methods are superior to AI approaches", es: "Métodos de monitoreo tradicionales son superiores a enfoques de IA", de: "Traditionelle Überwachungsmethoden sind KI-Ansätzen überlegen", nl: "Traditionele monitoring methoden zijn superieur aan AI benaderingen" }
      ],
      correct: 0,
      explanation: {
        en: "Machine learning algorithms can process vast amounts of heterogeneous monitoring data simultaneously, identifying non-linear relationships and temporal patterns that may indicate volcanic unrest. These techniques complement traditional methods by providing automated pattern recognition, anomaly detection, and predictive capabilities while requiring scientific expertise for proper interpretation.",
        es: "Algoritmos de aprendizaje automático pueden procesar vastas cantidades de datos de monitoreo heterogéneos simultáneamente, identificando relaciones no lineales y patrones temporales que pueden indicar inquietud volcánica. Estas técnicas complementan métodos tradicionales proporcionando reconocimiento automático de patrones, detección de anomalías y capacidades predictivas mientras requieren experiencia científica para interpretación apropiada.",
        de: "Maschinelle Lernalgorithmen können riesige Mengen heterogener Überwachungsdaten gleichzeitig verarbeiten und nichtlineare Beziehungen und zeitliche Muster identifizieren, die vulkanische Unruhe anzeigen könnten. Diese Techniken ergänzen traditionelle Methoden durch automatisierte Mustererkennung, Anomalieerkennung und Vorhersagefähigkeiten, während sie wissenschaftliche Expertise für ordnungsgemäße Interpretation erfordern.",
        nl: "Machine learning algoritmen kunnen enorme hoeveelheden heterogene monitoring data gelijktijdig verwerken, niet-lineaire relaties en temporele patronen identificerend die vulkanische onrust kunnen aanduiden. Deze technieken vullen traditionele methoden aan door geautomatiseerde patroonherkenning, anomalie detectie, en voorspellende mogelijkheden te bieden terwijl wetenschappelijke expertise voor juiste interpretatie vereist is."
      }
    },
    {
      question: {
        en: "What is the importance of international cooperation in global volcanic hazard monitoring and risk reduction?",
        es: "¿Cuál es la importancia de la cooperación internacional en monitoreo global de peligros volcánicos y reducción de riesgos?",
        de: "Was ist die Bedeutung internationaler Zusammenarbeit in globaler vulkanischer Gefahrenüberwachung und Risikoreduktion?",
        nl: "Wat is het belang van internationale samenwerking in globale vulkanische gevaar monitoring en risico reductie?"
      },
      options: [
        { en: "International collaboration enables knowledge sharing, standardized monitoring protocols, and coordinated response to volcanic crises with global impacts", es: "Colaboración internacional permite intercambio de conocimientos, protocolos de monitoreo estandarizados, y respuesta coordinada a crisis volcánicas con impactos globales", de: "Internationale Zusammenarbeit ermöglicht Wissensaustausch, standardisierte Überwachungsprotokolle und koordinierte Reaktion auf vulkanische Krisen mit globalen Auswirkungen", nl: "Internationale samenwerking maakt kennisuitwisseling mogelijk, gestandaardiseerde monitoring protocollen, en gecoördineerde reactie op vulkanische crises met globale impacts" },
        { en: "Each country should handle volcanic monitoring independently", es: "Cada país debe manejar monitoreo volcánico independientemente", de: "Jedes Land sollte vulkanische Überwachung unabhängig handhaben", nl: "Elk land moet vulkanische monitoring onafhankelijk behandelen" },
        { en: "Volcanic hazards only affect local populations", es: "Peligros volcánicos solo afectan poblaciones locales", de: "Vulkanische Gefahren betreffen nur lokale Bevölkerungen", nl: "Vulkanische gevaren beïnvloeden alleen lokale bevolkingen" },
        { en: "International cooperation creates more confusion than benefit", es: "Cooperación internacional crea más confusión que beneficio", de: "Internationale Zusammenarbeit schafft mehr Verwirrung als Nutzen", nl: "Internationale samenwerking creëert meer verwarring dan voordeel" }
      ],
      correct: 0,
      explanation: {
        en: "Volcanic eruptions can have regional to global impacts through ash cloud dispersion, climate effects, and economic disruption. International cooperation through organizations like IAVCEI and WOVOdat facilitates sharing of monitoring technologies, best practices, expertise, and real-time information during volcanic crises, improving global preparedness and response capabilities.",
        es: "Erupciones volcánicas pueden tener impactos regionales a globales a través de dispersión de nubes de ceniza, efectos climáticos y disrupción económica. Cooperación internacional a través de organizaciones como IAVCEI y WOVOdat facilita compartir tecnologías de monitoreo, mejores prácticas, experiencia e información en tiempo real durante crisis volcánicas, mejorando preparación global y capacidades de respuesta.",
        de: "Vulkanausbrüche können regionale bis globale Auswirkungen durch Aschewolkenverbreitung, Klimaeffekte und wirtschaftliche Störungen haben. Internationale Zusammenarbeit durch Organisationen wie IAVCEI und WOVOdat erleichtert das Teilen von Überwachungstechnologien, bewährten Praktiken, Expertise und Echtzeitinformationen während vulkanischer Krisen und verbessert globale Bereitschaft und Reaktionsfähigkeiten.",
        nl: "Vulkanische erupties kunnen regionale tot globale impacts hebben door aswolk verspreiding, klimaat effecten, en economische verstoring. Internationale samenwerking door organisaties zoals IAVCEI en WOVOdat faciliteert delen van monitoring technologieën, beste praktijken, expertise, en real-time informatie tijdens vulkanische crises, globale paraatheid en reactie mogelijkheden verbeterend."
      }
    },
    {
      question: {
        en: "How do volcanic crisis management protocols balance scientific uncertainty with public safety requirements?",
        es: "¿Cómo los protocolos de gestión de crisis volcánicas equilibran incertidumbre científica con requisitos de seguridad pública?",
        de: "Wie balancieren vulkanische Krisenmanagement-Protokolle wissenschaftliche Unsicherheit mit öffentlichen Sicherheitsanforderungen?",
        nl: "Hoe balanceren vulkanische crisis management protocollen wetenschappelijke onzekerheid met openbare veiligheidsvoorschriften?"
      },
      options: [
        { en: "Crisis protocols establish decision frameworks that trigger protective actions based on monitoring thresholds while acknowledging uncertainty limitations", es: "Protocolos de crisis establecen marcos de decisión que disparan acciones protectoras basadas en umbrales de monitoreo mientras reconocen limitaciones de incertidumbre", de: "Krisenprotokolle etablieren Entscheidungsrahmen, die Schutzmaßnahmen basierend auf Überwachungsschwellen auslösen, während sie Unsicherheitsbegrenzungen anerkennen", nl: "Crisis protocollen vestigen besluit kaders die beschermende acties activeren gebaseerd op monitoring drempels terwijl onzekerheid beperkingen erkennen" },
        { en: "Scientific uncertainty prevents any protective actions", es: "Incertidumbre científica previene cualquier acción protectora", de: "Wissenschaftliche Unsicherheit verhindert jede Schutzmaßnahme", nl: "Wetenschappelijke onzekerheid voorkomt elke beschermende actie" },
        { en: "Public safety decisions ignore scientific input", es: "Decisiones de seguridad pública ignoran aporte científico", de: "Öffentliche Sicherheitsentscheidungen ignorieren wissenschaftlichen Input", nl: "Openbare veiligheidsbeslissingen negeren wetenschappelijke input" },
        { en: "Perfect scientific certainty is required before any response", es: "Certeza científica perfecta se requiere antes de cualquier respuesta", de: "Perfekte wissenschaftliche Gewissheit ist vor jeder Reaktion erforderlich", nl: "Perfecte wetenschappelijke zekerheid is vereist voor elke reactie" }
      ],
      correct: 0,
      explanation: {
        en: "Effective volcanic crisis management requires pre-established protocols that define specific response actions for different alert levels, balancing the precautionary principle with practical considerations. These frameworks acknowledge that decisions must often be made with incomplete information, prioritizing public safety while minimizing unnecessary social and economic disruption.",
        es: "Gestión efectiva de crisis volcánicas requiere protocolos preestablecidos que definen acciones de respuesta específicas para diferentes niveles de alerta, equilibrando el principio precautorio con consideraciones prácticas. Estos marcos reconocen que las decisiones deben tomarse frecuentemente con información incompleta, priorizando seguridad pública mientras minimizan disrupción social y económica innecesaria.",
        de: "Effektives vulkanisches Krisenmanagement erfordert vorab etablierte Protokolle, die spezifische Reaktionsmaßnahmen für verschiedene Alarmstufen definieren und das Vorsorgeprinzip mit praktischen Überlegungen ausbalancieren. Diese Rahmen erkennen an, dass Entscheidungen oft mit unvollständigen Informationen getroffen werden müssen, öffentliche Sicherheit priorisierend während unnötige soziale und wirtschaftliche Störungen minimiert werden.",
        nl: "Effectief vulkanisch crisis management vereist vooraf vastgestelde protocollen die specifieke reactie acties definiëren voor verschillende alarmniveaus, het voorzorgsbeginsel balancerend met praktische overwegingen. Deze kaders erkennen dat beslissingen vaak genomen moeten worden met onvolledige informatie, openbare veiligheid prioriterend terwijl onnodige sociale en economische verstoring geminimaliseerd wordt."
      }
    },
    {
      question: {
        en: "What role do post-eruption assessments play in improving future volcanic hazard monitoring and risk management?",
        es: "¿Qué papel juegan las evaluaciones post-erupción en mejorar monitoreo futuro de peligros volcánicos y gestión de riesgos?",
        de: "Welche Rolle spielen Post-Eruptions-Bewertungen bei der Verbesserung zukünftiger vulkanischer Gefahrenüberwachung und Risikomanagement?",
        nl: "Welke rol spelen post-eruptie beoordelingen in het verbeteren van toekomstige vulkanische gevaar monitoring en risico management?"
      },
      options: [
        { en: "Post-eruption studies validate monitoring approaches, identify precursory patterns, and refine hazard models based on observed eruption behavior", es: "Estudios post-erupción validan enfoques de monitoreo, identifican patrones precursores, y refinan modelos de peligro basados en comportamiento de erupción observado", de: "Post-Eruptions-Studien validieren Überwachungsansätze, identifizieren Vorläufermuster und verfeinern Gefahrenmodelle basierend auf beobachtetem Eruptionsverhalten", nl: "Post-eruptie studies valideren monitoring benaderingen, identificeren voorbode patronen, en verfijnen gevaar modellen gebaseerd op waargenomen eruptie gedrag" },
        { en: "Post-eruption analysis is unnecessary once eruptions end", es: "Análisis post-erupción es innecesario una vez que erupciones terminan", de: "Post-Eruptions-Analyse ist unnötig, sobald Eruptionen enden", nl: "Post-eruptie analyse is onnodig zodra erupties eindigen" },
        { en: "Each eruption is unique and provides no lessons for future events", es: "Cada erupción es única y no proporciona lecciones para eventos futuros", de: "Jede Eruption ist einzigartig und bietet keine Lehren für zukünftige Ereignisse", nl: "Elke eruptie is uniek en biedt geen lessen voor toekomstige gebeurtenissen" },
        { en: "Monitoring systems cannot be improved based on eruption data", es: "Sistemas de monitoreo no pueden mejorarse basados en datos de erupción", de: "Überwachungssysteme können nicht basierend auf Eruptionsdaten verbessert werden", nl: "Monitoring systemen kunnen niet verbeterd worden gebaseerd op eruptie data" }
      ],
      correct: 0,
      explanation: {
        en: "Post-eruption analysis provides crucial feedback for improving monitoring systems by comparing predicted versus actual eruption behavior, identifying missed precursory signals, validating or refining forecasting models, and documenting lessons learned for enhanced preparedness. This iterative improvement process strengthens the scientific foundation for future hazard assessment.",
        es: "Análisis post-erupción proporciona retroalimentación crucial para mejorar sistemas de monitoreo comparando comportamiento de erupción predicho versus real, identificando señales precursoras perdidas, validando o refinando modelos de pronóstico, y documentando lecciones aprendidas para preparación mejorada. Este proceso de mejora iterativa fortalece la fundación científica para evaluación futura de peligros.",
        de: "Post-Eruptions-Analyse bietet entscheidende Rückkopplung zur Verbesserung von Überwachungssystemen durch Vergleich von vorhergesagtem versus tatsächlichem Eruptionsverhalten, Identifizierung verpasster Vorläufersignale, Validierung oder Verfeinerung von Vorhersagemodellen und Dokumentation gelernter Lektionen für verbesserte Bereitschaft. Dieser iterative Verbesserungsprozess stärkt die wissenschaftliche Grundlage für zukünftige Gefahrenbewertung.",
        nl: "Post-eruptie analyse biedt cruciale feedback voor het verbeteren van monitoring systemen door voorspeld versus werkelijk eruptie gedrag te vergelijken, gemiste voorbode signalen te identificeren, voorspellingsmodellen te valideren of verfijnen, en geleerde lessen te documenteren voor verbeterde paraatheid. Dit iteratieve verbeteringsproces versterkt de wetenschappelijke fundering voor toekomstige gevaar beoordeling."
      }
    },
    {
      question: {
        en: "How do economic considerations influence volcanic risk assessment and mitigation strategy development?",
        es: "¿Cómo las consideraciones económicas influyen en evaluación de riesgo volcánico y desarrollo de estrategias de mitigación?",
        de: "Wie beeinflussen wirtschaftliche Überlegungen vulkanische Risikobewertung und Minderungsstrategieentwicklung?",
        nl: "Hoe beïnvloeden economische overwegingen vulkanische risico beoordeling en mitigatie strategie ontwikkeling?"
      },
      options: [
        { en: "Cost-benefit analyses guide resource allocation for monitoring infrastructure, evacuation planning, and risk reduction measures", es: "Análisis costo-beneficio guían asignación de recursos para infraestructura de monitoreo, planificación de evacuación, y medidas de reducción de riesgos", de: "Kosten-Nutzen-Analysen leiten Ressourcenzuteilung für Überwachungsinfrastruktur, Evakuierungsplanung und Risikoreduktionsmaßnahmen", nl: "Kosten-baten analyses leiden hulpbronnen toewijzing voor monitoring infrastructuur, evacuatie planning, en risico reductie maatregelen" },
        { en: "Economic factors should not influence volcanic risk decisions", es: "Factores económicos no deben influir en decisiones de riesgo volcánico", de: "Wirtschaftliche Faktoren sollten vulkanische Risikoentscheidungen nicht beeinflussen", nl: "Economische factoren zouden vulkanische risico beslissingen niet moeten beïnvloeden" },
        { en: "Volcanic risk management should ignore financial constraints", es: "Gestión de riesgo volcánico debe ignorar restricciones financieras", de: "Vulkanisches Risikomanagement sollte finanzielle Beschränkungen ignorieren", nl: "Vulkanisch risico management zou financiële beperkingen moeten negeren" },
        { en: "Economic impacts of volcanic eruptions are negligible", es: "Impactos económicos de erupciones volcánicas son insignificantes", de: "Wirtschaftliche Auswirkungen vulkanischer Eruptionen sind vernachlässigbar", nl: "Economische impacts van vulkanische erupties zijn verwaarloosbaar" }
      ],
      correct: 0,
      explanation: {
        en: "Economic considerations are essential in volcanic risk management as they determine the feasibility and sustainability of monitoring programs, influence land-use planning decisions, guide investment in risk reduction infrastructure, and shape emergency response capabilities. Effective risk management requires balancing safety objectives with economic realities and resource constraints.",
        es: "Consideraciones económicas son esenciales en gestión de riesgo volcánico pues determinan viabilidad y sostenibilidad de programas de monitoreo, influyen decisiones de planificación de uso de suelo, guían inversión en infraestructura de reducción de riesgos, y moldean capacidades de respuesta de emergencia. Gestión efectiva de riesgos requiere equilibrar objetivos de seguridad con realidades económicas y restricciones de recursos.",
        de: "Wirtschaftliche Überlegungen sind wesentlich im vulkanischen Risikomanagement, da sie die Machbarkeit und Nachhaltigkeit von Überwachungsprogrammen bestimmen, Landnutzungsplanungsentscheidungen beeinflussen, Investitionen in Risikoreduktionsinfrastruktur leiten und Notfallreaktionsfähigkeiten formen. Effektives Risikomanagement erfordert die Ausbalancierung von Sicherheitszielen mit wirtschaftlichen Realitäten und Ressourcenbeschränkungen.",
        nl: "Economische overwegingen zijn essentieel in vulkanisch risico management omdat ze de haalbaarheid en duurzaamheid van monitoring programma's bepalen, landgebruik planning beslissingen beïnvloeden, investering in risico reductie infrastructuur leiden, en noodreactie mogelijkheden vormen. Effectief risico management vereist balanceren van veiligheidsdoelstellingen met economische realiteiten en hulpbronbeperkingen."
      }
    },
    {
      question: {
        en: "What is the significance of volcano deformation modeling in understanding magma chamber processes and eruption potential?",
        es: "¿Cuál es la importancia del modelado de deformación volcánica en entender procesos de cámara magmática y potencial de erupción?",
        de: "Was ist die Bedeutung vulkanischer Deformationsmodellierung für das Verständnis von Magmakammerprozessen und Eruptionspotenzial?",
        nl: "Wat is de betekenis van vulkaan deformatie modellering in begrip van magmakamer processen en eruptie potentieel?"
      },
      options: [
        { en: "Deformation modeling constrains magma chamber depth, volume changes, and pressure evolution, providing insights into eruption likelihood and style", es: "Modelado de deformación restringe profundidad de cámara magmática, cambios de volumen y evolución de presión, proporcionando información sobre probabilidad y estilo de erupción", de: "Deformationsmodellierung beschränkt Magmakammertiefe, Volumenänderungen und Druckentwicklung und bietet Einblicke in Eruptionswahrscheinlichkeit und -stil", nl: "Deformatie modellering beperkt magmakamer diepte, volume veranderingen, en druk evolutie, inzichten biedend in eruptie waarschijnlijkheid en stijl" },
        { en: "Ground deformation cannot be modeled accurately", es: "Deformación del suelo no puede modelarse con precisión", de: "Bodendeformation kann nicht genau modelliert werden", nl: "Gronddeformatie kan niet nauwkeurig gemodelleerd worden" },
        { en: "Deformation modeling only works for explosive eruptions", es: "Modelado de deformación solo funciona para erupciones explosivas", de: "Deformationsmodellierung funktioniert nur für explosive Eruptionen", nl: "Deformatie modellering werkt alleen voor explosieve erupties" },
        { en: "Magma chamber properties cannot be inferred from surface deformation", es: "Propiedades de cámara magmática no pueden inferirse de deformación superficial", de: "Magmakammereigenschaften können nicht aus Oberflächendeformation abgeleitet werden", nl: "Magmakamer eigenschappen kunnen niet afgeleid worden van oppervlakte deformatie" }
      ],
      correct: 0,
      explanation: {
        en: "Deformation modeling uses elastic and viscoelastic models to interpret surface displacement patterns in terms of subsurface magma chamber geometry, depth, volume changes, and pressure variations. These parameters provide crucial constraints on magma intrusion processes, chamber evolution, and the potential for eruption when combined with other monitoring data.",
        es: "Modelado de deformación usa modelos elásticos y viscoelásticos para interpretar patrones de desplazamiento superficial en términos de geometría de cámara magmática subsuperficial, profundidad, cambios de volumen y variaciones de presión. Estos parámetros proporcionan restricciones cruciales sobre procesos de intrusión de magma, evolución de cámara, y potencial de erupción cuando se combinan con otros datos de monitoreo.",
        de: "Deformationsmodellierung verwendet elastische und viskoelastische Modelle zur Interpretation von Oberflächenverschiebungsmustern in Bezug auf unterirdische Magmakammergeometrie, Tiefe, Volumenänderungen und Druckvariationen. Diese Parameter bieten entscheidende Beschränkungen für Magmaintrusionsprozesse, Kammerentwicklung und Eruptionspotenzial wenn mit anderen Überwachungsdaten kombiniert.",
        nl: "Deformatie modellering gebruikt elastische en viscoelastische modellen om oppervlakte verplaatsingspatronen te interpreteren in termen van ondergrondse magmakamer geometrie, diepte, volume veranderingen, en druk variaties. Deze parameters bieden cruciale beperkingen op magma intrusie processen, kamer evolutie, en potentieel voor eruptie wanneer gecombineerd met andere monitoring data."
      }
    },
    {
      question: {
        en: "How do multi-disciplinary approaches enhance the effectiveness of volcanic hazard assessment and risk communication?",
        es: "¿Cómo los enfoques multidisciplinarios mejoran la efectividad de evaluación de peligros volcánicos y comunicación de riesgos?",
        de: "Wie verbessern multidisziplinäre Ansätze die Effektivität vulkanischer Gefahrenbewertung und Risikokommunikation?",
        nl: "Hoe verbeteren multidisciplinaire benaderingen de effectiviteit van vulkanische gevaar beoordeling en risico communicatie?"
      },
      options: [
        { en: "Integrating geophysical, geochemical, geological, and social science expertise provides comprehensive understanding and culturally appropriate communication strategies", es: "Integrar experiencia geofísica, geoquímica, geológica y de ciencias sociales proporciona entendimiento integral y estrategias de comunicación culturalmente apropiadas", de: "Integration geophysikalischer, geochemischer, geologischer und sozialwissenschaftlicher Expertise bietet umfassendes Verständnis und kulturell angemessene Kommunikationsstrategien", nl: "Integratie van geofysische, geochemische, geologische, en sociale wetenschap expertise biedt uitgebreid begrip en cultureel gepaste communicatie strategieën" },
        { en: "Single-discipline approaches are more effective for volcanic studies", es: "Enfoques de una sola disciplina son más efectivos para estudios volcánicos", de: "Eindisziplinäre Ansätze sind für vulkanische Studien effektiver", nl: "Enkele-discipline benaderingen zijn effectiever voor vulkanische studies" },
        { en: "Different scientific disciplines often conflict in volcanic research", es: "Diferentes disciplinas científicas a menudo entran en conflicto en investigación volcánica", de: "Verschiedene wissenschaftliche Disziplinen stehen oft in vulkanischer Forschung in Konflikt", nl: "Verschillende wetenschappelijke disciplines conflicteren vaak in vulkanisch onderzoek" },
        { en: "Social science has no role in volcanic hazard assessment", es: "Ciencias sociales no tienen papel en evaluación de peligros volcánicos", de: "Sozialwissenschaften haben keine Rolle in vulkanischer Gefahrenbewertung", nl: "Sociale wetenschap heeft geen rol in vulkanische gevaar beoordeling" }
      ],
      correct: 0,
      explanation: {
        en: "Effective volcanic risk management requires integration of natural sciences (to understand volcanic processes and hazards), engineering (for monitoring systems and protective infrastructure), and social sciences (for risk perception, communication, and emergency management). This multidisciplinary approach ensures both scientific rigor and practical applicability in risk reduction efforts.",
        es: "Gestión efectiva de riesgo volcánico requiere integración de ciencias naturales (para entender procesos volcánicos y peligros), ingeniería (para sistemas de monitoreo e infraestructura protectora), y ciencias sociales (para percepción de riesgo, comunicación y gestión de emergencias). Este enfoque multidisciplinario asegura tanto rigor científico como aplicabilidad práctica en esfuerzos de reducción de riesgos.",
        de: "Effektives vulkanisches Risikomanagement erfordert Integration von Naturwissenschaften (zum Verständnis vulkanischer Prozesse und Gefahren), Ingenieurwesen (für Überwachungssysteme und Schutzinfrastruktur) und Sozialwissenschaften (für Risikowahrnehmung, Kommunikation und Notfallmanagement). Dieser multidisziplinäre Ansatz gewährleistet sowohl wissenschaftliche Strenge als auch praktische Anwendbarkeit in Risikoreduktionsbemühungen.",
        nl: "Effectief vulkanisch risico management vereist integratie van natuurwetenschappen (om vulkanische processen en gevaren te begrijpen), techniek (voor monitoring systemen en beschermende infrastructuur), en sociale wetenschappen (voor risico perceptie, communicatie, en nood management). Deze multidisciplinaire benadering verzekert zowel wetenschappelijke nauwkeurigheid als praktische toepasbaarheid in risico reductie inspanningen."
      }
    },
    {
      question: {
        en: "What role does volcanic gas geochemistry play in monitoring changes in magma source and volatile evolution?",
        es: "¿Qué papel juega la geoquímica de gases volcánicos en monitorear cambios en fuente de magma y evolución de volátiles?",
        de: "Welche Rolle spielt vulkanische Gasgeochemie bei der Überwachung von Änderungen in Magmaquelle und Volatile-Evolution?",
        nl: "Welke rol speelt vulkanische gas geochemie in het monitoren van veranderingen in magma bron en vluchtige evolutie?"
      },
      options: [
        { en: "Isotopic signatures and volatile ratios reveal deep magma input, crustal assimilation, and degassing pathway evolution", es: "Firmas isotópicas y proporciones de volátiles revelan entrada de magma profundo, asimilación cortical y evolución de vías de desgasificación", de: "Isotopische Signaturen und Volatile-Verhältnisse offenbaren tiefen Magma-Input, krustale Assimilation und Entgasungsweg-Evolution", nl: "Isotopische signaturen en vluchtige verhoudingen onthullen diepe magma input, korst assimilatie, en ontgassing pad evolutie" },
        { en: "Gas chemistry remains constant regardless of magma processes", es: "Química de gases permanece constante independientemente de procesos de magma", de: "Gaschemie bleibt unabhängig von Magmaprozessen konstant", nl: "Gas chemie blijft constant ongeacht magma processen" },
        { en: "Only temperature measurements are needed for gas monitoring", es: "Solo mediciones de temperatura se necesitan para monitoreo de gases", de: "Nur Temperaturmessungen werden für Gasüberwachung benötigt", nl: "Alleen temperatuurmetingen zijn nodig voor gas monitoring" },
        { en: "Volcanic gas composition cannot indicate magma source changes", es: "Composición de gas volcánico no puede indicar cambios de fuente de magma", de: "Vulkanische Gaszusammensetzung kann Änderungen der Magmaquelle nicht anzeigen", nl: "Vulkanische gas samenstelling kan magma bron veranderingen niet aangeven" }
      ],
      correct: 0,
      explanation: {
        en: "Volcanic gas geochemistry provides powerful insights into magma source characteristics and evolution. Carbon, sulfur, and noble gas isotopes can distinguish mantle versus crustal contributions, while volatile ratios track degassing processes and magma differentiation pathways, enabling detection of new magma injections.",
        es: "Geoquímica de gases volcánicos proporciona información poderosa sobre características y evolución de fuente de magma. Isótopos de carbono, azufre y gases nobles pueden distinguir contribuciones del manto versus corticales, mientras proporciones de volátiles rastrean procesos de desgasificación y vías de diferenciación de magma, permitiendo detección de inyecciones de magma nuevo.",
        de: "Vulkanische Gasgeochemie bietet mächtige Einblicke in Magmaquellencharakteristika und -evolution. Kohlenstoff-, Schwefel- und Edelgasisotope können Mantel- versus krustale Beiträge unterscheiden, während Volatile-Verhältnisse Entgasungsprozesse und Magmadifferenzierungswege verfolgen und Erkennung neuer Magmainjektionen ermöglichen.",
        nl: "Vulkanische gas geochemie biedt krachtige inzichten in magma bron karakteristieken en evolutie. Koolstof, zwavel, en edele gas isotopen kunnen mantel versus korst bijdragen onderscheiden, terwijl vluchtige verhoudingen ontgassingsprocessen en magma differentiatie paden volgen, detectie van nieuwe magma injecties mogelijk makend."
      }
    },
    {
      question: {
        en: "How do volcanic hazard maps integrate probabilistic assessments with deterministic scenario modeling?",
        es: "¿Cómo los mapas de peligro volcánico integran evaluaciones probabilísticas con modelado determinista de escenarios?",
        de: "Wie integrieren vulkanische Gefahrenkarten probabilistische Bewertungen mit deterministischer Szenariomodellierung?",
        nl: "Hoe integreren vulkanische gevaar kaarten probabilistische beoordelingen met deterministische scenario modellering?"
      },
      options: [
        { en: "Hazard maps combine probability distributions of eruption size/location with physics-based models of specific hazard processes", es: "Mapas de peligro combinan distribuciones de probabilidad de tamaño/ubicación de erupción con modelos basados en física de procesos de peligro específicos", de: "Gefahrenkarten kombinieren Wahrscheinlichkeitsverteilungen von Eruptionsgröße/-ort mit physikbasierten Modellen spezifischer Gefahrenprozesse", nl: "Gevaar kaarten combineren waarschijnlijkheidsverdelingen van eruptie grootte/locatie met fysica-gebaseerde modellen van specifieke gevaar processen" },
        { en: "Probabilistic and deterministic approaches cannot be combined", es: "Enfoques probabilísticos y deterministas no pueden combinarse", de: "Probabilistische und deterministische Ansätze können nicht kombiniert werden", nl: "Probabilistische en deterministische benaderingen kunnen niet gecombineerd worden" },
        { en: "Hazard maps only use historical eruption data", es: "Mapas de peligro solo usan datos históricos de erupción", de: "Gefahrenkarten verwenden nur historische Eruptionsdaten", nl: "Gevaar kaarten gebruiken alleen historische eruptie data" },
        { en: "Deterministic models provide exact eruption predictions", es: "Modelos deterministas proporcionan predicciones exactas de erupción", de: "Deterministische Modelle liefern exakte Eruptionsvorhersagen", nl: "Deterministische modellen bieden exacte eruptie voorspellingen" }
      ],
      correct: 0,
      explanation: {
        en: "Modern volcanic hazard maps integrate probabilistic assessments (which account for uncertainties in eruption timing, size, and location based on statistical analysis of historical data) with deterministic modeling (which uses physical laws to simulate specific hazard processes like pyroclastic flows or ash dispersion). This hybrid approach provides both uncertainty quantification and detailed process understanding.",
        es: "Mapas modernos de peligro volcánico integran evaluaciones probabilísticas (que consideran incertidumbres en tiempo, tamaño y ubicación de erupción basadas en análisis estadístico de datos históricos) con modelado determinista (que usa leyes físicas para simular procesos específicos de peligro como flujos piroclásticos o dispersión de ceniza). Este enfoque híbrido proporciona tanto cuantificación de incertidumbre como entendimiento detallado de procesos.",
        de: "Moderne vulkanische Gefahrenkarten integrieren probabilistische Bewertungen (die Unsicherheiten in Eruptionszeit, -größe und -ort basierend auf statistischer Analyse historischer Daten berücksichtigen) mit deterministischer Modellierung (die physikalische Gesetze zur Simulation spezifischer Gefahrenprozesse wie pyroklastische Ströme oder Ascheverbreitung verwendet). Dieser Hybridansatz bietet sowohl Unsicherheitsquantifizierung als auch detailliertes Prozessverständnis.",
        nl: "Moderne vulkanische gevaar kaarten integreren probabilistische beoordelingen (die onzekerheden in eruptie timing, grootte, en locatie overwegen gebaseerd op statistische analyse van historische data) met deterministische modellering (die fysische wetten gebruikt om specifieke gevaar processen zoals pyroclastische stromen of as verspreiding te simuleren). Deze hybride benadering biedt zowel onzekerheid kwantificatie als gedetailleerd proces begrip."
      }
    },
    {
      question: {
        en: "What is the importance of establishing baseline geochemical signatures in volcanic monitoring programs?",
        es: "¿Cuál es la importancia de establecer firmas geoquímicas de línea base en programas de monitoreo volcánico?",
        de: "Was ist die Bedeutung der Etablierung geochemischer Baseline-Signaturen in vulkanischen Überwachungsprogrammen?",
        nl: "Wat is het belang van het vaststellen van baseline geochemische signaturen in vulkanische monitoring programma's?"
      },
      options: [
        { en: "Baseline signatures define normal compositional ranges against which anomalous changes indicating volcanic unrest can be detected", es: "Firmas de línea base definen rangos composicionales normales contra los cuales cambios anómalos indicando inquietud volcánica pueden detectarse", de: "Baseline-Signaturen definieren normale Zusammensetzungsbereiche, gegen die anomale Änderungen, die vulkanische Unruhe anzeigen, erkannt werden können", nl: "Baseline signaturen definiëren normale samenstellingsbereiken waartegen afwijkende veranderingen die vulkanische onrust aangeven gedetecteerd kunnen worden" },
        { en: "Geochemical monitoring only works during active eruptions", es: "Monitoreo geoquímico solo funciona durante erupciones activas", de: "Geochemische Überwachung funktioniert nur während aktiver Eruptionen", nl: "Geochemische monitoring werkt alleen tijdens actieve erupties" },
        { en: "Baseline data is unnecessary for volcanic surveillance", es: "Datos de línea base son innecesarios para vigilancia volcánica", de: "Baseline-Daten sind für vulkanische Überwachung unnötig", nl: "Baseline data is onnodig voor vulkanische surveillance" },
        { en: "Volcanic gas composition never varies naturally", es: "Composición de gas volcánico nunca varía naturalmente", de: "Vulkanische Gaszusammensetzung variiert niemals natürlich", nl: "Vulkanische gas samenstelling varieert nooit natuurlijk" }
      ],
      correct: 0,
      explanation: {
        en: "Establishing baseline geochemical signatures through long-term monitoring of volcanic gases, fumaroles, and thermal features is crucial for recognizing when chemical compositions deviate from normal variability. These deviations often precede eruptions and indicate changes in magma degassing, temperature, or source characteristics.",
        es: "Establecer firmas geoquímicas de línea base a través de monitoreo a largo plazo de gases volcánicos, fumarolas y características termales es crucial para reconocer cuándo composiciones químicas se desvían de variabilidad normal. Estas desviaciones a menudo preceden erupciones e indican cambios en desgasificación de magma, temperatura, o características de fuente.",
        de: "Die Etablierung geochemischer Baseline-Signaturen durch langfristige Überwachung vulkanischer Gase, Fumarolen und thermischer Merkmale ist entscheidend für die Erkennung, wenn chemische Zusammensetzungen von normaler Variabilität abweichen. Diese Abweichungen gehen oft Eruptionen voraus und zeigen Änderungen in Magma-Entgasung, Temperatur oder Quellencharakteristika an.",
        nl: "Het vaststellen van baseline geochemische signaturen door lange-termijn monitoring van vulkanische gassen, fumarolen en thermische kenmerken is cruciaal voor het herkennen wanneer chemische samenstellingen afwijken van normale variabiliteit. Deze afwijkingen gaan vaak erupties vooraf en geven veranderingen in magma ontgassing, temperatuur, of bron karakteristieken aan."
      }
    },
    {
      question: {
        en: "How do emerging technologies like drone-based sensors revolutionize volcanic gas monitoring capabilities?",
        es: "¿Cómo las tecnologías emergentes como sensores basados en drones revolucionan capacidades de monitoreo de gases volcánicos?",
        de: "Wie revolutionieren aufkommende Technologien wie drohnenbasierte Sensoren vulkanische Gasüberwachungsfähigkeiten?",
        nl: "Hoe revolutioneren opkomende technologieën zoals drone-gebaseerde sensoren vulkanische gas monitoring mogelijkheden?"
      },
      options: [
        { en: "Drone platforms enable safe access to hazardous areas, high temporal resolution sampling, and spatial mapping of gas emissions", es: "Plataformas de drones permiten acceso seguro a áreas peligrosas, muestreo de alta resolución temporal, y mapeo espacial de emisiones de gases", de: "Drohnenplattformen ermöglichen sicheren Zugang zu gefährlichen Bereichen, hochaufgelöste zeitliche Probenahme und räumliche Kartierung von Gasemissionen", nl: "Drone platforms maken veilige toegang tot gevaarlijke gebieden mogelijk, hoge temporele resolutie bemonstering, en ruimtelijke kartering van gas emissies" },
        { en: "Drones cannot carry sophisticated gas analysis instruments", es: "Drones no pueden cargar instrumentos sofisticados de análisis de gases", de: "Drohnen können keine ausgeklügelten Gasanalyseinstrumente tragen", nl: "Drones kunnen geen geavanceerde gas analyse instrumenten dragen" },
        { en: "Ground-based monitoring is always more accurate than drone measurements", es: "Monitoreo terrestre es siempre más preciso que mediciones de drones", de: "Bodenbasierte Überwachung ist immer genauer als Drohnenmessungen", nl: "Grond-gebaseerde monitoring is altijd nauwkeuriger dan drone metingen" },
        { en: "Drone technology is too unreliable for volcanic monitoring", es: "Tecnología de drones es demasiado poco confiable para monitoreo volcánico", de: "Drohnentechnologie ist zu unzuverlässig für vulkanische Überwachung", nl: "Drone technologie is te onbetrouwbaar voor vulkanische monitoring" }
      ],
      correct: 0,
      explanation: {
        en: "Unmanned aerial vehicles equipped with miniaturized gas sensors, spectrometers, and thermal cameras can safely sample volcanic plumes in real-time, providing unprecedented spatial and temporal resolution of gas emissions. This technology enables monitoring of previously inaccessible areas and rapid response to changing volcanic activity.",
        es: "Vehículos aéreos no tripulados equipados con sensores de gas miniaturizados, espectrómetros y cámaras termales pueden muestrear penachos volcánicos de manera segura en tiempo real, proporcionando resolución espacial y temporal sin precedentes de emisiones de gases. Esta tecnología permite monitoreo de áreas previamente inaccesibles y respuesta rápida a actividad volcánica cambiante.",
        de: "Unbemannte Luftfahrzeuge ausgerüstet mit miniaturisierten Gassensoren, Spektrometern und Wärmekameras können vulkanische Schwaden sicher in Echtzeit beproben und bieten beispiellose räumliche und zeitliche Auflösung von Gasemissionen. Diese Technologie ermöglicht Überwachung zuvor unzugänglicher Bereiche und schnelle Reaktion auf sich ändernde vulkanische Aktivität.",
        nl: "Onbemande luchtvoertuigen uitgerust met geminiaturiseerde gassensoren, spectrometers en thermische camera's kunnen vulkanische pluimen veilig in real-time bemonsteren, ongekende ruimtelijke en temporele resolutie van gas emissies biedend. Deze technologie maakt monitoring van voorheen ontoegankelijke gebieden mogelijk en snelle reactie op veranderende vulkanische activiteit."
      }
    }
  ]
});