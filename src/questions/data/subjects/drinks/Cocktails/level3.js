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
      {
        question: {
          en: "What is the purpose of using 'large format ice' in cocktails?",
          es: "¿Cuál es el propósito de usar 'hielo de gran formato' en cócteles?",
          de: "Was ist der Zweck der Verwendung von 'großformatigem Eis' in Cocktails?",
          nl: "Wat is het doel van het gebruik van 'grootformaat ijs' in cocktails?"
        },
        options: [
          { en: "To slow dilution while maintaining proper chilling", es: "Para reducir dilución mientras mantiene enfriamiento adecuado", de: "Um Verdünnung zu verlangsamen und gleichzeitig ordnungsgemäße Kühlung zu erhalten", nl: "Om verdunning te vertragen terwijl goede koeling wordt gehandhaafd" },
          { en: "To make drinks look better only", es: "Solo para que las bebidas se vean mejor", de: "Nur damit Getränke besser aussehen", nl: "Alleen om drankjes er beter uit te laten zien" },
          { en: "To add more water to drinks", es: "Para añadir más agua a las bebidas", de: "Um mehr Wasser zu Getränken hinzuzufügen", nl: "Om meer water aan drankjes toe te voegen" },
          { en: "To keep glasses colder", es: "Para mantener los vasos más fríos", de: "Um Gläser kälter zu halten", nl: "Om glazen kouder te houden" }
        ],
        correct: 0,
        explanation: {
          en: "Large format ice (like ice spheres or large cubes) has less surface area relative to volume, resulting in slower melting and dilution while still providing adequate chilling for the cocktail.",
          es: "El hielo de gran formato (como esferas de hielo o cubos grandes) tiene menos área de superficie en relación al volumen, resultando en derretimiento y dilución más lentos mientras aún proporciona enfriamiento adecuado para el cóctel.",
          de: "Großformatiges Eis (wie Eiskugeln oder große Würfel) hat weniger Oberfläche im Verhältnis zum Volumen, was zu langsamerem Schmelzen und Verdünnung führt, während es immer noch ausreichende Kühlung für den Cocktail bietet.",
          nl: "Grootformaat ijs (zoals ijsbollen of grote kubussen) heeft minder oppervlakte ten opzichte van volume, wat resulteert in langzamer smelten en verdunning terwijl het nog steeds voldoende koeling biedt voor de cocktail."
        }
      },
      {
        question: {
          en: "What is 'fat washing' in cocktail preparation?",
          es: "¿Qué es el 'lavado de grasa' en la preparación de cócteles?",
          de: "Was ist 'Fettwaschen' bei der Cocktailzubereitung?",
          nl: "Wat is 'vet wassen' bij cocktailbereiding?"
        },
        options: [
          { en: "Infusing spirits with fat-soluble flavors, then freezing to remove the fat", es: "Infundir licores con sabores solubles en grasa, luego congelar para eliminar la grasa", de: "Spirituosen mit fettlöslichen Aromen infundieren, dann einfrieren um das Fett zu entfernen", nl: "Sterke dranken infuseren met vetoplosbare smaken, daarna bevriezen om het vet te verwijderen" },
          { en: "Washing dirty glassware", es: "Lavar cristalería sucia", de: "Schmutziges Glasgeschirr waschen", nl: "Vuil glaswerk wassen" },
          { en: "Removing oil from citrus peels", es: "Eliminar aceite de cáscaras de cítricos", de: "Öl von Zitrusschalen entfernen", nl: "Olie van citrusschillen verwijderen" },
          { en: "Skimming foam from cocktails", es: "Quitar espuma de cócteles", de: "Schaum von Cocktails abschöpfen", nl: "Schuim van cocktails afscheppen" }
        ],
        correct: 0,
        explanation: {
          en: "Fat washing infuses spirits with fat-soluble flavors from ingredients like bacon, butter, or nuts. The fat is mixed with alcohol, then frozen solid and removed, leaving rich flavor compounds behind.",
          es: "El lavado de grasa infunde licores con sabores solubles en grasa de ingredientes como tocino, mantequilla o nueces. La grasa se mezcla con alcohol, luego se congela sólido y se elimina, dejando compuestos de sabor ricos.",
          de: "Fettwaschen infundiert Spirituosen mit fettlöslichen Aromen aus Zutaten wie Speck, Butter oder Nüssen. Das Fett wird mit Alkohol gemischt, dann fest gefroren und entfernt, wobei reichhaltige Geschmacksverbindungen zurückbleiben.",
          nl: "Vet wassen infuseert sterke dranken met vetoplosbare smaken van ingrediënten zoals spek, boter of noten. Het vet wordt gemengd met alcohol, daarna stevig bevroren en verwijderd, waarbij rijke smaakverbindingen achterblijven."
        }
      },
      {
        question: {
          en: "What does 'cracked ice' mean and when is it used?",
          es: "¿Qué significa 'hielo agrietado' y cuándo se usa?",
          de: "Was bedeutet 'gebrochenes Eis' und wann wird es verwendet?",
          nl: "Wat betekent 'gebroken ijs' en wanneer wordt het gebruikt?"
        },
        options: [
          { en: "Ice broken into irregular pieces, used for swizzles and juleps", es: "Hielo roto en piezas irregulares, usado para swizzles y juleps", de: "Eis in unregelmäßige Stücke gebrochen, für Swizzles und Juleps verwendet", nl: "Ijs gebroken in onregelmatige stukken, gebruikt voor swizzles en juleps" },
          { en: "Damaged ice that should be discarded", es: "Hielo dañado que debe descartarse", de: "Beschädigtes Eis, das entsorgt werden sollte", nl: "Beschadigd ijs dat weggegooid moet worden" },
          { en: "Ice with cracks in it", es: "Hielo con grietas", de: "Eis mit Rissen", nl: "Ijs met scheuren erin" },
          { en: "Frozen carbonated water", es: "Agua carbonatada congelada", de: "Gefrorenes kohlensäurehaltiges Wasser", nl: "Bevroren koolzuurhoudend water" }
        ],
        correct: 0,
        explanation: {
          en: "Cracked ice is larger than crushed ice but smaller than cubes, created by breaking ice into irregular pieces. It's ideal for drinks like Mint Juleps and swizzles where you need more dilution than cubes provide.",
          es: "El hielo agrietado es más grande que el hielo picado pero más pequeño que los cubos, creado rompiendo hielo en piezas irregulares. Es ideal para bebidas como Mint Juleps y swizzles donde necesitas más dilución que la que proporcionan los cubos.",
          de: "Gebrochenes Eis ist größer als Crushed Ice aber kleiner als Würfel, erstellt durch Brechen von Eis in unregelmäßige Stücke. Es ist ideal für Getränke wie Mint Juleps und Swizzles, wo mehr Verdünnung als bei Würfeln benötigt wird.",
          nl: "Gebroken ijs is groter dan crushed ijs maar kleiner dan kubussen, gemaakt door ijs in onregelmatige stukken te breken. Het is ideaal voor drankjes zoals Mint Juleps en swizzles waar je meer verdunning nodig hebt dan kubussen bieden."
        }
      },
      {
        question: {
          en: "What is the difference between a 'straight pour' and a 'free pour'?",
          es: "¿Cuál es la diferencia entre un 'vertido directo' y un 'vertido libre'?",
          de: "Was ist der Unterschied zwischen einem 'direkten Gießen' und einem 'freien Gießen'?",
          nl: "Wat is het verschil tussen een 'rechte giet' en een 'vrije giet'?"
        },
        options: [
          { en: "Straight pour uses a pourer spout, free pour is counting without measuring", es: "Vertido directo usa un pico vertedor, vertido libre es contar sin medir", de: "Direktes Gießen verwendet einen Ausgießer, freies Gießen ist Zählen ohne Messen", nl: "Rechte giet gebruikt een schenktuit, vrije giet is tellen zonder meten" },
          { en: "Both are the same technique", es: "Ambos son la misma técnica", de: "Beide sind dieselbe Technik", nl: "Beide zijn dezelfde techniek" },
          { en: "Straight pour is always measured, free pour is random", es: "Vertido directo siempre se mide, vertido libre es aleatorio", de: "Direktes Gießen wird immer gemessen, freies Gießen ist zufällig", nl: "Rechte giet is altijd gemeten, vrije giet is willekeurig" },
          { en: "Straight pour is for carbonated drinks only", es: "Vertido directo es solo para bebidas carbonatadas", de: "Direktes Gießen ist nur für kohlensäurehaltige Getränke", nl: "Rechte giet is alleen voor koolzuurhoudende drankjes" }
        ],
        correct: 0,
        explanation: {
          en: "A straight pour uses a pourer spout for controlled flow, while free pouring relies on counting seconds to measure portions without a jigger. Free pouring requires practice and consistency.",
          es: "Un vertido directo usa un pico vertedor para flujo controlado, mientras el vertido libre depende de contar segundos para medir porciones sin jigger. El vertido libre requiere práctica y consistencia.",
          de: "Ein direktes Gießen verwendet einen Ausgießer für kontrollierten Fluss, während freies Gießen auf das Zählen von Sekunden angewiesen ist, um Portionen ohne Jigger zu messen. Freies Gießen erfordert Übung und Konsistenz.",
          nl: "Een rechte giet gebruikt een schenktuit voor gecontroleerde stroom, terwijl vrij gieten vertrouwt op het tellen van seconden om porties te meten zonder jigger. Vrij gieten vereist oefening en consistentie."
        }
      },
      {
        question: {
          en: "What is a 'Boston shaker' and how does it differ from a cobbler shaker?",
          es: "¿Qué es una 'coctelera Boston' y en qué se diferencia de una coctelera cobbler?",
          de: "Was ist ein 'Boston-Shaker' und wie unterscheidet er sich von einem Cobbler-Shaker?",
          nl: "Wat is een 'Boston shaker' en hoe verschilt deze van een cobbler shaker?"
        },
        options: [
          { en: "Two-piece tin/glass combo without built-in strainer, versus three-piece with strainer", es: "Combinación de dos piezas lata/vidrio sin colador integrado, versus tres piezas con colador", de: "Zweiteiliges Dose/Glas-Kombi ohne eingebautes Sieb, versus dreiteilig mit Sieb", nl: "Twee-delig blik/glas combo zonder ingebouwde zeef, versus drie-delig met zeef" },
          { en: "Boston is larger than cobbler", es: "Boston es más grande que cobbler", de: "Boston ist größer als Cobbler", nl: "Boston is groter dan cobbler" },
          { en: "Boston is only for hot drinks", es: "Boston es solo para bebidas calientes", de: "Boston ist nur für heiße Getränke", nl: "Boston is alleen voor warme drankjes" },
          { en: "They are the same thing", es: "Son lo mismo", de: "Sie sind dasselbe", nl: "Ze zijn hetzelfde" }
        ],
        correct: 0,
        explanation: {
          en: "A Boston shaker has two pieces (typically a metal tin and mixing glass) and requires a separate strainer. A cobbler shaker is three-piece with built-in strainer and cap, easier for beginners but harder to clean.",
          es: "Una coctelera Boston tiene dos piezas (típicamente una lata metálica y vaso mezclador) y requiere un colador separado. Una coctelera cobbler es de tres piezas con colador integrado y tapa, más fácil para principiantes pero más difícil de limpiar.",
          de: "Ein Boston-Shaker hat zwei Teile (typischerweise eine Metalldose und ein Rührglas) und erfordert ein separates Sieb. Ein Cobbler-Shaker ist dreiteilig mit eingebautem Sieb und Kappe, einfacher für Anfänger aber schwerer zu reinigen.",
          nl: "Een Boston shaker heeft twee delen (typisch een metalen blik en mengbeker) en vereist een aparte zeef. Een cobbler shaker is drie-delig met ingebouwde zeef en dop, makkelijker voor beginners maar moeilijker schoon te maken."
        }
      },
      {
        question: {
          en: "What is the purpose of 'spanking' or 'slapping' herbs before garnishing?",
          es: "¿Cuál es el propósito de 'golpear' o 'abofetear' hierbas antes de decorar?",
          de: "Was ist der Zweck des 'Klatschens' oder 'Schlagens' von Kräutern vor dem Garnieren?",
          nl: "Wat is het doel van het 'klappen' of 'slaan' van kruiden voor het garneren?"
        },
        options: [
          { en: "To release aromatic oils and activate the herb's fragrance", es: "Para liberar aceites aromáticos y activar la fragancia de la hierba", de: "Um aromatische Öle freizusetzen und das Aroma des Krauts zu aktivieren", nl: "Om aromatische oliën vrij te maken en de geur van het kruid te activeren" },
          { en: "To clean the herbs", es: "Para limpiar las hierbas", de: "Um die Kräuter zu reinigen", nl: "Om de kruiden schoon te maken" },
          { en: "To make them look better", es: "Para que se vean mejor", de: "Damit sie besser aussehen", nl: "Om ze er beter uit te laten zien" },
          { en: "To remove excess moisture", es: "Para eliminar exceso de humedad", de: "Um überschüssige Feuchtigkeit zu entfernen", nl: "Om overtollig vocht te verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Gently slapping or clapping herbs (like mint or basil) between your hands releases their essential oils without bruising them, creating an aromatic burst that enhances the drinking experience.",
          es: "Golpear o aplaudir suavemente hierbas (como menta o albahaca) entre las manos libera sus aceites esenciales sin magullarlas, creando un estallido aromático que mejora la experiencia de beber.",
          de: "Sanftes Klatschen oder Schlagen von Kräutern (wie Minze oder Basilikum) zwischen den Händen setzt ihre ätherischen Öle frei, ohne sie zu quetschen, und erzeugt einen aromatischen Ausbruch, der das Trinkerlebnis verbessert.",
          nl: "Zachtjes klappen of slaan van kruiden (zoals munt of basilicum) tussen je handen maakt hun essentiële oliën vrij zonder ze te kneuzen, wat een aromatische uitbarsting creëert die de drinkervaring verbetert."
        }
      },
      {
        question: {
          en: "What is the 'reverse dry shake' technique?",
          es: "¿Qué es la técnica de 'agitado seco inverso'?",
          de: "Was ist die 'umgekehrte Trocken-Schüttel'-Technik?",
          nl: "Wat is de 'omgekeerde droge schud' techniek?"
        },
        options: [
          { en: "Shaking with ice first, then without ice after straining for better foam", es: "Agitar con hielo primero, luego sin hielo después de colar para mejor espuma", de: "Zuerst mit Eis schütteln, dann ohne Eis nach dem Sieben für besseren Schaum", nl: "Eerst schudden met ijs, daarna zonder ijs na zeven voor beter schuim" },
          { en: "Shaking dry ingredients only", es: "Agitar solo ingredientes secos", de: "Nur trockene Zutaten schütteln", nl: "Alleen droge ingrediënten schudden" },
          { en: "Shaking backwards", es: "Agitar hacia atrás", de: "Rückwärts schütteln", nl: "Achterwaarts schudden" },
          { en: "Using dried fruit instead of fresh", es: "Usar fruta seca en lugar de fresca", de: "Getrocknete Früchte statt frischer verwenden", nl: "Gedroogd fruit gebruiken in plaats van vers" }
        ],
        correct: 0,
        explanation: {
          en: "The reverse dry shake involves shaking first with ice (wet shake), straining out the ice, then shaking again without ice (dry shake). This creates superior foam texture for egg white cocktails compared to traditional dry shake.",
          es: "El agitado seco inverso implica agitar primero con hielo (agitado húmedo), colar el hielo, luego agitar nuevamente sin hielo (agitado seco). Esto crea textura de espuma superior para cócteles con clara de huevo comparado con agitado seco tradicional.",
          de: "Das umgekehrte Trocken-Schütteln beinhaltet zuerst Schütteln mit Eis (nasses Schütteln), Sieben des Eises, dann erneutes Schütteln ohne Eis (trockenes Schütteln). Dies erzeugt überlegene Schaumtextur für Eiweiß-Cocktails im Vergleich zum traditionellen Trocken-Schütteln.",
          nl: "De omgekeerde droge schud houdt eerst schudden met ijs in (natte schud), het ijs zeven, daarna opnieuw schudden zonder ijs (droge schud). Dit creëert superieure schuimtextuur voor eiwit cocktails vergeleken met traditionele droge schud."
        }
      },
      {
        question: {
          en: "What is a 'mist' serving style?",
          es: "¿Qué es un estilo de servicio 'mist'?",
          de: "Was ist ein 'Mist'-Servierstil?",
          nl: "Wat is een 'mist' serveer stijl?"
        },
        options: [
          { en: "Spirit poured over crushed ice in a rocks glass", es: "Licor vertido sobre hielo picado en vaso rocks", de: "Spirituose über Crushed Ice in einem Rocks-Glas gegossen", nl: "Sterke drank gegoten over crushed ijs in een rocks glas" },
          { en: "Cocktail served with dry ice fog", es: "Cóctel servido con niebla de hielo seco", de: "Cocktail mit Trockeneis-Nebel serviert", nl: "Cocktail geserveerd met droogijs mist" },
          { en: "Spraying aromatic mist on the drink", es: "Rociar niebla aromática en la bebida", de: "Aromatischen Nebel auf das Getränk sprühen", nl: "Aromatische nevel op de drank spuiten" },
          { en: "Serving in a chilled glass with condensation", es: "Servir en vaso frío con condensación", de: "In einem gekühlten Glas mit Kondensation servieren", nl: "Serveren in een gekoeld glas met condensatie" }
        ],
        correct: 0,
        explanation: {
          en: "A mist is a simple serving style where a spirit (typically whiskey or scotch) is poured over crushed ice in a rocks glass, creating a cold, refreshing, and slightly diluted drink.",
          es: "Un mist es un estilo de servicio simple donde un licor (típicamente whisky o scotch) se vierte sobre hielo picado en un vaso rocks, creando una bebida fría, refrescante y ligeramente diluida.",
          de: "Ein Mist ist ein einfacher Servierstil, bei dem eine Spirituose (typischerweise Whiskey oder Scotch) über Crushed Ice in einem Rocks-Glas gegossen wird, wodurch ein kaltes, erfrischendes und leicht verdünntes Getränk entsteht.",
          nl: "Een mist is een eenvoudige serveer stijl waarbij een sterke drank (typisch whiskey of scotch) over crushed ijs in een rocks glas wordt gegoten, wat een koude, verfrissende en licht verdunde drank creëert."
        }
      },
      {
        question: {
          en: "What is the purpose of a 'Yarai mixing glass'?",
          es: "¿Cuál es el propósito de un 'vaso mezclador Yarai'?",
          de: "Was ist der Zweck eines 'Yarai-Rührglases'?",
          nl: "Wat is het doel van een 'Yarai mengbeker'?"
        },
        options: [
          { en: "Japanese-style mixing glass with diamond pattern for better stirring control", es: "Vaso mezclador estilo japonés con patrón de diamante para mejor control al revolver", de: "Rührglas im japanischen Stil mit Rautenmuster für bessere Rührkontrolle", nl: "Japanse stijl mengbeker met diamantpatroon voor betere roercontrole" },
          { en: "Special glass for sake cocktails", es: "Vaso especial para cócteles de sake", de: "Spezialglas für Sake-Cocktails", nl: "Speciaal glas voor sake cocktails" },
          { en: "Heated mixing glass", es: "Vaso mezclador calentado", de: "Beheiztes Rührglas", nl: "Verwarmde mengbeker" },
          { en: "Disposable mixing glass", es: "Vaso mezclador desechable", de: "Einweg-Rührglas", nl: "Wegwerp mengbeker" }
        ],
        correct: 0,
        explanation: {
          en: "A Yarai mixing glass is a Japanese-style mixing glass with a distinctive diamond or bamboo-weave pattern cut into the glass. This pattern improves grip and stirring control while adding aesthetic appeal.",
          es: "Un vaso mezclador Yarai es un vaso mezclador estilo japonés con un patrón distintivo de diamante o tejido de bambú cortado en el vidrio. Este patrón mejora el agarre y control al revolver mientras añade atractivo estético.",
          de: "Ein Yarai-Rührglas ist ein Rührglas im japanischen Stil mit einem charakteristischen Diamant- oder Bambus-Webmuster, das ins Glas geschnitten ist. Dieses Muster verbessert Griff und Rührkontrolle und fügt ästhetischen Reiz hinzu.",
          nl: "Een Yarai mengbeker is een Japanse stijl mengbeker met een onderscheidend diamant- of bamboe-weefselpatroon in het glas gesneden. Dit patroon verbetert grip en roercontrole terwijl het esthetische aantrekkelijkheid toevoegt."
        }
      },
      {
        question: {
          en: "What is 'washing ice' in cocktail preparation?",
          es: "¿Qué es 'lavar hielo' en la preparación de cócteles?",
          de: "Was ist 'Eis waschen' bei der Cocktailzubereitung?",
          nl: "Wat is 'ijs wassen' bij cocktailbereiding?"
        },
        options: [
          { en: "Rinsing ice with water to remove impurities and cloudy exterior", es: "Enjuagar hielo con agua para eliminar impurezas y exterior turbio", de: "Eis mit Wasser spülen, um Verunreinigungen und trübe Außenseite zu entfernen", nl: "Ijs spoelen met water om onzuiverheden en troebele buitenkant te verwijderen" },
          { en: "Cleaning ice trays", es: "Limpiar bandejas de hielo", de: "Eiswürfelschalen reinigen", nl: "IJsblokjesbakken schoonmaken" },
          { en: "Adding soap to ice", es: "Añadir jabón al hielo", de: "Seife zu Eis hinzufügen", nl: "Zeep aan ijs toevoegen" },
          { en: "Melting ice completely", es: "Derretir hielo completamente", de: "Eis vollständig schmelzen", nl: "Ijs volledig smelten" }
        ],
        correct: 0,
        explanation: {
          en: "Washing ice involves quickly rinsing ice cubes with water to remove the cloudy exterior layer and any freezer odors. This creates clearer, cleaner-tasting ice for premium cocktails.",
          es: "Lavar hielo implica enjuagar rápidamente cubos de hielo con agua para eliminar la capa exterior turbia y cualquier olor del congelador. Esto crea hielo más claro y de sabor más limpio para cócteles premium.",
          de: "Eis waschen beinhaltet schnelles Spülen von Eiswürfeln mit Wasser, um die trübe Außenschicht und eventuelle Gefrierschrankgerüche zu entfernen. Dies erzeugt klareres, sauberer schmeckendes Eis für Premium-Cocktails.",
          nl: "Ijs wassen houdt in dat ijsblokjes snel worden gespoeld met water om de troebele buitenlaag en eventuele vriezergeuren te verwijderen. Dit creëert helderder, schoner smakend ijs voor premium cocktails."
        }
      },
      {
        question: {
          en: "What is the purpose of a 'mixing tin' versus a 'shaking tin'?",
          es: "¿Cuál es el propósito de una 'lata mezcladora' versus una 'lata agitadora'?",
          de: "Was ist der Zweck einer 'Mischdose' versus einer 'Schütteldose'?",
          nl: "Wat is het doel van een 'mengblik' versus een 'schudblik'?"
        },
        options: [
          { en: "Mixing tins are for stirring with ice, shaking tins for vigorous shaking", es: "Latas mezcladoras son para revolver con hielo, latas agitadoras para agitar vigorosamente", de: "Mischdosen sind zum Rühren mit Eis, Schütteldosen zum kräftigen Schütteln", nl: "Mengblikken zijn voor roeren met ijs, schudblikken voor krachtig schudden" },
          { en: "They are the same thing with different names", es: "Son lo mismo con nombres diferentes", de: "Sie sind dasselbe mit verschiedenen Namen", nl: "Ze zijn hetzelfde met verschillende namen" },
          { en: "Mixing tins are smaller", es: "Latas mezcladoras son más pequeñas", de: "Mischdosen sind kleiner", nl: "Mengblikken zijn kleiner" },
          { en: "Shaking tins have handles", es: "Latas agitadoras tienen asas", de: "Schütteldosen haben Griffe", nl: "Schudblikken hebben handvatten" }
        ],
        correct: 0,
        explanation: {
          en: "While the tins may be physically similar, mixing tins are typically used with a bar spoon for stirred cocktails, while shaking tins are paired together (or with glass) for shaken cocktails requiring more aggressive agitation.",
          es: "Aunque las latas pueden ser físicamente similares, las latas mezcladoras típicamente se usan con una cuchara de bar para cócteles revueltos, mientras las latas agitadoras se emparejan juntas (o con vidrio) para cócteles agitados que requieren agitación más agresiva.",
          de: "Während die Dosen physisch ähnlich sein können, werden Mischdosen typischerweise mit einem Barlöffel für gerührte Cocktails verwendet, während Schütteldosen zusammen gepaart werden (oder mit Glas) für geschüttelte Cocktails, die aggressivere Agitation erfordern.",
          nl: "Hoewel de blikken fysiek vergelijkbaar kunnen zijn, worden mengblikken typisch gebruikt met een barlepel voor geroerde cocktails, terwijl schudblikken samen worden gekoppeld (of met glas) voor geschudde cocktails die agressievere agitatie vereisen."
        }
      },
      {
        question: {
          en: "What is 'clarified milk punch' technique?",
          es: "¿Qué es la técnica de 'ponche de leche clarificado'?",
          de: "Was ist die 'geklärter Milch-Punch'-Technik?",
          nl: "Wat is de 'verhelderde melk punch' techniek?"
        },
        options: [
          { en: "Using milk proteins to filter and clarify cocktails, creating silky clear drinks", es: "Usar proteínas de leche para filtrar y clarificar cócteles, creando bebidas claras sedosas", de: "Milchproteine verwenden, um Cocktails zu filtern und zu klären, wodurch seidig klare Getränke entstehen", nl: "Melkproteïnen gebruiken om cocktails te filteren en te verhelderen, wat zijdezachte heldere drankjes creëert" },
          { en: "Adding milk to punch for flavor", es: "Añadir leche al ponche para sabor", de: "Milch zum Punch für Geschmack hinzufügen", nl: "Melk aan punch toevoegen voor smaak" },
          { en: "Removing milk from cocktails", es: "Eliminar leche de cócteles", de: "Milch aus Cocktails entfernen", nl: "Melk uit cocktails verwijderen" },
          { en: "Heating milk for hot cocktails", es: "Calentar leche para cócteles calientes", de: "Milch für heiße Cocktails erhitzen", nl: "Melk verwarmen voor warme cocktails" }
        ],
        correct: 0,
        explanation: {
          en: "Milk clarification uses the curdling reaction between milk proteins and acidic cocktail ingredients to filter out impurities, tannins, and color. The result is a crystal-clear, silky-textured cocktail with enhanced flavor and shelf stability.",
          es: "La clarificación con leche usa la reacción de cuajado entre proteínas de leche e ingredientes ácidos de cóctel para filtrar impurezas, taninos y color. El resultado es un cóctel cristalino con textura sedosa, sabor mejorado y estabilidad en almacenamiento.",
          de: "Milchklärung nutzt die Gerinnungsreaktion zwischen Milchproteinen und sauren Cocktailzutaten, um Verunreinigungen, Tannine und Farbe herauszufiltern. Das Ergebnis ist ein kristallklarer, seidig strukturierter Cocktail mit verbessertem Geschmack und Lagerstabilität.",
          nl: "Melk verhelderin gebruikt de stremming reactie tussen melkproteïnen en zure cocktail ingrediënten om onzuiverheden, tannines en kleur eruit te filteren. Het resultaat is een kristalheldere, zijdezachte getextureerde cocktail met verbeterde smaak en houdbaarheid."
        }
      },
      {
        question: {
          en: "What is 'whip shaking' technique?",
          es: "¿Qué es la técnica de 'agitado látigo'?",
          de: "Was ist die 'Peitsch-Schüttel'-Technik?",
          nl: "Wat is de 'zweep schud' techniek?"
        },
        options: [
          { en: "Short, quick shaking motion used for delicate ingredients or carbonated mixers", es: "Movimiento de agitado corto y rápido usado para ingredientes delicados o mezcladores carbonatados", de: "Kurze, schnelle Schüttelbewegung für empfindliche Zutaten oder kohlensäurehaltige Mixer", nl: "Korte, snelle schudbeweging gebruikt voor delicate ingrediënten of koolzuurhoudende mixers" },
          { en: "Using a whisk in cocktails", es: "Usar un batidor en cócteles", de: "Einen Schneebesen in Cocktails verwenden", nl: "Een garde in cocktails gebruiken" },
          { en: "Adding whipped cream to drinks", es: "Añadir crema batida a bebidas", de: "Schlagsahne zu Getränken hinzufügen", nl: "Slagroom aan drankjes toevoegen" },
          { en: "Shaking very hard", es: "Agitar muy fuerte", de: "Sehr hart schütteln", nl: "Heel hard schudden" }
        ],
        correct: 0,
        explanation: {
          en: "Whip shaking uses a brief, fast shaking motion (3-5 seconds) to gently integrate delicate ingredients without over-diluting or damaging carbonation. It's ideal for champagne cocktails or drinks with fragile components.",
          es: "El agitado látigo usa un movimiento de agitado breve y rápido (3-5 segundos) para integrar suavemente ingredientes delicados sin diluir excesivamente o dañar carbonatación. Es ideal para cócteles de champán o bebidas con componentes frágiles.",
          de: "Peitsch-Schütteln verwendet eine kurze, schnelle Schüttelbewegung (3-5 Sekunden), um empfindliche Zutaten sanft zu integrieren, ohne zu stark zu verdünnen oder Kohlensäure zu beschädigen. Es ist ideal für Champagner-Cocktails oder Getränke mit fragilen Komponenten.",
          nl: "Zweep schudden gebruikt een korte, snelle schudbeweging (3-5 seconden) om delicate ingrediënten zachtjes te integreren zonder te veel te verdunnen of koolzuur te beschadigen. Het is ideaal voor champagne cocktails of drankjes met fragiele componenten."
        }
      },
      {
        question: {
          en: "What is the purpose of using a 'wine whip' or 'spring strainer' in combination with a Hawthorne strainer?",
          es: "¿Cuál es el propósito de usar un 'batidor de vino' o 'colador de resorte' en combinación con un colador Hawthorne?",
          de: "Was ist der Zweck der Verwendung eines 'Wein-Quirls' oder 'Federsiebs' in Kombination mit einem Hawthorne-Sieb?",
          nl: "Wat is het doel van het gebruik van een 'wijn garde' of 'veerz eef' in combinatie met een Hawthorne strainer?"
        },
        options: [
          { en: "To achieve finer double-straining for ultra-smooth texture", es: "Para lograr colado doble más fino para textura ultra suave", de: "Um feineres Doppelfiltern für ultraglatte Textur zu erreichen", nl: "Om fijnere dubbele zeving te bereiken voor ultra gladde textuur" },
          { en: "To add air bubbles to the cocktail", es: "Para añadir burbujas de aire al cóctel", de: "Um Luftblasen zum Cocktail hinzuzufügen", nl: "Om luchtbellen aan de cocktail toe te voegen" },
          { en: "To measure ingredients", es: "Para medir ingredientes", de: "Um Zutaten zu messen", nl: "Om ingrediënten te meten" },
          { en: "To crush ice while straining", es: "Para triturar hielo mientras se cuela", de: "Um Eis beim Sieben zu zerkleinern", nl: "Om ijs te breken tijdens het zeven" }
        ],
        correct: 0,
        explanation: {
          en: "A fine-mesh strainer (wine whip/spring strainer) used with a Hawthorne strainer creates double-straining, catching tiny ice chips, herb particles, and fruit pulp for an exceptionally smooth, refined cocktail texture.",
          es: "Un colador de malla fina (batidor de vino/colador de resorte) usado con un colador Hawthorne crea colado doble, capturando pequeños trozos de hielo, partículas de hierbas y pulpa de fruta para una textura de cóctel excepcionalmente suave y refinada.",
          de: "Ein feinmaschiges Sieb (Wein-Quirl/Federsieb), das mit einem Hawthorne-Sieb verwendet wird, erzeugt Doppelfiltern und fängt winzige Eissplitter, Kräuterpartikel und Fruchtfleisch für eine außergewöhnlich glatte, raffinierte Cocktail-Textur ein.",
          nl: "Een fijnmazig zeef (wijn garde/veer zeef) gebruikt met een Hawthorne strainer creëert dubbele zeving, waarbij kleine ijssplinters, kruidendeeltjes en fruitpulp worden opgevangen voor een uitzonderlijk gladde, verfijnde cocktail textuur."
        }
      },
      {
        question: {
          en: "What is 'nitro muddling' in modern cocktail techniques?",
          es: "¿Qué es el 'muddleo con nitrógeno' en técnicas modernas de cócteles?",
          de: "Was ist 'Nitro-Muddeln' in modernen Cocktail-Techniken?",
          nl: "Wat is 'nitro muddlen' in moderne cocktail technieken?"
        },
        options: [
          { en: "Using liquid nitrogen to flash-freeze herbs/fruits before muddling for clean extraction", es: "Usar nitrógeno líquido para congelar instantáneamente hierbas/frutas antes de machacar para extracción limpia", de: "Flüssigstickstoff verwenden, um Kräuter/Früchte vor dem Muddeln blitzschnell einzufrieren für saubere Extraktion", nl: "Vloeibare stikstof gebruiken om kruiden/fruit snel te bevriezen voor muddlen voor schone extractie" },
          { en: "Adding nitrogen gas to cocktails", es: "Añadir gas nitrógeno a cócteles", de: "Stickstoffgas zu Cocktails hinzufügen", nl: "Stikstofgas aan cocktails toevoegen" },
          { en: "Muddling very aggressively", es: "Machacar muy agresivamente", de: "Sehr aggressiv muddeln", nl: "Zeer agressief muddlen" },
          { en: "Using nitrogen-infused herbs", es: "Usar hierbas infundidas con nitrógeno", de: "Stickstoff-infundierte Kräuter verwenden", nl: "Stikstof-geïnfundeerde kruiden gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "Nitro muddling involves flash-freezing herbs or fruits with liquid nitrogen before muddling. This creates cleaner extraction of flavors and oils without releasing bitter chlorophyll or creating excessive pulp, resulting in brighter, cleaner-tasting cocktails.",
          es: "El muddleo con nitrógeno implica congelar instantáneamente hierbas o frutas con nitrógeno líquido antes de machacar. Esto crea extracción más limpia de sabores y aceites sin liberar clorofila amarga o crear pulpa excesiva, resultando en cócteles de sabor más brillante y limpio.",
          de: "Nitro-Muddeln beinhaltet das Blitzgefrieren von Kräutern oder Früchten mit Flüssigstickstoff vor dem Muddeln. Dies erzeugt sauberere Extraktion von Aromen und Ölen, ohne bitteres Chlorophyll freizusetzen oder übermäßiges Fruchtfleisch zu erzeugen, was hellere, sauberer schmeckende Cocktails ergibt.",
          nl: "Nitro muddlen houdt in dat kruiden of fruit snel worden bevroren met vloeibare stikstof voor het muddlen. Dit creëert schonere extractie van smaken en oliën zonder bittere chlorofyl vrij te maken of overmatige pulp te creëren, wat resulteert in helderdere, schoner smakende cocktails."
        }
      },
      {
        question: {
          en: "What is the 'teardrop pour' garnishing technique?",
          es: "¿Qué es la técnica de decoración 'vertido en lágrima'?",
          de: "Was ist die 'Tropfen-Gieß'-Garnierungstechnik?",
          nl: "Wat is de 'traan giet' garneringstechniek?"
        },
        options: [
          { en: "Carefully pouring small drops of bitters or liqueur in artistic patterns on foam", es: "Verter cuidadosamente pequeñas gotas de amargos o licor en patrones artísticos sobre espuma", de: "Vorsichtiges Gießen kleiner Tropfen von Bittern oder Likör in künstlerischen Mustern auf Schaum", nl: "Zorgvuldig gieten van kleine druppels bitters of likeur in artistieke patronen op schuim" },
          { en: "Creating teardrop-shaped ice", es: "Crear hielo en forma de lágrima", de: "Tropfenförmiges Eis erzeugen", nl: "Traanvormig ijs maken" },
          { en: "Pouring drinks while crying", es: "Verter bebidas mientras lloras", de: "Getränke gießen während man weint", nl: "Drankjes gieten terwijl je huilt" },
          { en: "Using a special teardrop-shaped pourer", es: "Usar un vertedor especial en forma de lágrima", de: "Einen speziellen tropfenförmigen Ausgießer verwenden", nl: "Een speciale traanvormige schenktuit gebruiken" }
        ],
        correct: 0,
        explanation: {
          en: "The teardrop pour involves carefully placing small drops of bitters, liqueurs, or colored syrups onto the foam surface of a cocktail, creating decorative patterns through controlled placement and natural spreading of the droplets.",
          es: "El vertido en lágrima implica colocar cuidadosamente pequeñas gotas de amargos, licores o jarabes coloreados en la superficie de espuma de un cóctel, creando patrones decorativos a través de colocación controlada y expansión natural de las gotitas.",
          de: "Der Tropfen-Gieß beinhaltet vorsichtiges Platzieren kleiner Tropfen von Bittern, Likören oder farbigen Sirupen auf die Schaumoberfläche eines Cocktails, wodurch dekorative Muster durch kontrollierte Platzierung und natürliche Ausbreitung der Tröpfchen entstehen.",
          nl: "De traan giet houdt in dat kleine druppels bitters, likeuren of gekleurde siropen zorgvuldig op het schuimoppervlak van een cocktail worden geplaatst, wat decoratieve patronen creëert door gecontroleerde plaatsing en natuurlijke verspreiding van de druppeltjes."
        }
      },
      {
        question: {
          en: "What is 'swizzling' and what tool is used for it?",
          es: "¿Qué es 'swizzlear' y qué herramienta se usa para ello?",
          de: "Was ist 'Swizzeln' und welches Werkzeug wird dafür verwendet?",
          nl: "Wat is 'swizzlen' en welk gereedschap wordt ervoor gebruikt?"
        },
        options: [
          { en: "Rapid spinning of a swizzle stick between palms to mix and chill", es: "Giro rápido de un palo swizzle entre las palmas para mezclar y enfriar", de: "Schnelles Drehen eines Swizzle-Sticks zwischen den Handflächen zum Mischen und Kühlen", nl: "Snel draaien van een swizzle stick tussen handpalmen om te mengen en koelen" },
          { en: "Stirring very slowly", es: "Revolver muy lentamente", de: "Sehr langsam rühren", nl: "Heel langzaam roeren" },
          { en: "Adding carbonation to drinks", es: "Añadir carbonatación a bebidas", de: "Kohlensäure zu Getränken hinzufügen", nl: "Koolzuur aan drankjes toevoegen" },
          { en: "Decorating with candy sticks", es: "Decorar con palitos de caramelo", de: "Mit Bonbonstäben dekorieren", nl: "Versieren met snoepstokjes" }
        ],
        correct: 0,
        explanation: {
          en: "Swizzling uses a special swizzle stick (traditionally from the Quararibea turbinata tree) spun rapidly between the palms in crushed ice, creating turbulent mixing, aeration, and rapid chilling. It's essential for classic drinks like the Queen's Park Swizzle.",
          es: "Swizzlear usa un palo swizzle especial (tradicionalmente del árbol Quararibea turbinata) girado rápidamente entre las palmas en hielo picado, creando mezcla turbulenta, aireación y enfriamiento rápido. Es esencial para bebidas clásicas como el Queen's Park Swizzle.",
          de: "Swizzeln verwendet einen speziellen Swizzle-Stick (traditionell vom Quararibea turbinata Baum) schnell zwischen den Handflächen in Crushed Ice gedreht, wodurch turbulentes Mischen, Belüftung und schnelle Kühlung entsteht. Es ist wesentlich für klassische Getränke wie den Queen's Park Swizzle.",
          nl: "Swizzlen gebruikt een speciale swizzle stick (traditioneel van de Quararibea turbinata boom) snel gedraaid tussen de handpalmen in crushed ijs, wat turbulente menging, beluchting en snelle koeling creëert. Het is essentieel voor klassieke drankjes zoals de Queen's Park Swizzle."
        }
      },
      {
        question: {
          en: "What is 'ice tempering' in professional cocktail preparation?",
          es: "¿Qué es el 'templado de hielo' en la preparación profesional de cócteles?",
          de: "Was ist 'Eis-Temperierung' in der professionellen Cocktailzubereitung?",
          nl: "Wat is 'ijs temperen' in professionele cocktailbereiding?"
        },
        options: [
          { en: "Allowing ice to warm slightly to optimal temperature (-5 to -10°C) before use", es: "Permitir que el hielo se caliente ligeramente a temperatura óptima (-5 a -10°C) antes de usar", de: "Eis leicht auf optimale Temperatur (-5 bis -10°C) erwärmen lassen vor Gebrauch", nl: "Ijs laten opwarmen tot optimale temperatuur (-5 tot -10°C) voor gebruik" },
          { en: "Breaking ice into smaller pieces", es: "Romper hielo en piezas más pequeñas", de: "Eis in kleinere Stücke brechen", nl: "Ijs in kleinere stukken breken" },
          { en: "Freezing ice harder", es: "Congelar hielo más duro", de: "Eis härter einfrieren", nl: "Ijs harder bevriezen" },
          { en: "Adding flavors to ice", es: "Añadir sabores al hielo", de: "Aromen zu Eis hinzufügen", nl: "Smaken aan ijs toevoegen" }
        ],
        correct: 0,
        explanation: {
          en: "Ice tempering involves letting very cold freezer ice (-18°C) warm slightly to -5 to -10°C before use. This optimal temperature range prevents ice from being too brittle (chips easily) or causing excessive cloudiness when shaken, while still providing excellent chilling.",
          es: "El templado de hielo implica dejar que el hielo muy frío del congelador (-18°C) se caliente ligeramente a -5 a -10°C antes de usar. Este rango de temperatura óptimo evita que el hielo sea demasiado frágil (se astilla fácilmente) o cause turbidez excesiva al agitar, mientras aún proporciona excelente enfriamiento.",
          de: "Eis-Temperierung beinhaltet, sehr kaltes Gefrierschrankeis (-18°C) leicht auf -5 bis -10°C erwärmen zu lassen vor Gebrauch. Dieser optimale Temperaturbereich verhindert, dass Eis zu spröde ist (splittert leicht) oder übermäßige Trübung beim Schütteln verursacht, während es immer noch ausgezeichnete Kühlung bietet.",
          nl: "Ijs temperen houdt in dat zeer koud vriezer ijs (-18°C) licht mag opwarmen tot -5 tot -10°C voor gebruik. Dit optimale temperatuurbereik voorkomt dat ijs te bros is (splintert gemakkelijk) of overmatige troebeling veroorzaakt bij schudden, terwijl het nog steeds uitstekende koeling biedt."
        }
      },
      {
        question: {
          en: "What is the difference between 'cutting' and 'twisting' a citrus peel for garnish?",
          es: "¿Cuál es la diferencia entre 'cortar' y 'torcer' una cáscara de cítrico para decorar?",
          de: "Was ist der Unterschied zwischen 'Schneiden' und 'Drehen' einer Zitrusschale zum Garnieren?",
          nl: "Wat is het verschil tussen 'snijden' en 'draaien' van een citrusschil voor garnering?"
        },
        options: [
          { en: "Cutting creates the peel shape; twisting expresses oils over the drink", es: "Cortar crea la forma de la cáscara; torcer expresa aceites sobre la bebida", de: "Schneiden erzeugt die Schalenform; Drehen drückt Öle über das Getränk aus", nl: "Snijden creëert de schilvorm; draaien perst oliën uit over de drank" },
          { en: "They mean the same thing", es: "Significan lo mismo", de: "Sie bedeuten dasselbe", nl: "Ze betekenen hetzelfde" },
          { en: "Cutting is faster than twisting", es: "Cortar es más rápido que torcer", de: "Schneiden ist schneller als Drehen", nl: "Snijden is sneller dan draaien" },
          { en: "Twisting is for limes only", es: "Torcer es solo para limas", de: "Drehen ist nur für Limetten", nl: "Draaien is alleen voor limoenen" }
        ],
        correct: 0,
        explanation: {
          en: "Cutting refers to the knife technique of creating the peel garnish from the citrus, while twisting (or expressing) is the action of holding the peel over the drink and twisting it to spray the essential oils onto the cocktail's surface and rim.",
          es: "Cortar se refiere a la técnica de cuchillo de crear la decoración de cáscara del cítrico, mientras torcer (o expresar) es la acción de sostener la cáscara sobre la bebida y torcerla para rociar los aceites esenciales en la superficie y borde del cóctel.",
          de: "Schneiden bezieht sich auf die Messertechnik zum Erstellen der Schalengarnitur aus der Zitrusfrucht, während Drehen (oder Ausdrücken) die Aktion ist, die Schale über das Getränk zu halten und zu drehen, um die ätherischen Öle auf die Oberfläche und den Rand des Cocktails zu sprühen.",
          nl: "Snijden verwijst naar de mestechniek van het creëren van de schilgarnering van de citrus, terwijl draaien (of uitpersen) de actie is van het vasthouden van de schil boven de drank en deze draaien om de essentiële oliën op het oppervlak en de rand van de cocktail te spuiten."
        }
      },
      {
        question: {
          en: "What is the 'reverse dry shake' technique and when is it used?",
          es: "¿Qué es la técnica de 'agitado seco invertido' y cuándo se usa?",
          de: "Was ist die 'umgekehrte Trocken-Schüttel'-Technik und wann wird sie verwendet?",
          nl: "Wat is de 'omgekeerde droge schud' techniek en wanneer wordt het gebruikt?"
        },
        options: [
          { en: "Shaking with ice first, then without ice for extra foam; produces denser, longer-lasting foam than regular dry shake", es: "Agitar con hielo primero, luego sin hielo para espuma extra; produce espuma más densa y duradera que el agitado seco regular", de: "Erst mit Eis schütteln, dann ohne Eis für extra Schaum; produziert dichteren, länger haltenden Schaum als reguläres Trocken-Schütteln", nl: "Eerst met ijs schudden, dan zonder ijs voor extra schuim; produceert dichtere, langer durende schuim dan normale droge schud" },
          { en: "Shaking without ice for carbonation", es: "Agitar sin hielo para carbonatación", de: "Ohne Eis schütteln für Kohlensäure", nl: "Zonder ijs schudden voor koolzuur" },
          { en: "Stirring instead of shaking", es: "Revolver en lugar de agitar", de: "Rühren statt Schütteln", nl: "Roeren in plaats van schudden" },
          { en: "Adding ice after serving", es: "Agregar hielo después de servir", de: "Eis nach dem Servieren hinzufügen", nl: "IJs toevoegen na serveren" }
        ],
        correct: 0,
        explanation: {
          en: "The reverse dry shake involves shaking cocktail ingredients with ice first to chill and dilute, straining out the ice, then dry shaking vigorously to create foam. This technique produces denser, more stable foam than the traditional dry-then-wet shake method, making it preferred for drinks like Ramos Gin Fizz and whiskey sours with egg white.",
          es: "El agitado seco invertido implica agitar los ingredientes del cóctel con hielo primero para enfriar y diluir, colar el hielo, luego agitar en seco vigorosamente para crear espuma. Esta técnica produce espuma más densa y estable que el método tradicional de agitado seco-luego-húmedo, haciéndolo preferido para bebidas como Ramos Gin Fizz y whiskey sours con clara de huevo.",
          de: "Das umgekehrte Trocken-Schütteln beinhaltet, Cocktailzutaten zuerst mit Eis zu schütteln, um zu kühlen und zu verdünnen, das Eis abzusieben, dann kräftig trocken zu schütteln, um Schaum zu erzeugen. Diese Technik produziert dichteren, stabileren Schaum als die traditionelle Trocken-dann-Nass-Schüttelmethode, was sie bevorzugt für Getränke wie Ramos Gin Fizz und Whiskey Sours mit Eiweiß macht.",
          nl: "De omgekeerde droge schud houdt in dat cocktail ingrediënten eerst met ijs worden geschud om te koelen en verdunnen, het ijs eruit zeven, dan krachtig droog schudden om schuim te creëren. Deze techniek produceert dichtere, stabielere schuim dan de traditionele droog-dan-nat schud methode, waardoor het de voorkeur heeft voor drankjes zoals Ramos Gin Fizz en whiskey sours met eiwit."
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
