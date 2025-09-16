// Quantum Physics - Level 10: Quantum Information and Computing
(function() {
  const level10 = {
    name: {
      en: "Quantum Information and Computing",
      es: "Información y Computación Cuántica",
      de: "Quanteninformation und Computing",
      nl: "Quantum Informatie en Computing"
    },
    questions: [
      {
        question: {
          en: "What is a qubit and how does it differ from a classical bit?",
          es: "¿Qué es un qubit y en qué se diferencia de un bit clásico?",
          de: "Was ist ein Qubit und wie unterscheidet es sich von einem klassischen Bit?",
          nl: "Wat is een qubit en hoe verschilt het van een klassieke bit?"
        },
        options: [
          {
            en: "A quantum bit that can exist in superposition of |0⟩ and |1⟩ states, unlike classical bits that are either 0 or 1",
            es: "Un bit cuántico que puede existir en superposición de estados |0⟩ y |1⟩, a diferencia de los bits clásicos que son 0 o 1",
            de: "Ein Quantenbit, das in Superposition von |0⟩ und |1⟩ Zuständen existieren kann, im Gegensatz zu klassischen Bits die entweder 0 oder 1 sind",
            nl: "Een quantumbit die kan bestaan in superpositie van |0⟩ en |1⟩ toestanden, in tegenstelling tot klassieke bits die 0 of 1 zijn"
          },
          {
            en: "A qubit is simply a faster version of a classical bit",
            es: "Un qubit es simplemente una versión más rápida de un bit clásico",
            de: "Ein Qubit ist einfach eine schnellere Version eines klassischen Bits",
            nl: "Een qubit is gewoon een snellere versie van een klassieke bit"
          },
          {
            en: "A qubit can only store twice as much information as a classical bit",
            es: "Un qubit solo puede almacenar el doble de información que un bit clásico",
            de: "Ein Qubit kann nur doppelt so viel Information speichern wie ein klassisches Bit",
            nl: "Een qubit kan slechts twee keer zoveel informatie opslaan als een klassieke bit"
          },
          {
            en: "A qubit and classical bit are functionally identical",
            es: "Un qubit y un bit clásico son funcionalmente idénticos",
            de: "Ein Qubit und klassisches Bit sind funktional identisch",
            nl: "Een qubit en klassieke bit zijn functioneel identiek"
          }
        ],
        correct: 0,
        explanation: {
          en: "A qubit (quantum bit) is the fundamental unit of quantum information. Unlike classical bits which can only be in state 0 or 1, qubits can exist in a quantum superposition of both states simultaneously, written as α|0⟩ + β|1⟩. This superposition property, along with entanglement, gives quantum computers their computational power.",
          es: "Un qubit (bit cuántico) es la unidad fundamental de información cuántica. A diferencia de los bits clásicos que solo pueden estar en estado 0 o 1, los qubits pueden existir en una superposición cuántica de ambos estados simultáneamente, escrito como α|0⟩ + β|1⟩. Esta propiedad de superposición, junto con el entrelazamiento, da a las computadoras cuánticas su poder computacional.",
          de: "Ein Qubit (Quantenbit) ist die Grundeinheit der Quanteninformation. Im Gegensatz zu klassischen Bits, die nur im Zustand 0 oder 1 sein können, können Qubits in einer Quantensuperposition beider Zustände gleichzeitig existieren, geschrieben als α|0⟩ + β|1⟩. Diese Superpositionseigenschaft verleiht Quantencomputern zusammen mit der Verschränkung ihre Rechenleistung.",
          nl: "Een qubit (quantumbit) is de fundamentele eenheid van quantuminformatie. In tegenstelling tot klassieke bits die alleen in toestand 0 of 1 kunnen zijn, kunnen qubits bestaan in een quantumsuperpositie van beide toestanden tegelijkertijd, geschreven als α|0⟩ + β|1⟩. Deze superpositie-eigenschap geeft quantumcomputers samen met verstrengeling hun rekenkracht."
        }
      },
      {
        question: {
          en: "What is quantum decoherence and why is it a major challenge for quantum computing?",
          es: "¿Qué es la decoherencia cuántica y por qué es un desafío importante para la computación cuántica?",
          de: "Was ist Quantendekohärenz und warum ist sie eine große Herausforderung für das Quantencomputing?",
          nl: "Wat is quantum decoherentie en waarom is het een grote uitdaging voor quantum computing?"
        },
        options: [
          {
            en: "The loss of quantum coherence due to environmental interactions, destroying superposition and entanglement needed for quantum computation",
            es: "La pérdida de coherencia cuántica debido a interacciones ambientales, destruyendo la superposición y el entrelazamiento necesarios para la computación cuántica",
            de: "Der Verlust der Quantenkohärenz aufgrund von Umgebungsinteraktionen, wodurch Superposition und Verschränkung zerstört werden, die für die Quantenberechnung benötigt werden",
            nl: "Het verlies van quantumcoherentie door omgevingsinteracties, waardoor superpositie en verstrengeling vernietigd worden die nodig zijn voor quantumberekening"
          },
          {
            en: "A method to improve quantum computer performance",
            es: "Un método para mejorar el rendimiento de las computadoras cuánticas",
            de: "Eine Methode zur Verbesserung der Quantencomputer-Leistung",
            nl: "Een methode om de prestaties van quantumcomputers te verbeteren"
          },
          {
            en: "The process of quantum information storage",
            es: "El proceso de almacenamiento de información cuántica",
            de: "Der Prozess der Quanteninformationsspeicherung",
            nl: "Het proces van quantum informatieopslag"
          },
          {
            en: "A quantum algorithm for factoring large numbers",
            es: "Un algoritmo cuántico para factorizar números grandes",
            de: "Ein Quantenalgorithmus zur Faktorisierung großer Zahlen",
            nl: "Een quantumalgoritme voor het ontbinden van grote getallen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum decoherence is the process by which quantum systems lose their quantum behavior due to interactions with the environment. This causes the destruction of superposition states and entanglement, reverting the system to classical behavior. It's the primary obstacle in building practical quantum computers, requiring sophisticated error correction and isolation techniques.",
          es: "La decoherencia cuántica es el proceso por el cual los sistemas cuánticos pierden su comportamiento cuántico debido a interacciones con el ambiente. Esto causa la destrucción de estados de superposición y entrelazamiento, revirtiendo el sistema a comportamiento clásico. Es el principal obstáculo en la construcción de computadoras cuánticas prácticas, requiriendo técnicas sofisticadas de corrección de errores y aislamiento.",
          de: "Quantendekohärenz ist der Prozess, durch den Quantensysteme ihr Quantenverhalten aufgrund von Wechselwirkungen mit der Umgebung verlieren. Dies verursacht die Zerstörung von Superpositionszuständen und Verschränkung, wodurch das System zu klassischem Verhalten zurückkehrt. Es ist das Haupthindernis beim Bau praktischer Quantencomputer und erfordert ausgeklügelte Fehlerkorrektur- und Isolationstechniken.",
          nl: "Quantum decoherentie is het proces waarbij quantumsystemen hun quantumgedrag verliezen door interacties met de omgeving. Dit veroorzaakt de vernietiging van superposietoestanden en verstrengeling, waardoor het systeem terugkeert naar klassiek gedrag. Het is het primaire obstakel bij het bouwen van praktische quantumcomputers, wat geavanceerde foutcorrectie- en isolatietechnieken vereist."
        }
      },
      {
        question: {
          en: "What is Shor's algorithm and what makes it significant for cryptography?",
          es: "¿Qué es el algoritmo de Shor y qué lo hace significativo para la criptografía?",
          de: "Was ist Shors Algorithmus und was macht ihn für die Kryptographie bedeutsam?",
          nl: "Wat is Shor's algoritme en wat maakt het significant voor cryptografie?"
        },
        options: [
          {
            en: "A quantum algorithm that can efficiently factor large integers, potentially breaking RSA encryption",
            es: "Un algoritmo cuántico que puede factorizar eficientemente enteros grandes, potencialmente rompiendo el cifrado RSA",
            de: "Ein Quantenalgorithmus, der große Ganzzahlen effizient faktorisieren kann und möglicherweise die RSA-Verschlüsselung bricht",
            nl: "Een quantumalgoritme dat grote gehele getallen efficiënt kan ontbinden, mogelijk RSA-versleuteling brekend"
          },
          {
            en: "A classical encryption method used in modern computers",
            es: "Un método de cifrado clásico utilizado en computadoras modernas",
            de: "Eine klassische Verschlüsselungsmethode, die in modernen Computern verwendet wird",
            nl: "Een klassieke versleutelingsmethode gebruikt in moderne computers"
          },
          {
            en: "A quantum error correction protocol",
            es: "Un protocolo de corrección de errores cuánticos",
            de: "Ein Quantenfehlerkorrekturprotokoll",
            nl: "Een quantum foutcorrectieprotocol"
          },
          {
            en: "A method for creating quantum entanglement",
            es: "Un método para crear entrelazamiento cuántico",
            de: "Eine Methode zur Erzeugung von Quantenverschränkung",
            nl: "Een methode voor het creëren van quantum verstrengeling"
          }
        ],
        correct: 0,
        explanation: {
          en: "Shor's algorithm, developed by Peter Shor in 1994, is a quantum algorithm that can factor large integers exponentially faster than the best known classical algorithms. This threatens RSA and other public-key cryptosystems that rely on the computational difficulty of integer factorization, potentially making current encryption methods obsolete when large-scale quantum computers become available.",
          es: "El algoritmo de Shor, desarrollado por Peter Shor en 1994, es un algoritmo cuántico que puede factorizar enteros grandes exponencialmente más rápido que los mejores algoritmos clásicos conocidos. Esto amenaza a RSA y otros criptosistemas de clave pública que dependen de la dificultad computacional de la factorización de enteros, potencialmente haciendo obsoletos los métodos de cifrado actuales cuando las computadoras cuánticas a gran escala estén disponibles.",
          de: "Shors Algorithmus, 1994 von Peter Shor entwickelt, ist ein Quantenalgorithmus, der große Ganzzahlen exponentiell schneller faktorisieren kann als die besten bekannten klassischen Algorithmen. Dies bedroht RSA und andere Public-Key-Kryptosysteme, die auf der rechnerischen Schwierigkeit der Ganzzahlfaktorisierung beruhen, wodurch aktuelle Verschlüsselungsmethoden obsolet werden könnten, wenn großskalige Quantencomputer verfügbar werden.",
          nl: "Shor's algoritme, ontwikkeld door Peter Shor in 1994, is een quantumalgoritme dat grote gehele getallen exponentieel sneller kan ontbinden dan de best bekende klassieke algoritmes. Dit bedreigt RSA en andere publieke-sleutel cryptosystemen die afhankelijk zijn van de computationele moeilijkheid van gehele getallen factorizatie, mogelijk huidige versleutelingsmethoden achterhaald makend wanneer grootschalige quantumcomputers beschikbaar komen."
        }
      },
      {
        question: {
          en: "What is quantum supremacy (or quantum advantage) and when was it first claimed to be achieved?",
          es: "¿Qué es la supremacía cuántica (o ventaja cuántica) y cuándo se afirmó por primera vez que se logró?",
          de: "Was ist Quantenüberlegenheit (oder Quantenvorteil) und wann wurde zum ersten Mal behauptet, dass sie erreicht wurde?",
          nl: "Wat is quantum suprematie (of quantum voordeel) en wanneer werd voor het eerst beweerd dat het werd bereikt?"
        },
        options: [
          {
            en: "The point where quantum computers can solve problems that are practically impossible for classical computers; first claimed by Google in 2019",
            es: "El punto donde las computadoras cuánticas pueden resolver problemas que son prácticamente imposibles para las computadoras clásicas; primero reclamado por Google en 2019",
            de: "Der Punkt, an dem Quantencomputer Probleme lösen können, die für klassische Computer praktisch unmöglich sind; erstmals von Google 2019 behauptet",
            nl: "Het punt waar quantumcomputers problemen kunnen oplossen die praktisch onmogelijk zijn voor klassieke computers; eerst beweerd door Google in 2019"
          },
          {
            en: "When quantum computers become faster than all classical computers for any task; achieved in 2015",
            es: "Cuando las computadoras cuánticas se vuelven más rápidas que todas las computadoras clásicas para cualquier tarea; logrado en 2015",
            de: "Wenn Quantencomputer für jede Aufgabe schneller werden als alle klassischen Computer; 2015 erreicht",
            nl: "Wanneer quantumcomputers sneller worden dan alle klassieke computers voor elke taak; bereikt in 2015"
          },
          {
            en: "The theoretical maximum number of qubits possible; estimated at 1000 qubits",
            es: "El número teórico máximo de qubits posible; estimado en 1000 qubits",
            de: "Die theoretische Maximalzahl möglicher Qubits; auf 1000 Qubits geschätzt",
            nl: "Het theoretische maximale aantal qubits mogelijk; geschat op 1000 qubits"
          },
          {
            en: "A quantum programming language developed by IBM",
            es: "Un lenguaje de programación cuántico desarrollado por IBM",
            de: "Eine von IBM entwickelte Quantenprogrammiersprache",
            nl: "Een quantum programmeertaal ontwikkeld door IBM"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum supremacy (now often called quantum advantage) refers to the point where quantum computers can perform calculations that are practically impossible for even the most powerful classical computers. Google claimed to achieve this milestone in 2019 with their 53-qubit Sycamore processor, solving a specific sampling problem in 200 seconds that would take classical computers thousands of years.",
          es: "La supremacía cuántica (ahora a menudo llamada ventaja cuántica) se refiere al punto donde las computadoras cuánticas pueden realizar cálculos que son prácticamente imposibles incluso para las computadoras clásicas más poderosas. Google afirmó haber logrado este hito en 2019 con su procesador Sycamore de 53 qubits, resolviendo un problema específico de muestreo en 200 segundos que tomaría a las computadoras clásicas miles de años.",
          de: "Quantenüberlegenheit (jetzt oft Quantenvorteil genannt) bezieht sich auf den Punkt, an dem Quantencomputer Berechnungen durchführen können, die selbst für die leistungsstärksten klassischen Computer praktisch unmöglich sind. Google behauptete, diesen Meilenstein 2019 mit ihrem 53-Qubit-Sycamore-Prozessor erreicht zu haben, indem sie ein spezifisches Sampling-Problem in 200 Sekunden lösten, für das klassische Computer tausende Jahre bräuchten.",
          nl: "Quantum suprematie (nu vaak quantum voordeel genoemd) verwijst naar het punt waar quantumcomputers berekeningen kunnen uitvoeren die praktisch onmogelijk zijn voor zelfs de krachtigste klassieke computers. Google beweerde deze mijlpaal in 2019 te hebben bereikt met hun 53-qubit Sycamore processor, door een specifiek steekproefprobleem op te lossen in 200 seconden dat klassieke computers duizenden jaren zou kosten."
        }
      },
      {
        question: {
          en: "What is quantum error correction and why is it necessary for practical quantum computing?",
          es: "¿Qué es la corrección de errores cuánticos y por qué es necesaria para la computación cuántica práctica?",
          de: "Was ist Quantenfehlerkorrektur und warum ist sie für das praktische Quantencomputing notwendig?",
          nl: "Wat is quantum foutcorrectie en waarom is het nodig voor praktische quantum computing?"
        },
        options: [
          {
            en: "Methods to detect and correct errors in quantum computations caused by decoherence and noise, essential for fault-tolerant quantum computing",
            es: "Métodos para detectar y corregir errores en computaciones cuánticas causados por decoherencia y ruido, esenciales para la computación cuántica tolerante a fallas",
            de: "Methoden zur Erkennung und Korrektur von Fehlern in Quantenberechnungen, die durch Dekohärenz und Rauschen verursacht werden, wesentlich für fehlertolerantes Quantencomputing",
            nl: "Methoden om fouten in quantumberekeningen te detecteren en corrigeren die worden veroorzaakt door decoherentie en ruis, essentieel voor fouttolerant quantum computing"
          },
          {
            en: "A way to make quantum computers run faster",
            es: "Una forma de hacer que las computadoras cuánticas funcionen más rápido",
            de: "Eine Möglichkeit, Quantencomputer schneller laufen zu lassen",
            nl: "Een manier om quantumcomputers sneller te laten werken"
          },
          {
            en: "Software debugging tools for quantum programs",
            es: "Herramientas de depuración de software para programas cuánticos",
            de: "Software-Debugging-Tools für Quantenprogramme",
            nl: "Software debugging tools voor quantumprogramma's"
          },
          {
            en: "Methods to encrypt quantum information",
            es: "Métodos para cifrar información cuántica",
            de: "Methoden zur Verschlüsselung von Quanteninformationen",
            nl: "Methoden om quantuminformatie te versleutelen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum error correction is crucial because quantum systems are extremely fragile and prone to errors from environmental interactions. Unlike classical bits, quantum information cannot be simply copied due to the no-cloning theorem. Quantum error correction codes use multiple physical qubits to encode one logical qubit, allowing detection and correction of errors without directly measuring the quantum state.",
          es: "La corrección de errores cuánticos es crucial porque los sistemas cuánticos son extremadamente frágiles y propensos a errores de interacciones ambientales. A diferencia de los bits clásicos, la información cuántica no puede ser simplemente copiada debido al teorema de no-clonación. Los códigos de corrección de errores cuánticos usan múltiples qubits físicos para codificar un qubit lógico, permitiendo la detección y corrección de errores sin medir directamente el estado cuántico.",
          de: "Quantenfehlerkorrektur ist entscheidend, weil Quantensysteme extrem fragil und anfällig für Fehler durch Umgebungsinteraktionen sind. Im Gegensatz zu klassischen Bits kann Quanteninformation aufgrund des No-Cloning-Theorems nicht einfach kopiert werden. Quantenfehlerkorrekturcodes verwenden mehrere physische Qubits, um ein logisches Qubit zu kodieren, was die Erkennung und Korrektur von Fehlern ermöglicht, ohne den Quantenzustand direkt zu messen.",
          nl: "Quantum foutcorrectie is cruciaal omdat quantumsystemen extreem fragiel zijn en gevoelig voor fouten door omgevingsinteracties. In tegenstelling tot klassieke bits kan quantuminformatie niet simpelweg gekopieerd worden vanwege het no-cloning theorema. Quantum foutcorrectiecodes gebruiken meerdere fysieke qubits om één logische qubit te coderen, waardoor detectie en correctie van fouten mogelijk is zonder direct de quantumtoestand te meten."
        }
      },
      {
        question: {
          en: "What is quantum teleportation and what does it actually transport?",
          es: "¿Qué es la teletransportación cuántica y qué transporta realmente?",
          de: "Was ist Quantenteleportation und was transportiert sie tatsächlich?",
          nl: "Wat is quantum teleportatie en wat transporteert het eigenlijk?"
        },
        options: [
          {
            en: "The transfer of quantum information from one location to another using entanglement and classical communication, without moving matter",
            es: "La transferencia de información cuántica de una ubicación a otra usando entrelazamiento y comunicación clásica, sin mover materia",
            de: "Die Übertragung von Quanteninformation von einem Ort zum anderen unter Verwendung von Verschränkung und klassischer Kommunikation, ohne Materie zu bewegen",
            nl: "De overdracht van quantuminformatie van de ene locatie naar de andere met behulp van verstrengeling en klassieke communicatie, zonder materie te verplaatsen"
          },
          {
            en: "The physical transportation of objects at the speed of light",
            es: "El transporte físico de objetos a la velocidad de la luz",
            de: "Der physische Transport von Objekten mit Lichtgeschwindigkeit",
            nl: "Het fysieke transport van objecten met de snelheid van het licht"
          },
          {
            en: "A method to create copies of quantum particles",
            es: "Un método para crear copias de partículas cuánticas",
            de: "Eine Methode zur Erstellung von Kopien von Quantenpartikeln",
            nl: "Een methode om kopieën van quantumdeeltjes te maken"
          },
          {
            en: "The ability to communicate faster than light using quantum mechanics",
            es: "La capacidad de comunicarse más rápido que la luz usando mecánica cuántica",
            de: "Die Fähigkeit, schneller als das Licht zu kommunizieren, unter Verwendung der Quantenmechanik",
            nl: "Het vermogen om sneller dan het licht te communiceren met behulp van quantummechanica"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum teleportation is the process of transferring quantum information (the quantum state) from one particle to another distant particle using quantum entanglement and classical communication. No matter or energy is transported - only information. The original quantum state is destroyed in the process, consistent with the no-cloning theorem, and the process cannot occur faster than light due to the need for classical communication.",
          es: "La teletransportación cuántica es el proceso de transferir información cuántica (el estado cuántico) de una partícula a otra partícula distante usando entrelazamiento cuántico y comunicación clásica. No se transporta materia ni energía - solo información. El estado cuántico original se destruye en el proceso, consistente con el teorema de no-clonación, y el proceso no puede ocurrir más rápido que la luz debido a la necesidad de comunicación clásica.",
          de: "Quantenteleportation ist der Prozess der Übertragung von Quanteninformation (dem Quantenzustand) von einem Teilchen zu einem anderen entfernten Teilchen unter Verwendung von Quantenverschränkung und klassischer Kommunikation. Keine Materie oder Energie wird transportiert - nur Information. Der ursprüngliche Quantenzustand wird im Prozess zerstört, konsistent mit dem No-Cloning-Theorem, und der Prozess kann nicht schneller als das Licht auftreten aufgrund der Notwendigkeit klassischer Kommunikation.",
          nl: "Quantum teleportatie is het proces van het overdragen van quantuminformatie (de quantumtoestand) van het ene deeltje naar een ander ver deeltje met behulp van quantum verstrengeling en klassieke communicatie. Er wordt geen materie of energie getransporteerd - alleen informatie. De oorspronkelijke quantumtoestand wordt vernietigd in het proces, consistent met het no-cloning theorema, en het proces kan niet sneller dan het licht plaatsvinden vanwege de noodzaak van klassieke communicatie."
        }
      },
      {
        question: {
          en: "What is the quantum approximate optimization algorithm (QAOA) and what type of problems is it designed to solve?",
          es: "¿Qué es el algoritmo de optimización aproximada cuántica (QAOA) y qué tipo de problemas está diseñado para resolver?",
          de: "Was ist der Quantum Approximate Optimization Algorithm (QAOA) und welche Art von Problemen ist er zur Lösung konzipiert?",
          nl: "Wat is het quantum approximate optimization algorithm (QAOA) en voor welk type problemen is het ontworpen om op te lossen?"
        },
        options: [
          {
            en: "A hybrid quantum-classical algorithm designed to solve combinatorial optimization problems using parameterized quantum circuits",
            es: "Un algoritmo híbrido cuántico-clásico diseñado para resolver problemas de optimización combinatoria usando circuitos cuánticos parametrizados",
            de: "Ein hybrider Quanten-klassischer Algorithmus, der entwickelt wurde, um kombinatorische Optimierungsprobleme mit parametrisierten Quantenschaltungen zu lösen",
            nl: "Een hybride quantum-klassiek algoritme ontworpen om combinatorische optimalisatieproblemen op te lossen met geparametriseerde quantumcircuits"
          },
          {
            en: "A classical algorithm for quantum circuit simulation",
            es: "Un algoritmo clásico para simulación de circuitos cuánticos",
            de: "Ein klassischer Algorithmus für die Simulation von Quantenschaltungen",
            nl: "Een klassiek algoritme voor quantumcircuitsimulatie"
          },
          {
            en: "A quantum error correction protocol",
            es: "Un protocolo de corrección de errores cuánticos",
            de: "Ein Quantenfehlerkorrekturprotokoll",
            nl: "Een quantum foutcorrectieprotocol"
          },
          {
            en: "A method for creating quantum entanglement between distant particles",
            es: "Un método para crear entrelazamiento cuántico entre partículas distantes",
            de: "Eine Methode zur Erzeugung von Quantenverschränkung zwischen entfernten Teilchen",
            nl: "Een methode voor het creëren van quantum verstrengeling tussen verre deeltjes"
          }
        ],
        correct: 0,
        explanation: {
          en: "QAOA is a variational quantum algorithm that combines quantum and classical processing to tackle combinatorial optimization problems like Max-Cut, traveling salesman, and portfolio optimization. It uses a parameterized quantum circuit with alternating problem and mixing Hamiltonians, where classical optimization is used to find the best parameters. It's particularly promising for near-term quantum computers.",
          es: "QAOA es un algoritmo cuántico variacional que combina procesamiento cuántico y clásico para abordar problemas de optimización combinatoria como Max-Cut, vendedor viajero y optimización de portafolio. Usa un circuito cuántico parametrizado con Hamiltonianos de problema y mezcla alternados, donde se usa optimización clásica para encontrar los mejores parámetros. Es particularmente prometedor para computadoras cuánticas de corto plazo.",
          de: "QAOA ist ein variationaler Quantenalgorithmus, der Quanten- und klassische Verarbeitung kombiniert, um kombinatorische Optimierungsprobleme wie Max-Cut, Handlungsreisender und Portfolio-Optimierung anzugehen. Er verwendet eine parametrisierte Quantenschaltung mit abwechselnden Problem- und Mischungs-Hamiltonians, wobei klassische Optimierung verwendet wird, um die besten Parameter zu finden. Er ist besonders vielversprechend für kurzfristige Quantencomputer.",
          nl: "QAOA is een variationeel quantumalgoritme dat quantum en klassieke verwerking combineert om combinatorische optimalisatieproblemen zoals Max-Cut, handelsreiziger en portfolio-optimalisatie aan te pakken. Het gebruikt een geparametriseerd quantumcircuit met alternerende probleem- en mengings-Hamiltonianen, waarbij klassieke optimalisatie wordt gebruikt om de beste parameters te vinden. Het is bijzonder veelbelovend voor nabije-termijn quantumcomputers."
        }
      },
      {
        question: {
          en: "What is quantum key distribution (QKD) and how does it provide security?",
          es: "¿Qué es la distribución de clave cuántica (QKD) y cómo proporciona seguridad?",
          de: "Was ist Quantenschlüsselverteilung (QKD) und wie bietet sie Sicherheit?",
          nl: "Wat is quantum key distribution (QKD) en hoe biedt het veiligheid?"
        },
        options: [
          {
            en: "A quantum communication protocol that uses quantum properties to detect eavesdropping and establish provably secure encryption keys",
            es: "Un protocolo de comunicación cuántica que usa propiedades cuánticas para detectar espionaje y establecer claves de cifrado demostrablemente seguras",
            de: "Ein Quantenkommunikationsprotokoll, das Quanteneigenschaften nutzt, um Abhörversuche zu erkennen und nachweisbar sichere Verschlüsselungsschlüssel zu etablieren",
            nl: "Een quantumcommunicatieprotocol dat quantumeigenschappen gebruikt om afluisteren te detecteren en bewezen veilige versleutelingssleutels te vestigen"
          },
          {
            en: "A classical encryption method that cannot be broken",
            es: "Un método de cifrado clásico que no puede ser roto",
            de: "Eine klassische Verschlüsselungsmethode, die nicht gebrochen werden kann",
            nl: "Een klassieke versleutelingsmethode die niet gebroken kan worden"
          },
          {
            en: "A quantum algorithm for generating random numbers",
            es: "Un algoritmo cuántico para generar números aleatorios",
            de: "Ein Quantenalgorithmus zur Erzeugung von Zufallszahlen",
            nl: "Een quantumalgoritme voor het genereren van willekeurige getallen"
          },
          {
            en: "A method to compress quantum information",
            es: "Un método para comprimir información cuántica",
            de: "Eine Methode zur Kompression von Quanteninformationen",
            nl: "Een methode om quantuminformatie te comprimeren"
          }
        ],
        correct: 0,
        explanation: {
          en: "QKD uses quantum mechanics principles, particularly the no-cloning theorem and measurement disturbance, to create unconditionally secure communication. Any attempt to intercept the quantum states being transmitted will inevitably disturb them, alerting the communicating parties to the presence of an eavesdropper. This allows for the detection of interception and the establishment of provably secure encryption keys.",
          es: "QKD usa principios de mecánica cuántica, particularmente el teorema de no-clonación y perturbación de medición, para crear comunicación incondicionalmente segura. Cualquier intento de interceptar los estados cuánticos transmitidos inevitablemente los perturbará, alertando a las partes comunicantes de la presencia de un espía. Esto permite la detección de interceptación y el establecimiento de claves de cifrado demostrablemente seguras.",
          de: "QKD nutzt quantenmechanische Prinzipien, insbesondere das No-Cloning-Theorem und Messungsstörungen, um unbedingt sichere Kommunikation zu schaffen. Jeder Versuch, die übertragenen Quantenzustände abzufangen, wird sie unweigerlich stören und die kommunizierenden Parteien auf die Anwesenheit eines Lauschers aufmerksam machen. Dies ermöglicht die Erkennung von Abfangversuchen und die Etablierung nachweisbar sicherer Verschlüsselungsschlüssel.",
          nl: "QKD gebruikt quantummechanica principes, met name het no-cloning theorema en meetverstoring, om onvoorwaardelijk veilige communicatie te creëren. Elke poging om de verzonden quantumtoestanden te onderscheppen zal ze onvermijdelijk verstoren, waardoor de communicerende partijen gewaarschuwd worden voor de aanwezigheid van een afluisteraar. Dit maakt detectie van onderschepping mogelijk en de vestiging van bewezen veilige versleutelingssleutels."
        }
      },
      {
        question: {
          en: "What is the relationship between quantum computing and machine learning, and what advantages might quantum machine learning offer?",
          es: "¿Cuál es la relación entre la computación cuántica y el aprendizaje automático, y qué ventajas podría ofrecer el aprendizaje automático cuántico?",
          de: "Was ist die Beziehung zwischen Quantencomputing und maschinellem Lernen, und welche Vorteile könnte quantenmaschinelles Lernen bieten?",
          nl: "Wat is de relatie tussen quantum computing en machine learning, en welke voordelen zou quantum machine learning kunnen bieden?"
        },
        options: [
          {
            en: "Quantum computers could potentially provide exponential speedups for certain ML algorithms through quantum parallelism and enhanced feature spaces",
            es: "Las computadoras cuánticas podrían potencialmente proporcionar aceleraciones exponenciales para ciertos algoritmos de ML a través del paralelismo cuántico y espacios de características mejorados",
            de: "Quantencomputer könnten möglicherweise exponentielle Beschleunigungen für bestimmte ML-Algorithmen durch Quantenparallelismus und erweiterte Feature-Räume bieten",
            nl: "Quantumcomputers zouden potentieel exponentiële versnellingen kunnen bieden voor bepaalde ML-algoritmes door quantum parallelisme en verbeterde feature ruimtes"
          },
          {
            en: "Quantum computing and machine learning are completely unrelated fields",
            es: "La computación cuántica y el aprendizaje automático son campos completamente no relacionados",
            de: "Quantencomputing und maschinelles Lernen sind völlig unabhängige Bereiche",
            nl: "Quantum computing en machine learning zijn volledig ongerelateerde velden"
          },
          {
            en: "Machine learning is only useful for programming classical computers",
            es: "El aprendizaje automático solo es útil para programar computadoras clásicas",
            de: "Maschinelles Lernen ist nur für die Programmierung klassischer Computer nützlich",
            nl: "Machine learning is alleen nuttig voor het programmeren van klassieke computers"
          },
          {
            en: "Quantum computers will completely replace machine learning algorithms",
            es: "Las computadoras cuánticas reemplazarán completamente los algoritmos de aprendizaje automático",
            de: "Quantencomputer werden maschinelle Lernalgorithmen vollständig ersetzen",
            nl: "Quantumcomputers zullen machine learning algoritmes volledig vervangen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum machine learning (QML) explores how quantum computing can enhance machine learning algorithms. Potential advantages include exponential speedups for certain problems through quantum parallelism, access to exponentially large Hilbert spaces for feature mapping, and quantum algorithms for linear algebra operations. However, practical advantages remain to be demonstrated as the field is still developing.",
          es: "El aprendizaje automático cuántico (QML) explora cómo la computación cuántica puede mejorar los algoritmos de aprendizaje automático. Las ventajas potenciales incluyen aceleraciones exponenciales para ciertos problemas a través del paralelismo cuántico, acceso a espacios de Hilbert exponencialmente grandes para mapeo de características, y algoritmos cuánticos para operaciones de álgebra lineal. Sin embargo, las ventajas prácticas aún están por demostrarse ya que el campo aún se está desarrollando.",
          de: "Quantenmaschinelles Lernen (QML) erforscht, wie Quantencomputing maschinelle Lernalgorithmen verbessern kann. Potentielle Vorteile umfassen exponentielle Beschleunigungen für bestimmte Probleme durch Quantenparallelismus, Zugang zu exponentiell großen Hilbert-Räumen für Feature-Mapping und Quantenalgorithmen für lineare Algebra-Operationen. Praktische Vorteile müssen jedoch noch demonstriert werden, da sich das Feld noch in der Entwicklung befindet.",
          nl: "Quantum machine learning (QML) onderzoekt hoe quantum computing machine learning algoritmes kan verbeteren. Potentiële voordelen omvatten exponentiële versnellingen voor bepaalde problemen door quantum parallelisme, toegang tot exponentieel grote Hilbert ruimtes voor feature mapping, en quantumalgoritmes voor lineaire algebra operaties. Praktische voordelen moeten echter nog bewezen worden aangezien het veld nog in ontwikkeling is."
        }
      },
      {
        question: {
          en: "What are the main physical implementations of qubits being pursued for quantum computing?",
          es: "¿Cuáles son las principales implementaciones físicas de qubits que se están persiguiendo para la computación cuántica?",
          de: "Was sind die wichtigsten physischen Implementierungen von Qubits, die für das Quantencomputing verfolgt werden?",
          nl: "Wat zijn de belangrijkste fysieke implementaties van qubits die worden nagestreefd voor quantum computing?"
        },
        options: [
          {
            en: "Superconducting circuits, trapped ions, photons, topological qubits, and neutral atoms, each with different advantages and challenges",
            es: "Circuitos superconductores, iones atrapados, fotones, qubits topológicos y átomos neutros, cada uno con diferentes ventajas y desafíos",
            de: "Supraleitende Schaltkreise, gefangene Ionen, Photonen, topologische Qubits und neutrale Atome, jede mit verschiedenen Vorteilen und Herausforderungen",
            nl: "Supergeleidende circuits, gevangen ionen, fotonen, topologische qubits, en neutrale atomen, elk met verschillende voordelen en uitdagingen"
          },
          {
            en: "Only superconducting qubits are viable for practical quantum computing",
            es: "Solo los qubits superconductores son viables para la computación cuántica práctica",
            de: "Nur supraleitende Qubits sind für praktisches Quantencomputing brauchbar",
            nl: "Alleen supergeleidende qubits zijn haalbaar voor praktische quantum computing"
          },
          {
            en: "Quantum computing only works with silicon-based transistors",
            es: "La computación cuántica solo funciona con transistores basados en silicio",
            de: "Quantencomputing funktioniert nur mit siliziumbasierten Transistoren",
            nl: "Quantum computing werkt alleen met silicium-gebaseerde transistors"
          },
          {
            en: "All qubits are implemented using traditional semiconductor technology",
            es: "Todos los qubits se implementan usando tecnología de semiconductores tradicional",
            de: "Alle Qubits werden mit traditioneller Halbleitertechnologie implementiert",
            nl: "Alle qubits worden geïmplementeerd met traditionele halfgeleidertechnologie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Multiple physical platforms are being developed for quantum computing, each with trade-offs. Superconducting qubits (used by Google, IBM) offer fast gates but require extreme cooling. Trapped ions provide high fidelity but slower operations. Photonic qubits enable room-temperature operation and networking but face challenges in creating interactions. Topological qubits promise inherent error protection but remain largely theoretical. Each approach represents different strategies for achieving fault-tolerant quantum computing.",
          es: "Se están desarrollando múltiples plataformas físicas para la computación cuántica, cada una con compromisos. Los qubits superconductores (usados por Google, IBM) ofrecen puertas rápidas pero requieren enfriamiento extremo. Los iones atrapados proporcionan alta fidelidad pero operaciones más lentas. Los qubits fotónicos permiten operación a temperatura ambiente y redes pero enfrentan desafíos en crear interacciones. Los qubits topológicos prometen protección inherente contra errores pero permanecen en gran parte teóricos.",
          de: "Mehrere physische Plattformen werden für das Quantencomputing entwickelt, jede mit Kompromissen. Supraleitende Qubits (verwendet von Google, IBM) bieten schnelle Gates, benötigen aber extreme Kühlung. Gefangene Ionen bieten hohe Genauigkeit aber langsamere Operationen. Photonische Qubits ermöglichen Raumtemperaturbetrieb und Vernetzung, stehen aber vor Herausforderungen bei der Schaffung von Wechselwirkungen. Topologische Qubits versprechen inhärenten Fehlerschutz, bleiben aber weitgehend theoretisch.",
          nl: "Meerdere fysieke platforms worden ontwikkeld voor quantum computing, elk met afwegingen. Supergeleidende qubits (gebruikt door Google, IBM) bieden snelle gates maar vereisen extreme koeling. Gevangen ionen bieden hoge betrouwbaarheid maar langzamere operaties. Fotonische qubits maken kamertemperatuur operatie en netwerken mogelijk maar hebben uitdagingen bij het creëren van interacties. Topologische qubits beloven inherente foutbescherming maar blijven grotendeels theoretisch."
        }
      },
      {
        question: {
          en: "What is the no-cloning theorem and why is it fundamental to quantum information?",
          es: "¿Qué es el teorema de no-clonación y por qué es fundamental para la información cuántica?",
          de: "Was ist das No-Cloning-Theorem und warum ist es fundamental für die Quanteninformation?",
          nl: "Wat is het no-cloning theorema en waarom is het fundamenteel voor quantuminformatie?"
        },
        options: [
          {
            en: "A theorem stating that it's impossible to create identical copies of an arbitrary unknown quantum state",
            es: "Un teorema que establece que es imposible crear copias idénticas de un estado cuántico arbitrario desconocido",
            de: "Ein Theorem, das besagt, dass es unmöglich ist, identische Kopien eines beliebigen unbekannten Quantenzustands zu erstellen",
            nl: "Een theorema dat stelt dat het onmogelijk is om identieke kopieën te maken van een willekeurige onbekende quantumtoestand"
          },
          {
            en: "A method to duplicate quantum information perfectly",
            es: "Un método para duplicar información cuántica perfectamente",
            de: "Eine Methode zur perfekten Duplikation von Quanteninformationen",
            nl: "Een methode om quantuminformatie perfect te dupliceren"
          },
          {
            en: "A classical computing principle applied to quantum systems",
            es: "Un principio de computación clásica aplicado a sistemas cuánticos",
            de: "Ein klassisches Computerprinzip, das auf Quantensysteme angewendet wird",
            nl: "Een klassiek computerprincipe toegepast op quantumsystemen"
          },
          {
            en: "A theorem about the maximum number of qubits in a quantum computer",
            es: "Un teorema sobre el número máximo de qubits en una computadora cuántica",
            de: "Ein Theorem über die maximale Anzahl von Qubits in einem Quantencomputer",
            nl: "Een theorema over het maximale aantal qubits in een quantumcomputer"
          }
        ],
        correct: 0,
        explanation: {
          en: "The no-cloning theorem, proven by Wootters and Zurek, states that it's impossible to create identical copies of an arbitrary unknown quantum state. This theorem is fundamental because it underlies quantum cryptography security, prevents perfect quantum copying, enables quantum teleportation, and distinguishes quantum information from classical information. It's a direct consequence of the linearity of quantum mechanics.",
          es: "El teorema de no-clonación, demostrado por Wootters y Zurek, establece que es imposible crear copias idénticas de un estado cuántico arbitrario desconocido. Este teorema es fundamental porque subyace la seguridad de la criptografía cuántica, previene la copia cuántica perfecta, permite la teletransportación cuántica, y distingue la información cuántica de la información clásica. Es una consecuencia directa de la linealidad de la mecánica cuántica.",
          de: "Das No-Cloning-Theorem, bewiesen von Wootters und Zurek, besagt, dass es unmöglich ist, identische Kopien eines beliebigen unbekannten Quantenzustands zu erstellen. Dieses Theorem ist fundamental, weil es der Sicherheit der Quantenkryptographie zugrunde liegt, perfektes Quantenkopieren verhindert, Quantenteleportation ermöglicht und Quanteninformation von klassischer Information unterscheidet. Es ist eine direkte Folge der Linearität der Quantenmechanik.",
          nl: "Het no-cloning theorema, bewezen door Wootters en Zurek, stelt dat het onmogelijk is om identieke kopieën te maken van een willekeurige onbekende quantumtoestand. Dit theorema is fundamenteel omdat het de basis vormt van quantumcryptografie beveiliging, perfect quantum kopiëren voorkomt, quantum teleportatie mogelijk maakt, en quantuminformatie onderscheidt van klassieke informatie. Het is een directe consequentie van de lineariteit van quantummechanica."
        }
      },
      {
        question: {
          en: "What is a quantum circuit and how does it differ from classical circuits?",
          es: "¿Qué es un circuito cuántico y en qué se diferencia de los circuitos clásicos?",
          de: "Was ist eine Quantenschaltung und wie unterscheidet sie sich von klassischen Schaltungen?",
          nl: "Wat is een quantumcircuit en hoe verschilt het van klassieke circuits?"
        },
        options: [
          {
            en: "A sequence of quantum gates operating on qubits, representing reversible unitary operations unlike irreversible classical logic gates",
            es: "Una secuencia de puertas cuánticas operando en qubits, representando operaciones unitarias reversibles a diferencia de puertas lógicas clásicas irreversibles",
            de: "Eine Sequenz von Quantengattern, die auf Qubits operieren und reversible unitäre Operationen darstellen, im Gegensatz zu irreversiblen klassischen Logikgattern",
            nl: "Een sequentie van quantumpoorten die opereren op qubits, die reversibele unitaire operaties vertegenwoordigen in tegenstelling tot onomkeerbare klassieke logische poorten"
          },
          {
            en: "A faster version of classical electronic circuits using quantum effects",
            es: "Una versión más rápida de circuitos electrónicos clásicos usando efectos cuánticos",
            de: "Eine schnellere Version klassischer elektronischer Schaltungen unter Verwendung von Quanteneffekten",
            nl: "Een snellere versie van klassieke elektronische circuits met quantumeffecten"
          },
          {
            en: "Circuits that operate at extremely cold temperatures only",
            es: "Circuitos que operan solo a temperaturas extremadamente frías",
            de: "Schaltungen, die nur bei extrem kalten Temperaturen funktionieren",
            nl: "Circuits die alleen bij extreem koude temperaturen werken"
          },
          {
            en: "Classical circuits miniaturized to quantum scales",
            es: "Circuitos clásicos miniaturizados a escalas cuánticas",
            de: "Klassische Schaltungen, die auf Quantenskalen miniaturisiert sind",
            nl: "Klassieke circuits geminituriseerd tot quantumschalen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum circuits are composed of quantum gates (unitary operations) that manipulate qubits. Unlike classical circuits with irreversible logic gates, quantum circuits are inherently reversible and can create and manipulate superposition and entanglement. They represent the computational model for gate-based quantum computers and are visualized as sequences of gates applied to qubit lines over time.",
          es: "Los circuitos cuánticos están compuestos de puertas cuánticas (operaciones unitarias) que manipulan qubits. A diferencia de circuitos clásicos con puertas lógicas irreversibles, los circuitos cuánticos son inherentemente reversibles y pueden crear y manipular superposición y entrelazamiento. Representan el modelo computacional para computadoras cuánticas basadas en puertas y se visualizan como secuencias de puertas aplicadas a líneas de qubit a través del tiempo.",
          de: "Quantenschaltungen bestehen aus Quantengattern (unitäre Operationen), die Qubits manipulieren. Im Gegensatz zu klassischen Schaltungen mit irreversiblen Logikgattern sind Quantenschaltungen inherent reversibel und können Superposition und Verschränkung erzeugen und manipulieren. Sie repräsentieren das Berechnungsmodell für gatterbasierte Quantencomputer und werden als Sequenzen von Gattern visualisiert, die über die Zeit auf Qubit-Linien angewendet werden.",
          nl: "Quantumcircuits bestaan uit quantumpoorten (unitaire operaties) die qubits manipuleren. In tegenstelling tot klassieke circuits met onomkeerbare logische poorten zijn quantumcircuits inherent omkeerbaar en kunnen superpositie en verstrengeling creëren en manipuleren. Ze vertegenwoordigen het computationele model voor poort-gebaseerde quantumcomputers en worden gevisualiseerd als sequenties van poorten toegepast op qubit lijnen over tijd."
        }
      },
      {
        question: {
          en: "What is quantum entanglement swapping and what are its applications?",
          es: "¿Qué es el intercambio de entrelazamiento cuántico y cuáles son sus aplicaciones?",
          de: "Was ist Quantenverschränkungsaustausch und was sind seine Anwendungen?",
          nl: "Wat is quantum verstrengeling omwisseling en wat zijn de toepassingen?"
        },
        options: [
          {
            en: "A process to create entanglement between particles that have never directly interacted, enabling quantum networks and long-distance quantum communication",
            es: "Un proceso para crear entrelazamiento entre partículas que nunca han interactuado directamente, habilitando redes cuánticas y comunicación cuántica de larga distancia",
            de: "Ein Prozess zur Erzeugung von Verschränkung zwischen Teilchen, die nie direkt miteinander interagiert haben, wodurch Quantennetzwerke und Langstrecken-Quantenkommunikation ermöglicht werden",
            nl: "Een proces om verstrengeling te creëren tussen deeltjes die nooit direct hebben geïnteraceerd, waardoor quantumnetwerken en langafstands quantumcommunicatie mogelijk worden"
          },
          {
            en: "A method to transfer energy between quantum particles instantaneously",
            es: "Un método para transferir energía entre partículas cuánticas instantáneamente",
            de: "Eine Methode zur sofortigen Energieübertragung zwischen Quantenpartikeln",
            nl: "Een methode om energie tussen quantumdeeltjes instantaan over te dragen"
          },
          {
            en: "The process of converting entangled particles back to classical states",
            es: "El proceso de convertir partículas entrelazadas de vuelta a estados clásicos",
            de: "Der Prozess der Umwandlung verschränkter Teilchen zurück in klassische Zustände",
            nl: "Het proces van het omzetten van verstrengelde deeltjes terug naar klassieke toestanden"
          },
          {
            en: "A quantum algorithm for optimizing network routing",
            es: "Un algoritmo cuántico para optimizar el enrutamiento de redes",
            de: "Ein Quantenalgorithmus zur Optimierung des Netzwerk-Routings",
            nl: "Een quantumalgoritme voor het optimaliseren van netwerkrouting"
          }
        ],
        correct: 0,
        explanation: {
          en: "Entanglement swapping allows two particles that have never interacted to become entangled through a Bell measurement on their respective entangled partners. This process is crucial for building quantum networks, quantum repeaters for long-distance communication, and distributed quantum computing. It enables the extension of entanglement over arbitrarily long distances by creating entanglement links between distant nodes.",
          es: "El intercambio de entrelazamiento permite que dos partículas que nunca han interactuado se entrelacen a través de una medición de Bell en sus respectivos compañeros entrelazados. Este proceso es crucial para construir redes cuánticas, repetidores cuánticos para comunicación de larga distancia, y computación cuántica distribuida. Permite la extensión del entrelazamiento sobre distancias arbitrariamente largas creando enlaces de entrelazamiento entre nodos distantes.",
          de: "Verschränkungsaustausch ermöglicht es zwei Teilchen, die nie interagiert haben, durch eine Bell-Messung an ihren jeweiligen verschränkten Partnern verschränkt zu werden. Dieser Prozess ist entscheidend für den Aufbau von Quantennetzwerken, Quantenrepeatern für Langstreckenkommunikation und verteiltes Quantencomputing. Er ermöglicht die Ausdehnung von Verschränkung über beliebig lange Distanzen durch die Schaffung von Verschränkungsverbindungen zwischen entfernten Knoten.",
          nl: "Verstrengeling omwisseling stelt twee deeltjes die nooit hebben geïnteraceerd in staat om verstrengeld te raken door een Bell meting op hun respectievelijke verstrengelde partners. Dit proces is cruciaal voor het bouwen van quantumnetwerken, quantum repeaters voor langafstands communicatie, en gedistribueerde quantum computing. Het maakt uitbreiding van verstrengeling over willekeurig lange afstanden mogelijk door verstrengeling verbindingen te creëren tussen verre knooppunten."
        }
      },
      {
        question: {
          en: "What is variational quantum eigensolver (VQE) and what problems is it designed to solve?",
          es: "¿Qué es el solucionador de valores propios cuántico variacional (VQE) y qué problemas está diseñado para resolver?",
          de: "Was ist der Variational Quantum Eigensolver (VQE) und welche Probleme ist er zur Lösung konzipiert?",
          nl: "Wat is de variational quantum eigensolver (VQE) en welke problemen is het ontworpen om op te lossen?"
        },
        options: [
          {
            en: "A hybrid quantum-classical algorithm for finding ground state energies of molecular systems, particularly useful for quantum chemistry applications",
            es: "Un algoritmo híbrido cuántico-clásico para encontrar energías del estado fundamental de sistemas moleculares, particularmente útil para aplicaciones de química cuántica",
            de: "Ein hybrider Quanten-klassischer Algorithmus zur Bestimmung der Grundzustandsenergien molekularer Systeme, besonders nützlich für quantenchemische Anwendungen",
            nl: "Een hybride quantum-klassiek algoritme voor het vinden van grondtoestand energieën van moleculaire systemen, bijzonder nuttig voor quantumchemie toepassingen"
          },
          {
            en: "A classical optimization algorithm for quantum circuit design",
            es: "Un algoritmo de optimización clásico para diseño de circuitos cuánticos",
            de: "Ein klassischer Optimierungsalgorithmus für das Design von Quantenschaltungen",
            nl: "Een klassiek optimalisatiealgoritme voor quantumcircuit ontwerp"
          },
          {
            en: "A quantum algorithm for solving linear systems of equations",
            es: "Un algoritmo cuántico para resolver sistemas lineales de ecuaciones",
            de: "Ein Quantenalgorithmus zur Lösung linearer Gleichungssysteme",
            nl: "Een quantumalgoritme voor het oplossen van lineaire vergelijkingssystemen"
          },
          {
            en: "A method for creating maximally entangled quantum states",
            es: "Un método para crear estados cuánticos máximamente entrelazados",
            de: "Eine Methode zur Erzeugung maximal verschränkter Quantenzustände",
            nl: "Een methode voor het creëren van maximaal verstrengelde quantumtoestanden"
          }
        ],
        correct: 0,
        explanation: {
          en: "VQE is a hybrid algorithm that uses a quantum computer to prepare trial wavefunctions and measure energies, while a classical optimizer adjusts parameters to minimize the energy. It's particularly promising for near-term quantum devices because it requires relatively shallow quantum circuits. VQE has applications in quantum chemistry for drug discovery, materials science, and understanding catalysis by accurately computing molecular properties.",
          es: "VQE es un algoritmo híbrido que usa una computadora cuántica para preparar funciones de onda de prueba y medir energías, mientras un optimizador clásico ajusta parámetros para minimizar la energía. Es particularmente prometedor para dispositivos cuánticos de corto plazo porque requiere circuitos cuánticos relativamente superficiales. VQE tiene aplicaciones en química cuántica para descubrimiento de fármacos, ciencia de materiales, y entender catálisis computando propiedades moleculares con precisión.",
          de: "VQE ist ein hybrider Algorithmus, der einen Quantencomputer verwendet, um Versuchswellenfunktionen zu präparieren und Energien zu messen, während ein klassischer Optimierer Parameter anpasst, um die Energie zu minimieren. Er ist besonders vielversprechend für kurzfristige Quantengeräte, weil er relativ flache Quantenschaltungen erfordert. VQE hat Anwendungen in der Quantenchemie für Arzneimittelentdeckung, Materialwissenschaft und das Verständnis von Katalyse durch genaue Berechnung molekularer Eigenschaften.",
          nl: "VQE is een hybride algoritme dat een quantumcomputer gebruikt om proef golffuncties voor te bereiden en energieën te meten, terwijl een klassieke optimizer parameters aanpast om de energie te minimaliseren. Het is bijzonder veelbelovend voor nabije-termijn quantumapparaten omdat het relatief ondiepe quantumcircuits vereist. VQE heeft toepassingen in quantumchemie voor geneesmiddelenontdekking, materiaalwetenschap, en het begrijpen van katalyse door nauwkeurig moleculaire eigenschappen te berekenen."
        }
      },
      {
        question: {
          en: "What is quantum advantage and how does it differ from quantum supremacy?",
          es: "¿Qué es la ventaja cuántica y en qué se diferencia de la supremacía cuántica?",
          de: "Was ist Quantenvorteil und wie unterscheidet er sich von Quantenüberlegenheit?",
          nl: "Wat is quantum voordeel en hoe verschilt het van quantum suprematie?"
        },
        options: [
          {
            en: "Quantum advantage refers to practical speedups for useful problems, while quantum supremacy demonstrates computational tasks classical computers cannot perform efficiently",
            es: "La ventaja cuántica se refiere a aceleraciones prácticas para problemas útiles, mientras que la supremacía cuántica demuestra tareas computacionales que las computadoras clásicas no pueden realizar eficientemente",
            de: "Quantenvorteil bezieht sich auf praktische Beschleunigungen für nützliche Probleme, während Quantenüberlegenheit rechnerische Aufgaben demonstriert, die klassische Computer nicht effizient ausführen können",
            nl: "Quantum voordeel verwijst naar praktische versnellingen voor nuttige problemen, terwijl quantum suprematie computationele taken demonstreert die klassieke computers niet efficiënt kunnen uitvoeren"
          },
          {
            en: "They are identical concepts with different names",
            es: "Son conceptos idénticos con nombres diferentes",
            de: "Sie sind identische Konzepte mit verschiedenen Namen",
            nl: "Ze zijn identieke concepten met verschillende namen"
          },
          {
            en: "Quantum advantage is theoretical while quantum supremacy is practical",
            es: "La ventaja cuántica es teórica mientras que la supremacía cuántica es práctica",
            de: "Quantenvorteil ist theoretisch, während Quantenüberlegenheit praktisch ist",
            nl: "Quantum voordeel is theoretisch terwijl quantum suprematie praktisch is"
          },
          {
            en: "Quantum advantage applies only to cryptography problems",
            es: "La ventaja cuántica se aplica solo a problemas de criptografía",
            de: "Quantenvorteil gilt nur für Kryptographie-Probleme",
            nl: "Quantum voordeel geldt alleen voor cryptografie problemen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum supremacy (now often called quantum computational supremacy) demonstrates that a quantum computer can solve a specific problem faster than any classical computer, even if the problem has no practical application. Quantum advantage refers to quantum computers solving practically useful problems faster than classical computers. Achieving quantum advantage for useful applications remains a key goal for the field.",
          es: "La supremacía cuántica (ahora a menudo llamada supremacía computacional cuántica) demuestra que una computadora cuántica puede resolver un problema específico más rápido que cualquier computadora clásica, incluso si el problema no tiene aplicación práctica. La ventaja cuántica se refiere a las computadoras cuánticas resolviendo problemas prácticamente útiles más rápido que las computadoras clásicas. Lograr ventaja cuántica para aplicaciones útiles sigue siendo un objetivo clave para el campo.",
          de: "Quantenüberlegenheit (jetzt oft als Quantenrechnerische Überlegenheit bezeichnet) zeigt, dass ein Quantencomputer ein spezifisches Problem schneller lösen kann als jeder klassische Computer, selbst wenn das Problem keine praktische Anwendung hat. Quantenvorteil bezieht sich darauf, dass Quantencomputer praktisch nützliche Probleme schneller lösen als klassische Computer. Das Erreichen von Quantenvorteil für nützliche Anwendungen bleibt ein Schlüsselziel für das Feld.",
          nl: "Quantum suprematie (nu vaak quantum computationele suprematie genoemd) toont aan dat een quantumcomputer een specifiek probleem sneller kan oplossen dan elke klassieke computer, zelfs als het probleem geen praktische toepassing heeft. Quantum voordeel verwijst naar quantumcomputers die praktisch nuttige problemen sneller oplossen dan klassieke computers. Het bereiken van quantum voordeel voor nuttige toepassingen blijft een belangrijk doel voor het veld."
        }
      },
      {
        question: {
          en: "What are quantum repeaters and why are they necessary for quantum networks?",
          es: "¿Qué son los repetidores cuánticos y por qué son necesarios para las redes cuánticas?",
          de: "Was sind Quantenrepeater und warum sind sie für Quantennetzwerke notwendig?",
          nl: "Wat zijn quantum repeaters en waarom zijn ze nodig voor quantumnetwerken?"
        },
        options: [
          {
            en: "Devices that extend quantum communication range by creating fresh entanglement across network segments, overcoming photon loss in long-distance transmission",
            es: "Dispositivos que extienden el alcance de comunicación cuántica creando entrelazamiento fresco a través de segmentos de red, superando la pérdida de fotones en transmisión de larga distancia",
            de: "Geräte, die die Reichweite der Quantenkommunikation durch Erzeugung frischer Verschränkung über Netzwerksegmente hinweg erweitern und Photonenverluste bei Langstreckenübertragung überwinden",
            nl: "Apparaten die quantumcommunicatie bereik uitbreiden door verse verstrengeling te creëren over netwerksegmenten, fotonverlies in langafstands transmissie overwinnend"
          },
          {
            en: "Classical amplifiers that boost quantum signals like in classical networks",
            es: "Amplificadores clásicos que amplifican señales cuánticas como en redes clásicas",
            de: "Klassische Verstärker, die Quantensignale wie in klassischen Netzwerken verstärken",
            nl: "Klassieke versterkers die quantumsignalen versterken zoals in klassieke netwerken"
          },
          {
            en: "Storage devices for quantum information in network nodes",
            es: "Dispositivos de almacenamiento para información cuántica en nodos de red",
            de: "Speichergeräte für Quanteninformationen in Netzwerkknoten",
            nl: "Opslagapparaten voor quantuminformatie in netwerkknopen"
          },
          {
            en: "Routers that direct quantum traffic through optimal network paths",
            es: "Enrutadores que dirigen tráfico cuántico a través de rutas de red óptimas",
            de: "Router, die Quantenverkehr durch optimale Netzwerkpfade leiten",
            nl: "Routers die quantumverkeer door optimale netwerkpaden leiden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum repeaters are essential for long-distance quantum communication because quantum states cannot be amplified like classical signals due to the no-cloning theorem. Instead, repeaters use entanglement swapping and quantum memory to create fresh entanglement links across network segments. They overcome the exponential decay of direct transmission probability with distance, enabling global quantum networks and secure quantum internet infrastructure.",
          es: "Los repetidores cuánticos son esenciales para la comunicación cuántica de larga distancia porque los estados cuánticos no pueden ser amplificados como señales clásicas debido al teorema de no-clonación. En su lugar, los repetidores usan intercambio de entrelazamiento y memoria cuántica para crear enlaces de entrelazamiento frescos a través de segmentos de red. Superan el decaimiento exponencial de la probabilidad de transmisión directa con la distancia, habilitando redes cuánticas globales e infraestructura de internet cuántico seguro.",
          de: "Quantenrepeater sind wesentlich für Langstrecken-Quantenkommunikation, weil Quantenzustände aufgrund des No-Cloning-Theorems nicht wie klassische Signale verstärkt werden können. Stattdessen verwenden Repeater Verschränkungsaustausch und Quantenspeicher, um frische Verschränkungsverbindungen über Netzwerksegmente hinweg zu schaffen. Sie überwinden den exponentiellen Zerfall der direkten Übertragungswahrscheinlichkeit mit der Entfernung und ermöglichen globale Quantennetzwerke und sichere Quanteninternet-Infrastruktur.",
          nl: "Quantum repeaters zijn essentieel voor langafstands quantumcommunicatie omdat quantumtoestanden niet versterkt kunnen worden zoals klassieke signalen vanwege het no-cloning theorema. In plaats daarvan gebruiken repeaters verstrengeling omwisseling en quantumgeheugen om verse verstrengeling verbindingen te creëren over netwerksegmenten. Ze overwinnen het exponentiële verval van directe transmissiekans met afstand, waardoor globale quantumnetwerken en veilige quantum internet infrastructuur mogelijk worden."
        }
      },
      {
        question: {
          en: "What is quantum annealing and how does it differ from gate-based quantum computing?",
          es: "¿Qué es el recocido cuántico y en qué se diferencia de la computación cuántica basada en puertas?",
          de: "Was ist Quantum Annealing und wie unterscheidet es sich vom gatterbasierten Quantencomputing?",
          nl: "Wat is quantum annealing en hoe verschilt het van poort-gebaseerde quantum computing?"
        },
        options: [
          {
            en: "An analog quantum computing approach that finds optimal solutions by evolving a quantum system to its ground state, specialized for optimization problems",
            es: "Un enfoque de computación cuántica analógica que encuentra soluciones óptimas evolucionando un sistema cuántico a su estado fundamental, especializado para problemas de optimización",
            de: "Ein analoger Quantencomputing-Ansatz, der optimale Lösungen findet, indem er ein Quantensystem zu seinem Grundzustand evolviert, spezialisiert auf Optimierungsprobleme",
            nl: "Een analoge quantum computing benadering die optimale oplossingen vindt door een quantumsysteem te evolueren naar zijn grondtoestand, gespecialiseerd voor optimalisatieproblemen"
          },
          {
            en: "A cooling method used in all quantum computers to reach operating temperatures",
            es: "Un método de enfriamiento usado en todas las computadoras cuánticas para alcanzar temperaturas operativas",
            de: "Eine Kühlmethode, die in allen Quantencomputern verwendet wird, um Betriebstemperaturen zu erreichen",
            nl: "Een koelingmethode gebruikt in alle quantumcomputers om operationele temperaturen te bereiken"
          },
          {
            en: "A quantum algorithm that runs on gate-based quantum computers",
            es: "Un algoritmo cuántico que funciona en computadoras cuánticas basadas en puertas",
            de: "Ein Quantenalgorithmus, der auf gatterbasierten Quantencomputern läuft",
            nl: "Een quantumalgoritme dat draait op poort-gebaseerde quantumcomputers"
          },
          {
            en: "A method to increase the number of qubits in quantum processors",
            es: "Un método para aumentar el número de qubits en procesadores cuánticos",
            de: "Eine Methode zur Erhöhung der Anzahl von Qubits in Quantenprozessoren",
            nl: "Een methode om het aantal qubits in quantumprocessors te verhogen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum annealing is an analog approach to quantum computing where a quantum system evolves from an easy-to-prepare initial state to the ground state of a problem Hamiltonian that encodes the optimization problem. Unlike gate-based quantum computers that use discrete quantum gates, quantum annealers like D-Wave's systems use continuous evolution. They excel at solving combinatorial optimization problems but are less general-purpose than gate-based systems.",
          es: "El recocido cuántico es un enfoque analógico a la computación cuántica donde un sistema cuántico evoluciona desde un estado inicial fácil de preparar al estado fundamental de un Hamiltoniano problemático que codifica el problema de optimización. A diferencia de las computadoras cuánticas basadas en puertas que usan puertas cuánticas discretas, los recocedores cuánticos como los sistemas de D-Wave usan evolución continua. Destacan en resolver problemas de optimización combinatoria pero son menos de propósito general que los sistemas basados en puertas.",
          de: "Quantum Annealing ist ein analoger Ansatz zum Quantencomputing, bei dem ein Quantensystem von einem leicht zu präparierenden Anfangszustand zum Grundzustand eines Problem-Hamiltonians evolviert, der das Optimierungsproblem kodiert. Im Gegensatz zu gatterbasierten Quantencomputern, die diskrete Quantengatter verwenden, nutzen Quantenannealer wie D-Waves Systeme kontinuierliche Evolution. Sie sind hervorragend beim Lösen kombinatorischer Optimierungsprobleme, aber weniger allzwecktauglich als gatterbasierte Systeme.",
          nl: "Quantum annealing is een analoge benadering van quantum computing waarbij een quantumsysteem evolueert van een makkelijk voor te bereiden begintoestand naar de grondtoestand van een probleem Hamiltoniaan die het optimalisatieprobleem codeert. In tegenstelling tot poort-gebaseerde quantumcomputers die discrete quantumpoorten gebruiken, gebruiken quantum annealers zoals D-Wave's systemen continue evolutie. Ze blinken uit in het oplossen van combinatorische optimalisatieproblemen maar zijn minder algemeen toepasbaar dan poort-gebaseerde systemen."
        }
      },
      {
        question: {
          en: "What is quantum computing's relationship with complexity theory, particularly the BQP complexity class?",
          es: "¿Cuál es la relación de la computación cuántica con la teoría de complejidad, particularmente la clase de complejidad BQP?",
          de: "Was ist die Beziehung des Quantencomputings zur Komplexitätstheorie, insbesondere zur BQP-Komplexitätsklasse?",
          nl: "Wat is de relatie van quantum computing met complexiteitstheorie, in het bijzonder de BQP complexiteitsklasse?"
        },
        options: [
          {
            en: "BQP (Bounded-error Quantum Polynomial time) is the class of problems solvable by quantum computers in polynomial time, believed to contain problems not in P but possibly in P",
            es: "BQP (Tiempo Polinomial Cuántico de Error Acotado) es la clase de problemas resolubles por computadoras cuánticas en tiempo polinomial, se cree que contiene problemas que no están en P pero posiblemente en P",
            de: "BQP (Bounded-error Quantum Polynomial time) ist die Klasse der Probleme, die von Quantencomputern in Polynomzeit lösbar sind, von der angenommen wird, dass sie Probleme enthält, die nicht in P, aber möglicherweise in P sind",
            nl: "BQP (Bounded-error Quantum Polynomial time) is de klasse van problemen oplosbaar door quantumcomputers in polynomiale tijd, waarvan wordt aangenomen dat het problemen bevat die niet in P zijn maar mogelijk wel in P"
          },
          {
            en: "Quantum computers can solve all NP-complete problems exponentially faster",
            es: "Las computadoras cuánticas pueden resolver todos los problemas NP-completos exponencialmente más rápido",
            de: "Quantencomputer können alle NP-vollständigen Probleme exponentiell schneller lösen",
            nl: "Quantumcomputers kunnen alle NP-complete problemen exponentieel sneller oplossen"
          },
          {
            en: "BQP is identical to the classical complexity class P",
            es: "BQP es idéntico a la clase de complejidad clásica P",
            de: "BQP ist identisch mit der klassischen Komplexitätsklasse P",
            nl: "BQP is identiek aan de klassieke complexiteitsklasse P"
          },
          {
            en: "Quantum computers can solve any problem in exponential time",
            es: "Las computadoras cuánticas pueden resolver cualquier problema en tiempo exponencial",
            de: "Quantencomputer können jedes Problem in exponentieller Zeit lösen",
            nl: "Quantumcomputers kunnen elk probleem oplossen in exponentiële tijd"
          }
        ],
        correct: 0,
        explanation: {
          en: "BQP represents the computational power of quantum computers - problems solvable with bounded error probability in polynomial time on a quantum computer. It's known that P ⊆ BQP ⊆ PSPACE, but the exact relationship between BQP and other complexity classes like NP remains open. Some problems like integer factorization are believed to be in BQP but not known to be in P, while it's unlikely that BQP = NP since this would require quantum computers to solve the hardest NP problems efficiently.",
          es: "BQP representa el poder computacional de las computadoras cuánticas - problemas resolubles con probabilidad de error acotada en tiempo polinomial en una computadora cuántica. Se sabe que P ⊆ BQP ⊆ PSPACE, pero la relación exacta entre BQP y otras clases de complejidad como NP permanece abierta. Algunos problemas como la factorización de enteros se cree que están en BQP pero no se sabe que estén en P, mientras es improbable que BQP = NP ya que esto requeriría que las computadoras cuánticas resuelvan los problemas NP más difíciles eficientemente.",
          de: "BQP repräsentiert die Rechenleistung von Quantencomputern - Probleme, die mit begrenzter Fehlerwahrscheinlichkeit in Polynomzeit auf einem Quantencomputer lösbar sind. Es ist bekannt, dass P ⊆ BQP ⊆ PSPACE, aber die genaue Beziehung zwischen BQP und anderen Komplexitätsklassen wie NP bleibt offen. Einige Probleme wie Ganzzahlfaktorisierung werden als in BQP vermutet, sind aber nicht bekanntermaßen in P, während es unwahrscheinlich ist, dass BQP = NP, da dies erfordern würde, dass Quantencomputer die schwierigsten NP-Probleme effizient lösen.",
          nl: "BQP vertegenwoordigt de computationele kracht van quantumcomputers - problemen oplosbaar met begrensde foutkans in polynomiale tijd op een quantumcomputer. Het is bekend dat P ⊆ BQP ⊆ PSPACE, maar de exacte relatie tussen BQP en andere complexiteitsklassen zoals NP blijft open. Sommige problemen zoals gehele getallen factorizatie worden vermoed in BQP te zijn maar zijn niet bekend in P te zijn, terwijl het onwaarschijnlijk is dat BQP = NP omdat dit zou vereisen dat quantumcomputers de moeilijkste NP problemen efficiënt oplossen."
        }
      },
      {
        question: {
          en: "What is topological quantum computing and what advantages does it potentially offer?",
          es: "¿Qué es la computación cuántica topológica y qué ventajas ofrece potencialmente?",
          de: "Was ist topologisches Quantencomputing und welche Vorteile bietet es potentiell?",
          nl: "Wat is topologische quantum computing en welke voordelen biedt het potentieel?"
        },
        options: [
          {
            en: "A quantum computing approach using anyons and topological protection to create inherently fault-tolerant qubits resistant to local noise",
            es: "Un enfoque de computación cuántica usando anyones y protección topológica para crear qubits inherentemente tolerantes a fallas resistentes al ruido local",
            de: "Ein Quantencomputing-Ansatz, der Anyonen und topologischen Schutz nutzt, um inherent fehlertolerante Qubits zu schaffen, die gegen lokales Rauschen resistent sind",
            nl: "Een quantum computing benadering die anyonen en topologische bescherming gebruikt om inherent fouttolerant qubits te creëren die resistent zijn tegen lokale ruis"
          },
          {
            en: "A method to arrange quantum processors in optimal network topologies",
            es: "Un método para organizar procesadores cuánticos en topologías de red óptimas",
            de: "Eine Methode zur Anordnung von Quantenprozessoren in optimalen Netzwerktopologien",
            nl: "Een methode om quantumprocessors te arrangeren in optimale netwerktopologieën"
          },
          {
            en: "The study of quantum algorithms for solving topology problems in mathematics",
            es: "El estudio de algoritmos cuánticos para resolver problemas de topología en matemáticas",
            de: "Das Studium von Quantenalgorithmen zur Lösung von Topologie-Problemen in der Mathematik",
            nl: "De studie van quantumalgoritmes voor het oplossen van topologieproblemen in wiskunde"
          },
          {
            en: "A classical computing technique adapted for quantum systems",
            es: "Una técnica de computación clásica adaptada para sistemas cuánticos",
            de: "Eine klassische Computertechnik, die für Quantensysteme angepasst wurde",
            nl: "Een klassieke computertechniek aangepast voor quantumsystemen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Topological quantum computing uses exotic quasiparticles called anyons whose quantum states are protected by topological properties of the system. This topological protection makes the qubits inherently resistant to local perturbations that cause decoherence in other quantum computing approaches. Microsoft is pursuing this approach with their theoretical majorana fermion qubits, though experimental realization remains challenging. If achieved, it could provide naturally fault-tolerant quantum computation without extensive error correction.",
          es: "La computación cuántica topológica usa cuasipartículas exóticas llamadas anyones cuyos estados cuánticos están protegidos por propiedades topológicas del sistema. Esta protección topológica hace que los qubits sean inherentemente resistentes a perturbaciones locales que causan decoherencia en otros enfoques de computación cuántica. Microsoft está persiguiendo este enfoque con sus qubits teóricos de fermiones de Majorana, aunque la realización experimental permanece desafiante. Si se logra, podría proporcionar computación cuántica naturalmente tolerante a fallas sin corrección extensiva de errores.",
          de: "Topologisches Quantencomputing nutzt exotische Quasiteilchen namens Anyonen, deren Quantenzustände durch topologische Eigenschaften des Systems geschützt sind. Dieser topologische Schutz macht die Qubits inherent resistent gegen lokale Störungen, die Dekohärenz in anderen Quantencomputing-Ansätzen verursachen. Microsoft verfolgt diesen Ansatz mit ihren theoretischen Majorana-Fermion-Qubits, obwohl die experimentelle Realisierung herausfordernd bleibt. Falls erreicht, könnte es natürlich fehlertolerante Quantenberechnung ohne extensive Fehlerkorrektur bieten.",
          nl: "Topologische quantum computing gebruikt exotische quasideeltjes genaamd anyonen waarvan de quantumtoestanden beschermd zijn door topologische eigenschappen van het systeem. Deze topologische bescherming maakt de qubits inherent resistent tegen lokale verstoringen die decoherentie veroorzaken in andere quantum computing benaderingen. Microsoft streeft deze benadering na met hun theoretische majorana fermion qubits, hoewel experimentele realisatie uitdagend blijft. Indien bereikt, zou het natuurlijk fouttolerant quantum computing kunnen bieden zonder uitgebreide foutcorrectie."
        }
      },
      {
        question: {
          en: "What is quantum sensing and what advantages do quantum sensors offer over classical ones?",
          es: "¿Qué es la detección cuántica y qué ventajas ofrecen los sensores cuánticos sobre los clásicos?",
          de: "Was ist Quantensensing und welche Vorteile bieten Quantensensoren gegenüber klassischen?",
          nl: "Wat is quantum sensing en welke voordelen bieden quantumsensors ten opzichte van klassieke?"
        },
        options: [
          {
            en: "Using quantum properties like superposition and entanglement to achieve measurement precision beyond the standard quantum limit, approaching the Heisenberg limit",
            es: "Usar propiedades cuánticas como superposición y entrelazamiento para lograr precisión de medición más allá del límite cuántico estándar, acercándose al límite de Heisenberg",
            de: "Die Verwendung quantenmechanischer Eigenschaften wie Superposition und Verschränkung, um Messpräzision jenseits der Standard-Quantengrenze zu erreichen und sich dem Heisenberg-Limit zu nähern",
            nl: "Het gebruik van quantumeigenschappen zoals superpositie en verstrengeling om meetprecisie te bereiken voorbij de standaard quantumlimiet, naderend tot de Heisenberg limiet"
          },
          {
            en: "Sensors that can only operate at quantum scales and detect individual atoms",
            es: "Sensores que solo pueden operar a escalas cuánticas y detectar átomos individuales",
            de: "Sensoren, die nur auf Quantenskalen operieren und einzelne Atome erkennen können",
            nl: "Sensoren die alleen op quantumschaal kunnen opereren en individuele atomen detecteren"
          },
          {
            en: "Classical sensors miniaturized to quantum dimensions",
            es: "Sensores clásicos miniaturizados a dimensiones cuánticas",
            de: "Klassische Sensoren, die auf Quantendimensionen miniaturisiert sind",
            nl: "Klassieke sensoren geminituriseerd tot quantumdimensies"
          },
          {
            en: "Sensors used exclusively in quantum computing applications",
            es: "Sensores usados exclusivamente en aplicaciones de computación cuántica",
            de: "Sensoren, die ausschließlich in Quantencomputing-Anwendungen verwendet werden",
            nl: "Sensoren die uitsluitend gebruikt worden in quantum computing toepassingen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum sensing exploits quantum phenomena to enhance measurement sensitivity beyond what's possible with classical sensors. Key advantages include: approaching the Heisenberg limit (1/N scaling vs 1/√N), using entangled states for improved precision, and exploiting quantum interference effects. Applications include atomic clocks, gravitational wave detection (LIGO), magnetic field sensing for medical imaging, and detecting dark matter. Quantum sensors can achieve unprecedented precision in measuring time, acceleration, rotation, and electromagnetic fields.",
          es: "La detección cuántica explota fenómenos cuánticos para mejorar la sensibilidad de medición más allá de lo posible con sensores clásicos. Las ventajas clave incluyen: acercarse al límite de Heisenberg (escalado 1/N vs 1/√N), usar estados entrelazados para precisión mejorada, y explotar efectos de interferencia cuántica. Las aplicaciones incluyen relojes atómicos, detección de ondas gravitacionales (LIGO), detección de campo magnético para imagen médica, y detectar materia oscura. Los sensores cuánticos pueden lograr precisión sin precedentes midiendo tiempo, aceleración, rotación, y campos electromagnéticos.",
          de: "Quantensensing nutzt Quantenphänomene, um die Messempfindlichkeit über das mit klassischen Sensoren Mögliche hinaus zu steigern. Hauptvorteile umfassen: Annäherung an das Heisenberg-Limit (1/N-Skalierung vs 1/√N), Verwendung verschränkter Zustände für verbesserte Präzision und Ausnutzung von Quanteninterferenzeffekten. Anwendungen umfassen Atomuhren, Gravitationswellenerkennung (LIGO), Magnetfeldsensing für medizinische Bildgebung und Dunkle-Materie-Erkennung. Quantensensoren können beispiellose Präzision bei der Messung von Zeit, Beschleunigung, Rotation und elektromagnetischen Feldern erreichen.",
          nl: "Quantum sensing benut quantumfenomenen om meetgevoeligheid te verbeteren voorbij wat mogelijk is met klassieke sensoren. Belangrijke voordelen zijn: nadering tot de Heisenberg limiet (1/N schaling vs 1/√N), gebruik van verstrengelde toestanden voor verbeterde precisie, en exploitatie van quantum interferentie-effecten. Toepassingen omvatten atoomklokken, zwaartekrachtsgolf detectie (LIGO), magnetisch veld sensing voor medische beeldvorming, en donkere materie detectie. Quantum sensoren kunnen ongekende precisie bereiken bij het meten van tijd, versnelling, rotatie, en elektromagnetische velden."
        }
      },
      {
        question: {
          en: "What is quantum simulation and what types of problems can quantum simulators solve?",
          es: "¿Qué es la simulación cuántica y qué tipos de problemas pueden resolver los simuladores cuánticos?",
          de: "Was ist Quantensimulation und welche Arten von Problemen können Quantensimulatoren lösen?",
          nl: "Wat is quantum simulatie en welke soorten problemen kunnen quantumsimulatoren oplossen?"
        },
        options: [
          {
            en: "Using controllable quantum systems to study other quantum systems that are difficult to analyze classically, particularly many-body quantum physics problems",
            es: "Usar sistemas cuánticos controlables para estudiar otros sistemas cuánticos que son difíciles de analizar clásicamente, particularmente problemas de física cuántica de muchos cuerpos",
            de: "Die Verwendung kontrollierbarer Quantensysteme zur Untersuchung anderer Quantensysteme, die klassisch schwer zu analysieren sind, insbesondere Vielkörper-Quantenphysik-Probleme",
            nl: "Het gebruik van controleerbare quantumsystemen om andere quantumsystemen te bestuderen die moeilijk klassiek te analyseren zijn, met name veeldeeltjes quantum fysica problemen"
          },
          {
            en: "Running classical simulations of quantum computers on supercomputers",
            es: "Ejecutar simulaciones clásicas de computadoras cuánticas en supercomputadoras",
            de: "Das Ausführen klassischer Simulationen von Quantencomputern auf Supercomputern",
            nl: "Het uitvoeren van klassieke simulaties van quantumcomputers op supercomputers"
          },
          {
            en: "A programming environment for designing quantum algorithms",
            es: "Un entorno de programación para diseñar algoritmos cuánticos",
            de: "Eine Programmierumgebung für das Design von Quantenalgorithmen",
            nl: "Een programmeeromgeving voor het ontwerpen van quantumalgoritmes"
          },
          {
            en: "Virtual reality systems for visualizing quantum phenomena",
            es: "Sistemas de realidad virtual para visualizar fenómenos cuánticos",
            de: "Virtual-Reality-Systeme zur Visualisierung von Quantenphänomenen",
            nl: "Virtual reality systemen voor het visualiseren van quantumfenomenen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum simulation uses well-controlled quantum systems to study complex quantum phenomena that are intractable for classical computers. Applications include: studying high-temperature superconductivity mechanisms, understanding quantum phase transitions, modeling molecular dynamics for drug discovery, investigating exotic quantum states of matter, and exploring quantum many-body localization. Both analog quantum simulators (like trapped ion systems) and digital quantum simulators (gate-based) are being developed for these purposes.",
          es: "La simulación cuántica usa sistemas cuánticos bien controlados para estudiar fenómenos cuánticos complejos que son intratables para computadoras clásicas. Las aplicaciones incluyen: estudiar mecanismos de superconductividad de alta temperatura, entender transiciones de fase cuánticas, modelar dinámicas moleculares para descubrimiento de fármacos, investigar estados exóticos de materia cuántica, y explorar localización de muchos cuerpos cuánticos. Tanto simuladores cuánticos analógicos (como sistemas de iones atrapados) como simuladores cuánticos digitales (basados en puertas) se están desarrollando para estos propósitos.",
          de: "Quantensimulation nutzt gut kontrollierte Quantensysteme zur Untersuchung komplexer Quantenphänomene, die für klassische Computer unlösbar sind. Anwendungen umfassen: Untersuchung von Hochtemperatur-Supraleitungsmechanismen, Verständnis von Quantenphasenübergängen, Modellierung molekularer Dynamik für Arzneimittelentdeckung, Erforschung exotischer Quantenzustände der Materie und Untersuchung quantenmechanischer Vielkörper-Lokalisierung. Sowohl analoge Quantensimulatoren (wie gefangene Ionensysteme) als auch digitale Quantensimulatoren (gatterbasiert) werden für diese Zwecke entwickelt.",
          nl: "Quantum simulatie gebruikt goed gecontroleerde quantumsystemen om complexe quantumfenomenen te bestuderen die onhandelbaar zijn voor klassieke computers. Toepassingen omvatten: bestudering van hoge-temperatuur supergeleiding mechanismen, begrijpen van quantum faseovergangen, modelleren van moleculaire dynamica voor geneesmiddelenontdekking, onderzoeken van exotische quantum toestanden van materie, en verkennen van quantum veeldeeltjes lokalisatie. Zowel analoge quantum simulatoren (zoals gevangen ion systemen) als digitale quantum simulatoren (poort-gebaseerd) worden ontwikkeld voor deze doeleinden."
        }
      },
      {
        question: {
          en: "What is post-quantum cryptography and why is it being developed?",
          es: "¿Qué es la criptografía post-cuántica y por qué se está desarrollando?",
          de: "Was ist Post-Quanten-Kryptographie und warum wird sie entwickelt?",
          nl: "Wat is post-quantum cryptografie en waarom wordt het ontwikkeld?"
        },
        options: [
          {
            en: "Cryptographic algorithms designed to be secure against both classical and quantum computer attacks, preparing for the quantum computing era",
            es: "Algoritmos criptográficos diseñados para ser seguros contra ataques de computadoras tanto clásicas como cuánticas, preparándose para la era de la computación cuántica",
            de: "Kryptographische Algorithmen, die entwickelt wurden, um gegen sowohl klassische als auch Quantencomputer-Angriffe sicher zu sein, zur Vorbereitung auf die Quantencomputing-Ära",
            nl: "Cryptografische algoritmes ontworpen om veilig te zijn tegen zowel klassieke als quantumcomputer aanvallen, voorbereidend op het quantumcomputing tijdperk"
          },
          {
            en: "Cryptography methods used only after quantum computers are widely available",
            es: "Métodos de criptografía usados solo después de que las computadoras cuánticas estén ampliamente disponibles",
            de: "Kryptographiemethoden, die nur verwendet werden, nachdem Quantencomputer weit verbreitet sind",
            nl: "Cryptografie methoden die alleen gebruikt worden nadat quantumcomputers wijdverspreid beschikbaar zijn"
          },
          {
            en: "Quantum key distribution protocols for secure communication",
            es: "Protocolos de distribución de claves cuánticas para comunicación segura",
            de: "Quantenschlüsselverteilungsprotokolle für sichere Kommunikation",
            nl: "Quantum key distribution protocollen voor veilige communicatie"
          },
          {
            en: "Classical encryption enhanced by quantum random number generators",
            es: "Cifrado clásico mejorado por generadores de números aleatorios cuánticos",
            de: "Klassische Verschlüsselung verstärkt durch Quanten-Zufallszahlengeneratoren",
            nl: "Klassieke versleuteling verbeterd door quantum willekeurige nummergeneratoren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Post-quantum cryptography develops cryptographic algorithms that remain secure even against quantum computer attacks. Current public-key systems like RSA and elliptic curve cryptography are vulnerable to Shor's algorithm on sufficiently large quantum computers. Post-quantum approaches include lattice-based, hash-based, code-based, and multivariate cryptographic schemes. NIST has been standardizing post-quantum algorithms to ensure long-term security as quantum computing technology advances.",
          es: "La criptografía post-cuántica desarrolla algoritmos criptográficos que permanecen seguros incluso contra ataques de computadoras cuánticas. Los sistemas actuales de clave pública como RSA y criptografía de curva elíptica son vulnerables al algoritmo de Shor en computadoras cuánticas suficientemente grandes. Los enfoques post-cuánticos incluyen esquemas criptográficos basados en redes, hash, códigos y multivariables. NIST ha estado estandarizando algoritmos post-cuánticos para asegurar seguridad a largo plazo mientras avanza la tecnología de computación cuántica.",
          de: "Post-Quanten-Kryptographie entwickelt kryptographische Algorithmen, die auch gegen Quantencomputer-Angriffe sicher bleiben. Aktuelle Public-Key-Systeme wie RSA und elliptische Kurvenkryptographie sind anfällig für Shors Algorithmus auf ausreichend großen Quantencomputern. Post-Quanten-Ansätze umfassen gitter-, hash-, code- und multivariate kryptographische Schemata. NIST hat Post-Quanten-Algorithmen standardisiert, um langfristige Sicherheit zu gewährleisten, während die Quantencomputing-Technologie fortschreitet.",
          nl: "Post-quantum cryptografie ontwikkelt cryptografische algoritmes die veilig blijven zelfs tegen quantumcomputer aanvallen. Huidige publieke-sleutel systemen zoals RSA en elliptische curve cryptografie zijn kwetsbaar voor Shor's algoritme op voldoende grote quantumcomputers. Post-quantum benaderingen omvatten rooster-gebaseerde, hash-gebaseerde, code-gebaseerde, en multivariate cryptografische schema's. NIST heeft post-quantum algoritmes gestandaardiseerd om langetermijn veiligheid te waarborgen terwijl quantumcomputing technologie voortschrijdt."
        }
      },
      {
        question: {
          en: "What is coherence time in quantum systems and why is it crucial for quantum computing?",
          es: "¿Qué es el tiempo de coherencia en sistemas cuánticos y por qué es crucial para la computación cuántica?",
          de: "Was ist Kohärenzzeit in Quantensystemen und warum ist sie entscheidend für das Quantencomputing?",
          nl: "Wat is coherentie tijd in quantumsystemen en waarom is het cruciaal voor quantum computing?"
        },
        options: [
          {
            en: "The time duration over which a quantum system maintains its quantum properties before decoherence destroys superposition and entanglement",
            es: "La duración de tiempo durante la cual un sistema cuántico mantiene sus propiedades cuánticas antes de que la decoherencia destruya la superposición y el entrelazamiento",
            de: "Die Zeitdauer, über die ein Quantensystem seine Quanteneigenschaften beibehält, bevor Dekohärenz Superposition und Verschränkung zerstört",
            nl: "De tijdsduur waarin een quantumsysteem zijn quantumeigenschappen behoudt voordat decoherentie superpositie en verstrengeling vernietigt"
          },
          {
            en: "The synchronization time between different qubits in a quantum processor",
            es: "El tiempo de sincronización entre diferentes qubits en un procesador cuántico",
            de: "Die Synchronisationszeit zwischen verschiedenen Qubits in einem Quantenprozessor",
            nl: "De synchronisatietijd tussen verschillende qubits in een quantumprocessor"
          },
          {
            en: "The time required for a quantum computer to reach operating temperature",
            es: "El tiempo requerido para que una computadora cuántica alcance la temperatura operativa",
            de: "Die Zeit, die ein Quantencomputer benötigt, um die Betriebstemperatur zu erreichen",
            nl: "De tijd die een quantumcomputer nodig heeft om operationele temperatuur te bereiken"
          },
          {
            en: "The processing speed of quantum gates in a quantum circuit",
            es: "La velocidad de procesamiento de puertas cuánticas en un circuito cuántico",
            de: "Die Verarbeitungsgeschwindigkeit von Quantengattern in einer Quantenschaltung",
            nl: "De verwerkingssnelheid van quantumpoorten in een quantumcircuit"
          }
        ],
        correct: 0,
        explanation: {
          en: "Coherence time determines how long quantum information can be reliably stored and manipulated before environmental interactions cause decoherence. It sets the fundamental limit on computation time - quantum algorithms must complete within the coherence time to maintain their quantum advantage. Current quantum systems have coherence times ranging from microseconds to milliseconds, requiring fast quantum gates and efficient algorithms. Improving coherence time is essential for fault-tolerant quantum computing.",
          es: "El tiempo de coherencia determina cuánto tiempo la información cuántica puede ser almacenada y manipulada confiablemente antes de que las interacciones ambientales causen decoherencia. Establece el límite fundamental en el tiempo de computación - los algoritmos cuánticos deben completarse dentro del tiempo de coherencia para mantener su ventaja cuántica. Los sistemas cuánticos actuales tienen tiempos de coherencia que van de microsegundos a milisegundos, requiriendo puertas cuánticas rápidas y algoritmos eficientes. Mejorar el tiempo de coherencia es esencial para la computación cuántica tolerante a fallas.",
          de: "Kohärenzzeit bestimmt, wie lange Quanteninformation zuverlässig gespeichert und manipuliert werden kann, bevor Umgebungsinteraktionen Dekohärenz verursachen. Sie setzt die fundamentale Grenze für die Rechenzeit - Quantenalgorithmen müssen innerhalb der Kohärenzzeit abgeschlossen werden, um ihren Quantenvorteil zu behalten. Aktuelle Quantensysteme haben Kohärenzzeiten von Mikrosekunden bis Millisekunden und benötigen schnelle Quantengatter und effiziente Algorithmen. Die Verbesserung der Kohärenzzeit ist wesentlich für fehlertolerantes Quantencomputing.",
          nl: "Coherentie tijd bepaalt hoe lang quantuminformatie betrouwbaar opgeslagen en gemanipuleerd kan worden voordat omgevingsinteracties decoherentie veroorzaken. Het stelt de fundamentele limiet op computatietijd - quantumalgoritmes moeten voltooien binnen de coherentietijd om hun quantumvoordeel te behouden. Huidige quantumsystemen hebben coherentietijden variërend van microseconden tot milliseconden, wat snelle quantumpoorten en efficiënte algoritmes vereist. Het verbeteren van coherentietijd is essentieel voor fouttolerant quantum computing."
        }
      },
      {
        question: {
          en: "What is quantum volume and how is it used to measure quantum computer performance?",
          es: "¿Qué es el volumen cuántico y cómo se usa para medir el rendimiento de computadoras cuánticas?",
          de: "Was ist Quantenvolumen und wie wird es zur Messung der Quantencomputer-Leistung verwendet?",
          nl: "Wat is quantum volume en hoe wordt het gebruikt om quantumcomputer prestaties te meten?"
        },
        options: [
          {
            en: "A holistic metric considering both the number of qubits and their quality (gate fidelity, connectivity, coherence) to measure overall quantum computing capability",
            es: "Una métrica holística que considera tanto el número de qubits como su calidad (fidelidad de puerta, conectividad, coherencia) para medir la capacidad general de computación cuántica",
            de: "Eine holistische Metrik, die sowohl die Anzahl der Qubits als auch ihre Qualität (Gatter-Fidelity, Konnektivität, Kohärenz) berücksichtigt, um die Gesamt-Quantencomputing-Fähigkeit zu messen",
            nl: "Een holistische metriek die zowel het aantal qubits als hun kwaliteit (poort betrouwbaarheid, connectiviteit, coherentie) overweegt om algemene quantum computing capaciteit te meten"
          },
          {
            en: "Simply the total number of qubits in a quantum processor",
            es: "Simplemente el número total de qubits en un procesador cuántico",
            de: "Einfach die Gesamtanzahl der Qubits in einem Quantenprozessor",
            nl: "Gewoon het totale aantal qubits in een quantumprocessor"
          },
          {
            en: "The physical size of the quantum computer hardware",
            es: "El tamaño físico del hardware de la computadora cuántica",
            de: "Die physische Größe der Quantencomputer-Hardware",
            nl: "De fysieke grootte van de quantumcomputer hardware"
          },
          {
            en: "The amount of classical memory needed to simulate the quantum system",
            es: "La cantidad de memoria clásica necesaria para simular el sistema cuántico",
            de: "Die Menge an klassischem Speicher, die zur Simulation des Quantensystems benötigt wird",
            nl: "De hoeveelheid klassiek geheugen nodig om het quantumsysteem te simuleren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum volume, introduced by IBM, is a comprehensive benchmark that accounts for both the number of qubits and the quality of quantum operations. It considers factors like gate fidelity, circuit depth, connectivity between qubits, and measurement accuracy. The metric is calculated as 2^n where n is the maximum number of qubits that can be used effectively for a specific random quantum circuit benchmark. This provides a more realistic assessment of quantum computing progress than simply counting qubits.",
          es: "El volumen cuántico, introducido por IBM, es un benchmark integral que considera tanto el número de qubits como la calidad de las operaciones cuánticas. Considera factores como fidelidad de puerta, profundidad de circuito, conectividad entre qubits, y precisión de medición. La métrica se calcula como 2^n donde n es el número máximo de qubits que pueden usarse efectivamente para un benchmark específico de circuito cuántico aleatorio. Esto proporciona una evaluación más realista del progreso de computación cuántica que simplemente contar qubits.",
          de: "Quantenvolumen, eingeführt von IBM, ist ein umfassender Benchmark, der sowohl die Anzahl der Qubits als auch die Qualität der Quantenoperationen berücksichtigt. Es berücksichtigt Faktoren wie Gatter-Fidelity, Schaltungstiefe, Konnektivität zwischen Qubits und Messgenauigkeit. Die Metrik wird als 2^n berechnet, wobei n die maximale Anzahl von Qubits ist, die effektiv für einen spezifischen zufälligen Quantenschaltungs-Benchmark verwendet werden können. Dies bietet eine realistischere Bewertung des Quantencomputing-Fortschritts als einfaches Qubit-Zählen.",
          nl: "Quantum volume, geïntroduceerd door IBM, is een uitgebreide benchmark die zowel het aantal qubits als de kwaliteit van quantumoperaties overweegt. Het beschouwt factoren zoals poort betrouwbaarheid, circuit diepte, connectiviteit tussen qubits, en meetnauwkeurigheid. De metriek wordt berekend als 2^n waarbij n het maximale aantal qubits is dat effectief gebruikt kan worden voor een specifieke willekeurige quantumcircuit benchmark. Dit biedt een realistischere beoordeling van quantum computing vooruitgang dan simpelweg qubits tellen."
        }
      },
      {
        question: {
          en: "What is the quantum Fourier transform (QFT) and why is it important for quantum algorithms?",
          es: "¿Qué es la transformada de Fourier cuántica (QFT) y por qué es importante para los algoritmos cuánticos?",
          de: "Was ist die Quanten-Fourier-Transformation (QFT) und warum ist sie wichtig für Quantenalgorithmen?",
          nl: "Wat is de quantum Fourier transform (QFT) en waarom is het belangrijk voor quantumalgoritmes?"
        },
        options: [
          {
            en: "A quantum analog of the discrete Fourier transform that can be computed exponentially faster than classical methods, essential for period-finding algorithms",
            es: "Un análogo cuántico de la transformada discreta de Fourier que puede computarse exponencialmente más rápido que métodos clásicos, esencial para algoritmos de encontrar períodos",
            de: "Ein Quantenanalogon der diskreten Fourier-Transformation, das exponentiell schneller als klassische Methoden berechnet werden kann, wesentlich für Periodenfindungs-Algorithmen",
            nl: "Een quantumanaloog van de discrete Fourier transform die exponentieel sneller berekend kan worden dan klassieke methoden, essentieel voor periode-vindende algoritmes"
          },
          {
            en: "A classical algorithm adapted for quantum computers without any speedup",
            es: "Un algoritmo clásico adaptado para computadoras cuánticas sin aceleración",
            de: "Ein klassischer Algorithmus, der für Quantencomputer ohne Beschleunigung angepasst wurde",
            nl: "Een klassiek algoritme aangepast voor quantumcomputers zonder versnelling"
          },
          {
            en: "A method to convert quantum states into classical Fourier series",
            es: "Un método para convertir estados cuánticos en series de Fourier clásicas",
            de: "Eine Methode zur Umwandlung von Quantenzuständen in klassische Fourier-Reihen",
            nl: "Een methode om quantumtoestanden om te zetten in klassieke Fourier reeksen"
          },
          {
            en: "A quantum error correction technique based on frequency analysis",
            es: "Una técnica de corrección de errores cuánticos basada en análisis de frecuencia",
            de: "Eine Quantenfehlerkorrektur-Technik basierend auf Frequenzanalyse",
            nl: "Een quantum foutcorrectie techniek gebaseerd op frequentieanalyse"
          }
        ],
        correct: 0,
        explanation: {
          en: "The quantum Fourier transform is a quantum circuit that performs the discrete Fourier transform on quantum amplitudes. While the classical FFT requires O(N log N) operations, the QFT can be implemented with O(log² N) quantum gates. The QFT is fundamental to many quantum algorithms, including Shor's factoring algorithm, quantum phase estimation, and various quantum chemistry algorithms. It enables quantum computers to efficiently extract periodic information from quantum states.",
          es: "La transformada de Fourier cuántica es un circuito cuántico que realiza la transformada discreta de Fourier en amplitudes cuánticas. Mientras la FFT clásica requiere O(N log N) operaciones, la QFT puede implementarse con O(log² N) puertas cuánticas. La QFT es fundamental para muchos algoritmos cuánticos, incluyendo el algoritmo de factorización de Shor, estimación de fase cuántica, y varios algoritmos de química cuántica. Permite que las computadoras cuánticas extraigan eficientemente información periódica de estados cuánticos.",
          de: "Die Quanten-Fourier-Transformation ist eine Quantenschaltung, die die diskrete Fourier-Transformation auf Quantenamplituden durchführt. Während die klassische FFT O(N log N) Operationen erfordert, kann die QFT mit O(log² N) Quantengattern implementiert werden. Die QFT ist fundamental für viele Quantenalgorithmen, einschließlich Shors Faktorisierungsalgorithmus, Quantenphasenschätzung und verschiedene Quantenchemie-Algorithmen. Sie ermöglicht es Quantencomputern, periodische Informationen aus Quantenzuständen effizient zu extrahieren.",
          nl: "De quantum Fourier transform is een quantumcircuit dat de discrete Fourier transform uitvoert op quantum amplitudes. Terwijl de klassieke FFT O(N log N) operaties vereist, kan de QFT geïmplementeerd worden met O(log² N) quantumpoorten. De QFT is fundamenteel voor veel quantumalgoritmes, inclusief Shor's factorisatiealgoritme, quantum fase schatting, en verschillende quantumchemie algoritmes. Het stelt quantumcomputers in staat om efficiënt periodieke informatie te extraheren uit quantumtoestanden."
        }
      },
      {
        question: {
          en: "What is the concept of quantum error correction codes and how do they protect quantum information?",
          es: "¿Qué es el concepto de códigos de corrección de errores cuánticos y cómo protegen la información cuántica?",
          de: "Was ist das Konzept der Quantenfehlerkorrekturcodes und wie schützen sie Quanteninformationen?",
          nl: "Wat is het concept van quantum foutcorrectiecodes en hoe beschermen ze quantuminformatie?"
        },
        options: [
          {
            en: "Schemes that encode logical qubits across multiple physical qubits with redundancy, allowing detection and correction of errors without directly measuring the quantum state",
            es: "Esquemas que codifican qubits lógicos a través de múltiples qubits físicos con redundancia, permitiendo detección y corrección de errores sin medir directamente el estado cuántico",
            de: "Schemata, die logische Qubits über mehrere physische Qubits mit Redundanz kodieren und die Erkennung und Korrektur von Fehlern ermöglichen, ohne den Quantenzustand direkt zu messen",
            nl: "Schema's die logische qubits coderen over meerdere fysieke qubits met redundantie, waardoor detectie en correctie van fouten mogelijk is zonder direct de quantumtoestand te meten"
          },
          {
            en: "Classical error correction methods directly applied to quantum systems",
            es: "Métodos de corrección de errores clásicos aplicados directamente a sistemas cuánticos",
            de: "Klassische Fehlerkorrekturmethoden, die direkt auf Quantensysteme angewendet werden",
            nl: "Klassieke foutcorrectie methoden direct toegepast op quantumsystemen"
          },
          {
            en: "Backup systems that store copies of quantum information",
            es: "Sistemas de respaldo que almacenan copias de información cuántica",
            de: "Backup-Systeme, die Kopien von Quanteninformationen speichern",
            nl: "Backup systemen die kopieën van quantuminformatie opslaan"
          },
          {
            en: "Methods to prevent decoherence by isolating quantum systems",
            es: "Métodos para prevenir decoherencia aislando sistemas cuánticos",
            de: "Methoden zur Verhinderung von Dekohärenz durch Isolierung von Quantensystemen",
            nl: "Methoden om decoherentie te voorkomen door quantumsystemen te isoleren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum error correction codes cleverly encode a single logical qubit across multiple physical qubits in such a way that errors can be detected and corrected without directly measuring (and thus destroying) the quantum state. They rely on measuring syndrome qubits that reveal error information without revealing the actual quantum information. Famous examples include the Shor code (9 qubits), Steane code (7 qubits), and surface codes. These codes are essential for fault-tolerant quantum computing.",
          es: "Los códigos de corrección de errores cuánticos codifican inteligentemente un solo qubit lógico a través de múltiples qubits físicos de tal manera que los errores pueden detectarse y corregirse sin medir directamente (y por lo tanto destruir) el estado cuántico. Se basan en medir qubits de síndrome que revelan información de error sin revelar la información cuántica real. Ejemplos famosos incluyen el código de Shor (9 qubits), código de Steane (7 qubits), y códigos de superficie. Estos códigos son esenciales para la computación cuántica tolerante a fallas.",
          de: "Quantenfehlerkorrekturcodes kodieren geschickt ein einzelnes logisches Qubit über mehrere physische Qubits so, dass Fehler erkannt und korrigiert werden können, ohne den Quantenzustand direkt zu messen (und damit zu zerstören). Sie basieren auf der Messung von Syndrom-Qubits, die Fehlerinformationen preisgeben, ohne die tatsächliche Quanteninformation preiszugeben. Berühmte Beispiele umfassen den Shor-Code (9 Qubits), Steane-Code (7 Qubits) und Surface-Codes. Diese Codes sind wesentlich für fehlertolerantes Quantencomputing.",
          nl: "Quantum foutcorrectiecodes coderen slim een enkele logische qubit over meerdere fysieke qubits zodanig dat fouten gedetecteerd en gecorrigeerd kunnen worden zonder direct de quantumtoestand te meten (en dus te vernietigen). Ze baseren zich op het meten van syndroom qubits die foutinformatie onthullen zonder de werkelijke quantuminformatie prijs te geven. Beroemde voorbeelden zijn de Shor code (9 qubits), Steane code (7 qubits), en oppervlakte codes. Deze codes zijn essentieel voor fouttolerant quantum computing."
        }
      },
      {
        question: {
          en: "What is adiabatic quantum computing and how does it relate to the quantum adiabatic theorem?",
          es: "¿Qué es la computación cuántica adiabática y cómo se relaciona con el teorema adiabático cuántico?",
          de: "Was ist adiabatisches Quantencomputing und wie bezieht es sich auf das quantenmechanische adiabatische Theorem?",
          nl: "Wat is adiabatische quantum computing en hoe relateert het aan de quantum adiabatische stelling?"
        },
        options: [
          {
            en: "A computing paradigm that slowly evolves a quantum system from an easy initial Hamiltonian to a problem Hamiltonian, guaranteed to find the ground state if evolution is sufficiently slow",
            es: "Un paradigma de computación que evoluciona lentamente un sistema cuántico desde un Hamiltoniano inicial fácil a un Hamiltoniano problemático, garantizado para encontrar el estado fundamental si la evolución es suficientemente lenta",
            de: "Ein Rechnenparadigma, das ein Quantensystem langsam von einem einfachen Anfangs-Hamiltonian zu einem Problem-Hamiltonian evolviert, garantiert den Grundzustand zu finden, wenn die Evolution ausreichend langsam ist",
            nl: "Een computing paradigma dat langzaam een quantumsysteem evolueert van een makkelijke initiële Hamiltoniaan naar een probleem Hamiltoniaan, gegarandeerd de grondtoestand te vinden als evolutie voldoende langzaam is"
          },
          {
            en: "A quantum algorithm that operates only at absolute zero temperature",
            es: "Un algoritmo cuántico que opera solo a temperatura de cero absoluto",
            de: "Ein Quantenalgorithmus, der nur bei absoluter Nulltemperatur funktioniert",
            nl: "Een quantumalgoritme dat alleen werkt bij absolute nul temperatuur"
          },
          {
            en: "A method to prevent quantum decoherence through thermal isolation",
            es: "Un método para prevenir decoherencia cuántica a través de aislamiento térmico",
            de: "Eine Methode zur Verhinderung von Quantendekohärenz durch thermische Isolierung",
            nl: "Een methode om quantum decoherentie te voorkomen door thermische isolatie"
          },
          {
            en: "A classical optimization technique adapted for quantum problems",
            es: "Una técnica de optimización clásica adaptada para problemas cuánticos",
            de: "Eine klassische Optimierungstechnik, die für Quantenprobleme angepasst wurde",
            nl: "Een klassieke optimalisatietechniek aangepast voor quantumproblemen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Adiabatic quantum computing is based on the quantum adiabatic theorem, which states that a quantum system will remain in its ground state if the Hamiltonian changes sufficiently slowly. The computation starts with a simple Hamiltonian whose ground state is easy to prepare, then gradually transforms it into a problem Hamiltonian whose ground state encodes the solution. This approach is equivalent in computational power to the standard gate model and is used by companies like D-Wave for solving optimization problems.",
          es: "La computación cuántica adiabática se basa en el teorema adiabático cuántico, que establece que un sistema cuántico permanecerá en su estado fundamental si el Hamiltoniano cambia suficientemente lento. La computación comienza con un Hamiltoniano simple cuyo estado fundamental es fácil de preparar, luego gradualmente lo transforma en un Hamiltoniano problemático cuyo estado fundamental codifica la solución. Este enfoque es equivalente en poder computacional al modelo de puertas estándar y es usado por compañías como D-Wave para resolver problemas de optimización.",
          de: "Adiabatisches Quantencomputing basiert auf dem quantenmechanischen adiabatischen Theorem, das besagt, dass ein Quantensystem in seinem Grundzustand bleibt, wenn sich der Hamiltonian ausreichend langsam ändert. Die Berechnung beginnt mit einem einfachen Hamiltonian, dessen Grundzustand leicht zu präparieren ist, und transformiert ihn dann allmählich in einen Problem-Hamiltonian, dessen Grundzustand die Lösung kodiert. Dieser Ansatz ist rechnerisch äquivalent zum Standard-Gatter-Modell und wird von Unternehmen wie D-Wave für die Lösung von Optimierungsproblemen verwendet.",
          nl: "Adiabatische quantum computing is gebaseerd op de quantum adiabatische stelling, die stelt dat een quantumsysteem in zijn grondtoestand zal blijven als de Hamiltoniaan voldoende langzaam verandert. De berekening begint met een eenvoudige Hamiltoniaan waarvan de grondtoestand makkelijk voor te bereiden is, en transformeert deze geleidelijk naar een probleem Hamiltoniaan waarvan de grondtoestand de oplossing codeert. Deze benadering is equivalent in computationele kracht aan het standaard poort model en wordt gebruikt door bedrijven zoals D-Wave voor het oplossen van optimalisatieproblemen."
        }
      },
      {
        question: {
          en: "What is the quantum internet and what capabilities would it enable?",
          es: "¿Qué es el internet cuántico y qué capacidades habilitaría?",
          de: "Was ist das Quanteninternet und welche Fähigkeiten würde es ermöglichen?",
          nl: "Wat is het quantum internet en welke capaciteiten zou het mogelijk maken?"
        },
        options: [
          {
            en: "A network of quantum computers connected by quantum communication links, enabling distributed quantum computing, ultra-secure communication, and quantum sensing networks",
            es: "Una red de computadoras cuánticas conectadas por enlaces de comunicación cuántica, habilitando computación cuántica distribuida, comunicación ultra-segura, y redes de detección cuántica",
            de: "Ein Netzwerk von Quantencomputern, verbunden durch Quantenkommunikationsverbindungen, das verteiltes Quantencomputing, ultra-sichere Kommunikation und Quantensensing-Netzwerke ermöglicht",
            nl: "Een netwerk van quantumcomputers verbonden door quantumcommunicatie verbindingen, wat gedistribueerde quantum computing, ultra-veilige communicatie, en quantum sensing netwerken mogelijk maakt"
          },
          {
            en: "A faster version of the classical internet using quantum effects",
            es: "Una versión más rápida del internet clásico usando efectos cuánticos",
            de: "Eine schnellere Version des klassischen Internets unter Verwendung von Quanteneffekten",
            nl: "Een snellere versie van het klassieke internet met quantumeffecten"
          },
          {
            en: "An internet that can only be accessed by quantum computers",
            es: "Un internet que solo puede ser accedido por computadoras cuánticas",
            de: "Ein Internet, auf das nur von Quantencomputern zugegriffen werden kann",
            nl: "Een internet dat alleen toegankelijk is voor quantumcomputers"
          },
          {
            en: "A theoretical concept with no practical applications",
            es: "Un concepto teórico sin aplicaciones prácticas",
            de: "Ein theoretisches Konzept ohne praktische Anwendungen",
            nl: "Een theoretisch concept zonder praktische toepassingen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The quantum internet would be a network infrastructure connecting quantum devices through quantum communication channels. It would enable: distributed quantum computing across multiple processors, unconditionally secure quantum key distribution, enhanced sensing through entangled sensor networks, quantum cloud computing access, and new protocols impossible with classical networks. Current research focuses on quantum repeaters, quantum memories, and quantum network protocols to make this vision reality.",
          es: "El internet cuántico sería una infraestructura de red conectando dispositivos cuánticos a través de canales de comunicación cuántica. Habilitaría: computación cuántica distribuida a través de múltiples procesadores, distribución de clave cuántica incondicionalmente segura, detección mejorada a través de redes de sensores entrelazados, acceso a computación cuántica en la nube, y nuevos protocolos imposibles con redes clásicas. La investigación actual se enfoca en repetidores cuánticos, memorias cuánticas, y protocolos de red cuántica para hacer esta visión realidad.",
          de: "Das Quanteninternet wäre eine Netzwerkinfrastruktur, die Quantengeräte durch Quantenkommunikationskanäle verbindet. Es würde ermöglichen: verteiltes Quantencomputing über mehrere Prozessoren, unbedingt sichere Quantenschlüsselverteilung, erweiterte Erfassung durch verschränkte Sensornetzwerke, Quantum-Cloud-Computing-Zugang und neue Protokolle, die mit klassischen Netzwerken unmöglich sind. Aktuelle Forschung konzentriert sich auf Quantenrepeater, Quantenspeicher und Quantennetzwerkprotokolle, um diese Vision Realität werden zu lassen.",
          nl: "Het quantum internet zou een netwerkinfrastructuur zijn die quantumapparaten verbindt door quantumcommunicatie kanalen. Het zou mogelijk maken: gedistribueerde quantum computing over meerdere processors, onvoorwaardelijk veilige quantum key distribution, verbeterde sensing door verstrengelde sensor netwerken, quantum cloud computing toegang, en nieuwe protocollen onmogelijk met klassieke netwerken. Huidig onderzoek focust op quantum repeaters, quantum geheugens, en quantum netwerkprotocollen om deze visie werkelijkheid te maken."
        }
      },
      {
        question: {
          en: "What is quantum volume and why is it important for benchmarking quantum computers?",
          es: "¿Qué es el volumen cuántico y por qué es importante para evaluar computadoras cuánticas?",
          de: "Was ist Quantenvolumen und warum ist es wichtig für das Benchmarking von Quantencomputern?",
          nl: "Wat is quantumvolume en waarom is het belangrijk voor het benchmarken van quantumcomputers?"
        },
        options: [
          {
            en: "A single metric combining the number of qubits and gate fidelity that measures the largest random circuit a quantum computer can successfully execute",
            es: "Una métrica única que combina el número de qubits y fidelidad de puertas que mide el circuito aleatorio más grande que una computadora cuántica puede ejecutar exitosamente",
            de: "Eine einzelne Metrik, die die Anzahl der Qubits und Gate-Treue kombiniert und das größte zufällige Schaltkreis misst, das ein Quantencomputer erfolgreich ausführen kann",
            nl: "Een enkele metriek die het aantal qubits en poort betrouwbaarheid combineert dat het grootste willekeurige circuit meet dat een quantumcomputer succesvol kan uitvoeren"
          },
          {
            en: "The physical volume of space required to house a quantum computer",
            es: "El volumen físico de espacio requerido para albergar una computadora cuántica",
            de: "Das physische Raumvolumen, das für einen Quantencomputer benötigt wird",
            nl: "Het fysieke volume van ruimte vereist om een quantumcomputer te huisvesten"
          },
          {
            en: "The total number of quantum gates that can be stored in quantum memory",
            es: "El número total de puertas cuánticas que pueden almacenarse en memoria cuántica",
            de: "Die Gesamtzahl der Quantengatter, die im Quantenspeicher gespeichert werden können",
            nl: "Het totale aantal quantumpoorten dat opgeslagen kan worden in quantumgeheugen"
          },
          {
            en: "A measure of quantum entanglement strength in multi-qubit systems",
            es: "Una medida de la fuerza de entrelazamiento cuántico en sistemas multi-qubit",
            de: "Ein Maß für die Quantenverschränkungsstärke in Multi-Qubit-Systemen",
            nl: "Een meting van quantum verstrengeling sterkte in multi-qubit systemen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum volume is a hardware-agnostic metric that measures the capability of quantum computers by considering both the number of qubits and their quality. It's defined as the largest square quantum circuit (width = depth) that can be executed with greater than 2/3 success probability. This benchmark tests error rates, connectivity, gate fidelity, and measurement quality simultaneously, making it a comprehensive measure of quantum computer performance.",
          es: "El volumen cuántico es una métrica agnóstica al hardware que mide la capacidad de computadoras cuánticas considerando tanto el número de qubits como su calidad. Se define como el circuito cuántico cuadrado más grande (ancho = profundidad) que puede ejecutarse con probabilidad de éxito mayor a 2/3. Esta prueba de referencia evalúa tasas de error, conectividad, fidelidad de puertas y calidad de medición simultáneamente, haciéndola una medida integral del rendimiento de computadoras cuánticas.",
          de: "Quantenvolumen ist eine hardware-agnostische Metrik, die die Fähigkeit von Quantencomputern misst, indem sie sowohl die Anzahl der Qubits als auch ihre Qualität berücksichtigt. Es ist definiert als der größte quadratische Quantenschaltkreis (Breite = Tiefe), der mit einer Erfolgswahrscheinlichkeit von mehr als 2/3 ausgeführt werden kann. Dieser Benchmark testet Fehlerquoten, Konnektivität, Gate-Treue und Messqualität gleichzeitig und macht es zu einem umfassenden Maß für die Leistung von Quantencomputern.",
          nl: "Quantumvolume is een hardware-agnostische metriek die de capaciteit van quantumcomputers meet door zowel het aantal qubits als hun kwaliteit te beschouwen. Het is gedefinieerd als het grootste vierkante quantumcircuit (breedte = diepte) dat uitgevoerd kan worden met meer dan 2/3 succeswaarschijnlijkheid. Deze benchmark test foutpercentages, connectiviteit, poort betrouwbaarheid en meetkwaliteit tegelijkertijd, wat het een uitgebreide meting van quantumcomputer prestatie maakt."
        }
      },
      {
        question: {
          en: "What is the quantum approximate optimization algorithm (QAOA) and what problems does it address?",
          es: "¿Qué es el algoritmo de optimización aproximada cuántica (QAOA) y qué problemas aborda?",
          de: "Was ist der Quantenapproximations-Optimierungsalgorithmus (QAOA) und welche Probleme löst er?",
          nl: "Wat is het quantum approximate optimization algorithm (QAOA) en welke problemen pakt het aan?"
        },
        options: [
          {
            en: "A variational quantum algorithm designed to find approximate solutions to combinatorial optimization problems by alternating between problem and mixing Hamiltonians",
            es: "Un algoritmo cuántico variacional diseñado para encontrar soluciones aproximadas a problemas de optimización combinatoria alternando entre Hamiltonianos de problema y mezcla",
            de: "Ein variationaler Quantenalgorithmus, der darauf ausgelegt ist, ungefähre Lösungen für kombinatorische Optimierungsprobleme zu finden, indem zwischen Problem- und Misch-Hamiltonians alterniert wird",
            nl: "Een variationeel quantumalgoritme ontworpen om benaderde oplossingen te vinden voor combinatorische optimalisatieproblemen door af te wisselen tussen probleem en mengsel Hamiltonianen"
          },
          {
            en: "A classical optimization method adapted for quantum hardware",
            es: "Un método de optimización clásico adaptado para hardware cuántico",
            de: "Eine klassische Optimierungsmethode, die für Quantenhardware angepasst wurde",
            nl: "Een klassieke optimalisatiemethode aangepast voor quantumhardware"
          },
          {
            en: "An algorithm for exactly solving NP-complete problems on quantum computers",
            es: "Un algoritmo para resolver exactamente problemas NP-completos en computadoras cuánticas",
            de: "Ein Algorithmus zur exakten Lösung NP-vollständiger Probleme auf Quantencomputern",
            nl: "Een algoritme voor het exact oplossen van NP-complete problemen op quantumcomputers"
          },
          {
            en: "A quantum machine learning algorithm for approximate pattern recognition",
            es: "Un algoritmo de aprendizaje automático cuántico para reconocimiento aproximado de patrones",
            de: "Ein Quantum-Machine-Learning-Algorithmus für ungefähre Mustererkennung",
            nl: "Een quantum machine learning algoritme voor benaderde patroonherkenning"
          }
        ],
        correct: 0,
        explanation: {
          en: "QAOA is a hybrid quantum-classical algorithm that tackles combinatorial optimization problems like MaxCut, traveling salesman, and portfolio optimization. It uses a parameterized quantum circuit with alternating layers of problem Hamiltonian (encoding the cost function) and mixing Hamiltonian (creating superposition). Classical optimization adjusts the parameters to minimize the expected energy, providing approximate solutions that may outperform classical methods for certain problem instances.",
          es: "QAOA es un algoritmo híbrido cuántico-clásico que aborda problemas de optimización combinatoria como MaxCut, vendedor viajero y optimización de cartera. Usa un circuito cuántico parametrizado con capas alternantes de Hamiltoniano de problema (codificando la función de costo) y Hamiltoniano de mezcla (creando superposición). La optimización clásica ajusta los parámetros para minimizar la energía esperada, proporcionando soluciones aproximadas que pueden superar métodos clásicos para ciertas instancias de problema.",
          de: "QAOA ist ein hybrider Quanten-klassischer Algorithmus, der kombinatorische Optimierungsprobleme wie MaxCut, Handlungsreisender und Portfolio-Optimierung angeht. Er verwendet eine parametrisierte Quantenschaltung mit alternierenden Schichten von Problem-Hamiltonian (Kodierung der Kostenfunktion) und Misch-Hamiltonian (Erzeugung von Superposition). Klassische Optimierung passt die Parameter an, um die erwartete Energie zu minimieren und liefert ungefähre Lösungen, die für bestimmte Probleminstanzen klassische Methoden übertreffen können.",
          nl: "QAOA is een hybride quantum-klassiek algoritme dat combinatorische optimalisatieproblemen aanpakt zoals MaxCut, handelsreiziger, en portfolio optimalisatie. Het gebruikt een geparametriseerd quantumcircuit met afwisselende lagen van probleem Hamiltoniaan (die de kostfunctie codeert) en mengsel Hamiltoniaan (die superpositie creëert). Klassieke optimalisatie past de parameters aan om de verwachte energie te minimaliseren, wat benaderde oplossingen levert die klassieke methoden kunnen overtreffen voor bepaalde probleeminstanties."
        }
      },
      {
        question: {
          en: "What is the difference between gate-based and annealing-based quantum computing approaches?",
          es: "¿Cuál es la diferencia entre enfoques de computación cuántica basados en puertas y basados en recocido?",
          de: "Was ist der Unterschied zwischen Gate-basierten und Annealing-basierten Quantencomputing-Ansätzen?",
          nl: "Wat is het verschil tussen poort-gebaseerde en annealing-gebaseerde quantum computing benaderingen?"
        },
        options: [
          {
            en: "Gate-based uses discrete quantum operations on qubits to build algorithms, while annealing-based evolves a quantum system to find optimal solutions to optimization problems",
            es: "Basado en puertas usa operaciones cuánticas discretas en qubits para construir algoritmos, mientras que basado en recocido evoluciona un sistema cuántico para encontrar soluciones óptimas a problemas de optimización",
            de: "Gate-basiert verwendet diskrete Quantenoperationen auf Qubits zum Aufbau von Algorithmen, während Annealing-basiert ein Quantensystem evolviert, um optimale Lösungen für Optimierungsprobleme zu finden",
            nl: "Poort-gebaseerd gebruikt discrete quantumoperaties op qubits om algoritmes te bouwen, terwijl annealing-gebaseerd een quantumsysteem evolueert om optimale oplossingen voor optimalisatieproblemen te vinden"
          },
          {
            en: "Gate-based operates at room temperature while annealing-based requires absolute zero",
            es: "Basado en puertas opera a temperatura ambiente mientras que basado en recocido requiere cero absoluto",
            de: "Gate-basiert arbeitet bei Raumtemperatur, während Annealing-basiert absoluten Nullpunkt erfordert",
            nl: "Poort-gebaseerd werkt bij kamertemperatuur terwijl annealing-gebaseerd absolute nul vereist"
          },
          {
            en: "Gate-based is classical computing while annealing-based is quantum computing",
            es: "Basado en puertas es computación clásica mientras que basado en recocido es computación cuántica",
            de: "Gate-basiert ist klassisches Computing, während Annealing-basiert Quantencomputing ist",
            nl: "Poort-gebaseerd is klassieke computing terwijl annealing-gebaseerd quantum computing is"
          },
          {
            en: "Gate-based uses analog signals while annealing-based uses digital signals",
            es: "Basado en puertas usa señales analógicas mientras que basado en recocido usa señales digitales",
            de: "Gate-basiert verwendet analoge Signale, während Annealing-basiert digitale Signale verwendet",
            nl: "Poort-gebaseerd gebruikt analoge signalen terwijl annealing-gebaseerd digitale signalen gebruikt"
          }
        ],
        correct: 0,
        explanation: {
          en: "Gate-based quantum computing uses discrete quantum gates (like Pauli-X, CNOT, Hadamard) applied to qubits to create quantum circuits that implement algorithms like Shor's or Grover's. It's universal and can run any quantum algorithm. Annealing-based computing (like D-Wave systems) uses quantum annealing to find ground states of optimization problems by slowly evolving from a simple to complex Hamiltonian. It's specialized for optimization but not universal.",
          es: "La computación cuántica basada en puertas usa puertas cuánticas discretas (como Pauli-X, CNOT, Hadamard) aplicadas a qubits para crear circuitos cuánticos que implementan algoritmos como los de Shor o Grover. Es universal y puede ejecutar cualquier algoritmo cuántico. La computación basada en recocido (como sistemas D-Wave) usa recocido cuántico para encontrar estados fundamentales de problemas de optimización evolucionando lentamente desde un Hamiltoniano simple a complejo. Está especializada para optimización pero no es universal.",
          de: "Gate-basiertes Quantencomputing verwendet diskrete Quantengatter (wie Pauli-X, CNOT, Hadamard), die auf Qubits angewendet werden, um Quantenschaltkreise zu erstellen, die Algorithmen wie Shor's oder Grover's implementieren. Es ist universell und kann jeden Quantenalgorithmus ausführen. Annealing-basiertes Computing (wie D-Wave-Systeme) verwendet Quantenannealing, um Grundzustände von Optimierungsproblemen zu finden, indem langsam von einem einfachen zu einem komplexen Hamiltonian evolviert wird. Es ist spezialisiert für Optimierung, aber nicht universell.",
          nl: "Poort-gebaseerde quantum computing gebruikt discrete quantumpoorten (zoals Pauli-X, CNOT, Hadamard) toegepast op qubits om quantumcircuits te creëren die algoritmes implementeren zoals die van Shor of Grover. Het is universeel en kan elk quantumalgoritme uitvoeren. Annealing-gebaseerde computing (zoals D-Wave systemen) gebruikt quantum annealing om grondtoestanden van optimalisatieproblemen te vinden door langzaam te evolueren van een eenvoudige naar complexe Hamiltoniaan. Het is gespecialiseerd voor optimalisatie maar niet universeel."
        }
      },
      {
        question: {
          en: "What is quantum machine learning and how does it potentially offer advantages over classical machine learning?",
          es: "¿Qué es el aprendizaje automático cuántico y cómo ofrece potencialmente ventajas sobre el aprendizaje automático clásico?",
          de: "Was ist Quantum-Machine-Learning und wie bietet es potenziell Vorteile gegenüber klassischem Machine Learning?",
          nl: "Wat is quantum machine learning en hoe biedt het potentieel voordelen ten opzichte van klassieke machine learning?"
        },
        options: [
          {
            en: "The use of quantum algorithms and quantum data to potentially achieve exponential speedups in pattern recognition, optimization, and data analysis through quantum superposition and entanglement",
            es: "El uso de algoritmos cuánticos y datos cuánticos para potencialmente lograr aceleraciones exponenciales en reconocimiento de patrones, optimización y análisis de datos a través de superposición cuántica y entrelazamiento",
            de: "Die Verwendung von Quantenalgorithmen und Quantendaten, um potenziell exponentiielle Beschleunigungen in Mustererkennung, Optimierung und Datenanalyse durch Quantensuperposition und Verschränkung zu erreichen",
            nl: "Het gebruik van quantumalgoritmes en quantumgegevens om potentieel exponentiële versnellingen te bereiken in patroonherkenning, optimalisatie en data-analyse door quantum superpositie en verstrengeling"
          },
          {
            en: "Traditional machine learning algorithms running on quantum hardware without modification",
            es: "Algoritmos tradicionales de aprendizaje automático ejecutándose en hardware cuántico sin modificación",
            de: "Traditionelle Machine-Learning-Algorithmen, die ohne Modifikation auf Quantenhardware laufen",
            nl: "Traditionele machine learning algoritmes die draaien op quantumhardware zonder modificatie"
          },
          {
            en: "Machine learning techniques used to control and optimize quantum computers",
            es: "Técnicas de aprendizaje automático usadas para controlar y optimizar computadoras cuánticas",
            de: "Machine-Learning-Techniken zur Steuerung und Optimierung von Quantencomputern",
            nl: "Machine learning technieken gebruikt om quantumcomputers te controleren en optimaliseren"
          },
          {
            en: "Neural networks implemented using only quantum gates",
            es: "Redes neuronales implementadas usando solo puertas cuánticas",
            de: "Neuronale Netzwerke, die nur mit Quantengattern implementiert werden",
            nl: "Neurale netwerken geïmplementeerd met alleen quantumpoorten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum machine learning combines quantum computing with machine learning to potentially achieve computational advantages. Key approaches include: variational quantum circuits for classification, quantum kernel methods that map data to high-dimensional Hilbert spaces, quantum principal component analysis, and quantum neural networks. The exponential size of quantum state spaces could enable more efficient feature mapping and optimization, though practical quantum advantage remains an active research question.",
          es: "El aprendizaje automático cuántico combina computación cuántica con aprendizaje automático para potencialmente lograr ventajas computacionales. Los enfoques clave incluyen: circuitos cuánticos variacionales para clasificación, métodos de kernel cuántico que mapean datos a espacios de Hilbert de alta dimensión, análisis de componentes principales cuántico, y redes neuronales cuánticas. El tamaño exponencial de espacios de estado cuántico podría habilitar mapeo de características y optimización más eficientes, aunque la ventaja cuántica práctica sigue siendo una pregunta de investigación activa.",
          de: "Quantum-Machine-Learning kombiniert Quantencomputing mit maschinellem Lernen, um potenziell rechnerische Vorteile zu erzielen. Schlüsselansätze umfassen: variational Quantenschaltkreise für Klassifikation, Quantenkern-Methoden, die Daten auf hochdimensionale Hilbert-Räume abbilden, Quantenhauptkomponentenanalyse und Quantenneurale Netzwerke. Die exponentielle Größe von Quantenzustandsräumen könnte effizientere Feature-Abbildung und Optimierung ermöglichen, obwohl praktischer Quantenvorteil eine aktive Forschungsfrage bleibt.",
          nl: "Quantum machine learning combineert quantum computing met machine learning om potentieel computationele voordelen te bereiken. Belangrijke benaderingen omvatten: variationele quantumcircuits voor classificatie, quantum kernel methoden die data afbeelden naar hoog-dimensionale Hilbert ruimtes, quantum hoofdcomponent analyse, en quantum neurale netwerken. De exponentiële grootte van quantum toestandsruimtes zou efficiëntere feature mapping en optimalisatie kunnen mogelijk maken, hoewel praktisch quantumvoordeel een actieve onderzoeksvraag blijft."
        }
      },
      {
        question: {
          en: "What is quantum supremacy/advantage and what are the key challenges in demonstrating it convincingly?",
          es: "¿Qué es la supremacía/ventaja cuántica y cuáles son los desafíos clave para demostrarla convincentemente?",
          de: "Was ist Quantenüberlegenheit/-vorteil und was sind die Schlüsselherausforderungen beim überzeugenden Nachweis?",
          nl: "Wat is quantum supremacy/voordeel en wat zijn de belangrijkste uitdagingen bij het overtuigend aantonen ervan?"
        },
        options: [
          {
            en: "The point where quantum computers can solve problems that classical computers cannot solve in reasonable time, with challenges including verification, practical relevance, and sustained advantage",
            es: "El punto donde las computadoras cuánticas pueden resolver problemas que las computadoras clásicas no pueden resolver en tiempo razonable, con desafíos incluyendo verificación, relevancia práctica y ventaja sostenida",
            de: "Der Punkt, wo Quantencomputer Probleme lösen können, die klassische Computer nicht in angemessener Zeit lösen können, mit Herausforderungen einschließlich Verifikation, praktischer Relevanz und nachhaltigen Vorteils",
            nl: "Het punt waar quantumcomputers problemen kunnen oplossen die klassieke computers niet in redelijke tijd kunnen oplossen, met uitdagingen inclusief verificatie, praktische relevantie en aanhoudend voordeel"
          },
          {
            en: "When quantum computers become more powerful than all classical computers combined",
            es: "Cuando las computadoras cuánticas se vuelven más poderosas que todas las computadoras clásicas combinadas",
            de: "Wenn Quantencomputer mächtiger werden als alle klassischen Computer zusammen",
            nl: "Wanneer quantumcomputers krachtiger worden dan alle klassieke computers samen"
          },
          {
            en: "The ability of quantum computers to solve all NP-complete problems efficiently",
            es: "La capacidad de las computadoras cuánticas para resolver todos los problemas NP-completos eficientemente",
            de: "Die Fähigkeit von Quantencomputern, alle NP-vollständigen Probleme effizient zu lösen",
            nl: "Het vermogen van quantumcomputers om alle NP-complete problemen efficiënt op te lossen"
          },
          {
            en: "When quantum computers can perfectly simulate any physical system",
            es: "Cuando las computadoras cuánticas pueden simular perfectamente cualquier sistema físico",
            de: "Wenn Quantencomputer jedes physische System perfekt simulieren können",
            nl: "Wanneer quantumcomputers elk fysiek systeem perfect kunnen simuleren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum supremacy/advantage refers to quantum computers solving problems beyond classical capability. Key challenges include: verification (how to check results when classical computers can't solve the problem), choosing problems that demonstrate clear advantage, maintaining quantum advantage as classical algorithms improve, ensuring practical relevance beyond contrived problems, and dealing with noise that may eliminate theoretical speedups. Google's 2019 claim used random circuit sampling, but practical quantum advantage for useful problems remains elusive.",
          es: "La supremacía/ventaja cuántica se refiere a computadoras cuánticas resolviendo problemas más allá de la capacidad clásica. Los desafíos clave incluyen: verificación (cómo verificar resultados cuando las computadoras clásicas no pueden resolver el problema), elegir problemas que demuestren ventaja clara, mantener ventaja cuántica mientras los algoritmos clásicos mejoran, asegurar relevancia práctica más allá de problemas artificiales, y lidiar con ruido que puede eliminar aceleraciones teóricas. La afirmación de Google de 2019 usó muestreo de circuito aleatorio, pero la ventaja cuántica práctica para problemas útiles sigue siendo esquiva.",
          de: "Quantenüberlegenheit/-vorteil bezieht sich auf Quantencomputer, die Probleme jenseits klassischer Fähigkeiten lösen. Schlüsselherausforderungen umfassen: Verifikation (wie Ergebnisse zu prüfen, wenn klassische Computer das Problem nicht lösen können), Wahl von Problemen, die klaren Vorteil demonstrieren, Aufrechterhaltung des Quantenvorteils, während sich klassische Algorithmen verbessern, Sicherstellung praktischer Relevanz jenseits konstruierter Probleme und Umgang mit Rauschen, das theoretische Beschleunigungen eliminieren kann. Googles 2019-Behauptung nutzte zufälliges Schaltkreis-Sampling, aber praktischer Quantenvorteil für nützliche Probleme bleibt schwer fassbar.",
          nl: "Quantum supremacy/voordeel verwijst naar quantumcomputers die problemen oplossen buiten klassieke capaciteit. Belangrijke uitdagingen omvatten: verificatie (hoe resultaten te controleren wanneer klassieke computers het probleem niet kunnen oplossen), problemen kiezen die duidelijk voordeel aantonen, quantum voordeel behouden terwijl klassieke algoritmes verbeteren, praktische relevantie verzekeren buiten gekunstelde problemen, en omgaan met ruis die theoretische versnellingen kan elimineren. Google's 2019 claim gebruikte willekeurige circuit sampling, maar praktisch quantumvoordeel voor nuttige problemen blijft ongrijpbaar."
        }
      },
      {
        question: {
          en: "What is the quantum Zeno effect and how does it relate to quantum measurement?",
          es: "¿Qué es el efecto Zeno cuántico y cómo se relaciona con la medición cuántica?",
          de: "Was ist der Quantenzenon-Effekt und wie bezieht er sich auf Quantenmessung?",
          nl: "Wat is het quantum Zeno effect en hoe relateert het aan quantummeting?"
        },
        options: [
          {
            en: "The phenomenon where frequent quantum measurements can freeze the evolution of a quantum system, preventing transitions between quantum states",
            es: "El fenómeno donde mediciones cuánticas frecuentes pueden congelar la evolución de un sistema cuántico, previniendo transiciones entre estados cuánticos",
            de: "Das Phänomen, wo häufige Quantenmessungen die Evolution eines Quantensystems einfrieren können und Übergänge zwischen Quantenzuständen verhindern",
            nl: "Het fenomeen waarbij frequente quantummetingen de evolutie van een quantumsysteem kunnen bevriezen, overgangen tussen quantumtoestanden voorkomend"
          },
          {
            en: "The acceleration of quantum decay through repeated measurements",
            es: "La aceleración del decaimiento cuántico a través de mediciones repetidas",
            de: "Die Beschleunigung des Quantenzerfalls durch wiederholte Messungen",
            nl: "De versnelling van quantumverval door herhaalde metingen"
          },
          {
            en: "The uncertainty principle applied to quantum measurement timing",
            es: "El principio de incertidumbre aplicado al tiempo de medición cuántica",
            de: "Das Unschärfeprinzip angewendet auf Quantenmessungszeiten",
            nl: "Het onzekerheidsprincipe toegepast op quantum meetingstiming"
          },
          {
            en: "The paradox that quantum measurements always give classical results",
            es: "La paradoja de que las mediciones cuánticas siempre dan resultados clásicos",
            de: "Das Paradox, dass Quantenmessungen immer klassische Ergebnisse liefern",
            nl: "De paradox dat quantummetingen altijd klassieke resultaten geven"
          }
        ],
        correct: 0,
        explanation: {
          en: "The quantum Zeno effect demonstrates that frequent measurements can inhibit quantum evolution. Named after Zeno's arrow paradox, it occurs because each measurement collapses the quantum state back to the measured eigenstate, preventing the system from evolving to other states. This effect has been experimentally verified and has applications in quantum error correction, quantum control, and quantum computing where measurements can be used to suppress unwanted transitions.",
          es: "El efecto Zeno cuántico demuestra que mediciones frecuentes pueden inhibir la evolución cuántica. Nombrado después de la paradoja de la flecha de Zenón, ocurre porque cada medición colapsa el estado cuántico de vuelta al estado propio medido, previniendo que el sistema evolucione a otros estados. Este efecto ha sido verificado experimentalmente y tiene aplicaciones en corrección de errores cuánticos, control cuántico, y computación cuántica donde las mediciones pueden usarse para suprimir transiciones no deseadas.",
          de: "Der Quantenzenon-Effekt demonstriert, dass häufige Messungen die Quantenevolution hemmen können. Benannt nach Zenons Pfeilparadox, tritt er auf, weil jede Messung den Quantenzustand zurück zum gemessenen Eigenzustand kollabiert und das System daran hindert, sich zu anderen Zuständen zu entwickeln. Dieser Effekt wurde experimentell verifiziert und hat Anwendungen in Quantenfehlerkorrektur, Quantenkontrolle und Quantencomputing, wo Messungen verwendet werden können, um unerwünschte Übergänge zu unterdrücken.",
          nl: "Het quantum Zeno effect toont aan dat frequente metingen quantumevolutie kunnen remmen. Genoemd naar Zeno's pijlparadox, treedt het op omdat elke meting de quantumtoestand doet instorten terug naar de gemeten eigentoestand, waardoor het systeem wordt verhinderd naar andere toestanden te evolueren. Dit effect is experimenteel geverifieerd en heeft toepassingen in quantum foutcorrectie, quantumcontrole, en quantum computing waar metingen gebruikt kunnen worden om ongewenste overgangen te onderdrukken."
        }
      },
      {
        question: {
          en: "What is quantum sensing and how do quantum effects enhance measurement precision?",
          es: "¿Qué es la detección cuántica y cómo mejoran los efectos cuánticos la precisión de medición?",
          de: "Was ist Quantensensorik und wie verbessern Quanteneffekte die Messpräzision?",
          nl: "Wat is quantum sensing en hoe verbeteren quantumeffecten meetprecisie?"
        },
        options: [
          {
            en: "Using quantum phenomena like entanglement and superposition to achieve measurement precision beyond classical limits, potentially reaching the Heisenberg limit",
            es: "Usar fenómenos cuánticos como entrelazamiento y superposición para lograr precisión de medición más allá de límites clásicos, potencialmente alcanzando el límite de Heisenberg",
            de: "Verwendung von Quantenphänomenen wie Verschränkung und Superposition, um Messpräzision jenseits klassischer Grenzen zu erreichen, potenziell bis zur Heisenberg-Grenze",
            nl: "Quantumverschijnselen zoals verstrengeling en superpositie gebruiken om meetprecisie te bereiken voorbij klassieke limieten, potentieel de Heisenberg limiet bereikend"
          },
          {
            en: "Using quantum computers to process classical sensor data more efficiently",
            es: "Usar computadoras cuánticas para procesar datos de sensores clásicos más eficientemente",
            de: "Verwendung von Quantencomputern zur effizienteren Verarbeitung klassischer Sensordaten",
            nl: "Quantumcomputers gebruiken om klassieke sensor data efficiënter te verwerken"
          },
          {
            en: "Sensors that can only operate at quantum mechanical scales",
            es: "Sensores que solo pueden operar en escalas de mecánica cuántica",
            de: "Sensoren, die nur auf quantenmechanischen Skalen funktionieren können",
            nl: "Sensors die alleen kunnen werken op quantummechanische schalen"
          },
          {
            en: "Classical sensors enhanced with quantum error correction",
            es: "Sensores clásicos mejorados con corrección de errores cuánticos",
            de: "Klassische Sensoren, die mit Quantenfehlerkorrektur verbessert wurden",
            nl: "Klassieke sensors verbeterd met quantum foutcorrectie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum sensing exploits quantum mechanical effects to achieve unprecedented measurement sensitivity. Key techniques include: using entangled particles to reduce quantum noise below the standard quantum limit, atomic interferometry for gravity and acceleration measurements, NV centers in diamond for magnetic field detection, and squeezed light for gravitational wave detection. These methods can approach the theoretical Heisenberg limit, offering sqrt(N) improvement over classical methods for N particles/measurements.",
          es: "La detección cuántica explota efectos de mecánica cuántica para lograr sensibilidad de medición sin precedentes. Las técnicas clave incluyen: usar partículas entrelazadas para reducir ruido cuántico por debajo del límite cuántico estándar, interferometría atómica para mediciones de gravedad y aceleración, centros NV en diamante para detección de campo magnético, y luz comprimida para detección de ondas gravitacionales. Estos métodos pueden acercarse al límite teórico de Heisenberg, ofreciendo mejora sqrt(N) sobre métodos clásicos para N partículas/mediciones.",
          de: "Quantensensorik nutzt quantenmechanische Effekte aus, um beispiellose Messempfindlichkeit zu erreichen. Schlüsseltechniken umfassen: Verwendung verschränkter Teilchen zur Reduzierung von Quantenrauschen unter die Standard-Quantengrenze, atomare Interferometrie für Schwerkraft- und Beschleunigungsmessungen, NV-Zentren in Diamant für Magnetfeld-Detektion und gequetschtes Licht für Gravitationswellen-Detektion. Diese Methoden können sich der theoretischen Heisenberg-Grenze nähern und sqrt(N)-Verbesserung gegenüber klassischen Methoden für N Teilchen/Messungen bieten.",
          nl: "Quantum sensing benut quantummechanische effecten om ongekende meetgevoeligheid te bereiken. Belangrijke technieken omvatten: verstrengelde deeltjes gebruiken om quantumruis te reduceren onder de standaard quantumlimiet, atomaire interferometrie voor zwaartekracht en versnellingsmetingen, NV centra in diamant voor magnetisch veld detectie, en samengedrukt licht voor zwaartekrachtsgolf detectie. Deze methoden kunnen de theoretische Heisenberg limiet benaderen, sqrt(N) verbetering biedend ten opzichte van klassieke methoden voor N deeltjes/metingen."
        }
      },
      {
        question: {
          en: "What is quantum metrology and how does it relate to precision measurements?",
          es: "¿Qué es la metrología cuántica y cómo se relaciona con mediciones de precisión?",
          de: "Was ist Quantenmetrologie und wie bezieht sie sich auf Präzisionsmessungen?",
          nl: "Wat is quantummetrologie en hoe relateert het aan precisiemetingen?"
        },
        options: [
          {
            en: "The science of using quantum resources to enhance parameter estimation and achieve the highest possible measurement precision allowed by quantum mechanics",
            es: "La ciencia de usar recursos cuánticos para mejorar estimación de parámetros y lograr la mayor precisión de medición posible permitida por mecánica cuántica",
            de: "Die Wissenschaft der Nutzung von Quantenressourcen zur Verbesserung der Parameterschätzung und Erreichung höchstmöglicher Messpräzision, die durch Quantenmechanik erlaubt ist",
            nl: "De wetenschap van het gebruiken van quantumbronnen om parameter schatting te verbeteren en de hoogst mogelijke meetprecisie te bereiken die door quantummechanica wordt toegestaan"
          },
          {
            en: "The standardization of quantum measurement units across laboratories",
            es: "La estandarización de unidades de medición cuánticas entre laboratorios",
            de: "Die Standardisierung von Quantenmesseinheiten zwischen Laboratorien",
            nl: "De standaardisatie van quantum meeteenheden tussen laboratoria"
          },
          {
            en: "The calibration of quantum devices against classical standards",
            es: "La calibración de dispositivos cuánticos contra estándares clásicos",
            de: "Die Kalibrierung von Quantengeräten gegen klassische Standards",
            nl: "De kalibratie van quantumapparaten tegen klassieke standaarden"
          },
          {
            en: "The measurement of quantum mechanical properties of macroscopic objects",
            es: "La medición de propiedades de mecánica cuántica de objetos macroscópicos",
            de: "Die Messung quantenmechanischer Eigenschaften makroskopischer Objekte",
            nl: "De meting van quantummechanische eigenschappen van macroscopische objecten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum metrology studies how quantum effects can enhance parameter estimation beyond classical limits. It uses quantum resources like entanglement, squeezing, and superposition to improve measurement sensitivity. The field aims to achieve the Heisenberg scaling (1/N precision improvement with N probes) rather than classical shot-noise scaling (1/√N). Applications include atomic clocks, gravitational wave detectors, magnetic field sensors, and tests of fundamental physics constants.",
          es: "La metrología cuántica estudia cómo los efectos cuánticos pueden mejorar estimación de parámetros más allá de límites clásicos. Usa recursos cuánticos como entrelazamiento, compresión y superposición para mejorar sensibilidad de medición. El campo busca lograr escalamiento de Heisenberg (mejora de precisión 1/N con N sondas) en lugar de escalamiento clásico de ruido de disparo (1/√N). Las aplicaciones incluyen relojes atómicos, detectores de ondas gravitacionales, sensores de campo magnético, y pruebas de constantes de física fundamental.",
          de: "Quantenmetrologie untersucht, wie Quanteneffekte die Parameterschätzung jenseits klassischer Grenzen verbessern können. Sie nutzt Quantenressourcen wie Verschränkung, Quetschung und Superposition zur Verbesserung der Messempfindlichkeit. Das Feld zielt darauf ab, Heisenberg-Skalierung (1/N Präzisionsverbesserung mit N Sonden) statt klassischer Schrotrauschen-Skalierung (1/√N) zu erreichen. Anwendungen umfassen Atomuhren, Gravitationswellen-Detektoren, Magnetfeld-Sensoren und Tests fundamentaler Physikkonstanten.",
          nl: "Quantummetrologie bestudeert hoe quantumeffecten parameter schatting kunnen verbeteren voorbij klassieke limieten. Het gebruikt quantumbronnen zoals verstrengeling, samenpersing en superpositie om meetgevoeligheid te verbeteren. Het veld streeft naar het bereiken van Heisenberg schaling (1/N precisie verbetering met N sondes) in plaats van klassieke schot-ruis schaling (1/√N). Toepassingen omvatten atomaire klokken, zwaartekrachtsgolf detectoren, magnetisch veld sensors, en tests van fundamentele natuurkunde constanten."
        }
      },
      {
        question: {
          en: "What is quantum coherence and how does decoherence limit quantum computing?",
          es: "¿Qué es la coherencia cuántica y cómo limita la decoherencia la computación cuántica?",
          de: "Was ist Quantenkohärenz und wie begrenzt Dekohärenz das Quantencomputing?",
          nl: "Wat is quantumcoherentie en hoe beperkt decoherentie quantum computing?"
        },
        options: [
          {
            en: "Coherence is the maintenance of quantum superposition and phase relationships; decoherence destroys these through environmental interactions, limiting computation time and fidelity",
            es: "La coherencia es el mantenimiento de superposición cuántica y relaciones de fase; la decoherencia destruye estas a través de interacciones ambientales, limitando tiempo de computación y fidelidad",
            de: "Kohärenz ist die Aufrechterhaltung von Quantensuperposition und Phasenbeziehungen; Dekohärenz zerstört diese durch Umweltinteraktionen und begrenzt Rechenzeit und Treue",
            nl: "Coherentie is het behouden van quantum superpositie en fase relaties; decoherentie vernietigt deze door omgevingsinteracties, wat rekentijd en betrouwbaarheid beperkt"
          },
          {
            en: "Coherence refers to synchronized quantum gate operations across multiple qubits",
            es: "La coherencia se refiere a operaciones sincronizadas de puertas cuánticas a través de múltiples qubits",
            de: "Kohärenz bezieht sich auf synchronisierte Quantengatter-Operationen über mehrere Qubits",
            nl: "Coherentie verwijst naar gesynchroniseerde quantumpoort operaties over meerdere qubits"
          },
          {
            en: "Coherence is the ability to measure quantum states without collapse",
            es: "La coherencia es la capacidad de medir estados cuánticos sin colapso",
            de: "Kohärenz ist die Fähigkeit, Quantenzustände ohne Kollaps zu messen",
            nl: "Coherentie is het vermogen om quantumtoestanden te meten zonder instorting"
          },
          {
            en: "Coherence ensures all qubits maintain the same energy level",
            es: "La coherencia asegura que todos los qubits mantengan el mismo nivel de energía",
            de: "Kohärenz stellt sicher, dass alle Qubits das gleiche Energieniveau beibehalten",
            nl: "Coherentie verzekert dat alle qubits hetzelfde energieniveau behouden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum coherence refers to the preservation of quantum superposition states and the delicate phase relationships between them. Decoherence occurs when a quantum system interacts with its environment, causing loss of quantum information and phase relationships. This sets fundamental limits on quantum computing by constraining the time available for quantum operations before errors accumulate. Current quantum computers must complete calculations within coherence times ranging from microseconds to milliseconds, driving the need for quantum error correction and improved isolation techniques.",
          es: "La coherencia cuántica se refiere a la preservación de estados de superposición cuántica y las delicadas relaciones de fase entre ellos. La decoherencia ocurre cuando un sistema cuántico interactúa con su ambiente, causando pérdida de información cuántica y relaciones de fase. Esto establece límites fundamentales en computación cuántica al restringir el tiempo disponible para operaciones cuánticas antes de que se acumulen errores. Las computadoras cuánticas actuales deben completar cálculos dentro de tiempos de coherencia que van desde microsegundos a milisegundos, impulsando la necesidad de corrección de errores cuánticos y técnicas de aislamiento mejoradas.",
          de: "Quantenkohärenz bezieht sich auf die Erhaltung von Quantensuperpositionszuständen und den empfindlichen Phasenbeziehungen zwischen ihnen. Dekohärenz tritt auf, wenn ein Quantensystem mit seiner Umgebung interagiert, was zum Verlust von Quanteninformationen und Phasenbeziehungen führt. Dies setzt fundamentale Grenzen für Quantencomputing, indem es die verfügbare Zeit für Quantenoperationen begrenzt, bevor sich Fehler ansammeln. Aktuelle Quantencomputer müssen Berechnungen innerhalb von Kohärenzzeiten von Mikrosekunden bis Millisekunden abschließen, was den Bedarf an Quantenfehlerkorrektur und verbesserten Isolationstechniken antreibt.",
          nl: "Quantumcoherentie verwijst naar het behoud van quantum superpositiontoestanden en de delicate fase relaties ertussen. Decoherentie treedt op wanneer een quantumsysteem interageert met zijn omgeving, wat verlies van quantuminformatie en fase relaties veroorzaakt. Dit stelt fundamentele limieten aan quantum computing door de beschikbare tijd voor quantumoperaties te beperken voordat fouten zich ophopen. Huidige quantumcomputers moeten berekeningen voltooien binnen coherentietijden variërend van microseconden tot milliseconden, wat de behoefte aan quantum foutcorrectie en verbeterde isolatietechnieken drijft."
        }
      },
      {
        question: {
          en: "What is the role of quantum gates in quantum computing and how do they differ from classical logic gates?",
          es: "¿Cuál es el papel de las puertas cuánticas en computación cuántica y cómo difieren de las puertas lógicas clásicas?",
          de: "Was ist die Rolle von Quantengattern im Quantencomputing und wie unterscheiden sie sich von klassischen Logikgattern?",
          nl: "Wat is de rol van quantumpoorten in quantum computing en hoe verschillen ze van klassieke logische poorten?"
        },
        options: [
          {
            en: "Quantum gates are unitary operations that reversibly manipulate qubit superposition and entanglement states, unlike irreversible classical gates that operate on definite bit values",
            es: "Las puertas cuánticas son operaciones unitarias que manipulan reversiblemente estados de superposición y entrelazamiento de qubits, a diferencia de puertas clásicas irreversibles que operan en valores definidos de bits",
            de: "Quantengatter sind unitäre Operationen, die Qubit-Superpositions- und Verschränkungszustände reversibel manipulieren, im Gegensatz zu irreversiblen klassischen Gattern, die auf definite Bitwerte operieren",
            nl: "Quantumpoorten zijn unitaire operaties die qubit superpositie en verstrengelingstoestanden omkeerbaar manipuleren, in tegenstelling tot onomkeerbare klassieke poorten die opereren op definitieve bitwaarden"
          },
          {
            en: "Quantum gates are faster versions of classical gates that operate on qubits",
            es: "Las puertas cuánticas son versiones más rápidas de puertas clásicas que operan en qubits",
            de: "Quantengatter sind schnellere Versionen klassischer Gatter, die auf Qubits operieren",
            nl: "Quantumpoorten zijn snellere versies van klassieke poorten die op qubits werken"
          },
          {
            en: "Quantum gates control the flow of quantum particles through quantum circuits",
            es: "Las puertas cuánticas controlan el flujo de partículas cuánticas a través de circuitos cuánticos",
            de: "Quantengatter steuern den Fluss von Quantenteilchen durch Quantenschaltkreise",
            nl: "Quantumpoorten controleren de stroom van quantumdeeltjes door quantumcircuits"
          },
          {
            en: "Quantum gates are physical barriers that isolate qubits from environmental noise",
            es: "Las puertas cuánticas son barreras físicas que aíslan qubits del ruido ambiental",
            de: "Quantengatter sind physische Barrieren, die Qubits von Umgebungsrauschen isolieren",
            nl: "Quantumpoorten zijn fysieke barrières die qubits isoleren van omgevingsruis"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum gates are the fundamental building blocks of quantum circuits, implementing unitary transformations on qubit states. Unlike classical logic gates (AND, OR, NOT) that operate on definite 0/1 values and are often irreversible, quantum gates operate on superposition states and are always reversible. Key quantum gates include single-qubit gates (Pauli-X, Y, Z; Hadamard; phase gates) and two-qubit gates (CNOT, CZ). They enable operations impossible classically, such as creating superposition and entanglement.",
          es: "Las puertas cuánticas son los bloques fundamentales de circuitos cuánticos, implementando transformaciones unitarias en estados de qubit. A diferencia de puertas lógicas clásicas (AND, OR, NOT) que operan en valores definidos 0/1 y son a menudo irreversibles, las puertas cuánticas operan en estados de superposición y son siempre reversibles. Las puertas cuánticas clave incluyen puertas de un solo qubit (Pauli-X, Y, Z; Hadamard; puertas de fase) y puertas de dos qubits (CNOT, CZ). Permiten operaciones imposibles clásicamente, como crear superposición y entrelazamiento.",
          de: "Quantengatter sind die fundamentalen Bausteine von Quantenschaltkreisen und implementieren unitäre Transformationen auf Qubit-Zuständen. Im Gegensatz zu klassischen Logikgattern (AND, OR, NOT), die auf definite 0/1-Werte operieren und oft irreversibel sind, operieren Quantengatter auf Superpositionszuständen und sind immer reversibel. Wichtige Quantengatter umfassen Ein-Qubit-Gatter (Pauli-X, Y, Z; Hadamard; Phasengatter) und Zwei-Qubit-Gatter (CNOT, CZ). Sie ermöglichen klassisch unmögliche Operationen wie die Erzeugung von Superposition und Verschränkung.",
          nl: "Quantumpoorten zijn de fundamentele bouwstenen van quantumcircuits, die unitaire transformaties op qubit toestanden implementeren. In tegenstelling tot klassieke logische poorten (AND, OR, NOT) die opereren op definitieve 0/1 waarden en vaak onomkeerbaar zijn, opereren quantumpoorten op superpositiontoestanden en zijn altijd omkeerbaar. Belangrijke quantumpoorten omvatten enkelvoudige-qubit poorten (Pauli-X, Y, Z; Hadamard; fasepoorten) en tweevoudige-qubit poorten (CNOT, CZ). Ze maken operaties mogelijk die klassiek onmogelijk zijn, zoals het creëren van superpositie en verstrengeling."
        }
      },
      {
        question: {
          en: "What is the significance of Bell's theorem and Bell test experiments for quantum mechanics and quantum computing?",
          es: "¿Cuál es la significancia del teorema de Bell y experimentos de prueba de Bell para mecánica cuántica y computación cuántica?",
          de: "Was ist die Bedeutung von Bells Theorem und Bell-Test-Experimenten für Quantenmechanik und Quantencomputing?",
          nl: "Wat is de betekenis van Bell's stelling en Bell test experimenten voor quantummechanica en quantum computing?"
        },
        options: [
          {
            en: "Bell's theorem proves that quantum mechanics is fundamentally non-local, with Bell tests confirming quantum entanglement violates classical limits, validating quantum computing's theoretical foundation",
            es: "El teorema de Bell prueba que la mecánica cuántica es fundamentalmente no-local, con pruebas de Bell confirmando que el entrelazamiento cuántico viola límites clásicos, validando la fundación teórica de computación cuántica",
            de: "Bells Theorem beweist, dass Quantenmechanik fundamental nicht-lokal ist, wobei Bell-Tests bestätigen, dass Quantenverschränkung klassische Grenzen verletzt und die theoretische Grundlage des Quantencomputing validiert",
            nl: "Bell's stelling bewijst dat quantummechanica fundamenteel niet-lokaal is, waarbij Bell tests bevestigen dat quantum verstrengeling klassieke limieten schendt, wat de theoretische basis van quantum computing valideert"
          },
          {
            en: "Bell's theorem shows that quantum computers will always be faster than classical computers",
            es: "El teorema de Bell muestra que las computadoras cuánticas siempre serán más rápidas que las computadoras clásicas",
            de: "Bells Theorem zeigt, dass Quantencomputer immer schneller sein werden als klassische Computer",
            nl: "Bell's stelling toont dat quantumcomputers altijd sneller zullen zijn dan klassieke computers"
          },
          {
            en: "Bell's theorem proves that quantum measurements are completely random",
            es: "El teorema de Bell prueba que las mediciones cuánticas son completamente aleatorias",
            de: "Bells Theorem beweist, dass Quantenmessungen völlig zufällig sind",
            nl: "Bell's stelling bewijst dat quantummetingen volledig willekeurig zijn"
          },
          {
            en: "Bell's theorem demonstrates that quantum superposition can be directly observed",
            es: "El teorema de Bell demuestra que la superposición cuántica puede observarse directamente",
            de: "Bells Theorem demonstriert, dass Quantensuperposition direkt beobachtet werden kann",
            nl: "Bell's stelling toont aan dat quantum superpositie direct kan worden waargenomen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Bell's theorem proves that no physical theory based on local hidden variables can reproduce all the predictions of quantum mechanics. Bell test experiments measure correlations between entangled particles and consistently show violations of Bell inequalities, confirming that quantum mechanics exhibits genuine non-locality. This validates that quantum entanglement is a real physical phenomenon, not just a mathematical artifact, providing crucial evidence for quantum computing's potential advantages over classical computation.",
          es: "El teorema de Bell prueba que ninguna teoría física basada en variables ocultas locales puede reproducir todas las predicciones de mecánica cuántica. Los experimentos de prueba de Bell miden correlaciones entre partículas entrelazadas y consistentemente muestran violaciones de desigualdades de Bell, confirmando que la mecánica cuántica exhibe no-localidad genuina. Esto valida que el entrelazamiento cuántico es un fenómeno físico real, no solo un artefacto matemático, proporcionando evidencia crucial para las ventajas potenciales de computación cuántica sobre computación clásica.",
          de: "Bells Theorem beweist, dass keine physikalische Theorie basierend auf lokalen verborgenen Variablen alle Vorhersagen der Quantenmechanik reproduzieren kann. Bell-Test-Experimente messen Korrelationen zwischen verschränkten Teilchen und zeigen konsistent Verletzungen von Bell-Ungleichungen, was bestätigt, dass Quantenmechanik echte Nicht-Lokalität aufweist. Dies validiert, dass Quantenverschränkung ein reales physikalisches Phänomen ist, nicht nur ein mathematisches Artefakt, und liefert entscheidende Beweise für die potenziellen Vorteile des Quantencomputing gegenüber klassischer Berechnung.",
          nl: "Bell's stelling bewijst dat geen fysieke theorie gebaseerd op lokale verborgen variabelen alle voorspellingen van quantummechanica kan reproduceren. Bell test experimenten meten correlaties tussen verstrengelde deeltjes en tonen consistent schendingen van Bell ongelijkheden, bevestigend dat quantummechanica echte niet-lokaliteit vertoont. Dit valideert dat quantum verstrengeling een echt fysiek fenomeen is, niet alleen een wiskundig artefact, wat cruciale bewijzen levert voor quantum computing's potentiële voordelen boven klassieke berekening."
        }
      },
      {
        question: {
          en: "What is the potential impact of quantum computing on current cryptographic systems and cybersecurity?",
          es: "¿Cuál es el impacto potencial de la computación cuántica en sistemas criptográficos actuales y ciberseguridad?",
          de: "Was ist der potenzielle Einfluss von Quantencomputing auf aktuelle kryptographische Systeme und Cybersicherheit?",
          nl: "Wat is de potentiële impact van quantum computing op huidige cryptografische systemen en cybersecurity?"
        },
        options: [
          {
            en: "Quantum computers could break current public-key cryptography (RSA, ECC) using Shor's algorithm, necessitating migration to quantum-resistant cryptographic methods",
            es: "Las computadoras cuánticas podrían romper criptografía de clave pública actual (RSA, ECC) usando el algoritmo de Shor, necesitando migración a métodos criptográficos resistentes a cuánticos",
            de: "Quantencomputer könnten aktuelle Public-Key-Kryptographie (RSA, ECC) mit Shors Algorithmus brechen und eine Migration zu quantenresistenten kryptographischen Methoden erforderlich machen",
            nl: "Quantumcomputers zouden huidige publieke-sleutel cryptografie (RSA, ECC) kunnen breken met Shor's algoritme, wat migratie naar quantum-resistente cryptografische methoden noodzakelijk maakt"
          },
          {
            en: "Quantum computers will make all forms of encryption impossible",
            es: "Las computadoras cuánticas harán imposibles todas las formas de encriptación",
            de: "Quantencomputer werden alle Formen der Verschlüsselung unmöglich machen",
            nl: "Quantumcomputers zullen alle vormen van encryptie onmogelijk maken"
          },
          {
            en: "Quantum computing will only affect symmetric encryption algorithms",
            es: "La computación cuántica solo afectará algoritmos de encriptación simétrica",
            de: "Quantencomputing wird nur symmetrische Verschlüsselungsalgorithmen betreffen",
            nl: "Quantum computing zal alleen symmetrische encryptie algoritmes beïnvloeden"
          },
          {
            en: "Quantum computers will automatically make all communications secure",
            es: "Las computadoras cuánticas automáticamente harán seguras todas las comunicaciones",
            de: "Quantencomputer werden automatisch alle Kommunikation sicher machen",
            nl: "Quantumcomputers zullen automatisch alle communicatie veilig maken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum computers pose a significant threat to current public-key cryptography. Shor's algorithm can efficiently factor large integers and solve discrete logarithms, breaking RSA, Elliptic Curve Cryptography, and Diffie-Hellman key exchange. However, symmetric encryption (AES) and hash functions are less vulnerable, requiring only key size increases. This has spurred development of post-quantum cryptography - mathematical problems believed hard even for quantum computers. Organizations are already planning migration strategies for quantum-safe cryptography.",
          es: "Las computadoras cuánticas representan una amenaza significativa para la criptografía de clave pública actual. El algoritmo de Shor puede factorizar eficientemente enteros grandes y resolver logaritmos discretos, rompiendo RSA, Criptografía de Curva Elíptica, y intercambio de clave Diffie-Hellman. Sin embargo, encriptación simétrica (AES) y funciones hash son menos vulnerables, requiriendo solo aumentos de tamaño de clave. Esto ha estimulado desarrollo de criptografía post-cuántica - problemas matemáticos creídos difíciles incluso para computadoras cuánticas. Las organizaciones ya están planeando estrategias de migración para criptografía cuántico-segura.",
          de: "Quantencomputer stellen eine erhebliche Bedrohung für aktuelle Public-Key-Kryptographie dar. Shors Algorithmus kann effizient große Ganzzahlen faktorisieren und diskrete Logarithmen lösen, wodurch RSA, Elliptische Kurven-Kryptographie und Diffie-Hellman-Schlüsselaustausch gebrochen werden. Symmetrische Verschlüsselung (AES) und Hash-Funktionen sind jedoch weniger verwundbar und erfordern nur Schlüsselgrößenerweiterungen. Dies hat die Entwicklung post-quantumkryptographischer Verfahren angespornt - mathematische Probleme, die auch für Quantencomputer als schwer gelten. Organisationen planen bereits Migrationsstrategien für quantensichere Kryptographie.",
          nl: "Quantumcomputers vormen een significante bedreiging voor huidige publieke-sleutel cryptografie. Shor's algoritme kan efficiënt grote gehele getallen factoreren en discrete logaritmen oplossen, waardoor RSA, Elliptic Curve Cryptography, en Diffie-Hellman sleuteluitwisseling worden gebroken. Echter, symmetrische encryptie (AES) en hash functies zijn minder kwetsbaar, wat alleen sleutelgrootte verhogingen vereist. Dit heeft de ontwikkeling van post-quantum cryptografie gestimuleerd - wiskundige problemen die zelfs voor quantumcomputers moeilijk worden geacht. Organisaties plannen al migratiestrategieën voor quantum-veilige cryptografie."
        }
      },
      {
        question: {
          en: "What is the quantum no-cloning theorem and why is it fundamental to quantum mechanics?",
          es: "¿Qué es el teorema de no-clonación cuántica y por qué es fundamental para la mecánica cuántica?",
          de: "Was ist das Quantennichtklonungstheorem und warum ist es fundamental für die Quantenmechanik?",
          nl: "Wat is het quantum no-cloning theorema en waarom is het fundamenteel voor quantummechanica?"
        },
        options: [
          {
            en: "It states that arbitrary unknown quantum states cannot be perfectly copied, preventing information paradoxes and enabling quantum cryptography",
            es: "Establece que estados cuánticos desconocidos arbitrarios no pueden ser copiados perfectamente, previniendo paradojas de información y habilitando criptografía cuántica",
            de: "Es besagt, dass beliebige unbekannte Quantenzustände nicht perfekt kopiert werden können, was Informationsparadoxien verhindert und Quantenkryptographie ermöglicht",
            nl: "Het stelt dat willekeurige onbekende quantumtoestanden niet perfect kunnen worden gekopieerd, wat informatieparadoxen voorkomt en quantum cryptografie mogelijk maakt"
          },
          {
            en: "It prohibits the creation of identical quantum particles in any physical system",
            es: "Prohíbe la creación de partículas cuánticas idénticas en cualquier sistema físico",
            de: "Es verbietet die Erzeugung identischer Quantenteilchen in jedem physikalischen System",
            nl: "Het verbiedt de creatie van identieke quantumdeeltjes in elk fysiek systeem"
          },
          {
            en: "It prevents quantum computers from making backup copies of their calculations",
            es: "Previene que las computadoras cuánticas hagan copias de respaldo de sus cálculos",
            de: "Es verhindert, dass Quantencomputer Sicherungskopien ihrer Berechnungen erstellen",
            nl: "Het voorkomt dat quantumcomputers back-upkopieën maken van hun berekeningen"
          },
          {
            en: "It limits the number of qubits that can exist simultaneously in a quantum system",
            es: "Limita el número de qubits que pueden existir simultáneamente en un sistema cuántico",
            de: "Es begrenzt die Anzahl der Qubits, die gleichzeitig in einem Quantensystem existieren können",
            nl: "Het beperkt het aantal qubits dat gelijktijdig kan bestaan in een quantumsysteem"
          }
        ],
        correct: 0,
        explanation: {
          en: "The no-cloning theorem, proven by Wootters and Zurek, states that an unknown quantum state cannot be perfectly copied. This arises from the linearity of quantum mechanics - any cloning operation must be linear, but perfect cloning would require a nonlinear transformation. This theorem is fundamental because: (1) it prevents information paradoxes in quantum mechanics, (2) it ensures the security of quantum cryptography protocols like quantum key distribution, (3) it explains why we cannot amplify quantum signals without adding noise, and (4) it underlies the complementarity principle. However, approximate cloning and cloning of known states are possible.",
          es: "El teorema de no-clonación, probado por Wootters y Zurek, establece que un estado cuántico desconocido no puede ser copiado perfectamente. Esto surge de la linealidad de la mecánica cuántica - cualquier operación de clonación debe ser lineal, pero clonación perfecta requeriría una transformación no lineal. Este teorema es fundamental porque: (1) previene paradojas de información en mecánica cuántica, (2) asegura la seguridad de protocolos de criptografía cuántica como distribución de clave cuántica, (3) explica por qué no podemos amplificar señales cuánticas sin agregar ruido, y (4) subyace al principio de complementariedad. Sin embargo, clonación aproximada y clonación de estados conocidos son posibles.",
          de: "Das Nichtklonungstheorem, bewiesen von Wootters und Zurek, besagt, dass ein unbekannter Quantenzustand nicht perfekt kopiert werden kann. Dies ergibt sich aus der Linearität der Quantenmechanik - jede Klonoperation muss linear sein, aber perfektes Klonen würde eine nichtlineare Transformation erfordern. Dieses Theorem ist fundamental, weil: (1) es Informationsparadoxien in der Quantenmechanik verhindert, (2) es die Sicherheit quantenkryptographischer Protokolle wie Quantenschlüsselverteilung gewährleistet, (3) es erklärt, warum wir Quantensignale nicht ohne Rauschzufügung verstärken können, und (4) es dem Komplementaritätsprinzip zugrunde liegt. Approximatives Klonen und Klonen bekannter Zustände sind jedoch möglich.",
          nl: "Het no-cloning theorema, bewezen door Wootters en Zurek, stelt dat een onbekende quantumtoestand niet perfect kan worden gekopieerd. Dit ontstaat uit de lineariteit van quantummechanica - elke kloonoperatie moet lineair zijn, maar perfect klonen zou een niet-lineaire transformatie vereisen. Dit theorema is fundamenteel omdat: (1) het informatieparadoxen in quantummechanica voorkomt, (2) het de veiligheid van quantum cryptografie protocollen zoals quantum sleuteldistributie verzekert, (3) het verklaart waarom we quantumsignalen niet kunnen versterken zonder ruis toe te voegen, en (4) het ten grondslag ligt aan het complementariteitsbeginsel. Echter, benaderend klonen en klonen van bekende toestanden zijn wel mogelijk."
        }
      },
      {
        question: {
          en: "What are quantum cellular automata and their significance in quantum computation?",
          es: "¿Qué son los autómatas celulares cuánticos y su significado en computación cuántica?",
          de: "Was sind Quantenzellularautomaten und ihre Bedeutung in der Quantenberechnung?",
          nl: "Wat zijn quantum cellulaire automaten en hun betekenis in quantumberekening?"
        },
        options: [
          {
            en: "Discrete-time quantum dynamical systems on lattices that evolve unitarily, providing models for quantum computation and many-body physics",
            es: "Sistemas dinámicos cuánticos de tiempo discreto en celosías que evolucionan unitariamente, proporcionando modelos para computación cuántica y física de muchos cuerpos",
            de: "Diskrete Quantendynamische Systeme auf Gittern, die unitär evolvieren und Modelle für Quantenberechnung und Vielkörperphysik bereitstellen",
            nl: "Discrete-tijd quantum dynamische systemen op roosters die unitair evolueren, wat modellen biedt voor quantumberekening en veel-deeltjes fysica"
          },
          {
            en: "Classical cellular automata that simulate quantum mechanical processes",
            es: "Autómatas celulares clásicos que simulan procesos mecánicos cuánticos",
            de: "Klassische Zellularautomaten, die quantenmechanische Prozesse simulieren",
            nl: "Klassieke cellulaire automaten die quantummechanische processen simuleren"
          },
          {
            en: "Quantum computers organized in cellular structures for parallel processing",
            es: "Computadoras cuánticas organizadas en estructuras celulares para procesamiento paralelo",
            de: "Quantencomputer, die in zellularen Strukturen für parallele Verarbeitung organisiert sind",
            nl: "Quantumcomputers georganiseerd in cellulaire structuren voor parallelle verwerking"
          },
          {
            en: "Biological cells that exhibit quantum mechanical properties",
            es: "Células biológicas que exhiben propiedades mecánicas cuánticas",
            de: "Biologische Zellen, die quantenmechanische Eigenschaften aufweisen",
            nl: "Biologische cellen die quantummechanische eigenschappen vertonen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum cellular automata (QCA) are discrete-time, discrete-space quantum dynamical systems where qubits are arranged on a lattice and evolve according to local unitary rules that preserve quantum information. Unlike classical cellular automata, QCA must be reversible (unitary) and can exhibit quantum superposition and entanglement. They serve as fundamental models for: (1) universal quantum computation - any quantum circuit can be simulated by QCA, (2) quantum many-body dynamics and phase transitions, (3) quantum random walks and transport phenomena, and (4) understanding the emergence of classical behavior from quantum mechanics. Famous examples include the quantum Game of Life and Margolus neighborhood QCA.",
          es: "Los autómatas celulares cuánticos (QCA) son sistemas dinámicos cuánticos de tiempo discreto y espacio discreto donde qubits están dispuestos en una celosía y evolucionan según reglas unitarias locales que preservan información cuántica. A diferencia de autómatas celulares clásicos, QCA deben ser reversibles (unitarios) y pueden exhibir superposición cuántica y entrelazamiento. Sirven como modelos fundamentales para: (1) computación cuántica universal - cualquier circuito cuántico puede ser simulado por QCA, (2) dinámica cuántica de muchos cuerpos y transiciones de fase, (3) caminatas aleatorias cuánticas y fenómenos de transporte, y (4) entender la emergencia de comportamiento clásico de mecánica cuántica. Ejemplos famosos incluyen el Juego de la Vida cuántico y QCA de vecindario Margolus.",
          de: "Quantenzellularautomaten (QCA) sind diskrete Zeit-, diskrete Raum-Quantendynamiksysteme, bei denen Qubits auf einem Gitter angeordnet sind und sich gemäß lokalen unitären Regeln entwickeln, die Quanteninformation erhalten. Im Gegensatz zu klassischen Zellularautomaten müssen QCA reversibel (unitär) sein und können Quantensuperposition und Verschränkung aufweisen. Sie dienen als fundamentale Modelle für: (1) universelle Quantenberechnung - jeder Quantenschaltkreis kann durch QCA simuliert werden, (2) Quantenvielkörperdynamik und Phasenübergänge, (3) Quantenzufallswanderungen und Transportphänomene, und (4) das Verständnis der Entstehung klassischen Verhaltens aus der Quantenmechanik. Berühmte Beispiele umfassen das Quantenspiel des Lebens und Margolus-Nachbarschafts-QCA.",
          nl: "Quantum cellulaire automaten (QCA) zijn discrete-tijd, discrete-ruimte quantum dynamische systemen waarbij qubits zijn gerangschikt op een rooster en evolueren volgens lokale unitaire regels die quantuminformatie behouden. In tegenstelling tot klassieke cellulaire automaten moeten QCA omkeerbaar (unitair) zijn en kunnen quantum superpositie en verstrengeling vertonen. Ze dienen als fundamentele modellen voor: (1) universele quantumberekening - elk quantumcircuit kan worden gesimuleerd door QCA, (2) quantum veel-deeltjes dynamica en faseovergangen, (3) quantum random walks en transportfenomenen, en (4) het begrijpen van de opkomst van klassiek gedrag uit quantummechanica. Beroemde voorbeelden omvatten het quantum Game of Life en Margolus buurt QCA."
        }
      },
      {
        question: {
          en: "What is quantum complexity theory and the relationship between quantum and classical computational complexity classes?",
          es: "¿Qué es la teoría de complejidad cuántica y la relación entre clases de complejidad computacional cuántica y clásica?",
          de: "Was ist Quantenkomplexitätstheorie und die Beziehung zwischen quantenmechanischen und klassischen Berechnungskomplexitätsklassen?",
          nl: "Wat is quantum complexiteitstheorie en de relatie tussen quantum en klassieke computationele complexiteitsklassen?"
        },
        options: [
          {
            en: "The study of computational resources needed by quantum algorithms, with BQP being the quantum analog of P, and relationships like P ⊆ BQP ⊆ PSPACE",
            es: "El estudio de recursos computacionales necesarios por algoritmos cuánticos, con BQP siendo el análogo cuántico de P, y relaciones como P ⊆ BQP ⊆ PSPACE",
            de: "Das Studium der Berechnungsressourcen, die von Quantenalgorithmen benötigt werden, wobei BQP das Quantenanalogon zu P ist und Beziehungen wie P ⊆ BQP ⊆ PSPACE bestehen",
            nl: "De studie van computationele bronnen die nodig zijn voor quantumalgoritmen, waarbij BQP het quantum analogon van P is, en relaties zoals P ⊆ BQP ⊆ PSPACE"
          },
          {
            en: "The measurement of how complex quantum states become during computation",
            es: "La medición de qué tan complejos se vuelven los estados cuánticos durante computación",
            de: "Die Messung, wie komplex Quantenzustände während der Berechnung werden",
            nl: "De meting van hoe complex quantumtoestanden worden tijdens berekening"
          },
          {
            en: "The study of quantum entanglement complexity in many-body systems",
            es: "El estudio de complejidad de entrelazamiento cuántico en sistemas de muchos cuerpos",
            de: "Das Studium der Quantenverschränkungskomplexität in Vielkörpersystemen",
            nl: "De studie van quantum verstrengeling complexiteit in veel-deeltjes systemen"
          },
          {
            en: "The analysis of error rates in quantum computation as problem size increases",
            es: "El análisis de tasas de error en computación cuántica cuando el tamaño del problema aumenta",
            de: "Die Analyse von Fehlerquoten in der Quantenberechnung bei zunehmender Problemgröße",
            nl: "De analyse van foutpercentages in quantumberekening als de probleemgrootte toeneemt"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum complexity theory studies the computational resources (time, space, queries) required by quantum algorithms. The central complexity class is BQP (Bounded-error Quantum Polynomial time) - problems solvable by quantum computers in polynomial time with high probability. Key relationships include: P ⊆ BQP ⊆ PSPACE, BQP ⊆ PP, and BQP vs NP is unknown. Other important classes include QMA (quantum analog of NP), QPSPACE, and QNC. The theory addresses fundamental questions about quantum computational advantages, such as whether BQP = P (unlikely given Shor's algorithm) and the quantum PCP conjecture. Recent work includes quantum interactive proofs, quantum cryptographic protocols, and connections to quantum many-body physics.",
          es: "La teoría de complejidad cuántica estudia los recursos computacionales (tiempo, espacio, consultas) requeridos por algoritmos cuánticos. La clase de complejidad central es BQP (tiempo polinomial cuántico de error acotado) - problemas resolubles por computadoras cuánticas en tiempo polinomial con alta probabilidad. Relaciones clave incluyen: P ⊆ BQP ⊆ PSPACE, BQP ⊆ PP, y BQP vs NP es desconocido. Otras clases importantes incluyen QMA (análogo cuántico de NP), QPSPACE, y QNC. La teoría aborda preguntas fundamentales sobre ventajas computacionales cuánticas, como si BQP = P (improbable dado el algoritmo de Shor) y la conjetura PCP cuántica. Trabajo reciente incluye pruebas interactivas cuánticas, protocolos criptográficos cuánticos, y conexiones con física cuántica de muchos cuerpos.",
          de: "Quantenkomplexitätstheorie untersucht die Berechnungsressourcen (Zeit, Raum, Abfragen), die von Quantenalgorithmen benötigt werden. Die zentrale Komplexitätsklasse ist BQP (Bounded-error Quantum Polynomial time) - Probleme, die von Quantencomputern in polynomialer Zeit mit hoher Wahrscheinlichkeit lösbar sind. Wichtige Beziehungen umfassen: P ⊆ BQP ⊆ PSPACE, BQP ⊆ PP, und BQP vs NP ist unbekannt. Andere wichtige Klassen umfassen QMA (Quantenanalogon zu NP), QPSPACE und QNC. Die Theorie behandelt grundlegende Fragen zu Quantenberechnungsvorteilen, wie ob BQP = P (unwahrscheinlich angesichts Shors Algorithmus) und die Quanten-PCP-Vermutung. Jüngste Arbeiten umfassen quanteninteraktive Beweise, quantenkryptographische Protokolle und Verbindungen zur Quantenvielkörperphysik.",
          nl: "Quantum complexiteitstheorie bestudeert de computationele bronnen (tijd, ruimte, queries) die vereist zijn door quantumalgoritmen. De centrale complexiteitsklasse is BQP (Bounded-error Quantum Polynomial time) - problemen oplosbaar door quantumcomputers in polynomiale tijd met hoge waarschijnlijkheid. Belangrijke relaties omvatten: P ⊆ BQP ⊆ PSPACE, BQP ⊆ PP, en BQP vs NP is onbekend. Andere belangrijke klassen omvatten QMA (quantum analogon van NP), QPSPACE, en QNC. De theorie behandelt fundamentele vragen over quantum computationele voordelen, zoals of BQP = P (onwaarschijnlijk gegeven Shor's algoritme) en de quantum PCP vermoeden. Recent werk omvat quantum interactieve bewijzen, quantum cryptografische protocollen, en connecties met quantum veel-deeltjes fysica."
        }
      },
      {
        question: {
          en: "What is the role of quantum discord and non-classical correlations beyond entanglement?",
          es: "¿Cuál es el papel de la discordia cuántica y correlaciones no-clásicas más allá del entrelazamiento?",
          de: "Was ist die Rolle von Quantendiskord und nichtklassischen Korrelationen jenseits der Verschränkung?",
          nl: "Wat is de rol van quantum discord en niet-klassieke correlaties voorbij verstrengeling?"
        },
        options: [
          {
            en: "Quantum discord captures non-classical correlations in separable (unentangled) states, enabling quantum advantages in certain computational tasks",
            es: "La discordia cuántica captura correlaciones no-clásicas en estados separables (no entrelazados), habilitando ventajas cuánticas en ciertas tareas computacionales",
            de: "Quantendiskord erfasst nichtklassische Korrelationen in separierbaren (nichtverschränkten) Zuständen und ermöglicht Quantenvorteile in bestimmten Berechnungsaufgaben",
            nl: "Quantum discord vangt niet-klassieke correlaties in scheidbare (niet-verstrengelde) toestanden, wat quantumvoordelen mogelijk maakt in bepaalde computationele taken"
          },
          {
            en: "Quantum discord is just another name for quantum entanglement in mixed states",
            es: "La discordia cuántica es solo otro nombre para entrelazamiento cuántico en estados mixtos",
            de: "Quantendiskord ist nur ein anderer Name für Quantenverschränkung in gemischten Zuständen",
            nl: "Quantum discord is gewoon een andere naam voor quantum verstrengeling in gemengde toestanden"
          },
          {
            en: "Quantum discord only exists in pure quantum states and disappears in mixed states",
            es: "La discordia cuántica solo existe en estados cuánticos puros y desaparece en estados mixtos",
            de: "Quantendiskord existiert nur in reinen Quantenzuständen und verschwindet in gemischten Zuständen",
            nl: "Quantum discord bestaat alleen in pure quantumtoestanden en verdwijnt in gemengde toestanden"
          },
          {
            en: "Quantum discord represents the classical correlations between quantum systems",
            es: "La discordia cuántica representa las correlaciones clásicas entre sistemas cuánticos",
            de: "Quantendiskord repräsentiert die klassischen Korrelationen zwischen Quantensystemen",
            nl: "Quantum discord vertegenwoordigt de klassieke correlaties tussen quantumsystemen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum discord, introduced by Ollivier and Zurek, quantifies non-classical correlations that exist even in separable (unentangled) states. It arises from the difference between quantum mutual information and the maximum classical correlation extractable by local measurements. Unlike entanglement, discord can be non-zero for mixed separable states and is asymmetric under party exchange. Discord has been shown to provide quantum computational advantages in: (1) deterministic quantum computation with one qubit (DQC1 model), (2) quantum machine learning algorithms, (3) quantum metrology beyond entanglement, and (4) certain quantum communication protocols. This reveals that entanglement is not the sole source of quantum advantage, broadening our understanding of quantum resources.",
          es: "La discordia cuántica, introducida por Ollivier y Zurek, cuantifica correlaciones no-clásicas que existen incluso en estados separables (no entrelazados). Surge de la diferencia entre información mutua cuántica y la correlación clásica máxima extraíble por mediciones locales. A diferencia del entrelazamiento, la discordia puede ser no-cero para estados separables mixtos y es asimétrica bajo intercambio de partes. La discordia ha demostrado proporcionar ventajas computacionales cuánticas en: (1) computación cuántica determinista con un qubit (modelo DQC1), (2) algoritmos de aprendizaje automático cuántico, (3) metrología cuántica más allá del entrelazamiento, y (4) ciertos protocolos de comunicación cuántica. Esto revela que el entrelazamiento no es la única fuente de ventaja cuántica, ampliando nuestro entendimiento de recursos cuánticos.",
          de: "Quantendiskord, eingeführt von Ollivier und Zurek, quantifiziert nichtklassische Korrelationen, die sogar in separierbaren (nichtverschränkten) Zuständen existieren. Er entsteht aus der Differenz zwischen quantenmutual Information und der maximalen klassischen Korrelation, die durch lokale Messungen extrahierbar ist. Im Gegensatz zur Verschränkung kann Diskord für gemischte separierbare Zustände ungleich null sein und ist asymmetrisch unter Parteitausch. Diskord hat gezeigt, dass er Quantenberechnungsvorteile bietet in: (1) deterministischer Quantenberechnung mit einem Qubit (DQC1-Modell), (2) Quantenmaschinenlernalgorithmen, (3) Quantenmetrologie jenseits der Verschränkung, und (4) bestimmten Quantenkommunikationsprotokollen. Dies offenbart, dass Verschränkung nicht die einzige Quelle des Quantenvorteils ist, was unser Verständnis von Quantenressourcen erweitert.",
          nl: "Quantum discord, geïntroduceerd door Ollivier en Zurek, kwantificeert niet-klassieke correlaties die bestaan zelfs in scheidbare (niet-verstrengelde) toestanden. Het ontstaat uit het verschil tussen quantum wederzijdse informatie en de maximale klassieke correlatie die extraheerbaar is door lokale metingen. In tegenstelling tot verstrengeling kan discord niet-nul zijn voor gemengde scheidbare toestanden en is asymmetrisch onder partij uitwisseling. Discord heeft aangetoond quantumcomputationele voordelen te bieden in: (1) deterministische quantumberekening met één qubit (DQC1 model), (2) quantum machine learning algoritmen, (3) quantum metrologie voorbij verstrengeling, en (4) bepaalde quantum communicatieprotocollen. Dit onthult dat verstrengeling niet de enige bron van quantumvoordeel is, wat ons begrip van quantumbronnen verbreedt."
        }
      },
      {
        question: {
          en: "What are quantum neural networks and their potential advantages over classical neural networks?",
          es: "¿Qué son las redes neuronales cuánticas y sus ventajas potenciales sobre las redes neuronales clásicas?",
          de: "Was sind Quantenneuronale Netzwerke und ihre potenziellen Vorteile gegenüber klassischen neuronalen Netzwerken?",
          nl: "Wat zijn quantum neurale netwerken en hun potentiële voordelen ten opzichte van klassieke neurale netwerken?"
        },
        options: [
          {
            en: "Parameterized quantum circuits that can exploit quantum superposition and entanglement for potentially exponential speedups in certain learning tasks",
            es: "Circuitos cuánticos parametrizados que pueden explotar superposición cuántica y entrelazamiento para aceleraciones potencialmente exponenciales en ciertas tareas de aprendizaje",
            de: "Parametrisierte Quantenschaltkreise, die Quantensuperposition und Verschränkung für potentiell exponentielle Beschleunigungen in bestimmten Lernaufgaben nutzen können",
            nl: "Geparametriseerde quantumcircuits die quantum superpositie en verstrengeling kunnen benutten voor potentieel exponentiële versnellingen in bepaalde leertaken"
          },
          {
            en: "Classical neural networks that are simply very fast and efficient",
            es: "Redes neuronales clásicas que simplemente son muy rápidas y eficientes",
            de: "Klassische neuronale Netzwerke, die einfach sehr schnell und effizient sind",
            nl: "Klassieke neurale netwerken die simpelweg zeer snel en efficiënt zijn"
          },
          {
            en: "Biological neural networks found in quantum-coherent organisms",
            es: "Redes neuronales biológicas encontradas en organismos cuántico-coherentes",
            de: "Biologische neuronale Netzwerke in quantenkohärenten Organismen",
            nl: "Biologische neurale netwerken gevonden in quantum-coherente organismen"
          },
          {
            en: "Neural networks that only work on quantum computers with perfect error correction",
            es: "Redes neuronales que solo funcionan en computadoras cuánticas con corrección de errores perfecta",
            de: "Neuronale Netzwerke, die nur auf Quantencomputern mit perfekter Fehlerkorrektur funktionieren",
            nl: "Neurale netwerken die alleen werken op quantumcomputers met perfecte foutcorrectie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum neural networks (QNNs) are parameterized quantum circuits designed to process and learn from data using quantum mechanical principles. They can potentially offer several advantages: (1) Exponential state space - n qubits can represent 2^n basis states simultaneously through superposition, (2) Quantum feature maps that embed classical data into high-dimensional Hilbert spaces, (3) Quantum interference effects that can enhance pattern recognition, (4) Natural handling of quantum data without measurement-induced information loss. Current implementations include variational quantum circuits, quantum convolutional networks, and hybrid classical-quantum architectures. While theoretical advantages exist, practical quantum advantages over classical neural networks remain to be fully demonstrated due to current hardware limitations and decoherence.",
          es: "Las redes neuronales cuánticas (QNNs) son circuitos cuánticos parametrizados diseñados para procesar y aprender de datos usando principios mecánicos cuánticos. Potencialmente pueden ofrecer varias ventajas: (1) Espacio de estados exponencial - n qubits pueden representar 2^n estados base simultáneamente a través de superposición, (2) Mapas de características cuánticos que embeben datos clásicos en espacios de Hilbert de alta dimensión, (3) Efectos de interferencia cuántica que pueden mejorar reconocimiento de patrones, (4) Manejo natural de datos cuánticos sin pérdida de información inducida por medición. Implementaciones actuales incluyen circuitos cuánticos variacionales, redes convolucionales cuánticas, y arquitecturas híbridas clásico-cuánticas. Mientras existen ventajas teóricas, ventajas cuánticas prácticas sobre redes neuronales clásicas quedan por demostrarse completamente debido a limitaciones de hardware actual y decoherencia.",
          de: "Quantenneuronale Netzwerke (QNNs) sind parametrisierte Quantenschaltkreise, die darauf ausgelegt sind, Daten unter Verwendung quantenmechanischer Prinzipien zu verarbeiten und daraus zu lernen. Sie können potentiell mehrere Vorteile bieten: (1) Exponentieller Zustandsraum - n Qubits können 2^n Basiszustände gleichzeitig durch Superposition repräsentieren, (2) Quantenmerkmalsabbildungen, die klassische Daten in hochdimensionale Hilbert-Räume einbetten, (3) Quanteninterferenzeffekte, die Mustererkennung verbessern können, (4) Natürlicher Umgang mit Quantendaten ohne messungsinduzierte Informationsverluste. Aktuelle Implementierungen umfassen variationelle Quantenschaltkreise, Quantenkonvolutionsnetzwerke und hybride klassisch-quantenneurale Architekturen. Während theoretische Vorteile existieren, bleiben praktische Quantenvorteile gegenüber klassischen neuronalen Netzwerken aufgrund aktueller Hardware-Limitierungen und Dekohärenz noch vollständig zu demonstrieren.",
          nl: "Quantum neurale netwerken (QNNs) zijn geparametriseerde quantumcircuits ontworpen om data te verwerken en ervan te leren met quantummechanische principes. Ze kunnen potentieel verschillende voordelen bieden: (1) Exponentiële toestandsruimte - n qubits kunnen 2^n basistoestanden gelijktijdig representeren door superpositie, (2) Quantum eigenschap maps die klassieke data inbedden in hoog-dimensionale Hilbert ruimtes, (3) Quantum interferentie effecten die patroonherkenning kunnen verbeteren, (4) Natuurlijke behandeling van quantumdata zonder meting-geïnduceerd informatieverlies. Huidige implementaties omvatten variationele quantumcircuits, quantum convolutionele netwerken, en hybride klassiek-quantum architecturen. Hoewel theoretische voordelen bestaan, moeten praktische quantumvoordelen boven klassieke neurale netwerken nog volledig worden aangetoond vanwege huidige hardware beperkingen en decoherentie."
        }
      },
      {
        question: {
          en: "What is the quantum advantage in machine learning and when does it manifest?",
          es: "¿Cuál es la ventaja cuántica en aprendizaje automático y cuándo se manifiesta?",
          de: "Was ist der Quantenvorteil im maschinellen Lernen und wann manifestiert er sich?",
          nl: "Wat is het quantumvoordeel in machine learning en wanneer manifesteert het zich?"
        },
        options: [
          {
            en: "Potential exponential speedups for specific problems involving quantum data, high-dimensional feature spaces, or structured linear algebra operations",
            es: "Aceleraciones exponenciales potenciales para problemas específicos involucrando datos cuánticos, espacios de características de alta dimensión, u operaciones de álgebra lineal estructuradas",
            de: "Potentielle exponentielle Beschleunigungen für spezifische Probleme mit Quantendaten, hochdimensionalen Merkmalsräumen oder strukturierten linearen Algebraoperationen",
            nl: "Potentiële exponentiële versnellingen voor specifieke problemen betreffende quantumdata, hoog-dimensionale eigenschap ruimtes, of gestructureerde lineaire algebra operaties"
          },
          {
            en: "Quantum computers always perform better than classical computers for any machine learning task",
            es: "Las computadoras cuánticas siempre funcionan mejor que las computadoras clásicas para cualquier tarea de aprendizaje automático",
            de: "Quantencomputer schneiden immer besser ab als klassische Computer für jede maschinelle Lernaufgabe",
            nl: "Quantumcomputers presteren altijd beter dan klassieke computers voor elke machine learning taak"
          },
          {
            en: "The advantage only exists for quantum neural networks with more than 1000 qubits",
            es: "La ventaja solo existe para redes neuronales cuánticas con más de 1000 qubits",
            de: "Der Vorteil existiert nur für Quantenneuronale Netzwerke mit mehr als 1000 Qubits",
            nl: "Het voordeel bestaat alleen voor quantum neurale netwerken met meer dan 1000 qubits"
          },
          {
            en: "Quantum machine learning is purely theoretical with no practical applications",
            es: "El aprendizaje automático cuántico es puramente teórico sin aplicaciones prácticas",
            de: "Quantenmaschinelles Lernen ist rein theoretisch ohne praktische Anwendungen",
            nl: "Quantum machine learning is puur theoretisch zonder praktische toepassingen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum advantage in machine learning is context-dependent and manifests in specific scenarios: (1) Quantum data processing - when the data itself is quantum, avoiding costly state tomography, (2) High-dimensional feature spaces - quantum kernel methods can access exponentially large feature spaces, (3) Linear algebra speedups - quantum algorithms for solving linear systems, matrix inversion, and eigenvalue problems, (4) Sampling tasks - quantum algorithms for generating samples from certain distributions. However, classical data often requires expensive quantum encoding, and many quantum ML algorithms have classical analogs with similar performance. Current research focuses on identifying problems with provable quantum advantage, developing NISQ-era algorithms, and understanding the role of quantum hardware noise in limiting practical advantages.",
          es: "La ventaja cuántica en aprendizaje automático depende del contexto y se manifiesta en escenarios específicos: (1) Procesamiento de datos cuánticos - cuando los datos mismos son cuánticos, evitando tomografía de estado costosa, (2) Espacios de características de alta dimensión - métodos de kernel cuánticos pueden acceder a espacios de características exponencialmente grandes, (3) Aceleraciones de álgebra lineal - algoritmos cuánticos para resolver sistemas lineales, inversión de matrices, y problemas de eigenvalores, (4) Tareas de muestreo - algoritmos cuánticos para generar muestras de ciertas distribuciones. Sin embargo, datos clásicos a menudo requieren codificación cuántica costosa, y muchos algoritmos de ML cuántico tienen análogos clásicos con rendimiento similar. La investigación actual se enfoca en identificar problemas con ventaja cuántica demostrable, desarrollar algoritmos para la era NISQ, y entender el papel del ruido de hardware cuántico en limitar ventajas prácticas.",
          de: "Quantenvorteil im maschinellen Lernen ist kontextabhängig und manifestiert sich in spezifischen Szenarien: (1) Quantendatenverarbeitung - wenn die Daten selbst quantenmechanisch sind, wodurch kostspielige Zustandstomographie vermieden wird, (2) Hochdimensionale Merkmalsräume - Quantenkernel-Methoden können auf exponentiell große Merkmalsräume zugreifen, (3) Lineare Algebra-Beschleunigungen - Quantenalgorithmen zur Lösung linearer Systeme, Matrixinversion und Eigenwertprobleme, (4) Sampling-Aufgaben - Quantenalgorithmen zur Erzeugung von Stichproben aus bestimmten Verteilungen. Jedoch erfordern klassische Daten oft teure Quantenkodierung, und viele Quantenml-Algorithmen haben klassische Analoga mit ähnlicher Leistung. Aktuelle Forschung konzentriert sich auf die Identifizierung von Problemen mit beweisbarem Quantenvorteil, Entwicklung von NISQ-Era-Algorithmen und Verständnis der Rolle von Quantenhardware-Rauschen bei der Begrenzung praktischer Vorteile.",
          nl: "Quantumvoordeel in machine learning is context-afhankelijk en manifesteert zich in specifieke scenario's: (1) Quantumdata verwerking - wanneer de data zelf quantum is, waardoor kostbare toestand tomografie wordt vermeden, (2) Hoog-dimensionale eigenschap ruimtes - quantum kernel methoden kunnen exponentieel grote eigenschap ruimtes benaderen, (3) Lineaire algebra versnellingen - quantumalgoritmen voor het oplossen van lineaire systemen, matrix inversie, en eigenwaarde problemen, (4) Sampling taken - quantumalgoritmen voor het genereren van samples uit bepaalde distributies. Echter, klassieke data vereist vaak dure quantum encoding, en veel quantum ML algoritmen hebben klassieke analogen met vergelijkbare prestaties. Huidig onderzoek richt zich op het identificeren van problemen met bewezen quantumvoordeel, het ontwikkelen van NISQ-era algoritmen, en het begrijpen van de rol van quantum hardware ruis in het beperken van praktische voordelen."
        }
      },
      {
        question: {
          en: "What is quantum sensing and how does it achieve enhanced precision beyond classical limits?",
          es: "¿Qué es el sensado cuántico y cómo logra precisión mejorada más allá de límites clásicos?",
          de: "Was ist Quantensensorik und wie erreicht sie verbesserte Präzision jenseits klassischer Grenzen?",
          nl: "Wat is quantum sensing en hoe behaalt het verbeterde precisie voorbij klassieke limieten?"
        },
        options: [
          {
            en: "Using quantum superposition, entanglement, and squeezed states to achieve measurement precision scaling as 1/N instead of classical 1/√N",
            es: "Usando superposición cuántica, entrelazamiento, y estados comprimidos para lograr precisión de medición escalando como 1/N en lugar del clásico 1/√N",
            de: "Verwendung von Quantensuperposition, Verschränkung und gequetschten Zuständen, um Messpräzision zu erreichen, die als 1/N statt klassisch 1/√N skaliert",
            nl: "Het gebruik van quantum superpositie, verstrengeling, en gesqueezde toestanden om meetprecisie te bereiken die schaalt als 1/N in plaats van klassiek 1/√N"
          },
          {
            en: "Simply using very cold quantum systems to reduce thermal noise",
            es: "Simplemente usar sistemas cuánticos muy fríos para reducir ruido térmico",
            de: "Einfach sehr kalte Quantensysteme verwenden, um thermisches Rauschen zu reduzieren",
            nl: "Simpelweg zeer koude quantumsystemen gebruiken om thermische ruis te verminderen"
          },
          {
            en: "Quantum sensors that only work in the absence of environmental disturbances",
            es: "Sensores cuánticos que solo funcionan en ausencia de perturbaciones ambientales",
            de: "Quantensensoren, die nur in Abwesenheit von Umweltstörungen funktionieren",
            nl: "Quantumsensoren die alleen werken bij afwezigheid van omgevingsverstoringen"
          },
          {
            en: "Using quantum computers to process classical sensor data more efficiently",
            es: "Usar computadoras cuánticas para procesar datos de sensores clásicos más eficientemente",
            de: "Quantencomputer verwenden, um klassische Sensordaten effizienter zu verarbeiten",
            nl: "Quantumcomputers gebruiken om klassieke sensordata efficiënter te verwerken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum sensing exploits quantum mechanical phenomena to achieve measurement precision beyond classical limits. Key principles include: (1) Heisenberg scaling - using N entangled particles can achieve 1/N precision (Heisenberg limit) versus classical 1/√N scaling (standard quantum limit), (2) Squeezed states - reducing uncertainty in one variable below vacuum fluctuations at the expense of another, (3) Spin squeezing - reducing collective spin variance below coherent state limits, (4) Quantum error correction - protecting quantum sensors from decoherence. Applications include atomic clocks (timekeeping), LIGO (gravitational waves), magnetometry (medical imaging, material characterization), and atomic interferometry (inertial sensing, tests of fundamental physics). Current challenges involve maintaining quantum coherence and developing practical quantum-enhanced sensors for real-world conditions.",
          es: "El sensado cuántico explota fenómenos mecánicos cuánticos para lograr precisión de medición más allá de límites clásicos. Principios clave incluyen: (1) Escalamiento de Heisenberg - usar N partículas entrelazadas puede lograr precisión 1/N (límite de Heisenberg) versus escalamiento clásico 1/√N (límite cuántico estándar), (2) Estados comprimidos - reducir incertidumbre en una variable bajo fluctuaciones de vacío a expensas de otra, (3) Compresión de espín - reducir varianza de espín colectivo bajo límites de estado coherente, (4) Corrección de errores cuánticos - proteger sensores cuánticos de decoherencia. Aplicaciones incluyen relojes atómicos (cronometraje), LIGO (ondas gravitacionales), magnetometría (imagen médica, caracterización de materiales), y interferometría atómica (sensado inercial, pruebas de física fundamental). Desafíos actuales involucran mantener coherencia cuántica y desarrollar sensores cuántico-mejorados prácticos para condiciones del mundo real.",
          de: "Quantensensorik nutzt quantenmechanische Phänomene, um Messpräzision jenseits klassischer Grenzen zu erreichen. Schlüsselprinzipien umfassen: (1) Heisenberg-Skalierung - die Verwendung von N verschränkten Teilchen kann 1/N-Präzision (Heisenberg-Grenze) versus klassische 1/√N-Skalierung (Standard-Quantengrenze) erreichen, (2) Gequetschte Zustände - Verringerung der Unsicherheit in einer Variablen unter Vakuumfluktuationen auf Kosten einer anderen, (3) Spin-Squeezing - Verringerung der kollektiven Spinvarianz unter kohärente Zustandsgrenzen, (4) Quantenfehlerkorrektur - Schutz von Quantensensoren vor Dekohärenz. Anwendungen umfassen Atomuhren (Zeitmessung), LIGO (Gravitationswellen), Magnetometrie (medizinische Bildgebung, Materialcharakterisierung) und atomare Interferometrie (Trägheitssensorik, Tests der Fundamentalphysik). Aktuelle Herausforderungen umfassen die Aufrechterhaltung von Quantenkohärenz und die Entwicklung praktischer quantenverstärkter Sensoren für reale Bedingungen.",
          nl: "Quantum sensing benut quantummechanische fenomenen om meetprecisie voorbij klassieke limieten te bereiken. Sleutelprincipes omvatten: (1) Heisenberg schaling - het gebruik van N verstrengelde deeltjes kan 1/N precisie (Heisenberg limiet) bereiken versus klassieke 1/√N schaling (standaard quantum limiet), (2) Gesqueezde toestanden - het verminderen van onzekerheid in één variabele onder vacuüm fluctuaties ten koste van een andere, (3) Spin squeezing - het verminderen van collectieve spin variantie onder coherente toestand limieten, (4) Quantum foutcorrectie - het beschermen van quantumsensoren tegen decoherentie. Toepassingen omvatten atoomklokken (tijdmeting), LIGO (zwaartekrachtsgolven), magnetometrie (medische beeldvorming, materiaal karakterisering), en atomaire interferometrie (inertiële sensing, tests van fundamentele fysica). Huidige uitdagingen omvatten het behouden van quantumcoherentie en het ontwikkelen van praktische quantum-verbeterde sensoren voor echte wereld condities."
        }
      },
      {
        question: {
          en: "What is the measurement problem in quantum mechanics and proposed solutions?",
          es: "¿Cuál es el problema de medición en mecánica cuántica y soluciones propuestas?",
          de: "Was ist das Messproblem in der Quantenmechanik und vorgeschlagene Lösungen?",
          nl: "Wat is het meetprobleem in quantummechanica en voorgestelde oplossingen?"
        },
        options: [
          {
            en: "The contradiction between unitary evolution and wavefunction collapse, with solutions including Many-Worlds, Copenhagen, and objective collapse theories",
            es: "La contradicción entre evolución unitaria y colapso de función de onda, con soluciones incluyendo Muchos-Mundos, Copenhague, y teorías de colapso objetivo",
            de: "Der Widerspruch zwischen unitärer Evolution und Wellenfunktionskollaps, mit Lösungen einschließlich Viele-Welten, Kopenhagen und objektiven Kollapstheorien",
            nl: "De tegenstelling tussen unitaire evolutie en golffunctie ineenstorting, met oplossingen inclusief Many-Worlds, Kopenhagen, en objectieve ineenstorting theorieën"
          },
          {
            en: "The difficulty of measuring quantum states without sophisticated equipment",
            es: "La dificultad de medir estados cuánticos sin equipo sofisticado",
            de: "Die Schwierigkeit, Quantenzustände ohne ausgeklügelte Ausrüstung zu messen",
            nl: "De moeilijkheid van het meten van quantumtoestanden zonder geavanceerde apparatuur"
          },
          {
            en: "The problem that quantum measurements always introduce errors",
            es: "El problema de que las mediciones cuánticas siempre introducen errores",
            de: "Das Problem, dass Quantenmessungen immer Fehler einführen",
            nl: "Het probleem dat quantummetingen altijd fouten introduceren"
          },
          {
            en: "The limitation that we can only measure one quantum property at a time",
            es: "La limitación de que solo podemos medir una propiedad cuántica a la vez",
            de: "Die Beschränkung, dass wir nur eine Quanteneigenschaft gleichzeitig messen können",
            nl: "De beperking dat we slechts één quantum eigenschap tegelijk kunnen meten"
          }
        ],
        correct: 0,
        explanation: {
          en: "The measurement problem arises from the apparent contradiction between quantum mechanics' unitary evolution (Schrödinger equation) and the non-unitary wavefunction collapse during measurement. The problem asks: when and why does a superposition become a definite outcome? Major proposed solutions include: (1) Copenhagen interpretation - accepts collapse as fundamental but doesn't explain the mechanism, (2) Many-Worlds interpretation - no collapse occurs; all outcomes exist in parallel branches, (3) Objective collapse theories (GRW, CSL) - spontaneous localization occurs for macroscopic systems, (4) De Broglie-Bohm theory - hidden variables determine outcomes, (5) QBism - quantum states represent degrees of belief rather than physical reality. The debate continues and has profound implications for quantum foundations and the nature of reality.",
          es: "El problema de medición surge de la aparente contradicción entre la evolución unitaria de mecánica cuántica (ecuación de Schrödinger) y el colapso no-unitario de función de onda durante medición. El problema pregunta: ¿cuándo y por qué una superposición se vuelve un resultado definido? Soluciones principales propuestas incluyen: (1) Interpretación de Copenhague - acepta colapso como fundamental pero no explica el mecanismo, (2) Interpretación de Muchos-Mundos - no ocurre colapso; todos los resultados existen en ramas paralelas, (3) Teorías de colapso objetivo (GRW, CSL) - localización espontánea ocurre para sistemas macroscópicos, (4) Teoría de De Broglie-Bohm - variables ocultas determinan resultados, (5) QBism - estados cuánticos representan grados de creencia en lugar de realidad física. El debate continúa y tiene implicaciones profundas para fundamentos cuánticos y la naturaleza de la realidad.",
          de: "Das Messproblem entsteht aus dem scheinbaren Widerspruch zwischen der unitären Evolution der Quantenmechanik (Schrödinger-Gleichung) und dem nicht-unitären Wellenfunktionskollaps während der Messung. Das Problem fragt: wann und warum wird eine Superposition zu einem bestimmten Ergebnis? Hauptvorgeschlagene Lösungen umfassen: (1) Kopenhagener Interpretation - akzeptiert Kollaps als fundamental, erklärt aber nicht den Mechanismus, (2) Viele-Welten-Interpretation - kein Kollaps tritt auf; alle Ergebnisse existieren in parallelen Zweigen, (3) Objektive Kollapstheorien (GRW, CSL) - spontane Lokalisierung tritt für makroskopische Systeme auf, (4) De Broglie-Bohm-Theorie - verborgene Variablen bestimmen Ergebnisse, (5) QBism - Quantenzustände repräsentieren Glaubensgrade statt physikalische Realität. Die Debatte geht weiter und hat tiefgreifende Implikationen für Quantenfundamente und die Natur der Realität.",
          nl: "Het meetprobleem ontstaat uit de schijnbare tegenstelling tussen quantum mechanica's unitaire evolutie (Schrödinger vergelijking) en de niet-unitaire golffunctie ineenstorting tijdens meting. Het probleem vraagt: wanneer en waarom wordt een superpositie een definitieve uitkomst? Belangrijke voorgestelde oplossingen omvatten: (1) Kopenhagen interpretatie - accepteert ineenstorting als fundamenteel maar verklaart het mechanisme niet, (2) Many-Worlds interpretatie - geen ineenstorting vindt plaats; alle uitkomsten bestaan in parallelle takken, (3) Objectieve ineenstorting theorieën (GRW, CSL) - spontane lokalisatie treedt op voor macroscopische systemen, (4) De Broglie-Bohm theorie - verborgen variabelen bepalen uitkomsten, (5) QBism - quantumtoestanden vertegenwoordigen mate van geloof in plaats van fysieke werkelijkheid. Het debat gaat door en heeft diepgaande implicaties voor quantum fundamenten en de natuur van de werkelijkheid."
        }
      },
      {
        question: {
          en: "What is the future outlook for quantum computing and its practical applications?",
          es: "¿Cuál es la perspectiva futura para computación cuántica y sus aplicaciones prácticas?",
          de: "Wie ist der Zukunftsausblick für Quantencomputing und seine praktischen Anwendungen?",
          nl: "Wat is de toekomst vooruitzicht voor quantum computing en zijn praktische toepassingen?"
        },
        options: [
          {
            en: "Near-term NISQ applications in optimization and simulation, with fault-tolerant quantum computing enabling transformative applications in cryptography, drug discovery, and materials science",
            es: "Aplicaciones NISQ de corto plazo en optimización y simulación, con computación cuántica tolerante a fallos habilitando aplicaciones transformativas en criptografía, descubrimiento de fármacos, y ciencia de materiales",
            de: "Kurzfristige NISQ-Anwendungen in Optimierung und Simulation, wobei fehlertolerante Quantenberechnung transformative Anwendungen in Kryptographie, Medikamentenentdeckung und Materialwissenschaft ermöglicht",
            nl: "Nabije-termijn NISQ toepassingen in optimalisatie en simulatie, waarbij fouttolerant quantum computing transformatieve toepassingen mogelijk maakt in cryptografie, medicijn ontdekking, en materiaalwetenschap"
          },
          {
            en: "Quantum computers will completely replace all classical computers within the next decade",
            es: "Las computadoras cuánticas reemplazarán completamente todas las computadoras clásicas dentro de la próxima década",
            de: "Quantencomputer werden alle klassischen Computer innerhalb des nächsten Jahrzehnts vollständig ersetzen",
            nl: "Quantumcomputers zullen alle klassieke computers binnen het volgende decennium volledig vervangen"
          },
          {
            en: "Quantum computing will remain purely theoretical with no practical applications",
            es: "La computación cuántica permanecerá puramente teórica sin aplicaciones prácticas",
            de: "Quantencomputing wird rein theoretisch bleiben ohne praktische Anwendungen",
            nl: "Quantum computing zal puur theoretisch blijven zonder praktische toepassingen"
          },
          {
            en: "Only governments and large corporations will have access to quantum computers",
            es: "Solo gobiernos y grandes corporaciones tendrán acceso a computadoras cuánticas",
            de: "Nur Regierungen und große Unternehmen werden Zugang zu Quantencomputern haben",
            nl: "Alleen overheden en grote bedrijven zullen toegang hebben tot quantumcomputers"
          }
        ],
        correct: 0,
        explanation: {
          en: "The future of quantum computing unfolds in phases: (1) NISQ era (current) - 50-1000 noisy qubits for specific applications like optimization, quantum chemistry simulation, and machine learning with potential quantum advantages, (2) Early fault-tolerant era (2030s) - hundreds to thousands of logical qubits enabling more complex algorithms like Shor's algorithm for practical cryptographic applications, (3) Mature quantum computing (2040s+) - millions of qubits enabling transformative applications in drug discovery, materials design, financial modeling, and artificial intelligence. Key challenges include scaling up qubit counts, improving gate fidelities, developing error correction, and creating quantum software stacks. The technology will likely coexist with classical computers, each excelling in different domains, rather than replacing them entirely.",
          es: "El futuro de computación cuántica se desarrolla en fases: (1) Era NISQ (actual) - 50-1000 qubits ruidosos para aplicaciones específicas como optimización, simulación de química cuántica, y aprendizaje automático con ventajas cuánticas potenciales, (2) Era temprana tolerante a fallos (2030s) - cientos a miles de qubits lógicos habilitando algoritmos más complejos como el algoritmo de Shor para aplicaciones criptográficas prácticas, (3) Computación cuántica madura (2040s+) - millones de qubits habilitando aplicaciones transformativas en descubrimiento de fármacos, diseño de materiales, modelado financiero, e inteligencia artificial. Desafíos clave incluyen escalar conteos de qubits, mejorar fidelidades de puertas, desarrollar corrección de errores, y crear pilas de software cuántico. La tecnología probablemente coexistirá con computadoras clásicas, cada una sobresaliendo en diferentes dominios, en lugar de reemplazarlas completamente.",
          de: "Die Zukunft des Quantencomputing entfaltet sich in Phasen: (1) NISQ-Ära (aktuell) - 50-1000 verrauschte Qubits für spezifische Anwendungen wie Optimierung, Quantenchemie-Simulation und maschinelles Lernen mit potenziellen Quantenvorteilen, (2) Frühe fehlertolerante Ära (2030er) - Hunderte bis Tausende logischer Qubits ermöglichen komplexere Algorithmen wie Shors Algorithmus für praktische kryptographische Anwendungen, (3) Reife Quantenberechnung (2040er+) - Millionen von Qubits ermöglichen transformative Anwendungen in Medikamentenentdeckung, Materialdesign, Finanzmodellierung und künstlicher Intelligenz. Schlüsselherausforderungen umfassen die Skalierung von Qubit-Zahlen, Verbesserung der Gate-Treue, Entwicklung von Fehlerkorrektur und Erstellung von Quantum-Software-Stacks. Die Technologie wird wahrscheinlich mit klassischen Computern koexistieren, wobei jede in verschiedenen Bereichen excelliert, anstatt sie vollständig zu ersetzen.",
          nl: "De toekomst van quantum computing ontvouwt zich in fasen: (1) NISQ era (huidig) - 50-1000 ruizige qubits voor specifieke toepassingen zoals optimalisatie, quantumchemie simulatie, en machine learning met potentiële quantumvoordelen, (2) Vroege fouttolerant era (2030s) - honderden tot duizenden logische qubits die complexere algoritmen mogelijk maken zoals Shor's algoritme voor praktische cryptografische toepassingen, (3) Volwassen quantum computing (2040s+) - miljoenen qubits die transformatieve toepassingen mogelijk maken in medicijnontdekking, materiaalontwerp, financiële modellering, en kunstmatige intelligentie. Belangrijke uitdagingen omvatten het opschalen van qubit aantallen, het verbeteren van gate fideliteiten, het ontwikkelen van foutcorrectie, en het creëren van quantum software stacks. De technologie zal waarschijnlijk naast klassieke computers bestaan, elk excellerend in verschillende domeinen, in plaats van ze volledig te vervangen."
        }
      },
      {
        question: {
          en: "What is quantum supremacy/advantage and how is it demonstrated experimentally?",
          es: "¿Qué es la supremacía/ventaja cuántica y cómo se demuestra experimentalmente?",
          de: "Was ist Quantenüberlegenheit/Quantenvorteil und wie wird sie experimentell demonstriert?",
          nl: "Wat is quantum supremacy/voordeel en hoe wordt het experimenteel aangetoond?"
        },
        options: [
          {
            en: "Demonstrating that a quantum computer can solve specific problems faster than any classical computer, proven through benchmarking tasks like random circuit sampling",
            es: "Demostrar que una computadora cuántica puede resolver problemas específicos más rápido que cualquier computadora clásica, probado a través de tareas de benchmark como muestreo de circuitos aleatorios",
            de: "Nachweis, dass ein Quantencomputer spezifische Probleme schneller lösen kann als jeder klassische Computer, bewiesen durch Benchmark-Aufgaben wie zufällige Schaltkreis-Stichproben",
            nl: "Aantonen dat een quantumcomputer specifieke problemen sneller kan oplossen dan elke klassieke computer, bewezen door benchmark taken zoals willekeurige circuit bemonstering"
          },
          {
            en: "The ability of quantum computers to solve any problem exponentially faster than classical computers",
            es: "La capacidad de computadoras cuánticas de resolver cualquier problema exponencialmente más rápido que computadoras clásicas",
            de: "Die Fähigkeit von Quantencomputern, jedes Problem exponentiell schneller zu lösen als klassische Computer",
            nl: "Het vermogen van quantumcomputers om elk probleem exponentieel sneller op te lossen dan klassieke computers"
          },
          {
            en: "Quantum computers that can break all current encryption methods simultaneously",
            es: "Computadoras cuánticas que pueden romper todos los métodos de encriptación actuales simultáneamente",
            de: "Quantencomputer, die alle aktuellen Verschlüsselungsmethoden gleichzeitig brechen können",
            nl: "Quantumcomputers die alle huidige encryptie methoden gelijktijdig kunnen breken"
          },
          {
            en: "The theoretical limit where quantum computers become conscious and self-aware",
            es: "El límite teórico donde las computadoras cuánticas se vuelven conscientes y autoconscientes",
            de: "Die theoretische Grenze, bei der Quantencomputer bewusst und selbstbewusst werden",
            nl: "De theoretische limiet waarbij quantumcomputers bewust en zelf-bewust worden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum supremacy (now often called quantum advantage) refers to the demonstration that a quantum computer can solve a specific computational problem faster than the best known classical algorithms running on the most powerful supercomputers. Key milestones include: (1) Google's 2019 claim with their 53-qubit Sycamore processor solving a random circuit sampling problem, (2) IBM's challenges and classical algorithm improvements highlighting the ongoing nature of this competition, (3) Recent demonstrations by various groups in different problem domains. The tasks are typically chosen to be hard for classical computers but natural for quantum ones, though they may lack immediate practical applications. This demonstrates the potential for quantum advantage in more practically relevant problems.",
          es: "La supremacía cuántica (ahora a menudo llamada ventaja cuántica) se refiere a la demostración de que una computadora cuántica puede resolver un problema computacional específico más rápido que los mejores algoritmos clásicos conocidos ejecutándose en las supercomputadoras más poderosas. Hitos clave incluyen: (1) La afirmación de Google en 2019 con su procesador Sycamore de 53-qubit resolviendo un problema de muestreo de circuitos aleatorios, (2) Los desafíos de IBM y mejoras de algoritmos clásicos destacando la naturaleza continua de esta competencia, (3) Demostraciones recientes por varios grupos en diferentes dominios de problemas. Las tareas típicamente se eligen para ser difíciles para computadoras clásicas pero naturales para cuánticas, aunque pueden carecer de aplicaciones prácticas inmediatas. Esto demuestra el potencial para ventaja cuántica en problemas más prácticamente relevantes.",
          de: "Quantenüberlegenheit (jetzt oft Quantenvorteil genannt) bezieht sich auf den Nachweis, dass ein Quantencomputer ein spezifisches Berechnungsproblem schneller lösen kann als die besten bekannten klassischen Algorithmen auf den leistungsstärksten Supercomputern. Wichtige Meilensteine umfassen: (1) Googles Behauptung 2019 mit ihrem 53-Qubit-Sycamore-Prozessor, der ein zufälliges Schaltkreis-Stichprobenproblem löste, (2) IBMs Herausforderungen und klassische Algorithmusverbesserungen, die die fortwährende Natur dieses Wettbewerbs hervorheben, (3) Jüngste Demonstrationen verschiedener Gruppen in verschiedenen Problembereichen. Die Aufgaben werden typischerweise so gewählt, dass sie für klassische Computer schwer, aber für Quantencomputer natürlich sind, obwohl ihnen unmittelbare praktische Anwendungen fehlen können. Dies demonstriert das Potenzial für Quantenvorteile in praktisch relevanteren Problemen.",
          nl: "Quantum supremacy (nu vaak quantum voordeel genoemd) verwijst naar de demonstratie dat een quantumcomputer een specifiek computationeel probleem sneller kan oplossen dan de best bekende klassieke algoritmen die draaien op de krachtigste supercomputers. Belangrijke mijlpalen omvatten: (1) Google's 2019 bewering met hun 53-qubit Sycamore processor die een willekeurig circuit bemonstering probleem oploste, (2) IBM's uitdagingen en klassieke algoritme verbeteringen die de voortdurende aard van deze competitie benadrukken, (3) Recente demonstraties door verschillende groepen in verschillende probleemgebieden. De taken worden typisch gekozen om moeilijk te zijn voor klassieke computers maar natuurlijk voor quantum computers, hoewel ze mogelijk directe praktische toepassingen missen. Dit toont het potentieel voor quantumvoordeel in meer praktisch relevante problemen."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mind-bender/quantum-physics', level10);
  }
})();
