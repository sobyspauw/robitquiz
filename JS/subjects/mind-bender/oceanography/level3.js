(function() {
  const level3 = {
    name: {
      en: "Advanced Wave Dynamics & Tidal Theory",
      es: "Dinámica de Ondas Avanzada y Teoría de Mareas",
      de: "Erweiterte Wellendynamik & Gezeitentheorie",
      nl: "Geavanceerde Golfdynamiek & Getijdentheorie"
    },
    questions: [
      {
        question: {
          en: "What theoretical framework describes the nonlinear evolution of wave trains in deep water through the Benjamin-Feir instability mechanism?",
          es: "¿Qué marco teórico describe la evolución no lineal de trenes de onda en agua profunda a través del mecanismo de inestabilidad Benjamin-Feir?",
          de: "Welcher theoretische Rahmen beschreibt die nichtlineare Evolution von Wellenzügen in tiefem Wasser durch den Benjamin-Feir-Instabilitätsmechanismus?",
          nl: "Welk theoretisch raamwerk beschrijft de niet-lineaire evolutie van golftreinen in diep water door het Benjamin-Feir instabiliteit mechanisme?"
        },
        options: [
          { en: "Nonlinear Schrödinger equation with sideband instability", es: "Ecuación de Schrödinger no lineal con inestabilidad de banda lateral", de: "Nichtlineare Schrödinger-Gleichung mit Seitenband-Instabilität", nl: "Niet-lineaire Schrödinger vergelijking met zijband instabiliteit" },
          { en: "Linear wave superposition", es: "Superposición de ondas lineales", de: "Lineare Wellenüberlagerung", nl: "Lineaire golfsuperpostie" },
          { en: "Shallow water wave theory", es: "Teoría de ondas de agua poco profunda", de: "Flachwasserwellen-Theorie", nl: "Ondiep water golftheorie" },
          { en: "Stokes drift approximation", es: "Aproximación de deriva de Stokes", de: "Stokes-Drift-Approximation", nl: "Stokes drift benadering" }
        ],
        correct: 0,
        explanation: {
          en: "The Benjamin-Feir instability describes how monochromatic wave trains become unstable and evolve into complex wave packets through nonlinear interactions, governed by the nonlinear Schrödinger equation with sideband instabilities that can lead to rogue wave formation.",
          es: "La inestabilidad Benjamin-Feir describe cómo los trenes de onda monocromáticos se vuelven inestables y evolucionan hacia paquetes de ondas complejos a través de interacciones no lineales, gobernados por la ecuación de Schrödinger no lineal con inestabilidades de banda lateral que pueden llevar a la formación de ondas anómalas.",
          de: "Die Benjamin-Feir-Instabilität beschreibt, wie monochromatische Wellenzüge instabil werden und sich durch nichtlineare Wechselwirkungen zu komplexen Wellenpaketen entwickeln, gesteuert durch die nichtlineare Schrödinger-Gleichung mit Seitenband-Instabilitäten, die zur Bildung von Monsterwellen führen können.",
          nl: "De Benjamin-Feir instabiliteit beschrijft hoe monochromatische golftreinen instabiel worden en evolueren naar complexe golfpakketten door niet-lineaire interacties, bestuurd door de niet-lineaire Schrödinger vergelijking met zijband instabiliteiten die kunnen leiden tot schurkengolf vorming."
        }
      },
      {
        question: {
          en: "Which advanced numerical method accurately simulates the complete nonlinear wave-wave interactions in a fully developed sea state?",
          es: "¿Qué método numérico avanzado simula con precisión las interacciones completas no lineales onda-onda en un estado de mar completamente desarrollado?",
          de: "Welche fortgeschrittene numerische Methode simuliert genau die vollständigen nichtlinearen Welle-Welle-Wechselwirkungen in einem vollständig entwickelten Seegang?",
          nl: "Welke geavanceerde numerieke methode simuleert nauwkeurig de complete niet-lineaire golf-golf interacties in een volledig ontwikkelde zeetoestand?"
        },
        options: [
          { en: "High-order spectral method with exact kernel calculations", es: "Método espectral de alto orden con cálculos exactos del núcleo", de: "Hochordnung-Spektralmethode mit exakten Kernberechnungen", nl: "Hoge-orde spectrale methode met exacte kernel berekeningen" },
          { en: "Linear superposition of Fourier modes", es: "Superposición lineal de modos de Fourier", de: "Lineare Überlagerung von Fourier-Moden", nl: "Lineaire superpositie van Fourier modes" },
          { en: "Shallow water finite difference", es: "Diferencias finitas de agua poco profunda", de: "Flachwasser-finite Differenzen", nl: "Ondiep water eindige verschillen" },
          { en: "Ray tracing approximation", es: "Aproximación de trazado de rayos", de: "Strahlverfolgungsapproximation", nl: "Straaltracing benadering" }
        ],
        correct: 0,
        explanation: {
          en: "High-order spectral methods with exact kernel calculations can accurately simulate fully nonlinear wave interactions by solving the complete water wave equations in spectral space, capturing four-wave resonances and energy cascade processes that govern real ocean wave evolution.",
          es: "Los métodos espectrales de alto orden con cálculos exactos del núcleo pueden simular con precisión interacciones de ondas completamente no lineales resolviendo las ecuaciones completas de ondas de agua en espacio espectral, capturando resonancias de cuatro ondas y procesos de cascada de energía que gobiernan la evolución real de ondas oceánicas.",
          de: "Hochordnung-Spektralmethoden mit exakten Kernberechnungen können vollständig nichtlineare Wellenwechselwirkungen genau simulieren, indem sie die vollständigen Wasserwellengleichungen im Spektralraum lösen und Vier-Wellen-Resonanzen und Energiekaskadenprozesse erfassen, die die reale Ozeanwellenentwicklung steuern.",
          nl: "Hoge-orde spectrale methoden met exacte kernel berekeningen kunnen volledig niet-lineaire golfinteracties nauwkeurig simuleren door de complete watergolf vergelijkingen in spectrale ruimte op te lossen, waarbij vier-golf resonanties en energie cascade processen worden gevangen die echte oceaangolf evolutie besturen."
        }
      },
      {
        question: {
          en: "What phenomenon describes the coherent triad interactions responsible for energy transfer from wind waves to infragravity waves?",
          es: "¿Qué fenómeno describe las interacciones coherentes de tríada responsables de la transferencia de energía de ondas de viento a ondas infragravitationales?",
          de: "Welches Phänomen beschreibt die kohärenten Triad-Wechselwirkungen, die für die Energieübertragung von Windwellen zu Infragravitätswellen verantwortlich sind?",
          nl: "Welk fenomeen beschrijft de coherente triade interacties verantwoordelijk voor energieoverdracht van windgolven naar infragraviteit golven?"
        },
        options: [
          { en: "Bound long-wave generation through difference interactions", es: "Generación de ondas largas ligadas a través de interacciones de diferencia", de: "Gebundene Langwellen-Erzeugung durch Differenzwechselwirkungen", nl: "Gebonden lange-golf generatie door verschil interacties" },
          { en: "Linear wave propagation", es: "Propagación lineal de ondas", de: "Lineare Wellenausbreitung", nl: "Lineaire golfvoortplanting" },
          { en: "Wind stress transfer", es: "Transferencia de estrés del viento", de: "Windspannungs-Übertragung", nl: "Windstress overdracht" },
          { en: "Bottom friction dissipation", es: "Disipación por fricción del fondo", de: "Bodenreibungs-Dissipation", nl: "Bodemwrijving dissipatie" }
        ],
        correct: 0,
        explanation: {
          en: "Bound long-wave generation occurs through nonlinear triad interactions where two high-frequency wind waves interact to generate low-frequency infragravity waves through difference interactions, transferring energy to longer wavelengths that dominate surf zone dynamics.",
          es: "La generación de ondas largas ligadas ocurre a través de interacciones no lineales de tríada donde dos ondas de viento de alta frecuencia interactúan para generar ondas infragravitationales de baja frecuencia a través de interacciones de diferencia, transfiriendo energía a longitudes de onda más largas que dominan la dinámica de zona de rompientes.",
          de: "Gebundene Langwellen-Erzeugung erfolgt durch nichtlineare Triad-Wechselwirkungen, bei denen zwei hochfrequente Windwellen interagieren, um niederfrequente Infragravitätswellen durch Differenzwechselwirkungen zu erzeugen und Energie auf längere Wellenlängen zu übertragen, die die Brandungszonendynamik dominieren.",
          nl: "Gebonden lange-golf generatie treedt op door niet-lineaire triade interacties waarbij twee hoogfrequente windgolven interacteren om laagfrequente infragraviteit golven te genereren door verschil interacties, waarbij energie wordt overgedragen naar langere golflengtes die surf zone dynamiek domineren."
        }
      },
      {
        question: {
          en: "Which theoretical approach describes the statistical properties of extreme wave heights in finite-depth random seas?",
          es: "¿Qué enfoque teórico describe las propiedades estadísticas de alturas de onda extremas en mares aleatorios de profundidad finita?",
          de: "Welcher theoretische Ansatz beschreibt die statistischen Eigenschaften extremer Wellenhöhen in zufälligen Meeren endlicher Tiefe?",
          nl: "Welke theoretische benadering beschrijft de statistische eigenschappen van extreme golfhoogtes in eindige-diepte willekeurige zeeën?"
        },
        options: [
          { en: "Second-order nonlinear random wave theory with finite-depth corrections", es: "Teoría de ondas aleatorias no lineales de segundo orden con correcciones de profundidad finita", de: "Nichtlineare Zufallswellen-Theorie zweiter Ordnung mit endlicher Tiefenkorrektur", nl: "Tweede-orde niet-lineaire willekeurige golftheorie met eindige-diepte correcties" },
          { en: "Linear Gaussian wave statistics", es: "Estadísticas de ondas gaussianas lineales", de: "Lineare Gauss-Wellenstatistik", nl: "Lineaire Gaussische golfstatistieken" },
          { en: "Shallow water theory only", es: "Solo teoría de agua poco profunda", de: "Nur Flachwassertheorie", nl: "Alleen ondiep water theorie" },
          { en: "Deep water approximation", es: "Aproximación de agua profunda", de: "Tiefwasser-Approximation", nl: "Diep water benadering" }
        ],
        correct: 0,
        explanation: {
          en: "Second-order nonlinear random wave theory with finite-depth corrections accounts for wave-wave interactions, bound harmonics, and depth effects that modify extreme wave statistics, providing more accurate predictions of rogue wave occurrence than linear theory.",
          es: "La teoría de ondas aleatorias no lineales de segundo orden con correcciones de profundidad finita tiene en cuenta interacciones onda-onda, armónicos ligados y efectos de profundidad que modifican estadísticas de ondas extremas, proporcionando predicciones más precisas de ocurrencia de ondas anómalas que la teoría lineal.",
          de: "Nichtlineare Zufallswellen-Theorie zweiter Ordnung mit endlicher Tiefenkorrektur berücksichtigt Welle-Welle-Wechselwirkungen, gebundene Harmonische und Tiefeneffekte, die extreme Wellenstatistiken modifizieren und genauere Vorhersagen des Auftretens von Monsterwellen als lineare Theorie liefern.",
          nl: "Tweede-orde niet-lineaire willekeurige golftheorie met eindige-diepte correcties houdt rekening met golf-golf interacties, gebonden harmonischen en diepte effecten die extreme golfstatistieken wijzigen, wat nauwkeurigere voorspellingen van schurkengolf voorkomen biedt dan lineaire theorie."
        }
      },
      {
        question: {
          en: "What advanced tidal analysis technique separates astronomical and meteorological components in observed sea level records?",
          es: "¿Qué técnica avanzada de análisis de mareas separa componentes astronómicos y meteorológicos en registros observados de nivel del mar?",
          de: "Welche fortgeschrittene Gezeitenanalysetechnik trennt astronomische und meteorologische Komponenten in beobachteten Meeresspiegel-Aufzeichnungen?",
          nl: "Welke geavanceerde getijdenanalyse techniek scheidt astronomische en meteorologische componenten in waargenomen zeespiegelrecords?"
        },
        options: [
          { en: "Harmonic analysis with nodal modulation and meteorological residual extraction", es: "Análisis armónico con modulación nodal y extracción de residuos meteorológicos", de: "Harmonische Analyse mit nodaler Modulation und meteorologischer Residualextraktion", nl: "Harmonische analyse met nodale modulatie en meteorologische residuele extractie" },
          { en: "Simple Fourier transform", es: "Transformada de Fourier simple", de: "Einfache Fourier-Transformation", nl: "Eenvoudige Fourier transformatie" },
          { en: "Linear trend analysis", es: "Análisis de tendencia lineal", de: "Lineare Trendanalyse", nl: "Lineaire trend analyse" },
          { en: "Moving average filtering", es: "Filtrado de media móvil", de: "Gleitender Mittelwert-Filter", nl: "Voortschrijdend gemiddelde filtering" }
        ],
        correct: 0,
        explanation: {
          en: "Harmonic analysis with nodal modulation accounts for long-term variations in tidal constituents due to lunar orbital mechanics, while meteorological residual extraction separates storm surge and atmospheric pressure effects from astronomical tides for accurate tidal prediction and analysis.",
          es: "El análisis armónico with modulación nodal tiene en cuenta variaciones a largo plazo en constituyentes de marea debido a mecánica orbital lunar, mientras que la extracción de residuos meteorológicos separa efectos de marejada ciclónica y presión atmosférica de mareas astronómicas para predicción y análisis de mareas precisos.",
          de: "Harmonische Analyse mit nodaler Modulation berücksichtigt langfristige Variationen in Gezeitenkonstituenten aufgrund der Mondbahnmechanik, während meteorologische Residualextraktion Sturmflut- und Atmosphärendruckeffekte von astronomischen Gezeiten trennt für genaue Gezeitenvorhersage und -analyse.",
          nl: "Harmonische analyse met nodale modulatie houdt rekening met lange-termijn variaties in getijden constituenten door maanbaan mechanica, terwijl meteorologische residuele extractie stormvloed en atmosferische druk effecten scheidt van astronomische getijden voor nauwkeurige getijdenvoorspelling en analyse."
        }
      },
      {
        question: {
          en: "Which phenomenon describes the resonant amplification of tidal constituents in semi-enclosed basins through quarter-wave resonance?",
          es: "¿Qué fenómeno describe la amplificación resonante de constituyentes de marea en cuencas semi-cerradas a través de resonancia de cuarto de onda?",
          de: "Welches Phänomen beschreibt die Resonanzverstärkung von Gezeitenkonstituenten in halbgeschlossenen Becken durch Viertelwellen-Resonanz?",
          nl: "Welk fenomeen beschrijft de resonante versterking van getijden constituenten in semi-gesloten bekkens door kwart-golf resonantie?"
        },
        options: [
          { en: "Tidal bore formation with hydraulic jump dynamics", es: "Formación de barra de marea con dinámica de salto hidráulico", de: "Flutwellen-Bildung mit hydraulischer Sprungdynamik", nl: "Getijdenboring vorming met hydraulische sprong dynamiek" },
          { en: "Simple tidal propagation", es: "Propagación de marea simple", de: "Einfache Gezeitenausbreitung", nl: "Eenvoudige getijdenvoortplanting" },
          { en: "Tidal mixing processes", es: "Procesos de mezcla de marea", de: "Gezeitenmischungsprozesse", nl: "Getijdenmengings processen" },
          { en: "Kelvin wave propagation", es: "Propagación de ondas de Kelvin", de: "Kelvin-Wellenausbreitung", nl: "Kelvin golfvoortplanting" }
        ],
        correct: 0,
        explanation: {
          en: "Tidal bore formation occurs when quarter-wave resonance amplifies tidal constituents in shallow, funnel-shaped estuaries, creating hydraulic jump dynamics where the incoming tidal wave steepens into a moving wall of water that propagates upstream against river flow.",
          es: "La formación de barra de marea ocurre cuando la resonancia de cuarto de onda amplifica constituyentes de marea en estuarios poco profundos en forma de embudo, creando dinámicas de salto hidráulico donde la onda de marea entrante se empina en una pared móvil de agua que se propaga río arriba contra el flujo del río.",
          de: "Flutwellen-Bildung tritt auf, wenn Viertelwellen-Resonanz Gezeitenkonstituenten in flachen, trichterförmigen Flussmündungen verstärkt und hydraulische Sprungdynamik erzeugt, bei der die einlaufende Gezeitenwelle sich zu einer beweglichen Wasserwand versteilt, die stromaufwärts gegen den Flussfluss propagiert.",
          nl: "Getijdenboring vorming treedt op wanneer kwart-golf resonantie getijden constituenten versterkt in ondiepe, trechtervormige estuaria, hydraulische sprong dynamiek creërend waarbij de inkomende getijdengolf versteilt tot een bewegende muur van water die stroomopwaarts propageert tegen rivierstroom."
        }
      },
      {
        question: {
          en: "What computational approach models the full three-dimensional wave-current interaction including vorticity effects?",
          es: "¿Qué enfoque computacional modela la interacción tridimensional completa onda-corriente incluyendo efectos de vorticidad?",
          de: "Welcher Rechenansatz modelliert die vollständige dreidimensionale Welle-Strömung-Wechselwirkung einschließlich Vortizitätseffekten?",
          nl: "Welke computationele benadering modelleert de volledige driedimensionale golf-stroom interactie inclusief vorticiteit effecten?"
        },
        options: [
          { en: "Coupled Navier-Stokes and free surface solvers with vortex tracking", es: "Solucionadores acoplados de Navier-Stokes y superficie libre con seguimiento de vórtice", de: "Gekoppelte Navier-Stokes- und freie Oberflächenlöser mit Wirbelverfolgung", nl: "Gekoppelde Navier-Stokes en vrije oppervlakte oplossers met wervel tracking" },
          { en: "Linear potential flow theory", es: "Teoría lineal de flujo potencial", de: "Lineare Potentialströmungstheorie", nl: "Lineaire potentiaal stroming theorie" },
          { en: "Shallow water equations only", es: "Solo ecuaciones de agua poco profunda", de: "Nur Flachwassergleichungen", nl: "Alleen ondiep water vergelijkingen" },
          { en: "Radiation stress formulation", es: "Formulación de estrés de radiación", de: "Strahlungsstress-Formulierung", nl: "Stralingssspanning formulering" }
        ],
        correct: 0,
        explanation: {
          en: "Coupled Navier-Stokes and free surface solvers with vortex tracking can capture the complete three-dimensional wave-current interaction including vorticity generation, wave breaking, turbulence production, and momentum exchange that govern nearshore hydrodynamics.",
          es: "Los solucionadores acoplados de Navier-Stokes y superficie libre con seguimiento de vórtice pueden capturar la interacción tridimensional completa onda-corriente incluyendo generación de vorticidad, rompimiento de ondas, producción de turbulencia e intercambio de momento que gobiernan la hidrodinámica cercana a la costa.",
          de: "Gekoppelte Navier-Stokes- und freie Oberflächenlöser mit Wirbelverfolgung können die vollständige dreidimensionale Welle-Strömung-Wechselwirkung erfassen, einschließlich Vortizitätserzeugung, Wellenbrechen, Turbulenzproduktion und Impulsaustausch, die die küstennahe Hydrodynamik steuern.",
          nl: "Gekoppelde Navier-Stokes en vrije oppervlakte oplossers met wervel tracking kunnen de volledige driedimensionale golf-stroom interactie vangen inclusief vorticiteit generatie, golfbreking, turbulentie productie en momentum uitwisseling die kustnabie hydrodynamica besturen."
        }
      },
      {
        question: {
          en: "Which advanced wave transformation process describes the evolution of wave spectra through strong current shear zones?",
          es: "¿Qué proceso avanzado de transformación de ondas describe la evolución de espectros de ondas a través de zonas de cizalladura de corriente fuerte?",
          de: "Welcher fortgeschrittene Wellentransformationsprozess beschreibt die Evolution von Wellenspektren durch starke Strömungsscherzonen?",
          nl: "Welk geavanceerd golftransformatie proces beschrijft de evolutie van golfspectra door sterke stroom schering zones?"
        },
        options: [
          { en: "Wave action conservation with current-induced frequency shifting", es: "Conservación de acción de onda con desplazamiento de frecuencia inducido por corriente", de: "Wellenwirkungs-Erhaltung mit strömungsinduzierter Frequenzverschiebung", nl: "Golfactie behoud met stroom-geïnduceerde frequentie verschuiving" },
          { en: "Simple wave refraction", es: "Refracción simple de ondas", de: "Einfache Wellenbrechung", nl: "Eenvoudige golfrefractie" },
          { en: "Linear wave shoaling", es: "Asomeramiento lineal de ondas", de: "Lineares Wellenshoaling", nl: "Lineaire golfshaling" },
          { en: "Geometric wave spreading", es: "Extensión geométrica de ondas", de: "Geometrische Wellenausbreitung", nl: "Geometrische golfspreiding" }
        ],
        correct: 0,
        explanation: {
          en: "Wave action conservation with current-induced frequency shifting describes how wave energy and momentum are redistributed as waves propagate through varying current fields, with Doppler shifting and wave steepening effects that can lead to wave breaking and energy dissipation.",
          es: "La conservación de acción de onda con desplazamiento de frecuencia inducido por corriente describe cómo la energía y momento de ondas se redistribuyen cuando las ondas se propagan a través de campos de corriente variables, con efectos de desplazamiento Doppler y empinamiento de ondas que pueden llevar a rompimiento de ondas y disipación de energía.",
          de: "Wellenwirkungs-Erhaltung mit strömungsinduzierter Frequenzverschiebung beschreibt, wie Wellenenergie und -impuls umverteilt werden, wenn sich Wellen durch variierende Strömungsfelder ausbreiten, mit Doppler-Verschiebung und Wellenversteilerungseffekten, die zu Wellenbrechen und Energiedissipation führen können.",
          nl: "Golfactie behoud met stroom-geïnduceerde frequentie verschuiving beschrijft hoe golfenergie en momentum worden herverdeeld wanneer golven propageren door variërende stroomvelden, met Doppler verschuiving en golf versteiling effecten die kunnen leiden tot golfbreking en energie dissipatie."
        }
      },
      {
        question: {
          en: "What theoretical framework describes the generation of edge waves along straight coastlines with varying beach profiles?",
          es: "¿Qué marco teórico describe la generación de ondas de borde a lo largo de costas rectas con perfiles de playa variables?",
          de: "Welcher theoretische Rahmen beschreibt die Erzeugung von Randwellen entlang gerader Küstenlinien mit variierenden Strandprofilen?",
          nl: "Welk theoretisch raamwerk beschrijft de generatie van randgolven langs rechte kustlijnen met variërende strandprofielen?"
        },
        options: [
          { en: "Mild-slope equation with alongshore varying topography", es: "Ecuación de pendiente suave con topografía variable a lo largo de la costa", de: "Milde-Steigung-Gleichung mit entlang der Küste variierender Topographie", nl: "Milde-helling vergelijking met langs-kust variërende topografie" },
          { en: "Shallow water wave theory", es: "Teoría de ondas de agua poco profunda", de: "Flachwasserwellen-Theorie", nl: "Ondiep water golftheorie" },
          { en: "Deep water wave approximation", es: "Aproximación de ondas de agua profunda", de: "Tiefwasserwellen-Approximation", nl: "Diep water golf benadering" },
          { en: "Linear wave refraction only", es: "Solo refracción lineal de ondas", de: "Nur lineare Wellenbrechung", nl: "Alleen lineaire golfrefractie" }
        ],
        correct: 0,
        explanation: {
          en: "The mild-slope equation with alongshore varying topography describes how edge waves are generated and trapped along coastlines, accounting for gradual depth changes and alongshore variations that create resonant modes propagating parallel to the shore.",
          es: "La ecuación de pendiente suave con topografía variable a lo largo de la costa describe cómo las ondas de borde se generan y quedan atrapadas a lo largo de las costas, teniendo en cuenta cambios graduales de profundidad y variaciones a lo largo de la costa que crean modos resonantes que se propagan paralelos a la orilla.",
          de: "Die Milde-Steigung-Gleichung mit entlang der Küste variierender Topographie beschreibt, wie Randwellen entlang Küstenlinien erzeugt und gefangen werden, unter Berücksichtigung gradueller Tiefenänderungen und entlang der Küste variierender Variationen, die resonante Modi erzeugen, die parallel zur Küste propagieren.",
          nl: "De milde-helling vergelijking met langs-kust variërende topografie beschrijft hoe randgolven worden gegenereerd en gevangen langs kustlijnen, waarbij rekening wordt gehouden met geleidelijke diepte veranderingen en langs-kust variaties die resonante modi creëren die parallel aan de kust propageren."
        }
      },
      {
        question: {
          en: "Which advanced tidal modeling approach incorporates both barotropic and baroclinic dynamics in stratified coastal waters?",
          es: "¿Qué enfoque avanzado de modelado de mareas incorpora dinámicas barotrópicas y baroclínicas en aguas costeras estratificadas?",
          de: "Welcher fortgeschrittene Gezeitenmodellierungsansatz beinhaltet sowohl barotrope als auch barokline Dynamik in geschichteten Küstengewässern?",
          nl: "Welke geavanceerde getijdenmodellerings benadering incorporeert zowel barotrope als baroclinische dynamiek in gestratificeerde kustwateren?"
        },
        options: [
          { en: "Mode-splitting technique with internal tide generation", es: "Técnica de división de modos con generación de marea interna", de: "Modi-Aufspaltungstechnik mit interner Gezeitenerzeugung", nl: "Modus-splitstings techniek met interne getijde generatie" },
          { en: "Depth-averaged barotropic model only", es: "Solo modelo barotrópico promediado en profundidad", de: "Nur tiefengemitteltes barotropes Modell", nl: "Alleen diepte-gemiddeld barotroop model" },
          { en: "Surface wave model", es: "Modelo de ondas superficiales", de: "Oberflächenwellenmodell", nl: "Oppervlaktegolf model" },
          { en: "Rigid lid approximation", es: "Aproximación de tapa rígida", de: "Starre-Deckel-Approximation", nl: "Stijve deksel benadering" }
        ],
        correct: 0,
        explanation: {
          en: "Mode-splitting technique separates fast barotropic (external) tides from slow baroclinic (internal) tides, allowing efficient computation of surface elevation while capturing internal tide generation over topography and stratification effects in coastal waters.",
          es: "La técnica de división de modos separa mareas barotrópicas rápidas (externas) de mareas baroclínicas lentas (internas), permitiendo cálculo eficiente de elevación superficial mientras captura generación de marea interna sobre topografía y efectos de estratificación en aguas costeras.",
          de: "Die Modi-Aufspaltungstechnik trennt schnelle barotrope (externe) Gezeiten von langsamen baroklinen (internen) Gezeiten und ermöglicht effiziente Berechnung der Oberflächenhöhe, während sie interne Gezeitenerzeugung über Topographie und Schichtungseffekte in Küstengewässern erfasst.",
          nl: "Modus-splitstings techniek scheidt snelle barotrope (externe) getijden van langzame baroclinische (interne) getijden, wat efficiënte berekening van oppervlakte elevatie mogelijk maakt terwijl interne getijde generatie over topografie en stratificatie effecten in kustwateren wordt gevangen."
        }
      },
      {
        question: {
          en: "What phenomenon describes the energy cascade from large-scale wave groups to small-scale wave breaking through modulational instability?",
          es: "¿Qué fenómeno describe la cascada de energía de grupos de ondas de gran escala a rompimiento de ondas de pequeña escala a través de inestabilidad modulacional?",
          de: "Welches Phänomen beschreibt die Energiekaskade von großskaligen Wellengruppen zu kleinskaligem Wellenbrechen durch modulare Instabilität?",
          nl: "Welk fenomeen beschrijft de energie cascade van grootschalige golfgroepen naar kleinschalige golfbreking door modulationele instabiliteit?"
        },
        options: [
          { en: "Wave packet focusing with envelope soliton formation", es: "Enfoque de paquete de ondas con formación de solitón envolvente", de: "Wellenpaket-Fokussierung mit Hüllkurven-Soliton-Bildung", nl: "Golfpakket focussering met envelop soliton vorming" },
          { en: "Linear wave dispersion", es: "Dispersión lineal de ondas", de: "Lineare Wellendispersion", nl: "Lineaire golfdispersie" },
          { en: "Wind wave generation", es: "Generación de ondas por viento", de: "Windwellen-Erzeugung", nl: "Wind golf generatie" },
          { en: "Bottom friction effects", es: "Efectos de fricción del fondo", de: "Bodenreibungseffekte", nl: "Bodemwrijving effecten" }
        ],
        correct: 0,
        explanation: {
          en: "Wave packet focusing occurs when modulational instability causes wave energy to concentrate spatially and temporally, forming envelope solitons that can reach extreme heights before dissipating through wave breaking, representing a key mechanism in rogue wave formation.",
          es: "El enfoque de paquete de ondas ocurre cuando la inestabilidad modulacional causa que la energía de ondas se concentre espacial y temporalmente, formando solitones envolventes que pueden alcanzar alturas extremas antes de disiparse a través de rompimiento de ondas, representando un mecanismo clave en la formación de ondas anómalas.",
          de: "Wellenpaket-Fokussierung tritt auf, wenn modulare Instabilität dazu führt, dass sich Wellenenergie räumlich und zeitlich konzentriert und Hüllkurven-Solitonen bildet, die extreme Höhen erreichen können, bevor sie durch Wellenbrechen dissipieren, was einen Schlüsselmechanismus in der Monsterwellen-Bildung darstellt.",
          nl: "Golfpakket focussering treedt op wanneer modulationele instabiliteit golfenergie ruimtelijk en temporeel doet concentreren, envelop solitonen vormend die extreme hoogtes kunnen bereiken voor ze dissiperen door golfbreking, wat een sleutelmechanisme in schurkengolf vorming vertegenwoordigt."
        }
      },
      {
        question: {
          en: "Which theoretical framework describes the interaction between surface gravity waves and capillary waves at the air-sea interface?",
          es: "¿Qué marco teórico describe la interacción entre ondas de gravedad superficial y ondas capilares en la interfaz aire-mar?",
          de: "Welcher theoretische Rahmen beschreibt die Wechselwirkung zwischen Oberflächenschwerkraftwellen und Kapillarwellen an der Luft-Meer-Grenzfläche?",
          nl: "Welk theoretisch raamwerk beschrijft de interactie tussen oppervlakte zwaartekracht golven en capillaire golven op de lucht-zee interface?"
        },
        options: [
          { en: "Coupled gravity-capillary wave dispersion with surface tension effects", es: "Dispersión acoplada de ondas gravedad-capilares con efectos de tensión superficial", de: "Gekoppelte Schwerkraft-Kapillar-Wellendispersion mit Oberflächenspannungseffekten", nl: "Gekoppelde zwaartekracht-capillaire golf dispersie met oppervlaktespanning effecten" },
          { en: "Deep water gravity wave theory only", es: "Solo teoría de ondas de gravedad de agua profunda", de: "Nur Tiefwasser-Schwerkraftwellen-Theorie", nl: "Alleen diep water zwaartekracht golftheorie" },
          { en: "Shallow water approximation", es: "Aproximación de agua poco profunda", de: "Flachwasser-Approximation", nl: "Ondiep water benadering" },
          { en: "Linear wave superposition", es: "Superposición lineal de ondas", de: "Lineare Wellenüberlagerung", nl: "Lineaire golfsuperpostie" }
        ],
        correct: 0,
        explanation: {
          en: "Coupled gravity-capillary wave dispersion accounts for both gravitational and surface tension restoring forces, describing the complete spectrum from long gravity waves to short capillary waves and their interactions that affect air-sea momentum transfer and wave breaking processes.",
          es: "La dispersión acoplada de ondas gravedad-capilares tiene en cuenta fuerzas restauradoras gravitacionales y de tensión superficial, describiendo el espectro completo desde ondas de gravedad largas hasta ondas capilares cortas y sus interacciones que afectan la transferencia de momento aire-mar y procesos de rompimiento de ondas.",
          de: "Gekoppelte Schwerkraft-Kapillar-Wellendispersion berücksichtigt sowohl gravitative als auch Oberflächenspannungs-Rückstellkräfte und beschreibt das vollständige Spektrum von langen Schwerkraftwellen bis kurzen Kapillarwellen und ihre Wechselwirkungen, die Luft-Meer-Impulsübertragung und Wellenbrechprozesse beeinflussen.",
          nl: "Gekoppelde zwaartekracht-capillaire golf dispersie houdt rekening met zowel gravitationele als oppervlaktespanning herstellende krachten, waarbij het volledige spectrum wordt beschreven van lange zwaartekracht golven tot korte capillaire golven en hun interacties die lucht-zee momentum overdracht en golfbreking processen beïnvloeden."
        }
      },
      {
        question: {
          en: "What advanced wave prediction method combines deterministic nonlinear evolution with stochastic wave field initialization?",
          es: "¿Qué método avanzado de predicción de ondas combina evolución no lineal determinística con inicialización estocástica de campo de ondas?",
          de: "Welche fortgeschrittene Wellenvorhersagemethode kombiniert deterministische nichtlineare Evolution mit stochastischer Wellenfeldinitialisierung?",
          nl: "Welke geavanceerde golfvoorspellingsmethode combineert deterministische niet-lineaire evolutie met stochastische golfveld initialisatie?"
        },
        options: [
          { en: "Phase-resolved wave forecasting with ensemble statistics", es: "Pronóstico de ondas resuelto en fase con estadísticas de ensamble", de: "Phasenaufgelöste Wellenvorhersage mit Ensemble-Statistiken", nl: "Fase-opgeloste golfvoorspelling met ensemble statistieken" },
          { en: "Spectral wave models only", es: "Solo modelos espectrales de ondas", de: "Nur spektrale Wellenmodelle", nl: "Alleen spectrale golfmodellen" },
          { en: "Linear wave propagation", es: "Propagación lineal de ondas", de: "Lineare Wellenausbreitung", nl: "Lineaire golfvoortplanting" },
          { en: "Statistical wave analysis", es: "Análisis estadístico de ondas", de: "Statistische Wellenanalyse", nl: "Statistische golfanalyse" }
        ],
        correct: 0,
        explanation: {
          en: "Phase-resolved wave forecasting combines deterministic nonlinear wave evolution models with ensemble methods that account for uncertainty in initial wave field conditions, providing probabilistic predictions of extreme wave events and wave-by-wave evolution patterns.",
          es: "El pronóstico de ondas resuelto en fase combina modelos determinísticos de evolución no lineal de ondas con métodos de ensamble que tienen en cuenta la incertidumbre en condiciones iniciales del campo de ondas, proporcionando predicciones probabilísticas de eventos de ondas extremas y patrones de evolución onda por onda.",
          de: "Phasenaufgelöste Wellenvorhersage kombiniert deterministische nichtlineare Wellenevolutionsmodelle mit Ensemble-Methoden, die Unsicherheit in anfänglichen Wellenfeldbedingungen berücksichtigen und probabilistische Vorhersagen extremer Wellenereignisse und Welle-für-Welle-Evolutionsmuster liefern.",
          nl: "Fase-opgeloste golfvoorspelling combineert deterministische niet-lineaire golf evolutie modellen met ensemble methoden die rekening houden met onzekerheid in initiële golfveld condities, probabilistische voorspellingen biedend van extreme golfgebeurtenissen en golf-voor-golf evolutie patronen."
        }
      },
      {
        question: {
          en: "Which phenomenon describes the coherent wave-current interaction that generates langmuir circulation cells in the upper ocean?",
          es: "¿Qué fenómeno describe la interacción coherente onda-corriente que genera células de circulación de Langmuir en el océano superior?",
          de: "Welches Phänomen beschreibt die kohärente Welle-Strömung-Wechselwirkung, die Langmuir-Zirkulationszellen im oberen Ozean erzeugt?",
          nl: "Welk fenomeen beschrijft de coherente golf-stroom interactie die Langmuir circulatie cellen genereert in de bovenste oceaan?"
        },
        options: [
          { en: "Craik-Leibovich instability with Stokes drift-vorticity interaction", es: "Inestabilidad Craik-Leibovich con interacción deriva de Stokes-vorticidad", de: "Craik-Leibovich-Instabilität mit Stokes-Drift-Vortizitäts-Wechselwirkung", nl: "Craik-Leibovich instabiliteit met Stokes drift-vorticiteit interactie" },
          { en: "Wind-driven surface currents only", es: "Solo corrientes superficiales impulsadas por viento", de: "Nur windgetriebene Oberflächenströmungen", nl: "Alleen wind-aangedreven oppervlakte stromingen" },
          { en: "Density stratification effects", es: "Efectos de estratificación de densidad", de: "Dichteschichtungseffekte", nl: "Dichtheid stratificatie effecten" },
          { en: "Tidal mixing processes", es: "Procesos de mezcla de marea", de: "Gezeitenmischungsprozesse", nl: "Getijdenmengings processen" }
        ],
        correct: 0,
        explanation: {
          en: "Craik-Leibovich instability occurs when the Stokes drift from surface waves interacts with wind-driven shear to generate streamwise vortices, creating the characteristic roll cells of Langmuir circulation that enhance vertical mixing in the upper ocean mixed layer.",
          es: "La inestabilidad Craik-Leibovich ocurre cuando la deriva de Stokes de ondas superficiales interactúa con cizalladura impulsada por viento para generar vórtices en dirección de corriente, creando las células de rollo características de circulación de Langmuir que mejoran la mezcla vertical en la capa mixta superior del océano.",
          de: "Craik-Leibovich-Instabilität tritt auf, wenn die Stokes-Drift von Oberflächenwellen mit windgetriebener Scherung interagiert, um stromrichtungsparallele Wirbel zu erzeugen und die charakteristischen Rollzellen der Langmuir-Zirkulation zu schaffen, die die vertikale Mischung in der oberen Ozean-Deckschicht verstärken.",
          nl: "Craik-Leibovich instabiliteit treedt op wanneer de Stokes drift van oppervlaktegolven interacteert met wind-aangedreven schering om stroomrichting wervelingen te genereren, de karakteristieke rol cellen van Langmuir circulatie creërend die verticale menging in de bovenste oceaan gemengde laag versterken."
        }
      },
      {
        question: {
          en: "What computational technique accurately captures the dispersive effects in intermediate water depth wave propagation?",
          es: "¿Qué técnica computacional captura con precisión los efectos dispersivos en propagación de ondas de profundidad de agua intermedia?",
          de: "Welche Berechnungstechnik erfasst genau die dispersiven Effekte in der Wellenausbreitung bei mittlerer Wassertiefe?",
          nl: "Welke computationele techniek vangt nauwkeurig de dispersieve effecten in intermediaire waterdiepte golfvoortplanting?"
        },
        options: [
          { en: "Boussinesq equations with enhanced dispersion relation", es: "Ecuaciones de Boussinesq con relación de dispersión mejorada", de: "Boussinesq-Gleichungen mit verbesserter Dispersionsrelation", nl: "Boussinesq vergelijkingen met verbeterde dispersie relatie" },
          { en: "Shallow water equations", es: "Ecuaciones de agua poco profunda", de: "Flachwassergleichungen", nl: "Ondiep water vergelijkingen" },
          { en: "Deep water approximation", es: "Aproximación de agua profunda", de: "Tiefwasser-Approximation", nl: "Diep water benadering" },
          { en: "Linear wave theory", es: "Teoría lineal de ondas", de: "Lineare Wellentheorie", nl: "Lineaire golftheorie" }
        ],
        correct: 0,
        explanation: {
          en: "Boussinesq equations with enhanced dispersion relation extend the validity of shallow water models to intermediate depths by including frequency dispersion effects, accurately capturing wave transformation from deep to shallow water including shoaling, refraction, and nonlinear interactions.",
          es: "Las ecuaciones de Boussinesq con relación de dispersión mejorada extienden la validez de modelos de agua poco profunda a profundidades intermedias incluyendo efectos de dispersión de frecuencia, capturando con precisión transformación de ondas desde agua profunda hasta poco profunda incluyendo asomeramiento, refracción e interacciones no lineales.",
          de: "Boussinesq-Gleichungen mit verbesserter Dispersionsrelation erweitern die Gültigkeit von Flachwassermodellen auf mittlere Tiefen durch Einbeziehung von Frequenzdispersionseffekten und erfassen genau Wellentransformation von tiefem zu flachem Wasser einschließlich Shoaling, Brechung und nichtlinearer Wechselwirkungen.",
          nl: "Boussinesq vergelijkingen met verbeterde dispersie relatie breiden de geldigheid van ondiep water modellen uit naar intermediaire dieptes door frequentie dispersie effecten in te sluiten, nauwkeurig golfentransformatie van diep naar ondiep water vangend inclusief shaling, refractie en niet-lineaire interacties."
        }
      },
      {
        question: {
          en: "Which advanced tidal constituent analysis technique accounts for shallow water harmonic generation and overtides?",
          es: "¿Qué técnica avanzada de análisis de constituyentes de marea tiene en cuenta generación armónica de agua poco profunda y sobremareas?",
          de: "Welche fortgeschrittene Gezeitenkonstituenten-Analysetechnik berücksichtigt Flachwasser-harmonische Erzeugung und Übergezeiten?",
          nl: "Welke geavanceerde getijden constituent analyse techniek houdt rekening met ondiep water harmonische generatie en overgetijden?"
        },
        options: [
          { en: "Nonlinear harmonic analysis with shallow water constituents (M4, M6, MS4)", es: "Análisis armónico no lineal con constituyentes de agua poco profunda (M4, M6, MS4)", de: "Nichtlineare harmonische Analyse mit Flachwasser-Konstituenten (M4, M6, MS4)", nl: "Niet-lineaire harmonische analyse met ondiep water constituenten (M4, M6, MS4)" },
          { en: "Linear tidal harmonic analysis only", es: "Solo análisis armónico de marea lineal", de: "Nur lineare Gezeiten-harmonische Analyse", nl: "Alleen lineaire getijden harmonische analyse" },
          { en: "Principal component analysis", es: "Análisis de componentes principales", de: "Hauptkomponentenanalyse", nl: "Hoofdcomponent analyse" },
          { en: "Fourier transform analysis", es: "Análisis de transformada de Fourier", de: "Fourier-Transform-Analyse", nl: "Fourier transformatie analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Nonlinear harmonic analysis includes shallow water constituents like M4 (quarter-diurnal), M6 (sixth-diurnal), and compound tides (MS4) that arise from nonlinear interactions between principal astronomical tides in shallow water environments, essential for accurate tidal predictions in coastal areas.",
          es: "El análisis armónico no lineal incluye constituyentes de agua poco profunda como M4 (cuarto-diurno), M6 (sexto-diurno) y mareas compuestas (MS4) que surgen de interacciones no lineales entre mareas astronómicas principales en ambientes de agua poco profunda, esencial para predicciones de marea precisas en áreas costeras.",
          de: "Nichtlineare harmonische Analyse umfasst Flachwasser-Konstituenten wie M4 (vierteltaglich), M6 (sechsteltaglich) und zusammengesetzte Gezeiten (MS4), die aus nichtlinearen Wechselwirkungen zwischen hauptsächlichen astronomischen Gezeiten in Flachwasserumgebungen entstehen, wesentlich für genaue Gezeitenvorhersagen in Küstengebieten.",
          nl: "Niet-lineaire harmonische analyse omvat ondiep water constituenten zoals M4 (kwart-dagelijks), M6 (zesde-dagelijks) en samengestelde getijden (MS4) die ontstaan uit niet-lineaire interacties tussen hoofdastronomische getijden in ondiep water omgevingen, essentieel voor nauwkeurige getijdenvoorspellingen in kustgebieden."
        }
      },
      {
        question: {
          en: "What phenomenon describes the resonant coupling between wind waves and infragravity waves in coastal areas?",
          es: "¿Qué fenómeno describe el acoplamiento resonante entre ondas de viento e ondas infragravitationales en áreas costeras?",
          de: "Welches Phänomen beschreibt die Resonanzkopplung zwischen Windwellen und Infragravitätswellen in Küstengebieten?",
          nl: "Welk fenomeen beschrijft de resonante koppeling tussen windgolven en infragraviteit golven in kustgebieden?"
        },
        options: [
          { en: "Bound-free wave transformation with energy transfer to standing wave patterns", es: "Transformación de ondas ligadas-libres con transferencia de energía a patrones de ondas estacionarias", de: "Gebunden-freie Wellentransformation mit Energieübertragung zu stehenden Wellenmustern", nl: "Gebonden-vrije golf transformatie met energieoverdracht naar staande golf patronen" },
          { en: "Simple wave reflection", es: "Reflexión simple de ondas", de: "Einfache Wellenreflexion", nl: "Eenvoudige golfreflectie" },
          { en: "Linear wave shoaling", es: "Asomeramiento lineal de ondas", de: "Lineares Wellenshoaling", nl: "Lineaire golfshaling" },
          { en: "Tidal current interaction", es: "Interacción de corriente de marea", de: "Gezeitenströmungs-Wechselwirkung", nl: "Getijdenstroom interactie" }
        ],
        correct: 0,
        explanation: {
          en: "Bound-free wave transformation occurs when bound long waves (forced by wind wave groups) are released as free infragravity waves in shallow water, transferring energy to standing wave patterns that can dominate coastal hydrodynamics and contribute to coastal flooding and erosion.",
          es: "La transformación de ondas ligadas-libres ocurre cuando ondas largas ligadas (forzadas por grupos de ondas de viento) se liberan como ondas infragravitationales libres en agua poco profunda, transfiriendo energía a patrones de ondas estacionarias que pueden dominar la hidrodinámica costera y contribuir a inundaciones y erosión costeras.",
          de: "Gebunden-freie Wellentransformation tritt auf, wenn gebundene lange Wellen (durch Windwellengruppen erzwungen) als freie Infragravitätswellen in flachem Wasser freigesetzt werden und Energie auf stehende Wellenmuster übertragen, die die Küstenhydrodynamik dominieren und zu Küstenüberflutung und -erosion beitragen können.",
          nl: "Gebonden-vrije golf transformatie treedt op wanneer gebonden lange golven (gedwongen door windgolf groepen) worden vrijgegeven als vrije infragravity golven in ondiep water, energie overdragend naar staande golf patronen die kusthydrodynamica kunnen domineren en bijdragen aan kustvloed en erosie."
        }
      },
      {
        question: {
          en: "Which theoretical approach describes the statistical distribution of wave heights in finite water depths with current interactions?",
          es: "¿Qué enfoque teórico describe la distribución estadística de alturas de ondas en profundidades de agua finitas con interacciones de corriente?",
          de: "Welcher theoretische Ansatz beschreibt die statistische Verteilung von Wellenhöhen in endlichen Wassertiefen mit Strömungswechselwirkungen?",
          nl: "Welke theoretische benadering beschrijft de statistische verdeling van golfhoogtes in eindige waterdieptes met stroom interacties?"
        },
        options: [
          { en: "Modified Rayleigh distribution with depth and current corrections", es: "Distribución de Rayleigh modificada con correcciones de profundidad y corriente", de: "Modifizierte Rayleigh-Verteilung mit Tiefen- und Strömungskorrekturen", nl: "Gemodificeerde Rayleigh verdeling met diepte en stroom correcties" },
          { en: "Standard Gaussian distribution", es: "Distribución gaussiana estándar", de: "Standard-Gauss-Verteilung", nl: "Standaard Gaussische verdeling" },
          { en: "Exponential distribution", es: "Distribución exponencial", de: "Exponentialverteilung", nl: "Exponentiële verdeling" },
          { en: "Uniform distribution", es: "Distribución uniforme", de: "Gleichverteilung", nl: "Uniforme verdeling" }
        ],
        correct: 0,
        explanation: {
          en: "Modified Rayleigh distribution with depth and current corrections accounts for finite-depth effects on wave kinematics and current-induced frequency shifting that alter the statistical properties of wave heights, providing more accurate extreme value predictions in coastal environments.",
          es: "La distribución de Rayleigh modificada con correcciones de profundidad y corriente tiene en cuenta efectos de profundidad finita en cinemática de ondas y desplazamiento de frecuencia inducido por corriente que alteran las propiedades estadísticas de alturas de ondas, proporcionando predicciones de valores extremos más precisas en ambientes costeros.",
          de: "Modifizierte Rayleigh-Verteilung mit Tiefen- und Strömungskorrekturen berücksichtigt endliche Tiefeneffekte auf Wellenkinematik und strömungsinduzierte Frequenzverschiebung, die die statistischen Eigenschaften von Wellenhöhen verändern und genauere Extremwert-Vorhersagen in Küstenumgebungen liefern.",
          nl: "Gemodificeerde Rayleigh verdeling met diepte en stroom correcties houdt rekening met eindige-diepte effecten op golf kinematica en stroom-geïnduceerde frequentie verschuiving die de statistische eigenschappen van golfhoogtes veranderen, nauwkeurigere extreme waarde voorspellingen biedend in kustomgevingen."
        }
      },
      {
        question: {
          en: "What advanced wave breaking criterion accounts for both steepness and current-induced modifications in finite depth?",
          es: "¿Qué criterio avanzado de rompimiento de ondas tiene en cuenta tanto empinamiento como modificaciones inducidas por corriente en profundidad finita?",
          de: "Welches fortgeschrittene Wellenbrechkriterium berücksichtigt sowohl Steilheit als auch strömungsinduzierte Modifikationen in endlicher Tiefe?",
          nl: "Welk geavanceerd golfbreking criterium houdt rekening met zowel steilheid als stroom-geïnduceerde modificaties in eindige diepte?"
        },
        options: [
          { en: "Modified Miche criterion with kinematic and dynamic breaking limits", es: "Criterio de Miche modificado con límites de ruptura cinemáticos y dinámicos", de: "Modifiziertes Miche-Kriterium mit kinematischen und dynamischen Brechgrenzen", nl: "Gemodificeerd Miche criterium met kinematische en dynamische breking limieten" },
          { en: "Simple steepness criterion only", es: "Solo criterio de empinamiento simple", de: "Nur einfaches Steilheitskriterium", nl: "Alleen eenvoudig steilheid criterium" },
          { en: "Shallow water approximation", es: "Aproximación de agua poco profunda", de: "Flachwasser-Approximation", nl: "Ondiep water benadering" },
          { en: "Deep water breaking limit", es: "Límite de ruptura de agua profunda", de: "Tiefwasser-Brechgrenze", nl: "Diep water breking limiet" }
        ],
        correct: 0,
        explanation: {
          en: "Modified Miche criterion combines kinematic breaking (when particle velocity exceeds wave celerity) with dynamic breaking (when wave steepness exceeds critical values) while accounting for current-induced modifications to wave properties in finite water depths.",
          es: "El criterio de Miche modificado combina ruptura cinemática (cuando velocidad de partícula excede celeridad de onda) con ruptura dinámica (cuando empinamiento de onda excede valores críticos) mientras tiene en cuenta modificaciones inducidas por corriente a propiedades de ondas en profundidades de agua finitas.",
          de: "Modifiziertes Miche-Kriterium kombiniert kinematisches Brechen (wenn Partikelgeschwindigkeit die Wellencelerity überschreitet) mit dynamischem Brechen (wenn Wellensteilheit kritische Werte überschreitet), während strömungsinduzierte Modifikationen der Welleneigenschaften in endlichen Wassertiefen berücksichtigt werden.",
          nl: "Gemodificeerd Miche criterium combineert kinematische breking (wanneer deeltjessnelheid golf celeriteit overschrijdt) met dynamische breking (wanneer golf steilheid kritieke waarden overschrijdt) terwijl rekening gehouden wordt met stroom-geïnduceerde modificaties aan golf eigenschappen in eindige waterdieptes."
        }
      },
      {
        question: {
          en: "Which computational approach models the complete three-dimensional wave-induced flow field including undertow and rip currents?",
          es: "¿Qué enfoque computacional modela el campo de flujo tridimensional completo inducido por ondas incluyendo resaca y corrientes de retorno?",
          de: "Welcher Rechenansatz modelliert das vollständige dreidimensionale welleninduzierte Strömungsfeld einschließlich Unterströmung und Brandungsrückströme?",
          nl: "Welke computationele benadering modelleert het volledige driedimensionale golf-geïnduceerde stromingsveld inclusief onderstroming en muistromen?"
        },
        options: [
          { en: "Wave-averaged Navier-Stokes equations with radiation stress forcing", es: "Ecuaciones de Navier-Stokes promediadas en ondas con forzamiento de estrés de radiación", de: "Wellengemittelte Navier-Stokes-Gleichungen mit Strahlungsstress-Antrieb", nl: "Golf-gemiddelde Navier-Stokes vergelijkingen met straling stress aandrijving" },
          { en: "Linear wave theory only", es: "Solo teoría lineal de ondas", de: "Nur lineare Wellentheorie", nl: "Alleen lineaire golftheorie" },
          { en: "Shallow water equations", es: "Ecuaciones de agua poco profunda", de: "Flachwassergleichungen", nl: "Ondiep water vergelijkingen" },
          { en: "Potential flow theory", es: "Teoría de flujo potencial", de: "Potentialströmungstheorie", nl: "Potentiaal stroming theorie" }
        ],
        correct: 0,
        explanation: {
          en: "Wave-averaged Navier-Stokes equations with radiation stress forcing capture the complete three-dimensional wave-induced circulation including undertow (return flow in lower water column), rip currents, and longshore currents through proper momentum transfer from waves to mean flow.",
          es: "Las ecuaciones de Navier-Stokes promediadas en ondas con forzamiento de estrés de radiación capturan la circulación tridimensional completa inducida por ondas incluyendo resaca (flujo de retorno en columna de agua inferior), corrientes de retorno y corrientes de deriva litoral a través de transferencia apropiada de momento de ondas a flujo medio.",
          de: "Wellengemittelte Navier-Stokes-Gleichungen mit Strahlungsstress-Antrieb erfassen die vollständige dreidimensionale welleninduzierte Zirkulation einschließlich Unterströmung (Rückfluss in unterer Wassersäule), Brandungsrückströme und Längsströmungen durch ordnungsgemäße Impulsübertragung von Wellen auf mittlere Strömung.",
          nl: "Golf-gemiddelde Navier-Stokes vergelijkingen met straling stress aandrijving vangen de volledige driedimensionale golf-geïnduceerde circulatie inclusief onderstroming (terugstroom in lagere waterkolom), muistromen en langskust stromingen door juiste momentum overdracht van golven naar gemiddelde stroming."
        }
      },
      {
        question: {
          en: "What phenomenon describes the energy transfer from wind waves to subharmonic edge waves through resonant triad interactions?",
          es: "¿Qué fenómeno describe la transferencia de energía de ondas de viento a ondas de borde subarmónicas a través de interacciones resonantes de tríada?",
          de: "Welches Phänomen beschreibt die Energieübertragung von Windwellen zu subharmonischen Randwellen durch resonante Triad-Wechselwirkungen?",
          nl: "Welk fenomeen beschrijft de energieoverdracht van windgolven naar subharmonische randgolven door resonante triade interacties?"
        },
        options: [
          { en: "Subharmonic edge wave instability with cross-shore mode coupling", es: "Inestabilidad de onda de borde subarmónica con acoplamiento de modo transversal a la costa", de: "Subharmonische Randwellen-Instabilität mit küstenqueren Moden-Kopplung", nl: "Subharmonische randgolf instabiliteit met dwars-kust modus koppeling" },
          { en: "Linear wave propagation", es: "Propagación lineal de ondas", de: "Lineare Wellenausbreitung", nl: "Lineaire golfvoortplanting" },
          { en: "Wave refraction only", es: "Solo refracción de ondas", de: "Nur Wellenbrechung", nl: "Alleen golfrefractie" },
          { en: "Tidal modulation", es: "Modulación de marea", de: "Gezeiten-Modulation", nl: "Getijden modulatie" }
        ],
        correct: 0,
        explanation: {
          en: "Subharmonic edge wave instability occurs when incident wind waves resonantly excite edge waves at half their frequency through triad interactions, creating alongshore-propagating modes that couple with cross-shore wave motion and can lead to rhythmic beach morphology patterns.",
          es: "La inestabilidad de onda de borde subarmónica ocurre cuando ondas de viento incidentes excitan resonantemente ondas de borde a la mitad de su frecuencia a través de interacciones de tríada, creando modos de propagación a lo largo de la costa que se acoplan con movimiento de ondas transversal a la costa y pueden llevar a patrones rítmicos de morfología de playa.",
          de: "Subharmonische Randwellen-Instabilität tritt auf, wenn einfallende Windwellen resonant Randwellen bei der halben Frequenz durch Triad-Wechselwirkungen anregen und entlang der Küste propagierende Modi erzeugen, die mit küstenquerem Wellenbewegung koppeln und zu rhythmischen Strandmorphologie-Mustern führen können.",
          nl: "Subharmonische randgolf instabiliteit treedt op wanneer invallende windgolven resonant randgolven bij de helft van hun frequentie opwekken door triade interacties, langs-kust propagerende modi creërend die koppelen met dwars-kust golfbeweging en kunnen leiden tot ritmische strand morfologie patronen."
        }
      },
      {
        question: {
          en: "Which advanced tidal modeling technique accounts for earth tides and ocean loading effects on tidal predictions?",
          es: "¿Qué técnica avanzada de modelado de mareas tiene en cuenta mareas terrestres y efectos de carga oceánica en predicciones de marea?",
          de: "Welche fortgeschrittene Gezeitenmodellierungstechnik berücksichtigt Erdgezeiten und Ozeanbelastungseffekte auf Gezeitenvorhersagen?",
          nl: "Welke geavanceerde getijdenmodellerings techniek houdt rekening met aardgetijden en oceaanbelasting effecten op getijdenvoorspellingen?"
        },
        options: [
          { en: "Solid earth tide correction with ocean loading displacement", es: "Corrección de marea de tierra sólida con desplazamiento de carga oceánica", de: "Feste Erdgezeiten-Korrektur mit Ozeanbelastungs-Verschiebung", nl: "Vaste aardgetijde correctie met oceaanbelasting verplaatsing" },
          { en: "Astronomical forcing only", es: "Solo forzamiento astronómico", de: "Nur astronomischer Antrieb", nl: "Alleen astronomische aandrijving" },
          { en: "Atmospheric pressure correction", es: "Corrección de presión atmosférica", de: "Atmosphärendruck-Korrektur", nl: "Atmosferische druk correctie" },
          { en: "Wind stress effects", es: "Efectos de estrés del viento", de: "Windspannungseffekte", nl: "Windstress effecten" }
        ],
        correct: 0,
        explanation: {
          en: "Solid earth tide corrections account for elastic deformation of the Earth's surface due to gravitational forces, while ocean loading displacement corrections account for the additional elastic response to the changing mass of water, providing more accurate tidal predictions especially at coastal locations.",
          es: "Las correcciones de marea de tierra sólida tienen en cuenta deformación elástica de la superficie terrestre debido a fuerzas gravitacionales, mientras que correcciones de desplazamiento de carga oceánica tienen en cuenta la respuesta elástica adicional al cambio de masa de agua, proporcionando predicciones de marea más precisas especialmente en ubicaciones costeras.",
          de: "Feste Erdgezeiten-Korrekturen berücksichtigen elastische Verformung der Erdoberfläche durch Gravitationskräfte, während Ozeanbelastungs-Verschiebungskorrekturen die zusätzliche elastische Antwort auf die sich ändernde Wassermasse berücksichtigen und genauere Gezeitenvorhersagen besonders an Küstenstandorten liefern.",
          nl: "Vaste aardgetijde correcties houden rekening met elastische vervorming van het aardoppervlak door zwaartekrachten, terwijl oceaanbelasting verplaatsing correcties rekening houden met de aanvullende elastische respons op de veranderende watermassa, nauwkeurigere getijdenvoorspellingen biedend vooral op kustlocaties."
        }
      },
      {
        question: {
          en: "What theoretical framework describes the evolution of wave spectra through depth-limited breaking in shallow water surf zones?",
          es: "¿Qué marco teórico describe la evolución de espectros de ondas a través de rompimiento limitado por profundidad en zonas de rompientes de agua poco profunda?",
          de: "Welcher theoretische Rahmen beschreibt die Evolution von Wellenspektren durch tiefenbegrenztes Brechen in Flachwasser-Brandungszonen?",
          nl: "Welk theoretisch raamwerk beschrijft de evolutie van golfspectra door diepte-gelimiteerde breking in ondiep water surf zones?"
        },
        options: [
          { en: "Spectral wave action balance with depth-limited breaking source terms", es: "Balance de acción espectral de ondas con términos fuente de rompimiento limitado por profundidad", de: "Spektrale Wellenwirkungs-Bilanz mit tiefenbegrenzten Brech-Quelltermen", nl: "Spectrale golfactie balans met diepte-gelimiteerde breking bron termen" },
          { en: "Linear wave transformation", es: "Transformación lineal de ondas", de: "Lineare Wellentransformation", nl: "Lineaire golftransformatie" },
          { en: "Monochromatic wave analysis", es: "Análisis de ondas monocromáticas", de: "Monochromatische Wellenanalyse", nl: "Monochromatische golfanalyse" },
          { en: "Deep water wave theory", es: "Teoría de ondas de agua profunda", de: "Tiefwasserwellen-Theorie", nl: "Diep water golftheorie" }
        ],
        correct: 0,
        explanation: {
          en: "Spectral wave action balance includes depth-limited breaking source terms that redistribute energy across frequencies, modeling the selective breaking of higher frequency components and energy transfer to lower frequencies, fundamental for surf zone wave prediction.",
          es: "El balance de acción espectral de ondas incluye términos fuente de rompimiento limitado por profundidad que redistribuyen energía a través de frecuencias, modelando el rompimiento selectivo de componentes de mayor frecuencia y transferencia de energía a frecuencias menores, fundamental para predicción de ondas en zona de rompientes.",
          de: "Spektrale Wellenwirkungs-Bilanz umfasst tiefenbegrenzte Brech-Quellterme, die Energie über Frequenzen umverteilen, das selektive Brechen höherfrequenter Komponenten und Energieübertragung zu niedrigeren Frequenzen modellieren, fundamental für Brandungszonen-Wellenvorhersage.",
          nl: "Spectrale golfactie balans omvat diepte-gelimiteerde breking bron termen die energie over frequenties herverdelen, selectieve breking van hogere frequentie componenten modellerend en energieoverdracht naar lagere frequenties, fundamenteel voor surf zone golfvoorspelling."
        }
      },
      {
        question: {
          en: "Which phenomenon describes the generation of second-order difference waves that create surf beat oscillations?",
          es: "¿Qué fenómeno describe la generación de ondas de diferencia de segundo orden que crean oscilaciones de batido de rompientes?",
          de: "Welches Phänomen beschreibt die Erzeugung von Zweitordnungs-Differenzwellen, die Brandungs-Beat-Schwingungen erzeugen?",
          nl: "Welk fenomeen beschrijft de generatie van tweede-orde verschil golven die surf beat oscillaties creëren?"
        },
        options: [
          { en: "Nonlinear wave-wave interactions generating long-period group-frequency oscillations", es: "Interacciones no lineales onda-onda generando oscilaciones de frecuencia de grupo de período largo", de: "Nichtlineare Welle-Welle-Wechselwirkungen erzeugen langperiodische Gruppenfrequenz-Schwingungen", nl: "Niet-lineaire golf-golf interacties genererend lange-periode groep-frequentie oscillaties" },
          { en: "Linear wave superposition", es: "Superposición lineal de ondas", de: "Lineare Wellenüberlagerung", nl: "Lineaire golfsuperpostie" },
          { en: "Tidal modulation", es: "Modulación de marea", de: "Gezeiten-Modulation", nl: "Getijden modulatie" },
          { en: "Wind stress variation", es: "Variación de estrés del viento", de: "Windspannungsvariation", nl: "Windstress variatie" }
        ],
        correct: 0,
        explanation: {
          en: "Nonlinear wave-wave interactions between incident wave groups generate second-order difference frequency components that manifest as long-period surf beat oscillations, creating the characteristic pulsing of surf zone energy that affects coastal processes and safety.",
          es: "Las interacciones no lineales onda-onda entre grupos de ondas incidentes generan componentes de frecuencia de diferencia de segundo orden que se manifiestan como oscilaciones de batido de rompientes de período largo, creando el pulso característico de energía de zona de rompientes que afecta procesos costeros y seguridad.",
          de: "Nichtlineare Welle-Welle-Wechselwirkungen zwischen einfallenden Wellengruppen erzeugen Zweitordnungs-Differenzfrequenz-Komponenten, die sich als langperiodische Brandungs-Beat-Schwingungen manifestieren und das charakteristische Pulsieren der Brandungszonen-Energie erzeugen, was Küstenprozesse und Sicherheit beeinflusst.",
          nl: "Niet-lineaire golf-golf interacties tussen invallende golfgroepen genereren tweede-orde verschil frequentie componenten die zich manifesteren als lange-periode surf beat oscillaties, de karakteristieke pulsering van surf zone energie creërend die kustprocessen en veiligheid beïnvloedt."
        }
      },
      {
        question: {
          en: "What computational method accurately simulates wave-structure interaction including scattering and diffraction effects?",
          es: "¿Qué método computacional simula con precisión interacción onda-estructura incluyendo efectos de dispersión y difracción?",
          de: "Welche Berechnungsmethode simuliert genau Welle-Struktur-Wechselwirkung einschließlich Streuungs- und Beugungseffekte?",
          nl: "Welke computationele methode simuleert nauwkeurig golf-structuur interactie inclusief verstrooiing en diffractie effecten?"
        },
        options: [
          { en: "Boundary element method with Green's function solutions", es: "Método de elementos de frontera con soluciones de función de Green", de: "Randelement-Methode mit Green-Funktions-Lösungen", nl: "Grenselement methode met Green's functie oplossingen" },
          { en: "Shallow water wave equations", es: "Ecuaciones de ondas de agua poco profunda", de: "Flachwasserwellen-Gleichungen", nl: "Ondiep water golf vergelijkingen" },
          { en: "Linear wave theory", es: "Teoría lineal de ondas", de: "Lineare Wellentheorie", nl: "Lineaire golftheorie" },
          { en: "Ray tracing methods", es: "Métodos de trazado de rayos", de: "Strahlverfolgungs-Methoden", nl: "Straaltracing methoden" }
        ],
        correct: 0,
        explanation: {
          en: "Boundary element method with Green's function solutions provides exact solutions to the linear wave scattering problem, accurately capturing wave diffraction around structures, reflection coefficients, and transmitted wave fields essential for coastal engineering design.",
          es: "El método de elementos de frontera con soluciones de función de Green proporciona soluciones exactas al problema de dispersión de ondas lineales, capturando con precisión difracción de ondas alrededor de estructuras, coeficientes de reflexión y campos de ondas transmitidas esenciales para diseño de ingeniería costera.",
          de: "Randelement-Methode mit Green-Funktions-Lösungen bietet exakte Lösungen für das lineare Wellenstreuungsproblem und erfasst genau Wellenbeugung um Strukturen, Reflexionskoeffizienten und übertragene Wellenfelder, die für Küsteningenieurdesign wesentlich sind.",
          nl: "Grenselement methode met Green's functie oplossingen biedt exacte oplossingen voor het lineaire golf verstrooiing probleem, nauwkeurig golfdiffractie rond structuren, reflectie coëfficiënten en doorgelaten golfvelden vangend die essentieel zijn voor kust engineering ontwerp."
        }
      },
      {
        question: {
          en: "Which advanced wave analysis technique separates directional wave components in complex multi-directional sea states?",
          es: "¿Qué técnica avanzada de análisis de ondas separa componentes de ondas direccionales en estados de mar complejos multi-direccionales?",
          de: "Welche fortgeschrittene Wellenanalysetechnik trennt direktionale Wellenkomponenten in komplexen multi-direktionalen Seezuständen?",
          nl: "Welke geavanceerde golfanalyse techniek scheidt directionele golfcomponenten in complexe multi-directionele zeetoestanden?"
        },
        options: [
          { en: "Maximum entropy method with directional spreading function", es: "Método de máxima entropía con función de dispersión direccional", de: "Maximum-Entropie-Methode mit direktionaler Ausbreitungsfunktion", nl: "Maximum entropie methode met directionele spreidingsfunctie" },
          { en: "Simple Fourier analysis", es: "Análisis de Fourier simple", de: "Einfache Fourier-Analyse", nl: "Eenvoudige Fourier analyse" },
          { en: "Peak frequency analysis", es: "Análisis de frecuencia pico", de: "Spitzenfrequenz-Analyse", nl: "Piek frequentie analyse" },
          { en: "Significant wave height calculation", es: "Cálculo de altura de ola significativa", de: "Signifikante Wellenhöhen-Berechnung", nl: "Significante golfhoogte berekening" }
        ],
        correct: 0,
        explanation: {
          en: "Maximum entropy method uses limited directional information from wave measurements to reconstruct the complete directional wave spectrum with optimal directional spreading functions, essential for understanding wave energy distribution in complex sea states.",
          es: "El método de máxima entropía utiliza información direccional limitada de mediciones de ondas para reconstruir el espectro de ondas direccional completo con funciones de dispersión direccional óptimas, esencial para entender distribución de energía de ondas en estados de mar complejos.",
          de: "Maximum-Entropie-Methode verwendet begrenzte direktionale Informationen von Wellenmessungen zur Rekonstruktion des vollständigen direktionalen Wellenspektrums mit optimalen direktionalen Ausbreitungsfunktionen, wesentlich für das Verständnis der Wellenenergieverteilung in komplexen Seezuständen.",
          nl: "Maximum entropie methode gebruikt beperkte directionele informatie van golfmetingen om het complete directionele golfspectrum te reconstrueren met optimale directionele spreidingsfuncties, essentieel voor het begrijpen van golfenergie distributie in complexe zeetoestanden."
        }
      },
      {
        question: {
          en: "What phenomenon describes the resonant amplification of harbor oscillations through Helmholtz resonance mechanisms?",
          es: "¿Qué fenómeno describe la amplificación resonante de oscilaciones de puerto a través de mecanismos de resonancia de Helmholtz?",
          de: "Welches Phänomen beschreibt die Resonanzverstärkung von Hafenschwingungen durch Helmholtz-Resonanzmechanismen?",
          nl: "Welk fenomeen beschrijft de resonante versterking van haven oscillaties door Helmholtz resonantie mechanismen?"
        },
        options: [
          { en: "Harbor seiche with quarter-wave and Helmholtz resonance modes", es: "Seiche de puerto con modos de resonancia de cuarto de onda y Helmholtz", de: "Hafen-Seiche mit Viertelwellen- und Helmholtz-Resonanzmoden", nl: "Haven seiche met kwart-golf en Helmholtz resonantie modi" },
          { en: "Simple wave reflection", es: "Reflexión simple de ondas", de: "Einfache Wellenreflexion", nl: "Eenvoudige golfreflectie" },
          { en: "Tidal oscillations", es: "Oscilaciones de marea", de: "Gezeiten-Schwingungen", nl: "Getijden oscillaties" },
          { en: "Wind-driven setup", es: "Configuración impulsada por viento", de: "Windgetriebene Aufstauung", nl: "Wind-gedreven opzet" }
        ],
        correct: 0,
        explanation: {
          en: "Harbor seiche involves both quarter-wave resonance (standing waves in enclosed basins) and Helmholtz resonance (oscillations of the entire water mass through harbor entrance), creating complex amplification patterns that can be dangerous for vessels and port operations.",
          es: "La seiche de puerto involucra tanto resonancia de cuarto de onda (ondas estacionarias in cuencas cerradas) como resonancia de Helmholtz (oscilaciones de toda la masa de agua a través de entrada de puerto), creando patrones de amplificación complejos que pueden ser peligrosos para embarcaciones y operaciones portuarias.",
          de: "Hafen-Seiche umfasst sowohl Viertelwellen-Resonanz (stehende Wellen in geschlossenen Becken) als auch Helmholtz-Resonanz (Schwingungen der gesamten Wassermasse durch Hafeneingang) und erzeugt komplexe Verstärkungsmuster, die für Schiffe und Hafenoperationen gefährlich sein können.",
          nl: "Haven seiche omvat zowel kwart-golf resonantie (staande golven in ingesloten bekkens) als Helmholtz resonantie (oscillaties van de gehele watermassa door haveningang), complexe versterkingspatronen creërend die gevaarlijk kunnen zijn voor schepen en havenoperaties."
        }
      },
      {
        question: {
          en: "Which theoretical approach describes the statistical properties of wave-induced velocities and accelerations for marine structure design?",
          es: "¿Qué enfoque teórico describe las propiedades estadísticas de velocidades y aceleraciones inducidas por ondas para diseño de estructuras marinas?",
          de: "Welcher theoretische Ansatz beschreibt die statistischen Eigenschaften welleninduzierter Geschwindigkeiten und Beschleunigungen für Meeresbauwerks-Design?",
          nl: "Welke theoretische benadering beschrijft de statistische eigenschappen van golf-geïnduceerde snelheden en versnellingen voor mariene structuur ontwerp?"
        },
        options: [
          { en: "Second-order random wave kinematics with extreme value statistics", es: "Cinemática de ondas aleatorias de segundo orden con estadísticas de valores extremos", de: "Zweitordnungs-Zufallswellen-Kinematik mit Extremwert-Statistiken", nl: "Tweede-orde willekeurige golf kinematica met extreme waarde statistieken" },
          { en: "Linear wave theory only", es: "Solo teoría lineal de ondas", de: "Nur lineare Wellentheorie", nl: "Alleen lineaire golftheorie" },
          { en: "Mean flow approximation", es: "Aproximación de flujo medio", de: "Mittlere Strömungs-Approximation", nl: "Gemiddelde stroming benadering" },
          { en: "Steady current analysis", es: "Análisis de corriente estacionaria", de: "Stationäre Strömungsanalyse", nl: "Gestage stroom analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Second-order random wave kinematics provides the statistical distributions of wave-induced particle velocities and accelerations needed for calculating hydrodynamic forces on marine structures, including extreme value estimates for design safety factors.",
          es: "La cinemática de ondas aleatorias de segundo orden proporciona las distribuciones estadísticas de velocidades y aceleraciones de partículas inducidas por ondas necesarias para calcular fuerzas hidrodinámicas en estructuras marinas, incluyendo estimaciones de valores extremos para factores de seguridad de diseño.",
          de: "Zweitordnungs-Zufallswellen-Kinematik liefert die statistischen Verteilungen welleninduzierter Partikelgeschwindigkeiten und -beschleunigungen, die zur Berechnung hydrodynamischer Kräfte auf Meeresbauwerke benötigt werden, einschließlich Extremwert-Schätzungen für Design-Sicherheitsfaktoren.",
          nl: "Tweede-orde willekeurige golf kinematica biedt de statistische verdelingen van golf-geïnduceerde deeltjessnelheden en versnellingen nodig voor het berekenen van hydrodynamische krachten op mariene structuren, inclusief extreme waarde schattingen voor ontwerp veiligheidsfactoren."
        }
      },
      {
        question: {
          en: "What computational approach models the complete wave transformation from deep water to surf zone including all nonlinear processes?",
          es: "¿Qué enfoque computacional modela la transformación completa de ondas desde agua profunda hasta zona de rompientes incluyendo todos los procesos no lineales?",
          de: "Welcher Rechenansatz modelliert die vollständige Wellentransformation von tiefem Wasser bis zur Brandungszone einschließlich aller nichtlinearen Prozesse?",
          nl: "Welke computationele benadering modelleert de complete golftransformatie van diep water naar surf zone inclusief alle niet-lineaire processen?"
        },
        options: [
          { en: "Fully nonlinear potential flow with adaptive mesh refinement", es: "Flujo potencial completamente no lineal con refinamiento de malla adaptativa", de: "Vollständig nichtlineare Potentialströmung mit adaptiver Netzverfeinerung", nl: "Volledig niet-lineaire potentiaal stroming met adaptieve mesh verfijning" },
          { en: "Linear wave theory", es: "Teoría lineal de ondas", de: "Lineare Wellentheorie", nl: "Lineaire golftheorie" },
          { en: "Shallow water equations only", es: "Solo ecuaciones de agua poco profunda", de: "Nur Flachwassergleichungen", nl: "Alleen ondiep water vergelijkingen" },
          { en: "Ray tracing methods", es: "Métodos de trazado de rayos", de: "Strahlverfolgungs-Methoden", nl: "Straaltracing methoden" }
        ],
        correct: 0,
        explanation: {
          en: "Fully nonlinear potential flow with adaptive mesh refinement can capture the complete wave evolution from deep to shallow water including wave steepening, breaking inception, and nonlinear wave interactions while maintaining computational efficiency through adaptive gridding.",
          es: "El flujo potencial completamente no lineal con refinamiento de malla adaptativa puede capturar la evolución completa de ondas de profunda a somera incluyendo empinamiento de ondas, inicio de rompimiento e interacciones no lineales de ondas mientras mantiene eficiencia computacional a través de mallado adaptativo.",
          de: "Vollständig nichtlineare Potentialströmung mit adaptiver Netzverfeinerung kann die vollständige Wellenevolution von tiefem zu flachem Wasser erfassen, einschließlich Wellenversteilerung, Brechbeginn und nichtlinearer Wellenwechselwirkungen, während durch adaptive Gitterung Recheneffizienz erhalten bleibt.",
          nl: "Volledig niet-lineaire potentiaal stroming met adaptieve mesh verfijning kan de complete golf evolutie van diep naar ondiep water vangen inclusief golf versteiling, breking begin en niet-lineaire golf interacties terwijl computationele efficiëntie wordt behouden door adaptieve rastervorming."
        }
      },
      {
        question: {
          en: "Which advanced wave measurement technique provides simultaneous directional wave spectra and current profiles in coastal waters?",
          es: "¿Qué técnica avanzada de medición de ondas proporciona espectros de ondas direccionales simultáneos y perfiles de corriente en aguas costeras?",
          de: "Welche fortgeschrittene Wellenmessungstechnik bietet simultane direktionale Wellenspektren und Strömungsprofile in Küstengewässern?",
          nl: "Welke geavanceerde golfmeting techniek biedt gelijktijdige directionele golfspectra en stroomprofielen in kustwateren?"
        },
        options: [
          { en: "High-frequency radar with Doppler processing and current mapping", es: "Radar de alta frecuencia con procesamiento Doppler y mapeo de corrientes", de: "Hochfrequenz-Radar mit Doppler-Verarbeitung und Strömungskartierung", nl: "Hoogfrequente radar met Doppler verwerking en stroom mapping" },
          { en: "Wave buoy measurements only", es: "Solo mediciones de boya de ondas", de: "Nur Wellenboje-Messungen", nl: "Alleen golfboei metingen" },
          { en: "Pressure sensor arrays", es: "Matrices de sensores de presión", de: "Drucksensor-Arrays", nl: "Druksensor arrays" },
          { en: "Visual wave observation", es: "Observación visual de ondas", de: "Visuelle Wellenbeobachtung", nl: "Visuele golf observatie" }
        ],
        correct: 0,
        explanation: {
          en: "High-frequency radar systems use Doppler processing to extract both directional wave spectra from Bragg scattering and surface current patterns from Doppler shifts, providing comprehensive real-time monitoring of wave-current interactions over large coastal areas.",
          es: "Los sistemas de radar de alta frecuencia utilizan procesamiento Doppler para extraer tanto espectros de ondas direccionales de dispersión de Bragg como patrones de corrientes superficiales de cambios Doppler, proporcionando monitoreo en tiempo real integral de interacciones onda-corriente sobre grandes áreas costeras.",
          de: "Hochfrequenz-Radarsysteme verwenden Doppler-Verarbeitung zur Extraktion sowohl direktionaler Wellenspektren aus Bragg-Streuung als auch Oberflächenströmungsmuster aus Doppler-Verschiebungen und bieten umfassende Echtzeitüberwachung von Welle-Strömung-Wechselwirkungen über große Küstengebiete.",
          nl: "Hoogfrequente radar systemen gebruiken Doppler verwerking om zowel directionele golfspectra uit Bragg verstrooiing als oppervlakte stroompatronen uit Doppler verschuivingen te extraheren, uitgebreide real-time monitoring van golf-stroom interacties over grote kustgebieden biedend."
        }
      },
      {
        question: {
          en: "What theoretical framework describes the evolution of wave-induced mass transport in the presence of ambient turbulence?",
          es: "¿Qué marco teórico describe la evolución del transporte de masa inducido por ondas en presencia de turbulencia ambiental?",
          de: "Welcher theoretische Rahmen beschreibt die Evolution des welleninduzierten Massentransports in Anwesenheit von Umgebungsturbulenz?",
          nl: "Welk theoretisch raamwerk beschrijft de evolutie van golf-geïnduceerd massa transport in aanwezigheid van omgevingsturbulentie?"
        },
        options: [
          { en: "Generalized Lagrangian mean theory with wave-turbulence interaction", es: "Teoría media lagrangiana generalizada con interacción onda-turbulencia", de: "Verallgemeinerte Lagrange-Mittelungstheorie mit Welle-Turbulenz-Wechselwirkung", nl: "Gegeneraliseerde Lagrangiaanse gemiddelde theorie met golf-turbulentie interactie" },
          { en: "Eulerian mean flow analysis", es: "Análisis de flujo medio euleriano", de: "Eulerische Mittlere-Strömungs-Analyse", nl: "Euleriaanse gemiddelde stroming analyse" },
          { en: "Simple advection-diffusion", es: "Advección-difusión simple", de: "Einfache Advektion-Diffusion", nl: "Eenvoudige advectie-diffusie" },
          { en: "Stokes drift approximation only", es: "Solo aproximación de deriva de Stokes", de: "Nur Stokes-Drift-Approximation", nl: "Alleen Stokes drift benadering" }
        ],
        correct: 0,
        explanation: {
          en: "Generalized Lagrangian mean theory accounts for both Stokes drift from waves and turbulent mixing processes, describing the complete evolution of wave-induced mass transport in realistic oceanic conditions with ambient turbulence.",
          es: "La teoría media lagrangiana generalizada tiene en cuenta tanto la deriva de Stokes de ondas como procesos de mezcla turbulenta, describiendo la evolución completa del transporte de masa inducido por ondas en condiciones oceánicas realistas con turbulencia ambiental.",
          de: "Verallgemeinerte Lagrange-Mittelungstheorie berücksichtigt sowohl Stokes-Drift von Wellen als auch turbulente Mischungsprozesse und beschreibt die vollständige Evolution des welleninduzierten Massentransports in realistischen ozeanischen Bedingungen mit Umgebungsturbulenz.",
          nl: "Gegeneraliseerde Lagrangiaanse gemiddelde theorie houdt rekening met zowel Stokes drift van golven als turbulente mengingsprocessen, de complete evolutie van golf-geïnduceerd massa transport beschrijvend in realistische oceanische condities met omgevingsturbulentie."
        }
      },
      {
        question: {
          en: "Which advanced coastal modeling technique accurately represents morphodynamic feedback between waves, currents, and sediment transport?",
          es: "¿Qué técnica avanzada de modelado costero representa con precisión retroalimentación morfo-dinámica entre ondas, corrientes y transporte de sedimentos?",
          de: "Welche fortgeschrittene Küstenmodellierungstechnik stellt genau morphodynamische Rückkopplung zwischen Wellen, Strömungen und Sedimenttransport dar?",
          nl: "Welke geavanceerde kustmodellering techniek vertegenwoordigt nauwkeurig morfodynamische terugkoppeling tussen golven, stromingen en sedimenttransport?"
        },
        options: [
          { en: "Coupled wave-current-morphology model with bed evolution", es: "Modelo acoplado onda-corriente-morfología con evolución del lecho", de: "Gekoppeltes Welle-Strömung-Morphologie-Modell mit Bettevolution", nl: "Gekoppeld golf-stroom-morfologie model met bodem evolutie" },
          { en: "Static bathymetry wave model", es: "Modelo de ondas de batimetría estática", de: "Statisches Bathymetrie-Wellenmodell", nl: "Statisch bathymetrie golfmodel" },
          { en: "Empirical shoreline change model", es: "Modelo empírico de cambio de línea de costa", de: "Empirisches Küstenlinie-Änderungs-Modell", nl: "Empirisch kustlijn verandering model" },
          { en: "Linear wave transformation only", es: "Solo transformación lineal de ondas", de: "Nur lineare Wellentransformation", nl: "Alleen lineaire golftransformatie" }
        ],
        correct: 0,
        explanation: {
          en: "Coupled wave-current-morphology models simulate the complete feedback loop where waves and currents drive sediment transport, which changes bathymetry, which in turn affects wave transformation and current patterns, essential for coastal evolution prediction.",
          es: "Los modelos acoplados onda-corriente-morfología simulan el bucle de retroalimentación completo donde ondas y corrientes impulsan transporte de sedimentos, que cambia batimetría, que a su vez afecta transformación de ondas y patrones de corriente, esencial para predicción de evolución costera.",
          de: "Gekoppelte Welle-Strömung-Morphologie-Modelle simulieren die vollständige Rückkopplungsschleife, bei der Wellen und Strömungen Sedimenttransport antreiben, der die Bathymetrie verändert, was wiederum Wellentransformation und Strömungsmuster beeinflusst, wesentlich für Küstenevolutionsvorhersage.",
          nl: "Gekoppelde golf-stroom-morfologie modellen simuleren de complete terugkoppeling lus waarbij golven en stromingen sedimenttransport aandrijven, wat bathymetrie verandert, wat op zijn beurt golftransformatie en stroompatronen beïnvloedt, essentieel voor kustevolutie voorspelling."
        }
      },
      {
        question: {
          en: "What phenomenon describes the coherent vortex structures generated by wave breaking in the surf zone?",
          es: "¿Qué fenómeno describe las estructuras de vórtice coherentes generadas por rompimiento de ondas en la zona de rompientes?",
          de: "Welches Phänomen beschreibt die kohärenten Wirbelstrukturen, die durch Wellenbrechen in der Brandungszone erzeugt werden?",
          nl: "Welk fenomeen beschrijft de coherente wervel structuren gegenereerd door golfbreking in de surf zone?"
        },
        options: [
          { en: "Oblique vortex roll ejection with three-dimensional instability", es: "Eyección de rollo de vórtice oblicuo con inestabilidad tridimensional", de: "Schräge Wirbel-Rollen-Auswurf mit dreidimensionaler Instabilität", nl: "Scheve wervel rol uitstoot met driedimensionale instabiliteit" },
          { en: "Simple wave overturning", es: "Simple volcado de ondas", de: "Einfaches Wellenumkippen", nl: "Eenvoudige golf omslaan" },
          { en: "Laminar flow separation", es: "Separación de flujo laminar", de: "Laminare Strömungsablösung", nl: "Laminaire stroming scheiding" },
          { en: "Boundary layer detachment", es: "Desprendimiento de capa límite", de: "Grenzschicht-Ablösung", nl: "Grenslaag loslating" }
        ],
        correct: 0,
        explanation: {
          en: "Oblique vortex roll ejection occurs during wave breaking when strong shear generates three-dimensional vortical structures that are ejected from the breaking wave crest, creating turbulent mixing and contributing to wave energy dissipation and momentum transfer.",
          es: "La eyección de rollo de vórtice oblicuo ocurre durante el rompimiento de ondas cuando cizalladura fuerte genera estructuras vorticales tridimensionales que son eyectadas de la cresta de onda rompiente, creando mezcla turbulenta y contribuyendo a disipación de energía de ondas y transferencia de momento.",
          de: "Schräge Wirbel-Rollen-Auswurf tritt während des Wellenbrechens auf, wenn starke Scherung dreidimensionale Wirbelstrukturen erzeugt, die von der brechenden Wellenkamm ausgestoßen werden, turbulente Mischung erzeugend und zu Wellenenergiedissipation und Impulsübertragung beitragend.",
          nl: "Scheve wervel rol uitstoot treedt op tijdens golfbreking wanneer sterke schering driedimensionale wervel structuren genereert die worden uitgestoten van de brekende golfkam, turbulente menging creërend en bijdragend aan golfenergie dissipatie en momentum overdracht."
        }
      },
      {
        question: {
          en: "Which theoretical approach describes the interaction between surface waves and internal wave modes in stratified coastal waters?",
          es: "¿Qué enfoque teórico describe la interacción entre ondas superficiales y modos de ondas internas en aguas costeras estratificadas?",
          de: "Welcher theoretische Ansatz beschreibt die Wechselwirkung zwischen Oberflächenwellen und internen Wellenmoden in geschichteten Küstengewässern?",
          nl: "Welke theoretische benadering beschrijft de interactie tussen oppervlaktegolven en interne golf modi in gestratificeerde kustwateren?"
        },
        options: [
          { en: "Coupled mode theory with surface-internal wave resonance", es: "Teoría de modos acoplados con resonancia de ondas superficie-internas", de: "Gekoppelte Modentheorie mit Oberflächenwellen-internen-Wellen-Resonanz", nl: "Gekoppelde modus theorie met oppervlakte-interne golf resonantie" },
          { en: "Surface wave theory only", es: "Solo teoría de ondas superficiales", de: "Nur Oberflächenwellen-Theorie", nl: "Alleen oppervlakte golftheorie" },
          { en: "Internal wave theory only", es: "Solo teoría de ondas internas", de: "Nur interne Wellentheorie", nl: "Alleen interne golftheorie" },
          { en: "Hydrostatic approximation", es: "Aproximación hidrostática", de: "Hydrostatische Approximation", nl: "Hydrostatische benadering" }
        ],
        correct: 0,
        explanation: {
          en: "Coupled mode theory describes how surface gravity waves can resonantly excite internal wave modes through stratification effects, leading to energy exchange between surface and internal motions that affects coastal dynamics and mixing processes.",
          es: "La teoría de modos acoplados describe cómo ondas de gravedad superficiales pueden excitar resonantemente modos de ondas internas a través de efectos de estratificación, llevando a intercambio de energía entre movimientos superficiales e internos que afecta dinámicas costeras y procesos de mezcla.",
          de: "Gekoppelte Modentheorie beschreibt, wie Oberflächenschwerkraftwellen resonant interne Wellenmoden durch Schichtungseffekte anregen können, was zu Energieaustausch zwischen Oberflächenbewegungen und internen Bewegungen führt, der Küstendynamik und Mischungsprozesse beeinflusst.",
          nl: "Gekoppelde modus theorie beschrijft hoe oppervlakte zwaartekracht golven resonant interne golf modi kunnen opwekken door stratificatie effecten, leidend tot energie uitwisseling tussen oppervlakte en interne bewegingen die kustdynamiek en mengingsprocessen beïnvloedt."
        }
      },
      {
        question: {
          en: "What advanced numerical method accurately captures wave-ice interaction including flexural wave propagation?",
          es: "¿Qué método numérico avanzado captura con precisión interacción onda-hielo incluyendo propagación de ondas flexurales?",
          de: "Welche fortgeschrittene numerische Methode erfasst genau Welle-Eis-Wechselwirkung einschließlich flexuraler Wellenausbreitung?",
          nl: "Welke geavanceerde numerieke methode vangt nauwkeurig golf-ijs interactie inclusief flexurale golfvoortplanting?"
        },
        options: [
          { en: "Elastic plate theory coupled with water wave equations", es: "Teoría de placa elástica acoplada con ecuaciones de ondas de agua", de: "Elastische Plattentheorie gekoppelt mit Wasserwellengleichungen", nl: "Elastische plaat theorie gekoppeld met waterGolf vergelijkingen" },
          { en: "Rigid boundary conditions", es: "Condiciones de frontera rígidas", de: "Starre Randbedingungen", nl: "Starre grens condities" },
          { en: "Free surface approximation", es: "Aproximación de superficie libre", de: "Freie-Oberfläche-Approximation", nl: "Vrije oppervlakte benadering" },
          { en: "Linear wave theory only", es: "Solo teoría lineal de ondas", de: "Nur lineare Wellentheorie", nl: "Alleen lineaire golftheorie" }
        ],
        correct: 0,
        explanation: {
          en: "Elastic plate theory coupled with water wave equations models ice sheets as thin elastic plates that can flex and support flexural-gravity waves, accurately capturing wave attenuation, reflection, and the complex dispersion relation of waves in ice-covered waters.",
          es: "La teoría de placa elástica acoplada con ecuaciones de ondas de agua modela capas de hielo como placas elásticas delgadas que pueden flexionarse y soportar ondas flexurales-gravitatorias, capturando con precisión atenuación de ondas, reflexión y la relación de dispersión compleja de ondas en aguas cubiertas de hielo.",
          de: "Elastische Plattentheorie gekoppelt mit Wasserwellengleichungen modelliert Eisschichten als dünne elastische Platten, die sich biegen und flexural-gravitative Wellen unterstützen können, und erfasst genau Wellendämpfung, Reflexion und die komplexe Dispersionsrelation von Wellen in eisbedeckten Gewässern.",
          nl: "Elastische plaat theorie gekoppeld met waterGolf vergelijkingen modelleert ijsplaten als dunne elastische platen die kunnen buigen en flexuraal-gravitatie golven kunnen ondersteunen, nauwkeurig golf attenuatie, reflectie en de complexe dispersie relatie van golven in ijs-bedekte wateren vangend."
        }
      },
      {
        question: {
          en: "Which phenomenon describes the generation of acoustic-gravity waves through nonlinear wave-wave interactions in deep ocean?",
          es: "¿Qué fenómeno describe la generación de ondas acústico-gravitatorias a través de interacciones no lineales onda-onda en océano profundo?",
          de: "Welches Phänomen beschreibt die Erzeugung von akustisch-gravitativen Wellen durch nichtlineare Welle-Welle-Wechselwirkungen im tiefen Ozean?",
          nl: "Welk fenomeen beschrijft de generatie van akoestisch-gravitatie golven door niet-lineaire golf-golf interacties in diepe oceaan?"
        },
        options: [
          { en: "Quadruplet wave interactions generating compressible wave modes", es: "Interacciones de ondas cuádruples generando modos de ondas compresibles", de: "Quadruplet-Wellenwechselwirkungen erzeugen kompressible Wellenmoden", nl: "Kwartet golf interacties genererend compressibele golf modi" },
          { en: "Linear wave propagation", es: "Propagación lineal de ondas", de: "Lineare Wellenausbreitung", nl: "Lineaire golfvoortplanting" },
          { en: "Surface tension effects", es: "Efectos de tensión superficial", de: "Oberflächenspannungseffekte", nl: "Oppervlaktespanning effecten" },
          { en: "Tidal forcing", es: "Forzamiento de marea", de: "Gezeiten-Antrieb", nl: "Getijden aandrijving" }
        ],
        correct: 0,
        explanation: {
          en: "Quadruplet wave interactions in deep water can generate acoustic-gravity waves through nonlinear coupling that excites compressible modes of the water-atmosphere system, representing a mechanism for energy transfer from surface gravity waves to acoustic modes.",
          es: "Las interacciones de ondas cuádruples en agua profunda pueden generar ondas acústico-gravitatorias a través de acoplamiento no lineal que excita modos compresibles del sistema agua-atmósfera, representando un mecanismo para transferencia de energía de ondas de gravedad superficiales a modos acústicos.",
          de: "Quadruplet-Wellenwechselwirkungen in tiefem Wasser können akustisch-gravitative Wellen durch nichtlineare Kopplung erzeugen, die kompressible Modi des Wasser-Atmosphäre-Systems anregt und einen Mechanismus für Energieübertragung von Oberflächenschwerkraftwellen zu akustischen Modi darstellt.",
          nl: "Kwartet golf interacties in diep water kunnen akoestisch-gravitatie golven genereren door niet-lineaire koppeling die compressibele modi van het water-atmosfeer systeem opwekt, een mechanisme vertegenwoordigend voor energieoverdracht van oppervlakte zwaartekracht golven naar akoestische modi."
        }
      },
      {
        question: {
          en: "What computational approach models the complete three-dimensional overturning circulation driven by surface wave forcing?",
          es: "¿Qué enfoque computacional modela la circulación de volcado tridimensional completa impulsada por forzamiento de ondas superficiales?",
          de: "Welcher Rechenansatz modelliert die vollständige dreidimensionale Umwälzzirkulation, die durch Oberflächenwellen-Antrieb angetrieben wird?",
          nl: "Welke computationele benadering modelleert de complete driedimensionale omwenteling circulatie aangedreven door oppervlakte golfaandrijving?"
        },
        options: [
          { en: "Large eddy simulation with wave-enhanced mixing parameterization", es: "Simulación de remolinos grandes con parametrización de mezcla mejorada por ondas", de: "Grobstruktursimulation mit wellenverstärkter Mischungsparametrisierung", nl: "Grote wervel simulatie met golf-versterkte menging parametrisatie" },
          { en: "Hydrostatic primitive equations", es: "Ecuaciones primitivas hidrostáticas", de: "Hydrostatische primitive Gleichungen", nl: "Hydrostatische primitieve vergelijkingen" },
          { en: "Geostrophic balance approximation", es: "Aproximación de equilibrio geostrófico", de: "Geostrophisches Gleichgewichts-Approximation", nl: "Geostrofische balans benadering" },
          { en: "Two-dimensional shallow water model", es: "Modelo bidimensional de agua poco profunda", de: "Zweidimensionales Flachwassermodell", nl: "Tweedimensionaal ondiep water model" }
        ],
        correct: 0,
        explanation: {
          en: "Large eddy simulation with wave-enhanced mixing captures the three-dimensional overturning circulation by resolving turbulent eddies and parameterizing the enhanced vertical mixing due to wave breaking and Langmuir circulation, essential for upper ocean dynamics.",
          es: "La simulación de remolinos grandes con mezcla mejorada por ondas captura la circulación de volcado tridimensional resolviendo remolinos turbulentos y parametrizando la mezcla vertical mejorada debido a rompimiento de ondas y circulación de Langmuir, esencial para dinámicas del océano superior.",
          de: "Grobstruktursimulation mit wellenverstärkter Mischung erfasst die dreidimensionale Umwälzzirkulation durch Auflösung turbulenter Wirbel und Parametrisierung der verstärkten vertikalen Mischung durch Wellenbrechen und Langmuir-Zirkulation, wesentlich für die Dynamik des oberen Ozeans.",
          nl: "Grote wervel simulatie met golf-versterkte menging vangt de driedimensionale omwenteling circulatie door turbulente wervelingen op te lossen en de versterkte verticale menging door golfbreking en Langmuir circulatie te parametriseren, essentieel voor bovenste oceaan dynamiek."
        }
      },
      {
        question: {
          en: "Which advanced wave-structure interaction phenomenon involves vortex-induced vibrations in marine risers?",
          es: "¿Qué fenómeno avanzado de interacción onda-estructura involucra vibraciones inducidas por vórtice en elevadores marinos?",
          de: "Welches fortgeschrittene Welle-Struktur-Wechselwirkungsphänomen beinhaltet wirbelinduzierte Schwingungen in Meeressteigern?",
          nl: "Welk geavanceerd golf-structuur interactie fenomeen betreft wervel-geïnduceerde trillingen in mariene stijgbuizen?"
        },
        options: [
          { en: "Lock-in resonance with fluid-structure coupling and wave modulation", es: "Resonancia de bloqueo con acoplamiento fluido-estructura y modulación de ondas", de: "Lock-in-Resonanz mit Fluid-Struktur-Kopplung und Wellenmodulation", nl: "Lock-in resonantie met vloeistof-structuur koppeling en golf modulatie" },
          { en: "Simple drag force only", es: "Solo fuerza de arrastre simple", de: "Nur einfache Widerstandskraft", nl: "Alleen eenvoudige weerstand kracht" },
          { en: "Hydrostatic pressure loading", es: "Carga de presión hidrostática", de: "Hydrostatische Druckbelastung", nl: "Hydrostatische druk belasting" },
          { en: "Buoyancy force effects", es: "Efectos de fuerza de flotabilidad", de: "Auftriebskraft-Effekte", nl: "Drijfkracht effecten" }
        ],
        correct: 0,
        explanation: {
          en: "Lock-in resonance occurs when vortex shedding frequency matches the natural frequency of marine risers, creating strong fluid-structure coupling that can be modulated by ambient waves, potentially leading to large amplitude oscillations and structural fatigue.",
          es: "La resonancia de bloqueo ocurre cuando la frecuencia de desprendimiento de vórtices coincide con la frecuencia natural de elevadores marinos, creando acoplamiento fluido-estructura fuerte que puede ser modulado por ondas ambientales, potencialmente llevando a oscilaciones de gran amplitud y fatiga estructural.",
          de: "Lock-in-Resonanz tritt auf, wenn die Wirbelablösungsfrequenz mit der natürlichen Frequenz von Meeressteigern übereinstimmt und starke Fluid-Struktur-Kopplung erzeugt, die durch Umgebungswellen moduliert werden kann und möglicherweise zu großamplitudigen Schwingungen und struktureller Ermüdung führt.",
          nl: "Lock-in resonantie treedt op wanneer wervel afscheiding frequentie overeenkomt met de natuurlijke frequentie van mariene stijgbuizen, sterke vloeistof-structuur koppeling creërend die kan worden gemoduleerd door omgevingsgolven, mogelijk leidend tot grote amplitude oscillaties en structurele vermoeidheid."
        }
      },
      {
        question: {
          en: "What theoretical framework describes the statistical properties of wave-induced pressure fluctuations on submerged structures?",
          es: "¿Qué marco teórico describe las propiedades estadísticas de fluctuaciones de presión inducidas por ondas en estructuras sumergidas?",
          de: "Welcher theoretische Rahmen beschreibt die statistischen Eigenschaften welleninduzierter Druckfluktuationen auf untergetauchten Strukturen?",
          nl: "Welk theoretisch raamwerk beschrijft de statistische eigenschappen van golf-geïnduceerde druk fluctuaties op ondergedompelde structuren?"
        },
        options: [
          { en: "Second-order diffraction theory with random wave loading", es: "Teoría de difracción de segundo orden con carga de ondas aleatorias", de: "Zweitordnungs-Beugungstheorie mit zufälliger Wellenbelastung", nl: "Tweede-orde diffractie theorie met willekeurige golf belasting" },
          { en: "Hydrostatic pressure only", es: "Solo presión hidrostática", de: "Nur hydrostatischer Druck", nl: "Alleen hydrostatische druk" },
          { en: "Linear potential theory", es: "Teoría potencial lineal", de: "Lineare Potentialtheorie", nl: "Lineaire potentiaal theorie" },
          { en: "Uniform pressure distribution", es: "Distribución uniforme de presión", de: "Gleichmäßige Druckverteilung", nl: "Uniforme druk verdeling" }
        ],
        correct: 0,
        explanation: {
          en: "Second-order diffraction theory accounts for both linear wave diffraction and nonlinear wave interactions around submerged structures, providing statistical distributions of pressure fluctuations essential for fatigue analysis and structural design in random sea states.",
          es: "La teoría de difracción de segundo orden tiene en cuenta tanto difracción lineal de ondas como interacciones no lineales de ondas alrededor de estructuras sumergidas, proporcionando distribuciones estadísticas de fluctuaciones de presión esenciales para análisis de fatiga y diseño estructural en estados de mar aleatorios.",
          de: "Zweitordnungs-Beugungstheorie berücksichtigt sowohl lineare Wellenbeugung als auch nichtlineare Wellenwechselwirkungen um untergetauchte Strukturen und liefert statistische Verteilungen von Druckfluktuationen, die für Ermüdungsanalyse und strukturelles Design in zufälligen Seezuständen wesentlich sind.",
          nl: "Tweede-orde diffractie theorie houdt rekening met zowel lineaire golf diffractie als niet-lineaire golf interacties rond ondergedompelde structuren, statistische verdelingen van druk fluctuaties biedend die essentieel zijn voor vermoeidheidsanalyse en structureel ontwerp in willekeurige zeetoestanden."
        }
      },
      {
        question: {
          en: "Which phenomenon describes the energy cascade from mesoscale eddies to wave-scale turbulence through wave-eddy interactions?",
          es: "¿Qué fenómeno describe la cascada de energía de remolinos de mesoescala a turbulencia de escala de ondas a través de interacciones onda-remolino?",
          de: "Welches Phänomen beschreibt die Energiekaskade von mesoskaligen Wirbeln zu wellenskaliger Turbulenz durch Welle-Wirbel-Wechselwirkungen?",
          nl: "Welk fenomeen beschrijft de energie cascade van mesoschalige wervelingen naar golf-schaal turbulentie door golf-wervel interacties?"
        },
        options: [
          { en: "Stimulated loss of balance with frontogenesis and wave radiation", es: "Pérdida estimulada de equilibrio con frontogénesis y radiación de ondas", de: "Stimulierter Gleichgewichtsverlust mit Frontogenese und Wellenstrahlung", nl: "Gestimuleerd verlies van balans met frontogenese en golf straling" },
          { en: "Simple energy dissipation", es: "Disipación simple de energía", de: "Einfache Energiedissipation", nl: "Eenvoudige energie dissipatie" },
          { en: "Laminar flow breakdown", es: "Ruptura de flujo laminar", de: "Laminare Strömungsabriss", nl: "Laminaire stroming afbraak" },
          { en: "Viscous energy loss", es: "Pérdida de energía viscosa", de: "Viskose Energieverlust", nl: "Visceus energie verlies" }
        ],
        correct: 0,
        explanation: {
          en: "Stimulated loss of balance occurs when surface waves interact with mesoscale eddies, breaking geostrophic balance and triggering frontogenesis processes that radiate internal gravity waves, creating an energy cascade from large-scale geostrophic motion to small-scale turbulence.",
          es: "La pérdida estimulada de equilibrio ocurre cuando ondas superficiales interactúan con remolinos de mesoescala, rompiendo equilibrio geostrófico y disparando procesos de frontogénesis que radian ondas de gravedad internas, creando una cascada de energía desde movimiento geostrófico de gran escala hasta turbulencia de pequeña escala.",
          de: "Stimulierter Gleichgewichtsverlust tritt auf, wenn Oberflächenwellen mit mesoskaligen Wirbeln interagieren, das geostrophische Gleichgewicht brechen und Frontogenese-Prozesse auslösen, die interne Gravitationswellen abstrahlen und eine Energiekaskade von großskaliger geostrophischer Bewegung zu kleinskaliger Turbulenz schaffen.",
          nl: "Gestimuleerd verlies van balans treedt op wanneer oppervlaktegolven interacteren met mesoschalige wervelingen, geostrofische balans brekend en frontogenese processen triggerd die interne zwaartekracht golven uitstralen, een energie cascade creërend van grootschalige geostrofische beweging naar kleinschalige turbulentie."
        }
      },
      {
        question: {
          en: "What advanced tidal analysis method accounts for nonlinear interactions between multiple tidal constituents?",
          es: "¿Qué método avanzado de análisis de mareas tiene en cuenta interacciones no lineales entre múltiples constituyentes de marea?",
          de: "Welche fortgeschrittene Gezeitenanalysemethode berücksichtigt nichtlineare Wechselwirkungen zwischen mehreren Gezeitenkonstituenten?",
          nl: "Welke geavanceerde getijdenanalyse methode houdt rekening met niet-lineaire interacties tussen meerdere getijden constituenten?"
        },
        options: [
          { en: "Nonstationary harmonic analysis with time-varying amplitude and phase", es: "Análisis armónico no estacionario con amplitud y fase variables en el tiempo", de: "Nichtstationäre harmonische Analyse mit zeitveränderlicher Amplitude und Phase", nl: "Niet-stationaire harmonische analyse met tijd-variërende amplitude en fase" },
          { en: "Classical harmonic analysis only", es: "Solo análisis armónico clásico", de: "Nur klassische harmonische Analyse", nl: "Alleen klassieke harmonische analyse" },
          { en: "Simple Fourier decomposition", es: "Descomposición de Fourier simple", de: "Einfache Fourier-Zerlegung", nl: "Eenvoudige Fourier decompositie" },
          { en: "Linear regression analysis", es: "Análisis de regresión lineal", de: "Lineare Regressionsanalyse", nl: "Lineaire regressie analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Nonstationary harmonic analysis allows tidal constituent amplitudes and phases to vary over time, capturing nonlinear interactions, seasonal modulations, and long-term changes in tidal behavior due to bathymetric evolution and climate variability.",
          es: "El análisis armónico no estacionario permite que amplitudes y fases de constituyentes de marea varíen con el tiempo, capturando interacciones no lineales, modulaciones estacionales y cambios a largo plazo en comportamiento de mareas debido a evolución batimétrica y variabilidad climática.",
          de: "Nichtstationäre harmonische Analyse ermöglicht zeitveränderliche Amplituden und Phasen von Gezeitenkonstituenten und erfasst nichtlineare Wechselwirkungen, saisonale Modulationen und langfristige Änderungen im Gezeitenverhalten durch bathymetrische Evolution und Klimavariabilität.",
          nl: "Niet-stationaire harmonische analyse staat toe dat getijden constituent amplitudes en fasen variëren over tijd, niet-lineaire interacties, seizoensmodulaties en lange-termijn veranderingen in getijden gedrag door bathymetrische evolutie en klimaat variabiliteit vangend."
        }
      },
      {
        question: {
          en: "Which computational method accurately simulates the complete wave energy transformation through coral reef systems?",
          es: "¿Qué método computacional simula con precisión la transformación completa de energía de ondas a través de sistemas de arrecifes de coral?",
          de: "Welche Berechnungsmethode simuliert genau die vollständige Wellenenergietransformation durch Korallenriffsysteme?",
          nl: "Welke computationele methode simuleert nauwkeurig de complete golfenergie transformatie door koraalrif systemen?"
        },
        options: [
          { en: "Phase-resolving wave model with porous media flow and vegetation effects", es: "Modelo de ondas resolvente en fase con flujo de medios porosos y efectos de vegetación", de: "Phasenauflösendes Wellenmodell mit poröser Medienströmung und Vegetationseffekten", nl: "Fase-oplossend golfmodel met poreuze media stroming en vegetatie effecten" },
          { en: "Linear wave shoaling only", es: "Solo asomeramiento lineal de ondas", de: "Nur lineares Wellenshoaling", nl: "Alleen lineaire golfshaling" },
          { en: "Energy balance model", es: "Modelo de balance de energía", de: "Energiebilanzmodell", nl: "Energie balans model" },
          { en: "Ray tracing method", es: "Método de trazado de rayos", de: "Strahlverfolgungsmethode", nl: "Straaltracing methode" }
        ],
        correct: 0,
        explanation: {
          en: "Phase-resolving wave models with porous media flow capture the complex wave transformation over coral reefs, including wave breaking on reef crests, flow through porous coral structures, and energy dissipation by vegetation, essential for coastal protection assessment.",
          es: "Los modelos de ondas resolventes en fase con flujo de medios porosos capturan la transformación compleja de ondas sobre arrecifes de coral, incluyendo rompimiento de ondas en crestas de arrecife, flujo a través de estructuras de coral porosas y disipación de energía por vegetación, esencial para evaluación de protección costera.",
          de: "Phasenauflösende Wellenmodelle mit poröser Medienströmung erfassen die komplexe Wellentransformation über Korallenriffe, einschließlich Wellenbrechen auf Riffkämmen, Strömung durch poröse Korallenstrukturen und Energiedissipation durch Vegetation, wesentlich für Küstenschutzbewertung.",
          nl: "Fase-oplossende golfmodellen met poreuze media stroming vangen de complexe golftransformatie over koraalriffen, inclusief golfbreking op rifkammen, stroming door poreuze koraal structuren en energie dissipatie door vegetatie, essentieel voor kustbescherming beoordeling."
        }
      },
      {
        question: {
          en: "What phenomenon describes the generation of acoustic emissions during wave breaking and bubble entrainment?",
          es: "¿Qué fenómeno describe la generación de emisiones acústicas durante rompimiento de ondas y entrampamiento de burbujas?",
          de: "Welches Phänomen beschreibt die Erzeugung akustischer Emissionen während Wellenbrechen und Blasenmitreißung?",
          nl: "Welk fenomeen beschrijft de generatie van akoestische emissies tijdens golfbreking en bel meevoering?"
        },
        options: [
          { en: "Cavitation-induced sound generation with bubble oscillation and collapse", es: "Generación de sonido inducida por cavitación con oscilación y colapso de burbujas", de: "Kavitations-induzierte Schallerzeugung mit Blasenschwingung und -kollaps", nl: "Cavitatie-geïnduceerde geluid generatie met bel oscillatie en ineenstorting" },
          { en: "Simple wave splash noise", es: "Ruido simple de salpicadura de ondas", de: "Einfaches Wellenplätschergeräusch", nl: "Eenvoudig golf spetter geluid" },
          { en: "Wind-generated noise only", es: "Solo ruido generado por viento", de: "Nur winderzeugte Geräusche", nl: "Alleen wind-gegenereerd geluid" },
          { en: "Surface roughness effects", es: "Efectos de rugosidad superficial", de: "Oberflächenrauheitseffekte", nl: "Oppervlakte ruwheid effecten" }
        ],
        correct: 0,
        explanation: {
          en: "Cavitation-induced sound generation occurs when wave breaking entrains air bubbles that undergo rapid oscillation and collapse, creating broadband acoustic emissions that contribute significantly to underwater ambient noise and can be used for remote wave monitoring.",
          es: "La generación de sonido inducida por cavitación ocurre cuando el rompimiento de ondas arrastra burbujas de aire que experimentan oscilación y colapso rápidos, creando emisiones acústicas de banda ancha que contribuyen significativamente a ruido ambiental submarino y pueden usarse para monitoreo remoto de ondas.",
          de: "Kavitations-induzierte Schallerzeugung tritt auf, wenn Wellenbrechen Luftblasen mitreißt, die schnelle Schwingung und Kollaps erfahren und breitbandige akustische Emissionen erzeugen, die erheblich zu Unterwasser-Umgebungsgeräuschen beitragen und für ferne Wellenüberwachung verwendet werden können.",
          nl: "Cavitatie-geïnduceerde geluid generatie treedt op wanneer golfbreking luchtbellen meevoert die snelle oscillatie en ineenstorting ondergaan, breedband akoestische emissies creërend die significant bijdragen aan onderwater omgevingsgeluid en gebruikt kunnen worden voor remote golf monitoring."
        }
      },
      {
        question: {
          en: "Which advanced wave modeling approach incorporates both deterministic and stochastic components for extreme wave prediction?",
          es: "¿Qué enfoque avanzado de modelado de ondas incorpora componentes determinísticos y estocásticos para predicción de ondas extremas?",
          de: "Welcher fortgeschrittene Wellenmodellierungsansatz beinhaltet sowohl deterministische als auch stochastische Komponenten für extreme Wellenvorhersage?",
          nl: "Welke geavanceerde golfmodellerings benadering incorporeert zowel deterministische als stochastische componenten voor extreme golfvoorspelling?"
        },
        options: [
          { en: "Hybrid deterministic-stochastic model with phase-averaged and phase-resolved components", es: "Modelo híbrido determinístico-estocástico con componentes promediados en fase y resueltos en fase", de: "Hybrid deterministisch-stochastisches Modell mit phasengemittelten und phasenaufgelösten Komponenten", nl: "Hybride deterministische-stochastische model met fase-gemiddelde en fase-opgeloste componenten" },
          { en: "Purely deterministic model", es: "Modelo puramente determinístico", de: "Rein deterministisches Modell", nl: "Puur deterministische model" },
          { en: "Purely statistical model", es: "Modelo puramente estadístico", de: "Rein statistisches Modell", nl: "Puur statistisch model" },
          { en: "Linear superposition model", es: "Modelo de superposición lineal", de: "Lineares Überlagerungsmodell", nl: "Lineaire superpositie model" }
        ],
        correct: 0,
        explanation: {
          en: "Hybrid deterministic-stochastic models combine phase-resolved deterministic evolution for accurate nonlinear wave dynamics with phase-averaged stochastic methods for computational efficiency, providing optimal extreme wave prediction capabilities for both research and operational applications.",
          es: "Los modelos híbridos determinístico-estocásticos combinan evolución determinística resuelta en fase para dinámicas de ondas no lineales precisas con métodos estocásticos promediados en fase para eficiencia computacional, proporcionando capacidades óptimas de predicción de ondas extremas para aplicaciones tanto de investigación como operacionales.",
          de: "Hybrid deterministisch-stochastische Modelle kombinieren phasenaufgelöste deterministische Evolution für genaue nichtlineare Wellendynamik mit phasengemittelten stochastischen Methoden für Recheneffizienz und bieten optimale extreme Wellenvorhersagefähigkeiten für sowohl Forschungs- als auch Betriebsanwendungen.",
          nl: "Hybride deterministische-stochastische modellen combineren fase-opgeloste deterministische evolutie voor nauwkeurige niet-lineaire golf dynamiek met fase-gemiddelde stochastische methoden voor computationele efficiëntie, optimale extreme golfvoorspelling mogelijkheden biedend voor zowel onderzoek als operationele toepassingen."
        }
      },
      {
        question: {
          en: "What theoretical framework describes the interaction between tsunami waves and coastal morphology during inundation?",
          es: "¿Qué marco teórico describe la interacción entre ondas de tsunami y morfología costera durante inundación?",
          de: "Welcher theoretische Rahmen beschreibt die Wechselwirkung zwischen Tsunami-Wellen und Küstenmorphologie während Überschwemmung?",
          nl: "Welk theoretisch raamwerk beschrijft de interactie tussen tsunami golven en kust morfologie tijdens overstroming?"
        },
        options: [
          { en: "Coupled shallow water-sediment transport equations with morphodynamic feedback", es: "Ecuaciones acopladas de agua poco profunda-transporte de sedimentos con retroalimentación morfo-dinámica", de: "Gekoppelte Flachwasser-Sedimenttransport-Gleichungen mit morphodynamischer Rückkopplung", nl: "Gekoppelde ondiep water-sediment transport vergelijkingen met morfodynamische terugkoppeling" },
          { en: "Linear long wave theory", es: "Teoría lineal de ondas largas", de: "Lineare Langwellen-Theorie", nl: "Lineaire lange golf theorie" },
          { en: "Hydrostatic pressure model", es: "Modelo de presión hidrostática", de: "Hydrostatisches Druckmodell", nl: "Hydrostatisch druk model" },
          { en: "Fixed bathymetry assumption", es: "Suposición de batimetría fija", de: "Feste Bathymetrie-Annahme", nl: "Vaste bathymetrie aanname" }
        ],
        correct: 0,
        explanation: {
          en: "Coupled shallow water-sediment transport equations with morphodynamic feedback capture the two-way interaction where tsunami waves erode and deposit sediment, changing bathymetry and topography, which in turn affects tsunami propagation and inundation patterns.",
          es: "Las ecuaciones acopladas de agua poco profunda-transporte de sedimentos con retroalimentación morfo-dinámica capturan la interacción bidireccional donde ondas de tsunami erosionan y depositan sedimento, cambiando batimetría y topografía, que a su vez afecta propagación de tsunami y patrones de inundación.",
          de: "Gekoppelte Flachwasser-Sedimenttransport-Gleichungen mit morphodynamischer Rückkopplung erfassen die bidirektionale Wechselwirkung, bei der Tsunami-Wellen Sediment erodieren und ablagern, Bathymetrie und Topographie verändern, was wiederum Tsunami-Ausbreitung und Überschwemmungsmuster beeinflusst.",
          nl: "Gekoppelde ondiep water-sediment transport vergelijkingen met morfodynamische terugkoppeling vangen de twee-weg interactie waarbij tsunami golven sediment eroderen en afzetten, bathymetrie en topografie veranderend, wat op zijn beurt tsunami propagatie en overstromingspatronen beïnvloedt."
        }
      },
      {
        question: {
          en: "Which phenomenon describes the resonant energy transfer between wind waves and seismic waves at the seafloor?",
          es: "¿Qué fenómeno describe la transferencia resonante de energía entre ondas de viento y ondas sísmicas en el lecho marino?",
          de: "Welches Phänomen beschreibt die resonante Energieübertragung zwischen Windwellen und seismischen Wellen am Meeresboden?",
          nl: "Welk fenomeen beschrijft de resonante energie overdracht tussen windgolven en seismische golven op de zeebodem?"
        },
        options: [
          { en: "Microseismic generation through nonlinear wave-wave coupling", es: "Generación microsísmica a través de acoplamiento no lineal onda-onda", de: "Mikroseismische Erzeugung durch nichtlineare Welle-Welle-Kopplung", nl: "Microseismische generatie door niet-lineaire golf-golf koppeling" },
          { en: "Direct wave impact only", es: "Solo impacto directo de ondas", de: "Nur direkter Wellenaufprall", nl: "Alleen directe golf impact" },
          { en: "Tidal loading effects", es: "Efectos de carga de marea", de: "Gezeitenbelastungseffekte", nl: "Getijden belasting effecten" },
          { en: "Thermal expansion", es: "Expansión térmica", de: "Thermische Ausdehnung", nl: "Thermische uitzetting" }
        ],
        correct: 0,
        explanation: {
          en: "Microseismic generation occurs when nonlinear interactions between opposing wind wave trains create difference-frequency pressure variations that couple with seafloor sediments, generating seismic waves detectable by seismometers and contributing to ambient seismic noise.",
          es: "La generación microsísmica ocurre cuando interacciones no lineales entre trenes de ondas de viento opuestos crean variaciones de presión de frecuencia de diferencia que se acoplan con sedimentos del lecho marino, generando ondas sísmicas detectables por sismómetros y contribuyendo a ruido sísmico ambiental.",
          de: "Mikroseismische Erzeugung tritt auf, wenn nichtlineare Wechselwirkungen zwischen entgegengesetzten Windwellenzügen Differenzfrequenz-Druckvariationen erzeugen, die sich mit Meeresbodensedimenten koppeln und seismische Wellen erzeugen, die von Seismometern detektierbar sind und zu seismischem Umgebungsrauschen beitragen.",
          nl: "Microseismische generatie treedt op wanneer niet-lineaire interacties tussen tegengestelde windgolf treinen verschil-frequentie druk variaties creëren die koppelen met zeebodem sedimenten, seismische golven genererend die detecteerbaar zijn door seismometers en bijdragen aan ambient seismisch geluid."
        }
      },
      {
        question: {
          en: "What advanced computational technique models the complete air-sea interaction including wave-induced wind modification?",
          es: "¿Qué técnica computacional avanzada modela la interacción completa aire-mar incluyendo modificación de viento inducida por ondas?",
          de: "Welche fortgeschrittene Berechnungstechnik modelliert die vollständige Luft-Meer-Wechselwirkung einschließlich welleninduzierter Windmodifikation?",
          nl: "Welke geavanceerde computationele techniek modelleert de complete lucht-zee interactie inclusief golf-geïnduceerde wind modificatie?"
        },
        options: [
          { en: "Coupled atmosphere-ocean model with wave-modified surface roughness", es: "Modelo acoplado atmósfera-océano con rugosidad superficial modificada por ondas", de: "Gekoppeltes Atmosphäre-Ozean-Modell mit wellmodifizierter Oberflächenrauhigkeit", nl: "Gekoppeld atmosfeer-oceaan model met golf-gemodificeerde oppervlakte ruwheid" },
          { en: "Atmosphere model only", es: "Solo modelo de atmósfera", de: "Nur Atmosphärenmodell", nl: "Alleen atmosfeer model" },
          { en: "Ocean model only", es: "Solo modelo de océano", de: "Nur Ozeanmodell", nl: "Alleen oceaan model" },
          { en: "Prescribed surface fluxes", es: "Flujos superficiales prescritos", de: "Vorgeschriebene Oberflächenflüsse", nl: "Voorgeschreven oppervlakte fluxen" }
        ],
        correct: 0,
        explanation: {
          en: "Coupled atmosphere-ocean models with wave-modified surface roughness capture the complete feedback loop where waves affect wind stress through changing surface roughness, which in turn affects wave generation, creating realistic air-sea interaction for weather and climate modeling.",
          es: "Los modelos acoplados atmósfera-océano con rugosidad superficial modificada por ondas capturan el bucle de retroalimentación completo donde ondas afectan estrés del viento a través de cambio de rugosidad superficial, que a su vez afecta generación de ondas, creando interacción aire-mar realista para modelado meteorológico y climático.",
          de: "Gekoppelte Atmosphäre-Ozean-Modelle mit wellmodifizierter Oberflächenrauhigkeit erfassen die vollständige Rückkopplungsschleife, bei der Wellen Windstress durch Änderung der Oberflächenrauhigkeit beeinflussen, was wiederum Wellenerzeugung beeinflusst und realistische Luft-Meer-Wechselwirkung für Wetter- und Klimamodellierung schafft.",
          nl: "Gekoppelde atmosfeer-oceaan modellen met golf-gemodificeerde oppervlakte ruwheid vangen de complete terugkoppeling lus waarbij golven windstress beïnvloeden door veranderende oppervlakte ruwheid, wat op zijn beurt golf generatie beïnvloedt, realistische lucht-zee interactie creërend voor weer en klimaat modellering."
        }
      },
      {
        question: {
          en: "Which theoretical approach describes the statistical evolution of wave spectra in finite-depth waters with ambient currents?",
          es: "¿Qué enfoque teórico describe la evolución estadística de espectros de ondas en aguas de profundidad finita con corrientes ambientales?",
          de: "Welcher theoretische Ansatz beschreibt die statistische Evolution von Wellenspektren in Gewässern endlicher Tiefe mit Umgebungsströmungen?",
          nl: "Welke theoretische benadering beschrijft de statistische evolutie van golfspectra in eindige-diepte wateren met omgevingsstromingen?"
        },
        options: [
          { en: "Wigner transform method with current-modified dispersion relation", es: "Método de transformada de Wigner con relación de dispersión modificada por corriente", de: "Wigner-Transform-Methode mit strömungsmodifizierter Dispersionsrelation", nl: "Wigner transformatie methode met stroom-gemodificeerde dispersie relatie" },
          { en: "Deep water spectral evolution only", es: "Solo evolución espectral de agua profunda", de: "Nur Tiefwasser-spektrale Evolution", nl: "Alleen diep water spectrale evolutie" },
          { en: "Monochromatic wave analysis", es: "Análisis de ondas monocromáticas", de: "Monochromatische Wellenanalyse", nl: "Monochromatische golfanalyse" },
          { en: "Linear wave theory", es: "Teoría lineal de ondas", de: "Lineare Wellentheorie", nl: "Lineaire golftheorie" }
        ],
        correct: 0,
        explanation: {
          en: "Wigner transform method provides a phase-space description of wave spectral evolution that can incorporate finite-depth effects and current-modified dispersion relations, enabling analysis of how wave energy distribution evolves spatially and spectrally in complex coastal environments.",
          es: "El método de transformada de Wigner proporciona una descripción de espacio de fases de evolución espectral de ondas que puede incorporar efectos de profundidad finita y relaciones de dispersión modificadas por corriente, permitiendo análisis de cómo la distribución de energía de ondas evoluciona espacial y espectralmente en ambientes costeros complejos.",
          de: "Wigner-Transform-Methode bietet eine Phasenraum-Beschreibung der Wellenspektral-Evolution, die endliche Tiefeneffekte und strömungsmodifizierte Dispersionsrelationen einbeziehen kann und die Analyse ermöglicht, wie sich Wellenenergieverteilung räumlich und spektral in komplexen Küstenumgebungen entwickelt.",
          nl: "Wigner transformatie methode biedt een fase-ruimte beschrijving van golf spectrale evolutie die eindige-diepte effecten en stroom-gemodificeerde dispersie relaties kan incorporeren, analyse mogelijk makend van hoe golfenergie distributie ruimtelijk en spectraal evolueert in complexe kustomgevingen."
        }
      },
      {
        question: {
          en: "What advanced wave-seabed interaction phenomenon describes energy dissipation through viscous boundary layer effects?",
          es: "¿Qué fenómeno avanzado de interacción onda-lecho marino describe disipación de energía a través de efectos de capa límite viscosa?",
          de: "Welches fortgeschrittene Welle-Meeresboden-Wechselwirkungsphänomen beschreibt Energiedissipation durch viskose Grenzschichteffekte?",
          nl: "Welk geavanceerd golf-zeebodem interactie fenomeen beschrijft energie dissipatie door visceuze grenslaag effecten?"
        },
        options: [
          { en: "Wave-induced oscillatory boundary layer with turbulent dissipation", es: "Capa límite oscilatoria inducida por ondas con disipación turbulenta", de: "Welleninduzierte oszillatorische Grenzschicht mit turbulenter Dissipation", nl: "Golf-geïnduceerde oscillatorische grenslaag met turbulente dissipatie" },
          { en: "Linear bottom friction only", es: "Solo fricción de fondo lineal", de: "Nur lineare Bodenreibung", nl: "Alleen lineaire bodemwrijving" },
          { en: "Inviscid flow approximation", es: "Aproximación de flujo no viscoso", de: "Reibungslose Strömungsapproximation", nl: "Wrijvingloze stroming benadering" },
          { en: "Hydrostatic pressure loading", es: "Carga de presión hidrostática", de: "Hydrostatische Druckbelastung", nl: "Hydrostatische druk belasting" }
        ],
        correct: 0,
        explanation: {
          en: "Wave-induced oscillatory boundary layers develop at the seabed due to wave orbital motion, creating alternating flow directions that generate turbulence and provide significant energy dissipation, especially important for wave attenuation in shallow coastal waters.",
          es: "Las capas límite oscilatorias inducidas por ondas se desarrollan en el lecho marino debido al movimiento orbital de ondas, creando direcciones de flujo alternantes que generan turbulencia y proporcionan disipación significativa de energía, especialmente importante para atenuación de ondas en aguas costeras poco profundas.",
          de: "Welleninduzierte oszillatorische Grenzschichten entwickeln sich am Meeresboden durch Wellenorbitalbewegung und erzeugen alternierende Strömungsrichtungen, die Turbulenz generieren und erhebliche Energiedissipation bieten, besonders wichtig für Wellendämpfung in flachen Küstengewässern.",
          nl: "Golf-geïnduceerde oscillatorische grenslagen ontwikkelen zich op de zeebodem door golf orbitale beweging, alternerende stroomrichtingen creërend die turbulentie genereren en significante energie dissipatie bieden, vooral belangrijk voor golf attenuatie in ondiepe kustwateren."
        }
      },
      {
        question: {
          en: "Which computational approach accurately models the complete wave-vegetation interaction including blade flexibility and porosity effects?",
          es: "¿Qué enfoque computacional modela con precisión la interacción completa onda-vegetación incluyendo flexibilidad de hojas y efectos de porosidad?",
          de: "Welcher Rechenansatz modelliert genau die vollständige Welle-Vegetation-Wechselwirkung einschließlich Blattflexibilität und Porositätseffekte?",
          nl: "Welke computationele benadering modelleert nauwkeurig de complete golf-vegetatie interactie inclusief blad flexibiliteit en porositeit effecten?"
        },
        options: [
          { en: "Immersed boundary method with fluid-structure interaction and porous media flow", es: "Método de frontera inmersa con interacción fluido-estructura y flujo de medios porosos", de: "Eingetauchte-Grenze-Methode mit Fluid-Struktur-Wechselwirkung und poröser Medienströmung", nl: "Ondergedompelde grens methode met vloeistof-structuur interactie en poreuze media stroming" },
          { en: "Rigid cylinder drag model only", es: "Solo modelo de arrastre de cilindro rígido", de: "Nur starres Zylinder-Widerstandsmodell", nl: "Alleen stijve cilinder weerstand model" },
          { en: "Linear wave attenuation coefficient", es: "Coeficiente lineal de atenuación de ondas", de: "Linearer Wellendämpfungskoeffizient", nl: "Lineaire golf attenuatie coëfficiënt" },
          { en: "Bulk drag parameterization", es: "Parametrización de arrastre a granel", de: "Bulk-Widerstand-Parametrisierung", nl: "Bulk weerstand parametrisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Immersed boundary method with fluid-structure interaction captures the complete physics of wave-vegetation interaction, modeling flexible blade motion, porosity effects, and the complex wake structures that determine energy dissipation and wave attenuation through vegetation canopies.",
          es: "El método de frontera inmersa con interacción fluido-estructura captura la física completa de interacción onda-vegetación, modelando movimiento flexible de hojas, efectos de porosidad y estructuras de estela complejas que determinan disipación de energía y atenuación de ondas a través de dosel de vegetación.",
          de: "Eingetauchte-Grenze-Methode mit Fluid-Struktur-Wechselwirkung erfasst die vollständige Physik der Welle-Vegetation-Wechselwirkung, modelliert flexible Blattbewegung, Porositätseffekte und komplexe Nachströmungsstrukturen, die Energiedissipation und Wellendämpfung durch Vegetationsüberdachungen bestimmen.",
          nl: "Ondergedompelde grens methode met vloeistof-structuur interactie vangt de complete fysica van golf-vegetatie interactie, flexibele blad beweging, porositeit effecten en complexe kielzog structuren modellerend die energie dissipatie en golf attenuatie door vegetatie kappen bepalen."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mind-bender/oceanography', level3);
  }
})();