// Seismology - Level 1: Earthquake Mechanics & Wave Propagation
(function() {
  const level1 = {
    name: {
      en: "Earthquake Mechanics & Wave Propagation",
      es: "Mecánica de Terremotos y Propagación de Ondas",
      de: "Erdbebenmechanik und Wellenausbreitung",
      nl: "Aardbevingsmechanica en Golfvoortplanting"
    },
    questions: [
      {
        question: {
          en: "What is the fundamental difference between P-waves and S-waves in seismic propagation?",
          es: "¿Cuál es la diferencia fundamental entre las ondas P y las ondas S en la propagación sísmica?",
          de: "Was ist der grundlegende Unterschied zwischen P-Wellen und S-Wellen in der seismischen Ausbreitung?",
          nl: "Wat is het fundamentele verschil tussen P-golven en S-golven in seismische voortplanting?"
        },
        options: [
          { en: "P-waves are compressional, S-waves are shear waves", es: "Las ondas P son compresionales, las ondas S son ondas de cizalla", de: "P-Wellen sind Kompressionswellen, S-Wellen sind Scherwellen", nl: "P-golven zijn compressiegolven, S-golven zijn schuifgolven" },
          { en: "P-waves travel slower than S-waves", es: "Las ondas P viajan más lento que las ondas S", de: "P-Wellen sind langsamer als S-Wellen", nl: "P-golven reizen langzamer dan S-golven" },
          { en: "P-waves only travel through solids", es: "Las ondas P solo viajan a través de sólidos", de: "P-Wellen reisen nur durch Feststoffe", nl: "P-golven reizen alleen door vaste stoffen" },
          { en: "P-waves have higher frequencies than S-waves", es: "Las ondas P tienen frecuencias más altas que las ondas S", de: "P-Wellen haben höhere Frequenzen als S-Wellen", nl: "P-golven hebben hogere frequenties dan S-golven" }
        ],
        correct: 0,
        explanation: {
          en: "P-waves (primary waves) are compressional waves that cause particles to move parallel to the wave direction, while S-waves (secondary waves) are shear waves that cause particles to move perpendicular to the wave direction. P-waves can travel through both solids and liquids, while S-waves only propagate through solids.",
          es: "Las ondas P (ondas primarias) son ondas compresionales que hacen que las partículas se muevan paralelas a la dirección de la onda, mientras que las ondas S (ondas secundarias) son ondas de cizalla que hacen que las partículas se muevan perpendiculares a la dirección de la onda. Las ondas P pueden viajar tanto a través de sólidos como de líquidos, mientras que las ondas S solo se propagan a través de sólidos.",
          de: "P-Wellen (Primärwellen) sind Kompressionswellen, die Teilchen parallel zur Wellenrichtung bewegen, während S-Wellen (Sekundärwellen) Scherwellen sind, die Teilchen senkrecht zur Wellenrichtung bewegen. P-Wellen können sowohl durch Feststoffe als auch Flüssigkeiten reisen, während S-Wellen sich nur durch Feststoffe ausbreiten.",
          nl: "P-golven (primaire golven) zijn compressiegolven die deeltjes parallel aan de golfrichting doen bewegen, terwijl S-golven (secundaire golven) schuifgolven zijn die deeltjes loodrecht op de golfrichting doen bewegen. P-golven kunnen door zowel vaste stoffen als vloeistoffen reizen, terwijl S-golven zich alleen door vaste stoffen voortplanten."
        }
      },
      {
        question: {
          en: "What does the moment magnitude scale (Mw) measure in earthquake seismology?",
          es: "¿Qué mide la escala de magnitud de momento (Mw) en la sismología de terremotos?",
          de: "Was misst die Momenten-Magnitudenskala (Mw) in der Erdbeben-Seismologie?",
          nl: "Wat meet de momentmagnitudeschaal (Mw) in aardbevingsseismologie?"
        },
        options: [
          { en: "The total energy released by an earthquake based on seismic moment", es: "La energía total liberada por un terremoto basada en el momento sísmico", de: "Die Gesamtenergie eines Erdbebens basierend auf dem seismischen Moment", nl: "De totale energie vrijgemaakt door een aardbeving gebaseerd op seismisch moment" },
          { en: "The maximum ground acceleration during shaking", es: "La máxima aceleración del suelo durante la sacudida", de: "Die maximale Bodenbeschleunigung während des Bebens", nl: "De maximale grondversnelling tijdens het schudden" },
          { en: "The duration of earthquake shaking", es: "La duración de la sacudida del terremoto", de: "Die Dauer des Erdbebens", nl: "De duur van het aardbeving schudden" },
          { en: "The depth of the earthquake hypocenter", es: "La profundidad del hipocentro del terremoto", de: "Die Tiefe des Erdbebenherdes", nl: "De diepte van het aardbevingshypocentrum" }
        ],
        correct: 0,
        explanation: {
          en: "The moment magnitude scale measures the total energy released by an earthquake based on the seismic moment, which considers the area of fault rupture, average displacement, and rock rigidity. It provides a more accurate measure of large earthquakes compared to older scales like Richter.",
          es: "La escala de magnitud de momento mide la energía total liberada por un terremoto basada en el momento sísmico, que considera el área de ruptura de la falla, el desplazamiento promedio y la rigidez de la roca. Proporciona una medida más precisa de terremotos grandes comparado con escalas más antiguas como Richter.",
          de: "Die Momenten-Magnitudenskala misst die Gesamtenergie eines Erdbebens basierend auf dem seismischen Moment, das die Bruchfläche, durchschnittliche Verschiebung und Gesteinssteifigkeit berücksichtigt. Sie bietet eine genauere Messung großer Erdbeben im Vergleich zu älteren Skalen wie Richter.",
          nl: "De momentmagnitudeschaal meet de totale energie vrijgemaakt door een aardbeving gebaseerd op het seismische moment, dat het breukoppervlak, gemiddelde verschuiving en gesteenterigiditeit overweegt. Het biedt een nauwkeuriger meting van grote aardbevingen vergeleken met oudere schalen zoals Richter."
        }
      },
      {
        question: {
          en: "What is the relationship between earthquake focal mechanisms and stress fields?",
          es: "¿Cuál es la relación entre los mecanismos focales de terremotos y los campos de esfuerzo?",
          de: "Was ist die Beziehung zwischen Erdbeben-Herdmechanismen und Spannungsfeldern?",
          nl: "Wat is de relatie tussen aardbevingsfocaalmechanismen en spanningsvelden?"
        },
        options: [
          { en: "Focal mechanisms reveal the orientation of principal stress axes in the crust", es: "Los mecanismos focales revelan la orientación de los ejes de esfuerzo principal en la corteza", de: "Herdmechanismen zeigen die Orientierung der Hauptspannungsachsen in der Kruste", nl: "Focaalmechanismen onthullen de oriëntatie van hoofdspanningsassen in de korst" },
          { en: "Focal mechanisms only indicate earthquake magnitude", es: "Los mecanismos focales solo indican la magnitud del terremoto", de: "Herdmechanismen zeigen nur die Erdbebenstärke", nl: "Focaalmechanismen geven alleen aardbevingsmagnitude aan" },
          { en: "Focal mechanisms determine earthquake frequency", es: "Los mecanismos focales determinan la frecuencia de terremotos", de: "Herdmechanismen bestimmen die Erdbebenfrequenz", nl: "Focaalmechanismen bepalen aardbevingsfrequentie" },
          { en: "Focal mechanisms predict future earthquake locations", es: "Los mecanismos focales predicen ubicaciones futuras de terremotos", de: "Herdmechanismen sagen zukünftige Erdbebenpositionen vorher", nl: "Focaalmechanismen voorspellen toekomstige aardbevingslocaties" }
        ],
        correct: 0,
        explanation: {
          en: "Earthquake focal mechanisms, determined from seismic wave patterns, reveal the orientation of fault planes and slip directions, which directly reflect the regional stress field. The pattern of compression and tension in focal mechanism solutions indicates the orientation of principal stress axes (σ1, σ2, σ3) in the Earth's crust.",
          es: "Los mecanismos focales de terremotos, determinados a partir de patrones de ondas sísmicas, revelan la orientación de planos de falla y direcciones de deslizamiento, que reflejan directamente el campo de esfuerzo regional. El patrón de compresión y tensión en las soluciones de mecanismo focal indica la orientación de los ejes de esfuerzo principal (σ1, σ2, σ3) en la corteza terrestre.",
          de: "Erdbeben-Herdmechanismen, die aus seismischen Wellenmustern bestimmt werden, zeigen die Orientierung von Verwerfungsebenen und Verschiebungsrichtungen, die das regionale Spannungsfeld direkt widerspiegeln. Das Muster von Kompression und Spannung in Herdmechanismus-Lösungen zeigt die Orientierung der Hauptspannungsachsen (σ1, σ2, σ3) in der Erdkruste.",
          nl: "Aardbevingsfocaalmechanismen, bepaald uit seismische golfpatronen, onthullen de oriëntatie van breukvlakken en verschuivingsrichtingen, die direct het regionale spanningsveld weerspiegelen. Het patroon van compressie en spanning in focaalmechanisme-oplossingen geeft de oriëntatie van hoofdspanningsassen (σ1, σ2, σ3) in de aardkorst aan."
        }
      },
      {
        question: {
          en: "What causes the phenomenon of seismic wave attenuation with distance?",
          es: "¿Qué causa el fenómeno de atenuación de ondas sísmicas con la distancia?",
          de: "Was verursacht das Phänomen der seismischen Wellendämpfung mit der Entfernung?",
          nl: "Wat veroorzaakt het fenomeen van seismische golfverzwakking met afstand?"
        },
        options: [
          { en: "Geometric spreading, scattering, and anelastic absorption", es: "Dispersión geométrica, dispersión y absorción anelástica", de: "Geometrische Ausbreitung, Streuung und anelastische Absorption", nl: "Geometrische verspreiding, verstrooiing en anelastische absorptie" },
          { en: "Only the inverse square law of energy distribution", es: "Solo la ley del cuadrado inverso de distribución de energía", de: "Nur das umgekehrte Quadratgesetz der Energieverteilung", nl: "Alleen de omgekeerde kwadratenwet van energieverdeling" },
          { en: "Reflection from the Earth's surface", es: "Reflexión desde la superficie terrestre", de: "Reflexion von der Erdoberfläche", nl: "Reflectie van het aardoppervlak" },
          { en: "Doppler effect from moving sources", es: "Efecto Doppler de fuentes en movimiento", de: "Doppler-Effekt von bewegten Quellen", nl: "Doppler-effect van bewegende bronnen" }
        ],
        correct: 0,
        explanation: {
          en: "Seismic wave attenuation occurs due to three main factors: geometric spreading (energy distributed over larger areas with distance), scattering from heterogeneities in the Earth's structure, and anelastic absorption where wave energy is converted to heat through internal friction in rocks.",
          es: "La atenuación de ondas sísmicas ocurre debido a tres factores principales: dispersión geométrica (energía distribuida sobre áreas más grandes con la distancia), dispersión por heterogeneidades en la estructura terrestre, y absorción anelástica donde la energía de las ondas se convierte en calor a través de fricción interna en las rocas.",
          de: "Seismische Wellendämpfung tritt aufgrund von drei Hauptfaktoren auf: geometrische Ausbreitung (Energie wird über größere Bereiche mit Entfernung verteilt), Streuung an Heterogenitäten in der Erdstruktur, und anelastische Absorption, wo Wellenenergie durch interne Reibung in Gesteinen in Wärme umgewandelt wird.",
          nl: "Seismische golfverzwakking treedt op door drie hoofdfactoren: geometrische verspreiding (energie verdeeld over grotere gebieden met afstand), verstrooiing door heterogeniteiten in de aardstructuur, en anelastische absorptie waar golfenergie wordt omgezet in warmte door interne wrijving in gesteenten."
        }
      },
      {
        question: {
          en: "What is the seismological evidence for the liquid outer core of the Earth?",
          es: "¿Cuál es la evidencia sismológica del núcleo externo líquido de la Tierra?",
          de: "Was ist der seismologische Beweis für den flüssigen äußeren Erdkern?",
          nl: "Wat is het seismologische bewijs voor de vloeibare buitenkern van de aarde?"
        },
        options: [
          { en: "S-wave shadow zone and P-wave velocity reduction", es: "Zona de sombra de ondas S y reducción de velocidad de ondas P", de: "S-Wellen-Schattenzone und P-Wellen-Geschwindigkeitsreduktion", nl: "S-golf schaduwzone en P-golf snelheidsvermindering" },
          { en: "Increased surface wave amplitudes", es: "Amplitudes aumentadas de ondas superficiales", de: "Erhöhte Oberflächenwellen-Amplituden", nl: "Verhoogde oppervlaktegolf amplitudes" },
          { en: "Higher frequency seismic noise", es: "Ruido sísmico de mayor frecuencia", de: "Höherfrequenter seismischer Lärm", nl: "Hogere frequentie seismische ruis" },
          { en: "Faster P-wave travel times", es: "Tiempos de viaje más rápidos de ondas P", de: "Schnellere P-Wellen-Laufzeiten", nl: "Snellere P-golf reistijden" }
        ],
        correct: 0,
        explanation: {
          en: "The liquid outer core creates an S-wave shadow zone because shear waves cannot propagate through liquids. Additionally, P-waves are significantly slowed and refracted when entering the liquid outer core, creating characteristic travel time patterns that confirm the liquid state of this region.",
          es: "El núcleo externo líquido crea una zona de sombra de ondas S porque las ondas de cizalla no pueden propagarse a través de líquidos. Además, las ondas P se ralentizan significativamente y se refractan al entrar al núcleo externo líquido, creando patrones característicos de tiempo de viaje que confirman el estado líquido de esta región.",
          de: "Der flüssige äußere Kern erzeugt eine S-Wellen-Schattenzone, weil Scherwellen sich nicht durch Flüssigkeiten ausbreiten können. Zusätzlich werden P-Wellen beim Eintritt in den flüssigen äußeren Kern erheblich verlangsamt und gebrochen, was charakteristische Laufzeitmuster erzeugt, die den flüssigen Zustand dieser Region bestätigen.",
          nl: "De vloeibare buitenkern creëert een S-golf schaduwzone omdat schuifgolven zich niet door vloeistoffen kunnen voortplanten. Bovendien worden P-golven aanzienlijk vertraagd en gebroken bij het betreden van de vloeibare buitenkern, wat karakteristieke reistijdpatronen creëert die de vloeibare toestand van deze regio bevestigen."
        }
      },
      {
        question: {
          en: "What is the primary mechanism behind deep focus earthquakes occurring below 300 km depth?",
          es: "¿Cuál es el mecanismo principal detrás de los terremotos de foco profundo que ocurren por debajo de 300 km de profundidad?",
          de: "Was ist der Hauptmechanismus hinter Tiefherdbeben, die unter 300 km Tiefe auftreten?",
          nl: "Wat is het primaire mechanisme achter diepe focus aardbevingen die onder 300 km diepte optreden?"
        },
        options: [
          { en: "Phase transformations in subducting slab materials", es: "Transformaciones de fase en materiales de losas subductoras", de: "Phasenumwandlungen in subduzierten Plattenmaterialien", nl: "Fasetransformaties in subducterende plaatmaterialen" },
          { en: "Brittle fracture of cold oceanic lithosphere", es: "Fractura frágil de litosfera oceánica fría", de: "Spröder Bruch kalter ozeanischer Lithosphäre", nl: "Brosse breuk van koude oceanische lithosfeer" },
          { en: "Thermal expansion of mantle rocks", es: "Expansión térmica de rocas del manto", de: "Thermische Ausdehnung von Mantelgesteinen", nl: "Thermische uitzetting van mantelgesteenten" },
          { en: "Frictional sliding on pre-existing faults", es: "Deslizamiento friccional en fallas preexistentes", de: "Reibungsgleiten auf vorhandenen Verwerfungen", nl: "Wrijvingsschuiving op bestaande breuken" }
        ],
        correct: 0,
        explanation: {
          en: "Deep focus earthquakes are primarily caused by phase transformations (metamorphic transitions) in subducting slab materials rather than brittle fracture. At depths below 300 km, the high pressure and temperature conditions cause mineral phase changes that can generate sudden volume changes and seismic energy release.",
          es: "Los terremotos de foco profundo son causados principalmente por transformaciones de fase (transiciones metamórficas) en materiales de losas subductoras en lugar de fractura frágil. A profundidades por debajo de 300 km, las condiciones de alta presión y temperatura causan cambios de fase mineral que pueden generar cambios súbitos de volumen y liberación de energía sísmica.",
          de: "Tiefherdbeben werden hauptsächlich durch Phasenumwandlungen (metamorphe Übergänge) in subduzierten Plattenmaterialien verursacht, nicht durch spröden Bruch. In Tiefen unter 300 km verursachen die hohen Druck- und Temperaturbedingungen Mineralphasenänderungen, die plötzliche Volumenänderungen und seismische Energiefreisetzung bewirken können.",
          nl: "Diepe focus aardbevingen worden voornamelijk veroorzaakt door fasetransformaties (metamorfe overgangen) in subducterende plaatmaterialen in plaats van brosse breuk. Op diepten onder 300 km veroorzaken de hoge druk- en temperatuuromstandigheden mineraalfaseveranderingen die plotselinge volumeveranderingen en seismische energievrijmaking kunnen genereren."
        }
      },
      {
        question: {
          en: "What does seismic tomography reveal about mantle convection patterns?",
          es: "¿Qué revela la tomografía sísmica sobre los patrones de convección del manto?",
          de: "Was zeigt die seismische Tomographie über Mantelkonvektionsmuster?",
          nl: "Wat onthult seismische tomografie over mantelconvectiepatronen?"
        },
        options: [
          { en: "High-velocity anomalies indicate cold downwelling slabs, low-velocity regions show hot upwelling plumes", es: "Anomalías de alta velocidad indican losas frías descendentes, regiones de baja velocidad muestran plumas calientes ascendentes", de: "Hochgeschwindigkeits-Anomalien zeigen kalte absteigende Platten, niedrige Geschwindigkeitsbereiche zeigen heiße aufsteigende Säulen", nl: "Hoge-snelheidsanomalieën geven koude neerdaalende platen aan, lage-snelheidsgebieden tonen hete opstijgende pluimen" },
          { en: "All velocity variations are random with no convection patterns", es: "Todas las variaciones de velocidad son aleatorias sin patrones de convección", de: "Alle Geschwindigkeitsvariationen sind zufällig ohne Konvektionsmuster", nl: "Alle snelheidsvariaties zijn willekeurig zonder convectiepatronen" },
          { en: "High-velocity regions always indicate hot material", es: "Las regiones de alta velocidad siempre indican material caliente", de: "Hochgeschwindigkeitsbereiche zeigen immer heißes Material", nl: "Hoge-snelheidsgebieden geven altijd heet materiaal aan" },
          { en: "Tomography only shows crustal structure", es: "La tomografía solo muestra estructura cortical", de: "Tomographie zeigt nur Krustenstruktur", nl: "Tomografie toont alleen korststructuur" }
        ],
        correct: 0,
        explanation: {
          en: "Seismic tomography maps velocity variations in the mantle, where high-velocity anomalies typically correspond to cold, dense subducting slabs, while low-velocity regions indicate hot, less dense upwelling material like mantle plumes. This provides direct evidence for mantle convection patterns and the thermal structure of Earth's interior.",
          es: "La tomografía sísmica mapea variaciones de velocidad en el manto, donde las anomalías de alta velocidad típicamente corresponden a losas subductoras frías y densas, mientras que las regiones de baja velocidad indican material ascendente caliente y menos denso como plumas del manto. Esto proporciona evidencia directa de patrones de convección del manto y la estructura térmica del interior terrestre.",
          de: "Die seismische Tomographie kartiert Geschwindigkeitsvariationen im Mantel, wobei Hochgeschwindigkeits-Anomalien typischerweise kalten, dichten subduzierten Platten entsprechen, während niedrige Geschwindigkeitsbereiche heißes, weniger dichtes aufsteigendes Material wie Mantelsäulen anzeigen. Dies liefert direkten Beweis für Mantelkonvektionsmuster und die thermische Struktur des Erdinneren.",
          nl: "Seismische tomografie brengt snelheidsvariaties in de mantel in kaart, waarbij hoge-snelheidsanomalieën typisch corresponderen met koude, dichte subducterende platen, terwijl lage-snelheidsgebieden heet, minder dicht opstijgend materiaal zoals mantelpluimen aangeven. Dit biedt direct bewijs voor mantelconvectiepatronen en de thermische structuur van het aardinnere."
        }
      },
      {
        question: {
          en: "How do earthquake early warning systems calculate P-wave arrival times?",
          es: "¿Cómo calculan los sistemas de alerta temprana de terremotos los tiempos de llegada de ondas P?",
          de: "Wie berechnen Erdbebenfrühwarnsysteme P-Wellen-Ankunftszeiten?",
          nl: "Hoe berekenen aardbevingsvroege waarschuwingssystemen P-golf aankomsttijden?"
        },
        options: [
          { en: "Using 1D velocity models and epicentral distance calculations", es: "Usando modelos de velocidad 1D y cálculos de distancia epicentral", de: "Verwendung von 1D-Geschwindigkeitsmodellen und Epizentraldistanz-Berechnungen", nl: "Gebruik makend van 1D snelheidsmodellen en epicentrale afstandsberekeningen" },
          { en: "Measuring surface wave dispersion", es: "Midiendo dispersión de ondas superficiales", de: "Messung der Oberflächenwellen-Dispersion", nl: "Meting van oppervlaktegolf dispersie" },
          { en: "Analyzing electromagnetic signals", es: "Analizando señales electromagnéticas", de: "Analyse elektromagnetischer Signale", nl: "Analyseren van elektromagnetische signalen" },
          { en: "Using GPS displacement measurements", es: "Usando mediciones de desplazamiento GPS", de: "Verwendung von GPS-Verschiebungsmessungen", nl: "Gebruik van GPS verplaatsingsmetingen" }
        ],
        correct: 0,
        explanation: {
          en: "Early warning systems use 1D velocity models of the Earth's structure to calculate expected P-wave travel times based on the epicentral distance from the earthquake source. These systems detect initial P-waves, rapidly determine magnitude and location, then predict S-wave and surface wave arrival times at target locations to provide advance warning.",
          es: "Los sistemas de alerta temprana usan modelos de velocidad 1D de la estructura terrestre para calcular tiempos de viaje esperados de ondas P basados en la distancia epicentral desde la fuente del terremoto. Estos sistemas detectan ondas P iniciales, determinan rápidamente magnitud y ubicación, luego predicen tiempos de llegada de ondas S y superficiales en ubicaciones objetivo para proporcionar alerta anticipada.",
          de: "Frühwarnsysteme verwenden 1D-Geschwindigkeitsmodelle der Erdstruktur zur Berechnung erwarteter P-Wellen-Laufzeiten basierend auf der Epizentraldistanz von der Erdbebenquelle. Diese Systeme erkennen erste P-Wellen, bestimmen schnell Magnitude und Ort, dann sagen sie S-Wellen- und Oberflächenwellen-Ankunftszeiten an Zielorten vorher, um Frühwarnung zu bieten.",
          nl: "Vroege waarschuwingssystemen gebruiken 1D snelheidsmodellen van de aardstructuur om verwachte P-golf reistijden te berekenen gebaseerd op de epicentrale afstand van de aardbevingsbron. Deze systemen detecteren initiële P-golven, bepalen snel magnitude en locatie, voorspellen dan S-golf en oppervlaktegolf aankomsttijden op doellocaties om voorafgaande waarschuwing te bieden."
        }
      },
      {
        question: {
          en: "What is the relationship between earthquake recurrence intervals and fault slip rates?",
          es: "¿Cuál es la relación entre intervalos de recurrencia de terremotos y tasas de deslizamiento de fallas?",
          de: "Was ist die Beziehung zwischen Erdbebenwiederholungsintervallen und Verwerfungsverschiebungsraten?",
          nl: "Wat is de relatie tussen aardbevingsherhaalintervallen en breukschuifsnelheden?"
        },
        options: [
          { en: "Recurrence interval equals characteristic displacement divided by slip rate", es: "El intervalo de recurrencia es igual al desplazamiento característico dividido por la tasa de deslizamiento", de: "Wiederholungsintervall gleich charakteristische Verschiebung geteilt durch Verschiebungsrate", nl: "Herhaalinterval gelijk aan karakteristieke verplaatsing gedeeld door schuifsnelheid" },
          { en: "Recurrence intervals are always constant regardless of slip rate", es: "Los intervalos de recurrencia son siempre constantes independientemente de la tasa de deslizamiento", de: "Wiederholungsintervalle sind immer konstant unabhängig von der Verschiebungsrate", nl: "Herhaalintervallen zijn altijd constant ongeacht schuifsnelheid" },
          { en: "Faster slip rates always produce longer recurrence intervals", es: "Tasas de deslizamiento más rápidas siempre producen intervalos de recurrencia más largos", de: "Schnellere Verschiebungsraten erzeugen immer längere Wiederholungsintervalle", nl: "Snellere schuifsnelheden produceren altijd langere herhaalintervallen" },
          { en: "Slip rates have no relationship to earthquake timing", es: "Las tasas de deslizamiento no tienen relación con la temporización de terremotos", de: "Verschiebungsraten haben keine Beziehung zur Erdbebenzeitgebung", nl: "Schuifsnelheden hebben geen relatie met aardbevingstiming" }
        ],
        correct: 0,
        explanation: {
          en: "The characteristic earthquake model suggests that recurrence interval equals the characteristic displacement (typical fault slip in a major earthquake) divided by the long-term slip rate. This relationship forms the basis for probabilistic earthquake forecasting, though real fault behavior can be more complex due to variable slip and clustering effects.",
          es: "El modelo de terremoto característico sugiere que el intervalo de recurrencia es igual al desplazamiento característico (deslizamiento típico de falla en un terremoto mayor) dividido por la tasa de deslizamiento a largo plazo. Esta relación forma la base para pronósticos probabilísticos de terremotos, aunque el comportamiento real de fallas puede ser más complejo debido a efectos variables de deslizamiento y agrupamiento.",
          de: "Das charakteristische Erdbebenmodell schlägt vor, dass das Wiederholungsintervall der charakteristischen Verschiebung (typische Verwerfungsverschiebung in einem großen Erdbeben) geteilt durch die langfristige Verschiebungsrate entspricht. Diese Beziehung bildet die Grundlage für probabilistische Erdbebenvorhersagen, obwohl das reale Verwerfungsverhalten aufgrund variabler Verschiebungs- und Clustereffekte komplexer sein kann.",
          nl: "Het karakteristieke aardbevingsmodel suggereert dat het herhaalinterval gelijk is aan de karakteristieke verplaatsing (typische breukschuiving in een grote aardbeving) gedeeld door de langetermijn schuifsnelheid. Deze relatie vormt de basis voor probabilistische aardbevingsvoorspelling, hoewel werkelijk breukgedrag complexer kan zijn door variabele schuif- en clustereffecten."
        }
      },
      {
        question: {
          en: "What causes the phenomenon of earthquake triggering and stress transfer?",
          es: "¿Qué causa el fenómeno de activación de terremotos y transferencia de esfuerzo?",
          de: "Was verursacht das Phänomen der Erdbebenauslösung und Spannungsübertragung?",
          nl: "Wat veroorzaakt het fenomeen van aardbevingsactivering en spanningsoverdracht?"
        },
        options: [
          { en: "Static stress changes from nearby earthquakes alter failure conditions on adjacent faults", es: "Cambios de esfuerzo estático de terremotos cercanos alteran condiciones de falla en fallas adyacentes", de: "Statische Spannungsänderungen von nahen Erdbeben verändern Versagensbedingungen an benachbarten Verwerfungen", nl: "Statische spanningsveranderingen van nabije aardbevingen veranderen faalomstandigheden op aangrenzende breuken" },
          { en: "Electromagnetic fields generated by fault motion", es: "Campos electromagnéticos generados por movimiento de fallas", de: "Elektromagnetische Felder erzeugt durch Verwerfungsbewegung", nl: "Elektromagnetische velden gegenereerd door breukbeweging" },
          { en: "Gravitational waves from large earthquakes", es: "Ondas gravitacionales de terremotos grandes", de: "Gravitationswellen von großen Erdbeben", nl: "Gravitatiegolven van grote aardbevingen" },
          { en: "Atmospheric pressure changes", es: "Cambios de presión atmosférica", de: "Atmosphärendruckänderungen", nl: "Atmosferische drukveranderingen" }
        ],
        correct: 0,
        explanation: {
          en: "Earthquake triggering occurs through static stress transfer, where the coseismic stress changes from one earthquake alter the stress state on nearby faults. Positive stress changes (increased shear stress or decreased normal stress) can bring faults closer to failure, while negative changes can delay rupture. This process explains earthquake clustering and cascading sequences.",
          es: "La activación de terremotos ocurre a través de transferencia de esfuerzo estático, donde los cambios de esfuerzo cosísmicos de un terremoto alteran el estado de esfuerzo en fallas cercanas. Los cambios positivos de esfuerzo (aumento del esfuerzo de cizalla o disminución del esfuerzo normal) pueden acercar las fallas al fallo, mientras que los cambios negativos pueden retrasar la ruptura. Este proceso explica el agrupamiento de terremotos y secuencias en cascada.",
          de: "Erdbebenauslösung erfolgt durch statische Spannungsübertragung, wobei die koseismischen Spannungsänderungen eines Erdbebens den Spannungszustand an nahen Verwerfungen verändern. Positive Spannungsänderungen (erhöhte Scherspannung oder verringerte Normalspannung) können Verwerfungen näher zum Versagen bringen, während negative Änderungen Brüche verzögern können. Dieser Prozess erklärt Erdbebenclusterung und kaskadierende Sequenzen.",
          nl: "Aardbevingsactivering treedt op door statische spanningsoverdracht, waarbij de coseismische spanningsveranderingen van één aardbeving de spanningstoestand op nabije breuken veranderen. Positieve spanningsveranderingen (verhoogde schuifspanning of verminderde normale spanning) kunnen breuken dichter bij falen brengen, terwijl negatieve veranderingen breuk kunnen vertragen. Dit proces verklaart aardbevingsclustering en cascaderende sequenties."
        }
      },
      {
        question: {
          en: "How do seismologists distinguish between natural earthquakes and nuclear explosions?",
          es: "¿Cómo distinguen los sismólogos entre terremotos naturales y explosiones nucleares?",
          de: "Wie unterscheiden Seismologen zwischen natürlichen Erdbeben und Nuklearexplosionen?",
          nl: "Hoe onderscheiden seismologen tussen natuurlijke aardbevingen en nucleaire explosies?"
        },
        options: [
          { en: "P-wave to S-wave amplitude ratios and spectral characteristics", es: "Relaciones de amplitud de ondas P a S y características espectrales", de: "P-Wellen- zu S-Wellen-Amplitudenverhältnisse und spektrale Eigenschaften", nl: "P-golf tot S-golf amplitude verhoudingen en spectrale kenmerken" },
          { en: "Only by measuring total energy release", es: "Solo midiendo la liberación total de energía", de: "Nur durch Messung der Gesamtenergiefreisetzung", nl: "Alleen door meting van totale energievrijmaking" },
          { en: "Surface wave arrival times", es: "Tiempos de llegada de ondas superficiales", de: "Oberflächenwellen-Ankunftszeiten", nl: "Oppervlaktegolf aankomsttijden" },
          { en: "Depth measurements alone", es: "Solo mediciones de profundidad", de: "Nur Tiefenmessungen", nl: "Alleen dieptemetingen" }
        ],
        correct: 0,
        explanation: {
          en: "Nuclear explosions typically show higher P-wave to S-wave amplitude ratios compared to earthquakes because explosions generate more compressional energy. They also exhibit different spectral characteristics, often with higher frequencies and different radiation patterns. Additionally, explosions usually occur at shallow depths and show isotropic (equal in all directions) first motion patterns.",
          es: "Las explosiones nucleares típicamente muestran relaciones más altas de amplitud de ondas P a S comparadas con terremotos porque las explosiones generan más energía compresional. También exhiben características espectrales diferentes, a menudo con frecuencias más altas y patrones de radiación diferentes. Además, las explosiones usualmente ocurren a profundidades someras y muestran patrones de primer movimiento isotrópicos (iguales en todas direcciones).",
          de: "Nuklearexplosionen zeigen typischerweise höhere P-Wellen- zu S-Wellen-Amplitudenverhältnisse im Vergleich zu Erdbeben, weil Explosionen mehr Kompressionsenergie erzeugen. Sie zeigen auch unterschiedliche spektrale Eigenschaften, oft mit höheren Frequenzen und anderen Strahlungsmustern. Zusätzlich treten Explosionen meist in geringen Tiefen auf und zeigen isotrope (in alle Richtungen gleiche) Erstbewegungsmuster.",
          nl: "Nucleaire explosies tonen typisch hogere P-golf tot S-golf amplitude verhoudingen vergeleken met aardbevingen omdat explosies meer compressie-energie genereren. Ze vertonen ook verschillende spectrale kenmerken, vaak met hogere frequenties en verschillende stralingspatronen. Bovendien treden explosies meestal op geringe diepten op en tonen isotrope (gelijk in alle richtingen) eerste bewegingspatronen."
        }
      },
      {
        question: {
          en: "What is the significance of the Wadati-Benioff zone in subduction zone seismology?",
          es: "¿Cuál es la importancia de la zona de Wadati-Benioff en la sismología de zonas de subducción?",
          de: "Was ist die Bedeutung der Wadati-Benioff-Zone in der Subduktionszonen-Seismologie?",
          nl: "Wat is de betekenis van de Wadati-Benioff zone in subductiezone seismologie?"
        },
        options: [
          { en: "It maps the geometry of descending oceanic slabs through earthquake hypocenter distributions", es: "Mapea la geometría de losas oceánicas descendentes a través de distribuciones de hipocentros de terremotos", de: "Sie kartiert die Geometrie absteigender ozeanischer Platten durch Erdbebenherdzentrumsverteilungen", nl: "Het brengt de geometrie van neerdaalende oceanische platen in kaart door aardbevingshypocentrumverdelingen" },
          { en: "It only shows surface earthquake locations", es: "Solo muestra ubicaciones de terremotos superficiales", de: "Sie zeigt nur Oberflächenerdbeben-Standorte", nl: "Het toont alleen oppervlakte aardbevingslocaties" },
          { en: "It represents volcanic activity patterns", es: "Representa patrones de actividad volcánica", de: "Sie repräsentiert vulkanische Aktivitätsmuster", nl: "Het vertegenwoordigt vulkanische activiteitspatronen" },
          { en: "It indicates areas of no seismic activity", es: "Indica áreas sin actividad sísmica", de: "Sie zeigt Gebiete ohne seismische Aktivität", nl: "Het geeft gebieden zonder seismische activiteit aan" }
        ],
        correct: 0,
        explanation: {
          en: "The Wadati-Benioff zone is a planar distribution of earthquake hypocenters that extends from shallow depths near oceanic trenches to depths of 600-700 km, defining the geometry of subducting oceanic slabs. This seismic zone provides direct evidence for plate subduction and helps map the three-dimensional structure of descending lithospheric plates.",
          es: "La zona de Wadati-Benioff es una distribución planar de hipocentros de terremotos que se extiende desde profundidades someras cerca de trincheras oceánicas hasta profundidades de 600-700 km, definiendo la geometría de losas oceánicas subductoras. Esta zona sísmica proporciona evidencia directa de subducción de placas y ayuda a mapear la estructura tridimensional de placas litosféricas descendentes.",
          de: "Die Wadati-Benioff-Zone ist eine planare Verteilung von Erdbebenherdzentren, die sich von geringen Tiefen nahe ozeanischen Gräben bis zu Tiefen von 600-700 km erstreckt und die Geometrie subduzierender ozeanischer Platten definiert. Diese seismische Zone liefert direkten Beweis für Plattensubduktion und hilft bei der Kartierung der dreidimensionalen Struktur absteigender lithosphärischer Platten.",
          nl: "De Wadati-Benioff zone is een vlakke verdeling van aardbevingshypocentra die zich uitstrekt van ondiepe diepten nabij oceanische troggen tot diepten van 600-700 km, waarbij de geometrie van subducterende oceanische platen wordt gedefinieerd. Deze seismische zone biedt direct bewijs voor plaatsubductie en helpt bij het in kaart brengen van de driedimensionale structuur van neerdaalende lithosferische platen."
        }
      },
      {
        question: {
          en: "What causes the difference in ground motion characteristics between strike-slip and thrust earthquakes?",
          es: "¿Qué causa la diferencia en características de movimiento del suelo entre terremotos de deslizamiento de rumbo y de empuje?",
          de: "Was verursacht den Unterschied in Bodenbewegungscharakteristiken zwischen Blattverschiebungs- und Überschiebungsbeben?",
          nl: "Wat veroorzaakt het verschil in grondbeweging karakteristieken tussen horizontaalverschuivings- en stootaardbevingen?"
        },
        options: [
          { en: "Different fault orientations produce varying radiation patterns and directivity effects", es: "Orientaciones de falla diferentes producen patrones de radiación variables y efectos de directividad", de: "Unterschiedliche Verwerfungsorientierungen erzeugen variierende Strahlungsmuster und Direktivitätseffekte", nl: "Verschillende breukoriëntaties produceren variërende stralingspatronen en directiviteitseffecten" },
          { en: "Strike-slip earthquakes always have higher magnitudes", es: "Los terremotos de deslizamiento de rumbo siempre tienen magnitudes más altas", de: "Blattverschiebungsbeben haben immer höhere Magnituden", nl: "Horizontaalverschuivingsaardbevingen hebben altijd hogere magnitudes" },
          { en: "Thrust earthquakes only generate P-waves", es: "Los terremotos de empuje solo generan ondas P", de: "Überschiebungsbeben erzeugen nur P-Wellen", nl: "Stootaardbevingen genereren alleen P-golven" },
          { en: "The differences are only due to depth variations", es: "Las diferencias son solo debido a variaciones de profundidad", de: "Die Unterschiede sind nur auf Tiefenvariationen zurückzuführen", nl: "De verschillen zijn alleen te wijten aan dieptevariaties" }
        ],
        correct: 0,
        explanation: {
          en: "Strike-slip and thrust earthquakes produce different ground motion patterns due to their distinct fault orientations and slip directions. Strike-slip faults generate strong horizontal shaking parallel to the fault strike, while thrust faults produce more vertical motion and hanging wall effects. Directivity effects also differ, with energy focusing in the direction of rupture propagation.",
          es: "Los terremotos de deslizamiento de rumbo y de empuje producen diferentes patrones de movimiento del suelo debido a sus orientaciones de falla distintas y direcciones de deslizamiento. Las fallas de deslizamiento de rumbo generan sacudidas horizontales fuertes paralelas al rumbo de la falla, mientras que las fallas de empuje producen más movimiento vertical y efectos de pared colgante. Los efectos de directividad también difieren, con energía enfocándose en la dirección de propagación de ruptura.",
          de: "Blattverschiebungs- und Überschiebungsbeben erzeugen unterschiedliche Bodenbewegungsmuster aufgrund ihrer verschiedenen Verwerfungsorientierungen und Verschiebungsrichtungen. Blattverschiebungsverwerfungen erzeugen starke horizontale Erschütterungen parallel zum Verwerfungsstreichen, während Überschiebungsverwerfungen mehr vertikale Bewegung und Hangendwandeffekte produzieren. Direktivitätseffekte unterscheiden sich ebenfalls, mit Energiefokussierung in Richtung der Bruchausbreitung.",
          nl: "Horizontaalverschuivings- en stootaardbevingen produceren verschillende grondbeweging patronen vanwege hun verschillende breukoriëntaties en schuifrichtingen. Horizontaalverschuivingsbreuken genereren sterke horizontale schudding parallel aan de breukrichting, terwijl stootbreuken meer verticale beweging en hangende muur effecten produceren. Directiviteitseffecten verschillen ook, met energiefocussering in de richting van breukvoortplanting."
        }
      },
      {
        question: {
          en: "What is the role of fluid pressure in earthquake generation and fault mechanics?",
          es: "¿Cuál es el papel de la presión de fluidos en la generación de terremotos y mecánica de fallas?",
          de: "Was ist die Rolle des Fluiddrucks in der Erdbebenerzeugung und Verwerfungsmechanik?",
          nl: "Wat is de rol van vloeistofdruk in aardbevingsopwekking en breukmechanica?"
        },
        options: [
          { en: "High pore pressure reduces effective normal stress, promoting fault failure at lower shear stresses", es: "Alta presión de poros reduce el esfuerzo normal efectivo, promoviendo falla de fallas a esfuerzos de cizalla menores", de: "Hoher Porendruck reduziert effektive Normalspannung und fördert Verwerfungsversagen bei geringeren Scherspannungen", nl: "Hoge poriedruk vermindert effectieve normale spanning, bevordert breukfalen bij lagere schuifspanningen" },
          { en: "Fluids only lubricate fault surfaces without affecting stress", es: "Los fluidos solo lubrican superficies de fallas sin afectar el esfuerzo", de: "Fluide schmieren nur Verwerfungsoberflächen ohne Spannungsbeeinflussung", nl: "Vloeistoffen smeren alleen breukoppervlakken zonder spanning te beïnvloeden" },
          { en: "Fluid pressure always prevents earthquakes", es: "La presión de fluidos siempre previene terremotos", de: "Fluiddruck verhindert immer Erdbeben", nl: "Vloeistofdruk voorkomt altijd aardbevingen" },
          { en: "Fluids have no mechanical effect on fault systems", es: "Los fluidos no tienen efecto mecánico en sistemas de fallas", de: "Fluide haben keine mechanische Wirkung auf Verwerfungssysteme", nl: "Vloeistoffen hebben geen mechanisch effect op breuksystemen" }
        ],
        correct: 0,
        explanation: {
          en: "Elevated pore fluid pressure reduces the effective normal stress on fault planes according to the principle σ'n = σn - Pf, where effective normal stress equals total normal stress minus pore pressure. This reduction in effective stress promotes fault failure at lower applied shear stresses, explaining phenomena like induced seismicity from fluid injection and natural earthquakes triggered by groundwater changes.",
          es: "La presión elevada de fluidos de poro reduce el esfuerzo normal efectivo en planos de falla según el principio σ'n = σn - Pf, donde el esfuerzo normal efectivo es igual al esfuerzo normal total menos la presión de poro. Esta reducción en esfuerzo efectivo promueve falla de fallas a esfuerzos de cizalla aplicados menores, explicando fenómenos como sismicidad inducida por inyección de fluidos y terremotos naturales activados por cambios de agua subterránea.",
          de: "Erhöhter Porenfluiddruck reduziert die effektive Normalspannung auf Verwerfungsebenen nach dem Prinzip σ'n = σn - Pf, wobei effektive Normalspannung gleich Gesamtnormalspannung minus Porendruck ist. Diese Reduzierung der effektiven Spannung fördert Verwerfungsversagen bei geringeren angewandten Scherspannungen und erklärt Phänomene wie induzierte Seismizität durch Fluidinjektion und natürliche Erdbeben, die durch Grundwasseränderungen ausgelöst werden.",
          nl: "Verhoogde porievloeistofdruk vermindert de effectieve normale spanning op breukvlakken volgens het principe σ'n = σn - Pf, waarbij effectieve normale spanning gelijk is aan totale normale spanning minus poriedruk. Deze vermindering in effectieve spanning bevordert breukfalen bij lagere toegepaste schuifspanningen, wat fenomenen verklaart zoals geïnduceerde seismiciteit door vloeistofinjectie en natuurlijke aardbevingen getriggerd door grondwaterveranderingen."
        }
      },
      {
        question: {
          en: "How do paleoseismic investigations contribute to earthquake hazard assessment?",
          es: "¿Cómo contribuyen las investigaciones paleosísmicas a la evaluación de riesgos sísmicos?",
          de: "Wie tragen paläoseismische Untersuchungen zur Erdbebengefährdungsbewertung bei?",
          nl: "Hoe dragen paleoseismische onderzoeken bij aan aardbevingsrisicobeoordeling?"
        },
        options: [
          { en: "They extend earthquake records beyond historical catalogs to determine long-term recurrence patterns", es: "Extienden registros de terremotos más allá de catálogos históricos para determinar patrones de recurrencia a largo plazo", de: "Sie erweitern Erdbebenaufzeichnungen über historische Kataloge hinaus zur Bestimmung langfristiger Wiederholungsmuster", nl: "Ze breiden aardbevingsregisters uit voorbij historische catalogi om langetermijn herhalingspatronen te bepalen" },
          { en: "They only provide information about recent earthquakes", es: "Solo proporcionan información sobre terremotos recientes", de: "Sie liefern nur Informationen über jüngste Erdbeben", nl: "Ze geven alleen informatie over recente aardbevingen" },
          { en: "They measure real-time ground motion", es: "Miden movimiento del suelo en tiempo real", de: "Sie messen Bodenbewegung in Echtzeit", nl: "Ze meten real-time grondbeweging" },
          { en: "They predict exact earthquake timing", es: "Predicen el tiempo exacto de terremotos", de: "Sie sagen genaue Erdbebenzeitpunkte voraus", nl: "Ze voorspellen exacte aardbevingstiming" }
        ],
        correct: 0,
        explanation: {
          en: "Paleoseismic studies use geological evidence like fault scarps, offset landforms, and trench excavations to identify prehistoric earthquakes that occurred before written records. This extends the earthquake catalog from hundreds to thousands of years, providing crucial data on long-term recurrence intervals, maximum magnitudes, and fault behavior patterns essential for probabilistic hazard assessment.",
          es: "Los estudios paleosísmicos usan evidencia geológica como escarpas de falla, formas de tierra desplazadas y excavaciones de trincheras para identificar terremotos prehistóricos que ocurrieron antes de registros escritos. Esto extiende el catálogo de terremotos de cientos a miles de años, proporcionando datos cruciales sobre intervalos de recurrencia a largo plazo, magnitudes máximas y patrones de comportamiento de fallas esenciales para evaluación probabilística de riesgos.",
          de: "Paläoseismische Studien verwenden geologische Beweise wie Verwerfungsstufen, versetzte Landformen und Grabungsaushebungen zur Identifizierung prähistorischer Erdbeben vor schriftlichen Aufzeichnungen. Dies erweitert den Erdbebenkatalog von Hunderten auf Tausende von Jahren und liefert entscheidende Daten über langfristige Wiederholungsintervalle, Maximalmagnituden und Verwerfungsverhaltensmuster, die für probabilistische Gefährdungsbewertung wesentlich sind.",
          nl: "Paleoseismische studies gebruiken geologisch bewijs zoals breukscherpten, verschoven landvormen en sleufopgravingen om prehistorische aardbevingen te identificeren die optraden vóór geschreven records. Dit breidt de aardbevingscatalogus uit van honderden tot duizenden jaren, wat cruciale data biedt over langetermijn herhalingsintervallen, maximum magnitudes en breukgedragpatronen essentieel voor probabilistische risicobeoordeling."
        }
      },
      {
        question: {
          en: "What distinguishes volcanic earthquakes from tectonic earthquakes in seismic monitoring?",
          es: "¿Qué distingue los terremotos volcánicos de los terremotos tectónicos en el monitoreo sísmico?",
          de: "Was unterscheidet vulkanische Erdbeben von tektonischen Erdbeben in der seismischen Überwachung?",
          nl: "Wat onderscheidt vulkanische aardbevingen van tectonische aardbevingen in seismische monitoring?"
        },
        options: [
          { en: "Different frequency content, duration, and often shallower depths near volcanic centers", es: "Diferente contenido de frecuencia, duración y a menudo profundidades más someras cerca de centros volcánicos", de: "Unterschiedlicher Frequenzinhalt, Dauer und oft geringere Tiefen nahe vulkanischen Zentren", nl: "Verschillende frequentie-inhoud, duur en vaak ondiepe diepten nabij vulkanische centra" },
          { en: "Volcanic earthquakes are always stronger than tectonic ones", es: "Los terremotos volcánicos son siempre más fuertes que los tectónicos", de: "Vulkanische Erdbeben sind immer stärker als tektonische", nl: "Vulkanische aardbevingen zijn altijd sterker dan tectonische" },
          { en: "Only tectonic earthquakes generate surface waves", es: "Solo los terremotos tectónicos generan ondas superficiales", de: "Nur tektonische Erdbeben erzeugen Oberflächenwellen", nl: "Alleen tectonische aardbevingen genereren oppervlaktegolven" },
          { en: "There is no seismological difference between them", es: "No hay diferencia sismológica entre ellos", de: "Es gibt keinen seismologischen Unterschied zwischen ihnen", nl: "Er is geen seismologisch verschil tussen hen" }
        ],
        correct: 0,
        explanation: {
          en: "Volcanic earthquakes often exhibit higher frequency content (2-15 Hz), shorter durations, and occur at shallower depths compared to tectonic earthquakes. They include volcano-tectonic (VT) events from rock fracturing, long-period (LP) events from fluid movement, and tremor from sustained magma or gas transport. These characteristics help seismologists distinguish volcanic unrest from regional tectonic activity.",
          es: "Los terremotos volcánicos a menudo exhiben contenido de frecuencia más alta (2-15 Hz), duraciones más cortas y ocurren a profundidades más someras comparados con terremotos tectónicos. Incluyen eventos volcano-tectónicos (VT) de fracturación de roca, eventos de período largo (LP) de movimiento de fluidos, y tremor de transporte sostenido de magma o gas. Estas características ayudan a sismólogos a distinguir disturbios volcánicos de actividad tectónica regional.",
          de: "Vulkanische Erdbeben zeigen oft höheren Frequenzinhalt (2-15 Hz), kürzere Dauern und treten in geringeren Tiefen auf im Vergleich zu tektonischen Erdbeben. Sie umfassen vulkano-tektonische (VT) Ereignisse aus Gesteinsbruch, langperiodische (LP) Ereignisse aus Fluidbewegung und Tremor aus anhaltendem Magma- oder Gastransport. Diese Eigenschaften helfen Seismologen, vulkanische Unruhe von regionaler tektonischer Aktivität zu unterscheiden.",
          nl: "Vulkanische aardbevingen vertonen vaak hogere frequentie-inhoud (2-15 Hz), kortere duur en treden op geringere diepten op vergeleken met tectonische aardbevingen. Ze omvatten vulcano-tectonische (VT) gebeurtenissen van gesteentebreuk, lange-periode (LP) gebeurtenissen van vloeistofbeweging, en tremor van aanhoudend magma- of gastransport. Deze kenmerken helpen seismologen onderscheid te maken tussen vulkanische onrust en regionale tectonische activiteit."
        }
      },
      {
        question: {
          en: "How does seismic anisotropy provide information about mantle flow and deformation?",
          es: "¿Cómo proporciona la anisotropía sísmica información sobre flujo y deformación del manto?",
          de: "Wie liefert seismische Anisotropie Informationen über Mantelströmung und Verformung?",
          nl: "Hoe biedt seismische anisotropie informatie over mantelstroming en vervorming?"
        },
        options: [
          { en: "Shear wave splitting reveals preferred mineral orientations aligned with flow directions", es: "División de ondas de cizalla revela orientaciones minerales preferidas alineadas con direcciones de flujo", de: "Scherwellen-Aufspaltung zeigt bevorzugte Mineralorientierungen entlang Strömungsrichtungen", nl: "Schuifgolf splitsing onthult voorkeursoriëntaties van mineralen uitgelijnd met stromingsrichtingen" },
          { en: "Anisotropy only affects P-wave velocities", es: "La anisotropía solo afecta velocidades de ondas P", de: "Anisotropie beeinflusst nur P-Wellen-Geschwindigkeiten", nl: "Anisotropie beïnvloedt alleen P-golf snelheden" },
          { en: "Seismic anisotropy is caused by temperature variations only", es: "La anisotropía sísmica es causada solo por variaciones de temperatura", de: "Seismische Anisotropie wird nur durch Temperaturvariationen verursacht", nl: "Seismische anisotropie wordt alleen veroorzaakt door temperatuurvariaties" },
          { en: "Anisotropy measurements are impossible in the mantle", es: "Las mediciones de anisotropía son imposibles en el manto", de: "Anisotropie-Messungen sind im Mantel unmöglich", nl: "Anisotropie metingen zijn onmogelijk in de mantel" }
        ],
        correct: 0,
        explanation: {
          en: "Seismic anisotropy, particularly shear wave splitting, occurs when seismic waves travel through regions with preferred crystal orientations. In the mantle, minerals like olivine align their fastest axes parallel to flow directions under deformation. This creates directional velocity variations that split shear waves into fast and slow components, providing direct information about mantle flow patterns and deformation history.",
          es: "La anisotropía sísmica, particularmente la división de ondas de cizalla, ocurre cuando las ondas sísmicas viajan a través de regiones con orientaciones cristalinas preferidas. En el manto, minerales como olivino alinean sus ejes más rápidos paralelos a direcciones de flujo bajo deformación. Esto crea variaciones direccionales de velocidad que dividen ondas de cizalla en componentes rápidos y lentos, proporcionando información directa sobre patrones de flujo del manto e historia de deformación.",
          de: "Seismische Anisotropie, besonders Scherwellen-Aufspaltung, tritt auf, wenn seismische Wellen durch Regionen mit bevorzugten Kristallorientierungen reisen. Im Mantel richten Minerale wie Olivin ihre schnellsten Achsen parallel zu Strömungsrichtungen unter Verformung aus. Dies erzeugt richtungsabhängige Geschwindigkeitsvariationen, die Scherwellen in schnelle und langsame Komponenten aufspalten und direkte Information über Mantelströmungsmuster und Verformungsgeschichte liefern.",
          nl: "Seismische anisotropie, vooral schuifgolf splitsing, treedt op wanneer seismische golven door gebieden met voorkeuskristaloriëntaties reizen. In de mantel richten mineralen zoals olivijn hun snelste assen parallel aan stromingsrichtingen onder vervorming. Dit creëert directionele snelheidsvariaties die schuifgolven splitsen in snelle en langzame componenten, wat directe informatie biedt over mantelstromingspatronen en vervormingsgeschiedenis."
        }
      },
      {
        question: {
          en: "What role do ocean bottom seismometers play in global earthquake monitoring?",
          es: "¿Qué papel juegan los sismómetros del fondo oceánico en el monitoreo global de terremotos?",
          de: "Welche Rolle spielen Ozeanboden-Seismometer in der globalen Erdbebenüberwachung?",
          nl: "Welke rol spelen oceaanbodem seismometers in globale aardbevingsmonitoring?"
        },
        options: [
          { en: "They provide better detection of oceanic earthquakes and improve global network coverage", es: "Proporcionan mejor detección de terremotos oceánicos y mejoran la cobertura de red global", de: "Sie bieten bessere Erkennung ozeanischer Erdbeben und verbessern globale Netzwerkabdeckung", nl: "Ze bieden betere detectie van oceanische aardbevingen en verbeteren globale netwerkdekking" },
          { en: "They only measure ocean currents", es: "Solo miden corrientes oceánicas", de: "Sie messen nur Meeresströmungen", nl: "Ze meten alleen oceaanstromingen" },
          { en: "They are less sensitive than land-based instruments", es: "Son menos sensibles que instrumentos terrestres", de: "Sie sind weniger empfindlich als landbasierte Instrumente", nl: "Ze zijn minder gevoelig dan langebaseerde instrumenten" },
          { en: "They cannot detect P-waves in oceanic environment", es: "No pueden detectar ondas P en ambiente oceánico", de: "Sie können keine P-Wellen in ozeanischer Umgebung erkennen", nl: "Ze kunnen geen P-golven detecteren in oceanische omgeving" }
        ],
        correct: 0,
        explanation: {
          en: "Ocean bottom seismometers (OBS) are crucial for monitoring earthquakes beneath the oceans, where most of Earth's seismic activity occurs along mid-ocean ridges and subduction zones. They significantly improve detection capabilities for oceanic earthquakes, provide better azimuthal coverage for global networks, and enable more accurate earthquake locations and magnitude determinations in marine environments.",
          es: "Los sismómetros del fondo oceánico (OBS) son cruciales para monitorear terremotos debajo de los océanos, donde la mayoría de la actividad sísmica terrestre ocurre a lo largo de dorsales oceánicas y zonas de subducción. Mejoran significativamente las capacidades de detección de terremotos oceánicos, proporcionan mejor cobertura acimutal para redes globales, y permiten ubicaciones de terremotos más precisas y determinaciones de magnitud en ambientes marinos.",
          de: "Ozeanboden-Seismometer (OBS) sind entscheidend für die Überwachung von Erdbeben unter den Ozeanen, wo die meiste seismische Aktivität der Erde entlang mittelozeanischer Rücken und Subduktionszonen auftritt. Sie verbessern erheblich die Erkennungsfähigkeiten für ozeanische Erdbeben, bieten bessere azimutale Abdeckung für globale Netzwerke und ermöglichen genauere Erdbebenortungen und Magnitudenbestimmungen in marinen Umgebungen.",
          nl: "Oceaanbodem seismometers (OBS) zijn cruciaal voor het monitoren van aardbevingen onder de oceanen, waar het meeste van de aardse seismische activiteit optreedt langs mid-oceanische ruggen en subductiezones. Ze verbeteren aanzienlijk detectiecapaciteiten voor oceanische aardbevingen, bieden betere azimutale dekking voor globale netwerken, en maken nauwkeuriger aardbevingslocaties en magnitudebepalingen mogelijk in mariene omgevingen."
        }
      },
      {
        question: {
          en: "How do seismologists quantify earthquake rupture directivity effects?",
          es: "¿Cómo cuantifican los sismólogos los efectos de directividad de ruptura de terremotos?",
          de: "Wie quantifizieren Seismologen Erdbebenbruch-Direktivitätseffekte?",
          nl: "Hoe kwantificeren seismologen aardbevingsbreuk directiviteitseffecten?"
        },
        options: [
          { en: "Through analysis of azimuthal variations in pulse duration and peak ground motion amplitudes", es: "A través de análisis de variaciones azimutales en duración de pulso y amplitudes de movimiento pico del suelo", de: "Durch Analyse azimutaler Variationen in Pulsdauer und Spitzenbodenbewegungs-Amplituden", nl: "Door analyse van azimutale variaties in pulsduur en piekgrondbeweging amplitudes" },
          { en: "Only by measuring total seismic moment", es: "Solo midiendo momento sísmico total", de: "Nur durch Messung des Gesamtmoments", nl: "Alleen door meting van totaal seismisch moment" },
          { en: "Through surface wave analysis only", es: "Solo a través de análisis de ondas superficiales", de: "Nur durch Oberflächenwellen-Analyse", nl: "Alleen door oppervlaktegolf analyse" },
          { en: "Directivity cannot be measured seismologically", es: "La directividad no puede medirse sismológicamente", de: "Direktivität kann seismologisch nicht gemessen werden", nl: "Directiviteit kan niet seismologisch gemeten worden" }
        ],
        correct: 0,
        explanation: {
          en: "Rupture directivity creates systematic azimuthal variations in seismic waveforms. In the forward rupture direction, constructive interference produces shorter, higher-amplitude pulses due to Doppler-like effects. In the backward direction, destructive interference creates longer, lower-amplitude signals. Seismologists quantify these effects by analyzing pulse durations and peak amplitudes as functions of azimuth relative to the fault strike.",
          es: "La directividad de ruptura crea variaciones azimutales sistemáticas en formas de onda sísmicas. En la dirección de ruptura hacia adelante, la interferencia constructiva produce pulsos más cortos y de mayor amplitud debido a efectos tipo Doppler. En la dirección hacia atrás, la interferencia destructiva crea señales más largas y de menor amplitud. Los sismólogos cuantifican estos efectos analizando duraciones de pulso y amplitudes pico como funciones del azimut relativo al rumbo de falla.",
          de: "Bruchrichtungsabhängigkeit erzeugt systematische azimutale Variationen in seismischen Wellenformen. In Vorwärts-Bruchrichtung produziert konstruktive Interferenz kürzere, höheramplitudige Pulse aufgrund Doppler-ähnlicher Effekte. In Rückwärtsrichtung erzeugt destruktive Interferenz längere, niedrigamplitudige Signale. Seismologen quantifizieren diese Effekte durch Analyse von Pulsdauern und Spitzenamplituden als Funktionen des Azimuts relativ zum Verwerfungsstreichen.",
          nl: "Breukdirectiviteit creëert systematische azimutale variaties in seismische golfvormen. In de voorwaartse breukrichting produceert constructieve interferentie kortere, hogere-amplitude pulsen door Doppler-achtige effecten. In de achterwaartse richting creëert destructieve interferentie langere, lagere-amplitude signalen. Seismologen kwantificeren deze effecten door analyse van pulsduur en piekamplitudes als functies van azimut relatief tot de breukrichting."
        }
      },
      {
        question: {
          en: "What causes the phenomenon of seismic wave dispersion in surface waves?",
          es: "¿Qué causa el fenómeno de dispersión de ondas sísmicas en ondas superficiales?",
          de: "Was verursacht das Phänomen der seismischen Wellendispersion in Oberflächenwellen?",
          nl: "Wat veroorzaakt het fenomeen van seismische golfdispersie in oppervlaktegolven?"
        },
        options: [
          { en: "Different wavelengths sample different depths and velocity structures", es: "Diferentes longitudes de onda muestrean diferentes profundidades y estructuras de velocidad", de: "Verschiedene Wellenlängen erfassen unterschiedliche Tiefen und Geschwindigkeitsstrukturen", nl: "Verschillende golflengten bemonsteren verschillende diepten en snelheidsstructuren" },
          { en: "All surface waves travel at the same speed", es: "Todas las ondas superficiales viajan a la misma velocidad", de: "Alle Oberflächenwellen reisen mit derselben Geschwindigkeit", nl: "Alle oppervlaktegolven reizen met dezelfde snelheid" },
          { en: "Dispersion only occurs in body waves", es: "La dispersión solo ocurre en ondas de cuerpo", de: "Dispersion tritt nur in Raumwellen auf", nl: "Dispersie treedt alleen op in ruimtegolven" },
          { en: "Temperature variations in the atmosphere", es: "Variaciones de temperatura en la atmósfera", de: "Temperaturvariationen in der Atmosphäre", nl: "Temperatuurvariaties in de atmosfeer" }
        ],
        correct: 0,
        explanation: {
          en: "Surface wave dispersion occurs because different wavelengths (frequencies) penetrate to different depths in the Earth. Longer wavelengths sample deeper, typically faster layers, while shorter wavelengths are more influenced by shallow, often slower layers. This depth-dependent sampling creates frequency-dependent velocities, causing wave packets to spread out over time and distance.",
          es: "La dispersión de ondas superficiales ocurre porque diferentes longitudes de onda (frecuencias) penetran a diferentes profundidades en la Tierra. Longitudes de onda más largas muestrean capas más profundas y típicamente más rápidas, mientras que longitudes de onda más cortas son más influenciadas por capas superficiales, a menudo más lentas. Este muestreo dependiente de profundidad crea velocidades dependientes de frecuencia, causando que paquetes de ondas se dispersen con el tiempo y la distancia.",
          de: "Oberflächenwellen-Dispersion tritt auf, weil verschiedene Wellenlängen (Frequenzen) in verschiedene Tiefen der Erde eindringen. Längere Wellenlängen erfassen tiefere, typisch schnellere Schichten, während kürzere Wellenlängen mehr von oberflächlichen, oft langsameren Schichten beeinflusst werden. Diese tiefenabhängige Erfassung erzeugt frequenzabhängige Geschwindigkeiten und verursacht Ausbreitung der Wellenpakete über Zeit und Distanz.",
          nl: "Oppervlaktegolf dispersie treedt op omdat verschillende golflengten (frequenties) tot verschillende diepten in de aarde doordringen. Langere golflengten bemonsteren diepere, typisch snellere lagen, terwijl kortere golflengten meer beïnvloed worden door ondiepe, vaak langzamere lagen. Deze diepte-afhankelijke bemonstering creëert frequentie-afhankelijke snelheden, waardoor golfpakketten zich over tijd en afstand uitspreiden."
        }
      },
      {
        question: {
          en: "What is the seismological evidence for the existence of ultra-low velocity zones (ULVZs)?",
          es: "¿Cuál es la evidencia sismológica para la existencia de zonas de velocidad ultra-baja (ULVZs)?",
          de: "Was ist der seismologische Beweis für die Existenz von Ultra-Niedriggeschwindigkeitszonen (ULVZs)?",
          nl: "Wat is het seismologische bewijs voor het bestaan van ultra-lage snelheids zones (ULVZs)?"
        },
        options: [
          { en: "Anomalous travel times and waveform complexities in core-reflected phases", es: "Tiempos de viaje anómalos y complejidades de forma de onda en fases reflejadas del núcleo", de: "Anomale Laufzeiten und Wellenformkomplexitäten in kernreflektierten Phasen", nl: "Anomalous reistijden en golfvormcomplexiteiten in kern-gereflecteerde fasen" },
          { en: "Higher than normal seismic velocities near the surface", es: "Velocidades sísmicas más altas que lo normal cerca de la superficie", de: "Höher als normale seismische Geschwindigkeiten nahe der Oberfläche", nl: "Hogere dan normale seismische snelheden nabij het oppervlak" },
          { en: "Complete absence of seismic waves", es: "Ausencia completa de ondas sísmicas", de: "Vollständiges Fehlen seismischer Wellen", nl: "Volledige afwezigheid van seismische golven" },
          { en: "Only surface wave measurements", es: "Solo mediciones de ondas superficiales", de: "Nur Oberflächenwellen-Messungen", nl: "Alleen oppervlaktegolf metingen" }
        ],
        correct: 0,
        explanation: {
          en: "ULVZs at the core-mantle boundary are detected through anomalous travel times and complex waveforms in seismic phases that interact with the deep mantle, particularly core-reflected phases like ScS and PcP. These thin layers (5-40 km thick) show velocity reductions of 10-30% and create distinctive seismic signatures including pre-cursor arrivals and increased attenuation.",
          es: "Las ULVZs en el límite núcleo-manto se detectan a través de tiempos de viaje anómalos y formas de onda complejas en fases sísmicas que interactúan con el manto profundo, particularmente fases reflejadas del núcleo como ScS y PcP. Estas capas delgadas (5-40 km de grosor) muestran reducciones de velocidad del 10-30% y crean firmas sísmicas distintivas incluyendo llegadas precursoras y atenuación aumentada.",
          de: "ULVZs an der Kern-Mantel-Grenze werden durch anomale Laufzeiten und komplexe Wellenformen in seismischen Phasen erkannt, die mit dem tiefen Mantel interagieren, besonders kernreflektierte Phasen wie ScS und PcP. Diese dünnen Schichten (5-40 km dick) zeigen Geschwindigkeitsreduktionen von 10-30% und erzeugen charakteristische seismische Signaturen einschließlich Vorläuferankunften und erhöhter Dämpfung.",
          nl: "ULVZs aan de kern-mantel grens worden gedetecteerd door anomale reistijden en complexe golfvormen in seismische fasen die interageren met de diepe mantel, vooral kern-gereflecteerde fasen zoals ScS en PcP. Deze dunne lagen (5-40 km dik) tonen snelheidsreducties van 10-30% en creëren onderscheidende seismische signaturen inclusief voorloper aankomsten en verhoogde verzwakking."
        }
      },
      {
        question: {
          en: "How do induced earthquakes from hydraulic fracturing differ from natural seismicity?",
          es: "¿Cómo difieren los terremotos inducidos por fracturación hidráulica de la sismicidad natural?",
          de: "Wie unterscheiden sich durch hydraulisches Aufbrechen induzierte Erdbeben von natürlicher Seismizität?",
          nl: "Hoe verschillen geïnduceerde aardbevingen door hydraulische breking van natuurlijke seismiciteit?"
        },
        options: [
          { en: "They typically show temporal clustering with injection operations and different magnitude-frequency distributions", es: "Típicamente muestran agrupamiento temporal con operaciones de inyección y distribuciones diferentes de magnitud-frecuencia", de: "Sie zeigen typisch zeitliche Clusterbildung mit Injektionsbetrieben und unterschiedliche Magnitude-Frequenz-Verteilungen", nl: "Ze tonen typisch temporele clustering met injectieoperaties en verschillende magnitude-frequentie verdelingen" },
          { en: "They always have higher magnitudes than natural earthquakes", es: "Siempre tienen magnitudes más altas que terremotos naturales", de: "Sie haben immer höhere Magnituden als natürliche Erdbeben", nl: "Ze hebben altijd hogere magnitudes dan natuurlijke aardbevingen" },
          { en: "They only occur at great depths", es: "Solo ocurren a grandes profundidades", de: "Sie treten nur in großen Tiefen auf", nl: "Ze treden alleen op grote diepten op" },
          { en: "They cannot be distinguished seismologically", es: "No pueden distinguirse sismológicamente", de: "Sie können seismologisch nicht unterschieden werden", nl: "Ze kunnen niet seismologisch onderscheiden worden" }
        ],
        correct: 0,
        explanation: {
          en: "Induced earthquakes from hydraulic fracturing typically exhibit distinct characteristics: temporal correlation with injection operations, spatial clustering around injection sites, often shallower depths corresponding to injection intervals, and different b-values (magnitude-frequency distributions) compared to natural seismicity. They may also show different stress drop values and focal mechanism orientations reflecting local stress perturbations.",
          es: "Los terremotos inducidos por fracturación hidráulica típicamente exhiben características distintas: correlación temporal con operaciones de inyección, agrupamiento espacial alrededor de sitios de inyección, a menudo profundidades más someras correspondientes a intervalos de inyección, y valores b diferentes (distribuciones magnitud-frecuencia) comparados con sismicidad natural. También pueden mostrar diferentes valores de caída de esfuerzo y orientaciones de mecanismo focal reflejando perturbaciones de esfuerzo local.",
          de: "Durch hydraulisches Aufbrechen induzierte Erdbeben zeigen typisch charakteristische Eigenschaften: zeitliche Korrelation mit Injektionsbetrieben, räumliche Clusterbildung um Injektionsstellen, oft geringere Tiefen entsprechend Injektionsintervallen, und unterschiedliche b-Werte (Magnitude-Frequenz-Verteilungen) im Vergleich zu natürlicher Seismizität. Sie können auch unterschiedliche Spannungsabfall-Werte und Herdmechanismus-Orientierungen zeigen, die lokale Spannungsstörungen widerspiegeln.",
          nl: "Geïnduceerde aardbevingen door hydraulische breking vertonen typisch onderscheidende kenmerken: temporele correlatie met injectieoperaties, ruimtelijke clustering rond injectiesites, vaak ondiepe diepten corresponderend met injectie-intervallen, en verschillende b-waarden (magnitude-frequentie verdelingen) vergeleken met natuurlijke seismiciteit. Ze kunnen ook verschillende spanningsval waarden en focaalmechanisme oriëntaties tonen die lokale spanningsverstoringen weerspiegelen."
        }
      },
      {
        question: {
          en: "What is the significance of the seismic moment tensor in earthquake source characterization?",
          es: "¿Cuál es la importancia del tensor de momento sísmico en la caracterización de fuentes de terremotos?",
          de: "Was ist die Bedeutung des seismischen Momenttensors in der Erdbebenquellencharakterisierung?",
          nl: "Wat is de betekenis van de seismische momenttensor in aardbevingsbronkarakterisering?"
        },
        options: [
          { en: "It provides complete mathematical description of earthquake source geometry and slip direction", es: "Proporciona descripción matemática completa de geometría de fuente de terremoto y dirección de deslizamiento", de: "Er bietet vollständige mathematische Beschreibung der Erdbebenquellengeometrie und Verschiebungsrichtung", nl: "Het biedt volledige wiskundige beschrijving van aardbevingsbrongeometrie en schuifrichting" },
          { en: "It only measures earthquake magnitude", es: "Solo mide magnitud de terremotos", de: "Er misst nur Erdbebenmagnitude", nl: "Het meet alleen aardbevingsmagnitude" },
          { en: "It determines earthquake prediction accuracy", es: "Determina precisión de predicción de terremotos", de: "Er bestimmt Erdbebenvorhersagegenauigkeit", nl: "Het bepaalt aardbevingsvoorspellingsnauwkeurigheid" },
          { en: "It measures seismic wave attenuation", es: "Mide atenuación de ondas sísmicas", de: "Er misst seismische Wellendämpfung", nl: "Het meet seismische golfverzwakking" }
        ],
        correct: 0,
        explanation: {
          en: "The seismic moment tensor is a 3x3 symmetric matrix that completely describes the earthquake source in terms of equivalent force couples. It contains information about fault orientation (strike, dip), slip direction (rake), and seismic moment magnitude. The tensor can be decomposed into double-couple, CLVD (compensated linear vector dipole), and isotropic components, providing insights into fault geometry and rupture mechanics.",
          es: "El tensor de momento sísmico es una matriz simétrica 3x3 que describe completamente la fuente del terremoto en términos de pares de fuerzas equivalentes. Contiene información sobre orientación de falla (rumbo, buzamiento), dirección de deslizamiento (rake), y magnitud de momento sísmico. El tensor puede descomponerse en componentes de doble-par, CLVD (dipolo vectorial lineal compensado), e isotrópico, proporcionando conocimientos sobre geometría de falla y mecánica de ruptura.",
          de: "Der seismische Momenttensor ist eine symmetrische 3x3-Matrix, die die Erdbebenquelle vollständig in Form äquivalenter Kraftpaare beschreibt. Er enthält Informationen über Verwerfungsorientierung (Streichen, Einfallen), Verschiebungsrichtung (Rake) und seismische Momentmagnitude. Der Tensor kann in Doppelpaar-, CLVD (kompensierter linearer Vektordipol)- und isotrope Komponenten zerlegt werden und bietet Einblicke in Verwerfungsgeometrie und Bruchmechanik.",
          nl: "De seismische momenttensor is een 3x3 symmetrische matrix die de aardbevingsbron volledig beschrijft in termen van equivalente krachtkoppels. Het bevat informatie over breukoriëntatie (strijken, duiken), schuifrichting (rake), en seismische momentmagnitude. De tensor kan worden ontleed in dubbel-koppel, CLVD (gecompenseerde lineaire vectordipool), en isotrope componenten, wat inzicht biedt in breukgeometrie en breekmechanica."
        }
      },
      {
        question: {
          en: "How do seismologists use receiver functions to study crustal and mantle structure?",
          es: "¿Cómo usan los sismólogos funciones de receptor para estudiar estructura de corteza y manto?",
          de: "Wie verwenden Seismologen Empfängerfunktionen zur Untersuchung von Krusten- und Mantelstruktur?",
          nl: "Hoe gebruiken seismologen ontvanger functies om korst- en mantelstructuur te bestuderen?"
        },
        options: [
          { en: "They analyze P-to-S converted phases at discontinuities to map velocity boundaries", es: "Analizan fases convertidas de P a S en discontinuidades para mapear límites de velocidad", de: "Sie analysieren P-zu-S-konvertierte Phasen an Diskontinuitäten zur Kartierung von Geschwindigkeitsgrenzen", nl: "Ze analyseren P-naar-S geconverteerde fasen bij discontinuïteiten om snelheidsgrenzen in kaart te brengen" },
          { en: "They only measure surface wave dispersion", es: "Solo miden dispersión de ondas superficiales", de: "Sie messen nur Oberflächenwellen-Dispersion", nl: "Ze meten alleen oppervlaktegolf dispersie" },
          { en: "They analyze earthquake magnitudes only", es: "Solo analizan magnitudes de terremotos", de: "Sie analysieren nur Erdbebenmagnitudes", nl: "Ze analyseren alleen aardbevingsmagnitudes" },
          { en: "They measure atmospheric pressure variations", es: "Miden variaciones de presión atmosférica", de: "Sie messen atmosphärische Druckvariationen", nl: "Ze meten atmosferische drukvariaties" }
        ],
        correct: 0,
        explanation: {
          en: "Receiver function analysis isolates P-to-S converted phases generated when teleseismic P-waves encounter velocity discontinuities beneath seismic stations. The timing and amplitude of these converted phases (Ps, PpPs, PsPs) provide information about discontinuity depths, velocity contrasts, and structural variations. This technique is particularly effective for mapping Moho depth, crustal layering, and mantle transition zone structure.",
          es: "El análisis de funciones de receptor aísla fases convertidas de P a S generadas cuando ondas P telesísmicas encuentran discontinuidades de velocidad debajo de estaciones sísmicas. El tiempo y amplitud de estas fases convertidas (Ps, PpPs, PsPs) proporcionan información sobre profundidades de discontinuidad, contrastes de velocidad y variaciones estructurales. Esta técnica es particularmente efectiva para mapear profundidad del Moho, estratificación cortical y estructura de zona de transición del manto.",
          de: "Empfängerfunktions-Analyse isoliert P-zu-S-konvertierte Phasen, die entstehen, wenn teleseismische P-Wellen auf Geschwindigkeitsdiskontinuitäten unter seismischen Stationen treffen. Zeitpunkt und Amplitude dieser konvertierten Phasen (Ps, PpPs, PsPs) liefern Informationen über Diskontinuitätstiefen, Geschwindigkeitskontraste und strukturelle Variationen. Diese Technik ist besonders effektiv zur Kartierung der Moho-Tiefe, Krustenschichtung und Mantelübergangszonenstruktur.",
          nl: "Ontvanger functie analyse isoleert P-naar-S geconverteerde fasen gegenereerd wanneer teleseismische P-golven snelheidsdiscontinuïteiten onder seismische stations tegenkomen. De timing en amplitude van deze geconverteerde fasen (Ps, PpPs, PsPs) bieden informatie over discontinuïteitsdiepten, snelheidscontrasten en structurele variaties. Deze techniek is bijzonder effectief voor het in kaart brengen van Moho diepte, korstgelaagdheid en mantel overgangszone structuur."
        }
      },
      {
        question: {
          en: "What causes the phenomenon of earthquake swarms and how do they differ from mainshock-aftershock sequences?",
          es: "¿Qué causa el fenómeno de enjambres de terremotos y cómo difieren de secuencias de choque principal-replicas?",
          de: "Was verursacht das Phänomen von Erdbebenschwärmen und wie unterscheiden sie sich von Hauptbeben-Nachbeben-Sequenzen?",
          nl: "Wat veroorzaakt het fenomeen van aardbevingszwermen en hoe verschillen ze van hoofdschok-naschok sequenties?"
        },
        options: [
          { en: "Fluid migration or magma intrusion causing distributed stress changes without a dominant mainshock", es: "Migración de fluidos o intrusión de magma causando cambios de esfuerzo distribuidos sin un choque principal dominante", de: "Fluidmigration oder Magmaintrusion verursacht verteilte Spannungsänderungen ohne dominantes Hauptbeben", nl: "Vloeistofmigratie of magma-intrusie veroorzaakt verspreide spanningsveranderingen zonder dominante hoofdschok" },
          { en: "They are identical to mainshock-aftershock sequences", es: "Son idénticos a secuencias de choque principal-replicas", de: "Sie sind identisch mit Hauptbeben-Nachbeben-Sequenzen", nl: "Ze zijn identiek aan hoofdschok-naschok sequenties" },
          { en: "Swarms always have larger magnitudes", es: "Los enjambres siempre tienen magnitudes mayores", de: "Schwärme haben immer größere Magnituden", nl: "Zwermen hebben altijd grotere magnitudes" },
          { en: "Swarms only occur in oceanic regions", es: "Los enjambres solo ocurren en regiones oceánicas", de: "Schwärme treten nur in ozeanischen Regionen auf", nl: "Zwermen treden alleen op in oceanische regio's" }
        ],
        correct: 0,
        explanation: {
          en: "Earthquake swarms are characterized by a lack of a clear mainshock and relatively similar magnitudes among events. They're often triggered by fluid migration (groundwater, magmatic fluids, or CO2), magma intrusion, or slow slip events that create distributed stress changes. Unlike mainshock-aftershock sequences that follow Omori's law decay, swarms may show irregular temporal patterns and can continue for extended periods without clear magnitude hierarchy.",
          es: "Los enjambres de terremotos se caracterizan por la falta de un choque principal claro y magnitudes relativamente similares entre eventos. A menudo son activados por migración de fluidos (agua subterránea, fluidos magmáticos, o CO2), intrusión de magma, o eventos de deslizamiento lento que crean cambios de esfuerzo distribuidos. A diferencia de secuencias choque principal-replicas que siguen decaimiento de ley de Omori, los enjambres pueden mostrar patrones temporales irregulares y pueden continuar por períodos extendidos sin jerarquía clara de magnitud.",
          de: "Erdbebenschwärme sind durch das Fehlen eines klaren Hauptbebens und relativ ähnliche Magnituden zwischen Ereignissen charakterisiert. Sie werden oft durch Fluidmigration (Grundwasser, magmatische Fluide oder CO2), Magmaintrusion oder langsame Gleitereignisse ausgelöst, die verteilte Spannungsänderungen erzeugen. Im Gegensatz zu Hauptbeben-Nachbeben-Sequenzen, die Omoris Gesetz-Abklingen folgen, können Schwärme unregelmäßige zeitliche Muster zeigen und über längere Zeiträume ohne klare Magnitudenhierarchie fortsetzen.",
          nl: "Aardbevingszwermen worden gekenmerkt door het ontbreken van een duidelijke hoofdschok en relatief gelijkaardige magnitudes tussen gebeurtenissen. Ze worden vaak getriggerd door vloeistofmigratie (grondwater, magmatische vloeistoffen, of CO2), magma-intrusie, of langzame schuifgebeurtenissen die verspreide spanningsveranderingen creëren. Anders dan hoofdschok-naschok sequenties die Omori's wet verval volgen, kunnen zwermen onregelmatige temporele patronen tonen en kunnen doorgaan voor uitgebreide perioden zonder duidelijke magnitude hiërarchie."
        }
      },
      {
        question: {
          en: "How do seismologists determine the rupture velocity of earthquake faults?",
          es: "¿Cómo determinan los sismólogos la velocidad de ruptura de fallas de terremotos?",
          de: "Wie bestimmen Seismologen die Bruchgeschwindigkeit von Erdbebenverwerfungen?",
          nl: "Hoe bepalen seismologen de breuksnelheid van aardbevingsbreuken?"
        },
        options: [
          { en: "Through directivity analysis and finite fault modeling of seismic waveforms", es: "A través de análisis de directividad y modelado de falla finita de formas de onda sísmicas", de: "Durch Direktivitäts-Analyse und endliche Verwerfungsmodellierung seismischer Wellenformen", nl: "Door directiviteitsanalyse en eindige breukmodellering van seismische golfvormen" },
          { en: "Only through GPS measurements", es: "Solo a través de mediciones GPS", de: "Nur durch GPS-Messungen", nl: "Alleen door GPS metingen" },
          { en: "By measuring P-wave arrival times only", es: "Solo midiendo tiempos de llegada de ondas P", de: "Nur durch Messung von P-Wellen-Ankunftszeiten", nl: "Door alleen P-golf aankomsttijden te meten" },
          { en: "Rupture velocity cannot be determined", es: "La velocidad de ruptura no puede determinarse", de: "Bruchgeschwindigkeit kann nicht bestimmt werden", nl: "Breuksnelheid kan niet bepaald worden" }
        ],
        correct: 0,
        explanation: {
          en: "Rupture velocity is determined through several methods: directivity analysis (examining azimuthal variations in pulse duration and amplitude), finite fault modeling (fitting observed waveforms with rupture models), and analysis of high-frequency radiation patterns. These techniques typically show rupture velocities ranging from 70-90% of the shear wave velocity, with variations depending on fault type, stress conditions, and rupture dynamics.",
          es: "La velocidad de ruptura se determina a través de varios métodos: análisis de directividad (examinando variaciones azimutales en duración de pulso y amplitud), modelado de falla finita (ajustando formas de onda observadas con modelos de ruptura), y análisis de patrones de radiación de alta frecuencia. Estas técnicas típicamente muestran velocidades de ruptura variando del 70-90% de la velocidad de ondas de cizalla, con variaciones dependiendo del tipo de falla, condiciones de esfuerzo, y dinámica de ruptura.",
          de: "Bruchgeschwindigkeit wird durch mehrere Methoden bestimmt: Direktivitäts-Analyse (Untersuchung azimutaler Variationen in Pulsdauer und Amplitude), endliche Verwerfungsmodellierung (Anpassung beobachteter Wellenformen mit Bruchmodellen), und Analyse hochfrequenter Strahlungsmuster. Diese Techniken zeigen typisch Bruchgeschwindigkeiten von 70-90% der Scherwellengeschwindigkeit, mit Variationen abhängig von Verwerfungstyp, Spannungsbedingungen und Bruchdynamik.",
          nl: "Breuksnelheid wordt bepaald door verschillende methoden: directiviteitsanalyse (onderzoek van azimutale variaties in pulsduur en amplitude), eindige breukmodellering (aanpassing van waargenomen golfvormen met breukmodellen), en analyse van hoogfrequente stralingspatronen. Deze technieken tonen typisch breuksnelheden variërend van 70-90% van de schuifgolfsnelheid, met variaties afhankelijk van breuktype, spanningsomstandigheden en breukdynamica."
        }
      },
      {
        question: {
          en: "What is the significance of the free oscillations of the Earth in global seismology?",
          es: "¿Cuál es la importancia de las oscilaciones libres de la Tierra en sismología global?",
          de: "Was ist die Bedeutung der freien Schwingungen der Erde in der globalen Seismologie?",
          nl: "Wat is de betekenis van de vrije oscillaties van de aarde in globale seismologie?"
        },
        options: [
          { en: "They provide constraints on Earth's internal structure and elastic properties through normal mode analysis", es: "Proporcionan restricciones sobre estructura interna de la Tierra y propiedades elásticas a través de análisis de modo normal", de: "Sie liefern Beschränkungen für Erdinnere Struktur und elastische Eigenschaften durch Normalmoden-Analyse", nl: "Ze bieden beperkingen op de interne structuur en elastische eigenschappen van de aarde door normale modus analyse" },
          { en: "They only occur during small earthquakes", es: "Solo ocurren durante terremotos pequeños", de: "Sie treten nur bei kleinen Erdbeben auf", nl: "Ze treden alleen op tijdens kleine aardbevingen" },
          { en: "They have no relationship to earthquake sources", es: "No tienen relación con fuentes de terremotos", de: "Sie haben keine Beziehung zu Erdbebenquellen", nl: "Ze hebben geen relatie met aardbevingsbronnen" },
          { en: "They can only be observed at the surface", es: "Solo pueden observarse en la superficie", de: "Sie können nur an der Oberfläche beobachtet werden", nl: "Ze kunnen alleen aan het oppervlak waargenomen worden" }
        ],
        correct: 0,
        explanation: {
          en: "Free oscillations are standing wave resonances of the entire Earth, excited by large earthquakes (M>7). These normal modes include spheroidal modes (involving P-SV motion) and toroidal modes (involving SH motion). Analysis of their frequencies, quality factors, and splitting patterns provides fundamental constraints on Earth's density, elastic moduli, attenuation structure, rotation, and even lateral heterogeneity throughout the planet.",
          es: "Las oscilaciones libres son resonancias de ondas estacionarias de toda la Tierra, excitadas por terremotos grandes (M>7). Estos modos normales incluyen modos esferoidales (involucrando movimiento P-SV) y modos toroidales (involucrando movimiento SH). El análisis de sus frecuencias, factores de calidad y patrones de división proporciona restricciones fundamentales sobre densidad terrestre, módulos elásticos, estructura de atenuación, rotación, e incluso heterogeneidad lateral a través del planeta.",
          de: "Freie Schwingungen sind stehende Wellenresonanzen der gesamten Erde, angeregt durch große Erdbeben (M>7). Diese Normalmoden umfassen sphäroidale Modi (mit P-SV-Bewegung) und toroidale Modi (mit SH-Bewegung). Analyse ihrer Frequenzen, Qualitätsfaktoren und Aufspaltungsmuster liefert fundamentale Beschränkungen für Erddichte, elastische Moduli, Dämpfungsstruktur, Rotation und sogar laterale Heterogenität im gesamten Planeten.",
          nl: "Vrije oscillaties zijn staande golfresonanties van de hele aarde, opgewekt door grote aardbevingen (M>7). Deze normale modi omvatten sferoidale modi (met P-SV beweging) en toroidale modi (met SH beweging). Analyse van hun frequenties, kwaliteitsfactoren en splitsingspatronen biedt fundamentele beperkingen op aarddichtheid, elastische moduli, verzwakkingsstructuur, rotatie, en zelfs laterale heterogeniteit door de gehele planeet."
        }
      },
      {
        question: {
          en: "How do tsunami earthquakes differ from regular earthquakes in their seismological characteristics?",
          es: "¿Cómo difieren los terremotos tsunamigénicos de terremotos regulares en sus características sismológicas?",
          de: "Wie unterscheiden sich Tsunami-Erdbeben von regulären Erdbeben in ihren seismologischen Eigenschaften?",
          nl: "Hoe verschillen tsunami aardbevingen van reguliere aardbevingen in hun seismologische kenmerken?"
        },
        options: [
          { en: "They show deficiency in high-frequency energy and longer rupture duration relative to their magnitude", es: "Muestran deficiencia en energía de alta frecuencia y duración de ruptura más larga relativa a su magnitud", de: "Sie zeigen Mangel an hochfrequenter Energie und längere Bruchdauer relativ zu ihrer Magnitude", nl: "Ze tonen tekort aan hoogfrequente energie en langere breukduur relatief tot hun magnitude" },
          { en: "They always have higher magnitudes than regular earthquakes", es: "Siempre tienen magnitudes más altas que terremotos regulares", de: "Sie haben immer höhere Magnituden als reguläre Erdbeben", nl: "Ze hebben altijd hogere magnitudes dan reguliere aardbevingen" },
          { en: "They only occur at great depths", es: "Solo ocurren a grandes profundidades", de: "Sie treten nur in großen Tiefen auf", nl: "Ze treden alleen op grote diepten op" },
          { en: "They generate only P-waves", es: "Solo generan ondas P", de: "Sie erzeugen nur P-Wellen", nl: "Ze genereren alleen P-golven" }
        ],
        correct: 0,
        explanation: {
          en: "Tsunami earthquakes are characterized by anomalously slow rupture processes and efficient excitation of long-period waves. They show deficient high-frequency (>1 Hz) energy compared to their magnitude, indicating slow rupture velocities and/or rupture in weak materials like sediments. This 'tsunami earthquake paradox' results in larger seafloor displacement and tsunami generation than expected from the seismic magnitude alone.",
          es: "Los terremotos tsunamigénicos se caracterizan por procesos de ruptura anómalamente lentos y excitación eficiente de ondas de período largo. Muestran energía de alta frecuencia (>1 Hz) deficiente comparada con su magnitud, indicando velocidades de ruptura lentas y/o ruptura en materiales débiles como sedimentos. Esta 'paradoja de terremoto tsunamigénico' resulta en mayor desplazamiento del fondo marino y generación de tsunami de lo esperado por la magnitud sísmica sola.",
          de: "Tsunami-Erdbeben sind durch anomal langsame Bruchprozesse und effiziente Anregung langperiodischer Wellen charakterisiert. Sie zeigen mangelnde hochfrequente (>1 Hz) Energie im Vergleich zu ihrer Magnitude, was langsame Bruchgeschwindigkeiten und/oder Bruch in schwachen Materialien wie Sedimenten anzeigt. Dieses 'Tsunami-Erdbeben-Paradox' führt zu größerer Meeresboden-Verschiebung und Tsunami-Erzeugung als von der seismischen Magnitude allein erwartet.",
          nl: "Tsunami aardbevingen worden gekenmerkt door abnormaal langzame breukprocessen en efficiënte opwekking van lange-periode golven. Ze tonen tekortschietende hoogfrequente (>1 Hz) energie vergeleken met hun magnitude, wat langzame breuksnelheden en/of breuk in zwakke materialen zoals sedimenten aangeeft. Deze 'tsunami aardbeving paradox' resulteert in grotere zeebodemverschuiving en tsunami generatie dan verwacht van alleen de seismische magnitude."
        }
      },
      {
        question: {
          en: "What role does seismic interferometry play in subsurface imaging and monitoring?",
          es: "¿Qué papel juega la interferometría sísmica en imagen y monitoreo del subsuelo?",
          de: "Welche Rolle spielt seismische Interferometrie in der Untergrund-Bildgebung und -Überwachung?",
          nl: "Welke rol speelt seismische interferometrie in ondergrondse beeldvorming en monitoring?"
        },
        options: [
          { en: "It extracts Green's functions between receiver pairs using ambient noise correlations for velocity structure", es: "Extrae funciones de Green entre pares de receptores usando correlaciones de ruido ambiental para estructura de velocidad", de: "Sie extrahiert Green-Funktionen zwischen Empfängerpaaren mittels Umgebungsrausch-Korrelationen für Geschwindigkeitsstruktur", nl: "Het extraheert Green's functies tussen ontvangerparen door omgevingsruis correlaties voor snelheidsstructuur" },
          { en: "It only measures earthquake magnitudes", es: "Solo mide magnitudes de terremotos", de: "Sie misst nur Erdbebenmagnitudes", nl: "Het meet alleen aardbevingsmagnitudes" },
          { en: "It predicts future earthquake locations", es: "Predice ubicaciones futuras de terremotos", de: "Sie sagt zukünftige Erdbebenpositionen voraus", nl: "Het voorspelt toekomstige aardbevingslocaties" },
          { en: "It measures atmospheric pressure changes", es: "Mide cambios de presión atmosférica", de: "Sie misst atmosphärische Druckänderungen", nl: "Het meet atmosferische drukvariaties" }
        ],
        correct: 0,
        explanation: {
          en: "Seismic interferometry reconstructs Green's functions between station pairs by cross-correlating ambient seismic noise or coda waves. This technique effectively turns every receiver into a virtual seismic source, enabling detailed subsurface imaging and monitoring of velocity changes over time. It's particularly valuable for crustal structure studies, monitoring volcanic systems, and detecting temporal changes in reservoir properties.",
          es: "La interferometría sísmica reconstruye funciones de Green entre pares de estaciones mediante correlación cruzada de ruido sísmico ambiental u ondas coda. Esta técnica efectivamente convierte cada receptor en una fuente sísmica virtual, permitiendo imagen detallada del subsuelo y monitoreo de cambios de velocidad con el tiempo. Es particularmente valiosa para estudios de estructura cortical, monitoreo de sistemas volcánicos, y detección de cambios temporales en propiedades de reservorios.",
          de: "Seismische Interferometrie rekonstruiert Green-Funktionen zwischen Stationspaaren durch Kreuzkorrelation von seismischem Umgebungsrausch oder Coda-Wellen. Diese Technik macht effektiv jeden Empfänger zu einer virtuellen seismischen Quelle und ermöglicht detaillierte Untergrund-Bildgebung und Überwachung von Geschwindigkeitsänderungen über Zeit. Sie ist besonders wertvoll für Krustenstrukturstudien, Vulkansystem-Überwachung und Erkennung zeitlicher Änderungen in Reservoir-Eigenschaften.",
          nl: "Seismische interferometrie reconstrueert Green's functies tussen statieparen door kruiscorrelatie van seismische omgevingsruis of coda golven. Deze techniek maakt effectief elke ontvanger tot een virtuele seismische bron, wat gedetailleerde ondergrondse beeldvorming en monitoring van snelheidsveranderingen over tijd mogelijk maakt. Het is bijzonder waardevol voor korststructuurstudies, monitoring van vulkanische systemen, en detectie van temporele veranderingen in reservoir eigenschappen."
        }
      },
      {
        question: {
          en: "How do seismic anisotropy measurements reveal mantle flow patterns and deformation processes?",
          es: "¿Cómo revelan las mediciones de anisotropía sísmica los patrones de flujo del manto y procesos de deformación?",
          de: "Wie offenbaren seismische Anisotropie-Messungen Mantelfluss-Muster und Deformationsprozesse?",
          nl: "Hoe onthullen seismische anisotropie metingen mantelstroompatronen en deformatieprocessen?"
        },
        options: [
          { en: "Crystal alignment from mantle flow creates directional velocity variations detectable by shear wave splitting", es: "Alineación de cristales del flujo del manto crea variaciones direccionales de velocidad detectables por división de ondas de corte", de: "Kristallausrichtung durch Mantelfluss schafft richtungsabhängige Geschwindigkeitsvariationen, die durch Scherwellen-Spaltung erkennbar sind", nl: "Kristaluitlijning door mantelstroom creëert directionele snelheidsvariaties detecteerbaar door schuifgolf splitsing" },
          { en: "Anisotropy only occurs in the Earth's crust", es: "La anisotropía solo ocurre en la corteza terrestre", de: "Anisotropie tritt nur in der Erdkruste auf", nl: "Anisotropie treedt alleen op in de aardkorst" },
          { en: "All seismic waves travel at identical speeds regardless of direction", es: "Todas las ondas sísmicas viajan a velocidades idénticas independientemente de la dirección", de: "Alle seismischen Wellen reisen mit identischen Geschwindigkeiten unabhängig von der Richtung", nl: "Alle seismische golven reizen met identieke snelheden ongeacht richting" },
          { en: "Anisotropy measurements only indicate rock composition", es: "Las mediciones de anisotropía solo indican composición de roca", de: "Anisotropie-Messungen zeigen nur Gesteins-Zusammensetzung an", nl: "Anisotropie metingen geven alleen gesteentesamenstelling aan" }
        ],
        correct: 0,
        explanation: {
          en: "Seismic anisotropy results from preferred orientation of anisotropic minerals, particularly olivine in the upper mantle, aligned by viscous flow and deformation. Shear wave splitting occurs when S-waves encounter this fabric, creating fast and slow polarization directions. The splitting parameters (fast direction and delay time) provide constraints on mantle flow direction, deformation history, and the geometry of convection cells.",
          es: "La anisotropía sísmica resulta de orientación preferida de minerales anisotrópicos, particularmente olivino en el manto superior, alineados por flujo viscoso y deformación. La división de ondas de corte ocurre cuando ondas S encuentran esta fábrica, creando direcciones de polarización rápidas y lentas. Los parámetros de división (dirección rápida y tiempo de retraso) proporcionan restricciones sobre dirección de flujo del manto, historia de deformación y geometría de celdas de convección.",
          de: "Seismische Anisotropie resultiert aus bevorzugter Orientierung anisotroper Minerale, besonders Olivin im oberen Mantel, ausgerichtet durch viskosen Fluss und Deformation. Scherwellen-Spaltung tritt auf, wenn S-Wellen diese Struktur antreffen und schnelle und langsame Polarisationsrichtungen schaffen. Die Spaltungsparameter (schnelle Richtung und Verzögerungszeit) liefern Beschränkungen für Mantelfluss-Richtung, Deformationsgeschichte und Konvektionszellen-Geometrie.",
          nl: "Seismische anisotropie resulteert uit voorkeursoriëntatie van anisotrope mineralen, vooral olivijn in de bovenmantel, uitgelijnd door viskeuze stroom en deformatie. Schuifgolf splitsing treedt op wanneer S-golven deze structuur ontmoeten, snelle en langzame polarisatierichtingen creërend. De splitsingsparameters (snelle richting en vertragingstijd) bieden beperkingen voor mantelstroomrichting, deformatiegeschiedenis en convectiecel geometrie."
        }
      },
      {
        question: {
          en: "What controls the depth distribution of earthquake hypocenters in subduction zones?",
          es: "¿Qué controla la distribución en profundidad de hipocentros de terremotos en zonas de subducción?",
          de: "Was kontrolliert die Tiefenverteilung von Erdbeben-Hypozentren in Subduktionszonen?",
          nl: "Wat controleert de diepteverdeling van aardbeving hypocentra in subductiezones?"
        },
        options: [
          { en: "Temperature-dependent rheological transitions control brittle-ductile behavior and seismogenic zone limits", es: "Transiciones reológicas dependientes de temperatura controlan comportamiento frágil-dúctil y límites de zona sismogénica", de: "Temperaturabhängige rheologische Übergänge kontrollieren spröd-duktiles Verhalten und seismogene Zonengrenzen", nl: "Temperatuurafhankelijke rheologische overgangen controleren bros-ductiel gedrag en seismogene zone grenzen" },
          { en: "All earthquakes occur at identical depths in subduction zones", es: "Todos los terremotos ocurren a profundidades idénticas en zonas de subducción", de: "Alle Erdbeben treten in identischen Tiefen in Subduktionszonen auf", nl: "Alle aardbevingen treden op op identieke diepten in subductiezones" },
          { en: "Earthquake depth is randomly distributed", es: "La profundidad del terremoto se distribuye aleatoriamente", de: "Erdbeben-Tiefe ist zufällig verteilt", nl: "Aardbevingsdiepte is willekeurig verdeeld" },
          { en: "Only plate age controls earthquake depth", es: "Solo la edad de la placa controla la profundidad del terremoto", de: "Nur Platten-Alter kontrolliert Erdbeben-Tiefe", nl: "Alleen plaatleeftijd controleert aardbevingsdiepte" }
        ],
        correct: 0,
        explanation: {
          en: "The depth distribution of earthquakes in subduction zones is fundamentally controlled by temperature-dependent rheological transitions. Shallow earthquakes occur in the brittle regime where stress exceeds rock strength. The transition to ductile behavior limits seismogenic depths, typically 15-60 km depending on thermal structure. Intermediate-depth earthquakes (70-300 km) may result from dehydration reactions, while deep earthquakes (300-670 km) involve transformational faulting under extreme pressures.",
          es: "La distribución en profundidad de terremotos en zonas de subducción está fundamentalmente controlada por transiciones reológicas dependientes de temperatura. Terremotos superficiales ocurren en el régimen frágil donde el estrés excede la resistencia de roca. La transición a comportamiento dúctil limita profundidades sismogénicas, típicamente 15-60 km dependiendo de estructura térmica. Terremotos de profundidad intermedia (70-300 km) pueden resultar de reacciones de deshidratación, mientras que terremotos profundos (300-670 km) involucran fallamiento transformacional bajo presiones extremas.",
          de: "Die Tiefenverteilung von Erdbeben in Subduktionszonen wird fundamental durch temperaturabhängige rheologische Übergänge kontrolliert. Oberflächliche Erdbeben treten im spröden Regime auf, wo Spannung die Gesteinsfestigkeit übersteigt. Der Übergang zu duktilem Verhalten begrenzt seismogene Tiefen, typisch 15-60 km abhängig von thermischer Struktur. Erdbeben mittlerer Tiefe (70-300 km) können aus Dehydrierungsreaktionen resultieren, während tiefe Erdbeben (300-670 km) transformationale Verwerfungen unter extremen Drücken beinhalten.",
          nl: "De diepteverdeling van aardbevingen in subductiezones wordt fundamenteel gecontroleerd door temperatuurafhankelijke rheologische overgangen. Oppervlakkige aardbevingen treden op in het brosse regime waar spanning gesteentesterkte overschrijdt. De overgang naar ductiel gedrag beperkt seismogene diepten, typisch 15-60 km afhankelijk van thermische structuur. Aardbevingen van intermediaire diepte (70-300 km) kunnen resulteren uit dehydratiereacties, terwijl diepe aardbevingen (300-670 km) transformationele breuken onder extreme drukken betreffen."
        }
      },
      {
        question: {
          en: "How do seismic velocity discontinuities reveal Earth's internal structure and composition?",
          es: "¿Cómo revelan las discontinuidades de velocidad sísmica la estructura interna y composición de la Tierra?",
          de: "Wie offenbaren seismische Geschwindigkeitsdiskontinuitäten die innere Struktur und Zusammensetzung der Erde?",
          nl: "Hoe onthullen seismische snelheidsdiscontinuiteiten de interne structuur en samenstelling van de aarde?"
        },
        options: [
          { en: "Discontinuities mark phase transitions, compositional changes, and thermal boundaries in Earth's interior", es: "Las discontinuidades marcan transiciones de fase, cambios composicionales y límites térmicos en el interior de la Tierra", de: "Diskontinuitäten markieren Phasenübergänge, kompositionelle Änderungen und thermische Grenzen im Erdinneren", nl: "Discontinuiteiten markeren faseovergangen, compositionele veranderingen en thermische grenzen in het aardinnere" },
          { en: "Velocity changes are always gradual and continuous with depth", es: "Los cambios de velocidad son siempre graduales y continuos con la profundidad", de: "Geschwindigkeitsänderungen sind immer graduelle und kontinuierlich mit der Tiefe", nl: "Snelheidsveranderingen zijn altijd geleidelijk en continu met diepte" },
          { en: "All discontinuities have identical velocity contrasts", es: "Todas las discontinuidades tienen contrastes de velocidad idénticos", de: "Alle Diskontinuitäten haben identische Geschwindigkeitskontraste", nl: "Alle discontinuiteiten hebben identieke snelheidscontrasten" },
          { en: "Discontinuities only reflect temperature variations", es: "Las discontinuidades solo reflejan variaciones de temperatura", de: "Diskontinuitäten reflektieren nur Temperaturvariationen", nl: "Discontinuiteiten reflecteren alleen temperatuurvariaties" }
        ],
        correct: 0,
        explanation: {
          en: "Seismic velocity discontinuities provide fundamental constraints on Earth's internal structure by marking boundaries where wave speeds change abruptly. Major discontinuities like the Moho (crust-mantle boundary) reflect compositional changes, while the 410 and 660 km discontinuities mark olivine phase transitions. The core-mantle boundary represents both compositional and phase changes. Sharp discontinuities indicate rapid transitions, while gradual changes suggest broad transition zones or thermal gradients.",
          es: "Las discontinuidades de velocidad sísmica proporcionan restricciones fundamentales sobre la estructura interna de la Tierra al marcar límites donde las velocidades de onda cambian abruptamente. Discontinuidades mayores como la Moho (límite corteza-manto) reflejan cambios composicionales, mientras que las discontinuidades de 410 y 660 km marcan transiciones de fase de olivino. El límite núcleo-manto representa cambios tanto composicionales como de fase. Discontinuidades agudas indican transiciones rápidas, mientras que cambios graduales sugieren zonas de transición amplias o gradientes térmicos.",
          de: "Seismische Geschwindigkeitsdiskontinuitäten liefern fundamentale Beschränkungen für die innere Struktur der Erde durch Markierung von Grenzen, wo sich Wellengeschwindigkeiten abrupt ändern. Große Diskontinuitäten wie die Moho (Krusten-Mantel-Grenze) reflektieren kompositionelle Änderungen, während die 410 und 660 km Diskontinuitäten Olivin-Phasenübergänge markieren. Die Kern-Mantel-Grenze repräsentiert sowohl kompositionelle als auch Phasenänderungen. Scharfe Diskontinuitäten zeigen schnelle Übergänge an, während graduelle Änderungen breite Übergangszonen oder thermische Gradienten suggerieren.",
          nl: "Seismische snelheidsdiscontinuiteiten bieden fundamentele beperkingen voor de interne structuur van de aarde door grenzen te markeren waar golfsnelheden abrupt veranderen. Grote discontinuiteiten zoals de Moho (korst-mantel grens) reflecteren compositionele veranderingen, terwijl de 410 en 660 km discontinuiteiten olivijn faseovergangen markeren. De kern-mantel grens vertegenwoordigt zowel compositionele als faseveranderingen. Scherpe discontinuiteiten duiden snelle overgangen aan, terwijl geleidelijke veranderingen brede overgangszones of thermische gradiënten suggereren."
        }
      },
      {
        question: {
          en: "What role does fluid pressure play in earthquake triggering and fault mechanics?",
          es: "¿Qué papel juega la presión de fluidos en el desencadenamiento de terremotos y mecánica de fallas?",
          de: "Welche Rolle spielt Fluiddruck bei Erdbeben-Auslösung und Verwerfungs-Mechanik?",
          nl: "Welke rol speelt vloeistofdruk in aardbevings-triggering en breukmechanica?"
        },
        options: [
          { en: "Elevated fluid pressure reduces effective stress and promotes fault failure by decreasing frictional resistance", es: "Presión elevada de fluidos reduce estrés efectivo y promueve falla de fallas al disminuir resistencia friccional", de: "Erhöhter Fluiddruck reduziert effektive Spannung und fördert Verwerfungsversagen durch Verringerung der Reibungswiderstand", nl: "Verhoogde vloeistofdruk vermindert effectieve spanning en bevordert breukfalen door wrijvingsweerstand te verminderen" },
          { en: "Fluid pressure has no effect on earthquake occurrence", es: "La presión de fluidos no tiene efecto en la ocurrencia de terremotos", de: "Fluiddruck hat keinen Einfluss auf Erdbeben-Auftreten", nl: "Vloeistofdruk heeft geen effect op aardbevings-optreden" },
          { en: "Higher fluid pressure always prevents earthquakes", es: "Mayor presión de fluidos siempre previene terremotos", de: "Höherer Fluiddruck verhindert immer Erdbeben", nl: "Hogere vloeistofdruk voorkomt altijd aardbevingen" },
          { en: "Fluid pressure only affects surface phenomena", es: "La presión de fluidos solo afecta fenómenos superficiales", de: "Fluiddruck beeinflusst nur Oberflächenphänomene", nl: "Vloeistofdruk beïnvloedt alleen oppervlakteverschijnselen" }
        ],
        correct: 0,
        explanation: {
          en: "Fluid pressure plays a critical role in earthquake mechanics through the concept of effective stress. According to the Mohr-Coulomb criterion, fault failure occurs when shear stress exceeds τ = μ(σn - Pf), where μ is friction coefficient, σn is normal stress, and Pf is fluid pressure. Elevated fluid pressure reduces effective normal stress, making faults more prone to failure at lower applied stresses. This mechanism is important in induced seismicity, hydrothermal systems, and deep earthquake processes.",
          es: "La presión de fluidos juega un papel crítico en la mecánica de terremotos a través del concepto de estrés efectivo. Según el criterio de Mohr-Coulomb, la falla de fallas ocurre cuando el estrés de corte excede τ = μ(σn - Pf), donde μ es coeficiente de fricción, σn es estrés normal, y Pf es presión de fluidos. Presión elevada de fluidos reduce estrés normal efectivo, haciendo fallas más propensas a falla en estreses aplicados menores. Este mecanismo es importante en sismicidad inducida, sistemas hidrotermales y procesos de terremotos profundos.",
          de: "Fluiddruck spielt eine kritische Rolle in Erdbeben-Mechanik durch das Konzept der effektiven Spannung. Nach dem Mohr-Coulomb-Kriterium tritt Verwerfungsversagen auf, wenn Scherspannung τ = μ(σn - Pf) übersteigt, wo μ der Reibungskoeffizient, σn die Normalspannung und Pf der Fluiddruck ist. Erhöhter Fluiddruck reduziert effektive Normalspannung und macht Verwerfungen anfälliger für Versagen bei niedrigeren angewandten Spannungen. Dieser Mechanismus ist wichtig bei induzierter Seismizität, hydrothermalen Systemen und tiefen Erdbebenprozessen.",
          nl: "Vloeistofdruk speelt een kritieke rol in aardbevingsmechanica door het concept van effectieve spanning. Volgens het Mohr-Coulomb criterium treedt breukfalen op wanneer schuifspanning τ = μ(σn - Pf) overschrijdt, waarbij μ de wrijvingscoëfficiënt, σn de normaalspanning en Pf de vloeistofdruk is. Verhoogde vloeistofdruk vermindert effectieve normaalspanning, waardoor breuken gevoeliger worden voor falen bij lagere toegepaste spanningen. Dit mechanisme is belangrijk bij geïnduceerde seismiciteit, hydrothermale systemen en diepe aardbevingsprocessen."
        }
      },
      {
        question: {
          en: "How do seismic moment tensors provide information about earthquake source mechanisms and stress fields?",
          es: "¿Cómo proporcionan los tensores de momento sísmico información sobre mecanismos de fuente de terremotos y campos de estrés?",
          de: "Wie liefern seismische Moment-Tensoren Informationen über Erdbeben-Quellmechanismen und Spannungsfelder?",
          nl: "Hoe bieden seismische moment tensoren informatie over aardbevings bronmechanismen en spanningsvelden?"
        },
        options: [
          { en: "Moment tensors decompose into double-couple, CLVD, and isotropic components revealing fault orientation and stress state", es: "Los tensores de momento se descomponen en componentes de doble par, CLVD e isotrópicos revelando orientación de falla y estado de estrés", de: "Moment-Tensoren zerlegen sich in Doppel-Paar-, CLVD- und isotrope Komponenten, die Verwerfungsausrichtung und Spannungszustand offenbaren", nl: "Moment tensoren ontbinden in dubbel-koppel, CLVD en isotrope componenten die breukoriëntatie en spanningstoestand onthullen" },
          { en: "Moment tensors only measure earthquake magnitude", es: "Los tensores de momento solo miden magnitud de terremotos", de: "Moment-Tensoren messen nur Erdbeben-Magnitude", nl: "Moment tensoren meten alleen aardbevingsmagnitude" },
          { en: "All earthquakes have identical moment tensor patterns", es: "Todos los terremotos tienen patrones de tensor de momento idénticos", de: "Alle Erdbeben haben identische Moment-Tensor-Muster", nl: "Alle aardbevingen hebben identieke moment tensor patronen" },
          { en: "Moment tensors are independent of tectonic setting", es: "Los tensores de momento son independientes del entorno tectónico", de: "Moment-Tensoren sind unabhängig von tektonischem Setting", nl: "Moment tensoren zijn onafhankelijk van tektonische setting" }
        ],
        correct: 0,
        explanation: {
          en: "Seismic moment tensors provide comprehensive information about earthquake source processes through their decomposition into fundamental components. The double-couple component represents shear faulting and reveals fault plane orientation and slip direction. The compensated linear vector dipole (CLVD) indicates volume changes or complex rupture processes. The isotropic component reflects volume changes from explosions or implosions. The ratio of these components and their orientations reveal stress field orientations, fault mechanics, and rupture complexity.",
          es: "Los tensores de momento sísmico proporcionan información integral sobre procesos de fuente de terremotos a través de su descomposición en componentes fundamentales. El componente de doble par representa fallamiento de corte y revela orientación de plano de falla y dirección de deslizamiento. El dipolo vectorial lineal compensado (CLVD) indica cambios de volumen o procesos de ruptura complejos. El componente isotrópico refleja cambios de volumen de explosiones o implosiones. La relación de estos componentes y sus orientaciones revelan orientaciones de campo de estrés, mecánica de fallas y complejidad de ruptura.",
          de: "Seismische Moment-Tensoren liefern umfassende Informationen über Erdbeben-Quellprozesse durch ihre Zerlegung in fundamentale Komponenten. Die Doppel-Paar-Komponente repräsentiert Scher-Verwerfung und offenbart Verwerfungsebenen-Orientierung und Gleitrichtung. Der kompensierte lineare Vektor-Dipol (CLVD) zeigt Volumenänderungen oder komplexe Rupturprozesse an. Die isotrope Komponente reflektiert Volumenänderungen von Explosionen oder Implosionen. Das Verhältnis dieser Komponenten und ihre Orientierungen offenbaren Spannungsfeld-Orientierungen, Verwerfungs-Mechanik und Ruptur-Komplexität.",
          nl: "Seismische moment tensoren bieden uitgebreide informatie over aardbevings bronprocessen door hun ontbinding in fundamentele componenten. De dubbel-koppel component vertegenwoordigt schuifbreuken en onthult breukvlakoriëntatie en glijrichting. De gecompenseerde lineaire vector dipool (CLVD) geeft volumeveranderingen of complexe ruptuurprocessen aan. De isotrope component reflecteert volumeveranderingen van explosies of implosies. De verhouding van deze componenten en hun oriëntaties onthullen spanningsveldoriëntaties, breukmechanica en ruptuur complexiteit."
        }
      },
      {
        question: {
          en: "What is the significance of the critical angle in seismic wave refraction and how does it affect ray paths?",
          es: "¿Cuál es la importancia del ángulo crítico en la refracción de ondas sísmicas y cómo afecta las trayectorias de los rayos?",
          de: "Was ist die Bedeutung des kritischen Winkels in der seismischen Wellenrefraktion und wie beeinflusst er Strahlenwege?",
          nl: "Wat is de betekenis van de kritieke hoek in seismische golfbreking en hoe beïnvloedt het straalpaden?"
        },
        options: [
          { en: "At the critical angle, total internal reflection occurs and head waves are generated", es: "En el ángulo crítico, ocurre reflexión interna total y se generan ondas de cabeza", de: "Am kritischen Winkel tritt Totalreflexion auf und Kopfwellen werden erzeugt", nl: "Bij de kritieke hoek treedt totale interne reflectie op en hoofdgolven worden gegenereerd" },
          { en: "The critical angle determines earthquake magnitude", es: "El ángulo crítico determina la magnitud del terremoto", de: "Der kritische Winkel bestimmt die Erdbeben-Magnitude", nl: "De kritieke hoek bepaalt de aardbevingsmagnitude" },
          { en: "Critical angles only exist in liquid media", es: "Los ángulos críticos solo existen en medios líquidos", de: "Kritische Winkel existieren nur in flüssigen Medien", nl: "Kritieke hoeken bestaan alleen in vloeibare media" },
          { en: "Wave frequency changes at the critical angle", es: "La frecuencia de la onda cambia en el ángulo crítico", de: "Wellenfrequenz ändert sich am kritischen Winkel", nl: "Golffrequentie verandert bij de kritieke hoek" }
        ],
        correct: 0,
        explanation: {
          en: "The critical angle occurs when a seismic wave traveling from a slower to faster medium reaches the angle where sin(θc) = V1/V2. At this angle, the refracted wave travels along the interface (Snell's law), creating head waves that propagate back into the slower medium. This phenomenon is crucial for seismic refraction surveys and understanding subsurface structure.",
          es: "El ángulo crítico ocurre cuando una onda sísmica que viaja de un medio más lento a uno más rápido alcanza el ángulo donde sin(θc) = V1/V2. En este ángulo, la onda refractada viaja a lo largo de la interfaz (ley de Snell), creando ondas de cabeza que se propagan de vuelta al medio más lento. Este fenómeno es crucial para estudios de refracción sísmica y entender la estructura del subsuelo.",
          de: "Der kritische Winkel tritt auf, wenn eine seismische Welle, die von einem langsameren zu einem schnelleren Medium reist, den Winkel erreicht, wo sin(θc) = V1/V2. Bei diesem Winkel reist die gebrochene Welle entlang der Grenzfläche (Snellsches Gesetz) und erzeugt Kopfwellen, die sich zurück in das langsamere Medium ausbreiten. Dieses Phänomen ist entscheidend für seismische Refraktionsuntersuchungen und das Verständnis der Untergrundstruktur.",
          nl: "De kritieke hoek treedt op wanneer een seismische golf die reist van een langzamer naar sneller medium de hoek bereikt waar sin(θc) = V1/V2. Bij deze hoek reist de gebroken golf langs het grensvlak (Snell's wet), waardoor hoofdgolven ontstaan die zich terug verspreiden naar het langzamere medium. Dit fenomeen is cruciaal voor seismische refractie onderzoeken en begrip van ondergrondse structuur."
        }
      },
      {
        question: {
          en: "How do Love waves differ from Rayleigh waves in terms of particle motion and propagation characteristics?",
          es: "¿Cómo difieren las ondas Love de las ondas Rayleigh en términos de movimiento de partículas y características de propagación?",
          de: "Wie unterscheiden sich Love-Wellen von Rayleigh-Wellen in Bezug auf Teilchenbewegung und Ausbreitungscharakteristika?",
          nl: "Hoe verschillen Love golven van Rayleigh golven qua deeltjesbeweging en propagatie eigenschappen?"
        },
        options: [
          { en: "Love waves have horizontal transverse motion, Rayleigh waves have elliptical retrograde motion", es: "Las ondas Love tienen movimiento transversal horizontal, las ondas Rayleigh tienen movimiento elíptico retrógrado", de: "Love-Wellen haben horizontale Transversalbewegung, Rayleigh-Wellen haben elliptische rückläufige Bewegung", nl: "Love golven hebben horizontale dwarsbeweging, Rayleigh golven hebben elliptische retrograde beweging" },
          { en: "Love waves travel faster than Rayleigh waves", es: "Las ondas Love viajan más rápido que las ondas Rayleigh", de: "Love-Wellen reisen schneller als Rayleigh-Wellen", nl: "Love golven reizen sneller dan Rayleigh golven" },
          { en: "Love waves only exist in homogeneous media", es: "Las ondas Love solo existen en medios homogéneos", de: "Love-Wellen existieren nur in homogenen Medien", nl: "Love golven bestaan alleen in homogene media" },
          { en: "Both wave types have identical dispersion properties", es: "Ambos tipos de ondas tienen propiedades de dispersión idénticas", de: "Beide Wellentypen haben identische Dispersionseigenschaften", nl: "Beide golftypes hebben identieke dispersie eigenschappen" }
        ],
        correct: 0,
        explanation: {
          en: "Love waves are surface waves with horizontal transverse particle motion (perpendicular to direction of propagation), requiring a layered structure to exist. Rayleigh waves have elliptical retrograde particle motion in the vertical plane. Love waves typically travel faster than Rayleigh waves and show strong dispersion in layered media, making them valuable for crustal structure studies.",
          es: "Las ondas Love son ondas superficiales con movimiento de partículas transversal horizontal (perpendicular a la dirección de propagación), requiriendo una estructura en capas para existir. Las ondas Rayleigh tienen movimiento de partículas elíptico retrógrado en el plano vertical. Las ondas Love típicamente viajan más rápido que las ondas Rayleigh y muestran fuerte dispersión en medios en capas, haciéndolas valiosas para estudios de estructura crustal.",
          de: "Love-Wellen sind Oberflächenwellen mit horizontaler transversaler Teilchenbewegung (senkrecht zur Ausbreitungsrichtung), die eine geschichtete Struktur benötigen. Rayleigh-Wellen haben elliptische rückläufige Teilchenbewegung in der vertikalen Ebene. Love-Wellen reisen typischerweise schneller als Rayleigh-Wellen und zeigen starke Dispersion in geschichteten Medien, was sie wertvoll für Krustenstukturstudien macht.",
          nl: "Love golven zijn oppervlaktegolven met horizontale dwarse deeltjesbeweging (loodrecht op propagatierichting), die een gelaagde structuur nodig hebben om te bestaan. Rayleigh golven hebben elliptische retrograde deeltjesbeweging in het verticale vlak. Love golven reizen typisch sneller dan Rayleigh golven en tonen sterke dispersie in gelaagde media, waardoor ze waardevol zijn voor korst structuur studies."
        }
      },
      {
        question: {
          en: "What role does the seismic quality factor (Q) play in wave attenuation and energy dissipation?",
          es: "¿Qué papel juega el factor de calidad sísmico (Q) en la atenuación de ondas y disipación de energía?",
          de: "Welche Rolle spielt der seismische Qualitätsfaktor (Q) bei der Wellendämpfung und Energiedissipation?",
          nl: "Welke rol speelt de seismische kwaliteitsfactor (Q) in golfverzwakking en energie dissipatie?"
        },
        options: [
          { en: "Q quantifies anelastic attenuation; higher Q means less energy loss per wave cycle", es: "Q cuantifica atenuación anelástica; Q más alto significa menos pérdida de energía por ciclo de onda", de: "Q quantifiziert anelastische Dämpfung; höheres Q bedeutet weniger Energieverlust pro Wellenzyklus", nl: "Q kwantificeert anelastische verzwakking; hogere Q betekent minder energieverlies per golfcyclus" },
          { en: "Q measures the frequency of seismic waves", es: "Q mide la frecuencia de las ondas sísmicas", de: "Q misst die Frequenz seismischer Wellen", nl: "Q meet de frequentie van seismische golven" },
          { en: "Higher Q values indicate more energy dissipation", es: "Valores Q más altos indican más disipación de energía", de: "Höhere Q-Werte zeigen mehr Energiedissipation an", nl: "Hogere Q waarden duiden op meer energie dissipatie" },
          { en: "Q is independent of rock properties", es: "Q es independiente de las propiedades de la roca", de: "Q ist unabhängig von Gesteinsigenschaften", nl: "Q is onafhankelijk van rotseigenschappen" }
        ],
        correct: 0,
        explanation: {
          en: "The seismic quality factor Q = 2π × (energy stored)/(energy lost per cycle) quantifies anelastic attenuation in rocks. High Q materials (like crystalline rocks) have low attenuation and preserve seismic energy well. Low Q materials (like sediments, fractured rocks) dissipate energy rapidly through mechanisms like friction, fluid movement, and grain boundary sliding. Q varies with frequency, temperature, pressure, and fluid content.",
          es: "El factor de calidad sísmico Q = 2π × (energía almacenada)/(energía perdida por ciclo) cuantifica la atenuación anelástica en las rocas. Materiales de Q alto (como rocas cristalinas) tienen baja atenuación y preservan bien la energía sísmica. Materiales de Q bajo (como sedimentos, rocas fracturadas) disipan energía rápidamente a través de mecanismos como fricción, movimiento de fluidos y deslizamiento de límites de grano. Q varía con frecuencia, temperatura, presión y contenido de fluidos.",
          de: "Der seismische Qualitätsfaktor Q = 2π × (gespeicherte Energie)/(verlorene Energie pro Zyklus) quantifiziert anelastische Dämpfung in Gesteinen. Hohe Q-Materialien (wie kristalline Gesteine) haben niedrige Dämpfung und bewahren seismische Energie gut. Niedrige Q-Materialien (wie Sedimente, gebrochene Gesteine) dissipieren Energie schnell durch Mechanismen wie Reibung, Flüssigkeitsbewegung und Korngrenzgleitung. Q variiert mit Frequenz, Temperatur, Druck und Flüssigkeitsgehalt.",
          nl: "De seismische kwaliteitsfactor Q = 2π × (opgeslagen energie)/(verloren energie per cyclus) kwantificeert anelastische verzwakking in rotsen. Hoge Q materialen (zoals kristallijne rotsen) hebben lage verzwakking en behouden seismische energie goed. Lage Q materialen (zoals sedimenten, gebroken rotsen) dissiperen energie snel door mechanismen zoals wrijving, vloeistofbeweging en korrelgrens glijding. Q varieert met frequentie, temperatuur, druk en vloeistofinhoud."
        }
      },
      {
        question: {
          en: "How does earthquake source duration scale with magnitude and what controls rupture propagation velocity?",
          es: "¿Cómo escala la duración de la fuente del terremoto con la magnitud y qué controla la velocidad de propagación de ruptura?",
          de: "Wie skaliert die Erdbebenquelldauer mit der Magnitude und was kontrolliert die Rupturausbreitungsgeschwindigkeit?",
          nl: "Hoe schaalt aardbevings bronduur met magnitude en wat controleert ruptuur propagatie snelheid?"
        },
        options: [
          { en: "Source duration scales as M^(1/3); rupture velocity is controlled by stress drop and rock properties", es: "La duración de la fuente escala como M^(1/3); velocidad de ruptura es controlada por caída de estrés y propiedades de roca", de: "Quelldauer skaliert als M^(1/3); Rupturgeschwindigkeit wird durch Spannungsabfall und Gesteinsigenschaften kontrolliert", nl: "Bronduur schaalt als M^(1/3); ruptuur snelheid wordt gecontroleerd door stress drop en rots eigenschappen" },
          { en: "All earthquakes have the same source duration", es: "Todos los terremotos tienen la misma duración de fuente", de: "Alle Erdbeben haben dieselbe Quelldauer", nl: "Alle aardbevingen hebben dezelfde bronduur" },
          { en: "Source duration is independent of magnitude", es: "La duración de la fuente es independiente de la magnitud", de: "Quelldauer ist unabhängig von der Magnitude", nl: "Bronduur is onafhankelijk van magnitude" },
          { en: "Rupture velocity exceeds P-wave velocity", es: "La velocidad de ruptura excede la velocidad de ondas P", de: "Rupturgeschwindigkeit überschreitet P-Wellengeschwindigkeit", nl: "Ruptuur snelheid overschrijdt P-golf snelheid" }
        ],
        correct: 0,
        explanation: {
          en: "Earthquake source duration follows scaling laws where larger earthquakes have longer rupture duration, approximately scaling as magnitude^(1/3) due to the cube-root relationship between seismic moment and fault dimensions. Rupture propagation velocity is typically 70-90% of local S-wave velocity, controlled by stress drop, fault friction, rock properties, and geometric complexity. Higher stress drop and smoother faults promote faster rupture propagation.",
          es: "La duración de la fuente del terremoto sigue leyes de escala donde terremotos más grandes tienen duración de ruptura más larga, escalando aproximadamente como magnitud^(1/3) debido a la relación de raíz cúbica entre momento sísmico y dimensiones de falla. La velocidad de propagación de ruptura es típicamente 70-90% de velocidad local de ondas S, controlada por caída de estrés, fricción de falla, propiedades de roca y complejidad geométrica. Mayor caída de estrés y fallas más lisas promueven propagación de ruptura más rápida.",
          de: "Erdbebenquelldauer folgt Skalierungsgesetzen wo größere Erdbeben längere Rupturdauer haben, etwa skalierend als Magnitude^(1/3) aufgrund der Kubikwurzelbeziehung zwischen seismischem Moment und Verwerfungsabmessungen. Rupturausbreitungsgeschwindigkeit ist typischerweise 70-90% der lokalen S-Wellengeschwindigkeit, kontrolliert durch Spannungsabfall, Verwerfungsreibung, Gesteinsigenschaften und geometrische Komplexität. Höherer Spannungsabfall und glattere Verwerfungen fördern schnellere Rupturausbreitung.",
          nl: "Aardbevings bronduur volgt schaalwetten waarbij grotere aardbevingen langere ruptuur duur hebben, ongeveer schalend als magnitude^(1/3) door de kubiekwortel relatie tussen seismisch moment en breuk dimensies. Ruptuur propagatie snelheid is typisch 70-90% van lokale S-golf snelheid, gecontroleerd door stress drop, breuk wrijving, rots eigenschappen en geometrische complexiteit. Hogere stress drop en gladdere breuken bevorderen snellere ruptuur propagatie."
        }
      },
      {
        question: {
          en: "What are the fundamental assumptions and limitations of elastic dislocation theory in earthquake modeling?",
          es: "¿Cuáles son las suposiciones fundamentales y limitaciones de la teoría de dislocación elástica en modelado de terremotos?",
          de: "Was sind die grundlegenden Annahmen und Limitierungen der elastischen Dislokationstheorie in der Erdbebenmodellierung?",
          nl: "Wat zijn de fundamentele aannames en beperkingen van elastische dislocatie theorie in aardbevings modellering?"
        },
        options: [
          { en: "Assumes linear elasticity, homogeneous media, and instantaneous slip; limited by anelasticity and heterogeneity", es: "Asume elasticidad lineal, medios homogéneos y deslizamiento instantáneo; limitada por anelasticidad y heterogeneidad", de: "Nimmt lineare Elastizität, homogene Medien und instantanen Slip an; begrenzt durch Anelastizität und Heterogenität", nl: "Veronderstelt lineaire elasticiteit, homogene media en momentane slip; beperkt door anelasticiteit en heterogeniteit" },
          { en: "Theory accounts for all nonlinear rock behavior", es: "La teoría considera todo comportamiento no lineal de rocas", de: "Theorie berücksichtigt alles nichtlineare Gesteinsverhalten", nl: "Theorie houdt rekening met al het niet-lineaire rots gedrag" },
          { en: "Only applies to very small earthquakes", es: "Solo se aplica a terremotos muy pequeños", de: "Gilt nur für sehr kleine Erdbeben", nl: "Geldt alleen voor zeer kleine aardbevingen" },
          { en: "Cannot predict ground motion patterns", es: "No puede predecir patrones de movimiento del suelo", de: "Kann Bodenbewegungsmuster nicht vorhersagen", nl: "Kan grondbeweging patronen niet voorspellen" }
        ],
        correct: 0,
        explanation: {
          en: "Elastic dislocation theory assumes linear elasticity (Hooke's law), homogeneous and isotropic media, and treats fault slip as instantaneous displacement discontinuities in an infinite elastic half-space. These assumptions enable analytical solutions for stress and displacement fields around faults. Limitations include: inability to account for anelastic attenuation, rock heterogeneity, nonlinear soil response, finite rupture velocity effects, and complex fault geometries. Despite limitations, it provides fundamental insights into co-seismic deformation and static stress changes.",
          es: "La teoría de dislocación elástica asume elasticidad lineal (ley de Hooke), medios homogéneos e isotrópicos, y trata el deslizamiento de falla como discontinuidades de desplazamiento instantáneas en un semi-espacio elástico infinito. Estas suposiciones permiten soluciones analíticas para campos de estrés y desplazamiento alrededor de fallas. Las limitaciones incluyen: incapacidad para considerar atenuación anelástica, heterogeneidad de rocas, respuesta no lineal del suelo, efectos de velocidad de ruptura finita y geometrías de falla complejas. A pesar de limitaciones, proporciona perspectivas fundamentales sobre deformación co-sísmica y cambios de estrés estático.",
          de: "Elastische Dislokationstheorie nimmt lineare Elastizität (Hookesches Gesetz), homogene und isotrope Medien an und behandelt Verwerfungsslip als instantane Verschiebungsdiskontinuitäten in einem unendlichen elastischen Halbraum. Diese Annahmen ermöglichen analytische Lösungen für Spannungs- und Verschiebungsfelder um Verwerfungen. Limitierungen umfassen: Unfähigkeit anelastische Dämpfung, Gesteinsheterogenität, nichtlineare Bodenantwort, endliche Rupturgeschwindigkeitseffekte und komplexe Verwerfungsgeometrien zu berücksichtigen. Trotz Limitierungen bietet sie fundamentale Einblicke in co-seismische Deformation und statische Spannungsänderungen.",
          nl: "Elastische dislocatie theorie veronderstelt lineaire elasticiteit (Hooke's wet), homogene en isotrope media, en behandelt breuk slip als momentane verplaatsings discontinuïteiten in een oneindige elastische halve ruimte. Deze aannames maken analytische oplossingen mogelijk voor spanning en verplaatsings velden rond breuken. Beperkingen omvatten: onvermogen om anelastische verzwakking, rots heterogeniteit, niet-lineaire bodem respons, eindige ruptuur snelheids effecten en complexe breuk geometrieën te beschouwen. Ondanks beperkingen biedt het fundamentele inzichten in co-seismische deformatie en statische spanning veranderingen."
        }
      },
      {
        question: {
          en: "What causes seismic anisotropy in crystalline rocks and how does it affect P and S-wave velocities?",
          es: "¿Qué causa la anisotropía sísmica en rocas cristalinas y cómo afecta las velocidades de ondas P y S?",
          de: "Was verursacht seismische Anisotropie in kristallinen Gesteinen und wie beeinflusst sie P- und S-Wellen-Geschwindigkeiten?",
          nl: "Wat veroorzaakt seismische anisotropie in kristallijne gesteenten en hoe beïnvloedt dit P- en S-golf snelheden?"
        },
        options: [
          { en: "Crystallographic preferred orientation creates directional velocity variations up to 20%", es: "La orientación preferencial cristalográfica crea variaciones direccionales de velocidad hasta 20%", de: "Kristallographische Vorzugsorientierung erzeugt Richtungsgeschwindigkeitsvariationen bis zu 20%", nl: "Kristallografische voorkeursoriëntatie creëert directionele snelheidsvariaties tot 20%" },
          { en: "Temperature gradients make waves travel faster upward", es: "Los gradientes de temperatura hacen que las ondas viajen más rápido hacia arriba", de: "Temperaturgradienten lassen Wellen schneller nach oben reisen", nl: "Temperatuur gradiënten maken dat golven sneller naar boven reizen" },
          { en: "Magnetic fields align mineral grains uniformly", es: "Los campos magnéticos alinean los granos minerales uniformemente", de: "Magnetfelder richten Mineralkörner gleichmäßig aus", nl: "Magnetische velden richten mineraal korrels uniform uit" },
          { en: "Gravity affects wave propagation direction", es: "La gravedad afecta la dirección de propagación de ondas", de: "Gravitation beeinflusst die Wellenausbreitungsrichtung", nl: "Zwaartekracht beïnvloedt golf propagatie richting" }
        ],
        correct: 0,
        explanation: {
          en: "Seismic anisotropy in crystalline rocks results from crystallographic preferred orientation (CPO) where mineral crystals align due to deformation, metamorphism, or igneous flow. This creates directional velocity variations because elastic constants vary with crystallographic orientation. Common minerals like olivine, pyroxene, and quartz exhibit strong anisotropy. P-wave anisotropy can reach 15-20% in highly deformed rocks, while S-wave splitting can exceed 10%. This affects seismic imaging, earthquake location, and stress field interpretation.",
          es: "La anisotropía sísmica en rocas cristalinas resulta de la orientación preferencial cristalográfica (OPC) donde los cristales minerales se alinean debido a deformación, metamorfismo o flujo ígneo. Esto crea variaciones direccionales de velocidad porque las constantes elásticas varían con la orientación cristalográfica. Minerales comunes como olivino, piroxeno y cuarzo exhiben anisotropía fuerte. La anisotropía de ondas P puede alcanzar 15-20% en rocas altamente deformadas, mientras que la división de ondas S puede exceder 10%. Esto afecta imágenes sísmicas, localización de terremotos e interpretación de campos de estrés.",
          de: "Seismische Anisotropie in kristallinen Gesteinen resultiert aus kristallographischer Vorzugsorientierung (KVO) wo Mineralkristalle sich durch Deformation, Metamorphose oder magmatischen Fluss ausrichten. Dies erzeugt Richtungsgeschwindigkeitsvariationen weil elastische Konstanten mit kristallographischer Orientierung variieren. Gewöhnliche Minerale wie Olivin, Pyroxen und Quarz zeigen starke Anisotropie. P-Wellen-Anisotropie kann 15-20% in stark deformierten Gesteinen erreichen, während S-Wellen-Spaltung 10% überschreiten kann. Dies beeinflusst seismische Bildgebung, Erdbebenlokalisation und Spannungsfeld-Interpretation.",
          nl: "Seismische anisotropie in kristallijne gesteenten resulteert uit kristallografische voorkeursoriëntatie (KVO) waarbij mineraal kristallen zich uitlijnen door deformatie, metamorfose of stollingsstroming. Dit creëert directionele snelheidsvariaties omdat elastische constanten variëren met kristallografische oriëntatie. Gewone mineralen zoals olivijn, pyroxeen en kwarts vertonen sterke anisotropie. P-golf anisotropie kan 15-20% bereiken in sterk vervormde gesteenten, terwijl S-golf splitsing 10% kan overschrijden. Dit beïnvloedt seismische beeldvorming, aardbeving lokalisatie en stress veld interpretatie."
        }
      },
      {
        question: {
          en: "How does the corner frequency in earthquake source spectra relate to stress drop and fault dimensions?",
          es: "¿Cómo se relaciona la frecuencia de esquina en espectros de fuente de terremoto con la caída de estrés y dimensiones de falla?",
          de: "Wie hängt die Eckfrequenz in Erdbebenquellspektren mit Spannungsabfall und Verwerfungsabmessungen zusammen?",
          nl: "Hoe hangt de hoekfrequentie in aardbevings bron spectra samen met stress drop en breuk dimensies?"
        },
        options: [
          { en: "Corner frequency fc = (stress drop/seismic moment)^(1/3) × velocity, inversely related to fault radius", es: "Frecuencia de esquina fc = (caída de estrés/momento sísmico)^(1/3) × velocidad, inversamente relacionada con radio de falla", de: "Eckfrequenz fc = (Spannungsabfall/seismisches Moment)^(1/3) × Geschwindigkeit, umgekehrt zum Verwerfungsradius", nl: "Hoekfrequentie fc = (stress drop/seismisch moment)^(1/3) × snelheid, omgekeerd gerelateerd aan breuk radius" },
          { en: "Corner frequency increases linearly with magnitude", es: "La frecuencia de esquina aumenta linealmente con la magnitud", de: "Eckfrequenz steigt linear mit der Magnitude", nl: "Hoekfrequentie neemt lineair toe met magnitude" },
          { en: "Corner frequency is independent of earthquake size", es: "La frecuencia de esquina es independiente del tamaño del terremoto", de: "Eckfrequenz ist unabhängig von der Erdbebengröße", nl: "Hoekfrequentie is onafhankelijk van aardbevings grootte" },
          { en: "Corner frequency only depends on rock density", es: "La frecuencia de esquina solo depende de la densidad de la roca", de: "Eckfrequenz hängt nur von der Gesteinsdichte ab", nl: "Hoekfrequentie hangt alleen af van rots dichtheid" }
        ],
        correct: 0,
        explanation: {
          en: "The corner frequency fc marks the transition from flat to -2 slope in earthquake source spectra (ω²-model). It relates to stress drop (Δσ) and fault radius (r) through fc ≈ 0.49β/r, where β is shear velocity. Since r ∝ (Mo/Δσ)^(1/3) and Mo is seismic moment, fc ∝ (Δσ/Mo)^(1/3). Higher stress drop or smaller fault dimensions result in higher corner frequencies. This relationship enables stress drop estimation from spectral analysis and reveals earthquake scaling properties.",
          es: "La frecuencia de esquina fc marca la transición de pendiente plana a -2 en espectros de fuente de terremoto (modelo-ω²). Se relaciona con caída de estrés (Δσ) y radio de falla (r) mediante fc ≈ 0.49β/r, donde β es velocidad de cizalla. Como r ∝ (Mo/Δσ)^(1/3) y Mo es momento sísmico, fc ∝ (Δσ/Mo)^(1/3). Mayor caída de estrés o dimensiones de falla menores resultan en frecuencias de esquina más altas. Esta relación permite estimación de caída de estrés del análisis espectral y revela propiedades de escala de terremotos.",
          de: "Die Eckfrequenz fc markiert den Übergang von flacher zu -2 Steigung in Erdbebenquellspektren (ω²-Modell). Sie bezieht sich auf Spannungsabfall (Δσ) und Verwerfungsradius (r) durch fc ≈ 0.49β/r, wo β Schergeschwindigkeit ist. Da r ∝ (Mo/Δσ)^(1/3) und Mo seismisches Moment ist, fc ∝ (Δσ/Mo)^(1/3). Höherer Spannungsabfall oder kleinere Verwerfungsabmessungen ergeben höhere Eckfrequenzen. Diese Beziehung ermöglicht Spannungsabfall-Schätzung aus Spektralanalyse und enthüllt Erdbeben-Skalierungseigenschaften.",
          nl: "De hoekfrequentie fc markeert de overgang van vlakke naar -2 helling in aardbevings bron spectra (ω²-model). Het relateert aan stress drop (Δσ) en breuk radius (r) door fc ≈ 0.49β/r, waarbij β schuif snelheid is. Omdat r ∝ (Mo/Δσ)^(1/3) en Mo seismisch moment is, fc ∝ (Δσ/Mo)^(1/3). Hogere stress drop of kleinere breuk dimensies resulteren in hogere hoekfrequenties. Deze relatie maakt stress drop schatting mogelijk uit spectrale analyse en onthult aardbevings schaal eigenschappen."
        }
      },
      {
        question: {
          en: "What physical mechanisms govern the nonlinear site response during strong ground motion?",
          es: "¿Qué mecanismos físicos gobiernan la respuesta no lineal del sitio durante movimiento fuerte del suelo?",
          de: "Welche physikalischen Mechanismen bestimmen die nichtlineare Standortreaktion während starker Bodenbewegung?",
          nl: "Welke fysische mechanismen beheersen de niet-lineaire site respons tijdens sterke grondbeweging?"
        },
        options: [
          { en: "Shear modulus degradation and hysteretic damping increase with strain amplitude", es: "Degradación del módulo de cizalla y amortiguamiento histerético aumentan con amplitud de deformación", de: "Schermoduldegradation und hysteretische Dämpfung steigen mit Dehnungsamplitude", nl: "Schuifmodulus degradatie en hysteretische demping nemen toe met rek amplitude" },
          { en: "Soil liquefies instantaneously at all depths", es: "El suelo se licua instantáneamente a todas las profundidades", de: "Boden verflüssigt sich sofort in allen Tiefen", nl: "Bodem vloeibaar wordt onmiddellijk op alle dieptes" },
          { en: "Rock fractures create new wave paths", es: "Las fracturas de roca crean nuevos caminos de ondas", de: "Gesteinsbrüche schaffen neue Wellenpfade", nl: "Rots breuken creëren nieuwe golf paden" },
          { en: "Magnetic field variations affect wave velocity", es: "Las variaciones del campo magnético afectan la velocidad de ondas", de: "Magnetfeldvariationen beeinflussen Wellengeschwindigkeit", nl: "Magnetische veld variaties beïnvloeden golf snelheid" }
        ],
        correct: 0,
        explanation: {
          en: "Nonlinear site response occurs when shear strain exceeds ~10^-4, causing shear modulus (G) to decrease and damping to increase with strain amplitude. This results from soil skeleton rearrangement, pore pressure buildup, and microcrack opening. The stress-strain relationship becomes hysteretic, following loading-unloading loops that dissipate energy. Consequences include period elongation, amplitude deamplification at high frequencies, and generation of higher harmonics. Liquefaction represents extreme nonlinearity where effective stress approaches zero.",
          es: "La respuesta no lineal del sitio ocurre cuando la deformación de cizalla excede ~10^-4, causando que el módulo de cizalla (G) disminuya y el amortiguamiento aumente con la amplitud de deformación. Esto resulta del reordenamiento del esqueleto del suelo, acumulación de presión de poros y apertura de microfracturas. La relación esfuerzo-deformación se vuelve histerética, siguiendo bucles de carga-descarga que disipan energía. Las consecuencias incluyen elongación de período, desamplificación de amplitud en altas frecuencias y generación de armónicos superiores. La licuefacción representa no linealidad extrema donde el esfuerzo efectivo se aproxima a cero.",
          de: "Nichtlineare Standortreaktion tritt auf wenn Scherdehnung ~10^-4 überschreitet, wodurch Schermodul (G) abnimmt und Dämpfung mit Dehnungsamplitude zunimmt. Dies resultiert aus Bodenskelett-Umordnung, Porendruckaufbau und Mikroriss-Öffnung. Die Spannungs-Dehnungs-Beziehung wird hysteretisch, folgt Belastungs-Entlastungs-Schleifen die Energie dissipieren. Konsequenzen umfassen Periodenverlängerung, Amplitudendeamplifikation bei hohen Frequenzen und Erzeugung höherer Harmonischer. Verflüssigung repräsentiert extreme Nichtlinearität wo effektive Spannung sich null nähert.",
          nl: "Niet-lineaire site respons treedt op wanneer schuifrek ~10^-4 overschrijdt, waardoor schuifmodulus (G) afneemt en demping toeneemt met rek amplitude. Dit resulteert uit bodem skelet herrangschikking, poriën druk opbouw en microbreuk opening. De spanning-rek relatie wordt hysteretisch, volgt belasting-ontlasting lussen die energie dissiperen. Gevolgen omvatten periode verlenging, amplitude de-amplificatie bij hoge frequenties en generatie van hogere harmonischen. Vloeibaarmaking vertegenwoordigt extreme niet-lineariteit waar effectieve spanning nul benadert."
        }
      },
      {
        question: {
          en: "How do seismic interferometry techniques extract Green's functions from ambient noise cross-correlations?",
          es: "¿Cómo las técnicas de interferometría sísmica extraen funciones de Green de correlaciones cruzadas de ruido ambiental?",
          de: "Wie extrahieren seismische Interferometrie-Techniken Green'sche Funktionen aus Umgebungsrausch-Kreuzkorrelationen?",
          nl: "Hoe extraheren seismische interferometrie technieken Green's functies uit omgevingsruis kruis-correlaties?"
        },
        options: [
          { en: "Cross-correlation approximates Green's function when noise sources are equipartitioned", es: "La correlación cruzada aproxima la función de Green cuando las fuentes de ruido están equiparticionadas", de: "Kreuzkorrelation approximiert Green'sche Funktion wenn Rauschquellen gleichverteilt sind", nl: "Kruis-correlatie benadert Green's functie wanneer ruis bronnen equipartitioned zijn" },
          { en: "Fourier transforms directly reveal travel times", es: "Las transformadas de Fourier revelan directamente tiempos de viaje", de: "Fourier-Transformationen enthüllen direkt Laufzeiten", nl: "Fourier transformaties onthullen direct reistijden" },
          { en: "Signal amplification removes all background noise", es: "La amplificación de señal elimina todo ruido de fondo", de: "Signalverstärkung entfernt allen Hintergrundrausch", nl: "Signaal versterking verwijdert alle achtergrond ruis" },
          { en: "Temperature changes modify wave properties", es: "Los cambios de temperatura modifican las propiedades de ondas", de: "Temperaturänderungen modifizieren Welleneigenschaften", nl: "Temperatuur veranderingen wijzigen golf eigenschappen" }
        ],
        correct: 0,
        explanation: {
          en: "Seismic interferometry exploits the principle that cross-correlation of ambient noise recorded at two stations approximates the Green's function (impulse response) between them. This works when noise sources are sufficiently equipartitioned in space and time. The technique reveals surface waves, body waves, and scattered phases by stacking long-term cross-correlations. Major noise sources include ocean microseisms (0.05-1 Hz), human activity, and wind. Applications include passive imaging, monitoring velocity changes, and surface wave tomography without requiring earthquakes.",
          es: "La interferometría sísmica explota el principio de que la correlación cruzada de ruido ambiental grabado en dos estaciones aproxima la función de Green (respuesta de impulso) entre ellas. Esto funciona cuando las fuentes de ruido están suficientemente equiparticionadas en espacio y tiempo. La técnica revela ondas superficiales, ondas de cuerpo y fases dispersadas apilando correlaciones cruzadas de largo plazo. Las principales fuentes de ruido incluyen microsismos oceánicos (0.05-1 Hz), actividad humana y viento. Las aplicaciones incluyen imágenes pasivas, monitoreo de cambios de velocidad y tomografía de ondas superficiales sin requerir terremotos.",
          de: "Seismische Interferometrie nutzt das Prinzip dass Kreuzkorrelation von Umgebungsrausch an zwei Stationen die Green'sche Funktion (Impulsantwort) zwischen ihnen approximiert. Dies funktioniert wenn Rauschquellen ausreichend in Raum und Zeit gleichverteilt sind. Die Technik enthüllt Oberflächenwellen, Raumwellen und gestreute Phasen durch Stapelung langfristiger Kreuzkorrelationen. Hauptrauschquellen umfassen ozeanische Mikroseismen (0.05-1 Hz), menschliche Aktivität und Wind. Anwendungen umfassen passive Bildgebung, Überwachung von Geschwindigkeitsänderungen und Oberflächenwellen-Tomographie ohne Erdbeben zu benötigen.",
          nl: "Seismische interferometrie benut het principe dat kruis-correlatie van omgevingsruis opgenomen bij twee stations de Green's functie (impuls respons) tussen hen benadert. Dit werkt wanneer ruis bronnen voldoende equipartitioned zijn in ruimte en tijd. De techniek onthult oppervlakte golven, ruimte golven en verstrooide fasen door stapeling van lange termijn kruis-correlaties. Belangrijke ruis bronnen omvatten oceanische microseismen (0.05-1 Hz), menselijke activiteit en wind. Toepassingen omvatten passieve beeldvorming, monitoring snelheids veranderingen en oppervlakte golf tomografie zonder aardbevingen te vereisen."
        }
      },
      {
        question: {
          en: "What controls the rupture propagation velocity during large earthquake faulting processes?",
          es: "¿Qué controla la velocidad de propagación de ruptura durante procesos de falla de terremotos grandes?",
          de: "Was kontrolliert die Rupturausbreitungsgeschwindigkeit während großer Erdbeben-Verwerfungsprozesse?",
          nl: "Wat controleert de ruptuur propagatie snelheid tijdens grote aardbeving breuk processen?"
        },
        options: [
          { en: "Dynamic stress drop, fault friction, and geometric irregularities limit rupture to sub-Rayleigh speeds", es: "Caída de estrés dinámico, fricción de falla e irregularidades geométricas limitan ruptura a velocidades sub-Rayleigh", de: "Dynamischer Spannungsabfall, Verwerfungsreibung und geometrische Unregelmäßigkeiten begrenzen Ruptur auf sub-Rayleigh-Geschwindigkeiten", nl: "Dynamische stress drop, breuk wrijving en geometrische onregelmatigheden beperken ruptuur tot sub-Rayleigh snelheden" },
          { en: "Ruptures always travel at constant P-wave velocity", es: "Las rupturas siempre viajan a velocidad constante de ondas P", de: "Rupturen reisen immer mit konstanter P-Wellen-Geschwindigkeit", nl: "Rupturen reizen altijd met constante P-golf snelheid" },
          { en: "Temperature alone determines rupture speed", es: "Solo la temperatura determina la velocidad de ruptura", de: "Nur Temperatur bestimmt Rupturgeschwindigkeit", nl: "Alleen temperatuur bepaalt ruptuur snelheid" },
          { en: "Magnetic field strength controls rupture dynamics", es: "La fuerza del campo magnético controla la dinámica de ruptura", de: "Magnetfeldstärke kontrolliert Rupturdynamik", nl: "Magnetische veld sterkte controleert ruptuur dynamiek" }
        ],
        correct: 0,
        explanation: {
          en: "Rupture propagation velocity depends on dynamic stress conditions, fault friction laws, and geometric complexity. Most earthquakes propagate at sub-Rayleigh speeds (0.7-0.9 vs), where vs is shear velocity. Dynamic stress drop (difference between initial stress and dynamic friction) drives rupture. High stress drop and low friction promote faster propagation. Fault bends, steps, and heterogeneities can slow, stop, or redirect ruptures. Supershear ruptures (>vs) occur rarely on very smooth, favorably oriented faults under high stress conditions.",
          es: "La velocidad de propagación de ruptura depende de condiciones de estrés dinámico, leyes de fricción de falla y complejidad geométrica. La mayoría de terremotos se propagan a velocidades sub-Rayleigh (0.7-0.9 vs), donde vs es velocidad de cizalla. La caída de estrés dinámico (diferencia entre estrés inicial y fricción dinámica) impulsa la ruptura. Alta caída de estrés y baja fricción promueven propagación más rápida. Curvas, escalones y heterogeneidades de falla pueden ralentizar, detener o redirigir rupturas. Rupturas supershear (>vs) ocurren raramente en fallas muy lisas, favorablemente orientadas bajo condiciones de alto estrés.",
          de: "Rupturausbreitungsgeschwindigkeit hängt von dynamischen Spannungsbedingungen, Verwerfungsreibungsgesetzen und geometrischer Komplexität ab. Die meisten Erdbeben propagieren mit sub-Rayleigh-Geschwindigkeiten (0.7-0.9 vs), wo vs Schergeschwindigkeit ist. Dynamischer Spannungsabfall (Unterschied zwischen anfänglicher Spannung und dynamischer Reibung) treibt Ruptur an. Hoher Spannungsabfall und niedrige Reibung fördern schnellere Ausbreitung. Verwerfungsbögen, -stufen und -heterogenitäten können Rupturen verlangsamen, stoppen oder umleiten. Supershear-Rupturen (>vs) treten selten auf sehr glatten, günstig orientierten Verwerfungen unter hohen Spannungsbedingungen auf.",
          nl: "Ruptuur propagatie snelheid hangt af van dynamische stress condities, breuk wrijvings wetten en geometrische complexiteit. De meeste aardbevingen propageren met sub-Rayleigh snelheden (0.7-0.9 vs), waarbij vs schuif snelheid is. Dynamische stress drop (verschil tussen initiële stress en dynamische wrijving) drijft ruptuur aan. Hoge stress drop en lage wrijving bevorderen snellere propagatie. Breuk bochten, stappen en heterogeniteiten kunnen rupturen vertragen, stoppen of omleiden. Supershear rupturen (>vs) treden zelden op bij zeer gladde, gunstig georiënteerde breuken onder hoge stress condities."
        }
      },
      {
        question: {
          en: "How do ocean-generated microseisms provide information about ocean wave climate and coastal processes?",
          es: "¿Cómo los microsismos generados por el océano proporcionan información sobre el clima de ondas oceánicas y procesos costeros?",
          de: "Wie liefern ozeanerzeugte Mikroseismen Informationen über Ozeanwellenklima und Küstenprozesse?",
          nl: "Hoe leveren oceaan-gegenereerde microseismen informatie over oceaan golf klimaat en kust processen?"
        },
        options: [
          { en: "Primary microseisms (~0.1 Hz) from coastal wave interaction, secondary microseisms (~0.2 Hz) from standing wave interference", es: "Microsismos primarios (~0.1 Hz) de interacción de ondas costeras, microsismos secundarios (~0.2 Hz) de interferencia de ondas estacionarias", de: "Primäre Mikroseismen (~0.1 Hz) aus Küstenwellen-Wechselwirkung, sekundäre Mikroseismen (~0.2 Hz) aus stehenden Wellen-Interferenz", nl: "Primaire microseismen (~0.1 Hz) uit kust golf interactie, secundaire microseismen (~0.2 Hz) uit staande golf interferentie" },
          { en: "Microseisms only occur during volcanic eruptions", es: "Los microsismos solo ocurren durante erupciones volcánicas", de: "Mikroseismen treten nur während Vulkanausbrüchen auf", nl: "Microseismen treden alleen op tijdens vulkanische uitbarstingen" },
          { en: "Temperature changes in seawater generate vibrations", es: "Los cambios de temperatura en agua de mar generan vibraciones", de: "Temperaturänderungen in Meerwasser erzeugen Vibrationen", nl: "Temperatuur veranderingen in zeewater genereren trillingen" },
          { en: "Tidal forces directly create seismic waves", es: "Las fuerzas de marea crean directamente ondas sísmicas", de: "Gezeitenkräfte erzeugen direkt seismische Wellen", nl: "Getij krachten creëren direct seismische golven" }
        ],
        correct: 0,
        explanation: {
          en: "Ocean microseisms are continuous seismic background noise generated by ocean wave activity. Primary microseisms (~0.05-0.15 Hz) result from direct wave-seafloor interaction in shallow coastal waters, with frequency matching ocean wave periods. Secondary microseisms (~0.1-0.3 Hz) arise from nonlinear interaction between opposing wave trains, creating standing waves that generate double-frequency pressure fluctuations on the seafloor. Microseismic energy correlates with significant wave height and storm intensity, enabling remote ocean wave climate monitoring and understanding coastal dynamics.",
          es: "Los microsismos oceánicos son ruido sísmico de fondo continuo generado por actividad de ondas oceánicas. Los microsismos primarios (~0.05-0.15 Hz) resultan de interacción directa onda-fondo marino en aguas costeras poco profundas, con frecuencia coincidiendo con períodos de ondas oceánicas. Los microsismos secundarios (~0.1-0.3 Hz) surgen de interacción no lineal entre trenes de ondas opuestos, creando ondas estacionarias que generan fluctuaciones de presión de doble frecuencia en el fondo marino. La energía microsísmica se correlaciona con altura significativa de ondas e intensidad de tormentas, permitiendo monitoreo remoto del clima de ondas oceánicas y comprensión de dinámicas costeras.",
          de: "Ozeanische Mikroseismen sind kontinuierliches seismisches Hintergrundrauschen erzeugt durch Ozeanwellenaktivität. Primäre Mikroseismen (~0.05-0.15 Hz) resultieren aus direkter Welle-Meeresboden-Wechselwirkung in flachen Küstengewässern, mit Frequenz passend zu Ozeanwellenperioden. Sekundäre Mikroseismen (~0.1-0.3 Hz) entstehen aus nichtlinearer Wechselwirkung zwischen entgegengesetzten Wellenzügen, wodurch stehende Wellen entstehen die Doppelfrequenz-Druckschwankungen am Meeresboden erzeugen. Mikroseismische Energie korreliert mit signifikanter Wellenhöhe und Sturmintensität, ermöglicht ferngesteuerte Überwachung des Ozeanwellenklimas und Verständnis der Küstendynamik.",
          nl: "Oceanische microseismen zijn continue seismische achtergrond ruis gegenereerd door oceaan golf activiteit. Primaire microseismen (~0.05-0.15 Hz) resulteren uit directe golf-zeebodem interactie in ondiepe kust wateren, met frequentie overeenkomend met oceaan golf perioden. Secundaire microseismen (~0.1-0.3 Hz) ontstaan uit niet-lineaire interactie tussen tegengestelde golf treinen, creërend staande golven die dubbele-frequentie druk fluctuaties op de zeebodem genereren. Microseismische energie correleert met significante golf hoogte en storm intensiteit, mogelijk makend remote oceaan golf klimaat monitoring en begrip van kust dynamiek."
        }
      },
      {
        question: {
          en: "What are the key differences between kinematic and dynamic earthquake source inversion approaches?",
          es: "¿Cuáles son las diferencias clave entre enfoques de inversión de fuente de terremoto cinemático y dinámico?",
          de: "Was sind die Hauptunterschiede zwischen kinematischen und dynamischen Erdbebenquellen-Inversionsansätzen?",
          nl: "Wat zijn de belangrijkste verschillen tussen kinematische en dynamische aardbevings bron inversie benaderingen?"
        },
        options: [
          { en: "Kinematic inversion solves for slip distribution from observations; dynamic inversion incorporates fault physics and stress evolution", es: "Inversión cinemática resuelve distribución de deslizamiento de observaciones; inversión dinámica incorpora física de falla y evolución de estrés", de: "Kinematische Inversion löst für Slip-Verteilung aus Beobachtungen; dynamische Inversion bezieht Verwerfungsphysik und Stressevolution ein", nl: "Kinematische inversie lost slip distributie op uit observaties; dynamische inversie incorporeert breuk fysica en stress evolutie" },
          { en: "Both methods use identical mathematical formulations", es: "Ambos métodos usan formulaciones matemáticas idénticas", de: "Beide Methoden verwenden identische mathematische Formulierungen", nl: "Beide methoden gebruiken identieke wiskundige formuleringen" },
          { en: "Dynamic inversion only works for small earthquakes", es: "La inversión dinámica solo funciona para terremotos pequeños", de: "Dynamische Inversion funktioniert nur für kleine Erdbeben", nl: "Dynamische inversie werkt alleen voor kleine aardbevingen" },
          { en: "Kinematic inversion requires knowledge of stress state", es: "La inversión cinemática requiere conocimiento del estado de estrés", de: "Kinematische Inversion erfordert Kenntnis des Spannungszustands", nl: "Kinematische inversie vereist kennis van stress toestand" }
        ],
        correct: 0,
        explanation: {
          en: "Kinematic source inversion determines earthquake source parameters (slip distribution, rupture time, rise time) by fitting observed seismic waveforms without considering underlying physics. It treats rupture as prescribed motion and solves a linear inverse problem. Dynamic inversion incorporates fault mechanics, stress evolution, and friction laws to predict rupture behavior from initial conditions and material properties. While kinematic inversions provide detailed rupture images, dynamic inversions reveal physical processes controlling earthquake rupture and can predict ground motion for scenario earthquakes.",
          es: "La inversión de fuente cinemática determina parámetros de fuente de terremoto (distribución de deslizamiento, tiempo de ruptura, tiempo de ascenso) ajustando formas de onda sísmicas observadas sin considerar física subyacente. Trata la ruptura como movimiento prescrito y resuelve un problema inverso lineal. La inversión dinámica incorpora mecánica de falla, evolución de estrés y leyes de fricción para predecir comportamiento de ruptura desde condiciones iniciales y propiedades de material. Mientras las inversiones cinemáticas proporcionan imágenes detalladas de ruptura, las inversiones dinámicas revelan procesos físicos controlando ruptura de terremoto y pueden predecir movimiento del suelo para terremotos de escenario.",
          de: "Kinematische Quelleninversion bestimmt Erdbebenquellenparameter (Slip-Verteilung, Rupturzeit, Anstiegszeit) durch Anpassung beobachteter seismischer Wellenformen ohne zugrunde liegende Physik zu berücksichtigen. Sie behandelt Ruptur als vorgeschriebene Bewegung und löst ein lineares inverses Problem. Dynamische Inversion bezieht Verwerfungsmechanik, Stressevolution und Reibungsgesetze ein um Rupturverhalten aus Anfangsbedingungen und Materialeigenschaften vorherzusagen. Während kinematische Inversionen detaillierte Rupturbilder liefern, enthüllen dynamische Inversionen physikalische Prozesse die Erdbebenruptur kontrollieren und können Bodenbewegung für Szenario-Erdbeben vorhersagen.",
          nl: "Kinematische bron inversie bepaalt aardbevings bron parameters (slip distributie, ruptuur tijd, stijg tijd) door het fitten van geobserveerde seismische golfvormen zonder onderliggende fysica te overwegen. Het behandelt ruptuur als voorgeschreven beweging en lost een lineair invers probleem op. Dynamische inversie incorporeert breuk mechanica, stress evolutie en wrijvings wetten om ruptuur gedrag te voorspellen uit initiële condities en materiaal eigenschappen. Terwijl kinematische inversies gedetailleerde ruptuur beelden leveren, onthullen dynamische inversies fysische processen die aardbevings ruptuur controleren en kunnen grond beweging voorspellen voor scenario aardbevingen."
        }
      },
      {
        question: {
          en: "How does seismic attenuation (Q-factor) vary with frequency, temperature, and partial melt content in the Earth's interior?",
          es: "¿Cómo varía la atenuación sísmica (factor Q) con frecuencia, temperatura y contenido de fusión parcial en el interior de la Tierra?",
          de: "Wie variiert seismische Dämpfung (Q-Faktor) mit Frequenz, Temperatur und partiellen Schmelzgehalt im Erdinneren?",
          nl: "Hoe varieert seismische verzwakking (Q-factor) met frequentie, temperatuur en partiële smelt inhoud in het aarde binnenste?"
        },
        options: [
          { en: "Q increases with frequency (Q ∝ f^α), decreases with temperature following Arrhenius law, and drops significantly with partial melt", es: "Q aumenta con frecuencia (Q ∝ f^α), disminuye con temperatura siguiendo ley de Arrhenius, y cae significativamente con fusión parcial", de: "Q steigt mit Frequenz (Q ∝ f^α), nimmt mit Temperatur nach Arrhenius-Gesetz ab, und fällt erheblich mit partieller Schmelze", nl: "Q neemt toe met frequentie (Q ∝ f^α), neemt af met temperatuur volgend Arrhenius wet, en daalt significant met partiële smelt" },
          { en: "Q is constant regardless of any physical conditions", es: "Q es constante independientemente de cualquier condición física", de: "Q ist konstant unabhängig von physikalischen Bedingungen", nl: "Q is constant ongeacht fysische condities" },
          { en: "Only magnetic field strength affects Q values", es: "Solo la fuerza del campo magnético afecta los valores Q", de: "Nur Magnetfeldstärke beeinflusst Q-Werte", nl: "Alleen magnetische veld sterkte beïnvloedt Q waarden" },
          { en: "Q decreases linearly with depth only", es: "Q disminuye linealmente solo con profundidad", de: "Q nimmt nur linear mit der Tiefe ab", nl: "Q neemt alleen lineair af met diepte" }
        ],
        correct: 0,
        explanation: {
          en: "Seismic attenuation (Q^-1) represents energy dissipation during wave propagation. Q typically increases with frequency following power law Q ∝ f^α where α~0.1-0.4, due to relaxation spectrum of anelastic processes. Temperature strongly affects Q through thermally activated relaxation mechanisms following Arrhenius behavior: Q^-1 ∝ exp(-E*/RT). Partial melt dramatically reduces Q because liquid phases increase energy dissipation through viscous flow and scattering. These relationships enable seismic detection of temperature anomalies and melt regions in the mantle.",
          es: "La atenuación sísmica (Q^-1) representa disipación de energía durante propagación de ondas. Q típicamente aumenta con frecuencia siguiendo ley de potencia Q ∝ f^α donde α~0.1-0.4, debido al espectro de relajación de procesos anelásticos. La temperatura afecta fuertemente Q a través de mecanismos de relajación térmicamente activados siguiendo comportamiento de Arrhenius: Q^-1 ∝ exp(-E*/RT). La fusión parcial reduce drásticamente Q porque las fases líquidas aumentan disipación de energía a través de flujo viscoso y dispersión. Estas relaciones permiten detección sísmica de anomalías de temperatura y regiones de fusión en el manto.",
          de: "Seismische Dämpfung (Q^-1) repräsentiert Energiedissipation während Wellenausbreitung. Q steigt typischerweise mit Frequenz nach Potenzgesetz Q ∝ f^α wo α~0.1-0.4, aufgrund des Relaxationsspektrums anelastischer Prozesse. Temperatur beeinflusst Q stark durch thermisch aktivierte Relaxationsmechanismen nach Arrhenius-Verhalten: Q^-1 ∝ exp(-E*/RT). Partielle Schmelze reduziert Q dramatisch weil flüssige Phasen Energiedissipation durch viskosen Fluss und Streuung erhöhen. Diese Beziehungen ermöglichen seismische Detektion von Temperaturanomalien und Schmelzregionen im Mantel.",
          nl: "Seismische verzwakking (Q^-1) vertegenwoordigt energie dissipatie tijdens golf propagatie. Q neemt typisch toe met frequentie volgend macht wet Q ∝ f^α waarbij α~0.1-0.4, door relaxatie spectrum van anelastische processen. Temperatuur beïnvloedt Q sterk door thermisch geactiveerde relaxatie mechanismen volgend Arrhenius gedrag: Q^-1 ∝ exp(-E*/RT). Partiële smelt reduceert Q dramatisch omdat vloeistof fasen energie dissipatie verhogen door viskeuze stroming en verstrooiing. Deze relaties maken seismische detectie mogelijk van temperatuur anomalieën en smelt regio's in de mantel."
        }
      },
      {
        question: {
          en: "What role does fault zone structure and damage zones play in controlling earthquake rupture propagation and arrest?",
          es: "¿Qué papel juega la estructura de zona de falla y zonas de daño en controlar propagación y detención de ruptura de terremoto?",
          de: "Welche Rolle spielt Verwerfungszonenstruktur und Schadenszonen bei der Kontrolle von Erdbebenruptur-Ausbreitung und -Stillstand?",
          nl: "Welke rol speelt breuk zone structuur en schade zones bij het controleren van aardbevings ruptuur propagatie en arrestatie?"
        },
        options: [
          { en: "Damage zones create velocity gradients, stress concentrations, and heterogeneous friction that can channel, slow, or arrest ruptures", es: "Las zonas de daño crean gradientes de velocidad, concentraciones de estrés y fricción heterogénea que pueden canalizar, ralentizar o detener rupturas", de: "Schadenszonen erzeugen Geschwindigkeitsgradienten, Spannungskonzentrationen und heterogene Reibung die Rupturen kanalisieren, verlangsamen oder stoppen können", nl: "Schade zones creëren snelheids gradiënten, stress concentraties en heterogene wrijving die rupturen kunnen kanaliseren, vertragen of arresteren" },
          { en: "Fault zones have no effect on rupture dynamics", es: "Las zonas de falla no tienen efecto en la dinámica de ruptura", de: "Verwerfungszonen haben keinen Effekt auf Rupturdynamik", nl: "Breuk zones hebben geen effect op ruptuur dynamiek" },
          { en: "Only the fault core controls all rupture processes", es: "Solo el núcleo de falla controla todos los procesos de ruptura", de: "Nur der Verwerfungskern kontrolliert alle Rupturprozesse", nl: "Alleen de breuk kern controleert alle ruptuur processen" },
          { en: "Temperature variations alone determine rupture behavior", es: "Solo las variaciones de temperatura determinan el comportamiento de ruptura", de: "Nur Temperaturschwankungen bestimmen Rupturverhalten", nl: "Alleen temperatuur variaties bepalen ruptuur gedrag" }
        ],
        correct: 0,
        explanation: {
          en: "Fault zones consist of a narrow fault core surrounded by broader damage zones with fractured rock and reduced seismic velocities. This structure creates complex rupture dynamics: velocity contrasts can channel ruptures along the fault core, stress concentrations at damage zone boundaries can arrest ruptures, and heterogeneous friction distributions affect slip patterns. Geometric irregularities like bends, steps, and branches interact with damage zone properties to influence rupture propagation. Understanding fault zone architecture is crucial for earthquake hazard assessment and ground motion prediction.",
          es: "Las zonas de falla consisten en un núcleo de falla estrecho rodeado por zonas de daño más amplias con roca fracturada y velocidades sísmicas reducidas. Esta estructura crea dinámica de ruptura compleja: contrastes de velocidad pueden canalizar rupturas a lo largo del núcleo de falla, concentraciones de estrés en límites de zona de daño pueden detener rupturas, y distribuciones de fricción heterogéneas afectan patrones de deslizamiento. Irregularidades geométricas como curvas, escalones y ramificaciones interactúan con propiedades de zona de daño para influir propagación de ruptura. Entender arquitectura de zona de falla es crucial para evaluación de peligro sísmico y predicción de movimiento del suelo.",
          de: "Verwerfungszonen bestehen aus einem schmalen Verwerfungskern umgeben von breiteren Schadenszonen mit gebrochenen Gestein und reduzierten seismischen Geschwindigkeiten. Diese Struktur erzeugt komplexe Rupturdynamik: Geschwindigkeitskontraste können Rupturen entlang des Verwerfungskerns kanalisieren, Spannungskonzentrationen an Schadenszonengrenzen können Rupturen stoppen, und heterogene Reibungsverteilungen beeinflussen Slip-Muster. Geometrische Unregelmäßigkeiten wie Bögen, Stufen und Verzweigungen interagieren mit Schadenszonen-Eigenschaften um Rupturausbreitung zu beeinflussen. Verständnis der Verwerfungszonen-Architektur ist entscheidend für Erdbebengefahr-Bewertung und Bodenbewegung-Vorhersage.",
          nl: "Breuk zones bestaan uit een smalle breuk kern omgeven door bredere schade zones met gefractureerd gesteente en gereduceerde seismische snelheden. Deze structuur creëert complexe ruptuur dynamiek: snelheids contrasten kunnen rupturen kanaliseren langs de breuk kern, stress concentraties bij schade zone grenzen kunnen rupturen arresteren, en heterogene wrijvings distributies beïnvloeden slip patronen. Geometrische onregelmatigheden zoals bochten, stappen en vertakkingen interacteren met schade zone eigenschappen om ruptuur propagatie te beïnvloeden. Begrip van breuk zone architectuur is cruciaal voor aardbevings gevaar beoordeling en grond bewegings voorspelling."
        }
      },
      {
        question: {
          en: "How do multicomponent seismic arrays enhance detection and characterization of weak seismic signals?",
          es: "¿Cómo mejoran los arreglos sísmicos multicomponente la detección y caracterización de señales sísmicas débiles?",
          de: "Wie verbessern Mehrkomponenten-Seismarrays die Detektion und Charakterisierung schwacher seismischer Signale?",
          nl: "Hoe verbeteren multi-component seismische arrays detectie en karakterisering van zwakke seismische signalen?"
        },
        options: [
          { en: "Array processing uses coherent stacking, beamforming, and polarization analysis to enhance SNR and determine wave properties", es: "Procesamiento de arreglos usa apilamiento coherente, formación de haz y análisis de polarización para mejorar SNR y determinar propiedades de ondas", de: "Array-Verarbeitung nutzt kohärente Stapelung, Strahlformung und Polarisationsanalyse um SNR zu verbessern und Welleneigenschaften zu bestimmen", nl: "Array verwerking gebruikt coherente stapeling, bundel vorming en polarisatie analyse om SNR te verbeteren en golf eigenschappen te bepalen" },
          { en: "Arrays only work for earthquakes larger than magnitude 5", es: "Los arreglos solo funcionan para terremotos mayores que magnitud 5", de: "Arrays funktionieren nur für Erdbeben größer als Magnitude 5", nl: "Arrays werken alleen voor aardbevingen groter dan magnitude 5" },
          { en: "Single sensors provide better resolution than arrays", es: "Sensores individuales proporcionan mejor resolución que arreglos", de: "Einzelsensoren bieten bessere Auflösung als Arrays", nl: "Enkele sensoren bieden betere resolutie dan arrays" },
          { en: "Arrays cannot distinguish between different wave types", es: "Los arreglos no pueden distinguir entre diferentes tipos de ondas", de: "Arrays können nicht zwischen verschiedenen Wellentypen unterscheiden", nl: "Arrays kunnen niet onderscheiden tussen verschillende golf typen" }
        ],
        correct: 0,
        explanation: {
          en: "Multicomponent seismic arrays combine multiple three-component seismometers in geometric configurations to enhance weak signal detection and characterization. Key techniques include: coherent stacking to improve signal-to-noise ratio, beamforming to determine slowness and back-azimuth, polarization analysis to identify wave types (P, S, surface waves), and f-k analysis for phase velocity estimation. Arrays can detect signals below single-station noise levels, separate multiple arrivals, and provide detailed wave propagation information essential for earthquake location, nuclear monitoring, and structural studies.",
          es: "Los arreglos sísmicos multicomponente combinan múltiples sismómetros de tres componentes en configuraciones geométricas para mejorar detección y caracterización de señales débiles. Técnicas clave incluyen: apilamiento coherente para mejorar relación señal-ruido, formación de haz para determinar lentitud y retroazimut, análisis de polarización para identificar tipos de ondas (P, S, superficiales), y análisis f-k para estimación de velocidad de fase. Los arreglos pueden detectar señales bajo niveles de ruido de estación individual, separar múltiples llegadas, y proporcionar información detallada de propagación de ondas esencial para localización de terremotos, monitoreo nuclear y estudios estructurales.",
          de: "Mehrkomponenten-Seismarrays kombinieren mehrere Drei-Komponenten-Seismometer in geometrischen Konfigurationen um schwache Signalerkennung und -charakterisierung zu verbessern. Haupttechniken umfassen: kohärente Stapelung um Signal-Rausch-Verhältnis zu verbessern, Strahlformung um Langsamkeit und Rück-Azimut zu bestimmen, Polarisationsanalyse um Wellentypen zu identifizieren (P, S, Oberflächenwellen), und f-k-Analyse für Phasengeschwindigkeits-Schätzung. Arrays können Signale unter Einzelstations-Rauschpegeln detektieren, mehrfache Ankünfte trennen, und detaillierte Wellenausbreitungs-Information liefern die für Erdbebenlokalisierung, Nuklearüberwachung und Strukturstudien wesentlich ist.",
          nl: "Multi-component seismische arrays combineren meerdere drie-component seismometers in geometrische configuraties om zwakke signaal detectie en karakterisering te verbeteren. Sleutel technieken omvatten: coherente stapeling om signaal-tot-ruis verhouding te verbeteren, bundel vorming om traagheid en terug-azimuth te bepalen, polarisatie analyse om golf typen te identificeren (P, S, oppervlakte golven), en f-k analyse voor fase snelheids schatting. Arrays kunnen signalen detecteren onder enkele-station ruis niveaus, meerdere aankomsten scheiden, en gedetailleerde golf propagatie informatie leveren essentieel voor aardbevings lokalisatie, nucleaire monitoring en structurele studies."
        }
      },
      {
        question: {
          en: "What physical processes control the generation and propagation of tsunami waves from submarine earthquakes?",
          es: "¿Qué procesos físicos controlan la generación y propagación de ondas de tsunami de terremotos submarinos?",
          de: "Welche physikalischen Prozesse kontrollieren die Erzeugung und Ausbreitung von Tsunami-Wellen aus Unterwasser-Erdbeben?",
          nl: "Welke fysische processen controleren de generatie en propagatie van tsunami golven uit onderzeese aardbevingen?"
        },
        options: [
          { en: "Seafloor deformation displaces water column, creating long-wavelength gravity waves propagating at √(gh)", es: "Deformación del fondo marino desplaza columna de agua, creando ondas gravitatorias de longitud de onda larga propagándose a √(gh)", de: "Meeresbodendeformation verschiebt Wassersäule, erzeugt langwellige Gravitationswellen die sich mit √(gh) ausbreiten", nl: "Zeebodem deformatie verplaatst water kolom, creërend lange-golflengte zwaartekracht golven propagerend op √(gh)" },
          { en: "Sound waves directly create tsunami through resonance", es: "Las ondas sonoras crean directamente tsunami a través de resonancia", de: "Schallwellen erzeugen direkt Tsunami durch Resonanz", nl: "Geluid golven creëren direct tsunami door resonantie" },
          { en: "Magnetic field changes accelerate ocean water", es: "Los cambios del campo magnético aceleran el agua oceánica", de: "Magnetfeldänderungen beschleunigen Ozeanwasser", nl: "Magnetische veld veranderingen versnellen oceaan water" },
          { en: "Temperature gradients drive wave formation", es: "Los gradientes de temperatura impulsan formación de ondas", de: "Temperaturgradienten treiben Wellenbildung an", nl: "Temperatuur gradiënten drijven golf formatie aan" }
        ],
        correct: 0,
        explanation: {
          en: "Tsunami generation requires significant vertical seafloor displacement that instantaneously displaces the overlying water column. The displaced water seeks gravitational equilibrium, creating long-wavelength (100-200 km) shallow-water gravity waves. Propagation speed is √(gh) where g is gravity and h is water depth, typically 200-800 km/h in deep ocean. Wave amplitude remains small in deep water but increases dramatically in shallow coastal areas due to shoaling effects. Earthquake magnitude, focal depth, rupture orientation, and seafloor displacement patterns control tsunami efficiency.",
          es: "La generación de tsunami requiere desplazamiento vertical significativo del fondo marino que instantáneamente desplaza la columna de agua superpuesta. El agua desplazada busca equilibrio gravitatorio, creando ondas gravitatorias de agua poco profunda de longitud de onda larga (100-200 km). La velocidad de propagación es √(gh) donde g es gravedad y h es profundidad del agua, típicamente 200-800 km/h en océano profundo. La amplitud de onda permanece pequeña en agua profunda pero aumenta dramáticamente en áreas costeras poco profundas debido a efectos de bajío. Magnitud de terremoto, profundidad focal, orientación de ruptura y patrones de desplazamiento del fondo marino controlan eficiencia de tsunami.",
          de: "Tsunami-Erzeugung erfordert signifikante vertikale Meeresbodenverschiebung die instantan die darüberliegende Wassersäule verschiebt. Das verschobene Wasser sucht Gravitationsgleichgewicht, wodurch langwellige (100-200 km) Flachwasser-Gravitationswellen entstehen. Ausbreitungsgeschwindigkeit ist √(gh) wo g Gravitation und h Wassertiefe ist, typischerweise 200-800 km/h in tiefem Ozean. Wellenamplitude bleibt klein in tiefem Wasser aber steigt dramatisch in flachen Küstengebieten aufgrund von Untiefen-Effekten. Erdbebenmagnitude, Herdtiefe, Rupturorientierung und Meeresbodenverschiebungs-Muster kontrollieren Tsunami-Effizienz.",
          nl: "Tsunami generatie vereist significante verticale zeebodem verplaatsing die onmiddellijk de bovenliggende water kolom verplaatst. Het verplaatste water zoekt zwaartekracht evenwicht, creërend lange-golflengte (100-200 km) ondiep-water zwaartekracht golven. Propagatie snelheid is √(gh) waarbij g zwaartekracht en h water diepte is, typisch 200-800 km/u in diepe oceaan. Golf amplitude blijft klein in diep water maar neemt dramatisch toe in ondiepe kust gebieden door ondiepte effecten. Aardbevings magnitude, focus diepte, ruptuur oriëntatie en zeebodem verplaatsings patronen controleren tsunami efficiëntie."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mind-bender/seismology', level1);
  }
})();
