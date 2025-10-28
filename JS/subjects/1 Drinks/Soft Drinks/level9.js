// Quiz Level 9: Drinken - Frisdranken (Advanced Research & Innovation)
(function() {
  const level9 = {
    name: {
      en: "Advanced Research & Innovation",
      es: "Investigación Avanzada e Innovación",
      de: "Fortgeschrittene Forschung & Innovation",
      nl: "Geavanceerd Onderzoek & Innovatie"
    },
    questions: [
      {
        question: {
          en: "Which metabolomic technique is most effective for comprehensive flavor profiling in novel beverage formulations?",
          es: "¿Qué técnica metabolómica es más efectiva para el perfilado integral de sabor en formulaciones novedosas de bebidas?",
          de: "Welche metabolomische Technik ist am wirksamsten für umfassende Geschmacksprofilierung in neuartigen Getränkeformulierungen?",
          nl: "Welke metabolomische techniek is het meest effectief voor uitgebreide smaakprofilering in nieuwe drankenformuleringen?"
        },
        options: [
          { en: "LC-MS/MS with QTOF", es: "LC-MS/MS con QTOF", de: "LC-MS/MS mit QTOF", nl: "LC-MS/MS met QTOF" },
          { en: "1H-NMR spectroscopy", es: "Espectroscopía 1H-NMR", de: "1H-NMR-Spektroskopie", nl: "1H-NMR spectroscopie" },
          { en: "GC×GC-TOF-MS", es: "GC×GC-TOF-MS", de: "GC×GC-TOF-MS", nl: "GC×GC-TOF-MS" },
          { en: "CE-MS analysis", es: "Análisis CE-MS", de: "CE-MS-Analyse", nl: "CE-MS analyse" }
        ],
        correct: 2,
        explanation: {
          en: "Two-dimensional gas chromatography time-of-flight mass spectrometry (GC×GC-TOF-MS) provides the highest resolution for volatile compounds crucial to flavor perception.",
          es: "La cromatografía de gases bidimensional con espectrometría de masas de tiempo de vuelo (GC×GC-TOF-MS) proporciona la mayor resolución para compuestos volátiles cruciales para la percepción del sabor.",
          de: "Zweidimensionale Gaschromatographie-Flugzeit-Massenspektrometrie (GC×GC-TOF-MS) bietet die höchste Auflösung für flüchtige Verbindungen, die für die Geschmackswahrnehmung entscheidend sind.",
          nl: "Tweedimensionale gaschromatografie tijd-van-vlucht massaspectrometrie (GC×GC-TOF-MS) biedt de hoogste resolutie voor vluchtige verbindingen cruciaal voor smaakperceptie."
        }
      },
      {
        question: {
          en: "What is the optimal pressure range for supercritical CO2 extraction of natural flavor compounds from botanical sources?",
          es: "¿Cuál es el rango de presión óptimo para la extracción con CO2 supercrítico de compuestos de sabor naturales de fuentes botánicas?",
          de: "Was ist der optimale Druckbereich für die überkritische CO2-Extraktion natürlicher Geschmacksverbindungen aus botanischen Quellen?",
          nl: "Wat is het optimale drukbereik voor superkritische CO2 extractie van natuurlijke smaakverbindingen uit botanische bronnen?"
        },
        options: [
          { en: "50-100 bar", es: "50-100 bar", de: "50-100 bar", nl: "50-100 bar" },
          { en: "150-300 bar", es: "150-300 bar", de: "150-300 bar", nl: "150-300 bar" },
          { en: "400-600 bar", es: "400-600 bar", de: "400-600 bar", nl: "400-600 bar" },
          { en: "800-1000 bar", es: "800-1000 bar", de: "800-1000 bar", nl: "800-1000 bar" }
        ],
        correct: 1,
        explanation: {
          en: "Supercritical CO2 extraction for flavor compounds typically operates at 150-300 bar, balancing extraction efficiency with selectivity for target molecules.",
          es: "La extracción con CO2 supercrítico para compuestos de sabor típicamente opera a 150-300 bar, equilibrando la eficiencia de extracción con la selectividad para moléculas objetivo.",
          de: "Überkritische CO2-Extraktion für Geschmacksverbindungen arbeitet typischerweise bei 150-300 bar und balanciert Extraktionseffizienz mit Selektivität für Zielmoleküle.",
          nl: "Superkritische CO2 extractie voor smaakverbindingen werkt doorgaans bij 150-300 bar, waarmee extractie-efficiëntie en selectiviteit voor doelmoleculen in balans zijn."
        }
      },
      {
        question: {
          en: "Which encapsulation technology provides the highest flavor retention during spray drying of beverage powders?",
          es: "¿Qué tecnología de encapsulación proporciona la mayor retención de sabor durante el secado por aspersión de polvos de bebidas?",
          de: "Welche Einkapselungstechnologie bietet die höchste Geschmacksretention während des Sprühtrocknens von Getränkepulvern?",
          nl: "Welke inkapselingstechnologie biedt de hoogste smaakretentie tijdens sproeidrogen van dranken poeders?"
        },
        options: [
          { en: "Maltodextrin coating", es: "Recubrimiento con maltodextrina", de: "Maltodextrin-Beschichtung", nl: "Maltodextrine coating" },
          { en: "β-cyclodextrin complexation", es: "Complexación con β-ciclodextrina", de: "β-Cyclodextrin-Komplexierung", nl: "β-cyclodextrine complexatie" },
          { en: "Protein-polysaccharide coacervation", es: "Coacervación proteína-polisacárido", de: "Protein-Polysaccharid-Koazervation", nl: "Eiwit-polysacharide coacervatie" },
          { en: "Lipid matrix entrapment", es: "Atrapamiento en matriz lipídica", de: "Lipidmatrix-Einschluss", nl: "Lipide matrix opsluiting" }
        ],
        correct: 2,
        explanation: {
          en: "Protein-polysaccharide coacervation provides superior protection against oxidation and thermal degradation, achieving the highest flavor retention rates.",
          es: "La coacervación proteína-polisacárido proporciona protección superior contra la oxidación y degradación térmica, logrando las tasas más altas de retención de sabor.",
          de: "Protein-Polysaccharid-Koazervation bietet überlegenen Schutz gegen Oxidation und thermische Degradation und erreicht die höchsten Geschmacksretentionsraten.",
          nl: "Eiwit-polysacharide coacervatie biedt superieure bescherming tegen oxidatie en thermische degradatie, waarbij de hoogste smaakretentie percentages worden bereikt."
        }
      },
      {
        question: {
          en: "What is the critical micelle concentration (CMC) threshold for lecithin-based emulsification systems in citrus beverages?",
          es: "¿Cuál es el umbral de concentración micelar crítica (CMC) para sistemas de emulsificación basados en lecitina en bebidas cítricas?",
          de: "Was ist die kritische Mizellkonzentrations-(CMC)-Schwelle für lecithinbasierte Emulgiersysteme in Zitrusgetränken?",
          nl: "Wat is de kritische micel concentratie (CMC) drempel voor lecithine-gebaseerde emulsificatiesystemen in citrusdranken?"
        },
        options: [
          { en: "0.01-0.05%", es: "0.01-0.05%", de: "0.01-0.05%", nl: "0.01-0.05%" },
          { en: "0.1-0.3%", es: "0.1-0.3%", de: "0.1-0.3%", nl: "0.1-0.3%" },
          { en: "0.5-1.0%", es: "0.5-1.0%", de: "0.5-1.0%", nl: "0.5-1.0%" },
          { en: "2.0-5.0%", es: "2.0-5.0%", de: "2.0-5.0%", nl: "2.0-5.0%" }
        ],
        correct: 1,
        explanation: {
          en: "Lecithin in citrus beverages typically requires 0.1-0.3% concentration to achieve effective emulsification and prevent oil separation.",
          es: "La lecitina en bebidas cítricas típicamente requiere una concentración de 0.1-0.3% para lograr emulsificación efectiva y prevenir la separación del aceite.",
          de: "Lecithin in Zitrusgetränken benötigt typischerweise 0.1-0.3% Konzentration, um effektive Emulgierung zu erreichen und Ölseparation zu verhindern.",
          nl: "Lecithine in citrusdranken vereist doorgaans 0.1-0.3% concentratie om effectieve emulsificatie te bereiken en oliescheiding te voorkomen."
        }
      },
      {
        question: {
          en: "Which advanced filtration technology provides the highest rejection rate for virus-sized particles in cold-processed beverages?",
          es: "¿Qué tecnología de filtración avanzada proporciona la mayor tasa de rechazo para partículas del tamaño de virus en bebidas procesadas en frío?",
          de: "Welche fortgeschrittene Filtrationstechnologie bietet die höchste Rückhalterate für virusgroße Partikel in kalt verarbeiteten Getränken?",
          nl: "Welke geavanceerde filtratietechnologie biedt de hoogste afwijzingsgraad voor virus-grote deeltjes in koud verwerkte dranken?"
        },
        options: [
          { en: "Ultrafiltration (10-100 kDa)", es: "Ultrafiltración (10-100 kDa)", de: "Ultrafiltration (10-100 kDa)", nl: "Ultrafiltratie (10-100 kDa)" },
          { en: "Nanofiltration (200-1000 Da)", es: "Nanofiltración (200-1000 Da)", de: "Nanofiltration (200-1000 Da)", nl: "Nanofiltratie (200-1000 Da)" },
          { en: "Reverse osmosis (<100 Da)", es: "Ósmosis inversa (<100 Da)", de: "Umkehrosmose (<100 Da)", nl: "Omgekeerde osmose (<100 Da)" },
          { en: "Microfiltration (0.1-0.2 μm)", es: "Microfiltración (0.1-0.2 μm)", de: "Mikrofiltration (0.1-0.2 μm)", nl: "Microfiltratie (0.1-0.2 μm)" }
        ],
        correct: 3,
        explanation: {
          en: "Microfiltration with 0.1-0.2 μm pore size provides optimal virus rejection while maintaining beverage quality and nutritional properties.",
          es: "La microfiltración con tamaño de poro de 0.1-0.2 μm proporciona rechazo óptimo de virus mientras mantiene la calidad de la bebida y propiedades nutricionales.",
          de: "Mikrofiltration mit 0.1-0.2 μm Porengröße bietet optimale Virusrückhaltung bei Erhaltung der Getränkequalität und Nährstoffeigenschaften.",
          nl: "Microfiltratie met 0.1-0.2 μm poriëngrootte biedt optimale virusafwijzing terwijl drankenkwaliteit en voedingseigenschappen behouden blijven."
        }
      },
      {
        question: {
          en: "What is the theoretical maximum CO2 solubility in water at 0°C and 1 atm according to Henry's Law?",
          es: "¿Cuál es la solubilidad teórica máxima de CO2 en agua a 0°C y 1 atm según la Ley de Henry?",
          de: "Was ist die theoretische maximale CO2-Löslichkeit in Wasser bei 0°C und 1 atm nach dem Henry'schen Gesetz?",
          nl: "Wat is de theoretische maximale CO2 oplosbaarheid in water bij 0°C en 1 atm volgens de Wet van Henry?"
        },
        options: [
          { en: "0.5 volumes", es: "0.5 volúmenes", de: "0.5 Volumina", nl: "0.5 volumes" },
          { en: "1.0 volumes", es: "1.0 volúmenes", de: "1.0 Volumina", nl: "1.0 volumes" },
          { en: "1.7 volumes", es: "1.7 volúmenes", de: "1.7 Volumina", nl: "1.7 volumes" },
          { en: "3.0 volumes", es: "3.0 volúmenes", de: "3.0 Volumina", nl: "3.0 volumes" }
        ],
        correct: 2,
        explanation: {
          en: "At 0°C and 1 atm, the theoretical maximum CO2 solubility in pure water is approximately 1.7 volumes according to Henry's Law calculations.",
          es: "A 0°C y 1 atm, la solubilidad teórica máxima de CO2 en agua pura es aproximadamente 1.7 volúmenes según los cálculos de la Ley de Henry.",
          de: "Bei 0°C und 1 atm beträgt die theoretische maximale CO2-Löslichkeit in reinem Wasser etwa 1.7 Volumina nach Henry'schen Gesetzberechnungen.",
          nl: "Bij 0°C en 1 atm is de theoretische maximale CO2 oplosbaarheid in puur water ongeveer 1.7 volumes volgens Wet van Henry berekeningen."
        }
      },
      {
        question: {
          en: "Which molecular mechanism is responsible for astringency perception in polyphenol-rich beverages?",
          es: "¿Qué mecanismo molecular es responsable de la percepción de astringencia en bebidas ricas en polifenoles?",
          de: "Welcher molekulare Mechanismus ist für die Astringenz-Wahrnehmung in polyphenolreichen Getränken verantwortlich?",
          nl: "Welk moleculair mechanisme is verantwoordelijk voor astringentie perceptie in polyfenol-rijke dranken?"
        },
        options: [
          { en: "pH-induced receptor activation", es: "Activación de receptores inducida por pH", de: "pH-induzierte Rezeptoraktivierung", nl: "pH-geïnduceerde receptor activatie" },
          { en: "Tannin-protein precipitation and saliva viscosity changes", es: "Precipitación tanino-proteína y cambios de viscosidad de saliva", de: "Tannin-Protein-Präzipitation und Speichelviskositätsveränderungen", nl: "Tannine-eiwit precipitatie en speeksel viscositeit veranderingen" },
          { en: "Direct bitter taste receptor binding", es: "Unión directa a receptores de sabor amargo", de: "Direkte Bittergeschmacksrezeptor-Bindung", nl: "Directe bittere smaak receptor binding" },
          { en: "Osmotic pressure modulation", es: "Modulación de presión osmótica", de: "Osmotische Druckmodulation", nl: "Osmotische druk modulatie" }
        ],
        correct: 1,
        explanation: {
          en: "Astringency results from tannin-protein interactions that precipitate salivary proteins, reducing lubrication and creating the characteristic dry, puckering sensation.",
          es: "La astringencia resulta de interacciones tanino-proteína que precipitan proteínas salivales, reduciendo la lubricación y creando la sensación característica seca y fruncida.",
          de: "Astringenz entsteht durch Tannin-Protein-Wechselwirkungen, die Speichelproteine ausfällen, die Schmierung reduzieren und das charakteristische trockene, zusammenziehende Gefühl erzeugen.",
          nl: "Astringentie ontstaat door tannine-eiwit interacties die speekseleiwitten neerslaan, smering verminderen en de karakteristieke droge, samentrekkende sensatie creëren."
        }
      },
      {
        question: {
          en: "What is the optimal particle size distribution for stable foam formation in protein-enriched beverages?",
          es: "¿Cuál es la distribución óptima de tamaño de partícula para la formación estable de espuma en bebidas enriquecidas con proteínas?",
          de: "Was ist die optimale Partikelgrößenverteilung für stabile Schaumbildung in proteinangereicherten Getränken?",
          nl: "Wat is de optimale deeltjesgrootte verdeling voor stabiele schuimvorming in eiwit-verrijkte dranken?"
        },
        options: [
          { en: "0.1-1 μm uniform distribution", es: "Distribución uniforme de 0.1-1 μm", de: "0.1-1 μm gleichmäßige Verteilung", nl: "0.1-1 μm uniforme verdeling" },
          { en: "1-10 μm bimodal distribution", es: "Distribución bimodal de 1-10 μm", de: "1-10 μm bimodale Verteilung", nl: "1-10 μm bimodale verdeling" },
          { en: "10-100 μm polydisperse system", es: "Sistema polidisperso de 10-100 μm", de: "10-100 μm polydisperses System", nl: "10-100 μm polydispers systeem" },
          { en: "100-1000 μm wide distribution", es: "Distribución amplia de 100-1000 μm", de: "100-1000 μm breite Verteilung", nl: "100-1000 μm brede verdeling" }
        ],
        correct: 1,
        explanation: {
          en: "Bimodal particle distribution (1-10 μm) provides optimal foam stability by combining small particles for interfacial stabilization with larger particles for mechanical strength.",
          es: "La distribución bimodal de partículas (1-10 μm) proporciona estabilidad óptima de espuma combinando partículas pequeñas para estabilización interfacial con partículas más grandes para resistencia mecánica.",
          de: "Bimodale Partikelverteilung (1-10 μm) bietet optimale Schaumstabilität durch Kombination kleiner Partikel für Grenzflächenstabilisierung mit größeren Partikeln für mechanische Festigkeit.",
          nl: "Bimodale deeltjesverdeling (1-10 μm) biedt optimale schuimstabiliteit door kleine deeltjes voor oppervlakte stabilisatie te combineren met grotere deeltjes voor mechanische sterkte."
        }
      },
      {
        question: {
          en: "Which spectroscopic technique provides real-time monitoring of Maillard reaction kinetics during thermal processing?",
          es: "¿Qué técnica espectroscópica proporciona monitoreo en tiempo real de la cinética de reacción de Maillard durante el procesamiento térmico?",
          de: "Welche spektroskopische Technik bietet Echtzeitüberwachung der Maillard-Reaktionskinetik während der thermischen Verarbeitung?",
          nl: "Welke spectroscopische techniek biedt real-time monitoring van Maillard reactie kinetiek tijdens thermische verwerking?"
        },
        options: [
          { en: "UV-Vis absorption at 280 nm", es: "Absorción UV-Vis a 280 nm", de: "UV-Vis-Absorption bei 280 nm", nl: "UV-Vis absorptie bij 280 nm" },
          { en: "Fluorescence excitation at 347 nm", es: "Excitación de fluorescencia a 347 nm", de: "Fluoreszenzanregung bei 347 nm", nl: "Fluorescentie excitatie bij 347 nm" },
          { en: "Mid-IR analysis at 1650-1750 cm⁻¹", es: "Análisis mid-IR a 1650-1750 cm⁻¹", de: "Mid-IR-Analyse bei 1650-1750 cm⁻¹", nl: "Mid-IR analyse bij 1650-1750 cm⁻¹" },
          { en: "Raman spectroscopy at 1560 cm⁻¹", es: "Espectroscopía Raman a 1560 cm⁻¹", de: "Raman-Spektroskopie bei 1560 cm⁻¹", nl: "Raman spectroscopie bij 1560 cm⁻¹" }
        ],
        correct: 1,
        explanation: {
          en: "Fluorescence excitation at 347 nm specifically detects advanced glycation end products (AGEs) formed during Maillard reactions, enabling real-time kinetic monitoring.",
          es: "La excitación de fluorescencia a 347 nm detecta específicamente productos finales de glicación avanzada (AGEs) formados durante las reacciones de Maillard, permitiendo monitoreo cinético en tiempo real.",
          de: "Fluoreszenzanregung bei 347 nm detektiert spezifisch fortgeschrittene Glykationsendprodukte (AGEs), die während Maillard-Reaktionen gebildet werden, und ermöglicht Echtzeitkinetik-Überwachung.",
          nl: "Fluorescentie excitatie bij 347 nm detecteert specifiek geavanceerde glycatie eindproducten (AGEs) gevormd tijdens Maillard reacties, wat real-time kinetische monitoring mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is the optimal hydraulic residence time for continuous ozonation systems in beverage water treatment?",
          es: "¿Cuál es el tiempo de residencia hidráulico óptimo para sistemas de ozonización continua en tratamiento de agua para bebidas?",
          de: "Was ist die optimale hydraulische Verweilzeit für kontinuierliche Ozonisierungssysteme in der Getränkewasseraufbereitung?",
          nl: "Wat is de optimale hydraulische verblijftijd voor continue ozonisatie systemen in drankenwaterbehandeling?"
        },
        options: [
          { en: "30-60 seconds", es: "30-60 segundos", de: "30-60 Sekunden", nl: "30-60 seconden" },
          { en: "2-5 minutes", es: "2-5 minutos", de: "2-5 Minuten", nl: "2-5 minuten" },
          { en: "10-15 minutes", es: "10-15 minutos", de: "10-15 Minuten", nl: "10-15 minuten" },
          { en: "30-45 minutes", es: "30-45 minutos", de: "30-45 Minuten", nl: "30-45 minuten" }
        ],
        correct: 1,
        explanation: {
          en: "Optimal ozonation requires 2-5 minutes contact time to achieve effective microbial inactivation while preventing excessive oxidation of beneficial compounds.",
          es: "La ozonización óptima requiere 2-5 minutos de tiempo de contacto para lograr inactivación microbiana efectiva mientras previene la oxidación excesiva de compuestos beneficiosos.",
          de: "Optimale Ozonisierung erfordert 2-5 Minuten Kontaktzeit, um effektive mikrobielle Inaktivierung zu erreichen und gleichzeitig übermäßige Oxidation nützlicher Verbindungen zu verhindern.",
          nl: "Optimale ozonisatie vereist 2-5 minuten contacttijd om effectieve microbiële inactivatie te bereiken terwijl excessieve oxidatie van nuttige verbindingen wordt voorkomen."
        }
      },
      {
        question: {
          en: "What is 'fouling resistance' (Rf) calculation in beverage heat exchangers and its implications?",
          es: "¿Qué es cálculo 'resistencia incrustación' (Rf) en intercambiadores calor bebidas y sus implicaciones?",
          de: "Was ist 'Verschmutzungswiderstand' (Rf) Berechnung in Getränke-Wärmetauschern und ihre Implikationen?",
          nl: "Wat is 'vervuilingsweerstand' (Rf) berekening in dranken warmtewisselaars en zijn implicaties?"
        },
        options: [
          { en: "Rf = 1/U_dirty - 1/U_clean; increasing Rf indicates heat transfer decline from protein/mineral deposits requiring CIP escalation", es: "Rf = 1/U_sucio - 1/U_limpio; aumento Rf indica declive transferencia calor de depósitos proteína/minerales requiriendo escalada CIP", de: "Rf = 1/U_schmutzig - 1/U_sauber; steigendes Rf zeigt Wärmeübertragungsabnahme von Protein/Mineralablagerungen erfordert CIP-Eskalation", nl: "Rf = 1/U_vuil - 1/U_schoon; stijgende Rf duidt warmteoverdracht afname van eiwit/mineraal afzettingen vereisend CIP escalatie" },
          { en: "Only temperature difference", es: "Solo diferencia temperatura", de: "Nur Temperaturdifferenz", nl: "Alleen temperatuurverschil" },
          { en: "Only flow rate changes", es: "Solo cambios tasa flujo", de: "Nur Durchflussratenänderungen", nl: "Alleen stroomsnelheidsveranderingen" },
          { en: "Only pressure loss", es: "Solo pérdida presión", de: "Nur Druckverlust", nl: "Alleen drukverlies" }
        ],
        correct: 0,
        explanation: {
          en: "Fouling resistance quantifies thermal efficiency decline: Rf = 1/U_dirty - 1/U_clean where U is overall heat transfer coefficient (W/m²·K). Clean plate heat exchangers: U = 3000-5000; after fouling: U drops to 2000-3000, increasing Rf from 0 to 0.0002-0.0003 m²·K/W. Fouling mechanisms in soft drinks: protein denaturation (milk-based), calcium phosphate scaling (hard water), caramelization (sugar-based), biofilm formation (microbial). Consequences: reduced thermal efficiency (longer processing times, higher energy costs), uneven heating (compromised pasteurization), increased pressure drop (pump strain). Monitoring: inline temperature/pressure sensors calculating U in real-time; typical CIP triggers when Rf > 0.0003 or U drops 20-30%. Prevention: velocity >1.5 m/s (turbulent flow reduces deposits), temperature control <85°C (limits protein denaturation), acid CIP cycles (dissolve mineral scale), alkaline CIP (remove proteins). Design: corrugated plates creating high shear zones, cleanability factors in plate geometry selection."
        }
      },
      {
        question: {
          en: "What is 'microfluidic emulsification' for nanoemulsion beverage production?",
          es: "¿Qué es 'emulsificación microfluídica' para producción bebidas nanoemulsión?",
          de: "Was ist 'mikrofluidische Emulgierung' für Nanoemulsions-Getränkeproduktion?",
          nl: "Wat is 'microfluïdische emulsificatie' voor nanoemulsie drankenproductie?"
        },
        options: [
          { en: "Controlled droplet generation <200nm via microchannel geometry for bioavailability enhancement", es: "Generación gotas controlada <200nm vía geometría microcanal para mejora biodisponibilidad", de: "Kontrollierte Tröpfchenbildung <200nm über Mikrokanalgeometrie für Bioverfügbarkeitsverbesserung", nl: "Gecontroleerde druppel generatie <200nm via microkanaal geometrie voor biobeschikbaarheid verbetering" },
          { en: "Only stirring faster", es: "Solo agitar más rápido", de: "Nur schneller rühren", nl: "Alleen sneller roeren" },
          { en: "Only higher temperature", es: "Solo temperatura más alta", de: "Nur höhere Temperatur", nl: "Alleen hogere temperatuur" },
          { en: "Only more surfactant", es: "Solo más surfactante", de: "Nur mehr Tensid", nl: "Alleen meer surfactant" }
        ],
        correct: 0,
        explanation: {
          en: "Microfluidic devices use precisely engineered microchannels (10-500 μm) creating controlled shear/elongational flows for monodisperse nanoemulsion droplet formation. Functional beverage applications include enhanced bioavailability of curcumin, resveratrol, omega-3, fat-soluble vitamins."
        }
      },
      {
        question: {
          en: "What is 'CRISPR-based biosensors' for real-time pathogen detection in beverage lines?",
          es: "¿Qué son 'biosensores basados CRISPR' para detección patógenos tiempo real en líneas bebidas?",
          de: "Was sind 'CRISPR-basierte Biosensoren' für Echtzeit-Pathogendetektion in Getränkelinien?",
          nl: "Wat zijn 'CRISPR-gebaseerde biosensoren' voor real-time pathogeen detectie in drankenlijnen?"
        },
        options: [
          { en: "Cas protein detecting specific DNA/RNA sequences with fluorescent/electrochemical readout in <30min for E.coli, Salmonella, Listeria", es: "Proteína Cas detectando secuencias DNA/RNA específicas con lectura fluorescente/electroquímica en <30min para E.coli, Salmonella, Listeria", de: "Cas-Protein erkennt spezifische DNA/RNA-Sequenzen mit fluoreszierender/elektrochemischer Ablesung in <30min für E.coli, Salmonella, Listeria", nl: "Cas eiwit detecterend specifieke DNA/RNA sequenties met fluorescente/elektrochemische uitlezing in <30min voor E.coli, Salmonella, Listeria" },
          { en: "Only DNA sequencing", es: "Solo secuenciación DNA", de: "Nur DNA-Sequenzierung", nl: "Alleen DNA sequencing" },
          { en: "Only cell culture", es: "Solo cultivo celular", de: "Nur Zellkultur", nl: "Alleen celkweek" },
          { en: "Only PCR testing", es: "Solo prueba PCR", de: "Nur PCR-Test", nl: "Alleen PCR testen" }
        ],
        correct: 0,
        explanation: {
          en: "CRISPR-Cas systems (Cas12/Cas13) detect target pathogen nucleic acids with single-base specificity. Upon binding, collateral cleavage activity releases fluorophore or generates electrochemical signal. Advantages: rapid (<30min vs. 24-48hr culture), sensitive (10-100 CFU/mL), field-deployable, multiplexed detection."
        }
      },
      {
        question: {
          en: "What is 'additive manufacturing' (3D printing) for customized beverage production nozzles?",
          es: "¿Qué es 'fabricación aditiva' (impresión 3D) para boquillas producción bebidas personalizadas?",
          de: "Was ist 'additive Fertigung' (3D-Druck) für kundenspezifische Getränkeproduktionsdüsen?",
          nl: "Wat is 'additieve fabricage' (3D printen) voor aangepaste drankenproductie mondstukken?"
        },
        options: [
          { en: "Layer-by-layer metal/polymer deposition enabling complex geometries for optimized spray patterns, mixing, carbonation", es: "Deposición metal/polímero capa por capa permitiendo geometrías complejas para patrones rociado, mezcla, carbonatación optimizados", de: "Schicht-für-Schicht Metall/Polymer-Abscheidung ermöglicht komplexe Geometrien für optimierte Sprühmuster, Mischung, Karbonisierung", nl: "Laag-voor-laag metaal/polymeer depositie mogelijk makend complexe geometrieën voor geoptimaliseerde sproeipatronen, menging, carbonatie" },
          { en: "Only traditional machining", es: "Solo mecanizado tradicional", de: "Nur traditionelle Bearbeitung", nl: "Alleen traditionele bewerking" },
          { en: "Only casting", es: "Solo fundición", de: "Nur Gießen", nl: "Alleen gieten" },
          { en: "Only molding", es: "Solo moldeado", de: "Nur Formen", nl: "Alleen vormgeven" }
        ],
        correct: 0,
        explanation: {
          en: "3D printing (SLS, DMLS, SLA) creates intricate internal channels impossible via conventional manufacturing. Applications: optimized carbonator nozzles (enhanced CO₂ dissolution), static mixers (improved homogeneity), spray dryer atomizers (controlled droplet size), rapid prototyping (days vs. weeks), on-demand spare parts."
        }
      },
      {
        question: {
          en: "What is 'metabolic flux analysis' (MFA) for optimizing fermentation in kombucha-style soft drinks?",
          es: "¿Qué es 'análisis flujo metabólico' (MFA) para optimizar fermentación en refrescos estilo kombucha?",
          de: "Was ist 'metabolische Flussanalyse' (MFA) zur Optimierung der Fermentation in Kombucha-artigen Erfrischungsgetränken?",
          nl: "Wat is 'metabolische flux analyse' (MFA) voor optimaliseren fermentatie in kombucha-stijl frisdranken?"
        },
        options: [
          { en: "13C isotope tracing quantifying carbon flux through metabolic pathways predicting flavor compound yields, fermentation time, pH trajectory", es: "Rastreo isótopo 13C cuantificando flujo carbono a través vías metabólicas prediciendo rendimientos compuestos sabor, tiempo fermentación, trayectoria pH", de: "13C-Isotopen-Verfolgung quantifiziert Kohlenstofffluss durch Stoffwechselwege vorhersagend Aromaverbindungsausbeuten, Fermentationszeit, pH-Verlauf", nl: "13C isotoop tracering kwantificerend koolstof flux door metabole routes voorspellend smaakstof opbrengsten, fermentatie tijd, pH traject" },
          { en: "Only measuring pH", es: "Solo medir pH", de: "Nur pH messen", nl: "Alleen pH meten" },
          { en: "Only counting cells", es: "Solo contar células", de: "Nur Zellen zählen", nl: "Alleen cellen tellen" },
          { en: "Only taste testing", es: "Solo prueba sabor", de: "Nur Geschmackstest", nl: "Alleen smaaktest" }
        ],
        correct: 0,
        explanation: {
          en: "MFA uses 13C-labeled substrates (glucose, fructose) tracking carbon atom fate through yeast/bacteria metabolism. GC-MS/LC-MS measures labeling patterns in metabolites, computational models calculate flux rates (reaction velocities). Optimizes: acetic acid:ethanol ratio, gluconic acid production (flavor), polyphenol biotransformation, probiotic viability, batch time reduction."
        }
      },
      {
        question: {
          en: "What is 'ohmic heating' for continuous beverage pasteurization?",
          es: "¿Qué es 'calentamiento óhmico' para pasteurización continua bebidas?",
          de: "Was ist 'Ohmsche Erhitzung' für kontinuierliche Getränkepasteurisierung?",
          nl: "Wat is 'ohmische verwarming' voor continue dranken pasteurisatie?"
        },
        options: [
          { en: "Direct electrical current through beverage generating uniform volumetric heating avoiding surface overheating, rapid heating rates 1-10°C/s", es: "Corriente eléctrica directa a través bebida generando calentamiento volumétrico uniforme evitando sobrecalentamiento superficie, tasas calentamiento rápidas 1-10°C/s", de: "Direkter elektrischer Strom durch Getränk erzeugt gleichmäßige volumetrische Erwärmung vermeidet Oberflächenüberhitzung, schnelle Heizraten 1-10°C/s", nl: "Directe elektrische stroom door drank genererend uniforme volumetrische verwarming vermijdend oppervlakte oververhitting, snelle verwarmingssnelheden 1-10°C/s" },
          { en: "Only microwave heating", es: "Solo calentamiento microondas", de: "Nur Mikrowellenerhitzung", nl: "Alleen magnetron verwarming" },
          { en: "Only steam injection", es: "Solo inyección vapor", de: "Nur Dampfinjektion", nl: "Alleen stoom injectie" },
          { en: "Only hot plates", es: "Solo placas calientes", de: "Nur Heizplatten", nl: "Alleen hete platen" }
        ],
        correct: 0,
        explanation: {
          en: "Ohmic heating passes AC current (50-60 Hz, 100-10000 V/m) through beverage between electrodes. Electrical resistance generates heat directly within product (Q = I²R). Advantages: no hot surfaces (no fouling/burning), rapid heating (preserves nutrients/flavor), uniform temperature (particulate-containing beverages), energy-efficient (>90% vs. 60-70% conventional). Applications: fruit juices with pulp, plant-based milks, liquid eggs. Requirements: ionic conductivity control, electrode materials (titanium, stainless steel), frequency optimization."
        }
      },
      {
        question: {
          en: "What is 'sono-crystallization' for controlling sugar crystal size in beverage syrups?",
          es: "¿Qué es 'sono-cristalización' para controlar tamaño cristal azúcar en jarabes bebidas?",
          de: "Was ist 'Sono-Kristallisation' zur Kontrolle der Zuckerkristallgröße in Getränkesirupen?",
          nl: "Wat is 'sono-kristallisatie' voor controle suiker kristal grootte in dranken siropen?"
        },
        options: [
          { en: "Ultrasonic waves (20-100 kHz) inducing cavitation creating nucleation sites for uniform small crystals preventing graininess", es: "Ondas ultrasónicas (20-100 kHz) induciendo cavitación creando sitios nucleación para cristales pequeños uniformes previniendo granulosidad", de: "Ultraschallwellen (20-100 kHz) induzieren Kavitation schaffen Nukleationsstellen für einheitliche kleine Kristalle verhindern Körnigkeit", nl: "Ultrasone golven (20-100 kHz) inducerend cavitatie creërend nucleatie sites voor uniforme kleine kristallen voorkomen korreligheid" },
          { en: "Only slow cooling", es: "Solo enfriamiento lento", de: "Nur langsames Abkühlen", nl: "Alleen langzaam koelen" },
          { en: "Only stirring", es: "Solo agitar", de: "Nur Rühren", nl: "Alleen roeren" },
          { en: "Only seeding", es: "Solo sembrar", de: "Nur Säen", nl: "Alleen zaaien" }
        ],
        correct: 0,
        explanation: {
          en: "Ultrasound creates acoustic cavitation—microscopic bubbles imploding generate localized pressure/temperature spikes and micro-jets. Effects: increased nucleation rate (more crystals formed simultaneously), reduced metastable zone width (faster crystallization), smaller mean crystal size (10-50 μm vs. 100-500 μm conventional), narrower size distribution. Applications: fountain syrup production (preventing settling/clogging), fondant manufacturing, preventing sucrose crystallization in high-Brix beverages. Parameters: frequency (20-40 kHz optimal), power (5-20 W/cm²), pulsing patterns."
        }
      },
      {
        question: {
          en: "What is 'photocatalytic oxidation' using TiO₂ for beverage packaging surface decontamination?",
          es: "¿Qué es 'oxidación fotocatalítica' usando TiO₂ para descontaminación superficie empaque bebidas?",
          de: "Was ist 'photokatalytische Oxidation' mit TiO₂ zur Dekontamination von Getränkeverpackungsoberflächen?",
          nl: "Wat is 'fotokatalytische oxidatie' gebruikmakend van TiO₂ voor dranken verpakking oppervlakte decontaminatie?"
        },
        options: [
          { en: "UV light activating TiO₂ coating generating reactive oxygen species destroying bacteria/viruses/biofilms on bottles/caps without chemical residues", es: "Luz UV activando recubrimiento TiO₂ generando especies reactivas oxígeno destruyendo bacterias/virus/biopelículas en botellas/tapas sin residuos químicos", de: "UV-Licht aktiviert TiO₂-Beschichtung erzeugt reaktive Sauerstoffspezies zerstört Bakterien/Viren/Biofilme auf Flaschen/Kappen ohne chemische Rückstände", nl: "UV licht activerend TiO₂ coating genererend reactieve zuurstof soorten vernietigt bacteriën/virussen/biofilms op flessen/doppen zonder chemische residuen" },
          { en: "Only washing with water", es: "Solo lavar con agua", de: "Nur mit Wasser waschen", nl: "Alleen wassen met water" },
          { en: "Only heat treatment", es: "Solo tratamiento calor", de: "Nur Wärmebehandlung", nl: "Alleen warmtebehandeling" },
          { en: "Only alcohol wipes", es: "Solo toallitas alcohol", de: "Nur Alkoholtücher", nl: "Alleen alcohol doekjes" }
        ],
        correct: 0,
        explanation: {
          en: "TiO₂ photocatalyst absorbs UV (<380nm) generating electron-hole pairs. Electrons reduce O₂ to superoxide (O₂⁻), holes oxidize H₂O/OH⁻ to hydroxyl radicals (•OH). These reactive species non-selectively oxidize organic contaminants and microbial cells causing membrane rupture, DNA damage. Applications: self-sterilizing bottle surfaces (continuous antimicrobial effect), cap liners, filling equipment surfaces. Advantages: no consumables (catalytic cycle), works at room temperature, broad spectrum (bacteria, viruses, fungi, spores), no disinfection byproducts. Coatings applied via sol-gel, sputtering, CVD. Growing use in aseptic lines reducing chemical sanitizer dependence."
        }
      },
      {
        question: {
          en: "What is 'dielectric spectroscopy' for real-time monitoring of beverage fermentation/aging?",
          es: "¿Qué es 'espectroscopía dieléctrica' para monitoreo tiempo real fermentación/envejecimiento bebidas?",
          de: "Was ist 'dielektrische Spektroskopie' für Echtzeit-Überwachung von Getränkefermentation/-alterung?",
          nl: "Wat is 'diëlektrische spectroscopie' voor real-time monitoring van dranken fermentatie/rijping?"
        },
        options: [
          { en: "Measuring complex permittivity (0.1Hz-10GHz) tracking cell membrane polarization, ion mobility, biomass, metabolite changes non-invasively", es: "Medir permitividad compleja (0.1Hz-10GHz) rastreando polarización membrana celular, movilidad iones, biomasa, cambios metabolitos no invasivamente", de: "Messung komplexer Permittivität (0.1Hz-10GHz) verfolgt Zellmembranpolarisation, Ionenmobilität, Biomasse, Metabolitänderungen nicht-invasiv", nl: "Meten complexe permittiviteit (0.1Hz-10GHz) tracking cel membraan polarisatie, ion mobiliteit, biomassa, metaboliet veranderingen niet-invasief" },
          { en: "Only pH measurement", es: "Solo medición pH", de: "Nur pH-Messung", nl: "Alleen pH meting" },
          { en: "Only optical density", es: "Solo densidad óptica", de: "Nur optische Dichte", nl: "Alleen optische dichtheid" },
          { en: "Only temperature", es: "Solo temperatura", de: "Nur Temperatur", nl: "Alleen temperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Dielectric spectroscopy applies alternating electric field measuring frequency-dependent complex permittivity (ε* = ε' - jε'') reflecting dielectric relaxation processes. In fermentation: β-dispersion (kHz-MHz range) from cell membrane interfacial polarization correlates with viable biomass; α-dispersion (Hz-kHz) from ionic double layer reflects metabolite concentrations. Advantages: non-invasive sensors (inline probes), real-time continuous measurement, distinguishes viable vs. dead cells, no sampling required. Applications: monitoring yeast fermentation kinetics, lactic acid bacteria growth in probiotic beverages, kombucha SCOBY activity. Correlations: permittivity vs. cell density (R²>0.95), conductivity vs. ethanol/organic acid production. Enables predictive control, early contamination detection."
        }
      },
      {
        question: {
          en: "What is 'electro-membrane extraction' for selective flavor compound recovery from beverage waste streams?",
          es: "¿Qué es 'extracción electro-membrana' para recuperación selectiva compuestos sabor de corrientes residuales bebidas?",
          de: "Was ist 'Elektro-Membran-Extraktion' zur selektiven Aromaverbindungsrückgewinnung aus Getränkeabfallströmen?",
          nl: "Wat is 'elektro-membraan extractie' voor selectieve smaakstof terugwinning uit dranken afvalstromen?"
        },
        options: [
          { en: "Electric field driving charged flavor molecules through ion-exchange membranes enabling concentration/purification for upcycling", es: "Campo eléctrico impulsando moléculas sabor cargadas a través membranas intercambio iónico permitiendo concentración/purificación para upcycling", de: "Elektrisches Feld treibt geladene Aromamoleküle durch Ionenaustauschermembranen ermöglicht Konzentration/Reinigung für Upcycling", nl: "Elektrisch veld drijvend geladen smaak moleculen door ion-uitwisseling membranen mogelijk makend concentratie/zuivering voor upcycling" }
        ],
        correct: 0,
        explanation: {
          en: "Combines electrodialysis with selective membranes. Applied voltage (5-20 V) drives ionized/ionizable compounds through cation/anion-exchange membranes based on charge. Selectively extracts organic acids (citric, malic), amino acids, phenolic compounds from waste streams (spent citrus peels, pomace, brewery waste). Advantages: low temperature (prevents degradation), selective separation (removes unwanted components), concentrates compounds 10-100x, energy-efficient vs. evaporation. Circular economy application: recovering valuable flavors/bioactives from production waste for formulation inputs. Growing with sustainability mandates, waste valorization economics."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  } else if (typeof window !== 'undefined') {
    window.level9 = level9;
  }
})();
