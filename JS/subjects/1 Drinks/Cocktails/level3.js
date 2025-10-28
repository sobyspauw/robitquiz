// Quiz Level 3: Drinken - Cocktails (Cocktail Preparation Techniques)
(function() {
  const level3 = {
    name: {
      en: "Cocktail Preparation Techniques",
      es: "Técnicas de Preparación de Cócteles",
      de: "Cocktail-Zubereitungstechniken",
      nl: "Cocktail Bereidingstechnieken"
    },
    questions: [
      {
        question: {
          en: "What is the primary purpose of 'muddling' in cocktail preparation?",
          es: "¿Cuál es el propósito principal de 'machacar' en la preparación de cócteles?",
          de: "Was ist der Hauptzweck des 'Muddelns' bei der Cocktailzubereitung?",
          nl: "Wat is het hoofddoel van 'muddlen' bij cocktailbereiding?"
        },
        options: [
          { en: "To chill ingredients", es: "Para enfriar ingredientes", de: "Um Zutaten zu kühlen", nl: "Om ingrediënten te koelen" },
          { en: "To release oils and flavors", es: "Para liberar aceites y sabores", de: "Um Öle und Aromen freizusetzen", nl: "Om oliën en smaken vrij te maken" },
          { en: "To mix ingredients", es: "Para mezclar ingredientes", de: "Um Zutaten zu vermischen", nl: "Om ingrediënten te mengen" },
          { en: "To strain the cocktail", es: "Para colar el cóctel", de: "Um den Cocktail zu filtern", nl: "Om de cocktail te filteren" }
        ],
        correct: 1,
        explanation: {
          en: "Muddling crushes herbs, fruits, or spices to release their essential oils, juices, and flavors into the cocktail.",
          es: "Machacar aplasta hierbas, frutas o especias para liberar sus aceites esenciales, jugos y sabores en el cóctel.",
          de: "Muddeln zerdrückt Kräuter, Früchte oder Gewürze, um ihre ätherischen Öle, Säfte und Aromen in den Cocktail freizusetzen.",
          nl: "Muddlen verplettert kruiden, fruit of specerijen om hun essentiële oliën, sappen en smaken in de cocktail vrij te maken."
        }
      },
      {
        question: {
          en: "When should you 'double strain' a cocktail?",
          es: "¿Cuándo debes 'colar doblemente' un cóctel?",
          de: "Wann sollten Sie einen Cocktail 'doppelt filtern'?",
          nl: "Wanneer moet je een cocktail 'dubbel filteren'?"
        },
        options: [
          { en: "When using carbonated ingredients", es: "Al usar ingredientes carbonatados", de: "Bei kohlensäurehaltigen Zutaten", nl: "Bij gebruik van koolzuurhoudende ingrediënten" },
          { en: "When the drink contains muddled ingredients", es: "Cuando la bebida contiene ingredientes machacados", de: "Wenn das Getränk gemudelte Zutaten enthält", nl: "Wanneer de drank gemudelde ingrediënten bevat" },
          { en: "When serving on the rocks", es: "Al servir con hielo", de: "Beim Servieren auf Eis", nl: "Bij serveren op ijs" },
          { en: "When using egg whites", es: "Al usar claras de huevo", de: "Bei Verwendung von Eiweiß", nl: "Bij gebruik van eiwitten" }
        ],
        correct: 1,
        explanation: {
          en: "Double straining removes small particles and pulp from muddled fruits, herbs, or ice chips to create a smooth cocktail.",
          es: "El colado doble elimina pequeñas partículas y pulpa de frutas machacadas, hierbas o trozos de hielo para crear un cóctel suave.",
          de: "Doppeltes Filtern entfernt kleine Partikel und Fruchtfleisch von gemudelten Früchten, Kräutern oder Eissplittern für einen glatten Cocktail.",
          nl: "Dubbel filteren verwijdert kleine deeltjes en pulp van gemudeld fruit, kruiden of ijssplinters om een gladde cocktail te creëren."
        }
      },
      {
        question: {
          en: "What is the difference between 'shaking' and 'stirring' a cocktail?",
          es: "¿Cuál es la diferencia entre 'agitar' y 'revolver' un cóctel?",
          de: "Was ist der Unterschied zwischen 'Schütteln' und 'Rühren' eines Cocktails?",
          nl: "Wat is het verschil tussen 'schudden' en 'roeren' van een cocktail?"
        },
        options: [
          { en: "Shaking chills more, stirring preserves clarity", es: "Agitar enfría más, revolver preserva la claridad", de: "Schütteln kühlt mehr, Rühren erhält Klarheit", nl: "Schudden koelt meer, roeren behoudt helderheid" },
          { en: "Stirring is for hot drinks only", es: "Revolver es solo para bebidas calientes", de: "Rühren ist nur für heiße Getränke", nl: "Roeren is alleen voor warme dranken" },
          { en: "Shaking is only for carbonated drinks", es: "Agitar es solo para bebidas carbonatadas", de: "Schütteln ist nur für kohlensäurehaltige Getränke", nl: "Schudden is alleen voor koolzuurhoudende dranken" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Shaking provides more aggressive chilling and aeration but can cloud clear spirits. Stirring gently chills while maintaining clarity and texture.",
          es: "Agitar proporciona enfriamiento y aireación más agresivos pero puede enturbiar licores claros. Revolver enfría suavemente manteniendo claridad y textura.",
          de: "Schütteln bietet aggressivere Kühlung und Belüftung, kann aber klare Spirituosen trüben. Rühren kühlt sanft und erhält Klarheit und Textur.",
          nl: "Schudden biedt agressievere koeling en beluchting maar kan heldere spirits troebel maken. Roeren koelt voorzichtig terwijl helderheid en textuur behouden blijven."
        }
      },
      {
        question: {
          en: "What is the purpose of a 'dry shake' technique?",
          es: "¿Cuál es el propósito de la técnica de 'agitado seco'?",
          de: "Was ist der Zweck der 'Trocken-Schüttel'-Technik?",
          nl: "Wat is het doel van de 'droge schud' techniek?"
        },
        options: [
          { en: "To remove excess water", es: "Para eliminar el exceso de agua", de: "Um überschüssiges Wasser zu entfernen", nl: "Om overtollig water te verwijderen" },
          { en: "To emulsify egg whites or cream", es: "Para emulsificar claras de huevo o crema", de: "Um Eiweiß oder Sahne zu emulgieren", nl: "Om eiwitten of room te emulgeren" },
          { en: "To warm the ingredients", es: "Para calentar los ingredientes", de: "Um die Zutaten zu erwärmen", nl: "Om de ingrediënten op te warmen" },
          { en: "To carbonate the drink", es: "Para carbonatar la bebida", de: "Um das Getränk zu karbonisieren", nl: "Om de drank te karboniseren" }
        ],
        correct: 1,
        explanation: {
          en: "A dry shake (without ice) helps emulsify egg whites or cream, creating a better foam before adding ice for the wet shake.",
          es: "Un agitado seco (sin hielo) ayuda a emulsificar claras de huevo o crema, creando mejor espuma antes de agregar hielo para el agitado húmedo.",
          de: "Ein trockenes Schütteln (ohne Eis) hilft, Eiweiß oder Sahne zu emulgieren und besseren Schaum zu erzeugen, bevor Eis für das nasse Schütteln hinzugefügt wird.",
          nl: "Een droge schud (zonder ijs) helpt eiwitten of room te emulgeren, wat betere schuim creëert voordat ijs wordt toegevoegd voor de natte schud."
        }
      },
      {
        question: {
          en: "What does 'building' a cocktail mean?",
          es: "¿Qué significa 'construir' un cóctel?",
          de: "Was bedeutet es, einen Cocktail zu 'bauen'?",
          nl: "Wat betekent het 'bouwen' van een cocktail?"
        },
        options: [
          { en: "Layering ingredients by density", es: "Crear capas de ingredientes por densidad", de: "Zutaten nach Dichte schichten", nl: "Ingrediënten lagen naar dichtheid" },
          { en: "Adding ingredients directly to the serving glass", es: "Agregar ingredientes directamente al vaso de servir", de: "Zutaten direkt ins Serviergas geben", nl: "Ingrediënten direct in het serveersglas toevoegen" },
          { en: "Using only premium ingredients", es: "Usar solo ingredientes premium", de: "Nur Premium-Zutaten verwenden", nl: "Alleen premium ingrediënten gebruiken" },
          { en: "Making cocktails in large batches", es: "Hacer cócteles en lotes grandes", de: "Cocktails in großen Mengen herstellen", nl: "Cocktails in grote hoeveelheden maken" }
        ],
        correct: 1,
        explanation: {
          en: "Building a cocktail means adding ingredients directly to the serving glass without shaking or stirring in a separate vessel.",
          es: "Construir un cóctel significa agregar ingredientes directamente al vaso de servir sin agitar o revolver en un recipiente separado.",
          de: "Einen Cocktail zu bauen bedeutet, Zutaten direkt ins Servierglas zu geben, ohne in einem separaten Gefäß zu schütteln oder zu rühren.",
          nl: "Een cocktail bouwen betekent ingrediënten direct in het serveersglas toevoegen zonder te schudden of roeren in een apart vat."
        }
      },
      {
        question: {
          en: "What is the correct technique for 'floating' a spirit on top of a cocktail?",
          es: "¿Cuál es la técnica correcta para 'flotar' un licor encima de un cóctel?",
          de: "Was ist die richtige Technik, um eine Spirituose auf einem Cocktail 'schwimmen' zu lassen?",
          nl: "Wat is de juiste techniek voor het 'laten drijven' van een spirituose bovenop een cocktail?"
        },
        options: [
          { en: "Pour very slowly over a bar spoon", es: "Verter muy lentamente sobre una cuchara de bar", de: "Sehr langsam über einen Barlöffel gießen", nl: "Heel langzaam over een barlepel gieten" },
          { en: "Use a spray bottle", es: "Usar una botella de spray", de: "Eine Sprühflasche verwenden", nl: "Een spuitfles gebruiken" },
          { en: "Freeze the spirit first", es: "Congelar el licor primero", de: "Die Spirituose zuerst einfrieren", nl: "De spirituose eerst invriezen" },
          { en: "Mix with egg whites", es: "Mezclar con claras de huevo", de: "Mit Eiweiß mischen", nl: "Mengen met eiwitten" }
        ],
        correct: 0,
        explanation: {
          en: "To float a spirit, pour it very slowly over the back of a bar spoon held close to the surface, allowing density differences to create distinct layers.",
          es: "Para flotar un licor, viértelo muy lentamente sobre el dorso de una cuchara de bar sostenida cerca de la superficie, permitiendo que las diferencias de densidad creen capas distintas.",
          de: "Um eine Spirituose schwimmen zu lassen, gießt man sie sehr langsam über die Rückseite eines nahe der Oberfläche gehaltenen Barlöffels, sodass Dichteunterschiede deutliche Schichten entstehen lassen.",
          nl: "Om een spirituose te laten drijven, giet je deze heel langzaam over de rug van een barlepel die dicht bij het oppervlak wordt gehouden, waardoor dichtheidsverschillen verschillende lagen creëren."
        }
      },
      {
        question: {
          en: "What is 'flaming' a citrus peel and why is it done?",
          es: "¿Qué es 'flamear' una cáscara de cítrico y por qué se hace?",
          de: "Was ist das 'Flambieren' einer Zitrusschale und warum wird es gemacht?",
          nl: "Wat is het 'flamberen' van een citrusschil en waarom wordt dit gedaan?"
        },
        options: [
          { en: "Burning the peel for smoky flavor", es: "Quemar la cáscara para sabor ahumado", de: "Die Schale für rauchigen Geschmack verbrennen", nl: "De schil verbranden voor rokerige smaak" },
          { en: "Expressing oils while igniting them over the drink", es: "Expresar aceites mientras se encienden sobre la bebida", de: "Öle auspressen und über dem Getränk entzünden", nl: "Oliën uitpersen terwijl ze boven de drank worden ontstoken" },
          { en: "Sterilizing the garnish", es: "Esterilizar la guarnición", de: "Die Garnitur sterilisieren", nl: "De garnering steriliseren" },
          { en: "Creating a visual effect only", es: "Crear solo un efecto visual", de: "Nur einen visuellen Effekt erzeugen", nl: "Alleen een visueel effect creëren" }
        ],
        correct: 1,
        explanation: {
          en: "Flaming a citrus peel involves expressing the oils while lighting them, creating an aromatic mist that enhances both the aroma and flavor of the cocktail.",
          es: "Flamear una cáscara de cítrico implica expresar los aceites mientras se encienden, creando una bruma aromática que mejora tanto el aroma como el sabor del cóctel.",
          de: "Das Flambieren einer Zitrusschale beinhaltet das Auspressen der Öle während sie angezündet werden, was einen aromatischen Nebel erzeugt, der sowohl Aroma als auch Geschmack des Cocktails verstärkt.",
          nl: "Het flamberen van een citrusschil houdt in dat de oliën worden uitgeperst terwijl ze worden aangestoken, wat een aromatische nevel creëert die zowel de geur als de smaak van de cocktail versterkt."
        }
      },
      {
        question: {
          en: "What is the proper technique for 'rolling' a cocktail?",
          es: "¿Cuál es la técnica adecuada para 'rodar' un cóctel?",
          de: "Was ist die richtige Technik für das 'Rollen' eines Cocktails?",
          nl: "Wat is de juiste techniek voor het 'rollen' van een cocktail?"
        },
        options: [
          { en: "Spinning the glass on the bar", es: "Girar el vaso en la barra", de: "Das Glas auf der Bar drehen", nl: "Het glas op de bar draaien" },
          { en: "Pouring between two vessels to mix gently", es: "Verter entre dos recipientes para mezclar suavemente", de: "Zwischen zwei Gefäßen gießen zum sanften Mischen", nl: "Gieten tussen twee vaten om zachtjes te mengen" },
          { en: "Using a cocktail shaker sideways", es: "Usar una coctelera de lado", de: "Einen Cocktailshaker seitlich verwenden", nl: "Een cocktailshaker zijwaarts gebruiken" },
          { en: "Adding ingredients in circular motions", es: "Agregar ingredientes en movimientos circulares", de: "Zutaten in kreisförmigen Bewegungen hinzufügen", nl: "Ingrediënten in cirkelvormige bewegingen toevoegen" }
        ],
        correct: 1,
        explanation: {
          en: "Rolling involves pouring the cocktail back and forth between two vessels (usually shaker tins) to mix ingredients more gently than shaking but more thoroughly than stirring.",
          es: "Rodar implica verter el cóctel de un lado a otro entre dos recipientes (generalmente latas de coctelera) para mezclar ingredientes más suavemente que agitar pero más a fondo que revolver.",
          de: "Rollen beinhaltet das Gießen des Cocktails zwischen zwei Gefäßen (meist Shaker-Dosen) hin und her, um Zutaten sanfter als beim Schütteln aber gründlicher als beim Rühren zu mischen.",
          nl: "Rollen houdt in dat de cocktail heen en weer wordt gegoten tussen twee vaten (meestal shaker-blikken) om ingrediënten zachter te mengen dan schudden maar grondiger dan roeren."
        }
      },
      {
        question: {
          en: "What temperature should ice be for optimal cocktail preparation?",
          es: "¿A qué temperatura debe estar el hielo para una preparación óptima de cócteles?",
          de: "Welche Temperatur sollte Eis für optimale Cocktailzubereitung haben?",
          nl: "Welke temperatuur moet ijs hebben voor optimale cocktailbereiding?"
        },
        options: [
          { en: "Just below freezing (0°C/32°F)", es: "Justo bajo cero (0°C/32°F)", de: "Knapp unter dem Gefrierpunkt (0°C/32°F)", nl: "Net onder het vriespunt (0°C/32°F)" },
          { en: "Very cold (-18°C/0°F)", es: "Muy frío (-18°C/0°F)", de: "Sehr kalt (-18°C/0°F)", nl: "Zeer koud (-18°C/0°F)" },
          { en: "Room temperature", es: "Temperatura ambiente", de: "Raumtemperatur", nl: "Kamertemperatuur" },
          { en: "Slightly warm for faster melting", es: "Ligeramente tibio para derretirse más rápido", de: "Leicht warm für schnelleres Schmelzen", nl: "Licht warm voor sneller smelten" }
        ],
        correct: 1,
        explanation: {
          en: "Ice should be very cold (-18°C/0°F) and hard to minimize dilution while maximizing chilling efficiency. Warmer ice melts too quickly and over-dilutes the cocktail.",
          es: "El hielo debe estar muy frío (-18°C/0°F) y duro para minimizar la dilución mientras maximiza la eficiencia de enfriamiento. El hielo más tibio se derrite muy rápido y diluye excesivamente el cóctel.",
          de: "Eis sollte sehr kalt (-18°C/0°F) und hart sein, um Verdünnung zu minimieren und Kühleffizienz zu maximieren. Wärmeres Eis schmilzt zu schnell und verdünnt den Cocktail übermäßig.",
          nl: "Ijs moet zeer koud (-18°C/0°F) en hard zijn om verdunning te minimaliseren terwijl koelefficiëntie wordt gemaximaliseerd. Warmer ijs smelt te snel en verdunt de cocktail te veel."
        }
      },
      {
        question: {
          en: "What is the purpose of 'expressing' a citrus peel?",
          es: "¿Cuál es el propósito de 'expresar' una cáscara de cítrico?",
          de: "Was ist der Zweck des 'Ausdrückens' einer Zitrusschale?",
          nl: "Wat is het doel van het 'uitpersen' van een citrusschil?"
        },
        options: [
          { en: "To add juice to the cocktail", es: "Para agregar jugo al cóctel", de: "Um Saft zum Cocktail hinzuzufügen", nl: "Om sap aan de cocktail toe te voegen" },
          { en: "To release aromatic oils onto the drink's surface", es: "Para liberar aceites aromáticos en la superficie de la bebida", de: "Um aromatische Öle auf die Getränkeoberfläche freizusetzen", nl: "Om aromatische oliën op het drankoppervlak vrij te maken" },
          { en: "To make the garnish look better", es: "Para que la guarnición se vea mejor", de: "Um die Garnitur besser aussehen zu lassen", nl: "Om de garnering er beter uit te laten zien" },
          { en: "To test the freshness of the peel", es: "Para probar la frescura de la cáscara", de: "Um die Frische der Schale zu testen", nl: "Om de versheid van de schil te testen" }
        ],
        correct: 1,
        explanation: {
          en: "Expressing a citrus peel by twisting or pinching it releases the essential oils from the peel onto the cocktail's surface, adding aroma and subtle flavor.",
          es: "Expresar una cáscara de cítrico torciéndola o pellizcándola libera los aceites esenciales de la cáscara en la superficie del cóctel, agregando aroma y sabor sutil.",
          de: "Das Ausdrücken einer Zitrusschale durch Drehen oder Kneifen setzt die ätherischen Öle der Schale auf die Cocktailoberfläche frei und fügt Aroma und subtilen Geschmack hinzu.",
          nl: "Het uitpersen van een citrusschil door draaien of knijpen maakt de essentiële oliën van de schil vrij op het cocktailoppervlak, wat geur en subtiele smaak toevoegt."
        }
      },
      {
        question: {
          en: "What is the purpose of using a Hawthorne strainer?",
          es: "¿Cuál es el propósito de usar un colador Hawthorne?",
          de: "Was ist der Zweck eines Hawthorne-Siebs?",
          nl: "Wat is het doel van het gebruik van een Hawthorne strainer?"
        },
        options: [
          { en: "To strain cocktails from shakers while holding back ice", es: "Para colar cócteles de cocteleras mientras retiene hielo", de: "Um Cocktails aus Shakern zu sieben und Eis zurückzuhalten", nl: "Om cocktails uit shakers te zeven terwijl ijs wordt tegengehouden" },
          { en: "To measure liquid ingredients", es: "Para medir ingredientes líquidos", de: "Um flüssige Zutaten zu messen", nl: "Om vloeibare ingrediënten te meten" },
          { en: "To create foam on cocktails", es: "Para crear espuma en cócteles", de: "Um Schaum auf Cocktails zu erzeugen", nl: "Om schuim op cocktails te maken" },
          { en: "To garnish drinks", es: "Para decorar bebidas", de: "Um Getränke zu garnieren", nl: "Om drankjes te garneren" }
        ],
        correct: 0,
        explanation: {
          en: "A Hawthorne strainer features a metal spring that fits over the rim of a shaker, allowing liquid to pass while holding back ice and large particles.",
          es: "Un colador Hawthorne tiene un resorte metálico que se ajusta sobre el borde de la coctelera, permitiendo que el líquido pase mientras retiene hielo y partículas grandes.",
          de: "Ein Hawthorne-Sieb verfügt über eine Metallfeder, die über den Rand eines Shakers passt und Flüssigkeit durchlässt, während Eis und große Partikel zurückgehalten werden.",
          nl: "Een Hawthorne strainer heeft een metalen veer die over de rand van een shaker past, waardoor vloeistof kan passeren terwijl ijs en grote deeltjes worden tegengehouden."
        }
      },
      {
        question: {
          en: "When should you use a julep strainer instead of a Hawthorne strainer?",
          es: "¿Cuándo debes usar un colador julep en lugar de un colador Hawthorne?",
          de: "Wann sollten Sie ein Julep-Sieb anstelle eines Hawthorne-Siebs verwenden?",
          nl: "Wanneer moet je een julep strainer gebruiken in plaats van een Hawthorne strainer?"
        },
        options: [
          { en: "When straining from a mixing glass", es: "Al colar de un vaso mezclador", de: "Beim Sieben aus einem Rührglas", nl: "Bij het zeven uit een mengbeker" },
          { en: "When shaking with ice", es: "Al agitar con hielo", de: "Beim Schütteln mit Eis", nl: "Bij het schudden met ijs" },
          { en: "When adding soda water", es: "Al añadir agua con gas", de: "Beim Hinzufügen von Sodawasser", nl: "Bij het toevoegen van sodawater" },
          { en: "When measuring spirits", es: "Al medir licores", de: "Beim Messen von Spirituosen", nl: "Bij het meten van spirits" }
        ],
        correct: 0,
        explanation: {
          en: "A julep strainer is specifically designed for straining stirred cocktails from mixing glasses, with its perforated bowl shape fitting perfectly into the glass.",
          es: "Un colador julep está diseñado específicamente para colar cócteles revueltos de vasos mezcladores, con su forma de tazón perforado encajando perfectamente en el vaso.",
          de: "Ein Julep-Sieb ist speziell zum Sieben gerührter Cocktails aus Rührgläsern konzipiert, wobei seine perforierte Schüsselform perfekt in das Glas passt.",
          nl: "Een julep strainer is specifiek ontworpen voor het zeven van geroerde cocktails uit mengbekers, waarbij de geperforeerde komvorm perfect in het glas past."
        }
      },
      {
        question: {
          en: "What is the primary purpose of 'chilling' a glass before serving?",
          es: "¿Cuál es el propósito principal de 'enfriar' un vaso antes de servir?",
          de: "Was ist der Hauptzweck des 'Kühlens' eines Glases vor dem Servieren?",
          nl: "Wat is het hoofddoel van het 'koelen' van een glas voor het serveren?"
        },
        options: [
          { en: "To keep the cocktail colder longer and reduce dilution", es: "Para mantener el cóctel más frío por más tiempo y reducir dilución", de: "Um den Cocktail länger kalt zu halten und Verdünnung zu reduzieren", nl: "Om de cocktail langer koud te houden en verdunning te verminderen" },
          { en: "To make the glass look frosty", es: "Para hacer que el vaso se vea escarchado", de: "Um das Glas frostig aussehen zu lassen", nl: "Om het glas ijzig te laten lijken" },
          { en: "To sterilize the glass", es: "Para esterilizar el vaso", de: "Um das Glas zu sterilisieren", nl: "Om het glas te steriliseren" },
          { en: "To test glass quality", es: "Para probar la calidad del vaso", de: "Um die Glasqualität zu testen", nl: "Om glaskwaliteit te testen" }
        ],
        correct: 0,
        explanation: {
          en: "Chilling glasses before serving keeps cocktails at the optimal temperature longer and prevents the drink from warming too quickly, reducing unwanted dilution.",
          es: "Enfriar los vasos antes de servir mantiene los cócteles a temperatura óptima por más tiempo y evita que la bebida se caliente demasiado rápido, reduciendo dilución no deseada.",
          de: "Das Kühlen von Gläsern vor dem Servieren hält Cocktails länger auf optimaler Temperatur und verhindert, dass das Getränk zu schnell warm wird, wodurch unerwünschte Verdünnung reduziert wird.",
          nl: "Het koelen van glazen voor het serveren houdt cocktails langer op optimale temperatuur en voorkomt dat de drank te snel opwarmt, waardoor ongewenste verdunning wordt verminderd."
        }
      },
      {
        question: {
          en: "What does 'hard shake' technique involve?",
          es: "¿Qué implica la técnica de 'agitado fuerte'?",
          de: "Was beinhaltet die 'harte Schüttel'-Technik?",
          nl: "Wat houdt de 'harde schud' techniek in?"
        },
        options: [
          { en: "Vigorous shaking in three distinct motions for optimal aeration", es: "Agitado vigoroso en tres movimientos distintos para aireación óptima", de: "Kräftiges Schütteln in drei verschiedenen Bewegungen für optimale Belüftung", nl: "Krachtig schudden in drie verschillende bewegingen voor optimale beluchting" },
          { en: "Shaking for a longer time", es: "Agitar por más tiempo", de: "Länger schütteln", nl: "Langer schudden" },
          { en: "Using more ice", es: "Usar más hielo", de: "Mehr Eis verwenden", nl: "Meer ijs gebruiken" },
          { en: "Shaking with frozen ingredients", es: "Agitar con ingredientes congelados", de: "Mit gefrorenen Zutaten schütteln", nl: "Schudden met bevroren ingrediënten" }
        ],
        correct: 0,
        explanation: {
          en: "The hard shake involves vigorous shaking in three distinct motions (vertical, horizontal, and diagonal) to achieve maximum aeration, dilution, and chilling in the shortest time.",
          es: "El agitado fuerte implica agitado vigoroso en tres movimientos distintos (vertical, horizontal y diagonal) para lograr máxima aireación, dilución y enfriamiento en el menor tiempo.",
          de: "Das harte Schütteln beinhaltet kräftiges Schütteln in drei verschiedenen Bewegungen (vertikal, horizontal und diagonal) für maximale Belüftung, Verdünnung und Kühlung in kürzester Zeit.",
          nl: "De harde schud houdt krachtig schudden in drie verschillende bewegingen (verticaal, horizontaal en diagonaal) in om maximale beluchting, verdunning en koeling in de kortste tijd te bereiken."
        }
      },
      {
        question: {
          en: "What is the purpose of using a jigger in cocktail preparation?",
          es: "¿Cuál es el propósito de usar un jigger en la preparación de cócteles?",
          de: "Was ist der Zweck der Verwendung eines Jiggers bei der Cocktailzubereitung?",
          nl: "Wat is het doel van het gebruik van een jigger bij cocktailbereiding?"
        },
        options: [
          { en: "To ensure precise measurement of ingredients", es: "Para asegurar medición precisa de ingredientes", de: "Um genaue Messung von Zutaten sicherzustellen", nl: "Om precieze meting van ingrediënten te waarborgen" },
          { en: "To shake cocktails", es: "Para agitar cócteles", de: "Um Cocktails zu schütteln", nl: "Om cocktails te schudden" },
          { en: "To strain drinks", es: "Para colar bebidas", de: "Um Getränke zu sieben", nl: "Om drankjes te zeven" },
          { en: "To crush ice", es: "Para triturar hielo", de: "Um Eis zu zerkleinern", nl: "Om ijs te breken" }
        ],
        correct: 0,
        explanation: {
          en: "A jigger is a measuring tool that ensures precise and consistent proportions of ingredients, which is essential for creating balanced, reproducible cocktails.",
          es: "Un jigger es una herramienta de medición que asegura proporciones precisas y consistentes de ingredientes, esencial para crear cócteles balanceados y reproducibles.",
          de: "Ein Jigger ist ein Messwerkzeug, das genaue und konsistente Proportionen von Zutaten gewährleistet, was für ausgewogene, reproduzierbare Cocktails unerlässlich ist.",
          nl: "Een jigger is een meetinstrument dat precieze en consistente verhoudingen van ingrediënten waarborgt, essentieel voor het maken van gebalanceerde, reproduceerbare cocktails."
        }
      },
      {
        question: {
          en: "What is the difference between 'topping' and 'building' a cocktail?",
          es: "¿Cuál es la diferencia entre 'cubrir' y 'construir' un cóctel?",
          de: "Was ist der Unterschied zwischen 'Toppen' und 'Bauen' eines Cocktails?",
          nl: "Wat is het verschil tussen 'toppen' en 'bouwen' van een cocktail?"
        },
        options: [
          { en: "Topping adds the final ingredient on top, building is mixing all in the glass", es: "Cubrir añade el ingrediente final encima, construir es mezclar todo en el vaso", de: "Toppen fügt die letzte Zutat oben hinzu, Bauen mischt alles im Glas", nl: "Toppen voegt het laatste ingrediënt bovenop toe, bouwen is alles in het glas mengen" },
          { en: "They mean the same thing", es: "Significan lo mismo", de: "Sie bedeuten dasselbe", nl: "Ze betekenen hetzelfde" },
          { en: "Topping is for hot drinks only", es: "Cubrir es solo para bebidas calientes", de: "Toppen ist nur für heiße Getränke", nl: "Toppen is alleen voor warme drankjes" },
          { en: "Building requires shaking first", es: "Construir requiere agitar primero", de: "Bauen erfordert zuerst Schütteln", nl: "Bouwen vereist eerst schudden" }
        ],
        correct: 0,
        explanation: {
          en: "Topping refers to adding the final ingredient (often carbonated or delicate) on top of the cocktail after other ingredients are mixed, while building means adding all ingredients directly to the serving glass.",
          es: "Cubrir se refiere a añadir el ingrediente final (a menudo carbonatado o delicado) encima del cóctel después de mezclar otros ingredientes, mientras construir significa añadir todos los ingredientes directamente al vaso de servir.",
          de: "Toppen bezieht sich auf das Hinzufügen der letzten Zutat (oft kohlensäurehaltig oder empfindlich) auf den Cocktail, nachdem andere Zutaten gemischt wurden, während Bauen bedeutet, alle Zutaten direkt ins Servierglas zu geben.",
          nl: "Toppen verwijst naar het toevoegen van het laatste ingrediënt (vaak koolzuurhoudend of delicaat) bovenop de cocktail nadat andere ingrediënten zijn gemengd, terwijl bouwen betekent dat alle ingrediënten direct in het serveersglas worden toegevoegd."
        }
      },
      {
        question: {
          en: "Why is it important to use fresh ice for each cocktail?",
          es: "¿Por qué es importante usar hielo fresco para cada cóctel?",
          de: "Warum ist es wichtig, für jeden Cocktail frisches Eis zu verwenden?",
          nl: "Waarom is het belangrijk om vers ijs te gebruiken voor elke cocktail?"
        },
        options: [
          { en: "Fresh ice prevents over-dilution and flavor contamination", es: "Hielo fresco previene dilución excesiva y contaminación de sabor", de: "Frisches Eis verhindert Überverdünnung und Geschmackskontamination", nl: "Vers ijs voorkomt overdilutie en smaakbesmetting" },
          { en: "Old ice tastes better", es: "El hielo viejo sabe mejor", de: "Altes Eis schmeckt besser", nl: "Oud ijs smaakt beter" },
          { en: "Fresh ice is easier to handle", es: "El hielo fresco es más fácil de manejar", de: "Frisches Eis ist einfacher zu handhaben", nl: "Vers ijs is makkelijker te hanteren" },
          { en: "It's not important", es: "No es importante", de: "Es ist nicht wichtig", nl: "Het is niet belangrijk" }
        ],
        correct: 0,
        explanation: {
          en: "Fresh ice is colder and harder, providing optimal chilling without excessive dilution. Used ice is warmer, already partially melted, and may carry flavors from previous drinks.",
          es: "El hielo fresco es más frío y duro, proporcionando enfriamiento óptimo sin dilución excesiva. El hielo usado está más tibio, parcialmente derretido y puede llevar sabores de bebidas anteriores.",
          de: "Frisches Eis ist kälter und härter und bietet optimale Kühlung ohne übermäßige Verdünnung. Gebrauchtes Eis ist wärmer, bereits teilweise geschmolzen und kann Geschmäcker vorheriger Getränke tragen.",
          nl: "Vers ijs is kouder en harder, wat optimale koeling biedt zonder overdilutie. Gebruikt ijs is warmer, al gedeeltelijk gesmolten en kan smaken van eerdere drankjes bevatten."
        }
      },
      {
        question: {
          en: "What is the purpose of a bar spoon's twisted handle?",
          es: "¿Cuál es el propósito del mango retorcido de una cuchara de bar?",
          de: "Was ist der Zweck des verdrehten Griffs eines Barlöffels?",
          nl: "Wat is het doel van de gedraaide handgreep van een barlepel?"
        },
        options: [
          { en: "To aid in smooth stirring and layering techniques", es: "Para ayudar en técnicas suaves de revolver y crear capas", de: "Um sanftes Rühren und Schichttechniken zu unterstützen", nl: "Om soepele roer- en laag technieken te helpen" },
          { en: "Just for decoration", es: "Solo para decoración", de: "Nur zur Dekoration", nl: "Alleen voor decoratie" },
          { en: "To make it easier to hold", es: "Para hacerla más fácil de sostener", de: "Um sie einfacher zu halten", nl: "Om het makkelijker vast te houden" },
          { en: "To hang on the bar", es: "Para colgar en la barra", de: "Um an der Bar aufzuhängen", nl: "Om aan de bar te hangen" }
        ],
        correct: 0,
        explanation: {
          en: "The twisted handle allows the spoon to rotate smoothly between fingers during stirring and serves as a guide for liquid when layering cocktails, creating clean layers with minimal disturbance.",
          es: "El mango retorcido permite que la cuchara rote suavemente entre los dedos al revolver y sirve como guía para líquido al crear capas en cócteles, creando capas limpias con mínima perturbación.",
          de: "Der verdrehte Griff ermöglicht ein sanftes Rotieren des Löffels zwischen den Fingern beim Rühren und dient beim Schichten von Cocktails als Führung für Flüssigkeit, wodurch saubere Schichten mit minimaler Störung entstehen.",
          nl: "De gedraaide handgreep maakt het mogelijk dat de lepel soepel tussen de vingers roteert tijdens het roeren en dient als gids voor vloeistof bij het lagen van cocktails, waardoor schone lagen met minimale verstoring ontstaan."
        }
      },
      {
        question: {
          en: "What is 'rimming' a glass in cocktail preparation?",
          es: "¿Qué es 'decorar el borde' de un vaso en la preparación de cócteles?",
          de: "Was ist 'Rand-Dekoration' eines Glases bei der Cocktailzubereitung?",
          nl: "Wat is 'rand versieren' van een glas bij cocktailbereiding?"
        },
        options: [
          { en: "Coating the glass rim with salt, sugar, or spices", es: "Recubrir el borde del vaso con sal, azúcar o especias", de: "Den Glasrand mit Salz, Zucker oder Gewürzen beschichten", nl: "De glasrand bekleden met zout, suiker of specerijen" },
          { en: "Polishing the rim for clarity", es: "Pulir el borde para claridad", de: "Den Rand für Klarheit polieren", nl: "De rand polijsten voor helderheid" },
          { en: "Cutting the rim to size", es: "Cortar el borde a medida", de: "Den Rand zuschneiden", nl: "De rand op maat snijden" },
          { en: "Cleaning the glass rim", es: "Limpiar el borde del vaso", de: "Den Glasrand reinigen", nl: "De glasrand schoonmaken" }
        ],
        correct: 0,
        explanation: {
          en: "Rimming involves coating the edge of a glass with ingredients like salt, sugar, or spices by first moistening the rim (usually with citrus juice) and then dipping it into the rimming ingredient.",
          es: "Decorar el borde implica recubrir el borde de un vaso con ingredientes como sal, azúcar o especias, primero humedeciendo el borde (usualmente con jugo cítrico) y luego sumergiéndolo en el ingrediente decorativo.",
          de: "Rand-Dekoration beinhaltet das Beschichten des Glasrands mit Zutaten wie Salz, Zucker oder Gewürzen, indem man zuerst den Rand befeuchtet (meist mit Zitrus saft) und ihn dann in die Rand-Zutat taucht.",
          nl: "Rand versieren houdt in dat de rand van een glas wordt bekleed met ingrediënten zoals zout, suiker of specerijen door eerst de rand te bevochtigen (meestal met citrusap) en deze vervolgens in het versier-ingrediënt te dopen."
        }
      },
      {
        question: {
          en: "What is the 'throwing' technique in cocktail preparation?",
          es: "¿Qué es la técnica de 'lanzar' en la preparación de cócteles?",
          de: "Was ist die 'Wurf'-Technik bei der Cocktailzubereitung?",
          nl: "Wat is de 'gooien' techniek bij cocktailbereiding?"
        },
        options: [
          { en: "Pouring between two vessels from a height for aeration", es: "Verter entre dos recipientes desde altura para aireación", de: "Gießen zwischen zwei Gefäßen aus der Höhe zur Belüftung", nl: "Gieten tussen twee vaten vanaf hoogte voor beluchting" },
          { en: "Discarding old ingredients", es: "Descartar ingredientes viejos", de: "Alte Zutaten wegwerfen", nl: "Oude ingrediënten weggooien" },
          { en: "Adding ice into the glass", es: "Añadir hielo al vaso", de: "Eis ins Glas geben", nl: "Ijs in het glas doen" },
          { en: "Tossing garnishes on top", es: "Lanzar guarniciones encima", de: "Garnituren oben drauf werfen", nl: "Garneringen er bovenop gooien" }
        ],
        correct: 0,
        explanation: {
          en: "Throwing involves pouring the cocktail between two vessels from a significant height, aerating the drink and creating a theatrical presentation while achieving gentle mixing similar to rolling.",
          es: "Lanzar implica verter el cóctel entre dos recipientes desde altura considerable, aireando la bebida y creando presentación teatral mientras logra mezcla suave similar a rodar.",
          de: "Werfen beinhaltet das Gießen des Cocktails zwischen zwei Gefäßen aus beträchtlicher Höhe, belüftet das Getränk und schafft eine theatralische Präsentation, während sanftes Mischen ähnlich dem Rollen erreicht wird.",
          nl: "Gooien houdt in dat de cocktail tussen twee vaten wordt gegoten vanaf aanzienlijke hoogte, waardoor de drank wordt belucht en een theatrale presentatie wordt gecreëerd terwijl zachte menging vergelijkbaar met rollen wordt bereikt."
        }
      },
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();
