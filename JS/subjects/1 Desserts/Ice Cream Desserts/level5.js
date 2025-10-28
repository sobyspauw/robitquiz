// Ice Cream Desserts Quiz - Level 5: Professional Mastery
(function() {
  const level5 = {
    name: {
      en: "Ice Cream Desserts - Professional Mastery",
      es: "Postres de Helado - Maestría Profesional",
      de: "Eisdesserts - Professionelle Meisterschaft",
      nl: "IJsdesserts - Professioneel Meesterschap"
    },
    questions: [
      {
        question: {
          en: "What is the optimal balance between Type I and Type II antifreeze proteins in commercial ice cream?",
          es: "¿Cuál es el equilibrio óptimo entre proteínas anticongelantes Tipo I y Tipo II en helado comercial?",
          de: "Was ist das optimale Gleichgewicht zwischen Typ I und Typ II Frostschutzproteinen in kommerziellem Eis?",
          nl: "Wat is de optimale balans tussen Type I en Type II antivries eiwitten in commercieel ijs?"
        },
        options: [
          { en: "No antifreeze proteins are used", es: "No se usan proteínas anticongelantes", de: "Keine Frostschutzproteine werden verwendet", nl: "Geen antivries eiwitten worden gebruikt" },
          { en: "Type I only for ice crystal inhibition", es: "Solo Tipo I para inhibición de cristales de hielo", de: "Nur Typ I für Eiskristallhemmung", nl: "Alleen Type I voor ijskristal inhibitie" },
          { en: "Type II provides better ice recrystallization inhibition", es: "Tipo II proporciona mejor inhibición de recristalización de hielo", de: "Typ II bietet bessere Eiskristall-Rekristallisationshemmung", nl: "Type II biedt betere ijs herkristallisatie inhibitie" },
          { en: "Both types are necessary for optimal texture", es: "Ambos tipos son necesarios para textura óptima", de: "Beide Typen sind für optimale Textur notwendig", nl: "Beide types zijn nodig voor optimale textuur" }
        ],
        correct: 2,
        explanation: {
          en: "Type II antifreeze proteins are more effective at ice recrystallization inhibition (IRI) than Type I, making them superior for maintaining smooth texture in stored ice cream.",
          es: "Las proteínas anticongelantes Tipo II son más efectivas en la inhibición de recristalización de hielo (IRI) que las Tipo I, haciéndolas superiores para mantener textura suave en helado almacenado.",
          de: "Typ II Frostschutzproteine sind effektiver bei der Eiskristall-Rekristallisationshemmung (IRI) als Typ I, was sie für die Aufrechterhaltung glatter Textur in gelagertem Eis überlegen macht.",
          nl: "Type II antivries eiwitten zijn effectiever bij ijs herkristallisatie inhibitie (IRI) dan Type I, waardoor ze superieur zijn voor het behouden van gladde textuur in opgeslagen ijs."
        }
      },
      {
        question: {
          en: "What is the ideal HLB (Hydrophilic-Lipophilic Balance) value for emulsifiers in premium ice cream?",
          es: "¿Cuál es el valor ideal de HLB (Balance Hidrófilo-Lipófilo) para emulsificantes en helado premium?",
          de: "Was ist der ideale HLB (Hydrophil-Lipophil-Balance) Wert für Emulgatoren in Premium-Eis?",
          nl: "Wat is de ideale HLB (Hydrofiel-Lipofiel Balans) waarde voor emulgatoren in premium ijs?"
        },
        options: [
          { en: "3-6", es: "3-6", de: "3-6", nl: "3-6" },
          { en: "8-10", es: "8-10", de: "8-10", nl: "8-10" },
          { en: "12-15", es: "12-15", de: "12-15", nl: "12-15" },
          { en: "16-18", es: "16-18", de: "16-18", nl: "16-18" }
        ],
        correct: 1,
        explanation: {
          en: "HLB values of 8-10 are optimal for oil-in-water emulsions like ice cream, providing the right balance for stabilizing fat globules while allowing controlled destabilization during churning.",
          es: "Los valores HLB de 8-10 son óptimos para emulsiones aceite-en-agua como el helado, proporcionando el equilibrio correcto para estabilizar glóbulos de grasa mientras permiten desestabilización controlada durante el batido.",
          de: "HLB-Werte von 8-10 sind optimal für Öl-in-Wasser-Emulsionen wie Eis, bieten das richtige Gleichgewicht zur Stabilisierung von Fettkügelchen bei gleichzeitiger kontrollierter Destabilisierung beim Rühren.",
          nl: "HLB waarden van 8-10 zijn optimaal voor olie-in-water emulsies zoals ijs, biedend de juiste balans voor het stabiliseren van vetbolletjes terwijl gecontroleerde destabilisatie tijdens karnen wordt toegestaan."
        }
      },
      {
        question: {
          en: "What is the mechanism of protein-fat interaction during the controlled fat destabilization in ice cream manufacturing?",
          es: "¿Cuál es el mecanismo de interacción proteína-grasa durante la desestabilización controlada de grasa en la manufactura de helado?",
          de: "Was ist der Mechanismus der Protein-Fett-Wechselwirkung während der kontrollierten Fettdestabilisierung in der Eisherstellung?",
          nl: "Wat is het mechanisme van eiwit-vet interactie tijdens de gecontroleerde vet destabilisatie in ijsproductie?"
        },
        options: [
          { en: "Random protein aggregation", es: "Agregación proteica aleatoria", de: "Zufällige Proteinaggregation", nl: "Willekeurige eiwit aggregatie" },
          { en: "Displacement of proteins from fat surface creates network", es: "Desplazamiento de proteínas de superficie grasa crea red", de: "Verdrängung von Proteinen von Fettoberfläche schafft Netzwerk", nl: "Verplaatsing van eiwitten van vetoppervlak creëert netwerk" },
          { en: "Complete protein denaturation", es: "Desnaturalización proteica completa", de: "Vollständige Proteindenaturierung", nl: "Complete eiwitdenaturatie" },
          { en: "Fat crystallization only", es: "Solo cristalización de grasa", de: "Nur Fettkristallisation", nl: "Alleen vetkristallisatie" }
        ],
        correct: 1,
        explanation: {
          en: "During churning, mechanical shear displaces adsorbed proteins from fat globule surfaces, allowing controlled coalescence and formation of a fat-protein network that stabilizes air cells and provides texture.",
          es: "Durante el batido, el cizallamiento mecánico desplaza proteínas adsorbidas de superficies de glóbulos de grasa, permitiendo coalescencia controlada y formación de una red grasa-proteína que estabiliza células de aire y proporciona textura.",
          de: "Beim Rühren verdrängt mechanische Scherung adsorbierte Proteine von Fettkügelchenoberflächen, ermöglicht kontrollierte Koaleszenz und Bildung eines Fett-Protein-Netzwerks, das Luftzellen stabilisiert und Textur bietet.",
          nl: "Tijdens karnen verdringt mechanische schuifkracht geadsorbeerde eiwitten van vetbolletje oppervlakken, waardoor gecontroleerde coalescentie en vorming van een vet-eiwit netwerk mogelijk wordt dat luchtcellen stabiliseert en textuur biedt."
        }
      },
      {
        question: {
          en: "What is the optimal particle size distribution for stabilizer hydrocolloids in ice cream?",
          es: "¿Cuál es la distribución óptima de tamaño de partícula para hidrocoloides estabilizadores en helado?",
          de: "Was ist die optimale Partikelgrößenverteilung für Stabilisator-Hydrokolloide in Eis?",
          nl: "Wat is de optimale deeltjesgrootteverdeling voor stabilisator hydrocolloïden in ijs?"
        },
        options: [
          { en: "All particles must be identical size", es: "Todas las partículas deben ser de tamaño idéntico", de: "Alle Partikel müssen identische Größe haben", nl: "Alle deeltjes moeten identieke grootte hebben" },
          { en: "Broad distribution from 50-500 mesh", es: "Distribución amplia de 50-500 malla", de: "Breite Verteilung von 50-500 Mesh", nl: "Brede distributie van 50-500 mesh" },
          { en: "Narrow distribution around 200-300 mesh for optimal hydration", es: "Distribución estrecha alrededor de 200-300 malla para hidratación óptima", de: "Enge Verteilung um 200-300 Mesh für optimale Hydratation", nl: "Smalle distributie rond 200-300 mesh voor optimale hydratie" },
          { en: "Only very fine particles below 400 mesh", es: "Solo partículas muy finas debajo de 400 malla", de: "Nur sehr feine Partikel unter 400 Mesh", nl: "Alleen zeer fijne deeltjes onder 400 mesh" }
        ],
        correct: 2,
        explanation: {
          en: "A narrow particle size distribution around 200-300 mesh provides optimal hydration kinetics and functionality for hydrocolloid stabilizers in ice cream systems.",
          es: "Una distribución de tamaño de partícula estrecha alrededor de 200-300 malla proporciona cinéticas de hidratación óptimas y funcionalidad para estabilizadores de hidrocoloides en sistemas de helado.",
          de: "Eine enge Partikelgrößenverteilung um 200-300 Mesh bietet optimale Hydratationskinetik und Funktionalität für Hydrokolloid-Stabilisatoren in Eissystemen.",
          nl: "Een smalle deeltjesgrootteverdeling rond 200-300 mesh biedt optimale hydratiekinetiek en functionaliteit voor hydrocolloïd stabilisatoren in ijssystemen."
        }
      },
      {
        question: {
          en: "What is the critical micelle concentration (CMC) significance in ice cream emulsifier systems?",
          es: "¿Cuál es la significancia de la concentración micelar crítica (CMC) en sistemas emulsificantes de helado?",
          de: "Was ist die Bedeutung der kritischen Mizellkonzentration (CMC) in Eisemulgatorsystemen?",
          nl: "Wat is de betekenis van de kritieke micel concentratie (CMC) in ijs emulgator systemen?"
        },
        options: [
          { en: "CMC is irrelevant in ice cream", es: "CMC es irrelevante en helado", de: "CMC ist irrelevant in Eis", nl: "CMC is irrelevant in ijs" },
          { en: "Operating above CMC ensures optimal emulsification efficiency", es: "Operar sobre CMC asegura eficiencia óptima de emulsificación", de: "Betrieb über CMC gewährleistet optimale Emulgierungseffizienz", nl: "Opereren boven CMC verzekert optimale emulgeringsefficiëntie" },
          { en: "Must operate below CMC always", es: "Debe operar debajo de CMC siempre", de: "Muss immer unter CMC betrieben werden", nl: "Moet altijd onder CMC opereren" },
          { en: "CMC only affects flavor", es: "CMC solo afecta sabor", de: "CMC beeinflusst nur Geschmack", nl: "CMC beïnvloedt alleen smaak" }
        ],
        correct: 1,
        explanation: {
          en: "Operating above the CMC ensures sufficient emulsifier molecules are available at interfaces while excess molecules form micelles, providing optimal emulsification and stability.",
          es: "Operar sobre la CMC asegura que suficientes moléculas emulsificantes estén disponibles en interfaces mientras moléculas excesivas forman micelas, proporcionando emulsificación y estabilidad óptimas.",
          de: "Betrieb über der CMC stellt sicher, dass ausreichend Emulgatormoleküle an Grenzflächen verfügbar sind, während überschüssige Moleküle Mizellen bilden, was optimale Emulgierung und Stabilität bietet.",
          nl: "Opereren boven de CMC verzekert dat voldoende emulgator moleculen beschikbaar zijn op interfaces terwijl overtollige moleculen micellen vormen, wat optimale emulgering en stabiliteit biedt."
        }
      },
      {
        question: {
          en: "What is the role of serum phase composition in ice cream texture control?",
          es: "¿Cuál es el papel de la composición de fase de suero en el control de textura del helado?",
          de: "Welche Rolle spielt die Serumphasenzusammensetzung bei der Eistexturkontrolle?",
          nl: "Wat is de rol van serum fase samenstelling in ijs textuurcontrole?"
        },
        options: [
          { en: "Serum phase is irrelevant to texture", es: "Fase de suero es irrelevante para textura", de: "Serumphase ist irrelevant für Textur", nl: "Serum fase is irrelevant voor textuur" },
          { en: "Controls ice crystal size through osmotic and colligative effects", es: "Controla tamaño de cristales de hielo a través de efectos osmóticos y coligativos", de: "Kontrolliert Eiskristallgröße durch osmotische und kolligative Effekte", nl: "Controleert ijskristal grootte door osmotische en colligatieve effecten" },
          { en: "Only affects color development", es: "Solo afecta desarrollo de color", de: "Beeinflusst nur Farbentwicklung", nl: "Beïnvloedt alleen kleurontwikkeling" },
          { en: "Determines fat content only", es: "Determina solo contenido de grasa", de: "Bestimmt nur Fettgehalt", nl: "Bepaalt alleen vetgehalte" }
        ],
        correct: 1,
        explanation: {
          en: "The serum phase composition (sugars, salts, proteins) controls freezing point depression, water activity, and viscosity, directly affecting ice crystal formation and growth during processing and storage.",
          es: "La composición de fase de suero (azúcares, sales, proteínas) controla depresión del punto de congelación, actividad de agua, y viscosidad, afectando directamente formación y crecimiento de cristales de hielo durante procesamiento y almacenamiento.",
          de: "Die Serumphasenzusammensetzung (Zucker, Salze, Proteine) kontrolliert Gefrierpunktserniedrigung, Wasseraktivität und Viskosität, beeinflusst direkt Eiskristallbildung und -wachstum während Verarbeitung und Lagerung.",
          nl: "De serum fase samenstelling (suikers, zouten, eiwitten) controleert vriespuntverlaging, wateractiviteit, en viscositeit, direct beïnvloedend ijskristal vorming en groei tijdens verwerking en opslag."
        }
      },
      {
        question: {
          en: "What is the optimal draw consistency (Brookfield viscosity) for ice cream from continuous freezers?",
          es: "¿Cuál es la consistencia óptima de extracción (viscosidad Brookfield) para helado de congeladores continuos?",
          de: "Was ist die optimale Entnahmekonsistenz (Brookfield-Viskosität) für Eis aus kontinuierlichen Gefriergeräten?",
          nl: "Wat is de optimale aftap consistentie (Brookfield viscositeit) voor ijs uit continue vriezers?"
        },
        options: [
          { en: "1,000-5,000 cP", es: "1,000-5,000 cP", de: "1,000-5,000 cP", nl: "1,000-5,000 cP" },
          { en: "50,000-100,000 cP", es: "50,000-100,000 cP", de: "50,000-100,000 cP", nl: "50,000-100,000 cP" },
          { en: "200,000-400,000 cP", es: "200,000-400,000 cP", de: "200,000-400,000 cP", nl: "200,000-400,000 cP" },
          { en: "Over 1,000,000 cP", es: "Sobre 1,000,000 cP", de: "Über 1,000,000 cP", nl: "Boven 1,000,000 cP" }
        ],
        correct: 2,
        explanation: {
          en: "Optimal draw consistency is 200,000-400,000 cP at draw temperature (-6°C to -8°C), providing the right balance for packaging while maintaining structure and preventing defects.",
          es: "La consistencia óptima de extracción es 200,000-400,000 cP a temperatura de extracción (-6°C a -8°C), proporcionando el equilibrio correcto para empaque mientras mantiene estructura y previene defectos.",
          de: "Optimale Entnahmekonsistenz ist 200,000-400,000 cP bei Entnahmetemperatur (-6°C bis -8°C), bietet das richtige Gleichgewicht für Verpackung bei Aufrechterhaltung der Struktur und Vermeidung von Defekten.",
          nl: "Optimale aftap consistentie is 200,000-400,000 cP bij aftap temperatuur (-6°C tot -8°C), biedend de juiste balans voor verpakking terwijl structuur wordt behouden en defecten worden voorkomen."
        }
      },
      {
        question: {
          en: "What is the principle behind acoustic monitoring in continuous ice cream freezers?",
          es: "¿Cuál es el principio detrás del monitoreo acústico en congeladores continuos de helado?",
          de: "Was ist das Prinzip hinter akustischer Überwachung in kontinuierlichen Eisgefriergeräten?",
          nl: "Wat is het principe achter akoestische monitoring in continue ijs vriezers?"
        },
        options: [
          { en: "Monitors only temperature changes", es: "Monitorea solo cambios de temperatura", de: "Überwacht nur Temperaturänderungen", nl: "Monitort alleen temperatuurveranderingen" },
          { en: "Sound frequency changes correlate with ice crystal formation and overrun", es: "Cambios de frecuencia de sonido correlacionan con formación de cristales de hielo y overrun", de: "Schallfrequenzänderungen korrelieren mit Eiskristallbildung und Übergang", nl: "Geluidsfrequentie veranderingen correleren met ijskristal vorming en overrun" },
          { en: "Only detects equipment malfunctions", es: "Solo detecta fallas de equipo", de: "Erkennt nur Gerätefehlfunktionen", nl: "Detecteert alleen apparatuur storingen" },
          { en: "Measures fat content only", es: "Mide solo contenido de grasa", de: "Misst nur Fettgehalt", nl: "Meet alleen vetgehalte" }
        ],
        correct: 1,
        explanation: {
          en: "Acoustic monitoring detects changes in sound frequency and amplitude that correlate with ice crystallization, air incorporation, and phase changes, providing real-time process control feedback.",
          es: "El monitoreo acústico detecta cambios en frecuencia de sonido y amplitud que correlacionan con cristalización de hielo, incorporación de aire, y cambios de fase, proporcionando retroalimentación de control de proceso en tiempo real.",
          de: "Akustische Überwachung erkennt Änderungen in Schallfrequenz und Amplitude, die mit Eiskristallisation, Lufteinarbeitung und Phasenänderungen korrelieren, bietet Echtzeit-Prozesskontroll-Feedback.",
          nl: "Akoestische monitoring detecteert veranderingen in geluidsfrequentie en amplitude die correleren met ijskristallisatie, luchtinwerking, en fase veranderingen, biedend real-time proces controle feedback."
        }
      },
      {
        question: {
          en: "What is the optimal crystallization index for commercial ice cream quality control?",
          es: "¿Cuál es el índice de cristalización óptimo para control de calidad de helado comercial?",
          de: "Was ist der optimale Kristallisationsindex für kommerzielle Eisqualitätskontrolle?",
          nl: "Wat is de optimale kristallisatie index voor commerciële ijs kwaliteitscontrole?"
        },
        options: [
          { en: "0.1-0.3", es: "0.1-0.3", de: "0.1-0.3", nl: "0.1-0.3" },
          { en: "0.4-0.6", es: "0.4-0.6", de: "0.4-0.6", nl: "0.4-0.6" },
          { en: "0.7-0.9", es: "0.7-0.9", de: "0.7-0.9", nl: "0.7-0.9" },
          { en: "1.0 or higher", es: "1.0 o mayor", de: "1.0 oder höher", nl: "1.0 of hoger" }
        ],
        correct: 1,
        explanation: {
          en: "A crystallization index of 0.4-0.6 indicates optimal balance between frozen and unfrozen phases at serving temperature, ensuring proper scoopability and mouthfeel.",
          es: "Un índice de cristalización de 0.4-0.6 indica equilibrio óptimo entre fases congelada y no congelada a temperatura de servicio, asegurando capacidad de servir y sensación en boca apropiadas.",
          de: "Ein Kristallisationsindex von 0.4-0.6 zeigt optimales Gleichgewicht zwischen gefrorenen und ungefrorenen Phasen bei Serviertemperatur an, gewährleistet ordnungsgemäße Portionierbarkeit und Mundgefühl.",
          nl: "Een kristallisatie index van 0.4-0.6 geeft optimale balans aan tussen bevroren en niet-bevroren fasen bij serveertemperatuur, verzekerd juiste schepbaarheid en mondgevoel."
        }
      },
      {
        question: {
          en: "What is the mechanism of syneresis prevention in ice cream systems?",
          es: "¿Cuál es el mecanismo de prevención de sinéresis en sistemas de helado?",
          de: "Was ist der Mechanismus der Synereseverhütung in Eissystemen?",
          nl: "Wat is het mechanisme van synerese preventie in ijs systemen?"
        },
        options: [
          { en: "Only temperature control", es: "Solo control de temperatura", de: "Nur Temperaturkontrolle", nl: "Alleen temperatuur controle" },
          { en: "Hydrocolloid network entraps water and prevents weeping", es: "Red de hidrocoloide atrapa agua y previene exudación", de: "Hydrokolloid-Netzwerk fängt Wasser ein und verhindert Ausschwitzen", nl: "Hydrocolloïd netwerk vangt water en voorkomt uittreden" },
          { en: "Fat crystallization only", es: "Solo cristalización de grasa", de: "Nur Fettkristallisation", nl: "Alleen vetkristallisatie" },
          { en: "pH adjustment only", es: "Solo ajuste de pH", de: "Nur pH-Einstellung", nl: "Alleen pH aanpassing" }
        ],
        correct: 1,
        explanation: {
          en: "Hydrocolloid stabilizers form three-dimensional networks that physically entrap water molecules, preventing their migration and subsequent ice crystal growth (syneresis).",
          es: "Los estabilizadores hidrocoloides forman redes tridimensionales que atrapan físicamente moléculas de agua, previniendo su migración y subsecuente crecimiento de cristales de hielo (sinéresis).",
          de: "Hydrokolloid-Stabilisatoren bilden dreidimensionale Netzwerke, die Wassermoleküle physisch einfangen, deren Migration und nachfolgendes Eiskristallwachstum (Synerese) verhindern.",
          nl: "Hydrocolloïd stabilisatoren vormen driedimensionale netwerken die water moleculen fysiek vangen, hun migratie en daaropvolgende ijskristal groei (synerese) voorkomen."
        }
      },
      {
        question: {
          en: "What is the significance of the Deborah number in ice cream rheology?",
          es: "¿Cuál es la significancia del número Deborah en reología de helado?",
          de: "Was ist die Bedeutung der Deborah-Zahl in der Eisrheologie?",
          nl: "Wat is de betekenis van het Deborah getal in ijs reologie?"
        },
        options: [
          { en: "Not relevant to ice cream", es: "No relevante para helado", de: "Nicht relevant für Eis", nl: "Niet relevant voor ijs" },
          { en: "Characterizes viscoelastic behavior under different time scales", es: "Caracteriza comportamiento viscoelástico bajo diferentes escalas de tiempo", de: "Charakterisiert viskoelastisches Verhalten unter verschiedenen Zeitskalen", nl: "Karakteriseert viscoelastisch gedrag onder verschillende tijdschalen" },
          { en: "Only measures temperature", es: "Solo mide temperatura", de: "Misst nur Temperatur", nl: "Meet alleen temperatuur" },
          { en: "Determines fat content", es: "Determina contenido de grasa", de: "Bestimmt Fettgehalt", nl: "Bepaalt vetgehalte" }
        ],
        correct: 1,
        explanation: {
          en: "The Deborah number (De = relaxation time/observation time) characterizes whether ice cream behaves more like a solid or liquid under different conditions, crucial for texture analysis.",
          es: "El número Deborah (De = tiempo de relajación/tiempo de observación) caracteriza si el helado se comporta más como sólido o líquido bajo diferentes condiciones, crucial para análisis de textura.",
          de: "Die Deborah-Zahl (De = Relaxationszeit/Beobachtungszeit) charakterisiert, ob sich Eis mehr wie ein Feststoff oder eine Flüssigkeit unter verschiedenen Bedingungen verhält, entscheidend für Texturanalyse.",
          nl: "Het Deborah getal (De = relaxatietijd/observatietijd) karakteriseert of ijs zich meer gedraagt als een vaste stof of vloeistof onder verschillende omstandigheden, cruciaal voor textuur analyse."
        }
      },
      {
        question: {
          en: "What is the optimal ratio of gum stabilizers (xanthan:guar:carrageenan) for premium ice cream?",
          es: "¿Cuál es la proporción óptima de estabilizadores de goma (xantana:guar:carragenina) para helado premium?",
          de: "Was ist das optimale Verhältnis von Gummi-Stabilisatoren (Xanthan:Guar:Carrageenan) für Premium-Eis?",
          nl: "Wat is de optimale verhouding van gom stabilisatoren (xanthaan:guar:carrageenan) voor premium ijs?"
        },
        options: [
          { en: "1:1:1 equal ratio", es: "1:1:1 proporción igual", de: "1:1:1 gleiches Verhältnis", nl: "1:1:1 gelijke verhouding" },
          { en: "3:2:1 (xanthan:guar:carrageenan)", es: "3:2:1 (xantana:guar:carragenina)", de: "3:2:1 (Xanthan:Guar:Carrageenan)", nl: "3:2:1 (xanthaan:guar:carrageenan)" },
          { en: "1:3:1 (xanthan:guar:carrageenan)", es: "1:3:1 (xantana:guar:carragenina)", de: "1:3:1 (Xanthan:Guar:Carrageenan)", nl: "1:3:1 (xanthaan:guar:carrageenan)" },
          { en: "Only one type should be used", es: "Solo un tipo debe usarse", de: "Nur ein Typ sollte verwendet werden", nl: "Slechts één type moet gebruikt worden" }
        ],
        correct: 2,
        explanation: {
          en: "The 1:3:1 ratio leverages guar gum's superior ice recrystallization inhibition while xanthan provides heat stability and carrageenan contributes to dairy protein interaction.",
          es: "La proporción 1:3:1 aprovecha la inhibición superior de recristalización de hielo de goma guar mientras xantana proporciona estabilidad térmica y carragenina contribuye a interacción con proteína láctea.",
          de: "Das 1:3:1-Verhältnis nutzt Guarkernmehls überlegene Eiskristall-Rekristallisationshemmung, während Xanthan Hitzestabilität bietet und Carrageenan zur Milchprotein-Wechselwirkung beiträgt.",
          nl: "De 1:3:1 verhouding benut guar gom's superieure ijs herkristallisatie inhibitie terwijl xanthaan hitte stabiliteit biedt en carrageenan bijdraagt aan melkeiwit interactie."
        }
      },
      {
        question: {
          en: "What is the critical shear rate for optimal fat destabilization during ice cream churning?",
          es: "¿Cuál es la velocidad de cizallamiento crítica para desestabilización óptima de grasa durante batido de helado?",
          de: "Was ist die kritische Schergeschwindigkeit für optimale Fettdestabilisierung beim Eisrühren?",
          nl: "Wat is de kritieke schuifsnelheid voor optimale vet destabilisatie tijdens ijs karnen?"
        },
        options: [
          { en: "10-50 s⁻¹", es: "10-50 s⁻¹", de: "10-50 s⁻¹", nl: "10-50 s⁻¹" },
          { en: "100-300 s⁻¹", es: "100-300 s⁻¹", de: "100-300 s⁻¹", nl: "100-300 s⁻¹" },
          { en: "500-1000 s⁻¹", es: "500-1000 s⁻¹", de: "500-1000 s⁻¹", nl: "500-1000 s⁻¹" },
          { en: "Over 2000 s⁻¹", es: "Sobre 2000 s⁻¹", de: "Über 2000 s⁻¹", nl: "Boven 2000 s⁻¹" }
        ],
        correct: 2,
        explanation: {
          en: "Shear rates of 500-1000 s⁻¹ provide optimal fat destabilization - sufficient to break protein-stabilized interfaces without causing excessive coalescence or butter formation.",
          es: "Velocidades de cizallamiento de 500-1000 s⁻¹ proporcionan desestabilización óptima de grasa - suficiente para romper interfaces estabilizadas por proteína sin causar coalescencia excesiva o formación de mantequilla.",
          de: "Schergeschwindigkeiten von 500-1000 s⁻¹ bieten optimale Fettdestabilisierung - ausreichend um proteinstabilisierte Grenzflächen zu brechen ohne übermäßige Koaleszenz oder Butterbildung zu verursachen.",
          nl: "Schuifsnelheden van 500-1000 s⁻¹ bieden optimale vet destabilisatie - voldoende om eiwit-gestabiliseerde interfaces te breken zonder overdreven coalescentie of botervorming te veroorzaken."
        }
      },
      {
        question: {
          en: "What is the mechanism of ice cream foam drainage and its prevention?",
          es: "¿Cuál es el mecanismo de drenaje de espuma de helado y su prevención?",
          de: "Was ist der Mechanismus der Eisschaumdrainage und deren Verhütung?",
          nl: "Wat is het mechanisme van ijs schuim drainage en de preventie ervan?"
        },
        options: [
          { en: "Gravity drainage cannot be prevented", es: "Drenaje por gravedad no puede prevenirse", de: "Gravitationsdrainage kann nicht verhindert werden", nl: "Zwaartekracht drainage kan niet voorkomen worden" },
          { en: "Protein films and fat networks resist drainage through increased viscosity", es: "Películas de proteína y redes de grasa resisten drenaje a través de viscosidad aumentada", de: "Proteinfilme und Fettnetzwerke widerstehen Drainage durch erhöhte Viskosität", nl: "Eiwit films en vet netwerken weerstaan drainage door verhoogde viscositeit" },
          { en: "Only temperature control prevents drainage", es: "Solo control de temperatura previene drenaje", de: "Nur Temperaturkontrolle verhindert Drainage", nl: "Alleen temperatuur controle voorkomt drainage" },
          { en: "Drainage is beneficial for texture", es: "Drenaje es beneficioso para textura", de: "Drainage ist vorteilhaft für Textur", nl: "Drainage is gunstig voor textuur" }
        ],
        correct: 1,
        explanation: {
          en: "Protein films at air-water interfaces and partially coalesced fat networks increase the viscosity of the continuous phase, resisting gravitational drainage and maintaining foam structure.",
          es: "Películas de proteína en interfaces aire-agua y redes de grasa parcialmente coalescidas aumentan la viscosidad de la fase continua, resistiendo drenaje gravitacional y manteniendo estructura de espuma.",
          de: "Proteinfilme an Luft-Wasser-Grenzflächen und teilweise koaleszierte Fettnetzwerke erhöhen die Viskosität der kontinuierlichen Phase, widerstehen gravitationaler Drainage und erhalten Schaumstruktur.",
          nl: "Eiwit films op lucht-water interfaces en gedeeltelijk gecoalesceerde vet netwerken verhogen de viscositeit van de continue fase, weerstaan zwaartekracht drainage en behouden schuim structuur."
        }
      },
      {
        question: {
          en: "What is the role of water mobility in ice cream texture deterioration during storage?",
          es: "¿Cuál es el papel de la movilidad del agua en el deterioro de textura del helado durante almacenamiento?",
          de: "Welche Rolle spielt Wassermobilität bei der Eistexturverschlechterung während der Lagerung?",
          nl: "Wat is de rol van water mobiliteit in ijs textuur verslechtering tijdens opslag?"
        },
        options: [
          { en: "Water mobility has no effect on texture", es: "Movilidad del agua no tiene efecto en textura", de: "Wassermobilität hat keine Wirkung auf Textur", nl: "Water mobiliteit heeft geen effect op textuur" },
          { en: "Higher water mobility accelerates ice recrystallization", es: "Mayor movilidad del agua acelera recristalización de hielo", de: "Höhere Wassermobilität beschleunigt Eiskristall-Rekristallisation", nl: "Hogere water mobiliteit versnelt ijs herkristallisatie" },
          { en: "Lower water mobility always improves texture", es: "Menor movilidad del agua siempre mejora textura", de: "Niedrigere Wassermobilität verbessert immer Textur", nl: "Lagere water mobiliteit verbetert altijd textuur" },
          { en: "Only affects flavor release", es: "Solo afecta liberación de sabor", de: "Beeinflusst nur Geschmacksfreisetzung", nl: "Beïnvloedt alleen smaakafgifte" }
        ],
        correct: 1,
        explanation: {
          en: "Higher water mobility in the unfrozen serum phase facilitates molecular transport for ice recrystallization. Controlling water mobility through stabilizers and proper formulation slows texture deterioration.",
          es: "Mayor movilidad del agua en la fase de suero no congelado facilita transporte molecular para recristalización de hielo. Controlar movilidad del agua a través de estabilizadores y formulación apropiada ralentiza deterioro de textura.",
          de: "Höhere Wassermobilität in der ungefrorenen Serumphase erleichtert molekularen Transport für Eiskristall-Rekristallisation. Kontrolle der Wassermobilität durch Stabilisatoren und ordnungsgemäße Formulierung verlangsamt Texturverschlechterung.",
          nl: "Hogere water mobiliteit in de niet-bevroren serum fase faciliteert moleculair transport voor ijs herkristallisatie. Controleren van water mobiliteit door stabilisatoren en juiste formulering vertraagt textuur verslechtering."
        }
      },
      {
        question: {
          en: "What is the optimal protein:fat ratio for maximum foam stability in premium ice cream?",
          es: "¿Cuál es la proporción óptima proteína:grasa para máxima estabilidad de espuma en helado premium?",
          de: "Was ist das optimale Protein:Fett-Verhältnis für maximale Schaumstabilität in Premium-Eis?",
          nl: "Wat is de optimale eiwit:vet verhouding voor maximale schuim stabiliteit in premium ijs?"
        },
        options: [
          { en: "1:1", es: "1:1", de: "1:1", nl: "1:1" },
          { en: "1:3", es: "1:3", de: "1:3", nl: "1:3" },
          { en: "1:5", es: "1:5", de: "1:5", nl: "1:5" },
          { en: "1:8", es: "1:8", de: "1:8", nl: "1:8" }
        ],
        correct: 2,
        explanation: {
          en: "A protein:fat ratio of 1:5 provides optimal balance where proteins stabilize air-water interfaces while sufficient fat destabilization creates supporting networks without overwhelming the system.",
          es: "Una proporción proteína:grasa de 1:5 proporciona equilibrio óptimo donde proteínas estabilizan interfaces aire-agua mientras suficiente desestabilización de grasa crea redes de soporte sin abrumar el sistema.",
          de: "Ein Protein:Fett-Verhältnis von 1:5 bietet optimales Gleichgewicht, wo Proteine Luft-Wasser-Grenzflächen stabilisieren, während ausreichende Fettdestabilisierung unterstützende Netzwerke schafft, ohne das System zu überlasten.",
          nl: "Een eiwit:vet verhouding van 1:5 biedt optimale balans waar eiwitten lucht-water interfaces stabiliseren terwijl voldoende vet destabilisatie ondersteunende netwerken creëert zonder het systeem te overbelasten."
        }
      },
      {
        question: {
          en: "What is the significance of interfacial rheology in ice cream air cell stability?",
          es: "¿Cuál es la significancia de reología interfacial en estabilidad de células de aire del helado?",
          de: "Was ist die Bedeutung der Grenzflächenrheologie in der Eisluftzellensstabilität?",
          nl: "Wat is de betekenis van interfaciale reologie in ijs luchtcel stabiliteit?"
        },
        options: [
          { en: "Not relevant to ice cream", es: "No relevante para helado", de: "Nicht relevant für Eis", nl: "Niet relevant voor ijs" },
          { en: "Interfacial elasticity and viscosity determine bubble resistance to coalescence", es: "Elasticidad interfacial y viscosidad determinan resistencia de burbuja a coalescencia", de: "Grenzflächenelastizität und -viskosität bestimmen Blasenwiderstand gegen Koaleszenz", nl: "Interface elasticiteit en viscositeit bepalen bel weerstand tegen coalescentie" },
          { en: "Only affects color", es: "Solo afecta color", de: "Beeinflusst nur Farbe", nl: "Beïnvloedt alleen kleur" },
          { en: "Controls temperature only", es: "Solo controla temperatura", de: "Kontrolliert nur Temperatur", nl: "Controleert alleen temperatuur" }
        ],
        correct: 1,
        explanation: {
          en: "Interfacial rheological properties (surface elasticity and viscosity) determine how air-water interfaces respond to deformation, directly affecting bubble stability and coalescence resistance.",
          es: "Propiedades reológicas interfaciales (elasticidad superficial y viscosidad) determinan cómo interfaces aire-agua responden a deformación, afectando directamente estabilidad de burbujas y resistencia a coalescencia.",
          de: "Grenzflächenrheologische Eigenschaften (Oberflächenelastizität und -viskosität) bestimmen, wie Luft-Wasser-Grenzflächen auf Deformation reagieren, beeinflussen direkt Blasenstabilität und Koaleszenzwiderstand.",
          nl: "Interfaciale reologische eigenschappen (oppervlakte elasticiteit en viscositeit) bepalen hoe lucht-water interfaces reageren op vervorming, direct beïnvloedend bel stabiliteit en coalescentie weerstand."
        }
      },
      {
        question: {
          en: "What is the optimal molecular weight distribution for ice cream stabilizer blends?",
          es: "¿Cuál es la distribución óptima de peso molecular para mezclas de estabilizadores de helado?",
          de: "Was ist die optimale Molekulargewichtsverteilung für Eisstabilisator-Mischungen?",
          nl: "Wat is de optimale molecuulgewichtsverdeling voor ijs stabilisator mengsels?"
        },
        options: [
          { en: "Only high molecular weight compounds", es: "Solo compuestos de alto peso molecular", de: "Nur hochmolekulare Verbindungen", nl: "Alleen hoge molecuulgewicht verbindingen" },
          { en: "Bimodal distribution with both high and medium MW components", es: "Distribución bimodal con componentes de MW alto y medio", de: "Bimodale Verteilung mit hohen und mittleren MW-Komponenten", nl: "Bimodale distributie met zowel hoge als medium MW componenten" },
          { en: "Only low molecular weight compounds", es: "Solo compuestos de bajo peso molecular", de: "Nur niedermolekulare Verbindungen", nl: "Alleen lage molecuulgewicht verbindingen" },
          { en: "Molecular weight is irrelevant", es: "El peso molecular es irrelevante", de: "Molekulargewicht ist irrelevant", nl: "Molecuulgewicht is irrelevant" }
        ],
        correct: 1,
        explanation: {
          en: "A bimodal molecular weight distribution combines high MW polymers for water binding and network formation with medium MW components for optimal hydration kinetics and functionality.",
          es: "Una distribución bimodal de peso molecular combina polímeros de alto MW para unión de agua y formación de red con componentes de MW medio para cinéticas de hidratación óptimas y funcionalidad.",
          de: "Eine bimodale Molekulargewichtsverteilung kombiniert hochmolekulare Polymere für Wasserbindung und Netzwerkbildung mit mittelmolekularen Komponenten für optimale Hydratationskinetik und Funktionalität.",
          nl: "Een bimodale molecuulgewichtsverdeling combineert hoge MW polymeren voor waterbinding en netwerkvorming met medium MW componenten voor optimale hydratiekinetiek en functionaliteit."
        }
      },
      {
        question: {
          en: "What is the critical aggregate concentration for casein micelles in ice cream systems?",
          es: "¿Cuál es la concentración crítica de agregados para micelas de caseína en sistemas de helado?",
          de: "Was ist die kritische Aggregatkonzentration für Caseinmizellen in Eissystemen?",
          nl: "Wat is de kritieke aggregaat concentratie voor caseïne micellen in ijs systemen?"
        },
        options: [
          { en: "0.5-1.0% w/w", es: "0.5-1.0% p/p", de: "0.5-1.0% w/w", nl: "0.5-1.0% w/w" },
          { en: "2.0-3.5% w/w", es: "2.0-3.5% p/p", de: "2.0-3.5% w/w", nl: "2.0-3.5% w/w" },
          { en: "5.0-7.0% w/w", es: "5.0-7.0% p/p", de: "5.0-7.0% w/w", nl: "5.0-7.0% w/w" },
          { en: "Over 10% w/w", es: "Sobre 10% p/p", de: "Über 10% w/w", nl: "Boven 10% w/w" }
        ],
        correct: 1,
        explanation: {
          en: "The critical aggregate concentration for casein micelles is around 2.0-3.5% w/w, above which they form stable colloidal networks that significantly impact ice cream texture and stability.",
          es: "La concentración crítica de agregados para micelas de caseína es alrededor de 2.0-3.5% p/p, sobre la cual forman redes coloidales estables que impactan significativamente textura y estabilidad del helado.",
          de: "Die kritische Aggregatkonzentration für Caseinmizellen liegt bei etwa 2.0-3.5% w/w, oberhalb derer sie stabile kolloidale Netzwerke bilden, die Eistextur und -stabilität erheblich beeinflussen.",
          nl: "De kritieke aggregaat concentratie voor caseïne micellen is rond 2.0-3.5% w/w, waarboven ze stabiele colloïdale netwerken vormen die ijstextuur en stabiliteit significant beïnvloeden."
        }
      },
      {
        question: {
          en: "What is the optimal zeta potential range for ice cream emulsion stability?",
          es: "¿Cuál es el rango óptimo de potencial zeta para estabilidad de emulsión de helado?",
          de: "Was ist der optimale Zeta-Potentialbereich für Eisemulsionsstabilität?",
          nl: "Wat is het optimale zeta potentiaal bereik voor ijs emulsie stabiliteit?"
        },
        options: [
          { en: "0 to -10 mV", es: "0 a -10 mV", de: "0 bis -10 mV", nl: "0 tot -10 mV" },
          { en: "-15 to -25 mV", es: "-15 a -25 mV", de: "-15 bis -25 mV", nl: "-15 tot -25 mV" },
          { en: "-30 to -50 mV", es: "-30 a -50 mV", de: "-30 bis -50 mV", nl: "-30 tot -50 mV" },
          { en: "Above -60 mV", es: "Sobre -60 mV", de: "Über -60 mV", nl: "Boven -60 mV" }
        ],
        correct: 1,
        explanation: {
          en: "A zeta potential of -15 to -25 mV provides optimal stability for ice cream emulsions, balancing electrostatic repulsion to prevent coalescence while allowing controlled destabilization during churning.",
          es: "Un potencial zeta de -15 a -25 mV proporciona estabilidad óptima para emulsiones de helado, equilibrando repulsión electrostática para prevenir coalescencia mientras permite desestabilización controlada durante batido.",
          de: "Ein Zeta-Potential von -15 bis -25 mV bietet optimale Stabilität für Eisemulsionen, balanciert elektrostatische Abstoßung zur Verhinderung von Koaleszenz bei gleichzeitiger kontrollierter Destabilisierung beim Rühren.",
          nl: "Een zeta potentiaal van -15 tot -25 mV biedt optimale stabiliteit voor ijs emulsies, balanceert electrostatische afstoting om coalescentie te voorkomen terwijl gecontroleerde destabilisatie tijdens karnen wordt toegestaan."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();