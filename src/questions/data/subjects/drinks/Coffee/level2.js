// Coffee Quiz - Level 2
(function() {
  const level2 = {
    name: {
          "en": "Coffee Level 2",
          "es": "Café Nivel 2",
          "de": "Kaffee Stufe 2",
          "nl": "Koffie Level 2"
    },
    questions: [
      {
        question: {
                  "en": "What is caffeine?",
                  "es": "¿Qué es la cafeína?",
                  "de": "Was ist Koffein?",
                  "nl": "Wat is cafeïne?"
        },
        options: [
        {
                  "en": "A coffee cup",
                  "es": "Una taza de café",
                  "de": "Eine Kaffeetasse",
                  "nl": "Een koffiekopje"
        },
        {
                  "en": "A natural substance in coffee that gives you energy",
                  "es": "Una sustancia natural en el café que te da energía",
                  "de": "Eine natürliche Substanz im Kaffee, die Energie gibt",
                  "nl": "Een natuurlijke stof in koffie die je energie geeft"
        },
        {
                  "en": "A type of sugar",
                  "es": "Un tipo de azúcar",
                  "de": "Eine Art Zucker",
                  "nl": "Een soort suiker"
        },
        {
                  "en": "The color of coffee",
                  "es": "El color del café",
                  "de": "Die Farbe von Kaffee",
                  "nl": "De kleur van koffie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Caffeine is a natural chemical found in coffee beans that makes you feel more awake and alert. It's why coffee helps people feel energized!",
                  "es": "La cafeína es una sustancia química natural que se encuentra en los granos de café que te hace sentir más despierto y alerta. ¡Por eso el café ayuda a las personas a sentirse con energía!",
                  "de": "Koffein ist eine natürliche Chemikalie in Kaffeebohnen, die dich wacher und aufmerksamer macht. Deshalb hilft Kaffee Menschen, sich energiegeladen zu fühlen!",
                  "nl": "Cafeïne is een natuurlijke chemische stof in koffiebonen die je wakkerder en alerter maakt. Daarom helpt koffie mensen zich energiek te voelen!"
        }
      },
      {
        question: {
                  "en": "What is the difference between Arabica and Robusta coffee?",
                  "es": "¿Cuál es la diferencia entre café Arábica y Robusta?",
                  "de": "Was ist der Unterschied zwischen Arabica- und Robusta-Kaffee?",
                  "nl": "Wat is het verschil tussen Arabica en Robusta koffie?"
        },
        options: [
        {
                  "en": "Arabica is smoother and sweeter, Robusta is stronger and more bitter",
                  "es": "Arábica es más suave y dulce, Robusta es más fuerte y amargo",
                  "de": "Arabica ist weicher und süßer, Robusta ist stärker und bitterer",
                  "nl": "Arabica is zachter en zoeter, Robusta is sterker en bitterder"
        },
        {
                  "en": "They are exactly the same",
                  "es": "Son exactamente iguales",
                  "de": "Sie sind genau gleich",
                  "nl": "Ze zijn precies hetzelfde"
        },
        {
                  "en": "Robusta doesn't contain caffeine",
                  "es": "Robusta no contiene cafeína",
                  "de": "Robusta enthält kein Koffein",
                  "nl": "Robusta bevat geen cafeïne"
        },
        {
                  "en": "Arabica is only for tea",
                  "es": "Arábica es solo para té",
                  "de": "Arabica ist nur für Tee",
                  "nl": "Arabica is alleen voor thee"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Arabica and Robusta are the two main types of coffee beans. Arabica beans taste smoother and sweeter, while Robusta beans are stronger, more bitter, and contain more caffeine.",
                  "es": "Arábica y Robusta son los dos tipos principales de granos de café. Los granos Arábica saben más suaves y dulces, mientras que los granos Robusta son más fuertes, más amargos y contienen más cafeína.",
                  "de": "Arabica und Robusta sind die beiden Hauptarten von Kaffeebohnen. Arabica-Bohnen schmecken weicher und süßer, während Robusta-Bohnen stärker, bitterer sind und mehr Koffein enthalten.",
                  "nl": "Arabica en Robusta zijn de twee belangrijkste soorten koffiebonen. Arabica bonen smaken zachter en zoeter, terwijl Robusta bonen sterker, bitterder zijn en meer cafeïne bevatten."
        }
      },
      {
        question: {
                  "en": "How do you make a French press coffee?",
                  "es": "¿Cómo se hace café de prensa francesa?",
                  "de": "Wie macht man French Press Kaffee?",
                  "nl": "Hoe maak je French press koffie?"
        },
        options: [
        {
                  "en": "Mix instant coffee with cold water",
                  "es": "Mezclar café instantáneo con agua fría",
                  "de": "Instantkaffee mit kaltem Wasser mischen",
                  "nl": "Meng oploskoffie met koud water"
        },
        {
                  "en": "Add coffee grounds and hot water, then press down a plunger",
                  "es": "Añadir café molido y agua caliente, luego presionar un émbolo",
                  "de": "Kaffeepulver und heißes Wasser hinzufügen, dann einen Stempel herunterdrücken",
                  "nl": "Voeg koffiepoeder en heet water toe, druk dan een zuiger naar beneden"
        },
        {
                  "en": "Boil coffee beans in a pot",
                  "es": "Hervir granos de café en una olla",
                  "de": "Kaffeebohnen in einem Topf kochen",
                  "nl": "Kook koffiebonen in een pan"
        },
        {
                  "en": "Freeze the coffee",
                  "es": "Congelar el café",
                  "de": "Den Kaffee einfrieren",
                  "nl": "Bevries de koffie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A French press uses coarse coffee grounds steeped in hot water. After a few minutes, you press down a metal filter plunger to separate the grounds from the brewed coffee.",
                  "es": "Una prensa francesa usa café molido grueso empapado en agua caliente. Después de unos minutos, presionas un émbolo de filtro de metal para separar el café molido del café preparado.",
                  "de": "Eine French Press verwendet grobes Kaffeepulver, das in heißem Wasser zieht. Nach ein paar Minuten drückst du einen Metallfilter-Stempel herunter, um das Pulver vom gebrühten Kaffee zu trennen.",
                  "nl": "Een French press gebruikt grof koffiepoeder dat trekt in heet water. Na een paar minuten druk je een metalen filter zuiger naar beneden om het poeder van de gebrouwen koffie te scheiden."
        }
      },
      {
        question: {
                  "en": "What is decaffeinated coffee?",
                  "es": "¿Qué es el café descafeinado?",
                  "de": "Was ist entkoffeinierter Kaffee?",
                  "nl": "Wat is cafeïnevrije koffie?"
        },
        options: [
        {
                  "en": "Coffee mixed with tea",
                  "es": "Café mezclado con té",
                  "de": "Kaffee gemischt mit Tee",
                  "nl": "Koffie gemengd met thee"
        },
        {
                  "en": "Coffee with most of the caffeine removed",
                  "es": "Café con la mayoría de la cafeína eliminada",
                  "de": "Kaffee mit dem meisten Koffein entfernt",
                  "nl": "Koffie waarbij de meeste cafeïne is verwijderd"
        },
        {
                  "en": "Extra strong coffee",
                  "es": "Café extra fuerte",
                  "de": "Extra starker Kaffee",
                  "nl": "Extra sterke koffie"
        },
        {
                  "en": "Cold coffee only",
                  "es": "Solo café frío",
                  "de": "Nur kalter Kaffee",
                  "nl": "Alleen koude koffie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Decaffeinated (or 'decaf') coffee has had most of its caffeine removed through a special process. People drink it when they want the taste of coffee without the energizing effects.",
                  "es": "El café descafeinado (o 'descaf') tiene la mayoría de su cafeína eliminada mediante un proceso especial. La gente lo toma cuando quiere el sabor del café sin los efectos energizantes.",
                  "de": "Entkoffeinierter (oder 'koffeinfreier') Kaffee hat das meiste Koffein durch einen speziellen Prozess entfernt bekommen. Menschen trinken ihn, wenn sie den Geschmack von Kaffee ohne die energetisierende Wirkung wollen.",
                  "nl": "Cafeïnevrije (of 'decaf') koffie heeft de meeste cafeïne verwijderd gekregen door een speciaal proces. Mensen drinken het wanneer ze de smaak van koffie willen zonder de energieke effecten."
        }
      },
      {
        question: {
                  "en": "What is a flat white?",
                  "es": "¿Qué es un flat white?",
                  "de": "Was ist ein Flat White?",
                  "nl": "Wat is een flat white?"
        },
        options: [
        {
                  "en": "Black coffee in a flat cup",
                  "es": "Café negro en una taza plana",
                  "de": "Schwarzer Kaffee in einer flachen Tasse",
                  "nl": "Zwarte koffie in een platte kop"
        },
        {
                  "en": "Coffee with ice cream",
                  "es": "Café con helado",
                  "de": "Kaffee mit Eis",
                  "nl": "Koffie met ijs"
        },
        {
                  "en": "Espresso with velvety steamed milk",
                  "es": "Espresso con leche al vapor aterciopelada",
                  "de": "Espresso mit samtiger aufgeschäumter Milch",
                  "nl": "Espresso met fluweelzachte gestoomde melk"
        },
        {
                  "en": "White tea",
                  "es": "Té blanco",
                  "de": "Weißer Tee",
                  "nl": "Witte thee"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A flat white is an espresso-based drink with smooth, velvety steamed milk and a thin layer of microfoam. It originated in Australia and New Zealand.",
                  "es": "Un flat white es una bebida basada en espresso con leche al vapor suave y aterciopelada y una capa delgada de microespuma. Se originó en Australia y Nueva Zelanda.",
                  "de": "Ein Flat White ist ein Espresso-Getränk mit glatter, samtiger aufgeschäumter Milch und einer dünnen Schicht Mikroschaum. Er stammt aus Australien und Neuseeland.",
                  "nl": "Een flat white is een espresso-gebaseerd drankje met gladde, fluweelzachte gestoomde melk en een dunne laag microschuim. Het komt oorspronkelijk uit Australië en Nieuw-Zeeland."
        }
      },
      {
        question: {
                  "en": "What does 'roasting' do to coffee beans?",
                  "es": "¿Qué hace el 'tostado' a los granos de café?",
                  "de": "Was macht das 'Rösten' mit Kaffeebohnen?",
                  "nl": "Wat doet 'branden' met koffiebonen?"
        },
        options: [
        {
                  "en": "Makes them wet",
                  "es": "Los hace húmedos",
                  "de": "Macht sie nass",
                  "nl": "Maakt ze nat"
        },
        {
                  "en": "Turns them into tea",
                  "es": "Los convierte en té",
                  "de": "Verwandelt sie in Tee",
                  "nl": "Verandert ze in thee"
        },
        {
                  "en": "Changes their color from green to brown and develops flavor",
                  "es": "Cambia su color de verde a marrón y desarrolla sabor",
                  "de": "Ändert ihre Farbe von grün zu braun und entwickelt Geschmack",
                  "nl": "Verandert hun kleur van groen naar bruin en ontwikkelt smaak"
        },
        {
                  "en": "Makes them grow bigger",
                  "es": "Los hace crecer más",
                  "de": "Lässt sie größer werden",
                  "nl": "Laat ze groter groeien"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Roasting heats green coffee beans to high temperatures, turning them brown and bringing out their flavor and aroma. Light roasts are milder, while dark roasts are stronger and more bitter.",
                  "es": "El tostado calienta los granos de café verdes a altas temperaturas, volviéndolos marrones y sacando su sabor y aroma. Los tuestes claros son más suaves, mientras que los tuestes oscuros son más fuertes y amargos.",
                  "de": "Rösten erhitzt grüne Kaffeebohnen auf hohe Temperaturen, macht sie braun und bringt ihren Geschmack und Aroma hervor. Helle Röstungen sind milder, während dunkle Röstungen stärker und bitterer sind.",
                  "nl": "Branden verwarmt groene koffiebonen tot hoge temperaturen, maakt ze bruin en brengt hun smaak en aroma naar voren. Lichte brandingen zijn milder, terwijl donkere brandingen sterker en bitterder zijn."
        }
      },
      {
        question: {
                  "en": "What is an Americano?",
                  "es": "¿Qué es un Americano?",
                  "de": "Was ist ein Americano?",
                  "nl": "Wat is een Americano?"
        },
        options: [
        {
                  "en": "Coffee with whipped cream",
                  "es": "Café con crema batida",
                  "de": "Kaffee mit Schlagsahne",
                  "nl": "Koffie met slagroom"
        },
        {
                  "en": "Espresso with hot water added",
                  "es": "Espresso con agua caliente añadida",
                  "de": "Espresso mit heißem Wasser",
                  "nl": "Espresso met heet water toegevoegd"
        },
        {
                  "en": "Cold brew coffee",
                  "es": "Café preparado en frío",
                  "de": "Kalt gebrühter Kaffee",
                  "nl": "Koud gezette koffie"
        },
        {
                  "en": "Coffee from America only",
                  "es": "Café solo de América",
                  "de": "Kaffee nur aus Amerika",
                  "nl": "Koffie alleen uit Amerika"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "An Americano is made by adding hot water to espresso. Legend says it was created during World War II when American soldiers in Italy wanted to dilute the strong espresso.",
                  "es": "Un Americano se hace añadiendo agua caliente al espresso. La leyenda dice que fue creado durante la Segunda Guerra Mundial cuando los soldados estadounidenses en Italia querían diluir el fuerte espresso.",
                  "de": "Ein Americano wird hergestellt, indem man heißes Wasser zu Espresso hinzufügt. Die Legende besagt, dass er während des Zweiten Weltkriegs entstand, als amerikanische Soldaten in Italien den starken Espresso verdünnen wollten.",
                  "nl": "Een Americano wordt gemaakt door heet water toe te voegen aan espresso. De legende zegt dat het werd gecreëerd tijdens de Tweede Wereldoorlog toen Amerikaanse soldaten in Italië de sterke espresso wilden verdunnen."
        }
      },
      {
        question: {
                  "en": "What is cold brew coffee?",
                  "es": "¿Qué es el café preparado en frío?",
                  "de": "Was ist Cold Brew Kaffee?",
                  "nl": "Wat is cold brew koffie?"
        },
        options: [
        {
                  "en": "Coffee made in winter only",
                  "es": "Café hecho solo en invierno",
                  "de": "Kaffee nur im Winter gemacht",
                  "nl": "Koffie alleen gemaakt in de winter"
        },
        {
                  "en": "Coffee steeped in cold water for many hours",
                  "es": "Café empapado en agua fría durante muchas horas",
                  "de": "Kaffee, der viele Stunden in kaltem Wasser zieht",
                  "nl": "Koffie die vele uren in koud water trekt"
        },
        {
                  "en": "Regular hot coffee with ice cubes",
                  "es": "Café caliente regular con cubos de hielo",
                  "de": "Normaler heißer Kaffee mit Eiswürfeln",
                  "nl": "Gewone warme koffie met ijsblokjes"
        },
        {
                  "en": "Frozen coffee beans",
                  "es": "Granos de café congelados",
                  "de": "Gefrorene Kaffeebohnen",
                  "nl": "Bevroren koffiebonen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Cold brew is made by steeping coarse coffee grounds in cold water for 12-24 hours. This creates a smooth, less acidic coffee that's naturally sweet and perfect served over ice.",
                  "es": "El cold brew se hace empapando café molido grueso en agua fría durante 12-24 horas. Esto crea un café suave, menos ácido, naturalmente dulce y perfecto servido sobre hielo.",
                  "de": "Cold Brew wird hergestellt, indem man grobes Kaffeepulver 12-24 Stunden in kaltem Wasser ziehen lässt. Dies erzeugt einen glatten, weniger säurehaltigen Kaffee, der natürlich süß ist und perfekt über Eis serviert wird.",
                  "nl": "Cold brew wordt gemaakt door grof koffiepoeder 12-24 uur in koud water te laten trekken. Dit creëert een gladde, minder zure koffie die natuurlijk zoet is en perfect geserveerd wordt over ijs."
        }
      },
      {
        question: {
                  "en": "What is the purpose of grinding coffee beans?",
                  "es": "¿Cuál es el propósito de moler granos de café?",
                  "de": "Was ist der Zweck des Mahlens von Kaffeebohnen?",
                  "nl": "Wat is het doel van het malen van koffiebonen?"
        },
        options: [
        {
                  "en": "To remove caffeine",
                  "es": "Para eliminar la cafeína",
                  "de": "Um Koffein zu entfernen",
                  "nl": "Om cafeïne te verwijderen"
        },
        {
                  "en": "To break them into small pieces so water can extract the flavor",
                  "es": "Para romperlos en piezas pequeñas para que el agua pueda extraer el sabor",
                  "de": "Um sie in kleine Stücke zu brechen, damit Wasser den Geschmack extrahieren kann",
                  "nl": "Om ze in kleine stukjes te breken zodat water de smaak kan extraheren"
        },
        {
                  "en": "To make them look pretty",
                  "es": "Para que se vean bonitos",
                  "de": "Um sie hübsch aussehen zu lassen",
                  "nl": "Om ze er mooi uit te laten zien"
        },
        {
                  "en": "To add sugar",
                  "es": "Para añadir azúcar",
                  "de": "Um Zucker hinzuzufügen",
                  "nl": "Om suiker toe te voegen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Grinding coffee beans breaks them into smaller pieces, which increases the surface area. This allows hot water to extract the flavors, oils, and caffeine more effectively when brewing.",
                  "es": "Moler los granos de café los rompe en piezas más pequeñas, lo que aumenta el área de superficie. Esto permite que el agua caliente extraiga los sabores, aceites y cafeína más efectivamente al preparar.",
                  "de": "Das Mahlen von Kaffeebohnen bricht sie in kleinere Stücke, was die Oberfläche vergrößert. Dies ermöglicht es heißem Wasser, Geschmacksstoffe, Öle und Koffein beim Brühen effektiver zu extrahieren.",
                  "nl": "Het malen van koffiebonen breekt ze in kleinere stukjes, wat het oppervlak vergroot. Dit stelt heet water in staat om smaken, oliën en cafeïne effectiever te extraheren tijdens het zetten."
        }
      },
      {
        question: {
                  "en": "Which country produces the most coffee in the world?",
                  "es": "¿Qué país produce más café en el mundo?",
                  "de": "Welches Land produziert den meisten Kaffee der Welt?",
                  "nl": "Welk land produceert de meeste koffie ter wereld?"
        },
        options: [
        {
                  "en": "Brazil",
                  "es": "Brasil",
                  "de": "Brasilien",
                  "nl": "Brazilië"
        },
        {
                  "en": "Iceland",
                  "es": "Islandia",
                  "de": "Island",
                  "nl": "IJsland"
        },
        {
                  "en": "Canada",
                  "es": "Canadá",
                  "de": "Kanada",
                  "nl": "Canada"
        },
        {
                  "en": "Russia",
                  "es": "Rusia",
                  "de": "Russland",
                  "nl": "Rusland"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Brazil is the world's largest coffee producer, growing about one-third of all coffee globally. Other major producers include Vietnam, Colombia, and Indonesia.",
                  "es": "Brasil es el mayor productor de café del mundo, cultivando aproximadamente un tercio de todo el café a nivel mundial. Otros grandes productores incluyen Vietnam, Colombia e Indonesia.",
                  "de": "Brasilien ist der weltweit größte Kaffeeproduzent und baut etwa ein Drittel des gesamten Kaffees weltweit an. Andere große Produzenten sind Vietnam, Kolumbien und Indonesien.",
                  "nl": "Brazilië is 's werelds grootste koffieproducent en teelt ongeveer een derde van alle koffie wereldwijd. Andere grote producenten zijn Vietnam, Colombia en Indonesië."
        }
      },
      {
        question: {
                  "en": "What is a macchiato?",
                  "es": "¿Qué es un macchiato?",
                  "de": "Was ist ein Macchiato?",
                  "nl": "Wat is een macchiato?"
        },
        options: [
        {
                  "en": "Coffee with cinnamon only",
                  "es": "Café solo con canela",
                  "de": "Kaffee nur mit Zimt",
                  "nl": "Koffie met alleen kaneel"
        },
        {
                  "en": "Iced tea",
                  "es": "Té helado",
                  "de": "Eistee",
                  "nl": "IJsthee"
        },
        {
                  "en": "Coffee with chocolate",
                  "es": "Café con chocolate",
                  "de": "Kaffee mit Schokolade",
                  "nl": "Koffie met chocolade"
        },
        {
                  "en": "Espresso with a small amount of foamed milk",
                  "es": "Espresso con una pequeña cantidad de leche espumada",
                  "de": "Espresso mit einer kleinen Menge aufgeschäumter Milch",
                  "nl": "Espresso met een kleine hoeveelheid opgeschuimde melk"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Macchiato means 'marked' or 'stained' in Italian. It's an espresso with just a small dollop of foamed milk on top, marking the espresso.",
                  "es": "Macchiato significa 'marcado' o 'manchado' en italiano. Es un espresso con solo una pequeña porción de leche espumada encima, marcando el espresso.",
                  "de": "Macchiato bedeutet 'markiert' oder 'gefleckt' auf Italienisch. Es ist ein Espresso mit nur einem kleinen Klecks aufgeschäumter Milch oben drauf, der den Espresso markiert.",
                  "nl": "Macchiato betekent 'gemarkeerd' of 'gevlekt' in het Italiaans. Het is een espresso met slechts een klein beetje opgeschuimde melk erop, dat de espresso markeert."
        }
      },
      {
        question: {
                  "en": "What temperature should water be for brewing coffee?",
                  "es": "¿A qué temperatura debe estar el agua para preparar café?",
                  "de": "Welche Temperatur sollte Wasser zum Kaffeebrauen haben?",
                  "nl": "Welke temperatuur moet water hebben voor het zetten van koffie?"
        },
        options: [
        {
                  "en": "Around 90-96°C (195-205°F)",
                  "es": "Alrededor de 90-96°C (195-205°F)",
                  "de": "Etwa 90-96°C (195-205°F)",
                  "nl": "Ongeveer 90-96°C (195-205°F)"
        },
        {
                  "en": "Exactly 100°C (boiling)",
                  "es": "Exactamente 100°C (hirviendo)",
                  "de": "Genau 100°C (kochend)",
                  "nl": "Precies 100°C (kokend)"
        },
        {
                  "en": "Room temperature",
                  "es": "Temperatura ambiente",
                  "de": "Raumtemperatur",
                  "nl": "Kamertemperatuur"
        },
        {
                  "en": "Ice cold",
                  "es": "Helado",
                  "de": "Eiskalt",
                  "nl": "IJskoud"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The ideal water temperature for brewing coffee is between 90-96°C (195-205°F). Water that's too hot can over-extract and make coffee bitter, while water that's too cool won't extract enough flavor.",
                  "es": "La temperatura ideal del agua para preparar café está entre 90-96°C (195-205°F). El agua demasiado caliente puede sobre-extraer y hacer el café amargo, mientras que el agua demasiado fría no extraerá suficiente sabor.",
                  "de": "Die ideale Wassertemperatur zum Kaffeebrauen liegt zwischen 90-96°C (195-205°F). Zu heißes Wasser kann überextrahieren und Kaffee bitter machen, während zu kühles Wasser nicht genug Geschmack extrahiert.",
                  "nl": "De ideale watertemperatuur voor het zetten van koffie ligt tussen 90-96°C (195-205°F). Te heet water kan over-extracteren en koffie bitter maken, terwijl te koel water niet genoeg smaak extraheert."
        }
      },
      {
        question: {
                  "en": "What is the 'crema' on espresso?",
                  "es": "¿Qué es la 'crema' en el espresso?",
                  "de": "Was ist die 'Crema' auf Espresso?",
                  "nl": "Wat is de 'crema' op espresso?"
        },
        options: [
        {
                  "en": "A type of coffee bean",
                  "es": "Un tipo de grano de café",
                  "de": "Eine Art Kaffeebohne",
                  "nl": "Een soort koffiebon"
        },
        {
                  "en": "Regular milk added to coffee",
                  "es": "Leche regular añadida al café",
                  "de": "Normale Milch zum Kaffee hinzugefügt",
                  "nl": "Gewone melk toegevoegd aan koffie"
        },
        {
                  "en": "The coffee grounds at the bottom",
                  "es": "Los posos de café en el fondo",
                  "de": "Der Kaffeesatz am Boden",
                  "nl": "Het koffiedik op de bodem"
        },
        {
                  "en": "The golden-brown foam on top of espresso",
                  "es": "La espuma dorada-marrón encima del espresso",
                  "de": "Der goldbraune Schaum auf dem Espresso",
                  "nl": "Het goudbruine schuim bovenop espresso"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Crema is the golden-brown foam that forms on top of a well-made espresso. It's created when high-pressure water forces oils and gases out of the coffee, creating a rich, creamy layer.",
                  "es": "La crema es la espuma dorada-marrón que se forma encima de un espresso bien hecho. Se crea cuando el agua a alta presión fuerza aceites y gases del café, creando una capa rica y cremosa.",
                  "de": "Crema ist der goldbraune Schaum, der sich auf einem gut gemachten Espresso bildet. Sie entsteht, wenn Hochdruckwasser Öle und Gase aus dem Kaffee presst und eine reiche, cremige Schicht bildet.",
                  "nl": "Crema is het goudbruine schuim dat zich vormt bovenop een goed gemaakte espresso. Het ontstaat wanneer hoge druk water oliën en gassen uit de koffie dwingt, wat een rijke, romige laag creëert."
        }
      },
      {
        question: {
                  "en": "What is the difference between a latte and a cappuccino?",
                  "es": "¿Cuál es la diferencia entre un latte y un cappuccino?",
                  "de": "Was ist der Unterschied zwischen einem Latte und einem Cappuccino?",
                  "nl": "Wat is het verschil tussen een latte en een cappuccino?"
        },
        options: [
        {
                  "en": "Latte is only served cold",
                  "es": "El latte solo se sirve frío",
                  "de": "Latte wird nur kalt serviert",
                  "nl": "Latte wordt alleen koud geserveerd"
        },
        {
                  "en": "Cappuccino has more foam, latte has more steamed milk",
                  "es": "El cappuccino tiene más espuma, el latte tiene más leche al vapor",
                  "de": "Cappuccino hat mehr Schaum, Latte hat mehr aufgeschäumte Milch",
                  "nl": "Cappuccino heeft meer schuim, latte heeft meer gestoomde melk"
        },
        {
                  "en": "They are exactly the same drink",
                  "es": "Son exactamente la misma bebida",
                  "de": "Sie sind genau das gleiche Getränk",
                  "nl": "Ze zijn precies hetzelfde drankje"
        },
        {
                  "en": "Cappuccino doesn't contain coffee",
                  "es": "El cappuccino no contiene café",
                  "de": "Cappuccino enthält keinen Kaffee",
                  "nl": "Cappuccino bevat geen koffie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Both drinks start with espresso and steamed milk, but a cappuccino has equal parts espresso, steamed milk, and thick foam, while a latte has more steamed milk and just a thin layer of foam.",
                  "es": "Ambas bebidas comienzan con espresso y leche al vapor, pero un cappuccino tiene partes iguales de espresso, leche al vapor y espuma espesa, mientras que un latte tiene más leche al vapor y solo una capa delgada de espuma.",
                  "de": "Beide Getränke beginnen mit Espresso und aufgeschäumter Milch, aber ein Cappuccino hat gleiche Teile Espresso, aufgeschäumte Milch und dicken Schaum, während ein Latte mehr aufgeschäumte Milch und nur eine dünne Schaumschicht hat.",
                  "nl": "Beide drankjes beginnen met espresso en gestoomde melk, maar een cappuccino heeft gelijke delen espresso, gestoomde melk en dik schuim, terwijl een latte meer gestoomde melk heeft en slechts een dunne laag schuim."
        }
      },
      {
        question: {
                  "en": "Why do some people add milk to coffee?",
                  "es": "¿Por qué algunas personas añaden leche al café?",
                  "de": "Warum fügen manche Leute Milch zum Kaffee hinzu?",
                  "nl": "Waarom voegen sommige mensen melk toe aan koffie?"
        },
        options: [
        {
                  "en": "To make it creamier and less bitter",
                  "es": "Para hacerlo más cremoso y menos amargo",
                  "de": "Um es cremiger und weniger bitter zu machen",
                  "nl": "Om het romiger en minder bitter te maken"
        },
        {
                  "en": "To change it into tea",
                  "es": "Para convertirlo en té",
                  "de": "Um es in Tee zu verwandeln",
                  "nl": "Om het in thee te veranderen"
        },
        {
                  "en": "To make it colder",
                  "es": "Para hacerlo más frío",
                  "de": "Um es kälter zu machen",
                  "nl": "Om het kouder te maken"
        },
        {
                  "en": "To make it more caffeinated",
                  "es": "Para hacerlo más cafeína",
                  "de": "Um es koffeinhaltiger zu machen",
                  "nl": "Om het meer cafeïne te geven"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Milk makes coffee creamier, smoother, and less bitter. The proteins and fats in milk balance out coffee's natural bitterness and add a pleasant texture.",
                  "es": "La leche hace que el café sea más cremoso, suave y menos amargo. Las proteínas y grasas en la leche equilibran la amargura natural del café y añaden una textura agradable.",
                  "de": "Milch macht Kaffee cremiger, glatter und weniger bitter. Die Proteine und Fette in der Milch gleichen die natürliche Bitterkeit des Kaffees aus und fügen eine angenehme Textur hinzu.",
                  "nl": "Melk maakt koffie romiger, gladder en minder bitter. De eiwitten en vetten in melk balanceren de natuurlijke bitterheid van koffie en voegen een aangename textuur toe."
        }
      },
      {
        question: {
                  "en": "What is instant coffee?",
                  "es": "¿Qué es el café instantáneo?",
                  "de": "Was ist Instantkaffee?",
                  "nl": "Wat is oploskoffie?"
        },
        options: [
        {
                  "en": "Dried coffee that dissolves quickly in water",
                  "es": "Café seco que se disuelve rápidamente en agua",
                  "de": "Getrockneter Kaffee, der sich schnell in Wasser auflöst",
                  "nl": "Gedroogde koffie die snel oplost in water"
        },
        {
                  "en": "Coffee that's ready in 1 second",
                  "es": "Café que está listo en 1 segundo",
                  "de": "Kaffee, der in 1 Sekunde fertig ist",
                  "nl": "Koffie die in 1 seconde klaar is"
        },
        {
                  "en": "Very expensive premium coffee",
                  "es": "Café premium muy caro",
                  "de": "Sehr teurer Premium-Kaffee",
                  "nl": "Zeer dure premium koffie"
        },
        {
                  "en": "Coffee beans that grow faster",
                  "es": "Granos de café que crecen más rápido",
                  "de": "Kaffeebohnen, die schneller wachsen",
                  "nl": "Koffiebonen die sneller groeien"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Instant coffee is made by brewing coffee and then drying it into powder or crystals. You just add hot water and it dissolves instantly, making it very convenient but often less flavorful than fresh brewed coffee.",
                  "es": "El café instantáneo se hace preparando café y luego secándolo en polvo o cristales. Solo añades agua caliente y se disuelve al instante, haciéndolo muy conveniente pero a menudo menos sabroso que el café recién preparado.",
                  "de": "Instantkaffee wird hergestellt, indem man Kaffee brüht und ihn dann zu Pulver oder Kristallen trocknet. Man fügt einfach heißes Wasser hinzu und es löst sich sofort auf, was es sehr bequem macht, aber oft weniger geschmackvoll als frisch gebrühter Kaffee.",
                  "nl": "Oploskoffie wordt gemaakt door koffie te zetten en dan te drogen tot poeder of kristallen. Je voegt gewoon heet water toe en het lost direct op, wat het zeer handig maakt maar vaak minder smaakvol dan vers gezette koffie."
        }
      },
      {
        question: {
                  "en": "What does 'fair trade' coffee mean?",
                  "es": "¿Qué significa café de 'comercio justo'?",
                  "de": "Was bedeutet 'Fair Trade' Kaffee?",
                  "nl": "Wat betekent 'fair trade' koffie?"
        },
        options: [
        {
                  "en": "Coffee where farmers are paid fair prices",
                  "es": "Café donde los agricultores reciben precios justos",
                  "de": "Kaffee, bei dem Bauern faire Preise bezahlt werden",
                  "nl": "Koffie waarbij boeren eerlijke prijzen betaald krijgen"
        },
        {
                  "en": "Coffee that's free to buy",
                  "es": "Café que es gratis de comprar",
                  "de": "Kaffee, der kostenlos zu kaufen ist",
                  "nl": "Koffie die gratis te kopen is"
        },
        {
                  "en": "The cheapest coffee available",
                  "es": "El café más barato disponible",
                  "de": "Der billigste verfügbare Kaffee",
                  "nl": "De goedkoopste koffie beschikbaar"
        },
        {
                  "en": "Coffee traded between countries",
                  "es": "Café comerciado entre países",
                  "de": "Kaffee, der zwischen Ländern gehandelt wird",
                  "nl": "Koffie verhandeld tussen landen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Fair trade coffee ensures farmers in developing countries receive fair prices for their coffee beans, better working conditions, and support for sustainable farming practices.",
                  "es": "El café de comercio justo asegura que los agricultores en países en desarrollo reciban precios justos por sus granos de café, mejores condiciones de trabajo y apoyo para prácticas agrícolas sostenibles.",
                  "de": "Fair Trade Kaffee stellt sicher, dass Bauern in Entwicklungsländern faire Preise für ihre Kaffeebohnen erhalten, bessere Arbeitsbedingungen und Unterstützung für nachhaltige Anbaumethoden.",
                  "nl": "Fair trade koffie zorgt ervoor dat boeren in ontwikkelingslanden eerlijke prijzen ontvangen voor hun koffiebonen, betere arbeidsomstandigheden en ondersteuning voor duurzame landbouwpraktijken."
        }
      },
      {
        question: {
                  "en": "What is a mocha?",
                  "es": "¿Qué es un mocha?",
                  "de": "Was ist ein Mocha?",
                  "nl": "Wat is een mocha?"
        },
        options: [
        {
                  "en": "Plain black coffee",
                  "es": "Café negro simple",
                  "de": "Einfacher schwarzer Kaffee",
                  "nl": "Gewone zwarte koffie"
        },
        {
                  "en": "Coffee with only vanilla",
                  "es": "Café solo con vainilla",
                  "de": "Kaffee nur mit Vanille",
                  "nl": "Koffie met alleen vanille"
        },
        {
                  "en": "Coffee with salt",
                  "es": "Café con sal",
                  "de": "Kaffee mit Salz",
                  "nl": "Koffie met zout"
        },
        {
                  "en": "Espresso with steamed milk and chocolate",
                  "es": "Espresso con leche al vapor y chocolate",
                  "de": "Espresso mit aufgeschäumter Milch und Schokolade",
                  "nl": "Espresso met gestoomde melk en chocolade"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A mocha (or caffè mocha) combines espresso, steamed milk, and chocolate syrup or powder. It's like a latte with chocolate added, often topped with whipped cream.",
                  "es": "Un mocha (o caffè mocha) combina espresso, leche al vapor y jarabe o polvo de chocolate. Es como un latte con chocolate añadido, a menudo cubierto con crema batida.",
                  "de": "Ein Mocha (oder Caffè Mocha) kombiniert Espresso, aufgeschäumte Milch und Schokoladensirup oder -pulver. Es ist wie ein Latte mit hinzugefügter Schokolade, oft mit Schlagsahne garniert.",
                  "nl": "Een mocha (of caffè mocha) combineert espresso, gestoomde melk en chocoladesiroop of -poeder. Het is als een latte met chocolade toegevoegd, vaak gegarneerd met slagroom."
        }
      },
      {
        question: {
                  "en": "What is a 'coffee cherry'?",
                  "es": "¿Qué es una 'cereza de café'?",
                  "de": "Was ist eine 'Kaffeekirsche'?",
                  "nl": "Wat is een 'koffieboon'?"
        },
        options: [
        {
                  "en": "The fruit that coffee beans grow inside",
                  "es": "La fruta dentro de la cual crecen los granos de café",
                  "de": "Die Frucht, in der Kaffeebohnen wachsen",
                  "nl": "De vrucht waarin koffiebonen groeien"
        },
        {
                  "en": "A type of cherry-flavored coffee",
                  "es": "Un tipo de café con sabor a cereza",
                  "de": "Eine Art kirschgeschmackter Kaffee",
                  "nl": "Een soort koffie met kersensmaak"
        },
        {
                  "en": "Coffee served with cherries",
                  "es": "Café servido con cerezas",
                  "de": "Kaffee mit Kirschen serviert",
                  "nl": "Koffie geserveerd met kersen"
        },
        {
                  "en": "A dessert made with coffee",
                  "es": "Un postre hecho con café",
                  "de": "Ein Dessert aus Kaffee",
                  "nl": "Een dessert gemaakt met koffie"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Coffee beans actually grow inside a red fruit called a coffee cherry. Each cherry typically contains two coffee beans. The cherry is removed during processing to get the beans we roast and grind.",
                  "es": "Los granos de café realmente crecen dentro de una fruta roja llamada cereza de café. Cada cereza típicamente contiene dos granos de café. La cereza se elimina durante el procesamiento para obtener los granos que tostamos y molemos.",
                  "de": "Kaffeebohnen wachsen tatsächlich in einer roten Frucht namens Kaffeekirsche. Jede Kirsche enthält typischerweise zwei Kaffeebohnen. Die Kirsche wird während der Verarbeitung entfernt, um die Bohnen zu erhalten, die wir rösten und mahlen.",
                  "nl": "Koffiebonen groeien eigenlijk in een rode vrucht die een koffiekers wordt genoemd. Elke kers bevat meestal twee koffiebonen. De kers wordt verwijderd tijdens de verwerking om de bonen te krijgen die we branden en malen."
        }
      },
      {
        question: {
                  "en": "Why is coffee sometimes served in different sized cups?",
                  "es": "¿Por qué a veces se sirve café en tazas de diferentes tamaños?",
                  "de": "Warum wird Kaffee manchmal in unterschiedlich großen Tassen serviert?",
                  "nl": "Waarom wordt koffie soms in verschillende maten kopjes geserveerd?"
        },
        options: [
        {
                  "en": "It's just for decoration",
                  "es": "Es solo por decoración",
                  "de": "Es ist nur zur Dekoration",
                  "nl": "Het is alleen voor decoratie"
        },
        {
                  "en": "Bigger cups are for better taste",
                  "es": "Las tazas más grandes son para mejor sabor",
                  "de": "Größere Tassen sind für besseren Geschmack",
                  "nl": "Grotere kopjes zijn voor betere smaak"
        },
        {
                  "en": "Different drinks need different amounts of coffee and milk",
                  "es": "Diferentes bebidas necesitan diferentes cantidades de café y leche",
                  "de": "Verschiedene Getränke benötigen unterschiedliche Mengen Kaffee und Milch",
                  "nl": "Verschillende drankjes hebben verschillende hoeveelheden koffie en melk nodig"
        },
        {
                  "en": "Small cups are only for children",
                  "es": "Las tazas pequeñas son solo para niños",
                  "de": "Kleine Tassen sind nur für Kinder",
                  "nl": "Kleine kopjes zijn alleen voor kinderen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Different coffee drinks use different cup sizes because they have different proportions. Espresso comes in small cups, cappuccinos in medium cups, and lattes in larger cups to hold all the milk.",
                  "es": "Diferentes bebidas de café usan diferentes tamaños de taza porque tienen diferentes proporciones. El espresso viene en tazas pequeñas, los cappuccinos en tazas medianas y los lattes en tazas más grandes para contener toda la leche.",
                  "de": "Verschiedene Kaffeegetränke verwenden unterschiedliche Tassengrößen, weil sie unterschiedliche Proportionen haben. Espresso kommt in kleinen Tassen, Cappuccinos in mittleren Tassen und Lattes in größeren Tassen, um all die Milch aufzunehmen.",
                  "nl": "Verschillende koffiedrankjes gebruiken verschillende kopjesgroottes omdat ze verschillende verhoudingen hebben. Espresso komt in kleine kopjes, cappuccino's in middelgrote kopjes en latte's in grotere kopjes om alle melk te bevatten."
        }
      },
      {
        question: {
                  "en": "What plant does coffee come from?",
                  "es": "What plant does coffee come from?",
                  "de": "What plant does coffee come from?",
                  "nl": "What plant does coffee come from?"
        },
        options: [
        {
                  "en": "Bean plant",
                  "es": "Bean plant",
                  "de": "Bean plant",
                  "nl": "Bean plant"
        },
        {
                  "en": "Cocoa plant",
                  "es": "Cocoa plant",
                  "de": "Cocoa plant",
                  "nl": "Cocoa plant"
        },
        {
                  "en": "Coffee plant (Coffea)",
                  "es": "Coffee plant (Coffea)",
                  "de": "Coffee plant (Coffea)",
                  "nl": "Coffee plant (Coffea)"
        },
        {
                  "en": "Tea plant",
                  "es": "Tea plant",
                  "de": "Tea plant",
                  "nl": "Tea plant"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Coffee is made from roasted seeds (beans) of the Coffea plant.",
                  "es": "Coffee is made from roasted seeds (beans) of the Coffea plant.",
                  "de": "Coffee is made from roasted seeds (beans) of the Coffea plant.",
                  "nl": "Coffee is made from roasted seeds (beans) of the Coffea plant."
        }
      },
      {
        question: {
                  "en": "What are the two main species of coffee?",
                  "es": "What are the two main species of coffee?",
                  "de": "What are the two main species of coffee?",
                  "nl": "What are the two main species of coffee?"
        },
        options: [
        {
                  "en": "Bean and Ground",
                  "es": "Bean and Ground",
                  "de": "Bean and Ground",
                  "nl": "Bean and Ground"
        },
        {
                  "en": "Colombian and Brazilian",
                  "es": "Colombian and Brazilian",
                  "de": "Colombian and Brazilian",
                  "nl": "Colombian and Brazilian"
        },
        {
                  "en": "Arabica and Robusta",
                  "es": "Arabica and Robusta",
                  "de": "Arabica and Robusta",
                  "nl": "Arabica and Robusta"
        },
        {
                  "en": "Dark and Light",
                  "es": "Dark and Light",
                  "de": "Dark and Light",
                  "nl": "Dark and Light"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Arabica and Robusta are the two primary commercially grown coffee species.",
                  "es": "Arabica and Robusta are the two primary commercially grown coffee species.",
                  "de": "Arabica and Robusta are the two primary commercially grown coffee species.",
                  "nl": "Arabica and Robusta are the two primary commercially grown coffee species."
        }
      },
      {
        question: {
                  "en": "What is espresso?",
                  "es": "What is espresso?",
                  "de": "What is espresso?",
                  "nl": "What is espresso?"
        },
        options: [
        {
                  "en": "Iced coffee",
                  "es": "Iced coffee",
                  "de": "Iced coffee",
                  "nl": "Iced coffee"
        },
        {
                  "en": "Diluted coffee",
                  "es": "Diluted coffee",
                  "de": "Diluted coffee",
                  "nl": "Diluted coffee"
        },
        {
                  "en": "Concentrated coffee brewed under pressure",
                  "es": "Concentrated coffee brewed under pressure",
                  "de": "Concentrated coffee brewed under pressure",
                  "nl": "Concentrated coffee brewed under pressure"
        },
        {
                  "en": "Instant coffee",
                  "es": "Instant coffee",
                  "de": "Instant coffee",
                  "nl": "Instant coffee"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Espresso is concentrated coffee brewed by forcing hot water under pressure through finely-ground coffee.",
                  "es": "Espresso is concentrated coffee brewed by forcing hot water under pressure through finely-ground coffee.",
                  "de": "Espresso is concentrated coffee brewed by forcing hot water under pressure through finely-ground coffee.",
                  "nl": "Espresso is concentrated coffee brewed by forcing hot water under pressure through finely-ground coffee."
        }
      },
      {
        question: {
                  "en": "What is a cappuccino?",
                  "es": "What is a cappuccino?",
                  "de": "What is a cappuccino?",
                  "nl": "What is a cappuccino?"
        },
        options: [
        {
                  "en": "Espresso with steamed milk and foam",
                  "es": "Espresso with steamed milk and foam",
                  "de": "Espresso with steamed milk and foam",
                  "nl": "Espresso with steamed milk and foam"
        },
        {
                  "en": "Iced coffee",
                  "es": "Iced coffee",
                  "de": "Iced coffee",
                  "nl": "Iced coffee"
        },
        {
                  "en": "Coffee with cream",
                  "es": "Coffee with cream",
                  "de": "Coffee with cream",
                  "nl": "Coffee with cream"
        },
        {
                  "en": "Black coffee",
                  "es": "Black coffee",
                  "de": "Black coffee",
                  "nl": "Black coffee"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A cappuccino is made with equal parts espresso, steamed milk, and milk foam.",
                  "es": "A cappuccino is made with equal parts espresso, steamed milk, and milk foam.",
                  "de": "A cappuccino is made with equal parts espresso, steamed milk, and milk foam.",
                  "nl": "A cappuccino is made with equal parts espresso, steamed milk, and milk foam."
        }
      },
      {
        question: {
                  "en": "What is a latte?",
                  "es": "What is a latte?",
                  "de": "What is a latte?",
                  "nl": "What is a latte?"
        },
        options: [
        {
                  "en": "Espresso with steamed milk",
                  "es": "Espresso with steamed milk",
                  "de": "Espresso with steamed milk",
                  "nl": "Espresso with steamed milk"
        },
        {
                  "en": "Black coffee",
                  "es": "Black coffee",
                  "de": "Black coffee",
                  "nl": "Black coffee"
        },
        {
                  "en": "Iced coffee with milk",
                  "es": "Iced coffee with milk",
                  "de": "Iced coffee with milk",
                  "nl": "Iced coffee with milk"
        },
        {
                  "en": "Instant coffee",
                  "es": "Instant coffee",
                  "de": "Instant coffee",
                  "nl": "Instant coffee"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "A latte (caffè latte) is made with espresso and a larger proportion of steamed milk.",
                  "es": "A latte (caffè latte) is made with espresso and a larger proportion of steamed milk.",
                  "de": "A latte (caffè latte) is made with espresso and a larger proportion of steamed milk.",
                  "nl": "A latte (caffè latte) is made with espresso and a larger proportion of steamed milk."
        }
      },
      {
        question: {
                  "en": "Where did coffee originate?",
                  "es": "Where did coffee originate?",
                  "de": "Where did coffee originate?",
                  "nl": "Where did coffee originate?"
        },
        options: [
        {
                  "en": "Ethiopia",
                  "es": "Ethiopia",
                  "de": "Ethiopia",
                  "nl": "Ethiopia"
        },
        {
                  "en": "Italy",
                  "es": "Italy",
                  "de": "Italy",
                  "nl": "Italy"
        },
        {
                  "en": "Brazil",
                  "es": "Brazil",
                  "de": "Brazil",
                  "nl": "Brazil"
        },
        {
                  "en": "Colombia",
                  "es": "Colombia",
                  "de": "Colombia",
                  "nl": "Colombia"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Coffee is believed to have originated in Ethiopia, where it was discovered growing wild.",
                  "es": "Coffee is believed to have originated in Ethiopia, where it was discovered growing wild.",
                  "de": "Coffee is believed to have originated in Ethiopia, where it was discovered growing wild.",
                  "nl": "Coffee is believed to have originated in Ethiopia, where it was discovered growing wild."
        }
      },
      {
        question: {
                  "en": "What is the process of removing caffeine called?",
                  "es": "What is the process of removing caffeine called?",
                  "de": "What is the process of removing caffeine called?",
                  "nl": "What is the process of removing caffeine called?"
        },
        options: [
        {
                  "en": "Brewing",
                  "es": "Brewing",
                  "de": "Brewing",
                  "nl": "Brewing"
        },
        {
                  "en": "Decaffeination",
                  "es": "Decaffeination",
                  "de": "Decaffeination",
                  "nl": "Decaffeination"
        },
        {
                  "en": "Roasting",
                  "es": "Roasting",
                  "de": "Roasting",
                  "nl": "Roasting"
        },
        {
                  "en": "Grinding",
                  "es": "Grinding",
                  "de": "Grinding",
                  "nl": "Grinding"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Decaffeination is the process of removing caffeine from coffee beans.",
                  "es": "Decaffeination is the process of removing caffeine from coffee beans.",
                  "de": "Decaffeination is the process of removing caffeine from coffee beans.",
                  "nl": "Decaffeination is the process of removing caffeine from coffee beans."
        }
      },
      {
        question: {
                  "en": "What is a macchiato?",
                  "es": "What is a macchiato?",
                  "de": "What is a macchiato?",
                  "nl": "What is a macchiato?"
        },
        options: [
        {
                  "en": "Iced coffee",
                  "es": "Iced coffee",
                  "de": "Iced coffee",
                  "nl": "Iced coffee"
        },
        {
                  "en": "Espresso with small amount of milk",
                  "es": "Espresso with small amount of milk",
                  "de": "Espresso with small amount of milk",
                  "nl": "Espresso with small amount of milk"
        },
        {
                  "en": "Black coffee",
                  "es": "Black coffee",
                  "de": "Black coffee",
                  "nl": "Black coffee"
        },
        {
                  "en": "Coffee with lots of milk",
                  "es": "Coffee with lots of milk",
                  "de": "Coffee with lots of milk",
                  "nl": "Coffee with lots of milk"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A macchiato is espresso 'marked' or 'stained' with a small amount of milk or foam.",
                  "es": "A macchiato is espresso 'marked' or 'stained' with a small amount of milk or foam.",
                  "de": "A macchiato is espresso 'marked' or 'stained' with a small amount of milk or foam.",
                  "nl": "A macchiato is espresso 'marked' or 'stained' with a small amount of milk or foam."
        }
      },
      {
        question: {
                  "en": "What is the Coffee Belt?",
                  "es": "What is the Coffee Belt?",
                  "de": "What is the Coffee Belt?",
                  "nl": "What is the Coffee Belt?"
        },
        options: [
        {
                  "en": "Region between Tropics where coffee grows",
                  "es": "Region between Tropics where coffee grows",
                  "de": "Region between Tropics where coffee grows",
                  "nl": "Region between Tropics where coffee grows"
        },
        {
                  "en": "Brewing method",
                  "es": "Brewing method",
                  "de": "Brewing method",
                  "nl": "Brewing method"
        },
        {
                  "en": "Coffee grinder part",
                  "es": "Coffee grinder part",
                  "de": "Coffee grinder part",
                  "nl": "Coffee grinder part"
        },
        {
                  "en": "Coffee brand",
                  "es": "Coffee brand",
                  "de": "Coffee brand",
                  "nl": "Coffee brand"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The Coffee Belt is the region between the Tropics of Cancer and Capricorn where coffee plants grow best.",
                  "es": "The Coffee Belt is the region between the Tropics of Cancer and Capricorn where coffee plants grow best.",
                  "de": "The Coffee Belt is the region between the Tropics of Cancer and Capricorn where coffee plants grow best.",
                  "nl": "The Coffee Belt is the region between the Tropics of Cancer and Capricorn where coffee plants grow best."
        }
      },
      {
        question: {
                  "en": "What is an Americano?",
                  "es": "What is an Americano?",
                  "de": "What is an Americano?",
                  "nl": "What is an Americano?"
        },
        options: [
        {
                  "en": "Iced coffee",
                  "es": "Iced coffee",
                  "de": "Iced coffee",
                  "nl": "Iced coffee"
        },
        {
                  "en": "Coffee with milk",
                  "es": "Coffee with milk",
                  "de": "Coffee with milk",
                  "nl": "Coffee with milk"
        },
        {
                  "en": "Espresso with hot water added",
                  "es": "Espresso with hot water added",
                  "de": "Espresso with hot water added",
                  "nl": "Espresso with hot water added"
        },
        {
                  "en": "American-style drip coffee",
                  "es": "American-style drip coffee",
                  "de": "American-style drip coffee",
                  "nl": "American-style drip coffee"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "An Americano is made by adding hot water to espresso, similar in strength to drip coffee.",
                  "es": "An Americano is made by adding hot water to espresso, similar in strength to drip coffee.",
                  "de": "An Americano is made by adding hot water to espresso, similar in strength to drip coffee.",
                  "nl": "An Americano is made by adding hot water to espresso, similar in strength to drip coffee."
        }
      },
      {
        question: {
                  "en": "What is cold brew coffee?",
                  "es": "What is cold brew coffee?",
                  "de": "What is cold brew coffee?",
                  "nl": "What is cold brew coffee?"
        },
        options: [
        {
                  "en": "Coffee steeped in cold water for hours",
                  "es": "Coffee steeped in cold water for hours",
                  "de": "Coffee steeped in cold water for hours",
                  "nl": "Coffee steeped in cold water for hours"
        },
        {
                  "en": "Iced hot coffee",
                  "es": "Iced hot coffee",
                  "de": "Iced hot coffee",
                  "nl": "Iced hot coffee"
        },
        {
                  "en": "Frozen coffee",
                  "es": "Frozen coffee",
                  "de": "Frozen coffee",
                  "nl": "Frozen coffee"
        },
        {
                  "en": "Coffee with ice cubes",
                  "es": "Coffee with ice cubes",
                  "de": "Coffee with ice cubes",
                  "nl": "Coffee with ice cubes"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Cold brew is made by steeping coarsely ground coffee in cold water for 12-24 hours.",
                  "es": "Cold brew is made by steeping coarsely ground coffee in cold water for 12-24 hours.",
                  "de": "Cold brew is made by steeping coarsely ground coffee in cold water for 12-24 hours.",
                  "nl": "Cold brew is made by steeping coarsely ground coffee in cold water for 12-24 hours."
        }
      },
      {
        question: {
                  "en": "What country produces the most coffee?",
                  "es": "What country produces the most coffee?",
                  "de": "What country produces the most coffee?",
                  "nl": "What country produces the most coffee?"
        },
        options: [
        {
                  "en": "Vietnam",
                  "es": "Vietnam",
                  "de": "Vietnam",
                  "nl": "Vietnam"
        },
        {
                  "en": "Brazil",
                  "es": "Brazil",
                  "de": "Brazil",
                  "nl": "Brazil"
        },
        {
                  "en": "Colombia",
                  "es": "Colombia",
                  "de": "Colombia",
                  "nl": "Colombia"
        },
        {
                  "en": "Ethiopia",
                  "es": "Ethiopia",
                  "de": "Ethiopia",
                  "nl": "Ethiopia"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Brazil is the world's largest coffee producer, accounting for about a third of global production.",
                  "es": "Brazil is the world's largest coffee producer, accounting for about a third of global production.",
                  "de": "Brazil is the world's largest coffee producer, accounting for about a third of global production.",
                  "nl": "Brazil is the world's largest coffee producer, accounting for about a third of global production."
        }
      },
      {
        question: {
                  "en": "What is coffee roasting?",
                  "es": "What is coffee roasting?",
                  "de": "What is coffee roasting?",
                  "nl": "What is coffee roasting?"
        },
        options: [
        {
                  "en": "Brewing coffee",
                  "es": "Brewing coffee",
                  "de": "Brewing coffee",
                  "nl": "Brewing coffee"
        },
        {
                  "en": "Heating beans to develop flavor",
                  "es": "Heating beans to develop flavor",
                  "de": "Heating beans to develop flavor",
                  "nl": "Heating beans to develop flavor"
        },
        {
                  "en": "Grinding beans",
                  "es": "Grinding beans",
                  "de": "Grinding beans",
                  "nl": "Grinding beans"
        },
        {
                  "en": "Storing beans",
                  "es": "Storing beans",
                  "de": "Storing beans",
                  "nl": "Storing beans"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Roasting is the process of heating green coffee beans to develop their flavor, aroma, and color.",
                  "es": "Roasting is the process of heating green coffee beans to develop their flavor, aroma, and color.",
                  "de": "Roasting is the process of heating green coffee beans to develop their flavor, aroma, and color.",
                  "nl": "Roasting is the process of heating green coffee beans to develop their flavor, aroma, and color."
        }
      },
      {
        question: {
                  "en": "What is a French press?",
                  "es": "What is a French press?",
                  "de": "What is a French press?",
                  "nl": "What is a French press?"
        },
        options: [
        {
                  "en": "Type of espresso",
                  "es": "Type of espresso",
                  "de": "Type of espresso",
                  "nl": "Type of espresso"
        },
        {
                  "en": "Coffee grinder",
                  "es": "Coffee grinder",
                  "de": "Coffee grinder",
                  "nl": "Coffee grinder"
        },
        {
                  "en": "Coffee brewing device with plunger",
                  "es": "Coffee brewing device with plunger",
                  "de": "Coffee brewing device with plunger",
                  "nl": "Coffee brewing device with plunger"
        },
        {
                  "en": "Coffee roasting method",
                  "es": "Coffee roasting method",
                  "de": "Coffee roasting method",
                  "nl": "Coffee roasting method"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "A French press brews coffee by steeping grounds in hot water, then pressing them down with a plunger.",
                  "es": "A French press brews coffee by steeping grounds in hot water, then pressing them down with a plunger.",
                  "de": "A French press brews coffee by steeping grounds in hot water, then pressing them down with a plunger.",
                  "nl": "A French press brews coffee by steeping grounds in hot water, then pressing them down with a plunger."
        }
      },
      {
        question: {
                  "en": "What is the crema on espresso?",
                  "es": "What is the crema on espresso?",
                  "de": "What is the crema on espresso?",
                  "nl": "What is the crema on espresso?"
        },
        options: [
        {
                  "en": "Milk foam",
                  "es": "Milk foam",
                  "de": "Milk foam",
                  "nl": "Milk foam"
        },
        {
                  "en": "Golden foam layer on top",
                  "es": "Golden foam layer on top",
                  "de": "Golden foam layer on top",
                  "nl": "Golden foam layer on top"
        },
        {
                  "en": "Coffee grounds",
                  "es": "Coffee grounds",
                  "de": "Coffee grounds",
                  "nl": "Coffee grounds"
        },
        {
                  "en": "Sugar coating",
                  "es": "Sugar coating",
                  "de": "Sugar coating",
                  "nl": "Sugar coating"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Crema is the golden-brown foam that forms on top of properly brewed espresso.",
                  "es": "Crema is the golden-brown foam that forms on top of properly brewed espresso.",
                  "de": "Crema is the golden-brown foam that forms on top of properly brewed espresso.",
                  "nl": "Crema is the golden-brown foam that forms on top of properly brewed espresso."
        }
      },
      {
        question: {
                  "en": "What is a flat white?",
                  "es": "What is a flat white?",
                  "de": "What is a flat white?",
                  "nl": "What is a flat white?"
        },
        options: [
        {
                  "en": "Iced coffee",
                  "es": "Iced coffee",
                  "de": "Iced coffee",
                  "nl": "Iced coffee"
        },
        {
                  "en": "Espresso with microfoam milk",
                  "es": "Espresso with microfoam milk",
                  "de": "Espresso with microfoam milk",
                  "nl": "Espresso with microfoam milk"
        },
        {
                  "en": "Black coffee",
                  "es": "Black coffee",
                  "de": "Black coffee",
                  "nl": "Black coffee"
        },
        {
                  "en": "Coffee without foam",
                  "es": "Coffee without foam",
                  "de": "Coffee without foam",
                  "nl": "Coffee without foam"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "A flat white is espresso with steamed milk that has a velvety microfoam texture.",
                  "es": "A flat white is espresso with steamed milk that has a velvety microfoam texture.",
                  "de": "A flat white is espresso with steamed milk that has a velvety microfoam texture.",
                  "nl": "A flat white is espresso with steamed milk that has a velvety microfoam texture."
        }
      },
      {
        question: {
                  "en": "What is the ideal water temperature for brewing coffee?",
                  "es": "What is the ideal water temperature for brewing coffee?",
                  "de": "What is the ideal water temperature for brewing coffee?",
                  "nl": "What is the ideal water temperature for brewing coffee?"
        },
        options: [
        {
                  "en": "Boiling (212°F/100°C)",
                  "es": "Boiling (212°F/100°C)",
                  "de": "Boiling (212°F/100°C)",
                  "nl": "Boiling (212°F/100°C)"
        },
        {
                  "en": "150°F (65°C)",
                  "es": "150°F (65°C)",
                  "de": "150°F (65°C)",
                  "nl": "150°F (65°C)"
        },
        {
                  "en": "Room temperature",
                  "es": "Room temperature",
                  "de": "Room temperature",
                  "nl": "Room temperature"
        },
        {
                  "en": "195-205°F (90-96°C)",
                  "es": "195-205°F (90-96°C)",
                  "de": "195-205°F (90-96°C)",
                  "nl": "195-205°F (90-96°C)"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The ideal brewing temperature for coffee is 195-205°F, just below boiling.",
                  "es": "The ideal brewing temperature for coffee is 195-205°F, just below boiling.",
                  "de": "The ideal brewing temperature for coffee is 195-205°F, just below boiling.",
                  "nl": "The ideal brewing temperature for coffee is 195-205°F, just below boiling."
        }
      },
      {
        question: {
                  "en": "What is Turkish coffee?",
                  "es": "What is Turkish coffee?",
                  "de": "What is Turkish coffee?",
                  "nl": "What is Turkish coffee?"
        },
        options: [
        {
                  "en": "Finely ground coffee boiled in pot",
                  "es": "Finely ground coffee boiled in pot",
                  "de": "Finely ground coffee boiled in pot",
                  "nl": "Finely ground coffee boiled in pot"
        },
        {
                  "en": "Coffee from Turkey only",
                  "es": "Coffee from Turkey only",
                  "de": "Coffee from Turkey only",
                  "nl": "Coffee from Turkey only"
        },
        {
                  "en": "Instant coffee",
                  "es": "Instant coffee",
                  "de": "Instant coffee",
                  "nl": "Instant coffee"
        },
        {
                  "en": "Iced coffee",
                  "es": "Iced coffee",
                  "de": "Iced coffee",
                  "nl": "Iced coffee"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Turkish coffee is made by boiling very finely ground coffee in a special pot called a cezve or ibrik.",
                  "es": "Turkish coffee is made by boiling very finely ground coffee in a special pot called a cezve or ibrik.",
                  "de": "Turkish coffee is made by boiling very finely ground coffee in a special pot called a cezve or ibrik.",
                  "nl": "Turkish coffee is made by boiling very finely ground coffee in a special pot called a cezve or ibrik."
        }
      },
      {
        question: {
                  "en": "What does 'single origin' mean?",
                  "es": "What does 'single origin' mean?",
                  "de": "What does 'single origin' mean?",
                  "nl": "What does 'single origin' mean?"
        },
        options: [
        {
                  "en": "One coffee bean",
                  "es": "One coffee bean",
                  "de": "One coffee bean",
                  "nl": "One coffee bean"
        },
        {
                  "en": "First harvest",
                  "es": "First harvest",
                  "de": "First harvest",
                  "nl": "First harvest"
        },
        {
                  "en": "Original roast",
                  "es": "Original roast",
                  "de": "Original roast",
                  "nl": "Original roast"
        },
        {
                  "en": "Coffee from one geographic region",
                  "es": "Coffee from one geographic region",
                  "de": "Coffee from one geographic region",
                  "nl": "Coffee from one geographic region"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Single origin coffee comes from beans sourced from one specific geographic region or farm.",
                  "es": "Single origin coffee comes from beans sourced from one specific geographic region or farm.",
                  "de": "Single origin coffee comes from beans sourced from one specific geographic region or farm.",
                  "nl": "Single origin coffee comes from beans sourced from one specific geographic region or farm."
        }
      },
      {
        question: {
                  "en": "What is a mocha?",
                  "es": "What is a mocha?",
                  "de": "What is a mocha?",
                  "nl": "What is a mocha?"
        },
        options: [
        {
                  "en": "Iced coffee",
                  "es": "Iced coffee",
                  "de": "Iced coffee",
                  "nl": "Iced coffee"
        },
        {
                  "en": "Black coffee",
                  "es": "Black coffee",
                  "de": "Black coffee",
                  "nl": "Black coffee"
        },
        {
                  "en": "Coffee beans from Mocha, Yemen",
                  "es": "Coffee beans from Mocha, Yemen",
                  "de": "Coffee beans from Mocha, Yemen",
                  "nl": "Coffee beans from Mocha, Yemen"
        },
        {
                  "en": "Espresso with chocolate and steamed milk",
                  "es": "Espresso with chocolate and steamed milk",
                  "de": "Espresso with chocolate and steamed milk",
                  "nl": "Espresso with chocolate and steamed milk"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A mocha (or caffè mocha) is espresso with chocolate syrup or powder and steamed milk.",
                  "es": "A mocha (or caffè mocha) is espresso with chocolate syrup or powder and steamed milk.",
                  "de": "A mocha (or caffè mocha) is espresso with chocolate syrup or powder and steamed milk.",
                  "nl": "A mocha (or caffè mocha) is espresso with chocolate syrup or powder and steamed milk."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  }
})();