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