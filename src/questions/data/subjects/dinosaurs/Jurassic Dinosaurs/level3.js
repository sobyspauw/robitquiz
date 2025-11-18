// Jurassic Dinosaurs Quiz - Level 3: Elementary Knowledge
(function() {
  const level3 = {
    name: {
      en: "Jurassic Dinosaurs Level 3",
      es: "Dinosaurios Jurásicos Nivel 3",
      de: "Jura Dinosaurier Stufe 3",
      nl: "Jura Dino's Level 3"
    },
    questions: [
      {
        question: {
          en: "Which three periods make up the Mesozoic Era?",
          es: "¿Qué tres períodos conforman la Era Mesozoica?",
          de: "Welche drei Perioden bilden das Mesozoikum?",
          nl: "Welke drie tijdperken vormen het Mesozoïcum?"
        },
        options: [
          { en: "Triassic, Jurassic, Cretaceous", es: "Triásico, Jurásico, Cretácico", de: "Trias, Jura, Kreide", nl: "Trias, Jura, Krijt" },
          { en: "Cambrian, Ordovician, Silurian", es: "Cámbrico, Ordovícico, Silúrico", de: "Kambrium, Ordovizium, Silur", nl: "Cambrium, Ordovicium, Siluur" },
          { en: "Jurassic, Permian, Devonian", es: "Jurásico, Pérmico, Devónico", de: "Jura, Perm, Devon", nl: "Jura, Perm, Devoon" },
          { en: "Paleocene, Eocene, Oligocene", es: "Paleoceno, Eoceno, Oligoceno", de: "Paläozän, Eozän, Oligozän", nl: "Paleoceen, Eoceen, Oligoceen" }
        ],
        correct: 0,
        explanation: {
          en: "The Mesozoic Era, known as the 'Age of Reptiles,' consists of the Triassic, Jurassic, and Cretaceous periods.",
          es: "La Era Mesozoica, conocida como la 'Era de los Reptiles,' consiste en los períodos Triásico, Jurásico y Cretácico.",
          de: "Das Mesozoikum, bekannt als das 'Zeitalter der Reptilien,' besteht aus Trias, Jura und Kreidezeit.",
          nl: "Het Mesozoïcum, bekend als het 'Tijdperk van de Reptielen,' bestaat uit het Trias, Jura en Krijt."
        }
      },
      {
        question: {
          en: "What is the estimated weight of an adult Diplodocus?",
          es: "¿Cuál es el peso estimado de un Diplodocus adulto?",
          de: "Was ist das geschätzte Gewicht eines erwachsenen Diplodocus?",
          nl: "Wat is het geschatte gewicht van een volwassen Diplodocus?"
        },
        options: [
          { en: "10-15 tons", es: "10-15 toneladas", de: "10-15 Tonnen", nl: "10-15 ton" },
          { en: "1-2 tons", es: "1-2 toneladas", de: "1-2 Tonnen", nl: "1-2 ton" },
          { en: "50-60 tons", es: "50-60 toneladas", de: "50-60 Tonnen", nl: "50-60 ton" },
          { en: "100 kilograms", es: "100 kilogramos", de: "100 Kilogramm", nl: "100 kilogram" }
        ],
        correct: 0,
        explanation: {
          en: "Adult Diplodocus weighed approximately 10-15 tons, despite being very long, they were relatively lightweight for their size due to their hollow bones.",
          es: "Diplodocus adulto pesaba aproximadamente 10-15 toneladas, a pesar de ser muy largo, eran relativamente ligeros para su tamaño debido a sus huesos huecos.",
          de: "Erwachsener Diplodocus wog etwa 10-15 Tonnen, trotz ihrer großen Länge waren sie relativ leicht für ihre Größe aufgrund ihrer hohlen Knochen.",
          nl: "Volwassen Diplodocus woog ongeveer 10-15 ton, ondanks hun grote lengte waren ze relatief licht voor hun grootte vanwege hun holle botten."
        }
      },
      {
        question: {
          en: "What type of environment did Allosaurus prefer to hunt in?",
          es: "¿En qué tipo de ambiente prefería cazar Allosaurus?",
          de: "In welcher Art von Umgebung jagte Allosaurus bevorzugt?",
          nl: "In welk type omgeving jaagde Allosaurus bij voorkeur?"
        },
        options: [
          { en: "Open woodlands and plains", es: "Bosques abiertos y llanuras", de: "Offene Wälder und Ebenen", nl: "Open bossen en vlaktes" },
          { en: "Dense tropical rainforests", es: "Selvas tropicales densas", de: "Dichte tropische Regenwälder", nl: "Dichte tropische regenwouden" },
          { en: "Mountain peaks", es: "Picos de montañas", de: "Berggipfel", nl: "Bergtoppen" },
          { en: "Deep ocean waters", es: "Aguas oceánicas profundas", de: "Tiefe Meeresgewässer", nl: "Diepe oceaanwateren" }
        ],
        correct: 0,
        explanation: {
          en: "Allosaurus likely preferred open woodlands and plains where it could effectively hunt large herbivorous dinosaurs like sauropods.",
          es: "Allosaurus probablemente prefería bosques abiertos y llanuras donde podía cazar efectivamente grandes dinosaurios herbívoros como saurópodos.",
          de: "Allosaurus bevorzugte wahrscheinlich offene Wälder und Ebenen, wo er große pflanzenfressende Dinosaurier wie Sauropoden effektiv jagen konnte.",
          nl: "Allosaurus gaf waarschijnlijk de voorkeur aan open bossen en vlaktes waar hij effectief grote herbivore dinosaurussen zoals sauropoden kon jagen."
        }
      },
      {
        question: {
          en: "How did Stegosaurus regulate its body temperature?",
          es: "¿Cómo regulaba Stegosaurus su temperatura corporal?",
          de: "Wie regulierte Stegosaurus seine Körpertemperatur?",
          nl: "Hoe reguleerde Stegosaurus zijn lichaamstemperatuur?"
        },
        options: [
          { en: "Through blood vessels in its back plates", es: "A través de vasos sanguíneos en sus placas dorsales", de: "Durch Blutgefäße in seinen Rückenplatten", nl: "Door bloedvaten in zijn rugplaten" },
          { en: "By swimming in cold water", es: "Nadando en agua fría", de: "Durch Schwimmen in kaltem Wasser", nl: "Door zwemmen in koud water" },
          { en: "By hibernating underground", es: "Hibernando bajo tierra", de: "Durch Winterschlaf unter der Erde", nl: "Door ondergronds te hiberneren" },
          { en: "By panting like a dog", es: "Jadeando como un perro", de: "Durch Hecheln wie ein Hund", nl: "Door hijgen zoals een hond" }
        ],
        correct: 0,
        explanation: {
          en: "Stegosaurus likely used the blood vessels in its plates for thermoregulation, allowing heat to be released or absorbed as needed.",
          es: "Stegosaurus probablemente usaba los vasos sanguíneos en sus placas para termorregulación, permitiendo que el calor fuera liberado o absorbido según fuera necesario.",
          de: "Stegosaurus nutzte wahrscheinlich die Blutgefäße in seinen Platten zur Thermoregulation, wodurch Wärme nach Bedarf abgegeben oder aufgenommen werden konnte.",
          nl: "Stegosaurus gebruikte waarschijnlijk de bloedvaten in zijn platen voor thermoregulatie, waardoor warmte kon worden afgegeven of opgenomen zoals nodig."
        }
      },
      {
        question: {
          en: "What was the maximum height that Brachiosaurus could reach with its head?",
          es: "¿Cuál era la altura máxima que Brachiosaurus podía alcanzar con su cabeza?",
          de: "Welche maximale Höhe konnte Brachiosaurus mit seinem Kopf erreichen?",
          nl: "Wat was de maximale hoogte die Brachiosaurus kon bereiken met zijn hoofd?"
        },
        options: [
          { en: "12-13 meters (40-43 feet)", es: "12-13 metros (40-43 pies)", de: "12-13 Meter (40-43 Fuß)", nl: "12-13 meter (40-43 voet)" },
          { en: "5 meters (16 feet)", es: "5 metros (16 pies)", de: "5 Meter (16 Fuß)", nl: "5 meter (16 voet)" },
          { en: "25 meters (82 feet)", es: "25 metros (82 pies)", de: "25 Meter (82 Fuß)", nl: "25 meter (82 voet)" },
          { en: "3 meters (10 feet)", es: "3 metros (10 pies)", de: "3 Meter (10 Fuß)", nl: "3 meter (10 voet)" }
        ],
        correct: 0,
        explanation: {
          en: "Brachiosaurus could reach heights of 12-13 meters, allowing it to browse on vegetation that other dinosaurs couldn't reach.",
          es: "Brachiosaurus podía alcanzar alturas de 12-13 metros, permitiéndole alimentarse de vegetación que otros dinosaurios no podían alcanzar.",
          de: "Brachiosaurus konnte Höhen von 12-13 Metern erreichen, wodurch er an Vegetation fressen konnte, die andere Dinosaurier nicht erreichen konnten.",
          nl: "Brachiosaurus kon hoogtes van 12-13 meter bereiken, waardoor hij kon grazen op vegetatie die andere dinosaurussen niet konden bereiken."
        }
      },
      {
        question: {
          en: "Which geological formation in China has yielded important Jurassic dinosaur fossils?",
          es: "¿Qué formación geológica en China ha producido importantes fósiles de dinosaurios jurásicos?",
          de: "Welche geologische Formation in China hat wichtige Jura-Dinosaurier-Fossilien hervorgebracht?",
          nl: "Welke geologische formatie in China heeft belangrijke Jura-dinosaurusfossielen opgeleverd?"
        },
        options: [
          { en: "Shishugou Formation", es: "Formación Shishugou", de: "Shishugou-Formation", nl: "Shishugou Formatie" },
          { en: "Yixian Formation", es: "Formación Yixian", de: "Yixian-Formation", nl: "Yixian Formatie" },
          { en: "Liaoning Formation", es: "Formación Liaoning", de: "Liaoning-Formation", nl: "Liaoning Formatie" },
          { en: "Gobi Formation", es: "Formación Gobi", de: "Gobi-Formation", nl: "Gobi Formatie" }
        ],
        correct: 0,
        explanation: {
          en: "The Shishugou Formation in northwestern China has produced many important Middle to Late Jurassic dinosaur fossils.",
          es: "La Formación Shishugou en el noroeste de China ha producido muchos fósiles importantes de dinosaurios del Jurásico Medio a Tardío.",
          de: "Die Shishugou-Formation im Nordwesten Chinas hat viele wichtige Dinosaurier-Fossilien aus dem Mittleren bis Späten Jura hervorgebracht.",
          nl: "De Shishugou Formatie in noordwest China heeft veel belangrijke dinosaurusfossielen uit het Midden- tot Laat-Jura opgeleverd."
        }
      },
      {
        question: {
          en: "What was the primary hunting strategy of Ceratosaurus?",
          es: "¿Cuál era la estrategia de caza principal de Ceratosaurus?",
          de: "Was war die primäre Jagdstrategie von Ceratosaurus?",
          nl: "Wat was de primaire jachtstrategie van Ceratosaurus?"
        },
        options: [
          { en: "Ambush predator with powerful jaws", es: "Depredador de emboscada con mandíbulas poderosas", de: "Hinterhalt-Raubtier mit kräftigen Kiefern", nl: "Hinderlaagpredator met krachtige kaken" },
          { en: "Pack hunting in groups", es: "Caza en manada en grupos", de: "Rudeljagd in Gruppen", nl: "Roedeljacht in groepen" },
          { en: "Long-distance pursuit", es: "Persecución de larga distancia", de: "Langstrecken-Verfolgung", nl: "Achtervolging over lange afstand" },
          { en: "Scavenging only", es: "Solo carroñeo", de: "Nur Aasfresser", nl: "Alleen aaseten" }
        ],
        correct: 0,
        explanation: {
          en: "Ceratosaurus was likely an ambush predator with a robust skull and powerful jaws, using stealth rather than speed for hunting.",
          es: "Ceratosaurus probablemente era un depredador de emboscada con un cráneo robusto y mandíbulas poderosas, usando sigilo en lugar de velocidad para cazar.",
          de: "Ceratosaurus war wahrscheinlich ein Hinterhalt-Raubtier mit einem robusten Schädel und kräftigen Kiefern, der Heimlichkeit statt Geschwindigkeit zur Jagd nutzte.",
          nl: "Ceratosaurus was waarschijnlijk een hinderlaagpredator met een robuuste schedel en krachtige kaken, die stealth gebruikte in plaats van snelheid voor de jacht."
        }
      },
      {
        question: {
          en: "What was unique about the tail of Diplodocus?",
          es: "¿Qué tenía de único la cola de Diplodocus?",
          de: "Was war einzigartig am Schwanz von Diplodocus?",
          nl: "Wat was uniek aan de staart van Diplodocus?"
        },
        options: [
          { en: "It could crack like a whip", es: "Podía chasquear como un látigo", de: "Er konnte wie eine Peitsche knallen", nl: "Hij kon knallen als een zweep" },
          { en: "It was covered in armor", es: "Estaba cubierta de armadura", de: "Er war mit Panzerung bedeckt", nl: "Hij was bedekt met pantser" },
          { en: "It had venomous spikes", es: "Tenía púas venenosas", de: "Er hatte giftige Stacheln", nl: "Hij had giftige stekels" },
          { en: "It could regenerate if lost", es: "Podía regenerarse si se perdía", de: "Er konnte sich regenerieren wenn verloren", nl: "Hij kon regenereren als hij verloren ging" }
        ],
        correct: 0,
        explanation: {
          en: "Diplodocus had a long, whip-like tail that could potentially crack like a whip, possibly used for defense or communication.",
          es: "Diplodocus tenía una cola larga similar a un látigo que potencialmente podía chasquear como un látigo, posiblemente usada para defensa o comunicación.",
          de: "Diplodocus hatte einen langen, peitschenartigen Schwanz, der möglicherweise wie eine Peitsche knallen konnte, wahrscheinlich zur Verteidigung oder Kommunikation.",
          nl: "Diplodocus had een lange, zweepachtige staart die mogelijk kon knallen als een zweep, mogelijk gebruikt voor verdediging of communicatie."
        }
      },
      {
        question: {
          en: "How many chambers did sauropod hearts likely have?",
          es: "¿Cuántas cámaras tenían probablemente los corazones de los saurópodos?",
          de: "Wie viele Kammern hatten Sauropoden-Herzen wahrscheinlich?",
          nl: "Hoeveel kamers hadden sauropodenharten waarschijnlijk?"
        },
        options: [
          { en: "Four chambers", es: "Cuatro cámaras", de: "Vier Kammern", nl: "Vier kamers" },
          { en: "Two chambers", es: "Dos cámaras", de: "Zwei Kammern", nl: "Twee kamers" },
          { en: "Three chambers", es: "Tres cámaras", de: "Drei Kammern", nl: "Drie kamers" },
          { en: "One chamber", es: "Una cámara", de: "Eine Kammer", nl: "Een kamer" }
        ],
        correct: 0,
        explanation: {
          en: "Sauropods likely had four-chambered hearts similar to modern birds and mammals, necessary for pumping blood to their extremely long necks.",
          es: "Los saurópodos probablemente tenían corazones de cuatro cámaras similares a las aves y mamíferos modernos, necesarios para bombear sangre a sus cuellos extremadamente largos.",
          de: "Sauropoden hatten wahrscheinlich vierkammerige Herzen ähnlich modernen Vögeln und Säugetieren, notwendig um Blut zu ihren extrem langen Hälsen zu pumpen.",
          nl: "Sauropoden hadden waarschijnlijk vierkamerige harten vergelijkbaar met moderne vogels en zoogdieren, nodig voor het pompen van bloed naar hun extreem lange nekken."
        }
      },
      {
        question: {
          en: "What type of social behavior did Allosaurus likely exhibit?",
          es: "¿Qué tipo de comportamiento social probablemente exhibía Allosaurus?",
          de: "Welche Art von Sozialverhalten zeigte Allosaurus wahrscheinlich?",
          nl: "Welk type sociaal gedrag vertoonde Allosaurus waarschijnlijk?"
        },
        options: [
          { en: "Mostly solitary", es: "Mayormente solitario", de: "Meist einzelgängerisch", nl: "Voornamelijk solitair" },
          { en: "Large pack hunting", es: "Caza en manadas grandes", de: "Großrudel-Jagd", nl: "Grote roedeljacht" },
          { en: "Family groups only", es: "Solo grupos familiares", de: "Nur Familiengruppen", nl: "Alleen familiegroepen" },
          { en: "Massive herds", es: "Manadas masivas", de: "Massive Herden", nl: "Massale kuddes" }
        ],
        correct: 0,
        explanation: {
          en: "Evidence suggests Allosaurus was mostly solitary, though they may have occasionally congregated around large carcasses or water sources.",
          es: "La evidencia sugiere que Allosaurus era mayormente solitario, aunque pueden haber ocasionalmente se congregado alrededor de cadáveres grandes o fuentes de agua.",
          de: "Belege deuten darauf hin, dass Allosaurus meist einzelgängerisch war, obwohl sie sich gelegentlich um große Kadaver oder Wasserquellen versammelt haben könnten.",
          nl: "Bewijs suggereert dat Allosaurus voornamelijk solitair was, hoewel ze zich soms verzamelden rond grote karkassen of waterbronnen."
        }
      },
      {
        question: {
          en: "What was the typical walking speed of large sauropods like Diplodocus?",
          es: "¿Cuál era la velocidad típica de caminata de grandes saurópodos como Diplodocus?",
          de: "Was war die typische Gehgeschwindigkeit großer Sauropoden wie Diplodocus?",
          nl: "Wat was de typische loopsnelheid van grote sauropoden zoals Diplodocus?"
        },
        options: [
          { en: "4-6 km/h (2.5-3.7 mph)", es: "4-6 km/h (2.5-3.7 mph)", de: "4-6 km/h (2.5-3.7 mph)", nl: "4-6 km/h (2.5-3.7 mph)" },
          { en: "20-30 km/h (12-18 mph)", es: "20-30 km/h (12-18 mph)", de: "20-30 km/h (12-18 mph)", nl: "20-30 km/h (12-18 mph)" },
          { en: "50-60 km/h (31-37 mph)", es: "50-60 km/h (31-37 mph)", de: "50-60 km/h (31-37 mph)", nl: "50-60 km/h (31-37 mph)" },
          { en: "1-2 km/h (0.6-1.2 mph)", es: "1-2 km/h (0.6-1.2 mph)", de: "1-2 km/h (0.6-1.2 mph)", nl: "1-2 km/h (0.6-1.2 mph)" }
        ],
        correct: 0,
        explanation: {
          en: "Large sauropods walked at relatively slow speeds of 4-6 km/h, similar to modern elephants, due to their massive size and weight.",
          es: "Los grandes saurópodos caminaban a velocidades relativamente lentas de 4-6 km/h, similar a los elefantes modernos, debido a su tamaño y peso masivos.",
          de: "Große Sauropoden gingen mit relativ langsamen Geschwindigkeiten von 4-6 km/h, ähnlich modernen Elefanten, aufgrund ihrer massiven Größe und Gewicht.",
          nl: "Grote sauropoden liepen met relatief lage snelheden van 4-6 km/h, vergelijkbaar met moderne olifanten, vanwege hun massieve grootte en gewicht."
        }
      },
      {
        question: {
          en: "What was the primary defense mechanism of Tuojiangosaurus?",
          es: "¿Cuál era el mecanismo de defensa principal de Tuojiangosaurus?",
          de: "Was war der primäre Verteidigungsmechanismus von Tuojiangosaurus?",
          nl: "Wat was het primaire verdedigingsmechanisme van Tuojiangosaurus?"
        },
        options: [
          { en: "Shoulder spikes and tail spikes", es: "Púas en los hombros y cola", de: "Schulterstacheln und Schwanzstacheln", nl: "Schouderstekels en staartstekels" },
          { en: "Camouflage coloring", es: "Coloración de camuflaje", de: "Tarnfärbung", nl: "Camouflagekleuring" },
          { en: "Extremely fast running", es: "Carrera extremadamente rápida", de: "Extrem schnelles Laufen", nl: "Extreem snel rennen" },
          { en: "Toxic skin secretions", es: "Secreciones tóxicas de la piel", de: "Giftige Hautsekrete", nl: "Giftige huidafscheidingen" }
        ],
        correct: 0,
        explanation: {
          en: "Tuojiangosaurus, a Chinese stegosaur, had defensive spikes on its shoulders and tail, similar to other stegosaurids.",
          es: "Tuojiangosaurus, un estegosaurio chino, tenía púas defensivas en sus hombros y cola, similar a otros estegosáuridos.",
          de: "Tuojiangosaurus, ein chinesischer Stegosaurier, hatte Verteidigungsstacheln an Schultern und Schwanz, ähnlich anderen Stegosauriden.",
          nl: "Tuojiangosaurus, een Chinese stegosaurus, had verdedigingsstekels op zijn schouders en staart, vergelijkbaar met andere stegosauriden."
        }
      },
      {
        question: {
          en: "How did Compsognathus likely hunt its prey?",
          es: "¿Cómo probablemente cazaba Compsognathus a su presa?",
          de: "Wie jagte Compsognathus wahrscheinlich seine Beute?",
          nl: "Hoe jaagde Compsognathus waarschijnlijk op zijn prooi?"
        },
        options: [
          { en: "Using speed and agility to catch small animals", es: "Usando velocidad y agilidad para atrapar animales pequeños", de: "Mit Geschwindigkeit und Wendigkeit kleine Tiere fangen", nl: "Met snelheid en behendigheid kleine dieren vangen" },
          { en: "Digging burrows to trap prey", es: "Cavando madrigueras para atrapar presas", de: "Graben von Höhlen um Beute zu fangen", nl: "Graven van holen om prooi te vangen" },
          { en: "Using camouflage to ambush", es: "Usando camuflaje para emboscar", de: "Mit Tarnung für Hinterhalte", nl: "Met camouflage voor hinderlagen" },
          { en: "Cooperative pack hunting", es: "Caza cooperativa en manada", de: "Kooperative Rudeljagd", nl: "Coöperatieve roedeljacht" }
        ],
        correct: 0,
        explanation: {
          en: "Compsognathus was a small, fast theropod that likely hunted insects, small reptiles, and mammals using its speed and agility.",
          es: "Compsognathus era un terópodo pequeño y rápido que probablemente cazaba insectos, pequeños reptiles y mamíferos usando su velocidad y agilidad.",
          de: "Compsognathus war ein kleiner, schneller Theropode, der wahrscheinlich Insekten, kleine Reptilien und Säugetiere mit Geschwindigkeit und Wendigkeit jagte.",
          nl: "Compsognathus was een kleine, snelle theropode die waarschijnlijk insecten, kleine reptielen en zoogdieren joeg met zijn snelheid en behendigheid."
        }
      },
      {
        question: {
          en: "What was the atmospheric oxygen level during the Jurassic period?",
          es: "¿Cuál era el nivel de oxígeno atmosférico durante el período Jurásico?",
          de: "Wie war der atmosphärische Sauerstoffgehalt während der Jurazeit?",
          nl: "Wat was het atmosferische zuurstofniveau tijdens het Jura-tijdperk?"
        },
        options: [
          { en: "Higher than today (about 23%)", es: "Más alto que hoy (alrededor del 23%)", de: "Höher als heute (etwa 23%)", nl: "Hoger dan vandaag (ongeveer 23%)" },
          { en: "Same as today (21%)", es: "Igual que hoy (21%)", de: "Gleich wie heute (21%)", nl: "Hetzelfde als vandaag (21%)" },
          { en: "Lower than today (15%)", es: "Más bajo que hoy (15%)", de: "Niedriger als heute (15%)", nl: "Lager dan vandaag (15%)" },
          { en: "Much higher (35%)", es: "Mucho más alto (35%)", de: "Viel höher (35%)", nl: "Veel hoger (35%)" }
        ],
        correct: 0,
        explanation: {
          en: "Oxygen levels during the Jurassic were higher than today, around 23%, which may have supported the large size of many dinosaurs.",
          es: "Los niveles de oxígeno durante el Jurásico eran más altos que hoy, alrededor del 23%, lo que puede haber apoyado el gran tamaño de muchos dinosaurios.",
          de: "Die Sauerstoffwerte während der Jurazeit waren höher als heute, etwa 23%, was möglicherweise die große Größe vieler Dinosaurier unterstützte.",
          nl: "Zuurstofniveaus tijdens het Jura waren hoger dan vandaag, rond 23%, wat mogelijk de grote grootte van veel dinosaurussen ondersteunde."
        }
      },
      {
        question: {
          en: "Which theropod dinosaur is sometimes called the 'lion of the Jurassic'?",
          es: "¿Qué dinosaurio terópodo es a veces llamado el 'león del Jurásico'?",
          de: "Welcher Theropoden-Dinosaurier wird manchmal der 'Löwe des Jura' genannt?",
          nl: "Welke theropode dinosaurus wordt soms de 'leeuw van het Jura' genoemd?"
        },
        options: [
          { en: "Allosaurus", es: "Allosaurus", de: "Allosaurus", nl: "Allosaurus" },
          { en: "Ceratosaurus", es: "Ceratosaurus", de: "Ceratosaurus", nl: "Ceratosaurus" },
          { en: "Dilophosaurus", es: "Dilophosaurus", de: "Dilophosaurus", nl: "Dilophosaurus" },
          { en: "Compsognathus", es: "Compsognathus", de: "Compsognathus", nl: "Compsognathus" }
        ],
        correct: 0,
        explanation: {
          en: "Allosaurus is sometimes called the 'lion of the Jurassic' because it was the dominant apex predator of its time and ecosystem.",
          es: "Allosaurus es a veces llamado el 'león del Jurásico' porque era el depredador ápice dominante de su tiempo y ecosistema.",
          de: "Allosaurus wird manchmal der 'Löwe des Jura' genannt, weil er der dominante Spitzenprädator seiner Zeit und seines Ökosystems war.",
          nl: "Allosaurus wordt soms de 'leeuw van het Jura' genoemd omdat hij de dominante toppredator was van zijn tijd en ecosysteem."
        }
      },
      {
        question: {
          en: "What was the function of the long neural spines on Diplodocus vertebrae?",
          es: "¿Cuál era la función de las espinas neurales largas en las vértebras de Diplodocus?",
          de: "Was war die Funktion der langen Neuralfortsätze an den Diplodocus-Wirbeln?",
          nl: "Wat was de functie van de lange neurale uitsteeksels op de Diplodocus wervels?"
        },
        options: [
          { en: "Muscle attachment for neck support", es: "Inserción muscular para soporte del cuello", de: "Muskelansatz zur Nackenstütze", nl: "Spierbevestiging voor nekondersteuning" },
          { en: "Heat regulation only", es: "Solo regulación de calor", de: "Nur Wärmeregulierung", nl: "Alleen warmteregulatie" },
          { en: "Display purposes only", es: "Solo propósitos de exhibición", de: "Nur Anzeigezwecke", nl: "Alleen voor vertoon" },
          { en: "Armor protection", es: "Protección de armadura", de: "Panzerschutz", nl: "Pantserbescherming" }
        ],
        correct: 0,
        explanation: {
          en: "The long neural spines provided attachment points for powerful muscles and ligaments needed to support Diplodocus's extremely long neck.",
          es: "Las espinas neurales largas proporcionaban puntos de inserción para músculos y ligamentos poderosos necesarios para soportar el cuello extremadamente largo de Diplodocus.",
          de: "Die langen Neuralfortsätze boten Ansatzpunkte für kräftige Muskeln und Bänder, die zur Stützung des extrem langen Halses von Diplodocus nötig waren.",
          nl: "De lange neurale uitsteeksels boden bevestigingspunten voor krachtige spieren en ligamenten die nodig waren om de extreem lange nek van Diplodocus te ondersteunen."
        }
      },
      {
        question: {
          en: "What type of teeth did Camarasaurus have compared to other sauropods?",
          es: "¿Qué tipo de dientes tenía Camarasaurus comparado con otros saurópodos?",
          de: "Welche Art von Zähnen hatte Camarasaurus im Vergleich zu anderen Sauropoden?",
          nl: "Wat voor tanden had Camarasaurus vergeleken met andere sauropoden?"
        },
        options: [
          { en: "Large, spoon-shaped teeth", es: "Dientes grandes en forma de cuchara", de: "Große, löffelförmige Zähne", nl: "Grote, lepelvormige tanden" },
          { en: "Small, peg-like teeth", es: "Dientes pequeños en forma de clavija", de: "Kleine, stiftartige Zähne", nl: "Kleine, penachtige tanden" },
          { en: "Sharp, pointed teeth", es: "Dientes afilados y puntiagudos", de: "Scharfe, spitze Zähne", nl: "Scherpe, puntige tanden" },
          { en: "No teeth at all", es: "Sin dientes en absoluto", de: "Gar keine Zähne", nl: "Helemaal geen tanden" }
        ],
        correct: 0,
        explanation: {
          en: "Camarasaurus had large, robust, spoon-shaped teeth that were well-suited for processing tougher plant material compared to other sauropods.",
          es: "Camarasaurus tenía dientes grandes, robustos y en forma de cuchara que estaban bien adaptados para procesar material vegetal más duro comparado con otros saurópodos.",
          de: "Camarasaurus hatte große, robuste, löffelförmige Zähne, die gut geeignet waren, härteres Pflanzenmaterial zu verarbeiten im Vergleich zu anderen Sauropoden.",
          nl: "Camarasaurus had grote, robuuste, lepelvormige tanden die goed geschikt waren voor het verwerken van taaier plantenmateriaal vergeleken met andere sauropoden."
        }
      },
      {
        question: {
          en: "What geological evidence indicates the breakup of Pangaea during the Jurassic?",
          es: "¿Qué evidencia geológica indica la separación de Pangea durante el Jurásico?",
          de: "Welche geologischen Beweise zeigen das Auseinanderbrechen von Pangäa während des Jura?",
          nl: "Welk geologisch bewijs wijst op het uiteenvallen van Pangaea tijdens het Jura?"
        },
        options: [
          { en: "Formation of new ocean basins", es: "Formación de nuevas cuencas oceánicas", de: "Bildung neuer Ozeanbecken", nl: "Vorming van nieuwe oceaanbekkens" },
          { en: "Volcanic activity only", es: "Solo actividad volcánica", de: "Nur vulkanische Aktivität", nl: "Alleen vulkanische activiteit" },
          { en: "Mountain building only", es: "Solo formación de montañas", de: "Nur Gebirgsbildung", nl: "Alleen gebergte vorming" },
          { en: "No geological evidence", es: "Sin evidencia geológica", de: "Keine geologischen Beweise", nl: "Geen geologisch bewijs" }
        ],
        correct: 0,
        explanation: {
          en: "The formation of new ocean basins, including the early Atlantic Ocean, provides evidence for the breakup of Pangaea during the Jurassic period.",
          es: "La formación de nuevas cuencas oceánicas, incluyendo el Océano Atlántico temprano, proporciona evidencia de la separación de Pangea durante el período Jurásico.",
          de: "Die Bildung neuer Ozeanbecken, einschließlich des frühen Atlantiks, liefert Beweise für das Auseinanderbrechen von Pangäa während der Jurazeit.",
          nl: "De vorming van nieuwe oceaanbekkens, inclusief de vroege Atlantische Oceaan, levert bewijs voor het uiteenvallen van Pangaea tijdens het Jura-tijdperk."
        }
      },
      {
        question: {
          en: "What was the primary predator-prey relationship in Jurassic ecosystems?",
          es: "¿Cuál era la relación depredador-presa principal en ecosistemas jurásicos?",
          de: "Was war die primäre Räuber-Beute-Beziehung in Jura-Ökosystemen?",
          nl: "Wat was de primaire predator-prooi relatie in Jura-ecosystemen?"
        },
        options: [
          { en: "Large theropods hunting sauropods and stegosaurs", es: "Grandes terópodos cazando saurópodos y estegosaurios", de: "Große Theropoden jagen Sauropoden und Stegosaurier", nl: "Grote theropoden die sauropoden en stegosaurussen jagen" },
          { en: "All dinosaurs were peaceful herbivores", es: "Todos los dinosaurios eran herbívoros pacíficos", de: "Alle Dinosaurier waren friedliche Pflanzenfresser", nl: "Alle dinosaurussen waren vreedzame herbivoren" },
          { en: "Only small animals were prey", es: "Solo animales pequeños eran presas", de: "Nur kleine Tiere waren Beute", nl: "Alleen kleine dieren waren prooi" },
          { en: "Marine reptiles hunted dinosaurs", es: "Reptiles marinos cazaban dinosaurios", de: "Meeresreptilien jagten Dinosaurier", nl: "Mariene reptielen joegen op dinosaurussen" }
        ],
        correct: 0,
        explanation: {
          en: "Jurassic ecosystems featured complex predator-prey relationships with large theropods like Allosaurus and Ceratosaurus hunting massive herbivores like Diplodocus and Stegosaurus.",
          es: "Los ecosistemas jurásicos presentaban relaciones depredador-presa complejas con grandes terópodos como Allosaurus y Ceratosaurus cazando herbívoros masivos como Diplodocus y Stegosaurus.",
          de: "Jura-Ökosysteme zeigten komplexe Räuber-Beute-Beziehungen mit großen Theropoden wie Allosaurus und Ceratosaurus, die massive Pflanzenfresser wie Diplodocus und Stegosaurus jagten.",
          nl: "Jura-ecosystemen hadden complexe predator-prooi relaties met grote theropoden zoals Allosaurus en Ceratosaurus die massieve herbivoren zoals Diplodocus en Stegosaurus joegen."
        }
      },
      {
        question: {
          en: "How did Jurassic sauropods likely organize their social groups?",
          es: "¿Cómo organizaban probablemente sus grupos sociales los saurópodos jurásicos?",
          de: "Wie organisierten Jura-Sauropoden wahrscheinlich ihre sozialen Gruppen?",
          nl: "Hoe organiseerden Jura-sauropoden waarschijnlijk hun sociale groepen?"
        },
        options: [
          { en: "Mixed-age herds with adults protecting juveniles", es: "Manadas de edad mixta con adultos protegiendo juveniles", de: "Altersgemischte Herden mit Erwachsenen, die Jungtiere schützen", nl: "Gemengde-leeftijd kuddes met volwassenen die juvenielen beschermen" },
          { en: "Solitary lifestyle only", es: "Solo estilo de vida solitario", de: "Nur Einzelgänger-Lebensstil", nl: "Alleen solitaire levensstijl" },
          { en: "Same-age groups only", es: "Solo grupos de la misma edad", de: "Nur gleich-altrige Gruppen", nl: "Alleen groepen van dezelfde leeftijd" },
          { en: "No social organization", es: "Sin organización social", de: "Keine soziale Organisation", nl: "Geen sociale organisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Fossil trackways suggest sauropods traveled in mixed-age herds with larger adults on the outside protecting smaller juveniles in the center, similar to modern elephant herds.",
          es: "Las pistas fósiles sugieren que los saurópodos viajaban en manadas de edad mixta con adultos más grandes en el exterior protegiendo juveniles más pequeños en el centro, similar a las manadas de elefantes modernos.",
          de: "Fossile Fährten deuten darauf hin, dass Sauropoden in altersgemischten Herden reisten, mit größeren Erwachsenen außen, die kleinere Jungtiere in der Mitte schützten, ähnlich modernen Elefantenherden.",
          nl: "Fossiele spoorwegen suggereren dat sauropoden reisden in gemengde-leeftijd kuddes met grotere volwassenen aan de buitenkant die kleinere juvenielen in het centrum beschermden, vergelijkbaar met moderne olifantenkuddes."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();