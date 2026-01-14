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
          en: "Which fall vegetable becomes sweeter after the first frost?",
          es: "¿Qué verdura de otoño se vuelve más dulce después de la primera helada?",
          de: "Welches Herbstgemüse wird nach dem ersten Frost süßer?",
          nl: "Welke herfstgroente wordt zoeter na de eerste vorst?"
        },
        options: [
          { en: "Kale and Brussels sprouts", es: "Col rizada y coles de Bruselas", de: "Grünkohl und Rosenkohl", nl: "Boerenkool en spruitjes" },
          { en: "Tomatoes and peppers", es: "Tomates y pimientos", de: "Tomaten und Paprika", nl: "Tomaten en paprika's" },
          { en: "Lettuce and spinach", es: "Lechuga y espinacas", de: "Salat und Spinat", nl: "Sla en spinazie" },
          { en: "Cucumbers and zucchini", es: "Pepinos y calabacín", de: "Gurken und Zucchini", nl: "Komkommers en courgette" }
        ],
        correct: 0,
        explanation: {
          en: "Cold weather triggers kale and Brussels sprouts to convert starches into sugars as a natural antifreeze, making them sweeter and more flavorful after frost.",
          es: "El clima frío hace que la col rizada y las coles de Bruselas conviertan almidones en azúcares como un anticongelante natural, haciéndolas más dulces y sabrosas después de las heladas.",
          de: "Kaltes Wetter veranlasst Grünkohl und Rosenkohl, Stärke in Zucker umzuwandeln als natürliches Frostschutzmittel, wodurch sie nach Frost süßer und schmackhafter werden.",
          nl: "Koud weer zorgt ervoor dat boerenkool en spruitjes zetmeel omzetten in suikers als natuurlijke antivries, waardoor ze zoeter en smaakvoller worden na vorst."
        }
      },
      {
        question: {
          en: "What is the best way to store fresh spring asparagus?",
          es: "¿Cuál es la mejor manera de almacenar espárragos frescos de primavera?",
          de: "Was ist der beste Weg, frischen Frühlingsspargel zu lagern?",
          de: "Wat is de beste manier om verse lenteasperges te bewaren?"
        },
        options: [
          { en: "Standing upright in water in the refrigerator", es: "De pie en agua en el refrigerador", de: "Aufrecht in Wasser im Kühlschrank", nl: "Rechtop in water in de koelkast" },
          { en: "Wrapped in paper towels in a drawer", es: "Envuelto en toallas de papel en un cajón", de: "In Papiertüchern in einer Schublade gewickelt", nl: "Gewikkeld in papieren handdoeken in een la" },
          { en: "In a plastic bag in the freezer", es: "En una bolsa plástica en el congelador", de: "In einem Plastikbeutel im Gefrierschrank", nl: "In een plastic zak in de vriezer" },
          { en: "At room temperature on the counter", es: "A temperatura ambiente en el mostrador", de: "Bei Raumtemperatur auf der Theke", nl: "Op kamertemperatuur op het aanrecht" }
        ],
        correct: 0,
        explanation: {
          en: "Asparagus spears stay freshest when stored upright in a jar with an inch of water in the refrigerator, like cut flowers. This keeps them crisp for up to a week.",
          es: "Los espárragos se mantienen más frescos cuando se almacenan verticalmente en un frasco con una pulgada de agua en el refrigerador, como flores cortadas. Esto los mantiene crujientes hasta por una semana.",
          de: "Spargelstangen bleiben am frischsten, wenn sie aufrecht in einem Glas mit einem Zentimeter Wasser im Kühlschrank aufbewahrt werden, wie Schnittblumen. Dies hält sie bis zu einer Woche knackig.",
          nl: "Aspergestelen blijven het verst wanneer ze rechtop in een pot met een duim water in de koelkast worden bewaard, zoals gesneden bloemen. Dit houdt ze tot een week knapperig."
        }
      },
      {
        question: {
          en: "Which summer cooking method preserves the most nutrients in vegetables?",
          es: "¿Qué método de cocción de verano preserva más nutrientes en las verduras?",
          de: "Welche Sommerkochmethode bewahrt die meisten Nährstoffe in Gemüse?",
          nl: "Welke zomer kookmethode behoudt de meeste voedingsstoffen in groenten?"
        },
        options: [
          { en: "Quick grilling or steaming", es: "Asado rápido o cocción al vapor", de: "Schnelles Grillen oder Dämpfen", nl: "Snel grillen of stomen" },
          { en: "Boiling for 30 minutes", es: "Hervir por 30 minutos", de: "30 Minuten kochen", nl: "30 minuten koken" },
          { en: "Deep frying in oil", es: "Freír en aceite", de: "Frittieren in Öl", nl: "Frituren in olie" },
          { en: "Slow cooking for hours", es: "Cocción lenta por horas", de: "Stundenlang langsam kochen", nl: "Urenlang langzaam koken" }
        ],
        correct: 0,
        explanation: {
          en: "Quick cooking methods like grilling or steaming preserve the most vitamins and minerals by minimizing cooking time and water exposure. Summer vegetables need only brief cooking.",
          es: "Los métodos de cocción rápidos como asar o cocer al vapor preservan la mayoría de vitaminas y minerales al minimizar el tiempo de cocción y la exposición al agua. Las verduras de verano solo necesitan cocción breve.",
          de: "Schnelle Kochmethoden wie Grillen oder Dämpfen bewahren die meisten Vitamine und Mineralien, indem sie Kochzeit und Wasserexposition minimieren. Sommergemüse benötigt nur kurzes Kochen.",
          nl: "Snelle kookmethoden zoals grillen of stomen behouden de meeste vitamines en mineralen door kooktijd en blootstelling aan water te minimaliseren. Zomergroenten hebben slechts kort koken nodig."
        }
      },
      {
        question: {
          en: "What makes autumn squash ideal for long-term storage?",
          es: "¿Qué hace que la calabaza de otoño sea ideal para almacenamiento a largo plazo?",
          de: "Was macht Herbstkürbis ideal für Langzeitlagerung?",
          nl: "Wat maakt herfstpompoen ideaal voor lange termijn bewaring?"
        },
        options: [
          { en: "Hard outer shell and low moisture content", es: "Cáscara exterior dura y bajo contenido de humedad", de: "Harte Außenschale und niedriger Feuchtigkeitsgehalt", nl: "Harde buitenschil en laag vochtgehalte" },
          { en: "Soft skin and high water content", es: "Piel suave y alto contenido de agua", de: "Weiche Haut und hoher Wassergehalt", nl: "Zachte huid en hoog watergehalte" },
          { en: "Thin peel and sweet taste", es: "Piel delgada y sabor dulce", de: "Dünne Schale und süßer Geschmack", nl: "Dunne schil en zoete smaak" },
          { en: "Small size and bright color", es: "Tamaño pequeño y color brillante", de: "Kleine Größe und helle Farbe", nl: "Kleine maat en heldere kleur" }
        ],
        correct: 0,
        explanation: {
          en: "Winter squash develop thick, hard shells and have low moisture content, allowing them to be stored for months in cool, dry conditions without refrigeration.",
          es: "Las calabazas de invierno desarrollan cáscaras gruesas y duras y tienen bajo contenido de humedad, permitiendo almacenarlas por meses en condiciones frescas y secas sin refrigeración.",
          de: "Winterkürbisse entwickeln dicke, harte Schalen und haben niedrigen Feuchtigkeitsgehalt, wodurch sie monatelang in kühlen, trockenen Bedingungen ohne Kühlung gelagert werden können.",
          nl: "Winterpompoenen ontwikkelen dikke, harde schillen en hebben een laag vochtgehalte, waardoor ze maandenlang in koele, droge omstandigheden zonder koeling kunnen worden bewaard."
        }
      },
      {
        question: {
          en: "Which winter vegetable is traditionally used in holiday dishes across many cultures?",
          es: "¿Qué verdura de invierno se usa tradicionalmente en platos festivos en muchas culturas?",
          de: "Welches Wintergemüse wird traditionell in Feiertagsgerichten in vielen Kulturen verwendet?",
          nl: "Welke wintergroente wordt traditioneel gebruikt in feestelijke gerechten in veel culturen?"
        },
        options: [
          { en: "Root vegetables like turnips and parsnips", es: "Verduras de raíz como nabos y chirivías", de: "Wurzelgemüse wie Rüben und Pastinaken", nl: "Wortelgroenten zoals rapen en pastinak" },
          { en: "Tropical fruits like mango", es: "Frutas tropicales como mango", de: "Tropische Früchte wie Mango", nl: "Tropisch fruit zoals mango" },
          { en: "Summer squash and cucumber", es: "Calabaza de verano y pepino", de: "Sommerkürbis und Gurke", nl: "Zomerpompoen en komkommer" },
          { en: "Fresh corn and tomatoes", es: "Maíz fresco y tomates", de: "Frischer Mais und Tomaten", nl: "Verse maïs en tomaten" }
        ],
        correct: 0,
        explanation: {
          en: "Root vegetables like turnips, parsnips, and carrots have been winter staples in holiday meals worldwide because they store well and provide hearty nutrition during cold months.",
          es: "Las verduras de raíz como nabos, chirivías y zanahorias han sido alimentos básicos de invierno en comidas festivas mundialmente porque se almacenan bien y proporcionan nutrición abundante durante los meses fríos.",
          de: "Wurzelgemüse wie Rüben, Pastinaken und Karotten sind weltweit Wintergrundnahrungsmittel in Feiertagsmahlzeiten, da sie gut gelagert werden können und während der kalten Monate herzhafte Ernährung bieten.",
          nl: "Wortelgroenten zoals rapen, pastinak en wortelen zijn wereldwijd winterstapels in feestmaaltijden omdat ze goed bewaren en stevige voeding bieden tijdens koude maanden."
        }
      },
      {
        question: {
          en: "What seasonal ingredient pair works best in spring salads?",
          es: "¿Qué par de ingredientes estacionales funciona mejor en ensaladas de primavera?",
          de: "Welche saisonale Zutatenkombination funktioniert am besten in Frühlingssalaten?",
          nl: "Welke seizoensingrediënt combinatie werkt het beste in lentesalades?"
        },
        options: [
          { en: "Fresh peas and mint", es: "Guisantes frescos y menta", de: "Frische Erbsen und Minze", nl: "Verse erwten en munt" },
          { en: "Pumpkin and sage", es: "Calabaza y salvia", de: "Kürbis und Salbei", nl: "Pompoen en salie" },
          { en: "Tomatoes and basil", es: "Tomates y albahaca", de: "Tomaten und Basilikum", nl: "Tomaten en basilicum" },
          { en: "Root vegetables and thyme", es: "Verduras de raíz y tomillo", de: "Wurzelgemüse und Thymian", nl: "Wortelgroenten en tijm" }
        ],
        correct: 0,
        explanation: {
          en: "Fresh spring peas pair beautifully with mint, creating a bright, refreshing combination that epitomizes spring flavors. Both ingredients are at their peak in late spring.",
          es: "Los guisantes frescos de primavera combinan hermosamente con menta, creando una combinación brillante y refrescante que personifica los sabores de primavera. Ambos ingredientes están en su punto máximo a finales de primavera.",
          de: "Frische Frühlingserbsen passen wunderschön zu Minze und schaffen eine helle, erfrischende Kombination, die Frühlingsaromen verkörpert. Beide Zutaten sind im späten Frühling auf ihrem Höhepunkt.",
          nl: "Verse lenteerwten passen prachtig bij munt, wat een heldere, verfrissende combinatie creëert die lentesmaken belichaamt. Beide ingrediënten zijn op hun piek in late lente."
        }
      },
      {
        question: {
          en: "Which technique maximizes flavor when cooking summer eggplant?",
          es: "¿Qué técnica maximiza el sabor al cocinar berenjena de verano?",
          de: "Welche Technik maximiert den Geschmack beim Kochen von Sommeraubergine?",
          nl: "Welke techniek maximaliseert de smaak bij het koken van zomeraubergine?"
        },
        options: [
          { en: "Salting before cooking to remove bitterness", es: "Salar antes de cocinar para eliminar el amargor", de: "Vor dem Kochen salzen, um Bitterkeit zu entfernen", nl: "Zouten voor het koken om bitterheid te verwijderen" },
          { en: "Boiling in plain water", es: "Hervir en agua simple", de: "In klarem Wasser kochen", nl: "Koken in gewoon water" },
          { en: "Eating only raw", es: "Comer solo cruda", de: "Nur roh essen", nl: "Alleen rauw eten" },
          { en: "Freezing before cooking", es: "Congelar antes de cocinar", de: "Vor dem Kochen einfrieren", nl: "Invriezen voor het koken" }
        ],
        correct: 0,
        explanation: {
          en: "Salting eggplant slices draws out bitter compounds and excess moisture, resulting in better texture and sweeter flavor when cooked. This technique is especially important for large, mature eggplants.",
          es: "Salar las rodajas de berenjena extrae compuestos amargos y exceso de humedad, resultando en mejor textura y sabor más dulce al cocinar. Esta técnica es especialmente importante para berenjenas grandes y maduras.",
          de: "Das Salzen von Auberginenscheiben zieht bittere Verbindungen und überschüssige Feuchtigkeit heraus, was beim Kochen zu besserer Textur und süßerem Geschmack führt. Diese Technik ist besonders wichtig für große, reife Auberginen.",
          nl: "Aubergineplakken zouten trekt bittere verbindingen en overtollig vocht eruit, wat resulteert in betere textuur en zoetere smaak bij het koken. Deze techniek is vooral belangrijk voor grote, rijpe aubergines."
        }
      },
      {
        question: {
          en: "What autumn vegetable preparation showcases their natural sweetness best?",
          es: "¿Qué preparación de verduras de otoño muestra mejor su dulzura natural?",
          de: "Welche Herbstgemüsezubereitung zeigt ihre natürliche Süße am besten?",
          nl: "Welke herfstgroente bereiding toont hun natuurlijke zoetheid het beste?"
        },
        options: [
          { en: "Roasting with a touch of maple syrup or honey", es: "Asar con un toque de jarabe de arce o miel", de: "Rösten mit einem Hauch Ahornsirup oder Honig", nl: "Roosteren met een vleugje ahornsiroop of honing" },
          { en: "Boiling in heavily salted water", es: "Hervir en agua muy salada", de: "In stark gesalzenem Wasser kochen", nl: "Koken in zwaar gezouten water" },
          { en: "Serving completely raw", es: "Servir completamente crudo", de: "Völlig roh servieren", nl: "Volledig rauw serveren" },
          { en: "Frying in butter only", es: "Freír solo en mantequilla", de: "Nur in Butter braten", nl: "Alleen in boter bakken" }
        ],
        correct: 0,
        explanation: {
          en: "Roasting autumn vegetables with a light glaze of maple syrup or honey enhances their natural sugars while adding complementary sweetness, creating a perfect balance of flavors.",
          es: "Asar verduras de otoño con un glaseado ligero de jarabe de arce o miel realza sus azúcares naturales mientras añade dulzura complementaria, creando un equilibrio perfecto de sabores.",
          de: "Das Rösten von Herbstgemüse mit einer leichten Glasur aus Ahornsirup oder Honig verstärkt ihre natürlichen Zucker, während es ergänzende Süße hinzufügt und eine perfekte Geschmacksbalance schafft.",
          nl: "Herfstgroenten roosteren met een lichte glazuur van ahornsiroop of honing versterkt hun natuurlijke suikers terwijl het complementaire zoetheid toevoegt, wat een perfecte balans van smaken creëert."
        }
      },
      {
        question: {
          en: "Which winter preservation technique was historically most common before refrigeration?",
          es: "¿Qué técnica de preservación de invierno fue históricamente más común antes de la refrigeración?",
          de: "Welche Winterkonservierungstechnik war historisch vor der Kühlung am häufigsten?",
          nl: "Welke winter bewaringstechniek was historisch het meest gebruikelijk voor koeling?"
        },
        options: [
          { en: "Root cellaring for vegetables", es: "Almacenamiento en bodega para verduras", de: "Wurzelkeller für Gemüse", nl: "Wortelkelder voor groenten" },
          { en: "Freezing in ice blocks", es: "Congelar en bloques de hielo", de: "In Eisblöcken einfrieren", nl: "Invriezen in ijsblokken" },
          { en: "Vacuum sealing", es: "Sellado al vacío", de: "Vakuumversiegelung", nl: "Vacuüm verzegelen" },
          { en: "Chemical preservatives", es: "Conservantes químicos", de: "Chemische Konservierungsstoffe", nl: "Chemische conserveermiddelen" }
        ],
        correct: 0,
        explanation: {
          en: "Root cellars provided cool, humid conditions perfect for storing winter vegetables like potatoes, turnips, and carrots for months without refrigeration, a technique still used today.",
          es: "Las bodegas proporcionaban condiciones frescas y húmedas perfectas para almacenar verduras de invierno como papas, nabos y zanahorias por meses sin refrigeración, una técnica aún usada hoy.",
          de: "Wurzelkeller boten kühle, feuchte Bedingungen, die perfekt zum Lagern von Wintergemüse wie Kartoffeln, Rüben und Karotten für Monate ohne Kühlung waren, eine heute noch verwendete Technik.",
          nl: "Wortelkelders boden koele, vochtige omstandigheden perfect voor het bewaren van wintergroenten zoals aardappels, rapen en wortelen gedurende maanden zonder koeling, een techniek die vandaag nog steeds wordt gebruikt."
        }
      },
      {
        question: {
          en: "What seasonal cooking principle guides traditional cuisine worldwide?",
          es: "¿Qué principio de cocina estacional guía la cocina tradicional mundialmente?",
          de: "Welches saisonale Kochprinzip leitet traditionelle Küche weltweit?",
          nl: "Welk seizoenskook principe begeleidt traditionele keuken wereldwijd?"
        },
        options: [
          { en: "Cooking with what grows naturally in each season", es: "Cocinar con lo que crece naturalmente en cada temporada", de: "Mit dem kochen, was natürlich in jeder Saison wächst", nl: "Koken met wat natuurlijk groeit in elk seizoen" },
          { en: "Importing all ingredients year-round", es: "Importar todos los ingredientes todo el año", de: "Das ganze Jahr über alle Zutaten importieren", nl: "Het hele jaar alle ingrediënten importeren" },
          { en: "Using only canned and processed foods", es: "Usar solo alimentos enlatados y procesados", de: "Nur Dosen- und verarbeitete Lebensmittel verwenden", nl: "Alleen ingeblikt en verwerkt voedsel gebruiken" },
          { en: "Avoiding fresh vegetables entirely", es: "Evitar verduras frescas por completo", de: "Frisches Gemüse völlig vermeiden", nl: "Verse groenten volledig vermijden" }
        ],
        correct: 0,
        explanation: {
          en: "Traditional cuisines worldwide developed around seasonal availability, creating dishes that celebrate what grows naturally at different times of year, ensuring freshness, flavor, and sustainability.",
          es: "Las cocinas tradicionales mundialmente se desarrollaron alrededor de la disponibilidad estacional, creando platos que celebran lo que crece naturalmente en diferentes épocas del año, asegurando frescura, sabor y sostenibilidad.",
          de: "Traditionelle Küchen weltweit entwickelten sich um saisonale Verfügbarkeit herum und schufen Gerichte, die feiern, was zu verschiedenen Zeiten des Jahres natürlich wächst, was Frische, Geschmack und Nachhaltigkeit gewährleistet.",
          nl: "Traditionele keukens wereldwijd ontwikkelden zich rond seizoensbeschikbaarheid, waarbij gerechten werden gecreëerd die vieren wat natuurlijk groeit op verschillende tijden van het jaar, wat versheid, smaak en duurzaamheid verzekert."
        }
      },
      {
        question: {
          en: "Which spring vegetable is known as the first harbinger of the season?",
          es: "¿Qué verdura de primavera es conocida como el primer heraldo de la temporada?",
          de: "Welches Frühlingsgemüse ist als erster Vorbote der Saison bekannt?",
          nl: "Welke lentegroente staat bekend als de eerste voorbode van het seizoen?"
        },
        options: [
          { en: "Ramps (wild leeks)", es: "Rampas (puerros silvestres)", de: "Bärlauch (wilde Lauch)", nl: "Daslook (wilde prei)" },
          { en: "Butternut squash", es: "Calabaza butternut", de: "Butternut-Kürbis", nl: "Butternut squash" },
          { en: "Corn", es: "Maíz", de: "Mais", nl: "Maïs" },
          { en: "Watermelon", es: "Sandía", de: "Wassermelone", nl: "Watermeloen" }
        ],
        correct: 0,
        explanation: {
          en: "Ramps, or wild leeks, are among the first vegetables to emerge in spring, prized by chefs for their delicate onion-garlic flavor and short season of just a few weeks.",
          es: "Las rampas, o puerros silvestres, están entre las primeras verduras en emerger en primavera, apreciadas por los chefs por su delicado sabor a cebolla-ajo y temporada corta de solo unas semanas.",
          de: "Bärlauch, oder wilder Lauch, gehört zu den ersten Gemüsen, die im Frühling erscheinen, von Köchen geschätzt für ihren zarten Zwiebel-Knoblauch-Geschmack und kurze Saison von nur wenigen Wochen.",
          nl: "Daslook, of wilde prei, behoort tot de eerste groenten die in de lente verschijnen, gewaardeerd door chefs voor hun delicate ui-knoflooksmaak en korte seizoen van slechts een paar weken."
        }
      },
      {
        question: {
          en: "What cooking adjustment is needed for vegetables grown at high altitudes?",
          es: "¿Qué ajuste de cocción se necesita para verduras cultivadas a grandes altitudes?",
          de: "Welche Kochanpassung ist für Gemüse erforderlich, das in großen Höhen angebaut wird?",
          nl: "Welke kookaanpassing is nodig voor groenten geteeld op grote hoogtes?"
        },
        options: [
          { en: "Longer cooking times due to lower boiling point", es: "Tiempos de cocción más largos debido al punto de ebullición más bajo", de: "Längere Kochzeiten aufgrund des niedrigeren Siedepunkts", nl: "Langere kooktijden vanwege lager kookpunt" },
          { en: "Shorter cooking times", es: "Tiempos de cocción más cortos", de: "Kürzere Kochzeiten", nl: "Kortere kooktijden" },
          { en: "No adjustment needed", es: "No se necesita ajuste", de: "Keine Anpassung erforderlich", nl: "Geen aanpassing nodig" },
          { en: "Higher temperatures only", es: "Solo temperaturas más altas", de: "Nur höhere Temperaturen", nl: "Alleen hogere temperaturen" }
        ],
        correct: 0,
        explanation: {
          en: "At high altitudes, water boils at lower temperatures, requiring longer cooking times for vegetables. This affects both boiling and steaming methods of preparation.",
          es: "A grandes altitudes, el agua hierve a temperaturas más bajas, requiriendo tiempos de cocción más largos para las verduras. Esto afecta tanto los métodos de hervido como de cocción al vapor.",
          de: "In großen Höhen kocht Wasser bei niedrigeren Temperaturen, was längere Kochzeiten für Gemüse erfordert. Dies betrifft sowohl Koch- als auch Dämpfmethoden der Zubereitung.",
          nl: "Op grote hoogtes kookt water bij lagere temperaturen, wat langere kooktijden voor groenten vereist. Dit beïnvloedt zowel kook- als stoommethoden van bereiding."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  }
  return level5;
})();
