// Animals - Level 1: Amazing Animals
(function() {
  const level1 = {
    name: {
      en: "Amazing Animals",
      es: "Animales Increíbles",
      de: "Erstaunliche Tiere",
      nl: "Verbazingwekkende Dieren"
    },
    questions: [
      {
        question: {
          en: "Which animal is the fastest on land?",
          es: "¿Qué animal es el más rápido en tierra?",
          de: "Welches Tier ist das schnellste an Land?",
          nl: "Welk dier is het snelst op land?"
        },
        options: [
          { en: "Cheetah", es: "Guepardo", de: "Gepard", nl: "Jachtluipaard" },
          { en: "Lion", es: "León", de: "Löwe", nl: "Leeuw" },
          { en: "Horse", es: "Caballo", de: "Pferd", nl: "Paard" },
          { en: "Gazelle", es: "Gacela", de: "Gazelle", nl: "Gazelle" }
        ],
        correct: 0,
        explanation: {
          en: "The cheetah can reach speeds up to 70 mph (112 km/h), making it the fastest land animal in the world. Its body is specially adapted for speed with a lightweight frame and powerful legs.",
          es: "El guepardo puede alcanzar velocidades de hasta 112 km/h, convirtiéndolo en el animal terrestre más rápido del mundo. Su cuerpo está especialmente adaptado para la velocidad con un marco ligero y patas poderosas.",
          de: "Der Gepard kann Geschwindigkeiten von bis zu 112 km/h erreichen, was ihn zum schnellsten Landtier der Welt macht. Sein Körper ist speziell für Geschwindigkeit angepasst mit einem leichten Rahmen und kräftigen Beinen.",
          nl: "De jachtluipaard kan snelheden bereiken tot 112 km/u, waardoor het het snelste landdier ter wereld is. Zijn lichaam is speciaal aangepast voor snelheid met een lichtgewicht frame en krachtige benen."
        }
      },
      {
        question: {
          en: "What do we call animals that eat only plants?",
          es: "¿Cómo llamamos a los animales que comen solo plantas?",
          de: "Wie nennen wir Tiere, die nur Pflanzen fressen?",
          nl: "Hoe noemen we dieren die alleen planten eten?"
        },
        options: [
          { en: "Herbivores", es: "Herbívoros", de: "Pflanzenfresser", nl: "Herbivoren" },
          { en: "Carnivores", es: "Carnívoros", de: "Fleischfresser", nl: "Carnivoren" },
          { en: "Omnivores", es: "Omnívoros", de: "Allesfresser", nl: "Omnivoren" },
          { en: "Insectivores", es: "Insectívoros", de: "Insektenfresser", nl: "Insectivoren" }
        ],
        correct: 0,
        explanation: {
          en: "Herbivores are animals that eat only plants. Examples include cows, deer, elephants, and rabbits. They have special teeth and digestive systems adapted to break down plant matter.",
          es: "Los herbívoros son animales que comen solo plantas. Los ejemplos incluyen vacas, ciervos, elefantes y conejos. Tienen dientes especiales y sistemas digestivos adaptados para descomponer la materia vegetal.",
          de: "Pflanzenfresser sind Tiere, die nur Pflanzen fressen. Beispiele sind Kühe, Hirsche, Elefanten und Kaninchen. Sie haben spezielle Zähne und Verdauungssysteme, die zum Abbau von Pflanzenmaterial angepasst sind.",
          nl: "Herbivoren zijn dieren die alleen planten eten. Voorbeelden zijn koeien, herten, olifanten en konijnen. Ze hebben speciale tanden en spijsverteringssystemen die aangepast zijn om plantenmateriaal af te breken."
        }
      },
      {
        question: {
          en: "Which animal is known as the 'King of the Jungle'?",
          es: "¿Qué animal es conocido como el 'Rey de la Selva'?",
          de: "Welches Tier ist als 'König des Dschungels' bekannt?",
          nl: "Welk dier staat bekend als de 'Koning van de Jungle'?"
        },
        options: [
          { en: "Lion", es: "León", de: "Löwe", nl: "Leeuw" },
          { en: "Tiger", es: "Tigre", de: "Tiger", nl: "Tijger" },
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" },
          { en: "Gorilla", es: "Gorila", de: "Gorilla", nl: "Gorilla" }
        ],
        correct: 0,
        explanation: {
          en: "Lions are often called the 'King of the Jungle' due to their majestic appearance and social dominance, though they actually live in grasslands and savannas, not jungles.",
          es: "Los leones a menudo se llaman el 'Rey de la Selva' debido a su apariencia majestuosa y dominancia social, aunque en realidad viven en pastizales y sabanas, no en selvas.",
          de: "Löwen werden oft 'König des Dschungels' genannt aufgrund ihrer majestätischen Erscheinung und sozialen Dominanz, obwohl sie tatsächlich in Grasländern und Savannen leben, nicht im Dschungel.",
          nl: "Leeuwen worden vaak de 'Koning van de Jungle' genoemd vanwege hun majestueuze verschijning en sociale dominantie, hoewel ze eigenlijk in graslanden en savanne's leven, niet in jungles."
        }
      },
      {
        question: {
          en: "How many legs does a spider have?",
          es: "¿Cuántas patas tiene una araña?",
          de: "Wie viele Beine hat eine Spinne?",
          nl: "Hoeveel poten heeft een spin?"
        },
        options: [
          { en: "8", es: "8", de: "8", nl: "8" },
          { en: "6", es: "6", de: "6", nl: "6" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correct: 0,
        explanation: {
          en: "Spiders are arachnids, not insects, and all arachnids have 8 legs. This distinguishes them from insects which have 6 legs.",
          es: "Las arañas son arácnidos, no insectos, y todos los arácnidos tienen 8 patas. Esto las distingue de los insectos que tienen 6 patas.",
          de: "Spinnen sind Spinnentiere, keine Insekten, und alle Spinnentiere haben 8 Beine. Das unterscheidet sie von Insekten, die 6 Beine haben.",
          nl: "Spinnen zijn spinachtigen, geen insecten, en alle spinachtigen hebben 8 poten. Dit onderscheidt hen van insecten die 6 poten hebben."
        }
      },
      {
        question: {
          en: "What is the largest mammal in the world?",
          es: "¿Cuál es el mamífero más grande del mundo?",
          de: "Welches ist das größte Säugetier der Welt?",
          nl: "Wat is het grootste zoogdier ter wereld?"
        },
        options: [
          { en: "Blue whale", es: "Ballena azul", de: "Blauwal", nl: "Blauwe vinvis" },
          { en: "African elephant", es: "Elefante africano", de: "Afrikanischer Elefant", nl: "Afrikaanse olifant" },
          { en: "Giraffe", es: "Jirafa", de: "Giraffe", nl: "Giraf" },
          { en: "Polar bear", es: "Oso polar", de: "Eisbär", nl: "IJsbeer" }
        ],
        correct: 0,
        explanation: {
          en: "Blue whales can grow up to 100 feet long and weigh up to 200 tons, making them not only the largest mammal but the largest animal that has ever lived on Earth.",
          es: "Las ballenas azules pueden crecer hasta 30 metros de largo y pesar hasta 200 toneladas, convirtiéndolas no solo en el mamífero más grande sino en el animal más grande que haya vivido en la Tierra.",
          de: "Blauwale können bis zu 30 Meter lang werden und bis zu 200 Tonnen wiegen, was sie nicht nur zum größten Säugetier, sondern zum größten Tier macht, das je auf der Erde gelebt hat.",
          nl: "Blauwe vinvissen kunnen tot 30 meter lang worden en tot 200 ton wegen, waardoor ze niet alleen het grootste zoogdier zijn maar het grootste dier dat ooit op aarde heeft geleefd."
        }
      },
      {
        question: {
          en: "Which animal has black and white stripes?",
          es: "¿Qué animal tiene rayas blancas y negras?",
          de: "Welches Tier hat schwarze und weiße Streifen?",
          nl: "Welk dier heeft zwarte en witte strepen?"
        },
        options: [
          { en: "Zebra", es: "Cebra", de: "Zebra", nl: "Zebra" },
          { en: "Horse", es: "Caballo", de: "Pferd", nl: "Paard" },
          { en: "Cow", es: "Vaca", de: "Kuh", nl: "Koe" },
          { en: "Donkey", es: "Burro", de: "Esel", nl: "Ezel" }
        ],
        correct: 0,
        explanation: {
          en: "Each zebra has a unique stripe pattern, like human fingerprints. These stripes help confuse predators and may also help regulate body temperature.",
          es: "Cada cebra tiene un patrón de rayas único, como las huellas dactilares humanas. Estas rayas ayudan a confundir a los depredadores y también pueden ayudar a regular la temperatura corporal.",
          de: "Jedes Zebra hat ein einzigartiges Streifenmuster, wie menschliche Fingerabdrücke. Diese Streifen helfen dabei, Raubtiere zu verwirren und können auch bei der Körpertemperaturregulierung helfen.",
          nl: "Elke zebra heeft een uniek strepenpatroon, zoals menselijke vingerafdrukken. Deze strepen helpen roofdieren te verwarren en kunnen ook helpen bij het reguleren van de lichaamstemperatuur."
        }
      },
      {
        question: {
          en: "What sound do dogs make?",
          es: "¿Qué sonido hacen los perros?",
          de: "Welchen Laut machen Hunde?",
          nl: "Welk geluid maken honden?"
        },
        options: [
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Meow", es: "Maullar", de: "Miauen", nl: "Miauwen" },
          { en: "Moo", es: "Mugir", de: "Muhen", nl: "Loeien" },
          { en: "Oink", es: "Gruñir", de: "Grunzen", nl: "Knorren" }
        ],
        correct: 0,
        explanation: {
          en: "Dogs bark to communicate various emotions and alerts, from excitement and playfulness to warning of danger or seeking attention from their owners.",
          es: "Los perros ladran para comunicar varias emociones y alertas, desde emoción y juego hasta advertir de peligro o buscar atención de sus dueños.",
          de: "Hunde bellen, um verschiedene Emotionen und Warnungen zu kommunizieren, von Aufregung und Verspieltheit bis hin zur Warnung vor Gefahr oder dem Suchen von Aufmerksamkeit ihrer Besitzer.",
          nl: "Honden blaffen om verschillende emoties en waarschuwingen te communiceren, van opwinding en speelsheid tot waarschuwen voor gevaar of het zoeken naar aandacht van hun eigenaren."
        }
      },
      {
        question: {
          en: "Which animal has the longest neck?",
          es: "¿Qué animal tiene el cuello más largo?",
          de: "Welches Tier hat den längsten Hals?",
          nl: "Welk dier heeft de langste nek?"
        },
        options: [
          { en: "Giraffe", es: "Jirafa", de: "Giraffe", nl: "Giraf" },
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" },
          { en: "Rhino", es: "Rinoceronte", de: "Nashorn", nl: "Neushoorn" },
          { en: "Hippo", es: "Hipopótamo", de: "Nilpferd", nl: "Nijlpaard" }
        ],
        correct: 0,
        explanation: {
          en: "Giraffes can have necks up to 6 feet long with only 7 vertebrae - the same number as humans! Their long necks help them reach leaves high in trees that other animals cannot access.",
          es: "Las jirafas pueden tener cuellos de hasta 1,8 metros de largo con solo 7 vértebras, ¡el mismo número que los humanos! Sus cuellos largos les ayudan a alcanzar hojas altas en los árboles que otros animales no pueden acceder.",
          de: "Giraffen können Hälse von bis zu 1,8 Metern Länge mit nur 7 Wirbeln haben - die gleiche Anzahl wie Menschen! Ihre langen Hälse helfen ihnen, Blätter hoch in Bäumen zu erreichen, die andere Tiere nicht erreichen können.",
          nl: "Giraffen kunnen nekken hebben tot 1,8 meter lang met slechts 7 wervels - hetzelfde aantal als mensen! Hun lange nekken helpen hen bladeren hoog in bomen te bereiken die andere dieren niet kunnen bereiken."
        }
      },
      {
        question: {
          en: "What do cats use to climb trees?",
          es: "¿Qué usan los gatos para trepar árboles?",
          de: "Was benutzen Katzen zum Baumklettern?",
          nl: "Wat gebruiken katten om in bomen te klimmen?"
        },
        options: [
          { en: "Claws", es: "Garras", de: "Krallen", nl: "Klauwen" },
          { en: "Teeth", es: "Dientes", de: "Zähne", nl: "Tanden" },
          { en: "Tail", es: "Cola", de: "Schwanz", nl: "Staart" },
          { en: "Ears", es: "Orejas", de: "Ohren", nl: "Oren" }
        ],
        correct: 0,
        explanation: {
          en: "Cats have sharp, retractable claws that they use for climbing, hunting, and self-defense. They can extend and retract their claws as needed.",
          es: "Los gatos tienen garras afiladas y retráctiles que usan para trepar, cazar y defenderse. Pueden extender y retraer sus garras según sea necesario.",
          de: "Katzen haben scharfe, einziehbare Krallen, die sie zum Klettern, Jagen und zur Selbstverteidigung verwenden. Sie können ihre Krallen nach Bedarf ausfahren und einziehen.",
          nl: "Katten hebben scherpe, intrekbare klauwen die ze gebruiken om te klimmen, jagen en zichzelf te verdedigen. Ze kunnen hun klauwen naar behoefte uitsteken en intrekken."
        }
      },
      {
        question: {
          en: "Which animal can change its color?",
          es: "¿Qué animal puede cambiar su color?",
          de: "Welches Tier kann seine Farbe ändern?",
          nl: "Welk dier kan van kleur veranderen?"
        },
        options: [
          { en: "Chameleon", es: "Camaleón", de: "Chamäleon", nl: "Kameleon" },
          { en: "Snake", es: "Serpiente", de: "Schlange", nl: "Slang" },
          { en: "Lizard", es: "Lagarto", de: "Echse", nl: "Hagedis" },
          { en: "Turtle", es: "Tortuga", de: "Schildkröte", nl: "Schildpad" }
        ],
        correct: 0,
        explanation: {
          en: "Chameleons change color for communication, temperature regulation, and camouflage. They have special cells called chromatophores that contain different colored pigments.",
          es: "Los camaleones cambian de color para comunicación, regulación de temperatura y camuflaje. Tienen células especiales llamadas cromatóforos que contienen pigmentos de diferentes colores.",
          de: "Chamäleons ändern ihre Farbe zur Kommunikation, Temperaturregulierung und Tarnung. Sie haben spezielle Zellen namens Chromatophoren, die verschiedenfarbige Pigmente enthalten.",
          nl: "Kameleons veranderen van kleur voor communicatie, temperatuurregulering en camouflage. Ze hebben speciale cellen genaamd chromatoforen die verschillende gekleurde pigmenten bevatten."
        }
      },
      {
        question: {
          en: "What do bees make that people love to eat?",
          es: "¿Qué hacen las abejas que a la gente le encanta comer?",
          de: "Was machen Bienen, das Menschen gerne essen?",
          nl: "Wat maken bijen dat mensen graag eten?"
        },
        options: [
          { en: "Honey", es: "Miel", de: "Honig", nl: "Honing" },
          { en: "Silk", es: "Seda", de: "Seide", nl: "Zijde" },
          { en: "Milk", es: "Leche", de: "Milch", nl: "Melk" },
          { en: "Eggs", es: "Huevos", de: "Eier", nl: "Eieren" }
        ],
        correct: 0,
        explanation: {
          en: "Bees collect nectar from flowers and transform it into honey through enzymatic processes in their honey stomachs. Honey provides energy and has natural preservative properties.",
          es: "Las abejas recolectan néctar de las flores y lo transforman en miel a través de procesos enzimáticos en sus estómagos de miel. La miel proporciona energía y tiene propiedades conservantes naturales.",
          de: "Bienen sammeln Nektar von Blüten und verwandeln ihn durch enzymatische Prozesse in ihren Honigmägen in Honig. Honig spendet Energie und hat natürliche konservierende Eigenschaften.",
          nl: "Bijen verzamelen nectar van bloemen en transformeren het tot honing door enzymatische processen in hun honingmagen. Honing geeft energie en heeft natuurlijke conserverende eigenschappen."
        }
      },
      {
        question: {
          en: "Which animal sleeps most of the day?",
          es: "¿Qué animal duerme la mayor parte del día?",
          de: "Welches Tier schläft den größten Teil des Tages?",
          nl: "Welk dier slaapt het grootste deel van de dag?"
        },
        options: [
          { en: "Koala", es: "Koala", de: "Koala", nl: "Koala" },
          { en: "Monkey", es: "Mono", de: "Affe", nl: "Aap" },
          { en: "Rabbit", es: "Conejo", de: "Kaninchen", nl: "Konijn" },
          { en: "Squirrel", es: "Ardilla", de: "Eichhörnchen", nl: "Eekhoorn" }
        ],
        correct: 0,
        explanation: {
          en: "Koalas sleep 18-22 hours per day because their diet of eucalyptus leaves provides very little energy and requires a lot of energy to digest.",
          es: "Los koalas duermen de 18 a 22 horas por día porque su dieta de hojas de eucalipto proporciona muy poca energía y requiere mucha energía para digerir.",
          de: "Koalas schlafen 18-22 Stunden pro Tag, weil ihre Ernährung mit Eukalyptusblättern sehr wenig Energie liefert und viel Energie zum Verdauen benötigt.",
          nl: "Koala's slapen 18-22 uur per dag omdat hun dieet van eucalyptusbladeren heel weinig energie geeft en veel energie nodig heeft om te verteren."
        }
      },
      {
        question: {
          en: "What do we call baby cats?",
          es: "¿Cómo llamamos a los gatos bebé?",
          de: "Wie nennen wir Katzenbabys?",
          nl: "Hoe noemen we baby katten?"
        },
        options: [
          { en: "Kittens", es: "Gatitos", de: "Kätzchen", nl: "Kittens" },
          { en: "Puppies", es: "Cachorros", de: "Welpen", nl: "Puppy's" },
          { en: "Cubs", es: "Cachorros", de: "Junge", nl: "Welpen" },
          { en: "Chicks", es: "Pollitos", de: "Küken", nl: "Kuikens" }
        ],
        correct: 0,
        explanation: {
          en: "Baby cats are called kittens. They are born after about 64-67 days of pregnancy and are dependent on their mother for several weeks.",
          es: "Los gatos bebé se llaman gatitos. Nacen después de aproximadamente 64-67 días de embarazo y dependen de su madre durante varias semanas.",
          de: "Katzenbabys werden Kätzchen genannt. Sie werden nach etwa 64-67 Tagen der Schwangerschaft geboren und sind mehrere Wochen von ihrer Mutter abhängig.",
          nl: "Baby katten worden kittens genoemd. Ze worden geboren na ongeveer 64-67 dagen zwangerschap en zijn enkele weken afhankelijk van hun moeder."
        }
      },
      {
        question: {
          en: "Which animal hops on strong hind legs?",
          es: "¿Qué animal salta con patas traseras fuertes?",
          de: "Welches Tier hüpft auf starken Hinterbeinen?",
          nl: "Welk dier springt op sterke achterpoten?"
        },
        options: [
          { en: "Kangaroo", es: "Canguro", de: "Känguru", nl: "Kangoeroe" },
          { en: "Bear", es: "Oso", de: "Bär", nl: "Beer" },
          { en: "Wolf", es: "Lobo", de: "Wolf", nl: "Wolf" },
          { en: "Fox", es: "Zorro", de: "Fuchs", nl: "Vos" }
        ],
        correct: 0,
        explanation: {
          en: "Kangaroos have incredibly powerful hind legs that can propel them up to 35 mph and jump 25 feet in a single bound.",
          es: "Los canguros tienen patas traseras increíblemente poderosas que pueden impulsarlos hasta 56 km/h y saltar 7.5 metros en un solo salto.",
          de: "Kängurus haben unglaublich kräftige Hinterbeine, die sie bis zu 56 km/h antreiben und 7,5 Meter in einem Sprung springen lassen können.",
          nl: "Kangoeroes hebben ongelooflijk krachtige achterpoten die hen tot 56 km/u kunnen voortdrijven en 7,5 meter in één sprong kunnen springen."
        }
      },
      {
        question: {
          en: "How do fish breathe underwater?",
          es: "¿Cómo respiran los peces bajo el agua?",
          de: "Wie atmen Fische unter Wasser?",
          nl: "Hoe ademen vissen onder water?"
        },
        options: [
          { en: "Gills", es: "Branquias", de: "Kiemen", nl: "Kieuwen" },
          { en: "Lungs", es: "Pulmones", de: "Lungen", nl: "Longen" },
          { en: "Nose", es: "Nariz", de: "Nase", nl: "Neus" },
          { en: "Mouth", es: "Boca", de: "Mund", nl: "Mond" }
        ],
        correct: 0,
        explanation: {
          en: "Gills extract oxygen from water as it flows over them, allowing fish to breathe underwater.",
          es: "Las branquias extraen oxígeno del agua mientras fluye sobre ellas, permitiendo que los peces respiren bajo el agua.",
          de: "Kiemen extrahieren Sauerstoff aus dem Wasser, während es über sie fließt, wodurch Fische unter Wasser atmen können.",
          nl: "Kieuwen halen zuurstof uit water terwijl het erover stroomt, waardoor vissen onder water kunnen ademen."
        }
      },
      {
        question: {
          en: "Which bird cannot fly?",
          es: "¿Qué pájaro no puede volar?",
          de: "Welcher Vogel kann nicht fliegen?",
          nl: "Welke vogel kan niet vliegen?"
        },
        options: [
          { en: "Penguin", es: "Pingüino", de: "Pinguin", nl: "Pinguïn" },
          { en: "Eagle", es: "Águila", de: "Adler", nl: "Arend" },
          { en: "Parrot", es: "Loro", de: "Papagei", nl: "Papegaai" },
          { en: "Robin", es: "Petirrojo", de: "Rotkehlchen", nl: "Roodborst" }
        ],
        correct: 0,
        explanation: {
          en: "Penguins evolved to swim instead of fly, using their wings as flippers to 'fly' through water at speeds up to 22 mph.",
          es: "Los pingüinos evolucionaron para nadar en lugar de volar, usando sus alas como aletas para 'volar' por el agua a velocidades de hasta 35 km/h.",
          de: "Pinguine haben sich entwickelt, um zu schwimmen statt zu fliegen, und nutzen ihre Flügel als Flossen, um mit bis zu 35 km/h durch das Wasser zu 'fliegen'.",
          nl: "Pinguïns evolueerden om te zwemmen in plaats van te vliegen, waarbij ze hun vleugels als vinnen gebruiken om met snelheden tot 35 km/u door het water te 'vliegen'."
        }
      },
      {
        question: {
          en: "What do we call animals that are active at night?",
          es: "¿Cómo llamamos a los animales que están activos por la noche?",
          de: "Wie nennen wir Tiere, die nachts aktiv sind?",
          nl: "Hoe noemen we dieren die 's nachts actief zijn?"
        },
        options: [
          { en: "Nocturnal", es: "Nocturnos", de: "Nachtaktiv", nl: "Nachtdieren" },
          { en: "Diurnal", es: "Diurnos", de: "Tagaktiv", nl: "Dagdieren" },
          { en: "Hibernating", es: "Hibernando", de: "Winterschlafend", nl: "Overwinterend" },
          { en: "Migrating", es: "Migrando", de: "Wandernd", nl: "Migrerend" }
        ],
        correct: 0,
        explanation: {
          en: "Nocturnal animals have adapted to be active at night when there's less competition and cooler temperatures.",
          es: "Los animales nocturnos se han adaptado para estar activos por la noche cuando hay menos competencia y temperaturas más frescas.",
          de: "Nachtaktive Tiere haben sich angepasst, um nachts aktiv zu sein, wenn es weniger Konkurrenz und kühlere Temperaturen gibt.",
          nl: "Nachtdieren hebben zich aangepast om 's nachts actief te zijn wanneer er minder concurrentie en koelere temperaturen zijn."
        }
      },
      {
        question: {
          en: "Which animal builds dams?",
          es: "¿Qué animal construye presas?",
          de: "Welches Tier baut Dämme?",
          nl: "Welk dier bouwt dammen?"
        },
        options: [
          { en: "Beaver", es: "Castor", de: "Biber", nl: "Bever" },
          { en: "Otter", es: "Nutria", de: "Otter", nl: "Otter" },
          { en: "Muskrat", es: "Rata almizclera", de: "Bisamratte", nl: "Muskusrat" },
          { en: "Platypus", es: "Ornitorrinco", de: "Schnabeltier", nl: "Vogelbekdier" }
        ],
        correct: 0,
        explanation: {
          en: "Beavers are nature's engineers, building dams to create deep ponds for protection from predators.",
          es: "Los castores son los ingenieros de la naturaleza, construyendo presas para crear estanques profundos para protegerse de los depredadores.",
          de: "Biber sind die Ingenieure der Natur und bauen Dämme, um tiefe Teiche zum Schutz vor Raubtieren zu schaffen.",
          nl: "Bevers zijn de ingenieurs van de natuur en bouwen dammen om diepe vijvers te creëren ter bescherming tegen roofdieren."
        }
      },
      {
        question: {
          en: "What color is a polar bear's skin?",
          es: "¿De qué color es la piel de un oso polar?",
          de: "Welche Farbe hat die Haut eines Eisbären?",
          nl: "Welke kleur heeft de huid van een ijsbeer?"
        },
        options: [
          { en: "Black", es: "Negro", de: "Schwarz", nl: "Zwart" },
          { en: "White", es: "Blanco", de: "Weiß", nl: "Wit" },
          { en: "Pink", es: "Rosa", de: "Rosa", nl: "Roze" },
          { en: "Brown", es: "Marrón", de: "Braun", nl: "Bruin" }
        ],
        correct: 0,
        explanation: {
          en: "Polar bears have black skin under their white fur to absorb heat from the sun more efficiently.",
          es: "Los osos polares tienen piel negra bajo su pelaje blanco para absorber el calor del sol de manera más eficiente.",
          de: "Eisbären haben schwarze Haut unter ihrem weißen Fell, um die Sonnenwärme effizienter zu absorbieren.",
          nl: "IJsberen hebben zwarte huid onder hun witte vacht om warmte van de zon efficiënter te absorberen."
        }
      },
      {
        question: {
          en: "Which animal never forgets?",
          es: "¿Qué animal nunca olvida?",
          de: "Welches Tier vergisst nie?",
          nl: "Welk dier vergeet nooit?"
        },
        options: [
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" },
          { en: "Mouse", es: "Ratón", de: "Maus", nl: "Muis" },
          { en: "Goldfish", es: "Pez dorado", de: "Goldfisch", nl: "Goudvis" },
          { en: "Hamster", es: "Hámster", de: "Hamster", nl: "Hamster" }
        ],
        correct: 0,
        explanation: {
          en: "Elephants have exceptional memory and can remember other elephants and locations for decades.",
          es: "Los elefantes tienen una memoria excepcional y pueden recordar otros elefantes y ubicaciones durante décadas.",
          de: "Elefanten haben ein außergewöhnliches Gedächtnis und können sich jahrzehntelang an andere Elefanten und Orte erinnern.",
          nl: "Olifanten hebben een uitzonderlijk geheugen en kunnen zich tientallen jaren andere olifanten en locaties herinneren."
        }
      },
      {
        question: {
          en: "What do we call a group of fish swimming together?",
          es: "¿Cómo llamamos a un grupo de peces nadando juntos?",
          de: "Wie nennen wir eine Gruppe von Fischen, die zusammen schwimmen?",
          nl: "Hoe noemen we een groep vissen die samen zwemmen?"
        },
        options: [
          { en: "School", es: "Cardumen", de: "Schwarm", nl: "School" },
          { en: "Flock", es: "Bandada", de: "Herde", nl: "Kudde" },
          { en: "Pack", es: "Manada", de: "Rudel", nl: "Roedel" },
          { en: "Herd", es: "Rebaño", de: "Herde", nl: "Kudde" }
        ],
        correct: 0,
        explanation: {
          en: "A school of fish swim together for protection from predators and to improve their feeding efficiency.",
          es: "Un cardumen de peces nada junto para protegerse de los depredadores y mejorar su eficiencia de alimentación.",
          de: "Ein Fischschwarm schwimmt zusammen zum Schutz vor Raubtieren und zur Verbesserung ihrer Nahrungseffizienz.",
          nl: "Een school vissen zwemt samen voor bescherming tegen roofdieren en om hun voedingsefficiëntie te verbeteren."
        }
      },
      {
        question: {
          en: "Which bird can turn its head almost all the way around?",
          es: "¿Qué pájaro puede girar su cabeza casi completamente?",
          de: "Welcher Vogel kann seinen Kopf fast ganz herumdrehen?",
          nl: "Welke vogel kan zijn kop bijna helemaal omdraaien?"
        },
        options: [
          { en: "Owl", es: "Búho", de: "Eule", nl: "Uil" },
          { en: "Crow", es: "Cuervo", de: "Krähe", nl: "Kraai" },
          { en: "Raven", es: "Cuervo", de: "Rabe", nl: "Raaf" },
          { en: "Pigeon", es: "Paloma", de: "Taube", nl: "Duif" }
        ],
        correct: 0,
        explanation: {
          en: "Owls can rotate their heads up to 270 degrees because they have 14 neck vertebrae instead of the usual 7.",
          es: "Los búhos pueden girar la cabeza hasta 270 grados porque tienen 14 vértebras cervicales en lugar de las 7 usuales.",
          de: "Eulen können ihren Kopf bis zu 270 Grad drehen, weil sie 14 Halswirbel statt der üblichen 7 haben.",
          nl: "Uilen kunnen hun kop tot 270 graden draaien omdat ze 14 nekwervels hebben in plaats van de gebruikelijke 7."
        }
      },
      {
        question: {
          en: "What do cows like to eat most?",
          es: "¿Qué les gusta comer más a las vacas?",
          de: "Was fressen Kühe am liebsten?",
          nl: "Wat eten koeien het liefst?"
        },
        options: [
          { en: "Grass", es: "Hierba", de: "Gras", nl: "Gras" },
          { en: "Meat", es: "Carne", de: "Fleisch", nl: "Vlees" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Insects", es: "Insectos", de: "Insekten", nl: "Insecten" }
        ],
        correct: 0,
        explanation: {
          en: "Cows are herbivores with four-chambered stomachs specially designed to digest grass and other plants.",
          es: "Las vacas son herbívoras con estómagos de cuatro cámaras especialmente diseñados para digerir hierba y otras plantas.",
          de: "Kühe sind Pflanzenfresser mit viergeteilten Mägen, die speziell zum Verdauen von Gras und anderen Pflanzen entwickelt wurden.",
          nl: "Koeien zijn planteneters met vierkamerige magen speciaal ontworpen om gras en andere planten te verteren."
        }
      },
      {
        question: {
          en: "Which reptile can live the longest?",
          es: "¿Qué reptil puede vivir más tiempo?",
          de: "Welches Reptil kann am längsten leben?",
          nl: "Welk reptiel kan het langst leven?"
        },
        options: [
          { en: "Turtle", es: "Tortuga", de: "Schildkröte", nl: "Schildpad" },
          { en: "Frog", es: "Rana", de: "Frosch", nl: "Kikker" },
          { en: "Snake", es: "Serpiente", de: "Schlange", nl: "Slang" },
          { en: "Lizard", es: "Lagarto", de: "Echse", nl: "Hagedis" }
        ],
        correct: 0,
        explanation: {
          en: "Some turtles can live over 150 years, with the oldest recorded turtle living to be 188 years old.",
          es: "Algunas tortugas pueden vivir más de 150 años, siendo la tortuga más vieja registrada de 188 años.",
          de: "Einige Schildkröten können über 150 Jahre leben, wobei die älteste registrierte Schildkröte 188 Jahre alt wurde.",
          nl: "Sommige schildpadden kunnen meer dan 150 jaar leven, waarbij de oudst geregistreerde schildpad 188 jaar oud werd."
        }
      },
      {
        question: {
          en: "What do rabbits use to jump so high?",
          es: "¿Qué usan los conejos para saltar tan alto?",
          de: "Was verwenden Kaninchen, um so hoch zu springen?",
          nl: "Wat gebruiken konijnen om zo hoog te springen?"
        },
        options: [
          { en: "Hind legs", es: "Patas traseras", de: "Hinterbeine", nl: "Achterpoten" },
          { en: "Front legs", es: "Patas delanteras", de: "Vorderbeine", nl: "Voorpoten" },
          { en: "Tail", es: "Cola", de: "Schwanz", nl: "Staart" },
          { en: "Ears", es: "Orejas", de: "Ohren", nl: "Oren" }
        ],
        correct: 0,
        explanation: {
          en: "Rabbits have powerful hind legs with strong muscles that allow them to jump up to 3 feet high and 9 feet long to escape predators.",
          es: "Los conejos tienen poderosas patas traseras con músculos fuertes que les permiten saltar hasta 1 metro de alto y 3 metros de largo para escapar de los depredadores.",
          de: "Kaninchen haben kraftvolle Hinterbeine mit starken Muskeln, die es ihnen ermöglichen, bis zu 1 Meter hoch und 3 Meter weit zu springen, um Raubtieren zu entkommen.",
          nl: "Konijnen hebben krachtige achterpoten met sterke spieren waardoor ze tot 1 meter hoog en 3 meter ver kunnen springen om aan roofdieren te ontsnappen."
        }
      },
      {
        question: {
          en: "Which animal has a trunk?",
          es: "¿Qué animal tiene trompa?",
          de: "Welches Tier hat einen Rüssel?",
          nl: "Welk dier heeft een slurf?"
        },
        options: [
          { en: "Elephant", es: "Elefante", de: "Elefant", nl: "Olifant" },
          { en: "Rhino", es: "Rinoceronte", de: "Nashorn", nl: "Neushoorn" },
          { en: "Hippo", es: "Hipopótamo", de: "Nilpferd", nl: "Nijlpaard" },
          { en: "Buffalo", es: "Búfalo", de: "Büffel", nl: "Buffel" }
        ],
        correct: 0,
        explanation: {
          en: "An elephant's trunk has over 40,000 muscles and can lift 770 pounds, used for breathing, drinking, grabbing objects, and communication.",
          es: "La trompa de un elefante tiene más de 40,000 músculos y puede levantar 350 kg, usada para respirar, beber, agarrar objetos y comunicarse.",
          de: "Ein Elefantenrüssel hat über 40.000 Muskeln und kann 350 kg heben, wird zum Atmen, Trinken, Greifen von Objekten und zur Kommunikation verwendet.",
          nl: "Een olifantenslurf heeft meer dan 40.000 spieren en kan 350 kg tillen, gebruikt voor ademen, drinken, objecten grijpen en communicatie."
        }
      },
      {
        question: {
          en: "What do we get from sheep?",
          es: "¿Qué obtenemos de las ovejas?",
          de: "Was bekommen wir von Schafen?",
          nl: "Wat krijgen we van schapen?"
        },
        options: [
          { en: "Wool", es: "Lana", de: "Wolle", nl: "Wol" },
          { en: "Silk", es: "Seda", de: "Seide", nl: "Zijde" },
          { en: "Leather", es: "Cuero", de: "Leder", nl: "Leer" },
          { en: "Feathers", es: "Plumas", de: "Federn", nl: "Veren" }
        ],
        correct: 0,
        explanation: {
          en: "Sheep produce wool, a natural fiber that keeps them warm and is sheared annually to make clothing and blankets for humans.",
          es: "Las ovejas producen lana, una fibra natural que las mantiene calientes y se esquila anualmente para hacer ropa y mantas para humanos.",
          de: "Schafe produzieren Wolle, eine natürliche Faser, die sie warm hält und jährlich geschoren wird, um Kleidung und Decken für Menschen herzustellen.",
          nl: "Schapen produceren wol, een natuurlijke vezel die hen warm houdt en jaarlijks wordt geschoren om kleding en dekens voor mensen te maken."
        }
      },
      {
        question: {
          en: "Which animal moves very slowly?",
          es: "¿Qué animal se mueve muy lentamente?",
          de: "Welches Tier bewegt sich sehr langsam?",
          nl: "Welk dier beweegt heel langzaam?"
        },
        options: [
          { en: "Sloth", es: "Perezoso", de: "Faultier", nl: "Luiaard" },
          { en: "Cheetah", es: "Guepardo", de: "Gepard", nl: "Jachtluipaard" },
          { en: "Rabbit", es: "Conejo", de: "Kaninchen", nl: "Konijn" },
          { en: "Deer", es: "Ciervo", de: "Hirsch", nl: "Hert" }
        ],
        correct: 0,
        explanation: {
          en: "Sloths move so slowly to conserve energy, traveling only 40 yards per day and moving at 0.003 mph on average.",
          es: "Los perezosos se mueven tan lentamente para conservar energía, viajando solo 36 metros por día y moviéndose a 0.005 km/h en promedio.",
          de: "Faultiere bewegen sich so langsam, um Energie zu sparen, reisen nur 36 Meter pro Tag und bewegen sich mit durchschnittlich 0,005 km/h.",
          nl: "Luiaards bewegen zo langzaam om energie te besparen, reizen slechts 36 meter per dag en bewegen gemiddeld 0,005 km/u."
        }
      },
      {
        question: {
          en: "What do chickens lay?",
          es: "¿Qué ponen las gallinas?",
          de: "Was legen Hühner?",
          nl: "Wat leggen kippen?"
        },
        options: [
          { en: "Eggs", es: "Huevos", de: "Eier", nl: "Eieren" },
          { en: "Milk", es: "Leche", de: "Milch", nl: "Melk" },
          { en: "Honey", es: "Miel", de: "Honig", nl: "Honing" },
          { en: "Wool", es: "Lana", de: "Wolle", nl: "Wol" }
        ],
        correct: 0,
        explanation: {
          en: "Chickens lay eggs that can develop into chicks if fertilized, or provide nutritious food for humans with protein and vitamins.",
          es: "Las gallinas ponen huevos que pueden convertirse en pollitos si están fertilizados, o proporcionar alimento nutritivo para los humanos con proteínas y vitaminas.",
          de: "Hühner legen Eier, die sich zu Küken entwickeln können, wenn sie befruchtet sind, oder nahrhaft Nahrung für Menschen mit Proteinen und Vitaminen liefern.",
          nl: "Kippen leggen eieren die zich kunnen ontwikkelen tot kuikens als ze bevrucht zijn, of voedzaam voedsel leveren voor mensen met proteïnes en vitamines."
        }
      },
      {
        question: {
          en: "Which animal is the best at jumping?",
          es: "¿Qué animal es el mejor saltando?",
          de: "Welches Tier kann am besten springen?",
          nl: "Welk dier is het beste in springen?"
        },
        options: [
          { en: "Kangaroo", es: "Canguro", de: "Känguru", nl: "Kangoeroe" },
          { en: "Rabbit", es: "Conejo", de: "Kaninchen", nl: "Konijn" },
          { en: "Frog", es: "Rana", de: "Frosch", nl: "Kikker" },
          { en: "Grasshopper", es: "Saltamontes", de: "Grashüpfer", nl: "Sprinkhaan" }
        ],
        correct: 0,
        explanation: {
          en: "Kangaroos can jump 25 feet in length and 6 feet in height using their powerful hind legs and long tail for balance.",
          es: "Los canguros pueden saltar 7.5 metros de largo y 1.8 metros de alto usando sus poderosas patas traseras y cola larga para el equilibrio.",
          de: "Kängurus können 7,5 Meter weit und 1,8 Meter hoch springen, indem sie ihre kräftigen Hinterbeine und langen Schwanz für das Gleichgewicht nutzen.",
          nl: "Kangoeroes kunnen 7,5 meter ver en 1,8 meter hoog springen met hun krachtige achterpoten en lange staart voor balans."
        }
      },
      {
        question: {
          en: "What sound do cows make?",
          es: "¿Qué sonido hacen las vacas?",
          de: "Welchen Laut machen Kühe?",
          nl: "Welk geluid maken koeien?"
        },
        options: [
          { en: "Moo", es: "Mu", de: "Muh", nl: "Boe" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Meow", es: "Maullar", de: "Miauen", nl: "Miauwen" },
          { en: "Chirp", es: "Piar", de: "Zwitschern", nl: "Tsjilpen" }
        ],
        correct: 0,
        explanation: {
          en: "Cows moo to communicate with their calves, other cows, and express emotions like hunger, contentment, or distress.",
          es: "Las vacas mugen para comunicarse con sus terneros, otras vacas, y expresar emociones como hambre, satisfacción o angustia.",
          de: "Kühe muhen, um mit ihren Kälbern und anderen Kühen zu kommunizieren und Emotionen wie Hunger, Zufriedenheit oder Not auszudrücken.",
          nl: "Koeien loeien om te communiceren met hun kalveren, andere koeien, en emoties zoals honger, tevredenheid of nood uit te drukken."
        }
      },
      {
        question: {
          en: "Which animal collects nuts for winter?",
          es: "¿Qué animal recolecta nueces para el invierno?",
          de: "Welches Tier sammelt Nüsse für den Winter?",
          nl: "Welk dier verzamelt noten voor de winter?"
        },
        options: [
          { en: "Squirrel", es: "Ardilla", de: "Eichhörnchen", nl: "Eekhoorn" },
          { en: "Bear", es: "Oso", de: "Bär", nl: "Beer" },
          { en: "Deer", es: "Ciervo", de: "Hirsch", nl: "Hert" },
          { en: "Fox", es: "Zorro", de: "Fuchs", nl: "Vos" }
        ],
        correct: 0,
        explanation: {
          en: "Squirrels collect and bury thousands of nuts each fall to survive winter, remembering most of their hiding spots through spatial memory.",
          es: "Las ardillas recolectan y entierran miles de nueces cada otoño para sobrevivir el invierno, recordando la mayoría de sus escondites a través de la memoria espacial.",
          de: "Eichhörnchen sammeln und vergraben jeden Herbst tausende Nüsse, um den Winter zu überleben, und erinnern sich an die meisten ihrer Verstecke durch räumliches Gedächtnis.",
          nl: "Eekhoorns verzamelen en begraven duizenden noten elke herfst om de winter te overleven, waarbij ze de meeste van hun verstekplekken onthouden door ruimtelijk geheugen."
        }
      },
      {
        question: {
          en: "What do butterflies start as?",
          es: "¿Como qué empiezan las mariposas?",
          de: "Als was beginnen Schmetterlinge?",
          nl: "Waar beginnen vlinders als?"
        },
        options: [
          { en: "Caterpillars", es: "Orugas", de: "Raupen", nl: "Rupsen" },
          { en: "Worms", es: "Gusanos", de: "Würmer", nl: "Wormen" },
          { en: "Spiders", es: "Arañas", de: "Spinnen", nl: "Spinnen" },
          { en: "Beetles", es: "Escarabajos", de: "Käfer", nl: "Kevers" }
        ],
        correct: 0,
        explanation: {
          en: "Butterflies undergo complete metamorphosis: egg → caterpillar → chrysalis → butterfly, a process that takes about 4-6 weeks.",
          es: "Las mariposas sufren metamorfosis completa: huevo → oruga → crisálida → mariposa, un proceso que toma unas 4-6 semanas.",
          de: "Schmetterlinge durchlaufen eine vollständige Metamorphose: Ei → Raupe → Puppe → Schmetterling, ein Prozess, der etwa 4-6 Wochen dauert.",
          nl: "Vlinders ondergaan volledige metamorfose: ei → rups → pop → vlinder, een proces dat ongeveer 4-6 weken duurt."
        }
      },
      {
        question: {
          en: "Which big cat has a mane?",
          es: "¿Qué felino grande tiene melena?",
          de: "Welche Großkatze hat eine Mähne?",
          nl: "Welke grote kat heeft een manen?"
        },
        options: [
          { en: "Lion", es: "León", de: "Löwe", nl: "Leeuw" },
          { en: "Tiger", es: "Tigre", de: "Tiger", nl: "Tijger" },
          { en: "Leopard", es: "Leopardo", de: "Leopard", nl: "Luipaard" },
          { en: "Cheetah", es: "Guepardo", de: "Gepard", nl: "Jachtluipaard" }
        ],
        correct: 0,
        explanation: {
          en: "Male lions grow a thick mane starting around age 1, which becomes fuller and darker with age to show strength and attract mates.",
          es: "Los leones machos crecen una melena gruesa comenzando alrededor del año de edad, que se vuelve más abundante y oscura con la edad para mostrar fuerza y atraer parejas.",
          de: "Männliche Löwen entwickeln ab etwa einem Jahr eine dicke Mähne, die mit dem Alter voller und dunkler wird, um Stärke zu zeigen und Partner anzulocken.",
          nl: "Mannelijke leeuwen laten vanaf ongeveer 1 jaar een dikke manen groeien, die voller en donkerder wordt met leeftijd om kracht te tonen en partners aan te trekken."
        }
      },
      {
        question: {
          en: "What do monkeys like to eat?",
          es: "¿Qué les gusta comer a los monos?",
          de: "Was fressen Affen gerne?",
          nl: "Wat eten apen graag?"
        },
        options: [
          { en: "Bananas", es: "Plátanos", de: "Bananen", nl: "Bananen" },
          { en: "Meat", es: "Carne", de: "Fleisch", nl: "Vlees" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Cheese", es: "Queso", de: "Käse", nl: "Kaas" }
        ],
        correct: 0,
        explanation: {
          en: "While monkeys enjoy bananas, they actually eat a varied diet including fruits, leaves, insects, and seeds depending on their species.",
          es: "Aunque los monos disfrutan los plátanos, en realidad comen una dieta variada que incluye frutas, hojas, insectos y semillas dependiendo de su especie.",
          de: "Während Affen Bananen genießen, ernähren sie sich tatsächlich abwechslungsreich mit Früchten, Blättern, Insekten und Samen, je nach Art.",
          nl: "Hoewel apen van bananen houden, eten ze eigenlijk een gevarieerd dieet met vruchten, bladeren, insecten en zaden, afhankelijk van hun soort."
        }
      },
      {
        question: {
          en: "Which insect makes honey?",
          es: "¿Qué insecto hace miel?",
          de: "Welches Insekt macht Honig?",
          nl: "Welk insect maakt honing?"
        },
        options: [
          { en: "Bee", es: "Abeja", de: "Biene", nl: "Bij" },
          { en: "Ant", es: "Hormiga", de: "Ameise", nl: "Mier" },
          { en: "Spider", es: "Araña", de: "Spinne", nl: "Spin" },
          { en: "Fly", es: "Mosca", de: "Fliege", nl: "Vlieg" }
        ],
        correct: 0,
        explanation: {
          en: "Bees collect nectar from flowers and transform it into honey through enzymes in their stomachs, creating food that never spoils.",
          es: "Las abejas recolectan néctar de las flores y lo transforman en miel a través de enzimas en sus estómagos, creando alimento que nunca se echa a perder.",
          de: "Bienen sammeln Nektar von Blumen und verwandeln ihn durch Enzyme in ihren Mägen in Honig, wodurch Nahrung entsteht, die nie verdirbt.",
          nl: "Bijen verzamelen nectar van bloemen en transformeren het tot honing door enzymen in hun magen, waarbij voedsel ontstaat dat nooit bederft."
        }
      },
      {
        question: {
          en: "What do we call baby sheep?",
          es: "¿Cómo llamamos a las ovejas bebé?",
          de: "Wie nennen wir Schafbabys?",
          nl: "Hoe noemen we baby schapen?"
        },
        options: [
          { en: "Lambs", es: "Corderos", de: "Lämmer", nl: "Lammeren" },
          { en: "Calves", es: "Terneros", de: "Kälber", nl: "Kalveren" },
          { en: "Chicks", es: "Pollitos", de: "Küken", nl: "Kuikens" },
          { en: "Pups", es: "Cachorros", de: "Welpen", nl: "Pups" }
        ],
        correct: 0,
        explanation: {
          en: "Baby sheep are called lambs. They are born with soft, woolly coats and stay close to their mothers for protection and milk.",
          es: "Las ovejas bebé se llaman corderos. Nacen con pelajes suaves y lanosos y se quedan cerca de sus madres para protección y leche.",
          de: "Schafbabys werden Lämmer genannt. Sie werden mit weichen, wolligen Mänteln geboren und bleiben für Schutz und Milch in der Nähe ihrer Mütter.",
          nl: "Baby schapen worden lammeren genoemd. Ze worden geboren met zachte, wollige vachten en blijven dicht bij hun moeders voor bescherming en melk."
        }
      },
      {
        question: {
          en: "Which animal is known for being very slow?",
          es: "¿Qué animal es conocido por ser muy lento?",
          de: "Welches Tier ist dafür bekannt, sehr langsam zu sein?",
          nl: "Welk dier staat bekend als erg langzaam?"
        },
        options: [
          { en: "Tortoise", es: "Tortuga", de: "Schildkröte", nl: "Schildpad" },
          { en: "Rabbit", es: "Conejo", de: "Kaninchen", nl: "Konijn" },
          { en: "Cheetah", es: "Guepardo", de: "Gepard", nl: "Jachtluipaard" },
          { en: "Horse", es: "Caballo", de: "Pferd", nl: "Paard" }
        ],
        correct: 0,
        explanation: {
          en: "Tortoises move very slowly, taking their time as they carry their heavy shells. The saying 'slow and steady wins the race' comes from the famous fable about the tortoise and the hare.",
          es: "Las tortugas se mueven muy lentamente, tomándose su tiempo mientras cargan sus caparazones pesados. El dicho 'lento y constante gana la carrera' viene de la famosa fábula sobre la tortuga y la liebre.",
          de: "Schildkröten bewegen sich sehr langsam und lassen sich Zeit, während sie ihre schweren Panzer tragen. Der Spruch 'langsam aber stetig gewinnt das Rennen' stammt aus der berühmten Fabel von der Schildkröte und dem Hasen.",
          nl: "Schildpadden bewegen heel langzaam, nemen de tijd terwijl ze hun zware schilden dragen. Het gezegde 'langzaam maar gestaag wint de wedstrijd' komt uit de beroemde fabel over de schildpad en de haas."
        }
      },
      {
        question: {
          en: "What do we call animals that hunt other animals for food?",
          es: "¿Cómo llamamos a los animales que cazan otros animales para comer?",
          de: "Wie nennen wir Tiere, die andere Tiere zur Nahrung jagen?",
          nl: "Hoe noemen we dieren die andere dieren jagen voor voedsel?"
        },
        options: [
          { en: "Predators", es: "Depredadores", de: "Raubtiere", nl: "Roofdieren" },
          { en: "Herbivores", es: "Herbívoros", de: "Pflanzenfresser", nl: "Herbivoren" },
          { en: "Scavengers", es: "Carroñeros", de: "Aasfresser", nl: "Aaseters" },
          { en: "Omnivores", es: "Omnívoros", de: "Allesfresser", nl: "Omnivoren" }
        ],
        correct: 0,
        explanation: {
          en: "Predators are animals that hunt and kill other animals for food. Examples include lions, wolves, eagles, and sharks. They have special adaptations like sharp teeth, claws, or keen eyesight to help them catch their prey.",
          es: "Los depredadores son animales que cazan y matan otros animales para comer. Los ejemplos incluyen leones, lobos, águilas y tiburones. Tienen adaptaciones especiales como dientes afilados, garras o vista aguda para ayudarles a atrapar a sus presas.",
          de: "Raubtiere sind Tiere, die andere Tiere zur Nahrung jagen und töten. Beispiele sind Löwen, Wölfe, Adler und Haie. Sie haben spezielle Anpassungen wie scharfe Zähne, Krallen oder scharfe Augen, um ihre Beute zu fangen.",
          nl: "Roofdieren zijn dieren die andere dieren jagen en doden voor voedsel. Voorbeelden zijn leeuwen, wolven, arenden en haaien. Ze hebben speciale aanpassingen zoals scherpe tanden, klauwen of scherp zicht om hun prooi te vangen."
        }
      },
      {
        question: {
          en: "What do we call baby horses?",
          es: "¿Cómo llamamos a los caballos bebé?",
          de: "Wie nennen wir Pferdebabys?",
          nl: "Hoe noemen we baby paarden?"
        },
        options: [
          { en: "Foals", es: "Potros", de: "Fohlen", nl: "Veulens" },
          { en: "Calves", es: "Terneros", de: "Kälber", nl: "Kalveren" },
          { en: "Cubs", es: "Cachorros", de: "Junge", nl: "Welpen" },
          { en: "Chicks", es: "Pollitos", de: "Küken", nl: "Kuikens" }
        ],
        correct: 0,
        explanation: {
          en: "Baby horses are called foals and can stand and walk within hours of being born, an adaptation that helps them escape predators.",
          es: "Los caballos bebé se llaman potros y pueden pararse y caminar dentro de horas de nacer, una adaptación que les ayuda a escapar de los depredadores.",
          de: "Pferdebabys werden Fohlen genannt und können innerhalb von Stunden nach der Geburt stehen und gehen, eine Anpassung, die ihnen hilft, Raubtieren zu entkommen.",
          nl: "Baby paarden worden veulens genoemd en kunnen binnen uren na de geboorte staan en lopen, een aanpassing die hen helpt aan roofdieren te ontsnappen."
        }
      },
      {
        question: {
          en: "Which animal has a forked tongue?",
          es: "¿Qué animal tiene lengua bífida?",
          de: "Welches Tier hat eine gespaltene Zunge?",
          nl: "Welk dier heeft een gespleten tong?"
        },
        options: [
          { en: "Lizard", es: "Lagarto", de: "Echse", nl: "Hagedis" },
          { en: "Cat", es: "Gato", de: "Katze", nl: "Kat" },
          { en: "Dog", es: "Perro", de: "Hund", nl: "Hond" },
          { en: "Mouse", es: "Ratón", de: "Maus", nl: "Muis" }
        ],
        correct: 0,
        explanation: {
          en: "Lizards and snakes have forked tongues that they use to collect scent particles from the air and transfer them to a special organ for smelling.",
          es: "Los lagartos y serpientes tienen lenguas bífidas que usan para recolectar partículas de olor del aire y transferirlas a un órgano especial para oler.",
          de: "Echsen und Schlangen haben gespaltene Zungen, die sie verwenden, um Duftpartikel aus der Luft zu sammeln und sie an ein spezielles Riechorgan zu übertragen.",
          nl: "Hagedissen en slangen hebben gespleten tongen die ze gebruiken om geurdeeltjes uit de lucht te verzamelen en over te dragen naar een speciaal orgaan voor ruiken."
        }
      },
      {
        question: {
          en: "What are penguins really good at?",
          es: "¿En qué son realmente buenos los pingüinos?",
          de: "Worin sind Pinguine wirklich gut?",
          nl: "Waar zijn pinguïns echt goed in?"
        },
        options: [
          { en: "Swimming", es: "Nadar", de: "Schwimmen", nl: "Zwemmen" },
          { en: "Flying", es: "Volar", de: "Fliegen", nl: "Vliegen" },
          { en: "Digging", es: "Cavar", de: "Graben", nl: "Graven" },
          { en: "Climbing", es: "Escalar", de: "Klettern", nl: "Klimmen" }
        ],
        correct: 0,
        explanation: {
          en: "Penguins are excellent swimmers, using their flipper-like wings to 'fly' underwater at speeds up to 22 mph while hunting for fish.",
          es: "Los pingüinos son excelentes nadadores, usando sus alas tipo aleta para 'volar' bajo el agua a velocidades hasta 35 km/h mientras cazan peces.",
          de: "Pinguine sind ausgezeichnete Schwimmer und nutzen ihre flossenartigen Flügel, um unter Wasser mit bis zu 35 km/h zu 'fliegen', während sie Fische jagen.",
          nl: "Pinguïns zijn uitstekende zwemmers die hun vleugelachtige vinnen gebruiken om onder water te 'vliegen' met snelheden tot 35 km/u terwijl ze vissen jagen."
        }
      },
      {
        question: {
          en: "Which animal has very long ears?",
          es: "¿Qué animal tiene orejas muy largas?",
          de: "Welches Tier hat sehr lange Ohren?",
          nl: "Welk dier heeft erg lange oren?"
        },
        options: [
          { en: "Rabbit", es: "Conejo", de: "Kaninchen", nl: "Konijn" },
          { en: "Cat", es: "Gato", de: "Katze", nl: "Kat" },
          { en: "Dog", es: "Perro", de: "Hund", nl: "Hond" },
          { en: "Mouse", es: "Ratón", de: "Maus", nl: "Muis" }
        ],
        correct: 0,
        explanation: {
          en: "Rabbits have long ears that can rotate 270 degrees to detect sounds from predators and help regulate their body temperature.",
          es: "Los conejos tienen orejas largas que pueden rotar 270 grados para detectar sonidos de depredadores y ayudar a regular su temperatura corporal.",
          de: "Kaninchen haben lange Ohren, die sich 270 Grad drehen können, um Geräusche von Raubtieren zu erkennen und ihre Körpertemperatur zu regulieren.",
          nl: "Konijnen hebben lange oren die 270 graden kunnen draaien om geluiden van roofdieren te detecteren en hun lichaamstemperatuur te reguleren."
        }
      },
      {
        question: {
          en: "What do spiders make to catch their food?",
          es: "¿Qué hacen las arañas para atrapar su comida?",
          de: "Was machen Spinnen, um ihre Nahrung zu fangen?",
          nl: "Wat maken spinnen om hun voedsel te vangen?"
        },
        options: [
          { en: "Webs", es: "Telarañas", de: "Netze", nl: "Webben" },
          { en: "Holes", es: "Agujeros", de: "Löcher", nl: "Gaten" },
          { en: "Nests", es: "Nidos", de: "Nester", nl: "Nesten" },
          { en: "Traps", es: "Trampas", de: "Fallen", nl: "Vallen" }
        ],
        correct: 0,
        explanation: {
          en: "Spiders create webs from silk produced in their spinnerets, with each strand being stronger than steel wire of the same thickness.",
          es: "Las arañas crean telarañas de seda producida en sus hileras, siendo cada hilo más fuerte que el alambre de acero del mismo grosor.",
          de: "Spinnen erstellen Netze aus Seide, die in ihren Spinndrüsen produziert wird, wobei jeder Faden stärker ist als Stahldraht derselben Dicke.",
          nl: "Spinnen maken webben van zijde geproduceerd in hun spinnerets, waarbij elke draad sterker is dan staaldraad van dezelfde dikte."
        }
      },
      {
        question: {
          en: "Which animal is man's best friend?",
          es: "¿Qué animal es el mejor amigo del hombre?",
          de: "Welches Tier ist des Menschen bester Freund?",
          nl: "Welk dier is de beste friend van de mens?"
        },
        options: [
          { en: "Dog", es: "Perro", de: "Hund", nl: "Hond" },
          { en: "Cat", es: "Gato", de: "Katze", nl: "Kat" },
          { en: "Horse", es: "Caballo", de: "Pferd", nl: "Paard" },
          { en: "Bird", es: "Pájaro", de: "Vogel", nl: "Vogel" }
        ],
        correct: 0,
        explanation: {
          en: "Dogs have been companions to humans for over 15,000 years, showing loyalty, protection, and unconditional love that earned them this title.",
          es: "Los perros han sido compañeros de los humanos por más de 15,000 años, mostrando lealtad, protección y amor incondicional que les ganó este título.",
          de: "Hunde sind seit über 15.000 Jahren Begleiter der Menschen und zeigen Loyalität, Schutz und bedingungslose Liebe, die ihnen diesen Titel einbrachte.",
          nl: "Honden zijn al meer dan 15.000 jaar metgezellen van mensen, waarbij ze loyaliteit, bescherming en onvoorwaardelijke liefde tonen die hen deze titel opleverde."
        }
      },
      {
        question: {
          en: "What do bears do in winter?",
          es: "¿Qué hacen los osos en invierno?",
          de: "Was machen Bären im Winter?",
          nl: "Wat doen beren in de winter?"
        },
        options: [
          { en: "Hibernate", es: "Hibernar", de: "Winterschlaf", nl: "Winterslapen" },
          { en: "Migrate", es: "Migrar", de: "Wandern", nl: "Migreren" },
          { en: "Stay active", es: "Mantenerse activos", de: "Aktiv bleiben", nl: "Actief blijven" },
          { en: "Fly south", es: "Volar al sur", de: "Nach Süden fliegen", nl: "Naar het zuiden vliegen" }
        ],
        correct: 0,
        explanation: {
          en: "Bears hibernate in winter, slowing their heart rate and breathing to survive months without food by living off stored body fat.",
          es: "Los osos hibernan en invierno, ralentizando su ritmo cardíaco y respiración para sobrevivir meses sin comida viviendo de la grasa corporal almacenada.",
          de: "Bären halten Winterschlaf, verlangsamen Herzschlag und Atmung, um monatelang ohne Nahrung zu überleben, indem sie von gespeichertem Körperfett leben.",
          nl: "Beren houden winterslaap, vertragen hun hartslag en ademhaling om maanden zonder voedsel te overleven door te leven van opgeslagen lichaamsvet."
        }
      },
      {
        question: {
          en: "Which animal has a very long tongue?",
          es: "¿Qué animal tiene una lengua muy larga?",
          de: "Welches Tier hat eine sehr lange Zunge?",
          nl: "Welk dier heeft een erg lange tong?"
        },
        options: [
          { en: "Chameleon", es: "Camaleón", de: "Chamäleon", nl: "Kameleon" },
          { en: "Giraffe", es: "Jirafa", de: "Giraffe", nl: "Giraf" },
          { en: "Dog", es: "Perro", de: "Hund", nl: "Hond" },
          { en: "Cat", es: "Gato", de: "Katze", nl: "Kat" }
        ],
        correct: 0,
        explanation: {
          en: "Chameleons have tongues that can be up to twice their body length and can shoot out to catch insects in 0.07 seconds.",
          es: "Los camaleones tienen lenguas que pueden ser hasta el doble de la longitud de su cuerpo y pueden dispararse para atrapar insectos en 0.07 segundos.",
          de: "Chamäleons haben Zungen, die bis zu doppelt so lang wie ihr Körper sein können und in 0,07 Sekunden ausgeschossen werden können, um Insekten zu fangen.",
          nl: "Kameleons hebben tongen die tot twee keer hun lichaamslengte kunnen zijn en kunnen uitschieten om insecten te vangen in 0,07 seconden."
        }
      },
      {
        question: {
          en: "Where do ants live together?",
          es: "¿Dónde viven juntas las hormigas?",
          de: "Wo leben Ameisen zusammen?",
          nl: "Waar leven mieren samen?"
        },
        options: [
          { en: "Colonies", es: "Colonias", de: "Kolonien", nl: "Kolonies" },
          { en: "Hives", es: "Colmenas", de: "Bienenstöcke", nl: "Korven" },
          { en: "Nests", es: "Nidos", de: "Nester", nl: "Nesten" },
          { en: "Dens", es: "Guaridas", de: "Höhlen", nl: "Holen" }
        ],
        correct: 0,
        explanation: {
          en: "Ant colonies can contain millions of ants working together with different roles: workers, soldiers, and a queen who can live up to 30 years.",
          es: "Las colonias de hormigas pueden contener millones de hormigas trabajando juntas con diferentes roles: obreras, soldados y una reina que puede vivir hasta 30 años.",
          de: "Ameisenkolonien können Millionen von Ameisen enthalten, die mit verschiedenen Rollen zusammenarbeiten: Arbeiterinnen, Soldaten und eine Königin, die bis zu 30 Jahre leben kann.",
          nl: "Mierenkolonies kunnen miljoenen mieren bevatten die samenwerken met verschillende rollen: werksters, soldaten en een koningin die tot 30 jaar kan leven."
        }
      },
      {
        question: {
          en: "Which is the smallest bird?",
          es: "¿Cuál es el pájaro más pequeño?",
          de: "Welcher ist der kleinste Vogel?",
          nl: "Welke is de kleinste vogel?"
        },
        options: [
          { en: "Hummingbird", es: "Colibrí", de: "Kolibri", nl: "Kolibrie" },
          { en: "Eagle", es: "Águila", de: "Adler", nl: "Arend" },
          { en: "Sparrow", es: "Gorrión", de: "Spatz", nl: "Mus" },
          { en: "Robin", es: "Petirrojo", de: "Rotkehlchen", nl: "Roodborst" }
        ],
        correct: 0,
        explanation: {
          en: "The bee hummingbird is the smallest bird, weighing only 2 grams and measuring 2 inches long, with wings that beat 80 times per second.",
          es: "El colibrí abeja es el pájaro más pequeño, pesando solo 2 gramos y midiendo 5 cm de largo, con alas que baten 80 veces por segundo.",
          de: "Der Bienenkolibri ist der kleinste Vogel, wiegt nur 2 Gramm und ist 5 cm lang, mit Flügeln, die 80 Mal pro Sekunde schlagen.",
          nl: "De bijenkolibrie is de kleinste vogel, weegt slechts 2 gram en is 5 cm lang, met vleugels die 80 keer per seconde slaan."
        }
      },
      {
        question: {
          en: "What do armadillos do when scared?",
          es: "¿Qué hacen los armadillos cuando tienen miedo?",
          de: "Was machen Gürteltiere, wenn sie Angst haben?",
          nl: "Wat doen gordeldieren als ze bang zijn?"
        },
        options: [
          { en: "Roll", es: "Rodar", de: "Wälzen", nl: "Rollen" },
          { en: "Sleep", es: "Dormir", de: "Schlafen", nl: "Slapen" },
          { en: "Eat", es: "Comer", de: "Fressen", nl: "Eten" },
          { en: "Dance", es: "Bailar", de: "Tanzen", nl: "Dansen" }
        ],
        correct: 0,
        explanation: {
          en: "Armadillos roll into a tight ball when threatened, protecting their soft belly with their hard, bony shell that acts like armor.",
          es: "Los armadillos se enrollan en una pelota apretada cuando están amenazados, protegiendo su vientre blando con su caparazón duro y óseo que actúa como armadura.",
          de: "Gürteltiere rollen sich bei Bedrohung zu einer festen Kugel zusammen und schützen ihren weichen Bauch mit ihrem harten, knöchernen Panzer, der wie eine Rüstung wirkt.",
          nl: "Gordeldieren rollen zich op tot een strakke bal wanneer ze bedreigd worden, waarbij ze hun zachte buik beschermen met hun harde, benige schild dat als pantser werkt."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('warm-up/animals', level1);
  }
})();