// Volcanology - Level 1: Volcanic Processes & Eruption Dynamics
(function() {
  const level1 = {
    name: {
      en: "Volcanic Processes & Eruption Dynamics",
      es: "Procesos Volcánicos y Dinámica de Erupciones",
      de: "Vulkanische Prozesse und Eruptionsdynamik",
      nl: "Vulkanische Processen en Eruptiedynamica"
    },
    questions: [
      {
        question: {
          en: "What is the fundamental difference between effusive and explosive volcanic eruptions?",
          es: "¿Cuál es la diferencia fundamental entre erupciones volcánicas efusivas y explosivas?",
          de: "Was ist der grundlegende Unterschied zwischen effusiven und explosiven Vulkanausbrüchen?",
          nl: "Wat is het fundamentele verschil tussen effusieve en explosieve vulkanische erupties?"
        },
        options: [
          { en: "Gas content and viscosity of the magma", es: "Contenido de gas y viscosidad del magma", de: "Gasgehalt und Viskosität des Magmas", nl: "Gasgehalte en viscositeit van het magma" },
          { en: "Depth of the magma chamber only", es: "Solo la profundidad de la cámara magmática", de: "Nur die Tiefe der Magmakammer", nl: "Alleen de diepte van de magmakamer" },
          { en: "Age of the volcano", es: "Edad del volcán", de: "Alter des Vulkans", nl: "Leeftijd van de vulkaan" },
          { en: "Location relative to plate boundaries", es: "Ubicación relativa a límites de placas", de: "Lage relativ zu Plattengrenzen", nl: "Locatie relatief tot plaatgrenzen" }
        ],
        correct: 0,
        explanation: {
          en: "The fundamental difference lies in gas content and magma viscosity. High-silica magmas with high gas content and viscosity tend to produce explosive eruptions because gases cannot escape easily, building pressure until violent release. Low-viscosity basaltic magmas allow gases to escape more readily, resulting in effusive eruptions with lava flows.",
          es: "La diferencia fundamental radica en el contenido de gas y la viscosidad del magma. Los magmas de alto contenido de sílice con alto contenido de gas y viscosidad tienden a producir erupciones explosivas porque los gases no pueden escapar fácilmente, acumulando presión hasta la liberación violenta. Los magmas basálticos de baja viscosidad permiten que los gases escapen más fácilmente, resultando en erupciones efusivas con flujos de lava.",
          de: "Der grundlegende Unterschied liegt im Gasgehalt und der Magmaviskosität. Silicareiche Magmen mit hohem Gasgehalt und hoher Viskosität neigen zu explosiven Ausbrüchen, weil Gase nicht leicht entweichen können und Druck aufbauen bis zur gewaltsamen Freisetzung. Niedrigviskose basaltische Magmen ermöglichen das leichtere Entweichen von Gasen, was zu effusiven Ausbrüchen mit Lavaströmen führt.",
          nl: "Het fundamentele verschil ligt in gasgehalte en magmaviscositeit. Silicarijke magma's met hoog gasgehalte en viscositeit neigen tot explosieve erupties omdat gassen niet gemakkelijk kunnen ontsnappen, druk opbouwend tot gewelddadige vrijmaking. Lage-viscositeit basaltische magma's staan toe dat gassen gemakkelijker ontsnappen, resulterend in effusieve erupties met lavastromen."
        }
      },
      {
        question: {
          en: "What role does volatile saturation play in magmatic processes?",
          es: "¿Qué papel juega la saturación de volátiles en los procesos magmáticos?",
          de: "Welche Rolle spielt die Volatilsättigung in magmatischen Prozessen?",
          nl: "Welke rol speelt vluchtige verzadiging in magmatische processen?"
        },
        options: [
          { en: "It controls gas exsolution and bubble nucleation during magma ascent", es: "Controla la exsolución de gas y nucleación de burbujas durante el ascenso del magma", de: "Sie kontrolliert Gasentlösung und Blasenkeimbildung während des Magmaaufstiegs", nl: "Het controleert gasuitscheiding en belvorming tijdens magma-opstijging" },
          { en: "It only affects lava color", es: "Solo afecta el color de la lava", de: "Sie beeinflusst nur die Lavafarbe", nl: "Het beïnvloedt alleen lavakleur" },
          { en: "It determines volcanic cone height", es: "Determina la altura del cono volcánico", de: "Sie bestimmt die Vulkankegelhöhe", nl: "Het bepaalt vulkaanse kegelhoogte" },
          { en: "It has no effect on eruption style", es: "No tiene efecto en el estilo de erupción", de: "Sie hat keinen Einfluss auf den Eruptionsstil", nl: "Het heeft geen effect op eruptiestijl" }
        ],
        correct: 0,
        explanation: {
          en: "Volatile saturation is crucial in controlling gas exsolution (the process where dissolved gases come out of solution) and bubble nucleation as magma ascends and pressure decreases. This process fundamentally controls eruption explosivity, as oversaturation leads to rapid gas expansion and potentially explosive fragmentation of the magma.",
          es: "La saturación de volátiles es crucial para controlar la exsolución de gases (el proceso donde los gases disueltos salen de la solución) y la nucleación de burbujas mientras el magma asciende y la presión disminuye. Este proceso controla fundamentalmente la explosividad de la erupción, ya que la sobresaturación lleva a la expansión rápida del gas y potencialmente fragmentación explosiva del magma.",
          de: "Volatilsättigung ist entscheidend für die Kontrolle der Gasentlösung (der Prozess, bei dem gelöste Gase aus der Lösung kommen) und Blasenkeimbildung, während Magma aufsteigt und der Druck abnimmt. Dieser Prozess kontrolliert grundlegend die Eruptionsexplosivität, da Übersättigung zu schneller Gasexpansion und potenziell explosiver Fragmentierung des Magmas führt.",
          nl: "Vluchtige verzadiging is cruciaal in het controleren van gasuitscheiding (het proces waarbij opgeloste gassen uit oplossing komen) en belvorming terwijl magma opstijgt en druk afneemt. Dit proces controleert fundamenteel eruptie-explosiviteit, omdat oververzadiging leidt tot snelle gasexpansie en potentieel explosieve fragmentatie van het magma."
        }
      },
      {
        question: {
          en: "What is the significance of the fragmentation threshold in volcanic eruptions?",
          es: "¿Cuál es la importancia del umbral de fragmentación en las erupciones volcánicas?",
          de: "Was ist die Bedeutung der Fragmentierungsschwelle bei Vulkanausbrüchen?",
          nl: "Wat is de betekenis van de fragmentatiedrempel in vulkanische erupties?"
        },
        options: [
          { en: "It determines the transition from effusive to explosive eruption behavior", es: "Determina la transición de comportamiento de erupción efusiva a explosiva", de: "Sie bestimmt den Übergang von effusivem zu explosivem Eruptionsverhalten", nl: "Het bepaalt de overgang van effusief naar explosief eruptiegedrag" },
          { en: "It only affects lava temperature", es: "Solo afecta la temperatura de la lava", de: "Sie beeinflusst nur die Lavatemperatur", nl: "Het beïnvloedt alleen lavatemperatuur" },
          { en: "It measures volcanic gas composition", es: "Mide la composición de gases volcánicos", de: "Sie misst die vulkanische Gaszusammensetzung", nl: "Het meet vulkanische gassamenstelling" },
          { en: "It determines magma chamber depth", es: "Determina la profundidad de la cámara magmática", de: "Sie bestimmt die Magmakammertiefe", nl: "Het bepaalt magmakamerdiepte" }
        ],
        correct: 0,
        explanation: {
          en: "The fragmentation threshold represents the critical gas volume fraction (typically 70-80%) where continuous magma breaks into discrete fragments due to gas expansion. This threshold marks the fundamental transition from effusive lava flow behavior to explosive pyroclastic behavior, controlling whether an eruption produces lava flows or explosive tephra deposits.",
          es: "El umbral de fragmentación representa la fracción crítica de volumen de gas (típicamente 70-80%) donde el magma continuo se rompe en fragmentos discretos debido a la expansión del gas. Este umbral marca la transición fundamental del comportamiento de flujo de lava efusivo al comportamiento piroclástico explosivo, controlando si una erupción produce flujos de lava o depósitos de tefra explosivos.",
          de: "Die Fragmentierungsschwelle repräsentiert den kritischen Gasvolumenanteil (typisch 70-80%), wo kontinuierliches Magma aufgrund von Gasexpansion in diskrete Fragmente zerbricht. Diese Schwelle markiert den grundlegenden Übergang von effusivem Lavastromverhalten zu explosivem pyroklastischem Verhalten und kontrolliert, ob ein Ausbruch Lavaströme oder explosive Tephra-Ablagerungen produziert.",
          nl: "De fragmentatiedrempel vertegenwoordigt de kritieke gasvolumebreuk (typisch 70-80%) waar continu magma breekt in discrete fragmenten door gasexpansie. Deze drempel markeert de fundamentele overgang van effusief lavastromgedrag naar explosief pyroklastisch gedrag, controlerend of een eruptie lavastromen of explosieve tephra-afzettingen produceert."
        }
      },
      {
        question: {
          en: "How do pyroclastic density currents differ from lava flows in their transport mechanisms?",
          es: "¿Cómo difieren las corrientes de densidad piroclástica de los flujos de lava en sus mecanismos de transporte?",
          de: "Wie unterscheiden sich pyroklastische Dichteströme von Lavaströmen in ihren Transportmechanismen?",
          nl: "Hoe verschillen pyroklastische dichtheidsstromen van lavastromen in hun transportmechanismen?"
        },
        options: [
          { en: "PDCs are gas-supported gravity currents, lava flows are viscous fluid flows", es: "Las PDCs son corrientes de gravedad soportadas por gas, los flujos de lava son flujos de fluido viscoso", de: "PDCs sind gasunterstützte Schwereströme, Lavaströme sind viskose Fluidströme", nl: "PDC's zijn gas-ondersteunde zwaartekrachtstromen, lavastromen zijn viskeuze vloeistofstromen" },
          { en: "They have identical transport mechanisms", es: "Tienen mecanismos de transporte idénticos", de: "Sie haben identische Transportmechanismen", nl: "Ze hebben identieke transportmechanismen" },
          { en: "PDCs move slower than lava flows", es: "Las PDCs se mueven más lento que los flujos de lava", de: "PDCs bewegen sich langsamer als Lavaströme", nl: "PDC's bewegen langzamer dan lavastromen" },
          { en: "Only temperature differences distinguish them", es: "Solo las diferencias de temperatura las distinguen", de: "Nur Temperaturunterschiede unterscheiden sie", nl: "Alleen temperatuurverschillen onderscheiden hen" }
        ],
        correct: 0,
        explanation: {
          en: "Pyroclastic density currents (PDCs) are gas-supported gravity currents where hot volcanic particles are suspended and transported by turbulent gas flow, allowing them to travel at high speeds (up to 200 m/s) and overcome topographic barriers. Lava flows are viscous fluid flows driven by gravitational forces, moving much slower and following topographic lows due to their coherent liquid nature.",
          es: "Las corrientes de densidad piroclástica (PDCs) son corrientes de gravedad soportadas por gas donde partículas volcánicas calientes están suspendidas y transportadas por flujo de gas turbulento, permitiéndoles viajar a altas velocidades (hasta 200 m/s) y superar barreras topográficas. Los flujos de lava son flujos de fluido viscoso impulsados por fuerzas gravitacionales, moviéndose mucho más lento y siguiendo depresiones topográficas debido a su naturaleza líquida coherente.",
          de: "Pyroklastische Dichteströme (PDCs) sind gasunterstützte Schwereströme, wo heiße vulkanische Partikel durch turbulente Gasströmung suspendiert und transportiert werden, wodurch sie mit hohen Geschwindigkeiten (bis zu 200 m/s) reisen und topographische Barrieren überwinden können. Lavaströme sind viskose Fluidströme, die durch Gravitationskräfte angetrieben werden, sich viel langsamer bewegen und topographischen Tiefen folgen aufgrund ihrer kohärenten flüssigen Natur.",
          nl: "Pyroklastische dichtheidsstromen (PDC's) zijn gas-ondersteunde zwaartekrachtstromen waar hete vulkanische deeltjes worden opgehangen en getransporteerd door turbulente gasstroom, waardoor ze met hoge snelheden kunnen reizen (tot 200 m/s) en topografische barrières kunnen overwinnen. Lavastromen zijn viskeuze vloeistofstromen gedreven door gravitatiekrachten, die veel langzamer bewegen en topografische laagte volgen vanwege hun coherente vloeibare natuur."
        }
      },
      {
        question: {
          en: "What controls the eruption column height in explosive volcanic eruptions?",
          es: "¿Qué controla la altura de la columna de erupción en erupciones volcánicas explosivas?",
          de: "Was kontrolliert die Eruptionssäulenhöhe bei explosiven Vulkanausbrüchen?",
          nl: "Wat controleert de eruptiekolomhoogte in explosieve vulkanische erupties?"
        },
        options: [
          { en: "Mass eruption rate and initial exit velocity of volcanic material", es: "Tasa de erupción de masa y velocidad de salida inicial del material volcánico", de: "Masseneruptionsrate und anfängliche Austrittsgeschwindigkeit des vulkanischen Materials", nl: "Massa-eruptiesnelheid en initiële uitgangssnelheid van vulkanisch materiaal" },
          { en: "Only wind speed and direction", es: "Solo velocidad y dirección del viento", de: "Nur Windgeschwindigkeit und -richtung", nl: "Alleen windsnelheid en -richting" },
          { en: "Magma chamber size exclusively", es: "Tamaño de cámara magmática exclusivamente", de: "Ausschließlich Magmakammergröße", nl: "Uitsluitend magmakamergrootte" },
          { en: "Time of day of the eruption", es: "Hora del día de la erupción", de: "Tageszeit des Ausbruchs", nl: "Tijdstip van de eruptie" }
        ],
        correct: 0,
        explanation: {
          en: "Eruption column height is primarily controlled by the mass eruption rate (amount of material ejected per unit time) and initial exit velocity, which determine the momentum and buoyancy of the rising volcanic plume. Higher mass eruption rates and velocities produce taller columns that can reach the stratosphere, while lower rates result in shorter columns that may collapse to form pyroclastic flows.",
          es: "La altura de la columna de erupción está controlada principalmente por la tasa de erupción de masa (cantidad de material expulsado por unidad de tiempo) y la velocidad de salida inicial, que determinan el momento y la flotabilidad de la pluma volcánica ascendente. Tasas de erupción de masa y velocidades más altas producen columnas más altas que pueden alcanzar la estratosfera, mientras que tasas más bajas resultan en columnas más cortas que pueden colapsar para formar flujos piroclásticos.",
          de: "Die Eruptionssäulenhöhe wird primär durch die Masseneruptionsrate (Menge an Material, das pro Zeiteinheit ausgestoßen wird) und die anfängliche Austrittsgeschwindigkeit kontrolliert, die Impuls und Auftrieb der aufsteigenden vulkanischen Wolke bestimmen. Höhere Masseneruptionsraten und Geschwindigkeiten produzieren höhere Säulen, die die Stratosphäre erreichen können, während niedrigere Raten zu kürzeren Säulen führen, die kollabieren und pyroklastische Ströme bilden können.",
          nl: "Eruptiekolomhoogte wordt primair gecontroleerd door de massa-eruptiesnelheid (hoeveelheid materiaal uitgestoten per tijdseenheid) en initiële uitgangssnelheid, die het momentum en drijfvermogen van de stijgende vulkanische pluim bepalen. Hogere massa-eruptiesnelheden en snelheden produceren hogere kolommen die de stratosfeer kunnen bereiken, terwijl lagere snelheden resulteren in kortere kolommen die kunnen instorten om pyroklastische stromen te vormen."
        }
      },
      {
        question: {
          en: "What role does water content play in determining magma viscosity and eruption style?",
          es: "¿Qué papel juega el contenido de agua en determinar la viscosidad del magma y el estilo de erupción?",
          de: "Welche Rolle spielt der Wassergehalt bei der Bestimmung der Magmaviskosität und des Eruptionsstils?",
          nl: "Welke rol speelt watergehalte in het bepalen van magmaviscositeit en eruptiestijl?"
        },
        options: [
          { en: "Water acts as a flux, dramatically reducing viscosity and promoting explosive degassing", es: "El agua actúa como flujo, reduciendo dramáticamente la viscosidad y promoviendo desgasificación explosiva", de: "Wasser wirkt als Flussmittel, reduziert drastisch die Viskosität und fördert explosive Entgasung", nl: "Water werkt als vloeimiddel, vermindert dramatisch de viscositeit en bevordert explosieve ontgassing" },
          { en: "Water only affects magma temperature", es: "El agua solo afecta la temperatura del magma", de: "Wasser beeinflusst nur die Magmatemperatur", nl: "Water beïnvloedt alleen magmatemperatuur" },
          { en: "Water increases magma density without other effects", es: "El agua aumenta la densidad del magma sin otros efectos", de: "Wasser erhöht die Magmadichte ohne andere Effekte", nl: "Water verhoogt magmadichtheid zonder andere effecten" },
          { en: "Water content has no influence on eruption dynamics", es: "El contenido de agua no influye en la dinámica de erupción", de: "Wassergehalt hat keinen Einfluss auf Eruptionsdynamik", nl: "Watergehalte heeft geen invloed op eruptiedynamica" }
        ],
        correct: 0,
        explanation: {
          en: "Water acts as a powerful flux in silicate melts, dramatically reducing viscosity by breaking Si-O bonds and creating a less polymerized melt structure. However, water's low solubility means it readily exsolves during decompression, creating gas bubbles that can drive explosive eruptions. This dual role makes water content crucial in determining both magma rheology and eruption explosivity.",
          es: "El agua actúa como un flujo poderoso en fundidos de silicato, reduciendo dramáticamente la viscosidad al romper enlaces Si-O y crear una estructura de fundido menos polimerizada. Sin embargo, la baja solubilidad del agua significa que se exsuelve fácilmente durante la descompresión, creando burbujas de gas que pueden impulsar erupciones explosivas. Este papel dual hace que el contenido de agua sea crucial para determinar tanto la reología del magma como la explosividad de la erupción.",
          de: "Wasser wirkt als kraftvolles Flussmittel in Silikatschmelzen, reduziert drastisch die Viskosität durch das Brechen von Si-O-Bindungen und schafft eine weniger polymerisierte Schmelzstruktur. Jedoch bedeutet die geringe Löslichkeit des Wassers, dass es leicht während der Dekompression entgast und Gasblasen bildet, die explosive Ausbrüche antreiben können. Diese duale Rolle macht den Wassergehalt entscheidend für die Bestimmung sowohl der Magmarheologie als auch der Eruptionsexplosivität.",
          nl: "Water werkt als krachtig vloeimiddel in silicaatsmelten, vermindert dramatisch de viscositeit door Si-O bindingen te breken en een minder gepolymeriseerde smeltstructuur te creëren. Echter, water's lage oplosbaarheid betekent dat het gemakkelijk ontgast tijdens decompressie, gasbubbels creërend die explosieve erupties kunnen aandrijven. Deze dubbele rol maakt watergehalte cruciaal in het bepalen van zowel magmareologie als eruptie-explosiviteit."
        }
      },
      {
        question: {
          en: "What is the significance of the volcanic explosivity index (VEI) in volcanological classification?",
          es: "¿Cuál es la importancia del índice de explosividad volcánica (VEI) en la clasificación vulcanológica?",
          de: "Was ist die Bedeutung des vulkanischen Explosivitätsindex (VEI) in der vulkanologischen Klassifikation?",
          nl: "Wat is de betekenis van de vulkanische explosiviteitsindex (VEI) in vulkanologische classificatie?"
        },
        options: [
          { en: "It provides a logarithmic scale combining tephra volume, column height, and eruption duration", es: "Proporciona una escala logarítmica combinando volumen de tefra, altura de columna y duración de erupción", de: "Er bietet eine logarithmische Skala, die Tephra-Volumen, Säulenhöhe und Eruptionsdauer kombiniert", nl: "Het biedt een logaritmische schaal die tephra-volume, kolomhoogte en eruptieduur combineert" },
          { en: "It only measures eruption temperature", es: "Solo mide la temperatura de erupción", de: "Er misst nur die Eruptionstemperatur", nl: "Het meet alleen eruptietemperatuur" },
          { en: "It counts the number of volcanic vents", es: "Cuenta el número de respiraderos volcánicos", de: "Er zählt die Anzahl vulkanischer Schlote", nl: "Het telt het aantal vulkanische openingen" },
          { en: "It measures only lava flow speed", es: "Mide solo la velocidad del flujo de lava", de: "Er misst nur die Lavastromgeschwindigkeit", nl: "Het meet alleen lavastromsnelheid" }
        ],
        correct: 0,
        explanation: {
          en: "The VEI is a logarithmic scale (0-8) that quantifies eruption magnitude by combining multiple parameters: tephra volume (primary criterion), eruption column height, eruption duration, and qualitative descriptions. Each unit represents a 10-fold increase in explosivity, making it invaluable for comparing eruptions across time and space, assessing volcanic hazards, and understanding eruption frequency-magnitude relationships.",
          es: "El VEI es una escala logarítmica (0-8) que cuantifica la magnitud de erupción combinando múltiples parámetros: volumen de tefra (criterio primario), altura de columna de erupción, duración de erupción y descripciones cualitativas. Cada unidad representa un aumento de 10 veces en explosividad, haciéndolo invaluable para comparar erupciones a través del tiempo y espacio, evaluar peligros volcánicos y entender relaciones de frecuencia-magnitud de erupción.",
          de: "Der VEI ist eine logarithmische Skala (0-8), die Eruptionsmagnitude durch Kombination mehrerer Parameter quantifiziert: Tephra-Volumen (primäres Kriterium), Eruptionssäulenhöhe, Eruptionsdauer und qualitative Beschreibungen. Jede Einheit repräsentiert eine 10-fache Zunahme der Explosivität, was ihn unschätzbar macht für den Vergleich von Ausbrüchen über Zeit und Raum, Bewertung vulkanischer Gefahren und Verständnis von Eruptionsfrequenz-Magnitudenbeziehungen.",
          nl: "De VEI is een logaritmische schaal (0-8) die eruptiemagnitude kwantificeert door meerdere parameters te combineren: tephra-volume (primair criterium), eruptiekolomhoogte, eruptieduur en kwalitatieve beschrijvingen. Elke eenheid vertegenwoordigt een 10-voudige toename in explosiviteit, waardoor het onschatbaar is voor het vergelijken van erupties door tijd en ruimte, beoordelen van vulkanische gevaren, en begrijpen van eruptiefrequentie-magnitude relaties."
        }
      },
      {
        question: {
          en: "How do volcanic gas emissions provide insights into magma chamber processes?",
          es: "¿Cómo proporcionan las emisiones de gases volcánicos información sobre los procesos de la cámara magmática?",
          de: "Wie bieten vulkanische Gasemissionen Einblicke in Magmakammerprozesse?",
          nl: "Hoe bieden vulkanische gasemissies inzichten in magmakamerprocessen?"
        },
        options: [
          { en: "Gas ratios reflect magma composition, degassing depth, and crystallization processes", es: "Las proporciones de gases reflejan composición del magma, profundidad de desgasificación y procesos de cristalización", de: "Gasverhältnisse reflektieren Magmazusammensetzung, Entgasungstiefe und Kristallisationsprozesse", nl: "Gasverhoudingen reflecteren magmasamenstelling, ontgassingsdiepte en kristallisatieprocessen" },
          { en: "Gases only indicate surface weather conditions", es: "Los gases solo indican condiciones meteorológicas superficiales", de: "Gase zeigen nur Oberflächenwetterbedingungen an", nl: "Gassen geven alleen oppervlakteweersomstandigheden aan" },
          { en: "All volcanic gases have identical compositions", es: "Todos los gases volcánicos tienen composiciones idénticas", de: "Alle vulkanischen Gase haben identische Zusammensetzungen", nl: "Alle vulkanische gassen hebben identieke samenstellingen" },
          { en: "Gas emissions are unrelated to magma properties", es: "Las emisiones de gas no están relacionadas con las propiedades del magma", de: "Gasemissionen stehen nicht im Zusammenhang mit Magmaeigenschaften", nl: "Gasemissies zijn niet gerelateerd aan magma-eigenschappen" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic gas ratios (CO2/SO2, H2S/SO2, etc.) provide crucial information about magma chamber processes. High CO2/SO2 ratios suggest deep degassing from CO2-rich fluids, while changing H2S/SO2 ratios indicate redox conditions and sulfur speciation. Gas flux changes can signal magma movement, and total gas output correlates with magma supply rate, making gas monitoring essential for eruption forecasting.",
          es: "Las proporciones de gases volcánicos (CO2/SO2, H2S/SO2, etc.) proporcionan información crucial sobre los procesos de la cámara magmática. Altas proporciones CO2/SO2 sugieren desgasificación profunda de fluidos ricos en CO2, mientras que proporciones cambiantes H2S/SO2 indican condiciones redox y especiación de azufre. Los cambios de flujo de gas pueden señalar movimiento de magma, y la salida total de gas se correlaciona con la tasa de suministro de magma, haciendo el monitoreo de gas esencial para pronóstico de erupciones.",
          de: "Vulkanische Gasverhältnisse (CO2/SO2, H2S/SO2, etc.) liefern entscheidende Informationen über Magmakammerprozesse. Hohe CO2/SO2-Verhältnisse deuten auf tiefe Entgasung aus CO2-reichen Fluiden hin, während sich ändernde H2S/SO2-Verhältnisse Redox-Bedingungen und Schwefelspeziation anzeigen. Gasflussänderungen können Magmabewegung signalisieren, und die Gesamtgasproduktion korreliert mit der Magmanachschubrate, was Gasüberwachung für Eruptionsvorhersagen wesentlich macht.",
          nl: "Vulkanische gasverhoudingen (CO2/SO2, H2S/SO2, etc.) bieden cruciale informatie over magmakamerprocessen. Hoge CO2/SO2 verhoudingen suggereren diepe ontgassing van CO2-rijke vloeistoffen, terwijl veranderende H2S/SO2 verhoudingen redox-omstandigheden en zwavelspeciatie aangeven. Gasstroomveranderingen kunnen magmabeweging signaleren, en totale gasoutput correleert met magmatoevoersnelheid, waardoor gasmonitoring essentieel is voor eruptievervoerzoging."
        }
      },
      {
        question: {
          en: "What determines the formation of different volcanic landforms?",
          es: "¿Qué determina la formación de diferentes formas de relieve volcánicas?",
          de: "Was bestimmt die Bildung verschiedener vulkanischer Landformen?",
          nl: "Wat bepaalt de vorming van verschillende vulkanische landvormen?"
        },
        options: [
          { en: "Magma composition, eruption style, and environmental conditions during eruption", es: "Composición del magma, estilo de erupción y condiciones ambientales durante la erupción", de: "Magmazusammensetzung, Eruptionsstil und Umweltbedingungen während der Eruption", nl: "Magmasamenstelling, eruptiestijl en omgevingsomstandigheden tijdens eruptie" },
          { en: "Only the age of the volcanic system", es: "Solo la edad del sistema volcánico", de: "Nur das Alter des vulkanischen Systems", nl: "Alleen de leeftijd van het vulkanische systeem" },
          { en: "Exclusively tectonic plate movement", es: "Exclusivamente movimiento de placas tectónicas", de: "Ausschließlich tektonische Plattenbewegung", nl: "Uitsluitend tektonische plaatbeweging" },
          { en: "Random geological processes", es: "Procesos geológicos aleatorios", de: "Zufällige geologische Prozesse", nl: "Willekeurige geologische processen" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic landforms result from the interaction of magma composition (affecting viscosity and gas content), eruption style (effusive vs. explosive), and environmental conditions (subaerial vs. subaqueous, climate). Shield volcanoes form from low-viscosity basaltic eruptions, stratovolcanoes from alternating explosive and effusive activity, and monogenetic cones from single eruptive episodes. Environmental factors like water interaction create additional landform variations.",
          es: "Las formas de relieve volcánicas resultan de la interacción de composición del magma (afectando viscosidad y contenido de gas), estilo de erupción (efusiva vs. explosiva), y condiciones ambientales (subaérea vs. subacuática, clima). Los volcanes escudo se forman de erupciones basálticas de baja viscosidad, estratovolcanes de actividad explosiva y efusiva alternante, y conos monogenéticos de episodios eruptivos únicos. Factores ambientales como interacción con agua crean variaciones adicionales de formas de relieve.",
          de: "Vulkanische Landformen resultieren aus der Wechselwirkung von Magmazusammensetzung (Viskosität und Gasgehalt beeinflussend), Eruptionsstil (effusiv vs. explosiv) und Umweltbedingungen (subaerisch vs. subaquatisch, Klima). Schildvulkane entstehen aus niedrigviskosen basaltischen Eruptionen, Stratovulkane aus wechselnder explosiver und effusiver Aktivität, und monogenetische Kegel aus einzelnen Eruptionsepisoden. Umweltfaktoren wie Wasserinteraktion schaffen zusätzliche Landformvariationen.",
          nl: "Vulkanische landvormen resulteren uit de interactie van magmasamenstelling (die viscositeit en gasgehalte beïnvloedt), eruptiestijl (effusief vs. explosief), en omgevingsomstandigheden (bovengronds vs. onderwater, klimaat). Schildvulkanen vormen uit lage-viscositeit basaltische erupties, stratovulkanen uit afwisselende explosieve en effusieve activiteit, en monogenetische kegels uit enkele eruptieve episodes. Omgevingsfactoren zoals waterinteractie creëren aanvullende landvormvariaties."
        }
      },
      {
        question: {
          en: "What is the relationship between magma chamber crystallization and eruption triggering mechanisms?",
          es: "¿Cuál es la relación entre la cristalización de la cámara magmática y los mecanismos de activación de erupciones?",
          de: "Was ist die Beziehung zwischen Magmakammer-Kristallisation und Eruptionsauslösemechanismen?",
          nl: "Wat is de relatie tussen magmakamer kristallisatie en eruptie-activeringsmechanismen?"
        },
        options: [
          { en: "Crystallization increases density and can destabilize magma chambers through convection and gas accumulation", es: "La cristalización aumenta la densidad y puede desestabilizar las cámaras magmáticas a través de convección y acumulación de gas", de: "Kristallisation erhöht die Dichte und kann Magmakammern durch Konvektion und Gasakkumulation destabilisieren", nl: "Kristallisatie verhoogt de dichtheid en kan magmakamers destabiliseren door convectie en gasaccumulatie" },
          { en: "Crystallization only affects magma color", es: "La cristalización solo afecta el color del magma", de: "Kristallisation beeinflusst nur die Magmafarbe", nl: "Kristallisatie beïnvloedt alleen magmakleur" },
          { en: "Crystals have no impact on eruption dynamics", es: "Los cristales no tienen impacto en la dinámica de erupción", de: "Kristalle haben keinen Einfluss auf Eruptionsdynamik", nl: "Kristallen hebben geen impact op eruptiedynamica" },
          { en: "Crystallization prevents all volcanic eruptions", es: "La cristalización previene todas las erupciones volcánicas", de: "Kristallisation verhindert alle vulkanischen Ausbrüche", nl: "Kristallisatie voorkomt alle vulkanische erupties" }
        ],
        correct: 0,
        explanation: {
          en: "Magma chamber crystallization plays a critical role in eruption triggering through several mechanisms: crystal fractionation increases residual melt density creating gravitational instabilities, crystal mush formation can trap volatiles leading to pressure buildup, and crystallization-driven convection can remobilize crystal mushes. Additionally, crystallization releases latent heat and can concentrate incompatible volatiles, both contributing to eruption triggering processes.",
          es: "La cristalización de la cámara magmática juega un papel crítico en la activación de erupciones a través de varios mecanismos: la fraccionación de cristales aumenta la densidad del fundido residual creando inestabilidades gravitacionales, la formación de papilla de cristal puede atrapar volátiles llevando a acumulación de presión, y la convección impulsada por cristalización puede remobilizar papillas de cristal. Además, la cristalización libera calor latente y puede concentrar volátiles incompatibles, ambos contribuyendo a procesos de activación de erupciones.",
          de: "Magmakammer-Kristallisation spielt eine kritische Rolle bei Eruptionsauslösung durch mehrere Mechanismen: Kristallfraktionierung erhöht die Restschmelzendichte und schafft Gravitationsinstabilitäten, Kristallbreibildung kann Volatile einfangen und zu Druckaufbau führen, und kristallisationsgetriebene Konvektion kann Kristallbreie remobilisieren. Zusätzlich setzt Kristallisation latente Wärme frei und kann inkompatible Volatile konzentrieren, beides trägt zu Eruptionsauslöseprozessen bei.",
          nl: "Magmakamer kristallisatie speelt een kritieke rol in eruptie-activering door verschillende mechanismen: kristalfractionering verhoogt resterende smelt dichtheid wat gravitationele instabiliteiten creëert, kristalpap vorming kan vluchtige stoffen vasthouden leidend tot drukopbouw, en kristallisatie-gedreven convectie kan kristalpap remobiliseren. Bovendien geeft kristallisatie latente warmte vrij en kan incompatibele vluchtige stoffen concentreren, beide bijdragend aan eruptie-activeringsprocessen."
        }
      },
      {
        question: {
          en: "How do magma mixing processes influence eruption dynamics and geochemical evolution?",
          es: "¿Cómo influyen los procesos de mezcla de magma en la dinámica de erupción y evolución geoquímica?",
          de: "Wie beeinflussen Magmamischungsprozesse die Eruptionsdynamik und geochemische Evolution?",
          nl: "Hoe beïnvloeden magmamengprocessen eruptiedynamica en geochemische evolutie?"
        },
        options: [
          { en: "Mixing can trigger eruptions through density changes and volatile redistribution", es: "La mezcla puede desencadenar erupciones a través de cambios de densidad y redistribución de volátiles", de: "Mischung kann Eruptionen durch Dichteänderungen und Volatilumverteilung auslösen", nl: "Menging kan erupties triggeren door dichtheidsveranderingen en vluchtige herverdelingT" },
          { en: "Mixing only affects magma color and temperature", es: "La mezcla solo afecta el color y temperatura del magma", de: "Mischung beeinflusst nur Magmafarbe und -temperatur", nl: "Menging beïnvloedt alleen magmakleur en -temperatuur" },
          { en: "Magma mixing is impossible due to density differences", es: "La mezcla de magma es imposible debido a diferencias de densidad", de: "Magmamischung ist aufgrund von Dichteunterschieden unmöglich", nl: "Magmamenging is onmogelijk door dichtheidsverschillen" },
          { en: "Mixing processes have no effect on eruption timing", es: "Los procesos de mezcla no tienen efecto en el tiempo de erupción", de: "Mischungsprozesse haben keinen Einfluss auf Eruptionszeitpunkt", nl: "Mengprocessen hebben geen effect op eruptietiming" }
        ],
        correct: 0,
        explanation: {
          en: "Magma mixing is a critical process that can trigger eruptions by creating density contrasts, inducing convection, and redistributing volatiles. When mafic magma intrudes into felsic chambers, rapid heating and volatile exsolution can destabilize the system. Mixing also produces hybrid magmas with intermediate compositions, creating textural and chemical disequilibrium features that are preserved in erupted products.",
          es: "La mezcla de magma es un proceso crítico que puede desencadenar erupciones al crear contrastes de densidad, inducir convección y redistribuir volátiles. Cuando el magma máfico se introduce en cámaras félsicas, el calentamiento rápido y la exsolución de volátiles pueden desestabilizar el sistema. La mezcla también produce magmas híbridos con composiciones intermedias, creando características de desequilibrio textural y químico que se preservan en productos eruptivos.",
          de: "Magmamischung ist ein kritischer Prozess, der Eruptionen durch Schaffung von Dichtekontrasten, Induktion von Konvektion und Umverteilung von Volatilen auslösen kann. Wenn mafisches Magma in felsische Kammern eindringt, können schnelle Erwärmung und Volatilentlösung das System destabilisieren. Mischung produziert auch hybride Magmen mit Zwischenzusammensetzungen, die texturelle und chemische Ungleichgewichtsmerkmale schaffen, die in eruptierten Produkten erhalten bleiben.",
          nl: "Magmamenging is een kritiek proces dat erupties kan triggeren door dichtheidscontrasten te creëren, convectie te induceren en vluchtige stoffen te herverdelen. Wanneer mafisch magma binnendringt in felsische kamers, kunnen snelle verwarming en vluchtige uitscheiding het systeem destabiliseren. Menging produceert ook hybride magma's met intermediaire samenstellingen, die texturele en chemische onevenwichtigheidskenmerken creëren die bewaard blijven in eruptieve producten."
        }
      },
      {
        question: {
          en: "What role does crustal assimilation play in magma evolution and eruption chemistry?",
          es: "¿Qué papel juega la asimilación cortical en la evolución del magma y la química de erupción?",
          de: "Welche Rolle spielt die Krustenassimilation bei der Magmaevolution und Eruptionschemie?",
          nl: "Welke rol speelt korstassimilatie in magma-evolutie en eruptiechemie?"
        },
        options: [
          { en: "Assimilation modifies isotopic signatures and can increase explosive potential through volatile addition", es: "La asimilación modifica firmas isotópicas y puede aumentar el potencial explosivo a través de adición de volátiles", de: "Assimilation modifiziert isotopische Signaturen und kann explosives Potenzial durch Volatilzugabe erhöhen", nl: "Assimilatie modificeert isotopische signaturen en kan explosief potentiaal verhogen door vluchtige toevoeging" },
          { en: "Crustal rocks cannot be assimilated by magmas", es: "Las rocas corticales no pueden ser asimiladas por magmas", de: "Krustengestein kann nicht von Magmen assimiliert werden", nl: "Korstgesteenten kunnen niet worden geassimileerd door magma's" },
          { en: "Assimilation only affects magma density", es: "La asimilación solo afecta la densidad del magma", de: "Assimilation beeinflusst nur die Magmadichte", nl: "Assimilatie beïnvloedt alleen magmadichtheid" },
          { en: "All magmas have identical crustal signatures", es: "Todos los magmas tienen firmas corticales idénticas", de: "Alle Magmen haben identische Krustensignaturen", nl: "Alle magma's hebben identieke korstensignaturen" }
        ],
        correct: 0,
        explanation: {
          en: "Crustal assimilation significantly impacts magma evolution by modifying major and trace element compositions, isotopic signatures (Sr, Nd, Pb), and volatile content. Assimilation of hydrous crustal rocks can increase water content, potentially enhancing explosive behavior. The process also affects crystallization sequences and can create compositional zonation in magma chambers, influencing eruption dynamics and hazard assessment.",
          es: "La asimilación cortical impacta significativamente la evolución del magma al modificar composiciones de elementos mayores y traza, firmas isotópicas (Sr, Nd, Pb) y contenido de volátiles. La asimilación de rocas corticales hidratadas puede aumentar el contenido de agua, potencialmente mejorando el comportamiento explosivo. El proceso también afecta secuencias de cristalización y puede crear zonificación composicional en cámaras magmáticas, influyendo en dinámica de erupción y evaluación de peligros.",
          de: "Krustenassimilation beeinflusst die Magmaevolution erheblich durch Modifikation von Haupt- und Spurenelementzusammensetzungen, isotopischen Signaturen (Sr, Nd, Pb) und Volatilgehalt. Assimilation von wasserhaltigen Krustengesteinen kann den Wassergehalt erhöhen und potenziell explosives Verhalten verstärken. Der Prozess beeinflusst auch Kristallisationssequenzen und kann kompositionelle Zonierung in Magmakammern schaffen, die Eruptionsdynamik und Gefahrenbewertung beeinflussen.",
          nl: "Korstassimilatie beïnvloedt magma-evolutie significant door het modificeren van hoofd- en spoorelement-samenstellingen, isotopische signaturen (Sr, Nd, Pb), en vluchtige inhoud. Assimilatie van waterrijke korstgesteenten kan watergehalte verhogen, potentieel explosief gedrag versterkend. Het proces beïnvloedt ook kristallisatiesequenties en kan compositionele zonering creëren in magmakamers, eruptiedynamica en gevarenbeoordelingen beïnvloedend."
        }
      },
      {
        question: {
          en: "How do volcanic conduit processes control eruption intensity and style transitions?",
          es: "¿Cómo controlan los procesos del conducto volcánico la intensidad de erupción y transiciones de estilo?",
          de: "Wie kontrollieren vulkanische Kanalprozesse Eruptionsintensität und Stilübergänge?",
          nl: "Hoe controleren vulkanische kanaalprocesen eruptie-intensiteit en stijlovergangen?"
        },
        options: [
          { en: "Conduit flow dynamics control degassing efficiency and fragmentation processes", es: "La dinámica de flujo del conducto controla la eficiencia de desgasificación y procesos de fragmentación", de: "Kanalflussdynamik kontrolliert Entgasungseffizienz und Fragmentierungsprozesse", nl: "Kanaalstroomdynamica controleert ontgassingsefficiëntie en fragmentatieprocessen" },
          { en: "Conduits have no influence on eruption behavior", es: "Los conductos no tienen influencia en el comportamiento de erupción", de: "Kanäle haben keinen Einfluss auf Eruptionsverhalten", nl: "Kanalen hebben geen invloed op eruptiegedrag" },
          { en: "All conduits produce identical eruption styles", es: "Todos los conductos producen estilos de erupción idénticos", de: "Alle Kanäle produzieren identische Eruptionsstile", nl: "Alle kanalen produceren identieke eruptiestijlen" },
          { en: "Conduit processes only affect lava temperature", es: "Los procesos del conducto solo afectan la temperatura de la lava", de: "Kanalprozesse beeinflussen nur die Lavatemperatur", nl: "Kanaalprocessen beïnvloeden alleen lavatemperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic conduit processes are crucial for controlling eruption dynamics through their influence on magma ascent rate, degassing efficiency, crystallization, and fragmentation. Narrow conduits promote high shear rates leading to effective degassing and effusive behavior, while rapid ascent through wide conduits can preserve gas content leading to explosive fragmentation. Conduit wall interactions, thermal effects, and pressure gradients all contribute to determining final eruption style.",
          es: "Los procesos del conducto volcánico son cruciales para controlar la dinámica de erupción a través de su influencia en la tasa de ascenso del magma, eficiencia de desgasificación, cristalización y fragmentación. Los conductos estrechos promueven altas tasas de cizallamiento llevando a desgasificación efectiva y comportamiento efusivo, mientras que el ascenso rápido a través de conductos anchos puede preservar el contenido de gas llevando a fragmentación explosiva. Las interacciones de paredes del conducto, efectos térmicos y gradientes de presión contribuyen a determinar el estilo final de erupción.",
          de: "Vulkanische Kanalprozesse sind entscheidend für die Kontrolle der Eruptionsdynamik durch ihren Einfluss auf Magmaaufstiegsrate, Entgasungseffizienz, Kristallisation und Fragmentierung. Enge Kanäle fördern hohe Scherraten, die zu effektiver Entgasung und effusivem Verhalten führen, während schneller Aufstieg durch breite Kanäle Gasgehalt bewahren und zu explosiver Fragmentierung führen kann. Kanalwandinteraktionen, thermische Effekte und Druckgradienten tragen alle zur Bestimmung des finalen Eruptionsstils bei.",
          nl: "Vulkanische kanaalprocessen zijn cruciaal voor het controleren van eruptiedynamica door hun invloed op magma-opstijgingssnelheid, ontgassingsefficiëntie, kristallisatie en fragmentatie. Smalle kanalen bevorderen hoge schuifsnelheden die leiden tot effectieve ontgassing en effusief gedrag, terwijl snelle opstijging door brede kanalen gasgehalte kan behouden leidend tot explosieve fragmentatie. Kanaalwandinteracties, thermische effecten en drukgradiënten dragen allemaal bij aan het bepalen van de uiteindelijke eruptiestijl."
        }
      },
      {
        question: {
          en: "What is the significance of phenocryst populations in understanding magma chamber dynamics?",
          es: "¿Cuál es la importancia de las poblaciones de fenocristales en entender la dinámica de la cámara magmática?",
          de: "Was ist die Bedeutung von Phenokristallpopulationen für das Verständnis der Magmakammerdynamik?",
          nl: "Wat is de betekenis van phenokristpopulaties in het begrijpen van magmakamerdynamica?"
        },
        options: [
          { en: "Phenocryst textures and compositions record pressure-temperature-time paths and mixing events", es: "Las texturas y composiciones de fenocristales registran caminos presión-temperatura-tiempo y eventos de mezcla", de: "Phenokristalltexturen und -zusammensetzungen zeichnen Druck-Temperatur-Zeit-Pfade und Mischungsereignisse auf", nl: "Phenokristtexturen en -samenstellingen registreren druk-temperatuur-tijd paden en menggebeurtenissen" },
          { en: "Phenocrysts are randomly distributed and provide no information", es: "Los fenocristales están distribuidos aleatoriamente y no proporcionan información", de: "Phenokristalle sind zufällig verteilt und liefern keine Informationen", nl: "Phenokristallen zijn willekeurig verdeeld en geven geen informatie" },
          { en: "All phenocrysts have identical compositions", es: "Todos los fenocristales tienen composiciones idénticas", de: "Alle Phenokristalle haben identische Zusammensetzungen", nl: "Alle phenokristallen hebben identieke samenstellingen" },
          { en: "Phenocrysts only form during eruption", es: "Los fenocristales solo se forman durante la erupción", de: "Phenokristalle bilden sich nur während der Eruption", nl: "Phenokristallen vormen alleen tijdens eruptie" }
        ],
        correct: 0,
        explanation: {
          en: "Phenocryst populations serve as archives of magma chamber processes, recording pressure-temperature-time evolution through their growth zonation, resorption textures, and compositional variations. Different crystal populations can indicate mixing events, chamber stratification, and residence times. Disequilibrium textures reveal rapid environmental changes, while crystal size distributions provide insights into nucleation and growth kinetics during magma evolution.",
          es: "Las poblaciones de fenocristales sirven como archivos de procesos de cámara magmática, registrando evolución presión-temperatura-tiempo a través de su zonificación de crecimiento, texturas de resorción y variaciones composicionales. Diferentes poblaciones de cristal pueden indicar eventos de mezcla, estratificación de cámara y tiempos de residencia. Las texturas de desequilibrio revelan cambios ambientales rápidos, mientras que las distribuciones de tamaño de cristal proporcionan perspectivas sobre nucleación y cinética de crecimiento durante evolución de magma.",
          de: "Phenokristallpopulationen dienen als Archive von Magmakammerprozessen und zeichnen Druck-Temperatur-Zeit-Evolution durch ihre Wachstumszonierung, Resorptionstexturen und kompositionelle Variationen auf. Verschiedene Kristallpopulationen können Mischungsereignisse, Kammerstratifikation und Verweilzeiten anzeigen. Ungleichgewichtstexturen offenbaren schnelle Umweltveränderungen, während Kristallgrößenverteilungen Einblicke in Keimbildungs- und Wachstumskinetik während Magmaevolution liefern.",
          nl: "Phenokristpopulaties dienen als archieven van magmakamerprocessen, druk-temperatuur-tijd evolutie registrerend door hun groeizonering, resorptietexturen en compositionele variaties. Verschillende kristalpopulaties kunnen menggebeurtenissen, kamerstratificatie en verblijftijden aangeven. Onevenwichtstexturen onthullen snelle omgevingsveranderingen, terwijl kristalgrootteverdelingen inzichten geven in nucleatie en groeikinetiek tijdens magma-evolutie."
        }
      },
      {
        question: {
          en: "How do thermomechanical interactions control caldera formation and collapse dynamics?",
          es: "¿Cómo controlan las interacciones termomecánicas la formación de calderas y dinámica de colapso?",
          de: "Wie kontrollieren thermomechanische Wechselwirkungen Kalderenbildung und Kollapsdynamik?",
          nl: "Hoe controleren thermomechanische interacties calderavorming en instortingsdynamica?"
        },
        options: [
          { en: "Magma withdrawal creates pressure imbalances leading to roof subsidence and ring fault activation", es: "La retirada de magma crea desequilibrios de presión llevando a subsidencia del techo y activación de fallas anulares", de: "Magmarückzug schafft Druckungleichgewichte, die zu Dachsenkung und Ringverwerfungsaktivierung führen", nl: "Magma-onttrekking creëert drukongelijkheden leidend tot dakdaling en ringbreukactivering" },
          { en: "Calderas form randomly without any controlling mechanisms", es: "Las calderas se forman aleatoriamente sin mecanismos de control", de: "Kalderen bilden sich zufällig ohne kontrollierende Mechanismen", nl: "Caldera's vormen willekeurig zonder controlerende mechanismen" },
          { en: "Only thermal processes control caldera formation", es: "Solo los procesos térmicos controlan la formación de calderas", de: "Nur thermische Prozesse kontrollieren Kalderenbildung", nl: "Alleen thermische processen controleren calderavorming" },
          { en: "Mechanical processes are unimportant for caldera dynamics", es: "Los procesos mecánicos no son importantes para la dinámica de calderas", de: "Mechanische Prozesse sind unwichtig für Kalderendynamik", nl: "Mechanische processen zijn onbelangrijk voor calderadynamica" }
        ],
        correct: 0,
        explanation: {
          en: "Caldera formation involves complex thermomechanical interactions where large-volume magma withdrawal during explosive eruptions creates pressure imbalances that exceed the structural capacity of the magma chamber roof. This triggers ring fault development and piecemeal or coherent collapse. The process is controlled by magma chamber geometry, crustal stress field, withdrawal rate, and pre-existing structural weaknesses, creating various caldera morphologies and collapse mechanisms.",
          es: "La formación de calderas involucra interacciones termomecánicas complejas donde la retirada de magma de gran volumen durante erupciones explosivas crea desequilibrios de presión que exceden la capacidad estructural del techo de la cámara magmática. Esto desencadena el desarrollo de fallas anulares y colapso fragmentario o coherente. El proceso está controlado por geometría de cámara magmática, campo de estrés cortical, tasa de retirada y debilidades estructurales preexistentes, creando varias morfologías de caldera y mecanismos de colapso.",
          de: "Kalderenbildung umfasst komplexe thermomechanische Wechselwirkungen, bei denen großvolumiger Magmarückzug während explosiver Eruptionen Druckungleichgewichte schafft, die die strukturelle Kapazität des Magmakammerdachs übersteigen. Dies löst Ringverwerfungsentwicklung und stückweisen oder kohärenten Kollaps aus. Der Prozess wird durch Magmakammergeometrie, krustales Spannungsfeld, Rückzugsrate und vorbestehende strukturelle Schwächen kontrolliert, wodurch verschiedene Kalderenmorphologien und Kollapsmechanismen entstehen.",
          nl: "Calderaformatie behelst complexe thermomechanische interacties waar grootvolume magma-onttrekking tijdens explosieve erupties drukongelijkheden creëert die de structurele capaciteit van het magmakamerdak overschrijden. Dit triggert ringbreukontwikkeling en fragmentaire of coherente instorting. Het proces wordt gecontroleerd door magmakamergeometrie, korstveld spanning, onttrekkingssnelheid en voorbestande structurele zwaktepunten, verschillende calderamorfologieën en instortingsmechanismen creërend."
        }
      },
      {
        question: {
          en: "What role do volatile phase equilibria play in determining eruption explosivity?",
          es: "¿Qué papel juegan los equilibrios de fases volátiles en determinar la explosividad de erupciones?",
          de: "Welche Rolle spielen Volatilphasengleichgewichte bei der Bestimmung der Eruptionsexplosivität?",
          nl: "Welke rol spelen vluchtige fase-evenwichten in het bepalen van eruptie-explosiviteit?"
        },
        options: [
          { en: "Phase equilibria control gas solubility, exsolution kinetics, and bubble growth rates", es: "Los equilibrios de fase controlan la solubilidad de gas, cinética de exsolución y tasas de crecimiento de burbujas", de: "Phasengleichgewichte kontrollieren Gaslöslichkeit, Entlösungskinetik und Blasenwachstumsraten", nl: "Fase-evenwichten controleren gasoplosbaarheid, uitscheidingskinetiek en belgroeisnelheden" },
          { en: "Phase equilibria only affect magma color", es: "Los equilibrios de fase solo afectan el color del magma", de: "Phasengleichgewichte beeinflussen nur die Magmafarbe", nl: "Fase-evenwichten beïnvloeden alleen magmakleur" },
          { en: "Volatile phases never reach equilibrium", es: "Las fases volátiles nunca alcanzan equilibrio", de: "Volatilphasen erreichen nie Gleichgewicht", nl: "Vluchtige fasen bereiken nooit evenwicht" },
          { en: "All magmas have identical volatile behavior", es: "Todos los magmas tienen comportamiento volátil idéntico", de: "Alle Magmen haben identisches Volatilverhalten", nl: "Alle magma's hebben identiek vluchtig gedrag" }
        ],
        correct: 0,
        explanation: {
          en: "Volatile phase equilibria fundamentally control eruption explosivity by governing gas solubility as functions of pressure, temperature, and composition. These equilibria determine when and how much gas exsolves during magma ascent, controlling bubble nucleation, growth, and coalescence rates. The kinetics of approach to equilibrium versus disequilibrium conditions directly influence whether gases can escape (effusive) or build overpressure (explosive).",
          es: "Los equilibrios de fases volátiles controlan fundamentalmente la explosividad de erupciones al gobernar la solubilidad de gas como funciones de presión, temperatura y composición. Estos equilibrios determinan cuándo y cuánto gas se exsuelve durante el ascenso del magma, controlando nucleación, crecimiento y tasas de coalescencia de burbujas. La cinética de aproximación a equilibrio versus condiciones de desequilibrio influye directamente en si los gases pueden escapar (efusivo) o construir sobrepresión (explosivo).",
          de: "Volatilphasengleichgewichte kontrollieren grundlegend die Eruptionsexplosivität durch Steuerung der Gaslöslichkeit als Funktionen von Druck, Temperatur und Zusammensetzung. Diese Gleichgewichte bestimmen, wann und wie viel Gas während des Magmaaufstiegs entlöst wird, wodurch Blasenkeimbildung, -wachstum und -koaleszenzraten kontrolliert werden. Die Kinetik der Annäherung an Gleichgewichts- versus Ungleichgewichtsbedingungen beeinflusst direkt, ob Gase entweichen (effusiv) oder Überdruck aufbauen können (explosiv).",
          nl: "Vluchtige fase-evenwichten controleren fundamenteel eruptie-explosiviteit door gasoplosbaarheid te besturen als functies van druk, temperatuur en samenstelling. Deze evenwichten bepalen wanneer en hoeveel gas uitscheidt tijdens magma-opstijging, belkernvorming, groei en coalescentiesnelheden controlerend. De kinetiek van benadering tot evenwicht versus onevenwichtsomstandigheden beïnvloedt direct of gassen kunnen ontsnappen (effusief) of overdruk opbouwen (explosief)."
        }
      },
      {
        question: {
          en: "How do eruption-fed pyroclastic flows differ from co-ignimbrite plumes in their transport and deposition mechanisms?",
          es: "¿Cómo difieren los flujos piroclásticos alimentados por erupciones de las plumas co-ignimbríticas en sus mecanismos de transporte y deposición?",
          de: "Wie unterscheiden sich eruptionsgespeiste pyroklastische Ströme von Co-Ignimbrit-Fahnen in ihren Transport- und Ablagerungsmechanismen?",
          nl: "Hoe verschillen eruptie-gevoede pyroklastische stromen van co-ignimbriet pluimen in hun transport- en afzettingsmechanismen?"
        },
        options: [
          { en: "PDCs are density-driven ground flows, co-ignimbrite plumes are buoyant thermal columns", es: "Los PDCs son flujos terrestres impulsados por densidad, las plumas co-ignimbríticas son columnas térmicas boyantes", de: "PDCs sind dichtegetriebene Bodenströme, Co-Ignimbrit-Fahnen sind auftriebsgetriebene Wärmesäulen", nl: "PDC's zijn dichtheid-gedreven grondstromen, co-ignimbriet pluimen zijn drijvende thermische kolommen" },
          { en: "Both phenomena have identical transport mechanisms", es: "Ambos fenómenos tienen mecanismos de transporte idénticos", de: "Beide Phänomene haben identische Transportmechanismen", nl: "Beide fenomenen hebben identieke transportmechanismen" },
          { en: "Co-ignimbrite plumes are denser than PDCs", es: "Las plumas co-ignimbríticas son más densas que los PDCs", de: "Co-Ignimbrit-Fahnen sind dichter als PDCs", nl: "Co-ignimbriet pluimen zijn dichter dan PDC's" },
          { en: "PDCs always travel upward", es: "Los PDCs siempre viajan hacia arriba", de: "PDCs reisen immer nach oben", nl: "PDC's reizen altijd naar boven" }
        ],
        correct: 0,
        explanation: {
          en: "Eruption-fed pyroclastic flows are negatively buoyant, density-driven gravity currents that travel along the ground surface, depositing material progressively during transport. Co-ignimbrite plumes form when PDCs heat and entrain air, becoming positively buoyant and rising convectively as thermal columns. These plumes can reach stratospheric heights and deposit fine ash over vast distances, representing complementary transport mechanisms from the same eruption.",
          es: "Los flujos piroclásticos alimentados por erupciones son corrientes de gravedad impulsadas por densidad con flotabilidad negativa que viajan a lo largo de la superficie del suelo, depositando material progresivamente durante el transporte. Las plumas co-ignimbríticas se forman cuando los PDCs calientan y arrastran aire, volviéndose positivamente boyantes y ascendiendo convectivamente como columnas térmicas. Estas plumas pueden alcanzar alturas estratosféricas y depositar ceniza fina sobre vastas distancias, representando mecanismos de transporte complementarios de la misma erupción.",
          de: "Eruptionsgespeiste pyroklastische Ströme sind negativ auftriebsgetriebene, dichtegetriebene Schwereströme, die entlang der Bodenoberfläche reisen und Material progressiv während des Transports ablagern. Co-Ignimbrit-Fahnen bilden sich, wenn PDCs Luft erhitzen und mitreißen, positiv auftriebsgetrieben werden und konvektiv als Wärmesäulen aufsteigen. Diese Fahnen können stratosphärische Höhen erreichen und feine Asche über weite Entfernungen ablagern, wodurch komplementäre Transportmechanismen aus derselben Eruption repräsentiert werden.",
          nl: "Eruptie-gevoede pyroklastische stromen zijn negatief drijvende, dichtheid-gedreven zwaartekrachtstromen die langs het grondoppervlak reizen, materiaal progressief afzettend tijdens transport. Co-ignimbriet pluimen vormen wanneer PDC's lucht verwarmen en meeslepen, positief drijvend wordend en convectief opstijgend als thermische kolommen. Deze pluimen kunnen stratosfeerische hoogten bereiken en fijne as over grote afstanden afzetten, complementaire transportmechanismen uit dezelfde eruptie vertegenwoordigend."
        }
      },
      {
        question: {
          en: "What controls the development of volcanic textures in rapidly quenched pyroclastic materials?",
          es: "¿Qué controla el desarrollo de texturas volcánicas en materiales piroclásticos rápidamente enfriados?",
          de: "Was kontrolliert die Entwicklung vulkanischer Texturen in schnell abgeschreckten pyroklastischen Materialien?",
          nl: "Wat controleert de ontwikkeling van vulkanische texturen in snel gekoelde pyroklastische materialen?"
        },
        options: [
          { en: "Cooling rate, vesicularity, and glass transition dynamics control texture development", es: "La tasa de enfriamiento, vesicularidad y dinámica de transición vítrea controlan el desarrollo de texturas", de: "Abkühlungsrate, Vesikularität und Glasübergangsdynamik kontrollieren Texturentwicklung", nl: "Afkoelingssnelheid, vesiculariteit en glastransitiedynamica controleren textuurontwikkeling" },
          { en: "All pyroclastic materials have identical textures", es: "Todos los materiales piroclásticos tienen texturas idénticas", de: "Alle pyroklastischen Materialien haben identische Texturen", nl: "Alle pyroklastische materialen hebben identieke texturen" },
          { en: "Textures only depend on eruption location", es: "Las texturas solo dependen de la ubicación de erupción", de: "Texturen hängen nur vom Eruptionsort ab", nl: "Texturen hangen alleen af van eruptielocatie" },
          { en: "Rapid cooling prevents any texture development", es: "El enfriamiento rápido previene cualquier desarrollo de textura", de: "Schnelle Abkühlung verhindert jede Texturentwicklung", nl: "Snelle koeling voorkomt elke textuurontwikkeling" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic texture development in rapidly quenched pyroclastic materials is controlled by the competition between cooling rate and relaxation processes. High vesicularity and cooling rates preserve non-equilibrium textures like pumiceous structures and glass. Rapid quenching through the glass transition prevents crystallization and preserves volatile-induced textures, while slower cooling allows for surface tension-driven bubble coalescence and textural modification.",
          es: "El desarrollo de texturas volcánicas en materiales piroclásticos rápidamente enfriados está controlado por la competencia entre tasa de enfriamiento y procesos de relajación. Alta vesicularidad y tasas de enfriamiento preservan texturas de no equilibrio como estructuras pumíceas y vidrio. El enfriamiento rápido a través de la transición vítrea previene cristalización y preserva texturas inducidas por volátiles, mientras que el enfriamiento más lento permite coalescencia de burbujas impulsada por tensión superficial y modificación textural.",
          de: "Vulkanische Texturentwicklung in schnell abgeschreckten pyroklastischen Materialien wird durch die Konkurrenz zwischen Abkühlungsrate und Relaxationsprozessen kontrolliert. Hohe Vesikularität und Abkühlungsraten bewahren Nicht-Gleichgewichtstexturen wie Bimssteinstrukturen und Glas. Schnelle Abschreckung durch den Glasübergang verhindert Kristallisation und bewahrt volatilinduzierte Texturen, während langsamere Abkühlung oberflächenspannungsgetriebene Blasenkoaleszenz und Texturmodifikation ermöglicht.",
          nl: "Vulkanische textuurontwikkeling in snel gekoelde pyroklastische materialen wordt gecontroleerd door de concurrentie tussen afkoelingssnelheid en relaxatieprocessen. Hoge vesiculariteit en afkoelingssnelheden behouden niet-evenwichtstexturen zoals puimsteenstructuren en glas. Snelle koeling door de glastransitie voorkomt kristallisatie en behoudt vluchtig-geïnduceerde texturen, terwijl langzamere koeling oppervlaktespanning-gedreven belcoalescentie en texturele modificatie mogelijk maakt."
        }
      },
      {
        question: {
          en: "How do syn-eruptive processes modify magma composition during ascent and eruption?",
          es: "¿Cómo modifican los procesos sin-eruptivos la composición del magma durante ascenso y erupción?",
          de: "Wie modifizieren syn-eruptive Prozesse die Magmazusammensetzung während Aufstieg und Eruption?",
          nl: "Hoe modificeren syn-eruptieve processen magmasamenstelling tijdens opstijging en eruptie?"
        },
        options: [
          { en: "Degassing, crystallization, and wall-rock interaction modify composition during transport", es: "Desgasificación, cristalización e interacción con roca de pared modifican composición durante transporte", de: "Entgasung, Kristallisation und Nebengesteininteraktion modifizieren Zusammensetzung während Transport", nl: "Ontgassing, kristallisatie en wandgesteeninteractie modificeren samenstelling tijdens transport" },
          { en: "Magma composition remains constant during eruption", es: "La composición del magma permanece constante durante la erupción", de: "Magmazusammensetzung bleibt während der Eruption konstant", nl: "Magmasamenstelling blijft constant tijdens eruptie" },
          { en: "Only temperature changes occur during ascent", es: "Solo ocurren cambios de temperatura durante el ascenso", de: "Nur Temperaturänderungen treten während des Aufstiegs auf", nl: "Alleen temperatuurveranderingen treden op tijdens opstijging" },
          { en: "Ascent processes have no effect on magma", es: "Los procesos de ascenso no tienen efecto en el magma", de: "Aufstiegsprozesse haben keinen Effekt auf Magma", nl: "Opstijgingsprocessen hebben geen effect op magma" }
        ],
        correct: 0,
        explanation: {
          en: "Syn-eruptive processes significantly modify magma composition through several mechanisms: degassing preferentially removes volatiles and affects dissolved species equilibria, decompression-induced crystallization changes major element chemistry and phase proportions, conduit wall interactions can assimilate country rock, and gas loss can concentrate non-volatile components. These processes create compositional gradients and temporal evolution during single eruptions.",
          es: "Los procesos sin-eruptivos modifican significativamente la composición del magma a través de varios mecanismos: la desgasificación remueve preferencialmente volátiles y afecta equilibrios de especies disueltas, la cristalización inducida por descompresión cambia la química de elementos mayores y proporciones de fases, las interacciones de paredes del conducto pueden asimilar roca encajante, y la pérdida de gas puede concentrar componentes no volátiles. Estos procesos crean gradientes composicionales y evolución temporal durante erupciones únicas.",
          de: "Syn-eruptive Prozesse modifizieren die Magmazusammensetzung erheblich durch mehrere Mechanismen: Entgasung entfernt bevorzugt Volatile und beeinflusst gelöste Speziesgleichgewichte, dekompressioninduzierte Kristallisation ändert Hauptelementchemie und Phasenanteile, Kanalwandinteraktionen können Nebengestein assimilieren, und Gasverlust kann nicht-volatile Komponenten konzentrieren. Diese Prozesse schaffen kompositionelle Gradienten und zeitliche Evolution während einzelner Eruptionen.",
          nl: "Syn-eruptieve processen modificeren magmasamenstelling significant door verschillende mechanismen: ontgassing verwijdert bij voorkeur vluchtige stoffen en beïnvloedt opgeloste soorten evenwichten, decompressie-geïnduceerde kristallisatie verandert hoofdelement chemie en faseproporties, kanaalwandinteracties kunnen landgesteente assimileren, en gasverlies kan niet-vluchtige componenten concentreren. Deze processen creëren compositionele gradiënten en temporele evolutie tijdens enkele erupties."
        }
      },
      {
        question: {
          en: "What role does magma chamber convection play in homogenization and differentiation processes?",
          es: "¿Qué papel juega la convección de la cámara magmática en procesos de homogeneización y diferenciación?",
          de: "Welche Rolle spielt Magmakammerkonvektion bei Homogenisierungs- und Differenzierungsprozessen?",
          nl: "Welke rol speelt magmakamerconvectie in homogenisatie- en differentiatie processen?"
        },
        options: [
          { en: "Convection can either homogenize compositions or maintain stratification depending on vigor", es: "La convección puede homogeneizar composiciones o mantener estratificación dependiendo del vigor", de: "Konvektion kann entweder Zusammensetzungen homogenisieren oder Stratifikation aufrechterhalten, abhängig von der Intensität", nl: "Convectie kan samenstellingen homogeniseren of stratificatie handhaven afhankelijk van kracht" },
          { en: "Convection only occurs in small magma bodies", es: "La convección solo ocurre en cuerpos magmáticos pequeños", de: "Konvektion tritt nur in kleinen Magmakörpern auf", nl: "Convectie treedt alleen op in kleine magmalichamen" },
          { en: "All magma chambers have vigorous convection", es: "Todas las cámaras magmáticas tienen convección vigorosa", de: "Alle Magmakammern haben starke Konvektion", nl: "Alle magmakamers hebben krachtige convectie" },
          { en: "Convection has no effect on magma composition", es: "La convección no tiene efecto en la composición del magma", de: "Konvektion hat keinen Effekt auf Magmazusammensetzung", nl: "Convectie heeft geen effect op magmasamenstelling" }
        ],
        correct: 0,
        explanation: {
          en: "Magma chamber convection plays a dual role in petrogenetic processes. Vigorous thermal or compositional convection can homogenize magma chambers, preventing significant differentiation and creating uniform compositions. However, weak convection or convective layering can maintain or enhance compositional stratification, promoting fractional crystallization and creating zoned magma chambers. The balance depends on thermal gradients, viscosity contrasts, and chamber geometry.",
          es: "La convección de cámara magmática juega un papel dual en procesos petrogenéticos. La convección térmica o composicional vigorosa puede homogeneizar cámaras magmáticas, previniendo diferenciación significativa y creando composiciones uniformes. Sin embargo, convección débil o estratificación convectiva puede mantener o mejorar estratificación composicional, promoviendo cristalización fraccionada y creando cámaras magmáticas zonificadas. El equilibrio depende de gradientes térmicos, contrastes de viscosidad y geometría de cámara.",
          de: "Magmakammerkonvektion spielt eine duale Rolle in petrogenetischen Prozessen. Starke thermische oder kompositionelle Konvektion kann Magmakammern homogenisieren, signifikante Differenzierung verhindern und einheitliche Zusammensetzungen schaffen. Jedoch kann schwache Konvektion oder konvektive Schichtung kompositionelle Stratifikation aufrechterhalten oder verstärken, fraktionierte Kristallisation fördern und zonierte Magmakammern schaffen. Das Gleichgewicht hängt von Temperaturgradienten, Viskositätskontrasten und Kammergeometrie ab.",
          nl: "Magmakamerconvectie speelt een dubbele rol in petrogenetische processen. Krachtige thermische of compositionele convectie kan magmakamers homogeniseren, significante differentiatie voorkomend en uniforme samenstellingen creërend. Echter, zwakke convectie of convectieve gelaagdheid kan compositionele stratificatie handhaven of versterken, fractionele kristallisatie bevorderend en gezoneerde magmakamers creërend. De balans hangt af van thermische gradiënten, viscositeitscontrasten en kamergeometrie."
        }
      },
      {
        question: {
          en: "How do volcanic ash particle morphologies reflect fragmentation mechanisms and transport processes?",
          es: "¿Cómo reflejan las morfologías de partículas de ceniza volcánica los mecanismos de fragmentación y procesos de transporte?",
          de: "Wie spiegeln vulkanische Aschepartikelmorphologien Fragmentierungsmechanismen und Transportprozesse wider?",
          nl: "Hoe reflecteren vulkanische asdeeltjesmorfologieën fragmentatiemechanismen en transportprocessen?"
        },
        options: [
          { en: "Particle shape, surface textures, and size distributions record fragmentation energy and transport history", es: "Forma de partícula, texturas superficiales y distribuciones de tamaño registran energía de fragmentación e historia de transporte", de: "Partikelform, Oberflächentexturen und Größenverteilungen zeichnen Fragmentierungsenergie und Transportgeschichte auf", nl: "Deeltjesvorm, oppervlaktetexturen en grootteverdelingen registreren fragmentatie-energie en transportgeschiedenis" },
          { en: "All ash particles have identical morphologies", es: "Todas las partículas de ceniza tienen morfologías idénticas", de: "Alle Aschepartikel haben identische Morphologien", nl: "Alle asdeeltjes hebben identieke morfologieën" },
          { en: "Particle morphology is unrelated to eruption processes", es: "La morfología de partículas no está relacionada con procesos de erupción", de: "Partikelmorphologie steht nicht im Zusammenhang mit Eruptionsprozessen", nl: "Deeltjesmorfologie is niet gerelateerd aan eruptieprocessen" },
          { en: "Only chemical composition affects particle properties", es: "Solo la composición química afecta las propiedades de partículas", de: "Nur chemische Zusammensetzung beeinflusst Partikeleigenschaften", nl: "Alleen chemische samenstelling beïnvloedt deeltjeseigenschappen" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic ash particle morphologies provide crucial information about fragmentation mechanisms and transport processes. Angular, blocky particles indicate brittle fragmentation, while fluidal shapes suggest ductile deformation. Surface textures reveal cooling histories, while grain size distributions reflect fragmentation efficiency and transport sorting. Vesicularity patterns record degassing processes, and surface modifications indicate abrasion during transport.",
          es: "Las morfologías de partículas de ceniza volcánica proporcionan información crucial sobre mecanismos de fragmentación y procesos de transporte. Partículas angulares y blocosas indican fragmentación frágil, mientras que formas fluidales sugieren deformación dúctil. Las texturas superficiales revelan historias de enfriamiento, mientras que las distribuciones de tamaño de grano reflejan eficiencia de fragmentación y clasificación de transporte. Los patrones de vesicularidad registran procesos de desgasificación, y las modificaciones superficiales indican abrasión durante el transporte.",
          de: "Vulkanische Aschepartikelmorphologien liefern entscheidende Informationen über Fragmentierungsmechanismen und Transportprozesse. Eckige, blockige Partikel zeigen spröde Fragmentierung an, während fluidale Formen duktile Verformung nahelegen. Oberflächentexturen offenbaren Abkühlungsgeschichten, während Korngrößenverteilungen Fragmentierungseffizienz und Transportsortierung reflektieren. Vesikularitätsmuster zeichnen Entgasungsprozesse auf, und Oberflächenmodifikationen zeigen Abrieb während des Transports an.",
          nl: "Vulkanische asdeeltjesmorfologieën bieden cruciale informatie over fragmentatiemechanismen en transportprocessen. Hoekige, blokachtige deeltjes wijzen op brosse fragmentatie, terwijl vloeibare vormen ductiele vervorming suggereren. Oppervlaktetexturen onthullen afkoelingsgeschiedenissen, terwijl korrelgrootteverdelingen fragmentatie-efficiëntie en transportsortering reflecteren. Vesiculariteitspatronen registreren ontgassingsprocessen, en oppervlaktewijzigingen wijzen op slijtage tijdens transport."
        }
      },
      {
        question: {
          en: "What controls the transition between different volcanic eruption styles within single eruptive episodes?",
          es: "¿Qué controla la transición entre diferentes estilos de erupción volcánica dentro de episodios eruptivos únicos?",
          de: "Was kontrolliert den Übergang zwischen verschiedenen vulkanischen Eruptionsstilen innerhalb einzelner Eruptionsepisoden?",
          nl: "Wat controleert de overgang tussen verschillende vulkanische eruptiestijlen binnen enkele eruptieve episodes?"
        },
        options: [
          { en: "Changes in magma supply rate, gas content, and conduit dynamics control style transitions", es: "Cambios en tasa de suministro de magma, contenido de gas y dinámica del conducto controlan transiciones de estilo", de: "Änderungen in Magmanachschubrate, Gasgehalt und Kanaldynamik kontrollieren Stilübergänge", nl: "Veranderingen in magmatoevoersnelheid, gasgehalte en kanaal dynamica controleren stijlovergangen" },
          { en: "Eruption style never changes during single episodes", es: "El estilo de erupción nunca cambia durante episodios únicos", de: "Eruptionsstil ändert sich nie während einzelner Episoden", nl: "Eruptiestijl verandert nooit tijdens enkele episodes" },
          { en: "Only external factors control style changes", es: "Solo factores externos controlan cambios de estilo", de: "Nur externe Faktoren kontrollieren Stiländerungen", nl: "Alleen externe factoren controleren stijlveranderingen" },
          { en: "Time is the only factor affecting eruption style", es: "El tiempo es el único factor que afecta el estilo de erupción", de: "Zeit ist der einzige Faktor, der den Eruptionsstil beeinflusst", nl: "Tijd is de enige factor die eruptiestijl beïnvloedt" }
        ],
        correct: 0,
        explanation: {
          en: "Eruption style transitions within single eruptive episodes are controlled by evolving magma system conditions. Decreasing gas content can shift explosive to effusive behavior, changing magma supply rates affect column stability and PDC generation, evolving conduit geometry influences degassing efficiency, and magma chamber zonation can produce compositionally-driven style changes. These transitions reflect the dynamic nature of magma transport and storage systems.",
          es: "Las transiciones de estilo de erupción dentro de episodios eruptivos únicos están controladas por condiciones evolutivas del sistema magmático. La disminución del contenido de gas puede cambiar comportamiento explosivo a efusivo, las tasas cambiantes de suministro de magma afectan estabilidad de columna y generación de PDC, la geometría evolutiva del conducto influye en eficiencia de desgasificación, y la zonificación de cámara magmática puede producir cambios de estilo impulsados composicionalmente. Estas transiciones reflejan la naturaleza dinámica de sistemas de transporte y almacenamiento de magma.",
          de: "Eruptionsstilübergänge innerhalb einzelner Eruptionsepisoden werden durch sich entwickelnde Magmasystembedingungen kontrolliert. Abnehmender Gasgehalt kann explosives zu effusivem Verhalten verschieben, sich ändernde Magmanachschubraten beeinflussen Säulenstabilität und PDC-Generierung, sich entwickelnde Kanalgeometrie beeinflusst Entgasungseffizienz, und Magmakammerzonierung kann kompositionell getriebene Stiländerungen produzieren. Diese Übergänge reflektieren die dynamische Natur von Magmatransport- und -speichersystemen.",
          nl: "Eruptiestijlovergangen binnen enkele eruptieve episodes worden gecontroleerd door evoluerende magmasysteemcondities. Afnemend gasgehalte kan explosief naar effusief gedrag verschuiven, veranderende magmatoevoersnelheden beïnvloeden kolomstabiliteit en PDC-generatie, evoluerende kanaalgeometrie beïnvloedt ontgassingsefficiëntie, en magmakamerzonering kan compositioneel-gedreven stijlveranderingen produceren. Deze overgangen reflecteren de dynamische natuur van magmatransport- en opslagsystemen."
        }
      },
      {
        question: {
          en: "How do hydrothermal alteration processes affect volcanic rock properties and eruption hazards?",
          es: "¿Cómo afectan los procesos de alteración hidrotermal las propiedades de rocas volcánicas y peligros de erupción?",
          de: "Wie beeinflussen hydrothermale Alterationsprozesse vulkanische Gesteineigenschaften und Eruptionsgefahren?",
          nl: "Hoe beïnvloeden hydrothermale alteratieprocessen vulkanische gesteenteeigenschappen en eruptiegevaren?"
        },
        options: [
          { en: "Alteration weakens rocks and can enhance collapse potential while creating new mineral assemblages", es: "La alteración debilita rocas y puede mejorar potencial de colapso mientras crea nuevos ensamblajes minerales", de: "Alteration schwächt Gesteine und kann Kollapspotenzial verstärken während neue Mineralvergesellschaftungen entstehen", nl: "Alteratie verzwakt gesteenten en kan instortpotentiaal versterken terwijl nieuwe mineraalassemblages ontstaan" },
          { en: "Hydrothermal processes only affect mineral colors", es: "Los procesos hidrotermales solo afectan colores minerales", de: "Hydrothermale Prozesse beeinflussen nur Mineralfarben", nl: "Hydrothermale processen beïnvloeden alleen mineraalkleuren" },
          { en: "Altered rocks are always stronger than fresh rocks", es: "Las rocas alteradas son siempre más fuertes que rocas frescas", de: "Alterierte Gesteine sind immer stärker als frische Gesteine", nl: "Gealtereerde gesteenten zijn altijd sterker dan verse gesteenten" },
          { en: "Alteration has no impact on volcanic hazards", es: "La alteración no tiene impacto en peligros volcánicos", de: "Alteration hat keinen Einfluss auf vulkanische Gefahren", nl: "Alteratie heeft geen impact op vulkanische gevaren" }
        ],
        correct: 0,
        explanation: {
          en: "Hydrothermal alteration significantly affects volcanic systems by chemically and physically modifying rocks through fluid-rock interaction. Alteration typically weakens rock strength through mineral replacement and dissolution, increasing susceptibility to landslides and sector collapse. Clay mineral formation can create impermeable barriers affecting groundwater flow and hydrothermal systems. Alteration also creates new mineral assemblages that record thermal and chemical histories of volcanic systems.",
          es: "La alteración hidrotermal afecta significativamente sistemas volcánicos al modificar química y físicamente rocas a través de interacción fluido-roca. La alteración típicamente debilita la resistencia de roca a través de reemplazo mineral y disolución, aumentando susceptibilidad a deslizamientos de tierra y colapso sectorial. La formación de minerales arcillosos puede crear barreras impermeables afectando flujo de agua subterránea y sistemas hidrotermales. La alteración también crea nuevos ensamblajes minerales que registran historias térmicas y químicas de sistemas volcánicos.",
          de: "Hydrothermale Alteration beeinflusst vulkanische Systeme erheblich durch chemische und physikalische Modifikation von Gesteinen durch Fluid-Gestein-Wechselwirkung. Alteration schwächt typischerweise Gesteinsfestigkeit durch Mineralersatz und Auflösung, wodurch Anfälligkeit für Erdrutsche und Sektorkollaps erhöht wird. Tonmineralbildung kann undurchlässige Barrieren schaffen, die Grundwasserfluss und hydrothermale Systeme beeinflussen. Alteration schafft auch neue Mineralvergesellschaftungen, die thermische und chemische Geschichten vulkanischer Systeme aufzeichnen.",
          nl: "Hydrothermale alteratie beïnvloedt vulkanische systemen significant door chemische en fysieke modificatie van gesteenten door vloeistof-gesteeninteractie. Alteratie verzwakt typisch gesteentesterkte door mineraalvervanging en oplossing, vatbaarheid voor aardverschuivingen en sectorinstorting verhogend. Kleimineraalvorming kan ondoordringbare barrières creëren die grondwaterstroom en hydrothermale systemen beïnvloeden. Alteratie creëert ook nieuwe mineraalassemblages die thermische en chemische geschiedenissen van vulkanische systemen registreren."
        }
      },
      {
        question: {
          en: "What role do deep crustal processes play in controlling long-term volcanic evolution and magma genesis?",
          es: "¿Qué papel juegan los procesos corticales profundos en controlar evolución volcánica a largo plazo y génesis de magma?",
          de: "Welche Rolle spielen tiefe Krustenprozesse bei der Kontrolle langfristiger vulkanischer Evolution und Magmagenese?",
          nl: "Welke rol spelen diepe korstprocessen in het controleren van lange-termijn vulkanische evolutie en magmagenese?"
        },
        options: [
          { en: "Deep crustal processes control MASH zone dynamics, regional thermal structure, and melt production rates", es: "Los procesos corticales profundos controlan dinámica de zona MASH, estructura térmica regional y tasas de producción de fundido", de: "Tiefe Krustenprozesse kontrollieren MASH-Zonendynamik, regionale Thermalstruktur und Schmelzproduktionsraten", nl: "Diepe korstprocessen controleren MASH-zone dynamica, regionale thermische structuur en smeltproductiesnelheden" },
          { en: "Deep processes have no influence on surface volcanism", es: "Los procesos profundos no tienen influencia en vulcanismo superficial", de: "Tiefe Prozesse haben keinen Einfluss auf Oberflächenvulkanismus", nl: "Diepe processen hebben geen invloed op oppervlaktevulkanisme" },
          { en: "Only shallow processes affect volcanic systems", es: "Solo los procesos superficiales afectan sistemas volcánicos", de: "Nur oberflächliche Prozesse beeinflussen vulkanische Systeme", nl: "Alleen oppervlakkige processen beïnvloeden vulkanische systemen" },
          { en: "Deep crustal composition never changes", es: "La composición cortical profunda nunca cambia", de: "Tiefe Krustenzusammensetzung ändert sich nie", nl: "Diepe korstsamenstelling verandert nooit" }
        ],
        correct: 0,
        explanation: {
          en: "Deep crustal processes fundamentally control long-term volcanic evolution through several mechanisms. MASH (Melting, Assimilation, Storage, Homogenization) zone processes in the lower crust modify ascending magmas and control differentiation pathways. Regional thermal structure influences melt generation rates and magma transport efficiency. Crustal architecture affects stress fields and preferential intrusion pathways, while deep crustal composition determines the extent of assimilation and contamination processes.",
          es: "Los procesos corticales profundos controlan fundamentalmente la evolución volcánica a largo plazo a través de varios mecanismos. Los procesos de zona MASH (Fusión, Asimilación, Almacenamiento, Homogeneización) en la corteza inferior modifican magmas ascendentes y controlan caminos de diferenciación. La estructura térmica regional influye en tasas de generación de fundido y eficiencia de transporte de magma. La arquitectura cortical afecta campos de estrés y caminos de intrusión preferencial, mientras que la composición cortical profunda determina la extensión de procesos de asimilación y contaminación.",
          de: "Tiefe Krustenprozesse kontrollieren die langfristige vulkanische Evolution fundamental durch mehrere Mechanismen. MASH (Melting, Assimilation, Storage, Homogenization) Zonenprozesse in der unteren Kruste modifizieren aufsteigende Magmen und kontrollieren Differenzierungswege. Regionale Thermalstruktur beeinflusst Schmelzgenerationsraten und Magmatransporteffizienz. Krustenarchitektur beeinflusst Spannungsfelder und bevorzugte Intrusionswege, während tiefe Krustenzusammensetzung das Ausmaß von Assimilations- und Kontaminationsprozessen bestimmt.",
          nl: "Diepe korstprocessen controleren lange-termijn vulkanische evolutie fundamenteel door verschillende mechanismen. MASH (Melting, Assimilation, Storage, Homogenization) zoneprocessen in de onderste korst modificeren opstijgende magma's en controleren differentiatiepaden. Regionale thermische structuur beïnvloedt smeltgeneratiesnelheden en magmatransportefficiëntie. Korstarchitectuur beïnvloedt spanningsvelden en preferentiële intrusiewegen, terwijl diepe korstsamenstelling de mate van assimilatie- en contaminatieprocessen bepaalt."
        }
      },
      {
        question: {
          en: "How do eruptive tremor signals relate to magma transport dynamics and eruption forecasting?",
          es: "¿Cómo se relacionan las señales de tremor eruptivo con la dinámica de transporte de magma y pronóstico de erupciones?",
          de: "Wie stehen eruptive Tremorsignale in Beziehung zu Magmatransportdynamik und Eruptionsvorhersage?",
          nl: "Hoe verhouden eruptieve tremorsignalen zich tot magmatransportdynamica en eruptievoorspelling?"
        },
        options: [
          { en: "Tremor reflects fluid flow dynamics, gas exsolution, and fragmentation processes during magma transport", es: "El tremor refleja dinámica de flujo de fluido, exsolución de gas y procesos de fragmentación durante transporte de magma", de: "Tremor reflektiert Fluidflussdynamik, Gasentlösung und Fragmentierungsprozesse während Magmatransport", nl: "Tremor reflecteert vloeistofstroomdynamica, gasuitscheiding en fragmentatieprocessen tijdens magmatransport" },
          { en: "Tremor signals are unrelated to volcanic processes", es: "Las señales de tremor no están relacionadas con procesos volcánicos", de: "Tremorsignale stehen nicht im Zusammenhang mit vulkanischen Prozessen", nl: "Tremorsignalen zijn niet gerelateerd aan vulkanische processen" },
          { en: "All tremor has identical characteristics regardless of volcano", es: "Todo tremor tiene características idénticas independientemente del volcán", de: "Aller Tremor hat identische Eigenschaften unabhängig vom Vulkan", nl: "Alle tremor heeft identieke kenmerken ongeacht de vulkaan" },
          { en: "Tremor only occurs after eruptions end", es: "El tremor solo ocurre después de que terminan las erupciones", de: "Tremor tritt nur nach Ende von Eruptionen auf", nl: "Tremor treedt alleen op nadat erupties eindigen" }
        ],
        correct: 0,
        explanation: {
          en: "Eruptive tremor provides real-time insights into magma transport processes and is crucial for eruption forecasting. Tremor signals reflect turbulent fluid flow in conduits, gas bubble dynamics during ascent, magma fragmentation processes, and conduit resonance effects. Spectral characteristics can indicate eruption style transitions, while amplitude variations correlate with mass discharge rates. Tremor monitoring helps distinguish between effusive and explosive phases and provides early warning of eruption onset or cessation.",
          es: "El tremor eruptivo proporciona perspectivas en tiempo real sobre procesos de transporte de magma y es crucial para pronóstico de erupciones. Las señales de tremor reflejan flujo de fluido turbulento en conductos, dinámica de burbujas de gas durante ascenso, procesos de fragmentación de magma y efectos de resonancia del conducto. Las características espectrales pueden indicar transiciones de estilo de erupción, mientras que variaciones de amplitud se correlacionan con tasas de descarga de masa. El monitoreo de tremor ayuda a distinguir entre fases efusivas y explosivas y proporciona advertencia temprana de inicio o cese de erupción.",
          de: "Eruptiver Tremor liefert Echtzeiteinblicke in Magmatransportprozesse und ist entscheidend für Eruptionsvorhersagen. Tremorsignale reflektieren turbulenten Fluidfluss in Kanälen, Gasblasen-Dynamik während des Aufstiegs, Magmafragmentierungsprozesse und Kanalresonanzeffekte. Spektrale Charakteristika können Eruptionsstilübergänge anzeigen, während Amplitudenvariationen mit Massenaustragsraten korrelieren. Tremorüberwachung hilft zwischen effusiven und explosiven Phasen zu unterscheiden und bietet Frühwarnung vor Eruptionsbeginn oder -ende.",
          nl: "Eruptieve tremor biedt real-time inzichten in magmatransportprocessen en is cruciaal voor eruptievoorspelling. Tremorsignalen reflecteren turbulente vloeistofstroom in kanalen, gasbelletjesdynamica tijdens opstijging, magmafragmentatieprocessen en kanaalresonantie-effecten. Spectrale kenmerken kunnen eruptiestijlovergangen aangeven, terwijl amplitudevariaties correleren met massacapaciteitssnelheden. Tremormonitoring helpt onderscheid maken tussen effusieve en explosieve fasen en biedt vroege waarschuwing van eruptiebeginn of -beëindiging."
        }
      },
      {
        question: {
          en: "What controls the rheological evolution of magmas during crystallization and how does this affect eruption dynamics?",
          es: "¿Qué controla la evolución reológica de magmas durante cristalización y cómo afecta esto la dinámica de erupción?",
          de: "Was kontrolliert die rheologische Evolution von Magmen während der Kristallisation und wie beeinflusst dies die Eruptionsdynamik?",
          nl: "Wat controleert de rheologische evolutie van magma's tijdens kristallisatie en hoe beïnvloedt dit eruptiedynamica?"
        },
        options: [
          { en: "Crystal content, shape, size distribution, and melt connectivity control rheological behavior changes", es: "Contenido de cristal, forma, distribución de tamaño y conectividad de fundido controlan cambios de comportamiento reológico", de: "Kristallgehalt, -form, -größenverteilung und Schmelzkonnektivität kontrollieren rheologische Verhaltensänderungen", nl: "Kristalgehalte, vorm, grootteverdeling en smeltconnectiviteit controleren rheologische gedragsveranderingen" },
          { en: "Magma rheology never changes during crystallization", es: "La reología del magma nunca cambia durante la cristalización", de: "Magmarheologie ändert sich nie während der Kristallisation", nl: "Magmareologie verandert nooit tijdens kristallisatie" },
          { en: "Only temperature affects magma rheology", es: "Solo la temperatura afecta la reología del magma", de: "Nur Temperatur beeinflusst Magmarheologie", nl: "Alleen temperatuur beïnvloedt magmareologie" },
          { en: "Crystal shape has no influence on flow behavior", es: "La forma del cristal no tiene influencia en el comportamiento de flujo", de: "Kristallform hat keinen Einfluss auf Fließverhalten", nl: "Kristalvorm heeft geen invloed op stromingsgedrag" }
        ],
        correct: 0,
        explanation: {
          en: "Magma rheological evolution during crystallization is controlled by multiple factors that dramatically affect eruption dynamics. Increasing crystal content creates non-Newtonian behavior and eventual yield strength development. Crystal shape (aspect ratio) influences flow resistance, with elongated crystals creating higher effective viscosity. Crystal size distribution affects particle interactions, while melt connectivity determines whether the system behaves as a crystal mush or flowing magma. These changes can trigger eruptions through density instabilities or prevent eruptions through increased viscosity.",
          es: "La evolución reológica del magma durante la cristalización está controlada por múltiples factores que afectan dramáticamente la dinámica de erupción. El contenido creciente de cristal crea comportamiento no Newtoniano y desarrollo eventual de resistencia al flujo. La forma del cristal (relación de aspecto) influye en la resistencia al flujo, con cristales elongados creando mayor viscosidad efectiva. La distribución de tamaño de cristal afecta interacciones de partículas, mientras que la conectividad de fundido determina si el sistema se comporta como papilla de cristal o magma fluyente. Estos cambios pueden desencadenar erupciones a través de inestabilidades de densidad o prevenir erupciones a través de viscosidad aumentada.",
          de: "Magmarheologische Evolution während der Kristallisation wird durch multiple Faktoren kontrolliert, die Eruptionsdynamik dramatisch beeinflussen. Zunehmender Kristallgehalt schafft nicht-Newtonsches Verhalten und eventuelle Fließgrenzentwicklung. Kristallform (Aspektverhältnis) beeinflusst Fließwiderstand, wobei längliche Kristalle höhere effektive Viskosität schaffen. Kristallgrößenverteilung beeinflusst Partikelinteraktionen, während Schmelzkonnektivität bestimmt, ob das System sich als Kristallbrei oder fließendes Magma verhält. Diese Änderungen können Eruptionen durch Dichteinstabilitäten auslösen oder Eruptionen durch erhöhte Viskosität verhindern.",
          nl: "Magmareologische evolutie tijdens kristallisatie wordt gecontroleerd door meerdere factoren die eruptiedynamica dramatisch beïnvloeden. Toenemend kristalgehalte creëert niet-Newtoniaans gedrag en uiteindelijke vloeispanningsontwikkeling. Kristalvorm (aspect-ratio) beïnvloedt stromingsweerstand, waarbij langwerpige kristallen hogere effectieve viscositeit creëren. Kristalgrootteverdeling beïnvloedt deeltjesinteracties, terwijl smeltconnectiviteit bepaalt of het systeem zich gedraagt als kristalpap of stromend magma. Deze veranderingen kunnen erupties triggeren door dichtheidsinstabiliteiten of erupties voorkomen door verhoogde viscositeit."
        }
      },
      {
        question: {
          en: "How do volcanic gas flux measurements provide insights into deep magma storage and transport processes?",
          es: "¿Cómo proporcionan las mediciones de flujo de gas volcánico perspectivas sobre almacenamiento profundo de magma y procesos de transporte?",
          de: "Wie bieten vulkanische Gasfluss-Messungen Einblicke in tiefe Magmaspeicherung und Transportprozesse?",
          nl: "Hoe bieden vulkanische gasstroommeetingen inzichten in diepe magmaopslag en transportprocessen?"
        },
        options: [
          { en: "Gas flux variations reflect magma supply rates, storage conditions, and transport pathway changes", es: "Las variaciones de flujo de gas reflejan tasas de suministro de magma, condiciones de almacenamiento y cambios de caminos de transporte", de: "Gasfluss-Variationen reflektieren Magmanachschubraten, Speicherbedingungen und Transportwegänderungen", nl: "Gasstroomvariaties reflecteren magmatoevoersnelheden, opslagcondities en transportpadveranderingen" },
          { en: "Gas flux is unrelated to magma processes", es: "El flujo de gas no está relacionado con procesos de magma", de: "Gasfluss steht nicht im Zusammenhang mit Magmaprozessen", nl: "Gasstroom is niet gerelateerd aan magmaprocessen" },
          { en: "All volcanoes emit identical gas fluxes", es: "Todos los volcanes emiten flujos de gas idénticos", de: "Alle Vulkane emittieren identische Gasflüsse", nl: "Alle vulkanen emitteren identieke gasstromen" },
          { en: "Gas measurements only indicate surface weather conditions", es: "Las mediciones de gas solo indican condiciones meteorológicas superficiales", de: "Gasmessungen zeigen nur Oberflächenwetterbedingungen an", nl: "Gasmetingen geven alleen oppervlakteweersomstandigheden aan" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic gas flux measurements provide crucial insights into deep magma processes by reflecting changes in magma supply rates, storage conditions, and transport pathways. Increased CO2 flux often indicates deeper magma intrusion and enhanced volatile exsolution. SO2 flux correlates with shallow magma degassing and can indicate impending eruptions. Gas flux ratios reveal information about magma chamber processes, redox conditions, and hydrothermal interactions. Long-term monitoring establishes baseline conditions and detects anomalies indicating system changes.",
          es: "Las mediciones de flujo de gas volcánico proporcionan perspectivas cruciales sobre procesos de magma profundos al reflejar cambios en tasas de suministro de magma, condiciones de almacenamiento y caminos de transporte. El flujo aumentado de CO2 a menudo indica intrusión de magma más profunda y exsolución volátil mejorada. El flujo de SO2 se correlaciona con desgasificación de magma superficial y puede indicar erupciones inminentes. Las proporciones de flujo de gas revelan información sobre procesos de cámara magmática, condiciones redox e interacciones hidrotermales. El monitoreo a largo plazo establece condiciones de línea base y detecta anomalías indicando cambios de sistema.",
          de: "Vulkanische Gasfluss-Messungen liefern entscheidende Einblicke in tiefe Magmaprozesse durch Reflektion von Änderungen in Magmanachschubraten, Speicherbedingungen und Transportwegen. Erhöhter CO2-Fluss zeigt oft tiefere Magmaintrusion und verstärkte Volatilentlösung an. SO2-Fluss korreliert mit oberflächlicher Magmaentgasung und kann bevorstehende Eruptionen anzeigen. Gasfluss-Verhältnisse offenbaren Informationen über Magmakammerprozesse, Redox-Bedingungen und hydrothermale Wechselwirkungen. Langzeitüberwachung etabliert Basisbedingungen und erkennt Anomalien, die Systemänderungen anzeigen.",
          nl: "Vulkanische gasstroommeetingen bieden cruciale inzichten in diepe magmaprocessen door veranderingen in magmatoevoersnelheden, opslagcondities en transportpaden te reflecteren. Verhoogde CO2-stroom wijst vaak op diepere magma-intrusie en verhoogde vluchtige uitscheiding. SO2-stroom correleert met oppervlakkige magmaontgassing en kan naderende erupties aangeven. Gasstroomverhoudingen onthullen informatie over magmakamerprocessen, redoxcondities en hydrothermale interacties. Lange-termijn monitoring stelt basislijnomstandigheden vast en detecteert anomalieën die systeemveranderingen aangeven."
        }
      },
      {
        question: {
          en: "What mechanisms control the development of compositional zonation in large silicic magma chambers?",
          es: "¿Qué mecanismos controlan el desarrollo de zonificación composicional en cámaras de magma silícico grandes?",
          de: "Welche Mechanismen kontrollieren die Entwicklung kompositioneller Zonierung in großen silicischen Magmakammern?",
          nl: "Welke mechanismen controleren de ontwikkeling van compositionele zonering in grote silicische magmakamers?"
        },
        options: [
          { en: "Fractional crystallization, magma mixing, assimilation, and convection patterns create zonation", es: "Cristalización fraccionada, mezcla de magma, asimilación y patrones de convección crean zonificación", de: "Fraktionierte Kristallisation, Magmamischung, Assimilation und Konvektionsmuster schaffen Zonierung", nl: "Fractionele kristallisatie, magmamenging, assimilatie en convectiepatronen creëren zonering" },
          { en: "Large magma chambers are always homogeneous", es: "Las cámaras magmáticas grandes son siempre homogéneas", de: "Große Magmakammern sind immer homogen", nl: "Grote magmakamers zijn altijd homogeen" },
          { en: "Only time controls compositional variations", es: "Solo el tiempo controla variaciones composicionales", de: "Nur Zeit kontrolliert kompositionelle Variationen", nl: "Alleen tijd controleert compositionele variaties" },
          { en: "Zonation develops randomly without any controlling processes", es: "La zonificación se desarrolla aleatoriamente sin procesos controladores", de: "Zonierung entwickelt sich zufällig ohne kontrollierende Prozesse", nl: "Zonering ontwikkelt willekeurig zonder controlerende processen" }
        ],
        correct: 0,
        explanation: {
          en: "Compositional zonation in large silicic magma chambers develops through complex interactions of multiple processes. Fractional crystallization creates vertical density gradients with evolved, silicic compositions at the top. Magma recharge and mixing can disturb or enhance zonation patterns. Assimilation of wall rocks modifies local compositions. Convection patterns can either homogenize compositions or maintain stratification depending on vigor. Thermal gradients, volatile distributions, and chamber geometry all influence the final zonation architecture.",
          es: "La zonificación composicional en cámaras de magma silícico grandes se desarrolla a través de interacciones complejas de múltiples procesos. La cristalización fraccionada crea gradientes de densidad vertical con composiciones evolucionadas y silícicas en la parte superior. La recarga de magma y mezcla pueden disturbar o mejorar patrones de zonificación. La asimilación de rocas de pared modifica composiciones locales. Los patrones de convección pueden homogeneizar composiciones o mantener estratificación dependiendo del vigor. Gradientes térmicos, distribuciones volátiles y geometría de cámara influyen en la arquitectura final de zonificación.",
          de: "Kompositionelle Zonierung in großen silicischen Magmakammern entwickelt sich durch komplexe Wechselwirkungen multipler Prozesse. Fraktionierte Kristallisation schafft vertikale Dichtegradienten mit entwickelten, silicischen Zusammensetzungen oben. Magmanachschub und -mischung können Zonierungsmuster stören oder verstärken. Wandgesteinassimilation modifiziert lokale Zusammensetzungen. Konvektionsmuster können entweder Zusammensetzungen homogenisieren oder Stratifikation aufrechterhalten, abhängig von der Intensität. Temperaturgradienten, Volatilverteilungen und Kammergeometrie beeinflussen alle die finale Zonierungsarchitektur.",
          nl: "Compositionele zonering in grote silicische magmakamers ontwikkelt door complexe interacties van meerdere processen. Fractionele kristallisatie creëert verticale dichtheidsgradiënten met geëvolueerde, silicische samenstellingen bovenaan. Magmaaanvulling en -menging kunnen zoneringspatronen verstoren of versterken. Assimilatie van wandgesteenten modificeert lokale samenstellingen. Convectiepatronen kunnen samenstellingen homogeniseren of stratificatie handhaven afhankelijk van kracht. Thermische gradiënten, vluchtige verdelingen en kamergeometrie beïnvloeden allemaal de uiteindelijke zoneringsarchitectuur."
        }
      },
      {
        question: {
          en: "How do eruption source parameters (ESP) relate to volcanic hazard assessment and risk management?",
          es: "¿Cómo se relacionan los parámetros de fuente de erupción (ESP) con evaluación de peligros volcánicos y gestión de riesgos?",
          de: "Wie stehen Eruptionsquellparameter (ESP) in Beziehung zu vulkanischer Gefahrenbewertung und Risikomanagement?",
          nl: "Hoe verhouden eruptiebronparameters (ESP) zich tot vulkanische gevarenbeoordelingen en risicobeheer?"
        },
        options: [
          { en: "ESP quantify eruption intensity and duration, enabling hazard modeling and impact assessment", es: "ESP cuantifican intensidad y duración de erupción, permitiendo modelado de peligros y evaluación de impacto", de: "ESP quantifizieren Eruptionsintensität und -dauer, ermöglichen Gefahrenmodellierung und Impaktbewertung", nl: "ESP kwantificeren eruptie-intensiteit en -duur, gevaarmodellering en impactbeoordeling mogelijk makend" },
          { en: "ESP are only useful for academic research", es: "ESP son solo útiles para investigación académica", de: "ESP sind nur für akademische Forschung nützlich", nl: "ESP zijn alleen nuttig voor academisch onderzoek" },
          { en: "Hazard assessment doesn't require eruption parameters", es: "La evaluación de peligros no requiere parámetros de erupción", de: "Gefahrenbewertung erfordert keine Eruptionsparameter", nl: "Gevaarenbeoordeling vereist geen eruptieparameters" },
          { en: "All eruptions have identical source parameters", es: "Todas las erupciones tienen parámetros de fuente idénticos", de: "Alle Eruptionen haben identische Quellparameter", nl: "Alle erupties hebben identieke bronparameters" }
        ],
        correct: 0,
        explanation: {
          en: "Eruption source parameters are fundamental for volcanic hazard assessment and risk management. ESP include mass eruption rate, column height, duration, and total erupted mass, which directly control the extent and intensity of volcanic hazards. These parameters drive numerical models for ash dispersion, pyroclastic flow runout, and lahar generation. ESP enable probabilistic hazard assessment, emergency planning scenarios, and real-time eruption monitoring. Understanding ESP variability helps establish eruption magnitude-frequency relationships crucial for long-term risk assessment.",
          es: "Los parámetros de fuente de erupción son fundamentales para evaluación de peligros volcánicos y gestión de riesgos. ESP incluyen tasa de erupción de masa, altura de columna, duración y masa total eruptada, que controlan directamente la extensión e intensidad de peligros volcánicos. Estos parámetros impulsan modelos numéricos para dispersión de ceniza, alcance de flujo piroclástico y generación de lahar. ESP permiten evaluación probabilística de peligros, escenarios de planificación de emergencia y monitoreo de erupciones en tiempo real. Entender variabilidad ESP ayuda establecer relaciones de magnitud-frecuencia de erupción cruciales para evaluación de riesgo a largo plazo.",
          de: "Eruptionsquellparameter sind fundamental für vulkanische Gefahrenbewertung und Risikomanagement. ESP umfassen Masseneruptionsrate, Säulenhöhe, Dauer und Gesamteruptionsmasse, die direkt Ausdehnung und Intensität vulkanischer Gefahren kontrollieren. Diese Parameter treiben numerische Modelle für Aschedispersion, pyroklastische Stromreichweite und Lahar-Generierung an. ESP ermöglichen probabilistische Gefahrenbewertung, Notfallplanungsszenarien und Echtzeit-Eruptionsüberwachung. ESP-Variabilitätsverständnis hilft Eruptionsmagnitude-Frequenzbeziehungen zu etablieren, die für langfristige Risikobeurteilung entscheidend sind.",
          nl: "Eruptiebronparameters zijn fundamenteel voor vulkanische gevarenbeoordelingen en risicobeheer. ESP omvatten massa-eruptiesnelheid, kolomhoogte, duur en totale geërupteerde massa, die direct de omvang en intensiteit van vulkanische gevaren controleren. Deze parameters drijven numerieke modellen aan voor asdispersie, pyroklastische stroomuitloop en lahar-generatie. ESP maken probabilistische gevarenbeoordeling, noodplanningsscenario's en real-time eruptiemonitoring mogelijk. ESP-variabiliteitsbegrip helpt eruptiemagnitude-frequentierelaties vast te stellen die cruciaal zijn voor lange-termijn risicobeoordeling."
        }
      },
      {
        question: {
          en: "What role does melt inclusion analysis play in understanding pre-eruptive magma storage conditions and processes?",
          es: "¿Qué papel juega el análisis de inclusiones de fundido en entender condiciones y procesos de almacenamiento pre-eruptivo de magma?",
          de: "Welche Rolle spielt Schmelzeinschlussanalyse beim Verständnis prä-eruptiver Magmaspeicherbedingungen und -prozesse?",
          nl: "Welke rol speelt smeltingsluitsingsanalyse in het begrijpen van pre-eruptieve magmaopslagcondities en -processen?"
        },
        options: [
          { en: "Melt inclusions preserve primitive compositions and record pressure-temperature-volatile evolution histories", es: "Las inclusiones de fundido preservan composiciones primitivas y registran historias de evolución presión-temperatura-volátil", de: "Schmelzeinschlüsse bewahren primitive Zusammensetzungen und zeichnen Druck-Temperatur-Volatil-Evolutionsgeschichten auf", nl: "Smeltinsluitingen behouden primitieve samenstellingen en registreren druk-temperatuur-vluchtige evolutiegeschiedenissen" },
          { en: "Melt inclusions provide no useful information about magma processes", es: "Las inclusiones de fundido no proporcionan información útil sobre procesos de magma", de: "Schmelzeinschlüsse liefern keine nützlichen Informationen über Magmaprozesse", nl: "Smeltinsluitingen geven geen nuttige informatie over magmaprocessen" },
          { en: "All melt inclusions have identical compositions", es: "Todas las inclusiones de fundido tienen composiciones idénticas", de: "Alle Schmelzeinschlüsse haben identische Zusammensetzungen", nl: "Alle smeltinsluitingen hebben identieke samenstellingen" },
          { en: "Melt inclusions only form during eruption", es: "Las inclusiones de fundido solo se forman durante la erupción", de: "Schmelzeinschlüsse bilden sich nur während der Eruption", nl: "Smeltinsluitingen vormen alleen tijdens eruptie" }
        ],
        correct: 0,
        explanation: {
          en: "Melt inclusion analysis provides invaluable insights into pre-eruptive magma storage conditions and processes by preserving snapshots of melt compositions at different stages of magma evolution. These microscopic trapped melts record primitive compositions before differentiation, volatile contents at entrapment conditions, and pressure-temperature evolution paths. Melt inclusions reveal magma chamber stratification, mixing events, degassing processes, and storage depths. They also provide estimates of pre-eruptive volatile contents crucial for understanding eruption explosivity and environmental impacts.",
          es: "El análisis de inclusiones de fundido proporciona perspectivas invaluables sobre condiciones y procesos de almacenamiento pre-eruptivo de magma al preservar instantáneas de composiciones de fundido en diferentes etapas de evolución de magma. Estos fundidos microscópicos atrapados registran composiciones primitivas antes de diferenciación, contenidos volátiles en condiciones de atrapamiento y caminos de evolución presión-temperatura. Las inclusiones de fundido revelan estratificación de cámara magmática, eventos de mezcla, procesos de desgasificación y profundidades de almacenamiento. También proporcionan estimaciones de contenidos volátiles pre-eruptivos cruciales para entender explosividad de erupción e impactos ambientales.",
          de: "Schmelzeinschlussanalyse liefert unschätzbare Einblicke in prä-eruptive Magmaspeicherbedingungen und -prozesse durch Bewahrung von Momentaufnahmen von Schmelzzusammensetzungen in verschiedenen Stadien der Magmaevolution. Diese mikroskopischen eingeschlossenen Schmelzen zeichnen primitive Zusammensetzungen vor Differenzierung, Volatilgehalte bei Einschlussbedingungen und Druck-Temperatur-Evolutionspfade auf. Schmelzeinschlüsse offenbaren Magmakammerstratifikation, Mischungsereignisse, Entgasungsprozesse und Speichertiefen. Sie liefern auch Schätzungen prä-eruptiver Volatilgehalte, die für Verständnis von Eruptionsexplosivität und Umweltauswirkungen entscheidend sind.",
          nl: "Smeltinsluitsingsanalyse biedt onschatbare inzichten in pre-eruptieve magmaopslagcondities en -processen door momentopnamen van smeltsamenstellingen in verschillende stadia van magma-evolutie te bewaren. Deze microscopische ingesloten smelten registreren primitieve samenstellingen voor differentiatie, vluchtige gehalten bij opvangcondities en druk-temperatuur evolutiepaden. Smeltinsluitingen onthullen magmakamerstratificatie, menggebeurtenissen, ontgassingsprocessen en opslagdiepten. Ze bieden ook schattingen van pre-eruptieve vluchtige gehalten die cruciaal zijn voor het begrijpen van eruptie-explosiviteit en milieu-impacts."
        }
      },
      {
        question: {
          en: "How do volcanic lightning generation mechanisms relate to ash plume dynamics and eruption monitoring?",
          es: "¿Cómo se relacionan los mecanismos de generación de rayos volcánicos con la dinámica de pluma de ceniza y monitoreo de erupciones?",
          de: "Wie stehen vulkanische Blitzgenerierungsmechanismen in Beziehung zu Ascheplumendynamik und Eruptionsüberwachung?",
          nl: "Hoe verhouden vulkanische bliksemgeneratiemechanismen zich tot aspluimdynamica en eruptiemonitoring?"
        },
        options: [
          { en: "Volcanic lightning reflects particle collision processes and provides real-time eruption intensity indicators", es: "Los rayos volcánicos reflejan procesos de colisión de partículas y proporcionan indicadores de intensidad de erupción en tiempo real", de: "Vulkanische Blitze reflektieren Partikelkollisionsprozesse und liefern Echtzeit-Eruptionsintensitätsindikatoren", nl: "Vulkanische bliksem reflecteert deeltjesbotsingsprocessen en biedt real-time eruptie-intensiteitsindicatoren" },
          { en: "Volcanic lightning is unrelated to eruption processes", es: "Los rayos volcánicos no están relacionados con procesos de erupción", de: "Vulkanische Blitze stehen nicht im Zusammenhang mit Eruptionsprozessen", nl: "Vulkanische bliksem is niet gerelateerd aan eruptieprocessen" },
          { en: "All volcanic eruptions produce identical lightning patterns", es: "Todas las erupciones volcánicas producen patrones de rayos idénticos", de: "Alle vulkanischen Eruptionen produzieren identische Blitzmuster", nl: "Alle vulkanische erupties produceren identieke bliksempatronen" },
          { en: "Lightning only occurs after eruptions end", es: "Los rayos solo ocurren después de que terminan las erupciones", de: "Blitze treten nur nach Ende von Eruptionen auf", nl: "Bliksem treedt alleen op nadat erupties eindigen" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic lightning generation is intimately linked to ash plume dynamics and provides valuable eruption monitoring capabilities. Lightning forms through triboelectric charging during particle collisions within turbulent ash plumes, with charge separation enhanced by temperature gradients and particle size distributions. Lightning frequency and intensity correlate with eruption vigor, mass eruption rates, and plume height. Real-time lightning detection systems can provide early warning of eruption onset, monitor eruption intensity changes, and track ash plume evolution, especially valuable in remote locations or during night-time eruptions.",
          es: "La generación de rayos volcánicos está íntimamente ligada a la dinámica de pluma de ceniza y proporciona capacidades valiosas de monitoreo de erupciones. Los rayos se forman a través de carga triboeléctrica durante colisiones de partículas dentro de plumas de ceniza turbulentas, con separación de carga mejorada por gradientes de temperatura y distribuciones de tamaño de partícula. La frecuencia e intensidad de rayos se correlaciona con vigor de erupción, tasas de erupción de masa y altura de pluma. Los sistemas de detección de rayos en tiempo real pueden proporcionar advertencia temprana de inicio de erupción, monitorear cambios de intensidad de erupción y rastrear evolución de pluma de ceniza, especialmente valioso en ubicaciones remotas o durante erupciones nocturnas.",
          de: "Vulkanische Blitzgenerierung ist eng mit Ascheplumendynamik verknüpft und bietet wertvolle Eruptionsüberwachungsfähigkeiten. Blitze entstehen durch triboelektrische Aufladung während Partikelkollisionen in turbulenten Ascheplunen, wobei Ladungstrennung durch Temperaturgradienten und Partikelgrößenverteilungen verstärkt wird. Blitzfrequenz und -intensität korrelieren mit Eruptionsintensität, Masseneruptionsraten und Plumenhöhe. Echtzeit-Blitzerkennungssysteme können Frühwarnung vor Eruptionsbeginn liefern, Eruptionsintensitätsänderungen überwachen und Ascheplumenevolution verfolgen, besonders wertvoll in abgelegenen Orten oder während nächtlicher Eruptionen.",
          nl: "Vulkanische bliksemgeneratie is nauw verbonden met aspluimdynamica en biedt waardevolle eruptiemonitoringmogelijkheden. Bliksem vormt door triboelektrische oplading tijdens deeltjesbotsingen binnen turbulente aspluimen, waarbij ladingsscheiding wordt versterkt door temperatuurgradiënten en deeltjesgrootteverdelingen. Bliksemfrequentie en -intensiteit correleren met eruptiekracht, massa-eruptiesnelheden en pluimhoogte. Real-time bliksemdetectiesystemen kunnen vroege waarschuwing van eruptiebeginn bieden, eruptie-intensiteitsveranderingen monitoren en aspluimevolutie volgen, vooral waardevol in afgelegen locaties of tijdens nachtelijke erupties."
        }
      },
      {
        question: {
          en: "What is the relationship between viscosity and silica content in volcanic magmas?",
          es: "¿Cuál es la relación entre la viscosidad y el contenido de sílice en los magmas volcánicos?",
          de: "Was ist die Beziehung zwischen Viskosität und Silikatgehalt in vulkanischen Magmen?",
          nl: "Wat is de relatie tussen viscositeit en silicagehalte in vulkanische magma's?"
        },
        options: [
          { en: "Higher silica content increases viscosity due to polymerization of silicate chains", es: "Mayor contenido de sílice aumenta la viscosidad debido a polimerización de cadenas de silicato", de: "Höherer Silikatgehalt erhöht Viskosität durch Polymerisierung von Silikatketten", nl: "Hoger silicagehalte verhoogt viscositeit door polymerisatie van silicaatketens" },
          { en: "Silica content has no effect on magma viscosity", es: "El contenido de sílice no afecta la viscosidad del magma", de: "Silikatgehalt hat keinen Einfluss auf Magmaviskosität", nl: "Silicagehalte heeft geen effect op magmaviscositeit" },
          { en: "Lower silica content increases viscosity", es: "Menor contenido de sílice aumenta la viscosidad", de: "Niedrigerer Silikatgehalt erhöht Viskosität", nl: "Lager silicagehalte verhoogt viscositeit" },
          { en: "Viscosity only depends on temperature", es: "La viscosidad solo depende de la temperatura", de: "Viskosität hängt nur von der Temperatur ab", nl: "Viscositeit hangt alleen af van temperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Silica content strongly controls magma viscosity through polymerization effects. Higher silica content promotes formation of complex silicate tetrahedral networks, creating longer chains and increasing internal friction. Rhyolitic magmas (70-75% SiO2) are highly viscous (10^6-10^11 Pa·s), while basaltic magmas (45-52% SiO2) have low viscosity (10^1-10^3 Pa·s). This viscosity difference fundamentally controls eruption style and volcanic hazards.",
          es: "El contenido de sílice controla fuertemente la viscosidad del magma a través de efectos de polimerización. Mayor contenido de sílice promueve formación de redes tetraédricas de silicato complejas, creando cadenas más largas y aumentando fricción interna. Magmas riolíticos (70-75% SiO2) son altamente viscosos (10^6-10^11 Pa·s), mientras magmas basálticos (45-52% SiO2) tienen baja viscosidad (10^1-10^3 Pa·s). Esta diferencia de viscosidad controla fundamentalmente el estilo de erupción y peligros volcánicos.",
          de: "Silikatgehalt kontrolliert stark Magmaviskosität durch Polymerisierungseffekte. Höherer Silikatgehalt fördert Bildung komplexer Silikat-Tetraeder-Netzwerke, schafft längere Ketten und erhöht innere Reibung. Rhyolithische Magmen (70-75% SiO2) sind hochviskos (10^6-10^11 Pa·s), während basaltische Magmen (45-52% SiO2) niedrige Viskosität haben (10^1-10^3 Pa·s). Dieser Viskositätsunterschied kontrolliert fundamental Eruptionsstil und vulkanische Gefahren.",
          nl: "Silicagehalte controleert sterk magmaviscositeit door polymerisatie-effecten. Hoger silicagehalte bevordert vorming van complexe silicaat-tetrahedrische netwerken, creëert langere ketens en verhoogt interne wrijving. Rhyolitische magma's (70-75% SiO2) zijn hoogvisceus (10^6-10^11 Pa·s), terwijl basaltische magma's (45-52% SiO2) lage viscositeit hebben (10^1-10^3 Pa·s). Dit viscositeitsverschil controleert fundamenteel eruptiestijl en vulkanische gevaren."
        }
      },
      {
        question: {
          en: "How do volcanic tremor signals relate to magma movement and eruption forecasting?",
          es: "¿Cómo se relacionan las señales de tremor volcánico con el movimiento del magma y pronóstico de erupciones?",
          de: "Wie stehen vulkanische Tremorsignale in Beziehung zu Magmabewegung und Eruptionsprognose?",
          nl: "Hoe verhouden vulkanische tremorsignalen zich tot magmabeweging en eruptievoorspelling?"
        },
        options: [
          { en: "Tremor reflects sustained fluid flow and provides precursory signals for eruption onset", es: "El tremor refleja flujo sostenido de fluido y proporciona señales precursoras para inicio de erupción", de: "Tremor reflektiert anhaltenden Fluidfluss und liefert Vorläufersignale für Eruptionsbeginn", nl: "Tremor reflecteert aanhoudende vloeistofstroom en biedt voorlopersignalen voor eruptiebeginn" },
          { en: "Volcanic tremor is unrelated to magma processes", es: "El tremor volcánico no está relacionado con procesos de magma", de: "Vulkanischer Tremor steht nicht im Zusammenhang mit Magmaprozessen", nl: "Vulkanische tremor is niet gerelateerd aan magmaprocessen" },
          { en: "Tremor only occurs after eruptions end", es: "El tremor solo ocurre después de que terminan las erupciones", de: "Tremor tritt nur nach Ende von Eruptionen auf", nl: "Tremor treedt alleen op nadat erupties eindigen" },
          { en: "All volcanoes produce identical tremor signals", es: "Todos los volcanes producen señales de tremor idénticas", de: "Alle Vulkane produzieren identische Tremorsignale", nl: "Alle vulkanen produceren identieke tremorsignalen" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic tremor represents sustained seismic oscillations generated by continuous fluid flow processes within volcanic systems. Tremor signals reflect magma movement, gas flow, boiling, and fluid resonance in conduits and chambers. Pre-eruptive tremor often indicates sustained magma ascent and can precede explosive activity by hours to days. Tremor characteristics (frequency, amplitude, duration) provide insights into eruption intensity and style, making it a valuable tool for real-time monitoring and eruption forecasting.",
          es: "El tremor volcánico representa oscilaciones sísmicas sostenidas generadas por procesos continuos de flujo de fluido dentro de sistemas volcánicos. Las señales de tremor reflejan movimiento de magma, flujo de gas, ebullición y resonancia de fluido en conductos y cámaras. El tremor pre-eruptivo a menudo indica ascenso sostenido de magma y puede preceder actividad explosiva por horas a días. Las características del tremor (frecuencia, amplitud, duración) proporcionan perspectivas sobre intensidad y estilo de erupción, haciéndolo una herramienta valiosa para monitoreo en tiempo real y pronóstico de erupciones.",
          de: "Vulkanischer Tremor repräsentiert anhaltende seismische Oszillationen, die durch kontinuierliche Fluidflussprozesse in vulkanischen Systemen erzeugt werden. Tremorsignale reflektieren Magmabewegung, Gasfluss, Sieden und Fluidresonanz in Kanälen und Kammern. Prä-eruptiver Tremor zeigt oft anhaltenden Magmaaufstieg an und kann explosiver Aktivität um Stunden bis Tage vorausgehen. Tremoreigenschaften (Frequenz, Amplitude, Dauer) bieten Einblicke in Eruptionsintensität und -stil, was es zu einem wertvollen Werkzeug für Echtzeitüberwachung und Eruptionsprognose macht.",
          nl: "Vulkanische tremor vertegenwoordigt aanhoudende seismische oscillaties gegenereerd door continue vloeistofstroomprocessen binnen vulkanische systemen. Tremorsignalen reflecteren magmabeweging, gasstroom, koken en vloeistofresonantie in kanalen en kamers. Pre-eruptieve tremor duidt vaak op aanhoudende magma-opstijging en kan explosieve activiteit met uren tot dagen voorafgaan. Tremorenkenmerken (frequentie, amplitude, duur) bieden inzichten in eruptie-intensiteit en -stijl, waardoor het een waardevol hulpmiddel is voor real-time monitoring en eruptievoorspelling."
        }
      },
      {
        question: {
          en: "What controls the formation and stability of volcanic lava domes?",
          es: "¿Qué controla la formación y estabilidad de domos de lava volcánicos?",
          de: "Was kontrolliert die Bildung und Stabilität vulkanischer Lavadome?",
          nl: "Wat controleert de vorming en stabiliteit van vulkanische lavadomes?"
        },
        options: [
          { en: "Effusion rate, magma rheology, and slope stability determine dome growth and collapse potential", es: "Tasa de efusión, reología del magma y estabilidad de pendiente determinan crecimiento de domo y potencial de colapso", de: "Effusionsrate, Magmarheologie und Hangstabilität bestimmen Domwachstum und Kollabspotential", nl: "Effusiesnelheid, magmareologie en hellingsstabiliteit bepalen domegroei en instortingspotentieel" },
          { en: "All lava domes are equally stable", es: "Todos los domos de lava son igualmente estables", de: "Alle Lavadome sind gleich stabil", nl: "Alle lavadomes zijn even stabiel" },
          { en: "Dome formation is independent of magma properties", es: "La formación de domos es independiente de propiedades del magma", de: "Dombildung ist unabhängig von Magmaeigenschaften", nl: "Domevorming is onafhankelijk van magma-eigenschappen" },
          { en: "Lava domes cannot collapse once formed", es: "Los domos de lava no pueden colapsar una vez formados", de: "Lavadome können nicht kollabieren, sobald sie gebildet sind", nl: "Lavadomes kunnen niet instorten zodra ze gevormd zijn" }
        ],
        correct: 0,
        explanation: {
          en: "Lava dome formation and stability are controlled by complex interactions between effusion rate, magma rheological properties, and gravitational instability. High-viscosity magmas with low effusion rates form steep-sided domes, while higher effusion rates create more stable, broader structures. Dome stability depends on slope angle, internal gas pressure, crystallization-induced strength changes, and external triggers like rainfall or seismic activity. Understanding these processes is crucial for hazard assessment, as dome collapse can generate devastating pyroclastic flows.",
          es: "La formación y estabilidad de domos de lava son controladas por interacciones complejas entre tasa de efusión, propiedades reológicas del magma e inestabilidad gravitacional. Magmas de alta viscosidad con tasas de efusión bajas forman domos de lados empinados, mientras tasas de efusión más altas crean estructuras más estables y amplias. La estabilidad del domo depende del ángulo de pendiente, presión interna de gas, cambios de resistencia inducidos por cristalización y disparadores externos como lluvia o actividad sísmica. Entender estos procesos es crucial para evaluación de peligros, ya que el colapso de domos puede generar flujos piroclásticos devastadores.",
          de: "Lavadombbildung und -stabilität werden durch komplexe Wechselwirkungen zwischen Effusionsrate, Magmarheologischen Eigenschaften und Gravitationsinstabilität kontrolliert. Hochviskose Magmen mit niedrigen Effusionsraten bilden steilwandige Dome, während höhere Effusionsraten stabilere, breitere Strukturen schaffen. Domstabilität hängt von Hangwinkel, innerem Gasdruck, kristallisationsinduzierten Festigkeitsänderungen und externen Auslösern wie Regen oder seismischer Aktivität ab. Verständnis dieser Prozesse ist entscheidend für Gefahrenbewertung, da Domkollaps verheerende pyroklastische Ströme generieren kann.",
          nl: "Lavadomevorming en -stabiliteit worden gecontroleerd door complexe interacties tussen effusiesnelheid, magmareologische eigenschappen en gravitationele instabiliteit. Hoogvisceuze magma's met lage effusiesnelheden vormen steilzijdige domes, terwijl hogere effusiesnelheden stabielere, bredere structuren creëren. Domestabiliteit hangt af van hellingshoek, interne gasdruk, kristallisatie-geïnduceerde sterktewijzigingen en externe triggers zoals regen of seismische activiteit. Het begrijpen van deze processen is cruciaal voor gevarenbeoordeling, omdat dome-instorting verwoestende pyroklastische stromen kan genereren."
        }
      },
      {
        question: {
          en: "How do petrologic thermobarometers constrain magma storage conditions and ascent histories?",
          es: "¿Cómo los termobarómetros petrológicos restringen las condiciones de almacenamiento de magma e historias de ascenso?",
          de: "Wie begrenzen petrologische Thermobarometer Magmaspeicherbedingungen und Aufstiegsgeschichten?",
          nl: "Hoe beperken petrologische thermobarometers magmaopslagcondities en stijgingsgeschiedenissen?"
        },
        options: [
          { en: "Mineral equilibria record pressure-temperature paths during magma evolution and transport", es: "Equilibrios minerales registran caminos presión-temperatura durante evolución y transporte de magma", de: "Mineralgleichgewichte zeichnen Druck-Temperatur-Pfade während Magmaevolution und -transport auf", nl: "Mineraalequilibria registreren druk-temperatuurpaden tijdens magma-evolutie en -transport" },
          { en: "Thermobarometers provide no information about magma processes", es: "Los termobarómetros no proporcionan información sobre procesos de magma", de: "Thermobarometer liefern keine Informationen über Magmaprozesse", nl: "Thermobarometers geven geen informatie over magmaprocessen" },
          { en: "All magmas have identical storage conditions", es: "Todos los magmas tienen condiciones de almacenamiento idénticas", de: "Alle Magmen haben identische Speicherbedingungen", nl: "Alle magma's hebben identieke opslagcondities" },
          { en: "Pressure and temperature cannot be determined from minerals", es: "La presión y temperatura no pueden determinarse a partir de minerales", de: "Druck und Temperatur können nicht aus Mineralen bestimmt werden", nl: "Druk en temperatuur kunnen niet bepaald worden uit mineralen" }
        ],
        correct: 0,
        explanation: {
          en: "Petrologic thermobarometers use mineral equilibria to reconstruct pressure-temperature conditions during magma storage and ascent. Different mineral pairs and reactions record specific P-T conditions at equilibrium. Plagioclase-melt equilibria constrain temperature and water content, while pyroxene and amphibole stability fields indicate pressure and temperature ranges. Progressive mineral reactions during ascent record decompression paths and ascent rates. These data reveal magma chamber depths, thermal evolution, volatile contents, and residence times, providing crucial constraints for volcanic hazard assessment and eruption forecasting models.",
          es: "Los termobarómetros petrológicos usan equilibrios minerales para reconstruir condiciones presión-temperatura durante almacenamiento y ascenso de magma. Diferentes pares minerales y reacciones registran condiciones P-T específicas en equilibrio. Equilibrios plagioclasa-fundido restringen temperatura y contenido de agua, mientras campos de estabilidad de piroxeno y anfíbol indican rangos de presión y temperatura. Reacciones minerales progresivas durante ascenso registran caminos de descompresión y tasas de ascenso. Estos datos revelan profundidades de cámara magmática, evolución térmica, contenidos volátiles y tiempos de residencia, proporcionando restricciones cruciales para evaluación de peligros volcánicos y modelos de pronóstico de erupciones.",
          de: "Petrologische Thermobarometer nutzen Mineralgleichgewichte zur Rekonstruktion von Druck-Temperatur-Bedingungen während Magmaspeicherung und -aufstieg. Verschiedene Mineralpaare und Reaktionen zeichnen spezifische P-T-Bedingungen im Gleichgewicht auf. Plagioklas-Schmelze-Gleichgewichte begrenzen Temperatur und Wassergehalt, während Pyroxen- und Amphibol-Stabilitätsfelder Druck- und Temperaturbereiche anzeigen. Progressive Mineralreaktionen während des Aufstiegs zeichnen Dekompressionspfade und Aufstiegsraten auf. Diese Daten enthüllen Magmakammertiefen, thermische Evolution, Volatilgehalte und Verweilzeiten und liefern entscheidende Einschränkungen für vulkanische Gefahrenbewertung und Eruptionsprognosemodelle.",
          nl: "Petrologische thermobarometers gebruiken mineraalequilibria om druk-temperatuurcondities tijdens magmaopslag en -opstijging te reconstrueren. Verschillende mineraalparen en reacties registreren specifieke P-T-condities in evenwicht. Plagioklaas-smelt equilibria beperken temperatuur en watergehalte, terwijl pyroxeen en amfibool stabiliteitsvelden druk- en temperatuurbereiken aangeven. Progressieve mineraalreacties tijdens opstijging registreren decompressiepaden en opstijgingssnelheden. Deze gegevens onthullen magmakamerdiepten, thermische evolutie, vluchtige gehalten en verblijftijden, en bieden cruciale beperkingen voor vulkanische gevarenbeoordeling en eruptievoorspellingsmodellen."
        }
      },
      {
        question: {
          en: "What role do volatile phases play in controlling eruption explosivity and environmental impacts?",
          es: "¿Qué papel juegan las fases volátiles en controlar la explosividad de erupciones e impactos ambientales?",
          de: "Welche Rolle spielen volatile Phasen bei der Kontrolle von Eruptionsexplosivität und Umweltauswirkungen?",
          nl: "Welke rol spelen vluchtige fasen in het controleren van eruptie-explosiviteit en milieu-impacts?"
        },
        options: [
          { en: "Volatile exsolution drives explosive fragmentation and controls atmospheric injection efficiency", es: "La exsolución de volátiles impulsa fragmentación explosiva y controla eficiencia de inyección atmosférica", de: "Volatile Entlösung treibt explosive Fragmentierung an und kontrolliert atmosphärische Injektionseffizienz", nl: "Vluchtige uitscheiding drijft explosieve fragmentatie aan en controleert atmosferische injectie-efficiëntie" },
          { en: "Volatiles have no effect on eruption style", es: "Los volátiles no tienen efecto en el estilo de erupción", de: "Volatile haben keinen Einfluss auf Eruptionsstil", nl: "Vluchtigen hebben geen effect op eruptiestijl" },
          { en: "All eruptions contain identical volatile contents", es: "Todas las erupciones contienen contenidos volátiles idénticos", de: "Alle Eruptionen enthalten identische Volatilgehalte", nl: "Alle erupties bevatten identieke vluchtige gehalten" },
          { en: "Environmental impacts are independent of volatile emissions", es: "Los impactos ambientales son independientes de emisiones volátiles", de: "Umweltauswirkungen sind unabhängig von Volatilemissionen", nl: "Milieu-impacts zijn onafhankelijk van vluchtige emisssies" }
        ],
        correct: 0,
        explanation: {
          en: "Volatile phases (H2O, CO2, SO2, halogens) fundamentally control eruption explosivity and environmental impacts through several mechanisms. Volatile exsolution during magma ascent drives bubble nucleation and growth, leading to explosive fragmentation when gas expansion rates exceed magma's ability to deform. High volatile contents promote column formation and enhance atmospheric injection of ash and gases. Volatile emissions, particularly SO2 and halogens, cause environmental impacts including acid rain, ozone depletion, and climate effects. Understanding volatile systematics is crucial for eruption hazard assessment and environmental impact prediction.",
          es: "Las fases volátiles (H2O, CO2, SO2, halógenos) controlan fundamentalmente la explosividad de erupciones e impactos ambientales a través de varios mecanismos. La exsolución de volátiles durante ascenso de magma impulsa nucleación y crecimiento de burbujas, llevando a fragmentación explosiva cuando tasas de expansión de gas exceden la capacidad del magma para deformarse. Altos contenidos volátiles promueven formación de columna y mejoran inyección atmosférica de ceniza y gases. Emisiones volátiles, particularmente SO2 y halógenos, causan impactos ambientales incluyendo lluvia ácida, agotamiento de ozono y efectos climáticos. Entender sistemática volátil es crucial para evaluación de peligros de erupción y predicción de impacto ambiental.",
          de: "Volatile Phasen (H2O, CO2, SO2, Halogene) kontrollieren fundamental Eruptionsexplosivität und Umweltauswirkungen durch mehrere Mechanismen. Volatile Entlösung während Magmaaufstieg treibt Blasenkeimbildung und -wachstum an, führt zu explosiver Fragmentierung wenn Gasexpansionsraten die Verformungsfähigkeit des Magmas überschreiten. Hohe Volatilgehalte fördern Säulenbildung und verstärken atmosphärische Injektion von Asche und Gasen. Volatilemissionen, besonders SO2 und Halogene, verursachen Umweltauswirkungen einschließlich saurem Regen, Ozonabbau und Klimaeffekten. Verständnis volatiler Systematik ist entscheidend für Eruptionsgefahrenbewertung und Umweltimpaktvorhersage.",
          nl: "Vluchtige fasen (H2O, CO2, SO2, halogenen) controleren fundamenteel eruptie-explosiviteit en milieu-impacts door verschillende mechanismen. Vluchtige uitscheiding tijdens magma-opstijging drijft belvorming en -groei aan, leidend tot explosieve fragmentatie wanneer gasexpansiesnelheden het vermogen van magma om te vervormen overschrijden. Hoge vluchtige gehalten bevorderen kolomvorming en versterken atmosferische injectie van as en gassen. Vluchtige emissies, vooral SO2 en halogenen, veroorzaken milieu-impacts inclusief zure regen, ozonafbraak en klimaateffecten. Het begrijpen van vluchtige systematiek is cruciaal voor eruptiegevarenbeoordeling en milieu-impactvoorspelling."
        }
      },
      {
        question: {
          en: "How do magma mixing processes influence eruption triggers and compositional evolution?",
          es: "¿Cómo los procesos de mezcla de magma influencian disparadores de erupción y evolución composicional?",
          de: "Wie beeinflussen Magmamischungsprozesse Eruptionsauslöser und kompositionelle Evolution?",
          nl: "Hoe beïnvloeden magmamengingsprocessen eruptietriggers en compositionele evolutie?"
        },
        options: [
          { en: "Magma mixing triggers eruptions through volatile saturation and thermal/mechanical instabilities", es: "La mezcla de magma dispara erupciones a través de saturación volátil e inestabilidades térmicas/mecánicas", de: "Magmamischung löst Eruptionen durch Volatilsättigung und thermische/mechanische Instabilitäten aus", nl: "Magmamenging triggert erupties door vluchtige verzadiging en thermische/mechanische instabiliteiten" },
          { en: "Magma mixing has no effect on eruption timing", es: "La mezcla de magma no tiene efecto en el tiempo de erupción", de: "Magmamischung hat keinen Einfluss auf Eruptionszeiten", nl: "Magmamenging heeft geen effect op eruptietiming" },
          { en: "All magmas have uniform compositions", es: "Todos los magmas tienen composiciones uniformes", de: "Alle Magmen haben einheitliche Zusammensetzungen", nl: "Alle magma's hebben uniforme samenstellingen" },
          { en: "Mixing only occurs at Earth's surface", es: "La mezcla solo ocurre en la superficie terrestre", de: "Mischung tritt nur an der Erdoberfläche auf", nl: "Menging treedt alleen op aan het aardoppervlak" }
        ],
        correct: 0,
        explanation: {
          en: "Magma mixing is a fundamental process that triggers eruptions and drives compositional evolution in volcanic systems. Injection of hot, volatile-rich mafic magma into cooler, silicic magma chambers can trigger eruptions through several mechanisms: volatile saturation and gas exsolution, density instabilities, thermal convection, and pressure increases. Mixing creates compositional gradients, hybrid magmas, and textural disequilibrium features like resorbed crystals and oscillatory zoning. These processes are recorded in erupted products and provide insights into pre-eruptive magma chamber dynamics and eruption triggers.",
          es: "La mezcla de magma es un proceso fundamental que dispara erupciones e impulsa evolución composicional en sistemas volcánicos. Inyección de magma máfico caliente, rico en volátiles en cámaras de magma silícico más frío puede disparar erupciones a través de varios mecanismos: saturación volátil y exsolución de gas, inestabilidades de densidad, convección térmica y aumentos de presión. La mezcla crea gradientes composicionales, magmas híbridos y características de desequilibrio textural como cristales reabsorbidos y zonación oscilatoria. Estos procesos se registran en productos eruptados y proporcionan perspectivas sobre dinámica de cámara magmática pre-eruptiva y disparadores de erupción.",
          de: "Magmamischung ist ein fundamentaler Prozess, der Eruptionen auslöst und kompositionelle Evolution in vulkanischen Systemen antreibt. Injektion heißer, volatilreicher mafischer Magma in kühlere, silizische Magmakammern kann Eruptionen durch mehrere Mechanismen auslösen: Volatilsättigung und Gasentlösung, Dichteinstabilitäten, thermische Konvektion und Druckanstiege. Mischung schafft kompositionelle Gradienten, Hybridmagmen und texturale Ungleichgewichtsmerkmale wie resorbierte Kristalle und oszillatorische Zonierung. Diese Prozesse werden in eruptierten Produkten aufgezeichnet und bieten Einblicke in prä-eruptive Magmakammerdynamik und Eruptionsauslöser.",
          nl: "Magmamenging is een fundamenteel proces dat erupties triggert en compositionele evolutie in vulkanische systemen aandrijft. Injectie van heet, vluchtig-rijk mafisch magma in koelere, silicische magmakamers kan erupties triggeren door verschillende mechanismen: vluchtige verzadiging en gasuitscheiding, dichtheidsinstabiliteiten, thermische convectie en drukstijgingen. Menging creëert compositionele gradiënten, hybride magma's en texturale disequilibrium-kenmerken zoals geresorbeerde kristallen en oscillerende zonering. Deze processen worden geregistreerd in geërupteerde producten en bieden inzichten in pre-eruptieve magmakamerdynamica en eruptietriggers."
        }
      },
      {
        question: {
          en: "What controls the transition from effusive to explosive eruption styles during single volcanic events?",
          es: "¿Qué controla la transición de estilos de erupción efusivos a explosivos durante eventos volcánicos individuales?",
          de: "Was kontrolliert den Übergang von effusiven zu explosiven Eruptionsstilen während einzelner vulkanischer Ereignisse?",
          nl: "Wat controleert de overgang van effusieve naar explosieve eruptiestijlen tijdens individuele vulkanische gebeurtenissen?"
        },
        options: [
          { en: "Changes in degassing efficiency, ascent rate, and conduit geometry control eruptive style transitions", es: "Cambios en eficiencia de desgasificación, tasa de ascenso y geometría del conducto controlan transiciones de estilo eruptivo", de: "Änderungen in Entgasungseffizienz, Aufstiegsrate und Kanalgeometrie kontrollieren Eruptionsstilübergänge", nl: "Veranderingen in ontgassingsefficiëntie, opstijgingssnelheid en kanaalgeometrie controleren eruptiestijlovergangen" },
          { en: "Eruption style never changes during single events", es: "El estilo de erupción nunca cambia durante eventos individuales", de: "Eruptionsstil ändert sich nie während einzelner Ereignisse", nl: "Eruptiestijl verandert nooit tijdens individuele gebeurtenissen" },
          { en: "Only magma composition determines eruption style", es: "Solo la composición del magma determina el estilo de erupción", de: "Nur Magmazusammensetzung bestimmt Eruptionsstil", nl: "Alleen magmasamenstelling bepaalt eruptiestijl" },
          { en: "External factors have no influence on eruption dynamics", es: "Los factores externos no influyen en la dinámica de erupción", de: "Externe Faktoren haben keinen Einfluss auf Eruptionsdynamik", nl: "Externe factoren hebben geen invloed op eruptiedynamica" }
        ],
        correct: 0,
        explanation: {
          en: "The transition from effusive to explosive eruption styles during single volcanic events is controlled by complex feedback mechanisms involving degassing efficiency, magma ascent rate, and conduit geometry. Initially efficient degassing may become hindered by crystallization, volatile oversaturation, or conduit narrowing, leading to gas accumulation and pressure buildup. Increased ascent rates can overwhelm degassing capacity, while conduit geometry changes affect flow dynamics and gas escape. These transitions are commonly observed in dome-forming eruptions where lava effusion alternates with explosive episodes, creating significant hazard implications for monitoring and risk assessment.",
          es: "La transición de estilos de erupción efusivos a explosivos durante eventos volcánicos individuales es controlada por mecanismos de retroalimentación complejos que involucran eficiencia de desgasificación, tasa de ascenso de magma y geometría del conducto. Desgasificación inicialmente eficiente puede volverse obstaculizada por cristalización, sobresaturación volátil o estrechamiento del conducto, llevando a acumulación de gas y acumulación de presión. Tasas de ascenso aumentadas pueden abrumar capacidad de desgasificación, mientras cambios de geometría del conducto afectan dinámica de flujo y escape de gas. Estas transiciones se observan comúnmente en erupciones formadoras de domos donde efusión de lava alterna con episodios explosivos, creando implicaciones de peligro significativas para monitoreo y evaluación de riesgos.",
          de: "Der Übergang von effusiven zu explosiven Eruptionsstilen während einzelner vulkanischer Ereignisse wird durch komplexe Rückkopplungsmechanismen kontrolliert, die Entgasungseffizienz, Magmaaufstiegsrate und Kanalgeometrie betreffen. Anfangs effiziente Entgasung kann durch Kristallisation, Volatilübersättigung oder Kanalverengung behindert werden, was zu Gasansammlung und Druckaufbau führt. Erhöhte Aufstiegsraten können die Entgasungskapazität überlasten, während Kanalgeometrieänderungen Flussdynamik und Gasentweichung beeinflussen. Diese Übergänge werden häufig in dombildenden Eruptionen beobachtet, wo Lavaeffusion mit explosiven Episoden alterniert und bedeutende Gefahrenimplikationen für Überwachung und Risikobewertung schafft.",
          nl: "De overgang van effusieve naar explosieve eruptiestijlen tijdens individuele vulkanische gebeurtenissen wordt gecontroleerd door complexe feedback-mechanismen die ontgassingsefficiëntie, magma-opstijgingssnelheid en kanaalgeometrie betreffen. Aanvankelijk efficiënte ontgassing kan belemmerd worden door kristallisatie, vluchtige oververzadiging of kanaalsvernauwing, leidend tot gasaccumulatie en drukopbouw. Verhoogde opstijgingssnelheden kunnen ontgassingscapaciteit overweldigen, terwijl kanaalgeometrieveranderingen stroomdynamica en gasontsnapping beïnvloeden. Deze overgangen worden vaak waargenomen in domevor mende erupties waar lava-effusie afwisselt met explosieve episodes, wat significante gevarenimplicaties creëert voor monitoring en risicobeoordeling."
        }
      },
      {
        question: {
          en: "How do conduit flow dynamics affect volcanic ash production and dispersal patterns?",
          es: "¿Cómo afecta la dinámica de flujo del conducto la producción y patrones de dispersión de ceniza volcánica?",
          de: "Wie beeinflussen Kanalflussdynamiken vulkanische Ascheproduktion und Dispersalsmuster?",
          nl: "Hoe beïnvloedt kanaalstroomdynamica vulkanische asproductie en dispersiepatronen?"
        },
        options: [
          { en: "Conduit shear rates and pressure gradients control fragmentation efficiency and particle size distributions", es: "Tasas de cizalla del conducto y gradientes de presión controlan eficiencia de fragmentación y distribuciones de tamaño de partícula", de: "Kanalschergeschwindigkeiten und Druckgradienten kontrollieren Fragmentierungseffizienz und Partikelgrößenverteilungen", nl: "Kanaalschuifsnelheden en drukgradiënten controleren fragmentatie-efficiëntie en deeltjesgrootteverdelingen" },
          { en: "Conduit geometry has no effect on ash production", es: "La geometría del conducto no tiene efecto en la producción de ceniza", de: "Kanalgeometrie hat keinen Einfluss auf Ascheproduktion", nl: "Kanaalgeometrie heeft geen effect op asproductie" },
          { en: "All volcanic ash has identical properties", es: "Toda la ceniza volcánica tiene propiedades idénticas", de: "Alle vulkanische Asche hat identische Eigenschaften", nl: "Alle vulkanische as heeft identieke eigenschappen" },
          { en: "Ash dispersal is only controlled by wind patterns", es: "La dispersión de ceniza solo es controlada por patrones de viento", de: "Aschedispersal wird nur durch Windmuster kontrolliert", nl: "Asdispersie wordt alleen gecontroleerd door windpatronen" }
        ],
        correct: 0,
        explanation: {
          en: "Conduit flow dynamics fundamentally control volcanic ash production and initial dispersal characteristics through fragmentation processes. Shear rates within the conduit, pressure gradients, and acceleration patterns determine fragmentation efficiency and resulting particle size distributions. Higher shear rates and steeper pressure gradients promote finer fragmentation, producing more fine ash particles. Conduit geometry affects flow acceleration and turbulence, influencing fragmentation mechanisms. The initial particle size distribution and ejection velocity from the conduit strongly influence atmospheric transport and sedimentation patterns, affecting regional ash hazard distributions and environmental impacts.",
          es: "La dinámica de flujo del conducto controla fundamentalmente la producción de ceniza volcánica y características de dispersión inicial a través de procesos de fragmentación. Tasas de cizalla dentro del conducto, gradientes de presión y patrones de aceleración determinan eficiencia de fragmentación y distribuciones de tamaño de partícula resultantes. Tasas de cizalla más altas y gradientes de presión más empinados promueven fragmentación más fina, produciendo más partículas de ceniza fina. La geometría del conducto afecta aceleración de flujo y turbulencia, influyendo mecanismos de fragmentación. La distribución inicial de tamaño de partícula y velocidad de eyección desde el conducto influyen fuertemente transporte atmosférico y patrones de sedimentación, afectando distribuciones de peligro de ceniza regional e impactos ambientales.",
          de: "Kanalflussdynamiken kontrollieren fundamental vulkanische Ascheproduktion und anfängliche Dispersalcharakteristiken durch Fragmentierungsprozesse. Schergeschwindigkeiten innerhalb des Kanals, Druckgradienten und Beschleunigungsmuster bestimmen Fragmentierungseffizienz und resultierende Partikelgrößenverteilungen. Höhere Schergeschwindigkeiten und steilere Druckgradienten fördern feinere Fragmentierung und produzieren mehr feine Aschepartikel. Kanalgeometrie beeinflusst Flussbeschleunigung und Turbulenz und beeinflusst Fragmentierungsmechanismen. Die anfängliche Partikelgrößenverteilung und Auswurfgeschwindigkeit aus dem Kanal beeinflussen stark atmosphärischen Transport und Sedimentationsmuster und beeinflussen regionale Aschegefahrenverteilungen und Umweltauswirkungen.",
          nl: "Kanaalstroomdynamica controleren fundamenteel vulkanische asproductie en initiële dispersiekenmerken door fragmentatieprocessen. Schuifsnelheden binnen het kanaal, drukgradiënten en versnellingspatronen bepalen fragmentatie-efficiëntie en resulterende deeltjesgrootteverdelingen. Hogere schuifsnelheden en steilerere drukgradiënten bevorderen fijnere fragmentatie, producerend meer fijne asdeeltjes. Kanaalgeometrie beïnvloedt stroomversnelling en turbulentie, fragmentatiemechanismen beïnvloedend. De initiële deeltjesgrootteverdeling en uitwerpsnelheid vanuit het kanaal beïnvloeden sterk atmosferisch transport en sedimentatiepatronen, regionale asgevarenverdelingen en milieu-impacts beïnvloedend."
        }
      },
      {
        question: {
          en: "What role does crystallization play in controlling magma rheology and eruption dynamics?",
          es: "¿Qué papel juega la cristalización en controlar la reología del magma y dinámica de erupciones?",
          de: "Welche Rolle spielt Kristallisation bei der Kontrolle von Magmarheologie und Eruptionsdynamik?",
          nl: "Welke rol speelt kristallisatie in het controleren van magmareologie en eruptiedynamica?"
        },
        options: [
          { en: "Crystal content and size control viscosity, affecting flow behavior and eruption style", es: "Contenido y tamaño de cristal controlan viscosidad, afectando comportamiento de flujo y estilo de erupción", de: "Kristallgehalt und -größe kontrollieren Viskosität und beeinflussen Fließverhalten und Eruptionsstil", nl: "Kristalgehalte en -grootte controleren viscositeit, stroomgedrag en eruptiestijl beïnvloedend" },
          { en: "Crystallization has no effect on magma properties", es: "La cristalización no tiene efecto en las propiedades del magma", de: "Kristallisation hat keinen Einfluss auf Magmaeigenschaften", nl: "Kristallisatie heeft geen effect op magma-eigenschappen" },
          { en: "All magmas crystallize at identical rates", es: "Todos los magmas cristalizan a tasas idénticas", de: "Alle Magmen kristallisieren mit identischen Raten", nl: "Alle magma's kristalliseren met identieke snelheden" },
          { en: "Crystal size is irrelevant to magma behavior", es: "El tamaño de cristal es irrelevante para el comportamiento del magma", de: "Kristallgröße ist irrelevant für Magmaverhalten", nl: "Kristalgrootte is irrelevant voor magmagedrag" }
        ],
        correct: 0,
        explanation: {
          en: "Crystallization profoundly affects magma rheology and eruption dynamics by increasing effective viscosity and modifying flow behavior. Crystal content above ~30-40 vol% dramatically increases bulk viscosity through particle-particle interactions and flow restriction. Crystal size distributions influence rheological behavior, with fine crystals having greater impact than coarse ones at equivalent volume fractions. Crystallization during ascent can trigger explosive fragmentation by increasing magma strength and hindering gas escape. Decompression-induced crystallization can drive volatile exsolution and explosive eruption transitions. Understanding crystallization kinetics is essential for predicting eruption behavior and hazard assessment.",
          es: "La cristalización afecta profundamente la reología del magma y dinámica de erupciones al aumentar viscosidad efectiva y modificar comportamiento de flujo. Contenido de cristal arriba de ~30-40 vol% aumenta dramáticamente viscosidad aparente a través de interacciones partícula-partícula y restricción de flujo. Distribuciones de tamaño de cristal influyen comportamiento reológico, con cristales finos teniendo mayor impacto que gruesos en fracciones de volumen equivalentes. Cristalización durante ascenso puede disparar fragmentación explosiva al aumentar resistencia del magma y obstaculizar escape de gas. Cristalización inducida por descompresión puede impulsar exsolución volátil y transiciones de erupción explosiva. Entender cinética de cristalización es esencial para predecir comportamiento de erupción y evaluación de peligros.",
          de: "Kristallisation beeinflusst tiefgreifend Magmarheologie und Eruptionsdynamik durch Erhöhung effektiver Viskosität und Modifikation des Fließverhaltens. Kristallgehalt über ~30-40 Vol% erhöht dramatisch Gesamtviskosität durch Partikel-Partikel-Wechselwirkungen und Fließbeschränkung. Kristallgrößenverteilungen beeinflussen rheologisches Verhalten, wobei feine Kristalle größeren Einfluss haben als grobe bei äquivalenten Volumenbrüchen. Kristallisation während des Aufstiegs kann explosive Fragmentierung auslösen durch Erhöhung der Magmafestigkeit und Behinderung des Gasentweichens. Dekompressions-induzierte Kristallisation kann volatile Entlösung und explosive Eruptionsübergänge antreiben. Verständnis der Kristallisationskinetik ist wesentlich für Vorhersage von Eruptionsverhalten und Gefahrenbewertung.",
          nl: "Kristallisatie beïnvloedt diepgaand magmareologie en eruptiedynamica door effectieve viscositeit te verhogen en stroomgedrag te modificeren. Kristalgehalte boven ~30-40 vol% verhoogt dramatisch bulkviscositeit door deeltje-deeltje interacties en stroombeperking. Kristalgrootteverdelingen beïnvloeden reologisch gedrag, waarbij fijne kristallen grotere impact hebben dan grove bij equivalente volumefracties. Kristallisatie tijdens opstijging kan explosieve fragmentatie triggeren door magmasterkte te verhogen en gasontsnapping te belemmeren. Decompressie-geïnduceerde kristallisatie kan vluchtige uitscheiding en explosieve eruptieovergangen aandrijven. Het begrijpen van kristallisatiekinetiek is essentieel voor het voorspellen van eruptiegedrag en gevarenbeoordeling."
        }
      },
      {
        question: {
          en: "How do volcanic aerosol emissions influence atmospheric chemistry and climate systems?",
          es: "¿Cómo influyen las emisiones de aerosoles volcánicos en la química atmosférica y sistemas climáticos?",
          de: "Wie beeinflussen vulkanische Aerosolemissionen atmosphärische Chemie und Klimasysteme?",
          nl: "Hoe beïnvloeden vulkanische aerosolemissies atmosferische chemie en klimaatsystemen?"
        },
        options: [
          { en: "Volcanic SO2 forms sulfate aerosols that scatter radiation and affect ozone chemistry", es: "El SO2 volcánico forma aerosoles de sulfato que dispersan radiación y afectan química del ozono", de: "Vulkanisches SO2 bildet Sulfataerosole, die Strahlung streuen und Ozonchemie beeinflussen", nl: "Vulkanische SO2 vormt sulfaataerosolen die straling verstrooien en ozonchemie beïnvloeden" },
          { en: "Volcanic emissions have no atmospheric effects", es: "Las emisiones volcánicas no tienen efectos atmosféricos", de: "Vulkanische Emissionen haben keine atmosphärischen Effekte", nl: "Vulkanische emissies hebben geen atmosferische effecten" },
          { en: "All volcanic aerosols warm the atmosphere", es: "Todos los aerosoles volcánicos calientan la atmósfera", de: "Alle vulkanischen Aerosole erwärmen die Atmosphäre", nl: "Alle vulkanische aerosolen warmen de atmosfeer op" },
          { en: "Volcanic effects are limited to local areas", es: "Los efectos volcánicos se limitan a áreas locales", de: "Vulkanische Effekte sind auf lokale Gebiete beschränkt", nl: "Vulkanische effecten zijn beperkt tot lokale gebieden" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic aerosol emissions significantly influence atmospheric chemistry and climate systems through complex interactions. SO2 emissions react with atmospheric water to form sulfate aerosols that scatter solar radiation, causing surface cooling but stratospheric warming. These aerosols also participate in ozone destruction reactions, particularly in polar regions. Halogen emissions (HCl, HBr) contribute to ozone depletion through catalytic cycles. Large explosive eruptions can inject aerosols into the stratosphere, causing global cooling effects lasting 1-3 years. Volcanic emissions also provide nuclei for cloud condensation, affecting precipitation patterns and regional climate variability.",
          es: "Las emisiones de aerosoles volcánicos influyen significativamente en la química atmosférica y sistemas climáticos a través de interacciones complejas. Emisiones de SO2 reaccionan con agua atmosférica para formar aerosoles de sulfato que dispersan radiación solar, causando enfriamiento superficial pero calentamiento estratosférico. Estos aerosoles también participan en reacciones de destrucción de ozono, particularmente en regiones polares. Emisiones de halógenos (HCl, HBr) contribuyen a agotamiento de ozono a través de ciclos catalíticos. Erupciones explosivas grandes pueden inyectar aerosoles en la estratosfera, causando efectos de enfriamiento global durando 1-3 años. Emisiones volcánicas también proporcionan núcleos para condensación de nubes, afectando patrones de precipitación y variabilidad climática regional.",
          de: "Vulkanische Aerosolemissionen beeinflussen bedeutend atmosphärische Chemie und Klimasysteme durch komplexe Wechselwirkungen. SO2-Emissionen reagieren mit atmosphärischem Wasser zur Bildung von Sulfataerosolen, die Sonnenstrahlung streuen und Oberflächenkühlung aber stratosphärische Erwärmung verursachen. Diese Aerosole beteiligen sich auch an Ozonzerstörungsreaktionen, besonders in Polarregionen. Halogenemissionen (HCl, HBr) tragen zum Ozonabbau durch katalytische Zyklen bei. Große explosive Eruptionen können Aerosole in die Stratosphäre injizieren und globale Kühleffekte von 1-3 Jahren verursachen. Vulkanische Emissionen liefern auch Keime für Wolkenkondensation und beeinflussen Niederschlagsmuster und regionale Klimavariabilität.",
          nl: "Vulkanische aerosolemissies beïnvloeden significant atmosferische chemie en klimaatsystemen door complexe interacties. SO2-emissies reageren met atmosferisch water om sulfaataerosolen te vormen die zonnestraling verstrooien, oppervlaktekoeling maar stratosferische verwarming veroorzakend. Deze aerosolen participeren ook in ozonvernietigingsreacties, vooral in polaire regio's. Halogeemissies (HCl, HBr) dragen bij aan ozonafbraak door katalytische cycli. Grote explosieve erupties kunnen aerosolen in de stratosfeer injecteren, globale koeleffecten veroorzakend die 1-3 jaar duren. Vulkanische emissies bieden ook kernen voor wolkcondensatie, neerslag patronen en regionale klimaatvariabiliteit beïnvloedend."
        }
      },
      {
        question: {
          en: "What controls the efficiency of volcanic gas separation during magma ascent and degassing?",
          es: "¿Qué controla la eficiencia de separación de gas volcánico durante ascenso y desgasificación de magma?",
          de: "Was kontrolliert die Effizienz vulkanischer Gastrennung während Magmaaufstieg und Entgasung?",
          nl: "Wat controleert de efficiëntie van vulkanische gasscheiding tijdens magma-opstijging en ontgassing?"
        },
        options: [
          { en: "Bubble coalescence, permeability development, and ascent rate control gas escape efficiency", es: "Coalescencia de burbujas, desarrollo de permeabilidad y tasa de ascenso controlan eficiencia de escape de gas", de: "Blasenkoaleszenz, Permeabilitätsentwicklung und Aufstiegsrate kontrollieren Gasentweichungseffizienz", nl: "Belsamenvoeging, permeabiliteitsontwikkeling en opstijgingssnelheid controleren gasontsnappingsefficiëntie" },
          { en: "Gas separation is always 100% efficient", es: "La separación de gas es siempre 100% eficiente", de: "Gastrennung ist immer 100% effizient", nl: "Gasscheiding is altijd 100% efficiënt" },
          { en: "Magma composition has no effect on degassing", es: "La composición del magma no tiene efecto en la desgasificación", de: "Magmazusammensetzung hat keinen Einfluss auf Entgasung", nl: "Magmasamenstelling heeft geen effect op ontgassing" },
          { en: "All gases escape at identical rates", es: "Todos los gases escapan a tasas idénticas", de: "Alle Gase entweichen mit identischen Raten", nl: "Alle gassen ontsnappen met identieke snelheden" }
        ],
        correct: 0,
        explanation: {
          en: "The efficiency of volcanic gas separation during magma ascent depends on complex interactions between bubble dynamics, magma permeability, and ascent kinetics. Bubble coalescence creates connected networks that facilitate gas escape, while permeability development through bubble interconnection and fracturing provides pathways for volatile loss. Rapid ascent rates can outpace degassing, leading to volatile retention and explosive potential. Crystal content affects bubble nucleation and coalescence, while magma rheology influences bubble mobility. Understanding degassing efficiency is crucial for eruption forecasting, as retained volatiles drive explosive eruptions while efficient degassing promotes effusive activity.",
          es: "La eficiencia de separación de gas volcánico durante ascenso de magma depende de interacciones complejas entre dinámica de burbujas, permeabilidad del magma y cinética de ascenso. Coalescencia de burbujas crea redes conectadas que facilitan escape de gas, mientras desarrollo de permeabilidad a través de interconexión de burbujas y fracturación proporciona caminos para pérdida volátil. Tasas de ascenso rápidas pueden superar desgasificación, llevando a retención volátil y potencial explosivo. Contenido de cristal afecta nucleación y coalescencia de burbujas, mientras reología del magma influye movilidad de burbujas. Entender eficiencia de desgasificación es crucial para pronóstico de erupciones, ya que volátiles retenidos impulsan erupciones explosivas mientras desgasificación eficiente promueve actividad efusiva.",
          de: "Die Effizienz vulkanischer Gastrennung während Magmaaufstieg hängt von komplexen Wechselwirkungen zwischen Blasendynamik, Magmapermeabilität und Aufstiegskinetik ab. Blasenkoaleszenz schafft verbundene Netzwerke, die Gasentweichung erleichtern, während Permeabilitätsentwicklung durch Blasenverbindung und Bruchbildung Wege für Volatilverlust bietet. Schnelle Aufstiegsraten können Entgasung übertreffen und zu Volatilretention und explosivem Potential führen. Kristallgehalt beeinflusst Blasenkeimbildung und Koaleszenz, während Magmarheologie Blasenmobilität beeinflusst. Verständnis der Entgasungseffizienz ist entscheidend für Eruptionsprognose, da zurückbehaltene Volatile explosive Eruptionen antreiben, während effiziente Entgasung effusive Aktivität fördert.",
          nl: "De efficiëntie van vulkanische gasscheiding tijdens magma-opstijging hangt af van complexe interacties tussen beluitdynamica, magmapermeabiliteit en opstijgingskinetiek. Belsamenvoeging creëert verbonden netwerken die gasontsnapping faciliteren, terwijl permeabiliteitsontwikkeling door belinterconnectie en breuking paden biedt voor vluchtig verlies. Snelle opstijgingssnelheden kunnen ontgassing overtreffen, leidend tot vluchtige retentie en explosief potentieel. Kristalgehalte beïnvloedt belvorming en samenvoeging, terwijl magmareologie belmobiliteit beïnvloedt. Het begrijpen van ontgassingsefficiëntie is cruciaal voor eruptievoorspelling, omdat vastgehouden vluchtigen explosieve erupties aandrijven terwijl efficiënte ontgassing effusieve activiteit bevordert."
        }
      },
      {
        question: {
          en: "How do caldera-forming eruptions differ from typical explosive eruptions in terms of magma chamber dynamics?",
          es: "¿Cómo difieren las erupciones formadoras de caldera de erupciones explosivas típicas en términos de dinámica de cámara magmática?",
          de: "Wie unterscheiden sich kalderabildende Eruptionen von typischen explosiven Eruptionen in Bezug auf Magmakammerdynamik?",
          nl: "Hoe verschillen caldera-vormende erupties van typische explosieve erupties in termen van magmakamerdynamica?"
        },
        options: [
          { en: "Caldera eruptions involve catastrophic chamber evacuation and roof collapse from large-volume magma withdrawal", es: "Erupciones de caldera involucran evacuación catastrófica de cámara y colapso del techo por retiro de magma de gran volumen", de: "Kalderaeruptionen beinhalten katastrophale Kammerevakuierung und Dachkollaps durch großvolumigen Magmaentzug", nl: "Caldera-erupties omvatten catastrofische kamerevacuatie en daksinstorting door grootvolume magma-onttrekking" },
          { en: "All explosive eruptions form calderas", es: "Todas las erupciones explosivas forman calderas", de: "Alle explosiven Eruptionen bilden Kalderen", nl: "Alle explosieve erupties vormen caldera's" },
          { en: "Caldera eruptions have smaller magma volumes", es: "Las erupciones de caldera tienen volúmenes de magma más pequeños", de: "Kalderaeruptionen haben kleinere Magmavolumen", nl: "Caldera-erupties hebben kleinere magmavolumes" },
          { en: "Chamber dynamics are identical in all eruption types", es: "La dinámica de cámara es idéntica en todos los tipos de erupción", de: "Kammerdynamik ist identisch in allen Eruptionstypen", nl: "Kamerdynamica zijn identiek in alle erupttietypen" }
        ],
        correct: 0,
        explanation: {
          en: "Caldera-forming eruptions represent extreme volcanic events involving catastrophic evacuation of large magma chambers and subsequent roof collapse. These eruptions differ fundamentally from typical explosive eruptions through their enormous magma volumes (>100 km³), sustained high discharge rates, and chamber depressurization leading to structural failure. The rapid withdrawal of magma creates a void that cannot be supported by the overlying rock, causing catastrophic collapse and forming circular depressions (calderas). The evacuation process involves complex feedback between eruption dynamics and chamber mechanics, often triggered by critical volatile oversaturation or external perturbations that initiate runaway discharge.",
          es: "Las erupciones formadoras de caldera representan eventos volcánicos extremos que involucran evacuación catastrófica de cámaras magmáticas grandes y subsecuente colapso del techo. Estas erupciones difieren fundamentalmente de erupciones explosivas típicas a través de sus volúmenes enormes de magma (>100 km³), tasas de descarga altas sostenidas y despresurización de cámara llevando a falla estructural. El retiro rápido de magma crea un vacío que no puede ser soportado por la roca suprayacente, causando colapso catastrófico y formando depresiones circulares (calderas). El proceso de evacuación involucra retroalimentación compleja entre dinámica de erupción y mecánica de cámara, a menudo disparado por sobresaturación volátil crítica o perturbaciones externas que inician descarga descontrolada.",
          de: "Kalderabildende Eruptionen repräsentieren extreme vulkanische Ereignisse mit katastrophaler Evakuierung großer Magmakammern und anschließendem Dachkollaps. Diese Eruptionen unterscheiden sich fundamental von typischen explosiven Eruptionen durch ihre enormen Magmavolumen (>100 km³), anhaltend hohe Entladungsraten und Kammerentdruckung, die zu strukturellem Versagen führt. Die schnelle Magmaentnahme schafft einen Hohlraum, der nicht vom darüberliegenden Gestein getragen werden kann, was katastrophalen Kollaps verursacht und kreisförmige Vertiefungen (Kalderen) bildet. Der Evakuierungsprozess beinhaltet komplexe Rückkopplung zwischen Eruptionsdynamik und Kammermechanik, oft ausgelöst durch kritische Volatilübersättigung oder externe Störungen, die unkontrollierte Entladung initiieren.",
          nl: "Caldera-vormende erupties vertegenwoordigen extreme vulkanische gebeurtenissen met catastrofische evacuatie van grote magmakamers en daaropvolgende dakinstorting. Deze erupties verschillen fundamenteel van typische explosieve erupties door hun enorme magmavolumes (>100 km³), aanhoudend hoge ontladingssnelheden en kamerdepressurisatie leidend tot structureel falen. De snelle magma-onttrekking creëert een leegte die niet ondersteund kan worden door het bovenliggende gesteente, catastrofale instorting veroorzakend en cirkelvormige depressies (caldera's) vormend. Het evacuatieproces omvat complexe feedback tussen eruptiedynamica en kamermechanica, vaak getriggerd door kritische vluchtige oververzadiging of externe verstoringen die ongecontroleerde ontlading initiëren."
        }
      },
      {
        question: {
          en: "What role do volcanic hydrothermal systems play in eruption precursor signals and hazard monitoring?",
          es: "¿Qué papel juegan los sistemas hidrotermales volcánicos en señales precursoras de erupciones y monitoreo de peligros?",
          de: "Welche Rolle spielen vulkanische Hydrothermalsysteme bei Eruptionsvorläufersignalen und Gefahrenüberwachung?",
          nl: "Welke rol spelen vulkanische hydrothermale systemen in eruptievoorlopersignalen en gevarenmonitoring?"
        },
        options: [
          { en: "Hydrothermal changes reflect deep magmatic processes and provide early warning through geochemical and thermal anomalies", es: "Cambios hidrotermales reflejan procesos magmáticos profundos y proporcionan advertencia temprana a través de anomalías geoquímicas y térmicas", de: "Hydrothermale Änderungen reflektieren tiefe magmatische Prozesse und bieten Frühwarnung durch geochemische und thermische Anomalien", nl: "Hydrothermale veranderingen reflecteren diepe magmatische processen en bieden vroege waarschuwing door geochemische en thermische anomalieën" },
          { en: "Hydrothermal systems are unrelated to volcanic activity", es: "Los sistemas hidrotermales no están relacionados con actividad volcánica", de: "Hydrothermalsysteme stehen nicht im Zusammenhang mit vulkanischer Aktivität", nl: "Hydrothermale systemen zijn niet gerelateerd aan vulkanische activiteit" },
          { en: "All volcanic systems have identical hydrothermal signatures", es: "Todos los sistemas volcánicos tienen firmas hidrotermales idénticas", de: "Alle vulkanischen Systeme haben identische hydrothermale Signaturen", nl: "Alle vulkanische systemen hebben identieke hydrothermale signaturen" },
          { en: "Hydrothermal monitoring provides no eruption information", es: "El monitoreo hidrotermal no proporciona información de erupciones", de: "Hydrothermale Überwachung liefert keine Eruptionsinformationen", nl: "Hydrothermale monitoring geeft geen eruptie-informatie" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic hydrothermal systems serve as sensitive indicators of deep magmatic processes and provide valuable eruption precursor signals through various monitoring approaches. Changes in gas compositions (CO2/SO2 ratios, helium isotopes), thermal anomalies, water chemistry, and spring discharge reflect magma intrusion, volatile input, and thermal perturbations in the subsurface. Hydrothermal systems can detect magmatic unrest months to years before surface manifestations, as rising magmas heat groundwater and alter fluid circulation patterns. Integration of hydrothermal monitoring with seismic and geodetic data enhances eruption forecasting capabilities and provides early warning for volcanic hazards.",
          es: "Los sistemas hidrotermales volcánicos sirven como indicadores sensibles de procesos magmáticos profundos y proporcionan señales valiosas precursoras de erupciones a través de varios enfoques de monitoreo. Cambios en composiciones de gas (proporciones CO2/SO2, isótopos de helio), anomalías térmicas, química del agua y descarga de manantiales reflejan intrusión de magma, entrada volátil y perturbaciones térmicas en el subsuelo. Sistemas hidrotermales pueden detectar inquietud magmática meses a años antes de manifestaciones superficiales, ya que magmas ascendentes calientan agua subterránea y alteran patrones de circulación de fluidos. Integración de monitoreo hidrotermal con datos sísmicos y geodésicos mejora capacidades de pronóstico de erupciones y proporciona advertencia temprana para peligros volcánicos.",
          de: "Vulkanische Hydrothermalsysteme dienen als empfindliche Indikatoren tiefer magmatischer Prozesse und liefern wertvolle Eruptionsvorläufersignale durch verschiedene Überwachungsansätze. Änderungen in Gaszusammensetzungen (CO2/SO2-Verhältnisse, Heliumisotope), thermische Anomalien, Wasserchemie und Quellenausfluss reflektieren Magmaintrusion, Volatilinput und thermische Störungen im Untergrund. Hydrothermalsysteme können magmatische Unruhe Monate bis Jahre vor Oberflächenmanifestationen erkennen, da aufsteigende Magmen Grundwasser erwärmen und Fluidzirkulationsmuster verändern. Integration hydrothermaler Überwachung mit seismischen und geodätischen Daten verbessert Eruptionsprognose-Fähigkeiten und bietet Frühwarnung für vulkanische Gefahren.",
          nl: "Vulkanische hydrothermale systemen dienen als gevoelige indicatoren van diepe magmatische processen en bieden waardevolle eruptievoorlopersignalen door verschillende monitoringbenaderingen. Veranderingen in gassamenstellingen (CO2/SO2-verhoudingen, heliumisotopen), thermische anomalieën, waterchemie en bronafvoer reflecteren magma-intrusie, vluchtige input en thermische verstoringen in de ondergrond. Hydrothermale systemen kunnen magmatische onrust maanden tot jaren voor oppervlaktemanifestaties detecteren, omdat opstijgende magma's grondwater verwarmen en vloeistofcirculatiepatronen veranderen. Integratie van hydrothermale monitoring met seismische en geodetische gegevens verbetert eruptievoorspellingscapaciteiten en biedt vroege waarschuwing voor vulkanische gevaren."
        }
      },
      {
        question: {
          en: "How do eruption source parameters influence volcanic cloud height and atmospheric transport modeling?",
          es: "¿Cómo influyen los parámetros de fuente de erupción en la altura de nube volcánica y modelado de transporte atmosférico?",
          de: "Wie beeinflussen Eruptionsquellparameter vulkanische Wolkenhöhe und atmosphärische Transportmodellierung?",
          nl: "Hoe beïnvloeden eruptiebronparameters vulkanische wolkhoogte en atmosferische transportmodellering?"
        },
        options: [
          { en: "Mass eruption rate determines buoyant column height which controls injection altitude for atmospheric transport", es: "Tasa de erupción de masa determina altura de columna boyante que controla altitud de inyección para transporte atmosférico", de: "Masseneruptionsrate bestimmt Auftriebssäulenhöhe, die Injektionshöhe für atmosphärischen Transport kontrolliert", nl: "Massa-eruptiesnelheid bepaalt drijvende kolomhoogte die injectiealtitude voor atmosferisch transport controleert" },
          { en: "Eruption parameters have no effect on cloud behavior", es: "Los parámetros de erupción no tienen efecto en el comportamiento de la nube", de: "Eruptionsparameter haben keinen Einfluss auf Wolkenverhalten", nl: "Eruptieparameters hebben geen effect op wolkgedrag" },
          { en: "All volcanic clouds reach identical heights", es: "Todas las nubes volcánicas alcanzan alturas idénticas", de: "Alle vulkanischen Wolken erreichen identische Höhen", nl: "Alle vulkanische wolken bereiken identieke hoogten" },
          { en: "Atmospheric transport is independent of source conditions", es: "El transporte atmosférico es independiente de condiciones de fuente", de: "Atmosphärischer Transport ist unabhängig von Quellbedingungen", nl: "Atmosferisch transport is onafhankelijk van broncondities" }
        ],
        correct: 0,
        explanation: {
          en: "Eruption source parameters critically control volcanic cloud height and subsequent atmospheric transport through well-established physical relationships. Mass eruption rate (MER) is the primary control on buoyant column height, following empirical relationships where column height scales with MER^0.25. The injection altitude determines which atmospheric layers the volcanic material enters, affecting wind shear, temperature profiles, and transport pathways. Particle size distributions from source conditions control gravitational settling rates and residence times. Accurate source parameter estimation is essential for Volcanic Ash Transport and Dispersion (VATD) models used for aviation hazard mitigation and environmental impact assessment.",
          es: "Los parámetros de fuente de erupción controlan críticamente la altura de nube volcánica y subsecuente transporte atmosférico a través de relaciones físicas bien establecidas. Tasa de erupción de masa (MER) es el control primario en altura de columna boyante, siguiendo relaciones empíricas donde altura de columna escala con MER^0.25. La altitud de inyección determina qué capas atmosféricas entra el material volcánico, afectando cizalla del viento, perfiles de temperatura y caminos de transporte. Distribuciones de tamaño de partícula de condiciones de fuente controlan tasas de sedimentación gravitacional y tiempos de residencia. Estimación precisa de parámetros de fuente es esencial para modelos de Transporte y Dispersión de Ceniza Volcánica (VATD) usados para mitigación de peligros de aviación y evaluación de impacto ambiental.",
          de: "Eruptionsquellparameter kontrollieren kritisch vulkanische Wolkenhöhe und anschließenden atmosphärischen Transport durch gut etablierte physikalische Beziehungen. Masseneruptionsrate (MER) ist die primäre Kontrolle für Auftriebssäulenhöhe, folgt empirischen Beziehungen wobei Säulenhöhe mit MER^0.25 skaliert. Die Injektionshöhe bestimmt, welche atmosphärischen Schichten das vulkanische Material erreicht und beeinflusst Windscherung, Temperaturprofile und Transportwege. Partikelgrößenverteilungen aus Quellbedingungen kontrollieren Gravitationssedimentationsraten und Verweilzeiten. Genaue Quellparameterschätzung ist wesentlich für Volcanic Ash Transport and Dispersion (VATD) Modelle zur Luftfahrtgefahrenmitigation und Umweltimpaktbewertung.",
          nl: "Eruptiebronparameters controleren kritiek vulkanische wolkhoogte en daaropvolgend atmosferisch transport door goed gevestigde fysieke relaties. Massa-eruptiesnelheid (MER) is de primaire controle op drijvende kolomhoogte, empirische relaties volgend waarbij kolomhoogte schaalt met MER^0.25. De injectiealtitude bepaalt welke atmosferische lagen het vulkanische materiaal binnenkomt, windshear, temperatuurprofielen en transportpaden beïnvloedend. Deeltjesgrootteverdelingen van broncondities controleren gravitationele bezinkingssnelheden en verblijftijden. Nauwkeurige bronparameterschatting is essentieel voor Volcanic Ash Transport and Dispersion (VATD) modellen gebruikt voor luchtvaartgevaar-mitigatie en milieu-impactbeoordeling."
        }
      },
      {
        question: {
          en: "What mechanisms control the development and stability of volcanic lava tubes?",
          es: "¿Qué mecanismos controlan el desarrollo y estabilidad de tubos de lava volcánicos?",
          de: "Welche Mechanismen kontrollieren die Entwicklung und Stabilität vulkanischer Lavaröhren?",
          nl: "Welke mechanismen controleren de ontwikkeling en stabiliteit van vulkanische lavabuizen?"
        },
        options: [
          { en: "Thermal insulation, flow rate stability, and roof strength control tube formation and longevity", es: "Aislamiento térmico, estabilidad de tasa de flujo y resistencia del techo controlan formación y longevidad del tubo", de: "Thermische Isolierung, Fließratenstabilität und Dachfestigkeit kontrollieren Röhrenbildung und Langlebigkeit", nl: "Thermische isolatie, stroomsnelheidsstabiliteit en daksterkte controleren buisvorming en duurzaamheid" },
          { en: "Lava tubes form randomly without controlling factors", es: "Los tubos de lava se forman aleatoriamente sin factores controladores", de: "Lavaröhren bilden sich zufällig ohne kontrollierende Faktoren", nl: "Lavabuizen vormen willekeurig zonder controlerende factoren" },
          { en: "All lava flows develop stable tube systems", es: "Todos los flujos de lava desarrollan sistemas de tubos estables", de: "Alle Lavaströme entwickeln stabile Röhrensysteme", nl: "Alle lavastromen ontwikkelen stabiele buissystemen" },
          { en: "Tube stability is independent of lava properties", es: "La estabilidad del tubo es independiente de propiedades de lava", de: "Röhrenstabilität ist unabhängig von Lavaeigenschaften", nl: "Buisstabiliteit is onafhankelijk van lava-eigenschappen" }
        ],
        correct: 0,
        explanation: {
          en: "Lava tube development and stability are controlled by complex interactions between thermal, mechanical, and flow dynamic processes. Thermal insulation from solidified crust allows sustained flow of hot lava over long distances with minimal heat loss. Flow rate stability is crucial - steady effusion rates promote tube formation while fluctuating discharge leads to breakouts and system disruption. Roof strength depends on cooling history, composition, and structural loading from active flow. Successful tube systems require balance between heat supply, insulation efficiency, and structural integrity. Understanding these processes is important for hazard assessment and predicting lava flow paths in populated areas.",
          es: "El desarrollo y estabilidad de tubos de lava son controlados por interacciones complejas entre procesos térmicos, mecánicos y de dinámica de flujo. Aislamiento térmico de corteza solidificada permite flujo sostenido de lava caliente sobre largas distancias con pérdida mínima de calor. Estabilidad de tasa de flujo es crucial - tasas de efusión constantes promueven formación de tubos mientras descarga fluctuante lleva a rupturas y disrupción del sistema. Resistencia del techo depende de historia de enfriamiento, composición y carga estructural del flujo activo. Sistemas de tubos exitosos requieren equilibrio entre suministro de calor, eficiencia de aislamiento e integridad estructural. Entender estos procesos es importante para evaluación de peligros y predecir caminos de flujo de lava en áreas pobladas.",
          de: "Lavaröhrenentwicklung und -stabilität werden durch komplexe Wechselwirkungen zwischen thermischen, mechanischen und flussdynamischen Prozessen kontrolliert. Thermische Isolierung durch erstarrte Kruste ermöglicht anhaltenden Fluss heißer Lava über lange Distanzen mit minimalem Wärmeverlust. Fließratenstabilität ist entscheidend - stetige Effusionsraten fördern Röhrenbildung, während schwankende Entladung zu Ausbrüchen und Systemstörung führt. Dachfestigkeit hängt von Kühlungsgeschichte, Zusammensetzung und struktureller Belastung durch aktiven Fluss ab. Erfolgreiche Röhrensysteme erfordern Gleichgewicht zwischen Wärmezufuhr, Isolierungseffizienz und struktureller Integrität. Verständnis dieser Prozesse ist wichtig für Gefahrenbewertung und Vorhersage von Lavaflusspfaden in bewohnten Gebieten.",
          nl: "Lavabuisontwikkeling en -stabiliteit worden gecontroleerd door complexe interacties tussen thermische, mechanische en stroomdynamische processen. Thermische isolatie van gestolde korst maakt aanhoudende stroom van hete lava over lange afstanden mogelijk met minimaal warmteverlies. Stroomsnelheidsstabiliteit is cruciaal - gestage effusiesnelheden bevorderen buisvorming terwijl fluctuerende afvoer leidt tot uitbraken en systeemverstoring. Daksterkte hangt af van koelingsgeschiedenis, samenstelling en structurele belasting van actieve stroom. Succesvolle buissystemen vereisen balans tussen warmtetoevoer, isolatie-efficiëntie en structurele integriteit. Het begrijpen van deze processen is belangrijk voor gevarenbeoordeling en het voorspellen van lavastroomtrajecten in bewoonde gebieden."
        }
      },
      {
        question: {
          en: "How do volcanic glass formation processes record eruption conditions and magma properties?",
          es: "¿Cómo los procesos de formación de vidrio volcánico registran condiciones de erupción y propiedades del magma?",
          de: "Wie zeichnen vulkanische Glasbildungsprozesse Eruptionsbedingungen und Magmaeigenschaften auf?",
          nl: "Hoe registreren vulkanische glasvormingsprocessen eruptiecondities en magma-eigenschappen?"
        },
        options: [
          { en: "Rapid quenching preserves melt structure and composition, recording temperature, volatile content, and cooling rates", es: "Enfriamiento rápido preserva estructura y composición del fundido, registrando temperatura, contenido volátil y tasas de enfriamiento", de: "Schnelle Abschreckung bewahrt Schmelzstruktur und -zusammensetzung, zeichnet Temperatur, Volatilgehalt und Abkühlungsraten auf", nl: "Snelle afkoeling behoudt smeltstructuur en -samenstelling, temperatuur, vluchtig gehalte en afkoelingssnelheden registrerend" },
          { en: "Volcanic glass provides no information about eruption processes", es: "El vidrio volcánico no proporciona información sobre procesos de erupción", de: "Vulkanisches Glas liefert keine Informationen über Eruptionsprozesse", nl: "Vulkanisch glas geeft geen informatie over eruptieprocessen" },
          { en: "All volcanic glass has identical properties", es: "Todo el vidrio volcánico tiene propiedades idénticas", de: "Alles vulkanische Glas hat identische Eigenschaften", nl: "Alle vulkanisch glas heeft identieke eigenschappen" },
          { en: "Glass formation is independent of cooling conditions", es: "La formación de vidrio es independiente de condiciones de enfriamiento", de: "Glasbildung ist unabhängig von Abkühlungsbedingungen", nl: "Glasvorming is onafhankelijk van afkoelingscondities" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic glass formation through rapid quenching preserves a wealth of information about eruption conditions and pre-eruptive magma properties. The preservation of melt structure prevents crystallization, maintaining original compositions including volatile contents that would otherwise be lost. Glass textures record cooling rates - from vesicular pumice indicating explosive expansion to dense obsidian from slower cooling. Water speciation in glass reflects degassing conditions and storage pressures. Thermal history can be reconstructed from glass transition temperatures and structural relaxation features. These properties make volcanic glass invaluable for understanding eruption dynamics, magma storage conditions, and volatile evolution during volcanic processes.",
          es: "La formación de vidrio volcánico a través de enfriamiento rápido preserva una riqueza de información sobre condiciones de erupción y propiedades pre-eruptivas del magma. La preservación de estructura del fundido previene cristalización, manteniendo composiciones originales incluyendo contenidos volátiles que de otro modo se perderían. Texturas de vidrio registran tasas de enfriamiento - desde piedra pómez vesicular indicando expansión explosiva hasta obsidiana densa de enfriamiento más lento. Especiación de agua en vidrio refleja condiciones de desgasificación y presiones de almacenamiento. Historia térmica puede reconstruirse de temperaturas de transición de vidrio y características de relajación estructural. Estas propiedades hacen al vidrio volcánico invaluable para entender dinámica de erupciones, condiciones de almacenamiento de magma y evolución volátil durante procesos volcánicos.",
          de: "Vulkanische Glasbildung durch schnelle Abschreckung bewahrt eine Fülle von Informationen über Eruptionsbedingungen und prä-eruptive Magmaeigenschaften. Die Bewahrung der Schmelzstruktur verhindert Kristallisation und erhält ursprüngliche Zusammensetzungen einschließlich Volatilgehalten, die sonst verloren gingen. Glastexturen zeichnen Abkühlungsraten auf - von vesikulärem Bimsstein, der explosive Expansion anzeigt, bis zu dichtem Obsidian von langsamerer Abkühlung. Wasserspeziation in Glas reflektiert Entgasungsbedingungen und Speicherdrücke. Thermische Geschichte kann aus Glasübergangstemperaturen und strukturellen Relaxationsmerkmalen rekonstruiert werden. Diese Eigenschaften machen vulkanisches Glas unschätzbar für das Verständnis von Eruptionsdynamik, Magmaspeicherbedingungen und Volatiler Evolution während vulkanischer Prozesse.",
          nl: "Vulkanische glasvorming door snelle afkoeling bewaart een schat aan informatie over eruptiecondities en pre-eruptieve magma-eigenschappen. Het behoud van smeltstructuur voorkomt kristallisatie, oorspronkelijke samenstellingen behoudend inclusief vluchtige gehalten die anders verloren zouden gaan. Glastexturen registreren afkoelingssnelheden - van blaasjesrijke puimsteen die explosieve expansie aanduidt tot dichte obsidiaan van langzamere afkoeling. Waterspeciatie in glas reflecteert ontgassingscondities en opslagdrukken. Thermische geschiedenis kan gereconstrueerd worden uit glastransitietemperaturen en structurele relaxatiekenmerken. Deze eigenschappen maken vulkanisch glas van onschatbare waarde voor het begrijpen van eruptiedynamica, magmaopslagcondities en vluchtige evolutie tijdens vulkanische processen."
        }
      },
      {
        question: {
          en: "What controls the formation and collapse mechanisms of pyroclastic density currents?",
          es: "¿Qué controla los mecanismos de formación y colapso de corrientes de densidad piroclástica?",
          de: "Was kontrolliert die Bildungs- und Kollapsmechanismen pyroklastischer Dichteströme?",
          nl: "Wat controleert de vormings- en instortingsmechanismen van pyroklastische dichtheidsstromen?"
        },
        options: [
          { en: "Column collapse, flow density stratification, and substrate interaction control PDC generation and runout", es: "Colapso de columna, estratificación de densidad de flujo e interacción con sustrato controlan generación y alcance de PDC", de: "Säulenkollaps, Flussdichteschichtung und Substratinteraktion kontrollieren PDC-Generierung und Auslauf", nl: "Kolominstorting, stroomdichtheitsstratificatie en substraatinteractie controleren PDC-generatie en uitloop" },
          { en: "PDCs form through identical mechanisms in all eruptions", es: "Las PDC se forman a través de mecanismos idénticos en todas las erupciones", de: "PDCs bilden sich durch identische Mechanismen in allen Eruptionen", nl: "PDC's vormen door identieke mechanismen in alle erupties" },
          { en: "Topography has no effect on PDC behavior", es: "La topografía no tiene efecto en el comportamiento de PDC", de: "Topographie hat keinen Einfluss auf PDC-Verhalten", nl: "Topografie heeft geen effect op PDC-gedrag" },
          { en: "All PDCs have uniform properties throughout", es: "Todas las PDC tienen propiedades uniformes en todo momento", de: "Alle PDCs haben durchgehend einheitliche Eigenschaften", nl: "Alle PDC's hebben uniforme eigenschappen overal" }
        ],
        correct: 0,
        explanation: {
          en: "Pyroclastic density currents (PDCs) are controlled by complex interactions between column dynamics, flow properties, and environmental factors. Column collapse occurs when eruption rate decreases or when atmospheric drag overcomes buoyancy forces, creating density stratified flows. Dense basal flows carry coarse material close to ground while dilute upper portions transport fine particles over greater distances. Substrate interaction affects flow velocity, erosion, and deposition patterns. Topographic channeling controls flow paths while slope angles influence runout distances. Understanding these mechanisms is crucial for hazard assessment, as PDCs represent one of the most deadly volcanic phenomena due to their high speeds (>100 km/h) and extreme temperatures (>500°C).",
          es: "Las corrientes de densidad piroclástica (PDC) son controladas por interacciones complejas entre dinámica de columna, propiedades de flujo y factores ambientales. Colapso de columna ocurre cuando tasa de erupción disminuye o cuando arrastre atmosférico supera fuerzas de flotabilidad, creando flujos estratificados por densidad. Flujos basales densos transportan material grueso cerca del suelo mientras porciones superiores diluidas transportan partículas finas sobre distancias mayores. Interacción con sustrato afecta velocidad de flujo, erosión y patrones de deposición. Canalización topográfica controla caminos de flujo mientras ángulos de pendiente influyen distancias de alcance. Entender estos mecanismos es crucial para evaluación de peligros, ya que las PDC representan uno de los fenómenos volcánicos más mortales debido a sus altas velocidades (>100 km/h) y temperaturas extremas (>500°C).",
          de: "Pyroklastische Dichteströme (PDCs) werden durch komplexe Wechselwirkungen zwischen Säulendynamik, Flusseigenschaften und Umweltfaktoren kontrolliert. Säulenkollaps tritt auf, wenn Eruptionsrate abnimmt oder atmosphärischer Widerstand Auftriebskräfte überwindet und dichteschichtete Ströme schafft. Dichte basale Ströme transportieren grobes Material bodennah, während verdünnte obere Teile feine Partikel über größere Entfernungen transportieren. Substratinteraktion beeinflusst Fließgeschwindigkeit, Erosion und Ablagerungsmuster. Topographische Kanalisierung kontrolliert Fließwege, während Hangwinkel Auslaufdistanzen beeinflussen. Verständnis dieser Mechanismen ist entscheidend für Gefahrenbewertung, da PDCs eines der tödlichsten vulkanischen Phänomene aufgrund ihrer hohen Geschwindigkeiten (>100 km/h) und extremen Temperaturen (>500°C) darstellen.",
          nl: "Pyroklastische dichtheidsstromen (PDC's) worden gecontroleerd door complexe interacties tussen kolomdynamica, stroomeigenschappen en omgevingsfactoren. Kolominstorting treedt op wanneer eruptiesnelheid afneemt of wanneer atmosferische weerstand drijfkrachten overwint, dichtheidgestraificeerde stromen creërend. Dichte basale stromen vervoeren grof materiaal dicht bij de grond terwijl verdunde bovenste delen fijne deeltjes over grotere afstanden transporteren. Substraatinteractie beïnvloedt stroomsnelheid, erosie en depositiepatronen. Topografische kanalisering controleert stroompaden terwijl hellingshoeken uitloopafstanden beïnvloeden. Het begrijpen van deze mechanismen is cruciaal voor gevarenbeoordeling, omdat PDC's een van de dodelijkste vulkanische fenomenen vertegenwoordigen vanwege hun hoge snelheden (>100 km/u) en extreme temperaturen (>500°C)."
        }
      },
      {
        question: {
          en: "How do volcanic lightning detection networks contribute to real-time eruption monitoring and hazard assessment?",
          es: "¿Cómo contribuyen las redes de detección de rayos volcánicos al monitoreo de erupciones en tiempo real y evaluación de peligros?",
          de: "Wie tragen vulkanische Blitzerkennungsnetzwerke zur Echtzeit-Eruptionsüberwachung und Gefahrenbewertung bei?",
          nl: "Hoe dragen vulkanische bliksemdetectienetwerken bij aan real-time eruptiemonitoring en gevarenbeoordeling?"
        },
        options: [
          { en: "Lightning networks provide remote sensing capabilities for continuous eruption monitoring in hazardous areas", es: "Las redes de rayos proporcionan capacidades de detección remota para monitoreo continuo de erupciones en áreas peligrosas", de: "Blitznetzwerke bieten Fernerkundungsfähigkeiten für kontinuierliche Eruptionsüberwachung in gefährlichen Gebieten", nl: "Bliksemnetwerken bieden remote sensing-mogelijkheden voor continue eruptiemonitoring in gevaarlijke gebieden" },
          { en: "Lightning detection is unreliable for volcanic monitoring", es: "La detección de rayos no es confiable para monitoreo volcánico", de: "Blitzerkennung ist unzuverlässig für vulkanische Überwachung", nl: "Bliksemdetectie is onbetrouwbaar voor vulkanische monitoring" },
          { en: "Volcanic lightning occurs randomly without correlation to eruption processes", es: "Los rayos volcánicos ocurren aleatoriamente sin correlación con procesos de erupción", de: "Vulkanische Blitze treten zufällig ohne Korrelation zu Eruptionsprozessen auf", nl: "Vulkanische bliksem treedt willekeurig op zonder correlatie met eruptieprocessen" },
          { en: "Lightning detection only works during daytime conditions", es: "La detección de rayos solo funciona durante condiciones diurnas", de: "Blitzerkennung funktioniert nur bei Tageslichtbedingungen", nl: "Bliksemdetectie werkt alleen tijdens daglichtomstandigheden" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic lightning detection networks provide crucial remote sensing capabilities for real-time eruption monitoring and hazard assessment. These networks can detect eruption onset, track ash plume evolution, and monitor eruption intensity changes from safe distances, particularly valuable for remote volcanoes or during hazardous conditions. Lightning frequency correlates with eruption vigor and ash production rates, enabling quantitative assessment of eruption intensity. The networks operate continuously in all weather conditions and provide complementary data to traditional seismic and thermal monitoring systems. This technology enhances early warning capabilities and improves aviation safety by providing real-time information about volcanic ash clouds.",
          es: "Las redes de detección de rayos volcánicos proporcionan capacidades cruciales de detección remota para monitoreo de erupciones en tiempo real y evaluación de peligros. Estas redes pueden detectar inicio de erupción, rastrear evolución de pluma de ceniza y monitorear cambios de intensidad de erupción desde distancias seguras, particularmente valioso para volcanes remotos o durante condiciones peligrosas. La frecuencia de rayos se correlaciona con vigor de erupción y tasas de producción de ceniza, permitiendo evaluación cuantitativa de intensidad de erupción. Las redes operan continuamente en todas las condiciones climáticas y proporcionan datos complementarios a sistemas tradicionales de monitoreo sísmico y térmico. Esta tecnología mejora capacidades de advertencia temprana y mejora seguridad de aviación proporcionando información en tiempo real sobre nubes de ceniza volcánica.",
          de: "Vulkanische Blitzerkennungsnetzwerke bieten entscheidende Fernerkundungsfähigkeiten für Echtzeit-Eruptionsüberwachung und Gefahrenbewertung. Diese Netzwerke können Eruptionsbeginn erkennen, Ascheplumenevolution verfolgen und Eruptionsintensitätsänderungen aus sicheren Entfernungen überwachen, besonders wertvoll für abgelegene Vulkane oder bei gefährlichen Bedingungen. Blitzfrequenz korreliert mit Eruptionsintensität und Ascheproduktionsraten, ermöglicht quantitative Bewertung der Eruptionsintensität. Die Netzwerke operieren kontinuierlich bei allen Wetterbedingungen und liefern ergänzende Daten zu traditionellen seismischen und thermischen Überwachungssystemen. Diese Technologie verbessert Frühwarnfähigkeiten und verbessert Luftfahrtsicherheit durch Bereitstellung von Echtzeitinformationen über vulkanische Aschewolken.",
          nl: "Vulkanische bliksemdetectienetwerken bieden cruciale remote sensing-mogelijkheden voor real-time eruptiemonitoring en gevarenbeoordeling. Deze netwerken kunnen eruptiebeginn detecteren, aspluimevolutie volgen en eruptie-intensiteitsveranderingen monitoren vanaf veilige afstanden, bijzonder waardevol voor afgelegen vulkanen of tijdens gevaarlijke omstandigheden. Bliksemfrequentie correleert met eruptiekracht en asproductiesnelheden, kwantitatieve beoordeling van eruptie-intensiteit mogelijk makend. De netwerken opereren continu in alle weersomstandigheden en bieden aanvullende gegevens aan traditionele seismische en thermische monitoringsystemen. Deze technologie verbetert vroege waarschuwingsmogelijkheden en verbetert luchtvaartveiligheid door real-time informatie over vulkanische aswolken te bieden."
        }
      },
      {
        question: {
          en: "What role does magma chamber zonation play in controlling eruption sequences and compositional evolution?",
          es: "¿Qué papel juega la zonación de cámara magmática en controlar secuencias de erupción y evolución composicional?",
          de: "Welche Rolle spielt Magmakammerzonierung bei der Kontrolle von Eruptionssequenzen und kompositioneller Evolution?",
          nl: "Welke rol speelt magmakamerzonering in het controleren van eruptiesequenties en compositionele evolutie?"
        },
        options: [
          { en: "Density stratification creates compositional gradients that control eruption order and temporal evolution", es: "Estratificación de densidad crea gradientes composicionales que controlan orden de erupción y evolución temporal", de: "Dichteschichtung schafft kompositionelle Gradienten, die Eruptionsreihenfolge und zeitliche Evolution kontrollieren", nl: "Dichtheidsstratificatie creëert compositionele gradiënten die eruptievolgorde en temporele evolutie controleren" },
          { en: "Magma chambers are always compositionally homogeneous", es: "Las cámaras magmáticas son siempre composicionalmente homogéneas", de: "Magmakammern sind immer kompositionell homogen", nl: "Magmakamers zijn altijd compositioneel homogeen" },
          { en: "Chamber zonation has no effect on erupted products", es: "La zonación de cámara no tiene efecto en productos eruptados", de: "Kammerzonierung hat keinen Einfluss auf eruptierte Produkte", nl: "Kamerzonering heeft geen effect op geërupteerde producten" },
          { en: "All eruptions tap the same compositional zone", es: "Todas las erupciones aprovechan la misma zona composicional", de: "Alle Eruptionen zapfen dieselbe kompositionelle Zone an", nl: "Alle erupties tappen dezelfde compositionele zone aan" }
        ],
        correct: 0,
        explanation: {
          en: "Magma chamber zonation fundamentally controls eruption sequences and compositional evolution through density-driven stratification processes. Less dense, evolved magmas accumulate at chamber tops while denser, primitive compositions reside at depth. This creates systematic compositional gradients that are tapped sequentially during eruptions. Early erupted materials reflect shallow, evolved compositions while later phases access deeper, more primitive zones. Progressive chamber evacuation reveals this zonation through temporal compositional changes in erupted products. Understanding chamber architecture is crucial for predicting eruption evolution, potential hazard changes, and long-term volcanic behavior patterns.",
          es: "La zonación de cámara magmática controla fundamentalmente secuencias de erupción y evolución composicional a través de procesos de estratificación impulsados por densidad. Magmas menos densos y evolucionados se acumulan en las cimas de cámaras mientras composiciones más densas y primitivas residen en profundidad. Esto crea gradientes composicionales sistemáticos que son aprovechados secuencialmente durante erupciones. Materiales eruptados tempranos reflejan composiciones superficiales y evolucionadas mientras fases posteriores acceden zonas más profundas y primitivas. Evacuación progresiva de cámara revela esta zonación a través de cambios composicionales temporales en productos eruptados. Entender arquitectura de cámara es crucial para predecir evolución de erupción, cambios potenciales de peligro y patrones de comportamiento volcánico a largo plazo.",
          de: "Magmakammerzonierung kontrolliert fundamental Eruptionssequenzen und kompositionelle Evolution durch dichtegetriebene Stratifikationsprozesse. Weniger dichte, entwickelte Magmen akkumulieren an Kammerspitzen während dichtere, primitive Zusammensetzungen in der Tiefe residieren. Dies schafft systematische kompositionelle Gradienten, die sequenziell während Eruptionen angezapft werden. Früh eruptierte Materialien reflektieren oberflächliche, entwickelte Zusammensetzungen während spätere Phasen tiefere, primitivere Zonen erreichen. Progressive Kammerevakuierung offenbart diese Zonierung durch zeitliche kompositionelle Änderungen in eruptierten Produkten. Verständnis der Kammerarchitektur ist entscheidend für Vorhersage der Eruptionsevolution, potenzielle Gefahrenänderungen und langfristige vulkanische Verhaltensmuster.",
          nl: "Magmakamerzonering controleert fundamenteel eruptiesequenties en compositionele evolutie door dichtheid-gedreven stratificatieprocessen. Minder dichte, geëvolueerde magma's accumuleren aan kamertops terwijl dichtere, primitieve samenstellingen in de diepte verblijven. Dit creëert systematische compositionele gradiënten die sequentieel worden aangeboord tijdens erupties. Vroeg geërupteerde materialen reflecteren ondiepe, geëvolueerde samenstellingen terwijl latere fasen diepere, meer primitieve zones bereiken. Progressieve kamerevacuatie onthult deze zonering door temporele compositionele veranderingen in geërupteerde producten. Het begrijpen van kamerarchitectuur is cruciaal voor het voorspellen van eruptie-evolutie, potentiële gevarenveranderingen en lange-termijn vulkanische gedragspatronen."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mind-bender/volcanology', level1);
  }
})();
