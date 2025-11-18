(function() {
  const level1 = {
    name: {
      en: "Basics",
      es: "Conceptos Básicos",
      de: "Grundlagen",
      nl: "Basiskennis"
    },
    questions: [
      {
        question: {
          en: "In which city is the Colosseum located?",
          es: "¿En qué ciudad se encuentra el Coliseo?",
          de: "In welcher Stadt befindet sich das Kolosseum?",
          nl: "In welke stad bevindt het Colosseum zich?"
        },
        options: {
          en: ["Rome", "Athens", "Istanbul", "Alexandria"],
          es: ["Roma", "Atenas", "Estambul", "Alejandría"],
          de: ["Rom", "Athen", "Istanbul", "Alexandria"],
          nl: ["Rome", "Athene", "Istanbul", "Alexandrië"]
        },
        correct: 0,
        explanation: {
          en: "The Colosseum is located in Rome, Italy. It stands in the heart of the ancient city and is one of Rome's most iconic landmarks.",
          es: "El Coliseo está ubicado en Roma, Italia. Se encuentra en el corazón de la ciudad antigua y es uno de los monumentos más emblemáticos de Roma.",
          de: "Das Kolosseum befindet sich in Rom, Italien. Es steht im Herzen der antiken Stadt und ist eines der bekanntesten Wahrzeichen Roms.",
          nl: "Het Colosseum bevindt zich in Rome, Italië. Het staat in het hart van de oude stad en is een van de meest iconische bezienswaardigheden van Rome."
        }
      },
      {
        question: {
          en: "What was the primary purpose of the Colosseum?",
          es: "¿Cuál era el propósito principal del Coliseo?",
          de: "Was war der Hauptzweck des Kolosseums?",
          nl: "Wat was het hoofddoel van het Colosseum?"
        },
        options: {
          en: ["Gladiatorial contests and public spectacles", "Royal palace", "Temple for worship", "Market hall"],
          es: ["Combates de gladiadores y espectáculos públicos", "Palacio real", "Templo de culto", "Mercado"],
          de: ["Gladiatorenkämpfe und öffentliche Spektakel", "Königspalast", "Tempel für Gottesdienste", "Markthalle"],
          nl: ["Gladiatorengevechten en openbare spektakels", "Koninklijk paleis", "Tempel voor aanbidding", "Markthal"]
        },
        correct: 0,
        explanation: {
          en: "The Colosseum was built as an amphitheater for gladiatorial contests, animal hunts, executions, and other public spectacles that entertained Roman citizens.",
          es: "El Coliseo fue construido como un anfiteatro para combates de gladiadores, cacerías de animales, ejecuciones y otros espectáculos públicos que entretenían a los ciudadanos romanos.",
          de: "Das Kolosseum wurde als Amphitheater für Gladiatorenkämpfe, Tierjagden, Hinrichtungen und andere öffentliche Spektakel gebaut, die die römischen Bürger unterhielten.",
          nl: "Het Colosseum werd gebouwd als een amfitheater voor gladiatorengevechten, dierenjachten, executies en andere openbare spektakels die de Romeinse burgers vermaakten."
        }
      },
      {
        question: {
          en: "When was the construction of the Colosseum completed?",
          es: "¿Cuándo se completó la construcción del Coliseo?",
          de: "Wann wurde der Bau des Kolosseums abgeschlossen?",
          nl: "Wanneer werd de bouw van het Colosseum voltooid?"
        },
        options: {
          en: ["80 AD", "50 AD", "120 AD", "200 AD"],
          es: ["80 d.C.", "50 d.C.", "120 d.C.", "200 d.C."],
          de: ["80 n.Chr.", "50 n.Chr.", "120 n.Chr.", "200 n.Chr."],
          nl: ["80 na Christus", "50 na Christus", "120 na Christus", "200 na Christus"]
        },
        correct: 0,
        explanation: {
          en: "The Colosseum was completed in 80 AD under Emperor Titus. Construction began in 70 AD under Emperor Vespasian and took about 10 years to finish.",
          es: "El Coliseo se completó en el año 80 d.C. bajo el emperador Tito. La construcción comenzó en el año 70 d.C. bajo el emperador Vespasiano y tomó alrededor de 10 años para terminarse.",
          de: "Das Kolosseum wurde 80 n.Chr. unter Kaiser Titus fertiggestellt. Der Bau begann 70 n.Chr. unter Kaiser Vespasian und dauerte etwa 10 Jahre.",
          nl: "Het Colosseum werd in 80 na Christus voltooid onder keizer Titus. De bouw begon in 70 na Christus onder keizer Vespasianus en duurde ongeveer 10 jaar."
        }
      },
      {
        question: {
          en: "Which Roman Emperor started the construction of the Colosseum?",
          es: "¿Qué emperador romano inició la construcción del Coliseo?",
          de: "Welcher römische Kaiser begann mit dem Bau des Kolosseums?",
          nl: "Welke Romeinse keizer begon met de bouw van het Colosseum?"
        },
        options: {
          en: ["Vespasian", "Nero", "Augustus", "Hadrian"],
          es: ["Vespasiano", "Nerón", "Augusto", "Adriano"],
          de: ["Vespasian", "Nero", "Augustus", "Hadrian"],
          nl: ["Vespasianus", "Nero", "Augustus", "Hadrianus"]
        },
        correct: 0,
        explanation: {
          en: "Emperor Vespasian began construction of the Colosseum in 70 AD. His son Titus completed it in 80 AD, though further modifications were made by Domitian.",
          es: "El emperador Vespasiano comenzó la construcción del Coliseo en el año 70 d.C. Su hijo Tito lo completó en el año 80 d.C., aunque Domiciano realizó modificaciones adicionales.",
          de: "Kaiser Vespasian begann 70 n.Chr. mit dem Bau des Kolosseums. Sein Sohn Titus vollendete es 80 n.Chr., obwohl Domitian weitere Änderungen vornahm.",
          nl: "Keizer Vespasianus begon in 70 na Christus met de bouw van het Colosseum. Zijn zoon Titus voltooide het in 80 na Christus, hoewel Domitianus verdere aanpassingen maakte."
        }
      },
      {
        question: {
          en: "Approximately how many spectators could the Colosseum hold?",
          es: "¿Aproximadamente cuántos espectadores podía albergar el Coliseo?",
          de: "Wie viele Zuschauer konnte das Kolosseum ungefähr aufnehmen?",
          nl: "Hoeveel toeschouwers kon het Colosseum ongeveer herbergen?"
        },
        options: {
          en: ["50,000 to 80,000", "20,000 to 30,000", "100,000 to 120,000", "10,000 to 15,000"],
          es: ["50.000 a 80.000", "20.000 a 30.000", "100.000 a 120.000", "10.000 a 15.000"],
          de: ["50.000 bis 80.000", "20.000 bis 30.000", "100.000 bis 120.000", "10.000 bis 15.000"],
          nl: ["50.000 tot 80.000", "20.000 tot 30.000", "100.000 tot 120.000", "10.000 tot 15.000"]
        },
        correct: 0,
        explanation: {
          en: "The Colosseum could accommodate between 50,000 and 80,000 spectators. The seating was arranged by social class, with the best seats reserved for the elite.",
          es: "El Coliseo podía acomodar entre 50.000 y 80.000 espectadores. Los asientos estaban organizados por clase social, con los mejores asientos reservados para la élite.",
          de: "Das Kolosseum konnte zwischen 50.000 und 80.000 Zuschauer aufnehmen. Die Sitzplätze waren nach sozialen Klassen angeordnet, wobei die besten Plätze für die Elite reserviert waren.",
          nl: "Het Colosseum kon tussen de 50.000 en 80.000 toeschouwers herbergen. De zitplaatsen waren gerangschikt naar sociale klasse, waarbij de beste plaatsen waren gereserveerd voor de elite."
        }
      },
      {
        question: {
          en: "What is another name for the Colosseum?",
          es: "¿Cuál es otro nombre para el Coliseo?",
          de: "Wie lautet ein anderer Name für das Kolosseum?",
          nl: "Wat is een andere naam voor het Colosseum?"
        },
        options: {
          en: ["Flavian Amphitheatre", "Roman Arena", "Circus Maximus", "Forum Romanum"],
          es: ["Anfiteatro Flavio", "Arena Romana", "Circo Máximo", "Foro Romano"],
          de: ["Flavisches Amphitheater", "Römische Arena", "Circus Maximus", "Forum Romanum"],
          nl: ["Flavisch Amfitheater", "Romeinse Arena", "Circus Maximus", "Forum Romanum"]
        },
        correct: 0,
        explanation: {
          en: "The Colosseum is also known as the Flavian Amphitheatre, named after the Flavian dynasty of emperors (Vespasian, Titus, and Domitian) who built it.",
          es: "El Coliseo también se conoce como el Anfiteatro Flavio, nombrado en honor a la dinastía Flavia de emperadores (Vespasiano, Tito y Domiciano) que lo construyeron.",
          de: "Das Kolosseum ist auch als Flavisches Amphitheater bekannt, benannt nach der flavischen Kaiserdynastie (Vespasian, Titus und Domitian), die es erbaute.",
          nl: "Het Colosseum staat ook bekend als het Flavisch Amfitheater, vernoemd naar de Flavische dynastie van keizers (Vespasianus, Titus en Domitianus) die het bouwden."
        }
      },
      {
        question: {
          en: "What shape is the Colosseum?",
          es: "¿Qué forma tiene el Coliseo?",
          de: "Welche Form hat das Kolosseum?",
          nl: "Welke vorm heeft het Colosseum?"
        },
        options: {
          en: ["Elliptical (oval)", "Circular", "Rectangular", "Square"],
          es: ["Elíptica (ovalada)", "Circular", "Rectangular", "Cuadrada"],
          de: ["Elliptisch (oval)", "Kreisförmig", "Rechteckig", "Quadratisch"],
          nl: ["Elliptisch (ovaal)", "Cirkelvormig", "Rechthoekig", "Vierkant"]
        },
        correct: 0,
        explanation: {
          en: "The Colosseum has an elliptical or oval shape, measuring approximately 189 meters long and 156 meters wide. This design provided excellent views from all seating areas.",
          es: "El Coliseo tiene una forma elíptica u ovalada, midiendo aproximadamente 189 metros de largo y 156 metros de ancho. Este diseño proporcionaba excelentes vistas desde todas las áreas de asientos.",
          de: "Das Kolosseum hat eine elliptische oder ovale Form und misst ungefähr 189 Meter in der Länge und 156 Meter in der Breite. Dieses Design bot hervorragende Sicht von allen Sitzplätzen.",
          nl: "Het Colosseum heeft een elliptische of ovale vorm, met een lengte van ongeveer 189 meter en een breedte van 156 meter. Dit ontwerp bood uitstekend zicht vanuit alle zitgebieden."
        }
      },
      {
        question: {
          en: "Is the Colosseum a UNESCO World Heritage site?",
          es: "¿Es el Coliseo un sitio del Patrimonio Mundial de la UNESCO?",
          de: "Ist das Kolosseum eine UNESCO-Welterbestätte?",
          nl: "Is het Colosseum een UNESCO-werelderfgoedlocatie?"
        },
        options: {
          en: ["Yes", "No", "Only partially", "It is pending approval"],
          es: ["Sí", "No", "Solo parcialmente", "Está pendiente de aprobación"],
          de: ["Ja", "Nein", "Nur teilweise", "Es steht noch aus"],
          nl: ["Ja", "Nee", "Alleen gedeeltelijk", "Het wacht op goedkeuring"]
        },
        correct: 0,
        explanation: {
          en: "Yes, the Colosseum is a UNESCO World Heritage site. It was inscribed in 1980 as part of the Historic Centre of Rome, recognizing its outstanding universal value.",
          es: "Sí, el Coliseo es un sitio del Patrimonio Mundial de la UNESCO. Fue inscrito en 1980 como parte del Centro Histórico de Roma, reconociendo su valor universal excepcional.",
          de: "Ja, das Kolosseum ist eine UNESCO-Welterbestätte. Es wurde 1980 als Teil des Historischen Zentrums von Rom eingetragen und würdigt seinen außergewöhnlichen universellen Wert.",
          nl: "Ja, het Colosseum is een UNESCO-werelderfgoedlocatie. Het werd in 1980 ingeschreven als onderdeel van het Historisch Centrum van Rome, waarbij de uitzonderlijke universele waarde werd erkend."
        }
      },
      {
        question: {
          en: "What type of ancient structure is the Colosseum?",
          es: "¿Qué tipo de estructura antigua es el Coliseo?",
          de: "Welche Art von antiker Struktur ist das Kolosseum?",
          nl: "Wat voor soort oude structuur is het Colosseum?"
        },
        options: {
          en: ["Amphitheater", "Temple", "Aqueduct", "Fortress"],
          es: ["Anfiteatro", "Templo", "Acueducto", "Fortaleza"],
          de: ["Amphitheater", "Tempel", "Aquädukt", "Festung"],
          nl: ["Amfitheater", "Tempel", "Aquaduct", "Fort"]
        },
        correct: 0,
        explanation: {
          en: "The Colosseum is an amphitheater, a type of round or oval building with tiered seating surrounding a central arena. It is the largest ancient amphitheater ever built.",
          es: "El Coliseo es un anfiteatro, un tipo de edificio redondo u ovalado con asientos escalonados alrededor de una arena central. Es el anfiteatro antiguo más grande jamás construido.",
          de: "Das Kolosseum ist ein Amphitheater, eine Art rundes oder ovales Gebäude mit gestuften Sitzplätzen um eine zentrale Arena. Es ist das größte antike Amphitheater, das je gebaut wurde.",
          nl: "Het Colosseum is een amfitheater, een soort rond of ovaal gebouw met trapsgewijze zitplaatsen rond een centrale arena. Het is het grootste oude amfitheater dat ooit is gebouwd."
        }
      },
      {
        question: {
          en: "Which architectural feature is prominent in the Colosseum's design?",
          es: "¿Qué característica arquitectónica es prominente en el diseño del Coliseo?",
          de: "Welches architektonische Merkmal ist im Design des Kolosseums prominent?",
          nl: "Welk architectonisch kenmerk is prominent in het ontwerp van het Colosseum?"
        },
        options: {
          en: ["Arches", "Domes", "Spires", "Flying buttresses"],
          es: ["Arcos", "Cúpulas", "Agujas", "Arbotantes"],
          de: ["Bögen", "Kuppeln", "Türme", "Strebepfeiler"],
          nl: ["Bogen", "Koepels", "Spitsen", "Luchtbogen"]
        },
        correct: 0,
        explanation: {
          en: "Arches are a prominent feature of the Colosseum's design. The structure has 80 arched entrances at ground level and uses the arch extensively in its multi-tiered facade.",
          es: "Los arcos son una característica prominente del diseño del Coliseo. La estructura tiene 80 entradas arqueadas a nivel del suelo y utiliza el arco extensivamente en su fachada de múltiples niveles.",
          de: "Bögen sind ein prominentes Merkmal des Kolosseum-Designs. Die Struktur hat 80 gewölbte Eingänge im Erdgeschoss und verwendet den Bogen ausgiebig in ihrer mehrstufigen Fassade.",
          nl: "Bogen zijn een prominent kenmerk van het ontwerp van het Colosseum. De structuur heeft 80 boogvormige ingangen op de begane grond en gebruikt de boog uitgebreid in de gevels met meerdere lagen."
        }
      },
      {
        question: {
          en: "In which country is the Colosseum located?",
          es: "¿En qué país se encuentra el Coliseo?",
          de: "In welchem Land befindet sich das Kolosseum?",
          nl: "In welk land bevindt het Colosseum zich?"
        },
        options: {
          en: ["Italy", "Greece", "Spain", "Turkey"],
          es: ["Italia", "Grecia", "España", "Turquía"],
          de: ["Italien", "Griechenland", "Spanien", "Türkei"],
          nl: ["Italië", "Griekenland", "Spanje", "Turkije"]
        },
        correct: 0,
        explanation: {
          en: "The Colosseum is located in Italy, specifically in its capital city, Rome. It is one of Italy's most famous landmarks and attracts millions of visitors each year.",
          es: "El Coliseo está ubicado en Italia, específicamente en su capital, Roma. Es uno de los monumentos más famosos de Italia y atrae a millones de visitantes cada año.",
          de: "Das Kolosseum befindet sich in Italien, genauer gesagt in der Hauptstadt Rom. Es ist eines der berühmtesten Wahrzeichen Italiens und zieht jedes Jahr Millionen von Besuchern an.",
          nl: "Het Colosseum bevindt zich in Italië, specifiek in de hoofdstad Rome. Het is een van de bekendste bezienswaardigheden van Italië en trekt jaarlijks miljoenen bezoekers."
        }
      },
      {
        question: {
          en: "What ancient civilization built the Colosseum?",
          es: "¿Qué civilización antigua construyó el Coliseo?",
          de: "Welche antike Zivilisation baute das Kolosseum?",
          nl: "Welke oude beschaving bouwde het Colosseum?"
        },
        options: {
          en: ["Roman", "Greek", "Egyptian", "Byzantine"],
          es: ["Romana", "Griega", "Egipcia", "Bizantina"],
          de: ["Römische", "Griechische", "Ägyptische", "Byzantinische"],
          nl: ["Romeinse", "Griekse", "Egyptische", "Byzantijnse"]
        },
        correct: 0,
        explanation: {
          en: "The Colosseum was built by the ancient Romans during the Flavian dynasty. It represents the engineering and architectural prowess of ancient Rome at its peak.",
          es: "El Coliseo fue construido por los antiguos romanos durante la dinastía Flavia. Representa la destreza ingenieril y arquitectónica de la antigua Roma en su apogeo.",
          de: "Das Kolosseum wurde von den alten Römern während der flavischen Dynastie erbaut. Es repräsentiert die Ingenieurs- und Architekturkunst des antiken Roms auf seinem Höhepunkt.",
          nl: "Het Colosseum werd gebouwd door de oude Romeinen tijdens de Flavische dynastie. Het vertegenwoordigt de technische en architectonische kunde van het oude Rome op zijn hoogtepunt."
        }
      },
      {
        question: {
          en: "Who fought in the Colosseum's arena?",
          es: "¿Quién luchaba en la arena del Coliseo?",
          de: "Wer kämpfte in der Arena des Kolosseums?",
          nl: "Wie vochten er in de arena van het Colosseum?"
        },
        options: {
          en: ["Gladiators", "Knights", "Samurai", "Spartans"],
          es: ["Gladiadores", "Caballeros", "Samuráis", "Espartanos"],
          de: ["Gladiatoren", "Ritter", "Samurai", "Spartaner"],
          nl: ["Gladiatoren", "Ridders", "Samoerai", "Spartanen"]
        },
        correct: 0,
        explanation: {
          en: "Gladiators fought in the Colosseum's arena. These were trained fighters who engaged in combat for public entertainment, often fighting each other or wild animals.",
          es: "Los gladiadores luchaban en la arena del Coliseo. Estos eran luchadores entrenados que se enfrentaban en combate para el entretenimiento público, a menudo luchando entre ellos o contra animales salvajes.",
          de: "Gladiatoren kämpften in der Arena des Kolosseums. Dies waren ausgebildete Kämpfer, die zur öffentlichen Unterhaltung gegeneinander oder gegen wilde Tiere kämpften.",
          nl: "Gladiatoren vochten in de arena van het Colosseum. Dit waren getrainde vechters die streden voor openbaar vermaak, vaak tegen elkaar of tegen wilde dieren."
        }
      },
      {
        question: {
          en: "How many stories or levels does the Colosseum have?",
          es: "¿Cuántos pisos o niveles tiene el Coliseo?",
          de: "Wie viele Stockwerke oder Ebenen hat das Kolosseum?",
          nl: "Hoeveel verdiepingen of niveaus heeft het Colosseum?"
        },
        options: {
          en: ["Four", "Three", "Five", "Two"],
          es: ["Cuatro", "Tres", "Cinco", "Dos"],
          de: ["Vier", "Drei", "Fünf", "Zwei"],
          nl: ["Vier", "Drie", "Vijf", "Twee"]
        },
        correct: 0,
        explanation: {
          en: "The Colosseum has four stories or levels. The first three levels feature arches, while the fourth level has rectangular windows and decorative pilasters.",
          es: "El Coliseo tiene cuatro pisos o niveles. Los primeros tres niveles tienen arcos, mientras que el cuarto nivel tiene ventanas rectangulares y pilastras decorativas.",
          de: "Das Kolosseum hat vier Stockwerke oder Ebenen. Die ersten drei Ebenen weisen Bögen auf, während die vierte Ebene rechteckige Fenster und dekorative Pilaster hat.",
          nl: "Het Colosseum heeft vier verdiepingen of niveaus. De eerste drie niveaus hebben bogen, terwijl het vierde niveau rechthoekige ramen en decoratieve pilasters heeft."
        }
      },
      {
        question: {
          en: "Is the Colosseum one of Rome's major tourist attractions?",
          es: "¿Es el Coliseo una de las principales atracciones turísticas de Roma?",
          de: "Ist das Kolosseum eine der wichtigsten Touristenattraktionen Roms?",
          nl: "Is het Colosseum een van de belangrijkste toeristische attracties van Rome?"
        },
        options: {
          en: ["Yes, it attracts millions of visitors annually", "No, it is closed to the public", "Only for special events", "It is rarely visited"],
          es: ["Sí, atrae a millones de visitantes anualmente", "No, está cerrado al público", "Solo para eventos especiales", "Es raramente visitado"],
          de: ["Ja, es zieht jährlich Millionen von Besuchern an", "Nein, es ist für die Öffentlichkeit geschlossen", "Nur für besondere Veranstaltungen", "Es wird selten besucht"],
          nl: ["Ja, het trekt jaarlijks miljoenen bezoekers", "Nee, het is gesloten voor het publiek", "Alleen voor speciale evenementen", "Het wordt zelden bezocht"]
        },
        correct: 0,
        explanation: {
          en: "Yes, the Colosseum is one of Rome's most visited tourist attractions, drawing over 7 million visitors annually. It is an iconic symbol of ancient Rome and a must-see destination.",
          es: "Sí, el Coliseo es una de las atracciones turísticas más visitadas de Roma, atrayendo a más de 7 millones de visitantes anualmente. Es un símbolo icónico de la antigua Roma y un destino imperdible.",
          de: "Ja, das Kolosseum ist eine der meistbesuchten Touristenattraktionen Roms und zieht jährlich über 7 Millionen Besucher an. Es ist ein ikonisches Symbol des antiken Roms und ein Muss.",
          nl: "Ja, het Colosseum is een van de meest bezochte toeristische attracties van Rome en trekt jaarlijks meer dan 7 miljoen bezoekers. Het is een iconisch symbool van het oude Rome en een must-see bestemming."
        }
      },
      {
        question: {
          en: "What is the current state of the Colosseum?",
          es: "¿Cuál es el estado actual del Coliseo?",
          de: "Wie ist der aktuelle Zustand des Kolosseums?",
          nl: "Wat is de huidige staat van het Colosseum?"
        },
        options: {
          en: ["Partially ruined but well-preserved", "Completely intact", "Fully restored to original condition", "Completely demolished"],
          es: ["Parcialmente en ruinas pero bien conservado", "Completamente intacto", "Completamente restaurado a su condición original", "Completamente demolido"],
          de: ["Teilweise ruiniert aber gut erhalten", "Vollständig intakt", "Vollständig in den Originalzustand restauriert", "Vollständig abgerissen"],
          nl: ["Gedeeltelijk geruïneerd maar goed bewaard", "Volledig intact", "Volledig gerestaureerd naar originele staat", "Volledig gesloopt"]
        },
        correct: 0,
        explanation: {
          en: "The Colosseum is partially ruined due to earthquakes and stone-robbers over the centuries, but it remains remarkably well-preserved. Ongoing conservation efforts help maintain this ancient monument.",
          es: "El Coliseo está parcialmente en ruinas debido a terremotos y ladrones de piedra a lo largo de los siglos, pero permanece notablemente bien conservado. Los esfuerzos de conservación continuos ayudan a mantener este monumento antiguo.",
          de: "Das Kolosseum ist aufgrund von Erdbeben und Steindieben über die Jahrhunderte teilweise ruiniert, bleibt aber bemerkenswert gut erhalten. Laufende Erhaltungsbemühungen helfen, dieses antike Monument zu bewahren.",
          nl: "Het Colosseum is gedeeltelijk geruïneerd door aardbevingen en steenrovers door de eeuwen heen, maar blijft opmerkelijk goed bewaard. Voortdurende conserveringsinspanningen helpen dit oude monument te behouden."
        }
      },
      {
        question: {
          en: "Which types of columns are featured on the Colosseum's facade?",
          es: "¿Qué tipos de columnas se presentan en la fachada del Coliseo?",
          de: "Welche Arten von Säulen sind an der Fassade des Kolosseums zu sehen?",
          nl: "Welke soorten zuilen zijn te zien op de gevel van het Colosseum?"
        },
        options: {
          en: ["Doric, Ionic, and Corinthian", "Only Doric", "Only Corinthian", "Gothic and Baroque"],
          es: ["Dóricas, Jónicas y Corintias", "Solo Dóricas", "Solo Corintias", "Góticas y Barrocas"],
          de: ["Dorisch, Ionisch und Korinthisch", "Nur Dorisch", "Nur Korinthisch", "Gotisch und Barock"],
          nl: ["Dorisch, Ionisch en Corinthisch", "Alleen Dorisch", "Alleen Corinthisch", "Gotisch en Barok"]
        },
        correct: 0,
        explanation: {
          en: "The Colosseum features three classical orders of columns: Doric on the first level, Ionic on the second, and Corinthian on the third. This demonstrates the sophistication of Roman architecture.",
          es: "El Coliseo presenta tres órdenes clásicos de columnas: Dórico en el primer nivel, Jónico en el segundo y Corintio en el tercero. Esto demuestra la sofisticación de la arquitectura romana.",
          de: "Das Kolosseum zeigt drei klassische Säulenordnungen: Dorisch auf der ersten Ebene, Ionisch auf der zweiten und Korinthisch auf der dritten. Dies zeigt die Raffinesse der römischen Architektur.",
          nl: "Het Colosseum toont drie klassieke zuilen: Dorisch op het eerste niveau, Ionisch op het tweede en Corinthisch op het derde. Dit toont de verfijning van de Romeinse architectuur."
        }
      },
      {
        question: {
          en: "What material was primarily used to build the Colosseum?",
          es: "¿Qué material se utilizó principalmente para construir el Coliseo?",
          de: "Welches Material wurde hauptsächlich zum Bau des Kolosseums verwendet?",
          nl: "Welk materiaal werd voornamelijk gebruikt om het Colosseum te bouwen?"
        },
        options: {
          en: ["Stone and concrete", "Wood", "Marble only", "Bronze"],
          es: ["Piedra y hormigón", "Madera", "Solo mármol", "Bronce"],
          de: ["Stein und Beton", "Holz", "Nur Marmor", "Bronze"],
          nl: ["Steen en beton", "Hout", "Alleen marmer", "Brons"]
        },
        correct: 0,
        explanation: {
          en: "The Colosseum was built primarily using stone (travertine limestone) and concrete. The Romans were masters of concrete construction, which allowed them to create such massive structures.",
          es: "El Coliseo fue construido principalmente usando piedra (piedra caliza travertino) y hormigón. Los romanos eran maestros de la construcción con hormigón, lo que les permitió crear estructuras tan masivas.",
          de: "Das Kolosseum wurde hauptsächlich aus Stein (Travertin-Kalkstein) und Beton gebaut. Die Römer waren Meister des Betonbaus, was ihnen erlaubte, solch massive Strukturen zu schaffen.",
          nl: "Het Colosseum werd voornamelijk gebouwd met steen (travertijn kalksteen) en beton. De Romeinen waren meesters in betonconstructie, waardoor ze zulke massieve structuren konden creëren."
        }
      },
      {
        question: {
          en: "Why is the Colosseum considered historically significant?",
          es: "¿Por qué se considera el Coliseo históricamente significativo?",
          de: "Warum gilt das Kolosseum als historisch bedeutsam?",
          nl: "Waarom wordt het Colosseum als historisch significant beschouwd?"
        },
        options: {
          en: ["It represents ancient Roman engineering and culture", "It was the first building ever constructed", "It was a medieval castle", "It was a Renaissance palace"],
          es: ["Representa la ingeniería y cultura de la antigua Roma", "Fue el primer edificio jamás construido", "Era un castillo medieval", "Era un palacio renacentista"],
          de: ["Es repräsentiert antike römische Ingenieurskunst und Kultur", "Es war das erste jemals gebaute Gebäude", "Es war eine mittelalterliche Burg", "Es war ein Renaissance-Palast"],
          nl: ["Het vertegenwoordigt oude Romeinse techniek en cultuur", "Het was het eerste gebouw dat ooit is gebouwd", "Het was een middeleeuws kasteel", "Het was een Renaissance-paleis"]
        },
        correct: 0,
        explanation: {
          en: "The Colosseum is historically significant as a masterpiece of ancient Roman engineering and architecture. It provides insight into Roman society, entertainment, and their advanced construction techniques.",
          es: "El Coliseo es históricamente significativo como una obra maestra de la ingeniería y arquitectura de la antigua Roma. Proporciona información sobre la sociedad romana, el entretenimiento y sus técnicas de construcción avanzadas.",
          de: "Das Kolosseum ist historisch bedeutsam als Meisterwerk der antiken römischen Ingenieurskunst und Architektur. Es bietet Einblick in die römische Gesellschaft, Unterhaltung und ihre fortgeschrittenen Bautechniken.",
          nl: "Het Colosseum is historisch significant als een meesterwerk van oude Romeinse techniek en architectuur. Het biedt inzicht in de Romeinse samenleving, entertainment en hun geavanceerde bouwtechnieken."
        }
      },
      {
        question: {
          en: "Which emperor completed the Colosseum in 80 AD?",
          es: "¿Qué emperador completó el Coliseo en el año 80 d.C.?",
          de: "Welcher Kaiser vollendete das Kolosseum im Jahr 80 n.Chr.?",
          nl: "Welke keizer voltooide het Colosseum in 80 na Christus?"
        },
        options: {
          en: ["Titus", "Nero", "Trajan", "Constantine"],
          es: ["Tito", "Nerón", "Trajano", "Constantino"],
          de: ["Titus", "Nero", "Trajan", "Konstantin"],
          nl: ["Titus", "Nero", "Trajanus", "Constantijn"]
        },
        correct: 0,
        explanation: {
          en: "Emperor Titus completed the Colosseum in 80 AD and inaugurated it with 100 days of games. He was the son of Vespasian, who began the construction.",
          es: "El emperador Tito completó el Coliseo en el año 80 d.C. e inauguró con 100 días de juegos. Era el hijo de Vespasiano, quien comenzó la construcción.",
          de: "Kaiser Titus vollendete das Kolosseum im Jahr 80 n.Chr. und weihte es mit 100 Tagen Spielen ein. Er war der Sohn von Vespasian, der mit dem Bau begann.",
          nl: "Keizer Titus voltooide het Colosseum in 80 na Christus en opende het met 100 dagen aan spelen. Hij was de zoon van Vespasianus, die de bouw begon."
        }
      }
    ]
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level1;
  }
  if (typeof window !== 'undefined') {
    window.level1Data = level1;
  }
  return level1;
})();