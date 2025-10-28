// Chocolate Desserts Quiz - Level 3: Intermediate
(function() {
  const level3 = {
    name: {
      en: "Intermediate Chocolate Desserts",
      es: "Postres de Chocolate Intermedios",
      de: "Fortgeschrittene Schokoladendesserts",
      nl: "Gevorderde Chocoladedesserts"
    },
    questions: [
      {
        question: {
          en: "What is the ideal ratio of chocolate to cream for making ganache?",
          es: "¿Cuál es la proporción ideal de chocolate a crema para hacer ganache?",
          de: "Was ist das ideale Verhältnis von Schokolade zu Sahne für Ganache?",
          nl: "Wat is de ideale verhouding van chocolade tot room voor het maken van ganache?"
        },
        options: [
          { en: "1:1", es: "1:1", de: "1:1", nl: "1:1" },
          { en: "2:1", es: "2:1", de: "2:1", nl: "2:1" },
          { en: "3:1", es: "3:1", de: "3:1", nl: "3:1" },
          { en: "4:1", es: "4:1", de: "4:1", nl: "4:1" }
        ],
        correct: 0,
        explanation: {
          en: "The traditional ratio for ganache is 1:1 chocolate to cream by weight, creating a smooth, balanced mixture.",
          es: "La proporción tradicional para ganache es 1:1 de chocolate a crema por peso, creando una mezcla suave y equilibrada.",
          de: "Das traditionelle Verhältnis für Ganache ist 1:1 Schokolade zu Sahne nach Gewicht, wodurch eine glatte, ausgewogene Mischung entsteht.",
          nl: "De traditionele verhouding voor ganache is 1:1 chocolade tot room op gewicht, wat een gladde, evenwichtige mix creëert."
        }
      },
      {
        question: {
          en: "What technique is used to prevent chocolate from burning when melting?",
          es: "¿Qué técnica se usa para evitar que el chocolate se queme al derretirse?",
          de: "Welche Technik wird verwendet, um zu verhindern, dass Schokolade beim Schmelzen anbrennt?",
          nl: "Welke techniek wordt gebruikt om te voorkomen dat chocolade aanbrandt bij het smelten?"
        },
        options: [
          { en: "Double boiler method", es: "Método de baño María", de: "Wasserbad-Methode", nl: "Au bain-marie methode" },
          { en: "Direct heat only", es: "Solo calor directo", de: "Nur direkte Hitze", nl: "Alleen directe hitte" },
          { en: "Freezing first", es: "Congelar primero", de: "Zuerst einfrieren", nl: "Eerst bevriezen" },
          { en: "Adding salt", es: "Agregar sal", de: "Salz hinzufügen", nl: "Zout toevoegen" }
        ],
        correct: 0,
        explanation: {
          en: "The double boiler method (bain-marie) provides gentle, indirect heat that prevents chocolate from burning or seizing.",
          es: "El método de baño María proporciona calor suave e indirecto que evita que el chocolate se queme o se endurezca.",
          de: "Die Wasserbad-Methode bietet sanfte, indirekte Hitze, die verhindert, dass Schokolade anbrennt oder fest wird.",
          nl: "De au bain-marie methode zorgt voor zachte, indirecte warmte die voorkomt dat chocolade aanbrandt of vastloopt."
        }
      },
      {
        question: {
          en: "What ingredient helps chocolate mousse achieve its airy texture?",
          es: "¿Qué ingrediente ayuda al mousse de chocolate a lograr su textura aireada?",
          de: "Welche Zutat hilft Schokoladenmousse, seine luftige Textur zu erreichen?",
          nl: "Welk ingrediënt helpt chocolademousse zijn luchtige textuur te krijgen?"
        },
        options: [
          { en: "Whipped egg whites or cream", es: "Claras de huevo batidas o crema", de: "Geschlagenes Eiweiß oder Sahne", nl: "Geklopte eiwitten of room" },
          { en: "Extra chocolate", es: "Chocolate extra", de: "Extra Schokolade", nl: "Extra chocolade" },
          { en: "Gelatin", es: "Gelatina", de: "Gelatine", nl: "Gelatine" },
          { en: "Flour", es: "Harina", de: "Mehl", nl: "Meel" }
        ],
        correct: 0,
        explanation: {
          en: "Whipped egg whites or cream are folded into chocolate mousse to create air bubbles, giving it the characteristic light, airy texture.",
          es: "Las claras de huevo batidas o crema se incorporan al mousse de chocolate para crear burbujas de aire, dándole la textura ligera y aireada característica.",
          de: "Geschlagenes Eiweiß oder Sahne wird in Schokoladenmousse eingefaltet, um Luftblasen zu erzeugen und die charakteristische leichte, luftige Textur zu schaffen.",
          nl: "Geklopte eiwitten of room worden door chocolademousse gevouwen om luchtbelletjes te creëren, wat de karakteristieke lichte, luchtige textuur geeft."
        }
      },
      {
        question: {
          en: "What is the key to making successful chocolate soufflé?",
          es: "¿Cuál es la clave para hacer un soufflé de chocolate exitoso?",
          de: "Was ist der Schlüssel für ein erfolgreiches Schokoladen-Soufflé?",
          nl: "Wat is de sleutel tot het maken van een succesvolle chocoladesoufflé?"
        },
        options: [
          { en: "Properly beaten egg whites and gentle folding", es: "Claras de huevo bien batidas y plegado suave", de: "Richtig geschlagenes Eiweiß und sanftes Falten", nl: "Goed geklopte eiwitten en voorzichtig vouwen" },
          { en: "Using only dark chocolate", es: "Usar solo chocolate negro", de: "Nur dunkle Schokolade verwenden", nl: "Alleen pure chocolade gebruiken" },
          { en: "Adding extra sugar", es: "Agregar azúcar extra", de: "Extra Zucker hinzufügen", nl: "Extra suiker toevoegen" },
          { en: "Baking at high temperature", es: "Hornear a alta temperatura", de: "Bei hoher Temperatur backen", nl: "Bakken op hoge temperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Successful soufflé depends on properly beaten egg whites that create structure, and gentle folding to maintain the air bubbles.",
          es: "Un soufflé exitoso depende de claras de huevo bien batidas que crean estructura, y plegado suave para mantener las burbujas de aire.",
          de: "Ein erfolgreiches Soufflé hängt von richtig geschlagenem Eiweiß ab, das Struktur schafft, und sanftem Falten, um die Luftblasen zu erhalten.",
          nl: "Een succesvolle soufflé hangt af van goed geklopte eiwitten die structuur creëren, en voorzichtig vouwen om de luchtbelletjes te behouden."
        }
      },
      {
        question: {
          en: "What distinguishes a chocolate terrine from other chocolate desserts?",
          es: "¿Qué distingue una terrina de chocolate de otros postres de chocolate?",
          de: "Was unterscheidet eine Schokoladen-Terrine von anderen Schokoladendesserts?",
          nl: "Wat onderscheidt een chocolade terrine van andere chocoladedesserts?"
        },
        options: [
          { en: "Dense, layered structure served in slices", es: "Estructura densa y en capas servida en rodajas", de: "Dichte, geschichtete Struktur in Scheiben serviert", nl: "Dichte, gelaagde structuur geserveerd in plakjes" },
          { en: "Always frozen", es: "Siempre congelada", de: "Immer gefroren", nl: "Altijd bevroren" },
          { en: "Contains no chocolate", es: "No contiene chocolate", de: "Enthält keine Schokolade", nl: "Bevat geen chocolade" },
          { en: "Must be eaten hot", es: "Debe comerse caliente", de: "Muss heiß gegessen werden", nl: "Moet warm gegeten worden" }
        ],
        correct: 0,
        explanation: {
          en: "A chocolate terrine is a dense, rich dessert with a layered structure, typically molded in a loaf pan and served in elegant slices.",
          es: "Una terrina de chocolate es un postre denso y rico con estructura en capas, típicamente moldeada en molde alargado y servida en rodajas elegantes.",
          de: "Eine Schokoladen-Terrine ist ein dichtes, reichhaltiges Dessert mit geschichteter Struktur, typischerweise in einer Kastenform geformt und in eleganten Scheiben serviert.",
          nl: "Een chocolade terrine is een dicht, rijk dessert met een gelaagde structuur, meestal gevormd in een cakevorm en geserveerd in elegante plakjes."
        }
      },
      {
        question: {
          en: "What is the difference between chocolate custard and chocolate pudding?",
          es: "¿Cuál es la diferencia entre natillas de chocolate y pudín de chocolate?",
          de: "Was ist der Unterschied zwischen Schokoladencreme und Schokoladenpudding?",
          nl: "Wat is het verschil tussen chocolade custard en chocoladepudding?"
        },
        options: [
          { en: "Custard uses eggs for thickening, pudding uses starch", es: "Las natillas usan huevos para espesar, el pudín usa almidón", de: "Creme verwendet Eier zum Verdicken, Pudding verwendet Stärke", nl: "Custard gebruikt eieren om te verdikken, pudding gebruikt zetmeel" },
          { en: "No difference", es: "No hay diferencia", de: "Kein Unterschied", nl: "Geen verschil" },
          { en: "Pudding is always cold", es: "El pudín siempre está frío", de: "Pudding ist immer kalt", nl: "Pudding is altijd koud" },
          { en: "Custard contains no chocolate", es: "Las natillas no contienen chocolate", de: "Creme enthält keine Schokolade", nl: "Custard bevat geen chocolade" }
        ],
        correct: 0,
        explanation: {
          en: "Custard is thickened with eggs and cooked gently, while pudding typically uses cornstarch or other starches for thickening.",
          es: "Las natillas se espesan con huevos y se cocinan suavemente, mientras que el pudín típicamente usa maicena u otros almidones para espesar.",
          de: "Creme wird mit Eiern eingedickt und sanft gekocht, während Pudding typischerweise Maisstärke oder andere Stärken zum Verdicken verwendet.",
          nl: "Custard wordt verdikt met eieren en voorzichtig gekookt, terwijl pudding meestal maïszetmeel of andere zetmeelsoorten gebruikt om te verdikken."
        }
      },
      {
        question: {
          en: "What makes a chocolate dessert 'flourless'?",
          es: "¿Qué hace que un postre de chocolate sea 'sin harina'?",
          de: "Was macht ein Schokoladendessert 'mehlfrei'?",
          nl: "Wat maakt een chocoladedessert 'meelvrij'?"
        },
        options: [
          { en: "Using eggs and chocolate for structure instead of flour", es: "Usar huevos y chocolate para estructura en lugar de harina", de: "Eier und Schokolade für Struktur anstelle von Mehl verwenden", nl: "Eieren en chocolade gebruiken voor structuur in plaats van meel" },
          { en: "Adding extra sugar", es: "Agregar azúcar extra", de: "Extra Zucker hinzufügen", nl: "Extra suiker toevoegen" },
          { en: "Using only liquid ingredients", es: "Usar solo ingredientes líquidos", de: "Nur flüssige Zutaten verwenden", nl: "Alleen vloeibare ingrediënten gebruiken" },
          { en: "Freezing the mixture", es: "Congelar la mezcla", de: "Die Mischung einfrieren", nl: "Het mengsel bevriezen" }
        ],
        correct: 0,
        explanation: {
          en: "Flourless chocolate desserts rely on eggs and chocolate for structure and binding, creating dense, rich textures without traditional flour.",
          es: "Los postres de chocolate sin harina dependen de huevos y chocolate para estructura y unión, creando texturas densas y ricas sin harina tradicional.",
          de: "Mehlfreie Schokoladendesserts verlassen sich auf Eier und Schokolade für Struktur und Bindung und schaffen dichte, reichhaltige Texturen ohne traditionelles Mehl.",
          nl: "Meelvrije chocoladedesserts vertrouwen op eieren en chocolade voor structuur en binding, waardoor dichte, rijke texturen ontstaan zonder traditioneel meel."
        }
      },
      {
        question: {
          en: "What temperature should eggs be when making chocolate mousse?",
          es: "¿A qué temperatura deben estar los huevos al hacer mousse de chocolate?",
          de: "Welche Temperatur sollten Eier beim Herstellen von Schokoladenmousse haben?",
          nl: "Welke temperatuur moeten eieren hebben bij het maken van chocolademousse?"
        },
        options: [
          { en: "Room temperature for better volume", es: "Temperatura ambiente para mejor volumen", de: "Zimmertemperatur für besseres Volumen", nl: "Kamertemperatuur voor beter volume" },
          { en: "Ice cold", es: "Muy frío", de: "Eiskalt", nl: "IJskoud" },
          { en: "Hot", es: "Caliente", de: "Heiß", nl: "Heet" },
          { en: "Temperature doesn't matter", es: "La temperatura no importa", de: "Temperatur spielt keine Rolle", nl: "Temperatuur maakt niet uit" }
        ],
        correct: 0,
        explanation: {
          en: "Room temperature eggs whip to better volume and create more stable foam, essential for achieving the proper texture in chocolate mousse.",
          es: "Los huevos a temperatura ambiente se baten a mejor volumen y crean espuma más estable, esencial para lograr la textura apropiada en mousse de chocolate.",
          de: "Eier bei Zimmertemperatur schlagen zu besserem Volumen auf und erzeugen stabileren Schaum, wesentlich für die richtige Textur in Schokoladenmousse.",
          nl: "Eieren op kamertemperatuur kloppen tot beter volume en creëren stabieler schuim, essentieel voor het bereiken van de juiste textuur in chocolademousse."
        }
      },
      {
        question: {
          en: "What is the purpose of adding alcohol to chocolate ganache?",
          es: "¿Cuál es el propósito de agregar alcohol al ganache de chocolate?",
          de: "Was ist der Zweck, Alkohol zur Schokoladenganache hinzuzufügen?",
          nl: "Wat is het doel van het toevoegen van alcohol aan chocoladeganache?"
        },
        options: [
          { en: "Enhances flavor and extends shelf life", es: "Mejora el sabor y extiende la vida útil", de: "Verstärkt Geschmack und verlängert Haltbarkeit", nl: "Verbetert smaak en verlengt houdbaarheid" },
          { en: "Makes it harder", es: "Lo hace más duro", de: "Macht es härter", nl: "Maakt het harder" },
          { en: "Changes color", es: "Cambia el color", de: "Ändert die Farbe", nl: "Verandert de kleur" },
          { en: "Reduces sweetness", es: "Reduce la dulzura", de: "Reduziert Süße", nl: "Vermindert zoetheid" }
        ],
        correct: 0,
        explanation: {
          en: "Alcohol in ganache enhances and complements chocolate flavors while also acting as a natural preservative to extend shelf life.",
          es: "El alcohol en ganache realza y complementa los sabores del chocolate mientras también actúa como conservante natural para extender la vida útil.",
          de: "Alkohol in Ganache verstärkt und ergänzt Schokoladengeschmäcker und wirkt auch als natürliches Konservierungsmittel, um die Haltbarkeit zu verlängern.",
          nl: "Alcohol in ganache versterkt en vult chocoladesmaken aan terwijl het ook werkt als natuurlijk conserveermiddel om de houdbaarheid te verlengen."
        }
      },
      {
        question: {
          en: "What causes chocolate to seize when melting?",
          es: "¿Qué causa que el chocolate se endurezca al derretirse?",
          de: "Was bewirkt, dass Schokolade beim Schmelzen fest wird?",
          nl: "Wat zorgt ervoor dat chocolade vastloopt bij het smelten?"
        },
        options: [
          { en: "Adding small amounts of water or steam", es: "Agregar pequeñas cantidades de agua o vapor", de: "Kleine Mengen Wasser oder Dampf hinzufügen", nl: "Kleine hoeveelheden water of stoom toevoegen" },
          { en: "Melting too slowly", es: "Derretir demasiado lento", de: "Zu langsam schmelzen", nl: "Te langzaam smelten" },
          { en: "Using dark chocolate", es: "Usar chocolate negro", de: "Dunkle Schokolade verwenden", nl: "Pure chocolade gebruiken" },
          { en: "Adding too much cocoa", es: "Agregar demasiado cacao", de: "Zu viel Kakao hinzufügen", nl: "Te veel cacao toevoegen" }
        ],
        correct: 0,
        explanation: {
          en: "Chocolate seizes when even small amounts of water or steam come into contact with melted chocolate, causing it to become thick and grainy.",
          es: "El chocolate se endurece cuando incluso pequeñas cantidades de agua o vapor entran en contacto con el chocolate derretido, haciéndolo espeso y granuloso.",
          de: "Schokolade wird fest, wenn auch nur kleine Mengen Wasser oder Dampf mit geschmolzener Schokolade in Kontakt kommen, wodurch sie dick und körnig wird.",
          nl: "Chocolade loopt vast wanneer zelfs kleine hoeveelheden water of stoom in contact komen met gesmolten chocolade, waardoor het dik en korrelig wordt."
        }
      },
      {
        question: {
          en: "What is the best way to store chocolate truffles?",
          es: "¿Cuál es la mejor manera de almacenar trufas de chocolate?",
          de: "Was ist der beste Weg, Schokoladentrüffel zu lagern?",
          nl: "Wat is de beste manier om chocoladetruffels te bewaren?"
        },
        options: [
          { en: "Cool, dry place in airtight container", es: "Lugar fresco y seco en recipiente hermético", de: "Kühler, trockener Ort in luftdichtem Behälter", nl: "Koele, droge plaats in luchtdichte container" },
          { en: "Direct sunlight", es: "Luz solar directa", de: "Direktes Sonnenlicht", nl: "Direct zonlicht" },
          { en: "Warm, humid environment", es: "Ambiente cálido y húmedo", de: "Warme, feuchte Umgebung", nl: "Warme, vochtige omgeving" },
          { en: "Freezer only", es: "Solo congelador", de: "Nur Gefrierfach", nl: "Alleen vriezer" }
        ],
        correct: 0,
        explanation: {
          en: "Chocolate truffles should be stored in a cool, dry place in an airtight container to prevent bloom formation and maintain freshness.",
          es: "Las trufas de chocolate deben almacenarse en un lugar fresco y seco en un recipiente hermético para prevenir la formación de bloom y mantener la frescura.",
          de: "Schokoladentrüffel sollten an einem kühlen, trockenen Ort in einem luftdichten Behälter gelagert werden, um Blütenbildung zu verhindern und Frische zu erhalten.",
          nl: "Chocoladetruffels moeten worden bewaard op een koele, droge plaats in een luchtdichte container om bloeivorming te voorkomen en versheid te behouden."
        }
      },
      {
        question: {
          en: "What is crème pâtissière used for in chocolate desserts?",
          es: "¿Para qué se usa la crème pâtissière en postres de chocolate?",
          de: "Wofür wird Crème pâtissière in Schokoladendesserts verwendet?",
          nl: "Waarvoor wordt crème pâtissière gebruikt in chocoladedesserts?"
        },
        options: [
          { en: "As a base for chocolate pastry cream fillings", es: "Como base para rellenos de crema pastelera de chocolate", de: "Als Basis für Schokoladen-Konditorcreme-Füllungen", nl: "Als basis voor chocolade banketbakkersroom vullingen" },
          { en: "To make chocolate harder", es: "Para hacer el chocolate más duro", de: "Um Schokolade härter zu machen", nl: "Om chocolade harder te maken" },
          { en: "Only for decoration", es: "Solo para decoración", de: "Nur zur Dekoration", nl: "Alleen voor decoratie" },
          { en: "To change chocolate color", es: "Para cambiar el color del chocolate", de: "Um die Schokoladenfarbe zu ändern", nl: "Om chocoladekleur te veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Crème pâtissière (pastry cream) serves as a rich, smooth base for chocolate fillings in éclairs, profiteroles, and layered desserts.",
          es: "La crème pâtissière (crema pastelera) sirve como base rica y suave para rellenos de chocolate en éclairs, profiteroles y postres en capas.",
          de: "Crème pâtissière (Konditorcreme) dient als reichhaltige, glatte Basis für Schokoladenfüllungen in Éclairs, Profiteroles und geschichteten Desserts.",
          nl: "Crème pâtissière (banketbakkersroom) dient als rijke, gladde basis voor chocoladevullingen in éclairs, soesjes en gelaagde desserts."
        }
      },
      {
        question: {
          en: "What is the purpose of blooming gelatin in chocolate mousse recipes?",
          es: "¿Cuál es el propósito de hidratar gelatina en recetas de mousse de chocolate?",
          de: "Was ist der Zweck des Quellenlassens von Gelatine in Schokoladenmousse-Rezepten?",
          nl: "Wat is het doel van het laten opzwellen van gelatine in chocolademousse recepten?"
        },
        options: [
          { en: "To soften and activate it before dissolving", es: "Para ablandarla y activarla antes de disolverla", de: "Um sie vor dem Auflösen zu erweichen und zu aktivieren", nl: "Om het te verzachten en te activeren voor het oplossen" },
          { en: "To change its flavor", es: "Para cambiar su sabor", de: "Um ihren Geschmack zu ändern", nl: "Om de smaak te veranderen" },
          { en: "To make it colorful", es: "Para hacerla colorida", de: "Um sie bunt zu machen", nl: "Om het kleurrijk te maken" },
          { en: "To remove its taste", es: "Para quitarle el sabor", de: "Um ihren Geschmack zu entfernen", nl: "Om de smaak weg te nemen" }
        ],
        correct: 0,
        explanation: {
          en: "Blooming gelatin in cold water softens and activates it, ensuring it dissolves completely when heated and sets the mousse properly.",
          es: "Hidratar gelatina en agua fría la ablanda y activa, asegurando que se disuelva completamente al calentarse y cuaje la mousse apropiadamente.",
          de: "Das Quellenlassen von Gelatine in kaltem Wasser erweicht und aktiviert sie, sodass sie beim Erhitzen vollständig löst und die Mousse richtig geliert.",
          nl: "Het laten opzwellen van gelatine in koud water verzacht en activeert het, waardoor het volledig oplost bij verhitting en de mousse goed stolt."
        }
      },
      {
        question: {
          en: "What is the difference between tempering and simple melting of chocolate?",
          es: "¿Cuál es la diferencia entre templar y simplemente derretir chocolate?",
          de: "Was ist der Unterschied zwischen Temperieren und einfachem Schmelzen von Schokolade?",
          nl: "Wat is het verschil tussen tempereren en gewoon smelten van chocolade?"
        },
        options: [
          { en: "Tempering creates stable crystals for shine and snap", es: "Templar crea cristales estables para brillo y chasquido", de: "Temperieren erzeugt stabile Kristalle für Glanz und Knack", nl: "Tempereren creëert stabiele kristallen voor glans en knak" },
          { en: "No difference", es: "No hay diferencia", de: "Kein Unterschied", nl: "Geen verschil" },
          { en: "Tempering only changes color", es: "Templar solo cambia el color", de: "Temperieren ändert nur die Farbe", nl: "Tempereren verandert alleen de kleur" },
          { en: "Melting requires higher temperatures", es: "Derretir requiere temperaturas más altas", de: "Schmelzen erfordert höhere Temperaturen", nl: "Smelten vereist hogere temperaturen" }
        ],
        correct: 0,
        explanation: {
          en: "Tempering involves precise heating and cooling to create stable crystal structures, resulting in chocolate with proper shine, snap, and appearance.",
          es: "Templar involucra calentamiento y enfriamiento precisos para crear estructuras cristalinas estables, resultando en chocolate con brillo, chasquido y apariencia apropiados.",
          de: "Temperieren beinhaltet präzises Erhitzen und Abkühlen zur Erzeugung stabiler Kristallstrukturen, was zu Schokolade mit richtigem Glanz, Knack und Aussehen führt.",
          nl: "Tempereren behelst nauwkeurig verhitten en afkoelen om stabiele kristalstructuren te creëren, wat resulteert in chocolade met juiste glans, knak en uiterlijk."
        }
      },
      {
        question: {
          en: "What is the main difference between a chocolate tart and chocolate pie?",
          es: "¿Cuál es la principal diferencia entre una tarta de chocolate y un pastel de chocolate?",
          de: "Was ist der Hauptunterschied zwischen einer Schokoladentarte und einem Schokoladenkuchen?",
          nl: "Wat is het belangrijkste verschil tussen een chocoladetaart en een chocoladepai?"
        },
        options: [
          { en: "Tarts have shallow sides and open tops", es: "Las tartas tienen lados poco profundos y parte superior abierta", de: "Tarten haben flache Seiten und offene Oberseiten", nl: "Taarten hebben lage randen en open bovenkanten" },
          { en: "Pies are always chocolate", es: "Los pasteles siempre son de chocolate", de: "Kuchen sind immer Schokolade", nl: "Pies zijn altijd chocolade" },
          { en: "Tarts are served cold only", es: "Las tartas se sirven solo frías", de: "Tarten werden nur kalt serviert", nl: "Taarten worden alleen koud geserveerd" },
          { en: "No difference", es: "No hay diferencia", de: "Kein Unterschied", nl: "Geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Tarts typically have shallow, fluted sides with open tops, while pies have deeper sides and often have top crusts covering the filling.",
          es: "Las tartas típicamente tienen lados poco profundos y acanalados con parte superior abierta, mientras que los pasteles tienen lados más profundos y a menudo tienen corteza superior cubriendo el relleno.",
          de: "Tarten haben typischerweise flache, geriffelte Seiten mit offenen Oberseiten, während Kuchen tiefere Seiten haben und oft Oberkrusten haben, die die Füllung bedecken.",
          nl: "Taarten hebben meestal lage, geribde randen met open bovenkanten, terwijl pies diepere randen hebben en vaak een bovenkorst hebben die de vulling bedekt."
        }
      },
      {
        question: {
          en: "What makes chocolate lava cake special?",
          es: "¿Qué hace especial el pastel de lava de chocolate?",
          de: "Was macht Schokoladen-Lavakuchen besonders?",
          nl: "Wat maakt chocolade lavacake speciaal?"
        },
        options: [
          { en: "Molten chocolate center that flows when cut", es: "Centro de chocolate fundido que fluye al cortarse", de: "Geschmolzener Schokoladenkern, der beim Schneiden fließt", nl: "Gesmolten chocoladekern die vloeit wanneer gesneden" },
          { en: "It's served cold", es: "Se sirve frío", de: "Es wird kalt serviert", nl: "Het wordt koud geserveerd" },
          { en: "It contains lava", es: "Contiene lava", de: "Es enthält Lava", nl: "Het bevat lava" },
          { en: "It's very large", es: "Es muy grande", de: "Es ist sehr groß", nl: "Het is heel groot" }
        ],
        correct: 0,
        explanation: {
          en: "Chocolate lava cake is special because it has a warm, molten chocolate center that flows out like lava when the cake is cut open.",
          es: "El pastel de lava de chocolate es especial porque tiene un centro de chocolate fundido caliente que fluye como lava cuando se corta el pastel.",
          de: "Schokoladen-Lavakuchen ist besonders, weil er einen warmen, geschmolzenen Schokoladenkern hat, der wie Lava herausfließt, wenn der Kuchen aufgeschnitten wird.",
          nl: "Chocolade lavacake is speciaal omdat het een warme, gesmolten chocoladekern heeft die eruit vloeit als lava wanneer de cake wordt doorgesneden."
        }
      },
      {
        question: {
          en: "What is the purpose of chilling chocolate mousse before serving?",
          es: "¿Cuál es el propósito de enfriar mousse de chocolate antes de servir?",
          de: "Was ist der Zweck, Schokoladenmousse vor dem Servieren zu kühlen?",
          nl: "Wat is het doel van het koelen van chocolademousse voor het serveren?"
        },
        options: [
          { en: "To set the texture and maintain structure", es: "Para cuajar la textura y mantener la estructura", de: "Um die Textur zu festigen und die Struktur zu erhalten", nl: "Om de textuur te laten stollen en de structuur te behouden" },
          { en: "To change the flavor", es: "Para cambiar el sabor", de: "Um den Geschmack zu ändern", nl: "Om de smaak te veranderen" },
          { en: "To make it sweeter", es: "Para hacerla más dulce", de: "Um sie süßer zu machen", nl: "Om het zoeter te maken" },
          { en: "To change the color", es: "Para cambiar el color", de: "Um die Farbe zu ändern", nl: "Om de kleur te veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Chilling chocolate mousse allows it to set properly, maintaining the light, airy texture and preventing it from collapsing when served.",
          es: "Enfriar mousse de chocolate permite que cuaje apropiadamente, manteniendo la textura ligera y aireada y evitando que se colapse al servir.",
          de: "Das Kühlen von Schokoladenmousse ermöglicht es ihr, richtig zu gelieren, die leichte, luftige Textur zu erhalten und zu verhindern, dass sie beim Servieren zusammenfällt.",
          nl: "Het koelen van chocolademousse laat het goed stollen, behoudt de lichte, luchtige textuur en voorkomt dat het instort bij het serveren."
        }
      },
      {
        question: {
          en: "What is the best cocoa percentage for baking chocolate desserts?",
          es: "¿Cuál es el mejor porcentaje de cacao para hornear postres de chocolate?",
          de: "Was ist der beste Kakaoanteil zum Backen von Schokoladendesserts?",
          nl: "Wat is het beste cacaopercentage voor het bakken van chocoladedesserts?"
        },
        options: [
          { en: "60-70% for balanced flavor", es: "60-70% para sabor equilibrado", de: "60-70% für ausgewogenen Geschmack", nl: "60-70% voor gebalanceerde smaak" },
          { en: "30-40% only", es: "Solo 30-40%", de: "Nur 30-40%", nl: "Alleen 30-40%" },
          { en: "90-100% always", es: "Siempre 90-100%", de: "Immer 90-100%", nl: "Altijd 90-100%" },
          { en: "10-20% is enough", es: "10-20% es suficiente", de: "10-20% ist genug", nl: "10-20% is genoeg" }
        ],
        correct: 0,
        explanation: {
          en: "60-70% cocoa content provides the best balance of chocolate flavor and sweetness for most baking applications, giving rich taste without being overly bitter.",
          es: "El contenido de 60-70% de cacao proporciona el mejor equilibrio de sabor a chocolate y dulzura para la mayoría de aplicaciones de horneado, dando sabor rico sin ser excesivamente amargo.",
          de: "60-70% Kakaogehalt bietet das beste Gleichgewicht von Schokoladengeschmack und Süße für die meisten Backanwendungen und gibt reichen Geschmack ohne übermäßige Bitterkeit.",
          nl: "60-70% cacaogehalte biedt de beste balans van chocoladesmaak en zoetheid voor de meeste baktoepassingen, wat rijke smaak geeft zonder te bitter te zijn."
        }
      },
      {
        question: {
          en: "What is the purpose of sifting cocoa powder before using in recipes?",
          es: "¿Cuál es el propósito de tamizar el cacao en polvo antes de usar en recetas?",
          de: "Was ist der Zweck des Siebens von Kakaopulver vor der Verwendung in Rezepten?",
          nl: "Wat is het doel van het zeven van cacaopoeder voor gebruik in recepten?"
        },
        options: [
          { en: "Remove lumps and ensure even distribution", es: "Eliminar grumos y asegurar distribución uniforme", de: "Klumpen entfernen und gleichmäßige Verteilung sicherstellen", nl: "Klontjes verwijderen en gelijkmatige verdeling verzekeren" },
          { en: "Make it sweeter", es: "Hacerlo más dulce", de: "Süßer machen", nl: "Het zoeter maken" },
          { en: "Increase volume", es: "Aumentar volumen", de: "Volumen erhöhen", nl: "Volume verhogen" },
          { en: "Change the color", es: "Cambiar el color", de: "Die Farbe ändern", nl: "De kleur veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Sifting cocoa powder removes lumps and aerates it, ensuring smooth incorporation and even distribution in batters and mixtures.",
          es: "Tamizar el cacao en polvo elimina los grumos y lo airea, asegurando una incorporación suave y distribución uniforme en masas y mezclas.",
          de: "Das Sieben von Kakaopulver entfernt Klumpen und belüftet es, wodurch eine glatte Einarbeitung und gleichmäßige Verteilung in Teigen und Mischungen gewährleistet wird.",
          nl: "Het zeven van cacaopoeder verwijdert klontjes en belucht het, wat zorgt voor soepele verwerking en gelijkmatige verdeling in beslag en mengsels."
        }
      },
      {
        question: {
          en: "Which chocolate type contains the highest percentage of antioxidants?",
          es: "¿Qué tipo de chocolate contiene el mayor porcentaje de antioxidantes?",
          de: "Welche Schokoladensorte enthält den höchsten Anteil an Antioxidantien?",
          nl: "Welk type chocolade bevat het hoogste percentage antioxidanten?"
        },
        options: [
          { en: "Dark chocolate (70% or higher)", es: "Chocolate negro (70% o más)", de: "Dunkle Schokolade (70% oder höher)", nl: "Pure chocolade (70% of hoger)" },
          { en: "Milk chocolate", es: "Chocolate con leche", de: "Milchschokolade", nl: "Melkchocolade" },
          { en: "White chocolate", es: "Chocolate blanco", de: "Weiße Schokolade", nl: "Witte chocolade" },
          { en: "Ruby chocolate", es: "Chocolate rubí", de: "Ruby-Schokolade", nl: "Ruby chocolade" }
        ],
        correct: 0,
        explanation: {
          en: "Dark chocolate with 70% or higher cocoa content has the highest concentration of antioxidants, particularly flavonoids and polyphenols.",
          es: "El chocolate negro con 70% o más de contenido de cacao tiene la mayor concentración de antioxidantes, particularmente flavonoides y polifenoles.",
          de: "Dunkle Schokolade mit 70% oder höherem Kakaogehalt hat die höchste Konzentration an Antioxidantien, insbesondere Flavonoide und Polyphenole.",
          nl: "Pure chocolade met 70% of hoger cacaogehalte heeft de hoogste concentratie antioxidanten, met name flavonoïden en polyfenolen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else {
    window.chocolateDessertsLevel3 = level3;
  }
})();