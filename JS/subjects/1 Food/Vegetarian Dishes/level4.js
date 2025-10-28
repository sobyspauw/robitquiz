// Vegetarian Dishes Quiz - Level 4: Cooking Methods for Vegetarian Food
(function() {
  "use strict";
  const level4 = {
    name: {
      en: "Vegetarian Level 4",
      es: "Vegetariano Nivel 4",
      de: "Vegetarisch Stufe 4",
      nl: "Vegetarisch Level 4"
    },
    questions: [
      {
        question: {
          en: "What is the best cooking method to caramelize onions?",
          es: "¿Cuál es el mejor método de cocción para caramelizar cebollas?",
          de: "Was ist die beste Kochmethode zum Karamellisieren von Zwiebeln?",
          nl: "Wat is de beste kookmethode om uien te karameliseren?"
        },
        options: [
          { en: "Low heat, slow cooking for 30-45 minutes", es: "Fuego bajo, cocción lenta por 30-45 minutos", de: "Niedrige Hitze, langsames Kochen für 30-45 Minuten", nl: "Lage hitte, langzaam koken gedurende 30-45 minuten" },
          { en: "High heat for 5 minutes", es: "Fuego alto por 5 minutos", de: "Hohe Hitze für 5 Minuten", nl: "Hoge hitte gedurende 5 minuten" },
          { en: "Boiling in water", es: "Hervir en agua", de: "In Wasser kochen", nl: "Koken in water" },
          { en: "Microwave on high", es: "Microondas en alto", de: "Mikrowelle auf hoch", nl: "Magnetron op hoog" }
        ],
        correct: 0,
        explanation: {
          en: "Caramelizing onions requires patience and low heat to slowly break down the natural sugars, creating deep, sweet flavors without burning.",
          es: "Caramelizar cebollas requiere paciencia y fuego bajo para descomponer lentamente los azúcares naturales, creando sabores profundos y dulces sin quemarse.",
          de: "Das Karamellisieren von Zwiebeln erfordert Geduld und niedrige Hitze, um die natürlichen Zucker langsam abzubauen und tiefe, süße Aromen zu schaffen, ohne zu verbrennen.",
          nl: "Uien karameliseren vereist geduld en lage hitte om de natuurlijke suikers langzaam af te breken, waarbij diepe, zoete smaken ontstaan zonder verbranden."
        }
      },
      {
        question: {
          en: "Which cooking technique creates the best texture for roasted vegetables?",
          es: "¿Qué técnica de cocción crea la mejor textura para verduras asadas?",
          de: "Welche Kochtechnik schafft die beste Textur für geröstetes Gemüse?",
          nl: "Welke kooktechniek creëert de beste textuur voor geroosterde groenten?"
        },
        options: [
          { en: "High heat (400-450°F) with vegetables spread in single layer", es: "Calor alto (200-230°C) con verduras extendidas en una sola capa", de: "Hohe Hitze (200-230°C) mit Gemüse in einer Schicht ausgebreitet", nl: "Hoge hitte (200-230°C) met groenten uitgespreid in één laag" },
          { en: "Low heat with vegetables piled together", es: "Calor bajo con verduras apiladas juntas", de: "Niedrige Hitze mit zusammengehäuftem Gemüse", nl: "Lage hitte met groenten op elkaar gestapeld" },
          { en: "Medium heat with constant stirring", es: "Calor medio con agitación constante", de: "Mittlere Hitze mit ständigem Rühren", nl: "Gemiddelde hitte met constant roeren" },
          { en: "Boiling in salted water", es: "Hervir en agua con sal", de: "In Salzwasser kochen", nl: "Koken in gezouten water" }
        ],
        correct: 0,
        explanation: {
          en: "High heat and single-layer arrangement allows vegetables to caramelize and develop crispy exteriors while maintaining tender interiors. Crowding steams vegetables instead of roasting them.",
          es: "El calor alto y la disposición en una sola capa permite que las verduras se caramelicen y desarrollen exteriores crujientes mientras mantienen interiores tiernos. El hacinamiento cuece las verduras al vapor en lugar de asarlas.",
          de: "Hohe Hitze und Anordnung in einer Schicht ermöglicht es Gemüse zu karamellisieren und knusprige Außenseiten zu entwickeln, während das Innere zart bleibt. Überfüllung dämpft Gemüse anstatt es zu rösten.",
          nl: "Hoge hitte en opstelling in één laag stelt groenten in staat te karameliseren en knapperige buitenkanten te ontwikkelen terwijl ze malse binnenkanten behouden. Opeenhopen stoomt groenten in plaats van ze te roosteren."
        }
      },
      {
        question: {
          en: "What is the purpose of blanching vegetables before cooking?",
          es: "¿Cuál es el propósito de blanquear verduras antes de cocinar?",
          de: "Was ist der Zweck des Blanchierens von Gemüse vor dem Kochen?",
          nl: "Wat is het doel van het blancheren van groenten voor het koken?"
        },
        options: [
          { en: "To partially cook and preserve color and texture", es: "Para cocinar parcialmente y preservar color y textura", de: "Um teilweise zu kochen und Farbe und Textur zu bewahren", nl: "Om gedeeltelijk te koken en kleur en textuur te behouden" },
          { en: "To add salt to vegetables", es: "Para añadir sal a las verduras", de: "Um Gemüse Salz hinzuzufügen", nl: "Om zout aan groenten toe te voegen" },
          { en: "To remove all nutrients", es: "Para eliminar todos los nutrientes", de: "Um alle Nährstoffe zu entfernen", nl: "Om alle voedingsstoffen te verwijderen" },
          { en: "To make vegetables softer only", es: "Para hacer las verduras más suaves solamente", de: "Nur um Gemüse weicher zu machen", nl: "Om groenten alleen zachter te maken" }
        ],
        correct: 0,
        explanation: {
          en: "Blanching involves briefly boiling vegetables then plunging into ice water. This partially cooks them, stops enzyme action, preserves color and texture, and makes them easier to finish cooking later.",
          es: "Blanquear implica hervir brevemente las verduras y luego sumergirlas en agua helada. Esto las cocina parcialmente, detiene la acción enzimática, preserva el color y la textura, y las hace más fáciles de terminar de cocinar después.",
          de: "Blanchieren beinhaltet kurzes Kochen von Gemüse und dann das Eintauchen in Eiswasser. Dies kocht sie teilweise, stoppt Enzymaktivität, bewahrt Farbe und Textur und macht sie einfacher später fertig zu kochen.",
          nl: "Blancheren houdt kort koken van groenten in en ze dan in ijswater dompelen. Dit kookt ze gedeeltelijk, stopt enzymwerking, behoudt kleur en textuur, en maakt ze makkelijker om later af te koken."
        }
      },
      {
        question: {
          en: "Which vegetable preparation technique reduces bitterness in eggplant?",
          es: "¿Qué técnica de preparación de verduras reduce la amargura en la berenjena?",
          de: "Welche Gemüsevorbereitungstechnik reduziert die Bitterkeit in Auberginen?",
          nl: "Welke groenteprepatiratietechniek vermindert bitterheid in aubergine?"
        },
        options: [
          { en: "Salting and letting it sit for 30 minutes", es: "Salar y dejar reposar por 30 minutos", de: "Salzen und 30 Minuten ruhen lassen", nl: "Zouten en 30 minuten laten rusten" },
          { en: "Freezing overnight", es: "Congelar toda la noche", de: "Über Nacht einfrieren", nl: "Een nacht invriezen" },
          { en: "Boiling for 1 hour", es: "Hervir por 1 hora", de: "1 Stunde kochen", nl: "1 uur koken" },
          { en: "Peeling completely", es: "Pelar completamente", de: "Vollständig schälen", nl: "Volledig schillen" }
        ],
        correct: 0,
        explanation: {
          en: "Salting eggplant draws out bitter compounds and excess moisture. After 30 minutes, rinse and pat dry before cooking. This technique is called 'degorging.'",
          es: "Salar la berenjena extrae compuestos amargos y exceso de humedad. Después de 30 minutos, enjuagar y secar antes de cocinar. Esta técnica se llama 'degorging.'",
          de: "Das Salzen von Auberginen zieht bittere Verbindungen und überschüssige Feuchtigkeit heraus. Nach 30 Minuten spülen und trocken tupfen vor dem Kochen. Diese Technik heißt 'Degorging.'",
          nl: "Aubergine zouten trekt bittere stoffen en overtollig vocht eruit. Na 30 minuten spoelen en droogkloppen voor het koken. Deze techniek wordt 'degorging' genoemd."
        }
      },
      {
        question: {
          en: "What is the ideal temperature for sautéing vegetables?",
          es: "¿Cuál es la temperatura ideal para saltear verduras?",
          de: "Was ist die ideale Temperatur zum Anbraten von Gemüse?",
          nl: "Wat is de ideale temperatuur voor het sauteren van groenten?"
        },
        options: [
          { en: "Medium-high heat", es: "Fuego medio-alto", de: "Mittlere bis hohe Hitze", nl: "Middelhoge hitte" },
          { en: "Very low heat", es: "Fuego muy bajo", de: "Sehr niedrige Hitze", nl: "Zeer lage hitte" },
          { en: "Maximum high heat", es: "Fuego máximo alto", de: "Maximale hohe Hitze", nl: "Maximale hoge hitte" },
          { en: "No heat, raw preparation", es: "Sin calor, preparación cruda", de: "Keine Hitze, rohe Zubereitung", nl: "Geen hitte, rauwe bereiding" }
        ],
        correct: 0,
        explanation: {
          en: "Medium-high heat allows vegetables to cook quickly while developing some caramelization without burning. The pan should be hot enough that vegetables sizzle when added.",
          es: "El fuego medio-alto permite que las verduras se cocinen rápidamente mientras desarrollan algo de caramelización sin quemarse. La sartén debe estar lo suficientemente caliente para que las verduras chisporroteen cuando se añadan.",
          de: "Mittlere bis hohe Hitze ermöglicht es Gemüse schnell zu kochen, während es etwas Karamellisierung entwickelt ohne zu verbrennen. Die Pfanne sollte heiß genug sein, dass Gemüse zischt, wenn es hinzugefügt wird.",
          nl: "Middelhoge hitte stelt groenten in staat om snel te koken terwijl ze wat karamelisering ontwikkelen zonder te verbranden. De pan moet heet genoeg zijn dat groenten sissen wanneer toegevoegd."
        }
      },
      {
        question: {
          en: "Which technique is best for cooking grains like quinoa and rice?",
          es: "¿Qué técnica es mejor para cocinar granos como quinoa y arroz?",
          de: "Welche Technik ist am besten zum Kochen von Körnern wie Quinoa und Reis?",
          nl: "Welke techniek is het beste voor het koken van granen zoals quinoa en rijst?"
        },
        options: [
          { en: "Absorption method: 2:1 water to grain ratio", es: "Método de absorción: proporción 2:1 de agua a grano", de: "Absorptionsmethode: 2:1 Wasser-zu-Korn-Verhältnis", nl: "Absorptiemethode: 2:1 water-graan verhouding" },
          { en: "Boiling in excess water like pasta", es: "Hervir en exceso de agua como pasta", de: "In überschüssigem Wasser kochen wie Nudeln", nl: "Koken in overtollig water zoals pasta" },
          { en: "Steaming without any water", es: "Cocinar al vapor sin agua", de: "Dämpfen ohne Wasser", nl: "Stomen zonder water" },
          { en: "Frying in oil only", es: "Freír solo en aceite", de: "Nur in Öl braten", nl: "Alleen bakken in olie" }
        ],
        correct: 0,
        explanation: {
          en: "The absorption method uses just enough liquid (usually 2:1 ratio) that gets completely absorbed during cooking, resulting in perfectly cooked grains with ideal texture.",
          es: "El método de absorción usa justo suficiente líquido (usualmente proporción 2:1) que se absorbe completamente durante la cocción, resultando en granos perfectamente cocidos con textura ideal.",
          de: "Die Absorptionsmethode verwendet genau genug Flüssigkeit (normalerweise 2:1-Verhältnis), die während des Kochens vollständig absorbiert wird, was zu perfekt gekochten Körnern mit idealer Textur führt.",
          nl: "De absorptiemethode gebruikt precies genoeg vloeistof (meestal 2:1 verhouding) die volledig wordt geabsorbeerd tijdens het koken, wat resulteert in perfect gekookte granen met ideale textuur."
        }
      },
      {
        question: {
          en: "What is the key to making perfectly smooth hummus?",
          es: "¿Cuál es la clave para hacer hummus perfectamente suave?",
          de: "Was ist der Schlüssel für perfekt glatten Hummus?",
          nl: "Wat is de sleutel tot het maken van perfect gladde hummus?"
        },
        options: [
          { en: "Removing chickpea skins and adding liquid gradually", es: "Remover las pieles de los garbanzos y añadir líquido gradualmente", de: "Kichererbsenschalen entfernen und Flüssigkeit allmählich hinzufügen", nl: "Kikkererwtenvelletjes verwijderen en vloeistof geleidelijk toevoegen" },
          { en: "Using cold chickpeas", es: "Usar garbanzos fríos", de: "Kalte Kichererbsen verwenden", nl: "Koude kikkererwten gebruiken" },
          { en: "Adding lots of olive oil at once", es: "Añadir mucho aceite de oliva de una vez", de: "Viel Olivenöl auf einmal hinzufügen", nl: "Veel olijfolie ineens toevoegen" },
          { en: "Blending for only 30 seconds", es: "Mezclar por solo 30 segundos", de: "Nur 30 Sekunden mixen", nl: "Alleen 30 seconden mixen" }
        ],
        correct: 0,
        explanation: {
          en: "Removing the skins creates ultra-smooth texture, and adding liquid (chickpea cooking water or ice water) gradually while blending creates the perfect creamy consistency.",
          es: "Remover las pieles crea una textura ultra-suave, y añadir líquido (agua de cocción de garbanzos o agua helada) gradualmente mientras se mezcla crea la consistencia cremosa perfecta.",
          de: "Das Entfernen der Schalen schafft eine ultra-glatte Textur, und das allmähliche Hinzufügen von Flüssigkeit (Kichererbsen-Kochwasser oder Eiswasser) beim Mixen schafft die perfekte cremige Konsistenz.",
          nl: "Het verwijderen van de velletjes creëert ultra-gladde textuur, en het geleidelijk toevoegen van vloeistof (kikkererwten kookwater of ijswater) tijdens het mixen creëert de perfecte romige consistentie."
        }
      },
      {
        question: {
          en: "Which cooking method best preserves the nutrients in leafy greens?",
          es: "¿Qué método de cocción preserva mejor los nutrientes en las verduras de hoja verde?",
          de: "Welche Kochmethode bewahrt die Nährstoffe in Blattgrün am besten?",
          nl: "Welke kookmethode behoudt de voedingsstoffen in bladgroenten het beste?"
        },
        options: [
          { en: "Quick steaming for 2-3 minutes", es: "Cocción rápida al vapor por 2-3 minutos", de: "Schnelles Dämpfen für 2-3 Minuten", nl: "Snel stomen gedurende 2-3 minuten" },
          { en: "Boiling for 15 minutes", es: "Hervir por 15 minutos", de: "15 Minuten kochen", nl: "15 minuten koken" },
          { en: "Soaking in water overnight", es: "Remojar en agua toda la noche", de: "Über Nacht in Wasser einweichen", nl: "Een nacht in water weken" },
          { en: "Deep frying in oil", es: "Freír en aceite abundante", de: "In Öl frittieren", nl: "Frituren in olie" }
        ],
        correct: 0,
        explanation: {
          en: "Quick steaming minimally cooks leafy greens while preserving heat-sensitive vitamins like vitamin C and folate. Overcooking and boiling leaches nutrients into the water.",
          es: "La cocción rápida al vapor cocina mínimamente las verduras de hoja verde mientras preserva vitaminas sensibles al calor como la vitamina C y el folato. La sobrecocción y el hervido filtran nutrientes al agua.",
          de: "Schnelles Dämpfen kocht Blattgrün minimal, während es hitzeempfindliche Vitamine wie Vitamin C und Folsäure bewahrt. Überkochen und Kochen laugt Nährstoffe ins Wasser aus.",
          nl: "Snel stomen kookt bladgroenten minimaal terwijl het hittegevoelige vitamines zoals vitamine C en folaat behoudt. Overkoken en koken lekt voedingsstoffen in het water."
        }
      },
      {
        question: {
          en: "What is the proper technique for making crispy tofu?",
          es: "¿Cuál es la técnica adecuada para hacer tofu crujiente?",
          de: "Was ist die richtige Technik für knusprigen Tofu?",
          nl: "Wat is de juiste techniek voor het maken van knapperige tofu?"
        },
        options: [
          { en: "Press out water, cut into cubes, coat lightly in cornstarch", es: "Prensar el agua, cortar en cubos, cubrir ligeramente con maicena", de: "Wasser ausdrücken, in Würfel schneiden, leicht mit Maisstärke bestreuen", nl: "Water uitpersen, in blokjes snijden, licht bedekken met maïszetmeel" },
          { en: "Use tofu straight from package", es: "Usar tofu directo del paquete", de: "Tofu direkt aus der Verpackung verwenden", nl: "Tofu direct uit de verpakking gebruiken" },
          { en: "Boil tofu first", es: "Hervir el tofu primero", de: "Tofu zuerst kochen", nl: "Tofu eerst koken" },
          { en: "Freeze tofu overnight", es: "Congelar tofu toda la noche", de: "Tofu über Nacht einfrieren", nl: "Tofu een nacht invriezen" }
        ],
        correct: 0,
        explanation: {
          en: "Pressing removes excess water, allowing tofu to crisp up. Cornstarch coating creates an extra crispy exterior when pan-fried or baked at high heat.",
          es: "Prensar elimina el exceso de agua, permitiendo que el tofu se ponga crujiente. El recubrimiento de maicena crea un exterior extra crujiente cuando se fríe en sartén o se hornea a alta temperatura.",
          de: "Das Pressen entfernt überschüssiges Wasser und ermöglicht es dem Tofu, knusprig zu werden. Maisstärke-Beschichtung schafft eine extra knusprige Außenseite beim Anbraten oder Backen bei hoher Hitze.",
          nl: "Persen verwijdert overtollig water, waardoor tofu knapperig kan worden. Maïszetmeel coating creëert een extra knapperige buitenkant bij bakken in de pan of in de oven op hoge temperatuur."
        }
      },
      {
        question: {
          en: "Which technique creates the best flavor when cooking mushrooms?",
          es: "¿Qué técnica crea el mejor sabor al cocinar hongos?",
          de: "Welche Technik schafft den besten Geschmack beim Kochen von Pilzen?",
          nl: "Welke techniek creëert de beste smaak bij het koken van paddenstoelen?"
        },
        options: [
          { en: "Sear without crowding, don't stir immediately", es: "Sellar sin amontonar, no revolver inmediatamente", de: "Anbraten ohne Überfüllung, nicht sofort rühren", nl: "Aanbraden zonder opeenhopen, niet meteen roeren" },
          { en: "Boil in salted water", es: "Hervir en agua salada", de: "In Salzwasser kochen", nl: "Koken in gezouten water" },
          { en: "Steam covered for 20 minutes", es: "Cocer al vapor cubierto por 20 minutos", de: "Zugedeckt 20 Minuten dämpfen", nl: "Bedekt 20 minuten stomen" },
          { en: "Microwave on high power", es: "Microondas a potencia alta", de: "Mikrowelle auf hoher Leistung", nl: "Magnetron op hoog vermogen" }
        ],
        correct: 0,
        explanation: {
          en: "Searing mushrooms in a hot pan without crowding allows them to brown and develop deep umami flavors. Stirring too early releases moisture and prevents browning.",
          es: "Sellar hongos en una sartén caliente sin amontonar permite que se doren y desarrollen sabores umami profundos. Revolver muy temprano libera humedad y previene el dorado.",
          de: "Das Anbraten von Pilzen in einer heißen Pfanne ohne Überfüllung ermöglicht es ihnen zu bräunen und tiefe Umami-Aromen zu entwickeln. Zu frühes Rühren setzt Feuchtigkeit frei und verhindert das Bräunen.",
          nl: "Paddenstoelen aanbraden in een hete pan zonder opeenhopen stelt ze in staat te bruinen en diepe umami smaken te ontwikkelen. Te vroeg roeren geeft vocht vrij en voorkomt bruining."
        }
      },
      {
        question: {
          en: "What is the best way to prepare dried beans for cooking?",
          es: "¿Cuál es la mejor manera de preparar frijoles secos para cocinar?",
          de: "Was ist der beste Weg, getrocknete Bohnen zum Kochen vorzubereiten?",
          nl: "Wat is de beste manier om gedroogde bonen voor te bereiden voor het koken?"
        },
        options: [
          { en: "Soak overnight, then simmer gently", es: "Remojar toda la noche, luego hervir suavemente", de: "Über Nacht einweichen, dann sanft köcheln", nl: "Een nacht weken, dan zachtjes sudderen" },
          { en: "Cook directly from dry", es: "Cocinar directamente desde seco", de: "Direkt trocken kochen", nl: "Direct van droog koken" },
          { en: "Boil rapidly for 2 hours", es: "Hervir rápidamente por 2 horas", de: "Schnell 2 Stunden kochen", nl: "Snel 2 uur koken" },
          { en: "Microwave for 10 minutes", es: "Microondas por 10 minutos", de: "10 Minuten in der Mikrowelle", nl: "10 minuten in de magnetron" }
        ],
        correct: 0,
        explanation: {
          en: "Soaking rehydrates beans and reduces cooking time. Gentle simmering prevents the skins from bursting and creates evenly cooked, creamy beans.",
          es: "Remojar rehidrata los frijoles y reduce el tiempo de cocción. El hervido suave previene que las pieles revienten y crea frijoles uniformemente cocidos y cremosos.",
          de: "Einweichen rehydratisiert Bohnen und reduziert die Kochzeit. Sanftes Köcheln verhindert das Platzen der Schalen und schafft gleichmäßig gekochte, cremige Bohnen.",
          nl: "Weken herhydrateert bonen en vermindert kooktijd. Zacht sudderen voorkomt dat de schillen barsten en creëert gelijkmatig gekookte, romige bonen."
        }
      },
      {
        question: {
          en: "Which fat is best for high-heat vegetarian cooking?",
          es: "¿Qué grasa es mejor para la cocina vegetariana de alta temperatura?",
          de: "Welches Fett ist am besten für vegetarisches Kochen bei hoher Hitze?",
          nl: "Welk vet is het beste voor hoge-temperatuur vegetarisch koken?"
        },
        options: [
          { en: "Refined oils with high smoke points (avocado, grapeseed)", es: "Aceites refinados con puntos de humo altos (aguacate, semilla de uva)", de: "Raffinierte Öle mit hohen Rauchpunkten (Avocado, Traubenkern)", nl: "Geraffineerde oliën met hoge rookpunten (avocado, druivenpit)" },
          { en: "Extra virgin olive oil", es: "Aceite de oliva extra virgen", de: "Natives Olivenöl extra", nl: "Extra vergine olijfolie" },
          { en: "Butter", es: "Mantequilla", de: "Butter", nl: "Boter" },
          { en: "Coconut oil", es: "Aceite de coco", de: "Kokosöl", nl: "Kokosolie" }
        ],
        correct: 0,
        explanation: {
          en: "Refined oils like avocado oil (520°F smoke point) and grapeseed oil (420°F) can withstand high temperatures without breaking down or producing harmful compounds.",
          es: "Los aceites refinados como el aceite de aguacate (punto de humo 270°C) y el aceite de semilla de uva (215°C) pueden soportar altas temperaturas sin descomponerse o producir compuestos dañinos.",
          de: "Raffinierte Öle wie Avocadoöl (271°C Rauchpunkt) und Traubenkernöl (216°C) können hohe Temperaturen ohne Zerfall oder Produktion schädlicher Verbindungen aushalten.",
          nl: "Geraffineerde oliën zoals avocado olie (271°C rookpunt) en druivenpittenolie (216°C) kunnen hoge temperaturen weerstaan zonder af te breken of schadelijke stoffen te produceren."
        }
      },
      {
        question: {
          en: "What is the ideal technique for cooking pasta al dente?",
          es: "¿Cuál es la técnica ideal para cocinar pasta al dente?",
          de: "Was ist die ideale Technik zum Kochen von Nudeln al dente?",
          nl: "Wat is de ideale techniek voor het koken van pasta al dente?"
        },
        options: [
          { en: "Boil in plenty of salted water, test 1-2 minutes before package time", es: "Hervir en abundante agua salada, probar 1-2 minutos antes del tiempo del paquete", de: "In reichlich Salzwasser kochen, 1-2 Minuten vor Packungszeit testen", nl: "Koken in veel gezouten water, 1-2 minuten voor verpakkingstijd testen" },
          { en: "Cook exactly as package directions say", es: "Cocinar exactamente como dicen las instrucciones del paquete", de: "Genau nach Packungsanweisung kochen", nl: "Precies koken zoals de verpakkingsinstructies zeggen" },
          { en: "Use minimal water to save energy", es: "Usar agua mínima para ahorrar energía", de: "Minimales Wasser verwenden, um Energie zu sparen", nl: "Minimaal water gebruiken om energie te besparen" },
          { en: "Add oil to prevent sticking", es: "Añadir aceite para prevenir que se pegue", de: "Öl hinzufügen, um Anhaften zu verhindern", nl: "Olie toevoegen om plakken te voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Plenty of salted water prevents sticking and ensures even cooking. Testing before the suggested time helps achieve the perfect al dente texture - firm to the bite.",
          es: "Abundante agua salada previene que se pegue y asegura cocción uniforme. Probar antes del tiempo sugerido ayuda a lograr la textura al dente perfecta - firme al morder.",
          de: "Reichlich Salzwasser verhindert Anhaften und gewährleistet gleichmäßiges Kochen. Das Testen vor der vorgeschlagenen Zeit hilft, die perfekte al dente Textur zu erreichen - bissfest.",
          nl: "Veel gezouten water voorkomt plakken en zorgt voor gelijkmatig koken. Testen voor de voorgestelde tijd helpt de perfecte al dente textuur te bereiken - stevig om te bijten."
        }
      },
      {
        question: {
          en: "Which technique produces the fluffiest scrambled eggs?",
          es: "¿Qué técnica produce los huevos revueltos más esponjosos?",
          de: "Welche Technik produziert die fluffigsten Rühreier?",
          nl: "Welke techniek produceert de pluizigste roereieren?"
        },
        options: [
          { en: "Low heat, constant gentle stirring, add cold butter at the end", es: "Fuego bajo, agitación suave constante, añadir mantequilla fría al final", de: "Niedrige Hitze, ständiges sanftes Rühren, kalte Butter am Ende hinzufügen", nl: "Lage hitte, constant zacht roeren, koude boter aan het eind toevoegen" },
          { en: "High heat, rapid stirring", es: "Fuego alto, agitación rápida", de: "Hohe Hitze, schnelles Rühren", nl: "Hoge hitte, snel roeren" },
          { en: "Medium heat, no stirring", es: "Fuego medio, sin agitar", de: "Mittlere Hitze, nicht rühren", nl: "Gemiddelde hitte, niet roeren" },
          { en: "Microwave for 2 minutes", es: "Microondas por 2 minutos", de: "2 Minuten Mikrowelle", nl: "2 minuten magnetron" }
        ],
        correct: 0,
        explanation: {
          en: "Low heat and constant gentle stirring creates small curds for creamy texture. Cold butter at the end stops cooking and adds richness without making eggs greasy.",
          es: "El fuego bajo y la agitación suave constante crea cuajos pequeños para textura cremosa. La mantequilla fría al final detiene la cocción y añade riqueza sin hacer los huevos grasosos.",
          de: "Niedrige Hitze und ständiges sanftes Rühren schafft kleine Klumpen für cremige Textur. Kalte Butter am Ende stoppt das Kochen und fügt Reichhaltigkeit hinzu, ohne die Eier fettig zu machen.",
          nl: "Lage hitte en constant zacht roeren creëert kleine klonters voor romige textuur. Koude boter aan het eind stopt het koken en voegt rijkdom toe zonder de eieren vettig te maken."
        }
      },
      {
        question: {
          en: "What is the key to making a perfect vegetable stir-fry?",
          es: "¿Cuál es la clave para hacer un salteado de verduras perfecto?",
          de: "Was ist der Schlüssel für ein perfektes Gemüse-Stir-Fry?",
          nl: "Wat is de sleutel tot het maken van een perfecte groentenwok?"
        },
        options: [
          { en: "Very high heat, vegetables cut uniformly, cook in batches", es: "Fuego muy alto, verduras cortadas uniformemente, cocinar en tandas", de: "Sehr hohe Hitze, gleichmäßig geschnittenes Gemüse, in Chargen kochen", nl: "Zeer hoge hitte, groenten gelijkmatig gesneden, in batches koken" },
          { en: "Medium heat, all vegetables together", es: "Fuego medio, todas las verduras juntas", de: "Mittlere Hitze, alles Gemüse zusammen", nl: "Gemiddelde hitte, alle groenten samen" },
          { en: "Low heat, long cooking time", es: "Fuego bajo, tiempo de cocción largo", de: "Niedrige Hitze, lange Kochzeit", nl: "Lage hitte, lange kooktijd" },
          { en: "Steam all vegetables first", es: "Cocer al vapor todas las verduras primero", de: "Alle Gemüse zuerst dämpfen", nl: "Alle groenten eerst stomen" }
        ],
        correct: 0,
        explanation: {
          en: "High heat sears vegetables quickly, maintaining texture and color. Uniform cuts ensure even cooking, and cooking in batches prevents overcrowding and steaming.",
          es: "El fuego alto sella las verduras rápidamente, manteniendo textura y color. Los cortes uniformes aseguran cocción pareja, y cocinar en tandas previene el hacinamiento y el vapor.",
          de: "Hohe Hitze brät Gemüse schnell an und erhält Textur und Farbe. Gleichmäßige Schnitte gewährleisten gleichmäßiges Kochen, und das Kochen in Chargen verhindert Überfüllung und Dämpfen.",
          nl: "Hoge hitte braadt groenten snel aan, behoudt textuur en kleur. Gelijkmatige sneden zorgen voor gelijkmatig koken, en koken in batches voorkomt opeenhoping en stomen."
        }
      },
      {
        question: {
          en: "Which method creates the best texture for mashed cauliflower?",
          es: "¿Qué método crea la mejor textura para puré de coliflor?",
          de: "Welche Methode schafft die beste Textur für Blumenkohl-Püree?",
          nl: "Welke methode creëert de beste textuur voor bloemkoolpuree?"
        },
        options: [
          { en: "Steam, then rice or mash while hot, drain excess moisture", es: "Cocer al vapor, luego pasar por el pasapurés o hacer puré caliente, escurrir exceso de humedad", de: "Dämpfen, dann reiben oder stampfen, solange heiß, überschüssige Feuchtigkeit abtropfen", nl: "Stomen, dan rijsten of pureren terwijl heet, overtollig vocht afdruippen" },
          { en: "Boil in water, mash with all liquid", es: "Hervir en agua, hacer puré con todo el líquido", de: "In Wasser kochen, mit aller Flüssigkeit stampfen", nl: "Koken in water, pureren met alle vloeistof" },
          { en: "Roast first, then boil", es: "Asar primero, luego hervir", de: "Zuerst rösten, dann kochen", nl: "Eerst roosteren, dan koken" },
          { en: "Use raw cauliflower", es: "Usar coliflor cruda", de: "Rohen Blumenkohl verwenden", nl: "Rauwe bloemkool gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Steaming prevents waterlogging. Processing while hot and draining excess moisture creates a fluffy, potato-like texture instead of watery mash.",
          es: "Cocer al vapor previene el encharcamiento. Procesar mientras está caliente y escurrir el exceso de humedad crea una textura esponjosa, similar a la papa, en lugar de puré aguado.",
          de: "Dämpfen verhindert Durchnässung. Die Verarbeitung während es heiß ist und das Abtropfen überschüssiger Feuchtigkeit schafft eine fluffige, kartoffelähnliche Textur anstatt wässrigen Brei.",
          nl: "Stomen voorkomt doorweking. Verwerken terwijl heet en overtollig vocht afdruippen creëert een pluizige, aardappelachtige textuur in plaats van waterige puree."
        }
      },
      {
        question: {
          en: "What is the proper way to cook risotto?",
          es: "¿Cuál es la manera adecuada de cocinar risotto?",
          de: "Was ist der richtige Weg, Risotto zu kochen?",
          nl: "Wat is de juiste manier om risotto te koken?"
        },
        options: [
          { en: "Toast rice, add warm broth one ladle at a time, stir frequently", es: "Tostar arroz, añadir caldo caliente una cucharada a la vez, revolver frecuentemente", de: "Reis rösten, warme Brühe eine Kelle nach der anderen hinzufügen, häufig rühren", nl: "Rijst roosteren, warme bouillon één pollepel tegelijk toevoegen, vaak roeren" },
          { en: "Cook like regular rice with all liquid at once", es: "Cocinar como arroz regular con todo el líquido de una vez", de: "Wie normalen Reis mit aller Flüssigkeit auf einmal kochen", nl: "Koken zoals gewone rijst met alle vloeistof ineens" },
          { en: "Boil rice first, then add cold broth", es: "Hervir arroz primero, luego añadir caldo frío", de: "Reis zuerst kochen, dann kalte Brühe hinzufügen", nl: "Rijst eerst koken, dan koude bouillon toevoegen" },
          { en: "Use long-grain rice only", es: "Usar solo arroz de grano largo", de: "Nur langkörnigen Reis verwenden", nl: "Alleen langkorrelrijst gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Toasting rice releases starch gradually. Adding warm broth slowly and stirring releases more starch, creating the signature creamy texture while keeping rice grains distinct.",
          es: "Tostar arroz libera almidón gradualmente. Añadir caldo caliente lentamente y revolver libera más almidón, creando la textura cremosa característica mientras mantiene los granos de arroz distintos.",
          de: "Das Rösten von Reis setzt allmählich Stärke frei. Das langsame Hinzufügen warmer Brühe und Rühren setzt mehr Stärke frei und schafft die charakteristische cremige Textur, während die Reiskörner unterscheidbar bleiben.",
          nl: "Rijst roosteren geeft geleidelijk zetmeel vrij. Warme bouillon langzaam toevoegen en roeren geeft meer zetmeel vrij, creëert de kenmerkende romige textuur terwijl rijstkorrels onderscheidbaar blijven."
        }
      },
      {
        question: {
          en: "Which technique prevents vegetables from becoming mushy when meal prepping?",
          es: "¿Qué técnica previene que las verduras se pongan blandas al preparar comidas?",
          de: "Welche Technik verhindert, dass Gemüse beim Meal-Prep matschig wird?",
          nl: "Welke techniek voorkomt dat groenten zacht worden bij meal prepping?"
        },
        options: [
          { en: "Slightly undercook, store properly, reheat gently", es: "Cocinar ligeramente menos, almacenar apropiadamente, recalentar suavemente", de: "Leicht unterkochen, richtig lagern, sanft aufwärmen", nl: "Iets onderbereiden, goed bewaren, zacht opwarmen" },
          { en: "Fully cook everything ahead", es: "Cocinar todo completamente por adelantado", de: "Alles vollständig im Voraus kochen", nl: "Alles volledig vooruit koken" },
          { en: "Freeze all vegetables", es: "Congelar todas las verduras", de: "Alle Gemüse einfrieren", nl: "Alle groenten invriezen" },
          { en: "Store in water", es: "Almacenar en agua", de: "In Wasser lagern", nl: "Bewaren in water" }
        ],
        correct: 0,
        explanation: {
          en: "Slightly undercooking accounts for additional cooking during reheating. Proper storage maintains texture, and gentle reheating prevents overcooking and mushiness.",
          es: "Cocinar ligeramente menos compensa la cocción adicional durante el recalentamiento. El almacenamiento apropiado mantiene la textura, y el recalentamiento suave previene la sobrecocción y blandura.",
          de: "Leichtes Unterkochen berücksichtigt zusätzliches Kochen beim Aufwärmen. Richtige Lagerung erhält die Textur, und sanftes Aufwärmen verhindert Überkochen und Matschigkeit.",
          nl: "Iets onderbereiden houdt rekening met extra koken tijdens het opwarmen. Goede bewaring behoudt textuur, en zacht opwarmen voorkomt overkoken en zachtheid."
        }
      },
      {
        question: {
          en: "What is the best way to enhance umami flavor in vegetarian dishes?",
          es: "¿Cuál es la mejor manera de realzar el sabor umami en platos vegetarianos?",
          de: "Was ist der beste Weg, Umami-Geschmack in vegetarischen Gerichten zu verstärken?",
          nl: "Wat is de beste manier om umami smaak in vegetarische gerechten te versterken?"
        },
        options: [
          { en: "Use mushrooms, tomato paste, soy sauce, nutritional yeast", es: "Usar hongos, pasta de tomate, salsa de soja, levadura nutricional", de: "Pilze, Tomatenmark, Sojasoße, Nährhefe verwenden", nl: "Paddenstoelen, tomatenpuree, sojasaus, voedingsgist gebruiken" },
          { en: "Add more salt only", es: "Añadir solo más sal", de: "Nur mehr Salz hinzufügen", nl: "Alleen meer zout toevoegen" },
          { en: "Use only sweet ingredients", es: "Usar solo ingredientes dulces", de: "Nur süße Zutaten verwenden", nl: "Alleen zoete ingrediënten gebruiken" },
          { en: "Avoid all seasonings", es: "Evitar todos los condimentos", de: "Alle Gewürze vermeiden", nl: "Alle kruiderij vermijden" }
        ],
        correct: 0,
        explanation: {
          en: "These ingredients naturally contain glutamates that provide umami depth. Mushrooms, aged cheeses, fermented products, and dried tomatoes are excellent umami boosters for vegetarian cooking.",
          es: "Estos ingredientes naturalmente contienen glutamatos que proporcionan profundidad umami. Los hongos, quesos añejos, productos fermentados y tomates secos son excelentes potenciadores umami para la cocina vegetariana.",
          de: "Diese Zutaten enthalten natürlich Glutamate, die Umami-Tiefe bieten. Pilze, gereifte Käse, fermentierte Produkte und getrocknete Tomaten sind ausgezeichnete Umami-Verstärker für vegetarisches Kochen.",
          nl: "Deze ingrediënten bevatten van nature glutamaten die umami diepte geven. Paddenstoelen, gerijpte kazen, gefermenteerde producten en gedroogde tomaten zijn uitstekende umami boosters voor vegetarisch koken."
        }
      },
      {
        question: {
          en: "What is the best cooking method to caramelize onions?",
          es: "¿Cuál es el mejor método de cocción para caramelizar cebollas?",
          de: "Was ist die beste Kochmethode zum Karamellisieren von Zwiebeln?",
          nl: "Wat is de beste kookmethode om uien te karameliseren?"
        },
        options: [
          { en: "Low heat, slow cooking for 30-45 minutes", es: "Fuego bajo, cocción lenta por 30-45 minutos", de: "Niedrige Hitze, langsames Kochen für 30-45 Minuten", nl: "Lage hitte, langzaam koken gedurende 30-45 minuten" },
          { en: "High heat for 5 minutes", es: "Fuego alto por 5 minutos", de: "Hohe Hitze für 5 Minuten", nl: "Hoge hitte gedurende 5 minuten" },
          { en: "Boiling in water", es: "Hervir en agua", de: "In Wasser kochen", nl: "Koken in water" },
          { en: "Microwave on high", es: "Microondas en alto", de: "Mikrowelle auf hoch", nl: "Magnetron op hoog" }
        ],
        correct: 0,
        explanation: {
          en: "Caramelizing onions requires patience and low heat to slowly break down the natural sugars, creating deep, sweet flavors without burning.",
          es: "Caramelizar cebollas requiere paciencia y fuego bajo para descomponer lentamente los azúcares naturales, creando sabores profundos y dulces sin quemarse.",
          de: "Das Karamellisieren von Zwiebeln erfordert Geduld und niedrige Hitze, um die natürlichen Zucker langsam abzubauen und tiefe, süße Aromen zu schaffen, ohne zu verbrennen.",
          nl: "Uien karameliseren vereist geduld en lage hitte om de natuurlijke suikers langzaam af te breken, waarbij diepe, zoete smaken ontstaan zonder verbranden."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  }
  return level4;
})();