// Quiz Template - Level 2: Dessert - Koekjes
(function() {
  const level2 = {
    name: {
      en: "Cookies - Level 2",
      es: "Galletas - Nivel 2",
      de: "Kekse - Level 2",
      nl: "Koekjes - Level 2"
    },
    questions: [
      {
        question: {
          en: "What is the primary factor that determines whether cookies spread during baking?",
          es: "¿Cuál es el factor principal que determina si las galletas se extienden durante el horneado?",
          de: "Was ist der Hauptfaktor, der bestimmt, ob Kekse beim Backen verlaufen?",
          nl: "Wat is de primaire factor die bepaalt of koekjes uitlopen tijdens het bakken?"
        },
        options: [
          { en: "Oven temperature only", es: "Solo temperatura del horno", de: "Nur Ofentemperatur", nl: "Alleen oventemperatuur" },
          { en: "Fat temperature and type", es: "Temperatura y tipo de grasa", de: "Fetttemperatur und -typ", nl: "Vettemperatuur en type" },
          { en: "Sugar content", es: "Contenido de azúcar", de: "Zuckergehalt", nl: "Suikergehalte" },
          { en: "Flour protein level", es: "Nivel de proteína en harina", de: "Mehlproteingehalt", nl: "Bloem eiwitgehalte" }
        ],
        correct: 1,
        explanation: {
          en: "Fat temperature and type are the primary factors controlling cookie spread. Cold butter creates less spread, while melted butter creates more spread during baking.",
          es: "La temperatura y tipo de grasa son los factores principales que controlan la extensión de las galletas. La mantequilla fría crea menos extensión, mientras que la mantequilla derretida crea más extensión.",
          de: "Fetttemperatur und -typ sind die Hauptfaktoren, die das Verlaufen von Keksen kontrollieren. Kalte Butter erzeugt weniger Verlaufen, während geschmolzene Butter mehr Verlaufen verursacht.",
          nl: "Vettemperatuur en type zijn de primaire factoren die koekjes uitlopen controleren. Koude boter creëert minder uitlopen, terwijl gesmolten boter meer uitlopen veroorzaakt."
        }
      },
      {
        question: {
          en: "What is the difference between brown sugar and white sugar in cookie dough?",
          es: "¿Cuál es la diferencia entre azúcar moreno y azúcar blanco en la masa de galletas?",
          de: "Was ist der Unterschied zwischen braunem Zucker und weißem Zucker im Keksteig?",
          nl: "Wat is het verschil tussen bruine suiker en witte suiker in koekjesdeeg?"
        },
        options: [
          { en: "Brown sugar adds moisture and chewiness", es: "El azúcar moreno añade humedad y masticabilidad", de: "Brauner Zucker fügt Feuchtigkeit und Kaubarkeit hinzu", nl: "Bruine suiker voegt vocht en kauwbaarheid toe" },
          { en: "No difference in texture", es: "No hay diferencia en textura", de: "Kein Unterschied in der Textur", nl: "Geen verschil in textuur" },
          { en: "Brown sugar makes cookies more crispy", es: "El azúcar moreno hace las galletas más crujientes", de: "Brauner Zucker macht Kekse knuspriger", nl: "Bruine suiker maakt koekjes knapperiger" },
          { en: "Only affects color", es: "Solo afecta el color", de: "Beeinflusst nur die Farbe", nl: "Beïnvloedt alleen kleur" }
        ],
        correct: 0,
        explanation: {
          en: "Brown sugar contains molasses, which adds moisture and creates chewier cookies, while white sugar contributes to crispness and spread.",
          es: "El azúcar moreno contiene melaza, que añade humedad y crea galletas más masticables, mientras que el azúcar blanco contribuye a la textura crujiente y extensión.",
          de: "Brauner Zucker enthält Melasse, die Feuchtigkeit hinzufügt und kaubarere Kekse erzeugt, während weißer Zucker zu Knusprigkeit und Verlaufen beiträgt.",
          nl: "Bruine suiker bevat melasse, wat vocht toevoegt en kauwbaardere koekjes creëert, terwijl witte suiker bijdraagt aan knapperigheid en uitlopen."
        }
      },
      {
        question: {
          en: "What technique prevents chocolate chip cookies from becoming flat and greasy?",
          es: "¿Qué técnica previene que las galletas de chispas de chocolate se vuelvan planas y grasosas?",
          de: "Welche Technik verhindert, dass Schokoladenkekse flach und fettig werden?",
          nl: "Welke techniek voorkomt dat chocolate chip cookies plat en vettig worden?"
        },
        options: [
          { en: "Using only white sugar", es: "Usar solo azúcar blanco", de: "Nur weißen Zucker verwenden", nl: "Alleen witte suiker gebruiken" },
          { en: "Chilling the dough before baking", es: "Enfriar la masa antes de hornear", de: "Den Teig vor dem Backen kühlen", nl: "Het deeg koelen voor het bakken" },
          { en: "Baking at very high temperature", es: "Hornear a temperatura muy alta", de: "Bei sehr hoher Temperatur backen", nl: "Bakken op zeer hoge temperatuur" },
          { en: "Adding extra flour", es: "Agregar harina extra", de: "Extra Mehl hinzufügen", nl: "Extra bloem toevoegen" }
        ],
        correct: 1,
        explanation: {
          en: "Chilling cookie dough solidifies the fat, which slows spreading during the initial baking phase, resulting in thicker, less greasy cookies with better shape retention.",
          es: "Enfriar la masa de galletas solidifica la grasa, lo que ralentiza la extensión durante la fase inicial de horneado, resultando en galletas más gruesas y menos grasosas.",
          de: "Das Kühlen des Keksteigs festigt das Fett, was das Verlaufen während der anfänglichen Backphase verlangsamt und dickere, weniger fettige Kekse mit besserer Formbeibehaltung ergibt.",
          nl: "Het koelen van koekjesdeeg verstevigt het vet, wat uitlopen tijdens de eerste bakfase vertraagt, resulterend in dikkere, minder vette koekjes met betere vormretentie."
        }
      },
      {
        question: {
          en: "What is the purpose of cream of tartar in snickerdoodle cookies?",
          es: "¿Cuál es el propósito del cremor tártaro en las galletas snickerdoodle?",
          de: "Was ist der Zweck von Weinstein in Snickerdoodle-Keksen?",
          nl: "Wat is het doel van wijnsteen in snickerdoodle koekjes?"
        },
        options: [
          { en: "Add flavor only", es: "Solo agregar sabor", de: "Nur Geschmack hinzufügen", nl: "Alleen smaak toevoegen" },
          { en: "Activate baking soda and create tender texture", es: "Activar bicarbonato y crear textura tierna", de: "Natron aktivieren und zarte Textur erzeugen", nl: "Zuiveringszout activeren en zachte textuur creëren" },
          { en: "Preserve color", es: "Preservar color", de: "Farbe erhalten", nl: "Kleur behouden" },
          { en: "Prevent spreading", es: "Prevenir extensión", de: "Verlaufen verhindern", nl: "Uitlopen voorkomen" }
        ],
        correct: 1,
        explanation: {
          en: "Cream of tartar provides acid to activate baking soda, creating lift and tender texture, while also contributing to the characteristic tangy flavor of snickerdoodles.",
          es: "El cremor tártaro proporciona ácido para activar el bicarbonato, creando levado y textura tierna, mientras también contribuye al sabor ácido característico de los snickerdoodles.",
          de: "Weinstein liefert Säure zur Aktivierung von Natron, erzeugt Auftrieb und zarte Textur, während es auch zum charakteristischen säuerlichen Geschmack von Snickerdoodles beiträgt.",
          nl: "Wijnsteen levert zuur om zuiveringszout te activeren, creëert lift en zachte textuur, terwijl het ook bijdraagt aan de kenmerkende zure smaak van snickerdoodles."
        }
      },
      {
        question: {
          en: "What is the optimal mixing method for maintaining tender cookie texture?",
          es: "¿Cuál es el método óptimo de mezclado para mantener textura tierna en galletas?",
          de: "Was ist die optimale Mischmethode für die Erhaltung zarter Kekstextur?",
          nl: "Wat is de optimale mengmethode voor het behouden van zachte koekjestextuur?"
        },
        options: [
          { en: "High-speed mixing for maximum air incorporation", es: "Mezclado a alta velocidad para máxima incorporación de aire", de: "Hochgeschwindigkeitsmischen für maximale Lufteinarbeitung", nl: "Hoge snelheid mengen voor maximale luchtinwerking" },
          { en: "Minimal mixing just until ingredients are combined", es: "Mezclado mínimo solo hasta combinar ingredientes", de: "Minimales Mischen nur bis Zutaten kombiniert sind", nl: "Minimaal mengen tot ingrediënten net gecombineerd zijn" },
          { en: "Long mixing time to develop gluten", es: "Tiempo de mezclado largo para desarrollar gluten", de: "Lange Mischzeit zur Glutenentwicklung", nl: "Lange mengtijd om gluten te ontwikkelen" },
          { en: "Alternating wet and dry ingredients", es: "Alternando ingredientes húmedos y secos", de: "Abwechselnd feuchte und trockene Zutaten", nl: "Afwisselend natte en droge ingrediënten" }
        ],
        correct: 1,
        explanation: {
          en: "Minimal mixing prevents excessive gluten development, which would create tough cookies. Mix just until flour is incorporated for optimal tenderness.",
          es: "El mezclado mínimo previene el desarrollo excesivo de gluten, que crearía galletas duras. Mezclar solo hasta incorporar la harina para terneza óptima.",
          de: "Minimales Mischen verhindert übermäßige Glutenentwicklung, die zähe Kekse erzeugen würde. Nur mischen, bis Mehl eingearbeitet ist für optimale Zartheit.",
          nl: "Minimaal mengen voorkomt overmatige glutenontwikkeling, wat taaie koekjes zou creëren. Alleen mengen tot bloem is ingewerkt voor optimale zachtheid."
        }
      },
      {
        question: {
          en: "What causes cookies to become tough and dense?",
          es: "¿Qué causa que las galletas se vuelvan duras y densas?",
          de: "Was verursacht, dass Kekse zäh und dicht werden?",
          nl: "Wat veroorzaakt dat koekjes taai en dicht worden?"
        },
        options: [
          { en: "Too much sugar", es: "Demasiado azúcar", de: "Zu viel Zucker", nl: "Te veel suiker" },
          { en: "Overmixing and too much flour", es: "Mezclado excesivo y demasiada harina", de: "Übermischen und zu viel Mehl", nl: "Overmengen en te veel bloem" },
          { en: "Baking temperature too low", es: "Temperatura de horneado muy baja", de: "Backtemperatur zu niedrig", nl: "Baktemperatuur te laag" },
          { en: "Not enough fat", es: "No suficiente grasa", de: "Nicht genug Fett", nl: "Niet genoeg vet" }
        ],
        correct: 1,
        explanation: {
          en: "Overmixing develops too much gluten, and excess flour creates dry, dense cookies. Both factors work against the tender, light texture desired in cookies.",
          es: "El mezclado excesivo desarrolla demasiado gluten, y el exceso de harina crea galletas secas y densas. Ambos factores van contra la textura tierna y ligera deseada.",
          de: "Übermischen entwickelt zu viel Gluten, und überschüssiges Mehl erzeugt trockene, dichte Kekse. Beide Faktoren arbeiten gegen die gewünschte zarte, leichte Textur.",
          nl: "Overmengen ontwikkelt te veel gluten, en overtollige bloem creëert droge, dichte koekjes. Beide factoren werken tegen de gewenste zachte, lichte textuur."
        }
      },
      {
        question: {
          en: "What is the purpose of using parchment paper versus greasing cookie sheets?",
          es: "¿Cuál es el propósito de usar papel pergamino versus engrasar bandejas para galletas?",
          de: "Was ist der Zweck der Verwendung von Backpapier gegenüber dem Einfetten von Keksblechen?",
          nl: "Wat is het doel van het gebruik van bakpapier versus het invetten van koekjesplaten?"
        },
        options: [
          { en: "Parchment prevents over-browning and sticking", es: "El pergamino previene exceso de dorado y pegado", de: "Backpapier verhindert Überbräunung und Ankleben", nl: "Bakpapier voorkomt overbruinen en aanplakken" },
          { en: "No difference", es: "No hay diferencia", de: "Kein Unterschied", nl: "Geen verschil" },
          { en: "Greasing is always better", es: "Engrasar es siempre mejor", de: "Einfetten ist immer besser", nl: "Invetten is altijd beter" },
          { en: "Parchment only prevents sticking", es: "El pergamino solo previene pegado", de: "Backpapier verhindert nur Ankleben", nl: "Bakpapier voorkomt alleen aanplakken" }
        ],
        correct: 0,
        explanation: {
          en: "Parchment paper provides insulation that prevents over-browning of cookie bottoms while also preventing sticking, resulting in more evenly baked cookies.",
          es: "El papel pergamino proporciona aislamiento que previene el exceso de dorado en el fondo de las galletas mientras también previene el pegado, resultando en galletas más uniformemente horneadas.",
          de: "Backpapier bietet Isolierung, die Überbräunung der Keksunterseiten verhindert, während es auch Ankleben verhindert, was gleichmäßiger gebackene Kekse ergibt.",
          nl: "Bakpapier biedt isolatie die overbruinen van koekjesbodem voorkomt terwijl het ook aanplakken voorkomt, resulterend in gelijkmatiger gebakken koekjes."
        }
      },
      {
        question: {
          en: "What is the ideal ratio of flour to fat for optimal cookie texture?",
          es: "¿Cuál es la proporción ideal de harina a grasa para textura óptima de galletas?",
          de: "Was ist das ideale Verhältnis von Mehl zu Fett für optimale Kekstextur?",
          nl: "Wat is de ideale verhouding van bloem tot vet voor optimale koekjestextuur?"
        },
        options: [
          { en: "3:1 (flour to fat)", es: "3:1 (harina a grasa)", de: "3:1 (Mehl zu Fett)", nl: "3:1 (bloem tot vet)" },
          { en: "2:1 (flour to fat)", es: "2:1 (harina a grasa)", de: "2:1 (Mehl zu Fett)", nl: "2:1 (bloem tot vet)" },
          { en: "4:1 (flour to fat)", es: "4:1 (harina a grasa)", de: "4:1 (Mehl zu Fett)", nl: "4:1 (bloem tot vet)" },
          { en: "1:1 (equal amounts)", es: "1:1 (cantidades iguales)", de: "1:1 (gleiche Mengen)", nl: "1:1 (gelijke hoeveelheden)" }
        ],
        correct: 0,
        explanation: {
          en: "A 3:1 ratio of flour to fat provides the optimal balance for most cookies, ensuring proper structure while maintaining tenderness and flavor.",
          es: "Una proporción 3:1 de harina a grasa proporciona el equilibrio óptimo para la mayoría de galletas, asegurando estructura adecuada mientras mantiene terneza y sabor.",
          de: "Ein 3:1-Verhältnis von Mehl zu Fett bietet das optimale Gleichgewicht für die meisten Kekse, gewährleistet richtige Struktur bei Erhaltung von Zartheit und Geschmack.",
          nl: "Een 3:1 verhouding van bloem tot vet biedt de optimale balans voor de meeste koekjes, verzekert juiste structuur terwijl zachtheid en smaak behouden blijven."
        }
      },
      {
        question: {
          en: "What technique creates the characteristic texture in shortbread cookies?",
          es: "¿Qué técnica crea la textura característica en las galletas shortbread?",
          de: "Welche Technik erzeugt die charakteristische Textur in Shortbread-Keksen?",
          nl: "Welke techniek creëert de kenmerkende textuur in shortbread koekjes?"
        },
        options: [
          { en: "Adding eggs for binding", es: "Agregar huevos para unir", de: "Eier zum Binden hinzufügen", nl: "Eieren toevoegen voor binding" },
          { en: "High ratio of butter with minimal liquid", es: "Alta proporción de mantequilla con líquido mínimo", de: "Hoher Butteranteil mit minimaler Flüssigkeit", nl: "Hoge verhouding boter met minimale vloeistof" },
          { en: "Chemical leavening agents", es: "Agentes leudantes químicos", de: "Chemische Triebmittel", nl: "Chemische rijsmiddelen" },
          { en: "Long mixing time", es: "Tiempo de mezclado largo", de: "Lange Mischzeit", nl: "Lange mengtijd" }
        ],
        correct: 1,
        explanation: {
          en: "Shortbread's characteristic crumbly, tender texture comes from a high ratio of butter to flour with minimal liquid, creating a 'short' (tender) texture from fat coating flour proteins.",
          es: "La textura característica desmenuzable y tierna del shortbread viene de una alta proporción de mantequilla a harina con líquido mínimo, creando una textura 'corta' (tierna) del grasa cubriendo proteínas de harina.",
          de: "Shortbreads charakteristische krümelige, zarte Textur kommt von einem hohen Verhältnis von Butter zu Mehl mit minimaler Flüssigkeit, was eine 'kurze' (zarte) Textur durch Fett erzeugt, das Mehlproteine umhüllt.",
          nl: "Shortbreads kenmerkende kruimelige, zachte textuur komt van een hoge verhouding boter tot bloem met minimale vloeistof, wat een 'korte' (zachte) textuur creëert door vet dat bloem eiwitten omhult."
        }
      },
      {
        question: {
          en: "Why do sugar cookies require rolling and cutting rather than drop-cookie method?",
          es: "¿Por qué las galletas de azúcar requieren estirar y cortar en lugar del método de galletas por gotas?",
          de: "Warum erfordern Zuckerkekse Ausrollen und Ausstechen anstatt der Klecks-Keks-Methode?",
          nl: "Waarom vereisen suikerkoekjes uitrollen en uitsnijden in plaats van de drop-koekjes methode?"
        },
        options: [
          { en: "Higher fat content makes dough too soft to drop", es: "Mayor contenido de grasa hace la masa muy suave para gotear", de: "Höherer Fettgehalt macht Teig zu weich zum Tropfen", nl: "Hoger vetgehalte maakt deeg te zacht om te laten vallen" },
          { en: "Lower moisture content creates firmer dough suitable for rolling", es: "Menor contenido de humedad crea masa más firme adecuada para estirar", de: "Niedrigerer Feuchtigkeitsgehalt erzeugt festeren Teig geeignet zum Ausrollen", nl: "Lager vochtgehalte creëert steviger deeg geschikt voor uitrollen" },
          { en: "Sugar crystals need even distribution", es: "Los cristales de azúcar necesitan distribución uniforme", de: "Zuckerkristalle benötigen gleichmäßige Verteilung", nl: "Suikerkristallen hebben gelijkmatige verdeling nodig" },
          { en: "Temperature requirements differ", es: "Los requisitos de temperatura difieren", de: "Temperaturanforderungen unterscheiden sich", nl: "Temperatuurvereisten verschillen" }
        ],
        correct: 1,
        explanation: {
          en: "Sugar cookie dough has lower moisture content and firmer consistency, making it ideal for rolling and cutting into shapes while maintaining clean edges and defined forms.",
          es: "La masa de galletas de azúcar tiene menor contenido de humedad y consistencia más firme, haciéndola ideal para estirar y cortar en formas mientras mantiene bordes limpios y formas definidas.",
          de: "Zuckerkeksteig hat niedrigeren Feuchtigkeitsgehalt und festere Konsistenz, was ihn ideal zum Ausrollen und Ausstechen in Formen macht, während saubere Kanten und definierte Formen erhalten bleiben.",
          nl: "Suikerkoekjesdeeg heeft lager vochtgehalte en stevigere consistentie, wat het ideaal maakt voor uitrollen en uitsnijden in vormen terwijl schone randen en gedefinieerde vormen behouden blijven."
        }
      },
      {
        question: {
          en: "What causes cookies to crack on top during baking?",
          es: "¿Qué causa que las galletas se agrieten arriba durante el horneado?",
          de: "Was verursacht, dass Kekse beim Backen oben aufplatzen?",
          nl: "Wat veroorzaakt dat koekjes bovenop scheuren tijdens het bakken?"
        },
        options: [
          { en: "Too much liquid in dough", es: "Demasiado líquido en la masa", de: "Zu viel Flüssigkeit im Teig", nl: "Te veel vloeistof in het deeg" },
          { en: "Rapid surface setting with continued interior expansion", es: "Cuajado rápido de superficie con expansión interior continua", de: "Schnelle Oberflächenerstarrung bei anhaltender Innenausdehnung", nl: "Snelle oppervlakte stolling met voortgezette interne uitbreiding" },
          { en: "Insufficient fat", es: "Grasa insuficiente", de: "Unzureichendes Fett", nl: "Onvoldoende vet" },
          { en: "Wrong flour type", es: "Tipo de harina incorrecta", de: "Falscher Mehltyp", nl: "Verkeerde bloem type" }
        ],
        correct: 1,
        explanation: {
          en: "Cracking occurs when the cookie surface sets quickly in the oven heat while the interior continues to expand from leavening agents, creating pressure that cracks the surface.",
          es: "El agrietamiento ocurre cuando la superficie de la galleta se cuaja rápidamente en el calor del horno mientras el interior continúa expandiéndose por agentes leudantes, creando presión que agrieta la superficie.",
          de: "Aufplatzen tritt auf, wenn die Keksoberfläche schnell in der Ofenhitze erstarrt, während das Innere durch Triebmittel weiter expandiert und Druck erzeugt, der die Oberfläche aufplatzen lässt.",
          nl: "Scheuren treedt op wanneer het koekjesoppervlak snel stolt in de ovenhitte terwijl de binnenkant blijft uitbreiden door rijsmiddelen, wat druk creëert die het oppervlak doet scheuren."
        }
      },
      {
        question: {
          en: "What is the difference between European-style and American-style butter in cookie making?",
          es: "¿Cuál es la diferencia entre mantequilla estilo europeo y americano en la elaboración de galletas?",
          de: "Was ist der Unterschied zwischen europäischer und amerikanischer Butter beim Keksbacken?",
          nl: "Wat is het verschil tussen Europese en Amerikaanse boter bij het maken van koekjes?"
        },
        options: [
          { en: "European butter has higher fat content (82% vs 80%)", es: "La mantequilla europea tiene mayor contenido de grasa (82% vs 80%)", de: "Europäische Butter hat höheren Fettgehalt (82% vs 80%)", nl: "Europese boter heeft hoger vetgehalte (82% vs 80%)" },
          { en: "American butter tastes better", es: "La mantequilla americana sabe mejor", de: "Amerikanische Butter schmeckt besser", nl: "Amerikaanse boter smaakt beter" },
          { en: "No significant difference", es: "No hay diferencia significativa", de: "Kein signifikanter Unterschied", nl: "Geen significant verschil" },
          { en: "European butter is saltier", es: "La mantequilla europea es más salada", de: "Europäische Butter ist salziger", nl: "Europese boter is zouter" }
        ],
        correct: 0,
        explanation: {
          en: "European-style butter contains 82% fat versus 80% in American butter, resulting in richer flavor and different spreading characteristics in cookies.",
          es: "La mantequilla estilo europeo contiene 82% de grasa versus 80% en mantequilla americana, resultando en sabor más rico y características de extensión diferentes en galletas.",
          de: "Europäische Butter enthält 82% Fett gegenüber 80% in amerikanischer Butter, was zu reicherem Geschmack und anderen Verlaufseigenschaften in Keksen führt.",
          nl: "Europese boter bevat 82% vet versus 80% in Amerikaanse boter, resulterend in rijkere smaak en verschillende uitloop karakteristieken in koekjes."
        }
      },
      {
        question: {
          en: "What is the purpose of double-panning when baking delicate cookies?",
          es: "¿Cuál es el propósito del doble horneado al hornear galletas delicadas?",
          de: "Was ist der Zweck des Doppelpfannens beim Backen empfindlicher Kekse?",
          nl: "Wat is het doel van dubbel pannen bij het bakken van delicate koekjes?"
        },
        options: [
          { en: "Speed up baking time", es: "Acelerar tiempo de horneado", de: "Backzeit verkürzen", nl: "Baktijd versnellen" },
          { en: "Prevent bottom browning and provide even heat distribution", es: "Prevenir dorado del fondo y proporcionar distribución uniforme del calor", de: "Bodenbräunung verhindern und gleichmäßige Wärmeverteilung bieten", nl: "Bodembruining voorkomen en gelijkmatige warmteverdeling bieden" },
          { en: "Add moisture to cookies", es: "Agregar humedad a las galletas", de: "Feuchtigkeit zu Keksen hinzufügen", nl: "Vocht aan koekjes toevoegen" },
          { en: "Create crispy texture", es: "Crear textura crujiente", de: "Knusprige Textur erzeugen", nl: "Knapperige textuur creëren" }
        ],
        correct: 1,
        explanation: {
          en: "Double-panning (placing one pan inside another) insulates cookies from direct bottom heat, preventing over-browning and ensuring even baking for delicate cookies.",
          es: "El doble horneado (colocar una bandeja dentro de otra) aísla las galletas del calor directo del fondo, previniendo exceso de dorado y asegurando horneado uniforme para galletas delicadas.",
          de: "Doppelpfannen (eine Pfanne in eine andere stellen) isoliert Kekse vor direkter Bodenhitze, verhindert Überbräunung und gewährleistet gleichmäßiges Backen für empfindliche Kekse.",
          nl: "Dubbel pannen (één pan in een andere plaatsen) isoleert koekjes van directe bodemhitte, voorkomt overbruining en verzekert gelijkmatig bakken voor delicate koekjes."
        }
      },
      {
        question: {
          en: "What is the ideal storage method for maintaining cookie freshness?",
          es: "¿Cuál es el método ideal de almacenamiento para mantener la frescura de las galletas?",
          de: "Was ist die ideale Lagerungsmethode zur Erhaltung der Keksfrische?",
          nl: "Wat is de ideale bewaarsmethode voor het behouden van koekjesversheid?"
        },
        options: [
          { en: "Store all cookies together in one container", es: "Guardar todas las galletas juntas en un contenedor", de: "Alle Kekse zusammen in einem Behälter lagern", nl: "Alle koekjes samen in één container bewaren" },
          { en: "Separate by texture: crispy and soft cookies stored separately", es: "Separar por textura: galletas crujientes y suaves guardadas separadamente", de: "Nach Textur trennen: knusprige und weiche Kekse separat lagern", nl: "Scheiden op textuur: knapperige en zachte koekjes apart bewaren" },
          { en: "Refrigerate immediately", es: "Refrigerar inmediatamente", de: "Sofort kühlen", nl: "Onmiddellijk koelen" },
          { en: "Leave uncovered to air dry", es: "Dejar descubierto para secar al aire", de: "Unbedeckt zum Lufttrocknen lassen", nl: "Onbedekt laten voor luchtdroging" }
        ],
        correct: 1,
        explanation: {
          en: "Different cookie textures require different storage: crispy cookies need airtight containers to stay crisp, while soft cookies need less airtight storage to prevent them from becoming soggy.",
          es: "Diferentes texturas de galletas requieren diferente almacenamiento: galletas crujientes necesitan contenedores herméticos para mantenerse crujientes, mientras que galletas suaves necesitan almacenamiento menos hermético.",
          de: "Verschiedene Kekstexturen erfordern unterschiedliche Lagerung: knusprige Kekse benötigen luftdichte Behälter um knusprig zu bleiben, während weiche Kekse weniger luftdichte Lagerung benötigen.",
          nl: "Verschillende koekjestexturen vereisen verschillende bewaring: knapperige koekjes hebben luchtdichte containers nodig om knapperig te blijven, terwijl zachte koekjes minder luchtdichte bewaring nodig hebben."
        }
      },
      {
        question: {
          en: "What is the science behind cookie spread control?",
          es: "¿Cuál es la ciencia detrás del control de extensión de galletas?",
          de: "Was ist die Wissenschaft hinter der Kontrolle des Keksverlaufens?",
          nl: "Wat is de wetenschap achter het controleren van koekjes uitlopen?"
        },
        options: [
          { en: "Only temperature matters", es: "Solo importa la temperatura", de: "Nur Temperatur ist wichtig", nl: "Alleen temperatuur is belangrijk" },
          { en: "Fat melting rate versus protein coagulation timing", es: "Velocidad de derretimiento de grasa versus tiempo de coagulación de proteínas", de: "Fettschmelzrate versus Proteingerinnungszeit", nl: "Vetsmeltsnelheid versus eiwitcoagulatie timing" },
          { en: "Sugar type only", es: "Solo tipo de azúcar", de: "Nur Zuckertyp", nl: "Alleen suikertype" },
          { en: "Flour protein content only", es: "Solo contenido de proteína en harina", de: "Nur Mehlproteingehalt", nl: "Alleen bloem eiwitgehalte" }
        ],
        correct: 1,
        explanation: {
          en: "Cookie spread is controlled by the race between fat melting (which allows spread) and protein coagulation (which sets structure), influenced by fat temperature, type, and oven heat.",
          es: "La extensión de galletas se controla por la carrera entre el derretimiento de grasa (que permite extensión) y coagulación de proteínas (que fija estructura), influenciada por temperatura de grasa, tipo y calor del horno.",
          de: "Keksverlaufen wird durch das Rennen zwischen Fettschmelzen (was Verlaufen ermöglicht) und Proteingerinnung (was Struktur festsetzt) kontrolliert, beeinflusst von Fetttemperatur, -typ und Ofenhitze.",
          nl: "Koekjes uitlopen wordt gecontroleerd door de race tussen vetsmelten (wat uitlopen mogelijk maakt) en eiwitcoagulatie (wat structuur vastzet), beïnvloed door vettemperatuur, type en ovenhitte."
        }
      },
      {
        question: {
          en: "What is the effect of altitude on cookie baking?",
          es: "¿Cuál es el efecto de la altitud en el horneado de galletas?",
          de: "Was ist die Wirkung der Höhe auf das Keksbacken?",
          nl: "Wat is het effect van hoogte op het bakken van koekjes?"
        },
        options: [
          { en: "No effect", es: "Sin efecto", de: "Kein Effekt", nl: "Geen effect" },
          { en: "Lower air pressure causes more spreading and faster moisture loss", es: "Menor presión del aire causa más extensión y pérdida de humedad más rápida", de: "Niedrigerer Luftdruck verursacht mehr Verlaufen und schnelleren Feuchtigkeitsverlust", nl: "Lagere luchtdruk veroorzaakt meer uitlopen en sneller vochtverlies" },
          { en: "Cookies become denser", es: "Las galletas se vuelven más densas", de: "Kekse werden dichter", nl: "Koekjes worden dichter" },
          { en: "Only affects flavor", es: "Solo afecta el sabor", de: "Beeinflusst nur den Geschmack", nl: "Beïnvloedt alleen smaak" }
        ],
        correct: 1,
        explanation: {
          en: "At high altitude, lower air pressure causes cookies to spread more and lose moisture faster, requiring adjustments to fat, liquid, and sometimes leavening amounts.",
          es: "En alta altitud, la menor presión del aire causa que las galletas se extiendan más y pierdan humedad más rápido, requiriendo ajustes a las cantidades de grasa, líquido y a veces leudantes.",
          de: "In großer Höhe verursacht niedrigerer Luftdruck, dass Kekse mehr verlaufen und Feuchtigkeit schneller verlieren, was Anpassungen von Fett-, Flüssigkeits- und manchmal Triebmittelmengen erfordert.",
          nl: "Op grote hoogte veroorzaakt lagere luchtdruk dat koekjes meer uitlopen en sneller vocht verliezen, wat aanpassingen van vet, vloeistof en soms rijsmiddel hoeveelheden vereist."
        }
      },
      {
        question: {
          en: "What creates the characteristic texture in biscotti?",
          es: "¿Qué crea la textura característica en los biscotti?",
          de: "Was erzeugt die charakteristische Textur in Biscotti?",
          nl: "Wat creëert de kenmerkende textuur in biscotti?"
        },
        options: [
          { en: "High fat content", es: "Alto contenido de grasa", de: "Hoher Fettgehalt", nl: "Hoog vetgehalte" },
          { en: "Double baking process", es: "Proceso de doble horneado", de: "Doppelbackprozess", nl: "Dubbel bakproces" },
          { en: "Special flour type", es: "Tipo especial de harina", de: "Spezieller Mehltyp", nl: "Speciaal bloem type" },
          { en: "Chemical leavening", es: "Leudante químico", de: "Chemisches Triebmittel", nl: "Chemisch rijsmiddel" }
        ],
        correct: 1,
        explanation: {
          en: "Biscotti's characteristic hard, crispy texture comes from being baked twice: first as a loaf, then sliced and baked again to remove moisture and create the signature crunch.",
          es: "La textura característica dura y crujiente de los biscotti viene de ser horneados dos veces: primero como pan, luego rebanados y horneados otra vez para quitar humedad y crear el crujido característico.",
          de: "Biscottis charakteristische harte, knusprige Textur kommt vom zweimaligen Backen: erst als Laib, dann geschnitten und nochmals gebacken, um Feuchtigkeit zu entfernen und den charakteristischen Knusper zu erzeugen.",
          nl: "Biscotti's kenmerkende harde, knapperige textuur komt van twee keer bakken: eerst als brood, dan gesneden en opnieuw gebakken om vocht te verwijderen en de kenmerkende knapperigheid te creëren."
        }
      },
      {
        question: {
          en: "What is the purpose of letting cookie dough rest before baking?",
          es: "¿Cuál es el propósito de dejar reposar la masa de galletas antes de hornear?",
          de: "Was ist der Zweck, Keksteig vor dem Backen ruhen zu lassen?",
          nl: "Wat is het doel van koekjesdeeg laten rusten voor het bakken?"
        },
        options: [
          { en: "Hydrate flour and relax gluten strands", es: "Hidratar harina y relajar hebras de gluten", de: "Mehl hydrieren und Glutenstränge entspannen", nl: "Bloem hydrateren en glutenstrengen ontspannen" },
          { en: "Activate yeast", es: "Activar levadura", de: "Hefe aktivieren", nl: "Gist activeren" },
          { en: "Change flavor only", es: "Solo cambiar sabor", de: "Nur Geschmack ändern", nl: "Alleen smaak veranderen" },
          { en: "No benefit", es: "Sin beneficio", de: "Kein Nutzen", nl: "Geen voordeel" }
        ],
        correct: 0,
        explanation: {
          en: "Resting cookie dough allows flour to fully hydrate and gluten strands to relax, resulting in more tender cookies with better texture and less spreading during baking.",
          es: "Reposar la masa de galletas permite que la harina se hidrate completamente y las hebras de gluten se relajen, resultando en galletas más tiernas con mejor textura y menos extensión durante el horneado.",
          de: "Keksteig ruhen lassen ermöglicht vollständige Mehlhydrierung und Entspannung der Glutenstränge, was zu zarteren Keksen mit besserer Textur und weniger Verlaufen beim Backen führt.",
          nl: "Koekjesdeeg laten rusten laat bloem volledig hydrateren en glutenstrengen ontspannen, resulterend in zachtere koekjes met betere textuur en minder uitlopen tijdens bakken."
        }
      },
      {
        question: {
          en: "What determines the final texture difference between chewy and crispy cookies?",
          es: "¿Qué determina la diferencia de textura final entre galletas masticables y crujientes?",
          de: "Was bestimmt den endgültigen Texturunterschied zwischen kauartigen und knusprigen Keksen?",
          nl: "Wat bepaalt het uiteindelijke textuurverschil tussen kauwbare en knapperige koekjes?"
        },
        options: [
          { en: "Oven temperature only", es: "Solo temperatura del horno", de: "Nur Ofentemperatur", nl: "Alleen oventemperatuur" },
          { en: "Moisture content and sugar type ratio", es: "Contenido de humedad y proporción de tipo de azúcar", de: "Feuchtigkeitsgehalt und Zuckertypverhältnis", nl: "Vochtgehalte en suikertype verhouding" },
          { en: "Flour type only", es: "Solo tipo de harina", de: "Nur Mehltyp", nl: "Alleen bloem type" },
          { en: "Baking time only", es: "Solo tiempo de horneado", de: "Nur Backzeit", nl: "Alleen baktijd" }
        ],
        correct: 1,
        explanation: {
          en: "Cookie texture is primarily determined by moisture content (more moisture = chewier) and sugar ratios (brown sugar adds moisture for chewiness, white sugar promotes crispness).",
          es: "La textura de galletas se determina principalmente por contenido de humedad (más humedad = más masticable) y proporciones de azúcar (azúcar moreno añade humedad para masticabilidad, azúcar blanco promueve textura crujiente).",
          de: "Kekstextur wird hauptsächlich durch Feuchtigkeitsgehalt (mehr Feuchtigkeit = kauartiger) und Zuckerverhältnisse bestimmt (brauner Zucker fügt Feuchtigkeit für Kaubarkeit hinzu, weißer Zucker fördert Knusprigkeit).",
          nl: "Koekjestextuur wordt hoofdzakelijk bepaald door vochtgehalte (meer vocht = kauwbaarder) en suikerverhoudingen (bruine suiker voegt vocht toe voor kauwbaarheid, witte suiker bevordert knapperigheid)."
        }
      },
      {
        question: {
          en: "What is the main purpose of eggs in cookie dough?",
          es: "¿Cuál es el propósito principal de los huevos en la masa de galletas?",
          de: "Was ist der Hauptzweck von Eiern im Keksteig?",
          nl: "Wat is het hoofddoel van eieren in koekjesdeeg?"
        },
        options: [
          { en: "Only for color", es: "Solo para color", de: "Nur für Farbe", nl: "Alleen voor kleur" },
          { en: "Binding and moisture", es: "Unión y humedad", de: "Bindung und Feuchtigkeit", nl: "Binding en vocht" },
          { en: "Only for flavor", es: "Solo para sabor", de: "Nur für Geschmack", nl: "Alleen voor smaak" },
          { en: "To make cookies rise", es: "Para hacer que las galletas suban", de: "Damit Kekse aufgehen", nl: "Om koekjes te laten rijzen" }
        ],
        correct: 1,
        explanation: {
          en: "Eggs serve as a binding agent, holding ingredients together, while also adding moisture and richness to cookie dough, contributing to both texture and flavor.",
          es: "Los huevos sirven como agente aglutinante, manteniendo unidos los ingredientes, mientras también añaden humedad y riqueza a la masa de galletas, contribuyendo tanto a la textura como al sabor.",
          de: "Eier dienen als Bindemittel, halten Zutaten zusammen und fügen dem Keksteig Feuchtigkeit und Reichhaltigkeit hinzu, was sowohl zur Textur als auch zum Geschmack beiträgt.",
          nl: "Eieren dienen als bindmiddel, houden ingrediënten samen, terwijl ze ook vocht en rijkheid toevoegen aan koekjesdeeg, bijdragend aan zowel textuur als smaak."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();