// Animals - Level 2: Animal Homes & Habitats
(function() {
  const level2 = {
    name: {
      en: "Animal Homes & Habitats",
      es: "Hogares y Hábitats de Animales",
      de: "Tierwohnungen und Lebensräume",
      nl: "Dierenhuizen en Leefgebieden"
    },
    questions: [
      {
        question: {
          en: "Where do polar bears live?",
          es: "¿Dónde viven los osos polares?",
          de: "Wo leben Eisbären?",
          nl: "Waar leven ijsberen?"
        },
        options: [
          { en: "Arctic", es: "Ártico", de: "Arktis", nl: "Noordpool" },
          { en: "Desert", es: "Desierto", de: "Wüste", nl: "Woestijn" },
          { en: "Jungle", es: "Selva", de: "Dschungel", nl: "Jungle" },
          { en: "Ocean", es: "Océano", de: "Ozean", nl: "Oceaan" }
        ],
        correct: 0,
        explanation: {
          en: "Polar bears live in the Arctic region, where they have adapted to extremely cold temperatures and hunt seals on sea ice.",
          es: "Los osos polares viven en la región Ártica, donde se han adaptado a temperaturas extremadamente frías y cazan focas en el hielo marino.",
          de: "Eisbären leben in der Arktis, wo sie sich an extrem kalte Temperaturen angepasst haben und auf Meereis Robben jagen.",
          nl: "IJsberen leven in het Noordpoolgebied, waar ze zich hebben aangepast aan extreem koude temperaturen en zeehonden jagen op zee-ijs."
        }
      },
      {
        question: {
          en: "What do we call a bear's home?",
          es: "¿Cómo llamamos al hogar de un oso?",
          de: "Wie nennen wir das Zuhause eines Bären?",
          nl: "Hoe noemen we het huis van een beer?"
        },
        options: [
          { en: "Den", es: "Guarida", de: "Höhle", nl: "Hol" },
          { en: "Nest", es: "Nido", de: "Nest", nl: "Nest" },
          { en: "Burrow", es: "Madriguera", de: "Bau", nl: "Hol" },
          { en: "Cave", es: "Cueva", de: "Höhle", nl: "Grot" }
        ],
        correct: 0,
        explanation: {
          en: "A bear's home is called a den, which can be a cave, hollow tree, or burrow where they rest and hibernate during winter months.",
          es: "El hogar de un oso se llama guarida, que puede ser una cueva, árbol hueco o madriguera donde descansan e hibernan durante los meses de invierno.",
          de: "Das Zuhause eines Bären wird Höhle genannt, die eine Höhle, ein hohler Baum oder ein Bau sein kann, wo sie sich ausruhen und während der Wintermonate Winterschlaf halten.",
          nl: "Het huis van een beer wordt een hol genoemd, wat een grot, holle boom of hol kan zijn waar ze rusten en overwinteren tijdens de wintermaanden."
        }
      },
      {
        question: {
          en: "Where do camels live?",
          es: "¿Dónde viven los camellos?",
          de: "Wo leben Kamele?",
          nl: "Waar leven kamelen?"
        },
        options: [
          { en: "Desert", es: "Desierto", de: "Wüste", nl: "Woestijn" },
          { en: "Forest", es: "Bosque", de: "Wald", nl: "Bos" },
          { en: "Ocean", es: "Océano", de: "Ozean", nl: "Oceaan" },
          { en: "Mountains", es: "Montañas", de: "Berge", nl: "Bergen" }
        ],
        correct: 0,
        explanation: {
          en: "Camels are perfectly adapted to desert life with their humps for fat storage, thick fur to protect from sand, and ability to go long periods without water.",
          es: "Los camellos están perfectamente adaptados a la vida del desierto con sus jorobas para almacenar grasa, pelaje grueso para protegerse de la arena y capacidad de pasar largos períodos sin agua.",
          de: "Kamele sind perfekt an das Wüstenleben angepasst mit ihren Höckern für Fettspeicherung, dickem Fell zum Schutz vor Sand und der Fähigkeit, lange Zeiten ohne Wasser auszukommen.",
          nl: "Kamelen zijn perfect aangepast aan het woestijnleven met hun bulten voor vetopslag, dikke vacht ter bescherming tegen zand en het vermogen om lange perioden zonder water door te brengen."
        }
      },
      {
        question: {
          en: "Where do birds lay their eggs?",
          es: "¿Dónde ponen sus huevos los pájaros?",
          de: "Wo legen Vögel ihre Eier?",
          nl: "Waar leggen vogels hun eieren?"
        },
        options: [
          { en: "Nests", es: "Nidos", de: "Nester", nl: "Nesten" },
          { en: "Holes", es: "Agujeros", de: "Löcher", nl: "Gaten" },
          { en: "Houses", es: "Casas", de: "Häuser", nl: "Huizen" },
          { en: "Caves", es: "Cuevas", de: "Höhlen", nl: "Grotten" }
        ],
        correct: 0,
        explanation: {
          en: "Birds build nests to lay their eggs and raise their young. Nests provide protection, warmth, and a safe place for baby birds to develop.",
          es: "Los pájaros construyen nidos para poner sus huevos y criar a sus crías. Los nidos proporcionan protección, calor y un lugar seguro para que los pájaros bebé se desarrollen.",
          de: "Vögel bauen Nester, um ihre Eier zu legen und ihre Jungen aufzuziehen. Nester bieten Schutz, Wärme und einen sicheren Ort für die Entwicklung von Vogelbabys.",
          nl: "Vogels bouwen nesten om hun eieren te leggen en hun jongen groot te brengen. Nesten bieden bescherming, warmte en een veilige plek voor baby vogels om zich te ontwikkelen."
        }
      },
      {
        question: {
          en: "What do fish need to live?",
          es: "¿Qué necesitan los peces para vivir?",
          de: "Was brauchen Fische zum Leben?",
          nl: "Wat hebben vissen nodig om te leven?"
        },
        options: [
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Trees", es: "Árboles", de: "Bäume", nl: "Bomen" },
          { en: "Grass", es: "Hierba", de: "Gras", nl: "Gras" },
          { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" }
        ],
        correct: 0,
        explanation: {
          en: "Fish are aquatic animals that need water to breathe through their gills, move, and survive. They cannot live on land or in dry environments.",
          es: "Los peces son animales acuáticos que necesitan agua para respirar a través de sus branquias, moverse y sobrevivir. No pueden vivir en tierra o en ambientes secos.",
          de: "Fische sind Wassertiere, die Wasser brauchen, um durch ihre Kiemen zu atmen, sich zu bewegen und zu überleben. Sie können nicht an Land oder in trockenen Umgebungen leben.",
          nl: "Vissen zijn waterdieren die water nodig hebben om te ademen door hun kieuwen, te bewegen en te overleven. Ze kunnen niet op land of in droge omgevingen leven."
        }
      },
      {
        question: {
          en: "Where do rabbits live?",
          es: "¿Dónde viven los conejos?",
          de: "Wo leben Kaninchen?",
          nl: "Waar leven konijnen?"
        },
        options: [
          { en: "Burrows", es: "Madrigueras", de: "Bauten", nl: "Holen" },
          { en: "Trees", es: "Árboles", de: "Bäume", nl: "Bomen" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Rocks", es: "Rocas", de: "Felsen", nl: "Rotsen" }
        ],
        correct: 0,
        explanation: {
          en: "Rabbits dig underground burrows called warrens where they live, sleep, and raise their babies. These burrows protect them from predators and weather.",
          es: "Los conejos cavan madrigueras subterráneas llamadas conejeras donde viven, duermen y crían a sus bebés. Estas madrigueras los protegen de los depredadores y el clima.",
          de: "Kaninchen graben unterirdische Bauten, die Warrens genannt werden, wo sie leben, schlafen und ihre Babys aufziehen. Diese Bauten schützen sie vor Raubtieren und Wetter.",
          nl: "Konijnen graven ondergrondse holen genaamd warrens waar ze leven, slapen en hun baby's grootbrengen. Deze holen beschermen ze tegen roofdieren en het weer."
        }
      },
      {
        question: {
          en: "Which animals live in the rainforest?",
          es: "¿Qué animales viven en la selva tropical?",
          de: "Welche Tiere leben im Regenwald?",
          nl: "Welke dieren leven in het regenwoud?"
        },
        options: [
          { en: "Monkeys", es: "Monos", de: "Affen", nl: "Apen" },
          { en: "Polar bears", es: "Osos polares", de: "Eisbären", nl: "IJsberen" },
          { en: "Penguins", es: "Pingüinos", de: "Pinguine", nl: "Pinguïns" },
          { en: "Camels", es: "Camellos", de: "Kamele", nl: "Kamelen" }
        ],
        correct: 0,
        explanation: {
          en: "Rainforests are warm, humid environments with many trees that are perfect for monkeys who swing from branch to branch and eat fruits and leaves.",
          es: "Las selvas tropicales son ambientes cálidos y húmedos con muchos árboles que son perfectos para los monos que se balancean de rama en rama y comen frutas y hojas.",
          de: "Regenwälder sind warme, feuchte Umgebungen mit vielen Bäumen, die perfekt für Affen sind, die von Ast zu Ast schwingen und Früchte und Blätter fressen.",
          nl: "Regenwouden zijn warme, vochtige omgevingen met veel bomen die perfect zijn voor apen die van tak tot tak zwaaien en fruit en bladeren eten."
        }
      },
      {
        question: {
          en: "Where do bees live together?",
          es: "¿Dónde viven juntas las abejas?",
          de: "Wo leben Bienen zusammen?",
          nl: "Waar leven bijen samen?"
        },
        options: [
          { en: "Hives", es: "Colmenas", de: "Bienenstöcke", nl: "Bijenkorven" },
          { en: "Nests", es: "Nidos", de: "Nester", nl: "Nesten" },
          { en: "Holes", es: "Agujeros", de: "Löcher", nl: "Gaten" },
          { en: "Caves", es: "Cuevas", de: "Höhlen", nl: "Grotten" }
        ],
        correct: 0,
        explanation: {
          en: "Bees live together in colonies inside hives, which can be natural (like tree hollows) or man-made boxes. A hive can contain thousands of bees working together.",
          es: "Las abejas viven juntas en colonias dentro de colmenas, que pueden ser naturales (como huecos de árboles) o cajas hechas por el hombre. Una colmena puede contener miles de abejas trabajando juntas.",
          de: "Bienen leben zusammen in Kolonien in Bienenstöcken, die natürlich (wie Baumhöhlen) oder von Menschen gemachte Kästen sein können. Ein Bienenstock kann Tausende von Bienen enthalten, die zusammenarbeiten.",
          nl: "Bijen leven samen in kolonies binnen bijenkorven, die natuurlijk kunnen zijn (zoals boomholtes) of door mensen gemaakte dozen. Een bijenkorf kan duizenden bijen bevatten die samenwerken."
        }
      },
      {
        question: {
          en: "What kind of home do squirrels prefer?",
          es: "¿Qué tipo de hogar prefieren las ardillas?",
          de: "Welche Art von Zuhause bevorzugen Eichhörnchen?",
          nl: "Wat voor soort huis hebben eekhoorns het liefst?"
        },
        options: [
          { en: "Trees", es: "Árboles", de: "Bäume", nl: "Bomen" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Underground", es: "Subterráneo", de: "Unterirdisch", nl: "Ondergronds" },
          { en: "Desert", es: "Desierto", de: "Wüste", nl: "Woestijn" }
        ],
        correct: 0,
        explanation: {
          en: "Squirrels build nests called dreys in tree branches or live in tree holes. Trees provide safety from predators and access to food like nuts and seeds.",
          es: "Las ardillas construyen nidos llamados refugios en las ramas de los árboles o viven en agujeros de árboles. Los árboles proporcionan seguridad de los depredadores y acceso a alimentos como nueces y semillas.",
          de: "Eichhörnchen bauen Nester namens Kobel in Baumästen oder leben in Baumlöchern. Bäume bieten Sicherheit vor Raubtieren und Zugang zu Nahrung wie Nüssen und Samen.",
          nl: "Eekhoorns bouwen nesten genaamd dreys in boomtakken of leven in boomgaten. Bomen bieden veiligheid tegen roofdieren en toegang tot voedsel zoals noten en zaden."
        }
      },
      {
        question: {
          en: "Where do penguins live?",
          es: "¿Dónde viven los pingüinos?",
          de: "Wo leben Pinguine?",
          nl: "Waar leven pinguïns?"
        },
        options: [
          { en: "Antarctica", es: "Antártida", de: "Antarktis", nl: "Antarctica" },
          { en: "Desert", es: "Desierto", de: "Wüste", nl: "Woestijn" },
          { en: "Jungle", es: "Selva", de: "Dschungel", nl: "Jungle" },
          { en: "Mountains", es: "Montañas", de: "Berge", nl: "Bergen" }
        ],
        correct: 0,
        explanation: {
          en: "Most penguins live in Antarctica and the surrounding cold southern regions. They are perfectly adapted to freezing temperatures with thick feathers and fat layers.",
          es: "La mayoría de los pingüinos viven en la Antártida y las regiones frías del sur circundantes. Están perfectamente adaptados a temperaturas heladas con plumas gruesas y capas de grasa.",
          de: "Die meisten Pinguine leben in der Antarktis und den umliegenden kalten südlichen Regionen. Sie sind perfekt an eisige Temperaturen angepasst mit dicken Federn und Fettschichten.",
          nl: "De meeste pinguïns leven in Antarctica en de omringende koude zuidelijke gebieden. Ze zijn perfect aangepast aan vriestemperaturen met dikke veren en vetlagen."
        }
      },
      {
        question: {
          en: "What do we call an elephant's home in the wild?",
          es: "¿Cómo llamamos al hogar de un elefante en la naturaleza?",
          de: "Wie nennen wir das Zuhause eines Elefanten in der Wildnis?",
          nl: "Hoe noemen we het huis van een olifant in het wild?"
        },
        options: [
          { en: "Herd territory", es: "Territorio de manada", de: "Herdengebiet", nl: "Kudde gebied" },
          { en: "Nest", es: "Nido", de: "Nest", nl: "Nest" },
          { en: "Den", es: "Guarida", de: "Höhle", nl: "Hol" },
          { en: "Burrow", es: "Madriguera", de: "Bau", nl: "Hol" }
        ],
        correct: 0,
        explanation: {
          en: "Elephants live in family groups called herds that roam across large territories. They don't have fixed homes but travel together searching for food and water.",
          es: "Los elefantes viven en grupos familiares llamados manadas que deambulan por grandes territorios. No tienen hogares fijos sino que viajan juntos buscando comida y agua.",
          de: "Elefanten leben in Familiengruppen namens Herden, die über große Gebiete wandern. Sie haben keine festen Häuser, sondern reisen zusammen auf der Suche nach Nahrung und Wasser.",
          nl: "Olifanten leven in familiegroepen genaamd kuddes die over grote gebieden zwerven. Ze hebben geen vaste huizen maar reizen samen op zoek naar voedsel en water."
        }
      },
      {
        question: {
          en: "Where do bats sleep during the day?",
          es: "¿Dónde duermen los murciélagos durante el día?",
          de: "Wo schlafen Fledermäuse tagsüber?",
          nl: "Waar slapen vleermuizen overdag?"
        },
        options: [
          { en: "Caves", es: "Cuevas", de: "Höhlen", nl: "Grotten" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Grass", es: "Hierba", de: "Gras", nl: "Gras" },
          { en: "Snow", es: "Nieve", de: "Schnee", nl: "Sneeuw" }
        ],
        correct: 0,
        explanation: {
          en: "Bats are nocturnal animals that sleep during the day in dark, quiet places like caves, attics, or hollow trees. They hang upside down from their roosting spots.",
          es: "Los murciélagos son animales nocturnos que duermen durante el día en lugares oscuros y silenciosos como cuevas, áticos o árboles huecos. Cuelgan boca abajo de sus lugares de descanso.",
          de: "Fledermäuse sind nachtaktive Tiere, die tagsüber an dunklen, ruhigen Orten wie Höhlen, Dachböden oder hohlen Bäumen schlafen. Sie hängen kopfüber an ihren Ruhestätten.",
          nl: "Vleermuizen zijn nachtdieren die overdag slapen op donkere, rustige plekken zoals grotten, zolders of holle bomen. Ze hangen ondersteboven aan hun rustplaatsen."
        }
      },
      {
        question: {
          en: "What kind of habitat do frogs need?",
          es: "¿Qué tipo de hábitat necesitan las ranas?",
          de: "Welche Art von Lebensraum brauchen Frösche?",
          nl: "Wat voor habitat hebben kikkers nodig?"
        },
        options: [
          { en: "Near water", es: "Cerca del agua", de: "In der Nähe von Wasser", nl: "Bij water" },
          { en: "Very dry places", es: "Lugares muy secos", de: "Sehr trockene Orte", nl: "Erg droge plaatsen" },
          { en: "High mountains", es: "Montañas altas", de: "Hohe Berge", nl: "Hoge bergen" },
          { en: "Inside houses", es: "Dentro de casas", de: "In Häusern", nl: "Binnen in huizen" }
        ],
        correct: 0,
        explanation: {
          en: "Frogs are amphibians that need to keep their skin moist, so they live near ponds, lakes, streams, or other water sources where they can breed and survive.",
          es: "Las ranas son anfibios que necesitan mantener su piel húmeda, por lo que viven cerca de estanques, lagos, arroyos u otras fuentes de agua donde pueden reproducirse y sobrevivir.",
          de: "Frösche sind Amphibien, die ihre Haut feucht halten müssen, daher leben sie in der Nähe von Teichen, Seen, Bächen oder anderen Wasserquellen, wo sie sich fortpflanzen und überleben können.",
          nl: "Kikkers zijn amfibieën die hun huid vochtig moeten houden, dus leven ze bij vijvers, meren, beken of andere waterbronnen waar ze kunnen voortplanten en overleven."
        }
      },
      {
        question: {
          en: "Where do farm animals live?",
          es: "¿Dónde viven los animales de granja?",
          de: "Wo leben Bauernhoftiere?",
          nl: "Waar leven boerderijdieren?"
        },
        options: [
          { en: "Barns and fields", es: "Graneros y campos", de: "Scheunen und Felder", nl: "Schuren en velden" },
          { en: "Ocean", es: "Océano", de: "Ozean", nl: "Oceaan" },
          { en: "Caves", es: "Cuevas", de: "Höhlen", nl: "Grotten" },
          { en: "Trees", es: "Árboles", de: "Bäume", nl: "Bomen" }
        ],
        correct: 0,
        explanation: {
          en: "Farm animals like cows, pigs, chickens, and horses live in barns for shelter and graze or roam in fields where they can find food and exercise.",
          es: "Los animales de granja como vacas, cerdos, gallinas y caballos viven en graneros para refugiarse y pastan o deambulan en campos donde pueden encontrar comida y ejercitarse.",
          de: "Bauernhoftiere wie Kühe, Schweine, Hühner und Pferde leben in Scheunen für Schutz und weiden oder wandern auf Feldern, wo sie Nahrung und Bewegung finden können.",
          nl: "Boerderijdieren zoals koeien, varkens, kippen en paarden leven in schuren voor beschutting en grazen of lopen in velden waar ze voedsel kunnen vinden en bewegen."
        }
      },
      {
        question: {
          en: "What do we call the home of a lion?",
          es: "¿Cómo llamamos al hogar de un león?",
          de: "Wie nennen wir das Zuhause eines Löwen?",
          nl: "Hoe noemen we het huis van een leeuw?"
        },
        options: [
          { en: "Pride territory", es: "Territorio de manada", de: "Rudelgebiet", nl: "Roedel gebied" },
          { en: "Nest", es: "Nido", de: "Nest", nl: "Nest" },
          { en: "Burrow", es: "Madriguera", de: "Bau", nl: "Hol" },
          { en: "Hive", es: "Colmena", de: "Bienenstock", nl: "Bijenkorf" }
        ],
        correct: 0,
        explanation: {
          en: "Lions live in family groups called prides that control and defend a territory. This territory includes areas for hunting, drinking water, and raising cubs.",
          es: "Los leones viven en grupos familiares llamados manadas que controlan y defienden un territorio. Este territorio incluye áreas para cazar, beber agua y criar cachorros.",
          de: "Löwen leben in Familiengruppen namens Rudel, die ein Territorium kontrollieren und verteidigen. Dieses Territorium umfasst Bereiche zum Jagen, Wassertrinken und Aufziehen von Jungen.",
          nl: "Leeuwen leven in familiegroepen genaamd roedels die een territorium controleren en verdedigen. Dit territorium omvat gebieden voor jagen, water drinken en jongen grootbrengen."
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
          { en: "High mountains", es: "Montañas altas", de: "Hohe Berge", nl: "Hoge bergen" },
          { en: "Ocean", es: "Océano", de: "Ozean", nl: "Oceaan" },
          { en: "Desert", es: "Desierto", de: "Wüste", nl: "Woestijn" },
          { en: "Swamp", es: "Pantano", de: "Sumpf", nl: "Moeras" }
        ],
        correct: 0,
        explanation: {
          en: "Mountain goats are excellent climbers with specialized hooves that live on steep rocky cliffs and alpine environments at high elevations.",
          es: "Las cabras montesas son excelentes escaladoras con pezunas especializadas que viven en acantilados rocosos empinados y ambientes alpinos a gran altitud.",
          de: "Bergziegen sind ausgezeichnete Kletterer mit spezialisierten Hufen, die an steilen Felsenklippen und alpinen Umgebungen in großen Höhen leben.",
          nl: "Berggeiten zijn uitstekende klimmers met gespecialiseerde hoeven die leven op steile rotsachtige kliffen en alpine omgevingen op grote hoogte."
        }
      },
      {
        question: {
          en: "What kind of environment do fish live in?",
          es: "¿En qué tipo de ambiente viven los peces?",
          de: "In welcher Art von Umgebung leben Fische?",
          nl: "In wat voor omgeving leven vissen?"
        },
        options: [
          { en: "Aquatic", es: "Acuático", de: "Aquatisch", nl: "Aquatisch" },
          { en: "Terrestrial", es: "Terrestre", de: "Terrestrisch", nl: "Terrestrisch" },
          { en: "Aerial", es: "Aéreo", de: "Luftig", nl: "Lucht" },
          { en: "Underground", es: "Subterráneo", de: "Unterirdisch", nl: "Ondergronds" }
        ],
        correct: 0,
        explanation: {
          en: "Fish are aquatic animals that need water to live, breathe, and move around.",
          es: "Los peces son animales acuáticos que necesitan agua para vivir, respirar y moverse.",
          de: "Fische sind Wassertiere, die Wasser zum Leben, Atmen und Bewegen benötigen.",
          nl: "Vissen zijn waterdieren die water nodig hebben om te leven, ademhalen en bewegen."
        }
      },
      {
        question: {
          en: "Where do owls usually make their homes?",
          es: "¿Dónde suelen hacer sus hogares los búhos?",
          de: "Wo machen Eulen normalerweise ihre Häuser?",
          nl: "Waar maken uilen gewoonlijk hun huizen?"
        },
        options: [
          { en: "Tree hollows", es: "Huecos de árboles", de: "Baumhöhlen", nl: "Boomholtes" },
          { en: "Underground", es: "Subterráneo", de: "Unterirdisch", nl: "Ondergronds" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Open fields", es: "Campos abiertos", de: "Offene Felder", nl: "Open velden" }
        ],
        correct: 0,
        explanation: {
          en: "Owls nest in tree hollows, providing them with dark, safe places to sleep during the day and raise their young.",
          es: "Los búhos anidan en huecos de árboles, proporcionándoles lugares oscuros y seguros para dormir durante el día y criar a sus crías.",
          de: "Eulen nisten in Baumhöhlen, die ihnen dunkle, sichere Plätze bieten, um tagsüber zu schlafen und ihre Jungen aufzuziehen.",
          nl: "Uilen nestelen in boomholtes, wat hen donkere, veilige plekken biedt om overdag te slapen en hun jongen groot te brengen."
        }
      },
      {
        question: {
          en: "What do we call where a spider lives?",
          es: "¿Cómo llamamos al lugar donde vive una araña?",
          de: "Wie nennen wir den Ort, wo eine Spinne lebt?",
          nl: "Hoe noemen we waar een spin woont?"
        },
        options: [
          { en: "Web", es: "Telaraña", de: "Netz", nl: "Web" },
          { en: "Nest", es: "Nido", de: "Nest", nl: "Nest" },
          { en: "Den", es: "Guarida", de: "Höhle", nl: "Hol" },
          { en: "Hive", es: "Colmena", de: "Bienenstock", nl: "Bijenkorf" }
        ],
        correct: 0,
        explanation: {
          en: "Spiders live in webs they weave from silk to catch prey and provide shelter.",
          es: "Las arañas viven en telarañas que tejen con seda para atrapar presas y proporcionar refugio.",
          de: "Spinnen leben in Netzen, die sie aus Seide weben, um Beute zu fangen und Schutz zu bieten.",
          nl: "Spinnen leven in webben die ze weven van zijde om prooi te vangen en beschutting te bieden."
        }
      },
      {
        question: {
          en: "Where do dolphins live?",
          es: "¿Dónde viven los delfines?",
          de: "Wo leben Delfine?",
          nl: "Waar leven dolfijnen?"
        },
        options: [
          { en: "Ocean", es: "Océano", de: "Ozean", nl: "Oceaan" },
          { en: "Forest", es: "Bosque", de: "Wald", nl: "Bos" },
          { en: "Desert", es: "Desierto", de: "Wüste", nl: "Woestijn" },
          { en: "Mountains", es: "Montañas", de: "Berge", nl: "Bergen" }
        ],
        correct: 0,
        explanation: {
          en: "Dolphins are marine mammals that live in oceans and seas around the world.",
          es: "Los delfines son mamíferos marinos que viven en océanos y mares de todo el mundo.",
          de: "Delfine sind Meeressäugetiere, die in Ozeanen und Meeren auf der ganzen Welt leben.",
          nl: "Dolfijnen zijn zeezoogdieren die leven in oceanen en zeeën over de hele wereld."
        }
      },
      {
        question: {
          en: "What do ants build to live in?",
          es: "¿Qué construyen las hormigas para vivir?",
          de: "Was bauen Ameisen, um darin zu leben?",
          nl: "Wat bouwen mieren om in te wonen?"
        },
        options: [
          { en: "Ant hills", es: "Hormigueros", de: "Ameisenhügel", nl: "Mierenhopen" },
          { en: "Nests in trees", es: "Nidos en árboles", de: "Nester in Bäumen", nl: "Nesten in bomen" },
          { en: "Webs", es: "Telarañas", de: "Netze", nl: "Webben" },
          { en: "Hives", es: "Colmenas", de: "Bienenstöcke", nl: "Bijenkorven" }
        ],
        correct: 0,
        explanation: {
          en: "Ants build complex underground colonies called ant hills with tunnels, chambers, and storage areas that can house millions of ants.",
          es: "Las hormigas construyen colonias subterráneas complejas llamadas hormigueros con túneles, cámaras y áreas de almacenamiento que pueden albergar millones de hormigas.",
          de: "Ameisen bauen komplexe unterirdische Kolonien namens Ameisenhügel mit Tunneln, Kammern und Lagerräumen, die Millionen von Ameisen beherbergen können.",
          nl: "Mieren bouwen complexe ondergrondse koloniën genaamd mierenhopen met tunnels, kamers en opslagruimtes die miljoenen mieren kunnen huisvesten."
        }
      },
      {
        question: {
          en: "Where do seals spend most of their time?",
          es: "¿Dónde pasan la mayor parte del tiempo las focas?",
          de: "Wo verbringen Robben die meiste Zeit?",
          nl: "Waar brengen zeehonden de meeste tijd door?"
        },
        options: [
          { en: "In and near water", es: "En y cerca del agua", de: "Im und nahe dem Wasser", nl: "In en bij het water" },
          { en: "In trees", es: "En árboles", de: "In Bäumen", nl: "In bomen" },
          { en: "Underground", es: "Subterráneo", de: "Unterirdisch", nl: "Ondergronds" },
          { en: "In deserts", es: "En desiertos", de: "In Wüsten", nl: "In woestijnen" }
        ],
        correct: 0,
        explanation: {
          en: "Seals are marine mammals that spend time in water hunting for fish and on land or ice to rest, give birth, and raise their pups.",
          es: "Las focas son mamíferos marinos que pasan tiempo en el agua cazando peces y en tierra o hielo para descansar, dar a luz y criar a sus crías.",
          de: "Robben sind Meeressäugetiere, die Zeit im Wasser verbringen, um Fische zu jagen, und an Land oder auf Eis, um sich auszuruhen, zu gebären und ihre Jungen aufzuziehen.",
          nl: "Zeehonden zijn zeezoogdieren die tijd doorbrengen in het water om te jagen op vis en op land of ijs om te rusten, te bevallen en hun jongen groot te brengen."
        }
      },
      {
        question: {
          en: "What is a group of animals living together called?",
          es: "¿Cómo se llama un grupo de animales que viven juntos?",
          de: "Wie nennt man eine Gruppe von Tieren, die zusammen leben?",
          nl: "Hoe noem je een groep dieren die samen leven?"
        },
        options: [
          { en: "Colony or herd", es: "Colonia o manada", de: "Kolonie oder Herde", nl: "Kolonie of kudde" },
          { en: "House", es: "Casa", de: "Haus", nl: "Huis" },
          { en: "Building", es: "Edificio", de: "Gebäude", nl: "Gebouw" },
          { en: "City", es: "Ciudad", de: "Stadt", nl: "Stad" }
        ],
        correct: 0,
        explanation: {
          en: "Animals living together form groups with different names: herds (deer, cattle), flocks (birds, sheep), colonies (ants, bees), or packs (wolves).",
          es: "Los animales que viven juntos forman grupos con diferentes nombres: manadas (ciervos, ganado), bandadas (pájaros, ovejas), colonias (hormigas, abejas) o jauerías (lobos).",
          de: "Tiere, die zusammenleben, bilden Gruppen mit verschiedenen Namen: Herden (Hirsche, Rinder), Schwärme (Vögel, Schafe), Kolonien (Ameisen, Bienen) oder Rudel (Wölfe).",
          nl: "Dieren die samenleven vormen groepen met verschillende namen: kuddes (herten, vee), zwermen (vogels, schapen), koloniës (mieren, bijen) of roedels (wolven)."
        }
      },
      {
        question: {
          en: "Where do woodpeckers make their homes?",
          es: "¿Dónde hacen sus hogares los pájaros carpinteros?",
          de: "Wo machen Spechte ihre Häuser?",
          nl: "Waar maken spechten hun huizen?"
        },
        options: [
          { en: "Tree trunks", es: "Troncos de árboles", de: "Baumstämme", nl: "Boomstammen" },
          { en: "Ground", es: "Suelo", de: "Boden", nl: "Grond" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Rocks", es: "Rocas", de: "Felsen", nl: "Rotsen" }
        ],
        correct: 0,
        explanation: {
          en: "Woodpeckers use their strong beaks to drill holes in tree trunks where they build nests and search for insects to eat.",
          es: "Los pájaros carpinteros usan sus picos fuertes para perforar agujeros en troncos de árboles donde construyen nidos y buscan insectos para comer.",
          de: "Spechte verwenden ihre starken Schnäbel, um Löcher in Baumstämme zu bohren, wo sie Nester bauen und nach Insekten zum Fressen suchen.",
          nl: "Spechten gebruiken hun sterke snavels om gaten te boren in boomstammen waar ze nesten bouwen en zoeken naar insecten om te eten."
        }
      },
      {
        question: {
          en: "What kind of place do desert animals need?",
          es: "¿Qué tipo de lugar necesitan los animales del desierto?",
          de: "Welche Art von Ort brauchen Wüstentiere?",
          nl: "Wat voor soort plek hebben woestijndieren nodig?"
        },
        options: [
          { en: "Very little water", es: "Muy poca agua", de: "Sehr wenig Wasser", nl: "Heel weinig water" },
          { en: "Lots of water", es: "Mucha agua", de: "Viel Wasser", nl: "Veel water" },
          { en: "Only cold weather", es: "Solo clima frío", de: "Nur kaltes Wetter", nl: "Alleen koud weer" },
          { en: "Only trees", es: "Solo árboles", de: "Nur Bäume", nl: "Alleen bomen" }
        ],
        correct: 0,
        explanation: {
          en: "Desert animals have adapted to survive with minimal water by storing water in their bodies, getting moisture from food, and being active when it's cooler.",
          es: "Los animales del desierto se han adaptado a sobrevivir con mínima agua almacenando agua en sus cuerpos, obteniendo humedad de la comida y siendo activos cuando hace más fresco.",
          de: "Wüstentiere haben sich angepasst, um mit minimalem Wasser zu überleben, indem sie Wasser in ihren Körpern speichern, Feuchtigkeit aus der Nahrung gewinnen und aktiv sind, wenn es kühler ist.",
          nl: "Woestijndieren hebben zich aangepast om te overleven met minimaal water door water op te slaan in hun lichamen, vocht uit voedsel te halen en actief te zijn wanneer het koeler is."
        }
      },
      {
        question: {
          en: "Where do beavers build their homes?",
          es: "¿Dónde construyen sus hogares los castores?",
          de: "Wo bauen Biber ihre Häuser?",
          nl: "Waar bouwen bevers hun huizen?"
        },
        options: [
          { en: "Near water", es: "Cerca del agua", de: "In der Nähe von Wasser", nl: "Bij water" },
          { en: "In trees", es: "En árboles", de: "In Bäumen", nl: "In bomen" },
          { en: "Underground only", es: "Solo subterráneo", de: "Nur unterirdisch", nl: "Alleen ondergronds" },
          { en: "In caves", es: "En cuevas", de: "In Höhlen", nl: "In grotten" }
        ],
        correct: 0,
        explanation: {
          en: "Beavers build their homes (called lodges) near water because they need access to trees for food and building materials for their dams.",
          es: "Los castores construyen sus hogares (llamados guaridas) cerca del agua porque necesitan acceso a árboles para comida y materiales de construcción para sus presas.",
          de: "Biber bauen ihre Häuser (genannt Baue) in der Nähe von Wasser, weil sie Zugang zu Bäumen für Nahrung und Baumaterialien für ihre Dämme benötigen.",
          nl: "Bevers bouwen hun huizen (genaamd burchten) bij water omdat ze toegang nodig hebben tot bomen voor voedsel en bouwmaterialen voor hun dammen."
        }
      },
      {
        question: {
          en: "What do we call a place where many different animals live together?",
          es: "¿Cómo llamamos a un lugar donde muchos animales diferentes viven juntos?",
          de: "Wie nennen wir einen Ort, wo viele verschiedene Tiere zusammen leben?",
          nl: "Hoe noemen we een plek waar veel verschillende dieren samen leven?"
        },
        options: [
          { en: "Ecosystem", es: "Ecosistema", de: "Ökosystem", nl: "Ecosysteem" },
          { en: "House", es: "Casa", de: "Haus", nl: "Huis" },
          { en: "Store", es: "Tienda", de: "Laden", nl: "Winkel" },
          { en: "School", es: "Escuela", de: "Schule", nl: "School" }
        ],
        correct: 0,
        explanation: {
          en: "An ecosystem is a community where different plants and animals live together and depend on each other for food, shelter, and survival.",
          es: "Un ecosistema es una comunidad donde diferentes plantas y animales viven juntos y dependen unos de otros para comida, refugio y supervivencia.",
          de: "Ein Ökosystem ist eine Gemeinschaft, in der verschiedene Pflanzen und Tiere zusammenleben und voneinander für Nahrung, Schutz und Überleben abhängen.",
          nl: "Een ecosysteem is een gemeenschap waar verschillende planten en dieren samenleven en van elkaar afhankelijk zijn voor voedsel, onderdak en overleving."
        }
      },
      {
        question: {
          en: "Where do prairie dogs live?",
          es: "¿Dónde viven los perros de la pradera?",
          de: "Wo leben Präriehunde?",
          nl: "Waar leven prairiehonden?"
        },
        options: [
          { en: "Underground burrows", es: "Madrigueras subterráneas", de: "Unterirdische Bauten", nl: "Ondergrondse holen" },
          { en: "Tree tops", es: "Copas de árboles", de: "Baumkronen", nl: "Boomtoppen" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Caves", es: "Cuevas", de: "Höhlen", nl: "Grotten" }
        ],
        correct: 0,
        explanation: {
          en: "Prairie dogs dig extensive underground burrow systems with multiple entrances and chambers for sleeping, raising young, and storing food.",
          es: "Los perros de la pradera cavan extensos sistemas de madrigueras subterráneas con múltiples entradas y cámaras para dormir, criar jóvenes y almacenar comida.",
          de: "Präriehunde graben ausgedehnte unterirdische Bausysteme mit mehreren Eingängen und Kammern zum Schlafen, Aufziehen der Jungen und Lagern von Nahrung.",
          nl: "Prairiehonden graven uitgebreide ondergrondse holensystemen met meerdere ingangen en kamers om te slapen, jongen groot te brengen en voedsel op te slaan."
        }
      },
      {
        question: {
          en: "What makes a good home for fish?",
          es: "¿Qué hace un buen hogar para los peces?",
          de: "Was macht ein gutes Zuhause für Fische?",
          nl: "Wat maakt een goed thuis voor vissen?"
        },
        options: [
          { en: "Clean water with oxygen", es: "Agua limpia con oxígeno", de: "Sauberes Wasser mit Sauerstoff", nl: "Schoon water met zuurstof" },
          { en: "Dry land", es: "Tierra seca", de: "Trockenes Land", nl: "Droog land" },
          { en: "Very hot places", es: "Lugares muy calurosos", de: "Sehr heiße Orte", nl: "Heel hete plaatsen" },
          { en: "No water", es: "Sin agua", de: "Kein Wasser", nl: "Geen water" }
        ],
        correct: 0,
        explanation: {
          en: "Fish need clean, oxygen-rich water to breathe through their gills, find food, and maintain their body temperature and health.",
          es: "Los peces necesitan agua limpia y rica en oxígeno para respirar a través de sus branquias, encontrar comida y mantener su temperatura corporal y salud.",
          de: "Fische brauchen sauberes, sauerstoffreiches Wasser, um durch ihre Kiemen zu atmen, Nahrung zu finden und ihre Körpertemperatur und Gesundheit zu erhalten.",
          nl: "Vissen hebben schoon, zuurstofrijk water nodig om te ademen door hun kieuwen, voedsel te vinden en hun lichaamstemperatuur en gezondheid te behouden."
        }
      },
      {
        question: {
          en: "Where do koalas spend most of their time?",
          es: "¿Dónde pasan la mayor parte del tiempo los koalas?",
          de: "Wo verbringen Koalas die meiste Zeit?",
          nl: "Waar brengen koala's de meeste tijd door?"
        },
        options: [
          { en: "Eucalyptus trees", es: "Árboles de eucalipto", de: "Eukalyptusbäume", nl: "Eucalyptusbomen" },
          { en: "Underground", es: "Subterráneo", de: "Unterirdisch", nl: "Ondergronds" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Caves", es: "Cuevas", de: "Höhlen", nl: "Grotten" }
        ],
        correct: 0,
        explanation: {
          en: "Koalas spend most of their time sleeping and eating in eucalyptus trees, which provide both their main food source and safe shelter from predators.",
          es: "Los koalas pasan la mayor parte del tiempo durmiendo y comiendo en árboles de eucalipto, que proporcionan tanto su principal fuente de alimento como refugio seguro de los depredadores.",
          de: "Koalas verbringen die meiste Zeit schlafend und essend in Eukalyptusbäumen, die sowohl ihre Hauptnahrungsquelle als auch sicheren Schutz vor Raubtieren bieten.",
          nl: "Koala's brengen de meeste tijd door met slapen en eten in eucalyptusbomen, die zowel hun hoofdvoedingsbron als veilige beschutting tegen roofdieren bieden."
        }
      },
      {
        question: {
          en: "What do turtles need in their habitat?",
          es: "¿Qué necesitan las tortugas en su hábitat?",
          de: "Was brauchen Schildkröten in ihrem Lebensraum?",
          nl: "Wat hebben schildpadden nodig in hun habitat?"
        },
        options: [
          { en: "Both land and water", es: "Tanto tierra como agua", de: "Sowohl Land als auch Wasser", nl: "Zowel land als water" },
          { en: "Only water", es: "Solo agua", de: "Nur Wasser", nl: "Alleen water" },
          { en: "Only land", es: "Solo tierra", de: "Nur Land", nl: "Alleen land" },
          { en: "Only air", es: "Solo aire", de: "Nur Luft", nl: "Alleen lucht" }
        ],
        correct: 0,
        explanation: {
          en: "Many turtles are semi-aquatic and need both water for swimming and drinking, and land areas for basking in the sun and laying eggs.",
          es: "Muchas tortugas son semi-acuáticas y necesitan tanto agua para nadar y beber, como áreas terrestres para tomar el sol y poner huevos.",
          de: "Viele Schildkröten sind semi-aquatisch und brauchen sowohl Wasser zum Schwimmen und Trinken als auch Landbereiche zum Sonnen und Eierlegen.",
          nl: "Veel schildpadden zijn semi-aquatisch en hebben zowel water nodig om te zwemmen en drinken, als landgebieden om te zonnen en eieren te leggen."
        }
      },
      {
        question: {
          en: "Where do wolves live with their families?",
          es: "¿Dónde viven los lobos con sus familias?",
          de: "Wo leben Wölfe mit ihren Familien?",
          nl: "Waar leven wolven met hun families?"
        },
        options: [
          { en: "Pack territory", es: "Territorio de manada", de: "Rudelgebiet", nl: "Roedelgebied" },
          { en: "Trees", es: "Árboles", de: "Bäume", nl: "Bomen" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Caves only", es: "Solo cuevas", de: "Nur Höhlen", nl: "Alleen grotten" }
        ],
        correct: 0,
        explanation: {
          en: "Wolves live in family groups called packs that establish and defend a territory with enough space and resources for hunting, denning, and raising pups.",
          es: "Los lobos viven en grupos familiares llamados manadas que establecen y defienden un territorio con suficiente espacio y recursos para cazar, hacer madrigueras y criar cachorros.",
          de: "Wölfe leben in Familiengruppen namens Rudel, die ein Territorium mit genügend Platz und Ressourcen für die Jagd, das Bauen von Höhlen und die Aufzucht von Welpen etablieren und verteidigen.",
          nl: "Wolven leven in familiegroepen genaamd roedels die een territorium vestigen en verdedigen met voldoende ruimte en hulpbronnen voor jagen, holen maken en jongen grootbrengen."
        }
      },
      {
        question: {
          en: "What do migrating animals do?",
          es: "¿Qué hacen los animales migratorios?",
          de: "Was machen wandernde Tiere?",
          nl: "Wat doen trekkende dieren?"
        },
        options: [
          { en: "Move to different places", es: "Se mudan a diferentes lugares", de: "Ziehen an verschiedene Orte", nl: "Verhuizen naar verschillende plaatsen" },
          { en: "Stay in one place", es: "Se quedan en un lugar", de: "Bleiben an einem Ort", nl: "Blijven op één plek" },
          { en: "Sleep all winter", es: "Duermen todo el invierno", de: "Schlafen den ganzen Winter", nl: "Slapen de hele winter" },
          { en: "Build houses", es: "Construyen casas", de: "Bauen Häuser", nl: "Bouwen huizen" }
        ],
        correct: 0,
        explanation: {
          en: "Migrating animals travel long distances between different habitats to find food, suitable weather, or safe places to breed and raise their young.",
          es: "Los animales migratorios viajan largas distancias entre diferentes hábitats para encontrar comida, clima adecuado o lugares seguros para reproducirse y criar a sus crías.",
          de: "Wandernde Tiere reisen lange Strecken zwischen verschiedenen Lebensräumen, um Nahrung, geeignetes Wetter oder sichere Orte zum Brüten und Aufziehen ihrer Jungen zu finden.",
          nl: "Trekkende dieren reizen lange afstanden tussen verschillende habitats om voedsel, geschikt weer of veilige plekken te vinden om te broeden en hun jongen groot te brengen."
        }
      },
      {
        question: {
          en: "Where do eagles build their nests?",
          es: "¿Dónde construyen sus nidos las águilas?",
          de: "Wo bauen Adler ihre Nester?",
          nl: "Waar bouwen arenden hun nesten?"
        },
        options: [
          { en: "High places", es: "Lugares altos", de: "Hohe Orte", nl: "Hoge plaatsen" },
          { en: "Underground", es: "Subterráneo", de: "Unterirdisch", nl: "Ondergronds" },
          { en: "Under water", es: "Bajo el agua", de: "Unter Wasser", nl: "Onder water" },
          { en: "In caves", es: "En cuevas", de: "In Höhlen", nl: "In grotten" }
        ],
        correct: 0,
        explanation: {
          en: "Eagles build their large nests called eyries on high cliffs, tall trees, or mountain peaks to have a clear view for hunting and protect their eggs and chicks from predators.",
          es: "Las águilas construyen sus grandes nidos llamados nidos en acantilados altos, árboles altos o picos de montañas para tener una vista clara para cazar y proteger sus huevos y polluelos de los depredadores.",
          de: "Adler bauen ihre großen Nester namens Horste auf hohen Klippen, hohen Bäumen oder Berggipfeln, um eine klare Sicht zum Jagen zu haben und ihre Eier und Küken vor Raubtieren zu schützen.",
          nl: "Arenden bouwen hun grote nesten genaamd eyries op hoge kliffen, hoge bomen of bergtoppen om een duidelijk zicht te hebben voor jagen en hun eieren en kuikens te beschermen tegen roofdieren."
        }
      },
      {
        question: {
          en: "What do we call animals that can live both in water and on land?",
          es: "¿Cómo llamamos a los animales que pueden vivir tanto en agua como en tierra?",
          de: "Wie nennen wir Tiere, die sowohl im Wasser als auch an Land leben können?",
          nl: "Hoe noemen we dieren die zowel in water als op land kunnen leven?"
        },
        options: [
          { en: "Amphibians", es: "Anfibios", de: "Amphibien", nl: "Amfibieën" },
          { en: "Reptiles", es: "Reptiles", de: "Reptilien", nl: "Reptielen" },
          { en: "Mammals", es: "Mamíferos", de: "Säugetiere", nl: "Zoogdieren" },
          { en: "Birds", es: "Aves", de: "Vögel", nl: "Vogels" }
        ],
        correct: 0,
        explanation: {
          en: "Amphibians like frogs, toads, and salamanders can live both in water and on land because they can breathe through their skin and lungs.",
          es: "Los anfibios como las ranas, sapos y salamandras pueden vivir tanto en agua como en tierra porque pueden respirar a través de su piel y pulmones.",
          de: "Amphibien wie Frösche, Kröten und Salamander können sowohl im Wasser als auch an Land leben, weil sie durch ihre Haut und Lungen atmen können.",
          nl: "Amfibieën zoals kikkers, padden en salamanders kunnen zowel in water als op land leven omdat ze kunnen ademen door hun huid en longen."
        }
      },
      {
        question: {
          en: "Where do hermit crabs find their homes?",
          es: "¿Dónde encuentran sus hogares los cangrejos ermitaños?",
          de: "Wo finden Einsiedlerkrebse ihre Häuser?",
          nl: "Waar vinden heremietkreeften hun huizen?"
        },
        options: [
          { en: "Empty shells", es: "Conchas vacías", de: "Leere Muscheln", nl: "Lege schelpen" },
          { en: "Trees", es: "Árboles", de: "Bäume", nl: "Bomen" },
          { en: "Underground", es: "Subterráneo", de: "Unterirdisch", nl: "Ondergronds" },
          { en: "Rocks", es: "Rocas", de: "Felsen", nl: "Rotsen" }
        ],
        correct: 0,
        explanation: {
          en: "Hermit crabs don't grow their own shells, so they find empty shells left by other sea creatures and use them as portable homes for protection.",
          es: "Los cangrejos ermitaños no hacen crecer sus propias conchas, así que encuentran conchas vacías dejadas por otras criaturas marinas y las usan como hogares portátiles para protección.",
          de: "Einsiedlerkrebse züchten keine eigenen Schalen, daher finden sie leere Schalen, die von anderen Meereskreaturen hinterlassen wurden, und verwenden sie als tragbare Häuser zum Schutz.",
          nl: "Heremietkreeften groeien geen eigen schelpen, dus vinden ze lege schelpen achtergelaten door andere zeedieren en gebruiken ze als draagbare huizen voor bescherming."
        }
      },
      {
        question: {
          en: "What kind of weather do arctic animals need?",
          es: "¿Qué tipo de clima necesitan los animales árticos?",
          de: "Welche Art von Wetter brauchen arktische Tiere?",
          nl: "Wat voor weer hebben arctische dieren nodig?"
        },
        options: [
          { en: "Very cold", es: "Muy frío", de: "Sehr kalt", nl: "Erg koud" },
          { en: "Very hot", es: "Muy caluroso", de: "Sehr heiß", nl: "Erg heet" },
          { en: "Always raining", es: "Siempre lloviendo", de: "Immer regnend", nl: "Altijd regenachtig" },
          { en: "No weather", es: "Sin clima", de: "Kein Wetter", nl: "Geen weer" }
        ],
        correct: 0,
        explanation: {
          en: "Arctic animals like polar bears, seals, and penguins have thick fur, blubber, or feathers to survive in extremely cold temperatures near the North and South poles.",
          es: "Los animales árticos como osos polares, focas y pingüinos tienen pelaje grueso, grasa o plumas para sobrevivir en temperaturas extremadamente frías cerca de los polos Norte y Sur.",
          de: "Arktische Tiere wie Eisbären, Robben und Pinguine haben dickes Fell, Speck oder Federn, um bei extrem kalten Temperaturen in der Nähe der Nord- und Südpole zu überleben.",
          nl: "Arctische dieren zoals ijsberen, zeehonden en pinguïns hebben dikke vacht, spek of veren om te overleven bij extreem koude temperaturen bij de Noord- en Zuidpool."
        }
      },
      {
        question: {
          en: "Where do most cats like to sleep?",
          es: "¿Dónde les gusta dormir a la mayoría de los gatos?",
          de: "Wo schlafen die meisten Katzen gerne?",
          nl: "Waar slapen de meeste katten graag?"
        },
        options: [
          { en: "Warm, cozy places", es: "Lugares cálidos y acogedores", de: "Warme, gemütliche Orte", nl: "Warme, gezellige plekjes" },
          { en: "Cold places", es: "Lugares fríos", de: "Kalte Orte", nl: "Koude plekken" },
          { en: "Wet places", es: "Lugares húmedos", de: "Feuchte Orte", nl: "Natte plekken" },
          { en: "Noisy places", es: "Lugares ruidosos", de: "Laute Orte", nl: "Lawaaierige plekken" }
        ],
        correct: 0,
        explanation: {
          en: "Cats are naturally drawn to warm, comfortable spots like sunny windowsills, soft beds, or cozy corners where they feel safe and can regulate their body temperature.",
          es: "Los gatos se sienten naturalmente atraídos a lugares cálidos y cómodos como alféizares soleados, camas suaves o rincones acogedores donde se sienten seguros y pueden regular su temperatura corporal.",
          de: "Katzen werden natürlich von warmen, gemütlichen Plätzen wie sonnigen Fensterbänken, weichen Betten oder gemütlichen Ecken angezogen, wo sie sich sicher fühlen und ihre Körpertemperatur regulieren können.",
          nl: "Katten worden van nature aangetrokken tot warme, comfortabele plekjes zoals zonnige vensterbanken, zachte bedden of gezellige hoekjes waar ze zich veilig voelen en hun lichaamstemperatuur kunnen reguleren."
        }
      },
      {
        question: {
          en: "What do coral reefs provide for ocean animals?",
          es: "¿Qué proporcionan los arrecifes de coral a los animales oceánicos?",
          de: "Was bieten Korallenriffe für Meerestiere?",
          nl: "Wat bieden koraalriffen aan zeedieren?"
        },
        options: [
          { en: "Homes and food", es: "Hogares y comida", de: "Häuser und Nahrung", nl: "Huizen en voedsel" },
          { en: "Only decoration", es: "Solo decoración", de: "Nur Dekoration", nl: "Alleen decoratie" },
          { en: "Nothing useful", es: "Nada útil", de: "Nichts Nützliches", nl: "Niets nuttigs" },
          { en: "Only danger", es: "Solo peligro", de: "Nur Gefahr", nl: "Alleen gevaar" }
        ],
        correct: 0,
        explanation: {
          en: "Coral reefs are like underwater cities that provide shelter, food, and breeding grounds for thousands of different fish and sea creatures.",
          es: "Los arrecifes de coral son como ciudades submarinas que proporcionan refugio, comida y lugares de reproducción para miles de diferentes peces y criaturas marinas.",
          de: "Korallenriffe sind wie Unterwasserstädte, die Schutz, Nahrung und Brutplätze für Tausende verschiedener Fische und Meereskreaturen bieten.",
          nl: "Koraalriffen zijn als onderwatersteden die onderdak, voedsel en broedplaatsen bieden voor duizenden verschillende vissen en zeedieren."
        }
      },
      {
        question: {
          en: "Where do most nocturnal animals rest during the day?",
          es: "¿Dónde descansan durante el día la mayoría de los animales nocturnos?",
          de: "Wo ruhen die meisten nachtaktiven Tiere tagsüber?",
          nl: "Waar rusten de meeste nachtdieren overdag?"
        },
        options: [
          { en: "Dark, quiet places", es: "Lugares oscuros y silenciosos", de: "Dunkle, ruhige Orte", nl: "Donkere, stille plekken" },
          { en: "Bright, noisy places", es: "Lugares brillantes y ruidosos", de: "Helle, laute Orte", nl: "Lichte, lawaaierige plekken" },
          { en: "Only in water", es: "Solo en el agua", de: "Nur im Wasser", nl: "Alleen in water" },
          { en: "In the middle of roads", es: "En el medio de las carreteras", de: "In der Mitte von Straßen", nl: "Midden op de weg" }
        ],
        correct: 0,
        explanation: {
          en: "Nocturnal animals like owls, bats, and raccoons rest in dark, quiet places like caves, hollow trees, or burrows during the day when it's bright and noisy.",
          es: "Los animales nocturnos como búhos, murciélagos y mapaches descansan en lugares oscuros y silenciosos como cuevas, árboles huecos o madrigueras durante el día cuando está brillante y ruidoso.",
          de: "Nachtaktive Tiere wie Eulen, Fledermäuse und Waschbären ruhen an dunklen, ruhigen Orten wie Höhlen, hohlen Bäumen oder Bauten während des Tages, wenn es hell und laut ist.",
          nl: "Nachtdieren zoals uilen, vleermuizen en wasberen rusten op donkere, stille plekken zoals grotten, holle bomen of holen tijdens de dag wanneer het licht en lawaaierig is."
        }
      },
      {
        question: {
          en: "What makes a forest a good home for many animals?",
          es: "¿Qué hace que un bosque sea un buen hogar para muchos animales?",
          de: "Was macht einen Wald zu einem guten Zuhause für viele Tiere?",
          nl: "Wat maakt een bos tot een goed thuis voor veel dieren?"
        },
        options: [
          { en: "Trees, food, and shelter", es: "Árboles, comida y refugio", de: "Bäume, Nahrung und Schutz", nl: "Bomen, voedsel en schuilplaats" },
          { en: "Only trees", es: "Solo árboles", de: "Nur Bäume", nl: "Alleen bomen" },
          { en: "No food", es: "Sin comida", de: "Keine Nahrung", nl: "Geen voedsel" },
          { en: "Too much noise", es: "Demasiado ruido", de: "Zu viel Lärm", nl: "Te veel lawaai" }
        ],
        correct: 0,
        explanation: {
          en: "Forests provide everything animals need: trees for shelter and nesting, plants and fruits for food, water sources, and protection from weather and predators.",
          es: "Los bosques proporcionan todo lo que los animales necesitan: árboles para refugio y anidación, plantas y frutas para comida, fuentes de agua y protección del clima y depredadores.",
          de: "Wälder bieten alles, was Tiere brauchen: Bäume für Schutz und Nistplätze, Pflanzen und Früchte für Nahrung, Wasserquellen und Schutz vor Wetter und Raubtieren.",
          nl: "Bossen bieden alles wat dieren nodig hebben: bomen voor onderdak en nestelen, planten en vruchten voor voedsel, waterbronnen en bescherming tegen weer en roofdieren."
        }
      },
      {
        question: {
          en: "Where do pet dogs usually sleep?",
          es: "¿Dónde suelen dormir los perros domésticos?",
          de: "Wo schlafen Haushunde normalerweise?",
          nl: "Waar slapen huishonden meestal?"
        },
        options: [
          { en: "Inside houses with families", es: "Dentro de casas con familias", de: "In Häusern bei Familien", nl: "Binnen in huizen bij families" },
          { en: "Only outside", es: "Solo afuera", de: "Nur draußen", nl: "Alleen buiten" },
          { en: "In trees", es: "En árboles", de: "In Bäumen", nl: "In bomen" },
          { en: "Under water", es: "Bajo el agua", de: "Unter Wasser", nl: "Onder water" }
        ],
        correct: 0,
        explanation: {
          en: "Pet dogs are domesticated animals that have been bred to live with humans, so they sleep inside homes where they feel safe, warm, and close to their families.",
          es: "Los perros domésticos son animales domesticados que han sido criados para vivir con humanos, por lo que duermen dentro de las casas donde se sienten seguros, cálidos y cerca de sus familias.",
          de: "Haushunde sind domestizierte Tiere, die gezüchtet wurden, um mit Menschen zu leben, daher schlafen sie in Häusern, wo sie sich sicher, warm und nah bei ihren Familien fühlen.",
          nl: "Huisdieren honden zijn gedomesticeerde dieren die gefokt zijn om met mensen te leven, dus slapen ze binnen in huizen waar ze zich veilig, warm en dicht bij hun families voelen."
        }
      },
      {
        question: {
          en: "What do animals need most in their habitat to survive?",
          es: "¿Qué necesitan más los animales en su hábitat para sobrevivir?",
          de: "Was brauchen Tiere am meisten in ihrem Lebensraum zum Überleben?",
          nl: "Wat hebben dieren het meeste nodig in hun habitat om te overleven?"
        },
        options: [
          { en: "Food, water, and shelter", es: "Comida, agua y refugio", de: "Nahrung, Wasser und Schutz", nl: "Voedsel, water en schuilplaats" },
          { en: "Only toys", es: "Solo juguetes", de: "Nur Spielzeug", nl: "Alleen speelgoed" },
          { en: "Television", es: "Televisión", de: "Fernsehen", nl: "Televisie" },
          { en: "Money", es: "Dinero", de: "Geld", nl: "Geld" }
        ],
        correct: 0,
        explanation: {
          en: "All animals need these three basic things to survive: food for energy, clean water for drinking and staying hydrated, and shelter for protection from weather and predators.",
          es: "Todos los animales necesitan estas tres cosas básicas para sobrevivir: comida para energía, agua limpia para beber y mantenerse hidratados, y refugio para protección del clima y depredadores.",
          de: "Alle Tiere brauchen diese drei grundlegenden Dinge zum Überleben: Nahrung für Energie, sauberes Wasser zum Trinken und Hydratisiert bleiben, und Schutz vor Wetter und Raubtieren.",
          nl: "Alle dieren hebben deze drie basisbehoeften om te overleven: voedsel voor energie, schoon water om te drinken en gehydrateerd te blijven, en onderdak voor bescherming tegen weer en roofdieren."
        }
      },
      {
        question: {
          en: "Which animal builds the most complex homes?",
          es: "¿Qué animal construye las casas más complejas?",
          de: "Welches Tier baut die komplexesten Häuser?",
          nl: "Welk dier bouwt de meest complexe huizen?"
        },
        options: [
          { en: "Termites", es: "Termitas", de: "Termiten", nl: "Termieten" },
          { en: "Fish", es: "Peces", de: "Fische", nl: "Vissen" },
          { en: "Snakes", es: "Serpientes", de: "Schlangen", nl: "Slangen" },
          { en: "Frogs", es: "Ranas", de: "Frösche", nl: "Kikkers" }
        ],
        correct: 0,
        explanation: {
          en: "Termites build incredible skyscrapers called mounds that can be 20 feet tall with air conditioning systems, nurseries, fungus gardens, and complex tunnel networks.",
          es: "Las termitas construyen increíbles rascacielos llamados montículos que pueden tener 6 metros de altura con sistemas de aire acondicionado, guarderías, jardines de hongos y redes complejas de túneles.",
          de: "Termiten bauen unglaubliche Wolkenkratzer namens Hügel, die 6 Meter hoch sein können mit Klimaanlagen, Kindergärten, Pilzgärten und komplexen Tunnelnetzen.",
          nl: "Termieten bouwen ongelooflijke wolkenkrabbers genaamd heuvels die 6 meter hoog kunnen zijn met airconditioningsystemen, kinderkamers, schimmeltuinen en complexe tunnelnetwerken."
        }
      },
      {
        question: {
          en: "Where do most birds go when it gets very cold?",
          es: "¿A dónde van la mayoría de los pájaros cuando hace mucho frío?",
          de: "Wohin gehen die meisten Vögel, wenn es sehr kalt wird?",
          nl: "Waar gaan de meeste vogels naartoe als het erg koud wordt?"
        },
        options: [
          { en: "Warmer places", es: "Lugares más cálidos", de: "Wärmere Orte", nl: "Warmere plekken" },
          { en: "Colder places", es: "Lugares más fríos", de: "Kältere Orte", nl: "Koudere plekken" },
          { en: "Under water", es: "Bajo el agua", de: "Unter Wasser", nl: "Onder water" },
          { en: "Underground", es: "Subterráneo", de: "Unterirdisch", nl: "Ondergronds" }
        ],
        correct: 0,
        explanation: {
          en: "Many birds migrate south to warmer climates during winter because they can find more food and avoid freezing temperatures that would be dangerous for them.",
          es: "Muchos pájaros migran al sur a climas más cálidos durante el invierno porque pueden encontrar más comida y evitar temperaturas heladas que serían peligrosas para ellos.",
          de: "Viele Vögel wandern im Winter nach Süden in wärmere Klimazonen, weil sie dort mehr Nahrung finden und eisige Temperaturen vermeiden können, die für sie gefährlich wären.",
          nl: "Veel vogels trekken in de winter naar het zuiden naar warmere klimaten omdat ze daar meer voedsel kunnen vinden en vriestemperaturen kunnen vermijden die gevaarlijk voor hen zouden zijn."
        }
      },
      {
        question: {
          en: "What do we call the place where an animal is born and grows up?",
          es: "¿Cómo llamamos al lugar donde nace y crece un animal?",
          de: "Wie nennen wir den Ort, wo ein Tier geboren wird und aufwächst?",
          nl: "Hoe noemen we de plek waar een dier geboren wordt en opgroeit?"
        },
        options: [
          { en: "Habitat", es: "Hábitat", de: "Lebensraum", nl: "Habitat" },
          { en: "Store", es: "Tienda", de: "Laden", nl: "Winkel" },
          { en: "School", es: "Escuela", de: "Schule", nl: "School" },
          { en: "Restaurant", es: "Restaurante", de: "Restaurant", nl: "Restaurant" }
        ],
        correct: 0,
        explanation: {
          en: "A habitat is the natural environment where an animal lives and finds everything it needs to survive, including food, water, shelter, and space to grow and reproduce.",
          es: "Un hábitat es el ambiente natural donde vive un animal y encuentra todo lo que necesita para sobrevivir, incluyendo comida, agua, refugio y espacio para crecer y reproducirse.",
          de: "Ein Lebensraum ist die natürliche Umgebung, in der ein Tier lebt und alles findet, was es zum Überleben braucht, einschließlich Nahrung, Wasser, Schutz und Platz zum Wachsen und Fortpflanzen.",
          nl: "Een habitat is de natuurlijke omgeving waar een dier leeft en alles vindt wat het nodig heeft om te overleven, inclusief voedsel, water, onderdak en ruimte om te groeien en voort te planten."
        }
      },
      {
        question: {
          en: "Where do most snakes like to hide?",
          es: "¿Dónde les gusta esconderse a la mayoría de las serpientes?",
          de: "Wo verstecken sich die meisten Schlangen gerne?",
          nl: "Waar verstoppen de meeste slangen zich graag?"
        },
        options: [
          { en: "Under rocks or logs", es: "Bajo rocas o troncos", de: "Unter Felsen oder Baumstämmen", nl: "Onder rotsen of boomstammen" },
          { en: "In trees only", es: "Solo en árboles", de: "Nur in Bäumen", nl: "Alleen in bomen" },
          { en: "In water only", es: "Solo en agua", de: "Nur im Wasser", nl: "Alleen in water" },
          { en: "In the open", es: "Al aire libre", de: "Im Freien", nl: "In het open veld" }
        ],
        correct: 0,
        explanation: {
          en: "Most snakes are shy animals that hide under rocks, logs, or in tall grass where they can stay cool, avoid predators, and ambush their prey.",
          es: "La mayoría de las serpientes son animales tímidos que se esconden bajo rocas, troncos o en hierba alta donde pueden mantenerse frescas, evitar depredadores y emboscar a sus presas.",
          de: "Die meisten Schlangen sind scheue Tiere, die sich unter Felsen, Baumstämmen oder in hohem Gras verstecken, wo sie kühl bleiben, Raubtiere vermeiden und ihre Beute überfallen können.",
          nl: "De meeste slangen zijn schuwe dieren die zich verstoppen onder rotsen, boomstammen of in hoog gras waar ze koel kunnen blijven, roofdieren kunnen vermijden en hun prooi kunnen overvallen."
        }
      },
      {
        question: {
          en: "How do animals that migrate know which direction to go?",
          es: "¿Cómo saben los animales que migran en qué dirección ir?",
          de: "Woher wissen Tiere, die wandern, in welche Richtung sie gehen sollen?",
          nl: "Hoe weten dieren die trekken welke richting ze op moeten?"
        },
        options: [
          { en: "They use the sun, stars, and magnetic fields", es: "Usan el sol, las estrellas y campos magnéticos", de: "Sie nutzen Sonne, Sterne und Magnetfelder", nl: "Ze gebruiken de zon, sterren en magnetische velden" },
          { en: "They follow roads and highways", es: "Siguen carreteras y autopistas", de: "Sie folgen Straßen und Autobahnen", nl: "Ze volgen wegen en snelwegen" },
          { en: "They ask other animals for directions", es: "Piden direcciones a otros animales", de: "Sie fragen andere Tiere nach dem Weg", nl: "Ze vragen andere dieren om de weg" },
          { en: "They use GPS devices", es: "Usan dispositivos GPS", de: "Sie benutzen GPS-Geräte", nl: "Ze gebruiken GPS-apparaten" }
        ],
        correct: 0,
        explanation: {
          en: "Migrating animals have amazing natural navigation abilities using the sun's position during the day, star patterns at night, Earth's magnetic field, and even landmarks and scents to find their way across thousands of miles.",
          es: "Los animales migratorios tienen increíbles habilidades de navegación natural usando la posición del sol durante el día, patrones de estrellas por la noche, el campo magnético de la Tierra, e incluso puntos de referencia y olores para encontrar su camino a través de miles de millas.",
          de: "Wandernde Tiere haben erstaunliche natürliche Navigationsfähigkeiten und nutzen die Sonnenposition während des Tages, Sternmuster bei Nacht, das Magnetfeld der Erde und sogar Orientierungspunkte und Gerüche, um ihren Weg über Tausende von Kilometern zu finden.",
          nl: "Trekkende dieren hebben verbazingwekkende natuurlijke navigatievaardigheden en gebruiken de positie van de zon overdag, sterrenpatronen 's nachts, het magnetische veld van de aarde en zelfs oriëntatiepunten en geuren om hun weg te vinden over duizenden kilometers."
        }
      },
      {
        question: {
          en: "What do we call animals that hunt and eat other animals?",
          es: "¿Cómo llamamos a los animales que cazan y comen otros animales?",
          de: "Wie nennen wir Tiere, die andere Tiere jagen und fressen?",
          nl: "Hoe noemen we dieren die andere dieren jagen en eten?"
        },
        options: [
          { en: "Predators", es: "Depredadores", de: "Raubtiere", nl: "Roofdieren" },
          { en: "Herbivores", es: "Herbívoros", de: "Pflanzenfresser", nl: "Planteneters" },
          { en: "Scavengers", es: "Carroñeros", de: "Aasfresser", nl: "Aaseters" },
          { en: "Omnivores", es: "Omnívoros", de: "Allesfresser", nl: "Alleseters" }
        ],
        correct: 0,
        explanation: {
          en: "Predators are animals that actively hunt, catch, and eat other living animals called prey. They have special adaptations like sharp teeth, claws, good eyesight, and hunting strategies to catch their food.",
          es: "Los depredadores son animales que activamente cazan, capturan y comen otros animales vivos llamados presas. Tienen adaptaciones especiales como dientes afilados, garras, buena vista y estrategias de caza para capturar su comida.",
          de: "Raubtiere sind Tiere, die aktiv andere lebende Tiere, genannt Beute, jagen, fangen und fressen. Sie haben spezielle Anpassungen wie scharfe Zähne, Krallen, gute Augen und Jagdstrategien, um ihre Nahrung zu fangen.",
          nl: "Roofdieren zijn dieren die actief jagen op, vangen en eten van andere levende dieren die prooien worden genoemd. Ze hebben speciale aanpassingen zoals scherpe tanden, klauwen, goed zicht en jachtstrategieën om hun voedsel te vangen."
        }
      },
      {
        question: {
          en: "Why do some animals hibernate in winter?",
          es: "¿Por qué algunos animales hibernan en invierno?",
          de: "Warum halten manche Tiere Winterschlaf?",
          nl: "Waarom houden sommige dieren winterslaap?"
        },
        options: [
          { en: "To survive when food is scarce and weather is harsh", es: "Para sobrevivir cuando la comida es escasa y el clima es duro", de: "Um zu überleben, wenn Nahrung knapp und das Wetter hart ist", nl: "Om te overleven wanneer voedsel schaars is en het weer hard is" },
          { en: "Because they get bored in winter", es: "Porque se aburren en invierno", de: "Weil sie sich im Winter langweilen", nl: "Omdat ze zich vervelen in de winter" },
          { en: "To avoid other animals", es: "Para evitar otros animales", de: "Um andere Tiere zu vermeiden", nl: "Om andere dieren te vermijden" },
          { en: "Because they like to sleep a lot", es: "Porque les gusta dormir mucho", de: "Weil sie gerne viel schlafen", nl: "Omdat ze graag veel slapen" }
        ],
        correct: 0,
        explanation: {
          en: "Hibernation is a survival strategy where animals slow down their body functions to save energy during winter months when food is hard to find and temperatures are very cold. Their heart rate, breathing, and body temperature all decrease dramatically.",
          es: "La hibernación es una estrategia de supervivencia donde los animales ralentizan sus funciones corporales para ahorrar energía durante los meses de invierno cuando la comida es difícil de encontrar y las temperaturas son muy frías. Su ritmo cardíaco, respiración y temperatura corporal disminuyen dramáticamente.",
          de: "Winterschlaf ist eine Überlebensstrategie, bei der Tiere ihre Körperfunktionen verlangsamen, um während der Wintermonate Energie zu sparen, wenn Nahrung schwer zu finden und die Temperaturen sehr kalt sind. Herzschlag, Atmung und Körpertemperatur sinken dramatisch.",
          nl: "Winterslaap is een overlevingsstrategie waarbij dieren hun lichaamsfuncties vertragen om energie te besparen tijdens de wintermaanden wanneer voedsel moeilijk te vinden is en temperaturen erg koud zijn. Hun hartslag, ademhaling en lichaamstemperatuur dalen dramatisch."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('warm-up/animals', level2);
  }
})();