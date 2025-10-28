// Ice Cream Desserts Quiz - Level 8: Scientific Mastery
(function() {
  const level8 = {
    name: {
      en: "Ice Cream Desserts - Scientific Mastery",
      es: "Postres de Helado - Maestría Científica",
      de: "Eisdesserts - Wissenschaftliche Meisterschaft",
      nl: "IJsdesserts - Wetenschappelijke Meesterschap"
    },
    questions: [
      {
        question: {
          en: "What is the relationship between freezing point depression and molecular weight in ice cream sweeteners?",
          es: "¿Cuál es la relación entre depresión del punto de congelación y peso molecular en endulzantes de helado?",
          de: "Was ist die Beziehung zwischen Gefrierpunktserniedrigung und Molekulargewicht in Eissüßstoffen?",
          nl: "Wat is de relatie tussen vriespuntverlaging en molecuulgewicht in ijs zoetstoffen?"
        },
        options: [
          { en: "No relationship exists", es: "No existe relación", de: "Keine Beziehung existiert", nl: "Er bestaat geen relatie" },
          { en: "Inversely proportional - lower molecular weight provides greater freezing point depression", es: "Inversamente proporcional - menor peso molecular proporciona mayor depresión del punto de congelación", de: "Umgekehrt proportional - niedrigeres Molekulargewicht bietet größere Gefrierpunktserniedrigung", nl: "Omgekeerd evenredig - lager molecuulgewicht biedt grotere vriespuntverlaging" },
          { en: "Directly proportional", es: "Directamente proporcional", de: "Direkt proportional", nl: "Direct evenredig" },
          { en: "Exponentially related", es: "Exponencialmente relacionado", de: "Exponentiell verwandt", nl: "Exponentieel gerelateerd" }
        ],
        correct: 1,
        explanation: {
          en: "Freezing point depression follows Raoult's Law and is colligative, depending on the number of dissolved particles. Lower molecular weight sweeteners like glucose (MW 180) create more particles per gram than sucrose (MW 342), providing greater antifreeze effect.",
          es: "La depresión del punto de congelación sigue la Ley de Raoult y es coligativa, dependiendo del número de partículas disueltas. Endulzantes de menor peso molecular como glucosa (PM 180) crean más partículas por gramo que sacarosa (PM 342), proporcionando mayor efecto anticongelante.",
          de: "Gefrierpunktserniedrigung folgt Raoults Gesetz und ist kolligativ, abhängig von der Anzahl gelöster Teilchen. Süßstoffe niedrigeren Molekulargewichts wie Glucose (MW 180) erzeugen mehr Teilchen pro Gramm als Saccharose (MW 342), bieten größeren Frostschutzeffekt.",
          nl: "Vriespuntverlaging volgt Raoult's Wet en is colligatief, afhankelijk van het aantal opgeloste deeltjes. Zoetstoffen met lager molecuulgewicht zoals glucose (MW 180) creëren meer deeltjes per gram dan sucrose (MW 342), biedend groter antivries effect."
        }
      },
      {
        question: {
          en: "What is the thermodynamic principle behind the Clausius-Clapeyron equation's application to ice cream phase transitions?",
          es: "¿Cuál es el principio termodinámico detrás de la aplicación de la ecuación Clausius-Clapeyron a transiciones de fase del helado?",
          de: "Was ist das thermodynamische Prinzip hinter der Anwendung der Clausius-Clapeyron-Gleichung auf Eisphasenübergänge?",
          nl: "Wat is het thermodynamische principe achter de toepassing van de Clausius-Clapeyron vergelijking op ijs fase overgangen?"
        },
        options: [
          { en: "Only applies to pure substances", es: "Solo se aplica a sustancias puras", de: "Gilt nur für reine Substanzen", nl: "Geldt alleen voor pure stoffen" },
          { en: "Relates vapor pressure changes to temperature for first-order phase transitions", es: "Relaciona cambios de presión de vapor con temperatura para transiciones de fase de primer orden", de: "Bezieht Dampfdruckänderungen auf Temperatur für Phasenübergänge erster Ordnung", nl: "Relateert dampdruk veranderingen aan temperatuur voor eerste-orde fase overgangen" },
          { en: "Only describes melting points", es: "Solo describe puntos de fusión", de: "Beschreibt nur Schmelzpunkte", nl: "Beschrijft alleen smeltpunten" },
          { en: "Applies only to crystallization", es: "Se aplica solo a cristalización", de: "Gilt nur für Kristallisation", nl: "Geldt alleen voor kristallisatie" }
        ],
        correct: 1,
        explanation: {
          en: "The Clausius-Clapeyron equation describes how the slope of phase boundary lines relates vapor pressure to temperature changes during first-order transitions like melting/freezing, crucial for understanding ice crystal behavior in complex ice cream systems.",
          es: "La ecuación Clausius-Clapeyron describe cómo la pendiente de líneas de límite de fase relaciona presión de vapor con cambios de temperatura durante transiciones de primer orden como fusión/congelación, crucial para entender comportamiento de cristales de hielo en sistemas complejos de helado.",
          de: "Die Clausius-Clapeyron-Gleichung beschreibt, wie die Steigung von Phasengrenzlinien Dampfdruck mit Temperaturänderungen während Phasenübergängen erster Ordnung wie Schmelzen/Gefrieren bezieht, entscheidend für das Verständnis des Eiskristallverhaltens in komplexen Eissystemen.",
          nl: "De Clausius-Clapeyron vergelijking beschrijft hoe de helling van fasegrens lijnen dampdruk relateert aan temperatuur veranderingen tijdens eerste-orde overgangen zoals smelten/bevriezen, cruciaal voor het begrijpen van ijskristal gedrag in complexe ijs systemen."
        }
      },
      {
        question: {
          en: "What is the role of interfacial free energy (γ) in ice cream crystal nucleation kinetics?",
          es: "¿Cuál es el papel de la energía libre interfacial (γ) en cinéticas de nucleación de cristales de helado?",
          de: "Welche Rolle spielt die freie Grenzflächenenergie (γ) in der Nukleationskinetik von Eiskristallen?",
          nl: "Wat is de rol van interfaciale vrije energie (γ) in ijs kristal nucleatie kinetiek?"
        },
        options: [
          { en: "Has no effect on nucleation", es: "No tiene efecto en nucleación", de: "Hat keine Wirkung auf Nukleation", nl: "Heeft geen effect op nucleatie" },
          { en: "Creates energy barrier that must be overcome for crystal formation", es: "Crea barrera energética que debe superarse para formación de cristales", de: "Erzeugt Energiebarriere, die für Kristallbildung überwunden werden muss", nl: "Creëert energie barrière die overwonnen moet worden voor kristal vorming" },
          { en: "Only affects crystal color", es: "Solo afecta color del cristal", de: "Beeinflusst nur Kristallfarbe", nl: "Beïnvloedt alleen kristal kleur" },
          { en: "Determines only crystal size", es: "Determina solo tamaño del cristal", de: "Bestimmt nur Kristallgröße", nl: "Bepaalt alleen kristal grootte" }
        ],
        correct: 1,
        explanation: {
          en: "Interfacial free energy creates an activation energy barrier for nucleation according to Classical Nucleation Theory. Higher γ values require greater supercooling to overcome the thermodynamic barrier for stable nucleus formation.",
          es: "La energía libre interfacial crea una barrera de energía de activación para nucleación según Teoría Clásica de Nucleación. Valores γ mayores requieren mayor superenfriamiento para superar la barrera termodinámica para formación de núcleo estable.",
          de: "Freie Grenzflächenenergie erzeugt eine Aktivierungsenergie-Barriere für Nukleation nach der Klassischen Nukleationstheorie. Höhere γ-Werte erfordern größere Unterkühlung, um die thermodynamische Barriere für stabile Kernbildung zu überwinden.",
          nl: "Interfaciale vrije energie creëert een activatie energie barrière voor nucleatie volgens Klassieke Nucleatie Theorie. Hogere γ waarden vereisen grotere onderkoeling om de thermodynamische barrière voor stabiele kern vorming te overwinnen."
        }
      },
      {
        question: {
          en: "What is the significance of the Avrami equation in ice cream crystallization modeling?",
          es: "¿Cuál es la significancia de la ecuación Avrami en modelado de cristalización de helado?",
          de: "Was ist die Bedeutung der Avrami-Gleichung in der Eiskristallisationsmodellierung?",
          nl: "Wat is de betekenis van de Avrami vergelijking in ijs kristallisatie modellering?"
        },
        options: [
          { en: "Only measures temperature", es: "Solo mide temperatura", de: "Misst nur Temperatur", nl: "Meet alleen temperatuur" },
          { en: "Describes crystallization kinetics including nucleation and growth mechanisms", es: "Describe cinéticas de cristalización incluyendo mecanismos de nucleación y crecimiento", de: "Beschreibt Kristallisationskinetik einschließlich Nukleations- und Wachstumsmechanismen", nl: "Beschrijft kristallisatie kinetiek inclusief nucleatie en groei mechanismen" },
          { en: "Only applies to metal crystals", es: "Solo se aplica a cristales metálicos", de: "Gilt nur für Metallkristalle", nl: "Geldt alleen voor metaal kristallen" },
          { en: "Measures only crystal color", es: "Mide solo color de cristal", de: "Misst nur Kristallfarbe", nl: "Meet alleen kristal kleur" }
        ],
        correct: 1,
        explanation: {
          en: "The Avrami equation (X(t) = 1 - exp(-kt^n)) models the fraction of material crystallized over time, where 'n' indicates nucleation/growth mechanisms. Values help predict ice crystal development in complex ice cream systems.",
          es: "La ecuación Avrami (X(t) = 1 - exp(-kt^n)) modela la fracción de material cristalizado con el tiempo, donde 'n' indica mecanismos de nucleación/crecimiento. Los valores ayudan a predecir desarrollo de cristales de hielo en sistemas complejos de helado.",
          de: "Die Avrami-Gleichung (X(t) = 1 - exp(-kt^n)) modelliert den kristallisierten Materialanteil über Zeit, wobei 'n' Nukleations-/Wachstumsmechanismen anzeigt. Werte helfen, Eiskristallentwicklung in komplexen Eissystemen vorherzusagen.",
          nl: "De Avrami vergelijking (X(t) = 1 - exp(-kt^n)) modelleert de fractie van materiaal gekristalliseerd over tijd, waar 'n' nucleatie/groei mechanismen aangeeft. Waarden helpen ijskristal ontwikkeling in complexe ijs systemen voorspellen."
        }
      },
      {
        question: {
          en: "What is the role of chemical potential (μ) in ice cream phase equilibrium?",
          es: "¿Cuál es el papel del potencial químico (μ) en equilibrio de fases del helado?",
          de: "Welche Rolle spielt das chemische Potential (μ) im Eisphasen-Gleichgewicht?",
          nl: "Wat is de rol van chemisch potentiaal (μ) in ijs fase evenwicht?"
        },
        options: [
          { en: "Only affects flavor compounds", es: "Solo afecta compuestos de sabor", de: "Beeinflusst nur Geschmacksverbindungen", nl: "Beïnvloedt alleen smaak verbindingen" },
          { en: "Drives mass transfer between phases when μ gradients exist", es: "Impulsa transferencia de masa entre fases cuando existen gradientes μ", de: "Treibt Massentransfer zwischen Phasen an, wenn μ-Gradienten existieren", nl: "Drijft massa overdracht tussen fasen aan wanneer μ gradiënten bestaan" },
          { en: "Only determines crystal color", es: "Solo determina color del cristal", de: "Bestimmt nur Kristallfarbe", nl: "Bepaalt alleen kristal kleur" },
          { en: "Has no role in phase behavior", es: "No tiene papel en comportamiento de fases", de: "Hat keine Rolle im Phasenverhalten", nl: "Heeft geen rol in fase gedrag" }
        ],
        correct: 1,
        explanation: {
          en: "Chemical potential differences drive mass transfer between ice, liquid, and vapor phases. When μ_ice ≠ μ_liquid, water molecules transfer to achieve equilibrium, governing processes like ice recrystallization and sublimation in stored ice cream.",
          es: "Las diferencias de potencial químico impulsan transferencia de masa entre fases de hielo, líquido y vapor. Cuando μ_hielo ≠ μ_líquido, moléculas de agua se transfieren para lograr equilibrio, gobernando procesos como recristalización de hielo y sublimación en helado almacenado.",
          de: "Chemische Potentialunterschiede treiben Massentransfer zwischen Eis-, Flüssig- und Dampfphasen an. Wenn μ_Eis ≠ μ_Flüssigkeit, übertragen sich Wassermoleküle zum Gleichgewicht, regeln Prozesse wie Eiskristall-Rekristallisation und Sublimation in gelagertem Eis.",
          nl: "Chemisch potentiaal verschillen drijven massa overdracht tussen ijs, vloeistof, en damp fasen aan. Wanneer μ_ijs ≠ μ_vloeistof, transfereren water moleculen om evenwicht te bereiken, beheersend processen zoals ijs herkristallisatie en sublimatie in opgeslagen ijs."
        }
      },
      {
        question: {
          en: "What is the relationship between viscosity (η) and temperature following the Arrhenius equation in ice cream systems?",
          es: "¿Cuál es la relación entre viscosidad (η) y temperatura siguiendo la ecuación Arrhenius en sistemas de helado?",
          de: "Was ist die Beziehung zwischen Viskosität (η) und Temperatur nach der Arrhenius-Gleichung in Eissystemen?",
          nl: "Wat is de relatie tussen viscositeit (η) en temperatuur volgend de Arrhenius vergelijking in ijs systemen?"
        },
        options: [
          { en: "Linear relationship", es: "Relación lineal", de: "Lineare Beziehung", nl: "Lineaire relatie" },
          { en: "Exponential relationship: η = A·exp(Ea/RT)", es: "Relación exponencial: η = A·exp(Ea/RT)", de: "Exponentieller Zusammenhang: η = A·exp(Ea/RT)", nl: "Exponentiële relatie: η = A·exp(Ea/RT)" },
          { en: "No relationship", es: "Sin relación", de: "Keine Beziehung", nl: "Geen relatie" },
          { en: "Inverse linear relationship", es: "Relación lineal inversa", de: "Inverse lineare Beziehung", nl: "Omgekeerd lineaire relatie" }
        ],
        correct: 1,
        explanation: {
          en: "Viscosity follows Arrhenius behavior with exponential temperature dependence. As temperature decreases, viscosity increases exponentially due to higher activation energy (Ea) required for molecular flow, critical for understanding texture changes during freezing and storage.",
          es: "La viscosidad sigue comportamiento Arrhenius con dependencia exponencial de temperatura. Cuando temperatura disminuye, viscosidad aumenta exponencialmente debido a mayor energía de activación (Ea) requerida para flujo molecular, crítico para entender cambios de textura durante congelación y almacenamiento.",
          de: "Viskosität folgt Arrhenius-Verhalten mit exponentieller Temperaturabhängigkeit. Bei sinkender Temperatur steigt Viskosität exponentiell aufgrund höherer Aktivierungsenergie (Ea) für molekularen Fluss, kritisch für das Verständnis von Texturänderungen beim Gefrieren und Lagern.",
          nl: "Viscositeit volgt Arrhenius gedrag met exponentiële temperatuur afhankelijkheid. Als temperatuur daalt, neemt viscositeit exponentieel toe door hogere activatie energie (Ea) vereist voor moleculaire stroming, kritiek voor begrip van textuur veranderingen tijdens bevriezen en opslag."
        }
      },
      {
        question: {
          en: "What is the principle behind Differential Scanning Calorimetry (DSC) analysis of ice cream thermal transitions?",
          es: "¿Cuál es el principio detrás del análisis de Calorimetría Diferencial de Barrido (DSC) de transiciones térmicas del helado?",
          de: "Was ist das Prinzip hinter der Differenzkalorimetrie (DSC)-Analyse von Eisthermischen Übergängen?",
          nl: "Wat is het principe achter Differentiële Scanning Calorimetrie (DSC) analyse van ijs thermische overgangen?"
        },
        options: [
          { en: "Only measures color changes", es: "Solo mide cambios de color", de: "Misst nur Farbänderungen", nl: "Meet alleen kleur veranderingen" },
          { en: "Measures heat flow differences between sample and reference during controlled temperature changes", es: "Mide diferencias de flujo de calor entre muestra y referencia durante cambios controlados de temperatura", de: "Misst Wärmestromunterschiede zwischen Probe und Referenz während kontrollierter Temperaturänderungen", nl: "Meet warmte stroom verschillen tussen monster en referentie tijdens gecontroleerde temperatuur veranderingen" },
          { en: "Only measures crystal size", es: "Solo mide tamaño de cristal", de: "Misst nur Kristallgröße", nl: "Meet alleen kristal grootte" },
          { en: "Measures only pH changes", es: "Mide solo cambios de pH", de: "Misst nur pH-Änderungen", nl: "Meet alleen pH veranderingen" }
        ],
        correct: 1,
        explanation: {
          en: "DSC measures heat flow differences during phase transitions. Endothermic peaks indicate melting (ice → liquid), exothermic peaks show crystallization. The technique reveals glass transitions, crystallization temperatures, and enthalpies crucial for ice cream stability analysis.",
          es: "DSC mide diferencias de flujo de calor durante transiciones de fase. Picos endotérmicos indican fusión (hielo → líquido), picos exotérmicos muestran cristalización. La técnica revela transiciones vítreas, temperaturas de cristalización, y entalpías cruciales para análisis de estabilidad del helado.",
          de: "DSC misst Wärmestromunterschiede während Phasenübergängen. Endotherme Peaks zeigen Schmelzen (Eis → Flüssigkeit), exotherme Peaks zeigen Kristallisation. Die Technik offenbart Glasübergänge, Kristallisationstemperaturen und Enthalpien, die für Eisstabilitätsanalyse entscheidend sind.",
          nl: "DSC meet warmte stroom verschillen tijdens fase overgangen. Endotherme pieken geven smelten aan (ijs → vloeistof), exotherme pieken tonen kristallisatie. De techniek onthult glas overgangen, kristallisatie temperaturen, en enthalpieën cruciaal voor ijs stabiliteits analyse."
        }
      },
      {
        question: {
          en: "What is the significance of the Williams-Landel-Ferry (WLF) equation in ice cream science?",
          es: "¿Cuál es la significancia de la ecuación Williams-Landel-Ferry (WLF) en ciencia del helado?",
          de: "Was ist die Bedeutung der Williams-Landel-Ferry (WLF)-Gleichung in der Eiswissenschaft?",
          nl: "Wat is de betekenis van de Williams-Landel-Ferry (WLF) vergelijking in ijs wetenschap?"
        },
        options: [
          { en: "Only applies to metal alloys", es: "Solo se aplica a aleaciones metálicas", de: "Gilt nur für Metalllegierungen", nl: "Geldt alleen voor metaal legeringen" },
          { en: "Describes temperature dependence of relaxation times and viscosity in glassy state", es: "Describe dependencia de temperatura de tiempos de relajación y viscosidad en estado vítreo", de: "Beschreibt Temperaturabhängigkeit von Relaxationszeiten und Viskosität im glasigen Zustand", nl: "Beschrijft temperatuur afhankelijkheid van relaxatie tijden en viscositeit in glasachtige toestand" },
          { en: "Only measures crystal formation", es: "Solo mide formación de cristales", de: "Misst nur Kristallbildung", nl: "Meet alleen kristal vorming" },
          { en: "Applies only to liquid systems", es: "Se aplica solo a sistemas líquidos", de: "Gilt nur für flüssige Systeme", nl: "Geldt alleen voor vloeibare systemen" }
        ],
        correct: 1,
        explanation: {
          en: "WLF equation describes how molecular relaxation times and viscosity change with temperature near the glass transition. It's crucial for understanding ice cream texture evolution during storage, where concentrated serum phases approach glassy behavior.",
          es: "La ecuación WLF describe cómo tiempos de relajación molecular y viscosidad cambian con temperatura cerca de transición vítrea. Es crucial para entender evolución de textura del helado durante almacenamiento, donde fases concentradas de suero se aproximan a comportamiento vítreo.",
          de: "Die WLF-Gleichung beschreibt, wie sich molekulare Relaxationszeiten und Viskosität mit Temperatur nahe dem Glasübergang ändern. Sie ist entscheidend für das Verständnis der Eistexturevolution während der Lagerung, wo konzentrierte Serumphasen glasiges Verhalten annähern.",
          nl: "WLF vergelijking beschrijft hoe moleculaire relaxatie tijden en viscositeit veranderen met temperatuur nabij de glas overgang. Het is cruciaal voor begrip van ijs textuur evolutie tijdens opslag, waar geconcentreerde serum fasen glasachtig gedrag benaderen."
        }
      },
      {
        question: {
          en: "What is the role of X-ray diffraction (XRD) in ice cream polymorph analysis?",
          es: "¿Cuál es el papel de la difracción de rayos X (XRD) en análisis de polimorfos de helado?",
          de: "Welche Rolle spielt Röntgenbeugung (XRD) in der Eispolymorph-Analyse?",
          nl: "Wat is de rol van röntgen diffractie (XRD) in ijs polymorf analyse?"
        },
        options: [
          { en: "Only measures color intensity", es: "Solo mide intensidad de color", de: "Misst nur Farbintensität", nl: "Meet alleen kleur intensiteit" },
          { en: "Identifies crystal structures and polymorphic forms of fats and sugars", es: "Identifica estructuras cristalinas y formas polimórficas de grasas y azúcares", de: "Identifiziert Kristallstrukturen und polymorphe Formen von Fetten und Zuckern", nl: "Identificeert kristal structuren en polymorfe vormen van vetten en suikers" },
          { en: "Only measures temperature", es: "Solo mide temperatura", de: "Misst nur Temperatur", nl: "Meet alleen temperatuur" },
          { en: "Only determines water content", es: "Solo determina contenido de agua", de: "Bestimmt nur Wassergehalt", nl: "Bepaalt alleen water gehalte" }
        ],
        correct: 1,
        explanation: {
          en: "XRD reveals crystalline structures by measuring diffraction patterns. In ice cream, it identifies fat polymorphs (α, β', β), ice crystal structures, and sugar crystallization (lactose, sucrose), providing insights into texture defects and quality changes during storage.",
          es: "XRD revela estructuras cristalinas midiendo patrones de difracción. En helado, identifica polimorfos de grasa (α, β', β), estructuras de cristales de hielo, y cristalización de azúcar (lactosa, sacarosa), proporcionando percepciones sobre defectos de textura y cambios de calidad durante almacenamiento.",
          de: "XRD offenbart kristalline Strukturen durch Messung von Beugungsmustern. In Eis identifiziert es Fettpolymorphe (α, β', β), Eiskristallstrukturen und Zuckerkristallisation (Lactose, Saccharose), bietet Einblicke in Texturdefekte und Qualitätsveränderungen während der Lagerung.",
          nl: "XRD onthult kristallijne structuren door diffractie patronen te meten. In ijs identificeert het vet polymorfen (α, β', β), ijskristal structuren, en suiker kristallisatie (lactose, sucrose), biedend inzichten in textuur defecten en kwaliteits veranderingen tijdens opslag."
        }
      },
      {
        question: {
          en: "What is the significance of the Gibbs-Thomson effect in ice cream crystal growth?",
          es: "¿Cuál es la significancia del efecto Gibbs-Thomson en crecimiento de cristales de helado?",
          de: "Was ist die Bedeutung des Gibbs-Thomson-Effekts beim Eiswachstum?",
          nl: "Wat is de betekenis van het Gibbs-Thomson effect in ijs kristal groei?"
        },
        options: [
          { en: "Only affects crystal color", es: "Solo afecta color del cristal", de: "Beeinflusst nur Kristallfarbe", nl: "Beïnvloedt alleen kristal kleur" },
          { en: "Smaller crystals have higher vapor pressure and dissolve preferentially, driving Ostwald ripening", es: "Cristales menores tienen mayor presión de vapor y se disuelven preferencialmente, impulsando maduración de Ostwald", de: "Kleinere Kristalle haben höheren Dampfdruck und lösen sich bevorzugt auf, treiben Ostwald-Reifung an", nl: "Kleinere kristallen hebben hogere dampdruk en lossen bij voorkeur op, drijven Ostwald rijping aan" },
          { en: "Only applies to sugar crystals", es: "Solo se aplica a cristales de azúcar", de: "Gilt nur für Zuckerkristalle", nl: "Geldt alleen voor suiker kristallen" },
          { en: "Has no effect on crystal behavior", es: "No tiene efecto en comportamiento de cristal", de: "Hat keine Wirkung auf Kristallverhalten", nl: "Heeft geen effect op kristal gedrag" }
        ],
        correct: 1,
        explanation: {
          en: "Gibbs-Thomson effect shows that smaller crystals have higher equilibrium vapor pressure due to surface curvature effects. This thermodynamic driving force causes small crystals to dissolve while large ones grow, explaining Ostwald ripening in ice cream during storage.",
          es: "El efecto Gibbs-Thomson muestra que cristales menores tienen mayor presión de vapor de equilibrio debido a efectos de curvatura superficial. Esta fuerza motriz termodinámica causa que cristales pequeños se disuelvan mientras grandes crecen, explicando maduración de Ostwald en helado durante almacenamiento.",
          de: "Der Gibbs-Thomson-Effekt zeigt, dass kleinere Kristalle höheren Gleichgewichtsdampfdruck aufgrund von Oberflächenkrümmungseffekten haben. Diese thermodynamische Triebkraft verursacht, dass kleine Kristalle sich auflösen, während große wachsen, erklärt Ostwald-Reifung in Eis während Lagerung.",
          nl: "Gibbs-Thomson effect toont dat kleinere kristallen hogere evenwichts dampdruk hebben door oppervlakte kromming effecten. Deze thermodynamische drijfkracht zorgt dat kleine kristallen oplossen terwijl grote groeien, verklaart Ostwald rijping in ijs tijdens opslag."
        }
      },
      {
        question: {
          en: "What is the role of dielectric spectroscopy in ice cream quality analysis?",
          es: "¿Cuál es el papel de la espectroscopía dieléctrica en análisis de calidad del helado?",
          de: "Welche Rolle spielt Dielektrische Spektroskopie in der Eisqualitätsanalyse?",
          nl: "Wat is de rol van diëlektrische spectroscopie in ijs kwaliteits analyse?"
        },
        options: [
          { en: "Only measures color changes", es: "Solo mide cambios de color", de: "Misst nur Farbänderungen", nl: "Meet alleen kleur veranderingen" },
          { en: "Analyzes molecular mobility and water dynamics through dielectric relaxation", es: "Analiza movilidad molecular y dinámica del agua a través de relajación dieléctrica", de: "Analysiert molekulare Mobilität und Wasserdynamik durch dielektrische Relaxation", nl: "Analyseert moleculaire mobiliteit en water dynamiek door diëlektrische relaxatie" },
          { en: "Only measures crystal size", es: "Solo mide tamaño de cristal", de: "Misst nur Kristallgröße", nl: "Meet alleen kristal grootte" },
          { en: "Only determines pH levels", es: "Solo determina niveles de pH", de: "Bestimmt nur pH-Werte", nl: "Bepaalt alleen pH niveaus" }
        ],
        correct: 1,
        explanation: {
          en: "Dielectric spectroscopy measures how molecular dipoles respond to alternating electric fields, revealing water mobility and phase behavior. It can detect glass transitions, crystallization kinetics, and water-protein interactions crucial for ice cream texture development.",
          es: "La espectroscopía dieléctrica mide cómo dipolos moleculares responden a campos eléctricos alternantes, revelando movilidad del agua y comportamiento de fases. Puede detectar transiciones vítreas, cinéticas de cristalización, e interacciones agua-proteína cruciales para desarrollo de textura del helado.",
          de: "Dielektrische Spektroskopie misst, wie molekulare Dipole auf wechselnde elektrische Felder reagieren, offenbart Wassermobilität und Phasenverhalten. Sie kann Glasübergänge, Kristallisationskinetik und Wasser-Protein-Wechselwirkungen detektieren, die für Eistexturentwicklung entscheidend sind.",
          nl: "Diëlektrische spectroscopie meet hoe moleculaire dipolen reageren op wisselende elektrische velden, onthullend water mobiliteit en fase gedrag. Het kan glas overgangen, kristallisatie kinetiek, en water-eiwit interacties detecteren cruciaal voor ijs textuur ontwikkeling."
        }
      },
      {
        question: {
          en: "What is the relationship between surface area-to-volume ratio and melting kinetics in ice cream?",
          es: "¿Cuál es la relación entre proporción área superficial-volumen y cinéticas de fusión en helado?",
          de: "Was ist die Beziehung zwischen Oberflächen-zu-Volumen-Verhältnis und Schmelzkinetik in Eis?",
          nl: "Wat is de relatie tussen oppervlakte-tot-volume verhouding en smelt kinetiek in ijs?"
        },
        options: [
          { en: "No relationship exists", es: "No existe relación", de: "Keine Beziehung existiert", nl: "Er bestaat geen relatie" },
          { en: "Higher surface area-to-volume ratio increases melting rate due to greater heat transfer", es: "Mayor proporción área superficial-volumen aumenta velocidad de fusión debido a mayor transferencia de calor", de: "Höheres Oberflächen-zu-Volumen-Verhältnis erhöht Schmelzrate aufgrund größerer Wärmeübertragung", nl: "Hogere oppervlakte-tot-volume verhouding verhoogt smelt snelheid door grotere warmte overdracht" },
          { en: "Lower surface area increases melting", es: "Menor área superficial aumenta fusión", de: "Geringere Oberfläche erhöht Schmelzen", nl: "Lagere oppervlakte verhoogt smelten" },
          { en: "Only shape matters, not ratio", es: "Solo forma importa, no proporción", de: "Nur Form zählt, nicht Verhältnis", nl: "Alleen vorm is belangrijk, niet verhouding" }
        ],
        correct: 1,
        explanation: {
          en: "Melting rate follows heat transfer principles where rate ∝ surface area. Higher surface area-to-volume ratios provide more interface for heat exchange, explaining why finely dispersed ice crystals and air bubbles affect melting behavior and drip-off characteristics.",
          es: "La velocidad de fusión sigue principios de transferencia de calor donde velocidad ∝ área superficial. Mayores proporciones área superficial-volumen proporcionan más interfaz para intercambio de calor, explicando por qué cristales de hielo finamente dispersos y burbujas de aire afectan comportamiento de fusión y características de goteo.",
          de: "Schmelzrate folgt Wärmeübertragungsprinzipien, wo Rate ∝ Oberfläche. Höhere Oberflächen-zu-Volumen-Verhältnisse bieten mehr Grenzfläche für Wärmeaustausch, erklärt warum fein verteilte Eiskristalle und Luftblasen Schmelzverhalten und Abtropfcharakteristika beeinflussen.",
          nl: "Smelt snelheid volgt warmte overdracht principes waar snelheid ∝ oppervlakte. Hogere oppervlakte-tot-volume verhoudingen bieden meer interface voor warmte uitwisseling, verklarend waarom fijn verdeelde ijskristallen en luchtbellen smelt gedrag en drip-off karakteristieken beïnvloeden."
        }
      },
      {
        question: {
          en: "What is the principle behind nuclear magnetic resonance (NMR) relaxometry in ice cream water analysis?",
          es: "¿Cuál es el principio detrás de la relaxometría de resonancia magnética nuclear (NMR) en análisis de agua del helado?",
          de: "Was ist das Prinzip hinter der Kernspinresonanz (NMR) Relaxometrie in der Eiswasseranalyse?",
          nl: "Wat is het principe achter nucleaire magnetische resonantie (NMR) relaxometrie in ijs water analyse?"
        },
        options: [
          { en: "Only measures water temperature", es: "Solo mide temperatura del agua", de: "Misst nur Wassertemperatur", nl: "Meet alleen water temperatuur" },
          { en: "Measures relaxation times (T1, T2) that reflect water mobility and environment", es: "Mide tiempos de relajación (T1, T2) que reflejan movilidad y ambiente del agua", de: "Misst Relaxationszeiten (T1, T2), die Wassermobilität und -umgebung widerspiegeln", nl: "Meet relaxatie tijden (T1, T2) die water mobiliteit en omgeving reflecteren" },
          { en: "Only determines crystal structure", es: "Solo determina estructura cristalina", de: "Bestimmt nur Kristallstruktur", nl: "Bepaalt alleen kristal structuur" },
          { en: "Only measures pH changes", es: "Solo mide cambios de pH", de: "Misst nur pH-Änderungen", nl: "Meet alleen pH veranderingen" }
        ],
        correct: 1,
        explanation: {
          en: "NMR relaxometry measures T1 (spin-lattice) and T2 (spin-spin) relaxation times of water protons. Different water environments (bulk, bound, interfacial) have characteristic relaxation times, allowing quantification of water states and mobility in complex ice cream systems.",
          es: "La relaxometría NMR mide tiempos de relajación T1 (espín-red) y T2 (espín-espín) de protones del agua. Diferentes ambientes de agua (masiva, ligada, interfacial) tienen tiempos de relajación característicos, permitiendo cuantificación de estados y movilidad del agua en sistemas complejos de helado.",
          de: "NMR-Relaxometrie misst T1 (Spin-Gitter) und T2 (Spin-Spin) Relaxationszeiten von Wasserprotonen. Verschiedene Wasserumgebungen (Bulk, gebunden, Grenzfläche) haben charakteristische Relaxationszeiten, ermöglicht Quantifizierung von Wasserzuständen und Mobilität in komplexen Eissystemen.",
          nl: "NMR relaxometrie meet T1 (spin-rooster) en T2 (spin-spin) relaxatie tijden van water protonen. Verschillende water omgevingen (bulk, gebonden, interfacial) hebben karakteristieke relaxatie tijden, mogelijk makend kwantificatie van water toestanden en mobiliteit in complexe ijs systemen."
        }
      },
      {
        question: {
          en: "What is the role of mechanical impedance analysis in ice cream texture characterization?",
          es: "¿Cuál es el papel del análisis de impedancia mecánica en caracterización de textura del helado?",
          de: "Welche Rolle spielt mechanische Impedanzanalyse in der Eistextur-Charakterisierung?",
          nl: "Wat is de rol van mechanische impedantie analyse in ijs textuur karakterisatie?"
        },
        options: [
          { en: "Only measures color properties", es: "Solo mide propiedades de color", de: "Misst nur Farbeigenschaften", nl: "Meet alleen kleur eigenschappen" },
          { en: "Measures dynamic mechanical response to oscillatory deformation", es: "Mide respuesta mecánica dinámica a deformación oscilatoria", de: "Misst dynamische mechanische Antwort auf oszillierende Deformation", nl: "Meet dynamische mechanische respons op oscillerende vervorming" },
          { en: "Only determines melting temperature", es: "Solo determina temperatura de fusión", de: "Bestimmt nur Schmelztemperatur", nl: "Bepaalt alleen smelt temperatuur" },
          { en: "Only measures electrical conductivity", es: "Solo mide conductividad eléctrica", de: "Misst nur elektrische Leitfähigkeit", nl: "Meet alleen elektrische geleidbaarheid" }
        ],
        correct: 1,
        explanation: {
          en: "Mechanical impedance analysis applies oscillatory stress and measures strain response, providing storage modulus (G') for elasticity and loss modulus (G'') for viscosity. This reveals microstructural information about ice crystal networks, fat networks, and air cell stability.",
          es: "El análisis de impedancia mecánica aplica estrés oscilatorio y mide respuesta de deformación, proporcionando módulo de almacenamiento (G') para elasticidad y módulo de pérdida (G'') para viscosidad. Esto revela información microestructural sobre redes de cristales de hielo, redes de grasa, y estabilidad de células de aire.",
          de: "Mechanische Impedanzanalyse wendet oszillierende Spannung an und misst Dehnungsantwort, bietet Speichermodul (G') für Elastizität und Verlustmodul (G'') für Viskosität. Dies offenbart mikrostrukturelle Informationen über Eiskristallnetzwerke, Fettnetzwerke und Luftzellenstabilität.",
          nl: "Mechanische impedantie analyse past oscillerende spanning toe en meet rek respons, biedend opslagmodulus (G') voor elasticiteit en verliesmodulus (G'') voor viscositeit. Dit onthult microstructurele informatie over ijskristal netwerken, vet netwerken, en luchtcel stabiliteit."
        }
      },
      {
        question: {
          en: "What is the significance of sorption isotherms in ice cream stability prediction?",
          es: "¿Cuál es la significancia de isotermas de sorción en predicción de estabilidad del helado?",
          de: "Was ist die Bedeutung von Sorptionsisothermen bei der Eisstabilitätsvorhersage?",
          nl: "Wat is de betekenis van sorptie isothermen in ijs stabiliteits voorspelling?"
        },
        options: [
          { en: "Only measures color stability", es: "Solo mide estabilidad de color", de: "Misst nur Farbstabilität", nl: "Meet alleen kleur stabiliteit" },
          { en: "Describes water activity-moisture content relationships for predicting chemical and physical stability", es: "Describe relaciones actividad de agua-contenido de humedad para predecir estabilidad química y física", de: "Beschreibt Wasseraktivität-Feuchtigkeitsgehalt-Beziehungen zur Vorhersage chemischer und physischer Stabilität", nl: "Beschrijft wateractiviteit-vochtgehalte relaties voor voorspellen van chemische en fysieke stabiliteit" },
          { en: "Only determines crystal size", es: "Solo determina tamaño de cristal", de: "Bestimmt nur Kristallgröße", nl: "Bepaalt alleen kristal grootte" },
          { en: "Only measures temperature effects", es: "Solo mide efectos de temperatura", de: "Misst nur Temperatureffekte", nl: "Meet alleen temperatuur effecten" }
        ],
        correct: 1,
        explanation: {
          en: "Sorption isotherms plot water activity (aw) vs moisture content at constant temperature. They predict critical aw levels for microbial growth, lipid oxidation, protein denaturation, and sugar crystallization, essential for predicting ice cream shelf life and quality changes.",
          es: "Las isotermas de sorción grafican actividad de agua (aw) vs contenido de humedad a temperatura constante. Predicen niveles críticos de aw para crecimiento microbiano, oxidación lipídica, desnaturalización proteica, y cristalización de azúcar, esencial para predecir vida útil del helado y cambios de calidad.",
          de: "Sorptionsisothermen stellen Wasseraktivität (aw) gegen Feuchtigkeitsgehalt bei konstanter Temperatur dar. Sie sagen kritische aw-Werte für mikrobielles Wachstum, Lipidoxidation, Proteindenaturierung und Zuckerkristallisation voraus, wesentlich für die Vorhersage von Eishaltbarkeit und Qualitätsveränderungen.",
          nl: "Sorptie isothermen plotten wateractiviteit (aw) tegen vochtgehalte bij constante temperatuur. Ze voorspellen kritieke aw niveaus voor microbiële groei, lipide oxidatie, eiwit denaturatie, en suiker kristallisatie, essentieel voor voorspellen van ijs houdbaarheid en kwaliteits veranderingen."
        }
      },
      {
        question: {
          en: "What is the role of surface plasmon resonance (SPR) in ice cream protein interaction studies?",
          es: "¿Cuál es el papel de la resonancia de plasmón superficial (SPR) en estudios de interacción proteica del helado?",
          de: "Welche Rolle spielt Oberflächenplasmonresonanz (SPR) in Eisprotein-Wechselwirkungsstudien?",
          nl: "Wat is de rol van oppervlakte plasmon resonantie (SPR) in ijs eiwit interactie studies?"
        },
        options: [
          { en: "Only measures protein concentration", es: "Solo mide concentración de proteína", de: "Misst nur Proteinkonzentration", nl: "Meet alleen eiwit concentratie" },
          { en: "Real-time monitoring of protein-protein and protein-lipid binding interactions", es: "Monitoreo en tiempo real de interacciones de unión proteína-proteína y proteína-lípido", de: "Echtzeitüberwachung von Protein-Protein- und Protein-Lipid-Bindungswechselwirkungen", nl: "Real-time monitoring van eiwit-eiwit en eiwit-lipide binding interacties" },
          { en: "Only determines crystal structure", es: "Solo determina estructura cristalina", de: "Bestimmt nur Kristallstruktur", nl: "Bepaalt alleen kristal structuur" },
          { en: "Only measures optical density", es: "Solo mide densidad óptica", de: "Misst nur optische Dichte", nl: "Meet alleen optische dichtheid" }
        ],
        correct: 1,
        explanation: {
          en: "SPR detects refractive index changes at sensor surfaces when biomolecules bind, providing real-time kinetics of protein interactions. In ice cream research, it reveals how milk proteins interact with fat globules, emulsifiers, and stabilizers during processing and storage.",
          es: "SPR detecta cambios de índice refractivo en superficies de sensor cuando biomoléculas se unen, proporcionando cinéticas en tiempo real de interacciones proteicas. En investigación de helado, revela cómo proteínas lácteas interactúan con glóbulos de grasa, emulsificantes, y estabilizadores durante procesamiento y almacenamiento.",
          de: "SPR detektiert Brechungsindexänderungen an Sensoroberflächen, wenn Biomoleküle binden, bietet Echtzeitkinetik von Proteinwechselwirkungen. In der Eisforschung zeigt es, wie Milchproteine mit Fettkügelchen, Emulgatoren und Stabilisatoren während Verarbeitung und Lagerung interagieren.",
          nl: "SPR detecteert brekingsindex veranderingen op sensor oppervlakken wanneer biomoleculen binden, biedend real-time kinetiek van eiwit interacties. In ijs onderzoek onthult het hoe melkeiwitten interageren met vet bolletjes, emulgatoren, en stabilisatoren tijdens verwerking en opslag."
        }
      },
      {
        question: {
          en: "What is the thermodynamic basis for the Kelvin equation's application to ice cream crystallization?",
          es: "¿Cuál es la base termodinámica para la aplicación de la ecuación Kelvin a cristalización del helado?",
          de: "Was ist die thermodynamische Grundlage für die Anwendung der Kelvin-Gleichung auf Eiskristallisation?",
          nl: "Wat is de thermodynamische basis voor de Kelvin vergelijking's toepassing op ijs kristallisatie?"
        },
        options: [
          { en: "Only applies to temperature measurement", es: "Solo se aplica a medición de temperatura", de: "Gilt nur für Temperaturmessung", nl: "Geldt alleen voor temperatuur meting" },
          { en: "Relates surface curvature to vapor pressure and solubility of small particles", es: "Relaciona curvatura superficial con presión de vapor y solubilidad de partículas pequeñas", de: "Bezieht Oberflächenkrümmung auf Dampfdruck und Löslichkeit kleiner Teilchen", nl: "Relateert oppervlakte kromming aan dampdruk en oplosbaarheid van kleine deeltjes" },
          { en: "Only describes heat capacity", es: "Solo describe capacidad calorífica", de: "Beschreibt nur Wärmekapazität", nl: "Beschrijft alleen warmte capaciteit" },
          { en: "Only applies to liquid systems", es: "Solo se aplica a sistemas líquidos", de: "Gilt nur für flüssige Systeme", nl: "Geldt alleen voor vloeibare systemen" }
        ],
        correct: 1,
        explanation: {
          en: "Kelvin equation shows that small curved particles have higher vapor pressure than flat surfaces due to surface tension effects. This explains why small ice crystals have higher solubility and tendency to dissolve in favor of larger crystals during Ostwald ripening.",
          es: "La ecuación Kelvin muestra que partículas curvadas pequeñas tienen mayor presión de vapor que superficies planas debido a efectos de tensión superficial. Esto explica por qué cristales de hielo pequeños tienen mayor solubilidad y tendencia a disolverse a favor de cristales más grandes durante maduración de Ostwald.",
          de: "Die Kelvin-Gleichung zeigt, dass kleine gekrümmte Teilchen höheren Dampfdruck als flache Oberflächen aufgrund von Oberflächenspannungseffekten haben. Dies erklärt, warum kleine Eiskristalle höhere Löslichkeit und Tendenz haben, sich zugunsten größerer Kristalle während Ostwald-Reifung aufzulösen.",
          nl: "Kelvin vergelijking toont dat kleine gekromde deeltjes hogere dampdruk hebben dan vlakke oppervlakken door oppervlakte spanning effecten. Dit verklaart waarom kleine ijskristallen hogere oplosbaarheid en neiging hebben om op te lossen ten gunste van grotere kristallen tijdens Ostwald rijping."
        }
      },
      {
        question: {
          en: "What is the significance of the Flory-Huggins theory in ice cream polymer science?",
          es: "¿Cuál es la significancia de la teoría Flory-Huggins en ciencia de polímeros del helado?",
          de: "Was ist die Bedeutung der Flory-Huggins-Theorie in der Eispolymerwissenschaft?",
          nl: "Wat is de betekenis van de Flory-Huggins theorie in ijs polymeer wetenschap?"
        },
        options: [
          { en: "Only describes crystal formation", es: "Solo describe formación de cristales", de: "Beschreibt nur Kristallbildung", nl: "Beschrijft alleen kristal vorming" },
          { en: "Describes mixing thermodynamics of polymers and solvents in stabilizer solutions", es: "Describe termodinámica de mezcla de polímeros y solventes en soluciones estabilizadoras", de: "Beschreibt Mischthermodynamik von Polymeren und Lösungsmitteln in Stabilisatorlösungen", nl: "Beschrijft mengings thermodynamica van polymeren en oplosmiddelen in stabilisator oplossingen" },
          { en: "Only measures molecular weight", es: "Solo mide peso molecular", de: "Misst nur Molekulargewicht", nl: "Meet alleen molecuul gewicht" },
          { en: "Only applies to metals", es: "Solo se aplica a metales", de: "Gilt nur für Metalle", nl: "Geldt alleen voor metalen" }
        ],
        correct: 1,
        explanation: {
          en: "Flory-Huggins theory describes the thermodynamics of polymer-solvent mixing, predicting phase separation and compatibility. In ice cream, it explains stabilizer-water interactions, hydrocolloid effectiveness, and phase behavior of complex stabilizer blends.",
          es: "La teoría Flory-Huggins describe la termodinámica de mezcla polímero-solvente, prediciendo separación de fases y compatibilidad. En helado, explica interacciones estabilizador-agua, efectividad de hidrocoloides, y comportamiento de fases de mezclas complejas de estabilizadores.",
          de: "Die Flory-Huggins-Theorie beschreibt die Thermodynamik der Polymer-Lösungsmittel-Mischung, sagt Phasentrennung und Kompatibilität voraus. In Eis erklärt sie Stabilisator-Wasser-Wechselwirkungen, Hydrokolloid-Effektivität und Phasenverhalten komplexer Stabilisatorgemische.",
          nl: "Flory-Huggins theorie beschrijft de thermodynamica van polymeer-oplosmiddel menging, voorspellend fase scheiding en compatibiliteit. In ijs verklaart het stabilisator-water interacties, hydrocolloïd effectiviteit, en fase gedrag van complexe stabilisator mengsels."
        }
      },
      {
        question: {
          en: "What is the role of confocal laser scanning microscopy (CLSM) in ice cream microstructure analysis?",
          es: "¿Cuál es el papel de la microscopía confocal de barrido láser (CLSM) en análisis de microestructura del helado?",
          de: "Welche Rolle spielt konfokale Laser-Scanning-Mikroskopie (CLSM) in der Eismikrostruktur-Analyse?",
          nl: "Wat is de rol van confocale laser scanning microscopie (CLSM) in ijs microstructuur analyse?"
        },
        options: [
          { en: "Only measures surface temperature", es: "Solo mide temperatura superficial", de: "Misst nur Oberflächentemperatur", nl: "Meet alleen oppervlakte temperatuur" },
          { en: "Provides 3D visualization of fat networks, protein matrices, and air cell distribution", es: "Proporciona visualización 3D de redes de grasa, matrices proteicas, y distribución de células de aire", de: "Bietet 3D-Visualisierung von Fettnetzwerken, Proteinmatrizen und Luftzellenverteilung", nl: "Biedt 3D visualisatie van vet netwerken, eiwit matrices, en luchtcel distributie" },
          { en: "Only determines chemical composition", es: "Solo determina composición química", de: "Bestimmt nur chemische Zusammensetzung", nl: "Bepaalt alleen chemische samenstelling" },
          { en: "Only measures crystal hardness", es: "Solo mide dureza del cristal", de: "Misst nur Kristallhärte", nl: "Meet alleen kristal hardheid" }
        ],
        correct: 1,
        explanation: {
          en: "CLSM uses fluorescent probes to selectively stain different phases (fat, protein, water) and creates 3D images by optical sectioning. This reveals ice cream microstructure including fat network connectivity, protein distribution, air cell size/shape, and ice crystal morphology.",
          es: "CLSM usa sondas fluorescentes para teñir selectivamente diferentes fases (grasa, proteína, agua) y crea imágenes 3D por sección óptica. Esto revela microestructura del helado incluyendo conectividad de red de grasa, distribución proteica, tamaño/forma de células de aire, y morfología de cristales de hielo.",
          de: "CLSM verwendet Fluoreszenzsonden zur selektiven Färbung verschiedener Phasen (Fett, Protein, Wasser) und erstellt 3D-Bilder durch optische Schnittführung. Dies enthüllt Eismikrostruktur einschließlich Fettnetzwerk-Konnektivität, Proteinverteilung, Luftzellengröße/-form und Eiskristallmorphologie.",
          nl: "CLSM gebruikt fluorescente probes om selectief verschillende fasen (vet, eiwit, water) te kleuren en creëert 3D beelden door optische sectie. Dit onthult ijs microstructuur inclusief vet netwerk connectiviteit, eiwit distributie, luchtcel grootte/vorm, en ijskristal morfologie."
        }
      },
      {
        question: {
          en: "What is the significance of the Hansen solubility parameters (HSP) in ice cream stabilizer selection and functionality?",
          es: "¿Cuál es la significancia de los parámetros de solubilidad de Hansen (HSP) en selección y funcionalidad de estabilizadores de helado?",
          de: "Was ist die Bedeutung der Hansen-Löslichkeitsparameter (HSP) bei der Auswahl und Funktionalität von Eisstabilisatoren?",
          nl: "Wat is de betekenis van de Hansen oplosbaarheids parameters (HSP) in ijs stabilisator selectie en functionaliteit?"
        },
        options: [
          { en: "Only determines color compatibility", es: "Solo determina compatibilidad de color", de: "Bestimmt nur Farbkompatibilität", nl: "Bepaalt alleen kleur compatibiliteit" },
          { en: "Predicts polymer-solvent interactions and stabilizer effectiveness in complex ice cream systems", es: "Predice interacciones polímero-solvente y efectividad de estabilizadores en sistemas complejos de helado", de: "Sagt Polymer-Lösungsmittel-Wechselwirkungen und Stabilisatorwirksamkeit in komplexen Eissystemen voraus", nl: "Voorspelt polymeer-oplosmiddel interacties en stabilisator effectiviteit in complexe ijs systemen" },
          { en: "Only measures temperature resistance", es: "Solo mide resistencia a temperatura", de: "Misst nur Temperaturbeständigkeit", nl: "Meet alleen temperatuur weerstand" },
          { en: "Determines only crystal size", es: "Determina solo tamaño del cristal", de: "Bestimmt nur Kristallgröße", nl: "Bepaalt alleen kristal grootte" }
        ],
        correct: 1,
        explanation: {
          en: "Hansen solubility parameters quantify molecular interactions through dispersion, polar, and hydrogen bonding forces, allowing prediction of stabilizer-water-fat compatibility and optimal hydrocolloid selection for specific ice cream formulations based on thermodynamic compatibility principles.",
          es: "Los parámetros de solubilidad de Hansen cuantifican interacciones moleculares a través de fuerzas de dispersión, polares y enlaces de hidrógeno, permitiendo predicción de compatibilidad estabilizador-agua-grasa y selección óptima de hidrocoloides para formulaciones específicas de helado basadas en principios de compatibilidad termodinámica.",
          de: "Hansen-Löslichkeitsparameter quantifizieren molekulare Wechselwirkungen durch Dispersions-, polare und Wasserstoffbrückenkräfte, ermöglichen Vorhersage von Stabilisator-Wasser-Fett-Kompatibilität und optimale Hydrokolloid-Auswahl für spezifische Eisformulierungen basierend auf thermodynamischen Kompatibilitätsprinzipien.",
          nl: "Hansen oplosbaarheids parameters kwantificeren moleculaire interacties door dispersie, polaire, en waterstofbrug krachten, voorspelling mogelijk makend van stabilisator-water-vet compatibiliteit en optimale hydrocolloïd selectie voor specifieke ijs formuleringen gebaseerd op thermodynamische compatibiliteits principes."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level8;
  } else if (typeof window !== 'undefined') {
    window.level8 = level8;
  }
})();