(function() {
    const level9 = {
        name: {
            en: "Dinosaur World",
            es: "Mundo de Dinosaurios",
            de: "Dinosaurier-Welt",
            nl: "Dinosauruswereld"
        },
        questions: [
            {
                question: {
                    en: "What was the climate like during dinosaur times?",
                    es: "¿Cómo era el clima durante los tiempos de dinosaurios?",
                    de: "Wie war das Klima zur Dinosaurier-Zeit?",
                    nl: "Hoe was het klimaat tijdens de dinosaurustijd?"
                },
                options: [
                    { en: "Much warmer and more humid than today", es: "Mucho más cálido y húmedo que hoy", de: "Viel wärmer und feuchter als heute", nl: "Veel warmer en vochtiger dan vandaag" },
                    { en: "Exactly the same as today", es: "Exactamente igual que hoy", de: "Genau wie heute", nl: "Precies hetzelfde als vandaag" },
                    { en: "Much colder with lots of ice", es: "Mucho más frío con mucho hielo", de: "Viel kälter mit viel Eis", nl: "Veel kouder met veel ijs" },
                    { en: "Always raining everywhere", es: "Siempre lloviendo en todas partes", de: "Überall immer regnend", nl: "Altijd overal regenend" }
                ],
                correct: 0,
                explanation: {
                    en: "During dinosaur times, Earth was like a giant greenhouse! It was much warmer and more humid than today, with no ice caps at the poles. There were lush tropical forests even in places that are cold today, like Alaska and Antarctica.",
                    es: "¡Durante los tiempos de dinosaurios, la Tierra era como un invernadero gigante! Era mucho más cálida y húmeda que hoy, sin capas de hielo en los polos. Había bosques tropicales exuberantes incluso en lugares que hoy son fríos, como Alaska y la Antártida.",
                    de: "Während der Dinosaurierzeit war die Erde wie ein riesiges Gewächshaus! Sie war viel wärmer und feuchter als heute, ohne Eiskappen an den Polen. Es gab üppige tropische Wälder sogar an Orten, die heute kalt sind, wie Alaska und die Antarktis.",
                    nl: "Tijdens de dinosaurustijd was de aarde als een gigantische broeikas! Het was veel warmer en vochtiger dan vandaag, zonder ijskappen op de polen. Er waren weelderige tropische bossen zelfs op plaatsen die vandaag koud zijn, zoals Alaska en Antarctica."
                }
            },
            {
                question: {
                    en: "What plants were common during the dinosaur era?",
                    es: "¿Qué plantas eran comunes durante la era de los dinosaurios?",
                    de: "Welche Pflanzen waren während der Dinosaurier-Ära häufig?",
                    nl: "Welke planten waren gewoon tijdens het dinosaurustijdperk?"
                },
                options: [
                    { en: "Ferns, cycads, and conifer trees", es: "Helechos, cícadas y árboles coníferos", de: "Farne, Palmfarne und Nadelbäume", nl: "Varens, cycaden en naaldbomen" },
                    { en: "Grass and flowers like today", es: "Hierba y flores como hoy", de: "Gras und Blumen wie heute", nl: "Gras en bloemen zoals vandaag" },
                    { en: "Only cactus plants", es: "Solo plantas de cactus", de: "Nur Kaktuspflanzen", nl: "Alleen cactusplanten" },
                    { en: "No plants at all", es: "No había plantas", de: "Gar keine Pflanzen", nl: "Helemaal geen planten" }
                ],
                correct: 0,
                explanation: {
                    en: "The dinosaur world looked very different from today! Giant ferns as tall as trees, strange cycads that looked like palm trees, and huge conifer forests covered the land. Grass and colorful flowers didn't exist yet - they evolved later!",
                    es: "¡El mundo de los dinosaurios se veía muy diferente de hoy! Helechos gigantes tan altos como árboles, cícadas extrañas que parecían palmeras, y enormes bosques de coníferas cubrían la tierra. ¡El pasto y las flores coloridas aún no existían - evolucionaron después!",
                    de: "Die Dinosaurierwelt sah ganz anders aus als heute! Riesige Farne so hoch wie Bäume, seltsame Palmfarne, die wie Palmen aussahen, und riesige Nadelwälder bedeckten das Land. Gras und bunte Blumen existierten noch nicht - sie entwickelten sich später!",
                    nl: "De dinosauruswereld zag er heel anders uit dan vandaag! Reusachtige varens zo hoog als bomen, vreemde cycaden die leken op palmbomen, en enorme naaldbossen bedekten het land. Gras en kleurrijke bloemen bestonden nog niet - ze evolueerden later!"
                }
            },
            {
                question: {
                    en: "Were there ice caps at the North and South Poles during dinosaur times?",
                    es: "¿Había capas de hielo en los polos Norte y Sur durante los tiempos de dinosaurios?",
                    de: "Gab es Eiskappen an den Nord- und Südpolen zur Dinosaurier-Zeit?",
                    nl: "Waren er ijskappen op de Noord- en Zuidpool tijdens de dinosaurustijd?"
                },
                options: [
                    { en: "No, it was too warm for ice caps", es: "No, hacía demasiado calor para capas de hielo", de: "Nein, es war zu warm für Eiskappen", nl: "Nee, het was te warm voor ijskappen" },
                    { en: "Yes, just like today", es: "Sí, igual que hoy", de: "Ja, genau wie heute", nl: "Ja, net als vandaag" },
                    { en: "Only at the North Pole", es: "Solo en el Polo Norte", de: "Nur am Nordpol", nl: "Alleen op de Noordpool" },
                    { en: "Only at the South Pole", es: "Solo en el Polo Sur", de: "Nur am Südpol", nl: "Alleen op de Zuidpool" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What was different about sea levels during dinosaur times?",
                    es: "¿Qué había diferente sobre los niveles del mar durante los tiempos de dinosaurios?",
                    de: "Was war anders an den Meerespiegeln zur Dinosaurier-Zeit?",
                    nl: "Wat was er anders aan de zeeniveaus tijdens de dinosaurustijd?"
                },
                options: [
                    { en: "They were much higher than today", es: "Eran mucho más altos que hoy", de: "Sie waren viel höher als heute", nl: "Ze waren veel hoger dan vandaag" },
                    { en: "They were much lower than today", es: "Eran mucho más bajos que hoy", de: "Sie waren viel niedriger als heute", nl: "Ze waren veel lager dan vandaag" },
                    { en: "Exactly the same as today", es: "Exactamente iguales que hoy", de: "Genau wie heute", nl: "Precies hetzelfde als vandaag" },
                    { en: "There were no oceans", es: "No había océanos", de: "Es gab keine Ozeane", nl: "Er waren geen oceanen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What other animals lived alongside dinosaurs?",
                    es: "¿Qué otros animales vivieron junto a los dinosaurios?",
                    de: "Welche anderen Tiere lebten neben den Dinosauriern?",
                    nl: "Welke andere dieren leefden naast de dinosaurussen?"
                },
                options: [
                    { en: "Crocodiles, turtles, and small mammals", es: "Cocodrilos, tortugas y mamíferos pequeños", de: "Krokodile, Schildkröten und kleine Säugetiere", nl: "Krokodillen, schildpadden en kleine zoogdieren" },
                    { en: "Only dinosaurs existed", es: "Solo existían dinosaurios", de: "Nur Dinosaurier existierten", nl: "Alleen dinosaurussen bestonden" },
                    { en: "Elephants and lions", es: "Elefantes y leones", de: "Elefanten und Löwen", nl: "Olifanten en leeuwen" },
                    { en: "Humans and dinosaurs together", es: "Humanos y dinosaurios juntos", de: "Menschen und Dinosaurier zusammen", nl: "Mensen en dinosaurussen samen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How were the continents arranged during dinosaur times?",
                    es: "¿Cómo estaban arreglados los continentes durante los tiempos de dinosaurios?",
                    de: "Wie waren die Kontinente zur Dinosaurier-Zeit angeordnet?",
                    nl: "Hoe waren de continenten gerangschikt tijdens de dinosaurustijd?"
                },
                options: [
                    { en: "They were closer together than today", es: "Estaban más cerca que hoy", de: "Sie waren näher zusammen als heute", nl: "Ze waren dichter bij elkaar dan vandaag" },
                    { en: "Exactly the same as today", es: "Exactamente igual que hoy", de: "Genau wie heute", nl: "Precies hetzelfde als vandaag" },
                    { en: "There was only one giant continent", es: "Solo había un continente gigante", de: "Es gab nur einen riesigen Kontinent", nl: "Er was slechts één reusachtig continent" },
                    { en: "All continents were underwater", es: "Todos los continentes estaban bajo el agua", de: "Alle Kontinente waren unter Wasser", nl: "Alle continenten waren onder water" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What was the air like during dinosaur times?",
                    es: "¿Cómo era el aire durante los tiempos de dinosaurios?",
                    de: "Wie war die Luft zur Dinosaurier-Zeit?",
                    nl: "Hoe was de lucht tijdens de dinosaurustijd?"
                },
                options: [
                    { en: "It had more oxygen than today", es: "Tenía más oxígeno que hoy", de: "Es hatte mehr Sauerstoff als heute", nl: "Het had meer zuurstof dan vandaag" },
                    { en: "It had less oxygen than today", es: "Tenía menos oxígeno que hoy", de: "Es hatte weniger Sauerstoff als heute", nl: "Het had minder zuurstof dan vandaag" },
                    { en: "Exactly the same as today", es: "Exactamente igual que hoy", de: "Genau wie heute", nl: "Precies hetzelfde als vandaag" },
                    { en: "There was no air to breathe", es: "No había aire para respirar", de: "Es gab keine Luft zum Atmen", nl: "Er was geen lucht om te ademen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What were forests like in the dinosaur world?",
                    es: "¿Cómo eran los bosques en el mundo de los dinosaurios?",
                    de: "Wie waren die Wälder in der Dinosaurier-Welt?",
                    nl: "Hoe waren de bossen in de dinosauruswereld?"
                },
                options: [
                    { en: "Dense jungles with giant ferns and tall trees", es: "Selvas densas con helechos gigantes y árboles altos", de: "Dichte Dschungel mit riesigen Farnen und hohen Bäumen", nl: "Dichte jungles met reusachtige varens en hoge bomen" },
                    { en: "Just like modern forests", es: "Igual que los bosques modernos", de: "Genau wie moderne Wälder", nl: "Net als moderne bossen" },
                    { en: "Only small bushes", es: "Solo arbustos pequeños", de: "Nur kleine Büsche", nl: "Alleen kleine struiken" },
                    { en: "No trees or plants", es: "Sin árboles ni plantas", de: "Keine Bäume oder Pflanzen", nl: "Geen bomen of planten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What kind of insects lived during dinosaur times?",
                    es: "¿Qué tipo de insectos vivían durante los tiempos de dinosaurios?",
                    de: "Welche Art von Insekten lebten zur Dinosaurier-Zeit?",
                    nl: "Welke soort insecten leefden tijdens de dinosaurustijd?"
                },
                options: [
                    { en: "Giant dragonflies and beetles much larger than today", es: "Libélulas y escarabajos gigantes mucho más grandes que hoy", de: "Riesige Libellen und Käfer, viel größer als heute", nl: "Reusachtige libellen en kevers veel groter dan vandaag" },
                    { en: "The same size insects as today", es: "Insectos del mismo tamaño que hoy", de: "Insekten gleicher Größe wie heute", nl: "Insecten van dezelfde grootte als vandaag" },
                    { en: "Much smaller insects than today", es: "Insectos mucho más pequeños que hoy", de: "Viel kleinere Insekten als heute", nl: "Veel kleinere insecten dan vandaag" },
                    { en: "No insects existed yet", es: "No existían insectos aún", de: "Insekten existierten noch nicht", nl: "Insecten bestonden nog niet" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did volcanic activity affect the dinosaur world?",
                    es: "¿Cómo afectó la actividad volcánica al mundo de los dinosaurios?",
                    de: "Wie beeinflusste vulkanische Aktivität die Dinosaurier-Welt?",
                    nl: "Hoe beïnvloedde vulkanische activiteit de dinosauruswereld?"
                },
                options: [
                    { en: "It helped keep the world warm and created new land", es: "Ayudó a mantener el mundo cálido y creó nueva tierra", de: "Es half, die Welt warm zu halten und schuf neues Land", nl: "Het hielp de wereld warm te houden en creëerde nieuw land" },
                    { en: "It made everything cold and icy", es: "Hizo todo frío y helado", de: "Es machte alles kalt und eisig", nl: "Het maakte alles koud en ijzig" },
                    { en: "There were no volcanoes then", es: "No había volcanes entonces", de: "Es gab damals keine Vulkane", nl: "Er waren toen geen vulkanen" },
                    { en: "Volcanoes only existed in space", es: "Los volcanes solo existían en el espacio", de: "Vulkane existierten nur im Weltraum", nl: "Vulkanen bestonden alleen in de ruimte" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What were rivers and lakes like in the dinosaur world?",
                    es: "¿Cómo eran los ríos y lagos en el mundo de los dinosaurios?",
                    de: "Wie waren Flüsse und Seen in der Dinosaurier-Welt?",
                    nl: "Hoe waren rivieren en meren in de dinosauruswereld?"
                },
                options: [
                    { en: "Warm and full of life, with many different water creatures", es: "Cálidos y llenos de vida, con muchas criaturas acuáticas diferentes", de: "Warm und voller Leben, mit vielen verschiedenen Wasserkreaturen", nl: "Warm en vol leven, met veel verschillende waterdieren" },
                    { en: "Frozen solid all year", es: "Congelados sólido todo el año", de: "Das ganze Jahr über fest gefroren", nl: "Het hele jaar bevroren" },
                    { en: "Exactly like today's rivers", es: "Exactamente como los ríos de hoy", de: "Genau wie die heutigen Flüsse", nl: "Precies zoals de rivieren van vandaag" },
                    { en: "There was no fresh water", es: "No había agua dulce", de: "Es gab kein Süßwasser", nl: "Er was geen zoet water" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What happened to the seasons during dinosaur times?",
                    es: "¿Qué pasó con las estaciones durante los tiempos de dinosaurios?",
                    de: "Was geschah mit den Jahreszeiten zur Dinosaurier-Zeit?",
                    nl: "Wat gebeurde er met de seizoenen tijdens de dinosaurustijd?"
                },
                options: [
                    { en: "There were fewer differences between seasons", es: "Había menos diferencias entre las estaciones", de: "Es gab weniger Unterschiede zwischen den Jahreszeiten", nl: "Er waren minder verschillen tussen de seizoenen" },
                    { en: "Seasons changed every day", es: "Las estaciones cambiaban todos los días", de: "Jahreszeiten änderten sich täglich", nl: "Seizoenen veranderden elke dag" },
                    { en: "There were no seasons at all", es: "No había estaciones en absoluto", de: "Es gab überhaupt keine Jahreszeiten", nl: "Er waren helemaal geen seizoenen" },
                    { en: "Exactly the same seasons as today", es: "Exactamente las mismas estaciones que hoy", de: "Genau die gleichen Jahreszeiten wie heute", nl: "Precies dezelfde seizoenen als vandaag" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did small mammals live in the dinosaur world?",
                    es: "¿Cómo vivían los mamíferos pequeños en el mundo de los dinosaurios?",
                    de: "Wie lebten kleine Säugetiere in der Dinosaurier-Welt?",
                    nl: "Hoe leefden kleine zoogdieren in de dinosauruswereld?"
                },
                options: [
                    { en: "They hid in burrows and were active at night", es: "Se escondían en madrigueras y eran activos de noche", de: "Sie versteckten sich in Höhlen und waren nachts aktiv", nl: "Ze verstopten zich in holen en waren 's nachts actief" },
                    { en: "They ruled over the dinosaurs", es: "Gobernaron sobre los dinosaurios", de: "Sie herrschten über die Dinosaurier", nl: "Ze heersten over de dinosaurussen" },
                    { en: "They were as big as dinosaurs", es: "Eran tan grandes como dinosaurios", de: "Sie waren so groß wie Dinosaurier", nl: "Ze waren zo groot als dinosaurussen" },
                    { en: "They didn't exist yet", es: "No existían aún", de: "Sie existierten noch nicht", nl: "Ze bestonden nog niet" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What were the oceans like during dinosaur times?",
                    es: "¿Cómo eran los océanos durante los tiempos de dinosaurios?",
                    de: "Wie waren die Ozeane zur Dinosaurier-Zeit?",
                    nl: "Hoe waren de oceanen tijdens de dinosaurustijd?"
                },
                options: [
                    { en: "Warm and shallow, covering more land than today", es: "Cálidos y poco profundos, cubriendo más tierra que hoy", de: "Warm und flach, bedeckten mehr Land als heute", nl: "Warm en ondiep, bedekkend meer land dan vandaag" },
                    { en: "Frozen like the Arctic today", es: "Congelados como el Ártico hoy", de: "Gefroren wie die Arktis heute", nl: "Bevroren zoals de Arctis vandaag" },
                    { en: "Exactly like today's oceans", es: "Exactamente como los océanos de hoy", de: "Genau wie die heutigen Ozeane", nl: "Precies zoals de oceanen van vandaag" },
                    { en: "They didn't exist", es: "No existían", de: "Sie existierten nicht", nl: "Ze bestonden niet" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What kinds of sounds filled the dinosaur world?",
                    es: "¿Qué tipos de sonidos llenaban el mundo de los dinosaurios?",
                    de: "Welche Arten von Geräuschen erfüllten die Dinosaurier-Welt?",
                    nl: "Welke soorten geluiden vulden de dinosauruswereld?"
                },
                options: [
                    { en: "Dinosaur calls, insect buzzing, and rustling plants", es: "Llamadas de dinosaurios, zumbido de insectos y plantas susurrantes", de: "Dinosaurier-Rufe, Insektensummen und raschelnde Pflanzen", nl: "Dinosaurusroepen, insectengezoen en ritselende planten" },
                    { en: "Complete silence everywhere", es: "Silencio completo en todas partes", de: "Völlige Stille überall", nl: "Complete stilte overal" },
                    { en: "The same sounds as today", es: "Los mismos sonidos que hoy", de: "Die gleichen Geräusche wie heute", nl: "Dezelfde geluiden als vandaag" },
                    { en: "Only music playing", es: "Solo música sonando", de: "Nur Musik spielend", nl: "Alleen muziek spelend" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did the position of the sun affect the dinosaur world?",
                    es: "¿Cómo afectó la posición del sol al mundo de los dinosaurios?",
                    de: "Wie beeinflusste die Position der Sonne die Dinosaurier-Welt?",
                    nl: "Hoe beïnvloedde de positie van de zon de dinosauruswereld?"
                },
                options: [
                    { en: "The sun provided more warmth, making the whole planet warmer", es: "El sol proporcionó más calor, haciendo todo el planeta más cálido", de: "Die Sonne gab mehr Wärme ab und machte den ganzen Planeten wärmer", nl: "De zon gaf meer warmte, waardoor de hele planeet warmer werd" },
                    { en: "The sun was much cooler then", es: "El sol estaba mucho más frío entonces", de: "Die Sonne war damals viel kühler", nl: "De zon was toen veel koeler" },
                    { en: "There were two suns in the sky", es: "Había dos soles en el cielo", de: "Es gab zwei Sonnen am Himmel", nl: "Er waren twee zonnen aan de hemel" },
                    { en: "The sun didn't exist yet", es: "El sol no existía aún", de: "Die Sonne existierte noch nicht", nl: "De zon bestond nog niet" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What was special about plant life during the Cretaceous period?",
                    es: "¿Qué tenía especial la vida vegetal durante el período Cretácico?",
                    de: "Was war besonders an der Pflanzenwelt während der Kreidezeit?",
                    nl: "Wat was bijzonder aan het plantenleven tijdens de Krijttijd?"
                },
                options: [
                    { en: "Flowering plants appeared for the first time", es: "Las plantas con flores aparecieron por primera vez", de: "Blühende Pflanzen erschienen zum ersten Mal", nl: "Bloeiende planten verschenen voor het eerst" },
                    { en: "All plants were the same as today", es: "Todas las plantas eran iguales que hoy", de: "Alle Pflanzen waren wie heute", nl: "Alle planten waren hetzelfde als vandaag" },
                    { en: "There were no plants", es: "No había plantas", de: "Es gab keine Pflanzen", nl: "Er waren geen planten" },
                    { en: "Plants could walk around", es: "Las plantas podían caminar", de: "Pflanzen konnten herumlaufen", nl: "Planten konden rondlopen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did mountains and valleys form during dinosaur times?",
                    es: "¿Cómo se formaron las montañas y valles durante los tiempos de dinosaurios?",
                    de: "Wie entstanden Berge und Täler zur Dinosaurier-Zeit?",
                    nl: "Hoe vormden zich bergen en dalen tijdens de dinosaurustijd?"
                },
                options: [
                    { en: "Slowly through volcanic activity and moving continents", es: "Lentamente a través de actividad volcánica y continentes en movimiento", de: "Langsam durch vulkanische Aktivität und bewegende Kontinente", nl: "Langzaam door vulkanische activiteit en bewegende continenten" },
                    { en: "They appeared overnight", es: "Aparecieron de la noche a la mañana", de: "Sie erschienen über Nacht", nl: "Ze verschenen van de ene dag op de andere" },
                    { en: "Dinosaurs built them", es: "Los dinosaurios los construyeron", de: "Dinosaurier bauten sie", nl: "Dinosaurussen bouwden ze" },
                    { en: "They were always there", es: "Siempre estuvieron ahí", de: "Sie waren immer da", nl: "Ze waren er altijd" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What role did CO2 play in the dinosaur world's climate?",
                    es: "¿Qué papel jugó el CO2 en el clima del mundo de los dinosaurios?",
                    de: "Welche Rolle spielte CO2 im Klima der Dinosaurier-Welt?",
                    nl: "Welke rol speelde CO2 in het klimaat van de dinosauruswereld?"
                },
                options: [
                    { en: "Higher CO2 levels helped trap heat and keep the world warm", es: "Niveles más altos de CO2 ayudaron a atrapar calor y mantener el mundo cálido", de: "Höhere CO2-Werte halfen, Wärme zu speichern und die Welt warm zu halten", nl: "Hogere CO2-niveaus hielpen warmte vast te houden en de wereld warm te houden" },
                    { en: "There was no CO2 in the atmosphere", es: "No había CO2 en la atmósfera", de: "Es gab kein CO2 in der Atmosphäre", nl: "Er was geen CO2 in de atmosfeer" },
                    { en: "CO2 made everything freeze", es: "El CO2 hizo que todo se congelara", de: "CO2 ließ alles einfrieren", nl: "CO2 liet alles bevriezen" },
                    { en: "CO2 levels were exactly like today", es: "Los niveles de CO2 eran exactamente como hoy", de: "CO2-Werte waren genau wie heute", nl: "CO2-niveaus waren precies zoals vandaag" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did the first birds fit into the dinosaur world?",
                    es: "¿Cómo encajaron las primeras aves en el mundo de los dinosaurios?",
                    de: "Wie passten die ersten Vögel in die Dinosaurier-Welt?",
                    nl: "Hoe pasten de eerste vogels in de dinosauruswereld?"
                },
                options: [
                    { en: "They evolved from small feathered dinosaurs and shared the skies with pterosaurs", es: "Evolucionaron de pequeños dinosaurios con plumas y compartieron los cielos con pterosaurios", de: "Sie entwickelten sich aus kleinen gefiederten Dinosauriern und teilten den Himmel mit Pterosauriern", nl: "Ze evolueerden uit kleine gevederde dinosaurussen en deelden de luchten met pterosauriërs" },
                    { en: "Birds existed before dinosaurs", es: "Las aves existieron antes que los dinosaurios", de: "Vögel existierten vor Dinosauriern", nl: "Vogels bestonden voor dinosaurussen" },
                    { en: "There were no birds during dinosaur times", es: "No había aves durante los tiempos de dinosaurios", de: "Es gab keine Vögel zur Dinosaurier-Zeit", nl: "Er waren geen vogels tijdens de dinosaurustijd" },
                    { en: "Birds came from outer space", es: "Las aves vinieron del espacio exterior", de: "Vögel kamen aus dem Weltraum", nl: "Vogels kwamen uit de ruimte" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What was the role of decomposers in the dinosaur ecosystem?",
                    es: "¿Cuál era el papel de los descomponedores en el ecosistema de dinosaurios?",
                    de: "Was war die Rolle der Zersetzer im Dinosaurier-Ökosystem?",
                    nl: "Wat was de rol van ontbinders in het dinosaurusecosysteem?"
                },
                options: [
                    { en: "Bacteria and fungi broke down dead plants and animals", es: "Bacterias y hongos descompusieron plantas y animales muertos", de: "Bakterien und Pilze zersetzten tote Pflanzen und Tiere", nl: "Bacteriën en schimmels braken dode planten en dieren af" },
                    { en: "There were no decomposers", es: "No había descomponedores", de: "Es gab keine Zersetzer", nl: "Er waren geen ontbinders" },
                    { en: "Only dinosaurs cleaned up dead things", es: "Solo los dinosaurios limpiaban cosas muertas", de: "Nur Dinosaurier räumten tote Dinge auf", nl: "Alleen dinosaurussen ruimden dode dingen op" },
                    { en: "Dead things never decomposed", es: "Las cosas muertas nunca se descompusieron", de: "Tote Dinge zersetzten sich nie", nl: "Dode dingen vergingen nooit" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did day and night cycles affect dinosaur behavior?",
                    es: "¿Cómo afectaron los ciclos de día y noche al comportamiento de los dinosaurios?",
                    de: "Wie beeinflussten Tag- und Nachtzyklen das Dinosaurier-Verhalten?",
                    nl: "Hoe beïnvloedden dag- en nachtcycli het gedrag van dinosaurussen?"
                },
                options: [
                    { en: "Some were active during the day, others at night", es: "Algunos eran activos durante el día, otros por la noche", de: "Manche waren tagsüber aktiv, andere nachts", nl: "Sommige waren overdag actief, andere 's nachts" },
                    { en: "All dinosaurs slept all the time", es: "Todos los dinosaurios durmieron todo el tiempo", de: "Alle Dinosaurier schliefen die ganze Zeit", nl: "Alle dinosaurussen sliepen de hele tijd" },
                    { en: "There was no day or night", es: "No había día ni noche", de: "Es gab keinen Tag oder Nacht", nl: "Er was geen dag of nacht" },
                    { en: "All dinosaurs were active 24 hours a day", es: "Todos los dinosaurios estaban activos 24 horas al día", de: "Alle Dinosaurier waren 24 Stunden am Tag aktiv", nl: "Alle dinosaurussen waren 24 uur per dag actief" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What was the typical food chain like in dinosaur ecosystems?",
                    es: "¿Cómo era típicamente la cadena alimentaria en los ecosistemas de dinosaurios?",
                    de: "Wie war die typische Nahrungskette in Dinosaurier-Ökosystemen?",
                    nl: "Hoe was de typische voedselketen in dinosaurusecosystemen?"
                },
                options: [
                    { en: "Plants, plant-eaters, meat-eaters, and decomposers", es: "Plantas, herbívoros, carnívoros y descomponedores", de: "Pflanzen, Pflanzenfresser, Fleischfresser und Zersetzer", nl: "Planten, planteneters, vleeseters en ontbinders" },
                    { en: "Only meat-eating dinosaurs", es: "Solo dinosaurios carnívoros", de: "Nur fleischfressende Dinosaurier", nl: "Alleen vleesetende dinosaurussen" },
                    { en: "Only plant-eating dinosaurs", es: "Solo dinosaurios herbívoros", de: "Nur pflanzenfressende Dinosaurier", nl: "Alleen plantenetende dinosaurussen" },
                    { en: "There was no food chain", es: "No había cadena alimentaria", de: "Es gab keine Nahrungskette", nl: "Er was geen voedselketen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did natural disasters affect the dinosaur world?",
                    es: "¿Cómo afectaron los desastres naturales al mundo de los dinosaurios?",
                    de: "Wie beeinflussten Naturkatastrophen die Dinosaurier-Welt?",
                    nl: "Hoe beïnvloedden natuurrampen de dinosauruswereld?"
                },
                options: [
                    { en: "Volcanoes, floods, and droughts shaped the landscape and affected life", es: "Volcanes, inundaciones y sequías formaron el paisaje y afectaron la vida", de: "Vulkane, Überschwemmungen und Dürren formten die Landschaft und beeinflussten das Leben", nl: "Vulkanen, overstromingen en droogtes vormden het landschap en beïnvloedden het leven" },
                    { en: "There were no natural disasters", es: "No había desastres naturales", de: "Es gab keine Naturkatastrophen", nl: "Er waren geen natuurrampen" },
                    { en: "Only earthquakes happened", es: "Solo ocurrieron terremotos", de: "Nur Erdbeben passierten", nl: "Alleen aardbevingen gebeurden" },
                    { en: "Dinosaurs prevented all disasters", es: "Los dinosaurios previnieron todos los desastres", de: "Dinosaurier verhinderten alle Katastrophen", nl: "Dinosaurussen voorkwamen alle rampen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What happened to the dinosaur world during major climate changes?",
                    es: "¿Qué pasó al mundo de los dinosaurios durante cambios climáticos mayores?",
                    de: "Was geschah mit der Dinosaurier-Welt während großer Klimaveränderungen?",
                    nl: "Wat gebeurde er met de dinosauruswereld tijdens grote klimaatveranderingen?"
                },
                options: [
                    { en: "Some species died out while others adapted and evolved", es: "Algunas especies se extinguieron mientras otras se adaptaron y evolucionaron", de: "Manche Arten starben aus, während andere sich anpassten und entwickelten", nl: "Sommige soorten stierven uit terwijl andere zich aanpasten en evolueerden" },
                    { en: "Nothing changed at all", es: "Nada cambió en absoluto", de: "Nichts änderte sich überhaupt", nl: "Er veranderde helemaal niets" },
                    { en: "All dinosaurs became stronger", es: "Todos los dinosaurios se volvieron más fuertes", de: "Alle Dinosaurier wurden stärker", nl: "Alle dinosaurussen werden sterker" },
                    { en: "The climate never changed", es: "El clima nunca cambió", de: "Das Klima änderte sich nie", nl: "Het klimaat veranderde nooit" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did competition for resources work in the dinosaur world?",
                    es: "¿Cómo funcionaba la competencia por recursos en el mundo de los dinosaurios?",
                    de: "Wie funktionierte der Wettbewerb um Ressourcen in der Dinosaurier-Welt?",
                    nl: "Hoe werkte concurrentie om hulpbronnen in de dinosauruswereld?"
                },
                options: [
                    { en: "Different species evolved different strategies to find food and survive", es: "Diferentes especies evolucionaron estrategias diferentes para encontrar comida y sobrevivir", de: "Verschiedene Arten entwickelten verschiedene Strategien, um Nahrung zu finden und zu überleben", nl: "Verschillende soorten evolueerden verschillende strategieën om voedsel te vinden en te overleven" },
                    { en: "All dinosaurs shared everything equally", es: "Todos los dinosaurios compartieron todo igualmente", de: "Alle Dinosaurier teilten alles gleich", nl: "Alle dinosaurussen deelden alles gelijk" },
                    { en: "There was no competition", es: "No había competencia", de: "Es gab keinen Wettbewerb", nl: "Er was geen concurrentie" },
                    { en: "Only the biggest dinosaurs got food", es: "Solo los dinosaurios más grandes conseguían comida", de: "Nur die größten Dinosaurier bekamen Futter", nl: "Alleen de grootste dinosaurussen kregen voedsel" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What was the relationship between predators and prey in the dinosaur world?",
                    es: "¿Cuál era la relación entre depredadores y presas en el mundo de los dinosaurios?",
                    de: "Was war die Beziehung zwischen Raubtieren und Beute in der Dinosaurier-Welt?",
                    nl: "Wat was de relatie tussen roofdieren en prooien in de dinosauruswereld?"
                },
                options: [
                    { en: "A balance that helped both groups evolve better survival skills", es: "Un equilibrio que ayudó a ambos grupos a evolucionar mejores habilidades de supervivencia", de: "Ein Gleichgewicht, das beiden Gruppen half, bessere Überlebensfähigkeiten zu entwickeln", nl: "Een evenwicht dat beide groepen hielp betere overlevingsvaardigheden te evolueren" },
                    { en: "Predators always won", es: "Los depredadores siempre ganaron", de: "Raubtiere gewannen immer", nl: "Roofdieren wonnen altijd" },
                    { en: "Prey animals always won", es: "Los animales presa siempre ganaron", de: "Beutetiere gewannen immer", nl: "Prooidieren wonnen altijd" },
                    { en: "They never interacted", es: "Nunca interactuaron", de: "Sie interagierten nie", nl: "Ze hadden nooit interactie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How did the dinosaur world change over millions of years?",
                    es: "¿Cómo cambió el mundo de los dinosaurios durante millones de años?",
                    de: "Wie veränderte sich die Dinosaurier-Welt über Millionen von Jahren?",
                    nl: "Hoe veranderde de dinosauruswereld gedurende miljoenen jaren?"
                },
                options: [
                    { en: "Continents moved, climates shifted, and new species evolved", es: "Los continentes se movieron, los climas cambiaron y nuevas especies evolucionaron", de: "Kontinente bewegten sich, Klimas veränderten sich und neue Arten entwickelten sich", nl: "Continenten bewogen, klimaten verschoven en nieuwe soorten evolueerden" },
                    { en: "Everything stayed exactly the same", es: "Todo permaneció exactamente igual", de: "Alles blieb genau gleich", nl: "Alles bleef precies hetzelfde" },
                    { en: "Changes happened in just one year", es: "Los cambios ocurrieron en solo un año", de: "Veränderungen passierten in nur einem Jahr", nl: "Veranderingen gebeurden in slechts één jaar" },
                    { en: "The world got smaller", es: "El mundo se hizo más pequeño", de: "Die Welt wurde kleiner", nl: "De wereld werd kleiner" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What can we learn about Earth's future by studying the dinosaur world?",
                    es: "¿Qué podemos aprender sobre el futuro de la Tierra estudiando el mundo de los dinosaurios?",
                    de: "Was können wir über die Zukunft der Erde lernen, indem wir die Dinosaurier-Welt studieren?",
                    nl: "Wat kunnen we over de toekomst van de aarde leren door de dinosauruswereld te bestuderen?"
                },
                options: [
                    { en: "How climate changes and life adapts over long periods", es: "Cómo cambia el clima y la vida se adapta durante períodos largos", de: "Wie sich Klima ändert und Leben sich über lange Zeiträume anpasst", nl: "Hoe klimaat verandert en leven zich aanpast over lange periodes" },
                    { en: "Dinosaurs will come back exactly the same", es: "Los dinosaurios regresarán exactamente iguales", de: "Dinosaurier werden genau gleich zurückkommen", nl: "Dinosaurussen zullen precies hetzelfde terugkomen" },
                    { en: "The Earth will never change again", es: "La Tierra nunca cambiará otra vez", de: "Die Erde wird sich nie wieder ändern", nl: "De aarde zal nooit meer veranderen" },
                    { en: "Nothing useful for the future", es: "Nada útil para el futuro", de: "Nichts Nützliches für die Zukunft", nl: "Niets nuttigs voor de toekomst" }
                ],
                correct: 0,
                explanation: {
                    en: "Studying dinosaurs teaches us how life adapts to major climate changes, how ecosystems evolve over millions of years, and how mass extinction events can reshape the planet. This knowledge helps scientists understand current climate change and predict how life might respond to future environmental challenges.",
                    es: "Estudiar dinosaurios nos enseña cómo la vida se adapta a cambios climáticos importantes, cómo evolucionan los ecosistemas durante millones de años y cómo los eventos de extinción masiva pueden remodelar el planeta. Este conocimiento ayuda a los científicos a entender el cambio climático actual y predecir cómo la vida podría responder a futuros desafíos ambientales.",
                    de: "Das Studium von Dinosauriern lehrt uns, wie sich das Leben an große Klimaveränderungen anpasst, wie sich Ökosysteme über Millionen von Jahren entwickeln und wie Massenaussterben-Ereignisse den Planeten umgestalten können. Dieses Wissen hilft Wissenschaftlern, den aktuellen Klimawandel zu verstehen und vorherzusagen, wie das Leben auf zukünftige Umweltherausforderungen reagieren könnte.",
                    nl: "Het bestuderen van dinosaurussen leert ons hoe leven zich aanpast aan grote klimaatveranderingen, hoe ecosystemen evolueren gedurende miljoenen jaren, en hoe massa-extinctie gebeurtenissen de planeet kunnen hervormen. Deze kennis helpt wetenschappers de huidige klimaatverandering te begrijpen en te voorspellen hoe leven zou kunnen reageren op toekomstige milieu-uitdagingen."
                }
            },
            {
                question: {
                    en: "What did baby dinosaurs eat when they first hatched?",
                    es: "¿Qué comían los bebés dinosaurios cuando salían del huevo?",
                    de: "Was fraßen Baby-Dinosaurier, als sie zuerst schlüpften?",
                    nl: "Wat aten baby dinosaurussen toen ze net uit het ei kwamen?"
                },
                options: [
                    { en: "Small insects and plants", es: "Insectos pequeños y plantas", de: "Kleine Insekten und Pflanzen", nl: "Kleine insecten en planten" },
                    { en: "Large rocks", es: "Rocas grandes", de: "Große Steine", nl: "Grote stenen" },
                    { en: "Ice cream", es: "Helado", de: "Eis", nl: "IJs" },
                    { en: "Metal objects", es: "Objetos de metal", de: "Metallobjekte", nl: "Metalen voorwerpen" }
                ],
                correct: 0,
                explanation: {
                    en: "Baby dinosaurs, called hatchlings, ate small foods that were easy to catch and digest! Even if their parents were giant meat-eaters, babies started with tiny insects, small fish, or soft plant parts. As they grew bigger and stronger, they could eat larger foods like their parents.",
                    es: "Los bebés dinosaurios, llamados crías, comían alimentos pequeños que eran fáciles de atrapar y digerir. Incluso si sus padres eran carnívoros gigantes, los bebés comenzaban con insectos pequeños, peces pequeños o partes blandas de plantas. A medida que crecían y se hacían más fuertes, podían comer alimentos más grandes como sus padres.",
                    de: "Baby-Dinosaurier, genannt Schlüpflinge, fraßen kleine Nahrung, die leicht zu fangen und zu verdauen war! Auch wenn ihre Eltern riesige Fleischfresser waren, begannen Babys mit winzigen Insekten, kleinen Fischen oder weichen Pflanzenteilen. Als sie größer und stärker wurden, konnten sie größere Nahrung wie ihre Eltern essen.",
                    nl: "Baby dinosaurussen, jongen genoemd, aten klein voedsel dat gemakkelijk te vangen en te verteren was! Zelfs als hun ouders gigantische vleeseters waren, begonnen baby's met kleine insecten, kleine vissen of zachte plantendelen. Naarmate ze groter en sterker werden, konden ze groter voedsel eten zoals hun ouders."
                }
            },
            {
                question: {
                    en: "How did dinosaurs keep their eggs warm?",
                    es: "¿Cómo mantuvieron calientes sus huevos los dinosaurios?",
                    de: "Wie hielten Dinosaurier ihre Eier warm?",
                    nl: "Hoe hielden dinosaurussen hun eieren warm?"
                },
                options: [
                    { en: "They sat on them like birds do", es: "Se sentaron sobre ellos como hacen los pájaros", de: "Sie saßen darauf wie Vögel", nl: "Ze zaten erop zoals vogels doen" },
                    { en: "They put them in the refrigerator", es: "Los pusieron en el refrigerador", de: "Sie legten sie in den Kühlschrank", nl: "Ze legden ze in de koelkast" },
                    { en: "They buried them in snow", es: "Los enterraron en la nieve", de: "Sie begruben sie im Schnee", nl: "Ze begroeven ze in de sneeuw" },
                    { en: "They left them alone in the cold", es: "Los dejaron solos en el frío", de: "Sie ließen sie allein in der Kälte", nl: "Ze lieten ze alleen in de kou" }
                ],
                correct: 0,
                explanation: {
                    en: "Dinosaurs kept their eggs warm by sitting on them, just like modern birds! Some dinosaurs built nests with soft materials like leaves and feathers. Parent dinosaurs took turns sitting on the eggs to keep them at the right temperature so the babies could grow inside and hatch healthy and strong.",
                    es: "Los dinosaurios mantenían calientes sus huevos sentándose sobre ellos, ¡igual que los pájaros modernos! Algunos dinosaurios construían nidos con materiales suaves como hojas y plumas. Los dinosaurios padres se turnaban para sentarse sobre los huevos y mantenerlos a la temperatura correcta para que los bebés pudieran crecer adentro y salir sanos y fuertes.",
                    de: "Dinosaurier hielten ihre Eier warm, indem sie darauf saßen, genau wie moderne Vögel! Einige Dinosaurier bauten Nester mit weichen Materialien wie Blättern und Federn. Eltern-Dinosaurier wechselten sich ab beim Sitzen auf den Eiern, um sie auf der richtigen Temperatur zu halten, damit die Babys darin wachsen und gesund und stark schlüpfen konnten.",
                    nl: "Dinosaurussen hielden hun eieren warm door erop te zitten, net zoals moderne vogels! Sommige dinosaurussen bouwden nesten met zachte materialen zoals bladeren en veren. Ouder-dinosaurussen wisselden af met zitten op de eieren om ze op de juiste temperatuur te houden zodat de baby's erin konden groeien en gezond en sterk konden uitkomen."
                }
            },
            {
                question: {
                    en: "What sound did some dinosaurs make to talk to each other?",
                    es: "¿Qué sonido hacían algunos dinosaurios para hablarse entre ellos?",
                    de: "Welchen Laut machten einige Dinosaurier, um miteinander zu sprechen?",
                    nl: "Welk geluid maakten sommige dinosaurussen om met elkaar te praten?"
                },
                options: [
                    { en: "Deep rumbling sounds", es: "Sonidos profundos y retumbantes", de: "Tiefe grollende Geräusche", nl: "Diepe rommelige geluiden" },
                    { en: "They used telephones", es: "Usaron teléfonos", de: "Sie benutzten Telefone", nl: "Ze gebruikten telefoons" },
                    { en: "They sent text messages", es: "Enviaron mensajes de texto", de: "Sie schickten Textnachrichten", nl: "Ze stuurden tekstberichten" },
                    { en: "They never made any sounds", es: "Nunca hicieron ningún sonido", de: "Sie machten nie Geräusche", nl: "Ze maakten nooit geluiden" }
                ],
                correct: 0,
                explanation: {
                    en: "Scientists think some dinosaurs made deep rumbling sounds to communicate, similar to elephants today! Large dinosaurs might have made low-frequency sounds that could travel long distances to talk to other dinosaurs far away. They probably also used body language and visual signals to communicate with each other.",
                    es: "Los científicos piensan que algunos dinosaurios hacían sonidos profundos y retumbantes para comunicarse, ¡similar a los elefantes de hoy! Los dinosaurios grandes podrían haber hecho sonidos de baja frecuencia que podían viajar largas distancias para hablar con otros dinosaurios lejanos. Probablemente también usaron lenguaje corporal y señales visuales para comunicarse entre ellos.",
                    de: "Wissenschaftler denken, dass einige Dinosaurier tiefe grollende Geräusche zur Kommunikation machten, ähnlich wie Elefanten heute! Große Dinosaurier könnten niedrigfrequente Geräusche gemacht haben, die lange Distanzen reisen konnten, um mit anderen weit entfernten Dinosauriern zu sprechen. Sie benutzten wahrscheinlich auch Körpersprache und visuelle Signale zur Kommunikation.",
                    nl: "Wetenschappers denken dat sommige dinosaurussen diepe rommelige geluiden maakten om te communiceren, vergelijkbaar met olifanten vandaag! Grote dinosaurussen maakten misschien lage-frequentie geluiden die lange afstanden konden afleggen om met andere dinosaurussen ver weg te praten. Ze gebruikten waarschijnlijk ook lichaamstaal en visuele signalen om met elkaar te communiceren."
                }
            },
            {
                question: {
                    en: "Where did flying dinosaurs like Pterodactyls make their homes?",
                    es: "¿Dónde hacían sus hogares los dinosaurios voladores como los Pterodáctilos?",
                    de: "Wo machten fliegende Dinosaurier wie Pterodaktylen ihre Heime?",
                    nl: "Waar maakten vliegende dinosaurussen zoals Pterodactyls hun huizen?"
                },
                options: [
                    { en: "On high cliffs near water", es: "En acantilados altos cerca del agua", de: "Auf hohen Klippen in der Nähe von Wasser", nl: "Op hoge kliffen bij water" },
                    { en: "Underground in caves", es: "Bajo tierra en cuevas", de: "Unterirdisch in Höhlen", nl: "Ondergronds in grotten" },
                    { en: "In shopping malls", es: "En centros comerciales", de: "In Einkaufszentren", nl: "In winkelcentra" },
                    { en: "Inside volcanoes", es: "Dentro de volcanes", de: "In Vulkanen", nl: "Binnen vulkanen" }
                ],
                correct: 0,
                explanation: {
                    en: "Flying reptiles like Pterodactyls lived on high cliffs near oceans, lakes, and rivers! These high places were perfect for taking off and landing, and being near water meant they could easily catch fish to eat. The cliffs also provided safe nesting spots away from ground predators.",
                    es: "Los reptiles voladores como los Pterodáctilos vivían en acantilados altos cerca de océanos, lagos y ríos. Estos lugares altos eran perfectos para despegar y aterrizar, y estar cerca del agua significaba que podían atrapar fácilmente peces para comer. Los acantilados también proporcionaban lugares seguros para anidar lejos de depredadores terrestres.",
                    de: "Fliegende Reptilien wie Pterodaktylen lebten auf hohen Klippen in der Nähe von Ozeanen, Seen und Flüssen! Diese hohen Orte waren perfekt zum Abheben und Landen, und in der Nähe von Wasser zu sein bedeutete, dass sie leicht Fische zum Essen fangen konnten. Die Klippen boten auch sichere Nistplätze fern von Bodenräubern.",
                    nl: "Vliegende reptielen zoals Pterodactyls leefden op hoge kliffen bij oceanen, meren en rivieren! Deze hoge plaatsen waren perfect om op te stijgen en te landen, en dicht bij water zijn betekende dat ze gemakkelijk vissen konden vangen om te eten. De kliffen boden ook veilige nestplekken weg van grond-roofdieren."
                }
            },
            {
                question: {
                    en: "How did plant-eating dinosaurs help spread plants to new places?",
                    es: "¿Cómo ayudaron los dinosaurios herbívoros a esparcir plantas a nuevos lugares?",
                    de: "Wie halfen pflanzenfressende Dinosaurier dabei, Pflanzen an neue Orte zu verbreiten?",
                    nl: "Hoe hielpen plantenetende dinosaurussen planten te verspreiden naar nieuwe plaatsen?"
                },
                options: [
                    { en: "They carried seeds in their stomachs when they traveled", es: "Llevaron semillas en sus estómagos cuando viajaron", de: "Sie trugen Samen in ihren Mägen, wenn sie reisten", nl: "Ze droegen zaden in hun magen wanneer ze reisden" },
                    { en: "They planted gardens with shovels", es: "Plantaron jardines con palas", de: "Sie pflanzten Gärten mit Schaufeln", nl: "Ze plantten tuinen met schoppen" },
                    { en: "They carried seeds in backpacks", es: "Llevaron semillas en mochilas", de: "Sie trugen Samen in Rucksäcken", nl: "Ze droegen zaden in rugzakken" },
                    { en: "Plants couldn't spread during dinosaur times", es: "Las plantas no podían extenderse durante los tiempos de dinosaurios", de: "Pflanzen konnten sich während der Dinosaurierzeit nicht verbreiten", nl: "Planten konden zich niet verspreiden tijdens de dinosaurustijd" }
                ],
                correct: 0,
                explanation: {
                    en: "Plant-eating dinosaurs helped spread plants by eating fruits and seeds, then traveling to new areas before the seeds came out in their waste! This natural process, called seed dispersal, helped forests and plants spread across the ancient world. It's the same way many animals help plants spread today!",
                    es: "Los dinosaurios herbívoros ayudaron a esparcir plantas comiendo frutas y semillas, ¡luego viajando a nuevas áreas antes de que las semillas salieran en sus desechos! Este proceso natural, llamado dispersión de semillas, ayudó a los bosques y plantas a extenderse por el mundo antiguo. ¡Es la misma forma en que muchos animales ayudan a esparcir plantas hoy!",
                    de: "Pflanzenfressende Dinosaurier halfen bei der Verbreitung von Pflanzen, indem sie Früchte und Samen aßen und dann in neue Gebiete reisten, bevor die Samen in ihrem Abfall herauskamen! Dieser natürliche Prozess, Samenverbreitung genannt, half Wäldern und Pflanzen, sich über die antike Welt zu verbreiten. Es ist dieselbe Art, wie viele Tiere heute helfen, Pflanzen zu verbreiten!",
                    nl: "Plantenetende dinosaurussen hielpen planten verspreiden door vruchten en zaden te eten, en dan naar nieuwe gebieden te reizen voordat de zaden in hun afval naar buiten kwamen! Dit natuurlijke proces, zaadverspreiding genoemd, hielp bossen en planten zich over de oude wereld te verspreiden. Het is dezelfde manier waarop veel dieren vandaag helpen planten te verspreiden!"
                }
            },
            {
                question: {
                    en: "What happened to dinosaur teeth when they got old or broken?",
                    es: "¿Qué pasó con los dientes de dinosaurio cuando se hicieron viejos o se rompieron?",
                    de: "Was passierte mit Dinosaurierzähnen, wenn sie alt oder gebrochen wurden?",
                    nl: "Wat gebeurde er met dinosaurustanden toen ze oud of kapot werden?"
                },
                options: [
                    { en: "New teeth grew to replace them", es: "Crecieron dientes nuevos para reemplazarlos", de: "Neue Zähne wuchsen, um sie zu ersetzen", nl: "Nieuwe tanden groeiden om ze te vervangen" },
                    { en: "They went to the dentist", es: "Fueron al dentista", de: "Sie gingen zum Zahnarzt", nl: "Ze gingen naar de tandarts" },
                    { en: "They stopped eating forever", es: "Dejaron de comer para siempre", de: "Sie hörten für immer auf zu essen", nl: "Ze stopten voor altijd met eten" },
                    { en: "They borrowed teeth from other dinosaurs", es: "Pidieron prestados dientes de otros dinosaurios", de: "Sie liehen sich Zähne von anderen Dinosauriern", nl: "Ze leenden tanden van andere dinosaurussen" }
                ],
                correct: 0,
                explanation: {
                    en: "Dinosaurs constantly grew new teeth to replace old or broken ones, just like sharks do today! Some dinosaurs could grow hundreds of new teeth throughout their lives. This was very important because they used their teeth so much for eating tough plants or catching prey.",
                    es: "Los dinosaurios constantemente crecían dientes nuevos para reemplazar los viejos o rotos, ¡igual que los tiburones de hoy! Algunos dinosaurios podían crecer cientos de dientes nuevos a lo largo de sus vidas. Esto era muy importante porque usaban mucho sus dientes para comer plantas duras o atrapar presas.",
                    de: "Dinosaurier ließen ständig neue Zähne wachsen, um alte oder gebrochene zu ersetzen, genau wie Haie heute! Einige Dinosaurier konnten hunderte neue Zähne während ihres Lebens wachsen lassen. Das war sehr wichtig, weil sie ihre Zähne so viel zum Essen harter Pflanzen oder Fangen von Beute benutzten.",
                    nl: "Dinosaurussen lieten constant nieuwe tanden groeien om oude of kapotte te vervangen, net zoals haaien vandaag doen! Sommige dinosaurussen konden honderden nieuwe tanden laten groeien gedurende hun leven. Dit was heel belangrijk omdat ze hun tanden zo veel gebruikten voor het eten van harde planten of het vangen van prooi."
                }
            },
            {
                question: {
                    en: "How did dinosaurs stay cool on hot days?",
                    es: "¿Cómo se mantenían frescos los dinosaurios en días calurosos?",
                    de: "Wie blieben Dinosaurier an heißen Tagen kühl?",
                    nl: "Hoe bleven dinosaurussen koel op warme dagen?"
                },
                options: [
                    { en: "They found shade under trees and in water", es: "Encontraron sombra bajo árboles y en el agua", de: "Sie fanden Schatten unter Bäumen und im Wasser", nl: "Ze vonden schaduw onder bomen en in water" },
                    { en: "They used electric fans", es: "Usaron ventiladores eléctricos", de: "Sie benutzten elektrische Ventilatoren", nl: "Ze gebruikten elektrische ventilatoren" },
                    { en: "They went to air-conditioned buildings", es: "Fueron a edificios con aire acondicionado", de: "Sie gingen in klimatisierte Gebäude", nl: "Ze gingen naar gebouwen met airconditioning" },
                    { en: "They ate ice cream", es: "Comieron helado", de: "Sie aßen Eis", nl: "Ze aten ijs" }
                ],
                correct: 0,
                explanation: {
                    en: "Dinosaurs stayed cool by finding shade under big trees, wallowing in mud, and swimming in rivers and lakes! Large dinosaurs especially needed to find ways to cool down because their huge bodies held a lot of heat. Some may have had special skin flaps or sails that helped release heat, like elephant ears do today!",
                    es: "Los dinosaurios se mantenían frescos encontrando sombra bajo árboles grandes, revolcándose en lodo y nadando en ríos y lagos. Los dinosaurios grandes especialmente necesitaban encontrar formas de enfriarse porque sus cuerpos enormes retenían mucho calor. ¡Algunos podrían haber tenido aletas de piel especiales o velas que ayudaban a liberar calor, como las orejas de elefante hoy!",
                    de: "Dinosaurier blieben kühl, indem sie Schatten unter großen Bäumen fanden, sich im Schlamm wälzten und in Flüssen und Seen schwammen! Große Dinosaurier mussten besonders Wege finden, sich abzukühlen, weil ihre riesigen Körper viel Wärme speicherten. Einige hatten möglicherweise spezielle Hautlappen oder Segel, die beim Wärmeableiten halfen, wie Elefantenohren heute!",
                    nl: "Dinosaurussen bleven koel door schaduw te zoeken onder grote bomen, zich te wentelen in modder, en te zwemmen in rivieren en meren! Grote dinosaurussen hadden vooral manieren nodig om af te koelen omdat hun enorme lichamen veel warmte vasthielden. Sommigen hadden misschien speciale huidflappen of zeilen die hielpen warmte af te geven, zoals olifantenoren vandaag doen!"
                }
            },
            {
                question: {
                    en: "What did dinosaurs do when storms came?",
                    es: "¿Qué hacían los dinosaurios cuando llegaban las tormentas?",
                    de: "Was taten Dinosaurier, wenn Stürme kamen?",
                    nl: "Wat deden dinosaurussen wanneer stormen kwamen?"
                },
                options: [
                    { en: "They found shelter in caves and under rocks", es: "Encontraron refugio en cuevas y bajo rocas", de: "Sie fanden Schutz in Höhlen und unter Felsen", nl: "Ze vonden beschutting in grotten en onder rotsen" },
                    { en: "They watched TV indoors", es: "Vieron televisión adentro", de: "Sie schauten drinnen fern", nl: "Ze keken binnen televisie" },
                    { en: "They used umbrellas", es: "Usaron paraguas", de: "Sie benutzten Regenschirme", nl: "Ze gebruikten paraplu's" },
                    { en: "They danced in the rain", es: "Bailaron en la lluvia", de: "Sie tanzten im Regen", nl: "Ze dansten in de regen" }
                ],
                correct: 0,
                explanation: {
                    en: "When storms came, dinosaurs looked for natural shelter like caves, under big rocks, or in dense forests! Just like modern animals do today, they had instincts to find safe, dry places during bad weather. Some dinosaurs might have huddled together in groups to stay warm and protected during storms.",
                    es: "Cuando llegaban las tormentas, los dinosaurios buscaban refugio natural como cuevas, bajo rocas grandes o en bosques densos. Igual que los animales modernos de hoy, tenían instintos para encontrar lugares seguros y secos durante el mal tiempo. Algunos dinosaurios podrían haberse acurrucado juntos en grupos para mantenerse calientes y protegidos durante las tormentas.",
                    de: "Wenn Stürme kamen, suchten Dinosaurier natürlichen Schutz wie Höhlen, unter großen Felsen oder in dichten Wäldern! Genau wie moderne Tiere heute hatten sie Instinkte, sichere, trockene Orte bei schlechtem Wetter zu finden. Einige Dinosaurier könnten sich während Stürmen in Gruppen zusammengekauert haben, um warm und geschützt zu bleiben.",
                    nl: "Wanneer stormen kwamen, zochten dinosaurussen natuurlijke beschutting zoals grotten, onder grote rotsen, of in dichte bossen! Net zoals moderne dieren vandaag hadden ze instincten om veilige, droge plaatsen te vinden tijdens slecht weer. Sommige dinosaurussen kropen misschien samen in groepen om warm en beschermd te blijven tijdens stormen."
                }
            },
            {
                question: {
                    en: "How did meat-eating dinosaurs hunt in groups?",
                    es: "¿Cómo cazaban en grupos los dinosaurios carnívoros?",
                    de: "Wie jagten fleischfressende Dinosaurier in Gruppen?",
                    nl: "Hoe jaagden vleesetende dinosaurussen in groepen?"
                },
                options: [
                    { en: "They worked together to surround their prey", es: "Trabajaron juntos para rodear a su presa", de: "Sie arbeiteten zusammen, um ihre Beute zu umzingeln", nl: "Ze werkten samen om hun prooi te omsingelen" },
                    { en: "They took turns playing video games", es: "Se turnaron para jugar videojuegos", de: "Sie wechselten sich beim Videospiel ab", nl: "Ze namen de beurt bij het spelen van videogames" },
                    { en: "They never hunted together", es: "Nunca cazaron juntos", de: "Sie jagten nie zusammen", nl: "Ze jaagden nooit samen" },
                    { en: "They used fishing nets", es: "Usaron redes de pesca", de: "Sie benutzten Fischernetze", nl: "Ze gebruikten visnetten" }
                ],
                correct: 0,
                explanation: {
                    en: "Some meat-eating dinosaurs like Velociraptors hunted in packs, working together like wolves do today! They would surround large prey, with some attacking from the front while others attacked from behind. This teamwork helped them catch animals much larger than themselves.",
                    es: "Algunos dinosaurios carnívoros como los Velociraptors cazaban en manadas, ¡trabajando juntos como los lobos de hoy! Rodeaban presas grandes, con algunos atacando desde el frente mientras otros atacaban desde atrás. Este trabajo en equipo les ayudaba a atrapar animales mucho más grandes que ellos mismos.",
                    de: "Einige fleischfressende Dinosaurier wie Velociraptoren jagten in Rudeln und arbeiteten zusammen wie Wölfe heute! Sie umzingelten große Beute, wobei einige von vorn angriffen, während andere von hinten angriffen. Diese Teamarbeit half ihnen, Tiere zu fangen, die viel größer waren als sie selbst.",
                    nl: "Sommige vleesetende dinosaurussen zoals Velociraptors jaagden in roedels, samenwerkend zoals wolven vandaag doen! Ze omsingelden grote prooi, waarbij sommigen van voren aanvielen terwijl anderen van achteren aanvielen. Dit teamwerk help hen dieren te vangen die veel groter waren dan zijzelf."
                }
            },
            {
                question: {
                    en: "What kind of homes did long-necked dinosaurs like Brontosaurus make?",
                    es: "¿Qué tipo de hogares hacían los dinosaurios de cuello largo como Brontosaurus?",
                    de: "Welche Art von Heimen machten langhalsige Dinosaurier wie Brontosaurus?",
                    nl: "Wat voor soort huizen maakten langnekdinosaurussen zoals Brontosaurus?"
                },
                options: [
                    { en: "They didn't make homes, they kept moving to find food", es: "No hicieron hogares, siguieron moviéndose para encontrar comida", de: "Sie machten keine Heime, sie bewegten sich weiter, um Nahrung zu finden", nl: "Ze maakten geen huizen, ze bleven bewegen om voedsel te vinden" },
                    { en: "They built houses with wood", es: "Construyeron casas con madera", de: "Sie bauten Häuser aus Holz", nl: "Ze bouwden huizen van hout" },
                    { en: "They lived in apartments", es: "Vivían en apartamentos", de: "Sie lebten in Wohnungen", nl: "Ze woonden in appartementen" },
                    { en: "They made igloos from ice", es: "Hicieron iglúes de hielo", de: "Sie machten Iglus aus Eis", nl: "Ze maakten iglo's van ijs" }
                ],
                correct: 0,
                explanation: {
                    en: "Long-necked dinosaurs like Brontosaurus were nomads - they didn't make permanent homes! They constantly moved from place to place searching for fresh plants to eat. With their huge appetites, they would quickly eat all the plants in one area and then move on to find more food.",
                    es: "Los dinosaurios de cuello largo como Brontosaurus eran nómadas - ¡no hacían hogares permanentes! Se movían constantemente de lugar en lugar buscando plantas frescas para comer. Con sus apetitos enormes, rápidamente comían todas las plantas en un área y luego se movían para encontrar más comida.",
                    de: "Langhalsige Dinosaurier wie Brontosaurus waren Nomaden - sie machten keine dauerhaften Heime! Sie bewegten sich ständig von Ort zu Ort auf der Suche nach frischen Pflanzen zum Essen. Mit ihren riesigen Appetiten aßen sie schnell alle Pflanzen in einem Gebiet und zogen dann weiter, um mehr Nahrung zu finden.",
                    nl: "Langnekdinosaurussen zoals Brontosaurus waren nomaden - ze maakten geen permanente huizen! Ze bewogen constant van plaats naar plaats op zoek naar verse planten om te eten. Met hun enorme eetlust aten ze snel alle planten in één gebied op en trokken dan verder om meer voedsel te vinden."
                }
            },
            {
                question: {
                    en: "How did dinosaurs recognize their family members?",
                    es: "¿Cómo reconocían los dinosaurios a los miembros de su familia?",
                    de: "Wie erkannten Dinosaurier ihre Familienmitglieder?",
                    nl: "Hoe herkenden dinosaurussen hun familieleden?"
                },
                options: [
                    { en: "By their unique colors, patterns, and smells", es: "Por sus colores, patrones y olores únicos", de: "An ihren einzigartigen Farben, Mustern und Gerüchen", nl: "Door hun unieke kleuren, patronen en geuren" },
                    { en: "They wore name tags", es: "Usaron etiquetas con nombres", de: "Sie trugen Namensschilder", nl: "Ze droegen naamlabels" },
                    { en: "They used cell phones to call each other", es: "Usaron teléfonos celulares para llamarse", de: "Sie benutzten Handys, um sich anzurufen", nl: "Ze gebruikten mobiele telefoons om elkaar te bellen" },
                    { en: "They couldn't recognize anyone", es: "No podían reconocer a nadie", de: "Sie konnten niemanden erkennen", nl: "Ze konden niemand herkennen" }
                ],
                correct: 0,
                explanation: {
                    en: "Dinosaurs probably recognized family members by their unique colors, patterns, smells, and sounds, just like animals do today! Each dinosaur likely had distinctive markings or scents that helped them identify their parents, children, and relatives. This was especially important for taking care of babies and staying together as a family group.",
                    es: "Los dinosaurios probablemente reconocían a los miembros de la familia por sus colores, patrones, olores y sonidos únicos, ¡igual que los animales de hoy! Cada dinosaurio probablemente tenía marcas o olores distintivos que les ayudaban a identificar a sus padres, hijos y parientes. Esto era especialmente importante para cuidar a los bebés y mantenerse juntos como grupo familiar.",
                    de: "Dinosaurier erkannten Familienmitglieder wahrscheinlich an ihren einzigartigen Farben, Mustern, Gerüchen und Geräuschen, genau wie Tiere heute! Jeder Dinosaurier hatte wahrscheinlich distinctive Markierungen oder Düfte, die ihnen halfen, ihre Eltern, Kinder und Verwandten zu identifizieren. Das war besonders wichtig für die Pflege der Babys und um als Familiengruppe zusammenzubleiben.",
                    nl: "Dinosaurussen herkenden waarschijnlijk familieleden door hun unieke kleuren, patronen, geuren en geluiden, net zoals dieren vandaag doen! Elke dinosaurus had waarschijnlijk onderscheidende markeringen of geuren die hen hielpen hun ouders, kinderen en familie te identificeren. Dit was vooral belangrijk voor het zorgen voor baby's en samen blijven als familiegroep."
                }
            },
            {
                question: {
                    en: "What did armored dinosaurs like Ankylosaurus do when predators attacked?",
                    es: "¿Qué hacían los dinosaurios acorazados como Ankylosaurus cuando los depredadores atacaban?",
                    de: "Was taten gepanzerte Dinosaurier wie Ankylosaurus, wenn Raubtiere angriffen?",
                    nl: "Wat deden gepantserde dinosaurussen zoals Ankylosaurus wanneer roofdieren aanvielen?"
                },
                options: [
                    { en: "They tucked into a ball and swung their tail clubs", es: "Se acurrucaron en una pelota y balancearon sus colas con mazas", de: "Sie rollten sich zu einer Kugel und schwangen ihre Schwanzkeulen", nl: "Ze rolden zich op tot een bal en zwaaiden met hun staartknuppels" },
                    { en: "They ran away very fast", es: "Corrieron muy rápido", de: "Sie rannten sehr schnell weg", nl: "Ze renden heel snel weg" },
                    { en: "They climbed up trees", es: "Treparon árboles", de: "Sie kletterten auf Bäume", nl: "Ze klommen in bomen" },
                    { en: "They called the police", es: "Llamaron a la policía", de: "Sie riefen die Polizei", nl: "Ze belden de politie" }
                ],
                correct: 0,
                explanation: {
                    en: "Armored dinosaurs like Ankylosaurus defended themselves by crouching down low to protect their soft belly and swinging their heavy tail club at attackers! Their backs were covered in thick, bony armor that made them very hard to bite. The tail club could deliver a powerful blow that could break the bones of predators!",
                    es: "Los dinosaurios acorazados como Ankylosaurus se defendían agachándose para proteger su vientre suave y balanceando su pesada maza de cola contra los atacantes. Sus espaldas estaban cubiertas de armadura ósea gruesa que los hacía muy difíciles de morder. ¡La maza de cola podía dar un golpe poderoso que podía romper los huesos de los depredadores!",
                    de: "Gepanzerte Dinosaurier wie Ankylosaurus verteidigten sich, indem sie sich niedrig duckten, um ihren weichen Bauch zu schützen, und ihre schwere Schwanzkeule gegen Angreifer schwangen! Ihre Rücken waren mit dicken, knöchernen Panzern bedeckt, die sie sehr schwer zu beißen machten. Die Schwanzkeule konnte einen mächtigen Schlag versetzen, der die Knochen von Raubtieren brechen konnte!",
                    nl: "Gepantserde dinosaurussen zoals Ankylosaurus verdedigden zichzelf door laag te bukken om hun zachte buik te beschermen en hun zware staartknuppel naar aanvallers te zwaaien! Hun ruggen waren bedekt met dikke, benige pantser die hen heel moeilijk te bijten maakte. De staartknuppel kon een krachtige slag uitdelen die de botten van roofdieren kon breken!"
                }
            },
            {
                question: {
                    en: "How did dinosaurs take care of their sick family members?",
                    es: "¿Cómo cuidaban los dinosaurios a los miembros enfermos de su familia?",
                    de: "Wie kümmerten sich Dinosaurier um ihre kranken Familienmitglieder?",
                    nl: "Hoe zorgden dinosaurussen voor hun zieke familieleden?"
                },
                options: [
                    { en: "They brought them food and stayed close to protect them", es: "Les trajeron comida y se quedaron cerca para protegerlos", de: "Sie brachten ihnen Nahrung und blieben in der Nähe, um sie zu schützen", nl: "Ze brachten hen voedsel en bleven dichtbij om hen te beschermen" },
                    { en: "They took them to dinosaur hospitals", es: "Los llevaron a hospitales de dinosaurios", de: "Sie brachten sie in Dinosaurier-Krankenhäuser", nl: "Ze brachten hen naar dinosaurusziekehuizen" },
                    { en: "They gave them medicine pills", es: "Les dieron pastillas de medicina", de: "Sie gaben ihnen Medizinpillen", nl: "Ze gaven hen medicijnpillen" },
                    { en: "They ignored sick family members", es: "Ignoraron a los miembros enfermos de la familia", de: "Sie ignorierten kranke Familienmitglieder", nl: "Ze negeerden zieke familieleden" }
                ],
                correct: 0,
                explanation: {
                    en: "Scientists think some dinosaurs cared for sick family members by bringing them food, staying close for protection, and possibly even licking wounds clean! Just like elephants and other social animals today, dinosaur families likely looked after each other during illness and injury. This caring behavior shows that dinosaurs had complex social bonds.",
                    es: "Los científicos piensan que algunos dinosaurios cuidaban a los miembros enfermos de la familia trayéndoles comida, quedándose cerca para protección y posiblemente incluso lamiendo las heridas para limpiarlas. Igual que los elefantes y otros animales sociales de hoy, las familias de dinosaurios probablemente se cuidaban entre ellos durante enfermedad y lesión. Este comportamiento de cuidado muestra que los dinosaurios tenían vínculos sociales complejos.",
                    de: "Wissenschaftler denken, dass einige Dinosaurier kranke Familienmitglieder pflegten, indem sie ihnen Nahrung brachten, in der Nähe blieben zum Schutz und möglicherweise sogar Wunden sauber leckten! Genau wie Elefanten und andere soziale Tiere heute kümmerten sich Dinosaurierfamilien wahrscheinlich während Krankheit und Verletzung umeinander. Dieses fürsorgliche Verhalten zeigt, dass Dinosaurier komplexe soziale Bindungen hatten.",
                    nl: "Wetenschappers denken dat sommige dinosaurussen voor zieke familieleden zorgden door hen voedsel te brengen, dichtbij te blijven voor bescherming en mogelijk zelfs wonden schoon te likken! Net zoals olifanten en andere sociale dieren vandaag, zorgden dinosaurusfamilies waarschijnlijk voor elkaar tijdens ziekte en verwonding. Dit zorgzame gedrag toont dat dinosaurussen complexe sociale banden hadden."
                }
            },
            {
                question: {
                    en: "What made the dinosaur world such a special place to live?",
                    es: "¿Qué hizo del mundo de los dinosaurios un lugar tan especial para vivir?",
                    de: "Was machte die Dinosaurierwelt zu einem so besonderen Ort zum Leben?",
                    nl: "Wat maakte de dinosauruswereld zo'n speciale plek om te leven?"
                },
                options: [
                    { en: "Giant forests, warm weather, and amazing creatures everywhere", es: "Bosques gigantes, clima cálido y criaturas increíbles en todas partes", de: "Riesige Wälder, warmes Wetter und erstaunliche Kreaturen überall", nl: "Gigantische bossen, warm weer en verbazingwekkende wezens overal" },
                    { en: "Shopping malls and movie theaters", es: "Centros comerciales y cines", de: "Einkaufszentren und Kinos", nl: "Winkelcentra en bioscopen" },
                    { en: "Cars and airplanes", es: "Autos y aviones", de: "Autos und Flugzeuge", nl: "Auto's en vliegtuigen" },
                    { en: "It was exactly like today", es: "Era exactamente como hoy", de: "Es war genau wie heute", nl: "Het was precies zoals vandaag" }
                ],
                correct: 0,
                explanation: {
                    en: "The dinosaur world was amazing with lush tropical forests covering most of the planet, warm climates everywhere, shallow seas full of marine reptiles, and incredible creatures of all sizes roaming the land, sea, and sky! There were no polar ice caps, so even the North and South poles were warm and covered with plants. It was like a giant natural paradise!",
                    es: "El mundo de los dinosaurios era increíble con exuberantes bosques tropicales cubriendo la mayor parte del planeta, climas cálidos en todas partes, mares poco profundos llenos de reptiles marinos, y criaturas increíbles de todos los tamaños vagando por tierra, mar y cielo. No había casquetes polares, así que incluso los polos Norte y Sur eran cálidos y cubiertos de plantas. ¡Era como un paraíso natural gigante!",
                    de: "Die Dinosaurierwelt war erstaunlich mit üppigen tropischen Wäldern, die den größten Teil des Planeten bedeckten, warmen Klimazonen überall, flachen Meeren voller Meeresreptilien und unglaublichen Kreaturen aller Größen, die über Land, Meer und Himmel wanderten! Es gab keine Polkappen, so dass sogar die Nord- und Südpole warm und mit Pflanzen bedeckt waren. Es war wie ein riesiges natürliches Paradies!",
                    nl: "De dinosauruswereld was verbazingwekkend met weelderige tropische bossen die het grootste deel van de planeet bedekten, warme klimaten overal, ondiepe zeeën vol zeereptielen, en ongelooflijke wezens van alle groottes die over land, zee en lucht zwierven! Er waren geen poolkappen, dus zelfs de Noord- en Zuidpool waren warm en bedekt met planten. Het was zoals een gigantisch natuurlijk paradijs!"
                }
            },
            {
                question: {
                    en: "How did studying dinosaur ecosystems help scientists understand life on Earth?",
                    es: "¿Cómo ayudó el estudio de los ecosistemas de dinosaurios a los científicos a entender la vida en la Tierra?",
                    de: "Wie half das Studium von Dinosaurier-Ökosystemen Wissenschaftlern, das Leben auf der Erde zu verstehen?",
                    nl: "Hoe hielp het bestuderen van dinosaurus-ecosystemen wetenschappers het leven op aarde te begrijpen?"
                },
                options: [
                    { en: "It showed how life adapts and changes over millions of years", es: "Mostró cómo la vida se adapta y cambia durante millones de años", de: "Es zeigte, wie sich Leben über Millionen von Jahren anpasst und verändert", nl: "Het toonde hoe leven zich aanpast en verandert gedurende miljoenen jaren" },
                    { en: "Dinosaurs taught humans how to use computers", es: "Los dinosaurios enseñaron a los humanos a usar computadoras", de: "Dinosaurier lehrten Menschen, Computer zu benutzen", nl: "Dinosaurussen leerden mensen computers te gebruiken" },
                    { en: "It proved that nothing ever changes", es: "Probó que nada nunca cambia", de: "Es bewies, dass sich nie etwas ändert", nl: "Het bewees dat er nooit iets verandert" },
                    { en: "Dinosaur studies are useless", es: "Los estudios de dinosaurios son inútiles", de: "Dinosaurier-Studien sind nutzlos", nl: "Dinosaurusstudies zijn nutteloos" }
                ],
                correct: 0,
                explanation: {
                    en: "Studying dinosaur ecosystems taught scientists how life on Earth constantly adapts to changing environments over millions of years! We learned how species evolve, how ecosystems recover from disasters, and how climate changes affect all living things. This knowledge helps us understand current environmental challenges and protect life on Earth today.",
                    es: "Estudiar los ecosistemas de dinosaurios enseñó a los científicos cómo la vida en la Tierra se adapta constantemente a ambientes cambiantes durante millones de años. Aprendimos cómo evolucionan las especies, cómo se recuperan los ecosistemas de los desastres y cómo los cambios climáticos afectan a todos los seres vivos. Este conocimiento nos ayuda a entender los desafíos ambientales actuales y proteger la vida en la Tierra hoy.",
                    de: "Das Studium von Dinosaurier-Ökosystemen lehrte Wissenschaftler, wie sich das Leben auf der Erde über Millionen von Jahren ständig an sich ändernde Umgebungen anpasst! Wir lernten, wie sich Arten entwickeln, wie sich Ökosysteme von Katastrophen erholen und wie Klimaveränderungen alle Lebewesen beeinflussen. Dieses Wissen hilft uns, aktuelle Umweltherausforderungen zu verstehen und das Leben auf der Erde heute zu schützen.",
                    nl: "Het bestuderen van dinosaurus-ecosystemen leerde wetenschappers hoe leven op aarde zich constant aanpast aan veranderende omgevingen gedurende miljoenen jaren! We leerden hoe soorten evolueren, hoe ecosystemen herstellen van rampen, en hoe klimaatveranderingen alle levende wezens beïnvloeden. Deze kennis helpt ons huidige milieu-uitdagingen begrijpen en het leven op aarde vandaag beschermen."
                }
            },
            {
                question: {
                    en: "What is the most amazing thing about the world that dinosaurs lived in?",
                    es: "¿Qué es lo más increíble del mundo en el que vivían los dinosaurios?",
                    de: "Was ist das Erstaunlichste an der Welt, in der Dinosaurier lebten?",
                    nl: "Wat is het meest verbazingwekkende aan de wereld waarin dinosaurussen leefden?"
                },
                options: [
                    { en: "It was full of incredible diversity and constant change", es: "Estaba lleno de diversidad increíble y cambio constante", de: "Es war voller unglaublicher Vielfalt und ständigem Wandel", nl: "Het was vol ongelooflijke diversiteit en constante verandering" },
                    { en: "Dinosaurs had the internet", es: "Los dinosaurios tenían internet", de: "Dinosaurier hatten das Internet", nl: "Dinosaurussen hadden internet" },
                    { en: "It was boring and empty", es: "Era aburrido y vacío", de: "Es war langweilig und leer", nl: "Het was saai en leeg" },
                    { en: "Nothing lived there except dinosaurs", es: "Nada vivía ahí excepto dinosaurios", de: "Nichts lebte dort außer Dinosauriern", nl: "Niets leefde daar behalve dinosaurussen" }
                ],
                correct: 0,
                explanation: {
                    en: "The most amazing thing about the dinosaur world was its incredible diversity and constant evolution! For over 165 million years, thousands of different dinosaur species evolved, along with amazing plants, insects, marine reptiles, and flying creatures. The world was constantly changing, creating new environments and new forms of life - it was like nature's greatest experiment!",
                    es: "¡Lo más increíble del mundo de los dinosaurios era su diversidad increíble y evolución constante! Durante más de 165 millones de años, miles de especies diferentes de dinosaurios evolucionaron, junto con plantas increíbles, insectos, reptiles marinos y criaturas voladoras. El mundo estaba cambiando constantemente, creando nuevos ambientes y nuevas formas de vida - ¡era como el experimento más grande de la naturaleza!",
                    de: "Das Erstaunlichste an der Dinosaurierwelt war ihre unglaubliche Vielfalt und ständige Evolution! Über 165 Millionen Jahre entwickelten sich Tausende verschiedener Dinosaurierarten zusammen mit erstaunlichen Pflanzen, Insekten, Meeresreptilien und fliegenden Kreaturen. Die Welt veränderte sich ständig und schuf neue Umgebungen und neue Lebensformen - es war wie Natures größtes Experiment!",
                    nl: "Het meest verbazingwekkende aan de dinosauruswereld was zijn ongelooflijke diversiteit en constante evolutie! Gedurende meer dan 165 miljoen jaar evolueerden duizenden verschillende dinosaurussoorten, samen met verbazingwekkende planten, insecten, zeereptiefen en vliegende wezens. De wereld veranderde constant, wat nieuwe omgevingen en nieuwe levensvormen creëerde - het was zoals natuur's grootste experiment!"
                }
            },
            {
                question: {
                    en: "Why do children today love learning about the dinosaur world?",
                    es: "¿Por qué a los niños de hoy les encanta aprender sobre el mundo de los dinosaurios?",
                    de: "Warum lieben Kinder heute das Lernen über die Dinosaurierwelt?",
                    nl: "Waarom houden kinderen van vandaag van het leren over de dinosauruswereld?"
                },
                options: [
                    { en: "It's like discovering a magical world full of amazing creatures", es: "Es como descubrir un mundo mágico lleno de criaturas increíbles", de: "Es ist wie das Entdecken einer magischen Welt voller erstaunlicher Kreaturen", nl: "Het is zoals het ontdekken van een magische wereld vol verbazingwekkende wezens" },
                    { en: "Dinosaurs help with homework", es: "Los dinosaurios ayudan con la tarea", de: "Dinosaurier helfen bei den Hausaufgaben", nl: "Dinosaurussen helpen met huiswerk" },
                    { en: "Children don't like dinosaurs", es: "A los niños no les gustan los dinosaurios", de: "Kinder mögen keine Dinosaurier", nl: "Kinderen houden niet van dinosaurussen" },
                    { en: "Dinosaurs are scary and boring", es: "Los dinosaurios son aterradores y aburridos", de: "Dinosaurier sind gruselig und langweilig", nl: "Dinosaurussen zijn eng en saai" }
                ],
                correct: 0,
                explanation: {
                    en: "Children love learning about dinosaurs because it's like discovering a real magical world that actually existed! Dinosaurs spark imagination, curiosity, and wonder about life on Earth. Learning about these amazing creatures helps children understand science, history, and the natural world while having fun with some of the coolest animals that ever lived!",
                    es: "A los niños les encanta aprender sobre dinosaurios porque es como descubrir un mundo mágico real que realmente existió. Los dinosaurios despiertan la imaginación, curiosidad y asombro sobre la vida en la Tierra. Aprender sobre estas criaturas increíbles ayuda a los niños a entender ciencia, historia y el mundo natural mientras se divierten con algunos de los animales más geniales que jamás vivieron.",
                    de: "Kinder lieben das Lernen über Dinosaurier, weil es wie das Entdecken einer echten magischen Welt ist, die tatsächlich existierte! Dinosaurier wecken Vorstellungskraft, Neugier und Staunen über das Leben auf der Erde. Das Lernen über diese erstaunlichen Kreaturen hilft Kindern, Wissenschaft, Geschichte und die natürliche Welt zu verstehen, während sie Spaß mit einigen der coolsten Tiere haben, die je gelebt haben!",
                    nl: "Kinderen houden van het leren over dinosaurussen omdat het is zoals het ontdekken van een echte magische wereld die echt bestond! Dinosaurussen wekken verbeelding, nieuwsgierigheid en verwondering over het leven op aarde op. Het leren over deze verbazingwekkende wezens helpt kinderen wetenschap, geschiedenis en de natuurlijke wereld te begrijpen terwijl ze plezier hebben met enkele van de coolste dieren die ooit leefden!"
                }
            },
            {
                question: {
                    en: "What did sea dinosaurs like Plesiosaurs eat?",
                    es: "¿Qué comían los dinosaurios marinos como Plesiosaurs?",
                    de: "Was fraßen Meeresdinosaurier wie Plesiosaurier?",
                    nl: "Wat aten zeedinosauters zoals Plesiosaurs?"
                },
                options: [
                    { en: "Fish and sea creatures", es: "Peces y criaturas marinas", de: "Fische und Meerestiere", nl: "Vissen en zeewezens" },
                    { en: "Grass and flowers", es: "Hierba y flores", de: "Gras und Blumen", nl: "Gras en bloemen" },
                    { en: "Pizza and hamburgers", es: "Pizza y hamburguesas", de: "Pizza und Hamburger", nl: "Pizza en hamburgers" },
                    { en: "Rocks and sand", es: "Rocas y arena", de: "Steine und Sand", nl: "Stenen en zand" }
                ],
                correct: 0,
                explanation: {
                    en: "Sea reptiles like Plesiosaurs lived in ancient oceans and ate fish, squid, and other marine creatures! They had long necks to reach into schools of fish and powerful flippers to swim through the water. These amazing sea reptiles ruled the oceans while dinosaurs ruled the land.",
                    es: "Los reptiles marinos como Plesiosaurs vivían en océanos antiguos y comían peces, calamares y otras criaturas marinas. Tenían cuellos largos para alcanzar bancos de peces y aletas poderosas para nadar a través del agua. Estos reptiles marinos increíbles dominaron los océanos mientras los dinosaurios dominaron la tierra.",
                    de: "Meeresreptilien wie Plesiosaurier lebten in alten Ozeanen und fraßen Fische, Tintenfische und andere Meerestiere! Sie hatten lange Hälse, um in Fischschwärme zu reichen, und mächtige Flossen, um durchs Wasser zu schwimmen. Diese erstaunlichen Meeresreptilien beherrschten die Ozeane, während Dinosaurier das Land beherrschten.",
                    nl: "Zeereptielen zoals Plesiosaurs leefden in oude oceanen en aten vissen, inktvissen en andere zeewezens! Ze hadden lange nekken om bij scholen vissen te komen en krachtige vinnen om door het water te zwemmen. Deze verbazingwekkende zeereptielen heersten over de oceanen terwijl dinosaurussen over het land heersten."
                }
            },
            {
                question: {
                    en: "How did dinosaurs know when winter was coming?",
                    es: "¿Cómo sabían los dinosaurios cuándo llegaba el invierno?",
                    de: "Wie wussten Dinosaurier, wann Winter kam?",
                    nl: "Hoe wisten dinosaurussen wanneer de winter kwam?"
                },
                options: [
                    { en: "They noticed changes in daylight and plant growth", es: "Notaron cambios en la luz del día y crecimiento de plantas", de: "Sie bemerkten Veränderungen im Tageslicht und Pflanzenwachstum", nl: "Ze merkten veranderingen in daglicht en plantengroei op" },
                    { en: "They watched the weather forecast on TV", es: "Vieron el pronóstico del tiempo en TV", de: "Sie schauten die Wettervorhersage im Fernsehen", nl: "Ze keken naar de weersverwachting op TV" },
                    { en: "They used calendars", es: "Usaron calendarios", de: "Sie benutzten Kalender", nl: "Ze gebruikten kalenders" },
                    { en: "There was no winter during dinosaur times", es: "No había invierno durante los tiempos de dinosaurios", de: "Es gab keinen Winter während der Dinosaurierzeit", nl: "Er was geen winter tijdens dinosaurustijd" }
                ],
                correct: 0,
                explanation: {
                    en: "Dinosaurs could sense seasonal changes through natural signals like shorter daylight, cooler temperatures, and changes in plant growth! Many animals today use these same clues to prepare for winter. Some dinosaurs may have migrated to warmer areas, while others adapted to survive cooler seasons.",
                    es: "Los dinosaurios podían sentir cambios estacionales a través de señales naturales como menos luz del día, temperaturas más frías y cambios en el crecimiento de plantas. Muchos animales de hoy usan estas mismas pistas para prepararse para el invierno. Algunos dinosaurios podrían haber migrado a áreas más cálidas, mientras otros se adaptaron para sobrevivir estaciones más frías.",
                    de: "Dinosaurier konnten Jahreszeitwechsel durch natürliche Signale wie kürzeres Tageslicht, kühlere Temperaturen und Veränderungen im Pflanzenwachstum spüren! Viele Tiere heute verwenden dieselben Hinweise, um sich auf den Winter vorzubereiten. Einige Dinosaurier migrierten möglicherweise in wärmere Gebiete, während andere sich anpassten, um kühlere Jahreszeiten zu überleben.",
                    nl: "Dinosaurussen konden seizoensveranderingen voelen door natuurlijke signalen zoals korter daglicht, koelere temperaturen en veranderingen in plantengroei! Veel dieren gebruiken vandaag dezelfde aanwijzingen om zich voor te bereiden op de winter. Sommige dinosaurussen migreerden misschien naar warmere gebieden, terwijl anderen zich aanpasten om koelere seizoenen te overleven."
                }
            },
            {
                question: {
                    en: "What happened to dinosaur eggs if the weather got too cold?",
                    es: "¿Qué pasó con los huevos de dinosaurio si el clima se puso muy frío?",
                    de: "Was passierte mit Dinosauriereiern, wenn das Wetter zu kalt wurde?",
                    nl: "Wat gebeurde er met dinosauruseieren als het weer te koud werd?"
                },
                options: [
                    { en: "The babies inside couldn't develop properly", es: "Los bebés adentro no podían desarrollarse apropiadamente", de: "Die Babys darin konnten sich nicht richtig entwickeln", nl: "De baby's erin konden zich niet goed ontwikkelen" },
                    { en: "They turned into ice cream", es: "Se convirtieron en helado", de: "Sie wurden zu Eiscreme", nl: "Ze werden ijs" },
                    { en: "They got stronger", es: "Se hicieron más fuertes", de: "Sie wurden stärker", nl: "Ze werden sterker" },
                    { en: "Cold weather helped eggs hatch faster", es: "El clima frío ayudó a que los huevos nacieran más rápido", de: "Kaltes Wetter half Eiern, schneller zu schlüpfen", nl: "Koud weer help eieren sneller uit te komen" }
                ],
                correct: 0,
                explanation: {
                    en: "If dinosaur eggs got too cold, the babies inside couldn't develop properly and might not survive! This is why parent dinosaurs worked so hard to keep their eggs warm by sitting on them, covering them with vegetation, or building nests in sunny spots. Temperature was very important for healthy baby dinosaurs to develop and hatch successfully.",
                    es: "Si los huevos de dinosaurio se ponían muy fríos, los bebés adentro no podían desarrollarse apropiadamente y podrían no sobrevivir. Por eso los dinosaurios padres trabajaban tan duro para mantener sus huevos calientes sentándose sobre ellos, cubriéndolos con vegetación o construyendo nidos en lugares soleados. La temperatura era muy importante para que los bebés dinosaurios sanos se desarrollaran y nacieran exitosamente.",
                    de: "Wenn Dinosauriereier zu kalt wurden, konnten sich die Babys darin nicht richtig entwickeln und überlebten möglicherweise nicht! Deshalb arbeiteten Eltern-Dinosaurier so hart daran, ihre Eier warm zu halten, indem sie darauf saßen, sie mit Vegetation bedeckten oder Nester an sonnigen Plätzen bauten. Temperatur war sehr wichtig für gesunde Baby-Dinosaurier, um sich zu entwickeln und erfolgreich zu schlüpfen.",
                    nl: "Als dinosauruseieren te koud werden, konden de baby's erin zich niet goed ontwikkelen en zouden misschien niet overleven! Daarom werkten ouder-dinosaurussen zo hard om hun eieren warm te houden door erop te zitten, ze te bedekken met vegetatie of nesten te bouwen op zonnige plekken. Temperatuur was heel belangrijk voor gezonde baby dinosaurussen om zich te ontwikkelen en succesvol uit te komen."
                }
            },
            {
                question: {
                    en: "What can we learn about taking care of our planet from studying dinosaurs?",
                    es: "¿Qué podemos aprender sobre cuidar nuestro planeta estudiando dinosaurios?",
                    de: "Was können wir über die Pflege unseres Planeten lernen, indem wir Dinosaurier studieren?",
                    nl: "Wat kunnen we leren over het zorgen voor onze planeet door dinosaurussen te bestuderen?"
                },
                options: [
                    { en: "How important it is to protect the environment and animals", es: "Qué tan importante es proteger el medio ambiente y los animales", de: "Wie wichtig es ist, die Umwelt und Tiere zu schützen", nl: "Hoe belangrijk het is om het milieu en dieren te beschermen" },
                    { en: "Dinosaurs will solve all our problems", es: "Los dinosaurios resolverán todos nuestros problemas", de: "Dinosaurier werden alle unsere Probleme lösen", nl: "Dinosaurussen zullen al onze problemen oplossen" },
                    { en: "We don't need to care about the environment", es: "No necesitamos cuidar el medio ambiente", de: "Wir müssen uns nicht um die Umwelt kümmern", nl: "We hoeven niet om het milieu te geven" },
                    { en: "Nothing about the environment", es: "Nada sobre el medio ambiente", de: "Nichts über die Umwelt", nl: "Niets over het milieu" }
                ],
                correct: 0,
                explanation: {
                    en: "Studying dinosaurs teaches us how environmental changes can affect all life on Earth! We learn that protecting habitats, preventing pollution, and caring for all creatures is very important. The dinosaur extinction shows us that when the environment changes too quickly, even the mightiest animals can disappear. This knowledge helps us work to protect our planet today!",
                    es: "Estudiar dinosaurios nos enseña cómo los cambios ambientales pueden afectar toda la vida en la Tierra. Aprendemos que proteger hábitats, prevenir la contaminación y cuidar todas las criaturas es muy importante. La extinción de los dinosaurios nos muestra que cuando el ambiente cambia muy rápidamente, incluso los animales más poderosos pueden desaparecer. ¡Este conocimiento nos ayuda a trabajar para proteger nuestro planeta hoy!",
                    de: "Das Studium von Dinosauriern lehrt uns, wie Umweltveränderungen alles Leben auf der Erde beeinflussen können! Wir lernen, dass der Schutz von Lebensräumen, die Vermeidung von Verschmutzung und die Fürsorge für alle Kreaturen sehr wichtig ist. Das Dinosaurier-Aussterben zeigt uns, dass wenn sich die Umwelt zu schnell ändert, sogar die mächtigsten Tiere verschwinden können. Dieses Wissen hilft uns, heute daran zu arbeiten, unseren Planeten zu schützen!",
                    nl: "Het bestuderen van dinosaurussen leert ons hoe milieuveranderingen al het leven op aarde kunnen beïnvloeden! We leren dat het beschermen van habitats, vervuiling voorkomen en voor alle wezens zorgen heel belangrijk is. De dinosaurus-extinctie toont ons dat wanneer het milieu te snel verandert, zelfs de machtigste dieren kunnen verdwijnen. Deze kennis helpt ons vandaag werken aan het beschermen van onze planeet!"
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/dinosaurs', level9);
    }
})();