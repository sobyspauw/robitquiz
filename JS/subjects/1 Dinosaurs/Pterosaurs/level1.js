// Pterosaurs Quiz - Level 1: Basic Pterosaur Knowledge
(function() {
  const level1 = {
    name: {
      en: "Pterosaurs Level 1",
      es: "Pterosaurios Nivel 1",
      de: "Pterosaurier Stufe 1",
      nl: "Pterosauriërs Level 1"
    },
    questions: [
      {
        question: {
          en: "Were pterosaurs actually dinosaurs?",
          es: "¿Eran los pterosaurios realmente dinosaurios?",
          de: "Waren Pterosaurier tatsächlich Dinosaurier?",
          nl: "Waren pterosauriërs eigenlijk dinosaurussen?"
        },
        options: [
          { en: "No, they were flying reptiles related to dinosaurs", es: "No, eran reptiles voladores relacionados con dinosaurios", de: "Nein, sie waren fliegende Reptilien verwandt mit Dinosauriern", nl: "Nee, het waren vliegende reptielen verwant aan dinosaurussen" },
          { en: "Yes, they were flying dinosaurs", es: "Sí, eran dinosaurios voladores", de: "Ja, sie waren fliegende Dinosaurier", nl: "Ja, het waren vliegende dinosaurussen" },
          { en: "They were actually ancient birds", es: "En realidad eran aves antiguas", de: "Sie waren eigentlich urzeitliche Vögel", nl: "Het waren eigenlijk oude vogels" },
          { en: "They were giant insects", es: "Eran insectos gigantes", de: "Sie waren Rieseninsekten", nl: "Het waren reuze-insecten" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaurs were not dinosaurs but were closely related flying reptiles that lived at the same time as dinosaurs.",
          es: "Los pterosaurios no eran dinosaurios sino reptiles voladores estrechamente relacionados que vivieron al mismo tiempo que los dinosaurios.",
          de: "Pterosaurier waren keine Dinosaurier, sondern eng verwandte fliegende Reptilien, die zur gleichen Zeit wie Dinosaurier lebten.",
          nl: "Pterosauriërs waren geen dinosaurussen maar nauw verwante vliegende reptielen die tegelijkertijd leefden met dinosaurussen."
        }
      },
      {
        question: {
          en: "What were pterosaur wings made of?",
          es: "¿De qué estaban hechas las alas de los pterosaurios?",
          de: "Woraus bestanden die Flügel der Pterosaurier?",
          nl: "Waar waren pterosauriër vleugels van gemaakt?"
        },
        options: [
          { en: "Skin membrane stretched between fingers", es: "Membrana de piel estirada entre los dedos", de: "Hautmembran gespannt zwischen Fingern", nl: "Huidmembraan gespannen tussen vingers" },
          { en: "Feathers like birds", es: "Plumas como las aves", de: "Federn wie Vögel", nl: "Veren zoals vogels" },
          { en: "Hard bone plates", es: "Placas óseas duras", de: "Harte Knochenplatten", nl: "Harde botplaten" },
          { en: "Metal scales", es: "Escamas metálicas", de: "Metallschuppen", nl: "Metalen schubben" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaur wings were made of a flexible skin membrane that stretched from their extremely long fourth finger to their body and legs.",
          es: "Las alas de pterosaurio estaban hechas de una membrana de piel flexible que se extendía desde su cuarto dedo extremadamente largo hasta su cuerpo y piernas.",
          de: "Pterosaurier-Flügel bestanden aus einer flexiblen Hautmembran, die sich von ihrem extrem langen vierten Finger zu Körper und Beinen spannte.",
          nl: "Pterosauriër vleugels waren gemaakt van een flexibel huidmembraan dat zich uitstrekte van hun extreem lange vierde vinger naar hun lichaam en poten."
        }
      },
      {
        question: {
          en: "What was the largest pterosaur ever discovered?",
          es: "¿Cuál fue el pterosaurio más grande jamás descubierto?",
          de: "Was war der größte jemals entdeckte Pterosaurier?",
          nl: "Wat was de grootste pterosauriër ooit ontdekt?"
        },
        options: [
          { en: "Quetzalcoatlus", es: "Quetzalcoatlus", de: "Quetzalcoatlus", nl: "Quetzalcoatlus" },
          { en: "Pteranodon", es: "Pteranodon", de: "Pteranodon", nl: "Pteranodon" },
          { en: "T-Rex", es: "T-Rex", de: "T-Rex", nl: "T-Rex" },
          { en: "Brontosaurus", es: "Brontosaurus", de: "Brontosaurus", nl: "Brontosaurus" }
        ],
        correct: 0,
        explanation: {
          en: "Quetzalcoatlus was enormous with a wingspan of up to 10 meters (33 feet), making it one of the largest flying creatures ever.",
          es: "Quetzalcoatlus era enorme con una envergadura de hasta 10 metros (33 pies), convirtiéndolo en una de las criaturas voladoras más grandes jamás existidas.",
          de: "Quetzalcoatlus war riesig mit einer Flügelspannweite von bis zu 10 Metern (33 Fuß) und damit eines der größten fliegenden Lebewesen aller Zeiten.",
          nl: "Quetzalcoatlus was enorm met een spanwijdte van wel 10 meter (33 voet), waardoor het een van de grootste vliegende wezens ooit was."
        }
      },
      {
        question: {
          en: "What did most pterosaurs eat?",
          es: "¿Qué comían la mayoría de los pterosaurios?",
          de: "Was fraßen die meisten Pterosaurier?",
          nl: "Wat aten de meeste pterosauriërs?"
        },
        options: [
          { en: "Fish and other sea creatures", es: "Peces y otras criaturas marinas", de: "Fische und andere Meerestiere", nl: "Vis en andere zeewezens" },
          { en: "Only plants and leaves", es: "Solo plantas y hojas", de: "Nur Pflanzen und Blätter", nl: "Alleen planten en bladeren" },
          { en: "Large dinosaurs", es: "Dinosaurios grandes", de: "Große Dinosaurier", nl: "Grote dinosaurussen" },
          { en: "Rocks and minerals", es: "Rocas y minerales", de: "Gestein und Mineralien", nl: "Rotsen en mineralen" }
        ],
        correct: 0,
        explanation: {
          en: "Many pterosaurs lived near water and had long beaks perfect for catching fish, though some species ate insects or small land animals.",
          es: "Muchos pterosaurios vivían cerca del agua y tenían picos largos perfectos para atrapar peces, aunque algunas especies comían insectos o pequeños animales terrestres.",
          de: "Viele Pterosaurier lebten in Wassernähe und hatten lange Schnäbel, die perfekt zum Fischfang waren, obwohl einige Arten Insekten oder kleine Landtiere fraßen.",
          nl: "Veel pterosauriërs leefden bij water en hadden lange snavels perfect voor het vangen van vis, hoewel sommige soorten insecten of kleine landdieren aten."
        }
      },
      {
        question: {
          en: "How did baby pterosaurs likely learn to fly?",
          es: "¿Cómo aprendían probablemente a volar los pterosaurios bebé?",
          de: "Wie lernten Pterosaurier-Babys wahrscheinlich zu fliegen?",
          nl: "Hoe leerden baby pterosauriërs waarschijnlijk vliegen?"
        },
        options: [
          { en: "They could fly almost immediately after hatching", es: "Podían volar casi inmediatamente después de nacer", de: "Sie konnten fast sofort nach dem Schlüpfen fliegen", nl: "Ze konden bijna meteen na het uitkomen vliegen" },
          { en: "Their parents taught them for many yrs", es: "Sus padres les enseñaron durante muchos años", de: "Ihre Eltern lehrten sie viele Jahre lang", nl: "Hun ouders leerden het hen gedurende vele jaren" },
          { en: "They never learned to fly", es: "Nunca aprendieron a volar", de: "Sie lernten nie zu fliegen", nl: "Ze leerden nooit vliegen" },
          { en: "They built flying machines", es: "Construían máquinas voladoras", de: "Sie bauten Flugmaschinen", nl: "Ze bouwden vliegmachines" }
        ],
        correct: 0,
        explanation: {
          en: "Unlike bird chicks, pterosaur babies were born with well-developed wings and could probably fly shortly after hatching.",
          es: "A diferencia de los polluelos, los bebés pterosaurio nacían con alas bien desarrolladas y probablemente podían volar poco después de nacer.",
          de: "Im Gegensatz zu Vogelküken wurden Pterosaurier-Babys mit gut entwickelten Flügeln geboren und konnten wahrscheinlich kurz nach dem Schlüpfen fliegen.",
          nl: "In tegenstelling tot vogelkuikens werden pterosauriër baby's geboren met goed ontwikkelde vleugels en konden waarschijnlijk kort na het uitkomen vliegen."
        }
      },
      {
        question: {
          en: "When did pterosaurs first appear in Earth's history?",
          es: "¿Cuándo aparecieron por primera vez los pterosaurios en la historia de la Tierra?",
          de: "Wann erschienen Pterosaurier zum ersten Mal in der Erdgeschichte?",
          nl: "Wanneer verschenen pterosauriërs voor het eerst in de aardgeschiedenis?"
        },
        options: [
          { en: "Late Triassic period (about 228 million years ago)", es: "Período Triásico tardío (hace unos 228 millones de años)", de: "Späte Trias (vor etwa 228 Millionen Jahren)", nl: "Laat-Trias (ongeveer 228 miljoen jaar geleden)" },
          { en: "Early Jurassic period", es: "Período Jurásico temprano", de: "Früher Jura", nl: "Vroeg-Jura" },
          { en: "Cretaceous period", es: "Período Cretácico", de: "Kreidezeit", nl: "Krijttijd" },
          { en: "Permian period", es: "Período Pérmico", de: "Perm", nl: "Perm" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaurs first appeared during the Late Triassic period, around 228 million years ago, making them the first vertebrates to achieve powered flight.",
          es: "Los pterosaurios aparecieron por primera vez durante el período Triásico tardío, hace unos 228 millones de años, convirtiéndolos en los primeros vertebrados en lograr el vuelo motorizado.",
          de: "Pterosaurier erschienen erstmals während der späten Trias, vor etwa 228 Millionen Jahren, und waren damit die ersten Wirbeltiere, die den Motorflug beherrschten.",
          nl: "Pterosauriërs verschenen voor het eerst tijdens het Laat-Trias, ongeveer 228 miljoen jaar geleden, waardoor ze de eerste gewervelde dieren waren die gemotoriseerde vlucht bereikten."
        }
      },
      {
        question: {
          en: "Which part of a pterosaur's body was hollow to make them lighter for flight?",
          es: "¿Qué parte del cuerpo de un pterosaurio era hueca para hacerlos más ligeros para el vuelo?",
          de: "Welcher Teil des Pterosaurier-Körpers war hohl, um sie für den Flug leichter zu machen?",
          nl: "Welk deel van het lichaam van een pterosauriër was hol om ze lichter te maken voor de vlucht?"
        },
        options: [
          { en: "Their bones", es: "Sus huesos", de: "Ihre Knochen", nl: "Hun botten" },
          { en: "Their teeth", es: "Sus dientes", de: "Ihre Zähne", nl: "Hun tanden" },
          { en: "Their claws", es: "Sus garras", de: "Ihre Krallen", nl: "Hun klauwen" },
          { en: "Their eyes", es: "Sus ojos", de: "Ihre Augen", nl: "Hun ogen" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaurs had hollow bones similar to modern birds, which made them much lighter and better adapted for flight while still maintaining strength.",
          es: "Los pterosaurios tenían huesos huecos similares a las aves modernas, lo que los hacía mucho más ligeros y mejor adaptados para el vuelo manteniendo la fuerza.",
          de: "Pterosaurier hatten hohle Knochen ähnlich modernen Vögeln, was sie viel leichter und besser für den Flug angepasst machte, während sie trotzdem stark blieben.",
          nl: "Pterosauriërs hadden holle botten vergelijkbaar met moderne vogels, waardoor ze veel lichter waren en beter aangepast aan vliegen terwijl ze toch sterk bleven."
        }
      },
      {
        question: {
          en: "What covered the skin of some pterosaurs to help keep them warm?",
          es: "¿Qué cubría la piel de algunos pterosaurios para ayudarlos a mantenerse calientes?",
          de: "Was bedeckte die Haut einiger Pterosaurier, um sie warm zu halten?",
          nl: "Wat bedekte de huid van sommige pterosauriërs om hen warm te houden?"
        },
        options: [
          { en: "Fur-like fibers called pycnofibers", es: "Fibras parecidas al pelaje llamadas picnofibras", de: "Pelzähnliche Fasern genannt Pyknofasern", nl: "Vachtachtige vezels genaamd pycnovezels" },
          { en: "Colorful feathers", es: "Plumas coloridas", de: "Bunte Federn", nl: "Kleurrijke veren" },
          { en: "Hard scales", es: "Escamas duras", de: "Harte Schuppen", nl: "Harde schubben" },
          { en: "Nothing, they were naked", es: "Nada, estaban desnudos", de: "Nichts, sie waren nackt", nl: "Niets, ze waren naakt" }
        ],
        correct: 0,
        explanation: {
          en: "Many pterosaurs were covered in pycnofibers - hair-like structures that provided insulation and helped them maintain their body temperature for active flight.",
          es: "Muchos pterosaurios estaban cubiertos de picnofibras: estructuras parecidas al cabello que proporcionaban aislamiento y les ayudaban a mantener su temperatura corporal para el vuelo activo.",
          de: "Viele Pterosaurier waren mit Pyknofasern bedeckt - haarähnlichen Strukturen, die Isolation boten und ihnen halfen, ihre Körpertemperatur für aktiven Flug zu halten.",
          nl: "Veel pterosauriërs waren bedekt met pycnovezels - haarachtige structuren die isolatie boden en hielpen hun lichaamstemperatuur te handhaven voor actief vliegen."
        }
      },
      {
        question: {
          en: "How did pterosaurs probably take off from the ground?",
          es: "¿Cómo despegaban probablemente los pterosaurios del suelo?",
          de: "Wie starteten Pterosaurier wahrscheinlich vom Boden?",
          nl: "Hoe stegen pterosauriërs waarschijnlijk op vanaf de grond?"
        },
        options: [
          { en: "Using all four limbs to launch themselves", es: "Usando las cuatro extremidades para lanzarse", de: "Mit allen vier Gliedmaßen um sich zu starten", nl: "Met alle vier ledematen om zichzelf te lanceren" },
          { en: "Running on their back legs like birds", es: "Corriendo sobre sus patas traseras como las aves", de: "Laufend auf ihren Hinterbeinen wie Vögel", nl: "Rennend op hun achterpoten zoals vogels" },
          { en: "Jumping from high cliffs only", es: "Saltando solo desde acantilados altos", de: "Nur von hohen Klippen springend", nl: "Alleen springend van hoge kliffen" },
          { en: "Being carried by other pterosaurs", es: "Siendo llevados por otros pterosaurios", de: "Von anderen Pterosauriern getragen", nl: "Gedragen door andere pterosauriërs" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaurs likely used quadrupedal launch - pushing off with both their arms and legs together to generate enough power for takeoff, unlike birds that use only their legs.",
          es: "Los pterosaurios probablemente usaban lanzamiento cuadrúpedo: empujándose con brazos y piernas juntos para generar suficiente poder para el despegue, a diferencia de las aves que solo usan sus patas.",
          de: "Pterosaurier verwendeten wahrscheinlich vierfüßigen Start - sich mit Armen und Beinen gleichzeitig abstoßend, um genug Kraft für den Start zu erzeugen, anders als Vögel, die nur ihre Beine nutzen.",
          nl: "Pterosauriërs gebruikten waarschijnlijk viervoetige lancering - zich afzettend met zowel hun armen als benen om genoeg kracht te genereren voor opstijgen, anders dan vogels die alleen hun poten gebruiken."
        }
      },
      {
        question: {
          en: "What is the smallest known pterosaur species?",
          es: "¿Cuál es la especie de pterosaurio más pequeña conocida?",
          de: "Was ist die kleinste bekannte Pterosaurier-Art?",
          nl: "Wat is de kleinste bekende pterosauriër soort?"
        },
        options: [
          { en: "Nemicolopterus with a wingspan of about 25 cm", es: "Nemicolopterus con una envergadura de unos 25 cm", de: "Nemicolopterus mit einer Spannweite von etwa 25 cm", nl: "Nemicolopterus met een spanwijdte van ongeveer 25 cm" },
          { en: "Microraptor", es: "Microraptor", de: "Microraptor", nl: "Microraptor" },
          { en: "Tiny-Rex", es: "Tiny-Rex", de: "Tiny-Rex", nl: "Tiny-Rex" },
          { en: "Mini-dactyl", es: "Mini-dáctilo", de: "Mini-Daktyl", nl: "Mini-dactyl" }
        ],
        correct: 0,
        explanation: {
          en: "Nemicolopterus crypticus was tiny, with a wingspan of only about 25 centimeters, roughly the size of a modern sparrow, showing the incredible size diversity among pterosaurs.",
          es: "Nemicolopterus crypticus era diminuto, con una envergadura de solo unos 25 centímetros, aproximadamente del tamaño de un gorrión moderno, mostrando la increíble diversidad de tamaños entre pterosaurios.",
          de: "Nemicolopterus crypticus war winzig, mit einer Spannweite von nur etwa 25 Zentimetern, ungefähr der Größe eines modernen Spatzen, was die unglaubliche Größenvielfalt unter Pterosauriern zeigt.",
          nl: "Nemicolopterus crypticus was minuscuul, met een spanwijdte van slechts ongeveer 25 centimeter, ongeveer de grootte van een moderne mus, wat de ongelooflijke groottediversiteit onder pterosauriërs toont."
        }
      },
      {
        question: {
          en: "Where have most pterosaur fossils been found?",
          es: "¿Dónde se han encontrado la mayoría de los fósiles de pterosaurios?",
          de: "Wo wurden die meisten Pterosaurier-Fossilien gefunden?",
          nl: "Waar zijn de meeste pterosauriër fossielen gevonden?"
        },
        options: [
          { en: "In ancient lake and sea beds", es: "En antiguos lechos de lagos y mares", de: "In alten See- und Meeresbetten", nl: "In oude meer- en zeebeddingen" },
          { en: "In volcanic rocks", es: "En rocas volcánicas", de: "In vulkanischen Gesteinen", nl: "In vulkanische rotsen" },
          { en: "In ice caves", es: "En cuevas de hielo", de: "In Eishöhlen", nl: "In ijsgrotten" },
          { en: "In desert sand", es: "En arena del desierto", de: "In Wüstensand", nl: "In woestijnzand" }
        ],
        correct: 0,
        explanation: {
          en: "Most pterosaur fossils are found in sedimentary rocks that formed in ancient marine and freshwater environments, where their bodies could be quickly buried and preserved.",
          es: "La mayoría de los fósiles de pterosaurios se encuentran en rocas sedimentarias que se formaron en antiguos ambientes marinos y de agua dulce, donde sus cuerpos podían ser enterrados rápidamente y preservados.",
          de: "Die meisten Pterosaurier-Fossilien finden sich in Sedimentgesteinen, die in alten marinen und Süßwasserumgebungen entstanden, wo ihre Körper schnell begraben und konserviert werden konnten.",
          nl: "De meeste pterosauriër fossielen worden gevonden in sedimentaire rotsen die gevormd werden in oude mariene en zoetwateromgevingen, waar hun lichamen snel begraven en bewaard konden worden."
        }
      },
      {
        question: {
          en: "What happened to pterosaurs at the end of the Cretaceous period?",
          es: "¿Qué les pasó a los pterosaurios al final del período Cretácico?",
          de: "Was geschah mit den Pterosauriern am Ende der Kreidezeit?",
          nl: "Wat gebeurde er met pterosauriërs aan het einde van de Krijttijd?"
        },
        options: [
          { en: "They went extinct along with non-avian dinosaurs", es: "Se extinguieron junto con los dinosaurios no aviares", de: "Sie starben zusammen mit den nicht-vogel Dinosauriern aus", nl: "Ze stierven uit samen met de niet-vogel dinosaurussen" },
          { en: "They evolved into modern birds", es: "Evolucionaron a aves modernas", de: "Sie entwickelten sich zu modernen Vögeln", nl: "Ze evolueerden tot moderne vogels" },
          { en: "They moved to the deep ocean", es: "Se mudaron al océano profundo", de: "Sie zogen in die Tiefsee", nl: "Ze verhuisden naar de diepe oceaan" },
          { en: "They still exist today as bats", es: "Todavía existen hoy como murciélagos", de: "Sie existieren heute noch als Fledermäuse", nl: "Ze bestaan nog steeds vandaag als vleermuizen" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaurs completely disappeared during the mass extinction event 66 million years ago that also killed the non-avian dinosaurs, likely due to the asteroid impact and its aftermath.",
          es: "Los pterosaurios desaparecieron completamente durante el evento de extinción masiva hace 66 millones de años que también mató a los dinosaurios no aviares, probablemente debido al impacto de asteroide y sus consecuencias.",
          de: "Pterosaurier verschwanden vollständig während des Massenaussterbens vor 66 Millionen Jahren, das auch die nicht-vogel Dinosaurier tötete, wahrscheinlich aufgrund des Asteroideneinschlags und seiner Folgen.",
          nl: "Pterosauriërs verdwenen volledig tijdens de massa-extinctie 66 miljoen jaar geleden die ook de niet-vogel dinosaurussen doodde, waarschijnlijk door de asteroïde-inslag en de gevolgen daarvan."
        }
      },
      {
        question: {
          en: "What did pterosaurs use their crests for?",
          es: "¿Para qué usaban los pterosaurios sus crestas?",
          de: "Wofür nutzten Pterosaurier ihre Kämme?",
          nl: "Waarvoor gebruikten pterosauriërs hun kammen?"
        },
        options: [
          { en: "Display, balance, and possibly communication", es: "Exhibición, equilibrio y posiblemente comunicación", de: "Zur Schau, Balance und möglicherweise Kommunikation", nl: "Vertoon, balans en mogelijk communicatie" },
          { en: "Cutting through water when diving", es: "Cortando el agua al bucear", de: "Zum Durchschneiden des Wassers beim Tauchen", nl: "Door water snijden bij duiken" },
          { en: "Storing food for winter", es: "Almacenando comida para el invierno", de: "Nahrung für den Winter speichern", nl: "Voedsel opslaan voor de winter" },
          { en: "Fighting other pterosaurs", es: "Luchando contra otros pterosaurios", de: "Kämpfen gegen andere Pterosaurier", nl: "Vechten tegen andere pterosauriërs" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaur crests likely served multiple purposes including species recognition, sexual display, flight stability, and possibly sound resonance for communication with other pterosaurs.",
          es: "Las crestas de pterosaurio probablemente servían múltiples propósitos incluyendo reconocimiento de especies, exhibición sexual, estabilidad de vuelo, y posiblemente resonancia sonora para comunicación con otros pterosaurios.",
          de: "Pterosaurier-Kämme dienten wahrscheinlich mehreren Zwecken einschließlich Artenerkennung, sexuelle Zurschaustellung, Flugstabilität und möglicherweise Schallresonanz für die Kommunikation mit anderen Pterosauriern.",
          nl: "Pterosauriër kammen dienden waarschijnlijk meerdere doelen waaronder soortherkenning, seksuele vertoning, vliegstabiliteit en mogelijk geluidsresonantie voor communicatie met andere pterosauriërs."
        }
      },
      {
        question: {
          en: "How many fingers did pterosaurs have on each hand?",
          es: "¿Cuántos dedos tenían los pterosaurios en cada mano?",
          de: "Wie viele Finger hatten Pterosaurier an jeder Hand?",
          nl: "Hoeveel vingers hadden pterosauriërs aan elke hand?"
        },
        options: [
          { en: "Four fingers", es: "Cuatro dedos", de: "Vier Finger", nl: "Vier vingers" },
          { en: "Five fingers", es: "Cinco dedos", de: "Fünf Finger", nl: "Vijf vingers" },
          { en: "Three fingers", es: "Tres dedos", de: "Drei Finger", nl: "Drie vingers" },
          { en: "Two fingers", es: "Dos dedos", de: "Zwei Finger", nl: "Twee vingers" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaurs had four fingers on each hand, with the fourth finger being extremely long and supporting the wing membrane, while the first three fingers had claws for gripping.",
          es: "Los pterosaurios tenían cuatro dedos en cada mano, siendo el cuarto dedo extremadamente largo y sosteniendo la membrana del ala, mientras los primeros tres dedos tenían garras para agarrar.",
          de: "Pterosaurier hatten vier Finger an jeder Hand, wobei der vierte Finger extrem lang war und die Flügelmembran stützte, während die ersten drei Finger Krallen zum Greifen hatten.",
          nl: "Pterosauriërs hadden vier vingers aan elke hand, waarbij de vierde vinger extreem lang was en het vleugelmembraan ondersteunde, terwijl de eerste drie vingers klauwen hadden om mee te grijpen."
        }
      },
      {
        question: {
          en: "What group of animals are pterosaurs most closely related to?",
          es: "¿A qué grupo de animales están más estrechamente relacionados los pterosaurios?",
          de: "Mit welcher Tiergruppe sind Pterosaurier am engsten verwandt?",
          nl: "Met welke groep dieren zijn pterosauriërs het nauwst verwant?"
        },
        options: [
          { en: "Dinosaurs and crocodiles (archosaurs)", es: "Dinosaurios y cocodrilos (arcosaurios)", de: "Dinosaurier und Krokodile (Archosaurier)", nl: "Dinosaurussen en krokodillen (archosauriërs)" },
          { en: "Modern birds only", es: "Solo aves modernas", de: "Nur moderne Vögel", nl: "Alleen moderne vogels" },
          { en: "Lizards and snakes", es: "Lagartos y serpientes", de: "Echsen und Schlangen", nl: "Hagedissen en slangen" },
          { en: "Bats and flying squirrels", es: "Murciélagos y ardillas voladoras", de: "Fledermäuse und Flughörnchen", nl: "Vleermuizen en vliegende eekhoorns" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaurs belong to the archosaur group, making them more closely related to crocodiles and dinosaurs (including birds) than to any other living animals.",
          es: "Los pterosaurios pertenecen al grupo de arcosaurios, haciéndolos más estrechamente relacionados con cocodrilos y dinosaurios (incluyendo aves) que con cualquier otro animal viviente.",
          de: "Pterosaurier gehören zur Archosaurier-Gruppe, was sie enger mit Krokodilen und Dinosauriern (einschließlich Vögeln) verwandt macht als mit jedem anderen lebenden Tier.",
          nl: "Pterosauriërs behoren tot de archosauriër groep, waardoor ze nauwer verwant zijn aan krokodillen en dinosaurussen (inclusief vogels) dan aan enig ander levend dier."
        }
      },
      {
        question: {
          en: "What did baby pterosaurs likely eat right after hatching?",
          es: "¿Qué comían probablemente las crías de pterosaurio justo después de nacer?",
          de: "Was fraßen Pterosaurier-Babys wahrscheinlich direkt nach dem Schlüpfen?",
          nl: "Wat aten baby pterosauriërs waarschijnlijk direct na het uitkomen?"
        },
        options: [
          { en: "Small insects and fish", es: "Insectos pequeños y peces", de: "Kleine Insekten und Fische", nl: "Kleine insecten en vissen" },
          { en: "Only their mother's milk", es: "Solo la leche de su madre", de: "Nur die Milch ihrer Mutter", nl: "Alleen de melk van hun moeder" },
          { en: "Tree leaves and fruits", es: "Hojas de árboles y frutas", de: "Baumblätter und Früchte", nl: "Boombladeren en vruchten" },
          { en: "Nothing for the first month", es: "Nada durante el primer mes", de: "Nichts im ersten Monat", nl: "Niets de eerste maand" }
        ],
        correct: 0,
        explanation: {
          en: "Young pterosaurs were likely capable of feeding themselves soon after hatching, starting with small prey like insects and tiny fish appropriate to their size.",
          es: "Los pterosaurios jóvenes probablemente podían alimentarse solos poco después de nacer, comenzando con presas pequeñas como insectos y peces diminutos apropiados para su tamaño.",
          de: "Junge Pterosaurier konnten sich wahrscheinlich kurz nach dem Schlüpfen selbst ernähren, beginnend mit kleiner Beute wie Insekten und winzigen Fischen, die ihrer Größe angemessen waren.",
          nl: "Jonge pterosauriërs konden zich waarschijnlijk kort na het uitkomen zelf voeden, beginnend met kleine prooi zoals insecten en kleine visjes die geschikt waren voor hun grootte."
        }
      },
      {
        question: {
          en: "What made pterosaur wings different from bird wings?",
          es: "¿Qué hacía diferentes las alas de pterosaurio de las alas de las aves?",
          de: "Was machte Pterosaurier-Flügel anders als Vogelflügel?",
          nl: "Wat maakte pterosauriër vleugels anders dan vogelvleugels?"
        },
        options: [
          { en: "They were made of skin instead of feathers", es: "Estaban hechas de piel en lugar de plumas", de: "Sie waren aus Haut statt aus Federn gemacht", nl: "Ze waren gemaakt van huid in plaats van veren" },
          { en: "They could only glide, not flap", es: "Solo podían planear, no batir", de: "Sie konnten nur gleiten, nicht schlagen", nl: "Ze konden alleen zweven, niet klapperen" },
          { en: "They were made of solid bone", es: "Estaban hechas de hueso sólido", de: "Sie waren aus festem Knochen gemacht", nl: "Ze waren gemaakt van massief bot" },
          { en: "They were transparent like glass", es: "Eran transparentes como el vidrio", de: "Sie waren durchsichtig wie Glas", nl: "Ze waren doorzichtig als glas" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaur wings were fundamentally different from bird wings - they were made of a flexible skin membrane stretched between elongated finger bones, rather than feathers supported by arm bones.",
          es: "Las alas de pterosaurio eran fundamentalmente diferentes de las alas de aves - estaban hechas de una membrana de piel flexible estirada entre huesos de dedos alargados, en lugar de plumas sostenidas por huesos del brazo.",
          de: "Pterosaurier-Flügel waren grundlegend anders als Vogelflügel - sie bestanden aus einer flexiblen Hautmembran, die zwischen verlängerten Fingerknochen gespannt war, anstatt aus Federn, die von Armknochen gestützt wurden.",
          nl: "Pterosauriër vleugels waren fundamenteel anders dan vogelvleugels - ze waren gemaakt van een flexibel huidmembraan gespannen tussen verlengde vingerbotten, in plaats van veren ondersteund door armbotten."
        }
      },
      {
        question: {
          en: "How long were pterosaurs around on Earth?",
          es: "¿Cuánto tiempo existieron los pterosaurios en la Tierra?",
          de: "Wie lange existierten Pterosaurier auf der Erde?",
          nl: "Hoe lang bestonden pterosauriërs op aarde?"
        },
        options: [
          { en: "About 160 million yrs", es: "Unos 160 millones de años", de: "Etwa 160 Millionen Jahre", nl: "Ongeveer 160 miljoen jaar" },
          { en: "Only 50 million yrs", es: "Solo 50 millones de años", de: "Nur 50 Millionen Jahre", nl: "Slechts 50 miljoen jaar" },
          { en: "Over 300 million yrs", es: "Más de 300 millones de años", de: "Über 300 Millionen Jahre", nl: "Meer dan 300 miljoen jaar" },
          { en: "Less than 10 million yrs", es: "Menos de 10 millones de años", de: "Weniger als 10 Millionen Jahre", nl: "Minder dan 10 miljoen jaar" }
        ],
        correct: 0,
        explanation: {
          en: "Pterosaurs existed for approximately 160 million years, from the Late Triassic period (228 million years ago) until the end of the Cretaceous period (66 million years ago).",
          es: "Los pterosaurios existieron durante aproximadamente 160 millones de años, desde el período Triásico tardío (hace 228 millones de años) hasta el final del período Cretácico (hace 66 millones de años).",
          de: "Pterosaurier existierten etwa 160 Millionen Jahre lang, von der späten Trias (vor 228 Millionen Jahren) bis zum Ende der Kreidezeit (vor 66 Millionen Jahren).",
          nl: "Pterosauriërs bestonden ongeveer 160 miljoen jaar, van het Laat-Trias (228 miljoen jaar geleden) tot het einde van de Krijttijd (66 miljoen jaar geleden)."
        }
      },
      {
        question: {
          en: "How did pterosaurs regulate their body temperature?",
          es: "¿Cómo regulaban los pterosaurios su temperatura corporal?",
          de: "Wie regulierten Pterosaurier ihre Körpertemperatur?",
          nl: "Hoe reguleerden pterosauriërs hun lichaamstemperatuur?"
        },
        options: [
          { en: "They were warm-blooded like modern mammals", es: "Eran de sangre caliente como los mamíferos modernos", de: "Sie waren warmblütig wie moderne Säugetiere", nl: "Ze waren warmbloedig zoals moderne zoogdieren" },
          { en: "They basked in the sun like lizards", es: "Se calentaban al sol como los lagartos", de: "Sie sonnten sich wie Echsen", nl: "Ze koesterden zich in de zon zoals hagedissen" },
          { en: "They hibernated during cold weather", es: "Hibernaban durante el clima frío", de: "Sie hielten Winterschlaf bei kaltem Wetter", nl: "Ze hielden winterslaap tijdens koud weer" },
          { en: "They migrated to warmer climates only", es: "Solo migraban a climas más cálidos", de: "Sie wanderten nur zu wärmeren Klimazonen", nl: "Ze migreerden alleen naar warmere klimaten" }
        ],
        correct: 0,
        explanation: {
          en: "Most scientists believe pterosaurs were warm-blooded (endothermic) animals, which would have been necessary for the high energy demands of powered flight.",
          es: "La mayoría de los científicos creen que los pterosaurios eran animales de sangre caliente (endotérmicos), lo cual habría sido necesario para las altas demandas energéticas del vuelo motorizado.",
          de: "Die meisten Wissenschaftler glauben, dass Pterosaurier warmblütige (endotherme) Tiere waren, was für die hohen Energieanforderungen des Motorflugs notwendig gewesen wäre.",
          nl: "De meeste wetenschappers geloven dat pterosauriërs warmbloedige (endotherme) dieren waren, wat noodzakelijk zou zijn geweest voor de hoge energievereisten van gemotoriseerde vlucht."
        }
      },
      {
        question: {
          en: "Which time period saw the greatest diversity of pterosaur species?",
          es: "¿Qué período de tiempo vio la mayor diversidad de especies de pterosaurios?",
          de: "Welche Zeitperiode sah die größte Vielfalt an Pterosaurier-Arten?",
          nl: "Welke tijdsperiode zag de grootste diversiteit aan pterosauriër soorten?"
        },
        options: [
          { en: "Jurassic period", es: "Período Jurásico", de: "Jura-Zeit", nl: "Jura periode" },
          { en: "Triassic period", es: "Período Triásico", de: "Trias-Zeit", nl: "Trias periode" },
          { en: "Cretaceous period", es: "Período Cretácico", de: "Kreidezeit", nl: "Krijt periode" },
          { en: "Permian period", es: "Período Pérmico", de: "Perm-Zeit", nl: "Perm periode" }
        ],
        correct: 0,
        explanation: {
          en: "The Jurassic period was the golden age of pterosaurs, with the greatest diversity of species, sizes, and ecological niches being filled by these flying reptiles.",
          es: "El período Jurásico fue la edad dorada de los pterosaurios, con la mayor diversidad de especies, tamaños y nichos ecológicos siendo ocupados por estos reptiles voladores.",
          de: "Die Jura-Zeit war das goldene Zeitalter der Pterosaurier, mit der größten Vielfalt an Arten, Größen und ökologischen Nischen, die von diesen fliegenden Reptilien besetzt wurden.",
          nl: "De Jura periode was de gouden eeuw van pterosauriërs, met de grootste diversiteit aan soorten, groottes en ecologische niches die door deze vliegende reptielen werden vervuld."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  } else if (typeof window !== 'undefined') {
    window.level1 = level1;
  }
})();
