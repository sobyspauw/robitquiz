// Quiz Level 10: Drinken - Sappen (Expert Juice Knowledge)
(function() {
  const level10 = {
    name: {
      en: "Expert Juice Knowledge",
      es: "Conocimientos Expertos de Jugos",
      de: "Experten Saft-Kenntnisse",
      nl: "Expert Sappen Kennis"
    },
    questions: [
      {
        question: {
          en: "What is the significance of anthocyanin stability in berry juice processing?",
          es: "¿Cuál es la importancia de la estabilidad de antocianinas en el procesamiento de jugos de bayas?",
          de: "Was ist die Bedeutung der Anthocyanin-Stabilität in der Beerensaftverarbeitung?",
          nl: "Wat is de betekenis van anthocyanine stabiliteit in bessensapverwerking?"
        },
        options: [
          { en: "Determines color retention and antioxidant potency", es: "Determina la retención de color y potencia antioxidante", de: "Bestimmt Farberhaltung und antioxidative Potenz", nl: "Bepaalt kleurbehoud en antioxidant potentie" },
          { en: "Only affects sweetness levels", es: "Solo afecta los niveles de dulzura", de: "Beeinflusst nur Süßegrade", nl: "Beïnvloedt alleen zoetheidsgraden" },
          { en: "Has no impact on juice quality", es: "No tiene impacto en la calidad del jugo", de: "Hat keinen Einfluss auf die Saftqualität", nl: "Heeft geen impact op sapkwaliteit" },
          { en: "Only matters for artificial colors", es: "Solo importa para colores artificiales", de: "Ist nur für künstliche Farben wichtig", nl: "Is alleen belangrijk voor kunstmatige kleuren" }
        ],
        correct: 0,
        explanation: {
          en: "Anthocyanins are responsible for red, purple, and blue colors in berries and are powerful antioxidants. Their stability during processing determines both color retention and health benefits in the final product.",
          es: "Las antocianinas son responsables de los colores rojos, morados y azules en las bayas y son antioxidantes poderosos. Su estabilidad durante el procesamiento determina tanto la retención de color como los beneficios para la salud en el producto final.",
          de: "Anthocyane sind für rote, violette und blaue Farben in Beeren verantwortlich und sind starke Antioxidantien. Ihre Stabilität während der Verarbeitung bestimmt sowohl Farberhaltung als auch Gesundheitsvorteile im Endprodukt.",
          nl: "Anthocyanines zijn verantwoordelijk voor rode, paarse en blauwe kleuren in bessen en zijn krachtige antioxidanten. Hun stabiliteit tijdens verwerking bepaalt zowel kleurbehoud als gezondheidsvoordelen in het eindproduct."
        }
      },
      {
        question: {
          en: "What role does pectin methylesterase play in citrus juice cloud stability?",
          es: "¿Qué papel juega la pectina metilesterasa en la estabilidad de la nube del jugo cítrico?",
          de: "Welche Rolle spielt Pektinmethylesterase bei der Trübungsstabilität von Zitrusäften?",
          nl: "Welke rol speelt pectine methylesterase bij citrussap wolkstabiliteit?"
        },
        options: [
          { en: "Can cause precipitation and clarity loss if not controlled", es: "Puede causar precipitación y pérdida de claridad si no se controla", de: "Kann bei fehlender Kontrolle Ausfällung und Klarheitsverlust verursachen", nl: "Kan neerslag en helderheidsverlies veroorzaken indien niet gecontroleerd" },
          { en: "Always improves juice quality", es: "Siempre mejora la calidad del jugo", de: "Verbessert immer die Saftqualität", nl: "Verbetert altijd de sapkwaliteit" },
          { en: "Only affects taste, not appearance", es: "Solo afecta el sabor, no la apariencia", de: "Beeinflusst nur Geschmack, nicht Aussehen", nl: "Beïnvloedt alleen smaak, niet uiterlijk" },
          { en: "Has no effect on citrus juices", es: "No tiene efecto en jugos cítricos", de: "Hat keine Wirkung auf Zitrusäfte", nl: "Heeft geen effect op citrussappen" }
        ],
        correct: 0,
        explanation: {
          en: "Pectin methylesterase removes methyl groups from pectin, creating low-methoxyl pectin that can gel with calcium ions, causing unwanted precipitation and cloud loss in citrus juices.",
          es: "La pectina metilesterasa elimina grupos metilo de la pectina, creando pectina de bajo metoxilo que puede formar gel con iones de calcio, causando precipitación no deseada y pérdida de nube en jugos cítricos.",
          de: "Pektinmethylesterase entfernt Methylgruppen aus Pektin und erzeugt niedrigmethoxyliertes Pektin, das mit Calciumionen gelieren kann, was unerwünschte Ausfällung und Trübungsverlust in Zitrusäften verursacht.",
          nl: "Pectine methylesterase verwijdert methylgroepen van pectine, waardoor laag methoxyl pectine ontstaat dat kan geleren met calciumionen, wat ongewenste neerslag en wolkverlies in citrussappen veroorzaakt."
        }
      },
      {
        question: {
          en: "Which analytical method best detects juice adulteration with synthetic acids?",
          es: "¿Qué método analítico detecta mejor la adulteración de jugo con ácidos sintéticos?",
          de: "Welche Analysemethode erkennt Saftverfälschung mit synthetischen Säuren am besten?",
          nl: "Welke analytische methode detecteert sapvervalsing met synthetische zuren het best?"
        },
        options: [
          { en: "Stable isotope ratio mass spectrometry", es: "Espectrometría de masas de relación isotópica estable", de: "Stabile Isotopenverhältnis-Massenspektrometrie", nl: "Stabiele isotoop verhouding massaspectrometrie" },
          { en: "Simple pH measurement", es: "Medición simple de pH", de: "Einfache pH-Messung", nl: "Eenvoudige pH meting" },
          { en: "Color analysis only", es: "Solo análisis de color", de: "Nur Farbanalyse", nl: "Alleen kleuranalyse" },
          { en: "Taste testing panels", es: "Paneles de degustación", de: "Verkostungspanels", nl: "Smaaktest panels" }
        ],
        correct: 0,
        explanation: {
          en: "Stable isotope ratio mass spectrometry can distinguish between naturally occurring and synthetic organic acids by analyzing carbon isotope ratios, which differ based on their origin.",
          es: "La espectrometría de masas de relación isotópica estable puede distinguir entre ácidos orgánicos naturales y sintéticos analizando relaciones de isótopos de carbono, que difieren según su origen.",
          de: "Stabile Isotopenverhältnis-Massenspektrometrie kann zwischen natürlich vorkommenden und synthetischen organischen Säuren unterscheiden, indem sie Kohlenstoff-Isotopenverhältnisse analysiert, die je nach Herkunft unterschiedlich sind.",
          nl: "Stabiele isotoop verhouding massaspectrometrie kan onderscheid maken tussen natuurlijk voorkomende en synthetische organische zuren door koolstof isotoop verhoudingen te analyseren, die verschillen op basis van hun oorsprong."
        }
      },
      {
        question: {
          en: "What is the optimal membrane cutoff for juice ultrafiltration to retain beneficial compounds?",
          es: "¿Cuál es el corte de membrana óptimo para ultrafiltración de jugos para retener compuestos beneficiosos?",
          de: "Was ist der optimale Membran-Cutoff für Saft-Ultrafiltration zur Retention nützlicher Verbindungen?",
          nl: "Wat is de optimale membraan cutoff voor sap ultrafiltratie om gunstige verbindingen te behouden?"
        },
        options: [
          { en: "10-30 kDa to retain oligosaccharides while removing pathogens", es: "10-30 kDa para retener oligosacáridos mientras elimina patógenos", de: "10-30 kDa zur Retention von Oligosacchariden bei gleichzeitiger Entfernung von Pathogenen", nl: "10-30 kDa om oligosachariden te behouden terwijl pathogenen worden verwijderd" },
          { en: "1-5 kDa for maximum filtration", es: "1-5 kDa para filtración máxima", de: "1-5 kDa für maximale Filtration", nl: "1-5 kDa voor maximale filtratie" },
          { en: "100+ kDa for minimal processing", es: "100+ kDa para procesamiento mínimo", de: "100+ kDa für minimale Verarbeitung", nl: "100+ kDa voor minimale verwerking" },
          { en: "No specific cutoff needed", es: "No se necesita corte específico", de: "Kein spezifischer Cutoff nötig", nl: "Geen specifieke cutoff nodig" }
        ],
        correct: 0,
        explanation: {
          en: "A 10-30 kDa membrane cutoff effectively removes bacteria and viruses while allowing beneficial oligosaccharides and flavor compounds to pass through, optimizing both safety and quality.",
          es: "Un corte de membrana de 10-30 kDa elimina efectivamente bacterias y virus mientras permite que pasen oligosacáridos beneficiosos y compuestos de sabor, optimizando tanto seguridad como calidad.",
          de: "Ein 10-30 kDa Membran-Cutoff entfernt effektiv Bakterien und Viren, während nützliche Oligosaccharide und Geschmacksverbindungen durchgelassen werden, wodurch sowohl Sicherheit als auch Qualität optimiert werden.",
          nl: "Een 10-30 kDa membraan cutoff verwijdert effectief bacteriën en virussen terwijl gunstige oligosachariden en smaakverbindingen erdoor kunnen, wat zowel veiligheid als kwaliteit optimaliseert."
        }
      },
      {
        question: {
          en: "How does water activity (aw) control microbial growth in concentrated juices?",
          es: "¿Cómo controla la actividad del agua (aw) el crecimiento microbiano en jugos concentrados?",
          de: "Wie kontrolliert Wasseraktivität (aw) das mikrobielle Wachstum in konzentrierten Säften?",
          nl: "Hoe controleert water activiteit (aw) microbiële groei in geconcentreerde sappen?"
        },
        options: [
          { en: "Below 0.85 aw prevents most pathogenic bacteria and mold growth", es: "Por debajo de 0.85 aw previene la mayoría de bacterias patógenas y crecimiento de moho", de: "Unter 0.85 aw verhindert die meisten pathogenen Bakterien und Schimmelwachstum", nl: "Onder 0.85 aw voorkomt de meeste pathogene bacteriën en schimmelgroei" },
          { en: "Water activity has no effect on microbes", es: "La actividad del agua no tiene efecto en microbios", de: "Wasseraktivität hat keine Wirkung auf Mikroben", nl: "Water activiteit heeft geen effect op microben" },
          { en: "Higher water activity always prevents growth", es: "Mayor actividad del agua siempre previene crecimiento", de: "Höhere Wasseraktivität verhindert immer Wachstum", nl: "Hogere water activiteit voorkomt altijd groei" },
          { en: "Only temperature matters for preservation", es: "Solo la temperatura importa para preservación", de: "Nur Temperatur ist wichtig für Konservierung", nl: "Alleen temperatuur is belangrijk voor conservering" }
        ],
        correct: 0,
        explanation: {
          en: "Water activity below 0.85 creates conditions where most pathogenic bacteria cannot survive, and below 0.70 prevents mold growth, making it an effective preservation method for concentrated juices.",
          es: "La actividad del agua por debajo de 0.85 crea condiciones donde la mayoría de bacterias patógenas no pueden sobrevivir, y por debajo de 0.70 previene crecimiento de moho, haciéndolo un método efectivo de preservación para jugos concentrados.",
          de: "Wasseraktivität unter 0.85 schafft Bedingungen, unter denen die meisten pathogenen Bakterien nicht überleben können, und unter 0.70 verhindert Schimmelwachstum, was es zu einer effektiven Konservierungsmethode für konzentrierte Säfte macht.",
          nl: "Water activiteit onder 0.85 creëert omstandigheden waarin de meeste pathogene bacteriën niet kunnen overleven, en onder 0.70 voorkomt schimmelgroei, waardoor het een effectieve conserveringsmethode is voor geconcentreerde sappen."
        }
      },
      {
        question: {
          en: "What is the mechanism behind enzymatic browning in apple juice?",
          es: "¿Cuál es el mecanismo detrás del pardeamiento enzimático en el jugo de manzana?",
          de: "Was ist der Mechanismus hinter enzymatischer Bräunung in Apfelsaft?",
          nl: "Wat is het mechanisme achter enzymatische bruining in appelsap?"
        },
        options: [
          { en: "Polyphenol oxidase converts phenolic compounds to quinones, which polymerize into brown pigments", es: "La polifenol oxidasa convierte compuestos fenólicos en quinonas, que se polimerizan en pigmentos marrones", de: "Polyphenoloxidase wandelt phenolische Verbindungen in Chinone um, die zu braunen Pigmenten polymerisieren", nl: "Polyfenol oxidase zet fenolische verbindingen om in quinonen, die polymeriseren tot bruine pigmenten" },
          { en: "Natural aging of fruit sugars", es: "Envejecimiento natural de azúcares de fruta", de: "Natürliche Alterung von Fruchtzuckern", nl: "Natuurlijke veroudering van fruitsuikers" },
          { en: "Reaction with packaging materials", es: "Reacción con materiales de empaque", de: "Reaktion mit Verpackungsmaterialien", nl: "Reactie met verpakkingsmaterialen" },
          { en: "Temperature-induced caramelization", es: "Caramelización inducida por temperatura", de: "Temperaturinduzierte Karamelisierung", nl: "Temperatuur-geïnduceerde karamelisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Polyphenol oxidase enzyme oxidizes phenolic compounds in apples to quinones, which then polymerize and react with amino acids to form brown melanoidin pigments, causing the characteristic browning.",
          es: "La enzima polifenol oxidasa oxida compuestos fenólicos en manzanas a quinonas, que luego se polimerizan y reaccionan con aminoácidos para formar pigmentos melanoidínicos marrones, causando el pardeamiento característico.",
          de: "Das Enzym Polyphenoloxidase oxidiert phenolische Verbindungen in Äpfeln zu Chinonen, die dann polymerisieren und mit Aminosäuren reagieren, um braune Melanoidin-Pigmente zu bilden, was die charakteristische Bräunung verursacht.",
          nl: "Het enzym polyfenol oxidase oxideert fenolische verbindingen in appels tot quinonen, die dan polymeriseren en reageren met aminozuren om bruine melanoidine pigmenten te vormen, wat de karakteristieke bruining veroorzaakt."
        }
      },
      {
        question: {
          en: "Which factor most significantly affects carotenoid bioavailability in vegetable juices?",
          es: "¿Qué factor afecta más significativamente la biodisponibilidad de carotenoides en jugos de vegetales?",
          de: "Welcher Faktor beeinflusst die Bioverfügbarkeit von Carotinoiden in Gemüsesäften am stärksten?",
          nl: "Welke factor beïnvloedt de biobeschikbaarheid van carotenoïden in groentesappen het meest significant?"
        },
        options: [
          { en: "Presence of lipids and mechanical cell disruption", es: "Presencia de lípidos y disrupción celular mecánica", de: "Anwesenheit von Lipiden und mechanische Zellstörung", nl: "Aanwezigheid van lipiden en mechanische celverstoringen" },
          { en: "Storage temperature only", es: "Solo temperatura de almacenamiento", de: "Nur Lagertemperatur", nl: "Alleen opslagtemperatuur" },
          { en: "Container material type", es: "Tipo de material del contenedor", de: "Art des Behältermaterials", nl: "Type containermaterial" },
          { en: "Juice pH level", es: "Nivel de pH del jugo", de: "pH-Wert des Saftes", nl: "Sap pH niveau" }
        ],
        correct: 0,
        explanation: {
          en: "Carotenoids are fat-soluble compounds that require lipids for optimal absorption. Mechanical processing that disrupts cell walls also releases bound carotenoids, significantly improving bioavailability.",
          es: "Los carotenoides son compuestos liposolubles que requieren lípidos para absorción óptima. El procesamiento mecánico que rompe paredes celulares también libera carotenoides unidos, mejorando significativamente la biodisponibilidad.",
          de: "Carotinoide sind fettlösliche Verbindungen, die Lipide für optimale Absorption benötigen. Mechanische Verarbeitung, die Zellwände aufbricht, setzt auch gebundene Carotinoide frei und verbessert die Bioverfügbarkeit erheblich.",
          nl: "Carotenoïden zijn vetoplosbare verbindingen die lipiden nodig hebben voor optimale absorptie. Mechanische verwerking die celwanden verstoort, maakt ook gebonden carotenoïden vrij, wat de biobeschikbaarheid aanzienlijk verbetert."
        }
      },
      {
        question: {
          en: "What is the role of hesperidin in citrus juice quality and processing?",
          es: "¿Cuál es el papel de la hesperidina en la calidad y procesamiento de jugos cítricos?",
          de: "Welche Rolle spielt Hesperidin bei der Qualität und Verarbeitung von Zitrusäften?",
          nl: "Wat is de rol van hesperidine in citrus sapkwaliteit en verwerking?"
        },
        options: [
          { en: "Provides cloud stability and bitter taste; degrades with heat processing", es: "Proporciona estabilidad de nube y sabor amargo; se degrada con procesamiento térmico", de: "Bietet Trübungsstabilität und bitteren Geschmack; baut sich bei Wärmebehandlung ab", nl: "Biedt wolkstabiliteit en bittere smaak; breekt af bij warmtebehandeling" },
          { en: "Only affects sweetness levels", es: "Solo afecta niveles de dulzura", de: "Beeinflusst nur Süßegrade", nl: "Beïnvloedt alleen zoetheidsgraden" },
          { en: "Increases during thermal processing", es: "Aumenta durante procesamiento térmico", de: "Steigt während thermischer Verarbeitung", nl: "Neemt toe tijdens thermische verwerking" },
          { en: "Has no impact on juice properties", es: "No tiene impacto en propiedades del jugo", de: "Hat keinen Einfluss auf Safteigenschaften", nl: "Heeft geen impact op sapeigenschappen" }
        ],
        correct: 0,
        explanation: {
          en: "Hesperidin is a flavonoid that contributes to cloud stability and characteristic bitter notes in citrus juices. Heat processing causes degradation, reducing both bitterness and potentially affecting cloud stability.",
          es: "La hesperidina es un flavonoide que contribuye a la estabilidad de la nube y notas amargas características en jugos cítricos. El procesamiento térmico causa degradación, reduciendo tanto el amargor como potencialmente afectando la estabilidad de la nube.",
          de: "Hesperidin ist ein Flavonoid, das zur Trübungsstabilität und charakteristischen bitteren Noten in Zitrusäften beiträgt. Wärmebehandlung verursacht Abbau, reduziert sowohl Bitterkeit als auch möglicherweise die Trübungsstabilität.",
          nl: "Hesperidine is een flavonoïd dat bijdraagt aan wolkstabiliteit en karakteristieke bittere tonen in citrussappen. Warmtebehandeling veroorzaakt afbraak, wat zowel bitterheid vermindert als mogelijk wolkstabiliteit beïnvloedt."
        }
      },
      {
        question: {
          en: "Which processing technology best preserves heat-sensitive vitamins while achieving commercial sterility?",
          es: "¿Qué tecnología de procesamiento preserva mejor las vitaminas sensibles al calor mientras logra esterilidad comercial?",
          de: "Welche Verarbeitungstechnologie erhält hitzeempfindliche Vitamine am besten bei gleichzeitiger Erreichung kommerzieller Sterilität?",
          nl: "Welke verwerkingstechnologie behoudt hittegevoelige vitamines het best terwijl commerciële steriliteit wordt bereikt?"
        },
        options: [
          { en: "HTST (High Temperature Short Time) at 95°C for 15 seconds", es: "HTST (Alta Temperatura Tiempo Corto) a 95°C por 15 segundos", de: "HTST (Hochtemperatur Kurzzeit) bei 95°C für 15 Sekunden", nl: "HTST (Hoge Temperatuur Korte Tijd) bij 95°C voor 15 seconden" },
          { en: "Low temperature extended time processing", es: "Procesamiento de baja temperatura tiempo extendido", de: "Niedrigtemperatur-Langzeitverarbeitung", nl: "Lage temperatuur verlengde tijd verwerking" },
          { en: "Multiple heating and cooling cycles", es: "Múltiples ciclos de calentamiento y enfriamiento", de: "Mehrere Heiz- und Kühlzyklen", nl: "Meerdere verwarmings- en koelcycli" },
          { en: "Room temperature processing only", es: "Solo procesamiento a temperatura ambiente", de: "Nur Raumtemperaturverarbeitung", nl: "Alleen kamertemperatuur verwerking" }
        ],
        correct: 0,
        explanation: {
          en: "HTST processing provides optimal balance between microbial destruction and vitamin preservation. The high temperature quickly eliminates pathogens while the short exposure time minimizes thermal damage to heat-sensitive vitamins.",
          es: "El procesamiento HTST proporciona balance óptimo entre destrucción microbiana y preservación de vitaminas. La alta temperatura elimina rápidamente patógenos mientras el tiempo corto de exposición minimiza daño térmico a vitaminas sensibles al calor.",
          de: "HTST-Verarbeitung bietet optimales Gleichgewicht zwischen mikrobieller Zerstörung und Vitaminerhaltung. Die hohe Temperatur eliminiert schnell Pathogene, während die kurze Expositionszeit thermischen Schaden an hitzeempfindlichen Vitaminen minimiert.",
          nl: "HTST verwerking biedt optimale balans tussen microbiële vernietiging en vitamine behoud. De hoge temperatuur elimineert snel pathogenen terwijl de korte blootstellingstijd thermische schade aan hittegevoelige vitamines minimaliseert."
        }
      },
      {
        question: {
          en: "What is the relationship between Brix levels and juice concentration economics?",
          es: "¿Cuál es la relación entre los niveles de Brix y la economía de concentración de jugos?",
          de: "Was ist die Beziehung zwischen Brix-Werten und Saftkonzentrations-Ökonomie?",
          nl: "Wat is de relatie tussen Brix niveaus en sapconcentratie economie?"
        },
        options: [
          { en: "Higher Brix reduces transportation costs but requires more energy for concentration", es: "Mayor Brix reduce costos de transporte pero requiere más energía para concentración", de: "Höhere Brix reduziert Transportkosten, erfordert aber mehr Energie für Konzentration", nl: "Hogere Brix vermindert transportkosten maar vereist meer energie voor concentratie" },
          { en: "Brix levels have no economic impact", es: "Los niveles de Brix no tienen impacto económico", de: "Brix-Werte haben keine wirtschaftlichen Auswirkungen", nl: "Brix niveaus hebben geen economische impact" },
          { en: "Lower Brix is always more profitable", es: "Menor Brix siempre es más rentable", de: "Niedrigere Brix ist immer profitabler", nl: "Lagere Brix is altijd winstgevender" },
          { en: "Brix only affects taste, not costs", es: "Brix solo afecta sabor, no costos", de: "Brix beeinflusst nur Geschmack, nicht Kosten", nl: "Brix beïnvloedt alleen smaak, niet kosten" }
        ],
        correct: 0,
        explanation: {
          en: "Higher Brix concentrates have less water content, reducing shipping weight and storage costs. However, achieving higher concentrations requires more energy for water removal, creating a balance point for economic optimization.",
          es: "Los concentrados de mayor Brix tienen menos contenido de agua, reduciendo peso de envío y costos de almacenamiento. Sin embargo, lograr mayores concentraciones requiere más energía para remoción de agua, creando un punto de equilibrio para optimización económica.",
          de: "Konzentrate mit höheren Brix-Werten haben weniger Wassergehalt, was Versandgewicht und Lagerkosten reduziert. Höhere Konzentrationen zu erreichen erfordert jedoch mehr Energie für Wasserentfernung, was einen Gleichgewichtspunkt für wirtschaftliche Optimierung schafft.",
          nl: "Hogere Brix concentraten hebben minder watergehalte, wat verzendgewicht en opslagkosten vermindert. Het bereiken van hogere concentraties vereist echter meer energie voor waterverwijdering, wat een evenwichtspunt creëert voor economische optimalisatie."
        }
      },
      {
        question: {
          en: "How does blockchain technology enhance traceability and authentication in premium juice supply chains and what are its limitations?",
          es: "¿Cómo la tecnología blockchain mejora la trazabilidad y autenticación en cadenas de suministro de jugos premium y cuáles son sus limitaciones?",
          de: "Wie verbessert Blockchain-Technologie Rückverfolgbarkeit und Authentifizierung in Premium-Saft-Lieferketten und was sind ihre Grenzen?",
          nl: "Hoe verbetert blockchain technologie traceerbaarheid en authenticatie in premium sap toeleveringsketens en wat zijn de beperkingen?"
        },
        options: [
          { en: "Creates immutable record from farm to consumer ensuring provenance but requires industry-wide adoption and energy-intensive consensus mechanisms", es: "Crea registro inmutable de granja a consumidor asegurando procedencia pero requiere adopción industrial amplia y mecanismos de consenso intensivos en energía", de: "Erstellt unveränderliche Aufzeichnung vom Bauernhof zum Verbraucher zur Herkunftssicherung, erfordert aber branchenweite Adoption und energieintensive Konsensmechanismen", nl: "Creëert onveranderlijk record van boerderij tot consument voor herkomstzekerheid maar vereist industrie-brede adoptie en energie-intensieve consensusmechanismen" },
          { en: "Only improves packaging design", es: "Solo mejora diseño de empaque", de: "Verbessert nur Verpackungsdesign", nl: "Verbetert alleen verpakkingsontwerp" },
          { en: "Replaces all quality control testing", es: "Reemplaza todas pruebas de control de calidad", de: "Ersetzt alle Qualitätskontrolltests", nl: "Vervangt alle kwaliteitscontrole testen" },
          { en: "Only affects financial transactions", es: "Solo afecta transacciones financieras", de: "Betrifft nur Finanztransaktionen", nl: "Beïnvloedt alleen financiële transacties" }
        ],
        correct: 0,
        explanation: {
          en: "Blockchain creates tamper-proof distributed ledger recording every supply chain transaction (harvest conditions, processing parameters, transportation, storage). Smart contracts automate compliance verification. Each batch gets unique digital identity preventing counterfeiting. Benefits: transparency for consumers, rapid contamination source identification, premium brand protection. Limitations: requires participation from all stakeholders (farmers, processors, distributors, retailers), high initial implementation costs, energy consumption from proof-of-work consensus (though proof-of-stake reduces this), data quality depends on accurate input (garbage in, garbage out), integration with existing ERP/traceability systems challenging.",
          es: "Blockchain crea libro mayor distribuido a prueba de manipulaciones registrando cada transacción de cadena de suministro (condiciones cosecha, parámetros procesamiento, transporte, almacenamiento). Contratos inteligentes automatizan verificación de cumplimiento. Cada lote obtiene identidad digital única previniendo falsificación. Beneficios: transparencia consumidores, identificación rápida fuente contaminación, protección marca premium. Limitaciones: requiere participación todos interesados (agricultores, procesadores, distribuidores, minoristas), altos costos implementación inicial, consumo energía de prueba de trabajo (aunque prueba de participación reduce esto), calidad datos depende entrada precisa (basura entra, basura sale), integración sistemas ERP/trazabilidad existentes desafiante.",
          de: "Blockchain erstellt manipulationssicheres verteiltes Hauptbuch zur Aufzeichnung jeder Lieferkettentransaktion (Erntebedingungen, Verarbeitungsparameter, Transport, Lagerung). Smart Contracts automatisieren Compliance-Überprüfung. Jede Charge erhält einzigartige digitale Identität gegen Fälschung. Vorteile: Transparenz für Verbraucher, schnelle Kontaminationsquellenidentifikation, Premium-Markenschutz. Einschränkungen: erfordert Beteiligung aller Stakeholder (Bauern, Verarbeiter, Händler, Einzelhändler), hohe anfängliche Implementierungskosten, Energieverbrauch durch Proof-of-Work-Konsens (obwohl Proof-of-Stake dies reduziert), Datenqualität hängt von genauer Eingabe ab (Müll rein, Müll raus), Integration mit bestehenden ERP/Rückverfolgbarkeitssystemen herausfordernd.",
          nl: "Blockchain creëert fraudebestendig gedistribueerd grootboek dat elke toeleveringsketen transactie registreert (oogstomstandigheden, verwerkingsparameters, transport, opslag). Smart contracts automatiseren nalevingsverificatie. Elke batch krijgt unieke digitale identiteit tegen vervalsing. Voordelen: transparantie voor consumenten, snelle identificatie besmettingsbron, bescherming premium merk. Beperkingen: vereist deelname alle belanghebbenden (boeren, verwerkers, distributeurs, detailhandelaren), hoge initiële implementatiekosten, energieverbruik van proof-of-work consensus (hoewel proof-of-stake dit vermindert), datakwaliteit hangt af van nauwkeurige invoer (rommel in, rommel uit), integratie met bestaande ERP/traceerbaarheidssystemen uitdagend."
        }
      },
      {
        question: {
          en: "What role does CRISPR gene editing play in developing fruit varieties optimized for juice production and what are the regulatory considerations?",
          es: "¿Qué papel juega la edición genética CRISPR en desarrollar variedades de frutas optimizadas para producción de jugos y cuáles son consideraciones regulatorias?",
          de: "Welche Rolle spielt CRISPR-Genbearbeitung bei der Entwicklung von Fruchtsorten optimiert für Saftproduktion und was sind die regulatorischen Überlegungen?",
          nl: "Welke rol speelt CRISPR genbewerking in het ontwikkelen van fruitvariëteiten geoptimaliseerd voor sapproductie en wat zijn de regelgevende overwegingen?"
        },
        options: [
          { en: "Precise genome editing creates fruits with higher juice yield, enhanced nutrition, reduced browning, less bitterness; regulatory status varies (EU restrictive, US/Japan more permissive)", es: "Edición genómica precisa crea frutas con mayor rendimiento jugo, nutrición mejorada, menor pardeamiento, menos amargor; estatus regulatorio varía (UE restrictiva, EEUU/Japón más permisivos)", de: "Präzise Genombearbeitung schafft Früchte mit höherer Saftausbeute, verbesserter Ernährung, reduzierter Bräunung, weniger Bitterkeit; regulatorischer Status variiert (EU restriktiv, USA/Japan permissiver)", nl: "Precieze genoombewerking creëert fruit met hogere sapopbrengst, verbeterde voeding, verminderde verkleuring, minder bitterheid; regelgevende status varieert (EU restrictief, VS/Japan meer permissief)" },
          { en: "Only changes fruit color", es: "Solo cambia color de fruta", de: "Ändert nur Fruchtfarbe", nl: "Verandert alleen fruitkleur" },
          { en: "Creates completely synthetic organisms", es: "Crea organismos completamente sintéticos", de: "Erstellt vollständig synthetische Organismen", nl: "Creëert volledig synthetische organismen" },
          { en: "Has no application in agriculture", es: "No tiene aplicación en agricultura", de: "Hat keine Anwendung in der Landwirtschaft", nl: "Heeft geen toepassing in landbouw" }
        ],
        correct: 0,
        explanation: {
          en: "CRISPR-Cas9 enables precise targeted mutations without introducing foreign DNA (unlike traditional GMOs). Applications: knocking out polyphenol oxidase genes (PPO) to prevent browning in apples, reducing limonin synthase for less-bitter citrus, enhancing anthocyanin biosynthesis pathways for higher antioxidants, modifying pectin methylesterase for better texture, increasing sugar transporters for sweeter fruit. Benefits: faster breeding cycles (years vs decades), precision targeting specific genes, stackable traits. Regulatory landscape: EU Court of Justice (2018) ruled CRISPR falls under GMO directive requiring extensive approval; USA USDA considers CRISPR-edited crops without foreign DNA as non-GMO (SECURE rule 2020); Japan (2019) exempts precise gene editing without inserted DNA; Canada/Australia case-by-case evaluation. Consumer acceptance challenges remain despite scientific consensus on safety.",
          es: "CRISPR-Cas9 permite mutaciones dirigidas precisas sin introducir ADN extraño (a diferencia OGM tradicionales). Aplicaciones: inactivar genes polifenol oxidasa (PPO) para prevenir pardeamiento en manzanas, reducir limonina sintasa para cítricos menos amargos, mejorar vías biosíntesis antocianinas para más antioxidantes, modificar pectina metilesterasa para mejor textura, aumentar transportadores azúcar para fruta más dulce. Beneficios: ciclos mejoramiento más rápidos (años vs décadas), precisión dirigiendo genes específicos, rasgos apilables. Panorama regulatorio: Tribunal Justicia UE (2018) dictaminó CRISPR bajo directiva OGM requiriendo aprobación extensiva; USDA EEUU considera cultivos editados CRISPR sin ADN extraño como no-OGM (regla SECURE 2020); Japón (2019) exime edición genética precisa sin ADN insertado; Canadá/Australia evaluación caso por caso. Desafíos aceptación consumidor permanecen pese consenso científico sobre seguridad.",
          de: "CRISPR-Cas9 ermöglicht präzise gezielte Mutationen ohne Einführung fremder DNA (im Gegensatz zu traditionellen GVOs). Anwendungen: Ausschalten von Polyphenoloxidase-Genen (PPO) zur Bräunungsprävention in Äpfeln, Reduzierung von Limonin-Synthase für weniger-bittere Zitrusfrüchte, Verbesserung Anthocyanin-Biosynthesewege für höhere Antioxidantien, Modifikation Pektin-Methylesterase für bessere Textur, Erhöhung Zuckertransporter für süßere Früchte. Vorteile: schnellere Züchtungszyklen (Jahre vs Jahrzehnte), Präzision bei Targeting spezifischer Gene, stapelbare Eigenschaften. Regulatorische Landschaft: EuGH (2018) entschied CRISPR fällt unter GVO-Richtlinie erfordert umfangreiche Genehmigung; USA USDA betrachtet CRISPR-editierte Pflanzen ohne Fremd-DNA als Nicht-GVO (SECURE-Regel 2020); Japan (2019) befreit präzise Genbearbeitung ohne eingefügte DNA; Kanada/Australien Einzelfallbewertung. Verbraucherakzeptanz-Herausforderungen bleiben trotz wissenschaftlichem Konsens über Sicherheit.",
          nl: "CRISPR-Cas9 maakt precieze gerichte mutaties mogelijk zonder introductie van vreemd DNA (in tegenstelling tot traditionele GMO's). Toepassingen: uitschakelen polyphenol oxidase genen (PPO) om verkleuring in appels te voorkomen, verminderen limonine synthase voor minder-bittere citrus, verbeteren anthocyanine biosynthese routes voor hogere antioxidanten, modificeren pectine methylesterase voor betere textuur, verhogen suikertransporters voor zoeter fruit. Voordelen: snellere veredelingscycli (jaren vs decennia), precisie bij targeting specifieke genen, stapelbare eigenschappen. Regelgevend landschap: EU Hof van Justitie (2018) oordeelde CRISPR valt onder GMO-richtlijn vereist uitgebreide goedkeuring; VS USDA beschouwt CRISPR-bewerkte gewassen zonder vreemd DNA als niet-GMO (SECURE regel 2020); Japan (2019) vrijstelling precieze genbewerking zonder ingevoegd DNA; Canada/Australië geval-per-geval evaluatie. Uitdagingen consumentenacceptatie blijven ondanks wetenschappelijke consensus over veiligheid."
        }
      },
      {
        question: {
          en: "How do supercritical fluid extraction (SFE) and subcritical water extraction (SWE) differ in extracting bioactive compounds from fruit pomace and juice by-products?",
          es: "¿Cómo difieren extracción con fluidos supercríticos (SFE) y extracción con agua subcrítica (SWE) en extraer compuestos bioactivos de orujo frutas y subproductos jugo?",
          de: "Wie unterscheiden sich überkritische Fluidextraktion (SFE) und unterkritische Wasserextraktion (SWE) bei Extraktion bioaktiver Verbindungen aus Fruchttrester und Saft-Nebenprodukten?",
          nl: "Hoe verschillen superkritische vloeistofextractie (SFE) en subkritische waterextractie (SWE) in extractie van bioactieve verbindingen uit fruitpulp en sap bijproducten?"
        },
        options: [
          { en: "SFE uses CO₂ above critical point (31°C, 73 bar) for non-polar compounds (carotenoids); SWE uses hot pressurized water (100-374°C, 10-60 bar) for polar/medium-polarity compounds (phenolics)", es: "SFE usa CO₂ sobre punto crítico (31°C, 73 bar) para compuestos no polares (carotenoides); SWE usa agua caliente presurizada (100-374°C, 10-60 bar) para compuestos polares/mediana-polaridad (fenólicos)", de: "SFE verwendet CO₂ über kritischem Punkt (31°C, 73 bar) für unpolare Verbindungen (Carotinoide); SWE verwendet heißes Druckwasser (100-374°C, 10-60 bar) für polare/mittelpolare Verbindungen (Phenole)", nl: "SFE gebruikt CO₂ boven kritisch punt (31°C, 73 bar) voor niet-polaire verbindingen (carotenoïden); SWE gebruikt heet gecomprimeerd water (100-374°C, 10-60 bar) voor polaire/middenpolariteit verbindingen (fenolische)" },
          { en: "Both methods are identical", es: "Ambos métodos son idénticos", de: "Beide Methoden sind identisch", nl: "Beide methoden zijn identiek" },
          { en: "Only extract sugars", es: "Solo extraen azúcares", de: "Extrahieren nur Zucker", nl: "Extracteren alleen suikers" },
          { en: "Work only at room temperature", es: "Funcionan solo a temperatura ambiente", de: "Funktionieren nur bei Raumtemperatur", nl: "Werken alleen bij kamertemperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Supercritical fluid extraction (SFE) typically uses CO₂ above its critical point (Tc = 31.1°C, Pc = 73.8 bar) where it exhibits liquid-like density with gas-like diffusivity. SFE-CO₂ is non-polar, ideal for extracting carotenoids (β-carotene, lycopene), tocopherols, essential oils from citrus peels, grape seeds. Advantages: GRAS solvent, easily removed (gas at atmospheric pressure), tunable selectivity (adjusting temperature/pressure changes polarity), no thermal degradation. Subcritical water extraction (SWE) uses liquid water at 100-374°C (below Tc = 374°C) under pressure (10-60 bar) to maintain liquid state. Hot water's dielectric constant decreases (εr = 80 at 25°C to εr ≈ 27 at 250°C), making it behave like organic solvents suitable for extracting phenolic acids, flavonoids, anthocyanins from apple pomace, citrus peels, berry press cake. SWE advantages: green solvent (no organic solvents), breaks hydrogen bonds and cell walls, hydrolyzes esters. Applications: valorizing juice by-products into nutraceutical extracts, natural colorants, functional food ingredients.",
          es: "Extracción fluido supercrítico (SFE) típicamente usa CO₂ sobre punto crítico (Tc = 31.1°C, Pc = 73.8 bar) donde exhibe densidad tipo líquido con difusividad tipo gas. SFE-CO₂ es no polar, ideal extraer carotenoides (β-caroteno, licopeno), tocoferoles, aceites esenciales cáscaras cítricos, semillas uva. Ventajas: solvente GRAS, fácilmente removido (gas a presión atmosférica), selectividad ajustable (ajustar temperatura/presión cambia polaridad), sin degradación térmica. Extracción agua subcrítica (SWE) usa agua líquida 100-374°C (bajo Tc = 374°C) bajo presión (10-60 bar) mantener estado líquido. Constante dieléctrica agua caliente disminuye (εr = 80 a 25°C a εr ≈ 27 a 250°C), haciéndola comportarse como solventes orgánicos adecuada extraer ácidos fenólicos, flavonoides, antocianinas de orujo manzana, cáscaras cítricos, torta prensado bayas. Ventajas SWE: solvente verde (sin solventes orgánicos), rompe enlaces hidrógeno y paredes celulares, hidroliza ésteres. Aplicaciones: valorizar subproductos jugo en extractos nutracéuticos, colorantes naturales, ingredientes alimentos funcionales.",
          de: "Überkritische Fluidextraktion (SFE) verwendet typischerweise CO₂ über kritischem Punkt (Tc = 31.1°C, Pc = 73.8 bar), wo es flüssigkeitsähnliche Dichte mit gasähnlicher Diffusivität zeigt. SFE-CO₂ ist unpolar, ideal zum Extrahieren von Carotinoiden (β-Carotin, Lycopin), Tocopherolen, ätherischen Ölen aus Zitrusschalen, Traubenkernen. Vorteile: GRAS-Lösungsmittel, leicht entfernbar (Gas bei Atmosphärendruck), abstimmbare Selektivität (Temperatur-/Druckanpassung ändert Polarität), keine thermische Degradation. Unterkritische Wasserextraktion (SWE) verwendet flüssiges Wasser bei 100-374°C (unter Tc = 374°C) unter Druck (10-60 bar) zur Aufrechterhaltung flüssigen Zustands. Dielektrizitätskonstante heißen Wassers sinkt (εr = 80 bei 25°C auf εr ≈ 27 bei 250°C), lässt es sich wie organische Lösungsmittel verhalten geeignet zum Extrahieren phenolischer Säuren, Flavonoide, Anthocyanine aus Apfeltrester, Zitrusschalen, Beerenpressrückständen. SWE-Vorteile: grünes Lösungsmittel (keine organischen Lösungsmittel), bricht Wasserstoffbrücken und Zellwände, hydrolysiert Ester. Anwendungen: Valorisierung Saft-Nebenprodukte zu nutrazeutischen Extrakten, natürlichen Farbstoffen, funktionellen Lebensmittelzutaten.",
          nl: "Superkritische vloeistofextractie (SFE) gebruikt typisch CO₂ boven kritisch punt (Tc = 31.1°C, Pc = 73.8 bar) waar het vloeistofachtige dichtheid vertoont met gasachtige diffusiviteit. SFE-CO₂ is niet-polair, ideaal voor extractie carotenoïden (β-caroteen, lycopeen), tocoferolen, essentiële oliën uit citrusschillen, druivenpitten. Voordelen: GRAS oplosmiddel, gemakkelijk verwijderd (gas bij atmosferische druk), afstembare selectiviteit (temperatuur/druk aanpassing verandert polariteit), geen thermische afbraak. Subkritische waterextractie (SWE) gebruikt vloeibaar water bij 100-374°C (onder Tc = 374°C) onder druk (10-60 bar) om vloeibare toestand te behouden. Diëlektrische constante heet water daalt (εr = 80 bij 25°C naar εr ≈ 27 bij 250°C), waardoor het zich gedraagt als organische oplosmiddelen geschikt voor extractie fenolzuren, flavonoïden, anthocyanines uit appelpulp, citrusschillen, bessenperskoek. SWE voordelen: groen oplosmiddel (geen organische oplosmiddelen), breekt waterstofbruggen en celwanden, hydrolyseert esters. Toepassingen: valorisatie sap bijproducten tot nutraceutische extracten, natuurlijke kleurstoffen, functionele voedselingrediënten."
        }
      },
      {
        question: {
          en: "What are the molecular mechanisms and applications of high-pressure homogenization (HPH) at ultra-high pressures (200-400 MPa) in juice processing?",
          es: "¿Cuáles son mecanismos moleculares y aplicaciones de homogeneización alta presión (HPH) a presiones ultra-altas (200-400 MPa) en procesamiento jugos?",
          de: "Was sind molekulare Mechanismen und Anwendungen von Hochdruckhomogenisierung (HPH) bei ultra-hohen Drücken (200-400 MPa) in der Saftverarbeitung?",
          nl: "Wat zijn moleculaire mechanismen en toepassingen van hogedruk homogenisatie (HPH) bij ultra-hoge drukken (200-400 MPa) in sapverwerking?"
        },
        options: [
          { en: "Forces liquid through narrow gap creating cavitation, shear, turbulence; achieves microbial inactivation, cell disruption, nano-emulsification, enhanced bioavailability without heat", es: "Fuerza líquido a través espacio estrecho creando cavitación, cizallamiento, turbulencia; logra inactivación microbiana, disrupción celular, nano-emulsificación, biodisponibilidad mejorada sin calor", de: "Zwingt Flüssigkeit durch engen Spalt erzeugt Kavitation, Scherung, Turbulenz; erreicht mikrobielle Inaktivierung, Zellaufschluss, Nano-Emulgierung, erhöhte Bioverfügbarkeit ohne Hitze", nl: "Dwingt vloeistof door nauwe opening creërend cavitatie, afschuiving, turbulentie; bereikt microbiële inactivatie, celverbreking, nano-emulsificatie, verhoogde biobeschikbaarheid zonder warmte" },
          { en: "Only adds sugar to juice", es: "Solo añade azúcar a jugo", de: "Fügt nur Zucker zu Saft hinzu", nl: "Voegt alleen suiker toe aan sap" },
          { en: "Removes all nutrients", es: "Elimina todos nutrientes", de: "Entfernt alle Nährstoffe", nl: "Verwijdert alle voedingsstoffen" },
          { en: "Only changes color", es: "Solo cambia color", de: "Ändert nur Farbe", nl: "Verandert alleen kleur" }
        ],
        correct: 0,
        explanation: {
          en: "High-pressure homogenization (HPH) forces juice at 200-400 MPa through narrow valve gap (typically 100-200 µm) creating extreme mechanical forces: (1) Cavitation: rapid pressure drop forms vapor bubbles that implode, generating localized temperatures up to 5000 K and shock waves rupturing microbial cells, (2) Intense shear stress (10⁶-10⁸ s⁻¹) disrupts cell walls and membranes, (3) Turbulence and impact against homogenizing valve. Applications: non-thermal pasteurization (5-log reduction of pathogens while preserving vitamins, enzymes, fresh flavor), cell disruption increasing carotenoid and polyphenol extractability and bioavailability (3-5x increase), nano-emulsification creating stable oil-in-water emulsions (<200 nm droplets) for fortified juices, particle size reduction improving cloud stability and mouthfeel, enzyme inactivation (pectin methylesterase, polyphenol oxidase). Advantages over thermal processing: minimal quality degradation, fresh-like characteristics. Challenges: high equipment/energy costs, potential pro-oxidant effects requiring optimization, limited shelf-life extension vs thermal processing (requires refrigeration).",
          es: "Homogeneización alta presión (HPH) fuerza jugo a 200-400 MPa a través espacio válvula estrecho (típicamente 100-200 µm) creando fuerzas mecánicas extremas: (1) Cavitación: caída presión rápida forma burbujas vapor que implotan, generando temperaturas localizadas hasta 5000 K y ondas choque rompiendo células microbianas, (2) Estrés cizallamiento intenso (10⁶-10⁸ s⁻¹) interrumpe paredes celulares y membranas, (3) Turbulencia e impacto contra válvula homogeneización. Aplicaciones: pasteurización no térmica (reducción 5-log patógenos preservando vitaminas, enzimas, sabor fresco), disrupción celular aumentando extractabilidad y biodisponibilidad carotenoides y polifenoles (aumento 3-5x), nano-emulsificación creando emulsiones estables aceite-en-agua (<200 nm gotas) para jugos fortificados, reducción tamaño partícula mejorando estabilidad nube y sensación bucal, inactivación enzimas (pectina metilesterasa, polifenol oxidasa). Ventajas sobre procesamiento térmico: mínima degradación calidad, características tipo fresco. Desafíos: altos costos equipo/energía, potenciales efectos pro-oxidantes requiriendo optimización, extensión vida útil limitada vs procesamiento térmico (requiere refrigeración).",
          de: "Hochdruckhomogenisierung (HPH) zwingt Saft bei 200-400 MPa durch engen Ventilspalt (typisch 100-200 µm) erzeugt extreme mechanische Kräfte: (1) Kavitation: schneller Druckabfall bildet Dampfblasen die implodieren, erzeugt lokalisierte Temperaturen bis 5000 K und Schockwellen die mikrobielle Zellen zerreißen, (2) Intensive Scherspannung (10⁶-10⁸ s⁻¹) zerstört Zellwände und Membranen, (3) Turbulenz und Aufprall gegen Homogenisierventil. Anwendungen: nicht-thermische Pasteurisierung (5-log-Reduktion Pathogene bei Erhalt Vitamine, Enzyme, frischer Geschmack), Zellaufschluss erhöht Carotinoid- und Polyphenol-Extrahierbarkeit und Bioverfügbarkeit (3-5x Erhöhung), Nano-Emulgierung erzeugt stabile Öl-in-Wasser-Emulsionen (<200 nm Tröpfchen) für angereicherte Säfte, Partikelgrößenreduktion verbessert Cloud-Stabilität und Mundgefühl, Enzyminaktivierung (Pektin-Methylesterase, Polyphenoloxidase). Vorteile gegenüber thermischer Verarbeitung: minimale Qualitätsdegradation, frischähnliche Eigenschaften. Herausforderungen: hohe Ausrüstungs-/Energiekosten, potenzielle pro-oxidative Effekte erfordern Optimierung, begrenzte Haltbarkeitsverlängerung vs thermische Verarbeitung (erfordert Kühlung).",
          nl: "Hogedruk homogenisatie (HPH) dwingt sap bij 200-400 MPa door nauwe klepopening (typisch 100-200 µm) creërend extreme mechanische krachten: (1) Cavitatie: snelle drukdaling vormt dambbellen die imploderen, genererend gelokaliseerde temperaturen tot 5000 K en schokgolven die microbiële cellen scheuren, (2) Intense afschuifspanning (10⁶-10⁸ s⁻¹) verstoort celwanden en membranen, (3) Turbulentie en impact tegen homogenisatieklep. Toepassingen: niet-thermische pasteurisatie (5-log reductie pathogenen met behoud vitamines, enzymen, verse smaak), celverbreking verhoogt carotenoïde en polyfenol extraheerbaarheid en biobeschikbaarheid (3-5x toename), nano-emulsificatie creëert stabiele olie-in-water emulsies (<200 nm druppels) voor verrijkte sappen, deeltjesgrootte reductie verbetert wolkstabiliteit en mondgevoel, enzym inactivatie (pectine methylesterase, polyphenol oxidase). Voordelen boven thermische verwerking: minimale kwaliteitsdegradatie, vers-achtige eigenschappen. Uitdagingen: hoge apparatuur/energiekosten, potentiële pro-oxidant effecten vereisen optimalisatie, beperkte houdbaarheidsverlenging vs thermische verwerking (vereist koeling)."
        }
      },
      {
        question: {
          en: "How do digital twin technologies and Internet of Things (IoT) sensors enable predictive maintenance and real-time optimization in modern juice processing facilities?",
          es: "¿Cómo las tecnologías gemelo digital y sensores Internet de las Cosas (IoT) habilitan mantenimiento predictivo y optimización en tiempo real en instalaciones modernas procesamiento jugos?",
          de: "Wie ermöglichen digitale Zwillings-Technologien und Internet der Dinge (IoT)-Sensoren vorausschauende Wartung und Echtzeitoptimierung in modernen Saftverarbeitungsanlagen?",
          nl: "Hoe maken digitale tweeling technologieën en Internet of Things (IoT) sensoren voorspellend onderhoud en realtime optimalisatie mogelijk in moderne sapverwerkingsfaciliteiten?"
        },
        options: [
          { en: "Virtual replica integrates continuous sensor data (temperature, pressure, flow, vibration, energy) enabling AI-driven anomaly detection, predictive failure prevention, process optimization reducing downtime 30-50%", es: "Réplica virtual integra datos sensores continuos (temperatura, presión, flujo, vibración, energía) habilitando detección anomalías impulsada IA, prevención fallas predictiva, optimización procesos reduciendo tiempo inactividad 30-50%", de: "Virtuelle Replik integriert kontinuierliche Sensordaten (Temperatur, Druck, Durchfluss, Vibration, Energie) ermöglicht KI-gesteuerte Anomalieerkennung, vorausschauende Fehlerprävention, Prozessoptimierung reduziert Ausfallzeit 30-50%", nl: "Virtuele replica integreert continue sensordata (temperatuur, druk, stroming, vibratie, energie) mogelijk makend AI-gedreven anomalie detectie, voorspellende storingpreventie, procesoptimalisatie verminderend stilstand 30-50%" },
          { en: "Only monitors temperature", es: "Solo monitorea temperatura", de: "Überwacht nur Temperatur", nl: "Monitort alleen temperatuur" },
          { en: "Replaces all human workers", es: "Reemplaza todos trabajadores humanos", de: "Ersetzt alle menschlichen Arbeiter", nl: "Vervangt alle menselijke werknemers" },
          { en: "Only tracks inventory", es: "Solo rastrea inventario", de: "Verfolgt nur Inventar", nl: "Volgt alleen voorraad" }
        ],
        correct: 0,
        explanation: {
          en: "Digital twin is virtual replica of physical processing plant created using CAD models, IoT sensor networks, and historical data. IoT sensors (thousands per facility) continuously monitor: temperature/pressure (pasteurizers, evaporators), flow rates (ultrasonic flowmeters), vibration (pumps, centrifuges detecting bearing wear), pH/Brix (inline spectroscopy), energy consumption (smart meters), equipment status (PLC data). Data streams to cloud platforms (AWS IoT, Azure Digital Twins) where digital twin simulates plant operations in real-time. AI/ML algorithms: (1) Anomaly detection: identifies deviations from normal patterns predicting equipment failures days/weeks in advance (e.g., pump bearing degradation from vibration signatures), (2) Predictive maintenance: schedules interventions before breakdowns reducing unplanned downtime 30-50%, maintenance costs 20-30%, (3) Process optimization: adjusts parameters (temperature, concentration, flow) maximizing energy efficiency, product quality, throughput using reinforcement learning. Benefits: remote monitoring/control, scenario testing (what-if simulations), operator training (virtual commissioning), faster troubleshooting. Integration: SCADA, MES, ERP systems. Cybersecurity critical: OT/IT convergence requires robust protection against ransomware, data breaches.",
          es: "Gemelo digital es réplica virtual planta procesamiento física creada usando modelos CAD, redes sensores IoT, y datos históricos. Sensores IoT (miles por instalación) monitorean continuamente: temperatura/presión (pasteurizadores, evaporadores), tasas flujo (flujómetros ultrasónicos), vibración (bombas, centrífugas detectando desgaste cojinetes), pH/Brix (espectroscopia en línea), consumo energía (medidores inteligentes), estado equipo (datos PLC). Flujos datos a plataformas nube (AWS IoT, Azure Digital Twins) donde gemelo digital simula operaciones planta tiempo real. Algoritmos IA/ML: (1) Detección anomalías: identifica desviaciones patrones normales prediciendo fallas equipo días/semanas anticipación (ej., degradación cojinete bomba de firmas vibración), (2) Mantenimiento predictivo: programa intervenciones antes averías reduciendo tiempo inactividad no planificado 30-50%, costos mantenimiento 20-30%, (3) Optimización procesos: ajusta parámetros (temperatura, concentración, flujo) maximizando eficiencia energética, calidad producto, rendimiento usando aprendizaje refuerzo. Beneficios: monitoreo/control remoto, prueba escenarios (simulaciones qué-si), capacitación operadores (puesta marcha virtual), solución problemas más rápida. Integración: sistemas SCADA, MES, ERP. Ciberseguridad crítica: convergencia OT/IT requiere protección robusta contra ransomware, filtraciones datos.",
          de: "Digitaler Zwilling ist virtuelle Replik physischer Verarbeitungsanlage erstellt mit CAD-Modellen, IoT-Sensornetzwerken und historischen Daten. IoT-Sensoren (Tausende pro Anlage) überwachen kontinuierlich: Temperatur/Druck (Pasteurisatoren, Verdampfer), Durchflussraten (Ultraschall-Durchflussmesser), Vibration (Pumpen, Zentrifugen erkennen Lagerverschleiß), pH/Brix (Inline-Spektroskopie), Energieverbrauch (Smart Meter), Gerätestatus (SPS-Daten). Datenströme zu Cloud-Plattformen (AWS IoT, Azure Digital Twins) wo digitaler Zwilling Anlagenoperationen in Echtzeit simuliert. KI/ML-Algorithmen: (1) Anomalieerkennung: identifiziert Abweichungen von normalen Mustern vorhersagt Geräteausfälle Tage/Wochen im Voraus (z.B. Pumpenlager-Degradation aus Vibrationssignaturen), (2) Vorausschauende Wartung: plant Eingriffe vor Ausfällen reduziert ungeplante Ausfallzeit 30-50%, Wartungskosten 20-30%, (3) Prozessoptimierung: passt Parameter an (Temperatur, Konzentration, Durchfluss) maximiert Energieeffizienz, Produktqualität, Durchsatz mit Verstärkungslernen. Vorteile: Fernüberwachung/-steuerung, Szenariotests (Was-wäre-wenn-Simulationen), Bedienertraining (virtuelle Inbetriebnahme), schnellere Fehlerbehebung. Integration: SCADA-, MES-, ERP-Systeme. Cybersicherheit kritisch: OT/IT-Konvergenz erfordert robusten Schutz gegen Ransomware, Datenlecks.",
          nl: "Digitale tweeling is virtuele replica van fysieke verwerkingsinstallatie gecreëerd met CAD modellen, IoT sensornetwerken en historische data. IoT sensoren (duizenden per faciliteit) monitoren continu: temperatuur/druk (pasteurisatoren, verdampers), stroomsnelheden (ultrasone flowmeters), vibratie (pompen, centrifuges detecterend lagerslitage), pH/Brix (inline spectroscopie), energieverbruik (slimme meters), apparatuurstatus (PLC data). Datastromen naar cloudplatforms (AWS IoT, Azure Digital Twins) waar digitale tweeling fabriekoperaties in realtime simuleert. AI/ML algoritmen: (1) Anomalie detectie: identificeert afwijkingen van normale patronen voorspellend apparatuurstoringen dagen/weken vooraf (bijv. pomplaagdegradatie uit vibratiehandtekeningen), (2) Voorspellend onderhoud: plant interventies voor storing verminderend ongeplande stilstand 30-50%, onderhoudskosten 20-30%, (3) Procesoptimalisatie: past parameters aan (temperatuur, concentratie, stroming) maximaliseren energie-efficiëntie, productkwaliteit, doorvoer gebruikmakend van reinforcement learning. Voordelen: monitoring/controle op afstand, scenario testen (wat-als simulaties), operatortraining (virtuele commissioning), snellere probleemoplossing. Integratie: SCADA, MES, ERP systemen. Cyberbeveiliging cruciaal: OT/IT convergentie vereist robuuste bescherming tegen ransomware, datalekken."
        }
      },
      {
        question: {
          en: "What are the principles and industrial applications of ohmic heating (electrical resistance heating) for juice pasteurization and how does it compare to conventional thermal methods?",
          es: "¿Cuáles son principios y aplicaciones industriales de calentamiento óhmico (calentamiento resistencia eléctrica) para pasteurización jugos y cómo se compara con métodos térmicos convencionales?",
          de: "Was sind Prinzipien und industrielle Anwendungen von ohmischer Erwärmung (elektrischer Widerstandsheizung) für Saftpasteurisierung und wie vergleicht sie sich mit konventionellen thermischen Methoden?",
          nl: "Wat zijn principes en industriële toepassingen van ohmische verwarming (elektrische weerstandsverwarming) voor sappasteurisatie en hoe vergelijkt het met conventionele thermische methoden?"
        },
        options: [
          { en: "Alternating current (50-60 Hz) through juice generates internal volumetric heat via electrical resistance (Joule heating); rapid uniform heating preserves nutrients better than surface heat transfer methods", es: "Corriente alterna (50-60 Hz) a través jugo genera calor volumétrico interno vía resistencia eléctrica (calentamiento Joule); calentamiento rápido uniforme preserva nutrientes mejor que métodos transferencia calor superficial", de: "Wechselstrom (50-60 Hz) durch Saft erzeugt interne volumetrische Wärme via elektrischem Widerstand (Joule-Heizung); schnelle gleichmäßige Erwärmung erhält Nährstoffe besser als Oberflächenwärmeübertragungsmethoden", nl: "Wisselstroom (50-60 Hz) door sap genereert interne volumetrische warmte via elektrische weerstand (Joule verwarming); snelle uniforme verwarming behoudt voedingsstoffen beter dan oppervlaktewarmteoverdracht methoden" },
          { en: "Only uses microwave radiation", es: "Solo usa radiación microondas", de: "Verwendet nur Mikrowellenstrahlung", nl: "Gebruikt alleen microgolf straling" },
          { en: "Requires no electricity", es: "No requiere electricidad", de: "Benötigt keine Elektrizität", nl: "Vereist geen elektriciteit" },
          { en: "Only works for carbonated beverages", es: "Solo funciona para bebidas carbonatadas", de: "Funktioniert nur für kohlensäurehaltige Getränke", nl: "Werkt alleen voor koolzuurhoudende dranken" }
        ],
        correct: 0,
        explanation: {
          en: "Ohmic heating passes alternating current (typically 50-60 Hz, sometimes up to kHz range) through juice between electrodes. Electrical resistance of ionic liquid generates heat internally following Joule's law: Q = I²Rt, where Q is heat, I is current, R is resistance, t is time. Heat generation rate proportional to electrical conductivity and voltage gradient squared. Advantages over conventional heating (plate/tubular heat exchangers): (1) Rapid volumetric heating: all juice volume heats simultaneously rather than surface-to-center conduction, achieving heating rates 1-5°C/s vs 0.5-1°C/s conventional, (2) Uniform temperature distribution reduces thermal damage to heat-sensitive compounds (vitamin C retention 10-20% higher), (3) No hot surfaces preventing fouling/burning, (4) Handles particulate-containing juices (pulp, purees) without clogging, (5) Energy efficient (>90% electrical-to-thermal conversion vs ~70% steam heat exchangers). Applications: high-acid juices (citrus, pineapple), pulpy juices, aseptic processing. Challenges: requires sufficient ionic conductivity (minimum ~0.05 S/m; may need salt addition for low-conductivity products), electrode material selection (titanium, graphite preventing corrosion/migration), electrical safety (proper grounding, insulation), regulatory approval for food-contact electrodes, capital costs higher than conventional systems.",
          es: "Calentamiento óhmico pasa corriente alterna (típicamente 50-60 Hz, a veces hasta rango kHz) a través jugo entre electrodos. Resistencia eléctrica líquido iónico genera calor internamente siguiendo ley Joule: Q = I²Rt, donde Q es calor, I corriente, R resistencia, t tiempo. Tasa generación calor proporcional conductividad eléctrica y gradiente voltaje al cuadrado. Ventajas sobre calentamiento convencional (intercambiadores calor placa/tubular): (1) Calentamiento volumétrico rápido: todo volumen jugo calienta simultáneamente en lugar conducción superficie-centro, logrando tasas calentamiento 1-5°C/s vs 0.5-1°C/s convencional, (2) Distribución temperatura uniforme reduce daño térmico compuestos sensibles calor (retención vitamina C 10-20% mayor), (3) Sin superficies calientes previniendo incrustación/quemado, (4) Maneja jugos conteniendo partículas (pulpa, purés) sin obstrucción, (5) Energéticamente eficiente (>90% conversión eléctrica-térmica vs ~70% intercambiadores calor vapor). Aplicaciones: jugos alta acidez (cítricos, piña), jugos pulposos, procesamiento aséptico. Desafíos: requiere conductividad iónica suficiente (mínimo ~0.05 S/m; puede necesitar adición sal productos baja conductividad), selección material electrodo (titanio, grafito previniendo corrosión/migración), seguridad eléctrica (puesta tierra apropiada, aislamiento), aprobación regulatoria electrodos contacto alimentos, costos capital mayores sistemas convencionales.",
          de: "Ohmische Erwärmung leitet Wechselstrom (typisch 50-60 Hz, manchmal bis kHz-Bereich) durch Saft zwischen Elektroden. Elektrischer Widerstand ionischer Flüssigkeit erzeugt Wärme intern nach Joulescher Gesetz: Q = I²Rt, wobei Q Wärme, I Strom, R Widerstand, t Zeit ist. Wärmeerzeugungsrate proportional zu elektrischer Leitfähigkeit und Spannungsgradient zum Quadrat. Vorteile gegenüber konventioneller Erwärmung (Platten-/Rohrwärmetauscher): (1) Schnelle volumetrische Erwärmung: gesamtes Saftvolumen erwärmt sich gleichzeitig statt Oberfläche-zu-Zentrum-Leitung, erreicht Erwärmungsraten 1-5°C/s vs 0.5-1°C/s konventionell, (2) Gleichmäßige Temperaturverteilung reduziert thermische Schädigung hitzeempfindlicher Verbindungen (Vitamin-C-Retention 10-20% höher), (3) Keine heißen Oberflächen verhindert Fouling/Anbrennen, (4) Verarbeitet partikelhaltige Säfte (Fruchtfleisch, Pürees) ohne Verstopfung, (5) Energieeffizient (>90% elektrisch-thermische Umwandlung vs ~70% Dampfwärmetauscher). Anwendungen: hochsaure Säfte (Zitrus, Ananas), fruchtfleischhaltige Säfte, aseptische Verarbeitung. Herausforderungen: erfordert ausreichende ionische Leitfähigkeit (Minimum ~0.05 S/m; möglicherweise Salzzugabe für niedrig-leitfähige Produkte), Elektrodenmaterialauswahl (Titan, Graphit verhindert Korrosion/Migration), elektrische Sicherheit (ordnungsgemäße Erdung, Isolierung), behördliche Genehmigung für lebensmittelkontakt Elektroden, Kapitalkosten höher als konventionelle Systeme.",
          nl: "Ohmische verwarming leidt wisselstroom (typisch 50-60 Hz, soms tot kHz bereik) door sap tussen elektroden. Elektrische weerstand van ionische vloeistof genereert warmte intern volgens wet van Joule: Q = I²Rt, waarbij Q warmte, I stroom, R weerstand, t tijd is. Warmte generatiesnelheid evenredig aan elektrische geleidbaarheid en spanningsgradiënt kwadraat. Voordelen boven conventionele verwarming (plaat/buiswarmtewisselaars): (1) Snelle volumetrische verwarming: geheel sapvolume verwarmt simultaan in plaats van oppervlakte-naar-centrum geleiding, bereikend verwarmingssnelheden 1-5°C/s vs 0.5-1°C/s conventioneel, (2) Uniforme temperatuurverdeling vermindert thermische schade aan hittegevoelige verbindingen (vitamine C retentie 10-20% hoger), (3) Geen hete oppervlakken voorkomend vervuiling/verbranding, (4) Verwerkt deeltjesbevattende sappen (pulp, purees) zonder verstopping, (5) Energie-efficiënt (>90% elektrisch-naar-thermische conversie vs ~70% stoom warmtewisselaars). Toepassingen: hoog-zure sappen (citrus, ananas), pulp sappen, aseptische verwerking. Uitdagingen: vereist voldoende ionische geleidbaarheid (minimum ~0.05 S/m; mogelijk zouttoevoeging voor lage-geleidbaarheid producten), elektrodemateriaal selectie (titanium, grafiet voorkomend corrosie/migratie), elektrische veiligheid (juiste aarding, isolatie), regelgevende goedkeuring voor voedselcontact elektroden, kapitaalkosten hoger dan conventionele systemen."
        }
      },
      {
        question: {
          en: "How do volatile aroma recovery systems capture and restore fresh juice character, and what analytical techniques validate aroma profile authenticity?",
          es: "¿Cómo sistemas recuperación aromas volátiles capturan y restauran carácter jugo fresco, y qué técnicas analíticas validan autenticidad perfil aromático?",
          de: "Wie erfassen volatile Aromarückgewinnungssysteme und stellen frischen Saftcharakter wieder her, und welche analytischen Techniken validieren Aromaprofil-Authentizität?",
          nl: "Hoe vangen vluchtige aroma recuperatiesystemen vers sapkarakter en herstellen, en welke analytische technieken valideren aromaprofiel authenticiteit?"
        },
        options: [
          { en: "Vacuum stripping removes volatiles before heating, condenses separately, then adds back; validated using GC-MS, GC-O (olfactometry), electronic nose matching fresh juice aroma fingerprint", es: "Extracción vacío remueve volátiles antes calentamiento, condensa separadamente, luego añade de vuelta; validado usando GC-MS, GC-O (olfatometría), nariz electrónica igualando huella aromática jugo fresco", de: "Vakuumstrippen entfernt Volatile vor Erhitzung, kondensiert separat, fügt dann zurück; validiert mit GC-MS, GC-O (Olfaktometrie), elektronischer Nase zum Abgleich frischer Saft-Aromafingerabdruck", nl: "Vacuüm strippen verwijdert vluchtige stoffen voor verhitting, condenseert apart, voegt dan terug toe; gevalideerd met GC-MS, GC-O (olfactometrie), elektronische neus matchend vers sap aroma vingerafdruk" },
          { en: "Only adds artificial flavors", es: "Solo añade sabores artificiales", de: "Fügt nur künstliche Aromen hinzu", nl: "Voegt alleen kunstmatige smaken toe" },
          { en: "Removes all aroma compounds permanently", es: "Elimina todos compuestos aroma permanentemente", de: "Entfernt alle Aromaverbindungen dauerhaft", nl: "Verwijdert alle aromaverbindingen permanent" },
          { en: "Only works for vegetable juices", es: "Solo funciona para jugos vegetales", de: "Funktioniert nur für Gemüsesäfte", nl: "Werkt alleen voor groentesappen" }
        ],
        correct: 0,
        explanation: {
          en: "Volatile aroma recovery prevents loss during thermal concentration/pasteurization. Process: (1) Vacuum stripping: juice passes through stripper column under vacuum (0.05-0.1 bar) at low temperature (40-50°C) where volatile compounds (esters, aldehydes, terpenes, ketones) evaporate preferentially due to low boiling points, (2) Vapor condensation: volatiles condense in chilled condenser creating aqueous aroma concentrate (essence), (3) Stripped juice undergoes thermal processing (pasteurization, evaporation), (4) Essence added back to processed juice (typically 0.1-1% v/v) restoring fresh character. Advanced systems: multi-stage stripping separating head, heart, tail fractions (different volatility ranges), selective essence fractionation enriching desirable compounds (d-limonene, ethyl butyrate) while removing off-notes. Analytical validation: Gas Chromatography-Mass Spectrometry (GC-MS) identifies and quantifies individual volatile compounds comparing processed+essence vs fresh juice, Gas Chromatography-Olfactometry (GC-O) uses human assessors sniffing GC effluent identifying odor-active compounds, Electronic nose (e-nose) arrays of sensors (metal oxide, conducting polymer) generate aroma fingerprints for quality control, Sensory evaluation (triangle tests, descriptive analysis) confirms consumer perception equivalence. Key volatiles in orange juice: limonene (90% of oil), ethyl butyrate (fruity), octanal (citrus), linalool (floral).",
          es: "Recuperación aromas volátiles previene pérdida durante concentración/pasteurización térmica. Proceso: (1) Extracción vacío: jugo pasa columna extracción bajo vacío (0.05-0.1 bar) a baja temperatura (40-50°C) donde compuestos volátiles (ésteres, aldehídos, terpenos, cetonas) evaporan preferencialmente debido bajos puntos ebullición, (2) Condensación vapor: volátiles condensan en condensador enfriado creando concentrado aroma acuoso (esencia), (3) Jugo extraído sufre procesamiento térmico (pasteurización, evaporación), (4) Esencia añadida de vuelta a jugo procesado (típicamente 0.1-1% v/v) restaurando carácter fresco. Sistemas avanzados: extracción multi-etapa separando fracciones cabeza, corazón, cola (diferentes rangos volatilidad), fraccionamiento esencia selectivo enriqueciendo compuestos deseables (d-limoneno, butirato etilo) eliminando notas desagradables. Validación analítica: Cromatografía Gases-Espectrometría Masas (GC-MS) identifica y cuantifica compuestos volátiles individuales comparando procesado+esencia vs jugo fresco, Cromatografía Gases-Olfatometría (GC-O) usa evaluadores humanos oliendo efluente GC identificando compuestos odor-activos, Nariz electrónica (e-nose) matrices sensores (óxido metal, polímero conductor) generan huellas aroma control calidad, Evaluación sensorial (pruebas triángulo, análisis descriptivo) confirma equivalencia percepción consumidor. Volátiles clave jugo naranja: limoneno (90% aceite), butirato etilo (afrutado), octanal (cítrico), linalool (floral).",
          de: "Volatile Aromarückgewinnung verhindert Verlust während thermischer Konzentration/Pasteurisierung. Prozess: (1) Vakuumstrippen: Saft durchläuft Stripperkolonne unter Vakuum (0.05-0.1 bar) bei niedriger Temperatur (40-50°C) wo volatile Verbindungen (Ester, Aldehyde, Terpene, Ketone) bevorzugt verdampfen aufgrund niedriger Siedepunkte, (2) Dampfkondensation: Volatile kondensieren in gekühltem Kondensator erzeugen wässriges Aromakonzentrat (Essenz), (3) Gestrippter Saft durchläuft thermische Verarbeitung (Pasteurisierung, Verdampfung), (4) Essenz wird verarbeitetem Saft wieder zugefügt (typisch 0.1-1% v/v) stellt frischen Charakter wieder her. Fortgeschrittene Systeme: mehrstufiges Strippen trennt Kopf-, Herz-, Schwanzfraktionen (verschiedene Flüchtigkeitsbereiche), selektive Essenzfraktionierung anreichert wünschenswerte Verbindungen (d-Limonen, Ethylbutyrat) während Fehlnoten entfernt. Analytische Validierung: Gaschromatographie-Massenspektrometrie (GC-MS) identifiziert und quantifiziert einzelne volatile Verbindungen vergleicht verarbeitet+Essenz vs frischer Saft, Gaschromatographie-Olfaktometrie (GC-O) verwendet menschliche Bewerter riechend GC-Abfluss identifiziert geruchsaktive Verbindungen, Elektronische Nase (e-nose) Arrays von Sensoren (Metalloxid, leitfähiges Polymer) generieren Aromafingerabdrücke für Qualitätskontrolle, Sensorische Bewertung (Dreieckstests, deskriptive Analyse) bestätigt Verbraucherwahrnehmungsäquivalenz. Schlüsselvolatile in Orangensaft: Limonen (90% des Öls), Ethylbutyrat (fruchtig), Octanal (Zitrus), Linalool (blumig).",
          nl: "Vluchtige aroma recuperatie voorkomt verlies tijdens thermische concentratie/pasteurisatie. Proces: (1) Vacuüm strippen: sap passeert stripperkolom onder vacuüm (0.05-0.1 bar) bij lage temperatuur (40-50°C) waar vluchtige verbindingen (esters, aldehyden, terpenen, ketonen) preferentieel verdampen vanwege lage kookpunten, (2) Dampwatercondensatie: vluchtige stoffen condenseren in gekoelde condensor creërend waterig aromaconcentraat (essence), (3) Gestript sap ondergaat thermische verwerking (pasteurisatie, verdamping), (4) Essence toegevoegd terug aan verwerkt sap (typisch 0.1-1% v/v) herstellend vers karakter. Geavanceerde systemen: meerstaps strippen scheidend hoofd-, hart-, staartfracties (verschillende vluchtigheidsranges), selectieve essence fractionering verrijkend gewenste verbindingen (d-limoneen, ethylbutyraat) terwijl off-notes verwijderend. Analytische validatie: Gaschromatografie-Massaspectrometrie (GC-MS) identificeert en kwantificeert individuele vluchtige verbindingen vergelijkend verwerkt+essence vs vers sap, Gaschromatografie-Olfactometrie (GC-O) gebruikt menselijke beoordelaars ruikend GC-effluent identificerend geur-actieve verbindingen, Elektronische neus (e-nose) arrays van sensoren (metaaloxide, geleidend polymeer) genereren aroma vingerafdrukken voor kwaliteitscontrole, Sensorische evaluatie (driehoektests, beschrijvende analyse) bevestigt consumentenperceptie equivalentie. Sleutel vluchtige stoffen in sinaasappelsap: limoneen (90% van olie), ethylbutyraat (fruitig), octanal (citrus), linalool (bloemig)."
        }
      },
      {
        question: {
          en: "What are the mechanisms and applications of cold plasma technology for non-thermal surface decontamination of fresh-cut fruit and juice production equipment?",
          es: "¿Cuáles son mecanismos y aplicaciones de tecnología plasma frío para descontaminación superficial no térmica de fruta fresca cortada y equipo producción jugos?",
          de: "Was sind Mechanismen und Anwendungen von Kaltplasma-Technologie für nicht-thermische Oberflächendekontamination von frisch geschnittenem Obst und Saftproduktionsausrüstung?",
          nl: "Wat zijn mechanismen en toepassingen van koude plasma technologie voor niet-thermische oppervlakte decontaminatie van vers gesneden fruit en sapproductie apparatuur?"
        },
        options: [
          { en: "Ionized gas generates reactive species (•OH, O₃, NO, UV photons) causing oxidative damage to microbial membranes and DNA achieving 3-5 log reductions without heat or chemical residues", es: "Gas ionizado genera especies reactivas (•OH, O₃, NO, fotones UV) causando daño oxidativo a membranas microbianas y ADN logrando reducciones 3-5 log sin calor o residuos químicos", de: "Ionisiertes Gas erzeugt reaktive Spezies (•OH, O₃, NO, UV-Photonen) verursacht oxidativen Schaden an mikrobiellen Membranen und DNA erreicht 3-5 log Reduktionen ohne Hitze oder chemische Rückstände", nl: "Geïoniseerd gas genereert reactieve soorten (•OH, O₃, NO, UV fotonen) veroorzakend oxidatieve schade aan microbiële membranen en DNA bereikend 3-5 log reducties zonder warmte of chemische residuen" },
          { en: "Only heats surfaces to kill microbes", es: "Solo calienta superficies para matar microbios", de: "Erhitzt nur Oberflächen um Mikroben zu töten", nl: "Verwarmt alleen oppervlakken om microben te doden" },
          { en: "Uses only mechanical scrubbing", es: "Usa solo fregado mecánico", de: "Verwendet nur mechanisches Schrubben", nl: "Gebruikt alleen mechanisch schrobben" },
          { en: "Requires high-temperature steam", es: "Requiere vapor alta temperatura", de: "Erfordert Hochtemperaturdampf", nl: "Vereist hogetemperatuur stoom" }
        ],
        correct: 0,
        explanation: {
          en: "Cold atmospheric pressure plasma (CAP) is partially ionized gas (typically air, nitrogen, oxygen, argon) generated by electrical discharge (dielectric barrier discharge, corona discharge, plasma jet) at near-ambient temperature (30-60°C). Ionization creates reactive oxygen species (ROS: •OH, O, O₃, H₂O₂), reactive nitrogen species (RNS: NO, NO₂, ONOO⁻), charged particles (electrons, ions), UV photons (200-400 nm). Antimicrobial mechanisms: (1) Lipid peroxidation: ROS oxidize unsaturated fatty acids in cell membranes causing leakage and death, (2) Protein oxidation: oxidizes amino acids (cysteine, methionine) denaturing enzymes and structural proteins, (3) DNA/RNA damage: double-strand breaks from •OH radicals and UV photons preventing replication, (4) Electroporation: electric fields create pores in membranes. Efficacy: 3-5 log reductions of E. coli, Salmonella, Listeria on fresh-cut fruit surfaces (strawberries, melons, apples) in 30-300 seconds treatment. Equipment sanitization: plasma jets decontaminate processing lines, filling equipment, packaging materials. Advantages: non-thermal (preserves quality), no chemical residues (eco-friendly), dry process (no wastewater), rapid treatment. Challenges: limited penetration (surface only, ~few mm), efficacy varies with surface roughness and moisture, requires safety controls (ozone levels <0.1 ppm workplace exposure). Emerging: plasma-activated water (PAW) containing long-lived ROS/RNS for washing applications.",
          es: "Plasma presión atmosférica fría (CAP) es gas parcialmente ionizado (típicamente aire, nitrógeno, oxígeno, argón) generado por descarga eléctrica (descarga barrera dieléctrica, descarga corona, chorro plasma) a temperatura cercana ambiente (30-60°C). Ionización crea especies reactivas oxígeno (ROS: •OH, O, O₃, H₂O₂), especies reactivas nitrógeno (RNS: NO, NO₂, ONOO⁻), partículas cargadas (electrones, iones), fotones UV (200-400 nm). Mecanismos antimicrobianos: (1) Peroxidación lipídica: ROS oxidan ácidos grasos insaturados en membranas celulares causando fuga y muerte, (2) Oxidación proteínas: oxida aminoácidos (cisteína, metionina) desnaturalizando enzimas y proteínas estructurales, (3) Daño ADN/ARN: roturas doble cadena de radicales •OH y fotones UV previniendo replicación, (4) Electroporación: campos eléctricos crean poros en membranas. Eficacia: reducciones 3-5 log de E. coli, Salmonella, Listeria en superficies fruta fresca cortada (fresas, melones, manzanas) en tratamiento 30-300 segundos. Sanitización equipo: chorros plasma descontaminan líneas procesamiento, equipo llenado, materiales empaque. Ventajas: no térmico (preserva calidad), sin residuos químicos (ecológico), proceso seco (sin aguas residuales), tratamiento rápido. Desafíos: penetración limitada (solo superficie, ~pocos mm), eficacia varía con rugosidad superficie y humedad, requiere controles seguridad (niveles ozono <0.1 ppm exposición laboral). Emergente: agua activada plasma (PAW) conteniendo ROS/RNS larga vida para aplicaciones lavado.",
          de: "Kaltes atmosphärisches Druckplasma (CAP) ist teilweise ionisiertes Gas (typisch Luft, Stickstoff, Sauerstoff, Argon) erzeugt durch elektrische Entladung (dielektrische Barrierenentladung, Koronaentladung, Plasmastrahl) bei nahezu Umgebungstemperatur (30-60°C). Ionisierung erzeugt reaktive Sauerstoffspezies (ROS: •OH, O, O₃, H₂O₂), reaktive Stickstoffspezies (RNS: NO, NO₂, ONOO⁻), geladene Teilchen (Elektronen, Ionen), UV-Photonen (200-400 nm). Antimikrobielle Mechanismen: (1) Lipidperoxidation: ROS oxidieren ungesättigte Fettsäuren in Zellmembranen verursacht Leckage und Tod, (2) Proteinoxidation: oxidiert Aminosäuren (Cystein, Methionin) denaturiert Enzyme und Strukturproteine, (3) DNA/RNA-Schaden: Doppelstrangbrüche durch •OH-Radikale und UV-Photonen verhindern Replikation, (4) Elektroporation: elektrische Felder erzeugen Poren in Membranen. Wirksamkeit: 3-5 log Reduktionen von E. coli, Salmonella, Listeria auf frisch geschnittenen Fruchtoberflächen (Erdbeeren, Melonen, Äpfel) in 30-300 Sekunden Behandlung. Ausrüstungssanitierung: Plasmastrahlen dekontaminieren Verarbeitungslinien, Abfüllausrüstung, Verpackungsmaterialien. Vorteile: nicht-thermisch (erhält Qualität), keine chemischen Rückstände (umweltfreundlich), trockener Prozess (kein Abwasser), schnelle Behandlung. Herausforderungen: begrenzte Penetration (nur Oberfläche, ~wenige mm), Wirksamkeit variiert mit Oberflächenrauheit und Feuchtigkeit, erfordert Sicherheitskontrollen (Ozonwerte <0.1 ppm Arbeitsplatzexposition). Aufkommend: plasmaaktiviertes Wasser (PAW) enthält langlebige ROS/RNS für Waschanwendungen.",
          nl: "Koude atmosferische druk plasma (CAP) is gedeeltelijk geïoniseerd gas (typisch lucht, stikstof, zuurstof, argon) gegenereerd door elektrische ontlading (diëlektrische barrière ontlading, corona ontlading, plasma straal) bij nabij-omgevingstemperatuur (30-60°C). Ionisatie creëert reactieve zuurstofsoorten (ROS: •OH, O, O₃, H₂O₂), reactieve stikstofsoorten (RNS: NO, NO₂, ONOO⁻), geladen deeltjes (elektronen, ionen), UV fotonen (200-400 nm). Antimicrobiële mechanismen: (1) Lipide peroxidatie: ROS oxideren onverzadigde vetzuren in celmembranen veroorzakend lekkage en dood, (2) Eiwit oxidatie: oxideert aminozuren (cysteïne, methionine) denatureert enzymen en structurele eiwitten, (3) DNA/RNA schade: dubbelstrengsbreuken van •OH radicalen en UV fotonen voorkomend replicatie, (4) Elektroporatie: elektrische velden creëren poriën in membranen. Werkzaamheid: 3-5 log reducties van E. coli, Salmonella, Listeria op vers gesneden fruitoppervlakken (aardbeien, meloenen, appels) in 30-300 seconden behandeling. Apparatuur sanitisatie: plasma stralen decontamineren verwerkingslijnen, vulapparatuur, verpakkingsmaterialen. Voordelen: niet-thermisch (behoudt kwaliteit), geen chemische residuen (milieuvriendelijk), droog proces (geen afvalwater), snelle behandeling. Uitdagingen: beperkte penetratie (alleen oppervlakte, ~weinige mm), werkzaamheid varieert met oppervlakteruwheid en vocht, vereist veiligheidscontroles (ozonniveaus <0.1 ppm werkplek blootstelling). Opkomend: plasma-geactiveerd water (PAW) bevattend langlevende ROS/RNS voor wasapplicaties."
        }
      },
      {
        question: {
          en: "How does life cycle assessment (LCA) quantify environmental impacts of juice production and what strategies minimize carbon footprint across the supply chain?",
          es: "¿Cómo evaluación ciclo vida (LCA) cuantifica impactos ambientales producción jugos y qué estrategias minimizan huella carbono a través cadena suministro?",
          de: "Wie quantifiziert Lebenszyklusanalyse (LCA) Umweltauswirkungen von Saftproduktion und welche Strategien minimieren CO2-Fußabdruck entlang Lieferkette?",
          nl: "Hoe kwantificeert levenscyclus analyse (LCA) milieu-impacts van sapproductie en welke strategieën minimaliseren koolstofvoetafdruk over toeleveringsketen?"
        },
        options: [
          { en: "Cradle-to-grave analysis quantifies GHG emissions, water use, energy across agriculture, processing, packaging, distribution; mitigation via renewable energy, lightweight packaging, waste valorization, local sourcing", es: "Análisis cuna-a-tumba cuantifica emisiones GEI, uso agua, energía a través agricultura, procesamiento, empaque, distribución; mitigación vía energía renovable, empaque ligero, valorización residuos, abastecimiento local", de: "Von-Wiege-zu-Bahre-Analyse quantifiziert THG-Emissionen, Wasserverbrauch, Energie über Landwirtschaft, Verarbeitung, Verpackung, Vertrieb; Minderung via erneuerbare Energie, Leichtverpackung, Abfallvalorisierung, lokale Beschaffung", nl: "Wieg-tot-graf analyse kwantificeert BKG emissies, watergebruik, energie over landbouw, verwerking, verpakking, distributie; mitigatie via hernieuwbare energie, lichtgewicht verpakking, afval valorisatie, lokale inkoop" },
          { en: "Only measures juice color", es: "Solo mide color jugo", de: "Misst nur Saftfarbe", nl: "Meet alleen sapkleur" },
          { en: "Focuses only on packaging aesthetics", es: "Se enfoca solo en estética empaque", de: "Konzentriert sich nur auf Verpackungsästhetik", nl: "Focus alleen op verpakkingsesthetiek" },
          { en: "Ignores agricultural phase", es: "Ignora fase agrícola", de: "Ignoriert landwirtschaftliche Phase", nl: "Negeert landbouwfase" }
        ],
        correct: 0,
        explanation: {
          en: "Life Cycle Assessment (LCA) per ISO 14040/14044 evaluates environmental impacts from raw material extraction to end-of-life disposal (cradle-to-grave). Functional unit: typically 1 liter of packaged juice. Impact categories: Global Warming Potential (GWP/carbon footprint in kg CO₂-eq), water depletion (liters blue water), eutrophication potential (kg PO₄-eq), acidification (kg SO₂-eq), land use (m²·year). Typical juice carbon footprint breakdown: agriculture 40-50% (fertilizers, machinery, irrigation), processing 15-25% (thermal energy, electricity), packaging 20-30% (glass>PET>carton>pouch in emissions), transportation 5-15% (distance, mode). Mitigation strategies: (1) Renewable energy: solar/wind-powered processing plants reducing Scope 2 emissions 80-90%, (2) Lightweight packaging: thinner PET bottles (-30% material), pouches vs bottles, recyclable/compostable materials, (3) Waste valorization: pomace to animal feed/biofuel/pectin reducing disposal emissions and creating circular economy, wastewater biogas generation, (4) Efficient concentration: evaporative concentration reducing transportation emissions (6x concentrate = 6x less shipping weight), (5) Local/regional sourcing: reducing food miles, (6) Precision agriculture: optimized fertilizer/water use reducing agricultural emissions 20-40%, (7) Cold chain optimization: efficient refrigeration reducing energy use. Example: Tropicana orange juice LCA showed 60% emissions from agriculture, 25% packaging (Tetra Pak), 10% processing, 5% distribution. Carbon neutrality strategies: offsetting remaining emissions via reforestation, renewable energy credits.",
          es: "Evaluación Ciclo Vida (LCA) por ISO 14040/14044 evalúa impactos ambientales desde extracción materia prima hasta disposición fin vida (cuna-a-tumba). Unidad funcional: típicamente 1 litro jugo empacado. Categorías impacto: Potencial Calentamiento Global (GWP/huella carbono en kg CO₂-eq), agotamiento agua (litros agua azul), potencial eutrofización (kg PO₄-eq), acidificación (kg SO₂-eq), uso tierra (m²·año). Desglose típico huella carbono jugo: agricultura 40-50% (fertilizantes, maquinaria, irrigación), procesamiento 15-25% (energía térmica, electricidad), empaque 20-30% (vidrio>PET>cartón>bolsa en emisiones), transporte 5-15% (distancia, modo). Estrategias mitigación: (1) Energía renovable: plantas procesamiento solar/eólica reduciendo emisiones Alcance 2 80-90%, (2) Empaque ligero: botellas PET más delgadas (-30% material), bolsas vs botellas, materiales reciclables/compostables, (3) Valorización residuos: orujo a alimento animal/biocombustible/pectina reduciendo emisiones disposición y creando economía circular, generación biogás aguas residuales, (4) Concentración eficiente: concentración evaporativa reduciendo emisiones transporte (concentrado 6x = 6x menos peso envío), (5) Abastecimiento local/regional: reduciendo kilómetros alimento, (6) Agricultura precisión: uso optimizado fertilizante/agua reduciendo emisiones agrícolas 20-40%, (7) Optimización cadena frío: refrigeración eficiente reduciendo uso energía. Ejemplo: LCA jugo naranja Tropicana mostró 60% emisiones agricultura, 25% empaque (Tetra Pak), 10% procesamiento, 5% distribución. Estrategias neutralidad carbono: compensando emisiones restantes vía reforestación, créditos energía renovable.",
          de: "Lebenszyklusanalyse (LCA) nach ISO 14040/14044 bewertet Umweltauswirkungen von Rohstoffgewinnung bis Entsorgung am Lebensende (von Wiege zu Bahre). Funktionelle Einheit: typisch 1 Liter verpackter Saft. Wirkungskategorien: Globales Erwärmungspotenzial (GWP/CO2-Fußabdruck in kg CO₂-Äq), Wasserverbrauch (Liter blaues Wasser), Eutrophierungspotenzial (kg PO₄-Äq), Versauerung (kg SO₂-Äq), Landnutzung (m²·Jahr). Typischer Saft-CO2-Fußabdruck-Aufschlüsselung: Landwirtschaft 40-50% (Dünger, Maschinen, Bewässerung), Verarbeitung 15-25% (Wärmeenergie, Elektrizität), Verpackung 20-30% (Glas>PET>Karton>Beutel in Emissionen), Transport 5-15% (Entfernung, Modus). Minderungsstrategien: (1) Erneuerbare Energie: Solar-/Windkraft-Verarbeitungsanlagen reduzieren Scope-2-Emissionen 80-90%, (2) Leichtverpackung: dünnere PET-Flaschen (-30% Material), Beutel vs Flaschen, recycelbare/kompostierbare Materialien, (3) Abfallvalorisierung: Trester zu Tierfutter/Biokraftstoff/Pektin reduziert Entsorgungsemissionen und schafft Kreislaufwirtschaft, Abwasser-Biogaserzeugung, (4) Effiziente Konzentration: Verdampfungskonzentration reduziert Transportemissionen (6x-Konzentrat = 6x weniger Versandgewicht), (5) Lokale/regionale Beschaffung: Reduzierung Food Miles, (6) Präzisionslandwirtschaft: optimierter Dünger-/Wasserverbrauch reduziert landwirtschaftliche Emissionen 20-40%, (7) Kühlkettenoptimierung: effiziente Kühlung reduziert Energieverbrauch. Beispiel: Tropicana Orangensaft-LCA zeigte 60% Emissionen aus Landwirtschaft, 25% Verpackung (Tetra Pak), 10% Verarbeitung, 5% Vertrieb. CO2-Neutralitätsstrategien: Ausgleich verbleibender Emissionen via Aufforstung, Erneuerbare-Energie-Zertifikate.",
          nl: "Levenscyclus Analyse (LCA) per ISO 14040/14044 evalueert milieu-impacts van grondstofwinning tot einde-levensduur verwijdering (wieg-tot-graf). Functionele eenheid: typisch 1 liter verpakt sap. Impact categorieën: Opwarmingspotentieel Aarde (GWP/koolstofvoetafdruk in kg CO₂-eq), wateruitputting (liters blauw water), eutrofiëringspotentieel (kg PO₄-eq), verzuring (kg SO₂-eq), landgebruik (m²·jaar). Typische sap koolstofvoetafdruk uitsplitsing: landbouw 40-50% (meststoffen, machines, irrigatie), verwerking 15-25% (thermische energie, elektriciteit), verpakking 20-30% (glas>PET>karton>zak in emissies), transport 5-15% (afstand, modus). Mitigatie strategieën: (1) Hernieuwbare energie: zonne-/windenergie verwerkingsfabrieken verminderend Scope 2 emissies 80-90%, (2) Lichtgewicht verpakking: dunnere PET flessen (-30% materiaal), zakken vs flessen, recyclebare/composteerbare materialen, (3) Afval valorisatie: pulp naar diervoeder/biobrandstof/pectine verminderd verwijderingsemissies en creërend circulaire economie, afvalwater biogas generatie, (4) Efficiënte concentratie: verdampingsconcentratie verminderd transportemissies (6x concentraat = 6x minder verzendgewicht), (5) Lokale/regionale inkoop: verminderd voedselkilometers, (6) Precisie landbouw: geoptimaliseerd meststof/watergebruik verminderd landbouwemissies 20-40%, (7) Koude keten optimalisatie: efficiënte koeling verminderd energiegebruik. Voorbeeld: Tropicana sinaasappelsap LCA toonde 60% emissies van landbouw, 25% verpakking (Tetra Pak), 10% verwerking, 5% distributie. Koolstofneutraliteit strategieën: compenseren resterende emissies via herbebossing, hernieuwbare energie credits."
        }
      },
      {
        question: {
          en: "What are the latest advancements in high-throughput phenotyping and precision breeding accelerating development of climate-resilient juice fruit cultivars?",
          es: "¿Cuáles son últimos avances en fenotipado alto rendimiento y mejoramiento de precisión acelerando desarrollo cultivares frutas jugo resistentes clima?",
          de: "Was sind neueste Fortschritte in Hochdurchsatz-Phänotypisierung und Präzisionszüchtung zur Beschleunigung Entwicklung klimaresilienter Saftfrucht-Kultivare?",
          nl: "Wat zijn nieuwste vorderingen in hoogdoorvoer fenotypering en precisie veredeling versnellend ontwikkeling klimaatbestendige sap fruit cultivars?"
        },
        options: [
          { en: "UAV/satellite multispectral imaging, hyperspectral sensors, LiDAR combined with genomic selection and CRISPR gene editing accelerate breeding drought/heat/disease-resistant varieties 5-10x faster", es: "Imágenes multispectrales UAV/satélite, sensores hiperespectrales, LiDAR combinados con selección genómica y edición genética CRISPR aceleran mejoramiento variedades resistentes sequía/calor/enfermedades 5-10x más rápido", de: "UAV/Satelliten-Multispektralbildgebung, hyperspektrale Sensoren, LiDAR kombiniert mit genomischer Selektion und CRISPR-Genbearbeitung beschleunigen Züchtung dürre-/hitze-/krankheitsresistenter Sorten 5-10x schneller", nl: "UAV/satelliet multispectrale beeldvorming, hyperspectrale sensoren, LiDAR gecombineerd met genomische selectie en CRISPR genbewerking versnellen veredeling droogte/warmte/ziekte-resistente variëteiten 5-10x sneller" },
          { en: "Only uses visual inspection by humans", es: "Solo usa inspección visual por humanos", de: "Verwendet nur visuelle Inspektion durch Menschen", nl: "Gebruikt alleen visuele inspectie door mensen" },
          { en: "Has no impact on breeding speed", es: "No tiene impacto en velocidad mejoramiento", de: "Hat keinen Einfluss auf Züchtungsgeschwindigkeit", nl: "Heeft geen impact op veredelingssnelheid" },
          { en: "Only measures fruit size", es: "Solo mide tamaño fruta", de: "Misst nur Fruchtgröße", nl: "Meet alleen fruitgrootte" }
        ],
        correct: 0,
        explanation: {
          en: "High-throughput phenotyping (HTP) non-destructively measures thousands of plants rapidly using advanced sensors. Technologies: (1) UAV (drone)/satellite multispectral imaging (visible, NIR, RedEdge bands) estimates canopy temperature (water stress), NDVI (vigor), chlorophyll fluorescence, (2) Ground-based hyperspectral cameras (400-2500 nm, hundreds of bands) predict fruit sugar content, acidity, ripeness non-invasively via spectroscopic signatures, (3) LiDAR (Light Detection and Ranging) 3D scans measure canopy architecture, fruit load, tree volume, (4) Thermal cameras detect water stress before visible symptoms, (5) RGB imaging with computer vision quantifies growth rates, leaf area, fruit count/size. Data integration: ML algorithms correlate sensor data with target traits (yield, juice quality, drought tolerance). Genomic selection (GS): genotypes thousands of seedlings identifying superior individuals years before fruit production based on DNA markers linked to desirable traits. CRISPR gene editing: precision modifications (e.g., drought tolerance genes, disease resistance, sugar metabolism) without introducing foreign DNA. Speed: traditional breeding 10-20 years per generation; HTP+GS+CRISPR reduces to 2-3 years. Climate resilience targets: heat tolerance (citrus, apple surviving 40+°C), water use efficiency (reducing irrigation 30-50%), disease resistance (citrus greening, fire blight), extended growing regions. Example: Florida citrus industry using HTP/GS developing HLB (Huanglongbing)-tolerant varieties. Challenges: high equipment costs, data management (terabytes per season), regulatory acceptance (CRISPR).",
          es: "Fenotipado alto rendimiento (HTP) mide no destructivamente miles plantas rápidamente usando sensores avanzados. Tecnologías: (1) Imágenes multispectrales UAV (dron)/satélite (bandas visible, NIR, RedEdge) estima temperatura dosel (estrés agua), NDVI (vigor), fluorescencia clorofila, (2) Cámaras hiperespectrales terrestres (400-2500 nm, cientos bandas) predicen contenido azúcar fruta, acidez, madurez no invasivamente vía firmas espectroscópicas, (3) LiDAR (Detección y Rango Luz) escaneos 3D miden arquitectura dosel, carga fruta, volumen árbol, (4) Cámaras térmicas detectan estrés agua antes síntomas visibles, (5) Imágenes RGB con visión computacional cuantifica tasas crecimiento, área foliar, conteo/tamaño fruta. Integración datos: algoritmos ML correlacionan datos sensores con rasgos objetivo (rendimiento, calidad jugo, tolerancia sequía). Selección genómica (GS): genotipa miles plántulas identificando individuos superiores años antes producción fruta basado en marcadores ADN vinculados rasgos deseables. Edición genética CRISPR: modificaciones precisión (ej., genes tolerancia sequía, resistencia enfermedades, metabolismo azúcar) sin introducir ADN extraño. Velocidad: mejoramiento tradicional 10-20 años por generación; HTP+GS+CRISPR reduce a 2-3 años. Objetivos resiliencia climática: tolerancia calor (cítricos, manzana sobreviviendo 40+°C), eficiencia uso agua (reduciendo irrigación 30-50%), resistencia enfermedades (enverdecimiento cítricos, tizón fuego), regiones cultivo extendidas. Ejemplo: industria cítricos Florida usando HTP/GS desarrollando variedades tolerantes HLB (Huanglongbing). Desafíos: altos costos equipo, gestión datos (terabytes por temporada), aceptación regulatoria (CRISPR).",
          de: "Hochdurchsatz-Phänotypisierung (HTP) misst zerstörungsfrei Tausende Pflanzen schnell mit fortschrittlichen Sensoren. Technologien: (1) UAV (Drohnen)/Satelliten-Multispektralbildgebung (sichtbar, NIR, RedEdge-Bänder) schätzt Kronendachtemperatur (Wasserstress), NDVI (Vitalität), Chlorophyll-Fluoreszenz, (2) Bodenbasierte hyperspektrale Kameras (400-2500 nm, Hunderte Bänder) prognostizieren Fruchtzuckergehalt, Säure, Reife nicht-invasiv via spektroskopische Signaturen, (3) LiDAR (Light Detection and Ranging) 3D-Scans messen Kronendacharchitektur, Fruchtlast, Baumvolumen, (4) Wärmebildkameras erkennen Wasserstress vor sichtbaren Symptomen, (5) RGB-Bildgebung mit Computer Vision quantifiziert Wachstumsraten, Blattfläche, Fruchtzahl/-größe. Datenintegration: ML-Algorithmen korrelieren Sensordaten mit Zielmerkmalen (Ertrag, Saftqualität, Dürretoleranz). Genomische Selektion (GS): genotypisiert Tausende Sämlinge identifiziert überlegene Individuen Jahre vor Fruchtproduktion basierend auf DNA-Markern verknüpft mit wünschenswerten Merkmalen. CRISPR-Genbearbeitung: Präzisionsmodifikationen (z.B. Dürretoleranzgene, Krankheitsresistenz, Zuckerstoffwechsel) ohne Einführung fremder DNA. Geschwindigkeit: traditionelle Züchtung 10-20 Jahre pro Generation; HTP+GS+CRISPR reduziert auf 2-3 Jahre. Klimaresilienz-Ziele: Hitzetoleranz (Zitrus, Apfel überlebt 40+°C), Wassernutzungseffizienz (Reduktion Bewässerung 30-50%), Krankheitsresistenz (Zitrusvergrünung, Feuerbrand), erweiterte Anbauregionen. Beispiel: Florida-Zitrusindustrie nutzt HTP/GS entwickelt HLB (Huanglongbing)-tolerante Sorten. Herausforderungen: hohe Ausrüstungskosten, Datenverwaltung (Terabytes pro Saison), regulatorische Akzeptanz (CRISPR).",
          nl: "Hoogdoorvoer fenotypering (HTP) meet niet-destructief duizenden planten snel gebruikmakend van geavanceerde sensoren. Technologieën: (1) UAV (drone)/satelliet multispectrale beeldvorming (zichtbaar, NIR, RedEdge banden) schat kroondaktemperatuur (waterstress), NDVI (vitaliteit), chlorofyl fluorescentie, (2) Grondgebaseerde hyperspectrale camera's (400-2500 nm, honderden banden) voorspellen fruitsuikergehalte, zuurgraad, rijpheid niet-invasief via spectroscopische handtekeningen, (3) LiDAR (Light Detection and Ranging) 3D scans meten kroondak architectuur, fruitlast, boomvolume, (4) Thermische camera's detecteren waterstress voor zichtbare symptomen, (5) RGB beeldvorming met computer vision kwantificeert groeisnelheden, bladoppervlak, fruittelling/grootte. Data integratie: ML algoritmen correleren sensordata met doelkenmerken (opbrengst, sapkwaliteit, droogte tolerantie). Genomische selectie (GS): genotypen duizenden zaailingen identificerend superieure individuen jaren voor fruitproductie gebaseerd op DNA-markers gekoppeld aan gewenste kenmerken. CRISPR genbewerking: precisie modificaties (bijv. droogte tolerantie genen, ziekte resistentie, suiker metabolisme) zonder introductie vreemd DNA. Snelheid: traditionele veredeling 10-20 jaar per generatie; HTP+GS+CRISPR reduceert tot 2-3 jaar. Klimaat veerkracht doelen: warmte tolerantie (citrus, appel overlevend 40+°C), watergebruiksefficiëntie (verminderd irrigatie 30-50%), ziekte resistentie (citrus vergroening, vuurschot), uitgebreide teeltregio's. Voorbeeld: Florida citrus industrie gebruikmakend HTP/GS ontwikkelend HLB (Huanglongbing)-tolerante variëteiten. Uitdagingen: hoge apparatuurkosten, databeheer (terabytes per seizoen), regelgevende acceptatie (CRISPR)."
        }    },
    {
      question: {
        en: "What is orange juice made from?",
        es: "What is orange juice made from?",
        de: "What is orange juice made from?",
        nl: "What is orange juice made from?"
      },
      options: [
        { en: "Pressed oranges", es: "Pressed oranges", de: "Pressed oranges", nl: "Pressed oranges" },
        { en: "Orange flavoring", es: "Orange flavoring", de: "Orange flavoring", nl: "Orange flavoring" },
        { en: "Tang powder", es: "Tang powder", de: "Tang powder", nl: "Tang powder" },
        { en: "Orange concentrate only", es: "Orange concentrate only", de: "Orange concentrate only", nl: "Orange concentrate only" }
      ],
      correct: 0,
      explanation: {
        en: "Orange juice is made by pressing or extracting the liquid from fresh oranges.",
        es: "Orange juice is made by pressing or extracting the liquid from fresh oranges.",
        de: "Orange juice is made by pressing or extracting the liquid from fresh oranges.",
        nl: "Orange juice is made by pressing or extracting the liquid from fresh oranges."
      }
    },
    {
      question: {
        en: "What vitamin is orange juice famous for?",
        es: "What vitamin is orange juice famous for?",
        de: "What vitamin is orange juice famous for?",
        nl: "What vitamin is orange juice famous for?"
      },
      options: [
        { en: "Vitamin C", es: "Vitamin C", de: "Vitamin C", nl: "Vitamin C" },
        { en: "Vitamin A", es: "Vitamin A", de: "Vitamin A", nl: "Vitamin A" },
        { en: "Vitamin D", es: "Vitamin D", de: "Vitamin D", nl: "Vitamin D" },
        { en: "Vitamin B12", es: "Vitamin B12", de: "Vitamin B12", nl: "Vitamin B12" }
      ],
      correct: 0,
      explanation: {
        en: "Orange juice is particularly high in Vitamin C (ascorbic acid).",
        es: "Orange juice is particularly high in Vitamin C (ascorbic acid).",
        de: "Orange juice is particularly high in Vitamin C (ascorbic acid).",
        nl: "Orange juice is particularly high in Vitamin C (ascorbic acid)."
      }
    },
    {
      question: {
        en: "What is pulp in juice?",
        es: "What is pulp in juice?",
        de: "What is pulp in juice?",
        nl: "What is pulp in juice?"
      },
      options: [
        { en: "Fruit fibers and tissue", es: "Fruit fibers and tissue", de: "Fruit fibers and tissue", nl: "Fruit fibers and tissue" },
        { en: "Seeds", es: "Seeds", de: "Seeds", nl: "Seeds" },
        { en: "Sugar", es: "Sugar", de: "Sugar", nl: "Sugar" },
        { en: "Water content", es: "Water content", de: "Water content", nl: "Water content" }
      ],
      correct: 0,
      explanation: {
        en: "Pulp consists of the fibrous fruit tissues that remain suspended in juice after pressing.",
        es: "Pulp consists of the fibrous fruit tissues that remain suspended in juice after pressing.",
        de: "Pulp consists of the fibrous fruit tissues that remain suspended in juice after pressing.",
        nl: "Pulp consists of the fibrous fruit tissues that remain suspended in juice after pressing."
      }
    },
    {
      question: {
        en: "What is apple cider?",
        es: "What is apple cider?",
        de: "What is apple cider?",
        nl: "What is apple cider?"
      },
      options: [
        { en: "Unfiltered apple juice", es: "Unfiltered apple juice", de: "Unfiltered apple juice", nl: "Unfiltered apple juice" },
        { en: "Filtered apple juice", es: "Filtered apple juice", de: "Filtered apple juice", nl: "Filtered apple juice" },
        { en: "Fermented apple drink", es: "Fermented apple drink", de: "Fermented apple drink", nl: "Fermented apple drink" },
        { en: "Apple-flavored soda", es: "Apple-flavored soda", de: "Apple-flavored soda", nl: "Apple-flavored soda" }
      ],
      correct: 0,
      explanation: {
        en: "Apple cider is unfiltered, unsweetened apple juice (in North America; in UK, cider refers to alcoholic version).",
        es: "Apple cider is unfiltered, unsweetened apple juice (in North America; in UK, cider refers to alcoholic version).",
        de: "Apple cider is unfiltered, unsweetened apple juice (in North America; in UK, cider refers to alcoholic version).",
        nl: "Apple cider is unfiltered, unsweetened apple juice (in North America; in UK, cider refers to alcoholic version)."
      }
    },
    {
      question: {
        en: "What is concentrate?",
        es: "What is concentrate?",
        de: "What is concentrate?",
        nl: "What is concentrate?"
      },
      options: [
        { en: "Juice with water removed, then re-added", es: "Juice with water removed, then re-added", de: "Juice with water removed, then re-added", nl: "Juice with water removed, then re-added" },
        { en: "Fresh-squeezed juice", es: "Fresh-squeezed juice", de: "Fresh-squeezed juice", nl: "Fresh-squeezed juice" },
        { en: "Artificial juice", es: "Artificial juice", de: "Artificial juice", nl: "Artificial juice" },
        { en: "Juice with extra fruit", es: "Juice with extra fruit", de: "Juice with extra fruit", nl: "Juice with extra fruit" }
      ],
      correct: 0,
      explanation: {
        en: "Juice concentrate has water removed for storage/transport, then water is added back before sale.",
        es: "Juice concentrate has water removed for storage/transport, then water is added back before sale.",
        de: "Juice concentrate has water removed for storage/transport, then water is added back before sale.",
        nl: "Juice concentrate has water removed for storage/transport, then water is added back before sale."
      }
    },
    {
      question: {
        en: "What fruit is cranberry juice made from?",
        es: "What fruit is cranberry juice made from?",
        de: "What fruit is cranberry juice made from?",
        nl: "What fruit is cranberry juice made from?"
      },
      options: [
        { en: "Cranberries", es: "Cranberries", de: "Cranberries", nl: "Cranberries" },
        { en: "Cherries", es: "Cherries", de: "Cherries", nl: "Cherries" },
        { en: "Strawberries", es: "Strawberries", de: "Strawberries", nl: "Strawberries" },
        { en: "Raspberries", es: "Raspberries", de: "Raspberries", nl: "Raspberries" }
      ],
      correct: 0,
      explanation: {
        en: "Cranberry juice is made from cranberries, tart red berries native to North America.",
        es: "Cranberry juice is made from cranberries, tart red berries native to North America.",
        de: "Cranberry juice is made from cranberries, tart red berries native to North America.",
        nl: "Cranberry juice is made from cranberries, tart red berries native to North America."
      }
    },
    {
      question: {
        en: "What is pasteurization?",
        es: "What is pasteurization?",
        de: "What is pasteurization?",
        nl: "What is pasteurization?"
      },
      options: [
        { en: "Heating to kill bacteria", es: "Heating to kill bacteria", de: "Heating to kill bacteria", nl: "Heating to kill bacteria" },
        { en: "Adding preservatives", es: "Adding preservatives", de: "Adding preservatives", nl: "Adding preservatives" },
        { en: "Removing pulp", es: "Removing pulp", de: "Removing pulp", nl: "Removing pulp" },
        { en: "Adding vitamins", es: "Adding vitamins", de: "Adding vitamins", nl: "Adding vitamins" }
      ],
      correct: 0,
      explanation: {
        en: "Pasteurization heats juice briefly to kill harmful bacteria and extend shelf life.",
        es: "Pasteurization heats juice briefly to kill harmful bacteria and extend shelf life.",
        de: "Pasteurization heats juice briefly to kill harmful bacteria and extend shelf life.",
        nl: "Pasteurization heats juice briefly to kill harmful bacteria and extend shelf life."
      }
    },
    {
      question: {
        en: "What is tomato juice?",
        es: "What is tomato juice?",
        de: "What is tomato juice?",
        nl: "What is tomato juice?"
      },
      options: [
        { en: "Juice from tomatoes", es: "Juice from tomatoes", de: "Juice from tomatoes", nl: "Juice from tomatoes" },
        { en: "Vegetable blend", es: "Vegetable blend", de: "Vegetable blend", nl: "Vegetable blend" },
        { en: "Spiced juice", es: "Spiced juice", de: "Spiced juice", nl: "Spiced juice" },
        { en: "Tomato sauce diluted", es: "Tomato sauce diluted", de: "Tomato sauce diluted", nl: "Tomato sauce diluted" }
      ],
      correct: 0,
      explanation: {
        en: "Tomato juice is the liquid extracted from tomatoes, often seasoned with salt and spices.",
        es: "Tomato juice is the liquid extracted from tomatoes, often seasoned with salt and spices.",
        de: "Tomato juice is the liquid extracted from tomatoes, often seasoned with salt and spices.",
        nl: "Tomato juice is the liquid extracted from tomatoes, often seasoned with salt and spices."
      }
    },
    {
      question: {
        en: "What is 'not from concentrate' mean?",
        es: "What is 'not from concentrate' mean?",
        de: "What is 'not from concentrate' mean?",
        nl: "What is 'not from concentrate' mean?"
      },
      options: [
        { en: "Water never removed from juice", es: "Water never removed from juice", de: "Water never removed from juice", nl: "Water never removed from juice" },
        { en: "No artificial ingredients", es: "No artificial ingredients", de: "No artificial ingredients", nl: "No artificial ingredients" },
        { en: "Fresh-squeezed only", es: "Fresh-squeezed only", de: "Fresh-squeezed only", nl: "Fresh-squeezed only" },
        { en: "No added sugar", es: "No added sugar", de: "No added sugar", nl: "No added sugar" }
      ],
      correct: 0,
      explanation: {
        en: "'Not from concentrate' means the juice wasn't concentrated and reconstituted; water was never removed.",
        es: "'Not from concentrate' means the juice wasn't concentrated and reconstituted; water was never removed.",
        de: "'Not from concentrate' means the juice wasn't concentrated and reconstituted; water was never removed.",
        nl: "'Not from concentrate' means the juice wasn't concentrated and reconstituted; water was never removed."
      }
    },
    {
      question: {
        en: "What is grapefruit juice?",
        es: "What is grapefruit juice?",
        de: "What is grapefruit juice?",
        nl: "What is grapefruit juice?"
      },
      options: [
        { en: "Juice from grapefruits", es: "Juice from grapefruits", de: "Juice from grapefruits", nl: "Juice from grapefruits" },
        { en: "Blend of grape and fruit juices", es: "Blend of grape and fruit juices", de: "Blend of grape and fruit juices", nl: "Blend of grape and fruit juices" },
        { en: "Artificially flavored juice", es: "Artificially flavored juice", de: "Artificially flavored juice", nl: "Artificially flavored juice" },
        { en: "Sweetened grape juice", es: "Sweetened grape juice", de: "Sweetened grape juice", nl: "Sweetened grape juice" }
      ],
      correct: 0,
      explanation: {
        en: "Grapefruit juice is extracted from grapefruits, with a tart, slightly bitter flavor.",
        es: "Grapefruit juice is extracted from grapefruits, with a tart, slightly bitter flavor.",
        de: "Grapefruit juice is extracted from grapefruits, with a tart, slightly bitter flavor.",
        nl: "Grapefruit juice is extracted from grapefruits, with a tart, slightly bitter flavor."
      }
    },
    {
      question: {
        en: "What fruit is prune juice made from?",
        es: "What fruit is prune juice made from?",
        de: "What fruit is prune juice made from?",
        nl: "What fruit is prune juice made from?"
      },
      options: [
        { en: "Dried plums", es: "Dried plums", de: "Dried plums", nl: "Dried plums" },
        { en: "Prunes (fresh fruit)", es: "Prunes (fresh fruit)", de: "Prunes (fresh fruit)", nl: "Prunes (fresh fruit)" },
        { en: "Grapes", es: "Grapes", de: "Grapes", nl: "Grapes" },
        { en: "Plums", es: "Plums", de: "Plums", nl: "Plums" }
      ],
      correct: 0,
      explanation: {
        en: "Prune juice is made from dried plums, known for digestive benefits.",
        es: "Prune juice is made from dried plums, known for digestive benefits.",
        de: "Prune juice is made from dried plums, known for digestive benefits.",
        nl: "Prune juice is made from dried plums, known for digestive benefits."
      }
    },
    {
      question: {
        en: "What is pomegranate juice?",
        es: "What is pomegranate juice?",
        de: "What is pomegranate juice?",
        nl: "What is pomegranate juice?"
      },
      options: [
        { en: "Juice from pomegranate seeds", es: "Juice from pomegranate seeds", de: "Juice from pomegranate seeds", nl: "Juice from pomegranate seeds" },
        { en: "Pomegranate-flavored juice", es: "Pomegranate-flavored juice", de: "Pomegranate-flavored juice", nl: "Pomegranate-flavored juice" },
        { en: "Red fruit blend", es: "Red fruit blend", de: "Red fruit blend", nl: "Red fruit blend" },
        { en: "Juice from pomegranate skin", es: "Juice from pomegranate skin", de: "Juice from pomegranate skin", nl: "Juice from pomegranate skin" }
      ],
      correct: 0,
      explanation: {
        en: "Pomegranate juice is extracted from the juicy seeds (arils) inside pomegranates.",
        es: "Pomegranate juice is extracted from the juicy seeds (arils) inside pomegranates.",
        de: "Pomegranate juice is extracted from the juicy seeds (arils) inside pomegranates.",
        nl: "Pomegranate juice is extracted from the juicy seeds (arils) inside pomegranates."
      }
    },
    {
      question: {
        en: "What makes juice 'cold-pressed'?",
        es: "What makes juice 'cold-pressed'?",
        de: "What makes juice 'cold-pressed'?",
        nl: "What makes juice 'cold-pressed'?"
      },
      options: [
        { en: "Extracted without heat", es: "Extracted without heat", de: "Extracted without heat", nl: "Extracted without heat" },
        { en: "Served cold", es: "Served cold", de: "Served cold", nl: "Served cold" },
        { en: "Refrigerated immediately", es: "Refrigerated immediately", de: "Refrigerated immediately", nl: "Refrigerated immediately" },
        { en: "Made from frozen fruit", es: "Made from frozen fruit", de: "Made from frozen fruit", nl: "Made from frozen fruit" }
      ],
      correct: 0,
      explanation: {
        en: "Cold-pressed juice is extracted using hydraulic pressure without heat, preserving nutrients.",
        es: "Cold-pressed juice is extracted using hydraulic pressure without heat, preserving nutrients.",
        de: "Cold-pressed juice is extracted using hydraulic pressure without heat, preserving nutrients.",
        nl: "Cold-pressed juice is extracted using hydraulic pressure without heat, preserving nutrients."
      }
    },
    {
      question: {
        en: "What is the difference between juice and nectar?",
        es: "What is the difference between juice and nectar?",
        de: "What is the difference between juice and nectar?",
        nl: "What is the difference between juice and nectar?"
      },
      options: [
        { en: "Nectar has added water and sugar", es: "Nectar has added water and sugar", de: "Nectar has added water and sugar", nl: "Nectar has added water and sugar" },
        { en: "No difference", es: "No difference", de: "No difference", nl: "No difference" },
        { en: "Nectar is thicker", es: "Nectar is thicker", de: "Nectar is thicker", nl: "Nectar is thicker" },
        { en: "Juice is artificial", es: "Juice is artificial", de: "Juice is artificial", nl: "Juice is artificial" }
      ],
      correct: 0,
      explanation: {
        en: "Fruit nectar contains fruit juice or purée plus added water and sugar; juice is just fruit liquid.",
        es: "Fruit nectar contains fruit juice or purée plus added water and sugar; juice is just fruit liquid.",
        de: "Fruit nectar contains fruit juice or purée plus added water and sugar; juice is just fruit liquid.",
        nl: "Fruit nectar contains fruit juice or purée plus added water and sugar; juice is just fruit liquid."
      }
    },
    {
      question: {
        en: "What is grape juice?",
        es: "What is grape juice?",
        de: "What is grape juice?",
        nl: "What is grape juice?"
      },
      options: [
        { en: "Juice from grapes", es: "Juice from grapes", de: "Juice from grapes", nl: "Juice from grapes" },
        { en: "Wine without alcohol", es: "Wine without alcohol", de: "Wine without alcohol", nl: "Wine without alcohol" },
        { en: "Purple-colored juice", es: "Purple-colored juice", de: "Purple-colored juice", nl: "Purple-colored juice" },
        { en: "Fruit punch", es: "Fruit punch", de: "Fruit punch", nl: "Fruit punch" }
      ],
      correct: 0,
      explanation: {
        en: "Grape juice is the liquid extracted from crushing grapes, available in purple or white varieties.",
        es: "Grape juice is the liquid extracted from crushing grapes, available in purple or white varieties.",
        de: "Grape juice is the liquid extracted from crushing grapes, available in purple or white varieties.",
        nl: "Grape juice is the liquid extracted from crushing grapes, available in purple or white varieties."
      }
    },
    {
      question: {
        en: "What nutrients are lost in most commercial juicing?",
        es: "What nutrients are lost in most commercial juicing?",
        de: "What nutrients are lost in most commercial juicing?",
        nl: "What nutrients are lost in most commercial juicing?"
      },
      options: [
        { en: "Fiber", es: "Fiber", de: "Fiber", nl: "Fiber" },
        { en: "Vitamins", es: "Vitamins", de: "Vitamins", nl: "Vitamins" },
        { en: "Sugars", es: "Sugars", de: "Sugars", nl: "Sugars" },
        { en: "Water", es: "Water", de: "Water", nl: "Water" }
      ],
      correct: 0,
      explanation: {
        en: "Most commercial juicing removes fiber; fresh whole fruit contains more fiber than juice.",
        es: "Most commercial juicing removes fiber; fresh whole fruit contains more fiber than juice.",
        de: "Most commercial juicing removes fiber; fresh whole fruit contains more fiber than juice.",
        nl: "Most commercial juicing removes fiber; fresh whole fruit contains more fiber than juice."
      }
    },
    {
      question: {
        en: "What is pineapple juice?",
        es: "What is pineapple juice?",
        de: "What is pineapple juice?",
        nl: "What is pineapple juice?"
      },
      options: [
        { en: "Juice from pineapples", es: "Juice from pineapples", de: "Juice from pineapples", nl: "Juice from pineapples" },
        { en: "Tropical fruit blend", es: "Tropical fruit blend", de: "Tropical fruit blend", nl: "Tropical fruit blend" },
        { en: "Yellow-colored juice", es: "Yellow-colored juice", de: "Yellow-colored juice", nl: "Yellow-colored juice" },
        { en: "Pine-flavored juice", es: "Pine-flavored juice", de: "Pine-flavored juice", nl: "Pine-flavored juice" }
      ],
      correct: 0,
      explanation: {
        en: "Pineapple juice is extracted from fresh pineapples, high in vitamin C and bromelain enzyme.",
        es: "Pineapple juice is extracted from fresh pineapples, high in vitamin C and bromelain enzyme.",
        de: "Pineapple juice is extracted from fresh pineapples, high in vitamin C and bromelain enzyme.",
        nl: "Pineapple juice is extracted from fresh pineapples, high in vitamin C and bromelain enzyme."
      }
    },
    {
      question: {
        en: "What is lemon juice used for?",
        es: "What is lemon juice used for?",
        de: "What is lemon juice used for?",
        nl: "What is lemon juice used for?"
      },
      options: [
        { en: "Flavoring and vitamin C", es: "Flavoring and vitamin C", de: "Flavoring and vitamin C", nl: "Flavoring and vitamin C" },
        { en: "Sweetener", es: "Sweetener", de: "Sweetener", nl: "Sweetener" },
        { en: "Coloring", es: "Coloring", de: "Coloring", nl: "Coloring" },
        { en: "Preservative only", es: "Preservative only", de: "Preservative only", nl: "Preservative only" }
      ],
      correct: 0,
      explanation: {
        en: "Lemon juice is used for its tart flavor and high vitamin C content.",
        es: "Lemon juice is used for its tart flavor and high vitamin C content.",
        de: "Lemon juice is used for its tart flavor and high vitamin C content.",
        nl: "Lemon juice is used for its tart flavor and high vitamin C content."
      }
    },
    {
      question: {
        en: "What does '100% juice' mean?",
        es: "What does '100% juice' mean?",
        de: "What does '100% juice' mean?",
        nl: "What does '100% juice' mean?"
      },
      options: [
        { en: "No added water or sugar", es: "No added water or sugar", de: "No added water or sugar", nl: "No added water or sugar" },
        { en: "Fresh-squeezed", es: "Fresh-squeezed", de: "Fresh-squeezed", nl: "Fresh-squeezed" },
        { en: "Organic only", es: "Organic only", de: "Organic only", nl: "Organic only" },
        { en: "Not from concentrate", es: "Not from concentrate", de: "Not from concentrate", nl: "Not from concentrate" }
      ],
      correct: 0,
      explanation: {
        en: "'100% juice' means the product contains only juice from fruit, with no water or sugar added.",
        es: "'100% juice' means the product contains only juice from fruit, with no water or sugar added.",
        de: "'100% juice' means the product contains only juice from fruit, with no water or sugar added.",
        nl: "'100% juice' means the product contains only juice from fruit, with no water or sugar added."
      }
    },
    {
      question: {
        en: "What is carrot juice?",
        es: "What is carrot juice?",
        de: "What is carrot juice?",
        nl: "What is carrot juice?"
      },
      options: [
        { en: "Juice from carrots", es: "Juice from carrots", de: "Juice from carrots", nl: "Juice from carrots" },
        { en: "Orange-colored juice", es: "Orange-colored juice", de: "Orange-colored juice", nl: "Orange-colored juice" },
        { en: "Vegetable blend", es: "Vegetable blend", de: "Vegetable blend", nl: "Vegetable blend" },
        { en: "Carrot-flavored drink", es: "Carrot-flavored drink", de: "Carrot-flavored drink", nl: "Carrot-flavored drink" }
      ],
      correct: 0,
      explanation: {
        en: "Carrot juice is extracted from fresh carrots, rich in beta-carotene (vitamin A).",
        es: "Carrot juice is extracted from fresh carrots, rich in beta-carotene (vitamin A).",
        de: "Carrot juice is extracted from fresh carrots, rich in beta-carotene (vitamin A).",
        nl: "Carrot juice is extracted from fresh carrots, rich in beta-carotene (vitamin A)."
      }

      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  } else if (typeof window !== 'undefined') {
    window.level10 = level10;
  }
})();
