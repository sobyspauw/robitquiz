// Quiz Template - Level 9: Drinken - Koffie
(function() {
  const level9 = {
    name: {
      en: "Coffee",
      es: "Café",
      de: "Kaffee",
      nl: "Koffie"
    },
    questions: [
      {
        question: {
          en: "What is the primary mechanism behind coffee extraction modeling using mathematical equations?",
          es: "¿Cuál es el mecanismo principal detrás del modelado de extracción de café usando ecuaciones matemáticas?",
          de: "Was ist der primäre Mechanismus hinter der Kaffee-Extraktionsmodellierung mit mathematischen Gleichungen?",
          nl: "Wat is het primaire mechanisme achter koffie-extractiemodellering met wiskundige vergelijkingen?"
        },
        options: [
          { en: "Molecular diffusion through porous media", es: "Difusión molecular a través de medios porosos", de: "Molekulare Diffusion durch poröse Medien", nl: "Moleculaire diffusie door poreuze media" },
          { en: "Surface tension variations", es: "Variaciones de tensión superficial", de: "Oberflächenspannungsvariationen", nl: "Oppervlaktespanningsvariaties" },
          { en: "Electromagnetic resonance", es: "Resonancia electromagnética", de: "Elektromagnetische Resonanz", nl: "Elektromagnetische resonantie" },
          { en: "Gravitational settling", es: "Sedimentación gravitacional", de: "Gravitationsabsetzung", nl: "Gravitationele bezinking" }
        ],
        correct: 0,
        explanation: {
          en: "Coffee extraction modeling uses Fick's laws of diffusion to describe how water-soluble compounds move through the porous structure of ground coffee particles, considering mass transfer, particle size distribution, and time-dependent concentration gradients.",
          es: "El modelado de extracción de café utiliza las leyes de difusión de Fick para describir cómo los compuestos solubles en agua se mueven a través de la estructura porosa de las partículas de café molido, considerando la transferencia de masa, la distribución del tamaño de partículas y los gradientes de concentración dependientes del tiempo.",
          de: "Die Kaffee-Extraktionsmodellierung verwendet Fick'sche Diffusionsgesetze, um zu beschreiben, wie wasserlösliche Verbindungen durch die poröse Struktur gemahlener Kaffeepartikel wandern, unter Berücksichtigung von Stoffübertragung, Partikelgrößenverteilung und zeitabhängigen Konzentrationsgradienten.",
          nl: "Koffie-extractiemodellering gebruikt Fick's diffusiewetten om te beschrijven hoe in water oplosbare verbindingen door de poreuze structuur van gemalen koffiepartikels bewegen, rekening houdend met massaoverdracht, deeltjesgrootteverdeling en tijdsafhankelijke concentratiegradiënten."
        }
      },
      {
        question: {
          en: "Which advanced spectroscopic technique is most effective for real-time monitoring of coffee roasting volatile organic compounds (VOCs)?",
          es: "¿Qué técnica espectroscópica avanzada es más efectiva para el monitoreo en tiempo real de compuestos orgánicos volátiles (COV) durante el tostado del café?",
          de: "Welche fortschrittliche spektroskopische Technik ist am effektivsten für die Echtzeit-Überwachung von flüchtigen organischen Verbindungen (VOCs) beim Kaffeerösten?",
          nl: "Welke geavanceerde spectroscopische techniek is het meest effectief voor real-time monitoring van vluchtige organische verbindingen (VOC's) tijdens het roosteren van koffie?"
        },
        options: [
          { en: "PTR-MS (Proton Transfer Reaction Mass Spectrometry)", es: "PTR-MS (Espectrometría de masas de reacción de transferencia de protones)", de: "PTR-MS (Protonen-Transfer-Reaktions-Massenspektrometrie)", nl: "PTR-MS (Proton Transfer Reactie Massaspectrometrie)" },
          { en: "NMR (Nuclear Magnetic Resonance)", es: "RMN (Resonancia magnética nuclear)", de: "NMR (Kernspinresonanz)", nl: "NMR (Kernmagnetische resonantie)" },
          { en: "XRD (X-ray Diffraction)", es: "DRX (Difracción de rayos X)", de: "XRD (Röntgenbeugung)", nl: "XRD (Röntgendiffractie)" },
          { en: "UV-Vis Spectroscopy", es: "Espectroscopía UV-Vis", de: "UV-Vis-Spektroskopie", nl: "UV-Vis Spectroscopie" }
        ],
        correct: 0,
        explanation: {
          en: "PTR-MS provides real-time, high-sensitivity detection of volatile organic compounds without sample preparation, making it ideal for monitoring the complex volatile profile changes during coffee roasting, including furans, aldehydes, and pyrazines formation.",
          es: "PTR-MS proporciona detección en tiempo real y alta sensibilidad de compuestos orgánicos volátiles sin preparación de muestra, haciéndolo ideal para monitorear los cambios complejos del perfil volátil durante el tostado del café, incluyendo la formación de furanos, aldehídos y pirazinas.",
          de: "PTR-MS bietet Echtzeit-, hochempfindliche Detektion flüchtiger organischer Verbindungen ohne Probenvorbereitung, was es ideal für die Überwachung komplexer Veränderungen des Flüchtigkeitsprofils beim Kaffeerösten macht, einschließlich der Bildung von Furanen, Aldehyden und Pyrazinen.",
          nl: "PTR-MS biedt real-time, hoge gevoeligheidsdetectie van vluchtige organische verbindingen zonder monstervoorbereiding, waardoor het ideaal is voor het monitoren van complexe vluchtige profielveranderingen tijdens het roosteren van koffie, inclusief vorming van furanen, aldehyden en pyrazines."
        }
      },
      {
        question: {
          en: "What is the theoretical maximum extraction yield for espresso based on the total dissolved solids (TDS) content of green coffee?",
          es: "¿Cuál es el rendimiento máximo teórico de extracción para espresso basado en el contenido de sólidos disueltos totales (TDS) del café verde?",
          de: "Was ist die theoretische maximale Extraktionsausbeute für Espresso basierend auf dem Gesamtgehalt gelöster Feststoffe (TDS) von grünem Kaffee?",
          nl: "Wat is de theoretische maximale extractieopbrengst voor espresso gebaseerd op het totale opgeloste stoffen (TDS) gehalte van groene koffie?"
        },
        options: [
          { en: "Approximately 30% of total coffee mass", es: "Aproximadamente 30% de la masa total del café", de: "Etwa 30% der gesamten Kaffeemasse", nl: "Ongeveer 30% van de totale koffiemassa" },
          { en: "Approximately 50% of total coffee mass", es: "Aproximadamente 50% de la masa total del café", de: "Etwa 50% der gesamten Kaffeemasse", nl: "Ongeveer 50% van de totale koffiemassa" },
          { en: "Approximately 70% of total coffee mass", es: "Aproximadamente 70% de la masa total del café", de: "Etwa 70% der gesamten Kaffeemasse", nl: "Ongeveer 70% van de totale koffiemassa" },
          { en: "Approximately 90% of total coffee mass", es: "Aproximadamente 90% de la masa total del café", de: "Etwa 90% der gesamten Kaffeemasse", nl: "Ongeveer 90% van de totale koffiemassa" }
        ],
        correct: 0,
        explanation: {
          en: "The theoretical maximum extraction yield is approximately 30% of the coffee mass, as this represents the total water-soluble compounds in green coffee. Beyond this point, extracting additional compounds would result in over-extraction and bitter, astringent flavors from insoluble cellulose and lignin breakdown.",
          es: "El rendimiento máximo teórico de extracción es aproximadamente 30% de la masa del café, ya que esto representa los compuestos totales solubles en agua en el café verde. Más allá de este punto, extraer compuestos adicionales resultaría en sobre-extracción y sabores amargos y astringentes de la descomposición de celulosa y lignina insolubles.",
          de: "Die theoretische maximale Extraktionsausbeute beträgt etwa 30% der Kaffeemasse, da dies die gesamten wasserlöslichen Verbindungen im grünen Kaffee darstellt. Darüber hinaus würde das Extrahieren zusätzlicher Verbindungen zu Überextraktion und bitteren, adstringierenden Aromen aus unlöslichem Zellulose- und Ligninabbau führen.",
          nl: "De theoretische maximale extractieopbrengst is ongeveer 30% van de koffiemassa, omdat dit de totale in water oplosbare verbindingen in groene koffie vertegenwoordigt. Voorbij dit punt zou het extraheren van extra verbindingen resulteren in over-extractie en bittere, samentrekkende smaken van onoplosbare cellulose- en lignineafbraak."
        }
      },
      {
        question: {
          en: "Which genetic marker is most commonly used for coffee authentication and traceability in molecular studies?",
          es: "¿Qué marcador genético se utiliza más comúnmente para la autenticación y trazabilidad del café en estudios moleculares?",
          de: "Welcher genetische Marker wird am häufigsten für Kaffee-Authentifizierung und Rückverfolgbarkeit in molekularen Studien verwendet?",
          nl: "Welke genetische marker wordt het meest gebruikt voor koffie-authenticatie en traceerbaarheid in moleculaire studies?"
        },
        options: [
          { en: "Internal Transcribed Spacer (ITS) sequences", es: "Secuencias de espaciador transcrito interno (ITS)", de: "Internal Transcribed Spacer (ITS) Sequenzen", nl: "Internal Transcribed Spacer (ITS) sequenties" },
          { en: "Mitochondrial COX1 gene", es: "Gen COX1 mitocondrial", de: "Mitochondriales COX1-Gen", nl: "Mitochondriaal COX1 gen" },
          { en: "Chloroplast trnH-psbA intergenic spacer", es: "Espaciador intergénico trnH-psbA del cloroplasto", de: "Chloroplast trnH-psbA intergenischer Spacer", nl: "Chloroplast trnH-psbA intergenische spacer" },
          { en: "18S ribosomal RNA gene", es: "Gen de ARN ribosomal 18S", de: "18S ribosomales RNA-Gen", nl: "18S ribosomaal RNA gen" }
        ],
        correct: 2,
        explanation: {
          en: "The chloroplast trnH-psbA intergenic spacer is widely used for coffee species identification and authentication due to its high variability between species while maintaining conservation within species, making it ideal for distinguishing between Coffea arabica and Coffea canephora varieties.",
          es: "El espaciador intergénico trnH-psbA del cloroplasto se utiliza ampliamente para la identificación y autenticación de especies de café debido a su alta variabilidad entre especies mientras mantiene la conservación dentro de las especies, haciéndolo ideal para distinguir entre variedades de Coffea arabica y Coffea canephora.",
          de: "Der Chloroplast trnH-psbA intergenische Spacer wird weit verbreitet für Kaffeearten-Identifizierung und Authentifizierung verwendet aufgrund seiner hohen Variabilität zwischen Arten bei gleichzeitiger Erhaltung innerhalb der Arten, was ihn ideal zur Unterscheidung zwischen Coffea arabica und Coffea canephora Varietäten macht.",
          nl: "De chloroplast trnH-psbA intergenische spacer wordt veel gebruikt voor koffiesoort identificatie en authenticatie vanwege de hoge variabiliteit tussen soorten terwijl conservering binnen soorten behouden blijft, waardoor het ideaal is voor het onderscheiden tussen Coffea arabica en Coffea canephora variëteiten."
        }
      },
      {
        question: {
          en: "What is the primary mechanism of action for coffee's neuroprotective effects according to recent neuroscience research?",
          es: "¿Cuál es el mecanismo de acción principal de los efectos neuroprotectores del café según investigaciones recientes en neurociencia?",
          de: "Was ist der primäre Wirkungsmechanismus für die neuroprotektiven Effekte von Kaffee laut aktueller Neurowissenschaftsforschung?",
          nl: "Wat is het primaire werkingsmechanisme voor de neuroprotectieve effecten van koffie volgens recent neurowetenschappelijk onderzoek?"
        },
        options: [
          { en: "Adenosine receptor antagonism and BDNF upregulation", es: "Antagonismo del receptor de adenosina y regulación positiva de BDNF", de: "Adenosinrezeptor-Antagonismus und BDNF-Hochregulation", nl: "Adenosine receptor antagonisme en BDNF opregulatie" },
          { en: "Direct serotonin synthesis enhancement", es: "Mejora directa de la síntesis de serotonina", de: "Direkte Serotonin-Synthese-Verstärkung", nl: "Directe serotonine synthese verbetering" },
          { en: "Dopamine reuptake inhibition", es: "Inhibición de la recaptación de dopamina", de: "Dopamin-Wiederaufnahme-Hemmung", nl: "Dopamine heropname remming" },
          { en: "GABA receptor activation", es: "Activación del receptor GABA", de: "GABA-Rezeptor-Aktivierung", nl: "GABA receptor activatie" }
        ],
        correct: 0,
        explanation: {
          en: "Coffee's neuroprotective effects primarily work through adenosine receptor (A1 and A2A) antagonism, preventing neuroinflammation and promoting brain-derived neurotrophic factor (BDNF) expression, which supports neuronal survival, synaptic plasticity, and cognitive function.",
          es: "Los efectos neuroprotectores del café funcionan principalmente a través del antagonismo de los receptores de adenosina (A1 y A2A), previniendo la neuroinflamación y promoviendo la expresión del factor neurotrófico derivado del cerebro (BDNF), que apoya la supervivencia neuronal, la plasticidad sináptica y la función cognitiva.",
          de: "Die neuroprotektiven Effekte von Kaffee wirken hauptsächlich durch Adenosinrezeptor (A1 und A2A) Antagonismus, verhindern Neuroinflammation und fördern die Expression des brain-derived neurotrophic factor (BDNF), der das neuronale Überleben, synaptische Plastizität und kognitive Funktion unterstützt.",
          nl: "De neuroprotectieve effecten van koffie werken voornamelijk via adenosine receptor (A1 en A2A) antagonisme, het voorkomen van neuroinflammatie en het bevorderen van brain-derived neurotrophic factor (BDNF) expressie, wat neuronale overleving, synaptische plasticiteit en cognitieve functie ondersteunt."
        }
      },
      {
        question: {
          en: "Which advanced brewing parameter optimization technique uses machine learning algorithms to predict optimal extraction variables?",
          es: "¿Qué técnica avanzada de optimización de parámetros de preparación utiliza algoritmos de aprendizaje automático para predecir variables óptimas de extracción?",
          de: "Welche fortschrittliche Brühparameter-Optimierungstechnik verwendet maschinelle Lernalgorithmen zur Vorhersage optimaler Extraktionsvariablen?",
          nl: "Welke geavanceerde brouwparameter optimalisatietechniek gebruikt machine learning algoritmen om optimale extractievariabelen te voorspellen?"
        },
        options: [
          { en: "Gaussian Process Regression modeling", es: "Modelado de regresión de procesos gaussianos", de: "Gaussian Process Regression Modellierung", nl: "Gaussian Process Regression modellering" },
          { en: "Simple linear regression", es: "Regresión lineal simple", de: "Einfache lineare Regression", nl: "Eenvoudige lineaire regressie" },
          { en: "Manual trial and error", es: "Prueba y error manual", de: "Manuelles Ausprobieren", nl: "Handmatige trial en error" },
          { en: "Random sampling", es: "Muestreo aleatorio", de: "Zufallsstichprobe", nl: "Willekeurige steekproef" }
        ],
        correct: 0,
        explanation: {
          en: "Gaussian Process Regression is used in advanced coffee brewing optimization to model complex, non-linear relationships between brewing parameters (temperature, time, grind size, water chemistry) and sensory outcomes, providing uncertainty quantification and optimal parameter predictions.",
          es: "La regresión de procesos gaussianos se utiliza en la optimización avanzada de preparación de café para modelar relaciones complejas y no lineales entre parámetros de preparación (temperatura, tiempo, tamaño de molienda, química del agua) y resultados sensoriales, proporcionando cuantificación de incertidumbre y predicciones de parámetros óptimos.",
          de: "Gaussian Process Regression wird in der fortgeschrittenen Kaffeebrüh-Optimierung verwendet, um komplexe, nicht-lineare Beziehungen zwischen Brühparametern (Temperatur, Zeit, Mahlgrad, Wasserchemie) und sensorischen Ergebnissen zu modellieren, wodurch Unsicherheitsquantifizierung und optimale Parametervorhersagen bereitgestellt werden.",
          nl: "Gaussian Process Regression wordt gebruikt in geavanceerde koffiezetting optimalisatie om complexe, niet-lineaire relaties tussen zetparameters (temperatuur, tijd, maalgrootte, waterchemie) en sensorische uitkomsten te modelleren, waarbij onzekerheidsquantificatie en optimale parametervoorspellingen worden geleverd."
        }
      },
      {
        question: {
          en: "What is the optimal particle size distribution coefficient (span) for espresso grinding according to computational fluid dynamics studies?",
          es: "¿Cuál es el coeficiente óptimo de distribución de tamaño de partícula (span) para el molido de espresso según estudios de dinámica de fluidos computacional?",
          de: "Was ist der optimale Partikelgrößenverteilungskoeffizient (Spanne) für Espresso-Mahlung laut Computational Fluid Dynamics Studien?",
          nl: "Wat is de optimale deeltjesgrootteverdelings coëfficiënt (span) voor espresso maling volgens computational fluid dynamics studies?"
        },
        options: [
          { en: "0.8-1.2", es: "0,8-1,2", de: "0,8-1,2", nl: "0,8-1,2" },
          { en: "1.5-2.0", es: "1,5-2,0", de: "1,5-2,0", nl: "1,5-2,0" },
          { en: "2.5-3.5", es: "2,5-3,5", de: "2,5-3,5", nl: "2,5-3,5" },
          { en: "4.0-5.0", es: "4,0-5,0", de: "4,0-5,0", nl: "4,0-5,0" }
        ],
        correct: 0,
        explanation: {
          en: "CFD studies show that a span of 0.8-1.2 provides optimal flow characteristics for espresso extraction, balancing particle packing density, permeability, and extraction uniformity while minimizing channeling and maximizing surface area contact time.",
          es: "Los estudios de CFD muestran que un span de 0,8-1,2 proporciona características de flujo óptimas para la extracción de espresso, equilibrando la densidad de empaquetamiento de partículas, la permeabilidad y la uniformidad de extracción mientras minimiza la canalización y maximiza el tiempo de contacto del área superficial.",
          de: "CFD-Studien zeigen, dass eine Spanne von 0,8-1,2 optimale Flusseigenschaften für Espresso-Extraktion bietet, wobei Partikelpackungsdichte, Permeabilität und Extraktionsgleichmäßigkeit ausbalanciert werden, während Kanalbildung minimiert und Oberflächenkontaktzeit maximiert wird.",
          nl: "CFD studies tonen aan dat een span van 0,8-1,2 optimale stromingskarakteristieken biedt voor espresso extractie, waarbij deeltjespakkingsdichtheid, permeabiliteit en extractie uniformiteit worden gebalanceerd terwijl channeling wordt geminimaliseerd en oppervlaktecontacttijd wordt gemaximaliseerd."
        }
      },
      {
        question: {
          en: "Which metabolomic pathway analysis technique is most effective for studying coffee's impact on human metabolism?",
          es: "¿Qué técnica de análisis de vías metabolómicas es más efectiva para estudiar el impacto del café en el metabolismo humano?",
          de: "Welche metabolomische Pathway-Analysetechnik ist am effektivsten für die Untersuchung von Kaffees Auswirkungen auf den menschlichen Stoffwechsel?",
          nl: "Welke metabolomics pathway analyse techniek is het meest effectief voor het bestuderen van koffie's impact op het menselijke metabolisme?"
        },
        options: [
          { en: "UPLC-MS/MS with isotope labeling", es: "UPLC-MS/MS con marcado isotópico", de: "UPLC-MS/MS mit Isotopmarkierung", nl: "UPLC-MS/MS met isotopenlabeling" },
          { en: "Basic glucose testing", es: "Prueba básica de glucosa", de: "Einfacher Glukosetest", nl: "Basis glucose test" },
          { en: "Visual observation only", es: "Solo observación visual", de: "Nur visuelle Beobachtung", nl: "Alleen visuele observatie" },
          { en: "Simple pH testing", es: "Prueba simple de pH", de: "Einfacher pH-Test", nl: "Eenvoudige pH test" }
        ],
        correct: 0,
        explanation: {
          en: "UPLC-MS/MS (Ultra Performance Liquid Chromatography-Tandem Mass Spectrometry) with stable isotope labeling provides the highest sensitivity and specificity for tracking coffee metabolite pathways, allowing quantification of chlorogenic acid metabolites, caffeine metabolism, and their effects on human metabolic networks.",
          es: "UPLC-MS/MS (Cromatografía Líquida de Ultra Rendimiento-Espectrometría de Masas en Tándem) con marcado isotópico estable proporciona la mayor sensibilidad y especificidad para rastrear vías de metabolitos del café, permitiendo la cuantificación de metabolitos del ácido clorogénico, metabolismo de la cafeína y sus efectos en redes metabólicas humanas.",
          de: "UPLC-MS/MS (Ultra Performance Liquid Chromatography-Tandem Mass Spectrometry) mit stabiler Isotopmarkierung bietet die höchste Sensitivität und Spezifität für die Verfolgung von Kaffee-Metabolitenwegen, ermöglicht Quantifizierung von Chlorogensäure-Metaboliten, Koffein-Stoffwechsel und deren Auswirkungen auf menschliche Stoffwechselnetzwerke.",
          nl: "UPLC-MS/MS (Ultra Performance Liquid Chromatography-Tandem Mass Spectrometry) met stabiele isotopenlabeling biedt de hoogste gevoeligheid en specificiteit voor het volgen van koffie metaboliet pathways, waardoor kwantificering van chlorogeenzuur metabolieten, cafeïne metabolisme en hun effecten op menselijke metabolische netwerken mogelijk is."
        }
      },
      {
        question: {
          en: "What is the critical water activity (aw) threshold for preventing mycotoxin formation in stored green coffee?",
          es: "¿Cuál es el umbral crítico de actividad de agua (aw) para prevenir la formación de micotoxinas en café verde almacenado?",
          de: "Was ist der kritische Wasseraktivitäts (aw) Schwellenwert zur Verhinderung von Mykotoxinbildung in gelagertem grünem Kaffee?",
          nl: "Wat is de kritische wateractiviteit (aw) drempel voor het voorkomen van mycotoxinevorming in opgeslagen groene koffie?"
        },
        options: [
          { en: "Below 0.65", es: "Por debajo de 0,65", de: "Unter 0,65", nl: "Onder 0,65" },
          { en: "Below 0.75", es: "Por debajo de 0,75", de: "Unter 0,75", nl: "Onder 0,75" },
          { en: "Below 0.85", es: "Por debajo de 0,85", de: "Unter 0,85", nl: "Onder 0,85" },
          { en: "Below 0.95", es: "Por debajo de 0,95", de: "Unter 0,95", nl: "Onder 0,95" }
        ],
        correct: 0,
        explanation: {
          en: "Water activity below 0.65 is critical for preventing mycotoxin-producing fungi (particularly Aspergillus species) growth in stored green coffee. This threshold prevents ochratoxin A formation, which is a major concern for coffee quality and safety.",
          es: "La actividad del agua por debajo de 0,65 es crítica para prevenir el crecimiento de hongos productores de micotoxinas (particularmente especies de Aspergillus) en café verde almacenado. Este umbral previene la formación de ocratoxina A, que es una preocupación importante para la calidad y seguridad del café.",
          de: "Wasseraktivität unter 0,65 ist kritisch zur Verhinderung des Wachstums Mykotoxin-produzierender Pilze (besonders Aspergillus-Arten) in gelagertem grünem Kaffee. Diese Schwelle verhindert Ochratoxin A-Bildung, was ein Hauptanliegen für Kaffeequalität und -sicherheit ist.",
          nl: "Wateractiviteit onder 0,65 is kritiek voor het voorkomen van mycotoxine-producerende schimmelgroei (vooral Aspergillus soorten) in opgeslagen groene koffie. Deze drempel voorkomt ochratoxine A vorming, wat een belangrijke zorg is voor koffiekwaliteit en veiligheid."
        }
      },
      {
        question: {
          en: "Which bioactive compound in coffee is most responsible for the observed reduction in type 2 diabetes risk according to epidemiological studies?",
          es: "¿Qué compuesto bioactivo en el café es más responsable de la reducción observada en el riesgo de diabetes tipo 2 según estudios epidemiológicos?",
          de: "Welche bioaktive Verbindung im Kaffee ist laut epidemiologischen Studien am meisten verantwortlich für die beobachtete Reduktion des Typ-2-Diabetes-Risikos?",
          nl: "Welke bioactieve verbinding in koffie is het meest verantwoordelijk voor de waargenomen vermindering van type 2 diabetes risico volgens epidemiologische studies?"
        },
        options: [
          { en: "Chlorogenic acids (3-CQA, 5-CQA)", es: "Ácidos clorogénicos (3-CQA, 5-CQA)", de: "Chlorogensäuren (3-CQA, 5-CQA)", nl: "Chlorogeenzuren (3-CQA, 5-CQA)" },
          { en: "Caffeine alone", es: "Solo cafeína", de: "Nur Koffein", nl: "Alleen cafeïne" },
          { en: "Trigonelline", es: "Trigonelina", de: "Trigonellin", nl: "Trigonelline" },
          { en: "Melanoidins", es: "Melanoidinas", de: "Melanoidine", nl: "Melanoidines" }
        ],
        correct: 0,
        explanation: {
          en: "Chlorogenic acids, particularly 3-caffeoylquinic acid (3-CQA) and 5-caffeoylquinic acid (5-CQA), are the primary bioactive compounds responsible for coffee's anti-diabetic effects through glucose uptake enhancement, α-glucosidase inhibition, and improved insulin sensitivity.",
          es: "Los ácidos clorogénicos, particularmente el ácido 3-cafeoilquínico (3-CQA) y el ácido 5-cafeoilquínico (5-CQA), son los compuestos bioactivos primarios responsables de los efectos anti-diabéticos del café a través del aumento de la captación de glucosa, inhibición de α-glucosidasa y mejora de la sensibilidad a la insulina.",
          de: "Chlorogensäuren, besonders 3-Caffeoylchinasäure (3-CQA) und 5-Caffeoylchinasäure (5-CQA), sind die primären bioaktiven Verbindungen, die für Kaffees anti-diabetische Effekte verantwortlich sind durch Glukoseaufnahme-Verstärkung, α-Glucosidase-Hemmung und verbesserte Insulinsensitivität.",
          nl: "Chlorogeenzuren, met name 3-caffeoylquinezuur (3-CQA) en 5-caffeoylquinezuur (5-CQA), zijn de primaire bioactieve verbindingen verantwoordelijk voor koffie's anti-diabetische effecten door glucose opname verbetering, α-glucosidase remming en verbeterde insulinegevoeligheid."
        }
      },
      {
        question: {
          en: "What is the primary mechanism behind 'staling' in roasted coffee at the molecular level?",
          es: "¿Cuál es el mecanismo principal detrás del 'envejecimiento' del café tostado a nivel molecular?",
          de: "Was ist der primäre Mechanismus hinter dem 'Altbackenwerden' von geröstetem Kaffee auf molekularer Ebene?",
          nl: "Wat is het primaire mechanisme achter 'veroudering' in geroosterde koffie op moleculair niveau?"
        },
        options: [
          { en: "Lipid oxidation and Strecker degradation of amino acids", es: "Oxidación de lípidos y degradación de Strecker de aminoácidos", de: "Lipidoxidation und Strecker-Abbau von Aminosäuren", nl: "Lipide oxidatie en Strecker afbraak van aminozuren" },
          { en: "Simple water evaporation", es: "Simple evaporación de agua", de: "Einfache Wasserverdunstung", nl: "Eenvoudige waterverdamping" },
          { en: "Carbon dioxide absorption", es: "Absorción de dióxido de carbono", de: "Kohlendioxidabsorption", nl: "Koolstofdioxide absorptie" },
          { en: "Color darkening only", es: "Solo oscurecimiento del color", de: "Nur Farbverdunkelung", nl: "Alleen kleurverdonkering" }
        ],
        correct: 0,
        explanation: {
          en: "Coffee staling occurs primarily through lipid oxidation (oils becoming rancid) and Strecker degradation, where amino acids break down, producing off-flavors. This process is accelerated by oxygen exposure, light, and heat, degrading desirable volatile compounds while creating cardboard-like and stale aromas.",
          es: "El envejecimiento del café ocurre principalmente a través de la oxidación de lípidos (aceites que se vuelven rancios) y la degradación de Strecker, donde los aminoácidos se descomponen, produciendo sabores desagradables. Este proceso se acelera por la exposición al oxígeno, la luz y el calor, degradando compuestos volátiles deseables mientras se crean aromas a cartón y rancios.",
          de: "Kaffee-Alterung tritt hauptsächlich durch Lipidoxidation (Öle werden ranzig) und Strecker-Abbau auf, wobei Aminosäuren abgebaut werden und Fehlaromen produzieren. Dieser Prozess wird durch Sauerstoffexposition, Licht und Hitze beschleunigt, wobei erwünschte flüchtige Verbindungen abgebaut werden, während pappige und altbackene Aromen entstehen.",
          nl: "Koffie veroudering vindt voornamelijk plaats via lipide oxidatie (oliën worden ranzig) en Strecker afbraak, waarbij aminozuren afbreken en off-smaken produceren. Dit proces wordt versneld door blootstelling aan zuurstof, licht en warmte, waarbij wenselijke vluchtige verbindingen worden afgebroken terwijl kartonachtige en oude aroma's ontstaan."
        }
      },
      {
        question: {
          en: "Which competition parameter is used in the World Brewers Cup to standardize brew ratio evaluation?",
          es: "¿Qué parámetro de competición se utiliza en la Copa Mundial de Baristas de Filtrado para estandarizar la evaluación de la proporción de preparación?",
          de: "Welcher Wettbewerbsparameter wird im World Brewers Cup verwendet, um die Bewertung des Brühverhältnisses zu standardisieren?",
          nl: "Welke competitieparameter wordt gebruikt in de World Brewers Cup om de brew ratio evaluatie te standaardiseren?"
        },
        options: [
          { en: "Total Dissolved Solids (TDS) percentage and extraction yield", es: "Porcentaje de sólidos disueltos totales (TDS) y rendimiento de extracción", de: "Gesamtgehalt gelöster Feststoffe (TDS) Prozentsatz und Extraktionsausbeute", nl: "Totaal opgeloste stoffen (TDS) percentage en extractieopbrengst" },
          { en: "Water temperature only", es: "Solo temperatura del agua", de: "Nur Wassertemperatur", nl: "Alleen watertemperatuur" },
          { en: "Brewing time only", es: "Solo tiempo de preparación", de: "Nur Brühzeit", nl: "Alleen zettijd" },
          { en: "Visual color comparison", es: "Comparación visual del color", de: "Visueller Farbvergleich", nl: "Visuele kleurvergelijking" }
        ],
        correct: 0,
        explanation: {
          en: "The World Brewers Cup requires competitors to measure and report both TDS (typically 1.15-1.55% for filter coffee) and extraction yield (typically 18-22%) using refractometers, ensuring objective evaluation of brewing precision and consistency across different brewing methods and coffees.",
          es: "La Copa Mundial de Baristas de Filtrado requiere que los competidores midan e informen tanto el TDS (típicamente 1,15-1,55% para café de filtro) como el rendimiento de extracción (típicamente 18-22%) usando refractómetros, asegurando una evaluación objetiva de la precisión y consistencia de la preparación en diferentes métodos de preparación y cafés.",
          de: "Der World Brewers Cup verlangt von Teilnehmern, sowohl TDS (typischerweise 1,15-1,55% für Filterkaffee) als auch Extraktionsausbeute (typischerweise 18-22%) mit Refraktometern zu messen und zu berichten, um objektive Bewertung der Brühpräzision und Konsistenz über verschiedene Brühmethoden und Kaffees hinweg sicherzustellen.",
          nl: "De World Brewers Cup vereist dat deelnemers zowel TDS (typisch 1,15-1,55% voor filterkoffie) als extractieopbrengst (typisch 18-22%) meten en rapporteren met behulp van refractometers, om objectieve evaluatie van zetprecisie en consistentie over verschillende zetmethoden en koffies te waarborgen."
        }
      },
      {
        question: {
          en: "What is the significance of the 'coffee quality triangle' framework in sensory evaluation?",
          es: "¿Cuál es la importancia del marco del 'triángulo de calidad del café' en la evaluación sensorial?",
          de: "Was ist die Bedeutung des 'Kaffeequalitätsdreieck'-Rahmenwerks in der sensorischen Bewertung?",
          nl: "Wat is de betekenis van het 'koffiekwaliteitsdriehoek' raamwerk in sensorische evaluatie?"
        },
        options: [
          { en: "Balancing acidity, sweetness, and body to achieve optimal flavor complexity", es: "Equilibrar acidez, dulzura y cuerpo para lograr complejidad de sabor óptima", de: "Ausbalancieren von Säure, Süße und Körper zur Erreichung optimaler Geschmackskomplexität", nl: "Balanceren van zuurgraad, zoetheid en body om optimale smaakcomplexiteit te bereiken" },
          { en: "Only evaluating color intensity", es: "Solo evaluar intensidad del color", de: "Nur Farbintensität bewerten", nl: "Alleen kleurintensiteit evalueren" },
          { en: "Measuring caffeine content exclusively", es: "Medir contenido de cafeína exclusivamente", de: "Ausschließlich Koffeingehalt messen", nl: "Uitsluitend cafeïnegehalte meten" },
          { en: "Testing brewing equipment performance", es: "Probar el rendimiento del equipo de preparación", de: "Brühgeräte-Leistung testen", nl: "Zetapparatuur prestaties testen" }
        ],
        correct: 0,
        explanation: {
          en: "The coffee quality triangle represents the three fundamental taste components (acidity, sweetness, body) that must be balanced for exceptional coffee. Professional cuppers assess how these elements interact, with imbalance indicating processing or brewing defects, while harmony suggests optimal quality and terroir expression.",
          es: "El triángulo de calidad del café representa los tres componentes de sabor fundamentales (acidez, dulzura, cuerpo) que deben estar equilibrados para un café excepcional. Los catadores profesionales evalúan cómo estos elementos interactúan, con el desequilibrio indicando defectos de procesamiento o preparación, mientras que la armonía sugiere calidad óptima y expresión del terruño.",
          de: "Das Kaffeequalitätsdreieck repräsentiert die drei fundamentalen Geschmackskomponenten (Säure, Süße, Körper), die für außergewöhnlichen Kaffee ausbalanciert sein müssen. Professionelle Cupper bewerten, wie diese Elemente interagieren, wobei Ungleichgewicht auf Verarbeitungs- oder Brühfehler hinweist, während Harmonie optimale Qualität und Terroir-Ausdruck nahelegt.",
          nl: "De koffiekwaliteitsdriehoek vertegenwoordigt de drie fundamentele smaakcomponenten (zuurgraad, zoetheid, body) die gebalanceerd moeten zijn voor uitzonderlijke koffie. Professionele cuppers beoordelen hoe deze elementen interacteren, waarbij onbalans wijst op verwerkings- of zetfouten, terwijl harmonie optimale kwaliteit en terroir expressie suggereert."
        }
      },
      {
        question: {
          en: "What advanced roasting phenomenon occurs when the 'rate of rise' (RoR) becomes negative during the development phase?",
          es: "¿Qué fenómeno avanzado de tostado ocurre cuando la 'tasa de aumento' (RoR) se vuelve negativa durante la fase de desarrollo?",
          de: "Welches fortschrittliche Röstphänomen tritt auf, wenn die 'Rate of Rise' (RoR) während der Entwicklungsphase negativ wird?",
          nl: "Welk geavanceerd roosterfenomeen treedt op wanneer de 'rate of rise' (RoR) negatief wordt tijdens de ontwikkelingsfase?"
        },
        options: [
          { en: "Flicking or crashing, indicating heat energy depletion and potential baked/underdeveloped flavors", es: "Flicking o crashing, indicando agotamiento de energía térmica y potenciales sabores horneados/poco desarrollados", de: "Flicking oder Crashing, was auf Wärmeenergie-Erschöpfung und potenzielle gebackene/unterentwickelte Aromen hinweist", nl: "Flicking of crashing, wat wijst op uitputting van warmte-energie en potentiële gebakken/onderontwikkelde smaken" },
          { en: "Optimal development achieved", es: "Desarrollo óptimo logrado", de: "Optimale Entwicklung erreicht", nl: "Optimale ontwikkeling bereikt" },
          { en: "First crack beginning", es: "Inicio del primer crack", de: "Beginn des First Crack", nl: "Begin van first crack" },
          { en: "Cooling cycle starting", es: "Inicio del ciclo de enfriamiento", de: "Beginn des Kühlzyklus", nl: "Begin van koelcyclus" }
        ],
        correct: 0,
        explanation: {
          en: "When RoR turns negative (temperature increase rate decreases below zero), it indicates 'flicking' or 'crashing'—the roaster has insufficient thermal energy to properly develop the beans. This results in baked, flat, grassy, or underdeveloped flavors despite reaching target end temperature, as chemical reactions stall.",
          es: "Cuando la RoR se vuelve negativa (la tasa de aumento de temperatura disminuye por debajo de cero), indica 'flicking' o 'crashing'—el tostador tiene energía térmica insuficiente para desarrollar adecuadamente los granos. Esto resulta en sabores horneados, planos, herbáceos o poco desarrollados a pesar de alcanzar la temperatura final objetivo, ya que las reacciones químicas se estancan.",
          de: "Wenn RoR negativ wird (Temperaturanstiegsrate sinkt unter Null), zeigt dies 'Flicking' oder 'Crashing'—der Röster hat unzureichende thermische Energie, um die Bohnen richtig zu entwickeln. Dies führt zu gebackenen, flachen, grasigen oder unterentwickelten Aromen trotz Erreichen der Ziel-Endtemperatur, da chemische Reaktionen zum Stillstand kommen.",
          nl: "Wanneer RoR negatief wordt (temperatuurstijgingssnelheid daalt onder nul), duidt dit op 'flicking' of 'crashing'—de rooster heeft onvoldoende thermische energie om de bonen goed te ontwikkelen. Dit resulteert in gebakken, vlakke, grasachtige of onderontwikkelde smaken ondanks het bereiken van de doel eindtemperatuur, omdat chemische reacties stagneren."
        }
      },
      {
        question: {
          en: "What is the 'coffee-water brewing control chart' and its primary purpose?",
          es: "¿Qué es el 'gráfico de control de preparación café-agua' y cuál es su propósito principal?",
          de: "Was ist das 'Coffee-Water Brewing Control Chart' und was ist sein Hauptzweck?",
          nl: "Wat is de 'coffee-water brewing control chart' en wat is het primaire doel?"
        },
        options: [
          { en: "A graph plotting TDS vs extraction yield to identify ideal, strong, weak, underdeveloped, or bitter brew zones", es: "Un gráfico que traza TDS vs rendimiento de extracción para identificar zonas de preparación ideal, fuerte, débil, poco desarrollada o amarga", de: "Ein Graph, der TDS gegen Extraktionsausbeute darstellt, um ideale, starke, schwache, unterentwickelte oder bittere Brühzonen zu identifizieren", nl: "Een grafiek die TDS tegen extractieopbrengst plot om ideale, sterke, zwakke, onderontwikkelde of bittere zetzones te identificeren" },
          { en: "A temperature measurement tool", es: "Una herramienta de medición de temperatura", de: "Ein Temperaturmesswerkzeug", nl: "Een temperatuurmeetinstrument" },
          { en: "A coffee bean color chart", es: "Una carta de color de granos de café", de: "Eine Kaffeebohnen-Farbkarte", nl: "Een koffieboon kleurenkaart" },
          { en: "A grinder calibration guide", es: "Una guía de calibración de molinillo", de: "Ein Mühlen-Kalibrierungsleitfaden", nl: "Een maalwerk kalibratiegids" }
        ],
        correct: 0,
        explanation: {
          en: "The Brewing Control Chart, developed by the Specialty Coffee Association (SCA), plots TDS (concentration strength) on Y-axis against extraction yield on X-axis. The 'ideal zone' (1.15-1.55% TDS, 18-22% extraction) indicates balanced coffee. Positions outside this zone diagnose specific brewing problems requiring parameter adjustments.",
          es: "El Gráfico de Control de Preparación, desarrollado por la Specialty Coffee Association (SCA), traza el TDS (concentración de fuerza) en el eje Y contra el rendimiento de extracción en el eje X. La 'zona ideal' (1,15-1,55% TDS, 18-22% de extracción) indica café equilibrado. Las posiciones fuera de esta zona diagnostican problemas específicos de preparación que requieren ajustes de parámetros.",
          de: "Das Brewing Control Chart, entwickelt von der Specialty Coffee Association (SCA), trägt TDS (Konzentrationsstärke) auf der Y-Achse gegen Extraktionsausbeute auf der X-Achse auf. Die 'Idealzone' (1,15-1,55% TDS, 18-22% Extraktion) zeigt ausgewogenen Kaffee an. Positionen außerhalb dieser Zone diagnostizieren spezifische Brühprobleme, die Parameteranpassungen erfordern.",
          nl: "De Brewing Control Chart, ontwikkeld door de Specialty Coffee Association (SCA), plot TDS (concentratiesterkte) op Y-as tegen extractieopbrengst op X-as. De 'ideale zone' (1,15-1,55% TDS, 18-22% extractie) geeft gebalanceerde koffie aan. Posities buiten deze zone diagnosticeren specifieke zetproblemen die parameteraanpassingen vereisen."
        }
      },
      {
        question: {
          en: "What is 'chromatographic separation' in coffee brewing and why does it matter?",
          es: "¿Qué es la 'separación cromatográfica' en la preparación de café y por qué es importante?",
          de: "Was ist 'chromatographische Trennung' beim Kaffeebrühen und warum ist sie wichtig?",
          nl: "Wat is 'chromatografische scheiding' bij het zetten van koffie en waarom is het belangrijk?"
        },
        options: [
          { en: "Different compounds extract at different rates creating layered flavors; managing this prevents channeling and ensures uniform extraction", es: "Diferentes compuestos se extraen a diferentes velocidades creando sabores en capas; gestionar esto previene la canalización y asegura extracción uniforme", de: "Verschiedene Verbindungen extrahieren mit unterschiedlichen Raten und erzeugen geschichtete Aromen; dies zu managen verhindert Kanalbildung und gewährleistet gleichmäßige Extraktion", nl: "Verschillende verbindingen extraheren met verschillende snelheden waardoor gelaagde smaken ontstaan; dit beheren voorkomt channeling en zorgt voor uniforme extractie" },
          { en: "Separating coffee grounds by color", es: "Separar los posos de café por color", de: "Kaffeesatz nach Farbe trennen", nl: "Koffiedik scheiden op kleur" },
          { en: "Filtering out caffeine only", es: "Filtrar solo la cafeína", de: "Nur Koffein herausfiltern", nl: "Alleen cafeïne uitfilteren" },
          { en: "Removing water minerals", es: "Eliminar minerales del agua", de: "Wassermineralien entfernen", nl: "Watermineralen verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "In brewing, compounds extract sequentially: acids and lighter aromatics first, then sugars, finally bitter compounds. This chromatographic effect means water path through the coffee bed matters critically—channeling allows water to bypass areas, causing simultaneous under-extraction (sour) and over-extraction (bitter) in different zones.",
          es: "En la preparación, los compuestos se extraen secuencialmente: ácidos y aromáticos más ligeros primero, luego azúcares, finalmente compuestos amargos. Este efecto cromatográfico significa que el camino del agua a través del lecho de café importa críticamente—la canalización permite que el agua evite áreas, causando simultáneamente bajo-extracción (ácido) y sobre-extracción (amargo) en diferentes zonas.",
          de: "Beim Brühen extrahieren Verbindungen sequenziell: Säuren und leichtere Aromastoffe zuerst, dann Zucker, schließlich bittere Verbindungen. Dieser chromatographische Effekt bedeutet, dass der Wasserpfad durch das Kaffeebett kritisch wichtig ist—Kanalbildung ermöglicht Wasser, Bereiche zu umgehen, was gleichzeitig Unterextraktion (sauer) und Überextraktion (bitter) in verschiedenen Zonen verursacht.",
          nl: "Bij het zetten extraheren verbindingen sequentieel: zuren en lichtere aromastoffen eerst, dan suikers, uiteindelijk bittere verbindingen. Dit chromatografische effect betekent dat het waterpad door het koffiebed cruciaal belangrijk is—channeling laat water gebieden omzeilen, wat gelijktijdig onder-extractie (zuur) en over-extractie (bitter) in verschillende zones veroorzaakt."
        }
      },
      {
        question: {
          en: "What is the 'coffee flavor wheel' revision of 2016 primarily based on?",
          es: "¿En qué se basa principalmente la revisión de la 'rueda de sabores del café' de 2016?",
          de: "Worauf basiert die Überarbeitung des 'Coffee Flavor Wheel' von 2016 hauptsächlich?",
          nl: "Waarop is de herziening van het 'coffee flavor wheel' van 2016 voornamelijk gebaseerd?"
        },
        options: [
          { en: "Lexicon-based sensory science with 110 flavor attributes developed through World Coffee Research", es: "Ciencia sensorial basada en léxico con 110 atributos de sabor desarrollados a través de World Coffee Research", de: "Lexikon-basierte Sensorikwissenschaft mit 110 Geschmacksattributen, entwickelt durch World Coffee Research", nl: "Op lexicon gebaseerde sensorische wetenschap met 110 smaakattributen ontwikkeld via World Coffee Research" },
          { en: "Random flavor suggestions from consumers", es: "Sugerencias aleatorias de sabores de consumidores", de: "Zufällige Geschmacksvorschläge von Verbrauchern", nl: "Willekeurige smaaksuggesties van consumenten" },
          { en: "Marketing preferences only", es: "Solo preferencias de marketing", de: "Nur Marketingpräferenzen", nl: "Alleen marketingvoorkeuren" },
          { en: "Historical coffee trade terminology", es: "Terminología histórica del comercio del café", de: "Historische Kaffeehandelsterminologie", nl: "Historische koffiehandelterminologie" }
        ],
        correct: 0,
        explanation: {
          en: "The 2016 SCA/WCR Coffee Taster's Flavor Wheel is based on rigorous sensory lexicon research, establishing 110 standardized flavor attributes through controlled scientific studies. This replaced subjective descriptors with objective, reproducible terminology, creating a universal language for professional coffee evaluation worldwide.",
          es: "La Rueda de Sabores del Catador de Café SCA/WCR de 2016 se basa en investigación rigurosa de léxico sensorial, estableciendo 110 atributos de sabor estandarizados a través de estudios científicos controlados. Esto reemplazó descriptores subjetivos con terminología objetiva y reproducible, creando un lenguaje universal para la evaluación profesional del café en todo el mundo.",
          de: "Das 2016 SCA/WCR Coffee Taster's Flavor Wheel basiert auf rigoroser sensorischer Lexikonforschung, die 110 standardisierte Geschmacksattribute durch kontrollierte wissenschaftliche Studien etabliert. Dies ersetzte subjektive Deskriptoren durch objektive, reproduzierbare Terminologie und schuf eine universelle Sprache für professionelle Kaffeebewertung weltweit.",
          nl: "Het 2016 SCA/WCR Coffee Taster's Flavor Wheel is gebaseerd op rigoureus sensorisch lexicon onderzoek, waarbij 110 gestandaardiseerde smaakattributen zijn vastgesteld via gecontroleerde wetenschappelijke studies. Dit verving subjectieve beschrijvingen met objectieve, reproduceerbare terminologie, waardoor een universele taal voor professionele koffie-evaluatie wereldwijd ontstond."
        }
      },
      {
        question: {
          en: "What is 'turbo espresso' technique and its theoretical basis?",
          es: "¿Qué es la técnica de 'turbo espresso' y cuál es su base teórica?",
          de: "Was ist die 'Turbo Espresso'-Technik und was ist ihre theoretische Grundlage?",
          nl: "Wat is de 'turbo espresso' techniek en wat is de theoretische basis?"
        },
        options: [
          { en: "Using coarser grind and higher brew ratio (1:3-1:4) to achieve faster extraction times (10-15s) while maintaining proper extraction yield", es: "Usar molienda más gruesa y proporción de preparación más alta (1:3-1:4) para lograr tiempos de extracción más rápidos (10-15s) mientras se mantiene el rendimiento de extracción adecuado", de: "Verwendung gröberer Mahlung und höherer Brühverhältnisse (1:3-1:4) zur Erreichung schnellerer Extraktionszeiten (10-15s) bei Beibehaltung angemessener Extraktionsausbeute", nl: "Grovere maling en hogere brew ratio (1:3-1:4) gebruiken om snellere extractietijden (10-15s) te bereiken terwijl juiste extractieopbrengst behouden blijft" },
          { en: "Increasing pump pressure to maximum", es: "Aumentar la presión de la bomba al máximo", de: "Pumpendruck auf Maximum erhöhen", nl: "Pompdruk verhogen tot maximum" },
          { en: "Using pre-ground coffee only", es: "Usar solo café pre-molido", de: "Nur vorgemahlenen Kaffee verwenden", nl: "Alleen voorgemalen koffie gebruiken" },
          { en: "Brewing at near-boiling temperatures", es: "Preparar a temperaturas casi hirviendo", de: "Bei nahe kochenden Temperaturen brühen", nl: "Zetten bij bijna kokende temperaturen" }
        ],
        correct: 0,
        explanation: {
          en: "Turbo espresso challenges traditional 25-30s extraction times by using coarser grinds with higher brew ratios (1:3-1:4 instead of 1:2-1:2.5) and extracting in 10-15 seconds. Theory: coarser particles and higher water volume compensate for shorter time, achieving 18-22% extraction yield with different flavor profile—higher clarity, lower body.",
          es: "El turbo espresso desafía los tiempos de extracción tradicionales de 25-30s usando moliendas más gruesas con proporciones de preparación más altas (1:3-1:4 en lugar de 1:2-1:2,5) y extrayendo en 10-15 segundos. Teoría: partículas más gruesas y mayor volumen de agua compensan el tiempo más corto, logrando 18-22% de rendimiento de extracción con diferente perfil de sabor—mayor claridad, menor cuerpo.",
          de: "Turbo Espresso stellt traditionelle 25-30s Extraktionszeiten in Frage durch Verwendung gröberer Mahlungen mit höheren Brühverhältnissen (1:3-1:4 statt 1:2-1:2,5) und Extraktion in 10-15 Sekunden. Theorie: gröbere Partikel und höheres Wasservolumen kompensieren kürzere Zeit, erreichen 18-22% Extraktionsausbeute mit anderem Geschmacksprofil—höhere Klarheit, geringerer Körper.",
          nl: "Turbo espresso daagt traditionele 25-30s extractietijden uit door grovere malingen te gebruiken met hogere brew ratios (1:3-1:4 in plaats van 1:2-1:2,5) en te extraheren in 10-15 seconden. Theorie: grovere deeltjes en hoger watervolume compenseren kortere tijd, bereiken 18-22% extractieopbrengst met ander smaakprofiel—hogere helderheid, lagere body."
        }
      },
      {
        question: {
          en: "What is the 'coffee compass' decision-making tool used for in troubleshooting espresso?",
          es: "¿Para qué se utiliza la herramienta de toma de decisiones 'brújula del café' en la resolución de problemas de espresso?",
          de: "Wofür wird das 'Coffee Compass' Entscheidungswerkzeug bei der Fehlerbehebung von Espresso verwendet?",
          nl: "Waarvoor wordt de 'coffee compass' besluitvormingstool gebruikt bij het troubleshooten van espresso?"
        },
        options: [
          { en: "Diagnosing extraction problems through taste (sour/bitter, strong/weak) and prescribing grind/dose/yield adjustments", es: "Diagnosticar problemas de extracción a través del sabor (ácido/amargo, fuerte/débil) y prescribir ajustes de molienda/dosis/rendimiento", de: "Diagnose von Extraktionsproblemen durch Geschmack (sauer/bitter, stark/schwach) und Verschreibung von Mahl-/Dosis-/Ausbeuteanpassungen", nl: "Diagnose van extractieproblemen via smaak (zuur/bitter, sterk/zwak) en voorschrijven van maal-/dosering-/opbrengstaanpassingen" },
          { en: "Finding coffee origins on a map", es: "Encontrar orígenes de café en un mapa", de: "Kaffeeherkunft auf einer Karte finden", nl: "Koffie oorsprongen vinden op een kaart" },
          { en: "Measuring magnetic fields in espresso machines", es: "Medir campos magnéticos en máquinas de espresso", de: "Magnetfelder in Espressomaschinen messen", nl: "Magnetische velden in espressomachines meten" },
          { en: "Determining roast date only", es: "Determinar solo la fecha de tostado", de: "Nur Röstdatum bestimmen", nl: "Alleen roostdatum bepalen" }
        ],
        correct: 0,
        explanation: {
          en: "The Coffee Compass is a diagnostic flowchart: if espresso tastes sour+weak (under-extracted, under-concentrated)→grind finer or increase dose; bitter+strong (over-extracted, over-concentrated)→grind coarser or decrease dose. It provides systematic troubleshooting based on taste perception, eliminating guesswork in espresso dialing.",
          es: "La Brújula del Café es un diagrama de flujo de diagnóstico: si el espresso sabe ácido+débil (sub-extraído, sub-concentrado)→moler más fino o aumentar dosis; amargo+fuerte (sobre-extraído, sobre-concentrado)→moler más grueso o disminuir dosis. Proporciona resolución de problemas sistemática basada en percepción del sabor, eliminando conjeturas en el ajuste del espresso.",
          de: "Der Coffee Compass ist ein Diagnose-Flussdiagramm: wenn Espresso sauer+schwach schmeckt (unterextrahiert, unterkonzentriert)→feiner mahlen oder Dosis erhöhen; bitter+stark (überextrahiert, überkonzentriert)→gröber mahlen oder Dosis verringern. Es bietet systematische Fehlerbehebung basierend auf Geschmackswahrnehmung, eliminiert Rätselraten beim Espresso-Einstellen.",
          nl: "De Coffee Compass is een diagnostisch stroomdiagram: als espresso zuur+zwak smaakt (onder-geëxtraheerd, onder-geconcentreerd)→fijner malen of dosering verhogen; bitter+sterk (over-geëxtraheerd, over-geconcentreerd)→grover malen of dosering verlagen. Het biedt systematische troubleshooting gebaseerd op smaakperceptie, elimineert giswerk bij espresso instelling."
        }
      },
      {
        question: {
          en: "What is the theoretical relationship between coffee particle size and extraction kinetics according to surface area models?",
          es: "¿Cuál es la relación teórica entre el tamaño de partícula del café y la cinética de extracción según modelos de área superficial?",
          de: "Was ist die theoretische Beziehung zwischen Kaffeepartikelgröße und Extraktionskinetik laut Oberflächenmodellen?",
          nl: "Wat is de theoretische relatie tussen koffiepartikelgrootte en extractiekinetiek volgens oppervlaktemodellen?"
        },
        options: [
          { en: "Extraction rate is proportional to surface area-to-volume ratio; halving particle diameter quadruples surface area and accelerates extraction", es: "La tasa de extracción es proporcional a la relación área superficial-volumen; reducir a la mitad el diámetro de partícula cuadruplica el área superficial y acelera la extracción", de: "Extraktionsrate ist proportional zum Oberflächen-Volumen-Verhältnis; Halbierung des Partikeldurchmessers vervierfacht Oberfläche und beschleunigt Extraktion", nl: "Extractiesnelheid is evenredig met oppervlakte-volume verhouding; halvering van deeltjesdiameter verviervoudigt oppervlakte en versnelt extractie" },
          { en: "Particle size has no effect on extraction", es: "El tamaño de partícula no tiene efecto en la extracción", de: "Partikelgröße hat keinen Effekt auf Extraktion", nl: "Deeltjesgrootte heeft geen effect op extractie" },
          { en: "Larger particles extract faster always", es: "Las partículas más grandes siempre se extraen más rápido", de: "Größere Partikel extrahieren immer schneller", nl: "Grotere deeltjes extraheren altijd sneller" },
          { en: "Only color matters for extraction speed", es: "Solo el color importa para la velocidad de extracción", de: "Nur Farbe ist wichtig für Extraktionsgeschwindigkeit", nl: "Alleen kleur is belangrijk voor extractiesnelheid" }
        ],
        correct: 0,
        explanation: {
          en: "Extraction kinetics follow surface area models: smaller particles have dramatically higher surface area per unit mass. When particle diameter halves, surface area quadruples (r² relationship) while volume only halves (r³), creating 8× faster mass transfer. This explains why finer grinds extract faster but risk over-extraction and channeling.",
          es: "La cinética de extracción sigue modelos de área superficial: partículas más pequeñas tienen dramáticamente mayor área superficial por unidad de masa. Cuando el diámetro de partícula se reduce a la mitad, el área superficial se cuadruplica (relación r²) mientras el volumen solo se reduce a la mitad (r³), creando transferencia de masa 8× más rápida. Esto explica por qué moliendas más finas extraen más rápido pero arriesgan sobre-extracción y canalización.",
          de: "Extraktionskinetik folgt Oberflächenmodellen: kleinere Partikel haben dramatisch höhere Oberfläche pro Masseeinheit. Wenn Partikeldurchmesser halbiert wird, vervierfacht sich Oberfläche (r²-Beziehung) während Volumen nur halbiert (r³), was 8× schnelleren Massentransfer schafft. Dies erklärt, warum feinere Mahlungen schneller extrahieren aber Überextraktion und Kanalbildung riskieren.",
          nl: "Extractiekinetiek volgt oppervlaktemodellen: kleinere deeltjes hebben dramatisch hoger oppervlakte per massa-eenheid. Wanneer deeltjesdiameter halveert, verviervoudigt oppervlakte (r²-relatie) terwijl volume slechts halveert (r³), wat 8× snellere massaoverdracht creëert. Dit verklaart waarom fijnere malingen sneller extraheren maar risico lopen op over-extractie en channeling."
        }
      },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  } else if (typeof window !== 'undefined') {
    window.level9 = level9;
  }
})();
