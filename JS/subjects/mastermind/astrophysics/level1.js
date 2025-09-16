// Astrophysics - Level 1: Stellar Evolution & Cosmology
(function() {
  const level1 = {
    name: {
      en: "Stellar Evolution & Cosmology",
      es: "Evolución Estelar y Cosmología",
      de: "Sternentwicklung und Kosmologie",
      nl: "Stellaire Evolutie en Kosmologie"
    },
    questions: [
      {
        question: {
          en: "What is the Chandrasekhar limit?",
          es: "¿Qué es el límite de Chandrasekhar?",
          de: "Was ist das Chandrasekhar-Limit?",
          nl: "Wat is de Chandrasekhar limiet?"
        },
        options: [
          { en: "Maximum mass of a white dwarf star before collapse", es: "Masa máxima de una enana blanca antes del colapso", de: "Maximale Masse eines weißen Zwergsterns vor dem Kollaps", nl: "Maximale massa van een witte dwergster voor ineenstorting" },
          { en: "Speed of light in vacuum", es: "Velocidad de la luz en el vacío", de: "Lichtgeschwindigkeit im Vakuum", nl: "Lichtsnelheid in vacuum" },
          { en: "Distance to nearest star", es: "Distancia a la estrella más cercana", de: "Entfernung zum nächsten Stern", nl: "Afstand tot dichtstbijzijnde ster" },
          { en: "Temperature of cosmic background radiation", es: "Temperatura de la radiación cósmica de fondo", de: "Temperatur der kosmischen Hintergrundstrahlung", nl: "Temperatuur van kosmische achtergrondstraling" }
        ],
        correct: 0,
        explanation: {
          en: "The Chandrasekhar limit is approximately 1.4 solar masses, the maximum mass a white dwarf can have before electron degeneracy pressure can no longer support it against gravitational collapse, leading to a Type Ia supernova.",
          es: "El límite de Chandrasekhar es aproximadamente 1.4 masas solares, la masa máxima que puede tener una enana blanca antes de que la presión de degeneración de electrones ya no pueda sostenerla contra el colapso gravitacional, llevando a una supernova Tipo Ia.",
          de: "Das Chandrasekhar-Limit beträgt etwa 1,4 Sonnenmassen, die maximale Masse, die ein weißer Zwergstern haben kann, bevor der Elektronendegenerationsdruck ihn nicht mehr gegen den gravitativen Kollaps stützen kann, was zu einer Typ-Ia-Supernova führt.",
          nl: "De Chandrasekhar limiet is ongeveer 1,4 zonnemassa's, de maximale massa die een witte dwerg kan hebben voordat elektronendegeneratiedruk het niet langer kan ondersteunen tegen gravitationele ineenstorting, wat leidt tot een Type Ia supernova."
        }
      },
      {
        question: {
          en: "What is the Schwarzschild radius?",
          es: "¿Qué es el radio de Schwarzschild?",
          de: "Was ist der Schwarzschild-Radius?",
          nl: "Wat is de Schwarzschild straal?"
        },
        options: [
          { en: "Event horizon radius of a black hole", es: "Radio del horizonte de eventos de un agujero negro", de: "Ereignishorizont-Radius eines Schwarzen Lochs", nl: "Gebeurtenishorizon straal van een zwart gat" },
          { en: "Orbital radius of Mercury", es: "Radio orbital de Mercurio", de: "Orbitalradius von Merkur", nl: "Orbitale straal van Mercurius" },
          { en: "Radius of the observable universe", es: "Radio del universo observable", de: "Radius des beobachtbaren Universums", nl: "Straal van het waarneembare heelal" },
          { en: "Distance between Earth and Sun", es: "Distancia entre la Tierra y el Sol", de: "Entfernung zwischen Erde und Sonne", nl: "Afstand tussen Aarde en Zon" }
        ],
        correct: 0,
        explanation: {
          en: "The Schwarzschild radius defines the event horizon of a black hole, calculated as rs = 2GM/c², where nothing, not even light, can escape once it crosses this boundary.",
          es: "El radio de Schwarzschild define el horizonte de eventos de un agujero negro, calculado como rs = 2GM/c², donde nada, ni siquiera la luz, puede escapar una vez que cruza esta frontera.",
          de: "Der Schwarzschild-Radius definiert den Ereignishorizont eines Schwarzen Lochs, berechnet als rs = 2GM/c², wo nichts, nicht einmal Licht, entkommen kann, sobald es diese Grenze überschreitet.",
          nl: "De Schwarzschild straal definieert de gebeurtenishorizon van een zwart gat, berekend als rs = 2GM/c², waar niets, zelfs geen licht, kan ontsnappen zodra het deze grens overschrijdt."
        }
      },
      {
        question: {
          en: "What is dark energy believed to cause?",
          es: "¿Qué se cree que causa la energía oscura?",
          de: "Was soll dunkle Energie verursachen?",
          nl: "Wat wordt verondersteld dat donkere energie veroorzaakt?"
        },
        options: [
          { en: "Accelerating expansion of the universe", es: "Expansión acelerada del universo", de: "Beschleunigte Expansion des Universums", nl: "Versnellende uitdijing van het heelal" },
          { en: "Galaxy rotation curves", es: "Curvas de rotación de galaxias", de: "Galaxien-Rotationskurven", nl: "Galactische rotatiecurves" },
          { en: "Formation of black holes", es: "Formación de agujeros negros", de: "Entstehung von Schwarzen Löchern", nl: "Vorming van zwarte gaten" },
          { en: "Solar wind acceleration", es: "Aceleración del viento solar", de: "Beschleunigung des Sonnenwinds", nl: "Versnelling van zonnewind" }
        ],
        correct: 0,
        explanation: {
          en: "Dark energy comprises about 68% of the universe and is hypothesized to be responsible for the observed accelerating expansion of the universe, discovered through Type Ia supernova observations.",
          es: "La energía oscura comprende aproximadamente el 68% del universo y se hipotetiza que es responsable de la expansión acelerada observada del universo, descubierta a través de observaciones de supernovas Tipo Ia.",
          de: "Dunkle Energie macht etwa 68% des Universums aus und wird als Hypothese für die beobachtete beschleunigte Expansion des Universums angesehen, die durch Typ-Ia-Supernova-Beobachtungen entdeckt wurde.",
          nl: "Donkere energie vormt ongeveer 68% van het heelal en wordt verondersteld verantwoordelijk te zijn voor de waargenomen versnellende uitdijing van het heelal, ontdekt door Type Ia supernova waarnemingen."
        }
      },
      {
        question: {
          en: "What is a pulsar?",
          es: "¿Qué es un pulsar?",
          de: "Was ist ein Pulsar?",
          nl: "Wat is een pulsar?"
        },
        options: [
          { en: "Rapidly rotating neutron star emitting radio beams", es: "Estrella de neutrones que rota rápidamente emitiendo haces de radio", de: "Schnell rotierender Neutronenstern, der Radiostrahlen aussendet", nl: "Snel roterende neutronenster die radiostralen uitzendt" },
          { en: "Variable brightness binary star", es: "Estrella binaria de brillo variable", de: "Doppelstern mit variabler Helligkeit", nl: "Dubbelstersysteem met variabele helderheid" },
          { en: "Colliding galaxy system", es: "Sistema de galaxias en colisión", de: "Kollidierendes Galaxiensystem", nl: "Botsend sterrenstelsel systeem" },
          { en: "Planetary nebula formation", es: "Formación de nebulosa planetaria", de: "Planetarische Nebel-Entstehung", nl: "Planetaire nevel formatie" }
        ],
        correct: 0,
        explanation: {
          en: "Pulsars are highly magnetized, rapidly rotating neutron stars that emit beams of electromagnetic radiation. As the star rotates, these beams sweep across space like lighthouse beams, appearing as regular pulses when observed from Earth.",
          es: "Los pulsares son estrellas de neutrones altamente magnetizadas y de rotación rápida que emiten haces de radiación electromagnética. Cuando la estrella rota, estos haces barren el espacio como haces de faro, apareciendo como pulsos regulares cuando se observan desde la Tierra.",
          de: "Pulsare sind hochmagnetisierte, schnell rotierende Neutronensterne, die Strahlen elektromagnetischer Strahlung aussenden. Während der Stern rotiert, fegen diese Strahlen durch den Raum wie Leuchtturmstrahlen und erscheinen als regelmäßige Pulse, wenn sie von der Erde aus beobachtet werden.",
          nl: "Pulsars zijn sterk gemagnetiseerde, snel roterende neutronensterren die bundels elektromagnetische straling uitzenden. Terwijl de ster roteert, vegen deze bundels door de ruimte zoals vuurtorenlichten, en verschijnen als regelmatige pulsen wanneer waargenomen vanaf de Aarde."
        }
      },
      {
        question: {
          en: "What is the cosmic microwave background (CMB)?",
          es: "¿Qué es la radiación cósmica de fondo de microondas (CMB)?",
          de: "Was ist die kosmische Mikrowellen-Hintergrundstrahlung (CMB)?",
          nl: "Wat is de kosmische microgolfachtergrond (CMB)?"
        },
        options: [
          { en: "Remnant radiation from the Big Bang", es: "Radiación remanente del Big Bang", de: "Reststrahlung vom Urknall", nl: "Overblijvende straling van de Big Bang" },
          { en: "Radio waves from distant galaxies", es: "Ondas de radio de galaxias distantes", de: "Radiowellen von entfernten Galaxien", nl: "Radiogolven van verre sterrenstelsels" },
          { en: "Solar radiation reflection", es: "Reflexión de radiación solar", de: "Reflexion von Sonnenstrahlung", nl: "Reflectie van zonnestraling" },
          { en: "Interstellar dust emissions", es: "Emisiones de polvo interestelar", de: "Interstellare Staubemissionen", nl: "Interstellaire stofemissies" }
        ],
        correct: 0,
        explanation: {
          en: "The CMB is the afterglow of the Big Bang, discovered in 1965. It's nearly uniform radiation at 2.7 K throughout the universe, providing crucial evidence for the Big Bang theory and insights into the early universe's structure.",
          es: "El CMB es el resplandor residual del Big Bang, descubierto en 1965. Es radiación casi uniforme a 2.7 K en todo el universo, proporcionando evidencia crucial para la teoría del Big Bang y perspectivas sobre la estructura del universo temprano.",
          de: "Die CMB ist das Nachglühen des Urknalls, entdeckt 1965. Es ist nahezu gleichmäßige Strahlung bei 2,7 K im gesamten Universum und liefert entscheidende Beweise für die Urknalltheorie und Einblicke in die Struktur des frühen Universums.",
          nl: "De CMB is de nagloed van de Big Bang, ontdekt in 1965. Het is bijna uniforme straling van 2,7 K door het hele heelal, en biedt cruciale bewijs voor de Big Bang theorie en inzichten in de structuur van het vroege heelal."
        }
      },
      {
        question: {
          en: "What process powers main sequence stars like our Sun?",
          es: "¿Qué proceso alimenta las estrellas de secuencia principal como nuestro Sol?",
          de: "Welcher Prozess treibt Hauptreihensterne wie unsere Sonne an?",
          nl: "Welk proces voedt hoofdreekssterren zoals onze Zon?"
        },
        options: [
          { en: "Nuclear fusion of hydrogen into helium", es: "Fusión nuclear de hidrógeno en helio", de: "Kernfusion von Wasserstoff zu Helium", nl: "Kernfusie van waterstof tot helium" },
          { en: "Gravitational contraction", es: "Contracción gravitacional", de: "Gravitationskontraktion", nl: "Gravitationele samentrekking" },
          { en: "Chemical combustion", es: "Combustión química", de: "Chemische Verbrennung", nl: "Chemische verbranding" },
          { en: "Nuclear fission", es: "Fisión nuclear", de: "Kernspaltung", nl: "Kernsplijting" }
        ],
        correct: 0,
        explanation: {
          en: "Main sequence stars derive their energy from the fusion of hydrogen nuclei into helium in their cores, releasing tremendous amounts of energy according to Einstein's E=mc². This process can sustain stars for billions of years.",
          es: "Las estrellas de secuencia principal obtienen su energía de la fusión de núcleos de hidrógeno en helio en sus núcleos, liberando tremendas cantidades de energía según la ecuación E=mc² de Einstein. Este proceso puede sostener las estrellas durante miles de millones de años.",
          de: "Hauptreihensterne beziehen ihre Energie aus der Fusion von Wasserstoffkernen zu Helium in ihren Kernen und setzen dabei enorme Energiemengen frei, entsprechend Einsteins E=mc². Dieser Prozess kann Sterne Milliarden von Jahren lang aufrechterhalten.",
          nl: "Hoofdreekssterren halen hun energie uit de fusie van waterstofkernen tot helium in hun kernen, waarbij enorme hoeveelheden energie vrijkomen volgens Einstein's E=mc². Dit proces kan sterren miljarden jaren in stand houden."
        }
      },
      {
        question: {
          en: "What is a Type Ia supernova?",
          es: "¿Qué es una supernova Tipo Ia?",
          de: "Was ist eine Typ-Ia-Supernova?",
          nl: "Wat is een Type Ia supernova?"
        },
        options: [
          { en: "White dwarf explosion after exceeding Chandrasekhar limit", es: "Explosión de enana blanca después de exceder el límite de Chandrasekhar", de: "Weißer Zwergstern-Explosion nach Überschreitung des Chandrasekhar-Limits", nl: "Witte dwerg explosie na het overschrijden van de Chandrasekhar limiet" },
          { en: "Core collapse of massive star", es: "Colapso del núcleo de estrella masiva", de: "Kernkollaps eines massereichen Sterns", nl: "Kernineenstorting van massieve ster" },
          { en: "Collision of two neutron stars", es: "Colisión de dos estrellas de neutrones", de: "Kollision zweier Neutronensterne", nl: "Botsing van twee neutronensterren" },
          { en: "Formation of planetary nebula", es: "Formación de nebulosa planetaria", de: "Entstehung eines planetarischen Nebels", nl: "Vorming van planetaire nevel" }
        ],
        correct: 0,
        explanation: {
          en: "Type Ia supernovae occur when a white dwarf in a binary system accretes material from its companion until it exceeds the Chandrasekhar limit, resulting in complete thermonuclear destruction. They serve as 'standard candles' for measuring cosmic distances.",
          es: "Las supernovas Tipo Ia ocurren cuando una enana blanca en un sistema binario acumula material de su compañera hasta que excede el límite de Chandrasekhar, resultando en destrucción termonuclear completa. Sirven como 'velas estándar' para medir distancias cósmicas.",
          de: "Typ-Ia-Supernovae treten auf, wenn ein weißer Zwerg in einem Doppelsternsystem Material von seinem Begleiter ansammelt, bis er das Chandrasekhar-Limit überschreitet, was zur vollständigen thermonuklearen Zerstörung führt. Sie dienen als 'Standardkerzen' zur Messung kosmischer Entfernungen.",
          nl: "Type Ia supernovae treden op wanneer een witte dwerg in een dubbelstersysteem materiaal verzamelt van zijn begeleider totdat het de Chandrasekhar limiet overschrijdt, wat resulteert in complete thermonucleaire vernietiging. Ze dienen als 'standaardkaarsen' voor het meten van kosmische afstanden."
        }
      },
      {
        question: {
          en: "What is gravitational lensing?",
          es: "¿Qué es la lente gravitacional?",
          de: "Was ist Gravitationslinseneffekt?",
          nl: "Wat is gravitationele lenswerking?"
        },
        options: [
          { en: "Bending of light by massive objects warping spacetime", es: "Curvatura de la luz por objetos masivos que deforman el espacio-tiempo", de: "Beugung von Licht durch massive Objekte, die die Raumzeit verzerren", nl: "Buiging van licht door massieve objecten die ruimtetijd vervormen" },
          { en: "Refraction through interstellar gas", es: "Refracción a través de gas interestelar", de: "Brechung durch interstellares Gas", nl: "Breking door interstellair gas" },
          { en: "Scattering by cosmic dust", es: "Dispersión por polvo cósmico", de: "Streuung durch kosmischen Staub", nl: "Verstrooiing door kosmisch stof" },
          { en: "Reflection from planetary atmospheres", es: "Reflexión de atmósferas planetarias", de: "Reflexion von Planetenatmosphären", nl: "Reflectie van planetaire atmosferen" }
        ],
        correct: 0,
        explanation: {
          en: "Gravitational lensing occurs when massive objects like galaxies or black holes bend spacetime, causing light from background objects to be deflected, magnified, or distorted. This phenomenon confirms Einstein's general relativity and helps study dark matter.",
          es: "La lente gravitacional ocurre cuando objetos masivos como galaxias o agujeros negros curvan el espacio-tiempo, causando que la luz de objetos de fondo se desvíe, magnifique o distorsione. Este fenómeno confirma la relatividad general de Einstein y ayuda a estudiar la materia oscura.",
          de: "Gravitationslinseneffekt tritt auf, wenn massive Objekte wie Galaxien oder Schwarze Löcher die Raumzeit krümmen, wodurch Licht von Hintergrundobjekten abgelenkt, vergrößert oder verzerrt wird. Dieses Phänomen bestätigt Einsteins allgemeine Relativitätstheorie und hilft beim Studium dunkler Materie.",
          nl: "Gravitationele lenswerking treedt op wanneer massieve objecten zoals sterrenstelsels of zwarte gaten ruimtetijd krommen, waardoor licht van achtergrondobjecten wordt afgebogen, vergroot of vervormd. Dit fenomeen bevestigt Einstein's algemene relativiteitstheorie en helpt bij het bestuderen van donkere materie."
        }
      },
      {
        question: {
          en: "What is the Hubble constant?",
          es: "¿Qué es la constante de Hubble?",
          de: "Was ist die Hubble-Konstante?",
          nl: "Wat is de Hubble constante?"
        },
        options: [
          { en: "Rate of expansion of the universe", es: "Tasa de expansión del universo", de: "Expansionsrate des Universums", nl: "Uitdijingssnelheid van het heelal" },
          { en: "Speed of light in vacuum", es: "Velocidad de la luz en el vacío", de: "Lichtgeschwindigkeit im Vakuum", nl: "Lichtsnelheid in vacuum" },
          { en: "Gravitational constant", es: "Constante gravitacional", de: "Gravitationskonstante", nl: "Gravitatieconstante" },
          { en: "Planck's constant", es: "Constante de Planck", de: "Planck-Konstante", nl: "Planck constante" }
        ],
        correct: 0,
        explanation: {
          en: "The Hubble constant (H₀) measures how fast the universe is expanding, typically expressed as kilometers per second per megaparsec. Current measurements suggest a value around 70 km/s/Mpc, though there's ongoing debate about its precise value.",
          es: "La constante de Hubble (H₀) mide qué tan rápido se está expandiendo el universo, típicamente expresada como kilómetros por segundo por megaparsec. Las mediciones actuales sugieren un valor alrededor de 70 km/s/Mpc, aunque hay debate continuo sobre su valor preciso.",
          de: "Die Hubble-Konstante (H₀) misst, wie schnell sich das Universum ausdehnt, typischerweise ausgedrückt als Kilometer pro Sekunde pro Megaparsec. Aktuelle Messungen deuten auf einen Wert um 70 km/s/Mpc hin, obwohl es anhaltende Debatten über ihren genauen Wert gibt.",
          nl: "De Hubble constante (H₀) meet hoe snel het heelal uitdijt, typisch uitgedrukt als kilometers per seconde per megaparsec. Huidige metingen suggereren een waarde rond 70 km/s/Mpc, hoewel er voortdurende discussie is over de precieze waarde."
        }
      },
      {
        question: {
          en: "What is a gamma-ray burst (GRB)?",
          es: "¿Qué es un estallido de rayos gamma (GRB)?",
          de: "Was ist ein Gammastrahlenausbruch (GRB)?",
          nl: "Wat is een gammastraalflits (GRB)?"
        },
        options: [
          { en: "Most energetic electromagnetic event in the universe", es: "Evento electromagnético más energético del universo", de: "Energiereichstes elektromagnetisches Ereignis im Universum", nl: "Meest energetische elektromagnetische gebeurtenis in het heelal" },
          { en: "Solar flare activity", es: "Actividad de erupciones solares", de: "Sonneneruptionsaktivität", nl: "Zonnevlamactiviteit" },
          { en: "Aurora formation", es: "Formación de auroras", de: "Aurorabildung", nl: "Aurora vorming" },
          { en: "Lightning in Jupiter's atmosphere", es: "Rayos en la atmósfera de Júpiter", de: "Blitze in Jupiters Atmosphäre", nl: "Bliksem in Jupiter's atmosfeer" }
        ],
        correct: 0,
        explanation: {
          en: "Gamma-ray bursts are extremely energetic explosions that release more energy in seconds than the Sun will produce in its entire 10-billion-year lifetime. They're thought to result from collapsing massive stars or merging neutron stars.",
          es: "Los estallidos de rayos gamma son explosiones extremadamente energéticas que liberan más energía en segundos de la que el Sol producirá en toda su vida de 10 mil millones de años. Se cree que resultan del colapso de estrellas masivas o fusión de estrellas de neutrones.",
          de: "Gammastrahlenausbrüche sind extrem energiereiche Explosionen, die in Sekunden mehr Energie freisetzen, als die Sonne in ihrer gesamten 10-Milliarden-Jahre-Lebensspanne produzieren wird. Sie entstehen vermutlich durch kollabrierende massereiche Sterne oder verschmelzende Neutronensterne.",
          nl: "Gammastraalflitsen zijn extreem energetische explosies die in seconden meer energie vrijgeven dan de Zon in haar hele 10-miljard-jaar levensduur zal produceren. Ze worden verondersteld te ontstaan door instortende massieve sterren of samenvoegende neutronensterren."
        }
      },
      {
        question: {
          en: "What is dark matter primarily detected through?",
          es: "¿A través de qué se detecta principalmente la materia oscura?",
          de: "Wodurch wird dunkle Materie hauptsächlich nachgewiesen?",
          nl: "Hoe wordt donkere materie voornamelijk gedetecteerd?"
        },
        options: [
          { en: "Gravitational effects on visible matter", es: "Efectos gravitacionales en la materia visible", de: "Gravitationseffekte auf sichtbare Materie", nl: "Gravitationele effecten op zichtbare materie" },
          { en: "Direct optical observation", es: "Observación óptica directa", de: "Direkte optische Beobachtung", nl: "Directe optische waarneming" },
          { en: "Radio wave emissions", es: "Emisiones de ondas de radio", de: "Radiowellenemissionen", nl: "Radiogolf emissies" },
          { en: "X-ray photography", es: "Fotografía de rayos X", de: "Röntgenfotografie", nl: "Röntgenfotografie" }
        ],
        correct: 0,
        explanation: {
          en: "Dark matter doesn't emit or absorb light, making it invisible. We detect it through its gravitational effects on visible matter, such as galaxy rotation curves, gravitational lensing, and large-scale structure formation in the universe.",
          es: "La materia oscura no emite ni absorbe luz, haciéndola invisible. La detectamos a través de sus efectos gravitacionales en la materia visible, como las curvas de rotación de galaxias, lentes gravitacionales y formación de estructura a gran escala en el universo.",
          de: "Dunkle Materie emittiert oder absorbiert kein Licht, was sie unsichtbar macht. Wir entdecken sie durch ihre gravitativen Auswirkungen auf sichtbare Materie, wie Galaxien-Rotationskurven, Gravitationslinseneffekt und großräumige Strukturbildung im Universum.",
          nl: "Donkere materie zendt geen licht uit of absorbeert het niet, waardoor het onzichtbaar is. We detecteren het door zijn gravitationele effecten op zichtbare materie, zoals galactische rotatiecurves, gravitationele lenswerking en grootschalige structuurvorming in het heelal."
        }
      },
      {
        question: {
          en: "What is the main sequence on the Hertzsprung-Russell diagram?",
          es: "¿Qué es la secuencia principal en el diagrama de Hertzsprung-Russell?",
          de: "Was ist die Hauptreihe im Hertzsprung-Russell-Diagramm?",
          nl: "Wat is de hoofdreeks op het Hertzsprung-Russell diagram?"
        },
        options: [
          { en: "Band where stars spend most of their lives fusing hydrogen", es: "Banda donde las estrellas pasan la mayor parte de sus vidas fusionando hidrógeno", de: "Band, in dem Sterne den Großteil ihres Lebens mit Wasserstofffusion verbringen", nl: "Band waar sterren het grootste deel van hun leven waterstof fuseren" },
          { en: "Evolutionary track of dying stars", es: "Trayectoria evolutiva de estrellas moribundas", de: "Evolutionsspur sterbender Sterne", nl: "Evolutionaire baan van stervende sterren" },
          { en: "Region of newly formed protostars", es: "Región de protoestrellas recién formadas", de: "Region neu entstandener Protosterne", nl: "Gebied van nieuw gevormde protosterren" },
          { en: "Location of binary star systems", es: "Ubicación de sistemas estelares binarios", de: "Ort von Doppelsternsystemen", nl: "Locatie van dubbelster systemen" }
        ],
        correct: 0,
        explanation: {
          en: "The main sequence is a continuous band of stars on the H-R diagram where stars spend about 90% of their lives steadily fusing hydrogen into helium in their cores. Our Sun is a main sequence star and has been for about 4.6 billion years.",
          es: "La secuencia principal es una banda continua de estrellas en el diagrama H-R donde las estrellas pasan aproximadamente el 90% de sus vidas fusionando constantemente hidrógeno en helio en sus núcleos. Nuestro Sol es una estrella de secuencia principal y lo ha sido por unos 4.6 mil millones de años.",
          de: "Die Hauptreihe ist ein kontinuierliches Band von Sternen im H-R-Diagramm, wo Sterne etwa 90% ihres Lebens damit verbringen, stetig Wasserstoff zu Helium in ihren Kernen zu fusionieren. Unsere Sonne ist ein Hauptreihenstern und ist es seit etwa 4,6 Milliarden Jahren.",
          nl: "De hoofdreeks is een continue band van sterren op het H-R diagram waar sterren ongeveer 90% van hun leven besteden aan het gestaag fuseren van waterstof tot helium in hun kernen. Onze Zon is een hoofdreeksster en is dat al ongeveer 4,6 miljard jaar."
        }
      },
      {
        question: {
          en: "What is a quasar?",
          es: "¿Qué es un cuásar?",
          de: "Was ist ein Quasar?",
          nl: "Wat is een quasar?"
        },
        options: [
          { en: "Active galactic nucleus powered by supermassive black hole", es: "Núcleo galáctico activo alimentado por agujero negro supermasivo", de: "Aktiver galaktischer Kern, angetrieben von supermassivem Schwarzem Loch", nl: "Actieve galactische kern aangedreven door superzwaar zwart gat" },
          { en: "Nearby variable star", es: "Estrella variable cercana", de: "Naher veränderlicher Stern", nl: "Nabije veranderlijke ster" },
          { en: "Asteroid belt formation", es: "Formación de cinturón de asteroides", de: "Asteroidengürtel-Formation", nl: "Asteroïdengordel formatie" },
          { en: "Comet nucleus activity", es: "Actividad del núcleo del cometa", de: "Kometenkern-Aktivität", nl: "Komeetkern activiteit" }
        ],
        correct: 0,
        explanation: {
          en: "Quasars are among the most luminous objects in the universe, powered by matter falling into supermassive black holes at galactic centers. They can outshine entire galaxies and are visible across billions of light-years, providing insights into the early universe.",
          es: "Los cuásares están entre los objetos más luminosos del universo, alimentados por materia que cae en agujeros negros supermasivos en centros galácticos. Pueden superar en brillo a galaxias enteras y son visibles a través de miles de millones de años luz, proporcionando perspectivas del universo temprano.",
          de: "Quasare gehören zu den leuchtendsten Objekten im Universum, angetrieben von Materie, die in supermassive Schwarze Löcher in galaktischen Zentren fällt. Sie können ganze Galaxien überstrahlen und sind über Milliarden von Lichtjahren sichtbar, wodurch sie Einblicke in das frühe Universum geben.",
          nl: "Quasars behoren tot de meest heldere objecten in het heelal, aangedreven door materie die valt in superzware zwarte gaten in galactische centra. Ze kunnen hele sterrenstelsels overtreffen en zijn zichtbaar over miljarden lichtjaren, wat inzicht geeft in het vroege heelal."
        }
      },
      {
        question: {
          en: "What is redshift in cosmology?",
          es: "¿Qué es el corrimiento al rojo en cosmología?",
          de: "Was ist Rotverschiebung in der Kosmologie?",
          nl: "Wat is roodverschuiving in kosmologie?"
        },
        options: [
          { en: "Stretching of wavelengths due to cosmic expansion", es: "Estiramiento de longitudes de onda debido a la expansión cósmica", de: "Dehnung von Wellenlängen durch kosmische Expansion", nl: "Rekking van golflengtes door kosmische uitdijing" },
          { en: "Color change from stellar aging", es: "Cambio de color por envejecimiento estelar", de: "Farbänderung durch Sternenalterung", nl: "Kleurverandering door stellaire veroudering" },
          { en: "Atmospheric interference effect", es: "Efecto de interferencia atmosférica", de: "Atmosphärischer Interferenzeffekt", nl: "Atmosferisch interferentie-effect" },
          { en: "Instrument calibration error", es: "Error de calibración de instrumentos", de: "Instrumentenkalibrierungsfehler", nl: "Instrument kalibratiefout" }
        ],
        correct: 0,
        explanation: {
          en: "Cosmological redshift occurs when light from distant objects is stretched to longer, redder wavelengths due to the expansion of space itself. The greater the redshift, the more distant and faster-receding the object is, providing evidence for the expanding universe.",
          es: "El corrimiento al rojo cosmológico ocurre cuando la luz de objetos distantes se estira a longitudes de onda más largas y rojizas debido a la expansión del espacio mismo. Mayor corrimiento al rojo indica objetos más distantes y que se alejan más rápido, proporcionando evidencia del universo en expansión.",
          de: "Kosmologische Rotverschiebung tritt auf, wenn Licht von entfernten Objekten zu längeren, röteren Wellenlängen gedehnt wird aufgrund der Expansion des Raumes selbst. Je größer die Rotverschiebung, desto entfernter und schneller entfernend ist das Objekt, was Beweise für das expandierende Universum liefert.",
          nl: "Kosmologische roodverschuiving treedt op wanneer licht van verre objecten wordt uitgerekt naar langere, rodere golflengtes door de uitdijing van de ruimte zelf. Hoe groter de roodverschuiving, hoe verder en sneller wijkend het object is, wat bewijs levert voor het uitdijende heelal."
        }
      },
      {
        question: {
          en: "What is stellar nucleosynthesis?",
          es: "¿Qué es la nucleosíntesis estelar?",
          de: "Was ist stellare Nukleosynthese?",
          nl: "Wat is stellaire nucleosynthese?"
        },
        options: [
          { en: "Formation of heavy elements inside stars", es: "Formación de elementos pesados dentro de las estrellas", de: "Entstehung schwerer Elemente in Sternen", nl: "Vorming van zware elementen in sterren" },
          { en: "Star formation from gas clouds", es: "Formación de estrellas desde nubes de gas", de: "Sternbildung aus Gaswolken", nl: "Stervorming uit gaswolken" },
          { en: "Nuclear decay in stellar cores", es: "Desintegración nuclear en núcleos estelares", de: "Nuklearer Zerfall in Sternkernen", nl: "Nucleair verval in stellaire kernen" },
          { en: "Solar wind production", es: "Producción de viento solar", de: "Sonnenwind-Produktion", nl: "Zonnewind productie" }
        ],
        correct: 0,
        explanation: {
          en: "Stellar nucleosynthesis is the process by which stars forge elements heavier than hydrogen and helium through nuclear fusion reactions. This process, occurring in stellar cores and during supernovae, is responsible for creating most elements in the periodic table.",
          es: "La nucleosíntesis estelar es el proceso por el cual las estrellas forjan elementos más pesados que hidrógeno y helio a través de reacciones de fusión nuclear. Este proceso, que ocurre en núcleos estelares y durante supernovas, es responsable de crear la mayoría de elementos en la tabla periódica.",
          de: "Stellare Nukleosynthese ist der Prozess, durch den Sterne Elemente schwerer als Wasserstoff und Helium durch Kernfusionsreaktionen schmieden. Dieser Prozess, der in Sternkernen und während Supernovae auftritt, ist für die Entstehung der meisten Elemente im Periodensystem verantwortlich.",
          nl: "Stellaire nucleosynthese is het proces waarbij sterren elementen zwaarder dan waterstof en helium smeden door kernfusiereacties. Dit proces, dat plaatsvindt in stellaire kernen en tijdens supernova's, is verantwoordelijk voor het creëren van de meeste elementen in het periodiek systeem."
        }
      },
      {
        question: {
          en: "What is the event horizon of a black hole?",
          es: "¿Qué es el horizonte de eventos de un agujero negro?",
          de: "Was ist der Ereignishorizont eines Schwarzen Lochs?",
          nl: "Wat is de gebeurtenishorizon van een zwart gat?"
        },
        options: [
          { en: "Boundary beyond which nothing can escape", es: "Frontera más allá de la cual nada puede escapar", de: "Grenze, jenseits der nichts entkommen kann", nl: "Grens waarboven niets kan ontsnappen" },
          { en: "Center of the black hole", es: "Centro del agujero negro", de: "Zentrum des Schwarzen Lochs", nl: "Centrum van het zwarte gat" },
          { en: "Accretion disk edge", es: "Borde del disco de acreción", de: "Rand der Akkretionsscheibe", nl: "Rand van accretieschijf" },
          { en: "Photon sphere location", es: "Ubicación de la esfera de fotones", de: "Standort der Photonensphäre", nl: "Locatie van fotonssfeer" }
        ],
        correct: 0,
        explanation: {
          en: "The event horizon is the spherical boundary around a black hole at the Schwarzschild radius, beyond which the escape velocity exceeds the speed of light. Once matter or light crosses this boundary, it cannot escape and will inevitably fall toward the singularity.",
          es: "El horizonte de eventos es la frontera esférica alrededor de un agujero negro en el radio de Schwarzschild, más allá del cual la velocidad de escape excede la velocidad de la luz. Una vez que la materia o luz cruza esta frontera, no puede escapar y inevitablemente caerá hacia la singularidad.",
          de: "Der Ereignishorizont ist die sphärische Grenze um ein Schwarzes Loch am Schwarzschild-Radius, jenseits der die Fluchtgeschwindigkeit die Lichtgeschwindigkeit überschreitet. Sobald Materie oder Licht diese Grenze überschreitet, kann es nicht entkommen und wird unvermeidlich zur Singularität fallen.",
          nl: "De gebeurtenishorizon is de sferische grens rond een zwart gat op de Schwarzschild straal, waarboven de ontsnappingssnelheid de lichtsnelheid overschrijdt. Zodra materie of licht deze grens overschrijdt, kan het niet ontsnappen en zal onvermijdelijk naar de singulariteit vallen."
        }
      },
      {
        question: {
          en: "What is the Big Bang nucleosynthesis?",
          es: "¿Qué es la nucleosíntesis del Big Bang?",
          de: "Was ist die Urknall-Nukleosynthese?",
          nl: "Wat is Big Bang nucleosynthese?"
        },
        options: [
          { en: "Formation of light elements in the first few minutes after Big Bang", es: "Formación de elementos ligeros en los primeros minutos después del Big Bang", de: "Entstehung leichter Elemente in den ersten Minuten nach dem Urknall", nl: "Vorming van lichte elementen in de eerste minuten na de Big Bang" },
          { en: "Creation of heavy metals in early stars", es: "Creación de metales pesados en estrellas tempranas", de: "Entstehung schwerer Metalle in frühen Sternen", nl: "Creatie van zware metalen in vroege sterren" },
          { en: "Formation of first galaxies", es: "Formación de las primeras galaxias", de: "Entstehung der ersten Galaxien", nl: "Vorming van eerste sterrenstelsels" },
          { en: "Production of cosmic rays", es: "Producción de rayos cósmicos", de: "Produktion kosmischer Strahlung", nl: "Productie van kosmische straling" }
        ],
        correct: 0,
        explanation: {
          en: "Big Bang nucleosynthesis occurred during the first 20 minutes after the Big Bang when the universe was hot and dense enough for nuclear reactions. This process created the primordial abundances of hydrogen, helium, and trace amounts of lithium and beryllium.",
          es: "La nucleosíntesis del Big Bang ocurrió durante los primeros 20 minutos después del Big Bang cuando el universo estaba lo suficientemente caliente y denso para reacciones nucleares. Este proceso creó las abundancias primordiales de hidrógeno, helio y trazas de litio y berilio.",
          de: "Die Urknall-Nukleosynthese trat während der ersten 20 Minuten nach dem Urknall auf, als das Universum heiß und dicht genug für Kernreaktionen war. Dieser Prozess schuf die ursprünglichen Häufigkeiten von Wasserstoff, Helium und Spurenmengen von Lithium und Beryllium.",
          nl: "Big Bang nucleosynthese vond plaats tijdens de eerste 20 minuten na de Big Bang toen het heelal heet en dicht genoeg was voor kernreacties. Dit proces creëerde de primordiale abundanties van waterstof, helium en sporenhoeveelheden lithium en beryllium."
        }
      },
      {
        question: {
          en: "What is cosmic inflation?",
          es: "¿Qué es la inflación cósmica?",
          de: "Was ist kosmische Inflation?",
          nl: "Wat is kosmische inflatie?"
        },
        options: [
          { en: "Rapid exponential expansion of early universe", es: "Expansión exponencial rápida del universo temprano", de: "Schnelle exponentielle Expansion des frühen Universums", nl: "Snelle exponentiële uitdijing van het vroege heelal" },
          { en: "Current acceleration of cosmic expansion", es: "Aceleración actual de la expansión cósmica", de: "Aktuelle Beschleunigung der kosmischen Expansion", nl: "Huidige versnelling van kosmische uitdijing" },
          { en: "Growth of galaxy clusters", es: "Crecimiento de cúmulos de galaxias", de: "Wachstum von Galaxienhaufen", nl: "Groei van sterrenstelselclusters" },
          { en: "Stellar mass increase over time", es: "Aumento de masa estelar con el tiempo", de: "Stellare Massenzunahme über die Zeit", nl: "Stellaire massa toename over tijd" }
        ],
        correct: 0,
        explanation: {
          en: "Cosmic inflation is a theory proposing that the universe underwent a period of extremely rapid exponential expansion in the first fraction of a second after the Big Bang. This explains the universe's large-scale homogeneity and flatness.",
          es: "La inflación cósmica es una teoría que propone que el universo experimentó un período de expansión exponencial extremadamente rápida en la primera fracción de segundo después del Big Bang. Esto explica la homogeneidad y planitud a gran escala del universo.",
          de: "Kosmische Inflation ist eine Theorie, die vorschlägt, dass das Universum eine Periode extrem schneller exponentieller Expansion im ersten Bruchteil einer Sekunde nach dem Urknall durchlief. Dies erklärt die großräumige Homogenität und Flachheit des Universums.",
          nl: "Kosmische inflatie is een theorie die voorstelt dat het heelal een periode van extreem snelle exponentiële uitdijing onderging in de eerste fractie van een seconde na de Big Bang. Dit verklaart de grootschalige homogeniteit en vlakheid van het heelal."
        }
      },
      {
        question: {
          en: "What are Cepheid variable stars used for in astronomy?",
          es: "¿Para qué se usan las estrellas variables cefeidas en astronomía?",
          de: "Wofür werden Cepheiden-Veränderliche in der Astronomie verwendet?",
          nl: "Waarvoor worden Cepheïde veranderlijke sterren gebruikt in de astronomie?"
        },
        options: [
          { en: "Standard candles for measuring cosmic distances", es: "Velas estándar para medir distancias cósmicas", de: "Standardkerzen zur Messung kosmischer Entfernungen", nl: "Standaardkaarsen voor het meten van kosmische afstanden" },
          { en: "Detecting exoplanets", es: "Detectar exoplanetas", de: "Exoplaneten entdecken", nl: "Exoplaneten detecteren" },
          { en: "Measuring stellar rotation", es: "Medir rotación estelar", de: "Stellare Rotation messen", nl: "Stellaire rotatie meten" },
          { en: "Studying stellar composition", es: "Estudiar composición estelar", de: "Stellare Zusammensetzung studieren", nl: "Stellaire samenstelling bestuderen" }
        ],
        correct: 0,
        explanation: {
          en: "Cepheid variables have a well-established period-luminosity relationship discovered by Henrietta Swan Leavitt. Their pulsation periods are directly related to their intrinsic brightness, making them excellent standard candles for determining distances to nearby galaxies.",
          es: "Las variables cefeidas tienen una relación período-luminosidad bien establecida descubierta por Henrietta Swan Leavitt. Sus períodos de pulsación están directamente relacionados con su brillo intrínseco, haciéndolas excelentes velas estándar para determinar distancias a galaxias cercanas.",
          de: "Cepheiden-Veränderliche haben eine gut etablierte Periode-Helligkeits-Beziehung, die von Henrietta Swan Leavitt entdeckt wurde. Ihre Pulsationsperioden sind direkt mit ihrer intrinsischen Helligkeit verbunden, was sie zu ausgezeichneten Standardkerzen zur Bestimmung von Entfernungen zu nahen Galaxien macht.",
          nl: "Cepheïde veranderlijken hebben een goed gevestigde periode-helderheidsrelatie ontdekt door Henrietta Swan Leavitt. Hun pulsatieperiodes zijn direct gerelateerd aan hun intrinsieke helderheid, waardoor ze uitstekende standaardkaarsen zijn voor het bepalen van afstanden tot nabije sterrenstelsels."
        }
      },
      {
        question: {
          en: "What is the Chandrasekhar mass limit approximately?",
          es: "¿Cuál es aproximadamente el límite de masa de Chandrasekhar?",
          de: "Wie hoch ist das Chandrasekhar-Massenlimit ungefähr?",
          nl: "Wat is de Chandrasekhar massa limiet ongeveer?"
        },
        options: [
          { en: "1.4 solar masses", es: "1.4 masas solares", de: "1,4 Sonnenmassen", nl: "1,4 zonnemassa's" },
          { en: "3.0 solar masses", es: "3.0 masas solares", de: "3,0 Sonnenmassen", nl: "3,0 zonnemassa's" },
          { en: "0.5 solar masses", es: "0.5 masas solares", de: "0,5 Sonnenmassen", nl: "0,5 zonnemassa's" },
          { en: "10 solar masses", es: "10 masas solares", de: "10 Sonnenmassen", nl: "10 zonnemassa's" }
        ],
        correct: 0,
        explanation: {
          en: "The Chandrasekhar limit is approximately 1.4 solar masses (more precisely 1.38). This is the maximum mass a white dwarf star can have while being supported by electron degeneracy pressure. Above this limit, the star will collapse into a neutron star or black hole.",
          es: "El límite de Chandrasekhar es aproximadamente 1.4 masas solares (más precisamente 1.38). Esta es la masa máxima que puede tener una estrella enana blanca mientras es sostenida por presión de degeneración de electrones. Por encima de este límite, la estrella colapsará en una estrella de neutrones o agujero negro.",
          de: "Das Chandrasekhar-Limit beträgt etwa 1,4 Sonnenmassen (genauer 1,38). Dies ist die maximale Masse, die ein weißer Zwergstern haben kann, während er durch Elektronendegenerationsdruck gestützt wird. Über diesem Limit wird der Stern zu einem Neutronenstern oder Schwarzen Loch kollabieren.",
          nl: "De Chandrasekhar limiet is ongeveer 1,4 zonnemassa's (preciezer 1,38). Dit is de maximale massa die een witte dwergster kan hebben terwijl deze wordt ondersteund door elektronendegeneratiedruk. Boven deze limiet zal de ster instorten tot een neutronenster of zwart gat."
        }
      },
      {
        question: {
          en: "What is the critical density of the universe?",
          es: "¿Qué es la densidad crítica del universo?",
          de: "Was ist die kritische Dichte des Universums?",
          nl: "Wat is de kritieke dichtheid van het heelal?"
        },
        options: [
          { en: "Density required for a flat universe geometry", es: "Densidad requerida para una geometría plana del universo", de: "Dichte, die für eine flache Universums-Geometrie erforderlich ist", nl: "Dichtheid vereist voor een vlakke heelal geometrie" },
          { en: "Density of dark matter only", es: "Densidad solo de materia oscura", de: "Dichte nur der dunklen Materie", nl: "Dichtheid van alleen donkere materie" },
          { en: "Maximum density before Big Crunch", es: "Densidad máxima antes del Gran Colapso", de: "Maximale Dichte vor dem Big Crunch", nl: "Maximale dichtheid voor Big Crunch" },
          { en: "Average density of galaxy clusters", es: "Densidad promedio de cúmulos de galaxias", de: "Durchschnittliche Dichte von Galaxienhaufen", nl: "Gemiddelde dichtheid van sterrenstelselclusters" }
        ],
        correct: 0,
        explanation: {
          en: "The critical density (about 10⁻²⁹ g/cm³) is the density parameter that determines the universe's geometry. If the actual density equals the critical density, the universe is flat; if greater, it's closed (spherical); if less, it's open (hyperbolic).",
          es: "La densidad crítica (cerca de 10⁻²⁹ g/cm³) es el parámetro de densidad que determina la geometría del universo. Si la densidad actual iguala la densidad crítica, el universo es plano; si es mayor, está cerrado (esférico); si es menor, está abierto (hiperbólico).",
          de: "Die kritische Dichte (etwa 10⁻²⁹ g/cm³) ist der Dichteparameter, der die Geometrie des Universums bestimmt. Wenn die tatsächliche Dichte der kritischen Dichte entspricht, ist das Universum flach; wenn größer, ist es geschlossen (sphärisch); wenn geringer, ist es offen (hyperbolisch).",
          nl: "De kritieke dichtheid (ongeveer 10⁻²⁹ g/cm³) is de dichtheidsparameter die de geometrie van het heelal bepaalt. Als de werkelijke dichtheid gelijk is aan de kritieke dichtheid, is het heelal vlak; als groter, is het gesloten (sferisch); als minder, is het open (hyperbolisch)."
        }
      },
      {
        question: {
          en: "What is a magnetar?",
          es: "¿Qué es un magnetar?",
          de: "Was ist ein Magnetar?",
          nl: "Wat is een magnetar?"
        },
        options: [
          { en: "Neutron star with extremely strong magnetic field", es: "Estrella de neutrones con campo magnético extremadamente fuerte", de: "Neutronenstern mit extrem starkem Magnetfeld", nl: "Neutronenster met extreem sterk magnetisch veld" },
          { en: "Magnetic planet in binary system", es: "Planeta magnético en sistema binario", de: "Magnetischer Planet in Doppelsternsystem", nl: "Magnetische planeet in dubbelster systeem" },
          { en: "Spacecraft propulsion system", es: "Sistema de propulsión de nave espacial", de: "Raumfahrzeug-Antriebssystem", nl: "Ruimtevaartuig voortstuwingssysteem" },
          { en: "Solar magnetic field generator", es: "Generador de campo magnético solar", de: "Solares Magnetfeld-Generator", nl: "Magnetisch veld generator van de zon" }
        ],
        correct: 0,
        explanation: {
          en: "Magnetars are neutron stars with magnetic fields trillions of times stronger than Earth's, reaching up to 10¹⁵ Gauss. These extreme magnetic fields can distort atoms and cause powerful X-ray and gamma-ray outbursts that can be detected across the galaxy.",
          es: "Los magnetares son estrellas de neutrones con campos magnéticos billones de veces más fuertes que el de la Tierra, alcanzando hasta 10¹⁵ Gauss. Estos campos magnéticos extremos pueden distorsionar átomos y causar poderosas explosiones de rayos X y gamma que pueden ser detectadas a través de la galaxia.",
          de: "Magnetare sind Neutronensterne mit Magnetfeldern, die billionenfach stärker als das der Erde sind und bis zu 10¹⁵ Gauss erreichen. Diese extremen Magnetfelder können Atome verzerren und mächtige Röntgen- und Gammastrahlen-Ausbrüche verursachen, die durch die ganze Galaxie detektiert werden können.",
          nl: "Magnetars zijn neutronensterren met magnetische velden biljoen keer sterker dan die van de Aarde, tot 10¹⁵ Gauss reikend. Deze extreme magnetische velden kunnen atomen vervormen en krachtige röntgen- en gammastraal uitbarstingen veroorzaken die door de hele melkweg gedetecteerd kunnen worden."
        }
      },
      {
        question: {
          en: "What is the solar wind?",
          es: "¿Qué es el viento solar?",
          de: "Was ist der Sonnenwind?",
          nl: "Wat is zonnewind?"
        },
        options: [
          { en: "Stream of charged particles from the Sun", es: "Corriente de partículas cargadas del Sol", de: "Strom geladener Teilchen von der Sonne", nl: "Stroom geladen deeltjes van de Zon" },
          { en: "Atmospheric winds on solar surface", es: "Vientos atmosféricos en la superficie solar", de: "Atmosphärische Winde auf der Sonnenoberfläche", nl: "Atmosferische winden op zonneoppervlak" },
          { en: "Rotation of solar magnetic field", es: "Rotación del campo magnético solar", de: "Rotation des solaren Magnetfelds", nl: "Rotatie van zonnemagnetisch veld" },
          { en: "Convection currents in solar interior", es: "Corrientes de convección en el interior solar", de: "Konvektionsströme im Sonneninneren", nl: "Convectie stromen in zonneinterieur" }
        ],
        correct: 0,
        explanation: {
          en: "The solar wind is a continuous stream of charged particles (mainly protons and electrons) flowing from the Sun's corona at speeds of 300-800 km/s. It creates the heliosphere and interacts with planetary magnetospheres, causing phenomena like auroras.",
          es: "El viento solar es una corriente continua de partículas cargadas (principalmente protones y electrones) que fluyen desde la corona del Sol a velocidades de 300-800 km/s. Crea la heliosfera e interactúa con magnetosferas planetarias, causando fenómenos como las auroras.",
          de: "Der Sonnenwind ist ein kontinuierlicher Strom geladener Teilchen (hauptsächlich Protonen und Elektronen), der aus der Sonnenkorona mit Geschwindigkeiten von 300-800 km/s fließt. Er schafft die Heliosphäre und interagiert mit planetarischen Magnetosphären, wodurch Phänomene wie Auroren entstehen.",
          nl: "De zonnewind is een continue stroom geladen deeltjes (voornamelijk protonen en elektronen) die vanuit de corona van de Zon stroomt met snelheden van 300-800 km/s. Het creëert de heliosfeer en interacteert met planetaire magnetosferen, wat verschijnselen zoals aurora's veroorzaakt."
        }
      },
      {
        question: {
          en: "What is gravitational time dilation?",
          es: "¿Qué es la dilatación temporal gravitacional?",
          de: "Was ist gravitative Zeitdilatation?",
          nl: "Wat is gravitationele tijddilatatie?"
        },
        options: [
          { en: "Time passes slower in stronger gravitational fields", es: "El tiempo pasa más lento en campos gravitacionales más fuertes", de: "Zeit vergeht langsamer in stärkeren Gravitationsfeldern", nl: "Tijd verstrijkt langzamer in sterkere gravitatievelden" },
          { en: "Gravitational waves affecting clocks", es: "Ondas gravitacionales afectando relojes", de: "Gravitationswellen beeinflussen Uhren", nl: "Gravitatiegolven die klokken beïnvloeden" },
          { en: "Tidal forces stretching spacetime", es: "Fuerzas de marea estirando el espacio-tiempo", de: "Gezeitenkräfte dehnen die Raumzeit", nl: "Getijdekrachten die ruimtetijd rekken" },
          { en: "Time reversal near black holes", es: "Reversión temporal cerca de agujeros negros", de: "Zeitumkehr nahe Schwarzer Löcher", nl: "Tijdomkering nabij zwarte gaten" }
        ],
        correct: 0,
        explanation: {
          en: "According to Einstein's general relativity, time passes more slowly in regions of stronger gravitational fields. This effect is measurable and must be accounted for in GPS satellites, which experience less gravitational pull and thus have their clocks run slightly faster.",
          es: "Según la relatividad general de Einstein, el tiempo pasa más lentamente en regiones de campos gravitacionales más fuertes. Este efecto es medible y debe ser considerado en los satélites GPS, que experimentan menos atracción gravitacional y por tanto sus relojes corren ligeramente más rápido.",
          de: "Nach Einsteins allgemeiner Relativitätstheorie vergeht die Zeit langsamer in Regionen stärkerer Gravitationsfelder. Dieser Effekt ist messbar und muss bei GPS-Satelliten berücksichtigt werden, die weniger gravitativen Zug erfahren und daher ihre Uhren etwas schneller laufen lassen.",
          nl: "Volgens Einstein's algemene relativiteitstheorie verstrijkt de tijd langzamer in gebieden met sterkere gravitatievelden. Dit effect is meetbaar en moet worden meegenomen bij GPS-satellieten, die minder gravitationele aantrekkingskracht ervaren en daarom hun klokken iets sneller laten lopen."
        }
      },
      {
        question: {
          en: "What is the Tolman-Oppenheimer-Volkoff limit?",
          es: "¿Qué es el límite de Tolman-Oppenheimer-Volkoff?",
          de: "Was ist das Tolman-Oppenheimer-Volkoff-Limit?",
          nl: "Wat is de Tolman-Oppenheimer-Volkoff limiet?"
        },
        options: [
          { en: "Maximum mass of a neutron star before collapse to black hole", es: "Masa máxima de una estrella de neutrones antes del colapso en agujero negro", de: "Maximale Masse eines Neutronensterns vor dem Kollaps zu einem Schwarzen Loch", nl: "Maximale massa van een neutronenster voor ineenstorting tot zwart gat" },
          { en: "Minimum temperature for nuclear fusion", es: "Temperatura mínima para fusión nuclear", de: "Mindesttemperatur für Kernfusion", nl: "Minimumtemperatuur voor kernfusie" },
          { en: "Critical pressure in stellar cores", es: "Presión crítica en núcleos estelares", de: "Kritischer Druck in Sternkernen", nl: "Kritieke druk in stellaire kernen" },
          { en: "Maximum rotation speed of pulsars", es: "Velocidad máxima de rotación de pulsares", de: "Maximale Rotationsgeschwindigkeit von Pulsaren", nl: "Maximale rotatiesnelheid van pulsars" }
        ],
        correct: 0,
        explanation: {
          en: "The TOV limit is approximately 2-3 solar masses, representing the maximum mass a neutron star can have before neutron degeneracy pressure can no longer support it against gravitational collapse, resulting in the formation of a black hole.",
          es: "El límite TOV es aproximadamente 2-3 masas solares, representando la masa máxima que puede tener una estrella de neutrones antes de que la presión de degeneración de neutrones ya no pueda sostenerla contra el colapso gravitacional, resultando en la formación de un agujero negro.",
          de: "Das TOV-Limit beträgt etwa 2-3 Sonnenmassen und stellt die maximale Masse dar, die ein Neutronenstern haben kann, bevor der Neutronendegenerationsdruck ihn nicht mehr gegen den gravitativen Kollaps stützen kann, was zur Bildung eines Schwarzen Lochs führt.",
          nl: "De TOV limiet is ongeveer 2-3 zonnemassa's, wat de maximale massa vertegenwoordigt die een neutronenster kan hebben voordat neutronendegeneratiedruk het niet langer kan ondersteunen tegen gravitationele ineenstorting, wat resulteert in de vorming van een zwart gat."
        }
      },
      {
        question: {
          en: "What is the Oort Cloud?",
          es: "¿Qué es la Nube de Oort?",
          de: "Was ist die Oortsche Wolke?",
          nl: "Wat is de Oortwolk?"
        },
        options: [
          { en: "Spherical shell of icy objects at solar system's edge", es: "Envoltura esférica de objetos helados en el borde del sistema solar", de: "Sphärische Hülle eisiger Objekte am Rand des Sonnensystems", nl: "Sferische schil van ijzige objecten aan de rand van het zonnestelsel" },
          { en: "Asteroid belt beyond Neptune", es: "Cinturón de asteroides más allá de Neptuno", de: "Asteroidengürtel jenseits von Neptun", nl: "Asteroïdengordel voorbij Neptunus" },
          { en: "Interstellar dust cloud", es: "Nube de polvo interestelar", de: "Interstellare Staubwolke", nl: "Interstellaire stofwolk" },
          { en: "Solar wind boundary region", es: "Región fronteriza del viento solar", de: "Grenzregion des Sonnenwinds", nl: "Grenregio van zonnewind" }
        ],
        correct: 0,
        explanation: {
          en: "The Oort Cloud is a theoretical spherical shell of predominantly icy planetesimals extending from about 2,000 to 100,000 AU from the Sun. It's believed to be the source of long-period comets and represents the gravitational boundary of our solar system.",
          es: "La Nube de Oort es una envoltura esférica teórica de planetesimales predominantemente helados que se extiende desde aproximadamente 2,000 a 100,000 UA del Sol. Se cree que es la fuente de cometas de período largo y representa la frontera gravitacional de nuestro sistema solar.",
          de: "Die Oortsche Wolke ist eine theoretische sphärische Hülle aus überwiegend eisigen Planetesimalen, die sich von etwa 2.000 bis 100.000 AE von der Sonne erstreckt. Es wird angenommen, dass sie die Quelle langperiodischer Kometen ist und die gravitationale Grenze unseres Sonnensystems darstellt.",
          nl: "De Oortwolk is een theoretische sferische schil van voornamelijk ijzige planetesimalen die zich uitstrekt van ongeveer 2.000 tot 100.000 AE van de Zon. Het wordt verondersteld de bron te zijn van lange-periode kometen en vertegenwoordigt de gravitationele grens van ons zonnestelsel."
        }
      },
      {
        question: {
          en: "What is Hawking radiation?",
          es: "¿Qué es la radiación de Hawking?",
          de: "Was ist Hawking-Strahlung?",
          nl: "Wat is Hawking straling?"
        },
        options: [
          { en: "Theoretical radiation emitted by black holes", es: "Radiación teórica emitida por agujeros negros", de: "Theoretische Strahlung, die von Schwarzen Löchern ausgesendet wird", nl: "Theoretische straling uitgezonden door zwarte gaten" },
          { en: "High-energy cosmic rays", es: "Rayos cósmicos de alta energía", de: "Hochenergetische kosmische Strahlung", nl: "Hoge-energie kosmische straling" },
          { en: "Solar flare emissions", es: "Emisiones de erupciones solares", de: "Sonneneruptions-Emissionen", nl: "Zonnevlam emissies" },
          { en: "Pulsar radio signals", es: "Señales de radio de pulsares", de: "Pulsar-Radiosignale", nl: "Pulsar radiosignalen" }
        ],
        correct: 0,
        explanation: {
          en: "Hawking radiation is theoretical black-body radiation predicted to be emitted by black holes due to quantum effects near the event horizon. According to Stephen Hawking's theory, this radiation causes black holes to slowly evaporate over time, with smaller black holes evaporating faster.",
          es: "La radiación de Hawking es radiación teórica de cuerpo negro que se predice es emitida por agujeros negros debido a efectos cuánticos cerca del horizonte de eventos. Según la teoría de Stephen Hawking, esta radiación causa que los agujeros negros se evaporen lentamente con el tiempo, con agujeros negros más pequeños evaporándose más rápido.",
          de: "Hawking-Strahlung ist theoretische Schwarzkörperstrahlung, die von Schwarzen Löchern aufgrund von Quanteneffekten nahe dem Ereignishorizont ausgesendet werden soll. Nach Stephen Hawkings Theorie verursacht diese Strahlung, dass Schwarze Löcher langsam über die Zeit verdampfen, wobei kleinere Schwarze Löcher schneller verdampfen.",
          nl: "Hawking straling is theoretische zwarte-lichaam straling die wordt voorspeld te worden uitgezonden door zwarte gaten vanwege quantumeffecten nabij de gebeurtenishorizon. Volgens Stephen Hawking's theorie veroorzaakt deze straling dat zwarte gaten langzaam verdampen over tijd, waarbij kleinere zwarte gaten sneller verdampen."
        }
      },
      {
        question: {
          en: "What is the observable universe?",
          es: "¿Qué es el universo observable?",
          de: "Was ist das beobachtbare Universum?",
          nl: "Wat is het waarneembare heelal?"
        },
        options: [
          { en: "Region of universe from which light has had time to reach us", es: "Región del universo desde la cual la luz ha tenido tiempo de llegar a nosotros", de: "Region des Universums, aus der Licht Zeit hatte, uns zu erreichen", nl: "Gebied van het heelal waarvan licht tijd heeft gehad om ons te bereiken" },
          { en: "All matter in the universe", es: "Toda la materia en el universo", de: "Alle Materie im Universum", nl: "Alle materie in het heelal" },
          { en: "Visible light portion only", es: "Solo la porción de luz visible", de: "Nur der Bereich sichtbaren Lichts", nl: "Alleen zichtbaar licht gedeelte" },
          { en: "Galaxy clusters we can see", es: "Cúmulos de galaxias que podemos ver", de: "Galaxienhaufen, die wir sehen können", nl: "Sterrenstelselclusters die we kunnen zien" }
        ],
        correct: 0,
        explanation: {
          en: "The observable universe is the spherical region centered on Earth from which light has had time to travel to us since the Big Bang. Its radius is approximately 46.5 billion light-years due to cosmic expansion, even though the universe is only 13.8 billion years old.",
          es: "El universo observable es la región esférica centrada en la Tierra desde la cual la luz ha tenido tiempo de viajar hacia nosotros desde el Big Bang. Su radio es aproximadamente 46.5 mil millones de años luz debido a la expansión cósmica, aunque el universo solo tenga 13.8 mil millones de años.",
          de: "Das beobachtbare Universum ist die sphärische Region, die auf der Erde zentriert ist, aus der Licht Zeit hatte, seit dem Urknall zu uns zu reisen. Ihr Radius beträgt etwa 46,5 Milliarden Lichtjahre aufgrund der kosmischen Expansion, obwohl das Universum nur 13,8 Milliarden Jahre alt ist.",
          nl: "Het waarneembare heelal is het sferische gebied gecentreerd op de Aarde waarvan licht tijd heeft gehad om naar ons te reizen sinds de Big Bang. Zijn straal is ongeveer 46,5 miljard lichtjaren vanwege kosmische uitdijing, hoewel het heelal slechts 13,8 miljard jaar oud is."
        }
      },
      {
        question: {
          en: "What is a brown dwarf?",
          es: "¿Qué es una enana marrón?",
          de: "Was ist ein Brauner Zwerg?",
          nl: "Wat is een bruine dwerg?"
        },
        options: [
          { en: "Failed star too small to sustain hydrogen fusion", es: "Estrella fallida demasiado pequeña para sostener fusión de hidrógeno", de: "Fehlgeschlagener Stern, zu klein für Wasserstofffusion", nl: "Mislukte ster te klein om waterstoffusie vol te houden" },
          { en: "Dying main sequence star", es: "Estrella de secuencia principal moribunda", de: "Sterbender Hauptreihenstern", nl: "Stervende hoofdreeksster" },
          { en: "Planet with thick atmosphere", es: "Planeta con atmósfera espesa", de: "Planet mit dichter Atmosphäre", nl: "Planeet met dikke atmosfeer" },
          { en: "Red giant in late stages", es: "Gigante roja en etapas tardías", de: "Roter Riese in späten Stadien", nl: "Rode reus in late stadia" }
        ],
        correct: 0,
        explanation: {
          en: "Brown dwarfs are substellar objects with masses between roughly 13-80 Jupiter masses, too small to sustain hydrogen fusion but larger than planets. They can briefly fuse deuterium and emit infrared radiation from their gravitational contraction heat.",
          es: "Las enanas marrones son objetos subestelares con masas entre aproximadamente 13-80 masas de Júpiter, demasiado pequeñas para sostener fusión de hidrógeno pero más grandes que planetas. Pueden fusionar brevemente deuterio y emitir radiación infrarroja del calor de su contracción gravitacional.",
          de: "Braune Zwerge sind substellare Objekte mit Massen zwischen etwa 13-80 Jupiter-Massen, zu klein für Wasserstofffusion, aber größer als Planeten. Sie können kurzzeitig Deuterium fusionieren und Infrarotstrahlung von ihrer gravitativen Kontraktionswärme aussenden.",
          nl: "Bruine dwergen zijn substellaire objecten met massa's tussen ongeveer 13-80 Jupitermassa's, te klein om waterstoffusie vol te houden maar groter dan planeten. Ze kunnen kort deuterium fuseren en infraroodstraling uitzenden van hun gravitationele samentrekkingswarmte."
        }
      },
      {
        question: {
          en: "What causes the acceleration of cosmic expansion?",
          es: "¿Qué causa la aceleración de la expansión cósmica?",
          de: "Was verursacht die Beschleunigung der kosmischen Expansion?",
          nl: "Wat veroorzaakt de versnelling van kosmische uitdijing?"
        },
        options: [
          { en: "Dark energy", es: "Energía oscura", de: "Dunkle Energie", nl: "Donkere energie" },
          { en: "Dark matter", es: "Materia oscura", de: "Dunkle Materie", nl: "Donkere materie" },
          { en: "Black hole mergers", es: "Fusiones de agujeros negros", de: "Schwarze-Loch-Verschmelzungen", nl: "Zwarte gat versmelting" },
          { en: "Galactic collisions", es: "Colisiones galácticas", de: "Galaktische Kollisionen", nl: "Galactische botsingen" }
        ],
        correct: 0,
        explanation: {
          en: "Dark energy, comprising about 68% of the universe, is the hypothetical form of energy responsible for the observed accelerating expansion of the universe. Its exact nature remains one of the greatest mysteries in cosmology, but it appears to have a constant density throughout space.",
          es: "La energía oscura, que comprende aproximadamente el 68% del universo, es la forma hipotética de energía responsable de la expansión acelerada observada del universo. Su naturaleza exacta permanece como uno de los mayores misterios en cosmología, pero parece tener una densidad constante a través del espacio.",
          de: "Dunkle Energie, die etwa 68% des Universums ausmacht, ist die hypothetische Energieform, die für die beobachtete beschleunigte Expansion des Universums verantwortlich ist. Ihre genaue Natur bleibt eines der größten Mysterien in der Kosmologie, aber sie scheint eine konstante Dichte im Raum zu haben.",
          nl: "Donkere energie, die ongeveer 68% van het heelal vormt, is de hypothetische vorm van energie verantwoordelijk voor de waargenomen versnellende uitdijing van het heelal. Zijn exacte aard blijft een van de grootste mysteries in de kosmologie, maar het lijkt een constante dichtheid door de ruimte te hebben."
        }
      },
      {
        question: {
          en: "What is the Parker Solar Probe designed to study?",
          es: "¿Qué está diseñada para estudiar la Sonda Solar Parker?",
          de: "Was soll die Parker Solar Probe erforschen?",
          nl: "Wat is de Parker Solar Probe ontworpen om te bestuderen?"
        },
        options: [
          { en: "Solar corona and solar wind origins", es: "Corona solar y orígenes del viento solar", de: "Sonnenkorona und Ursprünge des Sonnenwinds", nl: "Zonnecorona en oorsprong van zonnewind" },
          { en: "Solar interior composition", es: "Composición del interior solar", de: "Zusammensetzung des Sonneninneren", nl: "Samenstelling van zonneinterieur" },
          { en: "Solar magnetic field reversals", es: "Reversiones del campo magnético solar", de: "Umkehrungen des solaren Magnetfelds", nl: "Omkering van zonnemagnetisch veld" },
          { en: "Solar neutrino production", es: "Producción de neutrinos solares", de: "Solare Neutrino-Produktion", nl: "Zonne-neutrino productie" }
        ],
        correct: 0,
        explanation: {
          en: "The Parker Solar Probe, launched in 2018, is designed to fly closer to the Sun than any previous spacecraft, studying the solar corona's extreme temperatures and the mechanisms that accelerate the solar wind. It aims to solve fundamental questions about solar physics.",
          es: "La Sonda Solar Parker, lanzada en 2018, está diseñada para volar más cerca del Sol que cualquier nave espacial anterior, estudiando las temperaturas extremas de la corona solar y los mecanismos que aceleran el viento solar. Tiene como objetivo resolver preguntas fundamentales sobre física solar.",
          de: "Die Parker Solar Probe, gestartet 2018, ist darauf ausgelegt, näher zur Sonne zu fliegen als jede vorherige Raumsonde, um die extremen Temperaturen der Sonnenkorona und die Mechanismen zu studieren, die den Sonnenwind beschleunigen. Sie zielt darauf ab, fundamentale Fragen zur Sonnenphysik zu lösen.",
          nl: "De Parker Solar Probe, gelanceerd in 2018, is ontworpen om dichter bij de Zon te vliegen dan enig vorig ruimtevaartuig, waarbij de extreme temperaturen van de zonnecorona en de mechanismen die de zonnewind versnellen worden bestudeerd. Het beoogt fundamentele vragen over zonnefysica op te lossen."
        }
      },
      {
        question: {
          en: "What is the difference between apparent and absolute magnitude?",
          es: "¿Cuál es la diferencia entre magnitud aparente y absoluta?",
          de: "Was ist der Unterschied zwischen scheinbarer und absoluter Helligkeit?",
          nl: "Wat is het verschil tussen schijnbare en absolute magnitude?"
        },
        options: [
          { en: "Apparent is brightness as seen from Earth; absolute is intrinsic brightness", es: "Aparente es el brillo visto desde la Tierra; absoluta es el brillo intrínseco", de: "Scheinbar ist die Helligkeit von der Erde aus gesehen; absolut ist die intrinsische Helligkeit", nl: "Schijnbare is helderheid zoals gezien vanaf Aarde; absolute is intrinsieke helderheid" },
          { en: "Apparent uses logarithmic scale; absolute uses linear", es: "Aparente usa escala logarítmica; absoluta usa lineal", de: "Scheinbar verwendet logarithmische Skala; absolut verwendet lineare", nl: "Schijnbare gebruikt logaritmische schaal; absolute gebruikt lineaire" },
          { en: "Apparent measures visible light; absolute measures all wavelengths", es: "Aparente mide luz visible; absoluta mide todas las longitudes de onda", de: "Scheinbar misst sichtbares Licht; absolut misst alle Wellenlängen", nl: "Schijnbare meet zichtbaar licht; absolute meet alle golflengtes" },
          { en: "No significant difference", es: "No hay diferencia significativa", de: "Kein wesentlicher Unterschied", nl: "Geen significant verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Apparent magnitude measures how bright a star appears from Earth, affected by both intrinsic brightness and distance. Absolute magnitude is the brightness a star would have if placed at a standard distance of 10 parsecs, representing its true luminosity.",
          es: "La magnitud aparente mide qué tan brillante aparece una estrella desde la Tierra, afectada tanto por el brillo intrínseco como por la distancia. La magnitud absoluta es el brillo que tendría una estrella si se colocara a una distancia estándar de 10 parsecs, representando su luminosidad verdadera.",
          de: "Scheinbare Helligkeit misst, wie hell ein Stern von der Erde aus erscheint, beeinflusst sowohl von intrinsischer Helligkeit als auch von Entfernung. Absolute Helligkeit ist die Helligkeit, die ein Stern hätte, wenn er in einer Standardentfernung von 10 Parsec platziert würde, was seine wahre Leuchtkraft darstellt.",
          nl: "Schijnbare magnitude meet hoe helder een ster lijkt vanaf de Aarde, beïnvloed door zowel intrinsieke helderheid als afstand. Absolute magnitude is de helderheid die een ster zou hebben als geplaatst op een standaardafstand van 10 parsec, wat zijn ware helderheid vertegenwoordigt."
        }
      },
      {
        question: {
          en: "What is nucleocosmochronology?",
          es: "¿Qué es la nucleocosmochronología?",
          de: "Was ist Nukleokosmochronologie?",
          nl: "Wat is nucleokosmotachronologie?"
        },
        options: [
          { en: "Dating technique using radioactive decay of heavy elements", es: "Técnica de datación usando desintegración radiactiva de elementos pesados", de: "Datierungstechnik unter Verwendung radioaktiven Zerfalls schwerer Elemente", nl: "Dateringstechniek die radioactief verval van zware elementen gebruikt" },
          { en: "Study of cosmic ray interactions", es: "Estudio de interacciones de rayos cósmicos", de: "Studium kosmischer Strahleninteraktionen", nl: "Studie van kosmische straal interacties" },
          { en: "Measurement of galactic rotation periods", es: "Medición de períodos de rotación galáctica", de: "Messung galaktischer Rotationsperioden", nl: "Meting van galactische rotatieperioden" },
          { en: "Analysis of stellar birth rates", es: "Análisis de tasas de nacimiento estelar", de: "Analyse stellarer Geburtsraten", nl: "Analyse van stellaire geboortecijfers" }
        ],
        correct: 0,
        explanation: {
          en: "Nucleocosmochronology uses the radioactive decay of long-lived heavy elements like uranium and thorium to determine the age of stellar populations and the galaxy. By comparing observed abundances with theoretical production rates, astronomers can estimate when these elements were created.",
          es: "La nucleocosmochronología usa la desintegración radiactiva de elementos pesados de larga vida como uranio y torio para determinar la edad de poblaciones estelares y la galaxia. Al comparar abundancias observadas con tasas de producción teóricas, los astrónomos pueden estimar cuándo se crearon estos elementos.",
          de: "Nukleokosmochronologie verwendet den radioaktiven Zerfall langlebiger schwerer Elemente wie Uran und Thorium zur Bestimmung des Alters von Sternpopulationen und der Galaxie. Durch Vergleich beobachteter Häufigkeiten mit theoretischen Produktionsraten können Astronomen schätzen, wann diese Elemente entstanden sind.",
          nl: "Nucleokosmotachronologie gebruikt het radioactieve verval van langlevende zware elementen zoals uranium en thorium om de leeftijd van stellaire populaties en het sterrenstelsel te bepalen. Door waargenomen abundanties te vergelijken met theoretische productiecijfers kunnen astronomen schatten wanneer deze elementen werden gecreëerd."
        }
      },
      {
        question: {
          en: "What is the Jeans instability?",
          es: "¿Qué es la inestabilidad de Jeans?",
          de: "Was ist die Jeans-Instabilität?",
          nl: "Wat is de Jeans instabiliteit?"
        },
        options: [
          { en: "Gravitational collapse condition for gas cloud star formation", es: "Condición de colapso gravitacional para formación estelar en nubes de gas", de: "Gravitationskollapsbedingung für Sternbildung in Gaswolken", nl: "Gravitationele instortingsvoorwaarde voor stervorming in gaswolken" },
          { en: "Rotational instability in galaxy disks", es: "Inestabilidad rotacional en discos galácticos", de: "Rotationsinstabilität in Galaxienscheiben", nl: "Rotatieïnstabiliteit in galactische schijven" },
          { en: "Magnetic field disruption in stellar cores", es: "Disrupción del campo magnético en núcleos estelares", de: "Magnetfeldstörung in Sternkernen", nl: "Magnetisch veld verstoring in stellaire kernen" },
          { en: "Tidal disruption near massive objects", es: "Disrupción de mareas cerca de objetos masivos", de: "Gezeitenstörung nahe massiver Objekte", nl: "Getijdenverstoring nabij massieve objecten" }
        ],
        correct: 0,
        explanation: {
          en: "The Jeans instability describes the condition under which a gas cloud will collapse under its own gravity to form stars. It occurs when gravitational forces overcome the gas pressure, depending on the cloud's mass, temperature, and density. This is fundamental to understanding star formation.",
          es: "La inestabilidad de Jeans describe la condición bajo la cual una nube de gas colapsará bajo su propia gravedad para formar estrellas. Ocurre cuando las fuerzas gravitacionales superan la presión del gas, dependiendo de la masa, temperatura y densidad de la nube. Esto es fundamental para entender la formación estelar.",
          de: "Die Jeans-Instabilität beschreibt die Bedingung, unter der eine Gaswolke unter ihrer eigenen Schwerkraft kollabiert, um Sterne zu bilden. Sie tritt auf, wenn Gravitationskräfte den Gasdruck überwinden, abhängig von Masse, Temperatur und Dichte der Wolke. Dies ist grundlegend für das Verständnis der Sternbildung.",
          nl: "De Jeans instabiliteit beschrijft de voorwaarde waaronder een gaswolk zal instorten onder zijn eigen zwaartekracht om sterren te vormen. Het treedt op wanneer gravitatiekrachten de gasdruk overwinnen, afhankelijk van de massa, temperatuur en dichtheid van de wolk. Dit is fundamenteel voor het begrijpen van stervorming."
        }
      },
      {
        question: {
          en: "What is the cosmic web?",
          es: "¿Qué es la red cósmica?",
          de: "Was ist das kosmische Netz?",
          nl: "Wat is het kosmische web?"
        },
        options: [
          { en: "Large-scale structure of matter distribution in the universe", es: "Estructura a gran escala de distribución de materia en el universo", de: "Großräumige Struktur der Materieverteilung im Universum", nl: "Grootschalige structuur van materieverdeling in het heelal" },
          { en: "Network of wormholes connecting galaxies", es: "Red de agujeros de gusano conectando galaxias", de: "Netzwerk von Wurmlöchern, die Galaxien verbinden", nl: "Netwerk van wormgaten die sterrenstelsels verbinden" },
          { en: "Electromagnetic field lines in space", es: "Líneas de campo electromagnético en el espacio", de: "Elektromagnetische Feldlinien im Raum", nl: "Elektromagnetische veldlijnen in de ruimte" },
          { en: "Gravitational wave interference patterns", es: "Patrones de interferencia de ondas gravitacionales", de: "Interferenzmuster von Gravitationswellen", nl: "Interferentiepatronen van gravitatiegolven" }
        ],
        correct: 0,
        explanation: {
          en: "The cosmic web is the largest-scale structure of the universe, consisting of galaxy filaments separated by vast voids. This web-like pattern formed from initial density fluctuations after the Big Bang, with dark matter providing the scaffolding for galaxy formation.",
          es: "La red cósmica es la estructura a mayor escala del universo, consistente en filamentos galácticos separados por vacíos vastos. Este patrón similar a una red se formó de fluctuaciones de densidad iniciales después del Big Bang, con materia oscura proporcionando el andamiaje para la formación galáctica.",
          de: "Das kosmische Netz ist die größte Struktur des Universums, bestehend aus Galaxienfilamenten, die durch riesige Leerräume getrennt sind. Dieses netzartige Muster entstand aus anfänglichen Dichteschwankungen nach dem Urknall, wobei dunkle Materie das Gerüst für die Galaxienbildung lieferte.",
          nl: "Het kosmische web is de grootsteschaal structuur van het heelal, bestaande uit galactische filamenten gescheiden door enorme leegtens. Dit webachtige patroon vormde zich uit initiële dichtheidsvariaties na de Big Bang, waarbij donkere materie de steiger leverde voor galactische vorming."
        }
      },
      {
        question: {
          en: "What is the critical density of the universe?",
          es: "¿Cuál es la densidad crítica del universo?",
          de: "Was ist die kritische Dichte des Universums?",
          nl: "Wat is de kritische dichtheid van het heelal?"
        },
        options: [
          { en: "Density required for a flat universe geometry", es: "Densidad requerida para una geometría de universo plano", de: "Dichte, die für eine flache Universumsgeometrie erforderlich ist", nl: "Dichtheid vereist voor een platte heelal geometrie" },
          { en: "Density of water at standard conditions", es: "Densidad del agua en condiciones estándar", de: "Dichte von Wasser unter Standardbedingungen", nl: "Dichtheid van water onder standaard omstandigheden" },
          { en: "Maximum density before universe collapse", es: "Densidad máxima antes del colapso del universo", de: "Maximale Dichte vor dem Kollaps des Universums", nl: "Maximale dichtheid voor heelal ineenstorting" },
          { en: "Density of dark matter only", es: "Densidad solo de materia oscura", de: "Dichte nur von dunkler Materie", nl: "Dichtheid van alleen donkere materie" }
        ],
        correct: 0,
        explanation: {
          en: "The critical density (≈ 9.47 × 10⁻²⁷ kg/m³) is the matter-energy density needed for the universe to have flat geometry. If actual density equals critical density, the universe is flat; if greater, it's closed; if less, it's open.",
          es: "La densidad crítica (≈ 9.47 × 10⁻²⁷ kg/m³) es la densidad de materia-energía necesaria para que el universo tenga geometría plana. Si la densidad real iguala la densidad crítica, el universo es plano; si es mayor, está cerrado; si es menor, está abierto.",
          de: "Die kritische Dichte (≈ 9,47 × 10⁻²⁷ kg/m³) ist die Materie-Energie-Dichte, die für eine flache Geometrie des Universums benötigt wird. Wenn die tatsächliche Dichte der kritischen Dichte entspricht, ist das Universum flach; wenn größer, ist es geschlossen; wenn kleiner, ist es offen.",
          nl: "De kritische dichtheid (≈ 9,47 × 10⁻²⁷ kg/m³) is de materie-energie dichtheid nodig voor het heelal om platte geometrie te hebben. Als werkelijke dichtheid gelijk is aan kritische dichtheid, is het heelal plat; als groter, is het gesloten; als minder, is het open."
        }
      },
      {
        question: {
          en: "What is gravitational lensing?",
          es: "¿Qué es la lente gravitacional?",
          de: "Was ist Gravitationslinseneffekt?",
          nl: "Wat is gravitationele lensvorming?"
        },
        options: [
          { en: "Bending of light by massive objects due to spacetime curvature", es: "Curvatura de la luz por objetos masivos debido a la curvatura del espaciotiempo", de: "Beugung von Licht durch massive Objekte aufgrund der Raumzeit-Krümmung", nl: "Buiging van licht door massieve objecten vanwege ruimtetijd kromming" },
          { en: "Reflection of light off planetary atmospheres", es: "Reflexión de luz en atmósferas planetarias", de: "Reflexion von Licht an Planetenatmosphären", nl: "Reflectie van licht van planetaire atmosferen" },
          { en: "Absorption of light by interstellar dust", es: "Absorción de luz por polvo interestelar", de: "Absorption von Licht durch interstellaren Staub", nl: "Absorptie van licht door interstellair stof" },
          { en: "Scattering of light by solar wind", es: "Dispersión de luz por viento solar", de: "Streuung von Licht durch Sonnenwind", nl: "Verstrooiing van licht door zonnewind" }
        ],
        correct: 0,
        explanation: {
          en: "Gravitational lensing occurs when massive objects curve spacetime, deflecting light from background sources. This effect can magnify, distort, or create multiple images of distant objects, serving as a powerful tool for studying dark matter and distant galaxies.",
          es: "La lente gravitacional ocurre cuando objetos masivos curvan el espaciotiempo, desviando luz de fuentes de fondo. Este efecto puede magnificar, distorsionar, o crear múltiples imágenes de objetos distantes, sirviendo como herramienta poderosa para estudiar materia oscura y galaxias distantes.",
          de: "Gravitationslinseneffekt tritt auf, wenn massive Objekte die Raumzeit krümmen und Licht von Hintergrundquellen ablenken. Dieser Effekt kann entfernte Objekte vergrößern, verzerren oder mehrfache Bilder erzeugen und dient als mächtiges Werkzeug zur Untersuchung dunkler Materie und ferner Galaxien.",
          nl: "Gravitationele lensvorming treedt op wanneer massieve objecten ruimtetijd krommen, licht van achtergrond bronnen afbuigend. Dit effect kan verre objecten vergroten, vervormen, of meerdere beelden creëren, dienend als krachtig hulpmiddel voor het bestuderen van donkere materie en verre sterrenstelsels."
        }
      },
      {
        question: {
          en: "What is the baryon acoustic oscillation (BAO) signature?",
          es: "¿Qué es la firma de oscilaciones acústicas de bariones (BAO)?",
          de: "Was ist die Signatur baryonischer akustischer Oszillationen (BAO)?",
          nl: "Wat is de baryon akoestische oscillatie (BAO) signatuur?"
        },
        options: [
          { en: "Standard ruler in cosmic structure from primordial sound waves", es: "Regla estándar en estructura cósmica de ondas de sonido primordiales", de: "Standardlineal in kosmischer Struktur aus primordialen Schallwellen", nl: "Standaard liniaal in kosmische structuur van primordiale geluidsgolven" },
          { en: "Oscillation of neutron star surfaces", es: "Oscilación de superficies de estrellas de neutrones", de: "Oszillation von Neutronenstern-Oberflächen", nl: "Oscillatie van neutronenster oppervlakken" },
          { en: "Vibration of atomic nuclei in stars", es: "Vibración de núcleos atómicos en estrellas", de: "Schwingung von Atomkernen in Sternen", nl: "Trilling van atoomkernen in sterren" },
          { en: "Pulsation of variable star brightness", es: "Pulsación de brillo de estrella variable", de: "Pulsation variabler Sternhelligkeit", nl: "Pulsatie van variabele ster helderheid" }
        ],
        correct: 0,
        explanation: {
          en: "BAO represents the fossilized imprint of sound waves that traveled through the early universe plasma before recombination. This created a characteristic scale (~150 Mpc) in galaxy clustering that serves as a standard ruler for measuring cosmic expansion and dark energy.",
          es: "BAO representa la huella fosilizada de ondas de sonido que viajaron a través del plasma del universo temprano antes de la recombinación. Esto creó una escala característica (~150 Mpc) en agrupamiento galáctico que sirve como regla estándar para medir expansión cósmica y energía oscura.",
          de: "BAO stellt den versteinerten Abdruck von Schallwellen dar, die durch das Plasma des frühen Universums vor der Rekombination reisten. Dies schuf eine charakteristische Skala (~150 Mpc) in der Galaxienhäufung, die als Standardlineal zur Messung kosmischer Expansion und dunkler Energie dient.",
          nl: "BAO vertegenwoordigt de gefossiliseerde afdruk van geluidsgolven die door het vroege heelal plasma reisden voor recombinatie. Dit creëerde een karakteristieke schaal (~150 Mpc) in galactische clustering die dient als standaard liniaal voor het meten van kosmische uitdijing en donkere energie."
        }
      },
      {
        question: {
          en: "What is stellar nucleosynthesis?",
          es: "¿Qué es la nucleosíntesis estelar?",
          de: "Was ist stellare Nukleosynthese?",
          nl: "Wat is stellaire nucleosynthese?"
        },
        options: [
          { en: "Formation of heavy elements through nuclear fusion in stellar cores", es: "Formación de elementos pesados a través de fusión nuclear en núcleos estelares", de: "Bildung schwerer Elemente durch Kernfusion in Sternkernen", nl: "Vorming van zware elementen door kernfusie in stellaire kernen" },
          { en: "Formation of planets around stars", es: "Formación de planetas alrededor de estrellas", de: "Bildung von Planeten um Sterne", nl: "Vorming van planeten rond sterren" },
          { en: "Creation of stellar magnetic fields", es: "Creación de campos magnéticos estelares", de: "Schaffung stellarer Magnetfelder", nl: "Creatie van stellaire magnetische velden" },
          { en: "Synthesis of stellar atmospheres", es: "Síntesis de atmósferas estelares", de: "Synthese stellarer Atmosphären", nl: "Synthese van stellaire atmosferen" }
        ],
        correct: 0,
        explanation: {
          en: "Stellar nucleosynthesis is the process by which stars create heavier elements from lighter ones through nuclear fusion. Main sequence stars fuse hydrogen to helium, while massive stars can create elements up to iron. Elements heavier than iron are formed during supernova explosions through rapid neutron capture.",
          es: "La nucleosíntesis estelar es el proceso por el cual las estrellas crean elementos más pesados a partir de más ligeros a través de fusión nuclear. Las estrellas de secuencia principal fusionan hidrógeno a helio, mientras que estrellas masivas pueden crear elementos hasta hierro. Elementos más pesados que el hierro se forman durante explosiones de supernova a través de captura rápida de neutrones.",
          de: "Stellare Nukleosynthese ist der Prozess, durch den Sterne schwerere Elemente aus leichteren durch Kernfusion erzeugen. Hauptreihensterne fusionieren Wasserstoff zu Helium, während massereiche Sterne Elemente bis zu Eisen erzeugen können. Elemente schwerer als Eisen entstehen während Supernova-Explosionen durch schnellen Neutroneneinfang.",
          nl: "Stellaire nucleosynthese is het proces waarbij sterren zwaardere elementen maken uit lichtere door kernfusie. Hoofdreeks sterren fuseren waterstof tot helium, terwijl massieve sterren elementen kunnen maken tot ijzer. Elementen zwaarder dan ijzer worden gevormd tijdens supernova explosies door snelle neutronen vastlegging."
        }
      },
      {
        question: {
          en: "What is the equation of state parameter (w) for dark energy?",
          es: "¿Cuál es el parámetro de ecuación de estado (w) para energía oscura?",
          de: "Was ist der Zustandsgleichungsparameter (w) für dunkle Energie?",
          nl: "Wat is de toestandsvergelijking parameter (w) voor donkere energie?"
        },
        options: [
          { en: "w ≈ -1 for cosmological constant", es: "w ≈ -1 para constante cosmológica", de: "w ≈ -1 für kosmologische Konstante", nl: "w ≈ -1 voor kosmologische constante" },
          { en: "w = 0 for all energy forms", es: "w = 0 para todas las formas de energía", de: "w = 0 für alle Energieformen", nl: "w = 0 voor alle energie vormen" },
          { en: "w = 1 for relativistic matter", es: "w = 1 para materia relativista", de: "w = 1 für relativistische Materie", nl: "w = 1 voor relativistische materie" },
          { en: "w = 0.5 for baryonic matter", es: "w = 0.5 para materia bariónica", de: "w = 0,5 für baryonische Materie", nl: "w = 0,5 voor baryonische materie" }
        ],
        correct: 0,
        explanation: {
          en: "The equation of state parameter w = P/ρ relates pressure to density. For dark energy modeled as a cosmological constant (vacuum energy), w = -1, indicating negative pressure that drives accelerated cosmic expansion. Matter has w = 0, radiation has w = 1/3.",
          es: "El parámetro de ecuación de estado w = P/ρ relaciona presión con densidad. Para energía oscura modelada como constante cosmológica (energía de vacío), w = -1, indicando presión negativa que impulsa expansión cósmica acelerada. La materia tiene w = 0, la radiación tiene w = 1/3.",
          de: "Der Zustandsgleichungsparameter w = P/ρ bezieht Druck auf Dichte. Für dunkle Energie, modelliert als kosmologische Konstante (Vakuumenergie), ist w = -1, was negativen Druck anzeigt, der beschleunigte kosmische Expansion antreibt. Materie hat w = 0, Strahlung hat w = 1/3.",
          nl: "De toestandsvergelijking parameter w = P/ρ relateert druk aan dichtheid. Voor donkere energie gemodelleerd als kosmologische constante (vacuüm energie), w = -1, wat negatieve druk aangeeft die versnelde kosmische uitdijing aandrijft. Materie heeft w = 0, straling heeft w = 1/3."
        }
      },
      {
        question: {
          en: "What causes the p-p chain reaction in stars?",
          es: "¿Qué causa la reacción en cadena p-p en estrellas?",
          de: "Was verursacht die p-p-Kettenreaktion in Sternen?",
          nl: "Wat veroorzaakt de p-p ketting reactie in sterren?"
        },
        options: [
          { en: "Nuclear fusion of hydrogen nuclei (protons) under extreme temperature and pressure", es: "Fusión nuclear de núcleos de hidrógeno (protones) bajo temperatura y presión extremas", de: "Kernfusion von Wasserstoffkernen (Protonen) unter extremer Temperatur und Druck", nl: "Kernfusie van waterstof kernen (protonen) onder extreme temperatuur en druk" },
          { en: "Chemical combustion of hydrogen gas", es: "Combustión química de gas hidrógeno", de: "Chemische Verbrennung von Wasserstoffgas", nl: "Chemische verbranding van waterstof gas" },
          { en: "Radioactive decay of heavy elements", es: "Descomposición radiactiva de elementos pesados", de: "Radioaktiver Zerfall schwerer Elemente", nl: "Radioactief verval van zware elementen" },
          { en: "Gravitational compression alone", es: "Solo compresión gravitacional", de: "Nur gravitationale Kompression", nl: "Alleen gravitationele compressie" }
        ],
        correct: 0,
        explanation: {
          en: "The proton-proton (p-p) chain is the dominant fusion process in stars like our Sun. It converts four hydrogen nuclei into one helium nucleus, releasing energy, neutrinos, and gamma rays. This process requires core temperatures around 15 million Kelvin and enormous pressure to overcome electromagnetic repulsion between protons.",
          es: "La cadena protón-protón (p-p) es el proceso de fusión dominante en estrellas como nuestro Sol. Convierte cuatro núcleos de hidrógeno en un núcleo de helio, liberando energía, neutrinos y rayos gamma. Este proceso requiere temperaturas de núcleo alrededor de 15 millones de Kelvin y presión enorme para superar repulsión electromagnética entre protones.",
          de: "Die Proton-Proton (p-p) Kette ist der dominante Fusionsprozess in Sternen wie unserer Sonne. Sie wandelt vier Wasserstoffkerne in einen Heliumkern um und setzt Energie, Neutrinos und Gammastrahlen frei. Dieser Prozess erfordert Kerntemperaturen um 15 Millionen Kelvin und enormen Druck, um elektromagnetische Abstoßung zwischen Protonen zu überwinden.",
          nl: "De proton-proton (p-p) ketting is het dominante fusie proces in sterren zoals onze Zon. Het converteert vier waterstof kernen tot één helium kern, energie, neutrino's en gamma stralen vrijgevend. Dit proces vereist kern temperaturen rond 15 miljoen Kelvin en enorme druk om elektromagnetische afstoting tussen protonen te overwinnen."
        }
      },
      {
        question: {
          en: "What is the Tolman-Oppenheimer-Volkoff (TOV) limit?",
          es: "¿Qué es el límite de Tolman-Oppenheimer-Volkoff (TOV)?",
          de: "Was ist das Tolman-Oppenheimer-Volkoff (TOV) Limit?",
          nl: "Wat is de Tolman-Oppenheimer-Volkoff (TOV) limiet?"
        },
        options: [
          { en: "Maximum mass of a neutron star before collapse to black hole", es: "Masa máxima de una estrella de neutrones antes del colapso a agujero negro", de: "Maximale Masse eines Neutronensterns vor dem Kollaps zum Schwarzen Loch", nl: "Maximale massa van een neutronenster voor ineenstorting tot zwart gat" },
          { en: "Minimum temperature for nuclear fusion", es: "Temperatura mínima para fusión nuclear", de: "Minimale Temperatur für Kernfusion", nl: "Minimale temperatuur voor kernfusie" },
          { en: "Speed limit for rotating pulsars", es: "Límite de velocidad para púlsares rotativos", de: "Geschwindigkeitslimit für rotierende Pulsare", nl: "Snelheidslimiet voor roterende pulsars" },
          { en: "Maximum luminosity of quasars", es: "Luminosidad máxima de cuásares", de: "Maximale Leuchtkraft von Quasaren", nl: "Maximale helderheid van quasars" }
        ],
        correct: 0,
        explanation: {
          en: "The TOV limit is approximately 2-3 solar masses, the theoretical maximum mass a neutron star can have before neutron degeneracy pressure fails and it collapses into a black hole. This limit depends on the equation of state of neutron star matter, which is still being refined by observations.",
          es: "El límite TOV es aproximadamente 2-3 masas solares, la masa máxima teórica que puede tener una estrella de neutrones antes de que falle la presión de degeneración de neutrones y colapse en un agujero negro. Este límite depende de la ecuación de estado de la materia de estrella de neutrones, que aún se está refinando con observaciones.",
          de: "Das TOV-Limit beträgt etwa 2-3 Sonnenmassen, die theoretische maximale Masse, die ein Neutronenstern haben kann, bevor der Neutronendegenerationsdruck versagt und er zu einem Schwarzen Loch kollabiert. Dieses Limit hängt von der Zustandsgleichung der Neutronenstern-Materie ab, die durch Beobachtungen noch verfeinert wird.",
          nl: "De TOV limiet is ongeveer 2-3 zonnemassa's, de theoretische maximale massa die een neutronenster kan hebben voordat neutronen degeneratie druk faalt en het ineenstort tot een zwart gat. Deze limiet hangt af van de toestandsvergelijking van neutronenster materie, die nog steeds verfijnd wordt door observaties."
        }
      },
      {
        question: {
          en: "What is the cosmic microwave background (CMB) anisotropy?",
          es: "¿Qué es la anisotropía del fondo cósmico de microondas (FCM)?",
          de: "Was ist die Anisotropie der kosmischen Mikrowellenhintergrundstrahlung (CMB)?",
          nl: "Wat is de kosmische magnetron achtergrond (CMB) anisotropie?"
        },
        options: [
          { en: "Temperature fluctuations in the CMB revealing early universe density variations", es: "Fluctuaciones de temperatura en el FCM revelando variaciones de densidad del universo temprano", de: "Temperaturschwankungen in der CMB, die frühe Dichtevariationen des Universums offenbaren", nl: "Temperatuur fluctuaties in de CMB die vroege heelal dichtheid variaties onthullen" },
          { en: "Polarization of CMB photons only", es: "Solo polarización de fotones del FCM", de: "Nur Polarisation von CMB-Photonen", nl: "Alleen polarisatie van CMB fotonen" },
          { en: "Uniform temperature distribution", es: "Distribución uniforme de temperatura", de: "Gleichmäßige Temperaturverteilung", nl: "Uniforme temperatuur distributie" },
          { en: "Absorption lines in the CMB spectrum", es: "Líneas de absorción en el espectro del FCM", de: "Absorptionslinien im CMB-Spektrum", nl: "Absorptie lijnen in het CMB spectrum" }
        ],
        correct: 0,
        explanation: {
          en: "CMB anisotropy consists of tiny temperature fluctuations (δT/T ≈ 10⁻⁵) in the otherwise uniform cosmic microwave background. These fluctuations represent the seeds of today's large-scale structure, arising from quantum fluctuations during inflation that were later amplified by gravity.",
          es: "La anisotropía del FCM consiste en fluctuaciones diminutas de temperatura (δT/T ≈ 10⁻⁵) en el fondo cósmico de microondas por lo demás uniforme. Estas fluctuaciones representan las semillas de la estructura a gran escala actual, surgiendo de fluctuaciones cuánticas durante la inflación que fueron amplificadas posteriormente por gravedad.",
          de: "CMB-Anisotropie besteht aus winzigen Temperaturschwankungen (δT/T ≈ 10⁻⁵) im sonst gleichmäßigen kosmischen Mikrowellenhintergrund. Diese Schwankungen stellen die Samen der heutigen großräumigen Struktur dar, entstehend aus Quantenfluktuationen während der Inflation, die später durch Gravitation verstärkt wurden.",
          nl: "CMB anisotropie bestaat uit minuscule temperatuur fluctuaties (δT/T ≈ 10⁻⁵) in de anderszins uniforme kosmische magnetron achtergrond. Deze fluctuaties vertegenwoordigen de zaden van hedendaagse grootschalige structuur, voortvloeiend uit quantum fluctuaties tijdens inflatie die later versterkt werden door gravitatie."
        }
      },
      {
        question: {
          en: "What is the Eddington luminosity?",
          es: "¿Qué es la luminosidad de Eddington?",
          de: "Was ist die Eddington-Leuchtkraft?",
          nl: "Wat is de Eddington helderheid?"
        },
        options: [
          { en: "Maximum luminosity where radiation pressure balances gravitational force", es: "Luminosidad máxima donde presión de radiación equilibra fuerza gravitacional", de: "Maximale Leuchtkraft, bei der Strahlungsdruck die Gravitationskraft ausgleicht", nl: "Maximale helderheid waar stralingsdruk gravitationele kracht balanceert" },
          { en: "Minimum brightness for stellar visibility", es: "Brillo mínimo para visibilidad estelar", de: "Minimale Helligkeit für stellare Sichtbarkeit", nl: "Minimale helderheid voor stellaire zichtbaarheid" },
          { en: "Standard candle brightness measurement", es: "Medición de brillo de vela estándar", de: "Standard-Kerzen-Helligkeitsmessung", nl: "Standaard kaars helderheid meting" },
          { en: "Solar luminosity reference value", es: "Valor de referencia de luminosidad solar", de: "Solar-Leuchtkraft-Referenzwert", nl: "Zonnehelderheid referentie waarde" }
        ],
        correct: 0,
        explanation: {
          en: "The Eddington limit defines the maximum luminosity a star can achieve while maintaining hydrostatic equilibrium. When radiation pressure from nuclear fusion exceeds gravitational force, the star becomes unstable. For massive stars, this limit can trigger episodic mass loss and luminous blue variable phases.",
          es: "El límite de Eddington define la luminosidad máxima que puede lograr una estrella mientras mantiene equilibrio hidrostático. Cuando presión de radiación de fusión nuclear excede fuerza gravitacional, la estrella se vuelve inestable. Para estrellas masivas, este límite puede desencadenar pérdida episódica de masa y fases variables azules luminosas.",
          de: "Das Eddington-Limit definiert die maximale Leuchtkraft, die ein Stern erreichen kann, während er hydrostatisches Gleichgewicht aufrechterhält. Wenn Strahlungsdruck von Kernfusion die Gravitationskraft übersteigt, wird der Stern instabil. Für massereiche Sterne kann dieses Limit episodischen Masseverlust und leuchtend blaue variable Phasen auslösen.",
          nl: "De Eddington limiet definieert de maximale helderheid die een ster kan bereiken terwijl hydrostatisch evenwicht behouden wordt. Wanneer stralingsdruk van kernfusie gravitationele kracht overschrijdt, wordt de ster instabiel. Voor massieve sterren kan deze limiet episodisch massa verlies en heldere blauwe variabele fasen veroorzaken."
        }
      },
      {
        question: {
          en: "What is Population III stars?",
          es: "¿Qué son las estrellas de Población III?",
          de: "Was sind Population-III-Sterne?",
          nl: "Wat zijn Populatie III sterren?"
        },
        options: [
          { en: "First generation stars with no heavy elements (metals)", es: "Estrellas de primera generación sin elementos pesados (metales)", de: "Sterne der ersten Generation ohne schwere Elemente (Metalle)", nl: "Eerste generatie sterren zonder zware elementen (metalen)" },
          { en: "Stars in the Milky Way halo only", es: "Solo estrellas en el halo de la Vía Láctea", de: "Nur Sterne im Halo der Milchstraße", nl: "Alleen sterren in de Melkweg halo" },
          { en: "The most metal-rich stars observed", es: "Las estrellas más ricas en metales observadas", de: "Die metallreichsten beobachteten Sterne", nl: "De meest metaal-rijke sterren waargenomen" },
          { en: "Third generation binary star systems", es: "Sistemas estelares binarios de tercera generación", de: "Doppelsternsysteme der dritten Generation", nl: "Derde generatie dubbel ster systemen" }
        ],
        correct: 0,
        explanation: {
          en: "Population III stars were the first stars to form in the universe, composed almost entirely of primordial hydrogen and helium. These massive stars (100-1000 M☉) had no heavy elements because they formed before stellar nucleosynthesis created metals. They played a crucial role in reionizing the universe and producing the first heavy elements.",
          es: "Las estrellas de Población III fueron las primeras en formarse en el universo, compuestas casi enteramente de hidrógeno y helio primordiales. Estas estrellas masivas (100-1000 M☉) no tenían elementos pesados porque se formaron antes de que la nucleosíntesis estelar creara metales. Jugaron papel crucial en reionizar el universo y producir los primeros elementos pesados.",
          de: "Population-III-Sterne waren die ersten Sterne, die sich im Universum bildeten, fast ausschließlich aus primordialem Wasserstoff und Helium bestehend. Diese massiven Sterne (100-1000 M☉) hatten keine schweren Elemente, weil sie sich vor der stellaren Nukleosynthese bildeten, die Metalle schuf. Sie spielten eine entscheidende Rolle bei der Reionisierung des Universums und der Produktion der ersten schweren Elemente.",
          nl: "Populatie III sterren waren de eerste sterren die zich vormden in het heelal, bijna volledig bestaande uit primordiale waterstof en helium. Deze massieve sterren (100-1000 M☉) hadden geen zware elementen omdat ze zich vormden voor stellaire nucleosynthese metalen creëerde. Ze speelden een cruciale rol in het herioniseren van het heelal en het produceren van de eerste zware elementen."
        }
      },
      {
        question: {
          en: "What is the cosmic coincidence problem?",
          es: "¿Qué es el problema de coincidencia cósmica?",
          de: "Was ist das kosmische Koinzidenzproblem?",
          nl: "Wat is het kosmische toeval probleem?"
        },
        options: [
          { en: "Dark energy and dark matter densities are comparable in the current epoch", es: "Densidades de energía oscura y materia oscura son comparables en la época actual", de: "Dunkle Energie und dunkle Materie-Dichten sind in der aktuellen Epoche vergleichbar", nl: "Donkere energie en donkere materie dichtheden zijn vergelijkbaar in het huidige tijdperk" },
          { en: "The universe appears to be exactly flat", es: "El universo parece ser exactamente plano", de: "Das Universum scheint exakt flach zu sein", nl: "Het heelal lijkt precies plat te zijn" },
          { en: "All fundamental constants have similar values", es: "Todas las constantes fundamentales tienen valores similares", de: "Alle fundamentalen Konstanten haben ähnliche Werte", nl: "Alle fundamentele constanten hebben vergelijkbare waarden" },
          { en: "Galaxy formation occurred simultaneously everywhere", es: "Formación galáctica ocurrió simultáneamente en todas partes", de: "Galaxienbildung ereignete sich überall gleichzeitig", nl: "Galactische vorming vond overal tegelijkertijd plaats" }
        ],
        correct: 0,
        explanation: {
          en: "The cosmic coincidence problem questions why dark energy (69%) and dark matter (26%) have comparable densities today, when their evolution rates differ dramatically. Dark matter density decreases with expansion while dark energy density remains constant, making their current similarity seem improbably coincidental.",
          es: "El problema de coincidencia cósmica cuestiona por qué energía oscura (69%) y materia oscura (26%) tienen densidades comparables hoy, cuando sus tasas de evolución difieren dramáticamente. La densidad de materia oscura disminuye con expansión mientras densidad de energía oscura permanece constante, haciendo su similitud actual improbablemente coincidental.",
          de: "Das kosmische Koinzidenzproblem hinterfragt, warum dunkle Energie (69%) und dunkle Materie (26%) heute vergleichbare Dichten haben, obwohl sich ihre Evolutionsraten dramatisch unterscheiden. Dunkle Materie-Dichte nimmt mit Expansion ab, während dunkle Energie-Dichte konstant bleibt, was ihre aktuelle Ähnlichkeit unwahrscheinlich zufällig erscheinen lässt.",
          nl: "Het kosmische toeval probleem vraagt waarom donkere energie (69%) en donkere materie (26%) vandaag vergelijkbare dichtheden hebben, terwijl hun evolutie snelheden dramatisch verschillen. Donkere materie dichtheid neemt af met uitdijing terwijl donkere energie dichtheid constant blijft, wat hun huidige gelijkenis onwaarschijnlijk toevallig maakt."
        }
      },
      {
        question: {
          en: "What is the metallicity gradient in galaxies?",
          es: "¿Qué es el gradiente de metalicidad en galaxias?",
          de: "Was ist der Metallizitätsgradient in Galaxien?",
          nl: "Wat is de metalliciteit gradiënt in sterrenstelsels?"
        },
        options: [
          { en: "Radial decrease of heavy element abundance from galactic center outward", es: "Disminución radial de abundancia de elementos pesados desde centro galáctico hacia afuera", de: "Radiale Abnahme der Schwerelement-Häufigkeit vom galaktischen Zentrum nach außen", nl: "Radiale afname van zware element overvloed van galactisch centrum naar buiten" },
          { en: "Vertical distribution of metals in galactic disk", es: "Distribución vertical de metales en disco galáctico", de: "Vertikale Verteilung von Metallen in der galaktischen Scheibe", nl: "Verticale distributie van metalen in galactische schijf" },
          { en: "Temporal increase of metallicity over cosmic time", es: "Incremento temporal de metalicidad durante tiempo cósmico", de: "Zeitliche Zunahme der Metallizität über kosmische Zeit", nl: "Temporele toename van metalliciteit over kosmische tijd" },
          { en: "Difference in metallicity between spiral arms", es: "Diferencia en metalicidad entre brazos espirales", de: "Unterschied in Metallizität zwischen Spiralarmen", nl: "Verschil in metalliciteit tussen spiraal armen" }
        ],
        correct: 0,
        explanation: {
          en: "The metallicity gradient describes how heavy element abundance decreases with galactocentric radius in spiral galaxies. This radial gradient results from inside-out galaxy formation, where star formation began in central regions and gradually extended outward, creating a metallicity pattern that traces chemical evolution history.",
          es: "El gradiente de metalicidad describe cómo la abundancia de elementos pesados disminuye con radio galactocéntrico en galaxias espirales. Este gradiente radial resulta de formación galáctica de dentro hacia fuera, donde formación estelar comenzó en regiones centrales y gradualmente se extendió hacia afuera, creando patrón de metalicidad que traza historia de evolución química.",
          de: "Der Metallizitätsgradient beschreibt, wie die Schwerelement-Häufigkeit mit galaktozentrischem Radius in Spiralgalaxien abnimmt. Dieser radiale Gradient resultiert aus Innen-nach-Außen-Galaxienbildung, wo Sternbildung in zentralen Regionen begann und sich allmählich nach außen ausdehnte, wodurch ein Metallizitätsmuster entsteht, das die chemische Evolutionsgeschichte verfolgt.",
          nl: "De metalliciteit gradiënt beschrijft hoe zware element overvloed afneemt met galactocentrische straal in spiraal sterrenstelsels. Deze radiale gradiënt resulteert uit binnen-naar-buiten sterrenstelsel formatie, waar ster formatie begon in centrale regio's en geleidelijk naar buiten uitbreidde, een metalliciteit patroon creërend dat chemische evolutie geschiedenis traceert."
        }
      },
      {
        question: {
          en: "What is the intergalactic medium (IGM)?",
          es: "¿Qué es el medio intergaláctico (MIG)?",
          de: "Was ist das intergalaktische Medium (IGM)?",
          nl: "Wat is het intergalactische medium (IGM)?"
        },
        options: [
          { en: "Diffuse ionized hydrogen gas filling space between galaxies", es: "Gas de hidrógeno ionizado difuso llenando espacio entre galaxias", de: "Diffuses ionisiertes Wasserstoffgas, das den Raum zwischen Galaxien füllt", nl: "Diffuus geïoniseerd waterstof gas dat ruimte tussen sterrenstelsels vult" },
          { en: "Dark matter concentrated around galaxy clusters", es: "Materia oscura concentrada alrededor de cúmulos galácticos", de: "Dunkle Materie, die um Galaxienhaufen konzentriert ist", nl: "Donkere materie geconcentreerd rond galactische clusters" },
          { en: "Cosmic dust between stellar systems", es: "Polvo cósmico entre sistemas estelares", de: "Kosmischer Staub zwischen Sternensystemen", nl: "Kosmisch stof tussen stellaire systemen" },
          { en: "Vacuum regions completely devoid of matter", es: "Regiones de vacío completamente desprovistas de materia", de: "Vakuumregionen vollständig frei von Materie", nl: "Vacuüm regio's volledig ontdaan van materie" }
        ],
        correct: 0,
        explanation: {
          en: "The IGM is a sparse, hot (10⁴-10⁶ K), highly ionized hydrogen plasma that contains most of the universe's ordinary matter. This cosmic web component connects galaxies along filaments and is observable through absorption lines in quasar spectra (Lyman-alpha forest), providing insights into large-scale structure formation.",
          es: "El MIG es un plasma disperso, caliente (10⁴-10⁶ K), de hidrógeno altamente ionizado que contiene la mayor parte de materia ordinaria del universo. Este componente de red cósmica conecta galaxias a lo largo de filamentos y es observable a través de líneas de absorción en espectros de cuásares (bosque Lyman-alfa), proporcionando perspectivas sobre formación de estructura a gran escala.",
          de: "Das IGM ist ein spärliches, heißes (10⁴-10⁶ K), hochionisiertes Wasserstoffplasma, das die meiste gewöhnliche Materie des Universums enthält. Diese kosmische Netz-Komponente verbindet Galaxien entlang von Filamenten und ist durch Absorptionslinien in Quasar-Spektren beobachtbar (Lyman-Alpha-Wald), was Einblicke in großräumige Strukturbildung bietet.",
          nl: "Het IGM is een schaars, heet (10⁴-10⁶ K), hooggeïoniseerd waterstof plasma dat het meeste gewone materie van het heelal bevat. Deze kosmische web component verbindt sterrenstelsels langs filamenten en is waarneembaar door absorptie lijnen in quasar spectra (Lyman-alfa woud), inzichten biedend in grootschalige structuur vorming."
        }
      },
      {
        question: {
          en: "What is primordial nucleosynthesis (Big Bang nucleosynthesis)?",
          es: "¿Qué es la nucleosíntesis primordial (nucleosíntesis del Big Bang)?",
          de: "Was ist primordiale Nukleosynthese (Urknall-Nukleosynthese)?",
          nl: "Wat is primordiale nucleosynthese (Big Bang nucleosynthese)?"
        },
        options: [
          { en: "Formation of light elements (H, He, Li) in first 20 minutes after Big Bang", es: "Formación de elementos ligeros (H, He, Li) en primeros 20 minutos después del Big Bang", de: "Bildung leichter Elemente (H, He, Li) in den ersten 20 Minuten nach dem Urknall", nl: "Vorming van lichte elementen (H, He, Li) in eerste 20 minuten na Big Bang" },
          { en: "Nuclear reactions inside first generation stars", es: "Reacciones nucleares dentro de estrellas de primera generación", de: "Kernreaktionen in Sternen der ersten Generation", nl: "Nucleaire reacties binnen eerste generatie sterren" },
          { en: "Element formation during cosmic inflation", es: "Formación de elementos durante inflación cósmica", de: "Elementbildung während kosmischer Inflation", nl: "Element formatie tijdens kosmische inflatie" },
          { en: "Heavy element synthesis in early galaxies", es: "Síntesis de elementos pesados en galaxias tempranas", de: "Schwerelement-Synthese in frühen Galaxien", nl: "Zware element synthese in vroege sterrenstelsels" }
        ],
        correct: 0,
        explanation: {
          en: "Primordial nucleosynthesis occurred when the universe was 10 seconds to 20 minutes old, producing ~75% hydrogen, ~25% helium-4, and trace amounts of deuterium, helium-3, and lithium-7. These abundance ratios provide strong evidence for Big Bang cosmology and constrain the baryon density parameter.",
          es: "La nucleosíntesis primordial ocurrió cuando el universo tenía 10 segundos a 20 minutos de edad, produciendo ~75% hidrógeno, ~25% helio-4, y cantidades traza de deuterio, helio-3, y litio-7. Estas proporciones de abundancia proporcionan evidencia fuerte para cosmología del Big Bang y restringen parámetro de densidad de bariones.",
          de: "Primordiale Nukleosynthese ereignete sich, als das Universum 10 Sekunden bis 20 Minuten alt war, und produzierte ~75% Wasserstoff, ~25% Helium-4 und Spurenmengen von Deuterium, Helium-3 und Lithium-7. Diese Häufigkeitsverhältnisse liefern starke Beweise für Urknall-Kosmologie und beschränken den Baryonen-Dichteparameter.",
          nl: "Primordiale nucleosynthese vond plaats toen het heelal 10 seconden tot 20 minuten oud was, ~75% waterstof, ~25% helium-4, en spoor hoeveelheden deuterium, helium-3, en lithium-7 producerend. Deze overvloed verhoudingen bieden sterk bewijs voor Big Bang kosmologie en beperken de baryon dichtheid parameter."
        }
      },
      {
        question: {
          en: "What is the Local Group?",
          es: "¿Qué es el Grupo Local?",
          de: "Was ist die Lokale Gruppe?",
          nl: "Wat is de Lokale Groep?"
        },
        options: [
          { en: "Small galaxy cluster containing Milky Way, Andromeda, and ~80 smaller galaxies", es: "Pequeño cúmulo galáctico conteniendo Vía Láctea, Andrómeda, y ~80 galaxias menores", de: "Kleiner Galaxienhaufen mit Milchstraße, Andromeda und ~80 kleineren Galaxien", nl: "Kleine galactische cluster bevattend Melkweg, Andromeda, en ~80 kleinere sterrenstelsels" },
          { en: "Nearest star cluster to our solar system", es: "Cúmulo estelar más cercano a nuestro sistema solar", de: "Nächster Sternhaufen zu unserem Sonnensystem", nl: "Dichtstbijzijnde ster cluster bij ons zonnestelsel" },
          { en: "Collection of planets in solar neighborhood", es: "Colección de planetas en vecindario solar", de: "Sammlung von Planeten in der solaren Nachbarschaft", nl: "Verzameling van planeten in zonne buurt" },
          { en: "Group of pulsars detected by radio telescopes", es: "Grupo de púlsares detectados por radiotelescopios", de: "Gruppe von Pulsaren, die von Radioteleskopen entdeckt wurden", nl: "Groep van pulsars gedetecteerd door radio telescopen" }
        ],
        correct: 0,
        explanation: {
          en: "The Local Group is a gravitationally bound collection of galaxies spanning ~10 million light-years, dominated by the Milky Way and Andromeda (M31) galaxies. It includes the Triangulum Galaxy (M33) and many dwarf galaxies like the Magellanic Clouds, providing a laboratory for studying galaxy evolution and interactions.",
          es: "El Grupo Local es una colección gravitacionalmente ligada de galaxias abarcando ~10 millones de años luz, dominada por las galaxias Vía Láctea y Andrómeda (M31). Incluye la Galaxia del Triángulo (M33) y muchas galaxias enanas como las Nubes de Magallanes, proporcionando laboratorio para estudiar evolución e interacciones galácticas.",
          de: "Die Lokale Gruppe ist eine gravitativ gebundene Sammlung von Galaxien, die sich über ~10 Millionen Lichtjahre erstreckt und von der Milchstraße und Andromeda (M31) dominiert wird. Sie umfasst die Triangulum-Galaxie (M33) und viele Zwerggalaxien wie die Magellanschen Wolken, was ein Labor für das Studium der Galaxienentwicklung und -wechselwirkungen bietet.",
          nl: "De Lokale Groep is een gravitationeel gebonden verzameling van sterrenstelsels die ~10 miljoen lichtjaren beslaat, gedomineerd door de Melkweg en Andromeda (M31) sterrenstelsels. Het bevat het Triangulum Sterrenstelsel (M33) en veel dwerg sterrenstelsels zoals de Magellaanse Wolken, een laboratorium biedend voor het bestuderen van galactische evolutie en interacties."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/astrophysics', level1);
  }
})();
