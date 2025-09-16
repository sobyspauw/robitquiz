(function() {
const level6 = {
  name: { en: 'Earthquake Engineering Seismology', es: 'Sismología de Ingeniería de Terremotos', de: 'Erdbeben-Ingenieur-Seismologie', nl: 'Aardbeving Ingenieurswezen Seismologie' },
  questions: [
    {
      question: {
        en: "What quantum mechanical effect enables ultra-sensitive seismic detection using laser interferometry?",
        es: "¿Qué efecto mecánico cuántico permite detección sísmica ultrasensible usando interferometría láser?",
        de: "Welcher quantenmechanische Effekt ermöglicht ultra-empfindliche seismische Detektion mit Laserinterferometrie?",
        nl: "Welk quantummechanisch effect maakt ultra-gevoelige seismische detectie mogelijk met laser interferometrie?"
      },
      options: [
        { en: "Photon shot noise limitation and quantum entanglement", es: "Limitación de ruido de disparo de fotones y entrelazamiento cuántico", de: "Photonen-Schrotrauschbegrenzung und Quantenverschränkung", nl: "Foton shot ruis beperking en quantum verstrengeling" },
        { en: "Classical amplitude modulation", es: "Modulación de amplitud clásica", de: "Klassische Amplitudenmodulation", nl: "Klassieke amplitude modulatie" },
        { en: "Simple optical reflection", es: "Reflexión óptica simple", de: "Einfache optische Reflexion", nl: "Eenvoudige optische reflectie" },
        { en: "Thermal noise effects only", es: "Solo efectos de ruido térmico", de: "Nur thermische Rauscheffekte", nl: "Alleen thermische ruis effecten" }
      ],
      correct: 0,
      explanation: {
        en: "Laser interferometry for seismic detection approaches the quantum limit where photon shot noise becomes the fundamental limitation. Advanced techniques using squeezed light states and quantum entanglement can surpass classical sensitivity limits, enabling detection of gravitational wave-induced ground motion and extremely small seismic signals that would be impossible with conventional instruments.",
        es: "La interferometría láser para detección sísmica se acerca al límite cuántico donde el ruido de disparo de fotones se convierte en la limitación fundamental. Técnicas avanzadas usando estados de luz comprimida y entrelazamiento cuántico pueden superar límites clásicos de sensibilidad, permitiendo detección de movimiento del suelo inducido por ondas gravitacionales y señales sísmicas extremadamente pequeñas que serían imposibles con instrumentos convencionales.",
        de: "Laserinterferometrie für seismische Detektion nähert sich der Quantengrenze, wo Photonen-Schrotrauschen zur fundamentalen Begrenzung wird. Fortgeschrittene Techniken mit gequetschten Lichtzuständen und Quantenverschränkung können klassische Empfindlichkeitsgrenzen übertreffen und ermöglichen Detektion von gravitationswellen-induzierter Bodenbewegung und extrem kleinen seismischen Signalen, die mit konventionellen Instrumenten unmöglich wären.",
        nl: "Laser interferometrie voor seismische detectie nadert de quantumgrens waar foton shot ruis de fundamentele beperking wordt. Geavanceerde technieken met samengedrukte lichttoestanden en quantum verstrengeling kunnen klassieke gevoeligheidslimieten overtreffen, waardoor detectie mogelijk wordt van gravitatiegolf-geïnduceerde grondbeweging en extreem kleine seismische signalen die onmogelijk zouden zijn met conventionele instrumenten."
      }
    },
    {
      question: {
        en: "What seismic phenomenon characterizes the coupling between elastic waves and electromagnetic fields in the Earth?",
        es: "¿Qué fenómeno sísmico caracteriza el acoplamiento entre ondas elásticas y campos electromagnéticos en la Tierra?",
        de: "Welches seismische Phänomen charakterisiert die Kopplung zwischen elastischen Wellen und elektromagnetischen Feldern in der Erde?",
        nl: "Welk seismisch fenomeen kenmerkt de koppeling tussen elastische golven en elektromagnetische velden in de aarde?"
      },
      options: [
        { en: "Seismoelectromagnetic effect and electrokinetic coupling", es: "Efecto sismoelectromagnético y acoplamiento electrocinético", de: "Seismoelektromagnetischer Effekt und elektrokinetische Kopplung", nl: "Seismoelectromagnetisch effect en elektrokinetische koppeling" },
        { en: "Simple velocity variations only", es: "Solo variaciones de velocidad simples", de: "Nur einfache Geschwindigkeitsvariationen", nl: "Alleen eenvoudige snelheidsvariaties" },
        { en: "Temperature-induced changes", es: "Cambios inducidos por temperatura", de: "Temperaturinduzierte Änderungen", nl: "Temperatuur-geïnduceerde veranderingen" },
        { en: "Gravitational field perturbations", es: "Perturbaciones del campo gravitacional", de: "Gravitationsfeldstörungen", nl: "Gravitatieveld verstoringen" }
      ],
      correct: 0,
      explanation: {
        en: "The seismoelectromagnetic effect occurs when elastic seismic waves induce electromagnetic fields through electrokinetic coupling in fluid-saturated porous media. This phenomenon results from the relative motion between the solid matrix and pore fluids, generating streaming potentials and associated magnetic fields, providing a new avenue for subsurface imaging and earthquake precursor studies.",
        es: "El efecto sismoelectromagnético ocurre cuando ondas sísmicas elásticas inducen campos electromagnéticos a través de acoplamiento electrocinético en medios porosos saturados de fluidos. Este fenómeno resulta del movimiento relativo entre la matriz sólida y fluidos de poro, generando potenciales de corriente y campos magnéticos asociados, proporcionando una nueva vía para imagen del subsuelo y estudios de precursores de terremotos.",
        de: "Der seismoelektromagnetische Effekt tritt auf, wenn elastische seismische Wellen elektromagnetische Felder durch elektrokinetische Kopplung in flüssigkeitsgesättigten porösen Medien induzieren. Dieses Phänomen resultiert aus der relativen Bewegung zwischen der festen Matrix und Porenflüssigkeiten, wodurch Strömungspotentiale und zugehörige Magnetfelder erzeugt werden, was neue Wege für Untergrundbildgebung und Erdbebenvorläuferstudien bietet.",
        nl: "Het seismoelectromagnetisch effect treedt op wanneer elastische seismische golven elektromagnetische velden induceren door elektrokinetische koppeling in vloeistof-verzadigde poreuze media. Dit fenomeen resulteert uit de relatieve beweging tussen de vaste matrix en poriënvloeistoffen, wat stromingspotentialen en geassocieerde magnetische velden genereert, wat een nieuwe weg biedt voor ondergrondse beeldvorming en aardbeving precursor studies."
      }
    },
    {
      question: {
        en: "What advanced computational framework enables exascale seismic wave propagation modeling?",
        es: "¿Qué marco computacional avanzado permite modelado de propagación de ondas sísmicas a escala exa?",
        de: "Welches fortgeschrittene Berechnungsframework ermöglicht Exascale-Modellierung seismischer Wellenausbreitung?",
        nl: "Welk geavanceerd computationeel framework maakt exascale seismische golfvoortplanting modellering mogelijk?"
      },
      options: [
        { en: "Adaptive mesh refinement with hybrid parallelization", es: "Refinamiento de malla adaptativa con paralelización híbrida", de: "Adaptive Gitterverfeinerung mit hybrider Parallelisierung", nl: "Adaptieve mesh verfijning met hybride parallelisatie" },
        { en: "Single-threaded finite differences", es: "Diferencias finitas de un solo hilo", de: "Einfädige finite Differenzen", nl: "Enkele-thread eindige verschillen" },
        { en: "Simple analytical solutions", es: "Soluciones analíticas simples", de: "Einfache analytische Lösungen", nl: "Eenvoudige analytische oplossingen" },
        { en: "Static grid methods only", es: "Solo métodos de cuadrícula estática", de: "Nur statische Gittermethoden", nl: "Alleen statische roostermethoden" }
      ],
      correct: 0,
      explanation: {
        en: "Exascale seismic modeling requires adaptive mesh refinement (AMR) combined with hybrid parallelization strategies that utilize both MPI and OpenMP across heterogeneous computing architectures including CPUs, GPUs, and specialized accelerators. AMR automatically refines computational grids in regions of high wave complexity while maintaining efficiency, enabling unprecedented resolution in global seismic simulations.",
        es: "El modelado sísmico a escala exa requiere refinamiento de malla adaptativa (AMR) combinado con estrategias de paralelización híbrida que utilizan tanto MPI como OpenMP a través de arquitecturas de computación heterogéneas incluyendo CPUs, GPUs y aceleradores especializados. AMR refina automáticamente cuadrículas computacionales en regiones de alta complejidad de ondas mientras mantiene eficiencia, permitiendo resolución sin precedentes en simulaciones sísmicas globales.",
        de: "Exascale-seismische Modellierung erfordert adaptive Gitterverfeinerung (AMR) kombiniert mit hybriden Parallelisierungsstrategien, die sowohl MPI als auch OpenMP über heterogene Computerarchitekturen einschließlich CPUs, GPUs und spezialisierten Beschleunigern nutzen. AMR verfeinert automatisch Berechnungsgitter in Bereichen hoher Wellenkomplexität bei Effizienzerhaltung und ermöglicht beispiellose Auflösung in globalen seismischen Simulationen.",
        nl: "Exascale seismische modellering vereist adaptieve mesh verfijning (AMR) gecombineerd met hybride parallelisatie strategieën die zowel MPI als OpenMP gebruiken over heterogene computer architecturen inclusief CPUs, GPUs, en gespecialiseerde versnellers. AMR verfijnt automatisch computationele rasters in gebieden van hoge golf complexiteit terwijl efficiëntie behouden blijft, wat ongekende resolutie mogelijk maakt in globale seismische simulaties."
      }
    },
    {
      question: {
        en: "What seismic parameter quantifies the nonlinear response of granular materials to dynamic loading?",
        es: "¿Qué parámetro sísmico cuantifica la respuesta no lineal de materiales granulares a carga dinámica?",
        de: "Welcher seismische Parameter quantifiziert die nichtlineare Antwort granularer Materialien auf dynamische Belastung?",
        nl: "Welke seismische parameter kwantificeert de niet-lineaire respons van granulaire materialen op dynamische belasting?"
      },
      options: [
        { en: "Dynamic shear modulus degradation curve", es: "Curva de degradación del módulo de corte dinámico", de: "Dynamische Schermodul-Degradationskurve", nl: "Dynamische schuifmodulus degradatie curve" },
        { en: "Static Young's modulus only", es: "Solo módulo de Young estático", de: "Nur statischer Elastizitätsmodul", nl: "Alleen statische Young modulus" },
        { en: "Linear elastic constants", es: "Constantes elásticas lineales", de: "Lineare elastische Konstanten", nl: "Lineaire elastische constanten" },
        { en: "Thermal expansion coefficient", es: "Coeficiente de expansión térmica", de: "Thermischer Ausdehnungskoeffizient", nl: "Thermische uitzettingscoëfficiënt" }
      ],
      correct: 0,
      explanation: {
        en: "The dynamic shear modulus degradation curve (G/G₀ vs γ) quantifies how granular materials exhibit nonlinear behavior under cyclic loading, where shear modulus decreases with increasing shear strain amplitude. This fundamental soil dynamics parameter controls seismic wave attenuation, site amplification characteristics, and liquefaction potential in loose granular deposits.",
        es: "La curva de degradación del módulo de corte dinámico (G/G₀ vs γ) cuantifica cómo los materiales granulares exhiben comportamiento no lineal bajo carga cíclica, donde el módulo de corte disminuye con el aumento de la amplitud de deformación de corte. Este parámetro fundamental de dinámicas de suelo controla atenuación de ondas sísmicas, características de amplificación de sitio y potencial de licuefacción en depósitos granulares sueltos.",
        de: "Die dynamische Schermodul-Degradationskurve (G/G₀ vs γ) quantifiziert, wie granulare Materialien nichtlineares Verhalten unter zyklischer Belastung zeigen, wobei der Schermodul mit zunehmender Scherdehnungsamplitude abnimmt. Dieser fundamentale Bodendynamikparameter kontrolliert seismische Wellendämpfung, Standortverstärkungscharakteristika und Verflüssigungspotential in lockeren granularen Ablagerungen.",
        nl: "De dynamische schuifmodulus degradatie curve (G/G₀ vs γ) kwantificeert hoe granulaire materialen niet-lineair gedrag vertonen onder cyclische belasting, waarbij schuifmodulus afneemt met toenemende schuifrek amplitude. Deze fundamentele bodem dynamica parameter controleert seismische golf demping, site versterkingskarakteristieken, en vloeibaarheids potentieel in losse granulaire afzettingen."
      }
    },
    {
      question: {
        en: "What seismic imaging technique exploits the reciprocity principle to enhance resolution in complex media?",
        es: "¿Qué técnica de imagen sísmica explota el principio de reciprocidad para mejorar la resolución en medios complejos?",
        de: "Welche seismische Bildgebungstechnik nutzt das Reziprozitätsprinzip zur Auflösungsverbesserung in komplexen Medien?",
        nl: "Welke seismische beeldvormingstechniek benut het reciprociteits principe om resolutie te verbeteren in complexe media?"
      },
      options: [
        { en: "Marchenko imaging and focusing functions", es: "Imagen de Marchenko y funciones de enfoque", de: "Marchenko-Bildgebung und Fokussierfunktionen", nl: "Marchenko beeldvorming en focus functies" },
        { en: "Simple ray tracing methods", es: "Métodos simples de trazado de rayos", de: "Einfache Strahlenverfolgungs-Methoden", nl: "Eenvoudige straal volg methoden" },
        { en: "Standard migration techniques", es: "Técnicas de migración estándar", de: "Standard-Migrationstechniken", nl: "Standaard migratie technieken" },
        { en: "Amplitude-based processing only", es: "Solo procesamiento basado en amplitud", de: "Nur amplitudenbasierte Verarbeitung", nl: "Alleen amplitude-gebaseerde verwerking" }
      ],
      correct: 0,
      explanation: {
        en: "Marchenko imaging exploits seismic reciprocity and causality principles to construct focusing functions that enable imaging inside strongly scattering media without prior knowledge of the internal velocity structure. This revolutionary technique can eliminate internal multiples and provide true-amplitude imaging in complex geological settings where conventional methods fail.",
        es: "La imagen de Marchenko explota principios de reciprocidad sísmica y causalidad para construir funciones de enfoque que permiten imagen dentro de medios fuertemente dispersores sin conocimiento previo de la estructura de velocidad interna. Esta técnica revolucionaria puede eliminar múltiples internos y proporcionar imagen de amplitud verdadera en entornos geológicos complejos donde métodos convencionales fallan.",
        de: "Marchenko-Bildgebung nutzt seismische Reziprozitäts- und Kausalitätsprinzipien zur Konstruktion von Fokussierfunktionen, die Bildgebung innerhalb stark streuender Medien ohne Vorwissen der internen Geschwindigkeitsstruktur ermöglichen. Diese revolutionäre Technik kann interne Vielfache eliminieren und wahre Amplitudenbildgebung in komplexen geologischen Umgebungen bieten, wo konventionelle Methoden versagen.",
        nl: "Marchenko beeldvorming benut seismische reciprociteit en causaliteit principes om focus functies te construeren die beeldvorming binnen sterk verstrooiende media mogelijk maken zonder voorkennis van de interne snelheidsstructuur. Deze revolutionaire techniek kan interne multiples elimineren en echte-amplitude beeldvorming bieden in complexe geologische omgevingen waar conventionele methoden falen."
      }
    },
    {
      question: {
        en: "What controls the frequency-dependent attenuation characteristics in heterogeneous viscoelastic media?",
        es: "¿Qué controla las características de atenuación dependientes de la frecuencia en medios viscoelásticos heterogéneos?",
        de: "Was kontrolliert die frequenzabhängigen Dämpfungscharakteristika in heterogenen viskoelastischen Medien?",
        nl: "Wat controleert de frequentie-afhankelijke dempingskarakteristieken in heterogene viscoelastische media?"
      },
      options: [
        { en: "Scale-dependent scattering and intrinsic absorption mechanisms", es: "Mecanismos de dispersión dependientes de escala y absorción intrínseca", de: "Skalenabhängige Streuungs- und intrinsische Absorptionsmechanismen", nl: "Schaal-afhankelijke verstrooiings- en intrinsieke absorptie mechanismen" },
        { en: "Temperature variations only", es: "Solo variaciones de temperatura", de: "Nur Temperaturvariationen", nl: "Alleen temperatuurvariaties" },
        { en: "Constant Q-factor across frequencies", es: "Factor Q constante a través de frecuencias", de: "Konstanter Q-Faktor über Frequenzen", nl: "Constante Q-factor over frequenties" },
        { en: "Linear velocity gradients", es: "Gradientes de velocidad lineales", de: "Lineare Geschwindigkeitsgradienten", nl: "Lineaire snelheidsgradiënten" }
      ],
      correct: 0,
      explanation: {
        en: "Frequency-dependent attenuation in heterogeneous viscoelastic media results from the superposition of scale-dependent scattering (caused by heterogeneities of different sizes) and intrinsic absorption mechanisms (viscous dissipation). The relative contributions vary with frequency: scattering dominates at high frequencies when wavelengths become comparable to heterogeneity scales, while intrinsic absorption often shows power-law frequency dependence.",
        es: "La atenuación dependiente de la frecuencia en medios viscoelásticos heterogéneos resulta de la superposición de dispersión dependiente de escala (causada por heterogeneidades de diferentes tamaños) y mecanismos de absorción intrínseca (disipación viscosa). Las contribuciones relativas varían con la frecuencia: la dispersión domina a altas frecuencias cuando las longitudes de onda se vuelven comparables a escalas de heterogeneidad, mientras que la absorción intrínseca a menudo muestra dependencia de frecuencia de ley de potencias.",
        de: "Frequenzabhängige Dämpfung in heterogenen viskoelastischen Medien resultiert aus der Überlagerung skalenabhängiger Streuung (verursacht durch Heterogenitäten verschiedener Größen) und intrinsischen Absorptionsmechanismen (viskose Dissipation). Die relativen Beiträge variieren mit der Frequenz: Streuung dominiert bei hohen Frequenzen, wenn Wellenlängen vergleichbar mit Heterogenitätsskalen werden, während intrinsische Absorption oft Potenzgesetz-Frequenzabhängigkeit zeigt.",
        nl: "Frequentie-afhankelijke demping in heterogene viscoelastische media resulteert uit de superpositie van schaal-afhankelijke verstrooiing (veroorzaakt door heterogeniteiten van verschillende groottes) en intrinsieke absorptie mechanismen (visceuse dissipatie). De relatieve bijdragen variëren met frequentie: verstrooiing domineert bij hoge frequenties wanneer golflengtes vergelijkbaar worden met heterogeniteit schalen, terwijl intrinsieke absorptie vaak machtswet frequentie-afhankelijkheid toont."
      }
    },
    {
      question: {
        en: "What seismic analysis method uses machine learning to automatically classify earthquake waveforms?",
        es: "¿Qué método de análisis sísmico utiliza aprendizaje automático para clasificar automáticamente formas de onda de terremotos?",
        de: "Welche seismische Analysemethode verwendet maschinelles Lernen zur automatischen Klassifikation von Erdbebenwellenformen?",
        nl: "Welke seismische analysemethode gebruikt machine learning om automatisch aardbevings golfvormen te classificeren?"
      },
      options: [
        { en: "Convolutional neural networks with spectral feature extraction", es: "Redes neuronales convolucionales con extracción de características espectrales", de: "Konvolutional neuronale Netzwerke mit spektraler Merkmalsextraktion", nl: "Convolutionele neurale netwerken met spectrale kenmerk extractie" },
        { en: "Simple amplitude thresholding", es: "Umbralización de amplitud simple", de: "Einfache Amplitudenschwellwertbildung", nl: "Eenvoudige amplitude drempelwaarde" },
        { en: "Manual visual inspection only", es: "Solo inspección visual manual", de: "Nur manuelle visuelle Inspektion", nl: "Alleen handmatige visuele inspectie" },
        { en: "Linear statistical correlation", es: "Correlación estadística lineal", de: "Lineare statistische Korrelation", nl: "Lineaire statistische correlatie" }
      ],
      correct: 0,
      explanation: {
        en: "Convolutional neural networks (CNNs) with spectral feature extraction represent the state-of-the-art in automated seismic waveform classification. These deep learning models can automatically learn hierarchical features from time-frequency representations of seismic signals, achieving superhuman performance in distinguishing earthquakes from noise, classifying different event types, and estimating source parameters.",
        es: "Las redes neuronales convolucionales (CNNs) con extracción de características espectrales representan el estado del arte en clasificación automatizada de formas de onda sísmicas. Estos modelos de aprendizaje profundo pueden aprender automáticamente características jerárquicas de representaciones tiempo-frecuencia de señales sísmicas, logrando rendimiento sobrehumano en distinguir terremotos de ruido, clasificar diferentes tipos de eventos y estimar parámetros de fuente.",
        de: "Konvolutional neuronale Netzwerke (CNNs) mit spektraler Merkmalsextraktion repräsentieren den Stand der Technik in automatisierter seismischer Wellenformklassifikation. Diese Deep-Learning-Modelle können automatisch hierarchische Merkmale aus Zeit-Frequenz-Darstellungen seismischer Signale lernen und übermenschliche Leistung beim Unterscheiden von Erdbeben und Rauschen, Klassifizieren verschiedener Ereignistypen und Schätzen von Quellenparametern erreichen.",
        nl: "Convolutionele neurale netwerken (CNNs) met spectrale kenmerk extractie vertegenwoordigen de state-of-the-art in geautomatiseerde seismische golfvorm classificatie. Deze deep learning modellen kunnen automatisch hiërarchische kenmerken leren uit tijd-frequentie representaties van seismische signalen, waarbij bovenmenselijke prestatie wordt behaald in het onderscheiden van aardbevingen van ruis, classificeren van verschillende gebeurtenistypes, en schatten van bron parameters."
      }
    },
    {
      question: {
        en: "What advanced seismic parameter characterizes the spatiotemporal evolution of earthquake swarms?",
        es: "¿Qué parámetro sísmico avanzado caracteriza la evolución espaciotemporal de enjambres de terremotos?",
        de: "Welcher fortgeschrittene seismische Parameter charakterisiert die räumlich-zeitliche Entwicklung von Erdbebenschwärmen?",
        nl: "Welke geavanceerde seismische parameter kenmerkt de ruimtelijk-temporele evolutie van aardbeving zwermen?"
      },
      options: [
        { en: "Epidemic-type aftershock sequence (ETAS) parameters", es: "Parámetros de secuencia de réplicas tipo epidémico (ETAS)", de: "Epidemieartige Nachbebensequenz (ETAS) Parameter", nl: "Epidemie-type naschok sequentie (ETAS) parameters" },
        { en: "Simple magnitude distribution", es: "Distribución de magnitud simple", de: "Einfache Magnitudenverteilung", nl: "Eenvoudige magnitude distributie" },
        { en: "Linear temporal trend only", es: "Solo tendencia temporal lineal", de: "Nur linearer zeitlicher Trend", nl: "Alleen lineaire temporele trend" },
        { en: "Average inter-event time", es: "Tiempo promedio entre eventos", de: "Durchschnittliche Zwischenereigniszeit", nl: "Gemiddelde inter-gebeurtenis tijd" }
      ],
      correct: 0,
      explanation: {
        en: "ETAS (Epidemic-Type Aftershock Sequence) parameters mathematically describe the spatiotemporal clustering of seismic activity using branching process models. Key parameters include the background rate μ, productivity α, temporal decay p, spatial decay q, and triggering distance D₀. These parameters quantify how earthquakes trigger subsequent events, enabling probabilistic seismic hazard assessment and real-time forecasting.",
        es: "Los parámetros ETAS (Secuencia de Réplicas Tipo Epidémico) describen matemáticamente el agrupamiento espaciotemporal de actividad sísmica usando modelos de proceso de ramificación. Parámetros clave incluyen la tasa de fondo μ, productividad α, decaimiento temporal p, decaimiento espacial q, y distancia de activación D₀. Estos parámetros cuantifican cómo los terremotos activan eventos subsecuentes, permitiendo evaluación probabilística de riesgo sísmico y pronóstico en tiempo real.",
        de: "ETAS (Epidemieartige Nachbebensequenz) Parameter beschreiben mathematisch die räumlich-zeitliche Clusterung seismischer Aktivität mit Verzweigungsprozessmodellen. Schlüsselparameter umfassen die Hintergrundrate μ, Produktivität α, zeitlichen Abfall p, räumlichen Abfall q und Auslöseentfernung D₀. Diese Parameter quantifizieren, wie Erdbeben nachfolgende Ereignisse auslösen und ermöglichen probabilistische seismische Gefahrenbewertung und Echtzeitvorhersage.",
        nl: "ETAS (Epidemie-Type Naschok Sequentie) parameters beschrijven wiskundig de ruimtelijk-temporele clustering van seismische activiteit met vertakkingsproces modellen. Belangrijke parameters omvatten de achtergrond snelheid μ, productiviteit α, temporeel verval p, ruimtelijk verval q, en trigger afstand D₀. Deze parameters kwantificeren hoe aardbevingen volgende gebeurtenissen triggeren, wat probabilistische seismische gevaar beoordeling en real-time voorspelling mogelijk maakt."
      }
    },
    {
      question: {
        en: "What quantum seismic sensing technique uses atom interferometry for ultra-precise ground motion detection?",
        es: "¿Qué técnica de detección sísmica cuántica utiliza interferometría atómica para detección ultra-precisa de movimiento del suelo?",
        de: "Welche quantenseismische Sensingtechnik verwendet Atominterferometrie für ultra-präzise Bodenbewegungsdetektion?",
        nl: "Welke quantum seismische sensing techniek gebruikt atoom interferometrie voor ultra-precieze grondbeweging detectie?"
      },
      options: [
        { en: "Cold atom gravimeters with matter wave interferometry", es: "Gravímetros de átomos fríos con interferometría de ondas de materia", de: "Kaltatom-Gravimeter mit Materiewellen-Interferometrie", nl: "Koude atoom gravimeters met materie golf interferometrie" },
        { en: "Classical spring-mass systems", es: "Sistemas clásicos masa-resorte", de: "Klassische Feder-Masse-Systeme", nl: "Klassieke veer-massa systemen" },
        { en: "Simple piezoelectric sensors", es: "Sensores piezoeléctricos simples", de: "Einfache piezoelektrische Sensoren", nl: "Eenvoudige piëzo-elektrische sensoren" },
        { en: "Mechanical pendulum devices", es: "Dispositivos de péndulo mecánico", de: "Mechanische Pendelgeräte", nl: "Mechanische pendel apparaten" }
      ],
      correct: 0,
      explanation: {
        en: "Cold atom gravimeters exploit matter wave interferometry using laser-cooled atoms to achieve unprecedented sensitivity in detecting ground acceleration and gravity changes. These quantum sensors can measure accelerations at the 10⁻¹⁰ g level, enabling detection of extremely small seismic signals, tidal effects, and even gravitational waves, far surpassing classical seismometers in sensitivity.",
        es: "Los gravímetros de átomos fríos explotan interferometría de ondas de materia usando átomos enfriados por láser para lograr sensibilidad sin precedentes en detectar aceleración del suelo y cambios de gravedad. Estos sensores cuánticos pueden medir aceleraciones al nivel 10⁻¹⁰ g, permitiendo detección de señales sísmicas extremadamente pequeñas, efectos de marea, e incluso ondas gravitacionales, superando por mucho a sismómetros clásicos en sensibilidad.",
        de: "Kaltatom-Gravimeter nutzen Materiewellen-Interferometrie mit lasergekühlten Atomen für beispiellose Empfindlichkeit bei der Detektion von Bodenbeschleunigung und Gravitationsänderungen. Diese Quantensensoren können Beschleunigungen auf dem 10⁻¹⁰ g Niveau messen und ermöglichen Detektion extrem kleiner seismischer Signale, Gezeiteneffekte und sogar Gravitationswellen, weit überlegen gegenüber klassischen Seismometern in der Empfindlichkeit.",
        nl: "Koude atoom gravimeters benutten materie golf interferometrie met laser-gekoelde atomen om ongekende gevoeligheid te bereiken in het detecteren van grond versnelling en zwaartekracht veranderingen. Deze quantum sensoren kunnen versnellingen op het 10⁻¹⁰ g niveau meten, wat detectie mogelijk maakt van extreem kleine seismische signalen, getijde effecten, en zelfs gravitatiegolven, ver uitstekend boven klassieke seismometers in gevoeligheid."
      }
    },
    {
      question: {
        en: "What seismic parameter quantifies the efficiency of energy cascade in earthquake rupture networks?",
        es: "¿Qué parámetro sísmico cuantifica la eficiencia de cascada de energía en redes de ruptura de terremotos?",
        de: "Welcher seismische Parameter quantifiziert die Effizienz der Energiekaskade in Erdbebenbruchnetzwerken?",
        nl: "Welke seismische parameter kwantificeert de efficiëntie van energie cascade in aardbeving breuk netwerken?"
      },
      options: [
        { en: "Fractal correlation dimension of rupture connectivity", es: "Dimensión de correlación fractal de conectividad de ruptura", de: "Fraktale Korrelationsdimension der Bruchkonnektivität", nl: "Fractale correlatie dimensie van breuk connectiviteit" },
        { en: "Simple rupture area measurement", es: "Medición simple del área de ruptura", de: "Einfache Bruchflächenmessung", nl: "Eenvoudige breuk gebied meting" },
        { en: "Average slip displacement", es: "Desplazamiento de deslizamiento promedio", de: "Durchschnittliche Slip-Verschiebung", nl: "Gemiddelde slip verplaatsing" },
        { en: "Total seismic moment release", es: "Liberación total de momento sísmico", de: "Gesamte seismische Momentfreisetzung", nl: "Totale seismische moment vrijgave" }
      ],
      correct: 0,
      explanation: {
        en: "The fractal correlation dimension of rupture connectivity characterizes how earthquake energy cascades through complex fault networks by quantifying the spatial correlation structure of connected rupture segments. This parameter reveals whether energy transfer follows diffusive (D≈2), ballistic (D≈1), or superdiffusive (D>2) scaling, providing insights into fault system organization and earthquake triggering mechanisms.",
        es: "La dimensión de correlación fractal de conectividad de ruptura caracteriza cómo la energía de terremotos se propaga en cascada a través de redes complejas de fallas cuantificando la estructura de correlación espacial de segmentos de ruptura conectados. Este parámetro revela si la transferencia de energía sigue escalamiento difusivo (D≈2), balístico (D≈1), o superdifusivo (D>2), proporcionando conocimientos sobre organización del sistema de fallas y mecanismos de activación de terremotos.",
        de: "Die fraktale Korrelationsdimension der Bruchkonnektivität charakterisiert, wie Erdbebenenergie durch komplexe Verwerfungsnetzwerke kaskadiert, indem sie die räumliche Korrelationsstruktur verbundener Bruchsegmente quantifiziert. Dieser Parameter zeigt, ob Energietransfer diffusiver (D≈2), ballistischer (D≈1) oder superdiffusiver (D>2) Skalierung folgt und bietet Einblicke in Verwerfungssystemorganisation und Erdbebenauslösemechanismen.",
        nl: "De fractale correlatie dimensie van breuk connectiviteit karakteriseert hoe aardbeving energie cascadeert door complexe breuk netwerken door de ruimtelijke correlatie structuur van verbonden breuk segmenten te kwantificeren. Deze parameter onthult of energie overdracht diffusieve (D≈2), ballistische (D≈1), of superdiffusieve (D>2) schaling volgt, wat inzichten biedt in breuksysteem organisatie en aardbeving trigger mechanismen."
      }
    },
    {
      question: {
        en: "What controls the emergence of coherent seismic phases from scattered wavefield reconstruction?",
        es: "¿Qué controla la emergencia de fases sísmicas coherentes de la reconstrucción de campo de ondas dispersas?",
        de: "Was kontrolliert das Auftreten kohärenter seismischer Phasen aus gestreuter Wellenfeldrekonstruktion?",
        nl: "Wat controleert het ontstaan van coherente seismische fasen uit verstrooide golfveld reconstructie?"
      },
      options: [
        { en: "Stationary phase principle and constructive interference conditions", es: "Principio de fase estacionaria y condiciones de interferencia constructiva", de: "Stationäres Phasenprinzip und konstruktive Interferenzbedingungen", nl: "Stationaire fase principe en constructieve interferentie condities" },
        { en: "Random noise averaging only", es: "Solo promediación de ruido aleatorio", de: "Nur zufällige Rauschvermittelung", nl: "Alleen willekeurige ruis middeling" },
        { en: "Simple amplitude summation", es: "Suma de amplitud simple", de: "Einfache Amplitudensummierung", nl: "Eenvoudige amplitude sommering" },
        { en: "Linear superposition effects", es: "Efectos de superposición lineal", de: "Lineare Überlagerungseffekte", nl: "Lineaire superpositie effecten" }
      ],
      correct: 0,
      explanation: {
        en: "The emergence of coherent seismic phases from scattered wavefields is governed by the stationary phase principle, where only scattered waves with stationary phase relationships constructively interfere to form coherent arrivals. This fundamental principle underlies modern imaging techniques like reverse-time migration and seismic interferometry, where scattered energy focuses at stationary points to reconstruct Green's functions.",
        es: "La emergencia de fases sísmicas coherentes de campos de ondas dispersas es gobernada por el principio de fase estacionaria, donde solo ondas dispersas con relaciones de fase estacionaria interfieren constructivamente para formar llegadas coherentes. Este principio fundamental subyace a técnicas de imagen modernas como migración de tiempo reverso e interferometría sísmica, donde energía dispersa se enfoca en puntos estacionarios para reconstruir funciones de Green.",
        de: "Das Auftreten kohärenter seismischer Phasen aus gestreuten Wellenfeldern wird durch das stationäre Phasenprinzip regiert, wobei nur gestreute Wellen mit stationären Phasenbeziehungen konstruktiv interferieren, um kohärente Ankunftszeiten zu bilden. Dieses fundamentale Prinzip liegt modernen Bildgebungstechniken wie Rückwärts-Zeit-Migration und seismischer Interferometrie zugrunde, wo gestreute Energie an stationären Punkten fokussiert, um Green-Funktionen zu rekonstruieren.",
        nl: "Het ontstaan van coherente seismische fasen uit verstrooide golfvelden wordt geregeerd door het stationaire fase principe, waarbij alleen verstrooide golven met stationaire fase relaties constructief interfereren om coherente aankomsten te vormen. Dit fundamentele principe ligt ten grondslag aan moderne beeldvormingstechnieken zoals omgekeerde-tijd migratie en seismische interferometrie, waarbij verstrooide energie focust op stationaire punten om Green's functies te reconstrueren."
      }
    },
    {
      question: {
        en: "What seismic analysis technique uses topological data analysis to characterize complex fault network geometry?",
        es: "¿Qué técnica de análisis sísmico utiliza análisis de datos topológicos para caracterizar geometría compleja de red de fallas?",
        de: "Welche seismische Analysetechnik verwendet topologische Datenanalyse zur Charakterisierung komplexer Verwerfungsnetzwerkgeometrie?",
        nl: "Welke seismische analysetechniek gebruikt topologische data analyse om complexe breuknetwerk geometrie te karakteriseren?"
      },
      options: [
        { en: "Persistent homology and Betti number analysis", es: "Homología persistente y análisis de números de Betti", de: "Persistente Homologie und Betti-Zahlen-Analyse", nl: "Persistente homologie en Betti getal analyse" },
        { en: "Simple geometric averaging", es: "Promediación geométrica simple", de: "Einfache geometrische Mittelung", nl: "Eenvoudige geometrische middeling" },
        { en: "Linear trend analysis only", es: "Solo análisis de tendencia lineal", de: "Nur lineare Trendanalyse", nl: "Alleen lineaire trend analyse" },
        { en: "Classical Euclidean distance metrics", es: "Métricas clásicas de distancia euclidiana", de: "Klassische euklidische Abstandsmetriken", nl: "Klassieke Euclidische afstand metrieken" }
      ],
      correct: 0,
      explanation: {
        en: "Persistent homology and Betti number analysis from topological data analysis quantify the intrinsic geometric and connectivity properties of complex fault networks across multiple scales. Betti numbers characterize topological features: β₀ (connected components), β₁ (loops/cycles), and β₂ (voids), while persistence diagrams reveal the scale-dependent evolution of these topological structures, providing new insights into fault system organization and stress transfer mechanisms.",
        es: "La homología persistente y análisis de números de Betti del análisis de datos topológicos cuantifican las propiedades geométricas y de conectividad intrínsecas de redes complejas de fallas a través de múltiples escalas. Los números de Betti caracterizan características topológicas: β₀ (componentes conectados), β₁ (bucles/ciclos), y β₂ (vacíos), mientras que diagramas de persistencia revelan la evolución dependiente de escala de estas estructuras topológicas, proporcionando nuevos conocimientos sobre organización del sistema de fallas y mecanismos de transferencia de esfuerzo.",
        de: "Persistente Homologie und Betti-Zahlen-Analyse aus topologischer Datenanalyse quantifizieren die intrinsischen geometrischen und Konnektivitätseigenschaften komplexer Verwerfungsnetzwerke über mehrere Skalen. Betti-Zahlen charakterisieren topologische Merkmale: β₀ (verbundene Komponenten), β₁ (Schleifen/Zyklen) und β₂ (Leerstellen), während Persistenzdiagramme die skalenabhängige Evolution dieser topologischen Strukturen zeigen und neue Einblicke in Verwerfungssystemorganisation und Spannungstransfermechanismen bieten.",
        nl: "Persistente homologie en Betti getal analyse uit topologische data analyse kwantificeren de intrinsieke geometrische en connectiviteit eigenschappen van complexe breuk netwerken over meerdere schalen. Betti getallen karakteriseren topologische kenmerken: β₀ (verbonden componenten), β₁ (lussen/cycli), en β₂ (leegte), terwijl persistentie diagrammen de schaal-afhankelijke evolutie van deze topologische structuren onthullen, wat nieuwe inzichten biedt in breuksysteem organisatie en spanning overdracht mechanismen."
      }
    },
    {
      question: {
        en: "What advanced seismic parameter characterizes the multi-scale energy dissipation in complex fault systems?",
        es: "¿Qué parámetro sísmico avanzado caracteriza la disipación de energía multiescala en sistemas complejos de fallas?",
        de: "Welcher fortgeschrittene seismische Parameter charakterisiert die multiskalige Energiedissipation in komplexen Verwerfungssystemen?",
        nl: "Welke geavanceerde seismische parameter kenmerkt de multi-schaal energie dissipatie in complexe breuksystemen?"
      },
      options: [
        { en: "Multifractal spectrum of energy release rates", es: "Espectro multifractal de tasas de liberación de energía", de: "Multifraktales Spektrum der Energiefreisetzungsraten", nl: "Multifractaal spectrum van energie vrijgave snelheden" },
        { en: "Simple energy summation", es: "Suma de energía simple", de: "Einfache Energiesummierung", nl: "Eenvoudige energie sommering" },
        { en: "Average magnitude calculation", es: "Cálculo de magnitud promedio", de: "Durchschnittliche Magnitudenberechnung", nl: "Gemiddelde magnitude berekening" },
        { en: "Linear energy trend analysis", es: "Análisis de tendencia de energía lineal", de: "Lineare Energietrendanalyse", nl: "Lineaire energie trend analyse" }
      ],
      correct: 0,
      explanation: {
        en: "The multifractal spectrum f(α) of energy release rates characterizes how seismic energy dissipation varies across different scales and intensities in complex fault systems. The spectrum width Δα quantifies heterogeneity: narrow spectra indicate uniform energy release, while broad spectra reveal highly heterogeneous, intermittent dissipation patterns characteristic of critical phenomena and self-organized criticality in earthquake systems.",
        es: "El espectro multifractal f(α) de tasas de liberación de energía caracteriza cómo la disipación de energía sísmica varía a través de diferentes escalas e intensidades en sistemas complejos de fallas. El ancho del espectro Δα cuantifica heterogeneidad: espectros estrechos indican liberación de energía uniforme, mientras que espectros amplios revelan patrones de disipación altamente heterogéneos e intermitentes característicos de fenómenos críticos y criticalidad auto-organizada en sistemas de terremotos.",
        de: "Das multifraktale Spektrum f(α) der Energiefreisetzungsraten charakterisiert, wie seismische Energiedissipation über verschiedene Skalen und Intensitäten in komplexen Verwerfungssystemen variiert. Die Spektrumsbreite Δα quantifiziert Heterogenität: schmale Spektren zeigen gleichmäßige Energiefreisetzung an, während breite Spektren hochheterogene, intermittierende Dissipationsmuster zeigen, die charakteristisch für kritische Phänomene und selbstorganisierte Kritikalität in Erdbebensystemen sind.",
        nl: "Het multifractaal spectrum f(α) van energie vrijgave snelheden karakteriseert hoe seismische energie dissipatie varieert over verschillende schalen en intensiteiten in complexe breuksystemen. De spectrum breedte Δα kwantificeert heterogeniteit: smalle spectra duiden op uniforme energie vrijgave, terwijl brede spectra zeer heterogene, intermitterende dissipatie patronen onthullen karakteristiek voor kritieke fenomenen en zelf-georganiseerde kriticaliteit in aardbeving systemen."
      }
    },
    {
      question: {
        en: "What seismic imaging technique uses distributed acoustic sensing with fiber-optic cables for high-resolution subsurface mapping?",
        es: "¿Qué técnica de imagen sísmica utiliza detección acústica distribuida con cables de fibra óptica para mapeo de alta resolución del subsuelo?",
        de: "Welche seismische Bildgebungstechnik verwendet verteilte akustische Sensorik mit faseroptischen Kabeln für hochauflösende Untergrundkartierung?",
        nl: "Welke seismische beeldvormingstechniek gebruikt gedistribueerde akoestische sensing met vezeloptica kabels voor hoge-resolutie ondergrondse kartering?"
      },
      options: [
        { en: "Distributed strain sensing with coherent Rayleigh backscattering", es: "Detección de deformación distribuida con retrodispersión coherente de Rayleigh", de: "Verteilte Dehnungssensorik mit kohärenter Rayleigh-Rückstreuung", nl: "Gedistribueerde rek sensing met coherente Rayleigh terugverstrooiing" },
        { en: "Simple amplitude monitoring", es: "Monitoreo de amplitud simple", de: "Einfache Amplitudenüberwachung", nl: "Eenvoudige amplitude monitoring" },
        { en: "Traditional geophone arrays", es: "Arreglos de geófonos tradicionales", de: "Traditionelle Geophon-Arrays", nl: "Traditionele geofoon arrays" },
        { en: "Electromagnetic field sensing", es: "Detección de campo electromagnético", de: "Elektromagnetische Feldsensorik", nl: "Elektromagnetische veld sensing" }
      ],
      correct: 0,
      explanation: {
        en: "Distributed acoustic sensing (DAS) uses coherent Rayleigh backscattering in fiber-optic cables to measure strain variations along the fiber with meter-scale spatial resolution and microsecond temporal resolution. This revolutionary technique transforms existing fiber infrastructure into dense seismic arrays with thousands of virtual sensors, enabling unprecedented subsurface imaging capabilities and real-time monitoring of seismic activity.",
        es: "La detección acústica distribuida (DAS) utiliza retrodispersión coherente de Rayleigh en cables de fibra óptica para medir variaciones de deformación a lo largo de la fibra con resolución espacial de escala de metros y resolución temporal de microsegundos. Esta técnica revolucionaria transforma infraestructura de fibra existente en arreglos sísmicos densos con miles de sensores virtuales, permitiendo capacidades de imagen del subsuelo sin precedentes y monitoreo en tiempo real de actividad sísmica.",
        de: "Verteilte akustische Sensorik (DAS) verwendet kohärente Rayleigh-Rückstreuung in faseroptischen Kabeln zur Messung von Dehnungsvariationen entlang der Faser mit meterförmiger räumlicher Auflösung und Mikrosekunden-zeitlicher Auflösung. Diese revolutionäre Technik verwandelt bestehende Faserinfrastruktur in dichte seismische Arrays mit tausenden virtuellen Sensoren und ermöglicht beispiellose Untergrundbildgebungsfähigkeiten und Echtzeitüberwachung seismischer Aktivität.",
        nl: "Gedistribueerde akoestische sensing (DAS) gebruikt coherente Rayleigh terugverstrooiing in vezeloptica kabels om rek variaties langs de vezel te meten met meter-schaal ruimtelijke resolutie en microseconde temporele resolutie. Deze revolutionaire techniek transformeert bestaande vezel infrastructuur in dichte seismische arrays met duizenden virtuele sensoren, wat ongekende ondergrondse beeldvormingsmogelijkheden en real-time monitoring van seismische activiteit mogelijk maakt."
      }
    },
    {
      question: {
        en: "What controls the transition between brittle and ductile deformation regimes in earthquake source regions?",
        es: "¿Qué controla la transición entre regímenes de deformación frágil y dúctil en regiones de fuente de terremotos?",
        de: "Was kontrolliert den Übergang zwischen spröden und duktilen Deformationsregimen in Erdbebenquellregionen?",
        nl: "Wat controleert de overgang tussen broze en ductiele deformatie regimes in aardbeving brongebieden?"
      },
      options: [
        { en: "Temperature, strain rate, and effective stress conditions", es: "Condiciones de temperatura, tasa de deformación y esfuerzo efectivo", de: "Temperatur-, Dehnungsraten- und Effektivspannungsbedingungen", nl: "Temperatuur, rek snelheid, en effectieve spanning condities" },
        { en: "Depth only", es: "Solo profundidad", de: "Nur Tiefe", nl: "Alleen diepte" },
        { en: "Rock type only", es: "Solo tipo de roca", de: "Nur Gesteinstyp", nl: "Alleen rotstype" },
        { en: "Fluid pressure only", es: "Solo presión de fluidos", de: "Nur Fluiddruck", nl: "Alleen vloeistofdruk" }
      ],
      correct: 0,
      explanation: {
        en: "The brittle-ductile transition in earthquake source regions is controlled by the complex interplay of temperature (increasing with depth), strain rate (rapid during seismic loading), and effective stress conditions (confining pressure minus pore pressure). High temperatures and low strain rates favor ductile flow, while low temperatures and high strain rates promote brittle failure. This transition typically occurs at depths of 10-20 km in continental crust, defining the maximum depth of earthquake nucleation.",
        es: "La transición frágil-dúctil en regiones de fuente de terremotos es controlada por la interacción compleja de temperatura (aumentando con profundidad), tasa de deformación (rápida durante carga sísmica), y condiciones de esfuerzo efectivo (presión de confinamiento menos presión de poro). Temperaturas altas y tasas de deformación bajas favorecen flujo dúctil, mientras que temperaturas bajas y tasas de deformación altas promueven falla frágil. Esta transición típicamente ocurre a profundidades de 10-20 km en corteza continental, definiendo la profundidad máxima de nucleación de terremotos.",
        de: "Der spröd-duktile Übergang in Erdbebenquellregionen wird durch das komplexe Zusammenspiel von Temperatur (steigend mit Tiefe), Dehnungsrate (schnell während seismischer Belastung) und Effektivspannungsbedingungen (Einschlussdruck minus Porendruck) kontrolliert. Hohe Temperaturen und niedrige Dehnungsraten begünstigen duktilen Fluss, während niedrige Temperaturen und hohe Dehnungsraten spröden Bruch fördern. Dieser Übergang tritt typischerweise in Tiefen von 10-20 km in kontinentaler Kruste auf und definiert die maximale Tiefe der Erdbebennukleation.",
        nl: "De broze-ductiele overgang in aardbeving brongebieden wordt gecontroleerd door het complexe samenspel van temperatuur (toenemend met diepte), rek snelheid (snel tijdens seismische belasting), en effectieve spanning condities (opsluiting druk minus porie druk). Hoge temperaturen en lage rek snelheden bevorderen ductiele vloei, terwijl lage temperaturen en hoge rek snelheden broze faling promoten. Deze overgang treedt meestal op bij diepten van 10-20 km in continentale korst, wat de maximum diepte van aardbeving nucleatie definieert."
      }
    },
    {
      question: {
        en: "What seismic parameter quantifies the information content and predictability of earthquake catalogs?",
        es: "¿Qué parámetro sísmico cuantifica el contenido de información y predictibilidad de catálogos de terremotos?",
        de: "Welcher seismische Parameter quantifiziert den Informationsgehalt und die Vorhersagbarkeit von Erdbebenkatalogen?",
        nl: "Welke seismische parameter kwantificeert de informatie-inhoud en voorspelbaarheid van aardbeving catalogi?"
      },
      options: [
        { en: "Kolmogorov complexity and entropy rate measures", es: "Complejidad de Kolmogorov y medidas de tasa de entropía", de: "Kolmogorov-Komplexität und Entropieratenmaße", nl: "Kolmogorov complexiteit en entropie snelheid metingen" },
        { en: "Simple event counting", es: "Conteo de eventos simple", de: "Einfache Ereigniszählung", nl: "Eenvoudige gebeurtenis telling" },
        { en: "Average magnitude calculation", es: "Cálculo de magnitud promedio", de: "Durchschnittliche Magnitudenberechnung", nl: "Gemiddelde magnitude berekening" },
        { en: "Linear trend fitting", es: "Ajuste de tendencia lineal", de: "Lineare Trendanpassung", nl: "Lineaire trend aanpassing" }
      ],
      correct: 0,
      explanation: {
        en: "Kolmogorov complexity and entropy rate measures quantify the algorithmic information content and inherent predictability of earthquake catalogs. High complexity indicates random, unpredictable sequences, while low complexity suggests deterministic patterns. The conditional entropy rate measures how much new information each earthquake adds, revealing whether seismic sequences exhibit memory effects, clustering, or genuine randomness, crucial for understanding earthquake predictability limits.",
        es: "La complejidad de Kolmogorov y medidas de tasa de entropía cuantifican el contenido de información algorítmica y predictibilidad inherente de catálogos de terremotos. Alta complejidad indica secuencias aleatorias, impredecibles, mientras que baja complejidad sugiere patrones determinísticos. La tasa de entropía condicional mide cuánta información nueva agrega cada terremoto, revelando si secuencias sísmicas exhiben efectos de memoria, agrupamiento, o aleatoriedad genuina, crucial para entender límites de predictibilidad de terremotos.",
        de: "Kolmogorov-Komplexität und Entropieratenmaße quantifizieren den algorithmischen Informationsgehalt und die inhärente Vorhersagbarkeit von Erdbebenkatalogen. Hohe Komplexität zeigt zufällige, unvorhersagbare Sequenzen an, während niedrige Komplexität deterministische Muster suggeriert. Die bedingte Entropierate misst, wie viel neue Information jedes Erdbeben hinzufügt, und zeigt, ob seismische Sequenzen Gedächtniseffekte, Clustering oder echte Zufälligkeit aufweisen, entscheidend für das Verständnis von Erdbebenvorhersagbarkeitsgrenzen.",
        nl: "Kolmogorov complexiteit en entropie snelheid metingen kwantificeren de algoritmische informatie-inhoud en inherente voorspelbaarheid van aardbeving catalogi. Hoge complexiteit duidt op willekeurige, onvoorspelbare sequenties, terwijl lage complexiteit deterministische patronen suggereert. De conditionele entropie snelheid meet hoeveel nieuwe informatie elke aardbeving toevoegt, wat onthult of seismische sequenties geheugen effecten, clustering, of echte willekeurigheid vertonen, cruciaal voor het begrijpen van aardbeving voorspelbaarheids limieten."
      }
    },
    {
      question: {
        en: "What quantum field theory concept explains the emergence of scale-free behavior in earthquake systems?",
        es: "¿Qué concepto de teoría de campos cuánticos explica la emergencia de comportamiento libre de escala en sistemas de terremotos?",
        de: "Welches Quantenfeldtheorie-Konzept erklärt das Auftreten skalenfreien Verhaltens in Erdbebensystemen?",
        nl: "Welk quantum veld theorie concept verklaart het ontstaan van schaal-vrij gedrag in aardbeving systemen?"
      },
      options: [
        { en: "Renormalization group flow and critical phenomena", es: "Flujo de grupo de renormalización y fenómenos críticos", de: "Renormierungsgruppenfluß und kritische Phänomene", nl: "Renormalisatie groep stroom en kritieke fenomenen" },
        { en: "Simple harmonic oscillation", es: "Oscilación armónica simple", de: "Einfache harmonische Schwingung", nl: "Eenvoudige harmonische oscillatie" },
        { en: "Classical thermodynamics only", es: "Solo termodinámica clásica", de: "Nur klassische Thermodynamik", nl: "Alleen klassieke thermodynamica" },
        { en: "Linear elastic theory", es: "Teoría elástica lineal", de: "Lineare elastische Theorie", nl: "Lineaire elastische theorie" }
      ],
      correct: 0,
      explanation: {
        en: "Renormalization group theory from quantum field theory explains scale-free behavior in earthquake systems by describing how physical properties change under scale transformations. At critical points, correlation lengths diverge and power-law distributions emerge, characteristic of the Gutenberg-Richter law and aftershock scaling. The renormalization flow reveals fixed points corresponding to different universality classes, explaining why diverse fault systems exhibit similar statistical properties.",
        es: "La teoría de grupo de renormalización de la teoría de campos cuánticos explica el comportamiento libre de escala en sistemas de terremotos describiendo cómo las propiedades físicas cambian bajo transformaciones de escala. En puntos críticos, longitudes de correlación divergen y emergen distribuciones de ley de potencias, característicos de la ley de Gutenberg-Richter y escalamiento de réplicas. El flujo de renormalización revela puntos fijos correspondientes a diferentes clases de universalidad, explicando por qué diversos sistemas de fallas exhiben propiedades estadísticas similares.",
        de: "Die Renormierungsgruppen-Theorie aus der Quantenfeldtheorie erklärt skalenfreies Verhalten in Erdbebensystemen, indem sie beschreibt, wie sich physikalische Eigenschaften unter Skalentransformationen ändern. An kritischen Punkten divergieren Korrelationslängen und Potenzgesetzverteilungen entstehen, charakteristisch für das Gutenberg-Richter-Gesetz und Nachbeben-Skalierung. Der Renormierungsfluß zeigt Fixpunkte entsprechend verschiedenen Universalitätsklassen und erklärt, warum diverse Verwerfungssysteme ähnliche statistische Eigenschaften aufweisen.",
        nl: "Renormalisatie groep theorie uit quantum veld theorie verklaart schaal-vrij gedrag in aardbeving systemen door te beschrijven hoe fysieke eigenschappen veranderen onder schaal transformaties. Bij kritieke punten divergeren correlatie lengtes en ontstaan machtswet distributies, karakteristiek voor de Gutenberg-Richter wet en naschok schaling. De renormalisatie stroom onthult vaste punten corresponderend met verschillende universaliteits klassen, verklarend waarom diverse breuksystemen gelijkaardige statistische eigenschappen vertonen."
      }
    },
    {
      question: {
        en: "What advanced seismic technique uses machine learning to predict earthquake-induced ground failure susceptibility?",
        es: "¿Qué técnica sísmica avanzada utiliza aprendizaje automático para predecir susceptibilidad de falla del suelo inducida por terremotos?",
        de: "Welche fortgeschrittene seismische Technik verwendet maschinelles Lernen zur Vorhersage erdbebeninduzierter Bodenversagenssuszeptibilität?",
        nl: "Welke geavanceerde seismische techniek gebruikt machine learning om aardbeving-geïnduceerde grond faling gevoeligheid te voorspellen?"
      },
      options: [
        { en: "Physics-informed neural networks with multi-modal data fusion", es: "Redes neuronales informadas por física con fusión de datos multimodal", de: "Physik-informierte neuronale Netzwerke mit multimodaler Datenfusion", nl: "Fysica-geïnformeerde neurale netwerken met multi-modale data fusie" },
        { en: "Simple statistical regression", es: "Regresión estadística simple", de: "Einfache statistische Regression", nl: "Eenvoudige statistische regressie" },
        { en: "Linear correlation analysis", es: "Análisis de correlación lineal", de: "Lineare Korrelationsanalyse", nl: "Lineaire correlatie analyse" },
        { en: "Manual expert assessment only", es: "Solo evaluación manual de expertos", de: "Nur manuelle Expertenbewertung", nl: "Alleen handmatige expert beoordeling" }
      ],
      correct: 0,
      explanation: {
        en: "Physics-informed neural networks (PINNs) with multi-modal data fusion integrate seismic ground motion predictions, geological data, topographic information, and hydrological conditions to predict earthquake-induced landslide and liquefaction susceptibility. These models incorporate physical constraints from soil mechanics and seismic wave propagation theory, enabling more reliable predictions than purely data-driven approaches while handling the complex nonlinear relationships between multiple contributing factors.",
        es: "Las redes neuronales informadas por física (PINNs) con fusión de datos multimodal integran predicciones de movimiento sísmico del suelo, datos geológicos, información topográfica y condiciones hidrológicas para predecir susceptibilidad de deslizamiento de tierra y licuefacción inducidos por terremotos. Estos modelos incorporan restricciones físicas de mecánica de suelos y teoría de propagación de ondas sísmicas, permitiendo predicciones más confiables que enfoques puramente basados en datos mientras manejan las relaciones no lineales complejas entre múltiples factores contribuyentes.",
        de: "Physik-informierte neuronale Netzwerke (PINNs) mit multimodaler Datenfusion integrieren seismische Bodenbewegungsvorhersagen, geologische Daten, topographische Informationen und hydrologische Bedingungen zur Vorhersage erdbebeninduzierter Erdrutsch- und Verflüssigungssuszeptibilität. Diese Modelle integrieren physikalische Beschränkungen aus Bodenmechanik und seismischer Wellenausbreitungstheorie und ermöglichen zuverlässigere Vorhersagen als rein datengetriebene Ansätze, während sie komplexe nichtlineare Beziehungen zwischen mehreren beitragenden Faktoren handhaben.",
        nl: "Fysica-geïnformeerde neurale netwerken (PINNs) met multi-modale data fusie integreren seismische grond beweging voorspellingen, geologische data, topografische informatie, en hydrologische condities om aardbeving-geïnduceerde landslide en vloeibaarheids gevoeligheid te voorspellen. Deze modellen incorporeren fysieke beperkingen uit bodem mechanica en seismische golf voortplanting theorie, wat meer betrouwbare voorspellingen mogelijk maakt dan puur data-gedreven benaderingen terwijl ze de complexe niet-lineaire relaties tussen meerdere bijdragende factoren hanteren."
      }
    },
    {
      question: {
        en: "What seismic parameter characterizes the temporal clustering and memory effects in earthquake sequences?",
        es: "¿Qué parámetro sísmico caracteriza el agrupamiento temporal y efectos de memoria en secuencias de terremotos?",
        de: "Welcher seismische Parameter charakterisiert zeitliche Clusterung und Gedächtniseffekte in Erdbebensequenzen?",
        nl: "Welke seismische parameter kenmerkt de temporele clustering en geheugen effecten in aardbeving sequenties?"
      },
      options: [
        { en: "Hurst exponent and long-range correlation analysis", es: "Exponente de Hurst y análisis de correlación de largo alcance", de: "Hurst-Exponent und Langreichweiten-Korrelationsanalyse", nl: "Hurst exponent en lange-afstand correlatie analyse" },
        { en: "Simple inter-event time statistics", es: "Estadísticas simples de tiempo entre eventos", de: "Einfache Zwischenereigniszeit-Statistiken", nl: "Eenvoudige inter-gebeurtenis tijd statistieken" },
        { en: "Linear trend coefficients", es: "Coeficientes de tendencia lineal", de: "Lineare Trendkoeffizienten", nl: "Lineaire trend coëfficiënten" },
        { en: "Average recurrence intervals", es: "Intervalos de recurrencia promedio", de: "Durchschnittliche Wiederholungsintervalle", nl: "Gemiddelde herhaling intervallen" }
      ],
      correct: 0,
      explanation: {
        en: "The Hurst exponent H quantifies long-range temporal correlations and memory effects in earthquake sequences, where H > 0.5 indicates persistent (clustered) behavior, H < 0.5 suggests anti-persistent (alternating) patterns, and H ≈ 0.5 represents random processes. This parameter reveals whether earthquake occurrences exhibit long-term memory, crucial for understanding seismic hazard clustering and the validity of Poissonian earthquake models.",
        es: "El exponente de Hurst H cuantifica correlaciones temporales de largo alcance y efectos de memoria en secuencias de terremotos, donde H > 0.5 indica comportamiento persistente (agrupado), H < 0.5 sugiere patrones anti-persistentes (alternantes), y H ≈ 0.5 representa procesos aleatorios. Este parámetro revela si ocurrencias de terremotos exhiben memoria a largo plazo, crucial para entender agrupamiento de riesgo sísmico y la validez de modelos de terremotos poisonianos.",
        de: "Der Hurst-Exponent H quantifiziert Langreichweiten-zeitliche Korrelationen und Gedächtniseffekte in Erdbebensequenzen, wobei H > 0,5 persistentes (geclustertes) Verhalten anzeigt, H < 0,5 anti-persistente (alternierende) Muster suggeriert und H ≈ 0,5 zufällige Prozesse repräsentiert. Dieser Parameter zeigt, ob Erdbebenvorkommen Langzeitgedächtnis aufweisen, entscheidend für das Verständnis seismischer Gefahrclusterung und die Gültigkeit Poissonscher Erdbebenmodelle.",
        nl: "De Hurst exponent H kwantificeert lange-afstand temporele correlaties en geheugen effecten in aardbeving sequenties, waarbij H > 0,5 persistent (geclusterd) gedrag aanduidt, H < 0,5 anti-persistente (alternerende) patronen suggereert, en H ≈ 0,5 willekeurige processen vertegenwoordigt. Deze parameter onthult of aardbeving voorvallen lang-termijn geheugen vertonen, cruciaal voor het begrijpen van seismische gevaar clustering en de geldigheid van Poissoniaanse aardbeving modellen."
      }
    },
    {
      question: {
        en: "What determines the nonlinear soil behavior during strong ground motion?",
        es: "¿Qué determina el comportamiento no lineal del suelo durante movimiento fuerte del suelo?",
        de: "Was bestimmt das nichtlineare Bodenverhalten während starker Bodenbewegung?",
        nl: "Wat bepaalt het niet-lineaire bodem gedrag tijdens sterke grondbeweging?"
      },
      options: [
        { en: "Shear strain level and pore pressure generation", es: "Nivel de deformación por corte y generación de presión de poros", de: "Scherdehnung-Niveau und Porendruckerzeugung", nl: "Schuifspanning niveau en porie druk generatie" },
        { en: "Temperature effects only", es: "Solo efectos de temperatura", de: "Nur Temperatureffekte", nl: "Alleen temperatuur effecten" },
        { en: "Gravitational forces only", es: "Solo fuerzas gravitacionales", de: "Nur Gravitationskräfte", nl: "Alleen gravitatie krachten" },
        { en: "Static loading only", es: "Solo carga estática", de: "Nur statische Belastung", nl: "Alleen statische belasting" }
      ],
      correct: 0,
      explanation: {
        en: "Nonlinear soil behavior is primarily controlled by shear strain amplitude and pore pressure generation. At small strains (<10⁻⁴), soil behaves elastically, but larger strains cause stiffness degradation and increased damping. In saturated soils, cyclic loading generates excess pore pressures that can lead to liquefaction and dramatic strength reduction.",
        es: "El comportamiento no lineal del suelo es controlado principalmente por amplitud de deformación por corte y generación de presión de poros. A deformaciones pequeñas (<10⁻⁴), el suelo se comporta elásticamente, pero deformaciones mayores causan degradación de rigidez y amortiguación aumentada. En suelos saturados, carga cíclica genera presiones de poros excesivas que pueden llevar a licuefacción y reducción dramática de resistencia.",
        de: "Nichtlineares Bodenverhalten wird hauptsächlich durch Scherdehnung-Amplitude und Porendruckerzeugung kontrolliert. Bei kleinen Dehnungen (<10⁻⁴) verhält sich Boden elastisch, aber größere Dehnungen verursachen Steifigkeitsabbau und erhöhte Dämpfung. In gesättigten Böden erzeugt zyklische Belastung überschüssige Porendrücke, die zu Verflüssigung und dramatischer Festigkeitsreduktion führen können.",
        nl: "Niet-lineair bodem gedrag wordt primair gecontroleerd door schuifspanning amplitude en porie druk generatie. Bij kleine spanningen (<10⁻⁴) gedraagt bodem zich elastisch, maar grotere spanningen veroorzaken stijfheid degradatie en verhoogde demping. In verzadigde bodems genereert cyclische belasting overtollige porie drukken die kunnen leiden tot liquefactie en dramatische sterkte reductie."
      }
    },
    {
      question: {
        en: "What seismic parameter characterizes the efficiency of energy transfer between different wavefield components?",
        es: "¿Qué parámetro sísmico caracteriza la eficiencia de transferencia de energía entre diferentes componentes de campo de ondas?",
        de: "Welcher seismische Parameter charakterisiert die Effizienz des Energietransfers zwischen verschiedenen Wellenfeld-Komponenten?",
        nl: "Welke seismische parameter kenmerkt de efficiëntie van energie overdracht tussen verschillende golfveld componenten?"
      },
      options: [
        { en: "Mode coupling coefficient and scattering matrix elements", es: "Coeficiente de acoplamiento de modo y elementos de matriz de dispersión", de: "Modenkopplungskoeffizient und Streumatrix-Elemente", nl: "Mode koppeling coëfficiënt en verstrooiing matrix elementen" },
        { en: "Simple reflection coefficients", es: "Coeficientes de reflexión simples", de: "Einfache Reflexionskoeffizienten", nl: "Eenvoudige reflectie coëfficiënten" },
        { en: "Amplitude ratios only", es: "Solo relaciones de amplitud", de: "Nur Amplitudenverhältnisse", nl: "Alleen amplitude verhoudingen" },
        { en: "Frequency content changes", es: "Cambios de contenido de frecuencia", de: "Frequenzinhalts-Änderungen", nl: "Frequentie-inhoud veranderingen" }
      ],
      correct: 0,
      explanation: {
        en: "Mode coupling coefficients and scattering matrix elements quantify how efficiently seismic energy transfers between different wave modes (P, S, surface waves) at heterogeneities and discontinuities. These parameters describe the full scattering behavior, including mode conversions, and are essential for understanding complex wavefield interactions in realistic Earth structures.",
        es: "Los coeficientes de acoplamiento de modo y elementos de matriz de dispersión cuantifican cuán eficientemente la energía sísmica se transfiere entre diferentes modos de onda (P, S, ondas superficiales) en heterogeneidades y discontinuidades. Estos parámetros describen el comportamiento completo de dispersión, incluyendo conversiones de modo, y son esenciales para entender interacciones complejas de campo de ondas en estructuras terrestres realistas.",
        de: "Modenkopplungskoeffizienten und Streumatrix-Elemente quantifizieren, wie effizient seismische Energie zwischen verschiedenen Wellenmoden (P, S, Oberflächenwellen) an Heterogenitäten und Diskontinuitäten übertragen wird. Diese Parameter beschreiben das vollständige Streuverhalten einschließlich Modenkonversionen und sind wesentlich für das Verständnis komplexer Wellenfeld-Wechselwirkungen in realistischen Erdstrukturen.",
        nl: "Mode koppeling coëfficiënten en verstrooiing matrix elementen kwantificeren hoe efficiënt seismische energie overdraagt tussen verschillende golf modes (P, S, oppervlaktegolven) bij heterogeniteiten en discontinuïteiten. Deze parameters beschrijven het volledige verstrooiingsgedrag, inclusief mode conversies, en zijn essentieel voor het begrijpen van complexe golfveld interacties in realistische aardstructuren."
      }
    },
    {
      question: {
        en: "What advanced computational framework enables simulation of seismic wave propagation in complex 3D geological models?",
        es: "¿Qué marco computacional avanzado permite simulación de propagación de ondas sísmicas en modelos geológicos 3D complejos?",
        de: "Welches fortgeschrittene Berechnungsframework ermöglicht Simulation seismischer Wellenausbreitung in komplexen 3D-Geologiemodellen?",
        nl: "Welk geavanceerd computationeel framework maakt simulatie van seismische golfvoortplanting mogelijk in complexe 3D geologische modellen?"
      },
      options: [
        { en: "Spectral element method with unstructured meshes", es: "Método de elementos espectrales con mallas no estructuradas", de: "Spektrale Elemente-Methode mit unstrukturierten Gittern", nl: "Spectrale element methode met ongestructureerde roosters" },
        { en: "Simple finite difference on regular grids", es: "Diferencias finitas simples en cuadrículas regulares", de: "Einfache finite Differenzen auf regelmäßigen Gittern", nl: "Eenvoudige eindige verschillen op regelmatige roosters" },
        { en: "Ray tracing methods only", es: "Solo métodos de trazado de rayos", de: "Nur Strahlenverfolgungs-Methoden", nl: "Alleen straal volg methoden" },
        { en: "Analytical solutions", es: "Soluciones analíticas", de: "Analytische Lösungen", nl: "Analytische oplossingen" }
      ],
      correct: 0,
      explanation: {
        en: "The spectral element method with unstructured meshes provides the optimal balance between accuracy and computational efficiency for complex 3D seismic wave simulations. This approach combines the exponential convergence of spectral methods with the geometric flexibility of unstructured meshes, enabling accurate representation of complex geological boundaries, topography, and material discontinuities while maintaining high-order accuracy.",
        es: "El método de elementos espectrales con mallas no estructuradas proporciona el equilibrio óptimo entre precisión y eficiencia computacional para simulaciones complejas de ondas sísmicas 3D. Este enfoque combina la convergencia exponencial de métodos espectrales con la flexibilidad geométrica de mallas no estructuradas, permitiendo representación precisa de límites geológicos complejos, topografía, y discontinuidades de material mientras mantiene precisión de alto orden.",
        de: "Die spektrale Elemente-Methode mit unstrukturierten Gittern bietet das optimale Gleichgewicht zwischen Genauigkeit und Recheneffizienz für komplexe 3D-seismische Wellensimulationen. Dieser Ansatz kombiniert die exponentielle Konvergenz spektraler Methoden mit der geometrischen Flexibilität unstrukturierter Gitter und ermöglicht genaue Darstellung komplexer geologischer Grenzen, Topographie und Materialdiskontinuitäten bei Beibehaltung hoher Genauigkeit.",
        nl: "De spectrale element methode met ongestructureerde roosters biedt de optimale balans tussen nauwkeurigheid en computationele efficiëntie voor complexe 3D seismische golf simulaties. Deze benadering combineert de exponentiële convergentie van spectrale methoden met de geometrische flexibiliteit van ongestructureerde roosters, wat nauwkeurige representatie mogelijk maakt van complexe geologische grenzen, topografie, en materiaal discontinuïteiten terwijl hoge-orde nauwkeurigheid behouden blijft."
      }
    },
    {
      question: {
        en: "What controls the emergence of coherent structures in turbulent seismic wavefields?",
        es: "¿Qué controla la emergencia de estructuras coherentes en campos de ondas sísmicas turbulentas?",
        de: "Was kontrolliert das Auftreten kohärenter Strukturen in turbulenten seismischen Wellenfeldern?",
        nl: "Wat controleert het ontstaan van coherente structuren in turbulente seismische golfvelden?"
      },
      options: [
        { en: "Nonlinear wave interactions and soliton formation", es: "Interacciones no lineales de ondas y formación de solitones", de: "Nichtlineare Wellen-Wechselwirkungen und Soliton-Bildung", nl: "Niet-lineaire golf interacties en soliton formatie" },
        { en: "Linear superposition only", es: "Solo superposición lineal", de: "Nur lineare Überlagerung", nl: "Alleen lineaire superpositie" },
        { en: "Simple dispersion effects", es: "Efectos de dispersión simples", de: "Einfache Dispersionseffekte", nl: "Eenvoudige dispersie effecten" },
        { en: "Random scattering", es: "Dispersión aleatoria", de: "Zufällige Streuung", nl: "Willekeurige verstrooiing" }
      ],
      correct: 0,
      explanation: {
        en: "Coherent structures in turbulent seismic wavefields emerge through nonlinear wave interactions that can lead to soliton formation and other self-organized patterns. These nonlinear effects become important at high strain amplitudes, where elastic wave equations exhibit nonlinear behavior. Solitons maintain their shape during propagation and can emerge from initially chaotic wavefields through energy localization processes.",
        es: "Las estructuras coherentes en campos de ondas sísmicas turbulentas emergen a través de interacciones no lineales de ondas que pueden llevar a formación de solitones y otros patrones auto-organizados. Estos efectos no lineales se vuelven importantes a amplitudes de deformación altas, donde ecuaciones de ondas elásticas exhiben comportamiento no lineal. Los solitones mantienen su forma durante propagación y pueden emerger de campos de ondas inicialmente caóticos a través de procesos de localización de energía.",
        de: "Kohärente Strukturen in turbulenten seismischen Wellenfeldern entstehen durch nichtlineare Wellen-Wechselwirkungen, die zu Soliton-Bildung und anderen selbstorganisierten Mustern führen können. Diese nichtlinearen Effekte werden bei hohen Dehnungsamplituden wichtig, wo elastische Wellengleichungen nichtlineares Verhalten zeigen. Solitonen behalten ihre Form während der Ausbreitung bei und können aus anfangs chaotischen Wellenfeldern durch Energielokalisierungsprozesse entstehen.",
        nl: "Coherente structuren in turbulente seismische golfvelden ontstaan door niet-lineaire golf interacties die kunnen leiden tot soliton formatie en andere zelf-georganiseerde patronen. Deze niet-lineaire effecten worden belangrijk bij hoge rek amplitudes, waarbij elastische golf vergelijkingen niet-lineair gedrag vertonen. Solitons behouden hun vorm tijdens voortplanting en kunnen ontstaan uit aanvankelijk chaotische golfvelden door energie lokalisatie processen."
      }
    },
    {
      question: {
        en: "What seismic imaging technique uses time-reversal acoustics for source localization and characterization?",
        es: "¿Qué técnica de imagen sísmica utiliza acústica de inversión temporal para localización y caracterización de fuentes?",
        de: "Welche seismische Bildgebungstechnik nutzt Zeitumkehr-Akustik für Quelllokalisierung und -charakterisierung?",
        nl: "Welke seismische beeldvormingstechniek gebruikt tijd-omgekeerde akoestiek voor bron lokalisatie en karakterisering?"
      },
      options: [
        { en: "Time-reversal focusing and reciprocity-based imaging", es: "Enfoque de inversión temporal e imagen basada en reciprocidad", de: "Zeitumkehr-Fokussierung und reziprozitäts-basierte Bildgebung", nl: "Tijd-omgekeerde focussering en reciprociteit-gebaseerde beeldvorming" },
        { en: "Standard beamforming only", es: "Solo conformación de haz estándar", de: "Nur Standard-Strahlformung", nl: "Alleen standaard bundel vorming" },
        { en: "Simple triangulation", es: "Triangulación simple", de: "Einfache Triangulation", nl: "Eenvoudige triangulatie" },
        { en: "Amplitude-based location", es: "Ubicación basada en amplitud", de: "Amplituden-basierte Ortung", nl: "Amplitude-gebaseerde locatie" }
      ],
      correct: 0,
      explanation: {
        en: "Time-reversal acoustics exploits the reciprocity principle of wave propagation to achieve super-resolution focusing and source imaging. By time-reversing recorded signals and re-emitting them from receiver locations, the technique focuses energy back to the original source location with resolution beyond the classical diffraction limit. This approach is particularly powerful for localizing complex seismic sources in heterogeneous media.",
        es: "La acústica de inversión temporal explota el principio de reciprocidad de propagación de ondas para lograr enfoque de super-resolución e imagen de fuentes. Invirtiendo temporalmente señales registradas y re-emitiéndolas desde ubicaciones de receptor, la técnica enfoca energía de vuelta a la ubicación original de fuente con resolución más allá del límite clásico de difracción. Este enfoque es particularmente poderoso para localizar fuentes sísmicas complejas en medios heterogéneos.",
        de: "Zeitumkehr-Akustik nutzt das Reziprozitätsprinzip der Wellenausbreitung für Super-Auflösungs-Fokussierung und Quellenbildgebung. Durch zeitliche Umkehrung aufgezeichneter Signale und Wiederausstrahlung von Empfängerorten fokussiert die Technik Energie zurück zum ursprünglichen Quellenort mit Auflösung jenseits des klassischen Beugungsgrenzwerts. Dieser Ansatz ist besonders mächtig für die Lokalisierung komplexer seismischer Quellen in heterogenen Medien.",
        nl: "Tijd-omgekeerde akoestiek benut het reciprociteit principe van golf voortplanting om super-resolutie focussering en bron beeldvorming te bereiken. Door tijd-omgekeerde opgenomen signalen en her-emissie vanaf ontvanger locaties, focust de techniek energie terug naar de originele bron locatie met resolutie voorbij de klassieke diffractie limiet. Deze benadering is bijzonder krachtig voor het lokaliseren van complexe seismische bronnen in heterogene media."
      }
    },
    {
      question: {
        en: "What controls the formation of seismic metamaterials with negative effective properties?",
        es: "¿Qué controla la formación de metamateriales sísmicos con propiedades efectivas negativas?",
        de: "Was kontrolliert die Bildung seismischer Metamaterialien mit negativen effektiven Eigenschaften?",
        nl: "Wat controleert de formatie van seismische metamaterialen met negatieve effectieve eigenschappen?"
      },
      options: [
        { en: "Resonant scattering from periodic microstructures", es: "Dispersión resonante de microestructuras periódicas", de: "Resonante Streuung von periodischen Mikrostrukturen", nl: "Resonante verstrooiing van periodieke microstructuren" },
        { en: "Simple material density", es: "Densidad de material simple", de: "Einfache Materialdichte", nl: "Eenvoudige materiaal dichtheid" },
        { en: "Linear elastic moduli only", es: "Solo módulos elásticos lineales", de: "Nur lineare elastische Moduln", nl: "Alleen lineaire elastische moduli" },
        { en: "Temperature effects", es: "Efectos de temperatura", de: "Temperatureffekte", nl: "Temperatuur effecten" }
      ],
      correct: 0,
      explanation: {
        en: "Seismic metamaterials with negative effective properties (negative density, negative bulk modulus) are created through resonant scattering from carefully designed periodic microstructures. These artificial materials can exhibit exotic wave propagation behaviors like negative refraction, cloaking, and super-focusing. The resonant elements act as local oscillators that create out-of-phase responses, leading to effective negative parameters at specific frequency bands.",
        es: "Los metamateriales sísmicos con propiedades efectivas negativas (densidad negativa, módulo volumétrico negativo) son creados a través de dispersión resonante de microestructuras periódicas cuidadosamente diseñadas. Estos materiales artificiales pueden exhibir comportamientos exóticos de propagación de ondas como refracción negativa, ocultamiento, y super-enfoque. Los elementos resonantes actúan como osciladores locales que crean respuestas desfasadas, llevando a parámetros efectivos negativos en bandas de frecuencia específicas.",
        de: "Seismische Metamaterialien mit negativen effektiven Eigenschaften (negative Dichte, negativer Kompressionsmodul) werden durch resonante Streuung von sorgfältig entworfenen periodischen Mikrostrukturen erzeugt. Diese künstlichen Materialien können exotische Wellenausbreitungsverhalten wie negative Brechung, Tarnung und Super-Fokussierung zeigen. Die resonanten Elemente wirken als lokale Oszillatoren, die phasenverschobene Antworten erzeugen und zu effektiven negativen Parametern in spezifischen Frequenzbändern führen.",
        nl: "Seismische metamaterialen met negatieve effectieve eigenschappen (negatieve dichtheid, negatieve bulk modulus) worden gecreëerd door resonante verstrooiing van zorgvuldig ontworpen periodieke microstructuren. Deze kunstmatige materialen kunnen exotische golf voortplantings gedragingen vertonen zoals negatieve breking, verhulling, en super-focussering. De resonante elementen werken als lokale oscillatoren die uit-fase responsen creëren, wat leidt tot effectieve negatieve parameters bij specifieke frequentie banden."
      }
    },
    {
      question: {
        en: "What seismic parameter quantifies the degree of wavefield localization in random heterogeneous media?",
        es: "¿Qué parámetro sísmico cuantifica el grado de localización de campo de ondas en medios heterogéneos aleatorios?",
        de: "Welcher seismische Parameter quantifiziert den Grad der Wellenfeld-Lokalisierung in zufälligen heterogenen Medien?",
        nl: "Welke seismische parameter kwantificeert de mate van golfveld lokalisatie in willekeurige heterogene media?"
      },
      options: [
        { en: "Anderson localization length and participation ratio", es: "Longitud de localización de Anderson y razón de participación", de: "Anderson-Lokalisierungslänge und Partizipationsverhältnis", nl: "Anderson lokalisatie lengte en participatie verhouding" },
        { en: "Simple attenuation coefficient", es: "Coeficiente de atenuación simple", de: "Einfacher Dämpfungskoeffizient", nl: "Eenvoudige demping coëfficiënt" },
        { en: "Wave amplitude only", es: "Solo amplitud de onda", de: "Nur Wellenamplitude", nl: "Alleen golf amplitude" },
        { en: "Frequency content", es: "Contenido de frecuencia", de: "Frequenzinhalt", nl: "Frequentie inhoud" }
      ],
      correct: 0,
      explanation: {
        en: "The Anderson localization length and participation ratio quantify how seismic waves become spatially localized in strongly scattering random media. Anderson localization occurs when disorder-induced scattering prevents wave diffusion, leading to exponentially decaying evanescent modes. The localization length characterizes the decay scale, while the participation ratio measures the effective number of sites contributing to the localized state.",
        es: "La longitud de localización de Anderson y razón de participación cuantifican cómo las ondas sísmicas se vuelven espacialmente localizadas en medios aleatorios fuertemente dispersores. La localización de Anderson ocurre cuando dispersión inducida por desorden previene difusión de ondas, llevando a modos evanescentes exponencialmente decayentes. La longitud de localización caracteriza la escala de decaimiento, mientras que la razón de participación mide el número efectivo de sitios contribuyendo al estado localizado.",
        de: "Die Anderson-Lokalisierungslänge und das Partizipationsverhältnis quantifizieren, wie seismische Wellen in stark streuenden zufälligen Medien räumlich lokalisiert werden. Anderson-Lokalisierung tritt auf, wenn unordnungsinduzierte Streuung Wellendiffusion verhindert und zu exponentiell abklingenden evaneszenten Moden führt. Die Lokalisierungslänge charakterisiert die Abklingskala, während das Partizipationsverhältnis die effektive Anzahl der Orte misst, die zum lokalisierten Zustand beitragen.",
        nl: "De Anderson lokalisatie lengte en participatie verhouding kwantificeren hoe seismische golven ruimtelijk gelokaliseerd worden in sterk verstrooiende willekeurige media. Anderson lokalisatie treedt op wanneer wanorde-geïnduceerde verstrooiing golf diffusie voorkomt, wat leidt tot exponentieel vervallende evanescente modes. De lokalisatie lengte karakteriseert de verval schaal, terwijl de participatie verhouding het effectieve aantal sites meet die bijdragen aan de gelokaliseerde toestand."
      }
    },
    {
      question: {
        en: "What advanced technique enables detection of extremely weak seismic signals buried in ambient noise?",
        es: "¿Qué técnica avanzada permite detección de señales sísmicas extremadamente débiles enterradas en ruido ambiental?",
        de: "Welche fortgeschrittene Technik ermöglicht die Detektion extrem schwacher seismischer Signale, die in Umgebungsrauschen vergraben sind?",
        nl: "Welke geavanceerde techniek maakt detectie mogelijk van extreem zwakke seismische signalen begraven in omgevingsruis?"
      },
      options: [
        { en: "Matched filtering with template databases and machine learning", es: "Filtrado ajustado con bases de datos de plantillas y aprendizaje automático", de: "Angepasste Filterung mit Template-Datenbanken und maschinellem Lernen", nl: "Aangepaste filtering met sjabloon databases en machine learning" },
        { en: "Simple amplitude thresholding", es: "Umbralización de amplitud simple", de: "Einfache Amplitudenschwellwertbildung", nl: "Eenvoudige amplitude drempelwaarde" },
        { en: "Manual visual inspection", es: "Inspección visual manual", de: "Manuelle visuelle Inspektion", nl: "Handmatige visuele inspectie" },
        { en: "Basic frequency filtering", es: "Filtrado de frecuencia básico", de: "Grundlegende Frequenzfilterung", nl: "Basis frequentie filtering" }
      ],
      correct: 0,
      explanation: {
        en: "Matched filtering with template databases and machine learning enables detection of extremely weak seismic signals with signal-to-noise ratios well below conventional detection thresholds. This technique cross-correlates continuous data with high-quality template waveforms, while machine learning algorithms can automatically identify and classify subtle signal patterns. The combination achieves detection capabilities orders of magnitude better than traditional methods.",
        es: "El filtrado ajustado con bases de datos de plantillas y aprendizaje automático permite detección de señales sísmicas extremadamente débiles con relaciones señal-ruido muy por debajo de umbrales de detección convencionales. Esta técnica correlaciona cruzadamente datos continuos con formas de onda de plantilla de alta calidad, mientras que algoritmos de aprendizaje automático pueden identificar y clasificar automáticamente patrones de señal sutiles. La combinación logra capacidades de detección órdenes de magnitud mejores que métodos tradicionales.",
        de: "Angepasste Filterung mit Template-Datenbanken und maschinellem Lernen ermöglicht die Detektion extrem schwacher seismischer Signale mit Signal-Rausch-Verhältnissen weit unterhalb konventioneller Detektionsschwellen. Diese Technik kreuzkorreliert kontinuierliche Daten mit hochwertigen Template-Wellenformen, während maschinelle Lernalgorithmen automatisch subtile Signalmuster identifizieren und klassifizieren können. Die Kombination erreicht Detektionsfähigkeiten um Größenordnungen besser als traditionelle Methoden.",
        nl: "Aangepaste filtering met sjabloon databases en machine learning maakt detectie mogelijk van extreem zwakke seismische signalen met signaal-ruis verhoudingen ver onder conventionele detectie drempels. Deze techniek kruiscorrelateert continue data met hoge-kwaliteit sjabloon golfvormen, terwijl machine learning algoritmen automatisch subtiele signaal patronen kunnen identificeren en classificeren. De combinatie bereikt detectie capaciteiten ordes van grootte beter dan traditionele methoden."
      }
    },
    {
      question: {
        en: "What controls the transition between diffusive and ballistic seismic wave transport in complex media?",
        es: "¿Qué controla la transición entre transporte difusivo y balístico de ondas sísmicas en medios complejos?",
        de: "Was kontrolliert den Übergang zwischen diffusivem und ballistischem seismischem Wellentransport in komplexen Medien?",
        nl: "Wat controleert de overgang tussen diffusieve en ballistische seismische golf transport in complexe media?"
      },
      options: [
        { en: "Scattering mean free path and wave coherence properties", es: "Camino libre medio de dispersión y propiedades de coherencia de ondas", de: "Streuung mittlere freie Weglänge und Wellen-Kohärenzeigenschaften", nl: "Verstrooiing gemiddelde vrije weg en golf coherentie eigenschappen" },
        { en: "Wave frequency only", es: "Solo frecuencia de onda", de: "Nur Wellenfrequenz", nl: "Alleen golf frequentie" },
        { en: "Material density variations", es: "Variaciones de densidad del material", de: "Materialdichte-Variationen", nl: "Materiaal dichtheid variaties" },
        { en: "Temperature gradients", es: "Gradientes de temperatura", de: "Temperaturgradienten", nl: "Temperatuur gradiënten" }
      ],
      correct: 0,
      explanation: {
        en: "The transition from ballistic (coherent) to diffusive (incoherent) seismic wave transport is controlled by the scattering mean free path relative to the system size and wave coherence properties. When the mean free path is much larger than the system, waves propagate ballistically. When it becomes comparable to or smaller than the wavelength, multiple scattering leads to diffusive transport where waves lose phase coherence and undergo random walk behavior.",
        es: "La transición de transporte balístico (coherente) a difusivo (incoherente) de ondas sísmicas es controlada por el camino libre medio de dispersión relativo al tamaño del sistema y propiedades de coherencia de ondas. Cuando el camino libre medio es mucho mayor que el sistema, ondas se propagan balísticamente. Cuando se vuelve comparable o menor que la longitud de onda, dispersión múltiple lleva a transporte difusivo donde ondas pierden coherencia de fase y experimentan comportamiento de caminata aleatoria.",
        de: "Der Übergang von ballistischem (kohärentem) zu diffusivem (inkohärentem) seismischem Wellentransport wird durch die Streuung mittlere freie Weglänge relativ zur Systemgröße und Wellen-Kohärenzeigenschaften kontrolliert. Wenn die mittlere freie Weglänge viel größer als das System ist, propagieren Wellen ballistisch. Wenn sie vergleichbar oder kleiner als die Wellenlänge wird, führt Mehrfachstreuung zu diffusivem Transport, wo Wellen Phasenkohärenz verlieren und Random-Walk-Verhalten zeigen.",
        nl: "De overgang van ballistische (coherente) naar diffusieve (incoherente) seismische golf transport wordt gecontroleerd door de verstrooiing gemiddelde vrije weg relatief tot de systeem grootte en golf coherentie eigenschappen. Wanneer de gemiddelde vrije weg veel groter is dan het systeem, propageren golven ballistisch. Wanneer het vergelijkbaar wordt met of kleiner dan de golflengte, leidt meervoudige verstrooiing tot diffusieve transport waar golven fase coherentie verliezen en willekeurige wandel gedrag ondergaan."
      }
    },
    {
      question: {
        en: "What seismic technique uses phase-field methods to model earthquake rupture dynamics?",
        es: "¿Qué técnica sísmica utiliza métodos de campo de fase para modelar dinámicas de ruptura de terremotos?",
        de: "Welche seismische Technik nutzt Phasenfeld-Methoden zur Modellierung von Erdbebenbruch-Dynamiken?",
        nl: "Welke seismische techniek gebruikt faseveld methoden om aardbeving breuk dynamiek te modelleren?"
      },
      options: [
        { en: "Variational phase-field fracture mechanics", es: "Mecánica variacional de fractura de campo de fase", de: "Variationelle Phasenfeld-Bruchmechanik", nl: "Variationele faseveld breuk mechanica" },
        { en: "Simple cohesive zone models", es: "Modelos simples de zona cohesiva", de: "Einfache kohäsive Zonenmodelle", nl: "Eenvoudige cohesieve zone modellen" },
        { en: "Linear elastic fracture only", es: "Solo fractura elástica lineal", de: "Nur linear-elastische Fraktur", nl: "Alleen lineaire elastische breuk" },
        { en: "Rate-and-state friction laws", es: "Leyes de fricción tasa-y-estado", de: "Rate-and-State-Reibungsgesetze", nl: "Rate-and-state wrijving wetten" }
      ],
      correct: 0,
      explanation: {
        en: "Variational phase-field fracture mechanics provides a thermodynamically consistent framework for modeling earthquake rupture dynamics without prescribing crack paths. The phase field smoothly represents the transition from intact to broken material, while variational principles govern crack nucleation, propagation, and arrest. This approach naturally handles complex crack patterns, branching, and coalescence in heterogeneous fault systems.",
        es: "La mecánica variacional de fractura de campo de fase proporciona un marco termodinámicamente consistente para modelar dinámicas de ruptura de terremotos sin prescribir trayectorias de grieta. El campo de fase representa suavemente la transición de material intacto a roto, mientras que principios variacionales gobiernan nucleación, propagación, y detención de grietas. Este enfoque maneja naturalmente patrones complejos de grietas, ramificación, y coalescencia en sistemas de fallas heterogéneos.",
        de: "Variationelle Phasenfeld-Bruchmechanik bietet einen thermodynamisch konsistenten Rahmen für die Modellierung von Erdbebenbruch-Dynamiken ohne Vorschreibung von Risspfaden. Das Phasenfeld repräsentiert glatt den Übergang von intaktem zu gebrochenem Material, während Variationsprinzipien Rissnukleation, -ausbreitung und -stopp regieren. Dieser Ansatz behandelt natürlich komplexe Rissmuster, Verzweigung und Koaleszenz in heterogenen Verwerfungssystemen.",
        nl: "Variationele faseveld breuk mechanica biedt een thermodynamisch consistent framework voor het modelleren van aardbeving breuk dynamiek zonder het voorschrijven van scheur paden. Het faseveld vertegenwoordigt glad de overgang van intact naar gebroken materiaal, terwijl variationele principes scheur nucleatie, voortplanting, en stop regeren. Deze benadering handelt natuurlijk complexe scheur patronen, vertakking, en coalescente in heterogene breuksystemen af."
      }
    },
    {
      question: {
        en: "What controls the amplification and focusing effects of seismic waves in sedimentary basins?",
        es: "¿Qué controla los efectos de amplificación y enfoque de ondas sísmicas en cuencas sedimentarias?",
        de: "Was kontrolliert die Verstärkungs- und Fokussierungseffekte seismischer Wellen in Sedimentbecken?",
        nl: "Wat controleert de versterking en focussering effecten van seismische golven in sedimentaire bekkens?"
      },
      options: [
        { en: "Basin geometry and impedance contrasts", es: "Geometría de cuenca y contrastes de impedancia", de: "Beckengeometrie und Impedanzkontraste", nl: "Bekken geometrie en impedantie contrasten" },
        { en: "Surface topography only", es: "Solo topografía superficial", de: "Nur Oberflächentopographie", nl: "Alleen oppervlakte topografie" },
        { en: "Source depth effects", es: "Efectos de profundidad de fuente", de: "Quelltiefeneffekte", nl: "Bron diepte effecten" },
        { en: "Atmospheric conditions", es: "Condiciones atmosféricas", de: "Atmosphärische Bedingungen", nl: "Atmosferische condities" }
      ],
      correct: 0,
      explanation: {
        en: "Seismic wave amplification and focusing in sedimentary basins are controlled by basin geometry (depth, shape, lateral variations) and impedance contrasts between soft sediments and surrounding bedrock. The impedance contrast determines reflection coefficients, while basin geometry controls wave trapping, resonance frequencies, and focusing effects. Deep, bowl-shaped basins with sharp impedance contrasts produce the strongest amplification through multiple reflections and constructive interference.",
        es: "La amplificación y enfoque de ondas sísmicas en cuencas sedimentarias son controlados por geometría de cuenca (profundidad, forma, variaciones laterales) y contrastes de impedancia entre sedimentos blandos y roca madre circundante. El contraste de impedancia determina coeficientes de reflexión, mientras que geometría de cuenca controla atrapamiento de ondas, frecuencias de resonancia, y efectos de enfoque. Cuencas profundas con forma de tazón con contrastes de impedancia agudos producen la amplificación más fuerte a través de reflexiones múltiples e interferencia constructiva.",
        de: "Seismische Wellen-Verstärkung und -Fokussierung in Sedimentbecken werden durch Beckengeometrie (Tiefe, Form, laterale Variationen) und Impedanzkontraste zwischen weichen Sedimenten und umgebendem Grundgestein kontrolliert. Der Impedanzkontrast bestimmt Reflexionskoeffizienten, während Beckengeometrie Welleneinfang, Resonanzfrequenzen und Fokussierungseffekte kontrolliert. Tiefe, schüsselförmige Becken mit scharfen Impedanzkontrasten produzieren die stärkste Verstärkung durch Mehrfachreflexionen und konstruktive Interferenz.",
        nl: "Seismische golf versterking en focussering in sedimentaire bekkens worden gecontroleerd door bekken geometrie (diepte, vorm, laterale variaties) en impedantie contrasten tussen zachte sedimenten en omringende basis gesteente. Het impedantie contrast bepaalt reflectie coëfficiënten, terwijl bekken geometrie golf vasthouden, resonantie frequenties, en focussering effecten controleert. Diepe, kom-vormige bekkens met scherpe impedantie contrasten produceren de sterkste versterking door meervoudige reflecties en constructieve interferentie."
      }
    },
    {
      question: {
        en: "What seismic parameter characterizes the information content and complexity of earthquake source processes?",
        es: "¿Qué parámetro sísmico caracteriza el contenido de información y complejidad de procesos de fuente de terremotos?",
        de: "Welcher seismische Parameter charakterisiert den Informationsgehalt und die Komplexität von Erdbeben-Quellprozessen?",
        nl: "Welke seismische parameter kenmerkt de informatie-inhoud en complexiteit van aardbeving bron processen?"
      },
      options: [
        { en: "Algorithmic complexity and entropy measures", es: "Complejidad algorítmica y medidas de entropía", de: "Algorithmische Komplexität und Entropie-Maße", nl: "Algoritmische complexiteit en entropie metingen" },
        { en: "Simple magnitude values", es: "Valores de magnitud simples", de: "Einfache Magnitudenwerte", nl: "Eenvoudige magnitude waarden" },
        { en: "Duration measurements", es: "Mediciones de duración", de: "Dauermessungen", nl: "Duur metingen" },
        { en: "Peak ground acceleration", es: "Aceleración máxima del suelo", de: "Spitzen-Bodenbeschleunigung", nl: "Piek grond versnelling" }
      ],
      correct: 0,
      explanation: {
        en: "Algorithmic complexity and entropy measures quantify the information content and complexity of earthquake source processes by analyzing the compressibility and randomness of seismic waveforms. High complexity indicates irregular, multi-scale rupture processes with rich information content, while low complexity suggests more predictable, simple rupture patterns. These measures provide insights into the underlying physics of fault rupture and stress release mechanisms.",
        es: "La complejidad algorítmica y medidas de entropía cuantifican el contenido de información y complejidad de procesos de fuente de terremotos analizando compresibilidad y aleatoriedad de formas de onda sísmicas. Alta complejidad indica procesos de ruptura irregulares y multi-escala con contenido de información rico, mientras que baja complejidad sugiere patrones de ruptura más predecibles y simples. Estas medidas proporcionan conocimientos sobre la física subyacente de ruptura de fallas y mecanismos de liberación de esfuerzo.",
        de: "Algorithmische Komplexität und Entropie-Maße quantifizieren den Informationsgehalt und die Komplexität von Erdbeben-Quellprozessen durch Analyse der Komprimierbarkeit und Zufälligkeit seismischer Wellenformen. Hohe Komplexität zeigt unregelmäßige, multiskalige Bruchprozesse mit reichem Informationsgehalt an, während niedrige Komplexität vorhersagbarere, einfache Bruchmuster suggeriert. Diese Maße bieten Einblicke in die zugrundeliegende Physik von Verwerfungsbrüchen und Spannungsfreisetzungsmechanismen.",
        nl: "Algoritmische complexiteit en entropie metingen kwantificeren de informatie-inhoud en complexiteit van aardbeving bron processen door de compressibiliteit en willekeurigheid van seismische golfvormen te analyseren. Hoge complexiteit duidt op onregelmatige, multi-schaal breuk processen met rijke informatie-inhoud, terwijl lage complexiteit meer voorspelbare, eenvoudige breuk patronen suggereert. Deze metingen bieden inzichten in de onderliggende fysica van breuk breuken en spanning vrijgave mechanismen."
      }
    },
    {
      question: {
        en: "What advanced computational approach enables real-time earthquake early warning with machine learning?",
        es: "¿Qué enfoque computacional avanzado permite alerta temprana de terremotos en tiempo real con aprendizaje automático?",
        de: "Welcher fortgeschrittene Berechnungsansatz ermöglicht Echtzeit-Erdbebenfrühwarnung mit maschinellem Lernen?",
        nl: "Welke geavanceerde computationele benadering maakt real-time aardbeving vroege waarschuwing mogelijk met machine learning?"
      },
      options: [
        { en: "Edge computing with federated learning networks", es: "Computación en el borde con redes de aprendizaje federado", de: "Edge-Computing mit föderierten Lernnetzwerken", nl: "Edge computing met gefedereerde leer netwerken" },
        { en: "Centralized batch processing", es: "Procesamiento por lotes centralizado", de: "Zentralisierte Batch-Verarbeitung", nl: "Gecentraliseerde batch verwerking" },
        { en: "Simple threshold-based algorithms", es: "Algoritmos simples basados en umbral", de: "Einfache schwellenwert-basierte Algorithmen", nl: "Eenvoudige drempel-gebaseerde algoritmen" },
        { en: "Manual data interpretation", es: "Interpretación manual de datos", de: "Manuelle Dateninterpretation", nl: "Handmatige data interpretatie" }
      ],
      correct: 0,
      explanation: {
        en: "Edge computing with federated learning networks enables ultra-fast earthquake early warning by processing seismic data locally at each station while continuously updating machine learning models across the network. This distributed approach minimizes latency by avoiding data transmission delays, while federated learning allows models to improve from collective experience without sharing raw data, maintaining both speed and privacy in real-time earthquake detection.",
        es: "La computación en el borde con redes de aprendizaje federado permite alerta temprana ultra-rápida de terremotos procesando datos sísmicos localmente en cada estación mientras actualiza continuamente modelos de aprendizaje automático a través de la red. Este enfoque distribuido minimiza latencia evitando retrasos de transmisión de datos, mientras que aprendizaje federado permite que modelos mejoren de experiencia colectiva sin compartir datos crudos, manteniendo tanto velocidad como privacidad en detección de terremotos en tiempo real.",
        de: "Edge-Computing mit föderierten Lernnetzwerken ermöglicht ultraschnelle Erdbebenfrühwarnung durch lokale Verarbeitung seismischer Daten an jeder Station bei kontinuierlicher Aktualisierung maschineller Lernmodelle im gesamten Netzwerk. Dieser verteilte Ansatz minimiert Latenz durch Vermeidung von Datenübertragungsverzögerungen, während föderiertes Lernen Modellen erlaubt, sich aus kollektiver Erfahrung zu verbessern ohne Rohdaten zu teilen, wodurch sowohl Geschwindigkeit als auch Privatsphäre in der Echtzeit-Erdbebenerkennung erhalten bleiben.",
        nl: "Edge computing met gefedereerde leer netwerken maakt ultra-snelle aardbeving vroege waarschuwing mogelijk door seismische data lokaal bij elke station te verwerken terwijl machine learning modellen continu over het netwerk worden bijgewerkt. Deze gedistribueerde benadering minimaliseert latentie door data transmissie vertragingen te vermijden, terwijl gefedereerd leren modellen toestaat te verbeteren van collectieve ervaring zonder ruwe data te delen, wat zowel snelheid als privacy behoudt in real-time aardbeving detectie."
      }
    },
    {
      question: {
        en: "What controls the emergence of scale-invariant behavior in seismic crack networks?",
        es: "¿Qué controla la emergencia de comportamiento invariante de escala en redes de grietas sísmicas?",
        de: "Was kontrolliert das Auftreten skaleninvarianten Verhaltens in seismischen Rissnetzwerken?",
        nl: "Wat controleert het ontstaan van schaal-invariant gedrag in seismische scheur netwerken?"
      },
      options: [
        { en: "Percolation theory and critical phenomena", es: "Teoría de percolación y fenómenos críticos", de: "Perkolationstheorie und kritische Phänomene", nl: "Percolatie theorie en kritieke fenomenen" },
        { en: "Simple linear growth", es: "Crecimiento lineal simple", de: "Einfaches lineares Wachstum", nl: "Eenvoudige lineaire groei" },
        { en: "Material properties only", es: "Solo propiedades del material", de: "Nur Materialeigenschaften", nl: "Alleen materiaal eigenschappen" },
        { en: "Temperature effects", es: "Efectos de temperatura", de: "Temperatureffekte", nl: "Temperatuur effecten" }
      ],
      correct: 0,
      explanation: {
        en: "Scale-invariant behavior in seismic crack networks emerges through percolation theory and critical phenomena near the connectivity threshold. As crack density increases, the system undergoes a percolation transition where isolated crack clusters suddenly connect to form a system-spanning network. Near this critical point, crack networks exhibit power-law scaling and fractal geometry, with correlation lengths that diverge, creating scale-invariant statistical properties observed in earthquake systems.",
        es: "El comportamiento invariante de escala en redes de grietas sísmicas emerge a través de teoría de percolación y fenómenos críticos cerca del umbral de conectividad. Conforme la densidad de grietas aumenta, el sistema experimenta una transición de percolación donde clusters de grietas aisladas súbitamente se conectan para formar una red que abarca el sistema. Cerca de este punto crítico, redes de grietas exhiben escalamiento de ley de potencias y geometría fractal, con longitudes de correlación que divergen, creando propiedades estadísticas invariantes de escala observadas en sistemas de terremotos.",
        de: "Skaleninvariantes Verhalten in seismischen Rissnetzwerken entsteht durch Perkolationstheorie und kritische Phänomene nahe der Konnektivitätsschwelle. Wenn die Rissdichte zunimmt, durchläuft das System einen Perkolationsübergang, wo isolierte Risscluster sich plötzlich verbinden und ein systemumspannendes Netzwerk bilden. Nahe diesem kritischen Punkt zeigen Rissnetzwerke Potenzgesetz-Skalierung und fraktale Geometrie mit divergierenden Korrelationslängen, wodurch skaleninvariante statistische Eigenschaften entstehen, die in Erdbebensystemen beobachtet werden.",
        nl: "Schaal-invariant gedrag in seismische scheur netwerken ontstaat door percolatie theorie en kritieke fenomenen nabij de connectiviteit drempel. Wanneer scheur dichtheid toeneemt, ondergaat het systeem een percolatie overgang waarbij geïsoleerde scheur clusters plotseling verbinden om een systeem-overspannend netwerk te vormen. Nabij dit kritieke punt vertonen scheur netwerken machtswet schaling en fractale geometrie, met correlatie lengtes die divergeren, wat schaal-invariante statistische eigenschappen creëert die in aardbeving systemen worden waargenomen."
      }
    },
    {
      question: {
        en: "What seismic imaging technique uses compressive sensing to reconstruct high-resolution images from sparse data?",
        es: "¿Qué técnica de imagen sísmica utiliza detección compresiva para reconstruir imágenes de alta resolución de datos dispersos?",
        de: "Welche seismische Bildgebungstechnik nutzt Compressed Sensing zur Rekonstruktion hochauflösender Bilder aus spärlichen Daten?",
        nl: "Welke seismische beeldvormingstechniek gebruikt compressieve sensing om hoge-resolutie beelden te reconstrueren uit schaarse data?"
      },
      options: [
        { en: "Sparsity-based inversion with L1 regularization", es: "Inversión basada en dispersión con regularización L1", de: "Sparsitäts-basierte Inversion mit L1-Regularisierung", nl: "Schaarsheid-gebaseerde inversie met L1 regularisatie" },
        { en: "Standard least squares fitting", es: "Ajuste estándar de mínimos cuadrados", de: "Standard-Kleinste-Quadrate-Anpassung", nl: "Standaard kleinste kwadraten fitting" },
        { en: "Simple interpolation methods", es: "Métodos de interpolación simples", de: "Einfache Interpolationsmethoden", nl: "Eenvoudige interpolatie methoden" },
        { en: "Weighted averaging", es: "Promediación ponderada", de: "Gewichtete Mittelung", nl: "Gewogen gemiddelde" }
      ],
      correct: 0,
      explanation: {
        en: "Sparsity-based inversion with L1 regularization exploits the principle that many natural signals have sparse representations in appropriate transform domains. This compressive sensing approach can reconstruct high-resolution seismic images from significantly undersampled data by promoting solutions with few non-zero coefficients. The technique is particularly powerful when combined with sparsifying transforms like wavelets or curvelets that naturally represent seismic features.",
        es: "La inversión basada en dispersión con regularización L1 explota el principio de que muchas señales naturales tienen representaciones dispersas en dominios de transformada apropiados. Este enfoque de detección compresiva puede reconstruir imágenes sísmicas de alta resolución de datos significativamente submuestreados promoviendo soluciones con pocos coeficientes no cero. La técnica es particularmente poderosa cuando se combina con transformadas dispersantes como ondículas o curvelets que representan naturalmente características sísmicas.",
        de: "Sparsitäts-basierte Inversion mit L1-Regularisierung nutzt das Prinzip, dass viele natürliche Signale spärliche Darstellungen in geeigneten Transformationsdomänen haben. Dieser Compressed-Sensing-Ansatz kann hochauflösende seismische Bilder aus erheblich unterabgetasteten Daten rekonstruieren, indem er Lösungen mit wenigen Nicht-Null-Koeffizienten fördert. Die Technik ist besonders mächtig in Kombination mit sparsifizierenden Transformationen wie Wavelets oder Curvelets, die seismische Merkmale natürlich repräsentieren.",
        nl: "Schaarsheid-gebaseerde inversie met L1 regularisatie benut het principe dat veel natuurlijke signalen schaarse representaties hebben in geschikte transformatie domeinen. Deze compressieve sensing benadering kan hoge-resolutie seismische beelden reconstrueren uit significant ondergemonsterde data door oplossingen met weinig niet-nul coëfficiënten te bevorderen. De techniek is bijzonder krachtig wanneer gecombineerd met schaarsheid-makende transformaties zoals wavelets of curvelets die seismische kenmerken natuurlijk representeren."
      }
    },
    {
      question: {
        en: "What controls the nonlinear dynamics of seismic wave propagation in damaged materials?",
        es: "¿Qué controla las dinámicas no lineales de propagación de ondas sísmicas en materiales dañados?",
        de: "Was kontrolliert die nichtlineare Dynamik seismischer Wellenausbreitung in beschädigten Materialien?",
        nl: "Wat controleert de niet-lineaire dynamiek van seismische golfvoortplanting in beschadigde materialen?"
      },
      options: [
        { en: "Hysteresis and memory effects in elastic moduli", es: "Histéresis y efectos de memoria en módulos elásticos", de: "Hysterese und Gedächtniseffekte in elastischen Moduln", nl: "Hysterese en geheugen effecten in elastische moduli" },
        { en: "Linear elastic properties only", es: "Solo propiedades elásticas lineales", de: "Nur linear-elastische Eigenschaften", nl: "Alleen lineaire elastische eigenschappen" },
        { en: "Density variations", es: "Variaciones de densidad", de: "Dichtevariationen", nl: "Dichtheid variaties" },
        { en: "Temperature effects", es: "Efectos de temperatura", de: "Temperatureffekte", nl: "Temperatuur effecten" }
      ],
      correct: 0,
      explanation: {
        en: "Nonlinear seismic wave dynamics in damaged materials are controlled by hysteresis and memory effects in elastic moduli caused by microcrack opening and closing, contact forces, and stress-dependent stiffness. These effects create strain-dependent velocity and attenuation, frequency-dependent nonlinearity, and slow dynamics where material properties change over time. The nonlinear response provides sensitive indicators of material damage and healing processes.",
        es: "Las dinámicas no lineales de ondas sísmicas en materiales dañados son controladas por histéresis y efectos de memoria en módulos elásticos causados por apertura y cierre de microgrietas, fuerzas de contacto, y rigidez dependiente del esfuerzo. Estos efectos crean velocidad y atenuación dependientes de deformación, no linealidad dependiente de frecuencia, y dinámicas lentas donde propiedades del material cambian con el tiempo. La respuesta no lineal proporciona indicadores sensibles de procesos de daño y curación del material.",
        de: "Nichtlineare seismische Wellen-Dynamiken in beschädigten Materialien werden durch Hysterese und Gedächtniseffekte in elastischen Moduln kontrolliert, verursacht durch Mikroriss-Öffnung und -Schließung, Kontaktkräfte und spannungsabhängige Steifigkeit. Diese Effekte erzeugen dehnungsabhängige Geschwindigkeit und Dämpfung, frequenzabhängige Nichtlinearität und langsame Dynamiken, wo Materialeigenschaften sich über Zeit ändern. Die nichtlineare Antwort bietet empfindliche Indikatoren für Material-Schädigungs- und Heilungsprozesse.",
        nl: "Niet-lineaire seismische golf dynamiek in beschadigde materialen worden gecontroleerd door hysterese en geheugen effecten in elastische moduli veroorzaakt door microscheur opening en sluiting, contact krachten, en spanning-afhankelijke stijfheid. Deze effecten creëren rek-afhankelijke snelheid en demping, frequentie-afhankelijke niet-lineariteit, en langzame dynamiek waarbij materiaal eigenschappen veranderen over tijd. De niet-lineaire respons biedt gevoelige indicatoren van materiaal schade en genezings processen."
      }
    },
    {
      question: {
        en: "What seismic technique uses graph neural networks for automated earthquake catalog analysis?",
        es: "¿Qué técnica sísmica utiliza redes neuronales de gráficos para análisis automatizado de catálogos de terremotos?",
        de: "Welche seismische Technik nutzt Graph-neuronale Netzwerke für automatisierte Erdbeben-Kataloganalyse?",
        nl: "Welke seismische techniek gebruikt graph neurale netwerken voor geautomatiseerde aardbeving catalogus analyse?"
      },
      options: [
        { en: "Spatiotemporal graph convolutions for event clustering", es: "Convoluciones de gráficos espaciotemporales para agrupamiento de eventos", de: "Räumlich-zeitliche Graph-Faltungen für Ereignis-Clustering", nl: "Ruimtelijk-temporele graph convoluties voor gebeurtenis clustering" },
        { en: "Simple time series analysis", es: "Análisis de series de tiempo simples", de: "Einfache Zeitreihenanalyse", nl: "Eenvoudige tijdreeks analyse" },
        { en: "Traditional statistical methods", es: "Métodos estadísticos tradicionales", de: "Traditionelle statistische Methoden", nl: "Traditionele statistische methoden" },
        { en: "Manual classification only", es: "Solo clasificación manual", de: "Nur manuelle Klassifikation", nl: "Alleen handmatige classificatie" }
      ],
      correct: 0,
      explanation: {
        en: "Spatiotemporal graph convolutions enable sophisticated earthquake catalog analysis by representing earthquake sequences as dynamic graphs where nodes are events and edges encode spatiotemporal relationships. Graph neural networks can automatically learn complex patterns in earthquake clustering, triggering relationships, and sequence evolution, providing insights into fault system behavior and improving seismic hazard assessment through automated analysis of large catalogs.",
        es: "Las convoluciones de gráficos espaciotemporales permiten análisis sofisticado de catálogos de terremotos representando secuencias de terremotos como gráficos dinámicos donde nodos son eventos y bordes codifican relaciones espaciotemporales. Las redes neuronales de gráficos pueden aprender automáticamente patrones complejos en agrupamiento de terremotos, relaciones de activación, y evolución de secuencias, proporcionando conocimientos sobre comportamiento del sistema de fallas y mejorando evaluación de riesgo sísmico a través de análisis automatizado de catálogos grandes.",
        de: "Räumlich-zeitliche Graph-Faltungen ermöglichen sophisticated Erdbeben-Kataloganalyse durch Darstellung von Erdbebensequenzen als dynamische Graphen, wobei Knoten Ereignisse und Kanten räumlich-zeitliche Beziehungen kodieren. Graph-neuronale Netzwerke können automatisch komplexe Muster in Erdbeben-Clustering, Auslösebeziehungen und Sequenzevolution lernen und bieten Einblicke in Verwerfungssystemverhalten und verbessern seismische Gefahrenbewertung durch automatisierte Analyse großer Kataloge.",
        nl: "Ruimtelijk-temporele graph convoluties maken geavanceerde aardbeving catalogus analyse mogelijk door aardbeving sequenties te representeren als dynamische graphs waarbij nodes gebeurtenissen zijn en edges ruimtelijk-temporele relaties coderen. Graph neurale netwerken kunnen automatisch complexe patronen leren in aardbeving clustering, trigger relaties, en sequentie evolutie, wat inzichten biedt in breuksysteem gedrag en seismische gevaar beoordeling verbetert door geautomatiseerde analyse van grote catalogi."
      }
    },
    {
      question: {
        en: "What controls the transition from aseismic creep to stick-slip behavior on fault interfaces?",
        es: "¿Qué controla la transición de fluencia asísmica a comportamiento stick-slip en interfaces de falla?",
        de: "Was kontrolliert den Übergang von aseismischem Kriechen zu Stick-Slip-Verhalten auf Verwerfungsgrenzflächen?",
        nl: "Wat controleert de overgang van aseismische kruip naar stick-slip gedrag op breuk interfaces?"
      },
      options: [
        { en: "Critical stiffness ratio and nucleation length scales", es: "Relación de rigidez crítica y escalas de longitud de nucleación", de: "Kritisches Steifigkeitsverhältnis und Nukleations-Längenskalen", nl: "Kritieke stijfheids verhouding en nucleatie lengte schalen" },
        { en: "Temperature changes only", es: "Solo cambios de temperatura", de: "Nur Temperaturänderungen", nl: "Alleen temperatuur veranderingen" },
        { en: "Fluid pressure variations", es: "Variaciones de presión de fluidos", de: "Fluiddruckvariationen", nl: "Vloeistofdruk variaties" },
        { en: "Surface roughness only", es: "Solo rugosidad superficial", de: "Nur Oberflächenrauheit", nl: "Alleen oppervlakte ruwheid" }
      ],
      correct: 0,
      explanation: {
        en: "The transition from stable aseismic creep to unstable stick-slip is controlled by the critical stiffness ratio k/kc and nucleation length scales Lb. When the system stiffness k exceeds the critical stiffness kc (determined by rate-and-state friction parameters), and when the characteristic slip distance Dc is smaller than the nucleation length Lb, unstable slip can occur. This framework explains why some fault segments creep aseismically while others generate earthquakes under similar stress conditions.",
        es: "La transición de fluencia asísmica estable a stick-slip inestable es controlada por la relación de rigidez crítica k/kc y escalas de longitud de nucleación Lb. Cuando la rigidez del sistema k excede la rigidez crítica kc (determinada por parámetros de fricción tasa-y-estado), y cuando la distancia característica de deslizamiento Dc es menor que la longitud de nucleación Lb, puede ocurrir deslizamiento inestable. Este marco explica por qué algunos segmentos de falla fluyen asísmicamente mientras otros generan terremotos bajo condiciones de esfuerzo similares.",
        de: "Der Übergang von stabilem aseismischem Kriechen zu instabilem Stick-Slip wird durch das kritische Steifigkeitsverhältnis k/kc und Nukleations-Längenskalen Lb kontrolliert. Wenn die Systemsteifigkeit k die kritische Steifigkeit kc (bestimmt durch Rate-and-State-Reibungsparameter) übersteigt und die charakteristische Slip-Distanz Dc kleiner als die Nukleationslänge Lb ist, kann instabiler Slip auftreten. Dieses Framework erklärt, warum manche Verwerfungssegmente aseismisch kriechen, während andere unter ähnlichen Spannungsbedingungen Erdbeben erzeugen.",
        nl: "De overgang van stabiele aseismische kruip naar instabiele stick-slip wordt gecontroleerd door de kritieke stijfheids verhouding k/kc en nucleatie lengte schalen Lb. Wanneer de systeem stijfheid k de kritieke stijfheid kc overschrijdt (bepaald door rate-and-state wrijving parameters), en wanneer de karakteristieke slip afstand Dc kleiner is dan de nucleatie lengte Lb, kan instabiele slip optreden. Dit framework verklaart waarom sommige breuk segmenten aseismisch kruipen terwijl anderen aardbevingen genereren onder vergelijkbare spanning condities."
      }
    },
    {
      question: {
        en: "What seismic parameter quantifies the efficiency of energy dissipation in nonlinear fault zone materials?",
        es: "¿Qué parámetro sísmico cuantifica la eficiencia de disipación de energía en materiales no lineales de zona de falla?",
        de: "Welcher seismische Parameter quantifiziert die Effizienz der Energiedissipation in nichtlinearen Verwerfungszonenmaterialien?",
        nl: "Welke seismische parameter kwantificeert de efficiëntie van energie dissipatie in niet-lineaire breukzone materialen?"
      },
      options: [
        { en: "Nonlinear attenuation coefficient and Q-factor frequency dependence", es: "Coeficiente de atenuación no lineal y dependencia de frecuencia del factor Q", de: "Nichtlinearer Dämpfungskoeffizient und Q-Faktor-Frequenzabhängigkeit", nl: "Niet-lineaire dempings coëfficiënt en Q-factor frequentie afhankelijkheid" },
        { en: "Simple velocity measurements", es: "Mediciones de velocidad simples", de: "Einfache Geschwindigkeitsmessungen", nl: "Eenvoudige snelheid metingen" },
        { en: "Linear elastic constants", es: "Constantes elásticas lineales", de: "Lineare elastische Konstanten", nl: "Lineaire elastische constanten" },
        { en: "Density variations only", es: "Solo variaciones de densidad", de: "Nur Dichtevariationen", nl: "Alleen dichtheid variaties" }
      ],
      correct: 0,
      explanation: {
        en: "Nonlinear attenuation coefficients and Q-factor frequency dependence characterize energy dissipation efficiency in fault zone materials exhibiting nonlinear behavior. These parameters capture the strain-amplitude dependent damping, frequency-dependent quality factors, and slow dynamics effects that occur in damaged rock. The nonlinear Q behavior reveals information about microcrack density, fluid content, and damage state, providing insights into fault zone structure and evolution.",
        es: "Los coeficientes de atenuación no lineal y dependencia de frecuencia del factor Q caracterizan eficiencia de disipación de energía en materiales de zona de falla exhibiendo comportamiento no lineal. Estos parámetros capturan amortiguación dependiente de amplitud de deformación, factores de calidad dependientes de frecuencia, y efectos de dinámicas lentas que ocurren en roca dañada. El comportamiento no lineal de Q revela información sobre densidad de microgrietas, contenido de fluidos, y estado de daño, proporcionando conocimientos sobre estructura y evolución de zona de falla.",
        de: "Nichtlineare Dämpfungskoeffizienten und Q-Faktor-Frequenzabhängigkeit charakterisieren Energiedissipations-Effizienz in Verwerfungszonenmaterialien mit nichtlinearem Verhalten. Diese Parameter erfassen die dehnungsamplituden-abhängige Dämpfung, frequenzabhängige Qualitätsfaktoren und Effekte langsamer Dynamik in beschädigtem Gestein. Das nichtlineare Q-Verhalten zeigt Informationen über Mikroriss-Dichte, Fluidgehalt und Schadenszustand und bietet Einblicke in Verwerfungszonen-Struktur und -Evolution.",
        nl: "Niet-lineaire dempings coëfficiënten en Q-factor frequentie afhankelijkheid karakteriseren energie dissipatie efficiëntie in breukzone materialen die niet-lineair gedrag vertonen. Deze parameters vangen de rek-amplitude afhankelijke demping, frequentie-afhankelijke kwaliteit factoren, en langzame dynamiek effecten die optreden in beschadigd gesteente. Het niet-lineaire Q gedrag onthult informatie over microscheur dichtheid, vloeistof inhoud, en schade toestand, wat inzichten biedt in breukzone structuur en evolutie."
      }
    },
    {
      question: {
        en: "What advanced seismic technique uses quantum entanglement for ultra-sensitive ground motion detection?",
        es: "¿Qué técnica sísmica avanzada utiliza entrelazamiento cuántico para detección ultra-sensible de movimiento del suelo?",
        de: "Welche fortgeschrittene seismische Technik nutzt Quantenverschränkung für ultra-empfindliche Bodenbewegungsdetection?",
        nl: "Welke geavanceerde seismische techniek gebruikt quantum verstrengeling voor ultra-gevoelige grondbeweging detectie?"
      },
      options: [
        { en: "Quantum interferometric sensors with squeezed light states", es: "Sensores interferométricos cuánticos con estados de luz comprimida", de: "Quanteninterferometrische Sensoren mit gequetschten Lichtzuständen", nl: "Quantum interferometrische sensoren met samengedrukte licht toestanden" },
        { en: "Classical mechanical accelerometers", es: "Acelerómetros mecánicos clásicos", de: "Klassische mechanische Beschleunigungsmesser", nl: "Klassieke mechanische accelerometers" },
        { en: "Standard electromagnetic sensors", es: "Sensores electromagnéticos estándar", de: "Standard-elektromagnetische Sensoren", nl: "Standaard elektromagnetische sensoren" },
        { en: "Traditional seismometers only", es: "Solo sismómetros tradicionales", de: "Nur traditionelle Seismometer", nl: "Alleen traditionele seismometers" }
      ],
      correct: 0,
      explanation: {
        en: "Quantum interferometric sensors with squeezed light states represent the ultimate frontier in seismic sensing, using quantum entanglement and non-classical light states to surpass the standard quantum limit. These sensors can detect ground motion at levels approaching the Planck scale, enabling measurement of gravitational wave strain, tidal effects, and extremely weak seismic signals that are completely inaccessible to classical instruments, revolutionizing our ability to monitor Earth's most subtle dynamics.",
        es: "Los sensores interferométricos cuánticos con estados de luz comprimida representan la frontera última en detección sísmica, usando entrelazamiento cuántico y estados de luz no clásicos para superar el límite cuántico estándar. Estos sensores pueden detectar movimiento del suelo a niveles acercándose a la escala de Planck, permitiendo medición de deformación de ondas gravitacionales, efectos de marea, y señales sísmicas extremadamente débiles que son completamente inaccesibles para instrumentos clásicos, revolucionando nuestra capacidad para monitorear las dinámicas más sutiles de la Tierra.",
        de: "Quanteninterferometrische Sensoren mit gequetschten Lichtzuständen repräsentieren die ultimative Grenze in seismischer Sensorik und nutzen Quantenverschränkung und nicht-klassische Lichtzustände zur Überwindung des Standard-Quantenlimits. Diese Sensoren können Bodenbewegungen auf Niveaus nahe der Planck-Skala detektieren und ermöglichen Messung von Gravitationswellen-Dehnung, Gezeiteneffekten und extrem schwachen seismischen Signalen, die für klassische Instrumente völlig unzugänglich sind, wodurch unsere Fähigkeit zur Überwachung subtilster Erddynamiken revolutioniert wird.",
        nl: "Quantum interferometrische sensoren met samengedrukte licht toestanden vertegenwoordigen de ultieme grens in seismische sensing, waarbij quantum verstrengeling en niet-klassieke licht toestanden worden gebruikt om de standaard quantum limiet te overtreffen. Deze sensoren kunnen grondbeweging detecteren op niveaus die de Planck schaal benaderen, wat meting mogelijk maakt van gravitatiegolf rek, getijde effecten, en extreem zwakke seismische signalen die volledig ontoegankelijk zijn voor klassieke instrumenten, wat onze capaciteit om de meest subtiele dynamiek van de aarde te monitoren revolutioneert."
      }
    },
    {
      question: {
        en: "What controls the formation and evolution of seismic swarm patterns in volcanic and geothermal systems?",
        es: "¿Qué controla la formación y evolución de patrones de enjambres sísmicos en sistemas volcánicos y geotermales?",
        de: "Was kontrolliert die Bildung und Evolution seismischer Schwarmstrukturen in vulkanischen und geothermischen Systemen?",
        nl: "Wat controleert de formatie en evolutie van seismische zwerm patronen in vulkanische en geothermische systemen?"
      },
      options: [
        { en: "Fluid migration pathways and pressure diffusion processes", es: "Vías de migración de fluidos y procesos de difusión de presión", de: "Fluidmigrationspfade und Druckdiffusionsprozesse", nl: "Vloeistof migratie paden en druk diffusie processen" },
        { en: "Tectonic stress only", es: "Solo esfuerzo tectónico", de: "Nur tektonische Spannung", nl: "Alleen tectonische spanning" },
        { en: "Surface loading effects", es: "Efectos de carga superficial", de: "Oberflächenbelastungseffekte", nl: "Oppervlakte belasting effecten" },
        { en: "Temperature variations only", es: "Solo variaciones de temperatura", de: "Nur Temperaturvariationen", nl: "Alleen temperatuur variaties" }
      ],
      correct: 0,
      explanation: {
        en: "Seismic swarm patterns in volcanic and geothermal systems are primarily controlled by fluid migration pathways and pressure diffusion processes. As fluids (magma, hydrothermal fluids, CO₂) migrate through fracture networks, they alter pore pressure and effective stress, triggering earthquakes along their path. The spatiotemporal evolution of swarms often follows diffusive patterns consistent with fluid pressure propagation, revealing the subsurface plumbing systems and fluid flow dynamics.",
        es: "Los patrones de enjambres sísmicos en sistemas volcánicos y geotermales son controlados principalmente por vías de migración de fluidos y procesos de difusión de presión. Conforme fluidos (magma, fluidos hidrotermales, CO₂) migran a través de redes de fractura, alteran presión de poros y esfuerzo efectivo, activando terremotos a lo largo de su trayectoria. La evolución espaciotemporal de enjambres a menudo sigue patrones difusivos consistentes con propagación de presión de fluidos, revelando sistemas de plomería del subsuelo y dinámicas de flujo de fluidos.",
        de: "Seismische Schwarmstrukturen in vulkanischen und geothermischen Systemen werden primär durch Fluidmigrationspfade und Druckdiffusionsprozesse kontrolliert. Wenn Fluide (Magma, hydrothermale Fluide, CO₂) durch Bruchnetzwerke migrieren, ändern sie Porendruck und effektive Spannung und lösen Erdbeben entlang ihres Pfades aus. Die räumlich-zeitliche Evolution von Schwärmen folgt oft diffusiven Mustern, die mit Fluiddruck-Ausbreitung konsistent sind und unterirdische Rohrsysteme sowie Fluidströmungsdynamiken offenbaren.",
        nl: "Seismische zwerm patronen in vulkanische en geothermische systemen worden primair gecontroleerd door vloeistof migratie paden en druk diffusie processen. Wanneer vloeistoffen (magma, hydrothermale vloeistoffen, CO₂) migreren door fractuur netwerken, veranderen ze porie druk en effectieve spanning, wat aardbevingen triggert langs hun pad. De ruimtelijk-temporele evolutie van zwermen volgt vaak diffusieve patronen consistent met vloeistof druk voortplanting, wat de ondergrondse leidingsystemen en vloeistof stroom dynamiek onthult."
      }
    },
    {
      question: {
        en: "What theoretical framework describes the quantum entanglement between seismic waves and crustal stress fields?",
        es: "¿Qué marco teórico describe el entrelazamiento cuántico entre ondas sísmicas y campos de estrés cortical?",
        de: "Welcher theoretische Rahmen beschreibt die Quantenverschränkung zwischen seismischen Wellen und krustalen Stressfeldern?",
        nl: "Welk theoretisch raamwerk beschrijft de kwantumverstrengeling tussen seismische golven en crustale spanningsvelden?"
      },
      options: [
        { en: "Non-local quantum seismic correlations", es: "Correlaciones sísmicas cuánticas no locales", de: "Nichtlokale quantenseismische Korrelationen", nl: "Niet-lokale kwantum seismische correlaties" },
        { en: "Classical wave superposition", es: "Superposición de ondas clásicas", de: "Klassische Wellenüberlagerung", nl: "Klassieke golf superpositie" },
        { en: "Linear elastic theory", es: "Teoría elástica lineal", de: "Lineare Elastizitätstheorie", nl: "Lineaire elastische theorie" },
        { en: "Newtonian mechanics only", es: "Solo mecánica newtoniana", de: "Nur Newtonsche Mechanik", nl: "Alleen Newtoniaanse mechanica" }
      ],
      correct: 0,
      explanation: {
        en: "Non-local quantum seismic correlations suggest that seismic waves in distant regions can exhibit quantum entanglement properties, where measurements at one location instantaneously affect correlated measurements elsewhere. This theoretical framework explores how quantum mechanics might manifest in large-scale geological systems, potentially explaining anomalous seismic precursors and long-range stress correlations observed before major earthquakes.",
        es: "Las correlaciones sísmicas cuánticas no locales sugieren que las ondas sísmicas en regiones distantes pueden exhibir propiedades de entrelazamiento cuántico, donde las mediciones en una ubicación afectan instantáneamente las mediciones correlacionadas en otra parte. Este marco teórico explora cómo la mecánica cuántica podría manifestarse en sistemas geológicos a gran escala, potencialmente explicando precursores sísmicos anómalos y correlaciones de estrés de largo alcance observadas antes de terremotos mayores.",
        de: "Nichtlokale quantenseismische Korrelationen deuten darauf hin, dass seismische Wellen in entfernten Regionen Quantenverschränkungs-Eigenschaften zeigen können, wo Messungen an einem Ort sofort korrelierte Messungen anderswo beeinflussen. Dieser theoretische Rahmen erforscht, wie Quantenmechanik sich in großmaßstäblichen geologischen Systemen manifestieren könnte, möglicherweise anomale seismische Vorläufer und langreichweitige Stress-Korrelationen erklärend, die vor größeren Erdbeben beobachtet wurden.",
        nl: "Niet-lokale kwantum seismische correlaties suggereren dat seismische golven in afgelegen gebieden kwantumverstrengeling eigenschappen kunnen vertonen, waar metingen op één locatie onmiddellijk gecorreleerde metingen elders beïnvloeden. Dit theoretisch raamwerk onderzoekt hoe kwantummechanica zich zou kunnen manifesteren in grootschalige geologische systemen, mogelijk anomale seismische precursors verklarend en langere-afstand spanning correlaties waargenomen voor grote aardbevingen."
      }
    },
    {
      question: {
        en: "Which computational technique uses machine learning to predict earthquake-triggered landslide susceptibility maps?",
        es: "¿Qué técnica computacional utiliza aprendizaje automático para predecir mapas de susceptibilidad a deslizamientos provocados por terremotos?",
        de: "Welche Berechnungstechnik nutzt maschinelles Lernen zur Vorhersage erdbeben-ausgelöster Hangrutschungs-Suszeptibilitätskarten?",
        nl: "Welke computationele techniek gebruikt machine learning om aardbeving-veroorzaakte landverschuiving gevoeligheidskaarten te voorspellen?"
      },
      options: [
        { en: "Ensemble learning with spatiotemporal features", es: "Aprendizaje de conjunto con características espaciotemporales", de: "Ensemble-Lernen mit raum-zeitlichen Merkmalen", nl: "Ensemble leren met ruimtelijk-temporele kenmerken" },
        { en: "Simple linear regression", es: "Regresión lineal simple", de: "Einfache lineare Regression", nl: "Eenvoudige lineaire regressie" },
        { en: "Binary classification only", es: "Solo clasificación binaria", de: "Nur binäre Klassifikation", nl: "Alleen binaire classificatie" },
        { en: "Statistical correlation analysis", es: "Análisis de correlación estadística", de: "Statistische Korrelationsanalyse", nl: "Statistische correlatie analyse" }
      ],
      correct: 0,
      explanation: {
        en: "Ensemble learning methods combine multiple machine learning algorithms (random forests, gradient boosting, neural networks) with spatiotemporal features including topographic gradients, geological properties, historical seismicity, and real-time ground motion parameters. This approach captures complex non-linear relationships between seismic loading and landslide triggering mechanisms, enabling dynamic hazard assessment during earthquake sequences.",
        es: "Los métodos de aprendizaje de conjunto combinan múltiples algoritmos de aprendizaje automático (bosques aleatorios, impulso de gradiente, redes neuronales) con características espaciotemporales incluyendo gradientes topográficos, propiedades geológicas, sismicidad histórica y parámetros de movimiento del suelo en tiempo real. Este enfoque captura relaciones complejas no lineales entre carga sísmica y mecanismos de activación de deslizamientos, permitiendo evaluación dinámica de peligros durante secuencias de terremotos.",
        de: "Ensemble-Lern-Methoden kombinieren mehrere maschinelle Lernalgorithmen (Zufallswälder, Gradientenverbesserung, neuronale Netzwerke) mit raum-zeitlichen Merkmalen einschließlich topographischer Gradienten, geologischer Eigenschaften, historischer Seismizität und Echtzeit-Bodenbewegungsparametern. Dieser Ansatz erfasst komplexe nichtlineare Beziehungen zwischen seismischer Belastung und Hangrutschungs-Auslösemechanismen und ermöglicht dynamische Gefährdungsbeurteilung während Erdbebensequenzen.",
        nl: "Ensemble leersmethoden combineren meerdere machine learning algoritmen (willekeurige bossen, gradiënt boosting, neurale netwerken) met ruimtelijk-temporele kenmerken inclusief topografische gradiënten, geologische eigenschappen, historische seismiciteit, en real-time grondbeweging parameters. Deze benadering vangt complexe niet-lineaire relaties tussen seismische belasting en landverschuiving activering mechanismen, wat dynamische gevaar beoordeling mogelijk maakt tijdens aardbeving sequenties."
      }
    },
    {
      question: {
        en: "What seismic phenomenon describes the coherent coupling between atmospheric gravity waves and solid Earth oscillations?",
        es: "¿Qué fenómeno sísmico describe el acoplamiento coherente entre ondas de gravedad atmosférica y oscilaciones de la Tierra sólida?",
        de: "Welches seismische Phänomen beschreibt die kohärente Kopplung zwischen atmosphärischen Schwerewellen und Festerde-Oszillationen?",
        nl: "Welk seismisch fenomeen beschrijft de coherente koppeling tussen atmosferische zwaartekracht golven en vaste aarde oscillaties?"
      },
      options: [
        { en: "Atmospheric-seismic wave resonance", es: "Resonancia de ondas atmosférico-sísmicas", de: "Atmosphärisch-seismische Wellenresonanz", nl: "Atmosferisch-seismische golf resonantie" },
        { en: "Simple ground motion only", es: "Solo movimiento del suelo simple", de: "Nur einfache Bodenbewegung", nl: "Alleen eenvoudige grondbeweging" },
        { en: "Thermal expansion effects", es: "Efectos de expansión térmica", de: "Wärmeausdehnungseffekte", nl: "Thermische uitzetting effecten" },
        { en: "Tidal deformation", es: "Deformación mareal", de: "Gezeitenverformung", nl: "Getijden vervorming" }
      ],
      correct: 0,
      explanation: {
        en: "Atmospheric-seismic wave resonance occurs when atmospheric gravity waves, generated by weather systems and jet stream variations, couple resonantly with Earth's normal modes. This phenomenon can amplify long-period seismic signals and influence the excitation of free oscillations, particularly during severe weather events, creating a dynamic coupling between atmospheric and solid Earth systems.",
        es: "La resonancia de ondas atmosférico-sísmicas ocurre cuando ondas de gravedad atmosférica, generadas por sistemas climáticos y variaciones de corriente en chorro, se acoplan resonantemente con modos normales de la Tierra. Este fenómeno puede amplificar señales sísmicas de período largo e influir en la excitación de oscilaciones libres, particularmente durante eventos climáticos severos, creando un acoplamiento dinámico entre sistemas atmosféricos y de Tierra sólida.",
        de: "Atmosphärisch-seismische Wellenresonanz tritt auf, wenn atmosphärische Schwerewellen, erzeugt durch Wettersysteme und Jetstream-Variationen, resonant mit den Normalmoden der Erde koppeln. Dieses Phänomen kann langperiodische seismische Signale verstärken und die Anregung freier Schwingungen beeinflussen, insbesondere während schwerer Wetterereignisse, wodurch eine dynamische Kopplung zwischen atmosphärischen und Festerde-Systemen entsteht.",
        nl: "Atmosferisch-seismische golf resonantie treedt op wanneer atmosferische zwaartekracht golven, gegenereerd door weer systemen en jetstream variaties, resonant koppelen met de aarde normale modi. Dit fenomeen kan lange-periode seismische signalen versterken en de excitatie van vrije oscillaties beïnvloeden, vooral tijdens severe weer gebeurtenissen, wat een dynamische koppeling creëert tussen atmosferische en vaste aarde systemen."
      }
    },
    {
      question: {
        en: "Which advanced seismic technique uses phase-coherent stacking to enhance weak signals from micro-earthquakes?",
        es: "¿Qué técnica sísmica avanzada utiliza apilamiento coherente de fase para mejorar señales débiles de microterremotos?",
        de: "Welche fortgeschrittene seismische Technik nutzt phasen-kohärente Stapelung zur Verstärkung schwacher Signale von Mikrobeben?",
        nl: "Welke geavanceerde seismische techniek gebruikt fase-coherente stapeling om zwakke signalen van micro-aardbevingen te versterken?"
      },
      options: [
        { en: "Matched filter detection with template stacking", es: "Detección de filtro adaptado con apilamiento de plantillas", de: "Angepasste Filter-Detektion mit Template-Stapelung", nl: "Aangepaste filter detectie met sjabloon stapeling" },
        { en: "Simple amplitude summation", es: "Suma simple de amplitud", de: "Einfache Amplitudensummierung", nl: "Eenvoudige amplitude summatie" },
        { en: "Random signal averaging", es: "Promedio de señal aleatoria", de: "Zufällige Signalmittelung", nl: "Willekeurige signaal middeling" },
        { en: "Frequency domain filtering only", es: "Solo filtrado en dominio de frecuencia", de: "Nur Frequenzbereich-Filterung", nl: "Alleen frequentie domein filtering" }
      ],
      correct: 0,
      explanation: {
        en: "Matched filter detection with template stacking uses cross-correlation with master event waveforms to identify similar micro-earthquakes below noise level. Phase-coherent stacking aligns detected events by their correlation time shifts and sums them constructively, dramatically improving signal-to-noise ratios and enabling detection of earthquake families with magnitudes well below conventional detection thresholds.",
        es: "La detección de filtro adaptado with apilamiento de plantillas usa correlación cruzada con formas de onda de eventos maestros para identificar microterremotos similares debajo del nivel de ruido. El apilamiento coherente de fase alinea eventos detectados por sus cambios de tiempo de correlación y los suma constructivamente, mejorando dramáticamente las relaciones señal-ruido y permitiendo detección de familias de terremotos con magnitudes muy por debajo de umbrales de detección convencionales.",
        de: "Angepasste Filter-Detektion mit Template-Stapelung nutzt Kreuzkorrelation mit Hauptereignis-Wellenformen zur Identifikation ähnlicher Mikrobeben unter Rauschpegel. Phasen-kohärente Stapelung richtet detektierte Ereignisse durch ihre Korrelationszeit-Verschiebungen aus und summiert sie konstruktiv, wodurch Signal-Rausch-Verhältnisse dramatisch verbessert und Detektion von Erdbebenfamilien mit Magnituden weit unter konventionellen Detektionsschwellen ermöglicht wird.",
        nl: "Aangepaste filter detectie met sjabloon stapeling gebruikt kruiscorrelatie met hoofd gebeurtenis golfvormen om vergelijkbare micro-aardbevingen onder ruis niveau te identificeren. Fase-coherente stapeling lijnt gedetecteerde gebeurtenissen uit door hun correlatie tijd verschuivingen en somt ze constructief op, wat signaal-tot-ruis verhoudingen dramatisch verbetert en detectie van aardbeving families mogelijk maakt met magnitudes ver onder conventionele detectie drempels."
      }
    },
    {
      question: {
        en: "What computational approach models the statistical mechanics of fault networks using renormalization group theory?",
        es: "¿Qué enfoque computacional modela la mecánica estadística de redes de fallas usando teoría de grupo de renormalización?",
        de: "Welcher Rechenansatz modelliert die statistische Mechanik von Verwerfungsnetzwerken mit Renormierungsgruppen-Theorie?",
        nl: "Welke computationele benadering modelleert de statistische mechanica van breuk netwerken met renormalisatie groep theorie?"
      },
      options: [
        { en: "Critical phenomena scaling in seismic networks", es: "Escalamiento de fenómenos críticos en redes sísmicas", de: "Kritische Phänomene-Skalierung in seismischen Netzwerken", nl: "Kritieke fenomenen schaling in seismische netwerken" },
        { en: "Linear network analysis only", es: "Solo análisis de red lineal", de: "Nur lineare Netzwerkanalyse", nl: "Alleen lineaire netwerk analyse" },
        { en: "Simple graph connectivity", es: "Conectividad de grafo simple", de: "Einfache Graph-Konnektivität", nl: "Eenvoudige graph connectiviteit" },
        { en: "Static topology analysis", es: "Análisis de topología estática", de: "Statische Topologie-Analyse", nl: "Statische topologie analyse" }
      ],
      correct: 0,
      explanation: {
        en: "Renormalization group theory applied to fault networks reveals critical phenomena scaling behavior where local fault interactions lead to emergent large-scale seismic properties. This approach identifies scale-invariant features in earthquake statistics and fault connectivity patterns, demonstrating how microscopic fault mechanics can generate macroscopic power-law distributions in earthquake magnitudes and inter-event times through critical point dynamics.",
        es: "La teoría de grupo de renormalización aplicada a redes de fallas revela comportamiento de escalamiento de fenómenos críticos donde interacciones de fallas locales llevan a propiedades sísmicas emergentes a gran escala. Este enfoque identifica características invariantes de escala en estadísticas de terremotos y patrones de conectividad de fallas, demostrando cómo la mecánica microscópica de fallas puede generar distribuciones macroscópicas de ley de potencia en magnitudes de terremotos y tiempos entre eventos a través de dinámicas de punto crítico.",
        de: "Renormierungsgruppen-Theorie angewandt auf Verwerfungsnetzwerke enthüllt kritisches Phänomene-Skalierungsverhalten, wo lokale Verwerfungsinteraktionen zu emergenten großmaßstäblichen seismischen Eigenschaften führen. Dieser Ansatz identifiziert skaleninvariante Merkmale in Erdbeben-Statistiken und Verwerfungs-Konnektivitätsmustern und demonstriert, wie mikroskopische Verwerfungsmechanik makroskopische Potenzgesetz-Verteilungen in Erdbeben-Magnituden und Zwischenereignis-Zeiten durch kritische Punkt-Dynamik generieren kann.",
        nl: "Renormalisatie groep theorie toegepast op breuk netwerken onthult kritieke fenomenen schaling gedrag waar lokale breuk interacties leiden tot emergente grootschalige seismische eigenschappen. Deze benadering identificeert schaal-invariante kenmerken in aardbeving statistieken en breuk connectiviteit patronen, demonstrerend hoe microscopische breuk mechanica macroscopische macht-wet verdelingen kan genereren in aardbeving magnitudes en tussen-gebeurtenis tijden door kritieke punt dynamica."
      }
    },
    {
      question: {
        en: "Which seismic imaging method exploits the interference between direct and scattered waves for super-resolution subsurface mapping?",
        es: "¿Qué método de imagen sísmica explota la interferencia entre ondas directas y dispersas para mapeo del subsuelo de súper resolución?",
        de: "Welche seismische Bildgebungsmethode nutzt die Interferenz zwischen direkten und gestreuten Wellen für Super-Auflösungs-Untergrundkartierung?",
        nl: "Welke seismische beeldvormingsmethode benut de interferentie tussen directe en verstrooide golven voor super-resolutie ondergrondse mapping?"
      },
      options: [
        { en: "Scattering-based super-resolution imaging", es: "Imagen de súper resolución basada en dispersión", de: "Streuungsbasierte Super-Auflösungs-Bildgebung", nl: "Verstrooiing-gebaseerde super-resolutie beeldvorming" },
        { en: "Standard reflection imaging", es: "Imagen de reflexión estándar", de: "Standard-Reflexions-Bildgebung", nl: "Standaard reflectie beeldvorming" },
        { en: "Direct wave tomography only", es: "Solo tomografía de ondas directas", de: "Nur Direktwellen-Tomographie", nl: "Alleen directe golf tomografie" },
        { en: "Surface wave analysis", es: "Análisis de ondas superficiales", de: "Oberflächenwellen-Analyse", nl: "Oppervlaktegolf analyse" }
      ],
      correct: 0,
      explanation: {
        en: "Scattering-based super-resolution imaging utilizes the constructive and destructive interference between direct waves and multiply scattered waves to achieve resolution beyond the classical diffraction limit. This technique exploits evanescent waves and near-field interactions that carry sub-wavelength information about heterogeneity structures, enabling detailed imaging of fracture networks and small-scale geological features previously invisible to conventional seismic methods.",
        es: "La imagen de súper resolución basada en dispersión utiliza la interferencia constructiva y destructiva entre ondas directas y ondas múltiplemente dispersas para lograr resolución más allá del límite clásico de difracción. Esta técnica explota ondas evanescentes e interacciones de campo cercano que llevan información de sublongitud de onda sobre estructuras de heterogeneidad, permitiendo imagen detallada de redes de fractura y características geológicas de pequeña escala previamente invisibles a métodos sísmicos convencionales.",
        de: "Streuungsbasierte Super-Auflösungs-Bildgebung nutzt die konstruktive und destruktive Interferenz zwischen direkten Wellen und mehrfach gestreuten Wellen, um Auflösung jenseits der klassischen Beugungsgrenze zu erreichen. Diese Technik nutzt evaneszente Wellen und Nahfeld-Wechselwirkungen, die Subwellenlängen-Information über Heterogenitätsstrukturen tragen und ermöglicht detaillierte Bildgebung von Bruchnetzwerken und kleinmaßstäblichen geologischen Merkmalen, die für konventionelle seismische Methoden unsichtbar waren.",
        nl: "Verstrooiing-gebaseerde super-resolutie beeldvorming gebruikt de constructieve en destructieve interferentie tussen directe golven en meervoudig verstrooide golven om resolutie te bereiken voorbij de klassieke diffractie limiet. Deze techniek benut evanescente golven en nabij-veld interacties die sub-golflengte informatie dragen over heterogeniteit structuren, wat gedetailleerde beeldvorming mogelijk maakt van fractuur netwerken en kleinschalige geologische kenmerken die eerder onzichtbaar waren voor conventionele seismische methoden."
      }
    },
    {
      question: {
        en: "What theoretical framework describes the emergence of seismic complexity from simple fault interaction rules?",
        es: "¿Qué marco teórico describe la emergencia de complejidad sísmica a partir de reglas simples de interacción de fallas?",
        de: "Welcher theoretische Rahmen beschreibt die Entstehung seismischer Komplexität aus einfachen Verwerfungsinteraktions-Regeln?",
        nl: "Welk theoretisch raamwerk beschrijft de opkomst van seismische complexiteit uit eenvoudige breuk interactie regels?"
      },
      options: [
        { en: "Cellular automata and agent-based seismicity models", es: "Autómatas celulares y modelos de sismicidad basados en agentes", de: "Zelluläre Automaten und agentenbasierte Seismizitäts-Modelle", nl: "Cellulaire automaten en agent-gebaseerde seismiciteit modellen" },
        { en: "Linear superposition theory", es: "Teoría de superposición lineal", de: "Lineare Überlagerungstheorie", nl: "Lineaire superpositie theorie" },
        { en: "Static equilibrium models", es: "Modelos de equilibrio estático", de: "Statische Gleichgewichts-Modelle", nl: "Statische evenwicht modellen" },
        { en: "Simple stress accumulation", es: "Acumulación simple de estrés", de: "Einfache Stress-Akkumulation", nl: "Eenvoudige spanning accumulatie" }
      ],
      correct: 0,
      explanation: {
        en: "Cellular automata and agent-based models demonstrate how complex seismic behavior emerges from simple local fault interaction rules. Individual fault cells or agents follow basic stress transfer and failure criteria, yet their collective behavior generates realistic earthquake statistics including Gutenberg-Richter scaling, Omori's law, and spatial clustering patterns, revealing how complexity arises from simple nonlinear dynamics in earthquake systems.",
        es: "Los autómatas celulares y modelos basados en agentes demuestran cómo el comportamiento sísmico complejo emerge de reglas simples de interacción de fallas locales. Células de falla individuales o agentes siguen criterios básicos de transferencia de estrés y falla, sin embargo su comportamiento colectivo genera estadísticas realistas de terremotos incluyendo escalamiento de Gutenberg-Richter, ley de Omori y patrones de agrupamiento espacial, revelando cómo la complejidad surge de dinámicas no lineales simples en sistemas de terremotos.",
        de: "Zelluläre Automaten und agentenbasierte Modelle demonstrieren, wie komplexes seismisches Verhalten aus einfachen lokalen Verwerfungsinteraktions-Regeln entsteht. Individuelle Verwerfungszellen oder Agenten folgen grundlegenden Stresstransfer- und Versagenskriterien, dennoch generiert ihr kollektives Verhalten realistische Erdbeben-Statistiken einschließlich Gutenberg-Richter-Skalierung, Omori-Gesetz und räumliche Clustering-Muster, was zeigt, wie Komplexität aus einfachen nichtlinearen Dynamiken in Erdbebensystemen entsteht.",
        nl: "Cellulaire automaten en agent-gebaseerde modellen demonstreren hoe complex seismisch gedrag opkomt uit eenvoudige lokale breuk interactie regels. Individuele breuk cellen of agenten volgen basis spanning overdracht en faal criteria, toch genereert hun collectief gedrag realistische aardbeving statistieken inclusief Gutenberg-Richter schaling, Omori's wet, en ruimtelijke clustering patronen, onthullend hoe complexiteit ontstaat uit eenvoudige niet-lineaire dynamica in aardbeving systemen."
      }
    },
    {
      question: {
        en: "Which advanced seismic processing technique uses dictionary learning to decompose complex waveforms into sparse representations?",
        es: "¿Qué técnica avanzada de procesamiento sísmico utiliza aprendizaje de diccionario para descomponer formas de onda complejas en representaciones dispersas?",
        de: "Welche fortgeschrittene seismische Verarbeitungstechnik nutzt Wörterbuch-Lernen zur Zerlegung komplexer Wellenformen in spärliche Darstellungen?",
        nl: "Welke geavanceerde seismische verwerkingstechniek gebruikt woordenboek leren om complexe golfvormen te ontbinden in schaarse representaties?"
      },
      options: [
        { en: "Sparse coding with learned seismic atoms", es: "Codificación dispersa con átomos sísmicos aprendidos", de: "Spärliche Kodierung mit gelernten seismischen Atomen", nl: "Schaarse codering met geleerde seismische atomen" },
        { en: "Standard Fourier decomposition", es: "Descomposición de Fourier estándar", de: "Standard-Fourier-Zerlegung", nl: "Standaard Fourier decompositie" },
        { en: "Simple windowing functions", es: "Funciones de ventana simples", de: "Einfache Fensterfunktionen", nl: "Eenvoudige venster functies" },
        { en: "Linear filtering only", es: "Solo filtrado lineal", de: "Nur lineare Filterung", nl: "Alleen lineaire filtering" }
      ],
      correct: 0,
      explanation: {
        en: "Sparse coding with learned seismic atoms uses dictionary learning algorithms to automatically discover optimal basis functions (atoms) that efficiently represent seismic waveforms with minimal coefficients. This adaptive approach captures complex seismic wave characteristics better than fixed transforms, enabling superior denoising, compression, and feature extraction for earthquake detection and characterization in noisy environments.",
        es: "La codificación dispersa con átomos sísmicos aprendidos usa algoritmos de aprendizaje de diccionario para descubrir automáticamente funciones base óptimas (átomos) que representan eficientemente formas de onda sísmicas con coeficientes mínimos. Este enfoque adaptativo captura características complejas de ondas sísmicas mejor que transformadas fijas, permitiendo denoising, compresión y extracción de características superiores para detección y caracterización de terremotos en ambientes ruidosos.",
        de: "Spärliche Kodierung mit gelernten seismischen Atomen nutzt Wörterbuch-Lern-Algorithmen zur automatischen Entdeckung optimaler Basisfunktionen (Atome), die seismische Wellenformen effizient mit minimalen Koeffizienten darstellen. Dieser adaptive Ansatz erfasst komplexe seismische Wellencharakteristika besser als fixe Transformationen und ermöglicht überlegene Entrauschung, Kompression und Merkmalextraktion für Erdbebendetektion und -charakterisierung in rauschigen Umgebungen.",
        nl: "Schaarse codering met geleerde seismische atomen gebruikt woordenboek leeralgoritmen om automatisch optimale basisfuncties (atomen) te ontdekken die seismische golfvormen efficiënt representeren met minimale coëfficiënten. Deze adaptieve benadering vangt complexe seismische golf karakteristieken beter dan vaste transformaties, wat superieure denoising, compressie en kenmerk extractie mogelijk maakt voor aardbeving detectie en karakterisering in ruizige omgevingen."
      }
    },
    {
      question: {
        en: "What seismic phenomenon describes the nonlinear interaction between surface waves and atmospheric pressure variations?",
        es: "¿Qué fenómeno sísmico describe la interacción no lineal entre ondas superficiales y variaciones de presión atmosférica?",
        de: "Welches seismische Phänomen beschreibt die nichtlineare Wechselwirkung zwischen Oberflächenwellen und atmosphärischen Druckvariationen?",
        nl: "Welk seismisch fenomeen beschrijft de niet-lineaire interactie tussen oppervlaktegolven en atmosferische druk variaties?"
      },
      options: [
        { en: "Atmospheric loading modulation of seismic waves", es: "Modulación de carga atmosférica de ondas sísmicas", de: "Atmosphärische Belastungsmodulation seismischer Wellen", nl: "Atmosferische belasting modulatie van seismische golven" },
        { en: "Simple gravitational effects", es: "Efectos gravitacionales simples", de: "Einfache Gravitationseffekte", nl: "Eenvoudige gravitationele effecten" },
        { en: "Temperature-induced changes only", es: "Solo cambios inducidos por temperatura", de: "Nur temperaturinduzierte Änderungen", nl: "Alleen temperatuur-geïnduceerde veranderingen" },
        { en: "Linear wave propagation", es: "Propagación de ondas lineales", de: "Lineare Wellenausbreitung", nl: "Lineaire golfvoortplanting" }
      ],
      correct: 0,
      explanation: {
        en: "Atmospheric loading modulation occurs when surface waves interact nonlinearly with spatially varying atmospheric pressure fields, causing amplitude and phase modulations that depend on wave frequency and atmospheric conditions. This phenomenon affects long-period surface waves and can create apparent velocity variations, complicating tomographic studies but also providing information about atmospheric-solid Earth coupling mechanisms.",
        es: "La modulación de carga atmosférica ocurre cuando ondas superficiales interactúan no linealmente con campos de presión atmosférica espacialmente variables, causando modulaciones de amplitud y fase que dependen de la frecuencia de onda y condiciones atmosféricas. Este fenómeno afecta ondas superficiales de período largo y puede crear variaciones aparentes de velocidad, complicando estudios tomográficos pero también proporcionando información sobre mecanismos de acoplamiento atmosférico-Tierra sólida.",
        de: "Atmosphärische Belastungsmodulation tritt auf, wenn Oberflächenwellen nichtlinear mit räumlich variierenden atmosphärischen Druckfeldern wechselwirken und Amplituden- und Phasen-Modulationen verursachen, die von Wellenfrequenz und atmosphärischen Bedingungen abhängen. Dieses Phänomen beeinflusst langperiodische Oberflächenwellen und kann scheinbare Geschwindigkeitsvariationen erzeugen, wodurch tomographische Studien kompliziert, aber auch Information über atmosphärisch-Festerde-Kopplungsmechanismen bereitgestellt wird.",
        nl: "Atmosferische belasting modulatie treedt op wanneer oppervlaktegolven niet-lineair interageren met ruimtelijk variërende atmosferische drukvelden, wat amplitude en fase modulaties veroorzaakt die afhangen van golf frequentie en atmosferische condities. Dit fenomeen beïnvloedt lange-periode oppervlaktegolven en kan schijnbare snelheids variaties creëren, wat tomografische studies compliceert maar ook informatie verschaft over atmosferisch-vaste aarde koppeling mechanismen."
      }
    },
    {
      question: {
        en: "Which computational approach uses graph neural networks to model spatiotemporal earthquake clustering patterns?",
        es: "¿Qué enfoque computacional utiliza redes neuronales de grafos para modelar patrones de agrupamiento espaciotemporal de terremotos?",
        de: "Welcher Rechenansatz nutzt Graph-Neuronale-Netzwerke zur Modellierung raum-zeitlicher Erdbeben-Clustering-Muster?",
        nl: "Welke computationele benadering gebruikt graph neurale netwerken om ruimtelijk-temporele aardbeving clustering patronen te modelleren?"
      },
      options: [
        { en: "Spatiotemporal graph convolution networks", es: "Redes de convolución de grafos espaciotemporales", de: "Raum-zeitliche Graph-Konvolutions-Netzwerke", nl: "Ruimtelijk-temporele graph convolutie netwerken" },
        { en: "Simple statistical clustering", es: "Agrupamiento estadístico simple", de: "Einfaches statistisches Clustering", nl: "Eenvoudige statistische clustering" },
        { en: "Linear correlation analysis", es: "Análisis de correlación lineal", de: "Lineare Korrelationsanalyse", nl: "Lineaire correlatie analyse" },
        { en: "Distance-based methods only", es: "Solo métodos basados en distancia", de: "Nur distanzbasierte Methoden", nl: "Alleen afstand-gebaseerde methoden" }
      ],
      correct: 0,
      explanation: {
        en: "Spatiotemporal graph convolution networks model earthquake sequences as dynamic graphs where nodes represent seismic events and edges encode spatiotemporal relationships including stress transfer, geometric proximity, and temporal succession. These networks can learn complex non-local triggering patterns and long-range correlations that conventional clustering methods miss, improving forecasting of aftershock sequences and earthquake cascade processes.",
        es: "Las redes de convolución de grafos espaciotemporales modelan secuencias de terremotos como grafos dinámicos donde nodos representan eventos sísmicos y bordes codifican relaciones espaciotemporales incluyendo transferencia de estrés, proximidad geométrica y sucesión temporal. Estas redes pueden aprender patrones complejos de activación no local y correlaciones de largo alcance que métodos de agrupamiento convencionales pierden, mejorando pronósticos de secuencias de réplicas y procesos de cascada de terremotos.",
        de: "Raum-zeitliche Graph-Konvolutions-Netzwerke modellieren Erdbebensequenzen als dynamische Graphen, wo Knoten seismische Ereignisse repräsentieren und Kanten raum-zeitliche Beziehungen einschließlich Stresstransfer, geometrischer Nähe und zeitlicher Aufeinanderfolge kodieren. Diese Netzwerke können komplexe nicht-lokale Auslösemuster und Langstrecken-Korrelationen lernen, die konventionelle Clustering-Methoden übersehen, wodurch Vorhersagen von Nachbeben-Sequenzen und Erdbeben-Kaskaden-Prozessen verbessert werden.",
        nl: "Ruimtelijk-temporele graph convolutie netwerken modelleren aardbeving sequenties als dynamische graphs waar knooppunten seismische gebeurtenissen representeren en randen ruimtelijk-temporele relaties coderen inclusief spanning overdracht, geometrische nabijheid, en temporele opeenvolging. Deze netwerken kunnen complexe niet-lokale activerings patronen en lange-afstand correlaties leren die conventionele clustering methoden missen, wat voorspelling van naschok sequenties en aardbeving cascade processen verbetert."
      }
    }
  ]
};

if (typeof window.addLevel === 'function') {
  window.addLevel('mind-bender/seismology', level6);
}
})();