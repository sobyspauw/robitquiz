// Animals - Level 7: Animal Sounds
(function() {
  const level7 = {
    name: {
      en: "Animal Sounds",
      es: "Sonidos de Animales",
      de: "Tiergeräusche",
      nl: "Dierengeluiden"
    },
    questions: [
      {
        question: {
          en: "What sound do cows make?",
          es: "¿Qué sonido hacen las vacas?",
          de: "Welchen Laut machen Kühe?",
          nl: "Welk geluid maken koeien?"
        },
        options: [
          { en: "Moo", es: "Mu", de: "Muh", nl: "Boe" },
          { en: "Bark", es: "Ladrar", de: "Wau", nl: "Blaf" },
          { en: "Meow", es: "Miau", de: "Miau", nl: "Miauw" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" }
        ],
        correct: 0,
        explanation: {
          en: "Cows moo to communicate with their calves, other cows, and to express emotions like hunger or distress.",
          es: "Las vacas mugen para comunicarse con sus terneros, otras vacas, y para expresar emociones como hambre o angustia.",
          de: "Kühe muhen, um mit ihren Kälbern und anderen Kühen zu kommunizieren und Emotionen wie Hunger oder Not auszudrücken.",
          nl: "Koeien loeien om te communiceren met hun kalveren, andere koeien, en om emoties zoals honger of nood uit te drukken."
        }
      },
      {
        question: {
          en: "What sound do pigs make?",
          es: "¿Qué sonido hacen los cerdos?",
          de: "Welchen Laut machen Schweine?",
          nl: "Welk geluid maken varkens?"
        },
        options: [
          { en: "Oink", es: "Oinc", de: "Oink", nl: "Knor" },
          { en: "Moo", es: "Mu", de: "Muh", nl: "Boe" },
          { en: "Woof", es: "Guau", de: "Wau", nl: "Woef" },
          { en: "Quack", es: "Cuac", de: "Quak", nl: "Kwak" }
        ],
        correct: 0,
        explanation: {
          en: "Pigs oink and grunt to communicate with each other, especially when they're excited, looking for food, or calling their piglets.",
          es: "Los cerdos gruñen para comunicarse entre ellos, especialmente cuando están emocionados, buscando comida, o llamando a sus lechones.",
          de: "Schweine grunzen, um miteinander zu kommunizieren, besonders wenn sie aufgeregt sind, Futter suchen oder ihre Ferkel rufen.",
          nl: "Varkens knorren om met elkaar te communiceren, vooral wanneer ze opgewonden zijn, voedsel zoeken, of hun biggen roepen."
        }
      },
      {
        question: {
          en: "What sound do ducks make?",
          es: "¿Qué sonido hacen los patos?",
          de: "Welchen Laut machen Enten?",
          nl: "Welk geluid maken eenden?"
        },
        options: [
          { en: "Quack", es: "Cuac", de: "Quak", nl: "Kwak" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Hoot", es: "Ulular", de: "Huu", nl: "Oehoe" },
          { en: "Roar", es: "Rugir", de: "Brüllen", nl: "Brullen" }
        ],
        correct: 0,
        explanation: {
          en: "Ducks quack to communicate with their flock, warn of danger, and call their ducklings using their specially adapted vocal cords.",
          es: "Los patos graznan para comunicarse con su bandada, advertir del peligro, y llamar a sus patitos usando sus cuerdas vocales especialmente adaptadas.",
          de: "Enten quaken, um mit ihrer Herde zu kommunizieren, vor Gefahr zu warnen und ihre Küken mit ihren speziell angepassten Stimmbändern zu rufen.",
          nl: "Eenden kwaken om te communiceren met hun troep, te waarschuwen voor gevaar, en hun eendjes te roepen met hun speciaal aangepaste stembanden."
        }
      },
      {
        question: {
          en: "What sound do owls make at night?",
          es: "¿Qué sonido hacen los búhos por la noche?",
          de: "Welchen Laut machen Eulen nachts?",
          nl: "Welk geluid maken uilen 's nachts?"
        },
        options: [
          { en: "Hoot", es: "Ulular", de: "Huu", nl: "Oehoe" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Squawk", es: "Graznido", de: "Krächzen", nl: "Krassen" },
          { en: "Tweet", es: "Pío", de: "Zwitschern", nl: "Kweetter" }
        ],
        correct: 0,
        explanation: {
          en: "Owls hoot to communicate with mates, establish territory, and locate other owls across long distances using their deep, resonant calls.",
          es: "Los búhos ululan para comunicarse con sus parejas, establecer territorio, y localizar a otros búhos a largas distancias usando sus llamadas profundas y resonantes.",
          de: "Eulen rufen, um mit Partnern zu kommunizieren, Territorium zu etablieren und andere Eulen über große Entfernungen mit ihren tiefen, resonanten Rufen zu lokalisieren.",
          nl: "Uilen roepen om te communiceren met partners, territorium te vestigen, en andere uilen over lange afstanden te lokaliseren met hun diepe, resonante roepen."
        }
      },
      {
        question: {
          en: "What sound do lions make?",
          es: "¿Qué sonido hacen los leones?",
          de: "Welchen Laut machen Löwen?",
          nl: "Welk geluid maken leeuwen?"
        },
        options: [
          { en: "Roar", es: "Rugir", de: "Brüllen", nl: "Brullen" },
          { en: "Purr", es: "Ronronear", de: "Schnurren", nl: "Spinnen" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" }
        ],
        correct: 0,
        explanation: {
          en: "Lions roar to communicate with their pride, mark territory, and intimidate rivals - their roar can be heard up to 5 miles away.",
          es: "Los leones rugen para comunicarse con su manada, marcar territorio, e intimidar a rivales - su rugido se puede oír hasta 8 km de distancia.",
          de: "Löwen brüllen, um mit ihrem Rudel zu kommunizieren, Territorium zu markieren und Rivalen einzuschüchtern - ihr Brüllen ist bis zu 8 km weit hörbar.",
          nl: "Leeuwen brullen om te communiceren met hun troep, territorium te markeren, en rivalen te intimideren - hun gebrul is tot 8 km ver te horen."
        }
      },
      {
        question: {
          en: "What sound do sheep make?",
          es: "¿Qué sonido hacen las ovejas?",
          de: "Welchen Laut machen Schafe?",
          nl: "Welk geluid maken schapen?"
        },
        options: [
          { en: "Baa", es: "Bee", de: "Bäh", nl: "Bè" },
          { en: "Moo", es: "Mu", de: "Muh", nl: "Boe" },
          { en: "Oink", es: "Oinc", de: "Oink", nl: "Knor" },
          { en: "Neigh", es: "Relinchar", de: "Wiehern", nl: "Hinniken" }
        ],
        correct: 0,
        explanation: {
          en: "Sheep bleat to communicate with their flock and lambs, especially when they're separated or calling for attention.",
          es: "Las ovejas balan para comunicarse con su rebaño y corderos, especialmente cuando están separadas o pidiendo atención.",
          de: "Schafe blöken, um mit ihrer Herde und ihren Lämmern zu kommunizieren, besonders wenn sie getrennt sind oder Aufmerksamkeit verlangen.",
          nl: "Schapen blaten om te communiceren met hun kudde en lammeren, vooral wanneer ze gescheiden zijn of om aandacht vragen."
        }
      },
      {
        question: {
          en: "What sound do horses make?",
          es: "¿Qué sonido hacen los caballos?",
          de: "Welchen Laut machen Pferde?",
          nl: "Welk geluid maken paarden?"
        },
        options: [
          { en: "Neigh", es: "Relinchar", de: "Wiehern", nl: "Hinniken" },
          { en: "Moo", es: "Mu", de: "Muh", nl: "Boe" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Quack", es: "Cuac", de: "Quak", nl: "Kwak" }
        ],
        correct: 0,
        explanation: {
          en: "Horses neigh to communicate with other horses, express excitement, and call to their handlers when they see them approaching.",
          es: "Los caballos relinchan para comunicarse con otros caballos, expresar emoción, y llamar a sus cuidadores cuando los ven acercarse.",
          de: "Pferde wiehern, um mit anderen Pferden zu kommunizieren, Aufregung auszudrücken und ihre Pfleger zu rufen, wenn sie sie näher kommen sehen.",
          nl: "Paarden hinniken om te communiceren met andere paarden, opwinding uit te drukken, en hun verzorgers te roepen wanneer ze hen zien naderen."
        }
      },
      {
        question: {
          en: "What sound do chickens make?",
          es: "¿Qué sonido hacen las gallinas?",
          de: "Welchen Laut machen Hühner?",
          nl: "Welk geluid maken kippen?"
        },
        options: [
          { en: "Cluck", es: "Cacarear", de: "Gackern", nl: "Tokken" },
          { en: "Moo", es: "Mu", de: "Muh", nl: "Boe" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Hiss", es: "Silbar", de: "Zischen", nl: "Sissen" }
        ],
        correct: 0,
        explanation: {
          en: "Chickens cluck to communicate with their chicks, signal danger, and express contentment when foraging for food.",
          es: "Las gallinas cacarean para comunicarse con sus polluelos, señalar peligro, y expresar satisfacción cuando buscan comida.",
          de: "Hühner gackern, um mit ihren Küken zu kommunizieren, Gefahr zu signalisieren und Zufriedenheit beim Futtersuchen auszudrücken.",
          nl: "Kippen tokken om te communiceren met hun kuikens, gevaar te signaleren, en tevredenheid uit te drukken bij het zoeken naar voedsel."
        }
      },
      {
        question: {
          en: "What sound do snakes make?",
          es: "¿Qué sonido hacen las serpientes?",
          de: "Welchen Laut machen Schlangen?",
          nl: "Welk geluid maken slangen?"
        },
        options: [
          { en: "Hiss", es: "Silbar", de: "Zischen", nl: "Sissen" },
          { en: "Roar", es: "Rugir", de: "Brüllen", nl: "Brullen" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" }
        ],
        correct: 0,
        explanation: {
          en: "Snakes hiss by forcing air through their glottis to warn predators and threats to stay away from them.",
          es: "Las serpientes silban forzando aire a través de su glotis para advertir a depredadores y amenazas que se alejen de ellas.",
          de: "Schlangen zischen, indem sie Luft durch ihre Stimmritze pressen, um Raubtiere und Bedrohungen zu warnen, sich von ihnen fernzuhalten.",
          nl: "Slangen sissen door lucht door hun glottis te persen om roofdieren en bedreigingen te waarschuwen om bij hen weg te blijven."
        }
      },
      {
        question: {
          en: "What sound do wolves make to communicate?",
          es: "¿Qué sonido hacen los lobos para comunicarse?",
          de: "Welchen Laut machen Wölfe zur Kommunikation?",
          nl: "Welk geluid maken wolven om te communiceren?"
        },
        options: [
          { en: "Howl", es: "Aullar", de: "Heulen", nl: "Huilen" },
          { en: "Meow", es: "Miau", de: "Miau", nl: "Miauw" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Quack", es: "Cuac", de: "Quak", nl: "Kwak" }
        ],
        correct: 0,
        explanation: {
          en: "Wolves howl to communicate with their pack over long distances, coordinate hunts, and establish territory boundaries.",
          es: "Los lobos aúllan para comunicarse con su manada a largas distancias, coordinar cazas, y establecer límites territoriales.",
          de: "Wölfe heulen, um mit ihrem Rudel über große Entfernungen zu kommunizieren, Jagden zu koordinieren und Territorialgrenzen zu etablieren.",
          nl: "Wolven huilen om te communiceren met hun roedel over lange afstanden, jachten te coördineren, en territoriumgrenzen vast te stellen."
        }
      },
      {
        question: {
          en: "What sound do elephants make?",
          es: "¿Qué sonido hacen los elefantes?",
          de: "Welchen Laut machen Elefanten?",
          nl: "Welk geluid maken olifanten?"
        },
        options: [
          { en: "Trumpet", es: "Berrear", de: "Trompeten", nl: "Trompetteren" },
          { en: "Roar", es: "Rugir", de: "Brüllen", nl: "Brullen" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Hiss", es: "Silbar", de: "Zischen", nl: "Sissen" }
        ],
        correct: 0,
        explanation: {
          en: "Elephants trumpet by forcing air through their trunk to communicate emotions, warn of danger, or call to other elephants.",
          es: "Los elefantes berrean forzando aire a través de su trompa para comunicar emociones, advertir del peligro, o llamar a otros elefantes.",
          de: "Elefanten trompeten, indem sie Luft durch ihren Rüssel pressen, um Emotionen zu kommunizieren, vor Gefahren zu warnen oder andere Elefanten zu rufen.",
          nl: "Olifanten trompetteren door lucht door hun slurf te persen om emoties te communiceren, voor gevaar te waarschuwen, of andere olifanten te roepen."
        }
      },
      {
        question: {
          en: "What sound do bees make when they fly?",
          es: "¿Qué sonido hacen las abejas cuando vuelan?",
          de: "Welchen Laut machen Bienen beim Fliegen?",
          nl: "Welk geluid maken bijen als ze vliegen?"
        },
        options: [
          { en: "Buzz", es: "Zumbar", de: "Summen", nl: "Zoemen" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Hoot", es: "Ulular", de: "Huu", nl: "Oehoe" },
          { en: "Roar", es: "Rugir", de: "Brüllen", nl: "Brullen" }
        ],
        correct: 0,
        explanation: {
          en: "Bees buzz because their wings beat incredibly fast (230 times per second) creating vibrations that produce the buzzing sound.",
          es: "Las abejas zumban porque sus alas baten increíblemente rápido (230 veces por segundo) creando vibraciones que producen el sonido zumbante.",
          de: "Bienen summen, weil ihre Flügel unglaublich schnell schlagen (230 Mal pro Sekunde) und Vibrationen erzeugen, die das summende Geräusch produzieren.",
          nl: "Bijen zoemen omdat hun vleugels ongelooflijk snel slaan (230 keer per seconde) en trillingen creeren die het zoemende geluid produceren."
        }
      },
      {
        question: {
          en: "What sound do frogs make near water?",
          es: "¿Qué sonido hacen las ranas cerca del agua?",
          de: "Welchen Laut machen Frösche in der Nähe von Wasser?",
          nl: "Welk geluid maken kikkers bij water?"
        },
        options: [
          { en: "Croak", es: "Croar", de: "Quaken", nl: "Kwaken" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Moo", es: "Mu", de: "Muh", nl: "Boe" }
        ],
        correct: 0,
        explanation: {
          en: "Frogs croak by inflating their vocal sacs to attract mates and establish territory, especially during mating season.",
          es: "Las ranas croan inflando sus sacos vocales para atraer parejas y establecer territorio, especialmente durante la época de apareamiento.",
          de: "Frösche quaken, indem sie ihre Schallsäcke aufblähen, um Partner anzulocken und Territorium zu etablieren, besonders während der Paarungszeit.",
          nl: "Kikkers kwaken door hun stemblaasjes op te blazen om partners aan te trekken en territorium te vestigen, vooral tijdens het paarseizoen."
        }
      },
      {
        question: {
          en: "What sound do roosters make in the morning?",
          es: "¿Qué sonido hacen los gallos por la mañana?",
          de: "Welchen Laut machen Hähne am Morgen?",
          nl: "Welk geluid maken hanen in de ochtend?"
        },
        options: [
          { en: "Cock-a-doodle-doo", es: "Quiquiriquí", de: "Kikeriki", nl: "Kukeleku" },
          { en: "Moo", es: "Mu", de: "Muh", nl: "Boe" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Hiss", es: "Silbar", de: "Zischen", nl: "Sissen" }
        ],
        correct: 0,
        explanation: {
          en: "Roosters crow to announce dawn, establish territory, and show their dominance using their loud, distinctive call that can be heard over long distances.",
          es: "Los gallos cantan para anunciar el amanecer, establecer territorio, y mostrar su dominio usando su llamada fuerte y distintiva que se puede oír a largas distancias.",
          de: "Hähne krähen, um die Morgendämmerung anzukündigen, Territorium zu etablieren und ihre Dominanz mit ihrem lauten, markanten Ruf zu zeigen, der über weite Entfernungen zu hören ist.",
          nl: "Hanen kraaien om de dageraad aan te kondigen, territorium te vestigen, en hun dominantie te tonen met hun luide, kenmerkende roep die over lange afstanden te horen is."
        }
      },
      {
        question: {
          en: "What sound do dolphins make underwater?",
          es: "¿Qué sonido hacen los delfines bajo el agua?",
          de: "Welchen Laut machen Delfine unter Wasser?",
          nl: "Welk geluid maken dolfijnen onder water?"
        },
        options: [
          { en: "Click and whistle", es: "Clic y silbido", de: "Klicken und Pfeifen", nl: "Klikken en fluiten" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Roar", es: "Rugir", de: "Brüllen", nl: "Brullen" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" }
        ],
        correct: 0,
        explanation: {
          en: "Dolphins make clicking and whistling sounds for echolocation and communication, with each dolphin having its unique signature whistle.",
          es: "Los delfines hacen sonidos de clic y silbidos para ecolocalización y comunicación, con cada delfín teniendo su silbido único distintivo.",
          de: "Delfine machen Klick- und Pfeifgeräusche für Echoortung und Kommunikation, wobei jeder Delfin seinen einzigartigen charakteristischen Pfiff hat.",
          nl: "Dolfijnen maken klik- en fluitgeluiden voor echolocatie en communicatie, waarbij elke dolfijn zijn unieke kenmerkende fluitje heeft."
        }
      },
      {
        question: {
          en: "What sound do goats make?",
          es: "¿Qué sonido hacen las cabras?",
          de: "Welchen Laut machen Ziegen?",
          nl: "Welk geluid maken geiten?"
        },
        options: [
          { en: "Bleat", es: "Balar", de: "Meckern", nl: "Mekkeren" },
          { en: "Moo", es: "Mu", de: "Muh", nl: "Boe" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" }
        ],
        correct: 0,
        explanation: {
          en: "Goats bleat to communicate with their kids, call for attention, and express emotions like hunger or distress.",
          es: "Las cabras balan para comunicarse with sus crías, pedir atención, y expresar emociones como hambre o angustia.",
          de: "Ziegen meckern, um mit ihren Kitzen zu kommunizieren, Aufmerksamkeit zu fordern und Emotionen wie Hunger oder Not auszudrücken.",
          nl: "Geiten mekkeren om te communiceren met hun geitjes, aandacht te vragen, en emoties zoals honger of nood uit te drukken."
        }
      },
      {
        question: {
          en: "What sound do crickets make at night?",
          es: "¿Qué sonido hacen los grillos por la noche?",
          de: "Welchen Laut machen Grillen nachts?",
          nl: "Welk geluid maken krekels 's nachts?"
        },
        options: [
          { en: "Chirp", es: "Chirriar", de: "Zirpen", nl: "Tjirpen" },
          { en: "Buzz", es: "Zumbar", de: "Summen", nl: "Zoemen" },
          { en: "Hoot", es: "Ulular", de: "Huu", nl: "Oehoe" },
          { en: "Roar", es: "Rugir", de: "Brüllen", nl: "Brullen" }
        ],
        correct: 0,
        explanation: {
          en: "Crickets chirp by rubbing their wings together to attract mates and communicate, with the frequency often indicating the temperature.",
          es: "Los grillos chirrían frotando sus alas para atraer parejas y comunicarse, con la frecuencia a menudo indicando la temperatura.",
          de: "Grillen zirpen, indem sie ihre Flügel aneinander reiben, um Partner anzulocken und zu kommunizieren, wobei die Frequenz oft die Temperatur anzeigt.",
          nl: "Krekels tjirpen door hun vleugels tegen elkaar te wrijven om partners aan te trekken en te communiceren, waarbij de frequentie vaak de temperatuur aangeeft."
        }
      },
      {
        question: {
          en: "What sound do mice make?",
          es: "¿Qué sonido hacen los ratones?",
          de: "Welchen Laut machen Mäuse?",
          nl: "Welk geluid maken muizen?"
        },
        options: [
          { en: "Squeak", es: "Chillar", de: "Quietschen", nl: "Piepen" },
          { en: "Roar", es: "Rugir", de: "Brüllen", nl: "Brullen" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Moo", es: "Mu", de: "Muh", nl: "Boe" }
        ],
        correct: 0,
        explanation: {
          en: "Mice squeak using high-pitched vocalizations to communicate with other mice, especially when they're young or in distress.",
          es: "Los ratones chillan usando vocalizaciones agudas para comunicarse con otros ratones, especialmente cuando son jóvenes o en angustia.",
          de: "Mäuse quietschen mit hohen Lauten, um mit anderen Mäusen zu kommunizieren, besonders wenn sie jung sind oder in Not.",
          nl: "Muizen piepen met hoge geluidjes om te communiceren met andere muizen, vooral wanneer ze jong zijn of in nood."
        }
      },
      {
        question: {
          en: "What sound do turkeys make?",
          es: "¿Qué sonido hacen los pavos?",
          de: "Welchen Laut machen Truthähne?",
          nl: "Welk geluid maken kalkoenen?"
        },
        options: [
          { en: "Gobble", es: "Gluglutear", de: "Kollern", nl: "Klokkelen" },
          { en: "Quack", es: "Cuac", de: "Quak", nl: "Kwak" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Hiss", es: "Silbar", de: "Zischen", nl: "Sissen" }
        ],
        correct: 0,
        explanation: {
          en: "Turkeys gobble to communicate with their flock, establish dominance, and attract mates using their distinctive loud call.",
          es: "Los pavos gluglutean para comunicarse con su bandada, establecer dominio, y atraer parejas usando su llamada fuerte distintiva.",
          de: "Truthähne kollern, um mit ihrer Herde zu kommunizieren, Dominanz zu etablieren und Partner mit ihrem charakteristischen lauten Ruf anzulocken.",
          nl: "Kalkoenen klokkelen om te communiceren met hun troep, dominantie te vestigen, en partners aan te trekken met hun kenmerkende luide roep."
        }
      },
      {
        question: {
          en: "What sound do woodpeckers make?",
          es: "¿Qué sonido hacen los pájaros carpinteros?",
          de: "Welchen Laut machen Spechte?",
          nl: "Welk geluid maken spechten?"
        },
        options: [
          { en: "Tap-tap-tap", es: "Toc-toc-toc", de: "Klopf-klopf-klopf", nl: "Tik-tik-tik" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Hoot", es: "Ulular", de: "Huu", nl: "Oehoe" },
          { en: "Quack", es: "Cuac", de: "Quak", nl: "Kwak" }
        ],
        correct: 0,
        explanation: {
          en: "Woodpeckers tap rapidly on trees to find insects, communicate with mates, and mark their territory using their strong beaks.",
          es: "Los pájaros carpinteros golpetean rápidamente en los árboles para encontrar insectos, comunicarse con parejas, y marcar su territorio usando sus picos fuertes.",
          de: "Spechte klopfen schnell an Bäume, um Insekten zu finden, mit Partnern zu kommunizieren und ihr Territorium mit ihren starken Schnäbeln zu markieren.",
          nl: "Spechten tikken snel op bomen om insecten te vinden, te communiceren met partners, en hun territorium te markeren met hun sterke snavels."
        }
      },
      {
        question: {
          en: "What sound do seagulls make at the beach?",
          es: "¿Qué sonido hacen las gaviotas en la playa?",
          de: "Welchen Laut machen Möwen am Strand?",
          nl: "Welk geluid maken zeemeeuwen op het strand?"
        },
        options: [
          { en: "Squawk", es: "Graznido", de: "Krächzen", nl: "Krassen" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Hoot", es: "Ulular", de: "Huu", nl: "Oehoe" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" }
        ],
        correct: 0,
        explanation: {
          en: "Seagulls squawk loudly to communicate with their flock, defend territory, and beg for food from humans at the beach.",
          es: "Las gaviotas graznan fuertemente para comunicarse con su bandada, defender territorio, y pedir comida a los humanos en la playa.",
          de: "Möwen krächzen laut, um mit ihrer Herde zu kommunizieren, Territorium zu verteidigen und Menschen am Strand um Futter zu bitten.",
          nl: "Zeemeeuwen krassen luid om te communiceren met hun troep, territorium te verdedigen, en voedsel te bedelen van mensen op het strand."
        }
      },
      {
        question: {
          en: "What sound do donkeys make?",
          es: "¿Qué sonido hacen los burros?",
          de: "Welchen Laut machen Esel?",
          nl: "Welk geluid maken ezels?"
        },
        options: [
          { en: "Bray", es: "Rebuznar", de: "I-Ah", nl: "Balken" },
          { en: "Neigh", es: "Relinchar", de: "Wiehern", nl: "Hinniken" },
          { en: "Moo", es: "Mu", de: "Muh", nl: "Boe" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" }
        ],
        correct: 0,
        explanation: {
          en: "Donkeys bray with their distinctive 'hee-haw' sound to communicate with other donkeys and express emotions like excitement or distress.",
          es: "Los burros rebuznan con su distintivo sonido 'hee-haw' para comunicarse con otros burros y expresar emociones como emoción o angustia.",
          de: "Esel rufen mit ihrem charakteristischen 'I-Ah' Laut, um mit anderen Eseln zu kommunizieren und Emotionen wie Aufregung oder Not auszudrücken.",
          nl: "Ezels balken met hun kenmerkende 'hee-haw' geluid om te communiceren met andere ezels en emoties zoals opwinding of nood uit te drukken."
        }
      },
      {
        question: {
          en: "What sound do bears make when angry?",
          es: "¿Qué sonido hacen los osos cuando están enojados?",
          de: "Welchen Laut machen Bären wenn sie wütend sind?",
          nl: "Welk geluid maken beren als ze boos zijn?"
        },
        options: [
          { en: "Growl", es: "Gruñir", de: "Brummen", nl: "Grommen" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Purr", es: "Ronronear", de: "Schnurren", nl: "Spinnen" },
          { en: "Squeak", es: "Chillar", de: "Quietschen", nl: "Piepen" }
        ],
        correct: 0,
        explanation: {
          en: "Bears growl as a warning when they feel threatened, angry, or want to establish dominance using their deep, rumbling voice.",
          es: "Los osos gruñen como advertencia cuando se sienten amenazados, enojados, o quieren establecer dominio usando su voz profunda y retumbante.",
          de: "Bären brummen als Warnung, wenn sie sich bedroht oder wütend fühlen oder Dominanz mit ihrer tiefen, grummelnden Stimme etablieren wollen.",
          nl: "Beren grommen als waarschuwing wanneer ze zich bedreigd of boos voelen, of dominantie willen vestigen met hun diepe, rommelende stem."
        }
      },
      {
        question: {
          en: "What sound do peacocks make?",
          es: "¿Qué sonido hacen los pavos reales?",
          de: "Welchen Laut machen Pfauen?",
          nl: "Welk geluid maken pauwen?"
        },
        options: [
          { en: "Scream", es: "Gritar", de: "Schreien", nl: "Gillen" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Quack", es: "Cuac", de: "Quak", nl: "Kwak" },
          { en: "Hoot", es: "Ulular", de: "Huu", nl: "Oehoe" }
        ],
        correct: 0,
        explanation: {
          en: "Peacocks scream loudly to attract mates during breeding season and warn of potential predators or threats in their territory.",
          es: "Los pavos reales gritan fuertemente para atraer parejas durante la época de reproducción y advertir de posibles depredadores o amenazas en su territorio.",
          de: "Pfauen schreien laut, um während der Brutzeit Partner anzulocken und vor möglichen Raubtieren oder Bedrohungen in ihrem Territorium zu warnen.",
          nl: "Pauwen gillen luid om partners aan te trekken tijdens het broedseizoen en te waarschuwen voor mogelijke roofdieren of bedreigingen in hun territorium."
        }
      },
      {
        question: {
          en: "What sound do monkeys make in trees?",
          es: "¿Qué sonido hacen los monos en los árboles?",
          de: "Welchen Laut machen Affen in Bäumen?",
          nl: "Welk geluid maken apen in bomen?"
        },
        options: [
          { en: "Chatter", es: "Charlar", de: "Schnattern", nl: "Kletsen" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Moo", es: "Mu", de: "Muh", nl: "Boe" },
          { en: "Hiss", es: "Silbar", de: "Zischen", nl: "Sissen" }
        ],
        correct: 0,
        explanation: {
          en: "Monkeys chatter using various vocalizations to communicate with their troop, establish social bonds, and warn of dangers.",
          es: "Los monos charlan usando varias vocalizaciones para comunicarse con su tropa, establecer lazos sociales, y advertir de peligros.",
          de: "Affen schnattern mit verschiedenen Lautäußerungen, um mit ihrer Gruppe zu kommunizieren, soziale Bindungen aufzubauen und vor Gefahren zu warnen.",
          nl: "Apen kletsen met verschillende geluidjes om te communiceren met hun troep, sociale banden op te bouwen, en te waarschuwen voor gevaren."
        }
      },
      {
        question: {
          en: "What sound do seals make on rocks?",
          es: "¿Qué sonido hacen las focas en las rocas?",
          de: "Welchen Laut machen Robben auf Felsen?",
          nl: "Welk geluid maken zeehonden op rotsen?"
        },
        options: [
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Moo", es: "Mu", de: "Muh", nl: "Boe" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Hoot", es: "Ulular", de: "Huu", nl: "Oehoe" }
        ],
        correct: 0,
        explanation: {
          en: "Seals bark loudly to communicate with their colony, defend territory, and call to their pups from great distances.",
          es: "Las focas ladran fuertemente para comunicarse con su colonia, defender territorio, y llamar a sus crías desde grandes distancias.",
          de: "Robben bellen laut, um mit ihrer Kolonie zu kommunizieren, Territorium zu verteidigen und ihre Jungen aus großen Entfernungen zu rufen.",
          nl: "Zeehonden blaffen luid om te communiceren met hun kolonie, territorium te verdedigen, en hun jongen van grote afstanden te roepen."
        }
      },
      {
        question: {
          en: "What sound do geese make?",
          es: "¿Qué sonido hacen los gansos?",
          de: "Welchen Laut machen Gänse?",
          nl: "Welk geluid maken ganzen?"
        },
        options: [
          { en: "Honk", es: "Graznar", de: "Schnattern", nl: "Kakelen" },
          { en: "Quack", es: "Cuac", de: "Quak", nl: "Kwak" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" }
        ],
        correct: 0,
        explanation: {
          en: "Geese honk to communicate with their flock during migration and to maintain contact when flying in formation.",
          es: "Los gansos graznan para comunicarse con su bandada durante la migración y mantener contacto cuando vuelan en formación.",
          de: "Gänse schnattern, um während der Migration mit ihrer Herde zu kommunizieren und den Kontakt beim Fliegen in Formation zu halten.",
          nl: "Ganzen kakelen om te communiceren met hun troep tijdens migratie en contact te houden bij het vliegen in formatie."
        }
      },
      {
        question: {
          en: "What sound do parrots make when they copy humans?",
          es: "¿Qué sonido hacen los loros cuando copian a los humanos?",
          de: "Welchen Laut machen Papageien wenn sie Menschen nachahmen?",
          nl: "Welk geluid maken papegaaien als ze mensen nabootsen?"
        },
        options: [
          { en: "Talk", es: "Hablar", de: "Sprechen", nl: "Praten" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Hoot", es: "Ulular", de: "Huu", nl: "Oehoe" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" }
        ],
        correct: 0,
        explanation: {
          en: "Parrots can mimic human speech by copying sounds they hear repeatedly, using their specialized vocal organ called a syrinx.",
          es: "Los loros pueden imitar el habla humana copiando sonidos que escuchan repetidamente, usando su órgano vocal especializado llamado siringe.",
          de: "Papageien können menschliche Sprache nachahmen, indem sie Geräusche kopieren, die sie wiederholt hören, mit ihrem spezialisierten Stimmorgaan namens Syrinx.",
          nl: "Papegaaien kunnen menselijke spraak nabootsen door geluiden te kopiëren die ze herhaaldelijk horen, met hun gespecialiseerde stemorgaan genaamd syrinx."
        }
      },
      {
        question: {
          en: "What sound do crows make?",
          es: "¿Qué sonido hacen los cuervos?",
          de: "Welchen Laut machen Krähen?",
          nl: "Welk geluid maken kraaien?"
        },
        options: [
          { en: "Caw", es: "Graznar", de: "Krächzen", nl: "Krassen" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Hoot", es: "Ulular", de: "Huu", nl: "Oehoe" },
          { en: "Tweet", es: "Pío", de: "Zwitschern", nl: "Kweetter" }
        ],
        correct: 0,
        explanation: {
          en: "Crows caw to communicate with their flock, warn of dangers, and coordinate group activities like mobbing predators.",
          es: "Los cuervos graznan para comunicarse con su bandada, advertir de peligros, y coordinar actividades grupales como el acoso a depredadores.",
          de: "Krähen krächzen, um mit ihrer Herde zu kommunizieren, vor Gefahren zu warnen und Gruppenaktivitäten wie das Mobbing von Raubtieren zu koordinieren.",
          nl: "Kraaien krassen om te communiceren met hun troep, te waarschuwen voor gevaren, en groepsactiviteiten zoals het pesten van roofdieren te coördineren."
        }
      },
      {
        question: {
          en: "What sound do whales make to communicate?",
          es: "¿Qué sonido hacen las ballenas para comunicarse?",
          de: "Welchen Laut machen Wale zur Kommunikation?",
          nl: "Welk geluid maken walvissen om te communiceren?"
        },
        options: [
          { en: "Sing", es: "Cantar", de: "Singen", nl: "Zingen" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Hiss", es: "Silbar", de: "Zischen", nl: "Sissen" }
        ],
        correct: 0,
        explanation: {
          en: "Whales sing complex songs to communicate over vast ocean distances, find mates, and navigate using sound waves.",
          es: "Las ballenas cantan canciones complejas para comunicarse a través de vastas distancias oceánicas, encontrar parejas, y navegar usando ondas sonoras.",
          de: "Wale singen komplexe Lieder, um über weite Ozeanentfernungen zu kommunizieren, Partner zu finden und mit Schallwellen zu navigieren.",
          nl: "Walvissen zingen complexe liederen om te communiceren over grote oceaanafstanden, partners te vinden, en te navigeren met geluidsgolven."
        }
      },
      {
        question: {
          en: "What sound do mosquitoes make when they fly?",
          es: "¿Qué sonido hacen los mosquitos cuando vuelan?",
          de: "Welchen Laut machen Mücken beim Fliegen?",
          nl: "Welk geluid maken muggen als ze vliegen?"
        },
        options: [
          { en: "Whine", es: "Zumbar", de: "Summen", nl: "Zoemen" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Hoot", es: "Ulular", de: "Huu", nl: "Oehoe" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" }
        ],
        correct: 0,
        explanation: {
          en: "Mosquitoes whine due to their wings beating extremely fast (up to 800 times per second) creating high-pitched vibrations.",
          es: "Los mosquitos zumban debido a que sus alas baten extremadamente rápido (hasta 800 veces por segundo) creando vibraciones agudas.",
          de: "Mücken summen, weil ihre Flügel extrem schnell schlagen (bis zu 800 Mal pro Sekunde) und hochfrequente Vibrationen erzeugen.",
          nl: "Muggen zoemen omdat hun vleugels extreem snel slaan (tot 800 keer per seconde) en hoge trillingen creëren."
        }
      },
      {
        question: {
          en: "What sound do tigers make?",
          es: "¿Qué sonido hacen los tigres?",
          de: "Welchen Laut machen Tiger?",
          nl: "Welk geluid maken tijgers?"
        },
        options: [
          { en: "Roar", es: "Rugir", de: "Brüllen", nl: "Brullen" },
          { en: "Purr", es: "Ronronear", de: "Schnurren", nl: "Spinnen" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" }
        ],
        correct: 0,
        explanation: {
          en: "Tigers roar to mark territory, communicate with other tigers, and intimidate rivals - their roar can be heard 2 miles away.",
          es: "Los tigres rugen para marcar territorio, comunicarse con otros tigres, e intimidar a rivales - su rugido se puede oír a 3 km de distancia.",
          de: "Tiger brüllen, um Territorium zu markieren, mit anderen Tigern zu kommunizieren und Rivalen einzuschüchtern - ihr Brüllen ist 3 km weit hörbar.",
          nl: "Tijgers brullen om territorium te markeren, te communiceren met andere tijgers, en rivalen te intimideren - hun gebrul is 3 km ver te horen."
        }
      },
      {
        question: {
          en: "What sound do hyenas make when they're excited?",
          es: "¿Qué sonido hacen las hienas cuando están emocionadas?",
          de: "Welchen Laut machen Hyänen wenn sie aufgeregt sind?",
          nl: "Welk geluid maken hyena's als ze opgewonden zijn?"
        },
        options: [
          { en: "Laugh", es: "Reír", de: "Lachen", nl: "Lachen" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Hoot", es: "Ulular", de: "Huu", nl: "Oehoe" }
        ],
        correct: 0,
        explanation: {
          en: "Hyenas laugh when excited or during social interactions, using this distinctive sound to communicate with their clan.",
          es: "Las hienas ríen cuando están emocionadas o durante interacciones sociales, usando este sonido distintivo para comunicarse con su clan.",
          de: "Hyänen lachen, wenn sie aufgeregt sind oder während sozialer Interaktionen, und nutzen diesen charakteristischen Laut, um mit ihrem Clan zu kommunizieren.",
          nl: "Hyena's lachen wanneer ze opgewonden zijn of tijdens sociale interacties, waarbij ze dit kenmerkende geluid gebruiken om te communiceren met hun clan."
        }
      },
      {
        question: {
          en: "What sound do baby birds make when hungry?",
          es: "¿Qué sonido hacen los pájaros bebé cuando tienen hambre?",
          de: "Welchen Laut machen Vogelbabys wenn sie hungrig sind?",
          nl: "Welk geluid maken baby vogels als ze honger hebben?"
        },
        options: [
          { en: "Peep", es: "Pío", de: "Piepen", nl: "Piepen" },
          { en: "Roar", es: "Rugir", de: "Brüllen", nl: "Brullen" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Hiss", es: "Silbar", de: "Zischen", nl: "Sissen" }
        ],
        correct: 0,
        explanation: {
          en: "Baby birds peep loudly when hungry to get their parents' attention and signal they need food.",
          es: "Los pájaros bebé pían fuertemente cuando tienen hambre para llamar la atención de sus padres y señalar que necesitan comida.",
          de: "Vogelbabys piepen laut, wenn sie hungrig sind, um die Aufmerksamkeit ihrer Eltern zu erlangen und zu signalisieren, dass sie Futter brauchen.",
          nl: "Baby vogels piepen luid wanneer ze honger hebben om de aandacht van hun ouders te krijgen en te signaleren dat ze voedsel nodig hebben."
        }
      },
      {
        question: {
          en: "What sound do grasshoppers make by rubbing their legs?",
          es: "¿Qué sonido hacen los saltamontes frotando sus patas?",
          de: "Welchen Laut machen Grashüpfer durch Beinreiben?",
          nl: "Welk geluid maken sprinkhanen door hun poten te wrijven?"
        },
        options: [
          { en: "Chirp", es: "Chirriar", de: "Zirpen", nl: "Tjirpen" },
          { en: "Buzz", es: "Zumbar", de: "Summen", nl: "Zoemen" },
          { en: "Hoot", es: "Ulular", de: "Huu", nl: "Oehoe" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" }
        ],
        correct: 0,
        explanation: {
          en: "Grasshoppers chirp by rubbing their hind legs against their wings to attract mates and communicate with other grasshoppers.",
          es: "Los saltamontes chirrían frotando sus patas traseras contra sus alas para atraer parejas y comunicarse con otros saltamontes.",
          de: "Grashüpfer zirpen, indem sie ihre Hinterbeine gegen ihre Flügel reiben, um Partner anzulocken und mit anderen Grashüpfern zu kommunizieren.",
          nl: "Sprinkhanen tjirpen door hun achterpoten tegen hun vleugels te wrijven om partners aan te trekken en te communiceren met andere sprinkhanen."
        }
      },
      {
        question: {
          en: "What sound do rattlesnakes make as a warning?",
          es: "¿Qué sonido hacen las serpientes de cascabel como advertencia?",
          de: "Welchen Laut machen Klapperschlangen als Warnung?",
          nl: "Welk geluid maken ratelslangen als waarschuwing?"
        },
        options: [
          { en: "Rattle", es: "Cascabelear", de: "Rasseln", nl: "Ratelen" },
          { en: "Hiss", es: "Silbar", de: "Zischen", nl: "Sissen" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" }
        ],
        correct: 0,
        explanation: {
          en: "Rattlesnakes rattle their tail segments as a warning to predators and threats to stay away before they strike.",
          es: "Las serpientes de cascabel hacen sonar los segmentos de su cola como advertencia a depredadores y amenazas para que se alejen antes de atacar.",
          de: "Klapperschlangen rasseln mit ihren Schwanzsegmenten als Warnung an Raubtiere und Bedrohungen, sich fernzuhalten, bevor sie zuschlagen.",
          nl: "Ratelslangen ratelen met hun staartdelen als waarschuwing aan roofdieren en bedreigingen om weg te blijven voordat ze toeslaan."
        }
      },
      {
        question: {
          en: "What sound do flamingos make?",
          es: "¿Qué sonido hacen los flamencos?",
          de: "Welchen Laut machen Flamingos?",
          nl: "Welk geluid maken flamingo's?"
        },
        options: [
          { en: "Honk", es: "Graznar", de: "Schnattern", nl: "Toteren" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Quack", es: "Cuac", de: "Quak", nl: "Kwak" },
          { en: "Hoot", es: "Ulular", de: "Huu", nl: "Oehoe" }
        ],
        correct: 0,
        explanation: {
          en: "Flamingos honk to communicate with their flock, especially during feeding and when flying in groups.",
          es: "Los flamencos graznan para comunicarse con su bandada, especialmente durante la alimentación y cuando vuelan en grupos.",
          de: "Flamingos schnattern, um mit ihrer Herde zu kommunizieren, besonders während der Fütterung und beim Fliegen in Gruppen.",
          nl: "Flamingo's toteren om te communiceren met hun troep, vooral tijdens het voeden en bij het vliegen in groepen."
        }
      },
      {
        question: {
          en: "What sound do squirrels make when alarmed?",
          es: "¿Qué sonido hacen las ardillas cuando están alarmadas?",
          de: "Welchen Laut machen Eichhörnchen wenn sie alarmiert sind?",
          nl: "Welk geluid maken eekhoorns als ze gealarmeerd zijn?"
        },
        options: [
          { en: "Chatter", es: "Charlar", de: "Schnattern", nl: "Kletteren" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Moo", es: "Mu", de: "Muh", nl: "Boe" },
          { en: "Hiss", es: "Silbar", de: "Zischen", nl: "Sissen" }
        ],
        correct: 0,
        explanation: {
          en: "Squirrels chatter rapidly when alarmed to warn other squirrels of predators or territorial threats.",
          es: "Las ardillas charlan rápidamente cuando están alarmadas para advertir a otras ardillas de depredadores o amenazas territoriales.",
          de: "Eichhörnchen schnattern schnell, wenn sie alarmiert sind, um andere Eichhörnchen vor Raubtieren oder territorialen Bedrohungen zu warnen.",
          nl: "Eekhoorns kletteren snel wanneer ze gealarmeerd zijn om andere eekhoorns te waarschuwen voor roofdieren of territoriumdreigingen."
        }
      },
      {
        question: {
          en: "What sound do llamas make?",
          es: "¿Qué sonido hacen las llamas?",
          de: "Welchen Laut machen Lamas?",
          nl: "Welk geluid maken lama's?"
        },
        options: [
          { en: "Hum", es: "Tararear", de: "Summen", nl: "Hummen" },
          { en: "Neigh", es: "Relinchar", de: "Wiehern", nl: "Hinniken" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" }
        ],
        correct: 0,
        explanation: {
          en: "Llamas hum softly to communicate contentment and social bonding with their herd members.",
          es: "Las llamas tararean suavemente para comunicar satisfacción y lazos sociales con los miembros de su rebaño.",
          de: "Lamas summen leise, um Zufriedenheit und soziale Bindungen mit ihren Herdenmitgliedern zu kommunizieren.",
          nl: "Lama's hummen zacht om tevredenheid en sociale banden met hun kuddeleden te communiceren."
        }
      },
      {
        question: {
          en: "What sound do penguins make to their chicks?",
          es: "¿Qué sonido hacen los pingüinos a sus crías?",
          de: "Welchen Laut machen Pinguine zu ihren Küken?",
          nl: "Welk geluid maken pinguïns naar hun kuikens?"
        },
        options: [
          { en: "Trumpet call", es: "Llamada de trompeta", de: "Trompetenruf", nl: "Trompetroep" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Quack", es: "Cuac", de: "Quak", nl: "Kwak" }
        ],
        correct: 0,
        explanation: {
          en: "Penguins make trumpet-like calls to locate and communicate with their chicks among thousands of other penguins in the colony.",
          es: "Los pingüinos hacen llamadas como trompeta para localizar y comunicarse con sus crías entre miles de otros pingüinos en la colonia.",
          de: "Pinguine machen trompenartige Rufe, um ihre Küken unter Tausenden von anderen Pinguinen in der Kolonie zu lokalisieren und mit ihnen zu kommunizieren.",
          nl: "Pinguïns maken trompetachtige roepen om hun kuikens te lokaliseren en ermee te communiceren tussen duizenden andere pinguïns in de kolonie."
        }
      },
      {
        question: {
          en: "What sound do fish make underwater?",
          es: "¿Qué sonido hacen los peces bajo el agua?",
          de: "Welchen Laut machen Fische unter Wasser?",
          nl: "Welk geluid maken vissen onder water?"
        },
        options: [
          { en: "Usually no sound (silent)", es: "Generalmente sin sonido (silencioso)", de: "Normalerweise kein Laut (still)", nl: "Meestal geen geluid (stil)" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Roar", es: "Rugir", de: "Brüllen", nl: "Brullen" }
        ],
        correct: 0,
        explanation: {
          en: "Most fish are silent underwater, though some species can make sounds by grinding their teeth or vibrating their swim bladders.",
          es: "La mayoría de los peces son silenciosos bajo el agua, aunque algunas especies pueden hacer sonidos rechinar sus dientes o vibrando sus vejigas natatorias.",
          de: "Die meisten Fische sind unter Wasser still, obwohl einige Arten Geräusche machen können, indem sie ihre Zähne knirschen oder ihre Schwimmblasen vibrieren lassen.",
          nl: "De meeste vissen zijn stil onder water, hoewel sommige soorten geluiden kunnen maken door hun tanden te knarsen of hun zwemblazen te laten trillen."
        }
      },
      {
        question: {
          en: "What sound do baby elephants make?",
          es: "¿Qué sonido hacen los elefantes bebé?",
          de: "Welchen Laut machen Elefantenbabys?",
          nl: "Welk geluid maken baby olifanten?"
        },
        options: [
          { en: "Squeak", es: "Chillar", de: "Quietschen", nl: "Piepen" },
          { en: "Roar", es: "Rugir", de: "Brüllen", nl: "Brullen" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" }
        ],
        correct: 0,
        explanation: {
          en: "Baby elephants squeak with high-pitched sounds to call their mothers and express needs until their voices deepen with age.",
          es: "Los elefantes bebé chillan con sonidos agudos para llamar a sus madres y expresar necesidades hasta que sus voces se vuelven más profundas con la edad.",
          de: "Elefantenbabys quietschen mit hohen Tönen, um ihre Mütter zu rufen und Bedürfnisse auszudrücken, bis ihre Stimmen mit dem Alter tiefer werden.",
          nl: "Baby olifanten piepen met hoge geluiden om hun moeders te roepen en behoeften uit te drukken totdat hun stemmen dieper worden met de leeftijd."
        }
      },
      {
        question: {
          en: "What sound do koalas make when communicating?",
          es: "¿Qué sonido hacen los koalas cuando se comunican?",
          de: "Welchen Laut machen Koalas bei der Kommunikation?",
          nl: "Welk geluid maken koala's bij communiceren?"
        },
        options: [
          { en: "Grunt", es: "Gruñir", de: "Grunzen", nl: "Knorren" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Hiss", es: "Silbar", de: "Zischen", nl: "Sissen" }
        ],
        correct: 0,
        explanation: {
          en: "Koalas grunt softly to communicate with other koalas, especially mothers calling to their joeys in the eucalyptus trees.",
          es: "Los koalas gruñen suavemente para comunicarse con otros koalas, especialmente las madres llamando a sus crías en los árboles de eucalipto.",
          de: "Koalas grunzen leise, um mit anderen Koalas zu kommunizieren, besonders Mütter, die ihre Jungen in den Eukalyptusbäumen rufen.",
          nl: "Koala's knorren zacht om te communiceren met andere koala's, vooral moeders die hun jongen roepen in de eucalyptusbomen."
        }
      },
      {
        question: {
          en: "What sound do hamsters make when happy?",
          es: "¿Qué sonido hacen los hámsters cuando están felices?",
          de: "Welchen Laut machen Hamster wenn sie glücklich sind?",
          nl: "Welk geluid maken hamsters als ze blij zijn?"
        },
        options: [
          { en: "Purr or squeak softly", es: "Ronronear o chillar suavemente", de: "Schnurren oder leise quietschen", nl: "Zacht spinnen of piepen" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Roar", es: "Rugir", de: "Brüllen", nl: "Brullen" },
          { en: "Hoot", es: "Ulular", de: "Huu", nl: "Oehoe" }
        ],
        correct: 0,
        explanation: {
          en: "Happy hamsters make soft purring or gentle squeaking sounds to express contentment, especially when being petted or eating.",
          es: "Los hámsters felices hacen sonidos suaves de ronroneo o chillidos gentiles para expresar satisfacción, especialmente cuando los acarician o comen.",
          de: "Glückliche Hamster machen sanfte Schnurr- oder leise Quietschgeräusche, um Zufriedenheit auszudrücken, besonders beim Streicheln oder Fressen.",
          nl: "Blije hamsters maken zachte spin- of zachte piepgeluiden om tevredenheid uit te drukken, vooral wanneer ze geaaid worden of eten."
        }
      },
      {
        question: {
          en: "What sound do foxes make?",
          es: "¿Qué sonido hacen los zorros?",
          de: "Welchen Laut machen Füchse?",
          nl: "Welk geluid maken vossen?"
        },
        options: [
          { en: "Bark and yelp", es: "Ladrar y aullar", de: "Bellen und jaulen", nl: "Blaffen en janken" },
          { en: "Moo", es: "Mu", de: "Muh", nl: "Boe" },
          { en: "Chirp", es: "Pío", de: "Piep", nl: "Tjilp" },
          { en: "Hiss", es: "Silbar", de: "Zischen", nl: "Sissen" }
        ],
        correct: 0,
        explanation: {
          en: "Foxes bark and yelp to communicate with their family, warn of danger, and call to their kits using varied vocalizations.",
          es: "Los zorros ladran y aúllan para comunicarse con su familia, advertir del peligro, y llamar a sus crías usando vocalizaciones variadas.",
          de: "Füchse bellen und jaulen, um mit ihrer Familie zu kommunizieren, vor Gefahr zu warnen und ihre Jungen mit verschiedenen Lautäußerungen zu rufen.",
          nl: "Vossen blaffen en janken om te communiceren met hun familie, te waarschuwen voor gevaar, en hun jongen te roepen met gevarieerde geluidjes."
        }
      },
      {
        question: {
          en: "What sound do baby ducks make?",
          es: "¿Qué sonido hacen los patitos bebé?",
          de: "Welchen Laut machen Entenküken?",
          nl: "Welk geluid maken baby eendjes?"
        },
        options: [
          { en: "Peep", es: "Pío", de: "Piep", nl: "Piep" },
          { en: "Quack", es: "Cuac", de: "Quak", nl: "Kwak" },
          { en: "Bark", es: "Ladrar", de: "Bellen", nl: "Blaffen" },
          { en: "Hoot", es: "Ulular", de: "Huu", nl: "Oehoe" }
        ],
        correct: 0,
        explanation: {
          en: "Baby ducks peep softly to stay close to their mother and communicate their needs before developing their adult quacking voice.",
          es: "Los patitos bebé pían suavemente para mantenerse cerca de su madre y comunicar sus necesidades antes de desarrollar su voz adulta de graznido.",
          de: "Entenbabys piepen leise, um in der Nähe ihrer Mutter zu bleiben und ihre Bedürfnisse zu kommunizieren, bevor sie ihre erwachsene Quakstimme entwickeln.",
          nl: "Baby eendjes piepen zacht om dicht bij hun moeder te blijven en hun behoeften te communiceren voordat ze hun volwassen kwakstem ontwikkelen."
        }
      },
      {
        question: {
          en: "What sound do bees make when they fly?",
          es: "¿Qué sonido hacen las abejas cuando vuelan?",
          de: "Welchen Laut machen Bienen beim Fliegen?",
          nl: "Welk geluid maken bijen als ze vliegen?"
        },
        options: [
          { en: "Buzz", es: "Zumbido", de: "Summen", nl: "Zoemen" },
          { en: "Chirp", es: "Trinar", de: "Zwitschern", nl: "Tjilpen" },
          { en: "Roar", es: "Rugir", de: "Brüllen", nl: "Brullen" },
          { en: "Whistle", es: "Silbar", de: "Pfeifen", nl: "Fluiten" }
        ],
        correct: 0,
        explanation: {
          en: "Bees buzz as they fly because their wings beat super fast - up to 230 times per second! This rapid wing movement creates the familiar buzzing sound we hear.",
          es: "Las abejas zumban al volar porque sus alas se mueven súper rápido - ¡hasta 230 veces por segundo! Este movimiento rápido de las alas crea el familiar sonido de zumbido que escuchamos.",
          de: "Bienen summen beim Fliegen, weil ihre Flügel super schnell schlagen - bis zu 230 Mal pro Sekunde! Diese schnelle Flügelbewegung erzeugt das vertraute Summgeräusch, das wir hören.",
          nl: "Bijen zoemen als ze vliegen omdat hun vleugels super snel klapwieken - tot 230 keer per seconde! Deze snelle vleugelbeweging creëert het bekende zoemgeluid dat we horen."
        }
      },
      {
        question: {
          en: "What sound do snakes make to warn others?",
          es: "¿Qué sonido hacen las serpientes para advertir a otros?",
          de: "Welchen Laut machen Schlangen, um andere zu warnen?",
          nl: "Welk geluid maken slangen om anderen te waarschuwen?"
        },
        options: [
          { en: "Hiss", es: "Sisear", de: "Zischen", nl: "Sissen" },
          { en: "Meow", es: "Maullar", de: "Miauen", nl: "Miauwen" },
          { en: "Tweet", es: "Piar", de: "Zwitschern", nl: "Twitteren" },
          { en: "Laugh", es: "Reír", de: "Lachen", nl: "Lachen" }
        ],
        correct: 0,
        explanation: {
          en: "Snakes hiss by forcing air through their mouth and throat to create a warning sound that tells other animals to stay away and not bother them!",
          es: "¡Las serpientes sisean forzando aire por su boca y garganta para crear un sonido de advertencia que dice a otros animales que se mantengan alejados y no las molesten!",
          de: "Schlangen zischen, indem sie Luft durch Mund und Rachen pressen, um ein Warngeräusch zu erzeugen, das anderen Tieren sagt, sie sollen wegbleiben und sie nicht stören!",
          nl: "Slangen sissen door lucht door hun mond en keel te persen om een waarschuwingsgeluid te maken dat andere dieren vertelt om weg te blijven en hen niet te storen!"
        }
      },
      {
        question: {
          en: "What sound do dolphins make to talk to each other?",
          es: "¿Qué sonido hacen los delfines para hablarse entre ellos?",
          de: "Welchen Laut machen Delfine, um miteinander zu sprechen?",
          nl: "Welk geluid maken dolfijnen om met elkaar te praten?"
        },
        options: [
          { en: "Clicks and whistles", es: "Clics y silbidos", de: "Klicks und Pfiffe", nl: "Klikken en fluiten" },
          { en: "Barking", es: "Ladridos", de: "Bellen", nl: "Blaffen" },
          { en: "Singing", es: "Cantando", de: "Singen", nl: "Zingen" },
          { en: "Whispering", es: "Susurrando", de: "Flüstern", nl: "Fluisteren" }
        ],
        correct: 0,
        explanation: {
          en: "Dolphins are amazing talkers! They use clicks and whistles to communicate with their friends, call their families, and even have their own special whistle signature like a name!",
          es: "¡Los delfines son habladores increíbles! Usan clics y silbidos para comunicarse con sus amigos, llamar a sus familias, ¡e incluso tienen su propio silbido especial como un nombre!",
          de: "Delfine sind erstaunliche Sprecher! Sie verwenden Klicks und Pfiffe, um mit ihren Freunden zu kommunizieren, ihre Familien zu rufen und haben sogar ihren eigenen speziellen Pfeifton wie einen Namen!",
          nl: "Dolfijnen zijn geweldige praters! Ze gebruiken klikken en fluiten om te communiceren met hun vrienden, hun families te roepen, en hebben zelfs hun eigen speciale fluit-handtekening zoals een naam!"
        }
      },
      {
        question: {
          en: "What sound do baby birds make when they're hungry?",
          es: "¿Qué sonido hacen los pájaros bebé cuando tienen hambre?",
          de: "Welchen Laut machen Vogelbabys, wenn sie hungrig sind?",
          nl: "Welk geluid maken baby vogels als ze honger hebben?"
        },
        options: [
          { en: "Chirp loudly", es: "Pían fuerte", de: "Laut zwitschern", nl: "Luid tjilpen" },
          { en: "Howl", es: "Aullar", de: "Heulen", nl: "Huilen" },
          { en: "Purr", es: "Ronronear", de: "Schnurren", nl: "Spinnen" },
          { en: "Grunt", es: "Gruñir", de: "Grunzen", nl: "Grommen" }
        ],
        correct: 0,
        explanation: {
          en: "Baby birds chirp loudly and open their mouths wide when hungry to get their parents' attention for food. The louder they chirp, the more likely their parents will notice and bring them worms or insects to eat!",
          es: "Los pájaros bebé pían fuerte y abren sus bocas bien grandes cuando tienen hambre para obtener la atención de sus padres por comida. ¡Cuanto más fuerte pían, más probable es que sus padres los noten y les traigan gusanos o insectos para comer!",
          de: "Vogelbabys zwitschern laut und öffnen ihre Schnäbel weit, wenn sie hungrig sind, um die Aufmerksamkeit ihrer Eltern für Nahrung zu bekommen. Je lauter sie zwitschern, desto wahrscheinlicher werden ihre Eltern sie bemerken und ihnen Würmer oder Insekten zum Fressen bringen!",
          nl: "Baby vogels tjilpen luid en openen hun bekjes wijd als ze honger hebben om de aandacht van hun ouders te krijgen voor voedsel. Hoe luider ze tjilpen, hoe waarschijnlijker het is dat hun ouders hen opmerken en wormen of insecten brengen om te eten!"
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('warm-up/animals', level7);
  }
})();