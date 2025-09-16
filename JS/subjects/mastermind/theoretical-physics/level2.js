// Theoretical Physics - Level 2: Relativistic Mechanics
(function() {
  const level2 = {
    name: {
      en: "Relativistic Mechanics",
      es: "Mecánica Relativista",
      de: "Relativistische Mechanik",
      nl: "Relativistische Mechanica"
    },
    questions: [
      {
        question: {
          en: "What is the fundamental postulate of special relativity?",
          es: "¿Cuál es el postulado fundamental de la relatividad especial?",
          de: "Was ist das fundamentale Postulat der speziellen Relativitätstheorie?",
          nl: "Wat is het fundamentele postulaat van de speciale relativiteitstheorie?"
        },
        options: [
          {
            en: "The laws of physics are the same in all inertial frames, and the speed of light is constant",
            es: "Las leyes de la física son las mismas en todos los marcos inerciales, y la velocidad de la luz es constante",
            de: "Die Gesetze der Physik sind in allen Inertialsystemen gleich, und die Lichtgeschwindigkeit ist konstant",
            nl: "De wetten van de fysica zijn hetzelfde in alle inertiële referentiekaders, en de lichtsnelheid is constant"
          },
          {
            en: "Time and space are absolute and independent",
            es: "El tiempo y el espacio son absolutos e independientes",
            de: "Zeit und Raum sind absolut und unabhängig",
            nl: "Tijd en ruimte zijn absoluut en onafhankelijk"
          },
          {
            en: "Mass and energy are completely separate quantities",
            es: "La masa y la energía son cantidades completamente separadas",
            de: "Masse und Energie sind völlig getrennte Größen",
            nl: "Massa en energie zijn volledig gescheiden grootheden"
          },
          {
            en: "Gravity is a fundamental force acting instantaneously",
            es: "La gravedad es una fuerza fundamental que actúa instantáneamente",
            de: "Gravitation ist eine fundamentale Kraft, die augenblicklich wirkt",
            nl: "Zwaartekracht is een fundamentale kracht die onmiddellijk werkt"
          }
        ],
        correct: 0,
        explanation: {
          en: "Einstein's special relativity is based on two postulates: 1) The laws of physics are identical in all inertial reference frames, and 2) The speed of light in vacuum is the same for all observers, regardless of their motion or the motion of the light source.",
          es: "La relatividad especial de Einstein se basa en dos postulados: 1) Las leyes de la física son idénticas en todos los marcos de referencia inerciales, y 2) La velocidad de la luz en el vacío es la misma para todos los observadores, independientemente de su movimiento o el movimiento de la fuente de luz.",
          de: "Einsteins spezielle Relativitätstheorie basiert auf zwei Postulaten: 1) Die Gesetze der Physik sind in allen Inertialsystemen identisch, und 2) Die Lichtgeschwindigkeit im Vakuum ist für alle Beobachter gleich, unabhängig von ihrer Bewegung oder der Bewegung der Lichtquelle.",
          nl: "Einstein's speciale relativiteitstheorie is gebaseerd op twee postulaten: 1) De wetten van de fysica zijn identiek in alle inertiële referentiekaders, en 2) De lichtsnelheid in vacuüm is hetzelfde voor alle waarnemers, ongeacht hun beweging of de beweging van de lichtbron."
        }
      },
      {
        question: {
          en: "What is time dilation in special relativity?",
          es: "¿Qué es la dilatación del tiempo en la relatividad especial?",
          de: "Was ist Zeitdilatation in der speziellen Relativitätstheorie?",
          nl: "Wat is tijddilatatie in de speciale relativiteitstheorie?"
        },
        options: [
          {
            en: "Time passes more slowly for objects moving at high speeds relative to an observer",
            es: "El tiempo pasa más lentamente para objetos que se mueven a altas velocidades relativas a un observador",
            de: "Die Zeit vergeht langsamer für Objekte, die sich mit hohen Geschwindigkeiten relativ zu einem Beobachter bewegen",
            nl: "Tijd gaat langzamer voor objecten die bewegen met hoge snelheden relatief ten opzichte van een waarnemer"
          },
          {
            en: "Time speeds up near massive objects",
            es: "El tiempo se acelera cerca de objetos masivos",
            de: "Die Zeit beschleunigt sich in der Nähe massereicher Objekte",
            nl: "Tijd versnelt in de buurt van massieve objecten"
          },
          {
            en: "Time becomes negative at the speed of light",
            es: "El tiempo se vuelve negativo a la velocidad de la luz",
            de: "Die Zeit wird bei Lichtgeschwindigkeit negativ",
            nl: "Tijd wordt negatief bij de snelheid van het licht"
          },
          {
            en: "Time stops completely for all observers simultaneously",
            es: "El tiempo se detiene completamente para todos los observadores simultáneamente",
            de: "Die Zeit stoppt vollständig für alle Beobachter gleichzeitig",
            nl: "Tijd stopt volledig voor alle waarnemers tegelijkertijd"
          }
        ],
        correct: 0,
        explanation: {
          en: "Time dilation is the phenomenon where time passes more slowly in a reference frame that is moving relative to an observer. The effect is given by the factor γ = 1/√(1-v²/c²), where v is the relative velocity and c is the speed of light. As v approaches c, time dilation becomes extreme.",
          es: "La dilatación del tiempo es el fenómeno donde el tiempo pasa más lentamente en un marco de referencia que se mueve relativo a un observador. El efecto se da por el factor γ = 1/√(1-v²/c²), donde v es la velocidad relativa y c es la velocidad de la luz. Cuando v se acerca a c, la dilatación del tiempo se vuelve extrema.",
          de: "Zeitdilatation ist das Phänomen, bei dem die Zeit in einem Bezugssystem, das sich relativ zu einem Beobachter bewegt, langsamer vergeht. Der Effekt wird durch den Faktor γ = 1/√(1-v²/c²) beschrieben, wobei v die Relativgeschwindigkeit und c die Lichtgeschwindigkeit ist. Wenn v sich c nähert, wird die Zeitdilatation extrem.",
          nl: "Tijddilatatie is het fenomeen waarbij tijd langzamer gaat in een referentiekader dat beweegt relatief ten opzichte van een waarnemer. Het effect wordt gegeven door de factor γ = 1/√(1-v²/c²), waarbij v de relatieve snelheid is en c de lichtsnelheid. Naarmate v c nadert, wordt tijddilatatie extreem."
        }
      },
      {
        question: {
          en: "What is length contraction in special relativity?",
          es: "¿Qué es la contracción de longitud en la relatividad especial?",
          de: "Was ist Längenkontraktion in der speziellen Relativitätstheorie?",
          nl: "Wat is lengtecontractie in de speciale relativiteitstheorie?"
        },
        options: [
          {
            en: "Objects appear shorter in the direction of motion when moving at relativistic speeds",
            es: "Los objetos parecen más cortos en la dirección del movimiento cuando se mueven a velocidades relativistas",
            de: "Objekte erscheinen in Bewegungsrichtung kürzer, wenn sie sich mit relativistischen Geschwindigkeiten bewegen",
            nl: "Objecten lijken korter in de richting van beweging wanneer ze bewegen met relativistische snelheden"
          },
          {
            en: "Objects expand in all directions at high speeds",
            es: "Los objetos se expanden en todas las direcciones a altas velocidades",
            de: "Objekte dehnen sich bei hohen Geschwindigkeiten in alle Richtungen aus",
            nl: "Objecten zetten uit in alle richtingen bij hoge snelheden"
          },
          {
            en: "Only the mass of objects changes with velocity",
            es: "Solo la masa de los objetos cambia con la velocidad",
            de: "Nur die Masse von Objekten ändert sich mit der Geschwindigkeit",
            nl: "Alleen de massa van objecten verandert met snelheid"
          },
          {
            en: "Objects become completely two-dimensional at light speed",
            es: "Los objetos se vuelven completamente bidimensionales a la velocidad de la luz",
            de: "Objekte werden bei Lichtgeschwindigkeit vollständig zweidimensional",
            nl: "Objecten worden volledig tweedimensionaal bij lichtsnelheid"
          }
        ],
        correct: 0,
        explanation: {
          en: "Length contraction (Lorentz contraction) states that objects moving at relativistic speeds appear contracted in the direction of motion by the factor √(1-v²/c²). This contraction is only observed in the direction parallel to the velocity vector, while perpendicular dimensions remain unchanged.",
          es: "La contracción de longitud (contracción de Lorentz) establece que los objetos que se mueven a velocidades relativistas parecen contraídos en la dirección del movimiento por el factor √(1-v²/c²). Esta contracción solo se observa en la dirección paralela al vector de velocidad, mientras que las dimensiones perpendiculares permanecen sin cambios.",
          de: "Längenkontraktion (Lorentz-Kontraktion) besagt, dass sich mit relativistischen Geschwindigkeiten bewegende Objekte in Bewegungsrichtung um den Faktor √(1-v²/c²) verkürzt erscheinen. Diese Kontraktion wird nur in der zum Geschwindigkeitsvektor parallelen Richtung beobachtet, während senkrechte Dimensionen unverändert bleiben.",
          nl: "Lengtecontractie (Lorentz-contractie) stelt dat objecten die bewegen met relativistische snelheden lijken samengetrokken in de richting van beweging met de factor √(1-v²/c²). Deze contractie wordt alleen waargenomen in de richting parallel aan de snelheidsvector, terwijl loodrechte dimensies onveranderd blijven."
        }
      },
      {
        question: {
          en: "What is the mass-energy equivalence principle?",
          es: "¿Qué es el principio de equivalencia masa-energía?",
          de: "Was ist das Masse-Energie-Äquivalenzprinzip?",
          nl: "Wat is het massa-energie equivalentiebeginsel?"
        },
        options: [
          {
            en: "Mass and energy are interconvertible, expressed as E = mc²",
            es: "La masa y la energía son interconvertibles, expresado como E = mc²",
            de: "Masse und Energie sind ineinander umwandelbar, ausgedrückt als E = mc²",
            nl: "Massa en energie zijn onderling converteerbaar, uitgedrukt als E = mc²"
          },
          {
            en: "Mass always increases with energy input",
            es: "La masa siempre aumenta con la entrada de energía",
            de: "Masse nimmt immer mit Energiezufuhr zu",
            nl: "Massa neemt altijd toe met energie-input"
          },
          {
            en: "Energy and mass are conserved separately in all processes",
            es: "La energía y la masa se conservan por separado en todos los procesos",
            de: "Energie und Masse werden in allen Prozessen separat erhalten",
            nl: "Energie en massa worden afzonderlijk behouden in alle processen"
          },
          {
            en: "Mass creates energy fields around objects",
            es: "La masa crea campos de energía alrededor de los objetos",
            de: "Masse erzeugt Energiefelder um Objekte herum",
            nl: "Massa creëert energievelden rond objecten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Einstein's famous equation E = mc² shows that mass and energy are equivalent and interconvertible. A small amount of mass corresponds to a large amount of energy (due to c² being very large). This principle explains nuclear reactions, stellar processes, and forms the basis for nuclear power and weapons.",
          es: "La famosa ecuación de Einstein E = mc² muestra que la masa y la energía son equivalentes e interconvertibles. Una pequeña cantidad de masa corresponde a una gran cantidad de energía (debido a que c² es muy grande). Este principio explica las reacciones nucleares, los procesos estelares, y forma la base del poder nuclear y las armas.",
          de: "Einsteins berühmte Gleichung E = mc² zeigt, dass Masse und Energie äquivalent und ineinander umwandelbar sind. Eine kleine Menge Masse entspricht einer großen Menge Energie (da c² sehr groß ist). Dieses Prinzip erklärt Kernreaktionen, stellare Prozesse und bildet die Grundlage für Kernenergie und -waffen.",
          nl: "Einstein's beroemde vergelijking E = mc² toont dat massa en energie equivalent en onderling converteerbaar zijn. Een kleine hoeveelheid massa komt overeen met een grote hoeveelheid energie (omdat c² erg groot is). Dit principe verklaart kernreacties, stellaire processen, en vormt de basis voor kernenergie en -wapens."
        }
      },
      {
        question: {
          en: "What is the relativistic momentum formula?",
          es: "¿Cuál es la fórmula del momento relativista?",
          de: "Was ist die relativistische Impulsformel?",
          nl: "Wat is de relativistische momentumformule?"
        },
        options: [
          {
            en: "p = γmv = mv/√(1-v²/c²)",
            es: "p = γmv = mv/√(1-v²/c²)",
            de: "p = γmv = mv/√(1-v²/c²)",
            nl: "p = γmv = mv/√(1-v²/c²)"
          },
          {
            en: "p = mv (classical formula remains unchanged)",
            es: "p = mv (la fórmula clásica permanece sin cambios)",
            de: "p = mv (klassische Formel bleibt unverändert)",
            nl: "p = mv (klassieke formule blijft onveranderd)"
          },
          {
            en: "p = mc² (same as energy)",
            es: "p = mc² (igual que la energía)",
            de: "p = mc² (gleich wie Energie)",
            nl: "p = mc² (hetzelfde als energie)"
          },
          {
            en: "p = m²v/c",
            es: "p = m²v/c",
            de: "p = m²v/c",
            nl: "p = m²v/c"
          }
        ],
        correct: 0,
        explanation: {
          en: "In special relativity, momentum is modified by the Lorentz factor γ = 1/√(1-v²/c²), giving p = γmv. This ensures that momentum is conserved in relativistic collisions and prevents particles from exceeding the speed of light, as momentum approaches infinity as v approaches c.",
          es: "En la relatividad especial, el momento se modifica por el factor de Lorentz γ = 1/√(1-v²/c²), dando p = γmv. Esto asegura que el momento se conserve en colisiones relativistas y previene que las partículas excedan la velocidad de la luz, ya que el momento se acerca al infinito cuando v se acerca a c.",
          de: "In der speziellen Relativitätstheorie wird der Impuls durch den Lorentz-Faktor γ = 1/√(1-v²/c²) modifiziert, was p = γmv ergibt. Dies stellt sicher, dass der Impuls in relativistischen Kollisionen erhalten bleibt und verhindert, dass Teilchen die Lichtgeschwindigkeit überschreiten, da der Impuls gegen unendlich geht, wenn v sich c nähert.",
          nl: "In speciale relativiteit wordt momentum gewijzigd door de Lorentz-factor γ = 1/√(1-v²/c²), wat p = γmv geeft. Dit zorgt ervoor dat momentum behouden blijft in relativistische botsingen en voorkomt dat deeltjes de lichtsnelheid overschrijden, omdat momentum naar oneindig gaat naarmate v c nadert."
        }
      },
      {
        question: {
          en: "What is the twin paradox?",
          es: "¿Qué es la paradoja de los gemelos?",
          de: "Was ist das Zwillingsparadox?",
          nl: "Wat is de tweelingparadox?"
        },
        options: [
          {
            en: "A thought experiment showing that a traveling twin ages slower than the stationary twin",
            es: "Un experimento mental que muestra que un gemelo viajero envejece más lentamente que el gemelo estacionario",
            de: "Ein Gedankenexperiment, das zeigt, dass ein reisender Zwilling langsamer altert als der ruhende Zwilling",
            nl: "Een gedachte-experiment dat toont dat een reizende tweeling langzamer veroudert dan de stilstaande tweeling"
          },
          {
            en: "Two observers seeing each other's clocks run fast simultaneously",
            es: "Dos observadores viendo los relojes del otro correr rápido simultáneamente",
            de: "Zwei Beobachter, die gleichzeitig die Uhren des anderen schneller laufen sehen",
            nl: "Twee waarnemers die elkaars klokken tegelijkertijd snel zien lopen"
          },
          {
            en: "The impossibility of twins existing in the same reference frame",
            es: "La imposibilidad de que los gemelos existan en el mismo marco de referencia",
            de: "Die Unmöglichkeit, dass Zwillinge im selben Bezugssystem existieren",
            nl: "De onmogelijkheid van tweelingen die bestaan in hetzelfde referentiekader"
          },
          {
            en: "A paradox where time flows backwards for one twin",
            es: "Una paradoja donde el tiempo fluye hacia atrás para un gemelo",
            de: "Ein Paradox, bei dem die Zeit für einen Zwilling rückwärts fließt",
            nl: "Een paradox waarbij tijd achterwaarts stroomt voor één tweeling"
          }
        ],
        correct: 0,
        explanation: {
          en: "The twin paradox illustrates time dilation effects. When one twin travels at high speed to a distant star and returns, they will have aged less than the twin who stayed on Earth. The asymmetry arises because the traveling twin experiences acceleration during the journey, breaking the symmetry of the situation.",
          es: "La paradoja de los gemelos ilustra los efectos de dilatación del tiempo. Cuando un gemelo viaja a alta velocidad a una estrella distante y regresa, habrá envejecido menos que el gemelo que se quedó en la Tierra. La asimetría surge porque el gemelo viajero experimenta aceleración durante el viaje, rompiendo la simetría de la situación.",
          de: "Das Zwillingsparadox veranschaulicht Zeitdilatationseffekte. Wenn ein Zwilling mit hoher Geschwindigkeit zu einem entfernten Stern reist und zurückkehrt, wird er weniger gealtert sein als der Zwilling, der auf der Erde geblieben ist. Die Asymmetrie entsteht, weil der reisende Zwilling während der Reise Beschleunigung erfährt und damit die Symmetrie der Situation bricht.",
          nl: "De tweelingparadox illustreert tijddilatatie-effecten. Wanneer één tweeling met hoge snelheid naar een verre ster reist en terugkeert, zal hij minder zijn verouderd dan de tweeling die op aarde bleef. De asymmetrie ontstaat omdat de reizende tweeling acceleratie ervaart tijdens de reis, waardoor de symmetrie van de situatie wordt verbroken."
        }
      },
      {
        question: {
          en: "What is the Lorentz transformation?",
          es: "¿Qué es la transformación de Lorentz?",
          de: "Was ist die Lorentz-Transformation?",
          nl: "Wat is de Lorentz-transformatie?"
        },
        options: [
          {
            en: "Mathematical equations that relate space and time coordinates between different inertial frames",
            es: "Ecuaciones matemáticas que relacionan las coordenadas de espacio y tiempo entre diferentes marcos inerciales",
            de: "Mathematische Gleichungen, die Raum- und Zeitkoordinaten zwischen verschiedenen Inertialsystemen verknüpfen",
            nl: "Wiskundige vergelijkingen die ruimte- en tijdcoördinaten tussen verschillende inertiële kaders relateren"
          },
          {
            en: "A method for converting between different units of measurement",
            es: "Un método para convertir entre diferentes unidades de medida",
            de: "Eine Methode zur Umwandlung zwischen verschiedenen Maßeinheiten",
            nl: "Een methode voor het omzetten tussen verschillende meeteenheden"
          },
          {
            en: "A technique for measuring the speed of light accurately",
            es: "Una técnica para medir la velocidad de la luz con precisión",
            de: "Eine Technik zur präzisen Messung der Lichtgeschwindigkeit",
            nl: "Een techniek voor het nauwkeurig meten van de lichtsnelheid"
          },
          {
            en: "A formula for calculating gravitational forces",
            es: "Una fórmula para calcular fuerzas gravitacionales",
            de: "Eine Formel zur Berechnung von Gravitationskräften",
            nl: "Een formule voor het berekenen van zwaartekrachten"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Lorentz transformation relates the space and time coordinates (x,t) in one inertial frame to coordinates (x',t') in another frame moving with velocity v: x' = γ(x-vt), t' = γ(t-vx/c²). These transformations preserve the speed of light and are fundamental to special relativity.",
          es: "La transformación de Lorentz relaciona las coordenadas de espacio y tiempo (x,t) en un marco inercial con las coordenadas (x',t') en otro marco que se mueve con velocidad v: x' = γ(x-vt), t' = γ(t-vx/c²). Estas transformaciones preservan la velocidad de la luz y son fundamentales para la relatividad especial.",
          de: "Die Lorentz-Transformation verknüpft die Raum- und Zeitkoordinaten (x,t) in einem Inertialsystem mit den Koordinaten (x',t') in einem anderen System, das sich mit Geschwindigkeit v bewegt: x' = γ(x-vt), t' = γ(t-vx/c²). Diese Transformationen erhalten die Lichtgeschwindigkeit und sind fundamental für die spezielle Relativitätstheorie.",
          nl: "De Lorentz-transformatie relateert de ruimte- en tijdcoördinaten (x,t) in één inertieel kader aan coördinaten (x',t') in een ander kader dat beweegt met snelheid v: x' = γ(x-vt), t' = γ(t-vx/c²). Deze transformaties behouden de lichtsnelheid en zijn fundamenteel voor speciale relativiteit."
        }
      },
      {
        question: {
          en: "What is the principle of equivalence in general relativity?",
          es: "¿Qué es el principio de equivalencia en la relatividad general?",
          de: "Was ist das Äquivalenzprinzip in der allgemeinen Relativitätstheorie?",
          nl: "Wat is het equivalentieprincipe in de algemene relativiteitstheorie?"
        },
        options: [
          {
            en: "Gravitational acceleration is locally indistinguishable from acceleration in flat spacetime",
            es: "La aceleración gravitacional es localmente indistinguible de la aceleración en el espacio-tiempo plano",
            de: "Gravitationsbeschleunigung ist lokal nicht von Beschleunigung in flacher Raumzeit zu unterscheiden",
            nl: "Gravitationele versnelling is lokaal niet te onderscheiden van versnelling in vlakke ruimtetijd"
          },
          {
            en: "All masses fall at the same rate regardless of composition",
            es: "Todas las masas caen a la misma velocidad independientemente de su composición",
            de: "Alle Massen fallen unabhängig von ihrer Zusammensetzung mit derselben Rate",
            nl: "Alle massa's vallen met dezelfde snelheid ongeacht samenstelling"
          },
          {
            en: "Energy and momentum are equivalent in all reference frames",
            es: "La energía y el momento son equivalentes en todos los marcos de referencia",
            de: "Energie und Impuls sind in allen Bezugssystemen äquivalent",
            nl: "Energie en momentum zijn equivalent in alle referentiekaders"
          },
          {
            en: "Space and time have the same physical dimensions",
            es: "El espacio y el tiempo tienen las mismas dimensiones físicas",
            de: "Raum und Zeit haben dieselben physikalischen Dimensionen",
            nl: "Ruimte en tijd hebben dezelfde fysieke dimensies"
          }
        ],
        correct: 0,
        explanation: {
          en: "The equivalence principle states that the effects of gravity are locally identical to the effects of acceleration. A person in a windowless elevator cannot distinguish whether they're at rest in a gravitational field or accelerating in gravity-free space. This principle led Einstein to formulate general relativity.",
          es: "El principio de equivalencia establece que los efectos de la gravedad son localmente idénticos a los efectos de la aceleración. Una persona en un ascensor sin ventanas no puede distinguir si está en reposo en un campo gravitacional o acelerando en el espacio libre de gravedad. Este principio llevó a Einstein a formular la relatividad general.",
          de: "Das Äquivalenzprinzip besagt, dass die Effekte der Gravitation lokal identisch mit den Effekten der Beschleunigung sind. Eine Person in einem fensterlosen Aufzug kann nicht unterscheiden, ob sie in einem Gravitationsfeld ruht oder im gravitationsfreien Raum beschleunigt. Dieses Prinzip führte Einstein zur Formulierung der allgemeinen Relativitätstheorie.",
          nl: "Het equivalentieprincipe stelt dat de effecten van zwaartekracht lokaal identiek zijn aan de effecten van versnelling. Een persoon in een raamloze lift kan niet onderscheiden of hij in rust is in een gravitatieveld of versnelt in zwaartekrachtvrije ruimte. Dit principe leidde Einstein tot de formulering van algemene relativiteit."
        }
      },
      {
        question: {
          en: "What is spacetime curvature in general relativity?",
          es: "¿Qué es la curvatura del espacio-tiempo en la relatividad general?",
          de: "Was ist Raumzeitkrümmung in der allgemeinen Relativitätstheorie?",
          nl: "Wat is ruimtetijdkromming in de algemene relativiteitstheorie?"
        },
        options: [
          {
            en: "The warping of spacetime geometry caused by the presence of mass and energy",
            es: "La deformación de la geometría del espacio-tiempo causada por la presencia de masa y energía",
            de: "Die Verzerrung der Raumzeitgeometrie, verursacht durch die Anwesenheit von Masse und Energie",
            nl: "De vervorming van ruimtetijdgeometrie veroorzaakt door de aanwezigheid van massa en energie"
          },
          {
            en: "The bending of light rays in vacuum",
            es: "La curvatura de los rayos de luz en el vacío",
            de: "Die Krümmung von Lichtstrahlen im Vakuum",
            nl: "De buiging van lichtstralen in vacuüm"
          },
          {
            en: "The acceleration of objects under gravitational force",
            es: "La aceleración de objetos bajo fuerza gravitacional",
            de: "Die Beschleunigung von Objekten unter Gravitationskraft",
            nl: "De versnelling van objecten onder gravitatiekracht"
          },
          {
            en: "The expansion of the universe over time",
            es: "La expansión del universo a lo largo del tiempo",
            de: "Die Expansion des Universums über die Zeit",
            nl: "De expansie van het universum over tijd"
          }
        ],
        correct: 0,
        explanation: {
          en: "In general relativity, mass and energy curve spacetime geometry. This curvature manifests as what we perceive as gravitational force. Objects follow geodesics (shortest paths) in curved spacetime, which appear as curved trajectories to us. Einstein's field equation relates the curvature to the stress-energy tensor.",
          es: "En la relatividad general, la masa y la energía curvan la geometría del espacio-tiempo. Esta curvatura se manifiesta como lo que percibimos como fuerza gravitacional. Los objetos siguen geodésicas (caminos más cortos) en el espacio-tiempo curvado, que nos aparecen como trayectorias curvadas. La ecuación de campo de Einstein relaciona la curvatura con el tensor de tensión-energía.",
          de: "In der allgemeinen Relativitätstheorie krümmen Masse und Energie die Raumzeitgeometrie. Diese Krümmung manifestiert sich als das, was wir als Gravitationskraft wahrnehmen. Objekte folgen Geodäten (kürzeste Wege) in gekrümmter Raumzeit, die uns als gekrümmte Bahnen erscheinen. Einsteins Feldgleichung verknüpft die Krümmung mit dem Energie-Impuls-Tensor.",
          nl: "In algemene relativiteit krommen massa en energie de ruimtetijdgeometrie. Deze kromming manifesteert zich als wat wij waarnemen als gravitatiekracht. Objecten volgen geodeten (kortste paden) in gekromde ruimtetijd, die aan ons verschijnen als gebogen trajecten. Einstein's veldvergelijking relateert de kromming aan de stress-energietensor."
        }
      },
      {
        question: {
          en: "What is gravitational time dilation?",
          es: "¿Qué es la dilatación gravitacional del tiempo?",
          de: "Was ist gravitationale Zeitdilatation?",
          nl: "Wat is gravitationele tijddilatatie?"
        },
        options: [
          {
            en: "Time passes more slowly in stronger gravitational fields",
            es: "El tiempo pasa más lentamente en campos gravitacionales más fuertes",
            de: "Die Zeit vergeht in stärkeren Gravitationsfeldern langsamer",
            nl: "Tijd gaat langzamer in sterkere gravitatievelden"
          },
          {
            en: "Time speeds up near black holes",
            es: "El tiempo se acelera cerca de los agujeros negros",
            de: "Die Zeit beschleunigt sich in der Nähe schwarzer Löcher",
            nl: "Tijd versnelt in de buurt van zwarte gaten"
          },
          {
            en: "Gravitational waves cause time to oscillate",
            es: "Las ondas gravitacionales causan que el tiempo oscile",
            de: "Gravitationswellen verursachen Zeitschwingungen",
            nl: "Gravitatiegolven veroorzaken tijdoscillaties"
          },
          {
            en: "Time becomes imaginary in curved spacetime",
            es: "El tiempo se vuelve imaginario en el espacio-tiempo curvado",
            de: "Die Zeit wird in gekrümmter Raumzeit imaginär",
            nl: "Tijd wordt imaginair in gekromde ruimtetijd"
          }
        ],
        correct: 0,
        explanation: {
          en: "Gravitational time dilation is a consequence of general relativity where time runs slower in regions of stronger gravitational potential (closer to massive objects). This effect is described by the factor √(1-2GM/rc²) and has been confirmed by precise atomic clock measurements at different altitudes.",
          es: "La dilatación gravitacional del tiempo es una consecuencia de la relatividad general donde el tiempo corre más lento en regiones de potencial gravitacional más fuerte (más cerca de objetos masivos). Este efecto se describe por el factor √(1-2GM/rc²) y ha sido confirmado por mediciones precisas de relojes atómicos a diferentes altitudes.",
          de: "Gravitationale Zeitdilatation ist eine Folge der allgemeinen Relativitätstheorie, bei der die Zeit in Regionen stärkeren Gravitationspotentials (näher zu massereichen Objekten) langsamer läuft. Dieser Effekt wird durch den Faktor √(1-2GM/rc²) beschrieben und wurde durch präzise Atomuhrmessungen in verschiedenen Höhen bestätigt.",
          nl: "Gravitationele tijddilatatie is een gevolg van algemene relativiteit waarbij tijd langzamer loopt in regio's met sterker gravitationeel potentiaal (dichter bij massieve objecten). Dit effect wordt beschreven door de factor √(1-2GM/rc²) en is bevestigd door precieze atoomklokmeetingen op verschillende hoogtes."
        }
      },
      {
        question: {
          en: "What are gravitational waves?",
          es: "¿Qué son las ondas gravitacionales?",
          de: "Was sind Gravitationswellen?",
          nl: "Wat zijn gravitatiegolven?"
        },
        options: [
          {
            en: "Ripples in spacetime caused by accelerating masses, propagating at the speed of light",
            es: "Ondulaciones en el espacio-tiempo causadas por masas aceleradas, propagándose a la velocidad de la luz",
            de: "Wellen in der Raumzeit, verursacht durch beschleunigende Massen, die sich mit Lichtgeschwindigkeit ausbreiten",
            nl: "Rimpels in ruimtetijd veroorzaakt door versnellende massa's, die zich voortplanten met de snelheid van het licht"
          },
          {
            en: "Electromagnetic waves produced by massive objects",
            es: "Ondas electromagnéticas producidas por objetos masivos",
            de: "Elektromagnetische Wellen, die von massereichen Objekten erzeugt werden",
            nl: "Elektromagnetische golven geproduceerd door massieve objecten"
          },
          {
            en: "Sound waves that travel through empty space",
            es: "Ondas sonoras que viajan a través del espacio vacío",
            de: "Schallwellen, die sich durch den leeren Raum bewegen",
            nl: "Geluidsgolven die door lege ruimte reizen"
          },
          {
            en: "Periodic changes in the strength of gravity",
            es: "Cambios periódicos en la fuerza de la gravedad",
            de: "Periodische Änderungen in der Stärke der Gravitation",
            nl: "Periodieke veranderingen in de sterkte van zwaartekracht"
          }
        ],
        correct: 0,
        explanation: {
          en: "Gravitational waves are disturbances in spacetime itself, predicted by Einstein's general relativity and first directly detected by LIGO in 2015. They're produced by accelerating masses, particularly binary systems like merging black holes or neutron stars, and carry energy away from the source.",
          es: "Las ondas gravitacionales son perturbaciones en el espacio-tiempo mismo, predichas por la relatividad general de Einstein y detectadas directamente por primera vez por LIGO en 2015. Son producidas por masas aceleradas, particularmente sistemas binarios como agujeros negros o estrellas de neutrones fusionándose, y transportan energía lejos de la fuente.",
          de: "Gravitationswellen sind Störungen in der Raumzeit selbst, von Einsteins allgemeiner Relativitätstheorie vorhergesagt und 2015 erstmals direkt von LIGO detektiert. Sie werden von beschleunigenden Massen erzeugt, besonders Doppelsternsystemen wie verschmelzenden schwarzen Löchern oder Neutronensternen, und transportieren Energie von der Quelle weg.",
          nl: "Gravitatiegolven zijn verstoringen in ruimtetijd zelf, voorspeld door Einstein's algemene relativiteit en voor het eerst direct gedetecteerd door LIGO in 2015. Ze worden geproduceerd door versnellende massa's, vooral binaire systemen zoals samenvoegende zwarte gaten of neutronensterren, en dragen energie weg van de bron."
        }
      },
      {
        question: {
          en: "What is the event horizon of a black hole?",
          es: "¿Qué es el horizonte de eventos de un agujero negro?",
          de: "Was ist der Ereignishorizont eines schwarzen Lochs?",
          nl: "Wat is de gebeurtenishorizon van een zwart gat?"
        },
        options: [
          {
            en: "The boundary beyond which nothing can escape, not even light",
            es: "La frontera más allá de la cual nada puede escapar, ni siquiera la luz",
            de: "Die Grenze, jenseits derer nichts entkommen kann, nicht einmal Licht",
            nl: "De grens voorbij welke niets kan ontsnappen, zelfs licht niet"
          },
          {
            en: "The center point where matter is infinitely compressed",
            es: "El punto central donde la materia está infinitamente comprimida",
            de: "Der zentrale Punkt, an dem Materie unendlich komprimiert ist",
            nl: "Het centrale punt waar materie oneindig is samengeperst"
          },
          {
            en: "The distance at which tidal forces become significant",
            es: "La distancia a la cual las fuerzas de marea se vuelven significativas",
            de: "Die Entfernung, bei der Gezeitenkräfte signifikant werden",
            nl: "De afstand waarbij getijdenkrachten significant worden"
          },
          {
            en: "The region where time flows backwards",
            es: "La región donde el tiempo fluye hacia atrás",
            de: "Die Region, in der die Zeit rückwärts fließt",
            nl: "Het gebied waar tijd achterwaarts stroomt"
          }
        ],
        correct: 0,
        explanation: {
          en: "The event horizon is the critical radius (Schwarzschild radius) around a black hole where the escape velocity equals the speed of light. For a non-rotating black hole, this radius is Rs = 2GM/c². Beyond this point, not even light can escape, making the black hole appear black to external observers.",
          es: "El horizonte de eventos es el radio crítico (radio de Schwarzschild) alrededor de un agujero negro donde la velocidad de escape iguala la velocidad de la luz. Para un agujero negro que no rota, este radio es Rs = 2GM/c². Más allá de este punto, ni siquiera la luz puede escapar, haciendo que el agujero negro parezca negro para los observadores externos.",
          de: "Der Ereignishorizont ist der kritische Radius (Schwarzschild-Radius) um ein schwarzes Loch herum, bei dem die Fluchtgeschwindigkeit der Lichtgeschwindigkeit entspricht. Für ein nicht rotierendes schwarzes Loch ist dieser Radius Rs = 2GM/c². Jenseits dieses Punkts kann nicht einmal Licht entkommen, wodurch das schwarze Loch für externe Beobachter schwarz erscheint.",
          nl: "De gebeurtenishorizon is de kritieke straal (Schwarzschild-straal) rond een zwart gat waar de ontsnappingssnelheid gelijk is aan de lichtsnelheid. Voor een niet-roterend zwart gat is deze straal Rs = 2GM/c². Voorbij dit punt kan zelfs licht niet ontsnappen, waardoor het zwarte gat zwart lijkt voor externe waarnemers."
        }
      },
      {
        question: {
          en: "What is the cosmological redshift?",
          es: "¿Qué es el corrimiento al rojo cosmológico?",
          de: "Was ist die kosmologische Rotverschiebung?",
          nl: "Wat is de kosmologische roodverschuiving?"
        },
        options: [
          {
            en: "The stretching of light wavelengths due to the expansion of space itself",
            es: "El estiramiento de las longitudes de onda de la luz debido a la expansión del espacio mismo",
            de: "Die Dehnung von Lichtwellenlängen aufgrund der Expansion des Raums selbst",
            nl: "Het uitrekken van lichtgolflengtes door de expansie van de ruimte zelf"
          },
          {
            en: "The Doppler shift of light from moving sources",
            es: "El corrimiento Doppler de la luz de fuentes en movimiento",
            de: "Die Doppler-Verschiebung von Licht aus bewegten Quellen",
            nl: "De Doppler-verschuiving van licht van bewegende bronnen"
          },
          {
            en: "The absorption of blue light by interstellar dust",
            es: "La absorción de luz azul por el polvo interestelar",
            de: "Die Absorption von blauem Licht durch interstellaren Staub",
            nl: "De absorptie van blauw licht door interstellair stof"
          },
          {
            en: "The gravitational lensing effect on distant light",
            es: "El efecto de lente gravitacional en la luz distante",
            de: "Der Gravitationslinseneffekt auf entferntes Licht",
            nl: "Het gravitatielenseffect op ver licht"
          }
        ],
        correct: 0,
        explanation: {
          en: "Cosmological redshift occurs because space itself is expanding, stretching the wavelengths of photons traveling through it. Unlike Doppler shift, this isn't due to motion through space, but rather the expansion of space itself. The redshift z is related to the scale factor by (1+z) = a₀/a(t).",
          es: "El corrimiento al rojo cosmológico ocurre porque el espacio mismo se está expandiendo, estirando las longitudes de onda de los fotones que viajan a través de él. A diferencia del corrimiento Doppler, esto no se debe al movimiento a través del espacio, sino a la expansión del espacio mismo. El corrimiento al rojo z está relacionado con el factor de escala por (1+z) = a₀/a(t).",
          de: "Die kosmologische Rotverschiebung tritt auf, weil der Raum selbst expandiert und dabei die Wellenlängen der durch ihn reisenden Photonen dehnt. Anders als bei der Doppler-Verschiebung ist dies nicht auf Bewegung durch den Raum zurückzuführen, sondern auf die Expansion des Raums selbst. Die Rotverschiebung z ist mit dem Skalenfaktor durch (1+z) = a₀/a(t) verknüpft.",
          nl: "Kosmologische roodverschuiving treedt op omdat de ruimte zelf uitdijt, waardoor de golflengtes van fotonen die erdoorheen reizen worden uitgerekt. Anders dan Doppler-verschuiving is dit niet te wijten aan beweging door de ruimte, maar aan de expansie van de ruimte zelf. De roodverschuiving z is gerelateerd aan de schaalfactor door (1+z) = a₀/a(t)."
        }
      },
      {
        question: {
          en: "What is the cosmological constant in Einstein's field equations?",
          es: "¿Qué es la constante cosmológica en las ecuaciones de campo de Einstein?",
          de: "Was ist die kosmologische Konstante in Einsteins Feldgleichungen?",
          nl: "Wat is de kosmologische constante in Einstein's veldvergelijkingen?"
        },
        options: [
          {
            en: "A term representing the energy density of empty space, associated with dark energy",
            es: "Un término que representa la densidad de energía del espacio vacío, asociado con la energía oscura",
            de: "Ein Term, der die Energiedichte des leeren Raums repräsentiert, verbunden mit dunkler Energie",
            nl: "Een term die de energiedichtheid van lege ruimte vertegenwoordigt, geassocieerd met donkere energie"
          },
          {
            en: "The maximum speed at which information can travel",
            es: "La velocidad máxima a la que puede viajar la información",
            de: "Die maximale Geschwindigkeit, mit der Informationen reisen können",
            nl: "De maximale snelheid waarmee informatie kan reizen"
          },
          {
            en: "The fundamental unit of spacetime curvature",
            es: "La unidad fundamental de curvatura del espacio-tiempo",
            de: "Die Grundeinheit der Raumzeitkrümmung",
            nl: "De fundamentele eenheid van ruimtetijdkromming"
          },
          {
            en: "The ratio of matter to antimatter in the universe",
            es: "La proporción de materia a antimateria en el universo",
            de: "Das Verhältnis von Materie zu Antimaterie im Universum",
            nl: "De verhouding van materie tot antimaterie in het universum"
          }
        ],
        correct: 0,
        explanation: {
          en: "The cosmological constant Λ was introduced by Einstein to allow for a static universe but is now associated with dark energy driving cosmic acceleration. It represents the energy density of vacuum itself. Einstein called it his 'greatest mistake,' though modern observations suggest it may be necessary to explain the accelerating expansion.",
          es: "La constante cosmológica Λ fue introducida por Einstein para permitir un universo estático pero ahora se asocia con la energía oscura que impulsa la aceleración cósmica. Representa la densidad de energía del vacío mismo. Einstein la llamó su 'mayor error', aunque las observaciones modernas sugieren que puede ser necesaria para explicar la expansión acelerada.",
          de: "Die kosmologische Konstante Λ wurde von Einstein eingeführt, um ein statisches Universum zu ermöglichen, wird aber jetzt mit dunkler Energie in Verbindung gebracht, die die kosmische Beschleunigung antreibt. Sie repräsentiert die Energiedichte des Vakuums selbst. Einstein nannte sie seinen 'größten Fehler', obwohl moderne Beobachtungen nahelegen, dass sie zur Erklärung der beschleunigten Expansion notwendig sein könnte.",
          nl: "De kosmologische constante Λ werd door Einstein geïntroduceerd om een statisch universum mogelijk te maken, maar wordt nu geassocieerd met donkere energie die kosmische versnelling aandrijft. Het vertegenwoordigt de energiedichtheid van het vacuüm zelf. Einstein noemde het zijn 'grootste fout', hoewel moderne waarnemingen suggereren dat het nodig kan zijn om de versnellende expansie te verklaren."
        }
      },
      {
        question: {
          en: "What is the Friedmann equation in cosmology?",
          es: "¿Qué es la ecuación de Friedmann en cosmología?",
          de: "Was ist die Friedmann-Gleichung in der Kosmologie?",
          nl: "Wat is de Friedmann-vergelijking in kosmologie?"
        },
        options: [
          {
            en: "An equation relating the expansion rate of the universe to its energy content",
            es: "Una ecuación que relaciona la tasa de expansión del universo con su contenido energético",
            de: "Eine Gleichung, die die Expansionsrate des Universums mit seinem Energieinhalt verknüpft",
            nl: "Een vergelijking die de expansiesnelheid van het universum relateert aan zijn energie-inhoud"
          },
          {
            en: "A formula for calculating the age of stars",
            es: "Una fórmula para calcular la edad de las estrellas",
            de: "Eine Formel zur Berechnung des Alters von Sternen",
            nl: "Een formule voor het berekenen van de leeftijd van sterren"
          },
          {
            en: "The equation describing black hole formation",
            es: "La ecuación que describe la formación de agujeros negros",
            de: "Die Gleichung, die die Entstehung schwarzer Löcher beschreibt",
            nl: "De vergelijking die zwarte gat vorming beschrijft"
          },
          {
            en: "A relationship between mass and gravitational field strength",
            es: "Una relación entre masa y fuerza del campo gravitacional",
            de: "Eine Beziehung zwischen Masse und Gravitationsfeldstärke",
            nl: "Een relatie tussen massa en gravitatieveldsterkte"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Friedmann equation is H² = (8πG/3)ρ - kc²/a² + Λc²/3, where H is the Hubble parameter, ρ is the density, k is the curvature parameter, a is the scale factor, and Λ is the cosmological constant. It describes how the expansion rate depends on the universe's matter, radiation, dark energy, and spatial curvature.",
          es: "La ecuación de Friedmann es H² = (8πG/3)ρ - kc²/a² + Λc²/3, donde H es el parámetro de Hubble, ρ es la densidad, k es el parámetro de curvatura, a es el factor de escala, y Λ es la constante cosmológica. Describe cómo la tasa de expansión depende de la materia, radiación, energía oscura y curvatura espacial del universo.",
          de: "Die Friedmann-Gleichung ist H² = (8πG/3)ρ - kc²/a² + Λc²/3, wobei H der Hubble-Parameter, ρ die Dichte, k der Krümmungsparameter, a der Skalenfaktor und Λ die kosmologische Konstante ist. Sie beschreibt, wie die Expansionsrate von der Materie, Strahlung, dunklen Energie und räumlichen Krümmung des Universums abhängt.",
          nl: "De Friedmann-vergelijking is H² = (8πG/3)ρ - kc²/a² + Λc²/3, waarbij H de Hubble-parameter is, ρ de dichtheid, k de krommingsparameter, a de schaalfactor, en Λ de kosmologische constante. Het beschrijft hoe de expansiesnelheid afhangt van het universum's materie, straling, donkere energie, en ruimtelijke kromming."
        }
      },
      {
        question: {
          en: "What is the geodesic equation in general relativity?",
          es: "¿Qué es la ecuación geodésica en la relatividad general?",
          de: "Was ist die Geodätengleichung in der allgemeinen Relativitätstheorie?",
          nl: "Wat is de geodetische vergelijking in algemene relativiteit?"
        },
        options: [
          {
            en: "The equation describing the path of freely falling particles in curved spacetime",
            es: "La ecuación que describe el camino de partículas en caída libre en el espacio-tiempo curvado",
            de: "Die Gleichung, die den Weg frei fallender Teilchen in gekrümmter Raumzeit beschreibt",
            nl: "De vergelijking die het pad van vrij vallende deeltjes in gekromde ruimtetijd beschrijft"
          },
          {
            en: "A formula for measuring distances on Earth's surface",
            es: "Una fórmula para medir distancias en la superficie terrestre",
            de: "Eine Formel zur Messung von Entfernungen auf der Erdoberfläche",
            nl: "Een formule voor het meten van afstanden op het aardoppervlak"
          },
          {
            en: "The equation for electromagnetic field propagation",
            es: "La ecuación para la propagación del campo electromagnético",
            de: "Die Gleichung für die Ausbreitung elektromagnetischer Felder",
            nl: "De vergelijking voor elektromagnetische veldvoortplanting"
          },
          {
            en: "A method for calculating orbital periods",
            es: "Un método para calcular períodos orbitales",
            de: "Eine Methode zur Berechnung von Umlaufzeiten",
            nl: "Een methode voor het berekenen van omlooptijden"
          }
        ],
        correct: 0,
        explanation: {
          en: "The geodesic equation d²x^μ/dτ² + Γ^μ_νλ (dx^ν/dτ)(dx^λ/dτ) = 0 describes how particles move along geodesics (shortest paths) in curved spacetime when no non-gravitational forces act on them. The Christoffel symbols Γ^μ_νλ encode the spacetime curvature information.",
          es: "La ecuación geodésica d²x^μ/dτ² + Γ^μ_νλ (dx^ν/dτ)(dx^λ/dτ) = 0 describe cómo se mueven las partículas a lo largo de geodésicas (caminos más cortos) en el espacio-tiempo curvado cuando no actúan fuerzas no gravitacionales sobre ellas. Los símbolos de Christoffel Γ^μ_νλ codifican la información de curvatura del espacio-tiempo.",
          de: "Die Geodätengleichung d²x^μ/dτ² + Γ^μ_νλ (dx^ν/dτ)(dx^λ/dτ) = 0 beschreibt, wie sich Teilchen entlang von Geodäten (kürzeste Wege) in gekrümmter Raumzeit bewegen, wenn keine nicht-gravitationalen Kräfte auf sie einwirken. Die Christoffel-Symbole Γ^μ_νλ kodieren die Raumzeitkrümmungsinformation.",
          nl: "De geodetische vergelijking d²x^μ/dτ² + Γ^μ_νλ (dx^ν/dτ)(dx^λ/dτ) = 0 beschrijft hoe deeltjes bewegen langs geodeten (kortste paden) in gekromde ruimtetijd wanneer geen niet-gravitationele krachten op hen werken. De Christoffel-symbolen Γ^μ_νλ coderen de ruimtetijdkrommings-informatie."
        }
      },
      {
        question: {
          en: "What is the significance of the Schwarzschild solution?",
          es: "¿Cuál es la importancia de la solución de Schwarzschild?",
          de: "Was ist die Bedeutung der Schwarzschild-Lösung?",
          nl: "Wat is de betekenis van de Schwarzschild-oplossing?"
        },
        options: [
          {
            en: "It describes the spacetime geometry around a spherically symmetric, non-rotating mass",
            es: "Describe la geometría del espacio-tiempo alrededor de una masa esféricamente simétrica que no rota",
            de: "Sie beschreibt die Raumzeitgeometrie um eine sphärisch symmetrische, nicht rotierende Masse",
            nl: "Het beschrijft de ruimtetijdgeometrie rond een sferisch symmetrische, niet-roterende massa"
          },
          {
            en: "It proves that black holes cannot exist in nature",
            es: "Prueba que los agujeros negros no pueden existir en la naturaleza",
            de: "Sie beweist, dass schwarze Löcher in der Natur nicht existieren können",
            nl: "Het bewijst dat zwarte gaten niet kunnen bestaan in de natuur"
          },
          {
            en: "It describes the interior structure of neutron stars",
            es: "Describe la estructura interior de las estrellas de neutrones",
            de: "Sie beschreibt die innere Struktur von Neutronensternen",
            nl: "Het beschrijft de binnenstructuur van neutronensterren"
          },
          {
            en: "It explains the origin of cosmic microwave background",
            es: "Explica el origen del fondo cósmico de microondas",
            de: "Sie erklärt den Ursprung der kosmischen Mikrowellen-Hintergrundstrahlung",
            nl: "Het verklaart de oorsprong van kosmische microgolfachtergrond"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Schwarzschild solution is the first exact solution to Einstein's field equations, describing spacetime around a spherically symmetric, non-rotating massive object. It predicts phenomena like gravitational time dilation, light bending, and the existence of black holes with event horizons at the Schwarzschild radius.",
          es: "La solución de Schwarzschild es la primera solución exacta a las ecuaciones de campo de Einstein, describiendo el espacio-tiempo alrededor de un objeto masivo esféricamente simétrico que no rota. Predice fenómenos como la dilatación gravitacional del tiempo, la curvatura de la luz, y la existencia de agujeros negros con horizontes de eventos en el radio de Schwarzschild.",
          de: "Die Schwarzschild-Lösung ist die erste exakte Lösung zu Einsteins Feldgleichungen und beschreibt die Raumzeit um ein sphärisch symmetrisches, nicht rotierendes massives Objekt. Sie sagt Phänomene wie gravitationale Zeitdilatation, Lichtablenkung und die Existenz schwarzer Löcher mit Ereignishorizonten am Schwarzschild-Radius vorher.",
          nl: "De Schwarzschild-oplossing is de eerste exacte oplossing voor Einstein's veldvergelijkingen, die ruimtetijd beschrijft rond een sferisch symmetrisch, niet-roterend massief object. Het voorspelt fenomenen zoals gravitationele tijddilatatie, lichtbuiging, en het bestaan van zwarte gaten met gebeurtenishorizonten bij de Schwarzschild-straal."
        }
      },
      {
        question: {
          en: "What is frame dragging in general relativity?",
          es: "¿Qué es el arrastre de marco en la relatividad general?",
          de: "Was ist Rahmen-Dragging in der allgemeinen Relativitätstheorie?",
          nl: "Wat is frame-dragging in algemene relativiteit?"
        },
        options: [
          {
            en: "The effect where rotating massive objects drag spacetime around with them",
            es: "El efecto donde los objetos masivos en rotación arrastran el espacio-tiempo con ellos",
            de: "Der Effekt, bei dem rotierende massive Objekte die Raumzeit mit sich mitziehen",
            nl: "Het effect waarbij roterende massieve objecten ruimtetijd met zich mee slepen"
          },
          {
            en: "The slowing of time near massive objects",
            es: "La ralentización del tiempo cerca de objetos masivos",
            de: "Die Verlangsamung der Zeit in der Nähe massiver Objekte",
            nl: "Het vertragen van tijd nabij massieve objecten"
          },
          {
            en: "The bending of light paths in gravitational fields",
            es: "La curvatura de los caminos de la luz en campos gravitacionales",
            de: "Die Krümmung von Lichtbahnen in Gravitationsfeldern",
            nl: "De buiging van lichtpaden in gravitatievelden"
          },
          {
            en: "The expansion of space between distant galaxies",
            es: "La expansión del espacio entre galaxias distantes",
            de: "Die Expansion des Raums zwischen entfernten Galaxien",
            nl: "De uitdijing van ruimte tussen verre sterrenstelsels"
          }
        ],
        correct: 0,
        explanation: {
          en: "Frame dragging (Lense-Thirring effect) occurs when rotating massive objects cause nearby spacetime to rotate with them. This means that reference frames are 'dragged along' by the rotation. The effect has been measured around Earth and is significant near rotating black holes (described by the Kerr solution).",
          es: "El arrastre de marco (efecto Lense-Thirring) ocurre cuando objetos masivos en rotación causan que el espacio-tiempo cercano rote con ellos. Esto significa que los marcos de referencia son 'arrastrados' por la rotación. El efecto ha sido medido alrededor de la Tierra y es significativo cerca de agujeros negros en rotación (descrito por la solución de Kerr).",
          de: "Rahmen-Dragging (Lense-Thirring-Effekt) tritt auf, wenn rotierende massive Objekte die nahe Raumzeit dazu bringen, mit ihnen zu rotieren. Das bedeutet, dass Bezugssysteme von der Rotation 'mitgezogen' werden. Der Effekt wurde um die Erde gemessen und ist in der Nähe rotierender schwarzer Löcher signifikant (beschrieben durch die Kerr-Lösung).",
          nl: "Frame-dragging (Lense-Thirring-effect) treedt op wanneer roterende massieve objecten nabije ruimtetijd doen roteren met hen mee. Dit betekent dat referentiekaders worden 'meegesleept' door de rotatie. Het effect is gemeten rond de aarde en is significant nabij roterende zwarte gaten (beschreven door de Kerr-oplossing)."
        }
      },
      {
        question: {
          en: "What is the weak field approximation in general relativity?",
          es: "¿Qué es la aproximación de campo débil en la relatividad general?",
          de: "Was ist die Schwachfeld-Näherung in der allgemeinen Relativitätstheorie?",
          nl: "Wat is de zwakke veld benadering in algemene relativiteit?"
        },
        options: [
          {
            en: "A linearized version of Einstein's equations valid when gravitational fields are weak",
            es: "Una versión linearizada de las ecuaciones de Einstein válida cuando los campos gravitacionales son débiles",
            de: "Eine linearisierte Version von Einsteins Gleichungen, die gültig ist, wenn Gravitationsfelder schwach sind",
            nl: "Een gelineariseerde versie van Einstein's vergelijkingen geldig wanneer gravitatievelden zwak zijn"
          },
          {
            en: "The limit where general relativity reduces to special relativity",
            es: "El límite donde la relatividad general se reduce a la relatividad especial",
            de: "Der Grenzfall, wo die allgemeine Relativitätstheorie zur speziellen Relativitätstheorie reduziert wird",
            nl: "De limiet waar algemene relativiteit reduceert tot speciale relativiteit"
          },
          {
            en: "A method for solving strong field black hole problems",
            es: "Un método para resolver problemas de agujeros negros de campo fuerte",
            de: "Eine Methode zur Lösung von Starkfeld-Schwarzloch-Problemen",
            nl: "Een methode voor het oplossen van sterke veld zwarte gat problemen"
          },
          {
            en: "The approximation used only for cosmological scales",
            es: "La aproximación usada solo para escalas cosmológicas",
            de: "Die Näherung, die nur für kosmologische Skalen verwendet wird",
            nl: "De benadering die alleen wordt gebruikt voor kosmologische schalen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The weak field approximation treats the metric as g_μν = η_μν + h_μν, where η_μν is the Minkowski metric and h_μν is a small perturbation. This linearizes Einstein's equations and is valid when |h_μν| << 1, applicable to most situations in the solar system and for gravitational wave analysis.",
          es: "La aproximación de campo débil trata la métrica como g_μν = η_μν + h_μν, donde η_μν es la métrica de Minkowski y h_μν es una pequeña perturbación. Esto lineariza las ecuaciones de Einstein y es válido cuando |h_μν| << 1, aplicable a la mayoría de situaciones en el sistema solar y para el análisis de ondas gravitacionales.",
          de: "Die Schwachfeld-Näherung behandelt die Metrik als g_μν = η_μν + h_μν, wobei η_μν die Minkowski-Metrik und h_μν eine kleine Störung ist. Dies linearisiert Einsteins Gleichungen und ist gültig, wenn |h_μν| << 1, anwendbar auf die meisten Situationen im Sonnensystem und für die Gravitationswellenanalyse.",
          nl: "De zwakke veld benadering behandelt de metriek als g_μν = η_μν + h_μν, waarbij η_μν de Minkowski-metriek is en h_μν een kleine verstoring. Dit lineariseert Einstein's vergelijkingen en is geldig wanneer |h_μν| << 1, toepasbaar op de meeste situaties in het zonnestelsel en voor gravitatiegolfanalyse."
        }
      },
      {
        question: {
          en: "What is the information paradox related to black holes?",
          es: "¿Qué es la paradoja de la información relacionada con los agujeros negros?",
          de: "Was ist das Informationsparadox im Zusammenhang mit schwarzen Löchern?",
          nl: "Wat is de informatieparadox gerelateerd aan zwarte gaten?"
        },
        options: [
          {
            en: "The apparent conflict between quantum mechanics and general relativity regarding information preservation",
            es: "El conflicto aparente entre la mecánica cuántica y la relatividad general respecto a la preservación de la información",
            de: "Der scheinbare Konflikt zwischen Quantenmechanik und allgemeiner Relativitätstheorie bezüglich der Informationserhaltung",
            nl: "Het schijnbare conflict tussen kwantummechanica en algemene relativiteit betreffende informatiebehoud"
          },
          {
            en: "The difficulty in observing black holes directly",
            es: "La dificultad de observar agujeros negros directamente",
            de: "Die Schwierigkeit, schwarze Löcher direkt zu beobachten",
            nl: "De moeilijkheid om zwarte gaten direct waar te nemen"
          },
          {
            en: "The problem of measuring black hole masses accurately",
            es: "El problema de medir las masas de los agujeros negros con precisión",
            de: "Das Problem der genauen Messung von Schwarzloch-Massen",
            nl: "Het probleem van het nauwkeurig meten van zwarte gat massa's"
          },
          {
            en: "The uncertainty in predicting black hole formation",
            es: "La incertidumbre en predecir la formación de agujeros negros",
            de: "Die Unsicherheit bei der Vorhersage der Schwarzloch-Entstehung",
            nl: "De onzekerheid in het voorspellen van zwarte gat vorming"
          }
        ],
        correct: 0,
        explanation: {
          en: "The black hole information paradox arises from the conflict between quantum mechanics (which requires information conservation) and general relativity's prediction that information falling into a black hole is destroyed when the black hole evaporates via Hawking radiation. This fundamental problem remains unsolved and challenges our understanding of quantum gravity.",
          es: "La paradoja de la información del agujero negro surge del conflicto entre la mecánica cuántica (que requiere conservación de la información) y la predicción de la relatividad general de que la información que cae en un agujero negro se destruye cuando el agujero negro se evapora vía radiación de Hawking. Este problema fundamental permanece sin resolver y desafía nuestro entendimiento de la gravedad cuántica.",
          de: "Das Schwarzloch-Informationsparadox entsteht durch den Konflikt zwischen Quantenmechanik (die Informationserhaltung erfordert) und der Vorhersage der allgemeinen Relativitätstheorie, dass Information, die in ein schwarzes Loch fällt, zerstört wird, wenn das schwarze Loch durch Hawking-Strahlung verdampft. Dieses fundamentale Problem bleibt ungelöst und stellt unser Verständnis der Quantengravitation in Frage.",
          nl: "De zwarte gat informatieparadox ontstaat door het conflict tussen kwantummechanica (die informatieberging vereist) en algemene relativiteit's voorspelling dat informatie die in een zwart gat valt wordt vernietigd wanneer het zwarte gat verdampt via Hawking-straling. Dit fundamentele probleem blijft onopgelost en daagt ons begrip van kwantumzwaartekracht uit."
        }
      }
    ]

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/theoretical-physics', level2);
  }
})();
