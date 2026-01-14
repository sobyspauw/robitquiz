// Quiz Level 3: Dessert - Taarten
(function() {
  const level3 = {
    name: {
      en: "Cakes - Intermediate",
      es: "Pasteles - Intermedio",
      de: "Kuchen - Fortgeschritten",
      nl: "Taarten - Gemiddeld"
    },
    questions: [
      {
        question: {
          en: "What is the key difference between a Victoria sponge and a basic sponge cake?",
          es: "¿Cuál es la diferencia clave entre un bizcocho Victoria y un bizcocho básico?",
          de: "Was ist der Hauptunterschied zwischen einem Victoria-Biskuit und einem einfachen Biskuitkuchen?",
          nl: "Wat is het belangrijkste verschil tussen een Victoria sponge en een gewone biscuit?"
        },
        options: [
          { en: "Victoria sponge uses only egg whites", es: "El bizcocho Victoria usa solo claras de huevo", de: "Victoria-Biskuit verwendet nur Eiweiß", nl: "Victoria sponge gebruikt alleen eiwitten" },
          { en: "Victoria sponge has jam and cream filling", es: "El bizcocho Victoria tiene relleno de mermelada y crema", de: "Victoria-Biskuit hat Marmeladen- und Cremefüllung", nl: "Victoria sponge heeft jam en crème vulling" },
          { en: "Victoria sponge uses more flour", es: "El bizcocho Victoria usa más harina", de: "Victoria-Biskuit verwendet mehr Mehl", nl: "Victoria sponge gebruikt meer bloem" },
          { en: "Victoria sponge is baked at lower temperature", es: "El bizcocho Victoria se hornea a menor temperatura", de: "Victoria-Biskuit wird bei niedrigerer Temperatur gebacken", nl: "Victoria sponge wordt op lagere temperatuur gebakken" }
        ],
        correct: 1,
        explanation: {
          en: "A Victoria sponge is specifically a two-layer sponge cake filled with jam (traditionally raspberry) and whipped cream or buttercream, named after Queen Victoria.",
          es: "Un bizcocho Victoria es específicamente un pastel esponja de dos capas relleno con mermelada (tradicionalmente frambuesa) y crema batida o crema de mantequilla, nombrado en honor a la Reina Victoria.",
          de: "Ein Victoria-Biskuit ist speziell ein zweischichtiger Biskuitkuchen, gefüllt mit Marmelade (traditionell Himbeere) und Schlagsahne oder Buttercreme, benannt nach Königin Victoria.",
          nl: "Een Victoria sponge is specifiek een dubbellaagse biscuit gevuld met jam (traditioneel framboos) en slagroom of botercrème, vernoemd naar Koningin Victoria."
        }
      },
      {
        question: {
          en: "What technique is used to incorporate air into a genoise sponge?",
          es: "¿Qué técnica se usa para incorporar aire en un bizcocho genovés?",
          de: "Welche Technik wird verwendet, um Luft in einen Genoise-Biskuit einzuarbeiten?",
          nl: "Welke techniek wordt gebruikt om lucht in een genoise biscuit te verwerken?"
        },
        options: [
          { en: "Creaming butter and sugar", es: "Batir mantequilla y azúcar", de: "Butter und Zucker schaumig rühren", nl: "Boter en suiker romig kloppen" },
          { en: "Whipping whole eggs with sugar over heat", es: "Batir huevos enteros con azúcar al calor", de: "Ganze Eier mit Zucker über Hitze schlagen", nl: "Hele eieren met suiker boven warmte kloppen" },
          { en: "Folding in whipped egg whites", es: "Incorporar claras batidas", de: "Geschlagenes Eiweiß unterheben", nl: "Geklopte eiwitten eronder vouwen" },
          { en: "Using chemical leavening agents", es: "Usar agentes leudantes químicos", de: "Chemische Triebmittel verwenden", nl: "Chemische rijsmiddelen gebruiken" }
        ],
        correct: 1,
        explanation: {
          en: "Genoise sponge gets its lightness from whipping whole eggs with sugar over gentle heat until pale and thick, then folding in flour. The heat helps stabilize the foam.",
          es: "El bizcocho genovés obtiene su ligereza batiendo huevos enteros con azúcar sobre calor suave hasta que estén pálidos y espesos, luego incorporando harina. El calor ayuda a estabilizar la espuma.",
          de: "Genoise-Biskuit erhält seine Leichtigkeit durch das Schlagen ganzer Eier mit Zucker über sanfter Hitze bis sie blass und dickflüssig sind, dann wird Mehl untergehoben. Die Hitze hilft den Schaum zu stabilisieren.",
          nl: "Genoise biscuit krijgt zijn luchtigheid door hele eieren met suiker boven zachte warmte te kloppen tot ze bleek en dik zijn, dan bloem er doorheen vouwen. De warmte helpt het schuim te stabiliseren."
        }
      },
      {
        question: {
          en: "What is the purpose of adding cocoa powder to chocolate cake batter?",
          es: "¿Cuál es el propósito de agregar cacao en polvo a la masa de pastel de chocolate?",
          de: "Was ist der Zweck des Hinzufügens von Kakaopulver zum Schokoladenkuchenteig?",
          nl: "Wat is het doel van het toevoegen van cacaopoeder aan chocolade taartbeslag?"
        },
        options: [
          { en: "Only for chocolate flavor", es: "Solo para sabor a chocolate", de: "Nur für Schokoladengeschmack", nl: "Alleen voor chocoladesmaak" },
          { en: "For flavor and to absorb excess moisture", es: "Para sabor y absorber exceso de humedad", de: "Für Geschmack und um überschüssige Feuchtigkeit zu absorbieren", nl: "Voor smaak en om overtollig vocht te absorberen" },
          { en: "To make the cake rise higher", es: "Para hacer que el pastel suba más", de: "Um den Kuchen höher aufgehen zu lassen", nl: "Om de taart hoger te laten rijzen" },
          { en: "To change the cake's color only", es: "Solo para cambiar el color del pastel", de: "Nur um die Farbe des Kuchens zu ändern", nl: "Alleen om de kleur van de taart te veranderen" }
        ],
        correct: 1,
        explanation: {
          en: "Cocoa powder provides chocolate flavor and acts as a dry ingredient that absorbs moisture, helping to balance the batter and create the proper texture in chocolate cakes.",
          es: "El cacao en polvo proporciona sabor a chocolate y actúa como ingrediente seco que absorbe humedad, ayudando a equilibrar la masa y crear la textura adecuada en pasteles de chocolate.",
          de: "Kakaopulver liefert Schokoladengeschmack und wirkt als trockene Zutat, die Feuchtigkeit absorbiert, hilft den Teig zu balancieren und die richtige Textur in Schokoladenkuchen zu erzeugen.",
          nl: "Cacaopoeder geeft chocoladesmaak en werkt als droog ingrediënt dat vocht absorbeert, wat helpt om het beslag in balans te houden en de juiste textuur in chocoladetaarten te creëren."
        }
      },
      {
        question: {
          en: "What is the difference between American buttercream and Swiss meringue buttercream?",
          es: "¿Cuál es la diferencia entre crema de mantequilla americana y crema de mantequilla de merengue suizo?",
          de: "Was ist der Unterschied zwischen amerikanischer Buttercreme und Schweizer Meringue-Buttercreme?",
          nl: "Wat is het verschil tussen Amerikaanse botercrème en Zwitserse meringue botercrème?"
        },
        options: [
          { en: "Swiss uses cooked meringue, American uses raw eggs", es: "La suiza usa merengue cocido, la americana huevos crudos", de: "Schweizer verwendet gekochte Meringue, amerikanische rohe Eier", nl: "Zwitserse gebruikt gekookte meringue, Amerikaanse rauwe eieren" },
          { en: "Swiss uses cooked meringue, American uses powdered sugar", es: "La suiza usa merengue cocido, la americana azúcar en polvo", de: "Schweizer verwendet gekochte Meringue, amerikanische Puderzucker", nl: "Zwitserse gebruikt gekookte meringue, Amerikaanse poedersuiker" },
          { en: "They are exactly the same", es: "Son exactamente iguales", de: "Sie sind genau gleich", nl: "Ze zijn precies hetzelfde" },
          { en: "Swiss uses more butter", es: "La suiza usa más mantequilla", de: "Schweizer verwendet mehr Butter", nl: "Zwitserse gebruikt meer boter" }
        ],
        correct: 1,
        explanation: {
          en: "Swiss meringue buttercream is made by heating egg whites and sugar, then whipping to create a stable meringue before adding butter. American buttercream simply creams butter with powdered sugar.",
          es: "La crema de mantequilla de merengue suizo se hace calentando claras y azúcar, luego batiendo para crear un merengue estable antes de agregar mantequilla. La americana simplemente bate mantequilla con azúcar en polvo.",
          de: "Schweizer Meringue-Buttercreme wird hergestellt, indem Eiweiß und Zucker erhitzt, dann geschlagen werden, um eine stabile Meringue zu schaffen, bevor Butter hinzugefügt wird. Amerikanische Buttercreme rührt einfach Butter mit Puderzucker.",
          nl: "Zwitserse meringue botercrème wordt gemaakt door eiwitten en suiker te verwarmen, dan te kloppen om stabiele meringue te maken voordat boter wordt toegevoegd. Amerikaanse botercrème klopt gewoon boter met poedersuiker."
        }
      },
      {
        question: {
          en: "What causes a cake to have a dense, heavy texture?",
          es: "¿Qué causa que un pastel tenga una textura densa y pesada?",
          de: "Was verursacht, dass ein Kuchen eine dichte, schwere Textur hat?",
          nl: "Wat veroorzaakt dat een taart een dichte, zware textuur heeft?"
        },
        options: [
          { en: "Too much liquid", es: "Demasiado líquido", de: "Zu viel Flüssigkeit", nl: "Te veel vloeistof" },
          { en: "Overmixing or insufficient leavening", es: "Mezclar demasiado o leudante insuficiente", de: "Übermischen oder unzureichende Lockerung", nl: "Teveel mengen of onvoldoende rijsmiddel" },
          { en: "Too high oven temperature", es: "Temperatura del horno muy alta", de: "Zu hohe Ofentemperatur", nl: "Te hoge oventemperatuur" },
          { en: "Too much vanilla", es: "Demasiada vainilla", de: "Zu viel Vanille", nl: "Te veel vanille" }
        ],
        correct: 1,
        explanation: {
          en: "Dense, heavy cakes result from overmixing (which develops too much gluten) or insufficient leavening agents. Old baking powder/soda or incorrect measurements also contribute to poor rise.",
          es: "Los pasteles densos y pesados resultan del mezclado excesivo (que desarrolla demasiado gluten) o agentes leudantes insuficientes. Polvo de hornear viejo o medidas incorrectas también contribuyen al mal levado.",
          de: "Dichte, schwere Kuchen resultieren aus Übermischen (was zu viel Gluten entwickelt) oder unzureichenden Triebmitteln. Altes Backpulver oder falsche Messungen tragen ebenfalls zu schlechtem Aufgehen bei.",
          nl: "Dichte, zware taarten zijn het gevolg van teveel mengen (wat te veel gluten ontwikkelt) of onvoldoende rijsmiddelen. Oud bakpoeder of onjuiste afmetingen dragen ook bij aan slechte rijs."
        }
      },
      {
        question: {
          en: "What is a chiffon cake and how does it differ from other sponge cakes?",
          es: "¿Qué es un pastel chiffon y en qué se diferencia de otros bizcochos?",
          de: "Was ist ein Chiffon-Kuchen und wie unterscheidet er sich von anderen Biskuitkuchen?",
          nl: "Wat is een chiffon cake en hoe verschilt deze van andere biscuits?"
        },
        options: [
          { en: "Contains oil instead of butter and uses separated eggs", es: "Contiene aceite en lugar de mantequilla y usa huevos separados", de: "Enthält Öl statt Butter und verwendet getrennte Eier", nl: "Bevat olie in plaats van boter en gebruikt gescheiden eieren" },
          { en: "Uses only egg yolks", es: "Usa solo yemas de huevo", de: "Verwendet nur Eigelb", nl: "Gebruikt alleen eidooiers" },
          { en: "Contains no eggs at all", es: "No contiene huevos", de: "Enthält gar keine Eier", nl: "Bevat helemaal geen eieren" },
          { en: "Uses cream cheese", es: "Usa queso crema", de: "Verwendet Frischkäse", nl: "Gebruikt roomkaas" }
        ],
        correct: 0,
        explanation: {
          en: "Chiffon cake uses oil instead of butter for moisture, and incorporates both egg yolks (in the batter) and whipped egg whites (folded in) for lightness and structure.",
          es: "El pastel chiffon usa aceite en lugar de mantequilla para humedad, e incorpora tanto yemas (en la masa) como claras batidas (incorporadas) para ligereza y estructura.",
          de: "Chiffon-Kuchen verwendet Öl statt Butter für Feuchtigkeit und enthält sowohl Eigelb (im Teig) als auch geschlagenes Eiweiß (untergehoben) für Leichtigkeit und Struktur.",
          nl: "Chiffon cake gebruikt olie in plaats van boter voor vochtigheid, en bevat zowel eidooiers (in het beslag) als geklopte eiwitten (eronder gevouwen) voor luchtigheid en structuur."
        }
      },
      {
        question: {
          en: "What is the creaming method in cake making?",
          es: "¿Qué es el método de cremado en la elaboración de pasteles?",
          de: "Was ist die Aufschlagmethode beim Kuchenbacken?",
          nl: "Wat is de rommethode bij het maken van taarten?"
        },
        options: [
          { en: "Adding cream to the batter", es: "Agregar crema a la masa", de: "Sahne zum Teig hinzufügen", nl: "Room toevoegen aan het beslag" },
          { en: "Beating butter and sugar until light and fluffy", es: "Batir mantequilla y azúcar hasta que esté ligero y esponjoso", de: "Butter und Zucker schlagen bis hell und fluffig", nl: "Boter en suiker kloppen tot licht en luchtig" },
          { en: "Whipping egg whites", es: "Batir claras de huevo", de: "Eiweiß schlagen", nl: "Eiwitten kloppen" },
          { en: "Melting ingredients together", es: "Derretir ingredientes juntos", de: "Zutaten zusammen schmelzen", nl: "Ingrediënten samen smelten" }
        ],
        correct: 1,
        explanation: {
          en: "The creaming method involves beating butter (at room temperature) with sugar until the mixture becomes pale, light, and fluffy. This incorporates air and creates the foundation for most butter cakes.",
          es: "El método de cremado implica batir mantequilla (a temperatura ambiente) con azúcar hasta que la mezcla se vuelva pálida, ligera y esponjosa. Esto incorpora aire y crea la base para la mayoría de pasteles de mantequilla.",
          de: "Die Aufschlagmethode beinhaltet das Schlagen von Butter (bei Zimmertemperatur) mit Zucker, bis die Mischung blass, hell und fluffig wird. Dies arbeitet Luft ein und schafft die Grundlage für die meisten Butterkuchen.",
          nl: "De rommethode houdt in dat boter (op kamertemperatuur) met suiker wordt geklopt totdat het mengsel bleek, licht en luchtig wordt. Dit werkt lucht in en creëert de basis voor de meeste botertaarten."
        }
      },
      {
        question: {
          en: "What is the purpose of inverting a cake pan after baking angel food cake?",
          es: "¿Cuál es el propósito de invertir el molde después de hornear pastel de angel food?",
          de: "Was ist der Zweck des Umdrehens einer Kuchenform nach dem Backen von Angel Food Cake?",
          nl: "Wat is het doel van het omdraaien van een taartpan na het bakken van angel food cake?"
        },
        options: [
          { en: "To cool faster", es: "Para enfriar más rápido", de: "Um schneller zu kühlen", nl: "Om sneller af te koelen" },
          { en: "To prevent the delicate structure from collapsing", es: "Para evitar que la estructura delicada colapse", de: "Um zu verhindern, dass die empfindliche Struktur zusammenfällt", nl: "Om te voorkomen dat de delicate structuur instort" },
          { en: "To add moisture", es: "Para agregar humedad", de: "Um Feuchtigkeit hinzuzufügen", nl: "Om vocht toe te voegen" },
          { en: "To create a pattern", es: "Para crear un patrón", de: "Um ein Muster zu erzeugen", nl: "Om een patroon te maken" }
        ],
        correct: 1,
        explanation: {
          en: "Angel food cake has a very delicate foam structure from whipped egg whites. Inverting it while cooling allows gravity to help maintain the cake's height and prevent collapse.",
          es: "El pastel angel food tiene una estructura de espuma muy delicada de claras batidas. Invertirlo mientras se enfría permite que la gravedad ayude a mantener la altura del pastel y evitar el colapso.",
          de: "Angel Food Cake hat eine sehr empfindliche Schaumstruktur aus geschlagenem Eiweiß. Das Umdrehen beim Abkühlen ermöglicht der Schwerkraft, die Höhe des Kuchens zu erhalten und ein Zusammenfallen zu verhindern.",
          nl: "Angel food cake heeft een zeer delicate schuimstructuur van geklopte eiwitten. Het omdraaien tijdens het afkoelen laat de zwaartekracht helpen om de hoogte van de taart te behouden en instorting te voorkomen."
        }
      },
      {
        question: {
          en: "What is the difference between devil's food cake and regular chocolate cake?",
          es: "¿Cuál es la diferencia entre pastel devil's food y pastel de chocolate regular?",
          de: "Was ist der Unterschied zwischen Devil's Food Cake und normalem Schokoladenkuchen?",
          nl: "Wat is het verschil tussen devil's food cake en gewone chocoladetaart?"
        },
        options: [
          { en: "Devil's food uses more cocoa and often includes coffee", es: "Devil's food usa más cacao y a menudo incluye café", de: "Devil's Food verwendet mehr Kakao und enthält oft Kaffee", nl: "Devil's food gebruikt meer cacao en bevat vaak koffie" },
          { en: "They are exactly the same", es: "Son exactamente iguales", de: "Sie sind genau gleich", nl: "Ze zijn precies hetzelfde" },
          { en: "Devil's food is always red", es: "Devil's food es siempre rojo", de: "Devil's Food ist immer rot", nl: "Devil's food is altijd rood" },
          { en: "Devil's food uses white chocolate", es: "Devil's food usa chocolate blanco", de: "Devil's Food verwendet weiße Schokolade", nl: "Devil's food gebruikt witte chocolade" }
        ],
        correct: 0,
        explanation: {
          en: "Devil's food cake is an intensely chocolate cake that uses more cocoa powder than regular chocolate cake, and often includes coffee or hot water to enhance the chocolate flavor and create a darker color.",
          es: "El pastel devil's food es un pastel intensamente chocolateado que usa más cacao en polvo que el pastel de chocolate regular, y a menudo incluye café o agua caliente para realzar el sabor del chocolate y crear un color más oscuro.",
          de: "Devil's Food Cake ist ein intensiv schokoladiger Kuchen, der mehr Kakaopulver als normaler Schokoladenkuchen verwendet und oft Kaffee oder heißes Wasser enthält, um den Schokoladengeschmack zu verstärken und eine dunklere Farbe zu erzeugen.",
          nl: "Devil's food cake is een intens chocolade taart die meer cacaopoeder gebruikt dan gewone chocoladetaart, en bevat vaak koffie of heet water om de chocoladesmaak te versterken en een donkerdere kleur te creëren."
        }
      },
      {
        question: {
          en: "What is the correct way to measure flour for cake baking?",
          es: "¿Cuál es la forma correcta de medir harina para hornear pasteles?",
          de: "Was ist der richtige Weg, Mehl für das Kuchenbacken zu messen?",
          nl: "Wat is de juiste manier om bloem te meten voor taart bakken?"
        },
        options: [
          { en: "Pack it tightly into the measuring cup", es: "Empacarlo firmemente en la taza medidora", de: "Fest in den Messbecher drücken", nl: "Stevig in de maatbeker drukken" },
          { en: "Spoon it lightly into the cup and level off", es: "Ponerlo ligeramente en la taza con cuchara y nivelar", de: "Leicht hineinlöffeln und glatt streichen", nl: "Licht in de beker lepelen en afstrijken" },
          { en: "Scoop directly from the bag", es: "Sacar directamente de la bolsa", de: "Direkt aus der Tüte schöpfen", nl: "Direct uit de zak scheppen" },
          { en: "Shake the cup to settle it", es: "Agitar la taza para asentarlo", de: "Den Becher schütteln um es zu setzen", nl: "De beker schudden om het te laten zakken" }
        ],
        correct: 1,
        explanation: {
          en: "For accurate measurements, flour should be spooned lightly into the measuring cup without packing, then leveled off with a knife. Scooping or packing adds too much flour, making cakes heavy.",
          es: "Para medidas precisas, la harina debe ponerse ligeramente en la taza medidora sin empacar, luego nivelarse con un cuchillo. Sacar directamente o empacar agrega demasiada harina, haciendo los pasteles pesados.",
          de: "Für genaue Messungen sollte Mehl leicht in den Messbecher gelöffelt ohne zu packen, dann mit einem Messer glatt gestrichen werden. Schöpfen oder Packen fügt zu viel Mehl hinzu und macht Kuchen schwer.",
          nl: "Voor nauwkeurige metingen moet bloem licht in de maatbeker worden gelepeld zonder te drukken, dan afgesneden met een mes. Scheppen of indrukken voegt te veel bloem toe, waardoor taarten zwaar worden."
        }
      },
      {
        question: {
          en: "What causes cracks to form on top of a cake during baking?",
          es: "¿Qué causa que se formen grietas en la parte superior de un pastel durante el horneado?",
          de: "Was verursacht Risse auf der Oberseite eines Kuchens während des Backens?",
          nl: "Wat veroorzaakt scheuren op de bovenkant van een taart tijdens het bakken?"
        },
        options: [
          { en: "Too much liquid in the batter", es: "Demasiado líquido en la masa", de: "Zu viel Flüssigkeit im Teig", nl: "Te veel vloeistof in het beslag" },
          { en: "Oven temperature too high or oven rack too high", es: "Temperatura del horno muy alta o rejilla muy alta", de: "Ofentemperatur zu hoch oder Rost zu hoch", nl: "Oventemperatuur te hoog of rooster te hoog" },
          { en: "Not enough eggs", es: "No suficientes huevos", de: "Nicht genug Eier", nl: "Niet genoeg eieren" },
          { en: "Too much vanilla", es: "Demasiada vainilla", de: "Zu viel Vanille", nl: "Te veel vanille" }
        ],
        correct: 1,
        explanation: {
          en: "Cracks form when the cake surface sets and browns too quickly from excessive heat, while the interior is still rising. Lower temperature or moving the rack lower prevents this.",
          es: "Las grietas se forman cuando la superficie del pastel se cuaja y dora muy rápidamente por calor excesivo, mientras el interior aún está subiendo. Menor temperatura o bajar la rejilla previene esto.",
          de: "Risse entstehen, wenn die Kuchenoberfläche durch übermäßige Hitze zu schnell fest wird und bräunt, während das Innere noch aufgeht. Niedrigere Temperatur oder tieferer Rost verhindert dies.",
          nl: "Scheuren ontstaan wanneer het taartoppervlak te snel stolt en bruin wordt door overtollige hitte, terwijl de binnenkant nog rijst. Lagere temperatuur of het rooster lager zetten voorkomt dit."
        }
      },
      {
        question: {
          en: "What is pound cake and why is it called that?",
          es: "¿Qué es el pound cake y por qué se llama así?",
          de: "Was ist Pound Cake und warum wird er so genannt?",
          nl: "Wat is pound cake en waarom wordt het zo genoemd?"
        },
        options: [
          { en: "It weighs exactly one pound", es: "Pesa exactamente una libra", de: "Er wiegt genau ein Pfund", nl: "Het weegt precies een pond" },
          { en: "Originally made with a pound each of butter, sugar, eggs, and flour", es: "Originalmente hecho con una libra cada uno de mantequilla, azúcar, huevos y harina", de: "Ursprünglich mit einem Pfund jeweils von Butter, Zucker, Eiern und Mehl gemacht", nl: "Oorspronkelijk gemaakt met een pond elk van boter, suiker, eieren en bloem" },
          { en: "It's made with ground almonds (pounds)", es: "Se hace con almendras molidas", de: "Er wird mit gemahlenen Mandeln gemacht", nl: "Het wordt gemaakt met gemalen amandelen" },
          { en: "It's baked for one pound of time", es: "Se hornea por una libra de tiempo", de: "Er wird für ein Pfund Zeit gebacken", nl: "Het wordt voor een pond tijd gebakken" }
        ],
        correct: 1,
        explanation: {
          en: "Pound cake got its name from the traditional recipe that called for one pound each of butter, sugar, eggs, and flour. Modern recipes are scaled down but maintain the rich, dense texture.",
          es: "El pound cake obtuvo su nombre de la receta tradicional que pedía una libra cada uno de mantequilla, azúcar, huevos y harina. Las recetas modernas se reducen pero mantienen la textura rica y densa.",
          de: "Pound Cake erhielt seinen Namen von dem traditionellen Rezept, das ein Pfund jeweils von Butter, Zucker, Eiern und Mehl verlangte. Moderne Rezepte sind verkleinert, behalten aber die reiche, dichte Textur.",
          nl: "Pound cake kreeg zijn naam van het traditionele recept dat een pond elk van boter, suiker, eieren en bloem vroeg. Moderne recepten zijn verkleind maar behouden de rijke, dichte textuur."
        }
      },
      {
        question: {
          en: "What happens if you substitute all-purpose flour for cake flour without adjusting the recipe?",
          es: "¿Qué pasa si sustituyes harina común por harina para pasteles sin ajustar la receta?",
          de: "Was passiert, wenn Sie Allzweckmehl durch Kuchenmehl ersetzen, ohne das Rezept anzupassen?",
          nl: "Wat gebeurt er als je gewone bloem vervangt voor cakebloem zonder het recept aan te passen?"
        },
        options: [
          { en: "The cake will be lighter", es: "El pastel será más ligero", de: "Der Kuchen wird leichter", nl: "De taart wordt lichter" },
          { en: "The cake will be tougher and denser", es: "El pastel será más duro y denso", de: "Der Kuchen wird zäher und dichter", nl: "De taart wordt taaier en dichter" },
          { en: "No difference", es: "Sin diferencia", de: "Kein Unterschied", nl: "Geen verschil" },
          { en: "The cake will not bake properly", es: "El pastel no se horneará correctamente", de: "Der Kuchen wird nicht richtig backen", nl: "De taart zal niet goed bakken" }
        ],
        correct: 1,
        explanation: {
          en: "All-purpose flour has higher protein content (10-12%) than cake flour (6-8%), leading to more gluten development and a tougher, denser cake texture.",
          es: "La harina común tiene mayor contenido de proteína (10-12%) que la harina para pasteles (6-8%), llevando a más desarrollo de gluten y una textura de pastel más dura y densa.",
          de: "Allzweckmehl hat höheren Proteingehalt (10-12%) als Kuchenmehl (6-8%), was zu mehr Glutenentwicklung und einer zäheren, dichteren Kuchentextur führt.",
          nl: "Gewone bloem heeft hoger eiwitgehalte (10-12%) dan cakebloem (6-8%), wat leidt tot meer glutenontwikkeling en een taaiere, dichtere taarttextuur."
        }
      },
      {
        question: {
          en: "What is the best way to prevent a cake from sticking to the pan?",
          es: "¿Cuál es la mejor manera de evitar que un pastel se pegue al molde?",
          de: "Was ist der beste Weg, um zu verhindern, dass ein Kuchen an der Form klebt?",
          nl: "Wat is de beste manier om te voorkomen dat een taart aan de pan plakt?"
        },
        options: [
          { en: "Only grease the pan", es: "Solo engrasar el molde", de: "Nur die Form fetten", nl: "Alleen de pan invetten" },
          { en: "Grease and flour the pan, or use parchment paper", es: "Engrasar y enharinar el molde, o usar papel pergamino", de: "Die Form fetten und bemehlen oder Backpapier verwenden", nl: "Pan invetten en bloemen, of bakpapier gebruiken" },
          { en: "Only use cooking spray", es: "Solo usar spray de cocina", de: "Nur Kochspray verwenden", nl: "Alleen kookspray gebruiken" },
          { en: "Dust with powdered sugar", es: "Espolvorear con azúcar en polvo", de: "Mit Puderzucker bestäuben", nl: "Bestuiven met poedersuiker" }
        ],
        correct: 1,
        explanation: {
          en: "The best method is to grease the pan with butter or oil, then dust with flour (tapping out excess), or line with parchment paper. This creates a barrier that prevents sticking.",
          es: "El mejor método es engrasar el molde con mantequilla o aceite, luego espolvorear con harina (golpeando el exceso), o forrar con papel pergamino. Esto crea una barrera que previene que se pegue.",
          de: "Die beste Methode ist, die Form mit Butter oder Öl zu fetten, dann mit Mehl zu bestäuben (Überschuss abklopfen), oder mit Backpapier auszulegen. Dies schafft eine Barriere, die Ankleben verhindert.",
          nl: "De beste methode is om de pan in te vetten met boter of olie, dan met bloem te bestuiven (overtollige afkloppen), of te bekleden met bakpapier. Dit creëert een barrière die plakken voorkomt."
        }
      },
      {
        question: {
          en: "What is the difference between baking soda and baking powder in cake recipes?",
          es: "¿Cuál es la diferencia entre bicarbonato de sodio y polvo de hornear en recetas de pasteles?",
          de: "Was ist der Unterschied zwischen Natron und Backpulver in Kuchenrezepten?",
          nl: "Wat is het verschil tussen zuiveringszout en bakpoeder in taartrecepten?"
        },
        options: [
          { en: "They are the same thing", es: "Son la misma cosa", de: "Sie sind dasselbe", nl: "Ze zijn hetzelfde" },
          { en: "Baking soda needs acid to activate, baking powder contains both acid and base", es: "El bicarbonato necesita ácido para activarse, el polvo de hornear contiene tanto ácido como base", de: "Natron braucht Säure zur Aktivierung, Backpulver enthält sowohl Säure als auch Base", nl: "Zuiveringszout heeft zuur nodig om te activeren, bakpoeder bevat zowel zuur als base" },
          { en: "Baking powder is stronger", es: "El polvo de hornear es más fuerte", de: "Backpulver ist stärker", nl: "Bakpoeder is sterker" },
          { en: "Baking soda is only for cookies", es: "El bicarbonato es solo para galletas", de: "Natron ist nur für Kekse", nl: "Zuiveringszout is alleen voor koekjes" }
        ],
        correct: 1,
        explanation: {
          en: "Baking soda is pure sodium bicarbonate and needs an acid (like buttermilk, vinegar, or brown sugar) to create lift. Baking powder contains both acid and base, so it works independently.",
          es: "El bicarbonato de sodio es bicarbonato de sodio puro y necesita un ácido (como suero de leche, vinagre o azúcar moreno) para crear levado. El polvo de hornear contiene tanto ácido como base, así que funciona independientemente.",
          de: "Natron ist reines Natriumbicarbonat und braucht eine Säure (wie Buttermilch, Essig oder braunen Zucker) um Triebkraft zu erzeugen. Backpulver enthält sowohl Säure als auch Base, funktioniert also eigenständig.",
          nl: "Zuiveringszout is puur natriumbicarbonaat en heeft een zuur nodig (zoals karnemelk, azijn of bruine suiker) om lift te creëren. Bakpoeder bevat zowel zuur als base, dus het werkt onafhankelijk."
        }
      },
      {
        question: {
          en: "What is the purpose of adding salt to cake batter?",
          es: "¿Cuál es el propósito de agregar sal a la masa de pastel?",
          de: "Was ist der Zweck des Hinzufügens von Salz zum Kuchenteig?",
          nl: "Wat is het doel van het toevoegen van zout aan cakebeslag?"
        },
        options: [
          { en: "To make the cake salty", es: "Para hacer el pastel salado", de: "Um den Kuchen salzig zu machen", nl: "Om de taart zout te maken" },
          { en: "To enhance flavors and balance sweetness", es: "Para realzar sabores y equilibrar la dulzura", de: "Um Aromen zu verstärken und Süße zu balancieren", nl: "Om smaken te versterken en zoetheid in balans te brengen" },
          { en: "To help the cake rise", es: "Para ayudar al pastel a subir", de: "Um dem Kuchen beim Aufgehen zu helfen", nl: "Om de taart te helpen rijzen" },
          { en: "To preserve the cake", es: "Para preservar el pastel", de: "Um den Kuchen zu konservieren", nl: "Om de taart te bewaren" }
        ],
        correct: 1,
        explanation: {
          en: "Salt enhances and balances flavors in cakes, making other ingredients taste more pronounced. It also strengthens gluten structure slightly and helps control yeast in recipes that use it.",
          es: "La sal realza y equilibra sabores en pasteles, haciendo que otros ingredientes sepan más pronunciados. También fortalece ligeramente la estructura del gluten y ayuda a controlar la levadura en recetas que la usan.",
          de: "Salz verstärkt und balanciert Aromen in Kuchen, wodurch andere Zutaten ausgeprägter schmecken. Es stärkt auch die Glutenstruktur leicht und hilft Hefe in Rezepten zu kontrollieren, die sie verwenden.",
          nl: "Zout versterkt en brengt smaken in taarten in balans, waardoor andere ingrediënten meer uitgesproken smaken. Het versterkt ook licht de glutenstructuur en helpt gist te controleren in recepten die het gebruiken."
        }
      },
      {
        question: {
          en: "What is a red velvet cake and what gives it its characteristic color?",
          es: "¿Qué es un pastel red velvet y qué le da su color característico?",
          de: "Was ist ein Red Velvet Cake und was verleiht ihm seine charakteristische Farbe?",
          nl: "Wat is een red velvet cake en wat geeft het zijn karakteristieke kleur?"
        },
        options: [
          { en: "Strawberries", es: "Fresas", de: "Erdbeeren", nl: "Aardbeien" },
          { en: "Red food coloring and the reaction between cocoa and acid", es: "Colorante rojo y la reacción entre cacao y ácido", de: "Rote Lebensmittelfarbe und die Reaktion zwischen Kakao und Säure", nl: "Rode kleurstof en de reactie tussen cacao en zuur" },
          { en: "Beets", es: "Remolachas", de: "Rote Beete", nl: "Bieten" },
          { en: "Red velvet fabric", es: "Tela de terciopelo rojo", de: "Roter Samtstoff", nl: "Rode fluweelstof" }
        ],
        correct: 1,
        explanation: {
          en: "Red velvet cake gets its color from red food coloring and historically from the natural reaction between cocoa powder and acidic ingredients like buttermilk and vinegar, which creates a reddish hue.",
          es: "El pastel red velvet obtiene su color del colorante rojo y históricamente de la reacción natural entre el cacao en polvo e ingredientes ácidos como suero de leche y vinagre, que crea un tono rojizo.",
          de: "Red Velvet Cake erhält seine Farbe von roter Lebensmittelfarbe und historisch von der natürlichen Reaktion zwischen Kakaopulver und sauren Zutaten wie Buttermilch und Essig, die einen rötlichen Ton erzeugt.",
          nl: "Red velvet cake krijgt zijn kleur van rode kleurstof en historisch van de natuurlijke reactie tussen cacaopoeder en zure ingrediënten zoals karnemelk en azijn, wat een roodachtige tint creëert."
        }
      },
      {
        question: {
          en: "What is the difference between a muffin method and cake method of mixing?",
          es: "¿Cuál es la diferencia entre el método de muffin y el método de pastel para mezclar?",
          de: "Was ist der Unterschied zwischen Muffin-Methode und Kuchen-Methode des Mischens?",
          nl: "Wat is het verschil tussen een muffinmethode en cakemethode van mengen?"
        },
        options: [
          { en: "No difference", es: "Sin diferencia", de: "Kein Unterschied", nl: "Geen verschil" },
          { en: "Muffin method combines wet and dry ingredients separately then mixes briefly", es: "El método de muffin combina ingredientes húmedos y secos por separado luego mezcla brevemente", de: "Muffin-Methode kombiniert feuchte und trockene Zutaten separat, dann kurz mischen", nl: "Muffinmethode combineert natte en droge ingrediënten apart dan kort mengen" },
          { en: "Cake method uses only dry ingredients", es: "El método de pastel usa solo ingredientes secos", de: "Kuchen-Methode verwendet nur trockene Zutaten", nl: "Cakemethode gebruikt alleen droge ingrediënten" },
          { en: "Muffin method requires an electric mixer", es: "El método de muffin requiere batidora eléctrica", de: "Muffin-Methode erfordert elektrischen Mixer", nl: "Muffinmethode vereist elektrische mixer" }
        ],
        correct: 1,
        explanation: {
          en: "The muffin method combines all wet ingredients in one bowl and all dry ingredients in another, then gently combines them with minimal mixing to avoid tough texture. Cake method typically involves more thorough mixing.",
          es: "El método de muffin combina todos los ingredientes húmedos en un tazón y todos los ingredientes secos en otro, luego los combina suavemente con mezclado mínimo para evitar textura dura. El método de pastel típicamente involucra mezclado más completo.",
          de: "Die Muffin-Methode kombiniert alle feuchten Zutaten in einer Schüssel und alle trockenen Zutaten in einer anderen, dann werden sie sanft mit minimalem Mischen kombiniert um zähe Textur zu vermeiden. Kuchen-Methode beinhaltet typischerweise gründlicheres Mischen.",
          nl: "De muffinmethode combineert alle natte ingrediënten in één kom en alle droge ingrediënten in een andere, dan combineert ze zacht met minimaal mengen om taaie textuur te vermijden. Cakemethode behelst doorgaans grondiger mengen."
        }
      },
      {
        question: {
          en: "What temperature should ingredients typically be at when making cakes?",
          es: "¿A qué temperatura deben estar típicamente los ingredientes al hacer pasteles?",
          de: "Welche Temperatur sollten Zutaten typischerweise beim Kuchenbacken haben?",
          nl: "Welke temperatuur moeten ingrediënten doorgaans hebben bij het maken van taarten?"
        },
        options: [
          { en: "Cold from refrigerator", es: "Fríos del refrigerador", de: "Kalt aus dem Kühlschrank", nl: "Koud uit de koelkast" },
          { en: "Room temperature (about 20-22°C)", es: "Temperatura ambiente (cerca de 20-22°C)", de: "Zimmertemperatur (etwa 20-22°C)", nl: "Kamertemperatuur (ongeveer 20-22°C)" },
          { en: "Slightly warm", es: "Ligeramente tibios", de: "Leicht warm", nl: "Licht warm" },
          { en: "Temperature doesn't matter", es: "La temperatura no importa", de: "Temperatur ist egal", nl: "Temperatuur maakt niet uit" }
        ],
        correct: 1,
        explanation: {
          en: "Room temperature ingredients (around 20-22°C) mix together more easily and evenly, creating better emulsification and smoother batters, which results in better cake texture and rise.",
          es: "Los ingredientes a temperatura ambiente (alrededor de 20-22°C) se mezclan más fácil y uniformemente, creando mejor emulsificación y masas más suaves, lo que resulta en mejor textura de pastel y levado.",
          de: "Zutaten bei Zimmertemperatur (etwa 20-22°C) mischen sich leichter und gleichmäßiger, schaffen bessere Emulgierung und glattere Teige, was zu besserer Kuchentextur und Aufgehen führt.",
          nl: "Ingrediënten op kamertemperatuur (rond 20-22°C) mengen gemakkelijker en gelijkmatiger, creëren betere emulgering en gladdere beslag, wat resulteert in betere taarttextuur en rijs."
        }
      },
      {
        question: {
          en: "Which ingredient makes sponge cake light and airy?",
          es: "¿Qué ingrediente hace que el bizcocho sea ligero y aireado?",
          de: "Welche Zutat macht Biskuitkuchen leicht und luftig?",
          nl: "Welk ingrediënt maakt biscuitdeeg licht en luchtig?"
        },
        options: [
          { en: "Extra flour", es: "Harina extra", de: "Extra Mehl", nl: "Extra bloem" },
          { en: "Whipped eggs (especially egg whites)", es: "Huevos batidos (especialmente claras)", de: "Geschlagene Eier (besonders Eiweiß)", nl: "Geklopte eieren (vooral eiwitten)" },
          { en: "More butter", es: "Más mantequilla", de: "Mehr Butter", nl: "Meer boter" },
          { en: "Heavy cream", es: "Crema espesa", de: "Schlagsahne", nl: "Slagroom" }
        ],
        correct: 1,
        explanation: {
          en: "Sponge cakes get their light, airy texture from whipped eggs, particularly separated egg whites that are beaten to soft peaks and folded into the batter to trap air bubbles.",
          es: "Los bizcochos obtienen su textura ligera y aireada de los huevos batidos, particularmente claras separadas que se baten a punto de nieve y se incorporan a la masa para atrapar burbujas de aire.",
          de: "Biskuitkuchen erhalten ihre leichte, luftige Textur durch geschlagene Eier, besonders getrennte Eiweiße, die zu weichen Spitzen geschlagen und in den Teig eingefaltet werden, um Luftbläschen einzuschließen.",
          nl: "Biscuitgebak krijgt zijn lichte, luchtige textuur van geklopte eieren, vooral gescheiden eiwitten die tot zachte pieken worden geklopte en door het beslag gevouwen om luchtbellen in te sluiten."
        }    },
    {
      question: {
        en: "What is the main ingredient in sponge cake?",
        es: "What is the main ingredient in sponge cake?",
        de: "What is the main ingredient in sponge cake?",
        nl: "What is the main ingredient in sponge cake?"
      },
      options: [
        { en: "Eggs", es: "Eggs", de: "Eggs", nl: "Eggs" },
        { en: "Butter", es: "Butter", de: "Butter", nl: "Butter" },
        { en: "Flour", es: "Flour", de: "Flour", nl: "Flour" },
        { en: "Sugar", es: "Sugar", de: "Sugar", nl: "Sugar" }
      ],
      correct: 0,
      explanation: {
        en: "Eggs are the key ingredient that gives sponge cake its light, airy texture through whipped air incorporation.",
        es: "Eggs are the key ingredient that gives sponge cake its light, airy texture through whipped air incorporation.",
        de: "Eggs are the key ingredient that gives sponge cake its light, airy texture through whipped air incorporation.",
        nl: "Eggs are the key ingredient that gives sponge cake its light, airy texture through whipped air incorporation."
      }
    },
    {
      question: {
        en: "What country is the Black Forest cake from?",
        es: "What country is the Black Forest cake from?",
        de: "What country is the Black Forest cake from?",
        nl: "What country is the Black Forest cake from?"
      },
      options: [
        { en: "Germany", es: "Germany", de: "Germany", nl: "Germany" },
        { en: "France", es: "France", de: "France", nl: "France" },
        { en: "Austria", es: "Austria", de: "Austria", nl: "Austria" },
        { en: "Switzerland", es: "Switzerland", de: "Switzerland", nl: "Switzerland" }
      ],
      correct: 0,
      explanation: {
        en: "Black Forest cake (Schwarzwälder Kirschtorte) originated in the Black Forest region of Germany.",
        es: "Black Forest cake (Schwarzwälder Kirschtorte) originated in the Black Forest region of Germany.",
        de: "Black Forest cake (Schwarzwälder Kirschtorte) originated in the Black Forest region of Germany.",
        nl: "Black Forest cake (Schwarzwälder Kirschtorte) originated in the Black Forest region of Germany."
      }
    },
    {
      question: {
        en: "What is a bundt cake?",
        es: "What is a bundt cake?",
        de: "What is a bundt cake?",
        nl: "What is a bundt cake?"
      },
      options: [
        { en: "Cake baked in a ring-shaped pan", es: "Cake baked in a ring-shaped pan", de: "Cake baked in a ring-shaped pan", nl: "Cake baked in a ring-shaped pan" },
        { en: "Layered cake", es: "Layered cake", de: "Layered cake", nl: "Layered cake" },
        { en: "Sheet cake", es: "Sheet cake", de: "Sheet cake", nl: "Sheet cake" },
        { en: "Cupcake", es: "Cupcake", de: "Cupcake", nl: "Cupcake" }
      ],
      correct: 0,
      explanation: {
        en: "A bundt cake is baked in a distinctive ring-shaped bundt pan with decorative fluting.",
        es: "A bundt cake is baked in a distinctive ring-shaped bundt pan with decorative fluting.",
        de: "A bundt cake is baked in a distinctive ring-shaped bundt pan with decorative fluting.",
        nl: "A bundt cake is baked in a distinctive ring-shaped bundt pan with decorative fluting."
      }
    },
    {
      question: {
        en: "What is angel food cake known for?",
        es: "What is angel food cake known for?",
        de: "What is angel food cake known for?",
        nl: "What is angel food cake known for?"
      },
      options: [
        { en: "Being light and fat-free", es: "Being light and fat-free", de: "Being light and fat-free", nl: "Being light and fat-free" },
        { en: "Rich chocolate flavor", es: "Rich chocolate flavor", de: "Rich chocolate flavor", nl: "Rich chocolate flavor" },
        { en: "Heavy texture", es: "Heavy texture", de: "Heavy texture", nl: "Heavy texture" },
        { en: "Cream cheese frosting", es: "Cream cheese frosting", de: "Cream cheese frosting", nl: "Cream cheese frosting" }
      ],
      correct: 0,
      explanation: {
        en: "Angel food cake is light, fluffy, and contains no fat - made primarily from egg whites, sugar, and flour.",
        es: "Angel food cake is light, fluffy, and contains no fat - made primarily from egg whites, sugar, and flour.",
        de: "Angel food cake is light, fluffy, and contains no fat - made primarily from egg whites, sugar, and flour.",
        nl: "Angel food cake is light, fluffy, and contains no fat - made primarily from egg whites, sugar, and flour."
      }
    },
    {
      question: {
        en: "What is the traditional frosting for red velvet cake?",
        es: "What is the traditional frosting for red velvet cake?",
        de: "What is the traditional frosting for red velvet cake?",
        nl: "What is the traditional frosting for red velvet cake?"
      },
      options: [
        { en: "Cream cheese frosting", es: "Cream cheese frosting", de: "Cream cheese frosting", nl: "Cream cheese frosting" },
        { en: "Buttercream", es: "Buttercream", de: "Buttercream", nl: "Buttercream" },
        { en: "Ganache", es: "Ganache", de: "Ganache", nl: "Ganache" },
        { en: "Whipped cream", es: "Whipped cream", de: "Whipped cream", nl: "Whipped cream" }
      ],
      correct: 0,
      explanation: {
        en: "Traditional red velvet cake is topped with cream cheese frosting, complementing its subtle cocoa flavor.",
        es: "Traditional red velvet cake is topped with cream cheese frosting, complementing its subtle cocoa flavor.",
        de: "Traditional red velvet cake is topped with cream cheese frosting, complementing its subtle cocoa flavor.",
        nl: "Traditional red velvet cake is topped with cream cheese frosting, complementing its subtle cocoa flavor."
      }
    },
    {
      question: {
        en: "What makes a pound cake?",
        es: "What makes a pound cake?",
        de: "What makes a pound cake?",
        nl: "What makes a pound cake?"
      },
      options: [
        { en: "Equal weights of butter, sugar, eggs, flour", es: "Equal weights of butter, sugar, eggs, flour", de: "Equal weights of butter, sugar, eggs, flour", nl: "Equal weights of butter, sugar, eggs, flour" },
        { en: "It weighs one pound", es: "It weighs one pound", de: "It weighs one pound", nl: "It weighs one pound" },
        { en: "Contains a pound of chocolate", es: "Contains a pound of chocolate", de: "Contains a pound of chocolate", nl: "Contains a pound of chocolate" },
        { en: "Served by the pound", es: "Served by the pound", de: "Served by the pound", nl: "Served by the pound" }
      ],
      correct: 0,
      explanation: {
        en: "Traditional pound cake uses equal weights (originally one pound each) of butter, sugar, eggs, and flour.",
        es: "Traditional pound cake uses equal weights (originally one pound each) of butter, sugar, eggs, and flour.",
        de: "Traditional pound cake uses equal weights (originally one pound each) of butter, sugar, eggs, and flour.",
        nl: "Traditional pound cake uses equal weights (originally one pound each) of butter, sugar, eggs, and flour."
      }
    },
    {
      question: {
        en: "What is tres leches cake soaked in?",
        es: "What is tres leches cake soaked in?",
        de: "What is tres leches cake soaked in?",
        nl: "What is tres leches cake soaked in?"
      },
      options: [
        { en: "Three types of milk", es: "Three types of milk", de: "Three types of milk", nl: "Three types of milk" },
        { en: "Coffee", es: "Coffee", de: "Coffee", nl: "Coffee" },
        { en: "Rum", es: "Rum", de: "Rum", nl: "Rum" },
        { en: "Fruit syrup", es: "Fruit syrup", de: "Fruit syrup", nl: "Fruit syrup" }
      ],
      correct: 0,
      explanation: {
        en: "Tres leches cake is soaked in three milks: evaporated milk, condensed milk, and heavy cream.",
        es: "Tres leches cake is soaked in three milks: evaporated milk, condensed milk, and heavy cream.",
        de: "Tres leches cake is soaked in three milks: evaporated milk, condensed milk, and heavy cream.",
        nl: "Tres leches cake is soaked in three milks: evaporated milk, condensed milk, and heavy cream."
      }
    },
    {
      question: {
        en: "What is a chiffon cake?",
        es: "What is a chiffon cake?",
        de: "What is a chiffon cake?",
        nl: "What is a chiffon cake?"
      },
      options: [
        { en: "Light cake made with oil", es: "Light cake made with oil", de: "Light cake made with oil", nl: "Light cake made with oil" },
        { en: "Dense butter cake", es: "Dense butter cake", de: "Dense butter cake", nl: "Dense butter cake" },
        { en: "Flourless cake", es: "Flourless cake", de: "Flourless cake", nl: "Flourless cake" },
        { en: "Frozen cake", es: "Frozen cake", de: "Frozen cake", nl: "Frozen cake" }
      ],
      correct: 0,
      explanation: {
        en: "Chiffon cake is a light, airy cake made with vegetable oil instead of butter.",
        es: "Chiffon cake is a light, airy cake made with vegetable oil instead of butter.",
        de: "Chiffon cake is a light, airy cake made with vegetable oil instead of butter.",
        nl: "Chiffon cake is a light, airy cake made with vegetable oil instead of butter."
      }
    },
    {
      question: {
        en: "What is genoise?",
        es: "What is genoise?",
        de: "What is genoise?",
        nl: "What is genoise?"
      },
      options: [
        { en: "Italian sponge cake", es: "Italian sponge cake", de: "Italian sponge cake", nl: "Italian sponge cake" },
        { en: "French chocolate cake", es: "French chocolate cake", de: "French chocolate cake", nl: "French chocolate cake" },
        { en: "German fruit cake", es: "German fruit cake", de: "German fruit cake", nl: "German fruit cake" },
        { en: "Austrian nut cake", es: "Austrian nut cake", de: "Austrian nut cake", nl: "Austrian nut cake" }
      ],
      correct: 0,
      explanation: {
        en: "Genoise is a light Italian sponge cake made with whole eggs whipped with sugar.",
        es: "Genoise is a light Italian sponge cake made with whole eggs whipped with sugar.",
        de: "Genoise is a light Italian sponge cake made with whole eggs whipped with sugar.",
        nl: "Genoise is a light Italian sponge cake made with whole eggs whipped with sugar."
      }
    },
    {
      question: {
        en: "What is upside-down cake?",
        es: "What is upside-down cake?",
        de: "What is upside-down cake?",
        nl: "What is upside-down cake?"
      },
      options: [
        { en: "Fruit on bottom, flipped when baked", es: "Fruit on bottom, flipped when baked", de: "Fruit on bottom, flipped when baked", nl: "Fruit on bottom, flipped when baked" },
        { en: "Cake with holes", es: "Cake with holes", de: "Cake with holes", nl: "Cake with holes" },
        { en: "Inverted layers", es: "Inverted layers", de: "Inverted layers", nl: "Inverted layers" },
        { en: "Cake served upside down", es: "Cake served upside down", de: "Cake served upside down", nl: "Cake served upside down" }
      ],
      correct: 0,
      explanation: {
        en: "Upside-down cake has fruit and caramel on the pan bottom, then flipped after baking so fruit is on top.",
        es: "Upside-down cake has fruit and caramel on the pan bottom, then flipped after baking so fruit is on top.",
        de: "Upside-down cake has fruit and caramel on the pan bottom, then flipped after baking so fruit is on top.",
        nl: "Upside-down cake has fruit and caramel on the pan bottom, then flipped after baking so fruit is on top."
      }
    },
    {
      question: {
        en: "What is a flourless cake made with?",
        es: "What is a flourless cake made with?",
        de: "What is a flourless cake made with?",
        nl: "What is a flourless cake made with?"
      },
      options: [
        { en: "Ground nuts or chocolate", es: "Ground nuts or chocolate", de: "Ground nuts or chocolate", nl: "Ground nuts or chocolate" },
        { en: "Rice flour", es: "Rice flour", de: "Rice flour", nl: "Rice flour" },
        { en: "Cornmeal", es: "Cornmeal", de: "Cornmeal", nl: "Cornmeal" },
        { en: "Potato starch", es: "Potato starch", de: "Potato starch", nl: "Potato starch" }
      ],
      correct: 0,
      explanation: {
        en: "Flourless cakes typically use ground almonds, hazelnuts, or pure chocolate as the structure instead of wheat flour.",
        es: "Flourless cakes typically use ground almonds, hazelnuts, or pure chocolate as the structure instead of wheat flour.",
        de: "Flourless cakes typically use ground almonds, hazelnuts, or pure chocolate as the structure instead of wheat flour.",
        nl: "Flourless cakes typically use ground almonds, hazelnuts, or pure chocolate as the structure instead of wheat flour."
      }
    },
    {
      question: {
        en: "What is Battenberg cake?",
        es: "What is Battenberg cake?",
        de: "What is Battenberg cake?",
        nl: "What is Battenberg cake?"
      },
      options: [
        { en: "Pink and yellow checkered cake", es: "Pink and yellow checkered cake", de: "Pink and yellow checkered cake", nl: "Pink and yellow checkered cake" },
        { en: "Chocolate layer cake", es: "Chocolate layer cake", de: "Chocolate layer cake", nl: "Chocolate layer cake" },
        { en: "Fruit cake", es: "Fruit cake", de: "Fruit cake", nl: "Fruit cake" },
        { en: "Sponge roll", es: "Sponge roll", de: "Sponge roll", nl: "Sponge roll" }
      ],
      correct: 0,
      explanation: {
        en: "Battenberg is a light sponge cake with pink and yellow squares arranged in a checkered pattern, wrapped in marzipan.",
        es: "Battenberg is a light sponge cake with pink and yellow squares arranged in a checkered pattern, wrapped in marzipan.",
        de: "Battenberg is a light sponge cake with pink and yellow squares arranged in a checkered pattern, wrapped in marzipan.",
        nl: "Battenberg is a light sponge cake with pink and yellow squares arranged in a checkered pattern, wrapped in marzipan."
      }
    },
    {
      question: {
        en: "What is a sheet cake?",
        es: "What is a sheet cake?",
        de: "What is a sheet cake?",
        nl: "What is a sheet cake?"
      },
      options: [
        { en: "Flat cake baked in a sheet pan", es: "Flat cake baked in a sheet pan", de: "Flat cake baked in a sheet pan", nl: "Flat cake baked in a sheet pan" },
        { en: "Layered cake", es: "Layered cake", de: "Layered cake", nl: "Layered cake" },
        { en: "Ring-shaped cake", es: "Ring-shaped cake", de: "Ring-shaped cake", nl: "Ring-shaped cake" },
        { en: "Individual cake", es: "Individual cake", de: "Individual cake", nl: "Individual cake" }
      ],
      correct: 0,
      explanation: {
        en: "Sheet cake is a flat, single-layer cake baked in a large, shallow rectangular pan.",
        es: "Sheet cake is a flat, single-layer cake baked in a large, shallow rectangular pan.",
        de: "Sheet cake is a flat, single-layer cake baked in a large, shallow rectangular pan.",
        nl: "Sheet cake is a flat, single-layer cake baked in a large, shallow rectangular pan."
      }
    },
    {
      question: {
        en: "What is the difference between cake and torte?",
        es: "What is the difference between cake and torte?",
        de: "What is the difference between cake and torte?",
        nl: "What is the difference between cake and torte?"
      },
      options: [
        { en: "Torte uses less flour, more eggs/nuts", es: "Torte uses less flour, more eggs/nuts", de: "Torte uses less flour, more eggs/nuts", nl: "Torte uses less flour, more eggs/nuts" },
        { en: "Torte has frosting", es: "Torte has frosting", de: "Torte has frosting", nl: "Torte has frosting" },
        { en: "Cake is denser", es: "Cake is denser", de: "Cake is denser", nl: "Cake is denser" },
        { en: "No difference", es: "No difference", de: "No difference", nl: "No difference" }
      ],
      correct: 0,
      explanation: {
        en: "Tortes typically use ground nuts or breadcrumbs instead of much flour, and contain more eggs than traditional cakes.",
        es: "Tortes typically use ground nuts or breadcrumbs instead of much flour, and contain more eggs than traditional cakes.",
        de: "Tortes typically use ground nuts or breadcrumbs instead of much flour, and contain more eggs than traditional cakes.",
        nl: "Tortes typically use ground nuts or breadcrumbs instead of much flour, and contain more eggs than traditional cakes."
      }
    },
    {
      question: {
        en: "What is opera cake?",
        es: "What is opera cake?",
        de: "What is opera cake?",
        nl: "What is opera cake?"
      },
      options: [
        { en: "French almond sponge with coffee buttercream", es: "French almond sponge with coffee buttercream", de: "French almond sponge with coffee buttercream", nl: "French almond sponge with coffee buttercream" },
        { en: "Italian cream cake", es: "Italian cream cake", de: "Italian cream cake", nl: "Italian cream cake" },
        { en: "German chocolate cake", es: "German chocolate cake", de: "German chocolate cake", nl: "German chocolate cake" },
        { en: "Austrian apple cake", es: "Austrian apple cake", de: "Austrian apple cake", nl: "Austrian apple cake" }
      ],
      correct: 0,
      explanation: {
        en: "Opera cake is a French cake with layers of almond sponge soaked in coffee syrup, layered with coffee buttercream and chocolate ganache.",
        es: "Opera cake is a French cake with layers of almond sponge soaked in coffee syrup, layered with coffee buttercream and chocolate ganache.",
        de: "Opera cake is a French cake with layers of almond sponge soaked in coffee syrup, layered with coffee buttercream and chocolate ganache.",
        nl: "Opera cake is a French cake with layers of almond sponge soaked in coffee syrup, layered with coffee buttercream and chocolate ganache."
      }
    },
    {
      question: {
        en: "What is devil's food cake?",
        es: "What is devil's food cake?",
        de: "What is devil's food cake?",
        nl: "What is devil's food cake?"
      },
      options: [
        { en: "Rich chocolate cake", es: "Rich chocolate cake", de: "Rich chocolate cake", nl: "Rich chocolate cake" },
        { en: "Spicy cake", es: "Spicy cake", de: "Spicy cake", nl: "Spicy cake" },
        { en: "Dark fruit cake", es: "Dark fruit cake", de: "Dark fruit cake", nl: "Dark fruit cake" },
        { en: "Red cake", es: "Red cake", de: "Red cake", nl: "Red cake" }
      ],
      correct: 0,
      explanation: {
        en: "Devil's food cake is a rich, moist chocolate cake, often considered the chocolate counterpart to angel food cake.",
        es: "Devil's food cake is a rich, moist chocolate cake, often considered the chocolate counterpart to angel food cake.",
        de: "Devil's food cake is a rich, moist chocolate cake, often considered the chocolate counterpart to angel food cake.",
        nl: "Devil's food cake is a rich, moist chocolate cake, often considered the chocolate counterpart to angel food cake."
      }
    },
    {
      question: {
        en: "What is a marble cake?",
        es: "What is a marble cake?",
        de: "What is a marble cake?",
        nl: "What is a marble cake?"
      },
      options: [
        { en: "Vanilla and chocolate swirled together", es: "Vanilla and chocolate swirled together", de: "Vanilla and chocolate swirled together", nl: "Vanilla and chocolate swirled together" },
        { en: "Cake with nuts", es: "Cake with nuts", de: "Cake with nuts", nl: "Cake with nuts" },
        { en: "Layered cake", es: "Layered cake", de: "Layered cake", nl: "Layered cake" },
        { en: "Glazed cake", es: "Glazed cake", de: "Glazed cake", nl: "Glazed cake" }
      ],
      correct: 0,
      explanation: {
        en: "Marble cake features vanilla and chocolate batters swirled together to create a marbled pattern.",
        es: "Marble cake features vanilla and chocolate batters swirled together to create a marbled pattern.",
        de: "Marble cake features vanilla and chocolate batters swirled together to create a marbled pattern.",
        nl: "Marble cake features vanilla and chocolate batters swirled together to create a marbled pattern."
      }
    },
    {
      question: {
        en: "What is a dump cake?",
        es: "What is a dump cake?",
        de: "What is a dump cake?",
        nl: "What is a dump cake?"
      },
      options: [
        { en: "Cake made by dumping ingredients in pan", es: "Cake made by dumping ingredients in pan", de: "Cake made by dumping ingredients in pan", nl: "Cake made by dumping ingredients in pan" },
        { en: "Failed cake", es: "Failed cake", de: "Failed cake", nl: "Failed cake" },
        { en: "Upside down cake", es: "Upside down cake", de: "Upside down cake", nl: "Upside down cake" },
        { en: "Layered cake", es: "Layered cake", de: "Layered cake", nl: "Layered cake" }
      ],
      correct: 0,
      explanation: {
        en: "Dump cake is made by dumping ingredients directly into the baking pan without mixing - typically fruit, cake mix, and butter.",
        es: "Dump cake is made by dumping ingredients directly into the baking pan without mixing - typically fruit, cake mix, and butter.",
        de: "Dump cake is made by dumping ingredients directly into the baking pan without mixing - typically fruit, cake mix, and butter.",
        nl: "Dump cake is made by dumping ingredients directly into the baking pan without mixing - typically fruit, cake mix, and butter."
      }
    },
    {
      question: {
        en: "What is Baumkuchen?",
        es: "What is Baumkuchen?",
        de: "What is Baumkuchen?",
        nl: "What is Baumkuchen?"
      },
      options: [
        { en: "German tree ring cake", es: "German tree ring cake", de: "German tree ring cake", nl: "German tree ring cake" },
        { en: "French sponge cake", es: "French sponge cake", de: "French sponge cake", nl: "French sponge cake" },
        { en: "Italian nut cake", es: "Italian nut cake", de: "Italian nut cake", nl: "Italian nut cake" },
        { en: "Austrian chocolate cake", es: "Austrian chocolate cake", de: "Austrian chocolate cake", nl: "Austrian chocolate cake" }
      ],
      correct: 0,
      explanation: {
        en: "Baumkuchen is a German cake baked in thin layers on a rotating spit, creating rings that resemble tree rings when sliced.",
        es: "Baumkuchen is a German cake baked in thin layers on a rotating spit, creating rings that resemble tree rings when sliced.",
        de: "Baumkuchen is a German cake baked in thin layers on a rotating spit, creating rings that resemble tree rings when sliced.",
        nl: "Baumkuchen is a German cake baked in thin layers on a rotating spit, creating rings that resemble tree rings when sliced."
      }
    },
    {
      question: {
        en: "What is the purpose of creaming butter and sugar?",
        es: "What is the purpose of creaming butter and sugar?",
        de: "What is the purpose of creaming butter and sugar?",
        nl: "What is the purpose of creaming butter and sugar?"
      },
      options: [
        { en: "Incorporate air for lightness", es: "Incorporate air for lightness", de: "Incorporate air for lightness", nl: "Incorporate air for lightness" },
        { en: "Add flavor", es: "Add flavor", de: "Add flavor", nl: "Add flavor" },
        { en: "Dissolve sugar", es: "Dissolve sugar", de: "Dissolve sugar", nl: "Dissolve sugar" },
        { en: "Melt butter", es: "Melt butter", de: "Melt butter", nl: "Melt butter" }
      ],
      correct: 0,
      explanation: {
        en: "Creaming butter and sugar together incorporates air into the mixture, creating a lighter cake texture.",
        es: "Creaming butter and sugar together incorporates air into the mixture, creating a lighter cake texture.",
        de: "Creaming butter and sugar together incorporates air into the mixture, creating a lighter cake texture.",
        nl: "Creaming butter and sugar together incorporates air into the mixture, creating a lighter cake texture."
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