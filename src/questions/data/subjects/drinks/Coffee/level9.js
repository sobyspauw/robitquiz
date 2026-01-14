// Coffee Quiz - Level 9
(function() {
  const level9 = {
    name: {
          "en": "Coffee",
          "es": "Café",
          "de": "Kaffee",
          "nl": "Koffie"
    },
    questions: [
      {
        question: {
                  "en": "What is the primary mechanism behind coffee extraction modeling using mathematical equations?",
                  "es": "¿Cuál es el mecanismo principal detrás del modelado de extracción de café usando ecuaciones matemáticas?",
                  "de": "Was ist der primäre Mechanismus hinter der Kaffee-Extraktionsmodellierung mit mathematischen Gleichungen?",
                  "nl": "Wat is het primaire mechanisme achter koffie-extractiemodellering met wiskundige vergelijkingen?"
        },
        options: [
        {
                  "en": "Surface tension variations",
                  "es": "Variaciones de tensión superficial",
                  "de": "Oberflächenspannungsvariationen",
                  "nl": "Oppervlaktespanningsvariaties"
        },
        {
                  "en": "Gravitational settling",
                  "es": "Sedimentación gravitacional",
                  "de": "Gravitationsabsetzung",
                  "nl": "Gravitationele bezinking"
        },
        {
                  "en": "Electromagnetic resonance",
                  "es": "Resonancia electromagnética",
                  "de": "Elektromagnetische Resonanz",
                  "nl": "Elektromagnetische resonantie"
        },
        {
                  "en": "Molecular diffusion through porous media",
                  "es": "Difusión molecular a través de medios porosos",
                  "de": "Molekulare Diffusion durch poröse Medien",
                  "nl": "Moleculaire diffusie door poreuze media"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Coffee extraction modeling uses Fick's laws of diffusion to describe how water-soluble compounds move through the porous structure of ground coffee particles, considering mass transfer, particle size distribution, and time-dependent concentration gradients.",
                  "es": "El modelado de extracción de café utiliza las leyes de difusión de Fick para describir cómo los compuestos solubles en agua se mueven a través de la estructura porosa de las partículas de café molido, considerando la transferencia de masa, la distribución del tamaño de partículas y los gradientes de concentración dependientes del tiempo.",
                  "de": "Die Kaffee-Extraktionsmodellierung verwendet Fick'sche Diffusionsgesetze, um zu beschreiben, wie wasserlösliche Verbindungen durch die poröse Struktur gemahlener Kaffeepartikel wandern, unter Berücksichtigung von Stoffübertragung, Partikelgrößenverteilung und zeitabhängigen Konzentrationsgradienten.",
                  "nl": "Koffie-extractiemodellering gebruikt Fick's diffusiewetten om te beschrijven hoe in water oplosbare verbindingen door de poreuze structuur van gemalen koffiepartikels bewegen, rekening houdend met massaoverdracht, deeltjesgrootteverdeling en tijdsafhankelijke concentratiegradiënten."
        }
      },
      {
        question: {
                  "en": "Which advanced spectroscopic technique is most effective for real-time monitoring of coffee roasting volatile organic compounds (VOCs)?",
                  "es": "¿Qué técnica espectroscópica avanzada es más efectiva para el monitoreo en tiempo real de compuestos orgánicos volátiles (COV) durante el tostado del café?",
                  "de": "Welche fortschrittliche spektroskopische Technik ist am effektivsten für die Echtzeit-Überwachung von flüchtigen organischen Verbindungen (VOCs) beim Kaffeerösten?",
                  "nl": "Welke geavanceerde spectroscopische techniek is het meest effectief voor real-time monitoring van vluchtige organische verbindingen (VOC's) tijdens het roosteren van koffie?"
        },
        options: [
        {
                  "en": "UV-Vis Spectroscopy",
                  "es": "Espectroscopía UV-Vis",
                  "de": "UV-Vis-Spektroskopie",
                  "nl": "UV-Vis Spectroscopie"
        },
        {
                  "en": "PTR-MS (Proton Transfer Reaction Mass Spectrometry)",
                  "es": "PTR-MS (Espectrometría de masas de reacción de transferencia de protones)",
                  "de": "PTR-MS (Protonen-Transfer-Reaktions-Massenspektrometrie)",
                  "nl": "PTR-MS (Proton Transfer Reactie Massaspectrometrie)"
        },
        {
                  "en": "NMR (Nuclear Magnetic Resonance)",
                  "es": "RMN (Resonancia magnética nuclear)",
                  "de": "NMR (Kernspinresonanz)",
                  "nl": "NMR (Kernmagnetische resonantie)"
        },
        {
                  "en": "XRD (X-ray Diffraction)",
                  "es": "DRX (Difracción de rayos X)",
                  "de": "XRD (Röntgenbeugung)",
                  "nl": "XRD (Röntgendiffractie)"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "PTR-MS provides real-time, high-sensitivity detection of volatile organic compounds without sample preparation, making it ideal for monitoring the complex volatile profile changes during coffee roasting, including furans, aldehydes, and pyrazines formation.",
                  "es": "PTR-MS proporciona detección en tiempo real y alta sensibilidad de compuestos orgánicos volátiles sin preparación de muestra, haciéndolo ideal para monitorear los cambios complejos del perfil volátil durante el tostado del café, incluyendo la formación de furanos, aldehídos y pirazinas.",
                  "de": "PTR-MS bietet Echtzeit-, hochempfindliche Detektion flüchtiger organischer Verbindungen ohne Probenvorbereitung, was es ideal für die Überwachung komplexer Veränderungen des Flüchtigkeitsprofils beim Kaffeerösten macht, einschließlich der Bildung von Furanen, Aldehyden und Pyrazinen.",
                  "nl": "PTR-MS biedt real-time, hoge gevoeligheidsdetectie van vluchtige organische verbindingen zonder monstervoorbereiding, waardoor het ideaal is voor het monitoren van complexe vluchtige profielveranderingen tijdens het roosteren van koffie, inclusief vorming van furanen, aldehyden en pyrazines."
        }
      },
      {
        question: {
                  "en": "What is the theoretical maximum extraction yield for espresso based on the total dissolved solids (TDS) content of green coffee?",
                  "es": "¿Cuál es el rendimiento máximo teórico de extracción para espresso basado en el contenido de sólidos disueltos totales (TDS) del café verde?",
                  "de": "Was ist die theoretische maximale Extraktionsausbeute für Espresso basierend auf dem Gesamtgehalt gelöster Feststoffe (TDS) von grünem Kaffee?",
                  "nl": "Wat is de theoretische maximale extractieopbrengst voor espresso gebaseerd op het totale opgeloste stoffen (TDS) gehalte van groene koffie?"
        },
        options: [
        {
                  "en": "Approximately 70% of total coffee mass",
                  "es": "Aproximadamente 70% de la masa total del café",
                  "de": "Etwa 70% der gesamten Kaffeemasse",
                  "nl": "Ongeveer 70% van de totale koffiemassa"
        },
        {
                  "en": "Approximately 50% of total coffee mass",
                  "es": "Aproximadamente 50% de la masa total del café",
                  "de": "Etwa 50% der gesamten Kaffeemasse",
                  "nl": "Ongeveer 50% van de totale koffiemassa"
        },
        {
                  "en": "Approximately 30% of total coffee mass",
                  "es": "Aproximadamente 30% de la masa total del café",
                  "de": "Etwa 30% der gesamten Kaffeemasse",
                  "nl": "Ongeveer 30% van de totale koffiemassa"
        },
        {
                  "en": "Approximately 90% of total coffee mass",
                  "es": "Aproximadamente 90% de la masa total del café",
                  "de": "Etwa 90% der gesamten Kaffeemasse",
                  "nl": "Ongeveer 90% van de totale koffiemassa"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The theoretical maximum extraction yield is approximately 30% of the coffee mass, as this represents the total water-soluble compounds in green coffee. Beyond this point, extracting additional compounds would result in over-extraction and bitter, astringent flavors from insoluble cellulose and lignin breakdown.",
                  "es": "El rendimiento máximo teórico de extracción es aproximadamente 30% de la masa del café, ya que esto representa los compuestos totales solubles en agua en el café verde. Más allá de este punto, extraer compuestos adicionales resultaría en sobre-extracción y sabores amargos y astringentes de la descomposición de celulosa y lignina insolubles.",
                  "de": "Die theoretische maximale Extraktionsausbeute beträgt etwa 30% der Kaffeemasse, da dies die gesamten wasserlöslichen Verbindungen im grünen Kaffee darstellt. Darüber hinaus würde das Extrahieren zusätzlicher Verbindungen zu Überextraktion und bitteren, adstringierenden Aromen aus unlöslichem Zellulose- und Ligninabbau führen.",
                  "nl": "De theoretische maximale extractieopbrengst is ongeveer 30% van de koffiemassa, omdat dit de totale in water oplosbare verbindingen in groene koffie vertegenwoordigt. Voorbij dit punt zou het extraheren van extra verbindingen resulteren in over-extractie en bittere, samentrekkende smaken van onoplosbare cellulose- en lignineafbraak."
        }
      },
      {
        question: {
                  "en": "Which genetic marker is most commonly used for coffee authentication and traceability in molecular studies?",
                  "es": "¿Qué marcador genético se utiliza más comúnmente para la autenticación y trazabilidad del café en estudios moleculares?",
                  "de": "Welcher genetische Marker wird am häufigsten für Kaffee-Authentifizierung und Rückverfolgbarkeit in molekularen Studien verwendet?",
                  "nl": "Welke genetische marker wordt het meest gebruikt voor koffie-authenticatie en traceerbaarheid in moleculaire studies?"
        },
        options: [
        {
                  "en": "18S ribosomal RNA gene",
                  "es": "Gen de ARN ribosomal 18S",
                  "de": "18S ribosomales RNA-Gen",
                  "nl": "18S ribosomaal RNA gen"
        },
        {
                  "en": "Internal Transcribed Spacer (ITS) sequences",
                  "es": "Secuencias de espaciador transcrito interno (ITS)",
                  "de": "Internal Transcribed Spacer (ITS) Sequenzen",
                  "nl": "Internal Transcribed Spacer (ITS) sequenties"
        },
        {
                  "en": "Chloroplast trnH-psbA intergenic spacer",
                  "es": "Espaciador intergénico trnH-psbA del cloroplasto",
                  "de": "Chloroplast trnH-psbA intergenischer Spacer",
                  "nl": "Chloroplast trnH-psbA intergenische spacer"
        },
        {
                  "en": "Mitochondrial COX1 gene",
                  "es": "Gen COX1 mitocondrial",
                  "de": "Mitochondriales COX1-Gen",
                  "nl": "Mitochondriaal COX1 gen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The chloroplast trnH-psbA intergenic spacer is widely used for coffee species identification and authentication due to its high variability between species while maintaining conservation within species, making it ideal for distinguishing between Coffea arabica and Coffea canephora varieties.",
                  "es": "El espaciador intergénico trnH-psbA del cloroplasto se utiliza ampliamente para la identificación y autenticación de especies de café debido a su alta variabilidad entre especies mientras mantiene la conservación dentro de las especies, haciéndolo ideal para distinguir entre variedades de Coffea arabica y Coffea canephora.",
                  "de": "Der Chloroplast trnH-psbA intergenische Spacer wird weit verbreitet für Kaffeearten-Identifizierung und Authentifizierung verwendet aufgrund seiner hohen Variabilität zwischen Arten bei gleichzeitiger Erhaltung innerhalb der Arten, was ihn ideal zur Unterscheidung zwischen Coffea arabica und Coffea canephora Varietäten macht.",
                  "nl": "De chloroplast trnH-psbA intergenische spacer wordt veel gebruikt voor koffiesoort identificatie en authenticatie vanwege de hoge variabiliteit tussen soorten terwijl conservering binnen soorten behouden blijft, waardoor het ideaal is voor het onderscheiden tussen Coffea arabica en Coffea canephora variëteiten."
        }
      },
      {
        question: {
                  "en": "What is the primary mechanism of action for coffee's neuroprotective effects according to recent neuroscience research?",
                  "es": "¿Cuál es el mecanismo de acción principal de los efectos neuroprotectores del café según investigaciones recientes en neurociencia?",
                  "de": "Was ist der primäre Wirkungsmechanismus für die neuroprotektiven Effekte von Kaffee laut aktueller Neurowissenschaftsforschung?",
                  "nl": "Wat is het primaire werkingsmechanisme voor de neuroprotectieve effecten van koffie volgens recent neurowetenschappelijk onderzoek?"
        },
        options: [
        {
                  "en": "Direct serotonin synthesis enhancement",
                  "es": "Mejora directa de la síntesis de serotonina",
                  "de": "Direkte Serotonin-Synthese-Verstärkung",
                  "nl": "Directe serotonine synthese verbetering"
        },
        {
                  "en": "GABA receptor activation",
                  "es": "Activación del receptor GABA",
                  "de": "GABA-Rezeptor-Aktivierung",
                  "nl": "GABA receptor activatie"
        },
        {
                  "en": "Adenosine receptor antagonism and BDNF upregulation",
                  "es": "Antagonismo del receptor de adenosina y regulación positiva de BDNF",
                  "de": "Adenosinrezeptor-Antagonismus und BDNF-Hochregulation",
                  "nl": "Adenosine receptor antagonisme en BDNF opregulatie"
        },
        {
                  "en": "Dopamine reuptake inhibition",
                  "es": "Inhibición de la recaptación de dopamina",
                  "de": "Dopamin-Wiederaufnahme-Hemmung",
                  "nl": "Dopamine heropname remming"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Coffee's neuroprotective effects primarily work through adenosine receptor (A1 and A2A) antagonism, preventing neuroinflammation and promoting brain-derived neurotrophic factor (BDNF) expression, which supports neuronal survival, synaptic plasticity, and cognitive function.",
                  "es": "Los efectos neuroprotectores del café funcionan principalmente a través del antagonismo de los receptores de adenosina (A1 y A2A), previniendo la neuroinflamación y promoviendo la expresión del factor neurotrófico derivado del cerebro (BDNF), que apoya la supervivencia neuronal, la plasticidad sináptica y la función cognitiva.",
                  "de": "Die neuroprotektiven Effekte von Kaffee wirken hauptsächlich durch Adenosinrezeptor (A1 und A2A) Antagonismus, verhindern Neuroinflammation und fördern die Expression des brain-derived neurotrophic factor (BDNF), der das neuronale Überleben, synaptische Plastizität und kognitive Funktion unterstützt.",
                  "nl": "De neuroprotectieve effecten van koffie werken voornamelijk via adenosine receptor (A1 en A2A) antagonisme, het voorkomen van neuroinflammatie en het bevorderen van brain-derived neurotrophic factor (BDNF) expressie, wat neuronale overleving, synaptische plasticiteit en cognitieve functie ondersteunt."
        }
      },
      {
        question: {
                  "en": "Which advanced brewing parameter optimization technique uses machine learning algorithms to predict optimal extraction variables?",
                  "es": "¿Qué técnica avanzada de optimización de parámetros de preparación utiliza algoritmos de aprendizaje automático para predecir variables óptimas de extracción?",
                  "de": "Welche fortschrittliche Brühparameter-Optimierungstechnik verwendet maschinelle Lernalgorithmen zur Vorhersage optimaler Extraktionsvariablen?",
                  "nl": "Welke geavanceerde brouwparameter optimalisatietechniek gebruikt machine learning algoritmen om optimale extractievariabelen te voorspellen?"
        },
        options: [
        {
                  "en": "Random sampling",
                  "es": "Muestreo aleatorio",
                  "de": "Zufallsstichprobe",
                  "nl": "Willekeurige steekproef"
        },
        {
                  "en": "Manual trial and error",
                  "es": "Prueba y error manual",
                  "de": "Manuelles Ausprobieren",
                  "nl": "Handmatige trial en error"
        },
        {
                  "en": "Simple linear regression",
                  "es": "Regresión lineal simple",
                  "de": "Einfache lineare Regression",
                  "nl": "Eenvoudige lineaire regressie"
        },
        {
                  "en": "Gaussian Process Regression modeling",
                  "es": "Modelado de regresión de procesos gaussianos",
                  "de": "Gaussian Process Regression Modellierung",
                  "nl": "Gaussian Process Regression modellering"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Gaussian Process Regression is used in advanced coffee brewing optimization to model complex, non-linear relationships between brewing parameters (temperature, time, grind size, water chemistry) and sensory outcomes, providing uncertainty quantification and optimal parameter predictions.",
                  "es": "La regresión de procesos gaussianos se utiliza en la optimización avanzada de preparación de café para modelar relaciones complejas y no lineales entre parámetros de preparación (temperatura, tiempo, tamaño de molienda, química del agua) y resultados sensoriales, proporcionando cuantificación de incertidumbre y predicciones de parámetros óptimos.",
                  "de": "Gaussian Process Regression wird in der fortgeschrittenen Kaffeebrüh-Optimierung verwendet, um komplexe, nicht-lineare Beziehungen zwischen Brühparametern (Temperatur, Zeit, Mahlgrad, Wasserchemie) und sensorischen Ergebnissen zu modellieren, wodurch Unsicherheitsquantifizierung und optimale Parametervorhersagen bereitgestellt werden.",
                  "nl": "Gaussian Process Regression wordt gebruikt in geavanceerde koffiezetting optimalisatie om complexe, niet-lineaire relaties tussen zetparameters (temperatuur, tijd, maalgrootte, waterchemie) en sensorische uitkomsten te modelleren, waarbij onzekerheidsquantificatie en optimale parametervoorspellingen worden geleverd."
        }
      },
      {
        question: {
                  "en": "What is the optimal particle size distribution coefficient (span) for espresso grinding according to computational fluid dynamics studies?",
                  "es": "¿Cuál es el coeficiente óptimo de distribución de tamaño de partícula (span) para el molido de espresso según estudios de dinámica de fluidos computacional?",
                  "de": "Was ist der optimale Partikelgrößenverteilungskoeffizient (Spanne) für Espresso-Mahlung laut Computational Fluid Dynamics Studien?",
                  "nl": "Wat is de optimale deeltjesgrootteverdelings coëfficiënt (span) voor espresso maling volgens computational fluid dynamics studies?"
        },
        options: [
        {
                  "en": "4.0-5.0",
                  "es": "4,0-5,0",
                  "de": "4,0-5,0",
                  "nl": "4,0-5,0"
        },
        {
                  "en": "2.5-3.5",
                  "es": "2,5-3,5",
                  "de": "2,5-3,5",
                  "nl": "2,5-3,5"
        },
        {
                  "en": "0.8-1.2",
                  "es": "0,8-1,2",
                  "de": "0,8-1,2",
                  "nl": "0,8-1,2"
        },
        {
                  "en": "1.5-2.0",
                  "es": "1,5-2,0",
                  "de": "1,5-2,0",
                  "nl": "1,5-2,0"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "CFD studies show that a span of 0.8-1.2 provides optimal flow characteristics for espresso extraction, balancing particle packing density, permeability, and extraction uniformity while minimizing channeling and maximizing surface area contact time.",
                  "es": "Los estudios de CFD muestran que un span de 0,8-1,2 proporciona características de flujo óptimas para la extracción de espresso, equilibrando la densidad de empaquetamiento de partículas, la permeabilidad y la uniformidad de extracción mientras minimiza la canalización y maximiza el tiempo de contacto del área superficial.",
                  "de": "CFD-Studien zeigen, dass eine Spanne von 0,8-1,2 optimale Flusseigenschaften für Espresso-Extraktion bietet, wobei Partikelpackungsdichte, Permeabilität und Extraktionsgleichmäßigkeit ausbalanciert werden, während Kanalbildung minimiert und Oberflächenkontaktzeit maximiert wird.",
                  "nl": "CFD studies tonen aan dat een span van 0,8-1,2 optimale stromingskarakteristieken biedt voor espresso extractie, waarbij deeltjespakkingsdichtheid, permeabiliteit en extractie uniformiteit worden gebalanceerd terwijl channeling wordt geminimaliseerd en oppervlaktecontacttijd wordt gemaximaliseerd."
        }
      },
      {
        question: {
                  "en": "Which metabolomic pathway analysis technique is most effective for studying coffee's impact on human metabolism?",
                  "es": "¿Qué técnica de análisis de vías metabolómicas es más efectiva para estudiar el impacto del café en el metabolismo humano?",
                  "de": "Welche metabolomische Pathway-Analysetechnik ist am effektivsten für die Untersuchung von Kaffees Auswirkungen auf den menschlichen Stoffwechsel?",
                  "nl": "Welke metabolomics pathway analyse techniek is het meest effectief voor het bestuderen van koffie's impact op het menselijke metabolisme?"
        },
        options: [
        {
                  "en": "Visual observation only",
                  "es": "Solo observación visual",
                  "de": "Nur visuelle Beobachtung",
                  "nl": "Alleen visuele observatie"
        },
        {
                  "en": "Basic glucose testing",
                  "es": "Prueba básica de glucosa",
                  "de": "Einfacher Glukosetest",
                  "nl": "Basis glucose test"
        },
        {
                  "en": "Simple pH testing",
                  "es": "Prueba simple de pH",
                  "de": "Einfacher pH-Test",
                  "nl": "Eenvoudige pH test"
        },
        {
                  "en": "UPLC-MS/MS with isotope labeling",
                  "es": "UPLC-MS/MS con marcado isotópico",
                  "de": "UPLC-MS/MS mit Isotopmarkierung",
                  "nl": "UPLC-MS/MS met isotopenlabeling"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "UPLC-MS/MS (Ultra Performance Liquid Chromatography-Tandem Mass Spectrometry) with stable isotope labeling provides the highest sensitivity and specificity for tracking coffee metabolite pathways, allowing quantification of chlorogenic acid metabolites, caffeine metabolism, and their effects on human metabolic networks.",
                  "es": "UPLC-MS/MS (Cromatografía Líquida de Ultra Rendimiento-Espectrometría de Masas en Tándem) con marcado isotópico estable proporciona la mayor sensibilidad y especificidad para rastrear vías de metabolitos del café, permitiendo la cuantificación de metabolitos del ácido clorogénico, metabolismo de la cafeína y sus efectos en redes metabólicas humanas.",
                  "de": "UPLC-MS/MS (Ultra Performance Liquid Chromatography-Tandem Mass Spectrometry) mit stabiler Isotopmarkierung bietet die höchste Sensitivität und Spezifität für die Verfolgung von Kaffee-Metabolitenwegen, ermöglicht Quantifizierung von Chlorogensäure-Metaboliten, Koffein-Stoffwechsel und deren Auswirkungen auf menschliche Stoffwechselnetzwerke.",
                  "nl": "UPLC-MS/MS (Ultra Performance Liquid Chromatography-Tandem Mass Spectrometry) met stabiele isotopenlabeling biedt de hoogste gevoeligheid en specificiteit voor het volgen van koffie metaboliet pathways, waardoor kwantificering van chlorogeenzuur metabolieten, cafeïne metabolisme en hun effecten op menselijke metabolische netwerken mogelijk is."
        }
      },
      {
        question: {
                  "en": "What is the critical water activity (aw) threshold for preventing mycotoxin formation in stored green coffee?",
                  "es": "¿Cuál es el umbral crítico de actividad de agua (aw) para prevenir la formación de micotoxinas en café verde almacenado?",
                  "de": "Was ist der kritische Wasseraktivitäts (aw) Schwellenwert zur Verhinderung von Mykotoxinbildung in gelagertem grünem Kaffee?",
                  "nl": "Wat is de kritische wateractiviteit (aw) drempel voor het voorkomen van mycotoxinevorming in opgeslagen groene koffie?"
        },
        options: [
        {
                  "en": "Below 0.95",
                  "es": "Por debajo de 0,95",
                  "de": "Unter 0,95",
                  "nl": "Onder 0,95"
        },
        {
                  "en": "Below 0.65",
                  "es": "Por debajo de 0,65",
                  "de": "Unter 0,65",
                  "nl": "Onder 0,65"
        },
        {
                  "en": "Below 0.75",
                  "es": "Por debajo de 0,75",
                  "de": "Unter 0,75",
                  "nl": "Onder 0,75"
        },
        {
                  "en": "Below 0.85",
                  "es": "Por debajo de 0,85",
                  "de": "Unter 0,85",
                  "nl": "Onder 0,85"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Water activity below 0.65 is critical for preventing mycotoxin-producing fungi (particularly Aspergillus species) growth in stored green coffee. This threshold prevents ochratoxin A formation, which is a major concern for coffee quality and safety.",
                  "es": "La actividad del agua por debajo de 0,65 es crítica para prevenir el crecimiento de hongos productores de micotoxinas (particularmente especies de Aspergillus) en café verde almacenado. Este umbral previene la formación de ocratoxina A, que es una preocupación importante para la calidad y seguridad del café.",
                  "de": "Wasseraktivität unter 0,65 ist kritisch zur Verhinderung des Wachstums Mykotoxin-produzierender Pilze (besonders Aspergillus-Arten) in gelagertem grünem Kaffee. Diese Schwelle verhindert Ochratoxin A-Bildung, was ein Hauptanliegen für Kaffeequalität und -sicherheit ist.",
                  "nl": "Wateractiviteit onder 0,65 is kritiek voor het voorkomen van mycotoxine-producerende schimmelgroei (vooral Aspergillus soorten) in opgeslagen groene koffie. Deze drempel voorkomt ochratoxine A vorming, wat een belangrijke zorg is voor koffiekwaliteit en veiligheid."
        }
      },
      {
        question: {
                  "en": "Which bioactive compound in coffee is most responsible for the observed reduction in type 2 diabetes risk according to epidemiological studies?",
                  "es": "¿Qué compuesto bioactivo en el café es más responsable de la reducción observada en el riesgo de diabetes tipo 2 según estudios epidemiológicos?",
                  "de": "Welche bioaktive Verbindung im Kaffee ist laut epidemiologischen Studien am meisten verantwortlich für die beobachtete Reduktion des Typ-2-Diabetes-Risikos?",
                  "nl": "Welke bioactieve verbinding in koffie is het meest verantwoordelijk voor de waargenomen vermindering van type 2 diabetes risico volgens epidemiologische studies?"
        },
        options: [
        {
                  "en": "Melanoidins",
                  "es": "Melanoidinas",
                  "de": "Melanoidine",
                  "nl": "Melanoidines"
        },
        {
                  "en": "Caffeine alone",
                  "es": "Solo cafeína",
                  "de": "Nur Koffein",
                  "nl": "Alleen cafeïne"
        },
        {
                  "en": "Trigonelline",
                  "es": "Trigonelina",
                  "de": "Trigonellin",
                  "nl": "Trigonelline"
        },
        {
                  "en": "Chlorogenic acids (3-CQA, 5-CQA)",
                  "es": "Ácidos clorogénicos (3-CQA, 5-CQA)",
                  "de": "Chlorogensäuren (3-CQA, 5-CQA)",
                  "nl": "Chlorogeenzuren (3-CQA, 5-CQA)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Chlorogenic acids, particularly 3-caffeoylquinic acid (3-CQA) and 5-caffeoylquinic acid (5-CQA), are the primary bioactive compounds responsible for coffee's anti-diabetic effects through glucose uptake enhancement, α-glucosidase inhibition, and improved insulin sensitivity.",
                  "es": "Los ácidos clorogénicos, particularmente el ácido 3-cafeoilquínico (3-CQA) y el ácido 5-cafeoilquínico (5-CQA), son los compuestos bioactivos primarios responsables de los efectos anti-diabéticos del café a través del aumento de la captación de glucosa, inhibición de α-glucosidasa y mejora de la sensibilidad a la insulina.",
                  "de": "Chlorogensäuren, besonders 3-Caffeoylchinasäure (3-CQA) und 5-Caffeoylchinasäure (5-CQA), sind die primären bioaktiven Verbindungen, die für Kaffees anti-diabetische Effekte verantwortlich sind durch Glukoseaufnahme-Verstärkung, α-Glucosidase-Hemmung und verbesserte Insulinsensitivität.",
                  "nl": "Chlorogeenzuren, met name 3-caffeoylquinezuur (3-CQA) en 5-caffeoylquinezuur (5-CQA), zijn de primaire bioactieve verbindingen verantwoordelijk voor koffie's anti-diabetische effecten door glucose opname verbetering, α-glucosidase remming en verbeterde insulinegevoeligheid."
        }
      },
      {
        question: {
                  "en": "What is the primary mechanism behind 'staling' in roasted coffee at the molecular level?",
                  "es": "¿Cuál es el mecanismo principal detrás del 'envejecimiento' del café tostado a nivel molecular?",
                  "de": "Was ist der primäre Mechanismus hinter dem 'Altbackenwerden' von geröstetem Kaffee auf molekularer Ebene?",
                  "nl": "Wat is het primaire mechanisme achter 'veroudering' in geroosterde koffie op moleculair niveau?"
        },
        options: [
        {
                  "en": "Carbon dioxide absorption",
                  "es": "Absorción de dióxido de carbono",
                  "de": "Kohlendioxidabsorption",
                  "nl": "Koolstofdioxide absorptie"
        },
        {
                  "en": "Lipid oxidation and Strecker degradation of amino acids",
                  "es": "Oxidación de lípidos y degradación de Strecker de aminoácidos",
                  "de": "Lipidoxidation und Strecker-Abbau von Aminosäuren",
                  "nl": "Lipide oxidatie en Strecker afbraak van aminozuren"
        },
        {
                  "en": "Color darkening only",
                  "es": "Solo oscurecimiento del color",
                  "de": "Nur Farbverdunkelung",
                  "nl": "Alleen kleurverdonkering"
        },
        {
                  "en": "Simple water evaporation",
                  "es": "Simple evaporación de agua",
                  "de": "Einfache Wasserverdunstung",
                  "nl": "Eenvoudige waterverdamping"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Coffee staling occurs primarily through lipid oxidation (oils becoming rancid) and Strecker degradation, where amino acids break down, producing off-flavors. This process is accelerated by oxygen exposure, light, and heat, degrading desirable volatile compounds while creating cardboard-like and stale aromas.",
                  "es": "El envejecimiento del café ocurre principalmente a través de la oxidación de lípidos (aceites que se vuelven rancios) y la degradación de Strecker, donde los aminoácidos se descomponen, produciendo sabores desagradables. Este proceso se acelera por la exposición al oxígeno, la luz y el calor, degradando compuestos volátiles deseables mientras se crean aromas a cartón y rancios.",
                  "de": "Kaffee-Alterung tritt hauptsächlich durch Lipidoxidation (Öle werden ranzig) und Strecker-Abbau auf, wobei Aminosäuren abgebaut werden und Fehlaromen produzieren. Dieser Prozess wird durch Sauerstoffexposition, Licht und Hitze beschleunigt, wobei erwünschte flüchtige Verbindungen abgebaut werden, während pappige und altbackene Aromen entstehen.",
                  "nl": "Koffie veroudering vindt voornamelijk plaats via lipide oxidatie (oliën worden ranzig) en Strecker afbraak, waarbij aminozuren afbreken en off-smaken produceren. Dit proces wordt versneld door blootstelling aan zuurstof, licht en warmte, waarbij wenselijke vluchtige verbindingen worden afgebroken terwijl kartonachtige en oude aroma's ontstaan."
        }
      },
      {
        question: {
                  "en": "Which competition parameter is used in the World Brewers Cup to standardize brew ratio evaluation?",
                  "es": "¿Qué parámetro de competición se utiliza en la Copa Mundial de Baristas de Filtrado para estandarizar la evaluación de la proporción de preparación?",
                  "de": "Welcher Wettbewerbsparameter wird im World Brewers Cup verwendet, um die Bewertung des Brühverhältnisses zu standardisieren?",
                  "nl": "Welke competitieparameter wordt gebruikt in de World Brewers Cup om de brew ratio evaluatie te standaardiseren?"
        },
        options: [
        {
                  "en": "Visual color comparison",
                  "es": "Comparación visual del color",
                  "de": "Visueller Farbvergleich",
                  "nl": "Visuele kleurvergelijking"
        },
        {
                  "en": "Brewing time only",
                  "es": "Solo tiempo de preparación",
                  "de": "Nur Brühzeit",
                  "nl": "Alleen zettijd"
        },
        {
                  "en": "Total Dissolved Solids (TDS) percentage and extraction yield",
                  "es": "Porcentaje de sólidos disueltos totales (TDS) y rendimiento de extracción",
                  "de": "Gesamtgehalt gelöster Feststoffe (TDS) Prozentsatz und Extraktionsausbeute",
                  "nl": "Totaal opgeloste stoffen (TDS) percentage en extractieopbrengst"
        },
        {
                  "en": "Water temperature only",
                  "es": "Solo temperatura del agua",
                  "de": "Nur Wassertemperatur",
                  "nl": "Alleen watertemperatuur"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The World Brewers Cup requires competitors to measure and report both TDS (typically 1.15-1.55% for filter coffee) and extraction yield (typically 18-22%) using refractometers, ensuring objective evaluation of brewing precision and consistency across different brewing methods and coffees.",
                  "es": "La Copa Mundial de Baristas de Filtrado requiere que los competidores midan e informen tanto el TDS (típicamente 1,15-1,55% para café de filtro) como el rendimiento de extracción (típicamente 18-22%) usando refractómetros, asegurando una evaluación objetiva de la precisión y consistencia de la preparación en diferentes métodos de preparación y cafés.",
                  "de": "Der World Brewers Cup verlangt von Teilnehmern, sowohl TDS (typischerweise 1,15-1,55% für Filterkaffee) als auch Extraktionsausbeute (typischerweise 18-22%) mit Refraktometern zu messen und zu berichten, um objektive Bewertung der Brühpräzision und Konsistenz über verschiedene Brühmethoden und Kaffees hinweg sicherzustellen.",
                  "nl": "De World Brewers Cup vereist dat deelnemers zowel TDS (typisch 1,15-1,55% voor filterkoffie) als extractieopbrengst (typisch 18-22%) meten en rapporteren met behulp van refractometers, om objectieve evaluatie van zetprecisie en consistentie over verschillende zetmethoden en koffies te waarborgen."
        }
      },
      {
        question: {
                  "en": "What is the significance of the 'coffee quality triangle' framework in sensory evaluation?",
                  "es": "¿Cuál es la importancia del marco del 'triángulo de calidad del café' en la evaluación sensorial?",
                  "de": "Was ist die Bedeutung des 'Kaffeequalitätsdreieck'-Rahmenwerks in der sensorischen Bewertung?",
                  "nl": "Wat is de betekenis van het 'koffiekwaliteitsdriehoek' raamwerk in sensorische evaluatie?"
        },
        options: [
        {
                  "en": "Balancing acidity, sweetness, and body to achieve optimal flavor complexity",
                  "es": "Equilibrar acidez, dulzura y cuerpo para lograr complejidad de sabor óptima",
                  "de": "Ausbalancieren von Säure, Süße und Körper zur Erreichung optimaler Geschmackskomplexität",
                  "nl": "Balanceren van zuurgraad, zoetheid en body om optimale smaakcomplexiteit te bereiken"
        },
        {
                  "en": "Only evaluating color intensity",
                  "es": "Solo evaluar intensidad del color",
                  "de": "Nur Farbintensität bewerten",
                  "nl": "Alleen kleurintensiteit evalueren"
        },
        {
                  "en": "Testing brewing equipment performance",
                  "es": "Probar el rendimiento del equipo de preparación",
                  "de": "Brühgeräte-Leistung testen",
                  "nl": "Zetapparatuur prestaties testen"
        },
        {
                  "en": "Measuring caffeine content exclusively",
                  "es": "Medir contenido de cafeína exclusivamente",
                  "de": "Ausschließlich Koffeingehalt messen",
                  "nl": "Uitsluitend cafeïnegehalte meten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The coffee quality triangle represents the three fundamental taste components (acidity, sweetness, body) that must be balanced for exceptional coffee. Professional cuppers assess how these elements interact, with imbalance indicating processing or brewing defects, while harmony suggests optimal quality and terroir expression.",
                  "es": "El triángulo de calidad del café representa los tres componentes de sabor fundamentales (acidez, dulzura, cuerpo) que deben estar equilibrados para un café excepcional. Los catadores profesionales evalúan cómo estos elementos interactúan, con el desequilibrio indicando defectos de procesamiento o preparación, mientras que la armonía sugiere calidad óptima y expresión del terruño.",
                  "de": "Das Kaffeequalitätsdreieck repräsentiert die drei fundamentalen Geschmackskomponenten (Säure, Süße, Körper), die für außergewöhnlichen Kaffee ausbalanciert sein müssen. Professionelle Cupper bewerten, wie diese Elemente interagieren, wobei Ungleichgewicht auf Verarbeitungs- oder Brühfehler hinweist, während Harmonie optimale Qualität und Terroir-Ausdruck nahelegt.",
                  "nl": "De koffiekwaliteitsdriehoek vertegenwoordigt de drie fundamentele smaakcomponenten (zuurgraad, zoetheid, body) die gebalanceerd moeten zijn voor uitzonderlijke koffie. Professionele cuppers beoordelen hoe deze elementen interacteren, waarbij onbalans wijst op verwerkings- of zetfouten, terwijl harmonie optimale kwaliteit en terroir expressie suggereert."
        }
      },
      {
        question: {
                  "en": "What advanced roasting phenomenon occurs when the 'rate of rise' (RoR) becomes negative during the development phase?",
                  "es": "¿Qué fenómeno avanzado de tostado ocurre cuando la 'tasa de aumento' (RoR) se vuelve negativa durante la fase de desarrollo?",
                  "de": "Welches fortschrittliche Röstphänomen tritt auf, wenn die 'Rate of Rise' (RoR) während der Entwicklungsphase negativ wird?",
                  "nl": "Welk geavanceerd roosterfenomeen treedt op wanneer de 'rate of rise' (RoR) negatief wordt tijdens de ontwikkelingsfase?"
        },
        options: [
        {
                  "en": "Optimal development achieved",
                  "es": "Desarrollo óptimo logrado",
                  "de": "Optimale Entwicklung erreicht",
                  "nl": "Optimale ontwikkeling bereikt"
        },
        {
                  "en": "Flicking or crashing, indicating heat energy depletion and potential baked/underdeveloped flavors",
                  "es": "Flicking o crashing, indicando agotamiento de energía térmica y potenciales sabores horneados/poco desarrollados",
                  "de": "Flicking oder Crashing, was auf Wärmeenergie-Erschöpfung und potenzielle gebackene/unterentwickelte Aromen hinweist",
                  "nl": "Flicking of crashing, wat wijst op uitputting van warmte-energie en potentiële gebakken/onderontwikkelde smaken"
        },
        {
                  "en": "First crack beginning",
                  "es": "Inicio del primer crack",
                  "de": "Beginn des First Crack",
                  "nl": "Begin van first crack"
        },
        {
                  "en": "Cooling cycle starting",
                  "es": "Inicio del ciclo de enfriamiento",
                  "de": "Beginn des Kühlzyklus",
                  "nl": "Begin van koelcyclus"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "When RoR turns negative (temperature increase rate decreases below zero), it indicates 'flicking' or 'crashing'—the roaster has insufficient thermal energy to properly develop the beans. This results in baked, flat, grassy, or underdeveloped flavors despite reaching target end temperature, as chemical reactions stall.",
                  "es": "Cuando la RoR se vuelve negativa (la tasa de aumento de temperatura disminuye por debajo de cero), indica 'flicking' o 'crashing'—el tostador tiene energía térmica insuficiente para desarrollar adecuadamente los granos. Esto resulta en sabores horneados, planos, herbáceos o poco desarrollados a pesar de alcanzar la temperatura final objetivo, ya que las reacciones químicas se estancan.",
                  "de": "Wenn RoR negativ wird (Temperaturanstiegsrate sinkt unter Null), zeigt dies 'Flicking' oder 'Crashing'—der Röster hat unzureichende thermische Energie, um die Bohnen richtig zu entwickeln. Dies führt zu gebackenen, flachen, grasigen oder unterentwickelten Aromen trotz Erreichen der Ziel-Endtemperatur, da chemische Reaktionen zum Stillstand kommen.",
                  "nl": "Wanneer RoR negatief wordt (temperatuurstijgingssnelheid daalt onder nul), duidt dit op 'flicking' of 'crashing'—de rooster heeft onvoldoende thermische energie om de bonen goed te ontwikkelen. Dit resulteert in gebakken, vlakke, grasachtige of onderontwikkelde smaken ondanks het bereiken van de doel eindtemperatuur, omdat chemische reacties stagneren."
        }
      },
      {
        question: {
                  "en": "What is the 'coffee-water brewing control chart' and its primary purpose?",
                  "es": "¿Qué es el 'gráfico de control de preparación café-agua' y cuál es su propósito principal?",
                  "de": "Was ist das 'Coffee-Water Brewing Control Chart' und was ist sein Hauptzweck?",
                  "nl": "Wat is de 'coffee-water brewing control chart' en wat is het primaire doel?"
        },
        options: [
        {
                  "en": "A graph plotting TDS vs extraction yield to identify ideal, strong, weak, underdeveloped, or bitter brew zones",
                  "es": "Un gráfico que traza TDS vs rendimiento de extracción para identificar zonas de preparación ideal, fuerte, débil, poco desarrollada o amarga",
                  "de": "Ein Graph, der TDS gegen Extraktionsausbeute darstellt, um ideale, starke, schwache, unterentwickelte oder bittere Brühzonen zu identifizieren",
                  "nl": "Een grafiek die TDS tegen extractieopbrengst plot om ideale, sterke, zwakke, onderontwikkelde of bittere zetzones te identificeren"
        },
        {
                  "en": "A coffee bean color chart",
                  "es": "Una carta de color de granos de café",
                  "de": "Eine Kaffeebohnen-Farbkarte",
                  "nl": "Een koffieboon kleurenkaart"
        },
        {
                  "en": "A grinder calibration guide",
                  "es": "Una guía de calibración de molinillo",
                  "de": "Ein Mühlen-Kalibrierungsleitfaden",
                  "nl": "Een maalwerk kalibratiegids"
        },
        {
                  "en": "A temperature measurement tool",
                  "es": "Una herramienta de medición de temperatura",
                  "de": "Ein Temperaturmesswerkzeug",
                  "nl": "Een temperatuurmeetinstrument"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The Brewing Control Chart, developed by the Specialty Coffee Association (SCA), plots TDS (concentration strength) on Y-axis against extraction yield on X-axis. The 'ideal zone' (1.15-1.55% TDS, 18-22% extraction) indicates balanced coffee. Positions outside this zone diagnose specific brewing problems requiring parameter adjustments.",
                  "es": "El Gráfico de Control de Preparación, desarrollado por la Specialty Coffee Association (SCA), traza el TDS (concentración de fuerza) en el eje Y contra el rendimiento de extracción en el eje X. La 'zona ideal' (1,15-1,55% TDS, 18-22% de extracción) indica café equilibrado. Las posiciones fuera de esta zona diagnostican problemas específicos de preparación que requieren ajustes de parámetros.",
                  "de": "Das Brewing Control Chart, entwickelt von der Specialty Coffee Association (SCA), trägt TDS (Konzentrationsstärke) auf der Y-Achse gegen Extraktionsausbeute auf der X-Achse auf. Die 'Idealzone' (1,15-1,55% TDS, 18-22% Extraktion) zeigt ausgewogenen Kaffee an. Positionen außerhalb dieser Zone diagnostizieren spezifische Brühprobleme, die Parameteranpassungen erfordern.",
                  "nl": "De Brewing Control Chart, ontwikkeld door de Specialty Coffee Association (SCA), plot TDS (concentratiesterkte) op Y-as tegen extractieopbrengst op X-as. De 'ideale zone' (1,15-1,55% TDS, 18-22% extractie) geeft gebalanceerde koffie aan. Posities buiten deze zone diagnosticeren specifieke zetproblemen die parameteraanpassingen vereisen."
        }
      },
      {
        question: {
                  "en": "What is 'chromatographic separation' in coffee brewing and why does it matter?",
                  "es": "¿Qué es la 'separación cromatográfica' en la preparación de café y por qué es importante?",
                  "de": "Was ist 'chromatographische Trennung' beim Kaffeebrühen und warum ist sie wichtig?",
                  "nl": "Wat is 'chromatografische scheiding' bij het zetten van koffie en waarom is het belangrijk?"
        },
        options: [
        {
                  "en": "Filtering out caffeine only",
                  "es": "Filtrar solo la cafeína",
                  "de": "Nur Koffein herausfiltern",
                  "nl": "Alleen cafeïne uitfilteren"
        },
        {
                  "en": "Removing water minerals",
                  "es": "Eliminar minerales del agua",
                  "de": "Wassermineralien entfernen",
                  "nl": "Watermineralen verwijderen"
        },
        {
                  "en": "Different compounds extract at different rates creating layered flavors; managing this prevents channeling and ensures uniform extraction",
                  "es": "Diferentes compuestos se extraen a diferentes velocidades creando sabores en capas; gestionar esto previene la canalización y asegura extracción uniforme",
                  "de": "Verschiedene Verbindungen extrahieren mit unterschiedlichen Raten und erzeugen geschichtete Aromen; dies zu managen verhindert Kanalbildung und gewährleistet gleichmäßige Extraktion",
                  "nl": "Verschillende verbindingen extraheren met verschillende snelheden waardoor gelaagde smaken ontstaan; dit beheren voorkomt channeling en zorgt voor uniforme extractie"
        },
        {
                  "en": "Separating coffee grounds by color",
                  "es": "Separar los posos de café por color",
                  "de": "Kaffeesatz nach Farbe trennen",
                  "nl": "Koffiedik scheiden op kleur"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "In brewing, compounds extract sequentially: acids and lighter aromatics first, then sugars, finally bitter compounds. This chromatographic effect means water path through the coffee bed matters critically—channeling allows water to bypass areas, causing simultaneous under-extraction (sour) and over-extraction (bitter) in different zones.",
                  "es": "En la preparación, los compuestos se extraen secuencialmente: ácidos y aromáticos más ligeros primero, luego azúcares, finalmente compuestos amargos. Este efecto cromatográfico significa que el camino del agua a través del lecho de café importa críticamente—la canalización permite que el agua evite áreas, causando simultáneamente bajo-extracción (ácido) y sobre-extracción (amargo) en diferentes zonas.",
                  "de": "Beim Brühen extrahieren Verbindungen sequenziell: Säuren und leichtere Aromastoffe zuerst, dann Zucker, schließlich bittere Verbindungen. Dieser chromatographische Effekt bedeutet, dass der Wasserpfad durch das Kaffeebett kritisch wichtig ist—Kanalbildung ermöglicht Wasser, Bereiche zu umgehen, was gleichzeitig Unterextraktion (sauer) und Überextraktion (bitter) in verschiedenen Zonen verursacht.",
                  "nl": "Bij het zetten extraheren verbindingen sequentieel: zuren en lichtere aromastoffen eerst, dan suikers, uiteindelijk bittere verbindingen. Dit chromatografische effect betekent dat het waterpad door het koffiebed cruciaal belangrijk is—channeling laat water gebieden omzeilen, wat gelijktijdig onder-extractie (zuur) en over-extractie (bitter) in verschillende zones veroorzaakt."
        }
      },
      {
        question: {
                  "en": "What is the 'coffee flavor wheel' revision of 2016 primarily based on?",
                  "es": "¿En qué se basa principalmente la revisión de la 'rueda de sabores del café' de 2016?",
                  "de": "Worauf basiert die Überarbeitung des 'Coffee Flavor Wheel' von 2016 hauptsächlich?",
                  "nl": "Waarop is de herziening van het 'coffee flavor wheel' van 2016 voornamelijk gebaseerd?"
        },
        options: [
        {
                  "en": "Marketing preferences only",
                  "es": "Solo preferencias de marketing",
                  "de": "Nur Marketingpräferenzen",
                  "nl": "Alleen marketingvoorkeuren"
        },
        {
                  "en": "Lexicon-based sensory science with 110 flavor attributes developed through World Coffee Research",
                  "es": "Ciencia sensorial basada en léxico con 110 atributos de sabor desarrollados a través de World Coffee Research",
                  "de": "Lexikon-basierte Sensorikwissenschaft mit 110 Geschmacksattributen, entwickelt durch World Coffee Research",
                  "nl": "Op lexicon gebaseerde sensorische wetenschap met 110 smaakattributen ontwikkeld via World Coffee Research"
        },
        {
                  "en": "Historical coffee trade terminology",
                  "es": "Terminología histórica del comercio del café",
                  "de": "Historische Kaffeehandelsterminologie",
                  "nl": "Historische koffiehandelterminologie"
        },
        {
                  "en": "Random flavor suggestions from consumers",
                  "es": "Sugerencias aleatorias de sabores de consumidores",
                  "de": "Zufällige Geschmacksvorschläge von Verbrauchern",
                  "nl": "Willekeurige smaaksuggesties van consumenten"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The 2016 SCA/WCR Coffee Taster's Flavor Wheel is based on rigorous sensory lexicon research, establishing 110 standardized flavor attributes through controlled scientific studies. This replaced subjective descriptors with objective, reproducible terminology, creating a universal language for professional coffee evaluation worldwide.",
                  "es": "La Rueda de Sabores del Catador de Café SCA/WCR de 2016 se basa en investigación rigurosa de léxico sensorial, estableciendo 110 atributos de sabor estandarizados a través de estudios científicos controlados. Esto reemplazó descriptores subjetivos con terminología objetiva y reproducible, creando un lenguaje universal para la evaluación profesional del café en todo el mundo.",
                  "de": "Das 2016 SCA/WCR Coffee Taster's Flavor Wheel basiert auf rigoroser sensorischer Lexikonforschung, die 110 standardisierte Geschmacksattribute durch kontrollierte wissenschaftliche Studien etabliert. Dies ersetzte subjektive Deskriptoren durch objektive, reproduzierbare Terminologie und schuf eine universelle Sprache für professionelle Kaffeebewertung weltweit.",
                  "nl": "Het 2016 SCA/WCR Coffee Taster's Flavor Wheel is gebaseerd op rigoureus sensorisch lexicon onderzoek, waarbij 110 gestandaardiseerde smaakattributen zijn vastgesteld via gecontroleerde wetenschappelijke studies. Dit verving subjectieve beschrijvingen met objectieve, reproduceerbare terminologie, waardoor een universele taal voor professionele koffie-evaluatie wereldwijd ontstond."
        }
      },
      {
        question: {
                  "en": "What is 'turbo espresso' technique and its theoretical basis?",
                  "es": "¿Qué es la técnica de 'turbo espresso' y cuál es su base teórica?",
                  "de": "Was ist die 'Turbo Espresso'-Technik und was ist ihre theoretische Grundlage?",
                  "nl": "Wat is de 'turbo espresso' techniek en wat is de theoretische basis?"
        },
        options: [
        {
                  "en": "Using coarser grind and higher brew ratio (1:3-1:4) to achieve faster extraction times (10-15s) while maintaining proper extraction yield",
                  "es": "Usar molienda más gruesa y proporción de preparación más alta (1:3-1:4) para lograr tiempos de extracción más rápidos (10-15s) mientras se mantiene el rendimiento de extracción adecuado",
                  "de": "Verwendung gröberer Mahlung und höherer Brühverhältnisse (1:3-1:4) zur Erreichung schnellerer Extraktionszeiten (10-15s) bei Beibehaltung angemessener Extraktionsausbeute",
                  "nl": "Grovere maling en hogere brew ratio (1:3-1:4) gebruiken om snellere extractietijden (10-15s) te bereiken terwijl juiste extractieopbrengst behouden blijft"
        },
        {
                  "en": "Brewing at near-boiling temperatures",
                  "es": "Preparar a temperaturas casi hirviendo",
                  "de": "Bei nahe kochenden Temperaturen brühen",
                  "nl": "Zetten bij bijna kokende temperaturen"
        },
        {
                  "en": "Using pre-ground coffee only",
                  "es": "Usar solo café pre-molido",
                  "de": "Nur vorgemahlenen Kaffee verwenden",
                  "nl": "Alleen voorgemalen koffie gebruiken"
        },
        {
                  "en": "Increasing pump pressure to maximum",
                  "es": "Aumentar la presión de la bomba al máximo",
                  "de": "Pumpendruck auf Maximum erhöhen",
                  "nl": "Pompdruk verhogen tot maximum"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Turbo espresso challenges traditional 25-30s extraction times by using coarser grinds with higher brew ratios (1:3-1:4 instead of 1:2-1:2.5) and extracting in 10-15 seconds. Theory: coarser particles and higher water volume compensate for shorter time, achieving 18-22% extraction yield with different flavor profile—higher clarity, lower body.",
                  "es": "El turbo espresso desafía los tiempos de extracción tradicionales de 25-30s usando moliendas más gruesas con proporciones de preparación más altas (1:3-1:4 en lugar de 1:2-1:2,5) y extrayendo en 10-15 segundos. Teoría: partículas más gruesas y mayor volumen de agua compensan el tiempo más corto, logrando 18-22% de rendimiento de extracción con diferente perfil de sabor—mayor claridad, menor cuerpo.",
                  "de": "Turbo Espresso stellt traditionelle 25-30s Extraktionszeiten in Frage durch Verwendung gröberer Mahlungen mit höheren Brühverhältnissen (1:3-1:4 statt 1:2-1:2,5) und Extraktion in 10-15 Sekunden. Theorie: gröbere Partikel und höheres Wasservolumen kompensieren kürzere Zeit, erreichen 18-22% Extraktionsausbeute mit anderem Geschmacksprofil—höhere Klarheit, geringerer Körper.",
                  "nl": "Turbo espresso daagt traditionele 25-30s extractietijden uit door grovere malingen te gebruiken met hogere brew ratios (1:3-1:4 in plaats van 1:2-1:2,5) en te extraheren in 10-15 seconden. Theorie: grovere deeltjes en hoger watervolume compenseren kortere tijd, bereiken 18-22% extractieopbrengst met ander smaakprofiel—hogere helderheid, lagere body."
        }
      },
      {
        question: {
                  "en": "What is the 'coffee compass' decision-making tool used for in troubleshooting espresso?",
                  "es": "¿Para qué se utiliza la herramienta de toma de decisiones 'brújula del café' en la resolución de problemas de espresso?",
                  "de": "Wofür wird das 'Coffee Compass' Entscheidungswerkzeug bei der Fehlerbehebung von Espresso verwendet?",
                  "nl": "Waarvoor wordt de 'coffee compass' besluitvormingstool gebruikt bij het troubleshooten van espresso?"
        },
        options: [
        {
                  "en": "Finding coffee origins on a map",
                  "es": "Encontrar orígenes de café en un mapa",
                  "de": "Kaffeeherkunft auf einer Karte finden",
                  "nl": "Koffie oorsprongen vinden op een kaart"
        },
        {
                  "en": "Measuring magnetic fields in espresso machines",
                  "es": "Medir campos magnéticos en máquinas de espresso",
                  "de": "Magnetfelder in Espressomaschinen messen",
                  "nl": "Magnetische velden in espressomachines meten"
        },
        {
                  "en": "Determining roast date only",
                  "es": "Determinar solo la fecha de tostado",
                  "de": "Nur Röstdatum bestimmen",
                  "nl": "Alleen roostdatum bepalen"
        },
        {
                  "en": "Diagnosing extraction problems through taste (sour/bitter, strong/weak) and prescribing grind/dose/yield adjustments",
                  "es": "Diagnosticar problemas de extracción a través del sabor (ácido/amargo, fuerte/débil) y prescribir ajustes de molienda/dosis/rendimiento",
                  "de": "Diagnose von Extraktionsproblemen durch Geschmack (sauer/bitter, stark/schwach) und Verschreibung von Mahl-/Dosis-/Ausbeuteanpassungen",
                  "nl": "Diagnose van extractieproblemen via smaak (zuur/bitter, sterk/zwak) en voorschrijven van maal-/dosering-/opbrengstaanpassingen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The Coffee Compass is a diagnostic flowchart: if espresso tastes sour+weak (under-extracted, under-concentrated)→grind finer or increase dose; bitter+strong (over-extracted, over-concentrated)→grind coarser or decrease dose. It provides systematic troubleshooting based on taste perception, eliminating guesswork in espresso dialing.",
                  "es": "La Brújula del Café es un diagrama de flujo de diagnóstico: si el espresso sabe ácido+débil (sub-extraído, sub-concentrado)→moler más fino o aumentar dosis; amargo+fuerte (sobre-extraído, sobre-concentrado)→moler más grueso o disminuir dosis. Proporciona resolución de problemas sistemática basada en percepción del sabor, eliminando conjeturas en el ajuste del espresso.",
                  "de": "Der Coffee Compass ist ein Diagnose-Flussdiagramm: wenn Espresso sauer+schwach schmeckt (unterextrahiert, unterkonzentriert)→feiner mahlen oder Dosis erhöhen; bitter+stark (überextrahiert, überkonzentriert)→gröber mahlen oder Dosis verringern. Es bietet systematische Fehlerbehebung basierend auf Geschmackswahrnehmung, eliminiert Rätselraten beim Espresso-Einstellen.",
                  "nl": "De Coffee Compass is een diagnostisch stroomdiagram: als espresso zuur+zwak smaakt (onder-geëxtraheerd, onder-geconcentreerd)→fijner malen of dosering verhogen; bitter+sterk (over-geëxtraheerd, over-geconcentreerd)→grover malen of dosering verlagen. Het biedt systematische troubleshooting gebaseerd op smaakperceptie, elimineert giswerk bij espresso instelling."
        }
      },
      {
        question: {
                  "en": "What is the theoretical relationship between coffee particle size and extraction kinetics according to surface area models?",
                  "es": "¿Cuál es la relación teórica entre el tamaño de partícula del café y la cinética de extracción según modelos de área superficial?",
                  "de": "Was ist die theoretische Beziehung zwischen Kaffeepartikelgröße und Extraktionskinetik laut Oberflächenmodellen?",
                  "nl": "Wat is de theoretische relatie tussen koffiepartikelgrootte en extractiekinetiek volgens oppervlaktemodellen?"
        },
        options: [
        {
                  "en": "Only color matters for extraction speed",
                  "es": "Solo el color importa para la velocidad de extracción",
                  "de": "Nur Farbe ist wichtig für Extraktionsgeschwindigkeit",
                  "nl": "Alleen kleur is belangrijk voor extractiesnelheid"
        },
        {
                  "en": "Larger particles extract faster always",
                  "es": "Las partículas más grandes siempre se extraen más rápido",
                  "de": "Größere Partikel extrahieren immer schneller",
                  "nl": "Grotere deeltjes extraheren altijd sneller"
        },
        {
                  "en": "Particle size has no effect on extraction",
                  "es": "El tamaño de partícula no tiene efecto en la extracción",
                  "de": "Partikelgröße hat keinen Effekt auf Extraktion",
                  "nl": "Deeltjesgrootte heeft geen effect op extractie"
        },
        {
                  "en": "Extraction rate is proportional to surface area-to-volume ratio; halving particle diameter quadruples surface area and accelerates extraction",
                  "es": "La tasa de extracción es proporcional a la relación área superficial-volumen; reducir a la mitad el diámetro de partícula cuadruplica el área superficial y acelera la extracción",
                  "de": "Extraktionsrate ist proportional zum Oberflächen-Volumen-Verhältnis; Halbierung des Partikeldurchmessers vervierfacht Oberfläche und beschleunigt Extraktion",
                  "nl": "Extractiesnelheid is evenredig met oppervlakte-volume verhouding; halvering van deeltjesdiameter verviervoudigt oppervlakte en versnelt extractie"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Extraction kinetics follow surface area models: smaller particles have dramatically higher surface area per unit mass. When particle diameter halves, surface area quadruples (r² relationship) while volume only halves (r³), creating 8× faster mass transfer. This explains why finer grinds extract faster but risk over-extraction and channeling.",
                  "es": "La cinética de extracción sigue modelos de área superficial: partículas más pequeñas tienen dramáticamente mayor área superficial por unidad de masa. Cuando el diámetro de partícula se reduce a la mitad, el área superficial se cuadruplica (relación r²) mientras el volumen solo se reduce a la mitad (r³), creando transferencia de masa 8× más rápida. Esto explica por qué moliendas más finas extraen más rápido pero arriesgan sobre-extracción y canalización.",
                  "de": "Extraktionskinetik folgt Oberflächenmodellen: kleinere Partikel haben dramatisch höhere Oberfläche pro Masseeinheit. Wenn Partikeldurchmesser halbiert wird, vervierfacht sich Oberfläche (r²-Beziehung) während Volumen nur halbiert (r³), was 8× schnelleren Massentransfer schafft. Dies erklärt, warum feinere Mahlungen schneller extrahieren aber Überextraktion und Kanalbildung riskieren.",
                  "nl": "Extractiekinetiek volgt oppervlaktemodellen: kleinere deeltjes hebben dramatisch hoger oppervlakte per massa-eenheid. Wanneer deeltjesdiameter halveert, verviervoudigt oppervlakte (r²-relatie) terwijl volume slechts halveert (r³), wat 8× snellere massaoverdracht creëert. Dit verklaart waarom fijnere malingen sneller extraheren maar risico lopen op over-extractie en channeling."
        }
      },
      {
        question: {
                  "en": "What is the Maillard reaction's dependency on water activity (aw) during coffee roasting?",
                  "es": "¿Cuál es la dependencia de la reacción de Maillard en la actividad del agua (aw) durante el tostado del café?",
                  "de": "Was ist die Abhängigkeit der Maillard-Reaktion von der Wasseraktivität (aw) beim Kaffeerösten?",
                  "nl": "Wat is de afhankelijkheid van de Maillard reactie van wateractiviteit (aw) tijdens het roosteren van koffie?"
        },
        options: [
        {
                  "en": "Optimal at aw 0.6-0.8; too low or too high inhibits reaction rate",
                  "es": "Óptimo en aw 0,6-0,8; demasiado bajo o alto inhibe la tasa de reacción",
                  "de": "Optimal bei aw 0,6-0,8; zu niedrig oder zu hoch hemmt Reaktionsrate",
                  "nl": "Optimaal bij aw 0,6-0,8; te laag of te hoog remt reactiesnelheid"
        },
        {
                  "en": "Linear relationship—more water always better",
                  "es": "Relación lineal—más agua siempre es mejor",
                  "de": "Lineare Beziehung—mehr Wasser immer besser",
                  "nl": "Lineaire relatie—meer water altijd beter"
        },
        {
                  "en": "Water has no effect on Maillard reactions",
                  "es": "El agua no tiene efecto en las reacciones de Maillard",
                  "de": "Wasser hat keinen Effekt auf Maillard-Reaktionen",
                  "nl": "Water heeft geen effect op Maillard reacties"
        },
        {
                  "en": "Only temperature matters, not water",
                  "es": "Solo importa la temperatura, no el agua",
                  "de": "Nur Temperatur ist wichtig, nicht Wasser",
                  "nl": "Alleen temperatuur is belangrijk, niet water"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Maillard reaction rate shows a parabolic relationship with water activity. At aw 0.6-0.8, reactant mobility is optimal for amino acid-reducing sugar interactions. Below 0.6, reactants are too immobile; above 0.8, dilution reduces collision frequency. This is why roasting profiles carefully manage moisture loss timing.",
                  "es": "La tasa de reacción de Maillard muestra una relación parabólica con la actividad del agua. En aw 0,6-0,8, la movilidad de reactantes es óptima para interacciones aminoácido-azúcar reductor. Por debajo de 0,6, los reactantes son demasiado inmóviles; por encima de 0,8, la dilución reduce la frecuencia de colisión. Por eso los perfiles de tostado gestionan cuidadosamente el tiempo de pérdida de humedad.",
                  "de": "Maillard-Reaktionsrate zeigt parabolische Beziehung mit Wasseraktivität. Bei aw 0,6-0,8 ist Reaktantenbewegli chkeit optimal für Aminosäure-Reduktionszucker-Interaktionen. Unter 0,6 sind Reaktanten zu unbeweglich; über 0,8 reduziert Verdünnung Kollisionsfrequenz. Deshalb managen Röstprofile sorgfältig Feuchtigkeitsverlust-Timing.",
                  "nl": "Maillard reactiesnelheid toont een parabolische relatie met wateractiviteit. Bij aw 0,6-0,8 is reactant mobiliteit optimaal voor aminozuur-reducerende suiker interacties. Onder 0,6 zijn reactanten te immobiel; boven 0,8 vermindert verdunning botsingsfrequentie. Daarom beheren roosterprofielen zorgvuldig vochtverlies timing."
        }
      },
      {
        question: {
                  "en": "Which advanced grinding technology uses acoustic monitoring to achieve consistent particle size distribution?",
                  "es": "¿Qué tecnología avanzada de molienda utiliza monitoreo acústico para lograr distribución consistente del tamaño de partícula?",
                  "de": "Welche fortschrittliche Mahltechnologie verwendet akustische Überwachung zur Erreichung konsistenter Partikelgrößenverteilung?",
                  "nl": "Welke geavanceerde maaltechnologie gebruikt akoestische monitoring om consistente deeltjesgrootteverdeling te bereiken?"
        },
        options: [
        {
                  "en": "Ultrasonic burr alignment sensors with real-time feedback control",
                  "es": "Sensores ultrasónicos de alineación de muelas con control de retroalimentación en tiempo real",
                  "de": "Ultraschall-Mahlscheiben-Ausrichtungssensoren mit Echtzeit-Feedback-Steuerung",
                  "nl": "Ultrasone maalschijf uitlijn sensoren met real-time feedback controle"
        },
        {
                  "en": "Manual hand grinders only",
                  "es": "Solo molinillos manuales",
                  "de": "Nur manuelle Handmühlen",
                  "nl": "Alleen handmatige handmalers"
        },
        {
                  "en": "Visual color matching systems",
                  "es": "Sistemas de coincidencia de color visual",
                  "de": "Visuelle Farbabgleichsysteme",
                  "nl": "Visuele kleur matching systemen"
        },
        {
                  "en": "Standard blade grinders",
                  "es": "Molinillos de cuchilla estándar",
                  "de": "Standard-Klingenmühlen",
                  "nl": "Standaard mesmalers"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Advanced commercial grinders use ultrasonic sensors to monitor burr alignment and gap distance in real-time, adjusting motor torque and speed to maintain consistent particle size distribution despite heat expansion, wear, and bean density variations. This achieves unprecedented grinding precision for competition-level espresso.",
                  "es": "Los molinillos comerciales avanzados utilizan sensores ultrasónicos para monitorear la alineación de las muelas y la distancia de separación en tiempo real, ajustando el torque del motor y la velocidad para mantener una distribución consistente del tamaño de partícula a pesar de la expansión térmica, el desgaste y las variaciones de densidad del grano. Esto logra una precisión de molienda sin precedentes para espresso de nivel de competición.",
                  "de": "Fortschrittliche kommerzielle Mühlen verwenden Ultraschallsensoren zur Echtzeit-Überwachung von Mahlscheibenausrichtung und Spaltabstand, passen Motordrehmoment und Geschwindigkeit an, um konsistente Partikelgrößenverteilung trotz Wärmeausdehnung, Verschleiß und Bohnendichtevariationen zu erhalten. Dies erreicht beispiellose Mahlpräzision für Wettbewerbs-Espresso.",
                  "nl": "Geavanceerde commerciële malers gebruiken ultrasone sensoren om maalschijf uitlijning en spleetafstand real-time te monitoren, passen motorkoppel en snelheid aan om consistente deeltjesgrootteverdeling te behouden ondanks warmte-uitzetting, slijtage en boondi chtheidsvariaties. Dit bereikt ongekende maal precisie voor competitie-niveau espresso."
        }
      },
      {
        question: {
                  "en": "What is 'shot temperature profiling' (thermodynamic manipulation) in advanced espresso brewing?",
                  "es": "¿Qué es el 'perfilado de temperatura del shot' (manipulación termodinámica) en la preparación avanzada de espresso?",
                  "de": "Was ist 'Shot-Temperaturprofilierung' (thermodynamische Manipulation) beim fortgeschrittenen Espresso-Brühen?",
                  "nl": "Wat is 'shot temperatuur profilering' (thermodynamische manipulatie) bij geavanceerd espresso zetten?"
        },
        options: [
        {
                  "en": "Keeping temperature perfectly constant",
                  "es": "Mantener la temperatura perfectamente constante",
                  "de": "Temperatur perfekt konstant halten",
                  "nl": "Temperatuur perfect constant houden"
        },
        {
                  "en": "Measuring cup temperature after pouring",
                  "es": "Medir la temperatura de la taza después de verter",
                  "de": "Tassentemperatur nach dem Eingießen messen",
                  "nl": "Kopje temperatuur meten na gieten"
        },
        {
                  "en": "Dynamically varying brew temperature during extraction to selectively extract different compound classes",
                  "es": "Variar dinámicamente la temperatura de preparación durante la extracción para extraer selectivamente diferentes clases de compuestos",
                  "de": "Dynamisches Variieren der Brühtemperatur während der Extraktion zur selektiven Extraktion verschiedener Verbindungsklassen",
                  "nl": "Dynamisch variëren van zettemperatuur tijdens extractie om selectief verschillende verbindingsklassen te extraheren"
        },
        {
                  "en": "Using only room temperature water",
                  "es": "Usar solo agua a temperatura ambiente",
                  "de": "Nur Raumtemperaturwasser verwenden",
                  "nl": "Alleen kamertemperatuur water gebruiken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Shot temperature profiling uses programmable espresso machines to vary water temperature during extraction: starting lower (88-90°C) for acid clarity, ramping to higher (93-95°C) for sugar extraction, sometimes finishing cooler to avoid bitter compound over-extraction. This exploits different compounds' temperature-dependent solubility for flavor optimization.",
                  "es": "El perfilado de temperatura del shot utiliza máquinas de espresso programables para variar la temperatura del agua durante la extracción: comenzando más baja (88-90°C) para claridad de ácidos, aumentando a más alta (93-95°C) para extracción de azúcar, a veces terminando más fresco para evitar la sobre-extracción de compuestos amargos. Esto aprovecha la solubilidad dependiente de la temperatura de diferentes compuestos para optimización del sabor.",
                  "de": "Shot-Temperaturprofilierung verwendet programmierbare Espresso maschinen zur Variation der Wassertemperatur während der Extraktion: Start niedriger (88-90°C) für Säureklarheit, Anstieg auf höher (93-95°C) für Zuckerextraktion, manchmal kühlerer Abschluss zur Vermeidung bitterer Verbindungs-Überextraktion. Dies nutzt temperaturabhängige Löslichkeit verschiedener Verbindungen zur Geschmacksoptimierung.",
                  "nl": "Shot temperatuur profilering gebruikt programmeerbare espressomachines om watertemperatuur te variëren tijdens extractie: beginnend lager (88-90°C) voor zuur helderheid, oplopend naar hoger (93-95°C) voor suiker extractie, soms koeler afsluitend om bittere verbinding over-extractie te vermijden. Dit benut temperatuurafhankelijke oplosbaarheid van verschillende verbindingen voor smaakoptimalisatie."
        }
      },
      {
        question: {
                  "en": "What is the 'solubility curve' concept in coffee extraction theory?",
                  "es": "¿Qué es el concepto de 'curva de solubilidad' en la teoría de extracción de café?",
                  "de": "Was ist das 'Löslichkeitskurven'-Konzept in der Kaffee-Extraktionstheorie?",
                  "nl": "Wat is het 'oplosbaarheids curve' concept in koffie extractie theorie?"
        },
        options: [
        {
                  "en": "Only caffeine dissolves during brewing",
                  "es": "Solo la cafeína se disuelve durante la preparación",
                  "de": "Nur Koffein löst sich beim Brühen",
                  "nl": "Alleen cafeïne lost op tijdens zetten"
        },
        {
                  "en": "All compounds dissolve simultaneously at equal rates",
                  "es": "Todos los compuestos se disuelven simultáneamente a tasas iguales",
                  "de": "Alle Verbindungen lösen sich gleichzeitig mit gleichen Raten",
                  "nl": "Alle verbindingen lossen gelijktijdig op met gelijke snelheden"
        },
        {
                  "en": "Different compounds dissolve at different rates: acids first (fast), sugars middle (medium), bitter compounds last (slow)",
                  "es": "Diferentes compuestos se disuelven a diferentes velocidades: ácidos primero (rápido), azúcares medio (medio), compuestos amargos último (lento)",
                  "de": "Verschiedene Verbindungen lösen sich mit unterschiedlichen Raten: Säuren zuerst (schnell), Zucker mittel (mittel), bittere Verbindungen zuletzt (langsam)",
                  "nl": "Verschillende verbindingen lossen op met verschillende snelheden: zuren eerst (snel), suikers midden (gemiddeld), bittere verbindingen laatst (langzaam)"
        },
        {
                  "en": "Color determines solubility exclusively",
                  "es": "El color determina exclusivamente la solubilidad",
                  "de": "Farbe bestimmt ausschließlich Löslichkeit",
                  "nl": "Kleur bepaalt uitsluitend oplosbaarheid"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The solubility curve describes sequential extraction: organic acids and light volatiles extract first (high solubility, creating brightness), sugars extract in middle phase (creating sweetness and body), bitter compounds (quinic acid, tannins) extract last (low solubility, slow diffusion). Understanding this allows brewers to stop extraction at optimal sweetness before excessive bitterness.",
                  "es": "La curva de solubilidad describe la extracción secuencial: ácidos orgánicos y volátiles ligeros se extraen primero (alta solubilidad, creando brillo), azúcares se extraen en fase media (creando dulzura y cuerpo), compuestos amargos (ácido quínico, taninos) se extraen al último (baja solubilidad, difusión lenta). Comprender esto permite a los baristas detener la extracción en dulzura óptima antes de amargor excesivo.",
                  "de": "Die Löslichkeitskurve beschreibt sequenzielle Extraktion: organische Säuren und leichte Flüchtige extrahieren zuerst (hohe Löslichkeit, erzeugen Helligkeit), Zucker extrahieren in Mittelphase (erzeugen Süße und Körper), bittere Verbindungen (Chinasäure, Tannine) extrahieren zuletzt (niedrige Löslichkeit, langsame Diffusion). Dies zu verstehen ermöglicht Brühern, Extraktion bei optimaler Süße vor übermäßiger Bitterkeit zu stoppen.",
                  "nl": "De oplosbaarheids curve beschrijft sequentiële extractie: organische zuren en lichte vluchtige stoffen extraheren eerst (hoge oplosbaarheid, creëren helderheid), suikers extraheren in middenfase (creëren zoetheid en body), bittere verbindingen (kinazuur, tannines) extraheren laatst (lage oplosbaarheid, langzame diffusie). Dit begrijpen stelt zetters in staat extractie te stoppen bij optimale zoetheid voor excessieve bitterheid."
        }
      },
      {
        question: {
                  "en": "Which isotopic ratio analysis technique is used for verifying geographic origin of specialty coffee?",
                  "es": "¿Qué técnica de análisis de relación isotópica se utiliza para verificar el origen geográfico del café especial?",
                  "de": "Welche Isotopenverhältnis-Analysetechnik wird zur Verifizierung der geografischen Herkunft von Spezialitätenkaffee verwendet?",
                  "nl": "Welke isotopenverhoudingsanalyse techniek wordt gebruikt voor het verifiëren van geografische oorsprong van specialty koffie?"
        },
        options: [
        {
                  "en": "IRMS (Isotope Ratio Mass Spectrometry) measuring δ13C, δ18O, and δ2H",
                  "es": "IRMS (Espectrometría de masas de relación isotópica) midiendo δ13C, δ18O y δ2H",
                  "de": "IRMS (Isotopenverhältnis-Massenspektrometrie) zur Messung von δ13C, δ18O und δ2H",
                  "nl": "IRMS (Isotope Ratio Mass Spectrometry) metend δ13C, δ18O en δ2H"
        },
        {
                  "en": "Visual color analysis only",
                  "es": "Solo análisis visual de color",
                  "de": "Nur visuelle Farbanalyse",
                  "nl": "Alleen visuele kleuranalyse"
        },
        {
                  "en": "Taste testing exclusively",
                  "es": "Exclusivamente prueba de sabor",
                  "de": "Ausschließlich Geschmackstest",
                  "nl": "Uitsluitend smaaktest"
        },
        {
                  "en": "Simple pH testing",
                  "es": "Prueba simple de pH",
                  "de": "Einfacher pH-Test",
                  "nl": "Eenvoudige pH test"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "IRMS analyzes stable isotope ratios (carbon-13/12, oxygen-18/16, deuterium/hydrogen) which vary by geographic location due to differences in altitude, rainfall, temperature, and soil composition. These isotopic 'fingerprints' can authenticate single-origin coffee claims and detect fraud in specialty coffee markets.",
                  "es": "IRMS analiza relaciones de isótopos estables (carbono-13/12, oxígeno-18/16, deuterio/hidrógeno) que varían según la ubicación geográfica debido a diferencias en altitud, precipitación, temperatura y composición del suelo. Estas 'huellas digitales' isotópicas pueden autenticar afirmaciones de café de origen único y detectar fraude en mercados de café especial.",
                  "de": "IRMS analysiert stabile Isotopenverhältnisse (Kohlenstoff-13/12, Sauerstoff-18/16, Deuterium/Wasserstoff), die je nach geografischer Lage aufgrund von Unterschieden in Höhe, Niederschlag, Temperatur und Bodenzusammensetzung variieren. Diese isotopischen 'Fingerabdrücke' können Single-Origin-Kaffee-Ansprüche authentifizieren und Betrug in Spezialitätenkaffeemärkten erkennen.",
                  "nl": "IRMS analyseert stabiele isotopen verhoudingen (koolstof-13/12, zuurstof-18/16, deuterium/waterstof) die variëren per geografische locatie door verschillen in hoogte, regenval, temperatuur en bodemsamenstelling. Deze isotopische 'vingerafdrukken' kunnen single-origin koffie claims authenticeren en fraude detecteren in specialty koffiemarkt en."
        }
      },
      {
        question: {
                  "en": "What is 'bloom' phase optimization in pour-over coffee brewing from a fluid dynamics perspective?",
                  "es": "¿Qué es la optimización de la fase de 'bloom' en la preparación de café por vertido desde una perspectiva de dinámica de fluidos?",
                  "de": "Was ist 'Bloom'-Phasen-Optimierung beim Pour-Over-Kaffeebrühen aus Sicht der Fluiddynamik?",
                  "nl": "Wat is 'bloom' fase optimalisatie bij pour-over koffie zetten vanuit een vloeistofdynamica perspectief?"
        },
        options: [
        {
                  "en": "Adding flower petals to coffee grounds",
                  "es": "Agregar pétalos de flores a los posos de café",
                  "de": "Blütenblätter zum Kaffeesatz hinzufügen",
                  "nl": "Bloemblaadjes toevoegen aan koffiedik"
        },
        {
                  "en": "Temperature measurement exclusively",
                  "es": "Exclusivamente medición de temperatura",
                  "de": "Ausschließlich Temperaturmessung",
                  "nl": "Uitsluitend temperatuurmeting"
        },
        {
                  "en": "Managing CO2 degassing to prevent channeling and achieve uniform wetting by controlling pre-infusion water volume and time",
                  "es": "Gestionar la desgasificación de CO2 para prevenir la canalización y lograr humectación uniforme controlando el volumen de agua de pre-infusión y el tiempo",
                  "de": "CO2-Entgasung managen zur Verhinderung von Kanalbildung und Erreichung gleichmäßiger Benetzung durch Kontrolle von Vorinfusions-Wasservolumen und Zeit",
                  "nl": "CO2 ontgassing beheren om channeling te voorkomen en uniforme bevochtiging te bereiken door pre-infusie watervolume en tijd te controleren"
        },
        {
                  "en": "Decorating the coffee surface only",
                  "es": "Solo decorar la superficie del café",
                  "de": "Nur Kaffeeoberfläche dekorieren",
                  "nl": "Alleen koffie oppervlak decoreren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Fresh roasted coffee contains significant CO2 trapped in cellular structures. The bloom phase (30-45s pre-infusion with 2-3× coffee mass water) allows controlled degassing—preventing explosive CO2 release that creates channels and dry pockets. Optimal bloom achieves uniform bed saturation before main pour, ensuring even extraction.",
                  "es": "El café recién tostado contiene CO2 significativo atrapado en estructuras celulares. La fase de bloom (30-45s de pre-infusión con agua 2-3× la masa del café) permite desgasificación controlada—previniendo liberación explosiva de CO2 que crea canales y bolsas secas. El bloom óptimo logra saturación uniforme del lecho antes del vertido principal, asegurando extracción uniforme.",
                  "de": "Frisch gerösteter Kaffee enthält signifikantes CO2, das in Zellstrukturen eingeschlossen ist. Die Bloom-Phase (30-45s Vorinfusion mit 2-3× Kaffeemasse Wasser) ermöglicht kontrollierte Entgasung—verhindert explosive CO2-Freisetzung, die Kanäle und trockene Taschen erzeugt. Optimaler Bloom erreicht gleichmäßige Bettsättigung vor Hauptguss, gewährleistet gleichmäßige Extraktion.",
                  "nl": "Vers geroosterde koffie bevat significant CO2 gevangen in cellulaire structuren. De bloom fase (30-45s pre-infusie met 2-3× koffie massa water) staat gecontroleerde ontgassing toe—voorkomt explosieve CO2 vrijgave die kanalen en droge zakken creëert. Optimale bloom bereikt uniforme bed saturatie voor hoofd giet, verzekert gelijkmatige extractie."
        }
      },
      {
        question: {
                  "en": "What is 'pre-infusion pressure profiling' in modern espresso technology?",
                  "es": "¿Qué es el 'perfilado de presión de pre-infusión' en la tecnología moderna de espresso?",
                  "de": "Was ist 'Vorinfusions-Druckprofilierung' in moderner Espresso-Technologie?",
                  "nl": "Wat is 'pre-infusie druk profilering' in moderne espresso technologie?"
        },
        options: [
        {
                  "en": "Brewing without any pressure at all",
                  "es": "Preparar sin ninguna presión en absoluto",
                  "de": "Ohne jeglichen Druck brühen",
                  "nl": "Zetten zonder enige druk"
        },
        {
                  "en": "Using maximum pressure from start to finish",
                  "es": "Usar presión máxima de principio a fin",
                  "de": "Maximalen Druck von Anfang bis Ende verwenden",
                  "nl": "Maximale druk gebruiken van begin tot eind"
        },
        {
                  "en": "Measuring atmospheric pressure only",
                  "es": "Solo medir la presión atmosférica",
                  "de": "Nur atmosphärischen Druck messen",
                  "nl": "Alleen atmosferische druk meten"
        },
        {
                  "en": "Applying low pressure (2-4 bar) initially to wet puck evenly before ramping to full 9 bar extraction pressure",
                  "es": "Aplicar presión baja (2-4 bar) inicialmente para humedecer el disco uniformemente antes de aumentar a presión de extracción completa de 9 bar",
                  "de": "Niedrigen Druck (2-4 bar) anfänglich anwenden zur gleichmäßigen Puck-Benetzung vor Anstieg auf vollen 9 bar Extraktionsdruck",
                  "nl": "Lage druk (2-4 bar) aanvankelijk toepassen om puck gelijkmatig te bevochtigen voor oploop naar volledige 9 bar extractie druk"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Pre-infusion at reduced pressure (2-4 bar for 5-10 seconds) allows gradual, even wetting of the coffee puck before full pressure extraction. This prevents channeling from sudden high-pressure water forcing through dry spots, achieves uniform particle hydration, and reduces extraction defects—particularly important for light roasts and fine grinds.",
                  "es": "La pre-infusión a presión reducida (2-4 bar durante 5-10 segundos) permite humectación gradual y uniforme del disco de café antes de la extracción a presión completa. Esto previene la canalización del agua a alta presión repentina forzando a través de puntos secos, logra hidratación uniforme de partículas y reduce defectos de extracción—particularmente importante para tuestes claros y moliendas finas.",
                  "de": "Vorinfusion bei reduziertem Druck (2-4 bar für 5-10 Sekunden) ermöglicht schrittweise, gleichmäßige Benetzung des Kaffeepucks vor Volldruckextraktion. Dies verhindert Kanalbildung durch plötzliches Hochdruckwasser, das durch trockene Stellen dringt, erreicht gleichmäßige Partikelhydratation und reduziert Extraktionsfehler—besonders wichtig für helle Röstungen und feine Mahlungen.",
                  "nl": "Pre-infusie bij verlaagde druk (2-4 bar voor 5-10 seconden) staat geleidelijke, gelijkmatige bevochtiging van de koffie puck toe voor volledige druk extractie. Dit voorkomt channeling van plotselinge hoge-druk water dat door droge plekken dringt, bereikt uniforme deeltjes hydratatie en vermindert extractie defecten—vooral belangrijk voor lichte roasts en fijne malingen."
        }
      },
      {
        question: {
                  "en": "What is the 'strength-extraction matrix' diagnostic tool?",
                  "es": "¿Qué es la herramienta de diagnóstico 'matriz de fuerza-extracción'?",
                  "de": "Was ist das 'Stärke-Extraktions-Matrix' Diagnosewerkzeug?",
                  "nl": "Wat is de 'sterkte-extractie matrix' diagnostische tool?"
        },
        options: [
        {
                  "en": "A 2D grid plotting beverage strength (TDS) vs extraction yield to diagnose brewing problems in specific quadrants",
                  "es": "Una cuadrícula 2D que traza la fuerza de la bebida (TDS) vs el rendimiento de extracción para diagnosticar problemas de preparación en cuadrantes específicos",
                  "de": "Ein 2D-Raster, das Getränkestärke (TDS) gegen Extraktionsausbeute darstellt, um Brühprobleme in spezifischen Quadranten zu diagnostizieren",
                  "nl": "Een 2D raster dat drank sterkte (TDS) plot tegen extractieopbrengst om zetproblemen in specifieke kwadranten te diagnosticeren"
        },
        {
                  "en": "A temperature-time chart exclusively",
                  "es": "Exclusivamente un gráfico de temperatura-tiempo",
                  "de": "Ausschließlich ein Temperatur-Zeit-Diagramm",
                  "nl": "Uitsluitend een temperatuur-tijd grafiek"
        },
        {
                  "en": "A color matching guide only",
                  "es": "Solo una guía de coincidencia de color",
                  "de": "Nur ein Farbabgleichsleitfaden",
                  "nl": "Alleen een kleur matching gids"
        },
        {
                  "en": "A simple on/off switch for coffee makers",
                  "es": "Un simple interruptor de encendido/apagado para cafeteras",
                  "de": "Ein einfacher Ein-/Aus-Schalter für Kaffeemaschinen",
                  "nl": "Een eenvoudige aan/uit schakelaar voor koffiezetapparaten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Also called the 'Coffee Brewing Control Chart,' this diagnostic tool plots strength (TDS percentage) on Y-axis against extraction yield (percentage) on X-axis. The matrix identifies four problematic quadrants: under-extracted/weak, under-extracted/strong, over-extracted/weak, over-extracted/strong—each requiring specific brew parameter adjustments.",
                  "es": "También llamado 'Gráfico de Control de Preparación de Café', esta herramienta de diagnóstico traza la fuerza (porcentaje de TDS) en el eje Y contra el rendimiento de extracción (porcentaje) en el eje X. La matriz identifica cuatro cuadrantes problemáticos: sub-extraído/débil, sub-extraído/fuerte, sobre-extraído/débil, sobre-extraído/fuerte—cada uno requiriendo ajustes específicos de parámetros de preparación.",
                  "de": "Auch 'Coffee Brewing Control Chart' genannt, stellt dieses Diagnosewerkzeug Stärke (TDS-Prozentsatz) auf Y-Achse gegen Extraktionsausbeute (Prozentsatz) auf X-Achse dar. Die Matrix identifiziert vier problematische Quadranten: unterextrahiert/schwach, unterextrahiert/stark, überextrahiert/schwach, überextrahiert/stark—jeder erfordert spezifische Brühparameteranpassungen.",
                  "nl": "Ook wel de 'Coffee Brewing Control Chart' genoemd, plot dit diagnostische instrument sterkte (TDS percentage) op Y-as tegen extractieopbrengst (percentage) op X-as. De matrix identificeert vier problematische kwadranten: onder-geëxtraheerd/zwak, onder-geëxtraheerd/sterk, over-geëxtraheerd/zwak, over-geëxtraheerd/sterk—elk vereist specifieke zetparameter aanpassingen."
        }
      },
      {
        question: {
                  "en": "What is the mechanism of 'coffee bloom' turbulence and its impact on manual brewing uniformity?",
                  "es": "¿Cuál es el mecanismo de turbulencia del 'bloom del café' y su impacto en la uniformidad de la preparación manual?",
                  "de": "Was ist der Mechanismus der 'Coffee Bloom' Turbulenz und ihre Auswirkung auf die manuelle Brüh-Gleichmäßigkeit?",
                  "nl": "Wat is het mechanisme van 'coffee bloom' turbulentie en de impact op handmatige zet uniformiteit?"
        },
        options: [
        {
                  "en": "Flowers physically blooming in the coffee cup",
                  "es": "Flores físicamente floreciendo en la taza de café",
                  "de": "Blumen physisch blühend in der Kaffeetasse",
                  "nl": "Bloemen fysiek bloeiend in de koffiekop"
        },
        {
                  "en": "Temperature equilibration exclusively",
                  "es": "Exclusivamente equilibración de temperatura",
                  "de": "Ausschließlich Temperaturausgleich",
                  "nl": "Uitsluitend temperatuur evenwicht"
        },
        {
                  "en": "CO2 bubble formation creates convective currents that can either enhance mixing (beneficial) or cause uneven bed disruption (detrimental)",
                  "es": "La formación de burbujas de CO2 crea corrientes convectivas que pueden mejorar la mezcla (beneficioso) o causar interrupción desigual del lecho (perjudicial)",
                  "de": "CO2-Blasenbildung erzeugt konvektive Strömungen, die entweder Mischung verbessern (vorteilhaft) oder ungleichmäßige Bettstörung verursachen (nachteilig)",
                  "nl": "CO2 bel vorming creëert convectieve stromingen die ofwel menging verbeteren (voordelig) of ongelijke bed verstoring veroorzaken (nadelig)"
        },
        {
                  "en": "Color change only with no fluid dynamics",
                  "es": "Solo cambio de color sin dinámica de fluidos",
                  "de": "Nur Farbwechsel ohne Fluiddynamik",
                  "nl": "Alleen kleurverandering zonder vloeistofdynamica"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "During bloom, trapped CO2 escapes creating vigorous bubbling. If well-managed, rising bubbles create beneficial convective mixing promoting uniform extraction. If excessive (very fresh coffee + aggressive pour), turbulence can disrupt the coffee bed structure, creating voids and channels leading to uneven extraction. Optimal bloom balances degassing and bed integrity.",
                  "es": "Durante el bloom, el CO2 atrapado escapa creando burbujeo vigoroso. Si se gestiona bien, las burbujas ascendentes crean mezcla convectiva beneficiosa promoviendo extracción uniforme. Si es excesivo (café muy fresco + vertido agresivo), la turbulencia puede interrumpir la estructura del lecho de café, creando vacíos y canales que conducen a extracción desigual. El bloom óptimo equilibra desgasificación e integridad del lecho.",
                  "de": "Während des Bloom entweicht eingeschlossenes CO2 und erzeugt kräftiges Sprudeln. Bei guter Verwaltung erzeugen aufsteigende Blasen vorteilhafte konvektive Mischung, die gleichmäßige Extraktion fördert. Bei übermäßigem (sehr frischer Kaffee + aggressiver Guss) kann Turbulenz die Kaffebettstruktur stören, Hohlräume und Kanäle erzeugen, die zu ungleichmäßiger Extraktion führen. Optimaler Bloom balanciert Entgasung und Bettintegrität.",
                  "nl": "Tijdens bloom ontsnapt gevangen CO2 waardoor krachtig borrelen ontstaat. Bij goede beheersing creëren stijgende bellen voordelige convectieve menging die uniforme extractie bevordert. Bij excessief (zeer verse koffie + agressieve giet) kan turbulentie de koffiebedstructuur verstoren, waardoor leegte en kanalen ontstaan die leiden tot ongelijke extractie. Optimale bloom balanceert ontgassing en bed integriteit."
        }
      },
      {
        question: {
                  "en": "What is 'carbonic maceration' processing and its chemical impact on coffee flavor?",
                  "es": "¿Qué es el procesamiento de 'maceración carbónica' y su impacto químico en el sabor del café?",
                  "de": "Was ist 'Kohlensäuremaischung' Verarbeitung und ihre chemische Auswirkung auf den Kaffeegeschmack?",
                  "nl": "Wat is 'koolzuurmaceratie' verwerking en de chemische impact op koffiesmaak?"
        },
        options: [
        {
                  "en": "Sun drying exclusively",
                  "es": "Exclusivamente secado al sol",
                  "de": "Ausschließlich Sonnentrocknung",
                  "nl": "Uitsluitend zondrogen"
        },
        {
                  "en": "Adding carbon powder to green beans",
                  "es": "Agregar polvo de carbono a los granos verdes",
                  "de": "Kohlenstoffpulver zu grünen Bohnen hinzufügen",
                  "nl": "Koolstofpoeder toevoegen aan groene bonen"
        },
        {
                  "en": "Simple washing with carbonated water",
                  "es": "Simple lavado con agua carbonatada",
                  "de": "Einfaches Waschen mit kohlensäurehaltigem Wasser",
                  "nl": "Eenvoudig wassen met koolzuurhoudend water"
        },
        {
                  "en": "Anaerobic fermentation in CO2-saturated environment causing intracellular enzymatic changes and unique ester/alcohol formation",
                  "es": "Fermentación anaeróbica en ambiente saturado de CO2 causando cambios enzimáticos intracelulares y formación única de ésteres/alcoholes",
                  "de": "Anaerobe Fermentation in CO2-gesättigter Umgebung, die intrazelluläre enzymatische Veränderungen und einzigartige Ester-/Alkoholbildung verursacht",
                  "nl": "Anaerobe fermentatie in CO2-verzadigde omgeving die intracellulaire enzymatische veranderingen en unieke ester/alcohol vorming veroorzaakt"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Borrowed from winemaking, carbonic maceration ferments whole coffee cherries in sealed, CO2-filled tanks. Without oxygen, intracellular enzymes break down sugars and pectins creating distinctive fruity esters, complex alcohols, and unique flavor compounds. This creates intensely fruit-forward profiles impossible with traditional aerobic fermentation.",
                  "es": "Tomado de la vinificación, la maceración carbónica fermenta cerezas de café enteras en tanques sellados llenos de CO2. Sin oxígeno, las enzimas intracelulares descomponen azúcares y pectinas creando ésteres afrutados distintivos, alcoholes complejos y compuestos de sabor únicos. Esto crea perfiles intensamente orientados a frutas imposibles con fermentación aeróbica tradicional.",
                  "de": "Aus der Weinherstellung übernommen, fermentiert Kohlensäuremaischung ganze Kaffeekirschen in versiegelten, CO2-gefüllten Tanks. Ohne Sauerstoff bauen intrazelluläre Enzyme Zucker und Pektine ab und erzeugen charakteristische fruchtige Ester, komplexe Alkohole und einzigartige Geschmacksverbindungen. Dies erzeugt intensiv fruchtbetonte Profile, die mit traditioneller aerober Fermentation unmöglich sind.",
                  "nl": "Geleend van wijnmaken, fermenteert koolzuurmaceratie hele koffiebessen in verzegelde, CO2-gevulde tanks. Zonder zuurstof breken intracellulaire enzymen suikers en pectines af waardoor onderscheidende fruitige esters, complexe alcoholen en unieke smaakverbindingen ontstaan. Dit creëert intens fruitgerichte profielen die onmogelijk zijn met traditionele aerobe fermentatie."
        }
      },
      {
        question: {
                  "en": "What is 'hydrodynamic channeling' in espresso puck and how does it relate to permeability distribution?",
                  "es": "¿Qué es la 'canalización hidrodinámica' en el disco de espresso y cómo se relaciona con la distribución de permeabilidad?",
                  "de": "Was ist 'hydrodynamisches Channeling' im Espresso-Puck und wie bezieht es sich auf Permeabilitätsverteilung?",
                  "nl": "Wat is 'hydrodynamische channeling' in espresso puck en hoe verhoudt het zich tot permeabiliteit distributie?"
        },
        options: [
        {
                  "en": "Temperature-only phenomenon",
                  "es": "Fenómeno solo de temperatura",
                  "de": "Nur Temperatur-Phänomen",
                  "nl": "Alleen temperatuur fenomeen"
        },
        {
                  "en": "Water flowing perfectly uniformly always",
                  "es": "Agua fluyendo siempre perfectamente uniforme",
                  "de": "Wasser fließt immer perfekt gleichmäßig",
                  "nl": "Water stroomt altijd perfect uniform"
        },
        {
                  "en": "Preferential water flow through high-permeability zones due to pressure gradient following path of least resistance",
                  "es": "Flujo preferencial de agua a través de zonas de alta permeabilidad debido a gradiente de presión siguiendo el camino de menor resistencia",
                  "de": "Bevorzugter Wasserfluss durch Hochpermeabilitätszonen aufgrund von Druckgradient, der Weg des geringsten Widerstands folgt",
                  "nl": "Preferentiële waterstroom door hoge-permeabiliteit zones door drukgradiënt die pad van minste weerstand volgt"
        },
        {
                  "en": "Coffee changing TV channels automatically",
                  "es": "Café cambiando canales de TV automáticamente",
                  "de": "Kaffee wechselt TV-Kanäle automatisch",
                  "nl": "Koffie verandert TV kanalen automatisch"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "In espresso extraction, any variations in puck density create permeability differences. Water under 9 bar pressure follows the path of least resistance, flowing preferentially through looser, more permeable regions—'channels.' These zones become over-extracted (bitter) while denser areas remain under-extracted (sour), simultaneously. Uniform puck preparation prevents this.",
                  "es": "En la extracción de espresso, cualquier variación en la densidad del disco crea diferencias de permeabilidad. El agua bajo 9 bar de presión sigue el camino de menor resistencia, fluyendo preferentemente a través de regiones más sueltas y permeables—'canales'. Estas zonas se sobre-extraen (amargas) mientras áreas más densas permanecen sub-extraídas (ácidas), simultáneamente. La preparación uniforme del disco previene esto.",
                  "de": "Bei Espresso-Extraktion erzeugen Variationen in Puck-Dichte Permeabilitätsunterschiede. Wasser unter 9 bar Druck folgt dem Weg des geringsten Widerstands, fließt bevorzugt durch lockerere, permeablere Regionen—'Kanäle'. Diese Zonen werden überextrahiert (bitter), während dichtere Bereiche unterextrahiert (sauer) bleiben, gleichzeitig. Gleichmäßige Puck-Vorbereitung verhindert dies.",
                  "nl": "Bij espresso extractie creëren variaties in puck dichtheid permeabiliteit verschillen. Water onder 9 bar druk volgt het pad van minste weerstand, stroomt bij voorkeur door lossere, meer permeabele gebieden—'kanalen'. Deze zones worden over-geëxtraheerd (bitter) terwijl dichtere gebieden onder-geëxtraheerd (zuur) blijven, gelijktijdig. Uniforme puck voorbereiding voorkomt dit."
        }
      },
      {
        question: {
                  "en": "What is 'water hardness buffering capacity' and its relevance to espresso extraction?",
                  "es": "¿Qué es la 'capacidad de tamponamiento de la dureza del agua' y su relevancia para la extracción de espresso?",
                  "de": "Was ist 'Wasserhärte-Pufferkapazität' und ihre Relevanz für Espresso-Extraktion?",
                  "nl": "Wat is 'waterhardheid buffer capaciteit' en de relevantie voor espresso extractie?"
        },
        options: [
        {
                  "en": "Alkalinity (bicarbonate) concentration determines pH stability during extraction, affecting acid perception and flavor balance",
                  "es": "La concentración de alcalinidad (bicarbonato) determina la estabilidad del pH durante la extracción, afectando la percepción de ácidos y el balance de sabor",
                  "de": "Alkalinität (Bicarbonat)-Konzentration bestimmt pH-Stabilität während Extraktion, beeinflusst Säurewahrnehmung und Geschmacksbalance",
                  "nl": "Alkaliniteit (bicarbonaat) concentratie bepaalt pH stabiliteit tijdens extractie, beïnvloedt zuur perceptie en smaakbalans"
        },
        {
                  "en": "Buffer as in computer data storage",
                  "es": "Buffer como en almacenamiento de datos de computadora",
                  "de": "Buffer wie bei Computer-Datenspeicherung",
                  "nl": "Buffer zoals in computer data opslag"
        },
        {
                  "en": "Mechanical filtration exclusively",
                  "es": "Exclusivamente filtración mecánica",
                  "de": "Ausschließlich mechanische Filtration",
                  "nl": "Uitsluitend mechanische filtratie"
        },
        {
                  "en": "Water simply getting hard or soft only",
                  "es": "Agua simplemente volviéndose dura o blanda solo",
                  "de": "Wasser wird nur hart oder weich",
                  "nl": "Water wordt alleen hard of zacht"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Water's buffering capacity (alkalinity, primarily bicarbonates) resists pH changes during extraction. High alkalinity (>80ppm) neutralizes coffee's organic acids, reducing perceived acidity and creating flat taste. Low alkalinity (<40ppm) allows acids to dominate, creating overly bright, sharp profiles. SCA recommends 40-70ppm alkalinity for balanced extraction.",
                  "es": "La capacidad de tamponamiento del agua (alcalinidad, principalmente bicarbonatos) resiste cambios de pH durante la extracción. Alta alcalinidad (>80ppm) neutraliza los ácidos orgánicos del café, reduciendo la acidez percibida y creando sabor plano. Baja alcalinidad (<40ppm) permite que los ácidos dominen, creando perfiles excesivamente brillantes y agudos. La SCA recomienda 40-70ppm de alcalinidad para extracción equilibrada.",
                  "de": "Wassers Pufferkapazität (Alkalinität, hauptsächlich Bikarbonate) widersetzt sich pH-Änderungen während Extraktion. Hohe Alkalinität (>80ppm) neutralisiert organische Säuren des Kaffees, reduziert wahrgenommene Säure und erzeugt flachen Geschmack. Niedrige Alkalinität (<40ppm) lässt Säuren dominieren, erzeugt übermäßig helle, scharfe Profile. SCA empfiehlt 40-70ppm Alkalinität für ausgewogene Extraktion.",
                  "nl": "Waters buffer capaciteit (alkaliniteit, voornamelijk bicarbonaten) weerstaat pH veranderingen tijdens extractie. Hoge alkaliniteit (>80ppm) neutraliseert koffie's organische zuren, vermindert waargenomen zuurgraad en creëert vlakke smaak. Lage alkaliniteit (<40ppm) laat zuren domineren, creëert overdreven heldere, scherpe profielen. SCA beveelt 40-70ppm alkaliniteit aan voor gebalanceerde extractie."
        }
      },
      {
        question: {
                  "en": "What is 'tamp pressure consistency' from a materials science perspective?",
                  "es": "¿Qué es la 'consistencia de presión de apisonado' desde una perspectiva de ciencia de materiales?",
                  "de": "Was ist 'Tamperdruck-Konsistenz' aus Sicht der Materialwissenschaft?",
                  "nl": "Wat is 'tamper druk consistentie' vanuit een materiaalwetenschap perspectief?"
        },
        options: [
        {
                  "en": "Achieving reproducible puck density (bulk density ~0.45-0.55 g/mL) to ensure consistent porosity and permeability",
                  "es": "Lograr densidad reproducible del disco (densidad aparente ~0,45-0,55 g/mL) para asegurar porosidad y permeabilidad consistentes",
                  "de": "Erreichung reproduzierbarer Puck-Dichte (Schüttdichte ~0,45-0,55 g/mL) zur Gewährleistung konsistenter Porosität und Permeabilität",
                  "nl": "Bereiken van reproduceerbare puck dichtheid (bulk dichtheid ~0,45-0,55 g/mL) om consistente porositeit en permeabiliteit te verzekeren"
        },
        {
                  "en": "Temperature of the tamper exclusively",
                  "es": "Exclusivamente la temperatura del apisonador",
                  "de": "Ausschließlich Tamper-Temperatur",
                  "nl": "Uitsluitend tamper temperatuur"
        },
        {
                  "en": "Tapping the portafilter sides only",
                  "es": "Solo golpear los lados del portafiltro",
                  "de": "Nur Portafilter-Seiten klopfen",
                  "nl": "Alleen portafilter zijkanten tikken"
        },
        {
                  "en": "Using maximum force always regardless of result",
                  "es": "Usar siempre fuerza máxima sin importar el resultado",
                  "de": "Immer maximale Kraft verwenden unabhängig vom Ergebnis",
                  "nl": "Altijd maximale kracht gebruiken ongeacht resultaat"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Tamp pressure's goal isn't specific force (common myth: '30 pounds'), but reproducible puck density. Once coffee is compressed beyond ~10kg, additional force yields minimal density change—it's about reaching the 'compaction threshold' consistently. Proper density creates uniform porosity for even water distribution, preventing channeling.",
                  "es": "El objetivo de la presión de apisonado no es fuerza específica (mito común: '30 libras'), sino densidad reproducible del disco. Una vez que el café se comprime más allá de ~10kg, fuerza adicional produce cambio mínimo de densidad—se trata de alcanzar el 'umbral de compactación' consistentemente. La densidad adecuada crea porosidad uniforme para distribución uniforme del agua, previniendo canalización.",
                  "de": "Tamperdrucks Ziel ist nicht spezifische Kraft (häufiger Mythos: '30 Pfund'), sondern reproduzierbare Puck-Dichte. Sobald Kaffee über ~10kg komprimiert ist, ergibt zusätzliche Kraft minimale Dichteänderung—es geht darum, 'Kompaktionsschwelle' konsistent zu erreichen. Richtige Dichte erzeugt gleichmäßige Porosität für gleichmäßige Wasserverteilung, verhindert Kanalbildung.",
                  "nl": "Tamper druk doel is niet specifieke kracht (veelvoorkomende mythe: '30 pond'), maar reproduceerbare puck dichtheid. Zodra koffie voorbij ~10kg gecomprimeerd is, levert extra kracht minimale dichtheid verandering—het gaat om consistent bereiken van 'compactie drempel'. Juiste dichtheid creëert uniforme porositeit voor gelijkmatige water distributie, voorkomt channeling."
        }
      },
      {
        question: {
                  "en": "What is 'differential pressure decay' analysis in diagnosing espresso machine performance?",
                  "es": "¿Qué es el análisis de 'decaimiento de presión diferencial' en el diagnóstico del rendimiento de la máquina de espresso?",
                  "de": "Was ist 'Differenzdruckabfall'-Analyse bei der Diagnose der Espressomaschinen-Leistung?",
                  "nl": "Wat is 'differentiële druk verval' analyse bij het diagnosticeren van espressomachine prestaties?"
        },
        options: [
        {
                  "en": "Checking exterior paint condition",
                  "es": "Verificar la condición de la pintura exterior",
                  "de": "Äußeren Lackzustand prüfen",
                  "nl": "Controleren van buitenverf conditie"
        },
        {
                  "en": "Measuring water temperature only",
                  "es": "Solo medir la temperatura del agua",
                  "de": "Nur Wassertemperatur messen",
                  "nl": "Alleen watertemperatuur meten"
        },
        {
                  "en": "Simply turning machine on and off",
                  "es": "Simplemente encender y apagar la máquina",
                  "de": "Einfach Maschine ein- und ausschalten",
                  "nl": "Simpelweg machine aan en uit zetten"
        },
        {
                  "en": "Measuring pressure loss rate after pump shutdown to detect group head seal leaks, valve failures, and flow restrictor problems",
                  "es": "Medir la tasa de pérdida de presión después del apagado de la bomba para detectar fugas de sellos del grupo, fallas de válvulas y problemas de restrictor de flujo",
                  "de": "Messung der Druckabfallrate nach Pumpenabschaltung zur Erkennung von Gruppenkopf-Dichtungslecks, Ventilfehlern und Durchflussbegrenzer-Problemen",
                  "nl": "Meten van drukverval snelheid na pomp uitschakeling om groepshoofd afdichting lekken, ventiel storingen en flow restrictor problemen te detecteren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "This diagnostic involves pressurizing the group head, shutting off the pump, and monitoring how quickly pressure drops. Healthy systems hold pressure (slow decay); rapid pressure loss indicates seal degradation, valve problems, or internal leaks. Quantitative decay rate analysis precisely identifies failing components before complete failure.",
                  "es": "Este diagnóstico implica presurizar el grupo, apagar la bomba y monitorear qué tan rápido cae la presión. Sistemas saludables mantienen presión (decaimiento lento); pérdida rápida de presión indica degradación de sellos, problemas de válvulas o fugas internas. El análisis cuantitativo de tasa de decaimiento identifica precisamente componentes fallando antes de falla completa.",
                  "de": "Diese Diagnose beinhaltet Druckbeaufschlagung des Gruppenkopfs, Abschalten der Pumpe und Überwachung, wie schnell Druck abfällt. Gesunde Systeme halten Druck (langsamer Abfall); schneller Druckverlust zeigt Dichtungsverschleiß, Ventilprobleme oder interne Lecks an. Quantitative Abfallratenanalyse identifiziert präzise ausfallende Komponenten vor vollständigem Ausfall.",
                  "nl": "Deze diagnose omvat het onder druk zetten van de groepshoofd, uitschakelen van de pomp en monitoren hoe snel druk daalt. Gezonde systemen houden druk (langzaam verval); snelle drukverlies duidt op afdichting degradatie, ventiel problemen of interne lekken. Kwantitatieve verval snelheid analyse identificeert precies falende componenten voor complete storing."
        }
      },
      {
        question: {
                  "en": "What is 'grind retention' and its impact on dose consistency in high-volume espresso service?",
                  "es": "¿Qué es la 'retención de molienda' y su impacto en la consistencia de dosis en servicio de espresso de alto volumen?",
                  "de": "Was ist 'Mahlgut-Retention' und ihre Auswirkung auf Dosis-Konsistenz im Hochvolumen-Espresso-Service?",
                  "nl": "Wat is 'maal retentie' en de impact op dosering consistentie bij hoge-volume espresso service?"
        },
        options: [
        {
                  "en": "Coffee beans retained in hopper only",
                  "es": "Solo granos de café retenidos en la tolva",
                  "de": "Nur Kaffeebohnen im Trichter zurückgehalten",
                  "nl": "Alleen koffiebonen achtergebleven in trechter"
        },
        {
                  "en": "Coffee grounds retained in grinder (0.2-2g) causing dose variation and stale coffee mixing with fresh grounds",
                  "es": "Posos de café retenidos en el molinillo (0,2-2g) causando variación de dosis y mezcla de café rancio con posos frescos",
                  "de": "Kaffeemehl in Mühle zurückgehalten (0,2-2g), verursacht Dosisschwankung und Mischung von altem Kaffee mit frischem Mahlgut",
                  "nl": "Koffiedik achtergebleven in maler (0,2-2g) veroorzaakt dosering variatie en menging van oude koffie met verse maling"
        },
        {
                  "en": "Grinder's memory of previous settings",
                  "es": "Memoria del molinillo de ajustes previos",
                  "de": "Mühlen-Speicher vorheriger Einstellungen",
                  "nl": "Maler geheugen van vorige instellingen"
        },
        {
                  "en": "Filter basket residue exclusively",
                  "es": "Exclusivamente residuo del cesto de filtro",
                  "de": "Ausschließlich Filterkorbrückstand",
                  "nl": "Uitsluitend filtermand residu"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Grinder retention refers to coffee grounds trapped in grinder internal chambers, chutes, and burrs. This 'exchange' (old grounds exit when new beans push through) causes (1) dose inconsistency as retention varies, and (2) flavor contamination as stale grounds mix with fresh. Low-retention grinders (<0.5g) improve consistency critical for dialing espresso.",
                  "es": "La retención de molienda se refiere a posos de café atrapados en cámaras internas del molinillo, conductos y muelas. Este 'intercambio' (posos viejos salen cuando granos nuevos empujan) causa (1) inconsistencia de dosis ya que la retención varía, y (2) contaminación de sabor ya que posos rancios se mezclan con frescos. Molinillos de baja retención (<0,5g) mejoran la consistencia crítica para ajustar espresso.",
                  "de": "Mahlgut-Retention bezieht sich auf Kaffeemehl, das in Mühlen-Innenkammern, Schächten und Mahlscheiben gefangen ist. Dieser 'Austausch' (altes Mahlgut tritt aus, wenn neue Bohnen durchschieben) verursacht (1) Dosis-Inkonsistenz, da Retention variiert, und (2) Geschmackskontamination, da altes Mahlgut sich mit frischem mischt. Niedrig-Retentions-Mühlen (<0,5g) verbessern Konsistenz kritisch für Espresso-Einstellung.",
                  "nl": "Maal retentie verwijst naar koffiedik gevangen in maler interne kamers, goten en maalschijven. Deze 'uitwisseling' (oud dik komt eruit als nieuwe bonen doorduwen) veroorzaakt (1) dosering inconsistentie omdat retentie varieert, en (2) smaak contaminatie omdat oud dik mengt met vers. Lage-retentie malers (<0,5g) verbeteren consistentie cruciaal voor espresso instelling."
        }
      },
      {
        question: {
                  "en": "What is the 'Osmo-dehydration' hypothesis in coffee cherry processing innovation?",
                  "es": "¿Qué es la hipótesis de 'osmo-deshidratación' en la innovación del procesamiento de cerezas de café?",
                  "de": "Was ist die 'Osmo-Dehydration'-Hypothese in der Innovation der Kaffeekirschenverarbeitung?",
                  "nl": "Wat is de 'Osmo-dehydratie' hypothese in koffiebessen verwerkings innovatie?"
        },
        options: [
        {
                  "en": "Standard sun drying only",
                  "es": "Solo secado al sol estándar",
                  "de": "Nur Standard-Sonnentrocknung",
                  "nl": "Alleen standaard zondrogen"
        },
        {
                  "en": "Mechanical pressing exclusively",
                  "es": "Exclusivamente prensado mecánico",
                  "de": "Ausschließlich mechanisches Pressen",
                  "nl": "Uitsluitend mechanisch persen"
        },
        {
                  "en": "Using osmotic pressure gradients with concentrated sugar/salt solutions to accelerate controlled drying while modifying fermentation",
                  "es": "Usar gradientes de presión osmótica con soluciones concentradas de azúcar/sal para acelerar el secado controlado mientras se modifica la fermentación",
                  "de": "Verwendung osmotischer Druckgradienten mit konzentrierten Zucker-/Salzlösungen zur Beschleunigung kontrollierten Trocknens bei gleichzeitiger Fermentationsmodifikation",
                  "nl": "Gebruik van osmotische druk gradiënten met geconcentreerde suiker/zout oplossingen om gecontroleerde droging te versnellen terwijl fermentatie wordt gewijzigd"
        },
        {
                  "en": "Simply removing water with towels",
                  "es": "Simplemente remover agua con toallas",
                  "de": "Einfach Wasser mit Handtüchern entfernen",
                  "nl": "Simpelweg water verwijderen met handdoeken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Experimental processors immerse coffee cherries in hypertonic solutions (concentrated sugars or salts). Osmotic pressure draws water out of cherries faster than evaporation alone, reducing drying time while simultaneously infusing flavors. The controlled anaerobic environment also modifies fermentation chemistry, creating novel flavor profiles—though controversial in specialty coffee.",
                  "es": "Procesadores experimentales sumergen cerezas de café en soluciones hipertónicas (azúcares o sales concentradas). La presión osmótica extrae agua de las cerezas más rápido que solo la evaporación, reduciendo el tiempo de secado mientras infunde sabores simultáneamente. El ambiente anaeróbico controlado también modifica la química de fermentación, creando perfiles de sabor novedosos—aunque controvertido en café especial.",
                  "de": "Experimentelle Verarbeiter tauchen Kaffeekirschen in hypertone Lösungen (konzentrierte Zucker oder Salze). Osmotischer Druck zieht Wasser schneller aus Kirschen als Verdunstung allein, reduziert Trocknungszeit während gleichzeitig Aromen infundiert werden. Die kontrollierte anaerobe Umgebung modifiziert auch Fermentationschemie, erzeugt neuartige Geschmacksprofile—obwohl umstritten in Spezialitätenkaffee.",
                  "nl": "Experimentele verwerkers dompelen koffiebessen onder in hypertone oplossingen (geconcentreerde suikers of zouten). Osmotische druk trekt water sneller uit bessen dan verdamping alleen, vermindert droogtijd terwijl gelijktijdig smaken worden geïnfuseerd. De gecontroleerde anaerobe omgeving wijzigt ook fermentatie chemie, creëert nieuwe smaakprofielen—hoewel controversieel in specialty koffie."
        }
      },
      {
        question: {
                  "en": "What is 'specific surface area' (SSA) measurement in coffee grinding and why does it matter?",
                  "es": "¿Qué es la medición de 'área superficial específica' (SSA) en la molienda de café y por qué es importante?",
                  "de": "Was ist 'spezifische Oberfläche' (SSA) Messung beim Kaffeemahlen und warum ist sie wichtig?",
                  "nl": "Wat is 'specifiek oppervlak' (SSA) meting bij koffie malen en waarom is het belangrijk?"
        },
        options: [
        {
                  "en": "Total particle surface area per gram of coffee (m²/g); higher SSA accelerates extraction kinetics proportionally",
                  "es": "Área superficial total de partículas por gramo de café (m²/g); mayor SSA acelera la cinética de extracción proporcionalmente",
                  "de": "Gesamte Partikeloberfläche pro Gramm Kaffee (m²/g); höhere SSA beschleunigt Extraktionskinetik proportional",
                  "nl": "Totaal deeltjes oppervlak per gram koffie (m²/g); hogere SSA versnelt extractie kinetiek proportioneel"
        },
        {
                  "en": "Just the color of ground coffee",
                  "es": "Solo el color del café molido",
                  "de": "Nur die Farbe von gemahlenem Kaffee",
                  "nl": "Alleen de kleur van gemalen koffie"
        },
        {
                  "en": "Brewing temperature exclusively",
                  "es": "Exclusivamente temperatura de preparación",
                  "de": "Ausschließlich Brühtemperatur",
                  "nl": "Uitsluitend zettemperatuur"
        },
        {
                  "en": "Weight of grinder only",
                  "es": "Solo peso del molinillo",
                  "de": "Nur Gewicht der Mühle",
                  "nl": "Alleen gewicht van maler"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "SSA quantifies total exposed coffee surface available for extraction. Espresso grind (~25µm mean) has SSA ~3,000-5,000 m²/g; pour-over (~500µm) has ~200-400 m²/g. Higher SSA means more water-coffee contact area, accelerating mass transfer and extraction. This explains why finer grinds extract faster—it's fundamentally about surface area, not just particle size.",
                  "es": "SSA cuantifica la superficie total de café expuesta disponible para extracción. Molienda de espresso (~25µm promedio) tiene SSA ~3.000-5.000 m²/g; vertido (~500µm) tiene ~200-400 m²/g. Mayor SSA significa más área de contacto agua-café, acelerando transferencia de masa y extracción. Esto explica por qué moliendas más finas extraen más rápido—es fundamentalmente sobre área superficial, no solo tamaño de partícula.",
                  "de": "SSA quantifiziert gesamte exponierte Kaffeeoberfläche verfügbar für Extraktion. Espresso-Mahlung (~25µm Mittel) hat SSA ~3.000-5.000 m²/g; Pour-Over (~500µm) hat ~200-400 m²/g. Höhere SSA bedeutet mehr Wasser-Kaffee-Kontaktfläche, beschleunigt Massentransfer und Extraktion. Dies erklärt, warum feinere Mahlungen schneller extrahieren—es geht grundlegend um Oberfläche, nicht nur Partikelgröße.",
                  "nl": "SSA kwantificeert totaal blootgesteld koffie oppervlak beschikbaar voor extractie. Espresso maling (~25µm gemiddeld) heeft SSA ~3.000-5.000 m²/g; pour-over (~500µm) heeft ~200-400 m²/g. Hogere SSA betekent meer water-koffie contactgebied, versnelt massaoverdracht en extractie. Dit verklaart waarom fijnere malingen sneller extraheren—het gaat fundamenteel over oppervlak, niet alleen deeltjesgrootte."
        }
      },
      {
        question: {
                  "en": "What is 'pressure profiling' and its theoretical basis in modern espresso?",
                  "es": "¿Qué es el 'perfilado de presión' y su base teórica en el espresso moderno?",
                  "de": "Was ist 'Druckprofilierung' und ihre theoretische Grundlage im modernen Espresso?",
                  "nl": "Wat is 'druk profilering' en de theoretische basis in moderne espresso?"
        },
        options: [
        {
                  "en": "Measuring atmospheric pressure only",
                  "es": "Solo medir presión atmosférica",
                  "de": "Nur atmosphärischen Druck messen",
                  "nl": "Alleen atmosferische druk meten"
        },
        {
                  "en": "Varying pump pressure during extraction (e.g., 3→9→6 bar) to control flow rate and selective compound extraction",
                  "es": "Variar la presión de la bomba durante la extracción (ej., 3→9→6 bar) para controlar la tasa de flujo y extracción selectiva de compuestos",
                  "de": "Variation des Pumpendrucks während Extraktion (z.B. 3→9→6 bar) zur Kontrolle von Durchflussrate und selektiver Verbindungsextraktion",
                  "nl": "Variëren van pompdruk tijdens extractie (bijv. 3→9→6 bar) om stroomsnelheid en selectieve verbindingsextractie te controleren"
        },
        {
                  "en": "Manual lever pulling exclusively",
                  "es": "Exclusivamente tirar de palanca manual",
                  "de": "Ausschließlich manuelles Hebel ziehen",
                  "nl": "Uitsluitend handmatig hefboom trekken"
        },
        {
                  "en": "Keeping pressure constant at 9 bar always",
                  "es": "Mantener presión constante a 9 bar siempre",
                  "de": "Druck konstant bei 9 bar halten immer",
                  "nl": "Druk constant houden op 9 bar altijd"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Pressure profiling uses programmable pumps to vary pressure during extraction. Example: start low (3-4 bar pre-infusion), ramp to 9 bar (peak extraction), finish lower (6 bar to prevent over-extraction). Theory: different pressures optimize different extraction phases—low pressure for even wetting, high for efficient extraction, declining to avoid channeling and bitterness.",
                  "es": "El perfilado de presión usa bombas programables para variar la presión durante la extracción. Ejemplo: comenzar bajo (3-4 bar pre-infusión), aumentar a 9 bar (extracción pico), terminar más bajo (6 bar para prevenir sobre-extracción). Teoría: diferentes presiones optimizan diferentes fases de extracción—presión baja para humectación uniforme, alta para extracción eficiente, declinante para evitar canalización y amargor.",
                  "de": "Druckprofilierung verwendet programmierbare Pumpen zur Druckvariation während Extraktion. Beispiel: niedrig starten (3-4 bar Vorinfusion), auf 9 bar steigern (Spitzenextraktion), niedriger beenden (6 bar zur Vermeidung von Überextraktion). Theorie: unterschiedliche Drücke optimieren unterschiedliche Extraktionsphasen—niedriger Druck für gleichmäßige Benetzung, hoher für effiziente Extraktion, abnehmend zur Vermeidung von Kanalbildung und Bitterkeit.",
                  "nl": "Druk profilering gebruikt programmeerbare pompen om druk te variëren tijdens extractie. Voorbeeld: laag beginnen (3-4 bar pre-infusie), oplopen naar 9 bar (piek extractie), lager eindigen (6 bar om over-extractie te voorkomen). Theorie: verschillende drukken optimaliseren verschillende extractie fasen—lage druk voor gelijkmatige bevochtiging, hoge voor efficiënte extractie, dalend om channeling en bitterheid te vermijden."
        }
      },
      {
        question: {
                  "en": "What is 'steam wand purging' thermodynamics in milk steaming?",
                  "es": "¿Qué es la termodinámica de 'purgado de la varilla de vapor' en el vaporizado de leche?",
                  "de": "Was ist 'Dampflanze-Spülungs'-Thermodynamik beim Milchaufschäumen?",
                  "nl": "Wat is 'stoomstaaf spoelen' thermodynamica bij melk stomen?"
        },
        options: [
        {
                  "en": "Temperature measurement exclusively",
                  "es": "Exclusivamente medición de temperatura",
                  "de": "Ausschließlich Temperaturmessung",
                  "nl": "Uitsluitend temperatuurmeting"
        },
        {
                  "en": "Cleaning external surfaces only",
                  "es": "Solo limpieza de superficies externas",
                  "de": "Nur Reinigung äußerer Oberflächen",
                  "nl": "Alleen schoonmaken van buitenoppervlakken"
        },
        {
                  "en": "Just decorative steam release",
                  "es": "Solo liberación decorativa de vapor",
                  "de": "Nur dekorative Dampffreigabe",
                  "nl": "Alleen decoratieve stoom afgifte"
        },
        {
                  "en": "Pre-purge removes condensed water; post-purge prevents milk backflow—both critical for hygiene and consistent steam quality",
                  "es": "El pre-purgado elimina agua condensada; el post-purgado previene reflujo de leche—ambos críticos para higiene y calidad consistente del vapor",
                  "de": "Vor-Spülung entfernt kondensiertes Wasser; Nach-Spülung verhindert Milch-Rückfluss—beides kritisch für Hygiene und konsistente Dampfqualität",
                  "nl": "Pre-spoeling verwijdert gecondenseerd water; post-spoeling voorkomt melk terugstroom—beide cruciaal voor hygiëne en consistente stoomkwaliteit"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Pre-purge: condensed water accumulates in steam wand between uses; purging before steaming ensures dry steam enters milk (wet steam = poor microfoam). Post-purge: residual milk can be sucked back into wand when steam collapses; immediate purging prevents this, maintaining sanitation. Both are essential professional techniques for consistent microfoam quality.",
                  "es": "Pre-purgado: el agua condensada se acumula en la varilla de vapor entre usos; purgar antes de vaporizar asegura que vapor seco entre en la leche (vapor húmedo = microespuma pobre). Post-purgado: leche residual puede ser succionada de vuelta a la varilla cuando el vapor colapsa; purgar inmediatamente previene esto, manteniendo sanidad. Ambos son técnicas profesionales esenciales para calidad consistente de microespuma.",
                  "de": "Vor-Spülung: kondensiertes Wasser sammelt sich zwischen Verwendungen in Dampflanze; Spülen vor Aufschäumen stellt sicher, dass trockener Dampf in Milch eintritt (nasser Dampf = schlechter Mikroschaum). Nach-Spülung: Restmilch kann in Lanze zurückgesaugt werden, wenn Dampf kollabiert; sofortiges Spülen verhindert dies, erhält Hygiene. Beides sind wesentliche professionelle Techniken für konsistente Mikroschaumqualität.",
                  "nl": "Pre-spoeling: gecondenseerd water accumuleert in stoomstaaf tussen gebruik; spoelen voor stomen verzekert dat droge stoom melk ingaat (natte stoom = slechte microschuim). Post-spoeling: resterende melk kan teruggezogen worden in staaf wanneer stoom instort; onmiddellijk spoelen voorkomt dit, behoudt hygiëne. Beide zijn essentiële professionele technieken voor consistente microschuim kwaliteit."
        }
      },
      {
        question: {
                  "en": "What is 'first crack endothermic dip' in coffee roasting thermodynamics?",
                  "es": "¿Qué es la 'caída endotérmica del primer crack' en la termodinámica del tostado de café?",
                  "de": "Was ist das 'First Crack endotherme Einbruch' in der Kaffeeröst-Thermodynamik?",
                  "nl": "Wat is 'first crack endotherm dal' in koffie rooster thermodynamica?"
        },
        options: [
        {
                  "en": "Only an auditory phenomenon, not thermal",
                  "es": "Solo un fenómeno auditivo, no térmico",
                  "de": "Nur ein akustisches Phänomen, nicht thermisch",
                  "nl": "Alleen een auditief fenomeen, niet thermisch"
        },
        {
                  "en": "First crack has no thermal signature",
                  "es": "El primer crack no tiene firma térmica",
                  "de": "First Crack hat keine thermische Signatur",
                  "nl": "First crack heeft geen thermische handtekening"
        },
        {
                  "en": "Temperature temporarily stalls/dips as water vaporization and bean structure rupture absorb thermal energy endothermically",
                  "es": "La temperatura se estanca/cae temporalmente ya que la vaporización de agua y la ruptura de la estructura del grano absorben energía térmica endotérmicamente",
                  "de": "Temperatur stockt/sinkt vorübergehend, da Wasserverdampfung und Bohnenstrukturbruch thermische Energie endotherm absorbieren",
                  "nl": "Temperatuur stagneert/daalt tijdelijk omdat waterverdamping en boon structuur breuk thermische energie endotherm absorberen"
        },
        {
                  "en": "Beans become ice cold during roasting",
                  "es": "Los granos se vuelven helados durante el tostado",
                  "de": "Bohnen werden eiskalt beim Rösten",
                  "nl": "Bonen worden ijskoud tijdens roosteren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "First crack occurs around 196-205°C when remaining water flash-vaporizes and bean cellular structure fractures. Both processes are endothermic (absorb heat), temporarily consuming thermal energy faster than roaster supplies it. This causes observable temperature stall or slight drop—the 'endothermic dip.' Roasters must supply sufficient energy to overcome this transition smoothly.",
                  "es": "El primer crack ocurre alrededor de 196-205°C cuando el agua restante se vaporiza instantáneamente y la estructura celular del grano se fractura. Ambos procesos son endotérmicos (absorben calor), consumiendo temporalmente energía térmica más rápido de lo que el tostador la suministra. Esto causa un estancamiento observable de temperatura o ligera caída—la 'caída endotérmica'. Los tostadores deben suministrar energía suficiente para superar esta transición suavemente.",
                  "de": "First Crack tritt bei etwa 196-205°C auf, wenn verbleibendes Wasser schlagartig verdampft und Bohnen-Zellstruktur bricht. Beide Prozesse sind endotherm (absorbieren Wärme), verbrauchen vorübergehend thermische Energie schneller als Röster sie liefert. Dies verursacht beobachtbaren Temperaturstillstand oder leichten Abfall—den 'endothermen Einbruch'. Röster müssen ausreichend Energie liefern, um diesen Übergang glatt zu überwinden.",
                  "nl": "First crack vindt plaats rond 196-205°C wanneer overgebleven water flitsverdampt en boon cellulaire structuur breekt. Beide processen zijn endotherm (absorberen warmte), verbruiken tijdelijk thermische energie sneller dan rooster levert. Dit veroorzaakt waarneembare temperatuur stagnatie of lichte daling—het 'endotherme dal'. Roosters moeten voldoende energie leveren om deze overgang soepel te overwinnen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  }
})();