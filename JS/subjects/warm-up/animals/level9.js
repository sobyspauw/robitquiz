// Animals - Level 9: Farm Animals
(function() {
  const level9 = {
    name: {
      en: "Farm Animals",
      es: "Animales de Granja",
      de: "Bauernhoftiere",
      nl: "Boerderijdieren"
    },
    questions: [
      {
        question: {
          en: "What do cows give us that we drink?",
          es: "¿Qué nos dan las vacas que bebemos?",
          de: "Was geben uns Kühe, das wir trinken?",
          nl: "Wat geven koeien ons dat we drinken?"
        },
        options: [
          { en: "Milk", es: "Leche", de: "Milch", nl: "Melk" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Juice", es: "Jugo", de: "Saft", nl: "Sap" },
          { en: "Tea", es: "Té", de: "Tee", nl: "Thee" }
        ],
        correct: 0,
        explanation: {
          en: "Cows produce milk in their udders, which farmers collect by milking them twice daily to provide fresh milk for drinking and making dairy products.",
          es: "Las vacas producen leche en sus ubres, que los granjeros recolectan ordeñándolas dos veces al día para proporcionar leche fresca para beber y hacer productos lácteos.",
          de: "Kühe produzieren Milch in ihren Eutern, die Bauern durch zweimal tägliches Melken sammeln, um frische Milch zum Trinken und zur Herstellung von Milchprodukten zu liefern.",
          nl: "Koeien produceren melk in hun uiers, die boeren verzamelen door ze tweemaal daags te melken om verse melk te leveren voor het drinken en maken van zuivelproducten."
        }
      },
      {
        question: {
          en: "What do chickens give us that we eat for breakfast?",
          es: "¿Qué nos dan las gallinas que comemos en el desayuno?",
          de: "Was geben uns Hühner, das wir zum Frühstück essen?",
          nl: "Wat geven kippen ons dat we bij het ontbijt eten?"
        },
        options: [
          { en: "Eggs", es: "Huevos", de: "Eier", nl: "Eieren" },
          { en: "Cheese", es: "Queso", de: "Käse", nl: "Kaas" },
          { en: "Bread", es: "Pan", de: "Brot", nl: "Brood" },
          { en: "Cereal", es: "Cereal", de: "Müsli", nl: "Ontbijtgranen" }
        ],
        correct: 0,
        explanation: {
          en: "Hens lay eggs almost daily, providing a nutritious source of protein that people commonly eat for breakfast in various preparations like scrambled, fried, or boiled.",
          es: "Las gallinas ponen huevos casi diariamente, proporcionando una fuente nutritiva de proteína que la gente comúnmente come en el desayuno en varias preparaciones como revueltos, fritos, o hervidos.",
          de: "Hühner legen fast täglich Eier und liefern eine nahrhafte Proteinquelle, die Menschen häufig zum Frühstück in verschiedenen Zubereitungen wie Rührei, Spiegelei oder gekocht essen.",
          nl: "Hennen leggen bijna dagelijks eieren, wat een voedzame bron van eiwit biedt die mensen vaak bij het ontbijt eten in verschillende bereidingen zoals roerei, gebakken, of gekookt."
        }
      },
      {
        question: {
          en: "What do sheep give us to make warm clothes?",
          es: "¿Qué nos dan las ovejas para hacer ropa abrigada?",
          de: "Was geben uns Schafe für warme Kleidung?",
          nl: "Wat geven schapen ons om warme kleren te maken?"
        },
        options: [
          { en: "Wool", es: "Lana", de: "Wolle", nl: "Wol" },
          { en: "Cotton", es: "Algodón", de: "Baumwolle", nl: "Katoen" },
          { en: "Silk", es: "Seda", de: "Seide", nl: "Zijde" },
          { en: "Leather", es: "Cuero", de: "Leder", nl: "Leer" }
        ],
        correct: 0,
        explanation: {
          en: "Sheep grow thick wool coats that are sheared annually, providing natural fiber that is spun into yarn and woven into warm clothing like sweaters and blankets.",
          es: "Las ovejas desarrollan capas gruesas de lana que se esquilan anualmente, proporcionando fibra natural que se hila en hilo y se teje en ropa abrigada como suéteres y mantas.",
          de: "Schafe entwickeln dicke Wollmäntel, die jährlich geschoren werden und natürliche Fasern liefern, die zu Garn gesponnen und zu warmer Kleidung wie Pullovern und Decken gewebt werden.",
          nl: "Schapen groeien dikke wollen vachten die jaarlijks geschoren worden, wat natuurlijke vezels levert die tot garen gesponnen en tot warme kleding zoals truien en dekens geweven worden."
        }
      },
      {
        question: {
          en: "Where do farm animals usually sleep at night?",
          es: "¿Dónde duermen usualmente los animales de granja por la noche?",
          de: "Wo schlafen Bauernhoftiere normalerweise nachts?",
          nl: "Waar slapen boerderijdieren meestal 's nachts?"
        },
        options: [
          { en: "In a barn", es: "En un granero", de: "In einer Scheune", nl: "In een schuur" },
          { en: "In the forest", es: "En el bosque", de: "Im Wald", nl: "In het bos" },
          { en: "In the ocean", es: "En el océano", de: "Im Ozean", nl: "In de oceaan" },
          { en: "On tree branches", es: "En ramas de árboles", de: "Auf Baumästen", nl: "Op boomtakken" }
        ],
        correct: 0,
        explanation: {
          en: "Farm animals sleep in barns and other farm buildings where they are protected from weather, predators, and have comfortable bedding.",
          es: "Los animales de granja duermen in graneros y otros edificios de granja donde están protegidos del clima, depredadores, y tienen camas cómodas.",
          de: "Bauernhoftiere schlafen in Scheunen und anderen landwirtschaftlichen Gebäuden, wo sie vor Wetter, Raubtieren geschützt sind und bequeme Einstreu haben.",
          nl: "Boerderijdieren slapen in schuren en andere boerderijgebouwen waar ze beschermd zijn tegen weer, roofdieren, en comfortabel bedding hebben."
        }
      },
      {
        question: {
          en: "What do pigs like to roll in to stay cool?",
          es: "¿En qué les gusta revolcarse a los cerdos para mantenerse frescos?",
          de: "Worin wälzen sich Schweine gerne um sich abzukühlen?",
          nl: "Waar rollen varkens graag in om koel te blijven?"
        },
        options: [
          { en: "Mud", es: "Lodo", de: "Schlamm", nl: "Modder" },
          { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Grass", es: "Hierba", de: "Gras", nl: "Gras" }
        ],
        correct: 0,
        explanation: {
          en: "Pigs roll in mud to cool down since they can't sweat, and the mud also protects their skin from sunburn and insect bites.",
          es: "Los cerdos se revuelcan en lodo para refrescarse ya que no pueden sudar, y el lodo también protege su piel de quemaduras solares y picaduras de insectos.",
          de: "Schweine wälzen sich im Schlamm, um sich abzukühlen, da sie nicht schwitzen können, und der Schlamm schützt auch ihre Haut vor Sonnenbrand und Insektenstichen.",
          nl: "Varkens rollen in modder om af te koelen omdat ze niet kunnen zweten, en de modder beschermt ook hun huid tegen zonnebrand en insectenbeten."
        }
      },
      {
        question: {
          en: "What do horses eat in the pasture?",
          es: "¿Qué comen los caballos en el pastizal?",
          de: "Was fressen Pferde auf der Weide?",
          nl: "Wat eten paarden in de wei?"
        },
        options: [
          { en: "Grass and hay", es: "Hierba y heno", de: "Gras und Heu", nl: "Gras en hooi" },
          { en: "Meat", es: "Carne", de: "Fleisch", nl: "Vlees" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Nuts", es: "Nueces", de: "Nüsse", nl: "Noten" }
        ],
        correct: 0,
        explanation: {
          en: "Horses are herbivores that graze on fresh grass in pastures and eat dried hay when grass isn't available, providing the fiber they need for digestion.",
          es: "Los caballos son herbívoros que pastan hierba fresca en pastizales y comen heno seco cuando la hierba no está disponible, proporcionando la fibra que necesitan para la digestión.",
          de: "Pferde sind Pflanzenfresser, die frisches Gras auf Weiden fressen und getrocknetes Heu essen, wenn Gras nicht verfügbar ist, und liefern die Ballaststoffe, die sie für die Verdauung benötigen.",
          nl: "Paarden zijn herbivoren die vers gras in weilanden grazen en gedroogd hooi eten wanneer gras niet beschikbaar is, wat de vezels levert die ze nodig hebben voor vertering."
        }
      },
      {
        question: {
          en: "What sound do roosters make in the morning?",
          es: "¿Qué sonido hacen los gallos por la mañana?",
          de: "Welchen Laut machen Hähne am Morgen?",
          nl: "Welk geluid maken hanen in de ochtend?"
        },
        options: [
          { en: "Cock-a-doodle-doo", es: "Quiquiriquí", de: "Kikeriki", nl: "Kukeleku" },
          { en: "Moo", es: "Mu", de: "Muh", nl: "Boe" },
          { en: "Oink", es: "Oinc", de: "Oink", nl: "Knor" },
          { en: "Baa", es: "Bee", de: "Bäh", nl: "Bè" }
        ],
        correct: 0,
        explanation: {
          en: "Roosters crow loudly at dawn to announce the morning, establish their territory, and wake up the farm - serving as natural alarm clocks.",
          es: "Los gallos cantan fuertemente al amanecer para anunciar la mañana, establecer su territorio, y despertar la granja - sirviendo como despertadores naturales.",
          de: "Hähne krähen laut bei Tagesanbruch, um den Morgen anzukündigen, ihr Territorium zu etablieren und den Bauernhof zu wecken - sie dienen als natürliche Wecker.",
          nl: "Hanen kraaien luid bij dageraad om de ochtend aan te kondigen, hun territorium te vestigen, en de boerderij wakker te maken - dienend als natuurlijke wekkers."
        }
      },
      {
        question: {
          en: "What do goats like to climb on?",
          es: "¿En qué les gusta trepar a las cabras?",
          de: "Worauf klettern Ziegen gerne?",
          nl: "Waarop klimmen geiten graag?"
        },
        options: [
          { en: "Rocks and hills", es: "Rocas y colinas", de: "Felsen und Hügel", nl: "Rotsen en heuvels" },
          { en: "Trees", es: "Árboles", de: "Bäume", nl: "Bomen" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" }
        ],
        correct: 0,
        explanation: {
          en: "Goats are excellent climbers with special hooves that grip well, allowing them to climb steep rocks and hills to find food and escape predators.",
          es: "Las cabras son excelentes escaladoras con cascos especiales que se agarran bien, permitiéndoles escalar rocas empinadas y colinas para encontrar comida y escapar de depredadores.",
          de: "Ziegen sind ausgezeichnete Kletterer mit speziellen Hufen, die gut greifen, wodurch sie steile Felsen und Hügel erklimmen können, um Nahrung zu finden und Raubtieren zu entkommen.",
          nl: "Geiten zijn uitstekende klimmers met speciale hoeven die goed grip hebben, waardoor ze steile rotsen en heuvels kunnen beklimmen om voedsel te vinden en roofdieren te ontsnappen."
        }
      },
      {
        question: {
          en: "What do ducks like to swim in?",
          es: "¿En qué les gusta nadar a los patos?",
          de: "Worin schwimmen Enten gerne?",
          nl: "Waarin zwemmen eenden graag?"
        },
        options: [
          { en: "Ponds and water", es: "Estanques y agua", de: "Teiche und Wasser", nl: "Vijvers en water" },
          { en: "Mud only", es: "Solo lodo", de: "Nur Schlamm", nl: "Alleen modder" },
          { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" },
          { en: "Grass", es: "Hierba", de: "Gras", nl: "Gras" }
        ],
        correct: 0,
        explanation: {
          en: "Ducks are waterfowl with webbed feet and waterproof feathers that make them excellent swimmers in ponds, lakes, and farm water areas.",
          es: "Los patos son aves acuáticas con patas palmeadas y plumas impermeables que los hacen excelentes nadadores en estanques, lagos, y áreas de agua de granja.",
          de: "Enten sind Wasservögel mit Schwimmhäuten und wasserdichten Federn, die sie zu ausgezeichneten Schwimmern in Teichen, Seen und landwirtschaftlichen Wasserbereichen machen.",
          nl: "Eenden zijn watervogels met zwemvliezen en waterdichte veren die hen uitstekende zwemmers maken in vijvers, meren, en boerderij watergebieden."
        }
      },
      {
        question: {
          en: "What do we call a baby cow?",
          es: "¿Cómo llamamos a un bebé de vaca?",
          de: "Wie nennen wir ein Kalb?",
          nl: "Hoe noemen we een baby koe?"
        },
        options: [
          { en: "Calf", es: "Ternero", de: "Kalb", nl: "Kalf" },
          { en: "Foal", es: "Potro", de: "Fohlen", nl: "Veulen" },
          { en: "Lamb", es: "Cordero", de: "Lamm", nl: "Lam" },
          { en: "Kid", es: "Cabrito", de: "Kitz", nl: "Geitje" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What do we call a baby sheep?",
          es: "¿Cómo llamamos a un bebé de oveja?",
          de: "Wie nennen wir ein Schafbaby?",
          nl: "Hoe noemen we een baby schaap?"
        },
        options: [
          { en: "Lamb", es: "Cordero", de: "Lamm", nl: "Lam" },
          { en: "Calf", es: "Ternero", de: "Kalb", nl: "Kalf" },
          { en: "Piglet", es: "Lechón", de: "Ferkel", nl: "Biggetje" },
          { en: "Chick", es: "Pollito", de: "Küken", nl: "Kuiken" }
        ],
        correct: 0
      },
      {
        question: {
          en: "What do we call a baby pig?",
          es: "¿Cómo llamamos a un bebé de cerdo?",
          de: "Wie nennen wir ein Schweinebaby?",
          nl: "Hoe noemen we een baby varken?"
        },
        options: [
          { en: "Piglet", es: "Lechón", de: "Ferkel", nl: "Biggetje" },
          { en: "Lamb", es: "Cordero", de: "Lamm", nl: "Lam" },
          { en: "Calf", es: "Ternero", de: "Kalb", nl: "Kalf" },
          { en: "Duckling", es: "Patito", de: "Entenküken", nl: "Eendje" }
        ],
        correct: 0,
        explanation: {
          en: "A baby pig is called a piglet, and mother pigs can have litters of 6-12 piglets that nurse together for several weeks.",
          es: "Un bebé de cerdo se llama lechón, y las madres cerdas pueden tener camadas de 6-12 lechones que maman juntos por varias semanas.",
          de: "Ein Schweinebaby heißt Ferkel, und Mutterschweine können Würfe von 6-12 Ferkeln haben, die mehrere Wochen zusammen säugen.",
          nl: "Een baby varken wordt een biggetje genoemd, en moedervarkens kunnen nesten van 6-12 biggetjes hebben die enkele weken samen zogen."
        }
      },
      {
        question: {
          en: "What do we call a baby horse?",
          es: "¿Cómo llamamos a un bebé de caballo?",
          de: "Wie nennen wir ein Pferdebaby?",
          nl: "Hoe noemen we een baby paard?"
        },
        options: [
          { en: "Foal", es: "Potro", de: "Fohlen", nl: "Veulen" },
          { en: "Calf", es: "Ternero", de: "Kalb", nl: "Kalf" },
          { en: "Kid", es: "Cabrito", de: "Kitz", nl: "Geitje" },
          { en: "Chick", es: "Pollito", de: "Küken", nl: "Kuiken" }
        ],
        correct: 0,
        explanation: {
          en: "A baby horse is called a foal, and it can stand and walk within hours of being born, staying close to its mother for protection.",
          es: "Un bebé de caballo se llama potro, y puede pararse y caminar dentro de horas de nacer, manteniéndose cerca de su madre para protección.",
          de: "Ein Pferdebaby heißt Fohlen und kann innerhalb von Stunden nach der Geburt stehen und laufen, wobei es zum Schutz nahe bei seiner Mutter bleibt.",
          nl: "Een baby paard wordt een veulen genoemd, en het kan binnen uren na de geboorte staan en lopen, dicht bij zijn moeder blijvend voor bescherming."
        }
      },
      {
        question: {
          en: "What do farmers use to plow fields?",
          es: "¿Qué usan los granjeros para arar campos?",
          de: "Was verwenden Bauern zum Pflügen der Felder?",
          nl: "Wat gebruiken boeren om velden te ploegen?"
        },
        options: [
          { en: "Tractors", es: "Tractores", de: "Traktoren", nl: "Tractors" },
          { en: "Cars", es: "Autos", de: "Autos", nl: "Auto's" },
          { en: "Boats", es: "Barcos", de: "Boote", nl: "Boten" },
          { en: "Planes", es: "Aviones", de: "Flugzeuge", nl: "Vliegtuigen" }
        ],
        correct: 0,
        explanation: {
          en: "Tractors are powerful farm machines that pull plows and other equipment to prepare soil for planting, making farming work much easier and faster than using animals.",
          es: "Los tractores son máquinas agrícolas poderosas que tiran arados y otros equipos para preparar el suelo para plantar, haciendo el trabajo agrícola mucho más fácil y rápido que usar animales.",
          de: "Traktoren sind kraftvolle landwirtschaftliche Maschinen, die Pflüge und andere Geräte ziehen, um den Boden für die Aussaat vorzubereiten, wodurch die landwirtschaftliche Arbeit viel einfacher und schneller wird als mit Tieren.",
          nl: "Tractors zijn krachtige boerderijmachines die ploegen en andere apparatuur trekken om grond voor te bereiden voor het planten, waardoor boerderijwerk veel makkelijker en sneller wordt dan met dieren."
        }
      },
      {
        question: {
          en: "What do turkeys say?",
          es: "¿Qué dicen los pavos?",
          de: "Was sagen Truthähne?",
          nl: "Wat zeggen kalkoenen?"
        },
        options: [
          { en: "Gobble gobble", es: "Gluglú gluglú", de: "Kollern kollern", nl: "Klokkelen klokkelen" },
          { en: "Moo", es: "Mu", de: "Muh", nl: "Boe" },
          { en: "Oink", es: "Oinc", de: "Oink", nl: "Knor" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" }
        ],
        correct: 0,
        explanation: {
          en: "Turkeys make a distinctive 'gobble gobble' sound, especially male turkeys (called toms) who gobble loudly to communicate with other turkeys and show dominance.",
          es: "Los pavos hacen un sonido distintivo 'gluglú gluglú', especialmente los pavos machos (llamados machos) que gluglutean fuertemente para comunicarse con otros pavos y mostrar dominio.",
          de: "Truthähne machen ein charakteristisches 'Kollern kollern' Geräusch, besonders männliche Truthähne (Truthähne genannt), die laut kollern, um mit anderen Truthähnen zu kommunizieren und Dominanz zu zeigen.",
          nl: "Kalkoenen maken een kenmerkend 'klokkelen klokkelen' geluid, vooral mannelijke kalkoenen (katers genoemd) die luid klokkelen om te communiceren met andere kalkoenen en dominantie te tonen."
        }
      },
      {
        question: {
          en: "What do donkeys help farmers carry?",
          es: "¿Qué ayudan a cargar los burros a los granjeros?",
          de: "Was helfen Esel den Bauern zu tragen?",
          nl: "Wat helpen ezels boeren dragen?"
        },
        options: [
          { en: "Heavy loads", es: "Cargas pesadas", de: "Schwere Lasten", nl: "Zware lasten" },
          { en: "Nothing", es: "Nada", de: "Nichts", nl: "Niets" },
          { en: "Only water", es: "Solo agua", de: "Nur Wasser", nl: "Alleen water" },
          { en: "Only people", es: "Solo gente", de: "Nur Menschen", nl: "Alleen mensen" }
        ],
        correct: 0,
        explanation: {
          en: "Donkeys are strong, patient animals that have helped farmers carry heavy loads like grain, water, and supplies for thousands of years, especially in mountainous areas.",
          es: "Los burros son animales fuertes y pacientes que han ayudado a los granjeros a cargar cargas pesadas como grano, agua, y suministros por miles de años, especialmente en áreas montañosas.",
          de: "Esel sind starke, geduldige Tiere, die Bauern seit Tausenden von Jahren beim Tragen schwerer Lasten wie Getreide, Wasser und Vorräte helfen, besonders in bergigen Gebieten.",
          nl: "Ezels zijn sterke, geduldige dieren die boeren al duizenden jaren helpen met het dragen van zware lasten zoals graan, water, en voorraden, vooral in bergachtige gebieden."
        }
      },
      {
        question: {
          en: "Where do chickens lay their eggs?",
          es: "¿Dónde ponen sus huevos las gallinas?",
          de: "Wo legen Hühner ihre Eier?",
          nl: "Waar leggen kippen hun eieren?"
        },
        options: [
          { en: "In nests", es: "En nidos", de: "In Nestern", nl: "In nesten" },
          { en: "In water", es: "En agua", de: "Im Wasser", nl: "In water" },
          { en: "Underground", es: "Bajo tierra", de: "Unterirdisch", nl: "Ondergronds" },
          { en: "On tree branches", es: "En ramas de árboles", de: "Auf Baumästen", nl: "Op boomtakken" }
        ],
        correct: 0,
        explanation: {
          en: "Chickens lay their eggs in nests made of straw or soft materials where they feel safe and comfortable, usually in nesting boxes provided by farmers.",
          es: "Las gallinas ponen sus huevos en nidos hechos de paja o materiales suaves donde se sienten seguras y cómodas, usualmente en cajas de anidación proporcionadas por los granjeros.",
          de: "Hühner legen ihre Eier in Nester aus Stroh oder weichen Materialien, wo sie sich sicher und wohl fühlen, normalerweise in Nistkästen, die von Bauern bereitgestellt werden.",
          nl: "Kippen leggen hun eieren in nesten gemaakt van stro of zachte materialen waar ze zich veilig en comfortabel voelen, meestal in nestkasten die door boeren worden verstrekt."
        }
      },
      {
        question: {
          en: "What do llamas do when they're annoyed?",
          es: "¿Qué hacen las llamas cuando están molestas?",
          de: "Was machen Lamas wenn sie verärgert sind?",
          nl: "Wat doen lama's als ze geïrriteerd zijn?"
        },
        options: [
          { en: "Spit", es: "Escupen", de: "Spucken", nl: "Spugen" },
          { en: "Bark", es: "Ladran", de: "Bellen", nl: "Blaffen" },
          { en: "Fly away", es: "Vuelan", de: "Fliegen weg", nl: "Vliegen weg" },
          { en: "Hide", es: "Se esconden", de: "Verstecken sich", nl: "Verstoppen zich" }
        ],
        correct: 0,
        explanation: {
          en: "Llamas spit when they're annoyed, stressed, or defending themselves, projecting a mixture of saliva and stomach contents as a defense mechanism.",
          es: "Las llamas escupen cuando están molestas, estresadas, o defendiéndose, proyectando una mezcla de saliva y contenido estomacal como mecanismo de defensa.",
          de: "Lamas spucken wenn sie verärgert, gestresst oder sich verteidigen, und projizieren eine Mischung aus Speichel und Mageninhalt als Abwehrmechanismus.",
          nl: "Lama's spugen wanneer ze geïrriteerd, gestrest zijn of zichzelf verdedigen, waarbij ze een mengsel van speeksel en maaginhoud projecteren als verdedigingsmechanisme."
        }
      },
      {
        question: {
          en: "What do geese use to swim?",
          es: "¿Qué usan los gansos para nadar?",
          de: "Was verwenden Gänse zum Schwimmen?",
          nl: "Wat gebruiken ganzen om te zwemmen?"
        },
        options: [
          { en: "Webbed feet", es: "Patas palmeadas", de: "Schwimmhäute", nl: "Zwemvliezen" },
          { en: "Wings only", es: "Solo alas", de: "Nur Flügel", nl: "Alleen vleugels" },
          { en: "Their beak", es: "Su pico", de: "Ihr Schnabel", nl: "Hun snavel" },
          { en: "Their tail", es: "Su cola", de: "Ihr Schwanz", nl: "Hun staart" }
        ],
        correct: 0,
        explanation: {
          en: "Geese have webbed feet with skin connecting their toes, which act like paddles to help them swim efficiently through water and navigate ponds and lakes.",
          es: "Los gansos tienen patas palmeadas con piel conectando sus dedos, que actúan como remos para ayudarles a nadar eficientemente a través del agua y navegar estanques y lagos.",
          de: "Gänse haben Schwimmhäute mit Haut, die ihre Zehen verbindet, die wie Paddel wirken, um ihnen zu helfen, effizient durch Wasser zu schwimmen und Teiche und Seen zu navigieren.",
          nl: "Ganzen hebben zwemvliezen met huid die hun tenen verbindt, die werken als peddels om hen te helpen efficiënt door water te zwemmen en vijvers en meren te navigeren."
        }
      },
      {
        question: {
          en: "What do cows chew all day?",
          es: "¿Qué mastican las vacas todo el día?",
          de: "Was kauen Kühe den ganzen Tag?",
          nl: "Wat kauwen koeien de hele dag?"
        },
        options: [
          { en: "Cud (grass they swallowed)", es: "Bolo alimenticio (hierba que tragaron)", de: "Wiederkäuen (Gras das sie schluckten)", nl: "Herkauwsel (gras dat ze slikten)" },
          { en: "Bones", es: "Huesos", de: "Knochen", nl: "Botten" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" },
          { en: "Wood", es: "Madera", de: "Holz", nl: "Hout" }
        ],
        correct: 0,
        explanation: {
          en: "Cows chew cud, which is grass they've already swallowed that returns to their mouth for more chewing, helping them digest tough plant fibers efficiently.",
          es: "Las vacas mastican bolo alimenticio, que es hierba que ya han tragado que regresa a su boca para más masticación, ayudándoles a digerir fibras vegetales duras eficientemente.",
          de: "Kühe kauen Wiederkäu, das ist Gras, das sie bereits geschluckt haben und das in ihren Mund zurückkehrt zum weiteren Kauen, was ihnen hilft, zähe Pflanzenfasern effizient zu verdauen.",
          nl: "Koeien kauwen herkauwsel, dat is gras dat ze al hebben geslikt en dat terugkeert naar hun mond voor meer kauwen, wat hen helpt taaie plantenvezels efficiënt te verteren."
        }
      },
      {
        question: {
          en: "How many stomachs do cows have?",
          es: "¿Cuántos estómagos tienen las vacas?",
          de: "Wie viele Mägen haben Kühe?",
          nl: "Hoeveel magen hebben koeien?"
        },
        options: [
          { en: "Four", es: "Cuatro", de: "Vier", nl: "Vier" },
          { en: "One", es: "Uno", de: "Eins", nl: "Eén" },
          { en: "Two", es: "Dos", de: "Zwei", nl: "Twee" },
          { en: "Six", es: "Seis", de: "Sechs", nl: "Zes" }
        ],
        correct: 0,
        explanation: {
          en: "Cows have four stomachs (rumen, reticulum, omasum, and abomasum) that work together to break down grass and other plant materials through a complex digestive process.",
          es: "Las vacas tienen cuatro estómagos (rumen, retículo, omaso, y abomaso) que trabajan juntos para descomponer hierba y otros materiales vegetales a través de un proceso digestivo complejo.",
          de: "Kühe haben vier Mägen (Pansen, Netzmagen, Blättermagen und Labmagen), die zusammenarbeiten, um Gras und andere Pflanzenmaterialien durch einen komplexen Verdauungsprozess aufzubrechen.",
          nl: "Koeien hebben vier magen (pens, netmaag, boekmaag, en lebmaag) die samenwerken om gras en ander plantaardig materiaal af te breken door een complex spijsverteringsproces."
        }
      },
      {
        question: {
          en: "What do rabbits like to eat on farms?",
          es: "¿Qué les gusta comer a los conejos en las granjas?",
          de: "Was fressen Kaninchen gerne auf Bauernhöfen?",
          nl: "Wat eten konijnen graag op boerderijen?"
        },
        options: [
          { en: "Carrots and vegetables", es: "Zanahorias y verduras", de: "Karotten und Gemüse", nl: "Wortels en groenten" },
          { en: "Meat", es: "Carne", de: "Fleisch", nl: "Vlees" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Bread only", es: "Solo pan", de: "Nur Brot", nl: "Alleen brood" }
        ],
        correct: 0,
        explanation: {
          en: "Rabbits are herbivores that love eating carrots, vegetables, and fresh grass, which provide the nutrients they need for healthy growth and digestion.",
          es: "Los conejos son herbívoros que aman comer zanahorias, verduras, y hierba fresca, que proporcionan los nutrientes que necesitan para crecimiento saludable y digestión.",
          de: "Kaninchen sind Pflanzenfresser, die gerne Karotten, Gemüse und frisches Gras essen, die die Nährstoffe liefern, die sie für gesundes Wachstum und Verdauung benötigen.",
          nl: "Konijnen zijn herbivoren die graag wortels, groenten, en vers gras eten, wat de voedingsstoffen levert die ze nodig hebben voor gezonde groei en vertering."
        }
      },
      {
        question: {
          en: "What job do sheepdogs do on farms?",
          es: "¿Qué trabajo hacen los perros pastores en las granjas?",
          de: "Welche Arbeit machen Schäferhunde auf Bauernhöfen?",
          nl: "Welk werk doen herdershonden op boerderijen?"
        },
        options: [
          { en: "Help move sheep around", es: "Ayudan a mover las ovejas", de: "Helfen Schafe zu bewegen", nl: "Helpen schapen te verplaatsen" },
          { en: "Guard the house only", es: "Solo guardan la casa", de: "Nur das Haus bewachen", nl: "Alleen het huis bewaken" },
          { en: "Hunt mice", es: "Cazan ratones", de: "Jagen Mäuse", nl: "Jagen muizen" },
          { en: "Lay eggs", es: "Ponen huevos", de: "Legen Eier", nl: "Leggen eieren" }
        ],
        correct: 0,
        explanation: {
          en: "Sheepdogs are specially trained to help farmers move and control sheep herds, using their natural herding instincts to guide sheep safely to different areas.",
          es: "Los perros pastores están especialmente entrenados para ayudar a los granjeros a mover y controlar rebaños de ovejas, usando sus instintos naturales de pastoreo para guiar ovejas de manera segura a diferentes áreas.",
          de: "Schäferhunde sind speziell trainiert, um Bauern beim Bewegen und Kontrollieren von Schafherden zu helfen, wobei sie ihre natürlichen Hütungsinstinkte nutzen, um Schafe sicher zu verschiedenen Bereichen zu führen.",
          nl: "Herdershonden zijn speciaal getraind om boeren te helpen schapenkuddes te verplaatsen en controleren, waarbij ze hun natuurlijke hoede-instincten gebruiken om schapen veilig naar verschillende gebieden te leiden."
        }
      },
      {
        question: {
          en: "What do alpacas give us like sheep do?",
          es: "¿Qué nos dan las alpacas como las ovejas?",
          de: "Was geben uns Alpakas wie Schafe?",
          nl: "Wat geven alpaca's ons net zoals schapen?"
        },
        options: [
          { en: "Soft wool", es: "Lana suave", de: "Weiche Wolle", nl: "Zachte wol" },
          { en: "Milk", es: "Leche", de: "Milch", nl: "Melk" },
          { en: "Eggs", es: "Huevos", de: "Eier", nl: "Eieren" },
          { en: "Honey", es: "Miel", de: "Honig", nl: "Honing" }
        ],
        correct: 0,
        explanation: {
          en: "Alpacas produce incredibly soft, warm wool that is even finer than sheep's wool, making it highly prized for luxury clothing and blankets.",
          es: "Las alpacas producen lana increíblemente suave y cálida que es aún más fina que la lana de oveja, haciéndola muy apreciada para ropa de lujo y mantas.",
          de: "Alpakas produzieren unglaublich weiche, warme Wolle, die sogar feiner ist als Schafwolle, wodurch sie für Luxuskleidung und Decken sehr geschätzt wird.",
          nl: "Alpaca's produceren ongelooflijk zachte, warme wol die nog fijner is dan schapenwol, waardoor het zeer gewaardeerd wordt voor luxe kleding en dekens."
        }
      },
      {
        question: {
          en: "When do farmers usually milk cows?",
          es: "¿Cuándo ordeñan usualmente las vacas los granjeros?",
          de: "Wann melken Bauern normalerweise Kühe?",
          nl: "Wanneer melken boeren meestal koeien?"
        },
        options: [
          { en: "Morning and evening", es: "Mañana y tarde", de: "Morgen und Abend", nl: "Ochtend en avond" },
          { en: "Only at night", es: "Solo por la noche", de: "Nur nachts", nl: "Alleen 's nachts" },
          { en: "Only at noon", es: "Solo al mediodía", de: "Nur mittags", nl: "Alleen 's middags" },
          { en: "Once a week", es: "Una vez por semana", de: "Einmal pro Woche", nl: "Eén keer per week" }
        ],
        correct: 0,
        explanation: {
          en: "Farmers milk cows twice daily, in the morning and evening, because cows produce milk continuously and need to be milked regularly for their comfort and health.",
          es: "Los granjeros ordeñan vacas dos veces al día, en la mañana y la tarde, porque las vacas producen leche continuamente y necesitan ser ordeñadas regularmente para su comodidad y salud.",
          de: "Bauern melken Kühe zweimal täglich, morgens und abends, weil Kühe kontinuierlich Milch produzieren und regelmäßig gemolken werden müssen für ihr Wohlbefinden und ihre Gesundheit.",
          nl: "Boeren melken koeien tweemaal daags, 's ochtends en 's avonds, omdat koeien continu melk produceren en regelmatig gemolken moeten worden voor hun comfort en gezondheid."
        }
      },
      {
        question: {
          en: "What do we call the area where pigs live on a farm?",
          es: "¿Cómo llamamos al área donde viven los cerdos en una granja?",
          de: "Wie nennen wir den Bereich wo Schweine auf einem Bauernhof leben?",
          nl: "Hoe noemen we het gebied waar varkens op een boerderij leven?"
        },
        options: [
          { en: "Pig pen", es: "Chiquero", de: "Schweinestall", nl: "Varkenshok" },
          { en: "Chicken coop", es: "Gallinero", de: "Hühnerstall", nl: "Kippenhok" },
          { en: "Stable", es: "Establo", de: "Stall", nl: "Stal" },
          { en: "Pasture", es: "Pastizal", de: "Weide", nl: "Weiland" }
        ],
        correct: 0,
        explanation: {
          en: "A pig pen is a fenced area where pigs live safely on farms, providing them with shelter, food, and protection while keeping them contained in one area.",
          es: "Un chiquero es un área cercada donde los cerdos viven de manera segura en las granjas, proporcionándoles refugio, comida, y protección mientras los mantiene contenidos en un área.",
          de: "Ein Schweinestall ist ein eingezäunter Bereich, wo Schweine sicher auf Bauernhöfen leben, der ihnen Schutz, Futter und Schutz bietet, während sie in einem Bereich eingeschlossen bleiben.",
          nl: "Een varkenshok is een omheind gebied waar varkens veilig op boerderijen leven, wat hen onderdak, voedsel, en bescherming biedt terwijl ze opgesloten blijven in één gebied."
        }
      },
      {
        question: {
          en: "What do goats give us besides milk?",
          es: "¿Qué nos dan las cabras además de leche?",
          de: "Was geben uns Ziegen außer Milch?",
          nl: "Wat geven geiten ons behalve melk?"
        },
        options: [
          { en: "Cheese", es: "Queso", de: "Käse", nl: "Kaas" },
          { en: "Eggs", es: "Huevos", de: "Eier", nl: "Eieren" },
          { en: "Honey", es: "Miel", de: "Honig", nl: "Honing" },
          { en: "Feathers", es: "Plumas", de: "Federn", nl: "Veren" }
        ],
        correct: 0,
        explanation: {
          en: "Goat milk is used to make delicious cheese varieties that are often easier to digest than cow's milk cheese, providing a creamy and tangy flavor.",
          es: "La leche de cabra se usa para hacer deliciosas variedades de queso que a menudo son más fáciles de digerir que el queso de leche de vaca, proporcionando un sabor cremoso y ácido.",
          de: "Ziegenmilch wird verwendet, um köstliche Käsesorten herzustellen, die oft leichter verdaulich sind als Kuhmilchkäse und einen cremigen und würzigen Geschmack bieten.",
          nl: "Geitenmelk wordt gebruikt om heerlijke kaassoorten te maken die vaak makkelijker te verteren zijn dan koemelkkaas, wat een romige en pittige smaak geeft."
        }
      },
      {
        question: {
          en: "What do horses help farmers do?",
          es: "¿En qué ayudan los caballos a los granjeros?",
          de: "Wobei helfen Pferde den Bauern?",
          nl: "Waarmee helpen paarden boeren?"
        },
        options: [
          { en: "Pull heavy equipment", es: "Tirar equipo pesado", de: "Schwere Ausrüstung ziehen", nl: "Zware apparatuur trekken" },
          { en: "Lay eggs", es: "Poner huevos", de: "Eier legen", nl: "Eieren leggen" },
          { en: "Give milk", es: "Dar leche", de: "Milch geben", nl: "Melk geven" },
          { en: "Catch mice", es: "Atrapar ratones", de: "Mäuse fangen", nl: "Muizen vangen" }
        ],
        correct: 0,
        explanation: {
          en: "Horses are strong animals that help farmers pull heavy equipment like plows, harrows, and carts, making farm work easier before tractors were invented.",
          es: "Los caballos son animales fuertes que ayudan a los granjeros a tirar equipo pesado como arados, rastras, y carretas, haciendo el trabajo de granja más fácil antes de que se inventaran los tractores.",
          de: "Pferde sind starke Tiere, die Bauern beim Ziehen schwerer Geräte wie Pflüge, Eggen und Karren helfen, wodurch die landwirtschaftliche Arbeit einfacher wird, bevor Traktoren erfunden wurden.",
          nl: "Paarden zijn sterke dieren die boeren helpen zware apparatuur zoals ploegen, eggen, en karren te trekken, waardoor boerderijwerk makkelijker wordt voordat tractors werden uitgevonden."
        }
      },
      {
        question: {
          en: "What time do roosters usually crow?",
          es: "¿A qué hora suelen cantar los gallos?",
          de: "Wann krähen Hähne normalerweise?",
          nl: "Hoe laat kraaien hanen meestal?"
        },
        options: [
          { en: "Early morning", es: "Muy temprano en la mañana", de: "Früh am Morgen", nl: "Vroeg in de ochtend" },
          { en: "At noon", es: "Al mediodía", de: "Mittags", nl: "'s Middags" },
          { en: "At night", es: "Por la noche", de: "Nachts", nl: "'s Nachts" },
          { en: "Only in winter", es: "Solo en invierno", de: "Nur im Winter", nl: "Alleen in de winter" }
        ],
        correct: 0,
        explanation: {
          en: "Roosters crow at dawn (early morning) as their natural body clock responds to the first light of day, serving as nature's alarm clock for the farm.",
          es: "Los gallos cantan al amanecer (muy temprano en la mañana) ya que su reloj corporal natural responde a la primera luz del día, sirviendo como el despertador natural de la granja.",
          de: "Hähne krähen bei Tagesanbruch (früh am Morgen), da ihre natürliche Körperuhr auf das erste Tageslicht reagiert und als natürlicher Wecker für den Bauernhof dient.",
          nl: "Hanen kraaien bij dageraad (vroeg in de ochtend) omdat hun natuurlijke lichaamsklok reageert op het eerste daglicht, dienend als natuurlijke wekker voor de boerderij."
        }
      },
      {
        question: {
          en: "What do ducks like to eat in ponds?",
          es: "¿Qué les gusta comer a los patos en los estanques?",
          de: "Was fressen Enten gerne in Teichen?",
          nl: "Wat eten eenden graag in vijvers?"
        },
        options: [
          { en: "Water plants and small fish", es: "Plantas acuáticas y peces pequeños", de: "Wasserpflanzen und kleine Fische", nl: "Waterplanten en kleine visjes" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" },
          { en: "Only bread", es: "Solo pan", de: "Nur Brot", nl: "Alleen brood" },
          { en: "Tree bark", es: "Corteza de árbol", de: "Baumrinde", nl: "Boomschors" }
        ],
        correct: 0,
        explanation: {
          en: "Ducks are omnivores that eat water plants, algae, small fish, insects, and seeds found in ponds, using their bills to filter food from the water.",
          es: "Los patos son omnívoros que comen plantas acuáticas, algas, peces pequeños, insectos, y semillas encontradas en estanques, usando sus picos para filtrar comida del agua.",
          de: "Enten sind Allesfresser, die Wasserpflanzen, Algen, kleine Fische, Insekten und Samen in Teichen fressen und ihre Schnäbel verwenden, um Nahrung aus dem Wasser zu filtern.",
          nl: "Eenden zijn omnivoren die waterplanten, algen, kleine visjes, insecten, en zaden eten die in vijvers gevonden worden, waarbij ze hun snavels gebruiken om voedsel uit het water te filteren."
        }
      },
      {
        question: {
          en: "What do we use from chickens to make pillows soft?",
          es: "¿Qué usamos de las gallinas para hacer almohadas suaves?",
          de: "Was verwenden wir von Hühnern um Kissen weich zu machen?",
          nl: "Wat gebruiken we van kippen om kussens zacht te maken?"
        },
        options: [
          { en: "Feathers", es: "Plumas", de: "Federn", nl: "Veren" },
          { en: "Eggs", es: "Huevos", de: "Eier", nl: "Eieren" },
          { en: "Milk", es: "Leche", de: "Milch", nl: "Melk" },
          { en: "Beaks", es: "Picos", de: "Schnäbel", nl: "Snavels" }
        ],
        correct: 0,
        explanation: {
          en: "Chicken feathers are soft, lightweight, and provide excellent insulation, making them perfect for stuffing pillows and comforters to keep people warm and comfortable.",
          es: "Las plumas de gallina son suaves, ligeras, y proporcionan excelente aislamiento, haciéndolas perfectas para rellenar almohadas y edredones para mantener a la gente cálida y cómoda.",
          de: "Hühnerfedern sind weich, leicht und bieten ausgezeichnete Isolierung, wodurch sie perfekt zum Füllen von Kissen und Bettdecken sind, um Menschen warm und bequem zu halten.",
          nl: "Kippenveren zijn zacht, lichtgewicht, en bieden uitstekende isolatie, waardoor ze perfect zijn voor het vullen van kussens en dekbedden om mensen warm en comfortabel te houden."
        }
      },
      {
        question: {
          en: "What do we call a group of sheep?",
          es: "¿Cómo llamamos a un grupo de ovejas?",
          de: "Wie nennen wir eine Gruppe von Schafen?",
          nl: "Hoe noemen we een groep schapen?"
        },
        options: [
          { en: "Flock", es: "Rebaño", de: "Herde", nl: "Kudde" },
          { en: "Pack", es: "Manada", de: "Rudel", nl: "Roedel" },
          { en: "School", es: "Cardumen", de: "Schwarm", nl: "School" },
          { en: "Pride", es: "Manada", de: "Rudel", nl: "Troep" }
        ],
        correct: 0,
        explanation: {
          en: "A group of sheep is called a flock, and they naturally stay together for safety and comfort, following each other and their shepherd or sheepdog.",
          es: "Un grupo de ovejas se llama rebaño, y naturalmente se mantienen juntas por seguridad y comodidad, siguiéndose unas a otras y a su pastor o perro pastor.",
          de: "Eine Gruppe von Schafen heißt Herde, und sie bleiben natürlich zusammen für Sicherheit und Komfort, folgen einander und ihrem Hirten oder Schäferhund.",
          nl: "Een groep schapen wordt een kudde genoemd, en ze blijven natuurlijk bij elkaar voor veiligheid en comfort, elkaar en hun herder of herdershond volgend."
        }
      },
      {
        question: {
          en: "What do farmers put around fields to keep animals in?",
          es: "¿Qué ponen los granjeros alrededor de los campos para mantener los animales adentro?",
          de: "Was stellen Bauern um Felder auf um Tiere drinnen zu halten?",
          nl: "Wat zetten boeren rond velden om dieren binnen te houden?"
        },
        options: [
          { en: "Fences", es: "Cercas", de: "Zäune", nl: "Hekken" },
          { en: "Trees", es: "Árboles", de: "Bäume", nl: "Bomen" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" }
        ],
        correct: 0,
        explanation: {
          en: "Farmers build fences around fields to keep their animals safely contained, prevent them from wandering off, and protect crops from being eaten or trampled.",
          es: "Los granjeros construyen cercas alrededor de los campos para mantener sus animales contenidos de manera segura, evitar que se alejen, y proteger los cultivos de ser comidos o pisoteados.",
          de: "Bauern bauen Zäune um Felder, um ihre Tiere sicher einzuschließen, zu verhindern, dass sie weglaufen, und Ernten vor dem Gefressen- oder Zertrampeltwerden zu schützen.",
          nl: "Boeren bouwen hekken rond velden om hun dieren veilig opgesloten te houden, te voorkomen dat ze wegdwalen, en gewassen te beschermen tegen opgegeten of vertrapt worden."
        }
      },
      {
        question: {
          en: "What do we call someone who takes care of farm animals?",
          es: "¿Cómo llamamos a alguien que cuida animales de granja?",
          de: "Wie nennen wir jemanden der sich um Bauernhoftiere kümmert?",
          nl: "Hoe noemen we iemand die voor boerderijdieren zorgt?"
        },
        options: [
          { en: "Farmer", es: "Granjero", de: "Bauer", nl: "Boer" },
          { en: "Doctor", es: "Doctor", de: "Arzt", nl: "Dokter" },
          { en: "Teacher", es: "Maestro", de: "Lehrer", nl: "Leraar" },
          { en: "Chef", es: "Chef", de: "Koch", nl: "Kok" }
        ],
        correct: 0,
        explanation: {
          en: "A farmer is someone who takes care of farm animals, providing them with food, water, shelter, and medical care while managing their daily needs and well-being.",
          es: "Un granjero es alguien que cuida animales de granja, proporcionándoles comida, agua, refugio, y cuidado médico mientras maneja sus necesidades diarias y bienestar.",
          de: "Ein Bauer ist jemand, der sich um Bauernhoftiere kümmert, ihnen Futter, Wasser, Unterkunft und medizinische Versorgung bietet, während er ihre täglichen Bedürfnisse und ihr Wohlbefinden verwaltet.",
          nl: "Een boer is iemand die voor boerderijdieren zorgt, hen voedsel, water, onderdak, en medische zorg geeft terwijl hij hun dagelijkse behoeften en welzijn beheert."
        }
      },
      {
        question: {
          en: "What season do many farm animals have their babies?",
          es: "¿En qué estación tienen sus bebés muchos animales de granja?",
          de: "In welcher Jahreszeit bekommen viele Bauernhoftiere ihre Babys?",
          nl: "In welk seizoen krijgen veel boerderijdieren hun baby's?"
        },
        options: [
          { en: "Spring", es: "Primavera", de: "Frühling", nl: "Lente" },
          { en: "Winter", es: "Invierno", de: "Winter", nl: "Winter" },
          { en: "Summer", es: "Verano", de: "Sommer", nl: "Zomer" },
          { en: "Fall", es: "Otoño", de: "Herbst", nl: "Herfst" }
        ],
        correct: 0,
        explanation: {
          en: "Many farm animals have their babies in spring when the weather is warmer, grass is growing, and there's plenty of food available for mothers and their young.",
          es: "Muchos animales de granja tienen sus bebés en primavera cuando el clima es más cálido, la hierba está creciendo, y hay mucha comida disponible para las madres y sus crías.",
          de: "Viele Bauernhoftiere bekommen ihre Babys im Frühling, wenn das Wetter wärmer ist, Gras wächst und viel Nahrung für Mütter und ihre Jungen verfügbar ist.",
          nl: "Veel boerderijdieren krijgen hun baby's in de lente wanneer het weer warmer is, gras groeit, en er veel voedsel beschikbaar is voor moeders en hun jongen."
        }
      },
      {
        question: {
          en: "What do sheep do when it gets cold?",
          es: "¿Qué hacen las ovejas cuando hace frío?",
          de: "Was machen Schafe wenn es kalt wird?",
          nl: "Wat doen schapen als het koud wordt?"
        },
        options: [
          { en: "Grow thicker wool", es: "Les crece lana más gruesa", de: "Bekommen dickere Wolle", nl: "Krijgen dikkere wol" },
          { en: "Fly south", es: "Vuelan al sur", de: "Fliegen nach Süden", nl: "Vliegen naar het zuiden" },
          { en: "Hide underground", es: "Se esconden bajo tierra", de: "Verstecken sich unterirdisch", nl: "Verstoppen zich ondergronds" },
          { en: "Change colors", es: "Cambian de color", de: "Wechseln Farben", nl: "Veranderen van kleur" }
        ],
        correct: 0,
        explanation: {
          en: "Sheep naturally grow thicker, denser wool as winter approaches to stay warm, similar to how other animals grow winter coats to survive cold weather.",
          es: "Las ovejas naturalmente desarrollan lana más gruesa y densa cuando se acerca el invierno para mantenerse cálidas, similar a cómo otros animales desarrollan pelajes de invierno para sobrevivir el clima frío.",
          de: "Schafe wachsen natürlich dickere, dichtere Wolle, wenn der Winter naht, um warm zu bleiben, ähnlich wie andere Tiere Wintermäntel wachsen lassen, um kaltes Wetter zu überleben.",
          nl: "Schapen groeien natuurlijk dikkere, dichtere wol wanneer de winter nadert om warm te blijven, vergelijkbaar met hoe andere dieren wintervachten groeien om koud weer te overleven."
        }
      },
      {
        question: {
          en: "What do peacocks show off to look beautiful?",
          es: "¿Qué muestran los pavos reales para verse hermosos?",
          de: "Was zeigen Pfauen um schön auszusehen?",
          nl: "Wat laten pauwen zien om er mooi uit te zien?"
        },
        options: [
          { en: "Their colorful tail feathers", es: "Sus plumas de cola coloridas", de: "Ihre bunten Schwanzfedern", nl: "Hun kleurrijke staartveren" },
          { en: "Their wings", es: "Sus alas", de: "Ihre Flügel", nl: "Hun vleugels" },
          { en: "Their feet", es: "Sus pies", de: "Ihre Füße", nl: "Hun poten" },
          { en: "Their beak", es: "Su pico", de: "Ihren Schnabel", nl: "Hun snavel" }
        ],
        correct: 0,
        explanation: {
          en: "Male peacocks display their magnificent, colorful tail feathers in a fan shape to attract female peacocks during mating season, showing off their beauty and health.",
          es: "Los pavos reales machos despliegan sus magníficas plumas de cola coloridas en forma de abanico para atraer pavos reales hembras durante la temporada de apareamiento, mostrando su belleza y salud.",
          de: "Männliche Pfauen zeigen ihre prächtigen, bunten Schwanzfedern in Fächerform, um weibliche Pfauen während der Paarungszeit anzulocken und ihre Schönheit und Gesundheit zu zeigen.",
          nl: "Mannelijke pauwen tonen hun prachtige, kleurrijke staartveren in een waaiervorm om vrouwelijke pauwen aan te trekken tijdens het paarseizoen, hun schoonheid en gezondheid tonend."
        }
      },
      {
        question: {
          en: "What do farmers grow to feed their animals in winter?",
          es: "¿Qué cultivan los granjeros para alimentar a sus animales en invierno?",
          de: "Was bauen Bauern an um ihre Tiere im Winter zu füttern?",
          nl: "Wat verbouwen boeren om hun dieren in de winter te voeren?"
        },
        options: [
          { en: "Hay", es: "Heno", de: "Heu", nl: "Hooi" },
          { en: "Flowers", es: "Flores", de: "Blumen", nl: "Bloemen" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" },
          { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" }
        ],
        correct: 0,
        explanation: {
          en: "Farmers grow and harvest hay (dried grass) during summer to store as feed for their animals during winter when fresh grass isn't available.",
          es: "Los granjeros cultivan y cosechan heno (hierba seca) durante el verano para almacenar como alimento para sus animales durante el invierno cuando la hierba fresca no está disponible.",
          de: "Bauern züchten und ernten Heu (getrocknetes Gras) im Sommer, um es als Futter für ihre Tiere im Winter zu lagern, wenn frisches Gras nicht verfügbar ist.",
          nl: "Boeren verbouwen en oogsten hooi (gedroogd gras) tijdens de zomer om op te slaan als voer voor hun dieren tijdens de winter wanneer vers gras niet beschikbaar is."
        }
      },
      {
        question: {
          en: "What do guinea pigs need to stay healthy?",
          es: "¿Qué necesitan los conejillos de indias para mantenerse sanos?",
          de: "Was brauchen Meerschweinchen um gesund zu bleiben?",
          nl: "Wat hebben cavia's nodig om gezond te blijven?"
        },
        options: [
          { en: "Fresh vegetables and hay", es: "Verduras frescas y heno", de: "Frisches Gemüse und Heu", nl: "Verse groenten en hooi" },
          { en: "Only meat", es: "Solo carne", de: "Nur Fleisch", nl: "Alleen vlees" },
          { en: "Only water", es: "Solo agua", de: "Nur Wasser", nl: "Alleen water" },
          { en: "Only bread", es: "Solo pan", de: "Nur Brot", nl: "Alleen brood" }
        ],
        correct: 0,
        explanation: {
          en: "Guinea pigs need fresh vegetables like carrots, lettuce, and hay for proper nutrition and vitamin C, which they cannot produce themselves and must get from their diet.",
          es: "Los conejillos de indias necesitan verduras frescas como zanahorias, lechuga, y heno para nutrición adecuada y vitamina C, que no pueden producir por sí mismos y deben obtener de su dieta.",
          de: "Meerschweinchen brauchen frisches Gemüse wie Karotten, Salat und Heu für ordentliche Ernährung und Vitamin C, das sie nicht selbst produzieren können und aus ihrer Nahrung bekommen müssen.",
          nl: "Cavia's hebben verse groenten zoals wortels, sla, en hooi nodig voor goede voeding en vitamine C, die ze niet zelf kunnen produceren en uit hun voeding moeten krijgen."
        }
      },
      {
        question: {
          en: "What do bees on farms help plants do?",
          es: "¿En qué ayudan las abejas de las granjas a las plantas?",
          de: "Wobei helfen Bienen auf Bauernhöfen den Pflanzen?",
          nl: "Waarmee helpen bijen op boerderijen planten?"
        },
        options: [
          { en: "Make seeds by pollinating", es: "Hacer semillas polinizando", de: "Samen machen durch Bestäubung", nl: "Zaden maken door bestuiving" },
          { en: "Grow taller", es: "Crecer más altas", de: "Größer wachsen", nl: "Groter groeien" },
          { en: "Change colors", es: "Cambiar de color", de: "Farben wechseln", nl: "Van kleur veranderen" },
          { en: "Make noise", es: "Hacer ruido", de: "Lärm machen", nl: "Geluid maken" }
        ],
        correct: 0,
        explanation: {
          en: "Bees help plants make seeds through pollination by carrying pollen from flower to flower as they collect nectar, which is essential for plant reproduction and food production.",
          es: "Las abejas ayudan a las plantas a hacer semillas a través de la polinización llevando polen de flor en flor mientras recolectan néctar, lo cual es esencial para la reproducción de plantas y producción de alimentos.",
          de: "Bienen helfen Pflanzen, Samen durch Bestäubung zu machen, indem sie Pollen von Blüte zu Blüte tragen, während sie Nektar sammeln, was für die Pflanzenreproduktion und Nahrungsproduktion wesentlich ist.",
          nl: "Bijen helpen planten zaden te maken door bestuiving door stuifmeel van bloem naar bloem te dragen terwijl ze nectar verzamelen, wat essentieel is voor plantenvermeerdering en voedselproductie."
        }
      },
      {
        question: {
          en: "What do we call baby ducks?",
          es: "¿Cómo llamamos a los bebés pato?",
          de: "Wie nennen wir Entenbabys?",
          nl: "Hoe noemen we baby eenden?"
        },
        options: [
          { en: "Ducklings", es: "Patitos", de: "Entenküken", nl: "Eendjes" },
          { en: "Chicks", es: "Pollitos", de: "Küken", nl: "Kuikens" },
          { en: "Calves", es: "Terneros", de: "Kälber", nl: "Kalveren" },
          { en: "Lambs", es: "Corderos", de: "Lämmer", nl: "Lammeren" }
        ],
        correct: 0,
        explanation: {
          en: "Baby ducks are called ducklings, and they are born with soft, fluffy feathers and can swim shortly after hatching, following their mother closely for protection.",
          es: "Los bebés pato se llaman patitos, y nacen con plumas suaves y esponjosas y pueden nadar poco después de nacer, siguiendo a su madre de cerca para protección.",
          de: "Entenbabys heißen Entenkukken und werden mit weichen, flauschigen Federn geboren und können kurz nach dem Schlüpfen schwimmen, folgen ihrer Mutter eng zum Schutz.",
          nl: "Baby eenden worden eendjes genoemd, en ze worden geboren met zachte, pluizige veren en kunnen kort na het uitkomen zwemmen, hun moeder dicht volgend voor bescherming."
        }
      },
      {
        question: {
          en: "What do cats on farms help control?",
          es: "¿Qué ayudan a controlar los gatos en las granjas?",
          de: "Was helfen Katzen auf Bauernhöfen zu kontrollieren?",
          nl: "Wat helpen katten op boerderijen controleren?"
        },
        options: [
          { en: "Mice and rats", es: "Ratones y ratas", de: "Mäuse und Ratten", nl: "Muizen en ratten" },
          { en: "Cows", es: "Vacas", de: "Kühe", nl: "Koeien" },
          { en: "Chickens", es: "Gallinas", de: "Hühner", nl: "Kippen" },
          { en: "Sheep", es: "Ovejas", de: "Schafe", nl: "Schapen" }
        ],
        correct: 0,
        explanation: {
          en: "Farm cats are excellent hunters that help control mice and rat populations, protecting stored grain and feed from being eaten or contaminated by rodents.",
          es: "Los gatos de granja son excelentes cazadores que ayudan a controlar las poblaciones de ratones y ratas, protegiendo el grano almacenado y el alimento de ser comido o contaminado por roedores.",
          de: "Hofkatzen sind ausgezeichnete Jäger, die helfen, Mäuse- und Rattenpopulationen zu kontrollieren und gelagertes Getreide und Futter vor dem Gefressen- oder Kontaminiertwerden durch Nagetiere zu schützen.",
          nl: "Boerderijkatten zijn uitstekende jagers die helpen muizen- en rattenpopulaties te controleren, opgeslagen graan en voer beschermend tegen opgegeten of besmet worden door knaagdieren."
        }
      },
      {
        question: {
          en: "What happens to wool after it's cut from sheep?",
          es: "¿Qué pasa con la lana después de cortarla de las ovejas?",
          de: "Was passiert mit Wolle nachdem sie von Schafen geschnitten wurde?",
          nl: "Wat gebeurt er met wol nadat het van schapen geknipt is?"
        },
        options: [
          { en: "It's made into clothes", es: "Se convierte en ropa", de: "Es wird zu Kleidung gemacht", nl: "Het wordt kleding gemaakt" },
          { en: "It's thrown away", es: "Se tira", de: "Es wird weggeworfen", nl: "Het wordt weggegooid" },
          { en: "It becomes food", es: "Se convierte en comida", de: "Es wird zu Nahrung", nl: "Het wordt voedsel" },
          { en: "It grows back immediately", es: "Vuelve a crecer inmediatamente", de: "Es wächst sofort nach", nl: "Het groeit meteen terug" }
        ],
        correct: 0,
        explanation: {
          en: "After wool is sheared from sheep, it's cleaned, spun into yarn, and woven into warm clothing like sweaters, blankets, and coats that keep people comfortable.",
          es: "Después de que la lana es esquilada de las ovejas, se limpia, se hila en hilo, y se teje en ropa abrigada como suéteres, mantas, y abrigos que mantienen a la gente cómoda.",
          de: "Nachdem Wolle von Schafen geschoren wurde, wird sie gereinigt, zu Garn gesponnen und zu warmer Kleidung wie Pullovern, Decken und Mänteln gewebt, die Menschen warm halten.",
          nl: "Nadat wol van schapen geschoren is, wordt het schoongemaakt, tot garen gesponnen, en geweven tot warme kleding zoals truien, dekens, en jassen die mensen comfortabel houden."
        }
      },
      {
        question: {
          en: "What do farmers use to collect chicken eggs?",
          es: "¿Qué usan los granjeros para recoger huevos de gallina?",
          de: "Was verwenden Bauern um Hühnereier zu sammeln?",
          nl: "Wat gebruiken boeren om kippeneieren te verzamelen?"
        },
        options: [
          { en: "Baskets", es: "Canastas", de: "Körbe", nl: "Manden" },
          { en: "Shovels", es: "Palas", de: "Schaufeln", nl: "Scheppen" },
          { en: "Nets", es: "Redes", de: "Netze", nl: "Netten" },
          { en: "Ropes", es: "Cuerdas", de: "Seile", nl: "Touwen" }
        ],
        correct: 0,
        explanation: {
          en: "Farmers use baskets to gently collect chicken eggs from nests, as baskets are lightweight, easy to carry, and protect the fragile eggs from breaking.",
          es: "Los granjeros usan canastas para recoger gentilmente huevos de gallina de los nidos, ya que las canastas son ligeras, fáciles de cargar, y protegen los huevos frágiles de romperse.",
          de: "Bauern verwenden Körbe, um Hühnereier vorsichtig aus Nestern zu sammeln, da Körbe leicht, einfach zu tragen sind und die zerbrechlichen Eier vor dem Zerbrechen schützen.",
          nl: "Boeren gebruiken manden om kippeneieren voorzichtig uit nesten te verzamelen, omdat manden lichtgewicht, makkelijk te dragen zijn, en de breekbare eieren beschermen tegen breken."
        }
      },
      {
        question: {
          en: "How do farmers keep their animals safe at night?",
          es: "¿Cómo mantienen seguros a sus animales los granjeros por la noche?",
          de: "Wie halten Bauern ihre Tiere nachts sicher?",
          nl: "Hoe houden boeren hun dieren 's nachts veilig?"
        },
        options: [
          { en: "Put them in barns and pens", es: "Los ponen en graneros y corrales", de: "Bringen sie in Scheunen und Gehege", nl: "Zetten ze in schuren en hokken" },
          { en: "Let them roam free", es: "Los dejan vagar libremente", de: "Lassen sie frei herumlaufen", nl: "Laten ze vrij rondlopen" },
          { en: "Tie them to trees", es: "Los atan a árboles", de: "Binden sie an Bäume", nl: "Binden ze aan bomen" },
          { en: "Leave them in the fields", es: "Los dejan en los campos", de: "Lassen sie auf den Feldern", nl: "Laten ze in de velden" }
        ],
        correct: 0,
        explanation: {
          en: "Farmers keep animals safe at night by housing them in barns and pens, protecting them from predators, bad weather, and ensuring they don't wander off.",
          es: "Los granjeros mantienen seguros a los animales por la noche alojándolos en graneros y corrales, protegiéndolos de depredadores, mal tiempo, y asegurando que no se alejen.",
          de: "Bauern halten Tiere nachts sicher, indem sie sie in Scheunen und Gehegen unterbringen, sie vor Raubtieren, schlechtem Wetter schützen und sicherstellen, dass sie nicht weglaufen.",
          nl: "Boeren houden dieren 's nachts veilig door ze in schuren en hokken onder te brengen, hen beschermend tegen roofdieren, slecht weer, en ervoor zorgend dat ze niet wegdwalen."
        }
      },
      {
        question: {
          en: "What do we call a young female horse?",
          es: "¿Cómo llamamos a una yegua joven?",
          de: "Wie nennen wir eine junge Stute?",
          nl: "Hoe noemen we een jonge merrie?"
        },
        options: [
          { en: "Filly", es: "Potranca", de: "Stutfohlen", nl: "Merrieveulen" },
          { en: "Colt", es: "Potro", de: "Hengstfohlen", nl: "Hengstveulen" },
          { en: "Mare", es: "Yegua", de: "Stute", nl: "Merrie" },
          { en: "Stallion", es: "Semental", de: "Hengst", nl: "Hengst" }
        ],
        correct: 0,
        explanation: {
          en: "A young female horse is called a filly, while a young male horse is called a colt, and they grow into mares (adult females) and stallions (adult males).",
          es: "Una yegua joven se llama potranca, mientras que un caballo joven macho se llama potro, y crecen para convertirse en yeguas (hembras adultas) y sementales (machos adultos).",
          de: "Eine junge Stute heißt Stutfohlen, während ein junger Hengst Hengstfohlen heißt, und sie wachsen zu Stuten (erwachsene Weibchen) und Hengsten (erwachsene Männchen) heran.",
          nl: "Een jonge merrie wordt een merrieveulen genoemd, terwijl een jonge mannelijke paard een hengstveulen wordt genoemd, en ze groeien op tot merries (volwassen vrouwtjes) en hengsten (volwassen mannetjes)."
        }
      },
      {
        question: {
          en: "What do farm dogs help farmers do with sheep?",
          es: "¿En qué ayudan los perros de granja a los granjeros con las ovejas?",
          de: "Wobei helfen Hofhunde den Bauern bei Schafen?",
          nl: "Waarmee helpen boerderijhonden boeren met schapen?"
        },
        options: [
          { en: "Herd them together", es: "Las reúnen en grupo", de: "Sie zusammentreiben", nl: "Ze bij elkaar drijven" },
          { en: "Feed them", es: "Las alimentan", de: "Sie füttern", nl: "Ze voeren" },
          { en: "Shear their wool", es: "Esquilan su lana", de: "Ihre Wolle scheren", nl: "Hun wol scheren" },
          { en: "Count them", es: "Las cuentan", de: "Sie zählen", nl: "Ze tellen" }
        ],
        correct: 0,
        explanation: {
          en: "Farm dogs, especially border collies and other herding breeds, use their natural instincts to gather scattered sheep and guide them together into groups for easier management.",
          es: "Los perros de granja, especialmente border collies y otras razas pastoras, usan sus instintos naturales para reunir ovejas dispersas y guiarlas juntas en grupos para un manejo más fácil.",
          de: "Hofhunde, besonders Border Collies und andere Hüterassen, nutzen ihre natürlichen Instinkte, um verstreute Schafe zu sammeln und sie zusammen in Gruppen für einfacheres Management zu führen.",
          nl: "Boerderijhonden, vooral border collies en andere hoedebasen, gebruiken hun natuurlijke instincten om verspreide schapen te verzamelen en ze samen in groepen te leiden voor makkelijker beheer."
        }
      },
      {
        question: {
          en: "What do farmers collect from chickens every day?",
          es: "¿Qué recolectan los granjeros de las gallinas todos los días?",
          de: "Was sammeln Bauern jeden Tag von Hühnern?",
          nl: "Wat verzamelen boeren elke dag van kippen?"
        },
        options: [
          { en: "Eggs", es: "Huevos", de: "Eier", nl: "Eieren" },
          { en: "Feathers", es: "Plumas", de: "Federn", nl: "Veren" },
          { en: "Rocks", es: "Piedras", de: "Steine", nl: "Stenen" },
          { en: "Leaves", es: "Hojas", de: "Blätter", nl: "Bladeren" }
        ],
        correct: 0,
        explanation: {
          en: "Farmers collect fresh eggs from chickens every day! Hens lay eggs regularly, and farmers gather them to sell at markets or use in cooking. Farm-fresh eggs are delicious and nutritious!",
          es: "¡Los granjeros recolectan huevos frescos de las gallinas todos los días! Las gallinas ponen huevos regularmente, y los granjeros los reúnen para vender en mercados o usar en cocina. ¡Los huevos frescos de granja son deliciosos y nutritivos!",
          de: "Bauern sammeln jeden Tag frische Eier von Hühnern! Hennen legen regelmäßig Eier, und Bauern sammeln sie, um sie auf Märkten zu verkaufen oder beim Kochen zu verwenden. Frische Bauernhof-Eier sind köstlich und nahrhaft!",
          nl: "Boeren verzamelen elke dag verse eieren van kippen! Hennen leggen regelmatig eieren, en boeren verzamelen ze om te verkopen op markten of te gebruiken bij het koken. Verse boerderij-eieren zijn heerlijk en voedzaam!"
        }
      },
      {
        question: {
          en: "What do farm goats like to climb on?",
          es: "¿En qué les gusta trepar a las cabras de granja?",
          de: "Worauf klettern Hofziegen gerne?",
          nl: "Waarop klimmen boerderijgeiten graag?"
        },
        options: [
          { en: "Rocks and logs", es: "Rocas y troncos", de: "Felsen und Stämme", nl: "Rotsen en boomstammen" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Mud", es: "Lodo", de: "Schlamm", nl: "Modder" },
          { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" }
        ],
        correct: 0,
        explanation: {
          en: "Farm goats are natural climbers! They love to jump and climb on rocks, logs, stumps, and even playground equipment. Their hooves are specially designed to grip surfaces, making them excellent climbers!",
          es: "¡Las cabras de granja son trepadoras naturales! Les encanta saltar y trepar en rocas, troncos, tocones, e incluso equipos de juegos. ¡Sus pezuñas están especialmente diseñadas para agarrar superficies, haciéndolas excelentes trepadoras!",
          de: "Hofziegen sind natürliche Kletterer! Sie lieben es, auf Felsen, Stämmen, Baumstümpfen und sogar Spielplatzgeräten zu springen und zu klettern. Ihre Hufe sind speziell dafür ausgelegt, Oberflächen zu greifen, was sie zu ausgezeichneten Kletterern macht!",
          nl: "Boerderijgeiten zijn natuurlijke klimmers! Ze houden ervan om te springen en klimmen op rotsen, boomstammen, stronken, en zelfs speeltoestellen. Hun hoeven zijn speciaal ontworpen om oppervlakken te grijpen, waardoor ze uitstekende klimmers zijn!"
        }
      },
      {
        question: {
          en: "Which farm animal gives us wool for making clothes?",
          es: "¿Qué animal de granja nos da lana para hacer ropa?",
          de: "Welches Bauernhoftier gibt uns Wolle zum Kleidermachen?",
          nl: "Welk boerderijdier geeft ons wol voor het maken van kleding?"
        },
        options: [
          { en: "Sheep", es: "Ovejas", de: "Schafe", nl: "Schapen" },
          { en: "Cows", es: "Vacas", de: "Kühe", nl: "Koeien" },
          { en: "Chickens", es: "Gallinas", de: "Hühner", nl: "Kippen" },
          { en: "Ducks", es: "Patos", de: "Enten", nl: "Eenden" }
        ],
        correct: 0,
        explanation: {
          en: "Sheep provide us with wool! Farmers carefully shear (cut) the sheep's thick, fluffy coat once a year. The wool is then cleaned, spun into yarn, and woven into warm clothes like sweaters and blankets!",
          es: "¡Las ovejas nos proporcionan lana! Los granjeros cuidadosamente esquilan (cortan) el pelaje grueso y esponjoso de las ovejas una vez al año. ¡Luego la lana se limpia, se hila en hilo, y se teje en ropa abrigada como suéteres y mantas!",
          de: "Schafe geben uns Wolle! Bauern scheren (schneiden) vorsichtig das dicke, flauschige Fell der Schafe einmal im Jahr. Die Wolle wird dann gereinigt, zu Garn gesponnen und zu warmer Kleidung wie Pullover und Decken gewebt!",
          nl: "Schapen geven ons wol! Boeren scheren (knippen) voorzichtig de dikke, pluizige vacht van de schapen één keer per jaar. De wol wordt dan schoongemaakt, gesponnen tot garen, en geweven tot warme kleding zoals truien en dekens!"
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('warm-up/animals', level9);
  }
})();