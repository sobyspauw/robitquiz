// Robotics - Level 6: Advanced Manipulation & Force Control
window.addLevel('mind-bender/robotics', {
  name: { 
    en: 'Advanced Manipulation & Force Control', 
    es: 'Manipulación Avanzada y Control de Fuerza', 
    de: 'Erweiterte Manipulation & Kraftregelung', 
    nl: 'Geavanceerde Manipulatie & Krachtcontrole' 
  },
  questions: [
    {
      question: {
        en: "What is compliant motion control in robotics?",
        es: "¿Qué es el control de movimiento complaciente en robótica?",
        de: "Was ist nachgiebige Bewegungssteuerung in der Robotik?",
        nl: "Wat is meegaande bewegingscontrole in de robotica?"
      },
      options: [
        { en: "Allowing robots to adapt their motion in response to contact forces during manipulation", es: "Permitir que los robots adapten su movimiento en respuesta a fuerzas de contacto durante la manipulación", de: "Robotern ermöglichen, ihre Bewegung als Reaktion auf Kontaktkräfte während der Manipulation anzupassen", nl: "Robots toestaan hun beweging aan te passen als reactie op contactkrachten tijdens manipulatie" },
        { en: "Following predefined trajectories without deviation", es: "Seguir trayectorias predefinidas sin desviación", de: "Befolgen vordefinierter Trajektorien ohne Abweichung", nl: "Het volgen van voorgedefinieerde trajectories zonder afwijking" },
        { en: "Moving robots at constant velocity regardless of obstacles", es: "Mover robots a velocidad constante independientemente de obstáculos", de: "Roboter mit konstanter Geschwindigkeit bewegen, unabhängig von Hindernissen", nl: "Robots bewegen met constante snelheid ongeacht obstakels" },
        { en: "A safety protocol for emergency robot shutdown", es: "Un protocolo de seguridad para apagado de emergencia de robots", de: "Ein Sicherheitsprotokoll für Roboter-Notabschaltung", nl: "Een veiligheidsprotocol voor nooduitschakeling van robots" }
      ],
      correct: 0,
      explanation: {
        en: "Compliant motion control enables robots to adjust their movement when they encounter unexpected forces or contact with objects. This is essential for tasks like assembly, polishing, or any operation where the robot must interact physically with its environment.",
        es: "El control de movimiento complaciente permite a los robots ajustar su movimiento cuando encuentran fuerzas inesperadas o contacto con objetos. Esto es esencial para tareas como ensamblaje, pulido, o cualquier operación donde el robot debe interactuar físicamente con su entorno.",
        de: "Nachgiebige Bewegungssteuerung ermöglicht es Robotern, ihre Bewegung anzupassen, wenn sie auf unerwartete Kräfte oder Kontakt mit Objekten stoßen. Dies ist wesentlich für Aufgaben wie Montage, Polieren oder jede Operation, bei der der Roboter physisch mit seiner Umgebung interagieren muss.",
        nl: "Meegaande bewegingscontrole stelt robots in staat hun beweging aan te passen wanneer ze onverwachte krachten of contact met objecten tegenkomen. Dit is essentieel voor taken zoals assemblage, polijsten, of elke operatie waarbij de robot fysiek moet interageren met zijn omgeving."
      }
    },
    {
      question: {
        en: "What is force feedback control in robotic manipulation?",
        es: "¿Qué es el control de retroalimentación de fuerza en manipulación robótica?",
        de: "Was ist Kraftrückkopplungssteuerung in der robotischen Manipulation?",
        nl: "Wat is kracht feedback controle in robotische manipulatie?"
      },
      options: [
        { en: "Using force sensors to adjust robot actions based on measured contact forces", es: "Usar sensores de fuerza para ajustar las acciones del robot basándose en fuerzas de contacto medidas", de: "Verwendung von Kraftsensoren zur Anpassung von Roboterhandlungen basierend auf gemessenen Kontaktkräften", nl: "Het gebruik van krachtsensoren om robotacties aan te passen op basis van gemeten contactkrachten" },
        { en: "Providing tactile feedback to human operators", es: "Proporcionar retroalimentación táctil a operadores humanos", de: "Bereitstellung taktiler Rückmeldung an menschliche Bediener", nl: "Het leveren van tactiele feedback aan menselijke operators" },
        { en: "Measuring the power consumption of robot actuators", es: "Medir el consumo de energía de los actuadores del robot", de: "Messung des Energieverbrauchs von Roboter-Aktuatoren", nl: "Het meten van energieverbruik van robotactuatoren" },
        { en: "Monitoring robot joint positions continuously", es: "Monitorear continuamente las posiciones de las articulaciones del robot", de: "Kontinuierliche Überwachung der Robotergelenkpositionen", nl: "Continu monitoren van robotgewrichtposities" }
      ],
      correct: 0,
      explanation: {
        en: "Force feedback control uses sensors to measure forces and torques at the robot's end-effector, then adjusts the robot's motion to achieve desired force profiles. This enables delicate operations like insertion tasks, surface following, and safe human-robot interaction.",
        es: "El control de retroalimentación de fuerza usa sensores para medir fuerzas y torques en el efector final del robot, luego ajusta el movimiento del robot para lograr perfiles de fuerza deseados. Esto permite operaciones delicadas como tareas de inserción, seguimiento de superficie e interacción humano-robot segura.",
        de: "Kraftrückkopplungssteuerung verwendet Sensoren zur Messung von Kräften und Drehmomenten am Roboter-Endeffektor, dann passt sie die Roboterbewegung an, um gewünschte Kraftprofile zu erreichen. Dies ermöglicht delikate Operationen wie Einfügungsaufgaben, Oberflächenverfolgung und sichere Mensch-Roboter-Interaktion.",
        nl: "Kracht feedback controle gebruikt sensoren om krachten en koppels op de robot-eindeffector te meten, en past vervolgens de robotbeweging aan om gewenste krachtprofielen te bereiken. Dit maakt delicate operaties mogelijk zoals invoegingstaken, oppervlakvolging en veilige mens-robot interactie."
      }
    },
    {
      question: {
        en: "What is admittance control in robotics?",
        es: "¿Qué es el control de admitancia en robótica?",
        de: "Was ist Admittanzsteuerung in der Robotik?",
        nl: "Wat is admittantiecontrole in de robotica?"
      },
      options: [
        { en: "A control method where the robot's motion responds to external forces according to desired mechanical properties", es: "Un método de control donde el movimiento del robot responde a fuerzas externas según propiedades mecánicas deseadas", de: "Eine Steuerungsmethode, bei der die Roboterbewegung auf externe Kräfte entsprechend gewünschter mechanischer Eigenschaften reagiert", nl: "Een controlemethode waarbij de robotbeweging reageert op externe krachten volgens gewenste mechanische eigenschappen" },
        { en: "A protocol for allowing multiple robots to access shared resources", es: "Un protocolo para permitir que múltiples robots accedan a recursos compartidos", de: "Ein Protokoll, das mehreren Robotern den Zugang zu geteilten Ressourcen ermöglicht", nl: "Een protocol voor het toestaan dat meerdere robots toegang krijgen tot gedeelde resources" },
        { en: "A security system for controlling robot access permissions", es: "Un sistema de seguridad para controlar permisos de acceso de robots", de: "Ein Sicherheitssystem zur Steuerung von Roboter-Zugriffsberechtigungen", nl: "Een beveiligingssysteem voor het controleren van robottoegangspermissies" },
        { en: "A quality assurance method for validating robot performance", es: "Un método de aseguramiento de calidad para validar el rendimiento del robot", de: "Eine Qualitätssicherungsmethode zur Validierung der Roboterleistung", nl: "Een kwaliteitsborgingsmethode voor het valideren van robotprestaties" }
      ],
      correct: 0,
      explanation: {
        en: "Admittance control makes a robot behave as if it has certain mechanical properties (mass, damping, stiffness) when subjected to external forces. The robot modulates its position in response to applied forces, creating desired compliance characteristics for safe interaction.",
        es: "El control de admitancia hace que un robot se comporte como si tuviera ciertas propiedades mecánicas (masa, amortiguación, rigidez) cuando se somete a fuerzas externas. El robot modula su posición en respuesta a fuerzas aplicadas, creando características de complacencia deseadas para interacción segura.",
        de: "Admittanzsteuerung lässt einen Roboter so verhalten, als hätte er bestimmte mechanische Eigenschaften (Masse, Dämpfung, Steifigkeit), wenn er externen Kräften ausgesetzt wird. Der Roboter moduliert seine Position als Reaktion auf angewandte Kräfte und schafft gewünschte Nachgiebigkeitseigenschaften für sichere Interaktion.",
        nl: "Admittantiecontrole laat een robot zich gedragen alsof hij bepaalde mechanische eigenschappen heeft (massa, demping, stijfheid) wanneer hij wordt onderworpen aan externe krachten. De robot moduleert zijn positie als reactie op uitgeoefende krachten, wat gewenste meegaandheid karakteristieken creëert voor veilige interactie."
      }
    },
    {
      question: {
        en: "What is hybrid position/force control?",
        es: "¿Qué es el control híbrido de posición/fuerza?",
        de: "Was ist hybride Positions-/Kraftsteuerung?",
        nl: "Wat is hybride positie/kracht controle?"
      },
      options: [
        { en: "Simultaneously controlling position in some directions and force in others", es: "Controlar simultáneamente la posición en algunas direcciones y la fuerza en otras", de: "Gleichzeitige Steuerung der Position in einigen Richtungen und der Kraft in anderen", nl: "Gelijktijdig positioneren in sommige richtingen en kracht in andere" },
        { en: "Switching between position and force control at predetermined intervals", es: "Cambiar entre control de posición y fuerza a intervalos predeterminados", de: "Wechseln zwischen Positions- und Kraftsteuerung in vorbestimmten Intervallen", nl: "Schakelen tussen positie- en krachtcontrole op vooraf bepaalde intervallen" },
        { en: "Using both electric and hydraulic actuators together", es: "Usar actuadores eléctricos e hidráulicos juntos", de: "Verwendung von elektrischen und hydraulischen Aktuatoren zusammen", nl: "Het gebruik van zowel elektrische als hydraulische actuatoren samen" },
        { en: "Combining manual and automatic robot operation modes", es: "Combinar modos de operación manual y automática del robot", de: "Kombination von manuellen und automatischen Roboter-Betriebsmodi", nl: "Het combineren van handmatige en automatische robotwerkingsmodi" }
      ],
      correct: 0,
      explanation: {
        en: "Hybrid position/force control allows a robot to control position precisely in some task directions while controlling force in others. For example, when inserting a peg into a hole, the robot controls position along the insertion axis but regulates force in the perpendicular directions to handle misalignment.",
        es: "El control híbrido de posición/fuerza permite a un robot controlar la posición precisamente en algunas direcciones de tarea mientras controla la fuerza en otras. Por ejemplo, al insertar una clavija en un agujero, el robot controla la posición a lo largo del eje de inserción pero regula la fuerza en las direcciones perpendiculares para manejar desalineación.",
        de: "Hybride Positions-/Kraftsteuerung ermöglicht es einem Roboter, Position in einigen Aufgabenrichtungen präzise zu steuern, während er Kraft in anderen steuert. Zum Beispiel, beim Einsetzen eines Stiftes in ein Loch steuert der Roboter Position entlang der Einsetzachse, reguliert aber Kraft in den senkrechten Richtungen, um Fehlausrichtung zu handhaben.",
        nl: "Hybride positie/kracht controle stelt een robot in staat om positie nauwkeurig te controleren in sommige taakrichtingen terwijl kracht in andere wordt gecontroleerd. Bijvoorbeeld, bij het inbrengen van een pen in een gat controleert de robot positie langs de invoeg-as maar reguleert kracht in de loodrechte richtingen om misalignment te hanteren."
      }
    },
    {
      question: {
        en: "What is dexterous manipulation in robotics?",
        es: "¿Qué es la manipulación diestra en robótica?",
        de: "Was ist geschickte Manipulation in der Robotik?",
        nl: "Wat is behendigheid manipulatie in de robotica?"
      },
      options: [
        { en: "Using multi-fingered hands to manipulate objects with precision and dexterity similar to humans", es: "Usar manos multi-dedos para manipular objetos con precisión y destreza similar a los humanos", de: "Verwendung mehrfingriger Hände zur Manipulation von Objekten mit Präzision und Geschicklichkeit ähnlich Menschen", nl: "Het gebruik van meervingrige handen om objecten te manipuleren met precisie en behendigheid vergelijkbaar met mensen" },
        { en: "Manipulating objects using only the dominant robotic arm", es: "Manipular objetos usando solo el brazo robótico dominante", de: "Manipulation von Objekten nur mit dem dominanten Roboterarm", nl: "Het manipuleren van objecten met alleen de dominante robotarm" },
        { en: "A programming technique for writing efficient robot control code", es: "Una técnica de programación para escribir código de control de robot eficiente", de: "Eine Programmiertechnik zum Schreiben effizienten Roboter-Steuerungscodes", nl: "Een programmeertechniek voor het schrijven van efficiënte robotbesturingscode" },
        { en: "The ability to quickly switch between different manipulation tools", es: "La capacidad de cambiar rápidamente entre diferentes herramientas de manipulación", de: "Die Fähigkeit, schnell zwischen verschiedenen Manipulationswerkzeugen zu wechseln", nl: "Het vermogen om snel te wisselen tussen verschillende manipulatietools" }
      ],
      correct: 0,
      explanation: {
        en: "Dexterous manipulation involves using robotic hands with multiple articulated fingers to grasp, reorient, and manipulate objects with human-like skill. This requires sophisticated control of multiple degrees of freedom and coordinated finger movements.",
        es: "La manipulación diestra involucra usar manos robóticas con múltiples dedos articulados para agarrar, reorientar y manipular objetos con habilidad similar a la humana. Esto requiere control sofisticado de múltiples grados de libertad y movimientos coordinados de dedos.",
        de: "Geschickte Manipulation beinhaltet die Verwendung robotischer Hände mit mehreren artikulierten Fingern zum Greifen, Neuorientieren und Manipulieren von Objekten mit menschenähnlicher Geschicklichkeit. Dies erfordert ausgeklügelte Steuerung mehrerer Freiheitsgrade und koordinierte Fingerbewegungen.",
        nl: "Behendigheid manipulatie houdt in het gebruik van robotische handen met meerdere gearticuleerde vingers om objecten te grijpen, heroriënteren en manipuleren met mensachtige vaardigheid. Dit vereist geavanceerde controle van meerdere vrijheidsgraden en gecoördineerde vingerbewegingen."
      }
    },
    {
      question: {
        en: "What is contact modeling in robotic manipulation?",
        es: "¿Qué es el modelado de contacto en manipulación robótica?",
        de: "Was ist Kontaktmodellierung in der robotischen Manipulation?",
        nl: "Wat is contactmodellering in robotische manipulatie?"
      },
      options: [
        { en: "Mathematical representation of physical interactions between robot and objects during contact", es: "Representación matemática de interacciones físicas entre robot y objetos durante el contacto", de: "Mathematische Darstellung physischer Interaktionen zwischen Roboter und Objekten während des Kontakts", nl: "Wiskundige representatie van fysieke interacties tussen robot en objecten tijdens contact" },
        { en: "A database of contact information for robot manufacturers", es: "Una base de datos de información de contacto para fabricantes de robots", de: "Eine Datenbank mit Kontaktinformationen für Roboter-Hersteller", nl: "Een database van contactinformatie voor robotfabrikanten" },
        { en: "Designing the physical shape of robot contact surfaces", es: "Diseñar la forma física de las superficies de contacto del robot", de: "Gestaltung der physischen Form von Roboter-Kontaktoberflächen", nl: "Het ontwerpen van de fysieke vorm van robotcontactoppervlakken" },
        { en: "Planning communication protocols between robots", es: "Planificar protocolos de comunicación entre robots", de: "Planung von Kommunikationsprotokollen zwischen Robotern", nl: "Het plannen van communicatieprotocollen tussen robots" }
      ],
      correct: 0,
      explanation: {
        en: "Contact modeling describes the physics of how robots interact with objects through contact forces, friction, and compliance. These models are essential for predicting and controlling manipulation tasks, understanding grasp stability, and planning contact-rich motions.",
        es: "El modelado de contacto describe la física de cómo los robots interactúan con objetos a través de fuerzas de contacto, fricción y complacencia. Estos modelos son esenciales para predecir y controlar tareas de manipulación, entender estabilidad de agarre y planificar movimientos ricos en contacto.",
        de: "Kontaktmodellierung beschreibt die Physik, wie Roboter mit Objekten durch Kontaktkräfte, Reibung und Nachgiebigkeit interagieren. Diese Modelle sind wesentlich für die Vorhersage und Steuerung von Manipulationsaufgaben, das Verstehen der Greifstabilität und die Planung kontaktreicher Bewegungen.",
        nl: "Contactmodellering beschrijft de fysica van hoe robots interageren met objecten door contactkrachten, wrijving en meegaandheid. Deze modellen zijn essentieel voor het voorspellen en controleren van manipulatietaken, het begrijpen van grijpstabiliteit en het plannen van contact-rijke bewegingen."
      }
    },
    {
      question: {
        en: "What is the concept of grasp planning in robotics?",
        es: "¿Qué es el concepto de planificación de agarre en robótica?",
        de: "Was ist das Konzept der Greifplanung in der Robotik?",
        nl: "Wat is het concept van grijpplanning in de robotica?"
      },
      options: [
        { en: "Determining optimal finger/gripper positions and configurations to securely hold objects", es: "Determinar posiciones y configuraciones óptimas de dedos/pinza para sujetar objetos de manera segura", de: "Bestimmung optimaler Finger-/Greifer-Positionen und -Konfigurationen zum sicheren Halten von Objekten", nl: "Het bepalen van optimale vinger/grijper posities en configuraties om objecten veilig vast te houden" },
        { en: "Scheduling when robots should grab different objects", es: "Programar cuándo los robots deben agarrar diferentes objetos", de: "Planen, wann Roboter verschiedene Objekte greifen sollten", nl: "Het plannen wanneer robots verschillende objecten moeten grijpen" },
        { en: "Designing the mechanical structure of robot grippers", es: "Diseñar la estructura mecánica de pinzas de robot", de: "Entwurf der mechanischen Struktur von Roboter-Greifern", nl: "Het ontwerpen van de mechanische structuur van robotgrijpers" },
        { en: "Teaching robots to understand human grasping preferences", es: "Enseñar a los robots a entender preferencias de agarre humanas", de: "Robotern beibringen, menschliche Greifvorlieben zu verstehen", nl: "Robots leren om menselijke grijpvoorkeuren te begrijpen" }
      ],
      correct: 0,
      explanation: {
        en: "Grasp planning involves computing where and how to place fingers or gripper contacts on an object to achieve a stable, secure grasp. This considers factors like object geometry, friction, force distribution, and task requirements to prevent slipping or dropping.",
        es: "La planificación de agarre involucra calcular dónde y cómo colocar dedos o contactos de pinza en un objeto para lograr un agarre estable y seguro. Esto considera factores como geometría del objeto, fricción, distribución de fuerza y requisitos de tarea para prevenir deslizamiento o caída.",
        de: "Greifplanung beinhaltet die Berechnung, wo und wie Finger oder Greifer-Kontakte auf einem Objekt platziert werden, um einen stabilen, sicheren Griff zu erreichen. Dies berücksichtigt Faktoren wie Objektgeometrie, Reibung, Kraftverteilung und Aufgabenanforderungen, um Rutschen oder Fallenlassen zu verhindern.",
        nl: "Grijpplanning houdt in het berekenen waar en hoe vingers of grijpercontacten op een object geplaatst moeten worden om een stabiele, veilige grip te bereiken. Dit overweegt factoren zoals objectgeometrie, wrijving, krachtverdeling en taakvereisten om glijden of laten vallen te voorkomen."
      }
    },
    {
      question: {
        en: "What is tactile sensing in robotic manipulation?",
        es: "¿Qué es la detección táctil en manipulación robótica?",
        de: "Was ist taktile Wahrnehmung in der robotischen Manipulation?",
        nl: "Wat is tactiele waarneming in robotische manipulatie?"
      },
      options: [
        { en: "Using touch sensors to detect contact forces, textures, and object properties during manipulation", es: "Usar sensores táctiles para detectar fuerzas de contacto, texturas y propiedades de objetos durante la manipulación", de: "Verwendung von Berührungssensoren zur Erkennung von Kontaktkräften, Texturen und Objekteigenschaften während der Manipulation", nl: "Het gebruik van aanraaksensoren om contactkrachten, texturen en objecteigenschappen te detecteren tijdens manipulatie" },
        { en: "Planning tactical approaches for complex manipulation tasks", es: "Planificar enfoques tácticos para tareas de manipulación complejas", de: "Planung taktischer Ansätze für komplexe Manipulationsaufgaben", nl: "Het plannen van tactische benaderingen voor complexe manipulatietaken" },
        { en: "Using visual sensors to identify objects before manipulation", es: "Usar sensores visuales para identificar objetos antes de la manipulación", de: "Verwendung visueller Sensoren zur Objektidentifikation vor der Manipulation", nl: "Het gebruik van visuele sensoren om objecten te identificeren voor manipulatie" },
        { en: "Measuring the time required for manipulation operations", es: "Medir el tiempo requerido para operaciones de manipulación", de: "Messung der für Manipulationsoperationen erforderlichen Zeit", nl: "Het meten van de tijd die nodig is voor manipulatieoperaties" }
      ],
      correct: 0,
      explanation: {
        en: "Tactile sensing provides robots with touch-based information about contact forces, surface textures, compliance, temperature, and other physical properties. This enables more sophisticated manipulation strategies and better adaptation to unexpected conditions during handling tasks.",
        es: "La detección táctil proporciona a los robots información basada en el tacto sobre fuerzas de contacto, texturas de superficie, complacencia, temperatura y otras propiedades físicas. Esto permite estrategias de manipulación más sofisticadas y mejor adaptación a condiciones inesperadas durante tareas de manejo.",
        de: "Taktile Wahrnehmung versorgt Roboter mit berührungsbasierter Information über Kontaktkräfte, Oberflächentexturen, Nachgiebigkeit, Temperatur und andere physische Eigenschaften. Dies ermöglicht ausgeklügeltere Manipulationsstrategien und bessere Anpassung an unerwartete Bedingungen während Handhabungsaufgaben.",
        nl: "Tactiele waarneming voorziet robots van op aanraking gebaseerde informatie over contactkrachten, oppervlakte texturen, meegaandheid, temperatuur en andere fysieke eigenschappen. Dit maakt geavanceerdere manipulatie strategieën en betere aanpassing aan onverwachte omstandigheden tijdens hanteringstaken mogelijk."
      }
    },
    {
      question: {
        en: "What is visual servoing in robotic manipulation?",
        es: "¿Qué es el servo control visual en manipulación robótica?",
        de: "Was ist visuelles Servoing in der robotischen Manipulation?",
        nl: "Wat is visuele servoing in robotische manipulatie?"
      },
      options: [
        { en: "Using visual feedback to control robot motion and positioning relative to observed objects", es: "Usar retroalimentación visual para controlar el movimiento y posicionamiento del robot relativo a objetos observados", de: "Verwendung visueller Rückmeldung zur Steuerung von Roboterbewegung und Positionierung relativ zu beobachteten Objekten", nl: "Het gebruik van visuele feedback om robotbeweging en positionering te controleren relatief tot waargenomen objecten" },
        { en: "Providing visual displays for human robot operators", es: "Proporcionar pantallas visuales para operadores humanos de robots", de: "Bereitstellung visueller Displays für menschliche Roboter-Bediener", nl: "Het bieden van visuele displays voor menselijke robotoperators" },
        { en: "Recording video documentation of manipulation tasks", es: "Grabar documentación en video de tareas de manipulación", de: "Aufzeichnung von Videodokumentation von Manipulationsaufgaben", nl: "Het opnemen van videodocumentatie van manipulatietaken" },
        { en: "Analyzing robot performance through visual inspection", es: "Analizar el rendimiento del robot a través de inspección visual", de: "Analyse der Roboterleistung durch visuelle Inspektion", nl: "Het analyseren van robotprestaties door visuele inspectie" }
      ],
      correct: 0,
      explanation: {
        en: "Visual servoing uses camera images to control robot motion in real-time, enabling precise positioning relative to objects seen in the camera view. This allows robots to compensate for uncertainties and variations in object positions during manipulation tasks.",
        es: "El servo control visual usa imágenes de cámara para controlar el movimiento del robot en tiempo real, permitiendo posicionamiento preciso relativo a objetos vistos en la vista de la cámara. Esto permite a los robots compensar incertidumbres y variaciones en posiciones de objetos durante tareas de manipulación.",
        de: "Visuelles Servoing verwendet Kamerabilder zur Echtzeitsteuerung der Roboterbewegung und ermöglicht präzise Positionierung relativ zu Objekten, die in der Kameraansicht gesehen werden. Dies ermöglicht es Robotern, Unsicherheiten und Variationen in Objektpositionen während Manipulationsaufgaben zu kompensieren.",
        nl: "Visuele servoing gebruikt camerabeelden om robotbeweging in real-time te controleren, wat nauwkeurige positionering mogelijk maakt relatief tot objecten die in het camerabeeld worden gezien. Dit stelt robots in staat om onzekerheden en variaties in objectposities tijdens manipulatietaken te compenseren."
      }
    },
    {
      question: {
        en: "What is the role of force control in robotic assembly tasks?",
        es: "¿Cuál es el papel del control de fuerza en tareas de ensamblaje robótico?",
        de: "Was ist die Rolle der Kraftsteuerung in robotischen Montageaufgaben?",
        nl: "Wat is de rol van krachtcontrole in robotische assemblage taken?"
      },
      options: [
        { en: "Regulating contact forces to ensure proper part insertion and avoid damage during assembly", es: "Regular fuerzas de contacto para asegurar inserción adecuada de partes y evitar daño durante ensamblaje", de: "Regulierung von Kontaktkräften zur Gewährleistung ordnungsgemäßer Teileeinführung und Schadensvermeidung während der Montage", nl: "Het reguleren van contactkrachten om juiste onderdeel invoering te verzekeren en schade tijdens assemblage te voorkomen" },
        { en: "Controlling the speed of assembly line operations", es: "Controlar la velocidad de operaciones de línea de ensamblaje", de: "Steuerung der Geschwindigkeit von Montagelinienbetrieb", nl: "Het controleren van de snelheid van assemblage lijn operaties" },
        { en: "Managing the electrical power supplied to robot motors", es: "Gestionar la energía eléctrica suministrada a los motores del robot", de: "Verwaltung der an Roboter-Motoren gelieferten elektrischen Energie", nl: "Het beheren van de elektrische energie geleverd aan robotmotoren" },
        { en: "Determining the sequence of assembly operations", es: "Determinar la secuencia de operaciones de ensamblaje", de: "Bestimmung der Reihenfolge von Montageoperationen", nl: "Het bepalen van de volgorde van assemblagebewerkingen" }
      ],
      correct: 0,
      explanation: {
        en: "Force control in assembly ensures that parts are inserted with appropriate contact forces - enough to complete the assembly but not so much as to damage components. It enables robots to handle tight tolerances, chamfer-guided insertion, and compliant mating of parts.",
        es: "El control de fuerza en ensamblaje asegura que las partes se inserten con fuerzas de contacto apropiadas - suficientes para completar el ensamblaje pero no tanto como para dañar componentes. Permite a los robots manejar tolerancias ajustadas, inserción guiada por chaflán y acoplamiento complaciente de partes.",
        de: "Kraftsteuerung in der Montage gewährleistet, dass Teile mit angemessenen Kontaktkräften eingesetzt werden - genug, um die Montage zu vollenden, aber nicht so viel, um Komponenten zu beschädigen. Sie ermöglicht es Robotern, enge Toleranzen, fasengeführte Einführung und nachgiebige Paarung von Teilen zu handhaben.",
        nl: "Krachtcontrole in assemblage zorgt ervoor dat onderdelen worden ingevoegd met juiste contactkrachten - genoeg om de assemblage te voltooien maar niet zo veel om componenten te beschadigen. Het stelt robots in staat om strakke toleranties, schuinrand-geleide invoering en meegaande paring van onderdelen te hanteren."
      }
    },
    {
      question: {
        en: "What is stiffness control in robotics?",
        es: "¿Qué es el control de rigidez en robótica?",
        de: "Was ist Steifigkeitskontrolle in der Robotik?",
        nl: "Wat is stijfheidscontrole in de robotica?"
      },
      options: [
        { en: "Adjusting the robot's resistance to displacement when forces are applied", es: "Ajustar la resistencia del robot al desplazamiento cuando se aplican fuerzas", de: "Anpassung des Roboterwiderstands gegen Verschiebung bei Kraftanwendung", nl: "Het aanpassen van de robotweerstand tegen verplaatsing wanneer krachten worden uitgeoefend" },
        { en: "Making robot joints mechanically rigid to prevent flexing", es: "Hacer que las articulaciones del robot sean mecánicamente rígidas para prevenir flexión", de: "Roboter-Gelenke mechanisch starr machen, um Biegung zu verhindern", nl: "Robotgewrichten mechanisch stijf maken om buiging te voorkomen" },
        { en: "Controlling the hardness of robot gripper materials", es: "Controlar la dureza de materiales de pinza de robot", de: "Steuerung der Härte von Roboter-Greifmaterialien", nl: "Het controleren van de hardheid van robotgrijpermaterialen" },
        { en: "Preventing robot joints from becoming loose over time", es: "Prevenir que las articulaciones del robot se aflojen con el tiempo", de: "Verhindern, dass Roboter-Gelenke mit der Zeit locker werden", nl: "Het voorkomen dat robotgewrichten losser worden over tijd" }
      ],
      correct: 0,
      explanation: {
        en: "Stiffness control allows robots to vary their compliance or resistance to external forces. By modulating stiffness, robots can be soft and safe for interaction, or stiff and precise for tasks requiring accuracy, adapting their mechanical behavior to different situations.",
        es: "El control de rigidez permite a los robots variar su complacencia o resistencia a fuerzas externas. Al modular la rigidez, los robots pueden ser suaves y seguros para interacción, o rígidos y precisos para tareas que requieren precisión, adaptando su comportamiento mecánico a diferentes situaciones.",
        de: "Steifigkeitskontrolle ermöglicht es Robotern, ihre Nachgiebigkeit oder ihren Widerstand gegen externe Kräfte zu variieren. Durch Modulation der Steifigkeit können Roboter weich und sicher für Interaktion oder steif und präzise für Aufgaben sein, die Genauigkeit erfordern, und ihr mechanisches Verhalten an verschiedene Situationen anpassen.",
        nl: "Stijfheidscontrole stelt robots in staat hun meegaandheid of weerstand tegen externe krachten te variëren. Door stijfheid te moduleren kunnen robots zacht en veilig zijn voor interactie, of stijf en nauwkeurig voor taken die precisie vereisen, hun mechanische gedrag aanpassend aan verschillende situaties."
      }
    },
    {
      question: {
        en: "What is the difference between active and passive compliance in robotics?",
        es: "¿Cuál es la diferencia entre complacencia activa y pasiva en robótica?",
        de: "Was ist der Unterschied zwischen aktiver und passiver Nachgiebigkeit in der Robotik?",
        nl: "Wat is het verschil tussen actieve en passieve meegaandheid in de robotica?"
      },
      options: [
        { en: "Active compliance is controlled electronically, passive compliance uses mechanical flexibility", es: "La complacencia activa es controlada electrónicamente, la complacencia pasiva usa flexibilidad mecánica", de: "Aktive Nachgiebigkeit wird elektronisch gesteuert, passive Nachgiebigkeit nutzt mechanische Flexibilität", nl: "Actieve meegaandheid wordt elektronisch gecontroleerd, passieve meegaandheid gebruikt mechanische flexibiliteit" },
        { en: "Active compliance requires human intervention, passive compliance is automatic", es: "La complacencia activa requiere intervención humana, la complacencia pasiva es automática", de: "Aktive Nachgiebigkeit erfordert menschlichen Eingriff, passive Nachgiebigkeit ist automatisch", nl: "Actieve meegaandheid vereist menselijke interventie, passieve meegaandheid is automatisch" },
        { en: "Active compliance works only during motion, passive compliance works at rest", es: "La complacencia activa funciona solo durante movimiento, la complacencia pasiva funciona en reposo", de: "Aktive Nachgiebigkeit funktioniert nur während Bewegung, passive Nachgiebigkeit funktioniert in Ruhe", nl: "Actieve meegaandheid werkt alleen tijdens beweging, passieve meegaandheid werkt in rust" },
        { en: "Active compliance is faster, passive compliance provides more precision", es: "La complacencia activa es más rápida, la complacencia pasiva proporciona más precisión", de: "Aktive Nachgiebigkeit ist schneller, passive Nachgiebigkeit bietet mehr Präzision", nl: "Actieve meegaandheid is sneller, passieve meegaandheid biedt meer precisie" }
      ],
      correct: 0,
      explanation: {
        en: "Active compliance uses sensors and control algorithms to modulate robot stiffness/compliance in real-time, while passive compliance relies on mechanical elements like springs or flexible joints that inherently provide compliance without active control.",
        es: "La complacencia activa usa sensores y algoritmos de control para modular la rigidez/complacencia del robot en tiempo real, mientras que la complacencia pasiva depende de elementos mecánicos como resortes o articulaciones flexibles que inherentemente proporcionan complacencia sin control activo.",
        de: "Aktive Nachgiebigkeit verwendet Sensoren und Steuerungsalgorithmen zur Echtzeitmodulation der Roboter-Steifigkeit/Nachgiebigkeit, während passive Nachgiebigkeit auf mechanische Elemente wie Federn oder flexible Gelenke angewiesen ist, die von Natur aus Nachgiebigkeit ohne aktive Steuerung bieten.",
        nl: "Actieve meegaandheid gebruikt sensoren en controle-algoritmen om robot stijfheid/meegaandheid in real-time te moduleren, terwijl passieve meegaandheid afhankelijk is van mechanische elementen zoals veren of flexibele gewrichten die inherent meegaandheid bieden zonder actieve controle."
      }
    },
    {
      question: {
        en: "What is slip detection in robotic grasping?",
        es: "¿Qué es la detección de deslizamiento en agarre robótico?",
        de: "Was ist Rutscherkennung beim robotischen Greifen?",
        nl: "Wat is glijdetectie in robotische grijpacties?"
      },
      options: [
        { en: "Sensing when objects begin to slide within the robot's grasp to prevent dropping", es: "Detectar cuando los objetos comienzan a deslizarse dentro del agarre del robot para prevenir caídas", de: "Erfassung, wann Objekte beginnen, im Roboter-Griff zu rutschen, um Fallenlassen zu verhindern", nl: "Het detecteren wanneer objecten beginnen te glijden binnen de robotgreep om vallen te voorkomen" },
        { en: "Detecting when robot joints become loose during operation", es: "Detectar cuando las articulaciones del robot se aflojan durante operación", de: "Erkennung, wann Roboter-Gelenke während des Betriebs locker werden", nl: "Het detecteren wanneer robotgewrichten losser worden tijdens werking" },
        { en: "Monitoring for slippery surface conditions in the work area", es: "Monitorear condiciones de superficie resbaladiza en el área de trabajo", de: "Überwachung rutschiger Oberflächenbedingungen im Arbeitsbereich", nl: "Het monitoren van gladde oppervlaktecondities in het werkgebied" },
        { en: "Checking for programming errors that cause unexpected robot movements", es: "Verificar errores de programación que causan movimientos inesperados del robot", de: "Überprüfung auf Programmierfehler, die unerwartete Roboterbewegungen verursachen", nl: "Het controleren op programmeerfouten die onverwachte robotbewegingen veroorzaken" }
      ],
      correct: 0,
      explanation: {
        en: "Slip detection uses tactile sensors to identify when an object starts to move or rotate within the robot's grasp, indicating loss of grip stability. Upon detecting slip, the robot can adjust grasp forces or reposition fingers to prevent the object from falling.",
        es: "La detección de deslizamiento usa sensores táctiles para identificar cuando un objeto comienza a moverse o rotar dentro del agarre del robot, indicando pérdida de estabilidad del agarre. Al detectar deslizamiento, el robot puede ajustar fuerzas de agarre o reposicionar dedos para prevenir que el objeto caiga.",
        de: "Rutscherkennung verwendet taktile Sensoren zur Identifizierung, wann ein Objekt beginnt, sich im Roboter-Griff zu bewegen oder zu drehen, was Verlust der Greifstabilität anzeigt. Bei Rutscherkennung kann der Roboter Greifkräfte anpassen oder Finger neu positionieren, um Fallenlassen des Objekts zu verhindern.",
        nl: "Glijdetectie gebruikt tactiele sensoren om te identificeren wanneer een object begint te bewegen of roteren binnen de robotgreep, wat verlies van grijpstabiliteit aangeeft. Bij het detecteren van glijden kan de robot grijpkrachten aanpassen of vingers herpositioneren om te voorkomen dat het object valt."
      }
    },
    {
      question: {
        en: "What is cooperative manipulation in multi-robot systems?",
        es: "¿Qué es la manipulación cooperativa en sistemas multi-robot?",
        de: "Was ist kooperative Manipulation in Multi-Roboter-Systemen?",
        nl: "Wat is coöperatieve manipulatie in multi-robot systemen?"
      },
      options: [
        { en: "Multiple robots working together to manipulate objects too large or complex for a single robot", es: "Múltiples robots trabajando juntos para manipular objetos demasiado grandes o complejos para un solo robot", de: "Mehrere Roboter arbeiten zusammen, um Objekte zu manipulieren, die zu groß oder komplex für einen einzelnen Roboter sind", nl: "Meerdere robots die samenwerken om objecten te manipuleren die te groot of complex zijn voor een enkele robot" },
        { en: "Robots sharing tools and equipment during manipulation tasks", es: "Robots compartiendo herramientas y equipo durante tareas de manipulación", de: "Roboter teilen Werkzeuge und Ausrüstung während Manipulationsaufgaben", nl: "Robots die gereedschappen en uitrusting delen tijdens manipulatietaken" },
        { en: "Programming robots to follow the same manipulation sequence", es: "Programar robots para seguir la misma secuencia de manipulación", de: "Programmierung von Robotern, um dieselbe Manipulationssequenz zu befolgen", nl: "Robots programmeren om dezelfde manipulatiesequentie te volgen" },
        { en: "Having robots observe and learn from each other's manipulation techniques", es: "Hacer que los robots observen y aprendan de las técnicas de manipulación de otros", de: "Roboter beobachten und lernen voneinander Manipulationstechniken", nl: "Robots laten observeren en leren van elkaars manipulatietechnieken" }
      ],
      correct: 0,
      explanation: {
        en: "Cooperative manipulation involves multiple robots physically coordinating to handle objects that exceed the capabilities of individual robots. This requires synchronized control, force coordination, and communication to manage shared loads and complex manipulation tasks.",
        es: "La manipulación cooperativa involucra múltiples robots coordinándose físicamente para manejar objetos que exceden las capacidades de robots individuales. Esto requiere control sincronizado, coordinación de fuerza y comunicación para manejar cargas compartidas y tareas de manipulación complejas.",
        de: "Kooperative Manipulation beinhaltet mehrere Roboter, die sich physisch koordinieren, um Objekte zu handhaben, die die Fähigkeiten einzelner Roboter übersteigen. Dies erfordert synchronisierte Steuerung, Kraftkoordination und Kommunikation zur Verwaltung geteilter Lasten und komplexer Manipulationsaufgaben.",
        nl: "Coöperatieve manipulatie houdt in dat meerdere robots fysiek coördineren om objecten te hanteren die de mogelijkheden van individuele robots overtreffen. Dit vereist gesynchroniseerde controle, krachtcoördinatie en communicatie om gedeelde belastingen en complexe manipulatietaken te beheren."
      }
    },
    {
      question: {
        en: "What is force closure in robotic grasping?",
        es: "¿Qué es el cierre de fuerza en agarre robótico?",
        de: "Was ist Kraftschluss beim robotischen Greifen?",
        nl: "Wat is krachtsluiting in robotische grijpacties?"
      },
      options: [
        { en: "A grasp configuration where contact forces alone can resist any external wrench applied to the object", es: "Una configuración de agarre donde las fuerzas de contacto solas pueden resistir cualquier llave externa aplicada al objeto", de: "Eine Greifkonfiguration, wo Kontaktkräfte allein jeder auf das Objekt angewandten externen Kraftschraube widerstehen können", nl: "Een grijpconfiguratie waarbij contactkrachten alleen elke externe kracht die op het object wordt uitgeoefend kunnen weerstaan" },
        { en: "The final closing motion when a gripper secures an object", es: "El movimiento de cierre final cuando una pinza asegura un objeto", de: "Die abschließende Schließbewegung, wenn ein Greifer ein Objekt sichert", nl: "De uiteindelijke sluitbeweging wanneer een grijper een object vasthoudt" },
        { en: "A safety mechanism that stops grasping when excessive force is detected", es: "Un mecanismo de seguridad que detiene el agarre cuando se detecta fuerza excesiva", de: "Ein Sicherheitsmechanismus, der das Greifen stoppt, wenn übermäßige Kraft erkannt wird", nl: "Een veiligheidsmechanisme dat grijpen stopt wanneer overmatige kracht wordt gedetecteerd" },
        { en: "The process of gradually increasing grip force until the object is secure", es: "El proceso de aumentar gradualmente la fuerza de agarre hasta que el objeto esté seguro", de: "Der Prozess der schrittweisen Erhöhung der Greifkraft, bis das Objekt sicher ist", nl: "Het proces van geleidelijk verhogen van grijpkracht totdat het object veilig is" }
      ],
      correct: 0,
      explanation: {
        en: "Force closure means that the grasp can resist any external forces or torques applied to the grasped object through appropriate contact forces alone, without requiring friction. This represents the most secure type of grasp possible in robotic manipulation.",
        es: "El cierre de fuerza significa que el agarre puede resistir cualquier fuerza externa o torques aplicados al objeto agarrado a través de fuerzas de contacto apropiadas solamente, sin requerir fricción. Esto representa el tipo más seguro de agarre posible en manipulación robótica.",
        de: "Kraftschluss bedeutet, dass der Griff jeder auf das gegriffene Objekt angewandten externen Kraft oder Drehmoment durch angemessene Kontaktkräfte allein widerstehen kann, ohne Reibung zu benötigen. Dies stellt die sicherste Art des Griffs dar, die in der robotischen Manipulation möglich ist.",
        nl: "Krachtsluiting betekent dat de greep elke externe kracht of koppel die op het gegrepen object wordt uitgeoefend kan weerstaan door alleen juiste contactkrachten, zonder wrijving te vereisen. Dit vertegenwoordigt het veiligste type greep mogelijk in robotische manipulatie."
      }
    },
    {
      question: {
        en: "What is the role of compliance in robotic manipulation tasks?",
        es: "¿Cuál es el papel de la complacencia en tareas de manipulación robótica?",
        de: "Was ist die Rolle der Nachgiebigkeit in robotischen Manipulationsaufgaben?",
        nl: "Wat is de rol van meegaandheid in robotische manipulatietaken?"
      },
      options: [
        { en: "Allowing robots to accommodate uncertainties, errors, and unexpected conditions during contact tasks", es: "Permitir a los robots acomodar incertidumbres, errores y condiciones inesperadas durante tareas de contacto", de: "Robotern ermöglichen, Unsicherheiten, Fehler und unerwartete Bedingungen während Kontaktaufgaben zu bewältigen", nl: "Robots toestaan om onzekerheden, fouten en onverwachte omstandigheden tijdens contacttaken te accommoderen" },
        { en: "Ensuring robots follow regulations and safety standards", es: "Asegurar que los robots sigan regulaciones y estándares de seguridad", de: "Sicherstellen, dass Roboter Vorschriften und Sicherheitsstandards befolgen", nl: "Verzekeren dat robots regelgeving en veiligheidsnormen volgen" },
        { en: "Making robots agreeable to human operators' requests", es: "Hacer que los robots sean agradables a las solicitudes de operadores humanos", de: "Roboter angenehm für Anfragen menschlicher Bediener machen", nl: "Robots aangenaam maken voor verzoeken van menselijke operators" },
        { en: "Enabling robots to work with flexible scheduling requirements", es: "Permitir a los robots trabajar con requisitos de programación flexibles", de: "Robotern ermöglichen, mit flexiblen Planungsanforderungen zu arbeiten", nl: "Robots in staat stellen om te werken met flexibele planningsvereisten" }
      ],
      correct: 0,
      explanation: {
        en: "Compliance in manipulation allows robots to handle imperfect positioning, part variations, and unexpected contacts gracefully. Instead of rigid motion that might cause jamming or damage, compliant control enables successful task completion even with uncertainties in the environment.",
        es: "La complacencia en manipulación permite a los robots manejar posicionamiento imperfecto, variaciones de partes y contactos inesperados con gracia. En lugar de movimiento rígido que podría causar atascos o daño, el control complaciente permite completar tareas exitosamente incluso con incertidumbres en el entorno.",
        de: "Nachgiebigkeit in der Manipulation ermöglicht es Robotern, unvollkommene Positionierung, Teilvariationen und unerwartete Kontakte elegant zu handhaben. Anstatt starrer Bewegung, die Verklemmen oder Schäden verursachen könnte, ermöglicht nachgiebige Steuerung erfolgreiche Aufgabenerfüllung selbst bei Unsicherheiten in der Umgebung.",
        nl: "Meegaandheid in manipulatie stelt robots in staat om onvolmaakte positionering, onderdeelvariaties en onverwachte contacten gracieus te hanteren. In plaats van starre beweging die vastlopen of schade zou kunnen veroorzaken, maakt meegaande controle succesvolle taakvoltooiing mogelijk zelfs met onzekerheden in de omgeving."
      }
    },
    {
      question: {
        en: "What is teleoperation in robotic manipulation?",
        es: "¿Qué es la teleoperación en manipulación robótica?",
        de: "Was ist Teleoperation in der robotischen Manipulation?",
        nl: "Wat is teleoperatie in robotische manipulatie?"
      },
      options: [
        { en: "Remote control of robot manipulators by human operators, often with force feedback", es: "Control remoto de manipuladores robóticos por operadores humanos, a menudo con retroalimentación de fuerza", de: "Fernsteuerung von Roboter-Manipulatoren durch menschliche Bediener, oft mit Kraftrückmeldung", nl: "Afstandsbediening van robotmanipulatoren door menselijke operators, vaak met kracht feedback" },
        { en: "Programming robots to operate autonomously over telecommunications networks", es: "Programar robots para operar autónomamente sobre redes de telecomunicaciones", de: "Programmierung von Robotern für autonomen Betrieb über Telekommunikationsnetze", nl: "Robots programmeren om autonoom te werken via telecommunicatienetwerken" },
        { en: "Using telephone systems to communicate with robot controllers", es: "Usar sistemas telefónicos para comunicarse con controladores de robot", de: "Verwendung von Telefonsystemen zur Kommunikation mit Roboter-Steuerungen", nl: "Het gebruik van telefoonsystemen om te communiceren met robotcontrollers" },
        { en: "Monitoring robot operations through television cameras", es: "Monitorear operaciones de robot a través de cámaras de televisión", de: "Überwachung von Roboter-Operationen durch Fernsehkameras", nl: "Het monitoren van robotoperaties via televisiecamera's" }
      ],
      correct: 0,
      explanation: {
        en: "Teleoperation enables human operators to control robots from a distance, combining human intelligence and dexterity with robotic precision and strength. Force feedback systems provide operators with haptic sensation of forces encountered by the remote robot.",
        es: "La teleoperación permite a operadores humanos controlar robots desde la distancia, combinando inteligencia y destreza humanas con precisión y fuerza robótica. Los sistemas de retroalimentación de fuerza proporcionan a los operadores sensación háptica de fuerzas encontradas por el robot remoto.",
        de: "Teleoperation ermöglicht es menschlichen Bedienern, Roboter aus der Ferne zu steuern, und kombiniert menschliche Intelligenz und Geschicklichkeit mit robotischer Präzision und Stärke. Kraftrückmeldungssysteme bieten Bedienern haptische Empfindung der vom entfernten Roboter angetroffenen Kräfte.",
        nl: "Teleoperatie stelt menselijke operators in staat om robots op afstand te besturen, waarbij menselijke intelligentie en behendigheid wordt gecombineerd met robotische precisie en kracht. Kracht feedback systemen bieden operators haptische sensatie van krachten die de robot op afstand tegenkomt."
      }
    },
    {
      question: {
        en: "What is impedance control in robotic manipulation?",
        es: "¿Qué es el control de impedancia en manipulación robótica?",
        de: "Was ist Impedanzsteuerung in der robotischen Manipulation?",
        nl: "Wat is impedantiecontrole in robotische manipulatie?"
      },
      options: [
        { en: "Controlling the dynamic relationship between force and motion to achieve desired mechanical behavior", es: "Controlar la relación dinámica entre fuerza y movimiento para lograr comportamiento mecánico deseado", de: "Steuerung der dynamischen Beziehung zwischen Kraft und Bewegung zur Erreichung gewünschten mechanischen Verhaltens", nl: "Het controleren van de dynamische relatie tussen kracht en beweging om gewenst mechanisch gedrag te bereiken" },
        { en: "Preventing electrical interference in robot control systems", es: "Prevenir interferencia eléctrica en sistemas de control de robots", de: "Verhinderung elektrischer Interferenz in Roboter-Steuerungssystemen", nl: "Het voorkomen van elektrische interferentie in robotbesturingssystemen" },
        { en: "Measuring the resistance of robot actuator circuits", es: "Medir la resistencia de circuitos de actuadores de robot", de: "Messung des Widerstands von Roboter-Aktuatorschaltungen", nl: "Het meten van de weerstand van robotactuatorcircuits" },
        { en: "Controlling the speed of data transmission in robot networks", es: "Controlar la velocidad de transmisión de datos en redes de robots", de: "Steuerung der Datenübertragungsgeschwindigkeit in Roboter-Netzwerken", nl: "Het controleren van de snelheid van datatransmissie in robotnetwerken" }
      ],
      correct: 0,
      explanation: {
        en: "Impedance control regulates the dynamic relationship between forces and velocities, making the robot behave like a mechanical system with specific mass, damping, and stiffness properties. This enables smooth interaction with environments and objects.",
        es: "El control de impedancia regula la relación dinámica entre fuerzas y velocidades, haciendo que el robot se comporte como un sistema mecánico con propiedades específicas de masa, amortiguación y rigidez. Esto permite interacción suave con entornos y objetos.",
        de: "Impedanzsteuerung reguliert die dynamische Beziehung zwischen Kräften und Geschwindigkeiten und lässt den Roboter wie ein mechanisches System mit spezifischen Masse-, Dämpfungs- und Steifigkeitseigenschaften verhalten. Dies ermöglicht glatte Interaktion mit Umgebungen und Objekten.",
        nl: "Impedantiecontrole reguleert de dynamische relatie tussen krachten en snelheden, waardoor de robot zich gedraagt als een mechanisch systeem met specifieke massa-, demping- en stijfheidseigenschappen. Dit maakt soepele interactie met omgevingen en objecten mogelijk."
      }
    },
    {
      question: {
        en: "What is fine motion manipulation in robotics?",
        es: "¿Qué es la manipulación de movimiento fino en robótica?",
        de: "Was ist Feinbewegungsmanipulation in der Robotik?",
        nl: "Wat is fijne bewegingsmanipulatie in de robotica?"
      },
      options: [
        { en: "Precise manipulation tasks requiring sub-millimeter accuracy and careful force control", es: "Tareas de manipulación precisas que requieren precisión sub-milimétrica y control cuidadoso de fuerza", de: "Präzise Manipulationsaufgaben, die sub-millimeter Genauigkeit und sorgfältige Kraftsteuerung erfordern", nl: "Precieze manipulatietaken die sub-millimeter nauwkeurigheid en zorgvuldige krachtcontrole vereisen" },
        { en: "Making very small adjustments to robot programming parameters", es: "Hacer ajustes muy pequeños a parámetros de programación de robot", de: "Sehr kleine Anpassungen an Roboter-Programmierungsparametern vornehmen", nl: "Zeer kleine aanpassingen maken aan robotprogrammeringsparameters" },
        { en: "Using miniature robot tools for manipulation tasks", es: "Usar herramientas de robot en miniatura para tareas de manipulación", de: "Verwendung von Miniatur-Roboter-Werkzeugen für Manipulationsaufgaben", nl: "Het gebruik van miniatuur robotgereedschappen voor manipulatietaken" },
        { en: "Training robots to handle delicate materials without damage", es: "Entrenar robots para manejar materiales delicados sin daño", de: "Roboter trainieren, empfindliche Materialien ohne Schäden zu handhaben", nl: "Robots trainen om delicate materialen zonder schade te hanteren" }
      ],
      correct: 0,
      explanation: {
        en: "Fine motion manipulation involves high-precision tasks like assembly operations with tight tolerances, surgical procedures, or electronics manufacturing where positioning accuracy and force control are critical for success.",
        es: "La manipulación de movimiento fino involucra tareas de alta precisión como operaciones de ensamblaje con tolerancias ajustadas, procedimientos quirúrgicos, o fabricación de electrónicos donde la precisión de posicionamiento y control de fuerza son críticos para el éxito.",
        de: "Feinbewegungsmanipulation umfasst hochpräzise Aufgaben wie Montageoperationen mit engen Toleranzen, chirurgische Verfahren oder Elektronikfertigung, wo Positionierungsgenauigkeit und Kraftsteuerung für den Erfolg kritisch sind.",
        nl: "Fijne bewegingsmanipulatie behelst hoge-precisie taken zoals assemblagebewerkingen met strakke toleranties, chirurgische procedures, of elektronica fabricage waar positioneringsnauwkeurigheid en krachtcontrole kritiek zijn voor succes."
      }
    },
    {
      question: {
        en: "What is contact transition in robotic manipulation?",
        es: "¿Qué es la transición de contacto en manipulación robótica?",
        de: "Was ist Kontaktübergang in der robotischen Manipulation?",
        nl: "Wat is contactovergang in robotische manipulatie?"
      },
      options: [
        { en: "The process of smoothly changing between different contact states during manipulation tasks", es: "El proceso de cambiar suavemente entre diferentes estados de contacto durante tareas de manipulación", de: "Der Prozess des glatten Wechsels zwischen verschiedenen Kontaktzuständen während Manipulationsaufgaben", nl: "Het proces van soepel veranderen tussen verschillende contacttoestanden tijdens manipulatietaken" },
        { en: "Switching from one communication protocol to another", es: "Cambiar de un protocolo de comunicación a otro", de: "Wechseln von einem Kommunikationsprotokoll zu einem anderen", nl: "Schakelen van het ene communicatieprotocol naar het andere" },
        { en: "Moving robots between different work stations", es: "Mover robots entre diferentes estaciones de trabajo", de: "Roboter zwischen verschiedenen Arbeitsstationen bewegen", nl: "Robots verplaatsen tussen verschillende werkstations" },
        { en: "Changing the robot's operating mode from manual to automatic", es: "Cambiar el modo operativo del robot de manual a automático", de: "Ändern des Roboter-Betriebsmodus von manuell zu automatisch", nl: "Het veranderen van de robotwerkingsmodus van handmatig naar automatisch" }
      ],
      correct: 0,
      explanation: {
        en: "Contact transitions occur when robots move from free space to contact, between different surfaces, or change contact configurations. Managing these transitions smoothly prevents impact forces and ensures stable manipulation throughout the task.",
        es: "Las transiciones de contacto ocurren cuando los robots se mueven del espacio libre al contacto, entre diferentes superficies, o cambian configuraciones de contacto. Gestionar estas transiciones suavemente previene fuerzas de impacto y asegura manipulación estable a lo largo de la tarea.",
        de: "Kontaktübergänge treten auf, wenn Roboter sich vom freien Raum zum Kontakt bewegen, zwischen verschiedenen Oberflächen oder Kontaktkonfigurationen wechseln. Die glatte Verwaltung dieser Übergänge verhindert Aufprallkräfte und gewährleistet stabile Manipulation während der gesamten Aufgabe.",
        nl: "Contactovergangen treden op wanneer robots bewegen van vrije ruimte naar contact, tussen verschillende oppervlakken, of contactconfiguraties veranderen. Het soepel beheren van deze overgangen voorkomt impactkrachten en verzekert stabiele manipulatie gedurende de hele taak."
      }
    },
    {
      question: {
        en: "What is the concept of virtual fixtures in robotic manipulation?",
        es: "¿Qué es el concepto de dispositivos virtuales en manipulación robótica?",
        de: "Was ist das Konzept virtueller Vorrichtungen in der robotischen Manipulation?",
        nl: "Wat is het concept van virtuele voorzieningen in robotische manipulatie?"
      },
      options: [
        { en: "Software-defined constraints that guide or limit robot motion for improved safety and precision", es: "Restricciones definidas por software que guían o limitan el movimiento del robot para mejorar seguridad y precisión", de: "Software-definierte Beschränkungen, die Roboterbewegung für verbesserte Sicherheit und Präzision führen oder begrenzen", nl: "Software-gedefinieerde beperkingen die robotbeweging leiden of beperken voor verbeterde veiligheid en precisie" },
        { en: "Digital representations of physical robot components", es: "Representaciones digitales de componentes físicos del robot", de: "Digitale Darstellungen physischer Roboter-Komponenten", nl: "Digitale representaties van fysieke robotcomponenten" },
        { en: "Simulated work environments for robot training", es: "Entornos de trabajo simulados para entrenamiento de robots", de: "Simulierte Arbeitsumgebungen für Roboter-Training", nl: "Gesimuleerde werkomgevingen voor robottraining" },
        { en: "Artificial attachment points for robot tools", es: "Puntos de fijación artificiales para herramientas de robot", de: "Künstliche Befestigungspunkte für Roboter-Werkzeuge", nl: "Kunstmatige bevestigingspunten voor robotgereedschappen" }
      ],
      correct: 0,
      explanation: {
        en: "Virtual fixtures are software-implemented guidance systems that provide assistance by constraining robot motion along desired paths or preventing movement into forbidden regions, enhancing both safety and task performance in teleoperated or semi-autonomous systems.",
        es: "Los dispositivos virtuales son sistemas de guía implementados por software que proporcionan asistencia restringiendo el movimiento del robot a lo largo de rutas deseadas o previniendo movimiento en regiones prohibidas, mejorando tanto seguridad como rendimiento de tareas en sistemas teleoperados o semi-autónomos.",
        de: "Virtuelle Vorrichtungen sind software-implementierte Führungssysteme, die Unterstützung bieten, indem sie Roboterbewegung entlang gewünschter Pfade beschränken oder Bewegung in verbotene Bereiche verhindern, wodurch sowohl Sicherheit als auch Aufgabenleistung in teleoperierten oder semi-autonomen Systemen verbessert werden.",
        nl: "Virtuele voorzieningen zijn software-geïmplementeerde geleidingssystemen die assistentie bieden door robotbeweging te beperken langs gewenste paden of beweging in verboden gebieden te voorkomen, wat zowel veiligheid als taakprestatie in telegeopereerde of semi-autonome systemen verbetert."
      }
    },
    {
      question: {
        en: "What is force/torque sensing in robotic manipulation?",
        es: "¿Qué es la detección de fuerza/torque en manipulación robótica?",
        de: "Was ist Kraft-/Drehmoment-Erfassung in der robotischen Manipulation?",
        nl: "Wat is kracht/koppel sensing in robotische manipulatie?"
      },
      options: [
        { en: "Measuring forces and torques applied by or to the robot during manipulation tasks", es: "Medir fuerzas y torques aplicados por o al robot durante tareas de manipulación", de: "Messung von Kräften und Drehmomenten, die von oder auf den Roboter während Manipulationsaufgaben angewendet werden", nl: "Het meten van krachten en koppels uitgeoefend door of op de robot tijdens manipulatietaken" },
        { en: "Detecting when robot joints need lubrication or maintenance", es: "Detectar cuándo las articulaciones del robot necesitan lubricación o mantenimiento", de: "Erkennung, wann Roboter-Gelenke Schmierung oder Wartung benötigen", nl: "Het detecteren wanneer robotgewrichten smering of onderhoud nodig hebben" },
        { en: "Monitoring the electrical power consumption of robot motors", es: "Monitorear el consumo de energía eléctrica de motores de robot", de: "Überwachung des elektrischen Energieverbrauchs von Roboter-Motoren", nl: "Het monitoren van het elektrische energieverbruik van robotmotoren" },
        { en: "Measuring the rotational speed of robot actuators", es: "Medir la velocidad rotacional de actuadores de robot", de: "Messung der Rotationsgeschwindigkeit von Roboter-Aktuatoren", nl: "Het meten van de rotatiesnelheid van robotactuatoren" }
      ],
      correct: 0,
      explanation: {
        en: "Force/torque sensors measure the six-dimensional wrench (three forces and three torques) at the robot's end-effector or wrist, providing essential feedback for force-controlled manipulation, contact detection, and compliant behavior.",
        es: "Los sensores de fuerza/torque miden la llave hexadimensional (tres fuerzas y tres torques) en el efector final o muñeca del robot, proporcionando retroalimentación esencial para manipulación controlada por fuerza, detección de contacto y comportamiento complaciente.",
        de: "Kraft-/Drehmoment-Sensoren messen die sechsdimensionale Kraftschraube (drei Kräfte und drei Drehmomente) am Endeffektor oder Handgelenk des Roboters und liefern wesentliche Rückmeldung für kraftgesteuerte Manipulation, Kontakterkennung und nachgiebiges Verhalten.",
        nl: "Kracht/koppel sensoren meten de zes-dimensionale wrench (drie krachten en drie koppels) op de robot-eindeffector of pols, wat essentiële feedback biedt voor kracht-gecontroleerde manipulatie, contactdetectie en meegaand gedrag."
      }
    },
    {
      question: {
        en: "What is assembly sequencing in robotic manufacturing?",
        es: "¿Qué es la secuenciación de ensamblaje en fabricación robótica?",
        de: "Was ist Montagesequenzierung in der robotischen Fertigung?",
        nl: "Wat is assemblage sequentiëring in robotische fabricage?"
      },
      options: [
        { en: "Planning the optimal order of assembly operations to minimize time and avoid geometric conflicts", es: "Planificar el orden óptimo de operaciones de ensamblaje para minimizar tiempo y evitar conflictos geométricos", de: "Planung der optimalen Reihenfolge von Montageoperationen zur Zeitminimierung und Vermeidung geometrischer Konflikte", nl: "Het plannen van de optimale volgorde van assemblagebewerkingen om tijd te minimaliseren en geometrische conflicten te vermijden" },
        { en: "Programming robots to follow DNA sequencing protocols", es: "Programar robots para seguir protocolos de secuenciación de ADN", de: "Programmierung von Robotern zur Befolgung von DNA-Sequenzierungsprotokollen", nl: "Robots programmeren om DNA-sequentieprotocollen te volgen" },
        { en: "Determining the production sequence for different product models", es: "Determinar la secuencia de producción para diferentes modelos de productos", de: "Bestimmung der Produktionssequenz für verschiedene Produktmodelle", nl: "Het bepalen van de productiesequentie voor verschillende productmodellen" },
        { en: "Organizing robot movements in chronological order", es: "Organizar movimientos de robot en orden cronológico", de: "Organisation von Roboterbewegungen in chronologischer Reihenfolge", nl: "Het organiseren van robotbewegingen in chronologische volgorde" }
      ],
      correct: 0,
      explanation: {
        en: "Assembly sequencing determines the order in which parts should be assembled to create a product efficiently while avoiding situations where later assembly steps become impossible due to geometric constraints or accessibility issues.",
        es: "La secuenciación de ensamblaje determina el orden en que las partes deben ensamblarse para crear un producto eficientemente mientras evita situaciones donde pasos posteriores de ensamblaje se vuelven imposibles debido a restricciones geométricas o problemas de accesibilidad.",
        de: "Montagesequenzierung bestimmt die Reihenfolge, in der Teile zusammengefügt werden sollten, um ein Produkt effizient zu erstellen, während Situationen vermieden werden, in denen spätere Montageschritte aufgrund geometrischer Beschränkungen oder Zugänglichkeitsproblemen unmöglich werden.",
        nl: "Assemblage sequentiëring bepaalt de volgorde waarin onderdelen moeten worden geassembleerd om een product efficiënt te maken terwijl situaties worden vermeden waar latere assemblage stappen onmogelijk worden door geometrische beperkingen of toegankelijkheidsproblemen."
      }
    },
    {
      question: {
        en: "What is the purpose of end-effector design in robotic manipulation?",
        es: "¿Cuál es el propósito del diseño de efector final en manipulación robótica?",
        de: "Was ist der Zweck des Endeffektor-Designs in der robotischen Manipulation?",
        nl: "Wat is het doel van eindeffector ontwerp in robotische manipulatie?"
      },
      options: [
        { en: "Creating specialized tools optimized for specific manipulation tasks and object types", es: "Crear herramientas especializadas optimizadas para tareas de manipulación específicas y tipos de objetos", de: "Erstellung spezialisierter Werkzeuge, die für spezifische Manipulationsaufgaben und Objekttypen optimiert sind", nl: "Het creëren van gespecialiseerde gereedschappen geoptimaliseerd voor specifieke manipulatietaken en objecttypen" },
        { en: "Improving the visual appearance of robot systems", es: "Mejorar la apariencia visual de sistemas de robot", de: "Verbesserung des visuellen Erscheinungsbilds von Roboter-Systemen", nl: "Het verbeteren van de visuele verschijning van robotsystemen" },
        { en: "Reducing the overall weight of the robot arm", es: "Reducir el peso total del brazo del robot", de: "Reduzierung des Gesamtgewichts des Roboterarms", nl: "Het verminderen van het totale gewicht van de robotarm" },
        { en: "Increasing the robot's maximum reach distance", es: "Aumentar la distancia máxima de alcance del robot", de: "Erhöhung der maximalen Reichweite des Roboters", nl: "Het verhogen van de maximale reikafstand van de robot" }
      ],
      correct: 0,
      explanation: {
        en: "End-effector design involves creating grippers, tools, or attachments that are specifically tailored to handle particular objects or perform specific tasks effectively, considering factors like object geometry, material properties, force requirements, and manipulation constraints.",
        es: "El diseño de efector final involucra crear pinzas, herramientas o accesorios que están específicamente adaptados para manejar objetos particulares o realizar tareas específicas efectivamente, considerando factores como geometría del objeto, propiedades del material, requisitos de fuerza y restricciones de manipulación.",
        de: "Endeffektor-Design beinhaltet die Erstellung von Greifern, Werkzeugen oder Anbauteilen, die speziell darauf zugeschnitten sind, bestimmte Objekte zu handhaben oder spezifische Aufgaben effektiv auszuführen, unter Berücksichtigung von Faktoren wie Objektgeometrie, Materialeigenschaften, Kraftanforderungen und Manipulationsbeschränkungen.",
        nl: "Eindeffector ontwerp houdt in het creëren van grijpers, gereedschappen of bevestigingen die specifiek zijn afgestemd op het hanteren van bepaalde objecten of het effectief uitvoeren van specifieke taken, overwegend factoren zoals objectgeometrie, materiaaleigenschappen, krachtvereisten en manipulatiebeperkingen."
      }
    },
    {
      question: {
        en: "What is object pose estimation in robotic manipulation?",
        es: "¿Qué es la estimación de pose de objeto en manipulación robótica?",
        de: "Was ist Objektposenschätzung in der robotischen Manipulation?",
        nl: "Wat is object pose schatting in robotische manipulatie?"
      },
      options: [
        { en: "Determining the position and orientation of objects in the robot's workspace", es: "Determinar la posición y orientación de objetos en el espacio de trabajo del robot", de: "Bestimmung der Position und Orientierung von Objekten im Arbeitsbereich des Roboters", nl: "Het bepalen van de positie en oriëntatie van objecten in de werkruimte van de robot" },
        { en: "Teaching robots to recognize human body postures", es: "Enseñar a los robots a reconocer posturas del cuerpo humano", de: "Robotern beibringen, menschliche Körperhaltungen zu erkennen", nl: "Robots leren om menselijke lichaamshoudingen te herkennen" },
        { en: "Calculating the optimal robot arm configuration", es: "Calcular la configuración óptima del brazo del robot", de: "Berechnung der optimalen Roboterarm-Konfiguration", nl: "Het berekenen van de optimale robotarm configuratie" },
        { en: "Estimating the time required for manipulation tasks", es: "Estimar el tiempo requerido para tareas de manipulación", de: "Schätzung der für Manipulationsaufgaben erforderlichen Zeit", nl: "Het schatten van de tijd vereist voor manipulatietaken" }
      ],
      correct: 0,
      explanation: {
        en: "Object pose estimation uses sensors (typically vision) to determine where objects are located and how they are oriented in space, providing essential information for planning grasps, approach trajectories, and manipulation strategies.",
        es: "La estimación de pose de objeto usa sensores (típicamente visión) para determinar dónde están ubicados los objetos y cómo están orientados en el espacio, proporcionando información esencial para planificar agarres, trayectorias de aproximación y estrategias de manipulación.",
        de: "Objektposenschätzung verwendet Sensoren (typischerweise Vision), um zu bestimmen, wo sich Objekte befinden und wie sie im Raum orientiert sind, und liefert wesentliche Informationen für die Planung von Griffen, Anflugbahnen und Manipulationsstrategien.",
        nl: "Object pose schatting gebruikt sensoren (typisch visie) om te bepalen waar objecten zich bevinden en hoe ze georiënteerd zijn in de ruimte, wat essentiële informatie biedt voor het plannen van grepen, naderingsbaanstukken en manipulatie strategieën."
      }
    },
    {
      question: {
        en: "What is dynamic manipulation in robotics?",
        es: "¿Qué es la manipulación dinámica en robótica?",
        de: "Was ist dynamische Manipulation in der Robotik?",
        nl: "Wat is dynamische manipulatie in de robotica?"
      },
      options: [
        { en: "Using momentum and dynamic effects to achieve manipulation tasks that exceed static capabilities", es: "Usar momentum y efectos dinámicos para lograr tareas de manipulación que exceden capacidades estáticas", de: "Verwendung von Impuls und dynamischen Effekten zur Erreichung von Manipulationsaufgaben, die statische Fähigkeiten übersteigen", nl: "Het gebruik van momentum en dynamische effecten om manipulatietaken te bereiken die statische capaciteiten overstijgen" },
        { en: "Continuously changing the robot's manipulation strategy during operation", es: "Cambiar continuamente la estrategia de manipulación del robot durante operación", de: "Kontinuierliche Änderung der Roboter-Manipulationsstrategie während des Betriebs", nl: "Continu veranderen van de robotmanipulatie strategie tijdens werking" },
        { en: "Adapting manipulation parameters based on environmental conditions", es: "Adaptar parámetros de manipulación basándose en condiciones ambientales", de: "Anpassung von Manipulationsparametern basierend auf Umweltbedingungen", nl: "Het aanpassen van manipulatieparameters gebaseerd op omgevingsomstandigheden" },
        { en: "Programming robots to learn new manipulation skills autonomously", es: "Programar robots para aprender nuevas habilidades de manipulación autónomamente", de: "Programmierung von Robotern zum autonomen Erlernen neuer Manipulationsfähigkeiten", nl: "Robots programmeren om nieuwe manipulatievaardigheden autonoom te leren" }
      ],
      correct: 0,
      explanation: {
        en: "Dynamic manipulation exploits dynamic forces, momentum, and time-varying contact conditions to perform tasks like throwing, catching, juggling, or non-prehensile manipulation that cannot be achieved through quasi-static approaches alone.",
        es: "La manipulación dinámica explota fuerzas dinámicas, momentum y condiciones de contacto variables en el tiempo para realizar tareas como lanzar, atrapar, hacer malabares, o manipulación no prensil que no puede lograrse solo a través de enfoques cuasi-estáticos.",
        de: "Dynamische Manipulation nutzt dynamische Kräfte, Impuls und zeitveränderliche Kontaktbedingungen, um Aufgaben wie Werfen, Fangen, Jonglieren oder nicht-greifende Manipulation durchzuführen, die durch quasi-statische Ansätze allein nicht erreicht werden können.",
        nl: "Dynamische manipulatie benut dynamische krachten, momentum en tijdvariërende contactcondities om taken uit te voeren zoals gooien, vangen, jongleren, of niet-grijpende manipulatie die niet kunnen worden bereikt door alleen quasi-statische benaderingen."
      }
    },
    {
      question: {
        en: "What is the role of friction modeling in robotic grasping?",
        es: "¿Cuál es el papel del modelado de fricción en agarre robótico?",
        de: "Was ist die Rolle der Reibungsmodellierung beim robotischen Greifen?",
        nl: "Wat is de rol van wrijvingsmodellering in robotische grijpacties?"
      },
      options: [
        { en: "Predicting slip conditions and determining stable grasp configurations", es: "Predecir condiciones de deslizamiento y determinar configuraciones estables de agarre", de: "Vorhersage von Rutschbedingungen und Bestimmung stabiler Greifkonfigurationen", nl: "Het voorspellen van glijcondities en bepalen van stabiele grijpconfiguraties" },
        { en: "Reducing wear on robot gripper surfaces", es: "Reducir desgaste en superficies de pinza de robot", de: "Reduzierung des Verschleißes an Roboter-Greifer-Oberflächen", nl: "Het verminderen van slijtage op robotgrijperoppervlakken" },
        { en: "Optimizing the lubrication of robot joints", es: "Optimizar la lubricación de articulaciones de robot", de: "Optimierung der Schmierung von Roboter-Gelenken", nl: "Het optimaliseren van de smering van robotgewrichten" },
        { en: "Calculating the heat generated during manipulation tasks", es: "Calcular el calor generado durante tareas de manipulación", de: "Berechnung der während Manipulationsaufgaben erzeugten Wärme", nl: "Het berekenen van de warmte gegenereerd tijdens manipulatietaken" }
      ],
      correct: 0,
      explanation: {
        en: "Friction modeling is crucial for understanding when objects will slip in a grasp and for determining the minimum grip forces needed for stable manipulation. It helps predict grasp quality and plan contact forces to prevent slipping while avoiding excessive gripping forces.",
        es: "El modelado de fricción es crucial para entender cuándo los objetos se deslizarán en un agarre y para determinar las fuerzas mínimas de agarre necesarias para manipulación estable. Ayuda a predecir calidad de agarre y planificar fuerzas de contacto para prevenir deslizamiento mientras evita fuerzas excesivas de agarre.",
        de: "Reibungsmodellierung ist entscheidend für das Verstehen, wann Objekte in einem Griff rutschen werden, und für die Bestimmung der minimalen Greifkräfte, die für stabile Manipulation benötigt werden. Sie hilft, Greifqualität vorherzusagen und Kontaktkräfte zu planen, um Rutschen zu verhindern und gleichzeitig übermäßige Greifkräfte zu vermeiden.",
        nl: "Wrijvingsmodellering is cruciaal voor het begrijpen wanneer objecten zullen glijden in een greep en voor het bepalen van de minimale grijpkrachten nodig voor stabiele manipulatie. Het helpt grijpkwaliteit voorspellen en contactkrachten plannen om glijden te voorkomen terwijl overmatige grijpkrachten worden vermeden."
      }
    },
    {
      question: {
        en: "What is shared control in robotic manipulation?",
        es: "¿Qué es el control compartido en manipulación robótica?",
        de: "Was ist geteilte Steuerung in der robotischen Manipulation?",
        nl: "Wat is gedeelde controle in robotische manipulatie?"
      },
      options: [
        { en: "A control paradigm where human operators and robot autonomy collaborate to perform manipulation tasks", es: "Un paradigma de control donde operadores humanos y autonomía de robot colaboran para realizar tareas de manipulación", de: "Ein Steuerungsparadigma, bei dem menschliche Bediener und Roboter-Autonomie zusammenarbeiten, um Manipulationsaufgaben durchzuführen", nl: "Een controle paradigma waarbij menselijke operators en robot autonomie samenwerken om manipulatietaken uit te voeren" },
        { en: "Dividing manipulation tasks equally between multiple robots", es: "Dividir tareas de manipulación igualmente entre múltiples robots", de: "Gleichmäßige Aufteilung von Manipulationsaufgaben zwischen mehreren Robotern", nl: "Het gelijk verdelen van manipulatietaken tussen meerdere robots" },
        { en: "Using shared memory for storing manipulation programs", es: "Usar memoria compartida para almacenar programas de manipulación", de: "Verwendung geteilten Speichers zur Speicherung von Manipulationsprogrammen", nl: "Het gebruik van gedeeld geheugen voor het opslaan van manipulatieprogramma's" },
        { en: "Controlling multiple end-effectors simultaneously", es: "Controlar múltiples efectores finales simultáneamente", de: "Gleichzeitige Steuerung mehrerer Endeffektoren", nl: "Het gelijktijdig controleren van meerdere eindeffectoren" }
      ],
      correct: 0,
      explanation: {
        en: "Shared control combines human intelligence and decision-making with robot precision and strength, allowing operators to provide high-level guidance while the robot handles low-level control details, improving both performance and reducing operator workload.",
        es: "El control compartido combina inteligencia humana y toma de decisiones con precisión y fuerza robótica, permitiendo a los operadores proporcionar guía de alto nivel mientras el robot maneja detalles de control de bajo nivel, mejorando tanto rendimiento como reduciendo carga de trabajo del operador.",
        de: "Geteilte Steuerung kombiniert menschliche Intelligenz und Entscheidungsfindung mit Roboter-Präzision und -Stärke und ermöglicht es Bedienern, hochrangige Führung zu bieten, während der Roboter Details der niedrigrangigen Steuerung handhabt, was sowohl Leistung verbessert als auch Bedienerbelastung reduziert.",
        nl: "Gedeelde controle combineert menselijke intelligentie en besluitvorming met robot precisie en kracht, waardoor operators hoog-niveau begeleiding kunnen bieden terwijl de robot laag-niveau controle details afhandelt, wat zowel prestatie verbetert als operator werkbelasting vermindert."
      }
    },
    {
      question: {
        en: "What is manipulation planning in robotics?",
        es: "¿Qué es la planificación de manipulación en robótica?",
        de: "Was ist Manipulationsplanung in der Robotik?",
        nl: "Wat is manipulatieplanning in de robotica?"
      },
      options: [
        { en: "Computing sequences of robot actions to achieve desired object configurations", es: "Calcular secuencias de acciones de robot para lograr configuraciones deseadas de objetos", de: "Berechnung von Sequenzen von Roboter-Aktionen zur Erreichung gewünschter Objektkonfigurationen", nl: "Het berekenen van sequenties van robotacties om gewenste objectconfiguraties te bereiken" },
        { en: "Designing the layout of robot workstations", es: "Diseñar el diseño de estaciones de trabajo de robot", de: "Entwurf des Layouts von Roboter-Arbeitsstationen", nl: "Het ontwerpen van de layout van robotwerkstations" },
        { en: "Scheduling maintenance activities for robot manipulators", es: "Programar actividades de mantenimiento para manipuladores de robot", de: "Planung von Wartungsaktivitäten für Roboter-Manipulatoren", nl: "Het plannen van onderhoudsactiviteiten voor robotmanipulatoren" },
        { en: "Organizing training programs for robot operators", es: "Organizar programas de entrenamiento para operadores de robot", de: "Organisation von Trainingsprogrammen für Roboter-Bediener", nl: "Het organiseren van trainingsprogramma's voor robotoperators" }
      ],
      correct: 0,
      explanation: {
        en: "Manipulation planning involves computing feasible sequences of robot motions, grasps, and manipulations to transform objects from initial to goal configurations while respecting physical constraints and avoiding collisions.",
        es: "La planificación de manipulación involucra calcular secuencias factibles de movimientos de robot, agarres y manipulaciones para transformar objetos de configuraciones iniciales a objetivo mientras respeta restricciones físicas y evita colisiones.",
        de: "Manipulationsplanung beinhaltet die Berechnung durchführbarer Sequenzen von Roboter-Bewegungen, Griffen und Manipulationen, um Objekte von Anfangs- zu Zielkonfigurationen zu transformieren, während physische Beschränkungen respektiert und Kollisionen vermieden werden.",
        nl: "Manipulatieplanning houdt in het berekenen van haalbare sequenties van robotbewegingen, grepen en manipulaties om objecten te transformeren van begin- naar doelconfiguraties terwijl fysieke beperkingen worden gerespecteerd en botsingen vermeden."
      }
    },
    {
      question: {
        en: "What is contact-rich manipulation in robotics?",
        es: "¿Qué es la manipulación rica en contacto en robótica?",
        de: "Was ist kontaktreiche Manipulation in der Robotik?",
        nl: "Wat is contact-rijke manipulatie in de robotica?"
      },
      options: [
        { en: "Manipulation tasks involving extensive physical interaction and contact with objects and surfaces", es: "Tareas de manipulación que involucran interacción física extensa y contacto con objetos y superficies", de: "Manipulationsaufgaben mit umfangreicher physischer Interaktion und Kontakt mit Objekten und Oberflächen", nl: "Manipulatietaken die uitgebreide fysieke interactie en contact met objecten en oppervlakken inhouden" },
        { en: "Tasks requiring communication with many external systems", es: "Tareas que requieren comunicación con muchos sistemas externos", de: "Aufgaben, die Kommunikation mit vielen externen Systemen erfordern", nl: "Taken die communicatie met veel externe systemen vereisen" },
        { en: "Manipulation involving expensive or valuable objects", es: "Manipulación que involucra objetos caros o valiosos", de: "Manipulation mit teuren oder wertvollen Objekten", nl: "Manipulatie met dure of waardevolle objecten" },
        { en: "Tasks with complex programming requirements", es: "Tareas con requisitos de programación complejos", de: "Aufgaben mit komplexen Programmierungsanforderungen", nl: "Taken met complexe programmeringsvereisten" }
      ],
      correct: 0,
      explanation: {
        en: "Contact-rich manipulation refers to tasks where robots must make and break contact with objects and environments frequently, requiring sophisticated force control, contact sensing, and planning to handle the complex physics of contact interactions.",
        es: "La manipulación rica en contacto se refiere a tareas donde los robots deben hacer y romper contacto con objetos y entornos frecuentemente, requiriendo control de fuerza sofisticado, detección de contacto y planificación para manejar la física compleja de interacciones de contacto.",
        de: "Kontaktreiche Manipulation bezieht sich auf Aufgaben, bei denen Roboter häufig Kontakt mit Objekten und Umgebungen herstellen und unterbrechen müssen, was ausgeklügelte Kraftsteuerung, Kontakterfassung und Planung erfordert, um die komplexe Physik von Kontaktinteraktionen zu handhaben.",
        nl: "Contact-rijke manipulatie verwijst naar taken waar robots frequent contact moeten maken en verbreken met objecten en omgevingen, wat geavanceerde krachtcontrole, contactdetectie en planning vereist om de complexe fysica van contactinteracties te hanteren."
      }
    },
    {
      question: {
        en: "What is the concept of grasp synthesis in robotics?",
        es: "¿Qué es el concepto de síntesis de agarre en robótica?",
        de: "Was ist das Konzept der Greifsynthese in der Robotik?",
        nl: "Wat is het concept van grijpsynthese in de robotica?"
      },
      options: [
        { en: "Automatically generating grasp configurations for novel objects based on their geometry and properties", es: "Generar automáticamente configuraciones de agarre para objetos novedosos basándose en su geometría y propiedades", de: "Automatische Generierung von Greifkonfigurationen für neuartige Objekte basierend auf ihrer Geometrie und Eigenschaften", nl: "Automatisch genereren van grijpconfiguraties voor nieuwe objecten gebaseerd op hun geometrie en eigenschappen" },
        { en: "Combining multiple simple grasps into complex manipulation sequences", es: "Combinar múltiples agarres simples en secuencias de manipulación complejas", de: "Kombination mehrerer einfacher Griffe zu komplexen Manipulationssequenzen", nl: "Het combineren van meerdere eenvoudige grepen in complexe manipulatiesequenties" },
        { en: "Creating artificial grip patterns for training purposes", es: "Crear patrones de agarre artificiales para propósitos de entrenamiento", de: "Erstellung künstlicher Greifmuster für Trainingszwecke", nl: "Het creëren van kunstmatige grijppatronen voor trainingsdoeleinden" },
        { en: "Designing new gripper mechanisms for specific applications", es: "Diseñar nuevos mecanismos de pinza para aplicaciones específicas", de: "Entwurf neuer Greifmechanismen für spezifische Anwendungen", nl: "Het ontwerpen van nieuwe grijpermechanismen voor specifieke toepassingen" }
      ],
      correct: 0,
      explanation: {
        en: "Grasp synthesis algorithms analyze object geometry, material properties, and task requirements to automatically compute stable grasp configurations, enabling robots to manipulate objects they haven't encountered before without manual grasp programming.",
        es: "Los algoritmos de síntesis de agarre analizan geometría de objeto, propiedades de material y requisitos de tarea para calcular automáticamente configuraciones estables de agarre, permitiendo a los robots manipular objetos que no han encontrado antes sin programación manual de agarre.",
        de: "Greifsynthese-Algorithmen analysieren Objektgeometrie, Materialeigenschaften und Aufgabenanforderungen, um automatisch stabile Greifkonfigurationen zu berechnen und Robotern zu ermöglichen, Objekte zu manipulieren, die sie zuvor nicht angetroffen haben, ohne manuelle Greifprogrammierung.",
        nl: "Grijpsynthese algoritmen analyseren objectgeometrie, materiaaleigenschappen en taakvereisten om automatisch stabiele grijpconfiguraties te berekenen, waardoor robots objecten kunnen manipuleren die ze nog niet eerder zijn tegengekomen zonder handmatige grijpprogrammering."
      }
    },
    {
      question: {
        en: "What is haptic feedback in robotic manipulation systems?",
        es: "¿Qué es la retroalimentación háptica en sistemas de manipulación robótica?",
        de: "Was ist haptische Rückmeldung in robotischen Manipulationssystemen?",
        nl: "Wat is haptische feedback in robotische manipulatiesystemen?"
      },
      options: [
        { en: "Providing tactile and force sensations to human operators controlling robots", es: "Proporcionar sensaciones táctiles y de fuerza a operadores humanos que controlan robots", de: "Bereitstellung taktiler und Kraftempfindungen für menschliche Bediener, die Roboter steuern", nl: "Het bieden van tactiele en krachtsensaties aan menselijke operators die robots besturen" },
        { en: "Using audio signals to indicate robot status", es: "Usar señales de audio para indicar estado del robot", de: "Verwendung von Audiosignalen zur Anzeige des Roboter-Status", nl: "Het gebruik van audiosignalen om robotstatus aan te geven" },
        { en: "Displaying visual feedback on robot control interfaces", es: "Mostrar retroalimentación visual en interfaces de control de robot", de: "Anzeige visueller Rückmeldung auf Roboter-Steuerungsschnittstellen", nl: "Het weergeven van visuele feedback op robotbesturingsinterfaces" },
        { en: "Recording manipulation performance data for analysis", es: "Grabar datos de rendimiento de manipulación para análisis", de: "Aufzeichnung von Manipulationsleistungsdaten zur Analyse", nl: "Het opnemen van manipulatieprestatie data voor analyse" }
      ],
      correct: 0,
      explanation: {
        en: "Haptic feedback transmits force and tactile information from the robot to the human operator, allowing them to 'feel' what the robot is touching and the forces it encounters, greatly enhancing the operator's ability to perform delicate manipulation tasks.",
        es: "La retroalimentación háptica transmite información de fuerza y táctil del robot al operador humano, permitiéndoles 'sentir' lo que el robot está tocando y las fuerzas que encuentra, mejorando enormemente la capacidad del operador para realizar tareas de manipulación delicadas.",
        de: "Haptische Rückmeldung überträgt Kraft- und taktile Informationen vom Roboter zum menschlichen Bediener und ermöglicht es ihnen, zu 'fühlen', was der Roboter berührt und welche Kräfte er antrifft, was die Fähigkeit des Bedieners zur Durchführung delikater Manipulationsaufgaben erheblich verbessert.",
        nl: "Haptische feedback transmitteert kracht- en tactiele informatie van de robot naar de menselijke operator, waardoor ze kunnen 'voelen' wat de robot aanraakt en de krachten die het tegenkomt, wat het vermogen van de operator om delicate manipulatietaken uit te voeren aanzienlijk verbetert."
      }
    },
    {
      question: {
        en: "What is the primary challenge in underwater robotic manipulation?",
        es: "¿Cuál es el desafío principal en manipulación robótica submarina?",
        de: "Was ist die Hauptherausforderung bei der robotischen Unterwassermanipulation?",
        nl: "Wat is de primaire uitdaging in onderwater robotische manipulatie?"
      },
      options: [
        { en: "Dealing with water resistance, buoyancy effects, and limited visibility affecting force control", es: "Lidiar con resistencia del agua, efectos de flotabilidad y visibilidad limitada afectando control de fuerza", de: "Umgang mit Wasserwiderstand, Auftriebseffekten und begrenzter Sichtbarkeit, die die Kraftsteuerung beeinträchtigen", nl: "Het omgaan met waterbestand, drijfeffecten en beperkte zichtbaarheid die krachtcontrole beïnvloeden" },
        { en: "Preventing electrical short circuits in robot systems", es: "Prevenir cortocircuitos eléctricos en sistemas de robot", de: "Verhinderung elektrischer Kurzschlüsse in Roboter-Systemen", nl: "Het voorkomen van elektrische kortsluitingen in robotsystemen" },
        { en: "Managing communication delays with surface control stations", es: "Gestionar retrasos de comunicación con estaciones de control de superficie", de: "Verwaltung von Kommunikationsverzögerungen mit Oberflächenkontrollstationen", nl: "Het beheren van communicatievertragingen met oppervlakte controlestations" },
        { en: "Protecting robots from marine life interference", es: "Proteger robots de interferencia de vida marina", de: "Schutz von Robotern vor Störungen durch Meeresleben", nl: "Robots beschermen tegen zeeleven interferentie" }
      ],
      correct: 0,
      explanation: {
        en: "Underwater manipulation faces unique challenges including water resistance that affects force transmission, buoyancy that changes effective object weights, pressure effects on sensors, and optical distortions that complicate vision-based control systems.",
        es: "La manipulación submarina enfrenta desafíos únicos incluyendo resistencia del agua que afecta transmisión de fuerza, flotabilidad que cambia pesos efectivos de objetos, efectos de presión en sensores, y distorsiones ópticas que complican sistemas de control basados en visión.",
        de: "Unterwassermanipulation steht vor einzigartigen Herausforderungen einschließlich Wasserwiderstand, der Kraftübertragung beeinflusst, Auftrieb, der effektive Objektgewichte verändert, Druckeffekte auf Sensoren und optische Verzerrungen, die visionbasierte Steuerungssysteme verkomplizieren.",
        nl: "Onderwater manipulatie staat voor unieke uitdagingen inclusief waterbestand dat krachttransmissie beïnvloedt, drijfkracht die effectieve objectgewichten verandert, drukeffecten op sensoren, en optische vervormingen die visie-gebaseerde controlesystemen compliceren."
      }
    },
    {
      question: {
        en: "What is non-prehensile manipulation in robotics?",
        es: "¿Qué es la manipulación no prensil en robótica?",
        de: "Was ist nicht-greifende Manipulation in der Robotik?",
        nl: "Wat is niet-grijpende manipulatie in de robotica?"
      },
      options: [
        { en: "Manipulating objects without grasping them, using pushing, sliding, or rolling actions", es: "Manipular objetos sin agarrarlos, usando acciones de empujar, deslizar o rodar", de: "Manipulation von Objekten ohne sie zu greifen, unter Verwendung von Schiebe-, Gleit- oder Rollbewegungen", nl: "Het manipuleren van objecten zonder ze te grijpen, gebruik makend van duw-, glijdings- of rolacties" },
        { en: "Manipulation tasks that don't require fine motor skills", es: "Tareas de manipulación que no requieren habilidades motoras finas", de: "Manipulationsaufgaben, die keine feinen motorischen Fähigkeiten erfordern", nl: "Manipulatietaken die geen fijne motorische vaardigheden vereisen" },
        { en: "Using tools that don't have gripping mechanisms", es: "Usar herramientas que no tienen mecanismos de agarre", de: "Verwendung von Werkzeugen ohne Greifmechanismen", nl: "Het gebruik van gereedschappen die geen grijpmechanismen hebben" },
        { en: "Manipulation performed without human supervision", es: "Manipulación realizada sin supervisión humana", de: "Manipulation ohne menschliche Überwachung", nl: "Manipulatie uitgevoerd zonder menselijk toezicht" }
      ],
      correct: 0,
      explanation: {
        en: "Non-prehensile manipulation achieves object repositioning and orientation changes through contact forces and motion without forming a grasp, often using techniques like pushing, sliding, pivoting, or rolling to manipulate objects.",
        es: "La manipulación no prensil logra reposicionamiento de objetos y cambios de orientación a través de fuerzas de contacto y movimiento sin formar un agarre, a menudo usando técnicas como empujar, deslizar, girar o rodar para manipular objetos.",
        de: "Nicht-greifende Manipulation erreicht Objektneupositionierung und Orientierungsänderungen durch Kontaktkräfte und Bewegung ohne Greifbildung, oft unter Verwendung von Techniken wie Schieben, Gleiten, Schwenken oder Rollen zur Objektmanipulation.",
        nl: "Niet-grijpende manipulatie bereikt objectherpositionering en oriëntatieveranderingen door contactkrachten en beweging zonder een greep te vormen, vaak technieken gebruikend zoals duwen, glijden, draaien of rollen om objecten te manipuleren."
      }
    },
    {
      question: {
        en: "What is the significance of workspace analysis in robotic manipulation?",
        es: "¿Cuál es la importancia del análisis de espacio de trabajo en manipulación robótica?",
        de: "Was ist die Bedeutung der Arbeitsraumanalyse in der robotischen Manipulation?",
        nl: "Wat is de betekenis van werkruimte analyse in robotische manipulatie?"
      },
      options: [
        { en: "Determining the reachable volume and dexterous regions for effective manipulation planning", es: "Determinar el volumen alcanzable y regiones diestras para planificación efectiva de manipulación", de: "Bestimmung des erreichbaren Volumens und geschickten Regionen für effektive Manipulationsplanung", nl: "Het bepalen van het bereikbare volume en behendigheid regio's voor effectieve manipulatieplanning" },
        { en: "Organizing the physical layout of robot work areas", es: "Organizar el diseño físico de áreas de trabajo de robot", de: "Organisation des physischen Layouts von Roboter-Arbeitsbereichen", nl: "Het organiseren van de fysieke layout van robotwerkgebieden" },
        { en: "Calculating the required floor space for robot installation", es: "Calcular el espacio de piso requerido para instalación de robot", de: "Berechnung des erforderlichen Bodenraums für Roboter-Installation", nl: "Het berekenen van de vereiste vloerruimte voor robotinstallatie" },
        { en: "Analyzing the ergonomics of human-robot work environments", es: "Analizar la ergonomía de entornos de trabajo humano-robot", de: "Analyse der Ergonomie von Mensch-Roboter-Arbeitsumgebungen", nl: "Het analyseren van de ergonomie van mens-robot werkomgevingen" }
      ],
      correct: 0,
      explanation: {
        en: "Workspace analysis characterizes the robot's reachable space, dexterous manipulation regions, and joint limit constraints, providing essential information for task planning, robot placement, and determining feasibility of manipulation operations.",
        es: "El análisis de espacio de trabajo caracteriza el espacio alcanzable del robot, regiones de manipulación diestra y restricciones de límites de articulaciones, proporcionando información esencial para planificación de tareas, colocación de robot y determinación de factibilidad de operaciones de manipulación.",
        de: "Arbeitsraumanalyse charakterisiert den erreichbaren Raum des Roboters, geschickte Manipulationsregionen und Gelenkgrenzenbeschränkungen und liefert wesentliche Informationen für Aufgabenplanung, Roboter-Platzierung und Bestimmung der Durchführbarkeit von Manipulationsoperationen.",
        nl: "Werkruimte analyse karakteriseert de robot's bereikbare ruimte, behendigheid manipulatie regio's en gewrichtslimiet beperkingen, wat essentiële informatie biedt voor taakplanning, robotplaatsing en het bepalen van haalbaarheid van manipulatiebewerkingen."
      }
    },
    {
      question: {
        en: "What is the purpose of calibration in robotic manipulation systems?",
        es: "¿Cuál es el propósito de la calibración en sistemas de manipulación robótica?",
        de: "Was ist der Zweck der Kalibrierung in robotischen Manipulationssystemen?",
        nl: "Wat is het doel van kalibratie in robotische manipulatiesystemen?"
      },
      options: [
        { en: "Correcting systematic errors in robot positioning and sensor measurements for improved accuracy", es: "Corregir errores sistemáticos en posicionamiento de robot y mediciones de sensores para precisión mejorada", de: "Korrektur systematischer Fehler in Roboter-Positionierung und Sensormessungen für verbesserte Genauigkeit", nl: "Het corrigeren van systematische fouten in robotpositionering en sensormetingen voor verbeterde nauwkeurigheid" },
        { en: "Setting up the initial configuration parameters for new robot installations", es: "Configurar parámetros de configuración inicial para nuevas instalaciones de robot", de: "Einrichtung der anfänglichen Konfigurationsparameter für neue Roboter-Installationen", nl: "Het instellen van de initiële configuratieparameters voor nieuwe robotinstallaties" },
        { en: "Training human operators to use robotic manipulation systems", es: "Entrenar operadores humanos para usar sistemas de manipulación robótica", de: "Schulung menschlicher Bediener zur Verwendung robotischer Manipulationssysteme", nl: "Het trainen van menselijke operators om robotische manipulatiesystemen te gebruiken" },
        { en: "Documenting the operational procedures for manipulation tasks", es: "Documentar procedimientos operacionales para tareas de manipulación", de: "Dokumentation der Betriebsverfahren für Manipulationsaufgaben", nl: "Het documenteren van operationele procedures voor manipulatietaken" }
      ],
      correct: 0,
      explanation: {
        en: "Calibration identifies and compensates for systematic errors in robot kinematics, sensor offsets, and environmental factors, ensuring that commanded positions match actual positions and that sensor readings accurately reflect real-world conditions.",
        es: "La calibración identifica y compensa errores sistemáticos en cinemática de robot, offsets de sensores y factores ambientales, asegurando que posiciones comandadas coincidan con posiciones reales y que lecturas de sensores reflejen con precisión condiciones del mundo real.",
        de: "Kalibrierung identifiziert und kompensiert systematische Fehler in Roboter-Kinematik, Sensor-Offsets und Umweltfaktoren und stellt sicher, dass befohlene Positionen mit tatsächlichen Positionen übereinstimmen und dass Sensorwerte reale Bedingungen genau widerspiegeln.",
        nl: "Kalibratie identificeert en compenseert voor systematische fouten in robotkinematica, sensor offsets en omgevingsfactoren, wat ervoor zorgt dat gecommandeerde posities overeenkomen met werkelijke posities en dat sensoruitlezingen nauwkeurig werkelijke omstandigheden weerspiegelen."
      }
    },
    {
      question: {
        en: "What is the role of compliance in assembly operations?",
        es: "¿Cuál es el papel de la complacencia en operaciones de ensamblaje?",
        de: "Was ist die Rolle der Nachgiebigkeit in Montageoperationen?",
        nl: "Wat is de rol van meegaandheid in assemblagebewerkingen?"
      },
      options: [
        { en: "Accommodating part tolerances and positioning errors during insertion and mating operations", es: "Acomodar tolerancias de partes y errores de posicionamiento durante operaciones de inserción y acoplamiento", de: "Bewältigung von Teiletoleranzen und Positionierungsfehlern während Einfügungs- und Paarungsoperationen", nl: "Het accommoderen van onderdeeltoleranties en positioneringsfouten tijdens invoeg- en paringsbewerkingen" },
        { en: "Following manufacturing regulations and quality standards", es: "Seguir regulaciones de fabricación y estándares de calidad", de: "Befolgung von Fertigungsvorschriften und Qualitätsstandards", nl: "Het volgen van fabricageregulaties en kwaliteitsnormen" },
        { en: "Ensuring worker safety during automated assembly processes", es: "Asegurar seguridad del trabajador durante procesos de ensamblaje automatizados", de: "Gewährleistung der Arbeitersicherheit während automatisierter Montageprozesse", nl: "Het verzekeren van werkerveiligheid tijdens geautomatiseerde assemblageprocessen" },
        { en: "Maintaining consistent assembly cycle times", es: "Mantener tiempos de ciclo de ensamblaje consistentes", de: "Aufrechterhaltung konsistenter Montagezykluszeiten", nl: "Het behouden van consistente assemblage cyclustijden" }
      ],
      correct: 0,
      explanation: {
        en: "Compliance in assembly allows robots to compensate for inevitable part variations, positioning uncertainties, and small misalignments by yielding to contact forces, enabling successful insertion and mating operations that would fail with rigid control.",
        es: "La complacencia en ensamblaje permite a los robots compensar variaciones inevitables de partes, incertidumbres de posicionamiento y pequeñas desalineaciones cediendo a fuerzas de contacto, permitiendo operaciones exitosas de inserción y acoplamiento que fallarían con control rígido.",
        de: "Nachgiebigkeit in der Montage ermöglicht es Robotern, unvermeidliche Teilvariationen, Positionierungsunsicherheiten und kleine Fehlausrichtungen durch Nachgeben bei Kontaktkräften zu kompensieren und erfolgreiche Einfügungs- und Paarungsoperationen zu ermöglichen, die bei starrer Steuerung fehlschlagen würden.",
        nl: "Meegaandheid in assemblage stelt robots in staat om onvermijdelijke onderdeelvariaties, positioneringsonzekerheden en kleine misalignments te compenseren door mee te geven aan contactkrachten, wat succesvolle invoeg- en paringsbewerkingen mogelijk maakt die zouden falen met starre controle."
      }
    },
    {
      question: {
        en: "What is the fundamental principle of force-controlled robotic insertion?",
        es: "¿Cuál es el principio fundamental de inserción robótica controlada por fuerza?",
        de: "Was ist das grundlegende Prinzip kraftgesteuerter robotischer Einfügung?",
        nl: "Wat is het fundamentele principe van kracht-gecontroleerde robotische invoering?"
      },
      options: [
        { en: "Using force feedback to guide part alignment and prevent jamming during insertion", es: "Usar retroalimentación de fuerza para guiar alineación de partes y prevenir atascos durante inserción", de: "Verwendung von Kraftrückmeldung zur Führung der Teileausrichtung und Verhinderung von Verklemmen während der Einfügung", nl: "Het gebruik van kracht feedback om onderdeel uitlijning te geleiden en vastlopen tijdens invoering te voorkomen" },
        { en: "Applying maximum force to ensure complete insertion", es: "Aplicar fuerza máxima para asegurar inserción completa", de: "Anwendung maximaler Kraft zur Gewährleistung vollständiger Einfügung", nl: "Het toepassen van maximale kracht om volledige invoering te verzekeren" },
        { en: "Maintaining constant insertion velocity regardless of resistance", es: "Mantener velocidad de inserción constante independientemente de resistencia", de: "Aufrechterhaltung konstanter Einfügungsgeschwindigkeit unabhängig vom Widerstand", nl: "Het handhaven van constante invoeringssnelheid ongeacht weerstand" },
        { en: "Using visual guidance exclusively for insertion operations", es: "Usar guía visual exclusivamente para operaciones de inserción", de: "Ausschließliche Verwendung visueller Führung für Einfügungsoperationen", nl: "Het exclusief gebruiken van visuele geleiding voor invoegbewerkingen" }
      ],
      correct: 0,
      explanation: {
        en: "Force-controlled insertion monitors contact forces during the insertion process, using this feedback to detect and correct misalignments, adjust approach angles, and prevent jamming by controlling insertion forces rather than relying solely on position control.",
        es: "La inserción controlada por fuerza monitorea fuerzas de contacto durante el proceso de inserción, usando esta retroalimentación para detectar y corregir desalineaciones, ajustar ángulos de aproximación y prevenir atascos controlando fuerzas de inserción en lugar de depender solo del control de posición.",
        de: "Kraftgesteuerte Einfügung überwacht Kontaktkräfte während des Einfügungsprozesses und verwendet diese Rückmeldung zur Erkennung und Korrektur von Fehlausrichtungen, Anpassung von Annäherungswinkeln und Verhinderung von Verklemmen durch Steuerung der Einfügungskräfte anstatt sich nur auf Positionskontrolle zu verlassen.",
        nl: "Kracht-gecontroleerde invoering monitort contactkrachten tijdens het invoeringsproces, deze feedback gebruikend om misalignments te detecteren en corrigeren, naderingshoeken aan te passen en vastlopen te voorkomen door invoegkrachten te controleren in plaats van alleen op positiecontrole te vertrouwen."
      }
    },
    {
      question: {
        en: "What is soft robotics and its key advantages?",
        es: "¿Qué es la robótica blanda y cuáles son sus ventajas clave?",
        de: "Was ist Soft-Robotik und ihre wichtigsten Vorteile?",
        nl: "Wat is zachte robotica en zijn belangrijkste voordelen?"
      },
      options: [
        { en: "Robots made from compliant materials that safely interact with environments and humans", es: "Robots hechos de materiales flexibles que interactúan de forma segura con entornos y humanos", de: "Roboter aus nachgiebigen Materialien, die sicher mit Umgebungen und Menschen interagieren", nl: "Robots gemaakt van meegaande materialen die veilig interacteren met omgevingen en mensen" },
        { en: "Software-based robots that exist only in digital environments", es: "Robots basados en software que existen solo en entornos digitales", de: "Software-basierte Roboter, die nur in digitalen Umgebungen existieren", nl: "Software-gebaseerde robots die alleen in digitale omgevingen bestaan" },
        { en: "Robots with reduced computational requirements", es: "Robots con requisitos computacionales reducidos", de: "Roboter mit reduzierten Rechenanforderungen", nl: "Robots met verminderde computationele vereisten" },
        { en: "Robots designed for low-impact applications", es: "Robots diseñados para aplicaciones de bajo impacto", de: "Roboter für Anwendungen mit geringem Einfluss entwickelt", nl: "Robots ontworpen voor toepassingen met lage impact" }
      ],
      correct: 0,
      explanation: {
        en: "Soft robotics uses compliant materials like elastomers and flexible actuators, enabling inherent safety in human interaction, adaptation to irregular shapes, and damage resistance, making them ideal for medical, food handling, and delicate manipulation applications.",
        es: "La robótica blanda usa materiales flexibles como elastómeros y actuadores flexibles, permitiendo seguridad inherente en interacción humana, adaptación a formas irregulares y resistencia al daño, haciéndolos ideales para aplicaciones médicas, manejo de alimentos y manipulación delicada.",
        de: "Soft-Robotik verwendet nachgiebige Materialien wie Elastomere und flexible Aktuatoren und ermöglicht inhärente Sicherheit bei menschlicher Interaktion, Anpassung an unregelmäßige Formen und Beschädigungsresistenz, wodurch sie ideal für medizinische, Lebensmittelhandhabung und delikate Manipulationsanwendungen werden.",
        nl: "Zachte robotica gebruikt meegaande materialen zoals elastomeren en flexibele actuatoren, wat inherente veiligheid mogelijk maakt bij menselijke interactie, aanpassing aan onregelmatige vormen en schadebestendigheid, waardoor ze ideaal zijn voor medische, voedselverwerking en delicate manipulatietoepassingen."
      }
    },
    {
      question: {
        en: "What is swarm robotics and its main principles?",
        es: "¿Qué es la robótica de enjambre y sus principios principales?",
        de: "Was ist Schwarmrobotik und ihre Hauptprinzipien?",
        nl: "Wat is zwermrobotica en zijn hoofdprincipes?"
      },
      options: [
        { en: "Coordinating large numbers of simple robots to achieve complex collective behaviors through local interactions", es: "Coordinar grandes números de robots simples para lograr comportamientos colectivos complejos a través de interacciones locales", de: "Koordination großer Anzahlen einfacher Roboter zur Erreichung komplexer kollektiver Verhaltensweisen durch lokale Interaktionen", nl: "Het coördineren van grote aantallen eenvoudige robots om complexe collectieve gedragingen te bereiken door lokale interacties" },
        { en: "Programming multiple robots to perform identical tasks simultaneously", es: "Programar múltiples robots para realizar tareas idénticas simultáneamente", de: "Programmierung mehrerer Roboter zur gleichzeitigen Ausführung identischer Aufgaben", nl: "Het programmeren van meerdere robots om identieke taken gelijktijdig uit te voeren" },
        { en: "Using artificial intelligence to control robot behavior", es: "Usar inteligencia artificial para controlar comportamiento de robot", de: "Verwendung künstlicher Intelligenz zur Steuerung des Roboterverhaltens", nl: "Het gebruik van kunstmatige intelligentie om robotgedrag te controleren" },
        { en: "Designing robots that can replicate themselves", es: "Diseñar robots que pueden replicarse a sí mismos", de: "Entwicklung von Robotern, die sich selbst replizieren können", nl: "Het ontwerpen van robots die zichzelf kunnen repliceren" }
      ],
      correct: 0,
      explanation: {
        en: "Swarm robotics applies principles from biological swarms like ant colonies, where simple individuals following basic rules create emergent collective intelligence capable of complex tasks like path finding, area coverage, and distributed sensing.",
        es: "La robótica de enjambre aplica principios de enjambres biológicos como colonias de hormigas, donde individuos simples siguiendo reglas básicas crean inteligencia colectiva emergente capaz de tareas complejas como búsqueda de caminos, cobertura de área y detección distribuida.",
        de: "Schwarmrobotik wendet Prinzipien biologischer Schwärme wie Ameisenkolonien an, wo einfache Individuen, die grundlegenden Regeln folgen, emergente kollektive Intelligenz schaffen, die komplexe Aufgaben wie Pfadfindung, Flächenabdeckung und verteilte Sensorik bewältigen kann.",
        nl: "Zwermrobotica past principes toe van biologische zwermen zoals mierenkolonies, waar eenvoudige individuen die basale regels volgen emergente collectieve intelligentie creëren die complexe taken kan uitvoeren zoals pad vinden, gebiedbedekking en gedistribueerde detectie."
      }
    },
    {
      question: {
        en: "What is continuum robotics?",
        es: "¿Qué es la robótica continua?",
        de: "Was ist Kontinuum-Robotik?",
        nl: "Wat is continuüm robotica?"
      },
      options: [
        { en: "Robots with continuous backbone structures that can bend and deform like biological appendages", es: "Robots con estructuras de columna continuas que pueden doblarse y deformarse como apéndices biológicos", de: "Roboter mit kontinuierlichen Rückgratstrukturen, die sich wie biologische Anhängsel biegen und verformen können", nl: "Robots met continue ruggengraat structuren die kunnen buigen en vervormen zoals biologische aanhangsels" },
        { en: "Robots that operate continuously without breaks", es: "Robots que operan continuamente sin descansos", de: "Roboter, die kontinuierlich ohne Pausen arbeiten", nl: "Robots die continu werken zonder onderbrekingen" },
        { en: "Robots with seamless joint connections", es: "Robots con conexiones de articulaciones sin costuras", de: "Roboter mit nahtlosen Gelenkverbindungen", nl: "Robots met naadloze gewrichtsverbindingen" },
        { en: "Robots designed for continuous motion paths", es: "Robots diseñados para trayectorias de movimiento continuas", de: "Roboter für kontinuierliche Bewegungspfade entwickelt", nl: "Robots ontworpen voor continue bewegingspaden" }
      ],
      correct: 0,
      explanation: {
        en: "Continuum robots feature flexible backbones without discrete joints, enabling snake-like or elephant trunk-like motion through continuous bending and extension, making them ideal for minimally invasive surgery, inspection in confined spaces, and biological applications.",
        es: "Los robots continuos tienen columnas flexibles sin articulaciones discretas, permitiendo movimiento similar a serpiente o trompa de elefante a través de doblado y extensión continuos, haciéndolos ideales para cirugía mínimamente invasiva, inspección en espacios confinados y aplicaciones biológicas.",
        de: "Kontinuum-Roboter verfügen über flexible Rückgrate ohne diskrete Gelenke und ermöglichen schlangenartige oder elefantenrüsselartige Bewegungen durch kontinuierliches Biegen und Strecken, wodurch sie ideal für minimal-invasive Chirurgie, Inspektion in engen Räumen und biologische Anwendungen werden.",
        nl: "Continuüm robots hebben flexibele ruggengraten zonder discrete gewrichten, wat slangachtige of olifantsslurf-achtige beweging mogelijk maakt door continue buiging en uitbreiding, waardoor ze ideaal zijn voor minimaal invasieve chirurgie, inspectie in beperkte ruimtes en biologische toepassingen."
      }
    },
    {
      question: {
        en: "What is morphological computation in robotics?",
        es: "¿Qué es la computación morfológica en robótica?",
        de: "Was ist morphologische Berechnung in der Robotik?",
        nl: "Wat is morfologische berekening in robotica?"
      },
      options: [
        { en: "Using the robot's physical structure and material properties to perform computation and simplify control", es: "Usar la estructura física del robot y propiedades de material para realizar computación y simplificar control", de: "Verwendung der physischen Struktur und Materialeigenschaften des Roboters zur Durchführung von Berechnungen und Vereinfachung der Steuerung", nl: "Het gebruik van de fysieke structuur en materiaaleigenschappen van de robot om berekeningen uit te voeren en controle te vereenvoudigen" },
        { en: "Analyzing the geometric shape of robot components", es: "Analizar la forma geométrica de componentes de robot", de: "Analyse der geometrischen Form von Roboterkomponenten", nl: "Het analyseren van de geometrische vorm van robotcomponenten" },
        { en: "Computing optimal robot configurations for specific tasks", es: "Computar configuraciones óptimas de robot para tareas específicas", de: "Berechnung optimaler Roboterkonfigurationen für spezifische Aufgaben", nl: "Het berekenen van optimale robotconfiguraties voor specifieke taken" },
        { en: "Using machine learning to optimize robot design", es: "Usar aprendizaje automático para optimizar diseño de robot", de: "Verwendung maschinellen Lernens zur Optimierung des Roboter-Designs", nl: "Het gebruik van machine learning om robotontwerp te optimaliseren" }
      ],
      correct: 0,
      explanation: {
        en: "Morphological computation exploits the robot's body dynamics, passive compliance, and material properties to achieve behaviors that would otherwise require complex control algorithms, effectively shifting computational load from software to hardware design.",
        es: "La computación morfológica explota la dinámica del cuerpo del robot, compliance pasiva y propiedades de material para lograr comportamientos que de otra manera requerirían algoritmos de control complejos, efectivamente cambiando carga computacional de software a diseño de hardware.",
        de: "Morphologische Berechnung nutzt die Körperdynamik des Roboters, passive Nachgiebigkeit und Materialeigenschaften zur Erreichung von Verhaltensweisen, die andernfalls komplexe Steuerungsalgorithmen erfordern würden, wodurch die Rechenlast effektiv von Software auf Hardware-Design verlagert wird.",
        nl: "Morfologische berekening benut de lichaamsynamiek van de robot, passieve meegaandheid en materiaaleigenschappen om gedragingen te bereiken die anders complexe controle algoritmen zouden vereisen, waardoor computationele belasting effectief wordt verschoven van software naar hardware ontwerp."
      }
    },
    {
      question: {
        en: "What is bio-inspired robotics?",
        es: "¿Qué es la robótica bio-inspirada?",
        de: "Was ist bio-inspirierte Robotik?",
        nl: "Wat is bio-geïnspireerde robotica?"
      },
      options: [
        { en: "Designing robots by mimicking biological structures, mechanisms, and behaviors found in nature", es: "Diseñar robots imitando estructuras biológicas, mecanismos y comportamientos encontrados en la naturaleza", de: "Entwicklung von Robotern durch Nachahmung biologischer Strukturen, Mechanismen und Verhaltensweisen aus der Natur", nl: "Het ontwerpen van robots door biologische structuren, mechanismen en gedragingen uit de natuur na te bootsen" },
        { en: "Robots designed to work in biological research laboratories", es: "Robots diseñados para trabajar en laboratorios de investigación biológica", de: "Roboter für die Arbeit in biologischen Forschungslaboren entwickelt", nl: "Robots ontworpen om in biologische onderzoekslaboratoria te werken" },
        { en: "Using biological materials in robot construction", es: "Usar materiales biológicos en construcción de robots", de: "Verwendung biologischer Materialien im Roboterbau", nl: "Het gebruik van biologische materialen in robotconstructie" },
        { en: "Robots powered by biological energy sources", es: "Robots alimentados por fuentes de energía biológicas", de: "Roboter, die von biologischen Energiequellen angetrieben werden", nl: "Robots aangedreven door biologische energiebronnen" }
      ],
      correct: 0,
      explanation: {
        en: "Bio-inspired robotics draws from millions of years of evolution, incorporating principles from animal locomotion, sensory systems, and behaviors to create robots with enhanced capabilities like gecko-inspired climbing, bird-inspired flight, and fish-inspired swimming.",
        es: "La robótica bio-inspirada se basa en millones de años de evolución, incorporando principios de locomoción animal, sistemas sensoriales y comportamientos para crear robots con capacidades mejoradas como escalada inspirada en gecko, vuelo inspirado en aves y natación inspirada en peces.",
        de: "Bio-inspirierte Robotik schöpft aus Millionen von Jahren der Evolution und integriert Prinzipien von Tierlokomtion, Sinnessystemen und Verhaltensweisen zur Schaffung von Robotern mit erweiterten Fähigkeiten wie gecko-inspiriertes Klettern, vogel-inspiriertes Fliegen und fisch-inspiriertes Schwimmen.",
        nl: "Bio-geïnspireerde robotica put uit miljoenen jaren evolutie, principes incorporerend van dierlijke voortbeweging, zintuiglijke systemen en gedragingen om robots te creëren met verbeterde mogelijkheden zoals gekko-geïnspireerd klimmen, vogel-geïnspireerd vliegen en vis-geïnspireerd zwemmen."
      }
    },
    {
      question: {
        en: "What is the concept of embodied intelligence in robotics?",
        es: "¿Cuál es el concepto de inteligencia encarnada en robótica?",
        de: "Was ist das Konzept verkörperter Intelligenz in der Robotik?",
        nl: "Wat is het concept van belichaamde intelligentie in robotica?"
      },
      options: [
        { en: "Intelligence emerging from the interaction between the robot's body, brain, and environment", es: "Inteligencia emergente de la interacción entre el cuerpo, cerebro y ambiente del robot", de: "Intelligenz, die aus der Interaktion zwischen Roboterkörper, Gehirn und Umgebung entsteht", nl: "Intelligentie die voortkomt uit de interactie tussen het lichaam, brein en omgeving van de robot" },
        { en: "Artificial intelligence systems physically integrated into robot hardware", es: "Sistemas de inteligencia artificial físicamente integrados en hardware de robot", de: "Künstliche Intelligenz-Systeme, die physisch in Roboter-Hardware integriert sind", nl: "Kunstmatige intelligentie systemen fysiek geïntegreerd in robot hardware" },
        { en: "Robots that can think about their own physical structure", es: "Robots que pueden pensar sobre su propia estructura física", de: "Roboter, die über ihre eigene physische Struktur nachdenken können", nl: "Robots die kunnen nadenken over hun eigen fysieke structuur" },
        { en: "Intelligence algorithms optimized for robotic applications", es: "Algoritmos de inteligencia optimizados para aplicaciones robóticas", de: "Intelligenz-Algorithmen, die für robotische Anwendungen optimiert sind", nl: "Intelligentie algoritmen geoptimaliseerd voor robotische toepassingen" }
      ],
      correct: 0,
      explanation: {
        en: "Embodied intelligence recognizes that intelligent behavior emerges not just from computation but from the complex interplay between physical morphology, sensorimotor experiences, and environmental interactions, challenging purely computational views of intelligence.",
        es: "La inteligencia encarnada reconoce que el comportamiento inteligente emerge no solo de computación sino de la interacción compleja entre morfología física, experiencias sensoriomotoras e interacciones ambientales, desafiando visiones puramente computacionales de inteligencia.",
        de: "Verkörperte Intelligenz erkennt, dass intelligentes Verhalten nicht nur aus Berechnungen entsteht, sondern aus dem komplexen Zusammenspiel zwischen physischer Morphologie, sensomotorischen Erfahrungen und Umweltinteraktionen, was rein rechnerische Ansichten von Intelligenz in Frage stellt.",
        nl: "Belichaamde intelligentie erkent dat intelligent gedrag niet alleen voortkomt uit berekeningen maar uit het complexe samenspel tussen fysieke morfologie, sensomotorische ervaringen en omgevingsinteracties, wat puur computationele visies op intelligentie uitdaagt."
      }
    },
    {
      question: {
        en: "What is developmental robotics?",
        es: "¿Qué es la robótica del desarrollo?",
        de: "Was ist Entwicklungsrobotik?",
        nl: "Wat is ontwikkelingsrobotica?"
      },
      options: [
        { en: "Robots that learn and develop capabilities progressively through interaction with their environment", es: "Robots que aprenden y desarrollan capacidades progresivamente a través de interacción con su ambiente", de: "Roboter, die Fähigkeiten progressiv durch Interaktion mit ihrer Umgebung lernen und entwickeln", nl: "Robots die mogelijkheden progressief leren en ontwikkelen door interactie met hun omgeving" },
        { en: "The process of designing and manufacturing new robot prototypes", es: "El proceso de diseñar y fabricar nuevos prototipos de robot", de: "Der Prozess der Entwicklung und Herstellung neuer Roboter-Prototypen", nl: "Het proces van het ontwerpen en vervaardigen van nieuwe robot prototypes" },
        { en: "Robots designed specifically for educational purposes", es: "Robots diseñados específicamente para propósitos educativos", de: "Roboter, die speziell für Bildungszwecke entwickelt wurden", nl: "Robots speciaal ontworpen voor educatieve doeleinden" },
        { en: "Software development tools for robotic applications", es: "Herramientas de desarrollo de software para aplicaciones robóticas", de: "Software-Entwicklungstools für robotische Anwendungen", nl: "Software ontwikkelingstools voor robotische toepassingen" }
      ],
      correct: 0,
      explanation: {
        en: "Developmental robotics studies how robots can acquire increasingly complex skills through autonomous development, mimicking biological learning processes where capabilities emerge through exploration, play, and cumulative learning experiences.",
        es: "La robótica del desarrollo estudia cómo los robots pueden adquirir habilidades cada vez más complejas a través de desarrollo autónomo, imitando procesos de aprendizaje biológicos donde las capacidades emergen a través de exploración, juego y experiencias de aprendizaje acumulativo.",
        de: "Entwicklungsrobotik erforscht, wie Roboter zunehmend komplexe Fähigkeiten durch autonome Entwicklung erwerben können, wobei biologische Lernprozesse nachgeahmt werden, bei denen Fähigkeiten durch Erkundung, Spiel und kumulative Lernerfahrungen entstehen.",
        nl: "Ontwikkelingsrobotica bestudeert hoe robots steeds complexere vaardigheden kunnen verwerven door autonome ontwikkeling, biologische leerprocessen nabootsend waar mogelijkheden ontstaan door exploratie, spel en cumulatieve leerervaringen."
      }
    },
    {
      question: {
        en: "What is neuromorphic robotics?",
        es: "¿Qué es la robótica neuromórfica?",
        de: "Was ist neuromorphe Robotik?",
        nl: "Wat is neuromorfische robotica?"
      },
      options: [
        { en: "Using brain-inspired hardware and spike-based neural networks for efficient robot control", es: "Usar hardware inspirado en cerebro y redes neurales basadas en picos para control eficiente de robot", de: "Verwendung gehirn-inspirierter Hardware und spike-basierter neuronaler Netzwerke für effiziente Roboter-Steuerung", nl: "Het gebruik van brein-geïnspireerde hardware en spike-gebaseerde neurale netwerken voor efficiënte robot controle" },
        { en: "Robots designed to mimic human facial expressions and emotions", es: "Robots diseñados para imitar expresiones faciales humanas y emociones", de: "Roboter zur Nachahmung menschlicher Gesichtsausdrücke und Emotionen entwickelt", nl: "Robots ontworpen om menselijke gezichtsuitdrukkingen en emoties na te bootsen" },
        { en: "Creating robot brains using biological neural tissue", es: "Crear cerebros de robot usando tejido neural biológico", de: "Erstellung von Roboter-Gehirnen unter Verwendung biologischen Nervengewebes", nl: "Het creëren van robotbreinen met biologisch neuraal weefsel" },
        { en: "Robots that can form neural connections with humans", es: "Robots que pueden formar conexiones neurales con humanos", de: "Roboter, die neuronale Verbindungen mit Menschen bilden können", nl: "Robots die neurale verbindingen met mensen kunnen vormen" }
      ],
      correct: 0,
      explanation: {
        en: "Neuromorphic robotics employs brain-inspired computing architectures and spiking neural networks that process information asynchronously and efficiently, enabling real-time sensorimotor processing with extremely low power consumption compared to conventional processors.",
        es: "La robótica neuromórfica emplea arquitecturas de computación inspiradas en cerebro y redes neurales de picos que procesan información asíncrona y eficientemente, permitiendo procesamiento sensoriomotor en tiempo real con consumo de energía extremadamente bajo comparado con procesadores convencionales.",
        de: "Neuromorphe Robotik verwendet gehirn-inspirierte Computerarchitekturen und spiking neuronale Netzwerke, die Informationen asynchron und effizient verarbeiten und Echtzeit-Sensomotorik-Verarbeitung mit extrem niedrigem Stromverbrauch im Vergleich zu konventionellen Prozessoren ermöglichen.",
        nl: "Neuromorfische robotica gebruikt brein-geïnspireerde computerarchitecturen en spiking neurale netwerken die informatie asynchroon en efficiënt verwerken, wat real-time sensomotorische verwerking mogelijk maakt met extreem laag stroomverbruik vergeleken met conventionele processors."
      }
    },
    {
      question: {
        en: "What is the role of haptic feedback in teleoperation?",
        es: "¿Cuál es el papel de la retroalimentación háptica en teleoperación?",
        de: "Was ist die Rolle haptischer Rückmeldung in der Teleoperation?",
        nl: "Wat is de rol van haptische feedback in teleoperatie?"
      },
      options: [
        { en: "Providing force and tactile sensations to operators for improved manipulation precision and safety", es: "Proporcionar sensaciones de fuerza y táctiles a operadores para precisión de manipulación mejorada y seguridad", de: "Bereitstellung von Kraft- und Tastempfindungen für Bediener zur verbesserten Manipulationspräzision und Sicherheit", nl: "Het bieden van kracht- en tactiele sensaties aan operators voor verbeterde manipulatieprecisie en veiligheid" },
        { en: "Generating audio feedback during remote operations", es: "Generar retroalimentación de audio durante operaciones remotas", de: "Erzeugung von Audio-Feedback während Fernoperationen", nl: "Het genereren van audio feedback tijdens externe operaties" },
        { en: "Providing visual enhancement for remote viewing", es: "Proporcionar mejora visual para visualización remota", de: "Bereitstellung visueller Verbesserung für Fernbetrachtung", nl: "Het bieden van visuele verbetering voor remote viewing" },
        { en: "Recording operator movements for later analysis", es: "Grabar movimientos de operador para análisis posterior", de: "Aufzeichnung von Bediener-Bewegungen für spätere Analyse", nl: "Het opnemen van operatorbewegingen voor latere analyse" }
      ],
      correct: 0,
      explanation: {
        en: "Haptic feedback in teleoperation transmits force, texture, and compliance information from the remote robot to the human operator, enabling precise manipulation of delicate objects, detection of contact forces, and improved situational awareness in remote environments.",
        es: "La retroalimentación háptica en teleoperación transmite información de fuerza, textura y compliance del robot remoto al operador humano, permitiendo manipulación precisa de objetos delicados, detección de fuerzas de contacto y conciencia situacional mejorada en ambientes remotos.",
        de: "Haptische Rückmeldung in der Teleoperation überträgt Kraft-, Textur- und Nachgiebigkeitsinformationen vom Fernroboter zum menschlichen Bediener und ermöglicht präzise Manipulation empfindlicher Objekte, Erkennung von Kontaktkräften und verbesserte Situationsbewusstsein in entfernten Umgebungen.",
        nl: "Haptische feedback in teleoperatie draagt kracht-, textuur- en meegaandheid informatie over van de externe robot naar de menselijke operator, wat precieze manipulatie van delicate objecten, detectie van contactkrachten en verbeterd situationeel bewustzijn in afgelegen omgevingen mogelijk maakt."
      }
    },
    {
      question: {
        en: "What is cognitive robotics?",
        es: "¿Qué es la robótica cognitiva?",
        de: "Was ist kognitive Robotik?",
        nl: "Wat is cognitieve robotica?"
      },
      options: [
        { en: "Robots with high-level reasoning, learning, and decision-making capabilities that can understand and adapt to complex situations", es: "Robots con capacidades de razonamiento de alto nivel, aprendizaje y toma de decisiones que pueden entender y adaptarse a situaciones complejas", de: "Roboter mit hochwertigen Reasoning-, Lern- und Entscheidungsfähigkeiten, die komplexe Situationen verstehen und sich an sie anpassen können", nl: "Robots met hoog-niveau redeneer-, leer- en besluitvormingsmogelijkheden die complexe situaties kunnen begrijpen en zich eraan kunnen aanpassen" },
        { en: "Robots designed to study human cognitive processes", es: "Robots diseñados para estudiar procesos cognitivos humanos", de: "Roboter zur Erforschung menschlicher kognitiver Prozesse entwickelt", nl: "Robots ontworpen om menselijke cognitieve processen te bestuderen" },
        { en: "Robots that can read and understand human thoughts", es: "Robots que pueden leer y entender pensamientos humanos", de: "Roboter, die menschliche Gedanken lesen und verstehen können", nl: "Robots die menselijke gedachten kunnen lezen en begrijpen" },
        { en: "Using cognitive psychology principles in robot programming", es: "Usar principios de psicología cognitiva en programación de robots", de: "Verwendung kognitiver Psychologie-Prinzipien in der Roboter-Programmierung", nl: "Het gebruik van cognitieve psychologie principes in robot programmering" }
      ],
      correct: 0,
      explanation: {
        en: "Cognitive robotics integrates artificial intelligence, machine learning, and symbolic reasoning to create robots capable of autonomous planning, knowledge representation, natural language understanding, and adaptive behavior in unstructured environments.",
        es: "La robótica cognitiva integra inteligencia artificial, aprendizaje automático y razonamiento simbólico para crear robots capaces de planificación autónoma, representación de conocimiento, comprensión de lenguaje natural y comportamiento adaptativo en ambientes no estructurados.",
        de: "Kognitive Robotik integriert künstliche Intelligenz, maschinelles Lernen und symbolisches Reasoning zur Schaffung von Robotern, die zu autonomer Planung, Wissensrepräsentation, natürlicher Sprachverständnis und adaptivem Verhalten in unstrukturierten Umgebungen fähig sind.",
        nl: "Cognitieve robotica integreert kunstmatige intelligentie, machine learning en symbolisch redeneren om robots te creëren die capabel zijn tot autonome planning, kennisrepresentatie, natuurlijke taalverwerking en adaptief gedrag in ongestructureerde omgevingen."
      }
    },
    {
      question: {
        en: "What is the significance of real-time constraints in robotic systems?",
        es: "¿Cuál es la importancia de restricciones de tiempo real en sistemas robóticos?",
        de: "Was ist die Bedeutung von Echtzeitbeschränkungen in robotischen Systemen?",
        nl: "Wat is de betekenis van real-time beperkingen in robotische systemen?"
      },
      options: [
        { en: "Ensuring deterministic response times for safety-critical operations and stable control loops", es: "Asegurar tiempos de respuesta determinísticos para operaciones críticas de seguridad y bucles de control estables", de: "Gewährleistung deterministischer Antwortzeiten für sicherheitskritische Operationen und stabile Regelkreise", nl: "Het verzekeren van deterministische responstijden voor veiligheidskritische operaties en stabiele controlelussen" },
        { en: "Maximizing computational efficiency in robot processors", es: "Maximizar eficiencia computacional en procesadores de robot", de: "Maximierung der rechnerischen Effizienz in Roboter-Prozessoren", nl: "Het maximaliseren van computationele efficiëntie in robot processors" },
        { en: "Synchronizing multiple robots working together", es: "Sincronizar múltiples robots trabajando juntos", de: "Synchronisation mehrerer zusammenarbeitender Roboter", nl: "Het synchroniseren van meerdere robots die samenwerken" },
        { en: "Reducing power consumption in battery-powered robots", es: "Reducir consumo de energía en robots alimentados por batería", de: "Reduzierung des Stromverbrauchs in batteriebetriebenen Robotern", nl: "Het verminderen van stroomverbruik in batterij-aangedreven robots" }
      ],
      correct: 0,
      explanation: {
        en: "Real-time constraints guarantee that critical tasks like sensor processing, control calculations, and safety monitoring execute within strict deadlines, preventing system instability, ensuring predictable behavior, and maintaining safety in dynamic environments.",
        es: "Las restricciones de tiempo real garantizan que tareas críticas como procesamiento de sensores, cálculos de control y monitoreo de seguridad se ejecuten dentro de plazos estrictos, previniendo inestabilidad del sistema, asegurando comportamiento predecible y manteniendo seguridad en ambientes dinámicos.",
        de: "Echtzeitbeschränkungen garantieren, dass kritische Aufgaben wie Sensorverarbeitung, Steuerungsberechnungen und Sicherheitsüberwachung innerhalb strenger Fristen ausgeführt werden, wodurch Systeminstabilität verhindert, vorhersagbares Verhalten gewährleistet und Sicherheit in dynamischen Umgebungen aufrechterhalten wird.",
        nl: "Real-time beperkingen garanderen dat kritische taken zoals sensorverwerking, controleberekeningen en veiligheidsmonitoring binnen strikte deadlines worden uitgevoerd, wat systeeminstabiliteit voorkomt, voorspelbaar gedrag verzekert en veiligheid in dynamische omgevingen behoudt."
      }
    },
    {
      question: {
        en: "What is distributed robotics?",
        es: "¿Qué es la robótica distribuida?",
        de: "Was ist verteilte Robotik?",
        nl: "Wat is gedistribueerde robotica?"
      },
      options: [
        { en: "Multiple robots working together with distributed sensing, computation, and control across the network", es: "Múltiples robots trabajando juntos con detección, computación y control distribuidos a través de la red", de: "Mehrere Roboter arbeiten zusammen mit verteilter Sensorik, Berechnung und Steuerung über das Netzwerk", nl: "Meerdere robots die samenwerken met gedistribueerde detectie, berekening en controle over het netwerk" },
        { en: "Robots that are physically spread across large geographical areas", es: "Robots que están físicamente distribuidos en grandes áreas geográficas", de: "Roboter, die physisch über große geografische Gebiete verteilt sind", nl: "Robots die fysiek verspreid zijn over grote geografische gebieden" },
        { en: "Using cloud computing for robot processing", es: "Usar computación en la nube para procesamiento de robot", de: "Verwendung von Cloud-Computing für Roboter-Verarbeitung", nl: "Het gebruik van cloud computing voor robot verwerking" },
        { en: "Robots with multiple distributed sensors on their bodies", es: "Robots con múltiples sensores distribuidos en sus cuerpos", de: "Roboter mit mehreren verteilten Sensoren an ihren Körpern", nl: "Robots met meerdere gedistribueerde sensoren op hun lichaam" }
      ],
      correct: 0,
      explanation: {
        en: "Distributed robotics involves multiple autonomous agents sharing information, coordinating actions, and collectively solving problems that exceed individual robot capabilities, enabling scalable solutions for large-scale sensing, exploration, and manipulation tasks.",
        es: "La robótica distribuida involucra múltiples agentes autónomos compartiendo información, coordinando acciones y resolviendo colectivamente problemas que exceden capacidades de robots individuales, permitiendo soluciones escalables para tareas de detección, exploración y manipulación a gran escala.",
        de: "Verteilte Robotik umfasst mehrere autonome Agenten, die Informationen teilen, Aktionen koordinieren und kollektiv Probleme lösen, die die Fähigkeiten einzelner Roboter übersteigen, wodurch skalierbare Lösungen für großflächige Sensor-, Erkundungs- und Manipulationsaufgaben ermöglicht werden.",
        nl: "Gedistribueerde robotica behelst meerdere autonome agenten die informatie delen, acties coördineren en collectief problemen oplossen die individuele robot mogelijkheden overstijgen, wat schaalbare oplossingen mogelijk maakt voor grootschalige detectie-, exploratie- en manipulatietaken."
      }
    }
  ]
});
