// True/False Questions - Animals & Nature (Easy-Medium)
// Wildlife facts, animal myths, nature trivia
(function() {

  const animalsNatureQuestions = [
    {
      id: 'an_1',
      question: {
        en: "Goldfish have a memory span of only 3 seconds.",
        es: "Los peces dorados tienen una memoria de solo 3 segundos.",
        de: "Goldfische haben eine Gedächtnisspanne von nur 3 Sekunden.",
        nl: "Goudvissen hebben een geheugen van slechts 3 seconden."
      },
      isTrue: false,
      explanation: {
        en: "Goldfish can remember things for months, not seconds. This is a persistent myth.",
        es: "Los peces dorados pueden recordar cosas durante meses, no segundos.",
        de: "Goldfische können sich monatelang an Dinge erinnern, nicht nur Sekunden.",
        nl: "Goudvissen kunnen zich maanden lang dingen herinneren, niet seconden."
      }
    },
    {
      id: 'an_2',
      question: {
        en: "Bulls are angered by the color red.",
        es: "Los toros se enfadan con el color rojo.",
        de: "Stiere werden vom Rot wütend.",
        nl: "Stieren worden boos van de kleur rood."
      },
      isTrue: false,
      explanation: {
        en: "Bulls are colorblind to red. They react to the movement of the cape, not its color.",
        es: "Los toros no ven el color rojo. Reaccionan al movimiento de la capa, no al color.",
        de: "Stiere sind farbenblind für Rot. Sie reagieren auf die Bewegung, nicht die Farbe.",
        nl: "Stieren zijn kleurenblind voor rood. Ze reageren op de beweging, niet de kleur."
      }
    },
    {
      id: 'an_3',
      question: {
        en: "Bananas grow on trees.",
        es: "Los plátanos crecen en árboles.",
        de: "Bananen wachsen auf Bäumen.",
        nl: "Bananen groeien aan bomen."
      },
      isTrue: false,
      explanation: {
        en: "Bananas grow on large herbaceous plants, not trees. They're the world's largest herbs.",
        es: "Los plátanos crecen en plantas herbáceas grandes, no en árboles.",
        de: "Bananen wachsen an großen krautigen Pflanzen, nicht an Bäumen.",
        nl: "Bananen groeien aan grote kruidachtige planten, niet aan bomen."
      }
    },
    {
      id: 'an_4',
      question: {
        en: "Bats are blind.",
        es: "Los murciélagos son ciegos.",
        de: "Fledermäuse sind blind.",
        nl: "Vleermuizen zijn blind."
      },
      isTrue: false,
      explanation: {
        en: "Bats can see quite well. They use echolocation to navigate in the dark, but they're not blind.",
        es: "Los murciélagos pueden ver bastante bien. Usan ecolocalización para navegar en la oscuridad, pero no son ciegos.",
        de: "Fledermäuse können recht gut sehen. Sie nutzen Echoortung zur Navigation im Dunkeln, sind aber nicht blind.",
        nl: "Vleermuizen kunnen redelijk goed zien. Ze gebruiken echolocatie om in het donker te navigeren, maar zijn niet blind."
      }
    },
    {
      id: 'an_5',
      question: {
        en: "Sharks must keep swimming to stay alive.",
        es: "Los tiburones deben seguir nadando para mantenerse vivos.",
        de: "Haie müssen ständig schwimmen, um am Leben zu bleiben.",
        nl: "Haaien moeten blijven zwemmen om in leven te blijven."
      },
      isTrue: false,
      explanation: {
        en: "Some shark species can rest on the ocean floor and pump water over their gills.",
        es: "Algunas especies de tiburones pueden descansar en el fondo del océano y bombear agua sobre sus branquias.",
        de: "Einige Haiarten können auf dem Meeresboden ruhen und Wasser über ihre Kiemen pumpen.",
        nl: "Sommige haaiensoorten kunnen op de oceaanbodem rusten en water over hun kieuwen pompen."
      }
    },
    {
      id: 'an_6',
      question: {
        en: "Elephants are afraid of mice.",
        es: "Los elefantes tienen miedo de los ratones.",
        de: "Elefanten haben Angst vor Mäusen.",
        nl: "Olifanten zijn bang voor muizen."
      },
      isTrue: false,
      explanation: {
        en: "There's no scientific evidence that elephants fear mice. They may be startled by sudden movements.",
        es: "No hay evidencia científica de que los elefantes teman a los ratones. Pueden asustarse por movimientos repentinos.",
        de: "Es gibt keine wissenschaftlichen Beweise dafür, dass Elefanten Angst vor Mäusen haben.",
        nl: "Er is geen wetenschappelijk bewijs dat olifanten bang zijn voor muizen. Ze kunnen schrikken van plotselinge bewegingen."
      }
    },
    {
      id: 'an_7',
      question: {
        en: "Ostriches bury their heads in the sand when scared.",
        es: "Los avestruces entierran la cabeza en la arena cuando se asustan.",
        de: "Strauße stecken bei Gefahr den Kopf in den Sand.",
        nl: "Struisvogels steken hun kop in het zand wanneer ze bang zijn."
      },
      isTrue: false,
      explanation: {
        en: "Ostriches don't bury their heads. They may lay their heads low to hide or dig holes for eggs.",
        es: "Los avestruces no entierran la cabeza. Pueden bajarla para esconderse o cavar agujeros para huevos.",
        de: "Strauße vergraben ihre Köpfe nicht. Sie legen sie tief, um sich zu verstecken oder Löcher für Eier zu graben.",
        nl: "Struisvogels begraven hun kop niet. Ze kunnen hem laag houden om te verstoppen of gaten graven voor eieren."
      }
    },
    {
      id: 'an_8',
      question: {
        en: "A dog's mouth is cleaner than a human's.",
        es: "La boca de un perro es más limpia que la de un humano.",
        de: "Das Maul eines Hundes ist sauberer als der menschliche Mund.",
        nl: "De bek van een hond is schoner dan die van een mens."
      },
      isTrue: false,
      explanation: {
        en: "Dog mouths contain many bacteria, just different types than humans. Neither is 'cleaner'.",
        es: "Las bocas de los perros contienen muchas bacterias, solo tipos diferentes a los humanos.",
        de: "Hundemäuler enthalten viele Bakterien, nur andere Arten als beim Menschen.",
        nl: "Hondenmonden bevatten veel bacteriën, alleen andere soorten dan bij mensen."
      }
    },
    {
      id: 'an_9',
      question: {
        en: "Camels store water in their humps.",
        es: "Los camellos almacenan agua en sus jorobas.",
        de: "Kamele speichern Wasser in ihren Höckern.",
        nl: "Kamelen slaan water op in hun bulten."
      },
      isTrue: false,
      explanation: {
        en: "Camel humps store fat, not water. The fat can be converted to energy and water when needed.",
        es: "Las jorobas de los camellos almacenan grasa, no agua. La grasa se puede convertir en energía y agua.",
        de: "Kamelhöcker speichern Fett, kein Wasser. Das Fett kann bei Bedarf in Energie und Wasser umgewandelt werden.",
        nl: "Kameelbulten slaan vet op, geen water. Het vet kan worden omgezet in energie en water wanneer nodig."
      }
    },
    {
      id: 'an_10',
      question: {
        en: "Chameleons change color to match their surroundings.",
        es: "Los camaleones cambian de color para coincidir con su entorno.",
        de: "Chamäleons ändern ihre Farbe, um sich ihrer Umgebung anzupassen.",
        nl: "Kameleons veranderen van kleur om bij hun omgeving te passen."
      },
      isTrue: false,
      explanation: {
        en: "Chameleons change color mainly for communication and temperature regulation, not camouflage.",
        es: "Los camaleones cambian de color principalmente para comunicarse y regular la temperatura, no para camuflarse.",
        de: "Chamäleons ändern ihre Farbe hauptsächlich zur Kommunikation und Temperaturregulierung, nicht zur Tarnung.",
        nl: "Kameleons veranderen van kleur voornamelijk voor communicatie en temperatuurregulatie, niet voor camouflage."
      }
    },
    {
      id: 'an_11',
      question: {
        en: "Penguins mate for life.",
        es: "Los pingüinos se aparean de por vida.",
        de: "Pinguine paaren sich fürs Leben.",
        nl: "Pinguïns paren voor het leven."
      },
      isTrue: true,
      explanation: {
        en: "Most penguin species are monogamous and stay with the same partner for their entire lives.",
        es: "La mayoría de las especies de pingüinos son monógamas y permanecen con la misma pareja toda su vida.",
        de: "Die meisten Pinguinarten sind monogam und bleiben ihr ganzes Leben bei demselben Partner.",
        nl: "De meeste pinguïnsoorten zijn monogaam en blijven hun hele leven bij dezelfde partner."
      }
    },
    {
      id: 'an_12',
      question: {
        en: "Polar bears are left-handed.",
        es: "Los osos polares son zurdos.",
        de: "Eisbären sind Linkshänder.",
        nl: "IJsberen zijn linkshandig."
      },
      isTrue: false,
      explanation: {
        en: "This is a myth. Polar bears show no preference for using their left or right paw.",
        es: "Esto es un mito. Los osos polares no muestran preferencia por usar su pata izquierda o derecha.",
        de: "Dies ist ein Mythos. Eisbären zeigen keine Präferenz für die linke oder rechte Pfote.",
        nl: "Dit is een mythe. IJsberen tonen geen voorkeur voor het gebruik van hun linker- of rechterpoot."
      }
    },
    {
      id: 'an_13',
      question: {
        en: "Koalas sleep up to 22 hours a day.",
        es: "Los koalas duermen hasta 22 horas al día.",
        de: "Koalas schlafen bis zu 22 Stunden am Tag.",
        nl: "Koala's slapen tot 22 uur per dag."
      },
      isTrue: true,
      explanation: {
        en: "Koalas need lots of rest because eucalyptus leaves are low in nutrition and hard to digest.",
        es: "Los koalas necesitan mucho descanso porque las hojas de eucalipto son bajas en nutrición y difíciles de digerir.",
        de: "Koalas brauchen viel Ruhe, weil Eukalyptusblätter nährstoffarm und schwer verdaulich sind.",
        nl: "Koala's hebben veel rust nodig omdat eucalyptusbladeren weinig voeding bevatten en moeilijk te verteren zijn."
      }
    },
    {
      id: 'an_14',
      question: {
        en: "Dolphins sleep with one eye open.",
        es: "Los delfines duermen con un ojo abierto.",
        de: "Delfine schlafen mit einem offenen Auge.",
        nl: "Dolfijnen slapen met één oog open."
      },
      isTrue: true,
      explanation: {
        en: "Dolphins shut down one hemisphere of their brain at a time, keeping one eye open to watch for predators.",
        es: "Los delfines apagan un hemisferio de su cerebro a la vez, manteniendo un ojo abierto para vigilar depredadores.",
        de: "Delfine schalten jeweils eine Gehirnhälfte ab und halten ein Auge offen, um nach Raubtieren Ausschau zu halten.",
        nl: "Dolfijnen schakelen één hersenhelft tegelijk uit en houden één oog open om op roofdieren te letten."
      }
    },
    {
      id: 'an_15',
      question: {
        en: "A group of flamingos is called a 'flamboyance'.",
        es: "Un grupo de flamencos se llama 'flamboyance'.",
        de: "Eine Gruppe von Flamingos wird 'Flamboyance' genannt.",
        nl: "Een groep flamingo's wordt een 'flamboyance' genoemd."
      },
      isTrue: true,
      explanation: {
        en: "The collective noun for flamingos is indeed 'flamboyance', though 'flock' is also used.",
        es: "El sustantivo colectivo para flamencos es 'flamboyance', aunque también se usa 'flock'.",
        de: "Das Kollektivnomen für Flamingos ist tatsächlich 'Flamboyance', obwohl auch 'Flock' verwendet wird.",
        nl: "Het collectieve zelfstandig naamwoord voor flamingo's is inderdaad 'flamboyance', hoewel 'flock' ook wordt gebruikt."
      }
    },
    {
      id: 'an_16',
      question: {
        en: "Hummingbirds are the only birds that can fly backwards.",
        es: "Los colibríes son las únicas aves que pueden volar hacia atrás.",
        de: "Kolibris sind die einzigen Vögel, die rückwärts fliegen können.",
        nl: "Kolibries zijn de enige vogels die achteruit kunnen vliegen."
      },
      isTrue: true,
      explanation: {
        en: "Hummingbirds' unique wing structure allows them to fly backwards, forwards, and even upside down.",
        es: "La estructura única de las alas de los colibríes les permite volar hacia atrás, adelante e incluso al revés.",
        de: "Die einzigartige Flügelstruktur der Kolibris ermöglicht es ihnen, rückwärts, vorwärts und sogar kopfüber zu fliegen.",
        nl: "De unieke vleugelstructuur van kolibries stelt hen in staat achteruit, vooruit en zelfs ondersteboven te vliegen."
      }
    },
    {
      id: 'an_17',
      question: {
        en: "Owls can turn their heads 360 degrees.",
        es: "Los búhos pueden girar la cabeza 360 grados.",
        de: "Eulen können ihren Kopf um 360 Grad drehen.",
        nl: "Uilen kunnen hun kop 360 graden draaien."
      },
      isTrue: false,
      explanation: {
        en: "Owls can rotate their heads about 270 degrees, not a full 360. This is still impressive!",
        es: "Los búhos pueden rotar la cabeza unos 270 grados, no 360 completos. ¡Aún así es impresionante!",
        de: "Eulen können ihre Köpfe etwa 270 Grad drehen, nicht volle 360. Das ist trotzdem beeindruckend!",
        nl: "Uilen kunnen hun kop ongeveer 270 graden draaien, geen volle 360. Dit is nog steeds indrukwekkend!"
      }
    },
    {
      id: 'an_18',
      question: {
        en: "Snakes can hear sounds.",
        es: "Las serpientes pueden oír sonidos.",
        de: "Schlangen können Geräusche hören.",
        nl: "Slangen kunnen geluiden horen."
      },
      isTrue: false,
      explanation: {
        en: "Snakes don't have external ears. They 'hear' by sensing vibrations through their jawbones.",
        es: "Las serpientes no tienen oídos externos. 'Oyen' sintiendo vibraciones a través de sus mandíbulas.",
        de: "Schlangen haben keine äußeren Ohren. Sie 'hören' durch Vibrationen über ihre Kieferknochen.",
        nl: "Slangen hebben geen uitwendige oren. Ze 'horen' door trillingen via hun kaakbotten waar te nemen."
      }
    },
    {
      id: 'an_19',
      question: {
        en: "Frogs can drink water through their skin.",
        es: "Las ranas pueden beber agua a través de su piel.",
        de: "Frösche können Wasser durch ihre Haut trinken.",
        nl: "Kikkers kunnen water door hun huid drinken."
      },
      isTrue: true,
      explanation: {
        en: "Frogs absorb water through their skin rather than drinking through their mouths.",
        es: "Las ranas absorben agua a través de su piel en lugar de beber por la boca.",
        de: "Frösche nehmen Wasser durch ihre Haut auf, anstatt durch den Mund zu trinken.",
        nl: "Kikkers absorberen water door hun huid in plaats van te drinken via hun mond."
      }
    },
    {
      id: 'an_20',
      question: {
        en: "Butterflies taste with their feet.",
        es: "Las mariposas saborean con sus patas.",
        de: "Schmetterlinge schmecken mit ihren Füßen.",
        nl: "Vlinders proeven met hun poten."
      },
      isTrue: true,
      explanation: {
        en: "Butterflies have taste receptors on their feet to help them find food for their larvae.",
        es: "Las mariposas tienen receptores de sabor en sus patas para ayudarles a encontrar comida para sus larvas.",
        de: "Schmetterlinge haben Geschmacksrezeptoren an ihren Füßen, um Nahrung für ihre Larven zu finden.",
        nl: "Vlinders hebben smaakreceptoren aan hun poten om voedsel voor hun larven te vinden."
      }
    },
    {
      id: 'an_21',
      question: {
        en: "Starfish have brains.",
        es: "Las estrellas de mar tienen cerebros.",
        de: "Seesterne haben Gehirne.",
        nl: "Zeesterren hebben hersenen."
      },
      isTrue: false,
      explanation: {
        en: "Starfish don't have a brain. They have a complex nervous system with a nerve ring.",
        es: "Las estrellas de mar no tienen cerebro. Tienen un sistema nervioso complejo con un anillo nervioso.",
        de: "Seesterne haben kein Gehirn. Sie haben ein komplexes Nervensystem mit einem Nervenring.",
        nl: "Zeesterren hebben geen hersenen. Ze hebben een complex zenuwstelsel met een zenuwring."
      }
    },
    {
      id: 'an_22',
      question: {
        en: "Jellyfish are 95% water.",
        es: "Las medusas son 95% agua.",
        de: "Quallen bestehen zu 95% aus Wasser.",
        nl: "Kwallen zijn 95% water."
      },
      isTrue: true,
      explanation: {
        en: "Jellyfish bodies are composed of approximately 95% water, making them almost transparent.",
        es: "Los cuerpos de las medusas están compuestos por aproximadamente 95% de agua, haciéndolas casi transparentes.",
        de: "Quallenkörper bestehen zu etwa 95% aus Wasser, was sie fast durchsichtig macht.",
        nl: "Kwallen bestaan voor ongeveer 95% uit water, waardoor ze bijna transparant zijn."
      }
    },
    {
      id: 'an_23',
      question: {
        en: "Ants can lift 50 times their own body weight.",
        es: "Las hormigas pueden levantar 50 veces su propio peso corporal.",
        de: "Ameisen können das 50-fache ihres eigenen Körpergewichts heben.",
        nl: "Mieren kunnen 50 keer hun eigen lichaamsgewicht tillen."
      },
      isTrue: true,
      explanation: {
        en: "Ants are incredibly strong for their size and can carry objects many times heavier than themselves.",
        es: "Las hormigas son increíblemente fuertes para su tamaño y pueden cargar objetos muchas veces más pesados.",
        de: "Ameisen sind für ihre Größe unglaublich stark und können Objekte tragen, die viel schwerer sind.",
        nl: "Mieren zijn ongelooflijk sterk voor hun grootte en kunnen objecten dragen die veel zwaarder zijn."
      }
    },
    {
      id: 'an_24',
      question: {
        en: "Octopuses have three hearts.",
        es: "Los pulpos tienen tres corazones.",
        de: "Kraken haben drei Herzen.",
        nl: "Octopussen hebben drie harten."
      },
      isTrue: true,
      explanation: {
        en: "Octopuses have two hearts to pump blood to their gills and one to pump blood to the body.",
        es: "Los pulpos tienen dos corazones para bombear sangre a sus branquias y uno para bombear sangre al cuerpo.",
        de: "Kraken haben zwei Herzen, um Blut zu den Kiemen zu pumpen, und eines für den Körper.",
        nl: "Octopussen hebben twee harten om bloed naar hun kieuwen te pompen en één om bloed naar het lichaam te pompen."
      }
    },
    {
      id: 'an_25',
      question: {
        en: "Bees can recognize human faces.",
        es: "Las abejas pueden reconocer rostros humanos.",
        de: "Bienen können menschliche Gesichter erkennen.",
        nl: "Bijen kunnen menselijke gezichten herkennen."
      },
      isTrue: true,
      explanation: {
        en: "Studies show bees can learn to recognize and remember human facial features.",
        es: "Los estudios muestran que las abejas pueden aprender a reconocer y recordar rasgos faciales humanos.",
        de: "Studien zeigen, dass Bienen lernen können, menschliche Gesichtszüge zu erkennen und zu merken.",
        nl: "Studies tonen aan dat bijen kunnen leren menselijke gezichtskenmerken te herkennen en te onthouden."
      }
    },
    {
      id: 'an_26',
      question: {
        en: "Giraffes have the same number of neck bones as humans.",
        es: "Las jirafas tienen el mismo número de huesos del cuello que los humanos.",
        de: "Giraffen haben die gleiche Anzahl von Halsknochen wie Menschen.",
        nl: "Giraffen hebben hetzelfde aantal nekbotten als mensen."
      },
      isTrue: true,
      explanation: {
        en: "Both giraffes and humans have 7 cervical vertebrae. Giraffe vertebrae are just much longer.",
        es: "Tanto las jirafas como los humanos tienen 7 vértebras cervicales. Las de las jirafas son mucho más largas.",
        de: "Sowohl Giraffen als auch Menschen haben 7 Halswirbel. Die der Giraffen sind nur viel länger.",
        nl: "Zowel giraffen als mensen hebben 7 halswervels. Die van giraffen zijn alleen veel langer."
      }
    },
    {
      id: 'an_27',
      question: {
        en: "Crocodiles can't stick their tongue out.",
        es: "Los cocodrilos no pueden sacar la lengua.",
        de: "Krokodile können ihre Zunge nicht herausstrecken.",
        nl: "Krokodillen kunnen hun tong niet uitsteken."
      },
      isTrue: true,
      explanation: {
        en: "A crocodile's tongue is attached to the roof of its mouth, preventing it from sticking out.",
        es: "La lengua de un cocodrilo está unida al techo de su boca, impidiendo que la saque.",
        de: "Die Zunge eines Krokodils ist am Gaumen befestigt und kann daher nicht herausgestreckt werden.",
        nl: "De tong van een krokodil is aan het gehemelte vastgemaakt, waardoor hij deze niet kan uitsteken."
      }
    },
    {
      id: 'an_28',
      question: {
        en: "Rabbits are born blind.",
        es: "Los conejos nacen ciegos.",
        de: "Kaninchen werden blind geboren.",
        nl: "Konijnen worden blind geboren."
      },
      isTrue: true,
      explanation: {
        en: "Baby rabbits (kittens) are born blind, deaf, and hairless. They open their eyes after about 10 days.",
        es: "Los conejos bebés nacen ciegos, sordos y sin pelo. Abren los ojos después de unos 10 días.",
        de: "Kaninchenbabys werden blind, taub und haarlos geboren. Sie öffnen ihre Augen nach etwa 10 Tagen.",
        nl: "Baby konijnen worden blind, doof en haarloos geboren. Ze openen hun ogen na ongeveer 10 dagen."
      }
    },
    {
      id: 'an_29',
      question: {
        en: "Horses can sleep standing up.",
        es: "Los caballos pueden dormir de pie.",
        de: "Pferde können im Stehen schlafen.",
        nl: "Paarden kunnen staand slapen."
      },
      isTrue: true,
      explanation: {
        en: "Horses have a special locking mechanism in their legs that allows them to doze while standing.",
        es: "Los caballos tienen un mecanismo de bloqueo especial en las patas que les permite dormir de pie.",
        de: "Pferde haben einen speziellen Verriegelungsmechanismus in ihren Beinen, der es ihnen ermöglicht, im Stehen zu dösen.",
        nl: "Paarden hebben een speciaal vergrendelingsmechanisme in hun benen waardoor ze staand kunnen dommelen."
      }
    },
    {
      id: 'an_30',
      question: {
        en: "Sloths can hold their breath longer than dolphins.",
        es: "Los perezosos pueden contener la respiración más tiempo que los delfines.",
        de: "Faultiere können länger die Luft anhalten als Delfine.",
        nl: "Luiaards kunnen langer hun adem inhouden dan dolfijnen."
      },
      isTrue: true,
      explanation: {
        en: "Sloths can hold their breath for up to 40 minutes, while dolphins typically hold it for 8-10 minutes.",
        es: "Los perezosos pueden contener la respiración hasta 40 minutos, mientras que los delfines típicamente lo hacen por 8-10 minutos.",
        de: "Faultiere können bis zu 40 Minuten die Luft anhalten, während Delfine dies typischerweise 8-10 Minuten tun.",
        nl: "Luiaards kunnen hun adem tot 40 minuten inhouden, terwijl dolfijnen dit doorgaans 8-10 minuten doen."
      }
    },
    {
      id: 'an_31',
      question: {
        en: "A shrimp's heart is in its head.",
        es: "El corazón de un camarón está en su cabeza.",
        de: "Das Herz einer Garnele befindet sich in ihrem Kopf.",
        nl: "Het hart van een garnaal zit in zijn kop."
      },
      isTrue: true,
      explanation: {
        en: "Due to their anatomy, a shrimp's heart is located in its head/thorax region.",
        es: "Debido a su anatomía, el corazón de un camarón se encuentra en su región cabeza/tórax.",
        de: "Aufgrund ihrer Anatomie befindet sich das Herz einer Garnele in ihrem Kopf-/Thoraxbereich.",
        nl: "Door hun anatomie bevindt het hart van een garnaal zich in zijn kop-/thoraxgebied."
      }
    },
    {
      id: 'an_32',
      question: {
        en: "Cats spend 70% of their lives sleeping.",
        es: "Los gatos pasan el 70% de su vida durmiendo.",
        de: "Katzen verbringen 70% ihres Lebens mit Schlafen.",
        nl: "Katten besteden 70% van hun leven aan slapen."
      },
      isTrue: true,
      explanation: {
        en: "Cats sleep an average of 13-16 hours a day, which adds up to about 70% of their lifetime.",
        es: "Los gatos duermen un promedio de 13-16 horas al día, lo que suma aproximadamente el 70% de su vida.",
        de: "Katzen schlafen durchschnittlich 13-16 Stunden am Tag, was etwa 70% ihrer Lebenszeit ausmacht.",
        nl: "Katten slapen gemiddeld 13-16 uur per dag, wat neerkomt op ongeveer 70% van hun leven."
      }
    },
    {
      id: 'an_33',
      question: {
        en: "Pigs cannot look up at the sky.",
        es: "Los cerdos no pueden mirar hacia el cielo.",
        de: "Schweine können nicht zum Himmel schauen.",
        nl: "Varkens kunnen niet naar de lucht kijken."
      },
      isTrue: false,
      explanation: {
        en: "This is a myth. Pigs can look up, though their neck anatomy makes it less comfortable.",
        es: "Esto es un mito. Los cerdos pueden mirar hacia arriba, aunque la anatomía de su cuello lo hace menos cómodo.",
        de: "Das ist ein Mythos. Schweine können nach oben schauen, obwohl ihre Nackenanatomie es weniger bequem macht.",
        nl: "Dit is een mythe. Varkens kunnen omhoog kijken, hoewel hun nekanatomie het minder comfortabel maakt."
      }
    },
    {
      id: 'an_34',
      question: {
        en: "Woodpeckers can peck 20 times per second.",
        es: "Los pájaros carpinteros pueden picar 20 veces por segundo.",
        de: "Spechte können 20 Mal pro Sekunde hacken.",
        nl: "Spechten kunnen 20 keer per seconde pikken."
      },
      isTrue: true,
      explanation: {
        en: "Woodpeckers can peck up to 20 times per second, or 12,000 times per day without getting headaches.",
        es: "Los pájaros carpinteros pueden picar hasta 20 veces por segundo, o 12,000 veces al día sin dolores de cabeza.",
        de: "Spechte können bis zu 20 Mal pro Sekunde oder 12.000 Mal pro Tag hacken, ohne Kopfschmerzen zu bekommen.",
        nl: "Spechten kunnen tot 20 keer per seconde of 12.000 keer per dag pikken zonder hoofdpijn te krijgen."
      }
    },
    {
      id: 'an_35',
      question: {
        en: "Seahorses are fish.",
        es: "Los caballitos de mar son peces.",
        de: "Seepferdchen sind Fische.",
        nl: "Zeepaardjeszijn vissen."
      },
      isTrue: true,
      explanation: {
        en: "Despite their unique appearance, seahorses are indeed fish with gills, fins, and a swim bladder.",
        es: "A pesar de su apariencia única, los caballitos de mar son peces con branquias, aletas y vejiga natatoria.",
        de: "Trotz ihres einzigartigen Aussehens sind Seepferdchen Fische mit Kiemen, Flossen und Schwimmblase.",
        nl: "Ondanks hun unieke uiterlijk zijn zeepaardje wel degelijk vissen met kieuwen, vinnen en een zwemblaas."
      }
    },
    {
      id: 'an_36',
      question: {
        en: "Male seahorses give birth to their young.",
        es: "Los caballitos de mar machos dan a luz a sus crías.",
        de: "Männliche Seepferdchen gebären ihre Jungen.",
        nl: "Mannelijke zeepaardjes baren hun jongen."
      },
      isTrue: true,
      explanation: {
        en: "Male seahorses have a brood pouch where they carry eggs until they hatch and are released.",
        es: "Los caballitos de mar machos tienen una bolsa donde llevan los huevos hasta que eclosionan.",
        de: "Männliche Seepferdchen haben eine Bruttasche, in der sie Eier tragen, bis sie schlüpfen.",
        nl: "Mannelijke zeepaardjes hebben een broedzak waar ze eieren dragen totdat ze uitkomen."
      }
    },
    {
      id: 'an_37',
      question: {
        en: "Turtles can breathe through their bottoms.",
        es: "Las tortugas pueden respirar por el trasero.",
        de: "Schildkröten können durch ihren Hintern atmen.",
        nl: "Schildpadden kunnen door hun billen ademen."
      },
      isTrue: true,
      explanation: {
        en: "Some turtle species can absorb oxygen through their cloaca (bottom) when underwater.",
        es: "Algunas especies de tortugas pueden absorber oxígeno a través de su cloaca cuando están bajo el agua.",
        de: "Einige Schildkrötenarten können Sauerstoff durch ihre Kloake aufnehmen, wenn sie unter Wasser sind.",
        nl: "Sommige schildpaddensoorten kunnen zuurstof opnemen via hun cloaca wanneer ze onder water zijn."
      }
    },
    {
      id: 'an_38',
      question: {
        en: "Cheetahs are the fastest land animals.",
        es: "Los guepardos son los animales terrestres más rápidos.",
        de: "Geparden sind die schnellsten Landtiere.",
        nl: "Cheeta's zijn de snelste landdieren."
      },
      isTrue: true,
      explanation: {
        en: "Cheetahs can reach speeds of up to 70 mph (112 km/h), making them the fastest land animals.",
        es: "Los guepardos pueden alcanzar velocidades de hasta 112 km/h, haciéndolos los animales terrestres más rápidos.",
        de: "Geparden können Geschwindigkeiten von bis zu 112 km/h erreichen und sind damit die schnellsten Landtiere.",
        nl: "Cheeta's kunnen snelheden tot 112 km/u bereiken, waardoor ze de snelste landdieren zijn."
      }
    },
    {
      id: 'an_39',
      question: {
        en: "Elephants can jump.",
        es: "Los elefantes pueden saltar.",
        de: "Elefanten können springen.",
        nl: "Olifanten kunnen springen."
      },
      isTrue: false,
      explanation: {
        en: "Elephants are the only mammals that cannot jump due to their weight and leg structure.",
        es: "Los elefantes son los únicos mamíferos que no pueden saltar debido a su peso y estructura de las patas.",
        de: "Elefanten sind die einzigen Säugetiere, die aufgrund ihres Gewichts und ihrer Beinstruktur nicht springen können.",
        nl: "Olifanten zijn de enige zoogdieren die niet kunnen springen vanwege hun gewicht en beenstructuur."
      }
    },
    {
      id: 'an_40',
      question: {
        en: "A group of crows is called a 'murder'.",
        es: "Un grupo de cuervos se llama 'murder' (asesinato).",
        de: "Eine Gruppe von Krähen wird 'Murder' genannt.",
        nl: "Een groep kraaien wordt een 'murder' genoemd."
      },
      isTrue: true,
      explanation: {
        en: "The collective noun for a group of crows is indeed called a 'murder of crows'.",
        es: "El sustantivo colectivo para un grupo de cuervos se llama 'murder of crows'.",
        de: "Das Kollektivnomen für eine Gruppe von Krähen wird tatsächlich 'Murder of Crows' genannt.",
        nl: "Het collectieve zelfstandig naamwoord voor een groep kraaien wordt inderdaad een 'murder of crows' genoemd."
      }
    },
    {
      id: 'an_41',
      question: {
        en: "Snails can sleep for up to 3 years.",
        es: "Los caracoles pueden dormir hasta 3 años.",
        de: "Schnecken können bis zu 3 Jahre schlafen.",
        nl: "Slakken kunnen tot 3 jaar slapen."
      },
      isTrue: true,
      explanation: {
        en: "During dry periods, snails can enter a deep sleep (estivation) that can last up to 3 years.",
        es: "Durante períodos secos, los caracoles pueden entrar en un sueño profundo que puede durar hasta 3 años.",
        de: "Während Trockenperioden können Schnecken in einen Tiefschlaf fallen, der bis zu 3 Jahre dauern kann.",
        nl: "Tijdens droge periodes kunnen slakken in een diepe slaap vallen die tot 3 jaar kan duren."
      }
    },
    {
      id: 'an_42',
      question: {
        en: "Rattlesnakes rattle their tails as a warning.",
        es: "Las serpientes de cascabel agitan sus colas como advertencia.",
        de: "Klapperschlangen rasseln mit ihrem Schwanz als Warnung.",
        nl: "Ratelslangen rammelen met hun staart als waarschuwing."
      },
      isTrue: true,
      explanation: {
        en: "Rattlesnakes shake their rattles to warn potential threats before striking as a last resort.",
        es: "Las serpientes de cascabel agitan sus cascabeles para advertir amenazas antes de atacar como último recurso.",
        de: "Klapperschlangen schütteln ihre Rassel, um potenzielle Bedrohungen zu warnen, bevor sie als letztes Mittel angreifen.",
        nl: "Ratelslangen schudden hun ratel om potentiële bedreigingen te waarschuwen voordat ze als laatste redmiddel aanvallen."
      }
    },
    {
      id: 'an_43',
      question: {
        en: "Mosquitoes are the deadliest animals to humans.",
        es: "Los mosquitos son los animales más mortales para los humanos.",
        de: "Mücken sind die tödlichsten Tiere für Menschen.",
        nl: "Muggen zijn de dodelijkste dieren voor mensen."
      },
      isTrue: true,
      explanation: {
        en: "Mosquitoes kill more humans than any other animal by spreading diseases like malaria and dengue.",
        es: "Los mosquitos matan más humanos que cualquier otro animal al propagar enfermedades como malaria y dengue.",
        de: "Mücken töten mehr Menschen als jedes andere Tier durch die Verbreitung von Krankheiten wie Malaria.",
        nl: "Muggen doden meer mensen dan enig ander dier door het verspreiden van ziektes zoals malaria en dengue."
      }
    },
    {
      id: 'an_44',
      question: {
        en: "Wolves howl at the moon.",
        es: "Los lobos aúllan a la luna.",
        de: "Wölfe heulen den Mond an.",
        nl: "Wolven huilen naar de maan."
      },
      isTrue: false,
      explanation: {
        en: "Wolves howl to communicate with their pack, not at the moon. They point their heads up for better sound projection.",
        es: "Los lobos aúllan para comunicarse con su manada, no a la luna. Levantan la cabeza para proyectar mejor el sonido.",
        de: "Wölfe heulen, um mit ihrem Rudel zu kommunizieren, nicht den Mond an. Sie heben den Kopf für bessere Schallprojektion.",
        nl: "Wolven huilen om met hun roedel te communiceren, niet naar de maan. Ze richten hun kop omhoog voor betere geluidsprojectie."
      }
    },
    {
      id: 'an_45',
      question: {
        en: "Panda bears are born pink, blind, and hairless.",
        es: "Los osos panda nacen rosados, ciegos y sin pelo.",
        de: "Pandabären werden rosa, blind und haarlos geboren.",
        nl: "Panda's worden roze, blind en haarloos geboren."
      },
      isTrue: true,
      explanation: {
        en: "Baby pandas are extremely tiny and underdeveloped at birth, weighing only about 100 grams.",
        es: "Los bebés panda son extremadamente pequeños y subdesarrollados al nacer, pesando solo unos 100 gramos.",
        de: "Pandababy sind bei der Geburt extrem klein und unterentwickelt und wiegen nur etwa 100 Gramm.",
        nl: "Baby panda's zijn extreem klein en onderontwikkeld bij de geboorte en wegen slechts ongeveer 100 gram."
      }
    },
    {
      id: 'an_46',
      question: {
        en: "Squirrels forget where they bury about half of their nuts.",
        es: "Las ardillas olvidan dónde entierran aproximadamente la mitad de sus nueces.",
        de: "Eichhörnchen vergessen, wo sie etwa die Hälfte ihrer Nüsse vergraben haben.",
        nl: "Eekhoorns vergeten waar ze ongeveer de helft van hun noten begraven."
      },
      isTrue: true,
      explanation: {
        en: "Squirrels' forgetfulness helps forests grow, as forgotten nuts can sprout into new trees.",
        es: "El olvido de las ardillas ayuda a crecer los bosques, ya que las nueces olvidadas pueden brotar en nuevos árboles.",
        de: "Die Vergesslichkeit der Eichhörnchen hilft Wäldern zu wachsen, da vergessene Nüsse zu neuen Bäumen sprießen können.",
        nl: "De vergeetachtigheid van eekhoorns helpt bossen groeien, omdat vergeten noten kunnen uitgroeien tot nieuwe bomen."
      }
    },
    {
      id: 'an_47',
      question: {
        en: "Kangaroos can hop backwards.",
        es: "Los canguros pueden saltar hacia atrás.",
        de: "Kängurus können rückwärts hüpfen.",
        nl: "Kangoeroes kunnen achteruit springen."
      },
      isTrue: false,
      explanation: {
        en: "Kangaroos cannot walk or hop backwards due to their large feet and muscular tail.",
        es: "Los canguros no pueden caminar o saltar hacia atrás debido a sus grandes patas y cola muscular.",
        de: "Kängurus können aufgrund ihrer großen Füße und des muskulösen Schwanzes nicht rückwärts laufen oder hüpfen.",
        nl: "Kangoeroes kunnen niet achteruit lopen of springen vanwege hun grote voeten en gespierde staart."
      }
    },
    {
      id: 'an_48',
      question: {
        en: "Blue whales are the largest animals ever to exist on Earth.",
        es: "Las ballenas azules son los animales más grandes que han existido en la Tierra.",
        de: "Blauwale sind die größten Tiere, die je auf der Erde existiert haben.",
        nl: "Blauwe vinvissen zijn de grootste dieren die ooit op aarde hebben bestaan."
      },
      isTrue: true,
      explanation: {
        en: "Blue whales can grow up to 100 feet long and weigh up to 200 tons, larger than any dinosaur.",
        es: "Las ballenas azules pueden crecer hasta 30 metros de largo y pesar hasta 200 toneladas, más que cualquier dinosaurio.",
        de: "Blauwale können bis zu 30 Meter lang werden und bis zu 200 Tonnen wiegen, größer als jeder Dinosaurier.",
        nl: "Blauwe vinvissen kunnen tot 30 meter lang worden en tot 200 ton wegen, groter dan elke dinosaurus."
      }
    },
    {
      id: 'an_49',
      question: {
        en: "Tigers have striped skin, not just striped fur.",
        es: "Los tigres tienen piel rayada, no solo pelaje rayado.",
        de: "Tiger haben gestreifte Haut, nicht nur gestreiftes Fell.",
        nl: "Tijgers hebben gestreepte huid, niet alleen gestreepte vacht."
      },
      isTrue: true,
      explanation: {
        en: "If you shaved a tiger, you would still see stripes on its skin underneath the fur.",
        es: "Si afeitas un tigre, aún verías rayas en su piel debajo del pelaje.",
        de: "Wenn man einen Tiger rasieren würde, würde man immer noch Streifen auf seiner Haut unter dem Fell sehen.",
        nl: "Als je een tijger zou scheren, zou je nog steeds strepen op zijn huid onder de vacht zien."
      }
    },
    {
      id: 'an_50',
      question: {
        en: "Lobsters are biologically immortal.",
        es: "Las langostas son biológicamente inmortales.",
        de: "Hummer sind biologisch unsterblich.",
        nl: "Kreeften zijn biologisch onsterfelijk."
      },
      isTrue: false,
      explanation: {
        en: "While lobsters show minimal aging signs, they are not truly immortal and eventually die from disease or predation.",
        es: "Aunque las langostas muestran signos mínimos de envejecimiento, no son verdaderamente inmortales.",
        de: "Obwohl Hummer minimale Alterungsanzeichen zeigen, sind sie nicht wirklich unsterblich.",
        nl: "Hoewel kreeften minimale verouderingstekens vertonen, zijn ze niet echt onsterfelijk."
      }
    },
    {
      id: 'an_51',
      question: {
        en: "A group of porcupines is called a 'prickle'.",
        es: "Un grupo de puercoespines se llama 'prickle' (pincho).",
        de: "Eine Gruppe von Stachelschweinen wird 'Prickle' genannt.",
        nl: "Een groep stekelvarkens wordt een 'prickle' genoemd."
      },
      isTrue: true,
      explanation: {
        en: "The collective noun for porcupines is appropriately called a 'prickle'.",
        es: "El sustantivo colectivo para puercoespines se llama apropiadamente 'prickle'.",
        de: "Das Kollektivnomen für Stachelschweine wird treffend 'Prickle' genannt.",
        nl: "Het collectieve zelfstandig naamwoord voor stekelvarkens wordt toepasselijk een 'prickle' genoemd."
      }
    },
    {
      id: 'an_52',
      question: {
        en: "Flamingos are pink because of their diet.",
        es: "Los flamencos son rosados debido a su dieta.",
        de: "Flamingos sind rosa aufgrund ihrer Ernährung.",
        nl: "Flamingo's zijn roze vanwege hun dieet."
      },
      isTrue: true,
      explanation: {
        en: "Flamingos get their pink color from carotenoids in the algae and crustaceans they eat.",
        es: "Los flamencos obtienen su color rosa de los carotenoides en las algas y crustáceos que comen.",
        de: "Flamingos erhalten ihre rosa Farbe von Karotinoiden in den Algen und Krebstieren, die sie essen.",
        nl: "Flamingo's krijgen hun roze kleur van carotenoïden in de algen en schaaldieren die ze eten."
      }
    },
    {
      id: 'an_53',
      question: {
        en: "Cows have best friends.",
        es: "Las vacas tienen mejores amigos.",
        de: "Kühe haben beste Freunde.",
        nl: "Koeien hebben beste vrienden."
      },
      isTrue: true,
      explanation: {
        en: "Research shows cows form close bonds with certain other cows and become stressed when separated.",
        es: "Las investigaciones muestran que las vacas forman vínculos cercanos con otras vacas y se estresan cuando se separan.",
        de: "Forschungen zeigen, dass Kühe enge Bindungen zu bestimmten anderen Kühen eingehen.",
        nl: "Onderzoek toont aan dat koeien hechte banden vormen met bepaalde andere koeien en gestrest raken bij scheiding."
      }
    },
    {
      id: 'an_54',
      question: {
        en: "Hippos can run faster than humans.",
        es: "Los hipopótamos pueden correr más rápido que los humanos.",
        de: "Flusspferde können schneller laufen als Menschen.",
        nl: "Nijlpaarden kunnen sneller rennen dan mensen."
      },
      isTrue: true,
      explanation: {
        en: "Despite their size, hippos can run up to 30 mph (48 km/h) on land, much faster than humans.",
        es: "A pesar de su tamaño, los hipopótamos pueden correr hasta 48 km/h en tierra, mucho más rápido que los humanos.",
        de: "Trotz ihrer Größe können Flusspferde an Land bis zu 48 km/h laufen, viel schneller als Menschen.",
        nl: "Ondanks hun grootte kunnen nijlpaarden op land tot 48 km/u rennen, veel sneller dan mensen."
      }
    },
    {
      id: 'an_55',
      question: {
        en: "Pigeons can recognize themselves in a mirror.",
        es: "Las palomas pueden reconocerse en un espejo.",
        de: "Tauben können sich im Spiegel erkennen.",
        nl: "Duiven kunnen zichzelf herkennen in een spiegel."
      },
      isTrue: true,
      explanation: {
        en: "Pigeons are one of the few species that can pass the mirror self-recognition test.",
        es: "Las palomas son una de las pocas especies que pueden pasar la prueba de autorreconocimiento en el espejo.",
        de: "Tauben gehören zu den wenigen Arten, die den Spiegel-Selbsterkennungstest bestehen können.",
        nl: "Duiven zijn een van de weinige soorten die de spiegel-zelfherkenningstest kunnen doorstaan."
      }
    },
    {
      id: 'an_56',
      question: {
        en: "Wombat poop is cube-shaped.",
        es: "La caca de wombat tiene forma de cubo.",
        de: "Wombat-Kot ist würfelförmig.",
        nl: "Wombat-poep is kubisch."
      },
      isTrue: true,
      explanation: {
        en: "Wombats produce cube-shaped droppings due to their unique intestinal shape, which helps mark territory.",
        es: "Los wombats producen excrementos cúbicos debido a la forma única de sus intestinos, lo que ayuda a marcar territorio.",
        de: "Wombats produzieren würfelförmigen Kot aufgrund ihrer einzigartigen Darmform, was beim Markieren hilft.",
        nl: "Wombats produceren kubische uitwerpselen vanwege hun unieke darmvorm, wat helpt bij het markeren van territorium."
      }
    },
    {
      id: 'an_57',
      question: {
        en: "Penguins propose to their mates with pebbles.",
        es: "Los pingüinos proponen matrimonio a sus parejas con guijarros.",
        de: "Pinguine machen ihren Partnern mit Kieselsteinen einen Antrag.",
        nl: "Pinguïns doen hun partners een aanzoek met kiezelstenen."
      },
      isTrue: true,
      explanation: {
        en: "Male penguins search for the perfect pebble to present to their chosen mate as a courtship gift.",
        es: "Los pingüinos machos buscan el guijarro perfecto para presentar a su pareja elegida como regalo de cortejo.",
        de: "Männliche Pinguine suchen den perfekten Kieselstein, um ihn ihrer auserwählten Partnerin als Balzgeschenk zu präsentieren.",
        nl: "Mannelijke pinguïns zoeken de perfecte kiezelsteen om aan hun gekozen partner te presenteren als baltsgeschenk."
      }
    },
    {
      id: 'an_58',
      question: {
        en: "Sheep can recognize faces.",
        es: "Las ovejas pueden reconocer rostros.",
        de: "Schafe können Gesichter erkennen.",
        nl: "Schapen kunnen gezichten herkennen."
      },
      isTrue: true,
      explanation: {
        en: "Sheep have excellent facial recognition and can remember up to 50 sheep and 10 human faces for years.",
        es: "Las ovejas tienen excelente reconocimiento facial y pueden recordar hasta 50 ovejas y 10 rostros humanos durante años.",
        de: "Schafe haben eine hervorragende Gesichtserkennung und können sich jahrelang an bis zu 50 Schafe und 10 menschliche Gesichter erinnern.",
        nl: "Schapen hebben uitstekende gezichtsherkenning en kunnen tot 50 schapen en 10 menselijke gezichten jarenlang onthouden."
      }
    },
    {
      id: 'an_59',
      question: {
        en: "Alligators and crocodiles are the same species.",
        es: "Los caimanes y los cocodrilos son la misma especie.",
        de: "Alligatoren und Krokodile sind dieselbe Art.",
        nl: "Alligators en krokodillen zijn dezelfde soort."
      },
      isTrue: false,
      explanation: {
        en: "Alligators and crocodiles are different species with distinct physical features and habitats.",
        es: "Los caimanes y los cocodrilos son especies diferentes con características físicas y hábitats distintos.",
        de: "Alligatoren und Krokodile sind verschiedene Arten mit unterschiedlichen physischen Merkmalen und Lebensräumen.",
        nl: "Alligators en krokodillen zijn verschillende soorten met onderscheidende fysieke kenmerken en habitats."
      }
    },
    {
      id: 'an_60',
      question: {
        en: "Ravens can mimic human speech.",
        es: "Los cuervos pueden imitar el habla humana.",
        de: "Raben können menschliche Sprache nachahmen.",
        nl: "Raven kunnen menselijke spraak nabootsen."
      },
      isTrue: true,
      explanation: {
        en: "Ravens are excellent mimics and can be trained to repeat words and sounds, similar to parrots.",
        es: "Los cuervos son excelentes imitadores y pueden ser entrenados para repetir palabras y sonidos, similar a los loros.",
        de: "Raben sind ausgezeichnete Nachahmer und können trainiert werden, Wörter und Geräusche zu wiederholen.",
        nl: "Raven zijn uitstekende nabootsers en kunnen worden getraind om woorden en geluiden te herhalen, net als papegaaien."
      }
    },
    {
      id: 'an_61',
      question: {
        en: "Elephants are afraid of bees.",
        es: "Los elefantes tienen miedo de las abejas.",
        de: "Elefanten haben Angst vor Bienen.",
        nl: "Olifanten zijn bang voor bijen."
      },
      isTrue: true,
      explanation: {
        en: "Elephants can be stung by bees in sensitive areas like their trunk and eyes, so they avoid bee swarms.",
        es: "Las abejas pueden picar a los elefantes en áreas sensibles como la trompa y los ojos, por lo que evitan enjambres.",
        de: "Elefanten können in empfindlichen Bereichen wie Rüssel und Augen von Bienen gestochen werden.",
        nl: "Olifanten kunnen door bijen worden gestoken in gevoelige gebieden zoals hun slurf en ogen, dus vermijden ze bijenzwermen."
      }
    },
    {
      id: 'an_62',
      question: {
        en: "Dragonflies have been around since before the dinosaurs.",
        es: "Las libélulas han existido desde antes de los dinosaurios.",
        de: "Libellen gibt es schon seit vor den Dinosauriern.",
        nl: "Libellen bestaan al sinds voor de dinosauriërs."
      },
      isTrue: true,
      explanation: {
        en: "Dragonflies have existed for over 300 million years, predating dinosaurs by about 100 million years.",
        es: "Las libélulas han existido durante más de 300 millones de años, precediendo a los dinosaurios por unos 100 millones de años.",
        de: "Libellen existieren seit über 300 Millionen Jahren, etwa 100 Millionen Jahre vor den Dinosauriern.",
        nl: "Libellen bestaan al meer dan 300 miljoen jaar, ongeveer 100 miljoen jaar vóór de dinosauriërs."
      }
    },
    {
      id: 'an_63',
      question: {
        en: "Reindeer eyes change color with the seasons.",
        es: "Los ojos de los renos cambian de color con las estaciones.",
        de: "Rentiereaugen ändern mit den Jahreszeiten ihre Farbe.",
        nl: "De ogen van rendieren veranderen van kleur met de seizoenen."
      },
      isTrue: true,
      explanation: {
        en: "Reindeer eyes change from golden in summer to blue in winter to adapt to different light conditions.",
        es: "Los ojos de los renos cambian de dorado en verano a azul en invierno para adaptarse a diferentes condiciones de luz.",
        de: "Rentiereaugen wechseln von golden im Sommer zu blau im Winter, um sich an unterschiedliche Lichtverhältnisse anzupassen.",
        nl: "Rendierogen veranderen van goudkleurig in de zomer naar blauw in de winter om zich aan te passen aan verschillende lichtomstandigheden."
      }
    },
    {
      id: 'an_64',
      question: {
        en: "Sloths only defecate once a week.",
        es: "Los perezosos solo defecan una vez por semana.",
        de: "Faultiere defäkieren nur einmal pro Woche.",
        nl: "Luiaards ontlasten slechts één keer per week."
      },
      isTrue: true,
      explanation: {
        en: "Sloths have extremely slow metabolisms and only come down from trees about once a week to defecate.",
        es: "Los perezosos tienen metabolismos extremadamente lentos y solo bajan de los árboles una vez por semana para defecar.",
        de: "Faultiere haben einen extrem langsamen Stoffwechsel und kommen nur etwa einmal pro Woche von den Bäumen herunter.",
        nl: "Luiaards hebben een extreem langzaam metabolisme en komen slechts ongeveer één keer per week uit de bomen om te ontlasten."
      }
    },
    {
      id: 'an_65',
      question: {
        en: "Axolotls can regenerate their brains.",
        es: "Los axolotes pueden regenerar sus cerebros.",
        de: "Axolotl können ihr Gehirn regenerieren.",
        nl: "Axolotls kunnen hun hersenen regenereren."
      },
      isTrue: true,
      explanation: {
        en: "Axolotls have remarkable regenerative abilities and can regrow parts of their brain without scarring.",
        es: "Los axolotes tienen habilidades regenerativas notables y pueden regenerar partes de su cerebro sin cicatrices.",
        de: "Axolotl haben bemerkenswerte Regenerationsfähigkeiten und können Teile ihres Gehirns ohne Narbenbildung nachwachsen lassen.",
        nl: "Axolotls hebben opmerkelijke regeneratieve vermogens en kunnen delen van hun hersenen laten aangroeien zonder littekens."
      }
    },
    {
      id: 'an_66',
      question: {
        en: "Peacocks are male and peahens are female.",
        es: "Los pavos reales son machos y las pavas reales son hembras.",
        de: "Pfauen sind männlich und Pfauenhennen sind weiblich.",
        nl: "Pauwen zijn mannelijk en pauwinnen zijn vrouwelijk."
      },
      isTrue: true,
      explanation: {
        en: "The term 'peacock' specifically refers to males, while females are called 'peahens'. Together they are peafowl.",
        es: "El término 'pavo real' se refiere específicamente a los machos, mientras que las hembras se llaman 'pavas reales'.",
        de: "Der Begriff 'Pfau' bezieht sich speziell auf Männchen, während Weibchen 'Pfauenhennen' genannt werden.",
        nl: "De term 'pauw' verwijst specifiek naar mannetjes, terwijl vrouwtjes 'pauwinnen' worden genoemd."
      }
    },
    {
      id: 'an_67',
      question: {
        en: "Mantis shrimp can punch with the force of a bullet.",
        es: "Los camarones mantis pueden golpear con la fuerza de una bala.",
        de: "Fangschreckenkrebse können mit der Kraft einer Kugel zuschlagen.",
        nl: "Bidsprinkhaangarnalen kunnen slaan met de kracht van een kogel."
      },
      isTrue: true,
      explanation: {
        en: "Mantis shrimp strikes can reach speeds of 50 mph and generate temperatures as hot as the sun's surface.",
        es: "Los golpes del camarón mantis pueden alcanzar velocidades de 80 km/h y generar temperaturas tan calientes como la superficie del sol.",
        de: "Fangschreckenkrebse können Geschwindigkeiten von 80 km/h erreichen und Temperaturen so heiß wie die Sonnenoberfläche erzeugen.",
        nl: "Bidsprinkhaangarnalen kunnen snelheden van 80 km/u bereiken en temperaturen genereren zo heet als het oppervlak van de zon."
      }
    },
    {
      id: 'an_68',
      question: {
        en: "Male lions do most of the hunting.",
        es: "Los leones machos hacen la mayor parte de la caza.",
        de: "Männliche Löwen jagen am meisten.",
        nl: "Mannelijke leeuwen doen het meeste jagen."
      },
      isTrue: false,
      explanation: {
        en: "Female lions (lionesses) do 85-90% of the hunting, while males mainly protect the territory.",
        es: "Las leonas hacen el 85-90% de la caza, mientras que los machos principalmente protegen el territorio.",
        de: "Weibliche Löwen (Löwinnen) erledigen 85-90% der Jagd, während Männchen hauptsächlich das Territorium schützen.",
        nl: "Vrouwelijke leeuwen (leeuwinnen) doen 85-90% van de jacht, terwijl mannetjes voornamelijk het territorium beschermen."
      }
    },
    {
      id: 'an_69',
      question: {
        en: "Monarch butterflies migrate up to 3,000 miles.",
        es: "Las mariposas monarca migran hasta 4,800 kilómetros.",
        de: "Monarchfalter wandern bis zu 4.800 Kilometer.",
        nl: "Monarchvlinders migreren tot 4.800 kilometer."
      },
      isTrue: true,
      explanation: {
        en: "Monarch butterflies make an incredible annual migration from North America to Mexico, covering up to 3,000 miles.",
        es: "Las mariposas monarca realizan una increíble migración anual desde América del Norte hasta México.",
        de: "Monarchfalter unternehmen eine unglaubliche jährliche Wanderung von Nordamerika nach Mexiko.",
        nl: "Monarchvlinders maken een ongelooflijke jaarlijkse migratie van Noord-Amerika naar Mexico."
      }
    },
    {
      id: 'an_70',
      question: {
        en: "Narwhals are mythical creatures.",
        es: "Los narvales son criaturas míticas.",
        de: "Narwale sind mythische Kreaturen.",
        nl: "Narwals zijn mythische wezens."
      },
      isTrue: false,
      explanation: {
        en: "Narwhals are real arctic whales with a long spiral tusk, often called 'unicorns of the sea'.",
        es: "Los narvales son ballenas árticas reales con un largo colmillo en espiral, a menudo llamados 'unicornios del mar'.",
        de: "Narwale sind echte arktische Wale mit einem langen spiralförmigen Stoßzahn.",
        nl: "Narwals zijn echte arctische walvissen met een lange spiraalvormige slagtand, vaak 'eenhoorns van de zee' genoemd."
      }
    },
    {
      id: 'an_71',
      question: {
        en: "A group of hedgehogs is called an 'array'.",
        es: "Un grupo de erizos se llama un 'array'.",
        de: "Eine Gruppe von Igeln wird 'Array' genannt.",
        nl: "Een groep egels wordt een 'array' genoemd."
      },
      isTrue: true,
      explanation: {
        en: "The collective noun for hedgehogs is indeed an 'array', though 'prickle' is also sometimes used.",
        es: "El sustantivo colectivo para erizos es 'array', aunque también se usa 'prickle' a veces.",
        de: "Das Kollektivnomen für Igel ist tatsächlich 'Array', obwohl auch manchmal 'Prickle' verwendet wird.",
        nl: "Het collectieve zelfstandig naamwoord voor egels is inderdaad een 'array', hoewel ook soms 'prickle' wordt gebruikt."
      }
    },
    {
      id: 'an_72',
      question: {
        en: "Platypuses are venomous.",
        es: "Los ornitorrincos son venenosos.",
        de: "Schnabeltiere sind giftig.",
        nl: "Vogelbekdieren zijn giftig."
      },
      isTrue: true,
      explanation: {
        en: "Male platypuses have venomous spurs on their hind legs that can cause severe pain to humans.",
        es: "Los ornitorrincos machos tienen espuelas venenosas en sus patas traseras que pueden causar dolor severo.",
        de: "Männliche Schnabeltiere haben giftige Sporen an ihren Hinterbeinen, die beim Menschen starke Schmerzen verursachen können.",
        nl: "Mannelijke vogelbekdieren hebben giftige sporen aan hun achterpoten die ernstige pijn bij mensen kunnen veroorzaken."
      }
    },
    {
      id: 'an_73',
      question: {
        en: "Crows can hold grudges against humans for years.",
        es: "Los cuervos pueden guardar rencor contra los humanos durante años.",
        de: "Krähen können jahrelang Groll gegen Menschen hegen.",
        nl: "Kraaien kunnen jarenlang wrok koesteren tegen mensen."
      },
      isTrue: true,
      explanation: {
        en: "Crows remember individual human faces and can pass this information to other crows.",
        es: "Los cuervos recuerdan rostros humanos individuales y pueden pasar esta información a otros cuervos.",
        de: "Krähen erinnern sich an einzelne menschliche Gesichter und können diese Information an andere Krähen weitergeben.",
        nl: "Kraaien onthouden individuele menselijke gezichten en kunnen deze informatie doorgeven aan andere kraaien."
      }
    },
    {
      id: 'an_74',
      question: {
        en: "Sea otters hold hands while sleeping to avoid drifting apart.",
        es: "Las nutrias marinas se toman de las manos mientras duermen para evitar separarse.",
        de: "Seeotter halten sich beim Schlafen an den Händen, um nicht voneinander abzudriften.",
        nl: "Zee-otters houden elkaars poten vast tijdens het slapen om niet uit elkaar te drijven."
      },
      isTrue: true,
      explanation: {
        en: "Sea otters form 'rafts' and hold hands or wrap themselves in kelp to stay together while sleeping.",
        es: "Las nutrias marinas forman 'balsas' y se toman de las manos o se envuelven en algas para permanecer juntas.",
        de: "Seeotter bilden 'Flöße' und halten Hände oder wickeln sich in Seetang ein, um zusammenzubleiben.",
        nl: "Zee-otters vormen 'vlotten' en houden elkaars poten vast of wikkelen zich in kelp om bij elkaar te blijven."
      }
    },
    {
      id: 'an_75',
      question: {
        en: "Honey never spoils.",
        es: "La miel nunca se echa a perder.",
        de: "Honig verdirbt nie.",
        nl: "Honing bederft nooit."
      },
      isTrue: true,
      explanation: {
        en: "Archaeologists have found 3,000-year-old honey in Egyptian tombs that is still edible.",
        es: "Los arqueólogos han encontrado miel de 3,000 años en tumbas egipcias que aún es comestible.",
        de: "Archäologen haben 3.000 Jahre alten Honig in ägyptischen Gräbern gefunden, der noch essbar ist.",
        nl: "Archeologen hebben 3.000 jaar oude honing gevonden in Egyptische graven die nog steeds eetbaar is."
      }
    },
    {
      id: 'an_76',
      question: {
        en: "Gorillas and humans share 98% of their DNA.",
        es: "Los gorilas y los humanos comparten el 98% de su ADN.",
        de: "Gorillas und Menschen teilen 98% ihrer DNA.",
        nl: "Gorilla's en mensen delen 98% van hun DNA."
      },
      isTrue: true,
      explanation: {
        en: "Gorillas are our close relatives, sharing approximately 98% of their genetic material with humans.",
        es: "Los gorilas son nuestros parientes cercanos, compartiendo aproximadamente el 98% de su material genético con los humanos.",
        de: "Gorillas sind unsere nahen Verwandten und teilen etwa 98% ihres genetischen Materials mit Menschen.",
        nl: "Gorilla's zijn onze naaste verwanten en delen ongeveer 98% van hun genetisch materiaal met mensen."
      }
    },
    {
      id: 'an_77',
      question: {
        en: "Polar bears are left-handed.",
        es: "Los osos polares son zurdos.",
        de: "Eisbären sind Linkshänder.",
        nl: "IJsberen zijn linkshandig."
      },
      isTrue: false,
      explanation: {
        en: "This is a myth with no scientific evidence. Polar bears show no paw preference.",
        es: "Esto es un mito sin evidencia científica. Los osos polares no muestran preferencia de pata.",
        de: "Dies ist ein Mythos ohne wissenschaftliche Beweise. Eisbären zeigen keine Pfotenpräferenz.",
        nl: "Dit is een mythe zonder wetenschappelijk bewijs. IJsberen tonen geen pootvoorkeur."
      }
    },
    {
      id: 'an_78',
      question: {
        en: "Raccoons wash their food before eating.",
        es: "Los mapaches lavan su comida antes de comer.",
        de: "Waschbären waschen ihr Essen vor dem Verzehr.",
        nl: "Wasberen wassen hun voedsel voor het eten."
      },
      isTrue: false,
      explanation: {
        en: "Raccoons appear to wash food but are actually using water to enhance their sense of touch.",
        es: "Los mapaches parecen lavar la comida pero en realidad usan agua para mejorar su sentido del tacto.",
        de: "Waschbären scheinen Essen zu waschen, nutzen aber tatsächlich Wasser, um ihren Tastsinn zu verbessern.",
        nl: "Wasberen lijken voedsel te wassen maar gebruiken eigenlijk water om hun tastzin te verbeteren."
      }
    },
    {
      id: 'an_79',
      question: {
        en: "Male seahorses give birth.",
        es: "Los caballitos de mar machos dan a luz.",
        de: "Männliche Seepferdchen gebären.",
        nl: "Mannelijke zeepaardjes baren."
      },
      isTrue: true,
      explanation: {
        en: "Female seahorses deposit eggs into the male's brood pouch, where he fertilizes and carries them until birth.",
        es: "Las hembras depositan huevos en la bolsa del macho, donde él los fertiliza y lleva hasta el nacimiento.",
        de: "Weibliche Seepferdchen legen Eier in die Bruttasche des Männchens, wo er sie befruchtet und bis zur Geburt trägt.",
        nl: "Vrouwelijke zeepaardjes leggen eieren in de broedzak van het mannetje, waar hij ze bevrucht en draagt tot de geboorte."
      }
    },
    {
      id: 'an_80',
      question: {
        en: "Alpacas spit at humans when annoyed.",
        es: "Las alpacas escupen a los humanos cuando están molestas.",
        de: "Alpakas spucken Menschen an, wenn sie genervt sind.",
        nl: "Alpaca's spugen naar mensen wanneer ze geïrriteerd zijn."
      },
      isTrue: true,
      explanation: {
        en: "Alpacas spit as a defense mechanism or to establish dominance, usually at other alpacas but sometimes at humans.",
        es: "Las alpacas escupen como mecanismo de defensa o para establecer dominio, usualmente a otras alpacas pero a veces a humanos.",
        de: "Alpakas spucken als Abwehrmechanismus oder um Dominanz zu etablieren, meist andere Alpakas aber manchmal Menschen.",
        nl: "Alpaca's spugen als verdedigingsmechanisme of om dominantie te vestigen, meestal naar andere alpaca's maar soms naar mensen."
      }
    },
    {
      id: 'an_81',
      question: {
        en: "Butterflies can see ultraviolet light.",
        es: "Las mariposas pueden ver luz ultravioleta.",
        de: "Schmetterlinge können ultraviolettes Licht sehen.",
        nl: "Vlinders kunnen ultraviolet licht zien."
      },
      isTrue: true,
      explanation: {
        en: "Butterflies have complex eyes that can see ultraviolet patterns invisible to humans.",
        es: "Las mariposas tienen ojos complejos que pueden ver patrones ultravioletas invisibles para los humanos.",
        de: "Schmetterlinge haben komplexe Augen, die ultraviolette Muster sehen können, die für Menschen unsichtbar sind.",
        nl: "Vlinders hebben complexe ogen die ultraviolette patronen kunnen zien die onzichtbaar zijn voor mensen."
      }
    },
    {
      id: 'an_82',
      question: {
        en: "Meerkats take turns standing guard.",
        es: "Los suricatas se turnan para hacer guardia.",
        de: "Erdmännchen wechseln sich beim Wache halten ab.",
        nl: "Stokstaartjes wisselen elkaar af bij het op wacht staan."
      },
      isTrue: true,
      explanation: {
        en: "Meerkats have a cooperative system where individuals take turns acting as sentries to watch for predators.",
        es: "Los suricatas tienen un sistema cooperativo donde individuos se turnan actuando como centinelas.",
        de: "Erdmännchen haben ein kooperatives System, bei dem sich Individuen abwechseln, um als Wächter nach Raubtieren Ausschau zu halten.",
        nl: "Stokstaartjes hebben een coöperatief systeem waarbij individuen om beurten als schildwacht optreden om op roofdieren te letten."
      }
    },
    {
      id: 'an_83',
      question: {
        en: "Ladybugs can eat up to 5,000 aphids in their lifetime.",
        es: "Las mariquitas pueden comer hasta 5,000 pulgones en su vida.",
        de: "Marienkäfer können in ihrem Leben bis zu 5.000 Blattläuse fressen.",
        nl: "Lieveheersbeestjes kunnen tot 5.000 bladluizen eten in hun leven."
      },
      isTrue: true,
      explanation: {
        en: "Ladybugs are voracious predators of aphids and other plant pests, making them valuable for gardeners.",
        es: "Las mariquitas son depredadores voraces de pulgones y otras plagas, haciéndolas valiosas para jardineros.",
        de: "Marienkäfer sind gefräßige Jäger von Blattläusen und anderen Pflanzenschädlingen.",
        nl: "Lieveheersbeestjes zijn vraatzuchtige predatoren van bladluizen en andere plantenplagen, waardoor ze waardevol zijn voor tuiniers."
      }
    },
    {
      id: 'an_84',
      question: {
        en: "Cats have nine lives.",
        es: "Los gatos tienen nueve vidas.",
        de: "Katzen haben neun Leben.",
        nl: "Katten hebben negen levens."
      },
      isTrue: false,
      explanation: {
        en: "This is just a saying based on cats' agility and ability to survive falls. They only have one life.",
        es: "Esto es solo un dicho basado en la agilidad de los gatos. Solo tienen una vida.",
        de: "Dies ist nur ein Sprichwort basierend auf der Beweglichkeit von Katzen. Sie haben nur ein Leben.",
        nl: "Dit is slechts een gezegde gebaseerd op de behendigheid van katten. Ze hebben maar één leven."
      }
    },
    {
      id: 'an_85',
      question: {
        en: "A group of owls is called a 'parliament'.",
        es: "Un grupo de búhos se llama un 'parlamento'.",
        de: "Eine Gruppe von Eulen wird 'Parlament' genannt.",
        nl: "Een groep uilen wordt een 'parliament' genoemd."
      },
      isTrue: true,
      explanation: {
        en: "The collective noun for owls is a 'parliament', likely due to their reputation for wisdom.",
        es: "El sustantivo colectivo para búhos es 'parlamento', probablemente debido a su reputación de sabiduría.",
        de: "Das Kollektivnomen für Eulen ist 'Parlament', wahrscheinlich aufgrund ihres Rufs für Weisheit.",
        nl: "Het collectieve zelfstandig naamwoord voor uilen is een 'parliament', waarschijnlijk vanwege hun reputatie van wijsheid."
      }
    },
    {
      id: 'an_86',
      question: {
        en: "Dogs sweat through their paws.",
        es: "Los perros sudan a través de sus patas.",
        de: "Hunde schwitzen durch ihre Pfoten.",
        nl: "Honden zweten door hun poten."
      },
      isTrue: true,
      explanation: {
        en: "Dogs have sweat glands in their paw pads and regulate temperature mainly by panting.",
        es: "Los perros tienen glándulas sudoríparas en las almohadillas de sus patas y regulan la temperatura principalmente jadeando.",
        de: "Hunde haben Schweißdrüsen in ihren Pfotenballen und regulieren die Temperatur hauptsächlich durch Hecheln.",
        nl: "Honden hebben zweetklieren in hun pootkussentjes en reguleren temperatuur voornamelijk door hijgen."
      }
    },
    {
      id: 'an_87',
      question: {
        en: "Chickens can remember over 100 different faces.",
        es: "Las gallinas pueden recordar más de 100 rostros diferentes.",
        de: "Hühner können sich an über 100 verschiedene Gesichter erinnern.",
        nl: "Kippen kunnen meer dan 100 verschillende gezichten onthouden."
      },
      isTrue: true,
      explanation: {
        en: "Chickens have excellent facial recognition and can distinguish between humans and other chickens.",
        es: "Las gallinas tienen excelente reconocimiento facial y pueden distinguir entre humanos y otras gallinas.",
        de: "Hühner haben eine ausgezeichnete Gesichtserkennung und können zwischen Menschen und anderen Hühnern unterscheiden.",
        nl: "Kippen hebben uitstekende gezichtsherkenning en kunnen onderscheid maken tussen mensen en andere kippen."
      }
    },
    {
      id: 'an_88',
      question: {
        en: "Walruses can sleep while floating in water.",
        es: "Las morsas pueden dormir mientras flotan en el agua.",
        de: "Walrosse können beim Schwimmen im Wasser schlafen.",
        nl: "Walrussen kunnen slapen terwijl ze in het water drijven."
      },
      isTrue: true,
      explanation: {
        en: "Walruses have air sacs in their throats that act like inflatable pillows, allowing them to sleep while floating.",
        es: "Las morsas tienen sacos de aire en la garganta que actúan como almohadas inflables, permitiéndoles dormir flotando.",
        de: "Walrosse haben Luftsäcke in ihren Kehlen, die wie aufblasbare Kissen wirken und ihnen ermöglichen, beim Schwimmen zu schlafen.",
        nl: "Walrussen hebben luchtzakken in hun keel die werken als opblaasbare kussens, waardoor ze kunnen slapen terwijl ze drijven."
      }
    },
    {
      id: 'an_89',
      question: {
        en: "Komodo dragons can reproduce without males.",
        es: "Los dragones de Komodo pueden reproducirse sin machos.",
        de: "Komodowarane können sich ohne Männchen fortpflanzen.",
        nl: "Komodovaranen kunnen zich voortplanten zonder mannetjes."
      },
      isTrue: true,
      explanation: {
        en: "Female Komodo dragons can reproduce through parthenogenesis, producing offspring without mating.",
        es: "Las hembras de dragón de Komodo pueden reproducirse mediante partenogénesis, produciendo crías sin aparearse.",
        de: "Weibliche Komodowarane können sich durch Parthenogenese fortpflanzen und Nachkommen ohne Paarung produzieren.",
        nl: "Vrouwelijke Komodovaranen kunnen zich voortplanten via parthenogenese, waarbij nakomelingen worden geproduceerd zonder paring."
      }
    },
    {
      id: 'an_90',
      question: {
        en: "Deer shed and regrow their antlers every year.",
        es: "Los ciervos mudan y regeneran sus astas cada año.",
        de: "Hirsche werfen ihre Geweihe jedes Jahr ab und lassen sie nachwachsen.",
        nl: "Herten werpen hun gewei elk jaar af en laten het opnieuw groeien."
      },
      isTrue: true,
      explanation: {
        en: "Male deer shed their antlers annually after mating season and grow a new, larger set each year.",
        es: "Los ciervos machos mudan sus astas anualmente después de la temporada de apareamiento y crecen un conjunto más grande cada año.",
        de: "Männliche Hirsche werfen ihre Geweihe jährlich nach der Paarungszeit ab und lassen jedes Jahr ein neues, größeres Set wachsen.",
        nl: "Mannelijke herten werpen hun gewei jaarlijks af na het paarseizoen en laten elk jaar een nieuwe, grotere set groeien."
      }
    },
    {
      id: 'an_91',
      question: {
        en: "Tarantulas can regenerate lost legs.",
        es: "Las tarántulas pueden regenerar patas perdidas.",
        de: "Vogelspinnen können verlorene Beine regenerieren.",
        nl: "Tarantula's kunnen verloren poten regenereren."
      },
      isTrue: true,
      explanation: {
        en: "Tarantulas can regrow lost legs during their molting process, though the new leg may be smaller.",
        es: "Las tarántulas pueden regenerar patas perdidas durante su proceso de muda, aunque la nueva pata puede ser más pequeña.",
        de: "Vogelspinnen können während ihrer Häutung verlorene Beine nachwachsen lassen, obwohl das neue Bein kleiner sein kann.",
        nl: "Tarantula's kunnen verloren poten laten aangroeien tijdens hun vervelproces, hoewel de nieuwe poot kleiner kan zijn."
      }
    },
    {
      id: 'an_92',
      question: {
        en: "Parrots can live up to 80 years in captivity.",
        es: "Los loros pueden vivir hasta 80 años en cautiverio.",
        de: "Papageien können in Gefangenschaft bis zu 80 Jahre alt werden.",
        nl: "Papegaaien kunnen tot 80 jaar leven in gevangenschap."
      },
      isTrue: true,
      explanation: {
        en: "Large parrot species like macaws and cockatoos can live 60-80 years, often outliving their owners.",
        es: "Las especies grandes de loros como guacamayos y cacatúas pueden vivir 60-80 años, a menudo sobreviviendo a sus dueños.",
        de: "Große Papageienarten wie Aras und Kakadus können 60-80 Jahre alt werden und überleben oft ihre Besitzer.",
        nl: "Grote papegaaiensoorten zoals ara's en kaketoes kunnen 60-80 jaar leven en overleven vaak hun eigenaren."
      }
    },
    {
      id: 'an_93',
      question: {
        en: "Anteaters have no teeth.",
        es: "Los osos hormigueros no tienen dientes.",
        de: "Ameisenbären haben keine Zähne.",
        nl: "Miereneters hebben geen tanden."
      },
      isTrue: true,
      explanation: {
        en: "Anteaters are toothless and use their long sticky tongues to catch ants and termites.",
        es: "Los osos hormigueros no tienen dientes y usan sus lenguas largas y pegajosas para atrapar hormigas y termitas.",
        de: "Ameisenbären haben keine Zähne und benutzen ihre langen klebrigen Zungen, um Ameisen und Termiten zu fangen.",
        nl: "Miereneters hebben geen tanden en gebruiken hun lange plakkerige tongen om mieren en termieten te vangen."
      }
    },
    {
      id: 'an_94',
      question: {
        en: "Hares and rabbits are the same species.",
        es: "Las liebres y los conejos son la misma especie.",
        de: "Hasen und Kaninchen sind dieselbe Art.",
        nl: "Hazen en konijnen zijn dezelfde soort."
      },
      isTrue: false,
      explanation: {
        en: "Hares and rabbits are different species. Hares are larger, have longer ears, and are born with fur and open eyes.",
        es: "Las liebres y los conejos son especies diferentes. Las liebres son más grandes, tienen orejas más largas y nacen con pelaje.",
        de: "Hasen und Kaninchen sind verschiedene Arten. Hasen sind größer, haben längere Ohren und werden mit Fell geboren.",
        nl: "Hazen en konijnen zijn verschillende soorten. Hazen zijn groter, hebben langere oren en worden geboren met vacht."
      }
    },
    {
      id: 'an_95',
      question: {
        en: "Hedgehogs are immune to snake venom.",
        es: "Los erizos son inmunes al veneno de serpiente.",
        de: "Igel sind immun gegen Schlangengift.",
        nl: "Egels zijn immuun voor slangengif."
      },
      isTrue: true,
      explanation: {
        en: "Hedgehogs have developed immunity to certain snake venoms and can hunt and eat venomous snakes.",
        es: "Los erizos han desarrollado inmunidad a ciertos venenos de serpiente y pueden cazar y comer serpientes venenosas.",
        de: "Igel haben Immunität gegen bestimmte Schlangengifte entwickelt und können giftige Schlangen jagen und fressen.",
        nl: "Egels hebben immuniteit ontwikkeld tegen bepaalde slangengiften en kunnen giftige slangen jagen en eten."
      }
    },
    {
      id: 'an_96',
      question: {
        en: "Gorillas beat their chests as a sign of aggression.",
        es: "Los gorilas se golpean el pecho como señal de agresión.",
        de: "Gorillas schlagen sich auf die Brust als Zeichen von Aggression.",
        nl: "Gorilla's slaan op hun borst als teken van agressie."
      },
      isTrue: false,
      explanation: {
        en: "Gorillas beat their chests as communication, to show strength, or to establish dominance, not necessarily aggression.",
        es: "Los gorilas se golpean el pecho como comunicación, para mostrar fuerza o establecer dominio, no necesariamente agresión.",
        de: "Gorillas schlagen auf ihre Brust zur Kommunikation, um Stärke zu zeigen oder Dominanz zu etablieren.",
        nl: "Gorilla's slaan op hun borst als communicatie, om kracht te tonen of dominantie te vestigen, niet noodzakelijk agressie."
      }
    },
    {
      id: 'an_97',
      question: {
        en: "Skunks can spray their scent up to 10 feet.",
        es: "Las mofetas pueden rociar su olor hasta 3 metros.",
        de: "Stinktiere können ihren Geruch bis zu 3 Meter weit sprühen.",
        nl: "Stinkdieren kunnen hun geur tot 3 meter ver spuiten."
      },
      isTrue: true,
      explanation: {
        en: "Skunks can accurately spray their defensive musk up to 10-15 feet with remarkable accuracy.",
        es: "Las mofetas pueden rociar con precisión su almizcle defensivo hasta 3-4.5 metros con notable precisión.",
        de: "Stinktiere können ihren Verteidigungsduft bis zu 3-4,5 Meter weit mit bemerkenswerter Genauigkeit sprühen.",
        nl: "Stinkdieren kunnen hun verdedigingsmuskus tot 3-4,5 meter ver spuiten met opmerkelijke nauwkeurigheid."
      }
    },
    {
      id: 'an_98',
      question: {
        en: "Peacock feathers bring bad luck.",
        es: "Las plumas de pavo real traen mala suerte.",
        de: "Pfauenfedern bringen Unglück.",
        nl: "Pauwenveren brengen ongeluk."
      },
      isTrue: false,
      explanation: {
        en: "This is a superstition with no scientific basis. Peacock feathers are just decorative plumage.",
        es: "Esto es una superstición sin base científica. Las plumas de pavo real son solo plumaje decorativo.",
        de: "Dies ist ein Aberglaube ohne wissenschaftliche Grundlage. Pfauenfedern sind nur dekoratives Gefieder.",
        nl: "Dit is een bijgeloof zonder wetenschappelijke basis. Pauwenveren zijn gewoon decoratief verenkleed."
      }
    },
    {
      id: 'an_99',
      question: {
        en: "Lemurs are only found in Madagascar.",
        es: "Los lémures solo se encuentran en Madagascar.",
        de: "Lemuren kommen nur in Madagaskar vor.",
        nl: "Lemuren komen alleen voor op Madagaskar."
      },
      isTrue: true,
      explanation: {
        en: "Lemurs are endemic to Madagascar, meaning they naturally exist nowhere else in the wild.",
        es: "Los lémures son endémicos de Madagascar, lo que significa que naturalmente no existen en ningún otro lugar en estado salvaje.",
        de: "Lemuren sind in Madagaskar endemisch, was bedeutet, dass sie in freier Wildbahn nirgendwo sonst natürlich vorkommen.",
        nl: "Lemuren zijn endemisch voor Madagaskar, wat betekent dat ze in het wild nergens anders natuurlijk voorkomen."
      }
    },
    {
      id: 'an_100',
      question: {
        en: "Albatrosses can fly for months without landing.",
        es: "Los albatros pueden volar durante meses sin aterrizar.",
        de: "Albatrosse können monatelang fliegen ohne zu landen.",
        nl: "Albatrossen kunnen maandenlang vliegen zonder te landen."
      },
      isTrue: true,
      explanation: {
        en: "Albatrosses can stay airborne for months, using dynamic soaring to glide effortlessly over oceans.",
        es: "Los albatros pueden permanecer en el aire durante meses, usando planeo dinámico para deslizarse sin esfuerzo sobre los océanos.",
        de: "Albatrosse können monatelang in der Luft bleiben und nutzen dynamisches Segeln, um mühelos über Ozeane zu gleiten.",
        nl: "Albatrossen kunnen maandenlang in de lucht blijven en gebruiken dynamisch zweefvliegen om moeiteloos over oceanen te glijden."
      }
    }
  ];

  // Export to window
  window.trueFalseCategories = window.trueFalseCategories || {};
  window.trueFalseCategories['animals-nature'] = animalsNatureQuestions;

  console.log(`Loaded ${animalsNatureQuestions.length} animals & nature true/false questions`);

})();
