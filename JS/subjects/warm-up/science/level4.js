(function() {
    const level4 = {
        name: {
            en: "Animals and Habitats",
            es: "Animales y Hábitats",
            de: "Tiere und Lebensräume",
            nl: "Dieren en Leefgebieden"
        },
        questions: [
            {
                question: {
                    en: "What do we call animals that are active during the day?",
                    es: "¿Cómo llamamos a los animales que están activos durante el día?",
                    de: "Wie nennen wir Tiere, die tagsüber aktiv sind?",
                    nl: "Hoe noemen we dieren die overdag actief zijn?"
                },
                options: [
                    { en: "Diurnal", es: "Diurnos", de: "Tagaktiv", nl: "Dagactief" },
                    { en: "Nocturnal", es: "Nocturnos", de: "Nachtaktiv", nl: "Nachtactief" },
                    { en: "Crepuscular", es: "Crepusculares", de: "Dämmerungsaktiv", nl: "Schemering actief" },
                    { en: "Hibernating", es: "Hibernando", de: "Winterschlaf haltend", nl: "Winterslapen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call animals that are active during the night?",
                    es: "¿Cómo llamamos a los animales que están activos durante la noche?",
                    de: "Wie nennen wir Tiere, die nachts aktiv sind?",
                    nl: "Hoe noemen we dieren die 's nachts actief zijn?"
                },
                options: [
                    { en: "Nocturnal", es: "Nocturnos", de: "Nachtaktiv", nl: "Nachtactief" },
                    { en: "Diurnal", es: "Diurnos", de: "Tagaktiv", nl: "Dagactief" },
                    { en: "Seasonal", es: "Estacionales", de: "Saisonal", nl: "Seizoensgebonden" },
                    { en: "Migratory", es: "Migratorios", de: "Wandernde", nl: "Migratie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call animals that have a backbone?",
                    es: "¿Cómo llamamos a los animales que tienen columna vertebral?",
                    de: "Wie nennen wir Tiere, die ein Rückgrat haben?",
                    nl: "Hoe noemen we dieren die een ruggengraat hebben?"
                },
                options: [
                    { en: "Vertebrates", es: "Vertebrados", de: "Wirbeltiere", nl: "Gewervelde dieren" },
                    { en: "Invertebrates", es: "Invertebrados", de: "Wirbellose", nl: "Ongewervelde dieren" },
                    { en: "Mammals", es: "Mamíferos", de: "Säugetiere", nl: "Zoogdieren" },
                    { en: "Reptiles", es: "Reptiles", de: "Reptilien", nl: "Reptielen" }
                ],
                correct: 0,
                explanation: {
                    en: "Vertebrates are animals with a backbone or spine! This includes humans, dogs, cats, birds, fish, snakes, and frogs. The backbone protects their spinal cord and gives their body structure. About 97% of all animal species are actually invertebrates (without backbones) like insects and spiders!",
                    es: "¡Los vertebrados son animales con columna vertebral o espina dorsal! Esto incluye humanos, perros, gatos, aves, peces, serpientes y ranas. La columna vertebral protege su médula espinal y le da estructura a su cuerpo. ¡Aproximadamente el 97% de todas las especies animales son en realidad invertebrados (sin columna vertebral) como insectos y arañas!",
                    de: "Wirbeltiere sind Tiere mit einem Rückgrat oder einer Wirbelsäule! Dazu gehören Menschen, Hunde, Katzen, Vögel, Fische, Schlangen und Frösche. Das Rückgrat schützt ihr Rückenmark und gibt ihrem Körper Struktur. Etwa 97% aller Tierarten sind tatsächlich Wirbellose (ohne Rückgrat) wie Insekten und Spinnen!",
                    nl: "Gewervelde dieren zijn dieren met een ruggengraat of wervelkolom! Dit omvat mensen, honden, katten, vogels, vissen, slangen en kikkers. De ruggengraat beschermt hun ruggenmerg en geeft hun lichaam structuur. Ongeveer 97% van alle diersoorten zijn eigenlijk ongewervelde dieren (zonder ruggengraat) zoals insecten en spinnen!"
                }
            },
            {
                question: {
                    en: "What do we call animals without a backbone?",
                    es: "¿Cómo llamamos a los animales sin columna vertebral?",
                    de: "Wie nennen wir Tiere ohne Rückgrat?",
                    nl: "Hoe noemen we dieren zonder ruggengraat?"
                },
                options: [
                    { en: "Invertebrates", es: "Invertebrados", de: "Wirbellose", nl: "Ongewervelde dieren" },
                    { en: "Vertebrates", es: "Vertebrados", de: "Wirbeltiere", nl: "Gewervelde dieren" },
                    { en: "Fish", es: "Peces", de: "Fische", nl: "Vissen" },
                    { en: "Birds", es: "Aves", de: "Vögel", nl: "Vogels" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do mammals feed their babies?",
                    es: "¿Con qué alimentan los mamíferos a sus bebés?",
                    de: "Womit füttern Säugetiere ihre Babys?",
                    nl: "Waarmee voeden zoogdieren hun baby's?"
                },
                options: [
                    { en: "Milk", es: "Leche", de: "Milch", nl: "Melk" },
                    { en: "Seeds", es: "Semillas", de: "Samen", nl: "Zaden" },
                    { en: "Nectar", es: "Néctar", de: "Nektar", nl: "Nectar" },
                    { en: "Fish", es: "Peces", de: "Fische", nl: "Vis" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What covers the body of birds?",
                    es: "¿Qué cubre el cuerpo de las aves?",
                    de: "Was bedeckt den Körper von Vögeln?",
                    nl: "Wat bedekt het lichaam van vogels?"
                },
                options: [
                    { en: "Feathers", es: "Plumas", de: "Federn", nl: "Veren" },
                    { en: "Fur", es: "Pelaje", de: "Fell", nl: "Vacht" },
                    { en: "Scales", es: "Escamas", de: "Schuppen", nl: "Schubben" },
                    { en: "Skin", es: "Piel", de: "Haut", nl: "Huid" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How do fish breathe underwater?",
                    es: "¿Cómo respiran los peces bajo el agua?",
                    de: "Wie atmen Fische unter Wasser?",
                    nl: "Hoe ademen vissen onder water?"
                },
                options: [
                    { en: "Through gills", es: "A través de branquias", de: "Durch Kiemen", nl: "Door kieuwen" },
                    { en: "Through lungs", es: "A través de pulmones", de: "Durch Lungen", nl: "Door longen" },
                    { en: "Through their skin", es: "A través de su piel", de: "Durch ihre Haut", nl: "Door hun huid" },
                    { en: "Through their mouth", es: "A través de su boca", de: "Durch ihren Mund", nl: "Door hun mond" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What type of animals are frogs and toads?",
                    es: "¿Qué tipo de animales son las ranas y los sapos?",
                    de: "Was für Tiere sind Frösche und Kröten?",
                    nl: "Wat voor dieren zijn kikkers en padden?"
                },
                options: [
                    { en: "Amphibians", es: "Anfibios", de: "Amphibien", nl: "Amfibieën" },
                    { en: "Reptiles", es: "Reptiles", de: "Reptilien", nl: "Reptielen" },
                    { en: "Fish", es: "Peces", de: "Fische", nl: "Vissen" },
                    { en: "Mammals", es: "Mamíferos", de: "Säugetiere", nl: "Zoogdieren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What covers the body of reptiles like snakes and lizards?",
                    es: "¿Qué cubre el cuerpo de reptiles como serpientes y lagartos?",
                    de: "Was bedeckt den Körper von Reptilien wie Schlangen und Echsen?",
                    nl: "Wat bedekt het lichaam van reptielen zoals slangen en hagedissen?"
                },
                options: [
                    { en: "Scales", es: "Escamas", de: "Schuppen", nl: "Schubben" },
                    { en: "Feathers", es: "Plumas", de: "Federn", nl: "Veren" },
                    { en: "Fur", es: "Pelaje", de: "Fell", nl: "Vacht" },
                    { en: "Shells", es: "Caparazones", de: "Schalen", nl: "Schelpen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Where do polar bears live?",
                    es: "¿Dónde viven los osos polares?",
                    de: "Wo leben Eisbären?",
                    nl: "Waar leven ijsberen?"
                },
                options: [
                    { en: "Arctic (cold, icy places)", es: "Ártico (lugares fríos y helados)", de: "Arktis (kalte, eisige Orte)", nl: "Arctisch (koude, ijzige plaatsen)" },
                    { en: "Desert", es: "Desierto", de: "Wüste", nl: "Woestijn" },
                    { en: "Tropical forest", es: "Bosque tropical", de: "Tropischer Wald", nl: "Tropisch bos" },
                    { en: "Ocean", es: "Océano", de: "Ozean", nl: "Oceaan" }
                ],
                correct: 0
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
                    { en: "Arctic", es: "Ártico", de: "Arktis", nl: "Arctisch" },
                    { en: "Ocean", es: "Océano", de: "Ozean", nl: "Oceaan" },
                    { en: "Mountain tops", es: "Cimas de montañas", de: "Berggipfel", nl: "Bergtoppen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Where do fish live?",
                    es: "¿Dónde viven los peces?",
                    de: "Wo leben Fische?",
                    nl: "Waar leven vissen?"
                },
                options: [
                    { en: "In water (oceans, rivers, lakes)", es: "En el agua (océanos, ríos, lagos)", de: "Im Wasser (Ozeane, Flüsse, Seen)", nl: "In water (oceanen, rivieren, meren)" },
                    { en: "In trees", es: "En árboles", de: "In Bäumen", nl: "In bomen" },
                    { en: "Underground", es: "Bajo tierra", de: "Unterirdisch", nl: "Ondergronds" },
                    { en: "In the sky", es: "En el cielo", de: "Im Himmel", nl: "In de lucht" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do monkeys use their tails for?",
                    es: "¿Para qué usan los monos sus colas?",
                    de: "Wofür benutzen Affen ihre Schwänze?",
                    nl: "Waarvoor gebruiken apen hun staarten?"
                },
                options: [
                    { en: "To help them balance and swing", es: "Para ayudarles a equilibrarse y balancearse", de: "Um ihnen beim Gleichgewicht und Schwingen zu helfen", nl: "Om hen te helpen balanceren en zwaaien" },
                    { en: "To dig for food", es: "Para cavar comida", de: "Um nach Nahrung zu graben", nl: "Om naar voedsel te graven" },
                    { en: "To make sounds", es: "Para hacer sonidos", de: "Um Geräusche zu machen", nl: "Om geluiden te maken" },
                    { en: "To swim faster", es: "Para nadar más rápido", de: "Um schneller zu schwimmen", nl: "Om sneller te zwemmen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How do elephants use their trunks?",
                    es: "¿Cómo usan los elefantes sus trompas?",
                    de: "Wie benutzen Elefanten ihre Rüssel?",
                    nl: "Hoe gebruiken olifanten hun slurf?"
                },
                options: [
                    { en: "To grab food, water, and objects", es: "Para agarrar comida, agua y objetos", de: "Um Nahrung, Wasser und Gegenstände zu greifen", nl: "Om voedsel, water en voorwerpen te pakken" },
                    { en: "Only to make noise", es: "Solo para hacer ruido", de: "Nur um Lärm zu machen", nl: "Alleen om geluid te maken" },
                    { en: "To fly", es: "Para volar", de: "Zum Fliegen", nl: "Om te vliegen" },
                    { en: "To change colors", es: "Para cambiar colores", de: "Um Farben zu ändern", nl: "Om van kleur te veranderen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What special ability do chameleons have?",
                    es: "¿Qué habilidad especial tienen los camaleones?",
                    de: "Welche besondere Fähigkeit haben Chamäleons?",
                    nl: "Welke speciale eigenschap hebben kameleons?"
                },
                options: [
                    { en: "They can change colors", es: "Pueden cambiar de colores", de: "Sie können ihre Farben ändern", nl: "Ze kunnen van kleur veranderen" },
                    { en: "They can fly", es: "Pueden volar", de: "Sie können fliegen", nl: "Ze kunnen vliegen" },
                    { en: "They can swim very fast", es: "Pueden nadar muy rápido", de: "Sie können sehr schnell schwimmen", nl: "Ze kunnen heel snel zwemmen" },
                    { en: "They can grow very big", es: "Pueden crecer muy grandes", de: "Sie können sehr groß werden", nl: "Ze kunnen heel groot worden" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do bats use to navigate in the dark?",
                    es: "¿Qué usan los murciélagos para navegar en la oscuridad?",
                    de: "Was benutzen Fledermäuse zur Navigation im Dunkeln?",
                    nl: "Wat gebruiken vleermuizen om te navigeren in het donker?"
                },
                options: [
                    { en: "Sound waves (echolocation)", es: "Ondas sonoras (ecolocalización)", de: "Schallwellen (Echolokation)", nl: "Geluidsgolven (echolocatie)" },
                    { en: "Bright lights", es: "Luces brillantes", de: "Helle Lichter", nl: "Felle lichten" },
                    { en: "Smell", es: "Olor", de: "Geruch", nl: "Geur" },
                    { en: "Touch", es: "Tacto", de: "Berührung", nl: "Aanraking" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call animals that eat both plants and meat?",
                    es: "¿Cómo llamamos a los animales que comen plantas y carne?",
                    de: "Wie nennen wir Tiere, die sowohl Pflanzen als auch Fleisch fressen?",
                    nl: "Hoe noemen we dieren die zowel planten als vlees eten?"
                },
                options: [
                    { en: "Omnivores", es: "Omnívoros", de: "Allesfresser", nl: "Omnivoren" },
                    { en: "Carnivores", es: "Carnívoros", de: "Fleischfresser", nl: "Carnivoren" },
                    { en: "Herbivores", es: "Herbívoros", de: "Pflanzenfresser", nl: "Herbivoren" },
                    { en: "Insectivores", es: "Insectívoros", de: "Insektenfresser", nl: "Insectivoren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Which animals migrate long distances?",
                    es: "¿Qué animales migran largas distancias?",
                    de: "Welche Tiere wandern über große Entfernungen?",
                    nl: "Welke dieren migreren over lange afstanden?"
                },
                options: [
                    { en: "Birds, whales, and butterflies", es: "Aves, ballenas y mariposas", de: "Vögel, Wale und Schmetterlinge", nl: "Vogels, walvissen en vlinders" },
                    { en: "Only fish", es: "Solo peces", de: "Nur Fische", nl: "Alleen vissen" },
                    { en: "Only mammals", es: "Solo mamíferos", de: "Nur Säugetiere", nl: "Alleen zoogdieren" },
                    { en: "Only insects", es: "Solo insectos", de: "Nur Insekten", nl: "Alleen insecten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Why do some animals hibernate in winter?",
                    es: "¿Por qué algunos animales hibernan en invierno?",
                    de: "Warum halten manche Tiere Winterschlaf?",
                    nl: "Waarom houden sommige dieren winterslaap?"
                },
                options: [
                    { en: "To save energy when food is scarce", es: "Para ahorrar energía cuando la comida escasea", de: "Um Energie zu sparen, wenn Nahrung knapp ist", nl: "Om energie te besparen als voedsel schaars is" },
                    { en: "Because they are lazy", es: "Porque son perezosos", de: "Weil sie faul sind", nl: "Omdat ze lui zijn" },
                    { en: "To grow bigger", es: "Para crecer más", de: "Um größer zu werden", nl: "Om groter te worden" },
                    { en: "To change colors", es: "Para cambiar colores", de: "Um Farben zu ändern", nl: "Om van kleur te veranderen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call a group of lions?",
                    es: "¿Cómo se llama un grupo de leones?",
                    de: "Wie nennt man eine Gruppe von Löwen?",
                    nl: "Hoe noem je een groep leeuwen?"
                },
                options: [
                    { en: "A pride", es: "Una manada", de: "Ein Rudel", nl: "Een troep" },
                    { en: "A herd", es: "Un rebaño", de: "Eine Herde", nl: "Een kudde" },
                    { en: "A flock", es: "Una bandada", de: "Ein Schwarm", nl: "Een zwerm" },
                    { en: "A school", es: "Un cardumen", de: "Ein Schwarm", nl: "Een school" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call a group of fish swimming together?",
                    es: "¿Cómo se llama un grupo de peces nadando juntos?",
                    de: "Wie nennt man eine Gruppe von Fischen, die zusammen schwimmen?",
                    nl: "Hoe noem je een groep vissen die samen zwemmen?"
                },
                options: [
                    { en: "A school", es: "Un cardumen", de: "Ein Schwarm", nl: "Een school" },
                    { en: "A pride", es: "Una manada", de: "Ein Rudel", nl: "Een troep" },
                    { en: "A herd", es: "Un rebaño", de: "Eine Herde", nl: "Een kudde" },
                    { en: "A pack", es: "Una jauría", de: "Ein Rudel", nl: "Een roedel" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call a group of wolves?",
                    es: "¿Cómo se llama un grupo de lobos?",
                    de: "Wie nennt man eine Gruppe von Wölfen?",
                    nl: "Hoe noem je een groep wolven?"
                },
                options: [
                    { en: "A pack", es: "Una jauría", de: "Ein Rudel", nl: "Een roedel" },
                    { en: "A flock", es: "Una bandada", de: "Ein Schwarm", nl: "Een zwerm" },
                    { en: "A school", es: "Un cardumen", de: "Ein Schwarm", nl: "Een school" },
                    { en: "A colony", es: "Una colonia", de: "Eine Kolonie", nl: "Een kolonie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How do penguins keep their eggs warm?",
                    es: "¿Cómo mantienen los pingüinos sus huevos calientes?",
                    de: "Wie halten Pinguine ihre Eier warm?",
                    nl: "Hoe houden pinguïns hun eieren warm?"
                },
                options: [
                    { en: "They sit on them", es: "Se sientan sobre ellos", de: "Sie setzen sich darauf", nl: "Ze gaan erop zitten" },
                    { en: "They bury them in sand", es: "Los entierran en arena", de: "Sie vergraben sie im Sand", nl: "Ze begraven ze in zand" },
                    { en: "They put them in trees", es: "Los ponen en árboles", de: "Sie legen sie in Bäume", nl: "Ze leggen ze in bomen" },
                    { en: "They leave them in the sun", es: "Los dejan al sol", de: "Sie lassen sie in der Sonne", nl: "Ze laten ze in de zon" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do giraffes use their long necks for?",
                    es: "¿Para qué usan las jirafas sus cuellos largos?",
                    de: "Wofür benutzen Giraffen ihre langen Hälse?",
                    nl: "Waarvoor gebruiken giraffen hun lange nekken?"
                },
                options: [
                    { en: "To reach high leaves on trees", es: "Para alcanzar hojas altas en los árboles", de: "Um hohe Blätter an Bäumen zu erreichen", nl: "Om hoge bladeren in bomen te bereiken" },
                    { en: "To swim better", es: "Para nadar mejor", de: "Um besser zu schwimmen", nl: "Om beter te zwemmen" },
                    { en: "To run faster", es: "Para correr más rápido", de: "Um schneller zu laufen", nl: "Om sneller te rennen" },
                    { en: "To dig holes", es: "Para cavar hoyos", de: "Um Löcher zu graben", nl: "Om gaten te graven" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What helps ducks stay dry in water?",
                    es: "¿Qué ayuda a los patos a mantenerse secos en el agua?",
                    de: "Was hilft Enten dabei, im Wasser trocken zu bleiben?",
                    nl: "Wat helpt eenden droog te blijven in water?"
                },
                options: [
                    { en: "Waterproof feathers", es: "Plumas impermeables", de: "Wasserdichte Federn", nl: "Waterdichte veren" },
                    { en: "Thick skin", es: "Piel gruesa", de: "Dicke Haut", nl: "Dikke huid" },
                    { en: "Extra fur", es: "Pelaje extra", de: "Extra Fell", nl: "Extra vacht" },
                    { en: "Special scales", es: "Escamas especiales", de: "Besondere Schuppen", nl: "Speciale schubben" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Where do squirrels store nuts for winter?",
                    es: "¿Dónde guardan las ardillas las nueces para el invierno?",
                    de: "Wo verstecken Eichhörnchen Nüsse für den Winter?",
                    nl: "Waar bewaren eekhoorns noten voor de winter?"
                },
                options: [
                    { en: "In holes in trees and underground", es: "En hoyos en árboles y bajo tierra", de: "In Löchern in Bäumen und unterirdisch", nl: "In gaten in bomen en ondergronds" },
                    { en: "In their stomachs", es: "En sus estómagos", de: "In ihren Mägen", nl: "In hun magen" },
                    { en: "In water", es: "En agua", de: "Im Wasser", nl: "In water" },
                    { en: "In the sky", es: "En el cielo", de: "Im Himmel", nl: "In de lucht" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do spiders use to catch their prey?",
                    es: "¿Qué usan las arañas para atrapar a su presa?",
                    de: "Was benutzen Spinnen, um ihre Beute zu fangen?",
                    nl: "Wat gebruiken spinnen om hun prooi te vangen?"
                },
                options: [
                    { en: "Webs made of silk", es: "Telarañas hechas de seda", de: "Netze aus Seide", nl: "Webben gemaakt van zijde" },
                    { en: "Sharp teeth", es: "Dientes afilados", de: "Scharfe Zähne", nl: "Scherpe tanden" },
                    { en: "Fast running", es: "Correr rápido", de: "Schnelles Laufen", nl: "Snel rennen" },
                    { en: "Loud sounds", es: "Sonidos fuertes", de: "Laute Geräusche", nl: "Luide geluiden" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How many legs do insects have?",
                    es: "¿Cuántas patas tienen los insectos?",
                    de: "Wie viele Beine haben Insekten?",
                    nl: "Hoeveel poten hebben insecten?"
                },
                options: [
                    { en: "Six", es: "Seis", de: "Sechs", nl: "Zes" },
                    { en: "Four", es: "Cuatro", de: "Vier", nl: "Vier" },
                    { en: "Eight", es: "Ocho", de: "Acht", nl: "Acht" },
                    { en: "Ten", es: "Diez", de: "Zehn", nl: "Tien" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do caterpillars turn into?",
                    es: "¿En qué se convierten las orugas?",
                    de: "In was verwandeln sich Raupen?",
                    nl: "Waar veranderen rupsen in?"
                },
                options: [
                    { en: "Butterflies or moths", es: "Mariposas o polillas", de: "Schmetterlinge oder Motten", nl: "Vlinders of motten" },
                    { en: "Bees", es: "Abejas", de: "Bienen", nl: "Bijen" },
                    { en: "Beetles", es: "Escarabajos", de: "Käfer", nl: "Kevers" },
                    { en: "Ants", es: "Hormigas", de: "Ameisen", nl: "Mieren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do kangaroos use their strong legs for?",
                    es: "¿Para qué usan los canguros sus patas fuertes?",
                    de: "Wofür benutzen Kängurus ihre starken Beine?",
                    nl: "Waarvoor gebruiken kangoeroes hun sterke benen?"
                },
                options: [
                    { en: "Jumping and hopping", es: "Saltar y brincar", de: "Springen und Hüpfen", nl: "Springen en huppelen" },
                    { en: "Swimming", es: "Nadar", de: "Schwimmen", nl: "Zwemmen" },
                    { en: "Flying", es: "Volar", de: "Fliegen", nl: "Vliegen" },
                    { en: "Climbing trees", es: "Trepar árboles", de: "Bäume klettern", nl: "Bomen klimmen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Where do baby kangaroos grow and develop?",
                    es: "¿Dónde crecen y se desarrollan los bebés canguro?",
                    de: "Wo wachsen und entwickeln sich Känguru-Babys?",
                    nl: "Waar groeien en ontwikkelen kangoeroe baby's?"
                },
                options: [
                    { en: "In their mother's pouch", es: "En la bolsa de su madre", de: "Im Beutel ihrer Mutter", nl: "In de buidel van hun moeder" },
                    { en: "In nests in trees", es: "En nidos en árboles", de: "In Nestern in Bäumen", nl: "In nesten in bomen" },
                    { en: "Underground", es: "Bajo tierra", de: "Unterirdisch", nl: "Ondergronds" },
                    { en: "In water", es: "En agua", de: "Im Wasser", nl: "In water" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do owls hunt mainly at night?",
                    es: "¿Qué cazan principalmente los búhos en la noche?",
                    de: "Was jagen Eulen hauptsächlich in der Nacht?",
                    nl: "Wat jagen uilen vooral 's nachts?"
                },
                options: [
                    { en: "Small animals like mice", es: "Animales pequeños como ratones", de: "Kleine Tiere wie Mäuse", nl: "Kleine dieren zoals muizen" },
                    { en: "Fish", es: "Peces", de: "Fische", nl: "Vis" },
                    { en: "Large mammals", es: "Mamíferos grandes", de: "Große Säugetiere", nl: "Grote zoogdieren" },
                    { en: "Other birds only", es: "Solo otras aves", de: "Nur andere Vögel", nl: "Alleen andere vogels" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How do snakes move without legs?",
                    es: "¿Cómo se mueven las serpientes sin patas?",
                    de: "Wie bewegen sich Schlangen ohne Beine?",
                    nl: "Hoe bewegen slangen zich zonder poten?"
                },
                options: [
                    { en: "By slithering using their muscles", es: "Deslizándose usando sus músculos", de: "Durch Schlängeln mit ihren Muskeln", nl: "Door te glijden met hun spieren" },
                    { en: "By jumping", es: "Saltando", de: "Durch Springen", nl: "Door te springen" },
                    { en: "By rolling", es: "Rodando", de: "Durch Rollen", nl: "Door te rollen" },
                    { en: "By flying", es: "Volando", de: "Durch Fliegen", nl: "Door te vliegen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do bees collect from flowers?",
                    es: "¿Qué recolectan las abejas de las flores?",
                    de: "Was sammeln Bienen von Blüten?",
                    nl: "Wat verzamelen bijen van bloemen?"
                },
                options: [
                    { en: "Nectar and pollen", es: "Néctar y polen", de: "Nektar und Pollen", nl: "Nectar en stuifmeel" },
                    { en: "Water", es: "Agua", de: "Wasser", nl: "Water" },
                    { en: "Leaves", es: "Hojas", de: "Blätter", nl: "Bladeren" },
                    { en: "Seeds", es: "Semillas", de: "Samen", nl: "Zaden" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What type of animal is a seahorse?",
                    es: "¿Qué tipo de animal es un caballito de mar?",
                    de: "Was für ein Tier ist ein Seepferdchen?",
                    nl: "Wat voor dier is een zeepaardje?"
                },
                options: [
                    { en: "A fish", es: "Un pez", de: "Ein Fisch", nl: "Een vis" },
                    { en: "A mammal", es: "Un mamífero", de: "Ein Säugetier", nl: "Een zoogdier" },
                    { en: "A reptile", es: "Un reptil", de: "Ein Reptil", nl: "Een reptiel" },
                    { en: "An amphibian", es: "Un anfibio", de: "Ein Amphibium", nl: "Een amfibie" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What helps sharks detect movement in water?",
                    es: "¿Qué ayuda a los tiburones a detectar movimiento en el agua?",
                    de: "Was hilft Haien dabei, Bewegungen im Wasser zu erkennen?",
                    nl: "Wat helpt haaien beweging in water te detecteren?"
                },
                options: [
                    { en: "Special sensors along their body", es: "Sensores especiales a lo largo de su cuerpo", de: "Besondere Sensoren entlang ihres Körpers", nl: "Speciale sensoren langs hun lichaam" },
                    { en: "Their teeth", es: "Sus dientes", de: "Ihre Zähne", nl: "Hun tanden" },
                    { en: "Their fins", es: "Sus aletas", de: "Ihre Flossen", nl: "Hun vinnen" },
                    { en: "Their gills", es: "Sus branquias", de: "Ihre Kiemen", nl: "Hun kieuwen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do woodpeckers use their beaks for?",
                    es: "¿Para qué usan los pájaros carpinteros sus picos?",
                    de: "Wofür benutzen Spechte ihre Schnäbel?",
                    nl: "Waarvoor gebruiken spechten hun snavels?"
                },
                options: [
                    { en: "To make holes in trees for food and nests", es: "Para hacer agujeros en árboles para comida y nidos", de: "Um Löcher in Bäume für Nahrung und Nester zu machen", nl: "Om gaten in bomen te maken voor voedsel en nesten" },
                    { en: "To swim underwater", es: "Para nadar bajo el agua", de: "Um unter Wasser zu schwimmen", nl: "Om onder water te zwemmen" },
                    { en: "To catch fish", es: "Para atrapar peces", de: "Um Fische zu fangen", nl: "Om vis te vangen" },
                    { en: "To fly higher", es: "Para volar más alto", de: "Um höher zu fliegen", nl: "Om hoger te vliegen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call animals that are awake at dawn and dusk?",
                    es: "¿Cómo llamamos a los animales que están despiertos al amanecer y al anochecer?",
                    de: "Wie nennen wir Tiere, die bei Sonnenauf- und -untergang wach sind?",
                    nl: "Hoe noemen we dieren die wakker zijn bij zonsopgang en zonsondergang?"
                },
                options: [
                    { en: "Crepuscular", es: "Crepusculares", de: "Dämmerungsaktiv", nl: "Schemering actief" },
                    { en: "Diurnal", es: "Diurnos", de: "Tagaktiv", nl: "Dagactief" },
                    { en: "Nocturnal", es: "Nocturnos", de: "Nachtaktiv", nl: "Nachtactief" },
                    { en: "Hibernating", es: "Hibernando", de: "Winterschlaf haltend", nl: "Winterslapen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How do dolphins communicate with each other?",
                    es: "¿Cómo se comunican los delfines entre sí?",
                    de: "Wie kommunizieren Delfine miteinander?",
                    nl: "Hoe communiceren dolfijnen met elkaar?"
                },
                options: [
                    { en: "Using clicks, whistles, and body language", es: "Usando chasquidos, silbidos y lenguaje corporal", de: "Durch Klicks, Pfiffe und Körpersprache", nl: "Door kliks, fluiten en lichaamstaal" },
                    { en: "By changing colors", es: "Cambiando colores", de: "Durch Farbwechsel", nl: "Door van kleur te veranderen" },
                    { en: "By writing messages", es: "Escribiendo mensajes", de: "Durch Schreiben von Nachrichten", nl: "Door berichten te schrijven" },
                    { en: "By dancing only", es: "Solo bailando", de: "Nur durch Tanzen", nl: "Alleen door dansen" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What adaptation helps Arctic animals stay warm?",
                    es: "¿Qué adaptación ayuda a los animales árticos a mantenerse calientes?",
                    de: "Welche Anpassung hilft arktischen Tieren dabei, warm zu bleiben?",
                    nl: "Welke aanpassing helpt arctische dieren warm te blijven?"
                },
                options: [
                    { en: "Thick fur or blubber", es: "Pelaje grueso o grasa", de: "Dichtes Fell oder Speck", nl: "Dikke vacht of spek" },
                    { en: "Thin skin", es: "Piel delgada", de: "Dünne Haut", nl: "Dunne huid" },
                    { en: "Long legs", es: "Patas largas", de: "Lange Beine", nl: "Lange poten" },
                    { en: "Bright colors", es: "Colores brillantes", de: "Helle Farben", nl: "Felle kleuren" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call baby bears?",
                    es: "¿Cómo llamamos a los osos bebé?",
                    de: "Wie nennen wir Bärenbabys?",
                    nl: "Hoe noemen we beer baby's?"
                },
                options: [
                    { en: "Cubs", es: "Cachorros", de: "Junge", nl: "Welpen" },
                    { en: "Puppies", es: "Cachorros", de: "Welpen", nl: "Puppy's" },
                    { en: "Kittens", es: "Gatitos", de: "Kätzchen", nl: "Kittens" },
                    { en: "Chicks", es: "Pollitos", de: "Küken", nl: "Kuikens" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What helps animals like deer and rabbits escape from predators?",
                    es: "¿Qué ayuda a animales como venados y conejos a escapar de depredadores?",
                    de: "Was hilft Tieren wie Hirschen und Kaninchen dabei, vor Raubtieren zu fliehen?",
                    nl: "Wat helpt dieren zoals herten en konijnen ontsnappen aan roofdieren?"
                },
                options: [
                    { en: "Speed and good hearing", es: "Velocidad y buen oído", de: "Geschwindigkeit und gutes Gehör", nl: "Snelheid en goed gehoor" },
                    { en: "Sharp claws", es: "Garras afiladas", de: "Scharfe Krallen", nl: "Scherpe klauwen" },
                    { en: "Poison", es: "Veneno", de: "Gift", nl: "Gif" },
                    { en: "Camouflage only", es: "Solo camuflaje", de: "Nur Tarnung", nl: "Alleen camouflage" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What important job do earthworms do for soil?",
                    es: "¿Qué trabajo importante hacen las lombrices para el suelo?",
                    de: "Welche wichtige Arbeit verrichten Regenwürmer für den Boden?",
                    nl: "Welk belangrijk werk doen regenwormen voor de grond?"
                },
                options: [
                    { en: "They mix and aerate soil", es: "Mezclan y airean el suelo", de: "Sie mischen und belüften den Boden", nl: "Ze mengen en luchten de grond" },
                    { en: "They eat all the plants", es: "Se comen todas las plantas", de: "Sie fressen alle Pflanzen", nl: "Ze eten alle planten op" },
                    { en: "They make the soil hard", es: "Hacen el suelo duro", de: "Sie machen den Boden hart", nl: "Ze maken de grond hard" },
                    { en: "They scare away other animals", es: "Ahuyentan a otros animales", de: "Sie verscheuchen andere Tiere", nl: "Ze schrikken andere dieren weg" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "How do animals in the desert conserve water?",
                    es: "¿Cómo conservan agua los animales del desierto?",
                    de: "Wie sparen Wüstentiere Wasser?",
                    nl: "Hoe besparen woestijndieren water?"
                },
                options: [
                    { en: "By being active at night and having special kidneys", es: "Siendo activos en la noche y teniendo riñones especiales", de: "Durch Nachtaktivität und besondere Nieren", nl: "Door 's nachts actief te zijn en speciale nieren te hebben" },
                    { en: "By drinking lots of water", es: "Bebiendo mucha agua", de: "Durch viel Trinken", nl: "Door veel water te drinken" },
                    { en: "By staying in the sun", es: "Quedándose al sol", de: "Durch Bleiben in der Sonne", nl: "Door in de zon te blijven" },
                    { en: "By eating only plants", es: "Comiendo solo plantas", de: "Durch nur Pflanzen fressen", nl: "Door alleen planten te eten" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call the home that bees make?",
                    es: "¿Cómo llamamos al hogar que hacen las abejas?",
                    de: "Wie nennen wir das Zuhause, das Bienen machen?",
                    nl: "Hoe noemen we het huis dat bijen maken?"
                },
                options: [
                    { en: "A hive", es: "Una colmena", de: "Ein Bienenstock", nl: "Een bijenkorf" },
                    { en: "A nest", es: "Un nido", de: "Ein Nest", nl: "Een nest" },
                    { en: "A den", es: "Una guarida", de: "Eine Höhle", nl: "Een hol" },
                    { en: "A burrow", es: "Una madriguera", de: "Ein Bau", nl: "Een hol" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "Why are animals important for our planet?",
                    es: "¿Por qué son importantes los animales para nuestro planeta?",
                    de: "Warum sind Tiere wichtig für unseren Planeten?",
                    nl: "Waarom zijn dieren belangrijk voor onze planeet?"
                },
                options: [
                    { en: "They help balance ecosystems and pollinate plants", es: "Ayudan a equilibrar ecosistemas y polinizan plantas", de: "Sie helfen beim Gleichgewicht der Ökosysteme und bestäuben Pflanzen", nl: "Ze helpen ecosystemen in balans houden en bestuiven planten" },
                    { en: "They make too much noise", es: "Hacen demasiado ruido", de: "Sie machen zu viel Lärm", nl: "Ze maken te veel lawaai" },
                    { en: "They eat all our food", es: "Se comen toda nuestra comida", de: "Sie fressen all unser Essen", nl: "Ze eten al ons voedsel op" },
                    { en: "They are not important", es: "No son importantes", de: "Sie sind nicht wichtig", nl: "Ze zijn niet belangrijk" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What happens when you mix red and yellow paint?",
                    es: "¿Qué pasa cuando mezclas pintura roja y amarilla?",
                    de: "Was passiert, wenn du rote und gelbe Farbe mischst?",
                    nl: "Wat gebeurt er als je rode en gele verf mengt?"
                },
                options: [
                    { en: "You get orange", es: "Obtienes naranja", de: "Du bekommst Orange", nl: "Je krijgt oranje" },
                    { en: "You get purple", es: "Obtienes morado", de: "Du bekommst Lila", nl: "Je krijgt paars" },
                    { en: "You get green", es: "Obtienes verde", de: "Du bekommst Grün", nl: "Je krijgt groen" },
                    { en: "You get black", es: "Obtienes negro", de: "Du bekommst Schwarz", nl: "Je krijgt zwart" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do plants need from the sun?",
                    es: "¿Qué necesitan las plantas del sol?",
                    de: "Was brauchen Pflanzen von der Sonne?",
                    nl: "Wat hebben planten van de zon nodig?"
                },
                options: [
                    { en: "Light energy", es: "Energía luminosa", de: "Lichtenergie", nl: "Lichtenergie" },
                    { en: "Heat only", es: "Solo calor", de: "Nur Wärme", nl: "Alleen warmte" },
                    { en: "Nothing", es: "Nada", de: "Nichts", nl: "Niets" },
                    { en: "Water", es: "Agua", de: "Wasser", nl: "Water" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What makes a magnet stick to some metals?",
                    es: "¿Qué hace que un imán se pegue a algunos metales?",
                    de: "Was macht, dass ein Magnet an manchen Metallen haftet?",
                    nl: "Waardoor plakt een magneet aan sommige metalen?"
                },
                options: [
                    { en: "Magnetic force", es: "Fuerza magnética", de: "Magnetische Kraft", nl: "Magnetische kracht" },
                    { en: "Glue", es: "Pegamento", de: "Kleber", nl: "Lijm" },
                    { en: "Static electricity", es: "Electricidad estática", de: "Statische Elektrizität", nl: "Statische elektriciteit" },
                    { en: "Gravity", es: "Gravedad", de: "Schwerkraft", nl: "Zwaartekracht" }
                ],
                correct: 0
            },
            {
                question: {
                    en: "What do we call water that falls from clouds?",
                    es: "¿Cómo llamamos al agua que cae de las nubes?",
                    de: "Wie nennen wir Wasser, das aus Wolken fällt?",
                    nl: "Hoe noemen we water dat uit wolken valt?"
                },
                options: [
                    { en: "Rain", es: "Lluvia", de: "Regen", nl: "Regen" },
                    { en: "Snow", es: "Nieve", de: "Schnee", nl: "Sneeuw" },
                    { en: "Wind", es: "Viento", de: "Wind", nl: "Wind" },
                    { en: "Fog", es: "Niebla", de: "Nebel", nl: "Mist" }
                ],
                correct: 0
            }
        ]
    };

    if (typeof window.addLevel === 'function') {
        window.addLevel('warm-up/science', level4);
    }
})();