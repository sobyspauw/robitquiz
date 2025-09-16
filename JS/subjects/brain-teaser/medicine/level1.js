// Medicine - Level 1: Human Anatomy Basics
(function() {
  const level1 = {
    name: {
      en: "Human Anatomy Basics",
      es: "Anatomía Humana Básica",
      de: "Grundlagen der menschlichen Anatomie",
      nl: "Basisbeginselen van Menselijke Anatomie"
    },
    questions: [
      {
        question: {
          en: "How many bones are in the adult human body?",
          es: "¿Cuántos huesos hay en el cuerpo humano adulto?",
          de: "Wie viele Knochen hat der erwachsene menschliche Körper?",
          nl: "Hoeveel botten heeft het volwassen menselijk lichaam?"
        },
        options: [
          { en: "206", es: "206", de: "206", nl: "206" },
          { en: "195", es: "195", de: "195", nl: "195" },
          { en: "220", es: "220", de: "220", nl: "220" },
          { en: "180", es: "180", de: "180", nl: "180" }
        ],
        correct: 0,
        explanation: {
          en: "The adult human skeleton consists of 206 bones. Babies are born with approximately 270 bones, but many fuse together as they grow and develop.",
          es: "El esqueleto humano adulto consiste en 206 huesos. Los bebés nacen con aproximadamente 270 huesos, pero muchos se fusionan mientras crecen y se desarrollan.",
          de: "Das erwachsene menschliche Skelett besteht aus 206 Knochen. Babys werden mit etwa 270 Knochen geboren, aber viele verschmelzen während des Wachstums und der Entwicklung.",
          nl: "Het volwassen menselijk skelet bestaat uit 206 botten. Baby's worden geboren met ongeveer 270 botten, maar veel groeien samen tijdens hun groei en ontwikkeling."
        }
      },
      {
        question: {
          en: "Which organ is responsible for filtering blood and producing urine?",
          es: "¿Qué órgano es responsable de filtrar la sangre y producir orina?",
          de: "Welches Organ ist für die Filterung des Blutes und die Produktion von Urin verantwortlich?",
          nl: "Welk orgaan is verantwoordelijk voor het filteren van bloed en het produceren van urine?"
        },
        options: [
          { en: "Kidneys", es: "Riñones", de: "Nieren", nl: "Nieren" },
          { en: "Liver", es: "Hígado", de: "Leber", nl: "Lever" },
          { en: "Bladder", es: "Vejiga", de: "Blase", nl: "Blaas" },
          { en: "Spleen", es: "Bazo", de: "Milz", nl: "Milt" }
        ],
        correct: 0,
        explanation: {
          en: "The kidneys filter blood to remove waste products and excess water, producing urine. Each kidney contains about 1 million tiny filtering units called nephrons.",
          es: "Los riñones filtran la sangre para eliminar productos de desecho y agua en exceso, produciendo orina. Cada riñón contiene aproximadamente 1 millón de unidades de filtrado diminutas llamadas nefronas.",
          de: "Die Nieren filtern das Blut, um Abfallprodukte und überschüssiges Wasser zu entfernen und Urin zu produzieren. Jede Niere enthält etwa 1 Million winzige Filtereinheiten, die Nephrone genannt werden.",
          nl: "De nieren filteren bloed om afvalstoffen en overtollig water te verwijderen, waardoor urine wordt geproduceerd. Elke nier bevat ongeveer 1 miljoen kleine filtereenheden genaamd nefronen."
        }
      },
      {
        question: {
          en: "What is the largest organ in the human body?",
          es: "¿Cuál es el órgano más grande del cuerpo humano?",
          de: "Was ist das größte Organ im menschlichen Körper?",
          nl: "Wat is het grootste orgaan van het menselijk lichaam?"
        },
        options: [
          { en: "Skin", es: "Piel", de: "Haut", nl: "Huid" },
          { en: "Liver", es: "Hígado", de: "Leber", nl: "Lever" },
          { en: "Brain", es: "Cerebro", de: "Gehirn", nl: "Hersenen" },
          { en: "Heart", es: "Corazón", de: "Herz", nl: "Hart" }
        ],
        correct: 0,
        explanation: {
          en: "The skin is the largest organ in the human body, covering approximately 20 square feet in adults. It serves as a protective barrier and helps regulate body temperature.",
          es: "La piel es el órgano más grande del cuerpo humano, cubriendo aproximadamente 2 metros cuadrados en adultos. Sirve como barrera protectora y ayuda a regular la temperatura corporal.",
          de: "Die Haut ist das größte Organ im menschlichen Körper und bedeckt bei Erwachsenen etwa 2 Quadratmeter. Sie dient als Schutzbarriere und hilft bei der Regulation der Körpertemperatur.",
          nl: "De huid is het grootste orgaan van het menselijk lichaam en bedekt ongeveer 2 vierkante meter bij volwassenen. Het dient als beschermende barrière en helpt de lichaamstemperatuur te reguleren."
        }
      },
      {
        question: {
          en: "How many chambers does the human heart have?",
          es: "¿Cuántas cámaras tiene el corazón humano?",
          de: "Wie viele Kammern hat das menschliche Herz?",
          nl: "Hoeveel kamers heeft het menselijk hart?"
        },
        options: [
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "6", es: "6", de: "6", nl: "6" }
        ],
        correct: 0,
        explanation: {
          en: "The human heart has four chambers: two atria (upper chambers) and two ventricles (lower chambers). This four-chamber design allows efficient separation of oxygenated and deoxygenated blood.",
          es: "El corazón humano tiene cuatro cámaras: dos aurículas (cámaras superiores) y dos ventrículos (cámaras inferiores). Este diseño de cuatro cámaras permite una separación eficiente de sangre oxigenada y desoxigenada.",
          de: "Das menschliche Herz hat vier Kammern: zwei Vorhöfe (obere Kammern) und zwei Herzkammern (untere Kammern). Dieses vierkammerige Design ermöglicht eine effiziente Trennung von sauerstoffreichem und sauerstoffarmem Blut.",
          nl: "Het menselijk hart heeft vier kamers: twee atria (bovenste kamers) en twee ventrikels (onderste kamers). Dit vierkamer ontwerp maakt efficiënte scheiding van zuurstofrijk en zuurstofarm bloed mogelijk."
        }
      },
      {
        question: {
          en: "Which part of the brain controls balance and coordination?",
          es: "¿Qué parte del cerebro controla el equilibrio y la coordinación?",
          de: "Welcher Teil des Gehirns kontrolliert Gleichgewicht und Koordination?",
          nl: "Welk deel van de hersenen controleert evenwicht en coördinatie?"
        },
        options: [
          { en: "Cerebellum", es: "Cerebelo", de: "Kleinhirn", nl: "Cerebellum" },
          { en: "Cerebrum", es: "Cerebro", de: "Großhirn", nl: "Cerebrum" },
          { en: "Brain stem", es: "Tronco cerebral", de: "Hirnstamm", nl: "Hersenstam" },
          { en: "Medulla", es: "Médula", de: "Medulla", nl: "Medulla" }
        ],
        correct: 0,
        explanation: {
          en: "The cerebellum, located at the back of the brain below the cerebrum, is responsible for balance, coordination, and fine motor control. It helps smooth out movements and maintain posture.",
          es: "El cerebelo, ubicado en la parte posterior del cerebro debajo del cerebro, es responsable del equilibrio, coordinación y control motor fino. Ayuda a suavizar los movimientos y mantener la postura.",
          de: "Das Kleinhirn, das sich im hinteren Teil des Gehirns unter dem Großhirn befindet, ist für Gleichgewicht, Koordination und Feinmotorik verantwortlich. Es hilft dabei, Bewegungen zu glätten und die Haltung zu erhalten.",
          nl: "Het cerebellum, gelegen aan de achterkant van de hersenen onder het cerebrum, is verantwoordelijk voor evenwicht, coördinatie en fijne motorische controle. Het helpt bewegingen gladder te maken en de houding te behouden."
        }
      },
      {
        question: {
          en: "What type of blood vessel carries blood away from the heart?",
          es: "¿Qué tipo de vaso sanguíneo lleva sangre lejos del corazón?",
          de: "Welche Art von Blutgefäß transportiert Blut vom Herzen weg?",
          nl: "Welk type bloedvat voert bloed weg van het hart?"
        },
        options: [
          { en: "Arteries", es: "Arterias", de: "Arterien", nl: "Slagaders" },
          { en: "Veins", es: "Venas", de: "Venen", nl: "Aderen" },
          { en: "Capillaries", es: "Capilares", de: "Kapillaren", nl: "Haarvaten" },
          { en: "Lymphatics", es: "Linfáticos", de: "Lymphgefäße", nl: "Lymfevaten" }
        ],
        correct: 0,
        explanation: {
          en: "Arteries carry blood away from the heart to various parts of the body. They have thick, muscular walls to withstand the high pressure of blood pumped by the heart.",
          es: "Las arterias llevan sangre lejos del corazón a varias partes del cuerpo. Tienen paredes gruesas y musculares para resistir la alta presión de la sangre bombeada por el corazón.",
          de: "Arterien transportieren Blut vom Herzen zu verschiedenen Körperteilen. Sie haben dicke, muskulöse Wände, um dem hohen Druck des vom Herzen gepumpten Blutes standzuhalten.",
          nl: "Slagaders voeren bloed weg van het hart naar verschillende delen van het lichaam. Ze hebben dikke, gespierde wanden om de hoge druk van het door het hart gepompte bloed te weerstaan."
        }
      },
      {
        question: {
          en: "Which muscle is responsible for breathing?",
          es: "¿Qué músculo es responsable de la respiración?",
          de: "Welcher Muskel ist für das Atmen verantwortlich?",
          nl: "Welke spier is verantwoordelijk voor het ademen?"
        },
        options: [
          { en: "Diaphragm", es: "Diafragma", de: "Zwerchfell", nl: "Middenrif" },
          { en: "Intercostal muscles", es: "Músculos intercostales", de: "Zwischenrippenmuskeln", nl: "Tussenribspieren" },
          { en: "Pectoralis major", es: "Pectoral mayor", de: "Großer Brustmuskel", nl: "Grote borstspier" },
          { en: "Latissimus dorsi", es: "Dorsal ancho", de: "Latissimus dorsi", nl: "Brede rugspier" }
        ],
        correct: 0,
        explanation: {
          en: "The diaphragm is the primary muscle of respiration. When it contracts, it moves downward, creating a vacuum that draws air into the lungs. When it relaxes, air is expelled.",
          es: "El diafragma es el músculo principal de la respiración. Cuando se contrae, se mueve hacia abajo, creando un vacío que atrae aire a los pulmones. Cuando se relaja, el aire es expulsado.",
          de: "Das Zwerchfell ist der Hauptmuskel der Atmung. Wenn es sich zusammenzieht, bewegt es sich nach unten und erzeugt ein Vakuum, das Luft in die Lungen zieht. Wenn es sich entspannt, wird Luft ausgestoßen.",
          nl: "Het middenrif is de primaire ademhalingsspier. Wanneer het samentrekt, beweegt het naar beneden en creëert een vacuüm dat lucht de longen intrekt. Wanneer het ontspant, wordt lucht uitgestoten."
        }
      },
      {
        question: {
          en: "How many pairs of ribs does a human typically have?",
          es: "¿Cuántos pares de costillas tiene típicamente un humano?",
          de: "Wie viele Rippenpaare hat ein Mensch normalerweise?",
          nl: "Hoeveel paar ribben heeft een mens doorgaans?"
        },
        options: [
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "10", es: "10", de: "10", nl: "10" },
          { en: "14", es: "14", de: "14", nl: "14" },
          { en: "11", es: "11", de: "11", nl: "11" }
        ],
        correct: 0,
        explanation: {
          en: "Humans typically have 12 pairs of ribs (24 total). The first 7 pairs are called 'true ribs' because they connect directly to the sternum, while pairs 8-12 are called 'false ribs'.",
          es: "Los humanos típicamente tienen 12 pares de costillas (24 en total). Los primeros 7 pares se llaman 'costillas verdaderas' porque se conectan directamente al esternón, mientras que los pares 8-12 se llaman 'costillas falsas'.",
          de: "Menschen haben normalerweise 12 Rippenpaare (24 insgesamt). Die ersten 7 Paare werden 'echte Rippen' genannt, weil sie direkt mit dem Brustbein verbunden sind, während die Paare 8-12 'falsche Rippen' genannt werden.",
          nl: "Mensen hebben doorgaans 12 paar ribben (24 in totaal). De eerste 7 paar worden 'echte ribben' genoemd omdat ze direct verbonden zijn met het borstbeen, terwijl paren 8-12 'valse ribben' worden genoemd."
        }
      },
      {
        question: {
          en: "What is the function of red blood cells?",
          es: "¿Cuál es la función de los glóbulos rojos?",
          de: "Was ist die Funktion der roten Blutkörperchen?",
          nl: "Wat is de functie van rode bloedcellen?"
        },
        options: [
          { en: "Carry oxygen", es: "Transportar oxígeno", de: "Sauerstoff transportieren", nl: "Zuurstof vervoeren" },
          { en: "Fight infections", es: "Combatir infecciones", de: "Infektionen bekämpfen", nl: "Infecties bestrijden" },
          { en: "Blood clotting", es: "Coagulación sanguínea", de: "Blutgerinnung", nl: "Bloedstolling" },
          { en: "Produce hormones", es: "Producir hormonas", de: "Hormone produzieren", nl: "Hormonen produceren" }
        ],
        correct: 0,
        explanation: {
          en: "Red blood cells (erythrocytes) contain hemoglobin, a protein that binds to oxygen and carries it from the lungs to tissues throughout the body. They also help transport carbon dioxide back to the lungs.",
          es: "Los glóbulos rojos (eritrocitos) contienen hemoglobina, una proteína que se une al oxígeno y lo transporta desde los pulmones a los tejidos por todo el cuerpo. También ayudan a transportar dióxido de carbono de vuelta a los pulmones.",
          de: "Rote Blutkörperchen (Erythrozyten) enthalten Hämoglobin, ein Protein, das sich an Sauerstoff bindet und ihn von den Lungen zu den Geweben im ganzen Körper transportiert. Sie helfen auch dabei, Kohlendioxid zurück zu den Lungen zu transportieren.",
          nl: "Rode bloedcellen (erytrocyten) bevatten hemoglobine, een eiwit dat zich bindt aan zuurstof en het vervoert van de longen naar weefsels door het hele lichaam. Ze helpen ook koolstofdioxide terug naar de longen te transporteren."
        }
      },
      {
        question: {
          en: "Which bone is commonly known as the collarbone?",
          es: "¿Qué hueso se conoce comúnmente como la clavícula?",
          de: "Welcher Knochen ist allgemein als Schlüsselbein bekannt?",
          nl: "Welke bot staat algemeen bekend als het sleutelbeen?"
        },
        options: [
          { en: "Clavicle", es: "Clavícula", de: "Klavikula", nl: "Clavicula" },
          { en: "Scapula", es: "Escápula", de: "Schulterblatt", nl: "Schouderblad" },
          { en: "Sternum", es: "Esternón", de: "Brustbein", nl: "Borstbeen" },
          { en: "Humerus", es: "Húmero", de: "Oberarmknochen", nl: "Opperarmbeen" }
        ],
        correct: 0,
        explanation: {
          en: "The clavicle, commonly called the collarbone, is a horizontal bone that connects the shoulder to the chest. It's one of the most frequently broken bones due to its exposed position.",
          es: "La clavícula, comúnmente llamada hueso del collar, es un hueso horizontal que conecta el hombro con el pecho. Es uno de los huesos que se fractura con más frecuencia debido a su posición expuesta.",
          de: "Die Klavikula, allgemein Schlüsselbein genannt, ist ein horizontaler Knochen, der die Schulter mit der Brust verbindet. Es ist einer der am häufigsten gebrochenen Knochen aufgrund seiner exponierten Position.",
          nl: "De clavicula, gewoonlijk het sleutelbeen genoemd, is een horizontale bot die de schouder met de borst verbindt. Het is een van de meest frequent gebroken botten vanwege zijn blootgestelde positie."
        }
      },
      {
        question: {
          en: "What is the strongest bone in the human body?",
          es: "¿Cuál es el hueso más fuerte del cuerpo humano?",
          de: "Was ist der stärkste Knochen im menschlichen Körper?",
          nl: "Wat is de sterkste bot in het menselijk lichaam?"
        },
        options: [
          { en: "Femur", es: "Fémur", de: "Oberschenkelknochen", nl: "Dijbeen" },
          { en: "Tibia", es: "Tibia", de: "Schienbein", nl: "Scheenbeen" },
          { en: "Humerus", es: "Húmero", de: "Oberarmknochen", nl: "Opperarmbeen" },
          { en: "Skull", es: "Cráneo", de: "Schädel", nl: "Schedel" }
        ],
        correct: 0,
        explanation: {
          en: "The femur (thighbone) is the strongest bone in the human body. It can support up to 30 times a person's body weight and is designed to withstand tremendous forces during walking and running.",
          es: "El fémur (hueso del muslo) es el hueso más fuerte del cuerpo humano. Puede soportar hasta 30 veces el peso corporal de una persona y está diseñado para resistir fuerzas tremendas al caminar y correr.",
          de: "Der Oberschenkelknochen (Femur) ist der stärkste Knochen im menschlichen Körper. Er kann bis zu 30-mal das Körpergewicht einer Person tragen und ist darauf ausgelegt, enormen Kräften beim Gehen und Laufen standzuhalten.",
          nl: "Het dijbeen (femur) is de sterkste bot in het menselijk lichaam. Het kan tot 30 keer het lichaamsgewicht van een persoon dragen en is ontworpen om enorme krachten tijdens lopen en rennen te weerstaan."
        }
      },
      {
        question: {
          en: "Which gland is often called the 'master gland' of the endocrine system?",
          es: "¿Qué glándula se llama a menudo la 'glándula maestra' del sistema endocrino?",
          de: "Welche Drüse wird oft als 'Hauptdrüse' des endokrinen Systems bezeichnet?",
          nl: "Welke klier wordt vaak de 'hoofdklier' van het endocriene systeem genoemd?"
        },
        options: [
          { en: "Pituitary gland", es: "Glándula pituitaria", de: "Hirnanhangsdrüse", nl: "Hypofyse" },
          { en: "Thyroid gland", es: "Glándula tiroides", de: "Schilddrüse", nl: "Schildklier" },
          { en: "Adrenal glands", es: "Glándulas suprarrenales", de: "Nebennieren", nl: "Bijnieren" },
          { en: "Pancreas", es: "Páncreas", de: "Bauchspeicheldrüse", nl: "Alvleesklier" }
        ],
        correct: 0,
        explanation: {
          en: "The pituitary gland is called the 'master gland' because it controls many other endocrine glands by releasing hormones that regulate their function. It's about the size of a pea and located at the base of the brain.",
          es: "La glándula pituitaria se llama la 'glándula maestra' porque controla muchas otras glándulas endocrinas liberando hormonas que regulan su función. Tiene aproximadamente el tamaño de un guisante y está ubicada en la base del cerebro.",
          de: "Die Hirnanhangsdrüse wird als 'Hauptdrüse' bezeichnet, weil sie viele andere endokrine Drüsen kontrolliert, indem sie Hormone freisetzt, die deren Funktion regulieren. Sie ist etwa so groß wie eine Erbse und befindet sich an der Basis des Gehirns.",
          nl: "De hypofyse wordt de 'hoofdklier' genoemd omdat het vele andere endocriene klieren controleert door hormonen vrij te geven die hun functie reguleren. Het is ongeveer zo groot als een erwt en bevindt zich aan de basis van de hersenen."
        }
      },
      {
        question: {
          en: "What is the name of the tube that connects the throat to the stomach?",
          es: "¿Cuál es el nombre del tubo que conecta la garganta con el estómago?",
          de: "Wie heißt die Röhre, die den Rachen mit dem Magen verbindet?",
          nl: "Wat is de naam van de buis die de keel met de maag verbindt?"
        },
        options: [
          { en: "Esophagus", es: "Esófago", de: "Speiseröhre", nl: "Slokdarm" },
          { en: "Trachea", es: "Tráquea", de: "Luftröhre", nl: "Luchtpijp" },
          { en: "Duodenum", es: "Duodeno", de: "Zwölffingerdarm", nl: "Twaalfvingerige darm" },
          { en: "Larynx", es: "Laringe", de: "Kehlkopf", nl: "Strottenhoofd" }
        ],
        correct: 0,
        explanation: {
          en: "The esophagus is a muscular tube about 10 inches long that connects the throat (pharynx) to the stomach. It uses wave-like muscle contractions called peristalsis to push food downward.",
          es: "El esófago es un tubo muscular de aproximadamente 25 centímetros de largo que conecta la garganta (faringe) con el estómago. Utiliza contracciones musculares ondulantes llamadas peristalsis para empujar la comida hacia abajo.",
          de: "Die Speiseröhre ist eine etwa 25 cm lange Muskelröhre, die den Rachen (Pharynx) mit dem Magen verbindet. Sie nutzt wellenförmige Muskelkontraktionen, die Peristaltik genannt werden, um Nahrung nach unten zu befördern.",
          nl: "De slokdarm is een spierbuis van ongeveer 25 centimeter lang die de keel (farynx) met de maag verbindt. Het gebruikt golfachtige spiercontracties genaamd peristaltiek om voedsel naar beneden te duwen."
        }
      },
      {
        question: {
          en: "Which part of the eye controls the amount of light entering it?",
          es: "¿Qué parte del ojo controla la cantidad de luz que entra en él?",
          de: "Welcher Teil des Auges kontrolliert die Menge des einfallenden Lichts?",
          nl: "Welk deel van het oog controleert de hoeveelheid licht die erin komt?"
        },
        options: [
          { en: "Iris", es: "Iris", de: "Iris", nl: "Iris" },
          { en: "Pupil", es: "Pupila", de: "Pupille", nl: "Pupil" },
          { en: "Cornea", es: "Córnea", de: "Hornhaut", nl: "Hoornvlies" },
          { en: "Retina", es: "Retina", de: "Netzhaut", nl: "Netvlies" }
        ],
        correct: 0,
        explanation: {
          en: "The iris is the colored part of the eye that controls light entry by adjusting the size of the pupil. In bright light, the iris constricts the pupil; in dim light, it dilates the pupil to let more light in.",
          es: "El iris es la parte coloreada del ojo que controla la entrada de luz ajustando el tamaño de la pupila. En luz brillante, el iris contrae la pupila; en luz tenue, dilata la pupila para dejar entrar más luz.",
          de: "Die Iris ist der farbige Teil des Auges, der den Lichteinfall durch Anpassung der Pupillengröße kontrolliert. Bei hellem Licht verengt die Iris die Pupille; bei schwachem Licht erweitert sie die Pupille, um mehr Licht hereinzulassen.",
          nl: "De iris is het gekleurde deel van het oog dat lichtinval controleert door de grootte van de pupil aan te passen. Bij helder licht vernauwd de iris de pupil; bij zwak licht verwijdt het de pupil om meer licht binnen te laten."
        }
      },
      {
        question: {
          en: "How many cervical vertebrae are in the human spine?",
          es: "¿Cuántas vértebras cervicales hay en la columna vertebral humana?",
          de: "Wie viele Halswirbel hat die menschliche Wirbelsäule?",
          nl: "Hoeveel halswervels zitten er in de menselijke wervelkolom?"
        },
        options: [
          { en: "7", es: "7", de: "7", nl: "7" },
          { en: "5", es: "5", de: "5", nl: "5" },
          { en: "12", es: "12", de: "12", nl: "12" },
          { en: "9", es: "9", de: "9", nl: "9" }
        ],
        correct: 0,
        explanation: {
          en: "The human spine has 7 cervical vertebrae (C1-C7) in the neck region. This is consistent across almost all mammals, regardless of neck length. The first two vertebrae, atlas and axis, allow for head rotation.",
          es: "La columna vertebral humana tiene 7 vértebras cervicales (C1-C7) en la región del cuello. Esto es consistente en casi todos los mamíferos, independientemente de la longitud del cuello. Las dos primeras vértebras, atlas y axis, permiten la rotación de la cabeza.",
          de: "Die menschliche Wirbelsäule hat 7 Halswirbel (C1-C7) im Nackenbereich. Dies ist bei fast allen Säugetieren konsistent, unabhängig von der Halslänge. Die ersten beiden Wirbel, Atlas und Axis, ermöglichen die Kopfdrehung.",
          nl: "De menselijke wervelkolom heeft 7 halswervels (C1-C7) in de nekstreek. Dit is consistent bij bijna alle zoogdieren, ongeacht de neklengte. De eerste twee wervels, atlas en axis, maken hoofdrotatie mogelijk."
        }
      },
      {
        question: {
          en: "What is the medical term for the windpipe?",
          es: "¿Cuál es el término médico para la tráquea?",
          de: "Was ist der medizinische Begriff für die Luftröhre?",
          nl: "Wat is de medische term voor de luchtpijp?"
        },
        options: [
          { en: "Trachea", es: "Tráquea", de: "Trachea", nl: "Trachea" },
          { en: "Bronchus", es: "Bronquio", de: "Bronchus", nl: "Bronchus" },
          { en: "Larynx", es: "Laringe", de: "Larynx", nl: "Larynx" },
          { en: "Pharynx", es: "Faringe", de: "Pharynx", nl: "Farynx" }
        ],
        correct: 0,
        explanation: {
          en: "The trachea is the medical term for the windpipe, a tube about 4 inches long that connects the larynx to the bronchi. It's reinforced with C-shaped cartilage rings to keep it open for airflow.",
          es: "La tráquea es el término médico para la tráquea, un tubo de aproximadamente 10 centímetros de largo que conecta la laringe con los bronquios. Está reforzada con anillos de cartílago en forma de C para mantenerla abierta para el flujo de aire.",
          de: "Die Trachea ist der medizinische Begriff für die Luftröhre, eine etwa 10 cm lange Röhre, die den Kehlkopf mit den Bronchien verbindet. Sie ist mit C-förmigen Knorpelringen verstärkt, um sie für den Luftstrom offen zu halten.",
          nl: "De trachea is de medische term voor de luchtpijp, een buis van ongeveer 10 centimeter lang die de larynx met de bronchi verbindt. Het is versterkt met C-vormige kraakbeenringen om het open te houden voor luchtstroom."
        }
      },
      {
        question: {
          en: "Which organ produces bile to help digest fats?",
          es: "¿Qué órgano produce bilis para ayudar a digerir las grasas?",
          de: "Welches Organ produziert Galle zur Fettverdauung?",
          nl: "Welk orgaan produceert gal om vetten te helpen verteren?"
        },
        options: [
          { en: "Liver", es: "Hígado", de: "Leber", nl: "Lever" },
          { en: "Gallbladder", es: "Vesícula biliar", de: "Gallenblase", nl: "Galblaas" },
          { en: "Pancreas", es: "Páncreas", de: "Bauchspeicheldrüse", nl: "Alvleesklier" },
          { en: "Stomach", es: "Estómago", de: "Magen", nl: "Maag" }
        ],
        correct: 0,
        explanation: {
          en: "The liver produces bile, a greenish-yellow fluid that helps break down and absorb fats. The bile is stored in the gallbladder and released into the small intestine when needed for digestion.",
          es: "El hígado produce bilis, un fluido amarillo verdoso que ayuda a descomponer y absorber las grasas. La bilis se almacena en la vesícula biliar y se libera en el intestino delgado cuando es necesario para la digestión.",
          de: "Die Leber produziert Galle, eine grünlich-gelbe Flüssigkeit, die beim Abbau und der Absorption von Fetten hilft. Die Galle wird in der Gallenblase gespeichert und bei Bedarf für die Verdauung in den Dünndarm abgegeben.",
          nl: "De lever produceert gal, een groenachtig-gele vloeistof die helpt bij het afbreken en absorberen van vetten. De gal wordt opgeslagen in de galblaas en vrijgegeven in de dunne darm wanneer nodig voor de spijsvertering."
        }
      },
      {
        question: {
          en: "What is the largest muscle in the human body?",
          es: "¿Cuál es el músculo más grande del cuerpo humano?",
          de: "Was ist der größte Muskel im menschlichen Körper?",
          nl: "Wat is de grootste spier in het menselijk lichaam?"
        },
        options: [
          { en: "Gluteus maximus", es: "Glúteo mayor", de: "Gluteus maximus", nl: "Gluteus maximus" },
          { en: "Quadriceps", es: "Cuádriceps", de: "Quadrizeps", nl: "Quadriceps" },
          { en: "Latissimus dorsi", es: "Dorsal ancho", de: "Latissimus dorsi", nl: "Brede rugspier" },
          { en: "Pectoralis major", es: "Pectoral mayor", de: "Großer Brustmuskel", nl: "Grote borstspier" }
        ],
        correct: 0,
        explanation: {
          en: "The gluteus maximus is the largest muscle in the human body. It's the main muscle of the buttocks and is responsible for hip extension, helping us stand upright, climb stairs, and run.",
          es: "El glúteo mayor es el músculo más grande del cuerpo humano. Es el músculo principal de los glúteos y es responsable de la extensión de la cadera, ayudándonos a estar erguidos, subir escaleras y correr.",
          de: "Der Gluteus maximus ist der größte Muskel im menschlichen Körper. Er ist der Hauptmuskel des Gesäßes und verantwortlich für die Hüftstreckung, hilft uns aufrecht zu stehen, Treppen zu steigen und zu laufen.",
          nl: "De gluteus maximus is de grootste spier in het menselijk lichaam. Het is de hoofdspier van de billen en is verantwoordelijk voor heupextensie, waardoor we rechtop kunnen staan, trappen kunnen beklimmen en kunnen rennen."
        }
      },
      {
        question: {
          en: "Which blood type is considered the universal donor?",
          es: "¿Qué tipo de sangre se considera el donante universal?",
          de: "Welche Blutgruppe gilt als Universalspender?",
          nl: "Welke bloedgroep wordt beschouwd als de universele donor?"
        },
        options: [
          { en: "O negative", es: "O negativo", de: "0 negativ", nl: "O negatief" },
          { en: "AB positive", es: "AB positivo", de: "AB positiv", nl: "AB positief" },
          { en: "A positive", es: "A positivo", de: "A positiv", nl: "A positief" },
          { en: "B negative", es: "B negativo", de: "B negativ", nl: "B negatief" }
        ],
        correct: 0,
        explanation: {
          en: "O negative blood is the universal donor type because it lacks A, B, and Rh antigens, making it compatible with all other blood types. Only about 7% of the population has O negative blood.",
          es: "La sangre O negativo es el tipo de donante universal porque carece de antígenos A, B y Rh, haciéndola compatible con todos los otros tipos de sangre. Solo alrededor del 7% de la población tiene sangre O negativo.",
          de: "0 negatives Blut ist der universelle Spendertyp, weil es keine A-, B- und Rh-Antigene besitzt und daher mit allen anderen Blutgruppen kompatibel ist. Nur etwa 7% der Bevölkerung haben 0 negatives Blut.",
          nl: "O negatief bloed is het universele donortype omdat het geen A-, B- en Rh-antigenen heeft, waardoor het compatibel is met alle andere bloedgroepen. Slechts ongeveer 7% van de bevolking heeft O negatief bloed."
        }
      },
      {
        question: {
          en: "What is the medical term for the kneecap?",
          es: "¿Cuál es el término médico para la rótula?",
          de: "Was ist der medizinische Begriff für die Kniescheibe?",
          nl: "Wat is de medische term voor de knieschijf?"
        },
        options: [
          { en: "Patella", es: "Rótula", de: "Patella", nl: "Patella" },
          { en: "Fibula", es: "Fíbula", de: "Wadenbein", nl: "Kuitbeen" },
          { en: "Tibia", es: "Tibia", de: "Schienbein", nl: "Scheenbeen" },
          { en: "Femur", es: "Fémur", de: "Oberschenkelknochen", nl: "Dijbeen" }
        ],
        correct: 0,
        explanation: {
          en: "The patella is the medical term for the kneecap. It's a small, triangular bone that protects the knee joint and helps the quadriceps muscles extend the leg more efficiently.",
          es: "La rótula es el término médico para la rótula. Es un hueso pequeño y triangular que protege la articulación de la rodilla y ayuda a los músculos cuádriceps a extender la pierna de manera más eficiente.",
          de: "Die Patella ist der medizinische Begriff für die Kniescheibe. Es ist ein kleiner, dreieckiger Knochen, der das Kniegelenk schützt und den Quadrizeps-Muskeln hilft, das Bein effizienter zu strecken.",
          nl: "De patella is de medische term voor de knieschijf. Het is een kleine, driehoekige bot die het kniegewricht beschermt en de quadricepsspieren helpt het been efficiënter te strekken."
        }
      },
      {
        question: {
          en: "Which part of the nervous system includes the brain and spinal cord?",
          es: "¿Qué parte del sistema nervioso incluye el cerebro y la médula espinal?",
          de: "Welcher Teil des Nervensystems umfasst Gehirn und Rückenmark?",
          nl: "Welk deel van het zenuwstelsel omvat de hersenen en het ruggenmerg?"
        },
        options: [
          { en: "Central nervous system", es: "Sistema nervioso central", de: "Zentralnervensystem", nl: "Centraal zenuwstelsel" },
          { en: "Peripheral nervous system", es: "Sistema nervioso periférico", de: "Peripheres Nervensystem", nl: "Perifeer zenuwstelsel" },
          { en: "Autonomic nervous system", es: "Sistema nervioso autónomo", de: "Autonomes Nervensystem", nl: "Autonoom zenuwstelsel" },
          { en: "Somatic nervous system", es: "Sistema nervioso somático", de: "Somatisches Nervensystem", nl: "Somatisch zenuwstelsel" }
        ],
        correct: 0,
        explanation: {
          en: "The central nervous system (CNS) consists of the brain and spinal cord. It processes information and coordinates responses throughout the body, acting as the command center for all neural activity.",
          es: "El sistema nervioso central (SNC) consiste en el cerebro y la médula espinal. Procesa información y coordina respuestas en todo el cuerpo, actuando como el centro de comando para toda la actividad neural.",
          de: "Das Zentralnervensystem (ZNS) besteht aus Gehirn und Rückenmark. Es verarbeitet Informationen und koordiniert Reaktionen im ganzen Körper und fungiert als Kommandozentrale für alle neuralen Aktivitäten.",
          nl: "Het centraal zenuwstelsel (CZS) bestaat uit de hersenen en het ruggenmerg. Het verwerkt informatie en coördineert reacties door het hele lichaam, en fungeert als commandocentrum voor alle neurale activiteit."
        }
      },
      {
        question: {
          en: "How many chambers does the stomach have in humans?",
          es: "¿Cuántas cámaras tiene el estómago en los humanos?",
          de: "Wie viele Kammern hat der Magen beim Menschen?",
          nl: "Hoeveel kamers heeft de maag bij mensen?"
        },
        options: [
          { en: "1", es: "1", de: "1", nl: "1" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "4", es: "4", de: "4", nl: "4" }
        ],
        correct: 0,
        explanation: {
          en: "Humans have a single-chambered stomach, unlike ruminants like cows which have four chambers. The human stomach has different regions (fundus, body, antrum) but is considered one chamber.",
          es: "Los humanos tienen un estómago de una sola cámara, a diferencia de los rumiantes como las vacas que tienen cuatro cámaras. El estómago humano tiene diferentes regiones (fundus, cuerpo, antro) pero se considera una cámara.",
          de: "Menschen haben einen einkammerigen Magen, im Gegensatz zu Wiederkäuern wie Kühen, die vier Kammern haben. Der menschliche Magen hat verschiedene Bereiche (Fundus, Körper, Antrum), wird aber als eine Kammer betrachtet.",
          nl: "Mensen hebben een maag met één kamer, in tegenstelling tot herkauwers zoals koeien die vier kamers hebben. De menselijke maag heeft verschillende regio's (fundus, lichaam, antrum) maar wordt beschouwd als één kamer."
        }
      },
      {
        question: {
          en: "What is the name of the fluid that lubricates joints?",
          es: "¿Cuál es el nombre del fluido que lubrica las articulaciones?",
          de: "Wie heißt die Flüssigkeit, die Gelenke schmiert?",
          nl: "Wat is de naam van de vloeistof die gewrichten smeert?"
        },
        options: [
          { en: "Synovial fluid", es: "Líquido sinovial", de: "Synovialflüssigkeit", nl: "Synoviaal vocht" },
          { en: "Cerebrospinal fluid", es: "Líquido cefalorraquídeo", de: "Cerebrospinalflüssigkeit", nl: "Hersenvocht" },
          { en: "Lymphatic fluid", es: "Fluido linfático", de: "Lymphflüssigkeit", nl: "Lymfevocht" },
          { en: "Interstitial fluid", es: "Fluido intersticial", de: "Interstitielle Flüssigkeit", nl: "Interstitiële vloeistof" }
        ],
        correct: 0,
        explanation: {
          en: "Synovial fluid is a thick, clear liquid that lubricates joints and reduces friction between cartilage surfaces. It also provides nutrients to cartilage and removes waste products.",
          es: "El líquido sinovial es un líquido espeso y claro que lubrica las articulaciones y reduce la fricción entre las superficies del cartílago. También proporciona nutrientes al cartílago y elimina productos de desecho.",
          de: "Synovialflüssigkeit ist eine dicke, klare Flüssigkeit, die Gelenke schmiert und die Reibung zwischen Knorpeloberflächen reduziert. Sie versorgt auch Knorpel mit Nährstoffen und entfernt Abfallprodukte.",
          nl: "Synoviaal vocht is een dikke, heldere vloeistof die gewrichten smeert en wrijving tussen kraakbeenoppervlakken vermindert. Het biedt ook voedingsstoffen aan kraakbeen en verwijdert afvalstoffen."
        }
      },
      {
        question: {
          en: "Which organ is responsible for producing insulin?",
          es: "¿Qué órgano es responsable de producir insulina?",
          de: "Welches Organ ist für die Insulinproduktion verantwortlich?",
          nl: "Welk orgaan is verantwoordelijk voor het produceren van insuline?"
        },
        options: [
          { en: "Pancreas", es: "Páncreas", de: "Bauchspeicheldrüse", nl: "Alvleesklier" },
          { en: "Liver", es: "Hígado", de: "Leber", nl: "Lever" },
          { en: "Thyroid", es: "Tiroides", de: "Schilddrüse", nl: "Schildklier" },
          { en: "Adrenal glands", es: "Glándulas suprarrenales", de: "Nebennieren", nl: "Bijnieren" }
        ],
        correct: 0,
        explanation: {
          en: "The pancreas produces insulin in specialized cells called beta cells, located in clusters called islets of Langerhans. Insulin regulates blood sugar levels by helping cells absorb glucose.",
          es: "El páncreas produce insulina en células especializadas llamadas células beta, ubicadas en grupos llamados islotes de Langerhans. La insulina regula los niveles de azúcar en sangre ayudando a las células a absorber glucosa.",
          de: "Die Bauchspeicheldrüse produziert Insulin in spezialisierten Zellen, die Beta-Zellen genannt werden und sich in Clustern befinden, die Langerhans-Inseln genannt werden. Insulin reguliert den Blutzuckerspiegel, indem es Zellen hilft, Glukose zu absorbieren.",
          nl: "De alvleesklier produceert insuline in gespecialiseerde cellen genaamd bètacellen, gelegen in clusters genaamd eilandjes van Langerhans. Insuline reguleert bloedsuikerwaarden door cellen te helpen glucose op te nemen."
        }
      },
      {
        question: {
          en: "What is the average resting heart rate for a healthy adult?",
          es: "¿Cuál es la frecuencia cardíaca en reposo promedio para un adulto sano?",
          de: "Wie hoch ist die durchschnittliche Ruheherzfrequenz für einen gesunden Erwachsenen?",
          nl: "Wat is de gemiddelde rusthartslag voor een gezonde volwassene?"
        },
        options: [
          { en: "60-100 beats per minute", es: "60-100 latidos por minuto", de: "60-100 Schläge pro Minute", nl: "60-100 slagen per minuut" },
          { en: "40-60 beats per minute", es: "40-60 latidos por minuto", de: "40-60 Schläge pro Minute", nl: "40-60 slagen per minuut" },
          { en: "100-120 beats per minute", es: "100-120 latidos por minuto", de: "100-120 Schläge pro Minute", nl: "100-120 slagen per minuut" },
          { en: "80-140 beats per minute", es: "80-140 latidos por minuto", de: "80-140 Schläge pro Minute", nl: "80-140 slagen per minuut" }
        ],
        correct: 0,
        explanation: {
          en: "The normal resting heart rate for healthy adults is 60-100 beats per minute. Athletes often have lower resting heart rates (40-60 bpm) due to their more efficient cardiovascular systems.",
          es: "La frecuencia cardíaca en reposo normal para adultos sanos es de 60-100 latidos por minuto. Los atletas a menudo tienen frecuencias cardíacas en reposo más bajas (40-60 lpm) debido a sus sistemas cardiovasculares más eficientes.",
          de: "Die normale Ruheherzfrequenz für gesunde Erwachsene liegt bei 60-100 Schlägen pro Minute. Athleten haben oft niedrigere Ruheherzfrequenzen (40-60 Schläge/Min) aufgrund ihrer effizienteren Herz-Kreislauf-Systeme.",
          nl: "De normale rusthartslag voor gezonde volwassenen is 60-100 slagen per minuut. Atleten hebben vaak lagere rusthartslag (40-60 slagen/min) vanwege hun efficiëntere cardiovasculaire systemen."
        }
      },
      {
        question: {
          en: "Which blood vessels have the thickest walls?",
          es: "¿Qué vasos sanguíneos tienen las paredes más gruesas?",
          de: "Welche Blutgefäße haben die dicksten Wände?",
          nl: "Welke bloedvaten hebben de dikste wanden?"
        },
        options: [
          { en: "Arteries", es: "Arterias", de: "Arterien", nl: "Slagaders" },
          { en: "Veins", es: "Venas", de: "Venen", nl: "Aderen" },
          { en: "Capillaries", es: "Capilares", de: "Kapillaren", nl: "Haarvaten" },
          { en: "Venules", es: "Vénulas", de: "Venolen", nl: "Venulen" }
        ],
        correct: 0,
        explanation: {
          en: "Arteries have the thickest walls among blood vessels because they must withstand high pressure from the heart's pumping action. Their walls contain three layers: intima, media, and adventitia.",
          es: "Las arterias tienen las paredes más gruesas entre los vasos sanguíneos porque deben resistir la alta presión de la acción de bombeo del corazón. Sus paredes contienen tres capas: íntima, media y adventicia.",
          de: "Arterien haben die dicksten Wände unter den Blutgefäßen, weil sie dem hohen Druck der Herzpumpwirkung standhalten müssen. Ihre Wände enthalten drei Schichten: Intima, Media und Adventitia.",
          nl: "Slagaders hebben de dikste wanden van alle bloedvaten omdat ze de hoge druk van de pompwerking van het hart moeten weerstaan. Hun wanden bevatten drie lagen: intima, media en adventitia."
        }
      },
      {
        question: {
          en: "What is the name of the bone that forms the forehead?",
          es: "¿Cuál es el nombre del hueso que forma la frente?",
          de: "Wie heißt der Knochen, der die Stirn bildet?",
          nl: "Wat is de naam van de bot die het voorhoofd vormt?"
        },
        options: [
          { en: "Frontal bone", es: "Hueso frontal", de: "Stirnbein", nl: "Voorhoofdsbeen" },
          { en: "Parietal bone", es: "Hueso parietal", de: "Scheitelbein", nl: "Wandbeen" },
          { en: "Temporal bone", es: "Hueso temporal", de: "Schläfenbein", nl: "Slaapbeen" },
          { en: "Occipital bone", es: "Hueso occipital", de: "Hinterhauptbein", nl: "Achterhoofdsbeen" }
        ],
        correct: 0,
        explanation: {
          en: "The frontal bone forms the forehead and the upper part of the eye sockets. It's a single bone that also contains the frontal sinuses, which are air-filled spaces that help reduce the weight of the skull.",
          es: "El hueso frontal forma la frente y la parte superior de las cuencas de los ojos. Es un hueso único que también contiene los senos frontales, que son espacios llenos de aire que ayudan a reducir el peso del cráneo.",
          de: "Das Stirnbein bildet die Stirn und den oberen Teil der Augenhöhlen. Es ist ein einzelner Knochen, der auch die Stirnhöhlen enthält, die luftgefüllte Räume sind und helfen, das Gewicht des Schädels zu reduzieren.",
          nl: "Het voorhoofdsbeen vormt het voorhoofd en het bovenste deel van de oogkassen. Het is een enkele bot die ook de frontale sinussen bevat, dit zijn met lucht gevulde ruimtes die helpen het gewicht van de schedel te verminderen."
        }
      },
      {
        question: {
          en: "Which part of the digestive system is primarily responsible for water absorption?",
          es: "¿Qué parte del sistema digestivo es principalmente responsable de la absorción de agua?",
          de: "Welcher Teil des Verdauungssystems ist hauptsächlich für die Wasserabsorption verantwortlich?",
          nl: "Welk deel van het spijsverteringssysteem is primair verantwoordelijk voor waterabsorptie?"
        },
        options: [
          { en: "Large intestine", es: "Intestino grueso", de: "Dickdarm", nl: "Dikke darm" },
          { en: "Small intestine", es: "Intestino delgado", de: "Dünndarm", nl: "Dunne darm" },
          { en: "Stomach", es: "Estómago", de: "Magen", nl: "Maag" },
          { en: "Esophagus", es: "Esófago", de: "Speiseröhre", nl: "Slokdarm" }
        ],
        correct: 0,
        explanation: {
          en: "The large intestine (colon) is primarily responsible for water absorption from undigested food material. It absorbs about 1-2 liters of water daily, helping to form solid waste.",
          es: "El intestino grueso (colon) es principalmente responsable de la absorción de agua del material alimenticio no digerido. Absorbe aproximadamente 1-2 litros de agua diariamente, ayudando a formar desechos sólidos.",
          de: "Der Dickdarm (Kolon) ist hauptsächlich für die Wasserabsorption aus unverdautem Nahrungsmaterial verantwortlich. Er absorbiert täglich etwa 1-2 Liter Wasser und hilft bei der Bildung fester Abfallstoffe.",
          nl: "De dikke darm (colon) is primair verantwoordelijk voor waterabsorptie uit onverteerd voedselmateriaal. Het absorbeert ongeveer 1-2 liter water per dag, wat helpt bij het vormen van vaste afvalstoffen."
        }
      },
      {
        question: {
          en: "What is the smallest bone in the human body?",
          es: "¿Cuál es el hueso más pequeño del cuerpo humano?",
          de: "Was ist der kleinste Knochen im menschlichen Körper?",
          nl: "Wat is de kleinste bot in het menselijk lichaam?"
        },
        options: [
          { en: "Stapes", es: "Estribo", de: "Steigbügel", nl: "Stijgbeugel" },
          { en: "Malleus", es: "Martillo", de: "Hammer", nl: "Hamer" },
          { en: "Incus", es: "Yunque", de: "Amboss", nl: "Aambeeld" },
          { en: "Hyoid", es: "Hioides", de: "Zungenbein", nl: "Tongbeen" }
        ],
        correct: 0,
        explanation: {
          en: "The stapes, also known as the stirrup bone, is the smallest bone in the human body. It's located in the middle ear and is about 2-3 millimeters long. It plays a crucial role in hearing by transmitting sound vibrations.",
          es: "El estribo, también conocido como hueso del estribo, es el hueso más pequeño del cuerpo humano. Está ubicado en el oído medio y mide aproximadamente 2-3 milímetros de largo. Juega un papel crucial en la audición al transmitir vibraciones sonoras.",
          de: "Der Steigbügel ist der kleinste Knochen im menschlichen Körper. Er befindet sich im Mittelohr und ist etwa 2-3 Millimeter lang. Er spielt eine entscheidende Rolle beim Hören, indem er Schallschwingungen überträgt.",
          nl: "De stijgbeugel is de kleinste bot in het menselijk lichaam. Het bevindt zich in het middenoor en is ongeveer 2-3 millimeter lang. Het speelt een cruciale rol bij het horen door geluidstrillingen over te dragen."
        }
      },
      {
        question: {
          en: "Which gland regulates metabolism and growth?",
          es: "¿Qué glándula regula el metabolismo y el crecimiento?",
          de: "Welche Drüse reguliert Stoffwechsel und Wachstum?",
          nl: "Welke klier reguleert het metabolisme en de groei?"
        },
        options: [
          { en: "Thyroid gland", es: "Glándula tiroides", de: "Schilddrüse", nl: "Schildklier" },
          { en: "Adrenal glands", es: "Glándulas suprarrenales", de: "Nebennieren", nl: "Bijnieren" },
          { en: "Parathyroid glands", es: "Glándulas paratiroides", de: "Nebenschilddrüsen", nl: "Bijschildklieren" },
          { en: "Pineal gland", es: "Glándula pineal", de: "Zirbeldrüse", nl: "Pijnappelklier" }
        ],
        correct: 0,
        explanation: {
          en: "The thyroid gland produces hormones (T3 and T4) that regulate metabolism, growth, and development. It also produces calcitonin, which helps regulate calcium levels in the blood.",
          es: "La glándula tiroides produce hormonas (T3 y T4) que regulan el metabolismo, crecimiento y desarrollo. También produce calcitonina, que ayuda a regular los niveles de calcio en la sangre.",
          de: "Die Schilddrüse produziert Hormone (T3 und T4), die Stoffwechsel, Wachstum und Entwicklung regulieren. Sie produziert auch Kalzitonin, das hilft, den Kalziumspiegel im Blut zu regulieren.",
          nl: "De schildklier produceert hormonen (T3 en T4) die het metabolisme, groei en ontwikkeling reguleren. Het produceert ook calcitonine, wat helpt calciumgehalten in het bloed te reguleren."
        }
      },
      {
        question: {
          en: "How many lobes does the right lung have?",
          es: "¿Cuántos lóbulos tiene el pulmón derecho?",
          de: "Wie viele Lappen hat die rechte Lunge?",
          nl: "Hoeveel lobben heeft de rechterlong?"
        },
        options: [
          { en: "3", es: "3", de: "3", nl: "3" },
          { en: "2", es: "2", de: "2", nl: "2" },
          { en: "4", es: "4", de: "4", nl: "4" },
          { en: "5", es: "5", de: "5", nl: "5" }
        ],
        correct: 0,
        explanation: {
          en: "The right lung has three lobes: upper, middle, and lower. The left lung has only two lobes (upper and lower) to make room for the heart, which is positioned slightly to the left side of the chest.",
          es: "El pulmón derecho tiene tres lóbulos: superior, medio e inferior. El pulmón izquierdo tiene solo dos lóbulos (superior e inferior) para hacer espacio para el corazón, que está posicionado ligeramente hacia el lado izquierdo del pecho.",
          de: "Die rechte Lunge hat drei Lappen: Ober-, Mittel- und Unterlappen. Die linke Lunge hat nur zwei Lappen (Ober- und Unterlappen), um Platz für das Herz zu schaffen, das etwas links in der Brust positioniert ist.",
          nl: "De rechterlong heeft drie lobben: boven-, midden- en onderste. De linkerlong heeft slechts twee lobben (bovenste en onderste) om ruimte te maken voor het hart, dat iets naar de linkerkant van de borst gepositioneerd is."
        }
      },
      {
        question: {
          en: "What type of joint is the shoulder joint?",
          es: "¿Qué tipo de articulación es la articulación del hombro?",
          de: "Welche Art von Gelenk ist das Schultergelenk?",
          nl: "Wat voor type gewricht is het schoudergewricht?"
        },
        options: [
          { en: "Ball and socket", es: "Rótula y cavidad", de: "Kugelgelenk", nl: "Kogelgewricht" },
          { en: "Hinge", es: "Bisagra", de: "Scharniergelenk", nl: "Scharniergewricht" },
          { en: "Pivot", es: "Pivote", de: "Drehgelenk", nl: "Draagewricht" },
          { en: "Gliding", es: "Deslizante", de: "Gleitgelenk", nl: "Glijdgewricht" }
        ],
        correct: 0,
        explanation: {
          en: "The shoulder joint is a ball-and-socket joint, where the rounded head of the humerus fits into the cup-shaped socket of the scapula. This allows for a wide range of movement in multiple directions.",
          es: "La articulación del hombro es una articulación de rótula y cavidad, donde la cabeza redondeada del húmero encaja en la cavidad en forma de copa de la escápula. Esto permite un amplio rango de movimiento en múltiples direcciones.",
          de: "Das Schultergelenk ist ein Kugelgelenk, bei dem der runde Kopf des Oberarmknochens in die becherförmige Pfanne des Schulterblatts passt. Dies ermöglicht einen weiten Bewegungsbereich in mehrere Richtungen.",
          nl: "Het schoudergewricht is een kogelgewricht, waarbij de ronde kop van de humerus past in de komvormige kom van de scapula. Dit maakt een breed bewegingsbereik in meerdere richtingen mogelijk."
        }
      },
      {
        question: {
          en: "Which artery supplies blood to the heart muscle itself?",
          es: "¿Qué arteria suministra sangre al músculo cardíaco mismo?",
          de: "Welche Arterie versorgt den Herzmuskel selbst mit Blut?",
          nl: "Welke slagader levert bloed aan de hartspier zelf?"
        },
        options: [
          { en: "Coronary arteries", es: "Arterias coronarias", de: "Koronararterien", nl: "Kransslagaders" },
          { en: "Pulmonary arteries", es: "Arterias pulmonares", de: "Lungenarterien", nl: "Longslagaders" },
          { en: "Carotid arteries", es: "Arterias carótidas", de: "Halsschlagadern", nl: "Halsslagaders" },
          { en: "Aorta", es: "Aorta", de: "Aorta", nl: "Aorta" }
        ],
        correct: 0,
        explanation: {
          en: "The coronary arteries supply blood to the heart muscle (myocardium). There are two main coronary arteries: the left and right coronary arteries. Blockage of these arteries can cause heart attacks.",
          es: "Las arterias coronarias suministran sangre al músculo cardíaco (miocardio). Hay dos arterias coronarias principales: las arterias coronarias izquierda y derecha. El bloqueo de estas arterias puede causar ataques cardíacos.",
          de: "Die Koronararterien versorgen den Herzmuskel (Myokard) mit Blut. Es gibt zwei Hauptkoronararterien: die linke und die rechte Koronararterie. Eine Blockade dieser Arterien kann Herzinfarkte verursachen.",
          nl: "De kransslagaders leveren bloed aan de hartspier (myocardium). Er zijn twee hoofd kransslagaders: de linker en rechter kransslagader. Blokkade van deze slagaders kan hartaanvallen veroorzaken."
        }
      },
      {
        question: {
          en: "What is the name of the membrane that surrounds the lungs?",
          es: "¿Cuál es el nombre de la membrana que rodea los pulmones?",
          de: "Wie heißt die Membran, die die Lungen umgibt?",
          nl: "Wat is de naam van het membraan dat de longen omringt?"
        },
        options: [
          { en: "Pleura", es: "Pleura", de: "Pleura", nl: "Pleura" },
          { en: "Pericardium", es: "Pericardio", de: "Perikard", nl: "Pericard" },
          { en: "Peritoneum", es: "Peritoneo", de: "Peritoneum", nl: "Peritoneum" },
          { en: "Meninges", es: "Meninges", de: "Hirnhäute", nl: "Hersenvliezen" }
        ],
        correct: 0,
        explanation: {
          en: "The pleura is a double-layered membrane that surrounds each lung. The visceral pleura covers the lung surface, while the parietal pleura lines the chest cavity. The space between contains pleural fluid for lubrication.",
          es: "La pleura es una membrana de doble capa que rodea cada pulmón. La pleura visceral cubre la superficie del pulmón, mientras que la pleura parietal recubre la cavidad torácica. El espacio entre ellas contiene líquido pleural para lubricación.",
          de: "Die Pleura ist eine doppelschichtige Membran, die jede Lunge umgibt. Die viszerale Pleura bedeckt die Lungenoberfläche, während die parietale Pleura die Brusthöhle auskleidet. Der Raum dazwischen enthält Pleuraflüssigkeit zur Schmierung.",
          nl: "De pleura is een dubbellaags membraan dat elke long omringt. De viscerale pleura bedekt het longoppervlak, terwijl de pariëtale pleura de borstholte bekleedt. De ruimte ertussen bevat pleuravocht voor smering."
        }
      },
      {
        question: {
          en: "Which hormone is responsible for regulating blood sugar levels?",
          es: "¿Qué hormona es responsable de regular los niveles de azúcar en sangre?",
          de: "Welches Hormon ist für die Regulation des Blutzuckerspiegels verantwortlich?",
          nl: "Welk hormoon is verantwoordelijk voor het reguleren van bloedsuikergehalten?"
        },
        options: [
          { en: "Insulin", es: "Insulina", de: "Insulin", nl: "Insuline" },
          { en: "Cortisol", es: "Cortisol", de: "Cortisol", nl: "Cortisol" },
          { en: "Thyroxine", es: "Tiroxina", de: "Thyroxin", nl: "Thyroxine" },
          { en: "Adrenaline", es: "Adrenalina", de: "Adrenalin", nl: "Adrenaline" }
        ],
        correct: 0,
        explanation: {
          en: "Insulin is the primary hormone responsible for regulating blood sugar levels. It's produced by beta cells in the pancreas and helps cells absorb glucose from the bloodstream, lowering blood sugar levels.",
          es: "La insulina es la hormona principal responsable de regular los niveles de azúcar en sangre. Es producida por las células beta en el páncreas y ayuda a las células a absorber glucosa del torrente sanguíneo, reduciendo los niveles de azúcar en sangre.",
          de: "Insulin ist das primäre Hormon, das für die Regulation des Blutzuckerspiegels verantwortlich ist. Es wird von Beta-Zellen in der Bauchspeicheldrüse produziert und hilft Zellen dabei, Glukose aus dem Blutkreislauf zu absorbieren, wodurch der Blutzuckerspiegel gesenkt wird.",
          nl: "Insuline is het primaire hormoon verantwoordelijk voor het reguleren van bloedsuikergehalten. Het wordt geproduceerd door bètacellen in de alvleesklier en helpt cellen glucose uit de bloedbaan op te nemen, waardoor bloedsuikergehalten worden verlaagd."
        }
      },
      {
        question: {
          en: "What is the name of the valve between the left atrium and left ventricle?",
          es: "¿Cuál es el nombre de la válvula entre la aurícula izquierda y el ventrículo izquierdo?",
          de: "Wie heißt die Klappe zwischen dem linken Vorhof und der linken Herzkammer?",
          nl: "Wat is de naam van de klep tussen het linker atrium en de linker ventrikel?"
        },
        options: [
          { en: "Mitral valve", es: "Válvula mitral", de: "Mitralklappe", nl: "Mitraalklep" },
          { en: "Tricuspid valve", es: "Válvula tricúspide", de: "Trikuspidalklappe", nl: "Tricuspidaalklep" },
          { en: "Aortic valve", es: "Válvula aórtica", de: "Aortenklappe", nl: "Aortaklep" },
          { en: "Pulmonary valve", es: "Válvula pulmonar", de: "Pulmonalklappe", nl: "Pulmonaalklep" }
        ],
        correct: 0,
        explanation: {
          en: "The mitral valve (also called bicuspid valve) is located between the left atrium and left ventricle. It has two leaflets and prevents blood from flowing back into the left atrium when the ventricle contracts.",
          es: "La válvula mitral (también llamada válvula bicúspide) está ubicada entre la aurícula izquierda y el ventrículo izquierdo. Tiene dos valvas y previene que la sangre fluya de vuelta a la aurícula izquierda cuando el ventrículo se contrae.",
          de: "Die Mitralklappe (auch Bikuspidalklappe genannt) befindet sich zwischen dem linken Vorhof und der linken Herzkammer. Sie hat zwei Klappensegel und verhindert, dass Blut in den linken Vorhof zurückfließt, wenn sich die Herzkammer zusammenzieht.",
          nl: "De mitraalklep (ook wel bicuspidaalklep genoemd) bevindt zich tussen het linker atrium en de linker ventrikel. Het heeft twee klepbladen en voorkomt dat bloed terugstroomt naar het linker atrium wanneer de ventrikel samentrekt."
        }
      },
      {
        question: {
          en: "Which part of the brain is responsible for regulating basic life functions like breathing and heart rate?",
          es: "¿Qué parte del cerebro es responsable de regular funciones vitales básicas como la respiración y la frecuencia cardíaca?",
          de: "Welcher Teil des Gehirns ist für die Regulation grundlegender Lebensfunktionen wie Atmung und Herzfrequenz verantwortlich?",
          nl: "Welk deel van de hersenen is verantwoordelijk voor het reguleren van basale levensfuncties zoals ademhaling en hartslag?"
        },
        options: [
          { en: "Medulla oblongata", es: "Médula oblongada", de: "Medulla oblongata", nl: "Medulla oblongata" },
          { en: "Cerebellum", es: "Cerebelo", de: "Kleinhirn", nl: "Cerebellum" },
          { en: "Hypothalamus", es: "Hipotálamo", de: "Hypothalamus", nl: "Hypothalamus" },
          { en: "Thalamus", es: "Tálamo", de: "Thalamus", nl: "Thalamus" }
        ],
        correct: 0,
        explanation: {
          en: "The medulla oblongata is part of the brainstem and controls vital autonomic functions including breathing, heart rate, blood pressure, and swallowing. Damage to this area can be life-threatening.",
          es: "La médula oblongada es parte del tronco cerebral y controla funciones autonómicas vitales incluyendo respiración, frecuencia cardíaca, presión arterial y deglución. El daño a esta área puede ser potencialmente mortal.",
          de: "Die Medulla oblongata ist Teil des Hirnstamms und kontrolliert lebenswichtige autonome Funktionen einschließlich Atmung, Herzfrequenz, Blutdruck und Schlucken. Schäden in diesem Bereich können lebensbedrohlich sein.",
          nl: "De medulla oblongata is onderdeel van de hersenstam en controleert vitale autonome functies waaronder ademhaling, hartslag, bloeddruk en slikken. Schade aan dit gebied kan levensbedreigend zijn."
        }
      },
      {
        question: {
          en: "What is the largest artery in the human body?",
          es: "¿Cuál es la arteria más grande del cuerpo humano?",
          de: "Was ist die größte Arterie im menschlichen Körper?",
          nl: "Wat is de grootste slagader in het menselijk lichaam?"
        },
        options: [
          { en: "Aorta", es: "Aorta", de: "Aorta", nl: "Aorta" },
          { en: "Pulmonary artery", es: "Arteria pulmonar", de: "Lungenarterie", nl: "Longslagader" },
          { en: "Carotid artery", es: "Arteria carótida", de: "Halsschlagader", nl: "Halsslagader" },
          { en: "Femoral artery", es: "Arteria femoral", de: "Oberschenkelarterie", nl: "Dijbeenslagader" }
        ],
        correct: 0,
        explanation: {
          en: "The aorta is the largest artery in the human body. It's about 1 inch (2.5 cm) in diameter and carries oxygen-rich blood from the left ventricle to all parts of the body except the lungs.",
          es: "La aorta es la arteria más grande del cuerpo humano. Tiene aproximadamente 2.5 cm de diámetro y transporta sangre rica en oxígeno desde el ventrículo izquierdo a todas las partes del cuerpo excepto los pulmones.",
          de: "Die Aorta ist die größte Arterie im menschlichen Körper. Sie hat einen Durchmesser von etwa 2,5 cm und transportiert sauerstoffreiches Blut von der linken Herzkammer zu allen Körperteilen außer den Lungen.",
          nl: "De aorta is de grootste slagader in het menselijk lichaam. Het heeft een diameter van ongeveer 2,5 cm en vervoert zuurstofrijk bloed van de linker ventrikel naar alle delen van het lichaam behalve de longen."
        }
      },
      {
        question: {
          en: "Which muscle connects the upper arm to the chest and is important for arm movement?",
          es: "¿Qué músculo conecta la parte superior del brazo con el pecho y es importante para el movimiento del brazo?",
          de: "Welcher Muskel verbindet den Oberarm mit der Brust und ist wichtig für die Armbewegung?",
          nl: "Welke spier verbindt de bovenarm met de borst en is belangrijk voor armbeweging?"
        },
        options: [
          { en: "Pectoralis major", es: "Pectoral mayor", de: "Großer Brustmuskel", nl: "Grote borstspier" },
          { en: "Deltoid", es: "Deltoides", de: "Deltamuskel", nl: "Deltoideus" },
          { en: "Biceps", es: "Bíceps", de: "Bizeps", nl: "Biceps" },
          { en: "Triceps", es: "Tríceps", de: "Trizeps", nl: "Triceps" }
        ],
        correct: 0,
        explanation: {
          en: "The pectoralis major is a large, fan-shaped muscle that connects the upper arm to the chest. It's responsible for moving the arm across the body, rotating the arm inward, and helping with pushing movements.",
          es: "El pectoral mayor es un músculo grande en forma de abanico que conecta la parte superior del brazo con el pecho. Es responsable de mover el brazo a través del cuerpo, rotar el brazo hacia adentro y ayudar con movimientos de empuje.",
          de: "Der große Brustmuskel ist ein großer, fächerförmiger Muskel, der den Oberarm mit der Brust verbindet. Er ist dafür verantwortlich, den Arm über den Körper zu bewegen, den Arm nach innen zu drehen und bei Druckbewegungen zu helfen.",
          nl: "De grote borstspier is een grote, waaiergevormige spier die de bovenarm met de borst verbindt. Het is verantwoordelijk voor het bewegen van de arm over het lichaam, het naar binnen draaien van de arm en het helpen bij duwbewegingen."
        }
      },
      {
        question: {
          en: "What is the name of the protective covering around nerve fibers that speeds up signal transmission?",
          es: "¿Cuál es el nombre de la cubierta protectora alrededor de las fibras nerviosas que acelera la transmisión de señales?",
          de: "Wie heißt die Schutzhülle um Nervenfasern, die die Signalübertragung beschleunigt?",
          nl: "Wat is de naam van de beschermende bedekking rond zenuwvezels die signaaltransmissie versnelt?"
        },
        options: [
          { en: "Myelin sheath", es: "Vaina de mielina", de: "Myelinscheide", nl: "Myelineschede" },
          { en: "Neurilemma", es: "Neurilema", de: "Neurilemm", nl: "Neurilemma" },
          { en: "Dendrite", es: "Dendrita", de: "Dendrit", nl: "Dendriet" },
          { en: "Axon", es: "Axón", de: "Axon", nl: "Axon" }
        ],
        correct: 0,
        explanation: {
          en: "The myelin sheath is a fatty, white substance that wraps around nerve axons, acting as insulation. It allows electrical impulses to travel much faster along the nerve fiber, similar to insulation on electrical wires.",
          es: "La vaina de mielina es una sustancia grasa y blanca que envuelve los axones nerviosos, actuando como aislamiento. Permite que los impulsos eléctricos viajen mucho más rápido a lo largo de la fibra nerviosa, similar al aislamiento en cables eléctricos.",
          de: "Die Myelinscheide ist eine fettige, weiße Substanz, die sich um Nervenaxone wickelt und als Isolierung fungiert. Sie ermöglicht es elektrischen Impulsen, viel schneller entlang der Nervenfaser zu reisen, ähnlich wie Isolierung bei elektrischen Kabeln.",
          nl: "De myelineschede is een vettige, witte substantie die zich om zenuwaxonen wikkelt en fungeert als isolatie. Het stelt elektrische impulsen in staat om veel sneller langs de zenuwvezel te reizen, vergelijkbaar met isolatie op elektrische draden."
        }
      },
      {
        question: {
          en: "Which bone forms the back and base of the skull?",
          es: "¿Qué hueso forma la parte posterior y la base del cráneo?",
          de: "Welcher Knochen bildet den Rücken und die Basis des Schädels?",
          nl: "Welke bot vormt de achterkant en basis van de schedel?"
        },
        options: [
          { en: "Occipital bone", es: "Hueso occipital", de: "Hinterhauptbein", nl: "Achterhoofdsbeen" },
          { en: "Parietal bone", es: "Hueso parietal", de: "Scheitelbein", nl: "Wandbeen" },
          { en: "Temporal bone", es: "Hueso temporal", de: "Schläfenbein", nl: "Slaapbeen" },
          { en: "Sphenoid bone", es: "Hueso esfenoides", de: "Keilbein", nl: "Wiggebeen" }
        ],
        correct: 0,
        explanation: {
          en: "The occipital bone forms the back and base of the skull. It contains the foramen magnum, a large opening through which the spinal cord connects to the brain, and provides attachment sites for neck muscles.",
          es: "El hueso occipital forma la parte posterior y la base del cráneo. Contiene el foramen magnum, una abertura grande a través de la cual la médula espinal se conecta al cerebro, y proporciona sitios de unión para los músculos del cuello.",
          de: "Das Hinterhauptbein bildet den Rücken und die Basis des Schädels. Es enthält das Foramen magnum, eine große Öffnung, durch die das Rückenmark mit dem Gehirn verbunden ist, und bietet Ansatzstellen für Nackenmuskeln.",
          nl: "Het achterhoofdsbeen vormt de achterkant en basis van de schedel. Het bevat het foramen magnum, een grote opening waardoor het ruggenmerg verbinding maakt met de hersenen, en biedt hechtingsplaatsen voor nekspieren."
        }
      },
      {
        question: {
          en: "What percentage of the human body is typically composed of water?",
          es: "¿Qué porcentaje del cuerpo humano está típicamente compuesto de agua?",
          de: "Aus wie viel Prozent Wasser besteht der menschliche Körper normalerweise?",
          nl: "Uit hoeveel procent water bestaat het menselijk lichaam doorgaans?"
        },
        options: [
          { en: "About 60%", es: "Aproximadamente 60%", de: "Etwa 60%", nl: "Ongeveer 60%" },
          { en: "About 70%", es: "Aproximadamente 70%", de: "Etwa 70%", nl: "Ongeveer 70%" },
          { en: "About 50%", es: "Aproximadamente 50%", de: "Etwa 50%", nl: "Ongeveer 50%" },
          { en: "About 80%", es: "Aproximadamente 80%", de: "Etwa 80%", nl: "Ongeveer 80%" }
        ],
        correct: 0,
        explanation: {
          en: "The human body is approximately 60% water on average, though this varies by age, sex, and body composition. Infants have higher water content (about 75%), while elderly people have lower percentages (about 50%).",
          es: "El cuerpo humano es aproximadamente 60% agua en promedio, aunque esto varía según la edad, sexo y composición corporal. Los bebés tienen mayor contenido de agua (alrededor del 75%), mientras que las personas mayores tienen porcentajes más bajos (alrededor del 50%).",
          de: "Der menschliche Körper besteht im Durchschnitt aus etwa 60% Wasser, obwohl dies je nach Alter, Geschlecht und Körperzusammensetzung variiert. Säuglinge haben einen höheren Wassergehalt (etwa 75%), während ältere Menschen niedrigere Prozentsätze haben (etwa 50%).",
          nl: "Het menselijk lichaam bestaat gemiddeld uit ongeveer 60% water, hoewel dit varieert naar leeftijd, geslacht en lichaamssamenstelling. Baby's hebben een hoger watergehalte (ongeveer 75%), terwijl oudere mensen lagere percentages hebben (ongeveer 50%)."
        }
      },
      {
        question: {
          en: "Which part of the eye changes shape to focus light on the retina?",
          es: "¿Qué parte del ojo cambia de forma para enfocar la luz en la retina?",
          de: "Welcher Teil des Auges verändert seine Form, um Licht auf die Netzhaut zu fokussieren?",
          nl: "Welk deel van het oog verandert van vorm om licht op het netvlies te focussen?"
        },
        options: [
          { en: "Lens", es: "Cristalino", de: "Linse", nl: "Lens" },
          { en: "Cornea", es: "Córnea", de: "Hornhaut", nl: "Hoornvlies" },
          { en: "Iris", es: "Iris", de: "Iris", nl: "Iris" },
          { en: "Pupil", es: "Pupila", de: "Pupille", nl: "Pupil" }
        ],
        correct: 0,
        explanation: {
          en: "The lens of the eye changes shape (accommodation) to focus light rays precisely on the retina. It becomes thicker for near vision and thinner for distant vision, controlled by the ciliary muscles.",
          es: "El cristalino del ojo cambia de forma (acomodación) para enfocar los rayos de luz precisamente en la retina. Se vuelve más grueso para la visión cercana y más delgado para la visión distante, controlado por los músculos ciliares.",
          de: "Die Linse des Auges verändert ihre Form (Akkommodation), um Lichtstrahlen präzise auf die Netzhaut zu fokussieren. Sie wird dicker für die Nahsicht und dünner für die Fernsicht, gesteuert von den Ziliarmuskeln.",
          nl: "De lens van het oog verandert van vorm (accommodatie) om lichtstralen precies op het netvlies te focussen. Het wordt dikker voor nabijzien en dunner voor verafzien, gecontroleerd door de ciliairspieren."
        }
      },
      {
        question: {
          en: "Which part of the brain controls balance and coordination?",
          es: "¿Qué parte del cerebro controla el equilibrio y la coordinación?",
          de: "Welcher Teil des Gehirns kontrolliert Gleichgewicht und Koordination?",
          nl: "Welk deel van de hersenen controleert evenwicht en coördinatie?"
        },
        options: [
          { en: "Cerebellum", es: "Cerebelo", de: "Kleinhirn", nl: "Kleine hersenen" },
          { en: "Cerebrum", es: "Cerebro", de: "Großhirn", nl: "Grote hersenen" },
          { en: "Brainstem", es: "Tronco encefálico", de: "Hirnstamm", nl: "Hersenstam" },
          { en: "Hypothalamus", es: "Hipotálamo", de: "Hypothalamus", nl: "Hypothalamus" }
        ],
        correct: 0,
        explanation: {
          en: "The cerebellum, located at the back of the brain below the cerebrum, is responsible for balance, coordination, posture, and fine motor control. It processes information from the inner ear, eyes, and muscles.",
          es: "El cerebelo, ubicado en la parte posterior del cerebro debajo del cerebro, es responsable del equilibrio, coordinación, postura y control motor fino. Procesa información del oído interno, ojos y músculos.",
          de: "Das Kleinhirn, das sich im hinteren Teil des Gehirns unter dem Großhirn befindet, ist für Gleichgewicht, Koordination, Haltung und feine motorische Kontrolle verantwortlich. Es verarbeitet Informationen aus dem Innenohr, den Augen und Muskeln.",
          nl: "De kleine hersenen, gelegen aan de achterkant van de hersenen onder de grote hersenen, zijn verantwoordelijk voor evenwicht, coördinatie, houding en fijne motorische controle. Het verwerkt informatie van het binnenoor, ogen en spieren."
        }
      },
      {
        question: {
          en: "What is the largest artery in the human body?",
          es: "¿Cuál es la arteria más grande del cuerpo humano?",
          de: "Was ist die größte Arterie im menschlichen Körper?",
          nl: "Wat is de grootste slagader in het menselijk lichaam?"
        },
        options: [
          { en: "Aorta", es: "Aorta", de: "Aorta", nl: "Aorta" },
          { en: "Pulmonary artery", es: "Arteria pulmonar", de: "Lungenarterie", nl: "Longslagader" },
          { en: "Carotid artery", es: "Arteria carótida", de: "Halsschlagader", nl: "Halsslagader" },
          { en: "Femoral artery", es: "Arteria femoral", de: "Oberschenkelarterie", nl: "Dijbeenslagader" }
        ],
        correct: 0,
        explanation: {
          en: "The aorta is the largest artery in the human body, arising from the left ventricle of the heart and carrying oxygenated blood to all parts of the body through its various branches.",
          es: "La aorta es la arteria más grande del cuerpo humano, que surge del ventrículo izquierdo del corazón y lleva sangre oxigenada a todas las partes del cuerpo a través de sus diversas ramas.",
          de: "Die Aorta ist die größte Arterie im menschlichen Körper, entspringt der linken Herzkammer und transportiert sauerstoffreiches Blut über ihre verschiedenen Äste zu allen Teilen des Körpers.",
          nl: "De aorta is de grootste slagader in het menselijk lichaam, ontstaat uit de linker hartkamer en draagt zuurstofrijk bloed naar alle delen van het lichaam via zijn verschillende takken."
        }
      },
      {
        question: {
          en: "Which hormone is primarily responsible for regulating blood sugar levels?",
          es: "¿Qué hormona es principalmente responsable de regular los niveles de azúcar en sangre?",
          de: "Welches Hormon ist hauptsächlich für die Regulierung des Blutzuckerspiegels verantwortlich?",
          nl: "Welk hormoon is primair verantwoordelijk voor het reguleren van bloedsuikerniveaus?"
        },
        options: [
          { en: "Insulin", es: "Insulina", de: "Insulin", nl: "Insuline" },
          { en: "Adrenaline", es: "Adrenalina", de: "Adrenalin", nl: "Adrenaline" },
          { en: "Cortisol", es: "Cortisol", de: "Cortisol", nl: "Cortisol" },
          { en: "Thyroxine", es: "Tiroxina", de: "Thyroxin", nl: "Thyroxine" }
        ],
        correct: 0,
        explanation: {
          en: "Insulin, produced by the pancreas, is the primary hormone responsible for regulating blood glucose levels by facilitating glucose uptake by cells and promoting glucose storage as glycogen.",
          es: "La insulina, producida por el páncreas, es la hormona principal responsable de regular los niveles de glucosa en sangre facilitando la absorción de glucosa por las células y promoviendo el almacenamiento de glucosa como glucógeno.",
          de: "Insulin, das von der Bauchspeicheldrüse produziert wird, ist das Haupthormon, das für die Regulierung des Blutzuckerspiegels verantwortlich ist, indem es die Glukoseaufnahme durch Zellen erleichtert und die Glukosespeicherung als Glykogen fördert.",
          nl: "Insuline, geproduceerd door de alvleesklier, is het primaire hormoon verantwoordelijk voor het reguleren van bloedglucose niveaus door glucose opname door cellen te faciliteren en glucose opslag als glycogeen te bevorderen."
        }
      },
      {
        question: {
          en: "What is the normal resting heart rate for a healthy adult?",
          es: "¿Cuál es la frecuencia cardíaca normal en reposo para un adulto sano?",
          de: "Wie hoch ist die normale Ruheherzfrequenz für einen gesunden Erwachsenen?",
          nl: "Wat is de normale rustende hartslag voor een gezonde volwassene?"
        },
        options: [
          { en: "60-100 beats per minute", es: "60-100 latidos por minuto", de: "60-100 Schläge pro Minute", nl: "60-100 slagen per minuut" },
          { en: "80-120 beats per minute", es: "80-120 latidos por minuto", de: "80-120 Schläge pro Minute", nl: "80-120 slagen per minuut" },
          { en: "40-80 beats per minute", es: "40-80 latidos por minuto", de: "40-80 Schläge pro Minute", nl: "40-80 slagen per minuut" },
          { en: "100-140 beats per minute", es: "100-140 latidos por minuto", de: "100-140 Schläge pro Minute", nl: "100-140 slagen per minuut" }
        ],
        correct: 0,
        explanation: {
          en: "The normal resting heart rate for healthy adults ranges from 60 to 100 beats per minute. Athletes often have lower resting heart rates due to improved cardiovascular fitness.",
          es: "La frecuencia cardíaca normal en reposo para adultos sanos varía de 60 a 100 latidos por minuto. Los atletas a menudo tienen frecuencias cardíacas en reposo más bajas debido a una mejor condición cardiovascular.",
          de: "Die normale Ruheherzfrequenz für gesunde Erwachsene liegt zwischen 60 und 100 Schlägen pro Minute. Sportler haben oft niedrigere Ruheherzfrequenzen aufgrund verbesserter kardiovaskulärer Fitness.",
          nl: "De normale rustende hartslag voor gezonde volwassenen varieert van 60 tot 100 slagen per minuut. Atleten hebben vaak lagere rustende hartslagen vanwege verbeterde cardiovasculaire fitheid."
        }
      },
      {
        question: {
          en: "Which type of blood cell is responsible for carrying oxygen?",
          es: "¿Qué tipo de células sanguíneas es responsable de transportar oxígeno?",
          de: "Welcher Typ von Blutzellen ist für den Sauerstofftransport verantwortlich?",
          nl: "Welk type bloedcel is verantwoordelijk voor het vervoeren van zuurstof?"
        },
        options: [
          { en: "Red blood cells (erythrocytes)", es: "Glóbulos rojos (eritrocitos)", de: "Rote Blutkörperchen (Erythrozyten)", nl: "Rode bloedcellen (erytrocyten)" },
          { en: "White blood cells (leukocytes)", es: "Glóbulos blancos (leucocitos)", de: "Weiße Blutkörperchen (Leukozyten)", nl: "Witte bloedcellen (leukocyten)" },
          { en: "Platelets (thrombocytes)", es: "Plaquetas (trombocitos)", de: "Blutplättchen (Thrombozyten)", nl: "Bloedplaatjes (trombocyten)" },
          { en: "Plasma cells", es: "Células plasmáticas", de: "Plasmazellen", nl: "Plasmacellen" }
        ],
        correct: 0,
        explanation: {
          en: "Red blood cells contain hemoglobin, an iron-containing protein that binds to oxygen in the lungs and transports it to tissues throughout the body. They make up about 40-45% of blood volume.",
          es: "Los glóbulos rojos contienen hemoglobina, una proteína que contiene hierro que se une al oxígeno en los pulmones y lo transporta a los tejidos por todo el cuerpo. Representan aproximadamente el 40-45% del volumen sanguíneo.",
          de: "Rote Blutkörperchen enthalten Hämoglobin, ein eisenhaltiges Protein, das in der Lunge an Sauerstoff bindet und ihn zu Geweben im ganzen Körper transportiert. Sie machen etwa 40-45% des Blutvolumens aus.",
          nl: "Rode bloedcellen bevatten hemoglobine, een ijzerhoudend eiwit dat zuurstof in de longen bindt en naar weefsels door het hele lichaam transporteert. Ze vormen ongeveer 40-45% van het bloedvolume."
        }
      },
      {
        question: {
          en: "What is the function of the diaphragm in the respiratory system?",
          es: "¿Cuál es la función del diafragma en el sistema respiratorio?",
          de: "Was ist die Funktion des Zwerchfells im Atmungssystem?",
          nl: "Wat is de functie van het middenrif in het ademhalingssysteem?"
        },
        options: [
          { en: "Primary muscle for breathing", es: "Músculo principal para respirar", de: "Hauptmuskel für die Atmung", nl: "Primaire spier voor ademhaling" },
          { en: "Gas exchange", es: "Intercambio de gases", de: "Gasaustausch", nl: "Gasuitwisseling" },
          { en: "Air filtration", es: "Filtración de aire", de: "Luftfilterung", nl: "Luchtfiltering" },
          { en: "Sound production", es: "Producción de sonido", de: "Schallerzeugung", nl: "Geluidproductie" }
        ],
        correct: 0,
        explanation: {
          en: "The diaphragm is the primary muscle of respiration. When it contracts, it moves downward, increasing chest cavity volume and drawing air into the lungs during inspiration.",
          es: "El diafragma es el músculo principal de la respiración. Cuando se contrae, se mueve hacia abajo, aumentando el volumen de la cavidad torácica y aspirando aire hacia los pulmones durante la inspiración.",
          de: "Das Zwerchfell ist der Hauptmuskel der Atmung. Wenn es sich zusammenzieht, bewegt es sich nach unten, vergrößert das Volumen der Brusthöhle und zieht während der Inspiration Luft in die Lungen.",
          nl: "Het middenrif is de primaire spier van de ademhaling. Wanneer het samentrekt, beweegt het naar beneden, vergroot het borstholte volume en trekt lucht de longen in tijdens inademing."
        }
      },
      {
        question: {
          en: "Which organ produces bile to help digest fats?",
          es: "¿Qué órgano produce bilis para ayudar a digerir las grasas?",
          de: "Welches Organ produziert Galle zur Fettverdauung?",
          nl: "Welk orgaan produceert gal om vetten te verteren?"
        },
        options: [
          { en: "Liver", es: "Hígado", de: "Leber", nl: "Lever" },
          { en: "Gallbladder", es: "Vesícula biliar", de: "Gallenblase", nl: "Galblaas" },
          { en: "Pancreas", es: "Páncreas", de: "Pankreas", nl: "Alvleesklier" },
          { en: "Small intestine", es: "Intestino delgado", de: "Dünndarm", nl: "Dunne darm" }
        ],
        correct: 0,
        explanation: {
          en: "The liver produces bile, which is stored in the gallbladder and released into the small intestine to help emulsify and digest fats. The liver is the largest internal organ and performs many vital functions.",
          es: "El hígado produce bilis, que se almacena en la vesícula biliar y se libera en el intestino delgado para ayudar a emulsificar y digerir las grasas. El hígado es el órgano interno más grande y realiza muchas funciones vitales.",
          de: "Die Leber produziert Galle, die in der Gallenblase gespeichert und in den Dünndarm freigesetzt wird, um Fette zu emulgieren und zu verdauen. Die Leber ist das größte innere Organ und erfüllt viele lebenswichtige Funktionen.",
          nl: "De lever produceert gal, die wordt opgeslagen in de galblaas en vrijgegeven in de dunne darm om vetten te emulgeren en verteren. De lever is het grootste inwendige orgaan en voert veel vitale functies uit."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/medicine', level1);
  }
})();