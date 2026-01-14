// Chocolate Desserts Quiz - Level 2
(function() {
  const level2 = {
    name: {
          "en": "Chocolate Desserts - Easy",
          "es": "Postres de Chocolate - Fácil",
          "de": "Schokoladendesserts - Einfach",
          "nl": "Chocoladedesserts - Makkelijk"
    },
    questions: [
      {
        question: {
                  "en": "What is the name of the tree that produces cocoa beans?",
                  "es": "¿Cómo se llama el árbol que produce granos de cacao?",
                  "de": "Wie heißt der Baum, der Kakaobohnen produziert?",
                  "nl": "Hoe heet de boom die cacaobonen produceert?"
        },
        options: [
        {
                  "en": "Cocoa palm",
                  "es": "Palma de cacao",
                  "de": "Kakaopalme",
                  "nl": "Cacaopalm"
        },
        {
                  "en": "Cacao tree",
                  "es": "Árbol de cacao",
                  "de": "Kakaobaum",
                  "nl": "Cacaoboom"
        },
        {
                  "en": "Chocolate tree",
                  "es": "Árbol de chocolate",
                  "de": "Schokoladenbaum",
                  "nl": "Chocoladeboom"
        },
        {
                  "en": "Coffee tree",
                  "es": "Árbol de café",
                  "de": "Kaffeebaum",
                  "nl": "Koffieboom"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The cacao tree (Theobroma cacao) produces cacao pods containing cocoa beans used to make chocolate.",
                  "es": "El árbol de cacao (Theobroma cacao) produce vainas de cacao que contienen granos de cacao utilizados para hacer chocolate.",
                  "de": "Der Kakaobaum (Theobroma cacao) produziert Kakaoschoten mit Kakaobohnen zur Schokoladenherstellung.",
                  "nl": "De cacaoboom (Theobroma cacao) produceert cacaopeulen met cacaobonen die gebruikt worden om chocolade te maken."
        }
      },
      {
        question: {
                  "en": "Which chocolate dessert is traditionally served warm with a liquid center?",
                  "es": "¿Qué postre de chocolate se sirve tradicionalmente caliente con centro líquido?",
                  "de": "Welches Schokoladendessert wird traditionell warm mit flüssigem Kern serviert?",
                  "nl": "Welk chocoladedessert wordt traditioneel warm geserveerd met een vloeibare kern?"
        },
        options: [
        {
                  "en": "Chocolate pudding",
                  "es": "Pudín de chocolate",
                  "de": "Schokoladenpudding",
                  "nl": "Chocoladepudding"
        },
        {
                  "en": "Chocolate lava cake",
                  "es": "Pastel de lava de chocolate",
                  "de": "Schokoladen-Lavakuchen",
                  "nl": "Chocolade lavacake"
        },
        {
                  "en": "Chocolate truffle",
                  "es": "Trufa de chocolate",
                  "de": "Schokoladentrüffel",
                  "nl": "Chocoladetruffel"
        },
        {
                  "en": "Chocolate mousse",
                  "es": "Mousse de chocolate",
                  "de": "Schokoladenmousse",
                  "nl": "Chocolademousse"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Chocolate lava cake, also called molten chocolate cake, has a warm liquid chocolate center that flows out when cut.",
                  "es": "El pastel de lava de chocolate, también llamado pastel de chocolate fundido, tiene un centro de chocolate líquido caliente que fluye al cortarlo.",
                  "de": "Schokoladen-Lavakuchen, auch geschmolzener Schokoladenkuchen genannt, hat einen warmen flüssigen Schokoladenkern, der beim Anschneiden herausfließt.",
                  "nl": "Chocolade lavacake, ook wel gesmolten chocoladecake genoemd, heeft een warme vloeibare chocoladekern die eruit stroomt bij het aansnijden."
        }
      },
      {
        question: {
                  "en": "What percentage defines milk chocolate?",
                  "es": "¿Qué porcentaje define el chocolate con leche?",
                  "de": "Welcher Prozentsatz definiert Milchschokolade?",
                  "nl": "Welk percentage definieert melkchocolade?"
        },
        options: [
        {
                  "en": "At least 50% cocoa",
                  "es": "Al menos 50% cacao",
                  "de": "Mindestens 50% Kakao",
                  "nl": "Minstens 50% cacao"
        },
        {
                  "en": "At least 25% cocoa",
                  "es": "Al menos 25% cacao",
                  "de": "Mindestens 25% Kakao",
                  "nl": "Minstens 25% cacao"
        },
        {
                  "en": "At least 10% cocoa",
                  "es": "Al menos 10% cacao",
                  "de": "Mindestens 10% Kakao",
                  "nl": "Minstens 10% cacao"
        },
        {
                  "en": "At least 70% cocoa",
                  "es": "Al menos 70% cacao",
                  "de": "Mindestens 70% Kakao",
                  "nl": "Minstens 70% cacao"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Milk chocolate must contain at least 25% cocoa solids, plus milk powder or condensed milk.",
                  "es": "El chocolate con leche debe contener al menos 25% de sólidos de cacao, más leche en polvo o leche condensada.",
                  "de": "Milchschokolade muss mindestens 25% Kakaofeststoffe enthalten, plus Milchpulver oder Kondensmilch.",
                  "nl": "Melkchocolade moet minstens 25% cacaobestanddelen bevatten, plus melkpoeder of gecondenseerde melk."
        }
      },
      {
        question: {
                  "en": "What is ganache made from?",
                  "es": "¿De qué está hecho el ganache?",
                  "de": "Woraus wird Ganache hergestellt?",
                  "nl": "Waar wordt ganache van gemaakt?"
        },
        options: [
        {
                  "en": "Chocolate and butter",
                  "es": "Chocolate y mantequilla",
                  "de": "Schokolade und Butter",
                  "nl": "Chocolade en boter"
        },
        {
                  "en": "Chocolate and milk",
                  "es": "Chocolate y leche",
                  "de": "Schokolade und Milch",
                  "nl": "Chocolade en melk"
        },
        {
                  "en": "Chocolate and cream",
                  "es": "Chocolate y crema",
                  "de": "Schokolade und Sahne",
                  "nl": "Chocolade en room"
        },
        {
                  "en": "Chocolate and eggs",
                  "es": "Chocolate y huevos",
                  "de": "Schokolade und Eier",
                  "nl": "Chocolade en eieren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Ganache is made by heating cream and pouring it over chopped chocolate, creating a smooth mixture.",
                  "es": "El ganache se hace calentando crema y vertiéndola sobre chocolate picado, creando una mezcla suave.",
                  "de": "Ganache wird hergestellt, indem Sahne erhitzt und über gehackte Schokolade gegossen wird, wodurch eine glatte Mischung entsteht.",
                  "nl": "Ganache wordt gemaakt door room te verwarmen en over gehakte chocolade te gieten, waardoor een glad mengsel ontstaat."
        }
      },
      {
        question: {
                  "en": "Which country invented the brownie?",
                  "es": "¿Qué país inventó el brownie?",
                  "de": "Welches Land hat den Brownie erfunden?",
                  "nl": "Welk land heeft de brownie uitgevonden?"
        },
        options: [
        {
                  "en": "Belgium",
                  "es": "Bélgica",
                  "de": "Belgien",
                  "nl": "België"
        },
        {
                  "en": "Switzerland",
                  "es": "Suiza",
                  "de": "Schweiz",
                  "nl": "Zwitserland"
        },
        {
                  "en": "United States",
                  "es": "Estados Unidos",
                  "de": "Vereinigte Staaten",
                  "nl": "Verenigde Staten"
        },
        {
                  "en": "France",
                  "es": "Francia",
                  "de": "Frankreich",
                  "nl": "Frankrijk"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The brownie was invented in the United States in the late 19th century, first appearing at the 1893 Chicago World's Fair.",
                  "es": "El brownie fue inventado en Estados Unidos a finales del siglo XIX, apareciendo por primera vez en la Feria Mundial de Chicago de 1893.",
                  "de": "Der Brownie wurde Ende des 19. Jahrhunderts in den Vereinigten Staaten erfunden und erschien erstmals auf der Weltausstellung 1893 in Chicago.",
                  "nl": "De brownie werd uitgevonden in de Verenigde Staten aan het einde van de 19e eeuw, voor het eerst verschijnend op de Wereldtentoonstelling van 1893 in Chicago."
        }
      },
      {
        question: {
                  "en": "What is the difference between cocoa and cacao?",
                  "es": "¿Cuál es la diferencia entre cocoa y cacao?",
                  "de": "Was ist der Unterschied zwischen Kakao und Kakao?",
                  "nl": "Wat is het verschil tussen cocoa en cacao?"
        },
        options: [
        {
                  "en": "Cocoa is raw, cacao is processed",
                  "es": "La cocoa es cruda, el cacao es procesado",
                  "de": "Kakao ist roh, Kakao ist verarbeitet",
                  "nl": "Cocoa is rauw, cacao is verwerkt"
        },
        {
                  "en": "No difference",
                  "es": "No hay diferencia",
                  "de": "Kein Unterschied",
                  "nl": "Geen verschil"
        },
        {
                  "en": "Different plants",
                  "es": "Plantas diferentes",
                  "de": "Verschiedene Pflanzen",
                  "nl": "Verschillende planten"
        },
        {
                  "en": "Cacao is raw, cocoa is processed",
                  "es": "El cacao es crudo, la cocoa es procesada",
                  "de": "Kakao ist roh, Kakao ist verarbeitet",
                  "nl": "Cacao is rauw, cocoa is verwerkt"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Cacao refers to the raw, unprocessed beans, while cocoa is the processed powder made from roasted cacao beans.",
                  "es": "Cacao se refiere a los granos crudos sin procesar, mientras que cocoa es el polvo procesado hecho de granos de cacao tostados.",
                  "de": "Kakao bezieht sich auf die rohen, unverarbeiteten Bohnen, während Kakao das verarbeitete Pulver aus gerösteten Kakaobohnen ist.",
                  "nl": "Cacao verwijst naar de rauwe, onverwerkte bonen, terwijl cocoa het verwerkte poeder is gemaakt van geroosterde cacaobonen."
        }
      },
      {
        question: {
                  "en": "What is chocolate bloom?",
                  "es": "¿Qué es la floración del chocolate?",
                  "de": "Was ist Schokoladenreif?",
                  "nl": "Wat is chocolade-uitslag?"
        },
        options: [
        {
                  "en": "Chocolate flowers",
                  "es": "Flores de chocolate",
                  "de": "Schokoladenblumen",
                  "nl": "Chocoladebloemen"
        },
        {
                  "en": "White coating on chocolate",
                  "es": "Capa blanca en el chocolate",
                  "de": "Weißer Belag auf Schokolade",
                  "nl": "Witte laag op chocolade"
        },
        {
                  "en": "Melted chocolate",
                  "es": "Chocolate derretido",
                  "de": "Geschmolzene Schokolade",
                  "nl": "Gesmolten chocolade"
        },
        {
                  "en": "Chocolate plant growth",
                  "es": "Crecimiento de la planta de chocolate",
                  "de": "Schokoladenpflanzenwachstum",
                  "nl": "Chocoladeplant groei"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Chocolate bloom is the white or grayish coating that appears when fat or sugar crystals rise to the surface due to temperature changes.",
                  "es": "La floración del chocolate es la capa blanca o grisácea que aparece cuando los cristales de grasa o azúcar suben a la superficie debido a cambios de temperatura.",
                  "de": "Schokoladenreif ist der weiße oder gräuliche Belag, der entsteht, wenn Fett- oder Zuckerkristalle durch Temperaturänderungen an die Oberfläche steigen.",
                  "nl": "Chocolade-uitslag is de witte of grijsachtige laag die verschijnt wanneer vet- of suikerkristallen naar de oppervlakte stijgen door temperatuurveranderingen."
        }
      },
      {
        question: {
                  "en": "Which dessert combines chocolate, coffee, and mascarpone?",
                  "es": "¿Qué postre combina chocolate, café y mascarpone?",
                  "de": "Welches Dessert kombiniert Schokolade, Kaffee und Mascarpone?",
                  "nl": "Welk dessert combineert chocolade, koffie en mascarpone?"
        },
        options: [
        {
                  "en": "Chocolate tart",
                  "es": "Tarta de chocolate",
                  "de": "Schokoladentarte",
                  "nl": "Chocoladetaart"
        },
        {
                  "en": "Tiramisu",
                  "es": "Tiramisú",
                  "de": "Tiramisu",
                  "nl": "Tiramisu"
        },
        {
                  "en": "Brownie",
                  "es": "Brownie",
                  "de": "Brownie",
                  "nl": "Brownie"
        },
        {
                  "en": "Chocolate mousse",
                  "es": "Mousse de chocolate",
                  "de": "Schokoladenmousse",
                  "nl": "Chocolademousse"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Tiramisu is an Italian dessert that combines layers of coffee-soaked ladyfingers with mascarpone cream and chocolate.",
                  "es": "El tiramisú es un postre italiano que combina capas de bizcochos empapados en café con crema de mascarpone y chocolate.",
                  "de": "Tiramisu ist ein italienisches Dessert, das Schichten von in Kaffee getränkten Löffelbiskuits mit Mascarpone-Creme und Schokolade kombiniert.",
                  "nl": "Tiramisu is een Italiaans dessert dat lagen van in koffie gedrenkte lange vingers combineert met mascarpone crème en chocolade."
        }
      },
      {
        question: {
                  "en": "What is tempering in chocolate making?",
                  "es": "¿Qué es el temperado en la elaboración de chocolate?",
                  "de": "Was ist Temperieren bei der Schokoladenherstellung?",
                  "nl": "Wat is tempereren bij het maken van chocolade?"
        },
        options: [
        {
                  "en": "Adding spices",
                  "es": "Añadir especias",
                  "de": "Gewürze hinzufügen",
                  "nl": "Kruiden toevoegen"
        },
        {
                  "en": "Adding milk",
                  "es": "Añadir leche",
                  "de": "Milch hinzufügen",
                  "nl": "Melk toevoegen"
        },
        {
                  "en": "Controlling temperature for proper crystallization",
                  "es": "Controlar la temperatura para una cristalización adecuada",
                  "de": "Temperaturkontrolle für richtige Kristallisation",
                  "nl": "Temperatuur controleren voor juiste kristallisatie"
        },
        {
                  "en": "Making it sweeter",
                  "es": "Hacerlo más dulce",
                  "de": "Süßer machen",
                  "nl": "Zoeter maken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Tempering is the process of heating and cooling chocolate to specific temperatures to ensure proper crystal formation for a glossy finish and good snap.",
                  "es": "El temperado es el proceso de calentar y enfriar el chocolate a temperaturas específicas para asegurar la formación adecuada de cristales para un acabado brillante y buen chasquido.",
                  "de": "Temperieren ist der Prozess des Erhitzens und Abkühlens von Schokolade auf bestimmte Temperaturen, um die richtige Kristallbildung für einen glänzenden Finish und guten Bruch zu gewährleisten.",
                  "nl": "Tempereren is het proces van het verwarmen en afkoelen van chocolade tot specifieke temperaturen om de juiste kristalvorming te verzekeren voor een glanzende afwerking en goede knak."
        }
      },
      {
        question: {
                  "en": "What gives chocolate its melting point just below body temperature?",
                  "es": "¿Qué le da al chocolate su punto de fusión justo por debajo de la temperatura corporal?",
                  "de": "Was gibt Schokolade ihren Schmelzpunkt knapp unter Körpertemperatur?",
                  "nl": "Wat geeft chocolade zijn smeltpunt net onder lichaamstemperatuur?"
        },
        options: [
        {
                  "en": "Vanilla",
                  "es": "Vainilla",
                  "de": "Vanille",
                  "nl": "Vanille"
        },
        {
                  "en": "Cocoa butter",
                  "es": "Manteca de cacao",
                  "de": "Kakaobutter",
                  "nl": "Cacaoboter"
        },
        {
                  "en": "Milk powder",
                  "es": "Leche en polvo",
                  "de": "Milchpulver",
                  "nl": "Melkpoeder"
        },
        {
                  "en": "Sugar content",
                  "es": "Contenido de azúcar",
                  "de": "Zuckergehalt",
                  "nl": "Suikergehalte"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Cocoa butter has a melting point of 34-38°C (93-100°F), just below body temperature, which is why chocolate melts in your mouth.",
                  "es": "La manteca de cacao tiene un punto de fusión de 34-38°C, justo por debajo de la temperatura corporal, por eso el chocolate se derrite en la boca.",
                  "de": "Kakaobutter hat einen Schmelzpunkt von 34-38°C, knapp unter Körpertemperatur, deshalb schmilzt Schokolade im Mund.",
                  "nl": "Cacaoboter heeft een smeltpunt van 34-38°C, net onder lichaamstemperatuur, daarom smelt chocolade in je mond."
        }
      },
      {
        question: {
                  "en": "Which chocolate dessert is named after a fungus?",
                  "es": "¿Qué postre de chocolate lleva el nombre de un hongo?",
                  "de": "Welches Schokoladendessert ist nach einem Pilz benannt?",
                  "nl": "Welk chocoladedessert is vernoemd naar een schimmel?"
        },
        options: [
        {
                  "en": "Fondant",
                  "es": "Fondant",
                  "de": "Fondant",
                  "nl": "Fondant"
        },
        {
                  "en": "Brownie",
                  "es": "Brownie",
                  "de": "Brownie",
                  "nl": "Brownie"
        },
        {
                  "en": "Truffle",
                  "es": "Trufa",
                  "de": "Trüffel",
                  "nl": "Truffel"
        },
        {
                  "en": "Mousse",
                  "es": "Mousse",
                  "de": "Mousse",
                  "nl": "Mousse"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Chocolate truffles are named after the truffle fungus because of their similar appearance to the prized mushroom.",
                  "es": "Las trufas de chocolate llevan el nombre del hongo trufa debido a su apariencia similar al preciado hongo.",
                  "de": "Schokoladentrüffel sind nach dem Trüffelpilz benannt wegen ihrer ähnlichen Erscheinung zum wertvollen Pilz.",
                  "nl": "Chocoladetruffels zijn vernoemd naar de truffelschimmel vanwege hun gelijkende uiterlijk met de gewaardeerde paddenstoel."
        }
      },
      {
        question: {
                  "en": "What is Dutch process cocoa?",
                  "es": "¿Qué es el cacao procesado holandés?",
                  "de": "Was ist niederländisch verarbeiteter Kakao?",
                  "nl": "Wat is Dutched cacaopoeder?"
        },
        options: [
        {
                  "en": "Raw cocoa",
                  "es": "Cacao crudo",
                  "de": "Roher Kakao",
                  "nl": "Rauwe cacao"
        },
        {
                  "en": "Cocoa from Netherlands",
                  "es": "Cacao de los Países Bajos",
                  "de": "Kakao aus den Niederlanden",
                  "nl": "Cacao uit Nederland"
        },
        {
                  "en": "Sweetened cocoa",
                  "es": "Cacao endulzado",
                  "de": "Gesüßter Kakao",
                  "nl": "Gezoete cacao"
        },
        {
                  "en": "Cocoa treated with alkali",
                  "es": "Cacao tratado con álcali",
                  "de": "Mit Alkali behandelter Kakao",
                  "nl": "Met alkali behandelde cacao"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Dutch process cocoa is cocoa powder treated with alkali to neutralize acidity, resulting in a darker color and milder flavor.",
                  "es": "El cacao procesado holandés es cacao en polvo tratado con álcali para neutralizar la acidez, resultando en un color más oscuro y sabor más suave.",
                  "de": "Niederländisch verarbeiteter Kakao ist mit Alkali behandeltes Kakaopulver zur Neutralisierung der Säure, was zu einer dunkleren Farbe und milderem Geschmack führt.",
                  "nl": "Dutched cacaopoeder is cacaopoeder behandeld met alkali om de zuurgraad te neutraliseren, wat resulteert in een donkerdere kleur en mildere smaak."
        }
      },
      {
        question: {
                  "en": "What is a chocolate soufflé?",
                  "es": "¿Qué es un soufflé de chocolate?",
                  "de": "Was ist ein Schokoladen-Soufflé?",
                  "nl": "Wat is een chocoladesoufflé?"
        },
        options: [
        {
                  "en": "A frozen dessert",
                  "es": "Un postre congelado",
                  "de": "Ein gefrorenes Dessert",
                  "nl": "Een bevroren dessert"
        },
        {
                  "en": "A chocolate drink",
                  "es": "Una bebida de chocolate",
                  "de": "Ein Schokoladengetränk",
                  "nl": "Een chocoladedrank"
        },
        {
                  "en": "A chocolate bar",
                  "es": "Una barra de chocolate",
                  "de": "Ein Schokoladenriegel",
                  "nl": "Een chocoladereep"
        },
        {
                  "en": "A light, risen dessert",
                  "es": "Un postre ligero y elevado",
                  "de": "Ein leichtes, aufgegangenes Dessert",
                  "nl": "Een licht, gerezen dessert"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A chocolate soufflé is a light, airy baked dessert that rises dramatically due to beaten egg whites folded into a chocolate base.",
                  "es": "Un soufflé de chocolate es un postre horneado ligero y aireado que sube dramáticamente debido a las claras de huevo batidas incorporadas a una base de chocolate.",
                  "de": "Ein Schokoladen-Soufflé ist ein leichtes, luftiges gebackenes Dessert, das durch geschlagenes Eiweiß in einer Schokoladenbasis dramatisch aufgeht.",
                  "nl": "Een chocoladesoufflé is een licht, luchtig gebakken dessert dat dramatisch rijst door geklopte eiwitten gevouwen in een chocoladebasis."
        }
      },
      {
        question: {
                  "en": "Which country is the largest producer of cocoa beans?",
                  "es": "¿Qué país es el mayor productor de granos de cacao?",
                  "de": "Welches Land ist der größte Produzent von Kakaobohnen?",
                  "nl": "Welk land is de grootste producent van cacaobonen?"
        },
        options: [
        {
                  "en": "Ivory Coast",
                  "es": "Costa de Marfil",
                  "de": "Elfenbeinküste",
                  "nl": "Ivoorkust"
        },
        {
                  "en": "Mexico",
                  "es": "México",
                  "de": "Mexiko",
                  "nl": "Mexico"
        },
        {
                  "en": "Brazil",
                  "es": "Brasil",
                  "de": "Brasilien",
                  "nl": "Brazilië"
        },
        {
                  "en": "Switzerland",
                  "es": "Suiza",
                  "de": "Schweiz",
                  "nl": "Zwitserland"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Ivory Coast (Côte d'Ivoire) is the world's largest producer of cocoa beans, accounting for about 40% of global production.",
                  "es": "Costa de Marfil es el mayor productor mundial de granos de cacao, representando alrededor del 40% de la producción global.",
                  "de": "Die Elfenbeinküste ist der weltweit größte Produzent von Kakaobohnen und macht etwa 40% der globalen Produktion aus.",
                  "nl": "Ivoorkust is 's werelds grootste producent van cacaobonen, goed voor ongeveer 40% van de wereldwijde productie."
        }
      },
      {
        question: {
                  "en": "What is chocolate couverture?",
                  "es": "¿Qué es el chocolate de cobertura?",
                  "de": "Was ist Kuvertüre?",
                  "nl": "Wat is couverture chocolade?"
        },
        options: [
        {
                  "en": "White chocolate only",
                  "es": "Solo chocolate blanco",
                  "de": "Nur weiße Schokolade",
                  "nl": "Alleen witte chocolade"
        },
        {
                  "en": "High-quality chocolate with extra cocoa butter",
                  "es": "Chocolate de alta calidad con manteca de cacao extra",
                  "de": "Hochwertige Schokolade mit extra Kakaobutter",
                  "nl": "Hoogwaardige chocolade met extra cacaoboter"
        },
        {
                  "en": "Cheap chocolate",
                  "es": "Chocolate barato",
                  "de": "Billige Schokolade",
                  "nl": "Goedkope chocolade"
        },
        {
                  "en": "Chocolate powder",
                  "es": "Chocolate en polvo",
                  "de": "Schokoladenpulver",
                  "nl": "Chocoladepoeder"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Couverture is high-quality chocolate with a high cocoa butter content (32-39%), ideal for tempering and professional confectionery.",
                  "es": "La cobertura es chocolate de alta calidad con alto contenido de manteca de cacao (32-39%), ideal para templar y confitería profesional.",
                  "de": "Kuvertüre ist hochwertige Schokolade mit hohem Kakaobuttergehalt (32-39%), ideal zum Temperieren und für professionelle Konditorei.",
                  "nl": "Couverture is hoogwaardige chocolade met een hoog cacaobotergehalte (32-39%), ideaal voor tempereren en professionele banketbakkerij."
        }
      },
      {
        question: {
                  "en": "What makes a brownie 'fudgy' versus 'cakey'?",
                  "es": "¿Qué hace que un brownie sea 'fudgy' versus 'esponjoso'?",
                  "de": "Was macht einen Brownie 'fudgy' versus 'kuchenartig'?",
                  "nl": "Wat maakt een brownie 'fudgy' versus 'cake-achtig'?"
        },
        options: [
        {
                  "en": "Fat to flour ratio",
                  "es": "Proporción de grasa a harina",
                  "de": "Verhältnis von Fett zu Mehl",
                  "nl": "Vet tot meel verhouding"
        },
        {
                  "en": "Baking time",
                  "es": "Tiempo de horneado",
                  "de": "Backzeit",
                  "nl": "Baktijd"
        },
        {
                  "en": "Oven temperature",
                  "es": "Temperatura del horno",
                  "de": "Ofentemperatur",
                  "nl": "Oventemperatuur"
        },
        {
                  "en": "Chocolate type",
                  "es": "Tipo de chocolate",
                  "de": "Schokoladenart",
                  "nl": "Type chocolade"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Fudgy brownies have more fat (butter/chocolate) and less flour, while cakey brownies have more flour and often include leavening agents.",
                  "es": "Los brownies fudgy tienen más grasa (mantequilla/chocolate) y menos harina, mientras que los esponjosos tienen más harina y a menudo incluyen agentes leudantes.",
                  "de": "Fudgy Brownies haben mehr Fett (Butter/Schokolade) und weniger Mehl, während kuchenartige Brownies mehr Mehl und oft Treibmittel enthalten.",
                  "nl": "Fudgy brownies hebben meer vet (boter/chocolade) en minder meel, terwijl cake-achtige brownies meer meel hebben en vaak rijsmiddelen bevatten."
        }
      },
      {
        question: {
                  "en": "What is the origin of the word 'chocolate'?",
                  "es": "¿Cuál es el origen de la palabra 'chocolate'?",
                  "de": "Was ist der Ursprung des Wortes 'Schokolade'?",
                  "nl": "Wat is de oorsprong van het woord 'chocolade'?"
        },
        options: [
        {
                  "en": "Italian",
                  "es": "Italiano",
                  "de": "Italienisch",
                  "nl": "Italiaans"
        },
        {
                  "en": "Aztec/Nahuatl",
                  "es": "Azteca/Náhuatl",
                  "de": "Aztekisch/Nahuatl",
                  "nl": "Azteeks/Nahuatl"
        },
        {
                  "en": "English",
                  "es": "Inglés",
                  "de": "Englisch",
                  "nl": "Engels"
        },
        {
                  "en": "French",
                  "es": "Francés",
                  "de": "Französisch",
                  "nl": "Frans"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The word 'chocolate' comes from the Aztec/Nahuatl word 'xocolatl', meaning 'bitter water'.",
                  "es": "La palabra 'chocolate' proviene de la palabra azteca/náhuatl 'xocolatl', que significa 'agua amarga'.",
                  "de": "Das Wort 'Schokolade' stammt vom aztekischen/Nahuatl-Wort 'xocolatl', was 'bitteres Wasser' bedeutet.",
                  "nl": "Het woord 'chocolade' komt van het Azteekse/Nahuatl woord 'xocolatl', wat 'bitter water' betekent."
        }
      },
      {
        question: {
                  "en": "What is a chocolate pot de crème?",
                  "es": "¿Qué es un pot de crème de chocolate?",
                  "de": "Was ist ein Schokoladen-Pot de Crème?",
                  "nl": "Wat is een chocolade pot de crème?"
        },
        options: [
        {
                  "en": "A chocolate cake",
                  "es": "Un pastel de chocolate",
                  "de": "Ein Schokoladenkuchen",
                  "nl": "Een chocoladecake"
        },
        {
                  "en": "A French custard dessert",
                  "es": "Un postre de crema francesa",
                  "de": "Ein französisches Puddingdessert",
                  "nl": "Een Frans custard dessert"
        },
        {
                  "en": "A chocolate bar",
                  "es": "Una barra de chocolate",
                  "de": "Ein Schokoladenriegel",
                  "nl": "Een chocoladereep"
        },
        {
                  "en": "A chocolate drink",
                  "es": "Una bebida de chocolate",
                  "de": "Ein Schokoladengetränk",
                  "nl": "Een chocoladedrank"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Pot de crème is a French custard dessert, similar to crème brûlée but without the caramelized top, often flavored with chocolate.",
                  "es": "Pot de crème es un postre de crema francés, similar a la crème brûlée pero sin la parte superior caramelizada, a menudo con sabor a chocolate.",
                  "de": "Pot de Crème ist ein französisches Puddingdessert, ähnlich wie Crème Brûlée aber ohne karamellisierte Oberfläche, oft mit Schokoladengeschmack.",
                  "nl": "Pot de crème is een Frans custard dessert, vergelijkbaar met crème brûlée maar zonder de gekaramelliseerde top, vaak met chocoladesmaak."
        }
      },
      {
        question: {
                  "en": "What is ruby chocolate?",
                  "es": "¿Qué es el chocolate rubí?",
                  "de": "Was ist Ruby-Schokolade?",
                  "nl": "Wat is ruby chocolade?"
        },
        options: [
        {
                  "en": "Very expensive chocolate",
                  "es": "Chocolate muy caro",
                  "de": "Sehr teure Schokolade",
                  "nl": "Zeer dure chocolade"
        },
        {
                  "en": "A naturally pink chocolate from ruby cocoa beans",
                  "es": "Un chocolate naturalmente rosa de granos de cacao rubí",
                  "de": "Eine natürlich rosa Schokolade aus Ruby-Kakaobohnen",
                  "nl": "Een natuurlijk roze chocolade van ruby cacaobonen"
        },
        {
                  "en": "Strawberry flavored chocolate",
                  "es": "Chocolate con sabor a fresa",
                  "de": "Schokolade mit Erdbeergeschmack",
                  "nl": "Chocolade met aardbeiensmaak"
        },
        {
                  "en": "Chocolate with food coloring",
                  "es": "Chocolate con colorante",
                  "de": "Schokolade mit Lebensmittelfarbe",
                  "nl": "Chocolade met kleurstof"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Ruby chocolate is the fourth type of chocolate (after dark, milk, and white), made from ruby cocoa beans with a natural pink color and fruity taste.",
                  "es": "El chocolate rubí es el cuarto tipo de chocolate (después del negro, con leche y blanco), hecho de granos de cacao rubí con color rosa natural y sabor afrutado.",
                  "de": "Ruby-Schokolade ist die vierte Schokoladensorte (nach dunkel, Milch und weiß), hergestellt aus Ruby-Kakaobohnen mit natürlicher rosa Farbe und fruchtigem Geschmack.",
                  "nl": "Ruby chocolade is het vierde type chocolade (na puur, melk en wit), gemaakt van ruby cacaobonen met een natuurlijke roze kleur en fruitige smaak."
        }
      },
      {
        question: {
                  "en": "What temperature should dark chocolate be stored at?",
                  "es": "¿A qué temperatura debe almacenarse el chocolate negro?",
                  "de": "Bei welcher Temperatur sollte dunkle Schokolade gelagert werden?",
                  "nl": "Op welke temperatuur moet pure chocolade bewaard worden?"
        },
        options: [
        {
                  "en": "-18°C (0°F)",
                  "es": "-18°C",
                  "de": "-18°C",
                  "nl": "-18°C"
        },
        {
                  "en": "0-5°C (32-41°F)",
                  "es": "0-5°C",
                  "de": "0-5°C",
                  "nl": "0-5°C"
        },
        {
                  "en": "15-18°C (59-64°F)",
                  "es": "15-18°C",
                  "de": "15-18°C",
                  "nl": "15-18°C"
        },
        {
                  "en": "25-30°C (77-86°F)",
                  "es": "25-30°C",
                  "de": "25-30°C",
                  "nl": "25-30°C"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Dark chocolate should be stored at 15-18°C (59-64°F) in a cool, dry place away from light and strong odors.",
                  "es": "El chocolate negro debe almacenarse a 15-18°C en un lugar fresco y seco, lejos de la luz y olores fuertes.",
                  "de": "Dunkle Schokolade sollte bei 15-18°C an einem kühlen, trockenen Ort ohne Licht und starke Gerüche gelagert werden.",
                  "nl": "Pure chocolade moet bewaard worden bij 15-18°C op een koele, droge plaats weg van licht en sterke geuren."
        }
      },
      {
        question: {
                  "en": "What is ganache made from?",
                  "es": "What is ganache made from?",
                  "de": "What is ganache made from?",
                  "nl": "What is ganache made from?"
        },
        options: [
        {
                  "en": "Chocolate and butter",
                  "es": "Chocolate and butter",
                  "de": "Chocolate and butter",
                  "nl": "Chocolate and butter"
        },
        {
                  "en": "Chocolate and milk",
                  "es": "Chocolate and milk",
                  "de": "Chocolate and milk",
                  "nl": "Chocolate and milk"
        },
        {
                  "en": "Chocolate and eggs",
                  "es": "Chocolate and eggs",
                  "de": "Chocolate and eggs",
                  "nl": "Chocolate and eggs"
        },
        {
                  "en": "Chocolate and cream",
                  "es": "Chocolate and cream",
                  "de": "Chocolate and cream",
                  "nl": "Chocolate and cream"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Ganache is made from chocolate and heavy cream, used for glazes, fillings, and truffles.",
                  "es": "Ganache is made from chocolate and heavy cream, used for glazes, fillings, and truffles.",
                  "de": "Ganache is made from chocolate and heavy cream, used for glazes, fillings, and truffles.",
                  "nl": "Ganache is made from chocolate and heavy cream, used for glazes, fillings, and truffles."
        }
      },
      {
        question: {
                  "en": "What is tempering chocolate?",
                  "es": "What is tempering chocolate?",
                  "de": "What is tempering chocolate?",
                  "nl": "What is tempering chocolate?"
        },
        options: [
        {
                  "en": "Adding sugar",
                  "es": "Adding sugar",
                  "de": "Adding sugar",
                  "nl": "Adding sugar"
        },
        {
                  "en": "Melting chocolate",
                  "es": "Melting chocolate",
                  "de": "Melting chocolate",
                  "nl": "Melting chocolate"
        },
        {
                  "en": "Heating and cooling for shine and snap",
                  "es": "Heating and cooling for shine and snap",
                  "de": "Heating and cooling for shine and snap",
                  "nl": "Heating and cooling for shine and snap"
        },
        {
                  "en": "Mixing chocolate flavors",
                  "es": "Mixing chocolate flavors",
                  "de": "Mixing chocolate flavors",
                  "nl": "Mixing chocolate flavors"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Tempering chocolate involves carefully heating and cooling it to create stable crystals for a shiny appearance and crisp snap.",
                  "es": "Tempering chocolate involves carefully heating and cooling it to create stable crystals for a shiny appearance and crisp snap.",
                  "de": "Tempering chocolate involves carefully heating and cooling it to create stable crystals for a shiny appearance and crisp snap.",
                  "nl": "Tempering chocolate involves carefully heating and cooling it to create stable crystals for a shiny appearance and crisp snap."
        }
      },
      {
        question: {
                  "en": "What is a chocolate truffle?",
                  "es": "What is a chocolate truffle?",
                  "de": "What is a chocolate truffle?",
                  "nl": "What is a chocolate truffle?"
        },
        options: [
        {
                  "en": "Chocolate mushroom",
                  "es": "Chocolate mushroom",
                  "de": "Chocolate mushroom",
                  "nl": "Chocolate mushroom"
        },
        {
                  "en": "Chocolate cookie",
                  "es": "Chocolate cookie",
                  "de": "Chocolate cookie",
                  "nl": "Chocolate cookie"
        },
        {
                  "en": "Chocolate cake",
                  "es": "Chocolate cake",
                  "de": "Chocolate cake",
                  "nl": "Chocolate cake"
        },
        {
                  "en": "Ganache ball coated in cocoa or chocolate",
                  "es": "Ganache ball coated in cocoa or chocolate",
                  "de": "Ganache ball coated in cocoa or chocolate",
                  "nl": "Ganache ball coated in cocoa or chocolate"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A chocolate truffle is a ball of chocolate ganache, often coated in cocoa powder, nuts, or tempered chocolate.",
                  "es": "A chocolate truffle is a ball of chocolate ganache, often coated in cocoa powder, nuts, or tempered chocolate.",
                  "de": "A chocolate truffle is a ball of chocolate ganache, often coated in cocoa powder, nuts, or tempered chocolate.",
                  "nl": "A chocolate truffle is a ball of chocolate ganache, often coated in cocoa powder, nuts, or tempered chocolate."
        }
      },
      {
        question: {
                  "en": "What is the difference between cocoa powder and cacao powder?",
                  "es": "What is the difference between cocoa powder and cacao powder?",
                  "de": "What is the difference between cocoa powder and cacao powder?",
                  "nl": "What is the difference between cocoa powder and cacao powder?"
        },
        options: [
        {
                  "en": "Country of origin",
                  "es": "Country of origin",
                  "de": "Country of origin",
                  "nl": "Country of origin"
        },
        {
                  "en": "Color",
                  "es": "Color",
                  "de": "Color",
                  "nl": "Color"
        },
        {
                  "en": "Processing temperature",
                  "es": "Processing temperature",
                  "de": "Processing temperature",
                  "nl": "Processing temperature"
        },
        {
                  "en": "Sugar content",
                  "es": "Sugar content",
                  "de": "Sugar content",
                  "nl": "Sugar content"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Cacao powder is raw and processed at low temperatures, while cocoa powder is roasted at higher temperatures.",
                  "es": "Cacao powder is raw and processed at low temperatures, while cocoa powder is roasted at higher temperatures.",
                  "de": "Cacao powder is raw and processed at low temperatures, while cocoa powder is roasted at higher temperatures.",
                  "nl": "Cacao powder is raw and processed at low temperatures, while cocoa powder is roasted at higher temperatures."
        }
      },
      {
        question: {
                  "en": "What is Dutch-process cocoa?",
                  "es": "What is Dutch-process cocoa?",
                  "de": "What is Dutch-process cocoa?",
                  "nl": "What is Dutch-process cocoa?"
        },
        options: [
        {
                  "en": "Natural cocoa",
                  "es": "Natural cocoa",
                  "de": "Natural cocoa",
                  "nl": "Natural cocoa"
        },
        {
                  "en": "Cocoa from the Netherlands",
                  "es": "Cocoa from the Netherlands",
                  "de": "Cocoa from the Netherlands",
                  "nl": "Cocoa from the Netherlands"
        },
        {
                  "en": "Cocoa treated with alkali",
                  "es": "Cocoa treated with alkali",
                  "de": "Cocoa treated with alkali",
                  "nl": "Cocoa treated with alkali"
        },
        {
                  "en": "White cocoa",
                  "es": "White cocoa",
                  "de": "White cocoa",
                  "nl": "White cocoa"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Dutch-process cocoa is treated with an alkalizing agent to neutralize acidity, creating a darker, milder flavor.",
                  "es": "Dutch-process cocoa is treated with an alkalizing agent to neutralize acidity, creating a darker, milder flavor.",
                  "de": "Dutch-process cocoa is treated with an alkalizing agent to neutralize acidity, creating a darker, milder flavor.",
                  "nl": "Dutch-process cocoa is treated with an alkalizing agent to neutralize acidity, creating a darker, milder flavor."
        }
      },
      {
        question: {
                  "en": "What is chocolate bloom?",
                  "es": "What is chocolate bloom?",
                  "de": "What is chocolate bloom?",
                  "nl": "What is chocolate bloom?"
        },
        options: [
        {
                  "en": "Chocolate flower decoration",
                  "es": "Chocolate flower decoration",
                  "de": "Chocolate flower decoration",
                  "nl": "Chocolate flower decoration"
        },
        {
                  "en": "Fat or sugar crystals on surface",
                  "es": "Fat or sugar crystals on surface",
                  "de": "Fat or sugar crystals on surface",
                  "nl": "Fat or sugar crystals on surface"
        },
        {
                  "en": "Melting chocolate",
                  "es": "Melting chocolate",
                  "de": "Melting chocolate",
                  "nl": "Melting chocolate"
        },
        {
                  "en": "Chocolate mold",
                  "es": "Chocolate mold",
                  "de": "Chocolate mold",
                  "nl": "Chocolate mold"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Bloom appears as white or gray streaks on chocolate caused by fat or sugar crystals separating and rising to the surface.",
                  "es": "Bloom appears as white or gray streaks on chocolate caused by fat or sugar crystals separating and rising to the surface.",
                  "de": "Bloom appears as white or gray streaks on chocolate caused by fat or sugar crystals separating and rising to the surface.",
                  "nl": "Bloom appears as white or gray streaks on chocolate caused by fat or sugar crystals separating and rising to the surface."
        }
      },
      {
        question: {
                  "en": "What is couverture chocolate?",
                  "es": "What is couverture chocolate?",
                  "de": "What is couverture chocolate?",
                  "nl": "What is couverture chocolate?"
        },
        options: [
        {
                  "en": "Milk chocolate",
                  "es": "Milk chocolate",
                  "de": "Milk chocolate",
                  "nl": "Milk chocolate"
        },
        {
                  "en": "White chocolate",
                  "es": "White chocolate",
                  "de": "White chocolate",
                  "nl": "White chocolate"
        },
        {
                  "en": "Dark chocolate",
                  "es": "Dark chocolate",
                  "de": "Dark chocolate",
                  "nl": "Dark chocolate"
        },
        {
                  "en": "High cocoa butter content chocolate for coating",
                  "es": "High cocoa butter content chocolate for coating",
                  "de": "High cocoa butter content chocolate for coating",
                  "nl": "High cocoa butter content chocolate for coating"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Couverture chocolate contains a higher percentage of cocoa butter, making it ideal for coating and dipping due to its fluidity when melted.",
                  "es": "Couverture chocolate contains a higher percentage of cocoa butter, making it ideal for coating and dipping due to its fluidity when melted.",
                  "de": "Couverture chocolate contains a higher percentage of cocoa butter, making it ideal for coating and dipping due to its fluidity when melted.",
                  "nl": "Couverture chocolate contains a higher percentage of cocoa butter, making it ideal for coating and dipping due to its fluidity when melted."
        }
      },
      {
        question: {
                  "en": "What is a chocolate soufflé?",
                  "es": "What is a chocolate soufflé?",
                  "de": "What is a chocolate soufflé?",
                  "nl": "What is a chocolate soufflé?"
        },
        options: [
        {
                  "en": "Chocolate pudding",
                  "es": "Chocolate pudding",
                  "de": "Chocolate pudding",
                  "nl": "Chocolate pudding"
        },
        {
                  "en": "Chocolate mousse",
                  "es": "Chocolate mousse",
                  "de": "Chocolate mousse",
                  "nl": "Chocolate mousse"
        },
        {
                  "en": "Chocolate cake",
                  "es": "Chocolate cake",
                  "de": "Chocolate cake",
                  "nl": "Chocolate cake"
        },
        {
                  "en": "Light, airy baked chocolate dessert",
                  "es": "Light, airy baked chocolate dessert",
                  "de": "Light, airy baked chocolate dessert",
                  "nl": "Light, airy baked chocolate dessert"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A chocolate soufflé is a light, airy baked dessert made with egg yolks, chocolate, and whipped egg whites that rise during baking.",
                  "es": "A chocolate soufflé is a light, airy baked dessert made with egg yolks, chocolate, and whipped egg whites that rise during baking.",
                  "de": "A chocolate soufflé is a light, airy baked dessert made with egg yolks, chocolate, and whipped egg whites that rise during baking.",
                  "nl": "A chocolate soufflé is a light, airy baked dessert made with egg yolks, chocolate, and whipped egg whites that rise during baking."
        }
      },
      {
        question: {
                  "en": "What are cacao nibs?",
                  "es": "What are cacao nibs?",
                  "de": "What are cacao nibs?",
                  "nl": "What are cacao nibs?"
        },
        options: [
        {
                  "en": "Chocolate shavings",
                  "es": "Chocolate shavings",
                  "de": "Chocolate shavings",
                  "nl": "Chocolate shavings"
        },
        {
                  "en": "Cocoa powder",
                  "es": "Cocoa powder",
                  "de": "Cocoa powder",
                  "nl": "Cocoa powder"
        },
        {
                  "en": "Chocolate chips",
                  "es": "Chocolate chips",
                  "de": "Chocolate chips",
                  "nl": "Chocolate chips"
        },
        {
                  "en": "Crushed cacao beans",
                  "es": "Crushed cacao beans",
                  "de": "Crushed cacao beans",
                  "nl": "Crushed cacao beans"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Cacao nibs are pieces of crushed, roasted cacao beans before they're processed into chocolate.",
                  "es": "Cacao nibs are pieces of crushed, roasted cacao beans before they're processed into chocolate.",
                  "de": "Cacao nibs are pieces of crushed, roasted cacao beans before they're processed into chocolate.",
                  "nl": "Cacao nibs are pieces of crushed, roasted cacao beans before they're processed into chocolate."
        }
      },
      {
        question: {
                  "en": "What is gianduja?",
                  "es": "What is gianduja?",
                  "de": "What is gianduja?",
                  "nl": "What is gianduja?"
        },
        options: [
        {
                  "en": "Chocolate syrup",
                  "es": "Chocolate syrup",
                  "de": "Chocolate syrup",
                  "nl": "Chocolate syrup"
        },
        {
                  "en": "Chocolate cookie",
                  "es": "Chocolate cookie",
                  "de": "Chocolate cookie",
                  "nl": "Chocolate cookie"
        },
        {
                  "en": "Italian chocolate cake",
                  "es": "Italian chocolate cake",
                  "de": "Italian chocolate cake",
                  "nl": "Italian chocolate cake"
        },
        {
                  "en": "Chocolate hazelnut mixture",
                  "es": "Chocolate hazelnut mixture",
                  "de": "Chocolate hazelnut mixture",
                  "nl": "Chocolate hazelnut mixture"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Gianduja is a sweet chocolate mixture containing about 30% hazelnut paste, originating in Italy.",
                  "es": "Gianduja is a sweet chocolate mixture containing about 30% hazelnut paste, originating in Italy.",
                  "de": "Gianduja is a sweet chocolate mixture containing about 30% hazelnut paste, originating in Italy.",
                  "nl": "Gianduja is a sweet chocolate mixture containing about 30% hazelnut paste, originating in Italy."
        }
      },
      {
        question: {
                  "en": "What percentage of cacao makes chocolate 'dark'?",
                  "es": "What percentage of cacao makes chocolate 'dark'?",
                  "de": "What percentage of cacao makes chocolate 'dark'?",
                  "nl": "What percentage of cacao makes chocolate 'dark'?"
        },
        options: [
        {
                  "en": "90% or higher",
                  "es": "90% or higher",
                  "de": "90% or higher",
                  "nl": "90% or higher"
        },
        {
                  "en": "Typically 70% or higher",
                  "es": "Typically 70% or higher",
                  "de": "Typically 70% or higher",
                  "nl": "Typically 70% or higher"
        },
        {
                  "en": "Any percentage",
                  "es": "Any percentage",
                  "de": "Any percentage",
                  "nl": "Any percentage"
        },
        {
                  "en": "50% or higher",
                  "es": "50% or higher",
                  "de": "50% or higher",
                  "nl": "50% or higher"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Dark chocolate typically contains 70% or more cacao solids, though some classify 60% and above as dark.",
                  "es": "Dark chocolate typically contains 70% or more cacao solids, though some classify 60% and above as dark.",
                  "de": "Dark chocolate typically contains 70% or more cacao solids, though some classify 60% and above as dark.",
                  "nl": "Dark chocolate typically contains 70% or more cacao solids, though some classify 60% and above as dark."
        }
      },
      {
        question: {
                  "en": "What is chocolate mousse made with?",
                  "es": "What is chocolate mousse made with?",
                  "de": "What is chocolate mousse made with?",
                  "nl": "What is chocolate mousse made with?"
        },
        options: [
        {
                  "en": "Chocolate and gelatin",
                  "es": "Chocolate and gelatin",
                  "de": "Chocolate and gelatin",
                  "nl": "Chocolate and gelatin"
        },
        {
                  "en": "Chocolate and milk",
                  "es": "Chocolate and milk",
                  "de": "Chocolate and milk",
                  "nl": "Chocolate and milk"
        },
        {
                  "en": "Chocolate and flour",
                  "es": "Chocolate and flour",
                  "de": "Chocolate and flour",
                  "nl": "Chocolate and flour"
        },
        {
                  "en": "Chocolate and whipped cream or egg whites",
                  "es": "Chocolate and whipped cream or egg whites",
                  "de": "Chocolate and whipped cream or egg whites",
                  "nl": "Chocolate and whipped cream or egg whites"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Chocolate mousse is made by folding melted chocolate into whipped cream or beaten egg whites for a light, airy texture.",
                  "es": "Chocolate mousse is made by folding melted chocolate into whipped cream or beaten egg whites for a light, airy texture.",
                  "de": "Chocolate mousse is made by folding melted chocolate into whipped cream or beaten egg whites for a light, airy texture.",
                  "nl": "Chocolate mousse is made by folding melted chocolate into whipped cream or beaten egg whites for a light, airy texture."
        }
      },
      {
        question: {
                  "en": "What is the conching process in chocolate making?",
                  "es": "What is the conching process in chocolate making?",
                  "de": "What is the conching process in chocolate making?",
                  "nl": "What is the conching process in chocolate making?"
        },
        options: [
        {
                  "en": "Prolonged mixing to refine texture and flavor",
                  "es": "Prolonged mixing to refine texture and flavor",
                  "de": "Prolonged mixing to refine texture and flavor",
                  "nl": "Prolonged mixing to refine texture and flavor"
        },
        {
                  "en": "Shaping chocolate",
                  "es": "Shaping chocolate",
                  "de": "Shaping chocolate",
                  "nl": "Shaping chocolate"
        },
        {
                  "en": "Wrapping chocolate",
                  "es": "Wrapping chocolate",
                  "de": "Wrapping chocolate",
                  "nl": "Wrapping chocolate"
        },
        {
                  "en": "Storing chocolate",
                  "es": "Storing chocolate",
                  "de": "Storing chocolate",
                  "nl": "Storing chocolate"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Conching is the prolonged mixing and aerating of chocolate to develop flavor and create a smooth texture.",
                  "es": "Conching is the prolonged mixing and aerating of chocolate to develop flavor and create a smooth texture.",
                  "de": "Conching is the prolonged mixing and aerating of chocolate to develop flavor and create a smooth texture.",
                  "nl": "Conching is the prolonged mixing and aerating of chocolate to develop flavor and create a smooth texture."
        }
      },
      {
        question: {
                  "en": "What is white chocolate made from?",
                  "es": "What is white chocolate made from?",
                  "de": "What is white chocolate made from?",
                  "nl": "What is white chocolate made from?"
        },
        options: [
        {
                  "en": "Milk chocolate with vanilla",
                  "es": "Milk chocolate with vanilla",
                  "de": "Milk chocolate with vanilla",
                  "nl": "Milk chocolate with vanilla"
        },
        {
                  "en": "Bleached chocolate",
                  "es": "Bleached chocolate",
                  "de": "Bleached chocolate",
                  "nl": "Bleached chocolate"
        },
        {
                  "en": "Cocoa butter, sugar, and milk solids",
                  "es": "Cocoa butter, sugar, and milk solids",
                  "de": "Cocoa butter, sugar, and milk solids",
                  "nl": "Cocoa butter, sugar, and milk solids"
        },
        {
                  "en": "White cocoa powder",
                  "es": "White cocoa powder",
                  "de": "White cocoa powder",
                  "nl": "White cocoa powder"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "White chocolate contains cocoa butter, sugar, and milk solids, but no cocoa solids (the brown part of chocolate).",
                  "es": "White chocolate contains cocoa butter, sugar, and milk solids, but no cocoa solids (the brown part of chocolate).",
                  "de": "White chocolate contains cocoa butter, sugar, and milk solids, but no cocoa solids (the brown part of chocolate).",
                  "nl": "White chocolate contains cocoa butter, sugar, and milk solids, but no cocoa solids (the brown part of chocolate)."
        }
      },
      {
        question: {
                  "en": "What is a chocolate lava cake?",
                  "es": "What is a chocolate lava cake?",
                  "de": "What is a chocolate lava cake?",
                  "nl": "What is a chocolate lava cake?"
        },
        options: [
        {
                  "en": "Chocolate layer cake",
                  "es": "Chocolate layer cake",
                  "de": "Chocolate layer cake",
                  "nl": "Chocolate layer cake"
        },
        {
                  "en": "Frozen chocolate dessert",
                  "es": "Frozen chocolate dessert",
                  "de": "Frozen chocolate dessert",
                  "nl": "Frozen chocolate dessert"
        },
        {
                  "en": "Cake with molten chocolate center",
                  "es": "Cake with molten chocolate center",
                  "de": "Cake with molten chocolate center",
                  "nl": "Cake with molten chocolate center"
        },
        {
                  "en": "Chocolate cake with icing",
                  "es": "Chocolate cake with icing",
                  "de": "Chocolate cake with icing",
                  "nl": "Chocolate cake with icing"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Chocolate lava cake has an intentionally undercooked center that flows out like lava when cut.",
                  "es": "Chocolate lava cake has an intentionally undercooked center that flows out like lava when cut.",
                  "de": "Chocolate lava cake has an intentionally undercooked center that flows out like lava when cut.",
                  "nl": "Chocolate lava cake has an intentionally undercooked center that flows out like lava when cut."
        }
      },
      {
        question: {
                  "en": "What is chocolate seizing?",
                  "es": "What is chocolate seizing?",
                  "de": "What is chocolate seizing?",
                  "nl": "What is chocolate seizing?"
        },
        options: [
        {
                  "en": "Chocolate hardening",
                  "es": "Chocolate hardening",
                  "de": "Chocolate hardening",
                  "nl": "Chocolate hardening"
        },
        {
                  "en": "Chocolate melting",
                  "es": "Chocolate melting",
                  "de": "Chocolate melting",
                  "nl": "Chocolate melting"
        },
        {
                  "en": "Chocolate burning",
                  "es": "Chocolate burning",
                  "de": "Chocolate burning",
                  "nl": "Chocolate burning"
        },
        {
                  "en": "Chocolate becoming grainy and clumpy",
                  "es": "Chocolate becoming grainy and clumpy",
                  "de": "Chocolate becoming grainy and clumpy",
                  "nl": "Chocolate becoming grainy and clumpy"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Seizing occurs when a small amount of water contacts melted chocolate, causing it to become grainy, clumpy, and unusable.",
                  "es": "Seizing occurs when a small amount of water contacts melted chocolate, causing it to become grainy, clumpy, and unusable.",
                  "de": "Seizing occurs when a small amount of water contacts melted chocolate, causing it to become grainy, clumpy, and unusable.",
                  "nl": "Seizing occurs when a small amount of water contacts melted chocolate, causing it to become grainy, clumpy, and unusable."
        }
      },
      {
        question: {
                  "en": "What is cocoa butter?",
                  "es": "What is cocoa butter?",
                  "de": "What is cocoa butter?",
                  "nl": "What is cocoa butter?"
        },
        options: [
        {
                  "en": "Butter flavored with cocoa",
                  "es": "Butter flavored with cocoa",
                  "de": "Butter flavored with cocoa",
                  "nl": "Butter flavored with cocoa"
        },
        {
                  "en": "Cocoa powder mixed with butter",
                  "es": "Cocoa powder mixed with butter",
                  "de": "Cocoa powder mixed with butter",
                  "nl": "Cocoa powder mixed with butter"
        },
        {
                  "en": "Chocolate spread",
                  "es": "Chocolate spread",
                  "de": "Chocolate spread",
                  "nl": "Chocolate spread"
        },
        {
                  "en": "Fat extracted from cacao beans",
                  "es": "Fat extracted from cacao beans",
                  "de": "Fat extracted from cacao beans",
                  "nl": "Fat extracted from cacao beans"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Cocoa butter is the natural fat extracted from cacao beans, giving chocolate its smooth, melt-in-mouth quality.",
                  "es": "Cocoa butter is the natural fat extracted from cacao beans, giving chocolate its smooth, melt-in-mouth quality.",
                  "de": "Cocoa butter is the natural fat extracted from cacao beans, giving chocolate its smooth, melt-in-mouth quality.",
                  "nl": "Cocoa butter is the natural fat extracted from cacao beans, giving chocolate its smooth, melt-in-mouth quality."
        }
      },
      {
        question: {
                  "en": "What is a flourless chocolate cake?",
                  "es": "What is a flourless chocolate cake?",
                  "de": "What is a flourless chocolate cake?",
                  "nl": "What is a flourless chocolate cake?"
        },
        options: [
        {
                  "en": "Chocolate cake without gluten",
                  "es": "Chocolate cake without gluten",
                  "de": "Chocolate cake without gluten",
                  "nl": "Chocolate cake without gluten"
        },
        {
                  "en": "Dense cake made primarily with chocolate and eggs",
                  "es": "Dense cake made primarily with chocolate and eggs",
                  "de": "Dense cake made primarily with chocolate and eggs",
                  "nl": "Dense cake made primarily with chocolate and eggs"
        },
        {
                  "en": "Chocolate mousse cake",
                  "es": "Chocolate mousse cake",
                  "de": "Chocolate mousse cake",
                  "nl": "Chocolate mousse cake"
        },
        {
                  "en": "Chocolate cheesecake",
                  "es": "Chocolate cheesecake",
                  "de": "Chocolate cheesecake",
                  "nl": "Chocolate cheesecake"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Flourless chocolate cake is dense and fudgy, made primarily from chocolate, butter, eggs, and sugar with no flour.",
                  "es": "Flourless chocolate cake is dense and fudgy, made primarily from chocolate, butter, eggs, and sugar with no flour.",
                  "de": "Flourless chocolate cake is dense and fudgy, made primarily from chocolate, butter, eggs, and sugar with no flour.",
                  "nl": "Flourless chocolate cake is dense and fudgy, made primarily from chocolate, butter, eggs, and sugar with no flour."
        }
      },
      {
        question: {
                  "en": "What is the Maillard reaction in chocolate?",
                  "es": "What is the Maillard reaction in chocolate?",
                  "de": "What is the Maillard reaction in chocolate?",
                  "nl": "What is the Maillard reaction in chocolate?"
        },
        options: [
        {
                  "en": "Crystallization",
                  "es": "Crystallization",
                  "de": "Crystallization",
                  "nl": "Crystallization"
        },
        {
                  "en": "Fermentation",
                  "es": "Fermentation",
                  "de": "Fermentation",
                  "nl": "Fermentation"
        },
        {
                  "en": "Browning reaction during roasting",
                  "es": "Browning reaction during roasting",
                  "de": "Browning reaction during roasting",
                  "nl": "Browning reaction during roasting"
        },
        {
                  "en": "Melting process",
                  "es": "Melting process",
                  "de": "Melting process",
                  "nl": "Melting process"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The Maillard reaction occurs when cacao beans are roasted, creating complex flavors through reactions between amino acids and sugars.",
                  "es": "The Maillard reaction occurs when cacao beans are roasted, creating complex flavors through reactions between amino acids and sugars.",
                  "de": "The Maillard reaction occurs when cacao beans are roasted, creating complex flavors through reactions between amino acids and sugars.",
                  "nl": "The Maillard reaction occurs when cacao beans are roasted, creating complex flavors through reactions between amino acids and sugars."
        }
      },
      {
        question: {
                  "en": "What is ruby chocolate?",
                  "es": "What is ruby chocolate?",
                  "de": "What is ruby chocolate?",
                  "nl": "What is ruby chocolate?"
        },
        options: [
        {
                  "en": "Chocolate with raspberry",
                  "es": "Chocolate with raspberry",
                  "de": "Chocolate with raspberry",
                  "nl": "Chocolate with raspberry"
        },
        {
                  "en": "Chocolate with food coloring",
                  "es": "Chocolate with food coloring",
                  "de": "Chocolate with food coloring",
                  "nl": "Chocolate with food coloring"
        },
        {
                  "en": "White chocolate dyed pink",
                  "es": "White chocolate dyed pink",
                  "de": "White chocolate dyed pink",
                  "nl": "White chocolate dyed pink"
        },
        {
                  "en": "Naturally pink chocolate from ruby cacao beans",
                  "es": "Naturally pink chocolate from ruby cacao beans",
                  "de": "Naturally pink chocolate from ruby cacao beans",
                  "nl": "Naturally pink chocolate from ruby cacao beans"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Ruby chocolate is made from ruby cacao beans and has a naturally pink color and berry-like flavor without added colors or flavors.",
                  "es": "Ruby chocolate is made from ruby cacao beans and has a naturally pink color and berry-like flavor without added colors or flavors.",
                  "de": "Ruby chocolate is made from ruby cacao beans and has a naturally pink color and berry-like flavor without added colors or flavors.",
                  "nl": "Ruby chocolate is made from ruby cacao beans and has a naturally pink color and berry-like flavor without added colors or flavors."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  }
})();