// Quiz Level 1: Currencies - Goudstandaard
(function() {
  const level1 = {
    name: {
      en: "Gold Standard - Beginner",
      es: "Patrón Oro - Principiante",
      de: "Goldstandard - Anfänger",
      nl: "Goudstandaard - Beginner"
    },
    questions: [
      {
        question: {
          en: "What is the gold standard?",
          es: "¿Qué es el patrón oro?",
          de: "Was ist der Goldstandard?",
          nl: "Wat is de goudstandaard?"
        },
        options: [
          { en: "A monetary system where currency is backed by gold", es: "Un sistema monetario donde la moneda está respaldada por oro", de: "Ein Währungssystem, bei dem die Währung durch Gold gedeckt ist", nl: "Een monetair systeem waarbij valuta gedekt wordt door goud" },
          { en: "A quality measure for gold purity", es: "Una medida de calidad para la pureza del oro", de: "Ein Qualitätsmaß für die Reinheit von Gold", nl: "Een kwaliteitsmaat voor goudheid" },
          { en: "A trading system for gold commodities", es: "Un sistema de comercio para materias primas de oro", de: "Ein Handelssystem für Goldrohstoffe", nl: "Een handelssysteem voor goudgrondstoffen" },
          { en: "A gold mining regulation", es: "Una regulación de minería de oro", de: "Eine Goldbergbau-Regulierung", nl: "Een goudmijnbouw regulering" }
        ],
        correct: 0,
        explanation: {
          en: "The gold standard is a monetary system in which the standard economic unit of account is based on a fixed quantity of gold. Under this system, currency issued by the government or central bank is convertible into a fixed amount of gold.",
          es: "El patrón oro es un sistema monetario en el que la unidad económica estándar de cuenta se basa en una cantidad fija de oro. Bajo este sistema, la moneda emitida por el gobierno o banco central es convertible en una cantidad fija de oro.",
          de: "Der Goldstandard ist ein Währungssystem, bei dem die standardmäßige wirtschaftliche Rechnungseinheit auf einer festen Menge Gold basiert. Unter diesem System ist die von der Regierung oder Zentralbank ausgegebene Währung in eine feste Menge Gold umwandelbar.",
          nl: "De goudstandaard is een monetair systeem waarbij de standaard economische rekeneenheid gebaseerd is op een vaste hoeveelheid goud. Onder dit systeem is valuta uitgegeven door de regering of centrale bank omwisselbaar voor een vaste hoeveelheid goud."
        }
      },
      {
        question: {
          en: "What does 'backed by gold' mean?",
          es: "¿Qué significa 'respaldado por oro'?",
          de: "Was bedeutet 'durch Gold gedeckt'?",
          nl: "Wat betekent 'gedekt door goud'?"
        },
        options: [
          { en: "Currency can be exchanged for gold", es: "La moneda puede intercambiarse por oro", de: "Währung kann gegen Gold getauscht werden", nl: "Valuta kan worden omgewisseld voor goud" },
          { en: "Currency is made of gold", es: "La moneda está hecha de oro", de: "Währung besteht aus Gold", nl: "Valuta is gemaakt van goud" },
          { en: "Currency is painted gold", es: "La moneda está pintada de oro", de: "Währung ist golden bemalt", nl: "Valuta is goudkleurig geverfd" },
          { en: "Currency comes from gold mines", es: "La moneda proviene de minas de oro", de: "Währung kommt aus Goldminen", nl: "Valuta komt uit goudmijnen" }
        ],
        correct: 0,
        explanation: {
          en: "When currency is 'backed by gold', it means that the government promises to exchange paper money or coins for a specific amount of gold upon request. This backing gave people confidence that their money had real value.",
          es: "Cuando la moneda está 'respaldada por oro', significa que el gobierno promete intercambiar papel moneda o monedas por una cantidad específica de oro bajo demanda. Este respaldo daba a la gente confianza de que su dinero tenía valor real.",
          de: "Wenn Währung 'durch Gold gedeckt' ist, bedeutet das, dass die Regierung verspricht, Papiergeld oder Münzen auf Anfrage gegen eine bestimmte Menge Gold zu tauschen. Diese Deckung gab den Menschen Vertrauen, dass ihr Geld echten Wert hatte.",
          nl: "Wanneer valuta 'gedekt door goud' is, betekent het dat de regering belooft om papiergeld of munten om te wisselen voor een specifieke hoeveelheid goud op verzoek. Deze dekking gaf mensen vertrouwen dat hun geld echte waarde had."
        }
      },
      {
        question: {
          en: "In simple terms, what is currency convertibility?",
          es: "En términos simples, ¿qué es la convertibilidad de moneda?",
          de: "Was ist Währungskonvertibilität in einfachen Worten?",
          nl: "Wat is valutaconvertibiliteit in eenvoudige bewoordingen?"
        },
        options: [
          { en: "The ability to change paper money into gold", es: "La capacidad de cambiar papel moneda en oro", de: "Die Fähigkeit, Papiergeld in Gold zu verwandeln", nl: "Het vermogen om papiergeld om te zetten in goud" },
          { en: "The ability to convert gold into electricity", es: "La capacidad de convertir oro en electricidad", de: "Die Fähigkeit, Gold in Elektrizität umzuwandeln", nl: "Het vermogen om goud om te zetten in elektriciteit" },
          { en: "The process of melting gold coins", es: "El proceso de derretir monedas de oro", de: "Der Prozess des Schmelzens von Goldmünzen", nl: "Het proces van het smelten van gouden munten" },
          { en: "The ability to transport currency", es: "La capacidad de transportar moneda", de: "Die Fähigkeit, Währung zu transportieren", nl: "Het vermogen om valuta te vervoeren" }
        ],
        correct: 0,
        explanation: {
          en: "Currency convertibility under the gold standard means that anyone holding paper money or bank notes could go to a bank or government office and exchange them for actual gold. This was the key feature that made people trust paper money.",
          es: "La convertibilidad de moneda bajo el patrón oro significa que cualquiera que poseyera papel moneda o billetes bancarios podía ir a un banco u oficina gubernamental e intercambiarlos por oro real. Esta era la característica clave que hacía que la gente confiara en el papel moneda.",
          de: "Währungskonvertibilität unter dem Goldstandard bedeutet, dass jeder, der Papiergeld oder Banknoten besaß, zu einer Bank oder einem Regierungsbüro gehen und sie gegen echtes Gold eintauschen konnte. Dies war das Schlüsselmerkmal, das die Menschen dazu brachte, Papiergeld zu vertrauen.",
          nl: "Valutaconvertibiliteit onder de goudstandaard betekent dat iedereen die papiergeld of bankbiljetten bezat naar een bank of overheidskantoor kon gaan en deze kon omwisselen voor echt goud. Dit was het belangrijkste kenmerk dat ervoor zorgde dat mensen papiergeld vertrouwden."
        }
      },
      {
        question: {
          en: "Why did people trust paper money under the gold standard?",
          es: "¿Por qué la gente confiaba en el papel moneda bajo el patrón oro?",
          de: "Warum vertrauten die Menschen unter dem Goldstandard dem Papiergeld?",
          nl: "Waarom vertrouwden mensen papiergeld onder de goudstandaard?"
        },
        options: [
          { en: "Because it could be exchanged for gold", es: "Porque podía intercambiarse por oro", de: "Weil es gegen Gold getauscht werden konnte", nl: "Omdat het omgewisseld kon worden voor goud" },
          { en: "Because it was colorful", es: "Porque era colorido", de: "Weil es bunt war", nl: "Omdat het kleurrijk was" },
          { en: "Because it was easy to carry", es: "Porque era fácil de llevar", de: "Weil es leicht zu tragen war", nl: "Omdat het makkelijk te dragen was" },
          { en: "Because governments said so", es: "Porque los gobiernos lo dijeron", de: "Weil die Regierungen es sagten", nl: "Omdat regeringen het zeiden" }
        ],
        correct: 0,
        explanation: {
          en: "People trusted paper money under the gold standard because they knew it could be exchanged for gold at any time. This gold backing gave the paper money real, tangible value that people could understand and trust.",
          es: "La gente confiaba en el papel moneda bajo el patrón oro porque sabían que podía intercambiarse por oro en cualquier momento. Este respaldo de oro daba al papel moneda un valor real y tangible que la gente podía entender y confiar.",
          de: "Die Menschen vertrauten unter dem Goldstandard dem Papiergeld, weil sie wussten, dass es jederzeit gegen Gold getauscht werden konnte. Diese Golddeckung gab dem Papiergeld einen echten, greifbaren Wert, den die Menschen verstehen und dem sie vertrauen konnten.",
          nl: "Mensen vertrouwden papiergeld onder de goudstandaard omdat ze wisten dat het op elk moment omgewisseld kon worden voor goud. Deze gouddekking gaf het papiergeld echte, tastbare waarde die mensen konden begrijpen en vertrouwen."
        }
      },
      {
        question: {
          en: "What is the main characteristic of gold as money?",
          es: "¿Cuál es la característica principal del oro como dinero?",
          de: "Was ist das Hauptmerkmal von Gold als Geld?",
          nl: "Wat is het hoofdkenmerk van goud als geld?"
        },
        options: [
          { en: "It has intrinsic value", es: "Tiene valor intrínseco", de: "Es hat einen intrinsischen Wert", nl: "Het heeft intrinsieke waarde" },
          { en: "It is very light", es: "Es muy ligero", de: "Es ist sehr leicht", nl: "Het is zeer licht" },
          { en: "It changes color", es: "Cambia de color", de: "Es ändert die Farbe", nl: "Het verandert van kleur" },
          { en: "It grows over time", es: "Crece con el tiempo", de: "Es wächst mit der Zeit", nl: "Het groeit in de tijd" }
        ],
        correct: 0,
        explanation: {
          en: "Gold has intrinsic value, meaning it is valuable in itself due to its physical properties, rarity, and usefulness. Unlike paper money, gold's value doesn't depend on government promises - it has been valued by humans for thousands of years.",
          es: "El oro tiene valor intrínseco, lo que significa que es valioso en sí mismo debido a sus propiedades físicas, rareza y utilidad. A diferencia del papel moneda, el valor del oro no depende de promesas gubernamentales - ha sido valorado por los humanos durante miles de años.",
          de: "Gold hat einen intrinsischen Wert, das bedeutet, es ist wertvoll an sich aufgrund seiner physischen Eigenschaften, Seltenheit und Nützlichkeit. Im Gegensatz zu Papiergeld hängt der Wert von Gold nicht von Regierungsversprechen ab - es wird seit Tausenden von Jahren von Menschen geschätzt.",
          nl: "Goud heeft intrinsieke waarde, wat betekent dat het waardevol is op zichzelf vanwege zijn fysieke eigenschappen, zeldzaamheid en bruikbaarheid. In tegenstelling tot papiergeld hangt de waarde van goud niet af van regeringsbeloften - het wordt al duizenden jaren door mensen gewaardeerd."
        }
      },
      {
        question: {
          en: "What happens when you have too much paper money without gold backing?",
          es: "¿Qué pasa cuando tienes demasiado papel moneda sin respaldo de oro?",
          de: "Was passiert, wenn man zu viel Papiergeld ohne Golddeckung hat?",
          nl: "Wat gebeurt er als je te veel papiergeld hebt zonder gouddekking?"
        },
        options: [
          { en: "Money becomes worth less (inflation)", es: "El dinero vale menos (inflación)", de: "Geld wird weniger wert (Inflation)", nl: "Geld wordt minder waard (inflatie)" },
          { en: "Money becomes worth more", es: "El dinero vale más", de: "Geld wird mehr wert", nl: "Geld wordt meer waard" },
          { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" },
          { en: "Money turns into gold", es: "El dinero se convierte en oro", de: "Geld wird zu Gold", nl: "Geld verandert in goud" }
        ],
        correct: 0,
        explanation: {
          en: "When there is too much paper money without gold backing, inflation occurs - money becomes worth less and prices go up. This is because there is more money chasing the same amount of goods, making each unit of money less valuable.",
          es: "Cuando hay demasiado papel moneda sin respaldo de oro, ocurre inflación - el dinero vale menos y los precios suben. Esto es porque hay más dinero persiguiendo la misma cantidad de bienes, haciendo que cada unidad de dinero sea menos valiosa.",
          de: "Wenn es zu viel Papiergeld ohne Golddeckung gibt, tritt Inflation auf - Geld wird weniger wert und die Preise steigen. Dies liegt daran, dass mehr Geld die gleiche Menge an Gütern verfolgt, wodurch jede Geldeinheit weniger wertvoll wird.",
          nl: "Wanneer er te veel papiergeld is zonder gouddekking, ontstaat er inflatie - geld wordt minder waard en prijzen stijgen. Dit komt omdat er meer geld achter dezelfde hoeveelheid goederen aan jaagt, waardoor elke geldeenheid minder waardevol wordt."
        }
      },
      {
        question: {
          en: "Which country was the first to adopt the gold standard?",
          es: "¿Qué país fue el primero en adoptar el patrón oro?",
          de: "Welches Land führte zuerst den Goldstandard ein?",
          nl: "Welk land was het eerste dat de goudstandaard invoerde?"
        },
        options: [
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },
          { en: "Great Britain", es: "Gran Bretaña", de: "Großbritannien", nl: "Groot-Brittannië" },
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "Germany", es: "Alemania", de: "Deutschland", nl: "Duitsland" }
        ],
        correct: 1,
        explanation: {
          en: "Great Britain was the first country to officially adopt the gold standard in 1816. Other countries followed Britain's example because it was the world's leading economic power at the time.",
          es: "Gran Bretaña fue el primer país en adoptar oficialmente el patrón oro en 1816. Otros países siguieron el ejemplo de Gran Bretaña porque era la potencia económica líder del mundo en ese momento.",
          de: "Großbritannien war das erste Land, das 1816 offiziell den Goldstandard einführte. Andere Länder folgten Großbritanniens Beispiel, weil es zu dieser Zeit die führende Wirtschaftsmacht der Welt war.",
          nl: "Groot-Brittannië was het eerste land dat officieel de goudstandaard invoerde in 1816. Andere landen volgden het voorbeeld van Groot-Brittannië omdat het de leidende economische macht van de wereld was op dat moment."
        }
      },
      {
        question: {
          en: "What is a gold coin?",
          es: "¿Qué es una moneda de oro?",
          de: "Was ist eine Goldmünze?",
          nl: "Wat is een gouden munt?"
        },
        options: [
          { en: "A coin made partly or entirely of gold", es: "Una moneda hecha parcial o completamente de oro", de: "Eine Münze, die teilweise oder vollständig aus Gold besteht", nl: "Een munt die gedeeltelijk of geheel van goud is gemaakt" },
          { en: "A coin painted with gold color", es: "Una moneda pintada con color oro", de: "Eine Münze, die mit goldener Farbe bemalt ist", nl: "Een munt geverfd met goudkleur" },
          { en: "A coin that represents gold", es: "Una moneda que representa oro", de: "Eine Münze, die Gold repräsentiert", nl: "Een munt die goud vertegenwoordigt" },
          { en: "A coin found in gold mines", es: "Una moneda encontrada en minas de oro", de: "Eine Münze, die in Goldminen gefunden wird", nl: "Een munt gevonden in goudmijnen" }
        ],
        correct: 0,
        explanation: {
          en: "A gold coin is a coin made partly or entirely of gold. These coins had value both as money and as precious metal. Under the gold standard, gold coins circulated alongside paper money that could be exchanged for gold.",
          es: "Una moneda de oro es una moneda hecha parcial o completamente de oro. Estas monedas tenían valor tanto como dinero como metal precioso. Bajo el patrón oro, las monedas de oro circulaban junto con el papel moneda que podía intercambiarse por oro.",
          de: "Eine Goldmünze ist eine Münze, die teilweise oder vollständig aus Gold besteht. Diese Münzen hatten sowohl als Geld als auch als Edelmetall Wert. Unter dem Goldstandard zirkulierten Goldmünzen neben Papiergeld, das gegen Gold getauscht werden konnte.",
          nl: "Een gouden munt is een munt die gedeeltelijk of geheel van goud is gemaakt. Deze munten hadden waarde zowel als geld als als edel metaal. Onder de goudstandaard circuleerden gouden munten naast papiergeld dat omgewisseld kon worden voor goud."
        }
      },
      {
        question: {
          en: "Why was gold chosen as the basis for money?",
          es: "¿Por qué se eligió el oro como base para el dinero?",
          de: "Warum wurde Gold als Grundlage für Geld gewählt?",
          nl: "Waarom werd goud gekozen als basis voor geld?"
        },
        options: [
          { en: "It is rare, durable, and doesn't rust", es: "Es raro, duradero y no se oxida", de: "Es ist selten, haltbar und rostet nicht", nl: "Het is zeldzaam, duurzaam en roest niet" },
          { en: "It is very common", es: "Es muy común", de: "Es ist sehr häufig", nl: "Het is zeer gewoon" },
          { en: "It is easy to produce", es: "Es fácil de producir", de: "Es ist einfach herzustellen", nl: "Het is makkelijk te produceren" },
          { en: "It changes its properties", es: "Cambia sus propiedades", de: "Es ändert seine Eigenschaften", nl: "Het verandert zijn eigenschappen" }
        ],
        correct: 0,
        explanation: {
          en: "Gold was chosen as the basis for money because it is rare (making it valuable), durable (it lasts forever), doesn't rust or corrode, and can be divided into smaller pieces. These properties made it ideal for use as money throughout history.",
          es: "El oro fue elegido como base para el dinero porque es raro (haciéndolo valioso), duradero (dura para siempre), no se oxida ni corroe, y puede dividirse en piezas más pequeñas. Estas propiedades lo hicieron ideal para usar como dinero a lo largo de la historia.",
          de: "Gold wurde als Grundlage für Geld gewählt, weil es selten ist (was es wertvoll macht), haltbar (es hält ewig), nicht rostet oder korrodiert und in kleinere Stücke geteilt werden kann. Diese Eigenschaften machten es ideal für die Verwendung als Geld in der Geschichte.",
          nl: "Goud werd gekozen als basis voor geld omdat het zeldzaam is (waardoor het waardevol is), duurzaam (het gaat eeuwig mee), niet roest of corrodeert, en in kleinere stukken verdeeld kan worden. Deze eigenschappen maakten het ideaal voor gebruik als geld door de geschiedenis heen."
        }
      },
      {
        question: {
          en: "What does 'stable currency' mean?",
          es: "¿Qué significa 'moneda estable'?",
          de: "Was bedeutet 'stabile Währung'?",
          nl: "Wat betekent 'stabiele valuta'?"
        },
        options: [
          { en: "Currency that keeps its value over time", es: "Moneda que mantiene su valor a lo largo del tiempo", de: "Währung, die ihren Wert über die Zeit behält", nl: "Valuta die zijn waarde behoudt in de tijd" },
          { en: "Currency that is heavy", es: "Moneda que es pesada", de: "Währung, die schwer ist", nl: "Valuta die zwaar is" },
          { en: "Currency that doesn't move", es: "Moneda que no se mueve", de: "Währung, die sich nicht bewegt", nl: "Valuta die niet beweegt" },
          { en: "Currency that is balanced", es: "Moneda que está equilibrada", de: "Währung, die ausgewogen ist", nl: "Valuta die gebalanceerd is" }
        ],
        correct: 0,
        explanation: {
          en: "A stable currency is one that keeps its value over time, meaning that prices don't change dramatically and people can trust that their money will buy roughly the same amount of goods tomorrow as it does today.",
          es: "Una moneda estable es aquella que mantiene su valor a lo largo del tiempo, lo que significa que los precios no cambian dramáticamente y la gente puede confiar en que su dinero comprará aproximadamente la misma cantidad de bienes mañana que hoy.",
          de: "Eine stabile Währung ist eine, die ihren Wert über die Zeit behält, was bedeutet, dass sich die Preise nicht dramatisch ändern und die Menschen darauf vertrauen können, dass ihr Geld morgen ungefähr die gleiche Menge an Gütern kaufen wird wie heute.",
          nl: "Een stabiele valuta is er een die zijn waarde behoudt in de tijd, wat betekent dat prijzen niet dramatisch veranderen en mensen erop kunnen vertrouwen dat hun geld morgen ongeveer dezelfde hoeveelheid goederen zal kopen als vandaag."
        }
      },
      {
        question: {
          en: "How did the gold standard help international trade?",
          es: "¿Cómo ayudó el patrón oro al comercio internacional?",
          de: "Wie half der Goldstandard dem internationalen Handel?",
          nl: "Hoe hielp de goudstandaard de internationale handel?"
        },
        options: [
          { en: "It made exchange rates predictable", es: "Hizo que los tipos de cambio fueran predecibles", de: "Es machte Wechselkurse vorhersagbar", nl: "Het maakte wisselkoersen voorspelbaar" },
          { en: "It made gold cheaper", es: "Hizo que el oro fuera más barato", de: "Es machte Gold billiger", nl: "Het maakte goud goedkoper" },
          { en: "It reduced the need for shipping", es: "Redujo la necesidad de envío", de: "Es reduzierte den Bedarf an Versand", nl: "Het verminderde de behoefte aan verzending" },
          { en: "It eliminated all taxes", es: "Eliminó todos los impuestos", de: "Es beseitigte alle Steuern", nl: "Het elimineerde alle belastingen" }
        ],
        correct: 0,
        explanation: {
          en: "The gold standard helped international trade by making exchange rates predictable and stable. Since all major currencies were tied to gold, traders knew exactly how much one currency was worth in terms of another, making international business planning much easier.",
          es: "El patrón oro ayudó al comercio internacional haciendo que los tipos de cambio fueran predecibles y estables. Dado que todas las principales monedas estaban vinculadas al oro, los comerciantes sabían exactamente cuánto valía una moneda en términos de otra, haciendo que la planificación empresarial internacional fuera mucho más fácil.",
          de: "Der Goldstandard half dem internationalen Handel, indem er Wechselkurse vorhersagbar und stabil machte. Da alle großen Währungen an Gold gebunden waren, wussten Händler genau, wie viel eine Währung in Bezug auf eine andere wert war, was die internationale Geschäftsplanung viel einfacher machte.",
          nl: "De goudstandaard hielp de internationale handel door wisselkoersen voorspelbaar en stabiel te maken. Omdat alle grote valuta's gekoppeld waren aan goud, wisten handelaren precies hoeveel de ene valuta waard was in termen van een andere, wat internationale bedrijfsplanning veel gemakkelijker maakte."
        }
      },
      {
        question: {
          en: "What is meant by 'fixed exchange rates'?",
          es: "¿Qué se entiende por 'tipos de cambio fijos'?",
          de: "Was ist mit 'festen Wechselkursen' gemeint?",
          nl: "Wat wordt bedoeld met 'vaste wisselkoersen'?"
        },
        options: [
          { en: "Exchange rates that don't change often", es: "Tipos de cambio que no cambian a menudo", de: "Wechselkurse, die sich nicht oft ändern", nl: "Wisselkoersen die niet vaak veranderen" },
          { en: "Exchange rates that are broken", es: "Tipos de cambio que están rotos", de: "Wechselkurse, die kaputt sind", nl: "Wisselkoersen die kapot zijn" },
          { en: "Exchange rates that are repaired", es: "Tipos de cambio que están reparados", de: "Wechselkurse, die repariert sind", nl: "Wisselkoersen die gerepareerd zijn" },
          { en: "Exchange rates that are permanent", es: "Tipos de cambio que son permanentes", de: "Wechselkurse, die dauerhaft sind", nl: "Wisselkoersen die permanent zijn" }
        ],
        correct: 0,
        explanation: {
          en: "Fixed exchange rates mean that the value of one currency compared to another doesn't change often or stays the same for long periods. Under the gold standard, exchange rates were fixed because all currencies were tied to gold at set rates.",
          es: "Los tipos de cambio fijos significan que el valor de una moneda comparado con otra no cambia a menudo o permanece igual por largos períodos. Bajo el patrón oro, los tipos de cambio eran fijos porque todas las monedas estaban vinculadas al oro a tasas establecidas.",
          de: "Feste Wechselkurse bedeuten, dass sich der Wert einer Währung im Vergleich zu einer anderen nicht oft ändert oder für lange Zeit gleich bleibt. Unter dem Goldstandard waren die Wechselkurse fest, weil alle Währungen zu festgelegten Kursen an Gold gebunden waren.",
          nl: "Vaste wisselkoersen betekenen dat de waarde van de ene valuta vergeleken met een andere niet vaak verandert of hetzelfde blijft voor lange perioden. Onder de goudstandaard waren wisselkoersen vast omdat alle valuta's gekoppeld waren aan goud tegen vastgestelde koersen."
        }
      },
      {
        question: {
          en: "What happened during World War I to the gold standard?",
          es: "¿Qué pasó durante la Primera Guerra Mundial con el patrón oro?",
          de: "Was geschah während des Ersten Weltkriegs mit dem Goldstandard?",
          nl: "Wat gebeurde er tijdens de Eerste Wereldoorlog met de goudstandaard?"
        },
        options: [
          { en: "Most countries stopped using it temporarily", es: "La mayoría de países dejaron de usarlo temporalmente", de: "Die meisten Länder hörten vorübergehend auf, ihn zu verwenden", nl: "De meeste landen stopten er tijdelijk mee" },
          { en: "It became stronger", es: "Se volvió más fuerte", de: "Es wurde stärker", nl: "Het werd sterker" },
          { en: "Only one country used it", es: "Solo un país lo usó", de: "Nur ein Land verwendete es", nl: "Slechts één land gebruikte het" },
          { en: "Nothing changed", es: "Nada cambió", de: "Nichts änderte sich", nl: "Er veranderde niets" }
        ],
        correct: 0,
        explanation: {
          en: "During World War I, most countries temporarily stopped using the gold standard because they needed to print more money to pay for the war. The gold standard limited how much money they could print, so they had to abandon it to finance their military efforts.",
          es: "Durante la Primera Guerra Mundial, la mayoría de países dejaron temporalmente de usar el patrón oro porque necesitaban imprimir más dinero para pagar la guerra. El patrón oro limitaba cuánto dinero podían imprimir, así que tuvieron que abandonarlo para financiar sus esfuerzos militares.",
          de: "Während des Ersten Weltkriegs hörten die meisten Länder vorübergehend auf, den Goldstandard zu verwenden, weil sie mehr Geld drucken mussten, um den Krieg zu bezahlen. Der Goldstandard begrenzte, wie viel Geld sie drucken konnten, also mussten sie ihn aufgeben, um ihre militärischen Anstrengungen zu finanzieren.",
          nl: "Tijdens de Eerste Wereldoorlog stopten de meeste landen tijdelijk met het gebruik van de goudstandaard omdat ze meer geld moesten drukken om de oorlog te betalen. De goudstandaard beperkte hoeveel geld ze konden drukken, dus moesten ze het opgeven om hun militaire inspanningen te financieren."
        }
      },
      {
        question: {
          en: "Why can't governments print unlimited money under the gold standard?",
          es: "¿Por qué los gobiernos no pueden imprimir dinero ilimitado bajo el patrón oro?",
          de: "Warum können Regierungen unter dem Goldstandard nicht unbegrenzt Geld drucken?",
          nl: "Waarom kunnen regeringen niet onbeperkt geld drukken onder de goudstandaard?"
        },
        options: [
          { en: "They need enough gold to back the money", es: "Necesitan suficiente oro para respaldar el dinero", de: "Sie brauchen genug Gold, um das Geld zu decken", nl: "Ze hebben genoeg goud nodig om het geld te dekken" },
          { en: "Printing machines are expensive", es: "Las máquinas de impresión son caras", de: "Druckmaschinen sind teuer", nl: "Drukmachines zijn duur" },
          { en: "Paper is limited", es: "El papel es limitado", de: "Papier ist begrenzt", nl: "Papier is beperkt" },
          { en: "It's against the law", es: "Es contra la ley", de: "Es ist gegen das Gesetz", nl: "Het is tegen de wet" }
        ],
        correct: 0,
        explanation: {
          en: "Under the gold standard, governments can't print unlimited money because they need to have enough gold to back every dollar, pound, or other currency unit they create. If they print too much money without gold backing, people won't trust it and will demand gold instead.",
          es: "Bajo el patrón oro, los gobiernos no pueden imprimir dinero ilimitado porque necesitan tener suficiente oro para respaldar cada dólar, libra u otra unidad monetaria que crean. Si imprimen demasiado dinero sin respaldo de oro, la gente no confiará en él y exigirá oro en su lugar.",
          de: "Unter dem Goldstandard können Regierungen nicht unbegrenzt Geld drucken, weil sie genug Gold haben müssen, um jeden Dollar, jedes Pfund oder jede andere Währungseinheit zu decken, die sie schaffen. Wenn sie zu viel Geld ohne Golddeckung drucken, werden die Menschen ihm nicht vertrauen und stattdessen Gold verlangen.",
          nl: "Onder de goudstandaard kunnen regeringen niet onbeperkt geld drukken omdat ze genoeg goud moeten hebben om elke dollar, pond of andere valuta-eenheid te dekken die ze creëren. Als ze te veel geld drukken zonder gouddekking, zullen mensen het niet vertrouwen en in plaats daarvan goud eisen."
        }
      },
      {
        question: {
          en: "What is the main benefit of the gold standard for ordinary people?",
          es: "¿Cuál es el principal beneficio del patrón oro para la gente común?",
          de: "Was ist der Hauptvorteil des Goldstandards für gewöhnliche Menschen?",
          nl: "Wat is het hoofdvoordeel van de goudstandaard voor gewone mensen?"
        },
        options: [
          { en: "Their money keeps its value", es: "Su dinero mantiene su valor", de: "Ihr Geld behält seinen Wert", nl: "Hun geld behoudt zijn waarde" },
          { en: "They get free gold", es: "Obtienen oro gratis", de: "Sie bekommen kostenloses Gold", nl: "Ze krijgen gratis goud" },
          { en: "They can mine gold", es: "Pueden extraer oro", de: "Sie können Gold abbauen", nl: "Ze kunnen goud mijnen" },
          { en: "They pay no taxes", es: "No pagan impuestos", de: "Sie zahlen keine Steuern", nl: "Ze betalen geen belastingen" }
        ],
        correct: 0,
        explanation: {
          en: "The main benefit of the gold standard for ordinary people is that their money keeps its value over time. This means that their savings don't lose purchasing power due to inflation, and they can plan for the future knowing their money will still be worth something.",
          es: "El principal beneficio del patrón oro para la gente común es que su dinero mantiene su valor a lo largo del tiempo. Esto significa que sus ahorros no pierden poder adquisitivo debido a la inflación, y pueden planificar para el futuro sabiendo que su dinero todavía valdrá algo.",
          de: "Der Hauptvorteil des Goldstandards für gewöhnliche Menschen ist, dass ihr Geld seinen Wert über die Zeit behält. Das bedeutet, dass ihre Ersparnisse nicht durch Inflation an Kaufkraft verlieren, und sie können für die Zukunft planen, da sie wissen, dass ihr Geld noch etwas wert sein wird.",
          nl: "Het hoofdvoordeel van de goudstandaard voor gewone mensen is dat hun geld zijn waarde behoudt in de tijd. Dit betekent dat hun spaargeld geen koopkracht verliest door inflatie, en ze kunnen plannen voor de toekomst wetende dat hun geld nog steeds iets waard zal zijn."
        }
      },
      {
        question: {
          en: "What makes gold different from paper money?",
          es: "¿Qué hace que el oro sea diferente del papel moneda?",
          de: "Was macht Gold anders als Papiergeld?",
          nl: "Wat maakt goud anders dan papiergeld?"
        },
        options: [
          { en: "Gold has value even without government backing", es: "El oro tiene valor incluso sin respaldo gubernamental", de: "Gold hat Wert auch ohne Regierungsunterstützung", nl: "Goud heeft waarde zelfs zonder overheidssteun" },
          { en: "Gold is easier to carry", es: "El oro es más fácil de llevar", de: "Gold ist einfacher zu tragen", nl: "Goud is makkelijker te dragen" },
          { en: "Gold can be printed", es: "El oro puede imprimirse", de: "Gold kann gedruckt werden", nl: "Goud kan gedrukt worden" },
          { en: "Gold is always the same color", es: "El oro siempre es del mismo color", de: "Gold ist immer die gleiche Farbe", nl: "Goud is altijd dezelfde kleur" }
        ],
        correct: 0,
        explanation: {
          en: "Gold has value even without government backing because it is a precious metal that people have valued for thousands of years. Paper money only has value because the government says it does and people trust that promise. Gold's value comes from itself, not from promises.",
          es: "El oro tiene valor incluso sin respaldo gubernamental porque es un metal precioso que la gente ha valorado durante miles de años. El papel moneda solo tiene valor porque el gobierno dice que lo tiene y la gente confía en esa promesa. El valor del oro viene de sí mismo, no de promesas.",
          de: "Gold hat Wert auch ohne Regierungsunterstützung, weil es ein Edelmetall ist, das Menschen seit Tausenden von Jahren schätzen. Papiergeld hat nur Wert, weil die Regierung sagt, dass es das hat, und die Menschen diesem Versprechen vertrauen. Golds Wert kommt von sich selbst, nicht von Versprechen.",
          nl: "Goud heeft waarde zelfs zonder overheidssteun omdat het een edel metaal is dat mensen al duizenden jaren waarderen. Papiergeld heeft alleen waarde omdat de regering zegt dat het dat heeft en mensen die belofte vertrouwen. De waarde van goud komt van zichzelf, niet van beloften."
        }
      },
      {
        question: {
          en: "Why did the gold standard period end?",
          es: "¿Por qué terminó el período del patrón oro?",
          de: "Warum endete die Zeit des Goldstandards?",
          nl: "Waarom eindigde de goudstandaard periode?"
        },
        options: [
          { en: "Governments wanted more control over money", es: "Los gobiernos querían más control sobre el dinero", de: "Regierungen wollten mehr Kontrolle über Geld", nl: "Regeringen wilden meer controle over geld" },
          { en: "Gold became too heavy", es: "El oro se volvió demasiado pesado", de: "Gold wurde zu schwer", nl: "Goud werd te zwaar" },
          { en: "People stopped liking gold", es: "A la gente dejó de gustarle el oro", de: "Menschen mochten Gold nicht mehr", nl: "Mensen hielden niet meer van goud" },
          { en: "Gold ran out completely", es: "El oro se agotó completamente", de: "Gold ging völlig aus", nl: "Goud raakte volledig op" }
        ],
        correct: 0,
        explanation: {
          en: "The gold standard period ended because governments wanted more control over money to respond to economic problems like recessions and unemployment. The gold standard limited their ability to print money when needed, so they chose to abandon it for more flexible monetary policies.",
          es: "El período del patrón oro terminó porque los gobiernos querían más control sobre el dinero para responder a problemas económicos como recesiones y desempleo. El patrón oro limitaba su capacidad de imprimir dinero cuando era necesario, así que eligieron abandonarlo por políticas monetarias más flexibles.",
          de: "Die Zeit des Goldstandards endete, weil Regierungen mehr Kontrolle über Geld wollten, um auf wirtschaftliche Probleme wie Rezessionen und Arbeitslosigkeit zu reagieren. Der Goldstandard begrenzte ihre Fähigkeit, Geld zu drucken, wenn es nötig war, also entschieden sie sich, ihn für flexiblere Geldpolitiken aufzugeben.",
          nl: "De goudstandaard periode eindigde omdat regeringen meer controle over geld wilden om te reageren op economische problemen zoals recessies en werkloosheid. De goudstandaard beperkte hun vermogen om geld te drukken wanneer nodig, dus kozen ze ervoor om het op te geven voor flexibeler monetair beleid."
        }
      },
      {
        question: {
          en: "In simple terms, what was good about the gold standard?",
          es: "En términos simples, ¿qué era bueno sobre el patrón oro?",
          de: "Was war in einfachen Worten gut am Goldstandard?",
          nl: "Wat was er in eenvoudige bewoordingen goed aan de goudstandaard?"
        },
        options: [
          { en: "It kept money stable and trustworthy", es: "Mantuvo el dinero estable y confiable", de: "Es hielt Geld stabil und vertrauenswürdig", nl: "Het hield geld stabiel en betrouwbaar" },
          { en: "It made everyone rich", es: "Hizo que todos fueran ricos", de: "Es machte alle reich", nl: "Het maakte iedereen rijk" },
          { en: "It eliminated all problems", es: "Eliminó todos los problemas", de: "Es beseitigte alle Probleme", nl: "Het elimineerde alle problemen" },
          { en: "It made gold free", es: "Hizo que el oro fuera gratis", de: "Es machte Gold kostenlos", nl: "Het maakte goud gratis" }
        ],
        correct: 0,
        explanation: {
          en: "The good thing about the gold standard was that it kept money stable and trustworthy. People knew their money was backed by real gold, so they trusted it and prices didn't change wildly. This made it easier to save money and plan for the future.",
          es: "Lo bueno del patrón oro era que mantenía el dinero estable y confiable. La gente sabía que su dinero estaba respaldado por oro real, así que confiaban en él y los precios no cambiaban salvajemente. Esto hacía más fácil ahorrar dinero y planificar para el futuro.",
          de: "Das Gute am Goldstandard war, dass er Geld stabil und vertrauenswürdig hielt. Die Menschen wussten, dass ihr Geld durch echtes Gold gedeckt war, also vertrauten sie ihm und die Preise änderten sich nicht wild. Dies machte es einfacher, Geld zu sparen und für die Zukunft zu planen.",
          nl: "Het goede van de goudstandaard was dat het geld stabiel en betrouwbaar hield. Mensen wisten dat hun geld gedekt was door echt goud, dus vertrouwden ze het en veranderden prijzen niet wild. Dit maakte het gemakkelijker om geld te sparen en te plannen voor de toekomst."
        }
      },
      {
        question: {
          en: "What was the basic promise of the gold standard?",
          es: "¿Cuál era la promesa básica del patrón oro?",
          de: "Was war das grundlegende Versprechen des Goldstandards?",
          nl: "Wat was de basisbelofte van de goudstandaard?"
        },
        options: [
          { en: "Government promises to exchange paper money for gold", es: "El gobierno promete intercambiar papel moneda por oro", de: "Die Regierung verspricht, Papiergeld gegen Gold zu tauschen", nl: "De regering belooft papiergeld om te wisselen voor goud" },
          { en: "Government promises to give everyone gold", es: "El gobierno promete dar oro a todos", de: "Die Regierung verspricht, jedem Gold zu geben", nl: "De regering belooft iedereen goud te geven" },
          { en: "Government promises to make gold cheaper", es: "El gobierno promete hacer el oro más barato", de: "Die Regierung verspricht, Gold billiger zu machen", nl: "De regering belooft goud goedkoper te maken" },
          { en: "Government promises to find more gold", es: "El gobierno promete encontrar más oro", de: "Die Regierung verspricht, mehr Gold zu finden", nl: "De regering belooft meer goud te vinden" }
        ],
        correct: 0,
        explanation: {
          en: "The basic promise of the gold standard was that the government would exchange paper money for a fixed amount of gold whenever someone requested it. This promise gave people confidence that their paper money had real value.",
          es: "La promesa básica del patrón oro era que el gobierno intercambiaría papel moneda por una cantidad fija de oro cada vez que alguien lo solicitara. Esta promesa daba a la gente confianza de que su papel moneda tenía valor real.",
          de: "Das grundlegende Versprechen des Goldstandards war, dass die Regierung Papiergeld gegen eine feste Menge Gold tauschen würde, wann immer jemand es verlangte. Dieses Versprechen gab den Menschen Vertrauen, dass ihr Papiergeld echten Wert hatte.",
          nl: "De basisbelofte van de goudstandaard was dat de regering papiergeld zou omwisselen voor een vaste hoeveelheid goud wanneer iemand erom vroeg. Deze belofte gaf mensen vertrouwen dat hun papiergeld echte waarde had."
        }
      },
      {
        question: {
          en: "What made gold a good choice for backing money?",
          es: "¿Qué hizo del oro una buena opción para respaldar el dinero?",
          de: "Was machte Gold zu einer guten Wahl zur Deckung von Geld?",
          nl: "Wat maakte goud een goede keuze voor het dekken van geld?"
        },
        options: [
          { en: "It cannot be created artificially and has limited supply", es: "No puede crearse artificialmente y tiene suministro limitado", de: "Es kann nicht künstlich geschaffen werden und hat begrenztes Angebot", nl: "Het kan niet kunstmatig worden gemaakt en heeft beperkte voorraad" },
          { en: "It is very light and easy to carry", es: "Es muy ligero y fácil de llevar", de: "Es ist sehr leicht und einfach zu tragen", nl: "Het is zeer licht en makkelijk te dragen" },
          { en: "It grows naturally like plants", es: "Crece naturalmente como las plantas", de: "Es wächst natürlich wie Pflanzen", nl: "Het groeit natuurlijk zoals planten" },
          { en: "It can be printed like paper", es: "Puede imprimirse como papel", de: "Es kann wie Papier gedruckt werden", nl: "Het kan gedrukt worden zoals papier" }
        ],
        correct: 0,
        explanation: {
          en: "Gold was a good choice for backing money because it cannot be created artificially and has a limited supply. Unlike paper money, governments cannot simply 'print' more gold, which prevents inflation and maintains the value of money.",
          es: "El oro era una buena opción para respaldar el dinero porque no puede crearse artificialmente y tiene un suministro limitado. A diferencia del papel moneda, los gobiernos no pueden simplemente 'imprimir' más oro, lo que previene la inflación y mantiene el valor del dinero.",
          de: "Gold war eine gute Wahl zur Deckung von Geld, weil es nicht künstlich geschaffen werden kann und ein begrenztes Angebot hat. Im Gegensatz zu Papiergeld können Regierungen nicht einfach mehr Gold 'drucken', was Inflation verhindert und den Wert des Geldes erhält.",
          nl: "Goud was een goede keuze voor het dekken van geld omdat het niet kunstmatig kan worden gemaakt en een beperkte voorraad heeft. In tegenstelling tot papiergeld kunnen regeringen niet gewoon meer goud 'drukken', wat inflatie voorkomt en de waarde van geld behoudt."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();