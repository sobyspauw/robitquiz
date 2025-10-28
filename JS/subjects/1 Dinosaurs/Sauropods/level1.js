// Sauropods Quiz - Level 1: Basic Sauropod Knowledge
(function() {
  const level1 = {
    name: {
      en: "Sauropods Level 1",
      es: "SaurÃ³podos Nivel 1",
      de: "Sauropoden Stufe 1",
      nl: "Sauropoden Level 1"
    },
    questions: [
      {
        question: {
          en: "What type of dinosaurs were sauropods?",
          es: "Â¿QuÃ© tipo de dinosaurios eran los saurÃ³podos?",
          de: "Was fÃ¼r Dinosaurier waren Sauropoden?",
          nl: "Wat voor soort dinosaurussen waren sauropoden?"
        },
        options: [
          { en: "Long-necked plant-eaters", es: "Comedores de plantas de cuello largo", de: "Langhalsige Pflanzenfresser", nl: "Langnek planteneters" },
          { en: "Short fierce meat-eaters", es: "Comedores de carne feroces y cortos", de: "Kurze wilde Fleischfresser", nl: "Korte felle vleeseters" },
          { en: "Flying dinosaurs", es: "Dinosaurios voladores", de: "Fliegende Dinosaurier", nl: "Vliegende dinosaurussen" },
          { en: "Swimming dinosaurs", es: "Dinosaurios nadadores", de: "Schwimmende Dinosaurier", nl: "Zwemmende dinosaurussen" }
        ],
        correct: 0,
        explanation: {
          en: "Sauropods were massive herbivorous dinosaurs with extremely long necks that helped them reach high vegetation that other dinosaurs couldn't.",
          es: "Los saurÃ³podos eran dinosaurios herbÃ­voros masivos con cuellos extremadamente largos que les ayudaban a alcanzar vegetaciÃ³n alta que otros dinosaurios no podÃ­an.",
          de: "Sauropoden waren massive pflanzenfressende Dinosaurier mit extrem langen HÃ¤lsen, die ihnen halfen, hohe Vegetation zu erreichen, die andere Dinosaurier nicht erreichen konnten.",
          nl: "Sauropoden waren massieve plantenetende dinosaurussen met extreem lange nekken die hen hielpen hoge vegetatie te bereiken die andere dinosaurussen niet konden."
        }
      },
      {
        question: {
          en: "Which is the most famous sauropod dinosaur?",
          es: "Â¿CuÃ¡l es el dinosaurio saurÃ³podo mÃ¡s famoso?",
          de: "Welcher ist der berÃ¼hmteste Sauropoden-Dinosaurier?",
          nl: "Welke is de beroemdste sauropoden dinosaurus?"
        },
        options: [
          { en: "Brontosaurus", es: "Brontosaurus", de: "Brontosaurus", nl: "Brontosaurus" },
          { en: "T-Rex", es: "T-Rex", de: "T-Rex", nl: "T-Rex" },
          { en: "Triceratops", es: "Triceratops", de: "Triceratops", nl: "Triceratops" },
          { en: "Velociraptor", es: "Velociraptor", de: "Velociraptor", nl: "Velociraptor" }
        ],
        correct: 0,
        explanation: {
          en: "Brontosaurus (also known as Apatosaurus) is one of the most recognizable sauropods, famous for its long neck and massive size.",
          es: "Brontosaurus (tambiÃ©n conocido como Apatosaurus) es uno de los saurÃ³podos mÃ¡s reconocibles, famoso por su cuello largo y tamaÃ±o masivo.",
          de: "Brontosaurus (auch bekannt als Apatosaurus) ist einer der bekanntesten Sauropoden, berÃ¼hmt fÃ¼r seinen langen Hals und seine massive GrÃ¶ÃŸe.",
          nl: "Brontosaurus (ook bekend als Apatosaurus) is een van de meest herkenbare sauropoden, beroemd om zijn lange nek en massieve grootte."
        }
      },
      {
        question: {
          en: "How did sauropods defend themselves from predators?",
          es: "Â¿CÃ³mo se defendÃ­an los saurÃ³podos de los depredadores?",
          de: "Wie verteidigten sich Sauropoden gegen Raubtiere?",
          nl: "Hoe verdedigden sauropoden zich tegen roofdieren?"
        },
        options: [
          { en: "Massive size & tail whips", es: "Usando su tamaÃ±o masivo y colas largas como lÃ¡tigos", de: "Mit ihrer massiven GrÃ¶ÃŸe und langen SchwÃ¤nzen als Peitschen", nl: "Door hun massieve grootte en lange staarten als zwepen te gebruiken" },
          { en: "Running very fast", es: "Corriendo muy rÃ¡pido", de: "Sehr schnell rennen", nl: "Heel hard rennen" },
          { en: "Hiding in caves", es: "EscondiÃ©ndose en cuevas", de: "In HÃ¶hlen verstecken", nl: "Verstoppen in grotten" },
          { en: "Flying away", es: "Volando lejos", de: "Wegfliegen", nl: "Wegvliegen" }
        ],
        correct: 0,
        explanation: {
          en: "Sauropods were so large that adult ones had few predators, and they could use their powerful tails like giant whips for defense.",
          es: "Los saurÃ³podos eran tan grandes que los adultos tenÃ­an pocos depredadores, y podÃ­an usar sus colas poderosas como lÃ¡tigos gigantes para defenderse.",
          de: "Sauropoden waren so groÃŸ, dass erwachsene Tiere wenige Raubtiere hatten, und sie konnten ihre kraftvollen SchwÃ¤nze wie riesige Peitschen zur Verteidigung einsetzen.",
          nl: "Sauropoden waren zo groot dat volwassen exemplaren weinig roofdieren hadden, en ze konden hun krachtige staarten als gigantische zwepen gebruiken voor verdediging."
        }
      },
      {
        question: {
          en: "What did sauropods primarily eat?",
          es: "Â¿QuÃ© comÃ­an principalmente los saurÃ³podos?",
          de: "Was fraÃŸen Sauropoden hauptsÃ¤chlich?",
          nl: "Wat aten sauropoden voornamelijk?"
        },
        options: [
          { en: "Leaves, ferns, plants", es: "Hojas, helechos y otras plantas", de: "BlÃ¤tter, Farne und andere Pflanzen", nl: "Bladeren, varens en andere planten" },
          { en: "Fish and sea creatures", es: "Peces y criaturas marinas", de: "Fische und Meerestiere", nl: "Vissen en zeewezens" },
          { en: "Other dinos", es: "Otros dinosaurios", de: "Andere Dinosaurier", nl: "Andere dinosaurussen" },
          { en: "Insects and small animals", es: "Insectos y animales pequeÃ±os", de: "Insekten und kleine Tiere", nl: "Insecten en kleine dieren" }
        ],
        correct: 0,
        explanation: {
          en: "Sauropods were herbivores that spent most of their day eating massive amounts of plants to fuel their enormous bodies.",
          es: "Los saurÃ³podos eran herbÃ­voros que pasaban la mayor parte del dÃ­a comiendo cantidades masivas de plantas para alimentar sus cuerpos enormes.",
          de: "Sauropoden waren Pflanzenfresser, die den grÃ¶ÃŸten Teil ihres Tages damit verbrachten, massive Mengen an Pflanzen zu fressen, um ihre enormen KÃ¶rper zu nÃ¤hren.",
          nl: "Sauropoden waren herbivoren die het grootste deel van hun dag besteedden aan het eten van massale hoeveelheden planten om hun enorme lichamen te voeden."
        }
      },
      {
        question: {
          en: "How long could some sauropods grow?",
          es: "Â¿QuÃ© tan largos podÃ­an crecer algunos saurÃ³podos?",
          de: "Wie lang konnten einige Sauropoden werden?",
          nl: "Hoe lang konden sommige sauropoden worden?"
        },
        options: [
          { en: "Over 30 meters (100 feet)", es: "MÃ¡s de 30 metros (100 pies)", de: "Ãœber 30 Meter (100 FuÃŸ)", nl: "Meer dan 30 meter (100 voet)" },
          { en: "10 meters (33 feet)", es: "10 metros (33 pies)", de: "10 Meter (33 FuÃŸ)", nl: "10 meter (33 voet)" },
          { en: "5 meters (16 feet)", es: "5 metros (16 pies)", de: "5 Meter (16 FuÃŸ)", nl: "5 meter (16 voet)" },
          { en: "2 meters (7 feet)", es: "2 metros (7 pies)", de: "2 Meter (7 FuÃŸ)", nl: "2 meter (7 voet)" }
        ],
        correct: 0,
        explanation: {
          en: "The largest sauropods like Argentinosaurus could reach lengths of over 30 meters, making them some of the longest animals that ever lived on land.",
          es: "Los saurÃ³podos mÃ¡s grandes como Argentinosaurus podÃ­an alcanzar longitudes de mÃ¡s de 30 metros, convirtiÃ©ndolos en algunos de los animales mÃ¡s largos que jamÃ¡s vivieron en tierra.",
          de: "Die grÃ¶ÃŸten Sauropoden wie Argentinosaurus konnten LÃ¤ngen von Ã¼ber 30 Metern erreichen und waren damit einige der lÃ¤ngsten Landtiere, die je gelebt haben.",
          nl: "De grootste sauropoden zoals Argentinosaurus konden lengtes van meer dan 30 meter bereiken, waardoor ze enkele van de langste landdieren waren die ooit hebben geleefd."
        }
      },
      {
        question: {
          en: "What time period did most sauropods live in?",
          es: "¿En qué período de tiempo vivieron la mayoría de los saurópodos?",
          de: "In welcher Zeit lebten die meisten Sauropoden?",
          nl: "In welke tijdperiode leefden de meeste sauropoden?"
        },
        options: [
          { en: "Mesozoic Era", es: "Era Mesozoica (Era de los Dinosaurios)", de: "Mesozoikum (Zeitalter der Dinosaurier)", nl: "Mesozoïcum (Tijdperk van de Dinosaurussen)" },
          { en: "Ice Age", es: "Era de Hielo", de: "Eiszeit", nl: "IJstijd" },
          { en: "Stone Age", es: "Edad de Piedra", de: "Steinzeit", nl: "Steentijd" },
          { en: "Modern times", es: "Tiempos modernos", de: "Moderne Zeiten", nl: "Moderne tijden" }
        ],
        correct: 0,
        explanation: {
          en: "Sauropods lived during the Mesozoic Era, which lasted from about 252 to 66 million years ago. This era is often called the 'Age of Dinosaurs' because dinosaurs dominated the land during this time.",
          es: "Los saurópodos vivieron durante la Era Mesozoica, que duró desde hace unos 252 a 66 millones de años. Esta era se llama a menudo la 'Era de los Dinosaurios' porque los dinosaurios dominaron la tierra durante este tiempo.",
          de: "Sauropoden lebten während des Mesozoikums, das von etwa 252 bis 66 Millionen Jahren dauerte. Diese Ära wird oft das 'Zeitalter der Dinosaurier' genannt, weil Dinosaurier zu dieser Zeit das Land dominierten.",
          nl: "Sauropoden leefden tijdens het Mesozoïcum, dat duurde van ongeveer 252 tot 66 miljoen jaar geleden. Dit tijdperk wordt vaak het 'Tijdperk van de Dinosaurussen' genoemd omdat dinosaurussen het land domineerden tijdens deze tijd."
        }
      },
      {
        question: {
          en: "How many legs did sauropods walk on?",
          es: "¿En cuántas patas caminaban los saurópodos?",
          de: "Auf wie vielen Beinen liefen Sauropoden?",
          nl: "Op hoeveel poten liepen sauropoden?"
        },
        options: [
          { en: "Four legs", es: "Cuatro patas", de: "Vier Beine", nl: "Vier poten" },
          { en: "Two legs", es: "Dos patas", de: "Zwei Beine", nl: "Twee poten" },
          { en: "Six legs", es: "Seis patas", de: "Sechs Beine", nl: "Zes poten" },
          { en: "Eight legs", es: "Ocho patas", de: "Acht Beine", nl: "Acht poten" }
        ],
        correct: 0,
        explanation: {
          en: "Sauropods were quadrupedal, meaning they walked on four legs. Their massive size required the support of all four limbs to carry their enormous weight.",
          es: "Los saurópodos eran cuadrúpedos, lo que significa que caminaban en cuatro patas. Su tamaño masivo requería el apoyo de las cuatro extremidades para llevar su peso enorme.",
          de: "Sauropoden waren vierbeinig, das bedeutet, sie liefen auf vier Beinen. Ihre massive Größe erforderte die Unterstützung aller vier Gliedmaßen, um ihr enormes Gewicht zu tragen.",
          nl: "Sauropoden waren viervoetigen, wat betekent dat ze op vier poten liepen. Hun massieve grootte vereiste de steun van alle vier ledematen om hun enorme gewicht te dragen."
        }
      },
      {
        question: {
          en: "What shape were most sauropod eggs?",
          es: "¿Qué forma tenían la mayoría de los huevos de saurópodos?",
          de: "Welche Form hatten die meisten Sauropoden-Eier?",
          nl: "Welke vorm hadden de meeste sauropode eieren?"
        },
        options: [
          { en: "Round like a ball", es: "Redondos como una pelota", de: "Rund wie ein Ball", nl: "Rond zoals een bal" },
          { en: "Square", es: "Cuadrados", de: "Quadratisch", nl: "Vierkant" },
          { en: "Triangle shaped", es: "En forma de triángulo", de: "Dreieckig", nl: "Driehoekig" },
          { en: "Flat like a pancake", es: "Planos como un panqueque", de: "Flach wie ein Pfannkuchen", nl: "Plat zoals een pannenkoek" }
        ],
        correct: 0,
        explanation: {
          en: "Sauropod eggs were typically round or spherical in shape, unlike the oval eggs of many modern birds. They were surprisingly small compared to the size of adult sauropods.",
          es: "Los huevos de saurópodos eran típicamente redondos o esféricos en forma, a diferencia de los huevos ovalados de muchas aves modernas. Eran sorprendentemente pequeños comparados con el tamaño de los saurópodos adultos.",
          de: "Sauropoden-Eier waren typischerweise rund oder kugelförmig, im Gegensatz zu den ovalen Eiern vieler moderner Vögel. Sie waren überraschend klein im Vergleich zur Größe erwachsener Sauropoden.",
          nl: "Sauropode eieren waren typisch rond of bolvormig, in tegenstelling tot de ovale eieren van veel moderne vogels. Ze waren verrassend klein vergeleken met de grootte van volwassen sauropoden."
        }
      },
      {
        question: {
          en: "Where have most sauropod fossils been found?",
          es: "¿Dónde se han encontrado la mayoría de los fósiles de saurópodos?",
          de: "Wo wurden die meisten Sauropoden-Fossilien gefunden?",
          nl: "Waar zijn de meeste sauropode fossielen gevonden?"
        },
        options: [
          { en: "In rock layers from ancient land environments", es: "En capas de roca de ambientes terrestres antiguos", de: "In Gesteinsschichten aus alten Landumgebungen", nl: "In rotslagen van oude landiage omgevingen" },
          { en: "In the ocean", es: "En el océano", de: "Im Ozean", nl: "In de oceaan" },
          { en: "In ice", es: "En hielo", de: "Im Eis", nl: "In ijs" },
          { en: "In trees", es: "En árboles", de: "In Bäumen", nl: "In bomen" }
        ],
        correct: 0,
        explanation: {
          en: "Sauropod fossils are found in sedimentary rock layers that formed in ancient river valleys, plains, and other land environments where these dinosaurs lived and were buried after death.",
          es: "Los fósiles de saurópodos se encuentran en capas de roca sedimentaria que se formaron en antiguos valles de ríos, llanuras y otros ambientes terrestres donde estos dinosaurios vivían y fueron enterrados después de la muerte.",
          de: "Sauropoden-Fossilien werden in Sedimentgesteinsschichten gefunden, die sich in alten Flusstälern, Ebenen und anderen Landumgebungen bildeten, wo diese Dinosaurier lebten und nach dem Tod begraben wurden.",
          nl: "Sauropode fossielen worden gevonden in sedimentaire rotslagen die zich vormden in oude rivierdalen, vlaktes en andere landelijke omgevingen waar deze dinosaurussen leefden en na de dood werden begraven."
        }
      },
      {
        question: {
          en: "What happened to sauropods at the end of the dinosaur age?",
          es: "¿Qué pasó con los saurópodos al final de la era de los dinosaurios?",
          de: "Was geschah mit den Sauropoden am Ende des Dinosaurier-Zeitalters?",
          nl: "Wat gebeurde er met sauropoden aan het einde van het dinosaurustijdperk?"
        },
        options: [
          { en: "They became extinct along with other dinosaurs", es: "Se extinguieron junto con otros dinosaurios", de: "Sie starben zusammen mit anderen Dinosauriern aus", nl: "Ze stierven uit samen met andere dinosaurussen" },
          { en: "They evolved into modern elephants", es: "Evolucionaron en elefantes modernos", de: "Sie entwickelten sich zu modernen Elefanten", nl: "Ze evolueerden tot moderne olifanten" },
          { en: "They moved to the ocean", es: "Se mudaron al océano", de: "Sie zogen in den Ozean", nl: "Ze verhuisden naar de oceaan" },
          { en: "They are still alive today", es: "Todavía están vivos hoy", de: "Sie leben heute noch", nl: "Ze leven vandaag nog steeds" }
        ],
        correct: 0,
        explanation: {
          en: "Sauropods became extinct about 66 million years ago during the mass extinction event that ended the age of dinosaurs. This extinction was likely caused by an asteroid impact and volcanic activity.",
          es: "Los saurópodos se extinguieron hace unos 66 millones de años durante el evento de extinción masiva que terminó la era de los dinosaurios. Esta extinción fue probablemente causada por un impacto de asteroide y actividad volcánica.",
          de: "Sauropoden starben vor etwa 66 Millionen Jahren während des Massenaussterbens aus, das das Zeitalter der Dinosaurier beendete. Dieses Aussterben wurde wahrscheinlich durch einen Asteroideneinschlag und vulkanische Aktivität verursacht.",
          nl: "Sauropoden stierven ongeveer 66 miljoen jaar geleden uit tijdens het massale uitsterven dat het tijdperk van de dinosaurussen beëindigde. Dit uitsterven werd waarschijnlijk veroorzaakt door een asteroïde-inslag en vulkanische activiteit."
        }
      },
      {
        question: {
          en: "What did baby sauropods look like when they hatched?",
          es: "¿Cómo se veían los bebés saurópodos cuando nacieron?",
          de: "Wie sahen Sauropoden-Babys aus, als sie schlüpften?",
          nl: "Hoe zagen baby sauropoden eruit toen ze uitkwamen?"
        },
        options: [
          { en: "Very small, about the size of a small dog", es: "Muy pequeños, del tamaño de un perro pequeño", de: "Sehr klein, etwa so groß wie ein kleiner Hund", nl: "Heel klein, ongeveer zo groot als een kleine hond" },
          { en: "Already as big as adult elephants", es: "Ya tan grandes como elefantes adultos", de: "Bereits so groß wie erwachsene Elefanten", nl: "Al zo groot als volwassen olifanten" },
          { en: "The size of modern cars", es: "Del tamaño de autos modernos", de: "So groß wie moderne Autos", nl: "Zo groot als moderne auto's" },
          { en: "Microscopic in size", es: "De tamaño microscópico", de: "Mikroskopisch klein", nl: "Microscopisch van grootte" }
        ],
        correct: 0,
        explanation: {
          en: "Baby sauropods hatched very small, typically only about 30-40 cm long, roughly the size of a small dog. They had to grow incredibly fast to reach their enormous adult size.",
          es: "Los bebés saurópodos nacían muy pequeños, típicamente solo unos 30-40 cm de largo, aproximadamente del tamaño de un perro pequeño. Tenían que crecer increíblemente rápido para alcanzar su tamaño adulto enorme.",
          de: "Sauropoden-Babys schlüpften sehr klein, typischerweise nur etwa 30-40 cm lang, ungefähr so groß wie ein kleiner Hund. Sie mussten unglaublich schnell wachsen, um ihre enorme Erwachsenengröße zu erreichen.",
          nl: "Baby sauropoden kwamen heel klein uit, typisch slechts ongeveer 30-40 cm lang, ongeveer zo groot als een kleine hond. Ze moesten ongelooflijk snel groeien om hun enorme volwassen grootte te bereiken."
        }
      },
      {
        question: {
          en: "How did sauropods swallow their food?",
          es: "¿Cómo tragaban su comida los saurópodos?",
          de: "Wie schluckten Sauropoden ihr Futter?",
          nl: "Hoe slikten sauropoden hun voedsel door?"
        },
        options: [
          { en: "They swallowed it whole without chewing", es: "Lo tragaban entero sin masticar", de: "Sie schluckten es ganz ohne zu kauen", nl: "Ze slikten het heel door zonder te kauwen" },
          { en: "They chewed it thoroughly like cows", es: "Lo masticaban completamente como las vacas", de: "Sie kauten es gründlich wie Kühe", nl: "Ze kauwden het grondig zoals koeien" },
          { en: "They only drank liquids", es: "Solo bebían líquidos", de: "Sie tranken nur Flüssigkeiten", nl: "Ze dronken alleen vloeistoffen" },
          { en: "They cooked their food first", es: "Cocinaban su comida primero", de: "Sie kochten ihr Essen zuerst", nl: "Ze kookten hun eten eerst" }
        ],
        correct: 0,
        explanation: {
          en: "Sauropods had small teeth designed for stripping leaves, not chewing. They swallowed plant material whole and used stones in their stomachs to help grind up the food.",
          es: "Los saurópodos tenían dientes pequeños diseñados para arrancar hojas, no para masticar. Tragaban material vegetal entero y usaban piedras en sus estómagos para ayudar a moler la comida.",
          de: "Sauropoden hatten kleine Zähne, die zum Abstreifen von Blättern entwickelt waren, nicht zum Kauen. Sie schluckten Pflanzenmaterial ganz und verwendeten Steine in ihren Mägen, um das Futter zu zermahlen.",
          nl: "Sauropoden hadden kleine tanden ontworpen voor het afstropen van bladeren, niet voor kauwen. Ze slikten plantenmateriaal heel door en gebruikten stenen in hun magen om het voedsel te helpen vermalen."
        }
      },
      {
        question: {
          en: "What color were sauropods?",
          es: "¿De qué color eran los saurópodos?",
          de: "Welche Farbe hatten Sauropoden?",
          nl: "Welke kleur hadden sauropoden?"
        },
        options: [
          { en: "We don't know for sure, but probably earth tones like brown or green", es: "No sabemos con certeza, pero probablemente tonos tierra como marrón o verde", de: "Wir wissen es nicht genau, aber wahrscheinlich Erdtöne wie braun oder grün", nl: "We weten het niet zeker, maar waarschijnlijk aardtinten zoals bruin of groen" },
          { en: "Bright pink and purple", es: "Rosa brillante y púrpura", de: "Leuchtend rosa und lila", nl: "Fel roze en paars" },
          { en: "Always black and white stripes", es: "Siempre rayas negras y blancas", de: "Immer schwarz-weiße Streifen", nl: "Altijd zwart-witte strepen" },
          { en: "Glowing neon colors", es: "Colores neón brillantes", de: "Leuchtende Neonfarben", nl: "Gloeiende neonkleuren" }
        ],
        correct: 0,
        explanation: {
          en: "Since sauropods lived so long ago, their skin color is not preserved in fossils. Scientists think they were probably colored like modern large animals - browns, grays, or greens for camouflage.",
          es: "Dado que los saurópodos vivieron hace tanto tiempo, el color de su piel no se conserva en los fósiles. Los científicos piensan que probablemente tenían colores como los animales grandes modernos - marrones, grises o verdes para camuflaje.",
          de: "Da Sauropoden vor so langer Zeit lebten, ist ihre Hautfarbe in Fossilien nicht erhalten. Wissenschaftler denken, sie waren wahrscheinlich wie moderne große Tiere gefärbt - braun, grau oder grün zur Tarnung.",
          nl: "Omdat sauropoden zo lang geleden leefden, is hun huidkleur niet bewaard gebleven in fossielen. Wetenschappers denken dat ze waarschijnlijk gekleurd waren zoals moderne grote dieren - bruin, grijs of groen voor camouflage."
        }
      },
      {
        question: {
          en: "Where did sauropods build their nests?",
          es: "¿Dónde construyeron sus nidos los saurópodos?",
          de: "Wo bauten Sauropoden ihre Nester?",
          nl: "Waar bouwden sauropoden hun nesten?"
        },
        options: [
          { en: "On the ground in simple scrapes or mounds", es: "En el suelo en raspados o montículos simples", de: "Auf dem Boden in einfachen Mulden oder Hügeln", nl: "Op de grond in eenvoudige kuilen of heuvels" },
          { en: "High up in tall trees", es: "Alto en árboles altos", de: "Hoch oben in hohen Bäumen", nl: "Hoog in hoge bomen" },
          { en: "Deep underground in caves", es: "Profundamente bajo tierra en cuevas", de: "Tief unterirdisch in Höhlen", nl: "Diep ondergronds in grotten" },
          { en: "Floating on water", es: "Flotando en el agua", de: "Schwimmend auf dem Wasser", nl: "Drijvend op water" }
        ],
        correct: 0,
        explanation: {
          en: "Sauropod nests found by paleontologists show they laid their eggs in simple ground nests, either in shallow scrapes or small mounds of earth, similar to modern crocodiles.",
          es: "Los nidos de saurópodos encontrados por paleontólogos muestran que ponían sus huevos en nidos simples en el suelo, ya sea en raspados superficiales o pequeños montículos de tierra, similar a los cocodrilos modernos.",
          de: "Sauropoden-Nester, die von Paläontologen gefunden wurden, zeigen, dass sie ihre Eier in einfachen Bodennestern legten, entweder in flachen Mulden oder kleinen Erdhügeln, ähnlich wie moderne Krokodile.",
          nl: "Sauropode nesten gevonden door paleontologen tonen dat ze hun eieren legden in eenvoudige grondnesten, ofwel in ondiepe kuilen of kleine aardheuvels, vergelijkbaar met moderne krokodillen."
        }
      },
      {
        question: {
          en: "What sound did sauropods probably make?",
          es: "¿Qué sonido probablemente hacían los saurópodos?",
          de: "Welche Geräusche machten Sauropoden wahrscheinlich?",
          nl: "Welk geluid maakten sauropoden waarschijnlijk?"
        },
        options: [
          { en: "Deep, low rumbling sounds like elephants", es: "Sonidos profundos y bajos como elefantes", de: "Tiefe, niederfrequente Rumpelgeräusche wie Elefanten", nl: "Diepe, lage rommelende geluiden zoals olifanten" },
          { en: "High-pitched squeaking", es: "Chirridos agudos", de: "Hochfrequentes Quietschen", nl: "Hoge piepende geluiden" },
          { en: "Roaring like lions", es: "Rugiendo como leones", de: "Brüllend wie Löwen", nl: "Brullend zoals leeuwen" },
          { en: "They were completely silent", es: "Eran completamente silenciosos", de: "Sie waren völlig still", nl: "Ze waren volledig stil" }
        ],
        correct: 0,
        explanation: {
          en: "Based on their large size and long necks, scientists think sauropods probably made deep, low-frequency sounds similar to elephants or whales, which could travel long distances to communicate with other sauropods.",
          es: "Basándose en su gran tamaño y cuellos largos, los científicos piensan que los saurópodos probablemente hacían sonidos profundos de baja frecuencia similares a elefantes o ballenas, que podrían viajar largas distancias para comunicarse con otros saurópodos.",
          de: "Basierend auf ihrer großen Größe und langen Hälsen denken Wissenschaftler, dass Sauropoden wahrscheinlich tiefe, niederfrequente Geräusche ähnlich wie Elefanten oder Wale machten, die weite Entfernungen zurücklegen konnten, um mit anderen Sauropoden zu kommunizieren.",
          nl: "Gebaseerd op hun grote grootte en lange nekken, denken wetenschappers dat sauropoden waarschijnlijk diepe, laagfrequente geluiden maakten vergelijkbaar met olifanten of walvissen, die lange afstanden konden afleggen om te communiceren met andere sauropoden."
        }
      },
      {
        question: {
          en: "How fast did sauropods grow from babies to adults?",
          es: "¿Qué tan rápido crecieron los saurópodos de bebés a adultos?",
          de: "Wie schnell wuchsen Sauropoden von Babys zu Erwachsenen?",
          nl: "Hoe snel groeiden sauropoden van baby's tot volwassenen?"
        },
        options: [
          { en: "Very fast - they could grow several tons per year", es: "Muy rápido - podían crecer varias toneladas por año", de: "Sehr schnell - sie konnten mehrere Tonnen pro Jahr wachsen", nl: "Heel snel - ze konden meerdere tonnen per jaar groeien" },
          { en: "Very slowly over hundreds of yrs", es: "Muy lentamente durante cientos de años", de: "Sehr langsam über hunderte von Jahren", nl: "Heel langzaam over honderden jaren" },
          { en: "They stayed the same size their whole life", es: "Mantuvieron el mismo tamaño toda su vida", de: "Sie blieben ihr ganzes Leben lang gleich groß", nl: "Ze bleven hun hele leven dezelfde grootte" },
          { en: "They grew only during winter", es: "Crecían solo durante el invierno", de: "Sie wuchsen nur im Winter", nl: "Ze groeiden alleen tijdens de winter" }
        ],
        correct: 0,
        explanation: {
          en: "Sauropods had some of the fastest growth rates of any animal ever discovered. They could gain several tons of weight per year during their rapid growth phase to reach their massive adult size.",
          es: "Los saurópodos tenían algunas de las tasas de crecimiento más rápidas de cualquier animal jamás descubierto. Podían ganar varias toneladas de peso por año durante su fase de crecimiento rápido para alcanzar su tamaño adulto masivo.",
          de: "Sauropoden hatten einige der schnellsten Wachstumsraten aller jemals entdeckten Tiere. Sie konnten während ihrer schnellen Wachstumsphase mehrere Tonnen Gewicht pro Jahr zunehmen, um ihre massive Erwachsenengröße zu erreichen.",
          nl: "Sauropoden hadden enkele van de snelste groeisnelheden van alle ooit ontdekte dieren. Ze konden meerdere tonnen gewicht per jaar aankomen tijdens hun snelle groeifase om hun massieve volwassen grootte te bereiken."
        }
      },
      {
        question: {
          en: "What modern animal is most similar to sauropods in lifestyle?",
          es: "¿Qué animal moderno es más similar a los saurópodos en estilo de vida?",
          de: "Welches moderne Tier ist Sauropoden im Lebensstil am ähnlichsten?",
          nl: "Welk modern dier lijkt het meest op sauropoden in levensstijl?"
        },
        options: [
          { en: "Elephants - large plant-eaters that live in herds", es: "Elefantes - grandes comedores de plantas que viven en manadas", de: "Elefanten - große Pflanzenfresser, die in Herden leben", nl: "Olifanten - grote planteneters die in kuddes leven" },
          { en: "Lions - fierce predators", es: "Leones - depredadores feroces", de: "Löwen - wilde Raubtiere", nl: "Leeuwen - felle roofdieren" },
          { en: "Dolphins - intelligent ocean swimmers", es: "Delfines - nadadores oceánicos inteligentes", de: "Delfine - intelligente Ozeanschwimmer", nl: "Dolfijnen - intelligente oceaanzwemmers" },
          { en: "Eagles - flying hunters", es: "Águilas - cazadores voladores", de: "Adler - fliegende Jäger", nl: "Adelaars - vliegende jagers" }
        ],
        correct: 0,
        explanation: {
          en: "Elephants are the best modern comparison to sauropods because they are large herbivores that live in social groups, have long lifespans, and need to eat constantly to support their massive bodies.",
          es: "Los elefantes son la mejor comparación moderna con los saurópodos porque son grandes herbívoros que viven en grupos sociales, tienen vidas largas y necesitan comer constantemente para sostener sus cuerpos masivos.",
          de: "Elefanten sind der beste moderne Vergleich zu Sauropoden, weil sie große Pflanzenfresser sind, die in sozialen Gruppen leben, lange Lebensspannen haben und ständig fressen müssen, um ihre massiven Körper zu ernähren.",
          nl: "Olifanten zijn de beste moderne vergelijking met sauropoden omdat ze grote herbivoren zijn die in sociale groepen leven, lange levensduren hebben en constant moeten eten om hun massieve lichamen te ondersteunen."
        }
      },
      {
        question: {
          en: "Why were sauropods so successful as a group of dinosaurs?",
          es: "¿Por qué fueron tan exitosos los saurópodos como grupo de dinosaurios?",
          de: "Warum waren Sauropoden als Dinosauriergruppe so erfolgreich?",
          nl: "Waarom waren sauropoden zo succesvol als groep dinosaurussen?"
        },
        options: [
          { en: "Their long necks let them eat food other dinosaurs couldn't reach", es: "Sus cuellos largos les permitían comer alimentos que otros dinosaurios no podían alcanzar", de: "Ihre langen Hälse erlaubten ihnen, Nahrung zu essen, die andere Dinosaurier nicht erreichen konnten", nl: "Hun lange nekken stelden hen in staat voedsel te eten dat andere dinosaurussen niet konden bereiken" },
          { en: "They were the fastest running dinosaurs", es: "Eran los dinosaurios que corrían más rápido", de: "Sie waren die schnellsten laufenden Dinosaurier", nl: "Ze waren de snelst rennende dinosaurussen" },
          { en: "They could fly away from danger", es: "Podían volar para escapar del peligro", de: "Sie konnten vor Gefahren davonfliegen", nl: "Ze konden wegvliegen van gevaar" },
          { en: "They were the smartest dinosaurs", es: "Eran los dinosaurios más inteligentes", de: "Sie waren die klügsten Dinosaurier", nl: "Ze waren de slimste dinosaurussen" }
        ],
        correct: 0,
        explanation: {
          en: "Sauropods were successful because their long necks gave them access to an ecological niche no other land animals could exploit - the high canopy of trees. This allowed them to eat without competing directly with other herbivorous dinosaurs.",
          es: "Los saurópodos fueron exitosos porque sus cuellos largos les dieron acceso a un nicho ecológico que ningún otro animal terrestre podía explotar - el dosel alto de los árboles. Esto les permitió comer sin competir directamente con otros dinosaurios herbívoros.",
          de: "Sauropoden waren erfolgreich, weil ihre langen Hälse ihnen Zugang zu einer ökologischen Nische gaben, die kein anderes Landtier nutzen konnte - die hohen Baumkronen. Dies erlaubte es ihnen zu fressen, ohne direkt mit anderen pflanzenfressenden Dinosauriern zu konkurrieren.",
          nl: "Sauropoden waren succesvol omdat hun lange nekken hen toegang gaven tot een ecologische niche die geen ander landdier kon benutten - de hoge boomkroon. Dit stelde hen in staat te eten zonder direct te concurreren met andere herbivore dinosaurussen."
        }
      },
      {
        question: {
          en: "What did baby sauropods look like when they hatched from eggs?",
          es: "¿Cómo se veían los bebés saurópodos cuando salían de los huevos?",
          de: "Wie sahen Sauropoden-Babys aus, als sie aus Eiern schlüpften?",
          nl: "Hoe zagen baby sauropoden eruit toen ze uit eieren kwamen?"
        },
        options: [
          { en: "Very small but already looked like mini adults", es: "Muy pequeños pero ya parecían adultos en miniatura", de: "Sehr klein, aber sahen bereits wie Mini-Erwachsene aus", nl: "Heel klein maar zagen er al uit als mini volwassenen" },
          { en: "They looked like tiny T-Rex babies", es: "Parecían bebés T-Rex diminutos", de: "Sie sahen aus wie winzige T-Rex-Babys", nl: "Ze zagen eruit als kleine T-Rex baby's" },
          { en: "They had wings like birds", es: "Tenían alas como pájaros", de: "Sie hatten Flügel wie Vögel", nl: "Ze hadden vleugels zoals vogels" },
          { en: "They lived in water like fish", es: "Vivían en el agua como peces", de: "Sie lebten im Wasser wie Fische", nl: "Ze leefden in water zoals vissen" }
        ],
        correct: 0,
        explanation: {
          en: "Baby sauropods hatched from eggs and looked like tiny versions of their parents. They already had long necks and tails, but were only about the size of a small dog when they hatched.",
          es: "Los bebés saurópodos salían de huevos y parecían versiones diminutas de sus padres. Ya tenían cuellos y colas largas, pero eran solo del tamaño de un perro pequeño cuando nacían.",
          de: "Sauropoden-Babys schlüpften aus Eiern und sahen aus wie winzige Versionen ihrer Eltern. Sie hatten bereits lange Hälse und Schwänze, waren aber nur etwa so groß wie ein kleiner Hund, als sie schlüpften.",
          nl: "Baby sauropoden kwamen uit eieren en zagen eruit als kleine versies van hun ouders. Ze hadden al lange nekken en staarten, maar waren slechts zo groot als een kleine hond toen ze uitkwamen."
        }
      },
      {
        question: {
          en: "What sound do scientists think sauropods might have made?",
          es: "¿Qué sonido piensan los científicos que podrían haber hecho los saurópodos?",
          de: "Welche Geräusche denken Wissenschaftler, dass Sauropoden gemacht haben könnten?",
          nl: "Welk geluid denken wetenschappers dat sauropoden zouden hebben gemaakt?"
        },
        options: [
          { en: "Deep rumbling sounds like elephants", es: "Sonidos retumbantes profundos como los elefantes", de: "Tiefe rumpelnde Geräusche wie Elefanten", nl: "Diepe rommelende geluiden zoals olifanten" },
          { en: "Loud roaring like lions", es: "Rugidos fuertes como leones", de: "Lautes Brüllen wie Löwen", nl: "Luid gebrül zoals leeuwen" },
          { en: "High-pitched singing like birds", es: "Canto agudo como los pájaros", de: "Hohe Gesänge wie Vögel", nl: "Hoge zang zoals vogels" },
          { en: "Silent - they made no sounds", es: "Silenciosos - no hacían sonidos", de: "Still - sie machten keine Geräusche", nl: "Stil - ze maakten geen geluiden" }
        ],
        correct: 0,
        explanation: {
          en: "Scientists think sauropods probably made deep, low-frequency sounds similar to elephants. Their long necks and large chests could produce powerful rumbling calls that could travel long distances to communicate with other sauropods.",
          es: "Los científicos piensan que los saurópodos probablemente hacían sonidos profundos de baja frecuencia similares a los elefantes. Sus cuellos largos y pechos grandes podían producir llamadas retumbantes poderosas que podían viajar largas distancias para comunicarse con otros saurópodos.",
          de: "Wissenschaftler denken, dass Sauropoden wahrscheinlich tiefe, niederfrequente Geräusche ähnlich wie Elefanten machten. Ihre langen Hälse und großen Brüste konnten kraftvolle rumpelnde Rufe erzeugen, die weite Strecken reisen konnten, um mit anderen Sauropoden zu kommunizieren.",
          nl: "Wetenschappers denken dat sauropoden waarschijnlijk diepe, lage frequentie geluiden maakten vergelijkbaar met olifanten. Hun lange nekken en grote borsten konden krachtige rommelende roepen produceren die lange afstanden konden afleggen om te communiceren met andere sauropoden."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
