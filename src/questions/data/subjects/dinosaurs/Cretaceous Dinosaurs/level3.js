// Cretaceous Dinosaurs Quiz - Level 3: Elementary Knowledge
(function() {
  const level3 = {
    name: {
      en: "Cretaceous Dinosaurs Level 3",
      es: "Dinosaurios del Cretácico Nivel 3",
      de: "Kreidezeit Dinosaurier Stufe 3",
      nl: "Krijt Dino's Level 3"
    },
    questions: [
      {
        question: {
          en: "Which famous formation has yielded many Late Cretaceous fossils in North America?",
          es: "¿Qué formación famosa ha producido muchos fósiles del Cretácico Tardío en América del Norte?",
          de: "Welche berühmte Formation hat viele Oberkreide-Fossilien in Nordamerika hervorgebracht?",
          nl: "Welke beroemde formatie heeft veel Laat-Krijt fossielen opgeleverd in Noord-Amerika?"
        },
        options: [
          { en: "Hell Creek Formation", es: "Formación Hell Creek", de: "Hell Creek Formation", nl: "Hell Creek Formatie" },
          { en: "Morrison Formation", es: "Formación Morrison", de: "Morrison Formation", nl: "Morrison Formatie" },
          { en: "Grand Canyon", es: "Gran Cañón", de: "Grand Canyon", nl: "Grand Canyon" },
          { en: "Niagara Falls", es: "Cataratas del Niágara", de: "Niagarafälle", nl: "Niagara Watervallen" }
        ],
        correct: 0,
        explanation: {
          en: "The Hell Creek Formation in Montana, North Dakota, and South Dakota has produced fossils of T. rex, Triceratops, and many other Late Cretaceous dinosaurs.",
          es: "La Formación Hell Creek en Montana, Dakota del Norte y Dakota del Sur ha producido fósiles de T. rex, Triceratops y muchos otros dinosaurios del Cretácico Tardío.",
          de: "Die Hell Creek Formation in Montana, North Dakota und South Dakota hat Fossilien von T. rex, Triceratops und vielen anderen Oberkreide-Dinosauriern hervorgebracht.",
          nl: "De Hell Creek Formatie in Montana, North Dakota en South Dakota heeft fossielen van T. rex, Triceratops en vele andere Laat-Krijt dinosaurussen opgeleverd."
        }
      },
      {
        question: {
          en: "What was the approximate brain size of T. rex compared to its body?",
          es: "¿Cuál era el tamaño aproximado del cerebro de T. rex comparado con su cuerpo?",
          de: "Wie groß war das Gehirn von T. rex im Verhältnis zu seinem Körper?",
          nl: "Wat was de geschatte hersengrootte van T. rex vergeleken met zijn lichaam?"
        },
        options: [
          { en: "About the size of a banana", es: "Aproximadamente del tamaño de un plátano", de: "Etwa so groß wie eine Banane", nl: "Ongeveer zo groot als een banaan" },
          { en: "Larger than a human brain", es: "Más grande que un cerebro humano", de: "Größer als ein menschliches Gehirn", nl: "Groter dan een menselijk brein" },
          { en: "Size of a pea", es: "Tamaño de un guisante", de: "Größe einer Erbse", nl: "Grootte van een erwt" },
          { en: "Size of a watermelon", es: "Tamaño de una sandía", de: "Größe einer Wassermelone", nl: "Grootte van een watermeloen" }
        ],
        correct: 0,
        explanation: {
          en: "Despite its massive size, T. rex had a relatively small brain about the size of a banana, but it was still intelligent enough to be an effective predator.",
          es: "A pesar de su tamaño masivo, T. rex tenía un cerebro relativamente pequeño del tamaño de un plátano, pero aún era lo suficientemente inteligente para ser un depredador efectivo.",
          de: "Trotz seiner massiven Größe hatte T. rex ein relativ kleines Gehirn etwa so groß wie eine Banane, aber es war immer noch intelligent genug, um ein effektiver Räuber zu sein.",
          nl: "Ondanks zijn enorme omvang had T. rex een relatief kleine hersenen ter grootte van een banaan, maar hij was nog steeds intelligent genoeg om een effectieve roofdier te zijn."
        }
      },
      {
        question: {
          en: "Which Cretaceous dinosaur is known for its extensive bone beds with thousands of individuals?",
          es: "¿Qué dinosaurio del Cretácico es conocido por sus extensos lechos de huesos con miles de individuos?",
          de: "Welcher Kreidezeit-Dinosaurier ist bekannt für seine ausgedehnten Knochenbetten mit Tausenden von Individuen?",
          nl: "Welke Krijt dinosaurus staat bekend om zijn uitgebreide bottenbedden met duizenden individuen?"
        },
        options: [
          { en: "Maiasaura", es: "Maiasaura", de: "Maiasaura", nl: "Maiasaura" },
          { en: "T. rex", es: "T. rex", de: "T. rex", nl: "T. rex" },
          { en: "Spinosaurus", es: "Spinosaurus", de: "Spinosaurus", nl: "Spinosaurus" },
          { en: "Velociraptor", es: "Velociraptor", de: "Velociraptor", nl: "Velociraptor" }
        ],
        correct: 0,
        explanation: {
          en: "Maiasaura bone beds in Montana contain remains of thousands of individuals, suggesting these hadrosaurs lived and traveled in large herds.",
          es: "Los lechos de huesos de Maiasaura en Montana contienen restos de miles de individuos, sugiriendo que estos hadrosaurios vivían y viajaban en grandes manadas.",
          de: "Maiasaura-Knochenbetten in Montana enthalten Überreste von Tausenden von Individuen, was darauf hindeutet, dass diese Hadrosaurier in großen Herden lebten und reisten.",
          nl: "Maiasaura bottenbedden in Montana bevatten overblijfselen van duizenden individuen, wat suggereert dat deze hadrosauriërs in grote kuddes leefden en reisden."
        }
      },
      {
        question: {
          en: "What was unusual about Dracorex's discovery and naming?",
          es: "¿Qué era inusual sobre el descubrimiento y nombre de Dracorex?",
          de: "Was war ungewöhnlich an der Entdeckung und Namensgebung von Dracorex?",
          nl: "Wat was ongewoon aan Dracorex's ontdekking en naamgeving?"
        },
        options: [
          { en: "It was named after Harry Potter (Dracorex hogwartsia)", es: "Fue nombrado por Harry Potter (Dracorex hogwartsia)", de: "Es wurde nach Harry Potter benannt (Dracorex hogwartsia)", nl: "Hij werd vernoemd naar Harry Potter (Dracorex hogwartsia)" },
          { en: "It was found in a cave", es: "Fue encontrado en una cueva", de: "Es wurde in einer Höhle gefunden", nl: "Hij werd gevonden in een grot" },
          { en: "It was completely intact", es: "Estaba completamente intacto", de: "Es war vollständig intakt", nl: "Hij was volledig intact" },
          { en: "It was found underwater", es: "Fue encontrado bajo el agua", de: "Es wurde unter Wasser gefunden", nl: "Hij werd onder water gevonden" }
        ],
        correct: 0,
        explanation: {
          en: "Dracorex hogwartsia was named after the Harry Potter series, with 'Dracorex' meaning 'dragon king' and 'hogwartsia' referencing Hogwarts School of Witchcraft and Wizardry.",
          es: "Dracorex hogwartsia fue nombrado por la serie de Harry Potter, con 'Dracorex' significando 'rey dragón' y 'hogwartsia' haciendo referencia a la Escuela de Magia y Hechicería de Hogwarts.",
          de: "Dracorex hogwartsia wurde nach der Harry-Potter-Serie benannt, wobei 'Dracorex' 'Drachenkönig' bedeutet und 'hogwartsia' auf die Hogwarts-Schule für Hexerei und Zauberei verweist.",
          nl: "Dracorex hogwartsia werd vernoemd naar de Harry Potter serie, waarbij 'Dracorex' 'drakenkoning' betekent en 'hogwartsia' verwijst naar Zweinstein School voor Hekserij en Hocus-Pocus."
        }
      },
      {
        question: {
          en: "What characteristic made Giganotosaurus notable among theropods?",
          es: "¿Qué característica hizo notable a Giganotosaurus entre los terópodos?",
          de: "Welches Merkmal machte Giganotosaurus unter den Theropoden bemerkenswert?",
          nl: "Welke eigenschap maakte Giganotosaurus opmerkelijk onder de theropoden?"
        },
        options: [
          { en: "It was potentially larger than T. rex", es: "Era potencialmente más grande que T. rex", de: "Es war möglicherweise größer als T. rex", nl: "Hij was mogelijk groter dan T. rex" },
          { en: "It could fly", es: "Podía volar", de: "Es konnte fliegen", nl: "Hij kon vliegen" },
          { en: "It was herbivorous", es: "Era herbívoro", de: "Es war pflanzenfressend", nl: "Hij was herbivoor" },
          { en: "It lived underwater", es: "Vivía bajo el agua", de: "Es lebte unter Wasser", nl: "Hij leefde onder water" }
        ],
        correct: 0,
        explanation: {
          en: "Giganotosaurus from Argentina was one of the largest theropod dinosaurs, potentially reaching lengths of 43-46 feet, rivaling or even exceeding T. rex in size.",
          es: "Giganotosaurus de Argentina fue uno de los dinosaurios terópodos más grandes, potencialmente alcanzando longitudes de 43-46 pies, rivalizando o incluso excediendo a T. rex en tamaño.",
          de: "Giganotosaurus aus Argentinien war einer der größten Theropoden-Dinosaurier, der möglicherweise Längen von 43-46 Fuß erreichte und T. rex in der Größe rivalisierte oder sogar übertraf.",
          nl: "Giganotosaurus uit Argentinië was een van de grootste theropode dinosaurussen, mogelijk lengtes van 43-46 voet bereikend, waarmee hij T. rex evenaarde of zelfs overtrof in grootte."
        }
      },
      {
        question: {
          en: "What evidence suggests some Cretaceous dinosaurs had feathers?",
          es: "¿Qué evidencia sugiere que algunos dinosaurios del Cretácico tenían plumas?",
          de: "Welche Beweise deuten darauf hin, dass einige Kreidezeit-Dinosaurier Federn hatten?",
          nl: "Welk bewijs suggereert dat sommige Krijt dinosaurussen veren hadden?"
        },
        options: [
          { en: "Fossil impressions and related bird evolution", es: "Impresiones fósiles y evolución relacionada con aves", de: "Fossil-Abdrücke und verwandte Vogelevolution", nl: "Fossiele afdrukken en gerelateerde vogelevolutie" },
          { en: "They could fly", es: "Podían volar", de: "Sie konnten fliegen", nl: "Ze konden vliegen" },
          { en: "Ancient photographs", es: "Fotografías antiguas", de: "Alte Fotografien", nl: "Oude foto's" },
          { en: "They built nests in trees", es: "Construían nidos en árboles", de: "Sie bauten Nester in Bäumen", nl: "Ze bouwden nesten in bomen" }
        ],
        correct: 0,
        explanation: {
          en: "Fossil discoveries show that many small theropods had feathers, and since birds evolved from dinosaurs during the Cretaceous, feathers likely appeared in various dinosaur lineages.",
          es: "Los descubrimientos fósiles muestran que muchos terópodos pequeños tenían plumas, y dado que las aves evolucionaron de los dinosaurios durante el Cretácico, las plumas probablemente aparecieron en varios linajes de dinosaurios.",
          de: "Fossil-Entdeckungen zeigen, dass viele kleine Theropoden Federn hatten, und da Vögel während der Kreidezeit aus Dinosauriern entstanden, traten Federn wahrscheinlich in verschiedenen Dinosaurier-Linien auf.",
          nl: "Fossiele ontdekkingen tonen dat veel kleine theropoden veren hadden, en aangezien vogels evolueerden uit dinosaurussen tijdens het Krijt, kwamen veren waarschijnlijk voor in verschillende dinosaurus linies."
        }
      },
      {
        question: {
          en: "What was the primary diet of Argentinosaurus?",
          es: "¿Cuál era la dieta principal de Argentinosaurus?",
          de: "Was war die Hauptnahrung von Argentinosaurus?",
          nl: "Wat was het hoofddieet van Argentinosaurus?"
        },
        options: [
          { en: "High-growing conifers and ferns", es: "Coníferas y helechos de gran altura", de: "Hoch wachsende Nadelbäume und Farne", nl: "Hoog groeiende naaldbomen en varens" },
          { en: "Small animals", es: "Animales pequeños", de: "Kleine Tiere", nl: "Kleine dieren" },
          { en: "Fish", es: "Peces", de: "Fische", nl: "Vissen" },
          { en: "Only grass", es: "Solo hierba", de: "Nur Gras", nl: "Alleen gras" }
        ],
        correct: 0,
        explanation: {
          en: "Argentinosaurus, one of the largest dinosaurs ever, used its massive height (up to 115 feet long) to feed on tall conifers and tree ferns that other herbivores couldn't reach.",
          es: "Argentinosaurus, uno de los dinosaurios más grandes que hayan existido, usaba su altura masiva (hasta 115 pies de largo) para alimentarse de coníferas altas y helechos arbóreos que otros herbívoros no podían alcanzar.",
          de: "Argentinosaurus, einer der größten Dinosaurier aller Zeiten, nutzte seine massive Höhe (bis zu 115 Fuß lang), um sich von hohen Nadelbäumen und Baumfarnen zu ernähren, die andere Pflanzenfresser nicht erreichen konnten.",
          nl: "Argentinosaurus, een van de grootste dinosaurussen ooit, gebruikte zijn enorme hoogte (tot 115 voet lang) om te voeden op hoge naaldbomen en boomvarens die andere herbivoren niet konden bereiken."
        }
      },
      {
        question: {
          en: "Which region was particularly important for Spinosaurus discoveries?",
          es: "¿Qué región fue particularmente importante para los descubrimientos de Spinosaurus?",
          de: "Welche Region war besonders wichtig für Spinosaurus-Entdeckungen?",
          nl: "Welke regio was bijzonder belangrijk voor Spinosaurus ontdekkingen?"
        },
        options: [
          { en: "Kem Kem Beds of Morocco", es: "Lechos Kem Kem de Marruecos", de: "Kem Kem-Schichten von Marokko", nl: "Kem Kem Bedden van Marokko" },
          { en: "Montana, USA", es: "Montana, EE.UU.", de: "Montana, USA", nl: "Montana, VS" },
          { en: "England", es: "Inglaterra", de: "England", nl: "Engeland" },
          { en: "China", es: "China", de: "China", nl: "China" }
        ],
        correct: 0,
        explanation: {
          en: "The Kem Kem Beds in Morocco have yielded numerous Spinosaurus fossils, helping scientists understand this massive semi-aquatic predator from the mid-Cretaceous period.",
          es: "Los Lechos Kem Kem en Marruecos han producido numerosos fósiles de Spinosaurus, ayudando a los científicos a entender este depredador semi-acuático masivo del período Cretácico medio.",
          de: "Die Kem Kem-Schichten in Marokko haben zahlreiche Spinosaurus-Fossilien hervorgebracht, was Wissenschaftlern hilft, diesen massiven halb-aquatischen Räuber aus der mittleren Kreidezeit zu verstehen.",
          nl: "De Kem Kem Bedden in Marokko hebben talrijke Spinosaurus fossielen opgeleverd, wat wetenschappers helpt dit enorme semi-aquatische roofdier uit de midden-Krijt periode te begrijpen."
        }
      },
      {
        question: {
          en: "What was the function of the sail on Spinosaurus's back?",
          es: "¿Cuál era la función de la vela en la espalda de Spinosaurus?",
          de: "Was war die Funktion des Segels auf Spinosaurus' Rücken?",
          nl: "Wat was de functie van het zeil op Spinosaurus' rug?"
        },
        options: [
          { en: "Temperature regulation and display", es: "Regulación de temperatura y exhibición", de: "Temperaturregulierung und Zur-Schau-Stellung", nl: "Temperatuurregeling en vertoon" },
          { en: "For swimming", es: "Para nadar", de: "Zum Schwimmen", nl: "Voor zwemmen" },
          { en: "For flying", es: "Para volar", de: "Zum Fliegen", nl: "Voor vliegen" },
          { en: "To store food", es: "Para almacenar comida", de: "Um Nahrung zu speichern", nl: "Om voedsel op te slaan" }
        ],
        correct: 0,
        explanation: {
          en: "The large sail on Spinosaurus's back likely served multiple purposes: helping regulate body temperature and serving as a display structure for communication with other Spinosaurus.",
          es: "La gran vela en la espalda de Spinosaurus probablemente servía múltiples propósitos: ayudar a regular la temperatura corporal y servir como una estructura de exhibición para comunicarse con otros Spinosaurus.",
          de: "Das große Segel auf Spinosaurus' Rücken diente wahrscheinlich mehreren Zwecken: Hilfe bei der Körpertemperaturregulierung und als Zur-Schau-Stellungsstruktur für die Kommunikation mit anderen Spinosaurus.",
          nl: "Het grote zeil op Spinosaurus' rug diende waarschijnlijk meerdere doelen: het helpen reguleren van lichaamstemperatuur en dienen als een vertoonstruktuur voor communicatie met andere Spinosaurus."
        }
      },
      {
        question: {
          en: "What made Carnotaurus an unusual theropod?",
          es: "¿Qué hizo de Carnotaurus un terópodo inusual?",
          de: "Was machte Carnotaurus zu einem ungewöhnlichen Theropoden?",
          nl: "Wat maakte Carnotaurus een ongewone theropode?"
        },
        options: [
          { en: "Horns above its eyes and very small arms", es: "Cuernos sobre sus ojos y brazos muy pequeños", de: "Hörner über seinen Augen und sehr kleine Arme", nl: "Hoorns boven zijn ogen en zeer kleine armen" },
          { en: "It could fly", es: "Podía volar", de: "Es konnte fliegen", nl: "Hij kon vliegen" },
          { en: "It ate only plants", es: "Solo comía plantas", de: "Es fraß nur Pflanzen", nl: "Hij at alleen planten" },
          { en: "It lived underwater", es: "Vivía bajo el agua", de: "Es lebte unter Wasser", nl: "Hij leefde onder water" }
        ],
        correct: 0,
        explanation: {
          en: "Carnotaurus was unique among large theropods for having prominent horns above its eyes like a bull, and arms that were even smaller and less functional than T. rex's.",
          es: "Carnotaurus era único entre los grandes terópodos por tener cuernos prominentes sobre sus ojos como un toro, y brazos que eran incluso más pequeños y menos funcionales que los de T. rex.",
          de: "Carnotaurus war unter den großen Theropoden einzigartig, da er prominente Hörner über seinen Augen wie ein Stier hatte und Arme, die sogar kleiner und weniger funktional waren als die von T. rex.",
          nl: "Carnotaurus was uniek onder grote theropoden omdat hij prominente hoorns boven zijn ogen had zoals een stier, en armen die nog kleiner en minder functioneel waren dan die van T. rex."
        }
      },
      {
        question: {
          en: "What type of social behavior is suggested for hadrosaurs like Parasaurolophus?",
          es: "¿Qué tipo de comportamiento social se sugiere para hadrosaurios como Parasaurolophus?",
          de: "Welche Art von Sozialverhalten wird für Hadrosaurier wie Parasaurolophus vermutet?",
          nl: "Welk type sociaal gedrag wordt gesuggereerd voor hadrosauriërs zoals Parasaurolophus?"
        },
        options: [
          { en: "Lived in herds and communicated with sounds", es: "Vivían en manadas y se comunicaban con sonidos", de: "Lebten in Herden und kommunizierten mit Geräuschen", nl: "Leefden in kuddes en communiceerden met geluiden" },
          { en: "Were completely solitary", es: "Eran completamente solitarios", de: "Waren völlig einzelgängerisch", nl: "Waren volledig solitair" },
          { en: "Only met to fight", es: "Solo se encontraban para pelear", de: "Trafen sich nur zum Kämpfen", nl: "Kwamen alleen samen om te vechten" },
          { en: "Lived underground", es: "Vivían bajo tierra", de: "Lebten unterirdisch", nl: "Leefden ondergronds" }
        ],
        correct: 0,
        explanation: {
          en: "Evidence suggests hadrosaurs lived in large herds and used their hollow crests to make different sounds for communication, similar to how elephants communicate today.",
          es: "La evidencia sugiere que los hadrosaurios vivían en grandes manadas y usaban sus crestas huecas para hacer diferentes sonidos para comunicarse, similar a como se comunican los elefantes hoy.",
          de: "Beweise deuten darauf hin, dass Hadrosaurier in großen Herden lebten und ihre hohlen Kämme nutzten, um verschiedene Geräusche zur Kommunikation zu machen, ähnlich wie Elefanten heute kommunizieren.",
          nl: "Bewijs suggereert dat hadrosauriërs in grote kuddes leefden en hun holle kammen gebruikten om verschillende geluiden te maken voor communicatie, vergelijkbaar met hoe olifanten vandaag communiceren."
        }
      },
      {
        question: {
          en: "What was significant about flowering plants during the Cretaceous?",
          es: "¿Qué era significativo sobre las plantas con flores durante el Cretácico?",
          de: "Was war bedeutsam an Blütenpflanzen während der Kreidezeit?",
          nl: "Wat was significant aan bloeiende planten tijdens het Krijt?"
        },
        options: [
          { en: "They rapidly diversified and changed ecosystems", es: "Se diversificaron rápidamente y cambiaron los ecosistemas", de: "Sie diversifizierten sich schnell und veränderten Ökosysteme", nl: "Ze diversifieerden snel en veranderden ecosystemen" },
          { en: "They didn't exist yet", es: "Aún no existían", de: "Sie existierten noch nicht", nl: "Ze bestonden nog niet" },
          { en: "They were all poisonous", es: "Todas eran venenosas", de: "Sie waren alle giftig", nl: "Ze waren allemaal giftig" },
          { en: "They only grew underwater", es: "Solo crecían bajo el agua", de: "Sie wuchsen nur unter Wasser", nl: "Ze groeiden alleen onder water" }
        ],
        correct: 0,
        explanation: {
          en: "The rapid evolution and spread of flowering plants (angiosperms) during the Cretaceous created new food sources and fundamentally changed Earth's ecosystems and dinosaur diets.",
          es: "La rápida evolución y expansión de las plantas con flores (angiospermas) durante el Cretácico creó nuevas fuentes de alimento y cambió fundamentalmente los ecosistemas de la Tierra y las dietas de los dinosaurios.",
          de: "Die schnelle Evolution und Ausbreitung von Blütenpflanzen (Angiospermen) während der Kreidezeit schuf neue Nahrungsquellen und veränderte grundlegend die Ökosysteme der Erde und die Dinosaurier-Diäten.",
          nl: "De snelle evolutie en verspreiding van bloeiende planten (angiospermen) tijdens het Krijt creëerde nieuwe voedselbronnen en veranderde fundamenteel de ecosystemen van de aarde en dinosaurus diëten."
        }
      },
      {
        question: {
          en: "What evidence suggests T. rex had excellent senses?",
          es: "¿Qué evidencia sugiere que T. rex tenía sentidos excelentes?",
          de: "Welche Beweise deuten darauf hin, dass T. rex ausgezeichnete Sinne hatte?",
          nl: "Welk bewijs suggereert dat T. rex uitstekende zintuigen had?"
        },
        options: [
          { en: "Large brain areas for sight and smell", es: "Grandes áreas cerebrales para vista y olfato", de: "Große Gehirnbereiche für Sicht und Geruch", nl: "Grote hersengebieden voor zicht en reuk" },
          { en: "It wore glasses", es: "Usaba gafas", de: "Es trug eine Brille", nl: "Hij droeg een bril" },
          { en: "It had extra ears", es: "Tenía orejas extra", de: "Es hatte extra Ohren", nl: "Hij had extra oren" },
          { en: "Ancient writings", es: "Escrituras antiguas", de: "Alte Schriften", nl: "Oude geschriften" }
        ],
        correct: 0,
        explanation: {
          en: "Brain case studies of T. rex fossils show enlarged areas for processing visual and olfactory information, suggesting it had keen eyesight and an excellent sense of smell for hunting.",
          es: "Los estudios del cráneo cerebral de fósiles de T. rex muestran áreas agrandadas para procesar información visual y olfativa, sugiriendo que tenía vista aguda y un excelente sentido del olfato para cazar.",
          de: "Studien des Hirnschädels von T. rex-Fossilien zeigen vergrößerte Bereiche zur Verarbeitung visueller und olfaktorischer Informationen, was darauf hindeutet, dass er scharfe Augen und einen ausgezeichneten Geruchssinn zum Jagen hatte.",
          nl: "Hersenkas studies van T. rex fossielen tonen vergrote gebieden voor het verwerken van visuele en reuk informatie, wat suggereert dat hij scherpe ogen en een uitstekende reukzin had voor het jagen."
        }
      },
      {
        question: {
          en: "What was unusual about Amargasaurus compared to other sauropods?",
          es: "¿Qué era inusual de Amargasaurus comparado con otros saurópodos?",
          de: "Was war ungewöhnlich an Amargasaurus im Vergleich zu anderen Sauropoden?",
          nl: "Wat was ongewoon aan Amargasaurus vergeleken met andere sauropoden?"
        },
        options: [
          { en: "It had parallel spines along its neck and back", es: "Tenía espinas paralelas a lo largo de su cuello y espalda", de: "Es hatte parallele Stacheln entlang seines Nackens und Rückens", nl: "Hij had parallelle stekels langs zijn nek en rug" },
          { en: "It was carnivorous", es: "Era carnívoro", de: "Es war fleischfressend", nl: "Hij was carnivoor" },
          { en: "It could fly", es: "Podía volar", de: "Es konnte fliegen", nl: "Hij kon vliegen" },
          { en: "It lived in water", es: "Vivía en el agua", de: "Es lebte im Wasser", nl: "Hij leefde in het water" }
        ],
        correct: 0,
        explanation: {
          en: "Amargasaurus was a smaller sauropod with distinctive parallel rows of tall spines along its neck and back, possibly supporting skin sails or used for display.",
          es: "Amargasaurus era un saurópodo más pequeño con distintivas filas paralelas de espinas altas a lo largo de su cuello y espalda, posiblemente sosteniendo velas de piel o usadas para exhibición.",
          de: "Amargasaurus war ein kleinerer Sauropode mit charakteristischen parallelen Reihen hoher Stacheln entlang seines Nackens und Rückens, die möglicherweise Hautsegel stützten oder zur Zur-Schau-Stellung dienten.",
          nl: "Amargasaurus was een kleinere sauropode met onderscheidende parallelle rijen hoge stekels langs zijn nek en rug, mogelijk ondersteunend huidzeilen of gebruikt voor vertoon."
        }
      },
      {
        question: {
          en: "What is the K-Pg extinction event?",
          es: "¿Qué es el evento de extinción K-Pg?",
          de: "Was ist das K-Pg-Aussterbeereignis?",
          nl: "Wat is de K-Pg extinctie gebeurtenis?"
        },
        options: [
          { en: "The mass extinction that ended the Cretaceous Period", es: "La extinción masiva que terminó el Período Cretácico", de: "Das Massenaussterben, das die Kreidezeit beendete", nl: "De massa-extinctie die de Krijt Periode beëindigde" },
          { en: "A dinosaur disease", es: "Una enfermedad de dinosaurios", de: "Eine Dinosaurier-Krankheit", nl: "Een dinosaurus ziekte" },
          { en: "The first dinosaur discovery", es: "El primer descubrimiento de dinosaurio", de: "Die erste Dinosaurier-Entdeckung", nl: "De eerste dinosaurus ontdekking" },
          { en: "A type of fossil", es: "Un tipo de fósil", de: "Eine Art von Fossil", nl: "Een type fossiel" }
        ],
        correct: 0,
        explanation: {
          en: "The K-Pg (Cretaceous-Paleogene) extinction event occurred 66 million years ago and marked the end of non-bird dinosaurs, caused by an asteroid impact and volcanism.",
          es: "El evento de extinción K-Pg (Cretácico-Paleógeno) ocurrió hace 66 millones de años y marcó el fin de los dinosaurios no avianos, causado por un impacto de asteroide y vulcanismo.",
          de: "Das K-Pg (Kreide-Paläogen) Aussterbeereignis ereignete sich vor 66 Millionen Jahren und markierte das Ende der Nicht-Vogel-Dinosaurier, verursacht durch einen Asteroideneinschlag und Vulkanismus.",
          nl: "De K-Pg (Krijt-Paleogeen) extinctie gebeurtenis vond plaats 66 miljoen jaar geleden en markeerde het einde van niet-vogel dinosaurussen, veroorzaakt door een asteroïde inslag en vulkanisme."
        }
      },
      {
        question: {
          en: "What type of teeth did most hadrosaurs have?",
          es: "¿Qué tipo de dientes tenían la mayoría de los hadrosaurios?",
          de: "Was für Zähne hatten die meisten Hadrosaurier?",
          nl: "Wat voor tanden hadden de meeste hadrosauriërs?"
        },
        options: [
          { en: "Hundreds of small grinding teeth", es: "Cientos de pequeños dientes trituradores", de: "Hunderte kleine Mahlzähne", nl: "Honderden kleine maalende tandjes" },
          { en: "Large sharp fangs", es: "Grandes colmillos afilados", de: "Große scharfe Reißzähne", nl: "Grote scherpe hoektanden" },
          { en: "No teeth at all", es: "Sin dientes en absoluto", de: "Gar keine Zähne", nl: "Helemaal geen tanden" },
          { en: "Only two teeth", es: "Solo dos dientes", de: "Nur zwei Zähne", nl: "Slechts twee tanden" }
        ],
        correct: 0,
        explanation: {
          en: "Hadrosaurs had dental batteries containing hundreds of small, closely packed teeth that worked together like a grinding mill to process tough plant material.",
          es: "Los hadrosaurios tenían baterías dentales que contenían cientos de dientes pequeños y densamente empaquetados que trabajaban juntos como un molino triturador para procesar material vegetal duro.",
          de: "Hadrosaurier hatten Zahnbatterien mit Hunderten kleiner, dicht gepackter Zähne, die zusammenarbeiteten wie eine Mahlmühle, um hartes Pflanzenmaterial zu verarbeiten.",
          nl: "Hadrosauriërs hadden tandenbatterijen met honderden kleine, dicht opeengepakte tandjes die samenwerkten als een maalinstallatie om taai plantenmateriaal te verwerken."
        }
      },
      {
        question: {
          en: "What was the primary hunting strategy of pack-hunting dromaeosaurids?",
          es: "¿Cuál era la estrategia de caza principal de los dromeosáuridos cazadores en manada?",
          de: "Was war die Hauptjagdstrategie der rudeljagenden Dromaeosauriden?",
          nl: "Wat was de primaire jachtstrategie van roedel-jagende dromaeosauriden?"
        },
        options: [
          { en: "Coordinated attacks using sickle claws", es: "Ataques coordinados usando garras de hoz", de: "Koordinierte Angriffe mit Sichelkrallen", nl: "Gecoördineerde aanvallen met sikkelklauwen" },
          { en: "Ambush from trees", es: "Emboscada desde árboles", de: "Hinterhalt von Bäumen", nl: "Hinderlaag vanuit bomen" },
          { en: "Swimming attacks", es: "Ataques nadando", de: "Schwimmende Angriffe", nl: "Zwemmende aanvallen" },
          { en: "Underground tunnels", es: "Túneles subterráneos", de: "Unterirdische Tunnel", nl: "Ondergrondse tunnels" }
        ],
        correct: 0,
        explanation: {
          en: "Dromaeosaurids like Velociraptor likely hunted in coordinated packs, using their intelligence and large sickle-shaped claws to bring down prey much larger than themselves.",
          es: "Los dromeosáuridos como Velociraptor probablemente cazaban en manadas coordinadas, usando su inteligencia y grandes garras en forma de hoz para derribar presas mucho más grandes que ellos.",
          de: "Dromaeosauriden wie Velociraptor jagten wahrscheinlich in koordinierten Rudeln und nutzten ihre Intelligenz und großen sichelförmigen Krallen, um Beute zu erlegen, die viel größer war als sie selbst.",
          nl: "Dromaeosauriden zoals Velociraptor jaagden waarschijnlijk in gecoördineerde roedels, gebruikmakend van hun intelligentie en grote sikkelachtige klauwen om prooi te vellen die veel groter was dan zijzelf."
        }
      },
      {
        question: {
          en: "What made the Late Cretaceous climate different from today?",
          es: "¿Qué hizo que el clima del Cretácico Tardío fuera diferente del de hoy?",
          de: "Was machte das Klima der Oberkreide anders als heute?",
          nl: "Wat maakte het Laat-Krijt klimaat anders dan vandaag?"
        },
        options: [
          { en: "Much warmer with no polar ice caps", es: "Mucho más cálido sin casquetes polares", de: "Viel wärmer ohne polare Eiskappen", nl: "Veel warmer zonder poolijskappen" },
          { en: "Much colder than today", es: "Mucho más frío que hoy", de: "Viel kälter als heute", nl: "Veel kouder dan vandaag" },
          { en: "Exactly the same", es: "Exactamente igual", de: "Genau das gleiche", nl: "Precies hetzelfde" },
          { en: "Always raining", es: "Siempre lloviendo", de: "Immer regnend", nl: "Altijd regen" }
        ],
        correct: 0,
        explanation: {
          en: "The Late Cretaceous was a greenhouse period with global temperatures 6-14°C warmer than today, no ice at the poles, and sea levels 100-250 meters higher than present.",
          es: "El Cretácico Tardío fue un período de invernadero con temperaturas globales 6-14°C más cálidas que hoy, sin hielo en los polos y niveles del mar 100-250 metros más altos que ahora.",
          de: "Die Oberkreide war eine Treibhausperiode mit globalen Temperaturen 6-14°C wärmer als heute, ohne Eis an den Polen und Meeresspiegeln 100-250 Meter höher als heute.",
          nl: "Het Laat-Krijt was een broeikas periode met globale temperaturen 6-14°C warmer dan vandaag, geen ijs op de polen en zeespiegels 100-250 meter hoger dan nu."
        }
      },
      {
        question: {
          en: "What was the approximate duration of the entire Mesozoic Era?",
          es: "¿Cuál fue la duración aproximada de toda la Era Mesozoica?",
          de: "Wie lange dauerte die gesamte Mesozoische Ära ungefähr?",
          nl: "Wat was de geschatte duur van het hele Mesozoïcum?"
        },
        options: [
          { en: "About 186 million yrs", es: "Unos 186 millones de años", de: "Etwa 186 Millionen Jahre", nl: "Ongeveer 186 miljoen jaar" },
          { en: "50 million yrs", es: "50 millones de años", de: "50 Millionen Jahre", nl: "50 miljoen jaar" },
          { en: "500 million yrs", es: "500 millones de años", de: "500 Millionen Jahre", nl: "500 miljoen jaar" },
          { en: "1 billion yrs", es: "1 mil millones de años", de: "1 Milliarde Jahre", nl: "1 miljard jaar" }
        ],
        correct: 0,
        explanation: {
          en: "The Mesozoic Era lasted from about 252 to 66 million years ago (approximately 186 million years), encompassing the Triassic, Jurassic, and Cretaceous periods.",
          es: "La Era Mesozoica duró desde hace unos 252 hasta 66 millones de años (aproximadamente 186 millones de años), abarcando los períodos Triásico, Jurásico y Cretácico.",
          de: "Das Mesozoikum dauerte von etwa 252 bis 66 Millionen Jahren (ungefähr 186 Millionen Jahre) und umfasste die Perioden Trias, Jura und Kreide.",
          nl: "Het Mesozoïcum duurde van ongeveer 252 tot 66 miljoen jaar geleden (ongeveer 186 miljoen jaar), omvattend de Trias, Jura en Krijt perioden."
        }
      },
      {
        question: {
          en: "Which theropod dinosaur was characterized by its massive thumb claws used for defense and feeding?",
          es: "¿Qué dinosaurio terópodo se caracterizaba por sus enormes garras de pulgar usadas para defensa y alimentación?",
          de: "Welcher Theropoden-Dinosaurier war durch seine massiven Daumenkrallen charakterisiert, die für Verteidigung und Nahrung verwendet wurden?",
          nl: "Welke theropode dinosaurus werd gekenmerkt door zijn massieve duimklauwen gebruikt voor verdediging en voeding?"
        },
        options: [
          { en: "Therizinosaurus", es: "Therizinosaurus", de: "Therizinosaurus", nl: "Therizinosaurus" },
          { en: "Allosaurus", es: "Allosaurus", de: "Allosaurus", nl: "Allosaurus" },
          { en: "Compsognathus", es: "Compsognathus", de: "Compsognathus", nl: "Compsognathus" },
          { en: "Ceratosaurus", es: "Ceratosaurus", de: "Ceratosaurus", nl: "Ceratosaurus" }
        ],
        correct: 0,
        explanation: {
          en: "Therizinosaurus had massive claws up to 3 feet long that it used for stripping vegetation and potentially for defense. Despite being a theropod, it was actually herbivorous.",
          es: "Therizinosaurus tenía garras enormes de hasta 3 pies de largo que usaba para arrancar vegetación y potencialmente para defensa. A pesar de ser un terópodo, en realidad era herbívoro.",
          de: "Therizinosaurus hatte massive Krallen bis zu 3 Fuß lang, die er zum Abstreifen von Vegetation und möglicherweise zur Verteidigung verwendete. Obwohl ein Theropode, war er tatsächlich herbivore.",
          nl: "Therizinosaurus had massieve klauwen tot 3 voet lang die hij gebruikte voor het afstropen van vegetatie en mogelijk voor verdediging. Ondanks dat hij een theropode was, was hij eigenlijk herbivoor."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();