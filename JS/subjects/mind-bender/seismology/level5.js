(function() {
const level5 = {
  name: { en: 'Seismic Tomography & Imaging', es: 'Tomografía e Imagen Sísmica', de: 'Seismische Tomographie & Bildgebung', nl: 'Seismische Tomografie & Beeldvorming' },
  questions: [
    {
      question: {
        en: "What is the fundamental physical principle underlying finite-frequency seismic tomography?",
        es: "¿Cuál es el principio físico fundamental subyacente a la tomografía sísmica de frecuencia finita?",
        de: "Was ist das grundlegende physikalische Prinzip der endlich-frequenten seismischen Tomographie?",
        nl: "Wat is het fundamentele fysieke principe onderliggend aan eindige-frequentie seismische tomografie?"
      },
      options: [
        { en: "Fresnel zone sensitivity theory", es: "Teoría de sensibilidad de zona de Fresnel", de: "Fresnel-Zonen-Sensitivitätstheorie", nl: "Fresnel zone gevoeligheidstheorie" },
        { en: "Ray path averaging", es: "Promediación de trayectoria de rayos", de: "Strahlpfad-Mittelung", nl: "Straalpad gemiddelde" },
        { en: "Travel time linearization", es: "Linealización de tiempo de viaje", de: "Laufzeit-Linearisierung", nl: "Reistijd linearisatie" },
        { en: "Geometric ray theory only", es: "Solo teoría de rayos geométricos", de: "Nur geometrische Strahlentheorie", nl: "Alleen geometrische straaltheorie" }
      ],
      correct: 0,
      explanation: {
        en: "Finite-frequency tomography is based on Fresnel zone sensitivity theory, which recognizes that seismic waves have finite wavelengths and sample a volume around the geometric ray path. This approach uses sensitivity kernels that account for wave diffraction and scattering, providing more accurate imaging than ray-based methods.",
        es: "La tomografía de frecuencia finita se basa en la teoría de sensibilidad de zona de Fresnel, que reconoce que las ondas sísmicas tienen longitudes de onda finitas y muestrean un volumen alrededor de la trayectoria geométrica del rayo. Este enfoque usa núcleos de sensibilidad que consideran difracción y dispersión de ondas, proporcionando imágenes más precisas que métodos basados en rayos.",
        de: "Die endlich-frequente Tomographie basiert auf der Fresnel-Zonen-Sensitivitätstheorie, die anerkennt, dass seismische Wellen endliche Wellenlängen haben und ein Volumen um den geometrischen Strahlpfad abtasten. Dieser Ansatz verwendet Sensitivitätskerne, die Wellenbeugung und -streuung berücksichtigen und genauere Bildgebung als strahlenbasierte Methoden bieten.",
        nl: "Eindige-frequentie tomografie is gebaseerd op Fresnel zone gevoeligheidstheorie, die erkent dat seismische golven eindige golflengtes hebben en een volume rond het geometrische straalpad bemonsteren. Deze benadering gebruikt gevoeligheidskernen die golfbuiging en verstrooiing in rekening brengen, wat nauwkeurigere beeldvorming biedt dan straal-gebaseerde methoden."
      }
    },
    {
      question: {
        en: "What seismic parameter quantifies the coupling between solid Earth and atmosphere during large earthquakes?",
        es: "¿Qué parámetro sísmico cuantifica el acoplamiento entre la Tierra sólida y la atmósfera durante grandes terremotos?",
        de: "Welcher seismische Parameter quantifiziert die Kopplung zwischen fester Erde und Atmosphäre bei großen Erdbeben?",
        nl: "Welke seismische parameter kwantificeert de koppeling tussen vaste aarde en atmosfeer tijdens grote aardbevingen?"
      },
      options: [
        { en: "Atmospheric gravity wave amplitude", es: "Amplitud de onda de gravedad atmosférica", de: "Atmosphärische Schwerewellenamplitude", nl: "Atmosferische zwaartekrachts golf amplitude" },
        { en: "Surface displacement magnitude", es: "Magnitud de desplazamiento superficial", de: "Oberflächenverschiebungsmagnitude", nl: "Oppervlakte verplaatsing grootte" },
        { en: "Seismic moment release rate", es: "Tasa de liberación de momento sísmico", de: "Seismische Momentfreisetzungsrate", nl: "Seismisch moment vrijgave snelheid" },
        { en: "Ground acceleration peaks", es: "Picos de aceleración del suelo", de: "Bodenbeschleunigungsspitzen", nl: "Grond versnelling pieken" }
      ],
      correct: 0,
      explanation: {
        en: "Atmospheric gravity wave amplitude quantifies the coupling between solid Earth and atmosphere during earthquakes. Large surface waves from major earthquakes generate atmospheric gravity waves that propagate upward, detectable by infrasound arrays and GPS measurements of ionospheric disturbances, providing insights into earthquake-atmosphere interactions.",
        es: "La amplitud de onda de gravedad atmosférica cuantifica el acoplamiento entre la Tierra sólida y la atmósfera durante terremotos. Las ondas superficiales grandes de terremotos mayores generan ondas de gravedad atmosféricas que se propagan hacia arriba, detectables por arreglos de infrasonido y mediciones GPS de perturbaciones ionosféricas, proporcionando conocimientos sobre interacciones terremoto-atmósfera.",
        de: "Die atmosphärische Schwerewellenamplitude quantifiziert die Kopplung zwischen fester Erde und Atmosphäre bei Erdbeben. Große Oberflächenwellen von schweren Erdbeben erzeugen atmosphärische Schwerewellen, die sich nach oben ausbreiten und durch Infraschall-Arrays und GPS-Messungen ionosphärischer Störungen detektierbar sind, wodurch Einblicke in Erdbeben-Atmosphäre-Wechselwirkungen gewonnen werden.",
        nl: "Atmosferische zwaartekrachts golf amplitude kwantificeert de koppeling tussen vaste aarde en atmosfeer tijdens aardbevingen. Grote oppervlaktegolven van grote aardbevingen genereren atmosferische zwaartekrachts golven die omhoog voortplanten, detecteerbaar door infrageluid arrays en GPS metingen van ionosferische verstoringen, wat inzichten biedt in aardbeving-atmosfeer interacties."
      }
    },
    {
      question: {
        en: "What advanced technique uses seismic interferometry to extract Green's functions from ambient noise?",
        es: "¿Qué técnica avanzada utiliza interferometría sísmica para extraer funciones de Green del ruido ambiental?",
        de: "Welche fortgeschrittene Technik nutzt seismische Interferometrie zur Extraktion von Green-Funktionen aus Umgebungsrauschen?",
        nl: "Welke geavanceerde techniek gebruikt seismische interferometrie om Green's functies uit omgevingsruis te extraheren?"
      },
      options: [
        { en: "Cross-correlation of continuous recordings", es: "Correlación cruzada de registros continuos", de: "Kreuzkorrelation kontinuierlicher Aufzeichnungen", nl: "Kruiscorrelatie van continue opnames" },
        { en: "Spectral domain deconvolution", es: "Deconvolución de dominio espectral", de: "Spektralbereich-Entfaltung", nl: "Spectrale domein deconvolutie" },
        { en: "Time-frequency analysis only", es: "Solo análisis tiempo-frecuencia", de: "Nur Zeit-Frequenz-Analyse", nl: "Alleen tijd-frequentie analyse" },
        { en: "Phase velocity measurements", es: "Mediciones de velocidad de fase", de: "Phasengeschwindigkeitsmessungen", nl: "Fasesnelheid metingen" }
      ],
      correct: 0,
      explanation: {
        en: "Cross-correlation of continuous seismic noise recordings between station pairs extracts empirical Green's functions, effectively turning one station into a virtual source. This technique exploits the diffuse wavefield principle, where ambient noise acts as a random source distribution, enabling passive imaging of subsurface structure without active sources.",
        es: "La correlación cruzada de registros continuos de ruido sísmico entre pares de estaciones extrae funciones empíricas de Green, efectivamente convirtiendo una estación en una fuente virtual. Esta técnica explota el principio de campo de ondas difuso, donde el ruido ambiental actúa como una distribución de fuente aleatoria, permitiendo imágenes pasivas de la estructura del subsuelo sin fuentes activas.",
        de: "Kreuzkorrelation kontinuierlicher seismischer Rauschaufzeichnungen zwischen Stationspaaren extrahiert empirische Green-Funktionen und macht effektiv eine Station zu einer virtuellen Quelle. Diese Technik nutzt das diffuse Wellenfeld-Prinzip, wo Umgebungsrauschen als zufällige Quellenverteilung wirkt und passive Bildgebung der Untergrundstruktur ohne aktive Quellen ermöglicht.",
        nl: "Kruiscorrelatie van continue seismische ruis opnames tussen stationparen extraheert empirische Green's functies, wat effectief één station in een virtuele bron verandert. Deze techniek benut het diffuse golfveld principe, waarbij omgevingsruis werkt als een willekeurige bron distributie, wat passieve beeldvorming van ondergrondse structuur mogelijk maakt zonder actieve bronnen."
      }
    },
    {
      question: {
        en: "What determines the resolution limits of seismic tomographic imaging?",
        es: "¿Qué determina los límites de resolución de la imagen tomográfica sísmica?",
        de: "Was bestimmt die Auflösungsgrenzen seismischer tomographischer Bildgebung?",
        nl: "Wat bepaalt de resolutie grenzen van seismische tomografische beeldvorming?"
      },
      options: [
        { en: "Wavelength, station spacing, and ray path coverage", es: "Longitud de onda, espaciado de estaciones y cobertura de trayectoria de rayos", de: "Wellenlänge, Stationsabstand und Strahlpfadabdeckung", nl: "Golflengte, station afstand, en straalpad dekking" },
        { en: "Only earthquake magnitude", es: "Solo magnitud del terremoto", de: "Nur Erdbebenmagnitude", nl: "Alleen aardbevingsmagnitude" },
        { en: "Recording duration only", es: "Solo duración de registro", de: "Nur Aufzeichnungsdauer", nl: "Alleen opname duur" },
        { en: "Signal-to-noise ratio only", es: "Solo relación señal-ruido", de: "Nur Signal-Rausch-Verhältnis", nl: "Alleen signaal-ruis verhouding" }
      ],
      correct: 0,
      explanation: {
        en: "Seismic tomographic resolution is fundamentally limited by wavelength (determines minimum resolvable feature size), station spacing (controls spatial aliasing), and ray path coverage (determines which parts of the model are constrained). The Fresnel zone size, proportional to √(wavelength × distance), sets the practical resolution limit for different frequencies and source-receiver distances.",
        es: "La resolución tomográfica sísmica está fundamentalmente limitada por la longitud de onda (determina el tamaño mínimo de característica resoluble), espaciado de estaciones (controla aliasing espacial), y cobertura de trayectoria de rayos (determina qué partes del modelo están restringidas). El tamaño de la zona de Fresnel, proporcional a √(longitud de onda × distancia), establece el límite de resolución práctica para diferentes frecuencias y distancias fuente-receptor.",
        de: "Die seismische tomographische Auflösung ist fundamental durch Wellenlänge (bestimmt minimale auflösbare Merkmalsgröße), Stationsabstand (kontrolliert räumliches Aliasing) und Strahlpfadabdeckung (bestimmt welche Modellteile beschränkt sind) begrenzt. Die Fresnel-Zonengröße, proportional zu √(Wellenlänge × Entfernung), setzt die praktische Auflösungsgrenze für verschiedene Frequenzen und Quelle-Empfänger-Entfernungen.",
        nl: "Seismische tomografische resolutie wordt fundamenteel beperkt door golflengte (bepaalt minimum oplosbare kenmerk grootte), station afstand (controleert ruimtelijke aliasing), en straalpad dekking (bepaalt welke delen van het model beperkt zijn). De Fresnel zone grootte, evenredig aan √(golflengte × afstand), stelt de praktische resolutie grens vast voor verschillende frequenties en bron-ontvanger afstanden."
      }
    },
    {
      question: {
        en: "What seismic phenomenon is characterized by systematic variations in shear wave splitting parameters with propagation direction?",
        es: "¿Qué fenómeno sísmico se caracteriza por variaciones sistemáticas en parámetros de división de ondas de corte con dirección de propagación?",
        de: "Welches seismische Phänomen ist durch systematische Variationen in Scherwellenaufspaltungsparametern mit Ausbreitungsrichtung charakterisiert?",
        nl: "Welk seismisch fenomeen wordt gekenmerkt door systematische variaties in schuifgolf splitsing parameters met voortplantingsrichting?"
      },
      options: [
        { en: "Hexagonal anisotropy with tilted symmetry axis", es: "Anisotropía hexagonal con eje de simetría inclinado", de: "Hexagonale Anisotropie mit geneigter Symmetrieachse", nl: "Hexagonale anisotropie met gekantelde symmetrie-as" },
        { en: "Isotropic velocity variations", es: "Variaciones de velocidad isotrópicas", de: "Isotrope Geschwindigkeitsvariationen", nl: "Isotrope snelheidsvariaties" },
        { en: "Simple orthorhombic anisotropy", es: "Anisotropía ortorrómbica simple", de: "Einfache orthorhombische Anisotropie", nl: "Eenvoudige orthorhombische anisotropie" },
        { en: "Random crack orientations", es: "Orientaciones de grietas aleatorias", de: "Zufällige Rissorientierungen", nl: "Willekeurige scheur oriëntaties" }
      ],
      correct: 0,
      explanation: {
        en: "Hexagonal anisotropy with tilted symmetry axis produces systematic variations in shear wave splitting parameters (fast direction and delay time) as functions of propagation direction relative to the symmetry axis. This complex anisotropic structure is common in the upper mantle where olivine crystals have preferred orientations due to mantle flow.",
        es: "La anisotropía hexagonal con eje de simetría inclinado produce variaciones sistemáticas en parámetros de división de ondas de corte (dirección rápida y tiempo de retraso) como funciones de dirección de propagación relativa al eje de simetría. Esta estructura anisotrópica compleja es común en el manto superior donde cristales de olivino tienen orientaciones preferidas debido al flujo del manto.",
        de: "Hexagonale Anisotropie mit geneigter Symmetrieachse erzeugt systematische Variationen in Scherwellenaufspaltungsparametern (schnelle Richtung und Verzögerungszeit) als Funktionen der Ausbreitungsrichtung relativ zur Symmetrieachse. Diese komplexe anisotrope Struktur ist im oberen Mantel üblich, wo Olivinkristalle aufgrund von Mantelströmung bevorzugte Orientierungen haben.",
        nl: "Hexagonale anisotropie met gekantelde symmetrie-as produceert systematische variaties in schuifgolf splitsing parameters (snelle richting en vertragingstijd) als functies van voortplantingsrichting relatief tot de symmetrie-as. Deze complexe anisotrope structuur is algemeen in de bovenmantel waar olivijn kristallen geprefereerde oriëntaties hebben door mantelvloeien."
      }
    },
    {
      question: {
        en: "What advanced computational approach is used for full-waveform earthquake source inversion?",
        es: "¿Qué enfoque computacional avanzado se utiliza para inversión de fuente de terremoto de forma de onda completa?",
        de: "Welcher fortgeschrittene Berechnungsansatz wird für Vollwellenform-Erdbebenquelleninversion verwendet?",
        nl: "Welke geavanceerde computationele benadering wordt gebruikt voor volledige-golfvorm aardbevingsbron inversie?"
      },
      options: [
        { en: "Adjoint-state method with gradient optimization", es: "Método de estado adjunto con optimización de gradiente", de: "Adjungierte-Zustands-Methode mit Gradientenoptimierung", nl: "Toegevoegde-toestand methode met gradiënt optimalisatie" },
        { en: "Simple grid search only", es: "Solo búsqueda de cuadrícula simple", de: "Nur einfache Rastersuche", nl: "Alleen eenvoudige rooster zoektocht" },
        { en: "Linear least squares fitting", es: "Ajuste de mínimos cuadrados lineales", de: "Lineare kleinste Quadrate Anpassung", nl: "Lineaire kleinste kwadraten aanpassing" },
        { en: "Frequency domain correlation", es: "Correlación de dominio de frecuencia", de: "Frequenzbereich-Korrelation", nl: "Frequentiedomein correlatie" }
      ],
      correct: 0,
      explanation: {
        en: "The adjoint-state method with gradient optimization efficiently computes sensitivity kernels for full-waveform inversion by solving both forward and adjoint wave equations. This approach enables simultaneous inversion for multiple source parameters (location, mechanism, time function) using complete waveform information, providing higher resolution than traditional methods.",
        es: "El método de estado adjunto con optimización de gradiente calcula eficientemente núcleos de sensibilidad para inversión de forma de onda completa resolviendo tanto ecuaciones de ondas directas como adjuntas. Este enfoque permite inversión simultánea para múltiples parámetros de fuente (ubicación, mecanismo, función de tiempo) usando información completa de forma de onda, proporcionando mayor resolución que métodos tradicionales.",
        de: "Die adjungierte-Zustands-Methode mit Gradientenoptimierung berechnet effizient Sensitivitätskerne für Vollwellenform-Inversion durch Lösen sowohl vorwärts- als auch adjungierter Wellengleichungen. Dieser Ansatz ermöglicht simultane Inversion für mehrere Quellenparameter (Ort, Mechanismus, Zeitfunktion) unter Verwendung vollständiger Wellenforminformation und bietet höhere Auflösung als traditionelle Methoden.",
        nl: "De toegevoegde-toestand methode met gradiënt optimalisatie berekent efficiënt gevoeligheidskernen voor volledige-golfvorm inversie door zowel voorwaartse als toegevoegde golfvergelijkingen op te lossen. Deze benadering maakt simultane inversie mogelijk voor meerdere bron parameters (locatie, mechanisme, tijdsfunctie) gebruik makend van complete golfvorm informatie, wat hogere resolutie biedt dan traditionele methoden."
      }
    },
    {
      question: {
        en: "What seismic parameter characterizes the non-linear behavior of seismic wave propagation in strongly heterogeneous media?",
        es: "¿Qué parámetro sísmico caracteriza el comportamiento no lineal de la propagación de ondas sísmicas en medios fuertemente heterogéneos?",
        de: "Welcher seismische Parameter charakterisiert das nichtlineare Verhalten seismischer Wellenausbreitung in stark heterogenen Medien?",
        nl: "Welke seismische parameter kenmerkt het niet-lineaire gedrag van seismische golfvoortplanting in sterk heterogene media?"
      },
      options: [
        { en: "Scattering strength coefficient", es: "Coeficiente de fuerza de dispersión", de: "Streuungsstärkekoeffizient", nl: "Verstrooiingssterkte coëfficiënt" },
        { en: "Linear velocity gradient", es: "Gradiente de velocidad lineal", de: "Linearer Geschwindigkeitsgradient", nl: "Lineaire snelheidsgradiënt" },
        { en: "Constant attenuation factor", es: "Factor de atenuación constante", de: "Konstanter Dämpfungsfaktor", nl: "Constante dempingsfactor" },
        { en: "Elastic modulus variation", es: "Variación del módulo elástico", de: "Elastizitätsmodulvariation", nl: "Elasticiteitsmodulus variatie" }
      ],
      correct: 0,
      explanation: {
        en: "The scattering strength coefficient quantifies non-linear wave propagation effects in strongly heterogeneous media where multiple scattering dominates. When g₀ > 1 (where g₀ = k·l·σ, k is wavenumber, l is correlation length, σ is velocity fluctuation), waves undergo multiple scattering, leading to diffusive rather than ballistic propagation and complex coda formation.",
        es: "El coeficiente de fuerza de dispersión cuantifica efectos de propagación de ondas no lineales en medios fuertemente heterogéneos donde domina la dispersión múltiple. Cuando g₀ > 1 (donde g₀ = k·l·σ, k es número de onda, l es longitud de correlación, σ es fluctuación de velocidad), las ondas experimentan dispersión múltiple, llevando a propagación difusiva en lugar de balística y formación compleja de coda.",
        de: "Der Streuungsstärkekoeffizient quantifiziert nichtlineare Wellenausbreitungseffekte in stark heterogenen Medien, wo Mehrfachstreuung dominiert. Wenn g₀ > 1 (wobei g₀ = k·l·σ, k ist Wellenzahl, l ist Korrelationslänge, σ ist Geschwindigkeitsfluktuation), erfahren Wellen Mehrfachstreuung, was zu diffusiver statt ballistischer Ausbreitung und komplexer Coda-Bildung führt.",
        nl: "De verstrooiingssterkte coëfficiënt kwantificeert niet-lineaire golfvoortplanting effecten in sterk heterogene media waar meervoudige verstrooiing domineert. Wanneer g₀ > 1 (waarbij g₀ = k·l·σ, k is golfgetal, l is correlatie lengte, σ is snelheidsfluctuatie), ondergaan golven meervoudige verstrooiing, wat leidt tot diffusieve in plaats van ballistische voortplanting en complexe coda vorming."
      }
    },
    {
      question: {
        en: "What seismic imaging technique uses the coda of scattered waves to map small-scale heterogeneities?",
        es: "¿Qué técnica de imagen sísmica utiliza la coda de ondas dispersas para mapear heterogeneidades de pequeña escala?",
        de: "Welche seismische Bildgebungstechnik nutzt die Coda gestreuter Wellen zur Kartierung kleinräumiger Heterogenitäten?",
        nl: "Welke seismische beeldvormingstechniek gebruikt de coda van verstrooide golven om kleinschalige heterogeniteiten in kaart te brengen?"
      },
      options: [
        { en: "Coda wave interferometry", es: "Interferometría de ondas coda", de: "Coda-Wellen-Interferometrie", nl: "Coda golf interferometrie" },
        { en: "Surface wave tomography", es: "Tomografía de ondas superficiales", de: "Oberflächenwellen-Tomographie", nl: "Oppervlaktegolf tomografie" },
        { en: "Body wave migration", es: "Migración de ondas internas", de: "Raumwellen-Migration", nl: "Ruimtegolf migratie" },
        { en: "Reflection profiling", es: "Perfilado de reflexión", de: "Reflexionsprofilierung", nl: "Reflectie profilering" }
      ],
      correct: 0,
      explanation: {
        en: "Coda wave interferometry analyzes temporal changes in multiply-scattered coda waves to detect and monitor small-scale structural changes with unprecedented sensitivity. The technique exploits the fact that coda waves sample the medium repeatedly through multiple scattering paths, amplifying the sensitivity to small velocity perturbations that would be undetectable with direct wave methods.",
        es: "La interferometría de ondas coda analiza cambios temporales en ondas coda múltiplemente dispersas para detectar y monitorear cambios estructurales de pequeña escala con sensibilidad sin precedentes. La técnica explota el hecho de que las ondas coda muestrean el medio repetidamente a través de múltiples trayectorias de dispersión, amplificando la sensibilidad a pequeñas perturbaciones de velocidad que serían indetectables con métodos de ondas directas.",
        de: "Coda-Wellen-Interferometrie analysiert zeitliche Änderungen in mehrfach gestreuten Coda-Wellen, um kleinräumige Strukturänderungen mit beispielloser Empfindlichkeit zu detektieren und zu überwachen. Die Technik nutzt die Tatsache, dass Coda-Wellen das Medium wiederholt durch multiple Streupfade abtasten und dadurch die Empfindlichkeit für kleine Geschwindigkeitsstörungen verstärken, die mit direkten Wellenmethoden undetektierbar wären.",
        nl: "Coda golf interferometrie analyseert temporele veranderingen in meervoudig-verstrooide coda golven om kleinschalige structurele veranderingen te detecteren en monitoren met ongekende gevoeligheid. De techniek benut het feit dat coda golven het medium herhaaldelijk bemonsteren door meerdere verstrooiingspaden, wat de gevoeligheid voor kleine snelheidsverstoringen vergroot die ondetecteerbaar zouden zijn met directe golfmethoden."
      }
    },
    {
      question: {
        en: "What controls the frequency-dependent polarization characteristics of Rayleigh waves in layered media?",
        es: "¿Qué controla las características de polarización dependientes de la frecuencia de las ondas Rayleigh en medios estratificados?",
        de: "Was kontrolliert die frequenzabhängigen Polarisationscharakteristika von Rayleigh-Wellen in geschichteten Medien?",
        nl: "Wat controleert de frequentie-afhankelijke polarisatie karakteristieken van Rayleigh-golven in gelaagde media?"
      },
      options: [
        { en: "Depth-dependent shear wave velocity structure", es: "Estructura de velocidad de ondas de corte dependiente de la profundidad", de: "Tiefenabhängige Scherwellengeschwindigkeitsstruktur", nl: "Diepte-afhankelijke schuifgolf snelheidsstructuur" },
        { en: "Surface topography only", es: "Solo topografía superficial", de: "Nur Oberflächentopographie", nl: "Alleen oppervlakte topografie" },
        { en: "Source mechanism variations", es: "Variaciones de mecanismo de fuente", de: "Quellenmechanismusvariationen", nl: "Bron mechanisme variaties" },
        { en: "Recording instrument response", es: "Respuesta del instrumento de registro", de: "Aufzeichnungsinstrumentenantwort", nl: "Opname instrument respons" }
      ],
      correct: 0,
      explanation: {
        en: "The frequency-dependent polarization of Rayleigh waves is controlled by depth-dependent shear wave velocity structure. Different frequencies penetrate to different depths, sampling varying velocity structures that control the ellipticity (horizontal-to-vertical amplitude ratio) and the direction of particle motion, making Rayleigh wave polarization analysis a powerful tool for near-surface structure determination.",
        es: "La polarización dependiente de la frecuencia de las ondas Rayleigh es controlada por la estructura de velocidad de ondas de corte dependiente de la profundidad. Diferentes frecuencias penetran a diferentes profundidades, muestreando estructuras de velocidad variables que controlan la elipticidad (relación de amplitud horizontal-a-vertical) y la dirección del movimiento de partículas, haciendo del análisis de polarización de ondas Rayleigh una herramienta poderosa para determinación de estructura cerca de la superficie.",
        de: "Die frequenzabhängige Polarisation von Rayleigh-Wellen wird durch tiefenabhängige Scherwellengeschwindigkeitsstruktur kontrolliert. Verschiedene Frequenzen dringen in verschiedene Tiefen ein und tasten variierende Geschwindigkeitsstrukturen ab, die die Elliptizität (horizontal-zu-vertikal Amplitudenverhältnis) und die Richtung der Partikelbewegung kontrollieren, wodurch Rayleigh-Wellen-Polarisationsanalyse ein mächtiges Werkzeug für oberflächennahe Strukturbestimmung wird.",
        nl: "De frequentie-afhankelijke polarisatie van Rayleigh-golven wordt gecontroleerd door diepte-afhankelijke schuifgolf snelheidsstructuur. Verschillende frequenties dringen door tot verschillende diepten, bemonsteren variërende snelheidsstructuren die de ellipticiteit (horizontaal-naar-verticaal amplitude verhouding) en de richting van deeltjesbeweging controleren, wat Rayleigh golf polarisatie analyse tot een krachtig gereedschap maakt voor nabij-oppervlak structuur bepaling."
      }
    },
    {
      question: {
        en: "What seismic parameter quantifies the efficiency of energy transfer between different seismic wave modes at discontinuities?",
        es: "¿Qué parámetro sísmico cuantifica la eficiencia de transferencia de energía entre diferentes modos de ondas sísmicas en discontinuidades?",
        de: "Welcher seismische Parameter quantifiziert die Effizienz der Energieübertragung zwischen verschiedenen seismischen Wellenmodi an Diskontinuitäten?",
        nl: "Welke seismische parameter kwantificeert de efficiëntie van energietransfer tussen verschillende seismische golfmodussen bij discontinuïteiten?"
      },
      options: [
        { en: "Mode conversion coefficient", es: "Coeficiente de conversión de modo", de: "Modenumwandlungskoeffizient", nl: "Modus conversie coëfficiënt" },
        { en: "Reflection coefficient only", es: "Solo coeficiente de reflexión", de: "Nur Reflexionskoeffizient", nl: "Alleen reflectie coëfficiënt" },
        { en: "Transmission coefficient only", es: "Solo coeficiente de transmisión", de: "Nur Transmissionskoeffizient", nl: "Alleen transmissie coëfficiënt" },
        { en: "Impedance contrast ratio", es: "Relación de contraste de impedancia", de: "Impedanzkontrasteverhältnis", nl: "Impedantie contrast verhouding" }
      ],
      correct: 0,
      explanation: {
        en: "The mode conversion coefficient quantifies how efficiently seismic energy converts between different wave types (P to S, S to P, body to surface waves) at velocity discontinuities. These coefficients depend on incidence angle, impedance contrasts, and boundary geometry, governing phenomena like P-to-S conversions at the Moho and core-mantle boundary reflections.",
        es: "El coeficiente de conversión de modo cuantifica cuán eficientemente la energía sísmica se convierte entre diferentes tipos de ondas (P a S, S a P, ondas internas a superficiales) en discontinuidades de velocidad. Estos coeficientes dependen del ángulo de incidencia, contrastes de impedancia y geometría del límite, gobernando fenómenos como conversiones P-a-S en el Moho y reflexiones del límite núcleo-manto.",
        de: "Der Modenumwandlungskoeffizient quantifiziert, wie effizient seismische Energie zwischen verschiedenen Wellentypen (P zu S, S zu P, Raum- zu Oberflächenwellen) an Geschwindigkeitsdiskontinuitäten umgewandelt wird. Diese Koeffizienten hängen von Einfallswinkel, Impedanzkontrasten und Grenzgeometrie ab und steuern Phänomene wie P-zu-S-Umwandlungen an der Moho und Kern-Mantel-Grenzreflexionen.",
        nl: "De modus conversie coëfficiënt kwantificeert hoe efficiënt seismische energie converteert tussen verschillende golftypes (P naar S, S naar P, ruimte naar oppervlakte golven) bij snelheidsdiscontinuïteiten. Deze coëfficiënten hangen af van invalshoek, impedantie contrasten, en grens geometrie, beheersen fenomenen zoals P-naar-S conversies bij de Moho en kern-mantel grens reflecties."
      }
    },
    {
      question: {
        en: "What advanced seismic analysis technique uses higher-order statistics to characterize non-Gaussian noise distributions?",
        es: "¿Qué técnica avanzada de análisis sísmico utiliza estadísticas de orden superior para caracterizar distribuciones de ruido no gaussianas?",
        de: "Welche fortgeschrittene seismische Analysetechnik nutzt Statistiken höherer Ordnung zur Charakterisierung nicht-gaussscher Rauschverteilungen?",
        nl: "Welke geavanceerde seismische analysetechniek gebruikt hogere-orde statistieken om niet-Gaussiaanse ruis distributies te karakteriseren?"
      },
      options: [
        { en: "Kurtosis and skewness analysis", es: "Análisis de curtosis y asimetría", de: "Kurtosis- und Schiefe-Analyse", nl: "Kurtosis en scheefheid analyse" },
        { en: "Simple variance calculation", es: "Cálculo de varianza simple", de: "Einfache Varianzberechnung", nl: "Eenvoudige variantie berekening" },
        { en: "Mean amplitude measurement", es: "Medición de amplitud promedio", de: "Mittlere Amplitudenmessung", nl: "Gemiddelde amplitude meting" },
        { en: "Linear correlation only", es: "Solo correlación lineal", de: "Nur lineare Korrelation", nl: "Alleen lineaire correlatie" }
      ],
      correct: 0,
      explanation: {
        en: "Kurtosis and skewness analysis characterizes non-Gaussian noise distributions in seismic data. Kurtosis measures the tail heaviness of probability distributions (detecting impulsive noise), while skewness measures asymmetry. These higher-order statistics help identify various noise sources, optimize filtering strategies, and improve signal detection in complex noise environments.",
        es: "El análisis de curtosis y asimetría caracteriza distribuciones de ruido no gaussianas en datos sísmicos. La curtosis mide la pesadez de las colas de distribuciones de probabilidad (detectando ruido impulsivo), mientras que la asimetría mide asimetría. Estas estadísticas de orden superior ayudan a identificar varias fuentes de ruido, optimizar estrategias de filtrado y mejorar la detección de señales en entornos de ruido complejos.",
        de: "Kurtosis- und Schiefe-Analyse charakterisiert nicht-gausssche Rauschverteilungen in seismischen Daten. Kurtosis misst die Schwere der Verteilungsenden (Detektion von impulsivem Rauschen), während Schiefe die Asymmetrie misst. Diese Statistiken höherer Ordnung helfen verschiedene Rauschquellen zu identifizieren, Filterstrategien zu optimieren und Signaldetektion in komplexen Rauschumgebungen zu verbessern.",
        nl: "Kurtosis en scheefheid analyse karakteriseert niet-Gaussiaanse ruis distributies in seismische data. Kurtosis meet de staart zwaarte van waarschijnlijkheids distributies (detecteren van impulsieve ruis), terwijl scheefheid asymmetrie meet. Deze hogere-orde statistieken helpen verschillende ruisbronnen identificeren, filter strategieën optimaliseren en signaal detectie verbeteren in complexe ruis omgevingen."
      }
    },
    {
      question: {
        en: "What seismic parameter characterizes the spatial variability of earthquake stress drop within individual rupture zones?",
        es: "¿Qué parámetro sísmico caracteriza la variabilidad espacial de la caída de esfuerzo del terremoto dentro de zonas de ruptura individuales?",
        de: "Welcher seismische Parameter charakterisiert die räumliche Variabilität des Erdbeben-Spannungsabfalls innerhalb individueller Bruchzonen?",
        nl: "Welke seismische parameter kenmerkt de ruimtelijke variabiliteit van aardbeving spanningsafname binnen individuele breukzones?"
      },
      options: [
        { en: "Stress drop heterogeneity parameter", es: "Parámetro de heterogeneidad de caída de esfuerzo", de: "Spannungsabfall-Heterogenitätsparameter", nl: "Spanning afname heterogeniteit parameter" },
        { en: "Average fault slip only", es: "Solo deslizamiento de falla promedio", de: "Nur durchschnittlicher Verwerfungsschlupf", nl: "Alleen gemiddelde breuk slip" },
        { en: "Total seismic moment", es: "Momento sísmico total", de: "Gesamtes seismisches Moment", nl: "Totale seismisch moment" },
        { en: "Rupture area measurement", es: "Medición del área de ruptura", de: "Bruchflächenmessung", nl: "Breuk gebied meting" }
      ],
      correct: 0,
      explanation: {
        en: "The stress drop heterogeneity parameter quantifies spatial variations in stress release within earthquake ruptures, typically expressed as the coefficient of variation of stress drop distribution. High heterogeneity indicates complex rupture with alternating high and low stress drop patches (asperities and barriers), while low heterogeneity suggests more uniform stress release patterns.",
        es: "El parámetro de heterogeneidad de caída de esfuerzo cuantifica variaciones espaciales en liberación de esfuerzo dentro de rupturas de terremotos, típicamente expresado como el coeficiente de variación de la distribución de caída de esfuerzo. Alta heterogeneidad indica ruptura compleja con parches alternantes de alta y baja caída de esfuerzo (asperezas y barreras), mientras que baja heterogeneidad sugiere patrones de liberación de esfuerzo más uniformes.",
        de: "Der Spannungsabfall-Heterogenitätsparameter quantifiziert räumliche Variationen in Spannungsfreisetzung innerhalb von Erdbebenbrüchen, typischerweise ausgedrückt als Variationskoeffizient der Spannungsabfallverteilung. Hohe Heterogenität zeigt komplexe Brüche mit alternierenden hohen und niedrigen Spannungsabfallflecken (Asperitäten und Barrieren) an, während niedrige Heterogenität gleichmäßigere Spannungsfreisetzungsmuster suggeriert.",
        nl: "De spanning afname heterogeniteit parameter kwantificeert ruimtelijke variaties in spanning vrijgave binnen aardbeving breuken, meestal uitgedrukt als de variatie coëfficiënt van spanning afname distributie. Hoge heterogeniteit duidt op complexe breuk met afwisselende hoge en lage spanning afname plekken (asperiteiten en barrières), terwijl lage heterogeniteit meer uniforme spanning vrijgave patronen suggereert."
      }
    },
    {
      question: {
        en: "What determines the optimal frequency band for maximum sensitivity in ambient noise tomography?",
        es: "¿Qué determina la banda de frecuencia óptima para máxima sensibilidad en tomografía de ruido ambiental?",
        de: "Was bestimmt das optimale Frequenzband für maximale Empfindlichkeit in Umgebungsrausch-Tomographie?",
        nl: "Wat bepaalt de optimale frequentieband voor maximale gevoeligheid in omgevingsruis tomografie?"
      },
      options: [
        { en: "Source distribution and wavelength-depth relationship", es: "Distribución de fuente y relación longitud de onda-profundidad", de: "Quellenverteilung und Wellenlänge-Tiefe-Beziehung", nl: "Bron distributie en golflengte-diepte relatie" },
        { en: "Recording duration only", es: "Solo duración de registro", de: "Nur Aufzeichnungsdauer", nl: "Alleen opname duur" },
        { en: "Station density only", es: "Solo densidad de estaciones", de: "Nur Stationsdichte", nl: "Alleen station dichtheid" },
        { en: "Processing computational limits", es: "Límites computacionales de procesamiento", de: "Verarbeitungscomputergrenzen", nl: "Verwerking computationele limieten" }
      ],
      correct: 0,
      explanation: {
        en: "The optimal frequency band for ambient noise tomography is determined by the spatial distribution of noise sources and the wavelength-depth relationship for the target structure. Ocean microseisms (0.1-1 Hz) provide excellent sensitivity for crustal structure, while traffic noise (1-10 Hz) enables shallow subsurface imaging. The penetration depth scales approximately as wavelength/3, constraining the useful frequency range for specific target depths.",
        es: "La banda de frecuencia óptima para tomografía de ruido ambiental es determinada por la distribución espacial de fuentes de ruido y la relación longitud de onda-profundidad para la estructura objetivo. Los microsismos oceánicos (0.1-1 Hz) proporcionan excelente sensibilidad para estructura crustal, mientras que el ruido de tráfico (1-10 Hz) permite imagen del subsuelo superficial. La profundidad de penetración escala aproximadamente como longitud de onda/3, restringiendo el rango de frecuencia útil para profundidades objetivo específicas.",
        de: "Das optimale Frequenzband für Umgebungsrausch-Tomographie wird durch die räumliche Verteilung von Rauschquellen und die Wellenlänge-Tiefe-Beziehung für die Zielstruktur bestimmt. Ozeanische Mikroseismen (0,1-1 Hz) bieten ausgezeichnete Empfindlichkeit für Krustenstruktur, während Verkehrslärm (1-10 Hz) oberflächennahe Untergrundbildgebung ermöglicht. Die Eindringtiefe skaliert etwa als Wellenlänge/3, was den nützlichen Frequenzbereich für spezifische Zieltiefen einschränkt.",
        nl: "De optimale frequentieband voor omgevingsruis tomografie wordt bepaald door de ruimtelijke distributie van ruis bronnen en de golflengte-diepte relatie voor de doel structuur. Oceaan microseisms (0,1-1 Hz) bieden uitstekende gevoeligheid voor korst structuur, terwijl verkeersruis (1-10 Hz) ondiepe ondergrond beeldvorming mogelijk maakt. De penetratiediepte schaalt ongeveer als golflengte/3, wat het bruikbare frequentiebereik beperkt voor specifieke doeldiepten."
      }
    },
    {
      question: {
        en: "What seismic phenomenon creates systematic azimuthal variations in surface wave phase velocities?",
        es: "¿Qué fenómeno sísmico crea variaciones azimutales sistemáticas en velocidades de fase de ondas superficiales?",
        de: "Welches seismische Phänomen erzeugt systematische azimutale Variationen in Oberflächenwellen-Phasengeschwindigkeiten?",
        nl: "Welk seismisch fenomeen creëert systematische azimutale variaties in oppervlaktegolf fase snelheden?"
      },
      options: [
        { en: "Azimuthal anisotropy in the crust and upper mantle", es: "Anisotropía azimutal en la corteza y manto superior", de: "Azimutale Anisotropie in Kruste und oberem Mantel", nl: "Azimutale anisotropie in de korst en bovenmantel" },
        { en: "Source radiation patterns only", es: "Solo patrones de radiación de fuente", de: "Nur Quellenstrahlungsmuster", nl: "Alleen bron stralingspatronen" },
        { en: "Instrument orientation errors", es: "Errores de orientación del instrumento", de: "Instrumentorientierungsfehler", nl: "Instrument oriëntatie fouten" },
        { en: "Path length variations", es: "Variaciones de longitud de trayectoria", de: "Pfadlängenvariationen", nl: "Pad lengte variaties" }
      ],
      correct: 0,
      explanation: {
        en: "Azimuthal anisotropy in the crust and upper mantle creates systematic variations in surface wave phase velocities with propagation direction. This anisotropy often results from preferred orientation of crystals due to mantle flow or aligned fractures/joints in the crust, causing faster propagation parallel to the anisotropic fabric and slower propagation perpendicular to it.",
        es: "La anisotropía azimutal en la corteza y manto superior crea variaciones sistemáticas en velocidades de fase de ondas superficiales con dirección de propagación. Esta anisotropía a menudo resulta de orientación preferida de cristales debido al flujo del manto o fracturas/juntas alineadas en la corteza, causando propagación más rápida paralela al tejido anisotrópico y propagación más lenta perpendicular a él.",
        de: "Azimutale Anisotropie in Kruste und oberem Mantel erzeugt systematische Variationen in Oberflächenwellen-Phasengeschwindigkeiten mit Ausbreitungsrichtung. Diese Anisotropie resultiert oft aus bevorzugter Kristallorientierung aufgrund von Mantelströmung oder ausgerichteten Brüchen/Klüften in der Kruste, was schnellere Ausbreitung parallel zum anisotropen Gefüge und langsamere Ausbreitung senkrecht dazu verursacht.",
        nl: "Azimutale anisotropie in de korst en bovenmantel creëert systematische variaties in oppervlaktegolf fase snelheden met voortplantingsrichting. Deze anisotropie resulteert vaak uit geprefereerde kristal oriëntatie door mantelvloeien of uitgelijnde breuken/voegen in de korst, wat snellere voortplanting parallel aan het anisotrope weefsel veroorzaakt en langzamere voortplanting loodrecht erop."
      }
    },
    {
      question: {
        en: "What advanced technique uses the Earth's rotational effects to enhance seismic wave detection sensitivity?",
        es: "¿Qué técnica avanzada utiliza los efectos rotacionales de la Tierra para mejorar la sensibilidad de detección de ondas sísmicas?",
        de: "Welche fortgeschrittene Technik nutzt die Rotationseffekte der Erde zur Verbesserung der seismischen Wellendetektionsempfindlichkeit?",
        nl: "Welke geavanceerde techniek gebruikt de rotatieeffecten van de aarde om seismische golf detectie gevoeligheid te verbeteren?"
      },
      options: [
        { en: "Rotational seismology with fiber-optic gyroscopes", es: "Sismología rotacional con giroscopios de fibra óptica", de: "Rotationsseismologie mit faseroptischen Kreiseln", nl: "Rotatie seismologie met vezeloptica gyroscopen" },
        { en: "Simple velocity measurements only", es: "Solo mediciones de velocidad simples", de: "Nur einfache Geschwindigkeitsmessungen", nl: "Alleen eenvoudige snelheidsmetingen" },
        { en: "Standard three-component recording", es: "Registro estándar de tres componentes", de: "Standard-Dreikomponentenaufzeichnung", nl: "Standaard drie-component opname" },
        { en: "Amplitude-based detection only", es: "Solo detección basada en amplitud", de: "Nur amplitudenbasierte Detektion", nl: "Alleen amplitude-gebaseerde detectie" }
      ],
      correct: 0,
      explanation: {
        en: "Rotational seismology using fiber-optic gyroscopes measures the rotational motions induced by seismic waves, complementing traditional translational seismometry. This technique can directly measure Love wave ground rotation, separate P- and S-waves without array processing, and provides additional constraints for wave field characterization, particularly useful for near-field strong motion analysis and early warning systems.",
        es: "La sismología rotacional usando giroscopios de fibra óptica mide los movimientos rotacionales inducidos por ondas sísmicas, complementando la sismometría traslacional tradicional. Esta técnica puede medir directamente la rotación del suelo de ondas Love, separar ondas P y S sin procesamiento de arreglo, y proporciona restricciones adicionales para caracterización de campo de ondas, particularmente útil para análisis de movimiento fuerte de campo cercano y sistemas de alerta temprana.",
        de: "Rotationsseismologie mit faseroptischen Kreiseln misst die durch seismische Wellen induzierten Rotationsbewegungen und ergänzt traditionelle Translationsseismometrie. Diese Technik kann direkt Love-Wellen-Bodenrotation messen, P- und S-Wellen ohne Array-Verarbeitung trennen und bietet zusätzliche Einschränkungen für Wellenfeldcharakterisierung, besonders nützlich für Nahfeld-Starkbewegungsanalyse und Frühwarnsysteme.",
        nl: "Rotatie seismologie met vezeloptica gyroscopen meet de rotatie bewegingen geïnduceerd door seismische golven, wat traditionele translatie seismometrie aanvult. Deze techniek kan direct Love golf grond rotatie meten, P- en S-golven scheiden zonder array verwerking, en biedt aanvullende beperkingen voor golfveld karakterisering, bijzonder nuttig voor nabije-veld sterke beweging analyse en vroege waarschuwingssystemen."
      }
    },
    {
      question: {
        en: "What seismic parameter quantifies the temporal evolution of earthquake rupture complexity during individual events?",
        es: "¿Qué parámetro sísmico cuantifica la evolución temporal de la complejidad de ruptura de terremotos durante eventos individuales?",
        de: "Welcher seismische Parameter quantifiziert die zeitliche Entwicklung der Erdbebenbruchkomplexität während individueller Ereignisse?",
        nl: "Welke seismische parameter kwantificeert de temporele evolutie van aardbeving breuk complexiteit tijdens individuele gebeurtenissen?"
      },
      options: [
        { en: "Time-dependent moment rate spectrum", es: "Espectro de tasa de momento dependiente del tiempo", de: "Zeitabhängiges Momentratenspektrum", nl: "Tijd-afhankelijk moment snelheid spectrum" },
        { en: "Simple rupture duration", es: "Duración de ruptura simple", de: "Einfache Bruchdauer", nl: "Eenvoudige breuk duur" },
        { en: "Total energy release", es: "Liberación total de energía", de: "Gesamte Energiefreisetzung", nl: "Totale energie vrijgave" },
        { en: "Average slip velocity", es: "Velocidad de deslizamiento promedio", de: "Durchschnittliche Slip-Geschwindigkeit", nl: "Gemiddelde slip snelheid" }
      ],
      correct: 0,
      explanation: {
        en: "The time-dependent moment rate spectrum quantifies how earthquake rupture complexity evolves during individual events by analyzing the spectral content of the moment rate function over time. This parameter reveals whether ruptures start simple and become complex, maintain constant complexity, or show other temporal patterns, providing insights into rupture physics and fault zone structure.",
        es: "El espectro de tasa de momento dependiente del tiempo cuantifica cómo evoluciona la complejidad de ruptura de terremotos durante eventos individuales analizando el contenido espectral de la función de tasa de momento a lo largo del tiempo. Este parámetro revela si las rupturas comienzan simples y se vuelven complejas, mantienen complejidad constante, o muestran otros patrones temporales, proporcionando conocimientos sobre física de ruptura y estructura de zona de falla.",
        de: "Das zeitabhängige Momentratenspektrum quantifiziert, wie sich die Erdbebenbruchkomplexität während individueller Ereignisse entwickelt, indem es den Spektralinhalt der Momentratenfunktion über die Zeit analysiert. Dieser Parameter zeigt, ob Brüche einfach beginnen und komplex werden, konstante Komplexität beibehalten oder andere zeitliche Muster zeigen, und bietet Einblicke in Bruchphysik und Verwerfungszonenstruktur.",
        nl: "Het tijd-afhankelijk moment snelheid spectrum kwantificeert hoe aardbeving breuk complexiteit evolueert tijdens individuele gebeurtenissen door de spectrale inhoud van de moment snelheid functie over tijd te analyseren. Deze parameter onthult of breuken eenvoudig beginnen en complex worden, constante complexiteit behouden, of andere temporele patronen tonen, wat inzichten biedt in breukfysica en breukzone structuur."
      }
    },
    {
      question: {
        en: "What computational approach enables real-time full-waveform earthquake location and characterization?",
        es: "¿Qué enfoque computacional permite localización y caracterización de terremotos de forma de onda completa en tiempo real?",
        de: "Welcher Berechnungsansatz ermöglicht Echtzeit-Vollwellenform-Erdbebenlokalisierung und -charakterisierung?",
        nl: "Welke computationele benadering maakt real-time volledige-golfvorm aardbeving locatie en karakterisering mogelijk?"
      },
      options: [
        { en: "GPU-accelerated wavefield simulation with template matching", es: "Simulación de campo de ondas acelerada por GPU con coincidencia de plantillas", de: "GPU-beschleunigte Wellenfeldssimulation mit Template-Matching", nl: "GPU-versnelde golfveld simulatie met sjabloon matching" },
        { en: "Simple arrival time picking only", es: "Solo selección de tiempo de llegada simple", de: "Nur einfache Ankunftszeit-Auswahl", nl: "Alleen eenvoudige aankomsttijd picking" },
        { en: "Manual waveform inspection", es: "Inspección manual de forma de onda", de: "Manuelle Wellenforminspektion", nl: "Handmatige golfvorm inspectie" },
        { en: "Statistical correlation analysis", es: "Análisis de correlación estadística", de: "Statistische Korrelationsanalyse", nl: "Statistische correlatie analyse" }
      ],
      correct: 0,
      explanation: {
        en: "GPU-accelerated wavefield simulation with template matching enables real-time full-waveform earthquake analysis by rapidly computing theoretical waveforms for multiple source scenarios and comparing them with observed data. This approach can simultaneously determine location, magnitude, and focal mechanism within seconds of earthquake onset, significantly faster than traditional methods.",
        es: "La simulación de campo de ondas acelerada por GPU con coincidencia de plantillas permite análisis de terremotos de forma de onda completa en tiempo real computando rápidamente formas de onda teóricas para múltiples escenarios de fuente y comparándolas con datos observados. Este enfoque puede determinar simultáneamente ubicación, magnitud y mecanismo focal dentro de segundos del inicio del terremoto, significativamente más rápido que métodos tradicionales.",
        de: "GPU-beschleunigte Wellenfeldssimulation mit Template-Matching ermöglicht Echtzeit-Vollwellenform-Erdbebenanalyse durch schnelle Berechnung theoretischer Wellenformen für multiple Quellenszenarien und Vergleich mit beobachteten Daten. Dieser Ansatz kann gleichzeitig Ort, Magnitude und Fokalmechanismus innerhalb von Sekunden nach Erdbebenbeginn bestimmen, erheblich schneller als traditionelle Methoden.",
        nl: "GPU-versnelde golfveld simulatie met sjabloon matching maakt real-time volledige-golfvorm aardbeving analyse mogelijk door snel theoretische golfvormen te berekenen voor meerdere bron scenario's en ze te vergelijken met waargenomen data. Deze benadering kan simultaan locatie, magnitude, en focaal mechanisme bepalen binnen seconden van aardbeving onset, significant sneller dan traditionele methoden."
      }
    },
    {
      question: {
        en: "What seismic imaging principle enables the detection of temporal changes in subsurface properties using repeated measurements?",
        es: "¿Qué principio de imagen sísmica permite la detección de cambios temporales en propiedades del subsuelo usando mediciones repetidas?",
        de: "Welches seismische Bildgebungsprinzip ermöglicht die Detektion zeitlicher Änderungen in Untergrundseigenschaften mit wiederholten Messungen?",
        nl: "Welk seismisch beeldvormingsprincipe maakt de detectie van temporele veranderingen in ondergrondse eigenschappen mogelijk met herhaalde metingen?"
      },
      options: [
        { en: "Time-lapse seismic differencing with phase coherence", es: "Diferenciación sísmica de lapso de tiempo con coherencia de fase", de: "Zeitversetzte seismische Differenzierung mit Phasenkohärenz", nl: "Time-lapse seismische differentiatie met fase coherentie" },
        { en: "Single-shot amplitude comparison", es: "Comparación de amplitud de disparo único", de: "Einzelschuss-Amplitudenvergleich", nl: "Enkele-shot amplitude vergelijking" },
        { en: "Static velocity modeling", es: "Modelado de velocidad estática", de: "Statische Geschwindigkeitsmodellierung", nl: "Statische snelheids modellering" },
        { en: "Frequency spectrum analysis only", es: "Solo análisis de espectro de frecuencia", de: "Nur Frequenzspektrumanalyse", nl: "Alleen frequentie spectrum analyse" }
      ],
      correct: 0,
      explanation: {
        en: "Time-lapse seismic differencing with phase coherence detects subtle subsurface changes by subtracting repeated seismic surveys and analyzing phase differences. This technique is extremely sensitive to small velocity changes (0.1% or less) caused by fluid movement, stress changes, or structural modifications, making it valuable for monitoring CO₂ storage, hydrocarbon production, and earthquake preparation processes.",
        es: "La diferenciación sísmica de lapso de tiempo con coherencia de fase detecta cambios sutiles del subsuelo restando levantamientos sísmicos repetidos y analizando diferencias de fase. Esta técnica es extremadamente sensible a pequeños cambios de velocidad (0.1% o menos) causados por movimiento de fluidos, cambios de esfuerzo o modificaciones estructurales, haciéndola valiosa para monitorear almacenamiento de CO₂, producción de hidrocarburos y procesos de preparación de terremotos.",
        de: "Zeitversetzte seismische Differenzierung mit Phasenkohärenz detektiert subtile Untergrundänderungen durch Subtraktion wiederholter seismischer Vermessungen und Analyse von Phasendifferenzen. Diese Technik ist extrem empfindlich für kleine Geschwindigkeitsänderungen (0,1% oder weniger) verursacht durch Fluidbewegung, Spannungsänderungen oder strukturelle Modifikationen, wodurch sie wertvoll für Überwachung von CO₂-Speicherung, Kohlenwasserstoffproduktion und Erdbebenvorbereitungsprozessen wird.",
        nl: "Time-lapse seismische differentiatie met fase coherentie detecteert subtiele ondergrondse veranderingen door herhaalde seismische surveys af te trekken en fase verschillen te analyseren. Deze techniek is extreem gevoelig voor kleine snelheidsveranderingen (0,1% of minder) veroorzaakt door vloeistofbeweging, spanningsveranderingen, of structurele modificaties, wat het waardevol maakt voor het monitoren van CO₂ opslag, koolwaterstof productie, en aardbeving voorbereidingsprocessen."
      }
    },
    {
      question: {
        en: "What determines the azimuthal resolution capabilities of seismic array processing techniques?",
        es: "¿Qué determina las capacidades de resolución azimutal de las técnicas de procesamiento de arreglos sísmicos?",
        de: "Was bestimmt die azimutale Auflösungsfähigkeiten seismischer Array-Verarbeitungstechniken?",
        nl: "Wat bepaalt de azimutale resolutie mogelijkheden van seismische array verwerkingstechnieken?"
      },
      options: [
        { en: "Array aperture, geometry, and wavelength", es: "Apertura, geometría y longitud de onda del arreglo", de: "Array-Apertur, Geometrie und Wellenlänge", nl: "Array apertuur, geometrie, en golflengte" },
        { en: "Number of stations only", es: "Solo número de estaciones", de: "Nur Anzahl der Stationen", nl: "Alleen aantal stations" },
        { en: "Recording duration only", es: "Solo duración de registro", de: "Nur Aufzeichnungsdauer", nl: "Alleen opname duur" },
        { en: "Signal amplitude levels", es: "Niveles de amplitud de señal", de: "Signalamplitudenlevel", nl: "Signaal amplitude niveaus" }
      ],
      correct: 0,
      explanation: {
        en: "Azimuthal resolution in seismic array processing is determined by array aperture (maximum inter-station distance), array geometry (spatial distribution of stations), and wavelength. The resolution follows θ ≈ λ/D, where θ is resolution angle, λ is wavelength, and D is array aperture. Optimal geometries (e.g., spiral, nested) and larger apertures provide better azimuthal discrimination of incoming signals.",
        es: "La resolución azimutal en procesamiento de arreglos sísmicos es determinada por la apertura del arreglo (máxima distancia entre estaciones), geometría del arreglo (distribución espacial de estaciones), y longitud de onda. La resolución sigue θ ≈ λ/D, donde θ es ángulo de resolución, λ es longitud de onda, y D es apertura del arreglo. Geometrías óptimas (ej. espiral, anidadas) y aperturas más grandes proporcionan mejor discriminación azimutal de señales entrantes.",
        de: "Azimutale Auflösung in seismischer Array-Verarbeitung wird durch Array-Apertur (maximaler Inter-Stations-Abstand), Array-Geometrie (räumliche Verteilung der Stationen) und Wellenlänge bestimmt. Die Auflösung folgt θ ≈ λ/D, wobei θ Auflösungswinkel, λ Wellenlänge und D Array-Apertur ist. Optimale Geometrien (z.B. spiral, verschachtelt) und größere Aperturen bieten bessere azimutale Diskriminierung eingehender Signale.",
        nl: "Azimutale resolutie in seismische array verwerking wordt bepaald door array apertuur (maximale inter-station afstand), array geometrie (ruimtelijke distributie van stations), en golflengte. De resolutie volgt θ ≈ λ/D, waar θ resolutie hoek is, λ golflengte, en D array apertuur. Optimale geometrieën (bijv. spiraal, genest) en grotere aperturen bieden betere azimutale discriminatie van inkomende signalen."
      }
    },
    {
      question: {
        en: "What advanced tomographic technique uses the asymptotic ray theory to model wave propagation through complex 3D structures?",
        es: "¿Qué técnica tomográfica avanzada utiliza la teoría de rayos asintótica para modelar propagación de ondas a través de estructuras 3D complejas?",
        de: "Welche fortgeschrittene tomographische Technik nutzt die asymptotische Strahlentheorie zur Modellierung der Wellenausbreitung durch komplexe 3D-Strukturen?",
        nl: "Welke geavanceerde tomografische techniek gebruikt de asymptotische straal theorie om golf voortplanting door complexe 3D structuren te modelleren?"
      },
      options: [
        { en: "Fast marching and eikonal equation methods", es: "Métodos de avance rápido y ecuación eikonal", de: "Fast-Marching- und Eikonal-Gleichungsmethoden", nl: "Snelle march en eikonal vergelijking methoden" },
        { en: "Simple linear interpolation", es: "Interpolación lineal simple", de: "Einfache lineare Interpolation", nl: "Eenvoudige lineaire interpolatie" },
        { en: "Direct matrix inversion only", es: "Solo inversión directa de matriz", de: "Nur direkte Matrixinversion", nl: "Alleen directe matrix inversie" },
        { en: "Statistical averaging methods", es: "Métodos de promedio estadístico", de: "Statistische Mittelwertmethoden", nl: "Statistische middeling methoden" }
      ],
      correct: 0,
      explanation: {
        en: "Fast marching methods solve the eikonal equation |∇T|=s(x) to compute first-arrival traveltimes through complex 3D velocity structures. This technique is more accurate than simple ray tracing in heterogeneous media and provides stable solutions for calculating ray paths and traveltimes needed for high-resolution tomographic inversions.",
        es: "Los métodos de avance rápido resuelven la ecuación eikonal |∇T|=s(x) para calcular tiempos de viaje de primera llegada a través de estructuras de velocidad 3D complejas. Esta técnica es más precisa que el trazado de rayos simple en medios heterogéneos y proporciona soluciones estables para calcular trayectorias de rayos y tiempos de viaje necesarios para inversiones tomográficas de alta resolución.",
        de: "Fast-Marching-Methoden lösen die Eikonal-Gleichung |∇T|=s(x) zur Berechnung von Ersterkunfts-Laufzeiten durch komplexe 3D-Geschwindigkeitsstrukturen. Diese Technik ist genauer als einfache Strahlenrückverfolgung in heterogenen Medien und bietet stabile Lösungen zur Berechnung von Strahlenwegen und Laufzeiten für hochauflösende tomographische Inversionen.",
        nl: "Snelle march methoden lossen de eikonal vergelijking |∇T|=s(x) op om eerste-aankomst reistijden te berekenen door complexe 3D snelheidsstructuren. Deze techniek is accurater dan eenvoudige straal tracering in heterogene media en biedt stabiele oplossingen voor het berekenen van straalpaden en reistijden nodig voor hoge-resolutie tomografische inversies."
      }
    },
    {
      question: {
        en: "What determines the trade-off between resolution and stability in seismic tomographic inversions?",
        es: "¿Qué determina el compromiso entre resolución y estabilidad en inversiones tomográficas sísmicas?",
        de: "Was bestimmt den Trade-off zwischen Auflösung und Stabilität in seismischen tomographischen Inversionen?",
        nl: "Wat bepaalt de afweging tussen resolutie en stabiliteit in seismische tomografische inversies?"
      },
      options: [
        { en: "Regularization parameter and damping coefficient", es: "Parámetro de regularización y coeficiente de amortiguación", de: "Regularisierungsparameter und Dämpfungskoeffizient", nl: "Regularisatie parameter en demping coëfficiënt" },
        { en: "Data quality only", es: "Solo calidad de datos", de: "Nur Datenqualität", nl: "Alleen data kwaliteit" },
        { en: "Station spacing only", es: "Solo espaciamiento de estaciones", de: "Nur Stationsabstand", nl: "Alleen station afstand" },
        { en: "Source-receiver geometry", es: "Geometría fuente-receptor", de: "Quelle-Empfänger-Geometrie", nl: "Bron-ontvanger geometrie" }
      ],
      correct: 0,
      explanation: {
        en: "The regularization parameter (λ) controls the balance between data fit and model smoothness in tomographic inversions. Small λ values emphasize data fitting but may produce unstable, high-variance solutions, while large λ values promote smooth, stable models but may underfit the data. Optimal parameter selection uses techniques like L-curve analysis or cross-validation.",
        es: "El parámetro de regularización (λ) controla el equilibrio entre ajuste de datos y suavidad del modelo en inversiones tomográficas. Valores pequeños de λ enfatizan ajuste de datos pero pueden producir soluciones inestables de alta varianza, mientras que valores grandes de λ promueven modelos suaves y estables pero pueden subajustar los datos. La selección óptima de parámetros usa técnicas como análisis de curva L o validación cruzada.",
        de: "Der Regularisierungsparameter (λ) kontrolliert das Gleichgewicht zwischen Datenanpassung und Modellglätte in tomographischen Inversionen. Kleine λ-Werte betonen Datenanpassung, können aber instabile, hochvariable Lösungen produzieren, während große λ-Werte glatte, stabile Modelle fördern, aber die Daten unteranpassen können. Optimale Parameterauswahl verwendet Techniken wie L-Kurven-Analyse oder Kreuzvalidierung.",
        nl: "De regularisatie parameter (λ) controleert de balans tussen data fitting en model gladheid in tomografische inversies. Kleine λ waarden benadrukken data fitting maar kunnen instabiele, hoge-variantie oplossingen produceren, terwijl grote λ waarden gladde, stabiele modellen bevorderen maar de data kunnen onderfitten. Optimale parameter selectie gebruikt technieken zoals L-curve analyse of cross-validatie."
      }
    },
    {
      question: {
        en: "What seismic imaging technique uses multiple scattering effects to enhance subsurface resolution?",
        es: "¿Qué técnica de imagen sísmica utiliza efectos de dispersión múltiple para mejorar resolución del subsuelo?",
        de: "Welche seismische Bildgebungstechnik nutzt Mehrfachstreueffekte zur Verbesserung der Untergrundauflösung?",
        nl: "Welke seismische beeldvormingstechniek gebruikt meervoudige verstrooiingseffecten om ondergrondse resolutie te verbeteren?"
      },
      options: [
        { en: "Marchenko imaging and Green's function retrieval", es: "Imagen Marchenko y recuperación de función de Green", de: "Marchenko-Bildgebung und Green-Funktions-Wiederherstellung", nl: "Marchenko beeldvorming en Green's functie herstel" },
        { en: "Conventional migration only", es: "Solo migración convencional", de: "Nur konventionelle Migration", nl: "Alleen conventionele migratie" },
        { en: "Simple stacking methods", es: "Métodos de apilado simple", de: "Einfache Stapelmethoden", nl: "Eenvoudige stapel methoden" },
        { en: "Direct wave analysis", es: "Análisis de ondas directas", de: "Direktwellenanalyse", nl: "Directe golf analyse" }
      ],
      correct: 0,
      explanation: {
        en: "Marchenko imaging uses the full wavefield, including multiply scattered waves that are typically considered noise in conventional processing. By retrieving the Green's function between virtual sources in the subsurface and receivers at the surface, this technique eliminates artifacts and provides higher-resolution images of complex subsurface structures.",
        es: "La imagen Marchenko usa el campo de ondas completo, incluyendo ondas múltiplemente dispersas que típicamente se consideran ruido en procesamiento convencional. Al recuperar la función de Green entre fuentes virtuales en el subsuelo y receptores en la superficie, esta técnica elimina artefactos y proporciona imágenes de mayor resolución de estructuras complejas del subsuelo.",
        de: "Marchenko-Bildgebung nutzt das vollständige Wellenfeld, einschließlich mehrfach gestreuter Wellen, die typischerweise als Rauschen in konventioneller Verarbeitung betrachtet werden. Durch Wiederherstellung der Green-Funktion zwischen virtuellen Quellen im Untergrund und Empfängern an der Oberfläche eliminiert diese Technik Artefakte und bietet höherauflösende Bilder komplexer Untergrundstrukturen.",
        nl: "Marchenko beeldvorming gebruikt het volledige golfveld, inclusief meervoudig verstrooide golven die meestal beschouwd worden als ruis in conventionele verwerking. Door het herstellen van de Green's functie tussen virtuele bronnen in de ondergrond en ontvangers aan het oppervlak, elimineert deze techniek artefacten en biedt hogere-resolutie beelden van complexe ondergrondse structuren."
      }
    },
    {
      question: {
        en: "What advanced algorithm enables automatic phase picking for large-scale tomographic studies?",
        es: "¿Qué algoritmo avanzado permite selección automática de fases para estudios tomográficos a gran escala?",
        de: "Welcher fortgeschrittene Algorithmus ermöglicht automatische Phasenauswahl für großskalige tomographische Studien?",
        nl: "Welk geavanceerd algoritme maakt automatische fase kiezen mogelijk voor grootschalige tomografische studies?"
      },
      options: [
        { en: "Deep learning neural networks with recurrent architectures", es: "Redes neuronales de aprendizaje profundo con arquitecturas recurrentes", de: "Tiefe Lernende neuronale Netze mit rekurrenten Architekturen", nl: "Diep leerende neurale netwerken met recurrente architecturen" },
        { en: "Simple threshold detection", es: "Detección de umbral simple", de: "Einfache Schwellenerkennung", nl: "Eenvoudige drempel detectie" },
        { en: "Manual visual inspection", es: "Inspección visual manual", de: "Manuelle visuelle Inspektion", nl: "Handmatige visuele inspectie" },
        { en: "Cross-correlation templates only", es: "Solo plantillas de correlación cruzada", de: "Nur Kreuzkorrelationsvorlagen", nl: "Alleen kruiscorrelatie sjablonen" }
      ],
      correct: 0,
      explanation: {
        en: "Deep learning neural networks, particularly recurrent neural networks (RNNs) and convolutional neural networks (CNNs), can automatically identify P and S wave arrivals from continuous seismic data with high accuracy. These networks are trained on large datasets and can process thousands of waveforms per second, making them ideal for large-scale tomographic studies requiring millions of phase picks.",
        es: "Las redes neuronales de aprendizaje profundo, particularmente redes neuronales recurrentes (RNN) y redes neuronales convolucionales (CNN), pueden identificar automáticamente llegadas de ondas P y S de datos sísmicos continuos con alta precisión. Estas redes son entrenadas en grandes conjuntos de datos y pueden procesar miles de formas de onda por segundo, haciéndolas ideales para estudios tomográficos a gran escala que requieren millones de selecciones de fases.",
        de: "Tiefe Lernende neuronale Netze, insbesondere rekurrente neuronale Netze (RNNs) und konvolutionale neuronale Netze (CNNs), können automatisch P- und S-Wellen-Ankunftszeiten aus kontinuierlichen seismischen Daten mit hoher Genauigkeit identifizieren. Diese Netze werden auf großen Datensätzen trainiert und können tausende Wellenformen pro Sekunde verarbeiten, was sie ideal für großskalige tomographische Studien macht, die Millionen von Phasenauswahlen erfordern.",
        nl: "Diep leerende neurale netwerken, vooral recurrente neurale netwerken (RNNs) en convolutionele neurale netwerken (CNNs), kunnen automatisch P en S golf aankomsten identificeren uit continue seismische data met hoge nauwkeurigheid. Deze netwerken zijn getraind op grote datasets en kunnen duizenden golfvormen per seconde verwerken, wat ze ideaal maakt voor grootschalige tomografische studies die miljoenen fase keuzes vereisen."
      }
    },
    {
      question: {
        en: "What determines the optimal parameterization for 3D velocity model construction in tomography?",
        es: "¿Qué determina la parametrización óptima para construcción de modelos de velocidad 3D en tomografía?",
        de: "Was bestimmt die optimale Parametrisierung für 3D-Geschwindigkeitsmodellkonstruktion in der Tomographie?",
        nl: "Wat bepaalt de optimale parametrisatie voor 3D snelheidsmodel constructie in tomografie?"
      },
      options: [
        { en: "Ray density distribution and geological complexity", es: "Distribución de densidad de rayos y complejidad geológica", de: "Strahlendichteverteilung und geologische Komplexität", nl: "Straal dichtheidsdistributie en geologische complexiteit" },
        { en: "Computer memory limitations only", es: "Solo limitaciones de memoria de computadora", de: "Nur Computerspeicherbegrenzungen", nl: "Alleen computer geheugen beperkingen" },
        { en: "Data acquisition costs", es: "Costos de adquisición de datos", de: "Datenerfassungskosten", nl: "Data acquisitie kosten" },
        { en: "Processing time constraints", es: "Restricciones de tiempo de procesamiento", de: "Verarbeitungszeit-Beschränkungen", nl: "Verwerkingstijd beperkingen" }
      ],
      correct: 0,
      explanation: {
        en: "Optimal model parameterization depends on ray density (how well sampled different regions are) and geological complexity (how much detail is needed to represent structures). High ray density regions can support finer grid spacing, while sparse ray coverage requires coarser parameterization. The parameterization should match the resolving power of the data while avoiding over-parameterization in poorly sampled regions.",
        es: "La parametrización óptima del modelo depende de la densidad de rayos (qué tan bien muestreadas están diferentes regiones) y complejidad geológica (cuánto detalle se necesita para representar estructuras). Regiones de alta densidad de rayos pueden soportar espaciamiento de cuadrícula más fino, mientras que cobertura de rayos dispersa requiere parametrización más gruesa. La parametrización debería coincidir con el poder resolutivo de los datos mientras evita sobre-parametrización en regiones pobremente muestreadas.",
        de: "Optimale Modellparametrisierung hängt von Strahlendichte (wie gut verschiedene Regionen abgetastet sind) und geologischer Komplexität (wie viel Detail zur Darstellung von Strukturen benötigt wird) ab. Hohe Strahlendichte-Regionen können feinere Gitterabstände unterstützen, während spärliche Strahlenabdeckung gröbere Parametrisierung erfordert. Die Parametrisierung sollte der Auflösungskraft der Daten entsprechen, während Über-Parametrisierung in schlecht abgetasteten Regionen vermieden wird.",
        nl: "Optimale model parametrisatie hangt af van straal dichtheid (hoe goed verschillende regio's bemonsterd zijn) en geologische complexiteit (hoeveel detail nodig is om structuren te representeren). Hoge straal dichtheid regio's kunnen fijnere grid afstanden ondersteunen, terwijl sparse straal dekking grovere parametrisatie vereist. De parametrisatie moet overeenkomen met de oplossende kracht van de data terwijl over-parametrisatie in slecht bemonsterde regio's vermeden wordt."
      }
    },
    {
      question: {
        en: "What seismic tomographic technique specifically images anisotropic velocity structures?",
        es: "¿Qué técnica tomográfica sísmica específicamente genera imágenes de estructuras de velocidad anisotrópicas?",
        de: "Welche seismische tomographische Technik bildet speziell anisotrope Geschwindigkeitsstrukturen ab?",
        nl: "Welke seismische tomografische techniek beeldt specifiek anisotrope snelheidsstructuren af?"
      },
      options: [
        { en: "Azimuthal anisotropy tomography using Love and Rayleigh waves", es: "Tomografía de anisotropía azimutal usando ondas Love y Rayleigh", de: "Azimutale Anisotropie-Tomographie mit Love- und Rayleigh-Wellen", nl: "Azimutale anisotropie tomografie met Love en Rayleigh golven" },
        { en: "Standard isotropic P-wave tomography", es: "Tomografía estándar isotrópica de ondas P", de: "Standard isotrope P-Wellen-Tomographie", nl: "Standaard isotrope P-golf tomografie" },
        { en: "Simple velocity mapping", es: "Mapeo simple de velocidad", de: "Einfache Geschwindigkeitskartierung", nl: "Eenvoudige snelheid kartering" },
        { en: "Travel time difference analysis", es: "Análisis de diferencia de tiempo de viaje", de: "Laufzeitdifferenz-Analyse", nl: "Reistijd verschil analyse" }
      ],
      correct: 0,
      explanation: {
        en: "Azimuthal anisotropy tomography uses the directional dependence of Love and Rayleigh wave velocities to map anisotropic structures. Love waves are sensitive to SH velocity anisotropy (VSH), while Rayleigh waves sense SV velocity anisotropy (VSV). The combination provides constraints on both radial anisotropy (VSH≠VSV) and azimuthal anisotropy patterns in the Earth.",
        es: "La tomografía de anisotropía azimutal usa la dependencia direccional de velocidades de ondas Love y Rayleigh para mapear estructuras anisotrópicas. Las ondas Love son sensibles a anisotropía de velocidad SH (VSH), mientras que ondas Rayleigh detectan anisotropía de velocidad SV (VSV). La combinación proporciona restricciones tanto en anisotropía radial (VSH≠VSV) como patrones de anisotropía azimutal en la Tierra.",
        de: "Azimutale Anisotropie-Tomographie nutzt die richtungsabhängige Love- und Rayleigh-Wellen-Geschwindigkeiten zur Kartierung anisotroper Strukturen. Love-Wellen sind empfindlich für SH-Geschwindigkeitsanisotropie (VSH), während Rayleigh-Wellen SV-Geschwindigkeitsanisotropie (VSV) erfassen. Die Kombination bietet Beschränkungen sowohl für radiale Anisotropie (VSH≠VSV) als auch azimutale Anisotropiemuster in der Erde.",
        nl: "Azimutale anisotropie tomografie gebruikt de directionele afhankelijkheid van Love en Rayleigh golf snelheden om anisotrope structuren te karteren. Love golven zijn gevoelig voor SH snelheid anisotropie (VSH), terwijl Rayleigh golven SV snelheid anisotropie (VSV) waarnemen. De combinatie biedt beperkingen op zowel radiale anisotropie (VSH≠VSV) als azimutale anisotropie patronen in de aarde."
      }
    },
    {
      question: {
        en: "What computational approach enables real-time seismic tomographic updates for earthquake monitoring?",
        es: "¿Qué enfoque computacional permite actualizaciones tomográficas sísmicas en tiempo real para monitoreo de terremotos?",
        de: "Welcher rechnerische Ansatz ermöglicht Echtzeit-seismische tomographische Updates für Erdbebenüberwachung?",
        nl: "Welke computationele benadering maakt real-time seismische tomografische updates mogelijk voor aardbeving monitoring?"
      },
      options: [
        { en: "Sequential Bayesian updating and Kalman filtering", es: "Actualización bayesiana secuencial y filtrado de Kalman", de: "Sequenzielle Bayesianische Aktualisierung und Kalman-Filterung", nl: "Sequentiële Bayesiaanse updating en Kalman filtering" },
        { en: "Complete model re-inversion only", es: "Solo re-inversión completa del modelo", de: "Nur vollständige Modell-Reinversion", nl: "Alleen complete model her-inversie" },
        { en: "Static model updates", es: "Actualizaciones de modelo estático", de: "Statische Modell-Updates", nl: "Statische model updates" },
        { en: "Manual parameter adjustment", es: "Ajuste manual de parámetros", de: "Manuelle Parameteranpassung", nl: "Handmatige parameter aanpassing" }
      ],
      correct: 0,
      explanation: {
        en: "Sequential Bayesian updating with Kalman filtering allows real-time tomographic model updates as new seismic data arrive. This approach incrementally updates the velocity model using the new information while maintaining uncertainty estimates. The method is computationally efficient compared to full re-inversion and enables dynamic monitoring of temporal velocity changes in active seismic regions.",
        es: "La actualización bayesiana secuencial con filtrado de Kalman permite actualizaciones de modelo tomográfico en tiempo real conforme llegan nuevos datos sísmicos. Este enfoque actualiza incrementalmente el modelo de velocidad usando la nueva información mientras mantiene estimaciones de incertidumbre. El método es computacionalmente eficiente comparado con re-inversión completa y permite monitoreo dinámico de cambios de velocidad temporales en regiones sísmicas activas.",
        de: "Sequenzielle Bayesianische Aktualisierung mit Kalman-Filterung ermöglicht Echtzeit-tomographische Modell-Updates, wenn neue seismische Daten ankommen. Dieser Ansatz aktualisiert schrittweise das Geschwindigkeitsmodell unter Verwendung neuer Informationen, während Unsicherheitsschätzungen beibehalten werden. Die Methode ist rechnerisch effizienter als vollständige Re-Inversion und ermöglicht dynamische Überwachung zeitlicher Geschwindigkeitsänderungen in aktiven seismischen Regionen.",
        nl: "Sequentiële Bayesiaanse updating met Kalman filtering maakt real-time tomografische model updates mogelijk wanneer nieuwe seismische data arriveren. Deze benadering update incrementeel het snelheidsmodel met de nieuwe informatie terwijl onzekerheidsschattingen behouden blijven. De methode is computationeel efficiënt vergeleken met volledige her-inversie en maakt dynamische monitoring mogelijk van temporele snelheidsveranderingen in actieve seismische regio's."
      }
    },
    {
      question: {
        en: "What determines the lateral resolution achievable in surface wave tomography?",
        es: "¿Qué determina la resolución lateral alcanzable en tomografía de ondas superficiales?",
        de: "Was bestimmt die laterale Auflösung, die in Oberflächenwellen-Tomographie erreichbar ist?",
        nl: "Wat bepaalt de laterale resolutie die bereikbaar is in oppervlaktegolf tomografie?"
      },
      options: [
        { en: "Inter-station distance and wavelength of surface waves", es: "Distancia entre estaciones y longitud de onda de ondas superficiales", de: "Inter-Stations-Abstand und Wellenlänge der Oberflächenwellen", nl: "Inter-station afstand en golflengte van oppervlaktegolven" },
        { en: "Earthquake magnitude only", es: "Solo magnitud del terremoto", de: "Nur Erdbebenmagnitude", nl: "Alleen aardbevings magnitude" },
        { en: "Recording duration", es: "Duración de registro", de: "Aufzeichnungsdauer", nl: "Opname duur" },
        { en: "Signal-to-noise ratio only", es: "Solo relación señal-ruido", de: "Nur Signal-Rausch-Verhältnis", nl: "Alleen signaal-ruis verhouding" }
      ],
      correct: 0,
      explanation: {
        en: "Lateral resolution in surface wave tomography follows the Fresnel zone approximation: R ≈ √(λL/2), where λ is wavelength and L is propagation distance. The minimum resolvable feature size is typically 2-3 times the inter-station distance for periods used. High-frequency (short-period) surface waves provide better lateral resolution but sample shallower depths, while low-frequency waves penetrate deeper but have poorer lateral resolution.",
        es: "La resolución lateral en tomografía de ondas superficiales sigue la aproximación de zona de Fresnel: R ≈ √(λL/2), donde λ es longitud de onda y L es distancia de propagación. El tamaño de característica mínimo resoluble es típicamente 2-3 veces la distancia entre estaciones para períodos usados. Ondas superficiales de alta frecuencia (período corto) proporcionan mejor resolución lateral pero muestrean profundidades más superficiales, mientras que ondas de baja frecuencia penetran más profundo pero tienen resolución lateral más pobre.",
        de: "Laterale Auflösung in Oberflächenwellen-Tomographie folgt der Fresnel-Zonen-Approximation: R ≈ √(λL/2), wobei λ Wellenlänge und L Ausbreitungsentfernung ist. Die minimal auflösbare Merkmalsgröße ist typischerweise 2-3 mal der Inter-Stations-Abstand für verwendete Perioden. Hochfrequente (kurzperiodische) Oberflächenwellen bieten bessere laterale Auflösung, tasten aber flachere Tiefen ab, während niederfrequente Wellen tiefer eindringen, aber schlechtere laterale Auflösung haben.",
        nl: "Laterale resolutie in oppervlaktegolf tomografie volgt de Fresnel zone benadering: R ≈ √(λL/2), waar λ golflengte is en L voortplantings afstand. De minimaal oplosbare eigenschap grootte is meestal 2-3 keer de inter-station afstand voor gebruikte perioden. Hoge-frequentie (korte-periode) oppervlaktegolven bieden betere laterale resolutie maar bemonsteren ondiepere dieptes, terwijl lage-frequentie golven dieper doordringen maar slechtere laterale resolutie hebben."
      }
    },
    {
      question: {
        en: "What advanced inversion technique handles non-linear relationships in seismic tomography?",
        es: "¿Qué técnica de inversión avanzada maneja relaciones no lineales en tomografía sísmica?",
        de: "Welche fortgeschrittene Inversionstechnik behandelt nichtlineare Beziehungen in seismischer Tomographie?",
        nl: "Welke geavanceerde inversie techniek behandelt niet-lineaire relaties in seismische tomografie?"
      },
      options: [
        { en: "Iterative non-linear least squares and Monte Carlo methods", es: "Mínimos cuadrados no lineales iterativos y métodos de Monte Carlo", de: "Iterative nichtlineare kleinste Quadrate und Monte-Carlo-Methoden", nl: "Iteratieve niet-lineaire kleinste kwadraten en Monte Carlo methoden" },
        { en: "Simple linear regression only", es: "Solo regresión lineal simple", de: "Nur einfache lineare Regression", nl: "Alleen eenvoudige lineaire regressie" },
        { en: "Direct matrix solving", es: "Resolución directa de matriz", de: "Direkte Matrixlösung", nl: "Directe matrix oplossing" },
        { en: "Gradient descent only", es: "Solo descenso de gradiente", de: "Nur Gradientenabstieg", nl: "Alleen gradient descent" }
      ],
      correct: 0,
      explanation: {
        en: "Non-linear relationships in tomography (e.g., ray bending through heterogeneous media) require iterative non-linear least squares methods like Gauss-Newton or Levenberg-Marquardt algorithms. Monte Carlo methods (e.g., Markov Chain Monte Carlo) provide uncertainty quantification by sampling the posterior probability distribution, giving not just best-fit models but confidence intervals and resolution estimates.",
        es: "Las relaciones no lineales en tomografía (ej. curvatura de rayos a través de medios heterogéneos) requieren métodos iterativos de mínimos cuadrados no lineales como algoritmos de Gauss-Newton o Levenberg-Marquardt. Los métodos de Monte Carlo (ej. Cadena de Markov Monte Carlo) proporcionan cuantificación de incertidumbre al muestrear la distribución de probabilidad posterior, dando no solo modelos de mejor ajuste sino intervalos de confianza y estimaciones de resolución.",
        de: "Nichtlineare Beziehungen in Tomographie (z.B. Strahlenbeugung durch heterogene Medien) erfordern iterative nichtlineare kleinste Quadrate Methoden wie Gauss-Newton oder Levenberg-Marquardt Algorithmen. Monte-Carlo-Methoden (z.B. Markov-Ketten-Monte-Carlo) bieten Unsicherheitsquantifizierung durch Abtastung der posterioren Wahrscheinlichkeitsverteilung und geben nicht nur bestangepasste Modelle, sondern Konfidenzintervalle und Auflösungsschätzungen.",
        nl: "Niet-lineaire relaties in tomografie (bijv. straal buiging door heterogene media) vereisen iteratieve niet-lineaire kleinste kwadraten methoden zoals Gauss-Newton of Levenberg-Marquardt algoritmen. Monte Carlo methoden (bijv. Markov Chain Monte Carlo) bieden onzekerheid kwantificatie door de posterior waarschijnlijkheidsdistributie te bemonsteren, wat niet alleen best-fit modellen geeft maar ook betrouwbaarheidsintervallen en resolutie schattingen."
      }
    },
    {
      question: {
        en: "What seismic parameter enables discrimination of fluid-filled versus gas-filled pore spaces in tomographic models?",
        es: "¿Qué parámetro sísmico permite discriminación de espacios porosos llenos de fluido versus llenos de gas en modelos tomográficos?",
        de: "Welcher seismische Parameter ermöglicht Diskriminierung von flüssigkeitsgefüllten versus gasgefüllten Porenräumen in tomographischen Modellen?",
        nl: "Welke seismische parameter maakt discriminatie mogelijk van vloeistof-gevulde versus gas-gevulde porie ruimtes in tomografische modellen?"
      },
      options: [
        { en: "Vp/Vs ratio and Poisson's ratio variations", es: "Relación Vp/Vs y variaciones de relación de Poisson", de: "Vp/Vs-Verhältnis und Poisson-Verhältnis-Variationen", nl: "Vp/Vs verhouding en Poisson verhouding variaties" },
        { en: "P-wave velocity only", es: "Solo velocidad de ondas P", de: "Nur P-Wellen-Geschwindigkeit", nl: "Alleen P-golf snelheid" },
        { en: "Amplitude measurements only", es: "Solo mediciones de amplitud", de: "Nur Amplitudenmessungen", nl: "Alleen amplitude metingen" },
        { en: "Frequency content analysis", es: "Análisis de contenido de frecuencia", de: "Frequenzinhalts-Analyse", nl: "Frequentie-inhoud analyse" }
      ],
      correct: 0,
      explanation: {
        en: "The Vp/Vs ratio is highly sensitive to fluid type in porous rocks. Gas-filled pores significantly reduce P-wave velocity while having minimal effect on S-wave velocity, resulting in low Vp/Vs ratios (~1.4-1.6). Liquid-saturated rocks show higher Vp/Vs ratios (~1.7-2.0) due to fluid bulk modulus effects. This makes Vp/Vs tomography a powerful tool for fluid identification.",
        es: "La relación Vp/Vs es altamente sensible al tipo de fluido in rocas porosas. Los poros llenos de gas reducen significativamente la velocidad de ondas P mientras tienen efecto mínimo en la velocidad de ondas S, resultando en relaciones Vp/Vs bajas (~1.4-1.6). Las rocas saturadas de líquido muestran relaciones Vp/Vs más altas (~1.7-2.0) debido a efectos de módulo de volumen de fluidos. Esto hace que la tomografía Vp/Vs sea una herramienta poderosa para identificación de fluidos.",
        de: "Das Vp/Vs-Verhältnis ist hochsensitiv für Fluidtyp in porösen Gesteinen. Gasgefüllte Poren reduzieren P-Wellen-Geschwindigkeit signifikant, während sie minimalen Effekt auf S-Wellen-Geschwindigkeit haben, was zu niedrigen Vp/Vs-Verhältnissen (~1,4-1,6) führt. Flüssigkeitsgesättigte Gesteine zeigen höhere Vp/Vs-Verhältnisse (~1,7-2,0) aufgrund von Fluid-Kompressionsmodul-Effekten. Dies macht Vp/Vs-Tomographie zu einem mächtigen Werkzeug für Fluididentifikation.",
        nl: "De Vp/Vs verhouding is zeer gevoelig voor vloeistoftype in poreuze rotsen. Gas-gevulde poriën verminderen P-golf snelheid significant terwijl ze minimaal effect hebben op S-golf snelheid, wat resulteert in lage Vp/Vs verhoudingen (~1,4-1,6). Vloeistof-verzadigde rotsen tonen hogere Vp/Vs verhoudingen (~1,7-2,0) door vloeistof bulk modulus effecten. Dit maakt Vp/Vs tomografie een krachtig gereedschap voor vloeistof identificatie."
      }
    },
    {
      question: {
        en: "What computational technique enables efficient forward modeling of wave propagation in complex 3D media?",
        es: "¿Qué técnica computacional permite modelado directo eficiente de propagación de ondas en medios 3D complejos?",
        de: "Welche rechnerische Technik ermöglicht effiziente Vorwärtsmodellierung der Wellenausbreitung in komplexen 3D-Medien?",
        nl: "Welke computationele techniek maakt efficiënte voorwaartse modellering van golf voortplanting in complexe 3D media mogelijk?"
      },
      options: [
        { en: "Spectral element method with hexahedral meshing", es: "Método de elemento espectral con mallado hexaédrico", de: "Spektralelement-Methode mit hexaedrischer Vernetzung", nl: "Spectrale element methode met hexahedrische meshing" },
        { en: "Simple finite difference only", es: "Solo diferencias finitas simples", de: "Nur einfache finite Differenzen", nl: "Alleen eenvoudige eindige verschillen" },
        { en: "Analytical solutions only", es: "Solo soluciones analíticas", de: "Nur analytische Lösungen", nl: "Alleen analytische oplossingen" },
        { en: "Linear interpolation methods", es: "Métodos de interpolación lineal", de: "Lineare Interpolationsmethoden", nl: "Lineaire interpolatie methoden" }
      ],
      correct: 0,
      explanation: {
        en: "The spectral element method (SEM) combines high accuracy of spectral methods with geometric flexibility of finite elements. Hexahedral meshing allows efficient representation of complex 3D geological structures while maintaining numerical accuracy. SEM is particularly effective for modeling wave propagation through highly heterogeneous media and is widely used in global and regional seismic wave simulations.",
        es: "El método de elemento espectral (SEM) combina alta precisión de métodos espectrales con flexibilidad geométrica de elementos finitos. El mallado hexaédrico permite representación eficiente de estructuras geológicas 3D complejas mientras mantiene precisión numérica. SEM es particularmente efectivo para modelar propagación de ondas a través de medios altamente heterogéneos y es ampliamente usado in simulaciones de ondas sísmicas globales y regionales.",
        de: "Die Spektralelement-Methode (SEM) kombiniert hohe Genauigkeit spektraler Methoden mit geometrischer Flexibilität finiter Elemente. Hexaedrische Vernetzung ermöglicht effiziente Darstellung komplexer 3D-geologischer Strukturen unter Beibehaltung numerischer Genauigkeit. SEM ist besonders effektiv für die Modellierung der Wellenausbreitung durch hochheterogene Medien und wird weithin in globalen und regionalen seismischen Wellensimulationen verwendet.",
        nl: "De spectrale element methode (SEM) combineert hoge nauwkeurigheid van spectrale methoden met geometrische flexibiliteit van eindige elementen. Hexahedrische meshing maakt efficiënte representatie van complexe 3D geologische structuren mogelijk terwijl numerieke nauwkeurigheid behouden blijft. SEM is bijzonder effectief voor het modelleren van golf voortplanting door zeer heterogene media en wordt breed gebruikt in globale en regionale seismische golf simulaties."
      }
    },
    {
      question: {
        en: "What determines the depth sensitivity kernels in finite-frequency seismic tomography?",
        es: "¿Qué determina los kernels de sensibilidad de profundidad en tomografía sísmica de frecuencia finita?",
        de: "Was bestimmt die Tiefenempfindlichkeits-Kerne in endlich-frequenter seismischer Tomographie?",
        nl: "Wat bepaalt de diepte gevoeligheids kernels in eindige-frequentie seismische tomografie?"
      },
      options: [
        { en: "Fresnel zone geometry and wave frequency content", es: "Geometría de zona de Fresnel y contenido de frecuencia de ondas", de: "Fresnel-Zonen-Geometrie und Wellen-Frequenzinhalt", nl: "Fresnel zone geometrie en golf frequentie-inhoud" },
        { en: "Source-receiver distance only", es: "Solo distancia fuente-receptor", de: "Nur Quelle-Empfänger-Entfernung", nl: "Alleen bron-ontvanger afstand" },
        { en: "Earthquake magnitude", es: "Magnitud del terremoto", de: "Erdbebenmagnitude", nl: "Aardbevings magnitude" },
        { en: "Station elevation", es: "Elevación de estación", de: "Stationshöhe", nl: "Station hoogte" }
      ],
      correct: 0,
      explanation: {
        en: "Depth sensitivity kernels in finite-frequency tomography are determined by Fresnel zone geometry, which depends on wave frequency and ray path geometry. Higher frequencies have smaller Fresnel zones and more focused sensitivity, while lower frequencies have broader sensitivity patterns. The kernels show how velocity perturbations at different depths contribute to traveltime anomalies, enabling proper weighting in tomographic inversions.",
        es: "Los kernels de sensibilidad de profundidad en tomografía de frecuencia finita son determinados por geometría de zona de Fresnel, que depende de frecuencia de onda y geometría de trayectoria de rayo. Frecuencias más altas tienen zonas de Fresnel más pequeñas y sensibilidad más enfocada, mientras que frecuencias más bajas tienen patrones de sensibilidad más amplios. Los kernels muestran cómo perturbaciones de velocidad en diferentes profundidades contribuyen a anomalías de tiempo de viaje, permitiendo peso apropiado en inversiones tomográficas.",
        de: "Tiefenempfindlichkeits-Kerne in endlich-frequenter Tomographie werden durch Fresnel-Zonen-Geometrie bestimmt, die von Wellenfrequenz und Strahlpfad-Geometrie abhängt. Höhere Frequenzen haben kleinere Fresnel-Zonen und fokussiertere Empfindlichkeit, während niedrigere Frequenzen breitere Empfindlichkeitsmuster haben. Die Kerne zeigen, wie Geschwindigkeitsstörungen in verschiedenen Tiefen zu Laufzeit-Anomalien beitragen und ermöglichen angemessene Gewichtung in tomographischen Inversionen.",
        nl: "Diepte gevoeligheids kernels in eindige-frequentie tomografie worden bepaald door Fresnel zone geometrie, die afhangt van golf frequentie en straalpad geometrie. Hogere frequenties hebben kleinere Fresnel zones en meer gefocuste gevoeligheid, terwijl lagere frequenties bredere gevoeligheids patronen hebben. De kernels tonen hoe snelheid verstoringen op verschillende dieptes bijdragen aan reistijd anomalieën, wat juiste weging mogelijk maakt in tomografische inversies."
      }
    },
    {
      question: {
        en: "What advanced preprocessing technique removes systematic timing errors from large seismic datasets?",
        es: "¿Qué técnica de preprocesamiento avanzada elimina errores sistemáticos de tiempo de grandes conjuntos de datos sísmicos?",
        de: "Welche fortgeschrittene Vorverarbeitungstechnik entfernt systematische Zeitfehler aus großen seismischen Datensätzen?",
        nl: "Welke geavanceerde voorverwerkingstechniek verwijdert systematische timing fouten uit grote seismische datasets?"
      },
      options: [
        { en: "Double-difference relocation and station timing corrections", es: "Relocalización de doble diferencia y correcciones de tiempo de estación", de: "Doppeldifferenz-Relokation und Stations-Zeitkorrekturen", nl: "Dubbele-verschil relocatie en station timing correcties" },
        { en: "Simple time shifting only", es: "Solo cambio de tiempo simple", de: "Nur einfache Zeitverschiebung", nl: "Alleen eenvoudige tijd verschuiving" },
        { en: "Amplitude normalization", es: "Normalización de amplitud", de: "Amplitudennormalisierung", nl: "Amplitude normalisatie" },
        { en: "Frequency filtering only", es: "Solo filtrado de frecuencia", de: "Nur Frequenzfilterung", nl: "Alleen frequentie filtering" }
      ],
      correct: 0,
      explanation: {
        en: "Double-difference methods use differential traveltimes between event pairs to remove systematic station timing errors and improve relative earthquake locations. This technique eliminates common path effects and station corrections, significantly improving the accuracy of travel time measurements used in tomographic inversions. The method is particularly effective for dense earthquake catalogs and permanent network data.",
        es: "Los métodos de doble diferencia usan tiempos de viaje diferenciales entre pares de eventos para eliminar errores sistemáticos de tiempo de estación y mejorar localizaciones relativas de terremotos. Esta técnica elimina efectos de trayectoria común y correcciones de estación, mejorando significativamente la precisión de mediciones de tiempo de viaje usadas en inversiones tomográficas. El método es particularmente efectivo para catálogos densos de terremotos y datos de redes permanentes.",
        de: "Doppeldifferenz-Methoden verwenden differentielle Laufzeiten zwischen Ereignispaaren zur Entfernung systematischer Stations-Zeitfehler und Verbesserung relativer Erdbebenlokationen. Diese Technik eliminiert gemeinsame Pfadeffekte und Stationskorrekturen und verbessert signifikant die Genauigkeit von Laufzeitmessungen, die in tomographischen Inversionen verwendet werden. Die Methode ist besonders effektiv für dichte Erdbebenkataloge und permanente Netzwerkdaten.",
        nl: "Dubbele-verschil methoden gebruiken differentiële reistijden tussen gebeurtenis paren om systematische station timing fouten te verwijderen en relatieve aardbeving locaties te verbeteren. Deze techniek elimineert gemeenschappelijke pad effecten en station correcties, wat de nauwkeurigheid van reistijd metingen die gebruikt worden in tomografische inversies significant verbetert. De methode is bijzonder effectief voor dichte aardbeving catalogi en permanente netwerk data."
      }
    },
    {
      question: {
        en: "What seismic tomographic approach enables imaging of small-scale heterogeneities using earthquake multiplets?",
        es: "¿Qué enfoque tomográfico sísmico permite imagen de heterogeneidades de pequeña escala usando multipletes de terremotos?",
        de: "Welcher seismische tomographische Ansatz ermöglicht Abbildung kleinräumiger Heterogenitäten mit Erdbeben-Multipletts?",
        nl: "Welke seismische tomografische benadering maakt beeldvorming van kleinschalige heterogeniteiten mogelijk met aardbeving multiplets?"
      },
      options: [
        { en: "High-resolution double-difference tomography with waveform cross-correlation", es: "Tomografía de doble diferencia de alta resolución con correlación cruzada de formas de onda", de: "Hochauflösende Doppeldifferenz-Tomographie mit Wellenform-Kreuzkorrelation", nl: "Hoge-resolutie dubbele-verschil tomografie met golfvorm kruiscorrelatie" },
        { en: "Standard ray-based tomography only", es: "Solo tomografía estándar basada en rayos", de: "Nur standard strahlenbasierte Tomographie", nl: "Alleen standaard straal-gebaseerde tomografie" },
        { en: "Simple velocity interpolation", es: "Interpolación simple de velocidad", de: "Einfache Geschwindigkeitsinterpolation", nl: "Eenvoudige snelheid interpolatie" },
        { en: "Regional-scale inversions only", es: "Solo inversiones de escala regional", de: "Nur regionale Skalierungs-Inversionen", nl: "Alleen regionale-schaal inversies" }
      ],
      correct: 0,
      explanation: {
        en: "High-resolution double-difference tomography using waveform cross-correlation of earthquake multiplets (clusters of similar events) can resolve velocity heterogeneities at scales much smaller than conventional methods. The technique uses precise differential times from cross-correlation and focuses on relative velocity changes, achieving kilometer or sub-kilometer resolution in well-sampled regions.",
        es: "La tomografía de doble diferencia de alta resolución usando correlación cruzada de formas de onda de multipletes de terremotos (grupos de eventos similares) puede resolver heterogeneidades de velocidad a escalas mucho menores que métodos convencionales. La técnica usa tiempos diferenciales precisos de correlación cruzada y se enfoca en cambios de velocidad relativos, logrando resolución de kilómetro o sub-kilómetro en regiones bien muestreadas.",
        de: "Hochauflösende Doppeldifferenz-Tomographie mit Wellenform-Kreuzkorrelation von Erdbeben-Multipletts (Cluster ähnlicher Ereignisse) kann Geschwindigkeits-Heterogenitäten in viel kleineren Skalen als konventionelle Methoden auflösen. Die Technik verwendet präzise differentielle Zeiten aus Kreuzkorrelation und konzentriert sich auf relative Geschwindigkeitsänderungen, erreicht Kilometer- oder Sub-Kilometer-Auflösung in gut abgetasteten Regionen.",
        nl: "Hoge-resolutie dubbele-verschil tomografie met golfvorm kruiscorrelatie van aardbeving multiplets (clusters van vergelijkbare gebeurtenissen) kan snelheids heterogeniteiten oplossen op schalen veel kleiner dan conventionele methoden. De techniek gebruikt precieze differentiële tijden van kruiscorrelatie en focust op relatieve snelheidsveranderingen, wat kilometer of sub-kilometer resolutie bereikt in goed bemonsterde gebieden."
      }
    },
    {
      question: {
        en: "What determines the choice between teleseismic and regional wave tomography approaches?",
        es: "¿Qué determina la elección entre enfoques de tomografía de ondas telesísmicas y regionales?",
        de: "Was bestimmt die Wahl zwischen teleseismischen und regionalen Wellen-Tomographie-Ansätzen?",
        nl: "Wat bepaalt de keuze tussen teleseismische en regionale golf tomografie benaderingen?"
      },
      options: [
        { en: "Target depth range and desired lateral resolution", es: "Rango de profundidad objetivo y resolución lateral deseada", de: "Zieltiefenbereich und gewünschte laterale Auflösung", nl: "Doel diepte bereik en gewenste laterale resolutie" },
        { en: "Available computing power only", es: "Solo poder computacional disponible", de: "Nur verfügbare Rechenleistung", nl: "Alleen beschikbare rekenkracht" },
        { en: "Data storage capacity", es: "Capacidad de almacenamiento de datos", de: "Datenspeicherkapazität", nl: "Data opslag capaciteit" },
        { en: "Network maintenance costs", es: "Costos de mantenimiento de red", de: "Netzwerk-Wartungskosten", nl: "Netwerk onderhoud kosten" }
      ],
      correct: 0,
      explanation: {
        en: "The choice depends on target depth and resolution requirements. Teleseismic body waves (P, S) from distant earthquakes (>30° epicentral distance) provide excellent resolution for deep structures (>100 km depth) but poor lateral resolution (~100-200 km). Regional waves from nearby earthquakes offer superior lateral resolution (~10-50 km) but are limited to crustal and uppermost mantle depths.",
        es: "La elección depende de la profundidad objetivo y requisitos de resolución. Las ondas internas telesísmicas (P, S) de terremotos distantes (>30° distancia epicentral) proporcionan excelente resolución para estructuras profundas (>100 km profundidad) pero resolución lateral pobre (~100-200 km). Las ondas regionales de terremotos cercanos ofrecen resolución lateral superior (~10-50 km) pero están limitadas a profundidades de corteza y manto superior.",
        de: "Die Wahl hängt von Zieltiefe und Auflösungsanforderungen ab. Teleseismische Raumwellen (P, S) von fernen Erdbeben (>30° Epizentralentfernung) bieten exzellente Auflösung für tiefe Strukturen (>100 km Tiefe), aber schlechte laterale Auflösung (~100-200 km). Regionale Wellen von nahen Erdbeben bieten überlegene laterale Auflösung (~10-50 km), sind aber auf Krusten- und oberste Manteltiefen begrenzt.",
        nl: "De keuze hangt af van doel diepte en resolutie vereisten. Teleseismische ruimte golven (P, S) van verre aardbevingen (>30° epicentrale afstand) bieden uitstekende resolutie voor diepe structuren (>100 km diepte) maar slechte laterale resolutie (~100-200 km). Regionale golven van nabije aardbevingen bieden superieure laterale resolutie (~10-50 km) maar zijn beperkt tot korst en bovenste mantel dieptes."
      }
    },
    {
      question: {
        en: "What computational strategy enables efficient storage and access of massive tomographic model databases?",
        es: "¿Qué estrategia computacional permite almacenamiento eficiente y acceso de bases de datos masivas de modelos tomográficos?",
        de: "Welche rechnerische Strategie ermöglicht effiziente Speicherung und Zugriff auf massive tomographische Modell-Datenbanken?",
        nl: "Welke computationele strategie maakt efficiënte opslag en toegang van massieve tomografische model databases mogelijk?"
      },
      options: [
        { en: "Hierarchical data formats and adaptive mesh refinement", es: "Formatos de datos jerárquicos y refinamiento adaptativo de malla", de: "Hierarchische Datenformate und adaptive Netzverfeinerung", nl: "Hiërarchische data formaten en adaptieve mesh verfijning" },
        { en: "Simple text files only", es: "Solo archivos de texto simples", de: "Nur einfache Textdateien", nl: "Alleen eenvoudige tekst bestanden" },
        { en: "Memory-only storage", es: "Solo almacenamiento en memoria", de: "Nur Speicher-Speicherung", nl: "Alleen geheugen opslag" },
        { en: "Sequential file access only", es: "Solo acceso secuencial de archivos", de: "Nur sequenzieller Dateizugriff", nl: "Alleen sequentiële bestand toegang" }
      ],
      correct: 0,
      explanation: {
        en: "Hierarchical data formats (like HDF5 or NetCDF) with adaptive mesh refinement enable efficient storage of tomographic models with variable resolution. These formats support compression, parallel I/O, and hierarchical organization that allows rapid access to specific model regions without loading entire datasets. Adaptive meshes provide high resolution where data density is high and coarser resolution elsewhere.",
        es: "Los formatos de datos jerárquicos (como HDF5 o NetCDF) con refinamiento adaptativo de malla permiten almacenamiento eficiente de modelos tomográficos con resolución variable. Estos formatos soportan compresión, I/O paralelo, y organización jerárquica que permite acceso rápido a regiones específicas del modelo sin cargar conjuntos de datos enteros. Las mallas adaptativas proporcionan alta resolución donde la densidad de datos es alta y resolución más gruesa en otros lugares.",
        de: "Hierarchische Datenformate (wie HDF5 oder NetCDF) mit adaptiver Netzverfeinerung ermöglichen effiziente Speicherung tomographischer Modelle mit variabler Auflösung. Diese Formate unterstützen Kompression, parallele I/O und hierarchische Organisation, die schnellen Zugriff auf spezifische Modellregionen ohne Laden ganzer Datensätze ermöglicht. Adaptive Netze bieten hohe Auflösung, wo Datendichte hoch ist, und gröbere Auflösung anderswo.",
        nl: "Hiërarchische data formaten (zoals HDF5 of NetCDF) met adaptieve mesh verfijning maken efficiënte opslag van tomografische modellen met variabele resolutie mogelijk. Deze formaten ondersteunen compressie, parallelle I/O, en hiërarchische organisatie die snelle toegang tot specifieke model regio's mogelijk maakt zonder hele datasets te laden. Adaptieve meshes bieden hoge resolutie waar data dichtheid hoog is en grovere resolutie elders."
      }
    },
    {
      question: {
        en: "What seismic imaging technique combines body wave and surface wave information for improved crustal models?",
        es: "¿Qué técnica de imagen sísmica combina información de ondas internas y superficiales para modelos crustales mejorados?",
        de: "Welche seismische Bildgebungstechnik kombiniert Raumwellen- und Oberflächenwellen-Informationen für verbesserte Krustenmodelle?",
        nl: "Welke seismische beeldvormingstechniek combineert ruimtegolf en oppervlaktegolf informatie voor verbeterde korst modellen?"
      },
      options: [
        { en: "Joint inversion of receiver functions and surface wave dispersion", es: "Inversión conjunta de funciones de receptor y dispersión de ondas superficiales", de: "Gemeinsame Inversion von Empfänger-Funktionen und Oberflächenwellen-Dispersion", nl: "Gezamenlijke inversie van ontvanger functies en oppervlaktegolf dispersie" },
        { en: "Body wave tomography only", es: "Solo tomografía de ondas internas", de: "Nur Raumwellen-Tomographie", nl: "Alleen ruimtegolf tomografie" },
        { en: "Surface wave analysis only", es: "Solo análisis de ondas superficiales", de: "Nur Oberflächenwellen-Analyse", nl: "Alleen oppervlaktegolf analyse" },
        { en: "Simple velocity averaging", es: "Promediado simple de velocidad", de: "Einfache Geschwindigkeitsmittelung", nl: "Eenvoudige snelheid middeling" }
      ],
      correct: 0,
      explanation: {
        en: "Joint inversion of receiver functions and surface wave dispersion leverages the complementary sensitivities of these datasets. Receiver functions provide high vertical resolution for velocity discontinuities (especially Moho depth), while surface wave dispersion constrains average velocities. The combined approach reduces trade-offs and provides more robust crustal thickness and velocity models.",
        es: "La inversión conjunta de funciones de receptor y dispersión de ondas superficiales aprovecha las sensibilidades complementarias de estos conjuntos de datos. Las funciones de receptor proporcionan alta resolución vertical para discontinuidades de velocidad (especialmente profundidad de Moho), mientras que dispersión de ondas superficiales restringe velocidades promedio. El enfoque combinado reduce compensaciones y proporciona modelos más robustos de espesor crustal y velocidad.",
        de: "Gemeinsame Inversion von Empfänger-Funktionen und Oberflächenwellen-Dispersion nutzt die komplementären Empfindlichkeiten dieser Datensätze. Empfänger-Funktionen bieten hohe vertikale Auflösung für Geschwindigkeitsdiskontinuitäten (besonders Moho-Tiefe), während Oberflächenwellen-Dispersion Durchschnittsgeschwindigkeiten beschränkt. Der kombinierte Ansatz reduziert Trade-offs und bietet robustere Krustendicken- und Geschwindigkeitsmodelle.",
        nl: "Gezamenlijke inversie van ontvanger functies en oppervlaktegolf dispersie benut de complementaire gevoeligheden van deze datasets. Ontvanger functies bieden hoge verticale resolutie voor snelheid discontinuïteiten (vooral Moho diepte), terwijl oppervlaktegolf dispersie gemiddelde snelheden beperkt. De gecombineerde benadering vermindert trade-offs en biedt meer robuuste korst dikte en snelheids modellen."
      }
    },
    {
      question: {
        en: "What determines the optimal smoothing constraints in regularized tomographic inversions?",
        es: "¿Qué determina las restricciones de suavizado óptimas en inversiones tomográficas regularizadas?",
        de: "Was bestimmt die optimalen Glättungsbeschränkungen in regularisierten tomographischen Inversionen?",
        nl: "Wat bepaalt de optimale gladmakings beperkingen in geregulariseerde tomografische inversies?"
      },
      options: [
        { en: "Expected model roughness and data uncertainty levels", es: "Rugosidad esperada del modelo y niveles de incertidumbre de datos", de: "Erwartete Modellrauheit und Datenunsicherheitsniveaus", nl: "Verwachte model ruwheid en data onzekerheid niveaus" },
        { en: "Processing time constraints", es: "Restricciones de tiempo de procesamiento", de: "Verarbeitungszeit-Beschränkungen", nl: "Verwerkingstijd beperkingen" },
        { en: "Available disk space", es: "Espacio en disco disponible", de: "Verfügbarer Festplattenspeicher", nl: "Beschikbare schijfruimte" },
        { en: "Number of iterations only", es: "Solo número de iteraciones", de: "Nur Anzahl der Iterationen", nl: "Alleen aantal iteraties" }
      ],
      correct: 0,
      explanation: {
        en: "Optimal smoothing constraints balance geological expectations about model roughness with data quality. Regions with dense, high-quality ray coverage can support rougher (more detailed) models, while areas with sparse or noisy data require stronger smoothing. The constraints should reflect a priori geological knowledge about expected velocity gradients and structural complexity.",
        es: "Las restricciones de suavizado óptimas equilibran expectativas geológicas sobre rugosidad del modelo con calidad de datos. Regiones con cobertura de rayos densa y de alta calidad pueden soportar modelos más rugosos (más detallados), mientras que áreas con datos dispersos o ruidosos requieren suavizado más fuerte. Las restricciones deberían reflejar conocimiento geológico a priori sobre gradientes de velocidad esperados y complejidad estructural.",
        de: "Optimale Glättungsbeschränkungen balancieren geologische Erwartungen über Modellrauheit mit Datenqualität. Regionen mit dichter, hochwertiger Strahlenabdeckung können rauere (detailliertere) Modelle unterstützen, während Gebiete mit spärlichen oder rauschbehafteten Daten stärkere Glättung erfordern. Die Beschränkungen sollten a priori geologisches Wissen über erwartete Geschwindigkeitsgradienten und strukturelle Komplexität widerspiegeln.",
        nl: "Optimale gladmakings beperkingen balanceren geologische verwachtingen over model ruwheid met data kwaliteit. Regio's met dichte, hoge-kwaliteit straal dekking kunnen ruwere (meer gedetailleerde) modellen ondersteunen, terwijl gebieden met sparse of ruis data sterkere gladmaking vereisen. De beperkingen zouden a priori geologische kennis moeten reflecteren over verwachte snelheids gradiënten en structurele complexiteit."
      }
    },
    {
      question: {
        en: "What seismic tomographic approach enables detection of temporal velocity changes in active fault zones?",
        es: "¿Qué enfoque tomográfico sísmico permite detección de cambios temporales de velocidad en zonas de falla activas?",
        de: "Welcher seismische tomographische Ansatz ermöglicht Detektion zeitlicher Geschwindigkeitsänderungen in aktiven Verwerfungszonen?",
        nl: "Welke seismische tomografische benadering maakt detectie van temporele snelheidsveranderingen in actieve breukzones mogelijk?"
      },
      options: [
        { en: "Time-lapse tomography with repeating earthquake analysis", es: "Tomografía de lapso de tiempo con análisis de terremotos repetidos", de: "Zeitabfolge-Tomographie mit wiederholender Erdbebenanalyse", nl: "Tijdverloop tomografie met herhalende aardbeving analyse" },
        { en: "Single-time snapshot tomography", es: "Tomografía de instantánea de tiempo único", de: "Einzelzeit-Momentaufnahme-Tomographie", nl: "Eenmalige tijd momentopname tomografie" },
        { en: "Static velocity model updates", es: "Actualizaciones de modelo de velocidad estático", de: "Statische Geschwindigkeitsmodell-Updates", nl: "Statische snelheid model updates" },
        { en: "Annual average velocity computation", es: "Cálculo de velocidad promedio anual", de: "Jährliche Durchschnittsgeschwindigkeitsberechnung", nl: "Jaarlijkse gemiddelde snelheid berekening" }
      ],
      correct: 0,
      explanation: {
        en: "Time-lapse (4D) tomography uses repeating earthquakes or artificial sources to monitor temporal velocity changes with precision of 0.1% or better. The technique compares travel times from similar source-receiver paths over time, canceling out static path effects and revealing dynamic changes associated with stress, fluid, or structural variations in fault zones.",
        es: "La tomografía de lapso de tiempo (4D) usa terremotos repetidos o fuentes artificiales para monitorear cambios temporales de velocidad con precisión de 0.1% o mejor. La técnica compara tiempos de viaje de trayectorias fuente-receptor similares a través del tiempo, cancelando efectos de trayectoria estática y revelando cambios dinámicos asociados con variaciones de esfuerzo, fluido, o estructurales en zonas de falla.",
        de: "Zeitabfolge (4D) Tomographie nutzt wiederholende Erdbeben oder künstliche Quellen zur Überwachung zeitlicher Geschwindigkeitsänderungen mit Präzision von 0,1% oder besser. Die Technik vergleicht Laufzeiten von ähnlichen Quelle-Empfänger-Pfaden über Zeit, hebt statische Pfadeffekte auf und zeigt dynamische Änderungen im Zusammenhang mit Spannungs-, Fluid- oder strukturellen Variationen in Verwerfungszonen.",
        nl: "Tijdverloop (4D) tomografie gebruikt herhalende aardbevingen of kunstmatige bronnen om temporele snelheidsveranderingen te monitoren met precisie van 0,1% of beter. De techniek vergelijkt reistijden van vergelijkbare bron-ontvanger paden over tijd, wat statische pad effecten opheft en dynamische veranderingen onthult geassocieerd met spanning, vloeistof, of structurele variaties in breukzones."
      }
    },
    {
      question: {
        en: "What advanced quality control technique identifies outlier travel time measurements in large tomographic datasets?",
        es: "¿Qué técnica avanzada de control de calidad identifica mediciones de tiempo de viaje atípicas en grandes conjuntos de datos tomográficos?",
        de: "Welche fortgeschrittene Qualitätskontroll-Technik identifiziert Ausreißer-Laufzeitmessungen in großen tomographischen Datensätzen?",
        nl: "Welke geavanceerde kwaliteitscontrole techniek identificeert uitbijter reistijd metingen in grote tomografische datasets?"
      },
      options: [
        { en: "Statistical outlier detection with robust M-estimators", es: "Detección estadística de valores atípicos con estimadores M robustos", de: "Statistische Ausreißer-Detektion mit robusten M-Schätzern", nl: "Statistische uitbijter detectie met robuuste M-estimators" },
        { en: "Manual visual inspection only", es: "Solo inspección visual manual", de: "Nur manuelle visuelle Inspektion", nl: "Alleen handmatige visuele inspectie" },
        { en: "Simple threshold filtering", es: "Filtrado de umbral simple", de: "Einfache Schwellenwertfilterung", nl: "Eenvoudige drempel filtering" },
        { en: "Amplitude-based selection", es: "Selección basada en amplitud", de: "Amplitudenbasierte Auswahl", nl: "Amplitude-gebaseerde selectie" }
      ],
      correct: 0,
      explanation: {
        en: "Robust M-estimators (like Huber or Tukey estimators) automatically identify and downweight outlier travel time picks that deviate significantly from expected patterns. These statistical techniques are resistant to outliers and provide objective criteria for data quality assessment, essential for processing the millions of travel time measurements in modern large-scale tomographic studies.",
        es: "Los estimadores M robustos (como estimadores Huber o Tukey) identifican automáticamente y reducen peso de selecciones de tiempo de viaje atípicas que se desvían significativamente de patrones esperados. Estas técnicas estadísticas son resistentes a valores atípicos y proporcionan criterios objetivos para evaluación de calidad de datos, esencial para procesar los millones de mediciones de tiempo de viaje en estudios tomográficos modernos de gran escala.",
        de: "Robuste M-Schätzer (wie Huber- oder Tukey-Schätzer) identifizieren automatisch und gewichten Ausreißer-Laufzeit-Picks herunter, die signifikant von erwarteten Mustern abweichen. Diese statistischen Techniken sind widerstandsfähig gegen Ausreißer und bieten objektive Kriterien für Datenqualitätsbewertung, wesentlich für die Verarbeitung der Millionen von Laufzeitmessungen in modernen großskaligen tomographischen Studien.",
        nl: "Robuuste M-estimators (zoals Huber of Tukey estimators) identificeren automatisch en verminderen het gewicht van uitbijter reistijd keuzes die significant afwijken van verwachte patronen. Deze statistische technieken zijn resistent tegen uitbijters en bieden objectieve criteria voor data kwaliteit beoordeling, essentieel voor het verwerken van de miljoenen reistijd metingen in moderne grootschalige tomografische studies."
      }
    },
    {
      question: {
        en: "What determines the spatial aliasing limits in seismic array tomographic imaging?",
        es: "¿Qué determina los límites de aliasing espacial en imagen tomográfica de arreglos sísmicos?",
        de: "Was bestimmt die räumlichen Aliasing-Grenzen in seismischer Array-tomographischer Bildgebung?",
        nl: "Wat bepaalt de ruimtelijke aliasing grenzen in seismische array tomografische beeldvorming?"
      },
      options: [
        { en: "Nyquist criterion and inter-element spacing", es: "Criterio de Nyquist y espaciamiento entre elementos", de: "Nyquist-Kriterium und Inter-Element-Abstand", nl: "Nyquist criterium en inter-element afstand" },
        { en: "Signal amplitude only", es: "Solo amplitud de señal", de: "Nur Signalamplitude", nl: "Alleen signaal amplitude" },
        { en: "Recording duration", es: "Duración de registro", de: "Aufzeichnungsdauer", nl: "Opname duur" },
        { en: "Source-array distance", es: "Distancia fuente-arreglo", de: "Quelle-Array-Entfernung", nl: "Bron-array afstand" }
      ],
      correct: 0,
      explanation: {
        en: "Spatial aliasing in seismic arrays follows the Nyquist criterion: the maximum resolvable wavenumber is kmax = π/Δx, where Δx is inter-element spacing. Waves with higher wavenumbers (shorter wavelengths) will be aliased and appear as lower-frequency artifacts. This fundamental sampling theorem determines the minimum station spacing needed to avoid aliasing for the wavelengths of interest.",
        es: "El aliasing espacial en arreglos sísmicos sigue el criterio de Nyquist: el número de onda máximo resoluble es kmax = π/Δx, donde Δx es espaciamiento entre elementos. Ondas con números de onda más altos (longitudes de onda más cortas) serán aliased y aparecerán como artefactos de menor frecuencia. Este teorema fundamental de muestreo determina el espaciamiento mínimo de estaciones necesario para evitar aliasing para las longitudes de onda de interés.",
        de: "Räumliches Aliasing in seismischen Arrays folgt dem Nyquist-Kriterium: die maximal auflösbare Wellenzahl ist kmax = π/Δx, wobei Δx Inter-Element-Abstand ist. Wellen mit höheren Wellenzahlen (kürzeren Wellenlängen) werden aliased und erscheinen als niederfrequente Artefakte. Dieses fundamentale Abtasttheorem bestimmt den minimalen Stationsabstand, der benötigt wird, um Aliasing für die interessierenden Wellenlängen zu vermeiden.",
        nl: "Ruimtelijke aliasing in seismische arrays volgt het Nyquist criterium: het maximum oplosbare golfgetal is kmax = π/Δx, waar Δx inter-element afstand is. Golven met hogere golfgetallen (kortere golflengtes) zullen gealiased zijn en verschijnen als lagere-frequentie artefacten. Deze fundamentele sampling stelling bepaalt de minimum station afstand nodig om aliasing te vermijden voor de golflengtes van belang."
      }
    },
    {
      question: {
        en: "What seismic tomographic technique specifically targets imaging of fault zone internal structure?",
        es: "¿Qué técnica tomográfica sísmica específicamente apunta a imagen de estructura interna de zona de falla?",
        de: "Welche seismische tomographische Technik zielt speziell auf Bildgebung interner Verwerfungszonen-Struktur ab?",
        nl: "Welke seismische tomografische techniek richt zich specifiek op beeldvorming van breukzone interne structuur?"
      },
      options: [
        { en: "Fault zone head wave tomography and trapped wave analysis", es: "Tomografía de ondas directas de zona de falla y análisis de ondas atrapadas", de: "Verwerfungszone-Kopfwellen-Tomographie und eingefangene Wellen-Analyse", nl: "Breukzone hoofdgolf tomografie en gevangen golf analyse" },
        { en: "Standard regional tomography only", es: "Solo tomografía regional estándar", de: "Nur standard regionale Tomographie", nl: "Alleen standaard regionale tomografie" },
        { en: "Surface wave analysis only", es: "Solo análisis de ondas superficiales", de: "Nur Oberflächenwellen-Analyse", nl: "Alleen oppervlaktegolf analyse" },
        { en: "Teleseismic body wave tomography", es: "Tomografía de ondas internas telesísmicas", de: "Teleseismische Raumwellen-Tomographie", nl: "Teleseismische ruimtegolf tomografie" }
      ],
      correct: 0,
      explanation: {
        en: "Fault zone head waves and trapped waves provide unique constraints on internal fault zone structure. Head waves refract along the fault core and are sensitive to velocity contrasts, while trapped waves repeatedly reflect within low-velocity fault zone and reveal its width and internal velocity structure. These specialized techniques can resolve fault zone details at scales of tens to hundreds of meters.",
        es: "Las ondas directas de zona de falla y ondas atrapadas proporcionan restricciones únicas en estructura interna de zona de falla. Las ondas directas se refractan a lo largo del núcleo de falla y son sensibles a contrastes de velocidad, mientras que ondas atrapadas se reflejan repetidamente dentro de zona de falla de baja velocidad y revelan su ancho y estructura de velocidad interna. Estas técnicas especializadas pueden resolver detalles de zona de falla a escalas de decenas a cientos de metros.",
        de: "Verwerfungszone-Kopfwellen und eingefangene Wellen bieten einzigartige Beschränkungen für interne Verwerfungszonen-Struktur. Kopfwellen brechen entlang des Verwerfungskerns und sind empfindlich für Geschwindigkeitskontraste, während eingefangene Wellen wiederholt innerhalb der niedriggeschwindigkeits-Verwerfungszone reflektieren und ihre Breite und interne Geschwindigkeitsstruktur offenbaren. Diese spezialisierten Techniken können Verwerfungszonendetails in Skalen von Dutzenden bis Hunderten von Metern auflösen.",
        nl: "Breukzone hoofdgolven en gevangen golven bieden unieke beperkingen op interne breukzone structuur. Hoofdgolven breken langs de breuk kern en zijn gevoelig voor snelheids contrasten, terwijl gevangen golven herhaaldelijk reflecteren binnen lage-snelheids breukzone en de breedte en interne snelheids structuur onthullen. Deze gespecialiseerde technieken kunnen breukzone details oplossen op schalen van tientallen tot honderden meters."
      }
    },
    {
      question: {
        en: "What computational approach enables uncertainty quantification in large-scale tomographic inversions?",
        es: "¿Qué enfoque computacional permite cuantificación de incertidumbre en inversiones tomográficas de gran escala?",
        de: "Welcher rechnerische Ansatz ermöglicht Unsicherheitsquantifizierung in großskaligen tomographischen Inversionen?",
        nl: "Welke computationele benadering maakt onzekerheid kwantificatie mogelijk in grootschalige tomografische inversies?"
      },
      options: [
        { en: "Bootstrap resampling and ensemble modeling", es: "Remuestreo bootstrap y modelado de conjunto", de: "Bootstrap-Resampling und Ensemble-Modellierung", nl: "Bootstrap hersampling en ensemble modellering" },
        { en: "Single best-fit model only", es: "Solo modelo de mejor ajuste único", de: "Nur einzelnes bestangepasstes Modell", nl: "Alleen enkele best-fit model" },
        { en: "Linear error propagation", es: "Propagación de error lineal", de: "Lineare Fehlerfortpflanzung", nl: "Lineaire fout voortplanting" },
        { en: "Simple variance calculation", es: "Cálculo simple de varianza", de: "Einfache Varianzberechnung", nl: "Eenvoudige variantie berekening" }
      ],
      correct: 0,
      explanation: {
        en: "Bootstrap resampling generates multiple tomographic models by randomly resampling the data with replacement, creating an ensemble that characterizes model uncertainty. Each bootstrap realization provides an equally probable model, and their ensemble statistics (mean, variance, percentiles) quantify uncertainty in velocity estimates. This approach is more robust than linear error propagation for non-linear inversions.",
        es: "El remuestreo bootstrap genera múltiples modelos tomográficos muestreando aleatoriamente los datos con reemplazo, creando un conjunto que caracteriza incertidumbre del modelo. Cada realización bootstrap proporciona un modelo igualmente probable, y sus estadísticas de conjunto (media, varianza, percentiles) cuantifican incertidumbre en estimaciones de velocidad. Este enfoque es más robusto que propagación de error lineal para inversiones no lineales.",
        de: "Bootstrap-Resampling generiert mehrere tomographische Modelle durch zufälliges Resampling der Daten mit Ersetzung, wodurch ein Ensemble erstellt wird, das Modellunsicherheit charakterisiert. Jede Bootstrap-Realisierung bietet ein gleich wahrscheinliches Modell, und ihre Ensemble-Statistiken (Mittelwert, Varianz, Perzentile) quantifizieren Unsicherheit in Geschwindigkeitsschätzungen. Dieser Ansatz ist robuster als lineare Fehlerfortpflanzung für nichtlineare Inversionen.",
        nl: "Bootstrap hersampling genereert meerdere tomografische modellen door willekeurig de data te herbemonsteren met vervanging, wat een ensemble creëert dat model onzekerheid karakteriseert. Elke bootstrap realisatie biedt een even waarschijnlijk model, en hun ensemble statistieken (gemiddelde, variantie, percentielen) kwantificeren onzekerheid in snelheids schattingen. Deze benadering is robuuster dan lineaire fout voortplanting voor niet-lineaire inversies."
      }
    },
    {
      question: {
        en: "What determines the optimal frequency band selection for multi-scale seismic tomographic imaging?",
        es: "¿Qué determina la selección óptima de banda de frecuencia para imagen tomográfica sísmica multiescala?",
        de: "Was bestimmt die optimale Frequenzband-Auswahl für multiskalige seismische tomographische Bildgebung?",
        nl: "Wat bepaalt de optimale frequentieband selectie voor multi-schaal seismische tomografische beeldvorming?"
      },
      options: [
        { en: "Target resolution scale and signal-to-noise ratio", es: "Escala de resolución objetivo y relación señal-ruido", de: "Ziel-Auflösungsskala und Signal-Rausch-Verhältnis", nl: "Doel resolutie schaal en signaal-ruis verhouding" },
        { en: "Processing computational limits", es: "Límites computacionales de procesamiento", de: "Verarbeitungsrechnerische Grenzen", nl: "Verwerkings computationele limieten" },
        { en: "Available bandwidth only", es: "Solo ancho de banda disponible", de: "Nur verfügbare Bandbreite", nl: "Alleen beschikbare bandbreedte" },
        { en: "Historical precedent", es: "Precedente histórico", de: "Historischer Präzedenzfall", nl: "Historisch precedent" }
      ],
      correct: 0,
      explanation: {
        en: "Optimal frequency band selection balances resolution requirements with data quality. Higher frequencies provide better spatial resolution but suffer from stronger attenuation and scattering, limiting penetration depth. Lower frequencies travel farther but offer poorer resolution. Multi-scale tomography uses different frequency bands to image structures at their optimal scales, then combines results to build comprehensive velocity models.",
        es: "La selección óptima de banda de frecuencia equilibra requisitos de resolución con calidad de datos. Frecuencias más altas proporcionan mejor resolución espacial pero sufren de atenuación y dispersión más fuertes, limitando profundidad de penetración. Frecuencias más bajas viajan más lejos pero ofrecen resolución más pobre. La tomografía multiescala usa diferentes bandas de frecuencia para generar imágenes de estructuras en sus escalas óptimas, luego combina resultados para construir modelos de velocidad comprensivos.",
        de: "Optimale Frequenzband-Auswahl balanciert Auflösungsanforderungen mit Datenqualität. Höhere Frequenzen bieten bessere räumliche Auflösung, leiden aber unter stärkerer Dämpfung und Streuung, was Eindringtiefe begrenzt. Niedrigere Frequenzen reisen weiter, bieten aber schlechtere Auflösung. Multiskalige Tomographie nutzt verschiedene Frequenzbänder zur Abbildung von Strukturen in ihren optimalen Skalen, kombiniert dann Ergebnisse zum Aufbau umfassender Geschwindigkeitsmodelle.",
        nl: "Optimale frequentieband selectie balanceert resolutie vereisten met data kwaliteit. Hogere frequenties bieden betere ruimtelijke resolutie maar lijden onder sterkere demping en verstrooiing, wat penetratie diepte beperkt. Lagere frequenties reizen verder maar bieden slechtere resolutie. Multi-schaal tomografie gebruikt verschillende frequentiebanden om structuren af te beelden op hun optimale schalen, combineert dan resultaten om uitgebreide snelheids modellen te bouwen."
      }
    },
    {
      question: {
        en: "What seismic tomographic method enables high-resolution imaging of volcanic magma chambers?",
        es: "¿Qué método tomográfico sísmico permite imagen de alta resolución de cámaras magmáticas volcánicas?",
        de: "Welche seismische tomographische Methode ermöglicht hochauflösende Bildgebung vulkanischer Magmakammern?",
        nl: "Welke seismische tomografische methode maakt hoge-resolutie beeldvorming van vulkanische magma kamers mogelijk?"
      },
      options: [
        { en: "Local earthquake tomography with dense seismic networks", es: "Tomografía de terremotos locales con redes sísmicas densas", de: "Lokale Erdbeben-Tomographie mit dichten seismischen Netzwerken", nl: "Lokale aardbeving tomografie met dichte seismische netwerken" },
        { en: "Teleseismic tomography only", es: "Solo tomografía telesísmica", de: "Nur teleseismische Tomographie", nl: "Alleen teleseismische tomografie" },
        { en: "Surface wave analysis", es: "Análisis de ondas superficiales", de: "Oberflächenwellen-Analyse", nl: "Oppervlaktegolf analyse" },
        { en: "Regional body wave tomography", es: "Tomografía regional de ondas internas", de: "Regionale Raumwellen-Tomographie", nl: "Regionale ruimtegolf tomografie" }
      ],
      correct: 0,
      explanation: {
        en: "Local earthquake tomography using dense seismic networks around volcanoes provides the highest resolution for imaging magma chambers and volcanic plumbing systems. Short ray paths from local earthquakes to nearby stations enable resolution of kilometer-scale features. The high seismicity at active volcanoes provides excellent ray coverage, while the short distances minimize attenuation effects.",
        es: "La tomografía de terremotos locales usando redes sísmicas densas alrededor de volcanes proporciona la resolución más alta para generar imágenes de cámaras magmáticas y sistemas de plomería volcánica. Trayectorias de rayos cortas de terremotos locales a estaciones cercanas permiten resolución de características de escala kilométrica. La alta sismicidad en volcanes activos proporciona excelente cobertura de rayos, mientras que distancias cortas minimizan efectos de atenuación.",
        de: "Lokale Erdbeben-Tomographie mit dichten seismischen Netzwerken um Vulkane bietet die höchste Auflösung für die Abbildung von Magmakammern und vulkanischen Rohrsystemen. Kurze Strahlpfade von lokalen Erdbeben zu nahen Stationen ermöglichen Auflösung kilometermaßstäblicher Merkmale. Die hohe Seismizität an aktiven Vulkanen bietet exzellente Strahlenabdeckung, während kurze Entfernungen Dämpfungseffekte minimieren.",
        nl: "Lokale aardbeving tomografie met dichte seismische netwerken rond vulkanen biedt de hoogste resolutie voor het afbeelden van magma kamers en vulkanische leidingsystemen. Korte straalpaden van lokale aardbevingen naar nabije stations maken resolutie van kilometer-schaal eigenschappen mogelijk. De hoge seismiciteit bij actieve vulkanen biedt uitstekende straal dekking, terwijl de korte afstanden dempings effecten minimaliseren."
      }
    },
    {
      question: {
        en: "What computational technique enables real-time processing of continuous seismic data streams for tomographic applications?",
        es: "¿Qué técnica computacional permite procesamiento en tiempo real de flujos continuos de datos sísmicos para aplicaciones tomográficas?",
        de: "Welche rechnerische Technik ermöglicht Echtzeit-Verarbeitung kontinuierlicher seismischer Datenströme für tomographische Anwendungen?",
        nl: "Welke computationele techniek maakt real-time verwerking van continue seismische data stromen mogelijk voor tomografische toepassingen?"
      },
      options: [
        { en: "Stream processing with sliding window algorithms", es: "Procesamiento de flujos con algoritmos de ventana deslizante", de: "Stream-Verarbeitung mit gleitenden Fenster-Algorithmen", nl: "Stream verwerking met glijdende venster algoritmen" },
        { en: "Batch processing only", es: "Solo procesamiento por lotes", de: "Nur Batch-Verarbeitung", nl: "Alleen batch verwerking" },
        { en: "Offline analysis only", es: "Solo análisis fuera de línea", de: "Nur Offline-Analyse", nl: "Alleen offline analyse" },
        { en: "Manual data review", es: "Revisión manual de datos", de: "Manuelle Datenüberprüfung", nl: "Handmatige data beoordeling" }
      ],
      correct: 0,
      explanation: {
        en: "Stream processing with sliding window algorithms enables real-time analysis of continuous seismic data by processing overlapping time windows as new data arrive. This approach allows continuous updating of phase picks, location estimates, and velocity models without waiting for complete datasets. The sliding window maintains temporal continuity while providing low-latency results for monitoring applications.",
        es: "El procesamiento de flujos con algoritmos de ventana deslizante permite análisis en tiempo real de datos sísmicos continuos procesando ventanas de tiempo superpuestas conforme llegan nuevos datos. Este enfoque permite actualización continua de selecciones de fases, estimaciones de ubicación, y modelos de velocidad sin esperar conjuntos de datos completos. La ventana deslizante mantiene continuidad temporal mientras proporciona resultados de baja latencia para aplicaciones de monitoreo.",
        de: "Stream-Verarbeitung mit gleitenden Fenster-Algorithmen ermöglicht Echtzeit-Analyse kontinuierlicher seismischer Daten durch Verarbeitung überlappender Zeitfenster, während neue Daten ankommen. Dieser Ansatz ermöglicht kontinuierliche Aktualisierung von Phasen-Picks, Positionsschätzungen und Geschwindigkeitsmodellen ohne Warten auf vollständige Datensätze. Das gleitende Fenster hält zeitliche Kontinuität bei und bietet niedrige Latenz-Ergebnisse für Überwachungsanwendungen.",
        nl: "Stream verwerking met glijdende venster algoritmen maakt real-time analyse van continue seismische data mogelijk door overlappende tijdsvensters te verwerken terwijl nieuwe data arriveren. Deze benadering maakt continue updating mogelijk van fase keuzes, locatie schattingen, en snelheids modellen zonder te wachten op complete datasets. Het glijdende venster behoudt temporele continuïteit terwijl het lage-latency resultaten biedt voor monitoring toepassingen."
      }
    },
    {
      question: {
        en: "What controls the resolving power of seismic tomographic inversions in heterogeneous media?",
        es: "¿Qué controla el poder de resolución de inversiones tomográficas sísmicas en medios heterogéneos?",
        de: "Was kontrolliert die Auflösungskraft seismischer tomographischer Inversionen in heterogenen Medien?",
        nl: "Wat controleert het oplossend vermogen van seismische tomografische inversies in heterogene media?"
      },
      options: [
        { en: "Ray density distribution and angular coverage", es: "Distribución de densidad de rayos y cobertura angular", de: "Strahlendichteverteilung und Winkelabdeckung", nl: "Straal dichtheid distributie en hoek dekking" },
        { en: "Source magnitude only", es: "Solo magnitud de fuente", de: "Nur Quellmagnitude", nl: "Alleen bron magnitude" },
        { en: "Recording duration", es: "Duración de registro", de: "Aufzeichnungsdauer", nl: "Opname duur" },
        { en: "Instrument type", es: "Tipo de instrumento", de: "Instrumenttyp", nl: "Instrument type" }
      ],
      correct: 0,
      explanation: {
        en: "Resolving power in seismic tomography is fundamentally controlled by ray density (number of rays sampling each model cell) and angular coverage (diversity of ray directions). High ray density provides statistical robustness, while good angular coverage constrains velocity perturbations from multiple directions, reducing trade-offs and artifacts. Optimal resolution requires both uniform sampling and diverse ray geometries.",
        es: "El poder de resolución en tomografía sísmica es fundamentalmente controlado por densidad de rayos (número de rayos muestreando cada celda del modelo) y cobertura angular (diversidad de direcciones de rayos). Alta densidad de rayos proporciona robustez estadística, mientras que buena cobertura angular restringe perturbaciones de velocidad desde múltiples direcciones, reduciendo intercambios y artefactos. Resolución óptima requiere tanto muestreo uniforme como geometrías de rayos diversas.",
        de: "Auflösungskraft in seismischer Tomographie wird fundamental durch Strahlendichte (Anzahl der Strahlen, die jede Modellzelle abtasten) und Winkelabdeckung (Vielfalt der Strahlenrichtungen) kontrolliert. Hohe Strahlendichte bietet statistische Robustheit, während gute Winkelabdeckung Geschwindigkeitsstörungen aus mehreren Richtungen beschränkt, wodurch Trade-offs und Artefakte reduziert werden. Optimale Auflösung erfordert sowohl gleichmäßige Abtastung als auch diverse Strahlengeometrien.",
        nl: "Oplossend vermogen in seismische tomografie wordt fundamenteel gecontroleerd door straal dichtheid (aantal stralen die elke model cel bemonsteren) en hoek dekking (diversiteit van straal richtingen). Hoge straal dichtheid biedt statistische robuustheid, terwijl goede hoek dekking snelheid verstoringen van meerdere richtingen beperkt, wat trade-offs en artefacten vermindert. Optimale resolutie vereist zowel uniforme bemonstering als diverse straal geometrieën."
      }
    },
    {
      question: {
        en: "What seismic technique uses adjoint methods for efficient computation of tomographic sensitivity kernels?",
        es: "¿Qué técnica sísmica utiliza métodos adjuntos para cálculo eficiente de núcleos de sensibilidad tomográfica?",
        de: "Welche seismische Technik nutzt Adjunkt-Methoden für effiziente Berechnung tomographischer Sensitivitätskerne?",
        nl: "Welke seismische techniek gebruikt adjoint methoden voor efficiënte berekening van tomografische gevoeligheids kernen?"
      },
      options: [
        { en: "Adjoint tomography with full waveform inversion", es: "Tomografía adjunta con inversión de forma de onda completa", de: "Adjunkt-Tomographie mit vollständiger Wellenform-Inversion", nl: "Adjoint tomografie met volledige golfvorm inversie" },
        { en: "Ray-based travel time inversion", es: "Inversión de tiempo de viaje basada en rayos", de: "Strahlenbasierte Laufzeitinversion", nl: "Straal-gebaseerde reistijd inversie" },
        { en: "Simple grid search methods", es: "Métodos simples de búsqueda en cuadrícula", de: "Einfache Gitter-Suchmethoden", nl: "Eenvoudige rooster zoek methoden" },
        { en: "Linear least squares only", es: "Solo mínimos cuadrados lineales", de: "Nur lineare kleinste Quadrate", nl: "Alleen lineaire kleinste kwadraten" }
      ],
      correct: 0,
      explanation: {
        en: "Adjoint tomography revolutionizes seismic imaging by using adjoint methods to efficiently compute sensitivity kernels for full waveform inversion. Instead of computing kernels for each source-receiver pair separately, the adjoint method calculates all kernels simultaneously through time-reversed wavefield propagation, dramatically reducing computational cost while enabling high-resolution imaging using complete waveform information.",
        es: "La tomografía adjunta revoluciona la imagen sísmica usando métodos adjuntos para calcular eficientemente núcleos de sensibilidad para inversión de forma de onda completa. En lugar de calcular núcleos para cada par fuente-receptor por separado, el método adjunto calcula todos los núcleos simultáneamente a través de propagación de campo de ondas invertido en tiempo, reduciendo dramáticamente costo computacional mientras permite imagen de alta resolución usando información completa de forma de onda.",
        de: "Adjunkt-Tomographie revolutioniert seismische Bildgebung durch Verwendung von Adjunkt-Methoden zur effizienten Berechnung von Sensitivitätskernen für vollständige Wellenform-Inversion. Anstatt Kerne für jedes Quell-Empfänger-Paar separat zu berechnen, kalkuliert die Adjunkt-Methode alle Kerne gleichzeitig durch zeitumgekehrte Wellenfeld-Propagation, wodurch Rechnenaufwand dramatisch reduziert wird und hochauflösende Bildgebung mit vollständiger Wellenforminformation ermöglicht wird.",
        nl: "Adjoint tomografie revolutioneert seismische beeldvorming door adjoint methoden te gebruiken om efficiënt gevoeligheids kernen te berekenen voor volledige golfvorm inversie. In plaats van kernen voor elk bron-ontvanger paar afzonderlijk te berekenen, calculeert de adjoint methode alle kernen gelijktijdig door tijd-omgekeerde golfveld voortplanting, wat de rekenlast dramatisch vermindert terwijl hoge-resolutie beeldvorming mogelijk wordt met volledige golfvorm informatie."
      }
    },
    {
      question: {
        en: "What determines the trade-off between spatial resolution and parameter uncertainty in seismic tomography?",
        es: "¿Qué determina el intercambio entre resolución espacial e incertidumbre de parámetros en tomografía sísmica?",
        de: "Was bestimmt den Trade-off zwischen räumlicher Auflösung und Parameterunsicherheit in seismischer Tomographie?",
        nl: "Wat bepaalt de trade-off tussen ruimtelijke resolutie en parameter onzekerheid in seismische tomografie?"
      },
      options: [
        { en: "Data noise level and regularization strength", es: "Nivel de ruido de datos y fuerza de regularización", de: "Datenrauschpegel und Regularisierungsstärke", nl: "Data ruis niveau en regularisatie sterkte" },
        { en: "Number of stations only", es: "Solo número de estaciones", de: "Nur Anzahl der Stationen", nl: "Alleen aantal stations" },
        { en: "Earthquake magnitude range", es: "Rango de magnitud de terremotos", de: "Erdbeben-Magnitudenbereich", nl: "Aardbeving magnitude bereik" },
        { en: "Geographic coverage only", es: "Solo cobertura geográfica", de: "Nur geografische Abdeckung", nl: "Alleen geografische dekking" }
      ],
      correct: 0,
      explanation: {
        en: "The resolution-uncertainty trade-off in tomographic inversions is controlled by data noise levels and regularization strength. Higher noise requires stronger regularization (smoothing), which reduces resolution but provides more stable parameter estimates. Lower noise allows weaker regularization, enabling higher resolution at the cost of increased parameter uncertainty. Optimal regularization balances these competing demands based on data quality.",
        es: "El intercambio resolución-incertidumbre en inversiones tomográficas es controlado por niveles de ruido de datos y fuerza de regularización. Ruido más alto requiere regularización más fuerte (suavizado), que reduce resolución pero proporciona estimaciones de parámetros más estables. Ruido más bajo permite regularización más débil, permitiendo resolución más alta al costo de incertidumbre de parámetros aumentada. Regularización óptima equilibra estas demandas competidoras basadas en calidad de datos.",
        de: "Der Auflösungs-Unsicherheits-Trade-off in tomographischen Inversionen wird durch Datenrauschpegel und Regularisierungsstärke kontrolliert. Höheres Rauschen erfordert stärkere Regularisierung (Glättung), die Auflösung reduziert aber stabilere Parameterschätzungen bietet. Niedrigeres Rauschen erlaubt schwächere Regularisierung, ermöglicht höhere Auflösung auf Kosten erhöhter Parameterunsicherheit. Optimale Regularisierung balanciert diese konkurrierenden Anforderungen basierend auf Datenqualität.",
        nl: "De resolutie-onzekerheid trade-off in tomografische inversies wordt gecontroleerd door data ruis niveaus en regularisatie sterkte. Hoger ruis vereist sterkere regularisatie (gladmaking), wat resolutie vermindert maar stabielere parameter schattingen biedt. Lager ruis staat zwakkere regularisatie toe, wat hogere resolutie mogelijk maakt ten koste van verhoogde parameter onzekerheid. Optimale regularisatie balanceert deze concurrerende eisen gebaseerd op data kwaliteit."
      }
    },
    {
      question: {
        en: "What seismic imaging approach uses machine learning to improve tomographic velocity models?",
        es: "¿Qué enfoque de imagen sísmica utiliza aprendizaje automático para mejorar modelos de velocidad tomográfica?",
        de: "Welcher seismische Bildgebungsansatz nutzt maschinelles Lernen zur Verbesserung tomographischer Geschwindigkeitsmodelle?",
        nl: "Welke seismische beeldvormingsbenadering gebruikt machine learning om tomografische snelheids modellen te verbeteren?"
      },
      options: [
        { en: "Neural network-assisted inversion with physics constraints", es: "Inversión asistida por red neuronal con restricciones de física", de: "Neuronale Netz-unterstützte Inversion mit Physik-Beschränkungen", nl: "Neuraal netwerk-ondersteunde inversie met fysica beperkingen" },
        { en: "Simple linear regression", es: "Regresión lineal simple", de: "Einfache lineare Regression", nl: "Eenvoudige lineaire regressie" },
        { en: "Traditional least squares only", es: "Solo mínimos cuadrados tradicionales", de: "Nur traditionelle kleinste Quadrate", nl: "Alleen traditionele kleinste kwadraten" },
        { en: "Manual model adjustments", es: "Ajustes manuales del modelo", de: "Manuelle Modellanpassungen", nl: "Handmatige model aanpassingen" }
      ],
      correct: 0,
      explanation: {
        en: "Neural network-assisted inversion combines machine learning with physical constraints to improve tomographic velocity models. Deep learning networks can learn complex relationships between seismic data and subsurface structure, while physics-based constraints ensure geologically reasonable solutions. This hybrid approach leverages the pattern recognition capabilities of neural networks while maintaining physical consistency in the imaging process.",
        es: "La inversión asistida por red neuronal combina aprendizaje automático con restricciones físicas para mejorar modelos de velocidad tomográfica. Las redes de aprendizaje profundo pueden aprender relaciones complejas entre datos sísmicos y estructura del subsuelo, mientras que restricciones basadas en física aseguran soluciones geológicamente razonables. Este enfoque híbrido aprovecha las capacidades de reconocimiento de patrones de redes neuronales mientras mantiene consistencia física en el proceso de imagen.",
        de: "Neuronale Netz-unterstützte Inversion kombiniert maschinelles Lernen mit physikalischen Beschränkungen zur Verbesserung tomographischer Geschwindigkeitsmodelle. Tiefe Lernnetze können komplexe Beziehungen zwischen seismischen Daten und Untergrundstruktur lernen, während physikbasierte Beschränkungen geologisch vernünftige Lösungen sicherstellen. Dieser Hybridansatz nutzt die Mustererkennung-Fähigkeiten neuronaler Netze bei Beibehaltung physikalischer Konsistenz im Bildgebungsprozess.",
        nl: "Neuraal netwerk-ondersteunde inversie combineert machine learning met fysische beperkingen om tomografische snelheids modellen te verbeteren. Diepe leer netwerken kunnen complexe relaties leren tussen seismische data en ondergrondse structuur, terwijl fysica-gebaseerde beperkingen geologisch redelijke oplossingen verzekeren. Deze hybride benadering benut de patroon herkenning mogelijkheden van neurale netwerken terwijl fysieke consistentie in het beeldvormingsproces behouden blijft."
      }
    },
    {
      question: {
        en: "What controls the depth penetration limits of seismic tomographic imaging?",
        es: "¿Qué controla los límites de penetración en profundidad de imagen tomográfica sísmica?",
        de: "Was kontrolliert die Tiefeneindringungs-Grenzen seismischer tomographischer Bildgebung?",
        nl: "Wat controleert de diepte penetratie grenzen van seismische tomografische beeldvorming?"
      },
      options: [
        { en: "Signal attenuation and turning point depths of seismic phases", es: "Atenuación de señal y profundidades de punto de vuelta de fases sísmicas", de: "Signaldämpfung und Wendepunkttiefen seismischer Phasen", nl: "Signaal demping en keerdiepten van seismische fasen" },
        { en: "Instrument sensitivity only", es: "Solo sensibilidad del instrumento", de: "Nur Instrumentempfindlichkeit", nl: "Alleen instrument gevoeligheid" },
        { en: "Source energy only", es: "Solo energía de fuente", de: "Nur Quellenenergie", nl: "Alleen bron energie" },
        { en: "Recording time length", es: "Duración de tiempo de registro", de: "Aufzeichnungszeitlänge", nl: "Opname tijd lengte" }
      ],
      correct: 0,
      explanation: {
        en: "Depth penetration in seismic tomography is limited by signal attenuation (absorption and scattering) and the turning point depths of available seismic phases. Higher-frequency waves attenuate more rapidly, limiting high-resolution imaging to shallow depths. Different seismic phases (P, S, surface waves) have different maximum turning depths, with deep mantle imaging requiring long-period body waves or normal mode data that can sample the deepest Earth structures.",
        es: "La penetración en profundidad en tomografía sísmica está limitada por atenuación de señal (absorción y dispersión) y las profundidades de punto de vuelta de fases sísmicas disponibles. Ondas de frecuencia más alta se atenúan más rápidamente, limitando imagen de alta resolución a profundidades superficiales. Diferentes fases sísmicas (P, S, ondas superficiales) tienen diferentes profundidades máximas de vuelta, con imagen de manto profundo requiriendo ondas internas de período largo o datos de modo normal que pueden muestrear las estructuras más profundas de la Tierra.",
        de: "Tiefeneindringung in seismischer Tomographie ist begrenzt durch Signaldämpfung (Absorption und Streuung) und Wendepunkttiefen verfügbarer seismischer Phasen. Höherfrequente Wellen dämpfen schneller ab, begrenzen hochauflösende Bildgebung auf geringe Tiefen. Verschiedene seismische Phasen (P, S, Oberflächenwellen) haben verschiedene maximale Wendetiefen, wobei tiefe Mantel-Bildgebung langperiodische Raumwellen oder Normalmode-Daten erfordert, die tiefste Erdstrukturen abtasten können.",
        nl: "Diepte penetratie in seismische tomografie wordt beperkt door signaal demping (absorptie en verstrooiing) en de keerdiepten van beschikbare seismische fasen. Hogere-frequentie golven dempen sneller, wat hoge-resolutie beeldvorming beperkt tot ondiepe diepten. Verschillende seismische fasen (P, S, oppervlaktegolven) hebben verschillende maximum keerdiepten, waarbij diepe mantel beeldvorming lange-periode ruimtegolven of normale mode data vereist die de diepste aardstructuren kunnen bemonsteren."
      }
    }
  ]
};

if (typeof window.addLevel === 'function') {
  window.addLevel('mind-bender/seismology', level5);
}
})();