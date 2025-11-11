// Barbecue Quiz - Level 3: Advanced BBQ Techniques
(function() {
  const level3 = {
    name: {
      en: "Barbecue Level 3: Advanced Techniques",
      es: "Barbacoa Nivel 3: Técnicas Avanzadas",
      de: "Grillen Stufe 3: Fortgeschrittene Techniken",
      nl: "Barbecue Level 3: Geavanceerde Technieken"
    },
    questions: [
      {
        question: {
          en: "What is the purpose of 'reverse searing' for thick steaks?",
          es: "¿Cuál es el propósito del 'reverse searing' para bistecs gruesos?",
          de: "Was ist der Zweck des 'Reverse Searing' für dicke Steaks?",
          nl: "Wat is het doel van 'reverse searing' voor dikke steaks?"
        },
        options: [
          { en: "Cook slowly first, then sear at high heat for crust", es: "Cocinar lentamente primero, luego sellar a fuego alto para corteza", de: "Zuerst langsam kochen, dann bei hoher Hitze für Kruste anbraten", nl: "Eerst langzaam koken, dan schroeien op hoge hitte voor korst" },
          { en: "Sear first, then cook slowly", es: "Sellar primero, luego cocinar lentamente", de: "Zuerst anbraten, dann langsam kochen", nl: "Eerst schroeien, dan langzaam koken" },
          { en: "Cook only at high temperature", es: "Cocinar solo a alta temperatura", de: "Nur bei hoher Temperatur kochen", nl: "Alleen op hoge temperatuur koken" },
          { en: "Marinate the meat first", es: "Marinar la carne primero", de: "Das Fleisch zuerst marinieren", nl: "Het vlees eerst marineren" }
        ],
        correct: 0,
        explanation: {
          en: "Reverse searing involves slowly cooking thick steaks at low temperature until nearly done, then finishing with high heat to create a perfect crust while maintaining even doneness throughout.",
          es: "El reverse searing implica cocinar lentamente bistecs gruesos a baja temperatura hasta que estén casi listos, luego terminar con calor alto para crear una corteza perfecta mientras mantiene cocción uniforme.",
          de: "Reverse Searing beinhaltet langsames Kochen dicker Steaks bei niedriger Temperatur bis fast fertig, dann mit hoher Hitze abschließen, um eine perfekte Kruste zu schaffen bei gleichmäßiger Garung.",
          nl: "Reverse searing houdt langzaam koken van dikke steaks op lage temperatuur in tot bijna gaar, dan afwerken met hoge hitte om een perfecte korst te creëren met gelijkmatige gaarheid."
        }
      },
      {
        question: {
          en: "What causes the 'stall' phenomenon when smoking large cuts of meat?",
          es: "¿Qué causa el fenómeno del 'estancamiento' al ahumar cortes grandes de carne?",
          de: "Was verursacht das 'Stall'-Phänomen beim Räuchern großer Fleischstücke?",
          nl: "Wat veroorzaakt het 'stall' fenomeen bij het roken van grote stukken vlees?"
        },
        options: [
          { en: "Evaporative cooling from surface moisture", es: "Enfriamiento evaporativo de la humedad superficial", de: "Verdunstungskühlung durch Oberflächenfeuchtigkeit", nl: "Verdampingskoeling van oppervlaktevocht" },
          { en: "Running out of fuel", es: "Quedarse sin combustible", de: "Brennstoff geht aus", nl: "Brandstof raakt op" },
          { en: "Too much smoke in the chamber", es: "Demasiado humo en la cámara", de: "Zu viel Rauch in der Kammer", nl: "Te veel rook in de kamer" },
          { en: "The meat is fully cooked", es: "La carne está completamente cocida", de: "Das Fleisch ist vollständig gekocht", nl: "Het vlees is volledig gekookt" }
        ],
        correct: 0,
        explanation: {
          en: "The stall occurs when moisture from within the meat migrates to the surface and evaporates, creating a cooling effect that can plateau internal temperature for hours around 150-170°F.",
          es: "El estancamiento ocurre cuando la humedad del interior de la carne migra a la superficie y se evapora, creando un efecto de enfriamiento que puede estabilizar la temperatura interna por horas alrededor de 150-170°F.",
          de: "Der Stall tritt auf, wenn Feuchtigkeit aus dem Fleischinneren an die Oberfläche wandert und verdunstet, was einen Kühleffekt erzeugt, der die Innentemperatur stundenlang um 150-170°F stabilisieren kann.",
          nl: "De stall treedt op wanneer vocht van binnenin het vlees naar het oppervlak migreert en verdampt, wat een koelend effect creëert dat de interne temperatuur urenlang kan stabiliseren rond 150-170°F."
        }
      },
      {
        question: {
          en: "What is the difference between Carolina-style BBQ sauces?",
          es: "¿Cuál es la diferencia entre las salsas BBQ estilo Carolina?",
          de: "Was ist der Unterschied zwischen Carolina-Style BBQ-Saucen?",
          nl: "Wat is het verschil tussen Carolina-stijl BBQ sauzen?"
        },
        options: [
          { en: "Eastern uses vinegar and pepper, Western adds tomato and molasses", es: "La del este usa vinagre y pimienta, la del oeste añade tomate y melaza", de: "Östliche nutzt Essig und Pfeffer, westliche fügt Tomate und Melasse hinzu", nl: "Oostelijke gebruikt azijn en peper, westelijke voegt tomaat en melasse toe" },
          { en: "No difference, they're identical", es: "No hay diferencia, son idénticas", de: "Kein Unterschied, sie sind identisch", nl: "Geen verschil, ze zijn identiek" },
          { en: "One is spicy, one is sweet", es: "Una es picante, una es dulce", de: "Eine ist scharf, eine ist süß", nl: "Een is pittig, een is zoet" },
          { en: "Eastern is thick, Western is thin", es: "La del este es espesa, la del oeste es delgada", de: "Östliche ist dick, westliche ist dünn", nl: "Oostelijke is dik, westelijke is dun" }
        ],
        correct: 0,
        explanation: {
          en: "Eastern North Carolina sauce is a simple vinegar and red pepper blend, while Western NC (Lexington-style) adds ketchup or tomato paste and sometimes molasses for sweetness.",
          es: "La salsa del este de Carolina del Norte es una mezcla simple de vinagre y pimiento rojo, mientras que la del oeste de NC (estilo Lexington) añade ketchup o pasta de tomate y a veces melaza para dulzura.",
          de: "Eastern North Carolina Sauce ist eine einfache Essig- und rote Pfeffer-Mischung, während Western NC (Lexington-Style) Ketchup oder Tomatenmark und manchmal Melasse für Süße hinzufügt.",
          nl: "Eastern North Carolina saus is een eenvoudige azijn en rode peper mix, terwijl Western NC (Lexington-stijl) ketchup of tomatenpasta en soms melasse voor zoetheid toevoegt."
        }
      },
      {
        question: {
          en: "What internal temperature should chicken reach for food safety?",
          es: "¿Qué temperatura interna debe alcanzar el pollo para seguridad alimentaria?",
          de: "Welche Innentemperatur sollte Hähnchen für Lebensmittelsicherheit erreichen?",
          nl: "Welke interne temperatuur moet kip bereiken voor voedselveiligheid?"
        },
        options: [
          { en: "165°F (74°C)", es: "165°F (74°C)", de: "165°F (74°C)", nl: "165°F (74°C)" },
          { en: "145°F (63°C)", es: "145°F (63°C)", de: "145°F (63°C)", nl: "145°F (63°C)" },
          { en: "180°F (82°C)", es: "180°F (82°C)", de: "180°F (82°C)", nl: "180°F (82°C)" },
          { en: "200°F (93°C)", es: "200°F (93°C)", de: "200°F (93°C)", nl: "200°F (93°C)" }
        ],
        correct: 0,
        explanation: {
          en: "Chicken must reach an internal temperature of 165°F (74°C) to eliminate harmful bacteria like Salmonella and Campylobacter. This applies to all parts of the bird.",
          es: "El pollo debe alcanzar una temperatura interna de 165°F (74°C) para eliminar bacterias dañinas como Salmonella y Campylobacter. Esto aplica a todas las partes del ave.",
          de: "Hähnchen muss eine Innentemperatur von 165°F (74°C) erreichen, um schädliche Bakterien wie Salmonellen und Campylobacter zu eliminieren. Dies gilt für alle Teile des Vogels.",
          nl: "Kip moet een interne temperatuur van 165°F (74°C) bereiken om schadelijke bacteriën zoals Salmonella en Campylobacter te elimineren. Dit geldt voor alle delen van de vogel."
        }
      },
      {
        question: {
          en: "What is 'competition barbecue' typically judged on?",
          es: "¿En qué se juzga típicamente la 'barbacoa de competencia'?",
          de: "Worauf wird 'Competition Barbecue' typischerweise beurteilt?",
          nl: "Waarop wordt 'competitie barbecue' typisch beoordeeld?"
        },
        options: [
          { en: "Appearance, taste, and tenderness", es: "Apariencia, sabor y ternura", de: "Aussehen, Geschmack und Zartheit", nl: "Uiterlijk, smaak en malheid" },
          { en: "Only taste", es: "Solo sabor", de: "Nur Geschmack", nl: "Alleen smaak" },
          { en: "Speed of cooking", es: "Velocidad de cocción", de: "Geschwindigkeit des Kochens", nl: "Snelheid van koken" },
          { en: "Size of the portion", es: "Tamaño de la porción", de: "Größe der Portion", nl: "Grootte van de portie" }
        ],
        correct: 0,
        explanation: {
          en: "KCBS (Kansas City Barbecue Society) judging focuses on three main criteria: appearance (how it looks), taste (flavor profile), and tenderness (texture and how easy it is to bite/chew).",
          es: "El juicio de KCBS (Kansas City Barbecue Society) se enfoca en tres criterios principales: apariencia (cómo se ve), sabor (perfil de sabor), y ternura (textura y qué tan fácil es morder/masticar).",
          de: "KCBS (Kansas City Barbecue Society) Bewertung konzentriert sich auf drei Hauptkriterien: Aussehen (wie es aussieht), Geschmack (Geschmacksprofil), und Zartheit (Textur und wie einfach zu beißen/kauen).",
          nl: "KCBS (Kansas City Barbecue Society) beoordeling richt zich op drie hoofdcriteria: uiterlijk (hoe het eruitziet), smaak (smaakprofiel), en malheid (textuur en hoe makkelijk het is om te bijten/kauwen)."
        }
      },
      {
        question: {
          en: "What is the purpose of trimming the fat cap on a brisket?",
          es: "¿Cuál es el propósito de recortar la capa de grasa en un brisket?",
          de: "Was ist der Zweck des Trimmens der Fettschicht auf einer Rinderbrust?",
          nl: "Wat is het doel van het bijsnijden van de vetlaag op een brisket?"
        },
        options: [
          { en: "To allow smoke penetration and rub adherence while retaining moisture", es: "Para permitir penetración de humo y adherencia del rub mientras retiene humedad", de: "Um Rauchpenetration und Rub-Haftung zu ermöglichen bei Feuchtigkeitserhaltung", nl: "Om rookpenetratie en rub hechting mogelijk te maken terwijl vocht wordt behouden" },
          { en: "To remove all fat completely", es: "Para quitar toda la grasa completamente", de: "Um alles Fett vollständig zu entfernen", nl: "Om al het vet volledig te verwijderen" },
          { en: "To make it cook faster", es: "Para hacer que cocine más rápido", de: "Um es schneller kochen zu lassen", nl: "Om het sneller te laten koken" },
          { en: "To reduce the weight", es: "Para reducir el peso", de: "Um das Gewicht zu reduzieren", nl: "Om het gewicht te verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "Trimming the fat cap to about ¼ inch allows smoke to penetrate better and seasonings to adhere, while still providing enough fat to keep the meat moist during the long cooking process.",
          es: "Recortar la capa de grasa a aproximadamente ¼ de pulgada permite que el humo penetre mejor y los condimentos se adhieran, mientras aún proporciona suficiente grasa para mantener la carne húmeda durante el largo proceso de cocción.",
          de: "Das Trimmen der Fettschicht auf etwa ¼ Zoll ermöglicht bessere Rauchpenetration und Gewürzhaftung, während noch genug Fett vorhanden ist, um das Fleisch während des langen Kochprozesses feucht zu halten.",
          nl: "Het bijsnijden van de vetlaag tot ongeveer ¼ inch zorgt voor betere rookpenetratie en kruidenhechting, terwijl er nog genoeg vet overblijft om het vlees vochtig te houden tijdens het lange kookproces."
        }
      },
      {
        question: {
          en: "What is 'cold smoking' and how does it differ from hot smoking?",
          es: "¿Qué es el 'ahumado en frío' y cómo difiere del ahumado en caliente?",
          de: "Was ist 'Kalträuchern' und wie unterscheidet es sich vom Heißräuchern?",
          nl: "Wat is 'koud roken' en hoe verschilt het van warm roken?"
        },
        options: [
          { en: "Cold smoking adds flavor without cooking (under 90°F), hot smoking cooks and flavors", es: "El ahumado frío añade sabor sin cocinar (bajo 90°F), el ahumado caliente cocina y da sabor", de: "Kalträuchern verleiht Geschmack ohne zu kochen (unter 90°F), Heißräuchern kocht und würzt", nl: "Koud roken voegt smaak toe zonder te koken (onder 90°F), warm roken kookt en geeft smaak" },
          { en: "Cold smoking uses ice, hot smoking uses fire", es: "El ahumado frío usa hielo, el ahumado caliente usa fuego", de: "Kalträuchern nutzt Eis, Heißräuchern nutzt Feuer", nl: "Koud roken gebruikt ijs, warm roken gebruikt vuur" },
          { en: "They are the same process", es: "Son el mismo proceso", de: "Sie sind derselbe Prozess", nl: "Ze zijn hetzelfde proces" },
          { en: "Cold smoking is faster than hot smoking", es: "El ahumado frío es más rápido que el ahumado caliente", de: "Kalträuchern ist schneller als Heißräuchern", nl: "Koud roken is sneller dan warm roken" }
        ],
        correct: 0,
        explanation: {
          en: "Cold smoking occurs at temperatures below 90°F and only adds flavor without cooking the food. Hot smoking combines cooking and flavoring at temperatures typically above 225°F.",
          es: "El ahumado frío ocurre a temperaturas por debajo de 90°F y solo añade sabor sin cocinar la comida. El ahumado caliente combina cocción y saborizante a temperaturas típicamente por encima de 225°F.",
          de: "Kalträuchern erfolgt bei Temperaturen unter 90°F und verleiht nur Geschmack ohne das Essen zu kochen. Heißräuchern kombiniert Kochen und Würzen bei Temperaturen typischerweise über 225°F.",
          nl: "Koud roken vindt plaats bij temperaturen onder 90°F en voegt alleen smaak toe zonder het voedsel te koken. Warm roken combineert koken en smaak geven bij temperaturen typisch boven 225°F."
        }
      },
      {
        question: {
          en: "What does 'Memphis Dry' barbecue refer to?",
          es: "¿A qué se refiere la barbacoa 'Memphis Dry'?",
          de: "Was bedeutet 'Memphis Dry' Barbecue?",
          nl: "Waar verwijst 'Memphis Dry' barbecue naar?"
        },
        options: [
          { en: "Ribs seasoned with dry rub only, no sauce", es: "Costillas sazonadas solo con rub seco, sin salsa", de: "Rippen nur mit Dry Rub gewürzt, keine Sauce", nl: "Ribs gekruid met alleen dry rub, geen saus" },
          { en: "Cooking without water pans", es: "Cocinar sin bandejas de agua", de: "Kochen ohne Wasserpfannen", nl: "Koken zonder waterpannen" },
          { en: "Using only dry wood, no soaking", es: "Usar solo madera seca, sin remojar", de: "Nur trockenes Holz verwenden, nicht einweichen", nl: "Alleen droog hout gebruiken, niet weken" },
          { en: "Cooking in low humidity", es: "Cocinar en baja humedad", de: "Bei niedriger Luftfeuchtigkeit kochen", nl: "Koken bij lage luchtvochtigheid" }
        ],
        correct: 0,
        explanation: {
          en: "Memphis Dry style involves seasoning ribs with a complex dry rub and serving them without sauce, allowing the spice blend and smoke flavor to shine through.",
          es: "El estilo Memphis Dry implica sazonar costillas con un rub seco complejo y servirlas sin salsa, permitiendo que la mezcla de especias y el sabor a humo brillen.",
          de: "Memphis Dry Style beinhaltet das Würzen von Rippen mit einem komplexen Dry Rub und das Servieren ohne Sauce, damit die Gewürzmischung und der Rauchgeschmack durchkommen.",
          nl: "Memphis Dry stijl houdt het kruiden van ribs in met een complexe dry rub en ze serveren zonder saus, zodat de kruidenmix en rooksmaak kunnen uitkomen."
        }
      },
      {
        question: {
          en: "What is the benefit of using a water smoker versus a offset smoker?",
          es: "¿Cuál es el beneficio de usar un ahumador de agua versus un ahumador offset?",
          de: "Was ist der Vorteil eines Wassers-Räucherofens gegenüber einem Offset-Räucherofen?",
          nl: "Wat is het voordeel van een water smoker versus een offset smoker?"
        },
        options: [
          { en: "More stable temperature and humidity control", es: "Control de temperatura y humedad más estable", de: "Stabilere Temperatur- und Feuchtigkeitskontrolle", nl: "Stabielere temperatuur- en vochtigheidcontrole" },
          { en: "Uses less fuel", es: "Usa menos combustible", de: "Verbraucht weniger Brennstoff", nl: "Gebruikt minder brandstof" },
          { en: "Cooks food faster", es: "Cocina comida más rápido", de: "Kocht Essen schneller", nl: "Kookt voedsel sneller" },
          { en: "Produces more smoke flavor", es: "Produce más sabor a humo", de: "Produziert mehr Rauchgeschmack", nl: "Produceert meer rooksmaak" }
        ],
        correct: 0,
        explanation: {
          en: "Water smokers use the thermal mass of water to maintain steady temperatures and provide consistent humidity, making them more forgiving for beginners than offset smokers which require more attention.",
          es: "Los ahumadores de agua usan la masa térmica del agua para mantener temperaturas estables y proporcionar humedad consistente, haciéndolos más tolerantes para principiantes que los ahumadores offset que requieren más atención.",
          de: "Wasser-Räucheröfen nutzen die thermische Masse von Wasser um stabile Temperaturen zu halten und konstante Feuchtigkeit zu bieten, was sie verzeihender für Anfänger macht als Offset-Räucheröfen, die mehr Aufmerksamkeit erfordern.",
          nl: "Water smokers gebruiken de thermische massa van water om stabiele temperaturen te behouden en consistente vochtigheid te bieden, waardoor ze vergevingsgezinder zijn voor beginners dan offset smokers die meer aandacht vereisen."
        }
      },
      {
        question: {
          en: "What is the 'money muscle' on a pork shoulder?",
          es: "¿Qué es el 'money muscle' en una paleta de cerdo?",
          de: "Was ist der 'Money Muscle' an einer Schweineschulter?",
          nl: "Wat is de 'money muscle' op een varkensschouder?"
        },
        options: [
          { en: "The serratus ventralis muscle that's tender and prized in competition", es: "El músculo serratus ventralis que es tierno y valorado en competencia", de: "Der Serratus ventralis Muskel, der zart und in Wettbewerben geschätzt ist", nl: "De serratus ventralis spier die mals is en gewaardeerd in competitie" },
          { en: "The fat cap on top", es: "La capa de grasa encima", de: "Die Fettschicht oben", nl: "De vetlaag bovenop" },
          { en: "The bone in the center", es: "El hueso en el centro", de: "Der Knochen in der Mitte", nl: "Het bot in het midden" },
          { en: "The connective tissue", es: "El tejido conectivo", de: "Das Bindegewebe", nl: "Het bindweefsel" }
        ],
        correct: 0,
        explanation: {
          en: "The money muscle (serratus ventralis) is a triangular muscle that separates easily and presents beautifully for competition judging. It's more tender than the rest of the shoulder.",
          es: "El money muscle (serratus ventralis) es un músculo triangular que se separa fácilmente y se presenta hermosamente para juicio de competencia. Es más tierno que el resto de la paleta.",
          de: "Der Money Muscle (Serratus ventralis) ist ein dreieckiger Muskel, der sich leicht trennt und schön für Wettbewerbsbewertung präsentiert. Er ist zarter als der Rest der Schulter.",
          nl: "De money muscle (serratus ventralis) is een driehoekige spier die gemakkelijk scheidt en mooi presenteert voor competitie beoordeling. Het is malser dan de rest van de schouder."
        }
      },
      {
        question: {
          en: "What temperature range is ideal for smoking fish?",
          es: "¿Qué rango de temperatura es ideal para ahumar pescado?",
          de: "Welcher Temperaturbereich ist ideal zum Räuchern von Fisch?",
          nl: "Welk temperatuurbereik is ideaal voor het roken van vis?"
        },
        options: [
          { en: "200-225°F (93-107°C)", es: "200-225°F (93-107°C)", de: "200-225°F (93-107°C)", nl: "200-225°F (93-107°C)" },
          { en: "275-300°F (135-149°C)", es: "275-300°F (135-149°C)", de: "275-300°F (135-149°C)", nl: "275-300°F (135-149°C)" },
          { en: "325-350°F (163-177°C)", es: "325-350°F (163-177°C)", de: "325-350°F (163-177°C)", nl: "325-350°F (163-177°C)" },
          { en: "150-175°F (66-79°C)", es: "150-175°F (66-79°C)", de: "150-175°F (66-79°C)", nl: "150-175°F (66-79°C)" }
        ],
        correct: 0,
        explanation: {
          en: "Fish should be smoked at lower temperatures (200-225°F) to prevent overcooking and maintain its delicate texture. Fish cooks much faster than red meat.",
          es: "El pescado debe ahumarse a temperaturas más bajas (200-225°F) para prevenir sobrecocción y mantener su textura delicada. El pescado se cocina mucho más rápido que la carne roja.",
          de: "Fisch sollte bei niedrigeren Temperaturen (200-225°F) geräuchert werden, um Überkochen zu verhindern und seine zarte Textur zu erhalten. Fisch kocht viel schneller als rotes Fleisch.",
          nl: "Vis moet worden gerookt op lagere temperaturen (200-225°F) om overkoken te voorkomen en de delicate textuur te behouden. Vis kookt veel sneller dan rood vlees."
        }
      },
      {
        question: {
          en: "What is the purpose of scoring the fat on duck before smoking?",
          es: "¿Cuál es el propósito de hacer cortes en la grasa del pato antes de ahumar?",
          de: "Was ist der Zweck des Einritzens des Fetts bei Ente vor dem Räuchern?",
          nl: "Wat is het doel van het inkerven van het vet op eend voor het roken?"
        },
        options: [
          { en: "To allow fat to render out and prevent bursting", es: "Para permitir que la grasa se derrita y prevenir explosión", de: "Um Fett herauslösen zu lassen und Platzen zu verhindern", nl: "Om vet te laten uitlekken en barsten te voorkomen" },
          { en: "To make it cook faster", es: "Para hacer que cocine más rápido", de: "Um es schneller kochen zu lassen", nl: "Om het sneller te laten koken" },
          { en: "To add more flavor", es: "Para añadir más sabor", de: "Um mehr Geschmack hinzuzufügen", nl: "Om meer smaak toe te voegen" },
          { en: "To make it look prettier", es: "Para hacer que se vea más bonito", de: "Um es hübscher aussehen zu lassen", nl: "Om het er mooier uit te laten zien" }
        ],
        correct: 0,
        explanation: {
          en: "Scoring (making shallow cuts) in duck skin allows the abundant fat to render out slowly during cooking, preventing the skin from bursting and resulting in crispy skin.",
          es: "Hacer cortes (cortes superficiales) en la piel del pato permite que la grasa abundante se derrita lentamente durante la cocción, previniendo que la piel explote y resultando en piel crujiente.",
          de: "Das Einritzen (oberflächliche Schnitte) in Entenhaut ermöglicht es dem reichlichen Fett, während des Kochens langsam herauszulösen, verhindert das Platzen der Haut und führt zu knuspriger Haut.",
          nl: "Het inkerven (oppervlakkige sneden) in eendenhuid zorgt ervoor dat het overvloedige vet langzaam uitlekt tijdens het koken, voorkomt dat de huid barst en resulteert in knapperige huid."
        }
      },
      {
        question: {
          en: "What is the traditional wood used for Texas-style barbecue?",
          es: "¿Cuál es la madera tradicional usada para barbacoa estilo Texas?",
          de: "Was ist das traditionelle Holz für Texas-Style Barbecue?",
          nl: "Wat is het traditionele hout gebruikt voor Texas-stijl barbecue?"
        },
        options: [
          { en: "Post oak", es: "Roble post", de: "Post-Eiche", nl: "Post eik" },
          { en: "Hickory", es: "Nogal americano", de: "Hickory", nl: "Hickory" },
          { en: "Apple", es: "Manzana", de: "Apfel", nl: "Appel" },
          { en: "Cherry", es: "Cereza", de: "Kirsche", nl: "Kers" }
        ],
        correct: 0,
        explanation: {
          en: "Post oak is the traditional wood for Texas barbecue, providing a mild, clean smoke flavor that doesn't overpower the meat, especially beef brisket.",
          es: "El roble post es la madera tradicional para barbacoa de Texas, proporcionando un sabor de humo suave y limpio que no abruma la carne, especialmente el brisket de res.",
          de: "Post-Eiche ist das traditionelle Holz für Texas Barbecue und bietet einen milden, sauberen Rauchgeschmack, der das Fleisch, besonders Rinderbrust, nicht überwältigt.",
          nl: "Post eik is het traditionele hout voor Texas barbecue, dat een milde, schone rooksmaak biedt die het vlees niet overheerst, vooral runderbrisket."
        }
      },
      {
        question: {
          en: "What is 'bark bite' in competition barbecue?",
          es: "¿Qué es 'bark bite' en barbacoa de competencia?",
          de: "Was ist 'Bark Bite' in Competition Barbecue?",
          nl: "Wat is 'bark bite' in competitie barbecue?"
        },
        options: [
          { en: "The ideal balance between crispy exterior and tender interior", es: "El equilibrio ideal entre exterior crujiente e interior tierno", de: "Das ideale Gleichgewicht zwischen knuspriger Außenseite und zartem Inneren", nl: "De ideale balans tussen knapperig exterieur en mals interieur" },
          { en: "When the bark is too hard", es: "Cuando la corteza está demasiado dura", de: "Wenn die Rinde zu hart ist", nl: "Wanneer de korst te hard is" },
          { en: "A type of seasoning", es: "Un tipo de condimento", de: "Eine Art Gewürz", nl: "Een soort kruiding" },
          { en: "A cutting technique", es: "Una técnica de corte", de: "Eine Schneidetechnik", nl: "Een snij techniek" }
        ],
        correct: 0,
        explanation: {
          en: "Bark bite refers to the perfect texture where the dark exterior crust provides pleasant resistance when bitten, while the interior remains tender and juicy.",
          es: "Bark bite se refiere a la textura perfecta donde la corteza exterior oscura proporciona resistencia agradable al morder, mientras el interior permanece tierno y jugoso.",
          de: "Bark Bite bezieht sich auf die perfekte Textur, wo die dunkle äußere Kruste angenehmen Widerstand beim Beißen bietet, während das Innere zart und saftig bleibt.",
          nl: "Bark bite verwijst naar de perfecte textuur waarbij de donkere buitenkorst aangenaam weerstand biedt bij het bijten, terwijl de binnenkant mals en sappig blijft."
        }
      },
      {
        question: {
          en: "What causes 'dirty smoke' and how can it be avoided?",
          es: "¿Qué causa el 'humo sucio' y cómo puede evitarse?",
          de: "Was verursacht 'schmutzigen Rauch' und wie kann er vermieden werden?",
          nl: "Wat veroorzaakt 'vuile rook' en hoe kan het worden vermeden?"
        },
        options: [
          { en: "Incomplete combustion from wet wood or poor airflow; use dry wood and proper ventilation", es: "Combustión incompleta de madera húmeda o flujo de aire pobre; usar madera seca y ventilación adecuada", de: "Unvollständige Verbrennung durch nasses Holz oder schlechte Luftzufuhr; trockenes Holz und richtige Belüftung verwenden", nl: "Onvolledige verbranding van nat hout of slechte luchtstroom; gebruik droog hout en juiste ventilatie" },
          { en: "Using too much wood", es: "Usar demasiada madera", de: "Zu viel Holz verwenden", nl: "Te veel hout gebruiken" },
          { en: "Cooking at too high temperature", es: "Cocinar a temperatura demasiado alta", de: "Bei zu hoher Temperatur kochen", nl: "Koken op te hoge temperatuur" },
          { en: "Not enough seasoning on the meat", es: "No suficiente condimento en la carne", de: "Nicht genug Gewürz auf dem Fleisch", nl: "Niet genoeg kruiding op het vlees" }
        ],
        correct: 0,
        explanation: {
          en: "Dirty smoke is thick, white, and acrid, caused by incomplete combustion. It can be avoided by using properly seasoned dry wood, maintaining good airflow, and ensuring complete combustion for clean, thin blue smoke.",
          es: "El humo sucio es espeso, blanco y acre, causado por combustión incompleta. Puede evitarse usando madera seca bien curada, manteniendo buen flujo de aire, y asegurando combustión completa para humo azul limpio y delgado.",
          de: "Schmutziger Rauch ist dick, weiß und beißend, verursacht durch unvollständige Verbrennung. Er kann vermieden werden durch die Verwendung von richtig abgelagertem trockenem Holz, gute Luftzufuhr und vollständige Verbrennung für sauberen, dünnen blauen Rauch.",
          nl: "Vuile rook is dik, wit en scherp, veroorzaakt door onvolledige verbranding. Het kan worden vermeden door goed gedroogd droog hout te gebruiken, goede luchtstroom te behouden en volledige verbranding te verzekeren voor schone, dunne blauwe rook."
        }
      },
      {
        question: {
          en: "What is the purpose of a 'mop sauce' during long barbecue cooks?",
          es: "¿Cuál es el propósito de una 'salsa mop' durante cocciones largas de barbacoa?",
          de: "Was ist der Zweck einer 'Mop Sauce' während langer Barbecue-Kochvorgänge?",
          nl: "Wat is het doel van een 'mop saus' tijdens lange barbecue kooksessies?"
        },
        options: [
          { en: "To add moisture, flavor layers, and prevent surface drying", es: "Para añadir humedad, capas de sabor y prevenir secado superficial", de: "Um Feuchtigkeit, Geschmacksschichten hinzuzufügen und Oberflächenaustrocknung zu verhindern", nl: "Om vocht, smaaklagen toe te voegen en oppervlakte uitdroging te voorkomen" },
          { en: "To speed up cooking time", es: "Para acelerar el tiempo de cocción", de: "Um die Kochzeit zu verkürzen", nl: "Om de kooktijd te versnellen" },
          { en: "To create a thicker bark", es: "Para crear una corteza más gruesa", de: "Um eine dickere Rinde zu schaffen", nl: "Om een dikkere korst te creëren" },
          { en: "To lower the cooking temperature", es: "Para bajar la temperatura de cocción", de: "Um die Kochtemperatur zu senken", nl: "Om de kooktemperatuur te verlagen" }
        ],
        correct: 0,
        explanation: {
          en: "Mop sauce is a thin liquid applied with a brush or 'mop' during cooking to add moisture, build flavor complexity, and prevent the surface from drying out during long smoking sessions.",
          es: "La salsa mop es un líquido delgado aplicado con brocha o 'mop' durante la cocción para añadir humedad, construir complejidad de sabor y prevenir que la superficie se seque durante sesiones largas de ahumado.",
          de: "Mop Sauce ist eine dünne Flüssigkeit, die mit einem Pinsel oder 'Mop' während des Kochens aufgetragen wird, um Feuchtigkeit hinzuzufügen, Geschmackskomplexität aufzubauen und die Oberfläche vor dem Austrocknen während langer Räuchersitzungen zu schützen.",
          nl: "Mop saus is een dunne vloeistof die met een kwast of 'mop' tijdens het koken wordt aangebracht om vocht toe te voegen, smaakcomplexiteit op te bouwen en te voorkomen dat het oppervlak uitdroogt tijdens lange rooksessies."
        }
      },
      {
        question: {
          en: "What is the ideal internal temperature for smoked pork ribs?",
          es: "¿Cuál es la temperatura interna ideal para costillas de cerdo ahumadas?",
          de: "Was ist die ideale Innentemperatur für geräucherte Schweinerippchen?",
          nl: "Wat is de ideale interne temperatuur voor gerookte varkensribs?"
        },
        options: [
          { en: "195-203°F (90-95°C)", es: "195-203°F (90-95°C)", de: "195-203°F (90-95°C)", nl: "195-203°F (90-95°C)" },
          { en: "145°F (63°C)", es: "145°F (63°C)", de: "145°F (63°C)", nl: "145°F (63°C)" },
          { en: "165°F (74°C)", es: "165°F (74°C)", de: "165°F (74°C)", nl: "165°F (74°C)" },
          { en: "180°F (82°C)", es: "180°F (82°C)", de: "180°F (82°C)", nl: "180°F (82°C)" }
        ],
        correct: 0,
        explanation: {
          en: "Pork ribs should reach 195-203°F internal temperature for optimal tenderness. At this temperature, the collagen has fully converted to gelatin, making the meat tender enough to pull cleanly from the bone.",
          es: "Las costillas de cerdo deben alcanzar 195-203°F de temperatura interna para ternura óptima. A esta temperatura, el colágeno se ha convertido completamente en gelatina, haciendo la carne lo suficientemente tierna para separarse limpiamente del hueso.",
          de: "Schweinerippchen sollten 195-203°F Innentemperatur für optimale Zartheit erreichen. Bei dieser Temperatur hat sich das Kollagen vollständig zu Gelatine umgewandelt, wodurch das Fleisch zart genug wird, um sauber vom Knochen zu lösen.",
          nl: "Varkensribs moeten 195-203°F interne temperatuur bereiken voor optimale malheid. Bij deze temperatuur is het collageen volledig omgezet naar gelatine, waardoor het vlees mals genoeg wordt om schoon van het bot te trekken."
        }
      },
      {
        question: {
          en: "What distinguishes Kansas City style ribs from other regional styles?",
          es: "¿Qué distingue las costillas estilo Kansas City de otros estilos regionales?",
          de: "Was unterscheidet Kansas City Style Rippen von anderen regionalen Stilen?",
          nl: "Wat onderscheidt Kansas City stijl ribs van andere regionale stijlen?"
        },
        options: [
          { en: "Thick, sweet molasses-based sauce applied during cooking", es: "Salsa espesa y dulce a base de melaza aplicada durante la cocción", de: "Dicke, süße melassebasierte Sauce, die während des Kochens aufgetragen wird", nl: "Dikke, zoete op melasse gebaseerde saus aangebracht tijdens het koken" },
          { en: "No sauce, only dry rub", es: "Sin salsa, solo rub seco", de: "Keine Sauce, nur Dry Rub", nl: "Geen saus, alleen dry rub" },
          { en: "Vinegar-based thin sauce", es: "Salsa delgada a base de vinagre", de: "Dünne essigbasierte Sauce", nl: "Dunne op azijn gebaseerde saus" },
          { en: "Mustard-based yellow sauce", es: "Salsa amarilla a base de mostaza", de: "Gelbe senfbasierte Sauce", nl: "Gele op mosterd gebaseerde saus" }
        ],
        correct: 0,
        explanation: {
          en: "Kansas City style ribs are characterized by their thick, sweet, molasses and tomato-based sauce that's often applied during the last portion of cooking, creating a glossy, caramelized exterior.",
          es: "Las costillas estilo Kansas City se caracterizan por su salsa espesa, dulce, a base de melaza y tomate que a menudo se aplica durante la última porción de cocción, creando un exterior brillante y caramelizado.",
          de: "Kansas City Style Rippen sind charakterisiert durch ihre dicke, süße, melasse- und tomatenbasierte Sauce, die oft während des letzten Teils des Kochens aufgetragen wird und eine glänzende, karamelisierte Außenseite schafft.",
          nl: "Kansas City stijl ribs worden gekenmerkt door hun dikke, zoete, op melasse en tomaat gebaseerde saus die vaak tijdens het laatste deel van het koken wordt aangebracht, wat een glanzend, gekarameliseerd exterieur creëert."
        }
      {
        question: {
          en: "Why is 'probe tenderness' a better indicator than temperature alone for brisket?",
          es: "¿Por qué la 'ternura de sonda' es un mejor indicador que la temperatura sola para brisket?",
          de: "Warum ist 'Sondenzartheit' ein besserer Indikator als Temperatur allein für Brisket?",
          nl: "Waarom is 'sonde malheid' een betere indicator dan temperatuur alleen voor brisket?"
        },
        options: [
          { en: "Tests actual tenderness, accounts for individual meat variations", es: "Prueba ternura real, considera variaciones individuales de carne", de: "Testet tatsächliche Zartheit, berücksichtigt individuelle Fleischvariationen", nl: "Test daadwerkelijke malheid, houdt rekening met individuele vleesvariaties" },
          { en: "Temperature is the only accurate measurement", es: "La temperatura es la única medida precisa", de: "Temperatur ist die einzige genaue Messung", nl: "Temperatuur is de enige nauwkeurige meting" },
          { en: "Probe tenderness measures smoke absorption", es: "Ternura de sonda mide absorción de humo", de: "Sondenzartheit misst Rauchaufnahme", nl: "Sonde malheid meet rook absorptie" },
          { en: "It speeds up cooking time", es: "Acelera el tiempo de cocción", de: "Es beschleunigt die Kochzeit", nl: "Het versnelt de kooktijd" }
        ],
        correct: 0,
        explanation: {
          en: "Probe tenderness tests how easily a thermometer probe slides through meat, indicating actual breakdown of collagen and connective tissue. Temperature alone doesn't account for differences in individual briskets' composition, age, or marbling.",
          es: "La ternura de sonda prueba qué tan fácilmente una sonda de termómetro se desliza a través de la carne, indicando descomposición real de colágeno y tejido conectivo. La temperatura sola no considera diferencias en composición, edad o marmoleo de briskets individuales.",
          de: "Sondenzartheit testet wie leicht eine Thermometersonde durch Fleisch gleitet und zeigt tatsächlichen Abbau von Kollagen und Bindegewebe an. Temperatur allein berücksichtigt keine Unterschiede in Zusammensetzung, Alter oder Marmorierung individueller Briskets.",
          nl: "Sonde malheid test hoe gemakkelijk een thermometer sonde door vlees glijdt, wat daadwerkelijke afbraak van collageen en bindweefsel aangeeft. Temperatuur alleen houdt geen rekening met verschillen in samenstelling, leeftijd of marmerering van individuele briskets."
        }
      },
      {
        question: {
          en: "What causes meat to 'tighten up' if not rested properly after cooking?",
          es: "¿Qué causa que la carne se 'apriete' si no reposa correctamente después de cocinar?",
          de: "Was verursacht das 'Zusammenziehen' von Fleisch wenn es nach dem Kochen nicht richtig ruht?",
          nl: "Wat veroorzaakt dat vlees 'samentrekt' als het niet goed rust na het koken?"
        },
        options: [
          { en: "Juices haven't redistributed, muscle fibers contract when cut immediately", es: "Los jugos no se han redistribuido, las fibras musculares se contraen cuando se corta inmediatamente", de: "Säfte haben sich nicht verteilt, Muskelfasern ziehen sich zusammen wenn sofort geschnitten", nl: "Sappen hebben zich niet herverdeeld, spiervezels trekken samen wanneer onmiddellijk gesneden" },
          { en: "The meat is overcooked", es: "La carne está sobrecocida", de: "Das Fleisch ist übergekocht", nl: "Het vlees is overbakken" },
          { en: "Too much smoke was used", es: "Se usó demasiado humo", de: "Zu viel Rauch wurde verwendet", nl: "Te veel rook werd gebruikt" },
          { en: "The resting temperature was too low", es: "La temperatura de reposo fue demasiado baja", de: "Die Ruhetemperatur war zu niedrig", nl: "De rusttemperatuur was te laag" }
        ],
        correct: 0,
        explanation: {
          en: "When meat rests, juices redistribute from the center throughout the muscle fibers. Cutting immediately causes juices to run out and muscle fibers to contract, resulting in tougher, drier meat. Proper resting allows proteins to relax and juices to stabilize.",
          es: "Cuando la carne reposa, los jugos se redistribuyen desde el centro por todas las fibras musculares. Cortar inmediatamente hace que los jugos se escapen y las fibras musculares se contraigan, resultando en carne más dura y seca. El reposo adecuado permite que las proteínas se relajen y los jugos se estabilicen.",
          de: "Wenn Fleisch ruht, verteilen sich Säfte vom Zentrum durch die Muskelfasern. Sofortiges Schneiden führt zum Auslaufen von Säften und Kontraktion der Muskelfasern, was in zäherem, trockenerem Fleisch resultiert. Richtiges Ruhen erlaubt Proteinen sich zu entspannen und Säften zu stabilisieren.",
          nl: "Wanneer vlees rust, herverdelen sappen zich van het centrum door de spiervezels. Onmiddellijk snijden veroorzaakt dat sappen uitlopen en spiervezels samentrekken, resulterend in taaier, droger vlees. Goed rusten laat proteïnen ontspannen en sappen stabiliseren."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else {
    window.barbecueLevel3 = level3;
  }
})();
