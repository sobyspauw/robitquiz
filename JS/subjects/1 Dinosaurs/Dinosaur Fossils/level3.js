// Dinosaur Fossils Quiz - Level 3: Knowledge about Dinosaur Fossils
(function() {
  const level3 = {
    name: {
      en: "Dinosaur Fossils Level 3",
      es: "Fosiles de Dinosaurios Nivel 3",
      de: "Dinosaurier Fossilien Stufe 3",
      nl: "Dino Fossielen Level 3"
    },
    questions: [
      {
        question: {
          en: "What are the ideal pH conditions for fossil preservation?",
          es: "¿Cuáles son las condiciones ideales de pH para la preservación de fósiles?",
          de: "Was sind die idealen pH-Bedingungen für die Fossilerhaltung?",
          nl: "Wat zijn de ideale pH-omstandigheden voor fossielpreservatie?"
        },
        options: [
          { en: "Neutral to slightly alkaline (pH 7-8)", es: "Neutro a ligeramente alcalino (pH 7-8)", de: "Neutral bis leicht alkalisch (pH 7-8)", nl: "Neutraal tot licht alkalisch (pH 7-8)" },
          { en: "Highly acidic (pH 3-4)", es: "Altamente ácido (pH 3-4)", de: "Stark sauer (pH 3-4)", nl: "Zeer zuur (pH 3-4)" },
          { en: "Highly alkaline (pH 10-11)", es: "Altamente alcalino (pH 10-11)", de: "Stark alkalisch (pH 10-11)", nl: "Zeer alkalisch (pH 10-11)" },
          { en: "Extremely acidic (pH 1-2)", es: "Extremadamente ácido (pH 1-2)", de: "Extrem sauer (pH 1-2)", nl: "Extreem zuur (pH 1-2)" }
        ],
        correct: 0,
        explanation: {
          en: "Neutral to slightly alkaline conditions preserve calcium phosphate and carbonate in bones and teeth, while acidic conditions dissolve these minerals.",
          es: "Las condiciones neutras a ligeramente alcalinas preservan el fosfato de calcio y carbonato en huesos y dientes, mientras que las condiciones ácidas disuelven estos minerales.",
          de: "Neutrale bis leicht alkalische Bedingungen erhalten Kalziumphosphat und Karbonat in Knochen und Zähnen, während saure Bedingungen diese Mineralien auflösen.",
          nl: "Neutrale tot licht alkalische omstandigheden bewaren calciumfosfaat en carbonaat in botten en tanden, terwijl zure omstandigheden deze mineralen oplossen."
        }
      },
      {
        question: {
          en: "During diagenesis, what happens to organic compounds in dinosaur bones?",
          es: "Durante la diagénesis, ¿qué pasa con los compuestos orgánicos en los huesos de dinosaurio?",
          de: "Was passiert während der Diagenese mit organischen Verbindungen in Dinosaurier-Knochen?",
          nl: "Wat gebeurt er tijdens diagenese met organische verbindingen in dinosaurusbotten?"
        },
        options: [
          { en: "They are gradually replaced by minerals", es: "Son gradualmente reemplazados por minerales", de: "Sie werden allmählich durch Mineralien ersetzt", nl: "Ze worden geleidelijk vervangen door mineralen" },
          { en: "They remain completely unchanged", es: "Permanecen completamente sin cambios", de: "Sie bleiben völlig unverändert", nl: "Ze blijven volledig onveranderd" },
          { en: "They multiply and spread", es: "Se multiplican y se extienden", de: "Sie vermehren sich und breiten sich aus", nl: "Ze vermenigvuldigen zich en verspreiden zich" },
          { en: "They turn into plastic", es: "Se convierten en plástico", de: "Sie verwandeln sich in Plastik", nl: "Ze veranderen in plastic" }
        ],
        correct: 0,
        explanation: {
          en: "Diagenesis is the process where organic materials are slowly replaced by minerals like silica, calcite, or pyrite while preserving the original structure.",
          es: "La diagénesis es el proceso donde los materiales orgánicos son lentamente reemplazados por minerales como sílice, calcita o pirita mientras preservan la estructura original.",
          de: "Diagenese ist der Prozess, bei dem organische Materialien langsam durch Mineralien wie Kieselsäure, Calcit oder Pyrit ersetzt werden, während die ursprüngliche Struktur erhalten bleibt.",
          nl: "Diagenese is het proces waarbij organische materialen langzaam worden vervangen door mineralen zoals silica, calciet of pyriet terwijl de oorspronkelijke structuur behouden blijft."
        }
      },
      {
        question: {
          en: "What role does groundwater play in fossil formation?",
          es: "¿Qué papel juega el agua subterránea en la formación de fósiles?",
          de: "Welche Rolle spielt Grundwasser bei der Fossilbildung?",
          nl: "Welke rol speelt grondwater bij fossilvorming?"
        },
        options: [
          { en: "It carries dissolved minerals into bone pores", es: "Transporta minerales disueltos hacia los poros de los huesos", de: "Es trägt gelöste Mineralien in Knochenporen", nl: "Het draagt opgeloste mineralen naar botporiën" },
          { en: "It prevents all fossilization", es: "Previene toda fosilización", de: "Es verhindert jede Fossilisation", nl: "Het voorkomt alle fossilisatie" },
          { en: "It only dissolves bones completely", es: "Solo disuelve los huesos completamente", de: "Es löst nur Knochen vollständig auf", nl: "Het lost alleen botten volledig op" },
          { en: "It has no effect on fossils", es: "No tiene efecto en los fósiles", de: "Es hat keinen Effekt auf Fossilien", nl: "Het heeft geen effect op fossielen" }
        ],
        correct: 0,
        explanation: {
          en: "Mineral-rich groundwater is crucial for permineralization, as it deposits silica, calcite, and other minerals into the porous structure of bones and teeth.",
          es: "El agua subterránea rica en minerales es crucial para la permineralización, ya que deposita sílice, calcita y otros minerales en la estructura porosa de huesos y dientes.",
          de: "Mineralreiches Grundwasser ist entscheidend für die Permineralisation, da es Kieselsäure, Calcit und andere Mineralien in die poröse Struktur von Knochen und Zähnen ablagert.",
          nl: "Mineraalrijk grondwater is cruciaal voor permineralisatie, omdat het silica, calciet en andere mineralen afzet in de poreuze structuur van botten en tanden."
        }
      },
      {
        question: {
          en: "Which mineral is most commonly found replacing original bone material in dinosaur fossils?",
          es: "¿Qué mineral se encuentra más comúnmente reemplazando el material óseo original en los fósiles de dinosaurios?",
          de: "Welches Mineral wird am häufigsten als Ersatz für ursprüngliches Knochenmaterial in Dinosaurier-Fossilien gefunden?",
          nl: "Welk mineraal wordt het meest voorkomend gevonden als vervanging van oorspronkelijk botmateriaal in dinosaurusfossielen?"
        },
        options: [
          { en: "Silica (SiO2)", es: "Sílice (SiO2)", de: "Kieselsäure (SiO2)", nl: "Silica (SiO2)" },
          { en: "Gold (Au)", es: "Oro (Au)", de: "Gold (Au)", nl: "Goud (Au)" },
          { en: "Iron (Fe)", es: "Hierro (Fe)", de: "Eisen (Fe)", nl: "IJzer (Fe)" },
          { en: "Silver (Ag)", es: "Plata (Ag)", de: "Silber (Ag)", nl: "Zilver (Ag)" }
        ],
        correct: 0,
        explanation: {
          en: "Silica is the most common replacement mineral because it's abundant in groundwater and forms stable, hard structures that preserve fine details.",
          es: "La sílice es el mineral de reemplazo más común porque es abundante en el agua subterránea y forma estructuras estables y duras que preservan detalles finos.",
          de: "Kieselsäure ist das häufigste Ersatzmineral, weil sie im Grundwasser reichlich vorhanden ist und stabile, harte Strukturen bildet, die feine Details bewahren.",
          nl: "Silica is het meest voorkomende vervangingsmineraal omdat het overvloedig aanwezig is in grondwater en stabiele, harde structuren vormt die fijne details bewaren."
        }
      },
      {
        question: {
          en: "What is pyritization in fossil preservation?",
          es: "¿Qué es la piritización en la preservación de fósiles?",
          de: "Was ist Pyritisierung in der Fossilerhaltung?",
          nl: "Wat is pyritisatie bij fossielpreservatie?"
        },
        options: [
          { en: "Replacement of organic matter with iron sulfide", es: "Reemplazo de materia orgánica con sulfuro de hierro", de: "Ersatz organischer Materie durch Eisensulfid", nl: "Vervanging van organisch materiaal door ijzersulfide" },
          { en: "Burning of fossils at high temperatures", es: "Quema de fósiles a altas temperaturas", de: "Verbrennung von Fossilien bei hohen Temperaturen", nl: "Verbranding van fossielen bij hoge temperaturen" },
          { en: "Freezing fossils in ice", es: "Congelación de fósiles en hielo", de: "Einfrieren von Fossilien in Eis", nl: "Bevriezen van fossielen in ijs" },
          { en: "Coating fossils with gold", es: "Recubrimiento de fósiles con oro", de: "Beschichtung von Fossilien mit Gold", nl: "Bedekking van fossielen met goud" }
        ],
        correct: 0,
        explanation: {
          en: "Pyritization occurs in oxygen-poor, sulfur-rich environments where iron sulfide (pyrite) replaces organic tissues, often preserving soft parts beautifully.",
          es: "La piritización ocurre en ambientes pobres en oxígeno y ricos en azufre donde el sulfuro de hierro (pirita) reemplaza los tejidos orgánicos, a menudo preservando bellamente las partes blandas.",
          de: "Pyritisierung tritt in sauerstoffarmen, schwefelreichen Umgebungen auf, wo Eisensulfid (Pyrit) organische Gewebe ersetzt und oft weiche Teile wunderschön bewahrt.",
          nl: "Pyritisatie treedt op in zuurstof-arme, zwavel-rijke omgevingen waar ijzersulfide (pyriet) organische weefsels vervangt, vaak zachte delen prachtig bewarend."
        }
      },
      {
        question: {
          en: "What is the difference between autochthonous and allochthonous fossil assemblages?",
          es: "¿Cuál es la diferencia entre conjuntos fósiles autóctonos y alóctonos?",
          de: "Was ist der Unterschied zwischen autochthonen und allochthonen Fossilvergesellschaftungen?",
          nl: "Wat is het verschil tussen autochtone en allochtone fossielassemblages?"
        },
        options: [
          { en: "Autochthonous fossils are found where organisms lived, allochthonous are transported", es: "Los fósiles autóctonos se encuentran donde vivían los organismos, los alóctonos son transportados", de: "Autochthone Fossilien werden dort gefunden, wo Organismen lebten, allochthone sind transportiert", nl: "Autochtone fossielen worden gevonden waar organismen leefden, allochtone zijn getransporteerd" },
          { en: "They are the same thing", es: "Son la misma cosa", de: "Sie sind dasselbe", nl: "Ze zijn hetzelfde" },
          { en: "Autochthonous fossils are older", es: "Los fósiles autóctonos son más antiguos", de: "Autochthone Fossilien sind älter", nl: "Autochtone fossielen zijn ouder" },
          { en: "Allochthonous fossils are better preserved", es: "Los fósiles alóctonos están mejor preservados", de: "Allochthone Fossilien sind besser erhalten", nl: "Allochtone fossielen zijn beter bewaard" }
        ],
        correct: 0,
        explanation: {
          en: "Autochthonous assemblages represent organisms that lived and died in the same location, while allochthonous assemblages contain fossils transported from other areas by water or wind.",
          es: "Los conjuntos autóctonos representan organismos que vivieron y murieron en la misma ubicación, mientras que los conjuntos alóctonos contienen fósiles transportados de otras áreas por agua o viento.",
          de: "Autochthone Vergesellschaftungen repräsentieren Organismen, die am selben Ort lebten und starben, während allochthone Vergesellschaftungen Fossilien enthalten, die durch Wasser oder Wind aus anderen Gebieten transportiert wurden.",
          nl: "Autochtone assemblages vertegenwoordigen organismen die op dezelfde locatie leefden en stierven, terwijl allochtone assemblages fossielen bevatten die door water of wind uit andere gebieden zijn getransporteerd."
        }
      },
      {
        question: {
          en: "What causes differential preservation in fossil assemblages?",
          es: "¿Qué causa la preservación diferencial en los conjuntos fósiles?",
          de: "Was verursacht differentielle Erhaltung in Fossilvergesellschaftungen?",
          nl: "Wat veroorzaakt differentiële preservatie in fossielassemblages?"
        },
        options: [
          { en: "Different durability of body parts and environmental factors", es: "Diferente durabilidad de las partes del cuerpo y factores ambientales", de: "Unterschiedliche Haltbarkeit von Körperteilen und Umweltfaktoren", nl: "Verschillende duurzaamheid van lichaamsdelen en omgevingsfactoren" },
          { en: "All parts preserve equally", es: "Todas las partes se preservan igualmente", de: "Alle Teile erhalten sich gleich", nl: "Alle delen bewaren zich gelijk" },
          { en: "Only size matters", es: "Solo el tamaño importa", de: "Nur die Größe zählt", nl: "Alleen grootte telt" },
          { en: "Random chance only", es: "Solo casualidad aleatoria", de: "Nur zufälliger Zufall", nl: "Alleen willekeurig toeval" }
        ],
        correct: 0,
        explanation: {
          en: "Hard parts like bones, teeth, and shells preserve better than soft tissues, and local conditions like pH, oxygen levels, and mineral content affect preservation quality.",
          es: "Las partes duras como huesos, dientes y caparazones se preservan mejor que los tejidos blandos, y las condiciones locales como pH, niveles de oxígeno y contenido mineral afectan la calidad de preservación.",
          de: "Harte Teile wie Knochen, Zähne und Schalen erhalten sich besser als Weichgewebe, und lokale Bedingungen wie pH, Sauerstoffgehalt und Mineralgehalt beeinflussen die Erhaltungsqualität.",
          nl: "Harde delen zoals botten, tanden en schelpen bewaren beter dan zachte weefsels, en lokale omstandigheden zoals pH, zuurstofniveaus en mineraalgehalte beïnvloeden de preservatiekwaliteit."
        }
      },
      {
        question: {
          en: "What is recrystallization in fossil formation?",
          es: "¿Qué es la recristalización en la formación de fósiles?",
          de: "Was ist Rekristallisation in der Fossilbildung?",
          nl: "Wat is herkristallisatie bij fossilvorming?"
        },
        options: [
          { en: "Original minerals reorganize into larger, more stable crystal structures", es: "Los minerales originales se reorganizan en estructuras cristalinas más grandes y estables", de: "Ursprüngliche Mineralien reorganisieren sich zu größeren, stabileren Kristallstrukturen", nl: "Oorspronkelijke mineralen reorganiseren zich tot grotere, stabielere kristalstructuren" },
          { en: "Fossils become transparent", es: "Los fósiles se vuelven transparentes", de: "Fossilien werden durchsichtig", nl: "Fossielen worden transparant" },
          { en: "Fossils turn into glass", es: "Los fósiles se convierten en vidrio", de: "Fossilien verwandeln sich in Glas", nl: "Fossielen veranderen in glas" },
          { en: "Fossils multiply in number", es: "Los fósiles se multiplican en número", de: "Fossilien vermehren sich zahlenmäßig", nl: "Fossielen vermenigvuldigen in aantal" }
        ],
        correct: 0,
        explanation: {
          en: "Recrystallization involves the reorganization of original crystal structures into larger, more stable forms, often changing aragonite to calcite in shells.",
          es: "La recristalización involucra la reorganización de estructuras cristalinas originales en formas más grandes y estables, a menudo cambiando aragonita a calcita en conchas.",
          de: "Rekristallisation beinhaltet die Reorganisation ursprünglicher Kristallstrukturen in größere, stabilere Formen, oft die Umwandlung von Aragonit zu Calcit in Schalen.",
          nl: "Herkristallisatie behelst de reorganisatie van oorspronkelijke kristalstructuren tot grotere, stabielere vormen, vaak veranderend van aragoniet naar calciet in schelpen."
        }
      },
      {
        question: {
          en: "What is a Konservat-Lagerstätte?",
          es: "¿Qué es un Konservat-Lagerstätte?",
          de: "Was ist eine Konservat-Lagerstätte?",
          nl: "Wat is een Konservat-Lagerstätte?"
        },
        options: [
          { en: "A deposit with exceptionally preserved fossils including soft tissues", es: "Un depósito con fósiles excepcionalmente preservados incluyendo tejidos blandos", de: "Eine Lagerstätte mit außergewöhnlich erhaltenen Fossilien einschließlich Weichgewebe", nl: "Een afzetting met uitzonderlijk bewaarde fossielen inclusief zachte weefsels" },
          { en: "A type of dinosaur bone", es: "Un tipo de hueso de dinosaurio", de: "Eine Art Dinosaurier-Knochen", nl: "Een type dinosaurusbot" },
          { en: "A fossilized plant", es: "Una planta fosilizada", de: "Eine fossile Pflanze", nl: "Een gefossiliseerde plant" },
          { en: "A rock formation", es: "Una formación rocosa", de: "Eine Gesteinsformation", nl: "Een gesteenteformatie" }
        ],
        correct: 0,
        explanation: {
          en: "Konservat-Lagerstätten are rare fossil deposits where exceptional preservation conditions allowed soft tissues, feathers, and even internal organs to fossilize.",
          es: "Los Konservat-Lagerstätten son depósitos fósiles raros donde las condiciones excepcionales de preservación permitieron que tejidos blandos, plumas e incluso órganos internos se fosilizaran.",
          de: "Konservat-Lagerstätten sind seltene Fossil-Lagerstätten, wo außergewöhnliche Erhaltungsbedingungen es ermöglichten, dass Weichgewebe, Federn und sogar innere Organe fossilierten.",
          nl: "Konservat-Lagerstätten zijn zeldzame fossielafzettingen waar uitzonderlijke preservatieomstandigheden het mogelijk maakten dat zachte weefsels, veren en zelfs inwendige organen fossiliseerden."
        }
      },
      {
        question: {
          en: "What environmental condition favors carbonization of organic remains?",
          es: "¿Qué condición ambiental favorece la carbonización de restos orgánicos?",
          de: "Welche Umweltbedingung begünstigt die Karbonisierung organischer Überreste?",
          nl: "Welke omgevingsomstandigheid bevordert carbonisatie van organische resten?"
        },
        options: [
          { en: "Anoxic (oxygen-free) conditions with heat and pressure", es: "Condiciones anóxicas (sin oxígeno) con calor y presión", de: "Anoxische (sauerstofffreie) Bedingungen mit Hitze und Druck", nl: "Anoxische (zuurstofvrije) omstandigheden met hitte en druk" },
          { en: "High oxygen with cold temperatures", es: "Alto oxígeno con temperaturas frías", de: "Hoher Sauerstoff mit kalten Temperaturen", nl: "Hoge zuurstof met koude temperaturen" },
          { en: "Dry desert conditions", es: "Condiciones secas de desierto", de: "Trockene Wüstenbedingungen", nl: "Droge woestijnomstandigheden" },
          { en: "Underwater with high oxygen", es: "Bajo agua con alto oxígeno", de: "Unter Wasser mit hohem Sauerstoff", nl: "Onder water met hoge zuurstof" }
        ],
        correct: 0,
        explanation: {
          en: "Carbonization occurs when organic matter is compressed under anoxic conditions, driving off hydrogen and oxygen while concentrating carbon to form a thin film.",
          es: "La carbonización ocurre cuando la materia orgánica se comprime bajo condiciones anóxicas, expulsando hidrógeno y oxígeno mientras concentra carbono para formar una película delgada.",
          de: "Karbonisierung tritt auf, wenn organische Materie unter anoxischen Bedingungen komprimiert wird, wobei Wasserstoff und Sauerstoff ausgetrieben werden, während Kohlenstoff konzentriert wird, um einen dünnen Film zu bilden.",
          nl: "Carbonisatie treedt op wanneer organisch materiaal wordt samengeperst onder anoxische omstandigheden, waarbij waterstof en zuurstof worden weggedreven terwijl koolstof wordt geconcentreerd om een dunne film te vormen."
        }
      },
      {
        question: {
          en: "What is the significance of bone bed formations in paleontology?",
          es: "¿Cuál es la importancia de las formaciones de lechos de huesos en paleontología?",
          de: "Was ist die Bedeutung von Knochenbett-Formationen in der Paläontologie?",
          nl: "Wat is de betekenis van botbedformaties in de paleontologie?"
        },
        options: [
          { en: "They represent mass mortality events or concentrated accumulations", es: "Representan eventos de mortalidad masiva o acumulaciones concentradas", de: "Sie repräsentieren Massensterben-Ereignisse oder konzentrierte Ansammlungen", nl: "Ze vertegenwoordigen massa-sterfte-gebeurtenissen of geconcentreerde ophopingen" },
          { en: "They are always fake fossils", es: "Siempre son fósiles falsos", de: "Sie sind immer gefälschte Fossilien", nl: "Ze zijn altijd nep-fossielen" },
          { en: "They only contain plant fossils", es: "Solo contienen fósiles de plantas", de: "Sie enthalten nur Pflanzenfossilien", nl: "Ze bevatten alleen plantfossielen" },
          { en: "They are modern animal bones", es: "Son huesos de animales modernos", de: "Sie sind moderne Tierknochen", nl: "Ze zijn moderne dierenbotten" }
        ],
        correct: 0,
        explanation: {
          en: "Bone beds often result from catastrophic events like floods, droughts, or volcanic activity that killed many animals simultaneously, providing insights into ancient ecosystems and events.",
          es: "Los lechos de huesos a menudo resultan de eventos catastróficos como inundaciones, sequías o actividad volcánica que mataron a muchos animales simultáneamente, proporcionando perspectivas sobre ecosistemas y eventos antiguos.",
          de: "Knochenbetten resultieren oft aus katastrophalen Ereignissen wie Überschwemmungen, Dürren oder vulkanischer Aktivität, die viele Tiere gleichzeitig töteten und Einblicke in alte Ökosysteme und Ereignisse bieten.",
          nl: "Botbedden zijn vaak het resultaat van catastrofale gebeurtenissen zoals overstromingen, droogtes of vulkanische activiteit die veel dieren tegelijkertijd doodden, wat inzichten geeft in oude ecosystemen en gebeurtenissen."
        }
      },
      {
        question: {
          en: "What is phosphatization in fossil preservation?",
          es: "¿Qué es la fosfatización en la preservación de fósiles?",
          de: "Was ist Phosphatisierung in der Fossilerhaltung?",
          nl: "Wat is fosfatisatie bij fossielpreservatie?"
        },
        options: [
          { en: "Replacement of tissues with calcium phosphate minerals", es: "Reemplazo de tejidos con minerales de fosfato de calcio", de: "Ersatz von Geweben durch Kalziumphosphat-Mineralien", nl: "Vervanging van weefsels door calciumfosfaatmineralen" },
          { en: "Addition of artificial colors", es: "Adición de colores artificiales", de: "Zusatz künstlicher Farben", nl: "Toevoeging van kunstmatige kleuren" },
          { en: "Freezing in phosphate ice", es: "Congelación en hielo de fosfato", de: "Einfrieren in Phosphateis", nl: "Bevriezen in fosfaatijs" },
          { en: "Burning with phosphate", es: "Quema con fosfato", de: "Verbrennung mit Phosphat", nl: "Verbranding met fosfaat" }
        ],
        correct: 0,
        explanation: {
          en: "Phosphatization involves the replacement of original organic material with phosphate minerals, often preserving cellular details and occurring in marine environments.",
          es: "La fosfatización involucra el reemplazo del material orgánico original con minerales de fosfato, a menudo preservando detalles celulares y ocurriendo en ambientes marinos.",
          de: "Phosphatisierung beinhaltet den Ersatz ursprünglichen organischen Materials durch Phosphat-Mineralien, oft unter Erhaltung zellulärer Details und in marinen Umgebungen auftretend.",
          nl: "Fosfatisatie behelst de vervanging van oorspronkelijk organisch materiaal door fosfaatmineralen, vaak cellulaire details bewarend en voorkomend in mariene omgevingen."
        }
      },
      {
        question: {
          en: "What causes the formation of concretions around fossils?",
          es: "¿Qué causa la formación de concreciones alrededor de los fósiles?",
          de: "Was verursacht die Bildung von Konkretionen um Fossilien?",
          nl: "Wat veroorzaakt de vorming van concreties rond fossielen?"
        },
        options: [
          { en: "Localized cementation around decaying organic matter", es: "Cementación localizada alrededor de materia orgánica en descomposición", de: "Lokalisierte Zementierung um zerfallendes organisches Material", nl: "Gelokaliseerde cementering rond vergaan organisch materiaal" },
          { en: "Aliens building protective shells", es: "Alienígenas construyendo caparazones protectores", de: "Außerirdische, die Schutzhüllen bauen", nl: "Buitenaardsen die beschermende schalen bouwen" },
          { en: "Natural magnetism", es: "Magnetismo natural", de: "Natürlicher Magnetismus", nl: "Natuurlijk magnetisme" },
          { en: "Solar radiation", es: "Radiación solar", de: "Sonneneinstrahlung", nl: "Zonnestraling" }
        ],
        correct: 0,
        explanation: {
          en: "Concretions form when mineral-rich groundwater precipitates cement around decaying organisms, creating protective nodules that often preserve fossils in three dimensions.",
          es: "Las concreciones se forman cuando el agua subterránea rica en minerales precipita cemento alrededor de organismos en descomposición, creando nódulos protectores que a menudo preservan fósiles en tres dimensiones.",
          de: "Konkretionen entstehen, wenn mineralreiches Grundwasser Zement um zerfallende Organismen ausfällt und schützende Knollen bildet, die oft Fossilien dreidimensional erhalten.",
          nl: "Concreties vormen zich wanneer mineraalrijk grondwater cement neerslaat rond vergaande organismen, waardoor beschermende knollen ontstaan die fossielen vaak driedimensionaal bewaren."
        }
      },
      {
        question: {
          en: "What is the role of microbial activity in early fossil formation?",
          es: "¿Cuál es el papel de la actividad microbiana en la formación temprana de fósiles?",
          de: "Welche Rolle spielt mikrobielle Aktivität in der frühen Fossilbildung?",
          nl: "Wat is de rol van microbiële activiteit in vroege fossilvorming?"
        },
        options: [
          { en: "Microbes can both accelerate decay and promote mineralization", es: "Los microbios pueden acelerar la descomposición y promover la mineralización", de: "Mikroben können sowohl Verfall beschleunigen als auch Mineralisierung fördern", nl: "Microben kunnen zowel verval versnellen als mineralisatie bevorderen" },
          { en: "Microbes always prevent fossilization", es: "Los microbios siempre previenen la fosilización", de: "Mikroben verhindern immer Fossilisation", nl: "Microben voorkomen altijd fossilisatie" },
          { en: "Microbes have no effect on fossils", es: "Los microbios no tienen efecto en los fósiles", de: "Mikroben haben keinen Effekt auf Fossilien", nl: "Microben hebben geen effect op fossielen" },
          { en: "Microbes only eat fossils", es: "Los microbios solo comen fósiles", de: "Mikroben fressen nur Fossilien", nl: "Microben eten alleen fossielen" }
        ],
        correct: 0,
        explanation: {
          en: "Microbial activity can decompose soft tissues rapidly, but some bacteria also facilitate mineral precipitation that aids in fossil preservation, especially in biofilms.",
          es: "La actividad microbiana puede descomponer los tejidos blandos rápidamente, pero algunas bacterias también facilitan la precipitación mineral que ayuda en la preservación de fósiles, especialmente en biopelículas.",
          de: "Mikrobielle Aktivität kann Weichgewebe schnell zersetzen, aber einige Bakterien erleichtern auch Mineralpräzipitation, die bei der Fossilerhaltung hilft, besonders in Biofilmen.",
          nl: "Microbiële activiteit kan zachte weefsels snel afbreken, maar sommige bacteriën faciliteren ook mineraalneerslag die helpt bij fossielpreservatie, vooral in biofilms."
        }
      },
      {
        question: {
          en: "What is replacement fossilization?",
          es: "¿Qué es la fosilización por reemplazo?",
          de: "Was ist Ersatz-Fossilisation?",
          nl: "Wat is vervangingsfossilisatie?"
        },
        options: [
          { en: "Original material dissolved and replaced molecule by molecule", es: "Material original disuelto y reemplazado molécula por molécula", de: "Ursprüngliches Material gelöst und Molekül für Molekül ersetzt", nl: "Oorspronkelijk materiaal opgelost en molecuul voor molecuul vervangen" },
          { en: "Making copies of fossils in laboratories", es: "Hacer copias de fósiles en laboratorios", de: "Kopien von Fossilien in Labors erstellen", nl: "Kopieën van fossielen maken in laboratoria" },
          { en: "Trading fossils between museums", es: "Intercambiar fósiles entre museos", de: "Fossilien zwischen Museen tauschen", nl: "Fossielen ruilen tussen musea" },
          { en: "Finding new fossils to replace old ones", es: "Encontrar nuevos fósiles para reemplazar los antiguos", de: "Neue Fossilien finden, um alte zu ersetzen", nl: "Nieuwe fossielen vinden om oude te vervangen" }
        ],
        correct: 0,
        explanation: {
          en: "Replacement fossilization occurs when the original material is completely dissolved and simultaneously replaced by different minerals, maintaining the original form and structure.",
          es: "La fosilización por reemplazo ocurre cuando el material original se disuelve completamente y es simultáneamente reemplazado por diferentes minerales, manteniendo la forma y estructura original.",
          de: "Ersatz-Fossilisation tritt auf, wenn das ursprüngliche Material vollständig gelöst und gleichzeitig durch verschiedene Mineralien ersetzt wird, wobei die ursprüngliche Form und Struktur beibehalten wird.",
          nl: "Vervangingsfossilisatie treedt op wanneer het oorspronkelijke materiaal volledig wordt opgelost en gelijktijdig wordt vervangen door verschillende mineralen, waarbij de oorspronkelijke vorm en structuur behouden blijven."
        }
      },
      {
        question: {
          en: "What conditions favor the preservation of dinosaur soft tissues?",
          es: "¿Qué condiciones favorecen la preservación de tejidos blandos de dinosaurios?",
          de: "Welche Bedingungen begünstigen die Erhaltung von Dinosaurier-Weichgewebe?",
          nl: "Welke omstandigheden bevorderen de preservatie van dinosaurus zachte weefsels?"
        },
        options: [
          { en: "Rapid burial, low oxygen, and specific mineral chemistry", es: "Entierro rápido, poco oxígeno y química mineral específica", de: "Schnelle Begrabung, wenig Sauerstoff und spezifische Mineralchemie", nl: "Snelle begraving, lage zuurstof en specifieke mineraalchemie" },
          { en: "High temperatures and bright sunlight", es: "Altas temperaturas y luz solar brillante", de: "Hohe Temperaturen und helles Sonnenlicht", nl: "Hoge temperaturen en fel zonlicht" },
          { en: "Exposure to air for long periods", es: "Exposición al aire por largos períodos", de: "Langzeitbelichtung an der Luft", nl: "Blootstelling aan lucht voor lange perioden" },
          { en: "Regular movement by water currents", es: "Movimiento regular por corrientes de agua", de: "Regelmäßige Bewegung durch Wasserströmungen", nl: "Regelmatige beweging door waterstromingen" }
        ],
        correct: 0,
        explanation: {
          en: "Soft tissue preservation requires exceptional conditions including rapid burial to exclude oxygen, specific pH conditions, and the presence of minerals that can stabilize proteins and DNA.",
          es: "La preservación de tejidos blandos requiere condiciones excepcionales incluyendo entierro rápido para excluir oxígeno, condiciones específicas de pH y la presencia de minerales que pueden estabilizar proteínas y ADN.",
          de: "Weichgewebe-Erhaltung erfordert außergewöhnliche Bedingungen einschließlich schneller Begrabung um Sauerstoff auszuschließen, spezifische pH-Bedingungen und das Vorhandensein von Mineralien, die Proteine und DNA stabilisieren können.",
          nl: "Zachte weefselpreservatie vereist uitzonderlijke omstandigheden inclusief snelle begraving om zuurstof uit te sluiten, specifieke pH-omstandigheden en de aanwezigheid van mineralen die eiwitten en DNA kunnen stabiliseren."
        }
      },
      {
        question: {
          en: "What is dissolution and how does it affect fossil preservation?",
          es: "¿Qué es la disolución y cómo afecta la preservación de fósiles?",
          de: "Was ist Auflösung und wie beeinflusst sie die Fossilerhaltung?",
          nl: "Wat is oplossing en hoe beïnvloedt het fossielpreservatie?"
        },
        options: [
          { en: "Chemical breakdown of minerals that can destroy or create molds", es: "Descomposición química de minerales que puede destruir o crear moldes", de: "Chemischer Abbau von Mineralien, der zerstören oder Formen schaffen kann", nl: "Chemische afbraak van mineralen die kan vernietigen of mallen creëren" },
          { en: "Physical breaking of fossils", es: "Rotura física de fósiles", de: "Physisches Brechen von Fossilien", nl: "Fysieke breking van fossielen" },
          { en: "Growth of fossils over time", es: "Crecimiento de fósiles con el tiempo", de: "Wachstum von Fossilien über die Zeit", nl: "Groei van fossielen in de tijd" },
          { en: "Movement of fossils underground", es: "Movimiento de fósiles bajo tierra", de: "Bewegung von Fossilien unter der Erde", nl: "Beweging van fossielen ondergronds" }
        ],
        correct: 0,
        explanation: {
          en: "Dissolution occurs when acidic groundwater chemically dissolves carbonate or other minerals, which can destroy fossils but also create detailed molds of original structures.",
          es: "La disolución ocurre cuando el agua subterránea ácida disuelve químicamente carbonatos u otros minerales, lo que puede destruir fósiles pero también crear moldes detallados de estructuras originales.",
          de: "Auflösung tritt auf, wenn saures Grundwasser chemisch Karbonate oder andere Mineralien auflöst, was Fossilien zerstören kann, aber auch detaillierte Formen ursprünglicher Strukturen schaffen kann.",
          nl: "Oplossing treedt op wanneer zuur grondwater chemisch carbonaten of andere mineralen oplost, wat fossielen kan vernietigen maar ook gedetailleerde mallen van oorspronkelijke structuren kan creëren."
        }
      },
      {
        question: {
          en: "What is biostratigraphy and how does it relate to fossil dating?",
          es: "¿Qué es la bioestratigrafía y cómo se relaciona con la datación de fósiles?",
          de: "Was ist Biostratigraphie und wie bezieht sie sich auf Fossildatierung?",
          nl: "Wat is biostratigrafie en hoe verhoudt het zich tot fossieldatering?"
        },
        options: [
          { en: "Using characteristic fossils to correlate and date rock layers", es: "Usar fósiles característicos para correlacionar y datar capas de roca", de: "Verwendung charakteristischer Fossilien zur Korrelation und Datierung von Gesteinsschichten", nl: "Gebruik van karakteristieke fossielen om gesteentelagen te correleren en dateren" },
          { en: "Study of fossil colors only", es: "Estudio de colores de fósiles solamente", de: "Studie nur von Fossilfarben", nl: "Studie van alleen fossielkleuren" },
          { en: "Measuring fossil sizes", es: "Medición de tamaños de fósiles", de: "Messung von Fossilgrößen", nl: "Meting van fossielgroottes" },
          { en: "Counting fossil teeth", es: "Conteo de dientes fósiles", de: "Zählung fossiler Zähne", nl: "Tellen van fossiele tanden" }
        ],
        correct: 0,
        explanation: {
          en: "Biostratigraphy uses index fossils - species that lived for short periods but were widespread - to identify and correlate rock formations of the same age across different locations.",
          es: "La bioestratigrafía usa fósiles índice - especies que vivieron por períodos cortos pero fueron ampliamente distribuidas - para identificar y correlacionar formaciones rocosas de la misma edad a través de diferentes ubicaciones.",
          de: "Biostratigraphie verwendet Leitfossilien - Arten, die kurze Zeit lebten aber weit verbreitet waren - um Gesteinsformationen desselben Alters an verschiedenen Orten zu identifizieren und zu korrelieren.",
          nl: "Biostratigrafie gebruikt indexfossielen - soorten die korte perioden leefden maar wijdverspreid waren - om gesteenteformaties van dezelfde leeftijd op verschillende locaties te identificeren en correleren."
        }
      },
      {
        question: {
          en: "What happens during compaction in sedimentary environments?",
          es: "¿Qué pasa durante la compactación en ambientes sedimentarios?",
          de: "Was passiert während der Kompaktion in sedimentären Umgebungen?",
          nl: "Wat gebeurt er tijdens compactie in sedimentaire omgevingen?"
        },
        options: [
          { en: "Sediments are pressed together, reducing pore space and flattening fossils", es: "Los sedimentos se comprimen juntos, reduciendo el espacio poroso y aplanando fósiles", de: "Sedimente werden zusammengepresst, reduzieren Porenraum und flachen Fossilien ab", nl: "Sedimenten worden samengeperst, waardoor poriënruimte vermindert en fossielen platgedrukt worden" },
          { en: "Fossils grow larger", es: "Los fósiles crecen más", de: "Fossilien werden größer", nl: "Fossielen worden groter" },
          { en: "Water is added to sediments", es: "Se añade agua a los sedimentos", de: "Wasser wird zu Sedimenten hinzugefügt", nl: "Water wordt toegevoegd aan sedimenten" },
          { en: "Fossils become colorful", es: "Los fósiles se vuelven coloridos", de: "Fossilien werden farbenfroh", nl: "Fossielen worden kleurrijk" }
        ],
        correct: 0,
        explanation: {
          en: "Compaction occurs as layers of sediment accumulate above fossils, pressing them together and often flattening delicate structures while driving out water and air.",
          es: "La compactación ocurre mientras las capas de sedimento se acumulan sobre los fósiles, comprimiéndolos y a menudo aplanando estructuras delicadas mientras expulsan agua y aire.",
          de: "Kompaktion tritt auf, wenn sich Sedimentschichten über Fossilien ansammeln, sie zusammenpressen und oft zarte Struktururen abflachen, während Wasser und Luft ausgetrieben werden.",
          nl: "Compactie treedt op wanneer lagen sediment zich boven fossielen ophopen, ze samenpersen en vaak delicate structuren platdrukken terwijl water en lucht worden weggedreven."
        }
      },
      {
        question: {
          en: "What is taphonomy in paleontology?",
          es: "¿Qué es la tafonomía en paleontología?",
          de: "Was ist Taphonomie in der Paläontologie?",
          nl: "Wat is tafonomie in de paleontologie?"
        },
        options: [
          { en: "The study of processes that affect organisms from death to fossilization", es: "El estudio de procesos que afectan organismos desde la muerte hasta la fosilización", de: "Die Studie von Prozessen, die Organismen vom Tod bis zur Fossilisation beeinflussen", nl: "De studie van processen die organismen beïnvloeden van dood tot fossilisatie" },
          { en: "The naming of new dinosaur species", es: "La denominación de nuevas especies de dinosaurios", de: "Die Benennung neuer Dinosaurierarten", nl: "Het benoemen van nieuwe dinosaurussoorten" },
          { en: "The measurement of fossil sizes", es: "La medición de tamaños de fósiles", de: "Die Messung von Fossilgrößen", nl: "Het meten van fossielgroottes" },
          { en: "The study of fossil colors", es: "El estudio de colores de fósiles", de: "Die Studie von Fossilfarben", nl: "De studie van fossielkleuren" }
        ],
        correct: 0,
        explanation: {
          en: "Taphonomy examines all the factors that influence preservation, including decay rates, burial conditions, scavenging, transport, and chemical changes that affect fossil formation.",
          es: "La tafonomía examina todos los factores que influyen en la preservación, incluyendo tasas de descomposición, condiciones de entierro, carroñeo, transporte y cambios químicos que afectan la formación de fósiles.",
          de: "Die Taphonomie untersucht alle Faktoren, die die Erhaltung beeinflussen, einschließlich Zerfallsraten, Begrabungsbedingungen, Aasfressung, Transport und chemische Veränderungen, die die Fossilbildung beeinflussen.",
          nl: "Tafonomie onderzoekt alle factoren die bewaring beïnvloeden, inclusief vervalsnelheden, begrafenisomstandigheden, aaseten, transport en chemische veranderingen die fossilvorming beïnvloeden."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
