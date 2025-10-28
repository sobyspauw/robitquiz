// International Desserts Quiz - Level 3: Techniques and ingredients from different cultures
(function() {
  const level3 = {
    name: {
      en: "International Desserts - Level 3: Techniques & Ingredients",
      es: "Postres Internacionales - Nivel 3: Técnicas e Ingredientes",
      de: "Internationale Desserts - Level 3: Techniken & Zutaten",
      nl: "Internationale desserts - Level 3: Technieken & Ingrediënten"
    },
    questions: [
      {
        question: {
          en: "What is the crucial technique called for making proper French macarons?",
          es: "¿Cómo se llama la técnica crucial para hacer macarons franceses adecuados?",
          de: "Wie heißt die entscheidende Technik für die Herstellung richtiger französischer Macarons?",
          nl: "Hoe heet de cruciale techniek voor het maken van goede Franse macarons?"
        },
        options: [
          { en: "Macaronage", es: "Macaronage", de: "Macaronage", nl: "Macaronage" },
          { en: "Pâtissage", es: "Pâtissage", de: "Pâtissage", nl: "Pâtissage" },
          { en: "Meringue", es: "Merengue", de: "Meringue", nl: "Meringue" },
          { en: "Laminage", es: "Laminado", de: "Laminage", nl: "Laminage" }
        ],
        correct: 0,
        explanation: {
          en: "Macaronage is the specific folding technique used to combine the meringue with almond flour mixture, creating the proper flowing consistency for macaron shells.",
          es: "Macaronage es la técnica específica de plegado utilizada para combinar el merengue con la mezcla de harina de almendra, creando la consistencia fluida adecuada para las conchas de macaron.",
          de: "Macaronage ist die spezifische Falttechnik, die verwendet wird, um das Baiser mit der Mandelmehrmischung zu kombinieren und die richtige fließende Konsistenz für Macaron-Schalen zu erzeugen.",
          nl: "Macaronage is de specifieke vouwechniek die wordt gebruikt om de meringue te combineren met het amandelmeelmengsel, waardoor de juiste vloeibare consistentie voor macaron schalen ontstaat."
        }
      },
      {
        question: {
          en: "Which traditional Japanese technique is used to create the smooth texture in mochi?",
          es: "¿Qué técnica japonesa tradicional se usa para crear la textura suave en el mochi?",
          de: "Welche traditionelle japanische Technik wird verwendet, um die glatte Textur in Mochi zu erzeugen?",
          nl: "Welke traditionele Japanse techniek wordt gebruikt om de gladde textuur in mochi te creëren?"
        },
        options: [
          { en: "Kneading", es: "Amasado", de: "Kneten", nl: "Kneden" },
          { en: "Mochi-tsuki (pounding)", es: "Mochi-tsuki (machacado)", de: "Mochi-tsuki (Stampfen)", nl: "Mochi-tsuki (stampen)" },
          { en: "Steaming", es: "Cocción al vapor", de: "Dämpfen", nl: "Stomen" },
          { en: "Grinding", es: "Molienda", de: "Mahlen", nl: "Malen" }
        ],
        correct: 1,
        explanation: {
          en: "Mochi-tsuki is the traditional pounding technique using wooden mallets (kine) in a mortar (usu) to transform cooked glutinous rice into smooth, elastic mochi.",
          es: "Mochi-tsuki es la técnica tradicional de machacado usando mazos de madera (kine) en un mortero (usu) para transformar el arroz glutinoso cocido en mochi suave y elástico.",
          de: "Mochi-tsuki ist die traditionelle Stampftechnik mit Holzhämmern (kine) in einem Mörser (usu), um gekochten Klebreis in glattes, elastisches Mochi zu verwandeln.",
          nl: "Mochi-tsuki is de traditionele stampechniek met houten hamers (kine) in een vijzel (usu) om gekookte kleefrijst te transformeren in gladde, elastische mochi."
        }
      },
      {
        question: {
          en: "What is the key ingredient that provides the characteristic texture in Turkish delight (lokum)?",
          es: "¿Cuál es el ingrediente clave que proporciona la textura característica en las delicias turcas (lokum)?",
          de: "Was ist die Schlüsselzutat, die die charakteristische Textur in Türkischem Honig (Lokum) verleiht?",
          nl: "Wat is het belangrijkste ingrediënt dat de karakteristieke textuur in Turkse verrukking (lokum) geeft?"
        },
        options: [
          { en: "Gelatin", es: "Gelatina", de: "Gelatine", nl: "Gelatine" },
          { en: "Cornstarch", es: "Maicena", de: "Maisstärke", nl: "Maïzena" },
          { en: "Agar", es: "Agar", de: "Agar", nl: "Agar" },
          { en: "Egg whites", es: "Claras de huevo", de: "Eiweiß", nl: "Eiwitten" }
        ],
        correct: 1,
        explanation: {
          en: "Cornstarch is the traditional thickening agent that gives Turkish delight its distinctive chewy, gel-like texture, combined with sugar and water.",
          es: "La maicena es el agente espesante tradicional que le da a las delicias turcas su textura distintiva masticable y gelatinosa, combinada con azúcar y agua.",
          de: "Maisstärke ist das traditionelle Verdickungsmittel, das Türkischem Honig seine charakteristische zähe, gelartige Textur verleiht, kombiniert mit Zucker und Wasser.",
          nl: "Maïzena is het traditionele verdikkingsmiddel dat Turkse verrukking zijn kenmerkende chewy, gel-achtige textuur geeft, gecombineerd met suiker en water."
        }
      },
      {
        question: {
          en: "Which emulsification technique is essential for creating proper Italian zabaglione?",
          es: "¿Qué técnica de emulsificación es esencial para crear zabaglione italiano adecuado?",
          de: "Welche Emulgiertechnik ist für die Herstellung von richtigem italienischen Zabaglione wesentlich?",
          nl: "Welke emulgatietechniek is essentieel voor het maken van goede Italiaanse zabaglione?"
        },
        options: [
          { en: "Rapid whisking over direct heat", es: "Batido rápido sobre fuego directo", de: "Schnelles Schlagen über direkter Hitze", nl: "Snel kloppen boven directe warmte" },
          { en: "Gentle whisking over double boiler", es: "Batido suave sobre baño maría", de: "Sanftes Schlagen über Wasserbad", nl: "Voorzichtig kloppen boven een dubbelwandige pan" },
          { en: "Cold whisking", es: "Batido en frío", de: "Kaltes Schlagen", nl: "Koud kloppen" },
          { en: "Machine mixing", es: "Mezclado a máquina", de: "Maschinenmischen", nl: "Machinaal mixen" }
        ],
        correct: 1,
        explanation: {
          en: "Zabaglione requires gentle whisking over a double boiler to slowly cook the egg yolks while incorporating air, creating a light, foamy custard without curdling.",
          es: "Zabaglione requiere batido suave sobre baño maría para cocinar lentamente las yemas mientras se incorpora aire, creando una natilla ligera y espumosa sin cuajarse.",
          de: "Zabaglione erfordert sanftes Schlagen über einem Wasserbad, um die Eigelbe langsam zu garen und gleichzeitig Luft einzuarbeiten, wodurch eine leichte, schaumige Creme ohne Gerinnung entsteht.",
          nl: "Zabaglione vereist voorzichtig kloppen boven een dubbelwandige pan om de eidooiers langzaam te koken terwijl lucht wordt ingewerkt, waardoor een lichte, schuimige custard ontstaat zonder te schiften."
        }
      },
      {
        question: {
          en: "What is the traditional Indian technique called for reducing milk to make khoya?",
          es: "¿Cómo se llama la técnica india tradicional para reducir la leche y hacer khoya?",
          de: "Wie heißt die traditionelle indische Technik zur Milchreduzierung für Khoya?",
          nl: "Hoe heet de traditionele Indiase techniek voor het inkoken van melk om khoya te maken?"
        },
        options: [
          { en: "Bhuna", es: "Bhuna", de: "Bhuna", nl: "Bhuna" },
          { en: "Dum", es: "Dum", de: "Dum", nl: "Dum" },
          { en: "Mawa", es: "Mawa", de: "Mawa", nl: "Mawa" },
          { en: "Kheer-making", es: "Hacer kheer", de: "Kheer-Herstellung", nl: "Kheer maken" }
        ],
        correct: 2,
        explanation: {
          en: "Mawa (also called khoya) is both the product and the technique of slowly reducing full-fat milk over low heat while stirring continuously until it becomes thick milk solids.",
          es: "Mawa (también llamado khoya) es tanto el producto como la técnica de reducir lentamente leche entera a fuego lento mientras se revuelve continuamente hasta que se convierte en sólidos de leche espesos.",
          de: "Mawa (auch Khoya genannt) ist sowohl das Produkt als auch die Technik der langsamen Reduzierung von Vollmilch bei niedriger Hitze unter kontinuierlichem Rühren, bis sie zu dicken Milchfeststoffen wird.",
          nl: "Mawa (ook khoya genoemd) is zowel het product als de techniek van het langzaam inkoken van volle melk op laag vuur terwijl continu wordt geroerd tot het dikke melkvaste stoffen wordt."
        }
      },
      {
        question: {
          en: "Which technique is crucial for achieving the characteristic layers in Greek baklava?",
          es: "¿Qué técnica es crucial para lograr las capas características en el baklava griego?",
          de: "Welche Technik ist entscheidend für die charakteristischen Schichten in griechischem Baklava?",
          nl: "Welke techniek is cruciaal voor het bereiken van de karakteristieke lagen in Griekse baklava?"
        },
        options: [
          { en: "Rolling the dough", es: "Enrollar la masa", de: "Teig ausrollen", nl: "Deeg uitrollen" },
          { en: "Brushing each phyllo sheet with melted butter", es: "Pintar cada hoja de filo con mantequilla derretida", de: "Jede Phyllo-Schicht mit geschmolzener Butter bestreichen", nl: "Elke phyllo plaat bestrijken met gesmolten boter" },
          { en: "Folding the sheets", es: "Doblar las hojas", de: "Blätter falten", nl: "Platen vouwen" },
          { en: "Cutting before baking", es: "Cortar antes de hornear", de: "Vor dem Backen schneiden", nl: "Snijden voor bakken" }
        ],
        correct: 1,
        explanation: {
          en: "Each thin phyllo sheet must be brushed with melted butter to create distinct, crispy layers that separate during baking, giving baklava its characteristic flaky texture.",
          es: "Cada hoja delgada de filo debe pintarse con mantequilla derretida para crear capas distintas y crujientes que se separan durante el horneado, dando al baklava su textura hojaldrada característica.",
          de: "Jede dünne Phyllo-Schicht muss mit geschmolzener Butter bestrichen werden, um deutliche, knusprige Schichten zu erzeugen, die sich beim Backen trennen und Baklava seine charakteristische blättrige Textur verleihen.",
          nl: "Elke dunne phyllo plaat moet worden bestreken met gesmolten boter om duidelijke, knapperige lagen te creëren die zich tijdens het bakken scheiden, waardoor baklava zijn karakteristieke bladderige textuur krijgt."
        }
      },
      {
        question: {
          en: "What is the traditional Chinese technique for creating the translucent wrapper in har gow (shrimp dumplings) that's also used in some desserts?",
          es: "¿Cuál es la técnica china tradicional para crear la envoltura translúcida en har gow (dumplings de camarón) que también se usa en algunos postres?",
          de: "Was ist die traditionelle chinesische Technik für die durchscheinende Hülle in Har Gow (Garnelen-Dumplings), die auch in einigen Desserts verwendet wird?",
          nl: "Wat is de traditionele Chinese techniek voor het creëren van de doorzichtige omhulling in har gow (garnalen dumplings) die ook wordt gebruikt in sommige desserts?"
        },
        options: [
          { en: "Using wheat starch and tapioca starch", es: "Usar almidón de trigo y almidón de tapioca", de: "Weizenstärke und Tapiokastärke verwenden", nl: "Tarwezetmeel en tapiocazetmeel gebruiken" },
          { en: "Adding egg whites", es: "Agregar claras de huevo", de: "Eiweiß hinzufügen", nl: "Eiwitten toevoegen" },
          { en: "Using rice flour only", es: "Usar solo harina de arroz", de: "Nur Reismehl verwenden", nl: "Alleen rijstmeel gebruiken" },
          { en: "Cold water technique", es: "Técnica de agua fría", de: "Kaltwasser-Technik", nl: "Koud water techniek" }
        ],
        correct: 0,
        explanation: {
          en: "The translucent, slightly chewy wrapper is made using a combination of wheat starch and tapioca starch mixed with boiling water, a technique also used in Chinese sweet dumplings.",
          es: "La envoltura translúcida y ligeramente masticable se hace usando una combinación de almidón de trigo y almidón de tapioca mezclado con agua hirviendo, técnica también usada en dumplings dulces chinos.",
          de: "Die durchscheinende, leicht zähe Hülle wird mit einer Kombination aus Weizen- und Tapiokastärke gemischt mit kochendem Wasser hergestellt, eine Technik, die auch in chinesischen süßen Dumplings verwendet wird.",
          nl: "De doorzichtige, licht chewy omhulling wordt gemaakt met een combinatie van tarwe- en tapiocazetmeel gemengd met kokend water, een techniek die ook wordt gebruikt in Chinese zoete dumplings."
        }
      },
      {
        question: {
          en: "Which technique is essential for creating the signature crispy top on Portuguese pastéis de nata?",
          es: "¿Qué técnica es esencial para crear la superficie crujiente característica en los pastéis de nata portugueses?",
          de: "Welche Technik ist für die charakteristische knusprige Oberfläche portugiesischer Pastéis de Nata wesentlich?",
          nl: "Welke techniek is essentieel voor het creëren van de kenmerkende knapperige bovenkant van Portugese pastéis de nata?"
        },
        options: [
          { en: "Broiling at the end", es: "Asar al final", de: "Am Ende grillen", nl: "Grillen aan het einde" },
          { en: "High temperature baking (250°C+)", es: "Horneado a alta temperatura (250°C+)", de: "Hochtemperaturbacken (250°C+)", nl: "Hoge temperatuur bakken (250°C+)" },
          { en: "Sugar sprinkling", es: "Espolvorear azúcar", de: "Zucker streuen", nl: "Suiker strooien" },
          { en: "Steam injection", es: "Inyección de vapor", de: "Dampfinjektion", nl: "Stoominjectie" }
        ],
        correct: 1,
        explanation: {
          en: "Authentic pastéis de nata require baking at extremely high temperatures (250°C or higher) to create the characteristic caramelized, slightly charred custard top.",
          es: "Los auténticos pastéis de nata requieren horneado a temperaturas extremadamente altas (250°C o más) para crear la superficie de natilla caramelizada y ligeramente quemada característica.",
          de: "Authentische Pastéis de Nata erfordern Backen bei extrem hohen Temperaturen (250°C oder höher), um die charakteristische karamellisierte, leicht verkohlte Pudding-Oberfläche zu erzeugen.",
          nl: "Authentieke pastéis de nata vereisen bakken op extreem hoge temperaturen (250°C of hoger) om de karakteristieke gekarameliseerde, licht verkoelde custard bovenkant te creëren."
        }
      },
      {
        question: {
          en: "What is the traditional Moroccan technique for shaping chebakia's distinctive rose-like form?",
          es: "¿Cuál es la técnica marroquí tradicional para dar forma a la forma distintiva similar a una rosa de chebakia?",
          de: "Was ist die traditionelle marokkanische Technik für die charakteristische rosenähnliche Form von Chebakia?",
          nl: "Wat is de traditionele Marokkaanse techniek voor het vormen van chebakia's kenmerkende roosvorm?"
        },
        options: [
          { en: "Using cookie cutters", es: "Usar cortadores de galletas", de: "Keksausstecher verwenden", nl: "Koekjesvormen gebruiken" },
          { en: "Braiding and twisting strips", es: "Trenzar y torcer tiras", de: "Streifen flechten und drehen", nl: "Strengen vlechten en draaien" },
          { en: "Molding by hand", es: "Moldear a mano", de: "Handformung", nl: "Met de hand vormen" },
          { en: "Rolling and cutting", es: "Enrollar y cortar", de: "Rollen und Schneiden", nl: "Rollen en snijden" }
        ],
        correct: 1,
        explanation: {
          en: "Chebakia is made by cutting dough into strips and braiding/twisting them into intricate rose-like patterns before deep-frying, a skill passed down through generations.",
          es: "Chebakia se hace cortando masa en tiras y trenzándolas/torciéndolas en patrones intrincados similares a rosas antes de freír profundamente, una habilidad transmitida a través de generaciones.",
          de: "Chebakia wird hergestellt, indem Teig in Streifen geschnitten und in komplizierte rosenähnliche Muster geflochten/gedreht wird, bevor es frittiert wird, eine Fähigkeit, die über Generationen weitergegeben wurde.",
          nl: "Chebakia wordt gemaakt door deeg in repen te snijden en ze te vlechten/draaien in ingewikkelde roosachtige patronen voor het frituren, een vaardigheid die door generaties wordt doorgegeven."
        }
      },
      {
        question: {
          en: "Which ingredient provides the distinctive chewy texture in Korean tteok (rice cakes used in desserts)?",
          es: "¿Qué ingrediente proporciona la textura masticable distintiva en tteok coreano (pasteles de arroz usados en postres)?",
          de: "Welche Zutat verleiht die charakteristische zähe Textur in koreanischen Tteok (Reiskuchen für Desserts)?",
          nl: "Welk ingrediënt zorgt voor de kenmerkende chewy textuur in Koreaanse tteok (rijstkoeken gebruikt in desserts)?"
        },
        options: [
          { en: "Regular rice flour", es: "Harina de arroz regular", de: "Normales Reismehl", nl: "Gewoon rijstmeel" },
          { en: "Glutinous rice flour", es: "Harina de arroz glutinoso", de: "Klebreismehl", nl: "Kleefrijstmeel" },
          { en: "Wheat flour", es: "Harina de trigo", de: "Weizenmehl", nl: "Tarwemeel" },
          { en: "Tapioca starch", es: "Almidón de tapioca", de: "Tapiokastärke", nl: "Tapiocazetmeel" }
        ],
        correct: 1,
        explanation: {
          en: "Glutinous rice flour (despite containing no gluten) provides the characteristic chewy, elastic texture in Korean tteok due to its high amylopectin content.",
          es: "La harina de arroz glutinoso (aunque no contiene gluten) proporciona la textura característica masticable y elástica en tteok coreano debido a su alto contenido de amilopectina.",
          de: "Klebreismehl (obwohl es kein Gluten enthält) verleiht koreanischen Tteok die charakteristische zähe, elastische Textur aufgrund seines hohen Amylopektingehalts.",
          nl: "Kleefrijstmeel (hoewel het geen gluten bevat) zorgt voor de karakteristieke chewy, elastische textuur in Koreaanse tteok vanwege het hoge amylopectinegehalte."
        }
      },
      {
        question: {
          en: "What is the traditional Indian tempering technique (tadka/tarka) sometimes used in dessert preparation?",
          es: "¿Cuál es la técnica india tradicional de temperado (tadka/tarka) que a veces se usa en la preparación de postres?",
          de: "Was ist die traditionelle indische Tempering-Technik (Tadka/Tarka), die manchmal bei der Dessert-Zubereitung verwendet wird?",
          nl: "Wat is de traditionele Indiase tempering techniek (tadka/tarka) die soms wordt gebruikt bij dessertbereiding?"
        },
        options: [
          { en: "Heating spices in oil/ghee and pouring over the dessert", es: "Calentar especias en aceite/ghee y verter sobre el postre", de: "Gewürze in Öl/Ghee erhitzen und über das Dessert gießen", nl: "Specerijen verhitten in olie/ghee en over het dessert gieten" },
          { en: "Grinding spices with sugar", es: "Moler especias con azúcar", de: "Gewürze mit Zucker mahlen", nl: "Specerijen malen met suiker" },
          { en: "Soaking spices overnight", es: "Remojar especias toda la noche", de: "Gewürze über Nacht einweichen", nl: "Specerijen een nacht weken" },
          { en: "Steaming spices", es: "Cocer especias al vapor", de: "Gewürze dämpfen", nl: "Specerijen stomen" }
        ],
        correct: 0,
        explanation: {
          en: "Tadka involves heating spices (like cardamom, saffron, or nuts) in oil or ghee until fragrant, then pouring over desserts like kheer or halwa to enhance aroma and flavor.",
          es: "Tadka implica calentar especias (como cardamomo, azafrán o nueces) en aceite o ghee hasta que estén fragantes, luego verter sobre postres como kheer o halwa para realzar aroma y sabor.",
          de: "Tadka beinhaltet das Erhitzen von Gewürzen (wie Kardamom, Safran oder Nüssen) in Öl oder Ghee bis sie duften, dann über Desserts wie Kheer oder Halwa gießen, um Aroma und Geschmack zu verstärken.",
          nl: "Tadka houdt in dat specerijen (zoals kardemom, saffraan of noten) worden verhit in olie of ghee tot ze geurig zijn, dan over desserts zoals kheer of halwa worden gegoten om aroma en smaak te versterken."
        }
      },
      {
        question: {
          en: "Which technique is essential for creating the signature airy texture in Spanish churros?",
          es: "¿Qué técnica es esencial para crear la textura aireada característica en los churros españoles?",
          de: "Welche Technik ist für die charakteristische luftige Textur spanischer Churros wesentlich?",
          nl: "Welke techniek is essentieel voor het creëren van de kenmerkende luchtige textuur in Spaanse churros?"
        },
        options: [
          { en: "Adding baking powder", es: "Agregar polvo para hornear", de: "Backpulver hinzufügen", nl: "Bakpoeder toevoegen" },
          { en: "Using steam from boiling water in the dough", es: "Usar vapor del agua hirviendo en la masa", de: "Dampf aus kochendem Wasser im Teig verwenden", nl: "Stoom van kokend water in het deeg gebruiken" },
          { en: "Whipping egg whites", es: "Batir claras de huevo", de: "Eiweiß schlagen", nl: "Eiwitten kloppen" },
          { en: "Long fermentation", es: "Fermentación larga", de: "Lange Fermentation", nl: "Lange fermentatie" }
        ],
        correct: 1,
        explanation: {
          en: "Churros use choux pastry technique where boiling water creates steam that expands during frying, creating the characteristic hollow, airy interior.",
          es: "Los churros usan la técnica de masa choux donde el agua hirviendo crea vapor que se expande durante la fritura, creando el interior hueco y aireado característico.",
          de: "Churros verwenden die Brandteig-Technik, bei der kochendes Wasser Dampf erzeugt, der sich beim Frittieren ausdehnt und das charakteristische hohle, luftige Innere schafft.",
          nl: "Churros gebruiken de choux deeg techniek waarbij kokend water stoom creëert die zich tijdens het frituren uitzet, waardoor de karakteristieke holle, luchtige binnenkant ontstaat."
        }
      },
      {
        question: {
          en: "What is the traditional Persian technique for creating the distinctive texture in faloodeh (rose water sorbet)?",
          es: "¿Cuál es la técnica persa tradicional para crear la textura distintiva en faloodeh (sorbete de agua de rosas)?",
          de: "Was ist die traditionelle persische Technik für die charakteristische Textur in Faloodeh (Rosenwasser-Sorbet)?",
          nl: "Wat is de traditionele Perzische techniek voor het creëren van de kenmerkende textuur in faloodeh (rozenwater sorbet)?"
        },
        options: [
          { en: "Using ice cream maker", es: "Usar máquina de helados", de: "Eismaschine verwenden", nl: "IJsmachine gebruiken" },
          { en: "Hand-scraping and breaking ice while adding thin noodles", es: "Raspar y romper hielo a mano mientras se agregan fideos delgados", de: "Eis von Hand kratzen und brechen während dünne Nudeln hinzugefügt werden", nl: "Handmatig ijs schrapen en breken terwijl dunne noedels worden toegevoegd" },
          { en: "Churning with salt", es: "Batir con sal", de: "Mit Salz rühren", nl: "Karnen met zout" },
          { en: "Freezing in molds", es: "Congelar en moldes", de: "In Formen einfrieren", nl: "Invriezen in vormen" }
        ],
        correct: 1,
        explanation: {
          en: "Traditional faloodeh is made by hand-scraping and breaking flavored ice while incorporating thin rice or corn starch noodles, creating a unique granular texture.",
          es: "El faloodeh tradicional se hace raspando y rompiendo hielo saborizado a mano mientras se incorporan fideos delgados de arroz o almidón de maíz, creando una textura granular única.",
          de: "Traditionelles Faloodeh wird hergestellt, indem aromatisiertes Eis von Hand gekratzt und gebrochen wird, während dünne Reis- oder Maisstärke-Nudeln eingearbeitet werden, wodurch eine einzigartige körnige Textur entsteht.",
          nl: "Traditionele faloodeh wordt gemaakt door handmatig gearomatiseerd ijs te schrapen en te breken terwijl dunne rijst- of maïszetmeel noedels worden ingewerkt, wat een unieke korrelige textuur creëert."
        }
      },
      {
        question: {
          en: "Which traditional Russian technique is used to create the characteristic tang in syrniki?",
          es: "¿Qué técnica rusa tradicional se usa para crear el sabor ácido característico en syrniki?",
          de: "Welche traditionelle russische Technik wird verwendet, um die charakteristische Säure in Syrniki zu erzeugen?",
          nl: "Welke traditionele Russische techniek wordt gebruikt om de karakteristieke zuurheid in syrniki te creëren?"
        },
        options: [
          { en: "Adding vinegar", es: "Agregar vinagre", de: "Essig hinzufügen", nl: "Azijn toevoegen" },
          { en: "Using naturally fermented cottage cheese (tvorog)", es: "Usar requesón fermentado naturalmente (tvorog)", de: "Natürlich fermentierte Quark (Tvorog) verwenden", nl: "Natuurlijk gefermenteerde kwark (tvorog) gebruiken" },
          { en: "Adding lemon juice", es: "Agregar jugo de limón", de: "Zitronensaft hinzufügen", nl: "Citroensap toevoegen" },
          { en: "Fermentation process", es: "Proceso de fermentación", de: "Fermentationsprozess", nl: "Fermentatieproces" }
        ],
        correct: 1,
        explanation: {
          en: "Syrniki's characteristic tang comes from tvorog (quark), a naturally fermented fresh cheese that provides both flavor and the proper texture for these Russian pancakes.",
          es: "El sabor ácido característico de syrniki viene del tvorog (quark), un queso fresco fermentado naturalmente que proporciona tanto sabor como la textura adecuada para estos panqueques rusos.",
          de: "Syrnikis charakteristische Säure stammt von Tvorog (Quark), einem natürlich fermentierten Frischkäse, der sowohl Geschmack als auch die richtige Textur für diese russischen Pfannkuchen liefert.",
          nl: "Syrniki's karakteristieke zuurheid komt van tvorog (kwark), een natuurlijk gefermenteerde verse kaas die zowel smaak als de juiste textuur voor deze Russische pannenkoeken biedt."
        }
      },
      {
        question: {
          en: "What is the traditional technique for achieving the perfect lamination in Austrian strudel pastry?",
          es: "¿Cuál es la técnica tradicional para lograr la laminación perfecta en la masa de strudel austriaco?",
          de: "Was ist die traditionelle Technik für die perfekte Schichtung in österreichischem Strudelteig?",
          nl: "Wat is de traditionele techniek voor het bereiken van de perfecte laminering in Oostenrijks strudel deeg?"
        },
        options: [
          { en: "Using a pasta machine", es: "Usar máquina de pasta", de: "Nudelmaschine verwenden", nl: "Pastamachine gebruiken" },
          { en: "Hand-stretching until transparent enough to read through", es: "Estirar a mano hasta que sea transparente lo suficiente para leer a través", de: "Von Hand dehnen bis durchsichtig genug zum Durchlesen", nl: "Met de hand uitrekken tot doorzichtig genoeg om doorheen te lezen" },
          { en: "Rolling with special pin", es: "Enrollar con rodillo especial", de: "Mit speziellem Nudelholz ausrollen", nl: "Rollen met speciale pin" },
          { en: "Folding technique", es: "Técnica de plegado", de: "Falttechnik", nl: "Vouwechniek" }
        ],
        correct: 1,
        explanation: {
          en: "Traditional Austrian strudel pastry is hand-stretched on a large cloth-covered table until it's thin enough to read a newspaper through, requiring skill and practice.",
          es: "La masa de strudel austriaco tradicional se estira a mano en una mesa grande cubierta con tela hasta que esté lo suficientemente delgada para leer un periódico a través, requiriendo habilidad y práctica.",
          de: "Traditioneller österreichischer Strudelteig wird von Hand auf einem großen, mit Tuch bedeckten Tisch gedehnt, bis er dünn genug ist, um eine Zeitung durchzulesen, was Geschick und Übung erfordert.",
          nl: "Traditioneel Oostenrijks strudel deeg wordt met de hand uitgerekt op een grote met doek bedekte tafel tot het dun genoeg is om een krant doorheen te lezen, wat vaardigheid en oefening vereist."
        }
      },
      {
        question: {
          en: "Which traditional Ethiopian technique is used to create the spongy texture in injera (sometimes used as base for sweet toppings)?",
          es: "¿Qué técnica etíope tradicional se usa para crear la textura esponjosa en injera (a veces usada como base para coberturas dulces)?",
          de: "Welche traditionelle äthiopische Technik wird verwendet, um die schwammige Textur in Injera (manchmal als Basis für süße Beläge verwendet) zu erzeugen?",
          nl: "Welke traditionele Ethiopische techniek wordt gebruikt om de sponsachtige textuur in injera (soms gebruikt als basis voor zoete toppings) te creëren?"
        },
        options: [
          { en: "Adding yeast", es: "Agregar levadura", de: "Hefe hinzufügen", nl: "Gist toevoegen" },
          { en: "Natural fermentation of teff flour", es: "Fermentación natural de harina de teff", de: "Natürliche Fermentation von Teff-Mehl", nl: "Natuurlijke fermentatie van teff meel" },
          { en: "Baking powder", es: "Polvo para hornear", de: "Backpulver", nl: "Bakpoeder" },
          { en: "Steam cooking", es: "Cocción al vapor", de: "Dampfgaren", nl: "Stoombereiding" }
        ],
        correct: 1,
        explanation: {
          en: "Injera's characteristic spongy texture comes from the natural fermentation of teff flour batter over several days, creating bubbles and a slight sour flavor.",
          es: "La textura esponjosa característica de injera viene de la fermentación natural de la masa de harina de teff durante varios días, creando burbujas y un ligero sabor agrio.",
          de: "Injeras charakteristische schwammige Textur entsteht durch die natürliche Fermentation von Teff-Mehl-Teig über mehrere Tage, wodurch Blasen und ein leicht saurer Geschmack entstehen.",
          nl: "Injera's karakteristieke sponsachtige textuur komt van de natuurlijke fermentatie van teff meel beslag gedurende meerdere dagen, waardoor bellen en een licht zure smaak ontstaan."
        }
      },
      {
        question: {
          en: "What is the traditional Brazilian technique for achieving the perfect fudgy consistency in brigadeiros?",
          es: "¿Cuál es la técnica brasileña tradicional para lograr la consistencia perfecta de dulce de leche en brigadeiros?",
          de: "Was ist die traditionelle brasilianische Technik für die perfekte Fudge-Konsistenz in Brigadeiros?",
          nl: "Wat is de traditionele Braziliaanse techniek voor het bereiken van de perfecte fudgy consistentie in brigadeiros?"
        },
        options: [
          { en: "Boiling rapidly", es: "Hervir rápidamente", de: "Schnell kochen", nl: "Snel koken" },
          { en: "Cold mixing", es: "Mezclado en frío", de: "Kaltes Mischen", nl: "Koud mixen" },
          { en: "Slow cooking while stirring until mixture pulls from pan", es: "Cocinar lentamente mientras se revuelve hasta que la mezcla se separe de la sartén", de: "Langsam kochen unter Rühren bis sich die Mischung von der Pfanne löst", nl: "Langzaam koken terwijl roeren tot mengsel loslaat van de pan" },
          { en: "Using double boiler", es: "Usar baño maría", de: "Wasserbad verwenden", nl: "Dubbelwandige pan gebruiken" }
        ],
        correct: 2,
        explanation: {
          en: "The perfect brigadeiro consistency is achieved by slow cooking condensed milk, cocoa, and butter while stirring constantly until the mixture thickens and pulls away from the pan sides.",
          es: "La consistencia perfecta de brigadeiro se logra cocinando lentamente leche condensada, cacao y mantequilla mientras se revuelve constantemente hasta que la mezcla se espese y se separe de los lados de la sartén.",
          de: "Die perfekte Brigadeiro-Konsistenz wird durch langsames Kochen von Kondensmilch, Kakao und Butter unter ständigem Rühren erreicht, bis die Mischung eindickt und sich von den Pfannenseiten löst.",
          nl: "De perfecte brigadeiro consistentie wordt bereikt door langzaam koken van gecondenseerde melk, cacao en boter terwijl constant wordt geroerd tot het mengsel dik wordt en loslaat van de zijkanten van de pan."
        }
      },
      {
        question: {
          en: "Which traditional Mexican technique creates the distinctive texture in tres leches cake?",
          es: "¿Qué técnica mexicana tradicional crea la textura distintiva en el pastel tres leches?",
          de: "Welche traditionelle mexikanische Technik erzeugt die charakteristische Textur in Tres-Leches-Kuchen?",
          nl: "Welke traditionele Mexicaanse techniek creëert de kenmerkende textuur in tres leches taart?"
        },
        options: [
          { en: "Soaking the cake slowly with three milk mixture", es: "Empapar el pastel lentamente con mezcla de tres leches", de: "Den Kuchen langsam mit Drei-Milch-Mischung tränken", nl: "De taart langzaam weken met drie melken mengsel" },
          { en: "Baking with milk", es: "Hornear con leche", de: "Mit Milch backen", nl: "Bakken met melk" },
          { en: "Layering milk between cake layers", es: "Poner capas de leche entre las capas del pastel", de: "Milch zwischen Kuchenschichten schichten", nl: "Melk tussen taartlagen leggen" },
          { en: "Freezing with milk", es: "Congelar con leche", de: "Mit Milch einfrieren", nl: "Bevriezen met melk" }
        ],
        correct: 0,
        explanation: {
          en: "The distinctive texture of tres leches cake comes from slowly soaking the baked sponge cake with a mixture of three milks (evaporated, condensed, and heavy cream) until saturated.",
          es: "La textura distintiva del pastel tres leches viene de empapar lentamente el bizcocho horneado con una mezcla de tres leches (evaporada, condensada y crema espesa) hasta saturarlo.",
          de: "Die charakteristische Textur von Tres-Leches-Kuchen entsteht durch langsames Tränken des gebackenen Biskuitkuchens mit einer Mischung aus drei Milchsorten (Kondens-, gesüßte Kondens- und Sahne) bis zur Sättigung.",
          nl: "De kenmerkende textuur van tres leches taart komt van het langzaam weken van de gebakken biscuit met een mengsel van drie melksoorten (gecondenseerd, zoet gecondenseerd en slagroom) tot verzadigd."
        }
      },
      {
        question: {
          en: "What is the key technique for creating the smooth, glossy finish on chocolate ganache used in international desserts?",
          es: "¿Cuál es la técnica clave para crear el acabado suave y brillante en ganache de chocolate usado en postres internacionales?",
          de: "Was ist die Schlüsseltechnik für die glatte, glänzende Oberfläche von Schokoladenganache in internationalen Desserts?",
          nl: "Wat is de belangrijkste techniek voor het creëren van de gladde, glanzende afwerking op chocolade ganache gebruikt in internationale desserts?"
        },
        options: [
          { en: "Adding butter", es: "Agregar mantequilla", de: "Butter hinzufügen", nl: "Boter toevoegen" },
          { en: "Proper emulsification by stirring in one direction", es: "Emulsificación adecuada revolviendo en una dirección", de: "Richtige Emulgierung durch Rühren in eine Richtung", nl: "Juiste emulsificatie door roeren in één richting" },
          { en: "Whipping air into mixture", es: "Batir aire en la mezcla", de: "Luft in die Mischung schlagen", nl: "Lucht in het mengsel kloppen" },
          { en: "Adding corn syrup", es: "Agregar jarabe de maíz", de: "Maissirup hinzufügen", nl: "Maïssiroop toevoegen" }
        ],
        correct: 1,
        explanation: {
          en: "Perfect ganache requires proper emulsification by stirring hot cream into chocolate in one direction from the center outward, creating a smooth, glossy finish without air bubbles.",
          es: "El ganache perfecto requiere emulsificación adecuada revolviendo crema caliente en chocolate en una dirección desde el centro hacia afuera, creando un acabado suave y brillante sin burbujas de aire.",
          de: "Perfekte Ganache erfordert richtige Emulgierung durch Rühren heißer Sahne in Schokolade in eine Richtung von der Mitte nach außen, wodurch eine glatte, glänzende Oberfläche ohne Luftblasen entsteht.",
          nl: "Perfecte ganache vereist juiste emulsificatie door warme room in chocolade te roeren in één richting van het midden naar buiten, wat een gladde, glanzende afwerking zonder luchtbellen creëert."
        }
      },
      {
        question: {
          en: "Which traditional Middle Eastern technique is used to create the delicate sugar threads in pashmak (Persian cotton candy)?",
          es: "¿Qué técnica tradicional del Medio Oriente se usa para crear los hilos delicados de azúcar en pashmak (algodón de azúcar persa)?",
          de: "Welche traditionelle nahöstliche Technik wird verwendet, um die zarten Zuckerfäden in Pashmak (persische Zuckerwatte) herzustellen?",
          nl: "Welke traditionele Midden-Oosterse techniek wordt gebruikt om de delicate suikerdraadjes in pashmak (Perzische suikerspin) te maken?"
        },
        options: [
          { en: "Hand-pulling hot sugar into thin strands", es: "Tirar azúcar caliente a mano en hebras delgadas", de: "Heißen Zucker von Hand in dünne Stränge ziehen", nl: "Warme suiker met de hand in dunne strengen trekken" },
          { en: "Using a spinning machine", es: "Usar máquina giratoria", de: "Verwendung einer Drehmaschine", nl: "Een draaiende machine gebruiken" },
          { en: "Crystallization process", es: "Proceso de cristalización", de: "Kristallisationsprozess", nl: "Kristallisatieproces" },
          { en: "Steam injection", es: "Inyección de vapor", de: "Dampfinjektion", nl: "Stoominjectie" }
        ],
        correct: 0,
        explanation: {
          en: "Traditional pashmak is made by hand-pulling hot sugar syrup into incredibly thin strands, a skill requiring years of practice and precise temperature control to achieve the cotton-like texture.",
          es: "El pashmak tradicional se hace tirando jarabe de azúcar caliente a mano en hebras increíblemente delgadas, una habilidad que requiere años de práctica y control preciso de temperatura para lograr la textura similar al algodón.",
          de: "Traditioneller Pashmak wird hergestellt, indem heißer Zuckersirup von Hand zu unglaublich dünnen Strängen gezogen wird, eine Fertigkeit, die jahrelange Übung und präzise Temperaturkontrolle erfordert, um die baumwollähnliche Textur zu erreichen.",
          nl: "Traditionele pashmak wordt gemaakt door warme suikersiroop met de hand uit te trekken tot ongelooflijk dunne strengen, een vaardigheid die jaren van oefening en precieze temperatuurcontrole vereist om de katoenachtige textuur te bereiken."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();