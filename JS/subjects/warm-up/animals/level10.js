// Animals - Level 10: Wild Animals
(function() {
  const level10 = {
    name: {
      en: "Wild Animals",
      es: "Animales Salvajes",
      de: "Wilde Tiere",
      nl: "Wilde Dieren"
    },
    questions: [
      {
        question: {
          en: "Where do lions live in the wild?",
          es: "¿Dónde viven los leones en la naturaleza?",
          de: "Wo leben Löwen in der Wildnis?",
          nl: "Waar leven leeuwen in het wild?"
        },
        options: [
          { en: "African savannas", es: "Sabanas africanas", de: "Afrikanische Savannen", nl: "Afrikaanse savannes" },
          { en: "North Pole", es: "Polo Norte", de: "Nordpol", nl: "Noordpool" },
          { en: "Rainforests", es: "Selvas tropicales", de: "Regenwälder", nl: "Regenwouden" },
          { en: "Deserts only", es: "Solo desiertos", de: "Nur Wüsten", nl: "Alleen woestijnen" }
        ],
        correct: 0,
        explanation: {
          en: "Lions live in African savannas where they hunt zebras, antelopes and other animals. The grasslands provide perfect hunting grounds for these powerful predators!",
          es: "Los leones viven en las sabanas africanas donde cazan cebras, antílopes y otros animales. ¡Las praderas proporcionan terrenos de caza perfectos para estos poderosos depredadores!",
          de: "Löwen leben in afrikanischen Savannen, wo sie Zebras, Antilopen und andere Tiere jagen. Die Grasländer bieten perfekte Jagdgründe für diese mächtigen Raubtiere!",
          nl: "Leeuwen leven in Afrikaanse savannes waar ze zebra's, antilopen en andere dieren jagen. De graslandschappen bieden perfecte jachtgronden voor deze krachtige roofdieren!"
        }
      },
      {
        question: {
          en: "What do tigers have that helps them hide in tall grass?",
          es: "¿Qué tienen los tigres que les ayuda a esconderse en la hierba alta?",
          de: "Was haben Tiger, das ihnen hilft sich im hohen Gras zu verstecken?",
          nl: "Wat hebben tijgers dat ze helpt verstoppen in hoog gras?"
        },
        options: [
          { en: "Orange and black stripes", es: "Rayas naranjas y negras", de: "Orange und schwarze Streifen", nl: "Oranje en zwarte strepen" },
          { en: "Green fur", es: "Pelaje verde", de: "Grünes Fell", nl: "Groene vacht" },
          { en: "Blue spots", es: "Manchas azules", de: "Blaue Flecken", nl: "Blauwe vlekken" },
          { en: "White color", es: "Color blanco", de: "Weiße Farbe", nl: "Witte kleur" }
        ],
        correct: 0,
        explanation: {
          en: "Tigers have orange and black stripes that help them blend into tall grass and shadows. This camouflage makes them nearly invisible when hunting prey!",
          es: "Los tigres tienen rayas naranjas y negras que les ayudan a mezclarse con la hierba alta y las sombras. ¡Este camuflaje los hace casi invisibles cuando cazan presas!",
          de: "Tiger haben orange und schwarze Streifen, die ihnen helfen, sich in hohes Gras und Schatten einzufügen. Diese Tarnung macht sie beim Jagen fast unsichtbar!",
          nl: "Tijgers hebben oranje en zwarte strepen die hen helpen versmelten met hoog gras en schaduwen. Deze camouflage maakt hen bijna onzichtbaar bij het jagen op prooien!"
        }
      },
      {
        question: {
          en: "Which wild animal is the tallest in the world?",
          es: "¿Qué animal salvaje es el más alto del mundo?",
          de: "Welches wilde Tier ist das höchste der Welt?",
          nl: "Welk wild dier is het langste ter wereld?"
        },
        options: [
          { en: "Giraffe", es: "Jirafa", de: "Giraffe", nl: "Giraf" },
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" },
          { en: "Bear", es: "Oso", de: "Bär", nl: "Beer" },
          { en: "Moose", es: "Alce", de: "Elch", nl: "Eland" }
        ],
        correct: 0,
        explanation: {
          en: "Giraffes are the tallest animals in the world, growing up to 18 feet tall! Their long necks help them reach leaves high in acacia trees that other animals can't reach.",
          es: "¡Las jirafas son los animales más altos del mundo, creciendo hasta 18 pies de altura! Sus cuellos largos les ayudan a alcanzar hojas altas en árboles de acacia que otros animales no pueden alcanzar.",
          de: "Giraffen sind die größten Tiere der Welt und werden bis zu 18 Fuß groß! Ihre langen Hälse helfen ihnen, Blätter hoch in Akazienbäumen zu erreichen, die andere Tiere nicht erreichen können.",
          nl: "Giraffen zijn de langste dieren ter wereld en worden tot 18 voet lang! Hun lange nekken helpen hen bladeren hoog in acacia bomen te bereiken die andere dieren niet kunnen bereiken."
        }
      },
      {
        question: {
          en: "What do elephants use their trunks for?",
          es: "¿Para qué usan su trompa los elefantes?",
          de: "Wofür benutzen Elefanten ihren Rüssel?",
          nl: "Waarvoor gebruiken olifanten hun slurf?"
        },
        options: [
          { en: "Grabbing food and water", es: "Agarrar comida y agua", de: "Nahrung und Wasser greifen", nl: "Voedsel en water pakken" },
          { en: "Only for breathing", es: "Solo para respirar", de: "Nur zum Atmen", nl: "Alleen om te ademen" },
          { en: "Making music", es: "Hacer música", de: "Musik machen", nl: "Muziek maken" },
          { en: "Flying", es: "Volar", de: "Fliegen", nl: "Vliegen" }
        ],
        correct: 0,
        explanation: {
          en: "Elephant trunks are amazing tools! They have over 40,000 muscles and can grab food, spray water for baths, greet other elephants, and even pick up tiny objects like peanuts!",
          es: "¡Las trompas de elefante son herramientas increíbles! Tienen más de 40,000 músculos y pueden agarrar comida, rociar agua para bañarse, saludar a otros elefantes, ¡e incluso recoger objetos pequeños como maníes!",
          de: "Elefantenrüssel sind erstaunliche Werkzeuge! Sie haben über 40.000 Muskeln und können Nahrung greifen, Wasser zum Baden sprühen, andere Elefanten begrüßen und sogar winzige Gegenstände wie Erdnüsse aufheben!",
          nl: "Olifantslurven zijn geweldige gereedschappen! Ze hebben meer dan 40.000 spieren en kunnen voedsel pakken, water spuiten om te baden, andere olifanten begroeten, en zelfs kleine voorwerpen zoals pinda's oppakken!"
        }
      },
      {
        question: {
          en: "Where do polar bears live?",
          es: "¿Dónde viven los osos polares?",
          de: "Wo leben Eisbären?",
          nl: "Waar leven ijsberen?"
        },
        options: [
          { en: "Arctic regions with ice", es: "Regiones árticas con hielo", de: "Arktische Regionen mit Eis", nl: "Arctische gebieden met ijs" },
          { en: "Hot deserts", es: "Desiertos calurosos", de: "Heiße Wüsten", nl: "Hete woestijnen" },
          { en: "Tropical beaches", es: "Playas tropicales", de: "Tropische Strände", nl: "Tropische stranden" },
          { en: "Mountain tops only", es: "Solo cimas de montañas", de: "Nur Berggipfel", nl: "Alleen bergtoppen" }
        ],
        correct: 0,
        explanation: {
          en: "Polar bears live in the Arctic where there's lots of ice and snow. Their white fur helps them blend in, and their thick layer of fat keeps them warm in freezing temperatures!",
          es: "Los osos polares viven en el Ártico donde hay mucho hielo y nieve. Su pelaje blanco les ayuda a mezclarse, ¡y su gruesa capa de grasa los mantiene calientes en temperaturas heladas!",
          de: "Eisbären leben in der Arktis, wo es viel Eis und Schnee gibt. Ihr weißes Fell hilft ihnen sich zu tarnen, und ihre dicke Fettschicht hält sie bei eisigen Temperaturen warm!",
          nl: "IJsberen leven in het Arctische gebied waar veel ijs en sneeuw is. Hun witte vacht helpt hen zich te verbergen, en hun dikke vetlaag houdt hen warm bij vriestemperaturen!"
        }
      },
      {
        question: {
          en: "What makes zebras different from horses?",
          es: "¿Qué hace diferentes a las cebras de los caballos?",
          de: "Was macht Zebras anders als Pferde?",
          nl: "Wat maakt zebra's anders dan paarden?"
        },
        options: [
          { en: "They have black and white stripes", es: "Tienen rayas blancas y negras", de: "Sie haben schwarze und weiße Streifen", nl: "Ze hebben zwarte en witte strepen" },
          { en: "They are much bigger", es: "Son mucho más grandes", de: "Sie sind viel größer", nl: "Ze zijn veel groter" },
          { en: "They can fly", es: "Pueden volar", de: "Sie können fliegen", nl: "Ze kunnen vliegen" },
          { en: "They live underwater", es: "Viven bajo el agua", de: "Sie leben unter Wasser", nl: "Ze leven onder water" }
        ],
        correct: 0,
        explanation: {
          en: "Zebras have unique black and white stripes that are like fingerprints - no two zebras have the same pattern! These stripes may help confuse predators and keep flies away.",
          es: "Las cebras tienen rayas únicas en blanco y negro que son como huellas dactilares: ¡ninguna cebra tiene el mismo patrón! Estas rayas pueden ayudar a confundir a los depredadores y mantener alejadas a las moscas.",
          de: "Zebras haben einzigartige schwarz-weiße Streifen, die wie Fingerabdrücke sind - keine zwei Zebras haben das gleiche Muster! Diese Streifen können helfen, Raubtiere zu verwirren und Fliegen fernzuhalten.",
          nl: "Zebra's hebben unieke zwarte en witte strepen die zijn zoals vingerafdrukken - geen twee zebra's hebben hetzelfde patroon! Deze strepen kunnen helpen roofdieren te verwarren en vliegen weg te houden."
        }
      },
      {
        question: {
          en: "What do pandas mainly eat in the wild?",
          es: "¿Qué comen principalmente los pandas en la naturaleza?",
          de: "Was fressen Pandas hauptsächlich in der Wildnis?",
          nl: "Wat eten panda's voornamelijk in het wild?"
        },
        options: [
          { en: "Bamboo", es: "Bambú", de: "Bambus", nl: "Bamboe" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Other animals", es: "Otros animales", de: "Andere Tiere", nl: "Andere dieren" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" }
        ],
        correct: 0,
        explanation: {
          en: "Pandas eat mostly bamboo - up to 40 pounds per day! Even though they're bears, they rarely eat meat. Their special thumb helps them grip bamboo stalks perfectly.",
          es: "Los pandas comen principalmente bambú: ¡hasta 40 libras por día! Aunque son osos, rara vez comen carne. Su pulgar especial les ayuda a agarrar los tallos de bambú perfectamente.",
          de: "Pandas fressen hauptsächlich Bambus - bis zu 40 Pfund pro Tag! Obwohl sie Bären sind, fressen sie selten Fleisch. Ihr spezieller Daumen hilft ihnen, Bambusstängel perfekt zu greifen.",
          nl: "Panda's eten voornamelijk bamboe - tot 40 pond per dag! Hoewel het beren zijn, eten ze zelden vlees. Hun speciale duim helpt hen bamboestengels perfect vast te pakken."
        }
      },
      {
        question: {
          en: "Which wild animal is known as the king of the jungle?",
          es: "¿Qué animal salvaje es conocido como el rey de la selva?",
          de: "Welches wilde Tier ist als König des Dschungels bekannt?",
          nl: "Welk wild dier staat bekend als de koning van de jungle?"
        },
        options: [
          { en: "Lion", es: "León", de: "Löwe", nl: "Leeuw" },
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" },
          { en: "Monkey", es: "Mono", de: "Affe", nl: "Aap" },
          { en: "Snake", es: "Serpiente", de: "Schlange", nl: "Slang" }
        ],
        correct: 0,
        explanation: {
          en: "Lions are called the 'king of the jungle' because of their majestic appearance and powerful roar. Ironically, lions actually live in grasslands, not jungles!",
          es: "Los leones son llamados el 'rey de la selva' por su apariencia majestuosa y rugido poderoso. ¡Irónicamente, los leones realmente viven en praderas, no en selvas!",
          de: "Löwen werden der 'König des Dschungels' genannt wegen ihres majestätischen Aussehens und mächtigen Gebrülls. Ironischerweise leben Löwen tatsächlich in Grasländern, nicht im Dschungel!",
          nl: "Leeuwen worden de 'koning van de jungle' genoemd vanwege hun majestueuze uiterlijk en krachtige gebrül. Ironisch genoeg leven leeuwen eigenlijk in graslandschappen, niet in jungles!"
        }
      },
      {
        question: {
          en: "What do wolves do to communicate with their pack?",
          es: "¿Qué hacen los lobos para comunicarse con su manada?",
          de: "Was machen Wölfe um mit ihrem Rudel zu kommunizieren?",
          nl: "Wat doen wolven om te communiceren met hun roedel?"
        },
        options: [
          { en: "Howl", es: "Aullar", de: "Heulen", nl: "Huilen" },
          { en: "Dance", es: "Bailar", de: "Tanzen", nl: "Dansen" },
          { en: "Fly in circles", es: "Volar en círculos", de: "Im Kreis fliegen", nl: "In cirkels vliegen" },
          { en: "Change colors", es: "Cambiar colores", de: "Farben wechseln", nl: "Van kleur veranderen" }
        ],
        correct: 0,
        explanation: {
          en: "Wolves howl to communicate with their pack over long distances. Each wolf has a unique howl, like a voice, so they can recognize each other even from miles away!",
          es: "Los lobos aúllan para comunicarse con su manada a largas distancias. Cada lobo tiene un aullido único, como una voz, ¡así pueden reconocerse incluso desde millas de distancia!",
          de: "Wölfe heulen, um über große Entfernungen mit ihrem Rudel zu kommunizieren. Jeder Wolf hat ein einzigartiges Heulen, wie eine Stimme, sodass sie sich sogar aus kilometerweiter Entfernung erkennen können!",
          nl: "Wolven huilen om over lange afstanden te communiceren met hun roedel. Elke wolf heeft een uniek gehuil, zoals een stem, zodat ze elkaar kunnen herkennen zelfs van kilometers afstand!"
        }
      },
      {
        question: {
          en: "Where do kangaroos carry their babies?",
          es: "¿Dónde cargan sus bebés los canguros?",
          de: "Wo tragen Kängurus ihre Babys?",
          nl: "Waar dragen kangoeroes hun baby's?"
        },
        options: [
          { en: "In a pouch on their belly", es: "En una bolsa en su barriga", de: "In einem Beutel am Bauch", nl: "In een buidel op hun buik" },
          { en: "On their back", es: "En su espalda", de: "Auf ihrem Rücken", nl: "Op hun rug" },
          { en: "In their mouth", es: "En su boca", de: "In ihrem Maul", nl: "In hun bek" },
          { en: "Under their arms", es: "Bajo sus brazos", de: "Unter ihren Armen", nl: "Onder hun armen" }
        ],
        correct: 0,
        explanation: {
          en: "Baby kangaroos (called joeys) are tiny when born and live in their mother's pouch for months. The pouch is like a warm, safe pocket where they drink milk and grow bigger!",
          es: "Los bebés canguro (llamados joeys) son diminutos cuando nacen y viven en la bolsa de su madre por meses. ¡La bolsa es como un bolsillo cálido y seguro donde toman leche y crecen!",
          de: "Babykängurus (Joeys genannt) sind winzig bei der Geburt und leben monatelang im Beutel ihrer Mutter. Der Beutel ist wie eine warme, sichere Tasche, wo sie Milch trinken und größer werden!",
          nl: "Baby kangoeroes (joeys genoemd) zijn heel klein wanneer ze geboren worden en leven maandenlang in de buidel van hun moeder. De buidel is als een warme, veilige zak waar ze melk drinken en groter worden!"
        }
      },
      {
        question: {
          en: "What do rhinos have on their nose?",
          es: "¿Qué tienen los rinocerontes en su nariz?",
          de: "Was haben Nashörner auf ihrer Nase?",
          nl: "Wat hebben neushoorns op hun neus?"
        },
        options: [
          { en: "A horn", es: "Un cuerno", de: "Ein Horn", nl: "Een hoorn" },
          { en: "A flower", es: "Una flor", de: "Eine Blume", nl: "Een bloem" },
          { en: "A light", es: "Una luz", de: "Ein Licht", nl: "Een licht" },
          { en: "A bell", es: "Una campana", de: "Eine Glocke", nl: "Een bel" }
        ],
        correct: 0,
        explanation: {
          en: "Rhinos have one or two horns made of keratin (the same material as our fingernails) on their nose. They use these horns for defense and digging for food!",
          es: "Los rinocerontes tienen uno o dos cuernos hechos de queratina (el mismo material que nuestras uñas) en su nariz. ¡Usan estos cuernos para defenderse y cavar en busca de comida!",
          de: "Nashörner haben ein oder zwei Hörner aus Keratin (dasselbe Material wie unsere Fingernägel) auf ihrer Nase. Sie verwenden diese Hörner zur Verteidigung und zum Graben nach Nahrung!",
          nl: "Neushoorns hebben een of twee hoorns gemaakt van keratine (hetzelfde materiaal als onze vingernagels) op hun neus. Ze gebruiken deze hoorns voor verdediging en het graven naar voedsel!"
        }
      },
      {
        question: {
          en: "Which wild animal changes colors to hide?",
          es: "¿Qué animal salvaje cambia colores para esconderse?",
          de: "Welches wilde Tier wechselt Farben zum Verstecken?",
          nl: "Welk wild dier verandert van kleur om zich te verstoppen?"
        },
        options: [
          { en: "Chameleon", es: "Camaleón", de: "Chamäleon", nl: "Kameleon" },
          { en: "Lion", es: "León", de: "Löwe", nl: "Leeuw" },
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" },
          { en: "Bear", es: "Oso", de: "Bär", nl: "Beer" }
        ],
        correct: 0,
        explanation: {
          en: "Chameleons are amazing! They can change their skin color to match their surroundings, communicate with other chameleons, and show their emotions. Their eyes can even move independently!",
          es: "¡Los camaleones son increíbles! Pueden cambiar el color de su piel para coincidir con su entorno, comunicarse con otros camaleones y mostrar sus emociones. ¡Sus ojos incluso pueden moverse independientemente!",
          de: "Chamäleons sind erstaunlich! Sie können ihre Hautfarbe ändern, um sich ihrer Umgebung anzupassen, mit anderen Chamäleons zu kommunizieren und ihre Emotionen zu zeigen. Ihre Augen können sich sogar unabhängig bewegen!",
          nl: "Kameleons zijn geweldig! Ze kunnen hun huidkleur veranderen om te passen bij hun omgeving, communiceren met andere kameleons en hun emoties tonen. Hun ogen kunnen zelfs onafhankelijk bewegen!"
        }
      },
      {
        question: {
          en: "What do chimpanzees use to get food?",
          es: "¿Qué usan los chimpancés para obtener comida?",
          de: "Was verwenden Schimpansen um Nahrung zu bekommen?",
          nl: "Wat gebruiken chimpansees om voedsel te krijgen?"
        },
        options: [
          { en: "Sticks and tools", es: "Palos y herramientas", de: "Stöcke und Werkzeuge", nl: "Stokken en gereedschap" },
          { en: "Magic powers", es: "Poderes mágicos", de: "Magische Kräfte", nl: "Magische krachten" },
          { en: "Money", es: "Dinero", de: "Geld", nl: "Geld" },
          { en: "Singing", es: "Cantando", de: "Singen", nl: "Zingen" }
        ],
        correct: 0,
        explanation: {
          en: "Chimpanzees are very smart! They use sticks to fish termites out of holes, use stones to crack nuts, and even make their own tools. They're one of the few animals that use tools!",
          es: "¡Los chimpancés son muy inteligentes! Usan palos para pescar termitas de los agujeros, usan piedras para romper nueces, e incluso hacen sus propias herramientas. ¡Son uno de los pocos animales que usan herramientas!",
          de: "Schimpansen sind sehr schlau! Sie verwenden Stöcke, um Termiten aus Löchern zu fischen, verwenden Steine, um Nüsse zu knacken, und stellen sogar ihre eigenen Werkzeuge her. Sie gehören zu den wenigen Tieren, die Werkzeuge verwenden!",
          nl: "Chimpansees zijn erg slim! Ze gebruiken stokken om termieten uit gaten te vissen, gebruiken stenen om noten te kraken, en maken zelfs hun eigen gereedschap. Ze zijn een van de weinige dieren die gereedschap gebruiken!"
        }
      },
      {
        question: {
          en: "Where do orangutans spend most of their time?",
          es: "¿Dónde pasan la mayor parte del tiempo los orangutanes?",
          de: "Wo verbringen Orang-Utans die meiste Zeit?",
          nl: "Waar brengen orang-oetans de meeste tijd door?"
        },
        options: [
          { en: "In trees", es: "En árboles", de: "In Bäumen", nl: "In bomen" },
          { en: "Underground", es: "Bajo tierra", de: "Unterirdisch", nl: "Ondergronds" },
          { en: "In water", es: "En agua", de: "Im Wasser", nl: "In water" },
          { en: "In caves only", es: "Solo en cuevas", de: "Nur in Höhlen", nl: "Alleen in grotten" }
        ],
        correct: 0,
        explanation: {
          en: "Orangutans are excellent tree climbers and spend almost their whole lives in the rainforest canopy. They build comfortable sleeping nests in trees every night!",
          es: "Los orangutanes son excelentes trepadores de árboles y pasan casi toda su vida en el dosel de la selva tropical. ¡Construyen nidos cómodos para dormir en los árboles cada noche!",
          de: "Orang-Utans sind ausgezeichnete Baumkletterer und verbringen fast ihr ganzes Leben im Regenwaldkronendach. Sie bauen jede Nacht bequeme Schlafnester in Bäumen!",
          nl: "Orang-oetans zijn uitstekende boomklimmers en brengen bijna hun hele leven door in het regenwoudkronendak. Ze bouwen elke nacht comfortabele slaapnesten in bomen!"
        }
      },
      {
        question: {
          en: "What makes jaguars good hunters?",
          es: "¿Qué hace que los jaguares sean buenos cazadores?",
          de: "Was macht Jaguare zu guten Jägern?",
          nl: "Wat maakt jaguars goede jagers?"
        },
        options: [
          { en: "Strong jaws and swimming ability", es: "Mandíbulas fuertes y habilidad para nadar", de: "Starke Kiefer und Schwimmfähigkeit", nl: "Sterke kaken en zwemvaardigheid" },
          { en: "They can fly", es: "Pueden volar", de: "Sie können fliegen", nl: "Ze kunnen vliegen" },
          { en: "They are invisible", es: "Son invisibles", de: "Sie sind unsichtbar", nl: "Ze zijn onzichtbaar" },
          { en: "They use tools", es: "Usan herramientas", de: "Sie verwenden Werkzeuge", nl: "Ze gebruiken gereedschap" }
        ],
        correct: 0,
        explanation: {
          en: "Jaguars are powerful cats with the strongest bite of any big cat! They're excellent swimmers and can hunt both on land and in water. Their spotted coat helps them hide in jungle shadows.",
          es: "¡Los jaguares son felinos poderosos con la mordida más fuerte de todos los felinos grandes! Son excelentes nadadores y pueden cazar tanto en tierra como en agua. Su pelaje manchado les ayuda a esconderse en las sombras de la selva.",
          de: "Jaguare sind mächtige Katzen mit dem stärksten Biss aller Großkatzen! Sie sind ausgezeichnete Schwimmer und können sowohl an Land als auch im Wasser jagen. Ihr geflecktes Fell hilft ihnen, sich in Dschungelschatten zu verstecken.",
          nl: "Jaguars zijn krachtige katten met de sterkste beet van alle grote katten! Ze zijn uitstekende zwemmers en kunnen zowel op land als in water jagen. Hun gevlekte vacht helpt hen zich te verbergen in jungle schaduwen."
        }
      },
      {
        question: {
          en: "What do wild deer eat in forests?",
          es: "¿Qué comen los ciervos salvajes en los bosques?",
          de: "Was fressen wilde Hirsche in Wäldern?",
          nl: "Wat eten wilde herten in bossen?"
        },
        options: [
          { en: "Leaves, grass, and plants", es: "Hojas, hierba y plantas", de: "Blätter, Gras und Pflanzen", nl: "Bladeren, gras en planten" },
          { en: "Other animals", es: "Otros animales", de: "Andere Tiere", nl: "Andere dieren" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" }
        ],
        correct: 0,
        explanation: {
          en: "Deer are herbivores, which means they only eat plants! They love tender leaves, grass, fruits, and nuts. Their four-chambered stomach helps them digest tough plant material.",
          es: "Los ciervos son herbívoros, ¡lo que significa que solo comen plantas! Les encantan las hojas tiernas, la hierba, las frutas y las nueces. Su estómago de cuatro cámaras les ayuda a digerir material vegetal resistente.",
          de: "Hirsche sind Pflanzenfresser, was bedeutet, dass sie nur Pflanzen fressen! Sie lieben zarte Blätter, Gras, Früchte und Nüsse. Ihr vierkammeriger Magen hilft ihnen, zähes Pflanzenmaterial zu verdauen.",
          nl: "Herten zijn herbivoren, wat betekent dat ze alleen planten eten! Ze houden van zachte bladeren, gras, fruit en noten. Hun vierkamermag helpt hen taai plantmateriaal te verteren."
        }
      },
      {
        question: {
          en: "Which wild animal has a long trunk and big ears?",
          es: "¿Qué animal salvaje tiene trompa larga y orejas grandes?",
          de: "Welches wilde Tier hat einen langen Rüssel und große Ohren?",
          nl: "Welk wild dier heeft een lange slurf en grote oren?"
        },
        options: [
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" },
          { en: "Mouse", es: "Ratón", de: "Maus", nl: "Muis" },
          { en: "Bird", es: "Pájaro", de: "Vogel", nl: "Vogel" },
          { en: "Fish", es: "Pez", de: "Fisch", nl: "Vis" }
        ],
        correct: 0,
        explanation: {
          en: "Elephants are the largest land animals! Their big ears help them cool down in hot weather by flapping like fans, and their trunk can lift incredibly heavy things.",
          es: "¡Los elefantes son los animales terrestres más grandes! Sus grandes orejas les ayudan a refrescarse en clima caluroso al agitarse como abanicos, y su trompa puede levantar cosas increíblemente pesadas.",
          de: "Elefanten sind die größten Landtiere! Ihre großen Ohren helfen ihnen, sich bei heißem Wetter abzukühlen, indem sie wie Fächer schlagen, und ihr Rüssel kann unglaublich schwere Dinge heben.",
          nl: "Olifanten zijn de grootste landdieren! Hun grote oren helpen hen afkoelen bij warm weer door te klapperen als waaiers, en hun slurf kan ongelooflijk zware dingen tillen."
        }
      },
      {
        question: {
          en: "What do foxes hunt at night?",
          es: "¿Qué cazan los zorros por la noche?",
          de: "Was jagen Füchse nachts?",
          nl: "Wat jagen vossen 's nachts?"
        },
        options: [
          { en: "Small animals like rabbits", es: "Animales pequeños como conejos", de: "Kleine Tiere wie Kaninchen", nl: "Kleine dieren zoals konijnen" },
          { en: "Elephants", es: "Elefantes", de: "Elefanten", nl: "Olifanten" },
          { en: "Trees", es: "Árboles", de: "Bäume", nl: "Bomen" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" }
        ],
        correct: 0,
        explanation: {
          en: "Foxes are clever nighttime hunters! They have excellent hearing and can locate small animals like rabbits, mice, and birds even in the dark. Their bushy tail helps them balance when jumping.",
          es: "¡Los zorros son cazadores nocturnos inteligentes! Tienen excelente oído y pueden localizar animales pequeños como conejos, ratones y pájaros incluso en la oscuridad. Su cola peluda les ayuda a equilibrarse al saltar.",
          de: "Füchse sind kluge nächtliche Jäger! Sie haben ausgezeichnetes Gehör und können kleine Tiere wie Kaninchen, Mäuse und Vögel sogar im Dunkeln aufspüren. Ihr buschiger Schwanz hilft ihnen beim Springen das Gleichgewicht zu halten.",
          nl: "Vossen zijn slimme nachtelijke jagers! Ze hebben uitstekend gehoor en kunnen kleine dieren zoals konijnen, muizen en vogels zelfs in het donker lokaliseren. Hun pluizige staart helpt hen balanceren bij het springen."
        }
      },
      {
        question: {
          en: "Where do mountain goats live?",
          es: "¿Dónde viven las cabras montesas?",
          de: "Wo leben Bergziegen?",
          nl: "Waar leven berggeiten?"
        },
        options: [
          { en: "High up on mountains", es: "En lo alto de las montañas", de: "Hoch oben auf Bergen", nl: "Hoog in de bergen" },
          { en: "In the ocean", es: "En el océano", de: "Im Ozean", nl: "In de oceaan" },
          { en: "In deserts", es: "En desiertos", de: "In Wüsten", nl: "In woestijnen" },
          { en: "Underground", es: "Bajo tierra", de: "Unterirdisch", nl: "Ondergronds" }
        ],
        correct: 0,
        explanation: {
          en: "Mountain goats are amazing climbers! They live high up on steep rocky cliffs where it's hard for predators to reach them. Their special hooves help them grip rocky surfaces perfectly.",
          es: "¡Las cabras montesas son escaladoras increíbles! Viven en lo alto de acantilados rocosos empinados donde es difícil para los depredadores alcanzarlas. Sus pezuñas especiales les ayudan a agarrarse a las superficies rocosas perfectamente.",
          de: "Bergziegen sind erstaunliche Kletterer! Sie leben hoch oben auf steilen Felsklippen, wo es für Raubtiere schwer ist, sie zu erreichen. Ihre speziellen Hufe helfen ihnen, sich perfekt an felsigen Oberflächen festzuhalten.",
          nl: "Berggeiten zijn geweldige klimmers! Ze leven hoog op steile rotswanden waar het moeilijk is voor roofdieren om hen te bereiken. Hun speciale hoeven helpen hen perfect grip te krijgen op rotsoppervlakken."
        }
      },
      {
        question: {
          en: "What do hippos do most of the day?",
          es: "¿Qué hacen los hipopótamos la mayor parte del día?",
          de: "Was machen Nilpferde den größten Teil des Tages?",
          nl: "Wat doen nijlpaarden het grootste deel van de dag?"
        },
        options: [
          { en: "Stay in water", es: "Permanecen en el agua", de: "Bleiben im Wasser", nl: "Blijven in het water" },
          { en: "Climb trees", es: "Trepan árboles", de: "Klettern auf Bäume", nl: "Klimmen in bomen" },
          { en: "Fly around", es: "Vuelan por ahí", de: "Fliegen herum", nl: "Vliegen rond" },
          { en: "Sleep standing up", es: "Duermen de pie", de: "Schlafen im Stehen", nl: "Slapen staand" }
        ],
        correct: 0,
        explanation: {
          en: "Hippos spend most of their day in water to keep cool! Their skin is very sensitive to sun, so water protects them. They can hold their breath underwater for up to 5 minutes!",
          es: "¡Los hipopótamos pasan la mayor parte del día en el agua para mantenerse frescos! Su piel es muy sensible al sol, por lo que el agua los protege. ¡Pueden contener la respiración bajo el agua hasta por 5 minutos!",
          de: "Nilpferde verbringen den größten Teil ihres Tages im Wasser, um sich kühl zu halten! Ihre Haut ist sehr sonnenempfindlich, daher schützt sie das Wasser. Sie können bis zu 5 Minuten lang unter Wasser die Luft anhalten!",
          nl: "Nijlpaarden brengen het grootste deel van hun dag door in water om koel te blijven! Hun huid is zeer gevoelig voor de zon, dus water beschermt hen. Ze kunnen tot 5 minuten hun adem inhouden onder water!"
        }
      },
      {
        question: {
          en: "What makes leopards good at hunting?",
          es: "¿Qué hace que los leopardos sean buenos cazando?",
          de: "Was macht Leoparden gut im Jagen?",
          nl: "Wat maakt luipaarden goed in jagen?"
        },
        options: [
          { en: "They can climb trees and are spotted for camouflage", es: "Pueden trepar árboles y tienen manchas para camuflarse", de: "Sie können auf Bäume klettern und haben Flecken zur Tarnung", nl: "Ze kunnen in bomen klimmen en hebben vlekken voor camouflage" },
          { en: "They are very slow", es: "Son muy lentos", de: "Sie sind sehr langsam", nl: "Ze zijn erg langzaam" },
          { en: "They make loud noises", es: "Hacen ruidos fuertes", de: "Sie machen laute Geräusche", nl: "Ze maken luide geluiden" },
          { en: "They glow in the dark", es: "Brillan en la oscuridad", de: "Sie leuchten im Dunkeln", nl: "Ze gloeien in het donker" }
        ],
        correct: 0,
        explanation: {
          en: "Leopards are excellent climbers and their spotted coat provides perfect camouflage! They can carry prey twice their weight up into trees to keep it safe from other predators.",
          es: "¡Los leopardos son excelentes escaladores y su pelaje manchado proporciona camuflaje perfecto! Pueden cargar presas que pesan el doble de su peso en los árboles para mantenerlas a salvo de otros depredadores.",
          de: "Leoparden sind ausgezeichnete Kletterer und ihr geflecktes Fell bietet perfekte Tarnung! Sie können Beute, die doppelt so viel wiegt wie sie selbst, auf Bäume tragen, um sie vor anderen Raubtieren zu schützen.",
          nl: "Luipaarden zijn uitstekende klimmers en hun gevlekte vacht biedt perfecte camouflage! Ze kunnen prooi die twee keer hun gewicht weegt in bomen dragen om het veilig te houden van andere roofdieren."
        }
      },
      {
        question: {
          en: "What do wild rabbits do when they sense danger?",
          es: "¿Qué hacen los conejos salvajes cuando sienten peligro?",
          de: "Was machen wilde Kaninchen wenn sie Gefahr wittern?",
          nl: "Wat doen wilde konijnen als ze gevaar voelen?"
        },
        options: [
          { en: "Thump their feet to warn others", es: "Golpean sus pies para advertir a otros", de: "Stampfen mit den Füßen um andere zu warnen", nl: "Stampen met hun poten om anderen te waarschuwen" },
          { en: "Climb trees", es: "Trepan árboles", de: "Klettern auf Bäume", nl: "Klimmen in bomen" },
          { en: "Roar loudly", es: "Rugen fuertemente", de: "Brüllen laut", nl: "Brullen hard" },
          { en: "Change colors", es: "Cambian colores", de: "Wechseln Farben", nl: "Veranderen van kleur" }
        ],
        correct: 0,
        explanation: {
          en: "Wild rabbits thump their powerful hind feet on the ground to warn other rabbits of danger! This creates a drumming sound that travels through the ground to alert their family.",
          es: "¡Los conejos salvajes golpean sus poderosas patas traseras en el suelo para advertir a otros conejos del peligro! Esto crea un sonido de tambor que viaja a través del suelo para alertar a su familia.",
          de: "Wilde Kaninchen stampfen mit ihren kräftigen Hinterpfoten auf den Boden, um andere Kaninchen vor Gefahr zu warnen! Dies erzeugt ein Trommelgeräusch, das durch den Boden wandert, um ihre Familie zu alarmieren.",
          nl: "Wilde konijnen stampen met hun krachtige achterpoten op de grond om andere konijnen te waarschuwen voor gevaar! Dit creëert een trommelgeluid dat door de grond reist om hun familie te waarschuwen."
        }
      },
      {
        question: {
          en: "Which wild animal has a mane around its head?",
          es: "¿Qué animal salvaje tiene melena alrededor de su cabeza?",
          de: "Welches wilde Tier hat eine Mähne um den Kopf?",
          nl: "Welk wild dier heeft een manen rond zijn hoofd?"
        },
        options: [
          { en: "Male lion", es: "León macho", de: "Männlicher Löwe", nl: "Mannelijke leeuw" },
          { en: "Tiger", es: "Tigre", de: "Tiger", nl: "Tijger" },
          { en: "Bear", es: "Oso", de: "Bär", nl: "Beer" },
          { en: "Wolf", es: "Lobo", de: "Wolf", nl: "Wolf" }
        ],
        correct: 0,
        explanation: {
          en: "Only male lions have a big, fluffy mane around their head! The mane makes them look bigger and more intimidating to enemies, and it protects their neck during fights.",
          es: "¡Solo los leones machos tienen una melena grande y esponjosa alrededor de su cabeza! La melena los hace ver más grandes e intimidantes para los enemigos, y protege su cuello durante las peleas.",
          de: "Nur männliche Löwen haben eine große, flauschige Mähne um ihren Kopf! Die Mähne lässt sie größer und einschüchternder für Feinde aussehen und schützt ihren Hals bei Kämpfen.",
          nl: "Alleen mannelijke leeuwen hebben een grote, pluizige manen rond hun hoofd! De manen maken hen groter en indrukwekkender voor vijanden, en het beschermt hun nek tijdens gevechten."
        }
      },
      {
        question: {
          en: "What do wild squirrels collect for winter?",
          es: "¿Qué recolectan las ardillas salvajes para el invierno?",
          de: "Was sammeln wilde Eichhörnchen für den Winter?",
          nl: "Wat verzamelen wilde eekhoorns voor de winter?"
        },
        options: [
          { en: "Nuts and seeds", es: "Nueces y semillas", de: "Nüsse und Samen", nl: "Noten en zaden" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Leaves only", es: "Solo hojas", de: "Nur Blätter", nl: "Alleen bladeren" }
        ],
        correct: 0,
        explanation: {
          en: "Squirrels are nature's little planners! They collect and bury nuts and seeds all around their territory in fall, creating a winter food storage system. They have amazing memories to find their hidden treasures!",
          es: "¡Las ardillas son pequeñas planificadoras de la naturaleza! Recolectan y entierran nueces y semillas por todo su territorio en otoño, creando un sistema de almacenamiento de comida para el invierno. ¡Tienen memorias increíbles para encontrar sus tesoros escondidos!",
          de: "Eichhörnchen sind kleine Planer der Natur! Sie sammeln und vergraben Nüsse und Samen überall in ihrem Territorium im Herbst und schaffen ein Winternahrungsspeichersystem. Sie haben erstaunliche Erinnerungen, um ihre versteckten Schätze zu finden!",
          nl: "Eekhoorns zijn kleine planners van de natuur! Ze verzamelen en begraven noten en zaden overal in hun territorium in de herfst, waardoor ze een wintervoedselopslagsysteem creëren. Ze hebben geweldige geheugens om hun verborgen schatten te vinden!"
        }
      },
      {
        question: {
          en: "Where do wild bears sleep in winter?",
          es: "¿Dónde duermen los osos salvajes en invierno?",
          de: "Wo schlafen wilde Bären im Winter?",
          nl: "Waar slapen wilde beren in de winter?"
        },
        options: [
          { en: "In caves or dens", es: "En cuevas o guaridas", de: "In Höhlen oder Höhlen", nl: "In grotten of holen" },
          { en: "In trees", es: "En árboles", de: "In Bäumen", nl: "In bomen" },
          { en: "In water", es: "En agua", de: "Im Wasser", nl: "In water" },
          { en: "On mountain tops", es: "En cimas de montañas", de: "Auf Berggipfeln", nl: "Op bergtoppen" }
        ],
        correct: 0,
        explanation: {
          en: "Bears hibernate in cozy dens like caves, hollow trees, or burrows they dig! They sleep for months during winter when food is scarce, living off the fat they stored during summer.",
          es: "¡Los osos hibernan en guaridas acogedoras como cuevas, árboles huecos o madrigueras que cavan! Duermen por meses durante el invierno cuando la comida es escasa, viviendo de la grasa que almacenaron durante el verano.",
          de: "Bären hibernieren in gemütlichen Höhlen wie Höhlen, hohlen Bäumen oder Bauten, die sie graben! Sie schlafen monatelang im Winter, wenn Nahrung knapp ist, und leben von dem Fett, das sie im Sommer gespeichert haben.",
          nl: "Beren houden winterslaap in gezellige holen zoals grotten, holle bomen of holen die ze graven! Ze slapen maandenlang tijdens de winter wanneer voedsel schaars is, levend van het vet dat ze tijdens de zomer hebben opgeslagen."
        }
      },
      {
        question: {
          en: "What do wild monkeys like to eat?",
          es: "¿Qué les gusta comer a los monos salvajes?",
          de: "Was fressen wilde Affen gerne?",
          nl: "Wat eten wilde apen graag?"
        },
        options: [
          { en: "Fruits and leaves", es: "Frutas y hojas", de: "Früchte und Blätter", nl: "Fruit en bladeren" },
          { en: "Only meat", es: "Solo carne", de: "Nur Fleisch", nl: "Alleen vlees" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" },
          { en: "Ice", es: "Hielo", de: "Eis", nl: "IJs" }
        ],
        correct: 0,
        explanation: {
          en: "Wild monkeys love eating fruits and leaves! They spend lots of time in trees searching for ripe bananas, berries, and tender leaves. Some monkeys also eat insects and small animals.",
          es: "¡A los monos salvajes les encanta comer frutas y hojas! Pasan mucho tiempo en los árboles buscando plátanos maduros, bayas y hojas tiernas. Algunos monos también comen insectos y animales pequeños.",
          de: "Wilde Affen lieben es, Früchte und Blätter zu fressen! Sie verbringen viel Zeit in Bäumen auf der Suche nach reifen Bananen, Beeren und zarten Blättern. Einige Affen fressen auch Insekten und kleine Tiere.",
          nl: "Wilde apen houden van het eten van fruit en bladeren! Ze brengen veel tijd door in bomen op zoek naar rijpe bananen, bessen en zachte bladeren. Sommige apen eten ook insecten en kleine dieren."
        }
      },
      {
        question: {
          en: "Which wild bird cannot fly?",
          es: "¿Qué pájaro salvaje no puede volar?",
          de: "Welcher wilde Vogel kann nicht fliegen?",
          nl: "Welke wilde vogel kan niet vliegen?"
        },
        options: [
          { en: "Penguin", es: "Pingüino", de: "Pinguin", nl: "Pinguïn" },
          { en: "Eagle", es: "Águila", de: "Adler", nl: "Arend" },
          { en: "Sparrow", es: "Gorrión", de: "Spatz", nl: "Mus" },
          { en: "Robin", es: "Petirrojo", de: "Rotkehlchen", nl: "Roodborst" }
        ],
        correct: 0,
        explanation: {
          en: "Penguins are amazing swimmers but cannot fly! Their wings evolved into flippers perfect for swimming underwater. They can swim up to 22 mph and dive very deep to catch fish!",
          es: "¡Los pingüinos son nadadores increíbles pero no pueden volar! Sus alas evolucionaron en aletas perfectas para nadar bajo el agua. ¡Pueden nadar hasta 22 mph y bucear muy profundo para pescar!",
          de: "Pinguine sind erstaunliche Schwimmer, können aber nicht fliegen! Ihre Flügel entwickelten sich zu Flossen, die perfekt zum Schwimmen unter Wasser sind. Sie können bis zu 22 mph schwimmen und sehr tief tauchen, um Fische zu fangen!",
          nl: "Pinguïns zijn geweldige zwemmers maar kunnen niet vliegen! Hun vleugels evolueerden tot vinnen die perfect zijn voor zwemmen onder water. Ze kunnen tot 22 mph zwemmen en heel diep duiken om vis te vangen!"
        }
      },
      {
        question: {
          en: "What do crocodiles do when they are not hunting?",
          es: "¿Qué hacen los cocodrilos cuando no están cazando?",
          de: "Was machen Krokodile wenn sie nicht jagen?",
          nl: "Wat doen krokodillen als ze niet aan het jagen zijn?"
        },
        options: [
          { en: "Sunbathe on riverbanks", es: "Toman sol en las orillas del río", de: "Sonnen sich an Flussufern", nl: "Zonnen op rivierovers" },
          { en: "Climb trees", es: "Trepan árboles", de: "Klettern auf Bäume", nl: "Klimmen in bomen" },
          { en: "Fly around", es: "Vuelan por ahí", de: "Fliegen herum", nl: "Vliegen rond" },
          { en: "Build houses", es: "Construyen casas", de: "Bauen Häuser", nl: "Bouwen huizen" }
        ],
        correct: 0,
        explanation: {
          en: "Crocodiles love to sunbathe! They lie on riverbanks soaking up warm sunshine to heat their cold-blooded bodies. Sunbathing helps them digest food and stay healthy.",
          es: "¡A los cocodrilos les encanta tomar el sol! Se acuestan en las orillas de los ríos absorbiendo el sol cálido para calentar sus cuerpos de sangre fría. Tomar el sol les ayuda a digerir la comida y mantenerse saludables.",
          de: "Krokodile lieben es zu sonnen! Sie liegen an Flussufern und nehmen warmen Sonnenschein auf, um ihre kaltblütigen Körper zu erwärmen. Sonnenbaden hilft ihnen, Nahrung zu verdauen und gesund zu bleiben.",
          nl: "Krokodillen houden van zonnen! Ze liggen op rivierovers om warme zonneschijn op te nemen om hun koudbloedige lichamen te verwarmen. Zonnen helpt hen voedsel te verteren en gezond te blijven."
        }
      },
      {
        question: {
          en: "What do wild boars use to find food?",
          es: "¿Qué usan los jabalíes salvajes para encontrar comida?",
          de: "Was verwenden Wildschweine um Nahrung zu finden?",
          nl: "Wat gebruiken wilde zwijnen om voedsel te vinden?"
        },
        options: [
          { en: "Their snout to dig", es: "Su hocico para cavar", de: "Ihre Schnauze zum Graben", nl: "Hun snuit om te graven" },
          { en: "Their ears", es: "Sus orejas", de: "Ihre Ohren", nl: "Hun oren" },
          { en: "Their tail", es: "Su cola", de: "Ihren Schwanz", nl: "Hun staart" },
          { en: "Their eyes only", es: "Solo sus ojos", de: "Nur ihre Augen", nl: "Alleen hun ogen" }
        ],
        correct: 0,
        explanation: {
          en: "Wild boars have amazing snouts! They use their strong, sensitive noses to dig in the ground and sniff out tasty roots, insects, and mushrooms buried underground.",
          es: "¡Los jabalíes salvajes tienen hocicos increíbles! Usan sus narices fuertes y sensibles para cavar en el suelo y olfatear raíces sabrosas, insectos y hongos enterrados bajo tierra.",
          de: "Wildschweine haben erstaunliche Schnauzen! Sie verwenden ihre starken, empfindlichen Nasen, um im Boden zu graben und leckere Wurzeln, Insekten und Pilze aufzuspüren, die unterirdisch vergraben sind.",
          nl: "Wilde zwijnen hebben geweldige snuiten! Ze gebruiken hun sterke, gevoelige neuzen om in de grond te graven en smakelijke wortels, insecten en paddenstoelen op te sporen die ondergronds begraven zijn."
        }
      },
      {
        question: {
          en: "Where do wild ducks make their nests?",
          es: "¿Dónde hacen sus nidos los patos salvajes?",
          de: "Wo bauen wilde Enten ihre Nester?",
          nl: "Waar maken wilde eenden hun nesten?"
        },
        options: [
          { en: "Near water in tall grass", es: "Cerca del agua en hierba alta", de: "In der Nähe von Wasser im hohen Gras", nl: "Bij water in hoog gras" },
          { en: "On mountain tops", es: "En cimas de montañas", de: "Auf Berggipfeln", nl: "Op bergtoppen" },
          { en: "In caves", es: "En cuevas", de: "In Höhlen", nl: "In grotten" },
          { en: "Under rocks", es: "Bajo rocas", de: "Unter Felsen", nl: "Onder rotsen" }
        ],
        correct: 0,
        explanation: {
          en: "Wild ducks build their nests near water in tall grass or reeds! The grass hides their eggs from predators, and being near water means food is always close by for the baby ducklings.",
          es: "¡Los patos salvajes construyen sus nidos cerca del agua en hierba alta o juncos! La hierba esconde sus huevos de los depredadores, y estar cerca del agua significa que la comida siempre está cerca para los patitos bebé.",
          de: "Wilde Enten bauen ihre Nester in der Nähe von Wasser im hohen Gras oder Schilf! Das Gras versteckt ihre Eier vor Raubtieren, und die Nähe zum Wasser bedeutet, dass Nahrung für die Entenküken immer in der Nähe ist.",
          nl: "Wilde eenden bouwen hun nesten bij water in hoog gras of riet! Het gras verbergt hun eieren voor roofdieren, en bij water zijn betekent dat voedsel altijd dichtbij is voor de baby eendjes."
        }
      },
      {
        question: {
          en: "What do raccoons use their paws for?",
          es: "¿Para qué usan las patas los mapaches?",
          de: "Wofür verwenden Waschbären ihre Pfoten?",
          nl: "Waarvoor gebruiken wasberen hun poten?"
        },
        options: [
          { en: "Washing food and grabbing things", es: "Lavar comida y agarrar cosas", de: "Nahrung waschen und Dinge greifen", nl: "Voedsel wassen en dingen pakken" },
          { en: "Flying", es: "Volar", de: "Fliegen", nl: "Vliegen" },
          { en: "Making music", es: "Hacer música", de: "Musik machen", nl: "Muziek maken" },
          { en: "Digging only", es: "Solo cavar", de: "Nur graben", nl: "Alleen graven" }
        ],
        correct: 0,
        explanation: {
          en: "Raccoons have incredibly clever paws! They wash their food in water to make it taste better and use their sensitive fingers to grab things like tiny fish, frogs, and even open containers!",
          es: "¡Los mapaches tienen patas increíblemente inteligentes! Lavan su comida en agua para que sepa mejor y usan sus dedos sensibles para agarrar cosas como peces pequeños, ranas, ¡e incluso abrir contenedores!",
          de: "Waschbären haben unglaublich kluge Pfoten! Sie waschen ihr Futter im Wasser, damit es besser schmeckt, und verwenden ihre empfindlichen Finger, um Dinge wie winzige Fische, Frösche und sogar Container zu öffnen!",
          nl: "Wasberen hebben ongelooflijk slimme poten! Ze wassen hun voedsel in water om het beter te laten smaken en gebruiken hun gevoelige vingers om dingen zoals kleine vissen, kikkers en zelfs containers te pakken!"
        }
      },
      {
        question: {
          en: "Which wild animal builds dams in rivers?",
          es: "¿Qué animal salvaje construye presas en los ríos?",
          de: "Welches wilde Tier baut Dämme in Flüssen?",
          nl: "Welk wild dier bouwt dammen in rivieren?"
        },
        options: [
          { en: "Beaver", es: "Castor", de: "Biber", nl: "Bever" },
          { en: "Fish", es: "Pez", de: "Fisch", nl: "Vis" },
          { en: "Bird", es: "Pájaro", de: "Vogel", nl: "Vogel" },
          { en: "Snake", es: "Serpiente", de: "Schlange", nl: "Slang" }
        ],
        correct: 0,
        explanation: {
          en: "Beavers are nature's engineers! They use their strong teeth to cut down trees and build amazing dams across rivers. These dams create ponds where beaver families live safely!",
          es: "¡Los castores son los ingenieros de la naturaleza! Usan sus dientes fuertes para cortar árboles y construir presas increíbles a través de los ríos. ¡Estas presas crean estanques donde las familias de castores viven seguras!",
          de: "Biber sind die Ingenieure der Natur! Sie verwenden ihre starken Zähne, um Bäume zu fällen und erstaunliche Dämme über Flüsse zu bauen. Diese Dämme schaffen Teiche, in denen Biberfamilien sicher leben!",
          nl: "Bevers zijn de ingenieurs van de natuur! Ze gebruiken hun sterke tanden om bomen om te hakken en geweldige dammen over rivieren te bouwen. Deze dammen creëren vijvers waar beverfamilies veilig leven!"
        }
      },
      {
        question: {
          en: "What do wild turkeys do when they are scared?",
          es: "¿Qué hacen los pavos salvajes cuando están asustados?",
          de: "Was machen wilde Truthähne wenn sie Angst haben?",
          nl: "Wat doen wilde kalkoenen als ze bang zijn?"
        },
        options: [
          { en: "Fly up into trees", es: "Vuelan hacia los árboles", de: "Fliegen auf Bäume", nl: "Vliegen bomen in" },
          { en: "Hide underground", es: "Se esconden bajo tierra", de: "Verstecken sich unterirdisch", nl: "Verstoppen zich ondergronds" },
          { en: "Change colors", es: "Cambian colores", de: "Wechseln Farben", nl: "Veranderen van kleur" },
          { en: "Play dead", es: "Se hacen los muertos", de: "Stellen sich tot", nl: "Spelen dood" }
        ],
        correct: 0,
        explanation: {
          en: "Wild turkeys can fly! When scared, they quickly fly up into tall trees to escape predators. Their strong wings help them reach safety high above the ground.",
          es: "¡Los pavos salvajes pueden volar! Cuando están asustados, vuelan rápidamente hacia árboles altos para escapar de los depredadores. Sus alas fuertes les ayudan a alcanzar la seguridad en lo alto del suelo.",
          de: "Wilde Truthähne können fliegen! Wenn sie Angst haben, fliegen sie schnell auf hohe Bäume, um Raubtieren zu entkommen. Ihre starken Flügel helfen ihnen, Sicherheit hoch über dem Boden zu erreichen.",
          nl: "Wilde kalkoenen kunnen vliegen! Als ze bang zijn, vliegen ze snel naar hoge bomen om aan roofdieren te ontsnappen. Hun sterke vleugels helpen hen veiligheid hoog boven de grond te bereiken."
        }
      },
      {
        question: {
          en: "Where do wild owls hunt?",
          es: "¿Dónde cazan los búhos salvajes?",
          de: "Wo jagen wilde Eulen?",
          nl: "Waar jagen wilde uilen?"
        },
        options: [
          { en: "At night in forests", es: "Por la noche en bosques", de: "Nachts in Wäldern", nl: "'s Nachts in bossen" },
          { en: "During the day in water", es: "Durante el día en agua", de: "Tagsüber im Wasser", nl: "Overdag in water" },
          { en: "Underground", es: "Bajo tierra", de: "Unterirdisch", nl: "Ondergronds" },
          { en: "Only in cities", es: "Solo en ciudades", de: "Nur in Städten", nl: "Alleen in steden" }
        ],
        correct: 0,
        explanation: {
          en: "Owls are amazing nighttime hunters! They have super quiet wings and excellent hearing to catch mice and small animals in the dark. Their big eyes help them see perfectly at night!",
          es: "¡Los búhos son cazadores nocturnos increíbles! Tienen alas súper silenciosas y excelente oído para atrapar ratones y animales pequeños en la oscuridad. ¡Sus ojos grandes les ayudan a ver perfectamente por la noche!",
          de: "Eulen sind erstaunliche nächtliche Jäger! Sie haben super leise Flügel und ausgezeichnetes Gehör, um Mäuse und kleine Tiere im Dunkeln zu fangen. Ihre großen Augen helfen ihnen, nachts perfekt zu sehen!",
          nl: "Uilen zijn geweldige nachtelijke jagers! Ze hebben super stille vleugels en uitstekend gehoor om muizen en kleine dieren in het donker te vangen. Hun grote ogen helpen hen perfect te zien 's nachts!"
        }
      },
      {
        question: {
          en: "What do koalas do most of the day?",
          es: "¿Qué hacen los koalas la mayor parte del día?",
          de: "Was machen Koalas den größten Teil des Tages?",
          nl: "Wat doen koala's het grootste deel van de dag?"
        },
        options: [
          { en: "Sleep in eucalyptus trees", es: "Duermen en árboles de eucalipto", de: "Schlafen in Eukalyptusbäumen", nl: "Slapen in eucalyptusbomen" },
          { en: "Hunt other animals", es: "Cazan otros animales", de: "Jagen andere Tiere", nl: "Jagen andere dieren" },
          { en: "Swim in rivers", es: "Nadan en ríos", de: "Schwimmen in Flüssen", nl: "Zwemmen in rivieren" },
          { en: "Fly around", es: "Vuelan por ahí", de: "Fliegen herum", nl: "Vliegen rond" }
        ],
        correct: 0,
        explanation: {
          en: "Koalas are sleepyheads! They sleep 18-22 hours per day in eucalyptus trees. Eucalyptus leaves don't give much energy, so koalas need lots of rest to save their energy!",
          es: "¡Los koalas son dormilones! Duermen 18-22 horas por día en árboles de eucalipto. Las hojas de eucalipto no dan mucha energía, ¡así que los koalas necesitan mucho descanso para ahorrar energía!",
          de: "Koalas sind Schlafmützen! Sie schlafen 18-22 Stunden pro Tag in Eukalyptusbäumen. Eukalyptusblätter geben nicht viel Energie, also brauchen Koalas viel Ruhe, um ihre Energie zu sparen!",
          nl: "Koala's zijn slaapkoppen! Ze slapen 18-22 uur per dag in eucalyptusbomen. Eucalyptusbladeren geven niet veel energie, dus koala's hebben veel rust nodig om hun energie te sparen!"
        }
      },
      {
        question: {
          en: "What do wild rabbits live in?",
          es: "¿En qué viven los conejos salvajes?",
          de: "Worin leben wilde Kaninchen?",
          nl: "Waarin leven wilde konijnen?"
        },
        options: [
          { en: "Burrows underground", es: "Madrigueras bajo tierra", de: "Bauten unterirdisch", nl: "Holen ondergronds" },
          { en: "Trees", es: "Árboles", de: "Bäume", nl: "Bomen" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Caves only", es: "Solo cuevas", de: "Nur Höhlen", nl: "Alleen grotten" }
        ],
        correct: 0,
        explanation: {
          en: "Wild rabbits dig underground burrows with multiple tunnels and rooms! These burrow systems protect rabbit families from predators and bad weather. Baby rabbits are born safe underground!",
          es: "¡Los conejos salvajes cavan madrigueras subterráneas con múltiples túneles y habitaciones! Estos sistemas de madrigueras protegen a las familias de conejos de los depredadores y el mal tiempo. ¡Los bebés conejos nacen seguros bajo tierra!",
          de: "Wilde Kaninchen graben unterirdische Bauten mit mehreren Tunneln und Räumen! Diese Bausysteme schützen Kaninchenfamilien vor Raubtieren und schlechtem Wetter. Babyhäschen werden sicher unterirdisch geboren!",
          nl: "Wilde konijnen graven ondergrondse holen met meerdere tunnels en kamers! Deze holensystemen beschermen konijnenfamilies tegen roofdieren en slecht weer. Baby konijntjes worden veilig ondergronds geboren!"
        }
      },
      {
        question: {
          en: "Which wild animal has antlers that fall off each year?",
          es: "¿Qué animal salvaje tiene astas que se caen cada año?",
          de: "Welches wilde Tier hat Geweihe die jedes Jahr abfallen?",
          nl: "Welk wild dier heeft geweien die elk jaar afvallen?"
        },
        options: [
          { en: "Deer", es: "Ciervo", de: "Hirsch", nl: "Hert" },
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" },
          { en: "Lion", es: "León", de: "Löwe", nl: "Leeuw" },
          { en: "Tiger", es: "Tigre", de: "Tiger", nl: "Tijger" }
        ],
        correct: 0,
        explanation: {
          en: "Male deer grow and shed their antlers every year! Antlers are made of bone and can grow incredibly fast. Deer use them to compete with other males and attract females during mating season.",
          es: "¡Los ciervos machos crecen y pierden sus astas cada año! Las astas están hechas de hueso y pueden crecer increíblemente rápido. Los ciervos las usan para competir con otros machos y atraer hembras durante la temporada de apareamiento.",
          de: "Männliche Hirsche wachsen und verlieren ihre Geweihe jedes Jahr! Geweihe bestehen aus Knochen und können unglaublich schnell wachsen. Hirsche verwenden sie, um mit anderen Männchen zu konkurrieren und Weibchen während der Paarungszeit anzulocken.",
          nl: "Mannelijke herten laten hun geweien elk jaar groeien en afvallen! Geweien zijn gemaakt van bot en kunnen ongelooflijk snel groeien. Herten gebruiken ze om te concurreren met andere mannetjes en vrouwtjes aan te trekken tijdens het paarseizoen."
        }
      },
      {
        question: {
          en: "What do wild geese do when seasons change?",
          es: "¿Qué hacen los gansos salvajes cuando cambian las estaciones?",
          de: "Was machen wilde Gänse wenn sich die Jahreszeiten ändern?",
          nl: "Wat doen wilde ganzen als seizoenen veranderen?"
        },
        options: [
          { en: "Fly to warmer or cooler places", es: "Vuelan a lugares más cálidos o frescos", de: "Fliegen an wärmere oder kühlere Orte", nl: "Vliegen naar warmere of koelere plekken" },
          { en: "Hide underground", es: "Se esconden bajo tierra", de: "Verstecken sich unterirdisch", nl: "Verstoppen zich ondergronds" },
          { en: "Change colors", es: "Cambian colores", de: "Wechseln Farben", nl: "Veranderen van kleur" },
          { en: "Sleep all winter", es: "Duermen todo el invierno", de: "Schlafen den ganzen Winter", nl: "Slapen de hele winter" }
        ],
        correct: 0,
        explanation: {
          en: "Wild geese are amazing travelers! They migrate thousands of miles when seasons change, flying in V-formations to save energy. They travel to warmer places in winter and return in spring!",
          es: "¡Los gansos salvajes son viajeros increíbles! Migran miles de millas cuando cambian las estaciones, volando en formaciones en V para ahorrar energía. ¡Viajan a lugares más cálidos en invierno y regresan en primavera!",
          de: "Wilde Gänse sind erstaunliche Reisende! Sie wandern Tausende von Meilen, wenn sich die Jahreszeiten ändern, und fliegen in V-Formationen, um Energie zu sparen. Sie reisen im Winter an wärmere Orte und kehren im Frühling zurück!",
          nl: "Wilde ganzen zijn geweldige reizigers! Ze migreren duizenden kilometers wanneer seizoenen veranderen, vliegend in V-formaties om energie te besparen. Ze reizen naar warmere plaatsen in de winter en keren terug in de lente!"
        }
      },
      {
        question: {
          en: "What do skunks do when threatened?",
          es: "¿Qué hacen los zorrillos cuando están amenazados?",
          de: "Was machen Stinktiere wenn sie bedroht werden?",
          nl: "Wat doen stinkdieren als ze bedreigd worden?"
        },
        options: [
          { en: "Spray a bad smell", es: "Rocían un mal olor", de: "Sprühen einen schlechten Geruch", nl: "Spuiten een vieze geur" },
          { en: "Roar loudly", es: "Rugen fuerte", de: "Brüllen laut", nl: "Brullen hard" },
          { en: "Change colors", es: "Cambian colores", de: "Wechseln Farben", nl: "Veranderen van kleur" },
          { en: "Fly away", es: "Vuelan lejos", de: "Fliegen weg", nl: "Vliegen weg" }
        ],
        correct: 0,
        explanation: {
          en: "Skunks have a super stinky defense! When threatened, they spray a terrible-smelling liquid from their tail that can be smelled from far away. This smell warns predators to stay away!",
          es: "¡Los zorrillos tienen una defensa súper apestosa! Cuando están amenazados, rocían un líquido de olor terrible desde su cola que se puede oler desde lejos. ¡Este olor advierte a los depredadores que se mantengan alejados!",
          de: "Stinktiere haben eine super stinkende Verteidigung! Wenn sie bedroht werden, sprühen sie eine schrecklich riechende Flüssigkeit aus ihrem Schwanz, die von weitem gerochen werden kann. Dieser Geruch warnt Raubtiere, sich fernzuhalten!",
          nl: "Stinkdieren hebben een super stinkende verdediging! Als ze bedreigd worden, spuiten ze een vreselijk ruikende vloeistof uit hun staart die van ver weg geroken kan worden. Deze geur waarschuwt roofdieren om weg te blijven!"
        }
      },
      {
        question: {
          en: "Where do wild eagles build their nests?",
          es: "¿Dónde construyen sus nidos las águilas salvajes?",
          de: "Wo bauen wilde Adler ihre Nester?",
          nl: "Waar bouwen wilde arenden hun nesten?"
        },
        options: [
          { en: "High on cliffs or tall trees", es: "Alto en acantilados o árboles altos", de: "Hoch auf Klippen oder hohen Bäumen", nl: "Hoog op kliffen of hoge bomen" },
          { en: "Underground", es: "Bajo tierra", de: "Unterirdisch", nl: "Ondergronds" },
          { en: "In water", es: "En agua", de: "Im Wasser", nl: "In water" },
          { en: "On the ground only", es: "Solo en el suelo", de: "Nur am Boden", nl: "Alleen op de grond" }
        ],
        correct: 0,
        explanation: {
          en: "Eagles build their huge nests called 'eyries' high on cliffs or tall trees! These nests can be 8 feet wide and weigh as much as a car. The height keeps baby eagles safe from ground predators!",
          es: "¡Las águilas construyen sus enormes nidos llamados 'nidos de águila' en lo alto de acantilados o árboles altos! Estos nidos pueden tener 8 pies de ancho y pesar tanto como un auto. ¡La altura mantiene a los bebés águilas seguros de los depredadores terrestres!",
          de: "Adler bauen ihre riesigen Nester, genannt 'Horste', hoch auf Klippen oder hohen Bäumen! Diese Nester können 8 Fuß breit sein und so viel wiegen wie ein Auto. Die Höhe hält Babyeagles vor Bodenraubtieren sicher!",
          nl: "Arenden bouwen hun enorme nesten genaamd 'horsten' hoog op kliffen of hoge bomen! Deze nesten kunnen 8 voet breed zijn en zoveel wegen als een auto. De hoogte houdt baby arenden veilig van grondpredatoren!"
        }
      },
      {
        question: {
          en: "What do wild horses eat on plains?",
          es: "¿Qué comen los caballos salvajes en las llanuras?",
          de: "Was fressen wilde Pferde in den Ebenen?",
          nl: "Wat eten wilde paarden op vlaktes?"
        },
        options: [
          { en: "Grass and plants", es: "Hierba y plantas", de: "Gras und Pflanzen", nl: "Gras en planten" },
          { en: "Other horses", es: "Otros caballos", de: "Andere Pferde", nl: "Andere paarden" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" }
        ],
        correct: 0,
        explanation: {
          en: "Wild horses are grazers who spend most of their day eating grass and plants on open plains! They have strong teeth perfect for grinding tough grass and travel in family groups called herds.",
          es: "¡Los caballos salvajes son pastores que pasan la mayor parte del día comiendo hierba y plantas en llanuras abiertas! Tienen dientes fuertes perfectos para moler hierba resistente y viajan en grupos familiares llamados manadas.",
          de: "Wilde Pferde sind Grasfresser, die den größten Teil ihres Tages damit verbringen, Gras und Pflanzen auf offenen Ebenen zu fressen! Sie haben starke Zähne, die perfekt zum Mahlen von zähem Gras sind, und reisen in Familiengruppen namens Herden.",
          nl: "Wilde paarden zijn grazers die het grootste deel van hun dag doorbrengen met het eten van gras en planten op open vlaktes! Ze hebben sterke tanden die perfect zijn voor het malen van taai gras en reizen in familiegroepen genaamd kuddes."
        }
      },
      {
        question: {
          en: "Which wild animal carries its baby on its back?",
          es: "¿Qué animal salvaje lleva a su bebé en su espalda?",
          de: "Welches wilde Tier trägt sein Baby auf dem Rücken?",
          nl: "Welk wild dier draagt zijn baby op zijn rug?"
        },
        options: [
          { en: "Opossum", es: "Zarigüeya", de: "Opossum", nl: "Opossum" },
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" },
          { en: "Lion", es: "León", de: "Löwe", nl: "Leeuw" },
          { en: "Fish", es: "Pez", de: "Fisch", nl: "Vis" }
        ],
        correct: 0,
        explanation: {
          en: "Opossums are amazing moms! Baby opossums ride on their mother's back for protection after they outgrow her pouch. They can carry up to 13 babies at once - like a living school bus!",
          es: "¡Las zarigüeyas son madres increíbles! Los bebés zarigüeyas viajan en la espalda de su madre para protección después de crecer más que su bolsa. ¡Pueden cargar hasta 13 bebés a la vez, como un autobús escolar viviente!",
          de: "Opossums sind erstaunliche Mütter! Baby-Opossums reiten auf dem Rücken ihrer Mutter zum Schutz, nachdem sie aus ihrem Beutel herausgewachsen sind. Sie können bis zu 13 Babys auf einmal tragen - wie ein lebender Schulbus!",
          nl: "Opossums zijn geweldige moeders! Baby opossums rijden op de rug van hun moeder voor bescherming nadat ze uit haar buidel zijn gegroeid. Ze kunnen tot 13 baby's tegelijk dragen - als een levende schoolbus!"
        }
      },
      {
        question: {
          en: "What do wild otters love to do?",
          es: "¿Qué les encanta hacer a las nutrias salvajes?",
          de: "Was machen wilde Otter gerne?",
          nl: "Wat doen wilde otters graag?"
        },
        options: [
          { en: "Play and swim in water", es: "Jugar y nadar en agua", de: "Spielen und schwimmen im Wasser", nl: "Spelen en zwemmen in water" },
          { en: "Climb mountains", es: "Escalar montañas", de: "Berge besteigen", nl: "Bergen beklimmen" },
          { en: "Fly through air", es: "Volar por el aire", de: "Durch die Luft fliegen", nl: "Door de lucht vliegen" },
          { en: "Sleep all day", es: "Dormir todo el día", de: "Den ganzen Tag schlafen", nl: "De hele dag slapen" }
        ],
        correct: 0,
        explanation: {
          en: "Otters are the playful clowns of the water world! They love swimming, sliding down muddy banks, playing with rocks, and floating on their backs. They even hold hands while sleeping so they don't drift apart!",
          es: "¡Las nutrias son los payasos juguetones del mundo acuático! Les encanta nadar, deslizarse por orillas fangosas, jugar con rocas y flotar boca arriba. ¡Incluso se toman de las manos mientras duermen para no separarse!",
          de: "Otter sind die verspielten Clowns der Wasserwelt! Sie lieben es zu schwimmen, schlammige Ufer hinunterzurutschen, mit Steinen zu spielen und auf dem Rücken zu schwimmen. Sie halten sogar Händchen beim Schlafen, damit sie nicht auseinanderdriften!",
          nl: "Otters zijn de speelse clowns van de waterwereld! Ze houden van zwemmen, glijden van modderige oevers, spelen met stenen en drijven op hun rug. Ze houden zelfs elkaars hand vast tijdens het slapen zodat ze niet uit elkaar drijven!"
        }
      },
      {
        question: {
          en: "What do porcupines have covering their body?",
          es: "¿Qué tienen los puercoespines cubriendo su cuerpo?",
          de: "Womit ist der Körper von Stachelschweinen bedeckt?",
          nl: "Waarmee is het lichaam van stekelvarkens bedekt?"
        },
        options: [
          { en: "Sharp quills", es: "Púas afiladas", de: "Scharfe Stacheln", nl: "Scherpe stekels" },
          { en: "Feathers", es: "Plumas", de: "Federn", nl: "Veren" },
          { en: "Scales", es: "Escamas", de: "Schuppen", nl: "Schubben" },
          { en: "Smooth skin", es: "Piel lisa", de: "Glatte Haut", nl: "Gladde huid" }
        ],
        correct: 0,
        explanation: {
          en: "Porcupines are walking pin cushions! They have up to 30,000 sharp quills covering their body. When threatened, they raise their quills and back into predators - ouch! The quills have tiny barbs that make them hard to remove.",
          es: "¡Los puercoespines son alfileteros ambulantes! Tienen hasta 30,000 púas afiladas cubriendo su cuerpo. Cuando están amenazados, levantan sus púas y retroceden hacia los depredadores: ¡ay! Las púas tienen pequeños ganchos que las hacen difíciles de quitar.",
          de: "Stachelschweine sind wandelnde Nadelkissen! Sie haben bis zu 30.000 scharfe Stacheln, die ihren Körper bedecken. Wenn sie bedroht werden, richten sie ihre Stacheln auf und gehen rückwärts in Raubtiere - autsch! Die Stacheln haben winzige Widerhaken, die sie schwer entfernbar machen.",
          nl: "Stekelvarkens zijn wandelende speldenkussens! Ze hebben tot 30.000 scherpe stekels die hun lichaam bedekken. Als ze bedreigd worden, zetten ze hun stekels op en lopen achteruit naar roofdieren - au! De stekels hebben kleine weerhaakjes die ze moeilijk te verwijderen maken."
        }
      },
      {
        question: {
          en: "Where do wild flamingos get their pink color?",
          es: "¿De dónde obtienen su color rosa los flamencos salvajes?",
          de: "Woher bekommen wilde Flamingos ihre rosa Farbe?",
          nl: "Waar krijgen wilde flamingo's hun roze kleur vandaan?"
        },
        options: [
          { en: "From eating shrimp and algae", es: "De comer camarones y algas", de: "Vom Fressen von Garnelen und Algen", nl: "Van het eten van garnalen en algen" },
          { en: "From the sun", es: "Del sol", de: "Von der Sonne", nl: "Van de zon" },
          { en: "They are born pink", es: "Nacen rosados", de: "Sie werden rosa geboren", nl: "Ze worden roze geboren" },
          { en: "From drinking pink water", es: "De beber agua rosada", de: "Vom Trinken von rosa Wasser", nl: "Van het drinken van roze water" }
        ],
        correct: 0,
        explanation: {
          en: "Flamingos get their beautiful pink color from eating shrimp, algae, and other pink foods! The special pigments in their food turn their feathers pink. Baby flamingos are actually gray and white!",
          es: "¡Los flamencos obtienen su hermoso color rosa de comer camarones, algas y otros alimentos rosados! Los pigmentos especiales en su comida vuelven sus plumas rosadas. ¡Los flamencos bebé son en realidad grises y blancos!",
          de: "Flamingos bekommen ihre schöne rosa Farbe vom Fressen von Garnelen, Algen und anderen rosa Lebensmitteln! Die speziellen Pigmente in ihrer Nahrung färben ihre Federn rosa. Babyflamingos sind tatsächlich grau und weiß!",
          nl: "Flamingo's krijgen hun mooie roze kleur van het eten van garnalen, algen en ander roze voedsel! De speciale pigmenten in hun voedsel maken hun veren roze. Baby flamingo's zijn eigenlijk grijs en wit!"
        }
      },
      {
        question: {
          en: "What do wild coyotes hunt in packs?",
          es: "¿Qué cazan los coyotes salvajes en manada?",
          de: "Was jagen wilde Kojoten im Rudel?",
          nl: "Wat jagen wilde coyotes in roedels?"
        },
        options: [
          { en: "Rabbits and small animals", es: "Conejos y animales pequeños", de: "Kaninchen und kleine Tiere", nl: "Konijnen en kleine dieren" },
          { en: "Elephants", es: "Elefantes", de: "Elefanten", nl: "Olifanten" },
          { en: "Whales", es: "Ballenas", de: "Wale", nl: "Walvissen" },
          { en: "Trees", es: "Árboles", de: "Bäume", nl: "Bomen" }
        ],
        correct: 0,
        explanation: {
          en: "Coyotes are smart pack hunters! They work together to catch rabbits, mice, and other small animals. When hunting in packs, they can take turns chasing prey until it gets tired - teamwork makes them successful!",
          es: "¡Los coyotes son cazadores de manada inteligentes! Trabajan juntos para atrapar conejos, ratones y otros animales pequeños. Cuando cazan en manadas, pueden turnarse persiguiendo presas hasta que se cansan: ¡el trabajo en equipo los hace exitosos!",
          de: "Kojoten sind kluge Rudeljäger! Sie arbeiten zusammen, um Kaninchen, Mäuse und andere kleine Tiere zu fangen. Bei der Jagd im Rudel können sie sich beim Verfolgen der Beute abwechseln, bis sie müde wird - Teamwork macht sie erfolgreich!",
          nl: "Coyotes zijn slimme roedeljagers! Ze werken samen om konijnen, muizen en andere kleine dieren te vangen. Bij het jagen in roedels kunnen ze om beurten prooi achtervolgen totdat het moe wordt - teamwerk maakt hen succesvol!"
        }
      },
      {
        question: {
          en: "Which wild animal can hang upside down from tree branches?",
          es: "¿Qué animal salvaje puede colgarse boca abajo de las ramas de los árboles?",
          de: "Welches wilde Tier kann kopfüber von Baumästen hängen?",
          nl: "Welk wild dier kan ondersteboven aan boomtakken hangen?"
        },
        options: [
          { en: "Sloth", es: "Perezoso", de: "Faultier", nl: "Luiaard" },
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" },
          { en: "Lion", es: "León", de: "Löwe", nl: "Leeuw" },
          { en: "Fish", es: "Pez", de: "Fisch", nl: "Vis" }
        ],
        correct: 0,
        explanation: {
          en: "Sloths are the ultimate tree hangers! They have special curved claws that lock into branches, allowing them to hang upside down effortlessly. They're so slow that algae grows on their fur, turning them green for camouflage!",
          es: "¡Los perezosos son los colgadores de árboles definitivos! Tienen garras curvadas especiales que se enganchan en las ramas, permitiéndoles colgarse boca abajo sin esfuerzo. ¡Son tan lentos que las algas crecen en su pelaje, volviéndolos verdes para camuflarse!",
          de: "Faultiere sind die ultimativen Baumhänger! Sie haben spezielle gebogene Krallen, die sich in Äste einhaken und es ihnen ermöglichen, mühelos kopfüber zu hängen. Sie sind so langsam, dass Algen auf ihrem Fell wachsen und sie grün für die Tarnung werden!",
          nl: "Luiards zijn de ultieme boomhangers! Ze hebben speciale gebogen klauwen die vasthaken aan takken, waardoor ze moeiteloos ondersteboven kunnen hangen. Ze zijn zo langzaam dat algen op hun vacht groeien, waardoor ze groen worden voor camouflage!"
        }
      },
      {
        question: {
          en: "What do wild animals do to stay warm in winter?",
          es: "¿Qué hacen los animales salvajes para mantenerse calientes en invierno?",
          de: "Was machen wilde Tiere um im Winter warm zu bleiben?",
          nl: "Wat doen wilde dieren om warm te blijven in de winter?"
        },
        options: [
          { en: "Grow thicker fur or hide in warm places", es: "Les crece pelaje más grueso o se esconden en lugares cálidos", de: "Bekommen dickeres Fell oder verstecken sich an warmen Orten", nl: "Krijgen dikkere vacht of verstoppen zich op warme plekken" },
          { en: "Shave their fur off", es: "Se afeitan el pelaje", de: "Rasieren ihr Fell ab", nl: "Scheren hun vacht af" },
          { en: "Go swimming", es: "Van a nadar", de: "Gehen schwimmen", nl: "Gaan zwemmen" },
          { en: "Stand in the rain", es: "Se paran en la lluvia", de: "Stehen im Regen", nl: "Staan in de regen" }
        ],
        correct: 0,
        explanation: {
          en: "Wild animals have amazing winter survival tricks! Many grow thicker, fluffier fur coats, while others find warm places like caves, burrows, or hollow trees. Some animals even huddle together in groups to share body heat!",
          es: "¡Los animales salvajes tienen trucos increíbles de supervivencia invernal! Muchos desarrollan pelajes más gruesos y esponjosos, mientras otros encuentran lugares cálidos como cuevas, madrigueras o árboles huecos. ¡Algunos animales incluso se acurrucan juntos en grupos para compartir calor corporal!",
          de: "Wilde Tiere haben erstaunliche Winter-Überlebenstricks! Viele bekommen dickere, flauschigere Felle, während andere warme Orte wie Höhlen, Baue oder hohle Bäume finden. Einige Tiere kuscheln sich sogar in Gruppen zusammen, um Körperwärme zu teilen!",
          nl: "Wilde dieren hebben geweldige winter overlevingstrics! Veel krijgen dikkere, pluizigere vachten, terwijl anderen warme plekken vinden zoals grotten, holen of holle bomen. Sommige dieren kruipen zelfs samen in groepen om lichaamswarmte te delen!"
        }
      },
      {
        question: {
          en: "Which wild animal can run the fastest?",
          es: "¿Qué animal salvaje puede correr más rápido?",
          de: "Welches wilde Tier kann am schnellsten laufen?",
          nl: "Welk wild dier kan het snelst rennen?"
        },
        options: [
          { en: "Cheetah", es: "Guepardo", de: "Gepard", nl: "Jachtluipaard" },
          { en: "Turtle", es: "Tortuga", de: "Schildkröte", nl: "Schildpad" },
          { en: "Snail", es: "Caracol", de: "Schnecke", nl: "Slak" },
          { en: "Panda", es: "Panda", de: "Panda", nl: "Panda" }
        ],
        correct: 0,
        explanation: {
          en: "The cheetah is the speed champion of the wild! It can run up to 70 miles per hour - that's faster than cars on most roads! Their long legs, flexible spine, and special claws help them sprint incredibly fast to catch prey.",
          es: "¡El guepardo es el campeón de velocidad de la naturaleza! Puede correr hasta 112 kilómetros por hora - ¡eso es más rápido que los autos en la mayoría de las carreteras! Sus patas largas, columna flexible y garras especiales les ayudan a esprintar increíblemente rápido para atrapar presas.",
          de: "Der Gepard ist der Geschwindigkeitschampion der Wildnis! Er kann bis zu 112 km/h laufen - das ist schneller als Autos auf den meisten Straßen! Ihre langen Beine, flexible Wirbelsäule und speziellen Krallen helfen ihnen, unglaublich schnell zu sprinten, um Beute zu fangen.",
          nl: "De jachtluipaard is de snelheidskampioen van de wildernis! Hij kan tot 112 kilometer per uur rennen - dat is sneller dan auto's op de meeste wegen! Hun lange benen, flexibele ruggengraat en speciale klauwen helpen hen ongelooflijk snel te sprinten om prooi te vangen."
        }
      },
      {
        question: {
          en: "What sound do wild wolves make to talk to each other?",
          es: "¿Qué sonido hacen los lobos salvajes para hablarse entre ellos?",
          de: "Welchen Laut machen wilde Wölfe, um miteinander zu sprechen?",
          nl: "Welk geluid maken wilde wolven om met elkaar te praten?"
        },
        options: [
          { en: "Howling", es: "Aullidos", de: "Heulen", nl: "Huilen" },
          { en: "Singing", es: "Cantando", de: "Singen", nl: "Zingen" },
          { en: "Laughing", es: "Riendo", de: "Lachen", nl: "Lachen" },
          { en: "Whispering", es: "Susurrando", de: "Flüstern", nl: "Fluisteren" }
        ],
        correct: 0,
        explanation: {
          en: "Wolves howl to communicate with their pack! Their howls can travel for miles and help lost wolves find their family, warn other wolves to stay away, or just say hello. Each wolf has its own special howl voice, just like people have different voices!",
          es: "¡Los lobos aúllan para comunicarse con su manada! Sus aullidos pueden viajar por millas y ayudar a los lobos perdidos a encontrar a su familia, advertir a otros lobos que se mantengan alejados, o simplemente saludar. ¡Cada lobo tiene su propia voz de aullido especial, como las personas tienen voces diferentes!",
          de: "Wölfe heulen, um mit ihrem Rudel zu kommunizieren! Ihr Heulen kann meilenweit reisen und verlorenen Wölfen helfen, ihre Familie zu finden, andere Wölfe warnen, wegzubleiben, oder einfach Hallo zu sagen. Jeder Wolf hat seine eigene spezielle Heulstimme, genau wie Menschen verschiedene Stimmen haben!",
          nl: "Wolven huilen om te communiceren met hun roedel! Hun gehuil kan mijlenver reizen en helpt verdwaalde wolven hun familie te vinden, waarschuwen andere wolven om weg te blijven, of gewoon hallo te zeggen. Elke wolf heeft zijn eigen speciale huil stem, net zoals mensen verschillende stemmen hebben!"
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('warm-up/animals', level10);
  }
})();