// Quiz Template - Level 1: Dessert - Puddings
(function() {
  const level1 = {
    name: {
      en: "Puddings - Level 1",
      es: "Pudines - Nivel 1",
      de: "Puddings - Level 1",
      nl: "Puddings - Level 1"
    },
    questions: [
      {
        question: {
          en: "What is the main thickening agent in most traditional puddings?",
          es: "¿Cuál es el principal agente espesante en la mayoría de los pudines tradicionales?",
          de: "Was ist das Hauptverdickungsmittel in den meisten traditionellen Puddings?",
          nl: "Wat is het belangrijkste verdikkingsmiddel in de meeste traditionele puddings?"
        },
        options: [
          { en: "Cornstarch", es: "Maicena", de: "Maisstärke", nl: "Maïzena" },
          { en: "Flour", es: "Harina", de: "Mehl", nl: "Bloem" },
          { en: "Gelatin", es: "Gelatina", de: "Gelatine", nl: "Gelatine" },
          { en: "Agar", es: "Agar", de: "Agar", nl: "Agar" }
        ],
        correct: 0,
        explanation: {
          en: "Cornstarch is the most common thickening agent for puddings because it creates a smooth, creamy texture without adding flavor.",
          es: "La maicena es el agente espesante más común para los pudines porque crea una textura suave y cremosa sin agregar sabor.",
          de: "Maisstärke ist das häufigste Verdickungsmittel für Puddings, da sie eine glatte, cremige Textur erzeugt, ohne Geschmack hinzuzufügen.",
          nl: "Maïzena is het meest gebruikte verdikkingsmiddel voor puddings omdat het een gladde, romige textuur creëert zonder smaak toe te voegen."
        }
      },
      {
        question: {
          en: "What type of pudding is cooked by steaming in a mold?",
          es: "¿Qué tipo de pudín se cocina al vapor en un molde?",
          de: "Welche Art von Pudding wird durch Dämpfen in einer Form gekocht?",
          nl: "Welk type pudding wordt gekookt door stomen in een vorm?"
        },
        options: [
          { en: "Instant pudding", es: "Pudín instantáneo", de: "Instant-Pudding", nl: "Instant pudding" },
          { en: "British steamed pudding", es: "Pudín al vapor británico", de: "Britischer gedämpfter Pudding", nl: "Britse gestoomde pudding" },
          { en: "Chocolate pudding", es: "Pudín de chocolate", de: "Schokoladenpudding", nl: "Chocoladepudding" },
          { en: "Rice pudding", es: "Arroz con leche", de: "Reispudding", nl: "Rijstpudding" }
        ],
        correct: 1,
        explanation: {
          en: "British steamed puddings are traditional desserts cooked by steaming in a pudding basin or mold, often served with custard.",
          es: "Los pudines al vapor británicos son postres tradicionales cocidos al vapor en un molde, a menudo servidos con natilla.",
          de: "Britische gedämpfte Puddings sind traditionelle Desserts, die durch Dämpfen in einer Puddingschüssel gekocht und oft mit Vanillesoße serviert werden.",
          nl: "Britse gestoomde puddings zijn traditionele desserts die worden gekookt door stomen in een puddingkom, vaak geserveerd met vla."
        }
      },
      {
        question: {
          en: "What happens if you boil pudding instead of gently heating it?",
          es: "¿Qué pasa si hierves el pudín en lugar de calentarlo suavemente?",
          de: "Was passiert, wenn Sie Pudding kochen, anstatt ihn sanft zu erhitzen?",
          nl: "Wat gebeurt er als je pudding kookt in plaats van voorzichtig te verwarmen?"
        },
        options: [
          { en: "It becomes extra creamy", es: "Se vuelve extra cremoso", de: "Es wird extra cremig", nl: "Het wordt extra romig" },
          { en: "It may curdle or become lumpy", es: "Puede cortarse o volverse grumoso", de: "Es kann gerinnen oder klumpig werden", nl: "Het kan schiften of klonterig worden" },
          { en: "It sets faster", es: "Se cuaja más rápido", de: "Es setzt schneller", nl: "Het stolt sneller" },
          { en: "Nothing happens", es: "No pasa nada", de: "Nichts passiert", nl: "Er gebeurt niets" }
        ],
        correct: 1,
        explanation: {
          en: "Boiling pudding can cause the proteins to coagulate too quickly, resulting in curdling or a lumpy texture. Gentle heat is essential.",
          es: "Hervir el pudín puede hacer que las proteínas se coagulen demasiado rápido, resultando en que se corte o tenga una textura grumosa.",
          de: "Das Kochen von Pudding kann dazu führen, dass die Proteine zu schnell gerinnen, was zu Gerinnung oder klumpiger Textur führt.",
          nl: "Het koken van pudding kan ervoor zorgen dat de eiwitten te snel stollen, wat resulteert in schifting of een klonterige textuur."
        }
      },
      {
        question: {
          en: "What is the key ingredient that makes rice pudding different from other puddings?",
          es: "¿Cuál es el ingrediente clave que hace que el arroz con leche sea diferente a otros pudines?",
          de: "Was ist die Schlüsselzutat, die Reispudding von anderen Puddings unterscheidet?",
          nl: "Wat is het belangrijkste ingrediënt dat rijstpudding anders maakt dan andere puddings?"
        },
        options: [
          { en: "Cooked rice", es: "Arroz cocido", de: "Gekochter Reis", nl: "Gekookte rijst" },
          { en: "Extra sugar", es: "Azúcar extra", de: "Extra Zucker", nl: "Extra suiker" },
          { en: "More milk", es: "Más leche", de: "Mehr Milch", nl: "Meer melk" },
          { en: "Vanilla extract", es: "Extracto de vainilla", de: "Vanilleextrakt", nl: "Vanille-extract" }
        ],
        correct: 0,
        explanation: {
          en: "Rice pudding contains cooked rice as its primary ingredient, which gives it a unique texture and makes it more substantial than other puddings.",
          es: "El arroz con leche contiene arroz cocido como ingrediente principal, lo que le da una textura única y lo hace más sustancioso.",
          de: "Reispudding enthält gekochten Reis als Hauptzutat, was ihm eine einzigartige Textur verleiht und ihn gehaltvoller macht.",
          nl: "Rijstpudding bevat gekookte rijst als hoofdingrediënt, wat het een unieke textuur geeft en voedzamer maakt dan andere puddings."
        }
      },
      {
        question: {
          en: "What is bread pudding typically made from?",
          es: "¿De qué se hace típicamente el pudín de pan?",
          de: "Woraus wird Brotpudding normalerweise hergestellt?",
          nl: "Waar wordt broodpudding doorgaans van gemaakt?"
        },
        options: [
          { en: "Fresh bread and cream", es: "Pan fresco y crema", de: "Frisches Brot und Sahne", nl: "Vers brood en room" },
          { en: "Stale bread and custard", es: "Pan duro y natilla", de: "Altbackenes Brot und Vanillesoße", nl: "Oud brood en vla" },
          { en: "Breadcrumbs and milk", es: "Migas de pan y leche", de: "Brotkrümel und Milch", nl: "Paneermeel en melk" },
          { en: "Crackers and eggs", es: "Galletas y huevos", de: "Kekse und Eier", nl: "Crackers en eieren" }
        ],
        correct: 1,
        explanation: {
          en: "Bread pudding is traditionally made from stale bread soaked in a custard mixture, making it an excellent way to use up old bread.",
          es: "El pudín de pan se hace tradicionalmente con pan duro empapado en una mezcla de natilla, siendo una excelente forma de usar pan viejo.",
          de: "Brotpudding wird traditionell aus altbackenem Brot hergestellt, das in einer Vanillesoßenmischung eingeweicht wird.",
          nl: "Broodpudding wordt traditioneel gemaakt van oud brood dat wordt geweekt in een vlamengsel, een uitstekende manier om oud brood te gebruiken."
        }
      },
      {
        question: {
          en: "What temperature should milk be heated to when making stovetop pudding?",
          es: "¿A qué temperatura se debe calentar la leche al hacer pudín en la estufa?",
          de: "Auf welche Temperatur sollte Milch erhitzt werden, wenn man Pudding auf dem Herd macht?",
          nl: "Tot welke temperatuur moet melk worden verwarmd bij het maken van pudding op het fornuis?"
        },
        options: [
          { en: "Rolling boil", es: "Hervor fuerte", de: "Sprudelnd kochen", nl: "Rollende kook" },
          { en: "Just below boiling", es: "Justo antes de hervir", de: "Knapp unter dem Kochen", nl: "Net onder het kookpunt" },
          { en: "Room temperature", es: "Temperatura ambiente", de: "Zimmertemperatur", nl: "Kamertemperatuur" },
          { en: "Ice cold", es: "Muy frío", de: "Eiskalt", nl: "IJskoud" }
        ],
        correct: 1,
        explanation: {
          en: "Milk should be heated just below boiling point to prevent scorching and to properly dissolve the thickening agents without curdling.",
          es: "La leche debe calentarse justo antes del punto de ebullición para evitar que se queme y disolver adecuadamente los espesantes.",
          de: "Milch sollte knapp unter dem Siedepunkt erhitzt werden, um Anbrennen zu vermeiden und Verdickungsmittel richtig aufzulösen.",
          nl: "Melk moet net onder het kookpunt worden verwarmd om aanbranden te voorkomen en verdikkingsmiddelen goed op te lossen."
        }
      },
      {
        question: {
          en: "Which pudding is known for its caramelized sugar topping that's torched?",
          es: "¿Qué pudín es conocido por su cobertura de azúcar caramelizada que se quema con soplete?",
          de: "Welcher Pudding ist für seine karamellisierte Zuckerhaube bekannt, die abgeflammt wird?",
          nl: "Welke pudding staat bekend om zijn gekarameliseerde suikertopping die wordt geflameerd?"
        },
        options: [
          { en: "Chocolate pudding", es: "Pudín de chocolate", de: "Schokoladenpudding", nl: "Chocoladepudding" },
          { en: "Crème brûlée", es: "Crema catalana", de: "Crème brûlée", nl: "Crème brûlée" },
          { en: "Rice pudding", es: "Arroz con leche", de: "Reispudding", nl: "Rijstpudding" },
          { en: "Bread pudding", es: "Pudín de pan", de: "Brotpudding", nl: "Broodpudding" }
        ],
        correct: 1,
        explanation: {
          en: "Crème brûlée is famous for its hard caramelized sugar crust that's created by torching sugar sprinkled on top of the custard.",
          es: "La crema catalana es famosa por su costra dura de azúcar caramelizada que se crea quemando azúcar espolvoreada encima de la natilla.",
          de: "Crème brûlée ist berühmt für seine harte karamellisierte Zuckerkruste, die durch das Abflammen von auf die Creme gestreutem Zucker entsteht.",
          nl: "Crème brûlée staat bekend om zijn harde gekarameliseerde suikerkorst die wordt gemaakt door suiker op de custard te branden."
        }
      },
      {
        question: {
          en: "What gives chocolate pudding its rich brown color?",
          es: "¿Qué le da al pudín de chocolate su rico color marrón?",
          de: "Was verleiht Schokoladenpudding seine satte braune Farbe?",
          nl: "Wat geeft chocoladepudding zijn rijke bruine kleur?"
        },
        options: [
          { en: "Food coloring", es: "Colorante alimentario", de: "Lebensmittelfarbe", nl: "Voedselkleurstof" },
          { en: "Cocoa powder or chocolate", es: "Cacao en polvo o chocolate", de: "Kakaopulver oder Schokolade", nl: "Cacaopoeder of chocolade" },
          { en: "Coffee", es: "Café", de: "Kaffee", nl: "Koffie" },
          { en: "Caramel", es: "Caramelo", de: "Karamell", nl: "Karamel" }
        ],
        correct: 1,
        explanation: {
          en: "The rich brown color in chocolate pudding comes naturally from cocoa powder or melted chocolate, which also provides the chocolate flavor.",
          es: "El rico color marrón del pudín de chocolate proviene naturalmente del cacao en polvo o chocolate derretido, que también proporciona el sabor a chocolate.",
          de: "Die satte braune Farbe im Schokoladenpudding kommt natürlich von Kakaopulver oder geschmolzener Schokolade, die auch den Schokoladengeschmack liefert.",
          nl: "De rijke bruine kleur in chocoladepudding komt natuurlijk van cacaopoeder of gesmolten chocolade, wat ook de chocoladesmaak geeft."
        }
      },
      {
        question: {
          en: "How do you prevent a skin from forming on top of pudding while it cools?",
          es: "¿Cómo evitas que se forme una piel encima del pudín mientras se enfría?",
          de: "Wie verhindert man, dass sich eine Haut auf dem Pudding bildet, während er abkühlt?",
          nl: "Hoe voorkom je dat er een velletje op de pudding vormt terwijl het afkoelt?"
        },
        options: [
          { en: "Stir it constantly", es: "Revolverlo constantemente", de: "Ständig rühren", nl: "Voortdurend roeren" },
          { en: "Cover with plastic wrap touching the surface", es: "Cubrir con papel film tocando la superficie", de: "Mit Frischhaltefolie abdecken, die die Oberfläche berührt", nl: "Bedekken met plastic folie die het oppervlak raakt" },
          { en: "Add more milk", es: "Agregar más leche", de: "Mehr Milch hinzufügen", nl: "Meer melk toevoegen" },
          { en: "Cool it in the freezer", es: "Enfriarlo en el congelador", de: "Im Gefrierschrank kühlen", nl: "In de vriezer laten afkoelen" }
        ],
        correct: 1,
        explanation: {
          en: "Covering pudding with plastic wrap that touches the surface prevents air exposure, which stops a skin from forming as it cools.",
          es: "Cubrir el pudín con papel film que toque la superficie evita la exposición al aire, lo que impide que se forme una piel al enfriarse.",
          de: "Das Abdecken von Pudding mit Frischhaltefolie, die die Oberfläche berührt, verhindert Luftkontakt und stoppt die Hautbildung beim Abkühlen.",
          nl: "Het bedekken van pudding met plastic folie die het oppervlak raakt voorkomt luchtblootstelling, wat voorkomt dat er een velletje vormt."
        }
      },
      {
        question: {
          en: "What is the main difference between pudding and custard?",
          es: "¿Cuál es la principal diferencia entre pudín y natilla?",
          de: "Was ist der Hauptunterschied zwischen Pudding und Vanillesoße?",
          nl: "Wat is het belangrijkste verschil tussen pudding en vla?"
        },
        options: [
          { en: "Pudding uses starch, custard uses eggs", es: "El pudín usa almidón, la natilla usa huevos", de: "Pudding verwendet Stärke, Vanillesoße verwendet Eier", nl: "Pudding gebruikt zetmeel, vla gebruikt eieren" },
          { en: "Pudding is cold, custard is hot", es: "El pudín es frío, la natilla es caliente", de: "Pudding ist kalt, Vanillesoße ist heiß", nl: "Pudding is koud, vla is warm" },
          { en: "Pudding has fruit, custard doesn't", es: "El pudín tiene fruta, la natilla no", de: "Pudding hat Obst, Vanillesoße nicht", nl: "Pudding heeft fruit, vla niet" },
          { en: "No difference", es: "No hay diferencia", de: "Kein Unterschied", nl: "Geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "The main difference is that pudding is typically thickened with starch (cornstarch), while custard is thickened with eggs.",
          es: "La principal diferencia es que el pudín típicamente se espesa con almidón (maicena), mientras que la natilla se espesa con huevos.",
          de: "Der Hauptunterschied ist, dass Pudding typischerweise mit Stärke (Maisstärke) verdickt wird, während Vanillesoße mit Eiern verdickt wird.",
          nl: "Het belangrijkste verschil is dat pudding doorgaans wordt verdikt met zetmeel (maïzena), terwijl vla wordt verdikt met eieren."
        }
      },
      {
        question: {
          en: "What spice is commonly added to rice pudding?",
          es: "¿Qué especia se agrega comúnmente al arroz con leche?",
          de: "Welches Gewürz wird häufig zu Reispudding hinzugefügt?",
          nl: "Welke specerij wordt vaak toegevoegd aan rijstpudding?"
        },
        options: [
          { en: "Paprika", es: "Pimentón", de: "Paprika", nl: "Paprika" },
          { en: "Cinnamon", es: "Canela", de: "Zimt", nl: "Kaneel" },
          { en: "Turmeric", es: "Cúrcuma", de: "Kurkuma", nl: "Kurkuma" },
          { en: "Black pepper", es: "Pimienta negra", de: "Schwarzer Pfeffer", nl: "Zwarte peper" }
        ],
        correct: 1,
        explanation: {
          en: "Cinnamon is the most common spice added to rice pudding, providing warmth and complementing the sweet, creamy flavors.",
          es: "La canela es la especia más común agregada al arroz con leche, proporcionando calidez y complementando los sabores dulces y cremosos.",
          de: "Zimt ist das häufigste Gewürz, das zu Reispudding hinzugefügt wird und Wärme verleiht sowie die süßen, cremigen Aromen ergänzt.",
          nl: "Kaneel is de meest gebruikte specerij die aan rijstpudding wordt toegevoegd, wat warmte geeft en de zoete, romige smaken aanvult."
        }
      },
      {
        question: {
          en: "What type of milk is traditionally used in British spotted dick pudding?",
          es: "¿Qué tipo de leche se usa tradicionalmente en el pudín británico spotted dick?",
          de: "Welche Art von Milch wird traditionell in britischem Spotted Dick Pudding verwendet?",
          nl: "Welk type melk wordt traditioneel gebruikt in Britse spotted dick pudding?"
        },
        options: [
          { en: "Coconut milk", es: "Leche de coco", de: "Kokosmilch", nl: "Kokosmelk" },
          { en: "Whole milk", es: "Leche entera", de: "Vollmilch", nl: "Volle melk" },
          { en: "Almond milk", es: "Leche de almendra", de: "Mandelmilch", nl: "Amandelmelk" },
          { en: "Evaporated milk", es: "Leche evaporada", de: "Kondensmilch", nl: "Gecondenseerde melk" }
        ],
        correct: 1,
        explanation: {
          en: "Traditional British steamed puddings like spotted dick typically use whole milk for richness and proper texture in the suet-based batter.",
          es: "Los pudines al vapor británicos tradicionales como el spotted dick típicamente usan leche entera para riqueza y textura adecuada.",
          de: "Traditionelle britische gedämpfte Puddings wie Spotted Dick verwenden typischerweise Vollmilch für Reichhaltigkeit und richtige Textur.",
          nl: "Traditionele Britse gestoomde puddings zoals spotted dick gebruiken doorgaans volle melk voor rijkheid en de juiste textuur."
        }
      },
      {
        question: {
          en: "What kitchen tool is essential for making smooth, lump-free pudding?",
          es: "¿Qué herramienta de cocina es esencial para hacer pudín suave y sin grumos?",
          de: "Welches Küchengerät ist für die Herstellung von glattem, klumpenfreiem Pudding unerlässlich?",
          nl: "Welk keukenwerktuig is essentieel voor het maken van gladde, klontervrije pudding?"
        },
        options: [
          { en: "Rolling pin", es: "Rodillo", de: "Nudelholz", nl: "Deegroller" },
          { en: "Whisk", es: "Batidor", de: "Schneebesen", nl: "Garde" },
          { en: "Spatula", es: "Espátula", de: "Spatel", nl: "Spatel" },
          { en: "Ladle", es: "Cucharón", de: "Schöpfkelle", nl: "Pollepel" }
        ],
        correct: 1,
        explanation: {
          en: "A whisk is essential for making smooth pudding as it helps break up lumps and incorporates ingredients evenly while cooking.",
          es: "Un batidor es esencial para hacer pudín suave ya que ayuda a romper los grumos e incorpora los ingredientes uniformemente.",
          de: "Ein Schneebesen ist für glatten Pudding unerlässlich, da er hilft, Klumpen aufzubrechen und Zutaten gleichmäßig einzuarbeiten.",
          nl: "Een garde is essentieel voor gladde pudding omdat het helpt klontjes op te breken en ingrediënten gelijkmatig te mengen."
        }
      },
      {
        question: {
          en: "How long should you typically cook stovetop pudding?",
          es: "¿Cuánto tiempo debes cocinar típicamente el pudín en la estufa?",
          de: "Wie lange sollte man Pudding auf dem Herd typischerweise kochen?",
          nl: "Hoe lang moet je pudding op het fornuis doorgaans koken?"
        },
        options: [
          { en: "30 sec", es: "30 segundos", de: "30 Sekunden", nl: "30 seconden" },
          { en: "2-5 minutes until thickened", es: "2-5 minutos hasta espesar", de: "2-5 Minuten bis verdickt", nl: "2-5 minuten tot het dik wordt" },
          { en: "30 min", es: "30 minutos", de: "30 Minuten", nl: "30 minuten" },
          { en: "2 hours", es: "2 horas", de: "2 Stunden", nl: "2 uur" }
        ],
        correct: 1,
        explanation: {
          en: "Stovetop pudding typically takes 2-5 minutes of gentle cooking while stirring constantly until it reaches the proper thick consistency.",
          es: "El pudín en estufa típicamente toma 2-5 minutos de cocción suave mientras se revuelve constantemente hasta alcanzar la consistencia espesa.",
          de: "Pudding auf dem Herd benötigt typischerweise 2-5 Minuten sanftes Kochen unter ständigem Rühren bis zur richtigen dicken Konsistenz.",
          nl: "Pudding op het fornuis duurt doorgaans 2-5 minuten voorzichtig koken terwijl je constant roert tot de juiste dikke consistentie."
        }
      },
      {
        question: {
          en: "What gives tapioca pudding its distinctive texture?",
          es: "¿Qué le da al pudín de tapioca su textura distintiva?",
          de: "Was verleiht Tapioca-Pudding seine charakteristische Textur?",
          nl: "Wat geeft tapiocapudding zijn kenmerkende textuur?"
        },
        options: [
          { en: "Corn kernels", es: "Granos de maíz", de: "Maiskörner", nl: "Maïskorrels" },
          { en: "Tapioca pearls", es: "Perlas de tapioca", de: "Tapioca-Perlen", nl: "Tapiocaparels" },
          { en: "Rice grains", es: "Granos de arroz", de: "Reiskörner", nl: "Rijstkorrels" },
          { en: "Coconut flakes", es: "Hojuelas de coco", de: "Kokosflocken", nl: "Kokosvlokken" }
        ],
        correct: 1,
        explanation: {
          en: "Tapioca pearls, made from cassava starch, create the characteristic chewy, translucent spheres that give tapioca pudding its unique texture.",
          es: "Las perlas de tapioca, hechas de almidón de yuca, crean las esferas translúcidas y masticables características del pudín de tapioca.",
          de: "Tapioca-Perlen aus Kassava-Stärke erzeugen die charakteristischen kauartigen, durchscheinenden Kugeln, die Tapioca-Pudding seine einzigartige Textur verleihen.",
          nl: "Tapiocaparels, gemaakt van cassave-zetmeel, creëren de kenmerkende kauwbare, doorschijnende bolletjes die tapiocapudding zijn unieke textuur geven."
        }
      },
      {
        question: {
          en: "Which ingredient is NOT typically found in basic vanilla pudding?",
          es: "¿Qué ingrediente NO se encuentra típicamente en el pudín básico de vainilla?",
          de: "Welche Zutat ist normalerweise NICHT in einfachem Vanillepudding enthalten?",
          nl: "Welk ingrediënt wordt doorgaans NIET gebruikt in basis vanillepudding?"
        },
        options: [
          { en: "Milk", es: "Leche", de: "Milch", nl: "Melk" },
          { en: "Sugar", es: "Azúcar", de: "Zucker", nl: "Suiker" },
          { en: "Cornstarch", es: "Maicena", de: "Maisstärke", nl: "Maïzena" },
          { en: "Lemon juice", es: "Jugo de limón", de: "Zitronensaft", nl: "Citroensap" }
        ],
        correct: 3,
        explanation: {
          en: "Lemon juice is not typically used in vanilla pudding as it can curdle the milk and its acidity conflicts with the sweet vanilla flavor.",
          es: "El jugo de limón no se usa típicamente en pudín de vainilla ya que puede cortar la leche y su acidez conflicta con el sabor dulce de vainilla.",
          de: "Zitronensaft wird normalerweise nicht in Vanillepudding verwendet, da er die Milch zum Gerinnen bringen kann und seine Säure mit dem süßen Vanillegeschmack kollidiert.",
          nl: "Citroensap wordt doorgaans niet gebruikt in vanillepudding omdat het de melk kan doen schiften en de zuurheid botst met de zoete vanillesmaak."
        }
      },
      {
        question: {
          en: "What is the purpose of tempering eggs when making custard-based puddings?",
          es: "¿Cuál es el propósito de templar los huevos al hacer pudines a base de natilla?",
          de: "Was ist der Zweck des Temperierens von Eiern bei der Herstellung von puddingartigen Desserts auf Eierbasis?",
          nl: "Wat is het doel van het tempereren van eieren bij het maken van op vla gebaseerde puddings?"
        },
        options: [
          { en: "To make them taste better", es: "Para que sepan mejor", de: "Damit sie besser schmecken", nl: "Om ze lekkerder te maken" },
          { en: "To prevent them from scrambling", es: "Para evitar que se revuelvan", de: "Um zu verhindern, dass sie gerinnen", nl: "Om te voorkomen dat ze gaan stremmen" },
          { en: "To make them cook faster", es: "Para que se cocinen más rápido", de: "Damit sie schneller kochen", nl: "Om ze sneller te laten koken" },
          { en: "To change their color", es: "Para cambiar su color", de: "Um ihre Farbe zu ändern", nl: "Om hun kleur te veranderen" }
        ],
        correct: 1,
        explanation: {
          en: "Tempering gradually raises the temperature of eggs by slowly adding hot liquid, preventing them from scrambling when added to the hot mixture.",
          es: "El templado aumenta gradualmente la temperatura de los huevos agregando lentamente líquido caliente, evitando que se revuelvan.",
          de: "Das Temperieren erhöht die Temperatur der Eier allmählich durch langsames Hinzufügen heißer Flüssigkeit, um Gerinnung zu verhindern.",
          nl: "Tempereren verhoogt geleidelijk de temperatuur van eieren door langzaam warme vloeistof toe te voegen, waardoor stremming wordt voorkomen."
        }
      },
      {
        question: {
          en: "What texture should properly made pudding have?",
          es: "¿Qué textura debe tener un pudín bien hecho?",
          de: "Welche Textur sollte richtig gemachter Pudding haben?",
          nl: "Welke textuur moet goed gemaakte pudding hebben?"
        },
        options: [
          { en: "Lumpy and thick", es: "Grumoso y espeso", de: "Klumpig und dick", nl: "Klonterig en dik" },
          { en: "Watery and thin", es: "Aguado y delgado", de: "Wässrig und dünn", nl: "Waterig en dun" },
          { en: "Smooth and creamy", es: "Suave y cremoso", de: "Glatt und cremig", nl: "Glad en romig" },
          { en: "Crunchy and hard", es: "Crujiente y duro", de: "Knusprig und hart", nl: "Knapperig en hard" }
        ],
        correct: 2,
        explanation: {
          en: "Properly made pudding should have a smooth, creamy texture without lumps, achieved through proper cooking technique and constant stirring.",
          es: "El pudín bien hecho debe tener una textura suave y cremosa sin grumos, lograda a través de la técnica de cocción adecuada y revolver constantemente.",
          de: "Richtig gemachter Pudding sollte eine glatte, cremige Textur ohne Klumpen haben, erreicht durch richtige Kochtechnik und ständiges Rühren.",
          nl: "Goed gemaakte pudding moet een gladde, romige textuur hebben zonder klontjes, bereikt door juiste kooktechniek en constant roeren."
        }
      },
      {
        question: {
          en: "What happens to instant pudding when you add milk?",
          es: "¿Qué pasa con el pudín instantáneo cuando agregas leche?",
          de: "Was passiert mit Instant-Pudding, wenn Sie Milch hinzufügen?",
          nl: "Wat gebeurt er met instant pudding als je melk toevoegt?"
        },
        options: [
          { en: "It needs to be cooked", es: "Necesita ser cocido", de: "Es muss gekocht werden", nl: "Het moet gekookt worden" },
          { en: "It thickens automatically without cooking", es: "Se espesa automáticamente sin cocinar", de: "Es dickt automatisch ohne Kochen ein", nl: "Het wordt automatisch dik zonder koken" },
          { en: "It stays liquid forever", es: "Se mantiene líquido para siempre", de: "Es bleibt für immer flüssig", nl: "Het blijft voor altijd vloeibaar" },
          { en: "It turns into ice cream", es: "Se convierte en helado", de: "Es wird zu Eis", nl: "Het wordt ijs" }
        ],
        correct: 1,
        explanation: {
          en: "Instant pudding contains modified starch that thickens when mixed with milk without requiring heat, making it very convenient to prepare.",
          es: "El pudín instantáneo contiene almidón modificado que se espesa cuando se mezcla con leche sin requerir calor, haciéndolo muy conveniente.",
          de: "Instant-Pudding enthält modifizierte Stärke, die beim Mischen mit Milch ohne Hitze eindickt, was die Zubereitung sehr bequem macht.",
          nl: "Instant pudding bevat gemodificeerd zetmeel dat dik wordt wanneer het wordt gemengd met melk zonder warmte, wat het zeer handig maakt."
        }
      },
      {
        question: {
          en: "What is the basic ingredient that distinguishes bread pudding from other puddings?",
          es: "¿Cuál es el ingrediente básico que distingue al budín de pan de otros pudines?",
          de: "Was ist die grundlegende Zutat, die Brotpudding von anderen Puddings unterscheidet?",
          nl: "Wat is het basisingrediënt dat broodpudding onderscheidt van andere puddings?"
        },
        options: [
          { en: "Stale bread", es: "Pan duro", de: "Altes Brot", nl: "Oud brood" },
          { en: "Fresh fruit", es: "Fruta fresca", de: "Frisches Obst", nl: "Vers fruit" },
          { en: "Chocolate chips", es: "Chispas de chocolate", de: "Schokoladenstückchen", nl: "Chocoladeschilfers" },
          { en: "Nuts", es: "Nueces", de: "Nüsse", nl: "Noten" }
        ],
        correct: 0,
        explanation: {
          en: "Bread pudding is made using stale or day-old bread as the main base, which absorbs the custard mixture and creates the characteristic texture.",
          es: "El budín de pan se hace usando pan duro o del día anterior como base principal, que absorbe la mezcla de natilla y crea la textura característica.",
          de: "Brotpudding wird mit altem oder einem Tag altem Brot als Hauptbasis hergestellt, das die Puddingmischung absorbiert und die charakteristische Textur erzeugt.",
          nl: "Broodpudding wordt gemaakt met oud of een dag oud brood als hoofdbasis, dat het vlamengsel absorbeert en de karakteristieke textuur creëert."
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