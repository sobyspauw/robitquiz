// Early Dinosaurs Quiz - Level 2
(function() {
  const level2 = {
    name: {
          "en": "Early Dinosaurs Level 2",
          "es": "Dinosaurios Tempranos Nivel 2",
          "de": "Frühe Dinosaurier Stufe 2",
          "nl": "Vroege Dinosaurussen Level 2"
    },
    questions: [
      {
        question: {
                  "en": "In which geological period did the first dinosaurs appear?",
                  "es": "¿En qué período geológico aparecieron los primeros dinosaurios?",
                  "de": "In welcher geologischen Periode erschienen die ersten Dinosaurier?",
                  "nl": "In welke geologische periode verschenen de eerste dinosaurussen?"
        },
        options: [
        {
                  "en": "Triassic period",
                  "es": "Período Triásico",
                  "de": "Trias-Periode",
                  "nl": "Trias-periode"
        },
        {
                  "en": "Cretaceous period",
                  "es": "Período Cretácico",
                  "de": "Kreide-Periode",
                  "nl": "Krijt-periode"
        },
        {
                  "en": "Permian period",
                  "es": "Período Pérmico",
                  "de": "Perm-Periode",
                  "nl": "Perm-periode"
        },
        {
                  "en": "Jurassic period",
                  "es": "Período Jurásico",
                  "de": "Jura-Periode",
                  "nl": "Jura-periode"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The first dinosaurs appeared during the Triassic period, about 230-240 million years ago. This was the beginning of the Mesozoic Era, often called the 'Age of Dinosaurs'.",
                  "es": "Los primeros dinosaurios aparecieron durante el período Triásico, hace unos 230-240 millones de años. Este fue el comienzo de la Era Mesozoica, a menudo llamada la 'Era de los Dinosaurios'.",
                  "de": "Die ersten Dinosaurier erschienen während der Trias-Periode, vor etwa 230-240 Millionen Jahren. Dies war der Beginn des Mesozoikums, oft als 'Zeitalter der Dinosaurier' bezeichnet.",
                  "nl": "De eerste dinosaurussen verschenen tijdens de Trias-periode, ongeveer 230-240 miljoen jaar geleden. Dit was het begin van het Mesozoïcum, vaak het 'Tijdperk van de Dinosaurussen' genoemd."
        }
      },
      {
        question: {
                  "en": "What was Eoraptor's approximate length?",
                  "es": "¿Cuál era la longitud aproximada de Eoraptor?",
                  "de": "Wie lang war Eoraptor ungefähr?",
                  "nl": "Wat was de geschatte lengte van Eoraptor?"
        },
        options: [
        {
                  "en": "10 meters (33 feet)",
                  "es": "10 metros (33 pies)",
                  "de": "10 Meter (33 Fuß)",
                  "nl": "10 meter (33 voet)"
        },
        {
                  "en": "1 meter (3 feet)",
                  "es": "1 metro (3 pies)",
                  "de": "1 Meter (3 Fuß)",
                  "nl": "1 meter (3 voet)"
        },
        {
                  "en": "5 meters (16 feet)",
                  "es": "5 metros (16 pies)",
                  "de": "5 Meter (16 Fuß)",
                  "nl": "5 meter (16 voet)"
        },
        {
                  "en": "20 meters (66 feet)",
                  "es": "20 metros (66 pies)",
                  "de": "20 Meter (66 Fuß)",
                  "nl": "20 meter (66 voet)"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Eoraptor was about 1 meter (3 feet) long and weighed around 10 kilograms (22 pounds). It was one of the smallest and earliest known dinosaurs, about the size of a large dog.",
                  "es": "Eoraptor medía aproximadamente 1 metro (3 pies) de largo y pesaba alrededor de 10 kilogramos (22 libras). Era uno de los dinosaurios más pequeños y antiguos conocidos, del tamaño de un perro grande.",
                  "de": "Eoraptor war etwa 1 Meter (3 Fuß) lang und wog rund 10 Kilogramm (22 Pfund). Er war einer der kleinsten und frühesten bekannten Dinosaurier, etwa so groß wie ein großer Hund.",
                  "nl": "Eoraptor was ongeveer 1 meter (3 voet) lang en woog rond de 10 kilogram (22 pond). Het was een van de kleinste en vroegste bekende dinosaurussen, ongeveer zo groot als een grote hond."
        }
      },
      {
        question: {
                  "en": "Where was Eoraptor discovered?",
                  "es": "¿Dónde fue descubierto Eoraptor?",
                  "de": "Wo wurde Eoraptor entdeckt?",
                  "nl": "Waar werd Eoraptor ontdekt?"
        },
        options: [
        {
                  "en": "Argentina's Ischigualasto Valley",
                  "es": "Valle de Ischigualasto, Argentina",
                  "de": "Ischigualasto-Tal, Argentinien",
                  "nl": "Ischigualasto-vallei, Argentinië"
        },
        {
                  "en": "China's Liaoning Province",
                  "es": "Provincia de Liaoning, China",
                  "de": "Liaoning-Provinz, China",
                  "nl": "Liaoning-provincie, China"
        },
        {
                  "en": "Montana, USA",
                  "es": "Montana, EE.UU.",
                  "de": "Montana, USA",
                  "nl": "Montana, VS"
        },
        {
                  "en": "Morocco's Sahara Desert",
                  "es": "Desierto del Sahara, Marruecos",
                  "de": "Sahara-Wüste, Marokko",
                  "nl": "Sahara-woestijn, Marokko"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Eoraptor was discovered in Argentina's Ischigualasto Valley in 1991 by paleontologist Paul Sereno. This area, also known as 'Valley of the Moon', is famous for its Triassic period fossils.",
                  "es": "Eoraptor fue descubierto en el Valle de Ischigualasto de Argentina en 1991 por el paleontólogo Paul Sereno. Esta área, también conocida como 'Valle de la Luna', es famosa por sus fósiles del período Triásico.",
                  "de": "Eoraptor wurde 1991 vom Paläontologen Paul Sereno im Ischigualasto-Tal in Argentinien entdeckt. Dieses Gebiet, auch als 'Tal des Mondes' bekannt, ist berühmt für seine Fossilien aus der Trias-Periode.",
                  "nl": "Eoraptor werd in 1991 ontdekt in de Ischigualasto-vallei in Argentinië door paleontoloog Paul Sereno. Dit gebied, ook bekend als 'Vallei van de Maan', is beroemd om zijn fossielen uit de Trias-periode."
        }
      },
      {
        question: {
                  "en": "What does the name 'Herrerasaurus' mean?",
                  "es": "¿Qué significa el nombre 'Herrerasaurus'?",
                  "de": "Was bedeutet der Name 'Herrerasaurus'?",
                  "nl": "Wat betekent de naam 'Herrerasaurus'?"
        },
        options: [
        {
                  "en": "Hunter lizard",
                  "es": "Lagarto cazador",
                  "de": "Jäger-Echse",
                  "nl": "Jager-hagedis"
        },
        {
                  "en": "First lizard",
                  "es": "Primer lagarto",
                  "de": "Erste Echse",
                  "nl": "Eerste hagedis"
        },
        {
                  "en": "Fast lizard",
                  "es": "Lagarto rápido",
                  "de": "Schnelle Echse",
                  "nl": "Snelle hagedis"
        },
        {
                  "en": "Herrera's lizard",
                  "es": "Lagarto de Herrera",
                  "de": "Herreras Echse",
                  "nl": "Herrera's hagedis"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Herrerasaurus means 'Herrera's lizard', named after Victorino Herrera, the rancher who discovered the first fossils in 1958 in Argentina's Ischigualasto Formation.",
                  "es": "Herrerasaurus significa 'lagarto de Herrera', nombrado en honor a Victorino Herrera, el ganadero que descubrió los primeros fósiles en 1958 en la Formación Ischigualasto de Argentina.",
                  "de": "Herrerasaurus bedeutet 'Herreras Echse', benannt nach Victorino Herrera, dem Rancher, der 1958 die ersten Fossilien in Argentiniens Ischigualasto-Formation entdeckte.",
                  "nl": "Herrerasaurus betekent 'Herrera's hagedis', genoemd naar Victorino Herrera, de rancher die in 1958 de eerste fossielen ontdekte in Argentinië's Ischigualasto-formatie."
        }
      },
      {
        question: {
                  "en": "What made Coelophysis different from other early dinosaurs?",
                  "es": "¿Qué hizo diferente a Coelophysis de otros dinosaurios tempranos?",
                  "de": "Was machte Coelophysis anders als andere frühe Dinosaurier?",
                  "nl": "Wat maakte Coelophysis anders dan andere vroege dinosaurussen?"
        },
        options: [
        {
                  "en": "It was nocturnal",
                  "es": "Era nocturno",
                  "de": "Er war nachtaktiv",
                  "nl": "Hij was nachtactief"
        },
        {
                  "en": "It could swim",
                  "es": "Podía nadar",
                  "de": "Er konnte schwimmen",
                  "nl": "Hij kon zwemmen"
        },
        {
                  "en": "It lived in large groups",
                  "es": "Vivía en grupos grandes",
                  "de": "Er lebte in großen Gruppen",
                  "nl": "Hij leefde in grote groepen"
        },
        {
                  "en": "It had feathers",
                  "es": "Tenía plumas",
                  "de": "Er hatte Federn",
                  "nl": "Hij had veren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Coelophysis is famous for being found in large groups, suggesting they lived and hunted together. Hundreds of skeletons have been found together in what appears to be mass death events.",
                  "es": "Coelophysis es famoso por ser encontrado en grupos grandes, sugiriendo que vivían y cazaban juntos. Se han encontrado cientos de esqueletos juntos en lo que parece ser eventos de muerte masiva.",
                  "de": "Coelophysis ist berühmt dafür, in großen Gruppen gefunden zu werden, was darauf hindeutet, dass sie zusammen lebten und jagten. Hunderte von Skeletten wurden zusammen gefunden in dem, was Massensterben-Ereignisse zu sein scheinen.",
                  "nl": "Coelophysis is beroemd omdat hij in grote groepen werd gevonden, wat suggereert dat ze samen leefden en jaagden. Honderden skeletten zijn samen gevonden in wat lijken op massale sterfte-gebeurtenissen."
        }
      },
      {
        question: {
                  "en": "What was special about Plateosaurus compared to earlier dinosaurs?",
                  "es": "¿Qué tenía de especial Plateosaurus comparado con dinosaurios anteriores?",
                  "de": "Was war besonders an Plateosaurus im Vergleich zu früheren Dinosauriern?",
                  "nl": "Wat was bijzonder aan Plateosaurus vergeleken met eerdere dinosaurussen?"
        },
        options: [
        {
                  "en": "It lived underwater",
                  "es": "Vivía bajo el agua",
                  "de": "Er lebte unter Wasser",
                  "nl": "Hij leefde onder water"
        },
        {
                  "en": "It could fly",
                  "es": "Podía volar",
                  "de": "Er konnte fliegen",
                  "nl": "Hij kon vliegen"
        },
        {
                  "en": "It was much larger and ate plants",
                  "es": "Era mucho más grande y comía plantas",
                  "de": "Er war viel größer und fraß Pflanzen",
                  "nl": "Hij was veel groter en at planten"
        },
        {
                  "en": "It had armor plating",
                  "es": "Tenía placas de armadura",
                  "de": "Er hatte Panzerplatten",
                  "nl": "Hij had pantserplaten"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Plateosaurus was much larger than earlier dinosaurs (up to 10 meters long) and was one of the first large herbivorous dinosaurs. It could walk on both two and four legs.",
                  "es": "Plateosaurus era mucho más grande que los dinosaurios anteriores (hasta 10 metros de largo) y fue uno de los primeros grandes dinosaurios herbívoros. Podía caminar tanto en dos como en cuatro patas.",
                  "de": "Plateosaurus war viel größer als frühere Dinosaurier (bis zu 10 Meter lang) und war einer der ersten großen pflanzenfressenden Dinosaurier. Er konnte sowohl auf zwei als auch auf vier Beinen laufen.",
                  "nl": "Plateosaurus was veel groter dan eerdere dinosaurussen (tot 10 meter lang) en was een van de eerste grote herbivore dinosaurussen. Hij kon zowel op twee als op vier benen lopen."
        }
      },
      {
        question: {
                  "en": "What period came after the Triassic?",
                  "es": "¿Qué período vino después del Triásico?",
                  "de": "Welche Periode kam nach der Trias?",
                  "nl": "Welke periode kwam na de Trias?"
        },
        options: [
        {
                  "en": "Jurassic period",
                  "es": "Período Jurásico",
                  "de": "Jura-Periode",
                  "nl": "Jura-periode"
        },
        {
                  "en": "Devonian period",
                  "es": "Período Devónico",
                  "de": "Devon-Periode",
                  "nl": "Devoon-periode"
        },
        {
                  "en": "Permian period",
                  "es": "Período Pérmico",
                  "de": "Perm-Periode",
                  "nl": "Perm-periode"
        },
        {
                  "en": "Cretaceous period",
                  "es": "Período Cretácico",
                  "de": "Kreide-Periode",
                  "nl": "Krijt-periode"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The Jurassic period came after the Triassic, lasting from about 201 to 145 million years ago. This is when many famous dinosaurs like Allosaurus and Diplodocus lived.",
                  "es": "El período Jurásico vino después del Triásico, durando desde hace aproximadamente 201 a 145 millones de años. Fue cuando vivieron muchos dinosaurios famosos como Allosaurus y Diplodocus.",
                  "de": "Die Jura-Periode kam nach der Trias und dauerte von etwa 201 bis 145 Millionen Jahren. In dieser Zeit lebten viele berühmte Dinosaurier wie Allosaurus und Diplodocus.",
                  "nl": "De Jura-periode kwam na de Trias en duurde van ongeveer 201 tot 145 miljoen jaar geleden. Dit is toen veel beroemde dinosaurussen zoals Allosaurus en Diplodocus leefden."
        }
      },
      {
        question: {
                  "en": "How did early dinosaurs catch their prey?",
                  "es": "¿Cómo atrapaban los primeros dinosaurios a su presa?",
                  "de": "Wie fingen frühe Dinosaurier ihre Beute?",
                  "nl": "Hoe vingen vroege dinosaurussen hun prooi?"
        },
        options: [
        {
                  "en": "With poisonous bites",
                  "es": "Con mordidas venenosas",
                  "de": "Mit giftigen Bissen",
                  "nl": "Met giftige beten"
        },
        {
                  "en": "With sticky tongues",
                  "es": "Con lenguas pegajosas",
                  "de": "Mit klebrigen Zungen",
                  "nl": "Met plakkerige tongen"
        },
        {
                  "en": "With speed and sharp teeth",
                  "es": "Con velocidad y dientes afilados",
                  "de": "Mit Geschwindigkeit und scharfen Zähnen",
                  "nl": "Met snelheid en scherpe tanden"
        },
        {
                  "en": "With electric shocks",
                  "es": "Con descargas eléctricas",
                  "de": "Mit elektrischen Schlägen",
                  "nl": "Met elektrische schokken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Early dinosaurs were successful hunters because they were fast runners and had sharp, pointed teeth perfect for catching and holding small prey like lizards, early mammals, and insects.",
                  "es": "Los primeros dinosaurios eran cazadores exitosos porque eran corredores rápidos y tenían dientes afilados y puntiagudos perfectos para atrapar y sostener presas pequeñas como lagartos, mamíferos tempranos e insectos.",
                  "de": "Frühe Dinosaurier waren erfolgreiche Jäger, weil sie schnelle Läufer waren und scharfe, spitze Zähne hatten, die perfekt zum Fangen und Festhalten kleiner Beute wie Echsen, frühe Säugetiere und Insekten geeignet waren.",
                  "nl": "Vroege dinosaurussen waren succesvolle jagers omdat ze snelle renners waren en scherpe, puntige tanden hadden die perfect waren voor het vangen en vasthouden van kleine prooi zoals hagedissen, vroege zoogdieren en insecten."
        }
      },
      {
        question: {
                  "en": "What was the climate like during the Triassic period?",
                  "es": "¿Cómo era el clima durante el período Triásico?",
                  "de": "Wie war das Klima während der Trias-Periode?",
                  "nl": "Hoe was het klimaat tijdens de Trias-periode?"
        },
        options: [
        {
                  "en": "Exactly like today",
                  "es": "Exactamente como hoy",
                  "de": "Genau wie heute",
                  "nl": "Precies zoals vandaag"
        },
        {
                  "en": "Hot and dry with no polar ice caps",
                  "es": "Caliente y seco sin casquetes polares",
                  "de": "Heiß und trocken ohne polare Eiskappen",
                  "nl": "Heet en droog zonder poolijskappen"
        },
        {
                  "en": "Cold with ice everywhere",
                  "es": "Frío con hielo en todas partes",
                  "de": "Kalt mit Eis überall",
                  "nl": "Koud met ijs overal"
        },
        {
                  "en": "Constantly raining",
                  "es": "Lloviendo constantemente",
                  "de": "Ständig regnend",
                  "nl": "Constant regenend"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The Triassic period had a hot, dry climate with no ice caps at the poles. Much of the land was desert-like, which is why early dinosaurs were adapted to survive in harsh, arid conditions.",
                  "es": "El período Triásico tenía un clima caliente y seco sin casquetes de hielo en los polos. Gran parte de la tierra era como un desierto, por lo que los primeros dinosaurios estaban adaptados para sobrevivir en condiciones duras y áridas.",
                  "de": "Die Trias-Periode hatte ein heißes, trockenes Klima ohne Eiskappen an den Polen. Ein Großteil des Landes war wüstenähnlich, weshalb frühe Dinosaurier daran angepasst waren, unter harten, trockenen Bedingungen zu überleben.",
                  "nl": "De Trias-periode had een heet, droog klimaat zonder ijskappen op de polen. Veel van het land was woestijnachtig, daarom waren vroege dinosaurussen aangepast om te overleven in harde, droge omstandigheden."
        }
      },
      {
        question: {
                  "en": "What were the dominant land animals before dinosaurs?",
                  "es": "¿Cuáles eran los animales terrestres dominantes antes de los dinosaurios?",
                  "de": "Was waren die dominierenden Landtiere vor den Dinosauriern?",
                  "nl": "Wat waren de dominante landdieren voor de dinosaurussen?"
        },
        options: [
        {
                  "en": "Archosaurs and synapsids",
                  "es": "Arcosaurios y sinapsidos",
                  "de": "Archosaurier und Synapsiden",
                  "nl": "Archosauriërs en synapsiden"
        },
        {
                  "en": "Fish",
                  "es": "Peces",
                  "de": "Fische",
                  "nl": "Vissen"
        },
        {
                  "en": "Mammals",
                  "es": "Mamíferos",
                  "de": "Säugetiere",
                  "nl": "Zoogdieren"
        },
        {
                  "en": "Birds",
                  "es": "Aves",
                  "de": "Vögel",
                  "nl": "Vogels"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Before dinosaurs dominated, archosaurs (including early crocodiles) and synapsids (including early mammal relatives) were the main large land animals. Dinosaurs evolved from early archosaurs.",
                  "es": "Antes de que los dinosaurios dominaran, los arcosaurios (incluyendo cocodrilos tempranos) y los sinapsidos (incluyendo parientes tempranos de mamíferos) eran los principales animales terrestres grandes. Los dinosaurios evolucionaron de los arcosaurios tempranos.",
                  "de": "Bevor Dinosaurier dominierten, waren Archosaurier (einschließlich früher Krokodile) und Synapsiden (einschließlich früher Säugetier-Verwandter) die hauptsächlichen großen Landtiere. Dinosaurier entwickelten sich aus frühen Archosauriern.",
                  "nl": "Voordat dinosaurussen domineerden, waren archosauriërs (inclusief vroege krokodillen) en synapsiden (inclusief vroege zoogdierverwanten) de belangrijkste grote landdieren. Dinosaurussen evolueerden uit vroege archosauriërs."
        }
      },
      {
        question: {
                  "en": "What advantage did bipedalism give early dinosaurs?",
                  "es": "¿Qué ventaja les dio el bipedalismo a los primeros dinosaurios?",
                  "de": "Welchen Vorteil gab der Bipedalismus frühen Dinosauriern?",
                  "nl": "Welk voordeel gaf het lopen op twee benen aan vroege dinosaurussen?"
        },
        options: [
        {
                  "en": "Better camouflage",
                  "es": "Mejor camuflaje",
                  "de": "Bessere Tarnung",
                  "nl": "Betere camouflage"
        },
        {
                  "en": "Ability to fly",
                  "es": "Capacidad de volar",
                  "de": "Flugfähigkeit",
                  "nl": "Vermogen om te vliegen"
        },
        {
                  "en": "Better swimming ability",
                  "es": "Mejor capacidad de natación",
                  "de": "Bessere Schwimmfähigkeit",
                  "nl": "Beter zwemvermogen"
        },
        {
                  "en": "Greater speed and agility",
                  "es": "Mayor velocidad y agilidad",
                  "de": "Größere Geschwindigkeit und Wendigkeit",
                  "nl": "Grotere snelheid en behendigheid"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Walking on two legs (bipedalism) gave early dinosaurs greater speed and agility for hunting and escaping predators. It also freed their front limbs for other uses like grasping prey.",
                  "es": "Caminar en dos patas (bipedalismo) les dio a los primeros dinosaurios mayor velocidad y agilidad para cazar y escapar de los depredadores. También liberó sus extremidades delanteras para otros usos como agarrar presas.",
                  "de": "Das Gehen auf zwei Beinen (Bipedalismus) gab frühen Dinosauriern größere Geschwindigkeit und Wendigkeit zum Jagen und Entkommen vor Raubtieren. Es befreite auch ihre Vorderbeine für andere Zwecke wie das Greifen von Beute.",
                  "nl": "Lopen op twee benen (bipedalisme) gaf vroege dinosaurussen grotere snelheid en behendigheid voor jagen en ontsnappen aan roofdieren. Het bevrijdde ook hun voorpoten voor andere doeleinden zoals het grijpen van prooi."
        }
      },
      {
        question: {
                  "en": "What was Staurikosaurus known for?",
                  "es": "¿Por qué era conocido Staurikosaurus?",
                  "de": "Wofür war Staurikosaurus bekannt?",
                  "nl": "Waarvoor was Staurikosaurus bekend?"
        },
        options: [
        {
                  "en": "Being one of the earliest dinosaurs discovered",
                  "es": "Ser uno de los primeros dinosaurios descubiertos",
                  "de": "Einer der frühesten entdeckten Dinosaurier zu sein",
                  "nl": "Een van de vroegste ontdekte dinosaurussen te zijn"
        },
        {
                  "en": "Being the largest predator",
                  "es": "Ser el depredador más grande",
                  "de": "Der größte Raubtier zu sein",
                  "nl": "De grootste roofdier te zijn"
        },
        {
                  "en": "Living in the water",
                  "es": "Vivir en el agua",
                  "de": "Im Wasser zu leben",
                  "nl": "In het water te leven"
        },
        {
                  "en": "Having the longest neck",
                  "es": "Tener el cuello más largo",
                  "de": "Den längsten Hals zu haben",
                  "nl": "De langste nek te hebben"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Staurikosaurus is important because it's one of the earliest known dinosaurs, dating to about 233 million years ago. It was discovered in Brazil and helps us understand early dinosaur evolution.",
                  "es": "Staurikosaurus es importante porque es uno de los dinosaurios más antiguos conocidos, datando de hace unos 233 millones de años. Fue descubierto en Brasil y nos ayuda a entender la evolución temprana de los dinosaurios.",
                  "de": "Staurikosaurus ist wichtig, weil er einer der frühesten bekannten Dinosaurier ist, der etwa 233 Millionen Jahre alt ist. Er wurde in Brasilien entdeckt und hilft uns, die frühe Dinosaurierevolution zu verstehen.",
                  "nl": "Staurikosaurus is belangrijk omdat het een van de vroegst bekende dinosaurussen is, daterend van ongeveer 233 miljoen jaar geleden. Hij werd ontdekt in Brazilië en helpt ons de vroege dinosaurusevolutie te begrijpen."
        }
      },
      {
        question: {
                  "en": "How did early dinosaurs differ from their archosaur ancestors?",
                  "es": "¿En qué se diferenciaban los primeros dinosaurios de sus ancestros arcosaurios?",
                  "de": "Wie unterschieden sich frühe Dinosaurier von ihren Archosaurier-Vorfahren?",
                  "nl": "Hoe verschilden vroege dinosaurussen van hun archosauriërvoorouders?"
        },
        options: [
        {
                  "en": "They were always larger",
                  "es": "Siempre eran más grandes",
                  "de": "Sie waren immer größer",
                  "nl": "Ze waren altijd groter"
        },
        {
                  "en": "They could only eat plants",
                  "es": "Solo podían comer plantas",
                  "de": "Sie konnten nur Pflanzen fressen",
                  "nl": "Ze konden alleen planten eten"
        },
        {
                  "en": "They had more upright leg posture",
                  "es": "Tenían una postura de las patas más erguida",
                  "de": "Sie hatten eine aufrechteren Beinhaltung",
                  "nl": "Ze hadden een meer rechtopstaande beenhouding"
        },
        {
                  "en": "They had no teeth",
                  "es": "No tenían dientes",
                  "de": "Sie hatten keine Zähne",
                  "nl": "Ze hadden geen tanden"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Early dinosaurs developed a more upright leg posture with legs positioned directly under their bodies, unlike their sprawling archosaur ancestors. This gave them better mobility and efficiency.",
                  "es": "Los primeros dinosaurios desarrollaron una postura más erguida de las patas con las piernas posicionadas directamente bajo sus cuerpos, a diferencia de sus ancestros arcosaurios extendidos. Esto les dio mejor movilidad y eficiencia.",
                  "de": "Frühe Dinosaurier entwickelten eine aufrechteren Beinhaltung mit Beinen, die direkt unter ihren Körpern positioniert waren, im Gegensatz zu ihren sich ausbreitenden Archosaurier-Vorfahren. Das gab ihnen bessere Mobilität und Effizienz.",
                  "nl": "Vroege dinosaurussen ontwikkelden een meer rechtopstaande beenhouding met benen die direct onder hun lichaam waren gepositioneerd, in tegenstelling tot hun uitgespreid lopende archosauriërvoorouders. Dit gaf hen betere mobiliteit en efficiëntie."
        }
      },
      {
        question: {
                  "en": "What happened at the end of the Triassic period?",
                  "es": "¿Qué pasó al final del período Triásico?",
                  "de": "Was geschah am Ende der Trias-Periode?",
                  "nl": "Wat gebeurde er aan het einde van de Trias-periode?"
        },
        options: [
        {
                  "en": "The first flowering plants appeared",
                  "es": "Aparecieron las primeras plantas con flores",
                  "de": "Die ersten Blütenpflanzen erschienen",
                  "nl": "De eerste bloeiende planten verschenen"
        },
        {
                  "en": "A mass extinction event",
                  "es": "Un evento de extinción masiva",
                  "de": "Ein Massenaussterbeereignis",
                  "nl": "Een massa-extinctie gebeurtenis"
        },
        {
                  "en": "The first mammals appeared",
                  "es": "Aparecieron los primeros mamíferos",
                  "de": "Die ersten Säugetiere erschienen",
                  "nl": "De eerste zoogdieren verschenen"
        },
        {
                  "en": "Dinosaurs became extinct",
                  "es": "Los dinosaurios se extinguieron",
                  "de": "Dinosaurier starben aus",
                  "nl": "Dinosaurussen stierven uit"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The Triassic-Jurassic extinction event occurred about 201 million years ago, eliminating many competing groups and allowing dinosaurs to become the dominant land animals in the Jurassic period.",
                  "es": "El evento de extinción Triásico-Jurásico ocurrió hace unos 201 millones de años, eliminando muchos grupos competidores y permitiendo que los dinosaurios se convirtieran en los animales terrestres dominantes en el período Jurásico.",
                  "de": "Das Trias-Jura-Aussterbeereignis ereignete sich vor etwa 201 Millionen Jahren, eliminierte viele konkurrierende Gruppen und ermöglichte es Dinosauriern, die dominierenden Landtiere in der Jura-Periode zu werden.",
                  "nl": "De Trias-Jura extinctie-gebeurtenis vond plaats ongeveer 201 miljoen jaar geleden, waarbij veel concurrerende groepen werden weggenomen en dinosaurussen de dominante landdieren in de Jura-periode konden worden."
        }
      },
      {
        question: {
                  "en": "What type of environment did Coelophysis prefer?",
                  "es": "¿Qué tipo de ambiente prefería Coelophysis?",
                  "de": "Welche Art von Umgebung bevorzugte Coelophysis?",
                  "nl": "Welk type omgeving had Coelophysis de voorkeur voor?"
        },
        options: [
        {
                  "en": "River plains and floodplains",
                  "es": "Llanuras de ríos y llanuras de inundación",
                  "de": "Flussebenen und Überschwemmungsgebiete",
                  "nl": "Riviervlaktes en overstromingsgebieden"
        },
        {
                  "en": "Mountain peaks",
                  "es": "Picos de montañas",
                  "de": "Berggipfel",
                  "nl": "Bergtoppen"
        },
        {
                  "en": "Dense forests",
                  "es": "Bosques densos",
                  "de": "Dichte Wälder",
                  "nl": "Dichte bossen"
        },
        {
                  "en": "Ocean shores",
                  "es": "Costas oceánicas",
                  "de": "Meeresküsten",
                  "nl": "Oceaankusten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Coelophysis fossils are commonly found in river and floodplain deposits, suggesting they lived in areas with seasonal water sources where prey animals would gather to drink.",
                  "es": "Los fósiles de Coelophysis se encuentran comúnmente en depósitos de ríos y llanuras de inundación, sugiriendo que vivían en áreas con fuentes de agua estacionales donde los animales presa se reunirían para beber.",
                  "de": "Coelophysis-Fossilien werden häufig in Fluss- und Überschwemmungsgebiets-Ablagerungen gefunden, was darauf hindeutet, dass sie in Gebieten mit saisonalen Wasserquellen lebten, wo sich Beutetiere zum Trinken versammelten.",
                  "nl": "Coelophysis-fossielen worden vaak gevonden in rivier- en overstromingsgebied-afzettingen, wat suggereert dat ze leefden in gebieden met seizoensgebonden waterbronnen waar prooididieren samenkwamen om te drinken."
        }
      },
      {
        question: {
                  "en": "What was unique about Thecodontosaurus?",
                  "es": "¿Qué tenía de único Thecodontosaurus?",
                  "de": "Was war einzigartig an Thecodontosaurus?",
                  "nl": "Wat was uniek aan Thecodontosaurus?"
        },
        options: [
        {
                  "en": "It could change colors",
                  "es": "Podía cambiar de colores",
                  "de": "Er konnte Farben wechseln",
                  "nl": "Hij kon van kleur veranderen"
        },
        {
                  "en": "It had webbed feet",
                  "es": "Tenía patas palmeadas",
                  "de": "Er hatte Schwimmhäute",
                  "nl": "Hij had zwemvliezen"
        },
        {
                  "en": "It was one of the first dinosaurs with plant-eating adaptations",
                  "es": "Fue uno de los primeros dinosaurios con adaptaciones para comer plantas",
                  "de": "Er war einer der ersten Dinosaurier mit pflanzenfressenden Anpassungen",
                  "nl": "Het was een van de eerste dinosaurussen met plantenetende aanpassingen"
        },
        {
                  "en": "It was nocturnal only",
                  "es": "Era solo nocturno",
                  "de": "Er war nur nachtaktiv",
                  "nl": "Hij was alleen nachtactief"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Thecodontosaurus was significant as one of the earliest sauropodomorph dinosaurs, showing early adaptations for plant-eating including leaf-shaped teeth and a longer neck for reaching vegetation.",
                  "es": "Thecodontosaurus fue significativo como uno de los primeros dinosaurios sauropodomorphos, mostrando adaptaciones tempranas para comer plantas incluyendo dientes en forma de hoja y un cuello más largo para alcanzar la vegetación.",
                  "de": "Thecodontosaurus war bedeutsam als einer der frühesten Sauropodomorph-Dinosaurier und zeigte frühe Anpassungen für das Pflanzenfresserdasein, einschließlich blattförmiger Zähne und eines längeren Halses zum Erreichen von Vegetation.",
                  "nl": "Thecodontosaurus was significant als een van de vroegste sauropodomorfe dinosaurussen, en toonde vroege aanpassingen voor plantenetend gedrag, inclusief bladvormige tanden en een langere nek voor het bereiken van vegetatie."
        }
      },
      {
        question: {
                  "en": "How did early dinosaurs help change ecosystems?",
                  "es": "¿Cómo ayudaron los primeros dinosaurios a cambiar los ecosistemas?",
                  "de": "Wie halfen frühe Dinosaurier dabei, Ökosysteme zu verändern?",
                  "nl": "Hoe hielpen vroege dinosaurussen ecosystemen te veranderen?"
        },
        options: [
        {
                  "en": "They became efficient new predators and herbivores",
                  "es": "Se convirtieron en nuevos depredadores y herbívoros eficientes",
                  "de": "Sie wurden zu effizienten neuen Raubtieren und Pflanzenfressern",
                  "nl": "Ze werden efficiënte nieuwe roofdieren en herbivoren"
        },
        {
                  "en": "They pollinated all the flowers",
                  "es": "Polinizaron todas las flores",
                  "de": "Sie bestäubten alle Blumen",
                  "nl": "Ze bestuifden alle bloemen"
        },
        {
                  "en": "They created the first lakes",
                  "es": "Crearon los primeros lagos",
                  "de": "Sie schufen die ersten Seen",
                  "nl": "Ze creëerden de eerste meren"
        },
        {
                  "en": "They only lived in caves",
                  "es": "Solo vivían en cuevas",
                  "de": "Sie lebten nur in Höhlen",
                  "nl": "Ze leefden alleen in grotten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Early dinosaurs introduced new hunting strategies and plant-eating methods that changed how ecosystems functioned. Their efficiency as both predators and herbivores reshaped ancient food webs.",
                  "es": "Los primeros dinosaurios introdujeron nuevas estrategias de caza y métodos de comer plantas que cambiaron cómo funcionaban los ecosistemas. Su eficiencia como depredadores y herbívoros remodelaron las redes alimentarias antiguas.",
                  "de": "Frühe Dinosaurier führten neue Jagdstrategien und Pflanzenfress-Methoden ein, die veränderten, wie Ökosysteme funktionierten. Ihre Effizienz als sowohl Raubtiere als auch Pflanzenfresser formte alte Nahrungsnetze um.",
                  "nl": "Vroege dinosaurussen introduceerden nieuwe jachtstrategieën en plantenetende methoden die veranderden hoe ecosystemen functioneerden. Hun efficiëntie als zowel roofdieren als herbivoren vormde oude voedselwebben opnieuw."
        }
      },
      {
        question: {
                  "en": "What can we learn from early dinosaur trackways?",
                  "es": "¿Qué podemos aprender de las huellas de los primeros dinosaurios?",
                  "de": "Was können wir von frühen Dinosaurier-Spurwegen lernen?",
                  "nl": "Wat kunnen we leren van vroege dinosaurussporen?"
        },
        options: [
        {
                  "en": "Their exact colors",
                  "es": "Sus colores exactos",
                  "de": "Ihre exakten Farben",
                  "nl": "Hun exacte kleuren"
        },
        {
                  "en": "Their speed, behavior, and group dynamics",
                  "es": "Su velocidad, comportamiento y dinámicas grupales",
                  "de": "Ihre Geschwindigkeit, Verhalten und Gruppendynamik",
                  "nl": "Hun snelheid, gedrag en groepsdynamiek"
        },
        {
                  "en": "What they ate for breakfast",
                  "es": "Lo que desayunaban",
                  "de": "Was sie zum Frühstück aßen",
                  "nl": "Wat ze als ontbijt aten"
        },
        {
                  "en": "Their age when they died",
                  "es": "Su edad cuando murieron",
                  "de": "Ihr Alter beim Tod",
                  "nl": "Hun leeftijd toen ze stierven"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Dinosaur trackways preserve evidence of behavior, including walking speed, whether they traveled in groups, and how they moved through their environment. This gives us insights into their daily lives.",
                  "es": "Las huellas de dinosaurios preservan evidencia del comportamiento, incluyendo la velocidad de caminata, si viajaban en grupos, y cómo se movían por su entorno. Esto nos da información sobre sus vidas diarias.",
                  "de": "Dinosaurier-Spurwege bewahren Belege für Verhalten, einschließlich Gehgeschwindigkeit, ob sie in Gruppen reisten, und wie sie sich durch ihre Umgebung bewegten. Das gibt uns Einblicke in ihr tägliches Leben.",
                  "nl": "Dinosaurussporen bewaren bewijs van gedrag, inclusief loopsnelheid, of ze in groepen reisden, en hoe ze door hun omgeving bewogen. Dit geeft ons inzicht in hun dagelijks leven."
        }
      },
      {
        question: {
                  "en": "What made Staurikosaurus different from other early dinosaurs?",
                  "es": "¿Qué hizo diferente a Staurikosaurus de otros dinosaurios tempranos?",
                  "de": "Was machte Staurikosaurus anders als andere frühe Dinosaurier?",
                  "nl": "Wat maakte Staurikosaurus anders dan andere vroege dinosaurussen?"
        },
        options: [
        {
                  "en": "It had a very primitive hip structure",
                  "es": "Tenía una estructura de cadera muy primitiva",
                  "de": "Er hatte eine sehr primitive Hüftstruktur",
                  "nl": "Het had een zeer primitieve heupstructuur"
        },
        {
                  "en": "It was the largest early dinosaur",
                  "es": "Era el dinosaurio temprano más grande",
                  "de": "Er war der größte frühe Dinosaurier",
                  "nl": "Het was de grootste vroege dinosaurus"
        },
        {
                  "en": "It could swim underwater",
                  "es": "Podía nadar bajo el agua",
                  "de": "Er konnte unter Wasser schwimmen",
                  "nl": "Het kon onder water zwemmen"
        },
        {
                  "en": "It had feathers covering its body",
                  "es": "Tenía plumas cubriendo su cuerpo",
                  "de": "Er hatte Federn, die seinen Körper bedeckten",
                  "nl": "Het had veren die zijn lichaam bedekten"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Staurikosaurus had a very primitive hip structure that shows the early stages of dinosaur evolution. Its pelvis was simpler than later dinosaurs, giving us clues about how dinosaurs developed their characteristic features.",
                  "es": "Staurikosaurus tenía una estructura de cadera muy primitiva que muestra las primeras etapas de la evolución de los dinosaurios. Su pelvis era más simple que la de los dinosaurios posteriores, dándonos pistas sobre cómo desarrollaron sus características distintivas.",
                  "de": "Staurikosaurus hatte eine sehr primitive Hüftstruktur, die die frühen Stadien der Dinosaurierevolution zeigt. Sein Becken war einfacher als bei späteren Dinosauriern und gibt uns Hinweise darauf, wie Dinosaurier ihre charakteristischen Merkmale entwickelten.",
                  "nl": "Staurikosaurus had een zeer primitieve heupstructuur die de vroege stadia van dinosaurusevolutie toont. Zijn bekken was eenvoudiger dan bij latere dinosaurussen, wat ons aanwijzingen geeft over hoe dinosaurussen hun karakteristieke kenmerken ontwikkelden."
        }
      },
      {
        question: {
                  "en": "During which part of the Triassic period did most early dinosaurs live?",
                  "es": "¿Durante qué parte del período Triásico vivieron la mayoría de los primeros dinosaurios?",
                  "de": "In welchem Teil der Trias-Periode lebten die meisten frühen Dinosaurier?",
                  "nl": "Tijdens welk deel van de Trias-periode leefden de meeste vroege dinosaurussen?"
        },
        options: [
        {
                  "en": "Late Triassic (Carnian and Norian stages)",
                  "es": "Triásico tardío (etapas Carniense y Noriense)",
                  "de": "Späte Trias (Karnium und Norium)",
                  "nl": "Laat-Trias (Carnien en Norien fasen)"
        },
        {
                  "en": "Middle Triassic (Anisian stage)",
                  "es": "Triásico medio (etapa Anisiense)",
                  "de": "Mittlere Trias (Anisium)",
                  "nl": "Midden-Trias (Anisien fase)"
        },
        {
                  "en": "Early Triassic (Induan stage)",
                  "es": "Triásico temprano (etapa Induense)",
                  "de": "Frühe Trias (Induan)",
                  "nl": "Vroeg-Trias (Induan fase)"
        },
        {
                  "en": "Throughout the entire Triassic equally",
                  "es": "Durante todo el Triásico por igual",
                  "de": "Gleichmäßig während der gesamten Trias",
                  "nl": "Gedurende de hele Trias gelijkmatig"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Most early dinosaurs lived during the Late Triassic period, particularly in the Carnian and Norian stages (about 237-201 million years ago). This is when dinosaurs began to diversify and become more common in ecosystems.",
                  "es": "La mayoría de los primeros dinosaurios vivieron durante el período Triásico tardío, particularmente en las etapas Carniense y Noriense (hace unos 237-201 millones de años). Fue cuando los dinosaurios comenzaron a diversificarse y volverse más comunes en los ecosistemas.",
                  "de": "Die meisten frühen Dinosaurier lebten während der späten Trias-Periode, besonders in den Stufen Karnium und Norium (vor etwa 237-201 Millionen Jahren). Dies war die Zeit, als Dinosaurier begannen, sich zu diversifizieren und in Ökosystemen häufiger zu werden.",
                  "nl": "De meeste vroege dinosaurussen leefden tijdens de laat-Trias periode, vooral in de Carnien en Norien fasen (ongeveer 237-201 miljoen jaar geleden). Dit was toen dinosaurussen begonnen te diversifiëren en algemener werden in ecosystemen."
        }
      },
      {
        question: {
                  "en": "What was the first period with dinosaurs?",
                  "es": "What was the first period with dinosaurs?",
                  "de": "What was the first period with dinosaurs?",
                  "nl": "What was the first period with dinosaurs?"
        },
        options: [
        {
                  "en": "Jurassic Period",
                  "es": "Jurassic Period",
                  "de": "Jurassic Period",
                  "nl": "Jurassic Period"
        },
        {
                  "en": "Triassic Period",
                  "es": "Triassic Period",
                  "de": "Triassic Period",
                  "nl": "Triassic Period"
        },
        {
                  "en": "Permian Period",
                  "es": "Permian Period",
                  "de": "Permian Period",
                  "nl": "Permian Period"
        },
        {
                  "en": "Cretaceous Period",
                  "es": "Cretaceous Period",
                  "de": "Cretaceous Period",
                  "nl": "Cretaceous Period"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Dinosaurs first appeared in the Late Triassic Period, around 230 million years ago.",
                  "es": "Dinosaurs first appeared in the Late Triassic Period, around 230 million years ago.",
                  "de": "Dinosaurs first appeared in the Late Triassic Period, around 230 million years ago.",
                  "nl": "Dinosaurs first appeared in the Late Triassic Period, around 230 million years ago."
        }
      },
      {
        question: {
                  "en": "What is Eoraptor?",
                  "es": "What is Eoraptor?",
                  "de": "What is Eoraptor?",
                  "nl": "What is Eoraptor?"
        },
        options: [
        {
                  "en": "Early mammal",
                  "es": "Early mammal",
                  "de": "Early mammal",
                  "nl": "Early mammal"
        },
        {
                  "en": "First bird",
                  "es": "First bird",
                  "de": "First bird",
                  "nl": "First bird"
        },
        {
                  "en": "Large predator",
                  "es": "Large predator",
                  "de": "Large predator",
                  "nl": "Large predator"
        },
        {
                  "en": "One of the earliest known dinosaurs",
                  "es": "One of the earliest known dinosaurs",
                  "de": "One of the earliest known dinosaurs",
                  "nl": "One of the earliest known dinosaurs"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Eoraptor is one of the earliest and most primitive dinosaurs, living about 230 million years ago.",
                  "es": "Eoraptor is one of the earliest and most primitive dinosaurs, living about 230 million years ago.",
                  "de": "Eoraptor is one of the earliest and most primitive dinosaurs, living about 230 million years ago.",
                  "nl": "Eoraptor is one of the earliest and most primitive dinosaurs, living about 230 million years ago."
        }
      },
      {
        question: {
                  "en": "How big were the first dinosaurs?",
                  "es": "How big were the first dinosaurs?",
                  "de": "How big were the first dinosaurs?",
                  "nl": "How big were the first dinosaurs?"
        },
        options: [
        {
                  "en": "Tiny like mice",
                  "es": "Tiny like mice",
                  "de": "Tiny like mice",
                  "nl": "Tiny like mice"
        },
        {
                  "en": "Massive like T-Rex",
                  "es": "Massive like T-Rex",
                  "de": "Massive like T-Rex",
                  "nl": "Massive like T-Rex"
        },
        {
                  "en": "Medium like horses",
                  "es": "Medium like horses",
                  "de": "Medium like horses",
                  "nl": "Medium like horses"
        },
        {
                  "en": "Small, about the size of a dog or turkey",
                  "es": "Small, about the size of a dog or turkey",
                  "de": "Small, about the size of a dog or turkey",
                  "nl": "Small, about the size of a dog or turkey"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The earliest dinosaurs were relatively small, typically about the size of a turkey or small dog.",
                  "es": "The earliest dinosaurs were relatively small, typically about the size of a turkey or small dog.",
                  "de": "The earliest dinosaurs were relatively small, typically about the size of a turkey or small dog.",
                  "nl": "The earliest dinosaurs were relatively small, typically about the size of a turkey or small dog."
        }
      },
      {
        question: {
                  "en": "What did early dinosaurs compete with?",
                  "es": "What did early dinosaurs compete with?",
                  "de": "What did early dinosaurs compete with?",
                  "nl": "What did early dinosaurs compete with?"
        },
        options: [
        {
                  "en": "Mammals",
                  "es": "Mammals",
                  "de": "Mammals",
                  "nl": "Mammals"
        },
        {
                  "en": "Archosaurs and early crocodile relatives",
                  "es": "Archosaurs and early crocodile relatives",
                  "de": "Archosaurs and early crocodile relatives",
                  "nl": "Archosaurs and early crocodile relatives"
        },
        {
                  "en": "Other dinosaurs",
                  "es": "Other dinosaurs",
                  "de": "Other dinosaurs",
                  "nl": "Other dinosaurs"
        },
        {
                  "en": "Humans",
                  "es": "Humans",
                  "de": "Humans",
                  "nl": "Humans"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Early dinosaurs competed with various archosaurs, including early crocodile relatives and other reptiles.",
                  "es": "Early dinosaurs competed with various archosaurs, including early crocodile relatives and other reptiles.",
                  "de": "Early dinosaurs competed with various archosaurs, including early crocodile relatives and other reptiles.",
                  "nl": "Early dinosaurs competed with various archosaurs, including early crocodile relatives and other reptiles."
        }
      },
      {
        question: {
                  "en": "What supercontinent existed when dinosaurs first appeared?",
                  "es": "What supercontinent existed when dinosaurs first appeared?",
                  "de": "What supercontinent existed when dinosaurs first appeared?",
                  "nl": "What supercontinent existed when dinosaurs first appeared?"
        },
        options: [
        {
                  "en": "Rodinia",
                  "es": "Rodinia",
                  "de": "Rodinia",
                  "nl": "Rodinia"
        },
        {
                  "en": "Pangaea",
                  "es": "Pangaea",
                  "de": "Pangaea",
                  "nl": "Pangaea"
        },
        {
                  "en": "Gondwana",
                  "es": "Gondwana",
                  "de": "Gondwana",
                  "nl": "Gondwana"
        },
        {
                  "en": "Laurasia",
                  "es": "Laurasia",
                  "de": "Laurasia",
                  "nl": "Laurasia"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "When dinosaurs first appeared, all continents were joined in the supercontinent Pangaea.",
                  "es": "When dinosaurs first appeared, all continents were joined in the supercontinent Pangaea.",
                  "de": "When dinosaurs first appeared, all continents were joined in the supercontinent Pangaea.",
                  "nl": "When dinosaurs first appeared, all continents were joined in the supercontinent Pangaea."
        }
      },
      {
        question: {
                  "en": "What is Herrerasaurus?",
                  "es": "What is Herrerasaurus?",
                  "de": "What is Herrerasaurus?",
                  "nl": "What is Herrerasaurus?"
        },
        options: [
        {
                  "en": "Marine reptile",
                  "es": "Marine reptile",
                  "de": "Marine reptile",
                  "nl": "Marine reptile"
        },
        {
                  "en": "Early carnivorous dinosaur",
                  "es": "Early carnivorous dinosaur",
                  "de": "Early carnivorous dinosaur",
                  "nl": "Early carnivorous dinosaur"
        },
        {
                  "en": "Early herbivore",
                  "es": "Early herbivore",
                  "de": "Early herbivore",
                  "nl": "Early herbivore"
        },
        {
                  "en": "Flying reptile",
                  "es": "Flying reptile",
                  "de": "Flying reptile",
                  "nl": "Flying reptile"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Herrerasaurus was one of the earliest carnivorous dinosaurs, living in the Late Triassic.",
                  "es": "Herrerasaurus was one of the earliest carnivorous dinosaurs, living in the Late Triassic.",
                  "de": "Herrerasaurus was one of the earliest carnivorous dinosaurs, living in the Late Triassic.",
                  "nl": "Herrerasaurus was one of the earliest carnivorous dinosaurs, living in the Late Triassic."
        }
      },
      {
        question: {
                  "en": "What feature distinguishes dinosaurs from other reptiles?",
                  "es": "What feature distinguishes dinosaurs from other reptiles?",
                  "de": "What feature distinguishes dinosaurs from other reptiles?",
                  "nl": "What feature distinguishes dinosaurs from other reptiles?"
        },
        options: [
        {
                  "en": "Having scales",
                  "es": "Having scales",
                  "de": "Having scales",
                  "nl": "Having scales"
        },
        {
                  "en": "Ability to fly",
                  "es": "Ability to fly",
                  "de": "Ability to fly",
                  "nl": "Ability to fly"
        },
        {
                  "en": "Warm-blooded",
                  "es": "Warm-blooded",
                  "de": "Warm-blooded",
                  "nl": "Warm-blooded"
        },
        {
                  "en": "Upright posture with legs under body",
                  "es": "Upright posture with legs under body",
                  "de": "Upright posture with legs under body",
                  "nl": "Upright posture with legs under body"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Dinosaurs had an upright posture with legs positioned directly under their bodies, unlike sprawling reptiles.",
                  "es": "Dinosaurs had an upright posture with legs positioned directly under their bodies, unlike sprawling reptiles.",
                  "de": "Dinosaurs had an upright posture with legs positioned directly under their bodies, unlike sprawling reptiles.",
                  "nl": "Dinosaurs had an upright posture with legs positioned directly under their bodies, unlike sprawling reptiles."
        }
      },
      {
        question: {
                  "en": "What was the climate like when dinosaurs first evolved?",
                  "es": "What was the climate like when dinosaurs first evolved?",
                  "de": "What was the climate like when dinosaurs first evolved?",
                  "nl": "What was the climate like when dinosaurs first evolved?"
        },
        options: [
        {
                  "en": "Frozen tundra",
                  "es": "Frozen tundra",
                  "de": "Frozen tundra",
                  "nl": "Frozen tundra"
        },
        {
                  "en": "Hot and dry with seasonal monsoons",
                  "es": "Hot and dry with seasonal monsoons",
                  "de": "Hot and dry with seasonal monsoons",
                  "nl": "Hot and dry with seasonal monsoons"
        },
        {
                  "en": "Cold and icy",
                  "es": "Cold and icy",
                  "de": "Cold and icy",
                  "nl": "Cold and icy"
        },
        {
                  "en": "Tropical rainforest",
                  "es": "Tropical rainforest",
                  "de": "Tropical rainforest",
                  "nl": "Tropical rainforest"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The Late Triassic climate was generally hot and dry with seasonal monsoons.",
                  "es": "The Late Triassic climate was generally hot and dry with seasonal monsoons.",
                  "de": "The Late Triassic climate was generally hot and dry with seasonal monsoons.",
                  "nl": "The Late Triassic climate was generally hot and dry with seasonal monsoons."
        }
      },
      {
        question: {
                  "en": "What is a dinosauromorph?",
                  "es": "What is a dinosauromorph?",
                  "de": "What is a dinosauromorph?",
                  "nl": "What is a dinosauromorph?"
        },
        options: [
        {
                  "en": "Dinosaur fossil",
                  "es": "Dinosaur fossil",
                  "de": "Dinosaur fossil",
                  "nl": "Dinosaur fossil"
        },
        {
                  "en": "Type of dinosaur",
                  "es": "Type of dinosaur",
                  "de": "Type of dinosaur",
                  "nl": "Type of dinosaur"
        },
        {
                  "en": "Dinosaur predator",
                  "es": "Dinosaur predator",
                  "de": "Dinosaur predator",
                  "nl": "Dinosaur predator"
        },
        {
                  "en": "Dinosaur ancestor or close relative",
                  "es": "Dinosaur ancestor or close relative",
                  "de": "Dinosaur ancestor or close relative",
                  "nl": "Dinosaur ancestor or close relative"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Dinosauromorphs are the group including dinosaurs and their closest relatives.",
                  "es": "Dinosauromorphs are the group including dinosaurs and their closest relatives.",
                  "de": "Dinosauromorphs are the group including dinosaurs and their closest relatives.",
                  "nl": "Dinosauromorphs are the group including dinosaurs and their closest relatives."
        }
      },
      {
        question: {
                  "en": "Which came first: meat-eating or plant-eating dinosaurs?",
                  "es": "Which came first: meat-eating or plant-eating dinosaurs?",
                  "de": "Which came first: meat-eating or plant-eating dinosaurs?",
                  "nl": "Which came first: meat-eating or plant-eating dinosaurs?"
        },
        options: [
        {
                  "en": "Both appeared simultaneously",
                  "es": "Both appeared simultaneously",
                  "de": "Both appeared simultaneously",
                  "nl": "Both appeared simultaneously"
        },
        {
                  "en": "Plant-eating dinosaurs",
                  "es": "Plant-eating dinosaurs",
                  "de": "Plant-eating dinosaurs",
                  "nl": "Plant-eating dinosaurs"
        },
        {
                  "en": "Neither, they ate insects",
                  "es": "Neither, they ate insects",
                  "de": "Neither, they ate insects",
                  "nl": "Neither, they ate insects"
        },
        {
                  "en": "Meat-eating dinosaurs",
                  "es": "Meat-eating dinosaurs",
                  "de": "Meat-eating dinosaurs",
                  "nl": "Meat-eating dinosaurs"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The earliest dinosaurs were primarily carnivorous; herbivorous dinosaurs evolved later.",
                  "es": "The earliest dinosaurs were primarily carnivorous; herbivorous dinosaurs evolved later.",
                  "de": "The earliest dinosaurs were primarily carnivorous; herbivorous dinosaurs evolved later.",
                  "nl": "The earliest dinosaurs were primarily carnivorous; herbivorous dinosaurs evolved later."
        }
      },
      {
        question: {
                  "en": "What is Coelophysis?",
                  "es": "What is Coelophysis?",
                  "de": "What is Coelophysis?",
                  "nl": "What is Coelophysis?"
        },
        options: [
        {
                  "en": "Marine dinosaur",
                  "es": "Marine dinosaur",
                  "de": "Marine dinosaur",
                  "nl": "Marine dinosaur"
        },
        {
                  "en": "Flying dinosaur",
                  "es": "Flying dinosaur",
                  "de": "Flying dinosaur",
                  "nl": "Flying dinosaur"
        },
        {
                  "en": "Early herbivore",
                  "es": "Early herbivore",
                  "de": "Early herbivore",
                  "nl": "Early herbivore"
        },
        {
                  "en": "Small early predatory dinosaur",
                  "es": "Small early predatory dinosaur",
                  "de": "Small early predatory dinosaur",
                  "nl": "Small early predatory dinosaur"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Coelophysis was a small, agile predatory dinosaur from the Late Triassic, one of the earliest known.",
                  "es": "Coelophysis was a small, agile predatory dinosaur from the Late Triassic, one of the earliest known.",
                  "de": "Coelophysis was a small, agile predatory dinosaur from the Late Triassic, one of the earliest known.",
                  "nl": "Coelophysis was a small, agile predatory dinosaur from the Late Triassic, one of the earliest known."
        }
      },
      {
        question: {
                  "en": "What caused the Triassic-Jurassic extinction?",
                  "es": "What caused the Triassic-Jurassic extinction?",
                  "de": "What caused the Triassic-Jurassic extinction?",
                  "nl": "What caused the Triassic-Jurassic extinction?"
        },
        options: [
        {
                  "en": "Volcanic activity and climate change",
                  "es": "Volcanic activity and climate change",
                  "de": "Volcanic activity and climate change",
                  "nl": "Volcanic activity and climate change"
        },
        {
                  "en": "Ice age",
                  "es": "Ice age",
                  "de": "Ice age",
                  "nl": "Ice age"
        },
        {
                  "en": "Asteroid impact",
                  "es": "Asteroid impact",
                  "de": "Asteroid impact",
                  "nl": "Asteroid impact"
        },
        {
                  "en": "Drought",
                  "es": "Drought",
                  "de": "Drought",
                  "nl": "Drought"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The Triassic-Jurassic extinction was likely caused by massive volcanic eruptions and climate change.",
                  "es": "The Triassic-Jurassic extinction was likely caused by massive volcanic eruptions and climate change.",
                  "de": "The Triassic-Jurassic extinction was likely caused by massive volcanic eruptions and climate change.",
                  "nl": "The Triassic-Jurassic extinction was likely caused by massive volcanic eruptions and climate change."
        }
      },
      {
        question: {
                  "en": "How did early dinosaurs differ from later ones?",
                  "es": "How did early dinosaurs differ from later ones?",
                  "de": "How did early dinosaurs differ from later ones?",
                  "nl": "How did early dinosaurs differ from later ones?"
        },
        options: [
        {
                  "en": "All could fly",
                  "es": "All could fly",
                  "de": "All could fly",
                  "nl": "All could fly"
        },
        {
                  "en": "Smaller, more primitive features",
                  "es": "Smaller, more primitive features",
                  "de": "Smaller, more primitive features",
                  "nl": "Smaller, more primitive features"
        },
        {
                  "en": "No differences",
                  "es": "No differences",
                  "de": "No differences",
                  "nl": "No differences"
        },
        {
                  "en": "Larger, more advanced",
                  "es": "Larger, more advanced",
                  "de": "Larger, more advanced",
                  "nl": "Larger, more advanced"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Early dinosaurs were generally smaller with more primitive skeletal features than their later descendants.",
                  "es": "Early dinosaurs were generally smaller with more primitive skeletal features than their later descendants.",
                  "de": "Early dinosaurs were generally smaller with more primitive skeletal features than their later descendants.",
                  "nl": "Early dinosaurs were generally smaller with more primitive skeletal features than their later descendants."
        }
      },
      {
        question: {
                  "en": "What is Plateosaurus?",
                  "es": "What is Plateosaurus?",
                  "de": "What is Plateosaurus?",
                  "nl": "What is Plateosaurus?"
        },
        options: [
        {
                  "en": "Flying reptile",
                  "es": "Flying reptile",
                  "de": "Flying reptile",
                  "nl": "Flying reptile"
        },
        {
                  "en": "Early predator",
                  "es": "Early predator",
                  "de": "Early predator",
                  "nl": "Early predator"
        },
        {
                  "en": "Early large herbivorous dinosaur",
                  "es": "Early large herbivorous dinosaur",
                  "de": "Early large herbivorous dinosaur",
                  "nl": "Early large herbivorous dinosaur"
        },
        {
                  "en": "Marine reptile",
                  "es": "Marine reptile",
                  "de": "Marine reptile",
                  "nl": "Marine reptile"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Plateosaurus was one of the first large dinosaurs, an early herbivore from the Late Triassic.",
                  "es": "Plateosaurus was one of the first large dinosaurs, an early herbivore from the Late Triassic.",
                  "de": "Plateosaurus was one of the first large dinosaurs, an early herbivore from the Late Triassic.",
                  "nl": "Plateosaurus was one of the first large dinosaurs, an early herbivore from the Late Triassic."
        }
      },
      {
        question: {
                  "en": "What evolved first: bipedal or quadrupedal dinosaurs?",
                  "es": "What evolved first: bipedal or quadrupedal dinosaurs?",
                  "de": "What evolved first: bipedal or quadrupedal dinosaurs?",
                  "nl": "What evolved first: bipedal or quadrupedal dinosaurs?"
        },
        options: [
        {
                  "en": "Bipedal dinosaurs",
                  "es": "Bipedal dinosaurs",
                  "de": "Bipedal dinosaurs",
                  "nl": "Bipedal dinosaurs"
        },
        {
                  "en": "Quadrupedal dinosaurs",
                  "es": "Quadrupedal dinosaurs",
                  "de": "Quadrupedal dinosaurs",
                  "nl": "Quadrupedal dinosaurs"
        },
        {
                  "en": "Both simultaneously",
                  "es": "Both simultaneously",
                  "de": "Both simultaneously",
                  "nl": "Both simultaneously"
        },
        {
                  "en": "Neither, they swam",
                  "es": "Neither, they swam",
                  "de": "Neither, they swam",
                  "nl": "Neither, they swam"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The earliest dinosaurs were bipedal; quadrupedal dinosaurs evolved later from bipedal ancestors.",
                  "es": "The earliest dinosaurs were bipedal; quadrupedal dinosaurs evolved later from bipedal ancestors.",
                  "de": "The earliest dinosaurs were bipedal; quadrupedal dinosaurs evolved later from bipedal ancestors.",
                  "nl": "The earliest dinosaurs were bipedal; quadrupedal dinosaurs evolved later from bipedal ancestors."
        }
      },
      {
        question: {
                  "en": "What is the 'dawn of the dinosaurs' called?",
                  "es": "What is the 'dawn of the dinosaurs' called?",
                  "de": "What is the 'dawn of the dinosaurs' called?",
                  "nl": "What is the 'dawn of the dinosaurs' called?"
        },
        options: [
        {
                  "en": "Carboniferous Period",
                  "es": "Carboniferous Period",
                  "de": "Carboniferous Period",
                  "nl": "Carboniferous Period"
        },
        {
                  "en": "Permian Period",
                  "es": "Permian Period",
                  "de": "Permian Period",
                  "nl": "Permian Period"
        },
        {
                  "en": "Early Jurassic Period",
                  "es": "Early Jurassic Period",
                  "de": "Early Jurassic Period",
                  "nl": "Early Jurassic Period"
        },
        {
                  "en": "Late Triassic Period",
                  "es": "Late Triassic Period",
                  "de": "Late Triassic Period",
                  "nl": "Late Triassic Period"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The Late Triassic Period is often called the 'dawn of the dinosaurs' as this is when they first appeared.",
                  "es": "The Late Triassic Period is often called the 'dawn of the dinosaurs' as this is when they first appeared.",
                  "de": "The Late Triassic Period is often called the 'dawn of the dinosaurs' as this is when they first appeared.",
                  "nl": "The Late Triassic Period is often called the 'dawn of the dinosaurs' as this is when they first appeared."
        }
      },
      {
        question: {
                  "en": "What is Staurikosaurus?",
                  "es": "What is Staurikosaurus?",
                  "de": "What is Staurikosaurus?",
                  "nl": "What is Staurikosaurus?"
        },
        options: [
        {
                  "en": "Very early small carnivorous dinosaur",
                  "es": "Very early small carnivorous dinosaur",
                  "de": "Very early small carnivorous dinosaur",
                  "nl": "Very early small carnivorous dinosaur"
        },
        {
                  "en": "Early herbivore",
                  "es": "Early herbivore",
                  "de": "Early herbivore",
                  "nl": "Early herbivore"
        },
        {
                  "en": "Armored dinosaur",
                  "es": "Armored dinosaur",
                  "de": "Armored dinosaur",
                  "nl": "Armored dinosaur"
        },
        {
                  "en": "Flying reptile",
                  "es": "Flying reptile",
                  "de": "Flying reptile",
                  "nl": "Flying reptile"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Staurikosaurus was one of the earliest dinosaurs, a small carnivore from the Late Triassic.",
                  "es": "Staurikosaurus was one of the earliest dinosaurs, a small carnivore from the Late Triassic.",
                  "de": "Staurikosaurus was one of the earliest dinosaurs, a small carnivore from the Late Triassic.",
                  "nl": "Staurikosaurus was one of the earliest dinosaurs, a small carnivore from the Late Triassic."
        }
      },
      {
        question: {
                  "en": "How are dinosaurs classified?",
                  "es": "How are dinosaurs classified?",
                  "de": "How are dinosaurs classified?",
                  "nl": "How are dinosaurs classified?"
        },
        options: [
        {
                  "en": "By diet",
                  "es": "By diet",
                  "de": "By diet",
                  "nl": "By diet"
        },
        {
                  "en": "By size",
                  "es": "By size",
                  "de": "By size",
                  "nl": "By size"
        },
        {
                  "en": "By hip structure: saurischian or ornithischian",
                  "es": "By hip structure: saurischian or ornithischian",
                  "de": "By hip structure: saurischian or ornithischian",
                  "nl": "By hip structure: saurischian or ornithischian"
        },
        {
                  "en": "By location",
                  "es": "By location",
                  "de": "By location",
                  "nl": "By location"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Dinosaurs are primarily classified by hip structure into saurischian (lizard-hipped) and ornithischian (bird-hipped).",
                  "es": "Dinosaurs are primarily classified by hip structure into saurischian (lizard-hipped) and ornithischian (bird-hipped).",
                  "de": "Dinosaurs are primarily classified by hip structure into saurischian (lizard-hipped) and ornithischian (bird-hipped).",
                  "nl": "Dinosaurs are primarily classified by hip structure into saurischian (lizard-hipped) and ornithischian (bird-hipped)."
        }
      },
      {
        question: {
                  "en": "What percentage of species survived the Triassic-Jurassic extinction?",
                  "es": "What percentage of species survived the Triassic-Jurassic extinction?",
                  "de": "What percentage of species survived the Triassic-Jurassic extinction?",
                  "nl": "What percentage of species survived the Triassic-Jurassic extinction?"
        },
        options: [
        {
                  "en": "About 75%",
                  "es": "About 75%",
                  "de": "About 75%",
                  "nl": "About 75%"
        },
        {
                  "en": "About 50%",
                  "es": "About 50%",
                  "de": "About 50%",
                  "nl": "About 50%"
        },
        {
                  "en": "About 90%",
                  "es": "About 90%",
                  "de": "About 90%",
                  "nl": "About 90%"
        },
        {
                  "en": "About 10%",
                  "es": "About 10%",
                  "de": "About 10%",
                  "nl": "About 10%"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The Triassic-Jurassic extinction event killed approximately 50% of all species.",
                  "es": "The Triassic-Jurassic extinction event killed approximately 50% of all species.",
                  "de": "The Triassic-Jurassic extinction event killed approximately 50% of all species.",
                  "nl": "The Triassic-Jurassic extinction event killed approximately 50% of all species."
        }
      },
      {
        question: {
                  "en": "What advantage did early dinosaurs have?",
                  "es": "What advantage did early dinosaurs have?",
                  "de": "What advantage did early dinosaurs have?",
                  "nl": "What advantage did early dinosaurs have?"
        },
        options: [
        {
                  "en": "Large size",
                  "es": "Large size",
                  "de": "Large size",
                  "nl": "Large size"
        },
        {
                  "en": "Efficient upright posture and metabolism",
                  "es": "Efficient upright posture and metabolism",
                  "de": "Efficient upright posture and metabolism",
                  "nl": "Efficient upright posture and metabolism"
        },
        {
                  "en": "Ability to fly",
                  "es": "Ability to fly",
                  "de": "Ability to fly",
                  "nl": "Ability to fly"
        },
        {
                  "en": "Armored protection",
                  "es": "Armored protection",
                  "de": "Armored protection",
                  "nl": "Armored protection"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Early dinosaurs' upright posture and possibly more efficient metabolism gave them advantages over competing reptiles.",
                  "es": "Early dinosaurs' upright posture and possibly more efficient metabolism gave them advantages over competing reptiles.",
                  "de": "Early dinosaurs' upright posture and possibly more efficient metabolism gave them advantages over competing reptiles.",
                  "nl": "Early dinosaurs' upright posture and possibly more efficient metabolism gave them advantages over competing reptiles."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  }
})();