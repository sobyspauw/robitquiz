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
      },
      {
        question: {
          en: "What is the height of the Colosseum's outer wall?",
          es: "¿Cuál es la altura del muro exterior del Coliseo?",
          de: "Wie hoch ist die Außenmauer des Kolosseums?",
          nl: "Wat is de hoogte van de buitenmuur van het Colosseum?"
        },
        options: {
          en: ["48 meters", "30 meters", "60 meters", "75 meters"],
          es: ["48 metros", "30 metros", "60 metros", "75 metros"],
          de: ["48 Meter", "30 Meter", "60 Meter", "75 Meter"],
          nl: ["48 meter", "30 meter", "60 meter", "75 meter"]
        },
        correct: 0,
        explanation: {
          en: "The Colosseum's outer wall stands approximately 48 meters (157 feet) high. This impressive height made it one of the tallest structures in ancient Rome.",
          es: "El muro exterior del Coliseo tiene aproximadamente 48 metros (157 pies) de altura. Esta impresionante altura lo convirtió en una de las estructuras más altas de la antigua Roma.",
          de: "Die Außenmauer des Kolosseums ist etwa 48 Meter (157 Fuß) hoch. Diese beeindruckende Höhe machte es zu einem der höchsten Bauwerke im antiken Rom.",
          nl: "De buitenmuur van het Colosseum is ongeveer 48 meter (157 voet) hoog. Deze indrukwekkende hoogte maakte het een van de hoogste bouwwerken in het oude Rome."
        }
      },
      {
        question: {
          en: "In which century was the Colosseum built?",
          es: "¿En qué siglo se construyó el Coliseo?",
          de: "In welchem Jahrhundert wurde das Kolosseum erbaut?",
          nl: "In welke eeuw werd het Colosseum gebouwd?"
        },
        options: {
          en: ["1st century AD", "2nd century AD", "1st century BC", "3rd century AD"],
          es: ["Siglo I d.C.", "Siglo II d.C.", "Siglo I a.C.", "Siglo III d.C."],
          de: ["1. Jahrhundert n.Chr.", "2. Jahrhundert n.Chr.", "1. Jahrhundert v.Chr.", "3. Jahrhundert n.Chr."],
          nl: ["1e eeuw na Christus", "2e eeuw na Christus", "1e eeuw voor Christus", "3e eeuw na Christus"]
        },
        correct: 0,
        explanation: {
          en: "The Colosseum was built in the 1st century AD, beginning in 70 AD and completed in 80 AD. It represents the peak of Roman architectural achievement.",
          es: "El Coliseo fue construido en el siglo I d.C., comenzando en el 70 d.C. y completado en el 80 d.C. Representa la cima del logro arquitectónico romano.",
          de: "Das Kolosseum wurde im 1. Jahrhundert n.Chr. erbaut, beginnend im Jahr 70 n.Chr. und fertiggestellt im Jahr 80 n.Chr. Es repräsentiert den Höhepunkt römischer architektonischer Leistung.",
          nl: "Het Colosseum werd gebouwd in de 1e eeuw na Christus, beginnend in 70 na Christus en voltooid in 80 na Christus. Het vertegenwoordigt het hoogtepunt van Romeinse architectonische prestatie."
        }
      },
      {
        question: {
          en: "Can visitors tour the Colosseum today?",
          es: "¿Pueden los visitantes recorrer el Coliseo hoy?",
          de: "Können Besucher das Kolosseum heute besichtigen?",
          nl: "Kunnen bezoekers het Colosseum vandaag bezoeken?"
        },
        options: {
          en: ["Yes", "No", "Only from outside", "Only special groups"],
          es: ["Sí", "No", "Solo desde afuera", "Solo grupos especiales"],
          de: ["Ja", "Nein", "Nur von außen", "Nur Spezialgruppen"],
          nl: ["Ja", "Nee", "Alleen van buitenaf", "Alleen speciale groepen"]
        },
        correct: 0,
        explanation: {
          en: "Yes, visitors can tour the Colosseum today. It's open to the public and offers guided tours of the arena floor, seating areas, and underground chambers.",
          es: "Sí, los visitantes pueden recorrer el Coliseo hoy. Está abierto al público y ofrece visitas guiadas del piso de la arena, áreas de asientos y cámaras subterráneas.",
          de: "Ja, Besucher können das Kolosseum heute besichtigen. Es ist für die Öffentlichkeit geöffnet und bietet geführte Touren durch den Arenaboden, Sitzbereiche und unterirdische Kammern.",
          nl: "Ja, bezoekers kunnen het Colosseum vandaag bezoeken. Het is open voor het publiek en biedt rondleidingen door de arenabodem, zitgedeelten en ondergrondse kamers."
        }
      },
      {
        question: {
          en: "What were the games held at the Colosseum called in Latin?",
          es: "¿Cómo se llamaban los juegos celebrados en el Coliseo en latín?",
          de: "Wie nannte man die im Kolosseum abgehaltenen Spiele auf Lateinisch?",
          nl: "Hoe heetten de spelen in het Colosseum in het Latijn?"
        },
        options: {
          en: ["Munera", "Olympia", "Festivus", "Ludus"],
          es: ["Munera", "Olympia", "Festivus", "Ludus"],
          de: ["Munera", "Olympia", "Festivus", "Ludus"],
          nl: ["Munera", "Olympia", "Festivus", "Ludus"]
        },
        correct: 0,
        explanation: {
          en: "The games were called 'munera' in Latin, meaning 'gifts' or 'duties'. They were public spectacles offered by wealthy citizens or emperors to the people.",
          es: "Los juegos se llamaban 'munera' en latín, que significa 'regalos' o 'deberes'. Eran espectáculos públicos ofrecidos por ciudadanos ricos o emperadores al pueblo.",
          de: "Die Spiele wurden auf Lateinisch 'Munera' genannt, was 'Geschenke' oder 'Pflichten' bedeutet. Es waren öffentliche Spektakel, die von wohlhabenden Bürgern oder Kaisern dem Volk dargeboten wurden.",
          nl: "De spelen werden 'munera' genoemd in het Latijn, wat 'geschenken' of 'plichten' betekent. Het waren openbare spektakels aangeboden door rijke burgers of keizers aan het volk."
        }
      },
      {
        question: {
          en: "What happened to the Colosseum in the Middle Ages?",
          es: "¿Qué le pasó al Coliseo en la Edad Media?",
          de: "Was geschah mit dem Kolosseum im Mittelalter?",
          nl: "Wat gebeurde er met het Colosseum in de Middeleeuwen?"
        },
        options: {
          en: ["It was used for housing and workshops", "It was destroyed completely", "It became a castle", "It was buried underground"],
          es: ["Se usó para viviendas y talleres", "Fue destruido completamente", "Se convirtió en un castillo", "Fue enterrado bajo tierra"],
          de: ["Es wurde für Wohnungen und Werkstätten genutzt", "Es wurde vollständig zerstört", "Es wurde zu einer Burg", "Es wurde unterirdisch begraben"],
          nl: ["Het werd gebruikt voor huisvesting en werkplaatsen", "Het werd volledig vernietigd", "Het werd een kasteel", "Het werd ondergronds begraven"]
        },
        correct: 0,
        explanation: {
          en: "During the Middle Ages, the Colosseum was repurposed for various uses including housing, workshops, a fortress, and a Christian shrine. This helped preserve parts of the structure.",
          es: "Durante la Edad Media, el Coliseo fue reutilizado para varios usos incluyendo viviendas, talleres, una fortaleza y un santuario cristiano. Esto ayudó a preservar partes de la estructura.",
          de: "Im Mittelalter wurde das Kolosseum für verschiedene Zwecke umfunktioniert, darunter Wohnungen, Werkstätten, eine Festung und ein christlicher Schrein. Dies half, Teile der Struktur zu erhalten.",
          nl: "Tijdens de Middeleeuwen werd het Colosseum hergebruikt voor verschillende doeleinden, waaronder huisvesting, werkplaatsen, een fort en een christelijk heiligdom. Dit hielp delen van de structuur te bewaren."
        }
      },
      {
        question: {
          en: "What natural disasters damaged the Colosseum?",
          es: "¿Qué desastres naturales dañaron el Coliseo?",
          de: "Welche Naturkatastrophen beschädigten das Kolosseum?",
          nl: "Welke natuurrampen beschadigden het Colosseum?"
        },
        options: {
          en: ["Earthquakes", "Floods", "Volcanic eruptions", "Hurricanes"],
          es: ["Terremotos", "Inundaciones", "Erupciones volcánicas", "Huracanes"],
          de: ["Erdbeben", "Überschwemmungen", "Vulkanausbrüche", "Hurrikane"],
          nl: ["Aardbevingen", "Overstromingen", "Vulkaanuitbarstingen", "Orkanen"]
        },
        correct: 0,
        explanation: {
          en: "Several earthquakes damaged the Colosseum over the centuries, including major ones in 442 and 1349 AD. The 1349 earthquake caused significant collapse of the south wall.",
          es: "Varios terremotos dañaron el Coliseo a lo largo de los siglos, incluyendo importantes en 442 y 1349 d.C. El terremoto de 1349 causó un colapso significativo del muro sur.",
          de: "Mehrere Erdbeben beschädigten das Kolosseum im Laufe der Jahrhunderte, darunter große im Jahr 442 und 1349 n.Chr. Das Erdbeben von 1349 verursachte einen erheblichen Einsturz der Südmauer.",
          nl: "Verschillende aardbevingen beschadigden het Colosseum door de eeuwen heen, waaronder grote in 442 en 1349 na Chr. De aardbeving van 1349 veroorzaakte een aanzienlijke instorting van de zuidmuur."
        }
      },
      {
        question: {
          en: "Was admission to Colosseum events free?",
          es: "¿Era gratis la entrada a los eventos del Coliseo?",
          de: "War der Eintritt zu Kolosseums-Veranstaltungen kostenlos?",
          nl: "Was de toegang tot Colosseum-evenementen gratis?"
        },
        options: {
          en: ["Yes", "No", "Only for citizens", "Only for nobles"],
          es: ["Sí", "No", "Solo para ciudadanos", "Solo para nobles"],
          de: ["Ja", "Nein", "Nur für Bürger", "Nur für Adlige"],
          nl: ["Ja", "Nee", "Alleen voor burgers", "Alleen voor edelen"]
        },
        correct: 0,
        explanation: {
          en: "Yes, admission to events was free. Games were funded by emperors or wealthy citizens as gifts to the people. However, seating was assigned by social class.",
          es: "Sí, la entrada a los eventos era gratuita. Los juegos eran financiados por emperadores o ciudadanos ricos como regalos al pueblo. Sin embargo, los asientos se asignaban por clase social.",
          de: "Ja, der Eintritt zu Veranstaltungen war kostenlos. Spiele wurden von Kaisern oder wohlhabenden Bürgern als Geschenke an das Volk finanziert. Die Sitzplätze wurden jedoch nach sozialer Klasse zugewiesen.",
          nl: "Ja, de toegang tot evenementen was gratis. Spelen werden gefinancierd door keizers of rijke burgers als geschenken aan het volk. De zitplaatsen werden echter toegewezen op basis van sociale klasse."
        }
      },
      {
        question: {
          en: "What is the Colosseum made from?",
          es: "¿De qué está hecho el Coliseo?",
          de: "Woraus besteht das Kolosseum?",
          nl: "Waar is het Colosseum van gemaakt?"
        },
        options: {
          en: ["Stone and concrete", "Wood and brick", "Marble only", "Metal and glass"],
          es: ["Piedra y hormigón", "Madera y ladrillo", "Solo mármol", "Metal y vidrio"],
          de: ["Stein und Beton", "Holz und Ziegel", "Nur Marmor", "Metall und Glas"],
          nl: ["Steen en beton", "Hout en baksteen", "Alleen marmer", "Metaal en glas"]
        },
        correct: 0,
        explanation: {
          en: "The Colosseum is made from travertine limestone, tuff (volcanic rock), and Roman concrete. The outer walls used travertine blocks held together with iron clamps.",
          es: "El Coliseo está hecho de piedra caliza travertino, toba (roca volcánica) y hormigón romano. Los muros exteriores utilizaban bloques de travertino unidos con abrazaderas de hierro.",
          de: "Das Kolosseum besteht aus Travertin-Kalkstein, Tuffstein (Vulkangestein) und römischem Beton. Die Außenmauern verwendeten Travertinblöcke, die mit Eisenklammern zusammengehalten wurden.",
          nl: "Het Colosseum is gemaakt van travertijn kalksteen, tufsteen (vulkanisch gesteente) en Romeins beton. De buitenmuren gebruikten travertijnblokken die bij elkaar werden gehouden met ijzeren klemmen."
        }
      },
      {
        question: {
          en: "When did gladiatorial games end at the Colosseum?",
          es: "¿Cuándo terminaron los juegos de gladiadores en el Coliseo?",
          de: "Wann endeten die Gladiatorenspiele im Kolosseum?",
          nl: "Wanneer eindigden de gladiatorenspelen in het Colosseum?"
        },
        options: {
          en: ["Around 400 AD", "Around 100 AD", "Around 600 AD", "Around 800 AD"],
          es: ["Alrededor del 400 d.C.", "Alrededor del 100 d.C.", "Alrededor del 600 d.C.", "Alrededor del 800 d.C."],
          de: ["Um 400 n.Chr.", "Um 100 n.Chr.", "Um 600 n.Chr.", "Um 800 n.Chr."],
          nl: ["Rond 400 na Christus", "Rond 100 na Christus", "Rond 600 na Christus", "Rond 800 na Christus"]
        },
        correct: 0,
        explanation: {
          en: "Gladiatorial games ended around 400 AD as Christianity spread and such spectacles were considered immoral. Animal hunts continued for about another century.",
          es: "Los juegos de gladiadores terminaron alrededor del 400 d.C. a medida que se extendió el cristianismo y tales espectáculos se consideraban inmorales. Las cacerías de animales continuaron durante aproximadamente otro siglo.",
          de: "Gladiatorenspiele endeten um 400 n.Chr., als sich das Christentum ausbreitete und solche Spektakel als unmoralisch galten. Tierjagden wurden etwa ein weiteres Jahrhundert fortgesetzt.",
          nl: "Gladiatorenspelen eindigden rond 400 na Christus toen het christendom zich verspreidde en dergelijke spektakels als immoreel werden beschouwd. Dierenjachten gingen nog ongeveer een eeuw door."
        }
      },
      {
        question: {
          en: "How many entrance arches does the Colosseum have?",
          es: "¿Cuántos arcos de entrada tiene el Coliseo?",
          de: "Wie viele Eingangsbögen hat das Kolosseum?",
          nl: "Hoeveel ingangsbogen heeft het Colosseum?"
        },
        options: {
          en: ["80", "50", "100", "40"],
          es: ["80", "50", "100", "40"],
          de: ["80", "50", "100", "40"],
          nl: ["80", "50", "100", "40"]
        },
        correct: 0,
        explanation: {
          en: "The Colosseum has 80 entrance arches at ground level. These were numbered and allowed spectators to quickly find their seats and enter or exit efficiently.",
          es: "El Coliseo tiene 80 arcos de entrada en el nivel del suelo. Estos estaban numerados y permitían a los espectadores encontrar rápidamente sus asientos y entrar o salir eficientemente.",
          de: "Das Kolosseum hat 80 Eingangsbögen im Erdgeschoss. Diese waren nummeriert und ermöglichten es den Zuschauern, ihre Plätze schnell zu finden und effizient ein- oder auszutreten.",
          nl: "Het Colosseum heeft 80 ingangsbogen op de begane grond. Deze waren genummerd en stelden toeschouwers in staat om snel hun zitplaatsen te vinden en efficiënt binnen of buiten te komen."
        }
      },
      {
        question: {
          en: "What animals were commonly seen in Colosseum shows?",
          es: "¿Qué animales se veían comúnmente en los espectáculos del Coliseo?",
          de: "Welche Tiere waren häufig in Kolosseums-Shows zu sehen?",
          nl: "Welke dieren werden vaak gezien in Colosseum-shows?"
        },
        options: {
          en: ["Lions, tigers, and bears", "Horses and cattle", "Dogs and cats", "Birds only"],
          es: ["Leones, tigres y osos", "Caballos y ganado", "Perros y gatos", "Solo aves"],
          de: ["Löwen, Tiger und Bären", "Pferde und Rinder", "Hunde und Katzen", "Nur Vögel"],
          nl: ["Leeuwen, tijgers en beren", "Paarden en vee", "Honden en katten", "Alleen vogels"]
        },
        correct: 0,
        explanation: {
          en: "Exotic animals like lions, tigers, bears, elephants, and leopards were commonly featured in Colosseum shows. These animals were imported from across the Roman Empire.",
          es: "Animales exóticos como leones, tigres, osos, elefantes y leopardos se presentaban comúnmente en los espectáculos del Coliseo. Estos animales se importaban de todo el Imperio Romano.",
          de: "Exotische Tiere wie Löwen, Tiger, Bären, Elefanten und Leoparden waren häufig in Kolosseums-Shows zu sehen. Diese Tiere wurden aus dem gesamten Römischen Reich importiert.",
          nl: "Exotische dieren zoals leeuwen, tijgers, beren, olifanten en luipaarden werden vaak getoond in Colosseum-shows. Deze dieren werden geïmporteerd vanuit het hele Romeinse Rijk."
        }
      },
      {
        question: {
          en: "What is the arena floor of the Colosseum called?",
          es: "¿Cómo se llama el piso de la arena del Coliseo?",
          de: "Wie heißt der Arenaboden des Kolosseums?",
          nl: "Hoe heet de arenabodem van het Colosseum?"
        },
        options: {
          en: ["Arena", "Stage", "Field", "Court"],
          es: ["Arena", "Escenario", "Campo", "Cancha"],
          de: ["Arena", "Bühne", "Feld", "Hof"],
          nl: ["Arena", "Podium", "Veld", "Baan"]
        },
        correct: 0,
        explanation: {
          en: "The floor is called the 'arena', from the Latin word for sand. Sand was spread on the floor to absorb blood during events.",
          es: "El piso se llama 'arena', de la palabra latina para arena. Se esparcía arena en el piso para absorber la sangre durante los eventos.",
          de: "Der Boden wird 'Arena' genannt, vom lateinischen Wort für Sand. Sand wurde auf dem Boden verstreut, um während der Veranstaltungen Blut aufzusaugen.",
          nl: "De vloer wordt de 'arena' genoemd, van het Latijnse woord voor zand. Zand werd op de vloer verspreid om bloed op te nemen tijdens evenementen."
        }
      },
      {
        question: {
          en: "How long did it take to build the Colosseum?",
          es: "¿Cuánto tiempo tomó construir el Coliseo?",
          de: "Wie lange dauerte der Bau des Kolosseums?",
          nl: "Hoe lang duurde het om het Colosseum te bouwen?"
        },
        options: {
          en: ["About 10 years", "About 5 years", "About 20 years", "About 50 years"],
          es: ["Aproximadamente 10 años", "Aproximadamente 5 años", "Aproximadamente 20 años", "Aproximadamente 50 años"],
          de: ["Etwa 10 Jahre", "Etwa 5 Jahre", "Etwa 20 Jahre", "Etwa 50 Jahre"],
          nl: ["Ongeveer 10 jaar", "Ongeveer 5 jaar", "Ongeveer 20 jaar", "Ongeveer 50 jaar"]
        },
        correct: 0,
        explanation: {
          en: "The Colosseum took about 10 years to build, from 70 AD to 80 AD. This was remarkably fast for such a massive structure.",
          es: "El Coliseo tardó aproximadamente 10 años en construirse, del 70 d.C. al 80 d.C. Esto fue notablemente rápido para una estructura tan masiva.",
          de: "Der Bau des Kolosseums dauerte etwa 10 Jahre, von 70 n.Chr. bis 80 n.Chr. Dies war bemerkenswert schnell für ein so massives Bauwerk.",
          nl: "Het Colosseum duurde ongeveer 10 jaar om te bouwen, van 70 na Christus tot 80 na Christus. Dit was opmerkelijk snel voor zo'n massieve structuur."
        }
      },
      {
        question: {
          en: "Does the Colosseum still have its original roof?",
          es: "¿El Coliseo todavía tiene su techo original?",
          de: "Hat das Kolosseum noch sein ursprüngliches Dach?",
          nl: "Heeft het Colosseum nog zijn originele dak?"
        },
        options: {
          en: ["No, it never had a solid roof", "Yes, it is intact", "Partly", "It had a wooden roof"],
          es: ["No, nunca tuvo un techo sólido", "Sí, está intacto", "Parcialmente", "Tenía un techo de madera"],
          de: ["Nein, es hatte nie ein festes Dach", "Ja, es ist intakt", "Teilweise", "Es hatte ein Holzdach"],
          nl: ["Nee, het had nooit een vast dak", "Ja, het is intact", "Gedeeltelijk", "Het had een houten dak"]
        },
        correct: 0,
        explanation: {
          en: "The Colosseum never had a solid roof. Instead, it had a retractable canvas awning called a velarium that could be extended to provide shade for spectators.",
          es: "El Coliseo nunca tuvo un techo sólido. En cambio, tenía un toldo de lona retráctil llamado velarium que se podía extender para proporcionar sombra a los espectadores.",
          de: "Das Kolosseum hatte nie ein festes Dach. Stattdessen hatte es eine einziehbare Segeltuchmarkise namens Velarium, die ausgefahren werden konnte, um den Zuschauern Schatten zu spenden.",
          nl: "Het Colosseum had nooit een vast dak. In plaats daarvan had het een uitschuifbare canvas luifel genaamd velarium die kon worden uitgestrekt om schaduw te bieden aan toeschouwers."
        }
      },
      {
        question: {
          en: "What is the Colosseum's location within Rome?",
          es: "¿Cuál es la ubicación del Coliseo dentro de Roma?",
          de: "Wo befindet sich das Kolosseum innerhalb von Rom?",
          nl: "Wat is de locatie van het Colosseum binnen Rome?"
        },
        options: {
          en: ["East of the Roman Forum", "West of the Tiber River", "North of Vatican City", "South of Naples"],
          es: ["Al este del Foro Romano", "Al oeste del río Tíber", "Al norte de la Ciudad del Vaticano", "Al sur de Nápoles"],
          de: ["Östlich des Forum Romanum", "Westlich des Tiber", "Nördlich der Vatikanstadt", "Südlich von Neapel"],
          nl: ["Ten oosten van het Forum Romanum", "Ten westen van de Tiber", "Ten noorden van Vaticaanstad", "Ten zuiden van Napels"]
        },
        correct: 0,
        explanation: {
          en: "The Colosseum is located just east of the Roman Forum in the center of Rome. It stands in a valley between the Palatine, Esquiline, and Caelian hills.",
          es: "El Coliseo está ubicado justo al este del Foro Romano en el centro de Roma. Se encuentra en un valle entre las colinas Palatina, Esquilina y Celia.",
          de: "Das Kolosseum befindet sich direkt östlich des Forum Romanum im Zentrum von Rom. Es steht in einem Tal zwischen den Hügeln Palatin, Esquilin und Caelius.",
          nl: "Het Colosseum ligt net ten oosten van het Forum Romanum in het centrum van Rome. Het staat in een vallei tussen de heuvels Palatijn, Esquilijn en Caelius."
        }
      },
      {
        question: {
          en: "Is the Colosseum lit up at night?",
          es: "¿El Coliseo está iluminado por la noche?",
          de: "Wird das Kolosseum nachts beleuchtet?",
          nl: "Wordt het Colosseum 's nachts verlicht?"
        },
        options: {
          en: ["Yes", "No", "Only on holidays", "Only in summer"],
          es: ["Sí", "No", "Solo en días festivos", "Solo en verano"],
          de: ["Ja", "Nein", "Nur an Feiertagen", "Nur im Sommer"],
          nl: ["Ja", "Nee", "Alleen op feestdagen", "Alleen in de zomer"]
        },
        correct: 0,
        explanation: {
          en: "Yes, the Colosseum is illuminated at night with golden lighting, creating a spectacular sight. It's one of Rome's most photographed nighttime landmarks.",
          es: "Sí, el Coliseo está iluminado por la noche con iluminación dorada, creando una vista espectacular. Es uno de los monumentos nocturnos más fotografiados de Roma.",
          de: "Ja, das Kolosseum wird nachts mit goldener Beleuchtung beleuchtet, was einen spektakulären Anblick schafft. Es ist eines der meistfotografierten nächtlichen Wahrzeichen Roms.",
          nl: "Ja, het Colosseum wordt 's nachts verlicht met gouden verlichting, wat een spectaculair gezicht creëert. Het is een van de meest gefotografeerde nachtelijke bezienswaardigheden van Rome."
        }
      },
      {
        question: {
          en: "What was built on the site before the Colosseum?",
          es: "¿Qué se construyó en el sitio antes del Coliseo?",
          de: "Was wurde vor dem Kolosseum an der Stelle gebaut?",
          nl: "Wat werd er op de locatie gebouwd voor het Colosseum?"
        },
        options: {
          en: ["Nero's artificial lake", "A temple", "A marketplace", "A fortress"],
          es: ["El lago artificial de Nerón", "Un templo", "Un mercado", "Una fortaleza"],
          de: ["Neros künstlicher See", "Ein Tempel", "Ein Marktplatz", "Eine Festung"],
          nl: ["Nero's kunstmatige meer", "Een tempel", "Een marktplaats", "Een fort"]
        },
        correct: 0,
        explanation: {
          en: "Before the Colosseum, the site held an artificial lake that was part of Emperor Nero's lavish palace complex, the Domus Aurea. Vespasian drained the lake to build the Colosseum.",
          es: "Antes del Coliseo, el sitio contenía un lago artificial que era parte del lujoso complejo de palacio del emperador Nerón, la Domus Aurea. Vespasiano drenó el lago para construir el Coliseo.",
          de: "Vor dem Kolosseum befand sich an der Stelle ein künstlicher See, der Teil des prächtigen Palastkomplexes von Kaiser Nero, der Domus Aurea, war. Vespasian ließ den See trocken legen, um das Kolosseum zu bauen.",
          nl: "Voor het Colosseum bevond zich op de locatie een kunstmatig meer dat deel uitmaakte van keizer Nero's luxueuze paleiscomplex, de Domus Aurea. Vespasianus liet het meer draineren om het Colosseum te bouwen."
        }
      },
      {
        question: {
          en: "What is inside the Colosseum today?",
          es: "¿Qué hay dentro del Coliseo hoy?",
          de: "Was befindet sich heute im Kolosseum?",
          nl: "Wat bevindt zich vandaag in het Colosseum?"
        },
        options: {
          en: ["The underground chambers are visible", "A shopping mall", "A sports stadium", "A hotel"],
          es: ["Las cámaras subterráneas son visibles", "Un centro comercial", "Un estadio deportivo", "Un hotel"],
          de: ["Die unterirdischen Kammern sind sichtbar", "Ein Einkaufszentrum", "Ein Sportstadion", "Ein Hotel"],
          nl: ["De ondergrondse kamers zijn zichtbaar", "Een winkelcentrum", "Een sportstadion", "Een hotel"]
        },
        correct: 0,
        explanation: {
          en: "Today, visitors can see the exposed hypogeum, the underground network of tunnels and chambers where gladiators and animals waited. The original arena floor is gone, revealing the complex system below.",
          es: "Hoy, los visitantes pueden ver el hipogeo expuesto, la red subterránea de túneles y cámaras donde esperaban gladiadores y animales. El piso original de la arena se ha ido, revelando el complejo sistema debajo.",
          de: "Heute können Besucher das freigelegte Hypogäum sehen, das unterirdische Netzwerk von Tunneln und Kammern, wo Gladiatoren und Tiere warteten. Der ursprüngliche Arenaboden ist verschwunden und enthüllt das komplexe System darunter.",
          nl: "Vandaag kunnen bezoekers het blootgelegde hypogeum zien, het ondergrondse netwerk van tunnels en kamers waar gladiatoren en dieren wachtten. De oorspronkelijke arenavloer is verdwenen, wat het complexe systeem eronder onthult."
        }
      },
      {
        question: {
          en: "What symbol appears on modern Italian currency featuring the Colosseum?",
          es: "¿Qué símbolo aparece en la moneda italiana moderna con el Coliseo?",
          de: "Welches Symbol erscheint auf der modernen italienischen Währung mit dem Kolosseum?",
          nl: "Welk symbool verschijnt op moderne Italiaanse munt met het Colosseum?"
        },
        options: {
          en: ["5 euro cent coin", "10 euro note", "1 euro coin", "50 euro note"],
          es: ["Moneda de 5 céntimos de euro", "Billete de 10 euros", "Moneda de 1 euro", "Billete de 50 euros"],
          de: ["5-Euro-Cent-Münze", "10-Euro-Schein", "1-Euro-Münze", "50-Euro-Schein"],
          nl: ["5 eurocent munt", "10 euro biljet", "1 euro munt", "50 euro biljet"]
        },
        correct: 0,
        explanation: {
          en: "The Colosseum appears on the Italian 5 euro cent coin. It's one of Italy's most recognizable symbols and represents the country's rich historical heritage.",
          es: "El Coliseo aparece en la moneda italiana de 5 céntimos de euro. Es uno de los símbolos más reconocibles de Italia y representa el rico patrimonio histórico del país.",
          de: "Das Kolosseum erscheint auf der italienischen 5-Euro-Cent-Münze. Es ist eines der bekanntesten Symbole Italiens und repräsentiert das reiche historische Erbe des Landes.",
          nl: "Het Colosseum verschijnt op de Italiaanse 5 eurocent munt. Het is een van de meest herkenbare symbolen van Italië en vertegenwoordigt het rijke historische erfgoed van het land."
        }
      },
      {
        question: {
          en: "Can modern concerts be held at the Colosseum?",
          es: "¿Se pueden celebrar conciertos modernos en el Coliseo?",
          de: "Können moderne Konzerte im Kolosseum stattfinden?",
          nl: "Kunnen er moderne concerten worden gehouden in het Colosseum?"
        },
        options: {
          en: ["Rarely, only for special events", "Yes, regularly", "Never", "Only classical music"],
          es: ["Raramente, solo para eventos especiales", "Sí, regularmente", "Nunca", "Solo música clásica"],
          de: ["Selten, nur für besondere Veranstaltungen", "Ja, regelmäßig", "Nie", "Nur klassische Musik"],
          nl: ["Zelden, alleen voor speciale evenementen", "Ja, regelmatig", "Nooit", "Alleen klassieke muziek"]
        },
        correct: 0,
        explanation: {
          en: "Very rarely, special concerts are held at the Colosseum. In 2001, Paul McCartney performed there. Such events are extremely limited to protect the ancient structure.",
          es: "Muy raramente, se celebran conciertos especiales en el Coliseo. En 2001, Paul McCartney actuó allí. Tales eventos son extremadamente limitados para proteger la estructura antigua.",
          de: "Sehr selten finden besondere Konzerte im Kolosseum statt. Im Jahr 2001 trat Paul McCartney dort auf. Solche Veranstaltungen sind äußerst begrenzt, um die antike Struktur zu schützen.",
          nl: "Zeer zelden worden er speciale concerten gehouden in het Colosseum. In 2001 trad Paul McCartney daar op. Dergelijke evenementen zijn extreem beperkt om de oude structuur te beschermen."
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
