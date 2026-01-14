// Quiz Template - Level 2: Dessert - Donuts
(function() {
  const level2 = {
    name: {
      en: "Donuts - Level 2",
      es: "Donas - Nivel 2",
      de: "Donuts - Level 2",
      nl: "Donuts - Level 2"
    },
    questions: [
      {
        question: {
          en: "What is the optimal oil temperature for frying yeast donuts?",
          es: "¿Cuál es la temperatura óptima del aceite para freír donas de levadura?",
          de: "Was ist die optimale Öltemperatur zum Frittieren von Hefe-Donuts?",
          nl: "Wat is de optimale olietemperatuur voor het frituren van gist donuts?"
        },
        options: [
          { en: "150-160°C (300-320°F)", es: "150-160°C (300-320°F)", de: "150-160°C (300-320°F)", nl: "150-160°C (300-320°F)" },
          { en: "175-185°C (347-365°F)", es: "175-185°C (347-365°F)", de: "175-185°C (347-365°F)", nl: "175-185°C (347-365°F)" },
          { en: "190-200°C (374-392°F)", es: "190-200°C (374-392°F)", de: "190-200°C (374-392°F)", nl: "190-200°C (374-392°F)" },
          { en: "210-220°C (410-428°F)", es: "210-220°C (410-428°F)", de: "210-220°C (410-428°F)", nl: "210-220°C (410-428°F)" }
        ],
        correct: 1,
        explanation: {
          en: "175-185°C is optimal for yeast donuts. This temperature creates proper expansion, golden color, and prevents oil absorption while ensuring the interior cooks through.",
          es: "175-185°C es óptimo para donas de levadura. Esta temperatura crea expansión adecuada, color dorado y previene absorción de aceite mientras asegura que el interior se cocine completamente.",
          de: "175-185°C ist optimal für Hefe-Donuts. Diese Temperatur erzeugt richtige Ausdehnung, goldene Farbe und verhindert Ölaufnahme, während das Innere durchgart.",
          nl: "175-185°C is optimaal voor gist donuts. Deze temperatuur zorgt voor goede uitzetting, gouden kleur en voorkomt olieabsorptie terwijl de binnenkant gaar wordt."
        }
      },
      {
        question: {
          en: "Which ingredient ratio is crucial for achieving proper gluten development in donut dough?",
          es: "¿Qué proporción de ingredientes es crucial para lograr el desarrollo adecuado del gluten en la masa de donas?",
          de: "Welches Zutatenverhältnis ist entscheidend für die richtige Glutenentwicklung im Donut-Teig?",
          nl: "Welke ingrediëntenverhouding is cruciaal voor goede glutenontwikkeling in donutdeeg?"
        },
        options: [
          { en: "Sugar to flour ratio", es: "Proporción azúcar a harina", de: "Zucker-Mehl-Verhältnis", nl: "Suiker tot bloem verhouding" },
          { en: "Fat to liquid ratio", es: "Proporción grasa a líquido", de: "Fett-Flüssigkeit-Verhältnis", nl: "Vet tot vloeistof verhouding" },
          { en: "Protein content of flour to liquid hydration", es: "Contenido de proteína de la harina a hidratación líquida", de: "Proteingehalt des Mehls zur Flüssigkeitshydratation", nl: "Eiwitgehalte van bloem tot vloeistofhydratatie" },
          { en: "Yeast to salt ratio", es: "Proporción levadura a sal", de: "Hefe-Salz-Verhältnis", nl: "Gist tot zout verhouding" }
        ],
        correct: 2,
        explanation: {
          en: "The protein content of flour and liquid hydration ratio determines gluten development. Higher protein flour needs more liquid for proper gluten network formation in donut dough.",
          es: "El contenido de proteína de la harina y la proporción de hidratación líquida determina el desarrollo del gluten. La harina con mayor proteína necesita más líquido para la formación adecuada de la red de gluten en la masa de donas.",
          de: "Der Proteingehalt des Mehls und das Flüssigkeitshydratationsverhältnis bestimmen die Glutenentwicklung. Proteinreicheres Mehl benötigt mehr Flüssigkeit für die richtige Glutennetzwerkbildung im Donut-Teig.",
          nl: "Het eiwitgehalte van bloem en de vloeistofhydratieverhouding bepalen glutenontwikkeling. Bloem met hoger eiwit heeft meer vloeistof nodig voor goede glutennetwerkvorming in donutdeeg."
        }
      },
      {
        question: {
          en: "What causes donuts to absorb excessive oil during frying?",
          es: "¿Qué causa que las donas absorban aceite excesivo durante la fritura?",
          de: "Was verursacht, dass Donuts beim Frittieren übermäßig Öl absorbieren?",
          nl: "Wat veroorzaakt dat donuts teveel olie absorberen tijdens het frituren?"
        },
        options: [
          { en: "Too much yeast in the dough", es: "Demasiada levadura en la masa", de: "Zu viel Hefe im Teig", nl: "Te veel gist in het deeg" },
          { en: "Oil temperature too low or overcrowding", es: "Temperatura del aceite muy baja o sobrepoblación", de: "Öltemperatur zu niedrig oder Überfüllung", nl: "Olietemperatuur te laag of overbevolking" },
          { en: "Adding too much sugar", es: "Agregar demasiada azúcar", de: "Zu viel Zucker hinzufügen", nl: "Te veel suiker toevoegen" },
          { en: "Using cake flour instead of bread flour", es: "Usar harina para pasteles en lugar de harina para pan", de: "Kuchenmehl statt Brotmehl verwenden", nl: "Taartbloem gebruiken in plaats van broodbloem" }
        ],
        correct: 1,
        explanation: {
          en: "Low oil temperature causes slow cooking and excessive oil absorption. Overcrowding lowers oil temperature and prevents proper heat circulation, leading to greasy donuts.",
          es: "La temperatura baja del aceite causa cocción lenta y absorción excesiva de aceite. La sobrepoblación reduce la temperatura del aceite y previene la circulación adecuada del calor, resultando en donas grasosas.",
          de: "Niedrige Öltemperatur verursacht langsames Garen und übermäßige Ölaufnahme. Überfüllung senkt die Öltemperatur und verhindert richtige Wärmezirkulation, was zu fettigen Donuts führt.",
          nl: "Lage olietemperatuur veroorzaakt langzaam koken en teveel olieabsorptie. Overbevolking verlaagt de olietemperatuur en voorkomt goede warmtecirculatie, wat leidt tot vette donuts."
        }
      },
      {
        question: {
          en: "What is the purpose of the 'windowpane test' in donut dough preparation?",
          es: "¿Cuál es el propósito de la 'prueba de ventana' en la preparación de masa de donas?",
          de: "Was ist der Zweck des 'Fensterscheibentests' bei der Donut-Teigzubereitung?",
          nl: "Wat is het doel van de 'windowpane test' bij de bereiding van donutdeeg?"
        },
        options: [
          { en: "To test sugar dissolution", es: "Para probar la disolución del azúcar", de: "Um die Zuckerauflösung zu testen", nl: "Om suikeroplosing te testen" },
          { en: "To check proper gluten development", es: "Para verificar el desarrollo adecuado del gluten", de: "Um die richtige Glutenentwicklung zu überprüfen", nl: "Om goede glutenontwikkeling te controleren" },
          { en: "To measure dough hydration", es: "Para medir la hidratación de la masa", de: "Um die Teighydratation zu messen", nl: "Om deeghydratatie te meten" },
          { en: "To determine yeast activity", es: "Para determinar la actividad de la levadura", de: "Um die Hefeaktivität zu bestimmen", nl: "Om gistactiviteit te bepalen" }
        ],
        correct: 1,
        explanation: {
          en: "The windowpane test checks if gluten has developed enough by stretching dough thin enough to see through. Proper gluten development ensures donuts hold their shape and have good texture.",
          es: "La prueba de ventana verifica si el gluten se ha desarrollado lo suficiente estirando la masa hasta que sea lo suficientemente delgada para ver a través. El desarrollo adecuado del gluten asegura que las donas mantengan su forma y tengan buena textura.",
          de: "Der Fensterscheibentest überprüft, ob sich Gluten ausreichend entwickelt hat, indem der Teig dünn genug gedehnt wird, um hindurchzusehen. Richtige Glutenentwicklung stellt sicher, dass Donuts ihre Form behalten und gute Textur haben.",
          nl: "De windowpane test controleert of gluten voldoende ontwikkeld is door deeg dun genoeg uit te rekken om doorheen te kijken. Goede glutenontwikkeling zorgt ervoor dat donuts hun vorm behouden en goede textuur hebben."
        }
      },
      {
        question: {
          en: "Why do cake donuts typically have a denser texture than yeast donuts?",
          es: "¿Por qué las donas de bizcocho típicamente tienen una textura más densa que las donas de levadura?",
          de: "Warum haben Kuchen-Donuts typischerweise eine dichtere Textur als Hefe-Donuts?",
          nl: "Waarom hebben cake donuts meestal een dichtere textuur dan gist donuts?"
        },
        options: [
          { en: "They use more sugar", es: "Usan más azúcar", de: "Sie verwenden mehr Zucker", nl: "Ze gebruiken meer suiker" },
          { en: "They rely on chemical leavening instead of biological fermentation", es: "Dependen de levadura química en lugar de fermentación biológica", de: "Sie verlassen sich auf chemische Triebmittel statt biologische Fermentation", nl: "Ze vertrouwen op chemische rijsmiddelen in plaats van biologische fermentatie" },
          { en: "They are fried at lower temperatures", es: "Se fríen a temperaturas más bajas", de: "Sie werden bei niedrigeren Temperaturen frittiert", nl: "Ze worden gefrituurd op lagere temperaturen" },
          { en: "They contain more eggs", es: "Contienen más huevos", de: "Sie enthalten mehr Eier", nl: "Ze bevatten meer eieren" }
        ],
        correct: 1,
        explanation: {
          en: "Cake donuts use baking powder or baking soda for leavening, which creates a quick chemical reaction producing less air than the slow biological fermentation process of yeast donuts.",
          es: "Las donas de bizcocho usan polvo de hornear o bicarbonato de sodio para levar, lo que crea una reacción química rápida que produce menos aire que el proceso lento de fermentación biológica de las donas de levadura.",
          de: "Kuchen-Donuts verwenden Backpulver oder Natron zum Treiben, was eine schnelle chemische Reaktion erzeugt, die weniger Luft produziert als der langsame biologische Fermentationsprozess von Hefe-Donuts.",
          nl: "Cake donuts gebruiken bakpoeder of zuiveringszout voor rijzing, wat een snelle chemische reactie creëert die minder lucht produceert dan het langzame biologische fermentatieproces van gist donuts."
        }
      },
      {
        question: {
          en: "What technique helps achieve uniform donut shapes when cutting dough?",
          es: "¿Qué técnica ayuda a lograr formas uniformes de donas al cortar la masa?",
          de: "Welche Technik hilft dabei, gleichmäßige Donut-Formen beim Teigschneiden zu erreichen?",
          nl: "Welke techniek helpt uniforme donutvormen te krijgen bij het snijden van deeg?"
        },
        options: [
          { en: "Rolling dough to exact thickness and using sharp cutters", es: "Enrollar la masa a espesor exacto y usar cortadores afilados", de: "Teig auf exakte Dicke ausrollen und scharfe Ausstecher verwenden", nl: "Deeg tot exacte dikte uitrollen en scherpe snijders gebruiken" },
          { en: "Stretching by hand for each donut", es: "Estirar a mano para cada dona", de: "Von Hand für jeden Donut dehnen", nl: "Met de hand uitrekken voor elke donut" },
          { en: "Using only plastic tools", es: "Usar solo herramientas de plástico", de: "Nur Plastikwerkzeuge verwenden", nl: "Alleen plastic gereedschap gebruiken" },
          { en: "Cutting while dough is still warm", es: "Cortar mientras la masa aún esté tibia", de: "Schneiden, während der Teig noch warm ist", nl: "Snijden terwijl deeg nog warm is" }
        ],
        correct: 0,
        explanation: {
          en: "Rolling to uniform thickness ensures consistent cooking times and portion sizes. Sharp cutters make clean cuts without compressing edges, which can prevent proper rising.",
          es: "Enrollar a espesor uniforme asegura tiempos de cocción consistentes y tamaños de porción. Los cortadores afilados hacen cortes limpios sin comprimir bordes, lo que puede prevenir el levado adecuado.",
          de: "Ausrollen auf einheitliche Dicke gewährleistet konsistente Garzeiten und Portionsgrößen. Scharfe Ausstecher machen saubere Schnitte ohne Kantenkompression, was richtiges Aufgehen verhindern kann.",
          nl: "Uitrollen tot uniforme dikte zorgt voor consistente kooktijden en portiegroottes. Scherpe snijders maken schone sneden zonder randencompressie, wat goed rijzen kan verhinderen."
        }
      },
      {
        question: {
          en: "What causes the characteristic 'crumb' structure in properly made yeast donuts?",
          es: "¿Qué causa la estructura característica de 'miga' en donas de levadura bien hechas?",
          de: "Was verursacht die charakteristische 'Krumen'-Struktur in richtig gemachten Hefe-Donuts?",
          nl: "Wat veroorzaakt de karakteristieke 'kruimel' structuur in goed gemaakte gist donuts?"
        },
        options: [
          { en: "High sugar content", es: "Alto contenido de azúcar", de: "Hoher Zuckergehalt", nl: "Hoog suikergehalte" },
          { en: "Carbon dioxide bubbles from yeast fermentation", es: "Burbujas de dióxido de carbono de la fermentación de levadura", de: "Kohlendioxidblasen aus der Hefefermentation", nl: "Kooldioxide bubbels van gistfermentatie" },
          { en: "Steam from high water content", es: "Vapor de alto contenido de agua", de: "Dampf aus hohem Wassergehalt", nl: "Stoom van hoog watergehalte" },
          { en: "Oil penetration during frying", es: "Penetración de aceite durante la fritura", de: "Öldurchdringung beim Frittieren", nl: "Oliedoordinging tijdens frituren" }
        ],
        correct: 1,
        explanation: {
          en: "Yeast fermentation produces carbon dioxide gas bubbles that create the light, airy crumb structure. These gas pockets expand during frying, creating the characteristic texture.",
          es: "La fermentación de levadura produce burbujas de gas dióxido de carbono que crean la estructura ligera y aireada de la miga. Estas bolsas de gas se expanden durante la fritura, creando la textura característica.",
          de: "Hefefermentation produziert Kohlendioxid-Gasblasen, die die leichte, luftige Krumenstruktur erzeugen. Diese Gasbläschen dehnen sich beim Frittieren aus und schaffen die charakteristische Textur.",
          nl: "Gistfermentatie produceert kooldioxide gasbubbels die de lichte, luchtige kruimelstructuur creëren. Deze gasholtes zetten uit tijdens het frituren, wat de karakteristieke textuur creëert."
        }
      },
      {
        question: {
          en: "How does over-proofing affect donut quality during frying?",
          es: "¿Cómo afecta el sobre-fermentado la calidad de las donas durante la fritura?",
          de: "Wie beeinflusst Übergärung die Donut-Qualität beim Frittieren?",
          nl: "Hoe beïnvloedt overrijzing de kwaliteit van donuts tijdens het frituren?"
        },
        options: [
          { en: "Creates superior texture and flavor", es: "Crea textura y sabor superiores", de: "Erzeugt überlegene Textur und Geschmack", nl: "Creëert superieure textuur en smaak" },
          { en: "Makes donuts more resistant to oil absorption", es: "Hace que las donas sean más resistentes a la absorción de aceite", de: "Macht Donuts widerstandsfähiger gegen Ölaufnahme", nl: "Maakt donuts meer resistent tegen olieabsorptie" },
          { en: "Causes weak gluten structure and potential collapse", es: "Causa estructura de gluten débil y posible colapso", de: "Verursacht schwache Glutenstruktur und möglichen Kollaps", nl: "Veroorzaakt zwakke glutenstructuur en mogelijke ineenstorting" },
          { en: "Improves shelf life significantly", es: "Mejora significativamente la vida útil", de: "Verbessert die Haltbarkeit erheblich", nl: "Verbetert de houdbaarheid aanzienlijk" }
        ],
        correct: 2,
        explanation: {
          en: "Over-proofing weakens the gluten network structure, causing donuts to potentially collapse during frying and creating dense, irregular texture with poor oil absorption control.",
          es: "El sobre-fermentado debilita la estructura de la red de gluten, causando que las donas potencialmente colapsen durante la fritura y creando textura densa e irregular con mal control de absorción de aceite.",
          de: "Übergärung schwächt die Glutennetzwerkstruktur, wodurch Donuts beim Frittieren möglicherweise kollabieren und dichte, unregelmäßige Textur mit schlechter Ölabsorptionskontrolle entstehen.",
          nl: "Overrijzing verzwakt de glutennetwerkstructuur, waardoor donuts mogelijk kunnen instorten tijdens frituren en dichte, onregelmatige textuur met slechte olieabsorptiecontrole ontstaan."
        }
      },
      {
        question: {
          en: "What is the optimal dough temperature for consistent yeast donut production?",
          es: "¿Cuál es la temperatura óptima de la masa para la producción consistente de donas de levadura?",
          de: "Was ist die optimale Teigtemperatur für konsistente Hefe-Donut-Produktion?",
          nl: "Wat is de optimale deegtemperatuur voor consistente gist donut productie?"
        },
        options: [
          { en: "18-20°C (64-68°F)", es: "18-20°C (64-68°F)", de: "18-20°C (64-68°F)", nl: "18-20°C (64-68°F)" },
          { en: "24-27°C (75-80°F)", es: "24-27°C (75-80°F)", de: "24-27°C (75-80°F)", nl: "24-27°C (75-80°F)" },
          { en: "30-35°C (86-95°F)", es: "30-35°C (86-95°F)", de: "30-35°C (86-95°F)", nl: "30-35°C (86-95°F)" },
          { en: "38-40°C (100-104°F)", es: "38-40°C (100-104°F)", de: "38-40°C (100-104°F)", nl: "38-40°C (100-104°F)" }
        ],
        correct: 1,
        explanation: {
          en: "24-27°C is optimal for yeast activity and dough handling. This temperature ensures consistent fermentation rates and prevents the dough from becoming too warm and sticky to work with.",
          es: "24-27°C es óptimo para la actividad de levadura y manejo de masa. Esta temperatura asegura tasas de fermentación consistentes y previene que la masa se vuelva muy caliente y pegajosa para trabajar.",
          de: "24-27°C ist optimal für Hefeaktivität und Teigbehandlung. Diese Temperatur gewährleistet konsistente Fermentationsraten und verhindert, dass der Teig zu warm und klebrig zum Arbeiten wird.",
          nl: "24-27°C is optimaal voor gistactiviteit en deeghantering. Deze temperatuur zorgt voor consistente fermentatiesnelheden en voorkomt dat het deeg te warm en kleverig wordt om mee te werken."
        }
      },
      {
        question: {
          en: "Which glazing technique provides the most professional appearance for donuts?",
          es: "¿Qué técnica de glaseado proporciona la apariencia más profesional para las donas?",
          de: "Welche Glasurtechnik bietet das professionellste Aussehen für Donuts?",
          nl: "Welke glaçeertechniek geeft het meest professionele uiterlijk voor donuts?"
        },
        options: [
          { en: "Dipping while hot directly from fryer", es: "Sumergir mientras están calientes directamente de la freidora", de: "Eintauchen während sie heiß direkt aus der Fritteuse sind", nl: "Dompelen terwijl ze heet zijn direct uit de friteuse" },
          { en: "Cooling completely then glazing at room temperature", es: "Enfriar completamente luego glasear a temperatura ambiente", de: "Vollständig abkühlen lassen, dann bei Raumtemperatur glasieren", nl: "Volledig afkoelen dan glaçeren op kamertemperatuur" },
          { en: "Glazing when slightly warm with controlled temperature glaze", es: "Glasear cuando estén ligeramente tibias con glaseado de temperatura controlada", de: "Glasieren, wenn sie leicht warm sind mit temperaturkontrollierter Glasur", nl: "Glaçeren wanneer ze lichtjes warm zijn met temperatuur gecontroleerde glaçuur" },
          { en: "Spraying glaze from above", es: "Rociar glaseado desde arriba", de: "Glasur von oben sprühen", nl: "Glaçuur van bovenaf spuiten" }
        ],
        correct: 2,
        explanation: {
          en: "Glazing slightly warm donuts with controlled-temperature glaze ensures proper adhesion, smooth coverage, and optimal set time for a professional finish without drips or uneven coating.",
          es: "Glasear donas ligeramente tibias con glaseado de temperatura controlada asegura adhesión adecuada, cobertura suave y tiempo de cuajado óptimo para un acabado profesional sin goteos o recubrimiento desigual.",
          de: "Das Glasieren leicht warmer Donuts mit temperaturkontrollierter Glasur gewährleistet richtige Haftung, glatte Abdeckung und optimale Abbindezeit für ein professionelles Finish ohne Tropfen oder ungleichmäßige Beschichtung.",
          nl: "Glaçeren van lichtjes warme donuts met temperatuur gecontroleerde glaçuur zorgt voor goede hechting, gladde bedekking en optimale uithardingstijd voor een professionele afwerking zonder druppels of ongelijke coating."
        }
      },
      {
        question: {
          en: "What causes donuts to have an uneven golden color after frying?",
          es: "¿Qué causa que las donas tengan un color dorado desigual después de freír?",
          de: "Was verursacht, dass Donuts nach dem Frittieren eine ungleichmäßige goldene Farbe haben?",
          nl: "Wat veroorzaakt dat donuts een ongelijke gouden kleur hebben na het frituren?"
        },
        options: [
          { en: "Inconsistent dough thickness or irregular oil temperature", es: "Espesor de masa inconsistente o temperatura de aceite irregular", de: "Ungleichmäßige Teigdicke oder unregelmäßige Öltemperatur", nl: "Inconsistente deegdikte of onregelmatige olietemperatuur" },
          { en: "Too much yeast in the dough", es: "Demasiada levadura en la masa", de: "Zu viel Hefe im Teig", nl: "Te veel gist in het deeg" },
          { en: "Using the wrong type of oil", es: "Usar el tipo incorrecto de aceite", de: "Die falsche Ölsorte verwenden", nl: "Het verkeerde type olie gebruiken" },
          { en: "Adding salt to the dough", es: "Agregar sal a la masa", de: "Salz zum Teig hinzufügen", nl: "Zout aan het deeg toevoegen" }
        ],
        correct: 0,
        explanation: {
          en: "Uneven dough thickness causes different cooking rates, while fluctuating oil temperature creates inconsistent browning. Maintaining uniform thickness and stable oil temperature ensures even coloring.",
          es: "El espesor desigual de la masa causa diferentes tasas de cocción, mientras que la temperatura fluctuante del aceite crea dorado inconsistente. Mantener espesor uniforme y temperatura estable del aceite asegura coloración pareja.",
          de: "Ungleichmäßige Teigdicke verursacht unterschiedliche Garraten, während schwankende Öltemperatur zu inkonsistenter Bräunung führt. Gleichmäßige Dicke und stabile Öltemperatur gewährleisten gleichmäßige Färbung.",
          nl: "Ongelijke deegdikte veroorzaakt verschillende kooksnelheden, terwijl fluctuerende olietemperatuur inconsistente bruining creëert. Uniforme dikte en stabiele olietemperatuur zorgen voor gelijkmatige kleuring."
        }
      },
      {
        question: {
          en: "How does humidity affect donut dough preparation and proofing?",
          es: "¿Cómo afecta la humedad la preparación y fermentado de la masa de donas?",
          de: "Wie beeinflusst die Luftfeuchtigkeit die Donut-Teigzubereitung und -gärung?",
          nl: "Hoe beïnvloedt luchtvochtigheid de bereiding en rijzing van donutdeeg?"
        },
        options: [
          { en: "Humidity has no effect on donut production", es: "La humedad no tiene efecto en la producción de donas", de: "Luftfeuchtigkeit hat keinen Einfluss auf die Donut-Produktion", nl: "Luchtvochtigheid heeft geen effect op donutproductie" },
          { en: "High humidity slows fermentation and causes surface drying", es: "Alta humedad ralentiza la fermentación y causa secado superficial", de: "Hohe Luftfeuchtigkeit verlangsamt die Fermentation und verursacht Oberflächentrocknung", nl: "Hoge luchtvochtigheid vertraagt fermentatie en veroorzaakt oppervlaktedroging" },
          { en: "High humidity accelerates fermentation and prevents surface skin formation", es: "Alta humedad acelera la fermentación y previene la formación de piel superficial", de: "Hohe Luftfeuchtigkeit beschleunigt die Fermentation und verhindert Oberflächenhautbildung", nl: "Hoge luchtvochtigheid versnelt fermentatie en voorkomt oppervlaktevelvorming" },
          { en: "Low humidity is always preferred for donuts", es: "Baja humedad siempre se prefiere para donas", de: "Niedrige Luftfeuchtigkeit wird immer für Donuts bevorzugt", nl: "Lage luchtvochtigheid wordt altijd verkozen voor donuts" }
        ],
        correct: 2,
        explanation: {
          en: "High humidity accelerates yeast activity and prevents dough surface from forming a skin during proofing, which could limit expansion and create texture problems in the finished donut.",
          es: "La alta humedad acelera la actividad de la levadura y previene que la superficie de la masa forme una piel durante el fermentado, lo que podría limitar la expansión y crear problemas de textura en la dona terminada.",
          de: "Hohe Luftfeuchtigkeit beschleunigt die Hefeaktivität und verhindert, dass die Teigoberfläche während der Gärung eine Haut bildet, was die Ausdehnung begrenzen und Texturprobleme im fertigen Donut verursachen könnte.",
          nl: "Hoge luchtvochtigheid versnelt gistactiviteit en voorkomt dat het deegoppervlak een vel vormt tijdens rijzing, wat expansie zou kunnen beperken en textuurproblemen in de afgewerkte donut zou kunnen creëren."
        }
      },
      {
        question: {
          en: "What is the primary difference between old-fashioned and yeast donuts in terms of mixing technique?",
          es: "¿Cuál es la diferencia principal entre donas de estilo antiguo y donas de levadura en términos de técnica de mezclado?",
          de: "Was ist der Hauptunterschied zwischen altmodischen und Hefe-Donuts in Bezug auf die Mischtechnik?",
          nl: "Wat is het primaire verschil tussen ouderwetse en gist donuts wat betreft mengtechniek?"
        },
        options: [
          { en: "Old-fashioned require minimal mixing to avoid toughness", es: "Las de estilo antiguo requieren mezclado mínimo para evitar dureza", de: "Altmodische erfordern minimales Mischen, um Zähigkeit zu vermeiden", nl: "Ouderwetse vereisen minimaal mengen om taaiheid te voorkomen" },
          { en: "Yeast donuts require minimal mixing to avoid toughness", es: "Las donas de levadura requieren mezclado mínimo para evitar dureza", de: "Hefe-Donuts erfordern minimales Mischen, um Zähigkeit zu vermeiden", nl: "Gist donuts vereisen minimaal mengen om taaiheid te voorkomen" },
          { en: "Both require identical mixing techniques", es: "Ambas requieren técnicas de mezclado idénticas", de: "Beide erfordern identische Mischtechniken", nl: "Beide vereisen identieke mengtechnieken" },
          { en: "Old-fashioned require extended mixing for gluten development", es: "Las de estilo antiguo requieren mezclado extendido para desarrollo de gluten", de: "Altmodische erfordern verlängertes Mischen für Glutenentwicklung", nl: "Ouderwetse vereisen verlengd mengen voor glutenontwikkeling" }
        ],
        correct: 0,
        explanation: {
          en: "Old-fashioned (cake) donuts use chemical leavening and require minimal mixing to prevent gluten overdevelopment, which would create toughness. Yeast donuts need more mixing for proper gluten development.",
          es: "Las donas de estilo antiguo (bizcocho) usan levadura química y requieren mezclado mínimo para prevenir sobredesarrollo del gluten, lo que crearía dureza. Las donas de levadura necesitan más mezclado para desarrollo adecuado del gluten.",
          de: "Altmodische (Kuchen-)Donuts verwenden chemische Triebmittel und erfordern minimales Mischen, um Glutenüberentwicklung zu verhindern, was Zähigkeit erzeugen würde. Hefe-Donuts benötigen mehr Mischen für richtige Glutenentwicklung.",
          nl: "Ouderwetse (cake) donuts gebruiken chemische rijsmiddelen en vereisen minimaal mengen om glutenoveontwikkeling te voorkomen, wat taaiheid zou creëren. Gist donuts hebben meer mengen nodig voor goede glutenontwikkeling."
        }
      },
      {
        question: {
          en: "Which factor most significantly affects the shelf life of fried donuts?",
          es: "¿Qué factor afecta más significativamente la vida útil de las donas fritas?",
          de: "Welcher Faktor beeinflusst die Haltbarkeit von frittierten Donuts am stärksten?",
          nl: "Welke factor beïnvloedt de houdbaarheid van gefrituurd donuts het meest significant?"
        },
        options: [
          { en: "Sugar content in the dough", es: "Contenido de azúcar en la masa", de: "Zuckergehalt im Teig", nl: "Suikergehalte in het deeg" },
          { en: "Oil absorption and moisture retention", es: "Absorción de aceite y retención de humedad", de: "Ölaufnahme und Feuchtigkeitsretention", nl: "Olieabsorptie en vochtretentie" },
          { en: "Type of flour used", es: "Tipo de harina utilizada", de: "Art des verwendeten Mehls", nl: "Type gebruikte bloem" },
          { en: "Frying oil temperature", es: "Temperatura del aceite de fritura", de: "Frittieröltemperatur", nl: "Frituurolietemperatuur" }
        ],
        correct: 1,
        explanation: {
          en: "Oil absorption and moisture retention are critical for shelf life. Excess oil causes rancidity, while moisture loss leads to staleness. Proper frying technique and storage minimize both issues.",
          es: "La absorción de aceite y retención de humedad son críticas para la vida útil. El exceso de aceite causa rancidez, mientras que la pérdida de humedad lleva a que se pongan rancias. La técnica adecuada de fritura y almacenamiento minimizan ambos problemas.",
          de: "Ölaufnahme und Feuchtigkeitsretention sind kritisch für die Haltbarkeit. Überschüssiges Öl verursacht Ranzigkeit, während Feuchtigkeitsverlust zu Staleness führt. Richtige Frittiertechnik und Lagerung minimieren beide Probleme.",
          nl: "Olieabsorptie en vochtretentie zijn kritiek voor houdbaarheid. Teveel olie veroorzaakt ranzigheid, terwijl vochtverlies tot oudbakkenheid leidt. Goede frituurechniek en opslag minimaliseren beide problemen."
        }
      },
      {
        question: {
          en: "What is the purpose of adding emulsifiers like lecithin to commercial donut dough?",
          es: "¿Cuál es el propósito de agregar emulsificantes como lecitina a la masa comercial de donas?",
          de: "Was ist der Zweck des Hinzufügens von Emulgatoren wie Lecithin zu kommerziellem Donut-Teig?",
          nl: "Wat is het doel van het toevoegen van emulgatoren zoals lecithine aan commercieel donutdeeg?"
        },
        options: [
          { en: "To increase sweetness", es: "Para aumentar la dulzura", de: "Um die Süße zu erhöhen", nl: "Om zoetheid te verhogen" },
          { en: "To improve dough handling and extend shelf life", es: "Para mejorar el manejo de la masa y extender la vida útil", de: "Um die Teigbehandlung zu verbessern und die Haltbarkeit zu verlängern", nl: "Om deeghantering te verbeteren en houdbaarheid te verlengen" },
          { en: "To add protein content", es: "Para agregar contenido de proteína", de: "Um Proteingehalt hinzuzufügen", nl: "Om eiwitgehalte toe te voegen" },
          { en: "To speed up fermentation", es: "Para acelerar la fermentación", de: "Um die Fermentation zu beschleunigen", nl: "Om fermentatie te versnellen" }
        ],
        correct: 1,
        explanation: {
          en: "Emulsifiers like lecithin improve fat-water integration, creating smoother dough that's easier to handle and produces donuts with better texture and longer shelf life through improved moisture retention.",
          es: "Los emulsificantes como la lecitina mejoran la integración grasa-agua, creando masa más suave que es más fácil de manejar y produce donas con mejor textura y vida útil más larga a través de mejor retención de humedad.",
          de: "Emulgatoren wie Lecithin verbessern die Fett-Wasser-Integration, schaffen glatteren Teig, der leichter zu handhaben ist und Donuts mit besserer Textur und längerer Haltbarkeit durch verbesserte Feuchtigkeitsretention produziert.",
          nl: "Emulgatoren zoals lecithine verbeteren vet-water integratie, wat gladder deeg creëert dat makkelijker te hanteren is en donuts produceert met betere textuur en langere houdbaarheid door verbeterde vochtretentie."
        }
      },
      {
        question: {
          en: "How does the protein content of flour affect donut texture and oil absorption?",
          es: "¿Cómo afecta el contenido de proteína de la harina la textura de las donas y la absorción de aceite?",
          de: "Wie beeinflusst der Proteingehalt des Mehls die Donut-Textur und Ölaufnahme?",
          nl: "Hoe beïnvloedt het eiwitgehalte van bloem de donut textuur en olieabsorptie?"
        },
        options: [
          { en: "Higher protein creates stronger structure with less oil absorption", es: "Mayor proteína crea estructura más fuerte con menos absorción de aceite", de: "Höheres Protein erzeugt stärkere Struktur mit weniger Ölaufnahme", nl: "Hoger eiwit creëert sterkere structuur met minder olieabsorptie" },
          { en: "Lower protein always produces better donuts", es: "Menor proteína siempre produce mejores donas", de: "Niedrigeres Protein produziert immer bessere Donuts", nl: "Lager eiwit produceert altijd betere donuts" },
          { en: "Protein content has no effect on oil absorption", es: "El contenido de proteína no tiene efecto en la absorción de aceite", de: "Proteingehalt hat keinen Einfluss auf die Ölaufnahme", nl: "Eiwitgehalte heeft geen effect op olieabsorptie" },
          { en: "Higher protein increases oil absorption significantly", es: "Mayor proteína aumenta significativamente la absorción de aceite", de: "Höheres Protein erhöht die Ölaufnahme erheblich", nl: "Hoger eiwit verhoogt olieabsorptie aanzienlijk" }
        ],
        correct: 0,
        explanation: {
          en: "Higher protein flour develops stronger gluten networks that create better structural integrity, helping donuts maintain their shape and resist oil penetration during frying for lighter, less greasy results.",
          es: "La harina con mayor proteína desarrolla redes de gluten más fuertes que crean mejor integridad estructural, ayudando a las donas a mantener su forma y resistir la penetración de aceite durante la fritura para resultados más ligeros y menos grasosos.",
          de: "Proteinreicheres Mehl entwickelt stärkere Glutennetzwerke, die bessere strukturelle Integrität schaffen und Donuts helfen, ihre Form zu behalten und Öldurchdringung beim Frittieren zu widerstehen für leichtere, weniger fettige Ergebnisse.",
          nl: "Bloem met hoger eiwit ontwikkelt sterkere glutennetwerken die betere structurele integriteit creëren, wat donuts helpt hun vorm te behouden en oliedoordringng tijdens frituren te weerstaan voor lichtere, minder vette resultaten."
        }
      },
      {
        question: {
          en: "What is the ideal water activity level for preventing spoilage in glazed donuts?",
          es: "¿Cuál es el nivel ideal de actividad de agua para prevenir deterioro en donas glaseadas?",
          de: "Was ist das ideale Wasseraktivitätsniveau zur Verhinderung von Verderb bei glasierten Donuts?",
          nl: "Wat is het ideale wateractiviteitsniveau voor het voorkomen van bederf in geglazuurde donuts?"
        },
        options: [
          { en: "0.95-1.0 aw", es: "0.95-1.0 aw", de: "0.95-1.0 aw", nl: "0.95-1.0 aw" },
          { en: "0.85-0.90 aw", es: "0.85-0.90 aw", de: "0.85-0.90 aw", nl: "0.85-0.90 aw" },
          { en: "0.75-0.80 aw", es: "0.75-0.80 aw", de: "0.75-0.80 aw", nl: "0.75-0.80 aw" },
          { en: "0.60-0.65 aw", es: "0.60-0.65 aw", de: "0.60-0.65 aw", nl: "0.60-0.65 aw" }
        ],
        correct: 1,
        explanation: {
          en: "0.85-0.90 aw prevents most bacterial and mold growth while maintaining acceptable texture. This level balances food safety with sensory quality in glazed donut products.",
          es: "0.85-0.90 aw previene la mayoría del crecimiento bacteriano y de moho mientras mantiene textura aceptable. Este nivel equilibra la seguridad alimentaria con la calidad sensorial en productos de donas glaseadas.",
          de: "0.85-0.90 aw verhindert das meiste Bakterien- und Schimmelwachstum bei gleichzeitiger Beibehaltung akzeptabler Textur. Dieses Niveau balanciert Lebensmittelsicherheit mit sensorischer Qualität bei glasierten Donut-Produkten.",
          nl: "0.85-0.90 aw voorkomt de meeste bacteriële en schimmelgroei terwijl acceptabele textuur behouden blijft. Dit niveau balanceert voedselveiligheid met sensorische kwaliteit in geglazuurde donutproducten."
        }
      },
      {
        question: {
          en: "Why do some commercial donut recipes include potato starch or modified starches?",
          es: "¿Por qué algunas recetas comerciales de donas incluyen almidón de papa o almidones modificados?",
          de: "Warum enthalten einige kommerzielle Donut-Rezepte Kartoffelstärke oder modifizierte Stärken?",
          nl: "Waarom bevatten sommige commerciële donutrecepten aardappelzetmeel of gemodificeerde zetmelen?"
        },
        options: [
          { en: "To add flavor complexity", es: "Para agregar complejidad de sabor", de: "Um Geschmackskomplexität hinzuzufügen", nl: "Om smaakcomplexiteit toe te voegen" },
          { en: "To improve moisture retention and extend shelf life", es: "Para mejorar la retención de humedad y extender la vida útil", de: "Um die Feuchtigkeitsretention zu verbessern und die Haltbarkeit zu verlängern", nl: "Om vochtretentie te verbeteren en houdbaarheid te verlengen" },
          { en: "To increase protein content", es: "Para aumentar el contenido de proteína", de: "Um den Proteingehalt zu erhöhen", nl: "Om eiwitgehalte te verhogen" },
          { en: "To speed up fermentation process", es: "Para acelerar el proceso de fermentación", de: "Um den Fermentationsprozess zu beschleunigen", nl: "Om fermentatieproces te versnellen" }
        ],
        correct: 1,
        explanation: {
          en: "Modified starches improve moisture retention, creating donuts that stay fresh longer. They also enhance texture stability and can reduce oil absorption during frying for better product quality.",
          es: "Los almidones modificados mejoran la retención de humedad, creando donas que se mantienen frescas por más tiempo. También mejoran la estabilidad de textura y pueden reducir la absorción de aceite durante la fritura para mejor calidad del producto.",
          de: "Modifizierte Stärken verbessern die Feuchtigkeitsretention und schaffen Donuts, die länger frisch bleiben. Sie verbessern auch die Texturstabilität und können die Ölaufnahme beim Frittieren für bessere Produktqualität reduzieren.",
          nl: "Gemodificeerde zetmelen verbeteren vochtretentie, wat donuts creëert die langer vers blijven. Ze verbeteren ook textuurstabiliteit en kunnen olieabsorptie tijdens frituren verminderen voor betere productkwaliteit."
        }
      },
      {
        question: {
          en: "What is the ideal oil temperature for frying donuts?",
          es: "¿Cuál es la temperatura ideal del aceite para freír donas?",
          de: "Was ist die ideale Öltemperatur zum Frittieren von Donuts?",
          nl: "Wat is de ideale olietemperatuur voor het frituren van donuts?"
        },
        options: [
          { en: "350-375°F (175-190°C)", es: "350-375°F (175-190°C)", de: "350-375°F (175-190°C)", nl: "350-375°F (175-190°C)" },
          { en: "300°F (150°C)", es: "300°F (150°C)", de: "300°F (150°C)", nl: "300°F (150°C)" },
          { en: "400°F (200°C)", es: "400°F (200°C)", de: "400°F (200°C)", nl: "400°F (200°C)" },
          { en: "275°F (135°C)", es: "275°F (135°C)", de: "275°F (135°C)", nl: "275°F (135°C)" }
        ],
        correct: 0,
        explanation: {
          en: "The ideal temperature for frying donuts is 350-375°F (175-190°C), which cooks them evenly without burning the outside before the inside is cooked.",
          es: "La temperatura ideal para freír donas es 350-375°F (175-190°C), que las cocina uniformemente sin quemar el exterior antes de que se cocine el interior.",
          de: "Die ideale Temperatur zum Frittieren von Donuts ist 350-375°F (175-190°C), wodurch sie gleichmäßig gegart werden, ohne dass die Außenseite verbrennt, bevor die Innenseite gegart ist.",
          nl: "De ideale temperatuur voor het frituren van donuts is 350-375°F (175-190°C), wat ze gelijkmatig kookt zonder de buitenkant te verbranden voordat de binnenkant gaar is."
        }
      },
      {
        question: {
          en: "How long should donuts typically fry on each side?",
          es: "¿Cuánto tiempo deben freírse típicamente las donas por cada lado?",
          de: "Wie lange sollten Donuts normalerweise auf jeder Seite frittiert werden?",
          nl: "Hoe lang moeten donuts meestal aan elke kant frituren?"
        },
        options: [
          { en: "1-2 minutes per side", es: "1-2 minutos por lado", de: "1-2 Minuten pro Seite", nl: "1-2 minuten per kant" },
          { en: "30 seconds per side", es: "30 segundos por lado", de: "30 Sekunden pro Seite", nl: "30 seconden per kant" },
          { en: "5 minutes per side", es: "5 minutos por lado", de: "5 Minuten pro Seite", nl: "5 minuten per kant" },
          { en: "10 minutes per side", es: "10 minutos por lado", de: "10 Minuten pro Seite", nl: "10 minuten per kant" }
        ],
        correct: 0,
        explanation: {
          en: "Donuts should fry for 1-2 minutes per side at the correct temperature to achieve a golden brown color and fully cooked interior.",
          es: "Las donas deben freírse por 1-2 minutos por lado a la temperatura correcta para lograr un color dorado y un interior completamente cocido.",
          de: "Donuts sollten bei der richtigen Temperatur 1-2 Minuten pro Seite frittiert werden, um eine goldbraune Farbe und ein vollständig gegarte Inneres zu erreichen.",
          nl: "Donuts moeten 1-2 minuten per kant frituren op de juiste temperatuur om een goudbruine kleur en volledig gaar binnenwerk te krijgen."
        }    },
    {
      question: {
        en: "What is a raised donut?",
        es: "What is a raised donut?",
        de: "What is a raised donut?",
        nl: "What is a raised donut?"
      },
      options: [
        { en: "Yeast-leavened donut", es: "Yeast-leavened donut", de: "Yeast-leavened donut", nl: "Yeast-leavened donut" },
        { en: "Baked donut", es: "Baked donut", de: "Baked donut", nl: "Baked donut" },
        { en: "Cake donut", es: "Cake donut", de: "Cake donut", nl: "Cake donut" },
        { en: "Filled donut", es: "Filled donut", de: "Filled donut", nl: "Filled donut" }
      ],
      correct: 0,
      explanation: {
        en: "Raised donuts are light and airy because they're leavened with yeast rather than baking powder.",
        es: "Raised donuts are light and airy because they're leavened with yeast rather than baking powder.",
        de: "Raised donuts are light and airy because they're leavened with yeast rather than baking powder.",
        nl: "Raised donuts are light and airy because they're leavened with yeast rather than baking powder."
      }
    },
    {
      question: {
        en: "What is a cake donut?",
        es: "What is a cake donut?",
        de: "What is a cake donut?",
        nl: "What is a cake donut?"
      },
      options: [
        { en: "Donut leavened with baking powder", es: "Donut leavened with baking powder", de: "Donut leavened with baking powder", nl: "Donut leavened with baking powder" },
        { en: "Donut shaped like a cake", es: "Donut shaped like a cake", de: "Donut shaped like a cake", nl: "Donut shaped like a cake" },
        { en: "Donut with frosting", es: "Donut with frosting", de: "Donut with frosting", nl: "Donut with frosting" },
        { en: "Yeast donut", es: "Yeast donut", de: "Yeast donut", nl: "Yeast donut" }
      ],
      correct: 0,
      explanation: {
        en: "Cake donuts are denser than raised donuts because they're leavened with baking powder or baking soda instead of yeast.",
        es: "Cake donuts are denser than raised donuts because they're leavened with baking powder or baking soda instead of yeast.",
        de: "Cake donuts are denser than raised donuts because they're leavened with baking powder or baking soda instead of yeast.",
        nl: "Cake donuts are denser than raised donuts because they're leavened with baking powder or baking soda instead of yeast."
      }
    },
    {
      question: {
        en: "What is a cruller?",
        es: "What is a cruller?",
        de: "What is a cruller?",
        nl: "What is a cruller?"
      },
      options: [
        { en: "Twisted or braided fried donut", es: "Twisted or braided fried donut", de: "Twisted or braided fried donut", nl: "Twisted or braided fried donut" },
        { en: "Filled donut", es: "Filled donut", de: "Filled donut", nl: "Filled donut" },
        { en: "Glazed donut", es: "Glazed donut", de: "Glazed donut", nl: "Glazed donut" },
        { en: "Cake donut", es: "Cake donut", de: "Cake donut", nl: "Cake donut" }
      ],
      correct: 0,
      explanation: {
        en: "A cruller is a twisted or braided donut, often made from choux pastry, with a light, crispy texture.",
        es: "A cruller is a twisted or braided donut, often made from choux pastry, with a light, crispy texture.",
        de: "A cruller is a twisted or braided donut, often made from choux pastry, with a light, crispy texture.",
        nl: "A cruller is a twisted or braided donut, often made from choux pastry, with a light, crispy texture."
      }
    },
    {
      question: {
        en: "What temperature should oil be for frying donuts?",
        es: "What temperature should oil be for frying donuts?",
        de: "What temperature should oil be for frying donuts?",
        nl: "What temperature should oil be for frying donuts?"
      },
      options: [
        { en: "350-375°F (175-190°C)", es: "350-375°F (175-190°C)", de: "350-375°F (175-190°C)", nl: "350-375°F (175-190°C)" },
        { en: "400°F (200°C)", es: "400°F (200°C)", de: "400°F (200°C)", nl: "400°F (200°C)" },
        { en: "300°F (150°C)", es: "300°F (150°C)", de: "300°F (150°C)", nl: "300°F (150°C)" },
        { en: "425°F (220°C)", es: "425°F (220°C)", de: "425°F (220°C)", nl: "425°F (220°C)" }
      ],
      correct: 0,
      explanation: {
        en: "Donuts should be fried at 350-375°F for proper cooking - lower causes greasiness, higher causes burning.",
        es: "Donuts should be fried at 350-375°F for proper cooking - lower causes greasiness, higher causes burning.",
        de: "Donuts should be fried at 350-375°F for proper cooking - lower causes greasiness, higher causes burning.",
        nl: "Donuts should be fried at 350-375°F for proper cooking - lower causes greasiness, higher causes burning."
      }
    },
    {
      question: {
        en: "What is a beignet?",
        es: "What is a beignet?",
        de: "What is a beignet?",
        nl: "What is a beignet?"
      },
      options: [
        { en: "French fried dough covered in powdered sugar", es: "French fried dough covered in powdered sugar", de: "French fried dough covered in powdered sugar", nl: "French fried dough covered in powdered sugar" },
        { en: "French cake donut", es: "French cake donut", de: "French cake donut", nl: "French cake donut" },
        { en: "Filled donut", es: "Filled donut", de: "Filled donut", nl: "Filled donut" },
        { en: "Glazed donut", es: "Glazed donut", de: "Glazed donut", nl: "Glazed donut" }
      ],
      correct: 0,
      explanation: {
        en: "Beignets are squares of fried dough generously covered with powdered sugar, traditional to New Orleans.",
        es: "Beignets are squares of fried dough generously covered with powdered sugar, traditional to New Orleans.",
        de: "Beignets are squares of fried dough generously covered with powdered sugar, traditional to New Orleans.",
        nl: "Beignets are squares of fried dough generously covered with powdered sugar, traditional to New Orleans."
      }
    },
    {
      question: {
        en: "What causes donuts to be greasy?",
        es: "What causes donuts to be greasy?",
        de: "What causes donuts to be greasy?",
        nl: "What causes donuts to be greasy?"
      },
      options: [
        { en: "Oil temperature too low", es: "Oil temperature too low", de: "Oil temperature too low", nl: "Oil temperature too low" },
        { en: "Oil temperature too high", es: "Oil temperature too high", de: "Oil temperature too high", nl: "Oil temperature too high" },
        { en: "Too much sugar", es: "Too much sugar", de: "Too much sugar", nl: "Too much sugar" },
        { en: "Too much flour", es: "Too much flour", de: "Too much flour", nl: "Too much flour" }
      ],
      correct: 0,
      explanation: {
        en: "If frying oil is too cool, donuts absorb excess oil and become greasy instead of crispy.",
        es: "If frying oil is too cool, donuts absorb excess oil and become greasy instead of crispy.",
        de: "If frying oil is too cool, donuts absorb excess oil and become greasy instead of crispy.",
        nl: "If frying oil is too cool, donuts absorb excess oil and become greasy instead of crispy."
      }
    },
    {
      question: {
        en: "What is a Long John donut?",
        es: "What is a Long John donut?",
        de: "What is a Long John donut?",
        nl: "What is a Long John donut?"
      },
      options: [
        { en: "Rectangular filled donut", es: "Rectangular filled donut", de: "Rectangular filled donut", nl: "Rectangular filled donut" },
        { en: "Round glazed donut", es: "Round glazed donut", de: "Round glazed donut", nl: "Round glazed donut" },
        { en: "Twisted donut", es: "Twisted donut", de: "Twisted donut", nl: "Twisted donut" },
        { en: "Donut hole", es: "Donut hole", de: "Donut hole", nl: "Donut hole" }
      ],
      correct: 0,
      explanation: {
        en: "A Long John is an elongated, rectangular donut, usually filled with cream or custard and topped with icing.",
        es: "A Long John is an elongated, rectangular donut, usually filled with cream or custard and topped with icing.",
        de: "A Long John is an elongated, rectangular donut, usually filled with cream or custard and topped with icing.",
        nl: "A Long John is an elongated, rectangular donut, usually filled with cream or custard and topped with icing."
      }
    },
    {
      question: {
        en: "What are donut holes?",
        es: "What are donut holes?",
        de: "What are donut holes?",
        nl: "What are donut holes?"
      },
      options: [
        { en: "Small round donuts from center cutouts", es: "Small round donuts from center cutouts", de: "Small round donuts from center cutouts", nl: "Small round donuts from center cutouts" },
        { en: "Failed donuts", es: "Failed donuts", de: "Failed donuts", nl: "Failed donuts" },
        { en: "Donut-shaped holes", es: "Donut-shaped holes", de: "Donut-shaped holes", nl: "Donut-shaped holes" },
        { en: "Mini filled donuts", es: "Mini filled donuts", de: "Mini filled donuts", nl: "Mini filled donuts" }
      ],
      correct: 0,
      explanation: {
        en: "Donut holes are small, round pieces of fried dough, originally made from the centers cut out of ring donuts.",
        es: "Donut holes are small, round pieces of fried dough, originally made from the centers cut out of ring donuts.",
        de: "Donut holes are small, round pieces of fried dough, originally made from the centers cut out of ring donuts.",
        nl: "Donut holes are small, round pieces of fried dough, originally made from the centers cut out of ring donuts."
      }
    },
    {
      question: {
        en: "What is a Boston cream donut?",
        es: "What is a Boston cream donut?",
        de: "What is a Boston cream donut?",
        nl: "What is a Boston cream donut?"
      },
      options: [
        { en: "Round donut filled with custard, topped with chocolate", es: "Round donut filled with custard, topped with chocolate", de: "Round donut filled with custard, topped with chocolate", nl: "Round donut filled with custard, topped with chocolate" },
        { en: "Donut from Boston", es: "Donut from Boston", de: "Donut from Boston", nl: "Donut from Boston" },
        { en: "Cream-filled long john", es: "Cream-filled long john", de: "Cream-filled long john", nl: "Cream-filled long john" },
        { en: "Glazed donut", es: "Glazed donut", de: "Glazed donut", nl: "Glazed donut" }
      ],
      correct: 0,
      explanation: {
        en: "A Boston cream donut is round, filled with custard or cream, and topped with chocolate icing.",
        es: "A Boston cream donut is round, filled with custard or cream, and topped with chocolate icing.",
        de: "A Boston cream donut is round, filled with custard or cream, and topped with chocolate icing.",
        nl: "A Boston cream donut is round, filled with custard or cream, and topped with chocolate icing."
      }
    },
    {
      question: {
        en: "What is the origin of the donut hole in the center?",
        es: "What is the origin of the donut hole in the center?",
        de: "What is the origin of the donut hole in the center?",
        nl: "What is the origin of the donut hole in the center?"
      },
      options: [
        { en: "Allows even cooking throughout", es: "Allows even cooking throughout", de: "Allows even cooking throughout", nl: "Allows even cooking throughout" },
        { en: "Saves dough", es: "Saves dough", de: "Saves dough", nl: "Saves dough" },
        { en: "Traditional decoration", es: "Traditional decoration", de: "Traditional decoration", nl: "Traditional decoration" },
        { en: "Easier to hold", es: "Easier to hold", de: "Easier to hold", nl: "Easier to hold" }
      ],
      correct: 0,
      explanation: {
        en: "The hole in the center allows the donut to cook evenly throughout - the center would be raw without it.",
        es: "The hole in the center allows the donut to cook evenly throughout - the center would be raw without it.",
        de: "The hole in the center allows the donut to cook evenly throughout - the center would be raw without it.",
        nl: "The hole in the center allows the donut to cook evenly throughout - the center would be raw without it."
      }
    },
    {
      question: {
        en: "What is a French cruller made from?",
        es: "What is a French cruller made from?",
        de: "What is a French cruller made from?",
        nl: "What is a French cruller made from?"
      },
      options: [
        { en: "Choux pastry", es: "Choux pastry", de: "Choux pastry", nl: "Choux pastry" },
        { en: "Yeast dough", es: "Yeast dough", de: "Yeast dough", nl: "Yeast dough" },
        { en: "Cake batter", es: "Cake batter", de: "Cake batter", nl: "Cake batter" },
        { en: "Bread dough", es: "Bread dough", de: "Bread dough", nl: "Bread dough" }
      ],
      correct: 0,
      explanation: {
        en: "French crullers are made from choux pastry (same as cream puffs), piped into rings and fried.",
        es: "French crullers are made from choux pastry (same as cream puffs), piped into rings and fried.",
        de: "French crullers are made from choux pastry (same as cream puffs), piped into rings and fried.",
        nl: "French crullers are made from choux pastry (same as cream puffs), piped into rings and fried."
      }
    },
    {
      question: {
        en: "What glaze is traditionally used on donuts?",
        es: "What glaze is traditionally used on donuts?",
        de: "What glaze is traditionally used on donuts?",
        nl: "What glaze is traditionally used on donuts?"
      },
      options: [
        { en: "Powdered sugar and milk/water", es: "Powdered sugar and milk/water", de: "Powdered sugar and milk/water", nl: "Powdered sugar and milk/water" },
        { en: "Chocolate ganache", es: "Chocolate ganache", de: "Chocolate ganache", nl: "Chocolate ganache" },
        { en: "Caramel", es: "Caramel", de: "Caramel", nl: "Caramel" },
        { en: "Buttercream", es: "Buttercream", de: "Buttercream", nl: "Buttercream" }
      ],
      correct: 0,
      explanation: {
        en: "Traditional donut glaze is made from powdered sugar mixed with milk or water, sometimes with vanilla added.",
        es: "Traditional donut glaze is made from powdered sugar mixed with milk or water, sometimes with vanilla added.",
        de: "Traditional donut glaze is made from powdered sugar mixed with milk or water, sometimes with vanilla added.",
        nl: "Traditional donut glaze is made from powdered sugar mixed with milk or water, sometimes with vanilla added."
      }
    },
    {
      question: {
        en: "What is a jelly donut?",
        es: "What is a jelly donut?",
        de: "What is a jelly donut?",
        nl: "What is a jelly donut?"
      },
      options: [
        { en: "Round donut filled with jam or jelly", es: "Round donut filled with jam or jelly", de: "Round donut filled with jam or jelly", nl: "Round donut filled with jam or jelly" },
        { en: "Donut topped with jelly", es: "Donut topped with jelly", de: "Donut topped with jelly", nl: "Donut topped with jelly" },
        { en: "Ring donut", es: "Ring donut", de: "Ring donut", nl: "Ring donut" },
        { en: "Glazed donut", es: "Glazed donut", de: "Glazed donut", nl: "Glazed donut" }
      ],
      correct: 0,
      explanation: {
        en: "Jelly donuts are round, filled donuts injected with fruit jam or jelly, often dusted with powdered sugar.",
        es: "Jelly donuts are round, filled donuts injected with fruit jam or jelly, often dusted with powdered sugar.",
        de: "Jelly donuts are round, filled donuts injected with fruit jam or jelly, often dusted with powdered sugar.",
        nl: "Jelly donuts are round, filled donuts injected with fruit jam or jelly, often dusted with powdered sugar."
      }
    },
    {
      question: {
        en: "What is proofing in donut making?",
        es: "What is proofing in donut making?",
        de: "What is proofing in donut making?",
        nl: "What is proofing in donut making?"
      },
      options: [
        { en: "Letting yeast dough rise", es: "Letting yeast dough rise", de: "Letting yeast dough rise", nl: "Letting yeast dough rise" },
        { en: "Testing oil temperature", es: "Testing oil temperature", de: "Testing oil temperature", nl: "Testing oil temperature" },
        { en: "Checking for doneness", es: "Checking for doneness", de: "Checking for doneness", nl: "Checking for doneness" },
        { en: "Glazing donuts", es: "Glazing donuts", de: "Glazing donuts", nl: "Glazing donuts" }
      ],
      correct: 0,
      explanation: {
        en: "Proofing is the process of letting yeast-raised donut dough rise before frying, allowing the yeast to create air pockets.",
        es: "Proofing is the process of letting yeast-raised donut dough rise before frying, allowing the yeast to create air pockets.",
        de: "Proofing is the process of letting yeast-raised donut dough rise before frying, allowing the yeast to create air pockets.",
        nl: "Proofing is the process of letting yeast-raised donut dough rise before frying, allowing the yeast to create air pockets."
      }
    },
    {
      question: {
        en: "What is an old-fashioned donut?",
        es: "What is an old-fashioned donut?",
        de: "What is an old-fashioned donut?",
        nl: "What is an old-fashioned donut?"
      },
      options: [
        { en: "Crackly-surfaced cake donut", es: "Crackly-surfaced cake donut", de: "Crackly-surfaced cake donut", nl: "Crackly-surfaced cake donut" },
        { en: "Yeast donut", es: "Yeast donut", de: "Yeast donut", nl: "Yeast donut" },
        { en: "Filled donut", es: "Filled donut", de: "Filled donut", nl: "Filled donut" },
        { en: "Glazed donut", es: "Glazed donut", de: "Glazed donut", nl: "Glazed donut" }
      ],
      correct: 0,
      explanation: {
        en: "Old-fashioned donuts are cake donuts with a distinctive crackly, craggy surface texture.",
        es: "Old-fashioned donuts are cake donuts with a distinctive crackly, craggy surface texture.",
        de: "Old-fashioned donuts are cake donuts with a distinctive crackly, craggy surface texture.",
        nl: "Old-fashioned donuts are cake donuts with a distinctive crackly, craggy surface texture."
      }
    },
    {
      question: {
        en: "What is a buttermilk donut?",
        es: "What is a buttermilk donut?",
        de: "What is a buttermilk donut?",
        nl: "What is a buttermilk donut?"
      },
      options: [
        { en: "Cake donut made with buttermilk", es: "Cake donut made with buttermilk", de: "Cake donut made with buttermilk", nl: "Cake donut made with buttermilk" },
        { en: "Donut filled with buttermilk", es: "Donut filled with buttermilk", de: "Donut filled with buttermilk", nl: "Donut filled with buttermilk" },
        { en: "Yeast donut", es: "Yeast donut", de: "Yeast donut", nl: "Yeast donut" },
        { en: "Glazed donut", es: "Glazed donut", de: "Glazed donut", nl: "Glazed donut" }
      ],
      correct: 0,
      explanation: {
        en: "Buttermilk donuts are cake-style donuts made with buttermilk, which creates a tender crumb and slight tang.",
        es: "Buttermilk donuts are cake-style donuts made with buttermilk, which creates a tender crumb and slight tang.",
        de: "Buttermilk donuts are cake-style donuts made with buttermilk, which creates a tender crumb and slight tang.",
        nl: "Buttermilk donuts are cake-style donuts made with buttermilk, which creates a tender crumb and slight tang."
      }
    },
    {
      question: {
        en: "What is the difference between a donut and a doughnut?",
        es: "What is the difference between a donut and a doughnut?",
        de: "What is the difference between a donut and a doughnut?",
        nl: "What is the difference between a donut and a doughnut?"
      },
      options: [
        { en: "Just spelling; same thing", es: "Just spelling; same thing", de: "Just spelling; same thing", nl: "Just spelling; same thing" },
        { en: "Different shapes", es: "Different shapes", de: "Different shapes", nl: "Different shapes" },
        { en: "Different ingredients", es: "Different ingredients", de: "Different ingredients", nl: "Different ingredients" },
        { en: "Donut is baked, doughnut is fried", es: "Donut is baked, doughnut is fried", de: "Donut is baked, doughnut is fried", nl: "Donut is baked, doughnut is fried" }
      ],
      correct: 0,
      explanation: {
        en: "Donut and doughnut are simply different spellings of the same food; 'donut' is a simplified American spelling.",
        es: "Donut and doughnut are simply different spellings of the same food; 'donut' is a simplified American spelling.",
        de: "Donut and doughnut are simply different spellings of the same food; 'donut' is a simplified American spelling.",
        nl: "Donut and doughnut are simply different spellings of the same food; 'donut' is a simplified American spelling."
      }
    },
    {
      question: {
        en: "What is a bar donut?",
        es: "What is a bar donut?",
        de: "What is a bar donut?",
        nl: "What is a bar donut?"
      },
      options: [
        { en: "Rectangular or bar-shaped donut", es: "Rectangular or bar-shaped donut", de: "Rectangular or bar-shaped donut", nl: "Rectangular or bar-shaped donut" },
        { en: "Donut with chocolate bar pieces", es: "Donut with chocolate bar pieces", de: "Donut with chocolate bar pieces", nl: "Donut with chocolate bar pieces" },
        { en: "Donut sold in bars", es: "Donut sold in bars", de: "Donut sold in bars", nl: "Donut sold in bars" },
        { en: "Extra-large donut", es: "Extra-large donut", de: "Extra-large donut", nl: "Extra-large donut" }
      ],
      correct: 0,
      explanation: {
        en: "Bar donuts are rectangular or bar-shaped, similar to Long Johns, often topped with glaze or icing.",
        es: "Bar donuts are rectangular or bar-shaped, similar to Long Johns, often topped with glaze or icing.",
        de: "Bar donuts are rectangular or bar-shaped, similar to Long Johns, often topped with glaze or icing.",
        nl: "Bar donuts are rectangular or bar-shaped, similar to Long Johns, often topped with glaze or icing."
      }
    },
    {
      question: {
        en: "What causes donuts to be tough?",
        es: "What causes donuts to be tough?",
        de: "What causes donuts to be tough?",
        nl: "What causes donuts to be tough?"
      },
      options: [
        { en: "Overmixing the dough", es: "Overmixing the dough", de: "Overmixing the dough", nl: "Overmixing the dough" },
        { en: "Undermixing", es: "Undermixing", de: "Undermixing", nl: "Undermixing" },
        { en: "Oil too hot", es: "Oil too hot", de: "Oil too hot", nl: "Oil too hot" },
        { en: "Too much sugar", es: "Too much sugar", de: "Too much sugar", nl: "Too much sugar" }
      ],
      correct: 0,
      explanation: {
        en: "Overmixing donut dough develops too much gluten, resulting in tough, chewy donuts instead of tender ones.",
        es: "Overmixing donut dough develops too much gluten, resulting in tough, chewy donuts instead of tender ones.",
        de: "Overmixing donut dough develops too much gluten, resulting in tough, chewy donuts instead of tender ones.",
        nl: "Overmixing donut dough develops too much gluten, resulting in tough, chewy donuts instead of tender ones."
      }
    },
    {
      question: {
        en: "What is a maple bar?",
        es: "What is a maple bar?",
        de: "What is a maple bar?",
        nl: "What is a maple bar?"
      },
      options: [
        { en: "Bar donut with maple frosting", es: "Bar donut with maple frosting", de: "Bar donut with maple frosting", nl: "Bar donut with maple frosting" },
        { en: "Donut with maple filling", es: "Donut with maple filling", de: "Donut with maple filling", nl: "Donut with maple filling" },
        { en: "Canadian donut", es: "Canadian donut", de: "Canadian donut", nl: "Canadian donut" },
        { en: "Round donut with maple glaze", es: "Round donut with maple glaze", de: "Round donut with maple glaze", nl: "Round donut with maple glaze" }
      ],
      correct: 0,
      explanation: {
        en: "A maple bar is a rectangular bar donut topped with maple-flavored frosting or glaze.",
        es: "A maple bar is a rectangular bar donut topped with maple-flavored frosting or glaze.",
        de: "A maple bar is a rectangular bar donut topped with maple-flavored frosting or glaze.",
        nl: "A maple bar is a rectangular bar donut topped with maple-flavored frosting or glaze."
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