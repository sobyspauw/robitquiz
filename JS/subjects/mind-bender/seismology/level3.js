(function() {
  const level3 = {
    name: { 
      en: 'Advanced Seismographic Analysis & Earthquake Mechanics', 
      es: 'Análisis Sismográfico Avanzado y Mecánica de Terremotos', 
      de: 'Erweiterte Seismographische Analyse & Erdbebenmechanik', 
      nl: 'Geavanceerde Seismografische Analyse & Aardbevingsmechanica' 
    },
  questions: [
    {
      question: {
        en: "What is the primary mechanism behind deep focus earthquakes occurring at depths greater than 300 km?",
        es: "¿Cuál es el mecanismo principal detrás de los terremotos de foco profundo que ocurren a profundidades mayores de 300 km?",
        de: "Was ist der primäre Mechanismus hinter tiefen Herdbeben, die in Tiefen von mehr als 300 km auftreten?",
        nl: "Wat is het primaire mechanisme achter diepe-focus aardbevingen die optreden op diepten van meer dan 300 km?"
      },
      options: [
        { en: "Brittle fracture in cold, rigid slabs", es: "Fractura frágil en placas frías y rígidas", de: "Spröde Brüche in kalten, starren Platten", nl: "Breekbare breuk in koude, stijve platen" },
        { en: "Thermal expansion cracking", es: "Agrietamiento por expansión térmica", de: "Thermische Ausdehnungsrisse", nl: "Thermische uitzettingsscheuren" },
        { en: "Phase transitions in subducting slabs", es: "Transiciones de fase en placas subductoras", de: "Phasenübergänge in subduzierenden Platten", nl: "Faseovergangen in subducterende platen" },
        { en: "Fluid pressure release", es: "Liberación de presión de fluidos", de: "Flüssigkeitsdruckfreisetzung", nl: "Vloeistofdruk vrijgave" }
      ],
      correct: 2,
      explanation: {
        en: "Deep focus earthquakes are primarily caused by phase transitions (such as olivine to spinel) in subducting slabs under extreme pressure and temperature conditions, which cause sudden volume changes and seismic energy release.",
        es: "Los terremotos de foco profundo son causados principalmente por transiciones de fase (como olivino a espinela) en placas subductoras bajo condiciones extremas de presión y temperatura, que causan cambios súbitos de volumen y liberación de energía sísmica.",
        de: "Tiefe Herdbeben werden hauptsächlich durch Phasenübergänge (wie Olivin zu Spinell) in subduzierenden Platten unter extremen Druck- und Temperaturbedingungen verursacht, die plötzliche Volumenänderungen und seismische Energiefreisetzung bewirken.",
        nl: "Diepe-focus aardbevingen worden voornamelijk veroorzaakt door faseovergangen (zoals olivijn naar spinel) in subducterende platen onder extreme druk- en temperatuuromstandigheden, die plotselinge volumeveranderingen en seismische energievrijgave veroorzaken."
      }
    },
    {
      question: {
        en: "What seismic parameter is used to quantify the directional radiation pattern of earthquake energy?",
        es: "¿Qué parámetro sísmico se utiliza para cuantificar el patrón de radiación direccional de la energía del terremoto?",
        de: "Welcher seismische Parameter wird verwendet, um das richtungsabhängige Strahlungsmuster der Erdbebenergie zu quantifizieren?",
        nl: "Welke seismische parameter wordt gebruikt om het richtingspatroon van aardbevingsenergie te kwantificeren?"
      },
      options: [
        { en: "Focal mechanism solution", es: "Solución del mecanismo focal", de: "Fokale Mechanismuslösung", nl: "Focale mechanisme oplossing" },
        { en: "Seismic moment tensor", es: "Tensor de momento sísmico", de: "Seismischer Momenttensor", nl: "Seismische momenttensor" },
        { en: "Radiation pattern coefficient", es: "Coeficiente de patrón de radiación", de: "Strahlungsmusterkoeffizient", nl: "Stralingspatroon coëfficiënt" },
        { en: "Azimuthal anisotropy factor", es: "Factor de anisotropía azimutal", de: "Azimutaler Anisotropiefaktor", nl: "Azimutale anisotropiefactor" }
      ],
      correct: 2,
      explanation: {
        en: "The radiation pattern coefficient quantifies how seismic energy is directionally distributed around the earthquake source, accounting for the geometric relationship between fault orientation and wave propagation direction.",
        es: "El coeficiente de patrón de radiación cuantifica cómo se distribuye direccionalmente la energía sísmica alrededor de la fuente del terremoto, considerando la relación geométrica entre la orientación de la falla y la dirección de propagación de las ondas.",
        de: "Der Strahlungsmusterkoeffizient quantifiziert, wie seismische Energie richtungsabhängig um die Erdbebenquelle verteilt wird, unter Berücksichtigung der geometrischen Beziehung zwischen Verwerfungsorientierung und Wellenausbreitungsrichtung.",
        nl: "De stralingspatroon coëfficiënt kwantificeert hoe seismische energie directioneel verdeeld wordt rond de aardbevingsbron, rekening houdend met de geometrische relatie tussen breukoriëntatie en golfvoortplantingsrichting."
      }
    },
    {
      question: {
        en: "What is the typical velocity of Rayleigh waves compared to S-waves in crustal materials?",
        es: "¿Cuál es la velocidad típica de las ondas Rayleigh comparada con las ondas S en materiales de la corteza?",
        de: "Wie ist die typische Geschwindigkeit von Rayleigh-Wellen im Vergleich zu S-Wellen in Krustenmaterialien?",
        nl: "Wat is de typische snelheid van Rayleigh-golven vergeleken met S-golven in crustmaterialen?"
      },
      options: [
        { en: "About 0.9 times S-wave velocity", es: "Aproximadamente 0.9 veces la velocidad de las ondas S", de: "Etwa 0,9-fache S-Wellengeschwindigkeit", nl: "Ongeveer 0,9 keer de S-golfsnelheid" },
        { en: "Equal to S-wave velocity", es: "Igual a la velocidad de las ondas S", de: "Gleich der S-Wellengeschwindigkeit", nl: "Gelijk aan S-golfsnelheid" },
        { en: "About 1.1 times S-wave velocity", es: "Aproximadamente 1.1 veces la velocidad de las ondas S", de: "Etwa 1,1-fache S-Wellengeschwindigkeit", nl: "Ongeveer 1,1 keer de S-golfsnelheid" },
        { en: "About 1.5 times S-wave velocity", es: "Aproximadamente 1.5 veces la velocidad de las ondas S", de: "Etwa 1,5-fache S-Wellengeschwindigkeit", nl: "Ongeveer 1,5 keer de S-golfsnelheid" }
      ],
      correct: 0,
      explanation: {
        en: "Rayleigh waves travel at approximately 0.9 times the velocity of S-waves, making them slower than body waves but the fastest of the surface wave types, which is why they typically arrive first among surface waves.",
        es: "Las ondas Rayleigh viajan a aproximadamente 0.9 veces la velocidad de las ondas S, haciéndolas más lentas que las ondas internas pero las más rápidas de los tipos de ondas superficiales, razón por la cual típicamente llegan primero entre las ondas superficiales.",
        de: "Rayleigh-Wellen bewegen sich mit etwa 0,9-facher Geschwindigkeit der S-Wellen, wodurch sie langsamer als Raumwellen sind, aber die schnellsten unter den Oberflächenwellentypen, weshalb sie typischerweise als erste unter den Oberflächenwellen ankommen.",
        nl: "Rayleigh-golven reizen met ongeveer 0,9 keer de snelheid van S-golven, waardoor ze langzamer zijn dan ruimtegolven maar de snelste van de oppervlaktegolftypes, daarom komen ze meestal als eerste aan van de oppervlaktegolven."
      }
    },
    {
      question: {
        en: "What seismic phenomenon is characterized by the systematic arrival time delay of seismic phases due to velocity variations?",
        es: "¿Qué fenómeno sísmico se caracteriza por el retraso sistemático del tiempo de llegada de las fases sísmicas debido a variaciones de velocidad?",
        de: "Welches seismische Phänomen ist durch die systematische Ankunftszeitverzögerung seismischer Phasen aufgrund von Geschwindigkeitsvariationen gekennzeichnet?",
        nl: "Welk seismisch fenomeen wordt gekenmerkt door systematische aankomsttijdvertraging van seismische fasen door snelheidsvariaties?"
      },
      options: [
        { en: "Seismic anisotropy", es: "Anisotropía sísmica", de: "Seismische Anisotropie", nl: "Seismische anisotropie" },
        { en: "Travel time residuals", es: "Residuos de tiempo de viaje", de: "Laufzeitresiduuen", nl: "Reistijd residuen" },
        { en: "Phase velocity dispersion", es: "Dispersión de velocidad de fase", de: "Phasengeschwindigkeitsdispersion", nl: "Fasesnelheid dispersie" },
        { en: "Seismic attenuation", es: "Atenuación sísmica", de: "Seismische Dämpfung", nl: "Seismische demping" }
      ],
      correct: 1,
      explanation: {
        en: "Travel time residuals represent the systematic differences between observed and predicted arrival times of seismic phases, caused by velocity variations in the Earth's interior, and are crucial for seismic tomography studies.",
        es: "Los residuos de tiempo de viaje representan las diferencias sistemáticas entre los tiempos de llegada observados y predichos de las fases sísmicas, causadas por variaciones de velocidad en el interior de la Tierra, y son cruciales para estudios de tomografía sísmica.",
        de: "Laufzeitresiduuen repräsentieren die systematischen Unterschiede zwischen beobachteten und vorhergesagten Ankunftszeiten seismischer Phasen, verursacht durch Geschwindigkeitsvariationen im Erdinneren, und sind entscheidend für seismische Tomographiestudien.",
        nl: "Reistijd residuen vertegenwoordigen de systematische verschillen tussen waargenomen en voorspelde aankomsttijden van seismische fasen, veroorzaakt door snelheidsvariaties in het aardinnere, en zijn cruciaal voor seismische tomografie studies."
      }
    },
    {
      question: {
        en: "What is the primary cause of seismic wave amplitude decay with distance from the source?",
        es: "¿Cuál es la causa principal de la disminución de amplitud de las ondas sísmicas con la distancia de la fuente?",
        de: "Was ist die primäre Ursache für den Amplitudenabfall seismischer Wellen mit der Entfernung von der Quelle?",
        nl: "Wat is de primaire oorzaak van seismische golfamplitude-afname met afstand van de bron?"
      },
      options: [
        { en: "Geometric spreading only", es: "Solo dispersión geométrica", de: "Nur geometrische Ausbreitung", nl: "Alleen geometrische spreiding" },
        { en: "Anelastic attenuation only", es: "Solo atenuación anelástica", de: "Nur anelastische Dämpfung", nl: "Alleen anelastische demping" },
        { en: "Geometric spreading and anelastic attenuation", es: "Dispersión geométrica y atenuación anelástica", de: "Geometrische Ausbreitung und anelastische Dämpfung", nl: "Geometrische spreiding en anelastische demping" },
        { en: "Scattering effects only", es: "Solo efectos de dispersión", de: "Nur Streuungseffekte", nl: "Alleen verstrooiingseffecten" }
      ],
      correct: 2,
      explanation: {
        en: "Seismic wave amplitude decay results from both geometric spreading (energy distributed over larger wavefronts with distance) and anelastic attenuation (energy absorption by the Earth's materials), with geometric spreading dominating at shorter distances.",
        es: "La disminución de amplitud de las ondas sísmicas resulta tanto de la dispersión geométrica (energía distribuida sobre frentes de onda más grandes con la distancia) como de la atenuación anelástica (absorción de energía por los materiales de la Tierra), dominando la dispersión geométrica a distancias más cortas.",
        de: "Der Amplitudenabfall seismischer Wellen resultiert sowohl aus geometrischer Ausbreitung (Energie verteilt über größere Wellenfronten mit der Entfernung) als auch aus anelastischer Dämpfung (Energieabsorption durch Erdmaterialien), wobei geometrische Ausbreitung bei kürzeren Entfernungen dominiert.",
        nl: "Seismische golfamplitude-afname resulteert uit zowel geometrische spreiding (energie verdeeld over grotere golffronten met afstand) als anelastische demping (energie-absorptie door aardmaterialen), waarbij geometrische spreiding domineert op kortere afstanden."
      }
    },
    {
      question: {
        en: "What seismic analysis technique uses the polarization of three-component recordings to identify wave types?",
        es: "¿Qué técnica de análisis sísmico utiliza la polarización de registros de tres componentes para identificar tipos de ondas?",
        de: "Welche seismische Analysetechnik verwendet die Polarisation von dreikomponentigen Aufzeichnungen zur Identifikation von Wellentypen?",
        nl: "Welke seismische analysetechniek gebruikt de polarisatie van drie-componenten opnames om golftypes te identificeren?"
      },
      options: [
        { en: "Hodogram analysis", es: "Análisis de hodograma", de: "Hodogrammanalyse", nl: "Hodogram analyse" },
        { en: "Spectral decomposition", es: "Descomposición espectral", de: "Spektrale Zerlegung", nl: "Spectrale decompositie" },
        { en: "Cross-correlation method", es: "Método de correlación cruzada", de: "Kreuzkorrelationsmethode", nl: "Kruiscorrelatiemethode" },
        { en: "Wavelet transformation", es: "Transformación wavelet", de: "Wavelet-Transformation", nl: "Wavelet transformatie" }
      ],
      correct: 0,
      explanation: {
        en: "Hodogram analysis examines the particle motion trajectories recorded on three orthogonal components to determine wave polarization characteristics, helping distinguish between P-waves (linear motion), S-waves (transverse motion), and surface waves (elliptical motion).",
        es: "El análisis de hodograma examina las trayectorias de movimiento de partículas registradas en tres componentes ortogonales para determinar las características de polarización de las ondas, ayudando a distinguir entre ondas P (movimiento lineal), ondas S (movimiento transversal) y ondas superficiales (movimiento elíptico).",
        de: "Die Hodogrammanalyse untersucht die Partikelbewegungstrajektorien, die auf drei orthogonalen Komponenten aufgezeichnet wurden, um Wellenpolarisationsmerkmale zu bestimmen und zwischen P-Wellen (lineare Bewegung), S-Wellen (transversale Bewegung) und Oberflächenwellen (elliptische Bewegung) zu unterscheiden.",
        nl: "Hodogram analyse onderzoekt de deeltjesbeweging trajecten opgenomen op drie orthogonale componenten om golfpolarisatie kenmerken te bepalen, wat helpt om onderscheid te maken tussen P-golven (lineaire beweging), S-golven (transversale beweging), en oppervlaktegolven (elliptische beweging)."
      }
    },
    {
      question: {
        en: "What is the minimum number of seismic stations required to locate an earthquake epicenter using arrival time differences?",
        es: "¿Cuál es el número mínimo de estaciones sísmicas requeridas para localizar un epicentro de terremoto usando diferencias de tiempo de llegada?",
        de: "Wie viele seismische Stationen sind mindestens erforderlich, um ein Erdbebenzentrum mit Ankunftszeitunterschieden zu lokalisieren?",
        nl: "Wat is het minimum aantal seismische stations vereist om een aardbevingsepicenter te lokaliseren met aankomsttijdverschillen?"
      },
      options: [
        { en: "2 stations", es: "2 estaciones", de: "2 Stationen", nl: "2 stations" },
        { en: "3 stations", es: "3 estaciones", de: "3 Stationen", nl: "3 stations" },
        { en: "4 stations", es: "4 estaciones", de: "4 Stationen", nl: "4 stations" },
        { en: "5 stations", es: "5 estaciones", de: "5 Stationen", nl: "5 stations" }
      ],
      correct: 2,
      explanation: {
        en: "A minimum of 4 seismic stations is required for accurate 3D earthquake location (epicenter and depth) using arrival time differences. Three stations can theoretically locate an epicenter in 2D, but 4 stations provide the constraint needed for depth determination and reduce location uncertainty.",
        es: "Se requiere un mínimo de 4 estaciones sísmicas para una ubicación precisa 3D del terremoto (epicentro y profundidad) usando diferencias de tiempo de llegada. Tres estaciones pueden teóricamente localizar un epicentro en 2D, pero 4 estaciones proporcionan la restricción necesaria para la determinación de profundidad y reducen la incertidumbre de ubicación.",
        de: "Mindestens 4 seismische Stationen sind für eine genaue 3D-Erdbebenlokalisierung (Epizentrum und Tiefe) unter Verwendung von Ankunftszeitunterschieden erforderlich. Drei Stationen können theoretisch ein Epizentrum in 2D lokalisieren, aber 4 Stationen bieten die für die Tiefenbestimmung nötige Einschränkung und reduzieren die Lokalisierungsunsicherheit.",
        nl: "Een minimum van 4 seismische stations is vereist voor nauwkeurige 3D aardbevingslocatie (epicenter en diepte) met aankomsttijdverschillen. Drie stations kunnen theoretisch een epicenter in 2D lokaliseren, maar 4 stations bieden de beperking die nodig is voor dieptebepaling en verminderen locatie-onzekerheid."
      }
    },
    {
      question: {
        en: "What seismic phase conversion occurs when P-waves encounter a solid-liquid boundary?",
        es: "¿Qué conversión de fase sísmica ocurre cuando las ondas P encuentran un límite sólido-líquido?",
        de: "Welche seismische Phasenumwandlung tritt auf, wenn P-Wellen auf eine Fest-Flüssig-Grenze treffen?",
        nl: "Welke seismische faseconversie vindt plaats wanneer P-golven een vast-vloeistof grens ontmoeten?"
      },
      options: [
        { en: "P-waves convert to S-waves only", es: "Las ondas P se convierten solo en ondas S", de: "P-Wellen wandeln sich nur in S-Wellen um", nl: "P-golven converteren alleen naar S-golven" },
        { en: "P-waves are completely reflected", es: "Las ondas P son completamente reflejadas", de: "P-Wellen werden vollständig reflektiert", nl: "P-golven worden volledig gereflecteerd" },
        { en: "P-waves generate both reflected P and converted S phases", es: "Las ondas P generan tanto fases P reflejadas como fases S convertidas", de: "P-Wellen erzeugen sowohl reflektierte P- als auch umgewandelte S-Phasen", nl: "P-golven genereren zowel gereflecteerde P- als geconverteerde S-fasen" },
        { en: "P-waves are completely transmitted", es: "Las ondas P son completamente transmitidas", de: "P-Wellen werden vollständig übertragen", nl: "P-golven worden volledig overgedragen" }
      ],
      correct: 2,
      explanation: {
        en: "When P-waves encounter a solid-liquid boundary, they generate both reflected P-waves and converted S-waves. The S-waves cannot propagate in the liquid, so energy partitioning occurs, with some energy reflected as P-waves and some converted to S-waves that travel back into the solid.",
        es: "Cuando las ondas P encuentran un límite sólido-líquido, generan tanto ondas P reflejadas como ondas S convertidas. Las ondas S no pueden propagarse en el líquido, por lo que ocurre partición de energía, con algo de energía reflejada como ondas P y algo convertida en ondas S que viajan de vuelta al sólido.",
        de: "Wenn P-Wellen auf eine Fest-Flüssig-Grenze treffen, erzeugen sie sowohl reflektierte P-Wellen als auch umgewandelte S-Wellen. S-Wellen können sich nicht in der Flüssigkeit ausbreiten, daher erfolgt Energieverteilung, wobei etwas Energie als P-Wellen reflektiert und etwas in S-Wellen umgewandelt wird, die zurück in den Festkörper wandern.",
        nl: "Wanneer P-golven een vast-vloeistof grens ontmoeten, genereren ze zowel gereflecteerde P-golven als geconverteerde S-golven. S-golven kunnen niet voortplanten in de vloeistof, dus energie-verdeling treedt op, waarbij enkele energie wordt gereflecteerd als P-golven en enkele wordt geconverteerd naar S-golven die terugreizen in de vaste stof."
      }
    },
    {
      question: {
        en: "What is the primary advantage of using broadband seismometers over short-period instruments?",
        es: "¿Cuál es la ventaja principal de usar sismómetros de banda ancha sobre instrumentos de período corto?",
        de: "Was ist der Hauptvorteil der Verwendung von Breitband-Seismometern gegenüber Kurzperioden-Instrumenten?",
        nl: "Wat is het primaire voordeel van het gebruik van breedband seismometers ten opzichte van korte-periode instrumenten?"
      },
      options: [
        { en: "Higher sensitivity to low-frequency signals", es: "Mayor sensibilidad a señales de baja frecuencia", de: "Höhere Empfindlichkeit für niederfrequente Signale", nl: "Hogere gevoeligheid voor laagfrequente signalen" },
        { en: "Better temporal resolution", es: "Mejor resolución temporal", de: "Bessere zeitliche Auflösung", nl: "Betere temporele resolutie" },
        { en: "Reduced electronic noise", es: "Ruido electrónico reducido", de: "Reduziertes elektronisches Rauschen", nl: "Verminderde elektronische ruis" },
        { en: "Higher dynamic range only", es: "Solo mayor rango dinámico", de: "Nur höherer Dynamikbereich", nl: "Alleen hoger dynamisch bereik" }
      ],
      correct: 0,
      explanation: {
        en: "Broadband seismometers have superior sensitivity to low-frequency seismic signals (periods from ~120 seconds to ~50 Hz), making them capable of recording both long-period surface waves and short-period body waves, providing comprehensive earthquake characterization.",
        es: "Los sismómetros de banda ancha tienen sensibilidad superior a señales sísmicas de baja frecuencia (períodos de ~120 segundos a ~50 Hz), haciéndolos capaces de registrar tanto ondas superficiales de período largo como ondas internas de período corto, proporcionando caracterización integral de terremotos.",
        de: "Breitband-Seismometer haben überlegene Empfindlichkeit für niederfrequente seismische Signale (Perioden von ~120 Sekunden bis ~50 Hz), wodurch sie sowohl langperiodische Oberflächenwellen als auch kurzperiodische Raumwellen aufzeichnen können und umfassende Erdbebencharakterisierung ermöglichen.",
        nl: "Breedband seismometers hebben superieure gevoeligheid voor laagfrequente seismische signalen (periodes van ~120 seconden tot ~50 Hz), waardoor ze zowel langperiode oppervlaktegolven als korteperiode ruimtegolven kunnen opnemen, wat uitgebreide aardbevingskarakterisering mogelijk maakt."
      }
    },
    {
      question: {
        en: "What seismic parameter quantifies the efficiency of seismic energy release during fault rupture?",
        es: "¿Qué parámetro sísmico cuantifica la eficiencia de la liberación de energía sísmica durante la ruptura de falla?",
        de: "Welcher seismische Parameter quantifiziert die Effizienz der seismischen Energiefreisetzung während des Verwerfungsbruchs?",
        nl: "Welke seismische parameter kwantificeert de efficiëntie van seismische energievrijgave tijdens breuktop breuk?"
      },
      options: [
        { en: "Stress drop", es: "Caída de esfuerzo", de: "Spannungsabfall", nl: "Spanning afname" },
        { en: "Seismic efficiency ratio", es: "Relación de eficiencia sísmica", de: "Seismisches Effizienzverhältnis", nl: "Seismische efficiëntieverhouding" },
        { en: "Energy magnitude", es: "Magnitud de energía", de: "Energiemagnitude", nl: "Energie magnitude" },
        { en: "Radiated energy coefficient", es: "Coeficiente de energía radiada", de: "Abgestrahlter Energiekoeffizient", nl: "Uitgestraalde energiecoëfficiënt" }
      ],
      correct: 1,
      explanation: {
        en: "The seismic efficiency ratio quantifies what fraction of the total strain energy released during fault rupture is radiated as seismic waves versus converted to heat through friction. Typical values range from 1-10%, with higher values indicating more efficient seismic energy radiation.",
        es: "La relación de eficiencia sísmica cuantifica qué fracción de la energía total de deformación liberada durante la ruptura de falla es radiada como ondas sísmicas versus convertida en calor por fricción. Los valores típicos van del 1-10%, con valores más altos indicando radiación de energía sísmica más eficiente.",
        de: "Das seismische Effizienzverhältnis quantifiziert, welcher Anteil der während des Verwerfungsbruchs freigesetzten gesamten Verformungsenergie als seismische Wellen abgestrahlt wird versus durch Reibung in Wärme umgewandelt wird. Typische Werte liegen zwischen 1-10%, wobei höhere Werte effizientere seismische Energieabstrahlung anzeigen.",
        nl: "De seismische efficiëntieverhouding kwantificeert welk deel van de totale vervormingsenergie vrijgegeven tijdens breukbreuk wordt uitgestraald als seismische golven versus omgezet in warmte door wrijving. Typische waarden variëren van 1-10%, waarbij hogere waarden meer efficiënte seismische energieuitstraling aangeven."
      }
    },
    {
      question: {
        en: "What causes the characteristic double-frequency signature in microseisms recorded at coastal seismographic stations?",
        es: "¿Qué causa la característica firma de doble frecuencia en microsismos registrados en estaciones sismográficas costeras?",
        de: "Was verursacht die charakteristische Doppelfrequenzsignatur in Mikroseismen, die an küstennahen seismographischen Stationen aufgezeichnet werden?",
        nl: "Wat veroorzaakt de karakteristieke dubbele-frequentie handtekening in microseisms opgenomen bij kustseismografische stations?"
      },
      options: [
        { en: "Ocean wave interference patterns", es: "Patrones de interferencia de ondas oceánicas", de: "Ozeanwellen-Interferenzmuster", nl: "Oceaangolf interferentiepatronen" },
        { en: "Tidal force variations", es: "Variaciones de fuerza de marea", de: "Gezeitenkraftvariationen", nl: "Getijdenkrachtvariaties" },
        { en: "Atmospheric pressure changes", es: "Cambios de presión atmosférica", de: "Atmosphärische Druckänderungen", nl: "Atmosferische drukveranderingen" },
        { en: "Thermal expansion cycles", es: "Ciclos de expansión térmica", de: "Thermische Ausdehnungszyklen", nl: "Thermische uitzettingscycli" }
      ],
      correct: 0,
      explanation: {
        en: "The double-frequency microseism signature results from ocean wave interference patterns where opposing wave trains create standing wave patterns. The interaction generates seismic energy at twice the ocean wave frequency, typically producing peaks around 0.14 Hz and 0.07 Hz corresponding to different wave interaction mechanisms.",
        es: "La firma de microsismo de doble frecuencia resulta de patrones de interferencia de ondas oceánicas donde trenes de ondas opuestas crean patrones de ondas estacionarias. La interacción genera energía sísmica al doble de la frecuencia de las ondas oceánicas, típicamente produciendo picos alrededor de 0.14 Hz y 0.07 Hz correspondientes a diferentes mecanismos de interacción de ondas.",
        de: "Die Doppelfrequenz-Mikroseismensignatur resultiert aus Ozeanwellen-Interferenzmustern, wo entgegengesetzte Wellenzüge stehende Wellenmuster erzeugen. Die Wechselwirkung erzeugt seismische Energie bei doppelter Ozeanwellenfrequenz, typischerweise mit Spitzen um 0,14 Hz und 0,07 Hz entsprechend verschiedenen Welleninteraktionsmechanismen.",
        nl: "De dubbele-frequentie microseisms handtekening resulteert uit oceaangolf interferentiepatronen waar tegengestelde golftreinen staande golfpatronen creëren. De interactie genereert seismische energie bij tweemaal de oceaangolffrequentie, meestal producerend pieken rond 0,14 Hz en 0,07 Hz overeenkomend met verschillende golfinteractiemechanismen."
      }
    },
    {
      question: {
        en: "What is the typical Q-factor (quality factor) range for seismic waves in the Earth's upper mantle?",
        es: "¿Cuál es el rango típico del factor Q (factor de calidad) para ondas sísmicas en el manto superior de la Tierra?",
        de: "Wie ist der typische Q-Faktor (Gütefaktor) Bereich für seismische Wellen im oberen Erdmantel?",
        nl: "Wat is het typische Q-factor (kwaliteitsfactor) bereik voor seismische golven in de bovenmantel van de aarde?"
      },
      options: [
        { en: "Q = 50-200", es: "Q = 50-200", de: "Q = 50-200", nl: "Q = 50-200" },
        { en: "Q = 200-600", es: "Q = 200-600", de: "Q = 200-600", nl: "Q = 200-600" },
        { en: "Q = 600-1200", es: "Q = 600-1200", de: "Q = 600-1200", nl: "Q = 600-1200" },
        { en: "Q = 1200-2000", es: "Q = 1200-2000", de: "Q = 1200-2000", nl: "Q = 1200-2000" }
      ],
      correct: 1,
      explanation: {
        en: "The Q-factor in the upper mantle typically ranges from 200-600, indicating moderate seismic attenuation. Higher Q values represent lower attenuation (less energy loss), while the upper mantle's Q values reflect partial melting and temperature effects that cause energy absorption.",
        es: "El factor Q en el manto superior típicamente varía de 200-600, indicando atenuación sísmica moderada. Valores Q más altos representan menor atenuación (menos pérdida de energía), mientras que los valores Q del manto superior reflejan fusión parcial y efectos de temperatura que causan absorción de energía.",
        de: "Der Q-Faktor im oberen Mantel liegt typischerweise zwischen 200-600, was moderate seismische Dämpfung anzeigt. Höhere Q-Werte repräsentieren geringere Dämpfung (weniger Energieverlust), während die Q-Werte des oberen Mantels partielle Schmelze und Temperatureffekte widerspiegeln, die Energieabsorption verursachen.",
        nl: "De Q-factor in de bovenmantel varieert meestal van 200-600, wat matige seismische demping aangeeft. Hogere Q-waarden vertegenwoordigen lagere demping (minder energieverlies), terwijl de Q-waarden van de bovenmantel gedeeltelijke smelting en temperatuureffecten weerspiegelen die energie-absorptie veroorzaken."
      }
    },
    {
      question: {
        en: "What seismic analysis method uses amplitude ratios between different wave phases to determine source characteristics?",
        es: "¿Qué método de análisis sísmico utiliza relaciones de amplitud entre diferentes fases de ondas para determinar características de la fuente?",
        de: "Welche seismische Analysemethode verwendet Amplitudenverhältnisse zwischen verschiedenen Wellenphasen zur Bestimmung von Quelleneigenschaften?",
        nl: "Welke seismische analysemethode gebruikt amplitudeverhoudingen tussen verschillende golffasen om bronkenmerken te bepalen?"
      },
      options: [
        { en: "Spectral ratio analysis", es: "Análisis de relación espectral", de: "Spektralverhältnisanalyse", nl: "Spectrale verhouding analyse" },
        { en: "Amplitude-based magnitude scaling", es: "Escalamiento de magnitud basado en amplitud", de: "Amplitudenbasierte Magnitudenskalierung", nl: "Amplitude-gebaseerde magnitude schaling" },
        { en: "Phase amplitude discrimination", es: "Discriminación de amplitud de fase", de: "Phasenamplitudendiskriminierung", nl: "Fase amplitude discriminatie" },
        { en: "Relative magnitude comparison", es: "Comparación de magnitud relativa", de: "Relative Magnitudenvergleich", nl: "Relatieve magnitude vergelijking" }
      ],
      correct: 0,
      explanation: {
        en: "Spectral ratio analysis compares amplitude ratios between different seismic phases (such as P/S ratios) across frequency bands to determine source mechanism, stress drop, and rupture characteristics while minimizing path and site effects that affect both phases similarly.",
        es: "El análisis de relación espectral compara relaciones de amplitud entre diferentes fases sísmicas (como relaciones P/S) a través de bandas de frecuencia para determinar mecanismo de fuente, caída de esfuerzo y características de ruptura mientras minimiza efectos de trayectoria y sitio que afectan ambas fases similarmente.",
        de: "Die Spektralverhältnisanalyse vergleicht Amplitudenverhältnisse zwischen verschiedenen seismischen Phasen (wie P/S-Verhältnisse) über Frequenzbänder hinweg, um Quellenmechanismus, Spannungsabfall und Brucheigenschaften zu bestimmen, während Pfad- und Standorteffekte minimiert werden, die beide Phasen ähnlich beeinflussen.",
        nl: "Spectrale verhouding analyse vergelijkt amplitudeverhoudingen tussen verschillende seismische fasen (zoals P/S verhoudingen) over frequentiebanden om bronmechanisme, spanningsafname en breukkenmerken te bepalen terwijl pad- en locatie-effecten geminimaliseerd worden die beide fasen gelijkaardig beïnvloeden."
      }
    },
    {
      question: {
        en: "What physical mechanism controls the maximum frequency content of seismic signals from earthquake sources?",
        es: "¿Qué mecanismo físico controla el contenido de frecuencia máxima de las señales sísmicas de fuentes de terremotos?",
        de: "Welcher physikalische Mechanismus kontrolliert den maximalen Frequenzgehalt seismischer Signale von Erdbebenquellen?",
        nl: "Welk fysisch mechanisme controleert de maximale frequentie-inhoud van seismische signalen van aardbevingsbronnen?"
      },
      options: [
        { en: "Source time function duration", es: "Duración de la función de tiempo de fuente", de: "Quellzeitfunktionsdauer", nl: "Bron tijdsfunctie duur" },
        { en: "Fault rupture velocity limits", es: "Límites de velocidad de ruptura de falla", de: "Verwerfungsbruchgeschwindigkeitsgrenzen", nl: "Breukrupture snelheidslimieten" },
        { en: "Stress drop magnitude", es: "Magnitud de caída de esfuerzo", de: "Spannungsabfallmagnitude", nl: "Spanning afname grootte" },
        { en: "Corner frequency scaling", es: "Escalamiento de frecuencia de esquina", de: "Eckfrequenzskalierung", nl: "Hoekfrequentie schaling" }
      ],
      correct: 3,
      explanation: {
        en: "Corner frequency scaling, determined by the source dimensions and stress drop, controls the maximum frequency content of earthquake signals. The corner frequency fc ≈ 0.49β(Δσ/M₀)^(1/3) where β is shear velocity, Δσ is stress drop, and M₀ is seismic moment, establishing the transition between flat and ω² spectral decay.",
        es: "El escalamiento de frecuencia de esquina, determinado por las dimensiones de la fuente y la caída de esfuerzo, controla el contenido de frecuencia máxima de las señales de terremoto. La frecuencia de esquina fc ≈ 0.49β(Δσ/M₀)^(1/3) donde β es velocidad de corte, Δσ es caída de esfuerzo, y M₀ es momento sísmico, estableciendo la transición entre decaimiento espectral plano y ω².",
        de: "Die Eckfrequenzskalierung, bestimmt durch die Quellendimensionen und den Spannungsabfall, kontrolliert den maximalen Frequenzgehalt von Erdbebensignalen. Die Eckfrequenz fc ≈ 0,49β(Δσ/M₀)^(1/3) wo β die Schergeschwindigkeit, Δσ der Spannungsabfall und M₀ das seismische Moment ist, etabliert den Übergang zwischen flachem und ω² spektralem Abfall.",
        nl: "Hoekfrequentie schaling, bepaald door de bron afmetingen en spanningsafname, controleert de maximale frequentie-inhoud van aardbevingssignalen. De hoekfrequentie fc ≈ 0,49β(Δσ/M₀)^(1/3) waar β schuifsnelheid is, Δσ spanning afname, en M₀ seismisch moment, wat de overgang tussen vlakke en ω² spectrale afname vaststelt."
      }
    },
    {
      question: {
        en: "What advanced seismic technique uses array processing to enhance signal-to-noise ratio and determine wave propagation direction?",
        es: "¿Qué técnica sísmica avanzada utiliza procesamiento de arreglo para mejorar la relación señal-ruido y determinar la dirección de propagación de ondas?",
        de: "Welche fortgeschrittene seismische Technik verwendet Array-Verarbeitung zur Verbesserung des Signal-Rausch-Verhältnisses und zur Bestimmung der Wellenausbreitungsrichtung?",
        nl: "Welke geavanceerde seismische techniek gebruikt array-verwerking om signaal-ruis verhouding te verbeteren en golfvoortplantingsrichting te bepalen?"
      },
      options: [
        { en: "Beamforming analysis", es: "Análisis de formación de haces", de: "Strahlformungsanalyse", nl: "Bundelvorming analyse" },
        { en: "Frequency-wavenumber filtering", es: "Filtrado frecuencia-número de onda", de: "Frequenz-Wellenzahl-Filterung", nl: "Frequentie-golfnummer filtering" },
        { en: "Slowness vector estimation", es: "Estimación de vector de lentitud", de: "Langsamkeitsvektorschätzung", nl: "Traagheids vector schatting" },
        { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
      ],
      correct: 3,
      explanation: {
        en: "All these techniques are related aspects of seismic array processing: beamforming enhances coherent signals, frequency-wavenumber (f-k) filtering separates waves by propagation properties, and slowness vector estimation determines back-azimuth and apparent velocity. Together they form comprehensive array analysis methods.",
        es: "Todas estas técnicas son aspectos relacionados del procesamiento de arreglos sísmicos: la formación de haces mejora señales coherentes, el filtrado frecuencia-número de onda (f-k) separa ondas por propiedades de propagación, y la estimación de vector de lentitud determina back-azimut y velocidad aparente. Juntas forman métodos integrales de análisis de arreglos.",
        de: "All diese Techniken sind verwandte Aspekte der seismischen Array-Verarbeitung: Strahlformung verstärkt kohärente Signale, Frequenz-Wellenzahl (f-k) Filterung trennt Wellen nach Ausbreitungseigenschaften, und Langsamkeitsvektorschätzung bestimmt Rück-Azimut und scheinbare Geschwindigkeit. Zusammen bilden sie umfassende Array-Analysemethoden.",
        nl: "Al deze technieken zijn gerelateerde aspecten van seismische array-verwerking: bundelvorming versterkt coherente signalen, frequentie-golfnummer (f-k) filtering scheidt golven op voortplantingseigenschappen, en traagheids vector schatting bepaalt terug-azimut en schijnbare snelheid. Samen vormen ze uitgebreide array-analysemethoden."
      }
    },
    {
      question: {
        en: "What seismic parameter is used to quantify the complexity of earthquake rupture processes?",
        es: "¿Qué parámetro sísmico se utiliza para cuantificar la complejidad de los procesos de ruptura de terremotos?",
        de: "Welcher seismische Parameter wird verwendet, um die Komplexität von Erdbebenbruchprozessen zu quantifizieren?",
        nl: "Welke seismische parameter wordt gebruikt om de complexiteit van aardbeving breukprocessen te kwantificeren?"
      },
      options: [
        { en: "Rupture directivity coefficient", es: "Coeficiente de directividad de ruptura", de: "Bruchrichtungskoeffizient", nl: "Breuk directiviteitscoëfficiënt" },
        { en: "Source time function complexity", es: "Complejidad de función de tiempo de fuente", de: "Quellzeitfunktionskomplexität", nl: "Bron tijdsfunctie complexiteit" },
        { en: "Slip heterogeneity index", es: "Índice de heterogeneidad de deslizamiento", de: "Slip-Heterogenitätsindex", nl: "Slip heterogeniteit index" },
        { en: "Stress drop variability", es: "Variabilidad de caída de esfuerzo", de: "Spannungsabfallvariabilität", nl: "Spanning afname variabiliteit" }
      ],
      correct: 1,
      explanation: {
        en: "Source time function complexity quantifies rupture process complexity by analyzing the temporal evolution of moment release. Complex source time functions with multiple peaks indicate heterogeneous rupture with multiple asperities, while simple functions suggest more uniform rupture processes.",
        es: "La complejidad de la función de tiempo de fuente cuantifica la complejidad del proceso de ruptura analizando la evolución temporal de la liberación de momento. Funciones de tiempo de fuente complejas con múltiples picos indican ruptura heterogénea con múltiples asperezas, mientras que funciones simples sugieren procesos de ruptura más uniformes.",
        de: "Die Quellzeitfunktionskomplexität quantifiziert die Komplexität von Bruchprozessen durch Analyse der zeitlichen Entwicklung der Momentfreisetzung. Komplexe Quellzeitfunktionen mit mehreren Spitzen zeigen heterogene Brüche mit mehreren Asperitäten an, während einfache Funktionen gleichmäßigere Bruchprozesse suggerieren.",
        nl: "Bron tijdsfunctie complexiteit kwantificeert breukproces complexiteit door temporele evolutie van moment vrijgave te analyseren. Complexe bron tijdsfuncties met meerdere pieken duiden op heterogene breuk met meerdere asperiteiten, terwijl eenvoudige functies meer uniforme breukprocessen suggereren."
      }
    },
    {
      question: {
        en: "What causes the characteristic 'shadow zone' observed for direct P-waves at epicentral distances between 103° and 142°?",
        es: "¿Qué causa la característica 'zona de sombra' observada para ondas P directas a distancias epicentrales entre 103° y 142°?",
        de: "Was verursacht die charakteristische 'Schattenzone', die für direkte P-Wellen bei Epizentralentfernungen zwischen 103° und 142° beobachtet wird?",
        nl: "Wat veroorzaakt de karakteristieke 'schaduwzone' waargenomen voor directe P-golven op epicentrale afstanden tussen 103° en 142°?"
      },
      options: [
        { en: "Core-mantle boundary reflection", es: "Reflexión del límite núcleo-manto", de: "Kern-Mantel-Grenzreflexion", nl: "Kern-mantel grens reflectie" },
        { en: "P-wave refraction at the outer core boundary", es: "Refracción de ondas P en el límite del núcleo externo", de: "P-Wellen-Refraktion an der äußeren Kerngrenze", nl: "P-golf refractie bij de buitenkern grens" },
        { en: "S-wave conversion in the liquid core", es: "Conversión de ondas S en el núcleo líquido", de: "S-Wellen-Umwandlung im flüssigen Kern", nl: "S-golf conversie in de vloeibare kern" },
        { en: "Velocity decrease causing wave trapping", es: "Disminución de velocidad causando atrapamiento de ondas", de: "Geschwindigkeitsabnahme verursacht Welleneinfang", nl: "Snelheidsafname veroorzaakt golf insluiting" }
      ],
      correct: 1,
      explanation: {
        en: "The P-wave shadow zone results from refraction at the core-mantle boundary where P-wave velocity decreases significantly upon entering the liquid outer core. This velocity drop causes wave rays to bend away from the shadow zone region, creating an area where direct P-waves cannot reach the surface.",
        es: "La zona de sombra de ondas P resulta de la refracción en el límite núcleo-manto donde la velocidad de las ondas P disminuye significativamente al entrar al núcleo externo líquido. Esta caída de velocidad causa que los rayos de ondas se desvíen de la región de zona de sombra, creando un área donde las ondas P directas no pueden alcanzar la superficie.",
        de: "Die P-Wellen-Schattenzone resultiert aus Refraktion an der Kern-Mantel-Grenze, wo die P-Wellengeschwindigkeit beim Eintritt in den flüssigen äußeren Kern signifikant abnimmt. Diese Geschwindigkeitsabnahme bewirkt, dass Wellenstrahlen sich von der Schattenzoneregion wegbiegen und einen Bereich schaffen, wo direkte P-Wellen die Oberfläche nicht erreichen können.",
        nl: "De P-golf schaduwzone resulteert uit refractie bij de kern-mantel grens waar P-golfsnelheid significant afneemt bij binnentreding in de vloeibare buitenkern. Deze snelheidsafname zorgt ervoor dat golfstralen wegbuigen van de schaduwzone regio, wat een gebied creëert waar directe P-golven het oppervlak niet kunnen bereiken."
      }
    },
    {
      question: {
        en: "What advanced computational method is used to model complex 3D seismic wave propagation in heterogeneous Earth models?",
        es: "¿Qué método computacional avanzado se utiliza para modelar la propagación compleja de ondas sísmicas 3D en modelos heterogéneos de la Tierra?",
        de: "Welche fortgeschrittene Berechnungsmethode wird verwendet, um komplexe 3D-seismische Wellenausbreitung in heterogenen Erdmodellen zu modellieren?",
        nl: "Welke geavanceerde computationele methode wordt gebruikt om complexe 3D seismische golfvoortplanting in heterogene aardmodellen te modelleren?"
      },
      options: [
        { en: "Finite difference time domain (FDTD)", es: "Dominio de tiempo de diferencias finitas (FDTD)", de: "Finite Differenzen Zeitbereich (FDTD)", nl: "Eindige verschillen tijdsdomein (FDTD)" },
        { en: "Spectral element method (SEM)", es: "Método de elementos espectrales (SEM)", de: "Spektrale Elementmethode (SEM)", nl: "Spectrale element methode (SEM)" },
        { en: "Ray tracing algorithms", es: "Algoritmos de trazado de rayos", de: "Strahlenverfolgungs-Algorithmen", nl: "Straal volgalgoritmen" },
        { en: "Both FDTD and SEM", es: "Tanto FDTD como SEM", de: "Sowohl FDTD als auch SEM", nl: "Zowel FDTD als SEM" }
      ],
      correct: 3,
      explanation: {
        en: "Both finite difference time domain (FDTD) and spectral element method (SEM) are advanced numerical techniques used for modeling 3D seismic wave propagation. FDTD discretizes space and time for wave equation solutions, while SEM uses high-order polynomial basis functions for greater accuracy in complex geometries.",
        es: "Tanto el dominio de tiempo de diferencias finitas (FDTD) como el método de elementos espectrales (SEM) son técnicas numéricas avanzadas utilizadas para modelar la propagación de ondas sísmicas 3D. FDTD discretiza espacio y tiempo para soluciones de ecuaciones de ondas, mientras que SEM usa funciones de base polinomial de alto orden para mayor precisión en geometrías complejas.",
        de: "Sowohl die Finite Differenzen Zeitbereich (FDTD) als auch die Spektrale Elementmethode (SEM) sind fortgeschrittene numerische Techniken zur Modellierung 3D-seismischer Wellenausbreitung. FDTD diskretisiert Raum und Zeit für Wellengleichungslösungen, während SEM hochordnende Polynombasisfunktionen für größere Genauigkeit in komplexen Geometrien verwendet.",
        nl: "Zowel eindige verschillen tijdsdomein (FDTD) als spectrale element methode (SEM) zijn geavanceerde numerieke technieken gebruikt voor het modelleren van 3D seismische golfvoortplanting. FDTD discretiseert ruimte en tijd voor golfvergelijking oplossingen, terwijl SEM hoge-orde polynomiale basisfuncties gebruikt voor grotere nauwkeurigheid in complexe geometrieën."
      }
    },
    {
      question: {
        en: "What seismic parameter indicates the duration of fault rupture and scales with earthquake magnitude?",
        es: "¿Qué parámetro sísmico indica la duración de la ruptura de falla y escala con la magnitud del terremoto?",
        de: "Welcher seismische Parameter zeigt die Dauer des Verwerfungsbruchs an und skaliert mit der Erdbebenmagnitude?",
        nl: "Welke seismische parameter geeft de duur van breukrupture aan en schaalt met aardbevingsmagnitude?"
      },
      options: [
        { en: "Rise time", es: "Tiempo de subida", de: "Anstiegszeit", nl: "Stijgtijd" },
        { en: "Rupture duration", es: "Duración de ruptura", de: "Bruchdauer", nl: "Breuk duur" },
        { en: "Source time function width", es: "Ancho de función de tiempo de fuente", de: "Quellzeitfunktionsbreite", nl: "Bron tijdsfunctie breedte" },
        { en: "All of the above", es: "Todas las anteriores", de: "Alle oben genannten", nl: "Alle bovenstaande" }
      ],
      correct: 3,
      explanation: {
        en: "All these parameters are related measures of rupture duration that scale with earthquake magnitude: rise time measures slip evolution at a point, rupture duration indicates total fault break time, and source time function width characterizes moment release duration. Larger earthquakes have longer rupture durations due to larger fault areas.",
        es: "Todos estos parámetros son medidas relacionadas de duración de ruptura que escalan con la magnitud del terremoto: el tiempo de subida mide la evolución del deslizamiento en un punto, la duración de ruptura indica el tiempo total de quiebre de falla, y el ancho de la función de tiempo de fuente caracteriza la duración de liberación de momento. Terremotos más grandes tienen duraciones de ruptura más largas debido a áreas de falla más grandes.",
        de: "All diese Parameter sind verwandte Maße der Bruchdauer, die mit der Erdbebenmagnitude skalieren: Anstiegszeit misst die Slip-Entwicklung an einem Punkt, Bruchdauer zeigt die gesamte Verwerfungsbruchzeit an, und Quellzeitfunktionsbreite charakterisiert die Momentfreisetzungsdauer. Größere Erdbeben haben längere Bruchdauern aufgrund größerer Verwerfungsbereiche.",
        nl: "Al deze parameters zijn gerelateerde maten van breukduur die schalen met aardbevingsmagnitude: stijgtijd meet slip evolutie op een punt, breukduur geeft totale breuk tijd aan, en bron tijdsfunctie breedte karakteriseert moment vrijgave duur. Grotere aardbevingen hebben langere breukduren door grotere breukvlakken."
      }
    },
    {
      question: {
        en: "What is the Gutenberg-Richter law and its significance in seismic hazard assessment?",
        es: "¿Qué es la ley de Gutenberg-Richter y su importancia en evaluación de riesgo sísmico?",
        de: "Was ist das Gutenberg-Richter-Gesetz und seine Bedeutung in der seismischen Risikobewertung?",
        nl: "Wat is de Gutenberg-Richter wet en zijn betekenis in seismische risico beoordeling?"
      },
      options: [
        { en: "Log-linear relationship between earthquake magnitude and frequency of occurrence", es: "Relación log-lineal entre magnitud de terremoto y frecuencia de ocurrencia", de: "Log-lineare Beziehung zwischen Erdbebenmagnitude und Auftretenshäufigkeit", nl: "Log-lineaire relatie tussen aardbevings magnitude en frequentie van voorkomen" },
        { en: "Power law for seismic wave attenuation", es: "Ley de potencia para atenuación de ondas sísmicas", de: "Potenzgesetz für seismische Wellendämpfung", nl: "Macht wet voor seismische golf attenuatie" },
        { en: "Scaling relationship for fault length and displacement", es: "Relación de escala para longitud de falla y desplazamiento", de: "Skalierungsbeziehung für Verwerfungslänge und -verschiebung", nl: "Schaal relatie voor breuk lengte en verplaatsing" },
        { en: "Correlation between P-wave and S-wave velocities", es: "Correlación entre velocidades de ondas P y S", de: "Korrelation zwischen P-Wellen- und S-Wellengeschwindigkeiten", nl: "Correlatie tussen P-golf en S-golf snelheden" }
      ],
      correct: 0,
      explanation: {
        en: "The Gutenberg-Richter law describes the inverse relationship between earthquake magnitude and frequency: log N = a - bM, where N is the number of earthquakes ≥ magnitude M. The b-value (~1) indicates that each magnitude unit decrease corresponds to ~10x more earthquakes, crucial for probabilistic seismic hazard analysis.",
        es: "La ley de Gutenberg-Richter describe la relación inversa entre magnitud de terremoto y frecuencia: log N = a - bM, donde N es el número de terremotos ≥ magnitud M. El valor-b (~1) indica que cada disminución de unidad de magnitud corresponde a ~10x más terremotos, crucial para análisis probabilístico de riesgo sísmico.",
        de: "Das Gutenberg-Richter-Gesetz beschreibt die inverse Beziehung zwischen Erdbebenmagnitude und Häufigkeit: log N = a - bM, wobei N die Anzahl der Erdbeben ≥ Magnitude M ist. Der b-Wert (~1) zeigt an, dass jede Magnitudeneinheit-Abnahme ~10x mehr Erdbeben entspricht, entscheidend für probabilistische seismische Risikobewertung.",
        nl: "De Gutenberg-Richter wet beschrijft de inverse relatie tussen aardbevings magnitude en frequentie: log N = a - bM, waar N het aantal aardbevingen ≥ magnitude M is. De b-waarde (~1) geeft aan dat elke magnitude eenheid afname overeenkomt met ~10x meer aardbevingen, cruciaal voor probabilistische seismische risico analyse."
      }
    },
    {
      question: {
        en: "What is the concept of seismic gap theory in earthquake prediction?",
        es: "¿Qué es el concepto de teoría de brecha sísmica en predicción de terremotos?",
        de: "Was ist das Konzept der seismischen Lückentheorie in der Erdbebenvorhersage?",
        nl: "Wat is het concept van seismische kloof theorie in aardbevings voorspelling?"
      },
      options: [
        { en: "Areas along fault zones that haven't experienced recent large earthquakes may have accumulated stress for future rupture", es: "Áreas a lo largo de zonas de falla que no han experimentado terremotos grandes recientes pueden haber acumulado estrés para ruptura futura", de: "Bereiche entlang Verwerfungszonen, die keine kürzlichen großen Erdbeben erlebt haben, können Stress für zukünftige Brüche angesammelt haben", nl: "Gebieden langs breukzones die geen recente grote aardbevingen hebben ervaren kunnen stress hebben opgebouwd voor toekomstige ruptuur" },
        { en: "Regions with no seismic activity are earthquake-proof", es: "Regiones sin actividad sísmica son a prueba de terremotos", de: "Regionen ohne seismische Aktivität sind erdbebensicher", nl: "Regio's zonder seismische activiteit zijn aardbevingbestendig" },
        { en: "Empty spaces in the Earth's crust caused by previous earthquakes", es: "Espacios vacíos en la corteza terrestre causados por terremotos previos", de: "Leere Räume in der Erdkruste verursacht durch frühere Erdbeben", nl: "Lege ruimtes in de aardkorst veroorzaakt door eerdere aardbevingen" },
        { en: "Areas where seismic waves cannot propagate", es: "Áreas donde las ondas sísmicas no pueden propagarse", de: "Bereiche wo seismische Wellen sich nicht ausbreiten können", nl: "Gebieden waar seismische golven niet kunnen voortplanten" }
      ],
      correct: 0,
      explanation: {
        en: "Seismic gap theory suggests that sections of active fault zones that haven't ruptured recently may be accumulating tectonic stress and could be sites of future large earthquakes. However, this theory has limitations and many predicted gap earthquakes haven't occurred as expected, showing earthquake prediction remains extremely challenging.",
        es: "La teoría de brecha sísmica sugiere que secciones de zonas de falla activas que no han rupturado recientemente pueden estar acumulando estrés tectónico y podrían ser sitios de futuros terremotos grandes. Sin embargo, esta teoría tiene limitaciones y muchos terremotos de brecha predichos no han ocurrido como se esperaba, mostrando que la predicción de terremotos sigue siendo extremadamente desafiante.",
        de: "Die seismische Lückentheorie legt nahe, dass Abschnitte aktiver Verwerfungszonen, die kürzlich nicht gebrochen sind, tektonischen Stress ansammeln könnten und Standorte zukünftiger großer Erdbeben sein könnten. Diese Theorie hat jedoch Einschränkungen und viele vorhergesagte Lückenbeben sind nicht wie erwartet aufgetreten, was zeigt, dass Erdbebenvorhersage extrem herausfordernd bleibt.",
        nl: "Seismische kloof theorie suggereert dat secties van actieve breukzones die recent niet zijn gebroken mogelijk tectonische stress ophopen en locaties van toekomstige grote aardbevingen zouden kunnen zijn. Deze theorie heeft echter beperkingen en veel voorspelde kloof aardbevingen zijn niet opgetreden zoals verwacht, wat toont dat aardbevings voorspelling uiterst uitdagend blijft."
      }
    },
    {
      question: {
        en: "What is the difference between earthquake swarms and mainshock-aftershock sequences?",
        es: "¿Cuál es la diferencia entre enjambres de terremotos y secuencias de choque principal-réplicas?",
        de: "Was ist der Unterschied zwischen Erdbebenschwärmen und Hauptbeben-Nachbeben-Sequenzen?",
        nl: "Wat is het verschil tussen aardbeving zwermen en hoofdschok-naschok sequenties?"
      },
      options: [
        { en: "Swarms lack a dominant mainshock and show gradual buildup/decay, while mainshock-aftershock sequences have clear largest events followed by decay", es: "Los enjambres carecen de un choque principal dominante y muestran acumulación/decaimiento gradual, mientras secuencias de choque principal-réplica tienen eventos más grandes claros seguidos de decaimiento", de: "Schwärme fehlt ein dominantes Hauptbeben und zeigen graduellen Aufbau/Verfall, während Hauptbeben-Nachbeben-Sequenzen klare größte Ereignisse gefolgt von Verfall haben", nl: "Zwermen missen een dominante hoofdschok en tonen geleidelijke opbouw/verval, terwijl hoofdschok-naschok sequenties duidelijke grootste gebeurtenissen hebben gevolgd door verval" },
        { en: "Swarms only occur in volcanic regions", es: "Los enjambres solo ocurren en regiones volcánicas", de: "Schwärme treten nur in vulkanischen Regionen auf", nl: "Zwermen treden alleen op in vulkanische regio's" },
        { en: "Mainshock-aftershock sequences are artificially created by mining", es: "Secuencias de choque principal-réplica son creadas artificialmente por minería", de: "Hauptbeben-Nachbeben-Sequenzen werden künstlich durch Bergbau erzeugt", nl: "Hoofdschok-naschok sequenties worden kunstmatig gecreëerd door mijnbouw" },
        { en: "There is no scientific difference between them", es: "No hay diferencia científica entre ellos", de: "Es gibt keinen wissenschaftlichen Unterschied zwischen ihnen", nl: "Er is geen wetenschappelijk verschil tussen hen" }
      ],
      correct: 0,
      explanation: {
        en: "Earthquake swarms consist of multiple similar-magnitude earthquakes without a single dominant event, often associated with fluid injection or volcanic processes. Mainshock-aftershock sequences follow Omori's law with a clear largest earthquake followed by smaller aftershocks that decay in frequency over time, typical of tectonic stress release.",
        es: "Los enjambres de terremotos consisten en múltiples terremotos de magnitud similar sin un evento dominante único, a menudo asociados con inyección de fluidos o procesos volcánicos. Las secuencias de choque principal-réplica siguen la ley de Omori con un terremoto más grande claro seguido de réplicas más pequeñas que decaen en frecuencia con el tiempo, típico de liberación de estrés tectónico.",
        de: "Erdbebenschwärme bestehen aus mehreren ähnlichen Magnituden-Erdbeben ohne ein einzelnes dominantes Ereignis, oft verbunden mit Flüssigkeitseinspritzung oder vulkanischen Prozessen. Hauptbeben-Nachbeben-Sequenzen folgen Omoris Gesetz mit einem klaren größten Erdbeben gefolgt von kleineren Nachbeben, die in der Häufigkeit über Zeit verfallen, typisch für tektonische Stressfreisetzung.",
        nl: "Aardbeving zwermen bestaan uit meerdere gelijkaardige-magnitude aardbevingen zonder een enkele dominante gebeurtenis, vaak geassocieerd met vloeistof injectie of vulkanische processen. Hoofdschok-naschok sequenties volgen Omori's wet met een duidelijke grootste aardbeving gevolgd door kleinere naschokken die in frequentie over tijd vervallen, typisch voor tectonische stress vrijgave."
      }
    },
    {
      question: {
        en: "What is the elastic rebound theory of earthquake generation?",
        es: "¿Qué es la teoría de rebote elástico de generación de terremotos?",
        de: "Was ist die elastische Rückpralltheorie der Erdbebenentstehung?",
        nl: "Wat is de elastische terugveer theorie van aardbevings generatie?"
      },
      options: [
        { en: "Gradual stress accumulation causes elastic deformation until rupture occurs, followed by sudden stress release and rebound", es: "Acumulación gradual de estrés causa deformación elástica hasta que ocurre ruptura, seguida de liberación súbita de estrés y rebote", de: "Graduelle Stressakkumulation verursacht elastische Deformation bis Bruch auftritt, gefolgt von plötzlicher Stressfreisetzung und Rückprall", nl: "Geleidelijke stress ophoping veroorzaakt elastische deformatie tot ruptuur optreedt, gevolgd door plotselinge stress vrijgave en terugveer" },
        { en: "Earthquakes are caused by underground explosions", es: "Los terremotos son causados por explosiones subterráneas", de: "Erdbeben werden durch unterirdische Explosionen verursacht", nl: "Aardbevingen worden veroorzaakt door ondergrondse explosies" },
        { en: "Plate motion directly creates seismic waves", es: "Movimiento de placas crea directamente ondas sísmicas", de: "Plattenbewegung erzeugt direkt seismische Wellen", nl: "Plaat beweging creëert direct seismische golven" },
        { en: "Temperature changes cause rock expansion and earthquakes", es: "Cambios de temperatura causan expansión de roca y terremotos", de: "Temperaturänderungen verursachen Gesteinsexpansion und Erdbeben", nl: "Temperatuur veranderingen veroorzaken rots expansie en aardbevingen" }
      ],
      correct: 0,
      explanation: {
        en: "The elastic rebound theory, developed after the 1906 San Francisco earthquake, explains that tectonic stress gradually accumulates and deforms rocks elastically until the strength of the fault is exceeded. This causes sudden rupture and elastic rebound to a less strained state, releasing seismic energy and causing the earthquake.",
        es: "La teoría de rebote elástico, desarrollada después del terremoto de San Francisco de 1906, explica que el estrés tectónico se acumula gradualmente y deforma rocas elásticamente hasta que se excede la resistencia de la falla. Esto causa ruptura súbita y rebote elástico a un estado menos deformado, liberando energía sísmica y causando el terremoto.",
        de: "Die elastische Rückpralltheorie, entwickelt nach dem San Francisco-Erdbeben von 1906, erklärt, dass tektonischer Stress sich graduell ansammelt und Gesteine elastisch deformiert, bis die Stärke der Verwerfung überschritten wird. Dies verursacht plötzlichen Bruch und elastischen Rückprall zu einem weniger gespannten Zustand, wodurch seismische Energie freigesetzt und das Erdbeben verursacht wird.",
        nl: "De elastische terugveer theorie, ontwikkeld na de 1906 San Francisco aardbeving, verklaart dat tectonische stress geleidelijk ophoopt en rotsen elastisch vervormt tot de sterkte van de breuk wordt overschreden. Dit veroorzaakt plotselinge ruptuur en elastische terugveer naar een minder gespannen staat, seismische energie vrijgevend en de aardbeving veroorzakend."
      }
    },
    {
      question: {
        en: "What is the role of stress drop in earthquake magnitude determination?",
        es: "¿Cuál es el papel de la caída de estrés en determinación de magnitud de terremoto?",
        de: "Welche Rolle spielt der Stressabfall bei der Erdbebenmagnitudenbestimmung?",
        nl: "Wat is de rol van stress drop in aardbevings magnitude bepaling?"
      },
      options: [
        { en: "Stress drop controls seismic moment and radiated energy, directly influencing magnitude scales", es: "Caída de estrés controla momento sísmico y energía radiada, influyendo directamente escalas de magnitud", de: "Stressabfall kontrolliert seismisches Moment und ausgestrahlte Energie, beeinflusst direkt Magnitudenskalen", nl: "Stress drop controleert seismisch moment en uitgestraalde energie, direct magnitude schalen beïnvloedend" },
        { en: "Stress drop only affects aftershock patterns", es: "Caída de estrés solo afecta patrones de réplicas", de: "Stressabfall beeinflusst nur Nachbebenmuster", nl: "Stress drop beïnvloedt alleen naschok patronen" },
        { en: "Higher stress drop always means lower magnitude", es: "Mayor caída de estrés siempre significa menor magnitud", de: "Höherer Stressabfall bedeutet immer niedrigere Magnitude", nl: "Hogere stress drop betekent altijd lagere magnitude" },
        { en: "Stress drop is unrelated to earthquake size", es: "Caída de estrés no está relacionada con tamaño de terremoto", de: "Stressabfall steht nicht im Zusammenhang mit Erdbebengröße", nl: "Stress drop is niet gerelateerd aan aardbevings grootte" }
      ],
      correct: 0,
      explanation: {
        en: "Stress drop is the difference between pre-rupture and post-rupture stress on a fault. It controls the seismic moment (Mo = μ × A × D) and radiated seismic energy, directly affecting magnitude calculations. Typical stress drops range from 1-100 MPa, with variations reflecting fault properties and rupture dynamics.",
        es: "La caída de estrés es la diferencia entre estrés pre-ruptura y post-ruptura en una falla. Controla el momento sísmico (Mo = μ × A × D) y energía sísmica radiada, afectando directamente cálculos de magnitud. Caídas de estrés típicas van de 1-100 MPa, con variaciones reflejando propiedades de falla y dinámicas de ruptura.",
        de: "Stressabfall ist die Differenz zwischen Vor-Bruch- und Nach-Bruch-Stress auf einer Verwerfung. Er kontrolliert das seismische Moment (Mo = μ × A × D) und ausgestrahlte seismische Energie, beeinflusst direkt Magnitudenberechnungen. Typische Stressabfälle reichen von 1-100 MPa, mit Variationen, die Verwerfungseigenschaften und Bruchdynamik widerspiegeln.",
        nl: "Stress drop is het verschil tussen pre-ruptuur en post-ruptuur stress op een breuk. Het controleert het seismisch moment (Mo = μ × A × D) en uitgestraalde seismische energie, direct magnitude berekeningen beïnvloedend. Typische stress drops variëren van 1-100 MPa, met variaties die breuk eigenschappen en ruptuur dynamiek reflecteren."
      }
    },
    {
      question: {
        en: "What is the principle behind seismic interferometry for subsurface imaging?",
        es: "¿Cuál es el principio detrás de interferometría sísmica para imágenes del subsuelo?",
        de: "Was ist das Prinzip hinter seismischer Interferometrie für Untergrundbildgebung?",
        nl: "Wat is het principe achter seismische interferometrie voor ondergronds beeldvorming?"
      },
      options: [
        { en: "Cross-correlation of ambient noise records between station pairs extracts virtual source responses and Green's functions", es: "Correlación cruzada de registros de ruido ambiental entre pares de estaciones extrae respuestas de fuente virtual y funciones de Green", de: "Kreuzkorrelation von Umgebungsgeräuschaufzeichnungen zwischen Stationspaaren extrahiert virtuelle Quellantworten und Greensche Funktionen", nl: "Kruis-correlatie van omgevingsruis records tussen station paren extraheert virtuele bron responsen en Green's functies" },
        { en: "Direct measurement of underground reflection coefficients", es: "Medición directa de coeficientes de reflexión subterránea", de: "Direkte Messung unterirdischer Reflexionskoeffizienten", nl: "Directe meting van ondergrondse reflectie coëfficiënten" },
        { en: "Artificial seismic source injection into the crust", es: "Inyección de fuente sísmica artificial en la corteza", de: "Künstliche seismische Quelleneinspritzung in die Kruste", nl: "Kunstmatige seismische bron injectie in de korst" },
        { en: "Electromagnetic wave interference with seismic signals", es: "Interferencia de ondas electromagnéticas con señales sísmicas", de: "Elektromagnetische Welleninterferenz mit seismischen Signalen", nl: "Elektromagnetische golf interferentie met seismische signalen" }
      ],
      correct: 0,
      explanation: {
        en: "Seismic interferometry exploits the principle that cross-correlating ambient noise records between two receivers extracts the Green's function (impulse response) between them. This effectively turns one receiver into a virtual seismic source, enabling passive imaging of subsurface structure using continuous ambient noise without active sources.",
        es: "La interferometría sísmica explota el principio de que correlacionar cruzadamente registros de ruido ambiental entre dos receptores extrae la función de Green (respuesta al impulso) entre ellos. Esto efectivamente convierte un receptor en una fuente sísmica virtual, permitiendo imágenes pasivas de estructura del subsuelo usando ruido ambiental continuo sin fuentes activas.",
        de: "Seismische Interferometrie nutzt das Prinzip aus, dass Kreuzkorrelation von Umgebungsgeräuschaufzeichnungen zwischen zwei Empfängern die Greensche Funktion (Impulsantwort) zwischen ihnen extrahiert. Dies verwandelt effektiv einen Empfänger in eine virtuelle seismische Quelle, ermöglicht passive Bildgebung der Untergrundstruktur mit kontinuierlichem Umgebungsgeräusch ohne aktive Quellen.",
        nl: "Seismische interferometrie benut het principe dat kruis-correlatie van omgevingsruis records tussen twee ontvangers de Green's functie (impuls respons) tussen hen extraheert. Dit verandert effectief een ontvanger in een virtuele seismische bron, passieve beeldvorming van ondergrondse structuur mogelijk makend met continue omgevingsruis zonder actieve bronnen."
      }
    },
    {
      question: {
        en: "What is the primary mechanism of induced seismicity from hydraulic fracturing operations?",
        es: "¿Cuál es el mecanismo principal de sismicidad inducida por operaciones de fracturación hidráulica?",
        de: "Was ist der primäre Mechanismus induzierter Seismizität durch hydraulische Fracturing-Operationen?",
        nl: "Wat is het primaire mechanisme van geïnduceerde seismiciteit door hydraulische fractuur operaties?"
      },
      options: [
        { en: "Direct pressure from injected fluids causing fault rupture", es: "Presión directa de fluidos inyectados causando ruptura de falla", de: "Direkter Druck von injizierten Flüssigkeiten verursacht Verwerfungsbruch", nl: "Directe druk van geïnjecteerde vloeistoffen veroorzaakt breukrupture" },
        { en: "Pore pressure increase reducing effective stress and fault strength", es: "Aumento de presión de poros reduciendo estrés efectivo y resistencia de falla", de: "Porendruckanstieg reduziert effektiven Stress und Verwerfungsstärke", nl: "Porie druk toename vermindert effectieve stress en breuk sterkte" },
        { en: "Temperature changes from fluid injection", es: "Cambios de temperatura por inyección de fluidos", de: "Temperaturänderungen durch Flüssigkeitsinjektion", nl: "Temperatuur veranderingen door vloeistof injectie" },
        { en: "Chemical alteration of rock properties", es: "Alteración química de propiedades de roca", de: "Chemische Veränderung der Gesteinseigenschaften", nl: "Chemische verandering van rots eigenschappen" }
      ],
      correct: 1,
      explanation: {
        en: "Induced seismicity from hydraulic fracturing primarily occurs through pore pressure increase, which reduces the effective stress (total stress minus pore pressure) on existing faults. This reduction in effective stress decreases fault strength and can trigger slip on critically stressed faults, following the Coulomb failure criterion.",
        es: "La sismicidad inducida por fracturación hidráulica ocurre principalmente por aumento de presión de poros, que reduce el estrés efectivo (estrés total menos presión de poros) en fallas existentes. Esta reducción en estrés efectivo disminuye la resistencia de falla y puede desencadenar deslizamiento en fallas críticamente estresadas, siguiendo el criterio de falla de Coulomb.",
        de: "Induzierte Seismizität durch hydraulische Fracturing tritt hauptsächlich durch Porendruckanstieg auf, der den effektiven Stress (Gesamtstress minus Porendruck) auf existierenden Verwerfungen reduziert. Diese Reduktion des effektiven Stresses verringert die Verwerfungsstärke und kann Gleitung auf kritisch gespannten Verwerfungen auslösen, nach dem Coulomb-Versagenskriterium.",
        nl: "Geïnduceerde seismiciteit door hydraulische fractuur treedt voornamelijk op door porie druk toename, wat de effectieve stress (totale stress minus porie druk) op bestaande breuken vermindert. Deze vermindering in effectieve stress verlaagt breuk sterkte en kan slip op kritisch gespannen breuken veroorzaken, volgend het Coulomb faalcriterium."
      }
    },
    {
      question: {
        en: "What is the relationship between seismic moment and moment magnitude Mw?",
        es: "¿Cuál es la relación entre momento sísmico y magnitud de momento Mw?",
        de: "Wie ist die Beziehung zwischen seismischem Moment und Momentmagnitude Mw?",
        nl: "Wat is de relatie tussen seismisch moment en moment magnitude Mw?"
      },
      options: [
        { en: "Mw = (2/3) log₁₀(Mo) - 10.7", es: "Mw = (2/3) log₁₀(Mo) - 10.7", de: "Mw = (2/3) log₁₀(Mo) - 10.7", nl: "Mw = (2/3) log₁₀(Mo) - 10.7" },
        { en: "Mw = (3/2) log₁₀(Mo) - 6.0", es: "Mw = (3/2) log₁₀(Mo) - 6.0", de: "Mw = (3/2) log₁₀(Mo) - 6.0", nl: "Mw = (3/2) log₁₀(Mo) - 6.0" },
        { en: "Mw = log₁₀(Mo) - 9.1", es: "Mw = log₁₀(Mo) - 9.1", de: "Mw = log₁₀(Mo) - 9.1", nl: "Mw = log₁₀(Mo) - 9.1" },
        { en: "Mw = (1/2) log₁₀(Mo) - 3.2", es: "Mw = (1/2) log₁₀(Mo) - 3.2", de: "Mw = (1/2) log₁₀(Mo) - 3.2", nl: "Mw = (1/2) log₁₀(Mo) - 3.2" }
      ],
      correct: 0,
      explanation: {
        en: "The moment magnitude scale relates to seismic moment through Mw = (2/3) log₁₀(Mo) - 10.7, where Mo is in dyne-cm. This relationship ensures magnitude saturation is avoided and provides a physically meaningful scale based on the earthquake's total energy release, making it the preferred magnitude scale for large earthquakes.",
        es: "La escala de magnitud de momento se relaciona con el momento sísmico a través de Mw = (2/3) log₁₀(Mo) - 10.7, donde Mo está en dine-cm. Esta relación asegura que se evite la saturación de magnitud y proporciona una escala físicamente significativa basada en la liberación total de energía del terremoto, haciéndola la escala de magnitud preferida para terremotos grandes.",
        de: "Die Momentmagnitudenskala bezieht sich auf das seismische Moment durch Mw = (2/3) log₁₀(Mo) - 10.7, wobei Mo in dyne-cm ist. Diese Beziehung stellt sicher, dass Magnitudensättigung vermieden wird und bietet eine physikalisch sinnvolle Skala basierend auf der gesamten Energiefreisetzung des Erdbebens, was sie zur bevorzugten Magnitudenskala für große Erdbeben macht.",
        nl: "De moment magnitude schaal relateert aan seismisch moment door Mw = (2/3) log₁₀(Mo) - 10.7, waar Mo in dyne-cm is. Deze relatie verzekert dat magnitude verzadiging wordt vermeden en biedt een fysiek betekenisvolle schaal gebaseerd op de totale energie vrijgave van de aardbeving, wat het de geprefereerde magnitude schaal maakt voor grote aardbevingen."
      }
    },
    {
      question: {
        en: "What is the characteristic frequency dependence of seismic wave attenuation described by the quality factor Q?",
        es: "¿Cuál es la dependencia de frecuencia característica de atenuación de ondas sísmicas descrita por el factor de calidad Q?",
        de: "Wie ist die charakteristische Frequenzabhängigkeit seismischer Wellendämpfung, beschrieben durch den Qualitätsfaktor Q?",
        nl: "Wat is de karakteristieke frequentie afhankelijkheid van seismische golf attenuatie beschreven door de kwaliteitsfactor Q?"
      },
      options: [
        { en: "Q is frequency independent (constant attenuation)", es: "Q es independiente de frecuencia (atenuación constante)", de: "Q ist frequenzunabhängig (konstante Dämpfung)", nl: "Q is frequentie onafhankelijk (constante attenuatie)" },
        { en: "Q increases with frequency (Q ∝ f^α, α > 0)", es: "Q aumenta con frecuencia (Q ∝ f^α, α > 0)", de: "Q steigt mit Frequenz (Q ∝ f^α, α > 0)", nl: "Q stijgt met frequentie (Q ∝ f^α, α > 0)" },
        { en: "Q decreases with frequency (Q ∝ f^α, α < 0)", es: "Q disminuye con frecuencia (Q ∝ f^α, α < 0)", de: "Q nimmt mit Frequenz ab (Q ∝ f^α, α < 0)", nl: "Q daalt met frequentie (Q ∝ f^α, α < 0)" },
        { en: "Q shows no systematic relationship with frequency", es: "Q no muestra relación sistemática con frecuencia", de: "Q zeigt keine systematische Beziehung zur Frequenz", nl: "Q toont geen systematische relatie met frequentie" }
      ],
      correct: 1,
      explanation: {
        en: "The quality factor Q typically increases with frequency following a power law Q = Q₀f^α where α ranges from 0.2 to 0.8 for most Earth materials. This frequency dependence means higher frequency seismic waves experience relatively less attenuation than predicted by a constant Q model, affecting spectral analysis and tomographic studies.",
        es: "El factor de calidad Q típicamente aumenta con la frecuencia siguiendo una ley de potencia Q = Q₀f^α donde α varía de 0.2 a 0.8 para la mayoría de materiales terrestres. Esta dependencia de frecuencia significa que ondas sísmicas de mayor frecuencia experimentan relativamente menos atenuación que la predicha por un modelo Q constante, afectando análisis espectral y estudios tomográficos.",
        de: "Der Qualitätsfaktor Q steigt typischerweise mit der Frequenz nach einem Potenzgesetz Q = Q₀f^α, wobei α von 0,2 bis 0,8 für die meisten Erdmaterialien reicht. Diese Frequenzabhängigkeit bedeutet, dass höherfrequente seismische Wellen relativ weniger Dämpfung erfahren als von einem konstanten Q-Modell vorhergesagt, was spektrale Analyse und tomographische Studien beeinflusst.",
        nl: "De kwaliteitsfactor Q stijgt meestal met frequentie volgens een macht wet Q = Q₀f^α waarbij α varieert van 0,2 tot 0,8 voor de meeste aardmaterialen. Deze frequentie afhankelijkheid betekent dat hogere frequentie seismische golven relatief minder attenuatie ervaren dan voorspeld door een constant Q model, wat spectrale analyse en tomografische studies beïnvloedt."
      }
    },
    {
      question: {
        en: "What is the principle behind probabilistic seismic hazard assessment (PSHA)?",
        es: "¿Cuál es el principio detrás de evaluación probabilística de riesgo sísmico (PSHA)?",
        de: "Was ist das Prinzip hinter probabilistischer seismischer Risikobewertung (PSHA)?",
        nl: "Wat is het principe achter probabilistische seismische risico beoordeling (PSHA)?"
      },
      options: [
        { en: "Integration over all possible earthquake sources, magnitudes, and distances to calculate exceedance probabilities of ground motion levels", es: "Integración sobre todas las fuentes de terremotos posibles, magnitudes y distancias para calcular probabilidades de excedencia de niveles de movimiento del suelo", de: "Integration über alle möglichen Erdbebenquellen, Magnituden und Entfernungen zur Berechnung von Überschreitungswahrscheinlichkeiten von Bodenbewegungsniveaus", nl: "Integratie over alle mogelijke aardbevingsbronnen, magnitudes en afstanden om overschrijdingskansen van grondbeweging niveaus te berekenen" },
        { en: "Simple extrapolation of historical earthquake data", es: "Extrapolación simple de datos históricos de terremotos", de: "Einfache Extrapolation historischer Erdbebendaten", nl: "Eenvoudige extrapolatie van historische aardbevingsgegevens" },
        { en: "Deterministic worst-case scenario analysis only", es: "Solo análisis determinístico de escenario de peor caso", de: "Nur deterministische Worst-Case-Szenario-Analyse", nl: "Alleen deterministische worst-case scenario analyse" },
        { en: "Statistical correlation between seismic activity and local geology", es: "Correlación estadística entre actividad sísmica y geología local", de: "Statistische Korrelation zwischen seismischer Aktivität und lokaler Geologie", nl: "Statistische correlatie tussen seismische activiteit en lokale geologie" }
      ],
      correct: 0,
      explanation: {
        en: "PSHA integrates uncertainties in earthquake occurrence (source zones, recurrence rates), earthquake size (magnitude distributions), and ground motion prediction (attenuation relationships) to calculate the probability of exceeding specified ground motion levels at a site. This provides a framework for engineering design and risk-informed decision making.",
        es: "PSHA integra incertidumbres en ocurrencia de terremotos (zonas fuente, tasas de recurrencia), tamaño de terremoto (distribuciones de magnitud), y predicción de movimiento del suelo (relaciones de atenuación) para calcular la probabilidad de exceder niveles especificados de movimiento del suelo en un sitio. Esto proporciona un marco para diseño ingenieril y toma de decisiones informada por riesgo.",
        de: "PSHA integriert Unsicherheiten in Erdbebenauftreten (Quellzonen, Wiederholungsraten), Erdbebengröße (Magnitudenverteilungen) und Bodenbewegungsvorhersage (Dämpfungsbeziehungen) um die Wahrscheinlichkeit zu berechnen, spezifizierte Bodenbewegungsniveaus an einem Standort zu überschreiten. Dies bietet einen Rahmen für ingenieurtechnisches Design und risikobasierte Entscheidungsfindung.",
        nl: "PSHA integreert onzekerheden in aardbeving voorkomen (bronzones, herhalingsfrequenties), aardbeving grootte (magnitude distributies), en grondbeweging voorspelling (attenuatie relaties) om de kans te berekenen van het overschrijden van gespecificeerde grondbeweging niveaus op een locatie. Dit biedt een raamwerk voor engineering ontwerp en risico-geïnformeerde besluitvorming."
      }
    },
    {
      question: {
        en: "What seismic analysis technique uses receiver function analysis to image subsurface discontinuities?",
        es: "¿Qué técnica de análisis sísmico utiliza análisis de función de receptor para imaginar discontinuidades del subsuelo?",
        de: "Welche seismische Analysetechnik verwendet Empfängerfunktionsanalyse zur Abbildung von Untergrund-Diskontinuitäten?",
        nl: "Welke seismische analysetechniek gebruikt ontvanger functie analyse om ondergrondse discontinuïteiten af te beelden?"
      },
      options: [
        { en: "P-to-S converted wave analysis at major velocity boundaries", es: "Análisis de ondas convertidas P-a-S en límites de velocidad principales", de: "P-zu-S umgewandelte Wellenanalyse an Haupt-Geschwindigkeitsgrenzen", nl: "P-naar-S geconverteerde golf analyse bij belangrijke snelheids grenzen" },
        { en: "Direct P-wave travel time measurements", es: "Mediciones directas de tiempo de viaje de ondas P", de: "Direkte P-Wellen-Laufzeitmessungen", nl: "Directe P-golf reistijd metingen" },
        { en: "Surface wave dispersion analysis", es: "Análisis de dispersión de ondas superficiales", de: "Oberflächenwellen-Dispersionsanalyse", nl: "Oppervlaktegolf dispersie analyse" },
        { en: "Seismic reflection coefficient calculation", es: "Cálculo de coeficiente de reflexión sísmica", de: "Seismische Reflexionskoeffizientenberechnung", nl: "Seismische reflectie coëfficiënt berekening" }
      ],
      correct: 0,
      explanation: {
        en: "Receiver function analysis isolates P-to-S converted waves generated when incident P-waves encounter velocity discontinuities beneath a seismic station. By deconvolving the vertical component from the horizontal components, it reveals the timing and amplitude of conversions, allowing mapping of major boundaries like the Moho, lithosphere-asthenosphere boundary, and crustal layering.",
        es: "El análisis de función de receptor aísla ondas convertidas P-a-S generadas cuando ondas P incidentes encuentran discontinuidades de velocidad debajo de una estación sísmica. Al deconvolucionar el componente vertical de los componentes horizontales, revela el tiempo y amplitud de conversiones, permitiendo mapear límites principales como el Moho, límite litosfera-astenosfera, y estratificación cortical.",
        de: "Die Empfängerfunktionsanalyse isoliert P-zu-S umgewandelte Wellen, die entstehen, wenn einfallende P-Wellen auf Geschwindigkeitsdiskontinuitäten unter einer seismischen Station treffen. Durch Dekonvolution der vertikalen Komponente von den horizontalen Komponenten zeigt sie Zeitpunkt und Amplitude von Umwandlungen und ermöglicht die Kartierung wichtiger Grenzen wie Moho, Lithosphäre-Asthenosphäre-Grenze und Krustenschichtung.",
        nl: "Ontvanger functie analyse isoleert P-naar-S geconverteerde golven gegenereerd wanneer invallende P-golven snelheids discontinuïteiten onder een seismisch station ontmoeten. Door deconvolutie van de verticale component van de horizontale componenten, onthult het de timing en amplitude van conversies, wat mapping mogelijk maakt van belangrijke grenzen zoals de Moho, lithosfeer-asthenosfeer grens, en crustale gelaagdheid."
      }
    },
    {
      question: {
        en: "What is the typical range of rupture velocities for earthquake faults relative to shear wave velocity?",
        es: "¿Cuál es el rango típico de velocidades de ruptura para fallas de terremoto relativo a velocidad de ondas de corte?",
        de: "Wie ist der typische Bereich von Bruchgeschwindigkeiten für Erdbebenverwerfungen relativ zur Scherwellengeschwindigkeit?",
        nl: "Wat is het typische bereik van breuksnelheden voor aardbevingsbreuken relatief tot schuifgolf snelheid?"
      },
      options: [
        { en: "0.1 to 0.5 times shear wave velocity", es: "0.1 a 0.5 veces velocidad de ondas de corte", de: "0,1 bis 0,5-fache Scherwellengeschwindigkeit", nl: "0,1 tot 0,5 keer schuifgolf snelheid" },
        { en: "0.6 to 0.9 times shear wave velocity", es: "0.6 a 0.9 veces velocidad de ondas de corte", de: "0,6 bis 0,9-fache Scherwellengeschwindigkeit", nl: "0,6 tot 0,9 keer schuifgolf snelheid" },
        { en: "1.0 to 1.5 times shear wave velocity", es: "1.0 a 1.5 veces velocidad de ondas de corte", de: "1,0 bis 1,5-fache Scherwellengeschwindigkeit", nl: "1,0 tot 1,5 keer schuifgolf snelheid" },
        { en: "2.0 to 3.0 times shear wave velocity", es: "2.0 a 3.0 veces velocidad de ondas de corte", de: "2,0 bis 3,0-fache Scherwellengeschwindigkeit", nl: "2,0 tot 3,0 keer schuifgolf snelheid" }
      ],
      correct: 1,
      explanation: {
        en: "Earthquake rupture velocities typically range from 0.6 to 0.9 times the local shear wave velocity (β). Most ruptures propagate at 0.7-0.8β, though they can occasionally reach 0.9β or even approach the Rayleigh wave speed (~0.92β). Ruptures cannot exceed the shear wave velocity except in special cases involving supershear transitions.",
        es: "Las velocidades de ruptura de terremotos típicamente varían de 0.6 a 0.9 veces la velocidad local de ondas de corte (β). La mayoría de rupturas se propagan a 0.7-0.8β, aunque ocasionalmente pueden alcanzar 0.9β o incluso aproximarse a la velocidad de ondas Rayleigh (~0.92β). Las rupturas no pueden exceder la velocidad de ondas de corte excepto en casos especiales involucrando transiciones supercorte.",
        de: "Erdbebenbruchgeschwindigkeiten reichen typischerweise von 0,6 bis 0,9-facher lokaler Scherwellengeschwindigkeit (β). Die meisten Brüche propagieren bei 0,7-0,8β, obwohl sie gelegentlich 0,9β erreichen oder sogar der Rayleigh-Wellengeschwindigkeit (~0,92β) nahekommen können. Brüche können die Scherwellengeschwindigkeit nicht überschreiten, außer in speziellen Fällen mit Superschear-Übergängen.",
        nl: "Aardbeving breuksnelheden variëren meestal van 0,6 tot 0,9 keer de lokale schuifgolf snelheid (β). De meeste breuken planten zich voort bij 0,7-0,8β, hoewel ze soms 0,9β kunnen bereiken of zelfs de Rayleigh-golfsnelheid (~0,92β) kunnen benaderen. Breuken kunnen de schuifgolf snelheid niet overschrijden behalve in speciale gevallen met superschuif overgangen."
      }
    },
    {
      question: {
        en: "What is the physical meaning of the seismic coupling coefficient in subduction zones?",
        es: "¿Cuál es el significado físico del coeficiente de acoplamiento sísmico en zonas de subducción?",
        de: "Was ist die physikalische Bedeutung des seismischen Kopplungskoeffizienten in Subduktionszonen?",
        nl: "Wat is de fysieke betekenis van de seismische koppelingscoëfficiënt in subductiezones?"
      },
      options: [
        { en: "Fraction of plate motion released through earthquakes versus aseismic creep", es: "Fracción de movimiento de placas liberada a través de terremotos versus deslizamiento asísmico", de: "Anteil der Plattenbewegung, der durch Erdbeben versus aseismisches Kriechen freigesetzt wird", nl: "Fractie van plaatbeweging vrijgegeven door aardbevingen versus aseismische kruip" },
        { en: "Ratio of P-wave to S-wave coupling at the interface", es: "Relación de acoplamiento de ondas P a ondas S en la interfaz", de: "Verhältnis der P-Wellen- zu S-Wellen-Kopplung an der Grenzfläche", nl: "Verhouding van P-golf tot S-golf koppeling bij de interface" },
        { en: "Mechanical strength of the subducting plate", es: "Resistencia mecánica de la placa subductora", de: "Mechanische Stärke der subduzierenden Platte", nl: "Mechanische sterkte van de subducterende plaat" },
        { en: "Temperature gradient across the subduction interface", es: "Gradiente de temperatura a través de la interfaz de subducción", de: "Temperaturgradient über die Subduktionsgrenzfläche", nl: "Temperatuur gradiënt over de subductie interface" }
      ],
      correct: 0,
      explanation: {
        en: "The seismic coupling coefficient represents the fraction of total plate convergence that is released seismically through earthquakes, versus the portion accommodated by aseismic creep. Values range from 0 (fully creeping) to 1 (fully locked), with typical values of 0.1-0.8 for different subduction zones, indicating varying degrees of mechanical coupling and seismic hazard.",
        es: "El coeficiente de acoplamiento sísmico representa la fracción de convergencia total de placas que se libera sísmicamente a través de terremotos, versus la porción acomodada por deslizamiento asísmico. Los valores van de 0 (completamente deslizante) a 1 (completamente bloqueado), con valores típicos de 0.1-0.8 para diferentes zonas de subducción, indicando grados variables de acoplamiento mecánico y riesgo sísmico.",
        de: "Der seismische Kopplungskoeffizient repräsentiert den Anteil der gesamten Plattenkonvergenz, der seismisch durch Erdbeben freigesetzt wird, versus den durch aseismisches Kriechen aufgenommenen Teil. Werte reichen von 0 (vollständig kriechend) bis 1 (vollständig blockiert), mit typischen Werten von 0,1-0,8 für verschiedene Subduktionszonen, was unterschiedliche Grade mechanischer Kopplung und seismischer Gefährdung anzeigt.",
        nl: "De seismische koppelingscoëfficiënt vertegenwoordigt de fractie van totale plaat convergentie die seismisch wordt vrijgegeven door aardbevingen, versus het deel opgenomen door aseismische kruip. Waarden variëren van 0 (volledig kruipend) tot 1 (volledig vergrendeld), met typische waarden van 0,1-0,8 voor verschillende subductiezones, wat wisselende graden van mechanische koppeling en seismisch gevaar aangeeft."
      }
    },
    {
      question: {
        en: "What is the principle behind ambient noise tomography for crustal imaging?",
        es: "¿Cuál es el principio detrás de tomografía de ruido ambiental para imágenes crustales?",
        de: "Was ist das Prinzip hinter Umgebungsgeräuschtomographie für Krustenbildgebung?",
        nl: "Wat is het principe achter omgevingsruis tomografie voor crustale beeldvorming?"
      },
      options: [
        { en: "Cross-correlation of continuous seismic noise extracts surface wave dispersion for velocity structure mapping", es: "Correlación cruzada de ruido sísmico continuo extrae dispersión de ondas superficiales para mapeo de estructura de velocidad", de: "Kreuzkorrelation kontinuierlichen seismischen Rauschens extrahiert Oberflächenwellendispersion für Geschwindigkeitsstrukturkartierung", nl: "Kruis-correlatie van continue seismische ruis extraheert oppervlaktegolf dispersie voor snelheidsstructuur mapping" },
        { en: "Direct measurement of ambient noise amplitude variations", es: "Medición directa de variaciones de amplitud de ruido ambiental", de: "Direkte Messung von Umgebungsgeräuschamplitudenvariationen", nl: "Directe meting van omgevingsruis amplitude variaties" },
        { en: "Statistical analysis of background seismic activity", es: "Análisis estadístico de actividad sísmica de fondo", de: "Statistische Analyse seismischer Hintergrundaktivität", nl: "Statistische analyse van achtergrond seismische activiteit" },
        { en: "Noise source location and characterization", es: "Localización y caracterización de fuente de ruido", de: "Geräuschquellenlokalisierung und -charakterisierung", nl: "Ruisbron localisatie en karakterisering" }
      ],
      correct: 0,
      explanation: {
        en: "Ambient noise tomography cross-correlates continuous ambient seismic noise between station pairs to extract surface wave Green's functions. The resulting dispersion measurements are then inverted to map crustal and upper mantle shear wave velocity structure, providing high-resolution images without requiring earthquake sources, particularly valuable in aseismic regions.",
        es: "La tomografía de ruido ambiental correlaciona cruzadamente ruido sísmico ambiental continuo entre pares de estaciones para extraer funciones de Green de ondas superficiales. Las mediciones de dispersión resultantes se invierten luego para mapear la estructura de velocidad de ondas de corte crustal y del manto superior, proporcionando imágenes de alta resolución sin requerir fuentes de terremoto, particularmente valiosas en regiones asísmicas.",
        de: "Umgebungsgeräuschtomographie kreukorreliert kontinuierliches seismisches Umgebungsgeräusch zwischen Stationspaaren, um Oberflächenwellen-Greensche Funktionen zu extrahieren. Die resultierenden Dispersionsmessungen werden dann invertiert, um Krustungs- und obere Mantelscherwellengeschwindigkeitsstruktur zu kartieren, was hochauflösende Bilder ohne Erdbebenquellen liefert, besonders wertvoll in aseismischen Regionen.",
        nl: "Omgevingsruis tomografie kruiscorreleert continue seismische omgevingsruis tussen station paren om oppervlaktegolf Green's functies te extraheren. De resulterende dispersie metingen worden dan geïnverteerd om crustale en bovenmantel schuifgolf snelheidsstructuur te mappen, wat hoge-resolutie beelden biedt zonder aardbevingsbronnen te vereisen, bijzonder waardevol in aseismische regio's."
      }
    },
    {
      question: {
        en: "What is the concept of characteristic earthquakes in seismic hazard assessment?",
        es: "¿Cuál es el concepto de terremotos característicos en evaluación de riesgo sísmico?",
        de: "Was ist das Konzept charakteristischer Erdbeben in der seismischen Risikobewertung?",
        nl: "Wat is het concept van karakteristieke aardbevingen in seismische risico beoordeling?"
      },
      options: [
        { en: "Individual fault segments repeatedly produce similar magnitude earthquakes due to geometric and stress constraints", es: "Segmentos de falla individuales producen repetidamente terremotos de magnitud similar debido a restricciones geométricas y de estrés", de: "Individuelle Verwerfungssegmente produzieren wiederholt ähnliche Magnitudenerdbeben aufgrund geometrischer und Stressbeschränkungen", nl: "Individuele breukvlak segmenten produceren herhaaldelijk gelijkaardige magnitude aardbevingen door geometrische en stress beperkingen" },
        { en: "Earthquakes with unique seismic signatures", es: "Terremotos con firmas sísmicas únicas", de: "Erdbeben mit einzigartigen seismischen Signaturen", nl: "Aardbevingen met unieke seismische handtekeningen" },
        { en: "The largest possible earthquake in a given region", es: "El terremoto más grande posible en una región dada", de: "Das größtmögliche Erdbeben in einer gegebenen Region", nl: "De grootst mogelijke aardbeving in een gegeven regio" },
        { en: "Earthquakes occurring at regular time intervals", es: "Terremotos que ocurren a intervalos regulares de tiempo", de: "Erdbeben, die in regelmäßigen Zeitintervallen auftreten", nl: "Aardbevingen die op regelmatige tijdsintervallen voorkomen" }
      ],
      correct: 0,
      explanation: {
        en: "The characteristic earthquake model suggests that fault segments have preferred rupture modes controlled by geometric boundaries (segment ends, bends, stepovers) and stress conditions, leading to repeated earthquakes of similar magnitude. This model complements the Gutenberg-Richter distribution and is particularly relevant for major fault systems where large events tend to rupture entire segments.",
        es: "El modelo de terremoto característico sugiere que los segmentos de falla tienen modos de ruptura preferidos controlados por límites geométricos (extremos de segmento, curvas, escalones) y condiciones de estrés, llevando a terremotos repetidos de magnitud similar. Este modelo complementa la distribución de Gutenberg-Richter y es particularmente relevante para sistemas de falla principales donde eventos grandes tienden a romper segmentos completos.",
        de: "Das charakteristische Erdbebenmodell legt nahe, dass Verwerfungssegmente bevorzugte Bruchmodi haben, die durch geometrische Grenzen (Segmentenden, Biegungen, Staffelbrüche) und Stressbedingungen kontrolliert werden, was zu wiederholten Erdbeben ähnlicher Magnitude führt. Dieses Modell ergänzt die Gutenberg-Richter-Verteilung und ist besonders relevant für große Verwerfungssysteme, wo große Ereignisse dazu neigen, ganze Segmente zu brechen.",
        nl: "Het karakteristieke aardbevingsmodel suggereert dat breukvlak segmenten voorkeursbreukwijzen hebben gecontroleerd door geometrische grenzen (segment einden, bochten, stappen) en stress condities, leidend tot herhaalde aardbevingen van gelijkaardige magnitude. Dit model complementeert de Gutenberg-Richter distributie en is bijzonder relevant voor grote breuksystemen waar grote gebeurtenissen geneigd zijn hele segmenten te breken."
      }
    },
    {
      question: {
        en: "What is the role of fluid pressure in earthquake triggering and fault mechanics?",
        es: "¿Cuál es el papel de la presión de fluidos en desencadenamiento de terremotos y mecánica de fallas?",
        de: "Welche Rolle spielt Flüssigkeitsdruck beim Erdbebenauslösen und der Verwerfungsmechanik?",
        nl: "Wat is de rol van vloeistofdruk in aardbeving uitlokkering en breuk mechanica?"
      },
      options: [
        { en: "High pore pressure reduces effective stress and promotes fault failure according to Coulomb criterion", es: "Alta presión de poros reduce estrés efectivo y promueve falla de falla según criterio de Coulomb", de: "Hoher Porendruck reduziert effektiven Stress und fördert Verwerfungsversagen nach Coulomb-Kriterium", nl: "Hoge porie druk vermindert effectieve stress en bevordert breuk falen volgens Coulomb criterium" },
        { en: "Fluids only affect earthquake magnitude, not timing", es: "Los fluidos solo afectan magnitud de terremoto, no el tiempo", de: "Flüssigkeiten beeinflussen nur Erdbebenmagnitude, nicht das Timing", nl: "Vloeistoffen beïnvloeden alleen aardbevings magnitude, niet timing" },
        { en: "Fluid pressure increases fault strength and prevents earthquakes", es: "Presión de fluidos aumenta resistencia de falla y previene terremotos", de: "Flüssigkeitsdruck erhöht Verwerfungsstärke und verhindert Erdbeben", nl: "Vloeistofdruk verhoogt breuk sterkte en voorkomt aardbevingen" },
        { en: "Fluids have no significant impact on fault behavior", es: "Los fluidos no tienen impacto significativo en comportamiento de falla", de: "Flüssigkeiten haben keinen signifikanten Einfluss auf Verwerfungsverhalten", nl: "Vloeistoffen hebben geen significante impact op breuk gedrag" }
      ],
      correct: 0,
      explanation: {
        en: "Fluid pressure plays a crucial role by reducing effective stress (σeff = σn - Pf) on fault surfaces. According to the Coulomb failure criterion (τ = μ(σn - Pf)), elevated pore pressure lowers the shear stress threshold for fault failure. This mechanism explains induced seismicity from fluid injection, natural earthquake triggering by groundwater changes, and fault behavior in high-pressure environments.",
        es: "La presión de fluidos juega un papel crucial reduciendo el estrés efectivo (σeff = σn - Pf) en superficies de falla. Según el criterio de falla de Coulomb (τ = μ(σn - Pf)), presión de poros elevada reduce el umbral de estrés cortante para falla de falla. Este mecanismo explica sismicidad inducida por inyección de fluidos, desencadenamiento natural de terremotos por cambios de agua subterránea, y comportamiento de falla en ambientes de alta presión.",
        de: "Flüssigkeitsdruck spielt eine entscheidende Rolle durch Reduzierung des effektiven Stresses (σeff = σn - Pf) auf Verwerfungsoberflächen. Nach dem Coulomb-Versagenskriterium (τ = μ(σn - Pf)) senkt erhöhter Porendruck die Scherspannungsschwelle für Verwerfungsversagen. Dieser Mechanismus erklärt induzierte Seismizität durch Flüssigkeitsinjektion, natürliche Erdbebenauslösung durch Grundwasserveränderungen und Verwerfungsverhalten in Hochdruckumgebungen.",
        nl: "Vloeistofdruk speelt een cruciale rol door effectieve stress (σeff = σn - Pf) op breukvlakken te verminderen. Volgens het Coulomb faalcriterium (τ = μ(σn - Pf)) verlaagt verhoogde porie druk de schuifspanning drempel voor breuk falen. Dit mechanisme verklaart geïnduceerde seismiciteit door vloeistof injectie, natuurlijke aardbeving uitlokkering door grondwater veranderingen, en breuk gedrag in hoge-druk omgevingen."
      }
    },
    {
      question: {
        en: "What is the significance of the corner frequency in earthquake source spectra?",
        es: "¿Cuál es la importancia de la frecuencia de esquina en espectros de fuente de terremoto?",
        de: "Was ist die Bedeutung der Eckfrequenz in Erdbebenquellenspektren?",
        nl: "Wat is de betekenis van de hoekfrequentie in aardbeving bron spectra?"
      },
      options: [
        { en: "Transition frequency between flat low-frequency plateau and high-frequency decay, related to source dimensions", es: "Frecuencia de transición entre meseta plana de baja frecuencia y decaimiento de alta frecuencia, relacionada con dimensiones de fuente", de: "Übergangsfrequenz zwischen flachem Niederfrequenz-Plateau und Hochfrequenz-Abfall, bezogen auf Quellendimensionen", nl: "Overgangsfrequentie tussen vlak laagfrequent plateau en hoogfrequent verval, gerelateerd aan bron dimensies" },
        { en: "Maximum frequency content of seismic waves", es: "Contenido de frecuencia máxima de ondas sísmicas", de: "Maximaler Frequenzgehalt seismischer Wellen", nl: "Maximale frequentie-inhoud van seismische golven" },
        { en: "Frequency at which attenuation is minimized", es: "Frecuencia en la que se minimiza la atenuación", de: "Frequenz, bei der Dämpfung minimiert wird", nl: "Frequentie waarbij attenuatie geminimaliseerd wordt" },
        { en: "Resonance frequency of the recording instrument", es: "Frecuencia de resonancia del instrumento de grabación", de: "Resonanzfrequenz des Aufnahmeinstruments", nl: "Resonantie frequentie van het opname instrument" }
      ],
      correct: 0,
      explanation: {
        en: "The corner frequency marks the transition in earthquake source spectra from a flat amplitude plateau at low frequencies to ω⁻² decay at high frequencies. It's inversely related to source dimensions: fc ∝ (stress drop/seismic moment)^(1/3). This relationship allows estimation of fault dimensions and stress drop, making it fundamental for earthquake source parameter determination.",
        es: "La frecuencia de esquina marca la transición en espectros de fuente de terremoto de una meseta de amplitud plana a bajas frecuencias a decaimiento ω⁻² a altas frecuencias. Está inversamente relacionada con dimensiones de fuente: fc ∝ (caída de estrés/momento sísmico)^(1/3). Esta relación permite estimación de dimensiones de falla y caída de estrés, haciéndola fundamental para determinación de parámetros de fuente de terremoto.",
        de: "Die Eckfrequenz markiert den Übergang in Erdbebenquellenspektren von einem flachen Amplituden-Plateau bei niedrigen Frequenzen zu ω⁻² Abfall bei hohen Frequenzen. Sie ist umgekehrt zu Quellendimensionen bezogen: fc ∝ (Spannungsabfall/seismisches Moment)^(1/3). Diese Beziehung ermöglicht Abschätzung von Verwerfungsdimensionen und Spannungsabfall, macht sie fundamental für Erdbebenquellenparameterbestimmung.",
        nl: "De hoekfrequentie markeert de overgang in aardbeving bron spectra van een vlak amplitude plateau bij lage frequenties naar ω⁻² verval bij hoge frequenties. Het is omgekeerd gerelateerd aan bron dimensies: fc ∝ (stress drop/seismisch moment)^(1/3). Deze relatie maakt schatting van breuk dimensies en stress drop mogelijk, wat het fundamenteel maakt voor aardbeving bron parameter bepaling."
      }
    },
    {
      question: {
        en: "What is the primary mechanism behind slow slip events (SSEs) observed on subduction zone interfaces?",
        es: "¿Cuál es el mecanismo principal detrás de eventos de deslizamiento lento (SSEs) observados en interfaces de zonas de subducción?",
        de: "Was ist der primäre Mechanismus hinter langsamen Gleiterereignissen (SSEs), die an Subduktionszonengrenzflächen beobachtet werden?",
        nl: "Wat is het primaire mechanisme achter langzame slip gebeurtenissen (SSEs) waargenomen op subductiezone interfaces?"
      },
      options: [
        { en: "Aseismic creep in transitional zones between locked and freely slipping regions", es: "Deslizamiento asísmico en zonas transicionales entre regiones bloqueadas y de deslizamiento libre", de: "Aseismisches Kriechen in Übergangszonen zwischen blockierten und frei gleitenden Regionen", nl: "Aseismische kruip in overgangszones tussen vergrendelde en vrij glijdende regio's" },
        { en: "Rapid thermal expansion of subducting slabs", es: "Expansión térmica rápida de placas subductoras", de: "Schnelle thermische Ausdehnung subduzierender Platten", nl: "Snelle thermische expansie van subducterende platen" },
        { en: "Metamorphic phase transitions in oceanic crust", es: "Transiciones de fase metamórficas en corteza oceánica", de: "Metamorphe Phasenübergänge in ozeanischer Kruste", nl: "Metamorfe fase overgangen in oceanische korst" },
        { en: "Magmatic intrusion along fault planes", es: "Intrusión magmática a lo largo de planos de falla", de: "Magmatische Intrusion entlang Verwerfungsebenen", nl: "Magmatische intrusie langs breuk vlakken" }
      ],
      correct: 0,
      explanation: {
        en: "Slow slip events occur in transitional zones on subduction interfaces where conditions favor stable sliding over unstable (seismic) slip. These regions, often characterized by elevated fluid pressure, clay-rich materials, or specific temperature-pressure conditions, allow accumulated strain to be released gradually over days to months rather than instantaneously in earthquakes.",
        es: "Los eventos de deslizamiento lento ocurren en zonas transicionales en interfaces de subducción donde las condiciones favorecen deslizamiento estable sobre deslizamiento inestable (sísmico). Estas regiones, a menudo caracterizadas por presión de fluidos elevada, materiales ricos en arcilla, o condiciones específicas de temperatura-presión, permiten que la deformación acumulada se libere gradualmente durante días a meses en lugar de instantáneamente en terremotos.",
        de: "Langsame Gleiterereignisse treten in Übergangszonen an Subduktionsgrenzflächen auf, wo Bedingungen stabiles Gleiten über instabiles (seismisches) Gleiten begünstigen. Diese Regionen, oft charakterisiert durch erhöhten Flüssigkeitsdruck, tonreiche Materialien oder spezifische Temperatur-Druck-Bedingungen, erlauben es, dass akkumulierte Spannung graduell über Tage bis Monate freigesetzt wird statt instantan in Erdbeben.",
        nl: "Langzame slip gebeurtenissen treden op in overgangszones op subductie interfaces waar omstandigheden stabiel glijden bevoordelen boven onstabiel (seismisch) glijden. Deze regio's, vaak gekarakteriseerd door verhoogde vloeistofdruk, klei-rijke materialen, of specifieke temperatuur-druk condities, maken het mogelijk dat opgehoopte spanning geleidelijk wordt vrijgegeven over dagen tot maanden in plaats van instantaan in aardbevingen."
      }
    },
    {
      question: {
        en: "What is the concept of asperity models in earthquake source mechanics?",
        es: "¿Cuál es el concepto de modelos de aspereza en mecánica de fuente de terremotos?",
        de: "Was ist das Konzept der Asperitätsmodelle in der Erdbebenquellenmechanik?",
        nl: "Wat is het concept van asperiteit modellen in aardbeving bron mechanica?"
      },
      options: [
        { en: "Fault surfaces contain strong patches (asperities) that concentrate stress and control rupture initiation and propagation", es: "Superficies de falla contienen parches fuertes (asperezas) que concentran estrés y controlan iniciación y propagación de ruptura", de: "Verwerfungsoberflächen enthalten starke Flecken (Asperitäten), die Stress konzentrieren und Bruchinitiierung und -ausbreitung kontrollieren", nl: "Breukvlakken bevatten sterke plekken (asperiteiten) die stress concentreren en breuk initiatie en propagatie controleren" },
        { en: "Smooth fault surfaces with uniform stress distribution", es: "Superficies de falla lisas con distribución uniforme de estrés", de: "Glatte Verwerfungsoberflächen mit gleichmäßiger Stressverteilung", nl: "Gladde breukvlakken met uniforme stress distributie" },
        { en: "Surface roughness effects on seismic wave scattering", es: "Efectos de rugosidad superficial en dispersión de ondas sísmicas", de: "Oberflächenrauheitseffekte auf seismische Wellenstreuung", nl: "Oppervlakte ruwheid effecten op seismische golf verstrooiing" },
        { en: "Geometric irregularities in fault plane orientation", es: "Irregularidades geométricas en orientación de plano de falla", de: "Geometrische Unregelmäßigkeiten in Verwerfungsebenenorientierung", nl: "Geometrische onregelmatigheden in breuk vlak oriëntatie" }
      ],
      correct: 0,
      explanation: {
        en: "Asperity models describe fault surfaces as heterogeneous with strong patches (asperities) embedded in weaker surrounding areas. These asperities accumulate stress preferentially, resist initial failure, but when they do fail, they release large amounts of energy. This heterogeneity explains complex earthquake source processes, aftershock patterns, and rupture dynamics observed in real earthquakes.",
        es: "Los modelos de aspereza describen superficies de falla como heterogéneas con parches fuertes (asperezas) incrustados en áreas circundantes más débiles. Estas asperezas acumulan estrés preferentemente, resisten falla inicial, pero cuando fallan, liberan grandes cantidades de energía. Esta heterogeneidad explica procesos complejos de fuente de terremoto, patrones de réplicas y dinámicas de ruptura observadas en terremotos reales.",
        de: "Asperitätsmodelle beschreiben Verwerfungsoberflächen als heterogen mit starken Flecken (Asperitäten), die in schwächere umgebende Bereiche eingebettet sind. Diese Asperitäten akkumulieren vorzugsweise Stress, widerstehen anfänglichem Versagen, aber wenn sie versagen, setzen sie große Mengen Energie frei. Diese Heterogenität erklärt komplexe Erdbebenquellenprozesse, Nachbebenmuster und Bruchdynamik, die in echten Erdbeben beobachtet werden.",
        nl: "Asperiteit modellen beschrijven breukvlakken als heterogeen met sterke plekken (asperiteiten) ingebed in zwakkere omringende gebieden. Deze asperiteiten hopen bij voorkeur stress op, weerstaan initieel falen, maar wanneer ze falen, geven ze grote hoeveelheden energie vrij. Deze heterogeniteit verklaart complexe aardbeving bron processen, naschok patronen, en breuk dynamiek waargenomen in echte aardbevingen."
      }
    },
    {
      question: {
        en: "What is the role of the Wadati-Benioff zone in subduction zone seismology?",
        es: "¿Cuál es el papel de la zona de Wadati-Benioff en sismología de zonas de subducción?",
        de: "Welche Rolle spielt die Wadati-Benioff-Zone in der Subduktionszonen-Seismologie?",
        nl: "Wat is de rol van de Wadati-Benioff zone in subductiezone seismologie?"
      },
      options: [
        { en: "Defines the geometry and extent of the subducting slab through the distribution of earthquake hypocenters", es: "Define la geometría y extensión de la placa subductora a través de la distribución de hipocentros de terremotos", de: "Definiert die Geometrie und Ausdehnung der subduzierenden Platte durch die Verteilung von Erdbebenhypozentren", nl: "Definieert de geometrie en uitbreiding van de subducterende plaat door de distributie van aardbeving hypocentra" },
        { en: "Marks the boundary between oceanic and continental crust", es: "Marca el límite entre corteza oceánica y continental", de: "Markiert die Grenze zwischen ozeanischer und kontinentaler Kruste", nl: "Markeert de grens tussen oceanische en continentale korst" },
        { en: "Indicates regions of maximum seismic wave attenuation", es: "Indica regiones de atenuación máxima de ondas sísmicas", de: "Zeigt Regionen maximaler seismischer Wellendämpfung an", nl: "Geeft regio's aan van maximale seismische golf attenuatie" },
        { en: "Represents the depth limit of earthquake occurrence", es: "Representa el límite de profundidad de ocurrencia de terremotos", de: "Repräsentiert die Tiefengrenze des Erdbebenauftretens", nl: "Vertegenwoordigt de diepte limiet van aardbeving voorkomen" }
      ],
      correct: 0,
      explanation: {
        en: "The Wadati-Benioff zone is the inclined seismic zone defined by earthquake hypocenters that traces the geometry of subducting oceanic lithosphere. It extends from shallow depths at the trench to depths of 300-700 km, mapping the slab's descent into the mantle and providing crucial constraints on slab geometry, thermal structure, and dynamics in subduction systems.",
        es: "La zona de Wadati-Benioff es la zona sísmica inclinada definida por hipocentros de terremotos que traza la geometría de la litosfera oceánica subductora. Se extiende desde profundidades someras en la fosa hasta profundidades de 300-700 km, mapeando el descenso de la placa hacia el manto y proporcionando restricciones cruciales sobre geometría de placa, estructura térmica y dinámicas en sistemas de subducción.",
        de: "Die Wadati-Benioff-Zone ist die geneigte seismische Zone, die durch Erdbebenhypozentren definiert wird und die Geometrie der subduzierenden ozeanischen Lithosphäre nachzeichnet. Sie erstreckt sich von geringen Tiefen am Graben bis zu Tiefen von 300-700 km, kartiert den Abstieg der Platte in den Mantel und liefert entscheidende Einschränkungen für Plattengeometrie, thermische Struktur und Dynamik in Subduktionssystemen.",
        nl: "De Wadati-Benioff zone is de hellende seismische zone gedefinieerd door aardbeving hypocentra die de geometrie van subducterende oceanische lithosfeer traceert. Het strekt zich uit van ondiepe diepten bij de trog tot diepten van 300-700 km, het mappt de afdaling van de plaat in de mantel en biedt cruciale beperkingen voor plaat geometrie, thermische structuur, en dynamiek in subductie systemen."
      }
    },
    {
      question: {
        en: "What is the significance of the Gutenberg discontinuity in global seismology?",
        es: "¿Cuál es la importancia de la discontinuidad de Gutenberg en sismología global?",
        de: "Was ist die Bedeutung der Gutenberg-Diskontinuität in der globalen Seismologie?",
        nl: "Wat is de betekenis van de Gutenberg discontinuïteit in globale seismologie?"
      },
      options: [
        { en: "Core-mantle boundary causing P-wave shadow zone and S-wave extinction due to liquid outer core", es: "Límite núcleo-manto causando zona de sombra de ondas P y extinción de ondas S debido al núcleo externo líquido", de: "Kern-Mantel-Grenze verursacht P-Wellen-Schattenzone und S-Wellen-Extinktion aufgrund des flüssigen äußeren Kerns", nl: "Kern-mantel grens veroorzaakt P-golf schaduwzone en S-golf extinctie door vloeibare buitenkern" },
        { en: "Mohorovičić discontinuity separating crust and mantle", es: "Discontinuidad de Mohorovičić separando corteza y manto", de: "Mohorovičić-Diskontinuität trennt Kruste und Mantel", nl: "Mohorovičić discontinuïteit scheidend korst en mantel" },
        { en: "Lithosphere-asthenosphere boundary", es: "Límite litosfera-astenosfera", de: "Lithosphäre-Asthenosphäre-Grenze", nl: "Lithosfeer-asthenosfeer grens" },
        { en: "Upper mantle phase transition at 410 km depth", es: "Transición de fase del manto superior a 410 km de profundidad", de: "Oberer Mantel-Phasenübergang in 410 km Tiefe", nl: "Bovenmantel fase overgang op 410 km diepte" }
      ],
      correct: 0,
      explanation: {
        en: "The Gutenberg discontinuity at ~2900 km depth marks the core-mantle boundary where P-wave velocity drops dramatically from ~13.7 to ~8.0 km/s due to the liquid outer core. This creates the P-wave shadow zone (103°-142°) and completely blocks S-waves, providing fundamental evidence for Earth's internal structure and the liquid nature of the outer core.",
        es: "La discontinuidad de Gutenberg a ~2900 km de profundidad marca el límite núcleo-manto donde la velocidad de ondas P cae dramáticamente de ~13.7 a ~8.0 km/s debido al núcleo externo líquido. Esto crea la zona de sombra de ondas P (103°-142°) y bloquea completamente las ondas S, proporcionando evidencia fundamental para la estructura interna de la Tierra y la naturaleza líquida del núcleo externo.",
        de: "Die Gutenberg-Diskontinuität in ~2900 km Tiefe markiert die Kern-Mantel-Grenze, wo die P-Wellengeschwindigkeit dramatisch von ~13,7 auf ~8,0 km/s aufgrund des flüssigen äußeren Kerns fällt. Dies erzeugt die P-Wellen-Schattenzone (103°-142°) und blockiert S-Wellen vollständig, was fundamentale Evidenz für Erds innere Struktur und die flüssige Natur des äußeren Kerns liefert.",
        nl: "De Gutenberg discontinuïteit op ~2900 km diepte markeert de kern-mantel grens waar P-golfsnelheid dramatisch valt van ~13,7 naar ~8,0 km/s door de vloeibare buitenkern. Dit creëert de P-golf schaduwzone (103°-142°) en blokkeert S-golven volledig, wat fundamenteel bewijs levert voor de aarde's interne structuur en de vloeibare natuur van de buitenkern."
      }
    },
    {
      question: {
        en: "What is the principle of seismic moment tensor analysis in earthquake source studies?",
        es: "¿Cuál es el principio del análisis de tensor de momento sísmico en estudios de fuente de terremotos?",
        de: "Was ist das Prinzip der seismischen Momenttensoranalyse in Erdbebenquellenstudien?",
        nl: "Wat is het principe van seismische moment tensor analyse in aardbeving bron studies?"
      },
      options: [
        { en: "Complete mathematical description of seismic source through symmetric 3x3 tensor representing equivalent forces", es: "Descripción matemática completa de fuente sísmica a través de tensor simétrico 3x3 representando fuerzas equivalentes", de: "Vollständige mathematische Beschreibung der seismischen Quelle durch symmetrischen 3x3-Tensor, der äquivalente Kräfte repräsentiert", nl: "Volledige mathematische beschrijving van seismische bron door symmetrische 3x3 tensor die equivalente krachten vertegenwoordigt" },
        { en: "Simple amplitude measurement at single station", es: "Medición simple de amplitud en estación única", de: "Einfache Amplitudenmessung an einer einzelnen Station", nl: "Eenvoudige amplitude meting bij enkele station" },
        { en: "Travel time analysis for source location", es: "Análisis de tiempo de viaje para localización de fuente", de: "Laufzeitanalyse für Quellenlokalisierung", nl: "Reistijd analyse voor bron locatie" },
        { en: "Frequency domain filtering of seismic signals", es: "Filtrado en dominio de frecuencia de señales sísmicas", de: "Frequenzbereichsfilterung seismischer Signale", nl: "Frequentiedomein filtering van seismische signalen" }
      ],
      correct: 0,
      explanation: {
        en: "Seismic moment tensor analysis provides a complete description of earthquake sources using a symmetric 3x3 tensor with 6 independent components. This tensor represents the equivalent forces at the source and can decompose into isotropic (explosion/implosion), compensated linear vector dipole (CLVD), and double-couple (shear faulting) components, enabling detailed source mechanism determination from seismic waveform data.",
        es: "El análisis de tensor de momento sísmico proporciona una descripción completa de fuentes de terremoto usando un tensor simétrico 3x3 con 6 componentes independientes. Este tensor representa las fuerzas equivalentes en la fuente y puede descomponerse en componentes isotrópicos (explosión/implosión), dipolo vectorial lineal compensado (CLVD), y par doble (falla de corte), permitiendo determinación detallada de mecanismo de fuente a partir de datos de forma de onda sísmica.",
        de: "Die seismische Momenttensoranalyse bietet eine vollständige Beschreibung von Erdbebenquellen mit einem symmetrischen 3x3-Tensor mit 6 unabhängigen Komponenten. Dieser Tensor repräsentiert die äquivalenten Kräfte an der Quelle und kann in isotropische (Explosion/Implosion), kompensierte lineare Vektordipol (CLVD) und Doppelkräftepaar (Scherverwerfung) Komponenten zerlegt werden, was detaillierte Quellenmechanismusbestimmung aus seismischen Wellenformdaten ermöglicht.",
        nl: "Seismische moment tensor analyse biedt een volledige beschrijving van aardbevingsbronnen met een symmetrische 3x3 tensor met 6 onafhankelijke componenten. Deze tensor vertegenwoordigt de equivalente krachten bij de bron en kan ontleed worden in isotrope (explosie/implosie), gecompenseerde lineaire vector dipool (CLVD), en dubbel-koppel (schuif breuk) componenten, wat gedetailleerde bron mechanisme bepaling mogelijk maakt uit seismische golfvorm data."
      }
    },
    {
      question: {
        en: "What is the concept of b-value variations in seismic hazard analysis?",
        es: "¿Cuál es el concepto de variaciones del valor-b en análisis de riesgo sísmico?",
        de: "Was ist das Konzept der b-Wert-Variationen in der seismischen Risikoanalyse?",
        nl: "Wat is het concept van b-waarde variaties in seismische risico analyse?"
      },
      options: [
        { en: "Spatial and temporal changes in the slope of magnitude-frequency distributions reflecting stress state and fault maturity", es: "Cambios espaciales y temporales en la pendiente de distribuciones de magnitud-frecuencia reflejando estado de estrés y madurez de falla", de: "Räumliche und zeitliche Änderungen in der Steigung von Magnitud-Frequenz-Verteilungen, die Stresszustand und Verwerfungsreife widerspiegeln", nl: "Ruimtelijke en temporele veranderingen in de helling van magnitude-frequentie distributies die stress staat en breuk rijpheid reflecteren" },
        { en: "Magnitude measurement uncertainty variations", es: "Variaciones de incertidumbre de medición de magnitud", de: "Magnitudenmessungs-Unsicherheitsvariationen", nl: "Magnitude meetonzekerheid variaties" },
        { en: "Maximum possible earthquake magnitude in a region", es: "Magnitud máxima posible de terremoto en una región", de: "Maximal mögliche Erdbebenmagnitude in einer Region", nl: "Maximaal mogelijke aardbevings magnitude in een regio" },
        { en: "Earthquake occurrence rate changes only", es: "Solo cambios en tasa de ocurrencia de terremotos", de: "Nur Änderungen der Erdbebenauftretensrate", nl: "Alleen aardbeving voorkomst frequentie veranderingen" }
      ],
      correct: 0,
      explanation: {
        en: "b-value variations in the Gutenberg-Richter relation (log N = a - bM) provide insights into stress conditions and fault system properties. Lower b-values (~0.6-0.8) suggest higher stress states or mature fault systems with fewer small events relative to large ones, while higher b-values (~1.2-1.4) indicate lower stress or more heterogeneous conditions favoring smaller earthquakes.",
        es: "Las variaciones del valor-b en la relación de Gutenberg-Richter (log N = a - bM) proporcionan perspectivas sobre condiciones de estrés y propiedades del sistema de fallas. Valores-b menores (~0.6-0.8) sugieren estados de estrés más altos o sistemas de falla maduros con menos eventos pequeños relativos a los grandes, mientras valores-b mayores (~1.2-1.4) indican estrés menor o condiciones más heterogéneas favoreciendo terremotos más pequeños.",
        de: "b-Wert-Variationen in der Gutenberg-Richter-Beziehung (log N = a - bM) geben Einblicke in Stressbedingungen und Verwerfungssystemeigenschaften. Niedrigere b-Werte (~0,6-0,8) deuten auf höhere Stresszustände oder reife Verwerfungssysteme mit weniger kleinen Ereignissen relativ zu großen hin, während höhere b-Werte (~1,2-1,4) niedrigeren Stress oder heterogenere Bedingungen anzeigen, die kleinere Erdbeben begünstigen.",
        nl: "b-waarde variaties in de Gutenberg-Richter relatie (log N = a - bM) bieden inzichten in stress condities en breuksysteem eigenschappen. Lagere b-waarden (~0,6-0,8) suggereren hogere stress staten of rijpe breuksystemen met minder kleine gebeurtenissen relatief tot grote, terwijl hogere b-waarden (~1,2-1,4) lagere stress of meer heterogene condities aangeven die kleinere aardbevingen bevoordelen."
      }
    },
    {
      question: {
        en: "What is the role of the lithosphere-asthenosphere boundary (LAB) in regional seismology?",
        es: "¿Cuál es el papel del límite litosfera-astenosfera (LAB) en sismología regional?",
        de: "Welche Rolle spielt die Lithosphäre-Asthenosphäre-Grenze (LAB) in der regionalen Seismologie?",
        nl: "Wat is de rol van de lithosfeer-asthenosfeer grens (LAB) in regionale seismologie?"
      },
      options: [
        { en: "Controls regional wave propagation, seismic velocity structure, and limits depth of intraplate earthquake occurrence", es: "Controla propagación de ondas regionales, estructura de velocidad sísmica, y limita profundidad de ocurrencia de terremotos intraplaca", de: "Kontrolliert regionale Wellenausbreitung, seismische Geschwindigkeitsstruktur und begrenzt Tiefe des Intraplattenerdbeben-Auftretens", nl: "Controleert regionale golfvoortplanting, seismische snelheidsstructuur, en beperkt diepte van intraplaat aardbeving voorkomen" },
        { en: "Marks the boundary between P and S wave propagation", es: "Marca el límite entre propagación de ondas P y S", de: "Markiert die Grenze zwischen P- und S-Wellenausbreitung", nl: "Markeert de grens tussen P en S golf voortplanting" },
        { en: "Defines the maximum depth of volcanic activity", es: "Define la profundidad máxima de actividad volcánica", de: "Definiert die maximale Tiefe vulkanischer Aktivität", nl: "Definieert de maximale diepte van vulkanische activiteit" },
        { en: "Controls only surface wave attenuation", es: "Controla solo atenuación de ondas superficiales", de: "Kontrolliert nur Oberflächenwellendämpfung", nl: "Controleert alleen oppervlaktegolf attenuatie" }
      ],
      correct: 0,
      explanation: {
        en: "The lithosphere-asthenosphere boundary represents the transition from rigid lithosphere to the more ductile asthenosphere, typically at 50-250 km depth. It controls regional seismic wave propagation through velocity contrasts, acts as a waveguide for regional phases, limits the depth distribution of intraplate earthquakes (which rarely occur below the LAB), and influences regional tectonics and stress transmission.",
        es: "El límite litosfera-astenosfera representa la transición de litosfera rígida a la astenosfera más dúctil, típicamente a 50-250 km de profundidad. Controla la propagación de ondas sísmicas regionales a través de contrastes de velocidad, actúa como guía de ondas para fases regionales, limita la distribución de profundidad de terremotos intraplaca (que rara vez ocurren debajo del LAB), e influye en tectónica regional y transmisión de estrés.",
        de: "Die Lithosphäre-Asthenosphäre-Grenze repräsentiert den Übergang von starrer Lithosphäre zur duktileren Asthenosphäre, typisch bei 50-250 km Tiefe. Sie kontrolliert regionale seismische Wellenausbreitung durch Geschwindigkeitskontraste, wirkt als Wellenleiter für regionale Phasen, begrenzt die Tiefenverteilung von Intraplattenerdbeben (die selten unter dem LAB auftreten) und beeinflusst regionale Tektonik und Stressübertragung.",
        nl: "De lithosfeer-asthenosfeer grens vertegenwoordigt de overgang van rigide lithosfeer naar de meer ductiele asthenosfeer, meestal op 50-250 km diepte. Het controleert regionale seismische golfvoortplanting door snelheidscontrasten, werkt als golfgeleider voor regionale fasen, beperkt de diepte distributie van intraplaat aardbevingen (die zelden onder de LAB voorkomen), en beïnvloedt regionale tektoniek en stress transmissie."
      }
    },
    {
      question: {
        en: "What is the significance of paleoseismic analysis in long-term earthquake hazard assessment?",
        es: "¿Cuál es la importancia del análisis paleosísmico en evaluación de riesgo de terremoto a largo plazo?",
        de: "Was ist die Bedeutung der paläoseismischen Analyse in der langfristigen Erdbebenrisikobewertung?",
        nl: "Wat is de betekenis van paleoseismische analyse in lange-termijn aardbeving risico beoordeling?"
      },
      options: [
        { en: "Extends earthquake records beyond historical data to determine long-term recurrence intervals and maximum magnitudes", es: "Extiende registros de terremotos más allá de datos históricos para determinar intervalos de recurrencia a largo plazo y magnitudes máximas", de: "Erweitert Erdbebenaufzeichnungen über historische Daten hinaus zur Bestimmung langfristiger Wiederholungsintervalle und Maximalmagnitude", nl: "Breidt aardbevingsrecords uit voorbij historische data om lange-termijn herhalingsintervallen en maximum magnitudes te bepalen" },
        { en: "Only provides information about prehistoric volcanic activity", es: "Solo proporciona información sobre actividad volcánica prehistórica", de: "Liefert nur Informationen über prähistorische vulkanische Aktivität", nl: "Biedt alleen informatie over prehistorische vulkanische activiteit" },
        { en: "Measures current stress accumulation rates on faults", es: "Mide tasas actuales de acumulación de estrés en fallas", de: "Misst aktuelle Stressakkumulationsraten an Verwerfungen", nl: "Meet huidige stress ophoping snelheden op breuken" },
        { en: "Calibrates modern seismograph recordings", es: "Calibra grabaciones modernas de sismógrafo", de: "Kalibriert moderne Seismographenaufzeichnungen", nl: "Kalibreert moderne seismograaf opnames" }
      ],
      correct: 0,
      explanation: {
        en: "Paleoseismic analysis investigates prehistoric earthquakes through geological evidence (fault scarps, offset deposits, liquefaction features, tsunami deposits) to extend earthquake chronologies beyond the limited historical and instrumental record. This provides crucial data on long-term recurrence intervals, maximum credible earthquakes, and temporal clustering patterns essential for probabilistic seismic hazard assessment and engineering design.",
        es: "El análisis paleosísmico investiga terremotos prehistóricos a través de evidencia geológica (escarpas de falla, depósitos desplazados, características de licuefacción, depósitos de tsunami) para extender cronologías de terremotos más allá del registro histórico e instrumental limitado. Esto proporciona datos cruciales sobre intervalos de recurrencia a largo plazo, terremotos máximos creíbles, y patrones de agrupamiento temporal esenciales para evaluación probabilística de riesgo sísmico y diseño ingenieril.",
        de: "Die paläoseismische Analyse untersucht prähistorische Erdbeben durch geologische Evidenz (Verwerfungssteilhänge, versetzte Ablagerungen, Verflüssigungsmerkmale, Tsunami-Ablagerungen) um Erdbebenchronologien über die begrenzte historische und instrumentelle Aufzeichnung hinaus zu erweitern. Dies liefert entscheidende Daten über langfristige Wiederholungsintervalle, maximal glaubwürdige Erdbeben und zeitliche Clusterungsmuster, die für probabilistische seismische Risikobewertung und ingenieurtechnisches Design wesentlich sind.",
        nl: "Paleoseismische analyse onderzoekt prehistorische aardbevingen door geologisch bewijs (breuk escarpments, verschoven afzettingen, vloeibaarmaking kenmerken, tsunami afzettingen) om aardbeving chronologieën uit te breiden voorbij de beperkte historische en instrumentele records. Dit biedt cruciale data over lange-termijn herhalingsintervallen, maximum geloofwaardige aardbevingen, en temporele clustering patronen essentieel voor probabilistische seismische risico beoordeling en engineering ontwerp."
      }
    },
    {
      question: {
        en: "What is the principle behind ground motion prediction equations (GMPEs) in seismic hazard analysis?",
        es: "¿Cuál es el principio detrás de ecuaciones de predicción de movimiento del suelo (GMPEs) en análisis de riesgo sísmico?",
        de: "Was ist das Prinzip hinter Bodenbewegungsvorhersagegleichungen (GMPEs) in der seismischen Risikoanalyse?",
        nl: "Wat is het principe achter grondbeweging voorspellings vergelijkingen (GMPEs) in seismische risico analyse?"
      },
      options: [
        { en: "Empirical relationships predicting ground motion intensity as functions of earthquake magnitude, distance, and site conditions", es: "Relaciones empíricas prediciendo intensidad de movimiento del suelo como funciones de magnitud de terremoto, distancia y condiciones del sitio", de: "Empirische Beziehungen zur Vorhersage der Bodenbewegungsintensität als Funktionen von Erdbebenmagnitude, Entfernung und Standortbedingungen", nl: "Empirische relaties die grondbeweging intensiteit voorspellen als functies van aardbevings magnitude, afstand, en locatie condities" },
        { en: "Theoretical calculations based on wave propagation only", es: "Cálculos teóricos basados solo en propagación de ondas", de: "Theoretische Berechnungen basierend nur auf Wellenausbreitung", nl: "Theoretische berekeningen gebaseerd alleen op golf voortplanting" },
        { en: "Simple distance-decay relationships without magnitude dependence", es: "Relaciones simples de decaimiento por distancia sin dependencia de magnitud", de: "Einfache Entfernungs-Abfall-Beziehungen ohne Magnitudenabhängigkeit", nl: "Eenvoudige afstand-verval relaties zonder magnitude afhankelijkheid" },
        { en: "Site-specific geological assessments only", es: "Solo evaluaciones geológicas específicas del sitio", de: "Nur standortspezifische geologische Bewertungen", nl: "Alleen locatie-specifieke geologische beoordelingen" }
      ],
      correct: 0,
      explanation: {
        en: "Ground Motion Prediction Equations (GMPEs) are empirically-derived relationships that predict ground motion parameters (PGA, PGV, spectral accelerations) as functions of earthquake magnitude, source-to-site distance, source mechanism, and local site conditions. These equations incorporate statistical analysis of large ground motion databases and are fundamental to probabilistic seismic hazard analysis, providing the link between seismic sources and expected ground shaking.",
        es: "Las Ecuaciones de Predicción de Movimiento del Suelo (GMPEs) son relaciones derivadas empíricamente que predicen parámetros de movimiento del suelo (PGA, PGV, aceleraciones espectrales) como funciones de magnitud de terremoto, distancia fuente-a-sitio, mecanismo de fuente, y condiciones locales del sitio. Estas ecuaciones incorporan análisis estadístico de grandes bases de datos de movimiento del suelo y son fundamentales para análisis probabilístico de riesgo sísmico, proporcionando el enlace entre fuentes sísmicas y sacudimiento del suelo esperado.",
        de: "Bodenbewegungsvorhersagegleichungen (GMPEs) sind empirisch abgeleitete Beziehungen, die Bodenbewegungsparameter (PGA, PGV, Spektralbeschleunigungen) als Funktionen von Erdbebenmagnitude, Quelle-zu-Standort-Entfernung, Quellenmechanismus und lokalen Standortbedingungen vorhersagen. Diese Gleichungen beinhalten statistische Analyse großer Bodenbewegungsdatenbanken und sind fundamental für probabilistische seismische Risikoanalyse, da sie die Verbindung zwischen seismischen Quellen und erwarteter Bodenerschütterung herstellen.",
        nl: "Grondbeweging Voorspellings Vergelijkingen (GMPEs) zijn empirisch afgeleide relaties die grondbeweging parameters (PGA, PGV, spectrale versnellingen) voorspellen als functies van aardbevings magnitude, bron-naar-locatie afstand, bron mechanisme, en lokale locatie condities. Deze vergelijkingen incorporeren statistische analyse van grote grondbeweging databases en zijn fundamenteel voor probabilistische seismische risico analyse, wat de link biedt tussen seismische bronnen en verwachte grond schudden."
      }
    },
    {
      question: {
        en: "What is the role of seismic hazard curves in probabilistic seismic hazard assessment?",
        es: "¿Cuál es el papel de curvas de riesgo sísmico en evaluación probabilística de riesgo sísmico?",
        de: "Welche Rolle spielen seismische Gefährdungskurven in der probabilistischen seismischen Risikobewertung?",
        nl: "Wat is de rol van seismische risico curven in probabilistische seismische risico beoordeling?"
      },
      options: [
        { en: "Show annual exceedance probabilities for different ground motion levels, enabling risk-based decision making", es: "Muestran probabilidades anuales de excedencia para diferentes niveles de movimiento del suelo, permitiendo toma de decisiones basada en riesgo", de: "Zeigen jährliche Überschreitungswahrscheinlichkeiten für verschiedene Bodenbewegungsniveaus und ermöglichen risikobasierte Entscheidungsfindung", nl: "Tonen jaarlijkse overschrijdingskansen voor verschillende grondbeweging niveaus, risicogebaseerde besluitvorming mogelijk makend" },
        { en: "Display historical earthquake magnitudes chronologically", es: "Muestran magnitudes históricas de terremotos cronológicamente", de: "Zeigen historische Erdbebenmagnitude chronologisch", nl: "Tonen historische aardbevings magnitudes chronologisch" },
        { en: "Map spatial distribution of earthquake epicenters", es: "Mapean distribución espacial de epicentros de terremotos", de: "Kartieren räumliche Verteilung von Erdbebenepizentren", nl: "Mappen ruimtelijke distributie van aardbevings epicentra" },
        { en: "Calculate seismic wave travel times", es: "Calculan tiempos de viaje de ondas sísmicas", de: "Berechnen seismische Wellenlaufzeiten", nl: "Berekenen seismische golf reistijden" }
      ],
      correct: 0,
      explanation: {
        en: "Seismic hazard curves plot the annual probability of exceeding various ground motion levels at a specific site. These curves integrate all earthquake sources, magnitudes, and distances to provide a comprehensive view of seismic hazard. They enable engineers and policymakers to select appropriate design ground motions for different return periods (e.g., 475 years for 10% exceedance in 50 years) and make informed risk-based decisions for building codes and insurance.",
        es: "Las curvas de riesgo sísmico grafican la probabilidad anual de exceder varios niveles de movimiento del suelo en un sitio específico. Estas curvas integran todas las fuentes de terremotos, magnitudes y distancias para proporcionar una vista integral del riesgo sísmico. Permiten a ingenieros y formuladores de políticas seleccionar movimientos del suelo de diseño apropiados para diferentes períodos de retorno (ej. 475 años para 10% de excedencia en 50 años) y tomar decisiones informadas basadas en riesgo para códigos de construcción y seguros.",
        de: "Seismische Gefährdungskurven stellen die jährliche Wahrscheinlichkeit dar, verschiedene Bodenbewegungsniveaus an einem spezifischen Standort zu überschreiten. Diese Kurven integrieren alle Erdbebenquellen, Magnituden und Entfernungen um eine umfassende Sicht der seismischen Gefährdung zu bieten. Sie ermöglichen Ingenieuren und Politikern, angemessene Entwurfsbodenbewegungen für verschiedene Wiederkehrperioden auszuwählen (z.B. 475 Jahre für 10% Überschreitung in 50 Jahren) und informierte risikobasierte Entscheidungen für Bauvorschriften und Versicherungen zu treffen.",
        nl: "Seismische risico curven plotten de jaarlijkse kans van overschrijden van verschillende grondbeweging niveaus op een specifieke locatie. Deze curven integreren alle aardbevingsbronnen, magnitudes, en afstanden om een uitgebreid beeld van seismisch risico te bieden. Ze stellen ingenieurs en beleidsmakers in staat om geschikte ontwerp grondbewegingen te selecteren voor verschillende terugkeer periodes (bijv. 475 jaar voor 10% overschrijding in 50 jaar) en geïnformeerde risicogebaseerde beslissingen te maken voor bouwcodes en verzekeringen."
      }
    },
    {
      question: {
        en: "What is the significance of the elastic thickness of the lithosphere in regional seismicity patterns?",
        es: "¿Cuál es la importancia del espesor elástico de la litosfera en patrones de sismicidad regional?",
        de: "Was ist die Bedeutung der elastischen Dicke der Lithosphäre in regionalen Seismizitätsmustern?",
        nl: "Wat is de betekenis van de elastische dikte van de lithosfeer in regionale seismiciteit patronen?"
      },
      options: [
        { en: "Controls stress transmission, flexural response to loading, and depth distribution of earthquake activity", es: "Controla transmisión de estrés, respuesta flexural a carga, y distribución de profundidad de actividad sísmica", de: "Kontrolliert Stressübertragung, Biegungsantwort auf Belastung und Tiefenverteilung seismischer Aktivität", nl: "Controleert stress transmissie, buig respons op belasting, en diepte distributie van seismische activiteit" },
        { en: "Only affects surface wave propagation velocities", es: "Solo afecta velocidades de propagación de ondas superficiales", de: "Beeinflusst nur Oberflächenwellen-Ausbreitungsgeschwindigkeiten", nl: "Beïnvloedt alleen oppervlaktegolf voortplanting snelheden" },
        { en: "Determines the chemical composition of magmas", es: "Determina la composición química de magmas", de: "Bestimmt die chemische Zusammensetzung von Magmen", nl: "Bepaalt de chemische samenstelling van magma's" },
        { en: "Controls only the timing of volcanic eruptions", es: "Controla solo el tiempo de erupciones volcánicas", de: "Kontrolliert nur das Timing vulkanischer Eruptionen", nl: "Controleert alleen de timing van vulkanische erupties" }
      ],
      correct: 0,
      explanation: {
        en: "The elastic thickness of the lithosphere represents the mechanically strong layer that can support long-term stresses and flexural loads. It controls how stresses are transmitted across regions, influences the flexural response to surface and subsurface loading (mountains, sediments, ice), and affects the depth distribution of seismicity by defining the brittle-ductile transition depth where most crustal earthquakes occur.",
        es: "El espesor elástico de la litosfera representa la capa mecánicamente fuerte que puede soportar estreses a largo plazo y cargas flexurales. Controla cómo se transmiten los estreses a través de regiones, influye en la respuesta flexural a carga superficial y subsuperficial (montañas, sedimentos, hielo), y afecta la distribución de profundidad de sismicidad definiendo la profundidad de transición frágil-dúctil donde ocurren la mayoría de terremotos crustales.",
        de: "Die elastische Dicke der Lithosphäre repräsentiert die mechanisch starke Schicht, die langfristige Spannungen und Biegungslasten unterstützen kann. Sie kontrolliert, wie Spannungen über Regionen übertragen werden, beeinflusst die Biegungsantwort auf Ober- und Unterflächenbelastung (Berge, Sedimente, Eis) und beeinflusst die Tiefenverteilung der Seismizität durch Definition der spröd-duktilen Übergangstiefe, wo die meisten Krustenerdbeben auftreten.",
        nl: "De elastische dikte van de lithosfeer vertegenwoordigt de mechanisch sterke laag die lange-termijn spanningen en buigbelastingen kan ondersteunen. Het controleert hoe spanningen over regio's worden overgedragen, beïnvloedt de buig respons op oppervlakte en onderoppervlakte belasting (bergen, sedimenten, ijs), en beïnvloedt de diepte distributie van seismiciteit door de brosse-ductiele overgangsdiepte te definiëren waar de meeste crustale aardbevingen voorkomen."
      }
    },
    {
      question: {
        en: "What is the concept of seismic risk assessment versus seismic hazard assessment?",
        es: "¿Cuál es el concepto de evaluación de riesgo sísmico versus evaluación de peligro sísmico?",
        de: "Was ist das Konzept der seismischen Risikobewertung versus seismische Gefährdungsbeurteilung?",
        nl: "Wat is het concept van seismische risico beoordeling versus seismische gevaar beoordeling?"
      },
      options: [
        { en: "Hazard assesses ground shaking potential; risk includes vulnerability and exposure to estimate actual losses", es: "Peligro evalúa potencial de sacudimiento del suelo; riesgo incluye vulnerabilidad y exposición para estimar pérdidas reales", de: "Gefährdung bewertet Bodenerschütterungspotenzial; Risiko schließt Verwundbarkeit und Exposition ein, um tatsächliche Verluste zu schätzen", nl: "Gevaar beoordeelt grond schuddings potentieel; risico omvat kwetsbaarheid en blootstelling om werkelijke verliezen te schatten" },
        { en: "Both terms are identical and interchangeable", es: "Ambos términos son idénticos e intercambiables", de: "Beide Begriffe sind identisch und austauschbar", nl: "Beide termen zijn identiek en uitwisselbaar" },
        { en: "Risk only considers historical earthquakes while hazard considers future ones", es: "Riesgo solo considera terremotos históricos mientras peligro considera futuros", de: "Risiko betrachtet nur historische Erdbeben, während Gefährdung zukünftige betrachtet", nl: "Risico beschouwt alleen historische aardbevingen terwijl gevaar toekomstige beschouwt" },
        { en: "Hazard is qualitative while risk is always quantitative", es: "Peligro es cualitativo mientras riesgo es siempre cuantitativo", de: "Gefährdung ist qualitativ, während Risiko immer quantitativ ist", nl: "Gevaar is kwalitatief terwijl risico altijd kwantitatief is" }
      ],
      correct: 0,
      explanation: {
        en: "Seismic hazard assessment quantifies the probability of ground shaking levels at a site from all earthquake sources, focusing on the natural phenomenon. Seismic risk assessment goes further by incorporating vulnerability (susceptibility of structures to damage) and exposure (value of assets at risk) to estimate potential economic losses, casualties, and societal impacts. Risk = Hazard × Vulnerability × Exposure.",
        es: "La evaluación de peligro sísmico cuantifica la probabilidad de niveles de sacudimiento del suelo en un sitio de todas las fuentes de terremotos, enfocándose en el fenómeno natural. La evaluación de riesgo sísmico va más allá incorporando vulnerabilidad (susceptibilidad de estructuras al daño) y exposición (valor de activos en riesgo) para estimar pérdidas económicas potenciales, víctimas e impactos sociales. Riesgo = Peligro × Vulnerabilidad × Exposición.",
        de: "Seismische Gefährdungsbeurteilung quantifiziert die Wahrscheinlichkeit von Bodenerschütterungsniveaus an einem Standort von allen Erdbebenquellen, fokussiert auf das natürliche Phänomen. Seismische Risikobewertung geht weiter durch Einbeziehung von Verwundbarkeit (Anfälligkeit von Strukturen für Schäden) und Exposition (Wert von gefährdeten Vermögenswerten) um potenzielle wirtschaftliche Verluste, Opfer und gesellschaftliche Auswirkungen zu schätzen. Risiko = Gefährdung × Verwundbarkeit × Exposition.",
        nl: "Seismische gevaar beoordeling kwantificeert de kans van grond schuddings niveaus op een locatie van alle aardbevingsbronnen, focussend op het natuurlijke fenomeen. Seismische risico beoordeling gaat verder door kwetsbaarheid (gevoeligheid van structuren voor schade) en blootstelling (waarde van bedreigde activa) te incorporeren om potentiële economische verliezen, slachtoffers, en maatschappelijke impacts te schatten. Risiko = Gevaar × Kwetsbaarheid × Blootstelling."
      }
    },
    {
      question: {
        en: "What is the role of stress shadows in earthquake triggering and fault interaction?",
        es: "¿Cuál es el papel de las sombras de estrés en activación de terremotos e interacción de fallas?",
        de: "Welche Rolle spielen Stressschatten bei Erdbebentriggerung und Verwerfungsinteraktion?",
        nl: "Wat is de rol van stress schaduwen in aardbevings activering en breuk interactie?"
      },
      options: [
        { en: "Static stress changes from earthquakes create regions of increased and decreased failure probability on surrounding faults", es: "Cambios de estrés estático de terremotos crean regiones de probabilidad de falla aumentada y disminuida en fallas circundantes", de: "Statische Stressänderungen von Erdbeben erzeugen Regionen erhöhter und verringerter Ausfallwahrscheinlichkeit an umgebenden Verwerfungen", nl: "Statische stress veranderingen van aardbevingen creëren regio's van verhoogde en verminderde faal kansen op omliggende breuken" },
        { en: "Stress shadows only affect surface wave propagation patterns", es: "Sombras de estrés solo afectan patrones de propagación de ondas superficiales", de: "Stressschatten beeinflussen nur Oberflächenwellen-Ausbreitungsmuster", nl: "Stress schaduwen beïnvloeden alleen oppervlakte golf propagatie patronen" },
        { en: "They represent areas of zero seismic activity permanently", es: "Representan áreas de actividad sísmica cero permanentemente", de: "Sie repräsentieren Bereiche dauerhaft null seismischer Aktivität", nl: "Ze vertegenwoordigen gebieden van nul seismische activiteit permanent" },
        { en: "Stress shadows are artifacts of seismograph instrument response", es: "Sombras de estrés son artefactos de respuesta de instrumento sismógrafo", de: "Stressschatten sind Artefakte der Seismographinstrumentenantwort", nl: "Stress schaduwen zijn artefacten van seismograaf instrument respons" }
      ],
      correct: 0,
      explanation: {
        en: "Stress shadows result from static stress changes induced by earthquake ruptures, following Coulomb failure criterion. Positive stress changes (loading) increase earthquake probability while negative changes (unloading) create stress shadows with decreased probability. This concept explains aftershock patterns, earthquake triggering sequences, and fault interaction over time scales from minutes to centuries.",
        es: "Las sombras de estrés resultan de cambios de estrés estático inducidos por rupturas de terremoto, siguiendo criterio de falla de Coulomb. Cambios de estrés positivos (carga) aumentan probabilidad de terremoto mientras cambios negativos (descarga) crean sombras de estrés con probabilidad disminuida. Este concepto explica patrones de réplicas, secuencias de activación de terremotos, e interacción de fallas sobre escalas temporales de minutos a siglos.",
        de: "Stressschatten resultieren aus statischen Stressänderungen induziert durch Erdbebenrupturen, folgend Coulomb-Ausfallkriterium. Positive Stressänderungen (Belastung) erhöhen Erdbebenwahrscheinlichkeit während negative Änderungen (Entlastung) Stressschatten mit verringerter Wahrscheinlichkeit erzeugen. Dieses Konzept erklärt Nachbebenmuster, Erdbebentriggerungssequenzen und Verwerfungsinteraktion über Zeitskalen von Minuten bis Jahrhunderten.",
        nl: "Stress schaduwen resulteren uit statische stress veranderingen geïnduceerd door aardbevings rupturen, volgend Coulomb faal criterium. Positieve stress veranderingen (belasting) verhogen aardbevings kans terwijl negatieve veranderingen (ontlasting) stress schaduwen creëren met verminderde kans. Dit concept verklaart naschok patronen, aardbevings activerings sequenties, en breuk interactie over tijdschalen van minuten tot eeuwen."
      }
    },
    {
      question: {
        en: "What is the significance of earthquake swarm migration patterns in understanding fault systems?",
        es: "¿Cuál es la importancia de patrones de migración de enjambres de terremotos en entendimiento de sistemas de falla?",
        de: "Was ist die Bedeutung von Erdbebenschwarm-Migrationsmuster im Verständnis von Verwerfungssystemen?",
        nl: "Wat is de betekenis van aardbevings zwerm migratie patronen in begrip van breuk systemen?"
      },
      options: [
        { en: "Migration reveals fluid diffusion, stress transfer, and connecting fault network geometry at depth", es: "Migración revela difusión de fluidos, transferencia de estrés, y geometría de red de fallas conectoras en profundidad", de: "Migration enthüllt Flüssigkeitsdiffusion, Stresstransfer und verbindende Verwerfungsnetzgeometrie in der Tiefe", nl: "Migratie onthult vloeistof diffusie, stress overdracht, en verbindende breuk netwerk geometrie op diepte" },
        { en: "Migration patterns are random and provide no structural information", es: "Patrones de migración son aleatorios y no proporcionan información estructural", de: "Migrationsmuster sind zufällig und liefern keine strukturelle Information", nl: "Migratie patronen zijn willekeurig en verschaffen geen structurele informatie" },
        { en: "All earthquake swarms migrate at the same velocity", es: "Todos los enjambres de terremotos migran a la misma velocidad", de: "Alle Erdbebenschwärme migrieren mit derselben Geschwindigkeit", nl: "Alle aardbevings zwermen migreren met dezelfde snelheid" },
        { en: "Migration only occurs in volcanic regions", es: "Migración solo ocurre en regiones volcánicas", de: "Migration tritt nur in vulkanischen Regionen auf", nl: "Migratie treedt alleen op in vulkanische regio's" }
      ],
      correct: 0,
      explanation: {
        en: "Earthquake swarm migration patterns provide crucial insights into subsurface fault architecture, fluid pressure diffusion, and stress transfer mechanisms. Migration velocities (~1-100 m/day) suggest hydraulic diffusion processes, while patterns reveal hidden fault connections, barrier locations, and permeability structures. This information is vital for understanding induced seismicity, geothermal systems, and natural fault networks.",
        es: "Patrones de migración de enjambres de terremotos proporcionan perspectivas cruciales sobre arquitectura de falla subsuperficial, difusión de presión de fluidos, y mecanismos de transferencia de estrés. Velocidades de migración (~1-100 m/día) sugieren procesos de difusión hidráulica, mientras patrones revelan conexiones de falla ocultas, ubicaciones de barrera, y estructuras de permeabilidad. Esta información es vital para entender sismicidad inducida, sistemas geotérmicos, y redes de falla natural.",
        de: "Erdbebenschwarm-Migrationsmuster liefern entscheidende Einblicke in unterirdische Verwerfungsarchitektur, Flüssigkeitsdruckdiffusion und Stresstransfermechanismen. Migrationsgeschwindigkeiten (~1-100 m/Tag) deuten auf hydraulische Diffusionsprozesse hin, während Muster verborgene Verwerfungsverbindungen, Barrierenstandorte und Permeabilitätsstrukturen enthüllen. Diese Information ist vital für das Verständnis induzierter Seismizität, geothermaler Systeme und natürlicher Verwerfungsnetzwerke.",
        nl: "Aardbevings zwerm migratie patronen verschaffen cruciale inzichten in ondergrondse breuk architectuur, vloeistof druk diffusie, en stress overdracht mechanismen. Migratie snelheden (~1-100 m/dag) suggereren hydraulische diffusie processen, terwijl patronen verborgen breuk verbindingen, barrière locaties, en permeabiliteit structuren onthullen. Deze informatie is vitaal voor begrip van geïnduceerde seismiciteit, geothermische systemen, en natuurlijke breuk netwerken."
      }
    }
  ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mind-bender/seismology', level3);
  }
})();