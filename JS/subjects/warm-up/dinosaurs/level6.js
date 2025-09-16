(function() {
    const level6 = {
        name: {
            en: "Swimming Dinosaurs",
            es: "Dinosaurios Nadadores",
            de: "Schwimmende Dinosaurier",
            nl: "Zwemmende Dinosaurussen"
        },
        questions: [
            {
                question: {
                    en: "What do we call the large sea reptiles that lived during dinosaur times?",
                    es: "¿Cómo llamamos a los grandes reptiles marinos que vivieron en tiempos de dinosaurios?",
                    de: "Wie nennen wir die großen Meeresreptilien, die zur Dinosaurier-Zeit lebten?",
                    nl: "Hoe noemen we de grote zeereptielen die tijdens dinosaurustijden leefden?"
                },
                options: [
                    { en: "Marine reptiles", es: "Reptiles marinos", de: "Meeresreptilien", nl: "Zeereptielen" },
                    { en: "Swimming dinosaurs", es: "Dinosaurios nadadores", de: "Schwimmende Dinosaurier", nl: "Zwemmende dinosaurussen" },
                    { en: "Sea dragons", es: "Dragones marinos", de: "Seedrachen", nl: "Zeedraken" },
                    { en: "Water lizards", es: "Lagartos de agua", de: "Wassereidechsen", nl: "Waterhagedissen" }
                ],
                correct: 0,
                explanation: {
                    en: "Marine reptiles lived in the oceans during dinosaur times, but they were not actually dinosaurs themselves.",
                    es: "Los reptiles marinos vivían en los océanos durante los tiempos de dinosaurios, pero en realidad no eran dinosaurios.",
                    de: "Meeresreptilien lebten zur Dinosaurier-Zeit in den Ozeanen, waren aber selbst keine Dinosaurier.",
                    nl: "Zeereptielen leefden in de oceanen tijdens dinosaurustijden, maar waren zelf geen dinosaurussen."
                }
            },
            {
                question: {
                    en: "What was Plesiosaurs famous for?",
                    es: "¿Por qué eran famosos los Plesiosaurios?",
                    de: "Wofür waren Plesiosauren berühmt?",
                    nl: "Waar waren Plesiosaurs beroemd om?"
                },
                options: [
                    { en: "Their very long necks", es: "Sus cuellos muy largos", de: "Ihre sehr langen Hälse", nl: "Hun erg lange nekken" },
                    { en: "Their ability to fly", es: "Su capacidad de volar", de: "Ihre Fähigkeit zu fliegen", nl: "Hun vermogen om te vliegen" },
                    { en: "Living on land", es: "Vivir en tierra", de: "An Land zu leben", nl: "Op land leven" },
                    { en: "Being very tiny", es: "Ser muy pequeños", de: "Sehr winzig zu sein", nl: "Heel klein zijn" }
                ],
                correct: 0,
                explanation: {
                    en: "Plesiosaurs were famous for their extremely long necks that helped them catch fish in the ancient seas.",
                    es: "Los Plesiosaurios eran famosos por sus cuellos extremadamente largos que les ayudaban a pescar en los mares antiguos.",
                    de: "Plesiosauren waren berühmt für ihre extrem langen Hälse, die ihnen halfen, Fische in den alten Meeren zu fangen.",
                    nl: "Plesiosaurs waren beroemd om hun extreem lange nekken die hen hielpen vissen te vangen in de oude zeeën."
                }
            },
            {
                question: {
                    en: "How did Ichthyosaurs move through the water?",
                    es: "¿Cómo se movían los Ictiosaurios por el agua?",
                    de: "Wie bewegten sich Ichthyosaurier durch das Wasser?",
                    nl: "Hoe bewogen Ichthyosauriërs zich door het water?"
                },
                options: [
                    { en: "Swam like dolphins with their tail fin", es: "Nadaron como delfines con su aleta caudal", de: "Schwammen wie Delfine mit ihrer Schwanzflosse", nl: "Zwommen zoals dolfijnen met hun staartvin" },
                    { en: "Walked on the sea floor", es: "Caminaron en el fondo del mar", de: "Liefen am Meeresboden", nl: "Liepen op de zeebodem" },
                    { en: "Floated on the surface", es: "Flotaron en la superficie", de: "Trieben an der Oberfläche", nl: "Dreven aan de oppervlakte" },
                    { en: "Used wings to fly underwater", es: "Usaron alas para volar bajo el agua", de: "Benutzten Flügel, um unter Wasser zu fliegen", nl: "Gebruikten vleugels om onder water te vliegen" }
                ],
                correct: 0,
                explanation: {
                    en: "Ichthyosaurs had streamlined bodies and powerful tail fins that made them excellent swimmers, just like modern dolphins.",
                    es: "Los Ictiosaurios tenían cuerpos aerodinámicos y aletas caudales poderosas que los convertían en excelentes nadadores, como los delfines modernos.",
                    de: "Ichthyosaurier hatten stromlinienförmige Körper und kräftige Schwanzflossen, die sie zu ausgezeichneten Schwimmern machten, genau wie moderne Delfine.",
                    nl: "Ichthyosauriërs hadden gestroomlijnde lichamen en krachtige staartvinnen die hen uitstekende zwemmers maakten, net als moderne dolfijnen."
                }
            },
            {
                question: {
                    en: "What did Mosasaurus eat?",
                    es: "¿Qué comía el Mosasaurio?",
                    de: "Was fraß Mosasaurus?",
                    nl: "Wat at Mosasaurus?"
                },
                options: [
                    { en: "Fish, squid, and other sea animals", es: "Peces, calamares y otros animales marinos", de: "Fisch, Tintenfisch und andere Meerestiere", nl: "Vis, inktvis en andere zeedieren" },
                    { en: "Only seaweed", es: "Solo algas", de: "Nur Seetang", nl: "Alleen zeewier" },
                    { en: "Land plants", es: "Plantas terrestres", de: "Landpflanzen", nl: "Landplanten" },
                    { en: "Rocks from the ocean floor", es: "Rocas del fondo del océano", de: "Felsen vom Meeresboden", nl: "Rotsen van de oceaanbodem" }
                ],
                correct: 0,
                explanation: {
                    en: "Mosasaurus was a powerful predator that hunted various sea creatures with its massive jaws and sharp teeth.",
                    es: "Mosasaurus era un depredador poderoso que cazaba varias criaturas marinas con sus mandíbulas masivas y dientes afilados.",
                    de: "Mosasaurus war ein mächtiger Räuber, der verschiedene Meereskreaturen mit seinen massiven Kiefern und scharfen Zähnen jagte.",
                    nl: "Mosasaurus was een krachtige roofdier die verschillende zeewezens jaagde met zijn massieve kaken en scherpe tanden."
                }
            },
            {
                question: {
                    en: "How big was the largest Plesiosaur?",
                    es: "¿Qué tan grande era el Plesiosaurio más grande?",
                    de: "Wie groß war der größte Plesiosaur?",
                    nl: "Hoe groot was de grootste Plesiosaur?"
                },
                options: [
                    { en: "As long as a school bus", es: "Tan largo como un autobús escolar", de: "So lang wie ein Schulbus", nl: "Zo lang als een schoolbus" },
                    { en: "As big as a goldfish", es: "Tan grande como un pez dorado", de: "So groß wie ein Goldfisch", nl: "Zo groot als een goudvis" },
                    { en: "As big as a person", es: "Tan grande como una persona", de: "So groß wie eine Person", nl: "Zo groot als een persoon" },
                    { en: "As big as a car", es: "Tan grande como un carro", de: "So groß wie ein Auto", nl: "Zo groot als een auto" }
                ],
                correct: 0,
                explanation: {
                    en: "The largest Plesiosaurs could grow to enormous sizes, with some reaching lengths comparable to a school bus.",
                    es: "Los Plesiosaurios más grandes podían crecer a tamaños enormes, algunos alcanzando longitudes comparables a un autobús escolar.",
                    de: "Die größten Plesiosauren konnten zu enormen Größen heranwachsen, manche erreichten Längen vergleichbar mit einem Schulbus.",
                    nl: "De grootste Plesiosaurs konden tot enorme groottes groeien, sommige bereikten lengtes vergelijkbaar met een schoolbus."
                }
            },
            {
                question: {
                    en: "What was special about Leedsichthys?",
                    es: "¿Qué tenía especial Leedsichthys?",
                    de: "Was war besonders an Leedsichthys?",
                    nl: "Wat was bijzonder aan Leedsichthys?"
                },
                options: [
                    { en: "It was a giant fish that ate tiny sea creatures", es: "Era un pez gigante que comía criaturas marinas pequeñas", de: "Es war ein riesiger Fisch, der winzige Meereskreaturen fraß", nl: "Het was een reusachtige vis die kleine zeewezens at" },
                    { en: "It could walk on land", es: "Podía caminar en tierra", de: "Es konnte an Land gehen", nl: "Het kon op land lopen" },
                    { en: "It had wings to fly", es: "Tenía alas para volar", de: "Es hatte Flügel zum Fliegen", nl: "Het had vleugels om te vliegen" },
                    { en: "It lived in trees", es: "Vivía en árboles", de: "Es lebte in Bäumen", nl: "Het leefde in bomen" }
                ],
                correct: 0,
                explanation: {
                    en: "Leedsichthys was one of the largest fish that ever lived, but it was a gentle giant that fed on tiny plankton.",
                    es: "Leedsichthys fue uno de los peces más grandes que jamás vivió, pero era un gigante gentil que se alimentaba de plancton diminuto.",
                    de: "Leedsichthys war einer der größten Fische, die je lebten, aber er war ein sanfter Riese, der sich von winzigem Plankton ernährte.",
                    nl: "Leedsichthys was een van de grootste vissen die ooit leefden, maar het was een zachte reus die zich voedde met klein plankton."
                }
            },
            {
                question: {
                    en: "How did Elasmosaurus catch its prey?",
                    es: "¿Cómo atrapaba su presa el Elasmosaurio?",
                    de: "Wie fing Elasmosaurus seine Beute?",
                    nl: "Hoe ving Elasmosaurus zijn prooi?"
                },
                options: [
                    { en: "Used its long neck to sneak up on fish", es: "Usó su cuello largo para acercarse sigilosamente a los peces", de: "Benutzte seinen langen Hals, um sich an Fische anzuschleichen", nl: "Gebruikte zijn lange nek om vissen te besluipen" },
                    { en: "Jumped out of the water", es: "Saltó fuera del agua", de: "Sprang aus dem Wasser", nl: "Sprong uit het water" },
                    { en: "Used nets made of seaweed", es: "Usó redes hechas de algas", de: "Benutzte Netze aus Seetang", nl: "Gebruikte netten van zeewier" },
                    { en: "Asked other sea creatures for help", es: "Pidió ayuda a otras criaturas marinas", de: "Bat andere Meereskreaturen um Hilfe", nl: "Vroeg andere zeewezens om hulp" }
                ],
                correct: 0,
                explanation: {
                    en: "Elasmosaurus used its incredibly long neck like a fishing rod to sneak up on unsuspecting fish from below.",
                    es: "Elasmosaurus usó su cuello increíblemente largo como una caña de pescar para acercarse sigilosamente a peces desprevenidos desde abajo.",
                    de: "Elasmosaurus benutzte seinen unglaublich langen Hals wie eine Angelrute, um sich unbemerkt von unten an ahnungslose Fische anzuschleichen.",
                    nl: "Elasmosaurus gebruikte zijn ongelooflijk lange nek als een hengel om van onderaf ongezien naar nietsvermoedende vissen te sluipen."
                }
            },
            {
                question: {
                    en: "Did marine reptiles breathe underwater?",
                    es: "¿Los reptiles marinos respiraban bajo el agua?",
                    de: "Atmeten Meeresreptilien unter Wasser?",
                    nl: "Ademden zeereptielen onder water?"
                },
                options: [
                    { en: "No, they came to the surface for air", es: "No, subían a la superficie por aire", de: "Nein, sie kamen an die Oberfläche für Luft", nl: "Nee, ze kwamen naar de oppervlakte voor lucht" },
                    { en: "Yes, they had gills like fish", es: "Sí, tenían branquias como peces", de: "Ja, sie hatten Kiemen wie Fische", nl: "Ja, ze hadden kieuwen zoals vissen" },
                    { en: "They could do both", es: "Podían hacer ambos", de: "Sie konnten beides", nl: "Ze konden beide" },
                    { en: "They didn't need to breathe", es: "No necesitaban respirar", de: "Sie brauchten nicht zu atmen", nl: "Ze hoefden niet te ademen" }
                ],
                correct: 0,
                explanation: {
                    en: "Marine reptiles had lungs like land animals, so they needed to surface regularly to breathe air.",
                    es: "Los reptiles marinos tenían pulmones como los animales terrestres, por lo que necesitaban salir a la superficie regularmente para respirar aire.",
                    de: "Meeresreptilien hatten Lungen wie Landtiere, daher mussten sie regelmäßig an die Oberfläche kommen, um Luft zu atmen.",
                    nl: "Zeereptielen hadden longen zoals landdieren, dus moesten ze regelmatig naar de oppervlakte komen om lucht te ademen."
                }
            },
            {
                question: {
                    en: "What was Kronosaurus known for?",
                    es: "¿Por qué era conocido Kronosaurus?",
                    de: "Wofür war Kronosaurus bekannt?",
                    nl: "Waar was Kronosaurus bekend om?"
                },
                options: [
                    { en: "Having a huge head with powerful jaws", es: "Tener una cabeza enorme con mandíbulas poderosas", de: "Einen riesigen Kopf mit kräftigen Kiefern zu haben", nl: "Een enorm hoofd hebben met krachtige kaken" },
                    { en: "Being the smallest sea reptile", es: "Ser el reptil marino más pequeño", de: "Das kleinste Meeresreptil zu sein", nl: "Het kleinste zeereptiel zijn" },
                    { en: "Living on land only", es: "Vivir solo en tierra", de: "Nur an Land zu leben", nl: "Alleen op land leven" },
                    { en: "Having colorful stripes", es: "Tener rayas coloridas", de: "Bunte Streifen zu haben", nl: "Kleurrijke strepen hebben" }
                ],
                correct: 0,
                explanation: {
                    en: "Kronosaurus was known for having one of the largest heads of any marine reptile, with incredibly powerful jaws.",
                    es: "Kronosaurus era conocido por tener una de las cabezas más grandes de cualquier reptil marino, con mandíbulas increíblemente poderosas.",
                    de: "Kronosaurus war bekannt dafür, einen der größten Köpfe aller Meeresreptilien zu haben, mit unglaublich kräftigen Kiefern.",
                    nl: "Kronosaurus stond bekend om het hebben van een van de grootste hoofden van alle zeereptielen, met ongelooflijk krachtige kaken."
                }
            },
            {
                question: {
                    en: "How did Spinosaurus hunt in water?",
                    es: "¿Cómo cazaba en el agua el Spinosaurus?",
                    de: "Wie jagte Spinosaurus im Wasser?",
                    nl: "Hoe joeg Spinosaurus in het water?"
                },
                options: [
                    { en: "Waded in rivers and used its long snout to catch fish", es: "Caminó en ríos y usó su hocico largo para pescar", de: "Watete in Flüssen und benutzte seine lange Schnauze, um Fische zu fangen", nl: "Waadde in rivieren en gebruikte zijn lange snuit om vissen te vangen" },
                    { en: "Dove deep underwater", es: "Se zambulló profundo bajo el agua", de: "Tauchte tief unter Wasser", nl: "Dook diep onder water" },
                    { en: "Floated on the surface", es: "Flotó en la superficie", de: "Trieb an der Oberfläche", nl: "Dreef aan de oppervlakte" },
                    { en: "Only hunted on land", es: "Solo cazó en tierra", de: "Jagte nur an Land", nl: "Joeg alleen op land" }
                ],
                correct: 0,
                explanation: {
                    en: "Spinosaurus was a semi-aquatic dinosaur that waded in rivers and used its crocodile-like snout to catch fish.",
                    es: "Spinosaurus era un dinosaurio semi-acuático que caminaba en ríos y usaba su hocico parecido al de un cocodrilo para pescar.",
                    de: "Spinosaurus war ein semi-aquatischer Dinosaurier, der in Flüssen watete und seine krokodilartlige Schnauze zum Fischfang benutzte.",
                    nl: "Spinosaurus was een semi-aquatische dinosaurus die in rivieren waadde en zijn krokodilachtige snuit gebruikte om vissen te vangen."
                }
            },
            {
                question: {
                    en: "What did Archelon look like?",
                    es: "¿Cómo se veía Archelon?",
                    de: "Wie sah Archelon aus?",
                    nl: "Hoe zag Archelon eruit?"
                },
                options: [
                    { en: "A giant sea turtle", es: "Una tortuga marina gigante", de: "Eine riesige Meeresschildkröte", nl: "Een reusachtige zeeschildpad" },
                    { en: "A long-necked dinosaur", es: "Un dinosaurio de cuello largo", de: "Ein Langhalssaurier", nl: "Een langnekdinosaurus" },
                    { en: "A flying reptile", es: "Un reptil volador", de: "Ein fliegendes Reptil", nl: "Een vliegend reptiel" },
                    { en: "A small lizard", es: "Un lagarto pequeño", de: "Eine kleine Echse", nl: "Een kleine hagedis" }
                ],
                correct: 0,
                explanation: {
                    en: "Archelon was a giant sea turtle that lived during the time of dinosaurs and could grow as large as a small car.",
                    es: "Archelon era una tortuga marina gigante que vivió durante la época de los dinosaurios y podía crecer tan grande como un auto pequeño.",
                    de: "Archelon war eine riesige Meeresschildkröte, die zur Zeit der Dinosaurier lebte und so groß wie ein kleines Auto werden konnte.",
                    nl: "Archelon was een reusachtige zeeschildpad die tijdens de tijd van dinosaurussen leefde en zo groot kon worden als een kleine auto."
                }
            },
            {
                question: {
                    en: "How did Dolichorhynchops move through water?",
                    es: "¿Cómo se movía Dolichorhynchops por el agua?",
                    de: "Wie bewegte sich Dolichorhynchops durch das Wasser?",
                    nl: "Hoe bewoog Dolichorhynchops zich door het water?"
                },
                options: [
                    { en: "Used four flippers like a sea turtle", es: "Usó cuatro aletas como tortuga marina", de: "Benutzte vier Flossen wie eine Meeresschildkröte", nl: "Gebruikte vier flippers zoals een zeeschildpad" },
                    { en: "Swam with its tail only", es: "Nadó solo con la cola", de: "Schwamm nur mit dem Schwanz", nl: "Zwom alleen met zijn staart" },
                    { en: "Walked on the ocean floor", es: "Caminó en el fondo del océano", de: "Lief am Meeresboden", nl: "Liep op de oceaanbodem" },
                    { en: "Flew above the water", es: "Voló sobre el agua", de: "Flog über dem Wasser", nl: "Vloog boven het water" }
                ],
                correct: 0,
                explanation: {
                    en: "Dolichorhynchops used four large flippers to swim gracefully through the water, similar to modern sea turtles.",
                    es: "Dolichorhynchops usó cuatro aletas grandes para nadar graciosamente por el agua, similar a las tortugas marinas modernas.",
                    de: "Dolichorhynchops benutzte vier große Flossen, um anmutig durch das Wasser zu schwimmen, ähnlich wie moderne Meeresschildkröten.",
                    nl: "Dolichorhynchops gebruikte vier grote flippers om gracieus door het water te zwemmen, vergelijkbaar met moderne zeeschildpadden."
                }
            },
            {
                question: {
                    en: "What was Lipleurodon's most dangerous weapon?",
                    es: "¿Cuál era el arma más peligrosa de Lipleurodon?",
                    de: "Was war Lipleurodons gefährlichste Waffe?",
                    nl: "Wat was Lipleurodon's gevaarlijkste wapen?"
                },
                options: [
                    { en: "Massive jaws with sharp teeth", es: "Mandíbulas masivas con dientes afilados", de: "Massive Kiefer mit scharfen Zähnen", nl: "Massieve kaken met scherpe tanden" },
                    { en: "Poisonous spines", es: "Espinas venenosas", de: "Giftige Stacheln", nl: "Giftige stekels" },
                    { en: "Electric shocks", es: "Descargas eléctricas", de: "Elektrische Schläge", nl: "Elektrische schokken" },
                    { en: "Camouflage powers", es: "Poderes de camuflaje", de: "Tarnkräfte", nl: "Camouflagekrachten" }
                ],
                correct: 0,
                explanation: {
                    en: "Lipleurodon was one of the most fearsome marine predators with massive jaws lined with sharp teeth for catching prey.",
                    es: "Lipleurodon era uno de los depredadores marinos más temibles con mandíbulas masivas llenas de dientes afilados para atrapar presas.",
                    de: "Lipleurodon war einer der furchteinflößendsten Meeresraubtiere mit massiven Kiefern voller scharfer Zähne zum Beutefang.",
                    nl: "Lipleurodon was een van de meest gevreesde zeeroofdieren met massieve kaken vol scherpe tanden om prooien te vangen."
                }
            },
            {
                question: {
                    en: "Where did Hesperornis build its nests?",
                    es: "¿Dónde construía sus nidos Hesperornis?",
                    de: "Wo baute Hesperornis seine Nester?",
                    nl: "Waar bouwde Hesperornis zijn nesten?"
                },
                options: [
                    { en: "On shore near the water", es: "En la orilla cerca del agua", de: "Am Ufer in der Nähe des Wassers", nl: "Aan de kust dichtbij het water" },
                    { en: "Deep underwater", es: "Profundo bajo el agua", de: "Tief unter Wasser", nl: "Diep onder water" },
                    { en: "In tall trees", es: "En árboles altos", de: "In hohen Bäumen", nl: "In hoge bomen" },
                    { en: "On mountain tops", es: "En cimas de montañas", de: "Auf Berggipfeln", nl: "Op bergtop" }
                ],
                correct: 0,
                explanation: {
                    en: "Hesperornis was a flightless seabird that nested on shores near water, like many seabirds do today.",
                    es: "Hesperornis era un ave marina no voladora que anidaba en las costas cerca del agua, como muchas aves marinas hacen hoy.",
                    de: "Hesperornis war ein flugunfähiger Seevogel, der an Küsten in der Nähe von Wasser nistete, wie viele Seevögel heute.",
                    nl: "Hesperornis was een vliegonbekwame zeevogel die nesten bouwde aan kusten dichtbij water, zoals veel zeevogels vandaag doen."
                }
            },
            {
                question: {
                    en: "What did Ammonites look like?",
                    es: "¿Cómo se veían los Amonites?",
                    de: "Wie sahen Ammoniten aus?",
                    nl: "Hoe zagen Ammonieten eruit?"
                },
                options: [
                    { en: "Spiral shells like snails", es: "Conchas espirales como caracoles", de: "Spiralschalen wie Schnecken", nl: "Spiraalschelpen zoals slakken" },
                    { en: "Fish with fins", es: "Peces con aletas", de: "Fische mit Flossen", nl: "Vissen met vinnen" },
                    { en: "Long-necked sea reptiles", es: "Reptiles marinos de cuello largo", de: "Langhalsmeeresreptilien", nl: "Langnekzeereptielen" },
                    { en: "Flying sea creatures", es: "Criaturas marinas voladoras", de: "Fliegende Meereskreaturen", nl: "Vliegende zeewezens" }
                ],
                correct: 0,
                explanation: {
                    en: "Ammonites were ancient sea creatures with beautiful spiral shells, related to modern squid and octopus.",
                    es: "Los Amonites eran criaturas marinas antiguas con hermosas conchas espirales, relacionados con calamares y pulpos modernos.",
                    de: "Ammoniten waren alte Meereskreaturen mit wunderschönen Spiralschalen, verwandt mit modernen Tintenfischen und Kraken.",
                    nl: "Ammonieten waren oude zeewezens met prachtige spiraalschelpen, verwant aan moderne inktvissen en octopussen."
                }
            },
            {
                question: {
                    en: "How did Ophthalmosaurus see underwater?",
                    es: "¿Cómo veía bajo el agua Ophthalmosaurus?",
                    de: "Wie sah Ophthalmosaurus unter Wasser?",
                    nl: "Hoe zag Ophthalmosaurus onder water?"
                },
                options: [
                    { en: "Had huge eyes for seeing in dark water", es: "Tenía ojos enormes para ver en agua oscura", de: "Hatte riesige Augen, um im dunklen Wasser zu sehen", nl: "Had enorme ogen om in donker water te zien" },
                    { en: "Used sound to navigate", es: "Usó sonido para navegar", de: "Benutzte Schall zur Navigation", nl: "Gebruikte geluid om te navigeren" },
                    { en: "Felt around with its nose", es: "Tanteó con la nariz", de: "Tastete mit der Nase herum", nl: "Voelde rond met zijn neus" },
                    { en: "Couldn't see underwater at all", es: "No podía ver bajo el agua en absoluto", de: "Konnte unter Wasser gar nicht sehen", nl: "Kon helemaal niet onder water zien" }
                ],
                correct: 0,
                explanation: {
                    en: "Ophthalmosaurus had enormous eyes, some of the largest relative to body size of any vertebrate, perfect for seeing in dark waters.",
                    es: "Ophthalmosaurus tenía ojos enormes, algunos de los más grandes en relación al tamaño corporal de cualquier vertebrado, perfectos para ver en aguas oscuras.",
                    de: "Ophthalmosaurus hatte riesige Augen, einige der größten im Verhältnis zur Körpergröße aller Wirbeltiere, perfekt zum Sehen in dunklen Gewässern.",
                    nl: "Ophthalmosaurus had enorme ogen, sommige van de grootste ten opzichte van lichaamsgrootte van alle gewervelde dieren, perfect voor het zien in donkere wateren."
                }
            },
            {
                question: {
                    en: "What was special about Styxosaurus's neck?",
                    es: "¿Qué tenía especial el cuello de Styxosaurus?",
                    de: "Was war besonders am Hals des Styxosaurus?",
                    nl: "Wat was bijzonder aan de nek van Styxosaurus?"
                },
                options: [
                    { en: "It was longer than its body", es: "Era más largo que su cuerpo", de: "Es war länger als sein Körper", nl: "Het was langer dan zijn lichaam" },
                    { en: "It was very short", es: "Era muy corto", de: "Es war sehr kurz", nl: "Het was heel kort" },
                    { en: "It could change colors", es: "Podía cambiar de colores", de: "Es konnte Farben wechseln", nl: "Het kon van kleur veranderen" },
                    { en: "It was covered in spikes", es: "Estaba cubierto de púas", de: "Es war mit Stacheln bedeckt", nl: "Het was bedekt met stekels" }
                ],
                correct: 0,
                explanation: {
                    en: "Styxosaurus had an extremely long neck that was actually longer than its body, helping it reach fish from far distances.",
                    es: "Styxosaurus tenía un cuello extremadamente largo que en realidad era más largo que su cuerpo, ayudándole a alcanzar peces desde grandes distancias.",
                    de: "Styxosaurus hatte einen extrem langen Hals, der tatsächlich länger war als sein Körper und ihm half, Fische aus großen Entfernungen zu erreichen.",
                    nl: "Styxosaurus had een extreem lange nek die eigenlijk langer was dan zijn lichaam, wat hem hielp vissen van grote afstanden te bereiken."
                }
            },
            {
                question: {
                    en: "How did Basilosaurus hunt?",
                    es: "¿Cómo cazaba Basilosaurus?",
                    de: "Wie jagte Basilosaurus?",
                    nl: "Hoe joeg Basilosaurus?"
                },
                options: [
                    { en: "As an early whale, it hunted fish and squid", es: "Como ballena temprana, cazó peces y calamares", de: "Als früher Wal jagte es Fische und Tintenfische", nl: "Als vroege walvis joeg het op vissen en inktvissen" },
                    { en: "It was a plant-eater", es: "Era herbívoro", de: "Es war ein Pflanzenfresser", nl: "Het was een planteneter" },
                    { en: "It only ate seaweed", es: "Solo comía algas", de: "Es fraß nur Seetang", nl: "Het at alleen zeewier" },
                    { en: "It never hunted anything", es: "Nunca cazó nada", de: "Es jagte nie etwas", nl: "Het joeg nooit op iets" }
                ],
                correct: 0,
                explanation: {
                    en: "Basilosaurus was an early whale that lived in ancient seas and hunted fish and squid with its powerful jaws.",
                    es: "Basilosaurus era una ballena temprana que vivía en mares antiguos y cazaba peces y calamares con sus poderosas mandíbulas.",
                    de: "Basilosaurus war ein früher Wal, der in urzeitlichen Meeren lebte und Fische und Tintenfische mit seinen kräftigen Kiefern jagte.",
                    nl: "Basilosaurus was een vroege walvis die in oude zeeën leefde en vissen en inktvissen joeg met zijn krachtige kaken."
                }
            },
            {
                question: {
                    en: "What did Thalassomedon use its long neck for?",
                    es: "¿Para qué usaba Thalassomedon su cuello largo?",
                    de: "Wofür benutzte Thalassomedon seinen langen Hals?",
                    nl: "Waarvoor gebruikte Thalassomedon zijn lange nek?"
                },
                options: [
                    { en: "To reach fish while its body stayed hidden", es: "Para alcanzar peces mientras su cuerpo permanecía oculto", de: "Um Fische zu erreichen, während sein Körper versteckt blieb", nl: "Om vissen te bereiken terwijl zijn lichaam verborgen bleef" },
                    { en: "To breathe air above water", es: "Para respirar aire sobre el agua", de: "Um Luft über Wasser zu atmen", nl: "Om lucht boven water te ademen" },
                    { en: "To communicate with other sea creatures", es: "Para comunicarse con otras criaturas marinas", de: "Um mit anderen Meereskreaturen zu kommunizieren", nl: "Om met andere zeewezens te communiceren" },
                    { en: "To dig in the sand", es: "Para cavar en la arena", de: "Um im Sand zu graben", nl: "Om in het zand te graven" }
                ],
                correct: 0,
                explanation: {
                    en: "Thalassomedon used its extremely long neck as a stealthy fishing tool, keeping its body hidden while reaching for fish.",
                    es: "Thalassomedon usó su cuello extremadamente largo como una herramienta de pesca sigilosa, manteniendo su cuerpo oculto mientras alcanzaba peces.",
                    de: "Thalassomedon benutzte seinen extrem langen Hals als heimliches Angelwerkzeug und hielt seinen Körper versteckt, während er nach Fischen griff.",
                    nl: "Thalassomedon gebruikte zijn extreem lange nek als een stiekeme visgereedschap, zijn lichaam verborgen houdend terwijl hij naar vissen reikte."
                }
            },
            {
                question: {
                    en: "How did Shonisaurus move so gracefully underwater?",
                    es: "¿Cómo se movía tan graciosamente bajo el agua Shonisaurus?",
                    de: "Wie bewegte sich Shonisaurus so anmutig unter Wasser?",
                    nl: "Hoe bewoog Shonisaurus zo gracieus onder water?"
                },
                options: [
                    { en: "It had a streamlined body like a whale", es: "Tenía un cuerpo aerodinámico como ballena", de: "Es hatte einen stromlinienförmigen Körper wie ein Wal", nl: "Het had een gestroomlijnd lichaam zoals een walvis" },
                    { en: "It had webbed feet", es: "Tenía pies palmeados", de: "Es hatte Schwimmhäute", nl: "Het had zwemvliezen" },
                    { en: "It used magic powers", es: "Usó poderes mágicos", de: "Es benutzte magische Kräfte", nl: "Het gebruikte magische krachten" },
                    { en: "It moved very slowly", es: "Se movía muy lentamente", de: "Es bewegte sich sehr langsam", nl: "Het bewoog heel langzaam" }
                ],
                correct: 0,
                explanation: {
                    en: "Shonisaurus had a whale-like streamlined body that allowed it to move gracefully and efficiently through the water.",
                    es: "Shonisaurus tenía un cuerpo aerodinámico parecido a una ballena que le permitía moverse graciosamente y eficientemente por el agua.",
                    de: "Shonisaurus hatte einen walartigen, stromlinienförmigen Körper, der es ihm ermöglichte, sich anmutig und effizient durch das Wasser zu bewegen.",
                    nl: "Shonisaurus had een walvisachtig gestroomlijnd lichaam dat hem in staat stelde zich gracieus en efficiënt door het water te bewegen."
                }
            },
            {
                question: {
                    en: "What was Dakosaurus nicknamed?",
                    es: "¿Cuál era el apodo de Dakosaurus?",
                    de: "Wie war der Spitzname von Dakosaurus?",
                    nl: "Wat was de bijnaam van Dakosaurus?"
                },
                options: [
                    { en: "Godzilla", es: "Godzilla", de: "Godzilla", nl: "Godzilla" },
                    { en: "Sea monster", es: "Monstruo marino", de: "Seeungeheuer", nl: "Zeemonster" },
                    { en: "Gentle giant", es: "Gigante gentil", de: "Sanfter Riese", nl: "Zachte reus" },
                    { en: "Swimming lizard", es: "Lagarto nadador", de: "Schwimmende Echse", nl: "Zwemmende hagedis" }
                ],
                correct: 0,
                explanation: {
                    en: "Dakosaurus was nicknamed 'Godzilla' because it was a massive marine crocodile that looked like a sea monster.",
                    es: "Dakosaurus fue apodado 'Godzilla' porque era un cocodrilo marino masivo que parecía un monstruo marino.",
                    de: "Dakosaurus wurde 'Godzilla' genannt, weil es ein massives Meereskrokodil war, das wie ein Seeungeheuer aussah.",
                    nl: "Dakosaurus werd 'Godzilla' genoemd omdat het een massieve zeekrokodil was die eruitzag als een zeemonster."
                }
            },
            {
                question: {
                    en: "How did Baryonyx catch fish?",
                    es: "¿Cómo pescaba Baryonyx?",
                    de: "Wie fing Baryonyx Fische?",
                    nl: "Hoe ving Baryonyx vissen?"
                },
                options: [
                    { en: "Used its claws like fishing hooks while standing in shallow water", es: "Usó sus garras como anzuelos parado en agua poco profunda", de: "Benutzte seine Krallen wie Angelhaken, während er in flachem Wasser stand", nl: "Gebruikte zijn klauwen als vishaken terwijl hij in ondiep water stond" },
                    { en: "Dove deep underwater", es: "Se zambulló profundo bajo el agua", de: "Tauchte tief unter Wasser", nl: "Dook diep onder water" },
                    { en: "Used a net made of plants", es: "Usó una red hecha de plantas", de: "Benutzte ein Netz aus Pflanzen", nl: "Gebruikte een net van planten" },
                    { en: "Asked other animals for help", es: "Pidió ayuda a otros animales", de: "Bat andere Tiere um Hilfe", nl: "Vroeg andere dieren om hulp" }
                ],
                correct: 0,
                explanation: {
                    en: "Baryonyx had large, curved claws that it used like fishing hooks to catch fish while standing in shallow water.",
                    es: "Baryonyx tenía garras grandes y curvas que usaba como anzuelos para pescar mientras estaba en agua poco profunda.",
                    de: "Baryonyx hatte große, gebogene Krallen, die es wie Angelhaken benutzte, um Fische zu fangen, während es in flachem Wasser stand.",
                    nl: "Baryonyx had grote, gebogen klauwen die het als vishaken gebruikte om vissen te vangen terwijl het in ondiep water stond."
                }
            },
            {
                question: {
                    en: "What made Geosaurus different from land crocodiles?",
                    es: "¿Qué hizo diferente a Geosaurus de los cocodrilos terrestres?",
                    de: "Was machte Geosaurus anders als Landkrokodile?",
                    nl: "Wat maakte Geosaurus anders dan landkrokodillen?"
                },
                options: [
                    { en: "It had flippers instead of legs and a shark-like tail", es: "Tenía aletas en lugar de patas y cola de tiburón", de: "Es hatte Flossen statt Beine und einen haiartigen Schwanz", nl: "Het had flippers in plaats van poten en een haaienstaart" },
                    { en: "It was much smaller", es: "Era mucho más pequeño", de: "Es war viel kleiner", nl: "Het was veel kleiner" },
                    { en: "It had wings", es: "Tenía alas", de: "Es hatte Flügel", nl: "Het had vleugels" },
                    { en: "It ate only plants", es: "Solo comía plantas", de: "Es fraß nur Pflanzen", nl: "Het at alleen planten" }
                ],
                correct: 0,
                explanation: {
                    en: "Geosaurus was perfectly adapted for ocean life with flippers instead of legs and a shark-like tail for swimming.",
                    es: "Geosaurus estaba perfectamente adaptado para la vida oceánica con aletas en lugar de patas y una cola parecida a la de un tiburón para nadar.",
                    de: "Geosaurus war perfekt an das Meeresleben angepasst mit Flossen statt Beinen und einem haiartigen Schwanz zum Schwimmen.",
                    nl: "Geosaurus was perfect aangepast aan het oceaanleven met flippers in plaats van poten en een haaienstaart om te zwemmen."
                }
            },
            {
                question: {
                    en: "How did Eurhinosaurus use its long upper jaw?",
                    es: "¿Cómo usaba Eurhinosaurus su mandíbula superior larga?",
                    de: "Wie benutzte Eurhinosaurus seinen langen Oberkiefer?",
                    nl: "Hoe gebruikte Eurhinosaurus zijn lange bovenkaak?"
                },
                options: [
                    { en: "To stun fish like a swordfish", es: "Para aturdir peces como pez espada", de: "Um Fische zu betäuben wie ein Schwertfisch", nl: "Om vissen te verdoven zoals een zwaardvis" },
                    { en: "To dig in the mud", es: "Para cavar en el lodo", de: "Um im Schlamm zu graben", nl: "Om in de modder te graven" },
                    { en: "To defend against predators", es: "Para defenderse de depredadores", de: "Zur Verteidigung gegen Raubtiere", nl: "Om zich te verdedigen tegen roofdieren" },
                    { en: "To break open shells", es: "Para romper conchas", de: "Um Schalen zu öffnen", nl: "Om schelpen open te breken" }
                ],
                correct: 0,
                explanation: {
                    en: "Eurhinosaurus had a long upper jaw like a sword that it used to stun fish, similar to how modern swordfish hunt.",
                    es: "Eurhinosaurus tenía una mandíbula superior larga como una espada que usaba para aturdir peces, similar a cómo cazan los peces espada modernos.",
                    de: "Eurhinosaurus hatte einen langen Oberkiefer wie ein Schwert, den es benutzte, um Fische zu betäuben, ähnlich wie moderne Schwertfische jagen.",
                    nl: "Eurhinosaurus had een lange bovenkaak als een zwaard die het gebruikte om vissen te verdoven, vergelijkbaar met hoe moderne zwaardvissen jagen."
                }
            },
            {
                question: {
                    en: "What was Tanystropheus known for?",
                    es: "¿Por qué era conocido Tanystropheus?",
                    de: "Wofür war Tanystropheus bekannt?",
                    nl: "Waar was Tanystropheus bekend om?"
                },
                options: [
                    { en: "Having an extremely long neck for fishing", es: "Tener un cuello extremadamente largo para pescar", de: "Einen extrem langen Hals zum Fischen zu haben", nl: "Een extreem lange nek hebben om te vissen" },
                    { en: "Being the fastest swimmer", es: "Ser el nadador más rápido", de: "Der schnellste Schwimmer zu sein", nl: "De snelste zwemmer zijn" },
                    { en: "Having no neck at all", es: "No tener cuello en absoluto", de: "Gar keinen Hals zu haben", nl: "Helemaal geen nek hebben" },
                    { en: "Living only on land", es: "Vivir solo en tierra", de: "Nur an Land zu leben", nl: "Alleen op land leven" }
                ],
                correct: 0,
                explanation: {
                    en: "Tanystropheus had an incredibly long neck that was perfect for fishing from the water's edge or shallow areas.",
                    es: "Tanystropheus tenía un cuello increíblemente largo que era perfecto para pescar desde la orilla del agua o áreas poco profundas.",
                    de: "Tanystropheus hatte einen unglaublich langen Hals, der perfekt zum Fischen vom Wasserrand oder flachen Bereichen war.",
                    nl: "Tanystropheus had een ongelooflijk lange nek die perfect was voor het vissen vanaf de waterkant of ondiepe gebieden."
                }
            },
            {
                question: {
                    en: "How did Cryptoclidus catch small prey?",
                    es: "¿Cómo atrapaba presas pequeñas Cryptoclidus?",
                    de: "Wie fing Cryptoclidus kleine Beute?",
                    nl: "Hoe ving Cryptoclidus kleine prooien?"
                },
                options: [
                    { en: "Used its many small teeth like a filter", es: "Usó sus muchos dientes pequeños como filtro", de: "Benutzte seine vielen kleinen Zähne wie einen Filter", nl: "Gebruikte zijn vele kleine tanden als filter" },
                    { en: "Swallowed everything whole", es: "Se tragó todo entero", de: "Schluckte alles ganz", nl: "Slikte alles heel door" },
                    { en: "Used its flippers to catch prey", es: "Usó sus aletas para atrapar presas", de: "Benutzte seine Flossen, um Beute zu fangen", nl: "Gebruikte zijn flippers om prooien te vangen" },
                    { en: "Waited for prey to come to it", es: "Esperó a que la presa viniera a él", de: "Wartete darauf, dass Beute zu ihm kam", nl: "Wachtte tot prooien naar hem toe kwamen" }
                ],
                correct: 0,
                explanation: {
                    en: "Cryptoclidus had many small, needle-like teeth that worked like a filter to catch small fish and sea creatures.",
                    es: "Cryptoclidus tenía muchos dientes pequeños como agujas que funcionaban como un filtro para atrapar peces pequeños y criaturas marinas.",
                    de: "Cryptoclidus hatte viele kleine, nadelartige Zähne, die wie ein Filter funktionierten, um kleine Fische und Meereskreaturen zu fangen.",
                    nl: "Cryptoclidus had vele kleine, naaldachtige tanden die werkten als een filter om kleine vissen en zeewezens te vangen."
                }
            },
            {
                question: {
                    en: "What was Platecarpus good at?",
                    es: "¿En qué era bueno Platecarpus?",
                    de: "Worin war Platecarpus gut?",
                    nl: "Waar was Platecarpus goed in?"
                },
                options: [
                    { en: "Swimming fast and hunting fish", es: "Nadar rápido y cazar peces", de: "Schnell schwimmen und Fische jagen", nl: "Snel zwemmen en op vissen jagen" },
                    { en: "Walking on land", es: "Caminar en tierra", de: "An Land gehen", nl: "Op land lopen" },
                    { en: "Flying above water", es: "Volar sobre el agua", de: "Über Wasser fliegen", nl: "Boven water vliegen" },
                    { en: "Hiding in caves", es: "Esconderse en cuevas", de: "Sich in Höhlen verstecken", nl: "Zich verstoppen in grotten" }
                ],
                correct: 0,
                explanation: {
                    en: "Platecarpus was an excellent swimmer and skilled hunter that could chase down fast-moving fish in the ancient seas.",
                    es: "Platecarpus era un excelente nadador y cazador hábil que podía perseguir peces de movimiento rápido en los mares antiguos.",
                    de: "Platecarpus war ein ausgezeichneter Schwimmer und geschickter Jäger, der schnell bewegende Fische in den urzeitlichen Meeren verfolgen konnte.",
                    nl: "Platecarpus was een uitstekende zwemmer en bekwame jager die snelbewegende vissen kon achtervolgen in de oude zeeën."
                }
            },
            {
                question: {
                    en: "How did Nothosaurus move between land and water?",
                    es: "¿Cómo se movía Nothosaurus entre tierra y agua?",
                    de: "Wie bewegte sich Nothosaurus zwischen Land und Wasser?",
                    nl: "Hoe bewoog Nothosaurus zich tussen land en water?"
                },
                options: [
                    { en: "Had webbed feet and could walk on both", es: "Tenía pies palmeados y podía caminar en ambos", de: "Hatte Schwimmhäute und konnte auf beiden gehen", nl: "Had zwemvliezen en kon op beide lopen" },
                    { en: "Could only live in water", es: "Solo podía vivir en agua", de: "Konnte nur im Wasser leben", nl: "Kon alleen in water leven" },
                    { en: "Could only live on land", es: "Solo podía vivir en tierra", de: "Konnte nur an Land leben", nl: "Kon alleen op land leven" },
                    { en: "Flew between them", es: "Voló entre ellos", de: "Flog zwischen ihnen", nl: "Vloog tussen hen" }
                ],
                correct: 0,
                explanation: {
                    en: "Nothosaurus had webbed feet that allowed it to swim well in water and also walk on land, making it amphibious.",
                    es: "Nothosaurus tenía pies palmeados que le permitían nadar bien en el agua y también caminar en tierra, haciéndolo anfibio.",
                    de: "Nothosaurus hatte Schwimmhäute, die es ihm ermöglichten, gut im Wasser zu schwimmen und auch an Land zu gehen, was es amphibisch machte.",
                    nl: "Nothosaurus had zwemvliezen die het in staat stelden goed te zwemmen in water en ook op land te lopen, waardoor het amfibisch was."
                }
            },
            {
                question: {
                    en: "What did Cretoxyrhina (the giant shark) hunt?",
                    es: "¿Qué cazaba Cretoxyrhina (el tiburón gigante)?",
                    de: "Was jagte Cretoxyrhina (der riesige Hai)?",
                    nl: "Op wat joeg Cretoxyrhina (de reuzenhaai)?"
                },
                options: [
                    { en: "Large fish and marine reptiles", es: "Peces grandes y reptiles marinos", de: "Große Fische und Meeresreptilien", nl: "Grote vissen en zeereptielen" },
                    { en: "Only tiny plankton", es: "Solo plancton pequeño", de: "Nur winziges Plankton", nl: "Alleen klein plankton" },
                    { en: "Seaweed and plants", es: "Algas y plantas", de: "Seetang und Pflanzen", nl: "Zeewier en planten" },
                    { en: "Land animals only", es: "Solo animales terrestres", de: "Nur Landtiere", nl: "Alleen landdieren" }
                ],
                correct: 0,
                explanation: {
                    en: "Cretoxyrhina was a giant shark that hunted large marine reptiles and fish with its powerful jaws and razor-sharp teeth.",
                    es: "Cretoxyrhina era un tiburón gigante que cazaba grandes reptiles marinos y peces con sus poderosas mandíbulas y dientes afilados como navajas.",
                    de: "Cretoxyrhina war ein riesiger Hai, der große Meeresreptilien und Fische mit seinen kraftvollen Kiefern und rasiermesserscharfen Zähnen jagte.",
                    nl: "Cretoxyrhina was een reuzenhaai die grote zeereptielen en vissen joeg met zijn krachtige kaken en scheermes-scherpe tanden."
                }
            },
            {
                question: {
                    en: "How did Cartorhynchus adapt to water life?",
                    es: "¿Cómo se adaptó Cartorhynchus a la vida acuática?",
                    de: "Wie passte sich Cartorhynchus an das Wasserleben an?",
                    nl: "Hoe paste Cartorhynchus zich aan het waterleven aan?"
                },
                options: [
                    { en: "Developed flippers and became streamlined", es: "Desarrolló aletas y se volvió aerodinámico", de: "Entwickelte Flossen und wurde stromlinienförmig", nl: "Ontwikkelde flippers en werd gestroomlijnd" },
                    { en: "Grew wings to fly over water", es: "Le crecieron alas para volar sobre el agua", de: "Wuchs Flügel, um über Wasser zu fliegen", nl: "Groeide vleugels om over water te vliegen" },
                    { en: "Became much larger", es: "Se volvió mucho más grande", de: "Wurde viel größer", nl: "Werd veel groter" },
                    { en: "Stayed exactly the same", es: "Se mantuvo exactamente igual", de: "Blieb genau gleich", nl: "Bleef precies hetzelfde" }
                ],
                correct: 0,
                explanation: {
                    en: "Cartorhynchus evolved from land reptiles and developed flippers and a streamlined body to live in the water.",
                    es: "Cartorhynchus evolucionó de reptiles terrestres y desarrolló aletas y un cuerpo aerodinámico para vivir en el agua.",
                    de: "Cartorhynchus entwickelte sich aus Landreptilien und entwickelte Flossen und einen stromlinienförmigen Körper, um im Wasser zu leben.",
                    nl: "Cartorhynchus evolueerde uit landreptielen en ontwikkelde flippers en een gestroomlijnd lichaam om in het water te leven."
                }
            },
            {
                question: {
                    en: "What happened to marine reptiles when dinosaurs went extinct?",
                    es: "¿Qué les pasó a los reptiles marinos cuando se extinguieron los dinosaurios?",
                    de: "Was geschah mit Meeresreptilien, als Dinosaurier ausstarben?",
                    nl: "Wat gebeurde er met zeereptielen toen dinosaurussen uitstierven?"
                },
                options: [
                    { en: "Most of them also went extinct", es: "La mayoría también se extinguió", de: "Die meisten starben auch aus", nl: "De meeste stierven ook uit" },
                    { en: "They all survived and live today", es: "Todos sobrevivieron y viven hoy", de: "Sie überlebten alle und leben heute", nl: "Ze overleefden allemaal en leven vandaag" },
                    { en: "They moved to land", es: "Se mudaron a tierra", de: "Sie zogen an Land", nl: "Ze verhuisden naar land" },
                    { en: "They learned to fly", es: "Aprendieron a volar", de: "Sie lernten zu fliegen", nl: "Ze leerden vliegen" }
                ],
                correct: 0,
                explanation: {
                    en: "Most marine reptiles went extinct at the same time as dinosaurs, around 66 million years ago.",
                    es: "La mayoría de los reptiles marinos se extinguieron al mismo tiempo que los dinosaurios, hace unos 66 millones de años.",
                    de: "Die meisten Meeresreptilien starben zur gleichen Zeit wie die Dinosaurier aus, vor etwa 66 Millionen Jahren.",
                    nl: "De meeste zeereptielen stierven uit op hetzelfde moment als dinosaurussen, ongeveer 66 miljoen jaar geleden."
                }
            },
            {
                question: {
                    en: "Which marine reptiles are related to animals living today?",
                    es: "¿Qué reptiles marinos están relacionados con animales que viven hoy?",
                    de: "Welche Meeresreptilien sind mit heute lebenden Tieren verwandt?",
                    nl: "Welke zeereptielen zijn verwant aan dieren die vandaag leven?"
                },
                options: [
                    { en: "Sea turtles are related to ancient sea turtles", es: "Las tortugas marinas están relacionadas con tortugas marinas antiguas", de: "Meeresschildkröten sind mit alten Meeresschildkröten verwandt", nl: "Zeeschildpadden zijn verwant aan oude zeeschildpadden" },
                    { en: "All marine reptiles still live today", es: "Todos los reptiles marinos viven hoy", de: "Alle Meeresreptilien leben heute noch", nl: "Alle zeereptielen leven nog steeds vandaag" },
                    { en: "None are related to modern animals", es: "Ninguno está relacionado con animales modernos", de: "Keine sind mit modernen Tieren verwandt", nl: "Geen zijn verwant aan moderne dieren" },
                    { en: "They became birds", es: "Se convirtieron en aves", de: "Sie wurden zu Vögeln", nl: "Ze werden vogels" }
                ],
                correct: 0,
                explanation: {
                    en: "Modern sea turtles are descendants of ancient sea turtles that lived alongside marine reptiles during dinosaur times.",
                    es: "Las tortugas marinas modernas son descendientes de tortugas marinas antiguas que vivieron junto a reptiles marinos durante los tiempos de dinosaurios.",
                    de: "Moderne Meeresschildkröten sind Nachkommen alter Meeresschildkröten, die während der Dinosaurier-Zeit neben Meeresreptilien lebten.",
                    nl: "Moderne zeeschildpadden zijn afstammelingen van oude zeeschildpadden die tijdens dinosaurustijden naast zeereptielen leefden."
                }
            },
            {
                question: {
                    en: "What can we learn from studying ancient marine reptiles?",
                    es: "¿Qué podemos aprender estudiando reptiles marinos antiguos?",
                    de: "Was können wir vom Studium alter Meeresreptilien lernen?",
                    nl: "Wat kunnen we leren van het bestuderen van oude zeereptielen?"
                },
                options: [
                    { en: "How life adapted to living in the ocean", es: "Cómo la vida se adaptó a vivir en el océano", de: "Wie sich das Leben an das Leben im Ozean anpasste", nl: "Hoe leven zich aanpaste aan het leven in de oceaan" },
                    { en: "How to build better submarines", es: "Cómo construir mejores submarinos", de: "Wie man bessere U-Boote baut", nl: "Hoe je betere onderzeeërs bouwt" },
                    { en: "How to swim faster", es: "Cómo nadar más rápido", de: "Wie man schneller schwimmt", nl: "Hoe je sneller zwemt" },
                    { en: "How to breathe underwater", es: "Cómo respirar bajo el agua", de: "Wie man unter Wasser atmet", nl: "Hoe je onder water ademt" }
                ],
                correct: 0,
                explanation: {
                    en: "Studying ancient marine reptiles teaches us how different animals adapted to live in ocean environments.",
                    es: "Estudiar reptiles marinos antiguos nos enseña cómo diferentes animales se adaptaron para vivir en ambientes oceánicos.",
                    de: "Das Studium alter Meeresreptilien lehrt uns, wie sich verschiedene Tiere an das Leben in Meeresumgebungen anpassten.",
                    nl: "Het bestuderen van oude zeereptielen leert ons hoe verschillende dieren zich aanpasten om in oceaanomgevingen te leven."
                }
            },
            {
                question: {
                    en: "Why were the oceans during dinosaur times different from today?",
                    es: "¿Por qué eran diferentes los océanos durante los tiempos de dinosaurios de hoy?",
                    de: "Warum waren die Ozeane zur Dinosaurier-Zeit anders als heute?",
                    nl: "Waarom waren de oceanen tijdens dinosaurustijden anders dan vandaag?"
                },
                options: [
                    { en: "They were warmer and had different sea levels", es: "Eran más cálidos y tenían diferentes niveles del mar", de: "Sie waren wärmer und hatten andere Meeresspiegel", nl: "Ze waren warmer en hadden verschillende zeeniveaus" },
                    { en: "They were frozen solid", es: "Estaban completamente congelados", de: "Sie waren völlig gefroren", nl: "Ze waren helemaal bevroren" },
                    { en: "They were exactly the same", es: "Eran exactamente iguales", de: "Sie waren genau gleich", nl: "Ze waren precies hetzelfde" },
                    { en: "There were no oceans then", es: "No había océanos entonces", de: "Es gab damals keine Ozeane", nl: "Er waren toen geen oceanen" }
                ],
                correct: 0,
                explanation: {
                    en: "During dinosaur times, the oceans were much warmer and sea levels were higher, creating different marine environments.",
                    es: "Durante los tiempos de dinosaurios, los océanos eran mucho más cálidos y los niveles del mar eran más altos, creando ambientes marinos diferentes.",
                    de: "Während der Dinosaurier-Zeit waren die Ozeane viel wärmer und der Meeresspiegel war höher, was verschiedene Meeresumgebungen schuf.",
                    nl: "Tijdens dinosaurustijden waren de oceanen veel warmer en waren de zeeniveaus hoger, wat verschillende mariene omgevingen creëerde."
                }
            },
            {
                question: {
                    en: "What made ancient marine ecosystems so successful?",
                    es: "¿Qué hizo tan exitosos los ecosistemas marinos antiguos?",
                    de: "Was machte alte Meeresökosysteme so erfolgreich?",
                    nl: "Wat maakte oude mariene ecosystemen zo succesvol?"
                },
                options: [
                    { en: "Many different types of creatures filled different roles", es: "Muchos tipos diferentes de criaturas cumplieron roles diferentes", de: "Viele verschiedene Arten von Kreaturen erfüllten verschiedene Rollen", nl: "Veel verschillende soorten wezens vervulden verschillende rollen" },
                    { en: "There was only one type of creature", es: "Solo había un tipo de criatura", de: "Es gab nur eine Art von Kreatur", nl: "Er was slechts één soort wezen" },
                    { en: "The water was always calm", es: "El agua siempre estaba calmada", de: "Das Wasser war immer ruhig", nl: "Het water was altijd kalm" },
                    { en: "They didn't need food", es: "No necesitaban comida", de: "Sie brauchten kein Futter", nl: "Ze hadden geen voedsel nodig" }
                ],
                correct: 0,
                explanation: {
                    en: "Ancient marine ecosystems were successful because many different types of creatures filled different roles, creating a balanced food web.",
                    es: "Los ecosistemas marinos antiguos fueron exitosos porque muchos tipos diferentes de criaturas cumplieron roles diferentes, creando una red alimentaria equilibrada.",
                    de: "Alte Meeresökosysteme waren erfolgreich, weil viele verschiedene Arten von Kreaturen verschiedene Rollen erfüllten und ein ausgewogenes Nahrungsnetz schufen.",
                    nl: "Oude mariene ecosystemen waren succesvol omdat veel verschillende soorten wezens verschillende rollen vervulden, wat een gebalanceerd voedselweb creëerde."
                }
            },
            {
                question: {
                    en: "What was Shastasaurus famous for?",
                    es: "¿Por qué era famoso Shastasaurus?",
                    de: "Wofür war Shastasaurus berühmt?",
                    nl: "Waar was Shastasaurus beroemd om?"
                },
                options: [
                    { en: "Being the largest marine reptile ever found", es: "Ser el reptil marino más grande jamás encontrado", de: "Das größte jemals gefundene Meeresreptil zu sein", nl: "Het grootste zeereptiel ooit gevonden zijn" },
                    { en: "Having no teeth", es: "No tener dientes", de: "Keine Zähne haben", nl: "Geen tanden hebben" },
                    { en: "Living on land", es: "Vivir en tierra", de: "An Land leben", nl: "Op het land leven" },
                    { en: "Being the smallest sea creature", es: "Ser la criatura marina más pequeña", de: "Das kleinste Meereslebewesen sein", nl: "Het kleinste zeewezen zijn" }
                ],
                correct: 0,
                explanation: {
                    en: "Shastasaurus was the largest marine reptile ever discovered! This giant ichthyosaur grew up to 85 feet (26 meters) long - bigger than most modern whales. It lived 210 million years ago and cruised ancient seas like a prehistoric giant, feeding on squid and fish with its massive jaws.",
                    es: "¡Shastasaurus era el reptil marino más grande jamás descubierto! Este ictiosaurio gigante crecía hasta 85 pies (26 metros) de largo - más grande que la mayoría de las ballenas modernas. Vivió hace 210 millones de años y navegó mares antiguos como un gigante prehistórico, alimentándose de calamares y peces con sus mandíbulas masivas.",
                    de: "Shastasaurus war das größte jemals entdeckte Meeresreptil! Dieser riesige Ichthyosaurier wurde bis zu 85 Fuß (26 Meter) lang - größer als die meisten modernen Wale. Es lebte vor 210 Millionen Jahren und durchkreuzte alte Meere wie ein prähistorischer Riese, ernährte sich von Tintenfischen und Fischen mit seinen massiven Kiefern.",
                    nl: "Shastasaurus was het grootste zeereptiel ooit ontdekt! Deze gigantische ichthyosauriër werd tot 85 voet (26 meter) lang - groter dan de meeste moderne walvissen. Het leefde 210 miljoen jaar geleden en doorkruiste oude zeeën als een prehistorische reus, voedend met inktvis en vissen met zijn massieve kaken."
                }
            },
            {
                question: {
                    en: "How did Cryptoclidus catch its prey?",
                    es: "¿Cómo atrapaba su presa Cryptoclidus?",
                    de: "Wie fing Cryptoclidus seine Beute?",
                    nl: "Hoe ving Cryptoclidus zijn prooi?"
                },
                options: [
                    { en: "Used its extremely long neck like a fishing rod", es: "Usó su cuello extremadamente largo como caña de pescar", de: "Verwendete seinen extrem langen Hals wie eine Angelrute", nl: "Gebruikte zijn extreem lange nek als hengel" },
                    { en: "Jumped out of water", es: "Saltó fuera del agua", de: "Sprang aus dem Wasser", nl: "Sprong uit het water" },
                    { en: "Dug holes in the seafloor", es: "Cavó hoyos en el fondo marino", de: "Grub Löcher im Meeresboden", nl: "Groef gaten in de zeebodem" },
                    { en: "Spun in circles", es: "Giró en círculos", de: "Drehte sich im Kreis", nl: "Draaide in cirkels" }
                ],
                correct: 0,
                explanation: {
                    en: "Cryptoclidus had an incredibly long neck - longer than its body! It would keep its massive body hidden in deeper water while stretching its snake-like neck up toward schools of fish near the surface. Like an underwater periscope, it could strike quickly at unsuspecting prey while staying safely out of sight.",
                    es: "¡Cryptoclidus tenía un cuello increíblemente largo - más largo que su cuerpo! Mantenía su cuerpo masivo escondido en aguas más profundas mientras estiraba su cuello como serpiente hacia cardúmenes de peces cerca de la superficie. Como un periscopio submarino, podía atacar rápidamente a presas desprevenidas mientras se mantenía seguro fuera de vista.",
                    de: "Cryptoclidus hatte einen unglaublich langen Hals - länger als sein Körper! Es hielt seinen massiven Körper in tieferem Wasser versteckt, während es seinen schlangenartigen Hals zu Fischschwärmen nahe der Oberfläche streckte. Wie ein Unterwasser-Periskop konnte es schnell auf ahnungslose Beute zuschlagen, während es sicher außer Sichtweite blieb.",
                    nl: "Cryptoclidus had een ongelooflijk lange nek - langer dan zijn lichaam! Het hield zijn massieve lichaam verborgen in dieper water terwijl het zijn slangachtige nek uitstrekte naar scholen vissen nabij het oppervlak. Als een onderwater periscoop kon het snel toeslaan naar nietsvermoedende prooi terwijl het veilig uit het zicht bleef."
                }
            },
            {
                question: {
                    en: "What made Dunkleosteus one of the most fearsome ocean predators?",
                    es: "¿Qué hizo de Dunkleosteus uno de los depredadores oceánicos más temibles?",
                    de: "Was machte Dunkleosteus zu einem der furchtbarsten Ozeanraubtiere?",
                    nl: "Wat maakte Dunkleosteus een van de meest gevreesde oceaanroofdieren?"
                },
                options: [
                    { en: "Massive bone plates instead of teeth that could cut through anything", es: "Placas óseas masivas en lugar de dientes que podían cortar cualquier cosa", de: "Massive Knochenplatten statt Zähnen, die alles durchschneiden konnten", nl: "Massieve botplaten in plaats van tanden die door alles konden snijden" },
                    { en: "It could breathe fire underwater", es: "Podía respirar fuego bajo el agua", de: "Es konnte unter Wasser Feuer atmen", nl: "Het kon vuur ademen onder water" },
                    { en: "It was completely invisible", es: "Era completamente invisible", de: "Es war völlig unsichtbar", nl: "Het was volledig onzichtbaar" },
                    { en: "It could fly above the water", es: "Podía volar sobre el agua", de: "Es konnte über dem Wasser fliegen", nl: "Het kon boven het water vliegen" }
                ],
                correct: 0,
                explanation: {
                    en: "Dunkleosteus was terrifying because it had massive razor-sharp bone plates instead of teeth! These plates could slice through almost anything with a bite force stronger than a T. rex. This 33-foot armored fish was the apex predator of ancient seas 360 million years ago, crushing shells and bones with ease.",
                    es: "¡Dunkleosteus era aterrador porque tenía placas óseas masivas afiladas como navajas en lugar de dientes! Estas placas podían cortar casi cualquier cosa con una fuerza de mordida más fuerte que un T. rex. Este pez acorazado de 33 pies era el depredador supremo de mares antiguos hace 360 millones de años, aplastando conchas y huesos con facilidad.",
                    de: "Dunkleosteus war erschreckend, weil es massive rasiermesserscharfe Knochenplatten statt Zähnen hatte! Diese Platten konnten fast alles mit einer Bisskraft durchschneiden, die stärker als die eines T. rex war. Dieser 33 Fuß gepanzerte Fisch war der Apex-Raubtier alter Meere vor 360 Millionen Jahren und zerquetschte Muscheln und Knochen mit Leichtigkeit.",
                    nl: "Dunkleosteus was angstaanjagend omdat het massieve scheermes-scherpe botplaten had in plaats van tanden! Deze platen konden bijna alles doorsnijden met een bijtkracht sterker dan een T. rex. Deze 33-voet gepantserde vis was de toppredator van oude zeeën 360 miljoen jaar geleden, vergruizend schelpen en botten met gemak."
                }
            },
            {
                question: {
                    en: "How did Dakosaurus earn its nickname 'Godzilla'?",
                    es: "¿Cómo se ganó Dakosaurus su apodo 'Godzilla'?",
                    de: "Wie verdiente sich Dakosaurus seinen Spitznamen 'Godzilla'?",
                    nl: "Hoe verdiende Dakosaurus zijn bijnaam 'Godzilla'?"
                },
                options: [
                    { en: "It was a crocodile that became a marine super-predator", es: "Era un cocodrilo que se convirtió en un súper depredador marino", de: "Es war ein Krokodil, das zu einem marinen Super-Raubtier wurde", nl: "Het was een krokodil die een mariene superroofdier werd" },
                    { en: "It could breathe atomic breath", es: "Podía respirar aliento atómico", de: "Es konnte atomischen Atem atmen", nl: "Het kon atomische adem ademen" },
                    { en: "It was bigger than Godzilla", es: "Era más grande que Godzilla", de: "Es war größer als Godzilla", nl: "Het was groter dan Godzilla" },
                    { en: "It destroyed ancient cities", es: "Destruyó ciudades antiguas", de: "Es zerstörte antike Städte", nl: "Het vernietigde oude steden" }
                ],
                correct: 0,
                explanation: {
                    en: "Dakosaurus earned its 'Godzilla' nickname because it was a crocodile that adapted to become a terrifying ocean predator! Unlike normal crocodiles, it had flippers instead of legs, a shark-like tail, and massive jaws. This 16-foot 'sea crocodile' terrorized Jurassic seas 150 million years ago, showing that crocodiles could dominate any environment!",
                    es: "¡Dakosaurus se ganó su apodo 'Godzilla' porque era un cocodrilo que se adaptó para convertirse en un depredador oceánico aterrador! A diferencia de los cocodrilos normales, tenía aletas en lugar de patas, una cola como tiburón y mandíbulas masivas. ¡Este 'cocodrilo marino' de 16 pies aterrorizó mares jurásicos hace 150 millones de años, mostrando que los cocodrilos podían dominar cualquier ambiente!",
                    de: "Dakosaurus verdiente sich seinen 'Godzilla'-Spitznamen, weil es ein Krokodil war, das sich zu einem schrecklichen Ozean-Raubtier entwickelte! Im Gegensatz zu normalen Krokodilen hatte es Flossen statt Beine, einen haiähnlichen Schwanz und massive Kiefer. Dieses 16-Fuß 'Meereskrokodil' terrorisierte Jura-Meere vor 150 Millionen Jahren und zeigte, dass Krokodile jede Umgebung beherrschen konnten!",
                    nl: "Dakosaurus verdiende zijn 'Godzilla' bijnaam omdat het een krokodil was die zich aanpaste om een angstaanjagend oceaanroofdier te worden! In tegenstelling tot normale krokodillen had het vinnen in plaats van poten, een haaienstaart en massieve kaken. Deze 16-voet 'zeekrokodil' terroriseerde Jurassische zeeën 150 miljoen jaar geleden, tonend dat krokodillen elke omgeving konden domineren!"
                }
            },
            {
                question: {
                    en: "What was special about Archelon's shell?",
                    es: "¿Qué tenía especial el caparazón de Archelon?",
                    de: "Was war besonders an Archelons Panzer?",
                    nl: "Wat was speciaal aan Archelon's schild?"
                },
                options: [
                    { en: "It was mostly leather instead of hard shell", es: "Era principalmente cuero en lugar de caparazón duro", de: "Es bestand hauptsächlich aus Leder statt hartem Panzer", nl: "Het was vooral leer in plaats van hard schild" },
                    { en: "It could change colors like a chameleon", es: "Podía cambiar colores como un camaleón", de: "Es konnte Farben wechseln wie ein Chamäleon", nl: "Het kon van kleur veranderen zoals een kameleon" },
                    { en: "It was made of metal", es: "Estaba hecho de metal", de: "Es war aus Metall gemacht", nl: "Het was van metaal gemaakt" },
                    { en: "It could open and close like a door", es: "Podía abrir y cerrar como una puerta", de: "Es konnte sich wie eine Tür öffnen und schließen", nl: "Het kon open- en dichtgaan als een deur" }
                ],
                correct: 0,
                explanation: {
                    en: "Archelon was unique because its massive 12-foot shell was mostly made of leather-like skin instead of hard bone plates! This made it lighter and more flexible for swimming in ancient seas. As the largest sea turtle ever found, Archelon shows us that sometimes being flexible is better than being heavily armored.",
                    es: "¡Archelon era único porque su caparazón masivo de 12 pies estaba hecho principalmente de piel como cuero en lugar de placas óseas duras! Esto lo hacía más ligero y flexible para nadar en mares antiguos. Como la tortuga marina más grande jamás encontrada, Archelon nos muestra que a veces ser flexible es mejor que estar fuertemente blindado.",
                    de: "Archelon war einzigartig, weil sein massiver 12-Fuß-Panzer hauptsächlich aus lederartiger Haut statt harten Knochenplatten bestand! Das machte es leichter und flexibler zum Schwimmen in alten Meeren. Als die größte jemals gefundene Meeresschildkröte zeigt uns Archelon, dass es manchmal besser ist, flexibel zu sein als schwer gepanzert.",
                    nl: "Archelon was uniek omdat zijn massieve 12-voet schild vooral gemaakt was van leerachtige huid in plaats van harde botplaten! Dit maakte het lichter en flexibeler voor zwemmen in oude zeeën. Als de grootste zeeschildpad ooit gevonden, toont Archelon ons dat soms flexibel zijn beter is dan zwaar gepantserd zijn."
                }
            },
            {
                question: {
                    en: "How did Basilosaurus revolutionize ocean hunting?",
                    es: "¿Cómo revolucionó Basilosaurus la caza oceánica?",
                    de: "Wie revolutionierte Basilosaurus die Ozean-Jagd?",
                    nl: "Hoe revolutioneerde Basilosaurus oceaanjagen?"
                },
                options: [
                    { en: "It was the first whale to become a full-time ocean predator", es: "Fue la primera ballena en convertirse en un depredador oceánico de tiempo completo", de: "Es war der erste Wal, der ein Vollzeit-Ozean-Raubtier wurde", nl: "Het was de eerste walvis die een fulltime oceaanroofdier werd" },
                    { en: "It could swim backwards", es: "Podía nadar hacia atrás", de: "Es konnte rückwärts schwimmen", nl: "Het kon achteruit zwemmen" },
                    { en: "It hunted in packs of 100", es: "Cazaba en manadas de 100", de: "Es jagte in Rudeln von 100", nl: "Het joeg in groepen van 100" },
                    { en: "It only ate seaweed", es: "Solo comía algas marinas", de: "Es fraß nur Seetang", nl: "Het at alleen zeewier" }
                ],
                correct: 0,
                explanation: {
                    en: "Basilosaurus was revolutionary because it was the first whale to completely abandon land and become a full-time ocean super-predator! This 60-foot serpent-like whale had massive jaws filled with different types of teeth for tearing apart large prey. It shows the incredible transformation from land mammal to ocean ruler that happened 40 million years ago.",
                    es: "¡Basilosaurus fue revolucionario porque fue la primera ballena en abandonar completamente la tierra y convertirse en un súper depredador oceánico de tiempo completo! Esta ballena serpentina de 60 pies tenía mandíbulas masivas llenas de diferentes tipos de dientes para desgarrar presas grandes. Muestra la transformación increíble de mamífero terrestre a gobernante oceánico que ocurrió hace 40 millones de años.",
                    de: "Basilosaurus war revolutionär, weil es der erste Wal war, der das Land vollständig aufgab und ein Vollzeit-Ozean-Super-Raubtier wurde! Dieser 60-Fuß schlangenartige Wal hatte massive Kiefer voller verschiedener Zahntypen zum Zerreißen großer Beute. Es zeigt die unglaubliche Transformation vom Landssäugetier zum Ozeanherrscher, die vor 40 Millionen Jahren stattfand.",
                    nl: "Basilosaurus was revolutionair omdat het de eerste walvis was die het land volledig verliet en een fulltime oceaan superroofdier werd! Deze 60-voet slangachtige walvis had massieve kaken vol verschillende soorten tanden voor het verscheuren van grote prooi. Het toont de ongelooflijke transformatie van landzoogdier naar oceaanheerser die 40 miljoen jaar geleden plaatsvond."
                }
            },
            {
                question: {
                    en: "What made Leedsichthys one of the gentlest giants of ancient seas?",
                    es: "¿Qué hizo de Leedsichthys uno de los gigantes más gentiles de mares antiguos?",
                    de: "Was machte Leedsichthys zu einem der sanftesten Riesen alter Meere?",
                    nl: "Wat maakte Leedsichthys een van de zachtaardigste reuzen van oude zeeën?"
                },
                options: [
                    { en: "Despite being 55 feet long, it only ate tiny plankton", es: "A pesar de medir 55 pies de largo, solo comía plancton diminuto", de: "Obwohl es 55 Fuß lang war, fraß es nur winziges Plankton", nl: "Ondanks 55 voet lang te zijn, at het alleen kleine plankton" },
                    { en: "It could sing beautiful songs", es: "Podía cantar canciones hermosas", de: "Es konnte schöne Lieder singen", nl: "Het kon prachtige liedjes zingen" },
                    { en: "It helped smaller fish escape predators", es: "Ayudó a peces más pequeños a escapar de depredadores", de: "Es half kleineren Fischen, Raubtieren zu entkommen", nl: "Het hielp kleinere vissen ontsnappen aan roofdieren" },
                    { en: "It only swam during peaceful times", es: "Solo nadaba durante tiempos de paz", de: "Es schwamm nur während friedlicher Zeiten", nl: "Het zwom alleen tijdens vredige tijden" }
                ],
                correct: 0,
                explanation: {
                    en: "Leedsichthys was a gentle giant because despite being one of the largest bony fish ever at 55 feet long, it was a peaceful filter-feeder that only ate tiny plankton! Like modern blue whales, this massive fish would cruise through ancient seas with its mouth wide open, filtering enormous amounts of seawater to catch microscopic food. It proves that sometimes the biggest animals are the gentlest!",
                    es: "¡Leedsichthys era un gigante gentil porque a pesar de ser uno de los peces óseos más grandes con 55 pies de largo, era un filtrador pacífico que solo comía plancton diminuto! Como las ballenas azules modernas, este pez masivo navegaría por mares antiguos con su boca bien abierta, filtrando enormes cantidades de agua de mar para atrapar comida microscópica. ¡Prueba que a veces los animales más grandes son los más gentiles!",
                    de: "Leedsichthys war ein sanfter Riese, weil es trotz seiner 55 Fuß Länge als einer der größten Knochenfische ein friedlicher Filtrierer war, der nur winziges Plankton fraß! Wie moderne Blauwale würde dieser massive Fisch durch alte Meere mit weit geöffnetem Maul schwimmen und enorme Mengen Meerwasser filtern, um mikroskopische Nahrung zu fangen. Es beweist, dass die größten Tiere manchmal die sanftesten sind!",
                    nl: "Leedsichthys was een zachtaardige reus omdat ondanks het een van de grootste beenvissen ooit te zijn met 55 voet lang, het een vreedzame filtervoeder was die alleen kleine plankton at! Zoals moderne blauwe walvissen, zou deze massieve vis door oude zeeën zwemmen met zijn mond wijd open, enorme hoeveelheden zeewater filterend om microscopisch voedsel te vangen. Het bewijst dat soms de grootste dieren de zachtaardigste zijn!"
                }
            },
            {
                question: {
                    en: "How did Temnodontosaurus use its massive eyes?",
                    es: "¿Cómo usaba Temnodontosaurus sus ojos masivos?",
                    de: "Wie verwendete Temnodontosaurus seine massiven Augen?",
                    nl: "Hoe gebruikte Temnodontosaurus zijn massieve ogen?"
                },
                options: [
                    { en: "For hunting in the darkest depths of ancient oceans", es: "Para cazar en las profundidades más oscuras de océanos antiguos", de: "Zur Jagd in den dunkelsten Tiefen alter Ozeane", nl: "Voor jagen in de donkerste diepten van oude oceanen" },
                    { en: "To communicate with aliens", es: "Para comunicarse con alienígenas", de: "Um mit Außerirdischen zu kommunizieren", nl: "Om te communiceren met buitenaardse wezens" },
                    { en: "As mirrors to confuse prey", es: "Como espejos para confundir presas", de: "Als Spiegel, um Beute zu verwirren", nl: "Als spiegels om prooi te verwarren" },
                    { en: "To see the future", es: "Para ver el futuro", de: "Um die Zukunft zu sehen", nl: "Om de toekomst te zien" }
                ],
                correct: 0,
                explanation: {
                    en: "Temnodontosaurus had absolutely massive eyes - some of the largest eyes ever found in any animal! These dinner-plate sized eyes were perfect for hunting in the murky depths of ancient seas. With such incredible vision, this 40-foot ichthyosaur could spot squid and fish even in near-total darkness, making it a master of deep-sea hunting.",
                    es: "¡Temnodontosaurus tenía ojos absolutamente masivos - algunos de los ojos más grandes jamás encontrados en cualquier animal! Estos ojos del tamaño de un plato eran perfectos para cazar en las profundidades turbias de mares antiguos. Con tal visión increíble, este ictiosaurio de 40 pies podía detectar calamares y peces incluso en oscuridad casi total, convirtiéndolo en un maestro de la caza en aguas profundas.",
                    de: "Temnodontosaurus hatte absolut massive Augen - einige der größten Augen, die jemals bei einem Tier gefunden wurden! Diese tellergroßen Augen waren perfekt für die Jagd in den trüben Tiefen alter Meere. Mit so unglaublichem Sehvermögen konnte dieser 40-Fuß-Ichthyosaurier Tintenfische und Fische sogar in fast völliger Dunkelheit erkennen und machte ihn zu einem Meister der Tiefseejagd.",
                    nl: "Temnodontosaurus had absoluut massieve ogen - sommige van de grootste ogen ooit gevonden bij een dier! Deze bord-grote ogen waren perfect voor jagen in de troebele diepten van oude zeeën. Met zo'n ongelooflijk zicht kon deze 40-voet ichthyosauriër inktvis en vissen zelfs in bijna totale duisternis spotten, wat hem een meester maakte van diepzeejagen."
                }
            },
            {
                question: {
                    en: "What hunting strategy did Cretoxyrhina use to dominate Cretaceous seas?",
                    es: "¿Qué estrategia de caza usó Cretoxyrhina para dominar mares del Cretácico?",
                    de: "Welche Jagdstrategie verwendete Cretoxyrhina, um die Kreide-Meere zu beherrschen?",
                    nl: "Welke jagstrategie gebruikte Cretoxyrhina om Krijt-zeeën te domineren?"
                },
                options: [
                    { en: "Lightning-fast attacks with razor teeth that could bite marine reptiles in half", es: "Ataques ultrarrápidos con dientes como navajas que podían partir reptiles marinos por la mitad", de: "Blitzschnelle Angriffe mit rasiermesserscharfen Zähnen, die Meeresreptilien halbieren konnten", nl: "Bliksemsnelle aanvallen met scheermesscherpe tanden die zeereptielen doormidden konden bijten" },
                    { en: "It trapped prey in underwater caves", es: "Atrapaba presas en cuevas submarinas", de: "Es fing Beute in Unterwasserhöhlen", nl: "Het viel prooi in onderwatergrotten" },
                    { en: "It used echolocation to confuse prey", es: "Usaba ecolocalización para confundir presas", de: "Es verwendete Echoortung, um Beute zu verwirren", nl: "Het gebruikte echolocatie om prooi te verwarren" },
                    { en: "It hypnotized prey with colorful displays", es: "Hipnotizaba presas con exhibiciones coloridas", de: "Es hypnotisierte Beute mit farbenfrohen Darstellungen", nl: "Het hypnotiseerde prooi met kleurrijke vertoningen" }
                ],
                correct: 0,
                explanation: {
                    en: "Cretoxyrhina was nicknamed the 'Ginsu shark' because of its lightning-fast attacks and incredibly sharp teeth that could slice through anything! This 24-foot prehistoric shark was so powerful it regularly hunted and ate marine reptiles, including mosasaurs and plesiosaurs. Fossil evidence shows bite marks from Cretoxyrhina on many large sea creatures, proving it was the ultimate apex predator of Cretaceous seas!",
                    es: "¡Cretoxyrhina fue apodado el 'tiburón Ginsu' por sus ataques ultrarrápidos y dientes increíblemente afilados que podían cortar cualquier cosa! Este tiburón prehistórico de 24 pies era tan poderoso que cazaba y comía regularmente reptiles marinos, incluyendo mosasaurios y plesiosaurios. ¡La evidencia fósil muestra marcas de mordeduras de Cretoxyrhina en muchas criaturas marinas grandes, probando que era el depredador supremo definitivo de mares del Cretácico!",
                    de: "Cretoxyrhina wurde der 'Ginsu-Hai' genannt wegen seiner blitzschnellen Angriffe und unglaublich scharfen Zähne, die alles durchschneiden konnten! Dieser 24-Fuß prähistorische Hai war so mächtig, dass er regelmäßig Meeresreptilien jagte und fraß, einschließlich Mosasaurier und Plesiosaurier. Fossile Beweise zeigen Bissspuren von Cretoxyrhina an vielen großen Meereskreaturen und beweisen, dass er der ultimative Apex-Raubtier der Kreide-Meere war!",
                    nl: "Cretoxyrhina werd de 'Ginsu haai' genoemd vanwege zijn bliksemsnelle aanvallen en ongelooflijk scherpe tanden die door alles konden snijden! Deze 24-voet prehistorische haai was zo krachtig dat hij regelmatig zeereptielen joeg en at, inclusief mosasauriërs en plesiosauriërs. Fossiel bewijs toont bijtwonden van Cretoxyrhina op veel grote zeewezens, bewijs dat het de ultieme toppredator van Krijt-zeeën was!"
                }
            },
            {
                question: {
                    en: "How did Styxosaurus get its name from mythology?",
                    es: "¿Cómo obtuvo Styxosaurus su nombre de la mitología?",
                    de: "Wie erhielt Styxosaurus seinen Namen aus der Mythologie?",
                    nl: "Hoe kreeg Styxosaurus zijn naam uit de mythologie?"
                },
                options: [
                    { en: "Named after the River Styx because its long neck emerged from dark waters like a mythical river serpent", es: "Nombrado por el Río Estigia porque su cuello largo emergía de aguas oscuras como una serpiente de río mítica", de: "Benannt nach dem Fluss Styx, weil sein langer Hals aus dunklen Gewässern auftauchte wie eine mythische Flussschlange", nl: "Genoemd naar de rivier Styx omdat zijn lange nek opkwam uit donkere wateren als een mythische rivierslang" },
                    { en: "It could ferry souls across water", es: "Podía transportar almas a través del agua", de: "Es konnte Seelen über Wasser befördern", nl: "Het kon zielen over het water vervoeren" },
                    { en: "It lived in the underworld", es: "Vivía en el inframundo", de: "Es lebte in der Unterwelt", nl: "Het leefde in de onderwereld" },
                    { en: "It granted wishes to ancient sailors", es: "Concedía deseos a marineros antiguos", de: "Es erfüllte Wünsche antiker Seefahrer", nl: "Het verleende wensen aan oude zeelieden" }
                ],
                correct: 0,
                explanation: {
                    en: "Styxosaurus was named after the mythological River Styx because of its incredibly long neck that would emerge from dark ocean depths like a serpent from the underworld! With a neck 25 feet long - longer than most school buses - this marine reptile could strike from the depths while keeping its body hidden, appearing to ancient seas like a mythical river monster come to life.",
                    es: "¡Styxosaurus fue nombrado por el Río Estigia mitológico por su cuello increíblemente largo que emergería de profundidades oceánicas oscuras como una serpiente del inframundo! Con un cuello de 25 pies de largo - más largo que la mayoría de autobuses escolares - este reptil marino podía atacar desde las profundidades mientras mantenía su cuerpo oculto, apareciendo en mares antiguos como un monstruo de río mítico cobrado vida.",
                    de: "Styxosaurus wurde nach dem mythologischen Fluss Styx benannt wegen seines unglaublich langen Halses, der aus dunklen Ozeantiefen auftauchte wie eine Schlange aus der Unterwelt! Mit einem 25 Fuß langen Hals - länger als die meisten Schulbusse - konnte dieses Meeresreptil aus der Tiefe angreifen, während es seinen Körper verborgen hielt und in alten Meeren wie ein mythisches Flussmonster zum Leben erweckt erschien.",
                    nl: "Styxosaurus werd genoemd naar de mythologische rivier Styx vanwege zijn ongelooflijk lange nek die zou opkomen uit donkere oceaandiepten als een slang uit de onderwereld! Met een nek van 25 voet lang - langer dan de meeste schoolbussen - kon dit zeereptiel toeslaan vanuit de diepten terwijl het zijn lichaam verborgen hield, verschijnend in oude zeeën als een mythisch riviermonster tot leven gewekt."
                }
            },
            {
                question: {
                    en: "What made Tanystropheus one of the strangest marine hunters?",
                    es: "¿Qué hizo de Tanystropheus uno de los cazadores marinos más extraños?",
                    de: "Was machte Tanystropheus zu einem der sonderbarsten Meersjäger?",
                    nl: "Wat maakte Tanystropheus een van de vreemdste mariene jagers?"
                },
                options: [
                    { en: "It had a neck three times longer than its body", es: "Tenía un cuello tres veces más largo que su cuerpo", de: "Es hatte einen Hals, der dreimal länger war als sein Körper", nl: "Het had een nek drie keer langer dan zijn lichaam" },
                    { en: "It could walk on water", es: "Podía caminar sobre el agua", de: "Es konnte auf dem Wasser gehen", nl: "Het kon over water lopen" },
                    { en: "It had no head at all", es: "No tenía cabeza en absoluto", de: "Es hatte überhaupt keinen Kopf", nl: "Het had helemaal geen hoofd" },
                    { en: "It hunted by rolling like a wheel", es: "Cazaba rodando como una rueda", de: "Es jagte, indem es wie ein Rad rollte", nl: "Het joeg door te rollen als een wiel" }
                ],
                correct: 0,
                explanation: {
                    en: "Tanystropheus had one of the most bizarre body designs ever - a neck that was three times longer than the rest of its entire body! This 20-foot marine reptile would keep its body on shore or in shallow water while extending its incredibly long neck deep underwater to catch fish. It was like a living fishing rod with legs, showing that evolution can create some truly weird and wonderful solutions for survival!",
                    es: "¡Tanystropheus tenía uno de los diseños corporales más extraños - un cuello que era tres veces más largo que el resto de todo su cuerpo! Este reptil marino de 20 pies mantendría su cuerpo en la orilla o en agua poco profunda mientras extendía su cuello increíblemente largo profundamente bajo el agua para atrapar peces. ¡Era como una caña de pescar viviente con patas, mostrando que la evolución puede crear soluciones realmente extrañas y maravillosas para la supervivencia!",
                    de: "Tanystropheus hatte eines der bizarrsten Körperdesigns überhaupt - einen Hals, der dreimal länger war als der Rest seines gesamten Körpers! Dieses 20-Fuß-Meeresreptil hielt seinen Körper am Ufer oder in seichtem Wasser, während es seinen unglaublich langen Hals tief unter Wasser ausstreckte, um Fische zu fangen. Es war wie eine lebende Angelrute mit Beinen und zeigte, dass Evolution wirklich seltsame und wunderbare Lösungen für das Überleben schaffen kann!",
                    nl: "Tanystropheus had een van de meest bizarre lichaamsontwerpen ooit - een nek die drie keer langer was dan de rest van zijn hele lichaam! Dit 20-voet zeereptiel zou zijn lichaam op de kust of in ondiep water houden terwijl het zijn ongelooflijk lange nek diep onder water uitstak om vissen te vangen. Het was als een levende hengel met poten, tonend dat evolutie werkelijk vreemde en wonderlijke oplossingen kan creëren voor overleving!"
                }
            },
            {
                question: {
                    en: "How did Xiphactinus earn its reputation as the 'bulldog of the sea'?",
                    es: "¿Cómo se ganó Xiphactinus su reputación como el 'bulldog del mar'?",
                    de: "Wie verdiente sich Xiphactinus seinen Ruf als 'Bulldogge des Meeres'?",
                    nl: "Hoe verdiende Xiphactinus zijn reputatie als de 'bulldog van de zee'?"
                },
                options: [
                    { en: "It would swallow prey almost as large as itself whole", es: "Tragaba presas casi tan grandes como él enteras", de: "Es schluckte Beute, die fast so groß war wie es selbst, ganz herunter", nl: "Het zou prooi bijna zo groot als zichzelf heel doorslikken" },
                    { en: "It had a wrinkled face like a bulldog", es: "Tenía una cara arrugada como un bulldog", de: "Es hatte ein faltiges Gesicht wie eine Bulldogge", nl: "Het had een gerimpeld gezicht als een bulldog" },
                    { en: "It was very loyal to its family", es: "Era muy leal a su familia", de: "Es war sehr loyal zu seiner Familie", nl: "Het was heel trouw aan zijn familie" },
                    { en: "It barked underwater", es: "Ladraba bajo el agua", de: "Es bellte unter Wasser", nl: "Het blafte onder water" }
                ],
                correct: 0,
                explanation: {
                    en: "Xiphactinus earned its 'bulldog of the sea' nickname because it would attempt to swallow prey almost as large as itself! This 20-foot bony fish had incredible jaw strength and an expandable throat that let it gulp down massive prey whole. One famous fossil shows a Xiphactinus that died with a 6-foot fish still stuck in its throat - proving that sometimes being too ambitious at dinner can be deadly!",
                    es: "¡Xiphactinus se ganó su apodo 'bulldog del mar' porque intentaría tragar presas casi tan grandes como él! Este pez óseo de 20 pies tenía fuerza mandibular increíble y una garganta expandible que le permitía engullir presas masivas enteras. ¡Un fósil famoso muestra un Xiphactinus que murió con un pez de 6 pies todavía atorado en su garganta - probando que a veces ser demasiado ambicioso en la cena puede ser mortal!",
                    de: "Xiphactinus verdiente sich seinen Spitznamen 'Bulldogge des Meeres', weil es Beute zu verschlingen versuchte, die fast so groß war wie es selbst! Dieser 20-Fuß-Knochenfisch hatte unglaubliche Kieferkraft und eine dehnbare Kehle, die es ihm erlaubte, massive Beute ganz hinunterzuschlucken. Ein berühmtes Fossil zeigt einen Xiphactinus, der mit einem 6-Fuß-Fisch starb, der noch in seiner Kehle steckte - ein Beweis dafür, dass es manchmal tödlich sein kann, beim Abendessen zu ehrgeizig zu sein!",
                    nl: "Xiphactinus verdiende zijn 'bulldog van de zee' bijnaam omdat het prooi zou proberen door te slikken die bijna zo groot was als zichzelf! Deze 20-voet beenvis had ongelooflijke kaakkracht en een uitzetbare keel die het in staat stelde massieve prooi heel door te slikken. Een beroemd fossiel toont een Xiphactinus die stierf met een 6-voet vis nog vast in zijn keel - bewijs dat soms te ambitieus zijn bij het diner dodelijk kan zijn!"
                }
            },
            {
                question: {
                    en: "What can ancient marine reptiles teach us about ocean conservation today?",
                    es: "¿Qué pueden enseñarnos los reptiles marinos antiguos sobre la conservación oceánica hoy?",
                    de: "Was können uns alte Meeresreptilien über Ozeanschutz heute lehren?",
                    nl: "Wat kunnen oude zeereptielen ons leren over oceaanbescherming vandaag?"
                },
                options: [
                    { en: "Healthy oceans need diverse ecosystems with many different types of marine life", es: "Océanos saludables necesitan ecosistemas diversos con muchos tipos diferentes de vida marina", de: "Gesunde Ozeane brauchen vielfältige Ökosysteme mit vielen verschiedenen Arten von Meeresleben", nl: "Gezonde oceanen hebben diverse ecosystemen nodig met veel verschillende soorten zeeleven" },
                    { en: "Only the biggest animals matter in ocean ecosystems", es: "Solo los animales más grandes importan en ecosistemas oceánicos", de: "Nur die größten Tiere sind in Ozean-Ökosystemen wichtig", nl: "Alleen de grootste dieren zijn belangrijk in oceaanecosystemen" },
                    { en: "Ancient oceans were always perfect", es: "Los océanos antiguos siempre fueron perfectos", de: "Alte Ozeane waren immer perfekt", nl: "Oude oceanen waren altijd perfect" },
                    { en: "Marine life cannot adapt to changes", es: "La vida marina no puede adaptarse a cambios", de: "Meeresleben kann sich nicht an Veränderungen anpassen", nl: "Zeeleven kan zich niet aanpassen aan veranderingen" }
                ],
                correct: 0,
                explanation: {
                    en: "Ancient marine ecosystems teach us that healthy oceans need incredible diversity! From gentle filter-feeders to apex predators, from tiny plankton-eaters to massive sea reptiles, every creature played an important role. When mass extinctions removed key species, entire ocean ecosystems collapsed. This shows us that protecting marine biodiversity today - from the smallest fish to the largest whales - is crucial for keeping our oceans healthy and thriving!",
                    es: "¡Los ecosistemas marinos antiguos nos enseñan que océanos saludables necesitan diversidad increíble! Desde filtradores gentiles hasta depredadores supremos, desde comedores de plancton diminutos hasta reptiles marinos masivos, cada criatura jugaba un papel importante. Cuando extinciones masivas removieron especies clave, ecosistemas oceánicos enteros colapsaron. ¡Esto nos muestra que proteger la biodiversidad marina hoy - desde el pez más pequeño hasta las ballenas más grandes - es crucial para mantener nuestros océanos saludables y prósperos!",
                    de: "Alte Meeresökosysteme lehren uns, dass gesunde Ozeane unglaubliche Vielfalt brauchen! Von sanften Filtrierern bis zu Apex-Raubtieren, von winzigen Plankton-Fressern bis zu massiven Meeresreptilien spielte jede Kreatur eine wichtige Rolle. Als Massenaussterben wichtige Arten entfernten, brachen ganze Ozean-Ökosysteme zusammen. Das zeigt uns, dass der Schutz der marinen Biodiversität heute - vom kleinsten Fisch bis zu den größten Walen - entscheidend ist, um unsere Ozeane gesund und blühend zu halten!",
                    nl: "Oude mariene ecosystemen leren ons dat gezonde oceanen ongelooflijke diversiteit nodig hebben! Van zachte filtervoeders tot toppredators, van kleine plankton-eters tot massieve zeereptielen, elk wezen speelde een belangrijke rol. Wanneer massa-uitstervingen sleutelsoorten wegname, stortten hele oceaanecosystemen in. Dit toont ons dat het beschermen van mariene biodiversiteit vandaag - van de kleinste vis tot de grootste walvissen - cruciaal is voor het gezond en bloeiend houden van onze oceanen!"
                }
            },
            {
                question: {
                    en: "How do ancient marine reptile fossils help us understand climate change?",
                    es: "¿Cómo nos ayudan los fósiles de reptiles marinos antiguos a entender el cambio climático?",
                    de: "Wie helfen uns alte Meeresreptilien-Fossilien, den Klimawandel zu verstehen?",
                    nl: "Hoe helpen oude zeereptiel fossielen ons klimaatverandering begrijpen?"
                },
                options: [
                    { en: "They show how marine life responds to changing ocean temperatures and sea levels", es: "Muestran cómo responde la vida marina a temperaturas oceánicas y niveles del mar cambiantes", de: "Sie zeigen, wie Meeresleben auf sich ändernde Ozeantemperaturen und Meeresspiegel reagiert", nl: "Ze tonen hoe zeeleven reageert op veranderende oceaantemperaturen en zeeniveaus" },
                    { en: "They predict exactly what will happen tomorrow", es: "Predicen exactamente qué pasará mañana", de: "Sie sagen genau vorher, was morgen passieren wird", nl: "Ze voorspellen precies wat er morgen zal gebeuren" },
                    { en: "They prove climate never changes", es: "Prueban que el clima nunca cambia", de: "Sie beweisen, dass sich das Klima nie ändert", nl: "Ze bewijzen dat het klimaat nooit verandert" },
                    { en: "They only tell us about the past", es: "Solo nos hablan del pasado", de: "Sie erzählen uns nur von der Vergangenheit", nl: "Ze vertellen ons alleen over het verleden" }
                ],
                correct: 0,
                explanation: {
                    en: "Ancient marine reptile fossils are like time capsules that show us how ocean life responded to dramatic climate changes in the past! By studying which species thrived, migrated, or went extinct when sea levels and temperatures changed millions of years ago, scientists can better understand how modern marine ecosystems might respond to current climate change. These ancient lessons help us predict and prepare for the challenges our oceans face today!",
                    es: "¡Los fósiles de reptiles marinos antiguos son como cápsulas del tiempo que nos muestran cómo respondió la vida oceánica a cambios climáticos dramáticos en el pasado! Al estudiar qué especies prosperaron, migraron o se extinguieron cuando los niveles del mar y temperaturas cambiaron hace millones de años, los científicos pueden entender mejor cómo los ecosistemas marinos modernos podrían responder al cambio climático actual. ¡Estas lecciones antiguas nos ayudan a predecir y prepararnos para los desafíos que enfrentan nuestros océanos hoy!",
                    de: "Alte Meeresreptilien-Fossilien sind wie Zeitkapseln, die uns zeigen, wie das Ozean-Leben auf dramatische Klimaänderungen in der Vergangenheit reagierte! Durch das Studium, welche Arten gediehen, migrierten oder ausstarben, als sich Meeresspiegel und Temperaturen vor Millionen von Jahren änderten, können Wissenschaftler besser verstehen, wie moderne Meeresökosysteme auf den aktuellen Klimawandel reagieren könnten. Diese alten Lektionen helfen uns, die Herausforderungen vorherzusagen und uns darauf vorzubereiten, denen unsere Ozeane heute gegenüberstehen!",
                    nl: "Oude zeereptiel fossielen zijn als tijdcapsules die ons tonen hoe oceaanleven reageerde op dramatische klimaatveranderingen in het verleden! Door te bestuderen welke soorten floreerden, migreerden, of uitstierven toen zeeniveaus en temperaturen miljoenen jaren geleden veranderden, kunnen wetenschappers beter begrijpen hoe moderne mariene ecosystemen zouden kunnen reageren op huidige klimaatverandering. Deze oude lessen helpen ons voorspellen en voorbereiden op de uitdagingen waarmee onze oceanen vandaag geconfronteerd worden!"
                }
            },
            {
                question: {
                    en: "What's the most amazing thing about the diversity of ancient ocean life?",
                    es: "¿Qué es lo más increíble sobre la diversidad de vida oceánica antigua?",
                    de: "Was ist das Erstaunlichste an der Vielfalt des alten Ozeanlebens?",
                    nl: "Wat is het meest verbazingwekkende aan de diversiteit van het oude oceaanleven?"
                },
                options: [
                    { en: "Every imaginable way of living in the ocean was tried and mastered", es: "Cada forma imaginable de vivir en el océano fue probada y dominada", de: "Jede erdenkliche Art, im Ozean zu leben, wurde ausprobiert und gemeistert", nl: "Elke denkbare manier van leven in de oceaan werd geprobeerd en gemeesterd" },
                    { en: "All ancient sea creatures looked exactly the same", es: "Todas las criaturas marinas antiguas se veían exactamente iguales", de: "Alle alten Meereskreaturen sahen genau gleich aus", nl: "Alle oude zeewezens zagen er precies hetzelfde uit" },
                    { en: "Only one type of animal lived in ancient seas", es: "Solo un tipo de animal vivía en mares antiguos", de: "Nur eine Art von Tier lebte in alten Meeren", nl: "Slechts één soort dier leefde in oude zeeën" },
                    { en: "Ancient oceans were always empty", es: "Los océanos antiguos siempre estuvieron vacíos", de: "Alte Ozeane waren immer leer", nl: "Oude oceanen waren altijd leeg" }
                ],
                correct: 0,
                explanation: {
                    en: "The most amazing thing about ancient ocean life is that every imaginable way of living in the sea was tried and mastered! There were giants that filtered plankton, serpents with necks longer than their bodies, armored fish with bone-crushing jaws, whales that started as land mammals, reptiles that became ocean rulers, and countless other incredible adaptations. This shows us that life is endlessly creative and will find a way to thrive in every possible ocean niche!",
                    es: "¡Lo más increíble sobre la vida oceánica antigua es que cada forma imaginable de vivir en el mar fue probada y dominada! Había gigantes que filtraban plancton, serpientes con cuellos más largos que sus cuerpos, peces acorazados con mandíbulas que trituraban huesos, ballenas que empezaron como mamíferos terrestres, reptiles que se convirtieron en gobernantes oceánicos, y innumerables otras adaptaciones increíbles. ¡Esto nos muestra que la vida es infinitamente creativa y encontrará una manera de prosperar en cada nicho oceánico posible!",
                    de: "Das Erstaunlichste am alten Ozean-Leben ist, dass jede erdenkliche Art, im Meer zu leben, ausprobiert und gemeistert wurde! Es gab Riesen, die Plankton filtrierten, Schlangen mit Hälsen länger als ihre Körper, gepanzerte Fische mit knochenzermahlenden Kiefern, Wale, die als Landssäugetiere begannen, Reptilien, die zu Ozeanherrschern wurden, und unzählige andere unglaubliche Anpassungen. Das zeigt uns, dass Leben endlos kreativ ist und einen Weg finden wird, in jeder möglichen Ozean-Nische zu gedeihen!",
                    nl: "Het meest verbazingwekkende aan het oude oceaanleven is dat elke denkbare manier van leven in de zee werd geprobeerd en gemeesterd! Er waren reuzen die plankton filterden, slangen met nekken langer dan hun lichamen, gepantserde vissen met botvergruizende kaken, walvissen die begonnen als landzoogdieren, reptielen die oceaanheerser werden, en talloze andere ongelooflijke aanpassingen. Dit toont ons dat het leven eindeloos creatief is en een manier zal vinden om te gedijen in elke mogelijke oceaanniche!"
                }
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/dinosaurs', level6);
    }
})();