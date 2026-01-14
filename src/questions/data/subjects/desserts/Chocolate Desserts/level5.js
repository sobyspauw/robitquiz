// Chocolate Desserts Quiz - Level 5: Professional
(function() {
  const level5 = {
    name: {
      en: "Professional Chocolate Making",
      es: "Fabricación Profesional de Chocolate",
      de: "Professionelle Schokoladenherstellung",
      nl: "Professionele Chocoladeproductie"
    },
    questions: [
      {
        question: {
          en: "What is the critical factor in determining chocolate viscosity for molding applications?",
          es: "¿Cuál es el factor crítico para determinar la viscosidad del chocolate para aplicaciones de moldeado?",
          de: "Was ist der kritische Faktor bei der Bestimmung der Schokoladenviskosität für Formanwendungen?",
          nl: "Wat is de kritieke factor voor het bepalen van chocoladeviscositeit voor vormtoepassingen?"
        },
        options: [
          { en: "Particle size distribution and temperature", es: "Distribución del tamaño de partículas y temperatura", de: "Partikelgrößenverteilung und Temperatur", nl: "Deeltjesgrootte verdeling en temperatuur" },
          { en: "Sugar content only", es: "Solo contenido de azúcar", de: "Nur Zuckergehalt", nl: "Alleen suikergehalte" },
          { en: "Cocoa origin", es: "Origen del cacao", de: "Kakaoherkunft", nl: "Cacao oorsprong" },
          { en: "Storage time", es: "Tiempo de almacenamiento", de: "Lagerzeit", nl: "Opslag tijd" }
        ],
        correct: 0,
        explanation: {
          en: "Chocolate viscosity for molding is primarily determined by particle size distribution and temperature. Finer particles increase viscosity, while higher temperatures decrease it.",
          es: "La viscosidad del chocolate para moldeo se determina principalmente por la distribución del tamaño de partículas y la temperatura. Partículas más finas aumentan viscosidad, mientras que temperaturas más altas la disminuyen.",
          de: "Die Schokoladenviskosität für das Formen wird hauptsächlich durch Partikelgrößenverteilung und Temperatur bestimmt. Feinere Partikel erhöhen die Viskosität, während höhere Temperaturen sie verringern.",
          nl: "Chocoladeviscositeit voor vormen wordt hoofdzakelijk bepaald door deeltjesgrootte verdeling en temperatuur. Fijnere deeltjes verhogen viscositeit, terwijl hogere temperaturen het verlagen."
        }
      },
      {
        question: {
          en: "What is the purpose of refining in chocolate production and what particle size is targeted?",
          es: "¿Cuál es el propósito del refinado en la producción de chocolate y qué tamaño de partícula se busca?",
          de: "Was ist der Zweck des Raffinierens in der Schokoladenproduktion und welche Partikelgröße wird angestrebt?",
          nl: "Wat is het doel van raffineren in chocoladeproductie en welke deeltjesgrootte wordt nagestreefd?"
        },
        options: [
          { en: "Reduces particles to 15-20 microns for smooth texture", es: "Reduce partículas a 15-20 micrones para textura suave", de: "Reduziert Partikel auf 15-20 Mikron für glatte Textur", nl: "Vermindert deeltjes tot 15-20 micron voor gladde textuur" },
          { en: "Increases particle size", es: "Aumenta tamaño de partícula", de: "Erhöht Partikelgröße", nl: "Verhoogt deeltjesgrootte" },
          { en: "Only removes impurities", es: "Solo remueve impurezas", de: "Entfernt nur Verunreinigungen", nl: "Verwijdert alleen onzuiverheden" },
          { en: "Changes flavor only", es: "Solo cambia sabor", de: "Ändert nur Geschmack", nl: "Verandert alleen smaak" }
        ],
        correct: 0,
        explanation: {
          en: "Refining reduces particle size to 15-20 microns, below the tongue's sensory threshold, creating the smooth, non-gritty texture essential for quality chocolate.",
          es: "El refinado reduce el tamaño de partícula a 15-20 micrones, por debajo del umbral sensorial de la lengua, creando la textura suave y no arenosa esencial para chocolate de calidad.",
          de: "Das Raffinieren reduziert die Partikelgröße auf 15-20 Mikron, unter die Wahrnehmungsschwelle der Zunge, und schafft die glatte, nicht sandige Textur, die für Qualitätsschokolade wesentlich ist.",
          nl: "Raffineren vermindert deeltjesgrootte tot 15-20 micron, onder de sensorische drempel van de tong, wat de gladde, niet-korrelige textuur creëert die essentieel is voor kwaliteitschocolade."
        }
      },
      {
        question: {
          en: "What is the optimal conching time and temperature for developing premium chocolate flavor?",
          es: "¿Cuál es el tiempo y temperatura óptimos de conchado para desarrollar sabor de chocolate premium?",
          de: "Was ist die optimale Conchierzeit und -temperatur für die Entwicklung von Premium-Schokoladengeschmack?",
          nl: "Wat is de optimale concheer tijd en temperatuur voor het ontwikkelen van premium chocoladesmaak?"
        },
        options: [
          { en: "12-72 hours at 60-80°C for flavor development", es: "12-72 horas a 60-80°C para desarrollo de sabor", de: "12-72 Stunden bei 60-80°C für Geschmacksentwicklung", nl: "12-72 uur bij 60-80°C voor smaakontwikkeling" },
          { en: "2-4 hours at 100°C", es: "2-4 horas a 100°C", de: "2-4 Stunden bei 100°C", nl: "2-4 uur bij 100°C" },
          { en: "1 hour at room temperature", es: "1 hora a temperatura ambiente", de: "1 Stunde bei Raumtemperatur", nl: "1 uur op kamertemperatuur" },
          { en: "24 hours at 40°C", es: "24 horas a 40°C", de: "24 Stunden bei 40°C", nl: "24 uur bij 40°C" }
        ],
        correct: 0,
        explanation: {
          en: "Premium chocolate requires 12-72 hours of conching at 60-80°C to develop complex flavors, remove unwanted volatile compounds, and achieve optimal texture.",
          es: "El chocolate premium requiere 12-72 horas de conchado a 60-80°C para desarrollar sabores complejos, remover compuestos volátiles no deseados y lograr textura óptima.",
          de: "Premium-Schokolade erfordert 12-72 Stunden Conchieren bei 60-80°C, um komplexe Aromen zu entwickeln, unerwünschte flüchtige Verbindungen zu entfernen und optimale Textur zu erreichen.",
          nl: "Premium chocolade vereist 12-72 uur conchen bij 60-80°C om complexe smaken te ontwikkelen, ongewenste vluchtige verbindingen te verwijderen en optimale textuur te bereiken."
        }
      },
      {
        question: {
          en: "What role does water activity (aw) play in chocolate shelf stability?",
          es: "¿Qué papel juega la actividad de agua (aw) en la estabilidad de almacenamiento del chocolate?",
          de: "Welche Rolle spielt die Wasseraktivität (aw) bei der Lagerstabilität von Schokolade?",
          nl: "Welke rol speelt wateractiviteit (aw) in chocolade opslagstabiliteit?"
        },
        options: [
          { en: "Controls microbial growth and moisture migration", es: "Controla crecimiento microbiano y migración de humedad", de: "Kontrolliert mikrobielles Wachstum und Feuchtigkeitsmigration", nl: "Controleert microbiële groei en vochtmigratie" },
          { en: "Only affects flavor", es: "Solo afecta el sabor", de: "Beeinflusst nur den Geschmack", nl: "Beïnvloedt alleen smaak" },
          { en: "Changes chocolate color", es: "Cambia el color del chocolate", de: "Ändert die Schokoladenfarbe", nl: "Verandert chocoladekleur" },
          { en: "Has no effect", es: "No tiene efecto", de: "Hat keine Wirkung", nl: "Heeft geen effect" }
        ],
        correct: 0,
        explanation: {
          en: "Water activity below 0.7 prevents microbial growth and controls moisture migration, which is crucial for chocolate stability and preventing sugar bloom formation.",
          es: "La actividad de agua por debajo de 0.7 previene crecimiento microbiano y controla migración de humedad, lo cual es crucial para estabilidad del chocolate y prevenir formación de bloom de azúcar.",
          de: "Wasseraktivität unter 0,7 verhindert mikrobielles Wachstum und kontrolliert Feuchtigkeitsmigration, was für Schokoladenstabilität und Verhinderung von Zuckerreifbildung entscheidend ist.",
          nl: "Wateractiviteit onder 0,7 voorkomt microbiële groei en controleert vochtmigratie, wat cruciaal is voor chocoladestabiliteit en het voorkomen van suikerbloei vorming."
        }
      },
      {
        question: {
          en: "What is the significance of polymorphic crystal forms in chocolate quality?",
          es: "¿Cuál es la importancia de las formas cristalinas polimórficas en la calidad del chocolate?",
          de: "Was ist die Bedeutung polymorphischer Kristallformen für die Schokoladenqualität?",
          nl: "Wat is de betekenis van polymorfe kristalvormen in chocoladekwaliteit?"
        },
        options: [
          { en: "Form V provides optimal snap, gloss, and stability", es: "Forma V proporciona chasquido, brillo y estabilidad óptimos", de: "Form V bietet optimalen Knack, Glanz und Stabilität", nl: "Vorm V biedt optimale knak, glans en stabiliteit" },
          { en: "All forms are equivalent", es: "Todas las formas son equivalentes", de: "Alle Formen sind gleichwertig", nl: "Alle vormen zijn gelijkwaardig" },
          { en: "Only affects melting point", es: "Solo afecta el punto de fusión", de: "Beeinflusst nur den Schmelzpunkt", nl: "Beïnvloedt alleen smeltpunt" },
          { en: "Form I is always preferred", es: "Forma I siempre es preferida", de: "Form I wird immer bevorzugt", nl: "Vorm I heeft altijd de voorkeur" }
        ],
        correct: 0,
        explanation: {
          en: "Form V (β2) crystals provide the desired characteristics: proper contraction for mold release, attractive gloss, good snap, and resistance to bloom formation.",
          es: "Los cristales Forma V (β2) proporcionan las características deseadas: contracción apropiada para liberación del molde, brillo atractivo, buen chasquido y resistencia a formación de bloom.",
          de: "Form-V-Kristalle (β2) bieten die gewünschten Eigenschaften: richtige Kontraktion für Formlösung, attraktiven Glanz, guten Knack und Widerstand gegen Blütenbildung.",
          nl: "Vorm V (β2) kristallen bieden de gewenste kenmerken: juiste krimp voor vormvrijgave, aantrekkelijke glans, goede knak en weerstand tegen bloeivorming."
        }
      },
      {
        question: {
          en: "What causes off-flavors in chocolate during extended storage and how can they be prevented?",
          es: "¿Qué causa sabores desagradables en el chocolate durante almacenamiento extendido y cómo se pueden prevenir?",
          de: "Was verursacht Fehlaromen in Schokolade während längerer Lagerung und wie können sie verhindert werden?",
          nl: "Wat veroorzaakt off-smaken in chocolade tijdens langdurige opslag en hoe kunnen ze worden voorkomen?"
        },
        options: [
          { en: "Lipid oxidation; prevented by proper packaging and antioxidants", es: "Oxidación lipídica; prevenida por empaque apropiado y antioxidantes", de: "Lipidoxidation; verhindert durch richtige Verpackung und Antioxidantien", nl: "Lipide oxidatie; voorkomen door juiste verpakking en antioxidanten" },
          { en: "Only temperature affects flavor", es: "Solo la temperatura afecta el sabor", de: "Nur Temperatur beeinflusst den Geschmack", nl: "Alleen temperatuur beïnvloedt smaak" },
          { en: "Sugar crystallization only", es: "Solo cristalización del azúcar", de: "Nur Zuckerkristallisation", nl: "Alleen suikerkristallisatie" },
          { en: "Cannot be prevented", es: "No se puede prevenir", de: "Kann nicht verhindert werden", nl: "Kan niet worden voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Off-flavors develop from lipid oxidation of cocoa butter and milk fats. Prevention involves modified atmosphere packaging, antioxidants like tocopherols, and proper storage conditions.",
          es: "Los sabores desagradables se desarrollan por oxidación lipídica de manteca de cacao y grasas lácteas. La prevención involucra empaque de atmósfera modificada, antioxidantes como tocoferoles y condiciones apropiadas de almacenamiento.",
          de: "Fehlaromen entwickeln sich durch Lipidoxidation von Kakaobutter und Milchfetten. Prävention umfasst Schutzatmosphärenverpackung, Antioxidantien wie Tocopherole und richtige Lagerbedingungen.",
          nl: "Off-smaken ontwikkelen door lipide oxidatie van cacaoboter en melkvetten. Preventie behelst aangepaste atmosfeer verpakking, antioxidanten zoals tocoferolen en juiste opslagcondities."
        }
      },
      {
        question: {
          en: "What is the optimal cocoa butter content for professional couverture chocolate?",
          es: "¿Cuál es el contenido óptimo de manteca de cacao para chocolate couverture profesional?",
          de: "Was ist der optimale Kakaobuttergehalt für professionelle Kuvertüreschokolade?",
          nl: "Wat is het optimale cacaobotergehalte voor professionele couverture chocolade?"
        },
        options: [
          { en: "32-39% for optimal working properties", es: "32-39% para propiedades de trabajo óptimas", de: "32-39% für optimale Arbeitseigenschaften", nl: "32-39% voor optimale werkeigenschappen" },
          { en: "20-25% is sufficient", es: "20-25% es suficiente", de: "20-25% ist ausreichend", nl: "20-25% is voldoende" },
          { en: "45-50% always", es: "45-50% siempre", de: "45-50% immer", nl: "45-50% altijd" },
          { en: "10-15% maximum", es: "10-15% máximo", de: "10-15% maximum", nl: "10-15% maximum" }
        ],
        correct: 0,
        explanation: {
          en: "Professional couverture requires 32-39% cocoa butter for optimal fluidity, proper contraction for mold release, ideal viscosity for enrobing, and excellent tempering characteristics.",
          es: "La couverture profesional requiere 32-39% manteca de cacao para fluidez óptima, contracción apropiada para liberación del molde, viscosidad ideal para bañado y excelentes características de templado.",
          de: "Professionelle Kuvertüre erfordert 32-39% Kakaobutter für optimale Fließfähigkeit, richtige Kontraktion für Formlösung, ideale Viskosität für Überziehen und ausgezeichnete Temperiereigenschaften.",
          nl: "Professionele couverture vereist 32-39% cacaoboter voor optimale vloeibaarheid, juiste krimp voor vormvrijgave, ideale viscositeit voor omsluiten en uitstekende tempereerkenmerken."
        }
      },
      {
        question: {
          en: "What factors affect chocolate bloom formation and how can it be minimized?",
          es: "¿Qué factores afectan la formación de bloom en chocolate y cómo se puede minimizar?",
          de: "Welche Faktoren beeinflussen die Schokoladenblütenbildung und wie kann sie minimiert werden?",
          nl: "Welke factoren beïnvloeden chocolade bloeivorming en hoe kan het worden geminimaliseerd?"
        },
        options: [
          { en: "Temperature cycling and humidity; minimize with stable storage conditions", es: "Ciclos de temperatura y humedad; minimizar con condiciones estables de almacenamiento", de: "Temperaturzyklen und Feuchtigkeit; minimieren durch stabile Lagerbedingungen", nl: "Temperatuurcycli en vochtigheid; minimaliseren met stabiele opslagcondities" },
          { en: "Only poor tempering", es: "Solo mal templado", de: "Nur schlechtes Temperieren", nl: "Alleen slecht tempereren" },
          { en: "Light exposure only", es: "Solo exposición a la luz", de: "Nur Lichtexposition", nl: "Alleen lichtblootstelling" },
          { en: "Cannot be prevented", es: "No se puede prevenir", de: "Kann nicht verhindert werden", nl: "Kan niet worden voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Bloom formation is caused by temperature cycling (fat bloom) and humidity exposure (sugar bloom). Prevention requires stable storage at 15-18°C with <50% humidity and proper packaging.",
          es: "La formación de bloom es causada por ciclos de temperatura (bloom de grasa) y exposición a humedad (bloom de azúcar). La prevención requiere almacenamiento estable a 15-18°C con <50% humedad y empaque apropiado.",
          de: "Blütenbildung wird durch Temperaturzyklen (Fettblüte) und Feuchtigkeitsexposition (Zuckerblüte) verursacht. Prävention erfordert stabile Lagerung bei 15-18°C mit <50% Feuchtigkeit und richtige Verpackung.",
          nl: "Bloeivorming wordt veroorzaakt door temperatuurcycli (vetbloei) en vochtblootstelling (suikerbloei). Preventie vereist stabiele opslag bij 15-18°C met <50% vochtigheid en juiste verpakking."
        }
      },
      {
        question: {
          en: "What is the purpose of adding vanilla or vanillin to chocolate formulations?",
          es: "¿Cuál es el propósito de agregar vainilla o vainillina a formulaciones de chocolate?",
          de: "Was ist der Zweck der Zugabe von Vanille oder Vanillin zu Schokoladenformulierungen?",
          nl: "Wat is het doel van het toevoegen van vanille of vanilline aan chocoladeformuleringen?"
        },
        options: [
          { en: "Enhances and rounds out chocolate flavor profile", es: "Mejora y redondea el perfil de sabor del chocolate", de: "Verstärkt und rundet das Schokoladengeschmacksprofil ab", nl: "Versterkt en rondt het chocolade smaakprofiel af" },
          { en: "Only adds sweetness", es: "Solo agrega dulzura", de: "Fügt nur Süße hinzu", nl: "Voegt alleen zoetheid toe" },
          { en: "Preserves chocolate", es: "Preserva el chocolate", de: "Konserviert Schokolade", nl: "Behoudt chocolade" },
          { en: "Changes texture only", es: "Solo cambia textura", de: "Ändert nur Textur", nl: "Verandert alleen textuur" }
        ],
        correct: 0,
        explanation: {
          en: "Vanilla or vanillin enhances chocolate's natural flavors, provides aromatic complexity, and helps round out the flavor profile by complementing cocoa's inherent notes.",
          es: "La vainilla o vainillina mejora los sabores naturales del chocolate, proporciona complejidad aromática y ayuda a redondear el perfil de sabor complementando las notas inherentes del cacao.",
          de: "Vanille oder Vanillin verstärkt die natürlichen Aromen der Schokolade, bietet aromatische Komplexität und hilft, das Geschmacksprofil abzurunden, indem es die inhärenten Noten des Kakaos ergänzt.",
          nl: "Vanille of vanilline versterkt chocolade's natuurlijke smaken, biedt aromatische complexiteit en helpt het smaakprofiel af te ronden door cacao's inherente tonen aan te vullen."
        }
      },
      {
        question: {
          en: "What is the critical water content threshold for preventing microbial growth in chocolate?",
          es: "¿Cuál es el umbral crítico de contenido de agua para prevenir crecimiento microbiano en chocolate?",
          de: "Was ist die kritische Wassergehaltschwelle zur Verhinderung mikrobiellen Wachstums in Schokolade?",
          nl: "Wat is de kritieke watergehalte drempel voor het voorkomen van microbiële groei in chocolade?"
        },
        options: [
          { en: "Below 1.5% moisture content and 0.7 aw", es: "Menos de 1.5% contenido de humedad y 0.7 aw", de: "Unter 1,5% Feuchtigkeitsgehalt und 0,7 aw", nl: "Onder 1,5% vochtgehalte en 0,7 aw" },
          { en: "Below 5% moisture", es: "Menos de 5% humedad", de: "Unter 5% Feuchtigkeit", nl: "Onder 5% vocht" },
          { en: "Below 10% moisture", es: "Menos de 10% humedad", de: "Unter 10% Feuchtigkeit", nl: "Onder 10% vocht" },
          { en: "Moisture doesn't matter", es: "La humedad no importa", de: "Feuchtigkeit spielt keine Rolle", nl: "Vocht maakt niet uit" }
        ],
        correct: 0,
        explanation: {
          en: "Chocolate requires below 1.5% moisture content and water activity below 0.7 to prevent microbial growth, ensure stability, and maintain quality during storage.",
          es: "El chocolate requiere menos de 1.5% contenido de humedad y actividad de agua por debajo de 0.7 para prevenir crecimiento microbiano, asegurar estabilidad y mantener calidad durante almacenamiento.",
          de: "Schokolade erfordert unter 1,5% Feuchtigkeitsgehalt und Wasseraktivität unter 0,7, um mikrobielles Wachstum zu verhindern, Stabilität zu gewährleisten und Qualität während der Lagerung zu erhalten.",
          nl: "Chocolade vereist onder 1,5% vochtgehalte en wateractiviteit onder 0,7 om microbiële groei te voorkomen, stabiliteit te verzekeren en kwaliteit tijdens opslag te behouden."
        }
      },
      {
        question: {
          en: "What is the role of emulsifiers in professional chocolate production?",
          es: "¿Cuál es el papel de los emulsificantes en la producción profesional de chocolate?",
          de: "Was ist die Rolle von Emulgatoren in der professionellen Schokoladenproduktion?",
          nl: "Wat is de rol van emulgatoren in professionele chocoladeproductie?"
        },
        options: [
          { en: "Reduce viscosity, improve flow properties, and stabilize fat-water interfaces", es: "Reducen viscosidad, mejoran propiedades de flujo y estabilizan interfaces grasa-agua", de: "Reduzieren Viskosität, verbessern Fließeigenschaften und stabilisieren Fett-Wasser-Grenzflächen", nl: "Verminderen viscositeit, verbeteren vloeieigenschappen en stabiliseren vet-water interfaces" },
          { en: "Only add flavor", es: "Solo agregan sabor", de: "Fügen nur Geschmack hinzu", nl: "Voegen alleen smaak toe" },
          { en: "Increase hardness", es: "Aumentan dureza", de: "Erhöhen Härte", nl: "Verhogen hardheid" },
          { en: "Change color", es: "Cambian color", de: "Ändern Farbe", nl: "Veranderen kleur" }
        ],
        correct: 0,
        explanation: {
          en: "Emulsifiers like lecithin reduce chocolate viscosity, improve flow properties for molding and enrobing, and help stabilize the complex fat-sugar-protein matrix in chocolate.",
          es: "Los emulsificantes como lecitina reducen la viscosidad del chocolate, mejoran propiedades de flujo para moldeado y bañado, y ayudan a estabilizar la matriz compleja grasa-azúcar-proteína en chocolate.",
          de: "Emulgatoren wie Lecithin reduzieren Schokoladenviskosität, verbessern Fließeigenschaften für Formen und Überziehen und helfen, die komplexe Fett-Zucker-Protein-Matrix in Schokolade zu stabilisieren.",
          nl: "Emulgatoren zoals lecithine verminderen chocoladeviscositeit, verbeteren vloeieigenschappen voor vormen en omsluiten, en helpen de complexe vet-suiker-eiwit matrix in chocolade te stabiliseren."
        }
      },
      {
        question: {
          en: "What determines the particle size distribution target in chocolate refining?",
          es: "¿Qué determina el objetivo de distribución del tamaño de partículas en el refinado de chocolate?",
          de: "Was bestimmt das Ziel der Partikelgrößenverteilung beim Schokoladenraffinieren?",
          nl: "Wat bepaalt het doelwit van deeltjesgrootte verdeling bij chocolade raffineren?"
        },
        options: [
          { en: "Desired texture, mouthfeel, and sensory perception", es: "Textura deseada, sensación bucal y percepción sensorial", de: "Gewünschte Textur, Mundgefühl und sensorische Wahrnehmung", nl: "Gewenste textuur, mondgevoel en sensorische waarneming" },
          { en: "Cost reduction only", es: "Solo reducción de costos", de: "Nur Kostenreduzierung", nl: "Alleen kostenverlaging" },
          { en: "Equipment limitations", es: "Limitaciones del equipo", de: "Ausrüstungsbeschränkungen", nl: "Apparatuur beperkingen" },
          { en: "Random process", es: "Proceso aleatorio", de: "Zufälliger Prozess", nl: "Willekeurig proces" }
        ],
        correct: 0,
        explanation: {
          en: "Particle size distribution targets are determined by desired texture and mouthfeel. Premium chocolate requires particles below 20 microns, with most below 15 microns for optimal sensory perception.",
          es: "Los objetivos de distribución del tamaño de partículas se determinan por textura y sensación bucal deseadas. El chocolate premium requiere partículas por debajo de 20 micrones, con la mayoría por debajo de 15 micrones para percepción sensorial óptima.",
          de: "Ziele der Partikelgrößenverteilung werden durch gewünschte Textur und Mundgefühl bestimmt. Premium-Schokolade erfordert Partikel unter 20 Mikron, mit den meisten unter 15 Mikron für optimale sensorische Wahrnehmung.",
          nl: "Doelwitten van deeltjesgrootte verdeling worden bepaald door gewenste textuur en mondgevoel. Premium chocolade vereist deeltjes onder 20 micron, met de meeste onder 15 micron voor optimale sensorische waarneming."
        }
      },
      {
        question: {
          en: "What is the significance of chocolate rheology in professional applications?",
          es: "¿Cuál es la importancia de la reología del chocolate en aplicaciones profesionales?",
          de: "Was ist die Bedeutung der Schokoladenrheologie in professionellen Anwendungen?",
          nl: "Wat is de betekenis van chocolade reologie in professionele toepassingen?"
        },
        options: [
          { en: "Determines flow behavior for molding, enrobing, and coating processes", es: "Determina comportamiento de flujo para procesos de moldeado, bañado y cobertura", de: "Bestimmt Fließverhalten für Form-, Überzugs- und Beschichtungsprozesse", nl: "Bepaalt vloeiedrag voor vorm-, omsluit- en coatingprocessen" },
          { en: "Only affects appearance", es: "Solo afecta apariencia", de: "Beeinflusst nur das Aussehen", nl: "Beïnvloedt alleen uiterlijk" },
          { en: "Irrelevant to processing", es: "Irrelevante para procesamiento", de: "Irrelevant für die Verarbeitung", nl: "Irrelevant voor verwerking" },
          { en: "Only matters for storage", es: "Solo importa para almacenamiento", de: "Wichtig nur für Lagerung", nl: "Alleen belangrijk voor opslag" }
        ],
        correct: 0,
        explanation: {
          en: "Chocolate rheology governs flow behavior, determining how chocolate moves through equipment, fills molds, coats products, and affects processing efficiency and final product quality.",
          es: "La reología del chocolate gobierna el comportamiento de flujo, determinando cómo el chocolate se mueve a través del equipo, llena moldes, cubre productos y afecta eficiencia de procesamiento y calidad del producto final.",
          de: "Schokoladenrheologie bestimmt Fließverhalten und bestimmt, wie Schokolade durch Ausrüstung fließt, Formen füllt, Produkte beschichtet und Verarbeitungseffizienz und Endproduktqualität beeinflusst.",
          nl: "Chocolade reologie bepaalt vloeiedrag, wat bepaalt hoe chocolade door apparatuur beweegt, vormen vult, producten bedekt en verwerkingsefficiëntie en eindproductkwaliteit beïnvloedt."
        }
      },
      {
        question: {
          en: "What factors influence chocolate flavor development during processing?",
          es: "¿Qué factores influyen en el desarrollo del sabor del chocolate durante el procesamiento?",
          de: "Welche Faktoren beeinflussen die Schokoladengeschmacksentwicklung während der Verarbeitung?",
          nl: "Welke factoren beïnvloeden chocolade smaakontwikkeling tijdens verwerking?"
        },
        options: [
          { en: "Roasting time/temperature, conching duration, and ingredient interactions", es: "Tiempo/temperatura de tostado, duración de conchado e interacciones de ingredientes", de: "Röstzeit/-temperatur, Conchierdauer und Zutateninteraktionen", nl: "Rooster tijd/temperatuur, concheer duur en ingrediënt interacties" },
          { en: "Only cocoa origin", es: "Solo origen del cacao", de: "Nur Kakaoherkunft", nl: "Alleen cacao oorsprong" },
          { en: "Storage conditions only", es: "Solo condiciones de almacenamiento", de: "Nur Lagerbedingungen", nl: "Alleen opslagcondities" },
          { en: "Packaging materials", es: "Materiales de empaque", de: "Verpackungsmaterialien", nl: "Verpakkingsmaterialen" }
        ],
        correct: 0,
        explanation: {
          en: "Chocolate flavor develops through roasting parameters, conching time and temperature, Maillard reactions, volatile compound evolution, and interactions between cocoa, milk, and sugar components.",
          es: "El sabor del chocolate se desarrolla a través de parámetros de tostado, tiempo y temperatura de conchado, reacciones de Maillard, evolución de compuestos volátiles e interacciones entre componentes de cacao, leche y azúcar.",
          de: "Schokoladengeschmack entwickelt sich durch Röstparameter, Conchierzeit und -temperatur, Maillard-Reaktionen, Entwicklung flüchtiger Verbindungen und Interaktionen zwischen Kakao-, Milch- und Zuckerkomponenten.",
          nl: "Chocoladesmaak ontwikkelt door roosterparameters, concheer tijd en temperatuur, Maillard reacties, vluchtige verbinding evolutie en interacties tussen cacao, melk en suikercomponenten."
        }
      },
      {
        question: {
          en: "What is the purpose of pre-crystallization seeding in professional tempering?",
          es: "¿Cuál es el propósito de la siembra de pre-cristalización en templado profesional?",
          de: "Was ist der Zweck der Vorkristallisationsimpfung beim professionellen Temperieren?",
          nl: "Wat is het doel van pre-kristallisatie enting bij professioneel tempereren?"
        },
        options: [
          { en: "Provides crystal nuclei for controlled Form V crystallization", es: "Proporciona núcleos cristalinos para cristalización controlada Forma V", de: "Bietet Kristallkeime für kontrollierte Form-V-Kristallisation", nl: "Biedt kristalkernen voor gecontroleerde Vorm V kristallisatie" },
          { en: "Speeds up melting", es: "Acelera el derretimiento", de: "Beschleunigt das Schmelzen", nl: "Versnelt smelten" },
          { en: "Changes flavor", es: "Cambia el sabor", de: "Ändert den Geschmack", nl: "Verandert smaak" },
          { en: "Reduces costs", es: "Reduce costos", de: "Reduziert Kosten", nl: "Vermindert kosten" }
        ],
        correct: 0,
        explanation: {
          en: "Pre-crystallization seeding introduces stable Form V crystal nuclei that promote uniform crystallization throughout the chocolate mass, ensuring consistent quality and optimal physical properties.",
          es: "La siembra de pre-cristalización introduce núcleos cristalinos estables Forma V que promueven cristalización uniforme en toda la masa de chocolate, asegurando calidad consistente y propiedades físicas óptimas.",
          de: "Vorkristallisationsimpfung führt stabile Form-V-Kristallkeime ein, die gleichmäßige Kristallisation in der gesamten Schokoladenmasse fördern und konsistente Qualität und optimale physikalische Eigenschaften gewährleisten.",
          nl: "Pre-kristallisatie enting introduceert stabiele Vorm V kristalkernen die uniforme kristallisatie door de chocolademassa bevorderen, wat consistente kwaliteit en optimale fysieke eigenschappen verzekert."
        }
      },
      {
        question: {
          en: "What quality control parameters are critical for chocolate production consistency?",
          es: "¿Qué parámetros de control de calidad son críticos para consistencia en producción de chocolate?",
          de: "Welche Qualitätskontrollparameter sind für die Konsistenz der Schokoladenproduktion kritisch?",
          nl: "Welke kwaliteitscontrole parameters zijn kritiek voor chocoladeproductie consistentie?"
        },
        options: [
          { en: "Particle size, viscosity, moisture content, and temper index", es: "Tamaño de partícula, viscosidad, contenido de humedad e índice de temple", de: "Partikelgröße, Viskosität, Feuchtigkeitsgehalt und Temperindex", nl: "Deeltjesgrootte, viscositeit, vochtgehalte en temper index" },
          { en: "Color only", es: "Solo color", de: "Nur Farbe", nl: "Alleen kleur" },
          { en: "Weight only", es: "Solo peso", de: "Nur Gewicht", nl: "Alleen gewicht" },
          { en: "Shape only", es: "Solo forma", de: "Nur Form", nl: "Alleen vorm" }
        ],
        correct: 0,
        explanation: {
          en: "Critical quality parameters include particle size distribution (<20 microns), viscosity (flow properties), moisture content (<1.5%), temper index (crystallization quality), and sensory evaluation.",
          es: "Los parámetros críticos de calidad incluyen distribución del tamaño de partícula (<20 micrones), viscosidad (propiedades de flujo), contenido de humedad (<1.5%), índice de temple (calidad de cristalización) y evaluación sensorial.",
          de: "Kritische Qualitätsparameter umfassen Partikelgrößenverteilung (<20 Mikron), Viskosität (Fließeigenschaften), Feuchtigkeitsgehalt (<1,5%), Temperindex (Kristallisationsqualität) und sensorische Bewertung.",
          nl: "Kritieke kwaliteitsparameters omvatten deeltjesgrootte verdeling (<20 micron), viscositeit (vloeieigenschappen), vochtgehalte (<1,5%), temper index (kristallisatiekwaliteit) en sensorische evaluatie."
        }
      },
      {
        question: {
          en: "What is the impact of milk powder processing on chocolate flavor and texture?",
          es: "¿Cuál es el impacto del procesamiento de leche en polvo en el sabor y textura del chocolate?",
          de: "Was ist der Einfluss der Milchpulververarbeitung auf Schokoladengeschmack und -textur?",
          nl: "Wat is de impact van melkpoeder verwerking op chocoladesmaak en textuur?"
        },
        options: [
          { en: "Affects Maillard reactions, caramelization, and moisture sensitivity", es: "Afecta reacciones de Maillard, caramelización y sensibilidad a humedad", de: "Beeinflusst Maillard-Reaktionen, Karamellisierung und Feuchtigkeitsempfindlichkeit", nl: "Beïnvloedt Maillard reacties, karamellisatie en vochtgevoeligheid" },
          { en: "No significant impact", es: "No hay impacto significativo", de: "Kein signifikanter Einfluss", nl: "Geen significante impact" },
          { en: "Only affects color", es: "Solo afecta el color", de: "Beeinflusst nur die Farbe", nl: "Beïnvloedt alleen kleur" },
          { en: "Only changes sweetness", es: "Solo cambia dulzura", de: "Ändert nur Süße", nl: "Verandert alleen zoetheid" }
        ],
        correct: 0,
        explanation: {
          en: "Milk powder processing affects Maillard reaction development, caramelization potential, protein functionality, fat distribution, and moisture sensitivity, all impacting final chocolate characteristics.",
          es: "El procesamiento de leche en polvo afecta el desarrollo de reacciones de Maillard, potencial de caramelización, funcionalidad de proteínas, distribución de grasa y sensibilidad a humedad, todo impactando características finales del chocolate.",
          de: "Milchpulververarbeitung beeinflusst Maillard-Reaktionsentwicklung, Karamellisierungspotential, Proteinfunktionalität, Fettverteilung und Feuchtigkeitsempfindlichkeit, was alles die finalen Schokoladeneigenschaften beeinflusst.",
          nl: "Melkpoeder verwerking beïnvloedt Maillard reactie ontwikkeling, karamellisatiepotentiaal, eiwitfunctionaliteit, vetverdeling en vochtgevoeligheid, wat allemaal de uiteindelijke chocoladekenmerken beïnvloedt."
        }
      },
      {
        question: {
          en: "What role does crystallization kinetics play in chocolate quality?",
          es: "¿Qué papel juega la cinética de cristalización en la calidad del chocolate?",
          de: "Welche Rolle spielt die Kristallisationskinetik bei der Schokoladenqualität?",
          nl: "Welke rol speelt kristallisatiekinetiek in chocoladekwaliteit?"
        },
        options: [
          { en: "Controls crystal form distribution and final product properties", es: "Controla distribución de formas cristalinas y propiedades del producto final", de: "Kontrolliert Kristallformverteilung und Endprodukteigenschaften", nl: "Controleert kristalvorm verdeling en eindproduct eigenschappen" },
          { en: "Has no effect", es: "No tiene efecto", de: "Hat keine Wirkung", nl: "Heeft geen effect" },
          { en: "Only affects appearance", es: "Solo afecta apariencia", de: "Beeinflusst nur das Aussehen", nl: "Beïnvloedt alleen uiterlijk" },
          { en: "Only matters for storage", es: "Solo importa para almacenamiento", de: "Wichtig nur für Lagerung", nl: "Alleen belangrijk voor opslag" }
        ],
        correct: 0,
        explanation: {
          en: "Crystallization kinetics determine which crystal forms develop, their relative proportions, and how quickly they form, directly affecting chocolate's mechanical properties, appearance, and stability.",
          es: "La cinética de cristalización determina qué formas cristalinas se desarrollan, sus proporciones relativas y qué tan rápido se forman, afectando directamente propiedades mecánicas, apariencia y estabilidad del chocolate.",
          de: "Kristallisationskinetik bestimmt, welche Kristallformen sich entwickeln, ihre relativen Anteile und wie schnell sie sich bilden, was direkt die mechanischen Eigenschaften, das Aussehen und die Stabilität der Schokolade beeinflusst.",
          nl: "Kristallisatiekinetiek bepaalt welke kristalvormen zich ontwikkelen, hun relatieve verhoudingen en hoe snel ze vormen, wat direct de mechanische eigenschappen, uiterlijk en stabiliteit van chocolade beïnvloedt."
        }
      },
      {
        question: {
          en: "What is the significance of fat migration in multi-component chocolate products?",
          es: "¿Cuál es la importancia de la migración de grasa en productos de chocolate multi-componente?",
          de: "Was ist die Bedeutung der Fettmigration in mehrkomponentigen Schokoladenprodukten?",
          nl: "Wat is de betekenis van vetmigratie in multi-component chocoladeproducten?"
        },
        options: [
          { en: "Affects texture, appearance, and shelf stability of filled chocolates", es: "Afecta textura, apariencia y estabilidad de almacenamiento de chocolates rellenos", de: "Beeinflusst Textur, Aussehen und Lagerstabilität gefüllter Schokoladen", nl: "Beïnvloedt textuur, uiterlijk en opslagstabiliteit van gevulde chocolaatjes" },
          { en: "Improves flavor only", es: "Solo mejora sabor", de: "Verbessert nur den Geschmack", nl: "Verbetert alleen smaak" },
          { en: "Has no negative effects", es: "No tiene efectos negativos", de: "Hat keine negativen Auswirkungen", nl: "Heeft geen negatieve effecten" },
          { en: "Only affects packaging", es: "Solo afecta empaque", de: "Beeinflusst nur Verpackung", nl: "Beïnvloedt alleen verpakking" }
        ],
        correct: 0,
        explanation: {
          en: "Fat migration between chocolate shells and fillings can cause softening of shells, bloom formation, texture changes, and reduced shelf life, requiring compatible fat systems and proper formulation.",
          es: "La migración de grasa entre cáscaras de chocolate y rellenos puede causar ablandamiento de cáscaras, formación de bloom, cambios de textura y vida útil reducida, requiriendo sistemas de grasa compatibles y formulación apropiada.",
          de: "Fettmigration zwischen Schokoladenschalen und Füllungen kann Erweichung der Schalen, Blütenbildung, Texturveränderungen und reduzierte Haltbarkeit verursachen, was kompatible Fettsysteme und richtige Formulierung erfordert.",
          nl: "Vetmigratie tussen chocoladeschillen en vullingen kan verzachting van schillen, bloeivorming, textuurveranderingen en verminderde houdbaarheid veroorzaken, wat compatibele vetsystemen en juiste formulering vereist."
        }
      },
      {
        question: {
          en: "What role does chocolate play in creating the structure of a soufflé?",
          es: "¿Qué papel juega el chocolate en la creación de la estructura de un suflé?",
          de: "Welche Rolle spielt Schokolade bei der Strukturbildung eines Soufflés?",
          nl: "Welke rol speelt chocolade in het creëren van de structuur van een soufflé?"
        },
        options: [
          { en: "Provides weight and richness to balance egg foam", es: "Proporciona peso y riqueza para equilibrar la espuma de huevo", de: "Verleiht Gewicht und Reichhaltigkeit zum Ausgleich des Eischaums", nl: "Geeft gewicht en rijkheid om eischuim te balanceren" },
          { en: "Acts as the primary leavening agent", es: "Actúa como el agente leudante principal", de: "Wirkt als primäres Treibmittel", nl: "Werkt als het primaire rijsmiddel" },
          { en: "Prevents the soufflé from rising", es: "Evita que el suflé suba", de: "Verhindert das Aufgehen des Soufflés", nl: "Voorkomt dat de soufflé rijst" },
          { en: "Only adds flavor", es: "Solo añade sabor", de: "Fügt nur Geschmack hinzu", nl: "Voegt alleen smaak toe" }
        ],
        correct: 0,
        explanation: {
          en: "Chocolate provides weight and richness that balances the light egg foam structure, creating the characteristic texture of a chocolate soufflé.",
          es: "El chocolate proporciona peso y riqueza que equilibra la estructura ligera de espuma de huevo, creando la textura característica de un suflé de chocolate.",
          de: "Schokolade verleiht Gewicht und Reichhaltigkeit, die die leichte Eischaumstruktur ausgleicht und die charakteristische Textur eines Schokoladensoufflés erzeugt.",
          nl: "Chocolade geeft gewicht en rijkheid die de lichte eischuimstructuur balanceert, wat de karakteristieke textuur van een chocoladesoufflé creëert."
        }    },
    {
      question: {
        en: "What is ganache made from?",
        es: "What is ganache made from?",
        de: "What is ganache made from?",
        nl: "What is ganache made from?"
      },
      options: [
        { en: "Chocolate and cream", es: "Chocolate and cream", de: "Chocolate and cream", nl: "Chocolate and cream" },
        { en: "Chocolate and butter", es: "Chocolate and butter", de: "Chocolate and butter", nl: "Chocolate and butter" },
        { en: "Chocolate and milk", es: "Chocolate and milk", de: "Chocolate and milk", nl: "Chocolate and milk" },
        { en: "Chocolate and eggs", es: "Chocolate and eggs", de: "Chocolate and eggs", nl: "Chocolate and eggs" }
      ],
      correct: 0,
      explanation: {
        en: "Ganache is made from chocolate and heavy cream, used for glazes, fillings, and truffles.",
        es: "Ganache is made from chocolate and heavy cream, used for glazes, fillings, and truffles.",
        de: "Ganache is made from chocolate and heavy cream, used for glazes, fillings, and truffles.",
        nl: "Ganache is made from chocolate and heavy cream, used for glazes, fillings, and truffles."
      }
    },
    {
      question: {
        en: "What is tempering chocolate?",
        es: "What is tempering chocolate?",
        de: "What is tempering chocolate?",
        nl: "What is tempering chocolate?"
      },
      options: [
        { en: "Heating and cooling for shine and snap", es: "Heating and cooling for shine and snap", de: "Heating and cooling for shine and snap", nl: "Heating and cooling for shine and snap" },
        { en: "Mixing chocolate flavors", es: "Mixing chocolate flavors", de: "Mixing chocolate flavors", nl: "Mixing chocolate flavors" },
        { en: "Adding sugar", es: "Adding sugar", de: "Adding sugar", nl: "Adding sugar" },
        { en: "Melting chocolate", es: "Melting chocolate", de: "Melting chocolate", nl: "Melting chocolate" }
      ],
      correct: 0,
      explanation: {
        en: "Tempering chocolate involves carefully heating and cooling it to create stable crystals for a shiny appearance and crisp snap.",
        es: "Tempering chocolate involves carefully heating and cooling it to create stable crystals for a shiny appearance and crisp snap.",
        de: "Tempering chocolate involves carefully heating and cooling it to create stable crystals for a shiny appearance and crisp snap.",
        nl: "Tempering chocolate involves carefully heating and cooling it to create stable crystals for a shiny appearance and crisp snap."
      }
    },
    {
      question: {
        en: "What is a chocolate truffle?",
        es: "What is a chocolate truffle?",
        de: "What is a chocolate truffle?",
        nl: "What is a chocolate truffle?"
      },
      options: [
        { en: "Ganache ball coated in cocoa or chocolate", es: "Ganache ball coated in cocoa or chocolate", de: "Ganache ball coated in cocoa or chocolate", nl: "Ganache ball coated in cocoa or chocolate" },
        { en: "Chocolate mushroom", es: "Chocolate mushroom", de: "Chocolate mushroom", nl: "Chocolate mushroom" },
        { en: "Chocolate cake", es: "Chocolate cake", de: "Chocolate cake", nl: "Chocolate cake" },
        { en: "Chocolate cookie", es: "Chocolate cookie", de: "Chocolate cookie", nl: "Chocolate cookie" }
      ],
      correct: 0,
      explanation: {
        en: "A chocolate truffle is a ball of chocolate ganache, often coated in cocoa powder, nuts, or tempered chocolate.",
        es: "A chocolate truffle is a ball of chocolate ganache, often coated in cocoa powder, nuts, or tempered chocolate.",
        de: "A chocolate truffle is a ball of chocolate ganache, often coated in cocoa powder, nuts, or tempered chocolate.",
        nl: "A chocolate truffle is a ball of chocolate ganache, often coated in cocoa powder, nuts, or tempered chocolate."
      }
    },
    {
      question: {
        en: "What is the difference between cocoa powder and cacao powder?",
        es: "What is the difference between cocoa powder and cacao powder?",
        de: "What is the difference between cocoa powder and cacao powder?",
        nl: "What is the difference between cocoa powder and cacao powder?"
      },
      options: [
        { en: "Processing temperature", es: "Processing temperature", de: "Processing temperature", nl: "Processing temperature" },
        { en: "Sugar content", es: "Sugar content", de: "Sugar content", nl: "Sugar content" },
        { en: "Country of origin", es: "Country of origin", de: "Country of origin", nl: "Country of origin" },
        { en: "Color", es: "Color", de: "Color", nl: "Color" }
      ],
      correct: 0,
      explanation: {
        en: "Cacao powder is raw and processed at low temperatures, while cocoa powder is roasted at higher temperatures.",
        es: "Cacao powder is raw and processed at low temperatures, while cocoa powder is roasted at higher temperatures.",
        de: "Cacao powder is raw and processed at low temperatures, while cocoa powder is roasted at higher temperatures.",
        nl: "Cacao powder is raw and processed at low temperatures, while cocoa powder is roasted at higher temperatures."
      }
    },
    {
      question: {
        en: "What is Dutch-process cocoa?",
        es: "What is Dutch-process cocoa?",
        de: "What is Dutch-process cocoa?",
        nl: "What is Dutch-process cocoa?"
      },
      options: [
        { en: "Cocoa treated with alkali", es: "Cocoa treated with alkali", de: "Cocoa treated with alkali", nl: "Cocoa treated with alkali" },
        { en: "Cocoa from the Netherlands", es: "Cocoa from the Netherlands", de: "Cocoa from the Netherlands", nl: "Cocoa from the Netherlands" },
        { en: "Natural cocoa", es: "Natural cocoa", de: "Natural cocoa", nl: "Natural cocoa" },
        { en: "White cocoa", es: "White cocoa", de: "White cocoa", nl: "White cocoa" }
      ],
      correct: 0,
      explanation: {
        en: "Dutch-process cocoa is treated with an alkalizing agent to neutralize acidity, creating a darker, milder flavor.",
        es: "Dutch-process cocoa is treated with an alkalizing agent to neutralize acidity, creating a darker, milder flavor.",
        de: "Dutch-process cocoa is treated with an alkalizing agent to neutralize acidity, creating a darker, milder flavor.",
        nl: "Dutch-process cocoa is treated with an alkalizing agent to neutralize acidity, creating a darker, milder flavor."
      }
    },
    {
      question: {
        en: "What is chocolate bloom?",
        es: "What is chocolate bloom?",
        de: "What is chocolate bloom?",
        nl: "What is chocolate bloom?"
      },
      options: [
        { en: "Fat or sugar crystals on surface", es: "Fat or sugar crystals on surface", de: "Fat or sugar crystals on surface", nl: "Fat or sugar crystals on surface" },
        { en: "Chocolate flower decoration", es: "Chocolate flower decoration", de: "Chocolate flower decoration", nl: "Chocolate flower decoration" },
        { en: "Melting chocolate", es: "Melting chocolate", de: "Melting chocolate", nl: "Melting chocolate" },
        { en: "Chocolate mold", es: "Chocolate mold", de: "Chocolate mold", nl: "Chocolate mold" }
      ],
      correct: 0,
      explanation: {
        en: "Bloom appears as white or gray streaks on chocolate caused by fat or sugar crystals separating and rising to the surface.",
        es: "Bloom appears as white or gray streaks on chocolate caused by fat or sugar crystals separating and rising to the surface.",
        de: "Bloom appears as white or gray streaks on chocolate caused by fat or sugar crystals separating and rising to the surface.",
        nl: "Bloom appears as white or gray streaks on chocolate caused by fat or sugar crystals separating and rising to the surface."
      }
    },
    {
      question: {
        en: "What is couverture chocolate?",
        es: "What is couverture chocolate?",
        de: "What is couverture chocolate?",
        nl: "What is couverture chocolate?"
      },
      options: [
        { en: "High cocoa butter content chocolate for coating", es: "High cocoa butter content chocolate for coating", de: "High cocoa butter content chocolate for coating", nl: "High cocoa butter content chocolate for coating" },
        { en: "White chocolate", es: "White chocolate", de: "White chocolate", nl: "White chocolate" },
        { en: "Milk chocolate", es: "Milk chocolate", de: "Milk chocolate", nl: "Milk chocolate" },
        { en: "Dark chocolate", es: "Dark chocolate", de: "Dark chocolate", nl: "Dark chocolate" }
      ],
      correct: 0,
      explanation: {
        en: "Couverture chocolate contains a higher percentage of cocoa butter, making it ideal for coating and dipping due to its fluidity when melted.",
        es: "Couverture chocolate contains a higher percentage of cocoa butter, making it ideal for coating and dipping due to its fluidity when melted.",
        de: "Couverture chocolate contains a higher percentage of cocoa butter, making it ideal for coating and dipping due to its fluidity when melted.",
        nl: "Couverture chocolate contains a higher percentage of cocoa butter, making it ideal for coating and dipping due to its fluidity when melted."
      }
    },
    {
      question: {
        en: "What is a chocolate soufflé?",
        es: "What is a chocolate soufflé?",
        de: "What is a chocolate soufflé?",
        nl: "What is a chocolate soufflé?"
      },
      options: [
        { en: "Light, airy baked chocolate dessert", es: "Light, airy baked chocolate dessert", de: "Light, airy baked chocolate dessert", nl: "Light, airy baked chocolate dessert" },
        { en: "Chocolate mousse", es: "Chocolate mousse", de: "Chocolate mousse", nl: "Chocolate mousse" },
        { en: "Chocolate cake", es: "Chocolate cake", de: "Chocolate cake", nl: "Chocolate cake" },
        { en: "Chocolate pudding", es: "Chocolate pudding", de: "Chocolate pudding", nl: "Chocolate pudding" }
      ],
      correct: 0,
      explanation: {
        en: "A chocolate soufflé is a light, airy baked dessert made with egg yolks, chocolate, and whipped egg whites that rise during baking.",
        es: "A chocolate soufflé is a light, airy baked dessert made with egg yolks, chocolate, and whipped egg whites that rise during baking.",
        de: "A chocolate soufflé is a light, airy baked dessert made with egg yolks, chocolate, and whipped egg whites that rise during baking.",
        nl: "A chocolate soufflé is a light, airy baked dessert made with egg yolks, chocolate, and whipped egg whites that rise during baking."
      }
    },
    {
      question: {
        en: "What are cacao nibs?",
        es: "What are cacao nibs?",
        de: "What are cacao nibs?",
        nl: "What are cacao nibs?"
      },
      options: [
        { en: "Crushed cacao beans", es: "Crushed cacao beans", de: "Crushed cacao beans", nl: "Crushed cacao beans" },
        { en: "Chocolate chips", es: "Chocolate chips", de: "Chocolate chips", nl: "Chocolate chips" },
        { en: "Cocoa powder", es: "Cocoa powder", de: "Cocoa powder", nl: "Cocoa powder" },
        { en: "Chocolate shavings", es: "Chocolate shavings", de: "Chocolate shavings", nl: "Chocolate shavings" }
      ],
      correct: 0,
      explanation: {
        en: "Cacao nibs are pieces of crushed, roasted cacao beans before they're processed into chocolate.",
        es: "Cacao nibs are pieces of crushed, roasted cacao beans before they're processed into chocolate.",
        de: "Cacao nibs are pieces of crushed, roasted cacao beans before they're processed into chocolate.",
        nl: "Cacao nibs are pieces of crushed, roasted cacao beans before they're processed into chocolate."
      }
    },
    {
      question: {
        en: "What is gianduja?",
        es: "What is gianduja?",
        de: "What is gianduja?",
        nl: "What is gianduja?"
      },
      options: [
        { en: "Chocolate hazelnut mixture", es: "Chocolate hazelnut mixture", de: "Chocolate hazelnut mixture", nl: "Chocolate hazelnut mixture" },
        { en: "Italian chocolate cake", es: "Italian chocolate cake", de: "Italian chocolate cake", nl: "Italian chocolate cake" },
        { en: "Chocolate syrup", es: "Chocolate syrup", de: "Chocolate syrup", nl: "Chocolate syrup" },
        { en: "Chocolate cookie", es: "Chocolate cookie", de: "Chocolate cookie", nl: "Chocolate cookie" }
      ],
      correct: 0,
      explanation: {
        en: "Gianduja is a sweet chocolate mixture containing about 30% hazelnut paste, originating in Italy.",
        es: "Gianduja is a sweet chocolate mixture containing about 30% hazelnut paste, originating in Italy.",
        de: "Gianduja is a sweet chocolate mixture containing about 30% hazelnut paste, originating in Italy.",
        nl: "Gianduja is a sweet chocolate mixture containing about 30% hazelnut paste, originating in Italy."
      }
    },
    {
      question: {
        en: "What percentage of cacao makes chocolate 'dark'?",
        es: "What percentage of cacao makes chocolate 'dark'?",
        de: "What percentage of cacao makes chocolate 'dark'?",
        nl: "What percentage of cacao makes chocolate 'dark'?"
      },
      options: [
        { en: "Typically 70% or higher", es: "Typically 70% or higher", de: "Typically 70% or higher", nl: "Typically 70% or higher" },
        { en: "50% or higher", es: "50% or higher", de: "50% or higher", nl: "50% or higher" },
        { en: "90% or higher", es: "90% or higher", de: "90% or higher", nl: "90% or higher" },
        { en: "Any percentage", es: "Any percentage", de: "Any percentage", nl: "Any percentage" }
      ],
      correct: 0,
      explanation: {
        en: "Dark chocolate typically contains 70% or more cacao solids, though some classify 60% and above as dark.",
        es: "Dark chocolate typically contains 70% or more cacao solids, though some classify 60% and above as dark.",
        de: "Dark chocolate typically contains 70% or more cacao solids, though some classify 60% and above as dark.",
        nl: "Dark chocolate typically contains 70% or more cacao solids, though some classify 60% and above as dark."
      }
    },
    {
      question: {
        en: "What is chocolate mousse made with?",
        es: "What is chocolate mousse made with?",
        de: "What is chocolate mousse made with?",
        nl: "What is chocolate mousse made with?"
      },
      options: [
        { en: "Chocolate and whipped cream or egg whites", es: "Chocolate and whipped cream or egg whites", de: "Chocolate and whipped cream or egg whites", nl: "Chocolate and whipped cream or egg whites" },
        { en: "Chocolate and gelatin", es: "Chocolate and gelatin", de: "Chocolate and gelatin", nl: "Chocolate and gelatin" },
        { en: "Chocolate and flour", es: "Chocolate and flour", de: "Chocolate and flour", nl: "Chocolate and flour" },
        { en: "Chocolate and milk", es: "Chocolate and milk", de: "Chocolate and milk", nl: "Chocolate and milk" }
      ],
      correct: 0,
      explanation: {
        en: "Chocolate mousse is made by folding melted chocolate into whipped cream or beaten egg whites for a light, airy texture.",
        es: "Chocolate mousse is made by folding melted chocolate into whipped cream or beaten egg whites for a light, airy texture.",
        de: "Chocolate mousse is made by folding melted chocolate into whipped cream or beaten egg whites for a light, airy texture.",
        nl: "Chocolate mousse is made by folding melted chocolate into whipped cream or beaten egg whites for a light, airy texture."
      }
    },
    {
      question: {
        en: "What is the conching process in chocolate making?",
        es: "What is the conching process in chocolate making?",
        de: "What is the conching process in chocolate making?",
        nl: "What is the conching process in chocolate making?"
      },
      options: [
        { en: "Prolonged mixing to refine texture and flavor", es: "Prolonged mixing to refine texture and flavor", de: "Prolonged mixing to refine texture and flavor", nl: "Prolonged mixing to refine texture and flavor" },
        { en: "Shaping chocolate", es: "Shaping chocolate", de: "Shaping chocolate", nl: "Shaping chocolate" },
        { en: "Wrapping chocolate", es: "Wrapping chocolate", de: "Wrapping chocolate", nl: "Wrapping chocolate" },
        { en: "Storing chocolate", es: "Storing chocolate", de: "Storing chocolate", nl: "Storing chocolate" }
      ],
      correct: 0,
      explanation: {
        en: "Conching is the prolonged mixing and aerating of chocolate to develop flavor and create a smooth texture.",
        es: "Conching is the prolonged mixing and aerating of chocolate to develop flavor and create a smooth texture.",
        de: "Conching is the prolonged mixing and aerating of chocolate to develop flavor and create a smooth texture.",
        nl: "Conching is the prolonged mixing and aerating of chocolate to develop flavor and create a smooth texture."
      }
    },
    {
      question: {
        en: "What is white chocolate made from?",
        es: "What is white chocolate made from?",
        de: "What is white chocolate made from?",
        nl: "What is white chocolate made from?"
      },
      options: [
        { en: "Cocoa butter, sugar, and milk solids", es: "Cocoa butter, sugar, and milk solids", de: "Cocoa butter, sugar, and milk solids", nl: "Cocoa butter, sugar, and milk solids" },
        { en: "White cocoa powder", es: "White cocoa powder", de: "White cocoa powder", nl: "White cocoa powder" },
        { en: "Milk chocolate with vanilla", es: "Milk chocolate with vanilla", de: "Milk chocolate with vanilla", nl: "Milk chocolate with vanilla" },
        { en: "Bleached chocolate", es: "Bleached chocolate", de: "Bleached chocolate", nl: "Bleached chocolate" }
      ],
      correct: 0,
      explanation: {
        en: "White chocolate contains cocoa butter, sugar, and milk solids, but no cocoa solids (the brown part of chocolate).",
        es: "White chocolate contains cocoa butter, sugar, and milk solids, but no cocoa solids (the brown part of chocolate).",
        de: "White chocolate contains cocoa butter, sugar, and milk solids, but no cocoa solids (the brown part of chocolate).",
        nl: "White chocolate contains cocoa butter, sugar, and milk solids, but no cocoa solids (the brown part of chocolate)."
      }
    },
    {
      question: {
        en: "What is a chocolate lava cake?",
        es: "What is a chocolate lava cake?",
        de: "What is a chocolate lava cake?",
        nl: "What is a chocolate lava cake?"
      },
      options: [
        { en: "Cake with molten chocolate center", es: "Cake with molten chocolate center", de: "Cake with molten chocolate center", nl: "Cake with molten chocolate center" },
        { en: "Chocolate cake with icing", es: "Chocolate cake with icing", de: "Chocolate cake with icing", nl: "Chocolate cake with icing" },
        { en: "Frozen chocolate dessert", es: "Frozen chocolate dessert", de: "Frozen chocolate dessert", nl: "Frozen chocolate dessert" },
        { en: "Chocolate layer cake", es: "Chocolate layer cake", de: "Chocolate layer cake", nl: "Chocolate layer cake" }
      ],
      correct: 0,
      explanation: {
        en: "Chocolate lava cake has an intentionally undercooked center that flows out like lava when cut.",
        es: "Chocolate lava cake has an intentionally undercooked center that flows out like lava when cut.",
        de: "Chocolate lava cake has an intentionally undercooked center that flows out like lava when cut.",
        nl: "Chocolate lava cake has an intentionally undercooked center that flows out like lava when cut."
      }
    },
    {
      question: {
        en: "What is chocolate seizing?",
        es: "What is chocolate seizing?",
        de: "What is chocolate seizing?",
        nl: "What is chocolate seizing?"
      },
      options: [
        { en: "Chocolate becoming grainy and clumpy", es: "Chocolate becoming grainy and clumpy", de: "Chocolate becoming grainy and clumpy", nl: "Chocolate becoming grainy and clumpy" },
        { en: "Chocolate hardening", es: "Chocolate hardening", de: "Chocolate hardening", nl: "Chocolate hardening" },
        { en: "Chocolate melting", es: "Chocolate melting", de: "Chocolate melting", nl: "Chocolate melting" },
        { en: "Chocolate burning", es: "Chocolate burning", de: "Chocolate burning", nl: "Chocolate burning" }
      ],
      correct: 0,
      explanation: {
        en: "Seizing occurs when a small amount of water contacts melted chocolate, causing it to become grainy, clumpy, and unusable.",
        es: "Seizing occurs when a small amount of water contacts melted chocolate, causing it to become grainy, clumpy, and unusable.",
        de: "Seizing occurs when a small amount of water contacts melted chocolate, causing it to become grainy, clumpy, and unusable.",
        nl: "Seizing occurs when a small amount of water contacts melted chocolate, causing it to become grainy, clumpy, and unusable."
      }
    },
    {
      question: {
        en: "What is cocoa butter?",
        es: "What is cocoa butter?",
        de: "What is cocoa butter?",
        nl: "What is cocoa butter?"
      },
      options: [
        { en: "Fat extracted from cacao beans", es: "Fat extracted from cacao beans", de: "Fat extracted from cacao beans", nl: "Fat extracted from cacao beans" },
        { en: "Butter flavored with cocoa", es: "Butter flavored with cocoa", de: "Butter flavored with cocoa", nl: "Butter flavored with cocoa" },
        { en: "Chocolate spread", es: "Chocolate spread", de: "Chocolate spread", nl: "Chocolate spread" },
        { en: "Cocoa powder mixed with butter", es: "Cocoa powder mixed with butter", de: "Cocoa powder mixed with butter", nl: "Cocoa powder mixed with butter" }
      ],
      correct: 0,
      explanation: {
        en: "Cocoa butter is the natural fat extracted from cacao beans, giving chocolate its smooth, melt-in-mouth quality.",
        es: "Cocoa butter is the natural fat extracted from cacao beans, giving chocolate its smooth, melt-in-mouth quality.",
        de: "Cocoa butter is the natural fat extracted from cacao beans, giving chocolate its smooth, melt-in-mouth quality.",
        nl: "Cocoa butter is the natural fat extracted from cacao beans, giving chocolate its smooth, melt-in-mouth quality."
      }
    },
    {
      question: {
        en: "What is a flourless chocolate cake?",
        es: "What is a flourless chocolate cake?",
        de: "What is a flourless chocolate cake?",
        nl: "What is a flourless chocolate cake?"
      },
      options: [
        { en: "Dense cake made primarily with chocolate and eggs", es: "Dense cake made primarily with chocolate and eggs", de: "Dense cake made primarily with chocolate and eggs", nl: "Dense cake made primarily with chocolate and eggs" },
        { en: "Chocolate cake without gluten", es: "Chocolate cake without gluten", de: "Chocolate cake without gluten", nl: "Chocolate cake without gluten" },
        { en: "Chocolate mousse cake", es: "Chocolate mousse cake", de: "Chocolate mousse cake", nl: "Chocolate mousse cake" },
        { en: "Chocolate cheesecake", es: "Chocolate cheesecake", de: "Chocolate cheesecake", nl: "Chocolate cheesecake" }
      ],
      correct: 0,
      explanation: {
        en: "Flourless chocolate cake is dense and fudgy, made primarily from chocolate, butter, eggs, and sugar with no flour.",
        es: "Flourless chocolate cake is dense and fudgy, made primarily from chocolate, butter, eggs, and sugar with no flour.",
        de: "Flourless chocolate cake is dense and fudgy, made primarily from chocolate, butter, eggs, and sugar with no flour.",
        nl: "Flourless chocolate cake is dense and fudgy, made primarily from chocolate, butter, eggs, and sugar with no flour."
      }
    },
    {
      question: {
        en: "What is the Maillard reaction in chocolate?",
        es: "What is the Maillard reaction in chocolate?",
        de: "What is the Maillard reaction in chocolate?",
        nl: "What is the Maillard reaction in chocolate?"
      },
      options: [
        { en: "Browning reaction during roasting", es: "Browning reaction during roasting", de: "Browning reaction during roasting", nl: "Browning reaction during roasting" },
        { en: "Melting process", es: "Melting process", de: "Melting process", nl: "Melting process" },
        { en: "Crystallization", es: "Crystallization", de: "Crystallization", nl: "Crystallization" },
        { en: "Fermentation", es: "Fermentation", de: "Fermentation", nl: "Fermentation" }
      ],
      correct: 0,
      explanation: {
        en: "The Maillard reaction occurs when cacao beans are roasted, creating complex flavors through reactions between amino acids and sugars.",
        es: "The Maillard reaction occurs when cacao beans are roasted, creating complex flavors through reactions between amino acids and sugars.",
        de: "The Maillard reaction occurs when cacao beans are roasted, creating complex flavors through reactions between amino acids and sugars.",
        nl: "The Maillard reaction occurs when cacao beans are roasted, creating complex flavors through reactions between amino acids and sugars."
      }
    },
    {
      question: {
        en: "What is ruby chocolate?",
        es: "What is ruby chocolate?",
        de: "What is ruby chocolate?",
        nl: "What is ruby chocolate?"
      },
      options: [
        { en: "Naturally pink chocolate from ruby cacao beans", es: "Naturally pink chocolate from ruby cacao beans", de: "Naturally pink chocolate from ruby cacao beans", nl: "Naturally pink chocolate from ruby cacao beans" },
        { en: "Chocolate with raspberry", es: "Chocolate with raspberry", de: "Chocolate with raspberry", nl: "Chocolate with raspberry" },
        { en: "Chocolate with food coloring", es: "Chocolate with food coloring", de: "Chocolate with food coloring", nl: "Chocolate with food coloring" },
        { en: "White chocolate dyed pink", es: "White chocolate dyed pink", de: "White chocolate dyed pink", nl: "White chocolate dyed pink" }
      ],
      correct: 0,
      explanation: {
        en: "Ruby chocolate is made from ruby cacao beans and has a naturally pink color and berry-like flavor without added colors or flavors.",
        es: "Ruby chocolate is made from ruby cacao beans and has a naturally pink color and berry-like flavor without added colors or flavors.",
        de: "Ruby chocolate is made from ruby cacao beans and has a naturally pink color and berry-like flavor without added colors or flavors.",
        nl: "Ruby chocolate is made from ruby cacao beans and has a naturally pink color and berry-like flavor without added colors or flavors."
      }

      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else {
    window.chocolateDessertsLevel5 = level5;
  }
})();