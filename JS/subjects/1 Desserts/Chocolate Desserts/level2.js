// Chocolate Desserts Quiz - Level 2: Easy
(function() {
  const level2 = {
    name: {
      en: "Chocolate Desserts - Easy",
      es: "Postres de Chocolate - Fácil",
      de: "Schokoladendesserts - Einfach",
      nl: "Chocoladedesserts - Makkelijk"
    },
    questions: [
      {
        question: {
          en: "What is the name of the tree that produces cocoa beans?",
          es: "¿Cómo se llama el árbol que produce granos de cacao?",
          de: "Wie heißt der Baum, der Kakaobohnen produziert?",
          nl: "Hoe heet de boom die cacaobonen produceert?"
        },
        options: [
          { en: "Cacao tree", es: "Árbol de cacao", de: "Kakaobaum", nl: "Cacaoboom" },
          { en: "Coffee tree", es: "Árbol de café", de: "Kaffeebaum", nl: "Koffieboom" },
          { en: "Chocolate tree", es: "Árbol de chocolate", de: "Schokoladenbaum", nl: "Chocoladeboom" },
          { en: "Cocoa palm", es: "Palma de cacao", de: "Kakaopalme", nl: "Cacaopalm" }
        ],
        correct: 0,
        explanation: {
          en: "The cacao tree (Theobroma cacao) produces cacao pods containing cocoa beans used to make chocolate.",
          es: "El árbol de cacao (Theobroma cacao) produce vainas de cacao que contienen granos de cacao utilizados para hacer chocolate.",
          de: "Der Kakaobaum (Theobroma cacao) produziert Kakaoschoten mit Kakaobohnen zur Schokoladenherstellung.",
          nl: "De cacaoboom (Theobroma cacao) produceert cacaopeulen met cacaobonen die gebruikt worden om chocolade te maken."
        }
      },
      {
        question: {
          en: "Which chocolate dessert is traditionally served warm with a liquid center?",
          es: "¿Qué postre de chocolate se sirve tradicionalmente caliente con centro líquido?",
          de: "Welches Schokoladendessert wird traditionell warm mit flüssigem Kern serviert?",
          nl: "Welk chocoladedessert wordt traditioneel warm geserveerd met een vloeibare kern?"
        },
        options: [
          { en: "Chocolate mousse", es: "Mousse de chocolate", de: "Schokoladenmousse", nl: "Chocolademousse" },
          { en: "Chocolate lava cake", es: "Pastel de lava de chocolate", de: "Schokoladen-Lavakuchen", nl: "Chocolade lavacake" },
          { en: "Chocolate truffle", es: "Trufa de chocolate", de: "Schokoladentrüffel", nl: "Chocoladetruffel" },
          { en: "Chocolate pudding", es: "Pudín de chocolate", de: "Schokoladenpudding", nl: "Chocoladepudding" }
        ],
        correct: 1,
        explanation: {
          en: "Chocolate lava cake, also called molten chocolate cake, has a warm liquid chocolate center that flows out when cut.",
          es: "El pastel de lava de chocolate, también llamado pastel de chocolate fundido, tiene un centro de chocolate líquido caliente que fluye al cortarlo.",
          de: "Schokoladen-Lavakuchen, auch geschmolzener Schokoladenkuchen genannt, hat einen warmen flüssigen Schokoladenkern, der beim Anschneiden herausfließt.",
          nl: "Chocolade lavacake, ook wel gesmolten chocoladecake genoemd, heeft een warme vloeibare chocoladekern die eruit stroomt bij het aansnijden."
        }
      },
      {
        question: {
          en: "What percentage defines milk chocolate?",
          es: "¿Qué porcentaje define el chocolate con leche?",
          de: "Welcher Prozentsatz definiert Milchschokolade?",
          nl: "Welk percentage definieert melkchocolade?"
        },
        options: [
          { en: "At least 10% cocoa", es: "Al menos 10% cacao", de: "Mindestens 10% Kakao", nl: "Minstens 10% cacao" },
          { en: "At least 25% cocoa", es: "Al menos 25% cacao", de: "Mindestens 25% Kakao", nl: "Minstens 25% cacao" },
          { en: "At least 50% cocoa", es: "Al menos 50% cacao", de: "Mindestens 50% Kakao", nl: "Minstens 50% cacao" },
          { en: "At least 70% cocoa", es: "Al menos 70% cacao", de: "Mindestens 70% Kakao", nl: "Minstens 70% cacao" }
        ],
        correct: 1,
        explanation: {
          en: "Milk chocolate must contain at least 25% cocoa solids, plus milk powder or condensed milk.",
          es: "El chocolate con leche debe contener al menos 25% de sólidos de cacao, más leche en polvo o leche condensada.",
          de: "Milchschokolade muss mindestens 25% Kakaofeststoffe enthalten, plus Milchpulver oder Kondensmilch.",
          nl: "Melkchocolade moet minstens 25% cacaobestanddelen bevatten, plus melkpoeder of gecondenseerde melk."
        }
      },
      {
        question: {
          en: "What is ganache made from?",
          es: "¿De qué está hecho el ganache?",
          de: "Woraus wird Ganache hergestellt?",
          nl: "Waar wordt ganache van gemaakt?"
        },
        options: [
          { en: "Chocolate and butter", es: "Chocolate y mantequilla", de: "Schokolade und Butter", nl: "Chocolade en boter" },
          { en: "Chocolate and cream", es: "Chocolate y crema", de: "Schokolade und Sahne", nl: "Chocolade en room" },
          { en: "Chocolate and milk", es: "Chocolate y leche", de: "Schokolade und Milch", nl: "Chocolade en melk" },
          { en: "Chocolate and eggs", es: "Chocolate y huevos", de: "Schokolade und Eier", nl: "Chocolade en eieren" }
        ],
        correct: 1,
        explanation: {
          en: "Ganache is made by heating cream and pouring it over chopped chocolate, creating a smooth mixture.",
          es: "El ganache se hace calentando crema y vertiéndola sobre chocolate picado, creando una mezcla suave.",
          de: "Ganache wird hergestellt, indem Sahne erhitzt und über gehackte Schokolade gegossen wird, wodurch eine glatte Mischung entsteht.",
          nl: "Ganache wordt gemaakt door room te verwarmen en over gehakte chocolade te gieten, waardoor een glad mengsel ontstaat."
        }
      },
      {
        question: {
          en: "Which country invented the brownie?",
          es: "¿Qué país inventó el brownie?",
          de: "Welches Land hat den Brownie erfunden?",
          nl: "Welk land heeft de brownie uitgevonden?"
        },
        options: [
          { en: "France", es: "Francia", de: "Frankreich", nl: "Frankrijk" },
          { en: "United States", es: "Estados Unidos", de: "Vereinigte Staaten", nl: "Verenigde Staten" },
          { en: "Belgium", es: "Bélgica", de: "Belgien", nl: "België" },
          { en: "Switzerland", es: "Suiza", de: "Schweiz", nl: "Zwitserland" }
        ],
        correct: 1,
        explanation: {
          en: "The brownie was invented in the United States in the late 19th century, first appearing at the 1893 Chicago World's Fair.",
          es: "El brownie fue inventado en Estados Unidos a finales del siglo XIX, apareciendo por primera vez en la Feria Mundial de Chicago de 1893.",
          de: "Der Brownie wurde Ende des 19. Jahrhunderts in den Vereinigten Staaten erfunden und erschien erstmals auf der Weltausstellung 1893 in Chicago.",
          nl: "De brownie werd uitgevonden in de Verenigde Staten aan het einde van de 19e eeuw, voor het eerst verschijnend op de Wereldtentoonstelling van 1893 in Chicago."
        }
      },
      {
        question: {
          en: "What is the difference between cocoa and cacao?",
          es: "¿Cuál es la diferencia entre cocoa y cacao?",
          de: "Was ist der Unterschied zwischen Kakao und Kakao?",
          nl: "Wat is het verschil tussen cocoa en cacao?"
        },
        options: [
          { en: "No difference", es: "No hay diferencia", de: "Kein Unterschied", nl: "Geen verschil" },
          { en: "Cacao is raw, cocoa is processed", es: "El cacao es crudo, la cocoa es procesada", de: "Kakao ist roh, Kakao ist verarbeitet", nl: "Cacao is rauw, cocoa is verwerkt" },
          { en: "Cocoa is raw, cacao is processed", es: "La cocoa es cruda, el cacao es procesado", de: "Kakao ist roh, Kakao ist verarbeitet", nl: "Cocoa is rauw, cacao is verwerkt" },
          { en: "Different plants", es: "Plantas diferentes", de: "Verschiedene Pflanzen", nl: "Verschillende planten" }
        ],
        correct: 1,
        explanation: {
          en: "Cacao refers to the raw, unprocessed beans, while cocoa is the processed powder made from roasted cacao beans.",
          es: "Cacao se refiere a los granos crudos sin procesar, mientras que cocoa es el polvo procesado hecho de granos de cacao tostados.",
          de: "Kakao bezieht sich auf die rohen, unverarbeiteten Bohnen, während Kakao das verarbeitete Pulver aus gerösteten Kakaobohnen ist.",
          nl: "Cacao verwijst naar de rauwe, onverwerkte bonen, terwijl cocoa het verwerkte poeder is gemaakt van geroosterde cacaobonen."
        }
      },
      {
        question: {
          en: "What is chocolate bloom?",
          es: "¿Qué es la floración del chocolate?",
          de: "Was ist Schokoladenreif?",
          nl: "Wat is chocolade-uitslag?"
        },
        options: [
          { en: "Chocolate flowers", es: "Flores de chocolate", de: "Schokoladenblumen", nl: "Chocoladebloemen" },
          { en: "White coating on chocolate", es: "Capa blanca en el chocolate", de: "Weißer Belag auf Schokolade", nl: "Witte laag op chocolade" },
          { en: "Chocolate plant growth", es: "Crecimiento de la planta de chocolate", de: "Schokoladenpflanzenwachstum", nl: "Chocoladeplant groei" },
          { en: "Melted chocolate", es: "Chocolate derretido", de: "Geschmolzene Schokolade", nl: "Gesmolten chocolade" }
        ],
        correct: 1,
        explanation: {
          en: "Chocolate bloom is the white or grayish coating that appears when fat or sugar crystals rise to the surface due to temperature changes.",
          es: "La floración del chocolate es la capa blanca o grisácea que aparece cuando los cristales de grasa o azúcar suben a la superficie debido a cambios de temperatura.",
          de: "Schokoladenreif ist der weiße oder gräuliche Belag, der entsteht, wenn Fett- oder Zuckerkristalle durch Temperaturänderungen an die Oberfläche steigen.",
          nl: "Chocolade-uitslag is de witte of grijsachtige laag die verschijnt wanneer vet- of suikerkristallen naar de oppervlakte stijgen door temperatuurveranderingen."
        }
      },
      {
        question: {
          en: "Which dessert combines chocolate, coffee, and mascarpone?",
          es: "¿Qué postre combina chocolate, café y mascarpone?",
          de: "Welches Dessert kombiniert Schokolade, Kaffee und Mascarpone?",
          nl: "Welk dessert combineert chocolade, koffie en mascarpone?"
        },
        options: [
          { en: "Chocolate mousse", es: "Mousse de chocolate", de: "Schokoladenmousse", nl: "Chocolademousse" },
          { en: "Tiramisu", es: "Tiramisú", de: "Tiramisu", nl: "Tiramisu" },
          { en: "Chocolate tart", es: "Tarta de chocolate", de: "Schokoladentarte", nl: "Chocoladetaart" },
          { en: "Brownie", es: "Brownie", de: "Brownie", nl: "Brownie" }
        ],
        correct: 1,
        explanation: {
          en: "Tiramisu is an Italian dessert that combines layers of coffee-soaked ladyfingers with mascarpone cream and chocolate.",
          es: "El tiramisú es un postre italiano que combina capas de bizcochos empapados en café con crema de mascarpone y chocolate.",
          de: "Tiramisu ist ein italienisches Dessert, das Schichten von in Kaffee getränkten Löffelbiskuits mit Mascarpone-Creme und Schokolade kombiniert.",
          nl: "Tiramisu is een Italiaans dessert dat lagen van in koffie gedrenkte lange vingers combineert met mascarpone crème en chocolade."
        }
      },
      {
        question: {
          en: "What is tempering in chocolate making?",
          es: "¿Qué es el temperado en la elaboración de chocolate?",
          de: "Was ist Temperieren bei der Schokoladenherstellung?",
          nl: "Wat is tempereren bij het maken van chocolade?"
        },
        options: [
          { en: "Adding spices", es: "Añadir especias", de: "Gewürze hinzufügen", nl: "Kruiden toevoegen" },
          { en: "Controlling temperature for proper crystallization", es: "Controlar la temperatura para una cristalización adecuada", de: "Temperaturkontrolle für richtige Kristallisation", nl: "Temperatuur controleren voor juiste kristallisatie" },
          { en: "Making it sweeter", es: "Hacerlo más dulce", de: "Süßer machen", nl: "Zoeter maken" },
          { en: "Adding milk", es: "Añadir leche", de: "Milch hinzufügen", nl: "Melk toevoegen" }
        ],
        correct: 1,
        explanation: {
          en: "Tempering is the process of heating and cooling chocolate to specific temperatures to ensure proper crystal formation for a glossy finish and good snap.",
          es: "El temperado es el proceso de calentar y enfriar el chocolate a temperaturas específicas para asegurar la formación adecuada de cristales para un acabado brillante y buen chasquido.",
          de: "Temperieren ist der Prozess des Erhitzens und Abkühlens von Schokolade auf bestimmte Temperaturen, um die richtige Kristallbildung für einen glänzenden Finish und guten Bruch zu gewährleisten.",
          nl: "Tempereren is het proces van het verwarmen en afkoelen van chocolade tot specifieke temperaturen om de juiste kristalvorming te verzekeren voor een glanzende afwerking en goede knak."
        }
      },
      {
        question: {
          en: "What gives chocolate its melting point just below body temperature?",
          es: "¿Qué le da al chocolate su punto de fusión justo por debajo de la temperatura corporal?",
          de: "Was gibt Schokolade ihren Schmelzpunkt knapp unter Körpertemperatur?",
          nl: "Wat geeft chocolade zijn smeltpunt net onder lichaamstemperatuur?"
        },
        options: [
          { en: "Sugar content", es: "Contenido de azúcar", de: "Zuckergehalt", nl: "Suikergehalte" },
          { en: "Cocoa butter", es: "Manteca de cacao", de: "Kakaobutter", nl: "Cacaoboter" },
          { en: "Milk powder", es: "Leche en polvo", de: "Milchpulver", nl: "Melkpoeder" },
          { en: "Vanilla", es: "Vainilla", de: "Vanille", nl: "Vanille" }
        ],
        correct: 1,
        explanation: {
          en: "Cocoa butter has a melting point of 34-38°C (93-100°F), just below body temperature, which is why chocolate melts in your mouth.",
          es: "La manteca de cacao tiene un punto de fusión de 34-38°C, justo por debajo de la temperatura corporal, por eso el chocolate se derrite en la boca.",
          de: "Kakaobutter hat einen Schmelzpunkt von 34-38°C, knapp unter Körpertemperatur, deshalb schmilzt Schokolade im Mund.",
          nl: "Cacaoboter heeft een smeltpunt van 34-38°C, net onder lichaamstemperatuur, daarom smelt chocolade in je mond."
        }
      },
      {
        question: {
          en: "Which chocolate dessert is named after a fungus?",
          es: "¿Qué postre de chocolate lleva el nombre de un hongo?",
          de: "Welches Schokoladendessert ist nach einem Pilz benannt?",
          nl: "Welk chocoladedessert is vernoemd naar een schimmel?"
        },
        options: [
          { en: "Brownie", es: "Brownie", de: "Brownie", nl: "Brownie" },
          { en: "Truffle", es: "Trufa", de: "Trüffel", nl: "Truffel" },
          { en: "Mousse", es: "Mousse", de: "Mousse", nl: "Mousse" },
          { en: "Fondant", es: "Fondant", de: "Fondant", nl: "Fondant" }
        ],
        correct: 1,
        explanation: {
          en: "Chocolate truffles are named after the truffle fungus because of their similar appearance to the prized mushroom.",
          es: "Las trufas de chocolate llevan el nombre del hongo trufa debido a su apariencia similar al preciado hongo.",
          de: "Schokoladentrüffel sind nach dem Trüffelpilz benannt wegen ihrer ähnlichen Erscheinung zum wertvollen Pilz.",
          nl: "Chocoladetruffels zijn vernoemd naar de truffelschimmel vanwege hun gelijkende uiterlijk met de gewaardeerde paddenstoel."
        }
      },
      {
        question: {
          en: "What is Dutch process cocoa?",
          es: "¿Qué es el cacao procesado holandés?",
          de: "Was ist niederländisch verarbeiteter Kakao?",
          nl: "Wat is Dutched cacaopoeder?"
        },
        options: [
          { en: "Cocoa from Netherlands", es: "Cacao de los Países Bajos", de: "Kakao aus den Niederlanden", nl: "Cacao uit Nederland" },
          { en: "Cocoa treated with alkali", es: "Cacao tratado con álcali", de: "Mit Alkali behandelter Kakao", nl: "Met alkali behandelde cacao" },
          { en: "Sweetened cocoa", es: "Cacao endulzado", de: "Gesüßter Kakao", nl: "Gezoete cacao" },
          { en: "Raw cocoa", es: "Cacao crudo", de: "Roher Kakao", nl: "Rauwe cacao" }
        ],
        correct: 1,
        explanation: {
          en: "Dutch process cocoa is cocoa powder treated with alkali to neutralize acidity, resulting in a darker color and milder flavor.",
          es: "El cacao procesado holandés es cacao en polvo tratado con álcali para neutralizar la acidez, resultando en un color más oscuro y sabor más suave.",
          de: "Niederländisch verarbeiteter Kakao ist mit Alkali behandeltes Kakaopulver zur Neutralisierung der Säure, was zu einer dunkleren Farbe und milderem Geschmack führt.",
          nl: "Dutched cacaopoeder is cacaopoeder behandeld met alkali om de zuurgraad te neutraliseren, wat resulteert in een donkerdere kleur en mildere smaak."
        }
      },
      {
        question: {
          en: "What is a chocolate soufflé?",
          es: "¿Qué es un soufflé de chocolate?",
          de: "Was ist ein Schokoladen-Soufflé?",
          nl: "Wat is een chocoladesoufflé?"
        },
        options: [
          { en: "A frozen dessert", es: "Un postre congelado", de: "Ein gefrorenes Dessert", nl: "Een bevroren dessert" },
          { en: "A light, risen dessert", es: "Un postre ligero y elevado", de: "Ein leichtes, aufgegangenes Dessert", nl: "Een licht, gerezen dessert" },
          { en: "A chocolate drink", es: "Una bebida de chocolate", de: "Ein Schokoladengetränk", nl: "Een chocoladedrank" },
          { en: "A chocolate bar", es: "Una barra de chocolate", de: "Ein Schokoladenriegel", nl: "Een chocoladereep" }
        ],
        correct: 1,
        explanation: {
          en: "A chocolate soufflé is a light, airy baked dessert that rises dramatically due to beaten egg whites folded into a chocolate base.",
          es: "Un soufflé de chocolate es un postre horneado ligero y aireado que sube dramáticamente debido a las claras de huevo batidas incorporadas a una base de chocolate.",
          de: "Ein Schokoladen-Soufflé ist ein leichtes, luftiges gebackenes Dessert, das durch geschlagenes Eiweiß in einer Schokoladenbasis dramatisch aufgeht.",
          nl: "Een chocoladesoufflé is een licht, luchtig gebakken dessert dat dramatisch rijst door geklopte eiwitten gevouwen in een chocoladebasis."
        }
      },
      {
        question: {
          en: "Which country is the largest producer of cocoa beans?",
          es: "¿Qué país es el mayor productor de granos de cacao?",
          de: "Welches Land ist der größte Produzent von Kakaobohnen?",
          nl: "Welk land is de grootste producent van cacaobonen?"
        },
        options: [
          { en: "Brazil", es: "Brasil", de: "Brasilien", nl: "Brazilië" },
          { en: "Ivory Coast", es: "Costa de Marfil", de: "Elfenbeinküste", nl: "Ivoorkust" },
          { en: "Mexico", es: "México", de: "Mexiko", nl: "Mexico" },
          { en: "Switzerland", es: "Suiza", de: "Schweiz", nl: "Zwitserland" }
        ],
        correct: 1,
        explanation: {
          en: "Ivory Coast (Côte d'Ivoire) is the world's largest producer of cocoa beans, accounting for about 40% of global production.",
          es: "Costa de Marfil es el mayor productor mundial de granos de cacao, representando alrededor del 40% de la producción global.",
          de: "Die Elfenbeinküste ist der weltweit größte Produzent von Kakaobohnen und macht etwa 40% der globalen Produktion aus.",
          nl: "Ivoorkust is 's werelds grootste producent van cacaobonen, goed voor ongeveer 40% van de wereldwijde productie."
        }
      },
      {
        question: {
          en: "What is chocolate couverture?",
          es: "¿Qué es el chocolate de cobertura?",
          de: "Was ist Kuvertüre?",
          nl: "Wat is couverture chocolade?"
        },
        options: [
          { en: "Cheap chocolate", es: "Chocolate barato", de: "Billige Schokolade", nl: "Goedkope chocolade" },
          { en: "High-quality chocolate with extra cocoa butter", es: "Chocolate de alta calidad con manteca de cacao extra", de: "Hochwertige Schokolade mit extra Kakaobutter", nl: "Hoogwaardige chocolade met extra cacaoboter" },
          { en: "Chocolate powder", es: "Chocolate en polvo", de: "Schokoladenpulver", nl: "Chocoladepoeder" },
          { en: "White chocolate only", es: "Solo chocolate blanco", de: "Nur weiße Schokolade", nl: "Alleen witte chocolade" }
        ],
        correct: 1,
        explanation: {
          en: "Couverture is high-quality chocolate with a high cocoa butter content (32-39%), ideal for tempering and professional confectionery.",
          es: "La cobertura es chocolate de alta calidad con alto contenido de manteca de cacao (32-39%), ideal para templar y confitería profesional.",
          de: "Kuvertüre ist hochwertige Schokolade mit hohem Kakaobuttergehalt (32-39%), ideal zum Temperieren und für professionelle Konditorei.",
          nl: "Couverture is hoogwaardige chocolade met een hoog cacaobotergehalte (32-39%), ideaal voor tempereren en professionele banketbakkerij."
        }
      },
      {
        question: {
          en: "What makes a brownie 'fudgy' versus 'cakey'?",
          es: "¿Qué hace que un brownie sea 'fudgy' versus 'esponjoso'?",
          de: "Was macht einen Brownie 'fudgy' versus 'kuchenartig'?",
          nl: "Wat maakt een brownie 'fudgy' versus 'cake-achtig'?"
        },
        options: [
          { en: "Baking time", es: "Tiempo de horneado", de: "Backzeit", nl: "Baktijd" },
          { en: "Chocolate type", es: "Tipo de chocolate", de: "Schokoladenart", nl: "Type chocolade" },
          { en: "Fat to flour ratio", es: "Proporción de grasa a harina", de: "Verhältnis von Fett zu Mehl", nl: "Vet tot meel verhouding" },
          { en: "Oven temperature", es: "Temperatura del horno", de: "Ofentemperatur", nl: "Oventemperatuur" }
        ],
        correct: 2,
        explanation: {
          en: "Fudgy brownies have more fat (butter/chocolate) and less flour, while cakey brownies have more flour and often include leavening agents.",
          es: "Los brownies fudgy tienen más grasa (mantequilla/chocolate) y menos harina, mientras que los esponjosos tienen más harina y a menudo incluyen agentes leudantes.",
          de: "Fudgy Brownies haben mehr Fett (Butter/Schokolade) und weniger Mehl, während kuchenartige Brownies mehr Mehl und oft Treibmittel enthalten.",
          nl: "Fudgy brownies hebben meer vet (boter/chocolade) en minder meel, terwijl cake-achtige brownies meer meel hebben en vaak rijsmiddelen bevatten."
        }
      },
      {
        question: {
          en: "What is the origin of the word 'chocolate'?",
          es: "¿Cuál es el origen de la palabra 'chocolate'?",
          de: "Was ist der Ursprung des Wortes 'Schokolade'?",
          nl: "Wat is de oorsprong van het woord 'chocolade'?"
        },
        options: [
          { en: "French", es: "Francés", de: "Französisch", nl: "Frans" },
          { en: "Italian", es: "Italiano", de: "Italienisch", nl: "Italiaans" },
          { en: "Aztec/Nahuatl", es: "Azteca/Náhuatl", de: "Aztekisch/Nahuatl", nl: "Azteeks/Nahuatl" },
          { en: "English", es: "Inglés", de: "Englisch", nl: "Engels" }
        ],
        correct: 2,
        explanation: {
          en: "The word 'chocolate' comes from the Aztec/Nahuatl word 'xocolatl', meaning 'bitter water'.",
          es: "La palabra 'chocolate' proviene de la palabra azteca/náhuatl 'xocolatl', que significa 'agua amarga'.",
          de: "Das Wort 'Schokolade' stammt vom aztekischen/Nahuatl-Wort 'xocolatl', was 'bitteres Wasser' bedeutet.",
          nl: "Het woord 'chocolade' komt van het Azteekse/Nahuatl woord 'xocolatl', wat 'bitter water' betekent."
        }
      },
      {
        question: {
          en: "What is a chocolate pot de crème?",
          es: "¿Qué es un pot de crème de chocolate?",
          de: "Was ist ein Schokoladen-Pot de Crème?",
          nl: "Wat is een chocolade pot de crème?"
        },
        options: [
          { en: "A chocolate drink", es: "Una bebida de chocolate", de: "Ein Schokoladengetränk", nl: "Een chocoladedrank" },
          { en: "A French custard dessert", es: "Un postre de crema francesa", de: "Ein französisches Puddingdessert", nl: "Een Frans custard dessert" },
          { en: "A chocolate bar", es: "Una barra de chocolate", de: "Ein Schokoladenriegel", nl: "Een chocoladereep" },
          { en: "A chocolate cake", es: "Un pastel de chocolate", de: "Ein Schokoladenkuchen", nl: "Een chocoladecake" }
        ],
        correct: 1,
        explanation: {
          en: "Pot de crème is a French custard dessert, similar to crème brûlée but without the caramelized top, often flavored with chocolate.",
          es: "Pot de crème es un postre de crema francés, similar a la crème brûlée pero sin la parte superior caramelizada, a menudo con sabor a chocolate.",
          de: "Pot de Crème ist ein französisches Puddingdessert, ähnlich wie Crème Brûlée aber ohne karamellisierte Oberfläche, oft mit Schokoladengeschmack.",
          nl: "Pot de crème is een Frans custard dessert, vergelijkbaar met crème brûlée maar zonder de gekaramelliseerde top, vaak met chocoladesmaak."
        }
      },
      {
        question: {
          en: "What is ruby chocolate?",
          es: "¿Qué es el chocolate rubí?",
          de: "Was ist Ruby-Schokolade?",
          nl: "Wat is ruby chocolade?"
        },
        options: [
          { en: "Chocolate with food coloring", es: "Chocolate con colorante", de: "Schokolade mit Lebensmittelfarbe", nl: "Chocolade met kleurstof" },
          { en: "A naturally pink chocolate from ruby cocoa beans", es: "Un chocolate naturalmente rosa de granos de cacao rubí", de: "Eine natürlich rosa Schokolade aus Ruby-Kakaobohnen", nl: "Een natuurlijk roze chocolade van ruby cacaobonen" },
          { en: "Strawberry flavored chocolate", es: "Chocolate con sabor a fresa", de: "Schokolade mit Erdbeergeschmack", nl: "Chocolade met aardbeiensmaak" },
          { en: "Very expensive chocolate", es: "Chocolate muy caro", de: "Sehr teure Schokolade", nl: "Zeer dure chocolade" }
        ],
        correct: 1,
        explanation: {
          en: "Ruby chocolate is the fourth type of chocolate (after dark, milk, and white), made from ruby cocoa beans with a natural pink color and fruity taste.",
          es: "El chocolate rubí es el cuarto tipo de chocolate (después del negro, con leche y blanco), hecho de granos de cacao rubí con color rosa natural y sabor afrutado.",
          de: "Ruby-Schokolade ist die vierte Schokoladensorte (nach dunkel, Milch und weiß), hergestellt aus Ruby-Kakaobohnen mit natürlicher rosa Farbe und fruchtigem Geschmack.",
          nl: "Ruby chocolade is het vierde type chocolade (na puur, melk en wit), gemaakt van ruby cacaobonen met een natuurlijke roze kleur en fruitige smaak."
        }
      },
      {
        question: {
          en: "What temperature should dark chocolate be stored at?",
          es: "¿A qué temperatura debe almacenarse el chocolate negro?",
          de: "Bei welcher Temperatur sollte dunkle Schokolade gelagert werden?",
          nl: "Op welke temperatuur moet pure chocolade bewaard worden?"
        },
        options: [
          { en: "0-5°C (32-41°F)", es: "0-5°C", de: "0-5°C", nl: "0-5°C" },
          { en: "15-18°C (59-64°F)", es: "15-18°C", de: "15-18°C", nl: "15-18°C" },
          { en: "25-30°C (77-86°F)", es: "25-30°C", de: "25-30°C", nl: "25-30°C" },
          { en: "-18°C (0°F)", es: "-18°C", de: "-18°C", nl: "-18°C" }
        ],
        correct: 1,
        explanation: {
          en: "Dark chocolate should be stored at 15-18°C (59-64°F) in a cool, dry place away from light and strong odors.",
          es: "El chocolate negro debe almacenarse a 15-18°C en un lugar fresco y seco, lejos de la luz y olores fuertes.",
          de: "Dunkle Schokolade sollte bei 15-18°C an einem kühlen, trockenen Ort ohne Licht und starke Gerüche gelagert werden.",
          nl: "Pure chocolade moet bewaard worden bij 15-18°C op een koele, droge plaats weg van licht en sterke geuren."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else {
    window.chocolateDessertsLevel2 = level2;
  }
})();