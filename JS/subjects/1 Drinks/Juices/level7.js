// Quiz Level 7: Drinken - Sappen (Juice Processing Technology)
(function() {
  const level7 = {
    name: {
      en: "Juice Processing Technology",
      es: "Tecnología de Procesamiento de Jugos",
      de: "Saftverarbeitungstechnologie",
      nl: "Sapverwerkingstechnologie"
    },
    questions: [
      {
        question: {
          en: "What is the optimal pressure and temperature combination for high-pressure processing (HPP) of fruit juices to achieve 5-log reduction of pathogens?",
          es: "¿Cuál es la combinación óptima de presión y temperatura para procesamiento de alta presión (HPP) de jugos de frutas para lograr reducción 5-log de patógenos?",
          de: "Was ist die optimale Druck- und Temperaturkombination für Hochdruckverarbeitung (HPP) von Fruchtsäften zur Erreichung einer 5-log-Reduktion von Pathogenen?",
          nl: "Wat is de optimale druk en temperatuur combinatie voor hoge-druk verwerking (HPP) van vruchtensappen om 5-log reductie van pathogenen te bereiken?"
        },
        options: [
          { en: "600 MPa at 20°C for 3 minutes", es: "600 MPa a 20°C por 3 minutos", de: "600 MPa bei 20°C für 3 Minuten", nl: "600 MPa bij 20°C voor 3 minuten" },
          { en: "300 MPa at 60°C for 10 minutes", es: "300 MPa a 60°C por 10 minutos", de: "300 MPa bei 60°C für 10 Minuten", nl: "300 MPa bij 60°C voor 10 minuten" },
          { en: "200 MPa at 80°C for 5 minutes", es: "200 MPa a 80°C por 5 minutos", de: "200 MPa bei 80°C für 5 Minuten", nl: "200 MPa bij 80°C voor 5 minuten" },
          { en: "100 MPa at 90°C for 1 minute", es: "100 MPa a 90°C por 1 minuto", de: "100 MPa bei 90°C für 1 Minute", nl: "100 MPa bij 90°C voor 1 minuut" }
        ],
        correct: 0,
        explanation: {
          en: "HPP at 600 MPa and 20°C for 3 minutes effectively achieves 5-log pathogen reduction while preserving heat-sensitive nutrients and maintaining fresh-like sensory characteristics. Lower pressures or higher temperatures compromise either safety or quality.",
          es: "HPP a 600 MPa y 20°C por 3 minutos logra efectivamente reducción 5-log de patógenos mientras preserva nutrientes sensibles al calor y mantiene características sensoriales frescas. Presiones menores o temperaturas mayores comprometen seguridad o calidad.",
          de: "HPP bei 600 MPa und 20°C für 3 Minuten erreicht effektiv 5-log-Pathogenreduktion bei gleichzeitiger Erhaltung hitzeempfindlicher Nährstoffe und frischartiger sensorischer Eigenschaften. Niedrigere Drücke oder höhere Temperaturen beeinträchtigen Sicherheit oder Qualität.",
          nl: "HPP bij 600 MPa en 20°C voor 3 minuten bereikt effectief 5-log pathogeen reductie terwijl hittegevoelige voedingsstoffen behouden blijven en vers-achtige sensorische eigenschappen worden gehandhaafd. Lagere drukken of hogere temperaturen compromitteren veiligheid of kwaliteit."
        }
      },
      {
        question: {
          en: "Which membrane technology configuration provides optimal separation efficiency for clarifying cloudy apple juice while retaining flavor compounds?",
          es: "¿Qué configuración de tecnología de membrana proporciona eficiencia de separación óptima para clarificar jugo de manzana turbio mientras retiene compuestos de sabor?",
          de: "Welche Membrantechnologie-Konfiguration bietet optimale Trennungseffizienz zur Klärung trüben Apfelsafts bei gleichzeitiger Retention von Geschmacksverbindungen?",
          nl: "Welke membraantechnologie configuratie biedt optimale scheidingsefficiëntie voor het klaren van troebel appelsap terwijl smaakverbindingen behouden blijven?"
        },
        options: [
          { en: "Cross-flow microfiltration with 0.2 μm ceramic membranes at 2 bar transmembrane pressure", es: "Microfiltración de flujo cruzado con membranas cerámicas de 0.2 μm a 2 bar de presión transmembrana", de: "Querstrom-Mikrofiltration mit 0.2 μm Keramikmembranen bei 2 bar Transmembrandruck", nl: "Dwarsstroming microfiltratie met 0.2 μm keramische membranen bij 2 bar transmembraan druk" },
          { en: "Dead-end ultrafiltration with polymer membranes", es: "Ultrafiltración de extremo cerrado con membranas poliméricas", de: "Sackgassen-Ultrafiltration mit Polymermembranen", nl: "Doodlopende ultrafiltratie met polymeer membranen" },
          { en: "Reverse osmosis at high pressure", es: "Ósmosis inversa a alta presión", de: "Umkehrosmose bei hohem Druck", nl: "Omgekeerde osmose bij hoge druk" },
          { en: "Forward osmosis with salt solutions", es: "Ósmosis directa con soluciones salinas", de: "Vorwärtsosmose mit Salzlösungen", nl: "Voorwaartse osmose met zoutoplossingen" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-flow microfiltration with 0.2 μm ceramic membranes at low transmembrane pressure effectively removes suspended particles and microorganisms while allowing flavor compounds and soluble nutrients to pass through. Ceramic membranes offer superior chemical resistance and cleanability.",
          es: "La microfiltración de flujo cruzado con membranas cerámicas de 0.2 μm a baja presión transmembrana remueve efectivamente partículas suspendidas y microorganismos mientras permite que compuestos de sabor y nutrientes solubles pasen. Las membranas cerámicas ofrecen resistencia química superior y limpieza.",
          de: "Querstrom-Mikrofiltration mit 0.2 μm Keramikmembranen bei niedrigem Transmembrandruck entfernt effektiv suspendierte Partikel und Mikroorganismen, während Geschmacksverbindungen und lösliche Nährstoffe passieren können. Keramikmembranen bieten überlegene chemische Beständigkeit und Reinigbarkeit.",
          nl: "Dwarsstroming microfiltratie met 0.2 μm keramische membranen bij lage transmembraan druk verwijdert effectief zwevende deeltjes en micro-organismen terwijl smaakverbindingen en oplosbare voedingsstoffen erdoor kunnen. Keramische membranen bieden superieure chemische weerstand en reinigbaarheid."
        }
      },
      {
        question: {
          en: "What is the critical parameter for optimizing pulsed electric field (PEF) treatment to maximize polyphenol extraction from grape skins without causing cell wall damage?",
          es: "¿Cuál es el parámetro crítico para optimizar el tratamiento de campo eléctrico pulsado (PEF) para maximizar la extracción de polifenoles de las pieles de uva sin causar daño a la pared celular?",
          de: "Was ist der kritische Parameter zur Optimierung der gepulsten elektrischen Feld (PEF) Behandlung zur Maximierung der Polyphenol-Extraktion aus Traubenschalen ohne Zellwandschäden zu verursachen?",
          nl: "Wat is de kritieke parameter voor het optimaliseren van gepulseerde elektrische veld (PEF) behandeling om polyfenol extractie uit druivenschillen te maximaliseren zonder celwandschade te veroorzaken?"
        },
        options: [
          { en: "Electric field strength of 1-3 kV/cm with pulse duration of 1-10 μs", es: "Fuerza de campo eléctrico de 1-3 kV/cm con duración de pulso de 1-10 μs", de: "Elektrische Feldstärke von 1-3 kV/cm mit Pulsdauer von 1-10 μs", nl: "Elektrische veldsterkte van 1-3 kV/cm met pulsduur van 1-10 μs" },
          { en: "High frequency continuous waves", es: "Ondas continuas de alta frecuencia", de: "Hochfrequenz-Dauerwellen", nl: "Hoge frequentie continue golven" },
          { en: "Low voltage long duration pulses", es: "Pulsos de larga duración de bajo voltaje", de: "Niederspannung-Langzeit-Impulse", nl: "Lage spanning lange duur pulsen" },
          { en: "DC current application", es: "Aplicación de corriente DC", de: "Gleichstrom-Anwendung", nl: "DC stroom toepassing" }
        ],
        correct: 0,
        explanation: {
          en: "PEF treatment with 1-3 kV/cm field strength and microsecond pulse duration creates reversible membrane permeabilization allowing selective extraction of intracellular polyphenols without permanent cell structure damage. This preserves cell integrity while enabling efficient compound release.",
          es: "El tratamiento PEF con fuerza de campo de 1-3 kV/cm y duración de pulso de microsegundos crea permeabilización reversible de membrana permitiendo extracción selectiva de polifenoles intracelulares sin daño permanente de estructura celular. Esto preserva integridad celular mientras permite liberación eficiente de compuestos.",
          de: "PEF-Behandlung mit 1-3 kV/cm Feldstärke und Mikrosekunden-Pulsdauer erzeugt reversible Membranpermeabilisierung, die selektive Extraktion intrazellulärer Polyphenole ohne permanente Zellstrukturschäden ermöglicht. Dies erhält Zellintegrität bei gleichzeitiger effizienter Verbindungsfreisetzung.",
          nl: "PEF behandeling met 1-3 kV/cm veldsterkte en microseconde pulsduur creëert reversibele membraan permeabilisatie die selectieve extractie van intracellulaire polyfenolen mogelijk maakt zonder permanente celstructuurschade. Dit behoudt celintegriteit terwijl efficiënte verbindingsvrijmaking mogelijk wordt."
        }
      },
      {
        question: {
          en: "Which ohmic heating configuration provides uniform temperature distribution for viscous fruit purees while maintaining nutritional quality?",
          es: "¿Qué configuración de calentamiento óhmico proporciona distribución uniforme de temperatura para purés de frutas viscosos mientras mantiene calidad nutricional?",
          de: "Welche ohm'sche Heizungskonfiguration bietet gleichmäßige Temperaturverteilung für viskose Fruchtpürees bei gleichzeitiger Erhaltung der Nährqualität?",
          nl: "Welke ohmische verwarmingsconfiguratie biedt uniforme temperatuurverdeling voor viskeuze fruitpurees terwijl voedingskwaliteit behouden blijft?"
        },
        options: [
          { en: "Multi-electrode system with 60 Hz AC current and temperature feedback control", es: "Sistema multi-electrodo con corriente AC de 60 Hz y control de retroalimentación de temperatura", de: "Multi-Elektroden-System mit 60 Hz AC-Strom und Temperatur-Feedback-Kontrolle", nl: "Multi-elektrode systeem met 60 Hz AC stroom en temperatuur feedback controle" },
          { en: "Single electrode pair with DC current", es: "Par de electrodos único con corriente DC", de: "Einzelnes Elektrodenpaar mit Gleichstrom", nl: "Enkel elektrode paar met DC stroom" },
          { en: "High frequency microwave heating", es: "Calentamiento por microondas de alta frecuencia", de: "Hochfrequenz-Mikrowellenheizung", nl: "Hoge frequentie magnetron verwarming" },
          { en: "Steam injection heating", es: "Calentamiento por inyección de vapor", de: "Dampfinjektionsheizung", nl: "Stoom injectie verwarming" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-electrode ohmic heating with 60 Hz AC current provides rapid, uniform volumetric heating by converting electrical energy directly to thermal energy within the product. Temperature feedback control prevents overheating and maintains optimal processing conditions for heat-sensitive nutrients.",
          es: "El calentamiento óhmico multi-electrodo con corriente AC de 60 Hz proporciona calentamiento volumétrico rápido y uniforme convirtiendo energía eléctrica directamente a energía térmica dentro del producto. El control de retroalimentación de temperatura previene sobrecalentamiento y mantiene condiciones óptimas de procesamiento para nutrientes sensibles al calor.",
          de: "Multi-Elektroden ohm'sche Heizung mit 60 Hz AC-Strom bietet schnelle, gleichmäßige volumetrische Heizung durch direkte Umwandlung elektrischer Energie in thermische Energie im Produkt. Temperatur-Feedback-Kontrolle verhindert Überhitzung und erhält optimale Verarbeitungsbedingungen für hitzeempfindliche Nährstoffe.",
          nl: "Multi-elektrode ohmische verwarming met 60 Hz AC stroom biedt snelle, uniforme volumetrische verwarming door elektrische energie direct om te zetten in thermische energie binnen het product. Temperatuur feedback controle voorkomt oververhitting en handhaaft optimale verwerkingscondities voor hittegevoelige voedingsstoffen."
        }
      },
      {
        question: {
          en: "What is the optimal enzyme inactivation strategy for preserving natural flavor compounds while ensuring microbial safety in cold-pressed citrus juices?",
          es: "¿Cuál es la estrategia óptima de inactivación enzimática para preservar compuestos de sabor naturales mientras se asegura seguridad microbiana en jugos cítricos prensados en frío?",
          de: "Was ist die optimale Enzym-Inaktivierungsstrategie zur Erhaltung natürlicher Geschmacksverbindungen bei gleichzeitiger Gewährleistung mikrobieller Sicherheit in kaltgepressten Zitrusäften?",
          nl: "Wat is de optimale enzym inactivatie strategie voor het behouden van natuurlijke smaakverbindingen terwijl microbiële veiligheid wordt gewaarborgd in koudgeperste citrussappen?"
        },
        options: [
          { en: "UV-C treatment at 254 nm with 40 mJ/cm² dose followed by mild heat treatment at 60°C for 30 seconds", es: "Tratamiento UV-C a 254 nm con dosis de 40 mJ/cm² seguido de tratamiento térmico suave a 60°C por 30 segundos", de: "UV-C-Behandlung bei 254 nm mit 40 mJ/cm² Dosis gefolgt von milder Wärmebehandlung bei 60°C für 30 Sekunden", nl: "UV-C behandeling bij 254 nm met 40 mJ/cm² dosis gevolgd door milde warmtebehandeling bij 60°C voor 30 seconden" },
          { en: "Pasteurization at 95°C for 15 seconds only", es: "Solo pasteurización a 95°C por 15 segundos", de: "Nur Pasteurisierung bei 95°C für 15 Sekunden", nl: "Alleen pasteurisatie bij 95°C voor 15 seconden" },
          { en: "Chemical preservatives addition", es: "Adición de conservantes químicos", de: "Chemische Konservierungsmittel Zugabe", nl: "Chemische conserveermiddelen toevoeging" },
          { en: "Freezing at -20°C for enzyme inactivation", es: "Congelación a -20°C para inactivación enzimática", de: "Einfrieren bei -20°C zur Enzym-Inaktivierung", nl: "Bevriezen bij -20°C voor enzym inactivatie" }
        ],
        correct: 0,
        explanation: {
          en: "UV-C treatment inactivates vegetative pathogens and some enzymes without heat damage, while the subsequent mild heat treatment completes enzyme inactivation (particularly pectin methylesterase) that affects cloud stability. This combination preserves volatile flavor compounds better than high-temperature pasteurization alone.",
          es: "El tratamiento UV-C inactiva patógenos vegetativos y algunas enzimas sin daño térmico, mientras que el tratamiento térmico suave subsecuente completa la inactivación enzimática (particularmente pectina metilesterasa) que afecta estabilidad de nube. Esta combinación preserva compuestos de sabor volátiles mejor que pasteurización de alta temperatura sola.",
          de: "UV-C-Behandlung inaktiviert vegetative Pathogene und einige Enzyme ohne Hitzeschäden, während die nachfolgende milde Wärmebehandlung die Enzym-Inaktivierung (besonders Pektinmethylesterase) vervollständigt, die die Trübungsstabilität beeinflusst. Diese Kombination erhält flüchtige Geschmacksverbindungen besser als Hochtemperatur-Pasteurisierung allein.",
          nl: "UV-C behandeling inactiveert vegetatieve pathogenen en sommige enzymen zonder hitteschade, terwijl de daaropvolgende milde warmtebehandeling enzym inactivatie voltooit (vooral pectine methylesterase) die wolkstabiliteit beïnvloedt. Deze combinatie behoudt vluchtige smaakverbindingen beter dan alleen hoge-temperatuur pasteurisatie."
        }
      },
      {
        question: {
          en: "Which concentration technology provides the best energy efficiency and flavor retention for producing orange juice concentrate?",
          es: "¿Qué tecnología de concentración proporciona la mejor eficiencia energética y retención de sabor para producir concentrado de jugo de naranja?",
          de: "Welche Konzentrationstechnologie bietet die beste Energieeffizienz und Geschmackserhaltung für die Produktion von Orangensaftkonzentrat?",
          nl: "Welke concentratie technologie biedt de beste energie-efficiëntie en smaakbehoud voor het produceren van sinaasappelsap concentraat?"
        },
        options: [
          { en: "Multi-effect falling film evaporator with aroma recovery system operating at 40-60°C", es: "Evaporador de película descendente de múltiple efecto con sistema de recuperación de aroma operando a 40-60°C", de: "Mehrstufiger Fallfilm-Verdampfer mit Aroma-Rückgewinnungssystem bei 40-60°C", nl: "Multi-effect vallende film verdamper met aroma herstel systeem werkend bij 40-60°C" },
          { en: "Single-effect evaporator at atmospheric pressure", es: "Evaporador de efecto único a presión atmosférica", de: "Einstufiger Verdampfer bei Atmosphärendruck", nl: "Enkel-effect verdamper bij atmosferische druk" },
          { en: "Freeze concentration only", es: "Solo concentración por congelación", de: "Nur Gefrierkonzentrierung", nl: "Alleen vries concentratie" },
          { en: "Reverse osmosis to 65° Brix", es: "Ósmosis inversa a 65° Brix", de: "Umkehrosmose auf 65° Brix", nl: "Omgekeerde osmose tot 65° Brix" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-effect falling film evaporators with aroma recovery maximize energy efficiency through steam reuse while operating at low temperatures to preserve heat-sensitive compounds. The aroma recovery system captures and reintroduces volatile compounds lost during evaporation, maintaining fresh juice flavor profile.",
          es: "Los evaporadores de película descendente de múltiple efecto con recuperación de aroma maximizan eficiencia energética a través de reutilización de vapor mientras operan a bajas temperaturas para preservar compuestos sensibles al calor. El sistema de recuperación de aroma captura y reintroduce compuestos volátiles perdidos durante evaporación, manteniendo perfil de sabor de jugo fresco.",
          de: "Mehrstufige Fallfilm-Verdampfer mit Aroma-Rückgewinnung maximieren Energieeffizienz durch Dampfwiederverwendung bei niedrigen Temperaturen zur Erhaltung hitzeempfindlicher Verbindungen. Das Aroma-Rückgewinnungssystem erfasst und führt flüchtige Verbindungen wieder ein, die während der Verdampfung verloren gehen, und erhält das frische Saftgeschmacksprofil.",
          nl: "Multi-effect vallende film verdampers met aroma herstel maximaliseren energie-efficiëntie door stoom hergebruik terwijl ze werken bij lage temperaturen om hittegevoelige verbindingen te behouden. Het aroma herstel systeem vangt vluchtige verbindingen op en voert ze weer toe die verloren gaan tijdens verdamping, waardoor het verse sap smaakprofiel behouden blijft."
        }
      },
      {
        question: {
          en: "What is the optimal ultrasonic frequency and power combination for enhancing extraction yield from fibrous fruit materials without damaging beneficial compounds?",
          es: "¿Cuál es la combinación óptima de frecuencia ultrasónica y potencia para mejorar el rendimiento de extracción de materiales de frutas fibrosas sin dañar compuestos beneficiosos?",
          de: "Was ist die optimale Ultraschallfrequenz- und Leistungskombination zur Verbesserung der Extraktionsausbeute aus faserigen Fruchtmaterialien ohne Schädigung nützlicher Verbindungen?",
          nl: "Wat is de optimale ultrasone frequentie en vermogen combinatie voor het verbeteren van extractie opbrengst uit vezelachtige fruitmateriaal zonder schadelijke verbindingen te beschadigen?"
        },
        options: [
          { en: "20-40 kHz frequency with 200-400 W/L power density for 10-20 minutes", es: "Frecuencia de 20-40 kHz con densidad de potencia de 200-400 W/L por 10-20 minutos", de: "20-40 kHz Frequenz mit 200-400 W/L Leistungsdichte für 10-20 Minuten", nl: "20-40 kHz frequentie met 200-400 W/L vermogensdichtheid voor 10-20 minuten" },
          { en: "High frequency 100 kHz with maximum power", es: "Alta frecuencia 100 kHz con máxima potencia", de: "Hochfrequenz 100 kHz mit maximaler Leistung", nl: "Hoge frequentie 100 kHz met maximum vermogen" },
          { en: "Low frequency 5 kHz with extended treatment time", es: "Baja frecuencia 5 kHz con tiempo de tratamiento extendido", de: "Niedrige Frequenz 5 kHz mit verlängerter Behandlungszeit", nl: "Lage frequentie 5 kHz met verlengde behandelingstijd" },
          { en: "Variable frequency sweeping at high power", es: "Barrido de frecuencia variable a alta potencia", de: "Variable Frequenzdurchlauf bei hoher Leistung", nl: "Variabele frequentie doorlopen bij hoog vermogen" }
        ],
        correct: 0,
        explanation: {
          en: "Ultrasonic treatment at 20-40 kHz with moderate power density creates optimal cavitation effects for cell wall disruption and mass transfer enhancement without excessive heat generation or molecular degradation. This frequency range provides efficient extraction while preserving bioactive compounds.",
          es: "El tratamiento ultrasónico a 20-40 kHz con densidad de potencia moderada crea efectos de cavitación óptimos para disrupción de pared celular y mejora de transferencia de masa sin generación excesiva de calor o degradación molecular. Este rango de frecuencia proporciona extracción eficiente mientras preserva compuestos bioactivos.",
          de: "Ultraschallbehandlung bei 20-40 kHz mit moderater Leistungsdichte erzeugt optimale Kavitationseffekte für Zellwandstörung und Massentransfer-Verbesserung ohne übermäßige Wärmeerzeugung oder molekulare Degradation. Dieser Frequenzbereich bietet effiziente Extraktion bei gleichzeitiger Erhaltung bioaktiver Verbindungen.",
          nl: "Ultrasone behandeling bij 20-40 kHz met gematigde vermogensdichtheid creëert optimale cavitatie effecten voor celwandverstoring en massaoverdracht verbetering zonder overmatige warmtegeneratie of moleculaire degradatie. Dit frequentiebereik biedt efficiënte extractie terwijl bioactieve verbindingen behouden blijven."
        }
      },
      {
        question: {
          en: "Which membrane distillation configuration is most suitable for concentrating heat-sensitive fruit juice extracts while maintaining low operating temperatures?",
          es: "¿Qué configuración de destilación por membrana es más adecuada para concentrar extractos de jugo de frutas sensibles al calor mientras mantiene bajas temperaturas operativas?",
          de: "Welche Membrandestillationskonfiguration ist am besten geeignet zur Konzentration hitzeempfindlicher Fruchtsaftextrakte bei gleichzeitiger Beibehaltung niedriger Betriebstemperaturen?",
          nl: "Welke membraan distillatie configuratie is het meest geschikt voor het concentreren van hittegevoelige vruchtensap extracten terwijl lage operationele temperaturen worden gehandhaafd?"
        },
        options: [
          { en: "Vacuum membrane distillation (VMD) with PTFE hydrophobic membranes at 50-60°C", es: "Destilación de membrana al vacío (VMD) con membranas hidrofóbicas de PTFE a 50-60°C", de: "Vakuum-Membrandestillation (VMD) mit PTFE hydrophoben Membranen bei 50-60°C", nl: "Vacuüm membraan distillatie (VMD) met PTFE hydrofobe membranen bij 50-60°C" },
          { en: "Direct contact membrane distillation at 80°C", es: "Destilación de membrana de contacto directo a 80°C", de: "Direktkontakt-Membrandestillation bei 80°C", nl: "Direct contact membraan distillatie bij 80°C" },
          { en: "Air gap membrane distillation at high temperature", es: "Destilación de membrana con brecha de aire a alta temperatura", de: "Luftspalt-Membrandestillation bei hoher Temperatur", nl: "Luchtgap membraan distillatie bij hoge temperatuur" },
          { en: "Pervaporation with dense membranes", es: "Pervaporación con membranas densas", de: "Pervaporation mit dichten Membranen", nl: "Pervaporatie met dichte membranen" }
        ],
        correct: 0,
        explanation: {
          en: "VMD with PTFE hydrophobic membranes operates effectively at 50-60°C under vacuum conditions, enabling gentle concentration of heat-sensitive compounds. The vacuum reduces vapor pressure requirements, allowing lower operating temperatures while maintaining high mass transfer rates through the membrane.",
          es: "VMD con membranas hidrofóbicas de PTFE opera efectivamente a 50-60°C bajo condiciones de vacío, permitiendo concentración suave de compuestos sensibles al calor. El vacío reduce requisitos de presión de vapor, permitiendo temperaturas operativas menores mientras mantiene altas tasas de transferencia de masa a través de la membrana.",
          de: "VMD mit PTFE hydrophoben Membranen arbeitet effektiv bei 50-60°C unter Vakuumbedingungen und ermöglicht schonende Konzentration hitzeempfindlicher Verbindungen. Das Vakuum reduziert Dampfdruckanforderungen und ermöglicht niedrigere Betriebstemperaturen bei gleichzeitiger Aufrechterhaltung hoher Massentransferraten durch die Membran.",
          nl: "VMD met PTFE hydrofobe membranen werkt effectief bij 50-60°C onder vacuümcondities, waardoor zachte concentratie van hittegevoelige verbindingen mogelijk is. Het vacuüm vermindert dampspanningsvereisten, waardoor lagere operationele temperaturen mogelijk zijn terwijl hoge massaoverdracht snelheden door het membraan behouden blijven."
        }
      },
      {
        question: {
          en: "What is the critical factor for optimizing supercritical CO2 extraction of essential oils from citrus peels in juice processing?",
          es: "¿Cuál es el factor crítico para optimizar la extracción supercrítica de CO2 de aceites esenciales de cáscaras cítricas en procesamiento de jugos?",
          de: "Was ist der kritische Faktor zur Optimierung der superkritischen CO2-Extraktion ätherischer Öle aus Zitrusschalen in der Saftverarbeitung?",
          nl: "Wat is de kritieke factor voor het optimaliseren van superkritische CO2 extractie van essentiële oliën uit citrusschillen in sapverwerking?"
        },
        options: [
          { en: "Pressure 80-100 bar, temperature 40-50°C, and CO2 flow rate optimization", es: "Presión 80-100 bar, temperatura 40-50°C, y optimización de tasa de flujo de CO2", de: "Druck 80-100 bar, Temperatur 40-50°C und CO2-Durchflussraten-Optimierung", nl: "Druk 80-100 bar, temperatuur 40-50°C, en CO2 stroomsnelheid optimalisatie" },
          { en: "Maximum pressure and temperature conditions", es: "Condiciones máximas de presión y temperatura", de: "Maximale Druck- und Temperaturbedingungen", nl: "Maximum druk en temperatuur condities" },
          { en: "Atmospheric pressure extraction", es: "Extracción a presión atmosférica", de: "Atmosphärendruck-Extraktion", nl: "Atmosferische druk extractie" },
          { en: "High temperature steam distillation", es: "Destilación por vapor a alta temperatura", de: "Hochtemperatur-Wasserdampfdestillation", nl: "Hoge temperatuur stoomdistillatie" }
        ],
        correct: 0,
        explanation: {
          en: "Supercritical CO2 extraction at 80-100 bar and 40-50°C provides optimal solvent power for essential oil extraction while maintaining low temperatures that preserve volatile compounds. CO2 flow rate optimization ensures efficient mass transfer and complete extraction without co-extracting unwanted compounds.",
          es: "La extracción supercrítica de CO2 a 80-100 bar y 40-50°C proporciona poder de solvente óptimo para extracción de aceites esenciales mientras mantiene bajas temperaturas que preservan compuestos volátiles. La optimización de tasa de flujo de CO2 asegura transferencia de masa eficiente y extracción completa sin co-extraer compuestos no deseados.",
          de: "Superkritische CO2-Extraktion bei 80-100 bar und 40-50°C bietet optimale Lösungsmittelkraft für ätherische Ölextraktion bei gleichzeitiger Beibehaltung niedriger Temperaturen, die flüchtige Verbindungen erhalten. CO2-Durchflussraten-Optimierung gewährleistet effiziente Massentransfer und vollständige Extraktion ohne Mitextraktion unerwünschter Verbindungen.",
          nl: "Superkritische CO2 extractie bij 80-100 bar en 40-50°C biedt optimale oplosmiddelkracht voor essentiële olie extractie terwijl lage temperaturen worden gehandhaafd die vluchtige verbindingen behouden. CO2 stroomsnelheid optimalisatie zorgt voor efficiënte massaoverdracht en volledige extractie zonder mee-extractie van ongewenste verbindingen."
        }
      },
      {
        question: {
          en: "Which non-thermal plasma treatment parameters are optimal for surface decontamination of fresh produce before juice processing?",
          es: "¿Qué parámetros de tratamiento de plasma no térmico son óptimos para descontaminación superficial de productos frescos antes del procesamiento de jugos?",
          de: "Welche nicht-thermischen Plasmabehandlungsparameter sind optimal für Oberflächendekontamination frischer Produkte vor der Saftverarbeitung?",
          nl: "Welke niet-thermische plasma behandelingsparameters zijn optimaal voor oppervlakte decontaminatie van verse producten voor sapverwerking?"
        },
        options: [
          { en: "Atmospheric pressure plasma with 10-20 kV voltage, 1-5 minutes treatment time", es: "Plasma a presión atmosférica con voltaje de 10-20 kV, tiempo de tratamiento de 1-5 minutos", de: "Atmosphärendruck-Plasma mit 10-20 kV Spannung, 1-5 Minuten Behandlungszeit", nl: "Atmosferische druk plasma met 10-20 kV spanning, 1-5 minuten behandeltijd" },
          { en: "Low pressure plasma with extended treatment", es: "Plasma de baja presión con tratamiento extendido", de: "Niederdruck-Plasma mit verlängerter Behandlung", nl: "Lage druk plasma met verlengde behandeling" },
          { en: "High temperature plasma treatment", es: "Tratamiento de plasma de alta temperatura", de: "Hochtemperatur-Plasmabehandlung", nl: "Hoge temperatuur plasma behandeling" },
          { en: "Underwater plasma discharge", es: "Descarga de plasma bajo agua", de: "Unterwasser-Plasmaentladung", nl: "Onderwater plasma ontlading" }
        ],
        correct: 0,
        explanation: {
          en: "Atmospheric pressure plasma at 10-20 kV for 1-5 minutes generates reactive oxygen and nitrogen species that effectively inactivate surface microorganisms without heat damage to produce. The treatment is rapid, chemical-free, and maintains product quality while achieving significant microbial reduction.",
          es: "El plasma a presión atmosférica a 10-20 kV por 1-5 minutos genera especies reactivas de oxígeno y nitrógeno que inactivan efectivamente microorganismos superficiales sin daño térmico a los productos. El tratamiento es rápido, libre de químicos, y mantiene calidad del producto mientras logra reducción microbiana significativa.",
          de: "Atmosphärendruck-Plasma bei 10-20 kV für 1-5 Minuten erzeugt reaktive Sauerstoff- und Stickstoffspezies, die Oberflächenmikroorganismen effektiv inaktivieren ohne Hitzeschäden an Produkten. Die Behandlung ist schnell, chemiefrei und erhält Produktqualität bei gleichzeitiger signifikanter mikrobieller Reduktion.",
          nl: "Atmosferische druk plasma bij 10-20 kV voor 1-5 minuten genereert reactieve zuurstof en stikstof species die oppervlakte micro-organismen effectief inactiveren zonder hitteschade aan producten. De behandeling is snel, chemievrij, en handhaaft productkwaliteit terwijl significante microbiële reductie wordt bereikt."
        }
      },
      {
        question: {
          en: "What is the Maillard reaction's role in thermally processed juice quality degradation?",
          es: "¿Cuál es el papel de la reacción de Maillard en la degradación de calidad de jugos procesados térmicamente?",
          de: "Welche Rolle spielt die Maillard-Reaktion bei der Qualitätsdegradation thermisch verarbeiteter Säfte?",
          nl: "Wat is de rol van de Maillard-reactie in kwaliteitsdegradatie van thermisch verwerkt sap?"
        },
        options: [
          { en: "Non-enzymatic browning from amino acids reacting with reducing sugars, causing color/flavor changes", es: "Pardeamiento no enzimático de aminoácidos reaccionando con azúcares reductores, causando cambios de color/sabor", de: "Nicht-enzymatische Bräunung durch Reaktion von Aminosäuren mit reduzierenden Zuckern, die Farb-/Geschmacksveränderungen verursacht", nl: "Niet-enzymatische bruinering van aminozuren reagerend met reducerende suikers, veroorzakend kleur/smaak veranderingen" },
          { en: "Enzymatic oxidation only", es: "Solo oxidación enzimática", de: "Nur enzymatische Oxidation", nl: "Alleen enzymatische oxidatie" },
          { en: "Microbial fermentation process", es: "Proceso de fermentación microbiana", de: "Mikrobielle Fermentationsprozess", nl: "Microbieel fermentatieproces" },
          { en: "Vitamin fortification reaction", es: "Reacción de fortificación con vitaminas", de: "Vitamin-Anreicherungsreaktion", nl: "Vitamine verrijkingsreactie" }
        ],
        correct: 0,
        explanation: {
          en: "The Maillard reaction is non-enzymatic browning between amino acids and reducing sugars during heat treatment. It produces melanoidins (brown pigments), off-flavors, and reduces nutritional value. Minimized by shorter heating times (HTST vs UHT) and lower storage temperatures.",
          es: "La reacción de Maillard es pardeamiento no enzimático entre aminoácidos y azúcares reductores durante tratamiento térmico. Produce melanoidinas (pigmentos marrones), sabores indeseables, y reduce valor nutricional. Se minimiza con tiempos de calentamiento más cortos (HTST vs UHT) y temperaturas de almacenamiento más bajas.",
          de: "Die Maillard-Reaktion ist nicht-enzymatische Bräunung zwischen Aminosäuren und reduzierenden Zuckern während Wärmebehandlung. Sie produziert Melanoidine (braune Pigmente), Fehlgeschmäcker und reduziert Nährwert. Minimiert durch kürzere Erhitzungszeiten (HTST vs UHT) und niedrigere Lagertemperaturen.",
          nl: "De Maillard-reactie is niet-enzymatische bruinering tussen aminozuren en reducerende suikers tijdens warmtebehandeling. Het produceert melanoidines (bruine pigmenten), ongewenste smaken, en vermindert voedingswaarde. Geminimaliseerd door kortere verwarmingstijden (HTST vs UHT) en lagere opslagtemperaturen."
        }
      },
      {
        question: {
          en: "What is the role of limonin and naringin in citrus juice bitterness and how are they managed?",
          es: "¿Cuál es el papel de limonina y naringina en el amargor del jugo cítrico y cómo se gestionan?",
          de: "Welche Rolle spielen Limonin und Naringin bei der Bitterkeit von Zitrusssaft und wie werden sie verwaltet?",
          nl: "Wat is de rol van limonine en naringine in citrus sap bitterheid en hoe worden ze beheerd?"
        },
        options: [
          { en: "Bitter compounds removed by enzymatic treatment (naringinase) or adsorbent resins", es: "Compuestos amargos removidos por tratamiento enzimático (naringinasa) o resinas adsorbentes", de: "Bittere Verbindungen entfernt durch enzymatische Behandlung (Naringinase) oder Adsorptionsharze", nl: "Bittere verbindingen verwijderd door enzymatische behandeling (naringinase) of adsorbent harsen" },
          { en: "Natural sweeteners added only", es: "Solo se añaden edulcorantes naturales", de: "Nur natürliche Süßstoffe hinzugefügt", nl: "Alleen natuurlijke zoetstoffen toegevoegd" },
          { en: "Dilution with water", es: "Dilución con agua", de: "Verdünnung mit Wasser", nl: "Verdunning met water" },
          { en: "Cold storage removal", es: "Remoción por almacenamiento en frío", de: "Entfernung durch Kühllagerung", nl: "Koude opslag verwijdering" }
        ],
        correct: 0,
        explanation: {
          en: "Limonin (limonoid aglycone) and naringin (flavonoid) cause delayed and immediate bitterness in citrus juice. Managed by enzymatic debittering using naringinase enzyme, adsorption on ion-exchange resins, or selecting low-bitter fruit varieties. Critical for grapefruit and navel orange juice quality.",
          es: "Limonina (aglicona limonoide) y naringina (flavonoide) causan amargor retardado e inmediato en jugo cítrico. Se gestionan mediante desamarización enzimática usando enzima naringinasa, adsorción en resinas de intercambio iónico, o seleccionando variedades de frutas de bajo amargor. Crítico para calidad de jugo de toronja y naranja navel.",
          de: "Limonin (Limonoid-Aglycon) und Naringin (Flavonoid) verursachen verzögerte und sofortige Bitterkeit in Zitrussaft. Verwaltet durch enzymatische Entbitterung mit Naringinase-Enzym, Adsorption an Ionenaustauschharzen oder Auswahl bitterarmer Fruchtsorten. Kritisch für Grapefruit- und Navel-Orangensaftqualität.",
          nl: "Limonine (limonoide aglycon) en naringine (flavonoïde) veroorzaken vertraagde en onmiddellijke bitterheid in citrus sap. Beheerd door enzymatische ontbittering met naringinase enzym, adsorptie op ionenwisselingsharsen, of selectie van laag-bittere fruitvariëteiten. Kritiek voor grapefruit en navel sinaasappel sapkwaliteit."
        }
      },
      {
        question: {
          en: "What is 'pulsed electric field (PEF)' technology in juice processing and what are its advantages?",
          es: "¿Qué es la tecnología de 'campo eléctrico pulsado (PEF)' en procesamiento de jugos y cuáles son sus ventajas?",
          de: "Was ist 'gepulstes elektrisches Feld (PEF)'-Technologie in der Saftverarbeitung und was sind ihre Vorteile?",
          nl: "Wat is 'gepulseerd elektrisch veld (PEF)'-technologie in sapverwerking en wat zijn de voordelen?"
        },
        options: [
          { en: "Short high-voltage pulses (20-80 kV/cm) permeabilize cell membranes for microbial inactivation without heat", es: "Pulsos cortos de alto voltaje (20-80 kV/cm) permeabilizan membranas celulares para inactivación microbiana sin calor", de: "Kurze Hochspannungsimpulse (20-80 kV/cm) permeabilisieren Zellmembranen zur mikrobiellen Inaktivierung ohne Hitze", nl: "Korte hoogspanningspulsen (20-80 kV/cm) permeabiliseren celmembranen voor microbiële inactivatie zonder warmte" },
          { en: "Continuous low voltage treatment", es: "Tratamiento continuo de bajo voltaje", de: "Kontinuierliche Niederspannungsbehandlung", nl: "Continue lage spanning behandeling" },
          { en: "Magnetic field purification", es: "Purificación por campo magnético", de: "Magnetfeldreinigung", nl: "Magnetisch veld zuivering" },
          { en: "Electric heating technology", es: "Tecnología de calentamiento eléctrico", de: "Elektrische Heiztechnologie", nl: "Elektrische verwarmingstechnologie" }
        ],
        correct: 0,
        explanation: {
          en: "PEF applies short (microseconds) high-voltage pulses (20-80 kV/cm) that create pores in microbial cell membranes (electroporation), inactivating pathogens. Advantages: non-thermal processing preserves fresh flavor, color, vitamins; increases juice yield through enhanced extraction; energy efficient compared to thermal methods.",
          es: "PEF aplica pulsos cortos (microsegundos) de alto voltaje (20-80 kV/cm) que crean poros en membranas celulares microbianas (electroporación), inactivando patógenos. Ventajas: procesamiento no térmico preserva sabor fresco, color, vitaminas; aumenta rendimiento de jugo mediante extracción mejorada; eficiente energéticamente comparado con métodos térmicos.",
          de: "PEF wendet kurze (Mikrosekunden) Hochspannungsimpulse (20-80 kV/cm) an, die Poren in mikrobiellen Zellmembranen erzeugen (Elektroporation), was Pathogene inaktiviert. Vorteile: nicht-thermische Verarbeitung erhält frischen Geschmack, Farbe, Vitamine; erhöht Saftausbeute durch verbesserte Extraktion; energieeffizient im Vergleich zu thermischen Methoden.",
          nl: "PEF past korte (microseconden) hoogspanningspulsen (20-80 kV/cm) toe die poriën creëren in microbiële celmembranen (elektroporatie), wat pathogenen inactiveert. Voordelen: niet-thermische verwerking behoudt verse smaak, kleur, vitamines; verhoogt sapopbrengst door verbeterde extractie; energie-efficiënt vergeleken met thermische methoden."
        }
      },
      {
        question: {
          en: "What is 'phenolic compound extraction' and its impact on functional juice properties?",
          es: "¿Qué es la 'extracción de compuestos fenólicos' y su impacto en propiedades funcionales del jugo?",
          de: "Was ist 'Extraktion phenolischer Verbindungen' und ihre Auswirkung auf funktionelle Safteigenschaften?",
          nl: "Wat is 'fenolische verbinding extractie' en de impact op functionele sapeigenschappen?"
        },
        options: [
          { en: "Extracting antioxidant polyphenols (anthocyanins, flavonoids, tannins) enhances health benefits but may increase astringency", es: "Extraer polifenoles antioxidantes (antocianinas, flavonoides, taninos) mejora beneficios de salud pero puede aumentar astringencia", de: "Extraktion antioxidativer Polyphenole (Anthocyane, Flavonoide, Tannine) verbessert Gesundheitsvorteile, kann aber Adstringenz erhöhen", nl: "Extractie van antioxidant polyfenolen (anthocyanines, flavonoïden, tannines) verbetert gezondheidsvoordelen maar kan wrangheid verhogen" },
          { en: "Removing all bitter compounds", es: "Remover todos los compuestos amargos", de: "Entfernung aller bitteren Verbindungen", nl: "Verwijderen van alle bittere verbindingen" },
          { en: "Adding artificial antioxidants", es: "Añadir antioxidantes artificiales", de: "Künstliche Antioxidantien hinzufügen", nl: "Kunstmatige antioxidanten toevoegen" },
          { en: "Color stabilization only", es: "Solo estabilización de color", de: "Nur Farbstabilisierung", nl: "Alleen kleurstabilisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Phenolic compounds (anthocyanins, flavonoids, catechins, tannins) are bioactive antioxidants extracted from fruit skins/seeds. Enhanced extraction (PEF, enzyme treatment, ultrasound) increases health benefits (anti-inflammatory, cardiovascular protection). Challenge: balancing high phenolic content with acceptable sensory properties, as tannins cause astringency.",
          es: "Compuestos fenólicos (antocianinas, flavonoides, catequinas, taninos) son antioxidantes bioactivos extraídos de pieles/semillas de frutas. Extracción mejorada (PEF, tratamiento enzimático, ultrasonido) aumenta beneficios de salud (antiinflamatorio, protección cardiovascular). Desafío: equilibrar alto contenido fenólico con propiedades sensoriales aceptables, ya que taninos causan astringencia.",
          de: "Phenolische Verbindungen (Anthocyane, Flavonoide, Catechine, Tannine) sind bioaktive Antioxidantien aus Fruchtschalen/-kernen extrahiert. Verbesserte Extraktion (PEF, Enzymbehandlung, Ultraschall) erhöht Gesundheitsvorteile (entzündungshemmend, kardiovaskulärer Schutz). Herausforderung: Ausgleich hohen Phenolgehalts mit akzeptablen sensorischen Eigenschaften, da Tannine Adstringenz verursachen.",
          nl: "Fenolische verbindingen (anthocyanines, flavonoïden, catechines, tannines) zijn bioactieve antioxidanten geëxtraheerd uit fruitschillen/zaden. Verbeterde extractie (PEF, enzymbehandeling, ultrasoon) verhoogt gezondheidsvoordelen (ontstekingsremmend, cardiovasculaire bescherming). Uitdaging: balanceren hoog fenolisch gehalte met acceptabele sensorische eigenschappen, omdat tannines wrangheid veroorzaken."
        }
      },
      {
        question: {
          en: "What is 'osmotic dehydration' pretreatment in juice concentrate production?",
          es: "¿Qué es el pretratamiento de 'deshidratación osmótica' en producción de concentrado de jugo?",
          de: "Was ist 'osmotische Dehydratisierung'-Vorbehandlung in der Saftkonzentrat-Produktion?",
          nl: "Wat is 'osmotische dehydratie'-voorbehandeling in sapconcentraat productie?"
        },
        options: [
          { en: "Immersing fruit in hypertonic solution to remove water while retaining nutrients and volatile compounds", es: "Sumergir fruta en solución hipertónica para remover agua mientras se retienen nutrientes y compuestos volátiles", de: "Eintauchen von Früchten in hypertonische Lösung zur Wasserentfernung bei Erhalt von Nährstoffen und flüchtigen Verbindungen", nl: "Fruit onderdompelen in hypertonische oplossing om water te verwijderen terwijl voedingsstoffen en vluchtige verbindingen behouden blijven" },
          { en: "Freeze-drying process", es: "Proceso de liofilización", de: "Gefriertrocknung", nl: "Vriesdroogproces" },
          { en: "High temperature evaporation", es: "Evaporación a alta temperatura", de: "Hochtemperaturverdampfung", nl: "Hoge temperatuur verdamping" },
          { en: "Membrane filtration", es: "Filtración por membrana", de: "Membranfiltration", nl: "Membraan filtratie" }
        ],
        correct: 0,
        explanation: {
          en: "Osmotic dehydration immerses fruit pieces in concentrated sugar/salt solutions (hypertonic). Water moves out by osmosis while solutes move in. Advantages: removes water at ambient temperature, preserves heat-sensitive compounds, reduces energy for subsequent concentration, maintains better color/flavor. Used as pretreatment before thermal concentration or drying.",
          es: "La deshidratación osmótica sumerge piezas de fruta en soluciones concentradas de azúcar/sal (hipertónicas). El agua sale por ósmosis mientras los solutos entran. Ventajas: remueve agua a temperatura ambiente, preserva compuestos termosensibles, reduce energía para concentración subsecuente, mantiene mejor color/sabor. Usado como pretratamiento antes de concentración térmica o secado.",
          de: "Osmotische Dehydratisierung taucht Fruchtstücke in konzentrierte Zucker-/Salzlösungen (hypertonisch). Wasser bewegt sich durch Osmose heraus, während gelöste Stoffe eindringen. Vorteile: entfernt Wasser bei Umgebungstemperatur, erhält hitzeempfindliche Verbindungen, reduziert Energie für nachfolgende Konzentration, erhält bessere Farbe/Geschmack. Als Vorbehandlung vor thermischer Konzentration oder Trocknung verwendet.",
          nl: "Osmotische dehydratie dompelt fruitstukken onder in geconcentreerde suiker/zout oplossingen (hypertonisch). Water beweegt naar buiten door osmose terwijl opgeloste stoffen naar binnen bewegen. Voordelen: verwijdert water bij omgevingstemperatuur, behoudt hittegevoelige verbindingen, vermindert energie voor daaropvolgende concentratie, handhaaft betere kleur/smaak. Gebruikt als voorbehandeling voor thermische concentratie of drogen."
        }
      },
      {
        question: {
          en: "What is 'forward osmosis' (FO) concentration technology in juice processing?",
          es: "¿Qué es la tecnología de concentración por 'ósmosis directa' (FO) en procesamiento de jugos?",
          de: "Was ist 'Vorwärtsosmose' (FO)-Konzentrationstechnologie in der Saftverarbeitung?",
          nl: "Wat is 'voorwaartse osmose' (FO) concentratietechnologie in sapverwerking?"
        },
        options: [
          { en: "Using osmotic pressure gradient with draw solution to concentrate juice without heat or high pressure", es: "Usar gradiente de presión osmótica con solución de extracción para concentrar jugo sin calor o alta presión", de: "Verwendung eines osmotischen Druckgradienten mit Zugabenlösung zur Saftkonzentration ohne Hitze oder Hochdruck", nl: "Osmotische drukgradiënt gebruiken met trekkingsoplossing om sap te concentreren zonder warmte of hoge druk" },
          { en: "Traditional reverse osmosis system", es: "Sistema tradicional de ósmosis inversa", de: "Traditionelles Umkehrosmosesystem", nl: "Traditioneel omgekeerde osmose systeem" },
          { en: "Thermal evaporation method", es: "Método de evaporación térmica", de: "Thermische Verdampfungsmethode", nl: "Thermische verdampingsmethode" },
          { en: "Centrifugal separation", es: "Separación centrífuga", de: "Zentrifugaltrennung", nl: "Centrifugale scheiding" }
        ],
        correct: 0,
        explanation: {
          en: "Forward osmosis uses natural osmotic pressure difference between juice and concentrated 'draw solution' across semi-permeable membrane. Water moves from juice to draw solution without applied pressure. Advantages: no heat, low energy, preserves flavor/nutrients. Challenge: selecting and regenerating draw solution (typically sugars or salts).",
          es: "La ósmosis directa usa diferencia de presión osmótica natural entre jugo y 'solución de extracción' concentrada a través de membrana semipermeable. El agua se mueve del jugo a la solución de extracción sin presión aplicada. Ventajas: sin calor, baja energía, preserva sabor/nutrientes. Desafío: seleccionar y regenerar solución de extracción (típicamente azúcares o sales).",
          de: "Vorwärtsosmose nutzt natürlichen osmotischen Druckunterschied zwischen Saft und konzentrierter 'Zugabenlösung' über semipermeabler Membran. Wasser bewegt sich vom Saft zur Zugabenlösung ohne angelegten Druck. Vorteile: keine Hitze, geringe Energie, erhält Geschmack/Nährstoffe. Herausforderung: Auswahl und Regeneration der Zugabenlösung (typischerweise Zucker oder Salze).",
          nl: "Voorwaartse osmose gebruikt natuurlijk osmotisch drukverschil tussen sap en geconcentreerde 'trekkingsoplossing' over semi-permeabel membraan. Water beweegt van sap naar trekkingsoplossing zonder toegepaste druk. Voordelen: geen warmte, lage energie, behoudt smaak/voedingsstoffen. Uitdaging: selecteren en regenereren trekkingsoplossing (typisch suikers of zouten)."
        }
      },
      {
        question: {
          en: "What is 'anthocyanin degradation kinetics' and how is it minimized during juice storage?",
          es: "¿Qué es la 'cinética de degradación de antocianinas' y cómo se minimiza durante el almacenamiento de jugos?",
          de: "Was ist 'Anthocyan-Abbaukinetik' und wie wird sie während der Saftlagerung minimiert?",
          nl: "Wat is 'anthocyanine afbraakkinetiek' en hoe wordt het geminimaliseerd tijdens sapopslag?"
        },
        options: [
          { en: "Time-dependent color loss following first-order kinetics; minimized by low temperature, pH control, oxygen exclusion", es: "Pérdida de color dependiente del tiempo siguiendo cinética de primer orden; minimizada por baja temperatura, control de pH, exclusión de oxígeno", de: "Zeitabhängiger Farbverlust nach Kinetik erster Ordnung; minimiert durch niedrige Temperatur, pH-Kontrolle, Sauerstoffausschluss", nl: "Tijdsafhankelijk kleurverlies volgens eerste-orde kinetiek; geminimaliseerd door lage temperatuur, pH-controle, zuurstofuitsluiting" },
          { en: "Permanent color stabilization", es: "Estabilización permanente de color", de: "Permanente Farbstabilisierung", nl: "Permanente kleurstabilisatie" },
          { en: "Microbial color production", es: "Producción microbiana de color", de: "Mikrobielle Farbproduktion", nl: "Microbiële kleurproductie" },
          { en: "Enzymatic color enhancement", es: "Mejora enzimática del color", de: "Enzymatische Farbverbesserung", nl: "Enzymatische kleurverbetering" }
        ],
        correct: 0,
        explanation: {
          en: "Anthocyanins (red/purple pigments in berries) degrade following first-order kinetics. Rate depends on temperature (Q10≈2-4), pH (more stable at pH<3), oxygen presence, light exposure, and ascorbic acid. Minimized by: refrigeration, acidification, deaeration, dark storage, adding copigments (metal ions, polyphenols) for color stabilization.",
          es: "Las antocianinas (pigmentos rojos/morados en bayas) se degradan siguiendo cinética de primer orden. La tasa depende de temperatura (Q10≈2-4), pH (más estables a pH<3), presencia de oxígeno, exposición a luz, y ácido ascórbico. Se minimiza por: refrigeración, acidificación, desaireación, almacenamiento oscuro, añadir copigmentos (iones metálicos, polifenoles) para estabilización de color.",
          de: "Anthocyane (rot/lila Pigmente in Beeren) bauen sich nach Kinetik erster Ordnung ab. Rate hängt ab von Temperatur (Q10≈2-4), pH (stabiler bei pH<3), Sauerstoffpresenz, Lichtexposition und Ascorbinsäure. Minimiert durch: Kühlung, Ansäuerung, Entlüftung, Dunkellagerung, Zugabe von Copigmenten (Metallionen, Polyphenole) zur Farbstabilisierung.",
          nl: "Anthocyanines (rode/paarse pigmenten in bessen) breken af volgens eerste-orde kinetiek. Snelheid hangt af van temperatuur (Q10≈2-4), pH (stabieler bij pH<3), zuurstofaanwezigheid, lichtblootstelling, en ascorbinezuur. Geminimaliseerd door: koeling, aanzuren, ontluchting, donkere opslag, toevoegen copigmenten (metaalionen, polyfenolen) voor kleurstabilisatie."
        }
      },
      {
        question: {
          en: "What is 'ultrasound-assisted extraction' (UAE) and its applications in juice processing?",
          es: "¿Qué es la 'extracción asistida por ultrasonido' (UAE) y sus aplicaciones en procesamiento de jugos?",
          de: "Was ist 'Ultraschall-unterstützte Extraktion' (UAE) und ihre Anwendungen in der Saftverarbeitung?",
          nl: "Wat is 'ultrasoon-ondersteunde extractie' (UAE) en toepassingen in sapverwerking?"
        },
        options: [
          { en: "Using 20-100 kHz ultrasonic waves creating cavitation for enhanced juice/bioactive compound extraction", es: "Usar ondas ultrasónicas de 20-100 kHz creando cavitación para extracción mejorada de jugo/compuestos bioactivos", de: "Verwendung von 20-100 kHz Ultraschallwellen zur Kavitationserzeugung für verbesserte Saft-/Bioaktivstoff-Extraktion", nl: "20-100 kHz ultrasone golven gebruiken die cavitatie creëren voor verbeterde sap/bioactieve verbinding extractie" },
          { en: "Sound wave pasteurization", es: "Pasteurización por ondas sonoras", de: "Schallwellen-Pasteurisierung", nl: "Geluidsgolf pasteurisatie" },
          { en: "Musical frequency treatment", es: "Tratamiento de frecuencia musical", de: "Musikalische Frequenzbehandlung", nl: "Muzikale frequentie behandeling" },
          { en: "Noise reduction technology", es: "Tecnología de reducción de ruido", de: "Lärmreduktionstechnologie", nl: "Geluidsreductie technologie" }
        ],
        correct: 0,
        explanation: {
          en: "Ultrasound (20-100 kHz) creates acoustic cavitation—formation and violent collapse of bubbles producing micro-jets and shock waves. This disrupts cell walls, increasing juice yield (5-30%) and extracting phenolics, carotenoids, and vitamins. Benefits: reduced extraction time, lower temperature, enhanced bioactive recovery, enzymatic activity acceleration.",
          es: "El ultrasonido (20-100 kHz) crea cavitación acústica—formación y colapso violento de burbujas produciendo micro-chorros y ondas de choque. Esto interrumpe paredes celulares, aumentando rendimiento de jugo (5-30%) y extrayendo fenólicos, carotenoides y vitaminas. Beneficios: tiempo de extracción reducido, temperatura más baja, recuperación bioactiva mejorada, aceleración de actividad enzimática.",
          de: "Ultraschall (20-100 kHz) erzeugt akustische Kavitation—Bildung und gewaltsamer Kollaps von Blasen, die Mikrojets und Stoßwellen produzieren. Dies zerstört Zellwände, erhöht Saftausbeute (5-30%) und extrahiert Phenole, Carotinoide und Vitamine. Vorteile: reduzierte Extraktionszeit, niedrigere Temperatur, verbesserte Bioaktivstoff-Rückgewinnung, Beschleunigung enzymatischer Aktivität.",
          nl: "Ultrasoon (20-100 kHz) creëert akoestische cavitatie—vorming en gewelddadige ineenstorting van bellen die micro-jets en schokgolven produceren. Dit verstoort celwanden, verhoogt sapopbrengst (5-30%) en extraheert fenolen, carotenoïden en vitamines. Voordelen: verkorte extractietijd, lagere temperatuur, verbeterde bioactieve terugwinning, enzymatische activiteit versnelling."
        }
      },
      {
        question: {
          en: "What is 'juice cloud stability' and what factors affect sedimentation in cloudy juices?",
          es: "¿Qué es la 'estabilidad de nube del jugo' y qué factores afectan la sedimentación en jugos turbios?",
          de: "Was ist 'Saftwolkenstabilität' und welche Faktoren beeinflussen Sedimentation in trüben Säften?",
          nl: "Wat is 'sap wolk stabiliteit' en welke factoren beïnvloeden sedimentatie in troebele sappen?"
        },
        options: [
          { en: "Particle size (<1µm stable), pectin content, ionic strength, pH, and homogenization determine cloud stability", es: "Tamaño de partícula (<1µm estable), contenido de pectina, fuerza iónica, pH, y homogeneización determinan estabilidad de nube", de: "Partikelgröße (<1µm stabil), Pektingehalt, Ionenstärke, pH und Homogenisierung bestimmen Wolkenstabilität", nl: "Deeltjesgrootte (<1µm stabiel), pectinegehalte, ionische sterkte, pH, en homogenisatie bepalen wolk stabiliteit" },
          { en: "Temperature control only", es: "Solo control de temperatura", de: "Nur Temperaturkontrolle", nl: "Alleen temperatuurcontrole" },
          { en: "Sugar concentration", es: "Concentración de azúcar", de: "Zuckerkonzentration", nl: "Suikerconcentratie" },
          { en: "Microbial activity", es: "Actividad microbiana", de: "Mikrobielle Aktivität", nl: "Microbiële activiteit" }
        ],
        correct: 0,
        explanation: {
          en: "Cloud stability depends on: particle size (submicron <1µm most stable), pectin as stabilizing colloid (prevents flocculation), pH (affects pectin charge), ionic strength (high Ca²⁺ causes aggregation), protein-pectin interactions. Improved by homogenization (reduces particle size), adding pectin, controlling mineral content, enzyme inactivation to prevent pectin degradation.",
          es: "La estabilidad de nube depende de: tamaño de partícula (submicrónico <1µm más estable), pectina como coloide estabilizante (previene floculación), pH (afecta carga de pectina), fuerza iónica (Ca²⁺ alto causa agregación), interacciones proteína-pectina. Mejorado por homogeneización (reduce tamaño de partícula), añadir pectina, controlar contenido mineral, inactivación enzimática para prevenir degradación de pectina.",
          de: "Wolkenstabilität hängt ab von: Partikelgröße (submikron <1µm am stabilsten), Pektin als stabilisierendes Kolloid (verhindert Flockung), pH (beeinflusst Pektinladung), Ionenstärke (hohes Ca²⁺ verursacht Aggregation), Protein-Pektin-Wechselwirkungen. Verbessert durch Homogenisierung (reduziert Partikelgröße), Pektinzugabe, Mineralkontrolle, Enzyminaktivierung zur Verhinderung von Pektinabbau.",
          nl: "Wolk stabiliteit hangt af van: deeltjesgrootte (submicron <1µm meest stabiel), pectine als stabiliserend colloïd (voorkomt flocculatie), pH (beïnvloedt pectine lading), ionische sterkte (hoge Ca²⁺ veroorzaakt aggregatie), eiwit-pectine interacties. Verbeterd door homogenisatie (vermindert deeltjesgrootte), pectine toevoegen, mineraalgehalte controleren, enzym inactivatie om pectine afbraak te voorkomen."
        }
      },
      {
        question: {
          en: "What is 'thermosonication' and how does it enhance juice pasteurization efficiency?",
          es: "¿Qué es la 'termosonicación' y cómo mejora la eficiencia de pasteurización de jugos?",
          de: "Was ist 'Thermosonication' und wie verbessert sie die Saftp asteurisierungseffizienz?",
          nl: "Wat is 'thermosonicatie' en hoe verbetert het sappasteurisatie efficiëntie?"
        },
        options: [
          { en: "Combining mild heat (50-60°C) with ultrasound (20-100 kHz) for synergistic microbial inactivation", es: "Combinar calor suave (50-60°C) con ultrasonido (20-100 kHz) para inactivación microbiana sinérgica", de: "Kombination milder Wärme (50-60°C) mit Ultraschall (20-100 kHz) für synergistische mikrobielle Inaktivierung", nl: "Milde warmte (50-60°C) combineren met ultrasoon (20-100 kHz) voor synergistische microbiële inactivatie" },
          { en: "High temperature steam treatment", es: "Tratamiento de vapor a alta temperatura", de: "Hochtemperatur-Dampfbehandlung", nl: "Hoge temperatuur stoombehandeling" },
          { en: "Acoustic pasteurization only", es: "Solo pasteurización acústica", de: "Nur akustische Pasteurisierung", nl: "Alleen akoestische pasteurisatie" },
          { en: "Chemical sterilization method", es: "Método de esterilización química", de: "Chemische Sterilisationsmethode", nl: "Chemische sterilisatiemethode" }
        ],
        correct: 0,
        explanation: {
          en: "Thermosonication combines moderate heat (50-60°C) with ultrasound (20-100 kHz). Ultrasound cavitation damages microbial cell membranes while heat denatures enzymes/proteins. Synergistic effect achieves pasteurization at lower temperatures/times than conventional thermal treatment, better preserving flavor, vitamins, and bioactive compounds. Effective against bacteria, yeasts, molds, and enzymes.",
          es: "La termosonicación combina calor moderado (50-60°C) con ultrasonido (20-100 kHz). La cavitación ultrasónica daña membranas celulares microbianas mientras el calor desnaturaliza enzimas/proteínas. Efecto sinérgico logra pasteurización a temperaturas/tiempos más bajos que tratamiento térmico convencional, preservando mejor sabor, vitaminas y compuestos bioactivos. Efectivo contra bacterias, levaduras, mohos y enzimas.",
          de: "Thermosonication kombiniert moderate Wärme (50-60°C) mit Ultraschall (20-100 kHz). Ultraschall-Kavitation schädigt mikrobielle Zellmembranen, während Wärme Enzyme/Proteine denaturiert. Synergistischer Effekt erreicht Pasteurisierung bei niedrigeren Temperaturen/Zeiten als konventionelle Wärmebehandlung, erhält besser Geschmack, Vitamine und bioaktive Verbindungen. Wirksam gegen Bakterien, Hefen, Schimmel und Enzyme.",
          nl: "Thermosonicatie combineert gematigde warmte (50-60°C) met ultrasoon (20-100 kHz). Ultrasone cavitatie beschadigt microbiële celmembranen terwijl warmte enzymen/eiwitten denatureert. Synergistisch effect bereikt pasteurisatie bij lagere temperaturen/tijden dan conventionele thermische behandeling, behoudt beter smaak, vitamines en bioactieve verbindingen. Effectief tegen bacteriën, gisten, schimmels en enzymen."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();
