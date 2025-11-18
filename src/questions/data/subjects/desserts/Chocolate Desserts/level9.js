// Chocolate Desserts Quiz - Level 9: Expert Chocolate Knowledge
(function() {
  const level9 = {
    name: {
      en: "Expert Chocolate Knowledge",
      es: "Conocimiento Experto de Chocolate",
      de: "Experten-Schokoladenwissen",
      nl: "Expert Chocoladekennis"
    },
    questions: [
      {
        question: {
          en: "What is the optimal fermentation temperature range for developing fine flavor in cacao beans?",
          es: "¿Cuál es el rango óptimo de temperatura de fermentación para desarrollar sabor fino en granos de cacao?",
          de: "Was ist der optimale Fermentationstemperaturbereich für die Entwicklung feinen Geschmacks in Kakaobohnen?",
          nl: "Wat is het optimale fermentatietemperatuurbereik voor het ontwikkelen van fijne smaak in cacaobonen?"
        },
        options: [
          { en: "35-40°C (95-104°F)", es: "35-40°C (95-104°F)", de: "35-40°C (95-104°F)", nl: "35-40°C (95-104°F)" },
          { en: "45-50°C (113-122°F)", es: "45-50°C (113-122°F)", de: "45-50°C (113-122°F)", nl: "45-50°C (113-122°F)" },
          { en: "50-55°C (122-131°F)", es: "50-55°C (122-131°F)", de: "50-55°C (122-131°F)", nl: "50-55°C (122-131°F)" },
          { en: "60-65°C (140-149°F)", es: "60-65°C (140-149°F)", de: "60-65°C (140-149°F)", nl: "60-65°C (140-149°F)" }
        ],
        correct: 1,
        explanation: {
          en: "The optimal fermentation temperature for fine flavor development is 45-50°C (113-122°F). This range allows proper enzymatic reactions while preventing excessive temperature that would destroy delicate flavor compounds.",
          es: "La temperatura óptima de fermentación para el desarrollo de sabor fino es 45-50°C (113-122°F). Este rango permite reacciones enzimáticas apropiadas mientras previene temperatura excesiva que destruiría compuestos de sabor delicados.",
          de: "Die optimale Fermentationstemperatur für feine Geschmacksentwicklung ist 45-50°C (113-122°F). Dieser Bereich ermöglicht ordnungsgemäße enzymatische Reaktionen und verhindert übermäßige Temperatur, die empfindliche Geschmacksverbindungen zerstören würde.",
          nl: "De optimale fermentatietemperatuur voor fijne smaakontw<>ikkeling is 45-50°C (113-122°F). Dit bereik maakt juiste enzymatische reacties mogelijk terwijl overmatige temperatuur wordt voorkomen die delicate smaakverbindingen zou vernietigen."
        }
      },
      {
        question: {
          en: "Which specific tannin compound is for astringency in unfermented cacao beans?",
          es: "¿Qué compuesto específico de tanino es principalmente responsable de la astringencia en granos de cacao no fermentados?",
          de: "Welche spezifische Tanninverbindung ist hauptsächlich für die Adstringenz in unfermentierten Kakaobohnen verantwortlich?",
          nl: "Welke specifieke tannine verbinding is voornamelijk verantwoordelijk voor samentrekking in ongefermenteerde cacaobonen?"
        },
        options: [
          { en: "Epicatechin", es: "Epicatequina", de: "Epicatechin", nl: "Epicatechine" },
          { en: "Procyanidin B2", es: "Procianidina B2", de: "Procyanidin B2", nl: "Procyanidine B2" },
          { en: "Catechin gallate", es: "Catequina galato", de: "Catechin-Gallat", nl: "Catechine gallaat" },
          { en: "Prodelphinidin", es: "Prodelfindina", de: "Prodelphinidin", nl: "Prodelfindine" }
        ],
        correct: 1,
        explanation: {
          en: "Procyanidin B2 is the primary tannin compound responsible for astringency in unfermented cacao beans. During fermentation, this compound is broken down, reducing astringency and bitterness.",
          es: "La procianidina B2 es el compuesto de tanino principal responsable de la astringencia en granos de cacao no fermentados. Durante la fermentación, este compuesto se descompone, reduciendo astringencia y amargura.",
          de: "Procyanidin B2 ist die primäre Tanninverbindung, die für Adstringenz in unfermentierten Kakaobohnen verantwortlich ist. Während der Fermentation wird diese Verbindung abgebaut, wodurch Adstringenz und Bitterkeit reduziert werden.",
          nl: "Procyanidine B2 is de primaire tannine verbinding verantwoordelijk voor samentrekking in ongefermenteerde cacaobonen. Tijdens fermentatie wordt deze verbinding afgebroken, wat samentrekking en bitterheid vermindert."
        }
      },
      {
        question: {
          en: "What is the critical water activity threshold below which chocolate becomes shelf-stable?",
          es: "¿Cuál es el umbral crítico de actividad del agua por debajo del cual el chocolate se vuelve estable en almacenamiento?",
          de: "Was ist die kritische Wasseraktivitätsschwelle, unter der Schokolade lagerstabil wird?",
          nl: "Wat is de kritieke wateractiviteitsdrempel waaronder chocolade houdbaar wordt?"
        },
        options: [
          { en: "0.75", es: "0,75", de: "0,75", nl: "0,75" },
          { en: "0.65", es: "0,65", de: "0,65", nl: "0,65" },
          { en: "0.55", es: "0,55", de: "0,55", nl: "0,55" },
          { en: "0.45", es: "0,45", de: "0,45", nl: "0,45" }
        ],
        correct: 1,
        explanation: {
          en: "Chocolate becomes shelf-stable below a water activity of 0.65. This low water activity prevents microbial growth and contributes to chocolate's long shelf life without refrigeration.",
          es: "El chocolate se vuelve estable en almacenamiento por debajo de una actividad del agua de 0,65. Esta baja actividad del agua previene el crecimiento microbiano y contribuye a la larga vida útil del chocolate sin refrigeración.",
          de: "Schokolade wird unter einer Wasseraktivität von 0,65 lagerstabil. Diese niedrige Wasseraktivität verhindert mikrobielles Wachstum und trägt zur langen Haltbarkeit von Schokolade ohne Kühlung bei.",
          nl: "Chocolade wordt houdbaar onder een wateractiviteit van 0,65. Deze lage wateractiviteit voorkomt microbiële groei en draagt bij aan chocolade's lange houdbaarheid zonder koeling."
        }
      },
      {
        question: {
          en: "What is the name of the specific roasting defect that creates burnt, acrid flavors in chocolate?",
          es: "¿Cuál es el nombre del defecto específico de tostado que crea sabores quemados y acres en el chocolate?",
          de: "Wie heißt der spezifische Röstdefekt, der verbrannte, beißende Aromen in Schokolade erzeugt?",
          nl: "Wat is de naam van het specifieke roostdefect dat verbrande, scherpe smaken in chocolade creëert?"
        },
        options: [
          { en: "Pyrolysis", es: "Pirólisis", de: "Pyrolyse", nl: "Pyrolyse" },
          { en: "Carbonization", es: "Carbonización", de: "Karbonisierung", nl: "Carbonisatie" },
          { en: "Over-roasting", es: "Sobre-tostado", de: "Über-Röstung", nl: "Over-roosten" },
          { en: "Acetic burn", es: "Quemadura acética", de: "Essigsäure-Verbrennung", nl: "Azijnzuur verbranding" }
        ],
        correct: 0,
        explanation: {
          en: "Pyrolysis is the thermal decomposition that occurs when cacao beans are roasted at excessive temperatures, creating burnt, acrid flavors and destroying desirable flavor compounds.",
          es: "La pirólisis es la descomposición térmica que ocurre cuando los granos de cacao se tuestan a temperaturas excesivas, creando sabores quemados y acres y destruyendo compuestos de sabor deseables.",
          de: "Pyrolyse ist die thermische Zersetzung, die auftritt, wenn Kakaobohnen bei übermäßigen Temperaturen geröstet werden, wodurch verbrannte, beißende Aromen entstehen und wünschenswerte Geschmacksverbindungen zerstört werden.",
          nl: "Pyrolyse is de thermische afbraak die optreedt wanneer cacaobonen op overmatige temperaturen worden geroosterd, wat verbrande, scherpe smaken creëert en gewenste smaakverbindingen vernietigt."
        }
      },
      {
        question: {
          en: "What is the professional term for the chocolate-making process that removes volatile acids?",
          es: "¿Cuál es el término profesional para el proceso de hacer chocolate que elimina ácidos volátiles?",
          de: "Was ist der professionelle Begriff für den Schokoladenherstellungsprozess, der flüchtige Säuren entfernt?",
          nl: "Wat is de professionele term voor het chocolademakingsproces dat vluchtige zuren verwijdert?"
        },
        options: [
          { en: "Deacidification", es: "Desacidificación", de: "Entsäuerung", nl: "Ontzuring" },
          { en: "Conching", es: "Conchado", de: "Conchieren", nl: "Concheren" },
          { en: "Alkalizing", es: "Alcalinización", de: "Alkalisierung", nl: "Alkalysering" },
          { en: "Neutralization", es: "Neutralización", de: "Neutralisation", nl: "Neutralisatie" }
        ],
        correct: 1,
        explanation: {
          en: "Conching is the process that removes volatile acids, moisture, and other unwanted compounds while developing smooth texture and mellow flavors in chocolate through prolonged mixing and aeration.",
          es: "El conchado es el proceso que elimina ácidos volátiles, humedad y otros compuestos no deseados mientras desarrolla textura suave y sabores suaves en el chocolate a través de mezclado prolongado y aireación.",
          de: "Conchieren ist der Prozess, der flüchtige Säuren, Feuchtigkeit und andere unerwünschte Verbindungen entfernt, während durch prolongiertes Mischen und Belüften glatte Textur und milde Aromen in Schokolade entwickelt werden.",
          nl: "Concheren is het proces dat vluchtige zuren, vocht en andere ongewenste verbindingen verwijdert terwijl gladde textuur en zachte smaken in chocolade worden ontwikkeld door langdurig mengen en beluchten."
        }
      },
      {
        question: {
          en: "What is the specific name for chocolate's polymorphic transition from Form IV to Form V?",
          es: "¿Cuál es el nombre específico para la transición polimórfica del chocolate de Forma IV a Forma V?",
          de: "Wie heißt der spezifische Name für den polymorphen Übergang von Schokolade von Form IV zu Form V?",
          nl: "Wat is de specifieke naam voor chocolade's polymorfe overgang van Vorm IV naar Vorm V?"
        },
        options: [
          { en: "Beta-prime to Beta transition", es: "Transición Beta-prima a Beta", de: "Beta-Strich zu Beta Übergang", nl: "Beta-prime naar Beta overgang" },
          { en: "Gamma to Beta transformation", es: "Transformación Gamma a Beta", de: "Gamma zu Beta Transformation", nl: "Gamma naar Beta transformatie" },
          { en: "Alpha to Beta conversion", es: "Conversión Alfa a Beta", de: "Alpha zu Beta Konversion", nl: "Alpha naar Beta conversie" },
          { en: "Metastable crystallization", es: "Cristalización metaestable", de: "Metastabile Kristallisation", nl: "Metastabiele kristallisatie" }
        ],
        correct: 0,
        explanation: {
          en: "The transition from Form IV to Form V is called the Beta-prime to Beta transition. This transformation is crucial in tempering, as Form V (Beta) provides the desired stable crystal structure.",
          es: "La transición de Forma IV a Forma V se llama transición Beta-prima a Beta. Esta transformación es crucial en el templado, ya que la Forma V (Beta) proporciona la estructura cristalina estable deseada.",
          de: "Der Übergang von Form IV zu Form V wird Beta-Strich zu Beta Übergang genannt. Diese Transformation ist beim Temperieren entscheidend, da Form V (Beta) die gewünschte stabile Kristallstruktur liefert.",
          nl: "De overgang van Vorm IV naar Vorm V wordt de Beta-prime naar Beta overgang genoemd. Deze transformatie is cruciaal bij temperen, omdat Vorm V (Beta) de gewenste stabiele kristalstructuur levert."
        }
      },
      {
        question: {
          en: "What is the technical term for the undesirable white film that forms on chocolate due to poor storage?",
          es: "¿Cuál es el término técnico para la película blanca indeseable que se forma en el chocolate debido al mal almacenamiento?",
          de: "Was ist der technische Begriff für den unerwünschten weißen Film, der sich aufgrund schlechter Lagerung auf Schokolade bildet?",
          nl: "Wat is de technische term voor de ongewenste witte film die op chocolade vormt door slechte opslag?"
        },
        options: [
          { en: "Sugar efflux", es: "Eflujo de azúcar", de: "Zucker-Efflux", nl: "Suiker efflux" },
          { en: "Fat migration bloom", es: "Bloom de migración de grasa", de: "Fettmigrations-Reif", nl: "Vetmigratie uitslag" },
          { en: "Crystalline precipitation", es: "Precipitación cristalina", de: "Kristalline Präzipitation", nl: "Kristallijne precipitatie" },
          { en: "Polymorphic instability", es: "Inestabilidad polimórfica", de: "Polymorphe Instabilität", nl: "Polymorfe instabiliteit" }
        ],
        correct: 1,
        explanation: {
          en: "Fat migration bloom is the technical term for the white film caused by cocoa butter migrating to the surface due to temperature fluctuations, creating visible white or gray discoloration.",
          es: "Bloom de migración de grasa es el término técnico para la película blanca causada por la manteca de cacao que migra a la superficie debido a fluctuaciones de temperatura, creando decoloración blanca o gris visible.",
          de: "Fettmigrations-Reif ist der technische Begriff für den weißen Film, der durch Kakaobutter-Migration zur Oberfläche aufgrund von Temperaturschwankungen verursacht wird und sichtbare weiße oder graue Verfärbung erzeugt.",
          nl: "Vetmigratie uitslag is de technische term voor de witte film veroorzaakt door cacaoboter die naar het oppervlak migreert door temperatuurschommelingen, wat zichtbare witte of grijze verkleuring creëert."
        }
      },
      {
        question: {
          en: "What is the industry standard for measuring chocolate's fineness?",
          es: "¿Cuál es el estándar de la industria para medir la finura del chocolate?",
          de: "Was ist der Industriestandard für die Messung der Feinheit von Schokolade?",
          nl: "Wat is de industriestandaard voor het meten van chocolade's fijnheid?"
        },
        options: [
          { en: "Hegman gauge", es: "Medidor Hegman", de: "Hegman-Messgerät", nl: "Hegman meter" },
          { en: "Particle size analyzer", es: "Analizador de tamaño de partícula", de: "Partikelgrößenanalysator", nl: "Deeltjesgrootte analyzer" },
          { en: "Micrometer reading", es: "Lectura micrométrica", de: "Mikrometerablesun ", nl: "Micrometer aflezi " },
          { en: "Sieve analysis", es: "Análisis de tamiz", de: "Siebanalyse", nl: "Zeef analyse" }
        ],
        correct: 0,
        explanation: {
          en: "The Hegman gauge is the industry standard for measuring chocolate fineness. It measures particle size by determining the depth at which particles create scratches on a calibrated scale.",
          es: "El medidor Hegman es el estándar de la industria para medir la finura del chocolate. Mide el tamaño de partícula determinando la profundidad a la cual las partículas crean rayas en una escala calibrada.",
          de: "Das Hegman-Messgerät ist der Industriestandard für die Messung der Schokoladenfeinheit. Es misst Partikelgröße durch Bestimmung der Tiefe, bei der Partikel Kratzer auf einer kalibrierten Skala erzeugen.",
          nl: "De Hegman meter is de industriestandaard voor het meten van chocoladefijnheid. Het meet deeltjesgrootte door de diepte te bepalen waarbij deeltjes krassen maken op een gekalibreerde schaal."
        }
      },
      {
        question: {
          en: "What is the professional term for chocolate's resistance to heat during transport?",
          es: "¿Cuál es el término profesional para la resistencia del chocolate al calor durante el transporte?",
          de: "Was ist der professionelle Begriff für Schokolades Widerstand gegen Hitze während des Transports?",
          nl: "Wat is de professionele term voor chocolade's weerstand tegen hitte tijdens transport?"
        },
        options: [
          { en: "Thermal stability", es: "Estabilidad térmica", de: "Thermische Stabilität", nl: "Thermische stabiliteit" },
          { en: "Heat resistance", es: "Resistencia al calor", de: "Hitzebeständigkeit", nl: "Hitteweerstand" },
          { en: "Temperature tolerance", es: "Tolerancia a la temperatura", de: "Temperaturtoleranz", nl: "Temperatuurtolerantie" },
          { en: "Thermal endurance", es: "Resistencia térmica", de: "Thermische Ausdauer", nl: "Thermische uithoudingsvermogen" }
        ],
        correct: 0,
        explanation: {
          en: "Thermal stability refers to chocolate's ability to maintain its structure, appearance, and quality when exposed to varying temperatures during storage and transport.",
          es: "La estabilidad térmica se refiere a la capacidad del chocolate de mantener su estructura, apariencia y calidad cuando se expone a temperaturas variables durante almacenamiento y transporte.",
          de: "Thermische Stabilität bezieht sich auf Schokolades Fähigkeit, ihre Struktur, ihr Aussehen und ihre Qualität bei Exposition gegenüber wechselnden Temperaturen während Lagerung und Transport beizubehalten.",
          nl: "Thermische stabiliteit verwijst naar chocolade's vermogen om zijn structuur, uiterlijk en kwaliteit te behouden wanneer blootgesteld aan variërende temperaturen tijdens opslag en transport."
        }
      },
      {
        question: {
          en: "What is the technical name for the process of adding seed crystals to temper chocolate?",
          es: "¿Cuál es el nombre técnico para el proceso de agregar cristales semilla para templar chocolate?",
          de: "Was ist der technische Name für den Prozess des Hinzufügens von Impfkristallen zum Temperieren von Schokolade?",
          nl: "Wat is de technische naam voor het proces van zaadkristallen toevoegen om chocolade te temperen?"
        },
        options: [
          { en: "Crystalline inoculation", es: "Inoculación cristalina", de: "Kristalline Impfung", nl: "Kristallijne inoculatie" },
          { en: "Nucleation seeding", es: "Sembrado de nucleación", de: "Nukleations-Impfung", nl: "Nucleatie zaaien" },
          { en: "Beta-seeding", es: "Sembrado-beta", de: "Beta-Impfung", nl: "Beta-zaaien" },
          { en: "Crystal propagation", es: "Propagación cristalina", de: "Kristall-Vermehrung", nl: "Kristal propagatie" }
        ],
        correct: 2,
        explanation: {
          en: "Beta-seeding is the technical term for adding stable Form V crystal seeds to molten chocolate to promote proper crystallization during tempering.",
          es: "Sembrado-beta es el término técnico para agregar semillas de cristal estables Forma V al chocolate derretido para promover cristalización apropiada durante el templado.",
          de: "Beta-Impfung ist der technische Begriff für das Hinzufügen stabiler Form-V-Kristall-Samen zu geschmolzener Schokolade, um ordnungsgemäße Kristallisation während des Temperierens zu fördern.",
          nl: "Beta-zaaien is de technische term voor het toevoegen van stabiele Vorm V kristalzaden aan gesmolten chocolade om juiste kristallisatie tijdens temperen te bevorderen."
        }
      },
      {
        question: {
          en: "What is the critical pH range that affects chocolate's flavor development during processing?",
          es: "¿Cuál es el rango crítico de pH que afecta el desarrollo del sabor del chocolate durante el procesamiento?",
          de: "Was ist der kritische pH-Bereich, der die Geschmacksentwicklung von Schokolade während der Verarbeitung beeinflusst?",
          nl: "Wat is het kritieke pH-bereik dat chocolade's smaakontw<>ikkeling beïnvloedt tijdens verwerking?"
        },
        options: [
          { en: "3.8-4.2", es: "3,8-4,2", de: "3,8-4,2", nl: "3,8-4,2" },
          { en: "5.2-5.8", es: "5,2-5,8", de: "5,2-5,8", nl: "5,2-5,8" },
          { en: "6.5-7.2", es: "6,5-7,2", de: "6,5-7,2", nl: "6,5-7,2" },
          { en: "7.8-8.5", es: "7,8-8,5", de: "7,8-8,5", nl: "7,8-8,5" }
        ],
        correct: 1,
        explanation: {
          en: "The critical pH range of 5.2-5.8 affects flavor development, enzymatic reactions, and the formation of flavor compounds during chocolate processing and fermentation.",
          es: "El rango crítico de pH de 5,2-5,8 afecta el desarrollo del sabor, reacciones enzimáticas y la formación de compuestos de sabor durante el procesamiento y fermentación del chocolate.",
          de: "Der kritische pH-Bereich von 5,2-5,8 beeinflusst Geschmacksentwicklung, enzymatische Reaktionen und die Bildung von Geschmacksverbindungen während Schokoladenverarbeitung und Fermentation.",
          nl: "Het kritieke pH-bereik van 5,2-5,8 beïnvloedt smaakontw<>ikkeling, enzymatische reacties en de vorming van smaakverbindingen tijdens chocoladeverwerking en fermentatie."
        }
      },
      {
        question: {
          en: "What is the technical term for chocolate's ability to break cleanly with a sharp sound?",
          es: "¿Cuál es el término técnico para la capacidad del chocolate de romperse limpiamente con un sonido agudo?",
          de: "Was ist der technische Begriff für Schokolades Fähigkeit, sauber mit einem scharfen Geräusch zu brechen?",
          nl: "Wat is de technische term voor chocolade's vermogen om schoon te breken met een scherp geluid?"
        },
        options: [
          { en: "Fracture mechanics", es: "Mecánica de fractura", de: "Bruchmechanik", nl: "Breukmechanica" },
          { en: "Snap characteristics", es: "Características de chasquido", de: "Bruch-Eigenschaften", nl: "Knak eigenschappen" },
          { en: "Brittle failure", es: "Falla frágil", de: "Spröder Bruch", nl: "Brosse breuk" },
          { en: "Crystalline fracture", es: "Fractura cristalina", de: "Kristalline Fraktur", nl: "Kristallijne breuk" }
        ],
        correct: 1,
        explanation: {
          en: "Snap characteristics refer to the professional evaluation of how chocolate breaks, including the sound produced and the clean break pattern, which indicates proper tempering and crystal structure.",
          es: "Las características de chasquido se refieren a la evaluación profesional de cómo se rompe el chocolate, incluyendo el sonido producido y el patrón de rotura limpia, que indica templado apropiado y estructura cristalina.",
          de: "Bruch-Eigenschaften beziehen sich auf die professionelle Bewertung, wie Schokolade bricht, einschließlich des erzeugten Geräuschs und des sauberen Bruchmusters, was ordnungsgemäße Temperierung und Kristallstruktur anzeigt.",
          nl: "Knak eigenschappen verwijzen naar de professionele evaluatie van hoe chocolade breekt, inclusief het geproduceerde geluid en het schone breukpatroon, wat juiste tempering en kristalstructuur aangeeft."
        }
      },
      {
        question: {
          en: "What is the professional standard for chocolate's gloss measurement?",
          es: "¿Cuál es el estándar profesional para la medición del brillo del chocolate?",
          de: "Was ist der professionelle Standard für die Glanzmessung von Schokolade?",
          nl: "Wat is de professionele standaard voor chocolade's glans meting?"
        },
        options: [
          { en: "60° gloss units", es: "60° unidades de brillo", de: "60° Glanz-Einheiten", nl: "60° glans eenheden" },
          { en: "45° reflection index", es: "45° índice de reflexión", de: "45° Reflexionsindex", nl: "45° reflectie index" },
          { en: "20° specular measurement", es: "20° medición especular", de: "20° Spiegelnde Messung", nl: "20° speculaire meting" },
          { en: "85° surface analysis", es: "85° análisis de superficie", de: "85° Oberflächenanalyse", nl: "85° oppervlakte analyse" }
        ],
        correct: 0,
        explanation: {
          en: "60° gloss units is the professional standard for measuring chocolate's surface gloss. Well-tempered chocolate typically shows high gloss values, indicating proper crystal formation.",
          es: "60° unidades de brillo es el estándar profesional para medir el brillo de superficie del chocolate. El chocolate bien templado típicamente muestra valores altos de brillo, indicando formación cristalina apropiada.",
          de: "60° Glanz-Einheiten ist der professionelle Standard für die Messung des Oberflächenglanzes von Schokolade. Gut temperierte Schokolade zeigt typischerweise hohe Glanzwerte, was ordnungsgemäße Kristallbildung anzeigt.",
          nl: "60° glans eenheden is de professionele standaard voor het meten van chocolade's oppervlakteglans. Goed getemperde chocolade toont typisch hoge glanswaarden, wat juiste kristalvorming aangeeft."
        }
      },
      {
        question: {
          en: "What is the technical term for chocolate's flavor release pattern on the palate?",
          es: "¿Cuál es el término técnico para el patrón de liberación de sabor del chocolate en el paladar?",
          de: "Was ist der technische Begriff für Schokolades Geschmacksfreisetzungsmuster am Gaumen?",
          nl: "Wat is de technische term voor chocolade's smaakafgifte patroon op het gehemelte?"
        },
        options: [
          { en: "Organoleptic profile", es: "Perfil organoléptico", de: "Organoleptisches Profil", nl: "Organoleptisch profiel" },
          { en: "Gustatory sequence", es: "Secuencia gustativa", de: "Gustatorische Sequenz", nl: "Smaak volgorde" },
          { en: "Flavor kinetics", es: "Cinética de sabor", de: "Geschmacks-Kinetik", nl: "Smaak kinetiek" },
          { en: "Sensory dynamics", es: "Dinámica sensorial", de: "Sensorische Dynamik", nl: "Sensorische dynamiek" }
        ],
        correct: 2,
        explanation: {
          en: "Flavor kinetics describes the time-dependent release and perception of flavor compounds in chocolate, including initial impact, development, and finish on the palate.",
          es: "La cinética de sabor describe la liberación y percepción dependiente del tiempo de compuestos de sabor en el chocolate, incluyendo impacto inicial, desarrollo y final en el paladar.",
          de: "Geschmacks-Kinetik beschreibt die zeitabhängige Freisetzung und Wahrnehmung von Geschmacksverbindungen in Schokolade, einschließlich Anfangsimpakt, Entwicklung und Abgang am Gaumen.",
          nl: "Smaak kinetiek beschrijft de tijdsafhankelijke afgifte en perceptie van smaakverbindingen in chocolade, inclusief initiële impact, ontw<>ikkeling en afdronk op het gehemelte."
        }
      },
      {
        question: {
          en: "What is the industry term for chocolate's ability to release from molds cleanly?",
          es: "¿Cuál es el término de la industria para la capacidad del chocolate de separarse limpiamente de los moldes?",
          de: "Was ist der Industriebegriff für Schokolades Fähigkeit, sich sauber aus Formen zu lösen?",
          nl: "Wat is de industrieterm voor chocolade's vermogen om schoon los te komen van mallen?"
        },
        options: [
          { en: "Mold release properties", es: "Propiedades de liberación de molde", de: "Form-Trennungseigenschaften", nl: "Mal lossing eigenschappen" },
          { en: "Demolding characteristics", es: "Características de desmoldeo", de: "Entformungs-Eigenschaften", nl: "Ontvorming kenmerken" },
          { en: "Surface adhesion coefficient", es: "Coeficiente de adhesión superficial", de: "Oberflächenhaftungs-Koeffizient", nl: "Oppervlakte adhesie coëfficiënt" },
          { en: "Contraction factor", es: "Factor de contracción", de: "Schrumpfungsfaktor", nl: "Krimp factor" }
        ],
        correct: 1,
        explanation: {
          en: "Demolding characteristics refer to how well-tempered chocolate contracts slightly during cooling, allowing clean release from molds without breaking or sticking.",
          es: "Las características de desmoldeo se refieren a cómo el chocolate bien templado se contrae ligeramente durante el enfriamiento, permitiendo liberación limpia de moldes sin romperse o pegarse.",
          de: "Entformungs-Eigenschaften beziehen sich darauf, wie gut temperierte Schokolade während des Abkühlens leicht schrumpft und eine saubere Lösung aus Formen ohne Brechen oder Kleben ermöglicht.",
          nl: "Ontvorming kenmerken verwijzen naar hoe goed getemperde chocolade licht krimpt tijdens koeling, wat schone lossing van mallen mogelijk maakt zonder breken of kleven."
        }
      },
      {
        question: {
          en: "What is the professional term for evaluating chocolate's textural changes during mastication?",
          es: "¿Cuál es el término profesional para evaluar los cambios texturales del chocolate durante la masticación?",
          de: "Was ist der professionelle Begriff für die Bewertung von Schokolades texturellen Veränderungen während des Kauens?",
          nl: "Wat is de professionele term voor het evalueren van chocolade's textuurveranderingen tijdens kauwen?"
        },
        options: [
          { en: "Masticatory analysis", es: "Análisis masticatorio", de: "Kau-Analyse", nl: "Kauw analyse" },
          { en: "Oral tribology", es: "Tribología oral", de: "Orale Tribologie", nl: "Orale tribologie" },
          { en: "Rheological assessment", es: "Evaluación reológica", de: "Rheologische Bewertung", nl: "Rheologische beoordeling" },
          { en: "Textural progression mapping", es: "Mapeo de progresión textural", de: "Texturale Progressions-Kartierung", nl: "Texturele progressie mapping" }
        ],
        correct: 1,
        explanation: {
          en: "Oral tribology is the study of friction, lubrication, and textural changes that occur in the mouth during chocolate consumption, affecting mouthfeel and flavor release.",
          es: "La tribología oral es el estudio de fricción, lubricación y cambios texturales que ocurren en la boca durante el consumo de chocolate, afectando la sensación bucal y liberación de sabor.",
          de: "Orale Tribologie ist das Studium von Reibung, Schmierung und texturellen Veränderungen, die im Mund während des Schokoladenkonsums auftreten und Mundgefühl und Geschmacksfreisetzung beeinflussen.",
          nl: "Orale tribologie is de studie van wrijving, smering en textuurveranderingen die in de mond optreden tijdens chocoladeconsumptie, wat mondgevoel en smaakafgifte beïnvloedt."
        }
      },
      {
        question: {
          en: "What is the technical name for chocolate's thermal behavior analysis?",
          es: "¿Cuál es el nombre técnico para el análisis del comportamiento térmico del chocolate?",
          de: "Was ist der technische Name für die Analyse des thermischen Verhaltens von Schokolade?",
          nl: "Wat is de technische naam voor chocolade's thermisch gedrag analyse?"
        },
        options: [
          { en: "Thermal gravimetric analysis", es: "Análisis gravimétrico térmico", de: "Thermogravimetrische Analyse", nl: "Thermogravimetrische analyse" },
          { en: "Differential scanning calorimetry", es: "Calorimetría diferencial de barrido", de: "Differenz-Scanning-Kalorimetrie", nl: "Differentiële scanning calorimetrie" },
          { en: "Thermal mechanical analysis", es: "Análisis termomecánico", de: "Thermomechanische Analyse", nl: "Thermomechanische analyse" },
          { en: "Dynamic thermal profiling", es: "Perfilado térmico dinámico", de: "Dynamische Thermische Profilierung", nl: "Dynamische thermische profilering" }
        ],
        correct: 1,
        explanation: {
          en: "Differential scanning calorimetry (DSC) is the primary technique for analyzing chocolate's thermal behavior, measuring heat flow during melting, crystallization, and polymorphic transitions.",
          es: "La calorimetría diferencial de barrido (DSC) es la técnica principal para analizar el comportamiento térmico del chocolate, midiendo flujo de calor durante derretimiento, cristalización y transiciones polimórficas.",
          de: "Differenz-Scanning-Kalorimetrie (DSC) ist die primäre Technik zur Analyse des thermischen Verhaltens von Schokolade und misst Wärmefluss während Schmelzen, Kristallisation und polymorphen Übergängen.",
          nl: "Differentiële scanning calorimetrie (DSC) is de primaire techniek voor het analyseren van chocolade's thermisch gedrag, het meten van warmteflow tijdens smelten, kristallisatie en polymorfe overgangen."
        }
      },
      {
        question: {
          en: "What is the professional standard for chocolate's hardness measurement?",
          es: "¿Cuál es el estándar profesional para la medición de dureza del chocolate?",
          de: "Was ist der professionelle Standard für die Härtemessung von Schokolade?",
          nl: "Wat is de professionele standaard voor chocolade's hardheid meting?"
        },
        options: [
          { en: "Vickers hardness test", es: "Prueba de dureza Vickers", de: "Vickers-Härtetest", nl: "Vickers hardheidstest" },
          { en: "Brinell indentation", es: "Indentación Brinell", de: "Brinell-Eindruck", nl: "Brinell indrukking" },
          { en: "Penetrometer reading", es: "Lectura de penetrómetro", de: "Penetrometer-Ablesung", nl: "Penetrometer aflezing" },
          { en: "Shore durometer", es: "Durómetro Shore", de: "Shore-Durometer", nl: "Shore durometer" }
        ],
        correct: 2,
        explanation: {
          en: "Penetrometer reading is the professional standard for measuring chocolate hardness, determining the resistance to penetration under standardized conditions.",
          es: "La lectura de penetrómetro es el estándar profesional para medir la dureza del chocolate, determinando la resistencia a la penetración bajo condiciones estandarizadas.",
          de: "Penetrometer-Ablesung ist der professionelle Standard für die Messung der Schokoladenhärte und bestimmt den Widerstand gegen Eindringen unter standardisierten Bedingungen.",
          nl: "Penetrometer aflezing is de professionele standaard voor het meten van chocoladehardheid, het bepalen van weerstand tegen penetratie onder gestandaardiseerde omstandigheden."
        }
      },
      {
        question: {
          en: "What is the technical term for chocolate's aging process that improves flavor complexity?",
          es: "¿Cuál es el término técnico para el proceso de envejecimiento del chocolate que mejora la complejidad del sabor?",
          de: "Was ist der technische Begriff für Schokolades Alterungsprozess, der die Geschmackskomplexität verbessert?",
          nl: "Wat is de technische term voor chocolade's verouderingsproces dat smaakcomplexiteit verbetert?"
        },
        options: [
          { en: "Flavor maturation", es: "Maduración de sabor", de: "Geschmacksreifung", nl: "Smaak rijping" },
          { en: "Post-crystallization development", es: "Desarrollo post-cristalización", de: "Post-Kristallisations-Entwicklung", nl: "Post-kristallisatie ontw<>ikkeling" },
          { en: "Molecular gastronomy aging", es: "Envejecimiento de gastronomía molecular", de: "Molekulargastronomie-Alterung", nl: "Moleculaire gastronomie veroudering" },
          { en: "Sensory enhancement period", es: "Período de mejora sensorial", de: "Sensorische Verbesserungsperiode", nl: "Sensorische verbetering periode" }
        ],
        correct: 1,
        explanation: {
          en: "Post-crystallization development refers to the continued flavor and textural improvements that occur in chocolate after initial crystallization, through molecular interactions and structure optimization.",
          es: "El desarrollo post-cristalización se refiere a las mejoras continuas de sabor y textura que ocurren en el chocolate después de la cristalización inicial, a través de interacciones moleculares y optimización de estructura.",
          de: "Post-Kristallisations-Entwicklung bezieht sich auf die kontinuierlichen Geschmacks- und Texturverbesserungen, die in Schokolade nach der anfänglichen Kristallisation durch molekulare Wechselwirkungen und Strukturoptimierung auftreten.",
          nl: "Post-kristallisatie ontw<>ikkeling verwijst naar de voortdurende smaak- en textuurverbeteringen die in chocolade optreden na initiële kristallisatie, door moleculaire interacties en structuuroptimalisatie."
        }
      },
      {
        question: {
          en: "What is the eutectic effect in chocolate formulation?",
          es: "¿Qué es el efecto eutéctico en la formulación de chocolate?",
          de: "Was ist der eutektische Effekt in der Schokoladenformulierung?",
          nl: "Wat is het eutectisch effect in chocoladeformulering?"
        },
        options: [
          { en: "Melting point depression when fats are mixed", es: "Depresión del punto de fusión cuando se mezclan grasas", de: "Schmelzpunkterniedrigung beim Mischen von Fetten", nl: "Smeltpuntverlaging wanneer vetten worden gemengd" },
          { en: "Flavor enhancement through aging", es: "Mejora del sabor a través del envejecimiento", de: "Geschmacksverbesserung durch Alterung", nl: "Smaakverbetering door veroudering" },
          { en: "Color development during roasting", es: "Desarrollo del color durante el tostado", de: "Farbentwicklung beim Rösten", nl: "Kleurontwikkeling tijdens het roosten" },
          { en: "Sugar crystallization control", es: "Control de cristalización de azúcar", de: "Zuckerkristallisationskontrolle", nl: "Suikerkristallisatiecontrole" }
        ],
        correct: 0,
        explanation: {
          en: "The eutectic effect occurs when mixing different fats, causing the melting point to be lower than any individual component, affecting texture and mouthfeel in chocolate products.",
          es: "El efecto eutéctico ocurre al mezclar diferentes grasas, causando que el punto de fusión sea más bajo que cualquier componente individual, afectando la textura y sensación en boca en productos de chocolate.",
          de: "Der eutektische Effekt tritt beim Mischen verschiedener Fette auf, wodurch der Schmelzpunkt niedriger als bei jedem einzelnen Bestandteil ist, was Textur und Mundgefühl in Schokoladenprodukten beeinflusst.",
          nl: "Het eutectisch effect treedt op bij het mengen van verschillende vetten, waardoor het smeltpunt lager is dan van elk afzonderlijk component, wat de textuur en mondgevoel in chocoladeproducten beïnvloedt."
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