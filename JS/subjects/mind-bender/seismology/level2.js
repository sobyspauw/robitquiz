(function() {
  const level2 = {
  name: { 
    en: 'Earthquake Waves & Basic Measurement', 
    es: 'Ondas Sísmicas y Medición Básica', 
    de: 'Erdbebenwellen & Grundlegende Messung', 
    nl: 'Aardbevingsgolven & Basismeting' 
  },
  questions: [
    {
      question: {
        en: "Which type of seismic wave has the highest velocity and arrives first at recording stations?",
        es: "¿Qué tipo de onda sísmica tiene la mayor velocidad y llega primero a las estaciones de registro?",
        de: "Welcher Typ von seismischen Wellen hat die höchste Geschwindigkeit und kommt zuerst an den Aufzeichnungsstationen an?",
        nl: "Welk type seismische golf heeft de hoogste snelheid en komt als eerste aan bij opnamestations?"
      },
      options: [
        { en: "Primary waves (P-waves)", es: "Ondas primarias (ondas P)", de: "Primärwellen (P-Wellen)", nl: "Primaire golven (P-golven)" },
        { en: "Secondary waves (S-waves)", es: "Ondas secundarias (ondas S)", de: "Sekundärwellen (S-Wellen)", nl: "Secundaire golven (S-golven)" },
        { en: "Love waves", es: "Ondas Love", de: "Love-Wellen", nl: "Love golven" },
        { en: "Rayleigh waves", es: "Ondas Rayleigh", de: "Rayleigh-Wellen", nl: "Rayleigh golven" }
      ],
      correct: 0,
      explanation: {
        en: "P-waves (primary waves) are compressional waves that travel fastest through the Earth's interior, typically at 6-8 km/s in the crust, making them the first to be detected by seismographs.",
        es: "Las ondas P (ondas primarias) son ondas de compresión que viajan más rápido a través del interior de la Tierra, típicamente a 6-8 km/s en la corteza, siendo las primeras detectadas por los sismógrafos.",
        de: "P-Wellen (Primärwellen) sind Kompressionswellen, die am schnellsten durch das Erdinnere reisen, typischerweise mit 6-8 km/s in der Kruste, und sind daher die ersten, die von Seismographen erfasst werden.",
        nl: "P-golven (primaire golven) zijn compressiegolven die het snelst door het binnenste van de aarde reizen, typisch 6-8 km/s in de korst, waardoor ze als eerste door seismografen gedetecteerd worden."
      }
    },
    {
      question: {
        en: "What fundamental difference distinguishes S-waves from P-waves in terms of particle motion?",
        es: "¿Qué diferencia fundamental distingue las ondas S de las ondas P en términos del movimiento de partículas?",
        de: "Was ist der grundlegende Unterschied zwischen S-Wellen und P-Wellen in Bezug auf die Partikelbewegung?",
        nl: "Wat is het fundamentele verschil tussen S-golven en P-golven qua deeltjesbeweging?"
      },
      options: [
        { en: "S-waves cause perpendicular motion, P-waves cause parallel motion", es: "Ondas S causan movimiento perpendicular, ondas P causan movimiento paralelo", de: "S-Wellen verursachen senkrechte Bewegung, P-Wellen verursachen parallele Bewegung", nl: "S-golven veroorzaken loodrechte beweging, P-golven veroorzaken parallelle beweging" },
        { en: "S-waves are faster than P-waves", es: "Ondas S son más rápidas que ondas P", de: "S-Wellen sind schneller als P-Wellen", nl: "S-golven zijn sneller dan P-golven" },
        { en: "S-waves travel through liquids, P-waves don't", es: "Ondas S viajan por líquidos, ondas P no", de: "S-Wellen reisen durch Flüssigkeiten, P-Wellen nicht", nl: "S-golven reizen door vloeistoffen, P-golven niet" },
        { en: "S-waves have higher frequency than P-waves", es: "Ondas S tienen mayor frecuencia que ondas P", de: "S-Wellen haben höhere Frequenz als P-Wellen", nl: "S-golven hebben hogere frequentie dan P-golven" }
      ],
      correct: 0,
      explanation: {
        en: "S-waves (shear waves) cause particle motion perpendicular to wave propagation direction, while P-waves (compressional waves) cause particle motion parallel to the direction of wave travel.",
        es: "Las ondas S (ondas de corte) causan movimiento de partículas perpendicular a la dirección de propagación de la onda, mientras las ondas P (ondas de compresión) causan movimiento de partículas paralelo a la dirección de viaje de la onda.",
        de: "S-Wellen (Scherwellen) verursachen Partikelbewegung senkrecht zur Wellenausbreitungsrichtung, während P-Wellen (Kompressionswellen) Partikelbewegung parallel zur Wellenrichtung verursachen.",
        nl: "S-golven (schuifgolven) veroorzaken deeltjesbeweging loodrecht op de golfvoortplantingsrichting, terwijl P-golven (compressiegolven) deeltjesbeweging parallel aan de golfrichting veroorzaken."
      }
    },
    {
      question: {
        en: "Why can't S-waves propagate through the Earth's outer core?",
        es: "¿Por qué las ondas S no pueden propagarse a través del núcleo externo de la Tierra?",
        de: "Warum können sich S-Wellen nicht durch den äußeren Erdkern ausbreiten?",
        nl: "Waarom kunnen S-golven zich niet voortplanten door de buitenste kern van de aarde?"
      },
      options: [
        { en: "The outer core is liquid and cannot transmit shear waves", es: "El núcleo externo es líquido y no puede transmitir ondas de corte", de: "Der äußere Kern ist flüssig und kann keine Scherwellen übertragen", nl: "De buitenste kern is vloeibaar en kan geen schuifgolven overbrengen" },
        { en: "The temperature is too high", es: "La temperatura es demasiado alta", de: "Die Temperatur ist zu hoch", nl: "De temperatuur is te hoog" },
        { en: "The pressure is too low", es: "La presión es demasiado baja", de: "Der Druck ist zu niedrig", nl: "De druk is te laag" },
        { en: "The density changes too rapidly", es: "La densidad cambia demasiado rápido", de: "Die Dichte ändert sich zu schnell", nl: "De dichtheid verandert te snel" }
      ],
      correct: 0,
      explanation: {
        en: "S-waves are shear waves that require a solid medium to propagate. The Earth's outer core is liquid iron-nickel, which cannot support shear stress, thus blocking S-wave transmission.",
        es: "Las ondas S son ondas de corte que requieren un medio sólido para propagarse. El núcleo externo de la Tierra es hierro-níquel líquido, que no puede soportar esfuerzo cortante, bloqueando así la transmisión de ondas S.",
        de: "S-Wellen sind Scherwellen, die ein festes Medium zur Ausbreitung benötigen. Der äußere Erdkern besteht aus flüssigem Eisen-Nickel, das keine Scherspannung tragen kann und daher S-Wellen blockiert.",
        nl: "S-golven zijn schuifgolven die een vast medium nodig hebben om zich voort te planten. De buitenste kern van de aarde is vloeibaar ijzer-nikkel, dat geen schuifspanning kan ondersteunen, waardoor S-golf transmissie wordt geblokkeerd."
      }
    },
    {
      question: {
        en: "What is the main purpose of using multiple seismograph stations to locate an earthquake epicenter?",
        es: "¿Cuál es el propósito principal de usar múltiples estaciones de sismógrafo para localizar el epicentro de un terremoto?",
        de: "Was ist der Hauptzweck der Verwendung mehrerer Seismographenstationen zur Lokalisierung eines Erdbebenzentrums?",
        nl: "Wat is het hoofddoel van het gebruiken van meerdere seismograafstations om een aardbeving epicentrum te lokaliseren?"
      },
      options: [
        { en: "Triangulation to determine precise location", es: "Triangulación para determinar ubicación precisa", de: "Triangulation zur Bestimmung der genauen Position", nl: "Triangulatie om precieze locatie te bepalen" },
        { en: "Amplify weak signals", es: "Amplificar señales débiles", de: "Schwache Signale verstärken", nl: "Zwakke signalen versterken" },
        { en: "Reduce electromagnetic interference", es: "Reducir interferencia electromagnética", de: "Elektromagnetische Störungen reduzieren", nl: "Elektromagnetische interferentie verminderen" },
        { en: "Measure earthquake intensity only", es: "Solo medir intensidad del terremoto", de: "Nur Erdbebenstärke messen", nl: "Alleen aardbevingsintensiteit meten" }
      ],
      correct: 0,
      explanation: {
        en: "Using P-wave and S-wave arrival time differences from at least three stations allows scientists to triangulate and pinpoint the exact location of an earthquake's epicenter through geometric intersection of circles.",
        es: "Usar las diferencias de tiempo de llegada de ondas P y S de al menos tres estaciones permite a los científicos triangular y localizar exactamente la ubicación del epicentro de un terremoto a través de la intersección geométrica de círculos.",
        de: "Die Verwendung der P- und S-Wellen-Ankunftszeitunterschiede von mindestens drei Stationen ermöglicht es Wissenschaftlern, durch geometrische Schnittpunkte von Kreisen den genauen Ort eines Erdbebenzentrums zu triangulieren.",
        nl: "Het gebruik van P-golf en S-golf aankomsttijdverschillen van ten minste drie stations stelt wetenschappers in staat om door geometrische kruising van cirkels de exacte locatie van een aardbeving epicentrum te trianguleren."
      }
    },
    {
      question: {
        en: "What does the P-S interval (time difference between P and S wave arrivals) directly indicate?",
        es: "¿Qué indica directamente el intervalo P-S (diferencia de tiempo entre llegadas de ondas P y S)?",
        de: "Was zeigt das P-S-Intervall (Zeitunterschied zwischen P- und S-Wellen-Ankunft) direkt an?",
        nl: "Wat geeft het P-S interval (tijdsverschil tussen P- en S-golf aankomsten) direct aan?"
      },
      options: [
        { en: "Distance from epicenter to recording station", es: "Distancia del epicentro a la estación de registro", de: "Entfernung vom Epizentrum zur Aufzeichnungsstation", nl: "Afstand van epicentrum tot opnamestation" },
        { en: "Earthquake magnitude", es: "Magnitud del terremoto", de: "Erdbebenstärke", nl: "Aardbevingsmagnitude" },
        { en: "Depth of earthquake focus", es: "Profundidad del foco del terremoto", de: "Tiefe des Erdbebenherdes", nl: "Diepte van aardbevingsfocus" },
        { en: "Duration of earthquake", es: "Duración del terremoto", de: "Dauer des Erdbebens", nl: "Duur van aardbeving" }
      ],
      correct: 0,
      explanation: {
        en: "The P-S interval is proportional to the distance traveled - the farther the earthquake, the greater the time difference between faster P-waves and slower S-waves arriving at the station.",
        es: "El intervalo P-S es proporcional a la distancia viajada - mientras más lejos el terremoto, mayor la diferencia de tiempo entre las ondas P más rápidas y las ondas S más lentas llegando a la estación.",
        de: "Das P-S-Intervall ist proportional zur zurückgelegten Entfernung - je weiter das Erdbeben, desto größer die Zeitdifferenz zwischen den schnelleren P-Wellen und langsameren S-Wellen an der Station.",
        nl: "Het P-S interval is evenredig aan de afgelegde afstand - hoe verder de aardbeving, hoe groter het tijdsverschil tussen snellere P-golven en langzamere S-golven die aankomen bij het station."
      }
    },
    {
      question: {
        en: "Which type of surface wave causes the most damage during large earthquakes?",
        es: "¿Qué tipo de onda superficial causa el mayor daño durante terremotos grandes?",
        de: "Welche Art von Oberflächenwelle verursacht bei großen Erdbeben den meisten Schaden?",
        nl: "Welk type oppervlaktegolf veroorzaakt de meeste schade tijdens grote aardbevingen?"
      },
      options: [
        { en: "Rayleigh waves", es: "Ondas Rayleigh", de: "Rayleigh-Wellen", nl: "Rayleigh golven" },
        { en: "Love waves", es: "Ondas Love", de: "Love-Wellen", nl: "Love golven" },
        { en: "P-waves", es: "Ondas P", de: "P-Wellen", nl: "P-golven" },
        { en: "S-waves", es: "Ondas S", de: "S-Wellen", nl: "S-golven" }
      ],
      correct: 0,
      explanation: {
        en: "Rayleigh waves cause both vertical and horizontal ground motion in an elliptical pattern, creating rolling motions that are particularly destructive to buildings and infrastructure.",
        es: "Las ondas Rayleigh causan movimiento del suelo tanto vertical como horizontal en un patrón elíptico, creando movimientos ondulantes que son particularmente destructivos para edificios e infraestructura.",
        de: "Rayleigh-Wellen verursachen sowohl vertikale als auch horizontale Bodenbewegungen in einem elliptischen Muster und erzeugen rollende Bewegungen, die besonders zerstörerisch für Gebäude und Infrastruktur sind.",
        nl: "Rayleigh golven veroorzaken zowel verticale als horizontale grondbeweging in een elliptisch patroon, wat rollende bewegingen creëert die bijzonder destructief zijn voor gebouwen en infrastructuur."
      }
    },
    {
      question: {
        en: "What is the primary difference between earthquake magnitude and intensity?",
        es: "¿Cuál es la diferencia principal entre magnitud e intensidad de terremotos?",
        de: "Was ist der Hauptunterschied zwischen Erdbebenstärke und -intensität?",
        nl: "Wat is het primaire verschil tussen aardbevingsmagnitude en intensiteit?"
      },
      options: [
        { en: "Magnitude measures energy released, intensity measures effects observed", es: "Magnitud mide energía liberada, intensidad mide efectos observados", de: "Magnitude misst freigesetzte Energie, Intensität misst beobachtete Auswirkungen", nl: "Magnitude meet vrijgekomen energie, intensiteit meet waargenomen effecten" },
        { en: "They are the same measurement", es: "Son la misma medición", de: "Sie sind dieselbe Messung", nl: "Ze zijn dezelfde meting" },
        { en: "Magnitude is subjective, intensity is objective", es: "Magnitud es subjetiva, intensidad es objetiva", de: "Magnitude ist subjektiv, Intensität ist objektiv", nl: "Magnitude is subjectief, intensiteit is objectief" },
        { en: "Intensity measures depth, magnitude measures surface effects", es: "Intensidad mide profundidad, magnitud mide efectos superficiales", de: "Intensität misst Tiefe, Magnitude misst Oberflächeneffekte", nl: "Intensiteit meet diepte, magnitude meet oppervlakte-effecten" }
      ],
      correct: 0,
      explanation: {
        en: "Magnitude is an objective measure of the total energy released by an earthquake, while intensity describes the subjective effects and damage observed at specific locations.",
        es: "La magnitud es una medida objetiva de la energía total liberada por un terremoto, mientras la intensidad describe los efectos subjetivos y daño observado en ubicaciones específicas.",
        de: "Die Magnitude ist ein objektives Maß der gesamten von einem Erdbeben freigesetzten Energie, während die Intensität die subjektiven Auswirkungen und Schäden an bestimmten Orten beschreibt.",
        nl: "Magnitude is een objectieve meting van de totale energie vrijgekomen door een aardbeving, terwijl intensiteit de subjectieve effecten en schade beschrijft die waargenomen wordt op specifieke locaties."
      }
    },
    {
      question: {
        en: "What causes the characteristic exponential decay pattern in seismogram amplitudes?",
        es: "¿Qué causa el patrón característico de decaimiento exponencial en las amplitudes del sismograma?",
        de: "Was verursacht das charakteristische exponentielle Abklingmuster in Seismogramm-Amplituden?",
        nl: "Wat veroorzaakt het karakteristieke exponentiële vervalspatroon in seismogram amplitudes?"
      },
      options: [
        { en: "Attenuation due to energy absorption and scattering", es: "Atenuación debido a absorción y dispersión de energía", de: "Dämpfung durch Energieabsorption und Streuung", nl: "Verzwakking door energieabsorptie en verstrooiing" },
        { en: "Instrument calibration errors", es: "Errores de calibración del instrumento", de: "Instrumentkalibrierungsfehler", nl: "Instrumentcalibratiefouten" },
        { en: "Earth's rotation effects", es: "Efectos de rotación de la Tierra", de: "Erdrotationseffekte", nl: "Aardrotatie-effecten" },
        { en: "Magnetic field variations", es: "Variaciones del campo magnético", de: "Magnetfeldvariationen", nl: "Magnetische veld variaties" }
      ],
      correct: 0,
      explanation: {
        en: "As seismic waves travel through Earth materials, they lose energy through attenuation processes including intrinsic absorption (anelasticity) and scattering from heterogeneities, causing amplitude decay.",
        es: "Cuando las ondas sísmicas viajan por materiales terrestres, pierden energía a través de procesos de atenuación incluyendo absorción intrínseca (anelasticidad) y dispersión por heterogeneidades, causando decaimiento de amplitud.",
        de: "Wenn seismische Wellen durch Erdmaterialien reisen, verlieren sie Energie durch Dämpfungsprozesse einschließlich intrinsischer Absorption (Anelastizität) und Streuung von Heterogenitäten, was Amplitudenabfall verursacht.",
        nl: "Wanneer seismische golven door aardmaterialen reizen, verliezen ze energie door verzwakkingsprocessen inclusief intrinsieke absorptie (anelasticiteit) en verstrooiing van heterogeniteiten, wat amplitudeverval veroorzaakt."
      }
    },
    {
      question: {
        en: "What is the purpose of the Wood-Anderson seismograph in earthquake measurement?",
        es: "¿Cuál es el propósito del sismógrafo Wood-Anderson en la medición de terremotos?",
        de: "Was ist der Zweck des Wood-Anderson-Seismographs bei der Erdbebenmessung?",
        nl: "Wat is het doel van de Wood-Anderson seismograaf in aardbevingsmeting?"
      },
      options: [
        { en: "Standard instrument for calculating Richter magnitude", es: "Instrumento estándar para calcular magnitud de Richter", de: "Standardinstrument zur Berechnung der Richter-Magnitude", nl: "Standaard instrument voor het berekenen van Richter magnitude" },
        { en: "Measuring only vertical ground motion", es: "Medir solo movimiento vertical del suelo", de: "Nur vertikale Bodenbewegung messen", nl: "Alleen verticale grondbeweging meten" },
        { en: "Detecting only surface waves", es: "Detectar solo ondas superficiales", de: "Nur Oberflächenwellen erkennen", nl: "Alleen oppervlaktegolven detecteren" },
        { en: "Recording earthquake duration", es: "Registrar duración del terremoto", de: "Erdbebendauer aufzeichnen", nl: "Aardbevingsduur registreren" }
      ],
      correct: 0,
      explanation: {
        en: "The Wood-Anderson seismograph was the standardized instrument used by Charles Richter to define the Richter magnitude scale, with specific amplification characteristics for consistent measurements.",
        es: "El sismógrafo Wood-Anderson fue el instrumento estandarizado usado por Charles Richter para definir la escala de magnitud de Richter, con características específicas de amplificación para mediciones consistentes.",
        de: "Der Wood-Anderson-Seismograph war das standardisierte Instrument, das Charles Richter zur Definition der Richter-Magnitudenskala verwendete, mit spezifischen Verstärkungsmerkmalen für konsistente Messungen.",
        nl: "De Wood-Anderson seismograaf was het gestandaardiseerde instrument gebruikt door Charles Richter om de Richter magnitudeschaal te definiëren, met specifieke versterkingskarakteristieken voor consistente metingen."
      }
    },
    {
      question: {
        en: "Why do seismic waves change velocity when traveling through different rock types?",
        es: "¿Por qué las ondas sísmicas cambian velocidad al viajar por diferentes tipos de roca?",
        de: "Warum ändern seismische Wellen ihre Geschwindigkeit beim Durchqueren verschiedener Gesteinstypen?",
        nl: "Waarom veranderen seismische golven van snelheid bij het reizen door verschillende gesteentetypes?"
      },
      options: [
        { en: "Different elastic properties and densities of materials", es: "Diferentes propiedades elásticas y densidades de materiales", de: "Unterschiedliche elastische Eigenschaften und Dichten der Materialien", nl: "Verschillende elastische eigenschappen en dichtheden van materialen" },
        { en: "Temperature changes only", es: "Solo cambios de temperatura", de: "Nur Temperaturänderungen", nl: "Alleen temperatuurveranderingen" },
        { en: "Magnetic field interactions", es: "Interacciones del campo magnético", de: "Magnetfeldwechselwirkungen", nl: "Magnetische veld interacties" },
        { en: "Gravitational variations", es: "Variaciones gravitacionales", de: "Gravitationsschwankungen", nl: "Gravitatievariaties" }
      ],
      correct: 0,
      explanation: {
        en: "Seismic wave velocity depends on the elastic moduli (rigidity, bulk modulus) and density of materials according to the relationship v = √(K/ρ), where different rocks have varying physical properties.",
        es: "La velocidad de ondas sísmicas depende de los módulos elásticos (rigidez, módulo de volumen) y densidad de materiales según la relación v = √(K/ρ), donde diferentes rocas tienen propiedades físicas variadas.",
        de: "Die Geschwindigkeit seismischer Wellen hängt von den elastischen Modulen (Steifigkeit, Kompressionsmodul) und der Dichte der Materialien gemäß der Beziehung v = √(K/ρ) ab, wobei verschiedene Gesteine unterschiedliche physikalische Eigenschaften haben.",
        nl: "Seismische golfsnelheid hangt af van de elastische moduli (stijfheid, bulk modulus) en dichtheid van materialen volgens de relatie v = √(K/ρ), waarbij verschillende gesteenten variërende fysische eigenschappen hebben."
      }
    },
    {
      question: {
        en: "What phenomenon occurs when seismic waves encounter a boundary between materials of different velocities?",
        es: "¿Qué fenómeno ocurre cuando las ondas sísmicas encuentran un límite entre materiales de diferentes velocidades?",
        de: "Welches Phänomen tritt auf, wenn seismische Wellen auf eine Grenze zwischen Materialien unterschiedlicher Geschwindigkeiten treffen?",
        nl: "Welk fenomeen treedt op wanneer seismische golven een grens tegenkomen tussen materialen van verschillende snelheden?"
      },
      options: [
        { en: "Refraction and reflection according to Snell's law", es: "Refracción y reflexión según ley de Snell", de: "Brechung und Reflexion nach Snells Gesetz", nl: "Breking en reflectie volgens de wet van Snell" },
        { en: "Complete absorption of wave energy", es: "Absorción completa de energía de onda", de: "Vollständige Absorption der Wellenenergie", nl: "Volledige absorptie van golfenergie" },
        { en: "Wave amplification only", es: "Solo amplificación de ondas", de: "Nur Wellenverstärkung", nl: "Alleen golfversterking" },
        { en: "Frequency change without direction change", es: "Cambio de frecuencia sin cambio de dirección", de: "Frequenzänderung ohne Richtungsänderung", nl: "Frequentieverandering zonder richtingsverandering" }
      ],
      correct: 0,
      explanation: {
        en: "At velocity boundaries, seismic waves split into reflected and refracted components, with ray paths governed by Snell's law based on the velocity contrast between materials.",
        es: "En límites de velocidad, las ondas sísmicas se dividen en componentes reflejadas y refractadas, con trayectorias de rayos gobernadas por la ley de Snell basada en el contraste de velocidad entre materiales.",
        de: "An Geschwindigkeitsgrenzen spalten sich seismische Wellen in reflektierte und gebrochene Komponenten auf, wobei die Strahlenwege nach Snells Gesetz basierend auf dem Geschwindigkeitskontrast zwischen Materialien bestimmt werden.",
        nl: "Bij snelheidsgrenzen splitsen seismische golven zich in gereflecteerde en gebroken componenten, met straalpaden bepaald door de wet van Snell gebaseerd op het snelheidscontrast tussen materialen."
      }
    },
    {
      question: {
        en: "What is the characteristic frequency range of most earthquake-generated seismic waves?",
        es: "¿Cuál es el rango de frecuencia característico de la mayoría de ondas sísmicas generadas por terremotos?",
        de: "Was ist der charakteristische Frequenzbereich der meisten durch Erdbeben erzeugten seismischen Wellen?",
        nl: "Wat is het karakteristieke frequentiebereik van de meeste door aardbevingen gegenereerde seismische golven?"
      },
      options: [
        { en: "0.1 to 20 Hz", es: "0.1 a 20 Hz", de: "0,1 bis 20 Hz", nl: "0,1 tot 20 Hz" },
        { en: "100 to 1000 Hz", es: "100 a 1000 Hz", de: "100 bis 1000 Hz", nl: "100 tot 1000 Hz" },
        { en: "20 to 100 kHz", es: "20 a 100 kHz", de: "20 bis 100 kHz", nl: "20 tot 100 kHz" },
        { en: "1 to 10 MHz", es: "1 a 10 MHz", de: "1 bis 10 MHz", nl: "1 tot 10 MHz" }
      ],
      correct: 0,
      explanation: {
        en: "Most earthquake-generated seismic waves fall within the 0.1 to 20 Hz range, with larger earthquakes producing more energy at lower frequencies and smaller ones at higher frequencies.",
        es: "La mayoría de ondas sísmicas generadas por terremotos caen dentro del rango de 0.1 a 20 Hz, con terremotos más grandes produciendo más energía a frecuencias bajas y menores a frecuencias altas.",
        de: "Die meisten durch Erdbeben erzeugten seismischen Wellen liegen im Bereich von 0,1 bis 20 Hz, wobei größere Erdbeben mehr Energie bei niedrigeren Frequenzen und kleinere bei höheren Frequenzen produzieren.",
        nl: "De meeste door aardbevingen gegenereerde seismische golven vallen binnen het 0,1 tot 20 Hz bereik, waarbij grotere aardbevingen meer energie produceren bij lagere frequenties en kleinere bij hogere frequenties."
      }
    },
    {
      question: {
        en: "What is the main advantage of digital seismographs over analog instruments?",
        es: "¿Cuál es la principal ventaja de los sismógrafos digitales sobre los instrumentos analógicos?",
        de: "Was ist der Hauptvorteil digitaler Seismographen gegenüber analogen Instrumenten?",
        nl: "Wat is het hoofdvoordeel van digitale seismografen ten opzichte van analoge instrumenten?"
      },
      options: [
        { en: "Greater dynamic range and precise timing", es: "Mayor rango dinámico y cronometraje preciso", de: "Größerer Dynamikbereich und präzise Zeitbestimmung", nl: "Groter dynamisch bereik en nauwkeurige tijdmeting" },
        { en: "Lower cost only", es: "Solo menor costo", de: "Nur niedrigere Kosten", nl: "Alleen lagere kosten" },
        { en: "Smaller size only", es: "Solo tamaño más pequeño", de: "Nur kleinere Größe", nl: "Alleen kleinere grootte" },
        { en: "No electrical power required", es: "No requiere energía eléctrica", de: "Keine elektrische Energie erforderlich", nl: "Geen elektrische stroom vereist" }
      ],
      correct: 0,
      explanation: {
        en: "Digital seismographs can record a much wider range of amplitudes without saturation and provide GPS-synchronized timing accuracy essential for precise earthquake location and analysis.",
        es: "Los sismógrafos digitales pueden registrar un rango mucho más amplio de amplitudes sin saturación y proporcionan precisión temporal sincronizada por GPS esencial para ubicación y análisis preciso de terremotos.",
        de: "Digitale Seismographen können einen viel breiteren Amplitudenbereich ohne Sättigung aufzeichnen und bieten GPS-synchronisierte Zeitgenauigkeit, die für präzise Erdbebenortung und -analyse wesentlich ist.",
        nl: "Digitale seismografen kunnen een veel breder bereik van amplitudes opnemen zonder verzadiging en bieden GPS-gesynchroniseerde tijdnauwkeurigheid die essentieel is voor precieze aardbevinglocalisatie en analyse."
      }
    },
    {
      question: {
        en: "What type of ground motion sensor is most commonly used in modern broadband seismometers?",
        es: "¿Qué tipo de sensor de movimiento del suelo se usa más comúnmente en sismómetros de banda ancha modernos?",
        de: "Welche Art von Bodenbewegungssensor wird am häufigsten in modernen Breitband-Seismometern verwendet?",
        nl: "Welk type grondbeweging sensor wordt het meest gebruikt in moderne breedband seismometers?"
      },
      options: [
        { en: "Feedback-controlled inertial sensors", es: "Sensores inerciales controlados por retroalimentación", de: "Rückkopplungsgesteuerte Inertialsensoren", nl: "Terugkoppeling-gecontroleerde traagheidsensoren" },
        { en: "Simple pendulum mechanisms", es: "Mecanismos de péndulo simple", de: "Einfache Pendelmechanismen", nl: "Eenvoudige slingermechanismen" },
        { en: "Magnetic compass systems", es: "Sistemas de brújula magnética", de: "Magnetkompasssysteme", nl: "Magnetische kompas systemen" },
        { en: "Strain gauge arrays", es: "Matrices de galgas extensométricas", de: "Dehnungsmessstreifen-Arrays", nl: "Rekstrookje arrays" }
      ],
      correct: 0,
      explanation: {
        en: "Modern broadband seismometers use feedback-controlled inertial sensors that electronically maintain a test mass in equilibrium, providing linear response across a wide frequency range.",
        es: "Los sismómetros de banda ancha modernos usan sensores inerciales controlados por retroalimentación que mantienen electrónicamente una masa de prueba en equilibrio, proporcionando respuesta lineal en un amplio rango de frecuencias.",
        de: "Moderne Breitband-Seismometer verwenden rückkopplungsgesteuerte Inertialsensoren, die eine Testmasse elektronisch im Gleichgewicht halten und eine lineare Antwort über einen breiten Frequenzbereich bieten.",
        nl: "Moderne breedband seismometers gebruiken terugkoppeling-gecontroleerde traagheidsensoren die een testmassa elektronisch in evenwicht houden, wat lineaire respons over een breed frequentiebereik biedt."
      }
    },
    {
      question: {
        en: "What causes the distinct 'coda' waves observed on seismograms after the main P, S, and surface waves?",
        es: "¿Qué causa las ondas 'coda' distintivas observadas en sismogramas después de las ondas principales P, S y superficiales?",
        de: "Was verursacht die charakteristischen 'Coda'-Wellen, die auf Seismogrammen nach den Haupt-P-, S- und Oberflächenwellen beobachtet werden?",
        nl: "Wat veroorzaakt de onderscheidende 'coda' golven waargenomen op seismogrammen na de hoofd P-, S-, en oppervlaktegolven?"
      },
      options: [
        { en: "Scattering from small-scale heterogeneities in Earth's crust", es: "Dispersión por heterogeneidades de pequeña escala en la corteza terrestre", de: "Streuung von kleinskaligen Heterogenitäten in der Erdkruste", nl: "Verstrooiing van kleinschalige heterogeniteiten in de aardkorst" },
        { en: "Instrument noise", es: "Ruido del instrumento", de: "Instrumentenrauschen", nl: "Instrumentruis" },
        { en: "Earth's rotation effects", es: "Efectos de rotación terrestre", de: "Erdrotationseffekte", nl: "Aardrotatie-effecten" },
        { en: "Atmospheric pressure variations", es: "Variaciones de presión atmosférica", de: "Atmosphärendruckschwankungen", nl: "Atmosferische drukvariaties" }
      ],
      correct: 0,
      explanation: {
        en: "Coda waves result from scattering of seismic energy by small-scale heterogeneities, fractures, and structural irregularities throughout the Earth's crust, creating a complex trailing wavefield.",
        es: "Las ondas coda resultan de la dispersión de energía sísmica por heterogeneidades de pequeña escala, fracturas e irregularidades estructurales en toda la corteza terrestre, creando un campo de ondas de cola complejo.",
        de: "Coda-Wellen entstehen durch Streuung seismischer Energie an kleinskaligen Heterogenitäten, Brüchen und strukturellen Unregelmäßigkeiten in der gesamten Erdkruste, wodurch ein komplexes nachlaufendes Wellenfeld entsteht.",
        nl: "Coda golven ontstaan door verstrooiing van seismische energie door kleinschalige heterogeniteiten, breuken en structurele onregelmatigheden door de aardkorst, wat een complex naslepend golfveld creëert."
      }
    },
    {
      question: {
        en: "What is the primary cause of seismic wave dispersion?",
        es: "¿Cuál es la causa primaria de la dispersión de ondas sísmicas?",
        de: "Was ist die Hauptursache für die Dispersion seismischer Wellen?",
        nl: "Wat is de primaire oorzaak van seismische golf dispersie?"
      },
      options: [
        { en: "Frequency-dependent velocity variations", es: "Variaciones de velocidad dependientes de frecuencia", de: "Frequenzabhängige Geschwindigkeitsvariationen", nl: "Frequentie-afhankelijke snelheidsvariaties" },
        { en: "Constant velocity in all materials", es: "Velocidad constante en todos los materiales", de: "Konstante Geschwindigkeit in allen Materialien", nl: "Constante snelheid in alle materialen" },
        { en: "Temperature effects only", es: "Solo efectos de temperatura", de: "Nur Temperatureffekte", nl: "Alleen temperatuureffecten" },
        { en: "Gravitational field variations", es: "Variaciones del campo gravitacional", de: "Gravitationsfeldvariationen", nl: "Gravitatieveld variaties" }
      ],
      correct: 0,
      explanation: {
        en: "Dispersion occurs because different frequency components of seismic waves travel at different velocities through layered or attenuating media, causing wave packet spreading and shape changes.",
        es: "La dispersión ocurre porque diferentes componentes de frecuencia de ondas sísmicas viajan a diferentes velocidades a través de medios estratificados o atenuantes, causando expansión de paquetes de ondas y cambios de forma.",
        de: "Dispersion tritt auf, weil verschiedene Frequenzkomponenten seismischer Wellen mit unterschiedlichen Geschwindigkeiten durch geschichtete oder dämpfende Medien reisen, was Wellenpaket-Ausbreitung und Formänderungen verursacht.",
        nl: "Dispersie treedt op omdat verschillende frequentiecomponenten van seismische golven met verschillende snelheden reizen door gelaagde of verzwakkende media, wat golfpakket spreiding en vormveranderingen veroorzaakt."
      }
    },
    {
      question: {
        en: "What information can be derived from the analysis of seismic wave polarization?",
        es: "¿Qué información se puede derivar del análisis de polarización de ondas sísmicas?",
        de: "Welche Informationen können aus der Analyse der seismischen Wellenpolarisation abgeleitet werden?",
        nl: "Welke informatie kan worden afgeleid uit de analyse van seismische golf polarisatie?"
      },
      options: [
        { en: "Wave type identification and propagation direction", es: "Identificación de tipo de onda y dirección de propagación", de: "Wellentyp-Identifikation und Ausbreitungsrichtung", nl: "Golftype identificatie en voortplantingsrichting" },
        { en: "Only earthquake magnitude", es: "Solo magnitud del terremoto", de: "Nur Erdbebenstärke", nl: "Alleen aardbevingsmagnitude" },
        { en: "Only recording station location", es: "Solo ubicación de estación de registro", de: "Nur Aufzeichnungsstation-Standort", nl: "Alleen opnamestation locatie" },
        { en: "Only instrument response", es: "Solo respuesta del instrumento", de: "Nur Instrumentenantwort", nl: "Alleen instrument respons" }
      ],
      correct: 0,
      explanation: {
        en: "Polarization analysis reveals the particle motion characteristics that distinguish P-waves (longitudinal) from S-waves (transverse) and can determine the direction of wave approach and source mechanisms.",
        es: "El análisis de polarización revela las características de movimiento de partículas que distinguen ondas P (longitudinales) de ondas S (transversales) y puede determinar la dirección de aproximación de ondas y mecanismos de fuente.",
        de: "Die Polarisationsanalyse zeigt die Partikelbewegungsmerkmale, die P-Wellen (longitudinal) von S-Wellen (transversal) unterscheiden und kann die Wellenannäherungsrichtung und Quellmechanismen bestimmen.",
        nl: "Polarisatie analyse onthult de deeltjesbeweging karakteristieken die P-golven (longitudinaal) onderscheiden van S-golven (transversaal) en kan de richting van golfnadering en bronmechanismen bepalen."
      }
    },
    {
      question: {
        en: "What is the typical sampling rate used in modern digital seismographs for earthquake monitoring?",
        es: "¿Cuál es la tasa de muestreo típica usada en sismógrafos digitales modernos para monitoreo de terremotos?",
        de: "Was ist die typische Abtastrate, die in modernen digitalen Seismographen für Erdbebenüberwachung verwendet wird?",
        nl: "Wat is de typische bemonsteringssnelheid gebruikt in moderne digitale seismografen voor aardbevingsmonitoring?"
      },
      options: [
        { en: "40 to 100 samples per second", es: "40 a 100 muestras por segundo", de: "40 bis 100 Proben pro Sekunde", nl: "40 tot 100 monsters per seconde" },
        { en: "1 sample per second", es: "1 muestra por segundo", de: "1 Probe pro Sekunde", nl: "1 monster per seconde" },
        { en: "1000 samples per second", es: "1000 muestras por segundo", de: "1000 Proben pro Sekunde", nl: "1000 monsters per seconde" },
        { en: "10,000 samples per second", es: "10,000 muestras por segundo", de: "10.000 Proben pro Sekunde", nl: "10.000 monsters per seconde" }
      ],
      correct: 0,
      explanation: {
        en: "Modern seismographs typically use 40-100 Hz sampling rates to adequately capture earthquake frequencies up to 20 Hz while avoiding aliasing, following Nyquist sampling theorem requirements.",
        es: "Los sismógrafos modernos típicamente usan tasas de muestreo de 40-100 Hz para capturar adecuadamente frecuencias de terremotos hasta 20 Hz mientras evitan aliasing, siguiendo requisitos del teorema de muestreo de Nyquist.",
        de: "Moderne Seismographen verwenden typischerweise 40-100 Hz Abtastraten, um Erdbebenfrequenzen bis 20 Hz angemessen zu erfassen und dabei Aliasing zu vermeiden, gemäß den Anforderungen des Nyquist-Abtasttheorems.",
        nl: "Moderne seismografen gebruiken typisch 40-100 Hz bemonsteringssnelheden om aardbevingsfrequenties tot 20 Hz adequaat vast te leggen terwijl aliasing wordt vermeden, volgens Nyquist bemonsteringstheorema vereisten."
      }
    },
    {
      question: {
        en: "What is the primary purpose of applying frequency filtering to seismic data?",
        es: "¿Cuál es el propósito principal de aplicar filtrado de frecuencia a datos sísmicos?",
        de: "Was ist der Hauptzweck der Anwendung von Frequenzfilterung auf seismische Daten?",
        nl: "Wat is het primaire doel van het toepassen van frequentiefiltering op seismische gegevens?"
      },
      options: [
        { en: "Remove noise and enhance signal-to-noise ratio", es: "Remover ruido y mejorar relación señal-ruido", de: "Rauschen entfernen und Signal-Rausch-Verhältnis verbessern", nl: "Ruis verwijderen en signaal-ruis verhouding verbeteren" },
        { en: "Change earthquake magnitude", es: "Cambiar magnitud del terremoto", de: "Erdbebenstärke ändern", nl: "Aardbevingsmagnitude veranderen" },
        { en: "Modify wave velocities", es: "Modificar velocidades de ondas", de: "Wellengeschwindigkeiten modifizieren", nl: "Golfsnelheden wijzigen" },
        { en: "Increase data storage capacity", es: "Aumentar capacidad de almacenamiento de datos", de: "Datenspeicherkapazität erhöhen", nl: "Gegevensopslagcapaciteit verhogen" }
      ],
      correct: 0,
      explanation: {
        en: "Frequency filtering removes unwanted noise (microseisms, cultural noise, instrument noise) while preserving earthquake signals in specific frequency bands, improving analysis quality and signal clarity.",
        es: "El filtrado de frecuencia remueve ruido no deseado (microsismos, ruido cultural, ruido de instrumento) mientras preserva señales de terremotos en bandas de frecuencia específicas, mejorando calidad de análisis y claridad de señal.",
        de: "Frequenzfilterung entfernt unerwünschtes Rauschen (Mikroseismik, kulturelles Rauschen, Instrumentenrauschen) und bewahrt dabei Erdbebensignale in bestimmten Frequenzbändern, was Analysequalität und Signalklarheit verbessert.",
        nl: "Frequentiefiltering verwijdert ongewenste ruis (microseismiek, culturele ruis, instrumentruis) terwijl aardbevingssignalen in specifieke frequentiebanden behouden blijven, wat analysekwaliteit en signaalhelderheid verbetert."
      }
    },
    {
      question: {
        en: "What causes the splitting of S-waves into two perpendicular components in anisotropic media?",
        es: "¿Qué causa la división de ondas S en dos componentes perpendiculares en medios anisotrópicos?",
        de: "Was verursacht die Aufspaltung von S-Wellen in zwei senkrechte Komponenten in anisotropen Medien?",
        nl: "Wat veroorzaakt de splitsing van S-golven in twee loodrechte componenten in anisotrope media?"
      },
      options: [
        { en: "Directional variations in elastic properties", es: "Variaciones direccionales en propiedades elásticas", de: "Richtungsabhängige Variationen der elastischen Eigenschaften", nl: "Richtingsafhankelijke variaties in elastische eigenschappen" },
        { en: "Temperature gradients only", es: "Solo gradientes de temperatura", de: "Nur Temperaturgradienten", nl: "Alleen temperatuurgradiënten" },
        { en: "Pressure variations only", es: "Solo variaciones de presión", de: "Nur Druckvariationen", nl: "Alleen drukvariaties" },
        { en: "Magnetic field effects", es: "Efectos del campo magnético", de: "Magnetfeldeffekte", nl: "Magnetische veld effecten" }
      ],
      correct: 0,
      explanation: {
        en: "In anisotropic media with directionally-dependent elastic properties (often due to aligned fractures or mineral orientation), S-waves split into fast and slow components polarized in perpendicular directions.",
        es: "En medios anisotrópicos con propiedades elásticas direccionalmente dependientes (frecuentemente debido a fracturas alineadas u orientación mineral), las ondas S se dividen en componentes rápidos y lentos polarizados en direcciones perpendiculares.",
        de: "In anisotropen Medien mit richtungsabhängigen elastischen Eigenschaften (oft aufgrund ausgerichteter Brüche oder Mineralorientierung) spalten sich S-Wellen in schnelle und langsame Komponenten auf, die in senkrechten Richtungen polarisiert sind.",
        nl: "In anisotrope media met richtingsafhankelijke elastische eigenschappen (vaak door uitgelijnde breuken of mineraal oriëntatie), splitsen S-golven in snelle en langzame componenten gepolariseerd in loodrechte richtingen."
      }
    },
    {
      question: {
        en: "What is the relationship between seismic wave amplitude and earthquake energy release?",
        es: "¿Cuál es la relación entre la amplitud de ondas sísmicas y la liberación de energía del terremoto?",
        de: "Wie ist die Beziehung zwischen seismischer Wellenamplitude und Erdbebenergiefreisetzung?",
        nl: "Wat is de relatie tussen seismische golf amplitude en aardbevings energie vrijgave?"
      },
      options: [
        { en: "Amplitude is proportional to the square root of energy", es: "La amplitud es proporcional a la raíz cuadrada de la energía", de: "Amplitude ist proportional zur Quadratwurzel der Energie", nl: "Amplitude is evenredig aan de vierkantswortel van energie" },
        { en: "Amplitude equals energy directly", es: "La amplitud iguala la energía directamente", de: "Amplitude entspricht direkt der Energie", nl: "Amplitude is gelijk aan energie direct" },
        { en: "Amplitude is inversely proportional to energy", es: "La amplitud es inversamente proporcional a la energía", de: "Amplitude ist umgekehrt proportional zur Energie", nl: "Amplitude is omgekeerd evenredig aan energie" },
        { en: "No relationship exists between amplitude and energy", es: "No existe relación entre amplitud y energía", de: "Keine Beziehung zwischen Amplitude und Energie", nl: "Geen relatie bestaat tussen amplitude en energie" }
      ],
      correct: 0,
      explanation: {
        en: "Seismic wave amplitude is proportional to the square root of the energy released by the earthquake source, which forms the theoretical basis for logarithmic magnitude scales.",
        es: "La amplitud de ondas sísmicas es proporcional a la raíz cuadrada de la energía liberada por la fuente del terremoto, lo que forma la base teórica para escalas de magnitud logarítmicas.",
        de: "Die seismische Wellenamplitude ist proportional zur Quadratwurzel der von der Erdbebenquelle freigesetzten Energie, was die theoretische Grundlage für logarithmische Magnitudenskalen bildet.",
        nl: "Seismische golf amplitude is evenredig aan de vierkantswortel van de energie vrijgegeven door de aardbevingsbron, wat de theoretische basis vormt voor logaritmische magnitudeschalen."
      }
    },
    {
      question: {
        en: "What causes the characteristic 'shadow zone' for direct P-waves between 103° and 142° from the earthquake epicenter?",
        es: "¿Qué causa la 'zona de sombra' característica para ondas P directas entre 103° y 142° del epicentro del terremoto?",
        de: "Was verursacht die charakteristische 'Schattenzone' für direkte P-Wellen zwischen 103° und 142° vom Erdbebenzentrum?",
        nl: "Wat veroorzaakt de karakteristieke 'schaduwzone' voor directe P-golven tussen 103° en 142° van het aardbevings epicentrum?"
      },
      options: [
        { en: "Refraction at the core-mantle boundary reduces P-wave velocity", es: "Refracción en el límite núcleo-manto reduce velocidad de ondas P", de: "Brechung an der Kern-Mantel-Grenze reduziert P-Wellen-Geschwindigkeit", nl: "Breking aan de kern-mantel grens vermindert P-golf snelheid" },
        { en: "Complete absorption of waves in the mantle", es: "Absorción completa de ondas en el manto", de: "Vollständige Absorption von Wellen im Mantel", nl: "Volledige absorptie van golven in de mantel" },
        { en: "Instrument detection limitations", es: "Limitaciones de detección de instrumentos", de: "Instrumenten-Detektionsgrenzen", nl: "Instrument detectie beperkingen" },
        { en: "Magnetic field interference", es: "Interferencia del campo magnético", de: "Magnetfeldstörungen", nl: "Magnetische veld interferentie" }
      ],
      correct: 0,
      explanation: {
        en: "The P-wave shadow zone occurs because the liquid outer core has a much lower P-wave velocity than the solid mantle, causing strong refraction that bends waves away from the 103°-142° angular distance range on Earth's surface.",
        es: "La zona de sombra de ondas P ocurre porque el núcleo externo líquido tiene velocidad de ondas P mucho menor que el manto sólido, causando refracción fuerte que desvía ondas del rango de distancia angular 103°-142° en la superficie terrestre.",
        de: "Die P-Wellen-Schattenzone entsteht, weil der flüssige äußere Kern eine viel niedrigere P-Wellen-Geschwindigkeit als der feste Mantel hat, was starke Brechung verursacht, die Wellen vom 103°-142° Winkelentfernungsbereich an der Erdoberfläche wegbiegt.",
        nl: "De P-golf schaduwzone treedt op omdat de vloeibare buitenste kern veel lagere P-golf snelheid heeft dan de vaste mantel, wat sterke breking veroorzaakt die golven wegbuigt van het 103°-142° hoekafstand bereik op het aardoppervlak."
      }
    },
    {
      question: {
        en: "What is the primary purpose of applying moveout corrections in seismic data processing?",
        es: "¿Cuál es el propósito principal de aplicar correcciones de moveout en procesamiento de datos sísmicos?",
        de: "Was ist der Hauptzweck der Anwendung von Moveout-Korrekturen in der seismischen Datenverarbeitung?",
        nl: "Wat is het primaire doel van het toepassen van moveout correcties in seismische data verwerking?"
      },
      options: [
        { en: "Compensate for different travel paths to align wave arrivals", es: "Compensar diferentes trayectorias de viaje para alinear llegadas de ondas", de: "Verschiedene Laufzeitwege kompensieren, um Wellenankünfte auszurichten", nl: "Compenseren voor verschillende reispaden om golf aankomsten uit te lijnen" },
        { en: "Remove instrument response", es: "Remover respuesta del instrumento", de: "Instrumentenantwort entfernen", nl: "Instrument respons verwijderen" },
        { en: "Increase signal amplitude", es: "Aumentar amplitud de señal", de: "Signalamplitude erhöhen", nl: "Signaal amplitude verhogen" },
        { en: "Convert analog to digital", es: "Convertir analógico a digital", de: "Analog in digital umwandeln", nl: "Analoog naar digitaal converteren" }
      ],
      correct: 0,
      explanation: {
        en: "Moveout corrections account for the different travel distances from earthquake source to various recording stations, aligning the arrival times to enable proper phase identification and stacking for improved signal-to-noise ratio.",
        es: "Las correcciones de moveout consideran las diferentes distancias de viaje desde la fuente del terremoto a varias estaciones de registro, alineando los tiempos de llegada para permitir identificación apropiada de fases y apilamiento para mejorar relación señal-ruido.",
        de: "Moveout-Korrekturen berücksichtigen die unterschiedlichen Laufstrecken von der Erdbebenquelle zu verschiedenen Aufzeichnungsstationen und richten die Ankunftszeiten aus, um ordnungsgemäße Phasenidentifikation und Stapelverarbeitung für verbessertes Signal-Rausch-Verhältnis zu ermöglichen.",
        nl: "Moveout correcties compenseren voor de verschillende reisafstanden van aardbevingsbron naar verschillende opnamestations, de aankomsttijden uitlijnend om juiste fase identificatie en stapeling mogelijk te maken voor verbeterde signaal-ruis verhouding."
      }
    },
    {
      question: {
        en: "What fundamental principle governs seismic wave ray-path geometry in layered Earth models?",
        es: "¿Qué principio fundamental gobierna la geometría de trayectoria de rayos de ondas sísmicas en modelos terrestres estratificados?",
        de: "Welches grundlegende Prinzip bestimmt die Strahlweggeometrie seismischer Wellen in geschichteten Erdmodellen?",
        nl: "Welk fundamentele principe bepaalt seismische golf straalbaan geometrie in gelaagde aarde modellen?"
      },
      options: [
        { en: "Snell's law of refraction", es: "Ley de refracción de Snell", de: "Snells Brechungsgesetz", nl: "Snell's wet van breking" },
        { en: "Newton's law of gravitation", es: "Ley de gravitación de Newton", de: "Newtons Gravitationsgesetz", nl: "Newton's gravitatiewet" },
        { en: "Faraday's law of induction", es: "Ley de inducción de Faraday", de: "Faradays Induktionsgesetz", nl: "Faraday's inductiewet" },
        { en: "Coulomb's law of electrostatics", es: "Ley de electrostática de Coulomb", de: "Coulombs Elektrostatikgesetz", nl: "Coulomb's elektrostatische wet" }
      ],
      correct: 0,
      explanation: {
        en: "Snell's law governs seismic ray paths by relating the sine of the incident angle to the sine of the refraction angle through velocity ratios, determining how waves bend when crossing velocity boundaries in layered Earth models.",
        es: "La ley de Snell gobierna las trayectorias de rayos sísmicos relacionando el seno del ángulo incidente con el seno del ángulo de refracción a través de razones de velocidad, determinando cómo se doblan las ondas al cruzar límites de velocidad en modelos terrestres estratificados.",
        de: "Snells Gesetz bestimmt seismische Strahlenwege, indem es den Sinus des Einfallswinkels mit dem Sinus des Brechungswinkels durch Geschwindigkeitsverhältnisse in Beziehung setzt und bestimmt, wie sich Wellen beim Überqueren von Geschwindigkeitsgrenzen in geschichteten Erdmodellen biegen.",
        nl: "Snell's wet bepaalt seismische straalpaden door de sinus van de invalshoek te relateren aan de sinus van de brekingshoek door snelheidsverhoudingen, bepalend hoe golven buigen bij het kruisen van snelheidsgrenzen in gelaagde aarde modellen."
      }
    },
    {
      question: {
        en: "What causes seismic wave amplitude variations with distance (geometric spreading)?",
        es: "¿Qué causa variaciones de amplitud de ondas sísmicas con la distancia (expansión geométrica)?",
        de: "Was verursacht seismische Wellenamplitudenvariationen mit der Entfernung (geometrische Ausbreitung)?",
        nl: "Wat veroorzaakt seismische golf amplitude variaties met afstand (geometrische spreiding)?"
      },
      options: [
        { en: "Energy conservation over expanding wavefront area", es: "Conservación de energía sobre área expansiva de frente de onda", de: "Energieerhaltung über sich ausdehnende Wellenfrontfläche", nl: "Energie behoud over uitdijende golffront gebied" },
        { en: "Instrument sensitivity changes", es: "Cambios de sensibilidad del instrumento", de: "Instrumentensensitivitätsänderungen", nl: "Instrument gevoeligheidsveranderingen" },
        { en: "Magnetic field variations", es: "Variaciones del campo magnético", de: "Magnetfeldvariationen", nl: "Magnetische veld variaties" },
        { en: "Atmospheric pressure effects", es: "Efectos de presión atmosférica", de: "Atmosphärendruckeffekte", nl: "Atmosferische druk effecten" }
      ],
      correct: 0,
      explanation: {
        en: "Geometric spreading causes amplitude decay because seismic energy is conserved while distributed over an increasingly large wavefront area as distance increases, following 1/r² for body waves and 1/r for surface waves.",
        es: "La expansión geométrica causa decaimiento de amplitud porque la energía sísmica se conserva mientras se distribuye sobre un área de frente de onda cada vez más grande al aumentar la distancia, siguiendo 1/r² para ondas de cuerpo y 1/r para ondas superficiales.",
        de: "Geometrische Ausbreitung verursacht Amplitudenabfall, weil seismische Energie erhalten bleibt, aber über eine zunehmend große Wellenfrontfläche mit steigender Entfernung verteilt wird, wobei 1/r² für Volumenwellen und 1/r für Oberflächenwellen gilt.",
        nl: "Geometrische spreiding veroorzaakt amplitude verval omdat seismische energie behouden blijft terwijl het verdeeld wordt over een steeds groter golffront gebied naarmate afstand toeneemt, volgend 1/r² voor lichaamsgolven en 1/r voor oppervlaktegolven."
      }
    },
    {
      question: {
        en: "What is the key difference between local magnitude (ML) and moment magnitude (Mw) scales?",
        es: "¿Cuál es la diferencia clave entre escalas de magnitud local (ML) y magnitud de momento (Mw)?",
        de: "Was ist der Hauptunterschied zwischen lokaler Magnitude (ML) und Momentmagnitude (Mw) Skalen?",
        nl: "Wat is het belangrijkste verschil tussen lokale magnitude (ML) en moment magnitude (Mw) schalen?"
      },
      options: [
        { en: "ML uses amplitude measurements, Mw uses seismic moment from fault mechanics", es: "ML usa mediciones de amplitud, Mw usa momento sísmico de mecánica de fallas", de: "ML verwendet Amplitudenmessungen, Mw verwendet seismisches Moment aus Verwerfungsmechanik", nl: "ML gebruikt amplitude metingen, Mw gebruikt seismisch moment van breuk mechanica" },
        { en: "ML is for large earthquakes, Mw for small ones", es: "ML es para terremotos grandes, Mw para pequeños", de: "ML ist für große Erdbeben, Mw für kleine", nl: "ML is voor grote aardbevingen, Mw voor kleine" },
        { en: "ML measures intensity, Mw measures magnitude", es: "ML mide intensidad, Mw mide magnitud", de: "ML misst Intensität, Mw misst Magnitude", nl: "ML meet intensiteit, Mw meet magnitude" },
        { en: "They are identical scales with different names", es: "Son escalas idénticas con nombres diferentes", de: "Sie sind identische Skalen mit verschiedenen Namen", nl: "Het zijn identieke schalen met verschillende namen" }
      ],
      correct: 0,
      explanation: {
        en: "Local magnitude (ML) is based on maximum seismograph amplitude readings, while moment magnitude (Mw) is calculated from seismic moment, which represents the physical size and displacement of fault rupture, making Mw more accurate for large earthquakes.",
        es: "La magnitud local (ML) se basa en lecturas de amplitud máxima del sismógrafo, mientras la magnitud de momento (Mw) se calcula del momento sísmico, que representa el tamaño físico y desplazamiento de ruptura de falla, haciendo Mw más precisa para terremotos grandes.",
        de: "Lokale Magnitude (ML) basiert auf maximalen Seismographamplitudenmessungen, während Momentmagnitude (Mw) aus dem seismischen Moment berechnet wird, das die physische Größe und Verschiebung des Verwerfungsbruchs darstellt, wodurch Mw für große Erdbeben genauer ist.",
        nl: "Lokale magnitude (ML) is gebaseerd op maximale seismograaf amplitude metingen, terwijl moment magnitude (Mw) berekend wordt uit seismisch moment, dat de fysieke grootte en verplaatsing van breuk ruptuur vertegenwoordigt, waardoor Mw nauwkeuriger is voor grote aardbevingen."
      }
    },
    {
      question: {
        en: "What is the typical frequency content that distinguishes microseismic noise from earthquake signals?",
        es: "¿Cuál es el contenido de frecuencia típico que distingue el ruido microsísmico de señales de terremotos?",
        de: "Was ist der typische Frequenzinhalt, der mikroseismisches Rauschen von Erdbebensignalen unterscheidet?",
        nl: "Wat is de typische frequentie-inhoud die microseismische ruis onderscheidt van aardbevingssignalen?"
      },
      options: [
        { en: "Microseisms: 0.05-0.5 Hz, earthquakes: 0.1-20 Hz with overlap", es: "Microsismos: 0.05-0.5 Hz, terremotos: 0.1-20 Hz con superposición", de: "Mikroseismik: 0,05-0,5 Hz, Erdbeben: 0,1-20 Hz mit Überlappung", nl: "Microseismiek: 0,05-0,5 Hz, aardbevingen: 0,1-20 Hz met overlap" },
        { en: "Microseisms are always higher frequency than earthquakes", es: "Los microsismos siempre tienen frecuencia más alta que terremotos", de: "Mikroseismik hat immer höhere Frequenz als Erdbeben", nl: "Microseismiek heeft altijd hogere frequentie dan aardbevingen" },
        { en: "No frequency difference exists", es: "No existe diferencia de frecuencia", de: "Kein Frequenzunterschied vorhanden", nl: "Geen frequentieverschil bestaat" },
        { en: "Microseisms occur only above 100 Hz", es: "Los microsismos ocurren solo arriba de 100 Hz", de: "Mikroseismik tritt nur über 100 Hz auf", nl: "Microseismiek treedt alleen op boven 100 Hz" }
      ],
      correct: 0,
      explanation: {
        en: "Microseismic noise, primarily generated by ocean waves interacting with coastlines, typically occurs in the 0.05-0.5 Hz band, while earthquake signals span 0.1-20 Hz, requiring careful filtering to separate natural tectonic events from background ocean noise.",
        es: "El ruido microsísmico, generado principalmente por ondas oceánicas interactuando con costas, típicamente ocurre en la banda 0.05-0.5 Hz, mientras señales de terremotos abarcan 0.1-20 Hz, requiriendo filtrado cuidadoso para separar eventos tectónicos naturales del ruido oceánico de fondo.",
        de: "Mikroseismisches Rauschen, hauptsächlich durch Ozeanwellen erzeugt, die mit Küstenlinien interagieren, tritt typischerweise im 0,05-0,5 Hz Band auf, während Erdbebensignale 0,1-20 Hz umfassen, was sorgfältige Filterung erfordert, um natürliche tektonische Ereignisse von ozeanischem Hintergrundrauschen zu trennen.",
        nl: "Microseismische ruis, voornamelijk gegenereerd door oceaangolven die interacteren met kustlijnen, treedt typisch op in de 0,05-0,5 Hz band, terwijl aardbevingssignalen 0,1-20 Hz beslaan, wat zorgvuldige filtering vereist om natuurlijke tektonische gebeurtenissen te scheiden van oceaan achtergrond ruis."
      }
    },
    {
      question: {
        en: "What is the physical meaning of seismic quality factor (Q) in wave propagation?",
        es: "¿Cuál es el significado físico del factor de calidad sísmico (Q) en propagación de ondas?",
        de: "Was ist die physikalische Bedeutung des seismischen Qualitätsfaktors (Q) in der Wellenausbreitung?",
        nl: "Wat is de fysieke betekenis van seismische kwaliteitsfactor (Q) in golfvoortplanting?"
      },
      options: [
        { en: "Measure of energy loss per cycle due to anelastic attenuation", es: "Medida de pérdida de energía por ciclo debido a atenuación anelástica", de: "Maß für Energieverlust pro Zyklus aufgrund anelastischer Dämpfung", nl: "Maat van energieverlies per cyclus door anelastische verzwakking" },
        { en: "Wave frequency measurement", es: "Medición de frecuencia de onda", de: "Wellenfrequenzmessung", nl: "Golf frequentie meting" },
        { en: "Seismometer sensitivity rating", es: "Calificación de sensibilidad del sismómetro", de: "Seismometer-Empfindlichkeitsbewertung", nl: "Seismometer gevoeligheids waardering" },
        { en: "Distance measurement accuracy", es: "Precisión de medición de distancia", de: "Entfernungsmessgenauigkeit", nl: "Afstand meetnauwkeurigheid" }
      ],
      correct: 0,
      explanation: {
        en: "The quality factor Q quantifies energy dissipation in materials, with higher Q values indicating lower attenuation. Q is inversely related to the energy lost per cycle during wave propagation through anelastic processes like grain boundary friction and crystal defects.",
        es: "El factor de calidad Q cuantifica la disipación de energía en materiales, con valores Q más altos indicando menor atenuación. Q está inversamente relacionado con la energía perdida por ciclo durante propagación de ondas a través de procesos anelásticos como fricción de límites de grano y defectos cristalinos.",
        de: "Der Qualitätsfaktor Q quantifiziert Energiedissipation in Materialien, wobei höhere Q-Werte geringere Dämpfung anzeigen. Q ist umgekehrt mit der pro Zyklus verlorenen Energie während der Wellenausbreitung durch anelastische Prozesse wie Korngrenzreibung und Kristalldefekte verbunden.",
        nl: "De kwaliteitsfactor Q kwantificeert energiedissipatie in materialen, waarbij hogere Q-waarden lagere verzwakking aangeven. Q is omgekeerd gerelateerd aan de energie verloren per cyclus tijdens golfvoortplanting door anelastische processen zoals korrelgrens wrijving en kristal defecten."
      }
    },
    {
      question: {
        en: "What causes the conversion of P-waves to S-waves at velocity discontinuities?",
        es: "¿Qué causa la conversión de ondas P a ondas S en discontinuidades de velocidad?",
        de: "Was verursacht die Umwandlung von P-Wellen in S-Wellen an Geschwindigkeitsdiskontinuitäten?",
        nl: "Wat veroorzaakt de conversie van P-golven naar S-golven bij snelheidsdiscontinuïteiten?"
      },
      options: [
        { en: "Oblique incidence at interfaces with different elastic properties", es: "Incidencia oblicua en interfaces con diferentes propiedades elásticas", de: "Schräger Einfall an Grenzflächen mit unterschiedlichen elastischen Eigenschaften", nl: "Schuine inval bij interfaces met verschillende elastische eigenschappen" },
        { en: "Temperature changes only", es: "Solo cambios de temperatura", de: "Nur Temperaturänderungen", nl: "Alleen temperatuurveranderingen" },
        { en: "Pressure variations only", es: "Solo variaciones de presión", de: "Nur Druckvariationen", nl: "Alleen drukvariaties" },
        { en: "Magnetic field effects", es: "Efectos del campo magnético", de: "Magnetfeldeffekte", nl: "Magnetische veld effecten" }
      ],
      correct: 0,
      explanation: {
        en: "When P-waves hit velocity boundaries at non-normal incidence angles, the boundary conditions require both P and S wave components in the reflected and transmitted wave fields to satisfy stress and displacement continuity, leading to P-to-S conversions.",
        es: "Cuando ondas P golpean límites de velocidad en ángulos de incidencia no normales, las condiciones de límite requieren componentes de ondas P y S en los campos de ondas reflejadas y transmitidas para satisfacer continuidad de esfuerzo y desplazamiento, llevando a conversiones P-a-S.",
        de: "Wenn P-Wellen Geschwindigkeitsgrenzen bei nicht-normalen Einfallswinkeln treffen, erfordern die Randbedingungen sowohl P- als auch S-Wellenkomponenten in den reflektierten und transmittierten Wellenfeldern, um Spannungs- und Verschiebungskontinuität zu erfüllen, was zu P-zu-S-Umwandlungen führt.",
        nl: "Wanneer P-golven snelheidsgrenzen raken bij niet-normale invalshoeken, vereisen de grensvoorwaarden zowel P- als S-golfcomponenten in de gereflecteerde en doorgelaten golfvelden om spanning- en verplaatsing continuïteit te voldoen, leidend tot P-naar-S conversies."
      }
    },
    {
      question: {
        en: "What is the primary advantage of three-component seismometers over single-component instruments?",
        es: "¿Cuál es la principal ventaja de sismómetros de tres componentes sobre instrumentos de un componente?",
        de: "Was ist der Hauptvorteil von Dreikomponenten-Seismometern gegenüber Einkomponenten-Instrumenten?",
        nl: "Wat is het hoofdvoordeel van drie-component seismometers ten opzichte van enkel-component instrumenten?"
      },
      options: [
        { en: "Complete vector motion recording and wave type discrimination", es: "Registro completo de movimiento vectorial y discriminación de tipo de onda", de: "Vollständige Vektorbewegungsaufzeichnung und Wellentypunterscheidung", nl: "Volledige vector beweging opname en golftype discriminatie" },
        { en: "Lower power consumption", es: "Menor consumo de energía", de: "Geringerer Stromverbrauch", nl: "Lager stroomverbruik" },
        { en: "Cheaper manufacturing cost", es: "Costo de fabricación más barato", de: "Günstigere Herstellungskosten", nl: "Goedkopere fabricage kosten" },
        { en: "Smaller physical size", es: "Tamaño físico más pequeño", de: "Kleinere physische Größe", nl: "Kleinere fysieke grootte" }
      ],
      correct: 0,
      explanation: {
        en: "Three-component seismometers record ground motion in all three spatial directions (vertical, north-south, east-west), allowing complete characterization of particle motion, distinction between P and S waves, determination of wave polarization, and back-azimuth calculations.",
        es: "Los sismómetros de tres componentes registran movimiento del suelo en las tres direcciones espaciales (vertical, norte-sur, este-oeste), permitiendo caracterización completa de movimiento de partículas, distinción entre ondas P y S, determinación de polarización de ondas y cálculos de azimut posterior.",
        de: "Dreikomponenten-Seismometer zeichnen Bodenbewegung in allen drei räumlichen Richtungen auf (vertikal, nord-süd, ost-west), was vollständige Charakterisierung der Partikelbewegung, Unterscheidung zwischen P- und S-Wellen, Bestimmung der Wellenpolarisation und Rückrichtungsberechnungen ermöglicht.",
        nl: "Drie-component seismometers registreren grondbeweging in alle drie ruimtelijke richtingen (verticaal, noord-zuid, oost-west), wat volledige karakterisering van deeltjesbeweging mogelijk maakt, onderscheid tussen P- en S-golven, bepaling van golfpolarisatie en terug-azimut berekeningen."
      }
    },
    {
      question: {
        en: "What physical process controls the high-frequency cutoff in earthquake source spectra?",
        es: "¿Qué proceso físico controla el corte de alta frecuencia en espectros de fuente de terremotos?",
        de: "Welcher physikalische Prozess kontrolliert die Hochfrequenz-Abschneidung in Erdbebenquellspektren?",
        nl: "Welk fysieke proces controleert de hoge-frequentie afsnijding in aardbevingsbron spectra?"
      },
      options: [
        { en: "Finite fault rupture dimensions and stress drop characteristics", es: "Dimensiones finitas de ruptura de falla y características de caída de esfuerzo", de: "Endliche Verwerfungsbruchdimensionen und Spannungsabfall-Charakteristika", nl: "Eindige breuk ruptuur afmetingen en spanningsval karakteristieken" },
        { en: "Instrument response limitations", es: "Limitaciones de respuesta de instrumentos", de: "Instrumentenantwortgrenzen", nl: "Instrument respons beperkingen" },
        { en: "Atmospheric attenuation effects", es: "Efectos de atenuación atmosférica", de: "Atmosphärische Dämpfungseffekte", nl: "Atmosferische verzwakking effecten" },
        { en: "Earth's magnetic field interactions", es: "Interacciones del campo magnético terrestre", de: "Wechselwirkungen des Erdmagnetfelds", nl: "Aarde magnetische veld interacties" }
      ],
      correct: 0,
      explanation: {
        en: "The high-frequency rolloff in earthquake source spectra is controlled by the finite dimensions of the fault rupture and stress drop processes. Smaller rupture patches generate higher frequencies, but the finite rupture size creates a natural cutoff frequency related to rupture velocity and fault dimensions.",
        es: "La disminución de alta frecuencia en espectros de fuente de terremotos es controlada por las dimensiones finitas de la ruptura de falla y procesos de caída de esfuerzo. Parches de ruptura más pequeños generan frecuencias más altas, pero el tamaño finito de ruptura crea una frecuencia de corte natural relacionada con velocidad de ruptura y dimensiones de falla.",
        de: "Der Hochfrequenz-Abfall in Erdbebenquellspektren wird durch die endlichen Dimensionen des Verwerfungsbruchs und Spannungsabfall-Prozesse kontrolliert. Kleinere Bruchstellen erzeugen höhere Frequenzen, aber die endliche Bruchgröße schafft eine natürliche Abschneidungsfrequenz, die mit Bruchgeschwindigkeit und Verwerfungsdimensionen zusammenhängt.",
        nl: "De hoge-frequentie afname in aardbevingsbron spectra wordt gecontroleerd door de eindige afmetingen van breuk ruptuur en spanningsval processen. Kleinere ruptuur plekken genereren hogere frequenties, maar de eindige ruptuur grootte creëert een natuurlijke afsnijfrequentie gerelateerd aan ruptuur snelheid en breuk afmetingen."
      }
    },
    {
      question: {
        en: "What causes the characteristic exponential amplitude decay in seismic coda waves?",
        es: "¿Qué causa el decaimiento exponencial característico de amplitud en ondas coda sísmicas?",
        de: "Was verursacht den charakteristischen exponentiellen Amplitudenabfall in seismischen Coda-Wellen?",
        nl: "Wat veroorzaakt het karakteristieke exponentiële amplitude verval in seismische coda golven?"
      },
      options: [
        { en: "Multiple scattering and energy dissipation in heterogeneous crust", es: "Dispersión múltiple y disipación de energía en corteza heterogénea", de: "Mehrfachstreuung und Energiedissipation in heterogener Kruste", nl: "Meervoudige verstrooiing en energie dissipatie in heterogene korst" },
        { en: "Instrument noise increase with time", es: "Aumento de ruido del instrumento con tiempo", de: "Instrumentenrauschzunahme mit der Zeit", nl: "Instrument ruis toename met tijd" },
        { en: "Gravitational effects", es: "Efectos gravitacionales", de: "Gravitationseffekte", nl: "Gravitatie effecten" },
        { en: "Temperature variations", es: "Variaciones de temperatura", de: "Temperaturschwankungen", nl: "Temperatuurvariaties" }
      ],
      correct: 0,
      explanation: {
        en: "Coda wave exponential decay results from energy loss through scattering by small-scale crustal heterogeneities and intrinsic attenuation. The decay rate is characterized by the quality factor Q, providing information about crustal scattering strength and attenuation properties.",
        es: "El decaimiento exponencial de ondas coda resulta de pérdida de energía a través de dispersión por heterogeneidades crustales de pequeña escala y atenuación intrínseca. La tasa de decaimiento se caracteriza por el factor de calidad Q, proporcionando información sobre fuerza de dispersión crustal y propiedades de atenuación.",
        de: "Der exponentielle Abfall von Coda-Wellen resultiert aus Energieverlust durch Streuung an kleinskaligen Krustenheterogenitäten und intrinsischer Dämpfung. Die Abfallrate wird durch den Qualitätsfaktor Q charakterisiert und liefert Informationen über Krustenstreuungsstärke und Dämpfungseigenschaften.",
        nl: "Coda golf exponentieel verval resulteert uit energieverlies door verstrooiing door kleinschalige korst heterogeniteiten en intrinsieke verzwakking. De vervalsnelheid wordt gekarakteriseerd door de kwaliteitsfactor Q, wat informatie biedt over korst verstrooiingssterkte en verzwakking eigenschappen."
      }
    },
    {
      question: {
        en: "What is the fundamental relationship between seismic moment and fault parameters?",
        es: "¿Cuál es la relación fundamental entre momento sísmico y parámetros de falla?",
        de: "Was ist die grundlegende Beziehung zwischen seismischem Moment und Verwerfungsparametern?",
        nl: "Wat is de fundamentele relatie tussen seismisch moment en breuk parameters?"
      },
      options: [
        { en: "M₀ = μ × A × D (rigidity × area × displacement)", es: "M₀ = μ × A × D (rigidez × área × desplazamiento)", de: "M₀ = μ × A × D (Steifigkeit × Fläche × Verschiebung)", nl: "M₀ = μ × A × D (stijfheid × gebied × verplaatsing)" },
        { en: "M₀ = A ÷ D (area divided by displacement)", es: "M₀ = A ÷ D (área dividida por desplazamiento)", de: "M₀ = A ÷ D (Fläche geteilt durch Verschiebung)", nl: "M₀ = A ÷ D (gebied gedeeld door verplaatsing)" },
        { en: "M₀ = μ + A + D (sum of parameters)", es: "M₀ = μ + A + D (suma de parámetros)", de: "M₀ = μ + A + D (Summe der Parameter)", nl: "M₀ = μ + A + D (som van parameters)" },
        { en: "M₀ = D ÷ μ × A (displacement per rigidity-area)", es: "M₀ = D ÷ μ × A (desplazamiento por rigidez-área)", de: "M₀ = D ÷ μ × A (Verschiebung pro Steifigkeit-Fläche)", nl: "M₀ = D ÷ μ × A (verplaatsing per stijfheid-gebied)" }
      ],
      correct: 0,
      explanation: {
        en: "Seismic moment M₀ equals the product of rock rigidity (μ), fault rupture area (A), and average displacement (D). This fundamental relationship connects the physical fault process to seismic wave energy and provides the basis for moment magnitude calculations.",
        es: "El momento sísmico M₀ iguala el producto de rigidez de roca (μ), área de ruptura de falla (A) y desplazamiento promedio (D). Esta relación fundamental conecta el proceso físico de falla con energía de ondas sísmicas y proporciona la base para cálculos de magnitud de momento.",
        de: "Das seismische Moment M₀ entspricht dem Produkt aus Gesteinssteifigkeit (μ), Verwerfungsbruchfläche (A) und durchschnittlicher Verschiebung (D). Diese grundlegende Beziehung verbindet den physischen Verwerfungsprozess mit seismischer Wellenenergie und bildet die Grundlage für Momentmagnitudenberechnungen.",
        nl: "Seismisch moment M₀ is gelijk aan het product van gesteente stijfheid (μ), breuk ruptuur gebied (A), en gemiddelde verplaatsing (D). Deze fundamentele relatie verbindt het fysieke breukproces met seismische golfenergie en biedt de basis voor moment magnitude berekeningen."
      }
    },
    {
      question: {
        en: "What determines the corner frequency in earthquake source displacement spectra?",
        es: "¿Qué determina la frecuencia de esquina en espectros de desplazamiento de fuente de terremotos?",
        de: "Was bestimmt die Eckfrequenz in Erdbebenquell-Verschiebungsspektren?",
        nl: "Wat bepaalt de hoekfrequentie in aardbevingsbron verplaatsing spectra?"
      },
      options: [
        { en: "Fault rupture dimensions and rupture velocity", es: "Dimensiones de ruptura de falla y velocidad de ruptura", de: "Verwerfungsbruchdimensionen und Bruchgeschwindigkeit", nl: "Breuk ruptuur afmetingen en ruptuur snelheid" },
        { en: "Recording distance only", es: "Solo distancia de registro", de: "Nur Aufzeichnungsentfernung", nl: "Alleen opname afstand" },
        { en: "Instrument sensitivity", es: "Sensibilidad del instrumento", de: "Instrumentensensitivität", nl: "Instrument gevoeligheid" },
        { en: "Atmospheric conditions", es: "Condiciones atmosféricas", de: "Atmosphärische Bedingungen", nl: "Atmosferische condities" }
      ],
      correct: 0,
      explanation: {
        en: "The corner frequency fc is inversely proportional to fault rupture duration, which depends on rupture dimensions and rupture velocity. It marks the transition from low-frequency flat spectrum to high-frequency f⁻² decay, providing crucial information about earthquake source size.",
        es: "La frecuencia de esquina fc es inversamente proporcional a la duración de ruptura de falla, que depende de dimensiones de ruptura y velocidad de ruptura. Marca la transición del espectro plano de baja frecuencia al decaimiento f⁻² de alta frecuencia, proporcionando información crucial sobre tamaño de fuente del terremoto.",
        de: "Die Eckfrequenz fc ist umgekehrt proportional zur Verwerfungsbruchdauer, die von Bruchdimensionen und Bruchgeschwindigkeit abhängt. Sie markiert den Übergang vom niedrigfrequenten flachen Spektrum zum hochfrequenten f⁻²-Abfall und liefert entscheidende Informationen über die Erdbebenquellgröße.",
        nl: "De hoekfrequentie fc is omgekeerd evenredig aan breuk ruptuur duur, die afhankelijk is van ruptuur afmetingen en ruptuur snelheid. Het markeert de overgang van laag-frequentie vlak spectrum naar hoog-frequentie f⁻² verval, cruciale informatie biedend over aardbevingsbron grootte."
      }
    },
    {
      question: {
        en: "What causes frequency-dependent polarization changes in teleseismic P-waves?",
        es: "¿Qué causa cambios de polarización dependientes de frecuencia en ondas P telesísmicas?",
        de: "Was verursacht frequenzabhängige Polarisationsänderungen in teleseismischen P-Wellen?",
        nl: "Wat veroorzaakt frequentie-afhankelijke polarisatie veranderingen in teleseismische P-golven?"
      },
      options: [
        { en: "Crustal anisotropy and velocity heterogeneity beneath receiver", es: "Anisotropía crustal y heterogeneidad de velocidad bajo receptor", de: "Krustenanisotropie und Geschwindigkeitsheterogenität unter dem Empfänger", nl: "Korst anisotropie en snelheid heterogeniteit onder ontvanger" },
        { en: "Source radiation pattern only", es: "Solo patrón de radiación de fuente", de: "Nur Quellstrahlungsmuster", nl: "Alleen bron straling patroon" },
        { en: "Instrument response characteristics", es: "Características de respuesta del instrumento", de: "Instrumentenantwort-Charakteristika", nl: "Instrument respons karakteristieken" },
        { en: "Atmospheric refraction", es: "Refracción atmosférica", de: "Atmosphärische Brechung", nl: "Atmosferische breking" }
      ],
      correct: 0,
      explanation: {
        en: "Crustal anisotropy beneath the receiving station causes different frequency components of teleseismic P-waves to be affected differently by local velocity heterogeneities and aligned structures, resulting in frequency-dependent polarization that can be used to study crustal properties.",
        es: "La anisotropía crustal bajo la estación receptora causa que diferentes componentes de frecuencia de ondas P telesísmicas sean afectadas diferentemente por heterogeneidades de velocidad local y estructuras alineadas, resultando en polarización dependiente de frecuencia que puede usarse para estudiar propiedades crustales.",
        de: "Krustenanisotropie unter der Empfangsstation bewirkt, dass verschiedene Frequenzkomponenten teleseismischer P-Wellen unterschiedlich von lokalen Geschwindigkeitsheterogenitäten und ausgerichteten Strukturen beeinflusst werden, was frequenzabhängige Polarisation zur Folge hat, die zur Untersuchung von Krusteneigenschaften verwendet werden kann.",
        nl: "Korst anisotropie onder het ontvangststation veroorzaakt dat verschillende frequentie componenten van teleseismische P-golven verschillend beïnvloed worden door lokale snelheid heterogeniteiten en uitgelijnde structuren, resulterend in frequentie-afhankelijke polarisatie die gebruikt kan worden om korst eigenschappen te bestuderen."
      }
    },
    {
      question: {
        en: "What is the significance of seismic wave impedance contrasts in subsurface imaging?",
        es: "¿Cuál es la importancia de contrastes de impedancia de ondas sísmicas en imágenes del subsuelo?",
        de: "Was ist die Bedeutung seismischer Wellenimpedanzkontraste in der Untergrunddarstellung?",
        nl: "Wat is de betekenis van seismische golf impedantie contrasten in ondergrondse beeldvorming?"
      },
      options: [
        { en: "Control reflection coefficients and interface detectability", es: "Controlan coeficientes de reflexión y detectabilidad de interfaces", de: "Kontrollieren Reflexionskoeffizienten und Grenzflächenerkennbarkeit", nl: "Controleren reflectie coëfficiënten en interface detecteerbaarheid" },
        { en: "Determine earthquake magnitude only", es: "Solo determinan magnitud del terremoto", de: "Bestimmen nur Erdbebenstärke", nl: "Bepalen alleen aardbevings magnitude" },
        { en: "Affect instrument sensitivity", es: "Afectan sensibilidad del instrumento", de: "Beeinflussen Instrumentensensitivität", nl: "Beïnvloeden instrument gevoeligheid" },
        { en: "Control atmospheric noise", es: "Controlan ruido atmosférico", de: "Kontrollieren atmosphärisches Rauschen", nl: "Controleren atmosferische ruis" }
      ],
      correct: 0,
      explanation: {
        en: "Seismic impedance (velocity × density) contrasts determine reflection coefficients at subsurface boundaries. Large impedance contrasts produce strong reflections that are easily detected, while gradual changes create weak reflections, directly controlling the effectiveness of seismic imaging methods.",
        es: "Los contrastes de impedancia sísmica (velocidad × densidad) determinan coeficientes de reflexión en límites del subsuelo. Contrastes grandes de impedancia producen reflexiones fuertes fácilmente detectadas, mientras cambios graduales crean reflexiones débiles, controlando directamente la efectividad de métodos de imágenes sísmicas.",
        de: "Seismische Impedanz-(Geschwindigkeit × Dichte)-Kontraste bestimmen Reflexionskoeffizienten an Untergrundgrenzen. Große Impedanzkontraste erzeugen starke Reflexionen, die leicht erkannt werden, während graduelle Änderungen schwache Reflexionen erzeugen und direkt die Wirksamkeit seismischer Bildgebungsverfahren kontrollieren.",
        nl: "Seismische impedantie (snelheid × dichtheid) contrasten bepalen reflectie coëfficiënten bij ondergrond grenzen. Grote impedantie contrasten produceren sterke reflecties die gemakkelijk gedetecteerd worden, terwijl geleidelijke veranderingen zwakke reflecties creëren, direct de effectiviteit van seismische beeldvormings methoden controlerend."
      }
    },
    {
      question: {
        en: "What information can be extracted from seismic wave arrival time residuals?",
        es: "¿Qué información se puede extraer de residuos de tiempo de llegada de ondas sísmicas?",
        de: "Welche Informationen können aus seismischen Wellenankunftszeitresiduen extrahiert werden?",
        nl: "Welke informatie kan worden geëxtraheerd uit seismische golf aankomst tijd residuen?"
      },
      options: [
        { en: "Velocity structure deviations from reference Earth models", es: "Desviaciones de estructura de velocidad de modelos terrestres de referencia", de: "Geschwindigkeitsstrukturabweichungen von Referenz-Erdmodellen", nl: "Snelheids structuur afwijkingen van referentie aarde modellen" },
        { en: "Only instrument timing errors", es: "Solo errores de cronometraje del instrumento", de: "Nur Instrumentenzeitfehler", nl: "Alleen instrument tijdmeting fouten" },
        { en: "Weather conditions only", es: "Solo condiciones meteorológicas", de: "Nur Wetterbedingungen", nl: "Alleen weersomstandigheden" },
        { en: "Recording station elevation only", es: "Solo elevación de estación de registro", de: "Nur Aufzeichnungsstation-Höhe", nl: "Alleen opnamestation hoogte" }
      ],
      correct: 0,
      explanation: {
        en: "Travel time residuals represent the difference between observed and predicted arrival times using reference Earth models. These residuals reveal three-dimensional velocity structure variations, including crustal thickness changes, mantle heterogeneities, and local geological structures affecting seismic wave propagation.",
        es: "Los residuos de tiempo de viaje representan la diferencia entre tiempos de llegada observados y predichos usando modelos terrestres de referencia. Estos residuos revelan variaciones tridimensionales de estructura de velocidad, incluyendo cambios de grosor crustal, heterogeneidades del manto y estructuras geológicas locales que afectan propagación de ondas sísmicas.",
        de: "Laufzeitresiduen repräsentieren die Differenz zwischen beobachteten und vorhergesagten Ankunftszeiten unter Verwendung von Referenz-Erdmodellen. Diese Residuen offenbaren dreidimensionale Geschwindigkeitsstrukturvariationen, einschließlich Krustendickenänderungen, Mantelheterogenitäten und lokale geologische Strukturen, die seismische Wellenausbreitung beeinflussen.",
        nl: "Reistijd residuen vertegenwoordigen het verschil tussen waargenomen en voorspelde aankomsttijden met referentie aarde modellen. Deze residuen onthullen driedimensionale snelheids structuur variaties, inclusief korst dikte veranderingen, mantel heterogeniteiten en lokale geologische structuren die seismische golf voortplanting beïnvloeden."
      }
    },
    {
      question: {
        en: "What is the physical basis for the Gutenberg-Richter frequency-magnitude relationship?",
        es: "¿Cuál es la base física para la relación frecuencia-magnitud de Gutenberg-Richter?",
        de: "Was ist die physikalische Grundlage für die Gutenberg-Richter-Häufigkeits-Magnitudenbeziehung?",
        nl: "Wat is de fysieke basis voor de Gutenberg-Richter frequentie-magnitude relatie?"
      },
      options: [
        { en: "Scale-invariant fractal properties of fault systems", es: "Propiedades fractales invariantes de escala de sistemas de fallas", de: "Skalinvariante fraktale Eigenschaften von Verwerfungssystemen", nl: "Schaal-invariante fractaal eigenschappen van breuk systemen" },
        { en: "Instrument detection limits only", es: "Solo límites de detección de instrumentos", de: "Nur Instrumentendetektionsgrenzen", nl: "Alleen instrument detectie grenzen" },
        { en: "Magnetic field variations", es: "Variaciones del campo magnético", de: "Magnetfeldvariationen", nl: "Magnetische veld variaties" },
        { en: "Atmospheric pressure changes", es: "Cambios de presión atmosférica", de: "Atmosphärendruckänderungen", nl: "Atmosferische druk veranderingen" }
      ],
      correct: 0,
      explanation: {
        en: "The Gutenberg-Richter law (log N = a - bM) reflects the self-similar, fractal nature of fault systems where small earthquakes are much more numerous than large ones. The b-value (~1) indicates scale-invariant stress distribution and fracture mechanics operating across multiple scales in the Earth's crust.",
        es: "La ley de Gutenberg-Richter (log N = a - bM) refleja la naturaleza auto-similar y fractal de sistemas de fallas donde terremotos pequeños son mucho más numerosos que grandes. El valor-b (~1) indica distribución invariante de escala de esfuerzo y mecánica de fracturas operando a través de múltiples escalas en la corteza terrestre.",
        de: "Das Gutenberg-Richter-Gesetz (log N = a - bM) spiegelt die selbstähnliche, fraktale Natur von Verwerfungssystemen wider, wo kleine Erdbeben viel zahlreicher sind als große. Der b-Wert (~1) zeigt skalinvariante Spannungsverteilung und Bruchmechanik an, die über mehrere Skalen in der Erdkruste operiert.",
        nl: "De Gutenberg-Richter wet (log N = a - bM) weerspiegelt de zelf-gelijkvormige, fractale aard van breuk systemen waar kleine aardbevingen veel talrijker zijn dan grote. De b-waarde (~1) geeft schaal-invariante spanning verdeling en breuk mechanica aan die opereren over meerdere schalen in de aardkorst."
      }
    },
    {
      question: {
        en: "What determines the bandwidth of seismic signals in earthquake recordings?",
        es: "¿Qué determina el ancho de banda de señales sísmicas en registros de terremotos?",
        de: "Was bestimmt die Bandbreite seismischer Signale in Erdbebenaufzeichnungen?",
        nl: "Wat bepaalt de bandbreedte van seismische signalen in aardbevings opnames?"
      },
      options: [
        { en: "Source process duration, path effects, and site response", es: "Duración de proceso de fuente, efectos de trayectoria y respuesta del sitio", de: "Quellprozessdauer, Pfadeffekte und Standortantwort", nl: "Bron proces duur, pad effecten en locatie respons" },
        { en: "Instrument type only", es: "Solo tipo de instrumento", de: "Nur Instrumententyp", nl: "Alleen instrument type" },
        { en: "Recording distance only", es: "Solo distancia de registro", de: "Nur Aufzeichnungsentfernung", nl: "Alleen opname afstand" },
        { en: "Time of day only", es: "Solo hora del día", de: "Nur Tageszeit", nl: "Alleen tijd van dag" }
      ],
      correct: 0,
      explanation: {
        en: "Seismic signal bandwidth is controlled by three main factors: source duration and stress drop (determining corner frequency), path attenuation effects during wave propagation, and local site response that can amplify or filter specific frequency bands at the recording location.",
        es: "El ancho de banda de señales sísmicas es controlado por tres factores principales: duración de fuente y caída de esfuerzo (determinando frecuencia de esquina), efectos de atenuación de trayectoria durante propagación de ondas, y respuesta local del sitio que puede amplificar o filtrar bandas de frecuencia específicas en la ubicación de registro.",
        de: "Die seismische Signalbandbreite wird durch drei Hauptfaktoren kontrolliert: Quelldauer und Spannungsabfall (bestimmt Eckfrequenz), Pfaddämpfungseffekte während der Wellenausbreitung und lokale Standortantwort, die spezifische Frequenzbänder am Aufzeichnungsort verstärken oder filtern kann.",
        nl: "Seismische signaal bandbreedte wordt gecontroleerd door drie hoofdfactoren: bron duur en spanningsval (bepalend hoekfrequentie), pad verzwakking effecten tijdens golf voortplanting, en lokale locatie respons die specifieke frequentie banden kan versterken of filteren op de opname locatie."
      }
    },
    {
      question: {
        en: "What causes the observed particle motion ellipticity in Rayleigh waves?",
        es: "¿Qué causa la elipticidad observada de movimiento de partículas en ondas Rayleigh?",
        de: "Was verursacht die beobachtete Partikelbewegungselliptizität in Rayleigh-Wellen?",
        nl: "Wat veroorzaakt de waargenomen deeltjes beweging ellipticiteit in Rayleigh golven?"
      },
      options: [
        { en: "Depth-dependent velocity structure creating mode coupling", es: "Estructura de velocidad dependiente de profundidad creando acoplamiento de modos", de: "Tiefenabhängige Geschwindigkeitsstruktur erzeugt Modenkopplung", nl: "Diepte-afhankelijke snelheids structuur die mode koppeling creëert" },
        { en: "Instrument calibration errors", es: "Errores de calibración del instrumento", de: "Instrumentkalibrierungsfehler", nl: "Instrument kalibratie fouten" },
        { en: "Magnetic field interference", es: "Interferencia del campo magnético", de: "Magnetfeldstörungen", nl: "Magnetische veld interferentie" },
        { en: "Atmospheric pressure variations", es: "Variaciones de presión atmosférica", de: "Atmosphärendruckvariationen", nl: "Atmosferische druk variaties" }
      ],
      correct: 0,
      explanation: {
        en: "Rayleigh wave particle motion becomes elliptical rather than circular due to depth-varying velocity structure that couples different propagation modes, causing vertical and horizontal motion components to have different phase velocities and creating the characteristic elliptical polarization pattern.",
        es: "El movimiento de partículas de ondas Rayleigh se vuelve elíptico en lugar de circular debido a estructura de velocidad variable con profundidad que acopla diferentes modos de propagación, causando que componentes de movimiento vertical y horizontal tengan diferentes velocidades de fase y creando el patrón característico de polarización elíptica.",
        de: "Rayleigh-Wellen-Partikelbewegung wird elliptisch statt kreisförmig aufgrund tiefenvariabler Geschwindigkeitsstruktur, die verschiedene Ausbreitungsmoden koppelt, wodurch vertikale und horizontale Bewegungskomponenten unterschiedliche Phasengeschwindigkeiten haben und das charakteristische elliptische Polarisationsmuster erzeugen.",
        nl: "Rayleigh golf deeltjes beweging wordt elliptisch in plaats van cirkelvormig door diepte-variërende snelheids structuur die verschillende voortplantings modes koppelt, veroorzakend dat verticale en horizontale beweging componenten verschillende fase snelheden hebben en het karakteristieke elliptische polarisatie patroon creëren."
      }
    },
    {
      question: {
        en: "What is the significance of seismic phase velocity dispersion in surface wave analysis?",
        es: "¿Cuál es la importancia de la dispersión de velocidad de fase sísmica en análisis de ondas superficiales?",
        de: "Was ist die Bedeutung seismischer Phasengeschwindigkeitsdispersion in der Oberflächenwellenanalyse?",
        nl: "Wat is de betekenis van seismische fase snelheid dispersie in oppervlakte golf analyse?"
      },
      options: [
        { en: "Reveals depth-dependent velocity structure for crustal imaging", es: "Revela estructura de velocidad dependiente de profundidad para imágenes crustales", de: "Enthüllt tiefenabhängige Geschwindigkeitsstruktur für Krustenbildgebung", nl: "Onthult diepte-afhankelijke snelheids structuur voor korst beeldvorming" },
        { en: "Indicates instrument malfunction only", es: "Solo indica mal funcionamiento del instrumento", de: "Zeigt nur Instrumentenfehlfunktion an", nl: "Geeft alleen instrument storing aan" },
        { en: "Measures earthquake magnitude", es: "Mide magnitud del terremoto", de: "Misst Erdbebenstärke", nl: "Meet aardbevings magnitude" },
        { en: "Determines recording azimuth", es: "Determina azimut de registro", de: "Bestimmt Aufzeichnungsazimut", nl: "Bepaalt opname azimut" }
      ],
      correct: 0,
      explanation: {
        en: "Surface wave dispersion occurs because different frequencies sample different depths - longer periods penetrate deeper. By measuring how phase velocity varies with frequency, seismologists can invert for depth-dependent shear velocity structure, making surface waves powerful tools for crustal and upper mantle imaging.",
        es: "La dispersión de ondas superficiales ocurre porque diferentes frecuencias muestrean diferentes profundidades - períodos más largos penetran más profundo. Midiendo cómo varía velocidad de fase con frecuencia, los sismólogos pueden invertir para estructura de velocidad de corte dependiente de profundidad, haciendo ondas superficiales herramientas poderosas para imágenes de corteza y manto superior.",
        de: "Oberflächenwellendispersion tritt auf, weil verschiedene Frequenzen verschiedene Tiefen abtasten - längere Perioden dringen tiefer ein. Durch Messung, wie Phasengeschwindigkeit mit Frequenz variiert, können Seismologen für tiefenabhängige Scherwellengeschwindigkeitsstruktur invertieren, wodurch Oberflächenwellen mächtige Werkzeuge für Krusten- und obere Mantelbildgebung werden.",
        nl: "Oppervlakte golf dispersie treedt op omdat verschillende frequenties verschillende dieptes bemonsteren - langere perioden dringen dieper door. Door te meten hoe fase snelheid varieert met frequentie, kunnen seismologen inverteren voor diepte-afhankelijke schuif snelheids structuur, waardoor oppervlakte golven krachtige gereedschappen worden voor korst en bovenste mantel beeldvorming."
      }
    },
    {
      question: {
        en: "What causes seismic wave focusing and defocusing effects in heterogeneous media?",
        es: "¿Qué causa efectos de enfoque y desenfoque de ondas sísmicas en medios heterogéneos?",
        de: "Was verursacht seismische Wellenfokussierungs- und Defokussierungseffekte in heterogenen Medien?",
        nl: "Wat veroorzaakt seismische golf focus en defocus effecten in heterogene media?"
      },
      options: [
        { en: "Velocity variations bend wave rays, creating constructive or destructive interference patterns", es: "Variaciones de velocidad doblan rayos de onda, creando patrones de interferencia constructiva o destructiva", de: "Geschwindigkeitsvariationen biegen Wellenstrahlen, erzeugen konstruktive oder destruktive Interferenzmuster", nl: "Snelheids variaties buigen golf stralen, creëren constructieve of destructieve interferentie patronen" },
        { en: "Temperature changes only affect wave amplitude", es: "Solo cambios de temperatura afectan amplitud de onda", de: "Temperaturänderungen beeinflussen nur Wellenamplitude", nl: "Temperatuur veranderingen beïnvloeden alleen golf amplitude" },
        { en: "Atmospheric pressure variations control focusing", es: "Variaciones de presión atmosférica controlan enfoque", de: "Atmosphärendruckvariationen steuern Fokussierung", nl: "Atmosferische druk variaties controleren focus" },
        { en: "Instrument sensitivity determines focusing patterns", es: "Sensibilidad del instrumento determina patrones de enfoque", de: "Instrumentenempfindlichkeit bestimmt Fokussierungsmuster", nl: "Instrument gevoeligheid bepaalt focus patronen" }
      ],
      correct: 0,
      explanation: {
        en: "Heterogeneous velocity structures act like lenses for seismic waves. Wave rays bend toward lower velocity regions (Snell's law), creating focusing where rays converge and defocusing where they diverge. This produces amplitude variations independent of source effects, important for amplitude studies and tomographic imaging.",
        es: "Estructuras de velocidad heterogéneas actúan como lentes para ondas sísmicas. Rayos de onda se doblan hacia regiones de menor velocidad (ley de Snell), creando enfoque donde rayos convergen y desenfoque donde divergen. Esto produce variaciones de amplitud independientes de efectos de fuente, importante para estudios de amplitud e imágenes tomográficas.",
        de: "Heterogene Geschwindigkeitsstrukturen wirken wie Linsen für seismische Wellen. Wellenstrahlen biegen sich zu niedrigeren Geschwindigkeitsbereichen (Snellsches Gesetz), erzeugen Fokussierung wo Strahlen konvergieren und Defokussierung wo sie divergieren. Dies produziert Amplitudenvariationen unabhängig von Quelleneffekten, wichtig für Amplitudenstudien und tomographische Bildgebung.",
        nl: "Heterogene snelheids structuren werken als lenzen voor seismische golven. Golf stralen buigen naar lagere snelheids regio's (Snell's wet), creëren focus waar stralen convergeren en defocus waar ze divergeren. Dit produceert amplitude variaties onafhankelijk van bron effecten, belangrijk voor amplitude studies en tomografische beeldvorming."
      }
    },
    {
      question: {
        en: "What are long-period microseisms and their relationship to ocean wave dynamics?",
        es: "¿Qué son los microsismos de período largo y su relación con dinámicas de ondas oceánicas?",
        de: "Was sind langperiodische Mikroseismen und ihre Beziehung zur Ozeanwellendynamik?",
        nl: "Wat zijn lange-periode microseismen en hun relatie tot oceaan golf dynamiek?"
      },
      options: [
        { en: "Continuous seismic signals generated by standing ocean wave interference creating seafloor pressure oscillations", es: "Señales sísmicas continuas generadas por interferencia de ondas oceánicas estacionarias creando oscilaciones de presión del fondo marino", de: "Kontinuierliche seismische Signale erzeugt durch stehende Ozeanwelleninterferenz, die Meeresbodendruckoszillationen erzeugt", nl: "Continue seismische signalen gegenereerd door staande oceaan golf interferentie die zeebodem druk oscillaties creëert" },
        { en: "Short-duration earthquake aftershocks", es: "Réplicas de terremoto de corta duración", de: "Kurzdauer-Erdbeben-Nachbeben", nl: "Korte-duur aardbevings naschokken" },
        { en: "Industrial noise from coastal construction", es: "Ruido industrial de construcción costera", de: "Industrielärm aus Küstenbau", nl: "Industrieel lawaai van kust constructie" },
        { en: "Atmospheric pressure fluctuations only", es: "Solo fluctuaciones de presión atmosférica", de: "Nur atmosphärische Druckschwankungen", nl: "Alleen atmosferische druk fluctuaties" }
      ],
      correct: 0,
      explanation: {
        en: "Long-period microseisms (5-10 second periods) are generated when opposing ocean wave systems create standing wave patterns. These pressure oscillations at twice the ocean wave frequency couple into the seafloor as seismic energy, creating continuous background noise observable worldwide and used to monitor storm systems.",
        es: "Microsismos de período largo (períodos de 5-10 segundos) se generan cuando sistemas de ondas oceánicas opuestas crean patrones de ondas estacionarias. Estas oscilaciones de presión al doble de frecuencia de onda oceánica se acoplan al fondo marino como energía sísmica, creando ruido de fondo continuo observable mundialmente y usado para monitorear sistemas de tormenta.",
        de: "Langperiodische Mikroseismen (5-10 Sekunden Perioden) werden erzeugt, wenn entgegengesetzte Ozeanwellensysteme stehende Wellenmuster erzeugen. Diese Druckoszillationen mit doppelter Ozeanwellenfrequenz koppeln in den Meeresboden als seismische Energie, erzeugen kontinuierliches Hintergrundrauschen weltweit beobachtbar und zur Überwachung von Sturmsystemen verwendet.",
        nl: "Lange-periode microseismen (5-10 seconde perioden) worden gegenereerd wanneer tegengestelde oceaan golf systemen staande golf patronen creëren. Deze druk oscillaties op dubbele oceaan golf frequentie koppelen in de zeebodem als seismische energie, creëren continue achtergrond ruis wereldwijd waarneembaar en gebruikt om storm systemen te monitoren."
      }
    },
    {
      question: {
        en: "How does seismic anisotropic wave propagation reveal crustal stress and structure?",
        es: "¿Cómo revela la propagación de ondas sísmicas anisotrópicas estrés y estructura crustal?",
        de: "Wie enthüllt anisotropische seismische Wellenausbreitung Krustenstress und -struktur?",
        nl: "Hoe onthult anisotropische seismische golf propagatie korstaal stress en structuur?"
      },
      options: [
        { en: "Wave velocities vary with propagation direction due to aligned fractures or stress, revealing structural orientation", es: "Velocidades de onda varían con dirección de propagación debido a fracturas alineadas o estrés, revelando orientación estructural", de: "Wellengeschwindigkeiten variieren mit Ausbreitungsrichtung durch ausgerichtete Brüche oder Stress, enthüllen strukturelle Orientierung", nl: "Golf snelheden variëren met propagatie richting door uitgelijnde breuken of stress, structurele oriëntatie onthullend" },
        { en: "Anisotropy only affects surface wave dispersion", es: "Anisotropía solo afecta dispersión de ondas superficiales", de: "Anisotropie beeinflusst nur Oberflächenwellendispersion", nl: "Anisotropie beïnvloedt alleen oppervlakte golf dispersie" },
        { en: "Wave amplitude decreases uniformly in all directions", es: "Amplitud de onda decrece uniformemente en todas direcciones", de: "Wellenamplitude nimmt gleichmäßig in alle Richtungen ab", nl: "Golf amplitude neemt uniform af in alle richtingen" },
        { en: "Temperature controls all directional velocity variations", es: "Temperatura controla todas variaciones direccionales de velocidad", de: "Temperatur kontrolliert alle direktionalen Geschwindigkeitsvariationen", nl: "Temperatuur controleert alle directionele snelheids variaties" }
      ],
      correct: 0,
      explanation: {
        en: "Seismic anisotropy occurs when rock properties vary with direction, typically due to aligned fractures, stress-induced crack orientation, or mineral fabric. By measuring velocity variations with azimuth and incidence angle, geophysicists can determine principal stress directions, fracture orientations, and structural trends in the crust.",
        es: "Anisotropía sísmica ocurre cuando propiedades de roca varían con dirección, típicamente debido a fracturas alineadas, orientación de grietas inducida por estrés, o fábrica mineral. Midiendo variaciones de velocidad con azimut y ángulo de incidencia, geofísicos pueden determinar direcciones de estrés principal, orientaciones de fractura, y tendencias estructurales en la corteza.",
        de: "Seismische Anisotropie tritt auf, wenn Gesteinsigenschaften mit Richtung variieren, typischerweise durch ausgerichtete Brüche, stressinduzierte Rissausrichtung oder Mineralgefüge. Durch Messung von Geschwindigkeitsvariationen mit Azimut und Einfallswinkel können Geophysiker Hauptstressrichtungen, Bruchorientierungen und strukturelle Trends in der Kruste bestimmen.",
        nl: "Seismische anisotropie treedt op wanneer rots eigenschappen variëren met richting, typisch door uitgelijnde breuken, stress-geïnduceerde scheur oriëntatie, of mineraal weefsel. Door snelheids variaties te meten met azimut en invalshoek, kunnen geofysici hoofdstress richtingen, breuk oriëntaties, en structurele trends in de korst bepalen."
      }
    },
    {
      question: {
        en: "What is the role of earthquake early warning systems in seismic wave utilization?",
        es: "¿Cuál es el papel de sistemas de alerta temprana de terremotos en utilización de ondas sísmicas?",
        de: "Welche Rolle spielen Erdbebenfrühwarnsysteme bei der seismischen Wellennutzung?",
        nl: "Wat is de rol van aardbevings vroege waarschuwings systemen in seismische golf benutting?"
      },
      options: [
        { en: "Detect P-waves to provide seconds of warning before destructive S-waves and surface waves arrive", es: "Detectan ondas P para proporcionar segundos de advertencia antes de que lleguen ondas S destructivas y ondas superficiales", de: "Erkennen P-Wellen um Sekunden Warnung vor destruktiven S-Wellen und Oberflächenwellen zu bieten", nl: "Detecteren P-golven om seconden waarschuwing te bieden voor destructieve S-golven en oppervlakte golven aankomen" },
        { en: "Only measure earthquake magnitude after shaking stops", es: "Solo miden magnitud del terremoto después de que para el movimiento", de: "Messen nur Erdbebenstärke nachdem Erschütterung stoppt", nl: "Meten alleen aardbevings magnitude nadat schudden stopt" },
        { en: "Predict earthquakes days in advance", es: "Predicen terremotos días por adelantado", de: "Sagen Erdbeben Tage im Voraus vorher", nl: "Voorspellen aardbevingen dagen van tevoren" },
        { en: "Control seismic wave propagation paths", es: "Controlan rutas de propagación de ondas sísmicas", de: "Kontrollieren seismische Wellenausbreitungspfade", nl: "Controleren seismische golf propagatie paden" }
      ],
      correct: 0,
      explanation: {
        en: "Earthquake early warning systems exploit the fact that P-waves travel faster than damaging S-waves and surface waves. By rapidly detecting and analyzing P-wave arrivals at multiple stations, these systems can estimate earthquake parameters and broadcast warnings seconds before strong shaking arrives, providing time for automated responses like stopping trains or elevators.",
        es: "Sistemas de alerta temprana de terremotos explotan el hecho de que ondas P viajan más rápido que ondas S y superficiales dañinas. Detectando y analizando rápidamente llegadas de ondas P en múltiples estaciones, estos sistemas pueden estimar parámetros de terremoto y transmitir advertencias segundos antes de que llegue movimiento fuerte, proporcionando tiempo para respuestas automatizadas como parar trenes o ascensores.",
        de: "Erdbebenfrühwarnsysteme nutzen die Tatsache aus, dass P-Wellen schneller als schädliche S-Wellen und Oberflächenwellen reisen. Durch schnelle Erkennung und Analyse von P-Wellen-Ankünften an mehreren Stationen können diese Systeme Erdbebenparameter schätzen und Warnungen Sekunden vor starker Erschütterung senden, Zeit für automatisierte Antworten wie Stoppen von Zügen oder Aufzügen bietend.",
        nl: "Aardbevings vroege waarschuwings systemen benutten het feit dat P-golven sneller reizen dan schadelijke S-golven en oppervlakte golven. Door snel P-golf aankomsten op meerdere stations te detecteren en analyseren, kunnen deze systemen aardbevings parameters inschatten en waarschuwingen uitzenden seconden voor sterke schudding aankomt, tijd biedend voor geautomatiseerde reacties zoals stoppen treinen of liften."
      }
    },
    {
      question: {
        en: "How do seismic wave multipathing effects influence amplitude and travel time analysis?",
        es: "¿Cómo influyen efectos de múltiples rutas de ondas sísmicas en análisis de amplitud y tiempo de viaje?",
        de: "Wie beeinflussen seismische Wellen-Mehrwegeeffekte Amplituden- und Laufzeitanalyse?",
        nl: "Hoe beïnvloeden seismische golf multipathing effecten amplitude en reistijd analyse?"
      },
      options: [
        { en: "Multiple ray paths create interference patterns affecting both amplitude and apparent velocity measurements", es: "Múltiples rutas de rayos crean patrones de interferencia afectando mediciones de amplitud y velocidad aparente", de: "Multiple Strahlenwege erzeugen Interferenzmuster, die sowohl Amplituden- als auch scheinbare Geschwindigkeitsmessungen beeinflussen", nl: "Meerdere straal paden creëren interferentie patronen die zowel amplitude als schijnbare snelheids metingen beïnvloeden" },
        { en: "Multipathing only affects seismograph calibration", es: "Múltiples rutas solo afectan calibración del sismógrafo", de: "Mehrwege beeinflusst nur Seismographkalibrierung", nl: "Multipathing beïnvloedt alleen seismograaf kalibratie" },
        { en: "Wave amplitude remains constant regardless of path", es: "Amplitud de onda permanece constante independientemente de la ruta", de: "Wellenamplitude bleibt unabhängig vom Pfad konstant", nl: "Golf amplitude blijft constant ongeacht het pad" },
        { en: "Travel times are unaffected by path variations", es: "Tiempos de viaje no se ven afectados por variaciones de ruta", de: "Laufzeiten sind von Pfadvariationen unbeeinflusst", nl: "Reistijden worden niet beïnvloed door pad variaties" }
      ],
      correct: 0,
      explanation: {
        en: "In complex velocity structures, seismic waves can follow multiple paths between source and receiver. These different arrivals interfere constructively or destructively, creating amplitude variations and apparent velocity changes. Understanding multipathing is crucial for accurate tomographic imaging and source parameter estimation.",
        es: "En estructuras de velocidad complejas, ondas sísmicas pueden seguir múltiples rutas entre fuente y receptor. Estas diferentes llegadas interfieren constructiva o destructivamente, creando variaciones de amplitud y cambios de velocidad aparente. Entender múltiples rutas es crucial para imágenes tomográficas precisas y estimación de parámetros de fuente.",
        de: "In komplexen Geschwindigkeitsstrukturen können seismische Wellen mehrere Pfade zwischen Quelle und Empfänger folgen. Diese verschiedenen Ankünfte interferieren konstruktiv oder destruktiv, erzeugen Amplitudenvariationen und scheinbare Geschwindigkeitsänderungen. Mehrwege-Verständnis ist entscheidend für genaue tomographische Bildgebung und Quellenparameterschätzung.",
        nl: "In complexe snelheids structuren kunnen seismische golven meerdere paden volgen tussen bron en ontvanger. Deze verschillende aankomsten interfereren constructief of destructief, creëren amplitude variaties en schijnbare snelheids veranderingen. Multipathing begrip is cruciaal voor nauwkeurige tomografische beeldvorming en bron parameter schatting."
      }
    },
    {
      question: {
        en: "What is the relationship between seismic attenuation and crustal permeability?",
        es: "¿Cuál es la relación entre atenuación sísmica y permeabilidad crustal?",
        de: "Was ist die Beziehung zwischen seismischer Dämpfung und Krustenpermeabilität?",
        nl: "Wat is de relatie tussen seismische attenuatie en korstaal permeabiliteit?"
      },
      options: [
        { en: "Fluid-filled pores and fractures cause viscous energy dissipation, increasing attenuation in permeable zones", es: "Poros y fracturas llenos de fluido causan disipación de energía viscosa, aumentando atenuación en zonas permeables", de: "Flüssigkeitsgefüllte Poren und Brüche verursachen viskose Energiedissipation, erhöhen Dämpfung in permeablen Zonen", nl: "Vloeistof-gevulde poriën en breuken veroorzaken visceuze energie dissipatie, attenuatie verhogend in permeabele zones" },
        { en: "Permeability has no effect on seismic wave propagation", es: "Permeabilidad no tiene efecto en propagación de ondas sísmicas", de: "Permeabilität hat keinen Effekt auf seismische Wellenausbreitung", nl: "Permeabiliteit heeft geen effect op seismische golf propagatie" },
        { en: "Higher permeability always increases wave velocity", es: "Mayor permeabilidad siempre aumenta velocidad de onda", de: "Höhere Permeabilität erhöht immer Wellengeschwindigkeit", nl: "Hogere permeabiliteit verhoogt altijd golf snelheid" },
        { en: "Attenuation only depends on rock mineral composition", es: "Atenuación solo depende de composición mineral de roca", de: "Dämpfung hängt nur von Gesteinsmineralzusammensetzung ab", nl: "Attenuatie hangt alleen af van rots mineraal compositie" }
      ],
      correct: 0,
      explanation: {
        en: "Permeable rocks with fluid-filled pores and fractures exhibit higher seismic attenuation due to viscous energy dissipation as fluids are squeezed during wave passage. This attenuation-permeability relationship is exploited in hydrocarbon exploration and groundwater studies, where high attenuation zones may indicate fluid-bearing formations.",
        es: "Rocas permeables con poros y fracturas llenos de fluido exhiben mayor atenuación sísmica debido a disipación de energía viscosa mientras fluidos son comprimidos durante paso de onda. Esta relación atenuación-permeabilidad se explota en exploración de hidrocarburos y estudios de agua subterránea, donde zonas de alta atenuación pueden indicar formaciones portadoras de fluido.",
        de: "Permeable Gesteine mit flüssigkeitsgefüllten Poren und Brüchen zeigen höhere seismische Dämpfung durch viskose Energiedissipation, während Flüssigkeiten während Wellendurchgang zusammengedrückt werden. Diese Dämpfung-Permeabilität-Beziehung wird in Kohlenwasserstofferkundung und Grundwasserstudien ausgenutzt, wo hohe Dämpfungszonen flüssigkeitstragende Formationen anzeigen können.",
        nl: "Permeabele rotsen met vloeistof-gevulde poriën en breuken vertonen hogere seismische attenuatie door visceuze energie dissipatie terwijl vloeistoffen worden samengedrukt tijdens golf passage. Deze attenuatie-permeabiliteit relatie wordt uitgebuit in koolwaterstof exploratie en grondwater studies, waar hoge attenuatie zones vloeistof-dragende formaties kunnen aanduiden."
      }
    },
    {
      question: {
        en: "How does nonlinear seismic wave propagation differ from linear wave theory?",
        es: "¿Cómo difiere la propagación de ondas sísmicas no lineales de la teoría de ondas lineales?",
        de: "Wie unterscheidet sich nichtlineare seismische Wellenausbreitung von linearer Wellentheorie?",
        nl: "Hoe verschilt niet-lineaire seismische golf propagatie van lineaire golf theorie?"
      },
      options: [
        { en: "Large amplitude waves cause velocity and attenuation to depend on strain amplitude, violating superposition principle", es: "Ondas de gran amplitud causan que velocidad y atenuación dependan de amplitud de deformación, violando principio de superposición", de: "Große Amplitudenwellen verursachen, dass Geschwindigkeit und Dämpfung von Dehnungsamplitude abhängen, Superpositionsprinzip verletzend", nl: "Grote amplitude golven veroorzaken dat snelheid en attenuatie afhangen van rek amplitude, superposities principe schendend" },
        { en: "Nonlinear waves only occur in liquids", es: "Ondas no lineales solo ocurren en líquidos", de: "Nichtlineare Wellen treten nur in Flüssigkeiten auf", nl: "Niet-lineaire golven treden alleen op in vloeistoffen" },
        { en: "Wave frequency changes but amplitude remains constant", es: "Frecuencia de onda cambia pero amplitud permanece constante", de: "Wellenfrequenz ändert sich aber Amplitude bleibt konstant", nl: "Golf frequentie verandert maar amplitude blijft constant" },
        { en: "Nonlinear effects only affect surface waves", es: "Efectos no lineales solo afectan ondas superficiales", de: "Nichtlineare Effekte beeinflussen nur Oberflächenwellen", nl: "Niet-lineaire effecten beïnvloeden alleen oppervlakte golven" }
      ],
      correct: 0,
      explanation: {
        en: "Nonlinear seismic wave propagation occurs when wave amplitudes are large enough that material properties become strain-dependent. This causes wave velocity and attenuation to vary with amplitude, leading to waveform distortion, harmonic generation, and breakdown of linear superposition. Such effects are important in strong ground motion studies and soil liquefaction analysis.",
        es: "Propagación de ondas sísmicas no lineales ocurre cuando amplitudes de onda son lo suficientemente grandes que propiedades materiales se vuelven dependientes de deformación. Esto causa que velocidad de onda y atenuación varíen con amplitud, llevando a distorsión de forma de onda, generación armónica, y colapso de superposición lineal. Tales efectos son importantes en estudios de movimiento fuerte del suelo y análisis de licuefacción de suelo.",
        de: "Nichtlineare seismische Wellenausbreitung tritt auf, wenn Wellenamplituden groß genug sind, dass Materialeigenschaften dehnungsabhängig werden. Dies verursacht, dass Wellengeschwindigkeit und Dämpfung mit Amplitude variieren, führt zu Wellenformverzerrung, harmonischer Erzeugung und Zusammenbruch linearer Superposition. Solche Effekte sind wichtig in starken Bodenbewegungsstudien und Bodenliquefaktionsanalyse.",
        nl: "Niet-lineaire seismische golf propagatie treedt op wanneer golf amplitudes groot genoeg zijn dat materiaal eigenschappen rek-afhankelijk worden. Dit veroorzaakt dat golf snelheid en attenuatie variëren met amplitude, leidend tot golfvorm vervorming, harmonische generatie, en ineenstorting van lineaire superpositie. Zulke effecten zijn belangrijk in sterke grondbeweging studies en bodem vloeibaarmaking analyse."
      }
    },
    {
      question: {
        en: "What information can receiver function analysis provide about crustal and mantle structure?",
        es: "¿Qué información puede proporcionar análisis de función de receptor sobre estructura crustal y del manto?",
        de: "Welche Informationen kann Empfängerfunktionsanalyse über Krusten- und Mantelstruktur liefern?",
        nl: "Welke informatie kan ontvanger functie analyse verschaffen over korstaal en mantel structuur?"
      },
      options: [
        { en: "Isolates P-to-S converted waves at discontinuities to map layer thicknesses and velocity contrasts", es: "Aísla ondas P-a-S convertidas en discontinuidades para mapear espesores de capas y contrastes de velocidad", de: "Isoliert P-zu-S konvertierte Wellen an Diskontinuitäten um Schichtdicken und Geschwindigkeitskontraste zu kartieren", nl: "Isoleert P-naar-S geconverteerde golven bij discontinuïteiten om laag diktes en snelheids contrasten te karteren" },
        { en: "Only measures surface wave dispersion", es: "Solo mide dispersión de ondas superficiales", de: "Misst nur Oberflächenwellendispersion", nl: "Meet alleen oppervlakte golf dispersie" },
        { en: "Determines earthquake source mechanisms", es: "Determina mecanismos de fuente de terremoto", de: "Bestimmt Erdbeben-Quellmechanismen", nl: "Bepaalt aardbevings bron mechanismen" },
        { en: "Measures only direct wave arrivals", es: "Mide solo llegadas de ondas directas", de: "Misst nur direkte Wellenankünfte", nl: "Meet alleen directe golf aankomsten" }
      ],
      correct: 0,
      explanation: {
        en: "Receiver function analysis uses teleseismic P-waves that convert to S-waves at velocity discontinuities beneath a seismic station. By deconvolving horizontal from vertical components, the technique isolates these converted phases, revealing crustal thickness, Moho depth, velocity ratios, and mantle transition zone structure with high resolution.",
        es: "Análisis de función de receptor usa ondas P telesísmicas que se convierten a ondas S en discontinuidades de velocidad bajo una estación sísmica. Deconvolucionando componentes horizontales de verticales, la técnica aísla estas fases convertidas, revelando espesor crustal, profundidad de Moho, razones de velocidad, y estructura de zona de transición del manto con alta resolución.",
        de: "Empfängerfunktionsanalyse verwendet teleseismische P-Wellen, die zu S-Wellen an Geschwindigkeitsdiskontinuitäten unter einer seismischen Station konvertieren. Durch Dekonvolution horizontaler von vertikalen Komponenten isoliert die Technik diese konvertierten Phasen, enthüllt Krustendicke, Moho-Tiefe, Geschwindigkeitsverhältnisse und Manteltransitionszonenstruktur mit hoher Auflösung.",
        nl: "Ontvanger functie analyse gebruikt teleseismische P-golven die converteren naar S-golven bij snelheids discontinuïteiten onder een seismisch station. Door horizontale van verticale componenten te deconvolueren, isoleert de techniek deze geconverteerde fases, korstaal dikte, Moho diepte, snelheids verhoudingen, en mantel overgangs zone structuur met hoge resolutie onthullend."
      }
    },
    {
      question: {
        en: "How do frequency-dependent effects limit seismic tomography resolution?",
        es: "¿Cómo limitan efectos dependientes de frecuencia la resolución de tomografía sísmica?",
        de: "Wie begrenzen frequenzabhängige Effekte die seismische Tomographieauflösung?",
        nl: "Hoe beperken frequentie-afhankelijke effecten seismische tomografie resolutie?"
      },
      options: [
        { en: "Higher frequencies provide better resolution but suffer greater attenuation, limiting penetration depth and signal-to-noise ratio", es: "Frecuencias más altas proporcionan mejor resolución pero sufren mayor atenuación, limitando profundidad de penetración y razón señal-ruido", de: "Höhere Frequenzen bieten bessere Auflösung aber erleiden größere Dämpfung, begrenzen Penetrationstiefe und Signal-Rausch-Verhältnis", nl: "Hogere frequenties bieden betere resolutie maar lijden onder sterkere attenuatie, penetratie diepte en signaal-ruis verhouding beperkend" },
        { en: "All frequencies have identical resolution capabilities", es: "Todas las frecuencias tienen capacidades de resolución idénticas", de: "Alle Frequenzen haben identische Auflösungsfähigkeiten", nl: "Alle frequenties hebben identieke resolutie capaciteiten" },
        { en: "Lower frequencies always provide better resolution", es: "Frecuencias más bajas siempre proporcionan mejor resolución", de: "Niedrigere Frequenzen bieten immer bessere Auflösung", nl: "Lagere frequenties bieden altijd betere resolutie" },
        { en: "Frequency only affects wave amplitude, not resolution", es: "Frecuencia solo afecta amplitud de onda, no resolución", de: "Frequenz beeinflusst nur Wellenamplitude, nicht Auflösung", nl: "Frequentie beïnvloedt alleen golf amplitude, niet resolutie" }
      ],
      correct: 0,
      explanation: {
        en: "Seismic tomography resolution is fundamentally limited by wave frequency. Higher frequencies provide better spatial resolution (shorter wavelengths) but are more strongly attenuated, limiting depth penetration and reducing signal quality. Lower frequencies penetrate deeper but have poorer resolution. This trade-off constrains the scale of structures that can be resolved at different depths.",
        es: "Resolución de tomografía sísmica está fundamentalmente limitada por frecuencia de onda. Frecuencias más altas proporcionan mejor resolución espacial (longitudes de onda más cortas) pero son más fuertemente atenuadas, limitando penetración de profundidad y reduciendo calidad de señal. Frecuencias más bajas penetran más profundo pero tienen peor resolución. Este intercambio limita la escala de estructuras que pueden resolverse a diferentes profundidades.",
        de: "Seismische Tomographieauflösung ist fundamental durch Wellenfrequenz begrenzt. Höhere Frequenzen bieten bessere räumliche Auflösung (kürzere Wellenlängen) aber werden stärker gedämpft, begrenzen Tiefenpenetration und reduzieren Signalqualität. Niedrigere Frequenzen dringen tiefer ein aber haben schlechtere Auflösung. Dieser Kompromiss begrenzt die Skala von Strukturen, die in verschiedenen Tiefen aufgelöst werden können.",
        nl: "Seismische tomografie resolutie is fundamenteel beperkt door golf frequentie. Hogere frequenties bieden betere ruimtelijke resolutie (kortere golflengtes) maar worden sterker geattenueerd, diepte penetratie beperkend en signaal kwaliteit reducerend. Lagere frequenties penetreren dieper maar hebben slechtere resolutie. Deze afweging beperkt de schaal van structuren die kunnen worden opgelost op verschillende dieptes."
      }
    }
  ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mind-bender/seismology', level2);
  }
})();