// Early Dinosaurs Quiz - Level 1: Very Basic Knowledge for Children
(function() {
  const level1 = {
    name: {
      en: "Early Dinosaurs Level 1",
      es: "Dinosaurios Tempranos Nivel 1",
      de: "Frühe Dinosaurier Stufe 1",
      nl: "Vroege Dinosaurussen Level 1"
    },
    questions: [
      {
        question: {
          en: "What were the very first dinosaurs like?",
          es: "¿Cómo eran los primeros dinosaurios?",
          de: "Wie waren die allerersten Dinosaurier?",
          nl: "Hoe waren de allereerste dinosaurussen?"
        },
        options: [
          { en: "Small and walked on two legs", es: "Pequeños y caminaban en dos patas", de: "Klein und liefen auf zwei Beinen", nl: "Klein en liepen op twee benen" },
          { en: "Huge and very heavy", es: "Enormes y muy pesados", de: "Riesig und sehr schwer", nl: "Reusachtig en heel zwaar" },
          { en: "Could fly in the sky", es: "Podían volar en el cielo", de: "Konnten am Himmel fliegen", nl: "Konden vliegen in de lucht" },
          { en: "Lived in the water", es: "Vivían en el agua", de: "Lebten im Wasser", nl: "Leefden in het water" }
        ],
        correct: 0,
        explanation: {
          en: "The very first dinosaurs were small, about the size of a dog, and walked on their two back legs. They were much smaller than the giant dinosaurs we often think about!",
          es: "Los primeros dinosaurios eran pequeños, del tamaño de un perro, y caminaban sobre sus dos patas traseras. ¡Eran mucho más pequeños que los dinosaurios gigantes en los que solemos pensar!",
          de: "Die allerersten Dinosaurier waren klein, etwa so groß wie ein Hund, und liefen auf ihren beiden Hinterbeinen. Sie waren viel kleiner als die riesigen Dinosaurier, an die wir oft denken!",
          nl: "De allereerste dinosaurussen waren klein, ongeveer zo groot als een hond, en liepen op hun twee achterpoten. Ze waren veel kleiner dan de gigantische dinosaurussen waar we vaak aan denken!"
        }
      },
      {
        question: {
          en: "What did most early dinosaurs eat?",
          es: "¿Qué comían la mayoría de los primeros dinosaurios?",
          de: "Was fraßen die meisten frühen Dinosaurier?",
          nl: "Wat aten de meeste vroege dinosaurussen?"
        },
        options: [
          { en: "Other small animals and insects", es: "Otros animales pequeños e insectos", de: "Andere kleine Tiere und Insekten", nl: "Andere kleine dieren en insecten" },
          { en: "Only big fish", es: "Solo peces grandes", de: "Nur große Fische", nl: "Alleen grote vissen" },
          { en: "Ice cream and candy", es: "Helado y dulces", de: "Eis und Süßigkeiten", nl: "IJs en snoep" },
          { en: "Only tree leaves", es: "Solo hojas de árboles", de: "Nur Baumblätter", nl: "Alleen boombladen" }
        ],
        correct: 0,
        explanation: {
          en: "Most early dinosaurs were meat-eaters who hunted small animals, lizards, and insects. They had sharp teeth for catching their prey.",
          es: "La mayoría de los primeros dinosaurios eran carnívoros que cazaban animales pequeños, lagartos e insectos. Tenían dientes afilados para atrapar a su presa.",
          de: "Die meisten frühen Dinosaurier waren Fleischfresser, die kleine Tiere, Echsen und Insekten jagten. Sie hatten scharfe Zähne, um ihre Beute zu fangen.",
          nl: "De meeste vroege dinosaurussen waren vleeseters die kleine dieren, hagedissen en insecten jaagden. Ze hadden scherpe tanden om hun prooi te vangen."
        }
      },
      {
        question: {
          en: "When did the first dinosaurs live?",
          es: "¿Cuándo vivieron los primeros dinosaurios?",
          de: "Wann lebten die ersten Dinosaurier?",
          nl: "Wanneer leefden de eerste dinosaurussen?"
        },
        options: [
          { en: "A very, very long time ago", es: "Hace mucho, mucho tiempo", de: "Vor sehr, sehr langer Zeit", nl: "Heel, heel lang geleden" },
          { en: "100 years ago", es: "Hace 100 años", de: "Vor 100 Jahren", nl: "100 jaar geleden" },
          { en: "Last week", es: "La semana pasada", de: "Letzte Woche", nl: "Vorige week" },
          { en: "When your grandparents were kids", es: "Cuando tus abuelos eran niños", de: "Als deine Großeltern Kinder waren", nl: "Toen je grootouders kinderen waren" }
        ],
        correct: 0,
        explanation: {
          en: "The first dinosaurs lived about 230 million years ago! That's way, way before any people existed. Even before your great-great-great (lots of greats!) grandparents!",
          es: "¡Los primeros dinosaurios vivieron hace unos 230 millones de años! Eso fue mucho, mucho antes de que existiera cualquier persona. ¡Incluso antes que tus tatarata (muchos tataras!) abuelos!",
          de: "Die ersten Dinosaurier lebten vor etwa 230 Millionen Jahren! Das war lange, lange bevor es Menschen gab. Sogar vor deinen Ur-Ur-Ur- (viele Ur-!) Großeltern!",
          nl: "De eerste dinosaurussen leefden ongeveer 230 miljoen jaar geleden! Dat was heel, heel lang voordat er mensen bestonden. Zelfs voor je over-over-over- (heel veel over-!) grootouders!"
        }
      },
      {
        question: {
          en: "What is Eoraptor famous for?",
          es: "¿Por qué es famoso Eoraptor?",
          de: "Wofür ist Eoraptor berühmt?",
          nl: "Waarvoor is Eoraptor beroemd?"
        },
        options: [
          { en: "Being one of the very first dinosaurs", es: "Ser uno de los primeros dinosaurios", de: "Einer der allerersten Dinosaurier zu sein", nl: "Een van de allereerste dinosaurussen te zijn" },
          { en: "Being the biggest dinosaur ever", es: "Ser el dinosaurio más grande", de: "Der größte Dinosaurier aller Zeiten zu sein", nl: "De grootste dinosaurus ooit te zijn" },
          { en: "Having colorful feathers", es: "Tener plumas coloridas", de: "Bunte Federn zu haben", nl: "Kleurrijke veren te hebben" },
          { en: "Living in the ocean", es: "Vivir en el océano", de: "Im Ozean zu leben", nl: "In de oceaan te leven" }
        ],
        correct: 0,
        explanation: {
          en: "Eoraptor is special because it was one of the very first dinosaurs! Its name means 'dawn thief' because it lived at the dawn (beginning) of the dinosaur age.",
          es: "¡Eoraptor es especial porque fue uno de los primeros dinosaurios! Su nombre significa 'ladrón del amanecer' porque vivió en el amanecer (comienzo) de la era de los dinosaurios.",
          de: "Eoraptor ist besonders, weil er einer der allerersten Dinosaurier war! Sein Name bedeutet 'Morgendämmerungsdieb', weil er in der Morgendämmerung (dem Beginn) des Dinosaurierzeitalters lebte.",
          nl: "Eoraptor is bijzonder omdat hij een van de allereerste dinosaurussen was! Zijn naam betekent 'dageraaddief' omdat hij leefde in de dageraad (begin) van het dinosaurustijdperk."
        }
      },
      {
        question: {
          en: "How big was Eoraptor?",
          es: "¿Qué tan grande era Eoraptor?",
          de: "Wie groß war Eoraptor?",
          nl: "Hoe groot was Eoraptor?"
        },
        options: [
          { en: "About as big as a medium dog", es: "Del tamaño de un perro mediano", de: "Etwa so groß wie ein mittelgroßer Hund", nl: "Ongeveer zo groot als een middelgrote hond" },
          { en: "As big as a house", es: "Tan grande como una casa", de: "So groß wie ein Haus", nl: "Zo groot als een huis" },
          { en: "As small as a mouse", es: "Tan pequeño como un ratón", de: "So klein wie eine Maus", nl: "Zo klein als een muis" },
          { en: "As big as an elephant", es: "Tan grande como un elefante", de: "So groß wie ein Elefant", nl: "Zo groot als een olifant" }
        ],
        correct: 0,
        explanation: {
          en: "Eoraptor was about 3 feet long, which is about the size of a medium dog. It could probably sit in your living room if it were alive today!",
          es: "Eoraptor medía aproximadamente 3 pies de largo, que es del tamaño de un perro mediano. ¡Probablemente podría sentarse en tu sala de estar si estuviera vivo hoy!",
          de: "Eoraptor war etwa 3 Fuß lang, was etwa der Größe eines mittelgroßen Hundes entspricht. Er könnte wahrscheinlich in deinem Wohnzimmer sitzen, wenn er heute noch leben würde!",
          nl: "Eoraptor was ongeveer 1 meter lang, wat ongeveer de grootte van een middelgrote hond is. Hij zou waarschijnlijk in je woonkamer kunnen zitten als hij vandaag nog zou leven!"
        }
      },
      {
        question: {
          en: "What makes Herrerasaurus special?",
          es: "¿Qué hace especial a Herrerasaurus?",
          de: "Was macht Herrerasaurus besonders?",
          nl: "Wat maakt Herrerasaurus bijzonder?"
        },
        options: [
          { en: "It was one of the first big meat-eating dinosaurs", es: "Fue uno de los primeros grandes dinosaurios carnívoros", de: "Er war einer der ersten großen fleischfressenden Dinosaurier", nl: "Het was een van de eerste grote vleesetende dinosaurussen" },
          { en: "It could change colors like a chameleon", es: "Podía cambiar de color como un camaleón", de: "Er konnte wie ein Chamäleon die Farbe wechseln", nl: "Hij kon van kleur veranderen zoals een kameleon" },
          { en: "It had wings and could fly", es: "Tenía alas y podía volar", de: "Er hatte Flügel und konnte fliegen", nl: "Hij had vleugels en kon vliegen" },
          { en: "It only ate flowers", es: "Solo comía flores", de: "Er fraß nur Blumen", nl: "Hij at alleen bloemen" }
        ],
        correct: 0,
        explanation: {
          en: "Herrerasaurus was one of the first large predator dinosaurs. It was much bigger than Eoraptor and had strong jaws with sharp teeth for hunting other animals.",
          es: "Herrerasaurus fue uno de los primeros grandes dinosaurios depredadores. Era mucho más grande que Eoraptor y tenía mandíbulas fuertes con dientes afilados para cazar otros animales.",
          de: "Herrerasaurus war einer der ersten großen Raubdinosaurier. Er war viel größer als Eoraptor und hatte starke Kiefer mit scharfen Zähnen zum Jagen anderer Tiere.",
          nl: "Herrerasaurus was een van de eerste grote roofdierdinosaurussen. Hij was veel groter dan Eoraptor en had sterke kaken met scherpe tanden voor het jagen op andere dieren."
        }
      },
      {
        question: {
          en: "What did early dinosaurs use their long tails for?",
          es: "¿Para qué usaban los primeros dinosaurios sus colas largas?",
          de: "Wofür benutzten frühe Dinosaurier ihre langen Schwänze?",
          nl: "Waarvoor gebruikten vroege dinosaurussen hun lange staarten?"
        },
        options: [
          { en: "To help them balance when running", es: "Para ayudarles a equilibrarse al correr", de: "Um ihnen beim Laufen das Gleichgewicht zu halten", nl: "Om hen te helpen balanceren tijdens het rennen" },
          { en: "To fly like a helicopter", es: "Para volar como un helicóptero", de: "Um wie ein Hubschrauber zu fliegen", nl: "Om te vliegen als een helikopter" },
          { en: "To dig holes in the ground", es: "Para cavar hoyos en el suelo", de: "Um Löcher in den Boden zu graben", nl: "Om gaten in de grond te graven" },
          { en: "To pick fruit from trees", es: "Para recoger fruta de los árboles", de: "Um Früchte von Bäumen zu pflücken", nl: "Om fruit van bomen te plukken" }
        ],
        correct: 0,
        explanation: {
          en: "Early dinosaurs had long tails that worked like a tightrope walker's pole - they helped the dinosaur stay balanced when running fast on their two legs.",
          es: "Los primeros dinosaurios tenían colas largas que funcionaban como la pértiga de un equilibrista: ayudaban al dinosaurio a mantenerse equilibrado cuando corría rápido sobre sus dos patas.",
          de: "Frühe Dinosaurier hatten lange Schwänze, die wie die Stange eines Seiltänzers funktionierten - sie halfen dem Dinosaurier, beim schnellen Laufen auf seinen beiden Beinen das Gleichgewicht zu halten.",
          nl: "Vroege dinosaurussen hadden lange staarten die werkten als de stok van een koorddanser - ze hielpen de dinosaurus om in balans te blijven wanneer hij snel rende op zijn twee benen."
        }
      },
      {
        question: {
          en: "Where have scientists found early dinosaur fossils?",
          es: "¿Dónde han encontrado los científicos fósiles de dinosaurios tempranos?",
          de: "Wo haben Wissenschaftler frühe Dinosaurierfossilien gefunden?",
          nl: "Waar hebben wetenschappers vroege dinosaurusfossielen gevonden?"
        },
        options: [
          { en: "In Argentina, in South America", es: "En Argentina, en Sudamérica", de: "In Argentinien, in Südamerika", nl: "In Argentinië, in Zuid-Amerika" },
          { en: "At the North Pole", es: "En el Polo Norte", de: "Am Nordpol", nl: "Op de Noordpool" },
          { en: "In space", es: "En el espacio", de: "Im Weltraum", nl: "In de ruimte" },
          { en: "Under the ocean", es: "Bajo el océano", de: "Unter dem Ozean", nl: "Onder de oceaan" }
        ],
        correct: 0,
        explanation: {
          en: "Many of the earliest dinosaur fossils have been found in Argentina, especially in a place called the Ischigualasto Valley. Scientists have been digging there and finding amazing early dinosaurs!",
          es: "Muchos de los fósiles de dinosaurios más antiguos se han encontrado en Argentina, especialmente en un lugar llamado Valle de Ischigualasto. ¡Los científicos han estado excavando allí y encontrando dinosaurios tempranos increíbles!",
          de: "Viele der frühesten Dinosaurierfossilien wurden in Argentinien gefunden, besonders in einem Ort namens Ischigualasto-Tal. Wissenschaftler haben dort gegraben und erstaunliche frühe Dinosaurier gefunden!",
          nl: "Veel van de vroegste dinosaurusfossielen zijn gevonden in Argentinië, vooral op een plaats genaamd de Ischigualasto-vallei. Wetenschappers hebben daar gegraven en geweldige vroege dinosaurussen gevonden!"
        }
      },
      {
        question: {
          en: "What does the name 'Coelophysis' mean?",
          es: "¿Qué significa el nombre 'Coelophysis'?",
          de: "Was bedeutet der Name 'Coelophysis'?",
          nl: "Wat betekent de naam 'Coelophysis'?"
        },
        options: [
          { en: "Hollow form", es: "Forma hueca", de: "Hohle Form", nl: "Holle vorm" },
          { en: "Big monster", es: "Monstruo grande", de: "Großes Monster", nl: "Groot monster" },
          { en: "Happy dinosaur", es: "Dinosaurio feliz", de: "Glücklicher Dinosaurier", nl: "Blije dinosaurus" },
          { en: "Fast runner", es: "Corredor rápido", de: "Schneller Läufer", nl: "Snelle renner" }
        ],
        correct: 0,
        explanation: {
          en: "Coelophysis means 'hollow form' because this dinosaur had hollow bones, just like birds do today! This made them lighter and helped them run faster.",
          es: "Coelophysis significa 'forma hueca' porque este dinosaurio tenía huesos huecos, ¡igual que las aves de hoy! Esto los hacía más ligeros y les ayudaba a correr más rápido.",
          de: "Coelophysis bedeutet 'hohle Form', weil dieser Dinosaurier hohle Knochen hatte, genau wie Vögel heute! Das machte sie leichter und half ihnen, schneller zu laufen.",
          nl: "Coelophysis betekent 'holle vorm' omdat deze dinosaurus holle botten had, net zoals vogels vandaag de dag! Dit maakte hen lichter en hielp hen sneller te rennen."
        }
      },
      {
        question: {
          en: "What was the world like when early dinosaurs lived?",
          es: "¿Cómo era el mundo cuando vivían los primeros dinosaurios?",
          de: "Wie war die Welt, als frühe Dinosaurier lebten?",
          nl: "Hoe was de wereld toen vroege dinosaurussen leefden?"
        },
        options: [
          { en: "Very hot and dry with no grass", es: "Muy caliente y seco sin hierba", de: "Sehr heiß und trocken ohne Gras", nl: "Erg heet en droog zonder gras" },
          { en: "Cold and snowy everywhere", es: "Frío y nevado en todas partes", de: "Kalt und verschneit überall", nl: "Koud en besneeeuwd overal" },
          { en: "Exactly like today", es: "Exactamente como hoy", de: "Genau wie heute", nl: "Precies zoals vandaag" },
          { en: "Full of cities and cars", es: "Lleno de ciudades y coches", de: "Voller Städte und Autos", nl: "Vol steden en auto's" }
        ],
        correct: 0,
        explanation: {
          en: "When early dinosaurs lived, the world was much hotter and drier than today. There was no grass yet - instead there were ferns and other ancient plants everywhere!",
          es: "Cuando vivían los primeros dinosaurios, el mundo era mucho más caliente y seco que hoy. Aún no había hierba: ¡en su lugar había helechos y otras plantas antiguas por todas partes!",
          de: "Als frühe Dinosaurier lebten, war die Welt viel heißer und trockener als heute. Es gab noch kein Gras - stattdessen gab es überall Farne und andere uralte Pflanzen!",
          nl: "Toen vroege dinosaurussen leefden, was de wereld veel heter en droger dan vandaag. Er was nog geen gras - in plaats daarvan waren er overal varens en andere oude planten!"
        }
      },
      {
        question: {
          en: "How do we know about early dinosaurs?",
          es: "¿Cómo sabemos sobre los primeros dinosaurios?",
          de: "Wie wissen wir über frühe Dinosaurier Bescheid?",
          nl: "Hoe weten we over vroege dinosaurussen?"
        },
        options: [
          { en: "Scientists find their old bones in rocks", es: "Los científicos encuentran sus huesos viejos en rocas", de: "Wissenschaftler finden ihre alten Knochen in Steinen", nl: "Wetenschappers vinden hun oude botten in rotsen" },
          { en: "We have photos of them", es: "Tenemos fotos de ellos", de: "Wir haben Fotos von ihnen", nl: "We hebben foto's van hen" },
          { en: "They left us letters", es: "Nos dejaron cartas", de: "Sie haben uns Briefe hinterlassen", nl: "Ze hebben ons brieven achtergelaten" },
          { en: "We saw them on TV", es: "Los vimos en la televisión", de: "Wir haben sie im Fernsehen gesehen", nl: "We zagen ze op TV" }
        ],
        correct: 0,
        explanation: {
          en: "Scientists learn about early dinosaurs by finding their fossils - old bones that turned into stone over millions of years. These fossils tell us amazing stories about how dinosaurs lived!",
          es: "Los científicos aprenden sobre los primeros dinosaurios encontrando sus fósiles: huesos viejos que se convirtieron en piedra durante millones de años. ¡Estos fósiles nos cuentan historias increíbles sobre cómo vivían los dinosaurios!",
          de: "Wissenschaftler lernen über frühe Dinosaurier, indem sie ihre Fossilien finden - alte Knochen, die über Millionen von Jahren zu Stein wurden. Diese Fossilien erzählen uns erstaunliche Geschichten darüber, wie Dinosaurier lebten!",
          nl: "Wetenschappers leren over vroege dinosaurussen door hun fossielen te vinden - oude botten die over miljoenen jaren zijn veranderd in steen. Deze fossielen vertellen ons geweldige verhalen over hoe dinosaurussen leefden!"
        }
      },
      {
        question: {
          en: "What happened to early dinosaurs?",
          es: "¿Qué pasó con los primeros dinosaurios?",
          de: "Was ist mit den frühen Dinosauriern passiert?",
          nl: "Wat gebeurde er met de vroege dinosaurussen?"
        },
        options: [
          { en: "They grew into bigger, different dinosaurs over time", es: "Se convirtieron en dinosaurios más grandes y diferentes con el tiempo", de: "Sie entwickelten sich über die Zeit zu größeren, anderen Dinosauriern", nl: "Ze groeiden uit tot grotere, verschillende dinosaurussen in de loop van de tijd" },
          { en: "They all became pets", es: "Todos se volvieron mascotas", de: "Sie wurden alle zu Haustieren", nl: "Ze werden allemaal huisdieren" },
          { en: "They flew to the moon", es: "Volaron a la luna", de: "Sie flogen zum Mond", nl: "Ze vlogen naar de maan" },
          { en: "They turned into trees", es: "Se convirtieron en árboles", de: "Sie verwandelten sich in Bäume", nl: "Ze veranderden in bomen" }
        ],
        correct: 0,
        explanation: {
          en: "Over millions of years, early dinosaurs changed and grew into many different kinds of dinosaurs - some became giant long-necked dinosaurs, others became the famous T-Rex!",
          es: "Durante millones de años, los primeros dinosaurios cambiaron y se convirtieron en muchos tipos diferentes de dinosaurios: ¡algunos se volvieron dinosaurios gigantes de cuello largo, otros se convirtieron en el famoso T-Rex!",
          de: "Über Millionen von Jahren veränderten sich frühe Dinosaurier und entwickelten sich zu vielen verschiedenen Arten von Dinosauriern - einige wurden riesige langhalsige Dinosaurier, andere wurden der berühmte T-Rex!",
          nl: "Gedurende miljoenen jaren veranderden vroege dinosaurussen en groeiden uit tot veel verschillende soorten dinosaurussen - sommige werden gigantische langnek dinosaurussen, anderen werden de beroemde T-Rex!"
        }
      },
      {
        question: {
          en: "What's special about Plateosaurus?",
          es: "¿Qué tiene de especial Plateosaurus?",
          de: "Was ist besonders an Plateosaurus?",
          nl: "Wat is bijzonder aan Plateosaurus?"
        },
        options: [
          { en: "It was one of the first plant-eating dinosaurs", es: "Fue uno de los primeros dinosaurios comedores de plantas", de: "Er war einer der ersten pflanzenfressenden Dinosaurier", nl: "Het was een van de eerste plantenetende dinosaurussen" },
          { en: "It had polka dots", es: "Tenía lunares", de: "Er hatte Tupfen", nl: "Hij had stippen" },
          { en: "It could talk", es: "Podía hablar", de: "Er konnte sprechen", nl: "Hij kon praten" },
          { en: "It lived underwater", es: "Vivía bajo el agua", de: "Er lebte unter Wasser", nl: "Hij leefde onder water" }
        ],
        correct: 0,
        explanation: {
          en: "Plateosaurus was special because it was one of the first large dinosaurs that ate plants instead of meat. It had a long neck to reach high leaves on trees!",
          es: "Plateosaurus era especial porque fue uno de los primeros grandes dinosaurios que comían plantas en lugar de carne. ¡Tenía un cuello largo para alcanzar las hojas altas de los árboles!",
          de: "Plateosaurus war besonders, weil er einer der ersten großen Dinosaurier war, die Pflanzen statt Fleisch fraßen. Er hatte einen langen Hals, um hohe Blätter an Bäumen zu erreichen!",
          nl: "Plateosaurus was bijzonder omdat hij een van de eerste grote dinosaurussen was die planten aten in plaats van vlees. Hij had een lange nek om hoge bladeren in bomen te bereiken!"
        }
      },
      {
        question: {
          en: "How long ago did early dinosaurs first appear?",
          es: "¿Hace cuánto tiempo aparecieron por primera vez los primeros dinosaurios?",
          de: "Wie lange ist es her, dass frühe Dinosaurier zum ersten Mal auftauchten?",
          nl: "Hoe lang geleden verschenen vroege dinosaurussen voor het eerst?"
        },
        options: [
          { en: "More than 200 million years ago", es: "Hace más de 200 millones de años", de: "Vor mehr als 200 Millionen Jahren", nl: "Meer dan 200 miljoen jaar geleden" },
          { en: "1000 years ago", es: "Hace 1000 años", de: "Vor 1000 Jahren", nl: "1000 jaar geleden" },
          { en: "50 years ago", es: "Hace 50 años", de: "Vor 50 Jahren", nl: "50 jaar geleden" },
          { en: "Yesterday", es: "Ayer", de: "Gestern", nl: "Gisteren" }
        ],
        correct: 0,
        explanation: {
          en: "Early dinosaurs first appeared more than 200 million years ago during a time called the Triassic period. That's so long ago that it's hard to imagine!",
          es: "Los primeros dinosaurios aparecieron por primera vez hace más de 200 millones de años durante un tiempo llamado período Triásico. ¡Eso fue hace tanto tiempo que es difícil de imaginar!",
          de: "Frühe Dinosaurier tauchten zum ersten Mal vor mehr als 200 Millionen Jahren während einer Zeit namens Trias-Periode auf. Das ist so lange her, dass es schwer vorstellbar ist!",
          nl: "Vroege dinosaurussen verschenen voor het eerst meer dan 200 miljoen jaar geleden tijdens een tijd die de Trias-periode wordt genoemd. Dat is zo lang geleden dat het moeilijk voor te stellen is!"
        }
      },
      {
        question: {
          en: "Why were early dinosaurs important?",
          es: "¿Por qué eran importantes los primeros dinosaurios?",
          de: "Warum waren frühe Dinosaurier wichtig?",
          nl: "Waarom waren vroege dinosaurussen belangrijk?"
        },
        options: [
          { en: "They were the beginning of all dinosaurs", es: "Fueron el comienzo de todos los dinosaurios", de: "Sie waren der Beginn aller Dinosaurier", nl: "Ze waren het begin van alle dinosaurussen" },
          { en: "They built the first cities", es: "Construyeron las primeras ciudades", de: "Sie bauten die ersten Städte", nl: "Ze bouwden de eerste steden" },
          { en: "They invented fire", es: "Inventaron el fuego", de: "Sie erfanden das Feuer", nl: "Ze vonden vuur uit" },
          { en: "They could predict the weather", es: "Podían predecir el clima", de: "Sie konnten das Wetter vorhersagen", nl: "Ze konden het weer voorspellen" }
        ],
        correct: 0,
        explanation: {
          en: "Early dinosaurs were very important because they were the beginning of the dinosaur family tree. All the famous dinosaurs we know - like T-Rex and Brontosaurus - came from these early dinosaurs!",
          es: "Los primeros dinosaurios fueron muy importantes porque fueron el comienzo del árbol genealógico de los dinosaurios. ¡Todos los dinosaurios famosos que conocemos, como T-Rex y Brontosaurus, vinieron de estos primeros dinosaurios!",
          de: "Frühe Dinosaurier waren sehr wichtig, weil sie der Beginn des Dinosaurier-Stammbaums waren. Alle berühmten Dinosaurier, die wir kennen - wie T-Rex und Brontosaurus - stammten von diesen frühen Dinosauriern ab!",
          nl: "Vroege dinosaurussen waren erg belangrijk omdat ze het begin waren van de dinosaurusstamboom. Alle beroemde dinosaurussen die we kennen - zoals T-Rex en Brontosaurus - kwamen voort uit deze vroege dinosaurussen!"
        }
      },
      {
        question: {
          en: "What did early dinosaur teeth look like?",
          es: "¿Cómo eran los dientes de los primeros dinosaurios?",
          de: "Wie sahen die Zähne früher Dinosaurier aus?",
          nl: "Hoe zagen de tanden van vroege dinosaurussen eruit?"
        },
        options: [
          { en: "Small and sharp for catching prey", es: "Pequeños y afilados para atrapar presas", de: "Klein und scharf zum Beutefangen", nl: "Klein en scherp voor het vangen van prooi" },
          { en: "Huge and flat like dinner plates", es: "Enormes y planos como platos de cena", de: "Riesig und flach wie Teller", nl: "Reusachtig en plat als dinerborden" },
          { en: "Made of gold", es: "Hechos de oro", de: "Aus Gold gemacht", nl: "Gemaakt van goud" },
          { en: "Invisible", es: "Invisibles", de: "Unsichtbar", nl: "Onzichtbaar" }
        ],
        correct: 0,
        explanation: {
          en: "Most early dinosaurs had small, sharp teeth that were perfect for catching and eating small animals and insects. These teeth were like tiny daggers!",
          es: "La mayoría de los primeros dinosaurios tenían dientes pequeños y afilados que eran perfectos para atrapar y comer animales pequeños e insectos. ¡Estos dientes eran como pequeñas dagas!",
          de: "Die meisten frühen Dinosaurier hatten kleine, scharfe Zähne, die perfekt zum Fangen und Fressen kleiner Tiere und Insekten waren. Diese Zähne waren wie winzige Dolche!",
          nl: "De meeste vroege dinosaurussen hadden kleine, scherpe tanden die perfect waren voor het vangen en eten van kleine dieren en insecten. Deze tanden waren als kleine dolkjes!"
        }
      },
      {
        question: {
          en: "What could early dinosaurs do that made them special?",
          es: "¿Qué podían hacer los primeros dinosaurios que los hacía especiales?",
          de: "Was konnten frühe Dinosaurier tun, was sie besonders machte?",
          nl: "Wat konden vroege dinosaurussen doen dat hen bijzonder maakte?"
        },
        options: [
          { en: "Run fast on their back legs", es: "Correr rápido sobre sus patas traseras", de: "Schnell auf ihren Hinterbeinen laufen", nl: "Snel rennen op hun achterpoten" },
          { en: "Read books", es: "Leer libros", de: "Bücher lesen", nl: "Boeken lezen" },
          { en: "Use computers", es: "Usar computadoras", de: "Computer benutzen", nl: "Computers gebruiken" },
          { en: "Drive cars", es: "Conducir coches", de: "Autos fahren", nl: "Auto's rijden" }
        ],
        correct: 0,
        explanation: {
          en: "Early dinosaurs were special because they could run really fast on their two back legs. This helped them catch food and escape from danger better than other animals of their time!",
          es: "Los primeros dinosaurios eran especiales porque podían correr muy rápido sobre sus dos patas traseras. ¡Esto les ayudaba a atrapar comida y escapar del peligro mejor que otros animales de su época!",
          de: "Frühe Dinosaurier waren besonders, weil sie wirklich schnell auf ihren beiden Hinterbeinen laufen konnten. Das half ihnen, Nahrung zu fangen und der Gefahr besser zu entkommen als andere Tiere ihrer Zeit!",
          nl: "Vroege dinosaurussen waren bijzonder omdat ze heel snel konden rennen op hun twee achterpoten. Dit hielp hen voedsel te vangen en beter aan gevaar te ontsnappen dan andere dieren van hun tijd!"
        }
      },
      {
        question: {
          en: "What would you see if you could visit the world of early dinosaurs?",
          es: "¿Qué verías si pudieras visitar el mundo de los primeros dinosaurios?",
          de: "Was würdest du sehen, wenn du die Welt der frühen Dinosaurier besuchen könntest?",
          nl: "Wat zou je zien als je de wereld van vroege dinosaurussen kon bezoeken?"
        },
        options: [
          { en: "Small dinosaurs running around with lots of ferns and no flowers", es: "Pequeños dinosaurios corriendo con muchos helechos y sin flores", de: "Kleine Dinosaurier, die mit vielen Farnen und ohne Blumen herumlaufen", nl: "Kleine dinosaurussen die rondrennen met veel varens en geen bloemen" },
          { en: "Dinosaurs wearing clothes and hats", es: "Dinosaurios vistiendo ropa y sombreros", de: "Dinosaurier, die Kleidung und Hüte tragen", nl: "Dinosaurussen die kleren en hoeden dragen" },
          { en: "Dinosaurs playing video games", es: "Dinosaurios jugando videojuegos", de: "Dinosaurier, die Videospiele spielen", nl: "Dinosaurussen die videospellen spelen" },
          { en: "Dinosaurs going to school", es: "Dinosaurios yendo a la escuela", de: "Dinosaurier, die zur Schule gehen", nl: "Dinosaurussen die naar school gaan" }
        ],
        correct: 0,
        explanation: {
          en: "If you could visit the world of early dinosaurs, you'd see small, quick dinosaurs running around in a world full of ferns and ancient trees. There were no flowers or grass yet - and definitely no people!",
          es: "Si pudieras visitar el mundo de los primeros dinosaurios, verías pequeños dinosaurios rápidos corriendo en un mundo lleno de helechos y árboles antiguos. ¡Aún no había flores ni hierba, y definitivamente no había gente!",
          de: "Wenn du die Welt der frühen Dinosaurier besuchen könntest, würdest du kleine, schnelle Dinosaurier sehen, die in einer Welt voller Farne und uralter Bäume herumlaufen. Es gab noch keine Blumen oder Gras - und definitiv keine Menschen!",
          nl: "Als je de wereld van vroege dinosaurussen kon bezoeken, zou je kleine, snelle dinosaurussen zien die rondrennen in een wereld vol varens en oude bomen. Er waren nog geen bloemen of gras - en zeker geen mensen!"
        }
      },
      {
        question: {
          en: "What was special about early dinosaur hands?",
          es: "¿Qué tenían de especial las manos de los primeros dinosaurios?",
          de: "Was war besonders an den Händen früher Dinosaurier?",
          nl: "Wat was bijzonder aan de handen van vroege dinosaurussen?"
        },
        options: [
          { en: "They had claws like a cat", es: "Tenían garras como un gato", de: "Sie hatten Krallen wie eine Katze", nl: "Ze hadden klauwen zoals een kat" },
          { en: "They wore gloves", es: "Usaban guantes", de: "Sie trugen Handschuhe", nl: "Ze droegen handschoenen" },
          { en: "They had no hands", es: "No tenían manos", de: "Sie hatten keine Hände", nl: "Ze hadden geen handen" },
          { en: "They could hold pencils", es: "Podían sostener lápices", de: "Sie konnten Bleistifte halten", nl: "Ze konden potloden vasthouden" }
        ],
        correct: 0,
        explanation: {
          en: "Early dinosaurs had hands with sharp claws, just like cats do today! They used these claws to grab their food and defend themselves.",
          es: "¡Los primeros dinosaurios tenían manos con garras afiladas, como los gatos de hoy! Usaban estas garras para agarrar su comida y defenderse.",
          de: "Frühe Dinosaurier hatten Hände mit scharfen Krallen, genau wie Katzen heute! Sie benutzten diese Krallen, um ihre Nahrung zu greifen und sich zu verteidigen.",
          nl: "Vroege dinosaurussen hadden handen met scherpe klauwen, net zoals katten vandaag de dag! Ze gebruikten deze klauwen om hun voedsel te grijpen en zichzelf te verdedigen."
        }
      },
      {
        question: {
          en: "What sound do you think early dinosaurs made?",
          es: "¿Qué sonido crees que hacían los primeros dinosaurios?",
          de: "Welchen Laut denkst du, machten frühe Dinosaurier?",
          nl: "Welk geluid denk je dat vroege dinosaurussen maakten?"
        },
        options: [
          { en: "Hissing and chirping like birds", es: "Silbando y piando como pájaros", de: "Zischend und zwitschernd wie Vögel", nl: "Sissend en tjilpend zoals vogels" },
          { en: "They could sing opera", es: "Podían cantar ópera", de: "Sie konnten Oper singen", nl: "Ze konden opera zingen" },
          { en: "They were completely silent", es: "Estaban completamente silenciosos", de: "Sie waren völlig still", nl: "Ze waren volledig stil" },
          { en: "They talked like people", es: "Hablaban como personas", de: "Sie sprachen wie Menschen", nl: "Ze praatten zoals mensen" }
        ],
        correct: 0,
        explanation: {
          en: "Scientists think early dinosaurs probably made sounds like hissing and chirping, similar to birds and crocodiles today. They might have used these sounds to talk to each other!",
          es: "Los científicos piensan que los primeros dinosaurios probablemente hacían sonidos como silbidos y piar, similares a las aves y cocodrilos de hoy. ¡Podrían haber usado estos sonidos para hablar entre ellos!",
          de: "Wissenschaftler denken, dass frühe Dinosaurier wahrscheinlich Laute wie Zischen und Zwitschern machten, ähnlich wie Vögel und Krokodile heute. Sie könnten diese Laute benutzt haben, um miteinander zu sprechen!",
          nl: "Wetenschappers denken dat vroege dinosaurussen waarschijnlijk geluiden maakten zoals sissen en tjilpen, vergelijkbaar met vogels en krokodillen vandaag. Ze hebben deze geluiden misschien gebruikt om met elkaar te praten!"
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