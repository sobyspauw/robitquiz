// Custards Quiz - Level 4: Advanced Custard Making
(function() {
  const level4 = {
    name: {
      en: "Advanced Custard Making",
      es: "Preparación Avanzada de Natillas",
      de: "Fortgeschrittene Pudding-Herstellung",
      nl: "Geavanceerde Custard Bereiding"
    },
    questions: [
      {
        question: {
          en: "What is the key difference between sabayon and zabaglione?",
          es: "¿Cuál es la diferencia clave entre sabayon y zabaglione?",
          de: "Was ist der Hauptunterschied zwischen Sabayon und Zabaglione?",
          nl: "Wat is het belangrijkste verschil tussen sabayon en zabaglione?"
        },
        options: [
          { en: "They are the same dessert with different names", es: "Son el mismo postre con nombres diferentes", de: "Sie sind dasselbe Dessert mit verschiedenen Namen", nl: "Het zijn hetzelfde dessert met verschillende namen" },
          { en: "Sabayon uses champagne, zabaglione uses Marsala wine", es: "Sabayon usa champán, zabaglione usa vino Marsala", de: "Sabayon verwendet Champagner, Zabaglione verwendet Marsala-Wein", nl: "Sabayon gebruikt champagne, zabaglione gebruikt Marsala wijn" },
          { en: "Sabayon is served cold, zabaglione is served warm", es: "Sabayon se sirve frío, zabaglione se sirve caliente", de: "Sabayon wird kalt serviert, Zabaglione wird warm serviert", nl: "Sabayon wordt koud geserveerd, zabaglione wordt warm geserveerd" },
          { en: "Sabayon uses cream, zabaglione doesn't", es: "Sabayon usa nata, zabaglione no", de: "Sabayon verwendet Sahne, Zabaglione nicht", nl: "Sabayon gebruikt room, zabaglione niet" }
        ],
        correct: 0,
        explanation: {
          en: "Sabayon and zabaglione are the same dessert - a warm, foamy custard made with egg yolks, sugar, and wine. Sabayon is the French term, zabaglione is Italian.",
          es: "Sabayon y zabaglione son el mismo postre - una natilla tibia y espumosa hecha con yemas de huevo, azúcar y vino. Sabayon es el término francés, zabaglione es italiano.",
          de: "Sabayon und Zabaglione sind dasselbe Dessert - ein warmer, schaumiger Pudding aus Eigelb, Zucker und Wein. Sabayon ist der französische Begriff, Zabaglione ist italienisch.",
          nl: "Sabayon en zabaglione zijn hetzelfde dessert - een warme, schuimige custard gemaakt met eidooiers, suiker en wijn. Sabayon is de Franse term, zabaglione is Italiaans."
        }
      },
      {
        question: {
          en: "What is the traditional wine used in authentic zabaglione?",
          es: "¿Cuál es el vino tradicional usado en zabaglione auténtico?",
          de: "Welcher Wein wird traditionell in authentischem Zabaglione verwendet?",
          nl: "Welke wijn wordt traditioneel gebruikt in authentieke zabaglione?"
        },
        options: [
          { en: "Sherry", es: "Jerez", de: "Sherry", nl: "Sherry" },
          { en: "Marsala", es: "Marsala", de: "Marsala", nl: "Marsala" },
          { en: "Port", es: "Oporto", de: "Portwein", nl: "Port" },
          { en: "Champagne", es: "Champán", de: "Champagner", nl: "Champagne" }
        ],
        correct: 1,
        explanation: {
          en: "Traditional zabaglione uses Marsala wine, a fortified wine from Sicily. Marsala's sweet, complex flavor is essential to authentic zabaglione.",
          es: "El zabaglione tradicional usa vino Marsala, un vino fortificado de Sicilia. El sabor dulce y complejo del Marsala es esencial para el zabaglione auténtico.",
          de: "Traditionelles Zabaglione verwendet Marsala-Wein, einen verstärkten Wein aus Sizilien. Marsalas süßer, komplexer Geschmack ist wesentlich für authentisches Zabaglione.",
          nl: "Traditionele zabaglione gebruikt Marsala wijn, een versterkte wijn uit Sicilië. Marsala's zoete, complexe smaak is essentieel voor authentieke zabaglione."
        }
      },
      {
        question: {
          en: "What temperature should be reached when making zabaglione to ensure proper thickness without curdling?",
          es: "¿Qué temperatura debe alcanzarse al hacer zabaglione para asegurar espesura adecuada sin cuajar?",
          de: "Welche Temperatur sollte beim Herstellen von Zabaglione erreicht werden, um die richtige Dicke ohne Gerinnung zu gewährleisten?",
          nl: "Welke temperatuur moet bereikt worden bij het maken van zabaglione om goede dikte te verzekeren zonder klontering?"
        },
        options: [
          { en: "60°C (140°F)", es: "60°C (140°F)", de: "60°C (140°F)", nl: "60°C (140°F)" },
          { en: "75-80°C (167-176°F)", es: "75-80°C (167-176°F)", de: "75-80°C (167-176°F)", nl: "75-80°C (167-176°F)" },
          { en: "90°C (194°F)", es: "90°C (194°F)", de: "90°C (194°F)", nl: "90°C (194°F)" },
          { en: "100°C (212°F)", es: "100°C (212°F)", de: "100°C (212°F)", nl: "100°C (212°F)" }
        ],
        correct: 1,
        explanation: {
          en: "Zabaglione should reach 75-80°C (167-176°F) for proper thickening. This temperature allows the eggs to cook sufficiently to thicken while avoiding curdling.",
          es: "El zabaglione debe alcanzar 75-80°C (167-176°F) para espesar adecuadamente. Esta temperatura permite que los huevos se cocinen suficientemente para espesar evitando el cuajado.",
          de: "Zabaglione sollte 75-80°C (167-176°F) für ordnungsgemäße Verdickung erreichen. Diese Temperatur ermöglicht es den Eiern, ausreichend zu kochen, um zu verdicken, während Gerinnung vermieden wird.",
          nl: "Zabaglione moet 75-80°C (167-176°F) bereiken voor goede verdikking. Deze temperatuur laat de eieren voldoende koken om te verdikken terwijl klontering wordt vermeden."
        }
      },
      {
        question: {
          en: "What is the proper ratio of egg yolks to sugar to wine in classic zabaglione?",
          es: "¿Cuál es la proporción adecuada de yemas de huevo a azúcar a vino en zabaglione clásico?",
          de: "Was ist das richtige Verhältnis von Eigelb zu Zucker zu Wein in klassischem Zabaglione?",
          nl: "Wat is de juiste verhouding van eidooiers tot suiker tot wijn in klassieke zabaglione?"
        },
        options: [
          { en: "6 yolks : 75g sugar : 125ml wine", es: "6 yemas : 75g azúcar : 125ml vino", de: "6 Eigelb : 75g Zucker : 125ml Wein", nl: "6 dooiers : 75g suiker : 125ml wijn" },
          { en: "4 yolks : 100g sugar : 200ml wine", es: "4 yemas : 100g azúcar : 200ml vino", de: "4 Eigelb : 100g Zucker : 200ml Wein", nl: "4 dooiers : 100g suiker : 200ml wijn" },
          { en: "8 yolks : 50g sugar : 100ml wine", es: "8 yemas : 50g azúcar : 100ml vino", de: "8 Eigelb : 50g Zucker : 100ml Wein", nl: "8 dooiers : 50g suiker : 100ml wijn" },
          { en: "10 yolks : 150g sugar : 250ml wine", es: "10 yemas : 150g azúcar : 250ml vino", de: "10 Eigelb : 150g Zucker : 250ml Wein", nl: "10 dooiers : 150g suiker : 250ml wijn" }
        ],
        correct: 0,
        explanation: {
          en: "Classic zabaglione uses a 6:75:125 ratio (6 egg yolks, 75g sugar, 125ml Marsala). This creates the perfect balance of richness, sweetness, and wine flavor.",
          es: "El zabaglione clásico usa una proporción 6:75:125 (6 yemas de huevo, 75g azúcar, 125ml Marsala). Esto crea el equilibrio perfecto de riqueza, dulzura y sabor a vino.",
          de: "Klassisches Zabaglione verwendet ein 6:75:125 Verhältnis (6 Eigelb, 75g Zucker, 125ml Marsala). Dies schafft die perfekte Balance von Reichhaltigkeit, Süße und Weingeschmack.",
          nl: "Klassieke zabaglione gebruikt een 6:75:125 verhouding (6 eidooiers, 75g suiker, 125ml Marsala). Dit creëert de perfecte balans van rijkdom, zoetheid en wijnsmaak."
        }
      },
      {
        question: {
          en: "What technique is essential when whisking zabaglione over heat?",
          es: "¿Qué técnica es esencial al batir zabaglione sobre el calor?",
          de: "Welche Technik ist beim Schlagen von Zabaglione über Hitze wesentlich?",
          nl: "Welke techniek is essentieel bij het kloppen van zabaglione boven hitte?"
        },
        options: [
          { en: "Whisk slowly and intermittently", es: "Batir lentamente e intermitentemente", de: "Langsam und intermittierend schlagen", nl: "Langzaam en met tussenpozen kloppen" },
          { en: "Whisk vigorously and continuously", es: "Batir vigorosamente y continuamente", de: "Kräftig und kontinuierlich schlagen", nl: "Krachtig en continu kloppen" },
          { en: "Stir gently with a spoon", es: "Revolver suavemente con una cuchara", de: "Sanft mit einem Löffel rühren", nl: "Zacht roeren met een lepel" },
          { en: "No stirring needed", es: "No se necesita revolver", de: "Kein Rühren nötig", nl: "Geen roeren nodig" }
        ],
        correct: 1,
        explanation: {
          en: "Vigorous, continuous whisking is essential to incorporate air and prevent the eggs from scrambling. This creates the characteristic light, foamy texture.",
          es: "Batir vigorosamente y continuamente es esencial para incorporar aire y prevenir que los huevos se revuelvan. Esto crea la textura ligera y espumosa característica.",
          de: "Kräftiges, kontinuierliches Schlagen ist wesentlich, um Luft einzuarbeiten und zu verhindern, dass die Eier stocken. Dies schafft die charakteristische leichte, schaumige Textur.",
          nl: "Krachtig, continu kloppen is essentieel om lucht in te werken en te voorkomen dat de eieren stollen. Dit creëert de karakteristieke lichte, schuimige textuur."
        }
      },
      {
        question: {
          en: "What type of cooking vessel is traditionally used for making zabaglione?",
          es: "¿Qué tipo de recipiente de cocción se usa tradicionalmente para hacer zabaglione?",
          de: "Welche Art von Kochgefäß wird traditionell für die Herstellung von Zabaglione verwendet?",
          nl: "Welk type kookpan wordt traditioneel gebruikt voor het maken van zabaglione?"
        },
        options: [
          { en: "Heavy-bottomed saucepan", es: "Cacerola de fondo grueso", de: "Schwerbodiger Kochtopf", nl: "Zwaarbodem pan" },
          { en: "Copper zabaglione pot (zabagliera)", es: "Olla de cobre para zabaglione (zabagliera)", de: "Kupfer-Zabaglione-Topf (Zabagliera)", nl: "Koperen zabaglione pot (zabagliera)" },
          { en: "Non-stick pan", es: "Sartén antiadherente", de: "Antihaft-Pfanne", nl: "Anti-aanbakpan" },
          { en: "Glass bowl", es: "Tazón de vidrio", de: "Glasschüssel", nl: "Glazen kom" }
        ],
        correct: 1,
        explanation: {
          en: "A copper zabagliera (traditional zabaglione pot) is ideal because copper conducts heat evenly and responds quickly to temperature changes, allowing precise control.",
          es: "Una zabagliera de cobre (olla tradicional de zabaglione) es ideal porque el cobre conduce el calor uniformemente y responde rápidamente a cambios de temperatura, permitiendo control preciso.",
          de: "Ein Kupfer-Zabagliera (traditioneller Zabaglione-Topf) ist ideal, weil Kupfer Wärme gleichmäßig leitet und schnell auf Temperaturänderungen reagiert, was präzise Kontrolle ermöglicht.",
          nl: "Een koperen zabagliera (traditionele zabaglione pot) is ideaal omdat koper warmte gelijkmatig geleidt en snel reageert op temperatuurveranderingen, wat precieze controle mogelijk maakt."
        }
      },
      {
        question: {
          en: "How should crème anglaise be tested for proper doneness?",
          es: "¿Cómo debe probarse la crème anglaise para determinar si está bien cocida?",
          de: "Wie sollte Crème Anglaise auf ordnungsgemäße Fertigstellung getestet werden?",
          nl: "Hoe moet crème anglaise getest worden op goede gaarheid?"
        },
        options: [
          { en: "It should boil vigorously", es: "Debe hervir vigorosamente", de: "Es sollte kräftig kochen", nl: "Het moet krachtig koken" },
          { en: "Coat the back of a spoon (nappe test)", es: "Cubrir el dorso de una cuchara (prueba nappe)", de: "Den Rücken eines Löffels überziehen (Nappe-Test)", nl: "De achterkant van een lepel bedekken (nappe test)" },
          { en: "Reach 100°C internal temperature", es: "Alcanzar 100°C de temperatura interna", de: "100°C Innentemperatur erreichen", nl: "100°C interne temperatuur bereiken" },
          { en: "Become completely solid", es: "Volverse completamente sólido", de: "Völlig fest werden", nl: "Volledig vast worden" }
        ],
        correct: 1,
        explanation: {
          en: "The nappe test is the classic method: when crème anglaise coats the back of a spoon and you can draw a clear line through it with your finger, it's done.",
          es: "La prueba nappe es el método clásico: cuando la crème anglaise cubre el dorso de una cuchara y puedes trazar una línea clara a través de ella con tu dedo, está lista.",
          de: "Der Nappe-Test ist die klassische Methode: Wenn Crème Anglaise den Rücken eines Löffels überzieht und man mit dem Finger eine klare Linie hindurchziehen kann, ist sie fertig.",
          nl: "De nappe test is de klassieke methode: wanneer crème anglaise de achterkant van een lepel bedekt en je er een duidelijke lijn doorheen kunt trekken met je vinger, is het klaar."
        }
      },
      {
        question: {
          en: "What is the optimal temperature range for cooking crème anglaise?",
          es: "¿Cuál es el rango de temperatura óptimo para cocinar crème anglaise?",
          de: "Was ist der optimale Temperaturbereich für das Kochen von Crème Anglaise?",
          nl: "Wat is het optimale temperatuurbereik voor het koken van crème anglaise?"
        },
        options: [
          { en: "60-65°C (140-149°F)", es: "60-65°C (140-149°F)", de: "60-65°C (140-149°F)", nl: "60-65°C (140-149°F)" },
          { en: "75-82°C (167-180°F)", es: "75-82°C (167-180°F)", de: "75-82°C (167-180°F)", nl: "75-82°C (167-180°F)" },
          { en: "85-90°C (185-194°F)", es: "85-90°C (185-194°F)", de: "85-90°C (185-194°F)", nl: "85-90°C (185-194°F)" },
          { en: "95-100°C (203-212°F)", es: "95-100°C (203-212°F)", de: "95-100°C (203-212°F)", nl: "95-100°C (203-212°F)" }
        ],
        correct: 1,
        explanation: {
          en: "Crème anglaise should be cooked to 75-82°C (167-180°F). This temperature range thickens the custard without curdling the eggs or causing it to boil.",
          es: "La crème anglaise debe cocinarse a 75-82°C (167-180°F). Este rango de temperatura espesa la natilla sin cuajar los huevos o hacer que hierva.",
          de: "Crème Anglaise sollte auf 75-82°C (167-180°F) gekocht werden. Dieser Temperaturbereich verdickt den Pudding, ohne die Eier gerinnen zu lassen oder zum Kochen zu bringen.",
          nl: "Crème anglaise moet gekookt worden tot 75-82°C (167-180°F). Dit temperatuurbereik verdikt de custard zonder de eieren te laten klonteren of te laten koken."
        }
      },
      {
        question: {
          en: "What is the purpose of straining crème anglaise after cooking?",
          es: "¿Cuál es el propósito de colar la crème anglaise después de cocinar?",
          de: "Was ist der Zweck des Durchseihens von Crème Anglaise nach dem Kochen?",
          nl: "Wat is het doel van het zeven van crème anglaise na het koken?"
        },
        options: [
          { en: "To remove vanilla bean pieces and any lumps", es: "Para eliminar trozos de vaina de vainilla y cualquier grumo", de: "Um Vanilleschoten-Stücke und Klumpen zu entfernen", nl: "Om vanillestokje stukjes en klontjes te verwijderen" },
          { en: "To add air to the mixture", es: "Para agregar aire a la mezcla", de: "Um Luft in die Mischung zu bringen", nl: "Om lucht aan het mengsel toe te voegen" },
          { en: "To cool it faster", es: "Para enfriarla más rápido", de: "Um sie schneller abzukühlen", nl: "Om het sneller af te koelen" },
          { en: "To concentrate the flavor", es: "Para concentrar el sabor", de: "Um den Geschmack zu konzentrieren", nl: "Om de smaak te concentreren" }
        ],
        correct: 0,
        explanation: {
          en: "Straining removes vanilla bean pieces, any small lumps of coagulated egg, or other particles, ensuring a perfectly smooth, silky custard sauce.",
          es: "Colar elimina trozos de vaina de vainilla, cualquier pequeño grumo de huevo coagulado u otras partículas, asegurando una salsa de natilla perfectamente suave y sedosa.",
          de: "Das Durchseihen entfernt Vanilleschoten-Stücke, kleine Klumpen von koaguliertem Ei oder andere Partikel und gewährleistet eine perfekt glatte, seidige Pudding-Sauce.",
          nl: "Zeven verwijdert vanillestokje stukjes, kleine klontjes gestold ei of andere deeltjes, wat een perfect gladde, zijdeachtige custardsaus verzekert."
        }
      },
      {
        question: {
          en: "What is pot de crème?",
          es: "¿Qué es pot de crème?",
          de: "Was ist Pot de Crème?",
          nl: "Wat is pot de crème?"
        },
        options: [
          { en: "A stirred custard sauce", es: "Una salsa de natilla revuelta", de: "Eine gerührte Pudding-Sauce", nl: "Een geroerde custardsaus" },
          { en: "A baked custard dessert served in individual pots", es: "Un postre de natilla horneada servido en recipientes individuales", de: "Ein gebackenes Pudding-Dessert, serviert in einzelnen Töpfchen", nl: "Een gebakken custard dessert geserveerd in individuele potjes" },
          { en: "A frozen custard", es: "Una natilla congelada", de: "Ein gefrorener Pudding", nl: "Een bevroren custard" },
          { en: "A whipped custard foam", es: "Una espuma de natilla batida", de: "Ein geschlagener Pudding-Schaum", nl: "Een geklopte custard schuim" }
        ],
        correct: 1,
        explanation: {
          en: "Pot de crème is a rich, baked custard dessert traditionally served in small individual ceramic or glass pots. It's similar to crème brûlée but without the caramelized sugar top.",
          es: "Pot de crème es un postre rico de natilla horneada tradicionalmente servido en pequeños recipientes individuales de cerámica o vidrio. Es similar a la crème brûlée pero sin la cobertura de azúcar caramelizado.",
          de: "Pot de Crème ist ein reichhaltiges, gebackenes Pudding-Dessert, das traditionell in kleinen einzelnen Keramik- oder Glastöpfchen serviert wird. Es ähnelt Crème brûlée, aber ohne die karamelisierte Zuckeroberfläche.",
          nl: "Pot de crème is een rijk, gebakken custard dessert dat traditioneel geserveerd wordt in kleine individuele keramische of glazen potjes. Het lijkt op crème brûlée maar zonder de gekarameliseerde suiker bovenkant."
        }
      },
      {
        question: {
          en: "What distinguishes crème caramel from crème brûlée?",
          es: "¿Qué distingue la crème caramel de la crème brûlée?",
          de: "Was unterscheidet Crème Caramel von Crème brûlée?",
          nl: "Wat onderscheidt crème caramel van crème brûlée?"
        },
        options: [
          { en: "Crème caramel has liquid caramel at the bottom, crème brûlée has hard caramel on top", es: "Crème caramel tiene caramelo líquido en el fondo, crème brûlée tiene caramelo duro encima", de: "Crème Caramel hat flüssigen Karamell am Boden, Crème brûlée hat harten Karamell oben", nl: "Crème caramel heeft vloeibare karamel op de bodem, crème brûlée heeft harde karamel bovenop" },
          { en: "They use different custard bases", es: "Usan bases de natilla diferentes", de: "Sie verwenden verschiedene Pudding-Basen", nl: "Ze gebruiken verschillende custard bases" },
          { en: "Crème caramel is served hot, crème brûlée cold", es: "Crème caramel se sirve caliente, crème brûlée frío", de: "Crème Caramel wird heiß serviert, Crème brûlée kalt", nl: "Crème caramel wordt warm geserveerd, crème brûlée koud" },
          { en: "They are the same dessert", es: "Son el mismo postre", de: "Sie sind dasselbe Dessert", nl: "Het zijn hetzelfde dessert" }
        ],
        correct: 0,
        explanation: {
          en: "Crème caramel has liquid caramel at the bottom of the mold that becomes a sauce when unmolded, while crème brûlée has a hard caramelized sugar crust on top.",
          es: "Crème caramel tiene caramelo líquido en el fondo del molde que se convierte en salsa al desmoldar, mientras que crème brûlée tiene una costra dura de azúcar caramelizado encima.",
          de: "Crème Caramel hat flüssigen Karamell am Boden der Form, der beim Stürzen zu einer Sauce wird, während Crème brûlée eine harte karamelisierte Zuckerkruste oben hat.",
          nl: "Crème caramel heeft vloeibare karamel op de bodem van de vorm die een saus wordt bij het storten, terwijl crème brûlée een harde gekarameliseerde suiker korst bovenop heeft."
        }
      },
      {
        question: {
          en: "What is the ideal consistency for properly made zabaglione?",
          es: "¿Cuál es la consistencia ideal para zabaglione bien hecho?",
          de: "Was ist die ideale Konsistenz für richtig gemachtes Zabaglione?",
          nl: "Wat is de ideale consistentie voor goed gemaakte zabaglione?"
        },
        options: [
          { en: "Thick and heavy like pudding", es: "Espeso y pesado como pudín", de: "Dick und schwer wie Pudding", nl: "Dik en zwaar zoals pudding" },
          { en: "Light, foamy, and tripled in volume", es: "Ligero, espumoso y triplicado en volumen", de: "Leicht, schaumig und verdreifacht im Volumen", nl: "Licht, schuimig en verdrievoudigd in volume" },
          { en: "Thin and pourable like cream", es: "Fino y vertible como nata", de: "Dünn und gießbar wie Sahne", nl: "Dun en gietbaar zoals room" },
          { en: "Firm and sliceable", es: "Firme y rebanable", de: "Fest und schneidbar", nl: "Stevig en snijdbaar" }
        ],
        correct: 1,
        explanation: {
          en: "Properly made zabaglione should be light, foamy, and increase to about three times its original volume. It should hold soft peaks when the whisk is lifted.",
          es: "El zabaglione bien hecho debe ser ligero, espumoso y aumentar a aproximadamente tres veces su volumen original. Debe mantener picos suaves cuando se levanta el batidor.",
          de: "Richtig gemachtes Zabaglione sollte leicht, schaumig sein und auf etwa das Dreifache seines ursprünglichen Volumens anwachsen. Es sollte weiche Spitzen halten, wenn der Schneebesen angehoben wird.",
          nl: "Goed gemaakte zabaglione moet licht, schuimig zijn en groeien tot ongeveer drie keer het oorspronkelijke volume. Het moet zachte pieken houden wanneer de klopper wordt opgetild."
        }
      },
      {
        question: {
          en: "What causes zabaglione to collapse or become flat?",
          es: "¿Qué causa que el zabaglione se desplome o se vuelva plano?",
          de: "Was verursacht, dass Zabaglione zusammenfällt oder flach wird?",
          nl: "Wat veroorzaakt dat zabaglione instort of plat wordt?"
        },
        options: [
          { en: "Too much sugar", es: "Demasiada azúcar", de: "Zu viel Zucker", nl: "Te veel suiker" },
          { en: "Overcooking or insufficient whisking", es: "Cocción excesiva o batido insuficiente", de: "Überkochen oder unzureichendes Schlagen", nl: "Overkoken of onvoldoende kloppen" },
          { en: "Wrong type of wine", es: "Tipo de vino incorrecto", de: "Falscher Weintyp", nl: "Verkeerd type wijn" },
          { en: "Serving temperature too cold", es: "Temperatura de servicio demasiado fría", de: "Serviertemperatur zu kalt", nl: "Serveertemperatuur te koud" }
        ],
        correct: 1,
        explanation: {
          en: "Zabaglione collapses if overcooked (proteins coagulate too much) or if not whisked vigorously enough to incorporate sufficient air. Proper technique maintains the foam structure.",
          es: "El zabaglione se desploma si se sobrecocina (las proteínas coagulan demasiado) o si no se bate vigorosamente para incorporar suficiente aire. La técnica adecuada mantiene la estructura de espuma.",
          de: "Zabaglione fällt zusammen, wenn es überkocht wird (Proteine koagulieren zu stark) oder wenn nicht kräftig genug geschlagen wird, um ausreichend Luft einzuarbeiten. Die richtige Technik erhält die Schaumstruktur.",
          nl: "Zabaglione stortt in als het overkookt wordt (eiwitten coaguleren te veel) of als het niet krachtig genoeg geklopt wordt om voldoende lucht in te werken. Juiste techniek behoudt de schuimstructuur."
        }
      },
      {
        question: {
          en: "What is the traditional serving method for zabaglione?",
          es: "¿Cuál es el método tradicional de servir zabaglione?",
          de: "Was ist die traditionelle Serviermethode für Zabaglione?",
          nl: "Wat is de traditionele serveer methode voor zabaglione?"
        },
        options: [
          { en: "Chilled in glasses", es: "Enfriado en vasos", de: "Gekühlt in Gläsern", nl: "Gekoeld in glazen" },
          { en: "Warm, immediately after cooking", es: "Caliente, inmediatamente después de cocinar", de: "Warm, sofort nach dem Kochen", nl: "Warm, onmiddellijk na het koken" },
          { en: "At room temperature", es: "A temperatura ambiente", de: "Bei Raumtemperatur", nl: "Op kamertemperatuur" },
          { en: "Frozen as a semifreddo", es: "Congelado como semifreddo", de: "Gefroren als Semifreddo", nl: "Bevroren als semifreddo" }
        ],
        correct: 1,
        explanation: {
          en: "Zabaglione is traditionally served warm, immediately after cooking, while it's still light and foamy. It can be served over fruits or lady fingers.",
          es: "El zabaglione se sirve tradicionalmente caliente, inmediatamente después de cocinar, mientras aún está ligero y espumoso. Puede servirse sobre frutas o bizcochos de soletilla.",
          de: "Zabaglione wird traditionell warm serviert, sofort nach dem Kochen, während es noch leicht und schaumig ist. Es kann über Früchten oder Löffelbiskuits serviert werden.",
          nl: "Zabaglione wordt traditioneel warm geserveerd, onmiddellijk na het koken, terwijl het nog licht en schuimig is. Het kan geserveerd worden over fruit of lange vingers."
        }
      },
      {
        question: {
          en: "What is the main difference between crème anglaise and regular milk custard?",
          es: "¿Cuál es la diferencia principal entre crème anglaise y natilla de leche regular?",
          de: "Was ist der Hauptunterschied zwischen Crème Anglaise und normalem Milchpudding?",
          nl: "Wat is het belangrijkste verschil tussen crème anglaise en gewone melkcustard?"
        },
        options: [
          { en: "Crème anglaise uses only egg yolks, not whole eggs", es: "Crème anglaise usa solo yemas de huevo, no huevos enteros", de: "Crème Anglaise verwendet nur Eigelb, nicht ganze Eier", nl: "Crème anglaise gebruikt alleen eidooiers, geen hele eieren" },
          { en: "Crème anglaise is always served cold", es: "Crème anglaise siempre se sirve frío", de: "Crème Anglaise wird immer kalt serviert", nl: "Crème anglaise wordt altijd koud geserveerd" },
          { en: "Crème anglaise contains cream instead of milk", es: "Crème anglaise contiene nata en lugar de leche", de: "Crème Anglaise enthält Sahne statt Milch", nl: "Crème anglaise bevat room in plaats van melk" },
          { en: "Crème anglaise is thicker", es: "Crème anglaise es más espesa", de: "Crème Anglaise ist dicker", nl: "Crème anglaise is dikker" }
        ],
        correct: 0,
        explanation: {
          en: "Crème anglaise traditionally uses only egg yolks (not whole eggs) which creates a richer, more luxurious texture and golden color. The yolks also provide more emulsification.",
          es: "La crème anglaise tradicionalmente usa solo yemas de huevo (no huevos enteros) lo que crea una textura más rica y lujosa y color dorado. Las yemas también proporcionan más emulsificación.",
          de: "Crème Anglaise verwendet traditionell nur Eigelb (nicht ganze Eier), was eine reichhaltigere, luxuriösere Textur und goldene Farbe schafft. Das Eigelb bietet auch mehr Emulgierung.",
          nl: "Crème anglaise gebruikt traditioneel alleen eidooiers (geen hele eieren) wat een rijkere, luxueuzere textuur en gouden kleur creëert. De dooiers bieden ook meer emulgering."
        }
      },
      {
        question: {
          en: "What is the purpose of adding butter to finished crème anglaise?",
          es: "¿Cuál es el propósito de agregar mantequilla a la crème anglaise terminada?",
          de: "Was ist der Zweck, Butter zu fertigem Crème Anglaise hinzuzufügen?",
          nl: "Wat is het doel van het toevoegen van boter aan afgewerkte crème anglaise?"
        },
        options: [
          { en: "To make it thicker", es: "Para hacerla más espesa", de: "Um sie dicker zu machen", nl: "Om het dikker te maken" },
          { en: "To add richness and create a glossy finish", es: "Para agregar riqueza y crear un acabado brillante", de: "Um Reichhaltigkeit hinzuzufügen und einen glänzenden Abschluss zu schaffen", nl: "Om rijkdom toe te voegen en een glanzende afwerking te creëren" },
          { en: "To stabilize the emulsion", es: "Para estabilizar la emulsión", de: "Um die Emulsion zu stabilisieren", nl: "Om de emulsie te stabiliseren" },
          { en: "To prevent skin formation", es: "Para prevenir formación de piel", de: "Um Hautbildung zu verhindern", nl: "Om velvorming te voorkomen" }
        ],
        correct: 1,
        explanation: {
          en: "Adding a small amount of cold butter to finished crème anglaise enriches it and creates a beautiful glossy finish. The butter should be whisked in while the custard is still warm.",
          es: "Agregar una pequeña cantidad de mantequilla fría a la crème anglaise terminada la enriquece y crea un hermoso acabado brillante. La mantequilla debe batirse mientras la natilla aún está tibia.",
          de: "Das Hinzufügen einer kleinen Menge kalter Butter zu fertigem Crème Anglaise bereichert es und schafft einen schönen glänzenden Abschluss. Die Butter sollte eingeschlagen werden, während der Pudding noch warm ist.",
          nl: "Het toevoegen van een kleine hoeveelheid koude boter aan afgewerkte crème anglaise verrijkt het en creëert een prachtige glanzende afwerking. De boter moet ingeklopt worden terwijl de custard nog warm is."
        }
      },
      {
        question: {
          en: "What is semifreddo and how does it relate to zabaglione?",
          es: "¿Qué es semifreddo y cómo se relaciona con zabaglione?",
          de: "Was ist Semifreddo und wie hängt es mit Zabaglione zusammen?",
          nl: "Wat is semifreddo en hoe houdt het verband met zabaglione?"
        },
        options: [
          { en: "Semifreddo is frozen zabaglione", es: "Semifreddo es zabaglione congelado", de: "Semifreddo ist gefrorenes Zabaglione", nl: "Semifreddo is bevroren zabaglione" },
          { en: "Semifreddo is zabaglione with whipped cream added, then frozen", es: "Semifreddo es zabaglione con nata montada añadida, luego congelado", de: "Semifreddo ist Zabaglione mit hinzugefügter Schlagsahne, dann gefroren", nl: "Semifreddo is zabaglione met slagroom toegevoegd, dan bevroren" },
          { en: "They are completely different desserts", es: "Son postres completamente diferentes", de: "Sie sind völlig verschiedene Desserts", nl: "Het zijn volledig verschillende desserts" },
          { en: "Semifreddo is warm zabaglione", es: "Semifreddo es zabaglione caliente", de: "Semifreddo ist warmes Zabaglione", nl: "Semifreddo is warme zabaglione" }
        ],
        correct: 1,
        explanation: {
          en: "Semifreddo is made by folding whipped cream into cooled zabaglione, then freezing it. The result is a light, airy frozen dessert that doesn't become rock hard like ice cream.",
          es: "El semifreddo se hace incorporando nata montada al zabaglione enfriado, luego congelándolo. El resultado es un postre congelado ligero y aireado que no se vuelve duro como roca como el helado.",
          de: "Semifreddo wird hergestellt, indem Schlagsahne in abgekühltes Zabaglione eingefaltet und dann eingefroren wird. Das Ergebnis ist ein leichtes, luftiges gefrorenes Dessert, das nicht steinhart wie Eis wird.",
          nl: "Semifreddo wordt gemaakt door slagroom in afgekoelde zabaglione te vouwen, dan in te vriezen. Het resultaat is een licht, luchtig bevroren dessert dat niet steenhard wordt zoals ijs."
        }
      },
      {
        question: {
          en: "What is the critical timing consideration when making crème anglaise?",
          es: "¿Cuál es la consideración crítica de tiempo al hacer crème anglaise?",
          de: "Was ist die kritische Zeitbetrachtung beim Herstellen von Crème Anglaise?",
          nl: "Wat is de kritieke timing overweging bij het maken van crème anglaise?"
        },
        options: [
          { en: "Cook as quickly as possible", es: "Cocinar lo más rápido posible", de: "So schnell wie möglich kochen", nl: "Zo snel mogelijk koken" },
          { en: "Stop cooking immediately when it reaches nappe consistency", es: "Parar de cocinar inmediatamente cuando alcance consistencia nappe", de: "Sofort aufhören zu kochen, wenn es Nappe-Konsistenz erreicht", nl: "Onmiddellijk stoppen met koken wanneer het nappe consistentie bereikt" },
          { en: "Continue cooking for 10 minutes after thickening", es: "Continuar cocinando por 10 minutos después de espesar", de: "10 Minuten nach dem Verdicken weiterkochen", nl: "10 minuten doorkoken na het verdikken" },
          { en: "Timing doesn't matter", es: "El tiempo no importa", de: "Timing spielt keine Rolle", nl: "Timing maakt niet uit" }
        ],
        correct: 1,
        explanation: {
          en: "The critical timing is to stop cooking immediately when crème anglaise reaches nappe consistency. Even seconds of overcooking can cause it to curdle and separate.",
          es: "El momento crítico es parar de cocinar inmediatamente cuando la crème anglaise alcanza consistencia nappe. Incluso segundos de exceso de cocción pueden hacer que se cuaje y separe.",
          de: "Das kritische Timing ist, sofort aufzuhören zu kochen, wenn Crème Anglaise Nappe-Konsistenz erreicht. Sogar Sekunden des Überkochens können dazu führen, dass es gerinnt und sich trennt.",
          nl: "De kritieke timing is om onmiddellijk te stoppen met koken wanneer crème anglaise nappe consistentie bereikt. Zelfs seconden overkoken kan ervoor zorgen dat het klontert en scheidt."
        }
      },
      {
        question: {
          en: "What flavor variations can be made with zabaglione besides the traditional Marsala version?",
          es: "¿Qué variaciones de sabor se pueden hacer con zabaglione además de la versión tradicional de Marsala?",
          de: "Welche Geschmacksvariationen können mit Zabaglione neben der traditionellen Marsala-Version gemacht werden?",
          nl: "Welke smaak variaties kunnen gemaakt worden met zabaglione naast de traditionele Marsala versie?"
        },
        options: [
          { en: "Champagne, Moscato, or fruit liqueurs", es: "Champán, Moscato o licores de frutas", de: "Champagner, Moscato oder Fruchtliköre", nl: "Champagne, Moscato of fruitlikeuren" },
          { en: "Only wine-based variations are possible", es: "Solo son posibles variaciones basadas en vino", de: "Nur weinbasierte Variationen sind möglich", nl: "Alleen wijn-gebaseerde variaties zijn mogelijk" },
          { en: "No variations are traditional", es: "Ninguna variación es tradicional", de: "Keine Variationen sind traditionell", nl: "Geen variaties zijn traditioneel" },
          { en: "Only chocolate variations work", es: "Solo funcionan las variaciones de chocolate", de: "Nur Schokoladenvariationen funktionieren", nl: "Alleen chocolade variaties werken" }
        ],
        correct: 0,
        explanation: {
          en: "Modern zabaglione variations include champagne sabayon, Moscato zabaglione, or versions made with fruit liqueurs like Grand Marnier or Cointreau, each bringing unique flavors.",
          es: "Las variaciones modernas de zabaglione incluyen sabayon de champán, zabaglione de Moscato, o versiones hechas con licores de frutas como Grand Marnier o Cointreau, cada uno aportando sabores únicos.",
          de: "Moderne Zabaglione-Variationen umfassen Champagner-Sabayon, Moscato-Zabaglione oder Versionen mit Fruchtlikören wie Grand Marnier oder Cointreau, die jeweils einzigartige Aromen bringen.",
          nl: "Moderne zabaglione variaties omvatten champagne sabayon, Moscato zabaglione, of versies gemaakt met fruitlikeuren zoals Grand Marnier of Cointreau, elk met unieke smaken."
        }
      },
      {
        question: {
          en: "What is the ideal ratio of egg yolks to milk for crème brûlée?",
          es: "¿Cuál es la proporción ideal de yemas de huevo a leche para crème brûlée?",
          de: "Was ist das ideale Verhältnis von Eigelb zu Milch für Crème Brûlée?",
          nl: "Wat is de ideale verhouding van eidooiers tot melk voor crème brûlée?"
        },
        options: [
          { en: "6 yolks per 2 cups (500ml) cream", es: "6 yemas por 2 tazas (500ml) de nata", de: "6 Eigelb pro 2 Tassen (500ml) Sahne", nl: "6 dooiers per 2 kopjes (500ml) room" },
          { en: "3 yolks per 2 cups (500ml) cream", es: "3 yemas por 2 tazas (500ml) de nata", de: "3 Eigelb pro 2 Tassen (500ml) Sahne", nl: "3 dooiers per 2 kopjes (500ml) room" },
          { en: "12 yolks per 2 cups (500ml) cream", es: "12 yemas por 2 tazas (500ml) de nata", de: "12 Eigelb pro 2 Tassen (500ml) Sahne", nl: "12 dooiers per 2 kopjes (500ml) room" },
          { en: "1 yolk per 2 cups (500ml) cream", es: "1 yema por 2 tazas (500ml) de nata", de: "1 Eigelb pro 2 Tassen (500ml) Sahne", nl: "1 dooier per 2 kopjes (500ml) room" }
        ],
        correct: 0,
        explanation: {
          en: "The classic ratio for crème brûlée is 6 egg yolks to 2 cups of heavy cream, providing the perfect richness and setting ability for this iconic dessert.",
          es: "La proporción clásica para crème brûlée es 6 yemas de huevo por 2 tazas de nata espesa, proporcionando la riqueza perfecta y capacidad de cuajado para este postre icónico.",
          de: "Das klassische Verhältnis für Crème Brûlée ist 6 Eigelb zu 2 Tassen schwerer Sahne, was die perfekte Reichhaltigkeit und Festigkeitsfähigkeit für dieses ikonische Dessert bietet.",
          nl: "De klassieke verhouding voor crème brûlée is 6 eidooiers op 2 kopjes slagroom, wat de perfecte rijkheid en stollingsvermogen biedt voor dit iconische dessert."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level4;
  } else {
    window.custardsLevel4 = level4;
  }
})();