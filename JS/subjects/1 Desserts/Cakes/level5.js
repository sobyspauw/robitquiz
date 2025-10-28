// Quiz Level 5: Dessert - Taarten
(function() {
  const level5 = {
    name: {
      en: "Cakes - Intermediate",
      es: "Pasteles - Intermedio",
      de: "Kuchen - Fortgeschrittene",
      nl: "Taarten - Gemiddeld"
    },
    questions: [
      {
        question: {
          en: "What is the difference between ganache and glaze?",
          es: "¿Cuál es la diferencia entre ganache y glaseado?",
          de: "Was ist der Unterschied zwischen Ganache und Glasur?",
          nl: "Wat is het verschil tussen ganache en glazuur?"
        },
        options: [
          { en: "Ganache uses cream, glaze uses water", es: "Ganache usa crema, glaseado usa agua", de: "Ganache verwendet Sahne, Glasur verwendet Wasser", nl: "Ganache gebruikt room, glazuur gebruikt water" },
          { en: "Ganache is thicker and richer, glaze is thin and shiny", es: "Ganache es más espeso y rico, glaseado es delgado y brillante", de: "Ganache ist dicker und reicher, Glasur ist dünn und glänzend", nl: "Ganache is dikker en rijker, glazuur is dun en glanzend" },
          { en: "They are exactly the same", es: "Son exactamente iguales", de: "Sie sind genau gleich", nl: "Ze zijn precies hetzelfde" },
          { en: "Glaze contains chocolate, ganache doesn't", es: "El glaseado contiene chocolate, ganache no", de: "Glasur enthält Schokolade, Ganache nicht", nl: "Glazuur bevat chocolade, ganache niet" }
        ],
        correct: 1,
        explanation: {
          en: "Ganache is a rich mixture of chocolate and cream, creating a thick, creamy texture. Glaze is a thin, shiny coating made from powdered sugar, liquid, and sometimes gelatin.",
          es: "Ganache es una mezcla rica de chocolate y crema, creando una textura espesa y cremosa. El glaseado es una cobertura delgada y brillante hecha de azúcar en polvo, líquido y a veces gelatina.",
          de: "Ganache ist eine reichhaltige Mischung aus Schokolade und Sahne, die eine dicke, cremige Textur schafft. Glasur ist eine dünne, glänzende Beschichtung aus Puderzucker, Flüssigkeit und manchmal Gelatine.",
          nl: "Ganache is een rijke mengsel van chocolade en room, wat een dikke, romige textuur creëert. Glazuur is een dunne, glanzende coating gemaakt van poedersuiker, vloeistof en soms gelatine."
        }
      },
      {
        question: {
          en: "What is the purpose of adding corn syrup to fondant?",
          es: "¿Cuál es el propósito de añadir jarabe de maíz al fondant?",
          de: "Was ist der Zweck, Maissirup zu Fondant hinzuzufügen?",
          nl: "Wat is het doel van het toevoegen van glucosestroop aan fondant?"
        },
        options: [
          { en: "To make it sweeter", es: "Para hacerlo más dulce", de: "Um es süßer zu machen", nl: "Om het zoeter te maken" },
          { en: "To prevent crystallization and add pliability", es: "Para prevenir cristalización y añadir flexibilidad", de: "Um Kristallisation zu verhindern und Biegsamkeit hinzuzufügen", nl: "Om kristallisatie te voorkomen en buigzaamheid toe te voegen" },
          { en: "To change the color", es: "Para cambiar el color", de: "Um die Farbe zu ändern", nl: "Om de kleur te veranderen" },
          { en: "To make it dry faster", es: "Para que se seque más rápido", de: "Damit es schneller trocknet", nl: "Om het sneller te laten drogen" }
        ],
        correct: 1,
        explanation: {
          en: "Corn syrup prevents sugar crystallization in fondant and keeps it smooth and pliable, making it easier to roll and work with for cake covering.",
          es: "El jarabe de maíz previene la cristalización del azúcar en el fondant y lo mantiene suave y flexible, haciéndolo más fácil de enrollar y trabajar para cubrir pasteles.",
          de: "Maissirup verhindert Zuckerkristallisation im Fondant und hält es glatt und biegsam, wodurch es leichter zu rollen und für die Kuchenabdeckung zu verarbeiten ist.",
          nl: "Glucosestroop voorkomt suikerkristallisatie in fondant en houdt het glad en buigzaam, waardoor het gemakkelijker te rollen en te bewerken is voor taartbedekking."
        }
      },
      {
        question: {
          en: "What is the ideal ratio for classic chocolate ganache?",
          es: "¿Cuál es la proporción ideal para ganache de chocolate clásico?",
          de: "Was ist das ideale Verhältnis für klassische Schokoladen-Ganache?",
          nl: "Wat is de ideale verhouding voor klassieke chocolade ganache?"
        },
        options: [
          { en: "1:1 chocolate to cream by weight", es: "1:1 chocolate a crema por peso", de: "1:1 Schokolade zu Sahne nach Gewicht", nl: "1:1 chocolade tot room op gewicht" },
          { en: "2:1 chocolate to cream by weight", es: "2:1 chocolate a crema por peso", de: "2:1 Schokolade zu Sahne nach Gewicht", nl: "2:1 chocolade tot room op gewicht" },
          { en: "1:2 chocolate to cream by weight", es: "1:2 chocolate a crema por peso", de: "1:2 Schokolade zu Sahne nach Gewicht", nl: "1:2 chocolade tot room op gewicht" },
          { en: "3:1 chocolate to cream by weight", es: "3:1 chocolate a crema por peso", de: "3:1 Schokolade zu Sahne nach Gewicht", nl: "3:1 chocolade tot room op gewicht" }
        ],
        correct: 0,
        explanation: {
          en: "Classic ganache uses a 1:1 ratio of chocolate to cream by weight, creating the perfect balance of richness and workability for glazing and filling.",
          es: "El ganache clásico usa una proporción 1:1 de chocolate a crema por peso, creando el equilibrio perfecto de riqueza y trabajabilidad para glasear y rellenar.",
          de: "Klassische Ganache verwendet ein 1:1-Verhältnis von Schokolade zu Sahne nach Gewicht, wodurch die perfekte Balance aus Reichhaltigkeit und Verarbeitbarkeit für Glasieren und Füllen entsteht.",
          nl: "Klassieke ganache gebruikt een 1:1 verhouding van chocolade tot room op gewicht, wat de perfecte balans van rijkdom en bewerkbaarheid creëert voor glazuren en vullen."
        }
      },
      {
        question: {
          en: "What technique creates the characteristic spiral pattern in a joconde sponge?",
          es: "¿Qué técnica crea el patrón de espiral característico en un bizcocho joconde?",
          de: "Welche Technik erzeugt das charakteristische Spiralmuster in einem Joconde-Biskuit?",
          nl: "Welke techniek creëert het karakteristieke spiraalpatroon in een joconde biscuit?"
        },
        options: [
          { en: "Using a special mold", es: "Usar un molde especial", de: "Verwendung einer speziellen Form", nl: "Een speciale vorm gebruiken" },
          { en: "Spreading patterned batter on a sheet, then pouring plain batter over", es: "Extender masa con patrón en una lámina, luego verter masa lisa encima", de: "Gemusterten Teig auf ein Blech streichen, dann einfachen Teig darüber gießen", nl: "Gepatroon beslag op een plaat uitspreiden, dan gewoon beslag erover gieten" },
          { en: "Adding food coloring while baking", es: "Añadir colorante alimentario mientras se hornea", de: "Lebensmittelfarbe während des Backens hinzufügen", nl: "Voedselkleurstof toevoegen tijdens het bakken" },
          { en: "Rolling the cake while warm", es: "Enrollar el pastel mientras está caliente", de: "Den Kuchen warm rollen", nl: "De taart rollen terwijl hij warm is" }
        ],
        correct: 1,
        explanation: {
          en: "Joconde sponge patterns are created by first spreading a thin layer of colored, flavored batter in a design, then covering with plain joconde batter before baking.",
          es: "Los patrones del bizcocho joconde se crean primero extendiendo una capa delgada de masa coloreada y con sabor en un diseño, luego cubriendo con masa joconde lisa antes de hornear.",
          de: "Joconde-Biskuitmuster entstehen, indem zuerst eine dünne Schicht gefärbter, aromatisierter Teig in einem Design ausgebreitet wird, dann mit einfachem Joconde-Teig bedeckt wird, bevor gebacken wird.",
          nl: "Joconde biscuit patronen worden gecreëerd door eerst een dunne laag gekleurde, gearomatiseerde beslag in een ontwerp uit te spreiden, dan te bedekken met gewone joconde beslag voor het bakken."
        }
      },
      {
        question: {
          en: "What distinguishes a Bavarian cream from a mousse?",
          es: "¿Qué distingue una crema bávara de una mousse?",
          de: "Was unterscheidet eine Bayerische Creme von einer Mousse?",
          nl: "Wat onderscheidt een Beierse room van een mousse?"
        },
        options: [
          { en: "Bavarian cream contains gelatin and whipped cream, mousse uses eggs", es: "La crema bávara contiene gelatina y crema batida, mousse usa huevos", de: "Bayerische Creme enthält Gelatine und Schlagsahne, Mousse verwendet Eier", nl: "Beierse room bevat gelatine en slagroom, mousse gebruikt eieren" },
          { en: "Bavarian cream is always chocolate flavored", es: "La crema bávara siempre tiene sabor a chocolate", de: "Bayerische Creme ist immer schokoladengeschmack", nl: "Beierse room is altijd chocolade smaak" },
          { en: "They are exactly the same", es: "Son exactamente iguales", de: "Sie sind genau gleich", nl: "Ze zijn precies hetzelfde" },
          { en: "Mousse is always served cold", es: "La mousse siempre se sirve fría", de: "Mousse wird immer kalt serviert", nl: "Mousse wordt altijd koud geserveerd" }
        ],
        correct: 0,
        explanation: {
          en: "Bavarian cream is made with a custard base, gelatin for setting, and whipped cream folded in. Mousse typically uses eggs (or chocolate) and whipped cream for a lighter, airier texture.",
          es: "La crema bávara se hace con base de natillas, gelatina para cuajar, y crema batida incorporada. La mousse típicamente usa huevos (o chocolate) y crema batida para una textura más ligera y aireada.",
          de: "Bayerische Creme wird mit einer Puddingbasis, Gelatine zum Abbinden und eingerührter Schlagsahne hergestellt. Mousse verwendet typischerweise Eier (oder Schokolade) und Schlagsahne für eine leichtere, luftigere Textur.",
          nl: "Beierse room wordt gemaakt met een custard basis, gelatine voor het stollen, en slagroom erdoor gevouwen. Mousse gebruikt doorgaans eieren (of chocolade) en slagroom voor een lichtere, luchtigere textuur."
        }
      },
      {
        question: {
          en: "What is the purpose of inverting a cake immediately after baking for angel food or chiffon cakes?",
          es: "¿Cuál es el propósito de invertir un pastel inmediatamente después de hornear para pasteles angel food o chiffon?",
          de: "Was ist der Zweck, einen Kuchen sofort nach dem Backen für Angel Food oder Chiffon-Kuchen umzudrehen?",
          nl: "Wat is het doel van het omkeren van een taart direct na het bakken voor angel food of chiffon taarten?"
        },
        options: [
          { en: "To cool faster", es: "Para enfriar más rápido", de: "Um schneller abzukühlen", nl: "Om sneller af te koelen" },
          { en: "To prevent the delicate structure from collapsing", es: "Para prevenir que la estructura delicada se colapse", de: "Um zu verhindern, dass die empfindliche Struktur zusammenbricht", nl: "Om te voorkomen dat de delicate structuur instort" },
          { en: "To add moisture", es: "Para añadir humedad", de: "Um Feuchtigkeit hinzuzufügen", nl: "Om vocht toe te voegen" },
          { en: "To release from the pan easier", es: "Para desmoldar más fácil", de: "Um leichter aus der Form zu lösen", nl: "Om gemakkelijker uit de vorm te halen" }
        ],
        correct: 1,
        explanation: {
          en: "Angel food and chiffon cakes have delicate foam structures that rely on air bubbles. Inverting prevents the weight of the cake from compressing these bubbles and collapsing.",
          es: "Los pasteles angel food y chiffon tienen estructuras de espuma delicadas que dependen de burbujas de aire. Invertir previene que el peso del pastel comprima estas burbujas y se colapse.",
          de: "Angel Food und Chiffon-Kuchen haben empfindliche Schaumstrukturen, die auf Luftbläschen angewiesen sind. Das Umdrehen verhindert, dass das Gewicht des Kuchens diese Bläschen zusammendrückt und zusammenbricht.",
          nl: "Angel food en chiffon taarten hebben delicate schuimstructuren die afhankelijk zijn van luchtbellen. Omkeren voorkomt dat het gewicht van de taart deze bellen samendrukt en instort."
        }
      },
      {
        question: {
          en: "What is the main difference between European and American buttercream?",
          es: "¿Cuál es la principal diferencia entre crema de mantequilla europea y americana?",
          de: "Was ist der Hauptunterschied zwischen europäischer und amerikanischer Buttercreme?",
          nl: "Wat is het hoofdverschil tussen Europese en Amerikaanse botercrème?"
        },
        options: [
          { en: "European uses egg yolks or meringue, American uses powdered sugar", es: "La europea usa yemas de huevo o merengue, la americana usa azúcar en polvo", de: "Europäische verwendet Eigelb oder Baiser, amerikanische verwendet Puderzucker", nl: "Europese gebruikt eidooiers of meringue, Amerikaanse gebruikt poedersuiker" },
          { en: "European is always chocolate flavored", es: "La europea siempre tiene sabor a chocolate", de: "Europäische ist immer schokoladengeschmack", nl: "Europese is altijd chocolade smaak" },
          { en: "American uses more butter", es: "La americana usa más mantequilla", de: "Amerikanische verwendet mehr Butter", nl: "Amerikaanse gebruikt meer boter" },
          { en: "They are exactly the same", es: "Son exactamente iguales", de: "Sie sind genau gleich", nl: "Ze zijn precies hetzelfde" }
        ],
        correct: 0,
        explanation: {
          en: "European-style buttercreams (Swiss, Italian, French) use egg yolks or meringue as a base with butter, creating silky, less sweet results. American buttercream simply creams butter with powdered sugar.",
          es: "Las cremas de mantequilla estilo europeo (suiza, italiana, francesa) usan yemas de huevo o merengue como base con mantequilla, creando resultados sedosos y menos dulces. La crema americana simplemente bate mantequilla con azúcar en polvo.",
          de: "Europäische Buttercremes (Schweizer, italienische, französische) verwenden Eigelb oder Baiser als Basis mit Butter, wodurch seidige, weniger süße Ergebnisse entstehen. Amerikanische Buttercreme schlägt einfach Butter mit Puderzucker auf.",
          nl: "Europese botercrèmes (Zwitsers, Italiaans, Frans) gebruiken eidooiers of meringue als basis met boter, wat zijdeachtige, minder zoete resultaten creëert. Amerikaanse botercrème klopt gewoon boter met poedersuiker."
        }
      },
      {
        question: {
          en: "What technique is used to create the layers in a mille-feuille?",
          es: "¿Qué técnica se usa para crear las capas en un milhojas?",
          de: "Welche Technik wird verwendet, um die Schichten in einem Mille-feuille zu schaffen?",
          nl: "Welke techniek wordt gebruikt om de lagen in een tompouce te creëren?"
        },
        options: [
          { en: "Beating air into batter", es: "Batir aire en la masa", de: "Luft in den Teig schlagen", nl: "Lucht in het beslag kloppen" },
          { en: "Laminating puff pastry with multiple folds", es: "Laminar hojaldre con múltiples pliegues", de: "Blätterteig mit mehrfachen Falten laminieren", nl: "Bladerdeeg lamineren met meerdere vouwen" },
          { en: "Using gelatin", es: "Usar gelatina", de: "Gelatine verwenden", nl: "Gelatine gebruiken" },
          { en: "Freezing between layers", es: "Congelar entre capas", de: "Zwischen den Schichten einfrieren", nl: "Bevriezen tussen lagen" }
        ],
        correct: 1,
        explanation: {
          en: "Mille-feuille (Napoleon cake) is made with puff pastry that's created through lamination - repeatedly folding and rolling dough with butter to create hundreds of thin layers.",
          es: "El milhojas (pastel Napoleón) se hace con hojaldre que se crea a través de laminación - doblar y enrollar repetidamente masa con mantequilla para crear cientos de capas delgadas.",
          de: "Mille-feuille (Napoleonkuchen) wird mit Blätterteig hergestellt, der durch Laminierung entsteht - wiederholtes Falten und Rollen von Teig mit Butter, um Hunderte dünner Schichten zu schaffen.",
          nl: "Tompouce wordt gemaakt met bladerdeeg dat wordt gecreëerd door lamineren - herhaaldelijk vouwen en rollen van deeg met boter om honderden dunne lagen te creëren."
        }
      },
      {
        question: {
          en: "What is the key difference between a tart and a galette?",
          es: "¿Cuál es la diferencia clave entre una tarta y una galette?",
          de: "Was ist der Hauptunterschied zwischen einer Torte und einer Galette?",
          nl: "Wat is het belangrijkste verschil tussen een taart en een galette?"
        },
        options: [
          { en: "Tart uses a tart pan with removable sides, galette is free-form", es: "La tarta usa un molde con lados removibles, galette es de forma libre", de: "Torte verwendet eine Tarteform mit abnehmbaren Seiten, Galette ist frei geformt", nl: "Taart gebruikt een taartvorm met uitneembare zijkanten, galette is vrij gevormd" },
          { en: "Galette is always sweet, tart is always savory", es: "Galette es siempre dulce, tarta es siempre salada", de: "Galette ist immer süß, Torte ist immer herzhaft", nl: "Galette is altijd zoet, taart is altijd hartig" },
          { en: "They are exactly the same", es: "Son exactamente iguales", de: "Sie sind genau gleich", nl: "Ze zijn precies hetzelfde" },
          { en: "Tart has no crust", es: "La tarta no tiene corteza", de: "Torte hat keine Kruste", nl: "Taart heeft geen korst" }
        ],
        correct: 0,
        explanation: {
          en: "A tart is baked in a structured pan with sides, creating uniform shape. A galette is free-form pastry folded around filling, creating rustic, irregular edges.",
          es: "Una tarta se hornea en un molde estructurado con lados, creando forma uniforme. Una galette es hojaldre de forma libre doblado alrededor del relleno, creando bordes rústicos e irregulares.",
          de: "Eine Torte wird in einer strukturierten Form mit Seiten gebacken, wodurch eine gleichmäßige Form entsteht. Eine Galette ist frei geformter Teig, der um die Füllung gefaltet wird und rustikale, unregelmäßige Ränder schafft.",
          nl: "Een taart wordt gebakken in een gestructureerde vorm met zijkanten, wat een uniforme vorm creëert. Een galette is vrij gevormd deeg gevouwen om de vulling, wat rustieke, onregelmatige randen creëert."
        }
      },
      {
        question: {
          en: "What causes curdling when making lemon curd?",
          es: "¿Qué causa que se corte al hacer lemon curd?",
          de: "Was verursacht das Gerinnen beim Lemon Curd machen?",
          nl: "Wat veroorzaakt schifting bij het maken van lemon curd?"
        },
        options: [
          { en: "Using too much lemon juice", es: "Usar demasiado jugo de limón", de: "Zu viel Zitronensaft verwenden", nl: "Te veel citroensap gebruiken" },
          { en: "Cooking at too high temperature or adding acid too quickly", es: "Cocinar a temperatura muy alta o añadir ácido muy rápido", de: "Bei zu hoher Temperatur kochen oder Säure zu schnell hinzufügen", nl: "Koken op te hoge temperatuur of zuur te snel toevoegen" },
          { en: "Not enough sugar", es: "No suficiente azúcar", de: "Nicht genug Zucker", nl: "Niet genoeg suiker" },
          { en: "Using cold eggs", es: "Usar huevos fríos", de: "Kalte Eier verwenden", nl: "Koude eieren gebruiken" }
        ],
        correct: 1,
        explanation: {
          en: "Curdling in lemon curd occurs when eggs are cooked too quickly at high heat or when acidic lemon juice is added too rapidly, causing proteins to coagulate unevenly.",
          es: "El cortado en lemon curd ocurre cuando los huevos se cocinan muy rápido a alta temperatura o cuando el jugo de limón ácido se añade muy rápidamente, causando que las proteínas se coagulen desigualmente.",
          de: "Gerinnen in Lemon Curd tritt auf, wenn Eier zu schnell bei hoher Hitze gekocht werden oder wenn saurer Zitronensaft zu schnell hinzugefügt wird, wodurch Proteine ungleichmäßig gerinnen.",
          nl: "Schifting in lemon curd treedt op wanneer eieren te snel worden gekookt op hoge warmte of wanneer zure citroensap te snel wordt toegevoegd, waardoor eiwitten ongelijkmatig stollen."
        }
      },
      {
        question: {
          en: "What is the purpose of using cake flour instead of all-purpose flour in delicate cakes?",
          es: "¿Cuál es el propósito de usar harina para pasteles en lugar de harina común en pasteles delicados?",
          de: "Was ist der Zweck, Kuchenmehl anstatt Allzweckmehl in zarten Kuchen zu verwenden?",
          nl: "Wat is het doel van het gebruik van cakebloem in plaats van patentbloem in delicate taarten?"
        },
        options: [
          { en: "Cake flour has lower protein content (6-8%), creating more tender texture", es: "La harina para pasteles tiene menor contenido de proteína (6-8%), creando textura más tierna", de: "Kuchenmehl hat niedrigeren Proteingehalt (6-8%), wodurch eine zartere Textur entsteht", nl: "Cakebloem heeft lager eiwitgehalte (6-8%), wat een zachtere textuur creëert" },
          { en: "Cake flour is sweeter", es: "La harina para pasteles es más dulce", de: "Kuchenmehl ist süßer", nl: "Cakebloem is zoeter" },
          { en: "Cake flour is more expensive so it's better", es: "La harina para pasteles es más cara así que es mejor", de: "Kuchenmehl ist teurer, also ist es besser", nl: "Cakebloem is duurder dus het is beter" },
          { en: "There's no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Cake flour's lower protein content (6-8% vs 10-12% in all-purpose) means less gluten development, resulting in more tender, delicate crumb structure perfect for fine cakes.",
          es: "El menor contenido de proteína de la harina para pasteles (6-8% vs 10-12% en harina común) significa menos desarrollo de gluten, resultando en estructura de miga más tierna y delicada perfecta para pasteles finos.",
          de: "Der niedrigere Proteingehalt von Kuchenmehl (6-8% vs 10-12% in Allzweckmehl) bedeutet weniger Glutenentwicklung, was zu einer zarteren, delikateren Krumenstruktur führt, die perfekt für feine Kuchen ist.",
          nl: "Het lagere eiwitgehalte van cakebloem (6-8% vs 10-12% in patentbloem) betekent minder glutenontwikkeling, wat resulteert in een zachtere, delicatere kruimelstructuur perfect voor fijne taarten."
        }
      },
      {
        question: {
          en: "What technique prevents over-whipping when making Swiss meringue?",
          es: "¿Qué técnica previene el batido excesivo al hacer merengue suizo?",
          de: "Welche Technik verhindert Überschlagen beim Schweizer Baiser machen?",
          nl: "Welke techniek voorkomt te veel kloppen bij het maken van Zwitserse meringue?"
        },
        options: [
          { en: "Adding cream of tartar", es: "Añadir cremor tártaro", de: "Weinstein hinzufügen", nl: "Wijnsteen toevoegen" },
          { en: "Stopping when peaks hold their shape and mixture feels cool", es: "Parar cuando los picos mantienen su forma y la mezcla se siente fría", de: "Aufhören, wenn Spitzen ihre Form halten und die Mischung sich kühl anfühlt", nl: "Stoppen wanneer pieken hun vorm behouden en het mengsel koel aanvoelt" },
          { en: "Using cold eggs", es: "Usar huevos fríos", de: "Kalte Eier verwenden", nl: "Koude eieren gebruiken" },
          { en: "Adding sugar slowly", es: "Añadir azúcar lentamente", de: "Zucker langsam hinzufügen", nl: "Suiker langzaam toevoegen" }
        ],
        correct: 1,
        explanation: {
          en: "Swiss meringue is done when it holds stiff peaks and the bowl feels cool to touch, indicating the sugar is dissolved and proteins are properly set without over-whipping.",
          es: "El merengue suizo está listo cuando mantiene picos firmes y el tazón se siente frío al tacto, indicando que el azúcar está disuelto y las proteínas están correctamente fijadas sin batido excesivo.",
          de: "Schweizer Baiser ist fertig, wenn es steife Spitzen hält und die Schüssel sich kühl anfühlt, was anzeigt, dass der Zucker aufgelöst ist und die Proteine richtig gesetzt sind ohne Überschlagen.",
          nl: "Zwitserse meringue is klaar wanneer het stijve pieken houdt en de kom koel aanvoelt, wat aangeeft dat de suiker is opgelost en eiwitten goed zijn ingesteld zonder te veel kloppen."
        }
      },
      {
        question: {
          en: "What is the function of egg yolks in pastry cream?",
          es: "¿Cuál es la función de las yemas de huevo en la crema pastelera?",
          de: "Was ist die Funktion von Eigelb in Konditorcreme?",
          nl: "Wat is de functie van eidooiers in patisseriereoom?"
        },
        options: [
          { en: "Only for color", es: "Solo para color", de: "Nur für Farbe", nl: "Alleen voor kleur" },
          { en: "Thickening through lecithin and protein coagulation", es: "Espesamiento a través de lecitina y coagulación de proteínas", de: "Verdickung durch Lecithin und Proteinkoagulation", nl: "Verdikking door lecithine en eiwitcoagulatie" },
          { en: "Only for richness", es: "Solo para riqueza", de: "Nur für Reichhaltigkeit", nl: "Alleen voor rijkdom" },
          { en: "To make it sweet", es: "Para hacerlo dulce", de: "Um es süß zu machen", nl: "Om het zoet te maken" }
        ],
        correct: 1,
        explanation: {
          en: "Egg yolks contain lecithin (an emulsifier) and proteins that coagulate when heated, providing the primary thickening power in pastry cream along with richness and smooth texture.",
          es: "Las yemas de huevo contienen lecitina (un emulsificante) y proteínas que se coagulan cuando se calientan, proporcionando el poder espesante principal en la crema pastelera junto con riqueza y textura suave.",
          de: "Eigelb enthält Lecithin (ein Emulgator) und Proteine, die beim Erhitzen gerinnen und die primäre Verdickungskraft in Konditorcreme bieten, zusammen mit Reichhaltigkeit und glatter Textur.",
          nl: "Eidooiers bevatten lecithine (een emulgator) en eiwitten die stollen wanneer verhit, wat de primaire verdikkingskracht in patisseriereoom biedt samen met rijkdom en gladde textuur."
        }
      },
      {
        question: {
          en: "What is the optimal proofing temperature for enriched yeast doughs (brioche, challah)?",
          es: "¿Cuál es la temperatura óptima de fermentación para masas de levadura enriquecidas (brioche, challah)?",
          de: "Was ist die optimale Gehtemperatur für angereicherte Hefeteige (Brioche, Challah)?",
          nl: "Wat is de optimale rijstemperatuur voor verrijkte gistdegen (brioche, challah)?"
        },
        options: [
          { en: "Room temperature (70-75°F/21-24°C)", es: "Temperatura ambiente (70-75°F/21-24°C)", de: "Raumtemperatur (21-24°C)", nl: "Kamertemperatuur (21-24°C)" },
          { en: "Very warm (90-95°F/32-35°C)", es: "Muy caliente (90-95°F/32-35°C)", de: "Sehr warm (32-35°C)", nl: "Erg warm (32-35°C)" },
          { en: "Cool (60-65°F/15-18°C)", es: "Fresco (60-65°F/15-18°C)", de: "Kühl (15-18°C)", nl: "Koel (15-18°C)" },
          { en: "Hot (100°F+/38°C+)", es: "Caliente (100°F+/38°C+)", de: "Heiß (38°C+)", nl: "Heet (38°C+)" }
        ],
        correct: 0,
        explanation: {
          en: "Enriched doughs with butter and eggs proof best at room temperature (70-75°F/21-24°C) to prevent butter from melting while allowing proper fermentation development.",
          es: "Las masas enriquecidas con mantequilla y huevos fermentan mejor a temperatura ambiente (70-75°F/21-24°C) para prevenir que la mantequilla se derrita mientras permite el desarrollo adecuado de fermentación.",
          de: "Angereicherte Teige mit Butter und Eiern gehen am besten bei Raumtemperatur (21-24°C) auf, um zu verhindern, dass Butter schmilzt, während eine ordnungsgemäße Fermentationsentwicklung ermöglicht wird.",
          nl: "Verrijkte degen met boter en eieren rijzen het beste op kamertemperatuur (21-24°C) om te voorkomen dat boter smelt terwijl juiste fermentatie ontwikkeling wordt toegestaan."
        }
      },
      {
        question: {
          en: "What creates the characteristic texture of a properly made pâte à choux?",
          es: "¿Qué crea la textura característica de una pasta choux bien hecha?",
          de: "Was schafft die charakteristische Textur eines richtig gemachten Pâte à choux?",
          nl: "Wat creëert de karakteristieke textuur van een goed gemaakte pâte à choux?"
        },
        options: [
          { en: "High sugar content", es: "Alto contenido de azúcar", de: "Hoher Zuckergehalt", nl: "Hoog suikergehalte" },
          { en: "Steam from high moisture content creating hollow interior", es: "Vapor del alto contenido de humedad creando interior hueco", de: "Dampf aus hohem Feuchtigkeitsgehalt, der hohles Inneres schafft", nl: "Stoom van hoog vochtgehalte dat holle binnenkant creëert" },
          { en: "Baking powder", es: "Polvo de hornear", de: "Backpulver", nl: "Bakpoeder" },
          { en: "Cold ingredients", es: "Ingredientes fríos", de: "Kalte Zutaten", nl: "Koude ingrediënten" }
        ],
        correct: 1,
        explanation: {
          en: "Choux pastry's high moisture content (from water and eggs) creates steam during baking that inflates the dough, creating the characteristic hollow interior perfect for filling.",
          es: "El alto contenido de humedad de la pasta choux (del agua y huevos) crea vapor durante el horneado que infla la masa, creando el interior hueco característico perfecto para rellenar.",
          de: "Der hohe Feuchtigkeitsgehalt des Brandteigs (aus Wasser und Eiern) erzeugt beim Backen Dampf, der den Teig aufbläht und das charakteristische hohle Innere schafft, das perfekt zum Füllen ist.",
          nl: "Het hoge vochtgehalte van soesdeeg (van water en eieren) creëert stoom tijdens het bakken dat het deeg opblaast, waardoor de karakteristieke holle binnenkant ontstaat die perfect is voor vulling."
        }
      },
      {
        question: {
          en: "What is the key to achieving smooth, lump-free pastry cream?",
          es: "¿Cuál es la clave para lograr crema pastelera suave y sin grumos?",
          de: "Was ist der Schlüssel zu glatter, klumpenfreier Konditorcreme?",
          nl: "Wat is de sleutel tot het bereiken van gladde, klomp-vrije patisseriereoom?"
        },
        options: [
          { en: "Using cold milk", es: "Usar leche fría", de: "Kalte Milch verwenden", nl: "Koude melk gebruiken" },
          { en: "Proper tempering of eggs and constant whisking", es: "Templado adecuado de huevos y batido constante", de: "Richtiges Temperieren der Eier und ständiges Rühren", nl: "Juiste tempering van eieren en constant kloppen" },
          { en: "Adding flour last", es: "Añadir harina al final", de: "Mehl zuletzt hinzufügen", nl: "Bloem als laatste toevoegen" },
          { en: "Cooking on high heat", es: "Cocinar a fuego alto", de: "Bei hoher Hitze kochen", nl: "Koken op hoge warmte" }
        ],
        correct: 1,
        explanation: {
          en: "Smooth pastry cream requires proper tempering - gradually adding hot milk to egg mixture while whisking constantly to prevent curdling, then cooking while stirring continuously.",
          es: "La crema pastelera suave requiere templado adecuado - añadir gradualmente leche caliente a la mezcla de huevos mientras se bate constantemente para prevenir cortado, luego cocinar mientras se revuelve continuamente.",
          de: "Glatte Konditorcreme erfordert richtiges Temperieren - schrittweise Zugabe von heißer Milch zur Eiermischung unter ständigem Rühren, um Gerinnen zu verhindern, dann Kochen unter kontinuierlichem Rühren.",
          nl: "Gladde patisseriereoom vereist juiste tempering - geleidelijk hete melk toevoegen aan ei mengsel terwijl constant kloppen om schifting te voorkomen, dan koken terwijl continu roeren."
        }
      },
      {
        question: {
          en: "What distinguishes a German chocolate cake from regular chocolate cake?",
          es: "¿Qué distingue un pastel de chocolate alemán de un pastel de chocolate regular?",
          de: "Was unterscheidet einen deutschen Schokoladenkuchen von einem normalen Schokoladenkuchen?",
          nl: "Wat onderscheidt een Duitse chocoladetaart van gewone chocoladetaart?"
        },
        options: [
          { en: "It's made in Germany", es: "Se hace en Alemania", de: "Es wird in Deutschland hergestellt", nl: "Het wordt gemaakt in Duitsland" },
          { en: "It uses German's sweet chocolate and has coconut-pecan frosting", es: "Usa chocolate dulce alemán y tiene glaseado de coco y pecana", de: "Es verwendet deutschen süßen Schokolade und hat Kokos-Pekannuss-Glasur", nl: "Het gebruikt Duitse zoete chocolade en heeft kokos-pecan glazuur" },
          { en: "It has more cocoa powder", es: "Tiene más cacao en polvo", de: "Es hat mehr Kakaopulver", nl: "Het heeft meer cacaopoeder" },
          { en: "It's always served cold", es: "Siempre se sirve frío", de: "Es wird immer kalt serviert", nl: "Het wordt altijd koud geserveerd" }
        ],
        correct: 1,
        explanation: {
          en: "German chocolate cake uses German's sweet baking chocolate (a brand) and is traditionally topped with a distinctive coconut-pecan frosting, not regular chocolate frosting.",
          es: "El pastel de chocolate alemán usa chocolate para hornear dulce alemán (una marca) y tradicionalmente se cubre con un glaseado distintivo de coco y pecana, no glaseado de chocolate regular.",
          de: "Deutscher Schokoladenkuchen verwendet German's süße Backschokolade (eine Marke) und wird traditionell mit einer charakteristischen Kokos-Pekannuss-Glasur überzogen, nicht mit normaler Schokoladenglasur.",
          nl: "Duitse chocoladetaart gebruikt German's zoete bakchocolade (een merk) en wordt traditioneel bedekt met een karakteristiek kokos-pecan glazuur, niet gewone chocolade glazuur."
        }
      },
      {
        question: {
          en: "What is the purpose of docking (pricking holes) in pie dough before blind baking?",
          es: "¿Cuál es el propósito de perforar agujeros en la masa de tarta antes de hornear a ciegas?",
          de: "Was ist der Zweck des Einstechens (Löcher stechen) in Tortenteig vor dem Blindbacken?",
          nl: "Wat is het doel van het prikken van gaten in taartdeeg voor het blind bakken?"
        },
        options: [
          { en: "To make it cook faster", es: "Para que se cocine más rápido", de: "Damit es schneller kocht", nl: "Om het sneller te laten koken" },
          { en: "To prevent the crust from puffing up during baking", es: "Para prevenir que la corteza se infle durante el horneado", de: "Um zu verhindern, dass die Kruste beim Backen aufgeht", nl: "Om te voorkomen dat de korst opbolt tijdens het bakken" },
          { en: "For decoration", es: "Para decoración", de: "Zur Dekoration", nl: "Voor decoratie" },
          { en: "To add flavor", es: "Para añadir sabor", de: "Um Geschmack hinzuzufügen", nl: "Om smaak toe te voegen" }
        ],
        correct: 1,
        explanation: {
          en: "Docking creates small holes that allow steam to escape, preventing the pastry from puffing up and creating an uneven surface during blind baking.",
          es: "Perforar crea pequeños agujeros que permiten que el vapor escape, previniendo que el hojaldre se infle y cree una superficie desigual durante el horneado a ciegas.",
          de: "Einstechen schafft kleine Löcher, die Dampf entweichen lassen und verhindern, dass der Teig aufgeht und beim Blindbacken eine unebene Oberfläche schafft.",
          nl: "Prikken creëert kleine gaten die stoom laten ontsnappen, waardoor wordt voorkomen dat het deeg opbolt en een ongelijkmatig oppervlak creëert tijdens blind bakken."
        }
      },
      {
        question: {
          en: "What causes a soufflé to deflate after baking?",
          es: "¿Qué causa que un soufflé se desinfle después de hornear?",
          de: "Was verursacht, dass ein Soufflé nach dem Backen zusammenfällt?",
          nl: "Wat veroorzaakt dat een soufflé na het bakken inzakt?"
        },
        options: [
          { en: "Too much sugar", es: "Demasiada azúcar", de: "Zu viel Zucker", nl: "Te veel suiker" },
          { en: "Sudden temperature changes or overbeaten egg whites", es: "Cambios súbitos de temperatura o claras batidas en exceso", de: "Plötzliche Temperaturwechsel oder überschlagenes Eiweiß", nl: "Plotselinge temperatuurveranderingen of te veel geklopt eiwit" },
          { en: "Not enough flour", es: "No suficiente harina", de: "Nicht genug Mehl", nl: "Niet genoeg bloem" },
          { en: "Wrong pan size", es: "Tamaño incorrecto de molde", de: "Falsche Pfannengröße", nl: "Verkeerde pangrootte" }
        ],
        correct: 1,
        explanation: {
          en: "Soufflés deflate when exposed to cold air or temperature shocks because the trapped air bubbles collapse. Overbeaten egg whites become unstable and can't hold their structure.",
          es: "Los soufflés se desinflan cuando se exponen a aire frío o choques de temperatura porque las burbujas de aire atrapadas colapsan. Las claras batidas en exceso se vuelven inestables y no pueden mantener su estructura.",
          de: "Soufflés fallen zusammen, wenn sie kalter Luft oder Temperaturschocks ausgesetzt sind, weil die eingeschlossenen Luftbläschen kollabieren. Überschlagenes Eiweiß wird instabil und kann seine Struktur nicht halten.",
          nl: "Soufflés zakken in wanneer ze worden blootgesteld aan koude lucht of temperatuurschokken omdat de ingesloten luchtbellen instorten. Te veel geklopt eiwit wordt onstabiel en kan zijn structuur niet behouden."
        }
      },
      {
        question: {
          en: "What is the difference between European and American buttercream in terms of sweetness?",
          es: "¿Cuál es la diferencia entre crema de mantequilla europea y americana en términos de dulzura?",
          de: "Was ist der Unterschied zwischen europäischer und amerikanischer Buttercreme in Bezug auf Süße?",
          nl: "Wat is het verschil tussen Europese en Amerikaanse botercrème wat betreft zoetheid?"
        },
        options: [
          { en: "European is sweeter", es: "La europea es más dulce", de: "Europäische ist süßer", nl: "Europese is zoeter" },
          { en: "American is sweeter due to powdered sugar", es: "La americana es más dulce debido al azúcar en polvo", de: "Amerikanische ist süßer wegen Puderzucker", nl: "Amerikaanse is zoeter vanwege poedersuiker" },
          { en: "They have the same sweetness level", es: "Tienen el mismo nivel de dulzura", de: "Sie haben dasselbe Süßniveau", nl: "Ze hebben hetzelfde zoetheid niveau" },
          { en: "Neither contains sugar", es: "Ninguna contiene azúcar", de: "Keine enthält Zucker", nl: "Geen van beide bevat suiker" }
        ],
        correct: 1,
        explanation: {
          en: "American buttercream is much sweeter because it's made with powdered sugar, while European buttercreams (Swiss, Italian, French) use cooked sugar syrups or heated egg preparations, resulting in less sweetness and silkier texture.",
          es: "La crema americana es mucho más dulce porque se hace con azúcar en polvo, mientras que las cremas europeas (suiza, italiana, francesa) usan jarabes de azúcar cocidos o preparaciones de huevo calentadas, resultando en menos dulzura y textura más sedosa.",
          de: "Amerikanische Buttercreme ist viel süßer, weil sie mit Puderzucker gemacht wird, während europäische Buttercremes (Schweizer, italienische, französische) gekochte Zuckersirupe oder erhitzte Eizubereitungen verwenden, was weniger Süße und seidigere Textur ergibt.",
          nl: "Amerikaanse botercrème is veel zoeter omdat het wordt gemaakt met poedersuiker, terwijl Europese botercrèmes (Zwitsers, Italiaans, Frans) gekookte suikersiropen of verhitte ei preparaties gebruiken, wat resulteert in minder zoetheid en zijdiger textuur."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level5;
  } else if (typeof window !== 'undefined') {
    window.level5 = level5;
  }
})();