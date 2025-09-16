(function() {
const level4 = {
  name: { en: 'Advanced Earthquake Physics', es: 'Física Avanzada de Terremotos', de: 'Fortgeschrittene Erdbebenphysik', nl: 'Geavanceerde Aardbeving Fysica' },
  questions: [
    {
      question: {
        en: "What is the typical scaling relationship between seismic moment (M₀) and fault rupture area (A) for strike-slip earthquakes?",
        es: "¿Cuál es la relación de escala típica entre el momento sísmico (M₀) y el área de ruptura de falla (A) para terremotos de rumbo?",
        de: "Wie ist das typische Skalierungsverhältnis zwischen seismischem Moment (M₀) und Verwerfungsbruchfläche (A) für Blattverschiebungsbeben?",
        nl: "Wat is de typische schaalrelatie tussen seismisch moment (M₀) en breukrupture gebied (A) voor strike-slip aardbevingen?"
      },
      options: [
        { en: "M₀ ∝ A", es: "M₀ ∝ A", de: "M₀ ∝ A", nl: "M₀ ∝ A" },
        { en: "M₀ ∝ A^(3/2)", es: "M₀ ∝ A^(3/2)", de: "M₀ ∝ A^(3/2)", nl: "M₀ ∝ A^(3/2)" },
        { en: "M₀ ∝ A^2", es: "M₀ ∝ A^2", de: "M₀ ∝ A^2", nl: "M₀ ∝ A^2" },
        { en: "M₀ ∝ A^(1/3)", es: "M₀ ∝ A^(1/3)", de: "M₀ ∝ A^(1/3)", nl: "M₀ ∝ A^(1/3)" }
      ],
      correct: 1,
      explanation: {
        en: "The empirical scaling relationship for strike-slip earthquakes follows M₀ ∝ A^(3/2), indicating that seismic moment increases faster than proportional to rupture area. This relationship reflects the coupling between fault dimensions and stress drop in earthquake scaling laws.",
        es: "La relación de escala empírica para terremotos de rumbo sigue M₀ ∝ A^(3/2), indicando que el momento sísmico aumenta más rápido que proporcional al área de ruptura. Esta relación refleja el acoplamiento entre las dimensiones de la falla y la caída de esfuerzo en las leyes de escala de terremotos.",
        de: "Das empirische Skalierungsverhältnis für Blattverschiebungsbeben folgt M₀ ∝ A^(3/2), was zeigt, dass das seismische Moment schneller als proportional zur Bruchfläche zunimmt. Diese Beziehung spiegelt die Kopplung zwischen Verwerfungsdimensionen und Spannungsabfall in Erdbeben-Skalierungsgesetzen wider.",
        nl: "De empirische schaalrelatie voor strike-slip aardbevingen volgt M₀ ∝ A^(3/2), wat aangeeft dat seismisch moment sneller toeneemt dan proportioneel met rupture gebied. Deze relatie weerspiegelt de koppeling tussen breukdimensies en spanningsafname in aardbeving schaalingswetten."
      }
    },
    {
      question: {
        en: "What seismic imaging technique uses converted phases to map discontinuities in Earth's interior?",
        es: "¿Qué técnica de imagen sísmica utiliza fases convertidas para mapear discontinuidades en el interior de la Tierra?",
        de: "Welche seismische Bildgebungstechnik verwendet umgewandelte Phasen zur Kartierung von Diskontinuitäten im Erdinneren?",
        nl: "Welke seismische beeldvormingstechniek gebruikt geconverteerde fasen om discontinuïteiten in het aardinnere in kaart te brengen?"
      },
      options: [
        { en: "Receiver function analysis", es: "Análisis de función de receptor", de: "Empfängerfunktionsanalyse", nl: "Ontvanger functie analyse" },
        { en: "Surface wave tomography", es: "Tomografía de ondas superficiales", de: "Oberflächenwellen-Tomographie", nl: "Oppervlaktegolf tomografie" },
        { en: "Body wave travel time inversion", es: "Inversión de tiempo de viaje de ondas internas", de: "Raumwellen-Laufzeitinversion", nl: "Ruimtegolf reistijd inversie" },
        { en: "Ambient noise correlation", es: "Correlación de ruido ambiental", de: "Umgebungsrauschkorrelation", nl: "Omgevingsruis correlatie" }
      ],
      correct: 0,
      explanation: {
        en: "Receiver function analysis uses P-to-S converted phases generated at velocity discontinuities beneath seismic stations to image subsurface structure. The technique isolates converted phases from teleseismic P-waves, providing high-resolution images of crustal and mantle discontinuities.",
        es: "El análisis de función de receptor utiliza fases convertidas P-a-S generadas en discontinuidades de velocidad bajo estaciones sísmicas para generar imágenes de la estructura del subsuelo. La técnica aísla fases convertidas de ondas P telesísmicas, proporcionando imágenes de alta resolución de discontinuidades de la corteza y el manto.",
        de: "Die Empfängerfunktionsanalyse verwendet P-zu-S umgewandelte Phasen, die an Geschwindigkeitsdiskontinuitäten unter seismischen Stationen erzeugt werden, um unterirdische Strukturen abzubilden. Die Technik isoliert umgewandelte Phasen aus teleseismischen P-Wellen und liefert hochauflösende Bilder von Krusten- und Manteldiskontinuitäten.",
        nl: "Ontvanger functie analyse gebruikt P-naar-S geconverteerde fasen gegenereerd bij snelheidsdiscontinuïteiten onder seismische stations om ondergrondse structuur te beelden. De techniek isoleert geconverteerde fasen van teleseismische P-golven, wat hoge-resolutie beelden van korst- en manteldiscontinuïteiten biedt."
      }
    },
    {
      question: {
        en: "What is the physical mechanism behind the splitting of seismic shear waves in anisotropic media?",
        es: "¿Cuál es el mecanismo físico detrás de la división de ondas de corte sísmicas en medios anisotrópicos?",
        de: "Was ist der physikalische Mechanismus hinter der Aufspaltung seismischer Scherwellen in anisotropen Medien?",
        nl: "Wat is het fysieke mechanisme achter de splitsing van seismische schuifgolven in anisotrope media?"
      },
      options: [
        { en: "Preferred orientation of crystals or fractures", es: "Orientación preferida de cristales o fracturas", de: "Bevorzugte Orientierung von Kristallen oder Brüchen", nl: "Geprefereerde oriëntatie van kristallen of breuken" },
        { en: "Density variations in the medium", es: "Variaciones de densidad en el medio", de: "Dichtevariationen im Medium", nl: "Dichtheidsvariaties in het medium" },
        { en: "Temperature gradients", es: "Gradientes de temperatura", de: "Temperaturgradienten", nl: "Temperatuurgradiënten" },
        { en: "Pressure-dependent velocity changes", es: "Cambios de velocidad dependientes de presión", de: "Druckabhängige Geschwindigkeitsänderungen", nl: "Drukafhankelijke snelheidsveranderingen" }
      ],
      correct: 0,
      explanation: {
        en: "Shear wave splitting occurs when S-waves propagate through anisotropic media with preferred orientation of crystals (like olivine in the mantle) or aligned fractures. The wave splits into fast and slow components polarized perpendicular to each other, with different velocities depending on the propagation direction relative to the anisotropic fabric.",
        es: "La división de ondas de corte ocurre cuando las ondas S se propagan a través de medios anisotrópicos con orientación preferida de cristales (como olivino en el manto) o fracturas alineadas. La onda se divide en componentes rápidos y lentos polarizados perpendiculares entre sí, con diferentes velocidades dependiendo de la dirección de propagación relativa al tejido anisotrópico.",
        de: "Scherwellenaufspaltung tritt auf, wenn S-Wellen durch anisotrope Medien mit bevorzugter Orientierung von Kristallen (wie Olivin im Mantel) oder ausgerichteten Brüchen propagieren. Die Welle spaltet sich in schnelle und langsame Komponenten auf, die senkrecht zueinander polarisiert sind, mit unterschiedlichen Geschwindigkeiten je nach Ausbreitungsrichtung relativ zum anisotropen Gefüge.",
        nl: "Schuifgolf splitsing treedt op wanneer S-golven voortplanten door anisotrope media met geprefereerde oriëntatie van kristallen (zoals olivijn in de mantel) of uitgelijnde breuken. De golf splitst in snelle en langzame componenten gepolariseerd loodrecht op elkaar, met verschillende snelheden afhankelijk van voortplantingsrichting relatief tot het anisotrope weefsel."
      }
    },
    {
      question: {
        en: "What determines the dominant frequency of seismic signals in earthquake strong ground motion recordings?",
        es: "¿Qué determina la frecuencia dominante de las señales sísmicas en registros de movimiento fuerte del suelo de terremotos?",
        de: "Was bestimmt die dominante Frequenz seismischer Signale in Aufzeichnungen starker Bodenbewegungen von Erdbeben?",
        nl: "Wat bepaalt de dominante frequentie van seismische signalen in sterke grondbeweging opnames van aardbevingen?"
      },
      options: [
        { en: "Source corner frequency and site response", es: "Frecuencia de esquina de fuente y respuesta del sitio", de: "Quell-Eckfrequenz und Standortantwort", nl: "Bron hoekfrequentie en site respons" },
        { en: "Epicentral distance only", es: "Solo distancia epicentral", de: "Nur Epizentralentfernung", nl: "Alleen epicentrale afstand" },
        { en: "Earthquake magnitude only", es: "Solo magnitud del terremoto", de: "Nur Erdbebenmagnitude", nl: "Alleen aardbevingsmagnitude" },
        { en: "Path attenuation effects", es: "Efectos de atenuación de trayectoria", de: "Pfaddämpfungseffekte", nl: "Pad dempingseffecten" }
      ],
      correct: 0,
      explanation: {
        en: "The dominant frequency in strong ground motion is controlled by both the source corner frequency (related to rupture dimensions and stress drop) and local site response (amplification effects due to shallow geology). Large earthquakes have lower corner frequencies, while soft sedimentary sites can amplify certain frequency bands, shifting the dominant frequency of recorded ground motion.",
        es: "La frecuencia dominante en movimiento fuerte del suelo es controlada tanto por la frecuencia de esquina de la fuente (relacionada con las dimensiones de ruptura y caída de esfuerzo) como por la respuesta local del sitio (efectos de amplificación debido a geología superficial). Los terremotos grandes tienen frecuencias de esquina más bajas, mientras que sitios sedimentarios blandos pueden amplificar ciertas bandas de frecuencia, desplazando la frecuencia dominante del movimiento del suelo registrado.",
        de: "Die dominante Frequenz in starker Bodenbewegung wird sowohl durch die Quell-Eckfrequenz (bezogen auf Bruchdimensionen und Spannungsabfall) als auch durch lokale Standortantwort (Verstärkungseffekte aufgrund oberflächlicher Geologie) kontrolliert. Große Erdbeben haben niedrigere Eckfrequenzen, während weiche sedimentäre Standorte bestimmte Frequenzbänder verstärken können und die dominante Frequenz der aufgezeichneten Bodenbewegung verschieben.",
        nl: "De dominante frequentie in sterke grondbeweging wordt gecontroleerd door zowel de bron hoekfrequentie (gerelateerd aan breukdimensies en spanningsafname) als lokale site respons (versterkingseffecten door ondiepe geologie). Grote aardbevingen hebben lagere hoekfrequenties, terwijl zachte sedimentaire sites bepaalde frequentiebanden kunnen versterken, wat de dominante frequentie van opgenomen grondbeweging verschuift."
      }
    },
    {
      question: {
        en: "What seismic parameter characterizes the efficiency of energy radiation from an earthquake source compared to a point dislocation?",
        es: "¿Qué parámetro sísmico caracteriza la eficiencia de radiación de energía de una fuente de terremoto comparada con una dislocación puntual?",
        de: "Welcher seismische Parameter charakterisiert die Effizienz der Energieabstrahlung von einer Erdbebenquelle im Vergleich zu einer Punktdislokation?",
        nl: "Welke seismische parameter kenmerkt de efficiëntie van energiestraling van een aardbevingsbron vergeleken met een puntdislocatie?"
      },
      options: [
        { en: "Directivity function", es: "Función de directividad", de: "Richtungsfunktion", nl: "Directiviteitsfunctie" },
        { en: "Source complexity factor", es: "Factor de complejidad de fuente", de: "Quellkomplexitätsfaktor", nl: "Bron complexiteitsfactor" },
        { en: "Rupture coherence parameter", es: "Parámetro de coherencia de ruptura", de: "Bruchkohärenzparameter", nl: "Breuk coherentieparameter" },
        { en: "Finite-source correction factor", es: "Factor de corrección de fuente finita", de: "Endlich-Quellen-Korrekturfaktor", nl: "Eindige-bron correctiefactor" }
      ],
      correct: 0,
      explanation: {
        en: "The directivity function characterizes how the finite extent and propagation direction of earthquake rupture affects seismic radiation efficiency compared to a theoretical point source. Forward directivity enhances radiation in the rupture propagation direction, while backward directivity reduces it, creating systematic variations in observed ground motion amplitudes.",
        es: "La función de directividad caracteriza cómo la extensión finita y dirección de propagación de la ruptura de terremoto afecta la eficiencia de radiación sísmica comparada con una fuente puntual teórica. La directividad hacia adelante mejora la radiación en la dirección de propagación de ruptura, mientras que la directividad hacia atrás la reduce, creando variaciones sistemáticas en las amplitudes de movimiento del suelo observadas.",
        de: "Die Richtungsfunktion charakterisiert, wie die endliche Ausdehnung und Ausbreitungsrichtung von Erdbebenbrüchen die seismische Strahlungseffizienz im Vergleich zu einer theoretischen Punktquelle beeinflusst. Vorwärtsrichtung verstärkt die Strahlung in Bruchausbreitungsrichtung, während Rückwärtsrichtung sie reduziert und systematische Variationen in beobachteten Bodenbewegungsamplituden erzeugt.",
        nl: "De directiviteitsfunctie kenmerkt hoe de eindige omvang en voortplantingsrichting van aardbevingsbreuk de seismische stralingsefficiëntie beïnvloedt vergeleken met een theoretische puntbron. Voorwaartse directiviteit versterkt straling in de breukvoortplantingsrichting, terwijl achterwaartse directiviteit het vermindert, wat systematische variaties in waargenomen grondbeweging amplitudes creëert."
      }
    },
    {
      question: {
        en: "What mathematical transformation is commonly used to analyze the frequency content of non-stationary seismic signals?",
        es: "¿Qué transformación matemática se utiliza comúnmente para analizar el contenido de frecuencia de señales sísmicas no estacionarias?",
        de: "Welche mathematische Transformation wird häufig verwendet, um den Frequenzinhalt nicht-stationärer seismischer Signale zu analysieren?",
        nl: "Welke wiskundige transformatie wordt veel gebruikt om de frequentie-inhoud van niet-stationaire seismische signalen te analyseren?"
      },
      options: [
        { en: "Fourier Transform", es: "Transformada de Fourier", de: "Fourier-Transformation", nl: "Fourier Transformatie" },
        { en: "Wavelet Transform", es: "Transformada Wavelet", de: "Wavelet-Transformation", nl: "Wavelet Transformatie" },
        { en: "Hilbert Transform", es: "Transformada de Hilbert", de: "Hilbert-Transformation", nl: "Hilbert Transformatie" },
        { en: "Laplace Transform", es: "Transformada de Laplace", de: "Laplace-Transformation", nl: "Laplace Transformatie" }
      ],
      correct: 1,
      explanation: {
        en: "The Wavelet Transform is ideal for analyzing non-stationary seismic signals because it provides simultaneous time-frequency localization. Unlike the Fourier Transform which assumes stationarity, wavelets can capture how frequency content changes over time, making them perfect for analyzing earthquake signals with evolving spectral characteristics.",
        es: "La Transformada Wavelet es ideal para analizar señales sísmicas no estacionarias porque proporciona localización simultánea tiempo-frecuencia. A diferencia de la Transformada de Fourier que asume estacionaridad, las wavelets pueden capturar cómo el contenido de frecuencia cambia con el tiempo, haciéndolas perfectas para analizar señales de terremoto con características espectrales evolutivas.",
        de: "Die Wavelet-Transformation ist ideal für die Analyse nicht-stationärer seismischer Signale, da sie gleichzeitige Zeit-Frequenz-Lokalisierung bietet. Im Gegensatz zur Fourier-Transformation, die Stationarität annimmt, können Wavelets erfassen, wie sich der Frequenzinhalt über die Zeit ändert, was sie perfekt für die Analyse von Erdbebensignalen mit sich entwickelnden Spektralcharakteristika macht.",
        nl: "De Wavelet Transformatie is ideaal voor het analyseren van niet-stationaire seismische signalen omdat het simultane tijd-frequentie lokalisatie biedt. In tegenstelling tot de Fourier Transformatie die stationariteit aanneemt, kunnen wavelets vastleggen hoe frequentie-inhoud verandert over tijd, wat ze perfect maakt voor het analyseren van aardbevingssignalen met evoluerende spectrale kenmerken."
      }
    },
    {
      question: {
        en: "What controls the amplitude ratio of Love waves to Rayleigh waves in seismic recordings?",
        es: "¿Qué controla la relación de amplitud de ondas Love a ondas Rayleigh en registros sísmicos?",
        de: "Was kontrolliert das Amplitudenverhältnis von Love-Wellen zu Rayleigh-Wellen in seismischen Aufzeichnungen?",
        nl: "Wat controleert de amplitudeverhouding van Love-golven tot Rayleigh-golven in seismische opnames?"
      },
      options: [
        { en: "Source depth and mechanism", es: "Profundidad y mecanismo de fuente", de: "Quelltiefe und -mechanismus", nl: "Bron diepte en mechanisme" },
        { en: "Epicentral distance only", es: "Solo distancia epicentral", de: "Nur Epizentralentfernung", nl: "Alleen epicentrale afstand" },
        { en: "Frequency content only", es: "Solo contenido de frecuencia", de: "Nur Frequenzinhalt", nl: "Alleen frequentie-inhoud" },
        { en: "Recording instrument type", es: "Tipo de instrumento de registro", de: "Typ des Aufzeichnungsinstruments", nl: "Type opname-instrument" }
      ],
      correct: 0,
      explanation: {
        en: "The Love/Rayleigh wave amplitude ratio is primarily controlled by earthquake source depth and focal mechanism. Shallow sources generate stronger surface waves, while the radiation pattern depends on fault geometry - strike-slip faults preferentially excite Love waves, while dip-slip faults generate stronger Rayleigh waves.",
        es: "La relación de amplitud de ondas Love/Rayleigh es controlada principalmente por la profundidad de la fuente del terremoto y el mecanismo focal. Las fuentes superficiales generan ondas superficiales más fuertes, mientras que el patrón de radiación depende de la geometría de la falla - las fallas de rumbo excitan preferencialmente ondas Love, mientras que las fallas de buzamiento generan ondas Rayleigh más fuertes.",
        de: "Das Love/Rayleigh-Wellen-Amplitudenverhältnis wird hauptsächlich durch Erdbebenquelltiefe und Fokalmechanismus kontrolliert. Oberflächennahe Quellen erzeugen stärkere Oberflächenwellen, während das Strahlungsmuster von der Verwerfungsgeometrie abhängt - Blattverschiebungen erregen bevorzugt Love-Wellen, während Abschiebungen stärkere Rayleigh-Wellen erzeugen.",
        nl: "De Love/Rayleigh golf amplitudeverhouding wordt primair gecontroleerd door aardbevingsbron diepte en focaal mechanisme. Ondiepe bronnen genereren sterkere oppervlaktegolven, terwijl het stralingspatroon afhangt van breukgeometrie - strike-slip breuken wekken bij voorkeur Love-golven op, terwijl dip-slip breuken sterkere Rayleigh-golven genereren."
      }
    },
    {
      question: {
        en: "What is the critical parameter that determines whether an earthquake will generate a tsunami?",
        es: "¿Cuál es el parámetro crítico que determina si un terremoto generará un tsunami?",
        de: "Was ist der kritische Parameter, der bestimmt, ob ein Erdbeben einen Tsunami erzeugt?",
        nl: "Wat is de kritieke parameter die bepaalt of een aardbeving een tsunami zal genereren?"
      },
      options: [
        { en: "Vertical seafloor displacement", es: "Desplazamiento vertical del fondo marino", de: "Vertikale Meeresbodenverschiebung", nl: "Verticale zeebodem verplaatsing" },
        { en: "Earthquake magnitude only", es: "Solo magnitud del terremoto", de: "Nur Erdbebenmagnitude", nl: "Alleen aardbevingsmagnitude" },
        { en: "Epicentral depth only", es: "Solo profundidad epicentral", de: "Nur Epizentraltiefe", nl: "Alleen epicentrale diepte" },
        { en: "Rupture velocity", es: "Velocidad de ruptura", de: "Bruchgeschwindigkeit", nl: "Breuksnelheid" }
      ],
      correct: 0,
      explanation: {
        en: "Vertical seafloor displacement is the critical parameter for tsunami generation. Large thrust earthquakes that cause significant vertical motion of the ocean floor displace large volumes of water, generating tsunami waves. The amount of displacement, affected by magnitude, fault geometry, and slip distribution, determines tsunami potential more than magnitude alone.",
        es: "El desplazamiento vertical del fondo marino es el parámetro crítico para la generación de tsunami. Los grandes terremotos de cabalgamiento que causan movimiento vertical significativo del fondo oceánico desplazan grandes volúmenes de agua, generando ondas de tsunami. La cantidad de desplazamiento, afectada por magnitud, geometría de falla y distribución de deslizamiento, determina el potencial de tsunami más que solo la magnitud.",
        de: "Vertikale Meeresbodenverschiebung ist der kritische Parameter für Tsunami-Erzeugung. Große Überschiebungsbeben, die signifikante vertikale Bewegung des Ozeanbodens verursachen, verdrängen große Wasservolumen und erzeugen Tsunami-Wellen. Das Ausmaß der Verschiebung, beeinflusst durch Magnitude, Verwerfungsgeometrie und Slip-Verteilung, bestimmt das Tsunami-Potenzial mehr als die Magnitude allein.",
        nl: "Verticale zeebodem verplaatsing is de kritieke parameter voor tsunami generatie. Grote stuwkracht aardbevingen die significante verticale beweging van de oceaanbodem veroorzaken verplaatsen grote watervolumes, wat tsunami golven genereert. De hoeveelheid verplaatsing, beïnvloed door magnitude, breukgeometrie en slip distributie, bepaalt tsunami potentieel meer dan alleen magnitude."
      }
    },
    {
      question: {
        en: "What seismic phase is used to constrain earthquake focal depth in standard location algorithms?",
        es: "¿Qué fase sísmica se utiliza para restringir la profundidad focal del terremoto en algoritmos de ubicación estándar?",
        de: "Welche seismische Phase wird verwendet, um die Erdbeben-Herdtiefe in Standard-Lokalisierungsalgorithmen zu bestimmen?",
        nl: "Welke seismische fase wordt gebruikt om aardbevings focale diepte te beperken in standaard locatie-algoritmen?"
      },
      options: [
        { en: "pP phase (P-wave reflected from surface)", es: "Fase pP (onda P reflejada desde la superficie)", de: "pP-Phase (von der Oberfläche reflektierte P-Welle)", nl: "pP fase (P-golf gereflecteerd van oppervlak)" },
        { en: "Surface waves only", es: "Solo ondas superficiales", de: "Nur Oberflächenwellen", nl: "Alleen oppervlaktegolven" },
        { en: "S-P arrival time difference", es: "Diferencia de tiempo de llegada S-P", de: "S-P Ankunftszeitunterschied", nl: "S-P aankomsttijdverschil" },
        { en: "Converted phases only", es: "Solo fases convertidas", de: "Nur umgewandelte Phasen", nl: "Alleen geconverteerde fasen" }
      ],
      correct: 0,
      explanation: {
        en: "The pP phase (P-wave that travels upward from the source, reflects off the Earth's surface, then travels down to the receiver) is crucial for focal depth determination. The time difference between direct P and pP phases is directly related to source depth, providing the primary constraint for depth estimation in earthquake location algorithms.",
        es: "La fase pP (onda P que viaja hacia arriba desde la fuente, se refleja en la superficie de la Tierra, luego viaja hacia abajo al receptor) es crucial para la determinación de profundidad focal. La diferencia de tiempo entre las fases P directa y pP está directamente relacionada con la profundidad de la fuente, proporcionando la restricción primaria para la estimación de profundidad en algoritmos de ubicación de terremotos.",
        de: "Die pP-Phase (P-Welle, die von der Quelle nach oben wandert, von der Erdoberfläche reflektiert wird und dann nach unten zum Empfänger wandert) ist entscheidend für die Herdtiefenbestimmung. Die Zeitdifferenz zwischen direkter P- und pP-Phase ist direkt mit der Quelltiefe verbunden und liefert die primäre Beschränkung für die Tiefenschätzung in Erdbeben-Lokalisierungsalgorithmen.",
        nl: "De pP fase (P-golf die omhoog reist van de bron, reflecteert van het aardoppervlak, dan naar beneden reist naar de ontvanger) is cruciaal voor focale diepte bepaling. Het tijdverschil tussen directe P en pP fasen is direct gerelateerd aan bron diepte, wat de primaire beperking biedt voor diepte schatting in aardbeving locatie-algoritmen."
      }
    },
    {
      question: {
        en: "What causes the characteristic high-frequency (>1 Hz) energy content in near-field earthquake recordings?",
        es: "¿Qué causa el característico contenido de energía de alta frecuencia (>1 Hz) en registros de terremotos de campo cercano?",
        de: "Was verursacht den charakteristischen Hochfrequenz-Energiegehalt (>1 Hz) in Nahfeld-Erdbebenaufzeichnungen?",
        nl: "Wat veroorzaakt de karakteristieke hoge-frequentie (>1 Hz) energie-inhoud in nabije-veld aardbeving opnames?"
      },
      options: [
        { en: "Rupture process heterogeneity and small-scale asperities", es: "Heterogeneidad del proceso de ruptura y asperezas de pequeña escala", de: "Bruchprozessheterogenität und kleinräumige Asperitäten", nl: "Breukproces heterogeniteit en kleinschalige asperiteiten" },
        { en: "Path effects only", es: "Solo efectos de trayectoria", de: "Nur Pfadeffekte", nl: "Alleen padeffecten" },
        { en: "Site amplification only", es: "Solo amplificación del sitio", de: "Nur Standortverstärkung", nl: "Alleen site versterking" },
        { en: "Instrument response", es: "Respuesta del instrumento", de: "Instrumentenantwort", nl: "Instrument respons" }
      ],
      correct: 0,
      explanation: {
        en: "High-frequency energy in near-field recordings primarily originates from rupture process heterogeneity and small-scale asperities (stress concentrations) on the fault plane. These small-scale features generate high-frequency seismic radiation that is preserved at short distances but attenuated at longer distances due to scattering and absorption.",
        es: "La energía de alta frecuencia en registros de campo cercano se origina principalmente de la heterogeneidad del proceso de ruptura y asperezas de pequeña escala (concentraciones de esfuerzo) en el plano de falla. Estas características de pequeña escala generan radiación sísmica de alta frecuencia que se preserva a distancias cortas pero se atenúa a distancias más largas debido a dispersión y absorción.",
        de: "Hochfrequenz-Energie in Nahfeldaufzeichnungen stammt hauptsächlich von Bruchprozessheterogenität und kleinräumigen Asperitäten (Spannungskonzentrationen) auf der Verwerfungsebene. Diese kleinräumigen Merkmale erzeugen hochfrequente seismische Strahlung, die bei kurzen Entfernungen erhalten bleibt, aber bei größeren Entfernungen durch Streuung und Absorption gedämpft wird.",
        nl: "Hoge-frequentie energie in nabije-veld opnames komt voornamelijk voort uit breukproces heterogeniteit en kleinschalige asperiteiten (spanning concentraties) op het breukvlak. Deze kleinschalige kenmerken genereren hoge-frequentie seismische straling die behouden blijft op korte afstanden maar verzwakt op langere afstanden door verstrooiing en absorptie."
      }
    },
    {
      question: {
        en: "What seismic parameter quantifies the spatial coherence of rupture slip distribution on earthquake faults?",
        es: "¿Qué parámetro sísmico cuantifica la coherencia espacial de la distribución de deslizamiento de ruptura en fallas de terremotos?",
        de: "Welcher seismische Parameter quantifiziert die räumliche Kohärenz der Ruptur-Slip-Verteilung auf Erdbebenverwerfungen?",
        nl: "Welke seismische parameter kwantificeert de ruimtelijke coherentie van breukslip distributie op aardbevingsbreuken?"
      },
      options: [
        { en: "Slip correlation length", es: "Longitud de correlación de deslizamiento", de: "Slip-Korrelationslänge", nl: "Slip correlatie lengte" },
        { en: "Rupture velocity variation", es: "Variación de velocidad de ruptura", de: "Bruchgeschwindigkeitsvariation", nl: "Breuksnelheid variatie" },
        { en: "Stress drop heterogeneity", es: "Heterogeneidad de caída de esfuerzo", de: "Spannungsabfallheterogenität", nl: "Spanning afname heterogeniteit" },
        { en: "Asperity distribution factor", es: "Factor de distribución de asperezas", de: "Asperitätenverteilungsfaktor", nl: "Asperiteit distributie factor" }
      ],
      correct: 0,
      explanation: {
        en: "Slip correlation length quantifies how slip values at different points on the fault plane are spatially correlated. It characterizes the characteristic length scale over which slip maintains coherent patterns, providing insights into fault zone structure and rupture physics. Longer correlation lengths indicate more spatially coherent rupture processes.",
        es: "La longitud de correlación de deslizamiento cuantifica cómo los valores de deslizamiento en diferentes puntos del plano de falla están espacialmente correlacionados. Caracteriza la escala de longitud característica sobre la cual el deslizamiento mantiene patrones coherentes, proporcionando conocimientos sobre la estructura de la zona de falla y la física de ruptura. Longitudes de correlación más largas indican procesos de ruptura más espacialmente coherentes.",
        de: "Die Slip-Korrelationslänge quantifiziert, wie Slip-Werte an verschiedenen Punkten auf der Verwerfungsebene räumlich korreliert sind. Sie charakterisiert die charakteristische Längenskala, über die Slip kohärente Muster beibehält, und liefert Einblicke in die Verwerfungszonenstruktur und Bruchphysik. Längere Korrelationslängen zeigen räumlich kohärentere Bruchprozesse an.",
        nl: "Slip correlatie lengte kwantificeert hoe slip waarden op verschillende punten op het breukvlak ruimtelijk gecorreleerd zijn. Het karakteriseert de karakteristieke lengteschaal waarover slip coherente patronen behoudt, wat inzichten biedt in breukzone structuur en breukfysica. Langere correlatie lengtes duiden op meer ruimtelijk coherente breukprocessen."
      }
    },
    {
      question: {
        en: "What is the primary physical mechanism controlling seismic wave scattering in the Earth's lithosphere?",
        es: "¿Cuál es el mecanismo físico principal que controla la dispersión de ondas sísmicas en la litósfera de la Tierra?",
        de: "Was ist der primäre physikalische Mechanismus, der die Streuung seismischer Wellen in der Erdlithosphäre kontrolliert?",
        nl: "Wat is het primaire fysieke mechanisme dat seismische golfverstrooiing in de aardlithosfeer controleert?"
      },
      options: [
        { en: "Small-scale velocity heterogeneities", es: "Heterogeneidades de velocidad de pequeña escala", de: "Kleinräumige Geschwindigkeitsheterogenitäten", nl: "Kleinschalige snelheid heterogeniteiten" },
        { en: "Large-scale density variations", es: "Variaciones de densidad de gran escala", de: "Großräumige Dichtevariationen", nl: "Grootschalige dichtheid variaties" },
        { en: "Temperature gradients only", es: "Solo gradientes de temperatura", de: "Nur Temperaturgradienten", nl: "Alleen temperatuurgradiënten" },
        { en: "Magnetic field variations", es: "Variaciones de campo magnético", de: "Magnetfeldvariationen", nl: "Magnetisch veld variaties" }
      ],
      correct: 0,
      explanation: {
        en: "Small-scale velocity heterogeneities in the lithosphere are the primary cause of seismic wave scattering. These heterogeneities, including fractures, compositional variations, and structural complexities, cause waves to scatter when their wavelengths become comparable to the size of the heterogeneities, leading to coda wave formation and energy loss.",
        es: "Las heterogeneidades de velocidad de pequeña escala en la litósfera son la causa principal de la dispersión de ondas sísmicas. Estas heterogeneidades, incluyendo fracturas, variaciones composicionales y complejidades estructurales, causan que las ondas se dispersen cuando sus longitudes de onda se vuelven comparables al tamaño de las heterogeneidades, llevando a la formación de ondas coda y pérdida de energía.",
        de: "Kleinräumige Geschwindigkeitsheterogenitäten in der Lithosphäre sind die primäre Ursache für seismische Wellenstreuung. Diese Heterogenitäten, einschließlich Brüche, Zusammensetzungsvariationen und strukturelle Komplexitäten, verursachen Wellenstreuung, wenn ihre Wellenlängen vergleichbar mit der Größe der Heterogenitäten werden, was zur Coda-Wellenbildung und Energieverlust führt.",
        nl: "Kleinschalige snelheid heterogeniteiten in de lithosfeer zijn de primaire oorzaak van seismische golfverstrooiing. Deze heterogeniteiten, inclusief breuken, compositionele variaties en structurele complexiteiten, veroorzaken golfverstrooiing wanneer hun golflengtes vergelijkbaar worden met de grootte van de heterogeniteiten, wat leidt tot coda golfvorming en energieverlies."
      }
    },
    {
      question: {
        en: "What advanced seismic technique uses coda wave decay rates to estimate subsurface scattering properties?",
        es: "¿Qué técnica sísmica avanzada utiliza las tasas de decaimiento de ondas coda para estimar las propiedades de dispersión del subsuelo?",
        de: "Welche fortgeschrittene seismische Technik verwendet Coda-Wellen-Zerfallsraten zur Schätzung von Untergrund-Streuungseigenschaften?",
        nl: "Welke geavanceerde seismische techniek gebruikt coda golf vervaltijd om ondergrondse verstrooiingseigenschappen te schatten?"
      },
      options: [
        { en: "Coda Q analysis", es: "Análisis Q de coda", de: "Coda Q-Analyse", nl: "Coda Q analyse" },
        { en: "Surface wave dispersion", es: "Dispersión de ondas superficiales", de: "Oberflächenwellendispersion", nl: "Oppervlaktegolf dispersie" },
        { en: "Body wave tomography", es: "Tomografía de ondas internas", de: "Raumwellen-Tomographie", nl: "Ruimtegolf tomografie" },
        { en: "Ambient noise correlation", es: "Correlación de ruido ambiental", de: "Umgebungsrauschkorrelation", nl: "Omgevingsruis correlatie" }
      ],
      correct: 0,
      explanation: {
        en: "Coda Q analysis uses the exponential decay rate of scattered waves (coda) following the direct arrivals to estimate the quality factor (Q) and scattering properties of the subsurface. The technique assumes that coda waves result from multiple scattering and their decay rate reflects both intrinsic attenuation and scattering losses in the medium.",
        es: "El análisis Q de coda utiliza la tasa de decaimiento exponencial de ondas dispersas (coda) siguiendo a las llegadas directas para estimar el factor de calidad (Q) y las propiedades de dispersión del subsuelo. La técnica asume que las ondas coda resultan de dispersión múltiple y su tasa de decaimiento refleja tanto atenuación intrínseca como pérdidas de dispersión en el medio.",
        de: "Die Coda Q-Analyse verwendet die exponentielle Zerfallsrate gestreuter Wellen (Coda) nach den direkten Ankunften zur Schätzung des Gütefaktors (Q) und der Streuungseigenschaften des Untergrunds. Die Technik nimmt an, dass Coda-Wellen aus Mehrfachstreuung resultieren und ihre Zerfallsrate sowohl intrinsische Dämpfung als auch Streuverluste im Medium widerspiegelt.",
        nl: "Coda Q analyse gebruikt de exponentiële vervaltijd van verstrooide golven (coda) volgend op de directe aankomsten om de kwaliteitsfactor (Q) en verstrooiingseigenschappen van de ondergrond te schatten. De techniek neemt aan dat coda golven resulteren uit meervoudige verstrooiing en hun vervaltijd reflecteert zowel intrinsieke demping als verstrooiingsverliezen in het medium."
      }
    },
    {
      question: {
        en: "What determines the polarity of first-motion P-wave arrivals in earthquake recordings?",
        es: "¿Qué determina la polaridad de las llegadas de primeros movimientos de ondas P en registros de terremotos?",
        de: "Was bestimmt die Polarität der Ersteinsatz-P-Wellen-Ankunft in Erdbebenaufzeichnungen?",
        nl: "Wat bepaalt de polariteit van eerste-beweging P-golf aankomsten in aardbeving opnames?"
      },
      options: [
        { en: "Earthquake focal mechanism and station azimuth", es: "Mecanismo focal del terremoto y azimut de la estación", de: "Erdbeben-Fokalmechanismus und Stationsazimut", nl: "Aardbeving focaal mechanisme en station azimut" },
        { en: "Epicentral distance only", es: "Solo distancia epicentral", de: "Nur Epizentralentfernung", nl: "Alleen epicentrale afstand" },
        { en: "Earthquake magnitude", es: "Magnitud del terremoto", de: "Erdbebenmagnitude", nl: "Aardbeving magnitude" },
        { en: "Site geology effects", es: "Efectos de geología del sitio", de: "Standortgeologieeffekte", nl: "Site geologie effecten" }
      ],
      correct: 0,
      explanation: {
        en: "P-wave first-motion polarity is determined by the earthquake focal mechanism (fault orientation and slip direction) and the azimuth and takeoff angle from source to station. The focal mechanism creates a quadrant pattern of compressional (positive) and dilatational (negative) first motions, which forms the basis for determining fault plane solutions.",
        es: "La polaridad del primer movimiento de ondas P está determinada por el mecanismo focal del terremoto (orientación de falla y dirección de deslizamiento) y el azimut y ángulo de despegue de la fuente a la estación. El mecanismo focal crea un patrón de cuadrantes de primeros movimientos compresionales (positivos) y dilatacionales (negativos), que forma la base para determinar soluciones del plano de falla.",
        de: "Die P-Wellen-Ersteinsatz-Polarität wird durch den Erdbeben-Fokalmechanismus (Verwerfungsorientierung und Slip-Richtung) und Azimut und Abgangswinkel von Quelle zur Station bestimmt. Der Fokalmechanismus erzeugt ein Quadrantenmuster von kompressiven (positiven) und dilatationalen (negativen) Ersteinsätzen, das die Basis für die Bestimmung von Verwerfungsebenen-Lösungen bildet.",
        nl: "P-golf eerste-beweging polariteit wordt bepaald door het aardbeving focaal mechanisme (breukoriëntatie en slip richting) en de azimut en takeoff hoek van bron naar station. Het focaal mechanisme creëert een kwadrant patroon van compressieve (positieve) en dilatationele (negatieve) eerste bewegingen, wat de basis vormt voor het bepalen van breukvlak oplossingen."
      }
    },
    {
      question: {
        en: "What seismic parameter is used to quantify the relative contributions of different earthquake rupture modes?",
        es: "¿Qué parámetro sísmico se utiliza para cuantificar las contribuciones relativas de diferentes modos de ruptura de terremotos?",
        de: "Welcher seismische Parameter wird verwendet, um die relativen Beiträge verschiedener Erdbebenbruchmodi zu quantifizieren?",
        nl: "Welke seismische parameter wordt gebruikt om de relatieve bijdragen van verschillende aardbeving breukmodussen te kwantificeren?"
      },
      options: [
        { en: "Moment tensor decomposition", es: "Descomposición del tensor de momento", de: "Momenttensorzerlegung", nl: "Moment tensor decompositie" },
        { en: "Rupture velocity profile", es: "Perfil de velocidad de ruptura", de: "Bruchgeschwindigkeitsprofil", nl: "Breuksnelheid profiel" },
        { en: "Slip rate function", es: "Función de tasa de deslizamiento", de: "Slip-Rate-Funktion", nl: "Slip snelheid functie" },
        { en: "Energy release rate", es: "Tasa de liberación de energía", de: "Energiefreisetzungsrate", nl: "Energie vrijgave snelheid" }
      ],
      correct: 0,
      explanation: {
        en: "Moment tensor decomposition separates the total seismic moment tensor into double-couple (DC), compensated linear vector dipole (CLVD), and isotropic components. This decomposition quantifies the relative contributions of shear faulting (DC), non-planar rupture or multiple fault orientations (CLVD), and volumetric changes (isotropic) in earthquake sources.",
        es: "La descomposición del tensor de momento separa el tensor de momento sísmico total en componentes de doble par (DC), dipolo vectorial lineal compensado (CLVD), e isotrópico. Esta descomposición cuantifica las contribuciones relativas de fallamiento de corte (DC), ruptura no planar o múltiples orientaciones de falla (CLVD), y cambios volumétricos (isotrópico) en fuentes de terremotos.",
        de: "Die Momenttensorzerlegung trennt den gesamten seismischen Momenttensor in Doppelpaar (DC)-, kompensierte lineare Vektor-Dipol (CLVD)- und isotrope Komponenten. Diese Zerlegung quantifiziert die relativen Beiträge von Scherbrüchen (DC), nicht-planaren Brüchen oder mehrfachen Verwerfungsorientierungen (CLVD) und Volumenänderungen (isotrop) in Erdbebenquellen.",
        nl: "Moment tensor decompositie scheidt de totale seismische moment tensor in dubbel-koppel (DC), gecompenseerde lineaire vector dipool (CLVD), en isotrope componenten. Deze decompositie kwantificeert de relatieve bijdragen van scheer falen (DC), niet-vlakke breuk of meerdere breukoriëntaties (CLVD), en volumetrische veranderingen (isotroop) in aardbevingsbronnen."
      }
    },
    {
      question: {
        en: "What controls the duration of strong ground shaking in earthquake recordings?",
        es: "¿Qué controla la duración del movimiento fuerte del suelo en registros de terremotos?",
        de: "Was kontrolliert die Dauer starker Bodenbewegungen in Erdbebenaufzeichnungen?",
        nl: "Wat controleert de duur van sterke grondbeweging in aardbeving opnames?"
      },
      options: [
        { en: "Source duration and path scattering effects", es: "Duración de fuente y efectos de dispersión de trayectoria", de: "Quelldauer und Pfadstreuungseffekte", nl: "Bron duur en pad verstrooiingseffecten" },
        { en: "Earthquake magnitude only", es: "Solo magnitud del terremoto", de: "Nur Erdbebenmagnitude", nl: "Alleen aardbevingsmagnitude" },
        { en: "Site conditions only", es: "Solo condiciones del sitio", de: "Nur Standortbedingungen", nl: "Alleen site condities" },
        { en: "Instrument characteristics", es: "Características del instrumento", de: "Instrumentcharakteristika", nl: "Instrument karakteristieken" }
      ],
      correct: 0,
      explanation: {
        en: "Strong ground shaking duration is controlled by both source duration (related to fault rupture time) and path scattering effects that extend the wave train through multiple scattering. Large earthquakes have longer source durations, while scattering from crustal heterogeneities prolongs shaking by creating scattered waves that arrive after direct phases.",
        es: "La duración del movimiento fuerte del suelo es controlada tanto por la duración de la fuente (relacionada con el tiempo de ruptura de falla) como por efectos de dispersión de trayectoria que extienden el tren de ondas a través de dispersión múltiple. Los terremotos grandes tienen duraciones de fuente más largas, mientras que la dispersión de heterogeneidades crustales prolonga el movimiento creando ondas dispersas que llegan después de las fases directas.",
        de: "Die Dauer starker Bodenbewegungen wird sowohl durch Quelldauer (bezogen auf Verwerfungsbruchzeit) als auch durch Pfadstreuungseffekte kontrolliert, die den Wellenzug durch Mehrfachstreuung verlängern. Große Erdbeben haben längere Quelldauern, während Streuung von Krustenheterogenitäten die Erschütterung durch gestreute Wellen verlängert, die nach direkten Phasen ankommen.",
        nl: "Sterke grondbeweging duur wordt gecontroleerd door zowel bron duur (gerelateerd aan breukrupture tijd) als pad verstrooiingseffecten die de golftrein verlengen door meervoudige verstrooiing. Grote aardbevingen hebben langere bron duren, terwijl verstrooiing van korstheterogeniteiten het trillen verlengt door verstrooide golven te creëren die na directe fasen aankomen."
      }
    },
    {
      question: {
        en: "What seismic analysis method is used to separate source, path, and site contributions to ground motion amplitudes?",
        es: "¿Qué método de análisis sísmico se utiliza para separar las contribuciones de fuente, trayectoria y sitio a las amplitudes de movimiento del suelo?",
        de: "Welche seismische Analysemethode wird verwendet, um Quellen-, Pfad- und Standortbeiträge zu Bodenbewegungsamplituden zu trennen?",
        nl: "Welke seismische analysemethode wordt gebruikt om bron-, pad- en site-bijdragen aan grondbeweging amplitudes te scheiden?"
      },
      options: [
        { en: "Generalized inversion technique", es: "Técnica de inversión generalizada", de: "Verallgemeinerte Inversionstechnik", nl: "Gegeneraliseerde inversie techniek" },
        { en: "Simple amplitude ratios", es: "Relaciones de amplitud simples", de: "Einfache Amplitudenverhältnisse", nl: "Eenvoudige amplitude verhoudingen" },
        { en: "Fourier analysis only", es: "Solo análisis de Fourier", de: "Nur Fourier-Analyse", nl: "Alleen Fourier analyse" },
        { en: "Statistical correlation", es: "Correlación estadística", de: "Statistische Korrelation", nl: "Statistische correlatie" }
      ],
      correct: 0,
      explanation: {
        en: "The generalized inversion technique (GIT) simultaneously inverts large datasets of ground motion recordings to separate source spectra, path attenuation, and site amplification effects. This method assumes that observed spectra are the product of source × path × site effects, allowing systematic separation of these contributions using statistical inversion methods.",
        es: "La técnica de inversión generalizada (GIT) invierte simultáneamente grandes conjuntos de datos de registros de movimiento del suelo para separar espectros de fuente, atenuación de trayectoria y efectos de amplificación de sitio. Este método asume que los espectros observados son el producto de efectos fuente × trayectoria × sitio, permitiendo separación sistemática de estas contribuciones usando métodos de inversión estadística.",
        de: "Die verallgemeinerte Inversionstechnik (GIT) invertiert gleichzeitig große Datensätze von Bodenbewegungsaufzeichnungen, um Quellenspektren, Pfaddämpfung und Standortverstärkungseffekte zu trennen. Diese Methode nimmt an, dass beobachtete Spektren das Produkt von Quelle × Pfad × Standorteffekten sind, was systematische Trennung dieser Beiträge mit statistischen Inversionsmethoden ermöglicht.",
        nl: "De gegeneraliseerde inversie techniek (GIT) inverteert simultaan grote datasets van grondbeweging opnames om bron spectra, pad demping, en site versterkingseffecten te scheiden. Deze methode neemt aan dat waargenomen spectra het product zijn van bron × pad × site effecten, wat systematische scheiding van deze bijdragen mogelijk maakt met statistische inversie methoden."
      }
    },
    {
      question: {
        en: "What is the primary cause of the systematic variation in seismic wave amplitudes with azimuth from earthquake sources?",
        es: "¿Cuál es la causa principal de la variación sistemática en amplitudes de ondas sísmicas con azimut desde fuentes de terremotos?",
        de: "Was ist die primäre Ursache der systematischen Variation seismischer Wellenamplituden mit dem Azimut von Erdbebenquellen?",
        nl: "Wat is de primaire oorzaak van de systematische variatie in seismische golfamplitudes met azimut van aardbevingsbronnen?"
      },
      options: [
        { en: "Radiation pattern of the focal mechanism", es: "Patrón de radiación del mecanismo focal", de: "Strahlungsmuster des Fokalmechanismus", nl: "Stralingspatroon van het focaal mechanisme" },
        { en: "Path attenuation differences", es: "Diferencias de atenuación de trayectoria", de: "Pfaddämpfungsunterschiede", nl: "Pad demping verschillen" },
        { en: "Site amplification variations", es: "Variaciones de amplificación de sitio", de: "Standortverstärkungsvariationen", nl: "Site versterkingsvariaties" },
        { en: "Instrument orientation effects", es: "Efectos de orientación del instrumento", de: "Instrumentorientierungseffekte", nl: "Instrument oriëntatie effecten" }
      ],
      correct: 0,
      explanation: {
        en: "The radiation pattern of the earthquake focal mechanism is the primary cause of systematic amplitude variations with azimuth. Each type of faulting (normal, reverse, strike-slip) produces characteristic four-lobed radiation patterns that control how seismic energy is distributed directionally around the source, creating predictable amplitude variations with station azimuth.",
        es: "El patrón de radiación del mecanismo focal del terremoto es la causa principal de variaciones sistemáticas de amplitud con azimut. Cada tipo de fallamiento (normal, inverso, de rumbo) produce patrones de radiación característicos de cuatro lóbulos que controlan cómo se distribuye direccionalmente la energía sísmica alrededor de la fuente, creando variaciones de amplitud predecibles con el azimut de la estación.",
        de: "Das Strahlungsmuster des Erdbeben-Fokalmechanismus ist die primäre Ursache systematischer Amplitudenvariationen mit dem Azimut. Jeder Verwerfungstyp (normal, umgekehrt, Blattverschiebung) erzeugt charakteristische vierlappige Strahlungsmuster, die kontrollieren, wie seismische Energie richtungsabhängig um die Quelle verteilt wird und vorhersagbare Amplitudenvariationen mit dem Stationsazimut schaffen.",
        nl: "Het stralingspatroon van het aardbeving focaal mechanisme is de primaire oorzaak van systematische amplitude variaties met azimut. Elk type breuk (normaal, omgekeerd, strike-slip) produceert karakteristieke vier-lobbige stralingspatronen die controleren hoe seismische energie directioneel verdeeld wordt rond de bron, wat voorspelbare amplitude variaties met station azimut creëert."
      }
    },
    {
      question: {
        en: "What advanced seismic processing technique uses multi-component recordings to enhance weak signal detection?",
        es: "¿Qué técnica avanzada de procesamiento sísmico utiliza registros multicomponente para mejorar la detección de señales débiles?",
        de: "Welche fortgeschrittene seismische Verarbeitungstechnik verwendet Mehrkomponentenaufzeichnungen zur Verbesserung der Schwachsignaldetektion?",
        nl: "Welke geavanceerde seismische verwerkingstechniek gebruikt multi-component opnames om zwakke signaaldetectie te verbeteren?"
      },
      options: [
        { en: "Polarization filtering", es: "Filtrado de polarización", de: "Polarisationsfilterung", nl: "Polarisatie filtering" },
        { en: "Spectral whitening only", es: "Solo blanqueamiento espectral", de: "Nur spektrale Aufhellung", nl: "Alleen spectrale witwassing" },
        { en: "Amplitude normalization", es: "Normalización de amplitud", de: "Amplitudennormalisierung", nl: "Amplitude normalisatie" },
        { en: "Frequency filtering only", es: "Solo filtrado de frecuencia", de: "Nur Frequenzfilterung", nl: "Alleen frequentie filtering" }
      ],
      correct: 0,
      explanation: {
        en: "Polarization filtering uses the particle motion characteristics recorded on three-component seismometers to separate signals based on their polarization properties. This technique can enhance coherent signals (like P- and S-waves with specific polarizations) while suppressing incoherent noise, significantly improving signal-to-noise ratios for weak seismic phases.",
        es: "El filtrado de polarización utiliza las características de movimiento de partículas registradas en sismómetros de tres componentes para separar señales basándose en sus propiedades de polarización. Esta técnica puede mejorar señales coherentes (como ondas P y S con polarizaciones específicas) mientras suprime ruido incoherente, mejorando significativamente las relaciones señal-ruido para fases sísmicas débiles.",
        de: "Polarisationsfilterung nutzt die Partikelbewegungscharakteristika, die auf dreikomponentigen Seismometern aufgezeichnet werden, um Signale basierend auf ihren Polarisationseigenschaften zu trennen. Diese Technik kann kohärente Signale (wie P- und S-Wellen mit spezifischen Polarisationen) verstärken, während inkohärentes Rauschen unterdrückt wird, was Signal-Rausch-Verhältnisse für schwache seismische Phasen erheblich verbessert.",
        nl: "Polarisatie filtering gebruikt de deeltjesbeweging karakteristieken opgenomen op drie-component seismometers om signalen te scheiden gebaseerd op hun polarisatie-eigenschappen. Deze techniek kan coherente signalen versterken (zoals P- en S-golven met specifieke polarisaties) terwijl incoherente ruis wordt onderdrukt, wat signaal-ruis verhoudingen voor zwakke seismische fasen aanzienlijk verbetert."
      }
    },
    {
      question: {
        en: "What physical process controls the nucleation phase of earthquake rupture initiation?",
        es: "¿Qué proceso físico controla la fase de nucleación del inicio de ruptura de terremotos?",
        de: "Welcher physikalische Prozess kontrolliert die Nukleationsphase der Erdbebenbruch-Initiierung?",
        nl: "Welk fysiek proces controleert de nucleatie fase van aardbeving breuk initiatie?"
      },
      options: [
        { en: "Critical crack length and stress concentration", es: "Longitud de grieta crítica y concentración de esfuerzo", de: "Kritische Risslänge und Spannungskonzentration", nl: "Kritische scheur lengte en spanning concentratie" },
        { en: "Temperature rise only", es: "Solo aumento de temperatura", de: "Nur Temperaturanstieg", nl: "Alleen temperatuurstijging" },
        { en: "Fluid pressure decrease", es: "Disminución de presión de fluidos", de: "Fluiddruckabnahme", nl: "Vloeistofdruk afname" },
        { en: "Gravitational effects", es: "Efectos gravitacionales", de: "Gravitationseffekte", nl: "Gravitatie effecten" }
      ],
      correct: 0,
      explanation: {
        en: "Earthquake nucleation is controlled by the growth of a critical crack or asperity to a critical length where unstable slip begins. Stress concentration at crack tips creates local stress intensification that exceeds the fracture toughness of the fault material, triggering the transition from stable sliding to unstable rupture propagation.",
        es: "La nucleación de terremotos es controlada por el crecimiento de una grieta crítica o aspereza a una longitud crítica donde comienza el deslizamiento inestable. La concentración de esfuerzo en las puntas de las grietas crea intensificación de esfuerzo local que excede la tenacidad a la fractura del material de falla, activando la transición de deslizamiento estable a propagación de ruptura inestable.",
        de: "Erdbeben-Nukleation wird durch das Wachstum eines kritischen Risses oder einer Asperität zu einer kritischen Länge kontrolliert, wo instabiler Slip beginnt. Spannungskonzentration an Rissspitzen erzeugt lokale Spannungsintensivierung, die die Bruchzähigkeit des Verwerfungsmaterials überschreitet und den Übergang von stabilem Gleiten zu instabiler Bruchausbreitung auslöst.",
        nl: "Aardbeving nucleatie wordt gecontroleerd door de groei van een kritische scheur of asperiteit tot een kritische lengte waar instabiele slip begint. Spanning concentratie bij scheur punten creëert lokale spanning intensivering die de breuk taaiheid van het breukmaterial overschrijdt, wat de overgang triggert van stabiele glijding naar instabiele breuk voortplanting."
      }
    },
    {
      question: {
        en: "What seismic wave phenomenon creates the characteristic double-frequency microseismic peaks?",
        es: "¿Qué fenómeno de ondas sísmicas crea los picos microsísmicos característicos de doble frecuencia?",
        de: "Welches seismische Wellenphänomen erzeugt die charakteristischen Doppelfrequenz-Mikroseismik-Spitzen?",
        nl: "Welk seismisch golf fenomeen creëert de karakteristieke dubbele-frequentie microseismische pieken?"
      },
      options: [
        { en: "Ocean wave interference and standing wave formation", es: "Interferencia de ondas oceánicas y formación de ondas estacionarias", de: "Ozeanwellen-Interferenz und stehende Wellenbildung", nl: "Oceaangolf interferentie en staande golf formatie" },
        { en: "Tidal effects only", es: "Solo efectos de mareas", de: "Nur Gezeiteneffekte", nl: "Alleen getijde effecten" },
        { en: "Atmospheric pressure variations", es: "Variaciones de presión atmosférica", de: "Atmosphärische Druckvariationen", nl: "Atmosferische druk variaties" },
        { en: "Thermal expansion effects", es: "Efectos de expansión térmica", de: "Thermische Ausdehnungseffekte", nl: "Thermische uitzetting effecten" }
      ],
      correct: 0,
      explanation: {
        en: "Double-frequency microseisms are generated when ocean waves traveling in opposite directions interfere to create standing waves. This interference doubles the frequency of the ocean wave period, creating characteristic peaks around 0.1-0.3 Hz in seismic records. The standing wave pattern generates pressure variations on the seafloor that couple efficiently to seismic waves.",
        es: "Los microsismos de doble frecuencia son generados cuando ondas oceánicas viajando en direcciones opuestas interfieren para crear ondas estacionarias. Esta interferencia duplica la frecuencia del período de onda oceánica, creando picos característicos alrededor de 0.1-0.3 Hz en registros sísmicos. El patrón de onda estacionaria genera variaciones de presión en el fondo marino que se acopla eficientemente a ondas sísmicas.",
        de: "Doppelfrequenz-Mikroseismen werden erzeugt, wenn Ozeanwellen in entgegengesetzten Richtungen interferieren und stehende Wellen bilden. Diese Interferenz verdoppelt die Frequenz der Ozeanwellenperiode und erzeugt charakteristische Spitzen um 0,1-0,3 Hz in seismischen Aufzeichnungen. Das stehende Wellenmuster erzeugt Druckvariationen am Meeresboden, die effizient an seismische Wellen koppeln.",
        nl: "Dubbele-frequentie microseisms worden gegenereerd wanneer oceaangolven die in tegengestelde richtingen reizen interfereren om staande golven te creëren. Deze interferentie verdubbelt de frequentie van de oceaangolf periode, wat karakteristieke pieken rond 0,1-0,3 Hz creëert in seismische records. Het staande golf patroon genereert druk variaties op de zeebodem die efficiënt koppelen aan seismische golven."
      }
    },
    {
      question: {
        en: "What controls the stress shadow effect following large earthquake ruptures?",
        es: "¿Qué controla el efecto de sombra de esfuerzo después de rupturas de terremotos grandes?",
        de: "Was kontrolliert den Spannungsschatten-Effekt nach großen Erdbebenbrüchen?",
        nl: "Wat controleert het spanning schaduw effect na grote aardbeving breuken?"
      },
      options: [
        { en: "Static stress redistribution and Coulomb stress changes", es: "Redistribución de esfuerzo estático y cambios de esfuerzo de Coulomb", de: "Statische Spannungsumverteilung und Coulomb-Spannungsänderungen", nl: "Statische spanning herverdeling en Coulomb spanning veranderingen" },
        { en: "Dynamic stress effects only", es: "Solo efectos de esfuerzo dinámico", de: "Nur dynamische Spannungseffekte", nl: "Alleen dynamische spanning effecten" },
        { en: "Gravitational changes", es: "Cambios gravitacionales", de: "Gravitationsänderungen", nl: "Gravitatie veranderingen" },
        { en: "Thermal effects", es: "Efectos térmicos", de: "Thermische Effekte", nl: "Thermische effecten" }
      ],
      correct: 0,
      explanation: {
        en: "Stress shadows are created by static stress redistribution following earthquake ruptures. The Coulomb stress change (Δσf = Δτ - μ'Δσn) determines regions where subsequent earthquakes are promoted (positive ΔCFS) or inhibited (negative ΔCFS). This permanent stress field change persists for decades to centuries, influencing seismic hazard patterns.",
        es: "Las sombras de esfuerzo son creadas por redistribución de esfuerzo estático después de rupturas de terremotos. El cambio de esfuerzo de Coulomb (Δσf = Δτ - μ'Δσn) determina regiones donde terremotos subsecuentes son promovidos (ΔCFS positivo) o inhibidos (ΔCFS negativo). Este cambio permanente de campo de esfuerzo persiste por décadas a siglos, influyendo patrones de riesgo sísmico.",
        de: "Spannungsschatten werden durch statische Spannungsumverteilung nach Erdbebenbrüchen erzeugt. Die Coulomb-Spannungsänderung (Δσf = Δτ - μ'Δσn) bestimmt Regionen, wo nachfolgende Erdbeben gefördert (positiver ΔCFS) oder gehemmt (negativer ΔCFS) werden. Diese permanente Spannungsfeldänderung besteht jahrzehntelang bis jahrhundertelang und beeinflusst seismische Gefahrenmuster.",
        nl: "Spanning schaduwen worden gecreëerd door statische spanning herverdeling na aardbeving breuken. De Coulomb spanning verandering (Δσf = Δτ - μ'Δσn) bepaalt gebieden waar volgende aardbevingen worden bevorderd (positieve ΔCFS) of geremd (negatieve ΔCFS). Deze permanente spanning veld verandering blijft bestaan voor decennia tot eeuwen, wat seismische gevaar patronen beïnvloedt."
      }
    },
    {
      question: {
        en: "What seismic parameter quantifies the efficiency of energy conversion from elastic to kinetic during earthquake rupture?",
        es: "¿Qué parámetro sísmico cuantifica la eficiencia de conversión de energía de elástica a cinética durante ruptura de terremoto?",
        de: "Welcher seismische Parameter quantifiziert die Effizienz der Energieumwandlung von elastisch zu kinetisch während Erdbebenbruch?",
        nl: "Welke seismische parameter kwantificeert de efficiëntie van energie conversie van elastisch naar kinetisch tijdens aardbeving breuk?"
      },
      options: [
        { en: "Radiation efficiency and seismic efficiency ratio", es: "Eficiencia de radiación y relación de eficiencia sísmica", de: "Strahlungseffizienz und seismische Effizienzverhältnis", nl: "Straling efficiëntie en seismische efficiëntie verhouding" },
        { en: "Magnitude scaling only", es: "Solo escalamiento de magnitud", de: "Nur Magnitudenskalierung", nl: "Alleen magnitude schaling" },
        { en: "Rupture area measurement", es: "Medición del área de ruptura", de: "Bruchflächenmessung", nl: "Breuk gebied meting" },
        { en: "Peak ground acceleration", es: "Aceleración máxima del suelo", de: "Maximale Bodenbeschleunigung", nl: "Piek grond versnelling" }
      ],
      correct: 0,
      explanation: {
        en: "Radiation efficiency (ηR = Es/Ea) quantifies how efficiently available elastic energy is converted to radiated seismic energy. Typical values range from 0.01-0.25, with higher values indicating more efficient energy conversion. The seismic efficiency ratio helps distinguish between different rupture mechanisms and fault zone properties.",
        es: "La eficiencia de radiación (ηR = Es/Ea) cuantifica cuán eficientemente se convierte la energía elástica disponible a energía sísmica radiada. Los valores típicos van de 0.01-0.25, con valores más altos indicando conversión de energía más eficiente. La relación de eficiencia sísmica ayuda a distinguir entre diferentes mecanismos de ruptura y propiedades de zona de falla.",
        de: "Strahlungseffizienz (ηR = Es/Ea) quantifiziert, wie effizient verfügbare elastische Energie in gestrahlte seismische Energie umgewandelt wird. Typische Werte reichen von 0,01-0,25, wobei höhere Werte effizientere Energieumwandlung anzeigen. Das seismische Effizienzverhältnis hilft zwischen verschiedenen Bruchmechanismen und Verwerfungszoneneigenschaften zu unterscheiden.",
        nl: "Straling efficiëntie (ηR = Es/Ea) kwantificeert hoe efficiënt beschikbare elastische energie wordt geconverteerd naar uitgestraalde seismische energie. Typische waarden variëren van 0,01-0,25, waarbij hogere waarden meer efficiënte energie conversie aangeven. De seismische efficiëntie verhouding helpt onderscheid maken tussen verschillende breuk mechanismen en breukzone eigenschappen."
      }
    },
    {
      question: {
        en: "What physical mechanism generates the characteristic spectral holes in earthquake source spectra?",
        es: "¿Qué mecanismo físico genera los hoyos espectrales característicos en espectros de fuente de terremotos?",
        de: "Welcher physikalische Mechanismus erzeugt die charakteristischen spektralen Löcher in Erdbeben-Quellenspektren?",
        nl: "Welk fysiek mechanisme genereert de karakteristieke spectrale gaten in aardbeving bron spectra?"
      },
      options: [
        { en: "Directivity and finite rupture propagation effects", es: "Efectos de directividad y propagación de ruptura finita", de: "Richtungs- und endliche Bruchausbreitungseffekte", nl: "Directiviteit en eindige breuk voortplantings effecten" },
        { en: "Attenuation effects only", es: "Solo efectos de atenuación", de: "Nur Dämpfungseffekte", nl: "Alleen dempings effecten" },
        { en: "Site amplification", es: "Amplificación del sitio", de: "Standortverstärkung", nl: "Site versterking" },
        { en: "Instrument response", es: "Respuesta del instrumento", de: "Instrumentenantwort", nl: "Instrument respons" }
      ],
      correct: 0,
      explanation: {
        en: "Spectral holes (nulls) in earthquake source spectra are created by destructive interference from finite rupture propagation and directivity effects. When rupture propagation creates phase differences between different parts of the fault, destructive interference occurs at specific frequencies, creating characteristic spectral notches that depend on rupture velocity and geometry.",
        es: "Los hoyos espectrales (nulos) en espectros de fuente de terremotos son creados por interferencia destructiva de propagación de ruptura finita y efectos de directividad. Cuando la propagación de ruptura crea diferencias de fase entre diferentes partes de la falla, interferencia destructiva ocurre en frecuencias específicas, creando muescas espectrales características que dependen de velocidad y geometría de ruptura.",
        de: "Spektrale Löcher (Nullstellen) in Erdbeben-Quellenspektren werden durch destruktive Interferenz von endlicher Bruchausbreitung und Richtungseffekten erzeugt. Wenn Bruchausbreitung Phasendifferenzen zwischen verschiedenen Teilen der Verwerfung erzeugt, tritt destruktive Interferenz bei spezifischen Frequenzen auf und erzeugt charakteristische spektrale Einschnitte, die von Bruchgeschwindigkeit und -geometrie abhängen.",
        nl: "Spectrale gaten (nullen) in aardbeving bron spectra worden gecreëerd door destructieve interferentie van eindige breuk voortplanting en directiviteit effecten. Wanneer breuk voortplanting fase verschillen creëert tussen verschillende delen van de breuk, treedt destructieve interferentie op bij specifieke frequenties, wat karakteristieke spectrale inkepingen creëert die afhangen van breuk snelheid en geometrie."
      }
    },
    {
      question: {
        en: "What determines the transition from Omori-law to power-law decay in aftershock sequences?",
        es: "¿Qué determina la transición de la ley de Omori a decaimiento de ley de potencias en secuencias de réplicas?",
        de: "Was bestimmt den Übergang vom Omori-Gesetz zu Potenzgesetz-Abfall in Nachbebensequenzen?",
        nl: "Wat bepaalt de overgang van Omori-wet naar macht-wet verval in naschok sequenties?"
      },
      options: [
        { en: "Time-dependent loading rate and stress redistribution", es: "Tasa de carga dependiente del tiempo y redistribución de esfuerzo", de: "Zeitabhängige Belastungsrate und Spannungsumverteilung", nl: "Tijd-afhankelijke belasting snelheid en spanning herverdeling" },
        { en: "Magnitude threshold only", es: "Solo umbral de magnitud", de: "Nur Magnitudenschwelle", nl: "Alleen magnitude drempelwaarde" },
        { en: "Detection capability changes", es: "Cambios en capacidad de detección", de: "Detektionsfähigkeitsänderungen", nl: "Detectie capaciteit veranderingen" },
        { en: "Seasonal effects", es: "Efectos estacionales", de: "Saisonale Effekte", nl: "Seizoensgebonden effecten" }
      ],
      correct: 0,
      explanation: {
        en: "The transition from Omori's modified law (n(t) ∝ (t+c)^-p) to power-law decay depends on evolving loading conditions and stress redistribution processes. Early aftershocks follow Omori decay due to stress relaxation, while later sequences may show different power-law exponents reflecting changing stress fields, viscoelastic relaxation, or secondary triggering mechanisms.",
        es: "La transición de la ley modificada de Omori (n(t) ∝ (t+c)^-p) a decaimiento de ley de potencias depende de condiciones de carga evolutivas y procesos de redistribución de esfuerzo. Las réplicas tempranas siguen decaimiento de Omori debido a relajación de esfuerzo, mientras que secuencias posteriores pueden mostrar diferentes exponentes de ley de potencias reflejando campos de esfuerzo cambiantes, relajación viscoelástica, o mecanismos de activación secundaria.",
        de: "Der Übergang vom modifizierten Omori-Gesetz (n(t) ∝ (t+c)^-p) zu Potenzgesetz-Abfall hängt von sich entwickelnden Belastungsbedingungen und Spannungsumverteilungsprozessen ab. Frühe Nachbeben folgen Omori-Abfall aufgrund von Spannungsrelaxation, während spätere Sequenzen verschiedene Potenzgesetz-Exponenten zeigen können, die sich ändernde Spannungsfelder, viskoelastische Relaxation oder sekundäre Auslösemechanismen widerspiegeln.",
        nl: "De overgang van Omori's gemodificeerde wet (n(t) ∝ (t+c)^-p) naar macht-wet verval hangt af van evoluerende belasting condities en spanning herverdeling processen. Vroege naschokken volgen Omori verval door spanning relaxatie, terwijl latere sequenties verschillende macht-wet exponenten kunnen tonen die veranderende spanning velden, viscoelastische relaxatie, of secundaire trigger mechanismen reflecteren."
      }
    },
    {
      question: {
        en: "What seismic analysis technique separates intrinsic and scattering attenuation contributions?",
        es: "¿Qué técnica de análisis sísmico separa contribuciones de atenuación intrínseca y de dispersión?",
        de: "Welche seismische Analysetechnik trennt intrinsische und Streuungsdämpfungsbeiträge?",
        nl: "Welke seismische analysetechniek scheidt intrinsieke en verstrooiings demping bijdragen?"
      },
      options: [
        { en: "Multiple scattering theory and energy flux analysis", es: "Teoría de dispersión múltiple y análisis de flujo de energía", de: "Mehrfachstreuungstheorie und Energieflussanalyse", nl: "Meervoudige verstrooiings theorie en energie flux analyse" },
        { en: "Simple Q measurements", es: "Mediciones Q simples", de: "Einfache Q-Messungen", nl: "Eenvoudige Q metingen" },
        { en: "Spectral ratio methods only", es: "Solo métodos de relación espectral", de: "Nur spektrale Verhältnismethoden", nl: "Alleen spectrale verhouding methoden" },
        { en: "Travel time analysis", es: "Análisis de tiempo de viaje", de: "Laufzeitanalyse", nl: "Reistijd analyse" }
      ],
      correct: 0,
      explanation: {
        en: "Multiple scattering theory with energy flux analysis separates intrinsic attenuation (anelastic absorption) from scattering attenuation (elastic scattering losses). The technique uses the diffusion approximation for multiply scattered waves to model energy transport, allowing independent estimation of Qi^-1 (intrinsic) and Qs^-1 (scattering) quality factors.",
        es: "La teoría de dispersión múltiple con análisis de flujo de energía separa atenuación intrínseca (absorción anelástica) de atenuación de dispersión (pérdidas de dispersión elástica). La técnica usa la aproximación de difusión para ondas múltiplemente dispersas para modelar transporte de energía, permitiendo estimación independiente de factores de calidad Qi^-1 (intrínseco) y Qs^-1 (dispersión).",
        de: "Mehrfachstreuungstheorie mit Energieflussanalyse trennt intrinsische Dämpfung (anelastische Absorption) von Streuungsdämpfung (elastische Streuverluste). Die Technik verwendet die Diffusionsapproximation für mehrfach gestreute Wellen zur Modellierung des Energietransports und ermöglicht unabhängige Schätzung von Qi^-1 (intrinsischen) und Qs^-1 (Streuungs-) Gütefaktoren.",
        nl: "Meervoudige verstrooiings theorie met energie flux analyse scheidt intrinsieke demping (anelastische absorptie) van verstrooiings demping (elastische verstrooiings verliezen). De techniek gebruikt de diffusie benadering voor meervoudig verstrooide golven om energie transport te modelleren, wat onafhankelijke schatting mogelijk maakt van Qi^-1 (intrinsieke) en Qs^-1 (verstrooiings) kwaliteitsfactoren."
      }
    },
    {
      question: {
        en: "What controls the generation of slow slip events on subduction zone interfaces?",
        es: "¿Qué controla la generación de eventos de deslizamiento lento en interfaces de zona de subducción?",
        de: "Was kontrolliert die Erzeugung langsamer Slip-Ereignisse an Subduktionszonenschnittstellen?",
        nl: "Wat controleert de generatie van langzame slip gebeurtenissen op subductie zone interfaces?"
      },
      options: [
        { en: "Fluid pressure and frictional stability transitions", es: "Presión de fluidos y transiciones de estabilidad friccional", de: "Fluiddruck und reibungsstabilitäts-Übergänge", nl: "Vloeistofdruk en wrijving stabiliteit overgangen" },
        { en: "Plate convergence rate only", es: "Solo tasa de convergencia de placas", de: "Nur Plattenkonvergenzrate", nl: "Alleen plaat convergentie snelheid" },
        { en: "Subduction angle only", es: "Solo ángulo de subducción", de: "Nur Subduktionswinkel", nl: "Alleen subductie hoek" },
        { en: "Slab age effects", es: "Efectos de edad de placa", de: "Plattealterseffekte", nl: "Slab leeftijd effecten" }
      ],
      correct: 0,
      explanation: {
        en: "Slow slip events are controlled by the interplay between elevated fluid pressure and frictional stability transitions along subduction interfaces. High pore fluid pressure reduces effective normal stress, promoting conditionally stable sliding. The transition between velocity-strengthening and velocity-weakening friction regimes defines zones where slow slip can occur.",
        es: "Los eventos de deslizamiento lento son controlados por la interacción entre presión de fluidos elevada y transiciones de estabilidad friccional a lo largo de interfaces de subducción. Alta presión de fluidos de poro reduce esfuerzo normal efectivo, promoviendo deslizamiento condicionalmente estable. La transición entre regímenes de fricción de fortalecimiento de velocidad y debilitamiento de velocidad define zonas donde puede ocurrir deslizamiento lento.",
        de: "Langsame Slip-Ereignisse werden durch das Zusammenspiel zwischen erhöhtem Fluiddruck und reibungsstabilitäts-Übergängen entlang Subduktionsschnittstellen kontrolliert. Hoher Porenflüssigkeitsdruck reduziert effektive Normalspannung und fördert bedingt stabiles Gleiten. Der Übergang zwischen geschwindigkeitsstärkenden und geschwindigkeitsschwächenden Reibungsregimen definiert Zonen, wo langsamer Slip auftreten kann.",
        nl: "Langzame slip gebeurtenissen worden gecontroleerd door het samenspel tussen verhoogde vloeistofdruk en wrijving stabiliteit overgangen langs subductie interfaces. Hoge porie vloeistofdruk vermindert effectieve normale spanning, wat conditioneel stabiele glijding bevordert. De overgang tussen snelheids-versterkende en snelheids-verzwakkende wrijving regimes definieert zones waar langzame slip kan voorkomen."
      }
    },
    {
      question: {
        en: "What seismic parameter characterizes the scaling break between small and large earthquakes?",
        es: "¿Qué parámetro sísmico caracteriza la ruptura de escala entre terremotos pequeños y grandes?",
        de: "Welcher seismische Parameter charakterisiert den Skalierungsbruch zwischen kleinen und großen Erdbeben?",
        nl: "Welke seismische parameter kenmerkt de schaal breuk tussen kleine en grote aardbevingen?"
      },
      options: [
        { en: "Critical seismogenic depth and stress drop saturation", es: "Profundidad sismogénica crítica y saturación de caída de esfuerzo", de: "Kritische seismogene Tiefe und Spannungsabfall-Sättigung", nl: "Kritieke seismogene diepte en spanning afname saturatie" },
        { en: "Magnitude threshold only", es: "Solo umbral de magnitud", de: "Nur Magnitudenschwelle", nl: "Alleen magnitude drempelwaarde" },
        { en: "Rupture velocity changes", es: "Cambios de velocidad de ruptura", de: "Bruchgeschwindigkeitsänderungen", nl: "Breuk snelheid veranderingen" },
        { en: "Frequency content variations", es: "Variaciones de contenido de frecuencia", de: "Frequenzinhaltsvariationen", nl: "Frequentie-inhoud variaties" }
      ],
      correct: 0,
      explanation: {
        en: "The scaling break around magnitude 6-7 is characterized by the transition from depth-limited to width-saturated ruptures when earthquakes reach the full seismogenic thickness. Small earthquakes scale with constant stress drop, while larger events maintain constant width (seismogenic depth) and scale in length, leading to apparent stress drop increases.",
        es: "La ruptura de escala alrededor de magnitud 6-7 se caracteriza por la transición de rupturas limitadas por profundidad a saturadas por ancho cuando los terremotos alcanzan el espesor sismogénico completo. Los terremotos pequeños escalan con caída de esfuerzo constante, mientras que eventos más grandes mantienen ancho constante (profundidad sismogénica) y escalan en longitud, llevando a aumentos aparentes de caída de esfuerzo.",
        de: "Der Skalierungsbruch um Magnitude 6-7 ist charakterisiert durch den Übergang von tiefenbegrenzten zu breitengesättigten Brüchen, wenn Erdbeben die volle seismogene Dicke erreichen. Kleine Erdbeben skalieren mit konstantem Spannungsabfall, während größere Ereignisse konstante Breite (seismogene Tiefe) beibehalten und in der Länge skalieren, was zu scheinbaren Spannungsabfallzunahmen führt.",
        nl: "De schaal breuk rond magnitude 6-7 wordt gekenmerkt door de overgang van diepte-beperkte naar breedte-verzadigde breuken wanneer aardbevingen de volledige seismogene dikte bereiken. Kleine aardbevingen schalen met constante spanning afname, terwijl grotere gebeurtenissen constante breedte (seismogene diepte) behouden en in lengte schalen, wat leidt tot schijnbare spanning afname toenames."
      }
    },
    {
      question: {
        en: "What physical process controls the generation of non-volcanic tremor in subduction zones?",
        es: "¿Qué proceso físico controla la generación de tremor no volcánico en zonas de subducción?",
        de: "Welcher physikalische Prozess kontrolliert die Erzeugung nicht-vulkanischer Tremor in Subduktionszonen?",
        nl: "Welk fysiek proces controleert de generatie van niet-vulkanische tremor in subductie zones?"
      },
      options: [
        { en: "Repeated stick-slip cycles and episodic tremor migration", es: "Ciclos repetidos de pegarse-deslizarse y migración episódica de tremor", de: "Wiederholte Haft-Gleit-Zyklen und episodische Tremor-Migration", nl: "Herhaalde plak-slip cycli en episodische tremor migratie" },
        { en: "Volcanic fluid circulation", es: "Circulación de fluidos volcánicos", de: "Vulkanische Flüssigkeitszirkulation", nl: "Vulkanische vloeistof circulatie" },
        { en: "Atmospheric pressure changes", es: "Cambios de presión atmosférica", de: "Atmosphärische Druckänderungen", nl: "Atmosferische druk veranderingen" },
        { en: "Tidal loading effects", es: "Efectos de carga de mareas", de: "Gezeitenbelastungseffekte", nl: "Getijde belasting effecten" }
      ],
      correct: 0,
      explanation: {
        en: "Non-volcanic tremor is generated by repeated stick-slip cycles of small fault patches that collectively produce sustained, low-frequency seismic radiation. These tremor sources migrate along the plate interface at rates of ~10 km/day, suggesting fluid-driven processes or slow slip events trigger cascading sequences of micro-earthquakes.",
        es: "El tremor no volcánico es generado por ciclos repetidos de pegarse-deslizarse de pequeños parches de falla que colectivamente producen radiación sísmica sostenida de baja frecuencia. Estas fuentes de tremor migran a lo largo de la interface de placas a tasas de ~10 km/día, sugiriendo que procesos impulsados por fluidos o eventos de deslizamiento lento activan secuencias en cascada de micro-terremotos.",
        de: "Nicht-vulkanischer Tremor wird durch wiederholte Haft-Gleit-Zyklen kleiner Verwerfungsflecken erzeugt, die kollektiv anhaltende, niederfrequente seismische Strahlung produzieren. Diese Tremor-Quellen migrieren entlang der Plattenschnittstelle mit Raten von ~10 km/Tag, was auf fluidgetriebene Prozesse oder langsame Slip-Ereignisse hindeutet, die kaskadierende Sequenzen von Mikro-Erdbeben auslösen.",
        nl: "Niet-vulkanische tremor wordt gegenereerd door herhaalde plak-slip cycli van kleine breuk plekken die collectief aanhoudende, lage-frequentie seismische straling produceren. Deze tremor bronnen migreren langs de plaat interface met snelheden van ~10 km/dag, wat suggereert dat vloeistof-gedreven processen of langzame slip gebeurtenissen cascaderende sequenties van micro-aardbevingen triggeren."
      }
    },
    {
      question: {
        en: "What determines the spectral shape of earthquake acceleration spectra at high frequencies?",
        es: "¿Qué determina la forma espectral de espectros de aceleración de terremotos en altas frecuencias?",
        de: "Was bestimmt die spektrale Form von Erdbeben-Beschleunigungsspektren bei hohen Frequenzen?",
        nl: "Wat bepaalt de spectrale vorm van aardbeving versnelling spectra bij hoge frequenties?"
      },
      options: [
        { en: "Kappa parameter and near-surface attenuation", es: "Parámetro kappa y atenuación cerca de la superficie", de: "Kappa-Parameter und oberflächennahe Dämpfung", nl: "Kappa parameter en nabij-oppervlak demping" },
        { en: "Source corner frequency only", es: "Solo frecuencia de esquina de fuente", de: "Nur Quell-Eckfrequenz", nl: "Alleen bron hoekfrequentie" },
        { en: "Path distance effects", es: "Efectos de distancia de trayectoria", de: "Pfadentfernungseffekte", nl: "Pad afstand effecten" },
        { en: "Instrument response", es: "Respuesta del instrumento", de: "Instrumentenantwort", nl: "Instrument respons" }
      ],
      correct: 0,
      explanation: {
        en: "The high-frequency spectral decay of acceleration spectra is controlled by the kappa parameter (κ), which represents near-surface attenuation. The characteristic exp(-πκf) decay reflects inelastic losses in the shallow crust, typically within the top few kilometers where high-frequency waves are preferentially attenuated by scattering and absorption.",
        es: "El decaimiento espectral de alta frecuencia de espectros de aceleración es controlado por el parámetro kappa (κ), que representa atenuación cerca de la superficie. El decaimiento característico exp(-πκf) refleja pérdidas inelásticas en la corteza superficial, típicamente dentro de los primeros kilómetros superiores donde ondas de alta frecuencia son preferencialmente atenuadas por dispersión y absorción.",
        de: "Der hochfrequente spektrale Abfall von Beschleunigungsspektren wird durch den Kappa-Parameter (κ) kontrolliert, der oberflächennahe Dämpfung repräsentiert. Der charakteristische exp(-πκf) Abfall reflektiert inelastische Verluste in der oberflächlichen Kruste, typischerweise innerhalb der oberen wenigen Kilometer, wo hochfrequente Wellen bevorzugt durch Streuung und Absorption gedämpft werden.",
        nl: "Het hoge-frequentie spectrale verval van versnelling spectra wordt gecontroleerd door de kappa parameter (κ), die nabij-oppervlak demping vertegenwoordigt. Het karakteristieke exp(-πκf) verval reflecteert inelastische verliezen in de ondiepe korst, meestal binnen de bovenste paar kilometers waar hoge-frequentie golven bij voorkeur worden gedempt door verstrooiing en absorptie."
      }
    },
    {
      question: {
        en: "What seismic phenomenon creates the characteristic frequency-dependent polarization of Rayleigh waves?",
        es: "¿Qué fenómeno sísmico crea la polarización característica dependiente de la frecuencia de ondas Rayleigh?",
        de: "Welches seismische Phänomen erzeugt die charakteristische frequenzabhängige Polarisation von Rayleigh-Wellen?",
        nl: "Welk seismisch fenomeen creëert de karakteristieke frequentie-afhankelijke polarisatie van Rayleigh-golven?"
      },
      options: [
        { en: "Depth-dependent velocity structure and ellipticity variations", es: "Estructura de velocidad dependiente de la profundidad y variaciones de elipticidad", de: "Tiefenabhängige Geschwindigkeitsstruktur und Elliptizitätsvariationen", nl: "Diepte-afhankelijke snelheidsstructuur en ellipticiteit variaties" },
        { en: "Source mechanism only", es: "Solo mecanismo de fuente", de: "Nur Quellenmechanismus", nl: "Alleen bronmechanisme" },
        { en: "Attenuation effects", es: "Efectos de atenuación", de: "Dämpfungseffekte", nl: "Dempings effecten" },
        { en: "Scattering processes", es: "Procesos de dispersión", de: "Streuungsprozesse", nl: "Verstrooiingsprocessen" }
      ],
      correct: 0,
      explanation: {
        en: "Frequency-dependent Rayleigh wave polarization is controlled by depth-dependent velocity structure, which different frequencies sample to different depths. The ellipticity (H/V ratio) and polarization direction change with frequency as longer-period waves sense deeper structure with different elastic properties, creating characteristic polarization curves used for inversion.",
        es: "La polarización de ondas Rayleigh dependiente de la frecuencia es controlada por estructura de velocidad dependiente de la profundidad, que diferentes frecuencias muestrean a diferentes profundidades. La elipticidad (relación H/V) y dirección de polarización cambian con frecuencia conforme ondas de período más largo detectan estructura más profunda con diferentes propiedades elásticas, creando curvas de polarización características usadas para inversión.",
        de: "Frequenzabhängige Rayleigh-Wellen-Polarisation wird durch tiefenabhängige Geschwindigkeitsstruktur kontrolliert, die verschiedene Frequenzen in verschiedenen Tiefen abtasten. Die Elliptizität (H/V-Verhältnis) und Polarisationsrichtung ändern sich mit der Frequenz, da längere Perioden-Wellen tiefere Struktur mit verschiedenen elastischen Eigenschaften erfassen und charakteristische Polarisationskurven für Inversion erzeugen.",
        nl: "Frequentie-afhankelijke Rayleigh golf polarisatie wordt gecontroleerd door diepte-afhankelijke snelheidsstructuur, die verschillende frequenties bemonsteren tot verschillende diepten. De ellipticiteit (H/V verhouding) en polarisatie richting veranderen met frequentie omdat langere-periode golven diepere structuur met verschillende elastische eigenschappen waarnemen, wat karakteristieke polarisatie curves creëert die gebruikt worden voor inversie."
      }
    },
    {
      question: {
        en: "What controls the rupture velocity during earthquake propagation along fault segments?",
        es: "¿Qué controla la velocidad de ruptura durante propagación de terremotos a lo largo de segmentos de falla?",
        de: "Was kontrolliert die Bruchgeschwindigkeit während Erdbebenausbreitung entlang Verwerfungssegmenten?",
        nl: "Wat controleert de breuk snelheid tijdens aardbeving voortplanting langs breuk segmenten?"
      },
      options: [
        { en: "Local stress conditions and fault zone properties", es: "Condiciones de esfuerzo local y propiedades de zona de falla", de: "Lokale Spannungsbedingungen und Verwerfungszoneneigenschaften", nl: "Lokale spanning condities en breukzone eigenschappen" },
        { en: "Regional geology only", es: "Solo geología regional", de: "Nur regionale Geologie", nl: "Alleen regionale geologie" },
        { en: "Earthquake magnitude", es: "Magnitud del terremoto", de: "Erdbebenmagnitude", nl: "Aardbevings magnitude" },
        { en: "Distance from epicenter", es: "Distancia del epicentro", de: "Entfernung vom Epizentrum", nl: "Afstand van epicentrum" }
      ],
      correct: 0,
      explanation: {
        en: "Rupture velocity is controlled by the ratio of local shear stress to dynamic stress drop and fault zone material properties. Higher stress ratios promote faster rupture, while fault zone damage, off-fault yielding, and geometric complexities can slow propagation. Rupture can accelerate through barriers and decelerate in low-stress zones.",
        es: "La velocidad de ruptura es controlada por la relación de esfuerzo de corte local a caída de esfuerzo dinámico y propiedades de material de zona de falla. Relaciones de esfuerzo más altas promueven ruptura más rápida, mientras que daño de zona de falla, cedencia fuera de falla, y complejidades geométricas pueden retardar propagación. La ruptura puede acelerar a través de barreras y desacelerar en zonas de bajo esfuerzo.",
        de: "Bruchgeschwindigkeit wird durch das Verhältnis lokaler Scherspannung zu dynamischem Spannungsabfall und Verwerfungszonenmaterial-Eigenschaften kontrolliert. Höhere Spannungsverhältnisse fördern schnelleren Bruch, während Verwerfungszonenschäden, außer-Verwerfungs-Fließen und geometrische Komplexitäten die Ausbreitung verlangsamen können. Bruch kann durch Barrieren beschleunigen und in niedrigen Spannungszonen abbremsen.",
        nl: "Breuk snelheid wordt gecontroleerd door de verhouding van lokale schuifspanning tot dynamische spanning afname en breukzone materiaal eigenschappen. Hogere spanning verhoudingen bevorderen snellere breuk, terwijl breukzone schade, buiten-breuk vloeien, en geometrische complexiteiten voortplanting kunnen vertragen. Breuk kan versnellen door barrières en vertragen in lage-spanning zones."
      }
    },
    {
      question: {
        en: "What seismic parameter quantifies the self-similarity properties of earthquake fault systems?",
        es: "¿Qué parámetro sísmico cuantifica las propiedades de auto-similitud de sistemas de falla de terremotos?",
        de: "Welcher seismische Parameter quantifiziert die Selbstähnlichkeitseigenschaften von Erdbeben-Verwerfungssystemen?",
        nl: "Welke seismische parameter kwantificeert de zelf-gelijkenis eigenschappen van aardbeving breuksystemen?"
      },
      options: [
        { en: "Fractal dimension and correlation length scaling", es: "Dimensión fractal y escalamiento de longitud de correlación", de: "Fraktale Dimension und Korrelationslängen-Skalierung", nl: "Fractale dimensie en correlatie lengte schaling" },
        { en: "Linear scaling coefficients", es: "Coeficientes de escalamiento lineal", de: "Lineare Skalierungskoeffizienten", nl: "Lineaire schaal coëfficiënten" },
        { en: "Average fault length", es: "Longitud promedio de falla", de: "Durchschnittliche Verwerfungslänge", nl: "Gemiddelde breuk lengte" },
        { en: "Maximum displacement values", es: "Valores máximos de desplazamiento", de: "Maximale Verschiebungswerte", nl: "Maximum verplaatsings waarden" }
      ],
      correct: 0,
      explanation: {
        en: "Fractal dimension (D ≈ 1.6-2.0) quantifies the self-similar scaling properties of fault networks and earthquake distributions. The correlation length scaling describes how spatial correlations in fault systems change with scale, revealing whether systems exhibit statistical self-similarity across different magnitude ranges and spatial scales.",
        es: "La dimensión fractal (D ≈ 1.6-2.0) cuantifica las propiedades de escalamiento auto-similares de redes de fallas y distribuciones de terremotos. El escalamiento de longitud de correlación describe cómo correlaciones espaciales en sistemas de falla cambian con escala, revelando si sistemas exhiben auto-similitud estadística a través de diferentes rangos de magnitud y escalas espaciales.",
        de: "Fraktale Dimension (D ≈ 1,6-2,0) quantifiziert die selbstähnlichen Skalierungseigenschaften von Verwerfungsnetzwerken und Erdbebenverteilungen. Die Korrelationslängen-Skalierung beschreibt, wie räumliche Korrelationen in Verwerfungssystemen sich mit der Skala ändern und zeigt, ob Systeme statistische Selbstähnlichkeit über verschiedene Magnitudenbereiche und räumliche Skalen aufweisen.",
        nl: "Fractale dimensie (D ≈ 1,6-2,0) kwantificeert de zelf-gelijkaardige schaal eigenschappen van breuknetwerken en aardbeving distributies. De correlatie lengte schaling beschrijft hoe ruimtelijke correlaties in breuksystemen veranderen met schaal, wat onthult of systemen statistische zelf-gelijkenis vertonen over verschillende magnitude bereiken en ruimtelijke schalen."
      }
    },
    {
      question: {
        en: "What determines the complexity of earthquake slip distributions on fault planes?",
        es: "¿Qué determina la complejidad de distribuciones de deslizamiento de terremotos en planos de falla?",
        de: "Was bestimmt die Komplexität von Erdbeben-Slip-Verteilungen auf Verwerfungsebenen?",
        nl: "Wat bepaalt de complexiteit van aardbeving slip distributies op breukvlakken?"
      },
      options: [
        { en: "Fault zone heterogeneity and stress field complexity", es: "Heterogeneidad de zona de falla y complejidad de campo de esfuerzo", de: "Verwerfungszonenheterogenität und Spannungsfeld-Komplexität", nl: "Breukzone heterogeniteit en spanning veld complexiteit" },
        { en: "Earthquake magnitude only", es: "Solo magnitud del terremoto", de: "Nur Erdbebenmagnitude", nl: "Alleen aardbevings magnitude" },
        { en: "Rupture depth only", es: "Solo profundidad de ruptura", de: "Nur Bruchtiefe", nl: "Alleen breuk diepte" },
        { en: "Regional seismicity rates", es: "Tasas de sismicidad regional", de: "Regionale Seismizitätsraten", nl: "Regionale seismiciteit snelheden" }
      ],
      correct: 0,
      explanation: {
        en: "Slip distribution complexity reflects the heterogeneous structure of fault zones and stress fields. Pre-existing damage zones, strength variations, geometric irregularities, and stress concentrations create a complex pattern of asperities and barriers that control where and how much slip occurs during rupture, leading to highly heterogeneous slip patterns.",
        es: "La complejidad de distribución de deslizamiento refleja la estructura heterogénea de zonas de falla y campos de esfuerzo. Zonas de daño preexistentes, variaciones de resistencia, irregularidades geométricas y concentraciones de esfuerzo crean un patrón complejo de asperezas y barreras que controlan dónde y cuánto deslizamiento ocurre durante ruptura, llevando a patrones de deslizamiento altamente heterogéneos.",
        de: "Slip-Verteilungskomplexität reflektiert die heterogene Struktur von Verwerfungszonen und Spannungsfeldern. Vorbestehende Schadenszonen, Festigkeitsvariationen, geometrische Unregelmäßigkeiten und Spannungskonzentrationen erzeugen ein komplexes Muster von Asperitäten und Barrieren, die kontrollieren, wo und wieviel Slip während Bruch auftritt und führen zu hochheterogenen Slip-Mustern.",
        nl: "Slip distributie complexiteit reflecteert de heterogene structuur van breukzones en spanningsvelden. Bestaande schade zones, sterkte variaties, geometrische onregelmatigheden, en spanning concentraties creëren een complex patroon van asperiteiten en barrières die controleren waar en hoeveel slip optreedt tijdens breuk, wat leidt tot zeer heterogene slip patronen."
      }
    },
    {
      question: {
        en: "What seismic wave characteristic enables discrimination between explosion and earthquake sources?",
        es: "¿Qué característica de ondas sísmicas permite discriminación entre fuentes de explosión y terremoto?",
        de: "Welches seismische Wellencharakteristikum ermöglicht Diskriminierung zwischen Explosions- und Erdbebenquellen?",
        nl: "Welke seismische golf karakteristiek maakt discriminatie tussen explosie en aardbeving bronnen mogelijk?"
      },
      options: [
        { en: "P/S wave amplitude ratios and surface wave generation efficiency", es: "Relaciones de amplitud de ondas P/S y eficiencia de generación de ondas superficiales", de: "P/S-Wellen-Amplitudenverhältnisse und Oberflächenwellen-Erzeugungseffizienz", nl: "P/S golf amplitude verhoudingen en oppervlaktegolf generatie efficiëntie" },
        { en: "Frequency content only", es: "Solo contenido de frecuencia", de: "Nur Frequenzinhalt", nl: "Alleen frequentie-inhoud" },
        { en: "Signal duration", es: "Duración de señal", de: "Signaldauer", nl: "Signaal duur" },
        { en: "Peak amplitude values", es: "Valores de amplitud pico", de: "Spitzenamplitudenwerte", nl: "Piek amplitude waarden" }
      ],
      correct: 0,
      explanation: {
        en: "Explosions generate predominantly P-wave energy with high P/S amplitude ratios and weak surface wave generation, while earthquakes produce balanced P and S waves with strong surface wave generation. The isotropic expansion from explosions creates different radiation patterns compared to the double-couple mechanisms of tectonic earthquakes.",
        es: "Las explosiones generan energía predominantemente de ondas P con altas relaciones de amplitud P/S y generación débil de ondas superficiales, mientras que terremotos producen ondas P y S balanceadas con generación fuerte de ondas superficiales. La expansión isotrópica de explosiones crea patrones de radiación diferentes comparados con los mecanismos de doble par de terremotos tectónicos.",
        de: "Explosionen erzeugen überwiegend P-Wellen-Energie mit hohen P/S-Amplitudenverhältnissen und schwacher Oberflächenwellen-Erzeugung, während Erdbeben ausgeglichene P- und S-Wellen mit starker Oberflächenwellen-Erzeugung produzieren. Die isotrope Expansion von Explosionen erzeugt verschiedene Strahlungsmuster verglichen mit den Doppelpaar-Mechanismen tektonischer Erdbeben.",
        nl: "Explosies genereren voornamelijk P-golf energie met hoge P/S amplitude verhoudingen en zwakke oppervlaktegolf generatie, terwijl aardbevingen gebalanceerde P en S golven produceren met sterke oppervlaktegolf generatie. De isotrope expansie van explosies creëert verschillende stralingspatronen vergeleken met de dubbel-koppel mechanismen van tectonische aardbevingen."
      }
    },
    {
      question: {
        en: "What controls the propagation characteristics of guided waves in sedimentary basins?",
        es: "¿Qué controla las características de propagación de ondas guiadas en cuencas sedimentarias?",
        de: "Was kontrolliert die Ausbreitungscharakteristika geführter Wellen in sedimentären Becken?",
        nl: "Wat controleert de voortplantings karakteristieken van geleide golven in sedimentaire bekkens?"
      },
      options: [
        { en: "Basin geometry and velocity contrast with basement", es: "Geometría de cuenca y contraste de velocidad con basamento", de: "Beckengeometrie und Geschwindigkeitskontrast mit Grundgebirge", nl: "Bekken geometrie en snelheids contrast met basement" },
        { en: "Source location only", es: "Solo ubicación de fuente", de: "Nur Quellenposition", nl: "Alleen bronlocatie" },
        { en: "Recording distance", es: "Distancia de registro", de: "Aufzeichnungsentfernung", nl: "Opname afstand" },
        { en: "Seasonal variations", es: "Variaciones estacionales", de: "Saisonale Variationen", nl: "Seizoens variaties" }
      ],
      correct: 0,
      explanation: {
        en: "Guided wave propagation in sedimentary basins is controlled by the basin geometry (depth, shape) and velocity contrast between low-velocity sediments and high-velocity basement rocks. These trapped waves exhibit dispersive characteristics, with longer wavelengths penetrating deeper and experiencing different effective velocities, creating complex wavetrains that can cause prolonged shaking.",
        es: "La propagación de ondas guiadas en cuencas sedimentarias es controlada por geometría de cuenca (profundidad, forma) y contraste de velocidad entre sedimentos de baja velocidad y rocas de basamento de alta velocidad. Estas ondas atrapadas exhiben características dispersivas, con longitudes de onda más largas penetrando más profundo y experimentando diferentes velocidades efectivas, creando trenes de ondas complejos que pueden causar agitación prolongada.",
        de: "Geführte Wellenausbreitung in sedimentären Becken wird durch Beckengeometrie (Tiefe, Form) und Geschwindigkeitskontrast zwischen niedriggeschwindigkeits-Sedimenten und hochgeschwindigkeits-Grundgebirgsgesteinen kontrolliert. Diese eingeschlossenen Wellen zeigen dispersive Charakteristika, wobei längere Wellenlängen tiefer eindringen und verschiedene effektive Geschwindigkeiten erfahren, was komplexe Wellenzüge erzeugt, die verlängerte Erschütterungen verursachen können.",
        nl: "Geleide golf voortplanting in sedimentaire bekkens wordt gecontroleerd door bekken geometrie (diepte, vorm) en snelheidscontrast tussen lage-snelheid sedimenten en hoge-snelheid basement rotsen. Deze gevangen golven vertonen dispersieve karakteristieken, waarbij langere golflengtes dieper doordringen en verschillende effectieve snelheden ervaren, wat complexe golftrepen creëert die verlengde trillingen kunnen veroorzaken."
      }
    },
    {
      question: {
        en: "What seismic parameter characterizes the temporal evolution of earthquake swarm activity?",
        es: "¿Qué parámetro sísmico caracteriza la evolución temporal de actividad de enjambre de terremotos?",
        de: "Welcher seismische Parameter charakterisiert die zeitliche Entwicklung von Erdbebenschwarm-Aktivität?",
        nl: "Welke seismische parameter kenmerkt de temporele evolutie van aardbeving zwerm activiteit?"
      },
      options: [
        { en: "Interevent time distribution and clustering coefficient", es: "Distribución de tiempo entre eventos y coeficiente de agrupamiento", de: "Zwischenereigniszeit-Verteilung und Clusterkoeffizient", nl: "Inter-gebeurtenis tijd distributie en clustering coëfficiënt" },
        { en: "Maximum magnitude only", es: "Solo magnitud máxima", de: "Nur maximale Magnitude", nl: "Alleen maximum magnitude" },
        { en: "Total event count", es: "Conteo total de eventos", de: "Gesamtereigniszahl", nl: "Totale gebeurtenis telling" },
        { en: "Spatial extent only", es: "Solo extensión espacial", de: "Nur räumliche Ausdehnung", nl: "Alleen ruimtelijke uitbreiding" }
      ],
      correct: 0,
      explanation: {
        en: "Earthquake swarm temporal evolution is characterized by interevent time distributions that often deviate from Poissonian (exponential) behavior, showing power-law or gamma distributions. The clustering coefficient quantifies temporal clustering strength, revealing whether swarms exhibit memory effects, burst-like behavior, or gradual evolution patterns.",
        es: "La evolución temporal de enjambres de terremotos se caracteriza por distribuciones de tiempo entre eventos que a menudo se desvían del comportamiento poisoniano (exponencial), mostrando distribuciones de ley de potencias o gamma. El coeficiente de agrupamiento cuantifica fuerza de agrupamiento temporal, revelando si enjambres exhiben efectos de memoria, comportamiento de ráfaga, o patrones de evolución gradual.",
        de: "Erdbebenschwarm-zeitliche Entwicklung ist durch Zwischenereigniszeit-Verteilungen charakterisiert, die oft vom Poissonschen (exponentiellen) Verhalten abweichen und Potenzgesetz- oder Gamma-Verteilungen zeigen. Der Clusterkoeffizient quantifiziert zeitliche Clusterstärke und zeigt, ob Schwärme Gedächtniseffekte, explosionsartiges Verhalten oder graduelle Evolutionsmuster aufweisen.",
        nl: "Aardbeving zwerm temporele evolutie wordt gekenmerkt door inter-gebeurtenis tijd distributies die vaak afwijken van Poissoniaans (exponentieel) gedrag, wat macht-wet of gamma distributies toont. De clustering coëfficiënt kwantificeert temporele clustering sterkte, wat onthult of zwermen geheugen effecten, uitbarsting-achtig gedrag, of geleidelijke evolutie patronen vertonen."
      }
    },
    {
      question: {
        en: "What physical mechanism generates the characteristic P-wave velocity anisotropy in crystalline rocks?",
        es: "¿Qué mecanismo físico genera la anisotropía característica de velocidad de ondas P en rocas cristalinas?",
        de: "Welcher physikalische Mechanismus erzeugt die charakteristische P-Wellen-Geschwindigkeits-Anisotropie in kristallinen Gesteinen?",
        nl: "Welk fysiek mechanisme genereert de karakteristieke P-golf snelheid anisotropie in kristallijne rotsen?"
      },
      options: [
        { en: "Crystallographic preferred orientation and elastic tensor symmetry", es: "Orientación cristalográfica preferida y simetría del tensor elástico", de: "Kristallographische Vorzugsorientierung und elastische Tensor-Symmetrie", nl: "Kristallografische geprefereerde oriëntatie en elastische tensor symmetrie" },
        { en: "Fracture density only", es: "Solo densidad de fracturas", de: "Nur Bruchdichte", nl: "Alleen breuk dichtheid" },
        { en: "Porosity variations", es: "Variaciones de porosidad", de: "Porositätsvariationen", nl: "Porositeit variaties" },
        { en: "Fluid saturation effects", es: "Efectos de saturación de fluidos", de: "Flüssigkeitssättigungseffekte", nl: "Vloeistof verzadiging effecten" }
      ],
      correct: 0,
      explanation: {
        en: "P-wave velocity anisotropy in crystalline rocks is primarily controlled by crystallographic preferred orientation (CPO) of constituent minerals and their elastic tensor symmetry. The alignment of anisotropic mineral crystals (like olivine, pyroxene) creates directional variations in elastic moduli, resulting in faster P-wave propagation parallel to the preferred crystallographic axes.",
        es: "La anisotropía de velocidad de ondas P en rocas cristalinas es controlada principalmente por orientación cristalográfica preferida (CPO) de minerales constituyentes y su simetría de tensor elástico. La alineación de cristales minerales anisotrópicos (como olivino, piroxeno) crea variaciones direccionales en módulos elásticos, resultando en propagación de ondas P más rápida paralela a los ejes cristalográficos preferidos.",
        de: "P-Wellen-Geschwindigkeits-Anisotropie in kristallinen Gesteinen wird hauptsächlich durch kristallographische Vorzugsorientierung (CPO) der Bestandsminerale und ihre elastische Tensor-Symmetrie kontrolliert. Die Ausrichtung anisotroper Mineralkristalle (wie Olivin, Pyroxen) erzeugt richtungsabhängige Variationen in elastischen Moduln, was zu schnellerer P-Wellen-Ausbreitung parallel zu bevorzugten kristallographischen Achsen führt.",
        nl: "P-golf snelheid anisotropie in kristallijne rotsen wordt primair gecontroleerd door kristallografische geprefereerde oriëntatie (CPO) van samenstellende mineralen en hun elastische tensor symmetrie. De uitlijning van anisotrope mineraal kristallen (zoals olivijn, pyroxeen) creëert directionele variaties in elastische moduli, wat resulteert in snellere P-golf voortplanting parallel aan de geprefereerde kristallografische assen."
      }
    },
    {
      question: {
        en: "What determines the efficiency of seismic energy transmission across fault zone interfaces?",
        es: "¿Qué determina la eficiencia de transmisión de energía sísmica a través de interfaces de zona de falla?",
        de: "Was bestimmt die Effizienz seismischer Energieübertragung über Verwerfungszonen-Schnittstellen?",
        nl: "Wat bepaalt de efficiëntie van seismische energie transmissie over breukzone interfaces?"
      },
      options: [
        { en: "Impedance contrast and interface roughness", es: "Contraste de impedancia y rugosidad de interface", de: "Impedanzkontrast und Grenzflächenrauheit", nl: "Impedantie contrast en interface ruwheid" },
        { en: "Fault dip angle only", es: "Solo ángulo de buzamiento de falla", de: "Nur Verwerfungseinfallswinkel", nl: "Alleen breuk hellingshoek" },
        { en: "Regional stress field", es: "Campo de esfuerzo regional", de: "Regionales Spannungsfeld", nl: "Regionaal spanningsveld" },
        { en: "Tectonic setting", es: "Ambiente tectónico", de: "Tektonische Umgebung", nl: "Tectonische omgeving" }
      ],
      correct: 0,
      explanation: {
        en: "Seismic energy transmission across fault zones is controlled by impedance contrast (ρVp differences) and interface roughness. Large impedance contrasts create strong reflections and reduced transmission, while smooth interfaces promote specular reflection. Rough interfaces cause scattering that can enhance or reduce transmission depending on wavelength-to-roughness ratios.",
        es: "La transmisión de energía sísmica a través de zonas de falla es controlada por contraste de impedancia (diferencias ρVp) y rugosidad de interface. Contrastes de impedancia grandes crean reflexiones fuertes y transmisión reducida, mientras que interfaces suaves promueven reflexión especular. Interfaces rugosas causan dispersión que puede mejorar o reducir transmisión dependiendo de relaciones longitud de onda-a-rugosidad.",
        de: "Seismische Energieübertragung über Verwerfungszonen wird durch Impedanzkontrast (ρVp-Differenzen) und Grenzflächenrauheit kontrolliert. Große Impedanzkontraste erzeugen starke Reflexionen und reduzierte Übertragung, während glatte Grenzflächen spekulare Reflexion fördern. Raue Grenzflächen verursachen Streuung, die Übertragung je nach Wellenlänge-zu-Rauheit-Verhältnissen verstärken oder reduzieren kann.",
        nl: "Seismische energie transmissie over breukzones wordt gecontroleerd door impedantie contrast (ρVp verschillen) en interface ruwheid. Grote impedantie contrasten creëren sterke reflecties en verminderde transmissie, terwijl gladde interfaces speculaire reflectie bevorderen. Ruwe interfaces veroorzaken verstrooiing die transmissie kan versterken of verminderen afhankelijk van golflengte-tot-ruwheid verhoudingen."
      }
    },
    {
      question: {
        en: "What seismic phenomenon creates the observed amplitude variations in teleseismic P-wave arrivals?",
        es: "¿Qué fenómeno sísmico crea las variaciones de amplitud observadas en llegadas de ondas P telesísmicas?",
        de: "Welches seismische Phänomen erzeugt die beobachteten Amplitudenvariationen in teleseismischen P-Wellen-Ankunftszeiten?",
        nl: "Welk seismisch fenomeen creëert de waargenomen amplitude variaties in teleseismische P-golf aankomsten?"
      },
      options: [
        { en: "Core-mantle boundary interactions and mantle heterogeneity", es: "Interacciones de límite núcleo-manto y heterogeneidad del manto", de: "Kern-Mantel-Grenz-Wechselwirkungen und Mantelheterogenität", nl: "Kern-mantel grens interacties en mantel heterogeniteit" },
        { en: "Surface topography only", es: "Solo topografía superficial", de: "Nur Oberflächentopographie", nl: "Alleen oppervlakte topografie" },
        { en: "Instrument calibration", es: "Calibración del instrumento", de: "Instrumentkalibrierung", nl: "Instrument kalibratie" },
        { en: "Local site effects", es: "Efectos de sitio local", de: "Lokale Standorteffekte", nl: "Lokale site effecten" }
      ],
      correct: 0,
      explanation: {
        en: "Teleseismic P-wave amplitude variations are primarily caused by core-mantle boundary (CMB) interactions and mantle heterogeneity along the ray path. The CMB creates complex wave conversions and focusing/defocusing effects, while velocity heterogeneities in the mantle cause focusing, scattering, and multipathing that systematically varies with azimuth and epicentral distance.",
        es: "Las variaciones de amplitud de ondas P telesísmicas son causadas principalmente por interacciones de límite núcleo-manto (CMB) y heterogeneidad del manto a lo largo de la trayectoria del rayo. El CMB crea conversiones de ondas complejas y efectos de enfoque/desenfoque, mientras que heterogeneidades de velocidad en el manto causan enfoque, dispersión y trayectorias múltiples que varían sistemáticamente con azimut y distancia epicentral.",
        de: "Teleseismische P-Wellen-Amplitudenvariationen werden hauptsächlich durch Kern-Mantel-Grenz (CMB) Wechselwirkungen und Mantelheterogenität entlang des Strahlpfads verursacht. Die CMB erzeugt komplexe Wellenumwandlungen und Fokussier-/Defokussiereffekte, während Geschwindigkeitsheterogenitäten im Mantel Fokussierung, Streuung und Mehrfachpfade verursachen, die systematisch mit Azimut und Epizentralentfernung variieren.",
        nl: "Teleseismische P-golf amplitude variaties worden primair veroorzaakt door kern-mantel grens (CMB) interacties en mantel heterogeniteit langs het straalpad. De CMB creëert complexe golf conversies en focus/defocus effecten, terwijl snelheid heterogeniteiten in de mantel focus, verstrooiing, en meerdere paden veroorzaken die systematisch variëren met azimut en epicentrale afstand."
      }
    },
    {
      question: {
        en: "What controls the development of earthquake-induced landslide susceptibility patterns?",
        es: "¿Qué controla el desarrollo de patrones de susceptibilidad de deslizamiento inducido por terremotos?",
        de: "Was kontrolliert die Entwicklung erdbebeninduzierter Erdrutsch-Suszeptibilitätsmuster?",
        nl: "Wat controleert de ontwikkeling van aardbeving-geïnduceerde landslide gevoeligheids patronen?"
      },
      options: [
        { en: "Topographic amplification and slope stability conditions", es: "Amplificación topográfica y condiciones de estabilidad de pendiente", de: "Topographische Verstärkung und Hangstabilitätsbedingungen", nl: "Topografische versterking en helling stabiliteit condities" },
        { en: "Earthquake magnitude only", es: "Solo magnitud del terremoto", de: "Nur Erdbebenmagnitude", nl: "Alleen aardbevings magnitude" },
        { en: "Distance from fault only", es: "Solo distancia de falla", de: "Nur Verwerfungsentfernung", nl: "Alleen afstand van breuk" },
        { en: "Regional geology only", es: "Solo geología regional", de: "Nur regionale Geologie", nl: "Alleen regionale geologie" }
      ],
      correct: 0,
      explanation: {
        en: "Earthquake-induced landslide susceptibility is controlled by topographic amplification of seismic waves and pre-existing slope stability conditions. Ridges and convex slopes amplify ground motion, while factors like slope angle, material strength, groundwater conditions, and weathering degree determine the critical acceleration threshold for slope failure.",
        es: "La susceptibilidad de deslizamientos inducidos por terremotos es controlada por amplificación topográfica de ondas sísmicas y condiciones preexistentes de estabilidad de pendiente. Crestas y pendientes convexas amplifican movimiento del suelo, mientras que factores como ángulo de pendiente, resistencia del material, condiciones de agua subterránea, y grado de meteorización determinan el umbral de aceleración crítica para falla de pendiente.",
        de: "Erdbebeninduzierte Erdrutsch-Suszeptibilität wird durch topographische Verstärkung seismischer Wellen und vorbestehende Hangstabilitätsbedingungen kontrolliert. Grate und konvexe Hänge verstärken Bodenbewegung, während Faktoren wie Hangwinkel, Materialfestigkeit, Grundwasserbedingungen und Verwitterungsgrad die kritische Beschleunigungsschwelle für Hangversagen bestimmen.",
        nl: "Aardbeving-geïnduceerde landslide gevoeligheid wordt gecontroleerd door topografische versterking van seismische golven en bestaande helling stabiliteit condities. Ruggen en convexe hellingen versterken grondbeweging, terwijl factoren zoals hellinghoek, materiaal sterkte, grondwater condities, en verwering graad de kritieke versnelling drempel voor helling faling bepalen."
      }
    },
    {
      question: {
        en: "What seismic parameter characterizes the efficiency of earthquake stress triggering processes?",
        es: "¿Qué parámetro sísmico caracteriza la eficiencia de procesos de activación de esfuerzo de terremotos?",
        de: "Welcher seismische Parameter charakterisiert die Effizienz erdbebeninduzierter Spannungsauslöseprozesse?",
        nl: "Welke seismische parameter kenmerkt de efficiëntie van aardbeving spanning trigger processen?"
      },
      options: [
        { en: "Coulomb stress transfer efficiency and triggering distance", es: "Eficiencia de transferencia de esfuerzo de Coulomb y distancia de activación", de: "Coulomb-Spannungsübertragungseffizienz und Auslöseentfernung", nl: "Coulomb spanning overdracht efficiëntie en trigger afstand" },
        { en: "Simple distance measurements", es: "Mediciones de distancia simples", de: "Einfache Entfernungsmessungen", nl: "Eenvoudige afstand metingen" },
        { en: "Magnitude differences only", es: "Solo diferencias de magnitud", de: "Nur Magnitudenunterschiede", nl: "Alleen magnitude verschillen" },
        { en: "Temporal separation", es: "Separación temporal", de: "Zeitliche Trennung", nl: "Temporele scheiding" }
      ],
      correct: 0,
      explanation: {
        en: "Coulomb stress transfer efficiency quantifies how effectively earthquakes trigger subsequent events through static stress changes. The triggering distance (typically 1-3 fault lengths) and stress transfer coefficient determine the spatial extent and magnitude of triggering effects. Positive Coulomb stress changes promote failure, while negative changes create stress shadows.",
        es: "La eficiencia de transferencia de esfuerzo de Coulomb cuantifica cuán efectivamente terremotos activan eventos subsecuentes a través de cambios de esfuerzo estático. La distancia de activación (típicamente 1-3 longitudes de falla) y coeficiente de transferencia de esfuerzo determinan extensión espacial y magnitud de efectos de activación. Cambios positivos de esfuerzo de Coulomb promueven falla, mientras que cambios negativos crean sombras de esfuerzo.",
        de: "Coulomb-Spannungsübertragungseffizienz quantifiziert, wie effektiv Erdbeben nachfolgende Ereignisse durch statische Spannungsänderungen auslösen. Die Auslöseentfernung (typisch 1-3 Verwerfungslängen) und Spannungsübertragungskoeffizient bestimmen räumliche Ausdehnung und Größe der Auslöseeffekte. Positive Coulomb-Spannungsänderungen fördern Versagen, während negative Änderungen Spannungsschatten erzeugen.",
        nl: "Coulomb spanning overdracht efficiëntie kwantificeert hoe effectief aardbevingen volgende gebeurtenissen triggeren door statische spanning veranderingen. De trigger afstand (meestal 1-3 breuk lengtes) en spanning overdracht coëfficiënt bepalen de ruimtelijke uitbreiding en magnitude van trigger effecten. Positieve Coulomb spanning veranderingen bevorderen faling, terwijl negatieve veranderingen spanning schaduwen creëren."
      }
    },
    {
      question: {
        en: "What physical mechanism controls the generation of earthquake precursory signals?",
        es: "¿Qué mecanismo físico controla la generación de señales precursoras de terremotos?",
        de: "Welcher physikalische Mechanismus kontrolliert die Erzeugung von Erdbebenvorläufersignalen?",
        nl: "Welk fysiek mechanisme controleert de generatie van aardbeving voorbode signalen?"
      },
      options: [
        { en: "Dilatancy-diffusion and critical stress accumulation", es: "Dilatancia-difusión y acumulación crítica de esfuerzo", de: "Dilatanz-Diffusion und kritische Spannungsakkumulation", nl: "Dilatantie-diffusie en kritische spanning accumulatie" },
        { en: "Temperature changes only", es: "Solo cambios de temperatura", de: "Nur Temperaturänderungen", nl: "Alleen temperatuur veranderingen" },
        { en: "Gravitational effects", es: "Efectos gravitacionales", de: "Gravitationseffekte", nl: "Gravitatie effecten" },
        { en: "Atmospheric pressure", es: "Presión atmosférica", de: "Atmosphärendruck", nl: "Atmosferische druk" }
      ],
      correct: 0,
      explanation: {
        en: "Earthquake precursory signals are theoretically controlled by dilatancy-diffusion processes and critical stress accumulation near failure. As stress approaches critical levels, microcracking causes dilatancy (volume increase), affecting fluid flow, electrical properties, and seismic velocities. However, reliable precursors remain elusive due to the complex, non-linear nature of fault systems.",
        es: "Las señales precursoras de terremotos son teóricamente controladas por procesos de dilatancia-difusión y acumulación crítica de esfuerzo cerca de falla. Conforme el esfuerzo se acerca a niveles críticos, microagrietamiento causa dilatancia (aumento de volumen), afectando flujo de fluidos, propiedades eléctricas, y velocidades sísmicas. Sin embargo, precursores confiables siguen siendo esquivos debido a la naturaleza compleja y no lineal de sistemas de falla.",
        de: "Erdbebenvorläufersignale werden theoretisch durch Dilatanz-Diffusionsprozesse und kritische Spannungsakkumulation nahe dem Versagen kontrolliert. Wenn Spannung sich kritischen Niveaus nähert, verursacht Mikrorissbildung Dilatanz (Volumenvergrößerung), was Fluidströmung, elektrische Eigenschaften und seismische Geschwindigkeiten beeinflusst. Jedoch bleiben zuverlässige Vorläufer aufgrund der komplexen, nichtlinearen Natur von Verwerfungssystemen schwer fassbar.",
        nl: "Aardbeving voorbode signalen worden theoretisch gecontroleerd door dilatantie-diffusie processen en kritische spanning accumulatie nabij faling. Wanneer spanning kritieke niveaus nadert, veroorzaakt micro-scheuring dilatantie (volume toename), wat vloeistof stroming, elektrische eigenschappen, en seismische snelheden beïnvloedt. Echter, betrouwbare voorboden blijven ongrijpbaar door de complexe, niet-lineaire aard van breuksystemen."
      }
    },
    {
      question: {
        en: "What controls the spectral decay rate of earthquake rupture at high frequencies?",
        es: "¿Qué controla la tasa de decaimiento espectral de la ruptura de terremotos a altas frecuencias?",
        de: "Was kontrolliert die spektrale Zerfallsrate von Erdbebenbrüchen bei hohen Frequenzen?",
        nl: "Wat controleert de spectrale vervalssnelheid van aardbeving breuk bij hoge frequenties?"
      },
      options: [
        { en: "Fault roughness and stress drop heterogeneity", es: "Rugosidad de falla y heterogeneidad de caída de esfuerzo", de: "Verwerfungsrauheit und Spannungsabfall-Heterogenität", nl: "Breuk ruwheid en spanning afname heterogeniteit" },
        { en: "Rupture area scaling only", es: "Solo escalamiento del área de ruptura", de: "Nur Bruchflächenskalierung", nl: "Alleen breuk gebied schaling" },
        { en: "Source depth effects", es: "Efectos de profundidad de fuente", de: "Quelltiefeneffekte", nl: "Bron diepte effecten" },
        { en: "Regional attenuation properties", es: "Propiedades de atenuación regional", de: "Regionale Dämpfungseigenschaften", nl: "Regionale dempings eigenschappen" }
      ],
      correct: 0,
      explanation: {
        en: "High-frequency spectral decay in earthquake rupture is controlled by fault surface roughness and spatial heterogeneity in stress drop. Rough fault surfaces generate high-frequency scattering, while heterogeneous stress distribution creates complex rupture front interactions that produce broadband high-frequency radiation with characteristic decay rates.",
        es: "El decaimiento espectral de alta frecuencia en ruptura de terremotos es controlado por rugosidad de superficie de falla y heterogeneidad espacial en caída de esfuerzo. Superficies de falla rugosas generan dispersión de alta frecuencia, mientras que distribución de esfuerzo heterogénea crea interacciones complejas de frente de ruptura que producen radiación de alta frecuencia de banda ancha con tasas de decaimiento características.",
        de: "Hochfrequenter spektraler Zerfall in Erdbebenbrüchen wird durch Verwerfungsoberflächenrauheit und räumliche Heterogenität im Spannungsabfall kontrolliert. Raue Verwerfungsoberflächen erzeugen hochfrequente Streuung, während heterogene Spannungsverteilung komplexe Bruchfront-Wechselwirkungen schafft, die breitbandige hochfrequente Strahlung mit charakteristischen Zerfallsraten produziert.",
        nl: "Hoge-frequentie spectrale verval in aardbeving breuk wordt gecontroleerd door breukoppervlak ruwheid en ruimtelijke heterogeniteit in spanning afname. Ruwe breukoppervlakken genereren hoge-frequentie verstrooiing, terwijl heterogene spanning distributie complexe breukfront interacties creëert die breedband hoge-frequentie straling produceert met karakteristieke verval snelheden."
      }
    },
    {
      question: {
        en: "What seismic technique uses multi-scale wavelet analysis to characterize earthquake source complexity?",
        es: "¿Qué técnica sísmica utiliza análisis de ondículas multiescala para caracterizar la complejidad de fuente de terremotos?",
        de: "Welche seismische Technik verwendet multiskalige Wavelet-Analyse zur Charakterisierung von Erdbeben-Quellkomplexität?",
        nl: "Welke seismische techniek gebruikt multi-schaal wavelet analyse om aardbeving bron complexiteit te karakteriseren?"
      },
      options: [
        { en: "Continuous wavelet transform time-frequency analysis", es: "Análisis tiempo-frecuencia de transformada ondícula continua", de: "Kontinuierliche Wavelet-Transform Zeit-Frequenz-Analyse", nl: "Continue wavelet transform tijd-frequentie analyse" },
        { en: "Simple Fourier spectral analysis", es: "Análisis espectral de Fourier simple", de: "Einfache Fourier-Spektralanalyse", nl: "Eenvoudige Fourier spectrale analyse" },
        { en: "Time domain correlation only", es: "Solo correlación de dominio de tiempo", de: "Nur Zeitbereichskorrelation", nl: "Alleen tijdsdomein correlatie" },
        { en: "Peak amplitude measurements", es: "Mediciones de amplitud pico", de: "Spitzenamplitudenmessungen", nl: "Piek amplitude metingen" }
      ],
      correct: 0,
      explanation: {
        en: "Continuous wavelet transform provides optimal time-frequency localization for analyzing earthquake source complexity by decomposing seismic signals into different frequency bands and time windows. This multi-scale analysis reveals the temporal evolution of different frequency components during rupture, characterizing source processes like directivity, multiple slip patches, and rupture velocity variations.",
        es: "La transformada ondícula continua proporciona localización tiempo-frecuencia óptima para analizar complejidad de fuente de terremotos descomponiendo señales sísmicas en diferentes bandas de frecuencia y ventanas de tiempo. Este análisis multiescala revela la evolución temporal de diferentes componentes de frecuencia durante ruptura, caracterizando procesos de fuente como directividad, parches de deslizamiento múltiples, y variaciones de velocidad de ruptura.",
        de: "Die kontinuierliche Wavelet-Transform bietet optimale Zeit-Frequenz-Lokalisierung zur Analyse von Erdbeben-Quellkomplexität durch Zerlegung seismischer Signale in verschiedene Frequenzbänder und Zeitfenster. Diese multiskalige Analyse zeigt die zeitliche Evolution verschiedener Frequenzkomponenten während des Bruchs und charakterisiert Quellprozesse wie Direktiv, multiple Slip-Bereiche und Bruchgeschwindigkeitsvariationen.",
        nl: "Continue wavelet transform biedt optimale tijd-frequentie lokalisatie voor het analyseren van aardbeving bron complexiteit door seismische signalen te ontbinden in verschillende frequentie banden en tijd vensters. Deze multi-schaal analyse onthult de temporele evolutie van verschillende frequentie componenten tijdens breuk, karakteriserend bron processen zoals directiviteit, meervoudige slip plekken, en breuksnelheid variaties."
      }
    },
    {
      question: {
        en: "What controls the transition from stable to unstable sliding on earthquake faults?",
        es: "¿Qué controla la transición de deslizamiento estable a inestable en fallas de terremotos?",
        de: "Was kontrolliert den Übergang von stabilem zu instabilem Gleiten auf Erdbebenverwerfungen?",
        nl: "Wat controleert de overgang van stabiel naar instabiel glijden op aardbeving breuken?"
      },
      options: [
        { en: "Rate-and-state friction parameters (a-b) and normal stress", es: "Parámetros de fricción tasa-y-estado (a-b) y esfuerzo normal", de: "Rate-and-State-Reibungsparameter (a-b) und Normalspannung", nl: "Rate-and-state wrijving parameters (a-b) en normale spanning" },
        { en: "Temperature alone", es: "Solo temperatura", de: "Nur Temperatur", nl: "Alleen temperatuur" },
        { en: "Fluid pressure only", es: "Solo presión de fluidos", de: "Nur Fluiddruck", nl: "Alleen vloeistofdruk" },
        { en: "Fault geometry only", es: "Solo geometría de falla", de: "Nur Verwerfungsgeometrie", nl: "Alleen breuk geometrie" }
      ],
      correct: 0,
      explanation: {
        en: "The stability of fault sliding is controlled by rate-and-state friction parameters, specifically (a-b), where 'a' represents direct velocity strengthening and 'b' represents evolution effects. When (a-b) < 0, the system is potentially unstable and can generate stick-slip behavior (earthquakes). Normal stress and the characteristic slip distance Dc also influence the transition between stable and unstable regimes.",
        es: "La estabilidad del deslizamiento de falla es controlada por parámetros de fricción tasa-y-estado, específicamente (a-b), donde 'a' representa fortalecimiento directo de velocidad y 'b' representa efectos de evolución. Cuando (a-b) < 0, el sistema es potencialmente inestable y puede generar comportamiento stick-slip (terremotos). Esfuerzo normal y la distancia característica de deslizamiento Dc también influencian la transición entre regímenes estables e inestables.",
        de: "Die Stabilität des Verwerfungsgleitens wird durch Rate-and-State-Reibungsparameter kontrolliert, spezifisch (a-b), wobei 'a' direkte Geschwindigkeitsverstärkung und 'b' Evolutionseffekte repräsentiert. Wenn (a-b) < 0, ist das System potentiell instabil und kann Stick-Slip-Verhalten (Erdbeben) erzeugen. Normalspannung und die charakteristische Slip-Distanz Dc beeinflussen auch den Übergang zwischen stabilen und instabilen Regimen.",
        nl: "De stabiliteit van breuk glijding wordt gecontroleerd door rate-and-state wrijving parameters, specifiek (a-b), waarbij 'a' directe snelheid versterking vertegenwoordigt en 'b' evolutie effecten. Wanneer (a-b) < 0, is het systeem potentieel instabiel en kan stick-slip gedrag (aardbevingen) genereren. Normale spanning en de karakteristieke slip afstand Dc beïnvloeden ook de overgang tussen stabiele en instabiele regimes."
      }
    },
    {
      question: {
        en: "What seismic parameter quantifies the spatial correlation structure of earthquake aftershock sequences?",
        es: "¿Qué parámetro sísmico cuantifica la estructura de correlación espacial de secuencias de réplicas de terremotos?",
        de: "Welcher seismische Parameter quantifiziert die räumliche Korrelationsstruktur von Erdbeben-Nachbebensequenzen?",
        nl: "Welke seismische parameter kwantificeert de ruimtelijke correlatie structuur van aardbeving naschok sequenties?"
      },
      options: [
        { en: "Spatial clustering coefficient and correlation dimension", es: "Coeficiente de agrupamiento espacial y dimensión de correlación", de: "Räumlicher Clusterkoeffizient und Korrelationsdimension", nl: "Ruimtelijke clustering coëfficiënt en correlatie dimensie" },
        { en: "Average distance between events", es: "Distancia promedio entre eventos", de: "Durchschnittliche Entfernung zwischen Ereignissen", nl: "Gemiddelde afstand tussen gebeurtenissen" },
        { en: "Total number of aftershocks", es: "Número total de réplicas", de: "Gesamtzahl der Nachbeben", nl: "Totaal aantal naschokken" },
        { en: "Maximum aftershock magnitude", es: "Magnitud máxima de réplica", de: "Maximale Nachbebenmagnitude", nl: "Maximum naschok magnitude" }
      ],
      correct: 0,
      explanation: {
        en: "The spatial clustering coefficient and correlation dimension characterize how aftershocks cluster in space relative to random distributions. The correlation dimension D₂ measures the fractal scaling of spatial point patterns, while clustering coefficients quantify local density variations. These parameters reveal the underlying physics of stress transfer and fault network activation in earthquake sequences.",
        es: "El coeficiente de agrupamiento espacial y dimensión de correlación caracterizan cómo las réplicas se agrupan en el espacio relativo a distribuciones aleatorias. La dimensión de correlación D₂ mide el escalamiento fractal de patrones de puntos espaciales, mientras que coeficientes de agrupamiento cuantifican variaciones de densidad local. Estos parámetros revelan la física subyacente de transferencia de esfuerzo y activación de red de fallas en secuencias de terremotos.",
        de: "Der räumliche Clusterkoeffizient und die Korrelationsdimension charakterisieren, wie sich Nachbeben im Raum relativ zu zufälligen Verteilungen clustern. Die Korrelationsdimension D₂ misst die fraktale Skalierung räumlicher Punktmuster, während Clusterkoeffizienten lokale Dichtevariationen quantifizieren. Diese Parameter zeigen die zugrundeliegende Physik von Spannungsübertragung und Verwerfungsnetzwerk-Aktivierung in Erdbebensequenzen.",
        nl: "De ruimtelijke clustering coëfficiënt en correlatie dimensie karakteriseren hoe naschokken clusteren in ruimte relatief tot willekeurige distributies. De correlatie dimensie D₂ meet de fractale schaling van ruimtelijke punt patronen, terwijl clustering coëfficiënten lokale dichtheid variaties kwantificeren. Deze parameters onthullen de onderliggende fysica van spanning overdracht en breuknetwerk activatie in aardbeving sequenties."
      }
    },
    {
      question: {
        en: "What advanced seismic technique uses scattered wave energy to image small-scale heterogeneities?",
        es: "¿Qué técnica sísmica avanzada utiliza energía de ondas dispersas para generar imágenes de heterogeneidades a pequeña escala?",
        de: "Welche fortgeschrittene seismische Technik nutzt gestreute Wellenenergie zur Abbildung kleinräumiger Heterogenitäten?",
        nl: "Welke geavanceerde seismische techniek gebruikt verstrooide golf energie om kleinschalige heterogeniteiten te beelden?"
      },
      options: [
        { en: "Coda wave interferometry and envelope inversion", es: "Interferometría de ondas coda e inversión de envolvente", de: "Coda-Wellen-Interferometrie und Einhüllenden-Inversion", nl: "Coda golf interferometrie en envelop inversie" },
        { en: "Direct wave travel time tomography", es: "Tomografía de tiempo de viaje de ondas directas", de: "Direkte Wellen-Laufzeit-Tomographie", nl: "Directe golf reistijd tomografie" },
        { en: "Surface wave dispersion analysis", es: "Análisis de dispersión de ondas superficiales", de: "Oberflächenwellen-Dispersionsanalyse", nl: "Oppervlaktegolf dispersie analyse" },
        { en: "Reflection coefficient analysis", es: "Análisis de coeficiente de reflexión", de: "Reflexionskoeffizienten-Analyse", nl: "Reflectie coëfficiënt analyse" }
      ],
      correct: 0,
      explanation: {
        en: "Coda wave interferometry exploits multiply-scattered seismic energy that samples small-scale heterogeneities throughout the medium. The technique uses cross-correlation of coda waves and envelope inversion methods to detect subtle velocity changes and map fine-scale structural variations that are invisible to conventional body wave tomography, achieving much higher sensitivity to small-scale changes.",
        es: "La interferometría de ondas coda explota energía sísmica múltiplemente dispersa que muestrea heterogeneidades a pequeña escala a través del medio. La técnica usa correlación cruzada de ondas coda y métodos de inversión de envolvente para detectar cambios sutiles de velocidad y mapear variaciones estructurales de escala fina que son invisibles para tomografía convencional de ondas internas, logrando sensibilidad mucho mayor a cambios a pequeña escala.",
        de: "Coda-Wellen-Interferometrie nutzt mehrfach gestreute seismische Energie, die kleinräumige Heterogenitäten im gesamten Medium abtastet. Die Technik verwendet Kreuzkorrelation von Coda-Wellen und Einhüllenden-Inversionsmethoden zur Detektion subtiler Geschwindigkeitsänderungen und Kartierung feinskaliger struktureller Variationen, die für konventionelle Raumwellen-Tomographie unsichtbar sind, und erreicht viel höhere Sensitivität für kleinräumige Änderungen.",
        nl: "Coda golf interferometrie benut meervoudig-verstrooide seismische energie die kleinschalige heterogeniteiten door het medium bemonstert. De techniek gebruikt kruiscorrelatie van coda golven en envelop inversie methoden om subtiele snelheidsveranderingen te detecteren en fijnschalige structurele variaties in kaart te brengen die onzichtbaar zijn voor conventionele ruimtegolf tomografie, waarbij veel hogere gevoeligheid voor kleinschalige veranderingen wordt bereikt."
      }
    },
    {
      question: {
        en: "What controls the scaling relationship between earthquake magnitude and rupture duration?",
        es: "¿Qué controla la relación de escala entre la magnitud del terremoto y la duración de ruptura?",
        de: "Was kontrolliert das Skalierungsverhältnis zwischen Erdbebenmagnitude und Bruchdauer?",
        nl: "Wat controleert de schaalrelatie tussen aardbeving magnitude en breuk duur?"
      },
      options: [
        { en: "Rupture velocity and fault dimension scaling", es: "Velocidad de ruptura y escalamiento de dimensión de falla", de: "Bruchgeschwindigkeit und Verwerfungsdimensionsskalierung", nl: "Breuk snelheid en breuk dimensie schaling" },
        { en: "Stress drop magnitude only", es: "Solo magnitud de caída de esfuerzo", de: "Nur Spannungsabfallmagnitude", nl: "Alleen spanning afname grootte" },
        { en: "Source depth alone", es: "Solo profundidad de fuente", de: "Nur Quelltiefe", nl: "Alleen bron diepte" },
        { en: "Regional geology", es: "Geología regional", de: "Regionale Geologie", nl: "Regionale geologie" }
      ],
      correct: 0,
      explanation: {
        en: "Earthquake rupture duration scales with magnitude through the relationship between fault dimensions and rupture velocity. Larger earthquakes have longer fault ruptures that take more time to propagate at finite rupture velocities (typically 0.7-0.9 times shear wave velocity). The scaling follows approximately T ∝ M₀^(1/3), where longer faults require proportionally longer times to rupture completely.",
        es: "La duración de ruptura de terremotos escala con magnitud a través de la relación entre dimensiones de falla y velocidad de ruptura. Terremotos mayores tienen rupturas de falla más largas que toman más tiempo para propagarse a velocidades de ruptura finitas (típicamente 0.7-0.9 veces velocidad de onda de corte). El escalamiento sigue aproximadamente T ∝ M₀^(1/3), donde fallas más largas requieren tiempos proporcionalmente más largos para romper completamente.",
        de: "Erdbebenbruch-Dauer skaliert mit Magnitude durch die Beziehung zwischen Verwerfungsdimensionen und Bruchgeschwindigkeit. Größere Erdbeben haben längere Verwerfungsbrüche, die mehr Zeit brauchen zur Ausbreitung bei endlichen Bruchgeschwindigkeiten (typisch 0,7-0,9 mal Scherwellengeschwindigkeit). Die Skalierung folgt ungefähr T ∝ M₀^(1/3), wobei längere Verwerfungen proportional längere Zeiten zum vollständigen Bruch benötigen.",
        nl: "Aardbeving breuk duur schaalt met magnitude door de relatie tussen breuk dimensies en breuk snelheid. Grotere aardbevingen hebben langere breuk breuken die meer tijd nodig hebben om voort te planten bij eindige breuk snelheden (meestal 0,7-0,9 keer schuifgolf snelheid). De schaling volgt ongeveer T ∝ M₀^(1/3), waarbij langere breuken proportioneel langere tijden nodig hebben om volledig te breken."
      }
    },
    {
      question: {
        en: "What seismic imaging technique uses elastic wave equation solutions to achieve high-resolution subsurface imaging?",
        es: "¿Qué técnica de imagen sísmica utiliza soluciones de ecuación de onda elástica para lograr imagen de alta resolución del subsuelo?",
        de: "Welche seismische Bildgebungstechnik verwendet elastische Wellengleichungslösungen für hochauflösende Untergrundbildgebung?",
        nl: "Welke seismische beeldvormingstechniek gebruikt elastische golf vergelijking oplossingen om hoge-resolutie ondergrondse beeldvorming te bereiken?"
      },
      options: [
        { en: "Reverse-time migration with full waveform modeling", es: "Migración de tiempo inverso con modelado de forma de onda completa", de: "Rückwärts-Zeit-Migration mit vollständiger Wellenformmodellierung", nl: "Omgekeerde-tijd migratie met volledige golfvorm modellering" },
        { en: "Simple ray-based migration", es: "Migración simple basada en rayos", de: "Einfache strahlenbasierte Migration", nl: "Eenvoudige straal-gebaseerde migratie" },
        { en: "Kirchhoff migration only", es: "Solo migración de Kirchhoff", de: "Nur Kirchhoff-Migration", nl: "Alleen Kirchhoff migratie" },
        { en: "Time-to-depth conversion", es: "Conversión tiempo-profundidad", de: "Zeit-zu-Tiefe-Konvertierung", nl: "Tijd-naar-diepte conversie" }
      ],
      correct: 0,
      explanation: {
        en: "Reverse-time migration (RTM) with full waveform modeling uses complete solutions of the elastic wave equation to achieve superior imaging accuracy. This technique propagates wavefields both forward and backward in time, applying imaging conditions that preserve amplitude information and handle complex wave phenomena like multiples, diffractions, and mode conversions for high-resolution subsurface imaging.",
        es: "La migración de tiempo inverso (RTM) con modelado de forma de onda completa usa soluciones completas de la ecuación de onda elástica para lograr precisión superior de imagen. Esta técnica propaga campos de ondas hacia adelante y hacia atrás en el tiempo, aplicando condiciones de imagen que preservan información de amplitud y manejan fenómenos de onda complejos como múltiples, difracciones, y conversiones de modo para imagen de alta resolución del subsuelo.",
        de: "Rückwärts-Zeit-Migration (RTM) mit vollständiger Wellenformmodellierung verwendet vollständige Lösungen der elastischen Wellengleichung für überlegene Bildgebungsgenauigkeit. Diese Technik propagiert Wellenfelder sowohl vorwärts als auch rückwärts in der Zeit und wendet Bildgebungsbedingungen an, die Amplitudeninformation bewahren und komplexe Wellenphänomene wie Multiples, Beugungen und Modenkonversionen für hochauflösende Untergrundbildgebung handhaben.",
        nl: "Omgekeerde-tijd migratie (RTM) met volledige golfvorm modellering gebruikt complete oplossingen van de elastische golf vergelijking om superieure beeldvorming nauwkeurigheid te bereiken. Deze techniek propageert golfvelden zowel voorwaarts als achterwaarts in tijd, toepassen van beeldvorming condities die amplitude informatie behouden en complexe golf fenomenen zoals multiples, difracties, en mode conversies hanteren voor hoge-resolutie ondergrondse beeldvorming."
      }
    }
  ]
};

if (typeof window.addLevel === 'function') {
  window.addLevel('mind-bender/seismology', level4);
}
})();