// Marine Reptiles Quiz - Level 1: Knowledge about Marine Reptiles
(function() {
  const level1 = {
    name: {
      en: "Marine Reptiles Level 1",
      es: "Reptiles Marinos Nivel 1",
      de: "Meeresreptilien Stufe 1",
      nl: "Zeereptielen Level 1"
    },
    questions: [
      {
        question: {
          en: "What were marine reptiles?",
          es: "¿Qué eran los reptiles marinos?",
          de: "Was waren Meeresreptilien?",
          nl: "Wat waren zeereptielen?"
        },
        options: [
          { en: "Reptiles that lived in the ocean", es: "Reptiles que vivían en el océano", de: "Reptilien, die im Ozean lebten", nl: "Reptielen die in de oceaan leefden" },
          { en: "Fish with scales", es: "Peces con escamas", de: "Fische mit Schuppen", nl: "Vissen met schubben" },
          { en: "Modern sea turtles only", es: "Solo tortugas marinas modernas", de: "Nur moderne Meeresschildkröten", nl: "Alleen moderne zeeschildpadden" },
          { en: "Amphibians that swam", es: "Anfibios que nadaban", de: "Amphibien, die schwammen", nl: "Amfibieën die zwommen" }
        ],
        correct: 0,
        explanation: {
          en: "Marine reptiles were reptiles that had adapted to live in the ocean. They breathed air like all reptiles but were perfectly suited for life in water.",
          es: "Los reptiles marinos eran reptiles que se habían adaptado para vivir en el océano. Respiraban aire como todos los reptiles, pero estaban perfectamente adaptados para la vida en el agua.",
          de: "Meeresreptilien waren Reptilien, die sich an das Leben im Ozean angepasst hatten. Sie atmeten Luft wie alle Reptilien, waren aber perfekt für das Leben im Wasser geeignet.",
          nl: "Zeereptielen waren reptielen die zich hadden aangepast om in de oceaan te leven. Ze ademden lucht zoals alle reptielen, maar waren perfect aangepast aan het leven in het water."
        }
      },
      {
        question: {
          en: "When did most famous marine reptiles live?",
          es: "¿Cuándo vivieron los reptiles marinos más famosos?",
          de: "Wann lebten die berühmtesten Meeresreptilien?",
          nl: "Wanneer leefden de beroemdste zeereptielen?"
        },
        options: [
          { en: "During the Mesozoic Era", es: "Durante la Era Mesozoica", de: "Während der Mesozoischen Ära", nl: "Tijdens het Mesozoïcum" },
          { en: "During the Ice Age", es: "Durante la Edad de Hielo", de: "Während der Eiszeit", nl: "Tijdens de IJstijd" },
          { en: "In modern times", es: "En tiempos modernos", de: "In der Neuzeit", nl: "In moderne tijden" },
          { en: "Before dinosaurs existed", es: "Antes de que existieran los dinosaurios", de: "Bevor Dinosaurier existierten", nl: "Voordat dinosaurussen bestonden" }
        ],
        correct: 0,
        explanation: {
          en: "Most famous marine reptiles lived during the Mesozoic Era (252-66 million years ago), the same time period as dinosaurs. This era included the Triassic, Jurassic, and Cretaceous periods.",
          es: "Los reptiles marinos más famosos vivieron durante la Era Mesozoica (252-66 millones de años atrás), el mismo período que los dinosaurios. Esta era incluía los períodos Triásico, Jurásico y Cretácico.",
          de: "Die berühmtesten Meeresreptilien lebten während der Mesozoischen Ära (252-66 Millionen Jahre ago), zur gleichen Zeit wie die Dinosaurier. Diese Ära umfasste die Trias-, Jura- und Kreidezeit.",
          nl: "De beroemdste zeereptielen leefden tijdens het Mesozoïcum (252-66 miljoen jaar geleden), dezelfde periode als de dinosaurussen. Dit tijdperk omvatte het Trias, Jura en Krijt."
        }
      },
      {
        question: {
          en: "Which of these is a famous long-necked marine reptile?",
          es: "¿Cuál de estos es un famoso reptil marino de cuello largo?",
          de: "Welches ist ein berühmtes langhalsiges Meeresreptil?",
          nl: "Welke van deze is een beroemde langnekkige zeereptiel?"
        },
        options: [
          { en: "Plesiosaur", es: "Plesiosaurio", de: "Plesiosaurier", nl: "Plesiosaur" },
          { en: "Shark", es: "Tiburón", de: "Hai", nl: "Haai" },
          { en: "Whale", es: "Ballena", de: "Wal", nl: "Walvis" },
          { en: "Octopus", es: "Pulpo", de: "Oktopus", nl: "Octopus" }
        ],
        correct: 0,
        explanation: {
          en: "Plesiosaurs were marine reptiles famous for their very long necks and small heads. They used their necks to catch fish and other prey in ancient seas.",
          es: "Los plesiosaurios eran reptiles marinos famosos por sus cuellos muy largos y cabezas pequeñas. Usaban sus cuellos para atrapar peces y otras presas en los mares antiguos.",
          de: "Plesiosaurier waren Meeresreptilien, die für ihre sehr langen Hälse und kleinen Köpfe berühmt waren. Sie nutzten ihre Hälse, um Fische und andere Beute in den urzeitlichen Meeren zu fangen.",
          nl: "Plesiosaurs waren zeereptielen beroemd om hun zeer lange nekken en kleine koppen. Ze gebruikten hun nekken om vissen en andere prooien te vangen in de oude zeeën."
        }
      },
      {
        question: {
          en: "What did marine reptiles breathe?",
          es: "¿Qué respiraban los reptiles marinos?",
          de: "Was atmeten Meeresreptilien?",
          nl: "Wat ademden zeereptielen?"
        },
        options: [
          { en: "Air from the surface", es: "Aire de la superficie", de: "Luft von der Oberfläche", nl: "Lucht van het oppervlak" },
          { en: "Water through gills", es: "Agua a través de branquias", de: "Wasser durch Kiemen", nl: "Water door kieuwen" },
          { en: "Nothing at all", es: "Nada en absoluto", de: "Gar nichts", nl: "Helemaal niets" },
          { en: "Only carbon dioxide", es: "Solo dióxido de carbono", de: "Nur Kohlendioxid", nl: "Alleen koolstofdioxide" }
        ],
        correct: 0,
        explanation: {
          en: "Like all reptiles, marine reptiles breathed air. They had to come to the surface regularly to breathe, just like modern whales and dolphins do.",
          es: "Como todos los reptiles, los reptiles marinos respiraban aire. Tenían que subir a la superficie regularmente para respirar, igual que las ballenas y delfines modernos.",
          de: "Wie alle Reptilien atmeten Meeresreptilien Luft. Sie mussten regelmäßig an die Oberfläche kommen zum Atmen, genau wie moderne Wale und Delfine.",
          nl: "Zoals alle reptielen ademden zeereptielen lucht. Ze moesten regelmatig naar het oppervlak komen om te ademen, net zoals moderne walvissen en dolfijnen doen."
        }
      },
      {
        question: {
          en: "Which marine reptile looked most like a dolphin?",
          es: "¿Qué reptil marino se parecía más a un delfín?",
          de: "Welches Meeresreptil sah einem Delfin am ähnlichsten?",
          nl: "Welke zeereptiel leek het meest op een dolfijn?"
        },
        options: [
          { en: "Ichthyosaur", es: "Ictiosaurio", de: "Ichthyosaurier", nl: "Ichthyosaur" },
          { en: "Sea turtle", es: "Tortuga marina", de: "Meeresschildkröte", nl: "Zeeschildpad" },
          { en: "Crocodile", es: "Cocodrilo", de: "Krokodil", nl: "Krokodil" },
          { en: "Snake", es: "Serpiente", de: "Schlange", nl: "Slang" }
        ],
        correct: 0,
        explanation: {
          en: "Ichthyosaurs looked very similar to modern dolphins, with streamlined bodies, fins, and long snouts. This is an example of convergent evolution - similar environments producing similar body shapes.",
          es: "Los ictiosaurios se parecían mucho a los delfines modernos, con cuerpos aerodinámicos, aletas y hocicos largos. Esto es un ejemplo de evolución convergente - ambientes similares producen formas corporales similares.",
          de: "Ichthyosaurier sahen modernen Delfinen sehr ähnlich, mit stromlinienförmigen Körpern, Flossen und langen Schnauzen. Dies ist ein Beispiel für konvergente Evolution - ähnliche Umgebungen erzeugen ähnliche Körperformen.",
          nl: "Ichthyosaurs leken erg op moderne dolfijnen, met gestroomlijnde lichamen, vinnen en lange snouten. Dit is een voorbeeld van convergente evolutie - vergelijkbare omgevingen produceren vergelijkbare lichaamsvormen."
        }
      },
      {
        question: {
          en: "What is the main difference between marine reptiles and fish?",
          es: "¿Cuál es la principal diferencia entre reptiles marinos y peces?",
          de: "Was ist der Hauptunterschied zwischen Meeresreptilien und Fischen?",
          nl: "Wat is het belangrijkste verschil tussen zeereptielen en vissen?"
        },
        options: [
          { en: "Marine reptiles breathed air", es: "Los reptiles marinos respiraban aire", de: "Meeresreptilien atmeten Luft", nl: "Zeereptielen ademden lucht" },
          { en: "Fish were bigger", es: "Los peces eran más grandes", de: "Fische waren größer", nl: "Vissen waren groter" },
          { en: "Marine reptiles had no bones", es: "Los reptiles marinos no tenían huesos", de: "Meeresreptilien hatten keine Knochen", nl: "Zeereptielen hadden geen botten" },
          { en: "Fish lived deeper", es: "Los peces vivían más profundo", de: "Fische lebten tiefer", nl: "Vissen leefden dieper" }
        ],
        correct: 0,
        explanation: {
          en: "The main difference is that marine reptiles breathed air with lungs, while fish breathe water through gills. Marine reptiles also had different bone structures and gave birth differently than fish.",
          es: "La principal diferencia es que los reptiles marinos respiraban aire con pulmones, mientras que los peces respiran agua a través de branquias. Los reptiles marinos también tenían estructuras óseas diferentes y se reproducían de manera diferente a los peces.",
          de: "Der Hauptunterschied ist, dass Meeresreptilien Luft mit Lungen atmeten, während Fische Wasser durch Kiemen atmen. Meeresreptilien hatten auch andere Knochenstrukturen und gebaren anders als Fische.",
          nl: "Het belangrijkste verschil is dat zeereptielen lucht ademden met longen, terwijl vissen water ademen door kieuwen. Zeereptielen hadden ook andere botstructuren en voortplanting dan vissen."
        }
      },
      {
        question: {
          en: "Where can we see marine reptile fossils today?",
          es: "¿Dónde podemos ver fósiles de reptiles marinos hoy?",
          de: "Wo können wir heute Fossilien von Meeresreptilien sehen?",
          nl: "Waar kunnen we vandaag fossielen van zeereptielen zien?"
        },
        options: [
          { en: "In museums and fossil sites", es: "En museos y sitios de fósiles", de: "In Museen und Fossilienstandorten", nl: "In museums en fossielvindplaatsen" },
          { en: "Only underwater", es: "Solo bajo el agua", de: "Nur unter Wasser", nl: "Alleen onder water" },
          { en: "They don't exist", es: "No existen", de: "Sie existieren nicht", nl: "Ze bestaan niet" },
          { en: "Only in movies", es: "Solo en películas", de: "Nur in Filmen", nl: "Alleen in films" }
        ],
        correct: 0,
        explanation: {
          en: "Marine reptile fossils can be found in museums around the world and at fossil dig sites. Many complete skeletons have been discovered and are displayed for the public to see.",
          es: "Los fósiles de reptiles marinos se pueden encontrar en museos de todo el mundo y en sitios de excavación de fósiles. Se han descubierto muchos esqueletos completos que se exhiben para el público.",
          de: "Fossilien von Meeresreptilien sind in Museen auf der ganzen Welt und an Fossilienausgrabungsstätten zu finden. Viele vollständige Skelette wurden entdeckt und werden öffentlich ausgestellt.",
          nl: "Fossielen van zeereptielen zijn te vinden in museums over de hele wereld en op fossielenvindplaatsen. Veel complete skeletten zijn ontdekt en worden tentoongesteld voor het publiek."
        }
      },
      {
        question: {
          en: "What happened to marine reptiles?",
          es: "¿Qué pasó con los reptiles marinos?",
          de: "Was geschah mit den Meeresreptilien?",
          nl: "Wat gebeurde er met de zeereptielen?"
        },
        options: [
          { en: "Most became extinct", es: "La mayoría se extinguió", de: "Die meisten starben aus", nl: "De meesten stierven uit" },
          { en: "They turned into fish", es: "Se convirtieron en peces", de: "Sie wurden zu Fischen", nl: "Ze werden vissen" },
          { en: "They moved to land", es: "Se mudaron a tierra", de: "Sie zogen aufs Land", nl: "Ze verhuisden naar land" },
          { en: "They still rule the oceans", es: "Todavía dominan los océanos", de: "Sie beherrschen immer noch die Ozeane", nl: "Ze heersen nog steeds over de oceanen" }
        ],
        correct: 0,
        explanation: {
          en: "Most marine reptiles became extinct at the end of the Mesozoic Era, about 66 million years ago. Only a few groups like sea turtles survived to the present day.",
          es: "La mayoría de los reptiles marinos se extinguieron al final de la Era Mesozoica, hace unos 66 millones de años. Solo algunos grupos como las tortugas marinas sobrevivieron hasta el presente.",
          de: "Die meisten Meeresreptilien starben am Ende der Mesozoischen Ära vor etwa 66 Millionen Jahren aus. Nur wenige Gruppen wie Meeresschildkröten überlebten bis heute.",
          nl: "De meeste zeereptielen stierven uit aan het einde van het Mesozoïcum, ongeveer 66 miljoen jaar geleden. Alleen een paar groepen zoals zeeschildpadden overleefden tot de huidige tijd."
        }
      },
      {
        question: {
          en: "How big could some marine reptiles get?",
          es: "¿Qué tan grandes podían llegar a ser algunos reptiles marinos?",
          de: "Wie groß konnten manche Meeresreptilien werden?",
          nl: "Hoe groot konden sommige zeereptielen worden?"
        },
        options: [
          { en: "Very large, like whales", es: "Muy grandes, como ballenas", de: "Sehr groß, wie Wale", nl: "Zeer groot, zoals walvissen" },
          { en: "Only small, like goldfish", es: "Solo pequeños, como peces dorados", de: "Nur klein, wie Goldfische", nl: "Alleen klein, zoals goudvissen" },
          { en: "All the same size", es: "Todos del mismo tamaño", de: "Alle gleich groß", nl: "Allemaal even groot" },
          { en: "Invisible to the naked eye", es: "Invisibles a simple vista", de: "Unsichtbar für das bloße Auge", nl: "Onzichtbaar voor het blote oog" }
        ],
        correct: 0,
        explanation: {
          en: "Some marine reptiles were enormous! For example, some plesiosaurs and mosasaurs could grow to be over 40 feet long, rivaling the size of modern large whales.",
          es: "¡Algunos reptiles marinos eran enormes! Por ejemplo, algunos plesiosaurios y mosasaurios podían crecer hasta más de 12 metros de largo, rivalizando con el tamaño de las grandes ballenas modernas.",
          de: "Manche Meeresreptilien waren riesig! Zum Beispiel konnten einige Plesiosaurier und Mosasaurier über 12 Meter lang werden und rivalisierten mit der Größe moderner großer Wale.",
          nl: "Sommige zeereptielen waren enorm! Bijvoorbeeld, sommige plesiosaurs en mosasaurs konden meer dan 12 meter lang worden, wat de grootte van moderne grote walvissen evenaart."
        }
      },
      {
        question: {
          en: "What did marine reptiles eat?",
          es: "¿Qué comían los reptiles marinos?",
          de: "Was fraßen Meeresreptilien?",
          nl: "Wat aten zeereptielen?"
        },
        options: [
          { en: "Fish and other sea creatures", es: "Peces y otras criaturas marinas", de: "Fische und andere Meerestiere", nl: "Vissen en andere zeedieren" },
          { en: "Only plants", es: "Solo plantas", de: "Nur Pflanzen", nl: "Alleen planten" },
          { en: "Rocks and sand", es: "Rocas y arena", de: "Steine und Sand", nl: "Rotsen en zand" },
          { en: "Nothing - they didn't eat", es: "Nada - no comían", de: "Nichts - sie fraßen nicht", nl: "Niets - ze aten niet" }
        ],
        correct: 0,
        explanation: {
          en: "Marine reptiles were carnivores that ate fish, squid, and other marine animals. Some had sharp teeth for catching fish, while others had powerful jaws for crushing shells.",
          es: "Los reptiles marinos eran carnívoros que comían peces, calamares y otros animales marinos. Algunos tenían dientes afilados para atrapar peces, mientras que otros tenían mandíbulas poderosas para romper conchas.",
          de: "Meeresreptilien waren Fleischfresser, die Fische, Tintenfische und andere Meerestiere fraßen. Einige hatten scharfe Zähne zum Fischfang, andere hatten kraftvolle Kiefer zum Knacken von Schalen.",
          nl: "Zeereptielen waren vleeseters die vissen, inktvissen en andere zeedieren aten. Sommigen hadden scherpe tanden om vissen te vangen, terwijl anderen krachtige kaken hadden om schelpen te kraken."
        }
      },
      {
        question: {
          en: "How did marine reptiles move in water?",
          es: "¿Cómo se movían los reptiles marinos en el agua?",
          de: "Wie bewegten sich Meeresreptilien im Wasser?",
          nl: "Hoe bewogen zeereptielen zich in het water?"
        },
        options: [
          { en: "By swimming with flippers or fins", es: "Nadando con aletas", de: "Durch Schwimmen mit Flossen", nl: "Door te zwemmen met vinnen" },
          { en: "By walking on the sea floor", es: "Caminando por el fondo del mar", de: "Durch Laufen am Meeresboden", nl: "Door te lopen op de zeebodem" },
          { en: "By floating like balloons", es: "Flotando como globos", de: "Durch Schweben wie Ballons", nl: "Door te drijven als ballonnen" },
          { en: "They couldn't move", es: "No podían moverse", de: "Sie konnten sich nicht bewegen", nl: "Ze konden niet bewegen" }
        ],
        correct: 0,
        explanation: {
          en: "Marine reptiles had evolved flippers, fins, or paddle-like limbs that made them excellent swimmers. They were perfectly adapted for life in the water.",
          es: "Los reptiles marinos habían evolucionado aletas o extremidades en forma de remo que los convertían en excelentes nadadores. Estaban perfectamente adaptados para la vida en el agua.",
          de: "Meeresreptilien hatten Flossen oder paddel-ähnliche Gliedmaßen entwickelt, die sie zu ausgezeichneten Schwimmern machten. Sie waren perfekt an das Leben im Wasser angepasst.",
          nl: "Zeereptielen hadden vinnen of peddel-achtige ledematen ontwikkeld die hen uitstekende zwemmers maakten. Ze waren perfect aangepast aan het leven in het water."
        }
      },
      {
        question: {
          en: "Which marine reptile was known for having a very long tail?",
          es: "¿Qué reptil marino era conocido por tener una cola muy larga?",
          de: "Welches Meeresreptil war für seinen sehr langen Schwanz bekannt?",
          nl: "Welke zeereptiel stond bekend om zijn zeer lange staart?"
        },
        options: [
          { en: "Mosasaur", es: "Mosasaurio", de: "Mosasaurier", nl: "Mosasaur" },
          { en: "Jellyfish", es: "Medusa", de: "Qualle", nl: "Kwal" },
          { en: "Starfish", es: "Estrella de mar", de: "Seestern", nl: "Zeester" },
          { en: "Sea anemone", es: "Anémona de mar", de: "Seeanemone", nl: "Zeeanemoon" }
        ],
        correct: 0,
        explanation: {
          en: "Mosasaurs were marine lizards with very long, powerful tails that they used for swimming. Their tails made up a large portion of their total body length.",
          es: "Los mosasaurios eran lagartijas marinas con colas muy largas y poderosas que usaban para nadar. Sus colas constituían una gran parte de su longitud corporal total.",
          de: "Mosasaurier waren Meerechsen mit sehr langen, kräftigen Schwänzen, die sie zum Schwimmen nutzten. Ihre Schwänze machten einen großen Teil ihrer gesamten Körperlänge aus.",
          nl: "Mosasaurs waren zeehagedissen met zeer lange, krachtige staarten die ze gebruikten om te zwemmen. Hun staarten vormden een groot deel van hun totale lichaamslengte."
        }
      },
      {
        question: {
          en: "Were marine reptiles related to dinosaurs?",
          es: "¿Estaban los reptiles marinos relacionados con los dinosaurios?",
          de: "Waren Meeresreptilien mit Dinosauriern verwandt?",
          nl: "Waren zeereptielen verwant aan dinosaurussen?"
        },
        options: [
          { en: "Some were cousins of dinosaurs", es: "Algunos eran primos de los dinosaurios", de: "Manche waren Cousins der Dinosaurier", nl: "Sommigen waren neven van dinosaurussen" },
          { en: "They were exactly the same", es: "Eran exactamente iguales", de: "Sie waren genau gleich", nl: "Ze waren precies hetzelfde" },
          { en: "No relation at all", es: "Sin relación alguna", de: "Überhaupt keine Verwandtschaft", nl: "Helemaal geen verwantschap" },
          { en: "Marine reptiles came from outer space", es: "Los reptiles marinos vinieron del espacio", de: "Meeresreptilien kamen aus dem Weltraum", nl: "Zeereptielen kwamen uit de ruimte" }
        ],
        correct: 0,
        explanation: {
          en: "Marine reptiles and dinosaurs were both reptiles that lived during the same time period, but they were different groups. They shared common ancestors but evolved differently - dinosaurs on land, marine reptiles in water.",
          es: "Los reptiles marinos y los dinosaurios eran ambos reptiles que vivieron durante el mismo período, pero eran grupos diferentes. Compartían ancestros comunes pero evolucionaron de manera diferente: dinosaurios en tierra, reptiles marinos en agua.",
          de: "Meeresreptilien und Dinosaurier waren beide Reptilien, die zur selben Zeit lebten, aber sie waren verschiedene Gruppen. Sie teilten gemeinsame Vorfahren, entwickelten sich aber unterschiedlich - Dinosaurier an Land, Meeresreptilien im Wasser.",
          nl: "Zeereptielen en dinosaurussen waren beide reptielen die in dezelfde periode leefden, maar ze waren verschillende groepen. Ze deelden gemeenschappelijke voorouders maar evolueerden anders - dinosaurussen op land, zeereptielen in water."
        }
      },
      {
        question: {
          en: "What can we learn from marine reptile fossils?",
          es: "¿Qué podemos aprender de los fósiles de reptiles marinos?",
          de: "Was können wir von Fossilien der Meeresreptilien lernen?",
          nl: "Wat kunnen we leren van fossielen van zeereptielen?"
        },
        options: [
          { en: "How ancient oceans looked and what lived there", es: "Cómo se veían los océanos antiguos y qué vivía allí", de: "Wie urzeitliche Ozeane aussahen und was dort lebte", nl: "Hoe oude oceanen eruit zagen en wat daar leefde" },
          { en: "Nothing useful", es: "Nada útil", de: "Nichts Nützliches", nl: "Niets nuttigs" },
          { en: "Only their color", es: "Solo su color", de: "Nur ihre Farbe", nl: "Alleen hun kleur" },
          { en: "What they had for breakfast", es: "Qué desayunaban", de: "Was sie zum Frühstück hatten", nl: "Wat ze ontbeten" }
        ],
        correct: 0,
        explanation: {
          en: "Marine reptile fossils teach us about ancient marine ecosystems, how these animals lived, what they ate, and how they evolved. They help us understand what Earth's oceans were like millions of years ago.",
          es: "Los fósiles de reptiles marinos nos enseñan sobre ecosistemas marinos antiguos, cómo vivían estos animales, qué comían y cómo evolucionaron. Nos ayudan a entender cómo eran los océanos de la Tierra hace millones de años.",
          de: "Fossilien von Meeresreptilien lehren uns über urzeitliche Meeresökosysteme, wie diese Tiere lebten, was sie fraßen und wie sie sich entwickelten. Sie helfen uns zu verstehen, wie die Ozeane der Erde vor Millionen von Jahren aussahen.",
          nl: "Fossielen van zeereptielen leren ons over oude mariene ecosystemen, hoe deze dieren leefden, wat ze aten en hoe ze evolueerden. Ze helpen ons begrijpen hoe de oceanen van de aarde er miljoenen jaren geleden uitzagen."
        }
      },
      {
        question: {
          en: "Did marine reptiles lay eggs?",
          es: "¿Los reptiles marinos ponían huevos?",
          de: "Legten Meeresreptilien Eier?",
          nl: "Legden zeereptielen eieren?"
        },
        options: [
          { en: "Some did, others gave birth to live babies", es: "Algunos sí, otros dieron a luz bebés vivos", de: "Manche schon, andere gebaren lebende Babys", nl: "Sommigen wel, anderen baarden levende baby's" },
          { en: "They all laid eggs on beaches", es: "Todos ponían huevos en las playas", de: "Sie legten alle Eier an Stränden", nl: "Ze legden allemaal eieren op stranden" },
          { en: "None of them had babies", es: "Ninguno tenía bebés", de: "Keiner von ihnen hatte Babys", nl: "Geen van hen had baby's" },
          { en: "They adopted baby fish", es: "Adoptaban peces bebé", de: "Sie adoptierten Babyfische", nl: "Ze adopteerden babyvissen" }
        ],
        correct: 0,
        explanation: {
          en: "Different marine reptiles had different ways of having babies. Some like sea turtles laid eggs on beaches, while others like ichthyosaurs gave birth to live babies in the water.",
          es: "Diferentes reptiles marinos tenían diferentes formas de tener bebés. Algunos como las tortugas marinas ponían huevos en las playas, mientras que otros como los ictiosaurios daban a luz bebés vivos en el agua.",
          de: "Verschiedene Meeresreptilien hatten verschiedene Arten, Babys zu bekommen. Manche wie Meeresschildkröten legten Eier an Stränden, während andere wie Ichthyosaurier lebende Babys im Wasser zur Welt brachten.",
          nl: "Verschillende zeereptielen hadden verschillende manieren om baby's te krijgen. Sommigen zoals zeeschildpadden legden eieren op stranden, terwijl anderen zoals ichthyosaurs levende baby's in het water baarden."
        }
      },
      {
        question: {
          en: "What made marine reptiles good swimmers?",
          es: "¿Qué hacía que los reptiles marinos fueran buenos nadadores?",
          de: "Was machte Meeresreptilien zu guten Schwimmern?",
          nl: "Wat maakte zeereptielen goede zwemmers?"
        },
        options: [
          { en: "Streamlined bodies and flippers", es: "Cuerpos aerodinámicos y aletas", de: "Stromlinienförmige Körper und Flossen", nl: "Gestroomlijnde lichamen en vinnen" },
          { en: "They had wings", es: "Tenían alas", de: "Sie hatten Flügel", nl: "Ze hadden vleugels" },
          { en: "They were very light", es: "Eran muy livianos", de: "Sie waren sehr leicht", nl: "Ze waren zeer licht" },
          { en: "They used magic", es: "Usaban magia", de: "Sie benutzten Magie", nl: "Ze gebruikten magie" }
        ],
        correct: 0,
        explanation: {
          en: "Marine reptiles evolved streamlined, torpedo-shaped bodies and paddle-like flippers that made them efficient swimmers. These adaptations helped them move quickly through water to catch prey and escape predators.",
          es: "Los reptiles marinos evolucionaron cuerpos aerodinámicos en forma de torpedo y aletas en forma de remo que los convirtieron en nadadores eficientes. Estas adaptaciones los ayudaron a moverse rápidamente por el agua para atrapar presas y escapar de depredadores.",
          de: "Meeresreptilien entwickelten stromlinienförmige, torpedoartige Körper und paddel-ähnliche Flossen, die sie zu effizienten Schwimmern machten. Diese Anpassungen halfen ihnen, sich schnell durch das Wasser zu bewegen, um Beute zu fangen und Räubern zu entkommen.",
          nl: "Zeereptielen ontwikkelden gestroomlijnde, torpedo-vormige lichamen en peddel-achtige vinnen die hen efficiënte zwemmers maakten. Deze aanpassingen hielpen hen snel door het water te bewegen om prooien te vangen en aan roofdieren te ontsnappen."
        }
      },
      {
        question: {
          en: "Can we find marine reptiles in oceans today?",
          es: "¿Podemos encontrar reptiles marinos en los océanos hoy?",
          de: "Können wir heute Meeresreptilien in den Ozeanen finden?",
          nl: "Kunnen we vandaag zeereptielen vinden in de oceanen?"
        },
        options: [
          { en: "Only a few types like sea turtles", es: "Solo algunos tipos como tortugas marinas", de: "Nur wenige Arten wie Meeresschildkröten", nl: "Alleen een paar soorten zoals zeeschildpadden" },
          { en: "Yes, exactly the same ones", es: "Sí, exactamente los mismos", de: "Ja, genau dieselben", nl: "Ja, precies dezelfde" },
          { en: "No, none at all", es: "No, ninguno en absoluto", de: "Nein, überhaupt keine", nl: "Nee, helemaal geen" },
          { en: "Only in swimming pools", es: "Solo en piscinas", de: "Nur in Schwimmbädern", nl: "Alleen in zwembaden" }
        ],
        correct: 0,
        explanation: {
          en: "Today we only have a few types of marine reptiles left, like sea turtles, marine iguanas, and sea snakes. Most of the giant marine reptiles from the Mesozoic Era are extinct.",
          es: "Hoy solo tenemos algunos tipos de reptiles marinos, como tortugas marinas, iguanas marinas y serpientes de mar. La mayoría de los reptiles marinos gigantes de la Era Mesozoica están extintos.",
          de: "Heute haben wir nur noch wenige Arten von Meeresreptilien wie Meeresschildkröten, Meeresechsen und Seeschlangen. Die meisten riesigen Meeresreptilien aus der Mesozoischen Ära sind ausgestorben.",
          nl: "Vandaag hebben we alleen nog een paar soorten zeereptielen zoals zeeschildpadden, zeeleguanen en zeeslangen. De meeste gigantische zeereptielen uit het Mesozoïcum zijn uitgestorven."
        }
      },
      {
        question: {
          en: "Why are marine reptiles important to study?",
          es: "¿Por qué es importante estudiar los reptiles marinos?",
          de: "Warum ist es wichtig, Meeresreptilien zu studieren?",
          nl: "Waarom is het belangrijk om zeereptielen te bestuderen?"
        },
        options: [
          { en: "They help us understand evolution and ancient life", es: "Nos ayudan a entender la evolución y la vida antigua", de: "Sie helfen uns, Evolution und urzeitliches Leben zu verstehen", nl: "Ze helpen ons evolutie en oud leven te begrijpen" },
          { en: "They're good for cooking", es: "Son buenos para cocinar", de: "Sie sind gut zum Kochen", nl: "Ze zijn goed om te koken" },
          { en: "They make good pets", es: "Son buenas mascotas", de: "Sie sind gute Haustiere", nl: "Ze maken goede huisdieren" },
          { en: "They're not important", es: "No son importantes", de: "Sie sind nicht wichtig", nl: "Ze zijn niet belangrijk" }
        ],
        correct: 0,
        explanation: {
          en: "Studying marine reptiles helps scientists understand how life evolved in the oceans, how animals adapt to different environments, and what Earth's climate and ecosystems were like in the past.",
          es: "Estudiar reptiles marinos ayuda a los científicos a entender cómo evolucionó la vida en los océanos, cómo los animales se adaptan a diferentes ambientes, y cómo eran el clima y ecosistemas de la Tierra en el pasado.",
          de: "Das Studium von Meeresreptilien hilft Wissenschaftlern zu verstehen, wie sich das Leben in den Ozeanen entwickelte, wie sich Tiere an verschiedene Umgebungen anpassen und wie Klima und Ökosysteme der Erde in der Vergangenheit waren.",
          nl: "Het bestuderen van zeereptielen helpt wetenschappers begrijpen hoe het leven in de oceanen evolueerde, hoe dieren zich aanpassen aan verschillende omgevingen, en hoe het klimaat en ecosystemen van de aarde in het verleden waren."
        }
      },
      {
        question: {
          en: "Which marine reptile is still alive today?",
          es: "¿Qué reptil marino sigue vivo hoy?",
          de: "Welches Meeresreptil lebt heute noch?",
          nl: "Welke zeereptiel leeft vandaag nog?"
        },
        options: [
          { en: "Sea turtle", es: "Tortuga marina", de: "Meeresschildkröte", nl: "Zeeschildpad" },
          { en: "Plesiosaur", es: "Plesiosaurio", de: "Plesiosaurier", nl: "Plesiosaur" },
          { en: "Ichthyosaur", es: "Ictiosaurio", de: "Ichthyosaurier", nl: "Ichthyosaur" },
          { en: "Mosasaur", es: "Mosasaurio", de: "Mosasaurier", nl: "Mosasaur" }
        ],
        correct: 0,
        explanation: {
          en: "Sea turtles are the most common marine reptiles still living today. They have survived since the time of the dinosaurs and continue to live in oceans around the world.",
          es: "Las tortugas marinas son los reptiles marinos más comunes que aún viven hoy. Han sobrevivido desde la época de los dinosaurios y continúan viviendo en océanos de todo el mundo.",
          de: "Meeresschildkröten sind die häufigsten Meeresreptilien, die heute noch leben. Sie haben seit der Zeit der Dinosaurier überlebt und leben weiterhin in Ozeanen auf der ganzen Welt.",
          nl: "Zeeschildpadden zijn de meest voorkomende zeereptielen die vandaag nog leven. Ze hebben overleefd sinds de tijd van de dinosaurussen en leven nog steeds in oceanen over de hele wereld."
        }
      },
      {
        question: {
          en: "How did marine reptiles stay warm in cold ocean water?",
          es: "¿Cómo se mantenían calientes los reptiles marinos en agua fría del océano?",
          de: "Wie blieben Meeresreptilien in kaltem Meerwasser warm?",
          nl: "Hoe bleven zeereptielen warm in koud oceaanwater?"
        },
        options: [
          { en: "By being large and active swimmers", es: "Siendo grandes y nadadores activos", de: "Durch Größe und aktives Schwimmen", nl: "Door groot te zijn en actief te zwemmen" },
          { en: "By wearing thick coats", es: "Usando abrigos gruesos", de: "Durch das Tragen dicker Mäntel", nl: "Door dikke jassen te dragen" },
          { en: "By staying near volcanoes", es: "Manteniéndose cerca de volcanes", de: "Durch Aufenthalt in der Nähe von Vulkanen", nl: "Door bij vulkanen te blijven" },
          { en: "They were always cold", es: "Siempre tenían frío", de: "Sie waren immer kalt", nl: "Ze hadden altijd koud" }
        ],
        correct: 0,
        explanation: {
          en: "Large marine reptiles could maintain their body temperature by being big (which holds heat better) and by swimming actively. This helped them stay warm enough to be active hunters in the ocean.",
          es: "Los reptiles marinos grandes podían mantener su temperatura corporal siendo grandes (lo cual retiene mejor el calor) y nadando activamente. Esto les ayudaba a mantenerse lo suficientemente calientes para ser cazadores activos en el océano.",
          de: "Große Meeresreptilien konnten ihre Körpertemperatur durch ihre Größe (die Wärme besser hält) und aktives Schwimmen aufrechterhalten. Das half ihnen, warm genug zu bleiben, um aktive Jäger im Ozean zu sein.",
          nl: "Grote zeereptielen konden hun lichaamstemperatuur handhaven door groot te zijn (wat warmte beter vasthoudt) en door actief te zwemmen. Dit hielp hen warm genoeg te blijven om actieve jagers in de oceaan te zijn."
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
