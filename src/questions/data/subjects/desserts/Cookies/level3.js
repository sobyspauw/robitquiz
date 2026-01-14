// Quiz Level 3: Dessert - Koekjes
(function() {
  const level3 = {
    name: {
      en: "Cookies - Level 3",
      es: "Galletas - Nivel 3",
      de: "Kekse - Level 3",
      nl: "Koekjes - Level 3"
    },
    questions: [
      {
        question: {
          en: "What is the optimal baking temperature for most drop cookies?",
          es: "¿Cuál es la temperatura óptima de horneado para la mayoría de galletas por gotas?",
          de: "Was ist die optimale Backtemperatur für die meisten Tropfkekse?",
          nl: "Wat is de optimale baktemperatuur voor de meeste drop koekjes?"
        },
        options: [
          { en: "325°F (163°C)", es: "325°F (163°C)", de: "325°F (163°C)", nl: "325°F (163°C)" },
          { en: "350°F (175°C)", es: "350°F (175°C)", de: "350°F (175°C)", nl: "350°F (175°C)" },
          { en: "375°F (190°C)", es: "375°F (190°C)", de: "375°F (190°C)", nl: "375°F (190°C)" },
          { en: "400°F (204°C)", es: "400°F (204°C)", de: "400°F (204°C)", nl: "400°F (204°C)" }
        ],
        correct: 2,
        explanation: {
          en: "375°F (190°C) is the optimal temperature for most drop cookies, providing proper browning and texture without over-baking the edges.",
          es: "375°F (190°C) es la temperatura óptima para la mayoría de galletas por gotas, proporcionando dorado y textura adecuados sin hornear excesivamente los bordes.",
          de: "375°F (190°C) ist die optimale Temperatur für die meisten Tropfkekse, sie sorgt für richtige Bräunung und Textur ohne Überbacken der Ränder.",
          nl: "375°F (190°C) is de optimale temperatuur voor de meeste drop koekjes, zorgt voor juiste bruining en textuur zonder de randen te veel te bakken."
        }
      },
      {
        question: {
          en: "What ingredient replacement can make cookies vegan?",
          es: "¿Qué sustituto de ingrediente puede hacer que las galletas sean veganas?",
          de: "Welcher Zutatenersatz kann Kekse vegan machen?",
          nl: "Welke ingrediëntvervanging kan koekjes veganistisch maken?"
        },
        options: [
          { en: "Replace butter with vegan butter and eggs with flax eggs", es: "Reemplazar mantequilla con mantequilla vegana y huevos con huevos de lino", de: "Butter durch vegane Butter und Eier durch Leinsamen-Eier ersetzen", nl: "Boter vervangen door veganistische boter en eieren door lijnzaad-eieren" },
          { en: "Only remove the eggs", es: "Solo quitar los huevos", de: "Nur die Eier entfernen", nl: "Alleen de eieren weglaten" },
          { en: "Only replace the butter", es: "Solo reemplazar la mantequilla", de: "Nur die Butter ersetzen", nl: "Alleen de boter vervangen" },
          { en: "Add more flour", es: "Agregar más harina", de: "Mehr Mehl hinzufügen", nl: "Meer bloem toevoegen" }
        ],
        correct: 0,
        explanation: {
          en: "To make cookies vegan, both animal products must be replaced: butter with plant-based alternatives and eggs with substitutes like flax eggs or applesauce.",
          es: "Para hacer galletas veganas, ambos productos animales deben ser reemplazados: mantequilla con alternativas vegetales y huevos con sustitutos como huevos de lino o compota de manzana.",
          de: "Um Kekse vegan zu machen, müssen beide tierischen Produkte ersetzt werden: Butter durch pflanzliche Alternativen und Eier durch Ersatz wie Leinsamen-Eier oder Apfelmus.",
          nl: "Om koekjes veganistisch te maken moeten beide dierlijke producten vervangen worden: boter door plantaardige alternatieven en eieren door vervangingsmiddelen zoals lijnzaad-eieren of appelmoes."
        }
      },
      {
        question: {
          en: "What creates the distinctive ridged pattern on peanut butter cookies?",
          es: "¿Qué crea el patrón distintivo de rayas en las galletas de mantequilla de maní?",
          de: "Was erzeugt das charakteristische Rillenmuster auf Erdnussbutterkeksen?",
          nl: "Wat creëert het kenmerkende gegroefde patroon op pindakaas koekjes?"
        },
        options: [
          { en: "Rolling pin", es: "Rodillo", de: "Nudelholz", nl: "Deegroller" },
          { en: "Fork tines", es: "Dientes de tenedor", de: "Gabelzinken", nl: "Vork tanden" },
          { en: "Knife cuts", es: "Cortes de cuchillo", de: "Messerschnitte", nl: "Mes sneden" },
          { en: "Special mold", es: "Molde especial", de: "Spezielle Form", nl: "Speciale vorm" }
        ],
        correct: 1,
        explanation: {
          en: "The classic crosshatch pattern on peanut butter cookies is created by pressing fork tines into the dough before baking, which also helps flatten the dense dough.",
          es: "El patrón clásico de rayas cruzadas en las galletas de mantequilla de maní se crea presionando los dientes de un tenedor en la masa antes de hornear, lo que también ayuda a aplanar la masa densa.",
          de: "Das klassische Kreuzmuster auf Erdnussbutterkeksen entsteht durch Eindrücken von Gabelzinken in den Teig vor dem Backen, was auch hilft, den dichten Teig zu glätten.",
          nl: "Het klassieke kruispatroon op pindakaas koekjes ontstaat door vork tanden in het deeg te drukken voor het bakken, wat ook helpt het dichte deeg plat te maken."
        }
      },
      {
        question: {
          en: "Which type of chocolate is best for chocolate chip cookies?",
          es: "¿Qué tipo de chocolate es mejor para las galletas con chispas de chocolate?",
          de: "Welche Art von Schokolade ist am besten für Schokoladenkekse?",
          nl: "Welk type chocolade is het beste voor chocolate chip koekjes?"
        },
        options: [
          { en: "White chocolate", es: "Chocolate blanco", de: "Weiße Schokolade", nl: "Witte chocolade" },
          { en: "Milk chocolate", es: "Chocolate con leche", de: "Milchschokolade", nl: "Melkchocolade" },
          { en: "Semi-sweet chocolate", es: "Chocolate semi-dulce", de: "Halbbitterschokolade", nl: "Halfzoete chocolade" },
          { en: "Dark chocolate (70%+)", es: "Chocolate negro (70%+)", de: "Dunkle Schokolade (70%+)", nl: "Pure chocolade (70%+)" }
        ],
        correct: 2,
        explanation: {
          en: "Semi-sweet chocolate provides the perfect balance of sweetness and chocolate flavor for classic chocolate chip cookies, complementing the sweet dough without being overwhelming.",
          es: "El chocolate semi-dulce proporciona el equilibrio perfecto de dulzor y sabor a chocolate para las galletas clásicas con chispas, complementando la masa dulce sin ser abrumador.",
          de: "Halbbitterschokolade bietet die perfekte Balance von Süße und Schokoladengeschmack für klassische Schokoladenkekse, ergänzt den süßen Teig ohne überwältigend zu sein.",
          nl: "Halfzoete chocolade biedt de perfecte balans van zoetheid en chocoladesmaak voor klassieke chocolate chip koekjes, vult het zoete deeg aan zonder overweldigend te zijn."
        }
      },
      {
        question: {
          en: "What causes cookies to have a cake-like texture instead of chewy?",
          es: "¿Qué causa que las galletas tengan textura similar a pastel en lugar de masticable?",
          de: "Was verursacht, dass Kekse eine kuchenartige Textur anstatt einer zähen haben?",
          nl: "Wat veroorzaakt dat koekjes een cake-achtige textuur hebben in plaats van chewy?"
        },
        options: [
          { en: "Too much flour", es: "Demasiada harina", de: "Zu viel Mehl", nl: "Te veel bloem" },
          { en: "Too much baking powder or eggs", es: "Demasiado polvo para hornear o huevos", de: "Zu viel Backpulver oder Eier", nl: "Te veel bakpoeder of eieren" },
          { en: "Too much butter", es: "Demasiada mantequilla", de: "Zu viel Butter", nl: "Te veel boter" },
          { en: "Too much sugar", es: "Demasiado azúcar", de: "Zu viel Zucker", nl: "Te veel suiker" }
        ],
        correct: 1,
        explanation: {
          en: "Excessive leavening agents (baking powder/soda) or too many eggs create too much lift and structure, resulting in a cake-like texture rather than dense, chewy cookies.",
          es: "Agentes leudantes excesivos (polvo/bicarbonato para hornear) o demasiados huevos crean demasiado levado y estructura, resultando en textura similar a pastel en lugar de galletas densas y masticables.",
          de: "Übermäßige Triebmittel (Backpulver/-soda) oder zu viele Eier erzeugen zu viel Auftrieb und Struktur, was zu einer kuchenartigen Textur anstatt dichten, zähen Keksen führt.",
          nl: "Overmatige rijsmiddelen (bakpoeder/-soda) of te veel eieren creëren te veel lift en structuur, resulterend in een cake-achtige textuur in plaats van dichte, chewy koekjes."
        }
      },
      {
        question: {
          en: "What is the purpose of vanilla extract in cookie dough?",
          es: "¿Cuál es el propósito del extracto de vainilla en la masa de galletas?",
          de: "Was ist der Zweck von Vanilleextrakt im Keksteig?",
          nl: "Wat is het doel van vanille-extract in koekjesdeeg?"
        },
        options: [
          { en: "Only for flavor enhancement", es: "Solo para mejora del sabor", de: "Nur zur Geschmacksverbesserung", nl: "Alleen voor smaakverbetering" },
          { en: "Flavor enhancement and aroma complement", es: "Mejora del sabor y complemento del aroma", de: "Geschmacksverbesserung und Aromakomplement", nl: "Smaakverbetering en aroma complement" },
          { en: "As a preservative", es: "Como conservante", de: "Als Konservierungsmittel", nl: "Als conserveermiddel" },
          { en: "For texture improvement", es: "Para mejora de textura", de: "Zur Texturverbesserung", nl: "Voor textuurverbetering" }
        ],
        correct: 1,
        explanation: {
          en: "Vanilla extract enhances flavor complexity and provides aromatic depth that complements other ingredients, making cookies taste more well-rounded and appealing.",
          es: "El extracto de vainilla mejora la complejidad del sabor y proporciona profundidad aromática que complementa otros ingredientes, haciendo que las galletas sepan más completas y atractivas.",
          de: "Vanilleextrakt verbessert die Geschmackskomplexität und bietet aromatische Tiefe, die andere Zutaten ergänzt und Kekse vollmundiger und ansprechender macht.",
          nl: "Vanille-extract verbetert smaakcomplexiteit en biedt aromatische diepte die andere ingrediënten aanvult, waardoor koekjes meer afgerond en aantrekkelijk smaken."
        }
      },
      {
        question: {
          en: "What is the difference between rolled oats and quick oats in oatmeal cookies?",
          es: "¿Cuál es la diferencia entre avena arrollada y avena rápida en las galletas de avena?",
          de: "Was ist der Unterschied zwischen Haferflocken und Schmelzflocken in Haferkeksen?",
          nl: "Wat is het verschil tussen havervlokken en snelkook haver in havermout koekjes?"
        },
        options: [
          { en: "No difference", es: "No hay diferencia", de: "Kein Unterschied", nl: "Geen verschil" },
          { en: "Rolled oats provide more texture and chewiness", es: "La avena arrollada proporciona más textura y masticabilidad", de: "Haferflocken bieten mehr Textur und Kaubarkeit", nl: "Havervlokken bieden meer textuur en kauwbaarheid" },
          { en: "Quick oats are better for flavor", es: "La avena rápida es mejor para el sabor", de: "Schmelzflocken sind besser für den Geschmack", nl: "Snelkook haver is beter voor smaak" },
          { en: "Only affects baking time", es: "Solo afecta el tiempo de horneado", de: "Beeinflusst nur die Backzeit", nl: "Beïnvloedt alleen baktijd" }
        ],
        correct: 1,
        explanation: {
          en: "Rolled oats (old-fashioned) maintain their shape better during baking, providing more distinct texture and chewiness compared to quick oats which break down more during processing.",
          es: "La avena arrollada (tradicional) mantiene mejor su forma durante el horneado, proporcionando textura más distintiva y masticabilidad comparada con avena rápida que se descompone más durante el procesamiento.",
          de: "Haferflocken (altmodische) behalten ihre Form beim Backen besser bei und bieten mehr ausgeprägte Textur und Kaubarkeit im Vergleich zu Schmelzflocken, die während der Verarbeitung mehr zerfallen.",
          nl: "Havervlokken (ouderwetse) behouden hun vorm beter tijdens het bakken, bieden meer uitgesproken textuur en kauwbaarheid vergeleken met snelkook haver die meer afbreekt tijdens verwerking."
        }
      },
      {
        question: {
          en: "What is the key to achieving uniform cookie sizes when baking?",
          es: "¿Cuál es la clave para lograr tamaños uniformes de galletas al hornear?",
          de: "Was ist der Schlüssel für gleichmäßige Keksgrößen beim Backen?",
          nl: "Wat is de sleutel tot het bereiken van uniforme koekjesgroottes bij het bakken?"
        },
        options: [
          { en: "Estimate by eye", es: "Estimar a ojo", de: "Nach Augenmaß schätzen", nl: "Op het oog schatten" },
          { en: "Use a cookie scoop or measuring spoon", es: "Usar una cuchara para galletas o cuchara medidora", de: "Einen Keksportionierer oder Messlöffel verwenden", nl: "Een koekjesschep of maatlepel gebruiken" },
          { en: "Roll all dough into one log", es: "Enrollar toda la masa en un tronco", de: "Allen Teig zu einer Rolle formen", nl: "Al het deeg tot één rol maken" },
          { en: "Use different temperatures", es: "Usar diferentes temperaturas", de: "Verschiedene Temperaturen verwenden", nl: "Verschillende temperaturen gebruiken" }
        ],
        correct: 1,
        explanation: {
          en: "Using a cookie scoop or measuring spoon ensures consistent portion sizes, which leads to uniform baking and professional-looking results with cookies that finish at the same time.",
          es: "Usar una cuchara para galletas o cuchara medidora asegura tamaños de porción consistentes, lo que lleva a horneado uniforme y resultados de aspecto profesional con galletas que terminan al mismo tiempo.",
          de: "Ein Keksportionierer oder Messlöffel gewährleistet konsistente Portionsgrößen, was zu gleichmäßigem Backen und professionell aussehenden Ergebnissen mit Keksen führt, die zur gleichen Zeit fertig sind.",
          nl: "Een koekjesschep of maatlepel gebruiken verzekert consistente portiegroottes, wat leidt tot gelijkmatig bakken en professioneel uitziende resultaten met koekjes die tegelijk klaar zijn."
        }
      },
      {
        question: {
          en: "Why do some cookie recipes call for both baking soda and baking powder?",
          es: "¿Por qué algunas recetas de galletas requieren tanto bicarbonato de sodio como polvo para hornear?",
          de: "Warum verlangen manche Keksrezepte sowohl Natron als auch Backpulver?",
          nl: "Waarom vragen sommige koekjesrecepten om zowel zuiveringszout als bakpoeder?"
        },
        options: [
          { en: "It's always a mistake", es: "Siempre es un error", de: "Es ist immer ein Fehler", nl: "Het is altijd een fout" },
          { en: "To balance pH and provide optimal lift", es: "Para equilibrar el pH y proporcionar levado óptimo", de: "Um pH auszugleichen und optimalen Auftrieb zu bieten", nl: "Om pH te balanceren en optimale lift te bieden" },
          { en: "Only for flavor", es: "Solo por sabor", de: "Nur für den Geschmack", nl: "Alleen voor smaak" },
          { en: "To speed up baking", es: "Para acelerar el horneado", de: "Um das Backen zu beschleunigen", nl: "Om bakken te versnellen" }
        ],
        correct: 1,
        explanation: {
          en: "Some recipes use both to balance acidity (baking soda neutralizes acidic ingredients like brown sugar) and provide controlled lift (baking powder for additional rise), creating optimal texture.",
          es: "Algunas recetas usan ambos para equilibrar acidez (bicarbonato neutraliza ingredientes ácidos como azúcar moreno) y proporcionar levado controlado (polvo para hornear para alzado adicional), creando textura óptima.",
          de: "Manche Rezepte verwenden beide, um Säure auszugleichen (Natron neutralisiert saure Zutaten wie brauner Zucker) und kontrollierten Auftrieb zu bieten (Backpulver für zusätzliche Triebkraft), optimale Textur schaffend.",
          nl: "Sommige recepten gebruiken beide om zuurheid te balanceren (zuiveringszout neutraliseert zure ingrediënten zoals bruine suiker) en gecontroleerde lift te bieden (bakpoeder voor extra rijzing), optimale textuur creërend."
        }
      },
      {
        question: {
          en: "What makes thumbprint cookies distinctive?",
          es: "¿Qué hace distintivas a las galletas de huella de pulgar?",
          de: "Was macht Daumenkekse charakteristisch?",
          nl: "Wat maakt thumbprint koekjes onderscheidend?"
        },
        options: [
          { en: "Their round shape", es: "Su forma redonda", de: "Ihre runde Form", nl: "Hun ronde vorm" },
          { en: "A jam-filled indentation made with thumb", es: "Una hendidura rellena de mermelada hecha con el pulgar", de: "Eine mit Marmelade gefüllte Vertiefung, die mit dem Daumen gemacht wird", nl: "Een met jam gevulde indeuk gemaakt met de duim" },
          { en: "Extra large size", es: "Tamaño extra grande", de: "Extragroße Größe", nl: "Extra grote maat" },
          { en: "Special spices", es: "Especias especiales", de: "Spezielle Gewürze", nl: "Speciale kruiden" }
        ],
        correct: 1,
        explanation: {
          en: "Thumbprint cookies are characterized by an indentation pressed into the center with a thumb (or finger), which is then filled with jam, preserves, or other sweet fillings.",
          es: "Las galletas de huella de pulgar se caracterizan por una hendidura presionada en el centro con un pulgar (o dedo), que luego se llena con mermelada, conservas u otros rellenos dulces.",
          de: "Daumenkekse zeichnen sich durch eine mit dem Daumen (oder Finger) in die Mitte gedrückte Vertiefung aus, die dann mit Marmelade, Konfitüre oder anderen süßen Füllungen gefüllt wird.",
          nl: "Thumbprint koekjes kenmerken zich door een indeuk die in het midden met een duim (of vinger) wordt gedrukt, die vervolgens gevuld wordt met jam, conserven of andere zoete vullingen."
        }
      },
      {
        question: {
          en: "What is the ideal spacing between cookies on a baking sheet?",
          es: "¿Cuál es el espaciado ideal entre galletas en una bandeja de horneado?",
          de: "Was ist der ideale Abstand zwischen Keksen auf einem Backblech?",
          nl: "Wat is de ideale afstand tussen koekjes op een bakplaat?"
        },
        options: [
          { en: "No spacing needed", es: "No se necesita espaciado", de: "Kein Abstand nötig", nl: "Geen afstand nodig" },
          { en: "1/2 inch (1.3 cm)", es: "1/2 pulgada (1.3 cm)", de: "1/2 Zoll (1,3 cm)", nl: "1/2 inch (1,3 cm)" },
          { en: "2 inches (5 cm)", es: "2 pulgadas (5 cm)", de: "2 Zoll (5 cm)", nl: "2 inches (5 cm)" },
          { en: "4 inches (10 cm)", es: "4 pulgadas (10 cm)", de: "4 Zoll (10 cm)", nl: "4 inches (10 cm)" }
        ],
        correct: 2,
        explanation: {
          en: "Cookies should be spaced about 2 inches apart to allow for spreading during baking without cookies touching each other, ensuring even baking and proper shape.",
          es: "Las galletas deben espaciarse aproximadamente 2 pulgadas para permitir extensión durante el horneado sin que las galletas se toquen, asegurando horneado uniforme y forma adecuada.",
          de: "Kekse sollten etwa 2 Zoll voneinander entfernt platziert werden, um Ausbreitung während des Backens zu ermöglichen, ohne dass sich Kekse berühren, gleichmäßiges Backen und richtige Form gewährleistend.",
          nl: "Koekjes moeten ongeveer 2 inches uit elkaar geplaatst worden om uitlopen tijdens bakken mogelijk te maken zonder dat koekjes elkaar raken, gelijkmatig bakken en juiste vorm verzekering."
        }
      },
      {
        question: {
          en: "What causes cookies to become too dry and crumbly?",
          es: "¿Qué causa que las galletas se vuelvan muy secas y desmenuzables?",
          de: "Was verursacht, dass Kekse zu trocken und krümelig werden?",
          nl: "Wat veroorzaakt dat koekjes te droog en kruimelig worden?"
        },
        options: [
          { en: "Too much liquid", es: "Demasiado líquido", de: "Zu viel Flüssigkeit", nl: "Te veel vloeistof" },
          { en: "Too much flour or overbaking", es: "Demasiada harina u horneado excesivo", de: "Zu viel Mehl oder Überbacken", nl: "Te veel bloem of overbakken" },
          { en: "Too much sugar", es: "Demasiado azúcar", de: "Zu viel Zucker", nl: "Te veel suiker" },
          { en: "Wrong oven temperature", es: "Temperatura incorrecta del horno", de: "Falsche Ofentemperatur", nl: "Verkeerde oventemperatuur" }
        ],
        correct: 1,
        explanation: {
          en: "Excessive flour absorbs too much moisture, and overbaking removes remaining moisture, both resulting in dry, crumbly cookies that lack the desired tender texture.",
          es: "El exceso de harina absorbe demasiada humedad, y el horneado excesivo quita la humedad restante, ambos resultando en galletas secas y desmenuzables que carecen de la textura tierna deseada.",
          de: "Überschüssiges Mehl absorbiert zu viel Feuchtigkeit, und Überbacken entfernt verbleibende Feuchtigkeit, beides führt zu trockenen, krümeligen Keksen, die die gewünschte zarte Textur vermissen lassen.",
          nl: "Overtollig bloem absorbeert te veel vocht, en overbakken verwijdert resterende vocht, beide resulterend in droge, kruimelige koekjes die de gewenste zachte textuur missen."
        }
      },
      {
        question: {
          en: "What is the function of salt in cookie recipes?",
          es: "¿Cuál es la función de la sal en las recetas de galletas?",
          de: "Was ist die Funktion von Salz in Keksrezepten?",
          nl: "Wat is de functie van zout in koekjesrecepten?"
        },
        options: [
          { en: "Only for preservation", es: "Solo para conservación", de: "Nur zur Konservierung", nl: "Alleen voor bewaring" },
          { en: "Flavor enhancement and gluten strengthening", es: "Mejora del sabor y fortalecimiento del gluten", de: "Geschmacksverbesserung und Glutenstärkung", nl: "Smaakverbetering en gluten versterking" },
          { en: "Color development", es: "Desarrollo de color", de: "Farbentwicklung", nl: "Kleurontwikkeling" },
          { en: "Chemical leavening", es: "Leudado químico", de: "Chemische Triebkraft", nl: "Chemische rijzing" }
        ],
        correct: 1,
        explanation: {
          en: "Salt enhances flavors by balancing sweetness, strengthens gluten structure for better texture, and brings out the natural flavors of other ingredients in the cookie.",
          es: "La sal mejora los sabores equilibrando la dulzura, fortalece la estructura del gluten para mejor textura, y resalta los sabores naturales de otros ingredientes en la galleta.",
          de: "Salz verbessert Aromen durch Ausbalancieren der Süße, stärkt die Glutenstruktur für bessere Textur und bringt die natürlichen Aromen anderer Zutaten im Keks hervor.",
          nl: "Zout verbetert smaken door zoetheid te balanceren, versterkt glutenstructuur voor betere textuur, en haalt de natuurlijke smaken van andere ingrediënten in het koekje naar boven."
        }
      },
      {
        question: {
          en: "What technique helps prevent chocolate chips from sinking to the bottom?",
          es: "¿Qué técnica ayuda a prevenir que las chispas de chocolate se hundan hasta el fondo?",
          de: "Welche Technik hilft zu verhindern, dass Schokoladenstückchen nach unten sinken?",
          nl: "Welke techniek helpt voorkomen dat chocoladeschilfers naar de bodem zakken?"
        },
        options: [
          { en: "Use larger chocolate chips", es: "Usar chispas de chocolate más grandes", de: "Größere Schokoladenstückchen verwenden", nl: "Grotere chocoladeschilfers gebruiken" },
          { en: "Toss chocolate chips in flour before adding", es: "Mezclar chispas de chocolate en harina antes de agregar", de: "Schokoladenstückchen vor Zugabe in Mehl wälzen", nl: "Chocoladeschilfers in bloem mengen voor toevoegen" },
          { en: "Freeze the chips first", es: "Congelar las chispas primero", de: "Die Chips zuerst einfrieren", nl: "De schilfers eerst invriezen" },
          { en: "Bake at higher temperature", es: "Hornear a temperatura más alta", de: "Bei höherer Temperatur backen", nl: "Bakken op hogere temperatuur" }
        ],
        correct: 1,
        explanation: {
          en: "Lightly coating chocolate chips in flour creates friction that helps suspend them in the dough structure, preventing them from sinking during baking due to their weight.",
          es: "Cubrir ligeramente las chispas de chocolate en harina crea fricción que ayuda a suspenderlas en la estructura de la masa, previniendo que se hundan durante el horneado debido a su peso.",
          de: "Leichtes Bestäuben der Schokoladenstückchen mit Mehl schafft Reibung, die hilft, sie in der Teigstruktur zu suspendieren und verhindert, dass sie aufgrund ihres Gewichts beim Backen sinken.",
          nl: "Chocoladeschilfers licht bestoven met bloem creëert wrijving die helpt ze in de deegstructuur te houden, voorkomt dat ze tijdens bakken zinken door hun gewicht."
        }
      },
      {
        question: {
          en: "What is the difference between drop cookies and icebox cookies?",
          es: "¿Cuál es la diferencia entre galletas por gotas y galletas de nevera?",
          de: "Was ist der Unterschied zwischen Tropfkeksen und Kühlschrankkeksen?",
          nl: "Wat is het verschil tussen drop koekjes en ijskast koekjes?"
        },
        options: [
          { en: "Temperature difference only", es: "Solo diferencia de temperatura", de: "Nur Temperaturunterschied", nl: "Alleen temperatuurverschil" },
          { en: "Drop cookies are spooned onto sheets, icebox cookies are sliced from chilled logs", es: "Las galletas por gotas se colocan con cuchara en bandejas, las de nevera se rebanan de troncos fríos", de: "Tropfkekse werden löffelweise auf Bleche gegeben, Kühlschrankkekse von gekühlten Rollen geschnitten", nl: "Drop koekjes worden met lepel op platen gedaan, ijskast koekjes worden gesneden van gekoelde rollen" },
          { en: "Only ingredients differ", es: "Solo difieren los ingredientes", de: "Nur die Zutaten unterscheiden sich", nl: "Alleen ingrediënten verschillen" },
          { en: "Same preparation method", es: "Mismo método de preparación", de: "Gleiche Zubereitungsmethode", nl: "Zelfde bereidingsmethode" }
        ],
        correct: 1,
        explanation: {
          en: "Drop cookies are formed by dropping spoonfuls of soft dough onto baking sheets, while icebox cookies are made from firmer dough rolled into logs, chilled, and sliced before baking.",
          es: "Las galletas por gotas se forman dejando caer cucharadas de masa blanda en bandejas de horneado, mientras que las galletas de nevera se hacen de masa más firme enrollada en troncos, enfriada y rebanada antes de hornear.",
          de: "Tropfkekse werden geformt, indem Löffel weichen Teigs auf Backbleche gegeben werden, während Kühlschrankkekse aus festerem Teig gemacht werden, der zu Rollen geformt, gekühlt und vor dem Backen geschnitten wird.",
          nl: "Drop koekjes worden gevormd door lepels zacht deeg op bakplaten te doen, terwijl ijskast koekjes gemaakt worden van steviger deeg gerold tot rollen, gekoeld en gesneden voor bakken."
        }
      },
      {
        question: {
          en: "What causes cookies to have pale, underbaked centers?",
          es: "¿Qué causa que las galletas tengan centros pálidos y mal horneados?",
          de: "Was verursacht blasse, unterbackene Zentren in Keksen?",
          nl: "Wat veroorzaakt dat koekjes bleke, onderbakken centra hebben?"
        },
        options: [
          { en: "Oven too hot, cookies too thick", es: "Horno muy caliente, galletas muy gruesas", de: "Ofen zu heiß, Kekse zu dick", nl: "Oven te heet, koekjes te dik" },
          { en: "Too much flour", es: "Demasiada harina", de: "Zu viel Mehl", nl: "Te veel bloem" },
          { en: "Wrong type of sugar", es: "Tipo incorrecto de azúcar", de: "Falscher Zuckertyp", nl: "Verkeerd type suiker" },
          { en: "Altitude problems", es: "Problemas de altitud", de: "Höhenprobleme", nl: "Hoogte problemen" }
        ],
        correct: 0,
        explanation: {
          en: "When the oven temperature is too high or cookies are too thick, the outside bakes quickly while the center remains underbaked, creating pale, doughy centers.",
          es: "Cuando la temperatura del horno es muy alta o las galletas son muy gruesas, el exterior se hornea rápido mientras el centro permanece mal horneado, creando centros pálidos y pastosos.",
          de: "Wenn die Ofentemperatur zu hoch ist oder Kekse zu dick sind, backt die Außenseite schnell, während das Zentrum unterbacken bleibt, was blasse, teigige Zentren erzeugt.",
          nl: "Wanneer de oventemperatuur te hoog is of koekjes te dik zijn, bakt de buitenkant snel terwijl het centrum onderbakken blijft, wat bleke, deegachtige centra creëert."
        }
      },
      {
        question: {
          en: "What is the purpose of letting shaped cookie dough rest before baking?",
          es: "¿Cuál es el propósito de dejar reposar la masa de galletas formada antes de hornear?",
          de: "Was ist der Zweck, geformten Keksteig vor dem Backen ruhen zu lassen?",
          nl: "Wat is het doel van gevormde koekjesdeeg laten rusten voor het bakken?"
        },
        options: [
          { en: "Develop yeast activity", es: "Desarrollar actividad de levadura", de: "Hefeaktivität entwickeln", nl: "Gistactiviteit ontwikkelen" },
          { en: "Allow gluten to relax and prevent excessive spreading", es: "Permitir que el gluten se relaje y prevenir extensión excesiva", de: "Gluten entspannen lassen und übermäßiges Verlaufen verhindern", nl: "Gluten laten ontspannen en overdadig uitlopen voorkomen" },
          { en: "Change flavor profile", es: "Cambiar perfil de sabor", de: "Geschmacksprofil ändern", nl: "Smaakprofiel veranderen" },
          { en: "Increase sweetness", es: "Aumentar dulzura", de: "Süße erhöhen", nl: "Zoetheid verhogen" }
        ],
        correct: 1,
        explanation: {
          en: "Resting shaped cookie dough allows gluten strands to relax, which helps cookies maintain their shape during baking and prevents excessive spreading, especially important for cut-out cookies.",
          es: "Reposar la masa de galletas formada permite que las hebras de gluten se relajen, lo que ayuda a las galletas mantener su forma durante el horneado y previene extensión excesiva, especialmente importante para galletas cortadas.",
          de: "Geformten Keksteig ruhen lassen ermöglicht Glutensträngen zu entspannen, was Keksen hilft, ihre Form beim Backen zu behalten und übermäßiges Verlaufen verhindert, besonders wichtig für ausgestochene Kekse.",
          nl: "Gevormde koekjesdeeg laten rusten laat glutenstrengen ontspannen, wat koekjes helpt hun vorm tijdens bakken te behouden en overdadig uitlopen voorkomt, vooral belangrijk voor uitgesneden koekjes."
        }
      },
      {
        question: {
          en: "What type of mixer attachment is best for making cookie dough?",
          es: "¿Qué tipo de accesorio de batidora es mejor para hacer masa de galletas?",
          de: "Welcher Mixeraufsatz ist am besten für die Herstellung von Keksteig?",
          nl: "Welk type mixer opzetstuk is het beste voor het maken van koekjesdeeg?"
        },
        options: [
          { en: "Whisk attachment", es: "Accesorio de batidor", de: "Schneebesen-Aufsatz", nl: "Garde opzetstuk" },
          { en: "Paddle attachment", es: "Accesorio de paleta", de: "Rühraufsatz", nl: "Platte klopper opzetstuk" },
          { en: "Dough hook", es: "Gancho para masa", de: "Knethaken", nl: "Deeghaak" },
          { en: "Any attachment works equally", es: "Cualquier accesorio funciona igual", de: "Jeder Aufsatz funktioniert gleich", nl: "Elk opzetstuk werkt even goed" }
        ],
        correct: 1,
        explanation: {
          en: "The paddle attachment is ideal for cookie dough as it creams butter and sugar effectively while mixing ingredients without overworking the dough or incorporating too much air.",
          es: "El accesorio de paleta es ideal para masa de galletas ya que bate mantequilla y azúcar efectivamente mientras mezcla ingredientes sin sobretrabajar la masa o incorporar demasiado aire.",
          de: "Der Rühraufsatz ist ideal für Keksteig, da er Butter und Zucker effektiv aufschlägt und Zutaten mischt, ohne den Teig zu sehr zu bearbeiten oder zu viel Luft einzuarbeiten.",
          nl: "Het platte klopper opzetstuk is ideaal voor koekjesdeeg omdat het boter en suiker effectief opklopt terwijl het ingrediënten mengt zonder het deeg te veel te bewerken of te veel lucht in te werken."
        }
      },
      {
        question: {
          en: "What indicates that cookies are properly baked?",
          es: "¿Qué indica que las galletas están correctamente horneadas?",
          de: "Was zeigt an, dass Kekse richtig gebacken sind?",
          nl: "Wat geeft aan dat koekjes goed gebakken zijn?"
        },
        options: [
          { en: "They are completely hard", es: "Están completamente duras", de: "Sie sind vollständig hart", nl: "Ze zijn volledig hard" },
          { en: "Edges are set and lightly golden, centers still soft", es: "Los bordes están cuajados y ligeramente dorados, centros aún suaves", de: "Ränder sind fest und leicht golden, Zentren noch weich", nl: "Randen zijn stevig en licht goudkleurig, centra nog zacht" },
          { en: "They are very dark brown", es: "Son muy marrón oscuro", de: "Sie sind sehr dunkelbraun", nl: "Ze zijn zeer donkerbruin" },
          { en: "They spring back when touched", es: "Se recuperan cuando se tocan", de: "Sie federn zurück wenn berührt", nl: "Ze veren terug wanneer aangeraakt" }
        ],
        correct: 1,
        explanation: {
          en: "Properly baked cookies have set, lightly golden edges while centers remain slightly soft, as they continue cooking from residual heat after removal from the oven.",
          es: "Las galletas correctamente horneadas tienen bordes cuajados y ligeramente dorados mientras los centros permanecen ligeramente suaves, ya que continúan cocinándose por calor residual después de sacarlas del horno.",
          de: "Richtig gebackene Kekse haben feste, leicht goldene Ränder, während die Zentren leicht weich bleiben, da sie durch Restwärme nach Entnahme aus dem Ofen weitergaren.",
          nl: "Goed gebakken koekjes hebben stevige, licht goudkleurige randen terwijl centra licht zacht blijven, omdat ze door restwarmte na verwijdering uit de oven blijven bakken."
        }
      },
      {
        question: {
          en: "What is the best way to measure flour for cookies to ensure consistent results?",
          es: "¿Cuál es la mejor manera de medir harina para galletas para asegurar resultados consistentes?",
          de: "Was ist der beste Weg, Mehl für Kekse zu messen, um konsistente Ergebnisse zu gewährleisten?",
          nl: "Wat is de beste manier om bloem voor koekjes te meten voor consistente resultaten?"
        },
        options: [
          { en: "Pack it tightly in measuring cup", es: "Empaquetarla firmemente en taza medidora", de: "Fest in Messbecher packen", nl: "Stevig inpakken in maatbeker" },
          { en: "Spoon and level method", es: "Método de cuchara y nivelar", de: "Löffel- und Nivellier-Methode", nl: "Lepel en afstrijk methode" },
          { en: "Scoop directly with measuring cup", es: "Recoger directamente con taza medidora", de: "Direkt mit Messbecher schöpfen", nl: "Direct scheppen met maatbeker" },
          { en: "Use any method, they're all the same", es: "Usar cualquier método, todos son iguales", de: "Jede Methode verwenden, sie sind alle gleich", nl: "Elke methode gebruiken, ze zijn allemaal hetzelfde" }
        ],
        correct: 1,
        explanation: {
          en: "The spoon and level method (spooning flour into measuring cup and leveling with a knife) gives the most accurate measurement, preventing too much flour which would make cookies dry and tough.",
          es: "El método de cuchara y nivelar (poner harina en taza medidora con cuchara y nivelar con cuchillo) da la medida más precisa, previniendo demasiada harina que haría galletas secas y duras.",
          de: "Die Löffel- und Nivellier-Methode (Mehl mit Löffel in Messbecher geben und mit Messer nivellieren) gibt das genaueste Maß und verhindert zu viel Mehl, was Kekse trocken und zäh machen würde.",
          nl: "De lepel en afstrijk methode (bloem met lepel in maatbeker doen en afstrijken met mes) geeft de nauwkeurigste meting, voorkomt te veel bloem wat koekjes droog en taai zou maken."
        }    },
    {
      question: {
        en: "What makes cookies crispy vs. chewy?",
        es: "What makes cookies crispy vs. chewy?",
        de: "What makes cookies crispy vs. chewy?",
        nl: "What makes cookies crispy vs. chewy?"
      },
      options: [
        { en: "Fat type and baking time", es: "Fat type and baking time", de: "Fat type and baking time", nl: "Fat type and baking time" },
        { en: "Sugar amount", es: "Sugar amount", de: "Sugar amount", nl: "Sugar amount" },
        { en: "Flour type", es: "Flour type", de: "Flour type", nl: "Flour type" },
        { en: "Egg amount", es: "Egg amount", de: "Egg amount", nl: "Egg amount" }
      ],
      correct: 0,
      explanation: {
        en: "Butter creates crispy cookies while shortening makes them chewy; longer baking also increases crispness.",
        es: "Butter creates crispy cookies while shortening makes them chewy; longer baking also increases crispness.",
        de: "Butter creates crispy cookies while shortening makes them chewy; longer baking also increases crispness.",
        nl: "Butter creates crispy cookies while shortening makes them chewy; longer baking also increases crispness."
      }
    },
    {
      question: {
        en: "What is a snickerdoodle?",
        es: "What is a snickerdoodle?",
        de: "What is a snickerdoodle?",
        nl: "What is a snickerdoodle?"
      },
      options: [
        { en: "Cinnamon sugar cookie", es: "Cinnamon sugar cookie", de: "Cinnamon sugar cookie", nl: "Cinnamon sugar cookie" },
        { en: "Chocolate chip cookie", es: "Chocolate chip cookie", de: "Chocolate chip cookie", nl: "Chocolate chip cookie" },
        { en: "Peanut butter cookie", es: "Peanut butter cookie", de: "Peanut butter cookie", nl: "Peanut butter cookie" },
        { en: "Oatmeal cookie", es: "Oatmeal cookie", de: "Oatmeal cookie", nl: "Oatmeal cookie" }
      ],
      correct: 0,
      explanation: {
        en: "Snickerdoodles are sugar cookies rolled in cinnamon-sugar before baking, creating a distinctive crackled surface.",
        es: "Snickerdoodles are sugar cookies rolled in cinnamon-sugar before baking, creating a distinctive crackled surface.",
        de: "Snickerdoodles are sugar cookies rolled in cinnamon-sugar before baking, creating a distinctive crackled surface.",
        nl: "Snickerdoodles are sugar cookies rolled in cinnamon-sugar before baking, creating a distinctive crackled surface."
      }
    },
    {
      question: {
        en: "What is the key ingredient in macarons?",
        es: "What is the key ingredient in macarons?",
        de: "What is the key ingredient in macarons?",
        nl: "What is the key ingredient in macarons?"
      },
      options: [
        { en: "Almond flour", es: "Almond flour", de: "Almond flour", nl: "Almond flour" },
        { en: "Coconut", es: "Coconut", de: "Coconut", nl: "Coconut" },
        { en: "Hazelnuts", es: "Hazelnuts", de: "Hazelnuts", nl: "Hazelnuts" },
        { en: "Walnuts", es: "Walnuts", de: "Walnuts", nl: "Walnuts" }
      ],
      correct: 0,
      explanation: {
        en: "Macarons are made with almond flour (ground almonds), egg whites, and sugar, creating their distinctive texture.",
        es: "Macarons are made with almond flour (ground almonds), egg whites, and sugar, creating their distinctive texture.",
        de: "Macarons are made with almond flour (ground almonds), egg whites, and sugar, creating their distinctive texture.",
        nl: "Macarons are made with almond flour (ground almonds), egg whites, and sugar, creating their distinctive texture."
      }
    },
    {
      question: {
        en: "What are biscotti?",
        es: "What are biscotti?",
        de: "What are biscotti?",
        nl: "What are biscotti?"
      },
      options: [
        { en: "Twice-baked Italian cookies", es: "Twice-baked Italian cookies", de: "Twice-baked Italian cookies", nl: "Twice-baked Italian cookies" },
        { en: "Chocolate cookies", es: "Chocolate cookies", de: "Chocolate cookies", nl: "Chocolate cookies" },
        { en: "Butter cookies", es: "Butter cookies", de: "Butter cookies", nl: "Butter cookies" },
        { en: "Iced cookies", es: "Iced cookies", de: "Iced cookies", nl: "Iced cookies" }
      ],
      correct: 0,
      explanation: {
        en: "Biscotti are Italian cookies baked twice - first as a loaf, then sliced and baked again until crispy.",
        es: "Biscotti are Italian cookies baked twice - first as a loaf, then sliced and baked again until crispy.",
        de: "Biscotti are Italian cookies baked twice - first as a loaf, then sliced and baked again until crispy.",
        nl: "Biscotti are Italian cookies baked twice - first as a loaf, then sliced and baked again until crispy."
      }
    },
    {
      question: {
        en: "What cookie is shaped with a cookie press?",
        es: "What cookie is shaped with a cookie press?",
        de: "What cookie is shaped with a cookie press?",
        nl: "What cookie is shaped with a cookie press?"
      },
      options: [
        { en: "Spritz cookies", es: "Spritz cookies", de: "Spritz cookies", nl: "Spritz cookies" },
        { en: "Sugar cookies", es: "Sugar cookies", de: "Sugar cookies", nl: "Sugar cookies" },
        { en: "Gingerbread cookies", es: "Gingerbread cookies", de: "Gingerbread cookies", nl: "Gingerbread cookies" },
        { en: "Shortbread", es: "Shortbread", de: "Shortbread", nl: "Shortbread" }
      ],
      correct: 0,
      explanation: {
        en: "Spritz cookies are made from dough pressed through a cookie press or pastry bag to create decorative shapes.",
        es: "Spritz cookies are made from dough pressed through a cookie press or pastry bag to create decorative shapes.",
        de: "Spritz cookies are made from dough pressed through a cookie press or pastry bag to create decorative shapes.",
        nl: "Spritz cookies are made from dough pressed through a cookie press or pastry bag to create decorative shapes."
      }
    },
    {
      question: {
        en: "What is the difference between cookies and biscuits?",
        es: "What is the difference between cookies and biscuits?",
        de: "What is the difference between cookies and biscuits?",
        nl: "What is the difference between cookies and biscuits?"
      },
      options: [
        { en: "Regional terminology; biscuits are drier in UK", es: "Regional terminology; biscuits are drier in UK", de: "Regional terminology; biscuits are drier in UK", nl: "Regional terminology; biscuits are drier in UK" },
        { en: "Size difference", es: "Size difference", de: "Size difference", nl: "Size difference" },
        { en: "Ingredient difference", es: "Ingredient difference", de: "Ingredient difference", nl: "Ingredient difference" },
        { en: "No difference", es: "No difference", de: "No difference", nl: "No difference" }
      ],
      correct: 0,
      explanation: {
        en: "In the UK, 'biscuits' are typically drier and harder; in the US, 'cookies' can be soft or crispy while 'biscuits' are bread-like.",
        es: "In the UK, 'biscuits' are typically drier and harder; in the US, 'cookies' can be soft or crispy while 'biscuits' are bread-like.",
        de: "In the UK, 'biscuits' are typically drier and harder; in the US, 'cookies' can be soft or crispy while 'biscuits' are bread-like.",
        nl: "In the UK, 'biscuits' are typically drier and harder; in the US, 'cookies' can be soft or crispy while 'biscuits' are bread-like."
      }
    },
    {
      question: {
        en: "What are thumbprint cookies?",
        es: "What are thumbprint cookies?",
        de: "What are thumbprint cookies?",
        nl: "What are thumbprint cookies?"
      },
      options: [
        { en: "Cookies with jam-filled indentation", es: "Cookies with jam-filled indentation", de: "Cookies with jam-filled indentation", nl: "Cookies with jam-filled indentation" },
        { en: "Chocolate cookies", es: "Chocolate cookies", de: "Chocolate cookies", nl: "Chocolate cookies" },
        { en: "Sandwich cookies", es: "Sandwich cookies", de: "Sandwich cookies", nl: "Sandwich cookies" },
        { en: "Giant cookies", es: "Giant cookies", de: "Giant cookies", nl: "Giant cookies" }
      ],
      correct: 0,
      explanation: {
        en: "Thumbprint cookies have an indentation (traditionally made with a thumb) filled with jam, chocolate, or other fillings.",
        es: "Thumbprint cookies have an indentation (traditionally made with a thumb) filled with jam, chocolate, or other fillings.",
        de: "Thumbprint cookies have an indentation (traditionally made with a thumb) filled with jam, chocolate, or other fillings.",
        nl: "Thumbprint cookies have an indentation (traditionally made with a thumb) filled with jam, chocolate, or other fillings."
      }
    },
    {
      question: {
        en: "What is shortbread?",
        es: "What is shortbread?",
        de: "What is shortbread?",
        nl: "What is shortbread?"
      },
      options: [
        { en: "Scottish butter cookie with 3 ingredients", es: "Scottish butter cookie with 3 ingredients", de: "Scottish butter cookie with 3 ingredients", nl: "Scottish butter cookie with 3 ingredients" },
        { en: "Fruit cookie", es: "Fruit cookie", de: "Fruit cookie", nl: "Fruit cookie" },
        { en: "Chocolate cookie", es: "Chocolate cookie", de: "Chocolate cookie", nl: "Chocolate cookie" },
        { en: "Coconut cookie", es: "Coconut cookie", de: "Coconut cookie", nl: "Coconut cookie" }
      ],
      correct: 0,
      explanation: {
        en: "Shortbread is a traditional Scottish cookie made simply from butter, sugar, and flour in a 1:2:3 ratio.",
        es: "Shortbread is a traditional Scottish cookie made simply from butter, sugar, and flour in a 1:2:3 ratio.",
        de: "Shortbread is a traditional Scottish cookie made simply from butter, sugar, and flour in a 1:2:3 ratio.",
        nl: "Shortbread is a traditional Scottish cookie made simply from butter, sugar, and flour in a 1:2:3 ratio."
      }
    },
    {
      question: {
        en: "What are pfeffernüsse?",
        es: "What are pfeffernüsse?",
        de: "What are pfeffernüsse?",
        nl: "What are pfeffernüsse?"
      },
      options: [
        { en: "German spiced cookies", es: "German spiced cookies", de: "German spiced cookies", nl: "German spiced cookies" },
        { en: "Italian nut cookies", es: "Italian nut cookies", de: "Italian nut cookies", nl: "Italian nut cookies" },
        { en: "French butter cookies", es: "French butter cookies", de: "French butter cookies", nl: "French butter cookies" },
        { en: "American chocolate cookies", es: "American chocolate cookies", de: "American chocolate cookies", nl: "American chocolate cookies" }
      ],
      correct: 0,
      explanation: {
        en: "Pfeffernüsse are traditional German spiced cookies, often made during Christmas with pepper, cinnamon, and other spices.",
        es: "Pfeffernüsse are traditional German spiced cookies, often made during Christmas with pepper, cinnamon, and other spices.",
        de: "Pfeffernüsse are traditional German spiced cookies, often made during Christmas with pepper, cinnamon, and other spices.",
        nl: "Pfeffernüsse are traditional German spiced cookies, often made during Christmas with pepper, cinnamon, and other spices."
      }
    },
    {
      question: {
        en: "What makes oatmeal cookies chewy?",
        es: "What makes oatmeal cookies chewy?",
        de: "What makes oatmeal cookies chewy?",
        nl: "What makes oatmeal cookies chewy?"
      },
      options: [
        { en: "Brown sugar and slightly underbaking", es: "Brown sugar and slightly underbaking", de: "Brown sugar and slightly underbaking", nl: "Brown sugar and slightly underbaking" },
        { en: "White sugar", es: "White sugar", de: "White sugar", nl: "White sugar" },
        { en: "Overbaking", es: "Overbaking", de: "Overbaking", nl: "Overbaking" },
        { en: "Extra flour", es: "Extra flour", de: "Extra flour", nl: "Extra flour" }
      ],
      correct: 0,
      explanation: {
        en: "Brown sugar's moisture and slight underbaking keep oatmeal cookies chewy; the oats also contribute to texture.",
        es: "Brown sugar's moisture and slight underbaking keep oatmeal cookies chewy; the oats also contribute to texture.",
        de: "Brown sugar's moisture and slight underbaking keep oatmeal cookies chewy; the oats also contribute to texture.",
        nl: "Brown sugar's moisture and slight underbaking keep oatmeal cookies chewy; the oats also contribute to texture."
      }
    },
    {
      question: {
        en: "What is a florentine cookie?",
        es: "What is a florentine cookie?",
        de: "What is a florentine cookie?",
        nl: "What is a florentine cookie?"
      },
      options: [
        { en: "Thin cookie with nuts and dried fruit, often chocolate-backed", es: "Thin cookie with nuts and dried fruit, often chocolate-backed", de: "Thin cookie with nuts and dried fruit, often chocolate-backed", nl: "Thin cookie with nuts and dried fruit, often chocolate-backed" },
        { en: "Chocolate chip cookie", es: "Chocolate chip cookie", de: "Chocolate chip cookie", nl: "Chocolate chip cookie" },
        { en: "Sugar cookie", es: "Sugar cookie", de: "Sugar cookie", nl: "Sugar cookie" },
        { en: "Gingerbread cookie", es: "Gingerbread cookie", de: "Gingerbread cookie", nl: "Gingerbread cookie" }
      ],
      correct: 0,
      explanation: {
        en: "Florentines are thin, crispy Italian cookies made with nuts and candied fruit, traditionally with chocolate on one side.",
        es: "Florentines are thin, crispy Italian cookies made with nuts and candied fruit, traditionally with chocolate on one side.",
        de: "Florentines are thin, crispy Italian cookies made with nuts and candied fruit, traditionally with chocolate on one side.",
        nl: "Florentines are thin, crispy Italian cookies made with nuts and candied fruit, traditionally with chocolate on one side."
      }
    },
    {
      question: {
        en: "What are Russian tea cakes?",
        es: "What are Russian tea cakes?",
        de: "What are Russian tea cakes?",
        nl: "What are Russian tea cakes?"
      },
      options: [
        { en: "Buttery nut cookies rolled in powdered sugar", es: "Buttery nut cookies rolled in powdered sugar", de: "Buttery nut cookies rolled in powdered sugar", nl: "Buttery nut cookies rolled in powdered sugar" },
        { en: "Tea-flavored cookies", es: "Tea-flavored cookies", de: "Tea-flavored cookies", nl: "Tea-flavored cookies" },
        { en: "Layered cookies", es: "Layered cookies", de: "Layered cookies", nl: "Layered cookies" },
        { en: "Fruit cookies", es: "Fruit cookies", de: "Fruit cookies", nl: "Fruit cookies" }
      ],
      correct: 0,
      explanation: {
        en: "Russian tea cakes (or Mexican wedding cookies) are buttery cookies with finely chopped nuts, rolled in powdered sugar.",
        es: "Russian tea cakes (or Mexican wedding cookies) are buttery cookies with finely chopped nuts, rolled in powdered sugar.",
        de: "Russian tea cakes (or Mexican wedding cookies) are buttery cookies with finely chopped nuts, rolled in powdered sugar.",
        nl: "Russian tea cakes (or Mexican wedding cookies) are buttery cookies with finely chopped nuts, rolled in powdered sugar."
      }
    },
    {
      question: {
        en: "What is a linzer cookie?",
        es: "What is a linzer cookie?",
        de: "What is a linzer cookie?",
        nl: "What is a linzer cookie?"
      },
      options: [
        { en: "Sandwich cookie with jam filling and cutout top", es: "Sandwich cookie with jam filling and cutout top", de: "Sandwich cookie with jam filling and cutout top", nl: "Sandwich cookie with jam filling and cutout top" },
        { en: "Chocolate cookie", es: "Chocolate cookie", de: "Chocolate cookie", nl: "Chocolate cookie" },
        { en: "Iced cookie", es: "Iced cookie", de: "Iced cookie", nl: "Iced cookie" },
        { en: "Bar cookie", es: "Bar cookie", de: "Bar cookie", nl: "Bar cookie" }
      ],
      correct: 0,
      explanation: {
        en: "Linzer cookies are sandwich cookies filled with jam, with a cutout in the top cookie revealing the jam filling.",
        es: "Linzer cookies are sandwich cookies filled with jam, with a cutout in the top cookie revealing the jam filling.",
        de: "Linzer cookies are sandwich cookies filled with jam, with a cutout in the top cookie revealing the jam filling.",
        nl: "Linzer cookies are sandwich cookies filled with jam, with a cutout in the top cookie revealing the jam filling."
      }
    },
    {
      question: {
        en: "What are meringue cookies?",
        es: "What are meringue cookies?",
        de: "What are meringue cookies?",
        nl: "What are meringue cookies?"
      },
      options: [
        { en: "Cookies made from whipped egg whites and sugar", es: "Cookies made from whipped egg whites and sugar", de: "Cookies made from whipped egg whites and sugar", nl: "Cookies made from whipped egg whites and sugar" },
        { en: "Butter cookies", es: "Butter cookies", de: "Butter cookies", nl: "Butter cookies" },
        { en: "Chocolate cookies", es: "Chocolate cookies", de: "Chocolate cookies", nl: "Chocolate cookies" },
        { en: "Oatmeal cookies", es: "Oatmeal cookies", de: "Oatmeal cookies", nl: "Oatmeal cookies" }
      ],
      correct: 0,
      explanation: {
        en: "Meringue cookies are light, crispy cookies made primarily from whipped egg whites and sugar, baked at low temperature.",
        es: "Meringue cookies are light, crispy cookies made primarily from whipped egg whites and sugar, baked at low temperature.",
        de: "Meringue cookies are light, crispy cookies made primarily from whipped egg whites and sugar, baked at low temperature.",
        nl: "Meringue cookies are light, crispy cookies made primarily from whipped egg whites and sugar, baked at low temperature."
      }
    },
    {
      question: {
        en: "What is the purpose of chilling cookie dough?",
        es: "What is the purpose of chilling cookie dough?",
        de: "What is the purpose of chilling cookie dough?",
        nl: "What is the purpose of chilling cookie dough?"
      },
      options: [
        { en: "Prevent spreading and enhance flavor", es: "Prevent spreading and enhance flavor", de: "Prevent spreading and enhance flavor", nl: "Prevent spreading and enhance flavor" },
        { en: "Make it easier to mix", es: "Make it easier to mix", de: "Make it easier to mix", nl: "Make it easier to mix" },
        { en: "Add moisture", es: "Add moisture", de: "Add moisture", nl: "Add moisture" },
        { en: "Speed up baking", es: "Speed up baking", de: "Speed up baking", nl: "Speed up baking" }
      ],
      correct: 0,
      explanation: {
        en: "Chilling cookie dough prevents excessive spreading during baking and allows flavors to develop.",
        es: "Chilling cookie dough prevents excessive spreading during baking and allows flavors to develop.",
        de: "Chilling cookie dough prevents excessive spreading during baking and allows flavors to develop.",
        nl: "Chilling cookie dough prevents excessive spreading during baking and allows flavors to develop."
      }
    },
    {
      question: {
        en: "What are Anzac biscuits?",
        es: "What are Anzac biscuits?",
        de: "What are Anzac biscuits?",
        nl: "What are Anzac biscuits?"
      },
      options: [
        { en: "Australian/New Zealand oat cookies", es: "Australian/New Zealand oat cookies", de: "Australian/New Zealand oat cookies", nl: "Australian/New Zealand oat cookies" },
        { en: "British digestive biscuits", es: "British digestive biscuits", de: "British digestive biscuits", nl: "British digestive biscuits" },
        { en: "American graham crackers", es: "American graham crackers", de: "American graham crackers", nl: "American graham crackers" },
        { en: "Scottish shortbread", es: "Scottish shortbread", de: "Scottish shortbread", nl: "Scottish shortbread" }
      ],
      correct: 0,
      explanation: {
        en: "Anzac biscuits are crispy oat cookies from Australia and New Zealand, traditionally made with golden syrup and coconut.",
        es: "Anzac biscuits are crispy oat cookies from Australia and New Zealand, traditionally made with golden syrup and coconut.",
        de: "Anzac biscuits are crispy oat cookies from Australia and New Zealand, traditionally made with golden syrup and coconut.",
        nl: "Anzac biscuits are crispy oat cookies from Australia and New Zealand, traditionally made with golden syrup and coconut."
      }
    },
    {
      question: {
        en: "What is a whoopie pie?",
        es: "What is a whoopie pie?",
        de: "What is a whoopie pie?",
        nl: "What is a whoopie pie?"
      },
      options: [
        { en: "Two cake-like cookies with cream filling", es: "Two cake-like cookies with cream filling", de: "Two cake-like cookies with cream filling", nl: "Two cake-like cookies with cream filling" },
        { en: "Chocolate chip cookie", es: "Chocolate chip cookie", de: "Chocolate chip cookie", nl: "Chocolate chip cookie" },
        { en: "Pie-shaped cookie", es: "Pie-shaped cookie", de: "Pie-shaped cookie", nl: "Pie-shaped cookie" },
        { en: "Fruit-filled cookie", es: "Fruit-filled cookie", de: "Fruit-filled cookie", nl: "Fruit-filled cookie" }
      ],
      correct: 0,
      explanation: {
        en: "Whoopie pies consist of two soft, cake-like cookies with a creamy filling sandwiched between them.",
        es: "Whoopie pies consist of two soft, cake-like cookies with a creamy filling sandwiched between them.",
        de: "Whoopie pies consist of two soft, cake-like cookies with a creamy filling sandwiched between them.",
        nl: "Whoopie pies consist of two soft, cake-like cookies with a creamy filling sandwiched between them."
      }
    },
    {
      question: {
        en: "What makes gingersnaps 'snap'?",
        es: "What makes gingersnaps 'snap'?",
        de: "What makes gingersnaps 'snap'?",
        nl: "What makes gingersnaps 'snap'?"
      },
      options: [
        { en: "High molasses content and baking until crisp", es: "High molasses content and baking until crisp", de: "High molasses content and baking until crisp", nl: "High molasses content and baking until crisp" },
        { en: "Ginger amount", es: "Ginger amount", de: "Ginger amount", nl: "Ginger amount" },
        { en: "Flour type", es: "Flour type", de: "Flour type", nl: "Flour type" },
        { en: "Size", es: "Size", de: "Size", nl: "Size" }
      ],
      correct: 0,
      explanation: {
        en: "Gingersnaps are crispy due to molasses and baking until fully crisp, creating their distinctive 'snap' when broken.",
        es: "Gingersnaps are crispy due to molasses and baking until fully crisp, creating their distinctive 'snap' when broken.",
        de: "Gingersnaps are crispy due to molasses and baking until fully crisp, creating their distinctive 'snap' when broken.",
        nl: "Gingersnaps are crispy due to molasses and baking until fully crisp, creating their distinctive 'snap' when broken."
      }
    },
    {
      question: {
        en: "What is a Moravian cookie?",
        es: "What is a Moravian cookie?",
        de: "What is a Moravian cookie?",
        nl: "What is a Moravian cookie?"
      },
      options: [
        { en: "Very thin, crispy spiced cookie", es: "Very thin, crispy spiced cookie", de: "Very thin, crispy spiced cookie", nl: "Very thin, crispy spiced cookie" },
        { en: "Thick soft cookie", es: "Thick soft cookie", de: "Thick soft cookie", nl: "Thick soft cookie" },
        { en: "Sandwich cookie", es: "Sandwich cookie", de: "Sandwich cookie", nl: "Sandwich cookie" },
        { en: "No-bake cookie", es: "No-bake cookie", de: "No-bake cookie", nl: "No-bake cookie" }
      ],
      correct: 0,
      explanation: {
        en: "Moravian cookies are paper-thin, crispy spiced cookies traditional to the Moravian communities of North Carolina.",
        es: "Moravian cookies are paper-thin, crispy spiced cookies traditional to the Moravian communities of North Carolina.",
        de: "Moravian cookies are paper-thin, crispy spiced cookies traditional to the Moravian communities of North Carolina.",
        nl: "Moravian cookies are paper-thin, crispy spiced cookies traditional to the Moravian communities of North Carolina."
      }
    },
    {
      question: {
        en: "What are ladyfingers?",
        es: "What are ladyfingers?",
        de: "What are ladyfingers?",
        nl: "What are ladyfingers?"
      },
      options: [
        { en: "Light, finger-shaped sponge cookies", es: "Light, finger-shaped sponge cookies", de: "Light, finger-shaped sponge cookies", nl: "Light, finger-shaped sponge cookies" },
        { en: "Cookies shaped like hands", es: "Cookies shaped like hands", de: "Cookies shaped like hands", nl: "Cookies shaped like hands" },
        { en: "Almond cookies", es: "Almond cookies", de: "Almond cookies", nl: "Almond cookies" },
        { en: "Chocolate cookies", es: "Chocolate cookies", de: "Chocolate cookies", nl: "Chocolate cookies" }
      ],
      correct: 0,
      explanation: {
        en: "Ladyfingers are light, dry, finger-shaped sponge cookies often used in tiramisu and charlottes.",
        es: "Ladyfingers are light, dry, finger-shaped sponge cookies often used in tiramisu and charlottes.",
        de: "Ladyfingers are light, dry, finger-shaped sponge cookies often used in tiramisu and charlottes.",
        nl: "Ladyfingers are light, dry, finger-shaped sponge cookies often used in tiramisu and charlottes."
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