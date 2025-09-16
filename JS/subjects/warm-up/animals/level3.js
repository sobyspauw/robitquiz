// Animals - Level 3: What Animals Eat
(function() {
  const level3 = {
    name: {
      en: "What Animals Eat",
      es: "Qué Comen los Animales", 
      de: "Was Tiere Fressen",
      nl: "Wat Dieren Eten"
    },
    questions: [
      {
        question: {
          en: "What do pandas mainly eat?",
          es: "¿Qué comen principalmente los pandas?",
          de: "Was fressen Pandas hauptsächlich?",
          nl: "Wat eten panda's voornamelijk?"
        },
        options: [
          { en: "Bamboo", es: "Bambú", de: "Bambus", nl: "Bamboe" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Meat", es: "Carne", de: "Fleisch", nl: "Vlees" },
          { en: "Fruits", es: "Frutas", de: "Früchte", nl: "Fruit" }
        ],
        correct: 0,
        explanation: {
          en: "Pandas eat almost exclusively bamboo, spending 12-16 hours a day consuming up to 40 pounds of it.",
          es: "Los pandas comen casi exclusivamente bambú, pasando 12-16 horas al día consumiendo hasta 18 kg de él.",
          de: "Pandas fressen fast ausschließlich Bambus und verbringen 12-16 Stunden am Tag damit, bis zu 18 kg davon zu fressen.",
          nl: "Panda's eten bijna uitsluitend bamboe en besteden 12-16 uur per dag aan het consumeren van tot 18 kg ervan."
        }
      },
      {
        question: {
          en: "What do bees eat and drink?",
          es: "¿Qué comen y beben las abejas?",
          de: "Was fressen und trinken Bienen?",
          nl: "Wat eten en drinken bijen?"
        },
        options: [
          { en: "Nectar and pollen", es: "Néctar y polen", de: "Nektar und Pollen", nl: "Nectar en stuifmeel" },
          { en: "Leaves", es: "Hojas", de: "Blätter", nl: "Bladeren" },
          { en: "Seeds", es: "Semillas", de: "Samen", nl: "Zaden" },
          { en: "Insects", es: "Insectos", de: "Insekten", nl: "Insecten" }
        ],
        correct: 0,
        explanation: {
          en: "Bees collect nectar from flowers for energy and pollen for protein to feed their larvae.",
          es: "Las abejas recolectan néctar de las flores para obtener energía y polen para proteínas para alimentar a sus larvas.",
          de: "Bienen sammeln Nektar von Blüten für Energie und Pollen für Protein, um ihre Larven zu füttern.",
          nl: "Bijen verzamelen nectar van bloemen voor energie en stuifmeel voor eiwit om hun larven te voeden."
        }
      },
      {
        question: {
          en: "What do lions hunt and eat?",
          es: "¿Qué cazan y comen los leones?",
          de: "Was jagen und fressen Löwen?",
          nl: "Wat jagen en eten leeuwen?"
        },
        options: [
          { en: "Other animals", es: "Otros animales", de: "Andere Tiere", nl: "Andere dieren" },
          { en: "Only grass", es: "Solo hierba", de: "Nur Gras", nl: "Alleen gras" },
          { en: "Fruits and vegetables", es: "Frutas y verduras", de: "Früchte und Gemüse", nl: "Fruit en groenten" },
          { en: "Tree bark", es: "Corteza de árbol", de: "Baumrinde", nl: "Boomschors" }
        ],
        correct: 0,
        explanation: {
          en: "Lions are carnivores that hunt large animals like zebras, antelopes, and buffalo in packs.",
          es: "Los leones son carnívoros que cazan animales grandes como cebras, antílopes y búfalos en manadas.",
          de: "Löwen sind Fleischfresser, die große Tiere wie Zebras, Antilopen und Büffel in Rudeln jagen.",
          nl: "Leeuwen zijn vleeseters die grote dieren zoals zebra's, antilopen en buffels in roedels jagen."
        }
      },
      {
        question: {
          en: "What do rabbits love to eat?",
          es: "¿Qué les encanta comer a los conejos?",
          de: "Was fressen Kaninchen gerne?",
          nl: "Wat eten konijnen graag?"
        },
        options: [
          { en: "Carrots and vegetables", es: "Zanahorias y verduras", de: "Karotten und Gemüse", nl: "Wortels en groenten" },
          { en: "Meat", es: "Carne", de: "Fleisch", nl: "Vlees" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Cheese", es: "Queso", de: "Käse", nl: "Kaas" }
        ],
        correct: 0,
        explanation: {
          en: "Rabbits are herbivores that love fresh vegetables, fruits, hay, and leafy greens.",
          es: "Los conejos son herbívoros que les encantan las verduras frescas, frutas, heno y hojas verdes.",
          de: "Kaninchen sind Pflanzenfresser, die frisches Gemüse, Obst, Heu und Blattgrün lieben.",
          nl: "Konijnen zijn planteneters die dol zijn op verse groenten, fruit, hooi en bladgroenten."
        }
      },
      {
        question: {
          en: "What do koalas eat almost exclusively?",
          es: "¿Qué comen los koalas casi exclusivamente?",
          de: "Was fressen Koalas fast ausschließlich?",
          nl: "Wat eten koala's bijna uitsluitend?"
        },
        options: [
          { en: "Eucalyptus leaves", es: "Hojas de eucalipto", de: "Eukalyptusblätter", nl: "Eucalyptusbladeren" },
          { en: "Bamboo", es: "Bambú", de: "Bambus", nl: "Bamboe" },
          { en: "Fruits", es: "Frutas", de: "Früchte", nl: "Fruit" },
          { en: "Grass", es: "Hierba", de: "Gras", nl: "Gras" }
        ],
        correct: 0,
        explanation: {
          en: "Koalas eat only eucalyptus leaves, which are toxic to most other animals but provide all their nutrition.",
          es: "Los koalas comen solo hojas de eucalipto, que son tóxicas para la mayoría de otros animales pero les proporcionan toda su nutrición.",
          de: "Koalas fressen nur Eukalyptusblätter, die für die meisten anderen Tiere giftig sind, aber all ihre Nahrung liefern.",
          nl: "Koala's eten alleen eucalyptusbladeren, die giftig zijn voor de meeste andere dieren maar al hun voeding verschaffen."
        }
      },
      {
        question: {
          en: "What do sharks mainly eat?",
          es: "¿Qué comen principalmente los tiburones?",
          de: "Was fressen Haie hauptsächlich?",
          nl: "Wat eten haaien voornamelijk?"
        },
        options: [
          { en: "Fish and sea animals", es: "Peces y animales marinos", de: "Fische und Meerestiere", nl: "Vis en zeedieren" },
          { en: "Seaweed", es: "Algas marinas", de: "Seetang", nl: "Zeewier" },
          { en: "Coral", es: "Coral", de: "Korallen", nl: "Koraal" },
          { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" }
        ],
        correct: 0,
        explanation: {
          en: "Sharks are apex predators that primarily eat fish, seals, sea turtles, and other marine animals.",
          es: "Los tiburones son depredadores superiores que principalmente comen peces, focas, tortugas marinas y otros animales marinos.",
          de: "Haie sind Spitzenprädatoren, die hauptsächlich Fische, Robben, Meeresschildkröten und andere Meerestiere fressen.",
          nl: "Haaien zijn topproofdieren die voornamelijk vissen, zeehonden, zeeschildpadden en andere zeedieren eten."
        }
      },
      {
        question: {
          en: "What do butterflies eat?",
          es: "¿Qué comen las mariposas?",
          de: "Was fressen Schmetterlinge?",
          nl: "Wat eten vlinders?"
        },
        options: [
          { en: "Nectar from flowers", es: "Néctar de flores", de: "Nektar von Blumen", nl: "Nectar van bloemen" },
          { en: "Leaves", es: "Hojas", de: "Blätter", nl: "Bladeren" },
          { en: "Small insects", es: "Insectos pequeños", de: "Kleine Insekten", nl: "Kleine insecten" },
          { en: "Seeds", es: "Semillas", de: "Samen", nl: "Zaden" }
        ],
        correct: 0,
        explanation: {
          en: "Butterflies use their long proboscis to suck sweet nectar from flowers, which provides them with energy.",
          es: "Las mariposas usan su larga trompa para chupar el dulce néctar de las flores, que les proporciona energía.",
          de: "Schmetterlinge verwenden ihren langen Rüssel, um süßen Nektar aus Blüten zu saugen, was ihnen Energie liefert.",
          nl: "Vlinders gebruiken hun lange zuigsnuit om zoete nectar uit bloemen te zuigen, wat hen energie geeft."
        }
      },
      {
        question: {
          en: "What do elephants eat?",
          es: "¿Qué comen los elefantes?",
          de: "Was fressen Elefanten?",
          nl: "Wat eten olifanten?"
        },
        options: [
          { en: "Plants and fruits", es: "Plantas y frutas", de: "Pflanzen und Früchte", nl: "Planten en fruit" },
          { en: "Only meat", es: "Solo carne", de: "Nur Fleisch", nl: "Alleen vlees" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" }
        ],
        correct: 0,
        explanation: {
          en: "Elephants are herbivores that eat up to 300 pounds of plants, fruits, bark, and roots daily.",
          es: "Los elefantes son herbívoros que comen hasta 136 kg de plantas, frutas, corteza y raíces diariamente.",
          de: "Elefanten sind Pflanzenfresser, die täglich bis zu 136 kg Pflanzen, Früchte, Rinde und Wurzeln fressen.",
          nl: "Olifanten zijn planteneters die dagelijks tot 136 kg planten, fruit, bast en wortels eten."
        }
      },
      {
        question: {
          en: "What do hummingbirds eat for energy?",
          es: "¿Qué comen los colibríes para tener energía?",
          de: "Was fressen Kolibris für Energie?",
          nl: "Wat eten kolibries voor energie?"
        },
        options: [
          { en: "Sugar water and nectar", es: "Agua azucarada y néctar", de: "Zuckerwasser und Nektar", nl: "Suikerwater en nectar" },
          { en: "Seeds", es: "Semillas", de: "Samen", nl: "Zaden" },
          { en: "Worms", es: "Gusanos", de: "Würmer", nl: "Wormen" },
          { en: "Nuts", es: "Nueces", de: "Nüsse", nl: "Noten" }
        ],
        correct: 0,
        explanation: {
          en: "Hummingbirds need high-energy sugar from nectar to fuel their incredibly fast wing beats of up to 80 beats per second.",
          es: "Los colibríes necesitan azúcar de alta energía del néctar para alimentar sus aleteos increíblemente rápidos de hasta 80 latidos por segundo.",
          de: "Kolibris benötigen hochenergetischen Zucker aus Nektar, um ihre unglaublich schnellen Flügelschläge von bis zu 80 Schlägen pro Sekunde zu antreiben.",
          nl: "Kolibries hebben hoogenergetische suiker uit nectar nodig om hun ongelooflijk snelle vleugelslag van tot 80 slagen per seconde aan te drijven."
        }
      },
      {
        question: {
          en: "What do anteaters eat?",
          es: "¿Qué comen los osos hormigueros?",
          de: "Was fressen Ameisenbären?",
          nl: "Wat eten miereneters?"
        },
        options: [
          { en: "Ants and termites", es: "Hormigas y termitas", de: "Ameisen und Termiten", nl: "Mieren en termieten" },
          { en: "Honey", es: "Miel", de: "Honig", nl: "Honing" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Fruits", es: "Frutas", de: "Früchte", nl: "Fruit" }
        ],
        correct: 0,
        explanation: {
          en: "Anteaters have long snouts and sticky tongues to reach into ant and termite nests for food.",
          es: "Los osos hormigueros tienen hocicos largos y lenguas pegajosas para alcanzar los nidos de hormigas y termitas en busca de comida.",
          de: "Ameisenbären haben lange Schnäuzen und klebrige Zungen, um in Ameisen- und Termitennestern nach Nahrung zu suchen.",
          nl: "Miereneters hebben lange snuiten en kleverige tongen om in mieren- en termietennesten naar voedsel te zoeken."
        }
      },
      {
        question: {
          en: "What do giraffes eat with their long necks?",
          es: "¿Qué comen las jirafas con sus cuellos largos?",
          de: "Was fressen Giraffen mit ihren langen Hälsen?",
          nl: "Wat eten giraffen met hun lange nekken?"
        },
        options: [
          { en: "Leaves from tall trees", es: "Hojas de árboles altos", de: "Blätter von hohen Bäumen", nl: "Bladeren van hoge bomen" },
          { en: "Ground grass", es: "Hierba del suelo", de: "Bodengras", nl: "Gras van de grond" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Other animals", es: "Otros animales", de: "Andere Tiere", nl: "Andere dieren" }
        ],
        correct: 0,
        explanation: {
          en: "Giraffes use their 18-foot-long necks to reach acacia leaves that other animals cannot access.",
          es: "Las jirafas usan sus cuellos de 5.5 metros de largo para alcanzar hojas de acacia que otros animales no pueden acceder.",
          de: "Giraffen verwenden ihre 5,5 Meter langen Hälse, um Akazienblätter zu erreichen, die andere Tiere nicht erreichen können.",
          nl: "Giraffen gebruiken hun 5,5 meter lange nekken om acaciabladeren te bereiken die andere dieren niet kunnen bereiken."
        }
      },
      {
        question: {
          en: "What do woodpeckers eat?",
          es: "¿Qué comen los pájaros carpinteros?",
          de: "Was fressen Spechte?",
          nl: "Wat eten spechten?"
        },
        options: [
          { en: "Insects inside trees", es: "Insectos dentro de árboles", de: "Insekten in Bäumen", nl: "Insecten in bomen" },
          { en: "Only seeds", es: "Solo semillas", de: "Nur Samen", nl: "Alleen zaden" },
          { en: "Nectar", es: "Néctar", de: "Nektar", nl: "Nectar" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" }
        ],
        correct: 0,
        explanation: {
          en: "Woodpeckers use their strong beaks to drill into tree bark and extract insects like beetles, ants, and wood-boring larvae that live inside the wood.",
          es: "Los pájaros carpinteros usan sus picos fuertes para perforar la corteza de los árboles y extraer insectos como escarabajos, hormigas y larvas perforadoras de madera que viven dentro de la madera.",
          de: "Spechte verwenden ihre starken Schnäbel, um in die Baumrinde zu bohren und Insekten wie Käfer, Ameisen und holzbohrende Larven zu extrahieren, die im Holz leben.",
          nl: "Spechten gebruiken hun sterke snavels om in boomschors te boren en insecten zoals kevers, mieren en houtborende larven eruit te halen die in het hout leven."
        }
      },
      {
        question: {
          en: "What do owls hunt at night?",
          es: "¿Qué cazan los búhos por la noche?",
          de: "Was jagen Eulen nachts?",
          nl: "Wat jagen uilen 's nachts?"
        },
        options: [
          { en: "Mice and small animals", es: "Ratones y animales pequeños", de: "Mäuse und kleine Tiere", nl: "Muizen en kleine dieren" },
          { en: "Flowers", es: "Flores", de: "Blumen", nl: "Bloemen" },
          { en: "Grass", es: "Hierba", de: "Gras", nl: "Gras" },
          { en: "Tree bark", es: "Corteza de árbol", de: "Baumrinde", nl: "Boomschors" }
        ],
        correct: 0,
        explanation: {
          en: "Owls are nocturnal predators with excellent night vision and silent flight that hunt small mammals like mice, rats, and rabbits.",
          es: "Los búhos son depredadores nocturnos con excelente visión nocturna y vuelo silencioso que cazan pequeños mamíferos como ratones, ratas y conejos.",
          de: "Eulen sind nachtaktive Raubtiere mit ausgezeichneter Nachtsicht und leisem Flug, die kleine Säugetiere wie Mäuse, Ratten und Kaninchen jagen.",
          nl: "Uilen zijn nachtelijke roofdieren met uitstekend nachtzicht en geruisloze vlucht die kleine zoogdieren zoals muizen, ratten en konijnen jagen."
        }
      },
      {
        question: {
          en: "What do penguins catch in the water?",
          es: "¿Qué atrapan los pingüinos en el agua?",
          de: "Was fangen Pinguine im Wasser?",
          nl: "Wat vangen pinguïns in het water?"
        },
        options: [
          { en: "Fish and krill", es: "Peces y krill", de: "Fische und Krill", nl: "Vis en krill" },
          { en: "Seaweed", es: "Algas marinas", de: "Seetang", nl: "Zeewier" },
          { en: "Ice", es: "Hielo", de: "Eis", nl: "IJs" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" }
        ],
        correct: 0,
        explanation: {
          en: "Penguins are excellent swimmers that dive deep underwater to catch fish, krill, and squid using their streamlined bodies and flipper-like wings.",
          es: "Los pingüinos son excelentes nadadores que se sumergen profundamente bajo el agua para atrapar peces, krill y calamares usando sus cuerpos aerodinámicos y alas como aletas.",
          de: "Pinguine sind ausgezeichnete Schwimmer, die tief unter Wasser tauchen, um Fische, Krill und Tintenfische mit ihren stromlinienförmigen Körpern und flossenartigen Flügeln zu fangen.",
          nl: "Pinguïns zijn uitstekende zwemmers die diep onder water duiken om vis, krill en inktvis te vangen met hun gestroomlijnde lichamen en flipperachtige vleugels."
        }
      },
      {
        question: {
          en: "What do squirrels store for winter?",
          es: "¿Qué almacenan las ardillas para el invierno?",
          de: "Was sammeln Eichhörnchen für den Winter?",
          nl: "Wat bewaren eekhoorns voor de winter?"
        },
        options: [
          { en: "Nuts and seeds", es: "Nueces y semillas", de: "Nüsse und Samen", nl: "Noten en zaden" },
          { en: "Leaves", es: "Hojas", de: "Blätter", nl: "Bladeren" },
          { en: "Insects", es: "Insectos", de: "Insekten", nl: "Insecten" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" }
        ],
        correct: 0,
        explanation: {
          en: "Squirrels collect and bury nuts and seeds in the fall to have food stored for winter when fresh food is scarce.",
          es: "Las ardillas recolectan y entierran nueces y semillas en el otoño para tener comida almacenada para el invierno cuando la comida fresca es escasa.",
          de: "Eichhörnchen sammeln und vergraben Nüsse und Samen im Herbst, um Nahrung für den Winter gespeichert zu haben, wenn frische Nahrung knapp ist.",
          nl: "Eekhoorns verzamelen en begraven noten en zaden in de herfst om voedsel opgeslagen te hebben voor de winter wanneer vers voedsel schaars is."
        }
      },
      {
        question: {
          en: "What do bears eat in the wild?",
          es: "¿Qué comen los osos en la naturaleza?",
          de: "Was fressen Bären in der Wildnis?",
          nl: "Wat eten beren in het wild?"
        },
        options: [
          { en: "Fish, plants, and berries", es: "Peces, plantas y bayas", de: "Fische, Pflanzen und Beeren", nl: "Vis, planten en bessen" },
          { en: "Only honey", es: "Solo miel", de: "Nur Honig", nl: "Alleen honing" },
          { en: "Only meat", es: "Solo carne", de: "Nur Fleisch", nl: "Alleen vlees" },
          { en: "Only plants", es: "Solo plantas", de: "Nur Pflanzen", nl: "Alleen planten" }
        ],
        correct: 0,
        explanation: {
          en: "Bears are omnivores that eat a varied diet including fish like salmon, plants, berries, honey, and sometimes small animals.",
          es: "Los osos son omnívoros que comen una dieta variada que incluye peces como salmón, plantas, bayas, miel y a veces animales pequeños.",
          de: "Bären sind Allesfresser, die eine abwechslungsreiche Ernährung haben, einschließlich Fischen wie Lachs, Pflanzen, Beeren, Honig und manchmal kleinen Tieren.",
          nl: "Beren zijn alleseters die een gevarieerd dieet eten inclusief vis zoals zalm, planten, bessen, honing en soms kleine dieren."
        }
      },
      {
        question: {
          en: "What do flamingos eat to stay pink?",
          es: "¿Qué comen los flamencos para mantenerse rosados?",
          de: "Was fressen Flamingos, um rosa zu bleiben?",
          nl: "Wat eten flamingo's om roze te blijven?"
        },
        options: [
          { en: "Shrimp and algae", es: "Camarones y algas", de: "Garnelen und Algen", nl: "Garnalen en algen" },
          { en: "Pink flowers", es: "Flores rosadas", de: "Rosa Blumen", nl: "Roze bloemen" },
          { en: "Carrots", es: "Zanahorias", de: "Karotten", nl: "Wortels" },
          { en: "Seeds", es: "Semillas", de: "Samen", nl: "Zaden" }
        ],
        correct: 0,
        explanation: {
          en: "Flamingos get their pink color from eating shrimp, algae, and other small organisms that contain carotenoids, which are natural pink pigments.",
          es: "Los flamencos obtienen su color rosado al comer camarones, algas y otros organismos pequeños que contienen carotenoides, que son pigmentos rosados naturales.",
          de: "Flamingos bekommen ihre rosa Farbe durch das Fressen von Garnelen, Algen und anderen kleinen Organismen, die Carotinoide enthalten, natürliche rosa Pigmente.",
          nl: "Flamingo's krijgen hun roze kleur door het eten van garnalen, algen en andere kleine organismen die caroteïen bevatten, natuurlijke roze pigmenten."
        }
      },
      {
        question: {
          en: "What do spiders catch in their webs?",
          es: "¿Qué atrapan las arañas en sus telarañas?",
          de: "Was fangen Spinnen in ihren Netzen?",
          nl: "Wat vangen spinnen in hun webben?"
        },
        options: [
          { en: "Flying insects", es: "Insectos voladores", de: "Fliegende Insekten", nl: "Vliegende insecten" },
          { en: "Leaves", es: "Hojas", de: "Blätter", nl: "Bladeren" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Seeds", es: "Semillas", de: "Samen", nl: "Zaden" }
        ],
        correct: 0,
        explanation: {
          en: "Spiders weave sticky webs to trap flying insects like flies, mosquitoes, and moths that get caught when they fly into the web.",
          es: "Las arañas tejen telarañas pegajosas para atrapar insectos voladores como moscas, mosquitos y polillas que quedan atrapados cuando vuelan hacia la telaraña.",
          de: "Spinnen weben klebrige Netze, um fliegende Insekten wie Fliegen, Mücken und Motten zu fangen, die sich verfangen, wenn sie ins Netz fliegen.",
          nl: "Spinnen weven kleverige webben om vliegende insecten zoals vliegen, muggen en motten te vangen die vast komen te zitten wanneer ze in het web vliegen."
        }
      },
      {
        question: {
          en: "What do whales eat in the ocean?",
          es: "¿Qué comen las ballenas en el océano?",
          de: "Was fressen Wale im Ozean?",
          nl: "Wat eten walvissen in de oceaan?"
        },
        options: [
          { en: "Krill and small fish", es: "Krill y peces pequeños", de: "Krill und kleine Fische", nl: "Krill en kleine vissen" },
          { en: "Seaweed", es: "Algas marinas", de: "Seetang", nl: "Zeewier" },
          { en: "Coral", es: "Coral", de: "Korallen", nl: "Koraal" },
          { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" }
        ],
        correct: 0,
        explanation: {
          en: "Large whales like blue whales filter massive amounts of water to catch tiny krill and small fish, eating up to 4 tons of food per day.",
          es: "Las ballenas grandes como las ballenas azules filtran cantidades masivas de agua para atrapar krill diminuto y peces pequeños, comiendo hasta 4 toneladas de comida por día.",
          de: "Große Wale wie Blauwale filtern massive Mengen Wasser, um winzigen Krill und kleine Fische zu fangen und fressen bis zu 4 Tonnen Nahrung pro Tag.",
          nl: "Grote walvissen zoals blauwe walvissen filteren enorme hoeveelheden water om minuscule krill en kleine vissen te vangen, en eten tot 4 ton voedsel per dag."
        }
      },
      {
        question: {
          en: "What do horses eat on farms?",
          es: "¿Qué comen los caballos en las granjas?",
          de: "Was fressen Pferde auf Bauernhöfen?",
          nl: "Wat eten paarden op boerderijen?"
        },
        options: [
          { en: "Hay and grass", es: "Heno y hierba", de: "Heu und Gras", nl: "Hooi en gras" },
          { en: "Meat", es: "Carne", de: "Fleisch", nl: "Vlees" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" }
        ],
        correct: 0,
        explanation: {
          en: "Horses are herbivores that graze on hay and grass, which provide the fiber and nutrients they need for their large bodies.",
          es: "Los caballos son herbívoros que pastan heno y hierba, que proporcionan la fibra y nutrientes que necesitan para sus cuerpos grandes.",
          de: "Pferde sind Pflanzenfresser, die Heu und Gras fressen, was die Ballaststoffe und Nährstoffe liefert, die sie für ihre großen Körper benötigen.",
          nl: "Paarden zijn planteneters die hooi en gras grazen, wat de vezels en voedingsstoffen biedt die ze nodig hebben voor hun grote lichamen."
        }
      },
      {
        question: {
          en: "What do cats hunt?",
          es: "¿Qué cazan los gatos?",
          de: "Was jagen Katzen?",
          nl: "Wat jagen katten?"
        },
        options: [
          { en: "Mice and small animals", es: "Ratones y animales pequeños", de: "Mäuse und kleine Tiere", nl: "Muizen en kleine dieren" },
          { en: "Vegetables", es: "Verduras", de: "Gemüse", nl: "Groenten" },
          { en: "Flowers", es: "Flores", de: "Blumen", nl: "Bloemen" },
          { en: "Grass only", es: "Solo hierba", de: "Nur Gras", nl: "Alleen gras" }
        ],
        correct: 0,
        explanation: {
          en: "Cats are natural hunters with sharp claws and excellent night vision that stalk and catch mice, birds, and other small animals.",
          es: "Los gatos son cazadores naturales con garras afiladas y excelente visión nocturna que acechan y atrapan ratones, pájaros y otros animales pequeños.",
          de: "Katzen sind natürliche Jäger mit scharfen Krallen und ausgezeichneter Nachtsicht, die Mäuse, Vögel und andere kleine Tiere verfolgen und fangen.",
          nl: "Katten zijn natuurlijke jagers met scherpe klauwen en uitstekend nachtzicht die muizen, vogels en andere kleine dieren besluipen en vangen."
        }
      },
      {
        question: {
          en: "What do chickens like to eat?",
          es: "¿Qué les gusta comer a las gallinas?",
          de: "Was fressen Hühner gerne?",
          nl: "Wat eten kippen graag?"
        },
        options: [
          { en: "Seeds and insects", es: "Semillas e insectos", de: "Samen und Insekten", nl: "Zaden en insecten" },
          { en: "Only grass", es: "Solo hierba", de: "Nur Gras", nl: "Alleen gras" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Tree leaves", es: "Hojas de árboles", de: "Baumblätter", nl: "Boombladeren" }
        ],
        correct: 0,
        explanation: {
          en: "Chickens are omnivores that peck at seeds, grains, and insects, helping farmers by eating pests while providing eggs.",
          es: "Las gallinas son omnívoras que picotean semillas, granos e insectos, ayudando a los granjeros al comer plagas mientras proporcionan huevos.",
          de: "Hühner sind Allesfresser, die Samen, Körner und Insekten picken und Bauern helfen, indem sie Schädlinge fressen, während sie Eier liefern.",
          nl: "Kippen zijn alleseters die pikken naar zaden, granen en insecten, en helpen boeren door plagen te eten terwijl ze eieren leveren."
        }
      },
      {
        question: {
          en: "What do deer eat in the forest?",
          es: "¿Qué comen los ciervos en el bosque?",
          de: "Was fressen Hirsche im Wald?",
          nl: "Wat eten herten in het bos?"
        },
        options: [
          { en: "Leaves and plants", es: "Hojas y plantas", de: "Blätter und Pflanzen", nl: "Bladeren en planten" },
          { en: "Other animals", es: "Otros animales", de: "Andere Tiere", nl: "Andere dieren" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" }
        ],
        correct: 0,
        explanation: {
          en: "Deer are herbivores that browse on leaves, twigs, bark, and plants, using their keen sense of smell to find the best vegetation.",
          es: "Los ciervos son herbívoros que ramonean hojas, ramitas, corteza y plantas, usando su agudo sentido del olfato para encontrar la mejor vegetación.",
          de: "Hirsche sind Pflanzenfresser, die Blätter, Zweige, Rinde und Pflanzen fressen und ihren scharfen Geruchssinn nutzen, um die beste Vegetation zu finden.",
          nl: "Herten zijn planteneters die bladeren, twijgjes, schors en planten afgrazen, en hun scherpe reukzin gebruiken om de beste vegetatie te vinden."
        }
      },
      {
        question: {
          en: "What do frogs catch with their tongues?",
          es: "¿Qué atrapan las ranas con sus lenguas?",
          de: "Was fangen Frösche mit ihren Zungen?",
          nl: "Wat vangen kikkers met hun tongen?"
        },
        options: [
          { en: "Flies and insects", es: "Moscas e insectos", de: "Fliegen und Insekten", nl: "Vliegen en insecten" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Leaves", es: "Hojas", de: "Blätter", nl: "Bladeren" },
          { en: "Seeds", es: "Semillas", de: "Samen", nl: "Zaden" }
        ],
        correct: 0,
        explanation: {
          en: "Frogs have incredibly fast, sticky tongues that can shoot out in milliseconds to catch flies, mosquitoes, and other flying insects.",
          es: "Las ranas tienen lenguas increíblemente rápidas y pegajosas que pueden dispararse en milisegundos para atrapar moscas, mosquitos y otros insectos voladores.",
          de: "Frösche haben unglaublich schnelle, klebrige Zungen, die in Millisekunden herausschießen können, um Fliegen, Mücken und andere fliegende Insekten zu fangen.",
          nl: "Kikkers hebben ongelooflijk snelle, kleverige tongen die in milliseconden kunnen uitschieten om vliegen, muggen en andere vliegende insecten te vangen."
        }
      },
      {
        question: {
          en: "What do turtles eat?",
          es: "¿Qué comen las tortugas?",
          de: "Was fressen Schildkröten?",
          nl: "Wat eten schildpadden?"
        },
        options: [
          { en: "Plants and small animals", es: "Plantas y animales pequeños", de: "Pflanzen und kleine Tiere", nl: "Planten en kleine dieren" },
          { en: "Only rocks", es: "Solo rocas", de: "Nur Steine", nl: "Alleen stenen" },
          { en: "Only wood", es: "Solo madera", de: "Nur Holz", nl: "Alleen hout" },
          { en: "Only water", es: "Solo agua", de: "Nur Wasser", nl: "Alleen water" }
        ],
        correct: 0,
        explanation: {
          en: "Turtles are omnivores that eat both plants like algae and lettuce, and small animals like fish, worms, and insects depending on their species.",
          es: "Las tortugas son omnívoras que comen tanto plantas como algas y lechuga, como animales pequeños como peces, gusanos e insectos según su especie.",
          de: "Schildkröten sind Allesfresser, die sowohl Pflanzen wie Algen und Salat als auch kleine Tiere wie Fische, Würmer und Insekten je nach Art fressen.",
          nl: "Schildpadden zijn alleseters die zowel planten zoals algen en sla eten, als kleine dieren zoals vissen, wormen en insecten afhankelijk van hun soort."
        }
      },
      {
        question: {
          en: "What do pigs eat on farms?",
          es: "¿Qué comen los cerdos en las granjas?",
          de: "Was fressen Schweine auf Bauernhöfen?",
          nl: "Wat eten varkens op boerderijen?"
        },
        options: [
          { en: "Almost anything edible", es: "Casi cualquier cosa comestible", de: "Fast alles Essbare", nl: "Bijna alles eetbaars" },
          { en: "Only meat", es: "Solo carne", de: "Nur Fleisch", nl: "Alleen vlees" },
          { en: "Only grass", es: "Solo hierba", de: "Nur Gras", nl: "Alleen gras" },
          { en: "Only water", es: "Solo agua", de: "Nur Wasser", nl: "Alleen water" }
        ],
        correct: 0,
        explanation: {
          en: "Pigs are omnivores with great appetites that will eat vegetables, fruits, grains, kitchen scraps, and almost any food available to them.",
          es: "Los cerdos son omnívoros con grandes apetitos que comerán verduras, frutas, granos, sobras de cocina y casi cualquier comida disponible para ellos.",
          de: "Schweine sind Allesfresser mit großem Appetit, die Gemüse, Früchte, Körner, Küchenreste und fast jedes für sie verfügbare Futter fressen.",
          nl: "Varkens zijn alleseters met grote eetlust die groenten, fruit, granen, keukenresten en bijna elk voedsel dat beschikbaar is voor hen zullen eten."
        }
      },
      {
        question: {
          en: "What do eagles hunt from the sky?",
          es: "¿Qué cazan las águilas desde el cielo?",
          de: "Was jagen Adler vom Himmel aus?",
          nl: "Wat jagen arenden vanuit de lucht?"
        },
        options: [
          { en: "Fish and small animals", es: "Peces y animales pequeños", de: "Fische und kleine Tiere", nl: "Vis en kleine dieren" },
          { en: "Leaves", es: "Hojas", de: "Blätter", nl: "Bladeren" },
          { en: "Flowers", es: "Flores", de: "Blumen", nl: "Bloemen" },
          { en: "Seeds", es: "Semillas", de: "Samen", nl: "Zaden" }
        ],
        correct: 0,
        explanation: {
          en: "Eagles are powerful birds of prey with incredible eyesight that soar high above and swoop down to catch fish, rabbits, and other small animals.",
          es: "Las águilas son poderosas aves de presa con vista increíble que vuelan alto y se abalanzan para atrapar peces, conejos y otros animales pequeños.",
          de: "Adler sind kraftvolle Raubvögel mit unglaublicher Sehkraft, die hoch oben schweben und herabstoßen, um Fische, Kaninchen und andere kleine Tiere zu fangen.",
          nl: "Arenden zijn krachtige roofvogels met ongelooflijk zicht die hoog boven zweven en naar beneden duiken om vis, konijnen en andere kleine dieren te vangen."
        }
      },
      {
        question: {
          en: "What do monkeys eat in trees?",
          es: "¿Qué comen los monos en los árboles?",
          de: "Was fressen Affen in Bäumen?",
          nl: "Wat eten apen in bomen?"
        },
        options: [
          { en: "Fruits and leaves", es: "Frutas y hojas", de: "Früchte und Blätter", nl: "Fruit en bladeren" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" },
          { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" }
        ],
        correct: 0,
        explanation: {
          en: "Monkeys are primarily frugivores that swing through trees eating ripe fruits, leaves, nuts, and occasionally insects.",
          es: "Los monos son principalmente frugívoros que se balancean por los árboles comiendo frutas maduras, hojas, nueces y ocasionalmente insectos.",
          de: "Affen sind hauptsächlich Fruchtfresser, die durch Bäume schwingen und reife Früchte, Blätter, Nüsse und gelegentlich Insekten fressen.",
          nl: "Apen zijn voornamelijk fruiteneters die door bomen zwaaien en rijpe vruchten, bladeren, noten en af en toe insecten eten."
        }
      },
      {
        question: {
          en: "What do snakes eat?",
          es: "¿Qué comen las serpientes?",
          de: "Was fressen Schlangen?",
          nl: "Wat eten slangen?"
        },
        options: [
          { en: "Other animals whole", es: "Otros animales enteros", de: "Andere Tiere ganz", nl: "Andere dieren heel" },
          { en: "Only plants", es: "Solo plantas", de: "Nur Pflanzen", nl: "Alleen planten" },
          { en: "Only fruits", es: "Solo frutas", de: "Nur Früchte", nl: "Alleen fruit" },
          { en: "Only leaves", es: "Solo hojas", de: "Nur Blätter", nl: "Alleen bladeren" }
        ],
        correct: 0,
        explanation: {
          en: "Snakes are carnivores that swallow their prey whole, eating animals like mice, birds, frogs, and eggs by unhinging their jaws.",
          es: "Las serpientes son carnívoras que tragan a sus presas enteras, comiendo animales como ratones, pájaros, ranas y huevos desencajando sus mandíbulas.",
          de: "Schlangen sind Fleischfresser, die ihre Beute ganz verschlucken und Tiere wie Mäuse, Vögel, Frösche und Eier fressen, indem sie ihre Kiefer aushaken.",
          nl: "Slangen zijn vleeseters die hun prooi heel inslikken, en dieren zoals muizen, vogels, kikkers en eieren eten door hun kaken te ontwrichten."
        }
      },
      {
        question: {
          en: "What do ducks eat in ponds?",
          es: "¿Qué comen los patos en los estanques?",
          de: "Was fressen Enten in Teichen?",
          nl: "Wat eten eenden in vijvers?"
        },
        options: [
          { en: "Plants and small fish", es: "Plantas y peces pequeños", de: "Pflanzen und kleine Fische", nl: "Planten en kleine vissen" },
          { en: "Only bread", es: "Solo pan", de: "Nur Brot", nl: "Alleen brood" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" },
          { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" }
        ],
        correct: 0,
        explanation: {
          en: "Ducks are omnivores that dabble in water to eat aquatic plants, algae, small fish, and insects they find in ponds and lakes.",
          es: "Los patos son omnívoros que chapotean en el agua para comer plantas acuáticas, algas, peces pequeños e insectos que encuentran en estanques y lagos.",
          de: "Enten sind Allesfresser, die im Wasser plätschern, um Wasserpflanzen, Algen, kleine Fische und Insekten zu fressen, die sie in Teichen und Seen finden.",
          nl: "Eenden zijn alleseters die in het water ploeteren om waterplanten, algen, kleine vissen en insecten te eten die ze vinden in vijvers en meren."
        }
      },
      {
        question: {
          en: "What do hedgehogs eat?",
          es: "¿Qué comen los erizos?",
          de: "Was fressen Igel?",
          nl: "Wat eten egels?"
        },
        options: [
          { en: "Insects and small creatures", es: "Insectos y criaturas pequeñas", de: "Insekten und kleine Lebewesen", nl: "Insecten en kleine wezens" },
          { en: "Only grass", es: "Solo hierba", de: "Nur Gras", nl: "Alleen gras" },
          { en: "Only fruits", es: "Solo frutas", de: "Nur Früchte", nl: "Alleen fruit" },
          { en: "Tree bark", es: "Corteza de árbol", de: "Baumrinde", nl: "Boomschors" }
        ],
        correct: 0,
        explanation: {
          en: "Hedgehogs are insectivores that use their excellent sense of smell to find beetles, worms, slugs, and other small creatures in gardens.",
          es: "Los erizos son insectívoros que usan su excelente sentido del olfato para encontrar escarabajos, gusanos, babosas y otras criaturas pequeñas en jardines.",
          de: "Igel sind Insektenfresser, die ihren ausgezeichneten Geruchssinn nutzen, um Käfer, Würmer, Schnecken und andere kleine Lebewesen in Gärten zu finden.",
          nl: "Egels zijn insecteneters die hun uitstekende reukzin gebruiken om kevers, wormen, slakken en andere kleine wezens in tuinen te vinden."
        }
      },
      {
        question: {
          en: "What do goats eat?",
          es: "¿Qué comen las cabras?",
          de: "Was fressen Ziegen?",
          nl: "Wat eten geiten?"
        },
        options: [
          { en: "Grass and plants", es: "Hierba y plantas", de: "Gras und Pflanzen", nl: "Gras en planten" },
          { en: "Only meat", es: "Solo carne", de: "Nur Fleisch", nl: "Alleen vlees" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" }
        ],
        correct: 0,
        explanation: {
          en: "Goats are browsers that eat a variety of plants including grass, weeds, bark, and leaves, and can climb steep terrain to find food.",
          es: "Las cabras son ramoneadoras que comen una variedad de plantas incluyendo hierba, malezas, corteza y hojas, y pueden escalar terreno empinado para encontrar comida.",
          de: "Ziegen sind Grasende, die eine Vielzahl von Pflanzen fressen, einschließlich Gras, Unkraut, Rinde und Blättern, und können steiles Gelände erklimmen, um Nahrung zu finden.",
          nl: "Geiten zijn grazers die een verscheidenheid aan planten eten inclusief gras, onkruid, schors en bladeren, en kunnen steile terreinen beklimmen om voedsel te vinden."
        }
      },
      {
        question: {
          en: "What do wolves hunt in packs?",
          es: "¿Qué cazan los lobos en manada?",
          de: "Was jagen Wölfe im Rudel?",
          nl: "Wat jagen wolven in roedels?"
        },
        options: [
          { en: "Large animals like deer", es: "Animales grandes como ciervos", de: "Große Tiere wie Hirsche", nl: "Grote dieren zoals herten" },
          { en: "Only fish", es: "Solo peces", de: "Nur Fische", nl: "Alleen vis" },
          { en: "Only plants", es: "Solo plantas", de: "Nur Pflanzen", nl: "Alleen planten" },
          { en: "Only insects", es: "Solo insectos", de: "Nur Insekten", nl: "Alleen insecten" }
        ],
        correct: 0,
        explanation: {
          en: "Wolves work together in coordinated packs to hunt large prey like deer, elk, and moose that would be too dangerous for a single wolf.",
          es: "Los lobos trabajan juntos en manadas coordinadas para cazar presas grandes como ciervos, alces y alces que serían demasiado peligrosos para un solo lobo.",
          de: "Wölfe arbeiten zusammen in koordinierten Rudeln, um große Beute wie Hirsche, Elche und Elche zu jagen, die für einen einzelnen Wolf zu gefährlich wären.",
          nl: "Wolven werken samen in gecoordineerde roedels om grote prooien zoals herten, elanden en eland te jagen die te gevaarlijk zouden zijn voor een enkele wolf."
        }
      },
      {
        question: {
          en: "What do bats eat at night?",
          es: "¿Qué comen los murciélagos por la noche?",
          de: "Was fressen Fledermäuse nachts?",
          nl: "Wat eten vleermuizen 's nachts?"
        },
        options: [
          { en: "Insects and fruits", es: "Insectos y frutas", de: "Insekten und Früchte", nl: "Insecten en fruit" },
          { en: "Only leaves", es: "Solo hojas", de: "Nur Blätter", nl: "Alleen bladeren" },
          { en: "Only water", es: "Solo agua", de: "Nur Wasser", nl: "Alleen water" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" }
        ],
        correct: 0,
        explanation: {
          en: "Most bats are insectivores that use echolocation to hunt flying insects at night, while some larger bats eat fruits and nectar.",
          es: "La mayoría de los murciélagos son insectívoros que usan ecolocalización para cazar insectos voladores por la noche, mientras que algunos murciélagos más grandes comen frutas y néctar.",
          de: "Die meisten Fledermäuse sind Insektenfresser, die Echoortung nutzen, um nachts fliegende Insekten zu jagen, während einige größere Fledermäuse Früchte und Nektar fressen.",
          nl: "De meeste vleermuizen zijn insecteneters die echolocatie gebruiken om vliegende insecten 's nachts te jagen, terwijl sommige grotere vleermuizen fruit en nectar eten."
        }
      },
      {
        question: {
          en: "What do hamsters store in their cheeks?",
          es: "¿Qué almacenan los hámsters en sus mejillas?",
          de: "Was sammeln Hamster in ihren Backen?",
          nl: "Wat bewaren hamsters in hun wangen?"
        },
        options: [
          { en: "Seeds and food", es: "Semillas y comida", de: "Samen und Futter", nl: "Zaden en voedsel" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Toys", es: "Juguetes", de: "Spielzeug", nl: "Speelgoed" },
          { en: "Leaves", es: "Hojas", de: "Blätter", nl: "Bladeren" }
        ],
        correct: 0,
        explanation: {
          en: "Hamsters have large cheek pouches that they stuff with seeds and small food items to carry back to their burrows for storage.",
          es: "Los hámsters tienen grandes bolsas en las mejillas que rellenan con semillas y pequeños alimentos para llevar de vuelta a sus madrigueras para almacenar.",
          de: "Hamster haben große Backentaschen, die sie mit Samen und kleinen Nahrungsmitteln stopfen, um sie zu ihren Bauten zur Lagerung zu bringen.",
          nl: "Hamsters hebben grote wangzakken die ze volstoppen met zaden en kleine voedselstukjes om terug te brengen naar hun holen voor opslag."
        }
      },
      {
        question: {
          en: "What do sea otters eat while floating?",
          es: "¿Qué comen las nutrias marinas mientras flotan?",
          de: "Was fressen Seeotter beim Schwimmen?",
          nl: "Wat eten zee-otters terwijl ze drijven?"
        },
        options: [
          { en: "Sea urchins and shellfish", es: "Erizos de mar y mariscos", de: "Seeigel und Schalentiere", nl: "Zee-egels en schaaldieren" },
          { en: "Seaweed only", es: "Solo algas marinas", de: "Nur Seetang", nl: "Alleen zeewier" },
          { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" }
        ],
        correct: 0,
        explanation: {
          en: "Sea otters float on their backs and use rocks as tools to crack open hard-shelled sea urchins, crabs, and mollusks that they dive for.",
          es: "Las nutrias marinas flotan sobre sus espaldas y usan rocas como herramientas para abrir erizos de mar, cangrejos y moluscos de concha dura por los que se sumergen.",
          de: "Seeotter schwimmen auf dem Rücken und verwenden Steine als Werkzeuge, um harte Seeigel, Krabben und Weichtiere aufzubrechen, nach denen sie tauchen.",
          nl: "Zee-otters drijven op hun rug en gebruiken stenen als gereedschap om hardschalige zee-egels, krabben en weekdieren open te breken waarnaar ze duiken."
        }
      },
      {
        question: {
          en: "What do peacocks eat?",
          es: "¿Qué comen los pavos reales?",
          de: "Was fressen Pfauen?",
          nl: "Wat eten pauwen?"
        },
        options: [
          { en: "Seeds, insects, and plants", es: "Semillas, insectos y plantas", de: "Samen, Insekten und Pflanzen", nl: "Zaden, insecten en planten" },
          { en: "Only flowers", es: "Solo flores", de: "Nur Blumen", nl: "Alleen bloemen" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Only meat", es: "Solo carne", de: "Nur Fleisch", nl: "Alleen vlees" }
        ],
        correct: 0,
        explanation: {
          en: "Peacocks are omnivores that forage on the ground for seeds, insects, small reptiles, and plants while showing off their beautiful tail feathers.",
          es: "Los pavos reales son omnívoros que buscan en el suelo semillas, insectos, pequeños reptiles y plantas mientras muestran sus hermosas plumas de cola.",
          de: "Pfauen sind Allesfresser, die am Boden nach Samen, Insekten, kleinen Reptilien und Pflanzen suchen, während sie ihre schönen Schwanzfedern zeigen.",
          nl: "Pauwen zijn alleseters die op de grond foerageren naar zaden, insecten, kleine reptielen en planten terwijl ze hun prachtige staartveren laten zien."
        }
      },
      {
        question: {
          en: "What do crocodiles hunt in water?",
          es: "¿Qué cazan los cocodrilos en el agua?",
          de: "Was jagen Krokodile im Wasser?",
          nl: "Wat jagen krokodillen in het water?"
        },
        options: [
          { en: "Fish and animals that drink water", es: "Peces y animales que beben agua", de: "Fische und Tiere, die Wasser trinken", nl: "Vis en dieren die water drinken" },
          { en: "Only plants", es: "Solo plantas", de: "Nur Pflanzen", nl: "Alleen planten" },
          { en: "Only insects", es: "Solo insectos", de: "Nur Insekten", nl: "Alleen insecten" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" }
        ],
        correct: 0,
        explanation: {
          en: "Crocodiles are ambush predators that lie perfectly still in water, then explosively attack fish, birds, and animals that come to drink.",
          es: "Los cocodrilos son depredadores de emboscada que permanecen perfectamente inmóviles en el agua, luego atacan explosivamente a peces, pájaros y animales que vienen a beber.",
          de: "Krokodile sind Hinterhaltsräuber, die perfekt still im Wasser liegen und dann explosiv Fische, Vögel und Tiere angreifen, die zum Trinken kommen.",
          nl: "Krokodillen zijn hinderlaag-roofdieren die perfect stil in het water liggen, dan explosief aanvallen op vissen, vogels en dieren die komen drinken."
        }
      },
      {
        question: {
          en: "What do chimpanzees eat in the jungle?",
          es: "¿Qué comen los chimpancés en la selva?",
          de: "Was fressen Schimpansen im Dschungel?",
          nl: "Wat eten chimpansees in de jungle?"
        },
        options: [
          { en: "Fruits, leaves, and insects", es: "Frutas, hojas e insectos", de: "Früchte, Blätter und Insekten", nl: "Fruit, bladeren en insecten" },
          { en: "Only bananas", es: "Solo plátanos", de: "Nur Bananen", nl: "Alleen bananen" },
          { en: "Fish", es: "Pescado", de: "Fisch", nl: "Vis" },
          { en: "Rocks", es: "Rocas", de: "Steine", nl: "Stenen" }
        ],
        correct: 0,
        explanation: {
          en: "Chimpanzees are intelligent omnivores that eat mostly fruits and leaves, but also use tools to extract insects and occasionally hunt small animals.",
          es: "Los chimpancés son omnívoros inteligentes que comen principalmente frutas y hojas, pero también usan herramientas para extraer insectos y ocasionalmente cazan animales pequeños.",
          de: "Schimpansen sind intelligente Allesfresser, die hauptsächlich Früchte und Blätter fressen, aber auch Werkzeuge verwenden, um Insekten zu extrahieren und gelegentlich kleine Tiere jagen.",
          nl: "Chimpansees zijn intelligente alleseters die voornamelijk fruit en bladeren eten, maar ook gereedschap gebruiken om insecten te halen en af en toe kleine dieren jagen."
        }
      },
      {
        question: {
          en: "What do ladybugs eat in gardens?",
          es: "¿Qué comen las mariquitas en los jardines?",
          de: "Was fressen Marienkäfer in Gärten?",
          nl: "Wat eten lieveheersbeestjes in tuinen?"
        },
        options: [
          { en: "Aphids and small insects", es: "Pulgones e insectos pequeños", de: "Blattläuse und kleine Insekten", nl: "Bladluizen en kleine insecten" },
          { en: "Flowers", es: "Flores", de: "Blumen", nl: "Bloemen" },
          { en: "Leaves", es: "Hojas", de: "Blätter", nl: "Bladeren" },
          { en: "Soil", es: "Tierra", de: "Erde", nl: "Aarde" }
        ],
        correct: 0,
        explanation: {
          en: "Ladybugs are beneficial insects that help gardeners by eating hundreds of aphids and other plant-damaging pests every day.",
          es: "Las mariquitas son insectos beneficiosos que ayudan a los jardineros comiendo cientos de pulgones y otras plagas dañinas para las plantas todos los días.",
          de: "Marienkäfer sind nützliche Insekten, die Gärtnern helfen, indem sie täglich Hunderte von Blattläusen und anderen pflanzenschädlichen Schädlingen fressen.",
          nl: "Lieveheersbeestjes zijn nuttige insecten die tuiniers helpen door elke dag honderden bladluizen en andere plantbeschadigende plagen te eten."
        }
      },
      {
        question: {
          en: "What do dolphins eat in groups?",
          es: "¿Qué comen los delfines en grupo?",
          de: "Was fressen Delfine in Gruppen?",
          nl: "Wat eten dolfijnen in groepen?"
        },
        options: [
          { en: "Fish and squid", es: "Peces y calamares", de: "Fische und Tintenfische", nl: "Vis en inktvis" },
          { en: "Seaweed", es: "Algas marinas", de: "Seetang", nl: "Zeewier" },
          { en: "Coral", es: "Coral", de: "Korallen", nl: "Koraal" },
          { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" }
        ],
        correct: 0,
        explanation: {
          en: "Dolphins work together in pods to herd schools of fish and squid, using coordinated hunting strategies and echolocation to catch their prey.",
          es: "Los delfines trabajan juntos en grupos para arrear cardúmenes de peces y calamares, usando estrategias de caza coordinadas y ecolocalización para atrapar a sus presas.",
          de: "Delfine arbeiten zusammen in Gruppen, um Fischschwärme und Tintenfische zu treiben, und verwenden koordinierte Jagdstrategien und Echoortung, um ihre Beute zu fangen.",
          nl: "Dolfijnen werken samen in groepen om scholen vis en inktvis bijeen te drijven, gebruikmakend van gecoördineerde jachtstrategieën en echolocatie om hun prooi te vangen."
        }
      },
      {
        question: {
          en: "What do raccoons eat at night?",
          es: "¿Qué comen los mapaches por la noche?",
          de: "Was fressen Waschbären nachts?",
          nl: "Wat eten wasberen 's nachts?"
        },
        options: [
          { en: "Almost anything they find", es: "Casi cualquier cosa que encuentren", de: "Fast alles, was sie finden", nl: "Bijna alles wat ze vinden" },
          { en: "Only fish", es: "Solo peces", de: "Nur Fische", nl: "Alleen vis" },
          { en: "Only plants", es: "Solo plantas", de: "Nur Pflanzen", nl: "Alleen planten" },
          { en: "Only meat", es: "Solo carne", de: "Nur Fleisch", nl: "Alleen vlees" }
        ],
        correct: 0,
        explanation: {
          en: "Raccoons are opportunistic omnivores with dexterous hands that search for fruits, insects, small animals, eggs, and even human food scraps.",
          es: "Los mapaches son omnívoros oportunistas con manos hábiles que buscan frutas, insectos, animales pequeños, huevos e incluso sobras de comida humana.",
          de: "Waschbären sind opportunistische Allesfresser mit geschickten Händen, die nach Früchten, Insekten, kleinen Tieren, Eiern und sogar menschlichen Essensresten suchen.",
          nl: "Wasberen zijn opportunistische alleseters met handige handen die zoeken naar fruit, insecten, kleine dieren, eieren en zelfs menselijke voedselresten."
        }
      },
      {
        question: {
          en: "What do seagulls eat at the beach?",
          es: "¿Qué comen las gaviotas en la playa?",
          de: "Was fressen Möwen am Strand?",
          nl: "Wat eten zeemeeuwen op het strand?"
        },
        options: [
          { en: "Fish, crabs, and scraps", es: "Peces, cangrejos y sobras", de: "Fische, Krabben und Reste", nl: "Vis, krabben en etensresten" },
          { en: "Only sand", es: "Solo arena", de: "Nur Sand", nl: "Alleen zand" },
          { en: "Only seashells", es: "Solo caracolas", de: "Nur Muscheln", nl: "Alleen schelpen" },
          { en: "Only seaweed", es: "Solo algas marinas", de: "Nur Seetang", nl: "Alleen zeewier" }
        ],
        correct: 0,
        explanation: {
          en: "Seagulls are scavengers that eat fish, crabs, shellfish, food scraps from tourists, and almost anything edible they can find on beaches.",
          es: "Las gaviotas son carroñeras que comen peces, cangrejos, mariscos, sobras de comida de turistas y casi cualquier cosa comestible que puedan encontrar en las playas.",
          de: "Möwen sind Aasfresser, die Fische, Krabben, Schalentiere, Essensreste von Touristen und fast alles Essbare fressen, was sie an Stränden finden können.",
          nl: "Zeemeeuwen zijn aaseters die vis, krabben, schaaldieren, voedselresten van toeristen en bijna alles eetbaars eten wat ze op stranden kunnen vinden."
        }
      },
      {
        question: {
          en: "What do woodpeckers eat when they peck at trees?",
          es: "¿Qué comen los pájaros carpinteros cuando picotean árboles?",
          de: "Was fressen Spechte, wenn sie an Bäumen klopfen?",
          nl: "Wat eten spechten als ze op bomen pikken?"
        },
        options: [
          { en: "Insects and larvae hiding in bark", es: "Insectos y larvas escondidos en la corteza", de: "Insekten und Larven, die sich in der Rinde verstecken", nl: "Insecten en larven die zich in de schors verstoppen" },
          { en: "Wood chips", es: "Astillas de madera", de: "Holzspäne", nl: "Houtspaanders" },
          { en: "Tree sap only", es: "Solo savia de árbol", de: "Nur Baumsaft", nl: "Alleen boomsap" },
          { en: "Leaves", es: "Hojas", de: "Blätter", nl: "Bladeren" }
        ],
        correct: 0,
        explanation: {
          en: "Woodpeckers peck at tree bark to find delicious insects, grubs, and larvae hiding underneath. Their strong beaks and long tongues are perfect tools for getting these tasty treats!",
          es: "Los pájaros carpinteros picotean la corteza de los árboles para encontrar deliciosos insectos, larvas y gusanos que se esconden debajo. ¡Sus picos fuertes y lenguas largas son herramientas perfectas para obtener estas golosinas sabrosas!",
          de: "Spechte klopfen an Baumrinde, um köstliche Insekten, Maden und Larven zu finden, die sich darunter verstecken. Ihre starken Schnäbel und langen Zungen sind perfekte Werkzeuge, um diese leckeren Leckerbissen zu bekommen!",
          nl: "Spechten pikken op boomschors om heerlijke insecten, larven en maden te vinden die zich eronder verstoppen. Hun sterke snavels en lange tongen zijn perfecte gereedschappen om deze lekkere traktaties te krijgen!"
        }
      },
      {
        question: {
          en: "What do bats eat when they hunt at night?",
          es: "¿Qué comen los murciélagos cuando cazan de noche?",
          de: "Was fressen Fledermäuse, wenn sie nachts jagen?",
          nl: "Wat eten vleermuizen als ze 's nachts jagen?"
        },
        options: [
          { en: "Flying insects like mosquitoes", es: "Insectos voladores como mosquitos", de: "Fliegende Insekten wie Mücken", nl: "Vliegende insecten zoals muggen" },
          { en: "Rocks and pebbles", es: "Rocas y guijarros", de: "Steine und Kiesel", nl: "Stenen en kiezels" },
          { en: "Tree branches", es: "Ramas de árboles", de: "Baumäste", nl: "Boomtakken" },
          { en: "Moonlight", es: "Luz de luna", de: "Mondlicht", nl: "Maanlicht" }
        ],
        correct: 0,
        explanation: {
          en: "Most bats are amazing bug catchers! They use echolocation (like natural radar) to find and catch flying insects like mosquitoes, moths, and beetles in complete darkness!",
          es: "¡La mayoría de los murciélagos son cazadores de insectos increíbles! Usan ecolocalización (como radar natural) para encontrar y atrapar insectos voladores como mosquitos, polillas y escarabajos en completa oscuridad!",
          de: "Die meisten Fledermäuse sind erstaunliche Insektenfänger! Sie nutzen Echolokation (wie natürliches Radar), um fliegende Insekten wie Mücken, Motten und Käfer in völliger Dunkelheit zu finden und zu fangen!",
          nl: "De meeste vleermuizen zijn geweldige insectenvanger! Ze gebruiken echolocatie (zoals natuurlijke radar) om vliegende insecten zoals muggen, motten en kevers in complete duisternis te vinden en te vangen!"
        }
      },
      {
        question: {
          en: "What do anteaters use to catch their food?",
          es: "¿Qué usan los osos hormigueros para atrapar su comida?",
          de: "Was benutzen Ameisenbären, um ihr Futter zu fangen?",
          nl: "Wat gebruiken miereneters om hun voedsel te vangen?"
        },
        options: [
          { en: "Long sticky tongue", es: "Lengua larga y pegajosa", de: "Lange klebrige Zunge", nl: "Lange plakkerige tong" },
          { en: "Sharp teeth", es: "Dientes afilados", de: "Scharfe Zähne", nl: "Scherpe tanden" },
          { en: "Fishing net", es: "Red de pescar", de: "Fischnetz", nl: "Visnet" },
          { en: "Magic powers", es: "Poderes mágicos", de: "Magische Kräfte", nl: "Magische krachten" }
        ],
        correct: 0,
        explanation: {
          en: "Anteaters have incredibly long, sticky tongues that can stretch up to 2 feet! They stick their tongue deep into ant hills and termite mounds to slurp up thousands of ants and termites every day!",
          es: "¡Los osos hormigueros tienen lenguas increíblemente largas y pegajosas que pueden estirarse hasta 60 centímetros! ¡Meten su lengua profundamente en hormigueros y termiteros para sorber miles de hormigas y termitas todos los días!",
          de: "Ameisenbären haben unglaublich lange, klebrige Zungen, die sich bis zu 60 cm dehnen können! Sie stecken ihre Zunge tief in Ameisenhügel und Termitenhügel, um jeden Tag Tausende von Ameisen und Termiten aufzuschlürfen!",
          nl: "Miereneters hebben ongelooflijk lange, plakkerige tongen die tot 60 centimeter kunnen uitrekken! Ze steken hun tong diep in mierenheuvels en termieten nesten om elke dag duizenden mieren en termieten op te slurpen!"
        }
      },
      {
        question: {
          en: "What do hummingbirds drink from flowers?",
          es: "¿Qué beben los colibríes de las flores?",
          de: "Was trinken Kolibris aus Blumen?",
          nl: "Wat drinken kolibries uit bloemen?"
        },
        options: [
          { en: "Sweet nectar", es: "Néctar dulce", de: "Süßer Nektar", nl: "Zoete nectar" },
          { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
          { en: "Milk", es: "Leche", de: "Milch", nl: "Melk" },
          { en: "Juice", es: "Jugo", de: "Saft", nl: "Sap" }
        ],
        correct: 0,
        explanation: {
          en: "Hummingbirds have special long beaks and tongues perfect for reaching deep into flowers to drink sweet nectar. They're like tiny flying sugar-lovers who help flowers by spreading pollen!",
          es: "Los colibríes tienen picos especiales largos y lenguas perfectas para llegar profundamente en las flores para beber néctar dulce. ¡Son como pequeños amantes del azúcar voladores que ayudan a las flores esparciendo polen!",
          de: "Kolibris haben spezielle lange Schnäbel und Zungen, die perfekt sind, um tief in Blumen zu reichen und süßen Nektar zu trinken. Sie sind wie winzige fliegende Zuckerliebhaber, die Blumen helfen, indem sie Pollen verbreiten!",
          nl: "Kolibries hebben speciale lange snavels en tongen die perfect zijn om diep in bloemen te reiken om zoete nectar te drinken. Ze zijn als kleine vliegende suikerliefhebbers die bloemen helpen door stuifmeel te verspreiden!"
        }
      },
      {
        question: {
          en: "What do sea turtles like to eat in the ocean?",
          es: "¿Qué les gusta comer a las tortugas marinas en el océano?",
          de: "Was fressen Meeresschildkröten gerne im Ozean?",
          nl: "Wat eten zeeschildpadden graag in de oceaan?"
        },
        options: [
          { en: "Jellyfish and sea grass", es: "Medusas y algas marinas", de: "Quallen und Seegras", nl: "Kwallen en zeegras" },
          { en: "Plastic bags", es: "Bolsas de plástico", de: "Plastikbeutel", nl: "Plastic zakken" },
          { en: "Sand", es: "Arena", de: "Sand", nl: "Zand" },
          { en: "Boats", es: "Barcos", de: "Boote", nl: "Boten" }
        ],
        correct: 0,
        explanation: {
          en: "Sea turtles love to munch on jellyfish, sea grass, algae, and sea sponges! Different turtle species prefer different foods - some are like underwater lawn mowers eating plants, while others hunt jellyfish!",
          es: "¡A las tortugas marinas les encanta masticar medusas, algas marinas, algas y esponjas marinas! Diferentes especies de tortugas prefieren diferentes alimentos: algunas son como cortadoras de césped subacuáticas comiendo plantas, ¡mientras otras cazan medusas!",
          de: "Meeresschildkröten lieben es, Quallen, Seegras, Algen und Meeresschwämme zu knabbern! Verschiedene Schildkrötenarten bevorzugen verschiedene Nahrung - einige sind wie Unterwasser-Rasenmäher, die Pflanzen fressen, während andere Quallen jagen!",
          nl: "Zeeschildpadden houden ervan om te kauwen op kwallen, zeegras, algen en zeesponzen! Verschillende schildpaddensoorten hebben verschillende voedsel voorkeuren - sommige zijn als onderwatergazonmaaiers die planten eten, terwijl anderen kwallen jagen!"
        }
      },
      {
        question: {
          en: "What do baby spiders eat when they first hatch?",
          es: "¿Qué comen las arañas bebé cuando salen del cascarón?",
          de: "Was fressen Spinnenbaybys, wenn sie schlüpfen?",
          nl: "Wat eten baby spinnen als ze net uit het ei komen?"
        },
        options: [
          { en: "Tiny insects and their siblings", es: "Insectos diminutos y sus hermanos", de: "Winzige Insekten und ihre Geschwister", nl: "Kleine insectjes en hun broertjes en zusjes" },
          { en: "Flower petals", es: "Pétalos de flores", de: "Blütenblätter", nl: "Bloemblaadjes" },
          { en: "Bread crumbs", es: "Migas de pan", de: "Brotkrümel", nl: "Broodkruimels" },
          { en: "Nothing for weeks", es: "Nada por semanas", de: "Wochenlang nichts", nl: "Weken niets" }
        ],
        correct: 0,
        explanation: {
          en: "Baby spiders eat tiny insects, mites, and sometimes even their own siblings! They start hunting right away with their natural spider instincts, catching prey much smaller than what adult spiders eat!",
          es: "¡Las arañas bebé comen insectos diminutos, ácaros, y a veces incluso sus propios hermanos! Empiezan a cazar inmediatamente con sus instintos naturales de araña, ¡atrapando presas mucho más pequeñas que las que comen las arañas adultas!",
          de: "Spinnenbaybys fressen winzige Insekten, Milben und manchmal sogar ihre eigenen Geschwister! Sie beginnen sofort mit der Jagd mit ihren natürlichen Spinneninstinkten und fangen Beute, die viel kleiner ist als das, was erwachsene Spinnen fressen!",
          nl: "Baby spinnen eten kleine insectjes, mijten, en soms zelfs hun eigen broertjes en zusjes! Ze beginnen meteen met jagen met hun natuurlijke spininstincten, en vangen prooi die veel kleiner is dan wat volwassen spinnen eten!"
        }
      },
      {
        question: {
          en: "What do peacocks eat to stay healthy?",
          es: "¿Qué comen los pavos reales para mantenerse saludables?",
          de: "Was fressen Pfauen, um gesund zu bleiben?",
          nl: "Wat eten pauwen om gezond te blijven?"
        },
        options: [
          { en: "Seeds, insects, and small creatures", es: "Semillas, insectos y criaturas pequeñas", de: "Samen, Insekten und kleine Kreaturen", nl: "Zaden, insecten en kleine diertjes" },
          { en: "Only colorful flowers", es: "Solo flores coloridas", de: "Nur bunte Blumen", nl: "Alleen kleurrijke bloemen" },
          { en: "Gold coins", es: "Monedas de oro", de: "Goldmünzen", nl: "Gouden munten" },
          { en: "Rainbow dust", es: "Polvo de arcoíris", de: "Regenbogenstaub", nl: "Regenboogstof" }
        ],
        correct: 0,
        explanation: {
          en: "Peacocks eat a variety of foods including seeds, berries, insects, small reptiles, and amphibians. They're omnivores that forage on the ground, using their sharp eyes to spot food and their strong beaks to catch it!",
          es: "Los pavos reales comen una variedad de alimentos incluyendo semillas, bayas, insectos, reptiles pequeños y anfibios. ¡Son omnívoros que buscan comida en el suelo, usando sus ojos agudos para detectar alimento y sus picos fuertes para atraparlo!",
          de: "Pfauen fressen eine Vielzahl von Nahrungsmitteln, darunter Samen, Beeren, Insekten, kleine Reptilien und Amphibien. Sie sind Allesfresser, die am Boden nach Nahrung suchen und ihre scharfen Augen nutzen, um Futter zu entdecken und ihre starken Schnäbel, um es zu fangen!",
          nl: "Pauwen eten verschillende soorten voedsel waaronder zaden, bessen, insecten, kleine reptielen en amfibieën. Ze zijn omnivoren die op de grond foerageren, hun scherpe ogen gebruiken om voedsel te zien en hun sterke snavels om het te vangen!"
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('warm-up/animals', level3);
  }
})();