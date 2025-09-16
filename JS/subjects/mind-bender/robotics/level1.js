// Robotics - Level 1: Basic Robotics Concepts & Actuators
window.addLevel('mind-bender/robotics', {
  name: { 
    en: 'Basic Robotics Concepts & Actuators', 
    es: 'Conceptos Básicos de Robótica y Actuadores', 
    de: 'Grundlagen der Robotik & Aktuatoren', 
    nl: 'Basisconcepten Robotica & Actuatoren' 
  },
  questions: [
    {
      question: {
        en: "What is the primary function of an actuator in robotics?",
        es: "¿Cuál es la función principal de un actuador en robótica?",
        de: "Was ist die Hauptfunktion eines Aktuators in der Robotik?",
        nl: "Wat is de primaire functie van een actuator in de robotica?"
      },
      options: [
        { en: "To convert electrical energy into mechanical motion", es: "Convertir energía eléctrica en movimiento mecánico", de: "Elektrische Energie in mechanische Bewegung umwandeln", nl: "Elektrische energie omzetten in mechanische beweging" },
        { en: "To sense environmental conditions", es: "Detectar las condiciones ambientales", de: "Umgebungsbedingungen erfassen", nl: "Omgevingsomstandigheden waarnemen" },
        { en: "To process control algorithms", es: "Procesar algoritmos de control", de: "Steuerungsalgorithmen verarbeiten", nl: "Controle-algoritmen verwerken" },
        { en: "To store program instructions", es: "Almacenar instrucciones del programa", de: "Programmanweisungen speichern", nl: "Programma-instructies opslaan" }
      ],
      correct: 0,
      explanation: {
        en: "An actuator is a device that converts electrical, hydraulic, or pneumatic energy into mechanical motion, enabling robots to move and manipulate objects in their environment.",
        es: "Un actuador es un dispositivo que convierte la energía eléctrica, hidráulica o neumática en movimiento mecánico, permitiendo que los robots se muevan y manipulen objetos en su entorno.",
        de: "Ein Aktuator ist ein Gerät, das elektrische, hydraulische oder pneumatische Energie in mechanische Bewegung umwandelt, wodurch Roboter sich bewegen und Objekte in ihrer Umgebung manipulieren können.",
        nl: "Een actuator is een apparaat dat elektrische, hydraulische of pneumatische energie omzet in mechanische beweging, waardoor robots kunnen bewegen en objecten in hun omgeving kunnen manipuleren."
      }
    },
    {
      question: {
        en: "Which type of motor is most commonly used for precise positioning in robotics?",
        es: "¿Qué tipo de motor se usa más comúnmente para el posicionamiento preciso en robótica?",
        de: "Welcher Motortyp wird am häufigsten für präzise Positionierung in der Robotik verwendet?",
        nl: "Welk type motor wordt het meest gebruikt voor nauwkeurige positionering in de robotica?"
      },
      options: [
        { en: "Servo motor", es: "Motor servo", de: "Servomotor", nl: "Servomotor" },
        { en: "DC brush motor", es: "Motor DC con escobillas", de: "DC-Bürstenmotor", nl: "DC-borstelmotor" },
        { en: "AC induction motor", es: "Motor de inducción AC", de: "AC-Induktionsmotor", nl: "AC-inductiemotor" },
        { en: "Universal motor", es: "Motor universal", de: "Universalmotor", nl: "Universele motor" }
      ],
      correct: 0,
      explanation: {
        en: "Servo motors are widely used in robotics because they provide precise position control through feedback systems, allowing for accurate and repeatable positioning of robot joints and end-effectors.",
        es: "Los motores servo se usan ampliamente en robótica porque proporcionan control preciso de posición a través de sistemas de retroalimentación, permitiendo posicionamiento preciso y repetible de articulaciones robóticas y efectores finales.",
        de: "Servomotoren werden in der Robotik weit verbreitet eingesetzt, da sie durch Rückkopplungssysteme präzise Positionskontrolle bieten und genaue und wiederholbare Positionierung von Robotergelenken und Endeffektoren ermöglichen.",
        nl: "Servomotors worden veel gebruikt in de robotica omdat ze nauwkeurige positiecontrole bieden via feedbacksystemen, wat nauwkeurige en herhaalbare positionering van robotgewrichten en eindeffectoren mogelijk maakt."
      }
    },
    {
      question: {
        en: "What does DOF stand for in robotics?",
        es: "¿Qué significa DOF en robótica?",
        de: "Wofür steht DOF in der Robotik?",
        nl: "Waar staat DOF voor in de robotica?"
      },
      options: [
        { en: "Degrees of Freedom", es: "Grados de Libertad", de: "Freiheitsgrade", nl: "Vrijheidsgraden" },
        { en: "Dynamic Output Force", es: "Fuerza de Salida Dinámica", de: "Dynamische Ausgangskraft", nl: "Dynamische Uitgangskracht" },
        { en: "Digital Optical Feedback", es: "Retroalimentación Óptica Digital", de: "Digitale Optische Rückkopplung", nl: "Digitale Optische Feedback" },
        { en: "Direct Operation Function", es: "Función de Operación Directa", de: "Direkte Betriebsfunktion", nl: "Directe Operatiefunctie" }
      ],
      correct: 0,
      explanation: {
        en: "DOF stands for Degrees of Freedom, which refers to the number of independent motions a robot can make. A typical industrial robot arm has 6 DOF, allowing it to position and orient its end-effector in 3D space.",
        es: "DOF significa Grados de Libertad, que se refiere al número de movimientos independientes que puede hacer un robot. Un brazo robótico industrial típico tiene 6 DOF, permitiéndole posicionar y orientar su efector final en el espacio 3D.",
        de: "DOF steht für Freiheitsgrade, was sich auf die Anzahl unabhängiger Bewegungen bezieht, die ein Roboter ausführen kann. Ein typischer Industrieroboterarm hat 6 Freiheitsgrade, wodurch er seinen Endeffektor im 3D-Raum positionieren und orientieren kann.",
        nl: "DOF staat voor Vrijheidsgraden, wat verwijst naar het aantal onafhankelijke bewegingen dat een robot kan maken. Een typische industriële robotarm heeft 6 DOF, waardoor hij zijn eindeffector in 3D-ruimte kan positioneren en oriënteren."
      }
    },
    {
      question: {
        en: "Which component in a robot arm is responsible for the final interaction with objects?",
        es: "¿Qué componente en un brazo robótico es responsable de la interacción final con objetos?",
        de: "Welche Komponente in einem Roboterarm ist für die finale Interaktion mit Objekten verantwortlich?",
        nl: "Welk onderdeel in een robotarm is verantwoordelijk voor de uiteindelijke interactie met objecten?"
      },
      options: [
        { en: "End-effector", es: "Efector final", de: "Endeffektor", nl: "Eindeffector" },
        { en: "Base joint", es: "Articulación base", de: "Basisgelenk", nl: "Basisgewricht" },
        { en: "Controller", es: "Controlador", de: "Steuerung", nl: "Controller" },
        { en: "Power supply", es: "Fuente de alimentación", de: "Stromversorgung", nl: "Voeding" }
      ],
      correct: 0,
      explanation: {
        en: "The end-effector is the tool or device at the end of a robot arm that directly interacts with objects in the environment. Examples include grippers, welding torches, painting nozzles, or specialized tools.",
        es: "El efector final es la herramienta o dispositivo al final de un brazo robótico que interactúa directamente con objetos en el entorno. Ejemplos incluyen pinzas, antorchas de soldadura, boquillas de pintura o herramientas especializadas.",
        de: "Der Endeffektor ist das Werkzeug oder Gerät am Ende eines Roboterarms, das direkt mit Objekten in der Umgebung interagiert. Beispiele sind Greifer, Schweißbrenner, Lackierdüsen oder spezialisierte Werkzeuge.",
        nl: "De eindeffector is het gereedschap of apparaat aan het einde van een robotarm dat direct interacteert met objecten in de omgeving. Voorbeelden zijn grijpers, lasfakkels, verfspuiten of gespecialiseerd gereedschap."
      }
    },
    {
      question: {
        en: "What is the main advantage of hydraulic actuators in robotics?",
        es: "¿Cuál es la principal ventaja de los actuadores hidráulicos en robótica?",
        de: "Was ist der Hauptvorteil hydraulischer Aktuatoren in der Robotik?",
        nl: "Wat is het hoofdvoordeel van hydraulische actuatoren in de robotica?"
      },
      options: [
        { en: "High power-to-weight ratio and precise force control", es: "Alta relación potencia-peso y control preciso de fuerza", de: "Hohes Leistungsgewichtsverhältnis und präzise Kraftkontrolle", nl: "Hoge vermogen-gewichtsverhouding en nauwkeurige krachtcontrole" },
        { en: "Low cost and simple maintenance", es: "Bajo costo y mantenimiento simple", de: "Niedrige Kosten und einfache Wartung", nl: "Lage kosten en eenvoudig onderhoud" },
        { en: "Silent operation and clean environment", es: "Operación silenciosa y ambiente limpio", de: "Leiser Betrieb und saubere Umgebung", nl: "Stille werking en schone omgeving" },
        { en: "Fast response time and high frequency operation", es: "Tiempo de respuesta rápido y operación de alta frecuencia", de: "Schnelle Reaktionszeit und Hochfrequenzbetrieb", nl: "Snelle responstijd en hoge frequentie werking" }
      ],
      correct: 0,
      explanation: {
        en: "Hydraulic actuators provide exceptional power-to-weight ratios and excellent force control, making them ideal for heavy-duty applications requiring precise force application, such as construction robots or heavy industrial manipulators.",
        es: "Los actuadores hidráulicos proporcionan relaciones potencia-peso excepcionales y excelente control de fuerza, haciéndolos ideales para aplicaciones pesadas que requieren aplicación precisa de fuerza, como robots de construcción o manipuladores industriales pesados.",
        de: "Hydraulische Aktuatoren bieten außergewöhnliche Leistungsgewichtsverhältnisse und ausgezeichnete Kraftkontrolle, wodurch sie ideal für schwere Anwendungen sind, die präzise Kraftanwendung erfordern, wie Baurobots oder schwere Industriemanipulatoren.",
        nl: "Hydraulische actuatoren bieden uitzonderlijke vermogen-gewichtsverhoudingen en uitstekende krachtcontrole, waardoor ze ideaal zijn voor zware toepassingen die nauwkeurige krachttoepassing vereisen, zoals bouwrobots of zware industriële manipulatoren."
      }
    },
    {
      question: {
        en: "In robotics, what is a kinematic chain?",
        es: "En robótica, ¿qué es una cadena cinemática?",
        de: "Was ist eine kinematische Kette in der Robotik?",
        nl: "Wat is een kinematische keten in de robotica?"
      },
      options: [
        { en: "A series of rigid links connected by joints", es: "Una serie de enlaces rígidos conectados por articulaciones", de: "Eine Serie starrer Glieder, die durch Gelenke verbunden sind", nl: "Een reeks starre schakels verbonden door gewrichten" },
        { en: "A control algorithm for motion planning", es: "Un algoritmo de control para planificación de movimiento", de: "Ein Steuerungsalgorithmus für Bewegungsplanung", nl: "Een controle-algoritme voor bewegingsplanning" },
        { en: "A power transmission system", es: "Un sistema de transmisión de potencia", de: "Ein Kraftübertragungssystem", nl: "Een vermogensoverbrengingssysteem" },
        { en: "A sensor network for position feedback", es: "Una red de sensores para retroalimentación de posición", de: "Ein Sensornetzwerk für Positionsrückmeldung", nl: "Een sensornetwerk voor positiefeedback" }
      ],
      correct: 0,
      explanation: {
        en: "A kinematic chain is a series of rigid links connected by joints that can move relative to each other. This forms the basic mechanical structure of robot manipulators, with each joint providing one or more degrees of freedom.",
        es: "Una cadena cinemática es una serie de enlaces rígidos conectados por articulaciones que pueden moverse relativamente entre sí. Esto forma la estructura mecánica básica de los manipuladores robóticos, con cada articulación proporcionando uno o más grados de libertad.",
        de: "Eine kinematische Kette ist eine Serie starrer Glieder, die durch Gelenke verbunden sind, die sich relativ zueinander bewegen können. Dies bildet die grundlegende mechanische Struktur von Robotermanipulatoren, wobei jedes Gelenk einen oder mehrere Freiheitsgrade bietet.",
        nl: "Een kinematische keten is een reeks starre schakels verbonden door gewrichten die relatief ten opzichte van elkaar kunnen bewegen. Dit vormt de basis mechanische structuur van robotmanipulatoren, waarbij elk gewricht een of meer vrijheidsgraden biedt."
      }
    },
    {
      question: {
        en: "What type of joint allows rotation around a single axis?",
        es: "¿Qué tipo de articulación permite rotación alrededor de un solo eje?",
        de: "Welcher Gelenktyp ermöglicht Rotation um eine einzige Achse?",
        nl: "Welk type gewricht staat rotatie rond een enkele as toe?"
      },
      options: [
        { en: "Revolute joint", es: "Articulación de revolución", de: "Drehgelenk", nl: "Draaigewricht" },
        { en: "Prismatic joint", es: "Articulación prismática", de: "Prismatisches Gelenk", nl: "Prismatisch gewricht" },
        { en: "Spherical joint", es: "Articulación esférica", de: "Kugelgelenk", nl: "Kogelsgewricht" },
        { en: "Universal joint", es: "Articulación universal", de: "Universalgelenk", nl: "Universeel gewricht" }
      ],
      correct: 0,
      explanation: {
        en: "A revolute joint allows rotation around a single axis, like a door hinge. This is the most common type of joint in robot manipulators, providing one degree of freedom for rotational movement.",
        es: "Una articulación de revolución permite rotación alrededor de un solo eje, como una bisagra de puerta. Este es el tipo más común de articulación en manipuladores robóticos, proporcionando un grado de libertad para movimiento rotacional.",
        de: "Ein Drehgelenk ermöglicht Rotation um eine einzige Achse, wie ein Türscharnier. Dies ist der häufigste Gelenktyp in Robotermanipulatoren und bietet einen Freiheitsgrad für Rotationsbewegung.",
        nl: "Een draaigewricht staat rotatie rond een enkele as toe, zoals een deurscharnier. Dit is het meest voorkomende type gewricht in robotmanipulatoren, dat een vrijheidsgraad biedt voor roterende beweging."
      }
    },
    {
      question: {
        en: "What is the workspace of a robot?",
        es: "¿Qué es el espacio de trabajo de un robot?",
        de: "Was ist der Arbeitsbereich eines Roboters?",
        nl: "Wat is de werkruimte van een robot?"
      },
      options: [
        { en: "The volume of space the robot's end-effector can reach", es: "El volumen de espacio que puede alcanzar el efector final del robot", de: "Das Raumvolumen, das der Endeffektor des Roboters erreichen kann", nl: "Het ruimtevolume dat de eindeffector van de robot kan bereiken" },
        { en: "The physical area where the robot is installed", es: "El área física donde está instalado el robot", de: "Der physische Bereich, wo der Roboter installiert ist", nl: "Het fysieke gebied waar de robot is geïnstalleerd" },
        { en: "The computer memory allocated for robot programs", es: "La memoria de computadora asignada para programas de robot", de: "Der Computerspeicher, der für Roboterprogramme zugewiesen ist", nl: "Het computergeheugen toegewezen voor robotprogramma's" },
        { en: "The set of tasks the robot can perform", es: "El conjunto de tareas que el robot puede realizar", de: "Die Menge an Aufgaben, die der Roboter ausführen kann", nl: "De set taken die de robot kan uitvoeren" }
      ],
      correct: 0,
      explanation: {
        en: "The workspace is the three-dimensional volume of space that the robot's end-effector can reach. It's determined by the robot's mechanical design, joint limits, and link lengths.",
        es: "El espacio de trabajo es el volumen tridimensional de espacio que puede alcanzar el efector final del robot. Está determinado por el diseño mecánico del robot, los límites de las articulaciones y las longitudes de los enlaces.",
        de: "Der Arbeitsbereich ist das dreidimensionale Raumvolumen, das der Endeffektor des Roboters erreichen kann. Er wird durch das mechanische Design des Roboters, Gelenkgrenzen und Gliedlängen bestimmt.",
        nl: "De werkruimte is het driedimensionale ruimtevolume dat de eindeffector van de robot kan bereiken. Het wordt bepaald door het mechanische ontwerp van de robot, gewrichtlimieten en schakellengtes."
      }
    },
    {
      question: {
        en: "Which programming method involves physically moving the robot to teach positions?",
        es: "¿Qué método de programación involucra mover físicamente el robot para enseñar posiciones?",
        de: "Welche Programmiermethode beinhaltet die physische Bewegung des Roboters zum Lehren von Positionen?",
        nl: "Welke programmeermethode houdt in dat de robot fysiek wordt bewogen om posities te leren?"
      },
      options: [
        { en: "Lead-through programming", es: "Programación por guiado", de: "Führungsprogrammierung", nl: "Doorleidingsprogrammering" },
        { en: "Offline programming", es: "Programación offline", de: "Offline-Programmierung", nl: "Offline programmering" },
        { en: "Textual programming", es: "Programación textual", de: "Textuelle Programmierung", nl: "Tekstuele programmering" },
        { en: "Simulation programming", es: "Programación por simulación", de: "Simulationsprogrammierung", nl: "Simulatieprogrammering" }
      ],
      correct: 0,
      explanation: {
        en: "Lead-through programming involves physically guiding the robot arm through desired motions while recording the positions. This method is intuitive and commonly used for teaching complex trajectories.",
        es: "La programación por guiado involucra guiar físicamente el brazo del robot a través de movimientos deseados mientras se graban las posiciones. Este método es intuitivo y comúnmente usado para enseñar trayectorias complejas.",
        de: "Führungsprogrammierung beinhaltet die physische Führung des Roboterarms durch gewünschte Bewegungen, während die Positionen aufgezeichnet werden. Diese Methode ist intuitiv und wird häufig zum Lehren komplexer Trajektorien verwendet.",
        nl: "Doorleidingsprogrammering houdt in dat de robotarm fysiek wordt geleid door gewenste bewegingen terwijl de posities worden opgenomen. Deze methode is intuïtief en wordt vaak gebruikt voor het leren van complexe trajectories."
      }
    },
    {
      question: {
        en: "What is the primary purpose of a robot controller?",
        es: "¿Cuál es el propósito principal de un controlador de robot?",
        de: "Was ist der Hauptzweck einer Robotersteuerung?",
        nl: "Wat is het hoofddoel van een robotcontroller?"
      },
      options: [
        { en: "To coordinate motion and execute programmed tasks", es: "Coordinar el movimiento y ejecutar tareas programadas", de: "Bewegung zu koordinieren und programmierte Aufgaben auszuführen", nl: "Beweging coördineren en geprogrammeerde taken uitvoeren" },
        { en: "To provide electrical power to the robot", es: "Proporcionar energía eléctrica al robot", de: "Elektrische Energie für den Roboter bereitzustellen", nl: "Elektrische energie aan de robot leveren" },
        { en: "To protect the robot from physical damage", es: "Proteger el robot de daños físicos", de: "Den Roboter vor physischen Schäden zu schützen", nl: "De robot beschermen tegen fysieke schade" },
        { en: "To communicate with human operators", es: "Comunicarse con operadores humanos", de: "Mit menschlichen Bedienern zu kommunizieren", nl: "Communiceren met menselijke operators" }
      ],
      correct: 0,
      explanation: {
        en: "The robot controller is the brain of the robot system, responsible for interpreting programs, coordinating joint motions, processing sensor feedback, and executing tasks according to programmed instructions.",
        es: "El controlador de robot es el cerebro del sistema robótico, responsable de interpretar programas, coordinar movimientos de articulaciones, procesar retroalimentación de sensores y ejecutar tareas según las instrucciones programadas.",
        de: "Die Robotersteuerung ist das Gehirn des Robotersystems, verantwortlich für die Interpretation von Programmen, Koordination von Gelenkbewegungen, Verarbeitung von Sensorrückmeldungen und Ausführung von Aufgaben gemäß programmierten Anweisungen.",
        nl: "De robotcontroller is het brein van het robotsysteem, verantwoordelijk voor het interpreteren van programma's, coördineren van gewrichtbewegingen, verwerken van sensorfeedback en uitvoeren van taken volgens geprogrammeerde instructies."
      }
    },
    {
      question: {
        en: "What does PWM stand for in robot motor control?",
        es: "¿Qué significa PWM en el control de motores de robot?",
        de: "Wofür steht PWM in der Roboter-Motorsteuerung?",
        nl: "Waar staat PWM voor in robotmotorbesturing?"
      },
      options: [
        { en: "Pulse Width Modulation", es: "Modulación de Ancho de Pulso", de: "Pulsbreitenmodulation", nl: "Pulsbreedtemodulatie" },
        { en: "Power Watt Measurement", es: "Medición de Potencia en Vatios", de: "Leistungs-Watt-Messung", nl: "Vermogen Watt Meting" },
        { en: "Positional Weight Mapping", es: "Mapeo de Peso Posicional", de: "Positionsgewicht-Zuordnung", nl: "Positionele Gewicht Mapping" },
        { en: "Programmable Work Mode", es: "Modo de Trabajo Programable", de: "Programmierbarer Arbeitsmodus", nl: "Programmeerbare Werkmodus" }
      ],
      correct: 0,
      explanation: {
        en: "PWM (Pulse Width Modulation) is a technique used to control motor speed by varying the width of electrical pulses sent to the motor. This allows precise speed control while maintaining efficiency.",
        es: "PWM (Modulación de Ancho de Pulso) es una técnica usada para controlar la velocidad del motor variando el ancho de los pulsos eléctricos enviados al motor. Esto permite control preciso de velocidad manteniendo la eficiencia.",
        de: "PWM (Pulsbreitenmodulation) ist eine Technik zur Motorgeschwindigkeitskontrolle durch Variation der Breite elektrischer Impulse, die an den Motor gesendet werden. Dies ermöglicht präzise Geschwindigkeitskontrolle bei gleichzeitiger Effizienz.",
        nl: "PWM (Pulsbreedtemodulatie) is een techniek voor motorsnelheidscontrole door het variëren van de breedte van elektrische pulsen die naar de motor worden gestuurd. Dit maakt nauwkeurige snelheidscontrole mogelijk terwijl de efficiëntie behouden blijft."
      }
    },
    {
      question: {
        en: "Which type of gripper is best suited for handling delicate objects?",
        es: "¿Qué tipo de pinza es más adecuada para manejar objetos delicados?",
        de: "Welcher Greifertyp ist am besten für den Umgang mit empfindlichen Objekten geeignet?",
        nl: "Welk type grijper is het meest geschikt voor het hanteren van delicate objecten?"
      },
      options: [
        { en: "Soft pneumatic gripper", es: "Pinza neumática suave", de: "Weicher pneumatischer Greifer", nl: "Zachte pneumatische grijper" },
        { en: "Rigid mechanical gripper", es: "Pinza mecánica rígida", de: "Starrer mechanischer Greifer", nl: "Starre mechanische grijper" },
        { en: "Magnetic gripper", es: "Pinza magnética", de: "Magnetischer Greifer", nl: "Magnetische grijper" },
        { en: "Vacuum gripper", es: "Pinza de vacío", de: "Vakuum-Greifer", nl: "Vacuüm grijper" }
      ],
      correct: 0,
      explanation: {
        en: "Soft pneumatic grippers use flexible materials and air pressure to gently conform to object shapes, making them ideal for handling delicate items like fruits, eggs, or fragile components without causing damage.",
        es: "Las pinzas neumáticas suaves usan materiales flexibles y presión de aire para adaptarse suavemente a las formas de los objetos, haciéndolas ideales para manejar artículos delicados como frutas, huevos o componentes frágiles sin causar daño.",
        de: "Weiche pneumatische Greifer verwenden flexible Materialien und Luftdruck, um sich sanft an Objektformen anzupassen, wodurch sie ideal für den Umgang mit empfindlichen Gegenständen wie Früchten, Eiern oder zerbrechlichen Komponenten sind, ohne Schäden zu verursachen.",
        nl: "Zachte pneumatische grijpers gebruiken flexibele materialen en luchtdruk om zich zacht aan objectvormen aan te passen, waardoor ze ideaal zijn voor het hanteren van delicate items zoals fruit, eieren of fragiele componenten zonder schade te veroorzaken."
      }
    },
    {
      question: {
        en: "What is forward kinematics in robotics?",
        es: "¿Qué es la cinemática directa en robótica?",
        de: "Was ist Vorwärtskinematik in der Robotik?",
        nl: "Wat is voorwaartse kinematica in de robotica?"
      },
      options: [
        { en: "Computing end-effector position from joint angles", es: "Calcular la posición del efector final desde los ángulos de las articulaciones", de: "Berechnung der Endeffektor-Position aus Gelenkwinkeln", nl: "Berekenen van eindeffector positie uit gewrichthoeken" },
        { en: "Computing joint angles from end-effector position", es: "Calcular los ángulos de las articulaciones desde la posición del efector final", de: "Berechnung der Gelenkwinkel aus der Endeffektor-Position", nl: "Berekenen van gewrichthoeken uit eindeffector positie" },
        { en: "Planning the motion path of the robot", es: "Planificar la trayectoria de movimiento del robot", de: "Planung des Bewegungspfads des Roboters", nl: "Het plannen van het bewegingspad van de robot" },
        { en: "Controlling the speed of robot joints", es: "Controlar la velocidad de las articulaciones del robot", de: "Steuerung der Geschwindigkeit der Robotergelenke", nl: "Het controleren van de snelheid van robotgewrichten" }
      ],
      correct: 0,
      explanation: {
        en: "Forward kinematics involves calculating the position and orientation of the robot's end-effector given the joint angles. This is essential for determining where the robot's tool will be positioned in space.",
        es: "La cinemática directa involucra calcular la posición y orientación del efector final del robot dados los ángulos de las articulaciones. Esto es esencial para determinar dónde estará posicionada la herramienta del robot en el espacio.",
        de: "Vorwärtskinematik beinhaltet die Berechnung der Position und Orientierung des Roboter-Endeffektors bei gegebenen Gelenkwinkeln. Dies ist wesentlich zur Bestimmung, wo das Roboterwerkzeug im Raum positioniert sein wird.",
        nl: "Voorwaartse kinematica houdt in het berekenen van de positie en oriëntatie van de robotendeffector gegeven de gewrichthoeken. Dit is essentieel voor het bepalen waar het robotgereedschap in de ruimte zal worden gepositioneerd."
      }
    },
    {
      question: {
        en: "What is the main difference between open-loop and closed-loop control in robotics?",
        es: "¿Cuál es la principal diferencia entre control de bucle abierto y bucle cerrado en robótica?",
        de: "Was ist der Hauptunterschied zwischen offener und geschlossener Regelung in der Robotik?",
        nl: "Wat is het hoofdverschil tussen open-loop en gesloten-loop besturing in de robotica?"
      },
      options: [
        { en: "Closed-loop uses feedback, open-loop does not", es: "El bucle cerrado usa retroalimentación, el bucle abierto no", de: "Geschlossene Regelung verwendet Rückkopplung, offene nicht", nl: "Gesloten-loop gebruikt feedback, open-loop niet" },
        { en: "Open-loop is more accurate than closed-loop", es: "El bucle abierto es más preciso que el bucle cerrado", de: "Offene Regelung ist genauer als geschlossene", nl: "Open-loop is nauwkeuriger dan gesloten-loop" },
        { en: "Closed-loop is simpler to implement", es: "El bucle cerrado es más simple de implementar", de: "Geschlossene Regelung ist einfacher zu implementieren", nl: "Gesloten-loop is eenvoudiger te implementeren" },
        { en: "Open-loop requires more sensors", es: "El bucle abierto requiere más sensores", de: "Offene Regelung benötigt mehr Sensoren", nl: "Open-loop vereist meer sensoren" }
      ],
      correct: 0,
      explanation: {
        en: "Closed-loop control uses sensors to provide feedback about the actual system state, allowing for corrections and improved accuracy. Open-loop control operates without feedback, making it simpler but less precise.",
        es: "El control de bucle cerrado usa sensores para proporcionar retroalimentación sobre el estado real del sistema, permitiendo correcciones y mayor precisión. El control de bucle abierto opera sin retroalimentación, haciéndolo más simple pero menos preciso.",
        de: "Geschlossene Regelung verwendet Sensoren für Rückmeldung über den tatsächlichen Systemzustand, wodurch Korrekturen und verbesserte Genauigkeit möglich werden. Offene Regelung arbeitet ohne Rückkopplung, wodurch sie einfacher aber weniger präzise ist.",
        nl: "Gesloten-loop besturing gebruikt sensoren voor feedback over de werkelijke systeemtoestand, wat correcties en verbeterde nauwkeurigheid mogelijk maakt. Open-loop besturing werkt zonder feedback, waardoor het eenvoudiger maar minder nauwkeurig is."
      }
    },
    {
      question: {
        en: "Which material property is most important for robot structural components?",
        es: "¿Qué propiedad del material es más importante para los componentes estructurales del robot?",
        de: "Welche Materialeigenschaft ist am wichtigsten für strukturelle Roboterkomponenten?",
        nl: "Welke materiaaleigenschap is het belangrijkst voor robotstructurele componenten?"
      },
      options: [
        { en: "High strength-to-weight ratio", es: "Alta relación resistencia-peso", de: "Hohes Festigkeits-Gewichts-Verhältnis", nl: "Hoge sterkte-gewichtsverhouding" },
        { en: "Low electrical conductivity", es: "Baja conductividad eléctrica", de: "Geringe elektrische Leitfähigkeit", nl: "Lage elektrische geleidbaarheid" },
        { en: "High thermal expansion", es: "Alta expansión térmica", de: "Hohe Wärmeausdehnung", nl: "Hoge thermische uitzetting" },
        { en: "Soft and flexible texture", es: "Textura suave y flexible", de: "Weiche und flexible Textur", nl: "Zachte en flexibele textuur" }
      ],
      correct: 0,
      explanation: {
        en: "Robot structural components require materials with high strength-to-weight ratios to maximize payload capacity while minimizing the robot's own weight, leading to better performance and energy efficiency.",
        es: "Los componentes estructurales del robot requieren materiales con altas relaciones resistencia-peso para maximizar la capacidad de carga útil mientras minimizan el peso propio del robot, llevando a mejor rendimiento y eficiencia energética.",
        de: "Roboter-Strukturkomponenten benötigen Materialien mit hohen Festigkeits-Gewichts-Verhältnissen, um die Nutzlastkapazität zu maximieren und gleichzeitig das Eigengewicht des Roboters zu minimieren, was zu besserer Leistung und Energieeffizienz führt.",
        nl: "Robotstructurele componenten vereisen materialen met hoge sterkte-gewichtsverhoudingen om de nuttige lastcapaciteit te maximaliseren terwijl het eigengewicht van de robot wordt geminimaliseerd, wat leidt tot betere prestaties en energie-efficiëntie."
      }
    },
    {
      question: {
        en: "What is the primary advantage of electric actuators over hydraulic ones?",
        es: "¿Cuál es la principal ventaja de los actuadores eléctricos sobre los hidráulicos?",
        de: "Was ist der Hauptvorteil elektrischer Aktuatoren gegenüber hydraulischen?",
        nl: "Wat is het hoofdvoordeel van elektrische actuatoren ten opzichte van hydraulische?"
      },
      options: [
        { en: "Cleaner operation and easier maintenance", es: "Operación más limpia y mantenimiento más fácil", de: "Saubererer Betrieb und einfachere Wartung", nl: "Schonere werking en eenvoudiger onderhoud" },
        { en: "Higher power output capability", es: "Mayor capacidad de potencia de salida", de: "Höhere Ausgangsleistungsfähigkeit", nl: "Hogere uitgangsvermogencapaciteit" },
        { en: "Better force control precision", es: "Mejor precisión de control de fuerza", de: "Bessere Kraftsteuerungspräzision", nl: "Betere krachtcontroleprecisie" },
        { en: "Lower initial cost", es: "Menor costo inicial", de: "Niedrigere Anschaffungskosten", nl: "Lagere initiële kosten" }
      ],
      correct: 0,
      explanation: {
        en: "Electric actuators offer cleaner operation without hydraulic fluids, easier installation and maintenance, better integration with electronic control systems, and more precise positioning capabilities.",
        es: "Los actuadores eléctricos ofrecen operación más limpia sin fluidos hidráulicos, instalación y mantenimiento más fáciles, mejor integración con sistemas de control electrónicos y capacidades de posicionamiento más precisas.",
        de: "Elektrische Aktuatoren bieten saubereren Betrieb ohne Hydraulikflüssigkeiten, einfachere Installation und Wartung, bessere Integration mit elektronischen Steuersystemen und präzisere Positionierungsfähigkeiten.",
        nl: "Elektrische actuatoren bieden schonere werking zonder hydraulische vloeistoffen, eenvoudigere installatie en onderhoud, betere integratie met elektronische besturingssystemen en nauwkeurigere positioneringsmogelijkheden."
      }
    },
    {
      question: {
        en: "What is payload in robotics?",
        es: "¿Qué es la carga útil en robótica?",
        de: "Was ist Nutzlast in der Robotik?",
        nl: "Wat is nuttige lading in de robotica?"
      },
      options: [
        { en: "The maximum weight a robot can carry or manipulate", es: "El peso máximo que un robot puede cargar o manipular", de: "Das maximale Gewicht, das ein Roboter tragen oder manipulieren kann", nl: "Het maximale gewicht dat een robot kan dragen of manipuleren" },
        { en: "The robot's own weight", es: "El peso propio del robot", de: "Das Eigengewicht des Roboters", nl: "Het eigengewicht van de robot" },
        { en: "The electrical power consumed by the robot", es: "La potencia eléctrica consumida por el robot", de: "Die vom Roboter verbrauchte elektrische Leistung", nl: "Het elektrische vermogen verbruikt door de robot" },
        { en: "The speed at which the robot can move", es: "La velocidad a la que puede moverse el robot", de: "Die Geschwindigkeit, mit der sich der Roboter bewegen kann", nl: "De snelheid waarmee de robot kan bewegen" }
      ],
      correct: 0,
      explanation: {
        en: "Payload refers to the maximum weight that a robot can carry or manipulate while maintaining its specified performance characteristics. This includes the weight of end-effectors, tools, and workpieces.",
        es: "La carga útil se refiere al peso máximo que un robot puede cargar o manipular mientras mantiene sus características de rendimiento especificadas. Esto incluye el peso de efectores finales, herramientas y piezas de trabajo.",
        de: "Nutzlast bezieht sich auf das maximale Gewicht, das ein Roboter tragen oder manipulieren kann, während er seine spezifizierten Leistungsmerkmale beibehält. Dies umfasst das Gewicht von Endeffektoren, Werkzeugen und Werkstücken.",
        nl: "Nuttige lading verwijst naar het maximale gewicht dat een robot kan dragen of manipuleren terwijl hij zijn gespecificeerde prestatiekenmerken behoudt. Dit omvat het gewicht van eindeffectoren, gereedschappen en werkstukken."
      }
    },
    {
      question: {
        en: "Which coordinate system is commonly used to describe robot positions?",
        es: "¿Qué sistema de coordenadas se usa comúnmente para describir posiciones de robot?",
        de: "Welches Koordinatensystem wird häufig zur Beschreibung von Roboterpositionen verwendet?",
        nl: "Welk coördinatensysteem wordt vaak gebruikt om robotposities te beschrijven?"
      },
      options: [
        { en: "Cartesian coordinate system", es: "Sistema de coordenadas cartesiano", de: "Kartesisches Koordinatensystem", nl: "Cartesiaans coördinatensysteem" },
        { en: "Polar coordinate system only", es: "Solo sistema de coordenadas polares", de: "Nur polares Koordinatensystem", nl: "Alleen polair coördinatensysteem" },
        { en: "Spherical coordinate system only", es: "Solo sistema de coordenadas esféricas", de: "Nur sphärisches Koordinatensystem", nl: "Alleen sferisch coördinatensysteem" },
        { en: "Cylindrical coordinate system only", es: "Solo sistema de coordenadas cilíndricas", de: "Nur zylindrisches Koordinatensystem", nl: "Alleen cilindrisch coördinatensysteem" }
      ],
      correct: 0,
      explanation: {
        en: "The Cartesian coordinate system (X, Y, Z axes) is most commonly used in robotics for describing positions and orientations because it's intuitive and corresponds well to real-world rectangular coordinate systems.",
        es: "El sistema de coordenadas cartesiano (ejes X, Y, Z) es el más comúnmente usado en robótica para describir posiciones y orientaciones porque es intuitivo y corresponde bien con los sistemas de coordenadas rectangulares del mundo real.",
        de: "Das kartesische Koordinatensystem (X-, Y-, Z-Achsen) wird in der Robotik am häufigsten zur Beschreibung von Positionen und Orientierungen verwendet, da es intuitiv ist und gut mit realen rechteckigen Koordinatensystemen korrespondiert.",
        nl: "Het Cartesiaanse coördinatensysteem (X, Y, Z assen) wordt het meest gebruikt in de robotica voor het beschrijven van posities en oriëntaties omdat het intuïtief is en goed overeenkomt met echte rechthoekige coördinatensystemen."
      }
    },
    {
      question: {
        en: "What is the main advantage of stepper motors in robotics applications?",
        es: "¿Cuál es la principal ventaja de los motores paso a paso en aplicaciones robóticas?",
        de: "Was ist der Hauptvorteil von Schrittmotoren in Roboteranwendungen?",
        nl: "Wat is het hoofdvoordeel van stappenmotoren in robotische toepassingen?"
      },
      options: [
        { en: "Precise positioning without feedback", es: "Posicionamiento preciso sin retroalimentación", de: "Präzise Positionierung ohne Rückkopplung", nl: "Nauwkeurige positionering zonder feedback" },
        { en: "Highest speed operation", es: "Operación de mayor velocidad", de: "Höchstgeschwindigkeitsbetrieb", nl: "Hoogste snelheidswerking" },
        { en: "Lowest power consumption", es: "Menor consumo de energía", de: "Niedrigster Energieverbrauch", nl: "Laagste energieverbruik" },
        { en: "Simplest mechanical design", es: "Diseño mecánico más simple", de: "Einfachstes mechanisches Design", nl: "Eenvoudigste mechanische ontwerp" }
      ],
      correct: 0,
      explanation: {
        en: "Stepper motors can achieve precise positioning by moving in discrete steps without requiring position feedback sensors, making them ideal for applications requiring accurate positioning at moderate speeds.",
        es: "Los motores paso a paso pueden lograr posicionamiento preciso moviéndose en pasos discretos sin requerir sensores de retroalimentación de posición, haciéndolos ideales para aplicaciones que requieren posicionamiento preciso a velocidades moderadas.",
        de: "Schrittmotoren können präzise Positionierung durch Bewegung in diskreten Schritten ohne Positionsfeedback-Sensoren erreichen, wodurch sie ideal für Anwendungen sind, die genaue Positionierung bei moderaten Geschwindigkeiten erfordern.",
        nl: "Stappenmotoren kunnen nauwkeurige positionering bereiken door in discrete stappen te bewegen zonder positiefeedback sensoren te vereisen, waardoor ze ideaal zijn voor toepassingen die nauwkeurige positionering bij matige snelheden vereisen."
      }
    },
    {
      question: {
        en: "What is backlash in robotic joints?",
        es: "¿Qué es el juego mecánico en las articulaciones robóticas?",
        de: "Was ist Spiel in Robotergelenken?",
        nl: "Wat is speling in robotgewrichten?"
      },
      options: [
        { en: "Unwanted play or gap between mating gear teeth", es: "Juego o espacio no deseado entre dientes de engranajes acoplados", de: "Unerwünschtes Spiel oder Lücke zwischen eingreifenden Zahnradzähnen", nl: "Ongewenste speling of ruimte tussen ingrijpende tandwieltanden" },
        { en: "The reaction force from robot movement", es: "La fuerza de reacción del movimiento del robot", de: "Die Reaktionskraft von Roboterbewegung", nl: "De reactiekracht van robotbeweging" },
        { en: "The maximum speed of joint rotation", es: "La velocidad máxima de rotación de articulación", de: "Die maximale Geschwindigkeit der Gelenkrotation", nl: "De maximale snelheid van gewrichtrotatie" },
        { en: "The heating effect in motor windings", es: "El efecto de calentamiento en devanados del motor", de: "Der Erhitzungseffekt in Motorwicklungen", nl: "Het verhittingseffect in motorwikkelingen" }
      ],
      correct: 0,
      explanation: {
        en: "Backlash is the unwanted clearance between mating gear teeth that causes positioning inaccuracy and can lead to vibration and reduced precision in robotic systems.",
        es: "El juego mecánico es la holgura no deseada entre dientes de engranajes acoplados que causa imprecisión en el posicionamiento y puede llevar a vibración y precisión reducida en sistemas robóticos.",
        de: "Spiel ist das unerwünschte Spiel zwischen eingreifenden Zahnradzähnen, das Positionierungsungenauigkeit verursacht und zu Vibration und reduzierter Präzision in Robotersystemen führen kann.",
        nl: "Speling is de ongewenste ruimte tussen ingrijpende tandwieltanden die positioneringsongenauwkheid veroorzaakt en kan leiden tot trillingen en verminderde precisie in robotsystemen."
      }
    },
    {
      question: {
        en: "Which type of transmission is commonly used to increase torque in robot joints?",
        es: "¿Qué tipo de transmisión se usa comúnmente para aumentar el torque en articulaciones robóticas?",
        de: "Welcher Übertragungstyp wird häufig zur Drehmomenterhöhung in Robotergelenken verwendet?",
        nl: "Welk type transmissie wordt vaak gebruikt om koppel te verhogen in robotgewrichten?"
      },
      options: [
        { en: "Gear reduction system", es: "Sistema de reducción de engranajes", de: "Getriebereduktionssystem", nl: "Tandwielreductiesysteem" },
        { en: "Direct drive system", es: "Sistema de accionamiento directo", de: "Direktantriebssystem", nl: "Direct aandrijfsysteem" },
        { en: "Magnetic coupling", es: "Acoplamiento magnético", de: "Magnetische Kopplung", nl: "Magnetische koppeling" },
        { en: "Friction drive", es: "Transmisión por fricción", de: "Reibungsantrieb", nl: "Wrijvingsaandrijving" }
      ],
      correct: 0,
      explanation: {
        en: "Gear reduction systems multiply the motor torque while reducing speed, allowing smaller motors to provide the high torque needed for robot joint movement and load handling.",
        es: "Los sistemas de reducción de engranajes multiplican el torque del motor mientras reducen la velocidad, permitiendo que motores más pequeños proporcionen el alto torque necesario para el movimiento de articulaciones robóticas y manejo de cargas.",
        de: "Getriebereduktionssysteme multiplizieren das Motordrehmoment bei gleichzeitiger Geschwindigkeitsreduzierung, wodurch kleinere Motoren das hohe Drehmoment für Robotergelenkbewegung und Lasthandhabung bereitstellen können.",
        nl: "Tandwielreductiesystemen vermenigvuldigen het motorkoppel terwijl ze de snelheid verminderen, waardoor kleinere motoren het hoge koppel kunnen leveren dat nodig is voor robotgewrichtbeweging en lastbehandeling."
      }
    },
    {
      question: {
        en: "What is the purpose of encoders in robotic systems?",
        es: "¿Cuál es el propósito de los encoders en sistemas robóticos?",
        de: "Was ist der Zweck von Encodern in Robotersystemen?",
        nl: "Wat is het doel van encoders in robotsystemen?"
      },
      options: [
        { en: "To measure position and speed of rotating shafts", es: "Medir posición y velocidad de ejes rotatorios", de: "Position und Geschwindigkeit rotierender Wellen zu messen", nl: "Positie en snelheid van roterende assen meten" },
        { en: "To convert analog signals to digital", es: "Convertir señales analógicas a digitales", de: "Analoge Signale in digitale umwandeln", nl: "Analoge signalen naar digitaal omzetten" },
        { en: "To amplify motor control signals", es: "Amplificar señales de control del motor", de: "Motorsteuersignale verstärken", nl: "Motorcontrolesignalen versterken" },
        { en: "To protect motors from overcurrent", es: "Proteger motores de sobrecorriente", de: "Motoren vor Überstrom schützen", nl: "Motoren beschermen tegen overstroom" }
      ],
      correct: 0,
      explanation: {
        en: "Encoders provide precise feedback about the position, speed, and direction of rotating shafts, enabling accurate control of robot joint movements and closed-loop positioning systems.",
        es: "Los encoders proporcionan retroalimentación precisa sobre la posición, velocidad y dirección de ejes rotatorios, permitiendo control preciso de movimientos de articulaciones robóticas y sistemas de posicionamiento de bucle cerrado.",
        de: "Encoder liefern präzise Rückmeldung über Position, Geschwindigkeit und Richtung rotierender Wellen und ermöglichen genaue Kontrolle von Robotergelenkbewegungen und geschlossenen Positionierungssystemen.",
        nl: "Encoders bieden nauwkeurige feedback over de positie, snelheid en richting van roterende assen, waardoor nauwkeurige controle van robotgewrichtbewegingen en gesloten-lus positioneringssystemen mogelijk wordt."
      }
    },
    {
      question: {
        en: "What is compliance in robotics?",
        es: "¿Qué es la compliance en robótica?",
        de: "Was ist Compliance in der Robotik?",
        nl: "Wat is compliance in de robotica?"
      },
      options: [
        { en: "The ability to yield or deform under force", es: "La capacidad de ceder o deformarse bajo fuerza", de: "Die Fähigkeit unter Kraft nachzugeben oder sich zu verformen", nl: "Het vermogen om onder kracht mee te geven of te vervormen" },
        { en: "Following safety regulations", es: "Seguir regulaciones de seguridad", de: "Sicherheitsvorschriften befolgen", nl: "Veiligheidsregels volgen" },
        { en: "Maximum robot payload capacity", es: "Capacidad máxima de carga útil del robot", de: "Maximale Roboter-Nutzlastkapazität", nl: "Maximale robotnuttige last capaciteit" },
        { en: "Programming language compatibility", es: "Compatibilidad de lenguajes de programación", de: "Programmiersprachenkompatibilität", nl: "Programmeertaalcompatibiliteit" }
      ],
      correct: 0,
      explanation: {
        en: "Compliance refers to a robot's ability to yield or give way when encountering external forces, which is important for safe interaction with humans and handling of delicate objects.",
        es: "La compliance se refiere a la capacidad de un robot para ceder o dar paso cuando encuentra fuerzas externas, lo cual es importante para la interacción segura con humanos y el manejo de objetos delicados.",
        de: "Compliance bezieht sich auf die Fähigkeit eines Roboters nachzugeben oder auszuweichen, wenn er auf externe Kräfte trifft, was für sichere Interaktion mit Menschen und Handhabung empfindlicher Objekte wichtig ist.",
        nl: "Compliance verwijst naar het vermogen van een robot om mee te geven of uit de weg te gaan bij het tegenkomen van externe krachten, wat belangrijk is voor veilige interactie met mensen en het hanteren van delicate objecten."
      }
    },
    {
      question: {
        en: "What is the difference between accuracy and repeatability in robotics?",
        es: "¿Cuál es la diferencia entre precisión y repetibilidad en robótica?",
        de: "Was ist der Unterschied zwischen Genauigkeit und Wiederholbarkeit in der Robotik?",
        nl: "Wat is het verschil tussen nauwkeurigheid en herhaalbaarheid in de robotica?"
      },
      options: [
        { en: "Accuracy is closeness to target, repeatability is consistency of repeated movements", es: "La precisión es cercanía al objetivo, la repetibilidad es consistencia de movimientos repetidos", de: "Genauigkeit ist Nähe zum Ziel, Wiederholbarkeit ist Konsistenz wiederholter Bewegungen", nl: "Nauwkeurigheid is nabijheid tot doel, herhaalbaarheid is consistentie van herhaalde bewegingen" },
        { en: "Accuracy requires sensors, repeatability does not", es: "La precisión requiere sensores, la repetibilidad no", de: "Genauigkeit benötigt Sensoren, Wiederholbarkeit nicht", nl: "Nauwkeurigheid vereist sensoren, herhaalbaarheid niet" },
        { en: "Accuracy is for position, repeatability is for speed", es: "La precisión es para posición, la repetibilidad es para velocidad", de: "Genauigkeit ist für Position, Wiederholbarkeit für Geschwindigkeit", nl: "Nauwkeurigheid is voor positie, herhaalbaarheid is voor snelheid" },
        { en: "They are identical concepts", es: "Son conceptos idénticos", de: "Sie sind identische Konzepte", nl: "Ze zijn identieke concepten" }
      ],
      correct: 0,
      explanation: {
        en: "Accuracy measures how close the robot gets to the intended target position, while repeatability measures how consistently the robot returns to the same position when commanded repeatedly.",
        es: "La precisión mide qué tan cerca llega el robot a la posición objetivo deseada, mientras la repetibilidad mide qué tan consistentemente el robot regresa a la misma posición cuando se le ordena repetidamente.",
        de: "Genauigkeit misst, wie nahe der Roboter der beabsichtigten Zielposition kommt, während Wiederholbarkeit misst, wie konsistent der Roboter zur selben Position zurückkehrt, wenn wiederholt befohlen.",
        nl: "Nauwkeurigheid meet hoe dicht de robot bij de beoogde doelpositie komt, terwijl herhaalbaarheid meet hoe consistent de robot terugkeert naar dezelfde positie wanneer herhaaldelijk bevolen."
      }
    },
    {
      question: {
        en: "Which type of robot joint allows linear motion?",
        es: "¿Qué tipo de articulación robótica permite movimiento lineal?",
        de: "Welcher Robotergelenktyp ermöglicht lineare Bewegung?",
        nl: "Welk type robotgewricht staat lineaire beweging toe?"
      },
      options: [
        { en: "Prismatic joint", es: "Articulación prismática", de: "Prismatisches Gelenk", nl: "Prismatisch gewricht" },
        { en: "Revolute joint", es: "Articulación de revolución", de: "Drehgelenk", nl: "Draaigewricht" },
        { en: "Spherical joint", es: "Articulación esférica", de: "Kugelgelenk", nl: "Kogelgewricht" },
        { en: "Cylindrical joint", es: "Articulación cilíndrica", de: "Zylindrisches Gelenk", nl: "Cilindrisch gewricht" }
      ],
      correct: 0,
      explanation: {
        en: "A prismatic joint allows sliding motion along a straight line, providing linear translation between connected links. This is commonly used in linear actuators and telescopic mechanisms.",
        es: "Una articulación prismática permite movimiento deslizante a lo largo de una línea recta, proporcionando traslación lineal entre enlaces conectados. Esto se usa comúnmente en actuadores lineales y mecanismos telescópicos.",
        de: "Ein prismatisches Gelenk ermöglicht Gleitbewegung entlang einer geraden Linie und bietet lineare Translation zwischen verbundenen Gliedern. Dies wird häufig in Linearaktuatoren und Teleskopmechanismen verwendet.",
        nl: "Een prismatisch gewricht staat glijdende beweging langs een rechte lijn toe, wat lineaire translatie tussen verbonden schakels biedt. Dit wordt vaak gebruikt in lineaire actuatoren en telescopische mechanismen."
      }
    },
    {
      question: {
        en: "What is the primary function of a robot's teach pendant?",
        es: "¿Cuál es la función principal del teach pendant de un robot?",
        de: "Was ist die Hauptfunktion eines Roboter-Programmierhandgeräts?",
        nl: "Wat is de primaire functie van de teach pendant van een robot?"
      },
      options: [
        { en: "Manual robot programming and position teaching", es: "Programación manual del robot y enseñanza de posiciones", de: "Manuelle Roboterprogrammierung und Positionslehre", nl: "Handmatige robotprogrammering en positieonderwijs" },
        { en: "Power supply control", es: "Control de fuente de alimentación", de: "Stromversorgungssteuerung", nl: "Voedingscontrole" },
        { en: "Network communication", es: "Comunicación de red", de: "Netzwerkkommunikation", nl: "Netwerkcommunicatie" },
        { en: "Motor temperature monitoring", es: "Monitoreo de temperatura del motor", de: "Motortemperaturüberwachung", nl: "Motortemperatuurmonitoring" }
      ],
      correct: 0,
      explanation: {
        en: "A teach pendant is a handheld device used by operators to manually move the robot, teach positions, and write programs directly while observing the robot's movements in real-time.",
        es: "Un teach pendant es un dispositivo portátil usado por operadores para mover manualmente el robot, enseñar posiciones y escribir programas directamente mientras observan los movimientos del robot en tiempo real.",
        de: "Ein Programmierhandgerät ist ein tragbares Gerät, das von Bedienern verwendet wird, um den Roboter manuell zu bewegen, Positionen zu lehren und Programme direkt zu schreiben, während sie die Roboterbewegungen in Echtzeit beobachten.",
        nl: "Een teach pendant is een handheld apparaat gebruikt door operators om de robot handmatig te bewegen, posities te leren en programma's direct te schrijven terwijl ze de robotbewegingen in realtime observeren."
      }
    },
    {
      question: {
        en: "What is the singularity condition in robot kinematics?",
        es: "¿Qué es la condición de singularidad en cinemática robótica?",
        de: "Was ist die Singularitätsbedingung in der Roboterkinematik?",
        nl: "Wat is de singulariteitsconditie in robotkinematica?"
      },
      options: [
        { en: "Configuration where the robot loses a degree of freedom", es: "Configuración donde el robot pierde un grado de libertad", de: "Konfiguration, wo der Roboter einen Freiheitsgrad verliert", nl: "Configuratie waarbij de robot een vrijheidsgraad verliest" },
        { en: "Maximum speed operation mode", es: "Modo de operación de velocidad máxima", de: "Maximaler Geschwindigkeitsbetriebsmodus", nl: "Maximale snelheidsoperatiemodus" },
        { en: "Optimal energy efficiency point", es: "Punto de eficiencia energética óptima", de: "Optimaler Energieeffizienzpunkt", nl: "Optimaal energie-efficiëntie punt" },
        { en: "Single joint control mode", es: "Modo de control de articulación única", de: "Einzelgelenk-Steuerungsmodus", nl: "Enkele gewricht controlemodus" }
      ],
      correct: 0,
      explanation: {
        en: "A singularity occurs when the robot's joints are aligned in such a way that it loses one or more degrees of freedom, making certain motions impossible or requiring infinite joint velocities.",
        es: "Una singularidad ocurre cuando las articulaciones del robot están alineadas de tal manera que pierde uno o más grados de libertad, haciendo imposibles ciertos movimientos o requiriendo velocidades infinitas de articulación.",
        de: "Eine Singularität tritt auf, wenn die Robotergelenke so ausgerichtet sind, dass der Roboter einen oder mehrere Freiheitsgrade verliert, wodurch bestimmte Bewegungen unmöglich werden oder unendliche Gelenkgeschwindigkeiten erfordern.",
        nl: "Een singulariteit treedt op wanneer de robotgewrichten zodanig uitgelijnd zijn dat het een of meer vrijheidsgraden verliest, waardoor bepaalde bewegingen onmogelijk worden of oneindige gewrichtsnelheden vereisen."
      }
    },
    {
      question: {
        en: "What type of sensor is commonly used for force feedback in robotic grippers?",
        es: "¿Qué tipo de sensor se usa comúnmente para retroalimentación de fuerza en pinzas robóticas?",
        de: "Welcher Sensortyp wird häufig für Kraftrückmeldung in Robotergreifern verwendet?",
        nl: "Welk type sensor wordt vaak gebruikt voor krachtfeedback in robotgrijpers?"
      },
      options: [
        { en: "Strain gauge force sensor", es: "Sensor de fuerza de galga extensiométrica", de: "Dehnungsmessstreifen-Kraftsensor", nl: "Strain gauge krachtsensor" },
        { en: "Ultrasonic distance sensor", es: "Sensor de distancia ultrasónico", de: "Ultraschall-Entfernungssensor", nl: "Ultrasonische afstandssensor" },
        { en: "Color vision sensor", es: "Sensor de visión de color", de: "Farbsichtsensor", nl: "Kleur visie sensor" },
        { en: "Temperature sensor", es: "Sensor de temperatura", de: "Temperatursensor", nl: "Temperatuursensor" }
      ],
      correct: 0,
      explanation: {
        en: "Strain gauge force sensors measure the deformation caused by applied forces, providing precise force feedback that enables gentle grasping and controlled manipulation of objects.",
        es: "Los sensores de fuerza de galga extensiométrica miden la deformación causada por fuerzas aplicadas, proporcionando retroalimentación precisa de fuerza que permite agarre suave y manipulación controlada de objetos.",
        de: "Dehnungsmessstreifen-Kraftsensoren messen die durch angewandte Kräfte verursachte Verformung und liefern präzise Kraftrückmeldung, die sanftes Greifen und kontrollierte Objektmanipulation ermöglicht.",
        nl: "Strain gauge krachtsensoren meten de vervorming veroorzaakt door uitgeoefende krachten, wat nauwkeurige krachtfeedback biedt die zacht grijpen en gecontroleerde objectmanipulatie mogelijk maakt."
      }
    },
    {
      question: {
        en: "What is the main difference between AC and DC servo motors?",
        es: "¿Cuál es la principal diferencia entre motores servo AC y DC?",
        de: "Was ist der Hauptunterschied zwischen AC- und DC-Servomotoren?",
        nl: "Wat is het hoofdverschil tussen AC en DC servomotoren?"
      },
      options: [
        { en: "AC motors have better speed regulation and less maintenance", es: "Los motores AC tienen mejor regulación de velocidad y menos mantenimiento", de: "AC-Motoren haben bessere Drehzahlregelung und weniger Wartung", nl: "AC motoren hebben betere snelheidsregeling en minder onderhoud" },
        { en: "DC motors are always more powerful", es: "Los motores DC siempre son más potentes", de: "DC-Motoren sind immer leistungsstärker", nl: "DC motoren zijn altijd krachtiger" },
        { en: "AC motors require more complex controllers", es: "Los motores AC requieren controladores más complejos", de: "AC-Motoren benötigen komplexere Steuerungen", nl: "AC motoren vereisen complexere controllers" },
        { en: "DC motors have higher efficiency", es: "Los motores DC tienen mayor eficiencia", de: "DC-Motoren haben höhere Effizienz", nl: "DC motoren hebben hogere efficiëntie" }
      ],
      correct: 0,
      explanation: {
        en: "AC servo motors typically offer better speed regulation, longer life due to brushless design, and require less maintenance compared to brushed DC servo motors, though they need more sophisticated control electronics.",
        es: "Los motores servo AC típicamente ofrecen mejor regulación de velocidad, vida más larga debido al diseño sin escobillas y requieren menos mantenimiento comparado con motores servo DC con escobillas, aunque necesitan electrónicos de control más sofisticados.",
        de: "AC-Servomotoren bieten typischerweise bessere Drehzahlregelung, längere Lebensdauer durch bürstenloses Design und benötigen weniger Wartung im Vergleich zu gebürsteten DC-Servomotoren, obwohl sie anspruchsvollere Steuerelektronik benötigen.",
        nl: "AC servomotoren bieden typisch betere snelheidsregeling, langere levensduur door borstelloze ontwerp en vereisen minder onderhoud vergeleken met geborstelde DC servomotoren, hoewel ze meer geavanceerde besturingselektronica nodig hebben."
      }
    },
    {
      question: {
        en: "What is impedance control in robotics?",
        es: "¿Qué es el control de impedancia en robótica?",
        de: "Was ist Impedanzregelung in der Robotik?",
        nl: "Wat is impedantiecontrole in de robotica?"
      },
      options: [
        { en: "Controlling the dynamic relationship between force and motion", es: "Controlar la relación dinámica entre fuerza y movimiento", de: "Steuerung der dynamischen Beziehung zwischen Kraft und Bewegung", nl: "Het controleren van de dynamische relatie tussen kracht en beweging" },
        { en: "Measuring electrical resistance in motors", es: "Medir resistencia eléctrica en motores", de: "Elektrischen Widerstand in Motoren messen", nl: "Elektrische weerstand in motoren meten" },
        { en: "Preventing signal interference", es: "Prevenir interferencia de señales", de: "Signalstörungen verhindern", nl: "Signaalinterferentie voorkomen" },
        { en: "Controlling robot joint stiffness only", es: "Controlar solo la rigidez de articulaciones del robot", de: "Nur Robotergelenksteifigkeit steuern", nl: "Alleen robotgewrichtsstijfheid controleren" }
      ],
      correct: 0,
      explanation: {
        en: "Impedance control manages the dynamic relationship between force and motion, allowing robots to interact safely with their environment by adjusting compliance based on task requirements.",
        es: "El control de impedancia gestiona la relación dinámica entre fuerza y movimiento, permitiendo que los robots interactúen de manera segura con su entorno ajustando la compliance basada en los requisitos de la tarea.",
        de: "Impedanzregelung verwaltet die dynamische Beziehung zwischen Kraft und Bewegung und ermöglicht Robotern sichere Interaktion mit ihrer Umgebung durch Anpassung der Compliance basierend auf Aufgabenanforderungen.",
        nl: "Impedantiecontrole beheert de dynamische relatie tussen kracht en beweging, waardoor robots veilig kunnen interacteren met hun omgeving door compliance aan te passen gebaseerd op taakvereisten."
      }
    },
    {
      question: {
        en: "What is the purpose of limit switches in robotic systems?",
        es: "¿Cuál es el propósito de los interruptores de límite en sistemas robóticos?",
        de: "Was ist der Zweck von Endschaltern in Robotersystemen?",
        nl: "Wat is het doel van eindschakelaars in robotsystemen?"
      },
      options: [
        { en: "To define safe travel boundaries and prevent mechanical damage", es: "Definir límites de viaje seguros y prevenir daños mecánicos", de: "Sichere Fahrgrenzen definieren und mechanische Schäden verhindern", nl: "Veilige reisgrenze definiëren en mechanische schade voorkomen" },
        { en: "To measure joint velocities", es: "Medir velocidades de articulaciones", de: "Gelenkgeschwindigkeiten messen", nl: "Gewrichtsnelheden meten" },
        { en: "To control motor temperature", es: "Controlar temperatura del motor", de: "Motortemperatur steuern", nl: "Motortemperatuur controleren" },
        { en: "To amplify control signals", es: "Amplificar señales de control", de: "Steuersignale verstärken", nl: "Controlesignalen versterken" }
      ],
      correct: 0,
      explanation: {
        en: "Limit switches define the safe operating boundaries for robot joints, automatically stopping motion when limits are reached to prevent mechanical damage and ensure operator safety.",
        es: "Los interruptores de límite definen los límites operativos seguros para las articulaciones del robot, deteniendo automáticamente el movimiento cuando se alcanzan los límites para prevenir daños mecánicos y asegurar la seguridad del operador.",
        de: "Endschalter definieren die sicheren Betriebsgrenzen für Robotergelenke und stoppen automatisch die Bewegung bei Erreichen der Grenzen, um mechanische Schäden zu verhindern und Bedienersicherheit zu gewährleisten.",
        nl: "Eindschakelaars definiëren de veilige operationele grenzen voor robotgewrichten, waarbij beweging automatisch wordt gestopt wanneer limieten worden bereikt om mechanische schade te voorkomen en operatorveiligheid te waarborgen."
      }
    },
    {
      question: {
        en: "What is the difference between absolute and incremental encoders?",
        es: "¿Cuál es la diferencia entre encoders absolutos e incrementales?",
        de: "Was ist der Unterschied zwischen absoluten und inkrementellen Encodern?",
        nl: "Wat is het verschil tussen absolute en incrementele encoders?"
      },
      options: [
        { en: "Absolute encoders provide position directly, incremental count pulses", es: "Los encoders absolutos proporcionan posición directamente, los incrementales cuentan pulsos", de: "Absolute Encoder geben Position direkt an, inkrementelle zählen Impulse", nl: "Absolute encoders geven positie direct, incrementele tellen pulsen" },
        { en: "Absolute encoders are more accurate than incremental", es: "Los encoders absolutos son más precisos que los incrementales", de: "Absolute Encoder sind genauer als inkrementelle", nl: "Absolute encoders zijn nauwkeuriger dan incrementele" },
        { en: "Incremental encoders work only with AC motors", es: "Los encoders incrementales funcionan solo con motores AC", de: "Inkrementelle Encoder funktionieren nur mit AC-Motoren", nl: "Incrementele encoders werken alleen met AC motoren" },
        { en: "Absolute encoders require external power, incremental do not", es: "Los encoders absolutos requieren energía externa, los incrementales no", de: "Absolute Encoder benötigen externe Spannung, inkrementelle nicht", nl: "Absolute encoders vereisen externe voeding, incrementele niet" }
      ],
      correct: 0,
      explanation: {
        en: "Absolute encoders provide the actual position value directly upon power-up, while incremental encoders count pulses from a reference position and can lose position information during power loss.",
        es: "Los encoders absolutos proporcionan el valor de posición real directamente al encenderse, mientras los encoders incrementales cuentan pulsos desde una posición de referencia y pueden perder información de posición durante pérdida de energía.",
        de: "Absolute Encoder liefern den tatsächlichen Positionswert direkt beim Einschalten, während inkrementelle Encoder Impulse von einer Referenzposition zählen und bei Stromausfall Positionsinformationen verlieren können.",
        nl: "Absolute encoders leveren de werkelijke positiewaarde direct bij inschakeling, terwijl incrementele encoders pulsen tellen vanaf een referentiepositie en positie-informatie kunnen verliezen tijdens stroomuitval."
      }
    },
    {
      question: {
        en: "What is the primary advantage of harmonic drives in robotics?",
        es: "¿Cuál es la principal ventaja de las transmisiones harmónicas en robótica?",
        de: "Was ist der Hauptvorteil von Harmonic Drives in der Robotik?",
        nl: "Wat is het hoofdvoordeel van harmonische aandrijvingen in de robotica?"
      },
      options: [
        { en: "High reduction ratio with zero backlash", es: "Alta relación de reducción con cero juego mecánico", de: "Hohe Reduktion mit null Spiel", nl: "Hoge reductie verhouding met nul speling" },
        { en: "Lowest cost transmission option", es: "Opción de transmisión de menor costo", de: "Kostengünstigste Übertragungsoption", nl: "Goedkoopste transmissie optie" },
        { en: "Highest speed capability", es: "Mayor capacidad de velocidad", de: "Höchste Geschwindigkeitsfähigkeit", nl: "Hoogste snelheidscapaciteit" },
        { en: "Simplest maintenance requirements", es: "Requisitos de mantenimiento más simples", de: "Einfachste Wartungsanforderungen", nl: "Eenvoudigste onderhoudsvereisten" }
      ],
      correct: 0,
      explanation: {
        en: "Harmonic drives provide very high reduction ratios (up to 320:1) with virtually zero backlash, making them ideal for precise robotic applications requiring accurate positioning.",
        es: "Las transmisiones harmónicas proporcionan relaciones de reducción muy altas (hasta 320:1) con virtualmente cero juego mecánico, haciéndolas ideales para aplicaciones robóticas precisas que requieren posicionamiento preciso.",
        de: "Harmonic Drives bieten sehr hohe Reduktionsverhältnisse (bis 320:1) mit praktisch null Spiel, wodurch sie ideal für präzise Roboteranwendungen sind, die genaue Positionierung erfordern.",
        nl: "Harmonische aandrijvingen bieden zeer hoge reductieverhoudingen (tot 320:1) met praktisch nul speling, waardoor ze ideaal zijn voor nauwkeurige robotische toepassingen die accurate positionering vereisen."
      }
    },
    {
      question: {
        en: "What is the main purpose of a robot's base frame?",
        es: "¿Cuál es el propósito principal del marco base de un robot?",
        de: "Was ist der Hauptzweck des Roboter-Grundrahmens?",
        nl: "Wat is het hoofddoel van het basisframe van een robot?"
      },
      options: [
        { en: "To provide stable mounting and reference coordinate system", es: "Proporcionar montaje estable y sistema de coordenadas de referencia", de: "Stabile Montage und Referenzkoordinatensystem bereitstellen", nl: "Stabiele montage en referentie coördinatensysteem bieden" },
        { en: "To house the main controller electronics", es: "Albergar la electrónica del controlador principal", de: "Die Hauptsteuerungselektronik unterbringen", nl: "De hoofdcontroller elektronica huisvesten" },
        { en: "To store robot programs and data", es: "Almacenar programas y datos del robot", de: "Roboterprogramme und Daten speichern", nl: "Robotprogramma's en data opslaan" },
        { en: "To distribute electrical power", es: "Distribuir energía eléctrica", de: "Elektrische Energie verteilen", nl: "Elektrische energie distribueren" }
      ],
      correct: 0,
      explanation: {
        en: "The base frame provides a stable mounting platform for the robot and establishes the reference coordinate system from which all positions and movements are measured and calculated.",
        es: "El marco base proporciona una plataforma de montaje estable para el robot y establece el sistema de coordenadas de referencia desde el cual todas las posiciones y movimientos se miden y calculan.",
        de: "Der Grundrahmen bietet eine stabile Montageplattform für den Roboter und etabliert das Referenzkoordinatensystem, von dem aus alle Positionen und Bewegungen gemessen und berechnet werden.",
        nl: "Het basisframe biedt een stabiel montageplatform voor de robot en vestigt het referentie coördinatensysteem vanwaar alle posities en bewegingen worden gemeten en berekend."
      }
    },
    {
      question: {
        en: "What is joint space in robotics?",
        es: "¿Qué es el espacio de articulaciones en robótica?",
        de: "Was ist Gelenkraum in der Robotik?",
        nl: "Wat is gewrichtruimte in de robotica?"
      },
      options: [
        { en: "The space defined by all possible joint angle combinations", es: "El espacio definido por todas las combinaciones posibles de ángulos de articulación", de: "Der durch alle möglichen Gelenkwinkelkombinationen definierte Raum", nl: "De ruimte gedefinieerd door alle mogelijke gewrichthoek combinaties" },
        { en: "The physical space between robot joints", es: "El espacio físico entre articulaciones del robot", de: "Der physische Raum zwischen Robotergelenken", nl: "De fysieke ruimte tussen robotgewrichten" },
        { en: "The workspace volume of the robot", es: "El volumen del espacio de trabajo del robot", de: "Das Arbeitsbereichsvolumen des Roboters", nl: "Het werkruimtevolume van de robot" },
        { en: "The clearance needed around the robot", es: "La distancia libre necesaria alrededor del robot", de: "Der um den Roboter benötigte Freiraum", nl: "De vrije ruimte nodig rond de robot" }
      ],
      correct: 0,
      explanation: {
        en: "Joint space refers to the coordinate space defined by the robot's joint variables (angles or displacements), representing all possible configurations of the robot's joints.",
        es: "El espacio de articulaciones se refiere al espacio de coordenadas definido por las variables de articulación del robot (ángulos o desplazamientos), representando todas las configuraciones posibles de las articulaciones del robot.",
        de: "Gelenkraum bezieht sich auf den durch die Gelenkvariablen des Roboters (Winkel oder Verschiebungen) definierten Koordinatenraum, der alle möglichen Konfigurationen der Robotergelenke repräsentiert.",
        nl: "Gewrichtruimte verwijst naar de coördinaatruimte gedefinieerd door de robotgewrichtvariabelen (hoeken of verplaatsingen), wat alle mogelijke configuraties van de robotgewrichten vertegenwoordigt."
      }
    },
    {
      question: {
        en: "What is the purpose of a robot's emergency stop system?",
        es: "¿Cuál es el propósito del sistema de paro de emergencia de un robot?",
        de: "Was ist der Zweck des Not-Aus-Systems eines Roboters?",
        nl: "Wat is het doel van het noodstopsysteem van een robot?"
      },
      options: [
        { en: "To immediately halt all robot motion in dangerous situations", es: "Detener inmediatamente todo movimiento del robot en situaciones peligrosas", de: "Alle Roboterbewegungen in gefährlichen Situationen sofort stoppen", nl: "Alle robotbeweging onmiddellijk stoppen in gevaarlijke situaties" },
        { en: "To optimize robot performance", es: "Optimizar el rendimiento del robot", de: "Roboterleistung optimieren", nl: "Robotprestatie optimaliseren" },
        { en: "To save robot programs", es: "Guardar programas del robot", de: "Roboterprogramme speichern", nl: "Robotprogramma's opslaan" },
        { en: "To restart the robot automatically", es: "Reiniciar el robot automáticamente", de: "Den Roboter automatisch neu starten", nl: "De robot automatisch herstarten" }
      ],
      correct: 0,
      explanation: {
        en: "The emergency stop system is a critical safety feature that immediately halts all robot motion when activated, protecting personnel and equipment from harm in emergency situations.",
        es: "El sistema de paro de emergencia es una característica de seguridad crítica que detiene inmediatamente todo movimiento del robot cuando se activa, protegiendo al personal y equipo de daños en situaciones de emergencia.",
        de: "Das Not-Aus-System ist eine kritische Sicherheitsfunktion, die bei Aktivierung sofort alle Roboterbewegungen stoppt und Personal sowie Ausrüstung vor Schäden in Notfällen schützt.",
        nl: "Het noodstopsysteem is een kritieke veiligheidsfunctie die alle robotbeweging onmiddellijk stopt wanneer geactiveerd, wat personeel en apparatuur beschermt tegen schade in noodsituaties."
      }
    },
    {
      question: {
        en: "What is the difference between position control and velocity control?",
        es: "¿Cuál es la diferencia entre control de posición y control de velocidad?",
        de: "Was ist der Unterschied zwischen Positions- und Geschwindigkeitsregelung?",
        nl: "Wat is het verschil tussen positiecontrole en snelheidscontrole?"
      },
      options: [
        { en: "Position control regulates final position, velocity control regulates speed", es: "El control de posición regula posición final, el control de velocidad regula velocidad", de: "Positionsregelung regelt Endposition, Geschwindigkeitsregelung regelt Geschwindigkeit", nl: "Positiecontrole reguleert eindpositie, snelheidscontrole reguleert snelheid" },
        { en: "Position control is for AC motors, velocity control for DC motors", es: "El control de posición es para motores AC, control de velocidad para motores DC", de: "Positionsregelung für AC-Motoren, Geschwindigkeitsregelung für DC-Motoren", nl: "Positiecontrole is voor AC motoren, snelheidscontrole voor DC motoren" },
        { en: "Position control requires encoders, velocity control does not", es: "El control de posición requiere encoders, el control de velocidad no", de: "Positionsregelung benötigt Encoder, Geschwindigkeitsregelung nicht", nl: "Positiecontrole vereist encoders, snelheidscontrole niet" },
        { en: "They are identical control methods", es: "Son métodos de control idénticos", de: "Sie sind identische Steuerungsmethoden", nl: "Ze zijn identieke controlemethoden" }
      ],
      correct: 0,
      explanation: {
        en: "Position control focuses on achieving and maintaining a specific position, while velocity control focuses on maintaining a desired speed regardless of position.",
        es: "El control de posición se enfoca en lograr y mantener una posición específica, mientras el control de velocidad se enfoca en mantener una velocidad deseada independientemente de la posición.",
        de: "Positionsregelung konzentriert sich auf das Erreichen und Halten einer spezifischen Position, während Geschwindigkeitsregelung sich auf das Halten einer gewünschten Geschwindigkeit unabhängig von der Position konzentriert.",
        nl: "Positiecontrole richt zich op het bereiken en handhaven van een specifieke positie, terwijl snelheidscontrole zich richt op het handhaven van een gewenste snelheid ongeacht positie."
      }
    },
    {
      question: {
        en: "What is cable management important for in robotic systems?",
        es: "¿Por qué es importante la gestión de cables en sistemas robóticos?",
        de: "Warum ist Kabelmanagement in Robotersystemen wichtig?",
        nl: "Waarom is kabelmanagement belangrijk in robotsystemen?"
      },
      options: [
        { en: "To prevent cable wear and maintain reliable connections during movement", es: "Prevenir desgaste de cables y mantener conexiones confiables durante movimiento", de: "Kabelverschleiß verhindern und zuverlässige Verbindungen während Bewegung aufrechterhalten", nl: "Kabelslijtage voorkomen en betrouwbare verbindingen behouden tijdens beweging" },
        { en: "To reduce robot weight only", es: "Solo para reducir peso del robot", de: "Nur um Robotergewicht zu reduzieren", nl: "Alleen om robotgewicht te verminderen" },
        { en: "To improve robot appearance", es: "Para mejorar la apariencia del robot", de: "Roboter-Erscheinungsbild verbessern", nl: "Robotuiterlijk verbeteren" },
        { en: "To increase robot speed", es: "Para aumentar velocidad del robot", de: "Robotergeschwindigkeit erhöhen", nl: "Robotsnelheid verhogen" }
      ],
      correct: 0,
      explanation: {
        en: "Proper cable management prevents cables from wearing out due to repeated flexing, tangling, or interfering with robot movement, ensuring reliable electrical connections and system longevity.",
        es: "La gestión adecuada de cables previene que los cables se desgasten debido a flexión repetida, enredos o interferencia con el movimiento del robot, asegurando conexiones eléctricas confiables y longevidad del sistema.",
        de: "Ordnungsgemäßes Kabelmanagement verhindert, dass Kabel durch wiederholte Biegung, Verhedderung oder Störung der Roboterbewegung verschleißen, und gewährleistet zuverlässige elektrische Verbindungen und Systemlanglebigkeit.",
        nl: "Juist kabelmanagement voorkomt dat kabels verslijten door herhaald buigen, verwrikking of interferentie met robotbeweging, wat betrouwbare elektrische verbindingen en systeemlevensduur waarborgt."
      }
    },
    {
      question: {
        en: "What is the role of a robot's power supply unit?",
        es: "¿Cuál es el papel de la unidad de fuente de alimentación de un robot?",
        de: "Was ist die Rolle der Stromversorgungseinheit eines Roboters?",
        nl: "Wat is de rol van de voedingseenheid van een robot?"
      },
      options: [
        { en: "To convert and distribute electrical power to all robot components", es: "Convertir y distribuir energía eléctrica a todos los componentes del robot", de: "Elektrische Energie für alle Roboterkomponenten umwandeln und verteilen", nl: "Elektrische energie converteren en distribueren naar alle robotcomponenten" },
        { en: "To store robot programs", es: "Almacenar programas del robot", de: "Roboterprogramme speichern", nl: "Robotprogramma's opslaan" },
        { en: "To process sensor data", es: "Procesar datos de sensores", de: "Sensordaten verarbeiten", nl: "Sensordata verwerken" },
        { en: "To control robot movement", es: "Controlar movimiento del robot", de: "Roboterbewegung steuern", nl: "Robotbeweging controleren" }
      ],
      correct: 0,
      explanation: {
        en: "The power supply unit converts incoming AC power to the various DC voltages required by different robot components like motors, controllers, and sensors, ensuring proper operation of the entire system.",
        es: "La unidad de fuente de alimentación convierte la energía AC entrante a los varios voltajes DC requeridos por diferentes componentes del robot como motores, controladores y sensores, asegurando operación adecuada de todo el sistema.",
        de: "Die Stromversorgungseinheit wandelt eingehende AC-Energie in die verschiedenen DC-Spannungen um, die von verschiedenen Roboterkomponenten wie Motoren, Steuerungen und Sensoren benötigt werden, und gewährleistet den ordnungsgemäßen Betrieb des gesamten Systems.",
        nl: "De voedingseenheid converteert inkomende AC stroom naar de verschillende DC spanningen vereist door verschillende robotcomponenten zoals motoren, controllers en sensoren, wat juiste werking van het hele systeem waarborgt."
      }
    },
    {
      question: {
        en: "What is trajectory planning in robotics?",
        es: "¿Qué es la planificación de trayectoria en robótica?",
        de: "Was ist Trajektorienplanung in der Robotik?",
        nl: "Wat is trajectplanning in de robotica?"
      },
      options: [
        { en: "Determining the path and timing for robot movement between positions", es: "Determinar la trayectoria y el tiempo para el movimiento del robot entre posiciones", de: "Pfad und Zeitplanung für Roboterbewegung zwischen Positionen bestimmen", nl: "Bepalen van pad en timing voor robotbeweging tussen posities" },
        { en: "Programming robot end-effector tools", es: "Programar herramientas del efector final del robot", de: "Roboter-Endeffektor-Werkzeuge programmieren", nl: "Robotendeffector gereedschappen programmeren" },
        { en: "Designing robot mechanical structure", es: "Diseñar estructura mecánica del robot", de: "Mechanische Roboterstruktur entwerfen", nl: "Mechanische robotstructuur ontwerpen" },
        { en: "Selecting appropriate sensors", es: "Seleccionar sensores apropiados", de: "Geeignete Sensoren auswählen", nl: "Geschikte sensoren selecteren" }
      ],
      correct: 0,
      explanation: {
        en: "Trajectory planning involves determining the optimal path, velocity, and acceleration profiles for moving the robot smoothly and efficiently from one position to another while avoiding obstacles.",
        es: "La planificación de trayectoria involucra determinar la trayectoria óptima, velocidad y perfiles de aceleración para mover el robot suave y eficientemente de una posición a otra evitando obstáculos.",
        de: "Trajektorienplanung beinhaltet die Bestimmung des optimalen Pfads, der Geschwindigkeit und Beschleunigungsprofile für die glatte und effiziente Bewegung des Roboters von einer Position zur anderen unter Vermeidung von Hindernissen.",
        nl: "Trajectplanning houdt in het bepalen van het optimale pad, snelheid en acceleratieprofielen voor het soepel en efficiënt bewegen van de robot van de ene positie naar de andere terwijl obstakels worden vermeden."
      }
    },
    {
      question: {
        en: "What is the main characteristic of industrial robot programming languages?",
        es: "¿Cuál es la característica principal de los lenguajes de programación de robots industriales?",
        de: "Was ist das Hauptmerkmal industrieller Roboterprogrammiersprachen?",
        nl: "Wat is de hoofdkenmerk van industriële robotprogrammeertalen?"
      },
      options: [
        { en: "They are designed specifically for motion control and spatial operations", es: "Están diseñados específicamente para control de movimiento y operaciones espaciales", de: "Sie sind speziell für Bewegungssteuerung und räumliche Operationen entwickelt", nl: "Ze zijn specifiek ontworpen voor bewegingscontrole en ruimtelijke operaties" },
        { en: "They are identical to general computer languages", es: "Son idénticos a lenguajes de computadora generales", de: "Sie sind identisch mit allgemeinen Computersprachen", nl: "Ze zijn identiek aan algemene computertalen" },
        { en: "They only work with specific robot brands", es: "Solo funcionan con marcas específicas de robots", de: "Sie funktionieren nur mit bestimmten Robotermarken", nl: "Ze werken alleen met specifieke robotmerken" },
        { en: "They cannot handle sensor input", es: "No pueden manejar entrada de sensores", de: "Sie können keine Sensoreingaben verarbeiten", nl: "Ze kunnen geen sensorinvoer verwerken" }
      ],
      correct: 0,
      explanation: {
        en: "Industrial robot programming languages are specifically designed for motion control, spatial operations, and real-time control tasks, with built-in functions for coordinate transformations, path planning, and I/O handling.",
        es: "Los lenguajes de programación de robots industriales están específicamente diseñados para control de movimiento, operaciones espaciales y tareas de control en tiempo real, con funciones integradas para transformaciones de coordenadas, planificación de trayectorias y manejo de E/S.",
        de: "Industrielle Roboterprogrammiersprachen sind speziell für Bewegungssteuerung, räumliche Operationen und Echtzeitsteuertasks entwickelt, mit eingebauten Funktionen für Koordinatentransformationen, Pfadplanung und E/A-Behandlung.",
        nl: "Industriële robotprogrammeertalen zijn specifiek ontworpen voor bewegingscontrole, ruimtelijke operaties en realtime controletaken, met ingebouwde functies voor coördinaattransformaties, padplanning en I/O-afhandeling."
      }
    },
    {
      question: {
        en: "What does robot calibration involve?",
        es: "¿Qué involucra la calibración del robot?",
        de: "Was beinhaltet die Roboterkalibrierung?",
        nl: "Wat houdt robotkalibratie in?"
      },
      options: [
        { en: "Adjusting robot parameters to improve positioning accuracy", es: "Ajustar parámetros del robot para mejorar precisión de posicionamiento", de: "Roboterparameter anpassen, um Positionierungsgenauigkeit zu verbessern", nl: "Robotparameters aanpassen om positioneringsnauwkeurigheid te verbeteren" },
        { en: "Programming robot movements", es: "Programar movimientos del robot", de: "Roboterbewegungen programmieren", nl: "Robotbewegingen programmeren" },
        { en: "Installing robot software", es: "Instalar software del robot", de: "Robotersoftware installieren", nl: "Robotsoftware installeren" },
        { en: "Testing robot speed limits", es: "Probar límites de velocidad del robot", de: "Roboter-Geschwindigkeitsgrenzen testen", nl: "Robotsnelheidslimieten testen" }
      ],
      correct: 0,
      explanation: {
        en: "Robot calibration involves measuring and adjusting various parameters like link lengths, joint offsets, and geometric relationships to improve the robot's positioning accuracy and performance.",
        es: "La calibración del robot involucra medir y ajustar varios parámetros como longitudes de enlaces, desplazamientos de articulaciones y relaciones geométricas para mejorar la precisión de posicionamiento y rendimiento del robot.",
        de: "Roboterkalibrierung beinhaltet das Messen und Anpassen verschiedener Parameter wie Gliedlängen, Gelenkversätze und geometrische Beziehungen, um die Positionierungsgenauigkeit und Leistung des Roboters zu verbessern.",
        nl: "Robotkalibratie houdt in het meten en aanpassen van verschillende parameters zoals schakellengtes, gewrichtoffsets en geometrische relaties om de positioneringsnauwkeurigheid en prestatie van de robot te verbeteren."
      }
    },
    {
      question: {
        en: "What is the purpose of robot simulation software?",
        es: "¿Cuál es el propósito del software de simulación de robots?",
        de: "Was ist der Zweck von Robotersimulationssoftware?",
        nl: "Wat is het doel van robotsimulatiesoftware?"
      },
      options: [
        { en: "To test and optimize robot programs before implementation", es: "Probar y optimizar programas de robot antes de implementación", de: "Roboterprogramme vor Implementierung testen und optimieren", nl: "Robotprogramma's testen en optimaliseren voor implementatie" },
        { en: "To replace physical robots entirely", es: "Reemplazar completamente robots físicos", de: "Physische Roboter vollständig ersetzen", nl: "Fysieke robots volledig vervangen" },
        { en: "To control real robots remotely", es: "Controlar robots reales remotamente", de: "Echte Roboter fernsteuern", nl: "Echte robots op afstand besturen" },
        { en: "To manufacture robot components", es: "Fabricar componentes de robot", de: "Roboterkomponenten herstellen", nl: "Robotcomponenten fabriceren" }
      ],
      correct: 0,
      explanation: {
        en: "Robot simulation software allows engineers to test, debug, and optimize robot programs in a virtual environment, reducing development time and risks before deploying programs to actual robots.",
        es: "El software de simulación de robots permite a los ingenieros probar, depurar y optimizar programas de robot en un ambiente virtual, reduciendo tiempo de desarrollo y riesgos antes de desplegar programas a robots reales.",
        de: "Robotersimulationssoftware ermöglicht es Ingenieuren, Roboterprogramme in einer virtuellen Umgebung zu testen, zu debuggen und zu optimieren, wodurch Entwicklungszeit und Risiken vor dem Einsatz in echten Robotern reduziert werden.",
        nl: "Robotsimulatiesoftware stelt ingenieurs in staat robotprogramma's te testen, debuggen en optimaliseren in een virtuele omgeving, wat ontwikkelingstijd en risico's vermindert voor implementatie op echte robots."
      }
    },
    {
      question: {
        en: "What is the significance of robot cycle time in industrial applications?",
        es: "¿Cuál es la importancia del tiempo de ciclo del robot en aplicaciones industriales?",
        de: "Was ist die Bedeutung der Roboter-Zykluszeit in industriellen Anwendungen?",
        nl: "Wat is de betekenis van robotcyclustijd in industriële toepassingen?"
      },
      options: [
        { en: "It determines production throughput and efficiency", es: "Determina el rendimiento de producción y eficiencia", de: "Es bestimmt Produktionsdurchsatz und Effizienz", nl: "Het bepaalt productiedoorvoer en efficiëntie" },
        { en: "It only affects robot lifespan", es: "Solo afecta la vida útil del robot", de: "Es beeinflusst nur die Roboter-Lebensdauer", nl: "Het beïnvloedt alleen robotlevensduur" },
        { en: "It measures power consumption", es: "Mide consumo de energía", de: "Es misst den Energieverbrauch", nl: "Het meet energieverbruik" },
        { en: "It indicates maintenance requirements", es: "Indica requisitos de mantenimiento", de: "Es zeigt Wartungsanforderungen an", nl: "Het geeft onderhoudsvereisten aan" }
      ],
      correct: 0,
      explanation: {
        en: "Robot cycle time is the total time required to complete one work cycle, directly affecting production throughput, efficiency, and overall manufacturing economics.",
        es: "El tiempo de ciclo del robot es el tiempo total requerido para completar un ciclo de trabajo, afectando directamente el rendimiento de producción, eficiencia y la economía general de manufactura.",
        de: "Die Roboter-Zykluszeit ist die Gesamtzeit, die für einen vollständigen Arbeitszyklus erforderlich ist, und beeinflusst direkt Produktionsdurchsatz, Effizienz und die gesamte Fertigungsökonomie.",
        nl: "Robotcyclustijd is de totale tijd vereist om een werkcyclus te voltooien, wat direct de productiedoorvoer, efficiëntie en algemene productie-economie beïnvloedt."
      }
    },
    {
      question: {
        en: "What is a robot's payload-to-weight ratio and why is it important?",
        es: "¿Qué es la relación carga útil-peso de un robot y por qué es importante?",
        de: "Was ist das Nutzlast-Gewichts-Verhältnis eines Roboters und warum ist es wichtig?",
        nl: "Wat is de nuttige lading-gewichtsverhouding van een robot en waarom is het belangrijk?"
      },
      options: [
        { en: "It measures efficiency and determines cost-effectiveness", es: "Mide eficiencia y determina rentabilidad", de: "Es misst Effizienz und bestimmt Kosteneffektivität", nl: "Het meet efficiëntie en bepaalt kosteneffectiviteit" },
        { en: "It only affects robot speed", es: "Solo afecta la velocidad del robot", de: "Es beeinflusst nur die Robotergeschwindigkeit", nl: "Het beïnvloedt alleen robotsnelheid" },
        { en: "It measures electrical consumption", es: "Mide consumo eléctrico", de: "Es misst den Stromverbrauch", nl: "Het meet elektriciteitsverbruik" },
        { en: "It indicates programming complexity", es: "Indica complejidad de programación", de: "Es zeigt Programmierungskomplexität an", nl: "Het geeft programmeercomplexiteit aan" }
      ],
      correct: 0,
      explanation: {
        en: "The payload-to-weight ratio indicates how efficiently a robot can carry loads relative to its own weight. Higher ratios mean better performance, energy efficiency, and cost-effectiveness in industrial applications.",
        es: "La relación carga útil-peso indica qué tan eficientemente un robot puede cargar cargas relativas a su propio peso. Relaciones más altas significan mejor rendimiento, eficiencia energética y rentabilidad en aplicaciones industriales.",
        de: "Das Nutzlast-Gewichts-Verhältnis zeigt an, wie effizient ein Roboter Lasten im Verhältnis zu seinem eigenen Gewicht tragen kann. Höhere Verhältnisse bedeuten bessere Leistung, Energieeffizienz und Kosteneffektivität in industriellen Anwendungen.",
        nl: "De nuttige lading-gewichtsverhouding geeft aan hoe efficiënt een robot lasten kan dragen relatief aan zijn eigen gewicht. Hogere verhoudingen betekenen betere prestatie, energie-efficiëntie en kosteneffectiviteit in industriële toepassingen."
      }
    },
    {
      question: {
        en: "What is the difference between open and closed kinematic chains?",
        es: "¿Cuál es la diferencia entre cadenas cinemáticas abiertas y cerradas?",
        de: "Was ist der Unterschied zwischen offenen und geschlossenen kinematischen Ketten?",
        nl: "Wat is het verschil tussen open en gesloten kinematische ketens?"
      },
      options: [
        { en: "Open chains have one free end, closed chains form loops", es: "Cadenas abiertas tienen un extremo libre, cadenas cerradas forman bucles", de: "Offene Ketten haben ein freies Ende, geschlossene bilden Schleifen", nl: "Open ketens hebben een vrij einde, gesloten ketens vormen lussen" },
        { en: "Open chains are faster than closed chains", es: "Cadenas abiertas son más rápidas que cadenas cerradas", de: "Offene Ketten sind schneller als geschlossene", nl: "Open ketens zijn sneller dan gesloten ketens" },
        { en: "Closed chains consume more power", es: "Cadenas cerradas consumen más energía", de: "Geschlossene Ketten verbrauchen mehr Energie", nl: "Gesloten ketens verbruiken meer energie" },
        { en: "Open chains are always more accurate", es: "Cadenas abiertas son siempre más precisas", de: "Offene Ketten sind immer genauer", nl: "Open ketens zijn altijd nauwkeuriger" }
      ],
      correct: 0,
      explanation: {
        en: "Open kinematic chains have one end free to move (like most robot arms), while closed kinematic chains form loops where both ends are constrained (like parallel robots or Stewart platforms).",
        es: "Las cadenas cinemáticas abiertas tienen un extremo libre para moverse (como la mayoría de brazos robóticos), mientras las cadenas cinemáticas cerradas forman bucles donde ambos extremos están restringidos (como robots paralelos o plataformas Stewart).",
        de: "Offene kinematische Ketten haben ein freies Ende zum Bewegen (wie die meisten Roboterarme), während geschlossene kinematische Ketten Schleifen bilden, wo beide Enden beschränkt sind (wie Parallelroboter oder Stewart-Plattformen).",
        nl: "Open kinematische ketens hebben een vrij einde om te bewegen (zoals de meeste robotarmen), terwijl gesloten kinematische ketens lussen vormen waar beide einden beperkt zijn (zoals parallelle robots of Stewart platformen)."
      }
    },
    {
      question: {
        en: "What is the purpose of a robot's load cell?",
        es: "¿Cuál es el propósito de una celda de carga de un robot?",
        de: "Was ist der Zweck einer Roboter-Wägezelle?",
        nl: "Wat is het doel van een loadcel van een robot?"
      },
      options: [
        { en: "To measure forces and torques acting on the robot", es: "Medir fuerzas y torques actuando sobre el robot", de: "Kräfte und Drehmomente zu messen, die auf den Roboter wirken", nl: "Krachten en koppels meten die op de robot inwerken" },
        { en: "To store electrical energy", es: "Almacenar energía eléctrica", de: "Elektrische Energie speichern", nl: "Elektrische energie opslaan" },
        { en: "To control robot speed", es: "Controlar velocidad del robot", de: "Robotergeschwindigkeit steuern", nl: "Robotsnelheid controleren" },
        { en: "To process visual information", es: "Procesar información visual", de: "Visuelle Informationen verarbeiten", nl: "Visuele informatie verwerken" }
      ],
      correct: 0,
      explanation: {
        en: "Load cells measure forces and torques acting on the robot, providing feedback for force control applications, safety monitoring, and collision detection systems.",
        es: "Las celdas de carga miden fuerzas y torques actuando sobre el robot, proporcionando retroalimentación para aplicaciones de control de fuerza, monitoreo de seguridad y sistemas de detección de colisiones.",
        de: "Wägezellen messen Kräfte und Drehmomente, die auf den Roboter wirken, und liefern Rückmeldung für Kraftsteuerungsanwendungen, Sicherheitsüberwachung und Kollisionserkennungssysteme.",
        nl: "Loadcells meten krachten en koppels die op de robot inwerken, wat feedback biedt voor krachtcontroletoepassingen, veiligheidsmonitoring en botsingdetectiesystemen."
      }
    },
    {
      question: {
        en: "What is robot dexterity?",
        es: "¿Qué es la destreza robótica?",
        de: "Was ist Roboter-Geschicklichkeit?",
        nl: "Wat is robotbehendigheid?"
      },
      options: [
        { en: "The ability to manipulate objects with skill and precision", es: "La capacidad de manipular objetos con habilidad y precisión", de: "Die Fähigkeit, Objekte mit Geschick und Präzision zu manipulieren", nl: "Het vermogen om objecten met vaardigheid en precisie te manipuleren" },
        { en: "The robot's maximum lifting capacity", es: "La capacidad máxima de levantamiento del robot", de: "Die maximale Hebekapazität des Roboters", nl: "De maximale hefcapaciteit van de robot" },
        { en: "The speed of robot movement", es: "La velocidad del movimiento del robot", de: "Die Geschwindigkeit der Roboterbewegung", nl: "De snelheid van robotbeweging" },
        { en: "The robot's programming language", es: "El lenguaje de programación del robot", de: "Die Programmiersprache des Roboters", nl: "De programmeertaal van de robot" }
      ],
      correct: 0,
      explanation: {
        en: "Robot dexterity refers to the robot's ability to perform complex manipulation tasks with skill, precision, and adaptability, similar to human hand dexterity but achieved through mechanical means.",
        es: "La destreza robótica se refiere a la capacidad del robot de realizar tareas de manipulación complejas con habilidad, precisión y adaptabilidad, similar a la destreza de la mano humana pero lograda a través de medios mecánicos.",
        de: "Roboter-Geschicklichkeit bezieht sich auf die Fähigkeit des Roboters, komplexe Manipulationsaufgaben mit Geschick, Präzision und Anpassungsfähigkeit auszuführen, ähnlich der menschlichen Handgeschicklichkeit, aber durch mechanische Mittel erreicht.",
        nl: "Robotbehendigheid verwijst naar het vermogen van de robot om complexe manipulatietaken uit te voeren met vaardigheid, precisie en aanpassingsvermogen, vergelijkbaar met menselijke handbehendigheid maar bereikt door mechanische middelen."
      }
    },
    {
      question: {
        en: "What is the function of a robot's resolver?",
        es: "¿Cuál es la función de un resolver de un robot?",
        de: "Was ist die Funktion eines Roboter-Resolvers?",
        nl: "Wat is de functie van een resolver van een robot?"
      },
      options: [
        { en: "To provide absolute position feedback for motor control", es: "Proporcionar retroalimentación de posición absoluta para control de motor", de: "Absolute Positionsrückmeldung für Motorsteuerung bereitzustellen", nl: "Absolute positiefeedback bieden voor motorbesturing" },
        { en: "To resolve programming conflicts", es: "Resolver conflictos de programación", de: "Programmierkonflikte zu lösen", nl: "Programmeerconflicten oplossen" },
        { en: "To amplify control signals", es: "Amplificar señales de control", de: "Steuersignale zu verstärken", nl: "Controlesignalen versterken" },
        { en: "To convert analog to digital signals", es: "Convertir señales analógicas a digitales", de: "Analoge in digitale Signale umwandeln", nl: "Analoge naar digitale signalen converteren" }
      ],
      correct: 0,
      explanation: {
        en: "A resolver is a rotary transformer that provides accurate absolute position feedback by generating analog signals proportional to shaft angle, commonly used in servo motor control systems.",
        es: "Un resolver es un transformador rotativo que proporciona retroalimentación precisa de posición absoluta generando señales analógicas proporcionales al ángulo del eje, comúnmente usado en sistemas de control de motores servo.",
        de: "Ein Resolver ist ein Drehtransformator, der genaue absolute Positionsrückmeldung durch Erzeugung analoger Signale proportional zum Wellenwinkel liefert, häufig in Servomotor-Steuersystemen verwendet.",
        nl: "Een resolver is een draaitransformator die nauwkeurige absolute positiefeedback biedt door analoge signalen te genereren die proportioneel zijn aan de ashoek, vaak gebruikt in servomotorbesturingssystemen."
      }
    },
    {
      question: {
        en: "What is meant by robot anthropomorphism in design?",
        es: "¿Qué significa antropomorfismo robótico en el diseño?",
        de: "Was bedeutet Roboter-Anthropomorphismus im Design?",
        nl: "Wat wordt bedoeld met robotantropomorfisme in ontwerp?"
      },
      options: [
        { en: "Designing robots to resemble human form and movement", es: "Diseñar robots para parecerse a la forma y movimiento humanos", de: "Roboter so zu gestalten, dass sie menschlicher Form und Bewegung ähneln", nl: "Robots ontwerpen om op menselijke vorm en beweging te lijken" },
        { en: "Making robots as small as possible", es: "Hacer robots tan pequeños como sea posible", de: "Roboter so klein wie möglich zu machen", nl: "Robots zo klein mogelijk maken" },
        { en: "Using only metallic materials", es: "Usar solo materiales metálicos", de: "Nur metallische Materialien verwenden", nl: "Alleen metalen materialen gebruiken" },
        { en: "Programming robots in human languages", es: "Programar robots en lenguajes humanos", de: "Roboter in menschlichen Sprachen programmieren", nl: "Robots programmeren in menselijke talen" }
      ],
      correct: 0,
      explanation: {
        en: "Anthropomorphism in robot design refers to giving robots human-like characteristics in form, movement, or behavior, making them more intuitive for humans to interact with and accept.",
        es: "El antropomorfismo en el diseño robótico se refiere a dar a los robots características similares a las humanas en forma, movimiento o comportamiento, haciéndolos más intuitivos para que los humanos interactúen y los acepten.",
        de: "Anthropomorphismus im Roboterdesign bezieht sich darauf, Robotern menschenähnliche Eigenschaften in Form, Bewegung oder Verhalten zu verleihen, wodurch sie für Menschen intuitiver zu bedienen und zu akzeptieren sind.",
        nl: "Antropomorfisme in robotontwerp verwijst naar het geven van mensachtige kenmerken aan robots in vorm, beweging of gedrag, waardoor ze intuïtiever worden voor mensen om mee te interacteren en te accepteren."
      }
    }
  ]
});
