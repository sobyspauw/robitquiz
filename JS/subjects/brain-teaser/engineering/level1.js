// Engineering - Level 1: Fundamentals of Engineering
(function() {
  const level1 = {
    name: {
      en: "Fundamentals of Engineering",
      es: "Fundamentos de Ingeniería", 
      de: "Grundlagen der Ingenieurwissenschaften",
      nl: "Grondbeginselen van Engineering"
    },
    questions: [
      {
        question: {
          en: "What is the SI unit for force?",
          es: "¿Cuál es la unidad SI para la fuerza?",
          de: "Was ist die SI-Einheit für Kraft?",
          nl: "Wat is de SI-eenheid voor kracht?"
        },
        options: [
          { en: "Newton", es: "Newton", de: "Newton", nl: "Newton" },
          { en: "Joule", es: "Julio", de: "Joule", nl: "Joule" },
          { en: "Pascal", es: "Pascal", de: "Pascal", nl: "Pascal" },
          { en: "Watt", es: "Vatio", de: "Watt", nl: "Watt" }
        ],
        correct: 0,
        explanation: {
          en: "The Newton (N) is the SI unit for force, defined as the force needed to accelerate a 1 kg mass at 1 m/s². It's named after Sir Isaac Newton.",
          es: "El Newton (N) es la unidad SI para la fuerza, definida como la fuerza necesaria para acelerar una masa de 1 kg a 1 m/s². Lleva el nombre de Sir Isaac Newton.",
          de: "Das Newton (N) ist die SI-Einheit für Kraft, definiert als die Kraft, die benötigt wird, um eine Masse von 1 kg mit 1 m/s² zu beschleunigen. Es ist nach Sir Isaac Newton benannt.",
          nl: "De Newton (N) is de SI-eenheid voor kracht, gedefinieerd als de kracht die nodig is om een massa van 1 kg te versnellen met 1 m/s². Het is genoemd naar Sir Isaac Newton."
        }
      },
      {
        question: {
          en: "Which simple machine multiplies force by using a fulcrum?",
          es: "¿Qué máquina simple multiplica la fuerza usando un fulcro?",
          de: "Welche einfache Maschine vervielfacht die Kraft durch einen Drehpunkt?",
          nl: "Welke eenvoudige machine vermenigvuldigt kracht door gebruik van een draaipunt?"
        },
        options: [
          { en: "Lever", es: "Palanca", de: "Hebel", nl: "Hefboom" },
          { en: "Pulley", es: "Polea", de: "Flaschenzug", nl: "Katrol" },
          { en: "Inclined plane", es: "Plano inclinado", de: "Schiefe Ebene", nl: "Hellend vlak" },
          { en: "Screw", es: "Tornillo", de: "Schraube", nl: "Schroef" }
        ],
        correct: 0,
        explanation: {
          en: "A lever uses a fulcrum (pivot point) to multiply force or distance. The mechanical advantage depends on the ratio of the effort arm to the load arm.",
          es: "Una palanca usa un fulcro (punto de apoyo) para multiplicar fuerza o distancia. La ventaja mecánica depende de la relación entre el brazo de esfuerzo y el brazo de carga.",
          de: "Ein Hebel nutzt einen Drehpunkt, um Kraft oder Entfernung zu vervielfachen. Der mechanische Vorteil hängt vom Verhältnis des Kraftarms zum Lastarm ab.",
          nl: "Een hefboom gebruikt een draaipunt om kracht of afstand te vermenigvuldigen. Het mechanische voordeel hangt af van de verhouding tussen de krachtarm en de lastarm."
        }
      },
      {
        question: {
          en: "What does the first law of thermodynamics state?",
          es: "¿Qué establece la primera ley de la termodinámica?",
          de: "Was besagt der erste Hauptsatz der Thermodynamik?",
          nl: "Wat stelt de eerste wet van de thermodynamica?"
        },
        options: [
          { en: "Energy cannot be created or destroyed", es: "La energía no puede ser creada o destruida", de: "Energie kann nicht erzeugt oder zerstört werden", nl: "Energie kan niet worden gecreëerd of vernietigd" },
          { en: "Heat flows from hot to cold", es: "El calor fluye de caliente a frío", de: "Wärme fließt von heiß zu kalt", nl: "Warmte stroomt van warm naar koud" },
          { en: "Entropy always increases", es: "La entropía siempre aumenta", de: "Die Entropie nimmt immer zu", nl: "Entropie neemt altijd toe" },
          { en: "Absolute zero is unattainable", es: "El cero absoluto es inalcanzable", de: "Der absolute Nullpunkt ist unerreichbar", nl: "Het absolute nulpunt is onbereikbaar" }
        ],
        correct: 0,
        explanation: {
          en: "The first law of thermodynamics is the principle of conservation of energy: energy cannot be created or destroyed, only transformed from one form to another.",
          es: "La primera ley de la termodinámica es el principio de conservación de la energía: la energía no puede ser creada o destruida, solo transformada de una forma a otra.",
          de: "Der erste Hauptsatz der Thermodynamik ist das Prinzip der Energieerhaltung: Energie kann nicht erzeugt oder zerstört werden, nur von einer Form in eine andere umgewandelt werden.",
          nl: "De eerste wet van de thermodynamica is het principe van energiebehoud: energie kan niet worden gecreëerd of vernietigd, alleen getransformeerd van de ene vorm naar de andere."
        }
      },
      {
        question: {
          en: "What is the engineering design process first step?",
          es: "¿Cuál es el primer paso del proceso de diseño de ingeniería?",
          de: "Was ist der erste Schritt im Ingenieur-Designprozess?",
          nl: "Wat is de eerste stap van het engineering ontwerpproces?"
        },
        options: [
          { en: "Define the problem", es: "Definir el problema", de: "Das Problem definieren", nl: "Het probleem definiëren" },
          { en: "Generate solutions", es: "Generar soluciones", de: "Lösungen generieren", nl: "Oplossingen genereren" },
          { en: "Build a prototype", es: "Construir un prototipo", de: "Einen Prototyp bauen", nl: "Een prototype bouwen" },
          { en: "Test the design", es: "Probar el diseño", de: "Das Design testen", nl: "Het ontwerp testen" }
        ],
        correct: 0,
        explanation: {
          en: "The engineering design process begins with clearly defining and understanding the problem. This ensures the solution addresses the actual need and requirements.",
          es: "El proceso de diseño de ingeniería comienza con definir y entender claramente el problema. Esto asegura que la solución aborde la necesidad y requisitos reales.",
          de: "Der Ingenieur-Designprozess beginnt mit der klaren Definition und dem Verständnis des Problems. Dies stellt sicher, dass die Lösung den tatsächlichen Bedarf und die Anforderungen erfüllt.",
          nl: "Het engineering ontwerpproces begint met het duidelijk definiëren en begrijpen van het probleem. Dit zorgt ervoor dat de oplossing de werkelijke behoefte en eisen aanpakt."
        }
      },
      {
        question: {
          en: "What is the relationship between stress and strain called?",
          es: "¿Cómo se llama la relación entre esfuerzo y deformación?",
          de: "Wie nennt man die Beziehung zwischen Spannung und Dehnung?",
          nl: "Hoe wordt de relatie tussen spanning en rek genoemd?"
        },
        options: [
          { en: "Modulus of elasticity", es: "Módulo de elasticidad", de: "Elastizitätsmodul", nl: "Elasticiteitsmodulus" },
          { en: "Yield strength", es: "Límite elástico", de: "Streckgrenze", nl: "Vloeigrens" },
          { en: "Shear modulus", es: "Módulo de corte", de: "Schubmodul", nl: "Schuifmodulus" },
          { en: "Bulk modulus", es: "Módulo de compresibilidad", de: "Kompressionsmodul", nl: "Bulkmodulus" }
        ],
        correct: 0,
        explanation: {
          en: "The modulus of elasticity (Young's modulus) defines the relationship between stress and strain in the elastic region of a material's behavior.",
          es: "El módulo de elasticidad (módulo de Young) define la relación entre esfuerzo y deformación en la región elástica del comportamiento de un material.",
          de: "Das Elastizitätsmodul (Young-Modul) definiert die Beziehung zwischen Spannung und Dehnung im elastischen Bereich des Materialverhaltens.",
          nl: "De elasticiteitsmodulus (Young's modulus) definieert de relatie tussen spanning en rek in het elastische gebied van het gedrag van een materiaal."
        }
      },
      {
        question: {
          en: "What is the standard factor of safety used in most engineering designs?",
          es: "¿Cuál es el factor de seguridad estándar usado en la mayoría de los diseños de ingeniería?",
          de: "Was ist der Standard-Sicherheitsfaktor in den meisten technischen Designs?",
          nl: "Wat is de standaard veiligheidsfactor gebruikt in de meeste engineering ontwerpen?"
        },
        options: [
          { en: "2.0", es: "2.0", de: "2.0", nl: "2.0" },
          { en: "1.5", es: "1.5", de: "1.5", nl: "1.5" },
          { en: "3.0", es: "3.0", de: "3.0", nl: "3.0" },
          { en: "4.0", es: "4.0", de: "4.0", nl: "4.0" }
        ],
        correct: 0,
        explanation: {
          en: "A factor of safety of 2.0 is commonly used in engineering design, meaning the design can handle twice the expected load to account for uncertainties and ensure safe operation.",
          es: "Un factor de seguridad de 2.0 se usa comúnmente en el diseño de ingeniería, significando que el diseño puede manejar el doble de la carga esperada para tener en cuenta las incertidumbres y asegurar una operación segura.",
          de: "Ein Sicherheitsfaktor von 2.0 wird häufig im technischen Design verwendet, was bedeutet, dass das Design das Doppelte der erwarteten Last bewältigen kann, um Unsicherheiten zu berücksichtigen und einen sicheren Betrieb zu gewährleisten.",
          nl: "Een veiligheidsfactor van 2.0 wordt vaak gebruikt in engineering ontwerp, wat betekent dat het ontwerp het dubbele van de verwachte belasting aankan om onzekerheden te compenseren en veilige werking te garanderen."
        }
      },
      {
        question: {
          en: "What happens to the viscosity of most liquids when temperature increases?",
          es: "¿Qué le pasa a la viscosidad de la mayoría de los líquidos cuando aumenta la temperatura?",
          de: "Was passiert mit der Viskosität der meisten Flüssigkeiten, wenn die Temperatur steigt?",
          nl: "Wat gebeurt er met de viscositeit van de meeste vloeistoffen als de temperatuur stijgt?"
        },
        options: [
          { en: "It decreases", es: "Disminuye", de: "Sie nimmt ab", nl: "Het neemt af" },
          { en: "It increases", es: "Aumenta", de: "Sie nimmt zu", nl: "Het neemt toe" },
          { en: "It remains constant", es: "Permanece constante", de: "Sie bleibt konstant", nl: "Het blijft constant" },
          { en: "It fluctuates randomly", es: "Fluctúa aleatoriamente", de: "Sie schwankt zufällig", nl: "Het fluctueert willekeurig" }
        ],
        correct: 0,
        explanation: {
          en: "As temperature increases, the viscosity of most liquids decreases because higher thermal energy allows molecules to move more freely, reducing internal friction.",
          es: "A medida que aumenta la temperatura, la viscosidad de la mayoría de los líquidos disminuye porque una mayor energía térmica permite que las moléculas se muevan más libremente, reduciendo la fricción interna.",
          de: "Mit steigender Temperatur nimmt die Viskosität der meisten Flüssigkeiten ab, da höhere thermische Energie es den Molekülen ermöglicht, sich freier zu bewegen und die innere Reibung zu reduzieren.",
          nl: "Naarmate de temperatuur stijgt, neemt de viscositeit van de meeste vloeistoffen af omdat hogere thermische energie moleculen in staat stelt vrijer te bewegen, waardoor interne wrijving afneemt."
        }
      },
      {
        question: {
          en: "Which electrical component opposes the flow of alternating current more than direct current?",
          es: "¿Qué componente eléctrico se opone más al flujo de corriente alterna que a la corriente directa?",
          de: "Welches elektrische Bauteil wirkt dem Wechselstrom mehr entgegen als dem Gleichstrom?",
          nl: "Welk elektrisch component verzet zich meer tegen wisselstroom dan tegen gelijkstroom?"
        },
        options: [
          { en: "Inductor", es: "Inductor", de: "Spule", nl: "Spoel" },
          { en: "Resistor", es: "Resistor", de: "Widerstand", nl: "Weerstand" },
          { en: "Capacitor", es: "Capacitor", de: "Kondensator", nl: "Condensator" },
          { en: "Transformer", es: "Transformador", de: "Transformator", nl: "Transformator" }
        ],
        correct: 0,
        explanation: {
          en: "An inductor creates reactance that opposes changes in current, making it more resistive to AC than DC. The reactance increases with frequency (XL = 2πfL).",
          es: "Un inductor crea reactancia que se opone a los cambios en la corriente, haciéndolo más resistivo a AC que a DC. La reactancia aumenta con la frecuencia (XL = 2πfL).",
          de: "Eine Spule erzeugt Reaktanz, die Stromänderungen entgegenwirkt und sie widerstandsfähiger gegen Wechselstrom als gegen Gleichstrom macht. Die Reaktanz steigt mit der Frequenz (XL = 2πfL).",
          nl: "Een spoel creëert reactantie die veranderingen in stroom tegenwerkt, waardoor het meer weerstand biedt aan AC dan aan DC. De reactantie stijgt met frequentie (XL = 2πfL)."
        }
      },
      {
        question: {
          en: "What is the critical buckling load proportional to in column design?",
          es: "¿A qué es proporcional la carga crítica de pandeo en el diseño de columnas?",
          de: "Wozu ist die kritische Knickast im Säulendesign proportional?",
          nl: "Waaraan is de kritische knikbelasting evenredig in kolomontwerp?"
        },
        options: [
          { en: "Moment of inertia", es: "Momento de inercia", de: "Trägheitsmoment", nl: "Traagheidsmoment" },
          { en: "Cross-sectional area", es: "Área de sección transversal", de: "Querschnittsfläche", nl: "Dwarsdoorsnede oppervlak" },
          { en: "Material density", es: "Densidad del material", de: "Materialdichte", nl: "Materiaaldichtheid" },
          { en: "Column height", es: "Altura de la columna", de: "Säulenhöhe", nl: "Kolomhoogte" }
        ],
        correct: 0,
        explanation: {
          en: "According to Euler's buckling formula, the critical buckling load is directly proportional to the moment of inertia (I) and inversely proportional to the square of the column length.",
          es: "Según la fórmula de pandeo de Euler, la carga crítica de pandeo es directamente proporcional al momento de inercia (I) e inversamente proporcional al cuadrado de la longitud de la columna.",
          de: "Gemäß der Euler-Knickformel ist die kritische Knicklast direkt proportional zum Trägheitsmoment (I) und umgekehrt proportional zum Quadrat der Säulenlänge.",
          nl: "Volgens Euler's knikformule is de kritische knikbelasting direct evenredig met het traagheidsmoment (I) en omgekeerd evenredig met het kwadraat van de kolomlengte."
        }
      },
      {
        question: {
          en: "What is the primary mode of heat transfer in solids?",
          es: "¿Cuál es el modo principal de transferencia de calor en sólidos?",
          de: "Was ist die primäre Art der Wärmeübertragung in Festkörpern?",
          nl: "Wat is de primaire wijze van warmteoverdracht in vaste stoffen?"
        },
        options: [
          { en: "Conduction", es: "Conducción", de: "Wärmeleitung", nl: "Geleiding" },
          { en: "Convection", es: "Convección", de: "Konvektion", nl: "Convectie" },
          { en: "Radiation", es: "Radiación", de: "Strahlung", nl: "Straling" },
          { en: "Evaporation", es: "Evaporación", de: "Verdampfung", nl: "Verdamping" }
        ],
        correct: 0,
        explanation: {
          en: "Conduction is the primary mode of heat transfer in solids, where heat energy is transferred through direct contact between molecules without bulk movement of the material.",
          es: "La conducción es el modo principal de transferencia de calor en sólidos, donde la energía térmica se transfiere a través del contacto directo entre moléculas sin movimiento en masa del material.",
          de: "Wärmeleitung ist die primäre Art der Wärmeübertragung in Festkörpern, bei der thermische Energie durch direkten Kontakt zwischen Molekülen ohne Massenbewegung des Materials übertragen wird.",
          nl: "Geleiding is de primaire wijze van warmteoverdracht in vaste stoffen, waarbij warmte-energie wordt overgedragen via direct contact tussen moleculen zonder bulk beweging van het materiaal."
        }
      },
      {
        question: {
          en: "In Ohm's Law, what does the equation V = IR represent?",
          es: "En la Ley de Ohm, ¿qué representa la ecuación V = IR?",
          de: "Was repräsentiert die Gleichung V = IR im Ohmschen Gesetz?",
          nl: "Wat vertegenwoordigt de vergelijking V = IR in de Wet van Ohm?"
        },
        options: [
          { en: "Voltage equals current times resistance", es: "Voltaje igual corriente por resistencia", de: "Spannung gleich Strom mal Widerstand", nl: "Spanning gelijk stroom maal weerstand" },
          { en: "Volume equals inertia times rotation", es: "Volumen igual inercia por rotación", de: "Volumen gleich Trägheit mal Rotation", nl: "Volume gelijk traagheid maal rotatie" },
          { en: "Velocity equals impulse times rate", es: "Velocidad igual impulso por tasa", de: "Geschwindigkeit gleich Impuls mal Rate", nl: "Snelheid gelijk impuls maal verhouding" },
          { en: "Vector equals intensity times radius", es: "Vector igual intensidad por radio", de: "Vektor gleich Intensität mal Radius", nl: "Vector gelijk intensiteit maal straal" }
        ],
        correct: 0,
        explanation: {
          en: "Ohm's Law states that voltage (V) equals current (I) times resistance (R). This fundamental relationship governs the behavior of electrical circuits.",
          es: "La Ley de Ohm establece que el voltaje (V) es igual a la corriente (I) por la resistencia (R). Esta relación fundamental gobierna el comportamiento de los circuitos eléctricos.",
          de: "Das Ohmsche Gesetz besagt, dass die Spannung (V) gleich dem Strom (I) mal dem Widerstand (R) ist. Diese grundlegende Beziehung bestimmt das Verhalten elektrischer Schaltkreise.",
          nl: "De Wet van Ohm stelt dat spanning (V) gelijk is aan stroom (I) maal weerstand (R). Deze fundamentele relatie beheerst het gedrag van elektrische circuits."
        }
      },
      {
        question: {
          en: "What is the derivative of velocity with respect to time?",
          es: "¿Cuál es la derivada de la velocidad con respecto al tiempo?",
          de: "Was ist die Ableitung der Geschwindigkeit nach der Zeit?",
          nl: "Wat is de afgeleide van snelheid naar tijd?"
        },
        options: [
          { en: "Acceleration", es: "Aceleración", de: "Beschleunigung", nl: "Versnelling" },
          { en: "Displacement", es: "Desplazamiento", de: "Verschiebung", nl: "Verplaatsing" },
          { en: "Force", es: "Fuerza", de: "Kraft", nl: "Kracht" },
          { en: "Momentum", es: "Momento", de: "Impuls", nl: "Momentum" }
        ],
        correct: 0,
        explanation: {
          en: "Acceleration is the rate of change of velocity with respect to time, mathematically expressed as a = dv/dt. This is a fundamental concept in kinematics.",
          es: "La aceleración es la tasa de cambio de la velocidad con respecto al tiempo, expresada matemáticamente como a = dv/dt. Este es un concepto fundamental en la cinemática.",
          de: "Beschleunigung ist die Änderungsrate der Geschwindigkeit bezüglich der Zeit, mathematisch ausgedrückt als a = dv/dt. Dies ist ein grundlegendes Konzept in der Kinematik.",
          nl: "Versnelling is de veranderingssnelheid van snelheid ten opzichte van tijd, wiskundig uitgedrukt als a = dv/dt. Dit is een fundamenteel concept in de kinematica."
        }
      },
      {
        question: {
          en: "Which material property determines how much a material will deform under stress?",
          es: "¿Qué propiedad del material determina cuánto se deformará un material bajo estrés?",
          de: "Welche Materialeigenschaft bestimmt, wie stark sich ein Material unter Spannung verformt?",
          nl: "Welke materiaaleigenschap bepaalt hoeveel een materiaal vervormt onder spanning?"
        },
        options: [
          { en: "Elastic modulus", es: "Módulo elástico", de: "Elastizitätsmodul", nl: "Elastische modulus" },
          { en: "Thermal conductivity", es: "Conductividad térmica", de: "Wärmeleitfähigkeit", nl: "Thermische geleidbaarheid" },
          { en: "Specific gravity", es: "Gravedad específica", de: "Spezifisches Gewicht", nl: "Soortelijk gewicht" },
          { en: "Magnetic permeability", es: "Permeabilidad magnética", de: "Magnetische Permeabilität", nl: "Magnetische permeabiliteit" }
        ],
        correct: 0,
        explanation: {
          en: "The elastic modulus (Young's modulus) determines how much a material will deform elastically under stress. Higher values indicate greater stiffness and less deformation.",
          es: "El módulo elástico (módulo de Young) determina cuánto se deformará elásticamente un material bajo estrés. Valores más altos indican mayor rigidez y menos deformación.",
          de: "Das Elastizitätsmodul (Young-Modul) bestimmt, wie stark sich ein Material unter Spannung elastisch verformt. Höhere Werte zeigen größere Steifigkeit und weniger Verformung an.",
          nl: "De elastische modulus (Young's modulus) bepaalt hoeveel een materiaal elastisch vervormt onder spanning. Hogere waarden duiden op grotere stijfheid en minder vervorming."
        }
      },
      {
        question: {
          en: "What principle explains why airplanes can fly?",
          es: "¿Qué principio explica por qué pueden volar los aviones?",
          de: "Welches Prinzip erklärt, warum Flugzeuge fliegen können?",
          nl: "Welk principe verklaart waarom vliegtuigen kunnen vliegen?"
        },
        options: [
          { en: "Bernoulli's principle", es: "Principio de Bernoulli", de: "Bernoulli-Prinzip", nl: "Bernoulli's principe" },
          { en: "Archimedes' principle", es: "Principio de Arquímedes", de: "Archimedes-Prinzip", nl: "Archimedes' principe" },
          { en: "Pascal's principle", es: "Principio de Pascal", de: "Pascal-Prinzip", nl: "Pascal's principe" },
          { en: "Hooke's principle", es: "Principio de Hooke", de: "Hooke-Prinzip", nl: "Hooke's principe" }
        ],
        correct: 0,
        explanation: {
          en: "Bernoulli's principle explains that faster-moving air over the wing's upper surface creates lower pressure, generating lift. Combined with Newton's third law, this enables flight.",
          es: "El principio de Bernoulli explica que el aire que se mueve más rápido sobre la superficie superior del ala crea menor presión, generando sustentación. Combinado con la tercera ley de Newton, esto permite el vuelo.",
          de: "Das Bernoulli-Prinzip erklärt, dass sich schneller bewegende Luft über der Oberseite des Flügels niedrigeren Druck erzeugt und Auftrieb generiert. In Kombination mit Newtons drittem Gesetz ermöglicht dies den Flug.",
          nl: "Bernoulli's principe verklaart dat sneller bewegende lucht over de bovenkant van de vleugel lagere druk creëert, waardoor lift ontstaat. Gecombineerd met Newton's derde wet maakt dit vliegen mogelijk."
        }
      },
      {
        question: {
          en: "What does 'HVAC' stand for in mechanical engineering?",
          es: "¿Qué significa 'HVAC' en ingeniería mecánica?",
          de: "Wofür steht 'HVAC' im Maschinenbau?",
          nl: "Waar staat 'HVAC' voor in werktuigbouwkunde?"
        },
        options: [
          { en: "Heating, Ventilation, and Air Conditioning", es: "Calefacción, Ventilación y Aire Acondicionado", de: "Heizung, Lüftung und Klimaanlage", nl: "Verwarming, Ventilatie en Airconditioning" },
          { en: "High Voltage Alternating Current", es: "Corriente Alterna de Alto Voltaje", de: "Hochspannungs-Wechselstrom", nl: "Hoogspanning Wisselstroom" },
          { en: "Hydraulic Valve Automatic Control", es: "Control Automático de Válvula Hidráulica", de: "Hydraulische Ventil-Automatiksteuerung", nl: "Hydraulische Klep Automatische Controle" },
          { en: "Heavy Vehicle Access Code", es: "Código de Acceso de Vehículos Pesados", de: "Schwerer Fahrzeug-Zugriffscode", nl: "Toegangscode voor Zware Voertuigen" }
        ],
        correct: 0,
        explanation: {
          en: "HVAC stands for Heating, Ventilation, and Air Conditioning. These systems control indoor environmental conditions for comfort and air quality in buildings.",
          es: "HVAC significa Calefacción, Ventilación y Aire Acondicionado. Estos sistemas controlan las condiciones ambientales interiores para el comfort y la calidad del aire en edificios.",
          de: "HVAC steht für Heizung, Lüftung und Klimaanlage. Diese Systeme steuern die Innenraumbedingungen für Komfort und Luftqualität in Gebäuden.",
          nl: "HVAC staat voor Verwarming, Ventilatie en Airconditioning. Deze systemen controleren binnen-omgevingscondities voor comfort en luchtkwaliteit in gebouwen."
        }
      },
      {
        question: {
          en: "What is the unit of electrical power?",
          es: "¿Cuál es la unidad de potencia eléctrica?",
          de: "Was ist die Einheit der elektrischen Leistung?",
          nl: "Wat is de eenheid van elektrisch vermogen?"
        },
        options: [
          { en: "Watt", es: "Vatio", de: "Watt", nl: "Watt" },
          { en: "Joule", es: "Julio", de: "Joule", nl: "Joule" },
          { en: "Ampere", es: "Amperio", de: "Ampere", nl: "Ampère" },
          { en: "Volt", es: "Voltio", de: "Volt", nl: "Volt" }
        ],
        correct: 0,
        explanation: {
          en: "The Watt (W) is the SI unit of power, representing energy consumed or produced per unit time. It equals one joule per second (1 W = 1 J/s).",
          es: "El Vatio (W) es la unidad SI de potencia, representando energía consumida o producida por unidad de tiempo. Equivale a un julio por segundo (1 W = 1 J/s).",
          de: "Das Watt (W) ist die SI-Einheit der Leistung und repräsentiert die pro Zeiteinheit verbrauchte oder erzeugte Energie. Es entspricht einem Joule pro Sekunde (1 W = 1 J/s).",
          nl: "De Watt (W) is de SI-eenheid van vermogen, die energie vertegenwoordigt die per tijdseenheid wordt verbruikt of geproduceerd. Het is gelijk aan één joule per seconde (1 W = 1 J/s)."
        }
      },
      {
        question: {
          en: "Which type of stress occurs when forces act perpendicular to a cross-section?",
          es: "¿Qué tipo de esfuerzo ocurre cuando las fuerzas actúan perpendiculares a una sección transversal?",
          de: "Welche Art von Spannung tritt auf, wenn Kräfte senkrecht zu einem Querschnitt wirken?",
          nl: "Welk type spanning treedt op wanneer krachten loodrecht op een dwarsdoorsnede werken?"
        },
        options: [
          { en: "Normal stress", es: "Esfuerzo normal", de: "Normalspannung", nl: "Normale spanning" },
          { en: "Shear stress", es: "Esfuerzo cortante", de: "Scherspannung", nl: "Schuifspanning" },
          { en: "Torsional stress", es: "Esfuerzo torsional", de: "Torsionsspannung", nl: "Torsiespanning" },
          { en: "Thermal stress", es: "Esfuerzo térmico", de: "Thermische Spannung", nl: "Thermische spanning" }
        ],
        correct: 0,
        explanation: {
          en: "Normal stress occurs when forces act perpendicular (normal) to the cross-sectional area of a material. It can be either tensile (pulling apart) or compressive (pushing together).",
          es: "El esfuerzo normal ocurre cuando las fuerzas actúan perpendiculares (normales) al área de sección transversal de un material. Puede ser tensil (separando) o compresivo (juntando).",
          de: "Normalspannung tritt auf, wenn Kräfte senkrecht (normal) zur Querschnittsfläche eines Materials wirken. Sie kann entweder Zug- (auseinanderziehend) oder Druckspannung (zusammendrückend) sein.",
          nl: "Normale spanning treedt op wanneer krachten loodrecht (normaal) op de dwarsdoorsnede van een materiaal werken. Het kan zowel trek (uiteentrekkend) als druk (samenpers​tend) zijn."
        }
      },
      {
        question: {
          en: "What is the process called when a solid changes directly to gas without becoming liquid?",
          es: "¿Cómo se llama el proceso cuando un sólido cambia directamente a gas sin volverse líquido?",
          de: "Wie nennt man den Prozess, wenn ein Festkörper direkt zu Gas wird, ohne flüssig zu werden?",
          nl: "Hoe wordt het proces genoemd wanneer een vaste stof direct verandert in gas zonder vloeibaar te worden?"
        },
        options: [
          { en: "Sublimation", es: "Sublimación", de: "Sublimation", nl: "Sublimatie" },
          { en: "Evaporation", es: "Evaporación", de: "Verdampfung", nl: "Verdamping" },
          { en: "Condensation", es: "Condensación", de: "Kondensation", nl: "Condensatie" },
          { en: "Crystallization", es: "Cristalización", de: "Kristallisation", nl: "Kristallisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Sublimation is the phase transition where a solid changes directly to gas without passing through the liquid phase. Dry ice (solid CO2) is a common example.",
          es: "La sublimación es la transición de fase donde un sólido cambia directamente a gas sin pasar por la fase líquida. El hielo seco (CO2 sólido) es un ejemplo común.",
          de: "Sublimation ist der Phasenübergang, bei dem ein Festkörper direkt zu Gas wird, ohne die flüssige Phase zu durchlaufen. Trockeneis (festes CO2) ist ein häufiges Beispiel.",
          nl: "Sublimatie is de faseovergang waarbij een vaste stof direct verandert in gas zonder door de vloeibare fase te gaan. Droogijs (vast CO2) is een veelvoorkomend voorbeeld."
        }
      },
      {
        question: {
          en: "What is the fundamental frequency of a vibrating string proportional to?",
          es: "¿A qué es proporcional la frecuencia fundamental de una cuerda vibrante?",
          de: "Wozu ist die Grundfrequenz einer schwingenden Saite proportional?",
          nl: "Waaraan is de grondfrequentie van een trillende snaar evenredig?"
        },
        options: [
          { en: "Square root of tension", es: "Raíz cuadrada de la tensión", de: "Quadratwurzel der Spannung", nl: "Vierkantswortel van spanning" },
          { en: "String length", es: "Longitud de la cuerda", de: "Saitenlänge", nl: "Snaarlengte" },
          { en: "Mass density", es: "Densidad de masa", de: "Massendichte", nl: "Massadichtheid" },
          { en: "Temperature", es: "Temperatura", de: "Temperatur", nl: "Temperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "The fundamental frequency of a vibrating string is proportional to the square root of the tension (√T) and inversely proportional to length and the square root of mass per unit length.",
          es: "La frecuencia fundamental de una cuerda vibrante es proporcional a la raíz cuadrada de la tensión (√T) e inversamente proporcional a la longitud y la raíz cuadrada de la masa por unidad de longitud.",
          de: "Die Grundfrequenz einer schwingenden Saite ist proportional zur Quadratwurzel der Spannung (√T) und umgekehrt proportional zur Länge und zur Quadratwurzel der Masse pro Längeneinheit.",
          nl: "De grondfrequentie van een trillende snaar is evenredig met de vierkantswortel van de spanning (√T) en omgekeerd evenredig met lengte en de vierkantswortel van massa per lengte-eenheid."
        }
      },
      {
        question: {
          en: "What is the standard metric unit for measuring pressure?",
          es: "¿Cuál es la unidad métrica estándar para medir presión?",
          de: "Was ist die Standard-Metrikeinheit zur Druckmessung?",
          nl: "Wat is de standaard metrische eenheid voor het meten van druk?"
        },
        options: [
          { en: "Pascal", es: "Pascal", de: "Pascal", nl: "Pascal" },
          { en: "Bar", es: "Bar", de: "Bar", nl: "Bar" },
          { en: "Torr", es: "Torr", de: "Torr", nl: "Torr" },
          { en: "PSI", es: "PSI", de: "PSI", nl: "PSI" }
        ],
        correct: 0,
        explanation: {
          en: "The Pascal (Pa) is the SI unit for pressure, defined as one Newton per square meter (1 Pa = 1 N/m²). It's named after Blaise Pascal.",
          es: "El Pascal (Pa) es la unidad SI para la presión, definida como un Newton por metro cuadrado (1 Pa = 1 N/m²). Lleva el nombre de Blaise Pascal.",
          de: "Das Pascal (Pa) ist die SI-Einheit für Druck, definiert als ein Newton pro Quadratmeter (1 Pa = 1 N/m²). Es ist nach Blaise Pascal benannt.",
          nl: "De Pascal (Pa) is de SI-eenheid voor druk, gedefinieerd als één Newton per vierkante meter (1 Pa = 1 N/m²). Het is genoemd naar Blaise Pascal."
        }
      },
      {
        question: {
          en: "What does a capacitor store in an electrical circuit?",
          es: "¿Qué almacena un capacitor en un circuito eléctrico?",
          de: "Was speichert ein Kondensator in einem elektrischen Schaltkreis?",
          nl: "Wat slaat een condensator op in een elektrisch circuit?"
        },
        options: [
          { en: "Electrical charge", es: "Carga eléctrica", de: "Elektrische Ladung", nl: "Elektrische lading" },
          { en: "Magnetic field", es: "Campo magnético", de: "Magnetfeld", nl: "Magnetisch veld" },
          { en: "Current flow", es: "Flujo de corriente", de: "Stromfluss", nl: "Stroomstroom" },
          { en: "Resistance", es: "Resistencia", de: "Widerstand", nl: "Weerstand" }
        ],
        correct: 0,
        explanation: {
          en: "A capacitor stores electrical charge on its plates, creating an electric field between them. The stored energy can be released when the circuit requires it.",
          es: "Un capacitor almacena carga eléctrica en sus placas, creando un campo eléctrico entre ellas. La energía almacenada puede liberarse cuando el circuito lo requiere.",
          de: "Ein Kondensator speichert elektrische Ladung auf seinen Platten und erzeugt ein elektrisches Feld zwischen ihnen. Die gespeicherte Energie kann freigesetzt werden, wenn der Schaltkreis sie benötigt.",
          nl: "Een condensator slaat elektrische lading op zijn platen op, waardoor een elektrisch veld tussen hen ontstaat. De opgeslagen energie kan worden vrijgegeven wanneer het circuit het nodig heeft."
        }
      },
      {
        question: {
          en: "Which principle states that pressure applied to a confined fluid is transmitted equally in all directions?",
          es: "¿Qué principio establece que la presión aplicada a un fluido confinado se transmite igualmente en todas las direcciones?",
          de: "Welches Prinzip besagt, dass Druck, der auf eine eingeschlossene Flüssigkeit ausgeübt wird, gleichmäßig in alle Richtungen übertragen wird?",
          nl: "Welk principe stelt dat druk toegepast op een opgesloten vloeistof gelijkmatig in alle richtingen wordt overgedragen?"
        },
        options: [
          { en: "Pascal's principle", es: "Principio de Pascal", de: "Pascal-Prinzip", nl: "Pascal's principe" },
          { en: "Bernoulli's principle", es: "Principio de Bernoulli", de: "Bernoulli-Prinzip", nl: "Bernoulli's principe" },
          { en: "Archimedes' principle", es: "Principio de Arquímedes", de: "Archimedes-Prinzip", nl: "Archimedes' principe" },
          { en: "Torricelli's principle", es: "Principio de Torricelli", de: "Torricelli-Prinzip", nl: "Torricelli's principe" }
        ],
        correct: 0,
        explanation: {
          en: "Pascal's principle states that pressure applied to a confined fluid is transmitted undiminished to every part of the fluid. This is the basis for hydraulic systems.",
          es: "El principio de Pascal establece que la presión aplicada a un fluido confinado se transmite sin disminución a cada parte del fluido. Esta es la base de los sistemas hidráulicos.",
          de: "Das Pascal-Prinzip besagt, dass Druck, der auf eine eingeschlossene Flüssigkeit ausgeübt wird, unverringert auf jeden Teil der Flüssigkeit übertragen wird. Dies ist die Grundlage für hydraulische Systeme.",
          nl: "Pascal's principe stelt dat druk toegepast op een opgesloten vloeistof onverminderd wordt overgedragen naar elk deel van de vloeistof. Dit is de basis voor hydraulische systemen."
        }
      },
      {
        question: {
          en: "What is the moment of inertia analogue to in linear motion?",
          es: "¿A qué es análogo el momento de inercia en movimiento lineal?",
          de: "Was ist das Analogon zum Trägheitsmoment in der linearen Bewegung?",
          nl: "Wat is het equivalent van het traagheidsmoment in lineaire beweging?"
        },
        options: [
          { en: "Mass", es: "Masa", de: "Masse", nl: "Massa" },
          { en: "Force", es: "Fuerza", de: "Kraft", nl: "Kracht" },
          { en: "Acceleration", es: "Aceleración", de: "Beschleunigung", nl: "Versnelling" },
          { en: "Velocity", es: "Velocidad", de: "Geschwindigkeit", nl: "Snelheid" }
        ],
        correct: 0,
        explanation: {
          en: "The moment of inertia in rotational motion is analogous to mass in linear motion. Both represent resistance to acceleration - mass to linear acceleration, and moment of inertia to angular acceleration.",
          es: "El momento de inercia en movimiento rotacional es análogo a la masa en movimiento lineal. Ambos representan resistencia a la aceleración - masa a la aceleración lineal, y momento de inercia a la aceleración angular.",
          de: "Das Trägheitsmoment in der Rotationsbewegung ist analog zur Masse in der linearen Bewegung. Beide repräsentieren Widerstand gegen Beschleunigung - Masse gegen lineare Beschleunigung und Trägheitsmoment gegen Winkelbeschleunigung.",
          nl: "Het traagheidsmoment in roterende beweging is analoog aan massa in lineaire beweging. Beide vertegenwoordigen weerstand tegen versnelling - massa tegen lineaire versnelling, en traagheidsmoment tegen hoekversnelling."
        }
      },
      {
        question: {
          en: "What happens to the strength of most metals when they are heated?",
          es: "¿Qué le pasa a la resistencia de la mayoría de los metales cuando se calientan?",
          de: "Was passiert mit der Festigkeit der meisten Metalle, wenn sie erhitzt werden?",
          nl: "Wat gebeurt er met de sterkte van de meeste metalen wanneer ze worden verwarmd?"
        },
        options: [
          { en: "It decreases", es: "Disminuye", de: "Sie nimmt ab", nl: "Het neemt af" },
          { en: "It increases", es: "Aumenta", de: "Sie nimmt zu", nl: "Het neemt toe" },
          { en: "It remains constant", es: "Permanece constante", de: "Sie bleibt konstant", nl: "Het blijft constant" },
          { en: "It becomes zero", es: "Se vuelve cero", de: "Sie wird null", nl: "Het wordt nul" }
        ],
        correct: 0,
        explanation: {
          en: "Most metals lose strength when heated because increased thermal energy allows atoms to move more freely, weakening the metallic bonds that provide structural integrity.",
          es: "La mayoría de los metales pierden resistencia cuando se calientan porque el aumento de energía térmica permite que los átomos se muevan más libremente, debilitando los enlaces metálicos que proporcionan integridad estructural.",
          de: "Die meisten Metalle verlieren an Festigkeit, wenn sie erhitzt werden, da erhöhte thermische Energie es den Atomen ermöglicht, sich freier zu bewegen, wodurch die metallischen Bindungen geschwächt werden, die strukturelle Integrität bieten.",
          nl: "De meeste metalen verliezen sterkte wanneer ze worden verwarmd omdat verhoogde thermische energie atomen toestaat vrijer te bewegen, waardoor de metaal bindingen verzwakken die structurele integriteit bieden."
        }
      },
      {
        question: {
          en: "What is the purpose of a flywheel in mechanical systems?",
          es: "¿Cuál es el propósito de un volante en sistemas mecánicos?",
          de: "Was ist der Zweck eines Schwungrads in mechanischen Systemen?",
          nl: "Wat is het doel van een vliegwiel in mechanische systemen?"
        },
        options: [
          { en: "Store kinetic energy", es: "Almacenar energía cinética", de: "Kinetische Energie speichern", nl: "Kinetische energie opslaan" },
          { en: "Reduce friction", es: "Reducir fricción", de: "Reibung reduzieren", nl: "Wrijving verminderen" },
          { en: "Increase speed", es: "Aumentar velocidad", de: "Geschwindigkeit erhöhen", nl: "Snelheid verhogen" },
          { en: "Generate electricity", es: "Generar electricidad", de: "Elektrizität erzeugen", nl: "Elektriciteit opwekken" }
        ],
        correct: 0,
        explanation: {
          en: "A flywheel stores kinetic energy by maintaining rotational momentum, helping to smooth out variations in power delivery and providing energy during low-power phases of operation.",
          es: "Un volante almacena energía cinética manteniendo momento rotacional, ayudando a suavizar las variaciones en la entrega de potencia y proporcionando energía durante las fases de baja potencia de operación.",
          de: "Ein Schwungrad speichert kinetische Energie, indem es den Drehimpuls aufrechterhält, hilft Schwankungen in der Kraftübertragung zu glätten und Energie während schwacher Betriebsphasen bereitzustellen.",
          nl: "Een vliegwiel slaat kinetische energie op door rotatiemomentum te behouden, wat helpt variaties in vermogenslevering te effenen en energie te leveren tijdens lage-vermogen fasen van werking."
        }
      },
      {
        question: {
          en: "What is the typical operating temperature range for silicon semiconductors?",
          es: "¿Cuál es el rango típico de temperatura de operación para semiconductores de silicio?",
          de: "Was ist der typische Betriebstemperaturbereich für Silizium-Halbleiter?",
          nl: "Wat is het typische werkingstemperatuurbereik voor silicium halfgeleiders?"
        },
        options: [
          { en: "-55°C to +125°C", es: "-55°C a +125°C", de: "-55°C bis +125°C", nl: "-55°C tot +125°C" },
          { en: "0°C to +50°C", es: "0°C a +50°C", de: "0°C bis +50°C", nl: "0°C tot +50°C" },
          { en: "-20°C to +85°C", es: "-20°C a +85°C", de: "-20°C bis +85°C", nl: "-20°C tot +85°C" },
          { en: "+10°C to +200°C", es: "+10°C a +200°C", de: "+10°C bis +200°C", nl: "+10°C tot +200°C" }
        ],
        correct: 0,
        explanation: {
          en: "Silicon semiconductors typically operate from -55°C to +125°C. Beyond this range, their electrical properties change significantly, affecting performance and reliability.",
          es: "Los semiconductores de silicio típicamente operan de -55°C a +125°C. Más allá de este rango, sus propiedades eléctricas cambian significativamente, afectando el rendimiento y la confiabilidad.",
          de: "Silizium-Halbleiter arbeiten typischerweise von -55°C bis +125°C. Außerhalb dieses Bereichs ändern sich ihre elektrischen Eigenschaften erheblich, was Leistung und Zuverlässigkeit beeinflusst.",
          nl: "Silicium halfgeleiders werken doorgaans van -55°C tot +125°C. Buiten dit bereik veranderen hun elektrische eigenschappen aanzienlijk, wat prestaties en betrouwbaarheid beïnvloedt."
        }
      },
      {
        question: {
          en: "What is the primary purpose of a heat exchanger?",
          es: "¿Cuál es el propósito principal de un intercambiador de calor?",
          de: "Was ist der Hauptzweck eines Wärmetauschers?",
          nl: "Wat is het hoofddoel van een warmtewisselaar?"
        },
        options: [
          { en: "Transfer heat between fluids", es: "Transferir calor entre fluidos", de: "Wärme zwischen Flüssigkeiten übertragen", nl: "Warmte overdragen tussen vloeistoffen" },
          { en: "Generate heat", es: "Generar calor", de: "Wärme erzeugen", nl: "Warmte opwekken" },
          { en: "Store thermal energy", es: "Almacenar energía térmica", de: "Thermische Energie speichern", nl: "Thermische energie opslaan" },
          { en: "Measure temperature", es: "Medir temperatura", de: "Temperatur messen", nl: "Temperatuur meten" }
        ],
        correct: 0,
        explanation: {
          en: "A heat exchanger transfers thermal energy between two or more fluids at different temperatures without mixing them. It's essential in HVAC, power generation, and chemical processing.",
          es: "Un intercambiador de calor transfiere energía térmica entre dos o más fluidos a diferentes temperaturas sin mezclarlos. Es esencial en HVAC, generación de energía y procesamiento químico.",
          de: "Ein Wärmetauscher überträgt thermische Energie zwischen zwei oder mehr Flüssigkeiten bei verschiedenen Temperaturen ohne sie zu vermischen. Es ist wesentlich in HVAC, Stromerzeugung und chemischer Verarbeitung.",
          nl: "Een warmtewisselaar draagt thermische energie over tussen twee of meer vloeistoffen bij verschillende temperaturen zonder ze te mengen. Het is essentieel in HVAC, energieopwekking en chemische verwerking."
        }
      },
      {
        question: {
          en: "What does 'FEA' stand for in engineering analysis?",
          es: "¿Qué significa 'FEA' en análisis de ingeniería?",
          de: "Wofür steht 'FEA' in der Ingenieuranalyse?",
          nl: "Waar staat 'FEA' voor in engineering analyse?"
        },
        options: [
          { en: "Finite Element Analysis", es: "Análisis de Elementos Finitos", de: "Finite-Elemente-Analyse", nl: "Eindige Elementen Analyse" },
          { en: "Fluid Engineering Assessment", es: "Evaluación de Ingeniería de Fluidos", de: "Fluidtechnik-Bewertung", nl: "Vloeistof Engineering Beoordeling" },
          { en: "Force Equilibrium Analysis", es: "Análisis de Equilibrio de Fuerzas", de: "Kraftgleichgewichtsanalyse", nl: "Kracht Evenwicht Analyse" },
          { en: "Fatigue Evaluation Approach", es: "Enfoque de Evaluación de Fatiga", de: "Ermüdungsbewertungsansatz", nl: "Vermoeidheid Evaluatie Benadering" }
        ],
        correct: 0,
        explanation: {
          en: "FEA stands for Finite Element Analysis, a computational method used to analyze complex structures by dividing them into smaller, simpler elements for mathematical analysis.",
          es: "FEA significa Análisis de Elementos Finitos, un método computacional usado para analizar estructuras complejas dividiéndolas en elementos más pequeños y simples para análisis matemático.",
          de: "FEA steht für Finite-Elemente-Analyse, eine rechnerische Methode zur Analyse komplexer Strukturen durch Aufteilung in kleinere, einfachere Elemente für mathematische Analyse.",
          nl: "FEA staat voor Eindige Elementen Analyse, een computationele methode gebruikt om complexe structuren te analyseren door ze te verdelen in kleinere, eenvoudigere elementen voor wiskundige analyse."
        }
      },
      {
        question: {
          en: "What is the engineering ethics principle that prioritizes public safety above all else?",
          es: "¿Cuál es el principio de ética de ingeniería que prioriza la seguridad pública sobre todo lo demás?",
          de: "Was ist das ingenieurethische Prinzip, das die öffentliche Sicherheit über alles andere stellt?",
          nl: "Wat is het engineering ethiek principe dat openbare veiligheid boven alles prioriteert?"
        },
        options: [
          { en: "Paramount directive", es: "Directiva primordial", de: "Oberste Direktive", nl: "Hoofd richtlijn" },
          { en: "Profit maximization", es: "Maximización de ganancias", de: "Gewinnmaximierung", nl: "Winst maximalisatie" },
          { en: "Client satisfaction", es: "Satisfacción del cliente", de: "Kundenzufriedenheit", nl: "Klanttevredenheid" },
          { en: "Cost minimization", es: "Minimización de costos", de: "Kostenminimierung", nl: "Kosten minimalisatie" }
        ],
        correct: 0,
        explanation: {
          en: "The paramount directive in engineering ethics requires engineers to hold paramount the safety, health, and welfare of the public above all other considerations, including personal or employer interests.",
          es: "La directiva primordial en la ética de ingeniería requiere que los ingenieros mantengan como primordial la seguridad, salud y bienestar del público por encima de todas las demás consideraciones, incluyendo intereses personales o del empleador.",
          de: "Die oberste Direktive in der Ingenieurethik erfordert, dass Ingenieure die Sicherheit, Gesundheit und das Wohlergehen der Öffentlichkeit über alle anderen Überlegungen stellen, einschließlich persönlicher oder Arbeitgeber-Interessen.",
          nl: "De hoofd richtlijn in engineering ethiek vereist dat ingenieurs de veiligheid, gezondheid en welzijn van het publiek boven alle andere overwegingen stellen, inclusief persoonlijke of werkgever belangen."
        }
      },
      {
        question: {
          en: "What is Reynolds number used to predict in fluid mechanics?",
          es: "¿Para qué se usa el número de Reynolds para predecir en mecánica de fluidos?",
          de: "Wofür wird die Reynolds-Zahl in der Strömungsmechanik zur Vorhersage verwendet?",
          nl: "Waar wordt het Reynolds getal voor gebruikt om te voorspellen in vloeistofmechanica?"
        },
        options: [
          { en: "Flow regime (laminar or turbulent)", es: "Régimen de flujo (laminar o turbulento)", de: "Strömungsregime (laminar oder turbulent)", nl: "Stroomregime (laminair of turbulent)" },
          { en: "Fluid density", es: "Densidad del fluido", de: "Fluiddichte", nl: "Vloeistof dichtheid" },
          { en: "Pressure drop", es: "Caída de presión", de: "Druckabfall", nl: "Drukval" },
          { en: "Temperature change", es: "Cambio de temperatura", de: "Temperaturänderung", nl: "Temperatuurverandering" }
        ],
        correct: 0,
        explanation: {
          en: "Reynolds number is a dimensionless parameter that predicts whether fluid flow will be laminar (smooth) or turbulent (chaotic). Values below ~2300 indicate laminar flow, while higher values suggest turbulent flow.",
          es: "El número de Reynolds es un parámetro adimensional que predice si el flujo de fluido será laminar (suave) o turbulento (caótico). Valores debajo de ~2300 indican flujo laminar, mientras valores más altos sugieren flujo turbulento.",
          de: "Die Reynolds-Zahl ist ein dimensionsloser Parameter, der vorhersagt, ob die Fluidströmung laminar (glatt) oder turbulent (chaotisch) sein wird. Werte unter ~2300 zeigen laminare Strömung an, während höhere Werte turbulente Strömung nahelegen.",
          nl: "Het Reynolds getal is een dimensieloze parameter die voorspelt of vloeistofstroom laminair (glad) of turbulent (chaotisch) zal zijn. Waarden onder ~2300 duiden op laminaire stroming, terwijl hogere waarden turbulente stroming suggereren."
        }
      },
      {
        question: {
          en: "Which law relates the voltage, current, and resistance in electrical circuits?",
          es: "¿Qué ley relaciona el voltaje, la corriente y la resistencia en circuitos eléctricos?",
          de: "Welches Gesetz verknüpft Spannung, Strom und Widerstand in elektrischen Schaltkreisen?",
          nl: "Welke wet relateert spanning, stroom en weerstand in elektrische circuits?"
        },
        options: [
          { en: "Ohm's Law", es: "Ley de Ohm", de: "Ohmsches Gesetz", nl: "Wet van Ohm" },
          { en: "Kirchhoff's Law", es: "Ley de Kirchhoff", de: "Kirchhoffsches Gesetz", nl: "Wet van Kirchhoff" },
          { en: "Faraday's Law", es: "Ley de Faraday", de: "Faradaysches Gesetz", nl: "Wet van Faraday" },
          { en: "Lenz's Law", es: "Ley de Lenz", de: "Lenzsche Regel", nl: "Wet van Lenz" }
        ],
        correct: 0,
        explanation: {
          en: "Ohm's Law (V = IR) is the fundamental relationship between voltage (V), current (I), and resistance (R) in electrical circuits. It forms the basis for analyzing most electrical circuits.",
          es: "La Ley de Ohm (V = IR) es la relación fundamental entre voltaje (V), corriente (I) y resistencia (R) en circuitos eléctricos. Forma la base para analizar la mayoría de los circuitos eléctricos.",
          de: "Das Ohmsche Gesetz (V = IR) ist die grundlegende Beziehung zwischen Spannung (V), Strom (I) und Widerstand (R) in elektrischen Schaltkreisen. Es bildet die Basis für die Analyse der meisten elektrischen Schaltkreise.",
          nl: "De Wet van Ohm (V = IR) is de fundamentele relatie tussen spanning (V), stroom (I) en weerstand (R) in elektrische circuits. Het vormt de basis voor het analyseren van de meeste elektrische circuits."
        }
      },
      {
        question: {
          en: "What type of beam support allows rotation but prevents translation?",
          es: "¿Qué tipo de soporte de viga permite rotación pero previene traslación?",
          de: "Welche Art von Balkenauflager erlaubt Drehung aber verhindert Translation?",
          nl: "Welk type balksteun staat rotatie toe maar voorkomt translatie?"
        },
        options: [
          { en: "Pin support", es: "Soporte de pasador", de: "Gelenkauflager", nl: "Scharnier steun" },
          { en: "Fixed support", es: "Soporte fijo", de: "Einspannung", nl: "Vaste steun" },
          { en: "Roller support", es: "Soporte rodante", de: "Rollenlager", nl: "Rol steun" },
          { en: "Spring support", es: "Soporte de resorte", de: "Federauflager", nl: "Veer steun" }
        ],
        correct: 0,
        explanation: {
          en: "A pin support (or hinged support) allows rotation but prevents translation in both x and y directions. It provides two reaction forces but no moment resistance.",
          es: "Un soporte de pasador (o soporte articulado) permite rotación pero previene traslación en ambas direcciones x e y. Proporciona dos fuerzas de reacción pero no resistencia al momento.",
          de: "Ein Gelenkauflager erlaubt Drehung aber verhindert Translation in x- und y-Richtung. Es bietet zwei Reaktionskräfte aber keinen Momentenwiderstand.",
          nl: "Een scharnier steun staat rotatie toe maar voorkomt translatie in zowel x- als y-richting. Het biedt twee reactiekrachten maar geen momentweerstand."
        }
      },
      {
        question: {
          en: "What is the condition for maximum power transfer in electrical circuits?",
          es: "¿Cuál es la condición para la máxima transferencia de potencia en circuitos eléctricos?",
          de: "Was ist die Bedingung für maximale Leistungsübertragung in elektrischen Schaltkreisen?",
          nl: "Wat is de conditie voor maximale vermogensoverdracht in elektrische circuits?"
        },
        options: [
          { en: "Load resistance equals source resistance", es: "Resistencia de carga igual a resistencia de fuente", de: "Lastwiderstand gleich Quellwiderstand", nl: "Belastingsweerstand gelijk aan bronweerstand" },
          { en: "Load resistance is infinite", es: "Resistencia de carga es infinita", de: "Lastwiderstand ist unendlich", nl: "Belastingsweerstand is oneindig" },
          { en: "Load resistance is zero", es: "Resistencia de carga es cero", de: "Lastwiderstand ist null", nl: "Belastingsweerstand is nul" },
          { en: "Source voltage is maximum", es: "Voltaje de fuente es máximo", de: "Quellspannung ist maximal", nl: "Bronspanning is maximaal" }
        ],
        correct: 0,
        explanation: {
          en: "Maximum power transfer occurs when the load resistance equals the source (internal) resistance. This is known as the Maximum Power Transfer Theorem, though efficiency is only 50% at this condition.",
          es: "La máxima transferencia de potencia ocurre cuando la resistencia de carga iguala la resistencia de fuente (interna). Esto se conoce como el Teorema de Máxima Transferencia de Potencia, aunque la eficiencia es solo del 50% en esta condición.",
          de: "Maximale Leistungsübertragung tritt auf, wenn der Lastwiderstand dem Quell-(Innen-)widerstand entspricht. Dies ist als Maximum-Power-Transfer-Theorem bekannt, obwohl die Effizienz bei dieser Bedingung nur 50% beträgt.",
          nl: "Maximale vermogensoverdracht treedt op wanneer de belastingsweerstand gelijk is aan de bron(interne) weerstand. Dit staat bekend als het Maximum Vermogen Overdracht Theorema, hoewel de efficiëntie slechts 50% is onder deze conditie."
        }
      },
      {
        question: {
          en: "What does the term 'degrees of freedom' refer to in mechanical systems?",
          es: "¿A qué se refiere el término 'grados de libertad' en sistemas mecánicos?",
          de: "Worauf bezieht sich der Begriff 'Freiheitsgrade' in mechanischen Systemen?",
          nl: "Waar verwijst de term 'vrijheidsgraden' naar in mechanische systemen?"
        },
        options: [
          { en: "Independent motions possible", es: "Movimientos independientes posibles", de: "Mögliche unabhängige Bewegungen", nl: "Mogelijke onafhankelijke bewegingen" },
          { en: "Temperature variations", es: "Variaciones de temperatura", de: "Temperaturschwankungen", nl: "Temperatuurvariaties" },
          { en: "Force directions", es: "Direcciones de fuerza", de: "Kraftrichtungen", nl: "Krachtrichtingen" },
          { en: "Material properties", es: "Propiedades del material", de: "Materialeigenschaften", nl: "Materiaaleigenschappen" }
        ],
        correct: 0,
        explanation: {
          en: "Degrees of freedom represent the number of independent parameters needed to define the configuration or motion of a mechanical system. For example, a point in 3D space has 3 translational degrees of freedom.",
          es: "Los grados de libertad representan el número de parámetros independientes necesarios para definir la configuración o movimiento de un sistema mecánico. Por ejemplo, un punto en espacio 3D tiene 3 grados de libertad traslacionales.",
          de: "Freiheitsgrade repräsentieren die Anzahl unabhängiger Parameter, die zur Definition der Konfiguration oder Bewegung eines mechanischen Systems benötigt werden. Ein Punkt im 3D-Raum hat beispielsweise 3 translatorische Freiheitsgrade.",
          nl: "Vrijheidsgraden vertegenwoordigen het aantal onafhankelijke parameters nodig om de configuratie of beweging van een mechanisch systeem te definiëren. Bijvoorbeeld, een punt in 3D ruimte heeft 3 translationele vrijheidsgraden."
        }
      },
      {
        question: {
          en: "What is the relationship between frequency and wavelength in wave propagation?",
          es: "¿Cuál es la relación entre frecuencia y longitud de onda en la propagación de ondas?",
          de: "Was ist die Beziehung zwischen Frequenz und Wellenlänge bei der Wellenausbreitung?",
          nl: "Wat is de relatie tussen frequentie en golflengte bij golfvoortplanting?"
        },
        options: [
          { en: "Inversely proportional", es: "Inversamente proporcional", de: "Umgekehrt proportional", nl: "Omgekeerd evenredig" },
          { en: "Directly proportional", es: "Directamente proporcional", de: "Direkt proportional", nl: "Direct evenredig" },
          { en: "Exponentially related", es: "Relacionadas exponencialmente", de: "Exponentiell verwandt", nl: "Exponentieel gerelateerd" },
          { en: "No relationship", es: "Sin relación", de: "Keine Beziehung", nl: "Geen relatie" }
        ],
        correct: 0,
        explanation: {
          en: "Frequency and wavelength are inversely proportional, related by the equation c = fλ, where c is the wave speed, f is frequency, and λ is wavelength. Higher frequency means shorter wavelength.",
          es: "La frecuencia y la longitud de onda son inversamente proporcionales, relacionadas por la ecuación c = fλ, donde c es la velocidad de la onda, f es la frecuencia, y λ es la longitud de onda. Mayor frecuencia significa menor longitud de onda.",
          de: "Frequenz und Wellenlänge sind umgekehrt proportional, verbunden durch die Gleichung c = fλ, wobei c die Wellengeschwindigkeit, f die Frequenz und λ die Wellenlänge ist. Höhere Frequenz bedeutet kürzere Wellenlänge.",
          nl: "Frequentie en golflengte zijn omgekeerd evenredig, gerelateerd door de vergelijking c = fλ, waar c de golfsnelheid is, f de frequentie, en λ de golflengte. Hogere frequentie betekent kortere golflengte."
        }
      },
      {
        question: {
          en: "What is the unit of measurement for torque?",
          es: "¿Cuál es la unidad de medida para el torque?",
          de: "Was ist die Maßeinheit für das Drehmoment?",
          nl: "Wat is de meeteenheid voor koppel?"
        },
        options: [
          { en: "Newton-meter (N⋅m)", es: "Newton-metro (N⋅m)", de: "Newtonmeter (N⋅m)", nl: "Newton-meter (N⋅m)" },
          { en: "Joule (J)", es: "Julio (J)", de: "Joule (J)", nl: "Joule (J)" },
          { en: "Watt (W)", es: "Vatio (W)", de: "Watt (W)", nl: "Watt (W)" },
          { en: "Pascal (Pa)", es: "Pascal (Pa)", de: "Pascal (Pa)", nl: "Pascal (Pa)" }
        ],
        correct: 0,
        explanation: {
          en: "Torque is measured in Newton-meters (N⋅m), representing the rotational force applied at a distance from the axis of rotation. It's the rotational equivalent of linear force.",
          es: "El torque se mide en Newton-metros (N⋅m), representando la fuerza rotacional aplicada a una distancia del eje de rotación. Es el equivalente rotacional de la fuerza lineal.",
          de: "Das Drehmoment wird in Newtonmetern (N⋅m) gemessen und stellt die Rotationskraft dar, die in einer Entfernung von der Rotationsachse angewendet wird. Es ist das rotatorische Äquivalent zur linearen Kraft.",
          nl: "Koppel wordt gemeten in Newton-meters (N⋅m), wat de rotationele kracht vertegenwoordigt die wordt toegepast op afstand van de rotatie-as. Het is het rotationele equivalent van lineaire kracht."
        }
      },
      {
        question: {
          en: "What type of material behavior occurs when stress exceeds the proportional limit?",
          es: "¿Qué tipo de comportamiento del material ocurre cuando el esfuerzo excede el límite proporcional?",
          de: "Welche Art von Materialverhalten tritt auf, wenn die Spannung die Proportionalitätsgrenze überschreitet?",
          nl: "Welk type materiaalgedrag treedt op wanneer spanning de proportionele grens overschrijdt?"
        },
        options: [
          { en: "Plastic deformation", es: "Deformación plástica", de: "Plastische Verformung", nl: "Plastische vervorming" },
          { en: "Elastic deformation", es: "Deformación elástica", de: "Elastische Verformung", nl: "Elastische vervorming" },
          { en: "Thermal expansion", es: "Expansión térmica", de: "Wärmeausdehnung", nl: "Thermische uitzetting" },
          { en: "Phase transformation", es: "Transformación de fase", de: "Phasentransformation", nl: "Fasetransformatie" }
        ],
        correct: 0,
        explanation: {
          en: "When stress exceeds the proportional limit, the material enters the plastic deformation region where permanent, non-recoverable deformation occurs. The material no longer obeys Hooke's law.",
          es: "Cuando el esfuerzo excede el límite proporcional, el material entra en la región de deformación plástica donde ocurre deformación permanente, no recuperable. El material ya no obedece la ley de Hooke.",
          de: "Wenn die Spannung die Proportionalitätsgrenze überschreitet, tritt das Material in den Bereich der plastischen Verformung ein, wo permanente, nicht rückgängig zu machende Verformung auftritt. Das Material gehorcht dem Hookeschen Gesetz nicht mehr.",
          nl: "Wanneer spanning de proportionele grens overschrijdt, treedt het materiaal de plastische vervormingsregio binnen waar permanente, niet-herstelbare vervorming optreedt. Het materiaal gehoorzaamt niet langer aan de Wet van Hooke."
        }
      },
      {
        question: {
          en: "What is the efficiency of an ideal Carnot heat engine operating between two temperature reservoirs?",
          es: "¿Cuál es la eficiencia de un motor térmico de Carnot ideal operando entre dos reservorios de temperatura?",
          de: "Was ist der Wirkungsgrad einer idealen Carnot-Wärmekraftmaschine, die zwischen zwei Temperaturreservoiren arbeitet?",
          nl: "Wat is de efficiëntie van een ideale Carnot warmtemotor die werkt tussen twee temperatuurreservoirs?"
        },
        options: [
          { en: "η = 1 - (TC/TH)", es: "η = 1 - (TC/TH)", de: "η = 1 - (TC/TH)", nl: "η = 1 - (TC/TH)" },
          { en: "η = (TC/TH)", es: "η = (TC/TH)", de: "η = (TC/TH)", nl: "η = (TC/TH)" },
          { en: "η = (TH - TC)", es: "η = (TH - TC)", de: "η = (TH - TC)", nl: "η = (TH - TC)" },
          { en: "η = (TH/TC) - 1", es: "η = (TH/TC) - 1", de: "η = (TH/TC) - 1", nl: "η = (TH/TC) - 1" }
        ],
        correct: 0,
        explanation: {
          en: "The Carnot efficiency is η = 1 - (TC/TH), where TC is the absolute temperature of the cold reservoir and TH is the absolute temperature of the hot reservoir. This represents the maximum theoretical efficiency.",
          es: "La eficiencia de Carnot es η = 1 - (TC/TH), donde TC es la temperatura absoluta del reservorio frío y TH es la temperatura absoluta del reservorio caliente. Esto representa la máxima eficiencia teórica.",
          de: "Der Carnot-Wirkungsgrad ist η = 1 - (TC/TH), wobei TC die absolute Temperatur des kalten Reservoirs und TH die absolute Temperatur des heißen Reservoirs ist. Dies stellt den maximalen theoretischen Wirkungsgrad dar.",
          nl: "De Carnot efficiëntie is η = 1 - (TC/TH), waar TC de absolute temperatuur van het koude reservoir is en TH de absolute temperatuur van het hete reservoir. Dit vertegenwoordigt de maximale theoretische efficiëntie."
        }
      },
      {
        question: {
          en: "What happens to electrical resistance in most metals as temperature increases?",
          es: "¿Qué le pasa a la resistencia eléctrica en la mayoría de los metales cuando aumenta la temperatura?",
          de: "Was passiert mit dem elektrischen Widerstand in den meisten Metallen, wenn die Temperatur steigt?",
          nl: "Wat gebeurt er met elektrische weerstand in de meeste metalen als de temperatuur stijgt?"
        },
        options: [
          { en: "It increases", es: "Aumenta", de: "Sie steigt", nl: "Het neemt toe" },
          { en: "It decreases", es: "Disminuye", de: "Sie sinkt", nl: "Het neemt af" },
          { en: "It remains constant", es: "Permanece constante", de: "Sie bleibt konstant", nl: "Het blijft constant" },
          { en: "It becomes zero", es: "Se vuelve cero", de: "Sie wird null", nl: "Het wordt nul" }
        ],
        correct: 0,
        explanation: {
          en: "In most metals, electrical resistance increases with temperature due to increased atomic vibrations that impede electron flow. This is described by the temperature coefficient of resistance.",
          es: "En la mayoría de los metales, la resistencia eléctrica aumenta con la temperatura debido al aumento de vibraciones atómicas que impiden el flujo de electrones. Esto se describe por el coeficiente de temperatura de resistencia.",
          de: "In den meisten Metallen steigt der elektrische Widerstand mit der Temperatur aufgrund verstärkter Atomschwingungen, die den Elektronenfluss behindern. Dies wird durch den Temperaturkoeffizienten des Widerstands beschrieben.",
          nl: "In de meeste metalen neemt de elektrische weerstand toe met temperatuur vanwege toegenomen atomaire trillingen die elektronenstroom belemmeren. Dit wordt beschreven door de temperatuurcoëfficiënt van weerstand."
        }
      },
      {
        question: {
          en: "What is the purpose of a strain gauge in engineering measurements?",
          es: "¿Cuál es el propósito de una galga extensiométrica en mediciones de ingeniería?",
          de: "Was ist der Zweck eines Dehnungsmessstreifens in technischen Messungen?",
          nl: "Wat is het doel van een rekstrookje in engineering metingen?"
        },
        options: [
          { en: "Measure mechanical deformation", es: "Medir deformación mecánica", de: "Mechanische Verformung messen", nl: "Mechanische vervorming meten" },
          { en: "Measure temperature", es: "Medir temperatura", de: "Temperatur messen", nl: "Temperatuur meten" },
          { en: "Measure pressure", es: "Medir presión", de: "Druck messen", nl: "Druk meten" },
          { en: "Measure flow rate", es: "Medir caudal", de: "Durchfluss messen", nl: "Stromingssnelheid meten" }
        ],
        correct: 0,
        explanation: {
          en: "A strain gauge measures mechanical deformation (strain) by detecting changes in electrical resistance as the gauge is stretched or compressed along with the material it's attached to.",
          es: "Una galga extensiométrica mide deformación mecánica (deformación) detectando cambios en resistencia eléctrica cuando la galga se estira o comprime junto con el material al que está adherida.",
          de: "Ein Dehnungsmessstreifen misst mechanische Verformung (Dehnung), indem er Änderungen im elektrischen Widerstand erkennt, wenn der Messstreifen zusammen mit dem Material, an dem er befestigt ist, gedehnt oder komprimiert wird.",
          nl: "Een rekstrookje meet mechanische vervorming (rek) door veranderingen in elektrische weerstand te detecteren terwijl het strookje wordt uitgerekt of samengedrukt samen met het materiaal waaraan het is bevestigd."
        }
      },
      {
        question: {
          en: "What is the standard atmospheric pressure at sea level?",
          es: "¿Cuál es la presión atmosférica estándar al nivel del mar?",
          de: "Was ist der Standard-Atmosphärendruck auf Meereshöhe?",
          nl: "Wat is de standaard atmosferische druk op zeeniveau?"
        },
        options: [
          { en: "101.325 kPa", es: "101.325 kPa", de: "101.325 kPa", nl: "101.325 kPa" },
          { en: "100 kPa", es: "100 kPa", de: "100 kPa", nl: "100 kPa" },
          { en: "105 kPa", es: "105 kPa", de: "105 kPa", nl: "105 kPa" },
          { en: "110 kPa", es: "110 kPa", de: "110 kPa", nl: "110 kPa" }
        ],
        correct: 0,
        explanation: {
          en: "Standard atmospheric pressure at sea level is 101.325 kPa (kilopascals), which equals 1 atmosphere, 760 mmHg, or 14.7 psi. This is used as a reference in many engineering calculations.",
          es: "La presión atmosférica estándar al nivel del mar es 101.325 kPa (kilopascales), que equivale a 1 atmósfera, 760 mmHg, o 14.7 psi. Esto se usa como referencia en muchos cálculos de ingeniería.",
          de: "Der Standard-Atmosphärendruck auf Meereshöhe beträgt 101.325 kPa (Kilopascal), was 1 Atmosphäre, 760 mmHg oder 14,7 psi entspricht. Dies wird als Referenz in vielen technischen Berechnungen verwendet.",
          nl: "Standaard atmosferische druk op zeeniveau is 101.325 kPa (kilopascal), wat gelijk is aan 1 atmosfeer, 760 mmHg, of 14.7 psi. Dit wordt gebruikt als referentie in veel engineering berekeningen."
        }
      },
      {
        question: {
          en: "What is the primary difference between AC and DC current?",
          es: "¿Cuál es la diferencia principal entre corriente AC y DC?",
          de: "Was ist der Hauptunterschied zwischen AC- und DC-Strom?",
          nl: "Wat is het hoofdverschil tussen AC en DC stroom?"
        },
        options: [
          { en: "AC changes direction periodically", es: "AC cambia de dirección periódicamente", de: "AC ändert periodisch die Richtung", nl: "AC verandert periodiek van richting" },
          { en: "AC is always stronger", es: "AC siempre es más fuerte", de: "AC ist immer stärker", nl: "AC is altijd sterker" },
          { en: "AC requires higher voltage", es: "AC requiere mayor voltaje", de: "AC benötigt höhere Spannung", nl: "AC vereist hogere spanning" },
          { en: "AC flows only in metals", es: "AC fluye solo en metales", de: "AC fließt nur in Metallen", nl: "AC stroomt alleen in metalen" }
        ],
        correct: 0,
        explanation: {
          en: "The primary difference is that AC (Alternating Current) changes direction periodically, typically 50 or 60 times per second, while DC (Direct Current) flows in one constant direction.",
          es: "La diferencia principal es que AC (Corriente Alterna) cambia de dirección periódicamente, típicamente 50 o 60 veces por segundo, mientras DC (Corriente Directa) fluye en una dirección constante.",
          de: "Der Hauptunterschied ist, dass AC (Wechselstrom) periodisch die Richtung ändert, typischerweise 50 oder 60 Mal pro Sekunde, während DC (Gleichstrom) in eine konstante Richtung fließt.",
          nl: "Het hoofdverschil is dat AC (Wisselstroom) periodiek van richting verandert, typisch 50 of 60 keer per seconde, terwijl DC (Gelijkstroom) in één constante richting stroomt."
        }
      },
      {
        question: {
          en: "What is the critical damping condition in vibrating systems?",
          es: "¿Cuál es la condición de amortiguamiento crítico en sistemas vibrantes?",
          de: "Was ist die kritische Dämpfungsbedingung in schwingenden Systemen?",
          nl: "Wat is de kritische dempingsconditie in trillende systemen?"
        },
        options: [
          { en: "System returns to equilibrium fastest without oscillation", es: "El sistema regresa al equilibrio más rápido sin oscilación", de: "System kehrt am schnellsten ohne Schwingung ins Gleichgewicht zurück", nl: "Systeem keert snelst terug naar evenwicht zonder oscillatie" },
          { en: "System oscillates indefinitely", es: "El sistema oscila indefinidamente", de: "System schwingt unendlich", nl: "Systeem oscilleert oneindig" },
          { en: "System never returns to equilibrium", es: "El sistema nunca regresa al equilibrio", de: "System kehrt nie ins Gleichgewicht zurück", nl: "Systeem keert nooit terug naar evenwicht" },
          { en: "System has maximum amplitude", es: "El sistema tiene amplitud máxima", de: "System hat maximale Amplitude", nl: "Systeem heeft maximale amplitude" }
        ],
        correct: 0,
        explanation: {
          en: "Critical damping occurs when a system returns to equilibrium in the shortest time possible without oscillating past the equilibrium position. It represents the boundary between underdamped and overdamped behavior.",
          es: "El amortiguamiento crítico ocurre cuando un sistema regresa al equilibrio en el menor tiempo posible sin oscilar más allá de la posición de equilibrio. Representa la frontera entre comportamiento subamortiguado y sobreamortiguado.",
          de: "Kritische Dämpfung tritt auf, wenn ein System in kürzester Zeit ins Gleichgewicht zurückkehrt, ohne über die Gleichgewichtslage hinaus zu schwingen. Es stellt die Grenze zwischen unter- und überdämpftem Verhalten dar.",
          nl: "Kritische demping treedt op wanneer een systeem in de kortst mogelijke tijd terugkeert naar evenwicht zonder voorbij de evenwichtspositie te oscilleren. Het vertegenwoordigt de grens tussen ondergedempt en overgedempt gedrag."
        }
      },
      {
        question: {
          en: "What is the coefficient of thermal expansion used for in engineering calculations?",
          es: "¿Para qué se usa el coeficiente de expansión térmica en cálculos de ingeniería?",
          de: "Wofür wird der Wärmeausdehnungskoeffizient in technischen Berechnungen verwendet?",
          nl: "Waarvoor wordt de thermische uitzettingscoëfficiënt gebruikt in engineering berekeningen?"
        },
        options: [
          { en: "Predicting dimensional changes with temperature", es: "Predecir cambios dimensionales con temperatura", de: "Dimensionsänderungen bei Temperaturänderung vorhersagen", nl: "Dimensionale veranderingen voorspellen bij temperatuur" },
          { en: "Calculating material strength", es: "Calcular resistencia del material", de: "Materialfestigkeit berechnen", nl: "Materiaalsterkte berekenen" },
          { en: "Determining electrical conductivity", es: "Determinar conductividad eléctrica", de: "Elektrische Leitfähigkeit bestimmen", nl: "Elektrische geleidbaarheid bepalen" },
          { en: "Measuring fluid viscosity", es: "Medir viscosidad de fluidos", de: "Fluidviskosität messen", nl: "Vloeistofviscositeit meten" }
        ],
        correct: 0,
        explanation: {
          en: "The coefficient of thermal expansion quantifies how much a material's dimensions change per unit temperature change. It's crucial for designing structures that experience temperature variations.",
          es: "El coeficiente de expansión térmica cuantifica cuánto cambian las dimensiones de un material por unidad de cambio de temperatura. Es crucial para diseñar estructuras que experimentan variaciones de temperatura.",
          de: "Der Wärmeausdehnungskoeffizient quantifiziert, wie stark sich die Abmessungen eines Materials pro Temperaturänderungseinheit ändern. Er ist entscheidend für die Konstruktion von Strukturen, die Temperaturschwankungen erfahren.",
          nl: "De thermische uitzettingscoëfficiënt kwantificeert hoeveel de dimensies van een materiaal veranderen per eenheid temperatuurverandering. Het is cruciaal voor het ontwerpen van structuren die temperatuurvariaties ervaren."
        }
      },
      {
        question: {
          en: "What is the principle behind hydraulic systems?",
          es: "¿Cuál es el principio detrás de los sistemas hidráulicos?",
          de: "Was ist das Prinzip hinter hydraulischen Systemen?",
          nl: "Wat is het principe achter hydraulische systemen?"
        },
        options: [
          { en: "Force multiplication through incompressible fluid", es: "Multiplicación de fuerza a través de fluido incompresible", de: "Kraftvervielfachung durch inkompressible Flüssigkeit", nl: "Krachtversterking door onsamendrukbare vloeistof" },
          { en: "Magnetic field generation", es: "Generación de campo magnético", de: "Magnetfelderzeugung", nl: "Magnetische veld generatie" },
          { en: "Thermal energy conversion", es: "Conversión de energía térmica", de: "Thermische Energieumwandlung", nl: "Thermische energie conversie" },
          { en: "Chemical reaction acceleration", es: "Aceleración de reacción química", de: "Chemische Reaktionsbeschleunigung", nl: "Chemische reactie versnelling" }
        ],
        correct: 0,
        explanation: {
          en: "Hydraulic systems work by applying Pascal's principle - pressure applied to an incompressible fluid in a closed system is transmitted equally in all directions, enabling force multiplication.",
          es: "Los sistemas hidráulicos funcionan aplicando el principio de Pascal - la presión aplicada a un fluido incompresible en un sistema cerrado se transmite igualmente en todas las direcciones, permitiendo multiplicación de fuerza.",
          de: "Hydraulische Systeme funktionieren durch Anwendung des Pascal-Prinzips - Druck, der auf eine inkompressible Flüssigkeit in einem geschlossenen System angewendet wird, wird gleichmäßig in alle Richtungen übertragen und ermöglicht Kraftvervielfachung.",
          nl: "Hydraulische systemen werken door Pascal's principe toe te passen - druk toegepast op een onsamendrukbare vloeistof in een gesloten systeem wordt gelijkmatig in alle richtingen overgedragen, wat krachtversterking mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is the fundamental equation for a spring force?",
          es: "¿Cuál es la ecuación fundamental para la fuerza de un resorte?",
          de: "Was ist die grundlegende Gleichung für eine Federkraft?",
          nl: "Wat is de fundamentele vergelijking voor een veerkracht?"
        },
        options: [
          { en: "F = -kx (Hooke's Law)", es: "F = -kx (Ley de Hooke)", de: "F = -kx (Hookesches Gesetz)", nl: "F = -kx (Wet van Hooke)" },
          { en: "F = ma", es: "F = ma", de: "F = ma", nl: "F = ma" },
          { en: "F = μN", es: "F = μN", de: "F = μN", nl: "F = μN" },
          { en: "F = qE", es: "F = qE", de: "F = qE", nl: "F = qE" }
        ],
        correct: 0,
        explanation: {
          en: "Hooke's Law (F = -kx) describes the restoring force of a spring, where F is force, k is the spring constant, and x is displacement from equilibrium. The negative sign indicates the force opposes displacement.",
          es: "La Ley de Hooke (F = -kx) describe la fuerza restauradora de un resorte, donde F es fuerza, k es la constante del resorte, y x es el desplazamiento del equilibrio. El signo negativo indica que la fuerza se opone al desplazamiento.",
          de: "Das Hookesche Gesetz (F = -kx) beschreibt die Rückstellkraft einer Feder, wobei F die Kraft, k die Federkonstante und x die Verschiebung vom Gleichgewicht ist. Das negative Zeichen zeigt an, dass die Kraft der Verschiebung entgegenwirkt.",
          nl: "De Wet van Hooke (F = -kx) beschrijft de herstellende kracht van een veer, waar F kracht is, k de veerconstante, en x de verplaatsing van evenwicht. Het negatieve teken geeft aan dat de kracht zich verzet tegen verplaatsing."
        }
      },
      {
        question: {
          en: "What is the purpose of a differential gear in automotive engineering?",
          es: "¿Cuál es el propósito de un diferencial en ingeniería automotriz?",
          de: "Was ist der Zweck eines Differentialgetriebes im Automobilbau?",
          nl: "Wat is het doel van een differentieel in automotive engineering?"
        },
        options: [
          { en: "Allow wheels to rotate at different speeds during turns", es: "Permitir que las ruedas giren a diferentes velocidades durante giros", de: "Rädern ermöglichen, bei Kurven unterschiedlich schnell zu drehen", nl: "Wielen toestaan om bij bochten verschillende snelheden te draaien" },
          { en: "Increase engine power", es: "Aumentar potencia del motor", de: "Motorleistung erhöhen", nl: "Motorvermogen verhogen" },
          { en: "Reduce fuel consumption", es: "Reducir consumo de combustible", de: "Kraftstoffverbrauch reduzieren", nl: "Brandstofverbruik verminderen" },
          { en: "Control steering direction", es: "Controlar dirección del volante", de: "Lenkrichtung kontrollieren", nl: "Stuurrichting controleren" }
        ],
        correct: 0,
        explanation: {
          en: "A differential gear allows the drive wheels to rotate at different speeds while receiving power from the engine, essential when turning corners as the outer wheel travels further than the inner wheel.",
          es: "Un diferencial permite que las ruedas motrices giren a diferentes velocidades mientras reciben potencia del motor, esencial al tomar curvas ya que la rueda exterior viaja más que la rueda interior.",
          de: "Ein Differentialgetriebe ermöglicht es den Antriebsrädern, mit unterschiedlichen Geschwindigkeiten zu drehen, während sie Leistung vom Motor erhalten, was beim Kurvenfahren unerlässlich ist, da das äußere Rad weiter fährt als das innere Rad.",
          nl: "Een differentieel stelt de aandrijvingswielen in staat om met verschillende snelheden te draaien terwijl ze vermogen van de motor ontvangen, essentieel bij het nemen van bochten omdat het buitenste wiel verder reist dan het binnenste wiel."
        }
      },
      {
        question: {
          en: "What is the relationship between power, voltage, and current in DC circuits?",
          es: "¿Cuál es la relación entre potencia, voltaje y corriente en circuitos DC?",
          de: "Was ist die Beziehung zwischen Leistung, Spannung und Strom in DC-Schaltkreisen?",
          nl: "Wat is de relatie tussen vermogen, spanning en stroom in DC circuits?"
        },
        options: [
          { en: "P = VI", es: "P = VI", de: "P = VI", nl: "P = VI" },
          { en: "P = V/I", es: "P = V/I", de: "P = V/I", nl: "P = V/I" },
          { en: "P = I/V", es: "P = I/V", de: "P = I/V", nl: "P = I/V" },
          { en: "P = V + I", es: "P = V + I", de: "P = V + I", nl: "P = V + I" }
        ],
        correct: 0,
        explanation: {
          en: "In DC circuits, electrical power (P) equals voltage (V) times current (I). This fundamental relationship (P = VI) is used to calculate power consumption and generation in electrical systems.",
          es: "En circuitos DC, la potencia eléctrica (P) es igual al voltaje (V) por la corriente (I). Esta relación fundamental (P = VI) se usa para calcular el consumo y generación de potencia en sistemas eléctricos.",
          de: "In DC-Schaltkreisen entspricht die elektrische Leistung (P) der Spannung (V) mal dem Strom (I). Diese grundlegende Beziehung (P = VI) wird zur Berechnung von Leistungsverbrauch und -erzeugung in elektrischen Systemen verwendet.",
          nl: "In DC circuits is elektrisch vermogen (P) gelijk aan spanning (V) maal stroom (I). Deze fundamentele relatie (P = VI) wordt gebruikt om vermogensverbruik en -opwekking in elektrische systemen te berekenen."
        }
      },
      {
        question: {
          en: "What type of joint allows movement in only one plane?",
          es: "¿Qué tipo de articulación permite movimiento en solo un plano?",
          de: "Welche Art von Gelenk ermöglicht Bewegung nur in einer Ebene?",
          nl: "Welk type gewricht staat beweging toe in slechts één vlak?"
        },
        options: [
          { en: "Pin joint (revolute joint)", es: "Articulación de pasador (articulación de revolución)", de: "Zapfengelenk (Drehgelenk)", nl: "Pin gewricht (revolute gewricht)" },
          { en: "Ball joint", es: "Articulación esférica", de: "Kugelgelenk", nl: "Kogelgewricht" },
          { en: "Universal joint", es: "Articulación universal", de: "Universalgelenk", nl: "Universeel gewricht" },
          { en: "Flexible joint", es: "Articulación flexible", de: "Flexibles Gelenk", nl: "Flexibel gewricht" }
        ],
        correct: 0,
        explanation: {
          en: "A pin joint (also called revolute joint) constrains motion to rotation about a single axis, allowing movement in only one plane. It has one degree of freedom for rotation.",
          es: "Una articulación de pasador (también llamada articulación de revolución) restringe el movimiento a rotación sobre un solo eje, permitiendo movimiento en solo un plano. Tiene un grado de libertad para rotación.",
          de: "Ein Zapfengelenk (auch Drehgelenk genannt) beschränkt die Bewegung auf eine Drehung um eine einzige Achse und ermöglicht Bewegung nur in einer Ebene. Es hat einen Freiheitsgrad für die Rotation.",
          nl: "Een pin gewricht (ook wel revolute gewricht genoemd) beperkt beweging tot rotatie om een enkele as, wat beweging in slechts één vlak toestaat. Het heeft één vrijheidsgraad voor rotatie."
        }
      },
      {
        question: {
          en: "What is the primary function of a bearing in mechanical systems?",
          es: "¿Cuál es la función principal de un rodamiento en sistemas mecánicos?",
          de: "Was ist die Hauptfunktion eines Lagers in mechanischen Systemen?",
          nl: "Wat is de primaire functie van een lager in mechanische systemen?"
        },
        options: [
          { en: "Reduce friction between moving parts", es: "Reducir fricción entre partes móviles", de: "Reibung zwischen beweglichen Teilen reduzieren", nl: "Wrijving tussen bewegende delen verminderen" },
          { en: "Increase rotational speed", es: "Aumentar velocidad rotacional", de: "Drehgeschwindigkeit erhöhen", nl: "Rotatiesnelheid verhogen" },
          { en: "Generate electrical power", es: "Generar potencia eléctrica", de: "Elektrische Leistung erzeugen", nl: "Elektrisch vermogen opwekken" },
          { en: "Control temperature", es: "Controlar temperatura", de: "Temperatur kontrollieren", nl: "Temperatuur controleren" }
        ],
        correct: 0,
        explanation: {
          en: "Bearings reduce friction between moving parts, typically between a rotating shaft and its housing. They enable smooth rotation while supporting loads and minimizing wear.",
          es: "Los rodamientos reducen la fricción entre partes móviles, típicamente entre un eje rotativo y su alojamiento. Permiten rotación suave mientras soportan cargas y minimizan el desgaste.",
          de: "Lager reduzieren die Reibung zwischen beweglichen Teilen, typischerweise zwischen einer rotierenden Welle und ihrem Gehäuse. Sie ermöglichen eine gleichmäßige Rotation bei Lastunterstützung und minimieren den Verschleiß.",
          nl: "Lagers verminderen wrijving tussen bewegende delen, meestal tussen een roterende as en zijn behuizing. Ze maken soepele rotatie mogelijk terwijl ze belastingen ondersteunen en slijtage minimaliseren."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/engineering', level1);
  }
})();