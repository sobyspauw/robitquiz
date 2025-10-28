// Jurassic Dinosaurs Quiz - Level 2: Basic Knowledge
(function() {
  const level2 = {
    name: {
      en: "Jurassic Dinosaurs Level 2",
      es: "Dinosaurios Jurásicos Nivel 2",
      de: "Jura Dinosaurier Stufe 2",
      nl: "Jura Dino's Level 2"
    },
    questions: [
      {
        question: {
          en: "When did the Jurassic period occur?",
          es: "¿Cuándo ocurrió el período Jurásico?",
          de: "Wann fand die Jurazeit statt?",
          nl: "Wanneer vond het Jura-tijdperk plaats?"
        },
        options: [
          { en: "201-145 million years ago", es: "201-145 millones de años atrás", de: "201-145 Millionen Jahre vor", nl: "201-145 miljoen jaar geleden" },
          { en: "65 million years ago", es: "65 millones de años atrás", de: "65 Millionen Jahre vor", nl: "65 miljoen jaar geleden" },
          { en: "1 million years ago", es: "1 millón de años atrás", de: "1 Million Jahre vor", nl: "1 miljoen jaar geleden" },
          { en: "100,000 years ago", es: "100,000 años atrás", de: "100,000 Jahre vor", nl: "100.000 jaar geleden" }
        ],
        correct: 0,
        explanation: {
          en: "The Jurassic period lasted from about 201 to 145 million years ago, making it the middle period of the Mesozoic Era.",
          es: "El período Jurásico duró desde aproximadamente 201 hasta 145 millones de años atrás, convirtiéndolo en el período medio de la Era Mesozoica.",
          de: "Die Jurazeit dauerte von etwa 201 bis 145 Millionen Jahren vor unserer Zeit und war die mittlere Periode des Mesozoikums.",
          nl: "Het Jura-tijdperk duurde van ongeveer 201 tot 145 miljoen jaar geleden, waardoor het het middelste tijdperk van het Mesozoïcum was."
        }
      },
      {
        question: {
          en: "What type of teeth did Allosaurus have?",
          es: "¿Qué tipo de dientes tenía Allosaurus?",
          de: "Welche Art von Zähnen hatte Allosaurus?",
          nl: "Wat voor tanden had Allosaurus?"
        },
        options: [
          { en: "Sharp, pointed teeth", es: "Dientes afilados y puntiagudos", de: "Scharfe, spitze Zähne", nl: "Scherpe, puntige tanden" },
          { en: "Flat teeth for grinding", es: "Dientes planos para moler", de: "Flache Zähne zum Mahlen", nl: "Platte tanden om te malen" },
          { en: "No teeth at all", es: "Sin dientes en absoluto", de: "Gar keine Zähne", nl: "Helemaal geen tanden" },
          { en: "Square teeth", es: "Dientes cuadrados", de: "Viereckige Zähne", nl: "Vierkante tanden" }
        ],
        correct: 0,
        explanation: {
          en: "Allosaurus had sharp, serrated teeth perfect for tearing meat from its prey, indicating it was a carnivore.",
          es: "Allosaurus tenía dientes afilados y serrados perfectos para desgarrar carne de su presa, indicando que era un carnívoro.",
          de: "Allosaurus hatte scharfe, gezackte Zähne, die perfekt zum Zerreißen von Fleisch seiner Beute waren, was zeigt, dass er ein Fleischfresser war.",
          nl: "Allosaurus had scherpe, gekartelde tanden die perfect waren voor het verscheuren van vlees van zijn prooi, wat aantoont dat het een carnivoor was."
        }
      },
      {
        question: {
          en: "How did Stegosaurus defend itself?",
          es: "¿Cómo se defendía Stegosaurus?",
          de: "Wie verteidigte sich Stegosaurus?",
          nl: "Hoe verdedigde Stegosaurus zichzelf?"
        },
        options: [
          { en: "With spikes on its tail", es: "Con púas en su cola", de: "Mit Stacheln an seinem Schwanz", nl: "Met stekels op zijn staart" },
          { en: "By running very fast", es: "Corriendo muy rápido", de: "Durch sehr schnelles Laufen", nl: "Door heel snel te rennen" },
          { en: "By hiding underground", es: "Escondiéndose bajo tierra", de: "Durch Verstecken unter der Erde", nl: "Door zich ondergronds te verstoppen" },
          { en: "By climbing trees", es: "Subiendo a los árboles", de: "Durch Klettern auf Bäume", nl: "Door in bomen te klimmen" }
        ],
        correct: 0,
        explanation: {
          en: "Stegosaurus had four sharp spikes on its tail called a 'thagomizer' that it could swing at predators for defense.",
          es: "Stegosaurus tenía cuatro púas afiladas en su cola llamadas 'thagomizer' que podía balancear hacia los depredadores para defenderse.",
          de: "Stegosaurus hatte vier scharfe Stacheln an seinem Schwanz, genannt 'Thagomizer', die er zur Verteidigung gegen Raubtiere schwingen konnte.",
          nl: "Stegosaurus had vier scherpe stekels op zijn staart genaamd een 'thagomizer' die hij naar roofdieren kon zwaaien ter verdediging."
        }
      },
      {
        question: {
          en: "What did Camarasaurus mainly eat?",
          es: "¿Qué comía principalmente Camarasaurus?",
          de: "Was fraß Camarasaurus hauptsächlich?",
          nl: "Wat at Camarasaurus voornamelijk?"
        },
        options: [
          { en: "Conifer needles and ferns", es: "Agujas de coníferas y helechos", de: "Nadelbaum-Nadeln und Farne", nl: "Naaldboombladen en varens" },
          { en: "Fish and shellfish", es: "Pescado y mariscos", de: "Fische und Meeresfrüchte", nl: "Vis en schelpdieren" },
          { en: "Other dinos", es: "Otros dinosaurios", de: "Andere Dinosaurier", nl: "Andere dinosaurussen" },
          { en: "Insects and worms", es: "Insectos y gusanos", de: "Insekten und Würmer", nl: "Insecten en wormen" }
        ],
        correct: 0,
        explanation: {
          en: "Camarasaurus was a herbivore that fed on conifers, ferns, and other plants available during the Jurassic period.",
          es: "Camarasaurus era un herbívoro que se alimentaba de coníferas, helechos y otras plantas disponibles durante el período Jurásico.",
          de: "Camarasaurus war ein Pflanzenfresser, der sich von Nadelbäumen, Farnen und anderen Pflanzen ernährte, die während der Jurazeit verfügbar waren.",
          nl: "Camarasaurus was een herbivoor die zich voedde met naaldbomen, varens en andere planten die beschikbaar waren tijdens het Jura-tijdperk."
        }
      },
      {
        question: {
          en: "How long could Diplodocus grow?",
          es: "¿Cuánto podía crecer Diplodocus?",
          de: "Wie lang konnte Diplodocus werden?",
          nl: "Hoe lang kon Diplodocus worden?"
        },
        options: [
          { en: "Up to 27 meters (88 feet)", es: "Hasta 27 metros (88 pies)", de: "Bis zu 27 Meter (88 Fuß)", nl: "Tot 27 meter (88 voet)" },
          { en: "5 meters (16 feet)", es: "5 metros (16 pies)", de: "5 Meter (16 Fuß)", nl: "5 meter (16 voet)" },
          { en: "50 meters (164 feet)", es: "50 metros (164 pies)", de: "50 Meter (164 Fuß)", nl: "50 meter (164 voet)" },
          { en: "2 meters (6 feet)", es: "2 metros (6 pies)", de: "2 Meter (6 Fuß)", nl: "2 meter (6 voet)" }
        ],
        correct: 0,
        explanation: {
          en: "Diplodocus could reach lengths of up to 27 meters, making it one of the longest dinosaurs that ever lived.",
          es: "Diplodocus podía alcanzar longitudes de hasta 27 metros, convirtiéndolo en uno de los dinosaurios más largos que jamás vivieron.",
          de: "Diplodocus konnte Längen von bis zu 27 Metern erreichen und war damit einer der längsten Dinosaurier, die je gelebt haben.",
          nl: "Diplodocus kon lengtes van tot 27 meter bereiken, waardoor het een van de langste dinosaurussen was die ooit leefden."
        }
      },
      {
        question: {
          en: "What was special about Dilophosaurus?",
          es: "¿Qué tenía de especial Dilophosaurus?",
          de: "Was war besonders an Dilophosaurus?",
          nl: "Wat was bijzonder aan Dilophosaurus?"
        },
        options: [
          { en: "It had two crests on its head", es: "Tenía dos crestas en su cabeza", de: "Er hatte zwei Kämme auf seinem Kopf", nl: "Hij had twee kammen op zijn hoofd" },
          { en: "It could fly", es: "Podía volar", de: "Er konnte fliegen", nl: "Hij kon vliegen" },
          { en: "It lived underwater", es: "Vivía bajo el agua", de: "Er lebte unter Wasser", nl: "Hij leefde onder water" },
          { en: "It was the biggest dinosaur", es: "Era el dinosaurio más grande", de: "Er war der größte Dinosaurier", nl: "Hij was de grootste dinosaurus" }
        ],
        correct: 0,
        explanation: {
          en: "Dilophosaurus had two distinctive crests on its head, which may have been used for display or species recognition.",
          es: "Dilophosaurus tenía dos crestas distintivas en su cabeza, que pueden haber sido usadas para exhibición o reconocimiento de especies.",
          de: "Dilophosaurus hatte zwei markante Kämme auf seinem Kopf, die möglicherweise zur Zurschaustellung oder Artenerkennung verwendet wurden.",
          nl: "Dilophosaurus had twee kenmerkende kammen op zijn hoofd, die mogelijk gebruikt werden voor vertoon of soortherkenning."
        }
      },
      {
        question: {
          en: "Where have most Jurassic dinosaur fossils been found?",
          es: "¿Dónde se han encontrado la mayoría de los fósiles de dinosaurios jurásicos?",
          de: "Wo wurden die meisten Jura-Dinosaurier-Fossilien gefunden?",
          nl: "Waar zijn de meeste Jura-dinosaurusfossielen gevonden?"
        },
        options: [
          { en: "Morrison Formation, USA", es: "Formación Morrison, EE.UU.", de: "Morrison-Formation, USA", nl: "Morrison Formatie, VS" },
          { en: "Antarctica", es: "Antártida", de: "Antarktis", nl: "Antarctica" },
          { en: "Australia", es: "Australia", de: "Australien", nl: "Australië" },
          { en: "Greenland", es: "Groenlandia", de: "Grönland", nl: "Groenland" }
        ],
        correct: 0,
        explanation: {
          en: "The Morrison Formation in the western United States has yielded many famous Jurassic dinosaur fossils, including Allosaurus, Stegosaurus, and Diplodocus.",
          es: "La Formación Morrison en el oeste de Estados Unidos ha producido muchos fósiles famosos de dinosaurios jurásicos, incluyendo Allosaurus, Stegosaurus y Diplodocus.",
          de: "Die Morrison-Formation im Westen der USA hat viele berühmte Jura-Dinosaurier-Fossilien hervorgebracht, einschließlich Allosaurus, Stegosaurus und Diplodocus.",
          nl: "De Morrison Formatie in het westen van de Verenigde Staten heeft veel beroemde Jura-dinosaurusfossielen opgeleverd, waaronder Allosaurus, Stegosaurus en Diplodocus."
        }
      },
      {
        question: {
          en: "How many plates did Stegosaurus have on its back?",
          es: "¿Cuántas placas tenía Stegosaurus en su espalda?",
          de: "Wie viele Platten hatte Stegosaurus auf seinem Rücken?",
          nl: "Hoeveel platen had Stegosaurus op zijn rug?"
        },
        options: [
          { en: "17 plates", es: "17 placas", de: "17 Platten", nl: "17 platen" },
          { en: "5 plates", es: "5 placas", de: "5 Platten", nl: "5 platen" },
          { en: "50 plates", es: "50 placas", de: "50 Platten", nl: "50 platen" },
          { en: "100 plates", es: "100 placas", de: "100 Platten", nl: "100 platen" }
        ],
        correct: 0,
        explanation: {
          en: "Stegosaurus typically had 17 triangular plates arranged in two rows along its back, which may have helped regulate body temperature.",
          es: "Stegosaurus típicamente tenía 17 placas triangulares dispuestas en dos filas a lo largo de su espalda, que pueden haber ayudado a regular la temperatura corporal.",
          de: "Stegosaurus hatte typischerweise 17 dreieckige Platten, die in zwei Reihen entlang seines Rückens angeordnet waren und möglicherweise zur Temperaturregulierung dienten.",
          nl: "Stegosaurus had meestal 17 driehoekige platen gerangschikt in twee rijen langs zijn rug, die mogelijk hielpen bij het reguleren van de lichaamstemperatuur."
        }
      },
      {
        question: {
          en: "What does 'Brachiosaurus' mean?",
          es: "¿Qué significa 'Brachiosaurus'?",
          de: "Was bedeutet 'Brachiosaurus'?",
          nl: "Wat betekent 'Brachiosaurus'?"
        },
        options: [
          { en: "Arm lizard", es: "Lagarto brazo", de: "Arm-Echse", nl: "Armhagedis" },
          { en: "Long lizard", es: "Lagarto largo", de: "Lange Echse", nl: "Lange hagedis" },
          { en: "Big lizard", es: "Lagarto grande", de: "Große Echse", nl: "Grote hagedis" },
          { en: "Fast lizard", es: "Lagarto rápido", de: "Schnelle Echse", nl: "Snelle hagedis" }
        ],
        correct: 0,
        explanation: {
          en: "Brachiosaurus means 'arm lizard' because its front legs were longer than its back legs, unlike most other dinosaurs.",
          es: "Brachiosaurus significa 'lagarto brazo' porque sus patas delanteras eran más largas que sus patas traseras, a diferencia de la mayoría de otros dinosaurios.",
          de: "Brachiosaurus bedeutet 'Arm-Echse', weil seine Vorderbeine länger waren als seine Hinterbeine, im Gegensatz zu den meisten anderen Dinosauriern.",
          nl: "Brachiosaurus betekent 'armhagedis' omdat zijn voorpoten langer waren dan zijn achterpoten, in tegenstelling tot de meeste andere dinosaurussen."
        }
      },
      {
        question: {
          en: "How much did an adult Allosaurus weigh?",
          es: "¿Cuánto pesaba un Allosaurus adulto?",
          de: "Wie viel wog ein erwachsener Allosaurus?",
          nl: "Hoeveel woog een volwassen Allosaurus?"
        },
        options: [
          { en: "1-2 tons", es: "1-2 toneladas", de: "1-2 Tonnen", nl: "1-2 ton" },
          { en: "10 kilograms", es: "10 kilogramos", de: "10 Kilogramm", nl: "10 kilogram" },
          { en: "50 tons", es: "50 toneladas", de: "50 Tonnen", nl: "50 ton" },
          { en: "100 tons", es: "100 toneladas", de: "100 Tonnen", nl: "100 ton" }
        ],
        correct: 0,
        explanation: {
          en: "Adult Allosaurus typically weighed between 1-2 tons, making it a large but not gigantic predatory dinosaur.",
          es: "Allosaurus adulto típicamente pesaba entre 1-2 toneladas, convirtiéndolo en un dinosaurio depredador grande pero no gigantesco.",
          de: "Erwachsener Allosaurus wog typischerweise zwischen 1-2 Tonnen, was ihn zu einem großen, aber nicht gigantischen Raubdinosaurier machte.",
          nl: "Volwassen Allosaurus woog meestal tussen 1-2 ton, waardoor het een grote maar niet gigantische roofdierdinosaurus was."
        }
      },
      {
        question: {
          en: "What was the climate like during the Jurassic period?",
          es: "¿Cómo era el clima durante el período Jurásico?",
          de: "Wie war das Klima während der Jurazeit?",
          nl: "Hoe was het klimaat tijdens het Jura-tijdperk?"
        },
        options: [
          { en: "Warm and humid with no ice caps", es: "Cálido y húmedo sin casquetes de hielo", de: "Warm und feucht ohne Eiskappen", nl: "Warm en vochtig zonder ijskappen" },
          { en: "Cold with lots of snow", es: "Frío con mucha nieve", de: "Kalt mit viel Schnee", nl: "Koud met veel sneeuw" },
          { en: "Dry and desert-like", es: "Seco y desértico", de: "Trocken und wüstenartig", nl: "Droog en woestijnachtig" },
          { en: "Same as today", es: "Igual que hoy", de: "Gleich wie heute", nl: "Hetzelfde als vandaag" }
        ],
        correct: 0,
        explanation: {
          en: "The Jurassic climate was warm and humid worldwide, with no polar ice caps and higher sea levels than today.",
          es: "El clima jurásico era cálido y húmedo en todo el mundo, sin casquetes polares de hielo y niveles del mar más altos que hoy.",
          de: "Das Jura-Klima war weltweit warm und feucht, ohne polare Eiskappen und mit höheren Meeresspiegel als heute.",
          nl: "Het Jura-klimaat was wereldwijd warm en vochtig, zonder polaire ijskappen en met hogere zeespiegels dan vandaag."
        }
      },
      {
        question: {
          en: "Which was larger: Ceratosaurus or Compsognathus?",
          es: "¿Cuál era más grande: Ceratosaurus o Compsognathus?",
          de: "Welcher war größer: Ceratosaurus oder Compsognathus?",
          nl: "Welke was groter: Ceratosaurus of Compsognathus?"
        },
        options: [
          { en: "Ceratosaurus", es: "Ceratosaurus", de: "Ceratosaurus", nl: "Ceratosaurus" },
          { en: "Compsognathus", es: "Compsognathus", de: "Compsognathus", nl: "Compsognathus" },
          { en: "They were the same size", es: "Eran del mismo tamaño", de: "Sie waren gleich groß", nl: "Ze waren even groot" },
          { en: "Neither existed", es: "Ninguno existió", de: "Keiner existierte", nl: "Geen van beiden bestond" }
        ],
        correct: 0,
        explanation: {
          en: "Ceratosaurus was much larger than Compsognathus. Ceratosaurus was about 6 meters long while Compsognathus was only chicken-sized.",
          es: "Ceratosaurus era mucho más grande que Compsognathus. Ceratosaurus medía unos 6 metros de largo mientras que Compsognathus era solo del tamaño de un pollo.",
          de: "Ceratosaurus war viel größer als Compsognathus. Ceratosaurus war etwa 6 Meter lang, während Compsognathus nur hühnergroß war.",
          nl: "Ceratosaurus was veel groter dan Compsognathus. Ceratosaurus was ongeveer 6 meter lang terwijl Compsognathus slechts kippengrootte was."
        }
      },
      {
        question: {
          en: "What type of plant was most common in Jurassic forests?",
          es: "¿Qué tipo de planta era más común en los bosques jurásicos?",
          de: "Welche Art von Pflanze war am häufigsten in Jura-Wäldern?",
          nl: "Wat voor plant was het meest voorkomend in Jura-bossen?"
        },
        options: [
          { en: "Conifers (evergreen trees)", es: "Coníferas (árboles perennes)", de: "Nadelbäume (immergrüne Bäume)", nl: "Naaldbomen (groenblijvende bomen)" },
          { en: "Flowering plants", es: "Plantas con flores", de: "Blühende Pflanzen", nl: "Bloeiende planten" },
          { en: "Grass", es: "Hierba", de: "Gras", nl: "Gras" },
          { en: "Cacti", es: "Cactus", de: "Kakteen", nl: "Cactussen" }
        ],
        correct: 0,
        explanation: {
          en: "Conifers dominated Jurassic forests. Flowering plants and grasses had not yet evolved during this time period.",
          es: "Las coníferas dominaban los bosques jurásicos. Las plantas con flores y los pastos aún no habían evolucionado durante este período de tiempo.",
          de: "Nadelbäume dominierten die Jura-Wälder. Blühende Pflanzen und Gräser hatten sich zu dieser Zeit noch nicht entwickelt.",
          nl: "Naaldbomen domineerden Jura-bossen. Bloeiende planten en grassen waren nog niet geëvolueerd tijdens dit tijdperk."
        }
      },
      {
        question: {
          en: "How did sauropods like Diplodocus move?",
          es: "¿Cómo se movían los saurópodos como Diplodocus?",
          de: "Wie bewegten sich Sauropoden wie Diplodocus?",
          nl: "Hoe bewogen sauropoden zoals Diplodocus?"
        },
        options: [
          { en: "They walked on four legs", es: "Caminaban sobre cuatro patas", de: "Sie liefen auf vier Beinen", nl: "Ze liepen op vier poten" },
          { en: "They hopped like kangaroos", es: "Saltaban como canguros", de: "Sie hüpften wie Kängurus", nl: "Ze sprongen zoals kangoeroes" },
          { en: "They crawled on their bellies", es: "Se arrastraban sobre sus vientres", de: "Sie krochen auf ihren Bäuchen", nl: "Ze kropen op hun buik" },
          { en: "They swam most of the time", es: "Nadaban la mayor parte del tiempo", de: "Sie schwammen die meiste Zeit", nl: "Ze zwommen de meeste tijd" }
        ],
        correct: 0,
        explanation: {
          en: "Sauropods were quadrupedal, meaning they walked on all four legs. Their massive size required this for support.",
          es: "Los saurópodos eran cuadrúpedos, lo que significa que caminaban sobre las cuatro patas. Su tamaño masivo requería esto para soporte.",
          de: "Sauropoden waren vierbeinig, das bedeutet sie liefen auf allen vier Beinen. Ihre massive Größe erforderte dies zur Unterstützung.",
          nl: "Sauropoden waren viervoetig, wat betekent dat ze op alle vier poten liepen. Hun massieve grootte vereiste dit voor ondersteuning."
        }
      },
      {
        question: {
          en: "What was unique about Kentrosaurus compared to Stegosaurus?",
          es: "¿Qué tenía de único Kentrosaurus comparado con Stegosaurus?",
          de: "Was war einzigartig an Kentrosaurus im Vergleich zu Stegosaurus?",
          nl: "Wat was uniek aan Kentrosaurus vergeleken met Stegosaurus?"
        },
        options: [
          { en: "It had more spikes and fewer plates", es: "Tenía más púas y menos placas", de: "Er hatte mehr Stacheln und weniger Platten", nl: "Hij had meer stekels en minder platen" },
          { en: "It was much larger", es: "Era mucho más grande", de: "Er war viel größer", nl: "Hij was veel groter" },
          { en: "It could fly", es: "Podía volar", de: "Er konnte fliegen", nl: "Hij kon vliegen" },
          { en: "It lived in water", es: "Vivía en el agua", de: "Er lebte im Wasser", nl: "Hij leefde in het water" }
        ],
        correct: 0,
        explanation: {
          en: "Kentrosaurus had more spikes along its back and tail compared to Stegosaurus, which had more plates. It was found in Africa.",
          es: "Kentrosaurus tenía más púas a lo largo de su espalda y cola comparado con Stegosaurus, que tenía más placas. Fue encontrado en África.",
          de: "Kentrosaurus hatte mehr Stacheln entlang seines Rückens und Schwanzes im Vergleich zu Stegosaurus, der mehr Platten hatte. Er wurde in Afrika gefunden.",
          nl: "Kentrosaurus had meer stekels langs zijn rug en staart vergeleken met Stegosaurus, die meer platen had. Hij werd gevonden in Afrika."
        }
      },
      {
        question: {
          en: "Which ocean covered much of Europe during the Jurassic?",
          es: "¿Qué océano cubría gran parte de Europa durante el Jurásico?",
          de: "Welcher Ozean bedeckte während der Jurazeit große Teile Europas?",
          nl: "Welke oceaan bedekte veel van Europa tijdens het Jura?"
        },
        options: [
          { en: "Tethys Sea", es: "Mar de Tetis", de: "Tethys-Meer", nl: "Tethys Zee" },
          { en: "Atlantic Ocean", es: "Océano Atlántico", de: "Atlantischer Ozean", nl: "Atlantische Oceaan" },
          { en: "Pacific Ocean", es: "Océano Pacífico", de: "Pazifischer Ozean", nl: "Stille Oceaan" },
          { en: "Arctic Ocean", es: "Océano Ártico", de: "Arktischer Ozean", nl: "Noordelijke IJszee" }
        ],
        correct: 0,
        explanation: {
          en: "The Tethys Sea was a large body of water that covered much of central and southern Europe during the Jurassic period.",
          es: "El Mar de Tetis era una gran masa de agua que cubría gran parte del centro y sur de Europa durante el período Jurásico.",
          de: "Das Tethys-Meer war eine große Wassermasse, die während der Jurazeit große Teile Zentral- und Südeuropas bedeckte.",
          nl: "De Tethys Zee was een grote watermassa die veel van centraal en zuidelijk Europa bedekte tijdens het Jura-tijdperk."
        }
      },
      {
        question: {
          en: "What was the average length of Compsognathus?",
          es: "¿Cuál era la longitud promedio de Compsognathus?",
          de: "Was war die durchschnittliche Länge von Compsognathus?",
          nl: "Wat was de gemiddelde lengte van Compsognathus?"
        },
        options: [
          { en: "1 meter (3 feet)", es: "1 metro (3 pies)", de: "1 Meter (3 Fuß)", nl: "1 meter (3 voet)" },
          { en: "10 meters (33 feet)", es: "10 metros (33 pies)", de: "10 Meter (33 Fuß)", nl: "10 meter (33 voet)" },
          { en: "25 meters (82 feet)", es: "25 metros (82 pies)", de: "25 Meter (82 Fuß)", nl: "25 meter (82 voet)" },
          { en: "0.1 meters (4 inches)", es: "0.1 metros (4 pulgadas)", de: "0.1 Meter (4 Zoll)", nl: "0.1 meter (4 inch)" }
        ],
        correct: 0,
        explanation: {
          en: "Compsognathus was about 1 meter long, making it one of the smallest known dinosaurs from the Jurassic period.",
          es: "Compsognathus medía aproximadamente 1 metro de largo, convirtiéndolo en uno de los dinosaurios más pequeños conocidos del período Jurásico.",
          de: "Compsognathus war etwa 1 Meter lang und damit einer der kleinsten bekannten Dinosaurier aus der Jurazeit.",
          nl: "Compsognathus was ongeveer 1 meter lang, waardoor het een van de kleinste bekende dinosaurussen uit het Jura-tijdperk was."
        }
      },
      {
        question: {
          en: "What did Ceratosaurus have on its nose?",
          es: "¿Qué tenía Ceratosaurus en su nariz?",
          de: "Was hatte Ceratosaurus auf seiner Nase?",
          nl: "Wat had Ceratosaurus op zijn neus?"
        },
        options: [
          { en: "A horn", es: "Un cuerno", de: "Ein Horn", nl: "Een hoorn" },
          { en: "A crest", es: "Una cresta", de: "Ein Kamm", nl: "Een kam" },
          { en: "Spikes", es: "Púas", de: "Stacheln", nl: "Stekels" },
          { en: "Nothing special", es: "Nada especial", de: "Nichts Besonderes", nl: "Niets bijzonders" }
        ],
        correct: 0,
        explanation: {
          en: "Ceratosaurus had a distinctive horn on its nose, which is where it gets its name meaning 'horned lizard'.",
          es: "Ceratosaurus tenía un cuerno distintivo en su nariz, de donde obtiene su nombre que significa 'lagarto cornudo'.",
          de: "Ceratosaurus hatte ein markantes Horn auf seiner Nase, woher auch sein Name stammt, der 'gehörnte Echse' bedeutet.",
          nl: "Ceratosaurus had een kenmerkende hoorn op zijn neus, waar hij zijn naam vandaan heeft die 'gehoornde hagedis' betekent."
        }
      },
      {
        question: {
          en: "What did Stegosaurus eat?",
          es: "¿Qué comía Stegosaurus?",
          de: "Was fraß Stegosaurus?",
          nl: "Wat at Stegosaurus?"
        },
        options: [
          { en: "Plants like ferns and cycads", es: "Plantas como helechos y cícadas", de: "Pflanzen wie Farne und Palmfarne", nl: "Planten zoals varens en kogelpalmen" },
          { en: "Fish from rivers", es: "Peces de los ríos", de: "Fische aus Flüssen", nl: "Vis uit rivieren" },
          { en: "Small dinosaurs", es: "Pequeños dinosaurios", de: "Kleine Dinosaurier", nl: "Kleine dinosaurussen" },
          { en: "Insects only", es: "Solo insectos", de: "Nur Insekten", nl: "Alleen insecten" }
        ],
        correct: 0,
        explanation: {
          en: "Stegosaurus was a herbivore that fed on low-growing plants like ferns, mosses, and cycads with its beak-like mouth.",
          es: "Stegosaurus era un herbívoro que se alimentaba de plantas bajas como helechos, musgos y cícadas con su boca en forma de pico.",
          de: "Stegosaurus war ein Pflanzenfresser, der sich von niedrig wachsenden Pflanzen wie Farnen, Moosen und Palmfarnen mit seinem schnabelartigen Maul ernährte.",
          nl: "Stegosaurus was een herbivoor die zich voedde met laag groeiende planten zoals varens, mossen en kogelpalmen met zijn snavelachtige mond."
        }
      },
      {
        question: {
          en: "How did scientists first discover Jurassic dinosaurs?",
          es: "¿Cómo descubrieron por primera vez los científicos los dinosaurios jurásicos?",
          de: "Wie entdeckten Wissenschaftler zuerst Jura-Dinosaurier?",
          nl: "Hoe ontdekten wetenschappers eerst Jura-dinosaurussen?"
        },
        options: [
          { en: "By finding fossil bones in rocks", es: "Encontrando huesos fósiles en rocas", de: "Durch das Finden fossiler Knochen in Gestein", nl: "Door fossiele botten in rotsen te vinden" },
          { en: "By seeing them alive", es: "Viéndolos vivos", de: "Durch das Sehen lebender Exemplare", nl: "Door ze levend te zien" },
          { en: "From old photographs", es: "De fotografías antiguas", de: "Aus alten Fotografien", nl: "Van oude foto's" },
          { en: "From cave paintings", es: "De pinturas rupestres", de: "Aus Höhlenmalereien", nl: "Van grottekeningen" }
        ],
        correct: 0,
        explanation: {
          en: "Scientists discover dinosaurs by carefully digging up their fossilized bones that have been preserved in rock for millions of years.",
          es: "Los científicos descubren dinosaurios excavando cuidadosamente sus huesos fosilizados que han sido preservados en roca por millones de años.",
          de: "Wissenschaftler entdecken Dinosaurier durch vorsichtiges Ausgraben ihrer fossilisierten Knochen, die Millionen von Jahren in Gestein konserviert wurden.",
          nl: "Wetenschappers ontdekken dinosaurussen door voorzichtig hun gefossiliseerde botten op te graven die miljoenen jaren in steen bewaard zijn gebleven."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  } else if (typeof window !== 'undefined') {
    window.level2 = level2;
  }
})();