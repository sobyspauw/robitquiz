(function() {
  const level2 = {
    name: {
      en: "Advanced Ocean Circulation & Dynamics",
      es: "Circulación y Dinámica Oceánica Avanzada",
      de: "Erweiterte Ozeanzirkulation & Dynamik",
      nl: "Geavanceerde Oceaancirculatie & Dynamiek"
    },
    questions: [
      {
        question: {
          en: "What theoretical framework describes the nonlinear interaction between baroclinic instability and mesoscale eddy generation in ocean circulation?",
          es: "¿Qué marco teórico describe la interacción no lineal entre inestabilidad baroclínica y generación de remolinos de mesoescala en circulación oceánica?",
          de: "Welcher theoretische Rahmen beschreibt die nichtlineare Wechselwirkung zwischen barokliner Instabilität und mesoskaliger Wirbelerzeugung in der Ozeanzirkulation?",
          nl: "Welk theoretisch raamwerk beschrijft de niet-lineaire interactie tussen baroclinische instabiliteit en mesoschalige werveling generatie in oceaancirculatie?"
        },
        options: [
          { en: "Phillips-Charney instability theory with finite amplitude dynamics", es: "Teoría de inestabilidad Phillips-Charney con dinámica de amplitud finita", de: "Phillips-Charney-Instabilitätstheorie mit endlicher Amplituden-Dynamik", nl: "Phillips-Charney instabiliteit theorie met eindige amplitude dynamiek" },
          { en: "Linear stability analysis", es: "Análisis de estabilidad lineal", de: "Lineare Stabilitätsanalyse", nl: "Lineaire stabiliteitsanalyse" },
          { en: "Quasi-geostrophic theory", es: "Teoría quasi-geostrófic", de: "Quasi-geostrophische Theorie", nl: "Quasi-geostrofische theorie" },
          { en: "Shallow water equations", es: "Ecuaciones de aguas someras", de: "Flachwassergleichungen", nl: "Ondiep water vergelijkingen" }
        ],
        correct: 0,
        explanation: {
          en: "Phillips-Charney instability theory with finite amplitude dynamics describes how baroclinic instability leads to nonlinear eddy generation when density gradients and shear combine to create unstable conditions that grow beyond linear limits.",
          es: "La teoría de inestabilidad Phillips-Charney con dinámica de amplitud finita describe cómo la inestabilidad baroclínica lleva a generación de remolinos no lineal cuando gradientes de densidad y cizalladura se combinan para crear condiciones inestables que crecen más allá de límites lineales.",
          de: "Die Phillips-Charney-Instabilitätstheorie mit endlicher Amplituden-Dynamik beschreibt, wie barokline Instabilität zu nichtlinearer Wirbelerzeugung führt, wenn Dichtegradienten und Scherung sich kombinieren, um instabile Bedingungen zu schaffen, die über lineare Grenzen hinaus wachsen.",
          nl: "Phillips-Charney instabiliteitstheorie met eindige amplitude dynamiek beschrijft hoe baroclinische instabiliteit leidt tot niet-lineaire werveling generatie wanneer dichtheidsgradiënten en schering combineren om instabiele omstandigheden te creëren die groeien voorbij lineaire grenzen."
        }
      },
      {
        question: {
          en: "Which advanced observational technique measures the three-dimensional structure of oceanic internal wave fields using acoustic tomography?",
          es: "¿Qué técnica observacional avanzada mide la estructura tridimensional de campos de ondas internas oceánicas usando tomografía acústica?",
          de: "Welche fortgeschrittene Beobachtungstechnik misst die dreidimensionale Struktur ozeanischer interner Wellenfelder mit akustischer Tomographie?",
          nl: "Welke geavanceerde observationele techniek meet de driedimensionale structuur van oceanische interne golfvelden met behulp van akoestische tomografie?"
        },
        options: [
          { en: "Acoustic Thermometry of Ocean Climate (ATOC)", es: "Termometría Acústica del Clima Oceánico (ATOC)", de: "Akustische Thermometrie des Ozeanklimas (ATOC)", nl: "Akoestische Thermometrie van Oceaan Klimaat (ATOC)" },
          { en: "Conductivity-Temperature-Depth profiling", es: "Perfilado de Conductividad-Temperatura-Profundidad", de: "Leitfähigkeit-Temperatur-Tiefe-Profilierung", nl: "Geleidbaarheid-Temperatuur-Diepte profilering" },
          { en: "Expendable bathythermograph", es: "Batitermógrafo desechable", de: "Einweg-Bathythermograph", nl: "Wegwerp bathythermograaf" },
          { en: "Argo float networks", es: "Redes de flotadores Argo", de: "Argo-Schwimmer-Netzwerke", nl: "Argo drijver netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "ATOC uses long-range acoustic transmissions to tomographically reconstruct three-dimensional temperature and internal wave structures across ocean basins, providing unique insights into internal wave propagation and energy dissipation.",
          es: "ATOC utiliza transmisiones acústicas de largo alcance para reconstruir tomográficamente estructuras tridimensionales de temperatura y ondas internas a través de cuencas oceánicas, proporcionando perspectivas únicas sobre propagación de ondas internas y disipación de energía.",
          de: "ATOC nutzt langreichweitige akustische Übertragungen zur tomographischen Rekonstruktion dreidimensionaler Temperatur- und internen Wellenstrukturen über Ozeanbecken hinweg und bietet einzigartige Einblicke in die interne Wellenausbreitung und Energiedissipation.",
          nl: "ATOC gebruikt lange-afstand akoestische transmissies om tomografisch driedimensionale temperatuur en interne golf structuren over oceaanbekkens te reconstrueren, wat unieke inzichten biedt in interne golfvoortplanting en energiedissipatie."
        }
      },
      {
        question: {
          en: "What computational method models the cascade of kinetic energy from large-scale ocean currents to microscale turbulence?",
          es: "¿Qué método computacional modela la cascada de energía cinética desde corrientes oceánicas de gran escala hasta turbulencia de microescala?",
          de: "Welche Berechnungsmethode modelliert die Kaskade kinetischer Energie von großskaligen Meeresströmungen zu mikroskaliger Turbulenz?",
          nl: "Welke computationele methode modelleert de cascade van kinetische energie van grootschalige oceaanstromingen naar microschalige turbulentie?"
        },
        options: [
          { en: "Spectral energy transfer analysis with nonlinear wave-wave interactions", es: "Análisis de transferencia de energía espectral con interacciones no lineales onda-onda", de: "Spektrale Energieübertragungsanalyse mit nichtlinearen Welle-Welle-Wechselwirkungen", nl: "Spectrale energieoverdracht analyse met niet-lineaire golf-golf interacties" },
          { en: "Linear regression modeling", es: "Modelado de regresión lineal", de: "Lineare Regressionsmodellierung", nl: "Lineaire regressie modellering" },
          { en: "Empirical orthogonal functions", es: "Funciones ortogonales empíricas", de: "Empirische orthogonale Funktionen", nl: "Empirische orthogonale functies" },
          { en: "Principal component analysis", es: "Análisis de componentes principales", de: "Hauptkomponentenanalyse", nl: "Hoofdcomponent analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Spectral energy transfer analysis quantifies how kinetic energy cascades through different wavenumber scales via nonlinear wave-wave interactions, following Kolmogorov-like energy cascade theories adapted for geophysical turbulence.",
          es: "El análisis de transferencia de energía espectral cuantifica cómo la energía cinética se transfiere a través de diferentes escalas de número de onda via interacciones no lineales onda-onda, siguiendo teorías de cascada de energía tipo Kolmogorov adaptadas para turbulencia geofísica.",
          de: "Die spektrale Energieübertragungsanalyse quantifiziert, wie kinetische Energie durch verschiedene Wellenzahl-Skalen über nichtlineare Welle-Welle-Wechselwirkungen kaskadiert, gemäß Kolmogorov-ähnlichen Energiekaskade-Theorien, die für geophysikalische Turbulenz angepasst wurden.",
          nl: "Spectrale energieoverdracht analyse kwantificeert hoe kinetische energie cascadeert door verschillende golfnummer schalen via niet-lineaire golf-golf interacties, volgens Kolmogorov-achtige energie cascade theorieën aangepast voor geofysische turbulentie."
        }
      },
      {
        question: {
          en: "Which phenomenon describes the nonlinear steepening and eventual breaking of internal waves in stratified ocean environments?",
          es: "¿Qué fenómeno describe el empinamiento no lineal y eventual ruptura de ondas internas en ambientes oceánicos estratificados?",
          de: "Welches Phänomen beschreibt die nichtlineare Versteilerung und eventuelle Brechung interner Wellen in geschichteten Ozeanumgebungen?",
          nl: "Welk fenomeen beschrijft de niet-lineaire versteiling en uiteindelijke breking van interne golven in gestratificeerde oceaanomgevingen?"
        },
        options: [
          { en: "Internal wave shoaling and hydraulic jumps", es: "Levantamiento de ondas internas y saltos hidráulicos", de: "Interne Wellenverflachung und hydraulische Sprünge", nl: "Interne golf shoaling en hydraulische sprongen" },
          { en: "Surface wave breaking", es: "Ruptura de ondas superficiales", de: "Oberflächenwellen-Brechung", nl: "Oppervlaktegolf breking" },
          { en: "Tidal bore formation", es: "Formación de mascaret", de: "Flutwellen-Bildung", nl: "Getijgolf vorming" },
          { en: "Ekman layer dynamics", es: "Dinámica de capa de Ekman", de: "Ekman-Schicht-Dynamik", nl: "Ekman laag dynamiek" }
        ],
        correct: 0,
        explanation: {
          en: "Internal wave shoaling occurs when internal waves propagate from deep water into shallower regions, causing nonlinear steepening due to amplitude-dependent phase speeds, ultimately leading to wave breaking and formation of hydraulic jumps.",
          es: "El levantamiento de ondas internas ocurre cuando las ondas internas se propagan desde aguas profundas hacia regiones más someras, causando empinamiento no lineal debido a velocidades de fase dependientes de amplitud, llevando finalmente a ruptura de ondas y formación de saltos hidráulicos.",
          de: "Interne Wellenverflachung tritt auf, wenn sich interne Wellen von tiefem Wasser in flachere Bereiche ausbreiten, was zu nichtlinearer Versteilerung aufgrund amplitudenabhängiger Phasengeschwindigkeiten führt und schließlich zu Wellenbrechung und Bildung hydraulischer Sprünge führt.",
          nl: "Interne golf shoaling treedt op wanneer interne golven zich verspreiden van diep water naar ondiepere gebieden, wat niet-lineaire versteiling veroorzaakt door amplitude-afhankelijke fasesnelheden, wat uiteindelijk leidt tot golfbreking en vorming van hydraulische sprongen."
        }
      },
      {
        question: {
          en: "What advanced analytical technique measures the isotopic composition of dissolved nitrate to trace ocean circulation pathways and biogeochemical processes?",
          es: "¿Qué técnica analítica avanzada mide la composición isotópica de nitrato disuelto para rastrear vías de circulación oceánica y procesos biogeoquímicos?",
          de: "Welche fortgeschrittene analytische Technik misst die Isotopenzusammensetzung gelösten Nitrats zur Verfolgung ozeanischer Zirkulationswege und biogeochemischer Prozesse?",
          nl: "Welke geavanceerde analytische techniek meet de isotopische samenstelling van opgelost nitraat om oceaan circulatieroutes en biogeochemische processen te traceren?"
        },
        options: [
          { en: "Dual isotope analysis of δ15N and δ18O in nitrate", es: "Análisis de isótopos duales de δ15N y δ18O en nitrato", de: "Duale Isotopenanalyse von δ15N und δ18O in Nitrat", nl: "Dubbele isotoop analyse van δ15N en δ18O in nitraat" },
          { en: "Atomic absorption spectroscopy", es: "Espectroscopía de absorción atómica", de: "Atomabsorptionsspektroskopie", nl: "Atomaire absorptie spectroscopie" },
          { en: "Ion chromatography", es: "Cromatografía iónica", de: "Ionenchromatographie", nl: "Ion chromatografie" },
          { en: "Colorimetric analysis", es: "Análisis colorimétrico", de: "Kolorimetrische Analyse", nl: "Colorimetrische analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Dual isotope analysis (δ15N-δ18O) of nitrate provides unique fingerprints of different nitrogen sources and transformation processes, allowing researchers to distinguish between atmospheric deposition, N2 fixation, nitrification, and denitrification in marine systems.",
          es: "El análisis de isótopos duales (δ15N-δ18O) de nitrato proporciona huellas únicas de diferentes fuentes de nitrógeno y procesos de transformación, permitiendo a los investigadores distinguir entre deposición atmosférica, fijación de N2, nitrificación y desnitrificación en sistemas marinos.",
          de: "Die duale Isotopenanalyse (δ15N-δ18O) von Nitrat bietet einzigartige Fingerabdrücke verschiedener Stickstoffquellen und Transformationsprozesse und ermöglicht es Forschern, zwischen atmosphärischer Deposition, N2-Fixierung, Nitrifikation und Denitrifikation in marinen Systemen zu unterscheiden.",
          nl: "Dubbele isotoop analyse (δ15N-δ18O) van nitraat biedt unieke vingerafdrukken van verschillende stikstofbronnen en transformatieprocessen, waardoor onderzoekers kunnen onderscheiden tussen atmosferische depositie, N2 fixatie, nitrificatie en denitrificatie in mariene systemen."
        }
      },
      {
        question: {
          en: "Which theoretical concept describes the formation of oceanic jets and their stability through potential vorticity conservation?",
          es: "¿Qué concepto teórico describe la formación de corrientes oceánicas y su estabilidad a través de conservación de vorticidad potencial?",
          de: "Welches theoretische Konzept beschreibt die Bildung ozeanischer Strömungen und ihre Stabilität durch potenzielle Wirbelerhaltung?",
          nl: "Welk theoretisch concept beschrijft de vorming van oceanische stralen en hun stabiliteit door potentiële werveling conservatie?"
        },
        options: [
          { en: "Rhines scale dynamics and jet formation theory", es: "Dinámica de escala de Rhines y teoría de formación de corrientes", de: "Rhines-Skalen-Dynamik und Strahlbildungstheorie", nl: "Rhines schaal dynamiek en straal vorming theorie" },
          { en: "Geostrophic turbulence", es: "Turbulencia geostrófic", de: "Geostrophische Turbulenz", nl: "Geostrofische turbulentie" },
          { en: "Ekman pumping", es: "Bombeo de Ekman", de: "Ekman-Pumpen", nl: "Ekman pompen" },
          { en: "Sverdrup circulation", es: "Circulación de Sverdrup", de: "Sverdrup-Zirkulation", nl: "Sverdrup circulatie" }
        ],
        correct: 0,
        explanation: {
          en: "The Rhines scale defines the transition from turbulent eddies to zonal jets when the β-effect (planetary vorticity gradient) becomes dominant. Jets form at scales larger than the Rhines scale through potential vorticity homogenization and nonlinear wave interactions.",
          es: "La escala de Rhines define la transición de remolinos turbulentos a corrientes zonales cuando el efecto β (gradiente de vorticidad planetaria) se vuelve dominante. Las corrientes se forman en escalas mayores que la escala de Rhines a través de homogeneización de vorticidad potencial e interacciones no lineales de ondas.",
          de: "Die Rhines-Skala definiert den Übergang von turbulenten Wirbeln zu zonalen Strömungen, wenn der β-Effekt (planetarer Vortizitätsgradient) dominant wird. Strömungen bilden sich bei Skalen größer als die Rhines-Skala durch Potentialvortizitäts-Homogenisierung und nichtlineare Wellenwechselwirkungen.",
          nl: "De Rhines schaal definieert de overgang van turbulente wervelingen naar zonale stralen wanneer het β-effect (planetaire vorticiteit gradiënt) dominant wordt. Stralen vormen zich op schalen groter dan de Rhines schaal door potentiële vorticiteit homogenisatie en niet-lineaire golf interacties."
        }
      },
      {
        question: {
          en: "What satellite altimetry technique measures sea surface height variability to infer mesoscale eddy kinetic energy and ocean circulation patterns?",
          es: "¿Qué técnica de altimetría satelital mide variabilidad de altura de superficie marina para inferir energía cinética de remolinos de mesoescala y patrones de circulación oceánica?",
          de: "Welche Satellitenaltimetrie-Technik misst Meeresoberflächenhöhen-Variabilität zur Ableitung mesoskaliger Wirbel-Kinetikenergie und ozeanischer Zirkulationsmuster?",
          nl: "Welke satelliet altimetrie techniek meet zeeopppervlakte hoogte variabiliteit om mesoschalige werveling kinetische energie en oceaan circulatiepatronen af te leiden?"
        },
        options: [
          { en: "Multi-satellite gridded altimetry with eddy kinetic energy calculations", es: "Altimetría satelital multi-satélite con cálculos de energía cinética de remolinos", de: "Multi-Satelliten-Gitter-Altimetrie mit Wirbel-Kinetikenergie-Berechnungen", nl: "Multi-satelliet geraster altimetrie met werveling kinetische energie berekeningen" },
          { en: "Single-pass radar interferometry", es: "Interferometría de radar de paso único", de: "Einpass-Radar-Interferometrie", nl: "Enkele doorgang radar interferometrie" },
          { en: "Lidar bathymetry", es: "Batimetría lidar", de: "Lidar-Bathymetrie", nl: "Lidar bathymetrie" },
          { en: "Synthetic aperture radar", es: "Radar de apertura sintética", de: "Synthetisches Apertur-Radar", nl: "Synthetische aperture radar" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-satellite gridded altimetry combines data from multiple satellites to create high-resolution maps of sea surface height anomalies, from which geostrophic velocities and eddy kinetic energy can be calculated to study mesoscale ocean dynamics.",
          es: "La altimetría satelital multi-satélite en cuadrícula combina datos de múltiples satélites para crear mapas de alta resolución de anomalías de altura de superficie marina, desde los cuales se pueden calcular velocidades geostróficas y energía cinética de remolinos para estudiar dinámica oceánica de mesoescala.",
          de: "Multi-Satelliten-Gitter-Altimetrie kombiniert Daten von mehreren Satelliten zur Erstellung hochauflösender Karten von Meeresoberflächenhöhen-Anomalien, aus denen geostrophische Geschwindigkeiten und Wirbel-Kinetikenergie berechnet werden können, um mesoskalige Ozeandynamik zu studieren.",
          nl: "Multi-satelliet geraster altimetrie combineert gegevens van meerdere satellieten om hoge-resolutie kaarten van zeeopppervlakte hoogte anomalieën te maken, waaruit geostrofische snelheden en werveling kinetische energie kunnen worden berekend om mesoschalige oceaan dynamiek te bestuderen."
        }
      },
      {
        question: {
          en: "Which computational approach models the interaction between wind stress curl and ocean circulation using coupled atmosphere-ocean dynamics?",
          es: "¿Qué enfoque computacional modela la interacción entre curvatura de estrés del viento y circulación oceánica usando dinámica acoplada atmósfera-océano?",
          de: "Welcher Rechenansatz modelliert die Wechselwirkung zwischen Windspannungs-Rotation und Ozeanzirkulation mit gekoppelter Atmosphären-Ozean-Dynamik?",
          nl: "Welke computationele benadering modelleert de interactie tussen windspanning krul en oceaancirculatie met behulp van gekoppelde atmosfeer-oceaan dynamiek?"
        },
        options: [
          { en: "Coupled general circulation models with momentum flux parameterization", es: "Modelos de circulación general acoplados con parametrización de flujo de momento", de: "Gekoppelte allgemeine Zirkulationsmodelle mit Impulsfluss-Parametrisierung", nl: "Gekoppelde algemene circulatie modellen met momentum flux parametrisatie" },
          { en: "Uncoupled ocean models", es: "Modelos oceánicos no acoplados", de: "Ungekoppelte Ozeanmodelle", nl: "Ongekoppelde oceaan modellen" },
          { en: "Atmospheric models only", es: "Solo modelos atmosféricos", de: "Nur atmosphärische Modelle", nl: "Alleen atmosferische modellen" },
          { en: "Statistical correlation analysis", es: "Análisis de correlación estadística", de: "Statistische Korrelationsanalyse", nl: "Statistische correlatie analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Coupled general circulation models with momentum flux parameterization capture the full feedback between atmospheric wind patterns and ocean circulation, allowing wind stress curl variations to drive Ekman pumping and modify ocean circulation, which in turn affects atmospheric patterns.",
          es: "Los modelos de circulación general acoplados con parametrización de flujo de momento capturan la retroalimentación completa entre patrones de viento atmosférico y circulación oceánica, permitiendo que variaciones de curvatura de estrés del viento impulsen bombeo de Ekman y modifiquen la circulación oceánica, lo que a su vez afecta patrones atmosféricos.",
          de: "Gekoppelte allgemeine Zirkulationsmodelle mit Impulsfluss-Parametrisierung erfassen die vollständige Rückkopplung zwischen atmosphärischen Windmustern und Ozeanzirkulation, wodurch Windspannungs-Rotationsvariationen Ekman-Pumpen antreiben und die Ozeanzirkulation modifizieren können, was wiederum atmosphärische Muster beeinflusst.",
          nl: "Gekoppelde algemene circulatie modellen met momentum flux parametrisatie vangen de volledige feedback tussen atmosferische windpatronen en oceaancirculatie, waardoor windspanning krul variaties Ekman pomping kunnen aandrijven en oceaancirculatie kunnen wijzigen, wat op zijn beurt atmosferische patronen beïnvloedt."
        }
      },
      {
        question: {
          en: "What oceanographic instrument measures the full three-dimensional current structure and shear in the upper ocean using acoustic Doppler technology?",
          es: "¿Qué instrumento oceanográfico mide la estructura tridimensional completa de corriente y cizalladura en el océano superior usando tecnología Doppler acústica?",
          de: "Welches ozeanographische Instrument misst die vollständige dreidimensionale Strömungsstruktur und Scherung im oberen Ozean mit akustischer Doppler-Technologie?",
          nl: "Welk oceanografisch instrument meet de volledige driedimensionale stromingstructuur en schuifspanning in de bovenste oceaan met behulp van akoestische Doppler technologie?"
        },
        options: [
          { en: "Vessel-mounted Acoustic Doppler Current Profiler (VMADCP)", es: "Perfilador de Corriente Doppler Acústico montado en embarcación (VMADCP)", de: "Schiff-montierter Akustischer Doppler-Strömungsprofilmesser (VMADCP)", nl: "Schip-gemonteerde Akoestische Doppler Stroming Profiler (VMADCP)" },
          { en: "Current meter array", es: "Matriz de medidores de corriente", de: "Strömungsmesser-Array", nl: "Stroommeter array" },
          { en: "Expendable current profiler", es: "Perfilador de corriente desechable", de: "Einweg-Strömungsprofilmesser", nl: "Wegwerp stroming profiler" },
          { en: "Lagrangian surface drifter", es: "Derivador superficial lagrangiano", de: "Lagrangescher Oberflächentreiber", nl: "Lagrangiaanse oppervlakte drijver" }
        ],
        correct: 0,
        explanation: {
          en: "VMADCP systems use multiple acoustic beams to measure three-dimensional velocity profiles throughout the water column, providing detailed information about current structure, vertical shear, and horizontal velocity components that are essential for understanding ocean dynamics.",
          es: "Los sistemas VMADCP utilizan múltiples haces acústicos para medir perfiles de velocidad tridimensional a través de la columna de agua, proporcionando información detallada sobre estructura de corriente, cizalladura vertical y componentes de velocidad horizontal esenciales para entender la dinámica oceánica.",
          de: "VMADCP-Systeme verwenden mehrere akustische Strahlen zur Messung dreidimensionaler Geschwindigkeitsprofile durch die gesamte Wassersäule und liefern detaillierte Informationen über Strömungsstruktur, vertikale Scherung und horizontale Geschwindigkeitskomponenten, die für das Verständnis der Ozeandynamik unerlässlich sind.",
          nl: "VMADCP systemen gebruiken meerdere akoestische bundels om driedimensionale snelheidsprofielen door de waterkolom te meten, wat gedetailleerde informatie biedt over stromingstructuur, verticale schering en horizontale snelheidscomponenten die essentieel zijn voor het begrijpen van oceaan dynamiek."
        }
      },
      {
        question: {
          en: "Which theoretical framework describes the relationship between ocean stratification, internal wave propagation, and vertical mixing efficiency?",
          es: "¿Qué marco teórico describe la relación entre estratificación oceánica, propagación de ondas internas y eficiencia de mezcla vertical?",
          de: "Welcher theoretische Rahmen beschreibt die Beziehung zwischen ozeanischer Schichtung, interner Wellenausbreitung und vertikaler Mischungseffizienz?",
          nl: "Welk theoretisch raamwerk beschrijft de relatie tussen oceaan stratificatie, interne golfvoortplanting en verticale mengingsefficiëntie?"
        },
        options: [
          { en: "Garrett-Munk internal wave spectrum with mixing parameterizations", es: "Espectro de ondas internas Garrett-Munk con parametrizaciones de mezcla", de: "Garrett-Munk-Interne-Wellen-Spektrum mit Mischungs-Parametrisierungen", nl: "Garrett-Munk interne golf spectrum met mengings parametrisaties" },
          { en: "Linear wave theory", es: "Teoría de ondas lineales", de: "Lineare Wellentheorie", nl: "Lineaire golftheorie" },
          { en: "Turbulent diffusion model", es: "Modelo de difusión turbulenta", de: "Turbulentes Diffusionsmodell", nl: "Turbulent diffusie model" },
          { en: "Geostrophic adjustment", es: "Ajuste geostrófic", de: "Geostrophische Anpassung", nl: "Geostrofische aanpassing" }
        ],
        correct: 0,
        explanation: {
          en: "The Garrett-Munk spectrum describes the universal characteristics of oceanic internal waves and provides the foundation for parameterizing wave-driven mixing processes, linking wave energy levels to turbulent dissipation and vertical mixing rates in stratified waters.",
          es: "El espectro Garrett-Munk describe las características universales de ondas internas oceánicas y proporciona la base para parametrizar procesos de mezcla impulsados por ondas, vinculando niveles de energía de ondas con disipación turbulenta y tasas de mezcla vertical en aguas estratificadas.",
          de: "Das Garrett-Munk-Spektrum beschreibt die universellen Eigenschaften ozeanischer interner Wellen und bildet die Grundlage für die Parametrisierung wellengetriebener Mischungsprozesse, wodurch Wellenenergieniveaus mit turbulenter Dissipation und vertikalen Mischungsraten in geschichteten Gewässern verknüpft werden.",
          nl: "Het Garrett-Munk spectrum beschrijft de universele karakteristieken van oceanische interne golven en biedt de basis voor het parametriseren van golf-gedreven mengingsprocessen, waarbij golfenergieniveaus gekoppeld worden aan turbulente dissipatie en verticale mengingssnelheden in gestratificeerde wateren."
        }
      },
      {
        question: {
          en: "What advanced chemical tracer technique uses anthropogenic compounds to determine ocean ventilation timescales and circulation pathways?",
          es: "¿Qué técnica avanzada de trazador químico utiliza compuestos antropogénicos para determinar escalas de tiempo de ventilación oceánica y vías de circulación?",
          de: "Welche fortgeschrittene chemische Tracer-Technik nutzt anthropogene Verbindungen zur Bestimmung ozeanischer Ventilationszeitskalen und Zirkulationswege?",
          nl: "Welke geavanceerde chemische tracer techniek gebruikt antropogene verbindingen om oceaan ventilatie tijdschalen en circulatieroutes te bepalen?"
        },
        options: [
          { en: "Chlorofluorocarbon (CFC) and sulfur hexafluoride (SF6) age dating", es: "Datación de edad con clorofluorocarbonos (CFC) y hexafluoruro de azufre (SF6)", de: "Chlorfluorkohlenstoff (CFC) und Schwefelhexafluorid (SF6) Altersdatierung", nl: "Chloorfluorkoolstof (CFC) en zwavel hexafluoride (SF6) leeftijdsbepaling" },
          { en: "Tritium-helium dating", es: "Datación tritio-helio", de: "Tritium-Helium-Datierung", nl: "Tritium-helium datering" },
          { en: "Radiocarbon dating", es: "Datación por radiocarbono", de: "Radiokarbon-Datierung", nl: "Radiokoolstof datering" },
          { en: "Oxygen isotope analysis", es: "Análisis de isótopos de oxígeno", de: "Sauerstoff-Isotopen-Analyse", nl: "Zuurstof isotoop analyse" }
        ],
        correct: 0,
        explanation: {
          en: "CFC and SF6 tracers, introduced to the atmosphere through industrial activities, dissolve into seawater at known rates and concentrations, allowing scientists to determine when a water mass was last at the surface and trace circulation pathways with timescales of decades.",
          es: "Los trazadores CFC y SF6, introducidos a la atmósfera a través de actividades industriales, se disuelven en agua de mar a tasas y concentraciones conocidas, permitiendo a los científicos determinar cuándo una masa de agua estuvo por última vez en superficie y rastrear vías de circulación con escalas de tiempo de décadas.",
          de: "CFC- und SF6-Tracer, die durch industrielle Aktivitäten in die Atmosphäre eingebracht wurden, lösen sich mit bekannten Raten und Konzentrationen in Meerwasser auf, wodurch Wissenschaftler bestimmen können, wann eine Wassermasse zuletzt an der Oberfläche war, und Zirkulationswege mit Zeitskalen von Jahrzehnten verfolgen können.",
          nl: "CFC en SF6 tracers, geïntroduceerd in de atmosfeer door industriële activiteiten, lossen op in zeewater met bekende snelheden en concentraties, waardoor wetenschappers kunnen bepalen wanneer een watermassa voor het laatst aan het oppervlak was en circulatieroutes kunnen traceren met tijdschalen van tientallen jaren."
        }
      },
      {
        question: {
          en: "Which computational technique models the nonlinear interactions between tidal currents and topographic features to predict energy dissipation?",
          es: "¿Qué técnica computacional modela las interacciones no lineales entre corrientes de marea y características topográficas para predecir disipación de energía?",
          de: "Welche Berechnungstechnik modelliert die nichtlinearen Wechselwirkungen zwischen Gezeitenströmungen und topographischen Merkmalen zur Vorhersage der Energiedissipation?",
          nl: "Welke computationele techniek modelleert de niet-lineaire interacties tussen getijdenstromingen en topografische kenmerken om energiedissipatie te voorspellen?"
        },
        options: [
          { en: "High-resolution primitive equation models with non-hydrostatic dynamics", es: "Modelos de ecuaciones primitivas de alta resolución con dinámica no hidrostática", de: "Hochauflösende primitive Gleichungsmodelle mit nicht-hydrostatischer Dynamik", nl: "Hoge-resolutie primitieve vergelijking modellen met niet-hydrostatische dynamiek" },
          { en: "Linear tidal analysis", es: "Análisis de marea lineal", de: "Lineare Gezeitenanalyse", nl: "Lineaire getij analyse" },
          { en: "Harmonic analysis only", es: "Solo análisis armónico", de: "Nur harmonische Analyse", nl: "Alleen harmonische analyse" },
          { en: "Empirical tide models", es: "Modelos de marea empíricos", de: "Empirische Gezeitenmodelle", nl: "Empirische getij modellen" }
        ],
        correct: 0,
        explanation: {
          en: "High-resolution primitive equation models with non-hydrostatic dynamics can resolve the nonlinear wave-topography interactions that generate internal waves, hydraulic jumps, and turbulent mixing zones where tidal energy is dissipated through complex three-dimensional processes.",
          es: "Los modelos de ecuaciones primitivas de alta resolución con dinámica no hidrostática pueden resolver las interacciones no lineales onda-topografía que generan ondas internas, saltos hidráulicos y zonas de mezcla turbulenta donde la energía de marea se disipa a través de procesos tridimensionales complejos.",
          de: "Hochauflösende primitive Gleichungsmodelle mit nicht-hydrostatischer Dynamik können die nichtlinearen Welle-Topographie-Wechselwirkungen auflösen, die interne Wellen, hydraulische Sprünge und turbulente Mischungszonen erzeugen, wo Gezeitenenergie durch komplexe dreidimensionale Prozesse dissipiert wird.",
          nl: "Hoge-resolutie primitieve vergelijking modellen met niet-hydrostatische dynamiek kunnen de niet-lineaire golf-topografie interacties oplossen die interne golven, hydraulische sprongen en turbulente mengingszones genereren waar getijdenenergie wordt gedissipeerd door complexe driedimensionale processen."
        }
      },
      {
        question: {
          en: "What theoretical concept describes the formation of oceanic fronts through density-driven convergence and frontogenesis?",
          es: "¿Qué concepto teórico describe la formación de frentes oceánicos a través de convergencia impulsada por densidad y frontogénesis?",
          de: "Welches theoretische Konzept beschreibt die Bildung ozeanischer Fronten durch dichtegetriebene Konvergenz und Frontogenese?",
          nl: "Welk theoretisch concept beschrijft de vorming van oceanische fronten door dichtheid-aangedreven convergentie en frontogenese?"
        },
        options: [
          { en: "Semi-geostrophic frontogenesis theory with ageostrophic circulations", es: "Teoría de frontogénesis semi-geostrófic con circulaciones ageostrófic", de: "Semi-geostrophische Frontogenese-Theorie mit ageostrophischen Zirkulationen", nl: "Semi-geostrofische frontogenese theorie met ageostrofische circulaties" },
          { en: "Thermal wind balance", es: "Balance de viento térmico", de: "Thermisches Windgleichgewicht", nl: "Thermische wind balans" },
          { en: "Geostrophic adjustment", es: "Ajuste geostrófic", de: "Geostrophische Anpassung", nl: "Geostrofische aanpassing" },
          { en: "Ekman transport theory", es: "Teoría de transporte de Ekman", de: "Ekman-Transport-Theorie", nl: "Ekman transport theorie" }
        ],
        correct: 0,
        explanation: {
          en: "Semi-geostrophic frontogenesis theory describes how horizontal density gradients are intensified by deformation fields, while ageostrophic secondary circulations develop perpendicular to fronts to maintain mass continuity and drive vertical mixing processes.",
          es: "La teoría de frontogénesis semi-geostrófic describe cómo los gradientes horizontales de densidad son intensificados por campos de deformación, mientras que circulaciones secundarias ageostróficas se desarrollan perpendiculares a frentes para mantener continuidad de masa e impulsar procesos de mezcla vertical.",
          de: "Die semi-geostrophische Frontogenese-Theorie beschreibt, wie horizontale Dichtegradienten durch Deformationsfelder verstärkt werden, während sich ageostrophische sekundäre Zirkulationen senkrecht zu Fronten entwickeln, um Massenkontinuität aufrechtzuerhalten und vertikale Mischungsprozesse anzutreiben.",
          nl: "Semi-geostrofische frontogenese theorie beschrijft hoe horizontale dichtheidsgradiënten worden geïntensiveerd door vervormingsvelden, terwijl ageostrofische secundaire circulaties zich ontwikkelen loodrecht op fronten om massa continuïteit te handhaven en verticale mengingsprocessen aan te drijven."
        }
      },
      {
        question: {
          en: "Which advanced observational method uses simultaneous temperature and salinity measurements to calculate absolute geostrophic velocities?",
          es: "¿Qué método observacional avanzado utiliza mediciones simultáneas de temperatura y salinidad para calcular velocidades geostrófic absolutas?",
          de: "Welche fortgeschrittene Beobachtungsmethode nutzt simultane Temperatur- und Salzgehaltsmessungen zur Berechnung absoluter geostrophischer Geschwindigkeiten?",
          nl: "Welke geavanceerde observationele methode gebruikt gelijktijdige temperatuur en zoutgehalte metingen om absolute geostrofische snelheden te berekenen?"
        },
        options: [
          { en: "Inverse box model with mass conservation constraints", es: "Modelo de caja inverso con restricciones de conservación de masa", de: "Inverses Box-Modell mit Massenerhaltungs-Beschränkungen", nl: "Omgekeerd box model met massa behoud beperkingen" },
          { en: "Direct velocity measurements", es: "Mediciones directas de velocidad", de: "Direkte Geschwindigkeitsmessungen", nl: "Directe snelheidsmetingen" },
          { en: "Surface drifter tracking", es: "Seguimiento de derivadores superficiales", de: "Oberflächentreiber-Verfolgung", nl: "Oppervlakte drijver tracking" },
          { en: "Altimetry-only calculations", es: "Cálculos solo de altimetría", de: "Nur Altimetrie-Berechnungen", nl: "Alleen altimetrie berekeningen" }
        ],
        correct: 0,
        explanation: {
          en: "Inverse box models use hydrographic data (temperature and salinity) within closed volumes to solve for absolute geostrophic velocities by applying mass, salt, and heat conservation constraints, eliminating the need for a level of no motion assumption.",
          es: "Los modelos de caja inversos utilizan datos hidrográficos (temperatura y salinidad) dentro de volúmenes cerrados para resolver velocidades geostróficas absolutas aplicando restricciones de conservación de masa, sal y calor, eliminando la necesidad de asumir un nivel de no movimiento.",
          de: "Inverse Box-Modelle verwenden hydrographische Daten (Temperatur und Salzgehalt) innerhalb geschlossener Volumina zur Lösung absoluter geostrophischer Geschwindigkeiten durch Anwendung von Massen-, Salz- und Wärmeerhaltungs-Beschränkungen, wodurch die Notwendigkeit einer Annahme eines bewegungslosen Niveaus eliminiert wird.",
          nl: "Omgekeerde box modellen gebruiken hydrografische gegevens (temperatuur en zoutgehalte) binnen gesloten volumes om absolute geostrofische snelheden op te lossen door massa-, zout- en warmtebehoud beperkingen toe te passen, waardoor de noodzaak voor een niveau van geen beweging aanname wordt weggenomen."
        }
      },
      {
        question: {
          en: "What phenomenon describes the nonlinear interaction between wind-driven Ekman transport and geostrophic circulation in western boundary currents?",
          es: "¿Qué fenómeno describe la interacción no lineal entre transporte de Ekman impulsado por viento y circulación geostrófic en corrientes de límite occidental?",
          de: "Welches Phänomen beschreibt die nichtlineare Wechselwirkung zwischen windgetriebenem Ekman-Transport und geostrophischer Zirkulation in westlichen Grenzströmungen?",
          nl: "Welk fenomeen beschrijft de niet-lineaire interactie tussen wind-aangedreven Ekman transport en geostrofische circulatie in westelijke grensstromen?"
        },
        options: [
          { en: "Inertial boundary layer dynamics with nonlinear advection", es: "Dinámica de capa límite inercial con advección no lineal", de: "Inertiale Grenzschicht-Dynamik mit nichtlinearer Advektion", nl: "Inertiële grenslaag dynamiek met niet-lineaire advectie" },
          { en: "Linear Ekman transport", es: "Transporte de Ekman lineal", de: "Linearer Ekman-Transport", nl: "Lineair Ekman transport" },
          { en: "Geostrophic balance only", es: "Solo balance geostrófic", de: "Nur geostrophisches Gleichgewicht", nl: "Alleen geostrofische balans" },
          { en: "Surface wave interactions", es: "Interacciones de ondas superficiales", de: "Oberflächenwellen-Wechselwirkungen", nl: "Oppervlaktegolf interacties" }
        ],
        correct: 0,
        explanation: {
          en: "In western boundary currents, the inertial boundary layer develops where nonlinear advective acceleration becomes comparable to Coriolis acceleration, causing the Ekman layer to thicken and interact nonlinearly with the geostrophic flow, affecting both horizontal and vertical momentum transfer.",
          es: "En corrientes de límite occidental, la capa límite inercial se desarrolla donde la aceleración advectiva no lineal se vuelve comparable a la aceleración de Coriolis, causando que la capa de Ekman se engrose e interactúe no linealmente con el flujo geostrófic, afectando tanto la transferencia de momento horizontal como vertical.",
          de: "In westlichen Grenzströmungen entwickelt sich die inertiale Grenzschicht, wo nichtlineare advektive Beschleunigung mit Coriolis-Beschleunigung vergleichbar wird, wodurch die Ekman-Schicht dicker wird und nichtlinear mit der geostrophischen Strömung interagiert, was sowohl horizontalen als auch vertikalen Impulstransfer beeinflusst.",
          nl: "In westelijke grensstromen ontwikkelt de inertiële grenslaag zich waar niet-lineaire advectieve versnelling vergelijkbaar wordt met Coriolis versnelling, waardoor de Ekman laag dikker wordt en niet-lineair interacteert met de geostrofische stroming, wat zowel horizontale als verticale momentum overdracht beïnvloedt."
        }
      },
      {
        question: {
          en: "Which computational approach models the three-dimensional structure of oceanic mixed layer deepening through entrainment processes?",
          es: "¿Qué enfoque computacional modela la estructura tridimensional de profundización de capa mixta oceánica a través de procesos de arrastre?",
          de: "Welcher Rechenansatz modelliert die dreidimensionale Struktur ozeanischer Deckschichtvertiefung durch Einschlussprozesse?",
          nl: "Welke computationele benadering modelleert de driedimensionale structuur van oceanische gemengde laag verdieping door meevoerings processen?"
        },
        options: [
          { en: "Large Eddy Simulation with Mellor-Yamada turbulence closure", es: "Simulación de Grandes Remolinos con cierre de turbulencia Mellor-Yamada", de: "Grobstruktur-Simulation mit Mellor-Yamada-Turbulenzschluss", nl: "Large Eddy Simulatie met Mellor-Yamada turbulentie sluiting" },
          { en: "Mixed layer slab models", es: "Modelos de losa de capa mixta", de: "Deckschicht-Platten-Modelle", nl: "Gemengde laag plak modellen" },
          { en: "One-dimensional heat balance", es: "Balance de calor unidimensional", de: "Eindimensionale Wärmebilanz", nl: "Eendimensionale warmtebalans" },
          { en: "Empirical parameterizations", es: "Parametrizaciones empíricas", de: "Empirische Parametrisierungen", nl: "Empirische parametrisaties" }
        ],
        correct: 0,
        explanation: {
          en: "Large Eddy Simulation with Mellor-Yamada turbulence closure resolves the largest turbulent eddies while parameterizing smaller-scale turbulence, capturing the complex three-dimensional entrainment processes that drive mixed layer deepening through wind forcing and surface cooling.",
          es: "La Simulación de Grandes Remolinos con cierre de turbulencia Mellor-Yamada resuelve los remolinos turbulentos más grandes mientras parametriza turbulencia de menor escala, capturando los procesos complejos tridimensionales de arrastre que impulsan la profundización de capa mixta a través de forzamiento del viento y enfriamiento superficial.",
          de: "Grobstruktur-Simulation mit Mellor-Yamada-Turbulenzschluss löst die größten turbulenten Wirbel auf, während kleinerskalige Turbulenz parametrisiert wird, und erfasst die komplexen dreidimensionalen Einschlussprozesse, die Deckschichtvertiefung durch Windantrieb und Oberflächenabkühlung vorantreiben.",
          nl: "Large Eddy Simulatie met Mellor-Yamada turbulentie sluiting lost de grootste turbulente wervelingen op terwijl kleinere-schaal turbulentie wordt geparametriseerd, waarbij de complexe driedimensionale meevoeringsprocessen worden gevangen die gemengde laag verdieping aandrijven door windkracht en oppervlaktekoeling."
        }
      },
      {
        question: {
          en: "What advanced analytical technique measures the molecular-level composition of marine dissolved organic matter to trace its biogeochemical transformations?",
          es: "¿Qué técnica analítica avanzada mide la composición a nivel molecular de materia orgánica marina disuelta para rastrear sus transformaciones biogeoquímicas?",
          de: "Welche fortgeschrittene analytische Technik misst die molekulare Zusammensetzung mariner gelöster organischer Substanz zur Verfolgung ihrer biogeochemischen Transformationen?",
          nl: "Welke geavanceerde analytische techniek meet de molecuulniveau samenstelling van mariene opgeloste organische materie om biogeochemische transformaties te traceren?"
        },
        options: [
          { en: "Ultrahigh-resolution mass spectrometry with Kendrick mass defect analysis", es: "Espectrometría de masas de resolución ultra-alta con análisis de defecto de masa Kendrick", de: "Ultrahochauflösende Massenspektrometrie mit Kendrick-Massendefekt-Analyse", nl: "Ultrahoge-resolutie massaspectrometrie met Kendrick massa defect analyse" },
          { en: "Total organic carbon analysis", es: "Análisis de carbono orgánico total", de: "Gesamtorganische Kohlenstoff-Analyse", nl: "Totaal organisch koolstof analyse" },
          { en: "Ultraviolet spectroscopy", es: "Espectroscopía ultravioleta", de: "Ultraviolett-Spektroskopie", nl: "Ultraviolet spectroscopie" },
          { en: "Size exclusion chromatography", es: "Cromatografía de exclusión por tamaño", de: "Größenausschluss-Chromatographie", nl: "Grootte uitsluiting chromatografie" }
        ],
        correct: 0,
        explanation: {
          en: "Ultrahigh-resolution mass spectrometry with Kendrick mass defect analysis can resolve thousands of molecular formulas in dissolved organic matter, allowing researchers to track specific compound classes and their transformations through marine biogeochemical processes.",
          es: "La espectrometría de masas de resolución ultra-alta con análisis de defecto de masa Kendrick puede resolver miles de fórmulas moleculares en materia orgánica disuelta, permitiendo a los investigadores rastrear clases específicas de compuestos y sus transformaciones a través de procesos biogeoquímicos marinos.",
          de: "Ultrahochauflösende Massenspektrometrie mit Kendrick-Massendefekt-Analyse kann Tausende von Molekularformeln in gelöster organischer Substanz auflösen, wodurch Forscher spezifische Verbindungsklassen und ihre Transformationen durch marine biogeochemische Prozesse verfolgen können.",
          nl: "Ultrahoge-resolutie massaspectrometrie met Kendrick massa defect analyse kan duizenden moleculaire formules in opgeloste organische materie oplossen, waardoor onderzoekers specifieke verbindingsklassen en hun transformaties door mariene biogeochemische processen kunnen traceren."
        }
      },
      {
        question: {
          en: "Which theoretical concept describes the relationship between ocean heat transport and meridional overturning circulation strength?",
          es: "¿Qué concepto teórico describe la relación entre transporte de calor oceánico y fuerza de circulación de vuelco meridional?",
          de: "Welches theoretische Konzept beschreibt die Beziehung zwischen ozeanischem Wärmetransport und meridionaler Umwälzzirkulation-Stärke?",
          nl: "Welk theoretisch concept beschrijft de relatie tussen oceaan warmtetransport en meridionale omwenteling circulatie sterkte?"
        },
        options: [
          { en: "Meridional overturning streamfunction and heat flux decomposition", es: "Función de corriente de vuelco meridional y descomposición de flujo de calor", de: "Meridionale Umwälz-Stromfunktion und Wärmefluss-Zerlegung", nl: "Meridionale omwenteling stroomfunctie en warmteflux decompositie" },
          { en: "Surface heat flux balance", es: "Balance de flujo de calor superficial", de: "Oberflächenwärmefluss-Bilanz", nl: "Oppervlakte warmteflux balans" },
          { en: "Ekman heat transport", es: "Transporte de calor de Ekman", de: "Ekman-Wärmetransport", nl: "Ekman warmtetransport" },
          { en: "Diffusive heat transport", es: "Transporte de calor difusivo", de: "Diffusiver Wärmetransport", nl: "Diffusief warmtetransport" }
        ],
        correct: 0,
        explanation: {
          en: "The meridional overturning streamfunction quantifies the strength of overturning circulation, while heat flux decomposition separates the contributions from overturning circulation, gyre circulation, and eddy transport to total meridional heat transport.",
          es: "La función de corriente de vuelco meridional cuantifica la fuerza de la circulación de vuelco, mientras que la descomposición de flujo de calor separa las contribuciones de circulación de vuelco, circulación de giro y transporte de remolinos al transporte total de calor meridional.",
          de: "Die meridionale Umwälz-Stromfunktion quantifiziert die Stärke der Umwälzzirkulation, während die Wärmefluss-Zerlegung die Beiträge von Umwälzzirkulation, Wirbel-Zirkulation und Wirbel-Transport zum gesamten meridionalen Wärmetransport trennt.",
          nl: "De meridionale omwenteling stroomfunctie kwantificeert de sterkte van omwenteling circulatie, terwijl warmteflux decompositie de bijdragen van omwenteling circulatie, wervel circulatie en wervel transport aan totaal meridionaal warmtetransport scheidt."
        }
      },
      {
        question: {
          en: "What oceanographic phenomenon describes the formation of coherent vortical structures through nonlinear wave-mean flow interactions?",
          es: "¿Qué fenómeno oceanográfico describe la formación de estructuras vorticales coherentes a través de interacciones no lineales onda-flujo medio?",
          de: "Welches ozeanographische Phänomen beschreibt die Bildung kohärenter wirbelnder Strukturen durch nichtlineare Welle-Mittelströmung-Wechselwirkungen?",
          nl: "Welk oceanografisch fenomeen beschrijft de vorming van coherente wervel structuren door niet-lineaire golf-gemiddelde stroming interacties?"
        },
        options: [
          { en: "Lagrangian coherent structures and finite-time Lyapunov exponents", es: "Estructuras coherentes lagrangianas y exponentes de Lyapunov de tiempo finito", de: "Lagrangesche kohärente Strukturen und endlich-zeitliche Lyapunov-Exponenten", nl: "Lagrangiaanse coherente structuren en eindige-tijd Lyapunov exponenten" },
          { en: "Eulerian mean circulation", es: "Circulación media euleriana", de: "Eulersche Mittelzirkulation", nl: "Euleriaanse gemiddelde circulatie" },
          { en: "Stokes drift", es: "Deriva de Stokes", de: "Stokes-Drift", nl: "Stokes drift" },
          { en: "Geostrophic turbulence", es: "Turbulencia geostrófic", de: "Geostrophische Turbulenz", nl: "Geostrofische turbulentie" }
        ],
        correct: 0,
        explanation: {
          en: "Lagrangian coherent structures, identified using finite-time Lyapunov exponents, reveal transport barriers and vortical structures that organize fluid motion through nonlinear wave-mean flow interactions, providing insights into tracer transport and mixing processes.",
          es: "Las estructuras coherentes lagrangianas, identificadas usando exponentes de Lyapunov de tiempo finito, revelan barreras de transporte y estructuras vorticales que organizan el movimiento del fluido a través de interacciones no lineales onda-flujo medio, proporcionando perspectivas sobre transporte de trazadores y procesos de mezcla.",
          de: "Lagrangesche kohärente Strukturen, die mit endlich-zeitlichen Lyapunov-Exponenten identifiziert werden, enthüllen Transportbarrieren und wirbelnde Strukturen, die Fluidbewegung durch nichtlineare Welle-Mittelströmung-Wechselwirkungen organisieren und Einblicke in Tracer-Transport und Mischungsprozesse bieten.",
          nl: "Lagrangiaanse coherente structuren, geïdentificeerd met behulp van eindige-tijd Lyapunov exponenten, onthullen transportbarrières en wervel structuren die vloeistofbeweging organiseren door niet-lineaire golf-gemiddelde stroming interacties, wat inzichten biedt in tracer transport en mengingsprocessen."
        }
      },
      {
        question: {
          en: "Which advanced modeling approach couples ocean biogeochemistry with physical circulation to simulate marine ecosystem dynamics?",
          es: "¿Qué enfoque de modelado avanzado acopla biogeoquímica oceánica con circulación física para simular dinámicas de ecosistemas marinos?",
          de: "Welcher fortgeschrittene Modellierungsansatz koppelt ozeanische Biogeochemie mit physikalischer Zirkulation zur Simulation mariner Ökosystem-Dynamik?",
          nl: "Welke geavanceerde modelleringsbenadering koppelt oceaan biogeochemie met fysieke circulatie om mariene ecosysteem dynamiek te simuleren?"
        },
        options: [
          { en: "Biogeochemical-physical coupled models with nitrogen-phosphorus-carbon cycling", es: "Modelos acoplados biogeoquímico-físicos con ciclos de nitrógeno-fósforo-carbono", de: "Biogeochemisch-physikalisch gekoppelte Modelle mit Stickstoff-Phosphor-Kohlenstoff-Kreisläufen", nl: "Biogeochemisch-fysiek gekoppelde modellen met stikstof-fosfor-koolstof cycli" },
          { en: "Physical ocean models only", es: "Solo modelos oceánicos físicos", de: "Nur physikalische Ozeanmodelle", nl: "Alleen fysieke oceaan modellen" },
          { en: "Statistical ecosystem models", es: "Modelos estadísticos de ecosistemas", de: "Statistische Ökosystemmodelle", nl: "Statistische ecosysteem modellen" },
          { en: "Empirical biological indices", es: "Índices biológicos empíricos", de: "Empirische biologische Indizes", nl: "Empirische biologische indices" }
        ],
        correct: 0,
        explanation: {
          en: "Biogeochemical-physical coupled models integrate nutrient cycling (N, P, C) with physical processes to simulate how circulation patterns affect biological productivity, oxygen distribution, and carbon sequestration in marine ecosystems.",
          es: "Los modelos acoplados biogeoquímico-físicos integran ciclos de nutrientes (N, P, C) con procesos físicos para simular cómo los patrones de circulación afectan la productividad biológica, distribución de oxígeno y secuestro de carbono en ecosistemas marinos.",
          de: "Biogeochemisch-physikalisch gekoppelte Modelle integrieren Nährstoffkreisläufe (N, P, C) mit physikalischen Prozessen zur Simulation, wie Zirkulationsmuster biologische Produktivität, Sauerstoffverteilung und Kohlenstoffsequestrierung in marinen Ökosystemen beeinflussen.",
          nl: "Biogeochemisch-fysiek gekoppelde modellen integreren nutriëntcycli (N, P, C) met fysieke processen om te simuleren hoe circulatiepatronen biologische productiviteit, zuurstofverdeling en koolstofopslag in mariene ecosystemen beïnvloeden."
        }
      },
      {
        question: {
          en: "What is the theoretical basis for the 'mixed layer instability' that generates submesoscale coherent vortices in the upper ocean?",
          es: "¿Cuál es la base teórica para la 'inestabilidad de capa mixta' que genera vórtices coherentes submesoscalares en el océano superior?",
          de: "Was ist die theoretische Grundlage für die 'Mischungsschichtinstabilität', die submesoskalige kohärente Wirbel im oberen Ozean erzeugt?",
          nl: "Wat is de theoretische basis voor de 'gemengde laag instabiliteit' die submesoschalige coherente wervelingen in de bovenste oceaan genereert?"
        },
        options: [
          { en: "Symmetric instability driven by potential vorticity anomalies", es: "Inestabilidad simétrica impulsada por anomalías de vorticidad potencial", de: "Symmetrische Instabilität angetrieben von Potentialvortizitätsanomalien", nl: "Symmetrische instabiliteit aangedreven door potentiële vorticiteitanomalieën" },
          { en: "Baroclinic instability from density gradients", es: "Inestabilidad baroclínica de gradientes de densidad", de: "Barokline Instabilität durch Dichtegradienten", nl: "Baroclinische instabiliteit van dichtheidsgradiënten" },
          { en: "Kelvin-Helmholtz shear instability", es: "Inestabilidad de cizalladura Kelvin-Helmholtz", de: "Kelvin-Helmholtz-Scheinstabilität", nl: "Kelvin-Helmholtz scheerinstabiliteit" },
          { en: "Centrifugal instability in curved flows", es: "Inestabilidad centrífuga en flujos curvos", de: "Zentrifugalinstabilität in gekrümmten Strömungen", nl: "Centrifugale instabiliteit in gebogen stromingen" }
        ],
        correct: 0,
        explanation: {
          en: "Mixed layer instability occurs when symmetric instability develops due to negative potential vorticity anomalies created by surface cooling or wind-driven convergence, leading to the formation of submesoscale coherent vortices with horizontal scales of 1-10 km.",
          es: "La inestabilidad de capa mixta ocurre cuando se desarrolla inestabilidad simétrica debido a anomalías negativas de vorticidad potencial creadas por enfriamiento superficial o convergencia impulsada por viento, llevando a la formación de vórtices coherentes submesoscalares con escalas horizontales de 1-10 km.",
          de: "Mischungsschichtinstabilität tritt auf, wenn sich symmetrische Instabilität aufgrund negativer Potentialvortizitätsanomalien entwickelt, die durch Oberflächenabkühlung oder windgetriebene Konvergenz entstehen, was zur Bildung submesoskaliger kohärenter Wirbel mit horizontalen Skalen von 1-10 km führt.",
          nl: "Gemengde laag instabiliteit treedt op wanneer symmetrische instabiliteit zich ontwikkelt door negatieve potentiële vorticiteitanomalieën veroorzaakt door oppervlaktekoeling of windgedreven convergentie, wat leidt tot de vorming van submesoschalige coherente wervelingen met horizontale schalen van 1-10 km."
        }
      },
      {
        question: {
          en: "Which advanced mass spectrometric technique provides molecular-level characterization of dissolved organic matter composition in deep ocean samples?",
          es: "¿Qué técnica espectrométrica de masas avanzada proporciona caracterización a nivel molecular de la composición de materia orgánica disuelta en muestras de océano profundo?",
          de: "Welche fortgeschrittene massenspektrometrische Technik bietet molekülgenaue Charakterisierung der Zusammensetzung gelöster organischer Substanz in Tiefozeanproben?",
          nl: "Welke geavanceerde massaspectrometrische techniek biedt moleculaire karakterisering van opgeloste organische materie samenstelling in diepe oceaan monsters?"
        },
        options: [
          { en: "Electrospray Ionization Orbitrap Mass Spectrometry", es: "Espectrometría de Masas Orbitrap por Ionización por Electrospray", de: "Electrospray-Ionisation Orbitrap Massenspektrometrie", nl: "Electrospray Ionisatie Orbitrap Massaspectrometrie" },
          { en: "Gas Chromatography Mass Spectrometry", es: "Espectrometría de Masas por Cromatografía de Gases", de: "Gaschromatographie-Massenspektrometrie", nl: "Gaschromatografie Massaspectrometrie" },
          { en: "Matrix-Assisted Laser Desorption Ionization", es: "Ionización por Desorción Láser Asistida por Matriz", de: "Matrix-unterstützte Laser-Desorption/Ionisation", nl: "Matrix-Geassisteerde Laser Desorptie Ionisatie" },
          { en: "Inductively Coupled Plasma Mass Spectrometry", es: "Espectrometría de Masas de Plasma Acoplado Inductivamente", de: "Induktiv gekoppelte Plasma-Massenspektrometrie", nl: "Inductief Gekoppelde Plasma Massaspectrometrie" }
        ],
        correct: 0,
        explanation: {
          en: "Electrospray Ionization Orbitrap Mass Spectrometry (ESI-Orbitrap MS) provides ultra-high resolution and mass accuracy needed to resolve thousands of molecular formulas in dissolved organic matter, enabling detailed characterization of marine carbon chemistry at the molecular level.",
          es: "La Espectrometría de Masas Orbitrap por Ionización por Electrospray (ESI-Orbitrap MS) proporciona la ultra alta resolución y precisión de masa necesarias para resolver miles de fórmulas moleculares en materia orgánica disuelta, permitiendo caracterización detallada de la química del carbono marino a nivel molecular.",
          de: "Electrospray-Ionisation Orbitrap Massenspektrometrie (ESI-Orbitrap MS) bietet die ultrahochauflösende und massengenaue Auflösung, die benötigt wird, um Tausende von Molekularformeln in gelöster organischer Substanz aufzulösen, was eine detaillierte Charakterisierung der marinen Kohlenstoffchemie auf molekularer Ebene ermöglicht.",
          nl: "Electrospray Ionisatie Orbitrap Massaspectrometrie (ESI-Orbitrap MS) biedt de ultra-hoge resolutie en massanauwkeurigheid die nodig is om duizenden moleculaire formules in opgeloste organische materie op te lossen, wat gedetailleerde karakterisering van mariene koolstofchemie op moleculair niveau mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is the primary mechanism driving the formation of 'cold core rings' in western boundary current systems?",
          es: "¿Cuál es el mecanismo principal que impulsa la formación de 'anillos de núcleo frío' en sistemas de corrientes de frontera occidental?",
          de: "Was ist der primäre Mechanismus, der die Bildung von 'Kaltkerringen' in westlichen Grenzstromsystemen antreibt?",
          nl: "Wat is het primaire mechanisme dat de vorming van 'koude kern ringen' in westelijke grensstroomsystemen aandrijft?"
        },
        options: [
          { en: "Meandering instability of the current causing eddy pinch-off", es: "Inestabilidad serpenteante de la corriente causando desprendimiento de remolinos", de: "Mäandernde Instabilität der Strömung verursacht Wirbel-Abschnürung", nl: "Meandering instabiliteit van de stroom die wervelafknijping veroorzaakt" },
          { en: "Topographic steering over seamounts", es: "Dirección topográfica sobre montañas submarinas", de: "Topographische Lenkung über Seeberge", nl: "Topografische sturing over zeemountains" },
          { en: "Wind stress curl variations", es: "Variaciones del rizo del estrés del viento", de: "Windschubspannungs-Rotationsvariationen", nl: "Windstress curl variaties" },
          { en: "Thermohaline forcing from atmospheric cooling", es: "Forzamiento termohalino del enfriamiento atmosférico", de: "Thermohaline Antreibung durch atmosphärische Abkühlung", nl: "Thermohaliene aandrijving van atmosferische afkoeling" }
        ],
        correct: 0,
        explanation: {
          en: "Cold core rings form when meandering instabilities in western boundary currents (like the Gulf Stream) cause loops to pinch off, creating cyclonic eddies that trap cold, nutrient-rich water from the slope region within warm, oligotrophic waters of the central gyre.",
          es: "Los anillos de núcleo frío se forman cuando las inestabilidades serpenteantes en corrientes de frontera occidental (como la Corriente del Golfo) causan que los bucles se desprendan, creando remolinos ciclónicos que atrapan agua fría y rica en nutrientes de la región de pendiente dentro de aguas cálidas y oligotróficas del giro central.",
          de: "Kaltkernringe bilden sich, wenn Mäanderinstabilitäten in westlichen Grenzströmen (wie dem Golfstrom) dazu führen, dass sich Schleifen abschnüren und zyklonische Wirbel entstehen, die kaltes, nährstoffreiches Wasser aus dem Hangbereich in warmen, oligotrophen Gewässern des zentralen Wirbels einschließen.",
          nl: "Koude kern ringen vormen zich wanneer meandering instabiliteiten in westelijke grensstromen (zoals de Golfstroom) lussen doen afknijpen, waardoor cyclonische wervelingen ontstaan die koud, nutriëntrijk water uit het hellinggebied opsluiten binnen warme, oligotrofe wateren van de centrale werveling."
        }
      },
      {
        question: {
          en: "In advanced biogeochemical modeling, what is the significance of the 'quota' model for representing phytoplankton nutrient uptake kinetics?",
          es: "En modelado biogeoquímico avanzado, ¿cuál es la significancia del modelo de 'cuota' para representar la cinética de captación de nutrientes del fitoplancton?",
          de: "In der fortgeschrittenen biogeochemischen Modellierung, was ist die Bedeutung des 'Quoten'-Modells zur Darstellung der Phytoplankton-Nährstoffaufnahme-Kinetik?",
          nl: "In geavanceerde biogeochemische modellering, wat is de betekenis van het 'quota' model voor het representeren van fytoplankton nutriënt opname kinetiek?"
        },
        options: [
          { en: "It accounts for variable stoichiometry and luxury uptake under nutrient-replete conditions", es: "Considera la estequiometría variable y la captación de lujo bajo condiciones ricas en nutrientes", de: "Es berücksichtigt variable Stöchiometrie und Luxusaufnahme unter nährstoffreichen Bedingungen", nl: "Het houdt rekening met variabele stoichiometrie en luxe opname onder nutriëntrijke omstandigheden" },
          { en: "It assumes fixed Redfield ratios for all growth conditions", es: "Asume relaciones de Redfield fijas para todas las condiciones de crecimiento", de: "Es nimmt feste Redfield-Verhältnisse für alle Wachstumsbedingungen an", nl: "Het veronderstelt vaste Redfield-verhoudingen voor alle groeiomstandigheden" },
          { en: "It only applies to nitrogen-limited environments", es: "Solo se aplica a ambientes limitados por nitrógeno", de: "Es gilt nur für stickstofflimitierte Umgebungen", nl: "Het geldt alleen voor stikstofgelimiteerde omgevingen" },
          { en: "It represents constant uptake rates regardless of cell status", es: "Representa tasas de captación constantes independientemente del estado celular", de: "Es stellt konstante Aufnahmeraten unabhängig vom Zellzustand dar", nl: "Het vertegenwoordigt constante opnamesnelheden ongeacht de celstatus" }
        ],
        correct: 0,
        explanation: {
          en: "The quota model allows phytoplankton cellular nutrient content to vary independently from biomass, enabling luxury uptake when nutrients are abundant and representing the decoupling of nutrient uptake from growth rates, which is crucial for modeling non-Redfield dynamics in marine ecosystems.",
          es: "El modelo de cuota permite que el contenido celular de nutrientes del fitoplancton varíe independientemente de la biomasa, permitiendo captación de lujo cuando los nutrientes son abundantes y representando el desacoplamiento de la captación de nutrientes de las tasas de crecimiento, lo cual es crucial para modelar dinámicas no-Redfield en ecosistemas marinos.",
          de: "Das Quotenmodell ermöglicht es, dass der zelluläre Nährstoffgehalt von Phytoplankton unabhängig von der Biomasse variiert, was Luxusaufnahme bei reichlichen Nährstoffen ermöglicht und die Entkopplung der Nährstoffaufnahme von Wachstumsraten darstellt, was für die Modellierung von Nicht-Redfield-Dynamiken in marinen Ökosystemen entscheidend ist.",
          nl: "Het quota model stelt fytoplankton cellulaire nutriënteninhoud in staat onafhankelijk van biomassa te variëren, wat luxe opname mogelijk maakt wanneer nutriënten overvloedig zijn en de ontkoppeling van nutriëntopname van groeisnelheden vertegenwoordigt, wat cruciaal is voor het modelleren van niet-Redfield dynamiek in mariene ecosystemen."
        }
      },
      {
        question: {
          en: "What advanced numerical technique is used to solve the primitive equations in high-resolution ocean general circulation models?",
          es: "¿Qué técnica numérica avanzada se usa para resolver las ecuaciones primitivas en modelos de circulación general oceánica de alta resolución?",
          de: "Welche fortgeschrittene numerische Technik wird verwendet, um die primitiven Gleichungen in hochauflösenden allgemeinen Ozeanzirkulationsmodellen zu lösen?",
          nl: "Welke geavanceerde numerieke techniek wordt gebruikt om de primitieve vergelijkingen in hoge-resolutie algemene oceaancirculatie modellen op te lossen?"
        },
        options: [
          { en: "Finite volume methods with flux limiters for advection schemes", es: "Métodos de volumen finito con limitadores de flujo para esquemas de advección", de: "Finite-Volumen-Methoden mit Flussbegrenzern für Advektionsschemata", nl: "Eindige volume methoden met flux begrenzing voor advectieschema's" },
          { en: "Simple forward Euler time stepping", es: "Paso de tiempo Euler hacia adelante simple", de: "Einfache Vorwärts-Euler-Zeitschritte", nl: "Eenvoudige voorwaarts Euler tijdstappen" },
          { en: "Linear interpolation for all spatial derivatives", es: "Interpolación lineal para todas las derivadas espaciales", de: "Lineare Interpolation für alle räumlichen Ableitungen", nl: "Lineaire interpolatie voor alle ruimtelijke afgeleiden" },
          { en: "Explicit time integration without stability constraints", es: "Integración temporal explícita sin restricciones de estabilidad", de: "Explizite Zeitintegration ohne Stabilitätsbeschränkungen", nl: "Expliciete tijdintegratie zonder stabiliteitsbeperkingen" }
        ],
        correct: 0,
        explanation: {
          en: "Finite volume methods with flux limiters provide accurate and stable solutions to the primitive equations by conserving mass, momentum, and tracers while minimizing numerical diffusion and maintaining sharp gradients in high-resolution ocean models.",
          es: "Los métodos de volumen finito con limitadores de flujo proporcionan soluciones precisas y estables a las ecuaciones primitivas conservando masa, momento y trazadores mientras minimizan la difusión numérica y mantienen gradientes agudos en modelos oceánicos de alta resolución.",
          de: "Finite-Volumen-Methoden mit Flussbegrenzern bieten genaue und stabile Lösungen der primitiven Gleichungen durch Erhaltung von Masse, Impuls und Tracern, während numerische Diffusion minimiert und scharfe Gradienten in hochauflösenden Ozeanmodellen aufrechterhalten werden.",
          nl: "Eindige volume methoden met flux begrenzing bieden nauwkeurige en stabiele oplossingen voor de primitieve vergelijkingen door massa, momentum en tracers te behouden terwijl numerieke diffusie wordt geminimaliseerd en scherpe gradiënten in hoge-resolutie oceaan modellen worden gehandhaafd."
        }
      },
      {
        question: {
          en: "Which theoretical framework describes the critical layer absorption mechanism for internal wave energy dissipation in the ocean?",
          es: "¿Qué marco teórico describe el mecanismo de absorción de capa crítica para disipación de energía de ondas internas en el océano?",
          de: "Welcher theoretische Rahmen beschreibt den kritischen Schicht-Absorptionsmechanismus für interne Wellenenergiedissipation im Ozean?",
          nl: "Welk theoretisch raamwerk beschrijft het kritieke laag absorptiemechanisme voor interne golf energiedissipatie in de oceaan?"
        },
        options: [
          { en: "WKB approximation with turning point analysis for wave-mean flow interactions", es: "Aproximación WKB con análisis de punto de inflexión para interacciones onda-flujo medio", de: "WKB-Approximation mit Wendepunkt-Analyse für Welle-Mittelströmung-Wechselwirkungen", nl: "WKB benadering met keerpunt analyse voor golf-gemiddelde stroming interacties" },
          { en: "Linear wave propagation theory", es: "Teoría de propagación de ondas lineales", de: "Lineare Wellenausbreitungstheorie", nl: "Lineaire golfvoortplanting theorie" },
          { en: "Ray tracing approximation", es: "Aproximación de trazado de rayos", de: "Strahlverfolgungsapproximation", nl: "Straaltracing benadering" },
          { en: "Shallow water wave theory", es: "Teoría de ondas de aguas someras", de: "Flachwasserwellen-Theorie", nl: "Ondiep water golf theorie" }
        ],
        correct: 0,
        explanation: {
          en: "The WKB approximation with turning point analysis describes how internal waves are absorbed at critical layers where the wave phase speed matches the background flow speed, leading to irreversible energy transfer from waves to mean flow through nonlinear interactions.",
          es: "La aproximación WKB con análisis de punto de inflexión describe cómo las ondas internas son absorbidas en capas críticas donde la velocidad de fase de onda coincide con la velocidad de flujo de fondo, llevando a transferencia irreversible de energía de ondas a flujo medio a través de interacciones no lineales.",
          de: "Die WKB-Approximation mit Wendepunkt-Analyse beschreibt, wie interne Wellen an kritischen Schichten absorbiert werden, wo die Wellenphasengeschwindigkeit mit der Hintergrundströmungsgeschwindigkeit übereinstimmt, was zu irreversibler Energieübertragung von Wellen auf Mittelströmung durch nichtlineare Wechselwirkungen führt.",
          nl: "De WKB benadering met keerpunt analyse beschrijft hoe interne golven worden geabsorbeerd bij kritieke lagen waar de golfsnelheid overeenkomt met de achtergrondstroomsnelheid, wat leidt tot onomkeerbare energieoverdracht van golven naar gemiddelde stroming door niet-lineaire interacties."
        }
      },
      {
        question: {
          en: "What computational technique is used to resolve submesoscale processes in regional ocean models with horizontal grid spacing less than 1 km?",
          es: "¿Qué técnica computacional se usa para resolver procesos submesoscalares en modelos oceánicos regionales con espaciado de cuadrícula horizontal menor a 1 km?",
          de: "Welche Berechnungstechnik wird verwendet, um submesoskalige Prozesse in regionalen Ozeanmodellen mit horizontalem Gitterabstand unter 1 km aufzulösen?",
          nl: "Welke computationele techniek wordt gebruikt om submesoschalige processen op te lossen in regionale oceaan modellen met horizontale rooster afstand minder dan 1 km?"
        },
        options: [
          { en: "Non-hydrostatic primitive equation models with adaptive time stepping", es: "Modelos de ecuaciones primitivas no hidrostáticas con paso de tiempo adaptativo", de: "Nicht-hydrostatische primitive Gleichungsmodelle mit adaptiver Zeitschrittweite", nl: "Niet-hydrostatische primitieve vergelijking modellen met adaptieve tijdstappen" },
          { en: "Hydrostatic approximation with fixed time steps", es: "Aproximación hidrostática con pasos de tiempo fijos", de: "Hydrostatische Approximation mit festen Zeitschritten", nl: "Hydrostatische benadering met vaste tijdstappen" },
          { en: "Quasi-geostrophic approximation", es: "Aproximación quasi-geostrófic", de: "Quasi-geostrophische Approximation", nl: "Quasi-geostrofische benadering" },
          { en: "Boussinesq approximation only", es: "Solo aproximación de Boussinesq", de: "Nur Boussinesq-Approximation", nl: "Alleen Boussinesq benadering" }
        ],
        correct: 0,
        explanation: {
          en: "Non-hydrostatic models with adaptive time stepping can resolve vertical acceleration and submesoscale phenomena like symmetric instabilities and convective processes that occur at scales where the hydrostatic approximation breaks down.",
          es: "Los modelos no hidrostáticos con paso de tiempo adaptativo pueden resolver aceleración vertical y fenómenos submesoscalares como inestabilidades simétricas y procesos convectivos que ocurren en escalas donde la aproximación hidrostática se rompe.",
          de: "Nicht-hydrostatische Modelle mit adaptiver Zeitschrittweite können vertikale Beschleunigung und submesoskalige Phänomene wie symmetrische Instabilitäten und konvektive Prozesse auflösen, die bei Skalen auftreten, wo die hydrostatische Approximation versagt.",
          nl: "Niet-hydrostatische modellen met adaptieve tijdstappen kunnen verticale versnelling en submesoschalige fenomenen zoals symmetrische instabiliteiten en convectieve processen oplossen die optreden bij schalen waar de hydrostatische benadering faalt."
        }
      },
      {
        question: {
          en: "Which advanced observational technique uses particle image velocimetry to measure three-dimensional turbulent velocity fields in laboratory ocean experiments?",
          es: "¿Qué técnica observacional avanzada utiliza velocimetría de imágenes de partículas para medir campos de velocidad turbulentos tridimensionales en experimentos oceánicos de laboratorio?",
          de: "Welche fortgeschrittene Beobachtungstechnik nutzt Partikel-Bild-Velocimetrie zur Messung dreidimensionaler turbulenter Geschwindigkeitsfelder in Labor-Ozeanexperimenten?",
          nl: "Welke geavanceerde observationele techniek gebruikt deeltjesbeeld velocimetrie om driedimensionale turbulente snelheidsvelden te meten in laboratorium oceaan experimenten?"
        },
        options: [
          { en: "Stereoscopic PIV with multi-camera synchronized imaging systems", es: "PIV estereoscópico con sistemas de imágenes sincronizadas multi-cámara", de: "Stereoskopische PIV mit Multi-Kamera-synchronisierten Bildgebungssystemen", nl: "Stereoscopische PIV met multi-camera gesynchroniseerde beeldsystemen" },
          { en: "Single-point laser Doppler velocimetry", es: "Velocimetría Doppler láser de punto único", de: "Einpunkt-Laser-Doppler-Velocimetrie", nl: "Enkel-punt laser Doppler velocimetrie" },
          { en: "Hot-wire anemometry", es: "Anemometría de hilo caliente", de: "Heißdraht-Anemometrie", nl: "Hete draad anemometrie" },
          { en: "Acoustic Doppler profiling", es: "Perfilado Doppler acústico", de: "Akustisches Doppler-Profiling", nl: "Akoestische Doppler profilering" }
        ],
        correct: 0,
        explanation: {
          en: "Stereoscopic PIV uses multiple synchronized cameras to capture three-dimensional particle motion in illuminated flow fields, enabling detailed measurements of turbulent structures, vorticity, and mixing processes in laboratory studies of oceanic phenomena.",
          es: "PIV estereoscópico utiliza múltiples cámaras sincronizadas para capturar movimiento tridimensional de partículas en campos de flujo iluminados, permitiendo mediciones detalladas de estructuras turbulentas, vorticidad y procesos de mezcla en estudios de laboratorio de fenómenos oceánicos.",
          de: "Stereoskopische PIV verwendet mehrere synchronisierte Kameras zur Erfassung dreidimensionaler Partikelbewegung in beleuchteten Strömungsfeldern und ermöglicht detaillierte Messungen turbulenter Strukturen, Vortizität und Mischungsprozesse in Laborstudien ozeanischer Phänomene.",
          nl: "Stereoscopische PIV gebruikt meerdere gesynchroniseerde camera's om driedimensionale deeltjesbeweging in verlichte stromingsvelden vast te leggen, wat gedetailleerde metingen mogelijk maakt van turbulente structuren, vorticiteit en mengingsprocessen in laboratorium studies van oceanische fenomenen."
        }
      },
      {
        question: {
          en: "What theoretical concept describes the relationship between eddy saturation and the insensitivity of the Antarctic Circumpolar Current transport to wind stress changes?",
          es: "¿Qué concepto teórico describe la relación entre saturación de remolinos y la insensibilidad del transporte de Corriente Circumpolar Antártica a cambios de estrés del viento?",
          de: "Welches theoretische Konzept beschreibt die Beziehung zwischen Wirbelsättigung und der Unempfindlichkeit des Antarktischen Zirkumpolarstrom-Transports gegenüber Windspannungsänderungen?",
          nl: "Welk theoretisch concept beschrijft de relatie tussen wervel saturatie en de ongevoeligheid van het Antarctische Circumpolaire Stroom transport voor windspanning veranderingen?"
        },
        options: [
          { en: "Eddy saturation theory with enhanced meridional eddy heat transport", es: "Teoría de saturación de remolinos con transporte meridional mejorado de calor de remolinos", de: "Wirbelsättigungstheorie mit verstärktem meridionalem Wirbel-Wärmetransport", nl: "Wervel saturatie theorie met verhoogd meridionaal wervel warmtetransport" },
          { en: "Linear Ekman transport scaling", es: "Escalado lineal de transporte de Ekman", de: "Lineare Ekman-Transport-Skalierung", nl: "Lineaire Ekman transport schaling" },
          { en: "Sverdrup balance theory", es: "Teoría de balance de Sverdrup", de: "Sverdrup-Gleichgewichtstheorie", nl: "Sverdrup balans theorie" },
          { en: "Thermohaline circulation dominance", es: "Dominancia de circulación termohalina", de: "Thermohaline Zirkulations-Dominanz", nl: "Thermohaliene circulatie dominantie" }
        ],
        correct: 0,
        explanation: {
          en: "Eddy saturation theory explains how increased wind stress enhances mesoscale eddy activity rather than increasing the mean transport, with eddies providing enhanced meridional heat transport that maintains the density structure and limits transport sensitivity to wind changes.",
          es: "La teoría de saturación de remolinos explica cómo el aumento de estrés del viento mejora la actividad de remolinos de mesoescala en lugar de aumentar el transporte medio, con remolinos proporcionando transporte meridional de calor mejorado que mantiene la estructura de densidad y limita la sensibilidad del transporte a cambios de viento.",
          de: "Die Wirbelsättigungstheorie erklärt, wie verstärkte Windspannung mesoskalige Wirbelaktivität verstärkt, anstatt den mittleren Transport zu erhöhen, wobei Wirbel verstärkten meridionalen Wärmetransport bieten, der die Dichtestruktur aufrechterhält und die Transportsensitivität gegenüber Windänderungen begrenzt.",
          nl: "Wervel saturatie theorie verklaart hoe verhoogde windspanning mesoschalige wervel activiteit versterkt in plaats van het gemiddelde transport te verhogen, waarbij wervelingen verhoogd meridionaal warmtetransport bieden dat de dichtheidsstructuur handhaaft en transport gevoeligheid voor windveranderingen beperkt."
        }
      },
      {
        question: {
          en: "Which advanced analytical method uses accelerator mass spectrometry to measure ultra-low concentrations of radiocarbon in deep ocean dissolved inorganic carbon?",
          es: "¿Qué método analítico avanzado utiliza espectrometría de masas con acelerador para medir concentraciones ultra-bajas de radiocarbono en carbono inorgánico disuelto de océano profundo?",
          de: "Welche fortgeschrittene analytische Methode nutzt Beschleuniger-Massenspektrometrie zur Messung ultra-niedriger Radiokarbon-Konzentrationen im gelösten anorganischen Kohlenstoff des Tiefseewassers?",
          nl: "Welke geavanceerde analytische methode gebruikt versneller massaspectrometrie om ultra-lage concentraties van radiokoolstof in diepe oceaan opgeloste anorganische koolstof te meten?"
        },
        options: [
          { en: "AMS radiocarbon dating with precision better than ±25 years", es: "Datación por radiocarbono AMS con precisión mejor que ±25 años", de: "AMS-Radiokarbon-Datierung mit Genauigkeit besser als ±25 Jahre", nl: "AMS radiokoolstof datering met precisie beter dan ±25 jaar" },
          { en: "Liquid scintillation counting", es: "Conteo de centelleo líquido", de: "Flüssigszintillations-Zählung", nl: "Vloeistof scintillatie telling" },
          { en: "Gas proportional counting", es: "Conteo proporcional de gas", de: "Gas-Proportionalzählung", nl: "Gas proportionele telling" },
          { en: "Beta decay spectroscopy", es: "Espectroscopía de desintegración beta", de: "Beta-Zerfalls-Spektroskopie", nl: "Beta verval spectroscopie" }
        ],
        correct: 0,
        explanation: {
          en: "Accelerator Mass Spectrometry (AMS) can measure radiocarbon with precision better than ±25 years using only milligram quantities of carbon, enabling detailed studies of deep water ventilation ages and carbon cycling timescales in the ocean interior.",
          es: "La Espectrometría de Masas con Acelerador (AMS) puede medir radiocarbono con precisión mejor que ±25 años usando solo cantidades de miligramo de carbono, permitiendo estudios detallados de edades de ventilación de agua profunda y escalas de tiempo de ciclos de carbono en el interior oceánico.",
          de: "Beschleuniger-Massenspektrometrie (AMS) kann Radiokarbon mit einer Genauigkeit besser als ±25 Jahre unter Verwendung nur von Milligramm-Mengen Kohlenstoff messen und ermöglicht detaillierte Studien der Tiefwasser-Ventilationsalter und Kohlenstoff-Kreislauf-Zeitskalen im Ozeaninneren.",
          nl: "Versneller Massaspectrometrie (AMS) kan radiokoolstof meten met precisie beter dan ±25 jaar met slechts milligram hoeveelheden koolstof, wat gedetailleerde studies mogelijk maakt van diep water ventilatie leeftijden en koolstofcyclus tijdschalen in het oceaan binnenste."
        }
      },
      {
        question: {
          en: "What computational approach is used to model the nonlinear dynamics of double-diffusive convection in thermohaline staircases?",
          es: "¿Qué enfoque computacional se usa para modelar la dinámica no lineal de convección de doble difusión en escaleras termohalinas?",
          de: "Welcher Rechenansatz wird verwendet, um die nichtlineare Dynamik doppelt-diffusiver Konvektion in thermohalinen Treppen zu modellieren?",
          nl: "Welke computationele benadering wordt gebruikt om de niet-lineaire dynamiek van dubbel-diffusieve convectie in thermohaliene trappen te modelleren?"
        },
        options: [
          { en: "Direct numerical simulation with finite difference schemes for salt-fingering instabilities", es: "Simulación numérica directa con esquemas de diferencias finitas para inestabilidades de dedos salinos", de: "Direkte numerische Simulation mit finite Differenzen-Schemata für Salzfinger-Instabilitäten", nl: "Directe numerieke simulatie met eindige verschil schema's voor zoutvinger instabiliteiten" },
          { en: "Linear stability analysis only", es: "Solo análisis de estabilidad lineal", de: "Nur lineare Stabilitätsanalyse", nl: "Alleen lineaire stabiliteitsanalyse" },
          { en: "Empirical parameterizations", es: "Parametrizaciones empíricas", de: "Empirische Parametrisierungen", nl: "Empirische parametrisaties" },
          { en: "One-dimensional diffusion models", es: "Modelos de difusión unidimensional", de: "Eindimensionale Diffusionsmodelle", nl: "Eendimensionale diffusie modellen" }
        ],
        correct: 0,
        explanation: {
          en: "Direct numerical simulation with high-resolution finite difference schemes can resolve the small-scale salt-fingering and diffusive convection instabilities that create thermohaline staircases, capturing the nonlinear interactions between temperature and salinity gradients.",
          es: "La simulación numérica directa con esquemas de diferencias finitas de alta resolución puede resolver las inestabilidades de pequeña escala de dedos salinos y convección difusiva que crean escaleras termohalinas, capturando las interacciones no lineales entre gradientes de temperatura y salinidad.",
          de: "Direkte numerische Simulation mit hochauflösenden finite Differenzen-Schemata kann die kleinskaligen Salzfinger- und diffusiven Konvektions-Instabilitäten auflösen, die thermohaline Treppen erzeugen und die nichtlinearen Wechselwirkungen zwischen Temperatur- und Salzgehaltsgradienten erfassen.",
          nl: "Directe numerieke simulatie met hoge-resolutie eindige verschil schema's kan de kleinschalige zoutvinger en diffusieve convectie instabiliteiten oplossen die thermohaliene trappen creëren, waarbij de niet-lineaire interacties tussen temperatuur en zoutgehalte gradiënten worden gevangen."
        }
      },
      {
        question: {
          en: "Which theoretical framework describes the coupling between benthic and pelagic biogeochemical processes in continental margin sediments?",
          es: "¿Qué marco teórico describe el acoplamiento entre procesos biogeoquímicos bentónicos y pelágicos en sedimentos de margen continental?",
          de: "Welcher theoretische Rahmen beschreibt die Kopplung zwischen benthischen und pelagischen biogeochemischen Prozessen in Kontinentalrand-Sedimenten?",
          nl: "Welk theoretisch raamwerk beschrijft de koppeling tussen benthische en pelagische biogeochemische processen in continentale rand sedimenten?"
        },
        options: [
          { en: "Benthic-pelagic coupling models with porewater-overlying water exchange", es: "Modelos de acoplamiento bentónico-pelágico con intercambio agua de poro-agua superpuesta", de: "Benthisch-pelagische Kopplungsmodelle mit Porenwasser-Überlagerungswasser-Austausch", nl: "Benthisch-pelagische koppeling modellen met poriewater-bovenliggend water uitwisseling" },
          { en: "Surface water productivity models only", es: "Solo modelos de productividad de agua superficial", de: "Nur Oberflächenwasser-Produktivitätsmodelle", nl: "Alleen oppervlakte water productiviteit modellen" },
          { en: "Isolated sediment diagenesis models", es: "Modelos aislados de diagénesis de sedimentos", de: "Isolierte Sediment-Diagenese-Modelle", nl: "Geïsoleerde sediment diagenese modellen" },
          { en: "Water column chemistry only", es: "Solo química de columna de agua", de: "Nur Wassersäulen-Chemie", nl: "Alleen waterkolom chemie" }
        ],
        correct: 0,
        explanation: {
          en: "Benthic-pelagic coupling models integrate sediment diagenesis with water column biogeochemistry, accounting for organic matter flux to sediments, porewater chemistry, and exchange processes that affect nutrient cycling and oxygen consumption in continental margin environments.",
          es: "Los modelos de acoplamiento bentónico-pelágico integran diagénesis de sedimentos con biogeoquímica de columna de agua, considerando flujo de materia orgánica a sedimentos, química de agua de poro y procesos de intercambio que afectan ciclos de nutrientes y consumo de oxígeno en ambientes de margen continental.",
          de: "Benthisch-pelagische Kopplungsmodelle integrieren Sediment-Diagenese mit Wassersäulen-Biogeochemie unter Berücksichtigung des organischen Materieflusses zu Sedimenten, Porenwasser-Chemie und Austauschprozessen, die Nährstoffkreisläufe und Sauerstoffverbrauch in Kontinentalrand-Umgebungen beeinflussen.",
          nl: "Benthisch-pelagische koppeling modellen integreren sediment diagenese met waterkolom biogeochemie, waarbij rekening wordt gehouden met organische materie flux naar sedimenten, poriewater chemie en uitwisselingsprocessen die nutriënt cycli en zuurstofverbruik in continentale rand omgevingen beïnvloeden."
        }
      },
      {
        question: {
          en: "What advanced technique measures the stable isotope composition of individual amino acids to trace marine food web dynamics and trophic structure?",
          es: "¿Qué técnica avanzada mide la composición de isótopos estables de aminoácidos individuales para rastrear dinámicas de red alimentaria marina y estructura trófica?",
          de: "Welche fortgeschrittene Technik misst die stabile Isotopenzusammensetzung einzelner Aminosäuren zur Verfolgung mariner Nahrungsnetz-Dynamiken und trophischer Struktur?",
          nl: "Welke geavanceerde techniek meet de stabiele isotoop samenstelling van individuele aminozuren om mariene voedselweb dynamiek en trofische structuur te traceren?"
        },
        options: [
          { en: "Compound-specific isotope analysis of amino acids (CSIA-AA)", es: "Análisis de isótopos específicos de compuestos de aminoácidos (CSIA-AA)", de: "Verbindungsspezifische Isotopenanalyse von Aminosäuren (CSIA-AA)", nl: "Verbindingsspecifieke isotoop analyse van aminozuren (CSIA-AA)" },
          { en: "Bulk tissue isotope analysis", es: "Análisis de isótopos de tejido a granel", de: "Bulk-Gewebe-Isotopen-Analyse", nl: "Bulk weefsel isotoop analyse" },
          { en: "Fatty acid analysis", es: "Análisis de ácidos grasos", de: "Fettsäure-Analyse", nl: "Vetzuur analyse" },
          { en: "Total nitrogen content measurement", es: "Medición de contenido total de nitrógeno", de: "Gesamtstickstoff-Gehaltsmessung", nl: "Totaal stikstof inhoud meting" }
        ],
        correct: 0,
        explanation: {
          en: "CSIA-AA provides trophic position estimates independent of baseline isotope values and can distinguish between different nitrogen sources, making it a powerful tool for understanding marine food web structure and biogeochemical processes in diverse oceanic environments.",
          es: "CSIA-AA proporciona estimaciones de posición trófica independientes de valores isotópicos de línea base y puede distinguir entre diferentes fuentes de nitrógeno, convirtiéndolo en una herramienta poderosa para entender estructura de red alimentaria marina y procesos biogeoquímicos en diversos ambientes oceánicos.",
          de: "CSIA-AA liefert trophische Positionsschätzungen unabhängig von Baseline-Isotopenwerten und kann zwischen verschiedenen Stickstoffquellen unterscheiden, was es zu einem mächtigen Werkzeug für das Verständnis mariner Nahrungsnetz-Struktur und biogeochemischer Prozesse in verschiedenen ozeanischen Umgebungen macht.",
          nl: "CSIA-AA biedt trofische positie schattingen onafhankelijk van baseline isotoop waarden en kan onderscheid maken tussen verschillende stikstofbronnen, wat het een krachtig instrument maakt voor het begrijpen van mariene voedselweb structuur en biogeochemische processen in diverse oceanische omgevingen."
        }
      },
      {
        question: {
          en: "Which computational method is used to simulate the three-dimensional structure of internal wave fields generated by oscillating topography?",
          es: "¿Qué método computacional se usa para simular la estructura tridimensional de campos de ondas internas generados por topografía oscilante?",
          de: "Welche Berechnungsmethode wird verwendet, um die dreidimensionale Struktur interner Wellenfelder zu simulieren, die durch oszillierende Topographie erzeugt werden?",
          nl: "Welke computationele methode wordt gebruikt om de driedimensionale structuur van interne golfvelden te simuleren die worden gegenereerd door oscillerende topografie?"
        },
        options: [
          { en: "Non-hydrostatic Boussinesq equations with immersed boundary methods", es: "Ecuaciones no hidrostáticas de Boussinesq con métodos de frontera inmersed", de: "Nicht-hydrostatische Boussinesq-Gleichungen mit eingebetteten Randmethoden", nl: "Niet-hydrostatische Boussinesq vergelijkingen met ingesloten grens methoden" },
          { en: "Shallow water equations", es: "Ecuaciones de aguas someras", de: "Flachwassergleichungen", nl: "Ondiep water vergelijkingen" },
          { en: "Linearized wave equations", es: "Ecuaciones de ondas linearizadas", de: "Linearisierte Wellengleichungen", nl: "Lineaire golf vergelijkingen" },
          { en: "Hydrostatic primitive equations", es: "Ecuaciones primitivas hidrostáticas", de: "Hydrostatische primitive Gleichungen", nl: "Hydrostatische primitieve vergelijkingen" }
        ],
        correct: 0,
        explanation: {
          en: "Non-hydrostatic Boussinesq equations with immersed boundary methods can accurately simulate internal wave generation, propagation, and nonlinear steepening over complex topography while properly representing the three-dimensional wave field structure.",
          es: "Las ecuaciones no hidrostáticas de Boussinesq con métodos de frontera inmersos pueden simular con precisión generación, propagación y empinamiento no lineal de ondas internas sobre topografía compleja mientras representan apropiadamente la estructura tridimensional del campo de ondas.",
          de: "Nicht-hydrostatische Boussinesq-Gleichungen mit eingebetteten Randmethoden können interne Wellenerzeugung, -ausbreitung und nichtlineare Versteilerung über komplexer Topographie genau simulieren, während sie die dreidimensionale Wellenfeldstruktur richtig darstellen.",
          nl: "Niet-hydrostatische Boussinesq vergelijkingen met ingesloten grens methoden kunnen interne golf generatie, voortplanting en niet-lineaire versteiling over complexe topografie nauwkeurig simuleren terwijl de driedimensionale golf veld structuur correct wordt weergegeven."
        }
      },
      {
        question: {
          en: "What theoretical framework describes the interaction between surface waves and internal waves through wave-wave resonance mechanisms?",
          es: "¿Qué marco teórico describe la interacción entre ondas superficiales y ondas internas a través de mecanismos de resonancia onda-onda?",
          de: "Welcher theoretische Rahmen beschreibt die Wechselwirkung zwischen Oberflächenwellen und internen Wellen durch Welle-Welle-Resonanzmechanismen?",
          nl: "Welk theoretisch raamwerk beschrijft de interactie tussen oppervlaktegolven en interne golven door golf-golf resonantie mechanismen?"
        },
        options: [
          { en: "Weakly nonlinear interaction theory with triad resonance conditions", es: "Teoría de interacción débilmente no lineal con condiciones de resonancia de tríada", de: "Schwach nichtlineare Wechselwirkungstheorie mit Triad-Resonanzbedingungen", nl: "Zwak niet-lineaire interactie theorie met triade resonantie voorwaarden" },
          { en: "Linear superposition principle", es: "Principio de superposición lineal", de: "Lineares Superpositionsprinzip", nl: "Lineaire superpositie principe" },
          { en: "Ray tracing approximation", es: "Aproximación de trazado de rayos", de: "Strahlverfolgungsapproximation", nl: "Straaltracing benadering" },
          { en: "Geometric optics theory", es: "Teoría de óptica geométrica", de: "Geometrische Optik-Theorie", nl: "Geometrische optica theorie" }
        ],
        correct: 0,
        explanation: {
          en: "Weakly nonlinear interaction theory describes how surface gravity waves can resonantly interact with internal waves through triad resonance conditions, where the frequency and wavenumber matching conditions allow energy transfer between different wave modes.",
          es: "La teoría de interacción débilmente no lineal describe cómo las ondas de gravedad superficial pueden interactuar resonantemente con ondas internas a través de condiciones de resonancia de tríada, donde las condiciones de coincidencia de frecuencia y número de onda permiten transferencia de energía entre diferentes modos de onda.",
          de: "Schwach nichtlineare Wechselwirkungstheorie beschreibt, wie Oberflächenschwerkraftwellen resonant mit internen Wellen durch Triad-Resonanzbedingungen interagieren können, wo Frequenz- und Wellenzahl-Anpassungsbedingungen Energieübertragung zwischen verschiedenen Wellenmoden ermöglichen.",
          nl: "Zwak niet-lineaire interactie theorie beschrijft hoe oppervlakte zwaartekracht golven resonant kunnen interacteren met interne golven door triade resonantie voorwaarden, waarbij de frequentie en golfnummer matchings voorwaarden energieoverdracht tussen verschillende golf modi mogelijk maken."
        }
      },
      {
        question: {
          en: "What is the primary mechanism controlling the efficiency of cross-isopycnal mixing in the ocean interior?",
          es: "¿Cuál es el mecanismo principal que controla la eficiencia de la mezcla cross-isopicnal en el interior oceánico?",
          de: "Was ist der primäre Mechanismus, der die Effizienz der cross-isopyknalen Vermischung im Ozeaninneren kontrolliert?",
          nl: "Wat is het primaire mechanisme dat de efficiëntie van cross-isopycnale menging in het oceaan interieur controleert?"
        },
        options: [
          { en: "Double-diffusive instabilities driven by differential molecular diffusivity", es: "Inestabilidades de doble difusión impulsadas por difusividad molecular diferencial", de: "Doppelt-diffusive Instabilitäten angetrieben durch differentielle molekulare Diffusivität", nl: "Dubbel-diffusieve instabiliteiten aangedreven door differentiële moleculaire diffusiviteit" },
          { en: "Turbulent cascade from surface forcing", es: "Cascada turbulenta de forzamiento superficial", de: "Turbulente Kaskade von Oberflächenantrieb", nl: "Turbulente cascade van oppervlak forcing" },
          { en: "Internal wave breaking at critical layers", es: "Ruptura de ondas internas en capas críticas", de: "Interne Wellenbrechen an kritischen Schichten", nl: "Interne golfbreking bij kritieke lagen" },
          { en: "Geostrophic turbulence from mesoscale eddies", es: "Turbulencia geostrófic de remolinos de mesoescala", de: "Geostrophische Turbulenz von mesoskaligen Wirbeln", nl: "Geostrofische turbulentie van mesoschalige wervelingen" }
        ],
        correct: 0,
        explanation: {
          en: "Double-diffusive instabilities, including salt fingering and diffusive convection, are the primary mechanism for cross-isopycnal mixing in the stratified ocean interior. These occur when the molecular diffusivity of heat exceeds that of salt, creating density inversions that drive convective overturning across isopycnal surfaces.",
          es: "Las inestabilidades de doble difusión, incluyendo dedos de sal y convección difusiva, son el mecanismo principal para la mezcla cross-isopicnal en el interior oceánico estratificado. Estas ocurren cuando la difusividad molecular del calor excede la de la sal.",
          de: "Doppelt-diffusive Instabilitäten, einschließlich Salzfingering und diffusiver Konvektion, sind der primäre Mechanismus für cross-isopyknale Vermischung im geschichteten Ozeaninneren. Diese treten auf, wenn die molekulare Diffusivität von Wärme die von Salz überschreitet.",
          nl: "Dubbel-diffusieve instabiliteiten, inclusief zout vingering en diffusieve convectie, zijn het primaire mechanisme voor cross-isopycnale menging in het gestratificeerde oceaan interieur. Deze treden op wanneer de moleculaire diffusiviteit van warmte die van zout overschrijdt."
        }
      },
      {
        question: {
          en: "In advanced ocean modeling, what is the primary challenge of implementing non-hydrostatic dynamics for submesoscale processes?",
          es: "En modelado oceánico avanzado, ¿cuál es el desafío principal de implementar dinámica no hidrostática para procesos submesoscalares?",
          de: "In der fortgeschrittenen Ozeanmodellierung, was ist die primäre Herausforderung bei der Implementierung nicht-hydrostatischer Dynamik für submesoskalige Prozesse?",
          nl: "In geavanceerde oceaan modellering, wat is de primaire uitdaging van het implementeren van niet-hydrostatische dynamiek voor submesoschalige processen?"
        },
        options: [
          { en: "Computational cost of solving elliptic pressure equations at high resolution", es: "Costo computacional de resolver ecuaciones de presión elípticas a alta resolución", de: "Rechnenaufwand zur Lösung elliptischer Druckgleichungen bei hoher Auflösung", nl: "Computationele kosten van het oplossen van elliptische druk vergelijkingen bij hoge resolutie" },
          { en: "Numerical instability from explicit time stepping", es: "Inestabilidad numérica de pasos de tiempo explícitos", de: "Numerische Instabilität durch explizite Zeitschritte", nl: "Numerieke instabiliteit van expliciete tijd stappen" },
          { en: "Difficulty in parameterizing subgrid-scale physics", es: "Dificultad en parametrizar física de subescala de rejilla", de: "Schwierigkeit bei der Parametrisierung subgitterskaliger Physik", nl: "Moeilijkheid bij het parametriseren van subgrid-schaal fysica" },
          { en: "Boundary condition specification at ocean surface", es: "Especificación de condiciones de frontera en superficie oceánica", de: "Randbedingungsspezifikation an der Ozeanoberfläche", nl: "Randvoorwaarde specificatie aan oceaan oppervlak" }
        ],
        correct: 0,
        explanation: {
          en: "The primary challenge is the computational cost of solving the elliptic pressure equation that arises in non-hydrostatic formulations. At the high resolutions needed for submesoscale processes (O(100m)), the pressure solver becomes computationally prohibitive, requiring advanced numerical techniques and massive computational resources.",
          es: "El desafío principal es el costo computacional de resolver la ecuación de presión elíptica que surge en formulaciones no hidrostáticas. A las altas resoluciones necesarias para procesos submesoscalares (O(100m)), el solucionador de presión se vuelve computacionalmente prohibitivo.",
          de: "Die primäre Herausforderung sind die Rechenkosten zur Lösung der elliptischen Druckgleichung, die in nicht-hydrostatischen Formulierungen auftritt. Bei den hohen Auflösungen, die für submesoskalige Prozesse benötigt werden (O(100m)), wird der Drucklöser rechnerisch unerschwinglich.",
          nl: "De primaire uitdaging zijn de computationele kosten van het oplossen van de elliptische druk vergelijking die ontstaat in niet-hydrostatische formulaties. Bij de hoge resoluties die nodig zijn voor submesoschalige processen (O(100m)) wordt de druk oplosser computationeel onbetaalbaar."
        }
      },
      {
        question: {
          en: "What is the fundamental mechanism behind the Antarctic Circumpolar Current's unique transport characteristics?",
          es: "¿Cuál es el mecanismo fundamental detrás de las características únicas de transporte de la Corriente Circumpolar Antártica?",
          de: "Was ist der fundamentale Mechanismus hinter den einzigartigen Transportcharakteristiken des Antarktischen Zirkumpolarstroms?",
          nl: "Wat is het fundamentele mechanisme achter de unieke transport karakteristieken van de Antarctische Circumpolaire Stroom?"
        },
        options: [
          { en: "Absence of meridional boundaries allows unlimited zonal transport", es: "Ausencia de fronteras meridionales permite transporte zonal ilimitado", de: "Fehlen meridionaler Grenzen ermöglicht unbegrenzten zonalen Transport", nl: "Afwezigheid van meridionale grenzen maakt onbeperkt zonaal transport mogelijk" },
          { en: "Strong thermohaline forcing drives deep circulation", es: "Forzamiento termohalino fuerte impulsa circulación profunda", de: "Starker thermohaliner Antrieb treibt tiefe Zirkulation an", nl: "Sterke thermohaliene forcing drijft diepe circulatie aan" },
          { en: "Topographic steering by mid-ocean ridges", es: "Dirección topográfica por dorsales oceánicas medias", de: "Topographische Lenkung durch mittelozeanische Rücken", nl: "Topografische sturing door mid-oceaan ruggen" },
          { en: "Seasonal wind variations create transport anomalies", es: "Variaciones estacionales del viento crean anomalías de transporte", de: "Saisonale Windvariationen erzeugen Transportanomalien", nl: "Seizoens wind variaties creëren transport anomalieën" }
        ],
        correct: 0,
        explanation: {
          en: "The ACC is unique because it flows around Antarctica without meridional barriers, allowing the transport to be determined by the integrated wind stress around the entire circumpolar path rather than being constrained by western boundary currents like other ocean basins. This makes it the largest current system in the world.",
          es: "La ACC es única porque fluye alrededor de la Antártida sin barreras meridionales, permitiendo que el transporte sea determinado por el estrés del viento integrado alrededor de todo el camino circumpolar en lugar de estar restringido por corrientes de frontera occidental.",
          de: "Der ACC ist einzigartig, weil er um die Antarktis fließt ohne meridionale Barrieren, wodurch der Transport durch die integrierte Windschubspannung um den gesamten zirkumpolaren Pfad bestimmt wird, anstatt durch westliche Grenzströme beschränkt zu sein.",
          nl: "De ACC is uniek omdat het rond Antarctica stroomt zonder meridionale barrières, waardoor het transport wordt bepaald door de geïntegreerde windstress rond het gehele circumpolaire pad in plaats van beperkt te worden door westelijke grensstromen."
        }
      },
      {
        question: {
          en: "In ocean wave theory, what is the fundamental limitation of the WKB (Wentzel-Kramers-Brillouin) approximation for internal wave propagation?",
          es: "En teoría de ondas oceánicas, ¿cuál es la limitación fundamental de la aproximación WKB (Wentzel-Kramers-Brillouin) para propagación de ondas internas?",
          de: "In der Ozeanwellentheorie, was ist die fundamentale Begrenzung der WKB (Wentzel-Kramers-Brillouin) Näherung für die interne Wellenausbreitung?",
          nl: "In oceaangolf theorie, wat is de fundamentele beperking van de WKB (Wentzel-Kramers-Brillouin) benadering voor interne golfpropagatie?"
        },
        options: [
          { en: "Breaks down at turning points where vertical wavenumber approaches zero", es: "Se rompe en puntos de giro donde el número de onda vertical se acerca a cero", de: "Bricht zusammen an Wendepunkten, wo die vertikale Wellenzahl sich null nähert", nl: "Breekt af bij keerpunten waar verticaal golfnummer nul benadert" },
          { en: "Cannot handle frequency-dependent dispersion relations", es: "No puede manejar relaciones de dispersión dependientes de frecuencia", de: "Kann frequenzabhängige Dispersionsbeziehungen nicht handhaben", nl: "Kan frequentie-afhankelijke dispersie relaties niet handhaven" },
          { en: "Fails for waves with large amplitude", es: "Falla para ondas con gran amplitud", de: "Versagt bei Wellen mit großer Amplitude", nl: "Faalt voor golven met grote amplitude" },
          { en: "Requires constant background stratification", es: "Requiere estratificación de fondo constante", de: "Erfordert konstante Hintergrundschichtung", nl: "Vereist constante achtergrond stratificatie" }
        ],
        correct: 0,
        explanation: {
          en: "The WKB approximation assumes slowly varying medium properties and breaks down at turning points where the vertical wavenumber m² = (N²-ω²)k²/ω² approaches zero. At these critical levels, the approximation fails and wave reflection or mode conversion occurs, requiring more sophisticated ray theory or full wave solutions.",
          es: "La aproximación WKB asume propiedades del medio que varían lentamente y se rompe en puntos de giro donde el número de onda vertical m² = (N²-ω²)k²/ω² se acerca a cero. En estos niveles críticos, la aproximación falla y ocurre reflexión de ondas.",
          de: "Die WKB-Näherung nimmt langsam variierende Mediumeigenschaften an und bricht an Wendepunkten zusammen, wo die vertikale Wellenzahl m² = (N²-ω²)k²/ω² sich null nähert. An diesen kritischen Ebenen versagt die Näherung und Wellenreflexion tritt auf.",
          nl: "De WKB-benadering veronderstelt langzaam variërende medium eigenschappen en breekt af bij keerpunten waar het verticale golfnummer m² = (N²-ω²)k²/ω² nul benadert. Bij deze kritieke niveaus faalt de benadering en treedt golfreflectie op."
        }
      },
      {
        question: {
          en: "What is the primary physical mechanism responsible for the generation of lee waves downstream of seamounts?",
          es: "¿Cuál es el mecanismo físico principal responsable de la generación de ondas de sotavento aguas abajo de montes submarinos?",
          de: "Was ist der primäre physikalische Mechanismus, der für die Erzeugung von Lee-Wellen stromabwärts von Tiefseeberg verantwortlich ist?",
          nl: "Wat is het primaire fysische mechanisme verantwoordelijk voor de generatie van lee golven stroomafwaarts van zeeberg?"
        },
        options: [
          { en: "Hydraulic control and flow separation over topographic obstacles", es: "Control hidráulico y separación de flujo sobre obstáculos topográficos", de: "Hydraulische Kontrolle und Strömungstrennung über topographischen Hindernissen", nl: "Hydraulische controle en stroming scheiding over topografische obstakels" },
          { en: "Tidal rectification processes", es: "Procesos de rectificación de mareas", de: "Gezeitengleichrichtungsprozesse", nl: "Getij rectificatie processen" },
          { en: "Baroclinic instability development", es: "Desarrollo de inestabilidad baroclínica", de: "Barokline Instabilitätsentwicklung", nl: "Baroclinische instabiliteit ontwikkeling" },
          { en: "Ekman layer dynamics", es: "Dinámica de capa de Ekman", de: "Ekman-Schicht-Dynamik", nl: "Ekman laag dynamiek" }
        ],
        correct: 0,
        explanation: {
          en: "Lee waves downstream of seamounts are generated through hydraulic control and flow separation mechanisms. When stratified flow encounters topographic obstacles, it can undergo hydraulic jumps, flow separation, and the radiation of internal gravity waves downstream. The flow dynamics depend on the Froude number and topographic steepness parameters.",
          es: "Las ondas de sotavento aguas abajo de montes submarinos se generan a través de mecanismos de control hidráulico y separación de flujo. Cuando el flujo estratificado encuentra obstáculos topográficos, puede experimentar saltos hidráulicos, separación de flujo.",
          de: "Lee-Wellen stromabwärts von Tiefseeberg werden durch hydraulische Kontrolle und Strömungstrennungsmechanismen erzeugt. Wenn geschichtete Strömung auf topographische Hindernisse trifft, kann sie hydraulische Sprünge, Strömungstrennung erleben.",
          nl: "Lee golven stroomafwaarts van zeebergen worden gegenereerd door hydraulische controle en stroming scheiding mechanismen. Wanneer gestratificeerde stroming topografische obstakels tegenkomt, kan het hydraulische sprongen, stroming scheiding ondergaan."
        }
      },
      {
        question: {
          en: "In the context of ocean color remote sensing, what is the primary source of uncertainty in chlorophyll-a retrievals in Case II waters?",
          es: "En el contexto de detección remota de color oceánico, ¿cuál es la fuente principal de incertidumbre en recuperaciones de clorofila-a en aguas Caso II?",
          de: "Im Kontext der Ozeanfarbfernerkundung, was ist die primäre Unsicherheitsquelle bei Chlorophyll-a-Abrufen in Gewässern Fall II?",
          nl: "In de context van oceaan kleur remote sensing, wat is de primaire bron van onzekerheid in chlorofyl-a retrievals in Case II wateren?"
        },
        options: [
          { en: "Interference from colored dissolved organic matter and suspended sediments", es: "Interferencia de materia orgánica disuelta coloreada y sedimentos suspendidos", de: "Störungen durch gefärbte gelöste organische Substanz und suspendierte Sedimente", nl: "Interferentie van gekleurde opgeloste organische materie en gesuspendeerde sedimenten" },
          { en: "Atmospheric correction algorithms", es: "Algoritmos de corrección atmosférica", de: "Atmosphärische Korrekturalgorithmen", nl: "Atmosferische correctie algoritmen" },
          { en: "Sun glint contamination", es: "Contaminación por brillo solar", de: "Sonnenglanz-Kontamination", nl: "Zon glans contaminatie" },
          { en: "Sensor calibration drift", es: "Deriva de calibración del sensor", de: "Sensorkalibrierungsdrift", nl: "Sensor kalibratie drift" }
        ],
        correct: 0,
        explanation: {
          en: "In Case II waters (coastal and turbid waters), colored dissolved organic matter (CDOM) and suspended sediments significantly absorb and scatter light in the same spectral regions used for chlorophyll retrieval. This creates ambiguity in standard blue-green ratio algorithms, requiring more sophisticated bio-optical models and additional spectral channels for accurate chlorophyll estimation.",
          es: "En aguas Caso II (aguas costeras y turbias), la materia orgánica disuelta coloreada (CDOM) y sedimentos suspendidos absorben y dispersan significativamente luz en las mismas regiones espectrales usadas para recuperación de clorofila.",
          de: "In Gewässern Fall II (Küsten- und trübe Gewässer) absorbieren und streuen gefärbte gelöste organische Substanz (CDOM) und suspendierte Sedimente signifikant Licht in denselben spektralen Bereichen, die für Chlorophyll-Abruf verwendet werden.",
          nl: "In Case II wateren (kust- en troebele wateren) absorberen en verstrooien gekleurde opgeloste organische materie (CDOM) en gesuspendeerde sedimenten aanzienlijk licht in dezelfde spectrale regio's gebruikt voor chlorofyl retrieval."
        }
      },
      {
        question: {
          en: "What is the fundamental mechanism behind the formation of oceanic fronts through confluent flow patterns?",
          es: "¿Cuál es el mecanismo fundamental detrás de la formación de frentes oceánicos a través de patrones de flujo confluentes?",
          de: "Was ist der fundamentale Mechanismus hinter der Bildung ozeanischer Fronten durch konfluente Strömungsmuster?",
          nl: "Wat is het fundamentele mechanisme achter de vorming van oceanische fronten door confluente stroming patronen?"
        },
        options: [
          { en: "Horizontal convergence concentrates tracers and creates sharp gradients", es: "Convergencia horizontal concentra trazadores y crea gradientes agudos", de: "Horizontale Konvergenz konzentriert Tracer und schafft scharfe Gradienten", nl: "Horizontale convergentie concentreert tracers en creëert scherpe gradiënten" },
          { en: "Vertical mixing homogenizes water column properties", es: "Mezcla vertical homogeniza propiedades de columna de agua", de: "Vertikale Vermischung homogenisiert Wassersäuleneigenschaften", nl: "Verticale menging homogeniseert waterkolom eigenschappen" },
          { en: "Bottom friction slows down current velocities", es: "Fricción del fondo ralentiza velocidades de corriente", de: "Bodenreibung verlangsamt Strömungsgeschwindigkeiten", nl: "Bodemwrijving vertraagt stroming snelheden" },
          { en: "Wind stress creates surface divergence", es: "Estrés del viento crea divergencia superficial", de: "Windschubspannung schafft Oberflächendivergenz", nl: "Windstress creëert oppervlakte divergentie" }
        ],
        correct: 0,
        explanation: {
          en: "Oceanic fronts form through confluent flow patterns where horizontal convergence acts to concentrate tracers (temperature, salinity, nutrients, biologics) into narrow zones, creating sharp horizontal gradients. This frontogenesis process is balanced by mixing and diffusion that tends to weaken the gradients, resulting in persistent frontal structures.",
          es: "Los frentes oceánicos se forman a través de patrones de flujo confluentes donde la convergencia horizontal actúa para concentrar trazadores (temperatura, salinidad, nutrientes, biológicos) en zonas estrechas, creando gradientes horizontales agudos.",
          de: "Ozeanische Fronten bilden sich durch konfluente Strömungsmuster, wo horizontale Konvergenz darauf wirkt, Tracer (Temperatur, Salzgehalt, Nährstoffe, Biologika) in schmalen Zonen zu konzentrieren und scharfe horizontale Gradienten zu schaffen.",
          nl: "Oceanische fronten vormen zich door confluente stroming patronen waar horizontale convergentie werkt om tracers (temperatuur, saliniteit, voedingsstoffen, biologisch) te concentreren in smalle zones, scherpe horizontale gradiënten creërend."
        }
      },
      {
        question: {
          en: "In advanced turbulence modeling for oceanic flows, what is the primary limitation of the k-ε (k-epsilon) closure model?",
          es: "En modelado avanzado de turbulencia para flujos oceánicos, ¿cuál es la limitación principal del modelo de cierre k-ε (k-épsilon)?",
          de: "In der fortgeschrittenen Turbulenzmodellierung für ozeanische Strömungen, was ist die primäre Begrenzung des k-ε (k-Epsilon) Verschlussmodells?",
          nl: "In geavanceerde turbulentie modellering voor oceanische stromingen, wat is de primaire beperking van het k-ε (k-epsilon) sluitingsmodel?"
        },
        options: [
          { en: "Cannot accurately represent stably stratified flows and buoyancy effects", es: "No puede representar con precisión flujos establemente estratificados y efectos de flotabilidad", de: "Kann stabil geschichtete Strömungen und Auftriebseffekte nicht genau darstellen", nl: "Kan stabiel gestratificeerde stromingen en drijfkracht effecten niet nauwkeurig representeren" },
          { en: "Requires too many computational resources", es: "Requiere demasiados recursos computacionales", de: "Erfordert zu viele Rechenressourcen", nl: "Vereist te veel computationele bronnen" },
          { en: "Cannot handle three-dimensional flow fields", es: "No puede manejar campos de flujo tridimensionales", de: "Kann dreidimensionale Strömungsfelder nicht handhaben", nl: "Kan driedimensionale stroming velden niet handhaven" },
          { en: "Fails at low Reynolds numbers", es: "Falla a números de Reynolds bajos", de: "Versagt bei niedrigen Reynolds-Zahlen", nl: "Faalt bij lage Reynolds getallen" }
        ],
        correct: 0,
        explanation: {
          en: "The k-ε model was developed for neutrally buoyant flows and performs poorly in stably stratified oceanic conditions. It cannot properly account for the suppression of turbulent mixing by stable stratification, leading to overprediction of mixing rates in stratified environments. This is a critical limitation for ocean modeling where density stratification is ubiquitous.",
          es: "El modelo k-ε fue desarrollado para flujos neutros en flotabilidad y funciona mal en condiciones oceánicas establemente estratificadas. No puede explicar apropiadamente la supresión de mezcla turbulenta por estratificación estable.",
          de: "Das k-ε-Modell wurde für neutral auftriebsfreie Strömungen entwickelt und funktioniert schlecht in stabil geschichteten ozeanischen Bedingungen. Es kann die Unterdrückung turbulenter Vermischung durch stabile Schichtung nicht richtig berücksichtigen.",
          nl: "Het k-ε model werd ontwikkeld voor neutraal drijvende stromingen en presteert slecht in stabiel gestratificeerde oceanische omstandigheden. Het kan de onderdrukking van turbulente menging door stabiele stratificatie niet juist verantwoorden."
        }
      },
      {
        question: {
          en: "What is the primary mechanism controlling the depth of the permanent thermocline in subtropical gyres?",
          es: "¿Cuál es el mecanismo principal que controla la profundidad de la termoclina permanente en giros subtropicales?",
          de: "Was ist der primäre Mechanismus, der die Tiefe der permanenten Thermokline in subtropischen Wirbeln kontrolliert?",
          nl: "Wat is het primaire mechanisme dat de diepte van de permanente thermocline in subtropische wervelingen controleert?"
        },
        options: [
          { en: "Wind-driven Ekman pumping and geostrophic adjustment", es: "Bombeo de Ekman impulsado por viento y ajuste geostrófic", de: "Windgetriebenes Ekman-Pumping und geostrophische Anpassung", nl: "Windgedreven Ekman-pomping en geostrofische aanpassing" },
          { en: "Thermohaline circulation patterns", es: "Patrones de circulación termohalina", de: "Thermohaline Zirkulationsmuster", nl: "Thermohaliene circulatie patronen" },
          { en: "Seasonal heating and cooling cycles", es: "Ciclos estacionales de calentamiento y enfriamiento", de: "Saisonale Erwärmungs- und Abkühlungszyklen", nl: "Seizoensgebonden verwarmings- en koelcycli" },
          { en: "Deep convective mixing events", es: "Eventos de mezcla convectiva profunda", de: "Tiefe konvektive Mischungsereignisse", nl: "Diepe convectieve menging gebeurtenissen" }
        ],
        correct: 0,
        explanation: {
          en: "The depth of the permanent thermocline in subtropical gyres is primarily controlled by wind-driven Ekman pumping. Anticyclonic wind stress curl creates downward Ekman pumping, which deepens isopycnals and creates the characteristic dome-shaped thermocline structure. The geostrophic adjustment to this Ekman pumping determines the equilibrium thermocline depth and strength.",
          es: "La profundidad de la termoclina permanente en giros subtropicales está controlada principalmente por bombeo de Ekman impulsado por viento. El rizo de estrés del viento anticiclónico crea bombeo de Ekman hacia abajo, que profundiza isopicnales.",
          de: "Die Tiefe der permanenten Thermokline in subtropischen Wirbeln wird primär durch windgetriebenes Ekman-Pumping kontrolliert. Antizyklonische Windschubspannungsrotation schafft abwärts gerichtetes Ekman-Pumping, das Isopyknale vertieft.",
          nl: "De diepte van de permanente thermocline in subtropische wervelingen wordt primair gecontroleerd door windgedreven Ekman-pomping. Anticyclonische windstress curl creëert neerwaartse Ekman-pomping, wat isopycnalen verdiept."
        }
      },
      {
        question: {
          en: "In the context of ocean data assimilation, what is the fundamental challenge of combining altimetry data with in-situ temperature profiles?",
          es: "En el contexto de asimilación de datos oceánicos, ¿cuál es el desafío fundamental de combinar datos de altimetría con perfiles de temperatura in-situ?",
          de: "Im Kontext der Ozeandatenassimilation, was ist die fundamentale Herausforderung bei der Kombination von Altimetriedaten mit in-situ Temperaturprofilen?",
          nl: "In de context van oceaan data assimilatie, wat is de fundamentele uitdaging van het combineren van altimetrie data met in-situ temperatuur profielen?"
        },
        options: [
          { en: "Different spatial and temporal sampling patterns create representativity errors", es: "Diferentes patrones de muestreo espacial y temporal crean errores de representatividad", de: "Unterschiedliche räumliche und zeitliche Abtastmuster erzeugen Repräsentativitätsfehler", nl: "Verschillende ruimtelijke en temporele bemonsteringspatronen creëren representativiteitsfouten" },
          { en: "Instrument calibration differences", es: "Diferencias de calibración de instrumentos", de: "Instrumentkalibrierungsunterschiede", nl: "Instrument kalibratie verschillen" },
          { en: "Data transmission delays", es: "Retrasos de transmisión de datos", de: "Datenübertragungsverzögerungen", nl: "Data transmissie vertragingen" },
          { en: "Computational limitations in processing", es: "Limitaciones computacionales en procesamiento", de: "Rechenbegrenzungen bei der Verarbeitung", nl: "Computationele beperkingen in verwerking" }
        ],
        correct: 0,
        explanation: {
          en: "The fundamental challenge is representativity error arising from different spatiotemporal sampling. Altimetry provides synoptic, high-resolution surface information but limited vertical structure, while in-situ profiles give detailed vertical information but sparse horizontal coverage. Combining these requires careful consideration of correlation scales, representativity, and error covariances in the assimilation system.",
          es: "El desafío fundamental es el error de representatividad que surge de diferentes muestreos espaciotemporales. La altimetría proporciona información superficial sinóptica de alta resolución pero estructura vertical limitada, mientras que los perfiles in-situ dan información vertical detallada.",
          de: "Die fundamentale Herausforderung ist Repräsentativitätsfehler, der aus unterschiedlicher raumzeitlicher Abtastung entsteht. Altimetrie bietet synoptische, hochauflösende Oberflächeninformationen aber begrenzte vertikale Struktur.",
          nl: "De fundamentele uitdaging is representativiteitsfout die ontstaat uit verschillende ruimtelijke-temporele bemonstering. Altimetrie biedt synoptische, hoge resolutie oppervlakte informatie maar beperkte verticale structuur."
        }
      },
      {
        question: {
          en: "What is the primary physical mechanism behind the formation of oceanic internal solitary wave trains?",
          es: "¿Cuál es el mecanismo físico principal detrás de la formación de trenes de ondas solitarias internas oceánicas?",
          de: "Was ist der primäre physikalische Mechanismus hinter der Bildung ozeanischer interner solitärer Wellenzüge?",
          nl: "Wat is het primaire fysische mechanisme achter de vorming van oceanische interne solitaire golf treinen?"
        },
        options: [
          { en: "Nonlinear steepening and dispersion balance in weakly nonlinear theory", es: "Empinamiento no lineal y balance de dispersión en teoría débilmente no lineal", de: "Nichtlineare Versteilerung und Dispersionsgleichgewicht in schwach nichtlinearer Theorie", nl: "Niet-lineaire versteiling en dispersie balans in zwak niet-lineaire theorie" },
          { en: "Linear wave superposition effects", es: "Efectos de superposición de ondas lineales", de: "Lineare Wellenüberlagerungseffekte", nl: "Lineaire golf superpositie effecten" },
          { en: "Tidal harmonic generation", es: "Generación de armónicos de marea", de: "Gezeitenharmonische Erzeugung", nl: "Getij harmonische generatie" },
          { en: "Instability of shear flows", es: "Inestabilidad de flujos de cizalladura", de: "Instabilität von Scherströmungen", nl: "Instabiliteit van schering stromingen" }
        ],
        correct: 0,
        explanation: {
          en: "Internal solitary wave trains form through the balance between nonlinear steepening (which tends to make waves break) and dispersive spreading (which tends to flatten them). This balance, described by the Korteweg-de Vries equation or its extensions, leads to the formation of stable solitary wave solutions that can propagate long distances while maintaining their shape and amplitude.",
          es: "Los trenes de ondas solitarias internas se forman a través del balance entre empinamiento no lineal (que tiende a hacer que las ondas se rompan) y dispersión dispersiva (que tiende a aplanarlas). Este balance, descrito por la ecuación Korteweg-de Vries.",
          de: "Interne solitäre Wellenzüge bilden sich durch das Gleichgewicht zwischen nichtlinearer Versteilerung (die Wellen zum Brechen bringt) und dispersiver Ausbreitung (die sie abflacht). Dieses Gleichgewicht, beschrieben durch die Korteweg-de Vries-Gleichung.",
          nl: "Interne solitaire golf treinen vormen zich door de balans tussen niet-lineaire versteiling (die golven doet breken) en dispersieve spreiding (die ze afvlakt). Deze balans, beschreven door de Korteweg-de Vries vergelijking."
        }
      },
      {
        question: {
          en: "In advanced ocean biogeochemistry, what is the primary mechanism controlling the vertical distribution of dissolved oxygen in oxygen minimum zones?",
          es: "En biogeoquímica oceánica avanzada, ¿cuál es el mecanismo principal que controla la distribución vertical de oxígeno disuelto en zonas de mínimo oxígeno?",
          de: "In der fortgeschrittenen Ozeanbiogeochemie, was ist der primäre Mechanismus, der die vertikale Verteilung gelösten Sauerstoffs in Sauerstoffminimumzonen kontrolliert?",
          nl: "In geavanceerde oceaan biogeochemie, wat is het primaire mechanisme dat de verticale distributie van opgelost zuurstof in zuurstofminimum zones controleert?"
        },
        options: [
          { en: "Balance between biological oxygen consumption and physical supply through advection-diffusion", es: "Balance entre consumo biológico de oxígeno y suministro físico a través de advección-difusión", de: "Gleichgewicht zwischen biologischem Sauerstoffverbrauch und physischer Zufuhr durch Advektion-Diffusion", nl: "Balans tussen biologisch zuurstofverbruik en fysieke toevoer door advectie-diffusie" },
          { en: "Temperature control of oxygen solubility", es: "Control de temperatura de solubilidad de oxígeno", de: "Temperaturkontrolle der Sauerstofflöslichkeit", nl: "Temperatuurcontrole van zuurstof oplosbaarheid" },
          { en: "Pressure effects on gas solubility", es: "Efectos de presión en solubilidad de gas", de: "Druckeffekte auf Gaslöslichkeit", nl: "Druk effecten op gas oplosbaarheid" },
          { en: "Photosynthetic oxygen production", es: "Producción fotosintética de oxígeno", de: "Photosynthetische Sauerstoffproduktion", nl: "Fotosynthetische zuurstof productie" }
        ],
        correct: 0,
        explanation: {
          en: "The vertical oxygen distribution in OMZs is controlled by the balance between biological consumption (primarily respiration of sinking organic matter) and physical supply through advection and diffusion. The minimum occurs where consumption exceeds supply, typically in subsurface waters where high organic matter flux meets restricted circulation and ventilation.",
          es: "La distribución vertical de oxígeno en OMZs está controlada por el balance entre consumo biológico (principalmente respiración de materia orgánica que se hunde) y suministro físico a través de advección y difusión.",
          de: "Die vertikale Sauerstoffverteilung in OMZs wird durch das Gleichgewicht zwischen biologischem Verbrauch (hauptsächlich Atmung sinkender organischer Substanz) und physischer Zufuhr durch Advektion und Diffusion kontrolliert.",
          nl: "De verticale zuurstof distributie in OMZs wordt gecontroleerd door de balans tussen biologisch verbruik (voornamelijk ademhaling van zinkend organisch materiaal) en fysieke toevoer door advectie en diffusie."
        }
      },
      {
        question: {
          en: "What is the fundamental mechanism behind the efficiency of meridional overturning circulation in transporting heat poleward?",
          es: "¿Cuál es el mecanismo fundamental detrás de la eficiencia de la circulación de vuelco meridional en transportar calor hacia los polos?",
          de: "Was ist der fundamentale Mechanismus hinter der Effizienz der meridionalen Umwälzzirkulation beim polwärtigen Wärmetransport?",
          nl: "Wat is het fundamentele mechanisme achter de efficiëntie van meridionale omwentelingscirculatie in het poolwaarts transporteren van warmte?"
        },
        options: [
          { en: "Asymmetric water mass transformation creates temperature differences across streamlines", es: "Transformación asimétrica de masas de agua crea diferencias de temperatura a través de líneas de corriente", de: "Asymmetrische Wassermassen-Transformation schafft Temperaturunterschiede über Stromlinien", nl: "Asymmetrische water massa transformatie creëert temperatuur verschillen over stromlijnen" },
          { en: "High velocity gradients increase advective transport", es: "Gradientes de alta velocidad aumentan transporte advectivo", de: "Hohe Geschwindigkeitsgradienten erhöhen advektiven Transport", nl: "Hoge snelheids gradiënten verhogen advectief transport" },
          { en: "Deep water formation concentrates heat content", es: "Formación de agua profunda concentra contenido de calor", de: "Tiefenwasserbildung konzentriert Wärmeinhalt", nl: "Diep water formatie concentreert warmte inhoud" },
          { en: "Surface heating creates thermal gradients", es: "Calentamiento superficial crea gradientes térmicos", de: "Oberflächenerwärmung schafft thermische Gradienten", nl: "Oppervlakte verwarming creëert thermische gradiënten" }
        ],
        correct: 0,
        explanation: {
          en: "The MOC's efficiency in heat transport comes from asymmetric water mass transformation: warm water moves poleward in the upper ocean while cold water returns equatorward at depth. This creates temperature differences across the streamlines of the overturning circulation, maximizing the heat transport per unit volume transport compared to purely horizontal circulation patterns.",
          es: "La eficiencia del MOC en transporte de calor viene de transformación asimétrica de masas de agua: agua cálida se mueve hacia los polos en el océano superior mientras agua fría regresa hacia el ecuador en profundidad.",
          de: "Die Effizienz der MOC beim Wärmetransport kommt von asymmetrischer Wassermassen-Transformation: warmes Wasser bewegt sich polwärts im oberen Ozean, während kaltes Wasser äquatorwärts in der Tiefe zurückkehrt.",
          nl: "De efficiëntie van de MOC in warmtetransport komt van asymmetrische water massa transformatie: warm water beweegt poolwaarts in de bovenste oceaan terwijl koud water equatorwaarts terugkeert op diepte."
        }
      },
      {
        question: {
          en: "In ocean acoustic tomography, what is the primary limitation of ray-based travel time inversions?",
          es: "En tomografía acústica oceánica, ¿cuál es la limitación principal de inversiones de tiempo de viaje basadas en rayos?",
          de: "In der Ozeanischen Akustischen Tomographie, was ist die primäre Begrenzung strahlenbasierter Laufzeit-Inversionen?",
          nl: "In oceaan akoestische tomografie, wat is de primaire beperking van straal-gebaseerde reistijd inversies?"
        },
        options: [
          { en: "Cannot resolve small-scale variability due to ray path averaging and limited coverage", es: "No puede resolver variabilidad de pequeña escala debido a promediado de trayectorias de rayos y cobertura limitada", de: "Kann kleinräumige Variabilität aufgrund von Strahlpfad-Mittelung und begrenzter Abdeckung nicht auflösen", nl: "Kan kleinschalige variabiliteit niet oplossen door straalpad middeling en beperkte dekking" },
          { en: "Requires precise synchronization between sources and receivers", es: "Requiere sincronización precisa entre fuentes y receptores", de: "Erfordert präzise Synchronisation zwischen Quellen und Empfängern", nl: "Vereist precieze synchronisatie tussen bronnen en ontvangers" },
          { en: "Limited by acoustic absorption at high frequencies", es: "Limitado por absorción acústica a altas frecuencias", de: "Begrenzt durch akustische Absorption bei hohen Frequenzen", nl: "Beperkt door akoestische absorptie bij hoge frequenties" },
          { en: "Cannot penetrate below the thermocline", es: "No puede penetrar debajo de la termoclina", de: "Kann nicht unter die Thermokline eindringen", nl: "Kan niet onder de thermocline doordringen" }
        ],
        correct: 0,
        explanation: {
          en: "Ray-based acoustic tomography is fundamentally limited by the averaging nature of ray paths and sparse spatial coverage. Each ray samples conditions along its entire path, averaging out small-scale features. Additionally, rays sample only limited regions of the ocean, creating poorly resolved areas between ray paths. This limits the ability to resolve mesoscale and submesoscale ocean structures.",
          es: "La tomografía acústica basada en rayos está fundamentalmente limitada por la naturaleza promediadora de trayectorias de rayos y cobertura espacial escasa. Cada rayo muestrea condiciones a lo largo de toda su trayectoria, promediando características de pequeña escala.",
          de: "Strahlenbasierte akustische Tomographie ist fundamental durch die mittelnde Natur von Strahlpfaden und spärliche räumliche Abdeckung begrenzt. Jeder Strahl tastet Bedingungen entlang seines gesamten Pfads ab, mittelt kleinräumige Merkmale aus.",
          nl: "Straal-gebaseerde akoestische tomografie is fundamenteel beperkt door de middelende natuur van straalpaden en schaarse ruimtelijke dekking. Elke straal bemonstert condities langs zijn gehele pad, kleinschalige kenmerken uitgemiddeld."
        }
      },
      {
        question: {
          en: "How do polynya dynamics influence Arctic Ocean-atmosphere heat exchange and sea ice formation?",
          es: "¿Cómo influye la dinámica de polynyas en el intercambio de calor océano-atmósfera del Ártico y la formación de hielo marino?",
          de: "Wie beeinflusst die Polynja-Dynamik den arktischen Ozean-Atmosphäre-Wärmeaustausch und die Meereisbildung?",
          nl: "Hoe beïnvloedt polynya dynamiek de Arctische oceaan-atmosfeer warmte uitwisseling en zee-ijs formatie?"
        },
        options: [
          { en: "Polynyas create localized areas of intense heat loss where exposed water surface radiates heat to atmosphere, driving convective mixing and enhanced brine rejection during rapid ice formation", es: "Las polynyas crean áreas localizadas de pérdida intensa de calor donde superficie de agua expuesta irradia calor a la atmósfera, impulsando mezcla convectiva y rechazo de salmuera mejorado", de: "Polynjas schaffen lokalisierte Bereiche intensiven Wärmeverlusts, wo exponierte Wasseroberfläche Wärme zur Atmosphäre abstrahlt, konvektive Mischung und verstärkte Solerejektion antreibt", nl: "Polynya's creëren gelokaliseerde gebieden van intense warmteverlies waar blootgestelde wateroppervlak warmte uitstraalt naar atmosfeer, convectieve menging en verhoogde pekel afwijzing aandrijft" },
          { en: "Only affect local weather patterns", es: "Solo afectan patrones climáticos locales", de: "Beeinflussen nur lokale Wettermuster", nl: "Beïnvloeden alleen lokale weerpatronen" },
          { en: "Prevent ice formation completely", es: "Previenen formación de hielo completamente", de: "Verhindern Eisbildung vollständig", nl: "Voorkomen ijs formatie volledig" },
          { en: "Have no thermal effects", es: "No tienen efectos térmicos", de: "Haben keine thermischen Effekte", nl: "Hebben geen thermische effecten" }
        ],
        correct: 0,
        explanation: {
          en: "Polynyas function as thermal windows in the ice pack, creating localized hotspots of ocean-atmosphere heat exchange. The exposed water surface loses heat rapidly through radiation, sensible heat flux, and latent heat flux, driving intense convective mixing in the water column. This heat loss promotes rapid ice formation at polynya edges, with associated brine rejection that enhances deep water formation and drives local thermohaline circulation.",
          es: "Las polynyas funcionan como ventanas térmicas en el pack de hielo, creando puntos calientes localizados de intercambio de calor océano-atmósfera. La superficie de agua expuesta pierde calor rápidamente a través de radiación.",
          de: "Polynjas funktionieren als thermische Fenster im Eispack, schaffen lokalisierte Hotspots des Ozean-Atmosphäre-Wärmeaustauschs. Die exponierte Wasseroberfläche verliert Wärme schnell durch Strahlung.",
          nl: "Polynya's functioneren als thermische vensters in de ijskap, creërende gelokaliseerde hotspots van oceaan-atmosfeer warmte uitwisseling. Het blootgestelde wateroppervlak verliest warmte snel door straling."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mind-bender/oceanography', level2);
  }
})();