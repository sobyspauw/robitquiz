// Vegetarian Dishes Quiz - Level 5: Seasonal Vegetarian Cooking
(function() {
  "use strict";
  const level5 = {
    name: {
      en: "Vegetarian Level 5",
      es: "Vegetariano Nivel 5",
      de: "Vegetarisch Stufe 5",
      nl: "Vegetarisch Level 5"
    },
    questions: [
      {
        question: {
          en: "Which vegetables are considered peak season in spring?",
          es: "¿Qué verduras se consideran de temporada alta en primavera?",
          de: "Welches Gemüse gilt als Hauptsaison im Frühling?",
          nl: "Welke groenten worden beschouwd als piekseizoen in de lente?"
        },
        options: [
          { en: "Asparagus, peas, artichokes", es: "Espárragos, guisantes, alcachofas", de: "Spargel, Erbsen, Artischocken", nl: "Asperges, erwten, artisjokken" },
          { en: "Pumpkin, butternut squash, sweet potatoes", es: "Calabaza, calabaza butternut, batatas", de: "Kürbis, Butternut-Kürbis, Süßkartoffeln", nl: "Pompoen, butternut squash, zoete aardappels" },
          { en: "Tomatoes, corn, zucchini", es: "Tomates, maíz, calabacín", de: "Tomaten, Mais, Zucchini", nl: "Tomaten, maïs, courgette" },
          { en: "Brussels sprouts, cabbage, leeks", es: "Coles de Bruselas, repollo, puerros", de: "Rosenkohl, Kohl, Lauch", nl: "Spruitjes, kool, prei" }
        ],
        correct: 0,
        explanation: {
          en: "Spring vegetables like asparagus, peas, and artichokes are at their peak freshness and flavor during spring months, offering tender textures and bright flavors.",
          es: "Las verduras de primavera como espárragos, guisantes y alcachofas están en su máxima frescura y sabor durante los meses de primavera, ofreciendo texturas tiernas y sabores brillantes.",
          de: "Frühlingsgemüse wie Spargel, Erbsen und Artischocken haben in den Frühlingsmonaten ihre beste Frische und ihren besten Geschmack und bieten zarte Texturen und helle Aromen.",
          nl: "Lentegroenten zoals asperges, erwten en artisjokken zijn op hun piek van versheid en smaak tijdens de lentemaanden, biedend zachte texturen en heldere smaken."
        }
      },
      {
        question: {
          en: "What is the best way to preserve summer herbs for winter use?",
          es: "¿Cuál es la mejor manera de preservar hierbas de verano para uso en invierno?",
          de: "Was ist der beste Weg, Sommerkräuter für den Wintergebrauch zu konservieren?",
          nl: "Wat is de beste manier om zomerkruiden te bewaren voor wintergebruik?"
        },
        options: [
          { en: "Freeze in olive oil or ice cube trays", es: "Congelar en aceite de oliva o bandejas de hielo", de: "In Olivenöl oder Eiswürfelformen einfrieren", nl: "Invriezen in olijfolie of ijsblokjesvormen" },
          { en: "Dry them completely and store in plastic bags", es: "Secarlas completamente y almacenar en bolsas plásticas", de: "Vollständig trocknen und in Plastikbeuteln lagern", nl: "Volledig drogen en bewaren in plastic zakken" },
          { en: "Store fresh in the refrigerator", es: "Almacenar fresco en el refrigerador", de: "Frisch im Kühlschrank lagern", nl: "Vers bewaren in de koelkast" },
          { en: "Pickle in vinegar", es: "Encurtir en vinagre", de: "In Essig einlegen", nl: "Inmaken in azijn" }
        ],
        correct: 0,
        explanation: {
          en: "Freezing herbs in olive oil preserves their fresh flavor better than drying. Ice cube trays make convenient portions that can be added directly to cooking.",
          es: "Congelar hierbas en aceite de oliva preserva mejor su sabor fresco que secar. Las bandejas de hielo hacen porciones convenientes que se pueden añadir directamente al cocinar.",
          de: "Das Einfrieren von Kräutern in Olivenöl bewahrt ihren frischen Geschmack besser als das Trocknen. Eiswürfelformen machen praktische Portionen, die direkt zum Kochen hinzugefügt werden können.",
          nl: "Kruiden invriezen in olijfolie behoudt hun verse smaak beter dan drogen. IJsblokjesvormen maken handige porties die direct aan het koken kunnen worden toegevoegd."
        }
      },
      {
        question: {
          en: "Which cooking method best suits root vegetables in autumn?",
          es: "¿Qué método de cocción se adapta mejor a los tubérculos en otoño?",
          de: "Welche Kochmethode eignet sich am besten für Wurzelgemüse im Herbst?",
          nl: "Welke kookmethode past het beste bij wortelgroenten in de herfst?"
        },
        options: [
          { en: "Roasting at high heat to caramelize natural sugars", es: "Asar a alta temperatura para caramelizar azúcares naturales", de: "Bei hoher Hitze rösten, um natürliche Zucker zu karamellisieren", nl: "Roosteren op hoge temperatuur om natuurlijke suikers te karameliseren" },
          { en: "Steaming to keep them light", es: "Cocer al vapor para mantenerlas ligeras", de: "Dämpfen, um sie leicht zu halten", nl: "Stomen om ze licht te houden" },
          { en: "Eating them raw only", es: "Comerlas solo crudas", de: "Nur roh essen", nl: "Alleen rauw eten" },
          { en: "Boiling for long periods", es: "Hervir por períodos largos", de: "Lange Zeit kochen", nl: "Lang koken" }
        ],
        correct: 0,
        explanation: {
          en: "Autumn root vegetables like carrots, parsnips, and sweet potatoes have high natural sugar content that caramelizes beautifully when roasted, creating deep, complex flavors.",
          es: "Los tubérculos de otoño como zanahorias, chirivías y batatas tienen alto contenido de azúcar natural que se carameliza hermosamente cuando se asan, creando sabores profundos y complejos.",
          de: "Herbstliche Wurzelgemüse wie Karotten, Pastinaken und Süßkartoffeln haben einen hohen natürlichen Zuckergehalt, der beim Rösten wunderschön karamellisiert und tiefe, komplexe Aromen schafft.",
          nl: "Herfst wortelgroenten zoals wortelen, pastinak en zoete aardappels hebben een hoog natuurlijk suikergehalte dat prachtig karameliseert bij het roosteren, wat diepe, complexe smaken creëert."
        }
      },
      {
        question: {
          en: "What is the advantage of eating seasonal vegetables?",
          es: "¿Cuál es la ventaja de comer verduras de temporada?",
          de: "Was ist der Vorteil des Essens von Saisongemüse?",
          nl: "Wat is het voordeel van het eten van seizoensgroenten?"
        },
        options: [
          { en: "Better flavor, nutrition, and environmental sustainability", es: "Mejor sabor, nutrición y sostenibilidad ambiental", de: "Besserer Geschmack, Ernährung und ökologische Nachhaltigkeit", nl: "Betere smaak, voeding en milieuduurzaamheid" },
          { en: "They cost more money", es: "Cuestan más dinero", de: "Sie kosten mehr Geld", nl: "Ze kosten meer geld" },
          { en: "They are harder to find", es: "Son más difíciles de encontrar", de: "Sie sind schwerer zu finden", nl: "Ze zijn moeilijker te vinden" },
          { en: "They require special cooking methods", es: "Requieren métodos especiales de cocción", de: "Sie erfordern spezielle Kochmethoden", nl: "Ze vereisen speciale kookmethoden" }
        ],
        correct: 0,
        explanation: {
          en: "Seasonal vegetables are harvested at peak ripeness, offering optimal flavor and nutrition. They also require less transportation and storage, reducing environmental impact.",
          es: "Las verduras de temporada se cosechan en su punto máximo de madurez, ofreciendo sabor y nutrición óptimos. También requieren menos transporte y almacenamiento, reduciendo el impacto ambiental.",
          de: "Saisonales Gemüse wird bei optimaler Reife geerntet und bietet optimalen Geschmack und Ernährung. Es erfordert auch weniger Transport und Lagerung, was die Umweltauswirkungen reduziert.",
          nl: "Seizoensgroenten worden geoogst op piekrijpheid, biedend optimale smaak en voeding. Ze vereisen ook minder transport en opslag, wat de milieuimpact vermindert."
        }
      },
      {
        question: {
          en: "Which winter vegetable is highest in vitamin C?",
          es: "¿Qué verdura de invierno tiene más vitamina C?",
          de: "Welches Wintergemüse hat den höchsten Vitamin-C-Gehalt?",
          nl: "Welke wintergroente heeft het hoogste vitamine C gehalte?"
        },
        options: [
          { en: "Brussels sprouts", es: "Coles de Bruselas", de: "Rosenkohl", nl: "Spruitjes" },
          { en: "Carrots", es: "Zanahorias", de: "Karotten", nl: "Wortelen" },
          { en: "Potatoes", es: "Papas", de: "Kartoffeln", nl: "Aardappels" },
          { en: "Beets", es: "Remolachas", de: "Rüben", nl: "Bieten" }
        ],
        correct: 0,
        explanation: {
          en: "Brussels sprouts contain more vitamin C than oranges - about 85mg per cup. They're a winter superfood that provides essential nutrients when fresh produce is limited.",
          es: "Las coles de Bruselas contienen más vitamina C que las naranjas - aproximadamente 85mg por taza. Son un superalimento de invierno que proporciona nutrientes esenciales cuando los productos frescos son limitados.",
          de: "Rosenkohl enthält mehr Vitamin C als Orangen - etwa 85mg pro Tasse. Sie sind ein Winter-Superfood, das essenzielle Nährstoffe liefert, wenn frische Produkte begrenzt sind.",
          nl: "Spruitjes bevatten meer vitamine C dan sinaasappels - ongeveer 85mg per kop. Ze zijn een winter superfood dat essentiële voedingsstoffen levert wanneer verse producten beperkt zijn."
        }
      },
      {
        question: {
          en: "What is the best storage method for winter squash?",
          es: "¿Cuál es el mejor método de almacenamiento para la calabaza de invierno?",
          de: "Was ist die beste Lagerungsmethode für Winterkürbis?",
          nl: "Wat is de beste bewaarmethode voor winterpompoen?"
        },
        options: [
          { en: "Cool, dry place with good air circulation", es: "Lugar fresco y seco con buena circulación de aire", de: "Kühler, trockener Ort mit guter Luftzirkulation", nl: "Koele, droge plaats met goede luchtcirculatie" },
          { en: "Refrigerator immediately", es: "Refrigerador inmediatamente", de: "Sofort in den Kühlschrank", nl: "Koelkast onmiddellijk" },
          { en: "Freezer for long-term storage", es: "Congelador para almacenamiento a largo plazo", de: "Gefrierschrank für Langzeitlagerung", nl: "Vriezer voor lange termijn bewaring" },
          { en: "In water to prevent drying", es: "En agua para prevenir el secado", de: "In Wasser, um Austrocknung zu verhindern", nl: "In water om uitdroging te voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Winter squash like butternut and acorn can be stored for months in a cool (50-55°F), dry place with good ventilation. They should not be refrigerated until cut.",
          es: "La calabaza de invierno como butternut y bellota se puede almacenar por meses en un lugar fresco (10-13°C), seco con buena ventilación. No deben refrigerarse hasta cortarse.",
          de: "Winterkürbisse wie Butternut und Eichel können monatelang an einem kühlen (10-13°C), trockenen Ort mit guter Belüftung gelagert werden. Sie sollten nicht gekühlt werden, bis sie geschnitten sind.",
          nl: "Winterpompoenen zoals butternut en eikel kunnen maanden worden bewaard op een koele (10-13°C), droge plaats met goede ventilatie. Ze mogen niet gekoeld worden tot ze gesneden zijn."
        }
      },
      {
        question: {
          en: "Which summer vegetable should be harvested when small for best flavor?",
          es: "¿Qué verdura de verano debe cosecharse cuando es pequeña para mejor sabor?",
          de: "Welches Sommergemüse sollte klein geerntet werden für den besten Geschmack?",
          nl: "Welke zomergroente moet klein geoogst worden voor de beste smaak?"
        },
        options: [
          { en: "Zucchini", es: "Calabacín", de: "Zucchini", nl: "Courgette" },
          { en: "Watermelon", es: "Sandía", de: "Wassermelone", nl: "Watermeloen" },
          { en: "Pumpkin", es: "Calabaza", de: "Kürbis", nl: "Pompoen" },
          { en: "Winter squash", es: "Calabaza de invierno", de: "Winterkürbis", nl: "Winterpompoen" }
        ],
        correct: 0,
        explanation: {
          en: "Small zucchini (6-8 inches) have the best texture and flavor. Large zucchini become watery, seedy, and tough, making them less desirable for most cooking methods.",
          es: "Los calabacines pequeños (15-20 cm) tienen la mejor textura y sabor. Los calabacines grandes se vuelven aguados, con semillas y duros, haciéndolos menos deseables para la mayoría de métodos de cocción.",
          de: "Kleine Zucchini (15-20 cm) haben die beste Textur und den besten Geschmack. Große Zucchini werden wässrig, kernig und zäh, was sie für die meisten Kochmethoden weniger wünschenswert macht.",
          nl: "Kleine courgettes (15-20 cm) hebben de beste textuur en smaak. Grote courgettes worden waterig, pittig en taai, waardoor ze minder gewenst zijn voor de meeste kookmethoden."
        }
      },
      {
        question: {
          en: "What is the traditional way to preserve cabbage for winter?",
          es: "¿Cuál es la manera tradicional de preservar repollo para el invierno?",
          de: "Was ist der traditionelle Weg, Kohl für den Winter zu konservieren?",
          nl: "Wat is de traditionele manier om kool te bewaren voor de winter?"
        },
        options: [
          { en: "Fermentation into sauerkraut", es: "Fermentación en chucrut", de: "Fermentation zu Sauerkraut", nl: "Fermentatie tot zuurkool" },
          { en: "Freezing whole heads", es: "Congelar cabezas enteras", de: "Ganze Köpfe einfrieren", nl: "Hele koppen invriezen" },
          { en: "Drying in the sun", es: "Secar al sol", de: "In der Sonne trocknen", nl: "Drogen in de zon" },
          { en: "Storing in salt water", es: "Almacenar en agua salada", de: "In Salzwasser lagern", nl: "Bewaren in zout water" }
        ],
        correct: 0,
        explanation: {
          en: "Fermentation transforms cabbage into sauerkraut, preserving it for months while creating beneficial probiotics and maintaining nutritional value better than other preservation methods.",
          es: "La fermentación transforma el repollo en chucrut, preservándolo por meses mientras crea probióticos beneficiosos y mantiene el valor nutricional mejor que otros métodos de preservación.",
          de: "Fermentation verwandelt Kohl in Sauerkraut, bewahrt ihn monatelang auf, während es nützliche Probiotika schafft und den Nährwert besser als andere Konservierungsmethoden erhält.",
          nl: "Fermentatie transformeert kool tot zuurkool, bewaart het maanden terwijl het gunstige probiotica creëert en voedingswaarde beter behoudt dan andere bewaarmethoden."
        }
      },
      {
        question: {
          en: "Which spring green is known for its bitter flavor that pairs well with sweet ingredients?",
          es: "¿Qué verdura de primavera es conocida por su sabor amargo que combina bien con ingredientes dulces?",
          de: "Welches Frühlingsgrün ist für seinen bitteren Geschmack bekannt, der gut zu süßen Zutaten passt?",
          nl: "Welke lentegroen staat bekend om zijn bittere smaak die goed samengaat met zoete ingrediënten?"
        },
        options: [
          { en: "Dandelion greens", es: "Hojas de diente de león", de: "Löwenzahnblätter", nl: "Paardenbloembladeren" },
          { en: "Spinach", es: "Espinacas", de: "Spinat", nl: "Spinazie" },
          { en: "Lettuce", es: "Lechuga", de: "Salat", nl: "Sla" },
          { en: "Chard", es: "Acelga", de: "Mangold", nl: "Snijbiet" }
        ],
        correct: 0,
        explanation: {
          en: "Dandelion greens have a distinctly bitter flavor that's balanced beautifully with sweet elements like dried fruit, honey, or caramelized onions in spring salads.",
          es: "Las hojas de diente de león tienen un sabor distintivamente amargo que se equilibra hermosamente con elementos dulces como frutas secas, miel, o cebollas caramelizadas en ensaladas de primavera.",
          de: "Löwenzahnblätter haben einen deutlich bitteren Geschmack, der wunderschön mit süßen Elementen wie getrockneten Früchten, Honig oder karamellisierten Zwiebeln in Frühlingssalaten ausbalanciert wird.",
          nl: "Paardenbloembladeren hebben een uitgesproken bittere smaak die prachtig wordt gebalanceerd met zoete elementen zoals gedroogd fruit, honing, of gekarameliseerde uien in lentesalades."
        }
      },
      {
        question: {
          en: "What is the ideal harvest time for summer tomatoes?",
          es: "¿Cuál es el momento ideal de cosecha para los tomates de verano?",
          de: "Was ist die ideale Erntezeit für Sommertomaten?",
          nl: "Wat is de ideale oogsttijd voor zomertomaten?"
        },
        options: [
          { en: "When they're fully colored but still firm", es: "Cuando están completamente coloreados pero aún firmes", de: "Wenn sie vollständig gefärbt, aber noch fest sind", nl: "Wanneer ze volledig gekleurd maar nog stevig zijn" },
          { en: "When they're completely soft", es: "Cuando están completamente suaves", de: "Wenn sie völlig weich sind", nl: "Wanneer ze volledig zacht zijn" },
          { en: "When they're still green", es: "Cuando aún están verdes", de: "Wenn sie noch grün sind", nl: "Wanneer ze nog groen zijn" },
          { en: "Only when they fall from the vine", es: "Solo cuando caen de la planta", de: "Nur wenn sie von der Rebe fallen", nl: "Alleen wanneer ze van de plant vallen" }
        ],
        correct: 0,
        explanation: {
          en: "Tomatoes should be harvested when fully colored but still firm. They'll continue to soften after picking, and this timing ensures the best balance of flavor and texture.",
          es: "Los tomates deben cosecharse cuando están completamente coloreados pero aún firmes. Continuarán suavizándose después de la cosecha, y este momento asegura el mejor equilibrio de sabor y textura.",
          de: "Tomaten sollten geerntet werden, wenn sie vollständig gefärbt, aber noch fest sind. Sie werden nach der Ernte weich werden, und dieses Timing gewährleistet das beste Gleichgewicht von Geschmack und Textur.",
          nl: "Tomaten moeten worden geoogst wanneer ze volledig gekleurd maar nog stevig zijn. Ze zullen na het plukken zachter worden, en deze timing zorgt voor de beste balans van smaak en textuur."
        }
      },
      {
        question: {
          en: "Which autumn spice blend complements roasted root vegetables?",
          es: "¿Qué mezcla de especias de otoño complementa las verduras de raíz asadas?",
          de: "Welche Herbstgewürzmischung ergänzt geröstetes Wurzelgemüse?",
          nl: "Welk herfst kruidenmengsel vult geroosterde wortelgroenten aan?"
        },
        options: [
          { en: "Cinnamon, nutmeg, thyme, and rosemary", es: "Canela, nuez moscada, tomillo y romero", de: "Zimt, Muskatnuss, Thymian und Rosmarin", nl: "Kaneel, nootmuskaat, tijm en rozemarijn" },
          { en: "Basil, oregano, and garlic", es: "Albahaca, orégano y ajo", de: "Basilikum, Oregano und Knoblauch", nl: "Basilicum, oregano en knoflook" },
          { en: "Curry powder and turmeric", es: "Polvo de curry y cúrcuma", de: "Currypulver und Kurkuma", nl: "Currypoeder en kurkuma" },
          { en: "Soy sauce and ginger", es: "Salsa de soja y jengibre", de: "Sojasoße und Ingwer", nl: "Sojasaus en gember" }
        ],
        correct: 0,
        explanation: {
          en: "Warm spices like cinnamon and nutmeg enhance the natural sweetness of roasted root vegetables, while thyme and rosemary add earthy, aromatic notes perfect for autumn flavors.",
          es: "Las especias cálidas como canela y nuez moscada realzan la dulzura natural de las verduras de raíz asadas, mientras tomillo y romero añaden notas terrosas y aromáticas perfectas para sabores de otoño.",
          de: "Warme Gewürze wie Zimt und Muskatnuss verstärken die natürliche Süße gerösteter Wurzelgemüse, während Thymian und Rosmarin erdige, aromatische Noten hinzufügen, die perfekt für Herbstaromen sind.",
          nl: "Warme kruiden zoals kaneel en nootmuskaat versterken de natuurlijke zoetheid van geroosterde wortelgroenten, terwijl tijm en rozemarijn aardse, aromatische tonen toevoegen perfect voor herfssmaken."
        }
      },
      {
        question: {
          en: "How should fresh spring peas be cooked to maintain their bright color and sweetness?",
          es: "¿Cómo deben cocinarse los guisantes frescos de primavera para mantener su color brillante y dulzura?",
          de: "Wie sollten frische Frühlingserbsen gekocht werden, um ihre helle Farbe und Süße zu bewahren?",
          nl: "Hoe moeten verse lenteerwten worden gekookt om hun heldere kleur en zoetheid te behouden?"
        },
        options: [
          { en: "Brief blanching in boiling water, then ice bath", es: "Blanqueado breve en agua hirviendo, luego baño de hielo", de: "Kurzes Blanchieren in kochendem Wasser, dann Eisbad", nl: "Kort blancheren in kokend water, dan ijsbad" },
          { en: "Long, slow braising", es: "Braseado largo y lento", de: "Langes, langsames Schmoren", nl: "Lang, langzaam sudderen" },
          { en: "Deep frying until crispy", es: "Freír hasta que queden crujientes", de: "Frittieren bis knusprig", nl: "Frituren tot knapperig" },
          { en: "Roasting at high heat", es: "Asar a alta temperatura", de: "Bei hoher Hitze rösten", nl: "Roosteren op hoge temperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Brief blanching (2-3 minutes) followed by an ice bath stops cooking immediately, preserving the bright green color, sweet flavor, and crisp-tender texture of spring peas.",
          es: "El blanqueado breve (2-3 minutos) seguido de un baño de hielo detiene la cocción inmediatamente, preservando el color verde brillante, sabor dulce y textura crujiente-tierna de los guisantes de primavera.",
          de: "Kurzes Blanchieren (2-3 Minuten) gefolgt von einem Eisbad stoppt das Kochen sofort und bewahrt die hellgrüne Farbe, den süßen Geschmack und die knackig-zarte Textur von Frühlingserbsen.",
          nl: "Kort blancheren (2-3 minuten) gevolgd door een ijsbad stopt het koken onmiddellijk, behoudt de heldere groene kleur, zoete smaak en krokant-zachte textuur van lenteerwten."
        }
      },
      {
        question: {
          en: "Which winter cooking technique brings out the best in hearty vegetables?",
          es: "¿Qué técnica de cocina de invierno saca lo mejor de las verduras abundantes?",
          de: "Welche Winterkochtechnik bringt das Beste aus herzhaftem Gemüse heraus?",
          nl: "Welke winter kooktechniek haalt het beste uit stevige groenten?"
        },
        options: [
          { en: "Slow braising with herbs and aromatics", es: "Braseado lento con hierbas y aromáticos", de: "Langsames Schmoren mit Kräutern und Aromaten", nl: "Langzaam sudderen met kruiden en aromaten" },
          { en: "Quick stir-frying", es: "Salteado rápido", de: "Schnelles Pfannenrühren", nl: "Snel roerbakken" },
          { en: "Raw preparation only", es: "Solo preparación cruda", de: "Nur rohe Zubereitung", nl: "Alleen rauwe bereiding" },
          { en: "Steaming for 2 minutes", es: "Cocción al vapor por 2 minutos", de: "2 Minuten dämpfen", nl: "2 minuten stomen" }
        ],
        correct: 0,
        explanation: {
          en: "Winter vegetables like turnips, parsnips, and cabbage benefit from slow braising, which breaks down tough fibers and develops deep, complex flavors through long, gentle cooking.",
          es: "Las verduras de invierno como nabos, chirivías y repollo se benefician del braseado lento, que descompone fibras duras y desarrolla sabores profundos y complejos a través de cocción larga y suave.",
          de: "Wintergemüse wie Rüben, Pastinaken und Kohl profitieren vom langsamen Schmoren, das zähe Fasern aufbricht und tiefe, komplexe Aromen durch langes, sanftes Kochen entwickelt.",
          nl: "Wintergroenten zoals rapen, pastinak en kool profiteren van langzaam sudderen, wat taaie vezels afbreekt en diepe, complexe smaken ontwikkelt door lang, zacht koken."
        }
      },
      {
        question: {
          en: "What makes summer squash different from winter squash?",
          es: "¿Qué hace que la calabaza de verano sea diferente de la calabaza de invierno?",
          de: "Was macht Sommerkürbis anders als Winterkürbis?",
          nl: "Wat maakt zomerpompoen anders dan winterpompoen?"
        },
        options: [
          { en: "Summer squash has tender, edible skin and is harvested young", es: "La calabaza de verano tiene piel tierna y comestible y se cosecha joven", de: "Sommerkürbis hat zarte, essbare Schale und wird jung geerntet", nl: "Zomerpompoen heeft zachte, eetbare schil en wordt jong geoogst" },
          { en: "They are exactly the same", es: "Son exactamente iguales", de: "Sie sind genau gleich", nl: "Ze zijn precies hetzelfde" },
          { en: "Summer squash can only be eaten raw", es: "La calabaza de verano solo se puede comer cruda", de: "Sommerkürbis kann nur roh gegessen werden", nl: "Zomerpompoen kan alleen rauw gegeten worden" },
          { en: "Summer squash is always yellow", es: "La calabaza de verano siempre es amarilla", de: "Sommerkürbis ist immer gelb", nl: "Zomerpompoen is altijd geel" }
        ],
        correct: 0,
        explanation: {
          en: "Summer squash like zucchini and yellow squash are harvested young with tender, edible skins, while winter squash develop hard shells and are harvested mature for long storage.",
          es: "La calabaza de verano como calabacín y calabaza amarilla se cosechan jóvenes con pieles tiernas y comestibles, mientras las calabazas de invierno desarrollan cáscaras duras y se cosechan maduras para almacenamiento largo.",
          de: "Sommerkürbisse wie Zucchini und gelber Kürbis werden jung mit zarten, essbaren Schalen geerntet, während Winterkürbisse harte Schalen entwickeln und reif für lange Lagerung geerntet werden.",
          nl: "Zomerpompoenen zoals courgette en gele pompoen worden jong geoogst met zachte, eetbare schillen, terwijl winterpompoenen harde schalen ontwikkelen en rijp worden geoogst voor lange bewaring."
        }
      },
      {
        question: {
          en: "Which preservation method works best for peak summer produce?",
          es: "¿Qué método de preservación funciona mejor para los productos de verano en su punto máximo?",
          de: "Welche Konservierungsmethode funktioniert am besten für Sommerproduce in Spitzenqualität?",
          nl: "Welke bewaarmethode werkt het beste voor piek zomerproducten?"
        },
        options: [
          { en: "Freezing at peak ripeness after blanching", es: "Congelar en su punto máximo de madurez después de blanquear", de: "Einfrieren bei optimaler Reife nach dem Blanchieren", nl: "Invriezen op piekrijpheid na blancheren" },
          { en: "Drying in the sun for weeks", es: "Secar al sol por semanas", de: "Wochenlang in der Sonne trocknen", nl: "Weken drogen in de zon" },
          { en: "Storing in the refrigerator immediately", es: "Almacenar en el refrigerador inmediatamente", de: "Sofort im Kühlschrank lagern", nl: "Onmiddellijk bewaren in de koelkast" },
          { en: "Canning without any processing", es: "Enlatar sin ningún procesamiento", de: "Einmachen ohne jede Verarbeitung", nl: "Inmaken zonder enige verwerking" }
        ],
        correct: 0,
        explanation: {
          en: "Blanching vegetables briefly before freezing helps preserve color, texture, and nutrients. This method captures summer vegetables at their peak for enjoyment throughout the year.",
          es: "Blanquear verduras brevemente antes de congelar ayuda a preservar color, textura y nutrientes. Este método captura las verduras de verano en su punto máximo para disfrutar durante todo el año.",
          de: "Das kurze Blanchieren von Gemüse vor dem Einfrieren hilft, Farbe, Textur und Nährstoffe zu bewahren. Diese Methode erfasst Sommergemüse auf seinem Höhepunkt zum Genuss das ganze Jahr über.",
          nl: "Groenten kort blancheren voor het invriezen helpt kleur, textuur en voedingsstoffen te behouden. Deze methode vangt zomergroenten op hun piek voor genot het hele jaar door."
        }
      },
      {
        question: {
          en: "What is the nutritional advantage of eating produce in season?",
          es: "¿Cuál es la ventaja nutricional de comer productos de temporada?",
          de: "Was ist der ernährungsphysiologische Vorteil des Essens von saisonalen Produkten?",
          nl: "Wat is het voedingsvoordeel van het eten van seizoensproducten?"
        },
        options: [
          { en: "Higher vitamin and antioxidant content when fresh and locally grown", es: "Mayor contenido de vitaminas y antioxidantes cuando son frescos y cultivados localmente", de: "Höherer Vitamin- und Antioxidansgehalt wenn frisch und lokal angebaut", nl: "Hoger vitamine- en antioxidantgehalte wanneer vers en lokaal geteeld" },
          { en: "No nutritional difference", es: "No hay diferencia nutricional", de: "Kein ernährungsphysiologischer Unterschied", nl: "Geen voedingsverschil" },
          { en: "Less nutritious than processed foods", es: "Menos nutritivo que los alimentos procesados", de: "Weniger nahrhaft als verarbeitete Lebensmittel", nl: "Minder voedzaam dan verwerkte voedingsmiddelen" },
          { en: "Only provides calories", es: "Solo proporciona calorías", de: "Liefert nur Kalorien", nl: "Levert alleen calorieën" }
        ],
        correct: 0,
        explanation: {
          en: "Seasonal, locally grown produce is harvested at peak ripeness, containing maximum vitamins and antioxidants. Long-distance transport and storage can diminish nutritional content.",
          es: "Los productos de temporada cultivados localmente se cosechan en su punto máximo de madurez, conteniendo máximo de vitaminas y antioxidantes. El transporte a larga distancia y el almacenamiento pueden disminuir el contenido nutricional.",
          de: "Saisonale, lokal angebaute Produkte werden bei optimaler Reife geerntet und enthalten maximale Vitamine und Antioxidantien. Transport über weite Strecken und Lagerung können den Nährwert verringern.",
          nl: "Seizoens, lokaal geteelde producten worden geoogst op piekrijpheid, bevattend maximale vitamines en antioxidanten. Lange afstand transport en opslag kunnen voedingsinhoud verminderen."
        }
      },
      {
        question: {
          en: "Which technique helps extend the season for leafy greens in hot weather?",
          es: "¿Qué técnica ayuda a extender la temporada para verduras de hoja verde en clima caliente?",
          de: "Welche Technik hilft, die Saison für Blattgrün bei heißem Wetter zu verlängern?",
          nl: "Welke techniek helpt het seizoen voor bladgroenten bij heet weer te verlengen?"
        },
        options: [
          { en: "Shade cloth and frequent watering", es: "Tela de sombra y riego frecuente", de: "Schattentuch und häufiges Gießen", nl: "Schaduwdoek en frequent water geven" },
          { en: "Full sun exposure", es: "Exposición total al sol", de: "Volle Sonnenexposition", nl: "Volledige blootstelling aan de zon" },
          { en: "No watering at all", es: "No regar en absoluto", de: "Überhaupt nicht gießen", nl: "Helemaal niet water geven" },
          { en: "Plastic covering", es: "Cubierta plástica", de: "Plastikabdeckung", nl: "Plastic bedekking" }
        ],
        correct: 0,
        explanation: {
          en: "Shade cloth protects cool-season greens from intense summer sun, while frequent watering prevents bolting and maintains tender leaves during hot weather.",
          es: "La tela de sombra protege las verduras de temporada fresca del sol intenso del verano, mientras el riego frecuente previene la floración prematura y mantiene las hojas tiernas durante el clima caliente.",
          de: "Schattentuch schützt Kaltzeit-Grünzeug vor intensiver Sommersonne, während häufiges Gießen das Schießen verhindert und zarte Blätter bei heißem Wetter erhält.",
          nl: "Schaduwdoek beschermt koele-seizoen groenten tegen intense zomerzon, terwijl frequent water geven schieten voorkomt en zachte bladeren handhaaft tijdens heet weer."
        }
      },
      {
        question: {
          en: "What is the key to successful seasonal meal planning?",
          es: "¿Cuál es la clave para la planificación exitosa de comidas estacionales?",
          de: "Was ist der Schlüssel zur erfolgreichen saisonalen Mahlzeitplanung?",
          nl: "Wat is de sleutel tot succesvolle seizoensmaaltijdplanning?"
        },
        options: [
          { en: "Understanding what's available locally each season and planning flexible menus", es: "Entender qué está disponible localmente cada temporada y planificar menús flexibles", de: "Verstehen, was lokal jede Saison verfügbar ist und flexible Menüs planen", nl: "Begrijpen wat lokaal elk seizoen beschikbaar is en flexibele menu's plannen" },
          { en: "Using only imported exotic ingredients", es: "Usar solo ingredientes exóticos importados", de: "Nur importierte exotische Zutaten verwenden", nl: "Alleen geïmporteerde exotische ingrediënten gebruiken" },
          { en: "Eating the same foods year-round", es: "Comer los mismos alimentos todo el año", de: "Das ganze Jahr über die gleichen Lebensmittel essen", nl: "Het hele jaar hetzelfde voedsel eten" },
          { en: "Avoiding all fresh produce", es: "Evitar todos los productos frescos", de: "Alle frischen Produkte vermeiden", nl: "Alle verse producten vermijden" }
        ],
        correct: 0,
        explanation: {
          en: "Successful seasonal cooking requires knowing what grows when in your region and creating flexible recipes that can adapt to available produce, ensuring variety and optimal flavors.",
          es: "La cocina estacional exitosa requiere saber qué crece cuándo en tu región y crear recetas flexibles que se puedan adaptar a los productos disponibles, asegurando variedad y sabores óptimos.",
          de: "Erfolgreiches saisonales Kochen erfordert zu wissen, was wann in Ihrer Region wächst, und flexible Rezepte zu erstellen, die sich an verfügbare Produkte anpassen können, um Vielfalt und optimale Aromen zu gewährleisten.",
          nl: "Succesvol seizoenskoken vereist weten wat wanneer in je regio groeit en flexibele recepten creëren die zich kunnen aanpassen aan beschikbare producten, wat variatie en optimale smaken verzekert."
        }
      },
      {
        question: {
          en: "Which vegetables are considered peak season in spring?",
          es: "¿Qué verduras se consideran de temporada alta en primavera?",
          de: "Welches Gemüse gilt als Hauptsaison im Frühling?",
          nl: "Welke groenten worden beschouwd als piekseizoen in de lente?"
        },
        options: [
          { en: "Asparagus, peas, artichokes", es: "Espárragos, guisantes, alcachofas", de: "Spargel, Erbsen, Artischocken", nl: "Asperges, erwten, artisjokken" },
          { en: "Pumpkin, butternut squash, sweet potatoes", es: "Calabaza, calabaza butternut, batatas", de: "Kürbis, Butternut-Kürbis, Süßkartoffeln", nl: "Pompoen, butternut squash, zoete aardappels" },
          { en: "Tomatoes, corn, zucchini", es: "Tomates, maíz, calabacín", de: "Tomaten, Mais, Zucchini", nl: "Tomaten, maïs, courgette" },
          { en: "Brussels sprouts, cabbage, leeks", es: "Coles de Bruselas, repollo, puerros", de: "Rosenkohl, Kohl, Lauch", nl: "Spruitjes, kool, prei" }
        ],
        correct: 0,
        explanation: {
          en: "Spring vegetables like asparagus, peas, and artichokes are at their peak freshness and flavor during spring months, offering tender textures and bright flavors.",
          es: "Las verduras de primavera como espárragos, guisantes y alcachofas están en su máxima frescura y sabor durante los meses de primavera, ofreciendo texturas tiernas y sabores brillantes.",
          de: "Frühlingsgemüse wie Spargel, Erbsen und Artischocken haben in den Frühlingsmonaten ihre beste Frische und ihren besten Geschmack und bieten zarte Texturen und helle Aromen.",
          nl: "Lentegroenten zoals asperges, erwten en artisjokken zijn op hun piek van versheid en smaak tijdens de lentemaanden, biedend zachte texturen en heldere smaken."
        }
      },
      {
        question: {
          en: "What is the best way to preserve summer herbs for winter use?",
          es: "¿Cuál es la mejor manera de preservar hierbas de verano para uso en invierno?",
          de: "Was ist der beste Weg, Sommerkräuter für den Wintergebrauch zu konservieren?",
          nl: "Wat is de beste manier om zomerkruiden te bewaren voor wintergebruik?"
        },
        options: [
          { en: "Freeze in olive oil or ice cube trays", es: "Congelar en aceite de oliva o bandejas de hielo", de: "In Olivenöl oder Eiswürfelformen einfrieren", nl: "Invriezen in olijfolie of ijsblokjesvormen" },
          { en: "Dry them completely and store in plastic bags", es: "Secarlas completamente y almacenar en bolsas plásticas", de: "Vollständig trocknen und in Plastikbeuteln lagern", nl: "Volledig drogen en bewaren in plastic zakken" },
          { en: "Store fresh in the refrigerator", es: "Almacenar fresco en el refrigerador", de: "Frisch im Kühlschrank lagern", nl: "Vers bewaren in de koelkast" },
          { en: "Pickle in vinegar", es: "Encurtir en vinagre", de: "In Essig einlegen", nl: "Inmaken in azijn" }
        ],
        correct: 0,
        explanation: {
          en: "Freezing herbs in olive oil preserves their fresh flavor better than drying. Ice cube trays make convenient portions that can be added directly to cooking.",
          es: "Congelar hierbas en aceite de oliva preserva mejor su sabor fresco que secar. Las bandejas de hielo hacen porciones convenientes que se pueden añadir directamente al cocinar.",
          de: "Das Einfrieren von Kräutern in Olivenöl bewahrt ihren frischen Geschmack besser als das Trocknen. Eiswürfelformen machen praktische Portionen, die direkt zum Kochen hinzugefügt werden können.",
          nl: "Kruiden invriezen in olijfolie behoudt hun verse smaak beter dan drogen. IJsblokjesvormen maken handige porties die direct aan het koken kunnen worden toegevoegd."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  }
  return level5;
})();