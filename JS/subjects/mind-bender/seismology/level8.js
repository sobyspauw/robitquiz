(function() {
  const level8 = {
    name: { 
      en: 'Seismic Hazard Assessment & Ground Motion Prediction', 
      es: 'Evaluación de Peligro Sísmico y Predicción de Movimiento del Suelo', 
      de: 'Seismische Gefährdungsbeurteilung und Bodenbewegungsvorhersage', 
      nl: 'Seismische Gevaarassessment & Grondbeweging Voorspelling' 
    },
    questions: [
      {
        question: {
          en: "What computational technique exploits spectral element methods for accurate earthquake rupture modeling on unstructured meshes?",
          es: "¿Qué técnica computacional explota los métodos de elementos espectrales para un modelado preciso de rupturas sísmicas en mallas no estructuradas?",
          de: "Welche Berechnungstechnik nutzt Spektralelement-Methoden für präzise Erdbebenriss-Modellierung auf unstrukturierten Netzen?",
          nl: "Welke computationele techniek benut spectrale element methoden voor nauwkeurige aardbeving breukmodellering op ongestructureerde rasters?"
        },
        answers: [
          { en: "SPECFEM3D", es: "SPECFEM3D", de: "SPECFEM3D", nl: "SPECFEM3D" },
          { en: "FE2MS", es: "FE2MS", de: "FE2MS", nl: "FE2MS" },
          { en: "HypoDD", es: "HypoDD", de: "HypoDD", nl: "HypoDD" },
          { en: "GISMO", es: "GISMO", de: "GISMO", nl: "GISMO" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "SPECFEM3D is a state-of-the-art spectral element code specifically designed for earthquake rupture modeling on unstructured hexahedral meshes, providing high-order accuracy.",
          es: "SPECFEM3D es un código de elementos espectrales de vanguardia específicamente diseñado para modelado de ruptura sísmica en mallas hexaédricas no estructuradas, proporcionando precisión de alto orden.",
          de: "SPECFEM3D ist ein hochmoderner Spektralelement-Code, der speziell für Erdbebenriss-Modellierung auf unstrukturierten hexaedrischen Netzen entwickelt wurde und hohe Genauigkeit bietet.",
          nl: "SPECFEM3D is een geavanceerde spectrale element code specifiek ontworpen voor aardbeving breukmodellering op ongestructureerde hexahedrale rasters, die hoge-orde nauwkeurigheid biedt."
        }
      },
      {
        question: {
          en: "Which seismological phenomenon describes the interaction between seismic waves and Earth's rotational dynamics?",
          es: "¿Qué fenómeno sismológico describe la interacción entre ondas sísmicas y la dinámica rotacional de la Tierra?",
          de: "Welches seismologische Phänomen beschreibt die Wechselwirkung zwischen seismischen Wellen und der Rotationsdynamik der Erde?",
          nl: "Welk seismologisch fenomeen beschrijft de interactie tussen seismische golven en de rotatiedynamiek van de aarde?"
        },
        answers: [
          { en: "Slichter modes", es: "Modos de Slichter", de: "Slichter-Modi", nl: "Slichter-modi" },
          { en: "Core phases", es: "Fases del núcleo", de: "Kernphasen", nl: "Kernfasen" },
          { en: "Free oscillations", es: "Oscilaciones libres", de: "Freie Schwingungen", nl: "Vrije oscillaties" },
          { en: "Chandler wobble", es: "Bamboleo de Chandler", de: "Chandler-Schwankung", nl: "Chandler-wankeling" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Slichter modes are translational oscillations of Earth's solid inner core within the fluid outer core, representing coupling between seismic waves and rotational dynamics.",
          es: "Los modos de Slichter son oscilaciones traslacionales del núcleo interno sólido de la Tierra dentro del núcleo externo fluido, representando el acoplamiento entre ondas sísmicas y dinámica rotacional.",
          de: "Slichter-Modi sind translationale Schwingungen des festen inneren Erdkerns innerhalb des flüssigen äußeren Kerns, die die Kopplung zwischen seismischen Wellen und Rotationsdynamik darstellen.",
          nl: "Slichter-modi zijn translationele oscillaties van de aarde's vaste binnenkern binnen de vloeibare buitenkern, die de koppeling tussen seismische golven en rotatiedynamiek vertegenwoordigen."
        }
      },
      {
        question: {
          en: "What advanced technique measures changes in seismic wave velocities to monitor subsurface stress variations?",
          es: "¿Qué técnica avanzada mide cambios en las velocidades de ondas sísmicas para monitorear variaciones de estrés subterráneo?",
          de: "Welche fortgeschrittene Technik misst Änderungen in seismischen Wellengeschwindigkeiten zur Überwachung unterirdischer Spannungsvariationen?",
          nl: "Welke geavanceerde techniek meet veranderingen in seismische golfsnelheden om ondergrondse spanningsvariaties te monitoren?"
        },
        answers: [
          { en: "Coda wave interferometry", es: "Interferometría de ondas coda", de: "Coda-Welleninterferometrie", nl: "Coda golf interferometrie" },
          { en: "Receiver function analysis", es: "Análisis de función de receptor", de: "Empfängerfunktionsanalyse", nl: "Ontvanger functie analyse" },
          { en: "Surface wave tomography", es: "Tomografía de ondas superficiales", de: "Oberflächenwellen-Tomographie", nl: "Oppervlaktegolf tomografie" },
          { en: "Backprojection imaging", es: "Imagen de retroproyección", de: "Rückprojektions-Bildgebung", nl: "Terugprojectie beeldvorming" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Coda wave interferometry uses multiply-scattered waves to detect extremely small velocity changes, making it highly sensitive to subsurface stress variations.",
          es: "La interferometría de ondas coda utiliza ondas dispersadas múltiples para detectar cambios de velocidad extremadamente pequeños, haciéndola muy sensible a variaciones de estrés subterráneo.",
          de: "Coda-Welleninterferometrie nutzt mehrfach gestreute Wellen zur Erkennung extrem kleiner Geschwindigkeitsänderungen, was sie hochsensitiv für unterirdische Spannungsvariationen macht.",
          nl: "Coda golf interferometrie gebruikt meervoudig verstrooide golven om extreem kleine snelheidsveranderingen te detecteren, waardoor het zeer gevoelig is voor ondergrondse spanningsvariaties."
        }
      },
      {
        question: {
          en: "Which phenomenon explains the coupling between solid Earth tides and seismic triggering mechanisms?",
          es: "¿Qué fenómeno explica el acoplamiento entre mareas terrestres sólidas y mecanismos de activación sísmica?",
          de: "Welches Phänomen erklärt die Kopplung zwischen festen Erdgezeiten und seismischen Auslösemechanismen?",
          nl: "Welk fenomeen verklaart de koppeling tussen vaste aardgetijden en seismische activeringsmechanismen?"
        },
        answers: [
          { en: "Tidal modulation of friction", es: "Modulación mareal de la fricción", de: "Gezeitenmodulation der Reibung", nl: "Getijdenmodulatie van wrijving" },
          { en: "Viscoelastic relaxation", es: "Relajación viscoelástica", de: "Viskoelastische Entspannung", nl: "Viscoelastische relaxatie" },
          { en: "Poroelastic diffusion", es: "Difusión poroelástica", de: "Poroelastische Diffusion", nl: "Poroelastische diffusie" },
          { en: "Anelastic attenuation", es: "Atenuación anelástica", de: "Anelastische Dämpfung", nl: "Anelastische demping" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Tidal modulation of friction describes how Earth tides periodically alter normal stress on faults, modulating friction coefficients and potentially triggering earthquakes.",
          es: "La modulación mareal de la fricción describe cómo las mareas terrestres alteran periódicamente el estrés normal en las fallas, modulando coeficientes de fricción y potencialmente activando terremotos.",
          de: "Gezeitenmodulation der Reibung beschreibt, wie Erdgezeiten periodisch Normalspannungen an Verwerfungen verändern, Reibungskoeffizienten modulieren und möglicherweise Erdbeben auslösen.",
          nl: "Getijdenmodulatie van wrijving beschrijft hoe aardgetijden periodiek normale spanning op breuken veranderen, wrijvingscoëfficiënten moduleren en mogelijk aardbevingen activeren."
        }
      },
      {
        question: {
          en: "What cutting-edge seismic technique uses distributed fiber-optic sensing for high-resolution strain measurements?",
          es: "¿Qué técnica sísmica de vanguardia utiliza sensado distribuido de fibra óptica para mediciones de deformación de alta resolución?",
          de: "Welche hochmoderne seismische Technik nutzt verteilte faseroptische Sensorik für hochauflösende Dehnungsmessungen?",
          nl: "Welke geavanceerde seismische techniek gebruikt gedistribueerde glasvezel sensing voor hoge-resolutie rekmetingen?"
        },
        answers: [
          { en: "Distributed Acoustic Sensing (DAS)", es: "Sensado Acústico Distribuido (DAS)", de: "Verteilte Akustische Sensorik (DAS)", nl: "Gedistribueerde Akoestische Sensing (DAS)" },
          { en: "Coherent Doppler LIDAR", es: "LIDAR Doppler Coherente", de: "Kohärentes Doppler-LIDAR", nl: "Coherente Doppler LIDAR" },
          { en: "Synthetic Aperture Radar", es: "Radar de Apertura Sintética", de: "Synthetisches Apertur-Radar", nl: "Synthetische Aperture Radar" },
          { en: "Atom interferometry", es: "Interferometría atómica", de: "Atominterferometrie", nl: "Atoom interferometrie" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "DAS transforms standard fiber-optic cables into thousands of strain sensors using Rayleigh backscattering, enabling unprecedented spatial resolution in seismic monitoring.",
          es: "DAS transforma cables de fibra óptica estándar en miles de sensores de deformación usando dispersión Rayleigh retrógrada, habilitando resolución espacial sin precedentes en monitoreo sísmico.",
          de: "DAS verwandelt Standard-Glasfaserkabel in Tausende von Dehnungssensoren mittels Rayleigh-Rückstreuung und ermöglicht beispiellose räumliche Auflösung in der seismischen Überwachung.",
          nl: "DAS transformeert standaard glasvezelkabels in duizenden reksensoren met Rayleigh-terugverstrooiing, wat ongekende ruimtelijke resolutie in seismische monitoring mogelijk maakt."
        }
      },
      {
        question: {
          en: "Which theoretical framework describes the scattering of seismic waves by small-scale heterogeneities using Born approximation?",
          es: "¿Qué marco teórico describe la dispersión de ondas sísmicas por heterogeneidades de pequeña escala usando la aproximación de Born?",
          de: "Welcher theoretische Rahmen beschreibt die Streuung seismischer Wellen durch kleinmaßstäbliche Heterogenitäten mit der Born-Näherung?",
          nl: "Welk theoretisch raamwerk beschrijft de verstrooiing van seismische golven door kleinschalige heterogeniteiten met Born-benadering?"
        },
        answers: [
          { en: "Single-scattering theory", es: "Teoría de dispersión simple", de: "Einfachstreutheorie", nl: "Enkelvoudige verstrooiingstheorie" },
          { en: "Multiple-scattering theory", es: "Teoría de dispersión múltiple", de: "Mehrfachstreutheorie", nl: "Meervoudige verstrooiingstheorie" },
          { en: "Diffusion approximation", es: "Aproximación de difusión", de: "Diffusionsnäherung", nl: "Diffusie benadering" },
          { en: "Radiative transfer", es: "Transferencia radiativa", de: "Strahlungstransfer", nl: "Stralings overdracht" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Single-scattering theory with Born approximation describes weak scattering by small-scale heterogeneities, assuming the scattered field is much smaller than the incident field.",
          es: "La teoría de dispersión simple con aproximación de Born describe dispersión débil por heterogeneidades de pequeña escala, asumiendo que el campo dispersado es mucho menor que el campo incidente.",
          de: "Einfachstreutheorie mit Born-Näherung beschreibt schwache Streuung durch kleinmaßstäbliche Heterogenitäten, wobei angenommen wird, dass das gestreute Feld viel kleiner ist als das einfallende Feld.",
          nl: "Enkelvoudige verstrooiingstheorie met Born-benadering beschrijft zwakke verstrooiing door kleinschalige heterogeniteiten, aannemend dat het verstrooide veld veel kleiner is dan het invallende veld."
        }
      },
      {
        question: {
          en: "What phenomenon describes the time-dependent evolution of earthquake aftershock sequences following the Omori-Utsu law?",
          es: "¿Qué fenómeno describe la evolución temporal de secuencias de réplicas sísmicas siguiendo la ley de Omori-Utsu?",
          de: "Welches Phänomen beschreibt die zeitabhängige Entwicklung von Erdbeben-Nachbebenserien nach dem Omori-Utsu-Gesetz?",
          nl: "Welk fenomeen beschrijft de tijdsafhankelijke evolutie van aardbeving naschoksequenties volgens de Omori-Utsu wet?"
        },
        answers: [
          { en: "Power-law decay", es: "Decaimiento de ley de potencia", de: "Potenzgesetz-Zerfall", nl: "Machtswet verval" },
          { en: "Exponential decay", es: "Decaimiento exponencial", de: "Exponentieller Zerfall", nl: "Exponentieel verval" },
          { en: "Logarithmic growth", es: "Crecimiento logarítmico", de: "Logarithmisches Wachstum", nl: "Logaritmische groei" },
          { en: "Gaussian distribution", es: "Distribución gaussiana", de: "Gauß-Verteilung", nl: "Gaussische verdeling" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "The Omori-Utsu law describes aftershock decay rates following a power-law with time, n(t) ∝ (t+c)^(-p), where p is typically around 1.",
          es: "La ley de Omori-Utsu describe las tasas de decaimiento de réplicas siguiendo una ley de potencia con el tiempo, n(t) ∝ (t+c)^(-p), donde p es típicamente alrededor de 1.",
          de: "Das Omori-Utsu-Gesetz beschreibt Nachbeben-Zerfallsraten nach einem Potenzgesetz mit der Zeit, n(t) ∝ (t+c)^(-p), wobei p typischerweise etwa 1 beträgt.",
          nl: "De Omori-Utsu wet beschrijft naschok vervalsnelheden volgens een machtswet met tijd, n(t) ∝ (t+c)^(-p), waar p typisch rond 1 ligt."
        }
      },
      {
        question: {
          en: "Which advanced seismic processing technique removes instrumental response and applies deconvolution for source analysis?",
          es: "¿Qué técnica avanzada de procesamiento sísmico elimina la respuesta instrumental y aplica deconvolución para análisis de fuente?",
          de: "Welche fortgeschrittene seismische Verarbeitungstechnik entfernt die Instrumentenantwort und wendet Entfaltung für Quellenanalyse an?",
          nl: "Welke geavanceerde seismische verwerkingstechniek verwijdert instrumentele respons en past deconvolutie toe voor bronanalyse?"
        },
        answers: [
          { en: "Water-level deconvolution", es: "Deconvolución de nivel de agua", de: "Wasserspiegel-Entfaltung", nl: "Waterniiveau deconvolutie" },
          { en: "Wiener filtering", es: "Filtrado de Wiener", de: "Wiener-Filterung", nl: "Wiener filtering" },
          { en: "Kalman filtering", es: "Filtrado de Kalman", de: "Kalman-Filterung", nl: "Kalman filtering" },
          { en: "Matched filtering", es: "Filtrado adaptado", de: "Angepasste Filterung", nl: "Aangepaste filtering" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Water-level deconvolution stabilizes the deconvolution process by preventing division by very small values in the frequency domain, essential for source analysis.",
          es: "La deconvolución de nivel de agua estabiliza el proceso de deconvolución previniendo división por valores muy pequeños en el dominio de frecuencia, esencial para análisis de fuente.",
          de: "Wasserspiegel-Entfaltung stabilisiert den Entfaltungsprozess durch Verhinderung der Division durch sehr kleine Werte im Frequenzbereich, essentiell für Quellenanalyse.",
          nl: "Waterniiveau deconvolutie stabiliseert het deconvolutieproces door deling door zeer kleine waarden in het frequentiedomein te voorkomen, essentieel voor bronanalyse."
        }
      },
      {
        question: {
          en: "What seismological concept describes the relationship between earthquake magnitude and energy release through the Gutenberg-Richter relation?",
          es: "¿Qué concepto sismológico describe la relación entre magnitud sísmica y liberación de energía a través de la relación de Gutenberg-Richter?",
          de: "Welches seismologische Konzept beschreibt die Beziehung zwischen Erdbebenmagnitude und Energiefreisetzung durch die Gutenberg-Richter-Beziehung?",
          nl: "Welk seismologisch concept beschrijft de relatie tussen aardbevingmagnitude en energie-afgifte via de Gutenberg-Richter relatie?"
        },
        answers: [
          { en: "Frequency-magnitude distribution", es: "Distribución frecuencia-magnitud", de: "Häufigkeits-Magnitud-Verteilung", nl: "Frequentie-magnitude verdeling" },
          { en: "Seismic moment scaling", es: "Escalamiento del momento sísmico", de: "Seismische Moment-Skalierung", nl: "Seismische moment schaling" },
          { en: "Energy-moment relationship", es: "Relación energía-momento", de: "Energie-Moment-Beziehung", nl: "Energie-moment relatie" },
          { en: "Stress drop variation", es: "Variación de caída de estrés", de: "Spannungsabfall-Variation", nl: "Spanningsval variatie" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "The Gutenberg-Richter relation describes the frequency-magnitude distribution: log N = a - bM, where N is the number of earthquakes with magnitude ≥ M.",
          es: "La relación de Gutenberg-Richter describe la distribución frecuencia-magnitud: log N = a - bM, donde N es el número de terremotos con magnitud ≥ M.",
          de: "Die Gutenberg-Richter-Beziehung beschreibt die Häufigkeits-Magnitud-Verteilung: log N = a - bM, wobei N die Anzahl der Erdbeben mit Magnitude ≥ M ist.",
          nl: "De Gutenberg-Richter relatie beschrijft de frequentie-magnitude verdeling: log N = a - bM, waar N het aantal aardbevingen is met magnitude ≥ M."
        }
      },
      {
        question: {
          en: "Which computational approach uses adjoint methods to calculate sensitivity kernels for full-waveform tomography?",
          es: "¿Qué enfoque computacional utiliza métodos adjuntos para calcular kernels de sensibilidad para tomografía de forma de onda completa?",
          de: "Welcher Rechenansatz nutzt adjunkte Methoden zur Berechnung von Sensitivitätskerneln für vollständige Wellenform-Tomographie?",
          nl: "Welke computationele benadering gebruikt adjuncte methoden om gevoeligheidskernels te berekenen voor volledige golfvorm tomografie?"
        },
        answers: [
          { en: "Adjoint-state method", es: "Método de estado adjunto", de: "Adjunkt-Zustand-Methode", nl: "Adjunct-toestand methode" },
          { en: "Finite-difference method", es: "Método de diferencias finitas", de: "Finite-Differenzen-Methode", nl: "Eindige-verschil methode" },
          { en: "Monte Carlo sampling", es: "Muestreo Monte Carlo", de: "Monte-Carlo-Stichprobenverfahren", nl: "Monte Carlo sampling" },
          { en: "Genetic algorithm", es: "Algoritmo genético", de: "Genetischer Algorithmus", nl: "Genetisch algoritme" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "The adjoint-state method efficiently computes sensitivity kernels by solving both forward and adjoint wave equations, enabling gradient-based optimization in tomography.",
          es: "El método de estado adjunto calcula eficientemente kernels de sensibilidad resolviendo ecuaciones de onda directas y adjuntas, habilitando optimización basada en gradientes en tomografía.",
          de: "Die Adjunkt-Zustand-Methode berechnet effizient Sensitivitätskerne durch Lösung sowohl vorwärts als auch adjunkter Wellengleichungen, ermöglicht gradientenbasierte Optimierung in Tomographie.",
          nl: "De adjunct-toestand methode berekent efficiënt gevoeligheidskernels door zowel voorwaartse als adjuncte golfvergelijkingen op te lossen, wat gradiënt-gebaseerde optimalisatie in tomografie mogelijk maakt."
        }
      },
      {
        question: {
          en: "What seismic phenomenon involves the interaction between seismic waves and Earth's magnetic field in magnetotelluric studies?",
          es: "¿Qué fenómeno sísmico involucra la interacción entre ondas sísmicas y el campo magnético terrestre en estudios magnetotelúricos?",
          de: "Welches seismische Phänomen beinhaltet die Wechselwirkung zwischen seismischen Wellen und Erdmagnetfeld in magnetotellurischen Studien?",
          nl: "Welk seismisch fenomeen behelst de interactie tussen seismische golven en het aardmagnetisch veld in magnetotellurische studies?"
        },
        answers: [
          { en: "Electrokinetic coupling", es: "Acoplamiento electrocinético", de: "Elektrokinetische Kopplung", nl: "Elektrokinetische koppeling" },
          { en: "Piezoelectric effect", es: "Efecto piezoeléctrico", de: "Piezoelektrischer Effekt", nl: "Piëzo-elektrisch effect" },
          { en: "Magnetostrictive response", es: "Respuesta magnetostrictiva", de: "Magnetostriktive Antwort", nl: "Magnetostrictieve respons" },
          { en: "Seismic-electromagnetic coupling", es: "Acoplamiento sísmico-electromagnético", de: "Seismo-elektromagnetische Kopplung", nl: "Seismisch-elektromagnetische koppeling" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Electrokinetic coupling describes how fluid flow induced by seismic waves generates electrical currents through charge separation, detectable in magnetotelluric measurements.",
          es: "El acoplamiento electrocinético describe cómo el flujo de fluido inducido por ondas sísmicas genera corrientes eléctricas a través de separación de carga, detectable en mediciones magnetotelúricas.",
          de: "Elektrokinetische Kopplung beschreibt, wie durch seismische Wellen induzierte Fluidströmung elektrische Ströme durch Ladungstrennung erzeugt, nachweisbar in magnetotellurischen Messungen.",
          nl: "Elektrokinetische koppeling beschrijft hoe vloeistofstroom geïnduceerd door seismische golven elektrische stromen genereert door ladingsscheiding, detecteerbaar in magnetotellurische metingen."
        }
      },
      {
        question: {
          en: "Which advanced technique uses cross-correlation of seismic noise to extract empirical Green's functions?",
          es: "¿Qué técnica avanzada utiliza correlación cruzada de ruido sísmico para extraer funciones de Green empíricas?",
          de: "Welche fortgeschrittene Technik nutzt Kreuzkorrelation von seismischem Rauschen zur Extraktion empirischer Green-Funktionen?",
          nl: "Welke geavanceerde techniek gebruikt kruiscorrelatie van seismische ruis om empirische Green-functies te extraheren?"
        },
        answers: [
          { en: "Ambient noise interferometry", es: "Interferometría de ruido ambiental", de: "Umgebungsrauschen-Interferometrie", nl: "Omgevingsruis interferometrie" },
          { en: "Noise suppression filtering", es: "Filtrado de supresión de ruido", de: "Rauschunterdrückungsfilterung", nl: "Ruisonderdrukking filtering" },
          { en: "Spectral whitening", es: "Blanqueamiento espectral", de: "Spektrale Weißung", nl: "Spectrale witmaking" },
          { en: "Coherence analysis", es: "Análisis de coherencia", de: "Kohärenzanalyse", nl: "Coherentie analyse" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Ambient noise interferometry cross-correlates continuous seismic noise records to extract Green's functions, enabling tomography without earthquakes.",
          es: "La interferometría de ruido ambiental correlaciona cruzadamente registros continuos de ruido sísmico para extraer funciones de Green, habilitando tomografía sin terremotos.",
          de: "Umgebungsrauschen-Interferometrie korreliert kontinuierliche seismische Rauschaufzeichnungen kreuz, um Green-Funktionen zu extrahieren, ermöglicht Tomographie ohne Erdbeben.",
          nl: "Omgevingsruis interferometrie kruiscorrelteert continue seismische ruisopnames om Green-functies te extraheren, wat tomografie zonder aardbevingen mogelijk maakt."
        }
      },
      {
        question: {
          en: "What theoretical framework describes the statistical properties of seismic wave propagation through randomly heterogeneous media?",
          es: "¿Qué marco teórico describe las propiedades estadísticas de propagación de ondas sísmicas a través de medios aleatoriamente heterogéneos?",
          de: "Welcher theoretische Rahmen beschreibt die statistischen Eigenschaften der seismischen Wellenausbreitung durch zufällig heterogene Medien?",
          nl: "Welk theoretisch raamwerk beschrijft de statistische eigenschappen van seismische golfvoortplanting door willekeurig heterogene media?"
        },
        answers: [
          { en: "Random medium theory", es: "Teoría de medios aleatorios", de: "Zufallsmedium-Theorie", nl: "Willekeurig medium theorie" },
          { en: "Effective medium theory", es: "Teoría de medios efectivos", de: "Effektive-Medium-Theorie", nl: "Effectieve medium theorie" },
          { en: "Homogenization theory", es: "Teoría de homogeneización", de: "Homogenisierungstheorie", nl: "Homogenisatie theorie" },
          { en: "Perturbation theory", es: "Teoría de perturbación", de: "Störungstheorie", nl: "Perturbatie theorie" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Random medium theory provides statistical descriptions of wave propagation through media with random velocity fluctuations, predicting scattering and attenuation effects.",
          es: "La teoría de medios aleatorios proporciona descripciones estadísticas de propagación de ondas a través de medios con fluctuaciones aleatorias de velocidad, prediciendo efectos de dispersión y atenuación.",
          de: "Zufallsmedium-Theorie liefert statistische Beschreibungen der Wellenausbreitung durch Medien mit zufälligen Geschwindigkeitsfluktuationen, sagt Streu- und Dämpfungseffekte vorher.",
          nl: "Willekeurig medium theorie biedt statistische beschrijvingen van golfvoortplanting door media met willekeurige snelheidsfluctuaties, voorspelt verstrooiings- en dempingseffecten."
        }
      },
      {
        question: {
          en: "Which seismological method uses the polarization properties of shear waves to determine subsurface anisotropy?",
          es: "¿Qué método sismológico utiliza las propiedades de polarización de ondas de cizalla para determinar anisotropía subterránea?",
          de: "Welche seismologische Methode nutzt die Polarisationseigenschaften von Scherwellen zur Bestimmung unterirdischer Anisotropie?",
          nl: "Welke seismologische methode gebruikt de polarisatie-eigenschappen van schuifgolven om ondergrondse anisotropie te bepalen?"
        },
        answers: [
          { en: "Shear-wave splitting analysis", es: "Análisis de división de ondas de cizalla", de: "Scherwellen-Spaltungsanalyse", nl: "Schuifgolf splitsingsanalyse" },
          { en: "Receiver function analysis", es: "Análisis de función de receptor", de: "Empfängerfunktionsanalyse", nl: "Ontvanger functie analyse" },
          { en: "Surface wave dispersion", es: "Dispersión de ondas superficiales", de: "Oberflächenwellen-Dispersion", nl: "Oppervlaktegolf dispersie" },
          { en: "Body wave tomography", es: "Tomografía de ondas corporales", de: "Raumwellen-Tomographie", nl: "Ruimtegolf tomografie" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Shear-wave splitting occurs when S-waves propagate through anisotropic media, splitting into fast and slow components with orthogonal polarizations.",
          es: "La división de ondas de cizalla ocurre cuando ondas S se propagan a través de medios anisotrópicos, dividiéndose en componentes rápidos y lentos con polarizaciones ortogonales.",
          de: "Scherwellen-Spaltung tritt auf, wenn S-Wellen sich durch anisotrope Medien ausbreiten, sich in schnelle und langsame Komponenten mit orthogonalen Polarisationen spalten.",
          nl: "Schuifgolf splitsing treedt op wanneer S-golven zich voortplanten door anisotrope media, splitsend in snelle en langzame componenten met orthogonale polarisaties."
        }
      },
      {
        question: {
          en: "What computational technique optimizes earthquake location using probabilistic frameworks and Bayesian inference?",
          es: "¿Qué técnica computacional optimiza la localización de terremotos usando marcos probabilísticos e inferencia bayesiana?",
          de: "Welche Berechnungstechnik optimiert Erdbebenlokalisierung mit probabilistischen Rahmen und Bayesscher Inferenz?",
          nl: "Welke computationele techniek optimaliseert aardbevinglocalisatie met probabilistische raamwerken en Bayesiaanse inferentie?"
        },
        answers: [
          { en: "Bayesian location algorithms", es: "Algoritmos de localización bayesiana", de: "Bayessche Lokalisierungsalgorithmen", nl: "Bayesiaanse localisatie algoritmen" },
          { en: "Grid search methods", es: "Métodos de búsqueda en grilla", de: "Gittersuche-Methoden", nl: "Rooster zoek methoden" },
          { en: "Genetic algorithms", es: "Algoritmos genéticos", de: "Genetische Algorithmen", nl: "Genetische algoritmen" },
          { en: "Simulated annealing", es: "Recocido simulado", de: "Simuliertes Ausglühen", nl: "Gesimuleerd uitgloeien" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Bayesian location algorithms incorporate prior information and uncertainty quantification, providing probabilistic earthquake locations with confidence intervals.",
          es: "Los algoritmos de localización bayesiana incorporan información previa y cuantificación de incertidumbre, proporcionando localizaciones probabilísticas de terremotos con intervalos de confianza.",
          de: "Bayessche Lokalisierungsalgorithmen integrieren Vorinformationen und Unsicherheitsquantifizierung, liefern probabilistische Erdbebenlokalisierungen mit Konfidenzintervallen.",
          nl: "Bayesiaanse localisatie algoritmen incorporeren voorkennis en onzekerheidskwantificatie, bieden probabilistische aardbevinglocalisaties met betrouwbaarheidsintervallen."
        }
      },
      {
        question: {
          en: "Which seismic phenomenon describes the coupling between fault slip and pore fluid pressure changes?",
          es: "¿Qué fenómeno sísmico describe el acoplamiento entre deslizamiento de falla y cambios de presión de fluido de poro?",
          de: "Welches seismische Phänomen beschreibt die Kopplung zwischen Verwerfungsrutschung und Porenfluiddruckänderungen?",
          nl: "Welk seismisch fenomeen beschrijft de koppeling tussen breukslip en porievloeistofdrukveranderingen?"
        },
        answers: [
          { en: "Poroelastic triggering", es: "Activación poroelástica", de: "Poroelastische Auslösung", nl: "Poroelastische activering" },
          { en: "Dynamic triggering", es: "Activación dinámica", de: "Dynamische Auslösung", nl: "Dynamische activering" },
          { en: "Static stress transfer", es: "Transferencia de estrés estático", de: "Statischer Spannungstransfer", nl: "Statische spanningsoverdracht" },
          { en: "Viscoelastic relaxation", es: "Relajación viscoelástica", de: "Viskoelastische Entspannung", nl: "Viscoelastische relaxatie" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Poroelastic triggering involves the diffusion of pore pressure changes that alter effective stress on faults, potentially triggering earthquakes at distances.",
          es: "La activación poroelástica involucra la difusión de cambios de presión de poro que alteran el estrés efectivo en fallas, potencialmente activando terremotos a distancias.",
          de: "Poroelastische Auslösung beinhaltet die Diffusion von Porendruckänderungen, die effektive Spannung an Verwerfungen verändern, möglicherweise Erdbeben in Entfernungen auslösen.",
          nl: "Poroelastische activering behelst de diffusie van poriedrukveranderingen die effectieve spanning op breuken veranderen, mogelijk aardbevingen op afstanden activeren."
        }
      },
      {
        question: {
          en: "What advanced seismic imaging technique uses machine learning to automatically detect and classify seismic phases?",
          es: "¿Qué técnica avanzada de imagen sísmica utiliza aprendizaje automático para detectar y clasificar automáticamente fases sísmicas?",
          de: "Welche fortgeschrittene seismische Bildgebungstechnik nutzt maschinelles Lernen zur automatischen Erkennung und Klassifikation seismischer Phasen?",
          nl: "Welke geavanceerde seismische beeldvormingstechniek gebruikt machine learning om automatisch seismische fases te detecteren en classificeren?"
        },
        answers: [
          { en: "Deep neural networks", es: "Redes neuronales profundas", de: "Tiefe neuronale Netzwerke", nl: "Diepe neurale netwerken" },
          { en: "Support vector machines", es: "Máquinas de vectores de soporte", de: "Support-Vektor-Maschinen", nl: "Support vector machines" },
          { en: "Random forest classifiers", es: "Clasificadores de bosque aleatorio", de: "Zufallswald-Klassifikatoren", nl: "Willekeurig bos classificeerders" },
          { en: "K-means clustering", es: "Agrupamiento K-means", de: "K-Means-Clustering", nl: "K-means clustering" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Deep neural networks, particularly convolutional and recurrent architectures, excel at automatic phase detection and classification from raw seismic waveforms.",
          es: "Las redes neuronales profundas, particularmente arquitecturas convolucionales y recurrentes, sobresalen en detección automática de fases y clasificación de formas de onda sísmicas crudas.",
          de: "Tiefe neuronale Netzwerke, besonders konvolutionelle und rekurrente Architekturen, glänzen bei automatischer Phasenerkennung und Klassifikation aus rohen seismischen Wellenformen.",
          nl: "Diepe neurale netwerken, vooral convolutionele en recurrente architecturen, blinken uit in automatische fasedetectie en classificatie van ruwe seismische golfvormen."
        }
      },
      {
        question: {
          en: "Which theoretical concept describes the relationship between seismic wave attenuation and frequency-dependent quality factor?",
          es: "¿Qué concepto teórico describe la relación entre atenuación de ondas sísmicas y factor de calidad dependiente de frecuencia?",
          de: "Welches theoretische Konzept beschreibt die Beziehung zwischen seismischer Wellendämpfung und frequenzabhängigem Qualitätsfaktor?",
          nl: "Welk theoretisch concept beschrijft de relatie tussen seismische golf demping en frequentie-afhankelijke kwaliteitsfactor?"
        },
        answers: [
          { en: "Constant-Q attenuation", es: "Atenuación Q constante", de: "Konstante-Q-Dämpfung", nl: "Constante-Q demping" },
          { en: "Viscous damping", es: "Amortiguamiento viscoso", de: "Viskose Dämpfung", nl: "Viskeuze demping" },
          { en: "Rayleigh damping", es: "Amortiguamiento de Rayleigh", de: "Rayleigh-Dämpfung", nl: "Rayleigh demping" },
          { en: "Hysteretic damping", es: "Amortiguamiento histerético", de: "Hysteretische Dämpfung", nl: "Hysteretische demping" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Constant-Q attenuation describes frequency-independent quality factor where attenuation is proportional to frequency, commonly observed in Earth materials.",
          es: "La atenuación Q constante describe factor de calidad independiente de frecuencia donde la atenuación es proporcional a la frecuencia, comúnmente observada en materiales terrestres.",
          de: "Konstante-Q-Dämpfung beschreibt frequenzunabhängigen Qualitätsfaktor, wo Dämpfung proportional zur Frequenz ist, häufig in Erdmaterialien beobachtet.",
          nl: "Constante-Q demping beschrijft frequentie-onafhankelijke kwaliteitsfactor waar demping evenredig is met frequentie, algemeen waargenomen in aardmaterialen."
        }
      },
      {
        question: {
          en: "What cutting-edge seismological application uses quantum sensors to measure ultra-small ground accelerations?",
          es: "¿Qué aplicación sismológica de vanguardia utiliza sensores cuánticos para medir aceleraciones terrestres ultra-pequeñas?",
          de: "Welche hochmoderne seismologische Anwendung nutzt Quantensensoren zur Messung ultra-kleiner Bodenbeschleunigungen?",
          nl: "Welke geavanceerde seismologische toepassing gebruikt kwantumsensoren om ultra-kleine grondversnellingen te meten?"
        },
        answers: [
          { en: "Quantum gravimetry", es: "Gravimetría cuántica", de: "Quantengravimetrie", nl: "Kwantum gravimetrie" },
          { en: "Laser interferometry", es: "Interferometría láser", de: "Laserinterferometrie", nl: "Laser interferometrie" },
          { en: "MEMS accelerometry", es: "Acelerometría MEMS", de: "MEMS-Beschleunigungsmessung", nl: "MEMS accelerometrie" },
          { en: "Superconducting sensors", es: "Sensores superconductores", de: "Supraleitende Sensoren", nl: "Supergeleidende sensoren" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Quantum gravimetry uses cold atom interferometry to achieve unprecedented sensitivity for measuring tiny gravitational and acceleration changes.",
          es: "La gravimetría cuántica utiliza interferometría de átomos fríos para lograr sensibilidad sin precedentes para medir cambios diminutos gravitacionales y de aceleración.",
          de: "Quantengravimetrie nutzt kalte Atominterferometrie für beispiellose Sensitivität zur Messung winziger Gravitations- und Beschleunigungsänderungen.",
          nl: "Kwantum gravimetrie gebruikt koude atoom interferometrie om ongekende gevoeligheid te bereiken voor het meten van kleine gravitationele en versnellingsveranderingen."
        }
      },
      {
        question: {
          en: "Which computational approach uses graph neural networks to predict earthquake rupture propagation patterns?",
          es: "¿Qué enfoque computacional utiliza redes neuronales de grafos para predecir patrones de propagación de rupturas sísmicas?",
          de: "Welcher Rechenansatz nutzt Graph-Neuronale-Netzwerke zur Vorhersage von Erdbebenriss-Ausbreitungsmustern?",
          nl: "Welke computationele benadering gebruikt graph neurale netwerken om aardbevingbreuk voortplantingspatronen te voorspellen?"
        },
        answers: [
          { en: "Spatiotemporal graph learning", es: "Aprendizaje de grafos espaciotemporales", de: "Raum-zeitliches Graph-Lernen", nl: "Ruimte-tijd graph leren" },
          { en: "Convolutional neural networks", es: "Redes neuronales convolucionales", de: "Konvolutionelle neuronale Netzwerke", nl: "Convolutionele neurale netwerken" },
          { en: "Recurrent neural networks", es: "Redes neuronales recurrentes", de: "Rekurrente neuronale Netzwerke", nl: "Recurrente neurale netwerken" },
          { en: "Transformer architectures", es: "Arquitecturas transformer", de: "Transformer-Architekturen", nl: "Transformer architecturen" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Spatiotemporal graph learning models fault networks as graphs, capturing complex rupture propagation dynamics across interconnected fault systems.",
          es: "El aprendizaje de grafos espaciotemporales modela redes de fallas como grafos, capturando dinámicas complejas de propagación de ruptura a través de sistemas de fallas interconectados.",
          de: "Raum-zeitliches Graph-Lernen modelliert Verwerfungsnetze als Graphen, erfasst komplexe Riss-Ausbreitungsdynamik über vernetzte Verwerfungssysteme.",
          nl: "Ruimte-tijd graph leren modelleert breuknetwerken als grafen, vangt complexe breukvoortplantingsdynamiek over onderling verbonden breugsystemen."
        }
      },
      {
        question: {
          en: "What advanced seismic hazard assessment method incorporates real-time ground motion monitoring with probabilistic forecasting?",
          es: "¿Qué método avanzado de evaluación de peligro sísmico incorpora monitoreo de movimiento del suelo en tiempo real con pronóstico probabilístico?",
          de: "Welche fortgeschrittene seismische Gefährdungsbeurteilungsmethode integriert Echtzeit-Bodenbewegungsüberwachung mit probabilistischer Vorhersage?",
          nl: "Welke geavanceerde seismische gevaarassessment methode incorporeert real-time grondbeweging monitoring met probabilistische voorspelling?"
        },
        answers: [
          { en: "Operational Earthquake Forecasting (OEF)", es: "Pronóstico Operacional de Terremotos (OEF)", de: "Operationelle Erdbebenvorhersage (OEF)", nl: "Operationele Aardbeving Voorspelling (OEF)" },
          { en: "Probabilistic Seismic Hazard Analysis", es: "Análisis Probabilístico de Peligro Sísmico", de: "Probabilistische seismische Gefährdungsanalyse", nl: "Probabilistische Seismische Gevaaranalyse" },
          { en: "Deterministic Hazard Assessment", es: "Evaluación Determinística de Peligro", de: "Deterministische Gefährdungsbeurteilung", nl: "Deterministische Gevaarbeoordeling" },
          { en: "Statistical Seismology", es: "Sismología Estadística", de: "Statistische Seismologie", nl: "Statistische Seismologie" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "OEF combines real-time seismic monitoring with probabilistic models to provide time-dependent earthquake forecasts for operational decision-making.",
          es: "OEF combina monitoreo sísmico en tiempo real con modelos probabilísticos para proporcionar pronósticos de terremotos dependientes del tiempo para toma de decisiones operacionales.",
          de: "OEF kombiniert Echtzeit-seismische Überwachung mit probabilistischen Modellen zur Bereitstellung zeitabhängiger Erdbebenvorhersagen für operative Entscheidungsfindung.",
          nl: "OEF combineert real-time seismische monitoring met probabilistische modellen om tijdsafhankelijke aardbevingvoorspellingen te bieden voor operationele besluitvorming."
        }
      },
      {
        question: {
          en: "Which technique uses teleseismic P-waves to image upper mantle velocity structure beneath seismic stations?",
          es: "¿Qué técnica utiliza ondas P telesísmicas para generar imágenes de estructura de velocidad del manto superior debajo de estaciones sísmicas?",
          de: "Welche Technik nutzt teleseismische P-Wellen zur Bildgebung der Geschwindigkeitsstruktur des oberen Mantels unter seismischen Stationen?",
          nl: "Welke techniek gebruikt teleseismische P-golven om bovenmantel snelheidsstructuur onder seismische stations in beeld te brengen?"
        },
        answers: [
          { en: "P-wave receiver functions", es: "Funciones de receptor de ondas P", de: "P-Wellen-Empfängerfunktionen", nl: "P-golf ontvanger functies" },
          { en: "Surface wave tomography", es: "Tomografía de ondas superficiales", de: "Oberflächenwellen-Tomographie", nl: "Oppervlaktegolf tomografie" },
          { en: "Body wave tomography", es: "Tomografía de ondas corporales", de: "Raumwellen-Tomographie", nl: "Ruimtegolf tomografie" },
          { en: "Ambient noise tomography", es: "Tomografía de ruido ambiental", de: "Umgebungsrauschen-Tomographie", nl: "Omgevingsruis tomografie" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "P-wave receiver functions isolate P-to-S converted phases at velocity discontinuities beneath stations, providing high-resolution images of crustal and upper mantle structure.",
          es: "Las funciones de receptor de ondas P aíslan fases convertidas P-a-S en discontinuidades de velocidad debajo de estaciones, proporcionando imágenes de alta resolución de estructura cortical y del manto superior.",
          de: "P-Wellen-Empfängerfunktionen isolieren P-zu-S-konvertierte Phasen an Geschwindigkeitsdiskontinuitäten unter Stationen, bieten hochauflösende Bilder der Krusten- und oberen Mantelstruktur.",
          nl: "P-golf ontvanger functies isoleren P-naar-S geconverteerde fasen bij snelheidsdiscontinuïteiten onder stations, bieden hoge-resolutie beelden van korst- en bovenmantelstructuur."
        }
      },
      {
        question: {
          en: "What computational framework optimizes seismic network design using information theory and mutual information criteria?",
          es: "¿Qué marco computacional optimiza el diseño de redes sísmicas usando teoría de información y criterios de información mutua?",
          de: "Welches Rechenrahmen optimiert seismisches Netzwerkdesign mit Informationstheorie und wechselseitigen Informationskriterien?",
          nl: "Welk computationeel raamwerk optimaliseert seismisch netwerk ontwerp met informatietheorie en wederzijdse informatie criteria?"
        },
        answers: [
          { en: "Optimal Experimental Design (OED)", es: "Diseño Experimental Óptimo (OED)", de: "Optimales experimentelles Design (OED)", nl: "Optimaal Experimenteel Ontwerp (OED)" },
          { en: "Monte Carlo simulation", es: "Simulación Monte Carlo", de: "Monte-Carlo-Simulation", nl: "Monte Carlo simulatie" },
          { en: "Genetic algorithms", es: "Algoritmos genéticos", de: "Genetische Algorithmen", nl: "Genetische algoritmen" },
          { en: "Simulated annealing", es: "Recocido simulado", de: "Simuliertes Ausglühen", nl: "Gesimuleerd uitgloeien" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "OED uses information theory to maximize expected information gain from seismic observations, optimizing station placement for specific monitoring objectives.",
          es: "OED utiliza teoría de información para maximizar ganancia de información esperada de observaciones sísmicas, optimizando ubicación de estaciones para objetivos específicos de monitoreo.",
          de: "OED nutzt Informationstheorie zur Maximierung erwarteter Informationsgewinne aus seismischen Beobachtungen, optimiert Stationsplatzierung für spezifische Überwachungsziele.",
          nl: "OED gebruikt informatietheorie om verwachte informatiewinst van seismische observaties te maximaliseren, optimaliseert stationplaatsing voor specifieke monitoringdoelstellingen."
        }
      },
      {
        question: {
          en: "Which advanced ground motion prediction equation incorporates site-specific amplification effects using VS30 and basin depth parameters?",
          es: "¿Qué ecuación avanzada de predicción de movimiento del suelo incorpora efectos de amplificación específicos del sitio usando parámetros VS30 y profundidad de cuenca?",
          de: "Welche fortgeschrittene Bodenbewegungsvorhersagegleichung integriert standortspezifische Verstärkungseffekte mit VS30- und Becken-Tiefe-Parametern?",
          nl: "Welke geavanceerde grondbeweging voorspellingsvergelijking incorporeert site-specifieke versterkingseffecten met VS30 en bekken diepte parameters?"
        },
        answers: [
          { en: "Next Generation Attenuation (NGA) models", es: "Modelos de Atenuación de Próxima Generación (NGA)", de: "Next Generation Attenuation (NGA) Modelle", nl: "Next Generation Attenuation (NGA) modellen" },
          { en: "Boore-Atkinson models", es: "Modelos de Boore-Atkinson", de: "Boore-Atkinson-Modelle", nl: "Boore-Atkinson modellen" },
          { en: "Campbell-Bozorgnia equations", es: "Ecuaciones de Campbell-Bozorgnia", de: "Campbell-Bozorgnia-Gleichungen", nl: "Campbell-Bozorgnia vergelijkingen" },
          { en: "Abrahamson-Silva relations", es: "Relaciones de Abrahamson-Silva", de: "Abrahamson-Silva-Beziehungen", nl: "Abrahamson-Silva relaties" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "NGA models represent the state-of-the-art in ground motion prediction, incorporating detailed site effects through VS30, basin depth, and hanging wall parameters.",
          es: "Los modelos NGA representan el estado del arte en predicción de movimiento del suelo, incorporando efectos detallados del sitio a través de parámetros VS30, profundidad de cuenca y muro colgante.",
          de: "NGA-Modelle repräsentieren den Stand der Technik in Bodenbewegungsvorhersage, integrieren detaillierte Standorteffekte durch VS30-, Beckentiefe- und Hanging-Wall-Parameter.",
          nl: "NGA modellen vertegenwoordigen de stand van de techniek in grondbeweging voorspelling, incorporeren gedetailleerde site-effecten door VS30, bekkendiepte en hanging wall parameters."
        }
      },
      {
        question: {
          en: "What sophisticated technique uses multi-scale wavelet analysis to characterize non-stationary ground motion time-frequency content?",
          es: "¿Qué técnica sofisticada utiliza análisis wavelet multi-escala para caracterizar contenido tiempo-frecuencia de movimiento del suelo no estacionario?",
          de: "Welche raffinierte Technik nutzt mehrskalige Wavelet-Analyse zur Charakterisierung nicht-stationärer Bodenbewegung Zeit-Frequenz-Inhalte?",
          nl: "Welke geavanceerde techniek gebruikt multi-schaal wavelet analyse om niet-stationaire grondbeweging tijd-frequentie inhoud te karakteriseren?"
        },
        answers: [
          { en: "Continuous wavelet transform (CWT)", es: "Transformada wavelet continua (CWT)", de: "Kontinuierliche Wavelet-Transformation (CWT)", nl: "Continue wavelet transformatie (CWT)" },
          { en: "Short-time Fourier transform", es: "Transformada de Fourier de tiempo corto", de: "Kurzziet-Fourier-Transformation", nl: "Korte-tijd Fourier transformatie" },
          { en: "Hilbert-Huang transform", es: "Transformada de Hilbert-Huang", de: "Hilbert-Huang-Transformation", nl: "Hilbert-Huang transformatie" },
          { en: "Wigner-Ville distribution", es: "Distribución de Wigner-Ville", de: "Wigner-Ville-Verteilung", nl: "Wigner-Ville verdeling" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "CWT provides optimal time-frequency resolution for analyzing non-stationary seismic signals, capturing both transient and persistent spectral features in ground motion.",
          es: "CWT proporciona resolución tiempo-frecuencia óptima para analizar señales sísmicas no estacionarias, capturando características espectrales tanto transitorias como persistentes en movimiento del suelo.",
          de: "CWT bietet optimale Zeit-Frequenz-Auflösung zur Analyse nicht-stationärer seismischer Signale, erfasst sowohl transiente als auch persistente spektrale Eigenschaften in Bodenbewegung.",
          nl: "CWT biedt optimale tijd-frequentie resolutie voor het analyseren van niet-stationaire seismische signalen, vangt zowel transiënte als persistente spectrale kenmerken in grondbeweging."
        }
      },
      {
        question: {
          en: "Which probabilistic seismic hazard methodology incorporates temporal clustering models for aftershock sequences?",
          es: "¿Qué metodología probabilística de peligro sísmico incorpora modelos de agrupamiento temporal para secuencias de réplicas?",
          de: "Welche probabilistische seismische Gefährdungsmethodik integriert zeitliche Clustering-Modelle für Nachbeben-Sequenzen?",
          nl: "Welke probabilistische seismische gevaarmethodologie incorporeert temporele clustering modellen voor naschok sequenties?"
        },
        answers: [
          { en: "Epidemic-Type Aftershock Sequence (ETAS) models", es: "Modelos de Secuencia de Réplicas Tipo Epidémico (ETAS)", de: "Epidemie-Typ Nachbeben-Sequenz (ETAS) Modelle", nl: "Epidemie-Type Aftershock Sequence (ETAS) modellen" },
          { en: "Poisson process models", es: "Modelos de proceso de Poisson", de: "Poisson-Prozess-Modelle", nl: "Poisson proces modellen" },
          { en: "Renewal process models", es: "Modelos de proceso de renovación", de: "Erneuerungsprozess-Modelle", nl: "Vernieuwingsproces modellen" },
          { en: "Markov chain models", es: "Modelos de cadena de Markov", de: "Markov-Ketten-Modelle", nl: "Markov keten modellen" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "ETAS models capture the self-exciting nature of earthquake sequences, where each earthquake can trigger additional events following Omori's law and productivity scaling.",
          es: "Los modelos ETAS capturan la naturaleza auto-excitante de secuencias de terremotos, donde cada terremoto puede activar eventos adicionales siguiendo la ley de Omori y escalamiento de productividad.",
          de: "ETAS-Modelle erfassen die selbst-erregende Natur von Erdbeben-Sequenzen, wobei jedes Erdbeben zusätzliche Ereignisse nach Omori's Gesetz und Produktivitätsskalierung auslösen kann.",
          nl: "ETAS modellen vangen de zelf-opwekkende aard van aardbevingsequenties, waarbij elke aardbeving aanvullende gebeurtenissen kan activeren volgens Omori's wet en productiviteitsschaling."
        }
      },
      {
        question: {
          en: "What cutting-edge computational approach uses physics-informed neural networks for seismic wave propagation modeling?",
          es: "¿Qué enfoque computacional de vanguardia utiliza redes neuronales informadas por física para modelado de propagación de ondas sísmicas?",
          de: "Welcher hochmoderne Rechenansatz nutzt physik-informierte neuronale Netzwerke für seismische Wellenausbreitungsmodellierung?",
          nl: "Welke geavanceerde computationele benadering gebruikt fysica-geïnformeerde neurale netwerken voor seismische golfvoortplanting modellering?"
        },
        answers: [
          { en: "Physics-Informed Neural Networks (PINNs)", es: "Redes Neuronales Informadas por Física (PINNs)", de: "Physik-informierte neuronale Netzwerke (PINNs)", nl: "Fysica-geïnformeerde Neurale Netwerken (PINNs)" },
          { en: "Convolutional Neural Networks", es: "Redes Neuronales Convolucionales", de: "Konvolutionelle neuronale Netzwerke", nl: "Convolutionele Neurale Netwerken" },
          { en: "Recurrent Neural Networks", es: "Redes Neuronales Recurrentes", de: "Rekurrente neuronale Netzwerke", nl: "Recurrente Neurale Netwerken" },
          { en: "Graph Neural Networks", es: "Redes Neuronales de Grafos", de: "Graph-neuronale Netzwerke", nl: "Graph Neurale Netwerken" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "PINNs incorporate physical laws (wave equations) directly into the neural network loss function, enabling physics-constrained learning for wave propagation problems.",
          es: "PINNs incorporan leyes físicas (ecuaciones de onda) directamente en la función de pérdida de la red neuronal, habilitando aprendizaje restringido por física para problemas de propagación de ondas.",
          de: "PINNs integrieren physikalische Gesetze (Wellengleichungen) direkt in die Verlustfunktion des neuronalen Netzwerks, ermöglichen physik-beschränktes Lernen für Wellenausbreitungsprobleme.",
          nl: "PINNs incorporeren fysieke wetten (golfvergelijkingen) direct in de verliesfunctie van het neurale netwerk, wat fysica-beperkt leren voor golfvoortplantingsproblemen mogelijk maakt."
        }
      },
      {
        question: {
          en: "Which advanced seismic source characterization method uses spectral analysis to determine earthquake stress drop and corner frequency?",
          es: "¿Qué método avanzado de caracterización de fuente sísmica utiliza análisis espectral para determinar caída de estrés de terremoto y frecuencia de esquina?",
          de: "Welche fortgeschrittene seismische Quellencharakterisierungsmethode nutzt Spektralanalyse zur Bestimmung von Erdbeben-Spannungsabfall und Eckfrequenz?",
          nl: "Welke geavanceerde seismische bron karakteriseringsmethode gebruikt spectrale analyse om aardbeving spanningsval en hoekfrequentie te bepalen?"
        },
        answers: [
          { en: "Brune source model spectral fitting", es: "Ajuste espectral del modelo de fuente de Brune", de: "Brune-Quellenmodell spektrale Anpassung", nl: "Brune bronmodel spectrale fitting" },
          { en: "Empirical Green's function", es: "Función de Green empírica", de: "Empirische Green-Funktion", nl: "Empirische Green-functie" },
          { en: "Coda wave analysis", es: "Análisis de ondas coda", de: "Coda-Wellenanalyse", nl: "Coda golf analyse" },
          { en: "Moment tensor inversion", es: "Inversión del tensor momento", de: "Moment-Tensor-Inversion", nl: "Moment tensor inversie" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Brune source model spectral fitting uses displacement spectra to estimate stress drop from corner frequency and seismic moment, following ω² source scaling.",
          es: "El ajuste espectral del modelo de fuente de Brune utiliza espectros de desplazamiento para estimar caída de estrés de frecuencia de esquina y momento sísmico, siguiendo escalamiento de fuente ω².",
          de: "Brune-Quellenmodell spektrale Anpassung nutzt Verschiebungsspektren zur Schätzung des Spannungsabfalls aus Eckfrequenz und seismischem Moment, nach ω²-Quellenskalierung.",
          nl: "Brune bronmodel spectrale fitting gebruikt verplaatsingsspectrum om spanningsval te schatten uit hoekfrequentie en seismisch moment, volgens ω² bron schaling."
        }
      },
      {
        question: {
          en: "What sophisticated ground motion simulation technique couples near-field kinematic rupture models with far-field Green's functions?",
          es: "¿Qué técnica sofisticada de simulación de movimiento del suelo acopla modelos de ruptura cinemática de campo cercano con funciones de Green de campo lejano?",
          de: "Welche raffinierte Bodenbewegungssimulationstechnik koppelt Nahfeld-kinematische Rissmodelle mit Fernfeld-Green-Funktionen?",
          nl: "Welke geavanceerde grondbeweging simulatietechniek koppelt nabijveld kinematische breukmodellen met verveld Green-functies?"
        },
        answers: [
          { en: "Hybrid broadband simulation", es: "Simulación híbrida de banda ancha", de: "Hybride Breitbandsimulation", nl: "Hybride breedband simulatie" },
          { en: "Finite difference modeling", es: "Modelado de diferencias finitas", de: "Finite-Differenzen-Modellierung", nl: "Eindige verschil modellering" },
          { en: "Spectral element methods", es: "Métodos de elementos espectrales", de: "Spektralelement-Methoden", nl: "Spectrale element methoden" },
          { en: "Boundary element techniques", es: "Técnicas de elementos de frontera", de: "Randelement-Techniken", nl: "Grenzelement technieken" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Hybrid broadband simulation combines deterministic low-frequency and stochastic high-frequency components to generate realistic ground motions across the full frequency range.",
          es: "La simulación híbrida de banda ancha combina componentes determinísticos de baja frecuencia y estocásticos de alta frecuencia para generar movimientos terrestres realistas a través del rango completo de frecuencia.",
          de: "Hybride Breitbandsimulation kombiniert deterministische niederfrequente und stochastische hochfrequente Komponenten zur Erzeugung realistischer Bodenbewegungen über den gesamten Frequenzbereich.",
          nl: "Hybride breedband simulatie combineert deterministische lage-frequentie en stochastische hoge-frequentie componenten om realistische grondbewegingen over het volledige frequentiebereik te genereren."
        }
      },
      {
        question: {
          en: "Which probabilistic approach quantifies epistemic uncertainties in seismic hazard assessment through logic tree formulations?",
          es: "¿Qué enfoque probabilístico cuantifica incertidumbres epistémicas en evaluación de peligro sísmico a través de formulaciones de árbol lógico?",
          de: "Welcher probabilistische Ansatz quantifiziert epistemische Unsicherheiten in seismischer Gefährdungsbeurteilung durch Logikbaum-Formulierungen?",
          nl: "Welke probabilistische benadering kwantificeert epistemische onzekerheden in seismische gevaarassessment door logische boom formulaties?"
        },
        answers: [
          { en: "Seismic Hazard Logic Trees", es: "Árboles Lógicos de Peligro Sísmico", de: "Seismische Gefährdungs-Logikbäume", nl: "Seismische Gevaar Logica Bomen" },
          { en: "Monte Carlo sampling", es: "Muestreo Monte Carlo", de: "Monte-Carlo-Stichprobenverfahren", nl: "Monte Carlo sampling" },
          { en: "Bayesian model averaging", es: "Promedio de modelo bayesiano", de: "Bayesscher Modelldurchschnitt", nl: "Bayesiaans model middeling" },
          { en: "Bootstrap resampling", es: "Remuestreo bootstrap", de: "Bootstrap-Resampling", nl: "Bootstrap hersampling" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Logic trees systematically explore alternative models and parameter values, weighting different branches to capture epistemic uncertainty in hazard calculations.",
          es: "Los árboles lógicos exploran sistemáticamente modelos alternativos y valores de parámetros, ponderando diferentes ramas para capturar incertidumbre epistémica en cálculos de peligro.",
          de: "Logikbäume erforschen systematisch alternative Modelle und Parameterwerte, gewichten verschiedene Äste zur Erfassung epistemischer Unsicherheit in Gefährdungsberechnungen.",
          nl: "Logica bomen verkennen systematisch alternatieve modellen en parameterwaarden, wegen verschillende takken om epistemische onzekerheid in gevaarberekeningen te vangen."
        }
      },
      {
        question: {
          en: "What state-of-the-art technique uses machine learning ensembles to improve real-time magnitude estimation accuracy?",
          es: "¿Qué técnica de vanguardia utiliza ensambles de aprendizaje automático para mejorar precisión de estimación de magnitud en tiempo real?",
          de: "Welche hochmoderne Technik nutzt maschinelle Lern-Ensembles zur Verbesserung der Echtzeit-Magnitudenschätzungsgenauigkeit?",
          nl: "Welke geavanceerde techniek gebruikt machine learning ensembles om real-time magnitude schattingsnauwkeurigheid te verbeteren?"
        },
        answers: [
          { en: "Gradient boosting machines", es: "Máquinas de impulso de gradiente", de: "Gradient-Boosting-Maschinen", nl: "Gradiënt boosting machines" },
          { en: "Support vector regression", es: "Regresión de vectores de soporte", de: "Support-Vektor-Regression", nl: "Support vector regressie" },
          { en: "Linear regression", es: "Regresión lineal", de: "Lineare Regression", nl: "Lineaire regressie" },
          { en: "K-nearest neighbors", es: "K-vecinos más cercanos", de: "K-nächste Nachbarn", nl: "K-dichtstbijzijnde buren" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Gradient boosting machines combine multiple weak learners to create robust magnitude estimators, handling complex nonlinear relationships between seismic features and magnitude.",
          es: "Las máquinas de impulso de gradiente combinan múltiples aprendices débiles para crear estimadores de magnitud robustos, manejando relaciones no lineales complejas entre características sísmicas y magnitud.",
          de: "Gradient-Boosting-Maschinen kombinieren mehrere schwache Lernende zur Erstellung robuster Magnitudenschätzer, handhaben komplexe nichtlineare Beziehungen zwischen seismischen Merkmalen und Magnitude.",
          nl: "Gradiënt boosting machines combineren meerdere zwakke leerders om robuuste magnitude schattingsprogramma's te creëren, behandelen complexe non-lineaire relaties tussen seismische kenmerken en magnitude."
        }
      },
      {
        question: {
          en: "Which advanced technique uses seismic coupling coefficients to predict inter-seismic deformation patterns?",
          es: "¿Qué técnica avanzada utiliza coeficientes de acoplamiento sísmico para predecir patrones de deformación inter-sísmica?",
          de: "Welche fortgeschrittene Technik nutzt seismische Kopplungskoeffizienten zur Vorhersage inter-seismischer Verformungsmuster?",
          nl: "Welke geavanceerde techniek gebruikt seismische koppelingscoëfficiënten om inter-seismische vervormingspatronen te voorspellen?"
        },
        answers: [
          { en: "Bayesian fault coupling models", es: "Modelos de acoplamiento de falla bayesiano", de: "Bayessche Verwerfungskopp1ungsmodelle", nl: "Bayesiaanse breuk koppelingsmodellen" },
          { en: "Simple elastic models", es: "Modelos elásticos simples", de: "Einfache elastische Modelle", nl: "Eenvoudige elastische modellen" },
          { en: "Linear trend analysis", es: "Análisis de tendencia lineal", de: "Lineare Trendanalyse", nl: "Lineaire trend analyse" },
          { en: "Statistical averaging", es: "Promediado estadístico", de: "Statistische Mittelwertbildung", nl: "Statistische middeling" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Bayesian fault coupling models integrate geodetic observations with prior geological knowledge to estimate spatially-varying coupling coefficients, enabling prediction of inter-seismic deformation patterns and identification of locked fault segments with high earthquake potential.",
          es: "Los modelos de acoplamiento de falla bayesiano integran observaciones geodésicas con conocimiento geológico previo para estimar coeficientes de acoplamiento espacialmente variables, permitiendo predicción de patrones de deformación inter-sísmica e identificación de segmentos de falla bloqueados con alto potencial sísmico.",
          de: "Bayessche Verwerfungskopplungsmodelle integrieren geodätische Beobachtungen mit geologischem Vorwissen zur Schätzung räumlich variierender Kopplungskoeffizienten, ermöglichen Vorhersage inter-seismischer Verformungsmuster und Identifikation blockierter Verwerfungssegmente mit hohem Erdbebenpotential.",
          nl: "Bayesiaanse breuk koppelingsmodellen integreren geodetische observaties met voorafgaande geologische kennis om ruimtelijk variërende koppelingscoëfficiënten te schatten, wat voorspelling van inter-seismische vervormingspatronen en identificatie van geblokkeerde breuксegmenten met hoog aardbevingpotentieel mogelijk maakt."
        }
      },
      {
        question: {
          en: "What computational framework enables real-time finite-fault rupture modeling during earthquake sequences?",
          es: "¿Qué marco computacional permite modelado de ruptura de falla finita en tiempo real durante secuencias de terremotos?",
          de: "Welches Rechenframework ermöglicht Echtzeit-Finite-Verwerfung-Bruch-Modellierung während Erdbebensequenzen?",
          nl: "Welk computationeel raamwerk maakt real-time eindige-breuk breukmodellering mogelijk tijdens aardbevingsequenties?"
        },
        answers: [
          { en: "Adaptive mesh refinement inversion", es: "Inversión de refinamiento de malla adaptativa", de: "Adaptive Netzverfeinerungs-Inversion", nl: "Adaptieve mesh verfijning inversie" },
          { en: "Fixed grid solutions", es: "Soluciones de rejilla fija", de: "Feste Gitterlösungen", nl: "Vaste rooster oplossingen" },
          { en: "Point source approximations", es: "Aproximaciones de fuente puntual", de: "Punktquellen-Näherungen", nl: "Puntbron benaderingen" },
          { en: "Static moment tensors", es: "Tensores de momento estáticos", de: "Statische Momenttensoren", nl: "Statische moment tensoren" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Adaptive mesh refinement inversion dynamically adjusts spatial resolution during rupture evolution, focusing computational resources on areas of high slip gradients while maintaining efficiency for real-time finite-fault modeling of ongoing earthquakes.",
          es: "La inversión de refinamiento de malla adaptativa ajusta dinámicamente la resolución espacial durante la evolución de ruptura, enfocando recursos computacionales en áreas de altos gradientes de deslizamiento mientras mantiene eficiencia para modelado de falla finita en tiempo real de terremotos en curso.",
          de: "Adaptive Netzverfeinerungs-Inversion passt räumliche Auflösung während Bruchevolution dynamisch an, fokussiert Rechenressourcen auf Bereiche hoher Rutschgradienten während Effizienz für Echtzeit-Finite-Verwerfung-Modellierung laufender Erdbeben beibehalten wird.",
          nl: "Adaptieve mesh verfijning inversie past ruimtelijke resolutie dynamisch aan tijdens breukevolutie, richt computationele bronnen op gebieden van hoge slip gradiënten terwijl efficiëntie behouden blijft voor real-time eindige-breuk modellering van lopende aardbevingen."
        }
      },
      {
        question: {
          en: "Which seismic hazard methodology incorporates time-dependent seismic cycle variations?",
          es: "¿Qué metodología de peligro sísmico incorpora variaciones del ciclo sísmico dependientes del tiempo?",
          de: "Welche seismische Gefährdungsmethodik integriert zeitabhängige seismische Zyklusvariationen?",
          nl: "Welke seismische gevaarmethodologie incorporeert tijdsafhankelijke seismische cyclus variaties?"
        },
        answers: [
          { en: "Time-dependent probabilistic seismic hazard analysis", es: "Análisis probabilístico de peligro sísmico dependiente del tiempo", de: "Zeitabhängige probabilistische seismische Gefährdungsanalyse", nl: "Tijdsafhankelijke probabilistische seismische gevaaranalyse" },
          { en: "Static hazard maps", es: "Mapas de peligro estáticos", de: "Statische Gefährdungskarten", nl: "Statische gevaar kaarten" },
          { en: "Uniform recurrence models", es: "Modelos de recurrencia uniforme", de: "Gleichmäßige Wiederholungsmodelle", nl: "Uniforme herhalingsmodellen" },
          { en: "Constant rate assumptions", es: "Supuestos de tasa constante", de: "Konstante Raten-Annahmen", nl: "Constante ratio aannames" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Time-dependent probabilistic seismic hazard analysis accounts for the seismic cycle by incorporating time since last rupture, loading rates, and stress accumulation patterns to provide temporally-varying hazard estimates that reflect current earthquake probability.",
          es: "El análisis probabilístico de peligro sísmico dependiente del tiempo considera el ciclo sísmico incorporando tiempo desde la última ruptura, tasas de carga y patrones de acumulación de estrés para proporcionar estimaciones de peligro temporalmente variables que reflejan la probabilidad actual de terremoto.",
          de: "Zeitabhängige probabilistische seismische Gefährdungsanalyse berücksichtigt den seismischen Zyklus durch Integration der Zeit seit letztem Bruch, Ladungsraten und Stressakkumulationsmustern zur Bereitstellung zeitlich variierender Gefährdungsschätzungen, die aktuelle Erdbebenwahrscheinlichkeit widerspiegeln.",
          nl: "Tijdsafhankelijke probabilistische seismische gevaaranalyse houdt rekening met de seismische cyclus door tijd sinds laatste breuk, belastingsnelheden en spanning accumulatie patronen op te nemen om temporeel variërende gevaar schattingen te bieden die huidige aardbevingwaarschijnlijkheid weerspiegelen."
        }
      },
      {
        question: {
          en: "What advanced site response analysis method accounts for nonlinear soil behavior during strong shaking?",
          es: "¿Qué método avanzado de análisis de respuesta de sitio considera el comportamiento no lineal del suelo durante agitación fuerte?",
          de: "Welche fortgeschrittene Standortreaktions-Analysemethode berücksichtigt nichtlineares Bodenverhalten während starker Erschütterung?",
          nl: "Welke geavanceerde site respons analysemethode houdt rekening met niet-lineair grondgedrag tijdens sterke beving?"
        },
        answers: [
          { en: "Equivalent linear iteration with strain-compatible properties", es: "Iteración lineal equivalente con propiedades compatibles con deformación", de: "Äquivalente lineare Iteration mit dehnungskompatiblen Eigenschaften", nl: "Equivalente lineaire iteratie met rek-compatibele eigenschappen" },
          { en: "Simple linear elastic analysis", es: "Análisis elástico lineal simple", de: "Einfache linear-elastische Analyse", nl: "Eenvoudige lineair elastische analyse" },
          { en: "Constant soil properties", es: "Propiedades constantes del suelo", de: "Konstante Bodeneigenschaften", nl: "Constante grond eigenschappen" },
          { en: "Static amplification factors", es: "Factores de amplificación estáticos", de: "Statische Verstärkungsfaktoren", nl: "Statische versterkingsfactoren" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Equivalent linear iteration adjusts soil shear modulus and damping properties iteratively based on strain levels, providing strain-compatible dynamic properties that better capture nonlinear soil response during strong earthquake shaking.",
          es: "La iteración lineal equivalente ajusta iterativamente el módulo de cizalla del suelo y propiedades de amortiguamiento basado en niveles de deformación, proporcionando propiedades dinámicas compatibles con deformación que capturan mejor la respuesta no lineal del suelo durante agitación fuerte de terremoto.",
          de: "Äquivalente lineare Iteration passt Bodenschubmodul und Dämpfungseigenschaften iterativ basierend auf Dehnungsniveaus an, bietet dehnungskompatible dynamische Eigenschaften, die nichtlineare Bodenreaktion während starker Erdbebenerschütterung besser erfassen.",
          nl: "Equivalente lineaire iteratie past grond schuifmodulus en demping eigenschappen iteratief aan gebaseerd op rek niveaus, wat rek-compatibele dynamische eigenschappen biedt die niet-lineaire grond respons tijdens sterke aardbeving schudden beter vastleggen."
        }
      },
      {
        question: {
          en: "Which ground motion prediction model incorporates directivity effects for near-fault conditions?",
          es: "¿Qué modelo de predicción de movimiento del suelo incorpora efectos de directividad para condiciones cerca de falla?",
          de: "Welches Bodenbewegungsvorhersagemodell integriert Richtungseffekte für Nah-Verwerfungs-Bedingungen?",
          nl: "Welk grondbeweging voorspellingsmodel incorporeert directiviteitseffecten voor nabij-breuk omstandigheden?"
        },
        answers: [
          { en: "Directivity-enhanced attenuation relations", es: "Relaciones de atenuación mejoradas por directividad", de: "Richtungsverbesserte Dämpfungsbeziehungen", nl: "Directiviteit-verbeterde verzwakkingsrelaties" },
          { en: "Standard distance-only models", es: "Modelos estándar solo de distancia", de: "Standard-Nur-Distanz-Modelle", nl: "Standaard alleen-afstand modellen" },
          { en: "Magnitude scaling laws", es: "Leyes de escala de magnitud", de: "Magnitudenskalierungsgesetze", nl: "Magnitude schaal wetten" },
          { en: "Site classification factors", es: "Factores de clasificación de sitio", de: "Standortklassifizierungsfaktoren", nl: "Site classificatie factoren" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Directivity-enhanced attenuation relations modify standard ground motion equations to account for rupture directivity effects, including forward directivity amplification in the rupture propagation direction and pulse-like ground motions characteristic of near-fault environments.",
          es: "Las relaciones de atenuación mejoradas por directividad modifican ecuaciones estándar de movimiento del suelo para considerar efectos de directividad de ruptura, incluyendo amplificación de directividad hacia adelante en la dirección de propagación de ruptura y movimientos del suelo tipo pulso característicos de ambientes cerca de falla.",
          de: "Richtungsverbesserte Dämpfungsbeziehungen modifizieren Standard-Bodenbewegungsgleichungen zur Berücksichtigung von Bruchrichtungseffekten, einschließlich Vorwärts-Richtungsverstärkung in Bruchausbreitungsrichtung und pulsartige Bodenbewegungen charakteristisch für Nah-Verwerfungs-Umgebungen.",
          nl: "Directiviteit-verbeterde verzwakkingsrelaties modificeren standaard grondbeweging vergelijkingen om breuk directiviteitseffecten in rekening te brengen, inclusief voorwaartse directiviteit versterking in de breuk voortplantingsrichting en puls-achtige grondbewegingen karakteristiek voor nabij-breuk omgevingen."
        }
      },
      {
        question: {
          en: "What statistical framework quantifies ground motion variability for probabilistic hazard analysis?",
          es: "¿Qué marco estadístico cuantifica la variabilidad del movimiento del suelo para análisis probabilístico de peligro?",
          de: "Welches statistische Framework quantifiziert Bodenbewegungsvariabilität für probabilistische Gefährdungsanalyse?",
          nl: "Welk statistisch raamwerk kwantificeert grondbeweging variabiliteit voor probabilistische gevaaranalyse?"
        },
        answers: [
          { en: "Mixed-effects regression with between-event and within-event residuals", es: "Regresión de efectos mixtos con residuos entre eventos y dentro de eventos", de: "Gemischte-Effekte-Regression mit Zwischen-Ereignis- und Innerhalb-Ereignis-Residuen", nl: "Gemengde-effecten regressie met tussen-gebeurtenis en binnen-gebeurtenis residuen" },
          { en: "Simple linear regression", es: "Regresión lineal simple", de: "Einfache lineare Regression", nl: "Eenvoudige lineaire regressie" },
          { en: "Constant variance models", es: "Modelos de varianza constante", de: "Konstante Varianz-Modelle", nl: "Constante variantie modellen" },
          { en: "Normal distribution assumptions", es: "Supuestos de distribución normal", de: "Normalverteilungs-Annahmen", nl: "Normale verdeling aannames" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Mixed-effects regression separates ground motion variability into between-event variability (earthquake-to-earthquake differences) and within-event variability (site-to-site scatter for the same earthquake), enabling more accurate probabilistic hazard calculations and uncertainty quantification.",
          es: "La regresión de efectos mixtos separa variabilidad de movimiento del suelo en variabilidad entre eventos (diferencias de terremoto a terremoto) y variabilidad dentro de eventos (dispersión de sitio a sitio para el mismo terremoto), permitiendo cálculos de peligro probabilísticos más precisos y cuantificación de incertidumbre.",
          de: "Gemischte-Effekte-Regression trennt Bodenbewegungsvariabilität in Zwischen-Ereignis-Variabilität (Erdbeben-zu-Erdbeben-Unterschiede) und Innerhalb-Ereignis-Variabilität (Standort-zu-Standort-Streuung für dasselbe Erdbeben), ermöglicht genauere probabilistische Gefährdungsberechnungen und Unsicherheitsquantifizierung.",
          nl: "Gemengde-effecten regressie scheidt grondbeweging variabiliteit in tussen-gebeurtenis variabiliteit (aardbeving-naar-aardbeving verschillen) en binnen-gebeurtenis variabiliteit (site-naar-site spreiding voor dezelfde aardbeving), wat nauwkeurigere probabilistische gevaar berekeningen en onzekerheid kwantificatie mogelijk maakt."
        }
      },
      {
        question: {
          en: "Which advanced modeling technique captures basin-edge effects on seismic wave amplification?",
          es: "¿Qué técnica de modelado avanzada captura efectos de borde de cuenca en amplificación de ondas sísmicas?",
          de: "Welche fortgeschrittene Modellierungstechnik erfasst Beckenrand-Effekte auf seismische Wellenverstärkung?",
          nl: "Welke geavanceerde modelleringstechniek vangt bekken-rand effecten op seismische golf versterking?"
        },
        answers: [
          { en: "3D finite-difference wave propagation with complex basin geometry", es: "Propagación de ondas de diferencias finitas 3D con geometría compleja de cuenca", de: "3D-Finite-Differenzen-Wellenausbreitung mit komplexer Beckengeometrie", nl: "3D eindige-verschil golfvoortplanting met complexe bekken geometrie" },
          { en: "1D site response analysis", es: "Análisis de respuesta de sitio 1D", de: "1D-Standortreaktions-Analyse", nl: "1D site respons analyse" },
          { en: "Uniform half-space models", es: "Modelos de semi-espacio uniforme", de: "Einheitliche Halbraum-Modelle", nl: "Uniforme halve-ruimte modellen" },
          { en: "Simple amplification factors", es: "Factores de amplificación simples", de: "Einfache Verstärkungsfaktoren", nl: "Eenvoudige versterkingsfactoren" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "3D finite-difference modeling with detailed basin geometry captures complex wave interactions at basin edges, including focusing, defocusing, and surface wave generation that significantly affect ground motion amplification patterns in sedimentary basins.",
          es: "El modelado de diferencias finitas 3D con geometría detallada de cuenca captura interacciones complejas de ondas en bordes de cuenca, incluyendo focalización, desfocalización y generación de ondas superficiales que afectan significativamente patrones de amplificación de movimiento del suelo en cuencas sedimentarias.",
          de: "3D-Finite-Differenzen-Modellierung mit detaillierter Beckengeometrie erfasst komplexe Wellenwechselwirkungen an Beckenrändern, einschließlich Fokussierung, Defokussierung und Oberflächenwellenerzeugung, die Bodenbewegungsverstärkungsmuster in Sedimentbecken erheblich beeinflussen.",
          nl: "3D eindige-verschil modellering met gedetailleerde bekken geometrie vangt complexe golf interacties bij bekken randen, inclusief focussering, defocussering en oppervlaktegolf generatie die grondbeweging versterkingspatronen in sedimentaire bekkens significant beïnvloeden."
        }
      },
      {
        question: {
          en: "What methodology enables incorporation of paleoseismic data into modern hazard assessments?",
          es: "¿Qué metodología permite incorporación de datos paleosísmicos en evaluaciones modernas de peligro?",
          de: "Welche Methodik ermöglicht Integration paläoseismischer Daten in moderne Gefährdungsbeurteilungen?",
          nl: "Welke methodologie maakt incorporatie van paleoseismische data in moderne gevaar assessments mogelijk?"
        },
        answers: [
          { en: "Bayesian updating with geological priors", es: "Actualización bayesiana con prioris geológicos", de: "Bayessche Aktualisierung mit geologischen Priors", nl: "Bayesiaanse updating met geologische priors" },
          { en: "Simple data averaging", es: "Promediado simple de datos", de: "Einfache Datenmittelung", nl: "Eenvoudige data middeling" },
          { en: "Historical catalog extension", es: "Extensión de catálogo histórico", de: "Historische Katalog-Erweiterung", nl: "Historische catalogus uitbreiding" },
          { en: "Linear trend extrapolation", es: "Extrapolación de tendencia lineal", de: "Lineare Trend-Extrapolation", nl: "Lineaire trend extrapolatie" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Bayesian updating integrates paleoseismic evidence with instrumental and historical data using geological constraints as prior information, enabling longer-term hazard estimates that incorporate millennia of earthquake behavior patterns.",
          es: "La actualización bayesiana integra evidencia paleosísmica con datos instrumentales e históricos usando restricciones geológicas como información previa, permitiendo estimaciones de peligro a largo plazo que incorporan milenios de patrones de comportamiento de terremotos.",
          de: "Bayessche Aktualisierung integriert paläoseismische Evidenz mit instrumentellen und historischen Daten unter Verwendung geologischer Beschränkungen als Prior-Information, ermöglicht längerfristige Gefährdungsschätzungen, die Jahrtausende von Erdbebenverhaltenmustern einbeziehen.",
          nl: "Bayesiaanse updating integreert paleoseismisch bewijs met instrumentele en historische data met geologische beperkingen als voorkennis, wat langere-termijn gevaar schattingen mogelijk maakt die millennia van aardbevinggedragpatronen incorporeren."
        }
      },
      {
        question: {
          en: "Which computational approach optimizes seismic network design for ground motion prediction?",
          es: "¿Qué enfoque computacional optimiza el diseño de redes sísmicas para predicción de movimiento del suelo?",
          de: "Welcher Rechenansatz optimiert seismisches Netzwerkdesign für Bodenbewegungsvorhersage?",
          nl: "Welke computationele benadering optimaliseert seismisch netwerk ontwerp voor grondbeweging voorspelling?"
        },
        answers: [
          { en: "Information-theoretic sensor placement optimization", es: "Optimización de colocación de sensores teórica de información", de: "Informationstheoretische Sensor-Platzierungs-Optimierung", nl: "Informatie-theoretische sensor plaatsing optimalisatie" },
          { en: "Random station distribution", es: "Distribución aleatoria de estaciones", de: "Zufällige Stationsverteilung", nl: "Willekeurige station distributie" },
          { en: "Uniform grid spacing", es: "Espaciado uniforme de rejilla", de: "Gleichmäßiger Gitterabstand", nl: "Uniforme rooster afstand" },
          { en: "Population-based placement", es: "Colocación basada en población", de: "Bevölkerungsbasierte Platzierung", nl: "Populatie-gebaseerde plaatsing" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Information-theoretic optimization maximizes expected information gain from seismic observations by optimally placing sensors to reduce uncertainty in ground motion predictions, considering factors like network coverage, site conditions, and expected earthquake sources.",
          es: "La optimización teórica de información maximiza ganancia de información esperada de observaciones sísmicas colocando óptimamente sensores para reducir incertidumbre en predicciones de movimiento del suelo, considerando factores como cobertura de red, condiciones de sitio y fuentes sísmicas esperadas.",
          de: "Informationstheoretische Optimierung maximiert erwarteten Informationsgewinn aus seismischen Beobachtungen durch optimale Sensor-Platzierung zur Reduzierung von Unsicherheit in Bodenbewegungsvorhersagen, berücksichtigt Faktoren wie Netzwerkabdeckung, Standortbedingungen und erwartete Erdbebenquellen.",
          nl: "Informatie-theoretische optimalisatie maximaliseert verwachte informatie winst van seismische observaties door optimaal sensoren te plaatsen om onzekerheid in grondbeweging voorspellingen te reduceren, overweegt factoren zoals netwerk dekking, site omstandigheden en verwachte aardbevingbronnen."
        }
      },
      {
        question: {
          en: "What advanced technique characterizes frequency-dependent site amplification using microseismic noise?",
          es: "¿Qué técnica avanzada caracteriza amplificación de sitio dependiente de frecuencia usando ruido microsísmico?",
          de: "Welche fortgeschrittene Technik charakterisiert frequenzabhängige Standortverstärkung mit mikroseismischem Rauschen?",
          nl: "Welke geavanceerde techniek karakteriseert frequentie-afhankelijke site versterking met microseismische ruis?"
        },
        answers: [
          { en: "Horizontal-to-vertical spectral ratio (HVSR) analysis", es: "Análisis de relación espectral horizontal-a-vertical (HVSR)", de: "Horizontal-zu-vertikal spektrales Verhältnis (HVSR) Analyse", nl: "Horizontaal-naar-verticaal spectrale verhouding (HVSR) analyse" },
          { en: "Simple amplitude measurements", es: "Mediciones simples de amplitud", de: "Einfache Amplitudenmessungen", nl: "Eenvoudige amplitude metingen" },
          { en: "Single-frequency analysis", es: "Análisis de frecuencia única", de: "Einzelfrequenz-Analyse", nl: "Enkele-frequentie analyse" },
          { en: "Time-domain processing", es: "Procesamiento en dominio de tiempo", de: "Zeitbereichsverarbeitung", nl: "Tijddomein verwerking" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "HVSR analysis computes the ratio of horizontal to vertical components of ambient seismic noise across all frequencies, providing frequency-dependent site amplification characteristics without requiring earthquake recordings, enabling site characterization anywhere.",
          es: "El análisis HVSR calcula la relación de componentes horizontales a verticales de ruido sísmico ambiental a través de todas las frecuencias, proporcionando características de amplificación de sitio dependientes de frecuencia sin requerir registros de terremotos, permitiendo caracterización de sitio en cualquier lugar.",
          de: "HVSR-Analyse berechnet das Verhältnis horizontaler zu vertikalen Komponenten des Umgebungs-seismischen Rauschens über alle Frequenzen, bietet frequenzabhängige Standortverstärkungscharakteristika ohne Erdbebenaufzeichnungen zu benötigen, ermöglicht Standortcharakterisierung überall.",
          nl: "HVSR analyse berekent de verhouding van horizontale tot verticale componenten van omgeving seismische ruis over alle frequenties, wat frequentie-afhankelijke site versterking karakteristieken biedt zonder aardbevingopnames nodig te hebben, wat site karakterisering overal mogelijk maakt."
        }
      },
      {
        question: {
          en: "Which stochastic modeling approach captures the aleatory variability in earthquake ground motions?",
          es: "¿Qué enfoque de modelado estocástico captura la variabilidad aleatoria en movimientos del suelo de terremotos?",
          de: "Welcher stochastische Modellierungsansatz erfasst die aleatorische Variabilität in Erdbeben-Bodenbewegungen?",
          nl: "Welke stochastische modelleringsbenadering vangt de aleatorische variabiliteit in aardbeving grondbewegingen?"
        },
        answers: [
          { en: "Stochastic finite-fault ground motion simulation", es: "Simulación estocástica de movimiento del suelo de falla finita", de: "Stochastische Finite-Verwerfung-Bodenbewegungssimulation", nl: "Stochastische eindige-breuk grondbeweging simulatie" },
          { en: "Deterministic wave propagation", es: "Propagación de ondas determinística", de: "Deterministische Wellenausbreitung", nl: "Deterministische golfvoortplanting" },
          { en: "Simple scaling relations", es: "Relaciones de escalado simples", de: "Einfache Skalierungsbeziehungen", nl: "Eenvoudige schaal relaties" },
          { en: "Mean motion estimates", es: "Estimaciones de movimiento promedio", de: "Mittlere Bewegungsschätzungen", nl: "Gemiddelde beweging schattingen" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Stochastic finite-fault simulation generates ensembles of synthetic ground motions by randomly varying rupture parameters like slip distribution, rise time, and rupture velocity, capturing the natural variability observed in earthquake recordings.",
          es: "La simulación estocástica de falla finita genera conjuntos de movimientos del suelo sintéticos variando aleatoriamente parámetros de ruptura como distribución de deslizamiento, tiempo de ascenso y velocidad de ruptura, capturando la variabilidad natural observada en registros de terremotos.",
          de: "Stochastische Finite-Verwerfung-Simulation erzeugt Ensembles synthetischer Bodenbewegungen durch zufällige Variation von Bruchparametern wie Rutschverteilung, Anstiegszeit und Bruchgeschwindigkeit, erfasst natürliche Variabilität in Erdbebenaufzeichnungen beobachtet.",
          nl: "Stochastische eindige-breuk simulatie genereert ensembles van synthetische grondbewegingen door willekeurig breuk parameters te variëren zoals slip distributie, stijgtijd en breuk snelheid, wat de natuurlijke variabiliteit vastlegt geobserveerd in aardbevingopnames."
        }
      },
      {
        question: {
          en: "What advanced source characterization method uses spectral decomposition to determine earthquake stress parameters?",
          es: "¿Qué método avanzado de caracterización de fuente utiliza descomposición espectral para determinar parámetros de estrés de terremoto?",
          de: "Welche fortgeschrittene Quellencharakterisierungsmethode nutzt spektrale Zerlegung zur Bestimmung von Erdbeben-Stressparametern?",
          nl: "Welke geavanceerde bron karakteriseringsmethode gebruikt spectrale decompositie om aardbevings spanning parameters te bepalen?"
        },
        answers: [
          { en: "Multi-taper spectral analysis with confidence intervals", es: "Análisis espectral multi-taper con intervalos de confianza", de: "Multi-Taper-Spektralanalyse mit Konfidenzintervallen", nl: "Multi-taper spectrale analyse met betrouwbaarheidsintervallen" },
          { en: "Simple Fourier transforms", es: "Transformadas de Fourier simples", de: "Einfache Fourier-Transformationen", nl: "Eenvoudige Fourier transformaties" },
          { en: "Peak amplitude measurements", es: "Mediciones de amplitud pico", de: "Spitzenamplituden-Messungen", nl: "Piek amplitude metingen" },
          { en: "Time-domain analysis only", es: "Solo análisis en dominio de tiempo", de: "Nur Zeitbereichsanalyse", nl: "Alleen tijddomein analyse" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Multi-taper spectral analysis reduces spectral leakage and provides robust confidence intervals for spectral estimates, enabling accurate determination of corner frequency, stress drop, and other source parameters from earthquake spectra.",
          es: "El análisis espectral multi-taper reduce fuga espectral y proporciona intervalos de confianza robustos para estimaciones espectrales, permitiendo determinación precisa de frecuencia de esquina, caída de estrés y otros parámetros de fuente de espectros de terremotos.",
          de: "Multi-Taper-Spektralanalyse reduziert spektrales Leakage und bietet robuste Konfidenzintervalle für spektrale Schätzungen, ermöglicht genaue Bestimmung von Eckfrequenz, Stressabfall und anderen Quellenparametern aus Erdbebenspektren.",
          nl: "Multi-taper spectrale analyse reduceert spectrale lekkage en biedt robuuste betrouwbaarheidsintervallen voor spectrale schattingen, wat nauwkeurige bepaling van hoekfrequentie, spanning afname en andere bron parameters van aardbevingspectrum mogelijk maakt."
        }
      },
      {
        question: {
          en: "Which machine learning architecture optimizes real-time seismic phase association in dense networks?",
          es: "¿Qué arquitectura de aprendizaje automático optimiza asociación de fases sísmicas en tiempo real en redes densas?",
          de: "Welche maschinelle Lernarchitektur optimiert Echtzeit-seismische Phasenzuordnung in dichten Netzwerken?",
          nl: "Welke machine learning architectuur optimaliseert real-time seismische fase associatie in dichte netwerken?"
        },
        answers: [
          { en: "Graph neural networks for spatiotemporal phase linking", es: "Redes neuronales de grafos para vinculación de fases espaciotemporales", de: "Graph-Neuronale-Netzwerke für raum-zeitliche Phasenverknüpfung", nl: "Graph neurale netwerken voor ruimtelijk-temporele fase koppeling" },
          { en: "Simple distance thresholding", es: "Umbralización simple de distancia", de: "Einfache Distanz-Schwellwertbildung", nl: "Eenvoudige afstand drempeling" },
          { en: "Manual analyst review", es: "Revisión manual de analista", de: "Manuelle Analystenbewertung", nl: "Handmatige analist beoordeling" },
          { en: "Template matching only", es: "Solo coincidencia de plantillas", de: "Nur Template-Matching", nl: "Alleen sjabloon matching" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Graph neural networks model seismic networks as graphs where stations are nodes and phase arrivals are edges, enabling sophisticated spatiotemporal reasoning for accurate phase association in complex multi-event scenarios common in dense monitoring networks.",
          es: "Las redes neuronales de grafos modelan redes sísmicas como grafos donde estaciones son nodos y llegadas de fases son aristas, permitiendo razonamiento espaciotemporal sofisticado para asociación precisa de fases en escenarios complejos multi-evento comunes en redes de monitoreo densas.",
          de: "Graph-Neuronale-Netzwerke modellieren seismische Netzwerke als Graphen, wo Stationen Knoten und Phasenankunfte Kanten sind, ermöglichen raffinierte raum-zeitliche Schlussfolgerung für genaue Phasenzuordnung in komplexen Multi-Event-Szenarien üblich in dichten Überwachungsnetzwerken.",
          nl: "Graph neurale netwerken modelleren seismische netwerken als grafen waar stations knopen zijn en fase aankomsten randen zijn, wat geavanceerde ruimtelijk-temporele redenering mogelijk maakt voor nauwkeurige fase associatie in complexe multi-gebeurtenis scenario's gebruikelijk in dichte monitoring netwerken."
        }
      },
      {
        question: {
          en: "What computational framework enables ensemble-based uncertainty quantification in seismic hazard analysis?",
          es: "¿Qué marco computacional permite cuantificación de incertidumbre basada en conjuntos en análisis de peligro sísmico?",
          de: "Welches Rechenframework ermöglicht ensemble-basierte Unsicherheitsquantifizierung in seismischer Gefährdungsanalyse?",
          nl: "Welk computationeel raamwerk maakt ensemble-gebaseerde onzekerheid kwantificatie mogelijk in seismische gevaaranalyse?"
        },
        answers: [
          { en: "Monte Carlo simulation with correlated parameter sampling", es: "Simulación Monte Carlo con muestreo de parámetros correlacionados", de: "Monte-Carlo-Simulation mit korrelierter Parameter-Stichprobe", nl: "Monte Carlo simulatie met gecorreleerde parameter sampling" },
          { en: "Single deterministic calculation", es: "Cálculo determinístico único", de: "Einzelne deterministische Berechnung", nl: "Enkele deterministische berekening" },
          { en: "Mean value approximations", es: "Aproximaciones de valor medio", de: "Mittelwert-Näherungen", nl: "Gemiddelde waarde benaderingen" },
          { en: "Point estimate methods", es: "Métodos de estimación puntual", de: "Punktschätzungsmethoden", nl: "Punt schatting methoden" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Monte Carlo simulation with correlated parameter sampling propagates uncertainties in seismic source, path, and site parameters through hazard calculations, accounting for parameter correlations to provide realistic uncertainty bounds on hazard estimates.",
          es: "La simulación Monte Carlo con muestreo de parámetros correlacionados propaga incertidumbres en parámetros de fuente, trayectoria y sitio sísmico a través de cálculos de peligro, considerando correlaciones de parámetros para proporcionar límites de incertidumbre realistas en estimaciones de peligro.",
          de: "Monte-Carlo-Simulation mit korrelierter Parameter-Stichprobe propagiert Unsicherheiten in seismischen Quell-, Pfad- und Standortparametern durch Gefährdungsberechnungen, berücksichtigt Parameterkorrelationen zur Bereitstellung realistischer Unsicherheitsgrenzen für Gefährdungsschätzungen.",
          nl: "Monte Carlo simulatie met gecorreleerde parameter sampling propageert onzekerheden in seismische bron, pad, en site parameters door gevaar berekeningen, houdt rekening met parameter correlaties om realistische onzekerheid grenzen op gevaar schattingen te bieden."
        }
      },
      {
        question: {
          en: "Which advanced visualization technique enables exploration of high-dimensional seismic hazard parameter spaces?",
          es: "¿Qué técnica de visualización avanzada permite exploración de espacios de parámetros de peligro sísmico de alta dimensión?",
          de: "Welche fortgeschrittene Visualisierungstechnik ermöglicht Erkundung hochdimensionaler seismischer Gefährdungsparameterräume?",
          nl: "Welke geavanceerde visualisatie techniek maakt verkenning van hoge-dimensionale seismische gevaar parameter ruimten mogelijk?"
        },
        answers: [
          { en: "Interactive parallel coordinates with brushing and linking", es: "Coordenadas paralelas interactivas con cepillado y vinculación", de: "Interaktive parallele Koordinaten mit Brushing und Linking", nl: "Interactieve parallelle coördinaten met borsteling en koppeling" },
          { en: "Simple 2D scatter plots", es: "Gráficos de dispersión 2D simples", de: "Einfache 2D-Streudiagramme", nl: "Eenvoudige 2D spreidingsgrafieken" },
          { en: "Static bar charts", es: "Gráficos de barras estáticos", de: "Statische Balkendiagramme", nl: "Statische staafgrafieken" },
          { en: "Single parameter histograms", es: "Histogramas de parámetro único", de: "Einzelparameter-Histogramme", nl: "Enkele parameter histogrammen" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Interactive parallel coordinates visualization allows simultaneous display and exploration of multiple seismic hazard parameters, with brushing and linking capabilities enabling identification of parameter correlations and sensitivity analysis across the full parameter space.",
          es: "La visualización de coordenadas paralelas interactivas permite visualización y exploración simultánea de múltiples parámetros de peligro sísmico, con capacidades de cepillado y vinculación que permiten identificación de correlaciones de parámetros y análisis de sensibilidad a través del espacio completo de parámetros.",
          de: "Interaktive parallele Koordinaten-Visualisierung ermöglicht simultane Anzeige und Erkundung multipler seismischer Gefährdungsparameter, mit Brushing- und Linking-Fähigkeiten zur Identifikation von Parameterkorrelationen und Sensitivitätsanalyse über den gesamten Parameterraum.",
          nl: "Interactieve parallelle coördinaten visualisatie maakt simultane weergave en verkenning van meerdere seismische gevaar parameters mogelijk, met borsteling en koppeling mogelijkheden die identificatie van parameter correlaties en gevoeligheidsanalyse over de volledige parameter ruimte mogelijk maken."
        }
      },
      {
        question: {
          en: "What probabilistic framework integrates multi-physics earthquake simulation results into hazard assessment?",
          es: "¿Qué marco probabilístico integra resultados de simulación multi-física de terremotos en evaluación de peligro?",
          de: "Welches probabilistische Framework integriert Multi-Physik-Erdbebensimulationsergebnisse in Gefährdungsbeurteilung?",
          nl: "Welk probabilistisch raamwerk integreert multi-fysica aardbeving simulatie resultaten in gevaar assessment?"
        },
        answers: [
          { en: "Gaussian process surrogate modeling with Bayesian calibration", es: "Modelado sustituto de proceso gaussiano con calibración bayesiana", de: "Gaußscher Prozess-Ersatzmodellierung mit bayesscher Kalibrierung", nl: "Gaussisch proces vervangingsmodellering met Bayesiaanse kalibratie" },
          { en: "Simple result averaging", es: "Promediado simple de resultados", de: "Einfache Ergebnismittelung", nl: "Eenvoudige resultaat middeling" },
          { en: "Linear interpolation methods", es: "Métodos de interpolación lineal", de: "Lineare Interpolationsmethoden", nl: "Lineaire interpolatie methoden" },
          { en: "Best-case scenario selection", es: "Selección de escenario de mejor caso", de: "Best-Case-Szenario-Auswahl", nl: "Beste-geval scenario selectie" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Gaussian process surrogate modeling creates computationally efficient approximations of expensive multi-physics simulations, while Bayesian calibration incorporates observational data to reduce model uncertainties and enable probabilistic hazard assessment with physics-based constraints.",
          es: "El modelado sustituto de proceso gaussiano crea aproximaciones computacionalmente eficientes de simulaciones multi-física costosas, mientras la calibración bayesiana incorpora datos observacionales para reducir incertidumbres del modelo y permitir evaluación probabilística de peligro con restricciones basadas en física.",
          de: "Gaußscher Prozess-Ersatzmodellierung erstellt recheneffiziente Näherungen teurer Multi-Physik-Simulationen, während bayessche Kalibrierung Beobachtungsdaten einbezieht zur Reduzierung von Modellunsicherheiten und ermöglicht probabilistische Gefährdungsbeurteilung mit physikbasierten Beschränkungen.",
          nl: "Gaussisch proces vervangingsmodellering creëert computationeel efficiënte benaderingen van dure multi-fysica simulaties, terwijl Bayesiaanse kalibratie observationele data incorporeert om model onzekerheden te reduceren en probabilistische gevaar assessment mogelijk te maken met fysica-gebaseerde beperkingen."
        }
      },
      {
        question: {
          en: "Which advanced statistical method accounts for spatial correlation in ground motion residuals?",
          es: "¿Qué método estadístico avanzado considera correlación espacial en residuos de movimiento del suelo?",
          de: "Welche fortgeschrittene statistische Methode berücksichtigt räumliche Korrelation in Bodenbewegungsresiduen?",
          nl: "Welke geavanceerde statistische methode houdt rekening met ruimtelijke correlatie in grondbeweging residuen?"
        },
        answers: [
          { en: "Spatial random fields with exponential correlation functions", es: "Campos aleatorios espaciales con funciones de correlación exponencial", de: "Räumliche Zufallsfelder mit exponentiellen Korrelationsfunkwionen", nl: "Ruimtelijke willekeurige velden met exponentiële correlatie functies" },
          { en: "Independent site effects", es: "Efectos de sitio independientes", de: "Unabhängige Standorteffekte", nl: "Onafhankelijke site effecten" },
          { en: "Uniform residual distribution", es: "Distribución uniforme de residuos", de: "Gleichmäßige Residuenverteilung", nl: "Uniforme residuen verdeling" },
          { en: "Point-wise error estimates", es: "Estimaciones de error puntuales", de: "Punktweise Fehlerschätzungen", nl: "Punt-gewijs fout schattingen" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Spatial random fields with exponential correlation functions model the spatial correlation structure of ground motion residuals, accounting for the fact that nearby sites tend to have similar prediction errors due to unmodeled regional effects and local site conditions.",
          es: "Los campos aleatorios espaciales con funciones de correlación exponencial modelan la estructura de correlación espacial de residuos de movimiento del suelo, considerando que sitios cercanos tienden a tener errores de predicción similares debido a efectos regionales no modelados y condiciones locales de sitio.",
          de: "Räumliche Zufallsfelder mit exponentiellen Korrelationsfunktionen modellieren die räumliche Korrelationsstruktur von Bodenbewegungsresiduen und berücksichtigen, dass nahegelegene Standorte ähnliche Vorhersagefehler aufgrund nicht modellierter regionaler Effekte und lokaler Standortbedingungen haben.",
          nl: "Ruimtelijke willekeurige velden met exponentiële correlatie functies modelleren de ruimtelijke correlatie structuur van grondbeweging residuen, rekening houdend met het feit dat nabije sites vergelijkbare voorspelling fouten hebben vanwege niet-gemodelleerde regionale effecten en lokale site omstandigheden."
        }
      },
      {
        question: {
          en: "What computational innovation enables real-time finite element modeling of earthquake rupture propagation?",
          es: "¿Qué innovación computacional permite modelado de elementos finitos en tiempo real de propagación de ruptura de terremoto?",
          de: "Welche Rechen-Innovation ermöglicht Echtzeit-Finite-Element-Modellierung von Erdbeben-Bruchausbreitung?",
          nl: "Welke computationele innovatie maakt real-time eindige element modellering van aardbeving breuk voortplanting mogelijk?"
        },
        answers: [
          { en: "GPU-accelerated adaptive time stepping with dynamic load balancing", es: "Pasos de tiempo adaptativos acelerados por GPU con balanceo dinámico de carga", de: "GPU-beschleunigte adaptive Zeitschritte mit dynamischer Lastbalancierung", nl: "GPU-versnelde adaptieve tijdstappen met dynamische lastverdeling" },
          { en: "Single-threaded CPU processing", es: "Procesamiento CPU de un solo hilo", de: "Einfädige CPU-Verarbeitung", nl: "Enkele-draad CPU verwerking" },
          { en: "Fixed time step integration", es: "Integración de paso de tiempo fijo", de: "Feste Zeitschritt-Integration", nl: "Vaste tijdstap integratie" },
          { en: "Simplified elastic models", es: "Modelos elásticos simplificados", de: "Vereinfachte elastische Modelle", nl: "Vereenvoudigde elastische modellen" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "GPU acceleration with adaptive time stepping automatically adjusts computational time steps based on rupture dynamics, while dynamic load balancing redistributes computational work across processors as the rupture front evolves, enabling real-time finite element simulation of complex earthquake processes.",
          es: "La aceleración GPU con pasos de tiempo adaptativos ajusta automáticamente pasos de tiempo computacionales basados en dinámicas de ruptura, mientras el balanceo dinámico de carga redistribuye trabajo computacional a través de procesadores mientras el frente de ruptura evoluciona, permitiendo simulación de elementos finitos en tiempo real de procesos complejos de terremotos.",
          de: "GPU-Beschleunigung mit adaptiven Zeitschritten passt automatisch Rechenzeitschritte basierend auf Bruchdynamik an, während dynamische Lastbalancierung Rechenarbeit über Prozessoren umverteilt, während sich die Bruchfront entwickelt, ermöglicht Echtzeit-Finite-Element-Simulation komplexer Erdbebenprozesse.",
          nl: "GPU versnelling met adaptieve tijdstappen past automatisch computationele tijdstappen aan gebaseerd op breuk dynamiek, terwijl dynamische lastverdeling computationeel werk herverdeelt over processoren terwijl het breukfront evolueert, wat real-time eindige element simulatie van complexe aardbevingprocessen mogelijk maakt."
        }
      },
      {
        question: {
          en: "Which frontier technique uses quantum sensors for ultra-sensitive detection of pre-seismic gravitational anomalies?",
          es: "¿Qué técnica fronteriza utiliza sensores cuánticos para detección ultra-sensible de anomalías gravitacionales pre-sísmicas?",
          de: "Welche Grenztechnik nutzt Quantensensoren für ultra-empfindliche Detektion prä-seismischer Gravitationsanomalien?",
          nl: "Welke grenstechniek gebruikt kwantumsensoren voor ultra-gevoelige detectie van pre-seismische gravitationele anomalieën?"
        },
        answers: [
          { en: "Cold atom interferometry gravimeters", es: "Gravímetros de interferometría de átomos fríos", de: "Kalte-Atom-Interferometrie-Gravimeter", nl: "Koude atoom interferometrie gravimeters" },
          { en: "Classical spring gravimeters", es: "Gravímetros de resorte clásicos", de: "Klassische Feder-Gravimeter", nl: "Klassieke veer gravimeters" },
          { en: "Pendulum-based instruments", es: "Instrumentos basados en péndulo", de: "Pendelbasierte Instrumente", nl: "Pendulum-gebaseerde instrumenten" },
          { en: "Mechanical accelerometers", es: "Acelerómetros mecánicos", de: "Mechanische Beschleunigungsmesser", nl: "Mechanische accelerometers" }
        ],
        correctAnswer: 0,
        explanation: {
          en: "Cold atom interferometry gravimeters exploit quantum interference of ultra-cold atoms to achieve unprecedented sensitivity in gravitational field measurements, potentially detecting minute crustal mass redistributions and stress changes that precede major earthquakes.",
          es: "Los gravímetros de interferometría de átomos fríos explotan interferencia cuántica de átomos ultra-fríos para lograr sensibilidad sin precedentes en mediciones de campo gravitacional, potencialmente detectando redistribuciones diminutas de masa cortical y cambios de estrés que preceden terremotos mayores.",
          de: "Kalte-Atom-Interferometrie-Gravimeter nutzen Quanteninterferenz ultra-kalter Atome zur beispiellosen Empfindlichkeit in Gravitationsfeld-Messungen, möglicherweise winzige krustale Massenumverteilungen und Stressänderungen detektierend, die großen Erdbeben vorausgehen.",
          nl: "Koude atoom interferometrie gravimeters benutten kwantum interferentie van ultra-koude atomen om ongekende gevoeligheid te bereiken in gravitatieveld metingen, mogelijk detecterend minutieuze crustale massa herverdelingen en spanning veranderingen die grote aardbevingen voorafgaan."
        }
      }
    ]
  };

  window.addLevel('mind-bender/seismology', level8);
})();
