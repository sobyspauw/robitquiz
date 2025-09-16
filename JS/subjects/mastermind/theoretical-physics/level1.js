// Theoretical Physics - Level 1: Foundations of Quantum Mechanics
(function() {
  const level1 = {
    name: {
      en: "Foundations of Quantum Mechanics",
      es: "Fundamentos de la Mecánica Cuántica",
      de: "Grundlagen der Quantenmechanik",
      nl: "Grondslagen van de Kwantummechanica"
    },
    questions: [
      {
        question: {
          en: "What is the fundamental postulate of wave-particle duality?",
          es: "¿Cuál es el postulado fundamental de la dualidad onda-partícula?",
          de: "Was ist das fundamentale Postulat der Welle-Teilchen-Dualität?",
          nl: "Wat is het fundamentele postulaat van golf-deeltje dualiteit?"
        },
        options: [
          {
            en: "All matter and energy exhibit both wave and particle properties",
            es: "Toda materia y energía exhiben propiedades tanto de onda como de partícula",
            de: "Alle Materie und Energie zeigen sowohl Wellen- als auch Teilcheneigenschaften",
            nl: "Alle materie en energie vertonen zowel golf- als deeltje-eigenschappen"
          },
          {
            en: "Only photons have wave properties",
            es: "Solo los fotones tienen propiedades de onda",
            de: "Nur Photonen haben Welleneigenschaften",
            nl: "Alleen fotonen hebben golfeigenschappen"
          },
          {
            en: "Electrons are purely particles",
            es: "Los electrones son puramente partículas",
            de: "Elektronen sind reine Teilchen",
            nl: "Elektronen zijn puur deeltjes"
          },
          {
            en: "Waves and particles are mutually exclusive",
            es: "Las ondas y partículas son mutuamente excluyentes",
            de: "Wellen und Teilchen schließen sich gegenseitig aus",
            nl: "Golven en deeltjes sluiten elkaar uit"
          }
        ],
        correct: 0,
        explanation: {
          en: "Wave-particle duality is a fundamental principle of quantum mechanics stating that all matter and energy exhibit both wave-like and particle-like properties, depending on the experimental context and measurement approach.",
          es: "La dualidad onda-partícula es un principio fundamental de la mecánica cuántica que establece que toda materia y energía exhiben propiedades tanto de onda como de partícula, dependiendo del contexto experimental y el enfoque de medición.",
          de: "Die Welle-Teilchen-Dualität ist ein fundamentales Prinzip der Quantenmechanik, das besagt, dass alle Materie und Energie sowohl wellenähnliche als auch teilchenähnliche Eigenschaften zeigen, abhängig vom experimentellen Kontext und Messansatz.",
          nl: "Golf-deeltje dualiteit is een fundamenteel principe van de kwantummechanica dat stelt dat alle materie en energie zowel golf-achtige als deeltje-achtige eigenschappen vertonen, afhankelijk van de experimentele context en meetbenadering."
        }
      },
      {
        question: {
          en: "What does Heisenberg's uncertainty principle state?",
          es: "¿Qué establece el principio de incertidumbre de Heisenberg?",
          de: "Was besagt Heisenbergs Unschärferelation?",
          nl: "Wat stelt Heisenbergs onzekerheidsbeginsel?"
        },
        options: [
          {
            en: "Position and momentum cannot be simultaneously determined with perfect precision",
            es: "La posición y el momento no pueden determinarse simultáneamente con precisión perfecta",
            de: "Ort und Impuls können nicht gleichzeitig mit perfekter Genauigkeit bestimmt werden",
            nl: "Positie en momentum kunnen niet gelijktijdig met perfecte precisie worden bepaald"
          },
          {
            en: "Energy can be created from nothing",
            es: "La energía puede crearse de la nada",
            de: "Energie kann aus dem Nichts entstehen",
            nl: "Energie kan uit niets worden gecreëerd"
          },
          {
            en: "Particles have definite trajectories",
            es: "Las partículas tienen trayectorias definidas",
            de: "Teilchen haben definite Bahnen",
            nl: "Deeltjes hebben bepaalde trajecten"
          },
          {
            en: "Quantum systems are always deterministic",
            es: "Los sistemas cuánticos son siempre deterministas",
            de: "Quantensysteme sind immer deterministisch",
            nl: "Kwantumsystemen zijn altijd deterministisch"
          }
        ],
        correct: 0,
        explanation: {
          en: "Heisenberg's uncertainty principle states that the more precisely the position of a particle is determined, the less precisely its momentum can be known, and vice versa. This is expressed as Δx·Δp ≥ ℏ/2.",
          es: "El principio de incertidumbre de Heisenberg establece que cuanto más precisamente se determina la posición de una partícula, menos precisamente se puede conocer su momento, y viceversa. Esto se expresa como Δx·Δp ≥ ℏ/2.",
          de: "Heisenbergs Unschärferelation besagt, dass je genauer die Position eines Teilchens bestimmt wird, desto ungenauer kann sein Impuls bekannt sein, und umgekehrt. Dies wird ausgedrückt als Δx·Δp ≥ ℏ/2.",
          nl: "Heisenbergs onzekerheidsbeginsel stelt dat hoe preciezer de positie van een deeltje wordt bepaald, hoe minder precies zijn momentum kan worden gekend, en omgekeerd. Dit wordt uitgedrukt als Δx·Δp ≥ ℏ/2."
        }
      },
      {
        question: {
          en: "What is the Schrödinger equation?",
          es: "¿Qué es la ecuación de Schrödinger?",
          de: "Was ist die Schrödinger-Gleichung?",
          nl: "Wat is de Schrödinger-vergelijking?"
        },
        options: [
          {
            en: "The fundamental equation describing the time evolution of quantum systems",
            es: "La ecuación fundamental que describe la evolución temporal de los sistemas cuánticos",
            de: "Die fundamentale Gleichung, die die Zeitentwicklung von Quantensystemen beschreibt",
            nl: "De fundamentele vergelijking die de tijdsevolutie van kwantumsystemen beschrijft"
          },
          {
            en: "An equation for calculating classical trajectories",
            es: "Una ecuación para calcular trayectorias clásicas",
            de: "Eine Gleichung zur Berechnung klassischer Bahnen",
            nl: "Een vergelijking voor het berekenen van klassieke trajecten"
          },
          {
            en: "A formula for electromagnetic radiation",
            es: "Una fórmula para radiación electromagnética",
            de: "Eine Formel für elektromagnetische Strahlung",
            nl: "Een formule voor elektromagnetische straling"
          },
          {
            en: "A thermodynamic relation",
            es: "Una relación termodinámica",
            de: "Eine thermodynamische Beziehung",
            nl: "Een thermodynamische relatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Schrödinger equation is the fundamental equation of quantum mechanics that describes how the quantum state of a physical system changes with time. It's written as iℏ∂ψ/∂t = Ĥψ, where ψ is the wavefunction and Ĥ is the Hamiltonian operator.",
          es: "La ecuación de Schrödinger es la ecuación fundamental de la mecánica cuántica que describe cómo cambia con el tiempo el estado cuántico de un sistema físico. Se escribe como iℏ∂ψ/∂t = Ĥψ, donde ψ es la función de onda y Ĥ es el operador hamiltoniano.",
          de: "Die Schrödinger-Gleichung ist die fundamentale Gleichung der Quantenmechanik, die beschreibt, wie sich der Quantenzustand eines physikalischen Systems mit der Zeit ändert. Sie wird als iℏ∂ψ/∂t = Ĥψ geschrieben, wobei ψ die Wellenfunktion und Ĥ der Hamilton-Operator ist.",
          nl: "De Schrödinger-vergelijking is de fundamentele vergelijking van de kwantummechanica die beschrijft hoe de kwantumtoestand van een fysiek systeem verandert met de tijd. Het wordt geschreven als iℏ∂ψ/∂t = Ĥψ, waarbij ψ de golffunctie is en Ĥ de Hamiltoniaanse operator."
        }
      },
      {
        question: {
          en: "What does the Born interpretation of the wavefunction state?",
          es: "¿Qué establece la interpretación de Born de la función de onda?",
          de: "Was besagt die Born-Interpretation der Wellenfunktion?",
          nl: "Wat stelt de Born-interpretatie van de golffunctie?"
        },
        options: [
          {
            en: "The square of the wavefunction amplitude gives the probability density",
            es: "El cuadrado de la amplitud de la función de onda da la densidad de probabilidad",
            de: "Das Quadrat der Wellenfunktionsamplitude gibt die Wahrscheinlichkeitsdichte",
            nl: "Het kwadraat van de golffunctie-amplitude geeft de waarschijnlijkheidsdichtheid"
          },
          {
            en: "The wavefunction directly represents physical reality",
            es: "La función de onda representa directamente la realidad física",
            de: "Die Wellenfunktion repräsentiert direkt die physikalische Realität",
            nl: "De golffunctie vertegenwoordigt direct de fysieke realiteit"
          },
          {
            en: "Particles have definite positions at all times",
            es: "Las partículas tienen posiciones definidas en todo momento",
            de: "Teilchen haben zu allen Zeiten definite Positionen",
            nl: "Deeltjes hebben te allen tijde bepaalde posities"
          },
          {
            en: "Quantum mechanics is incomplete",
            es: "La mecánica cuántica está incompleta",
            de: "Die Quantenmechanik ist unvollständig",
            nl: "De kwantummechanica is incompleet"
          }
        ],
        correct: 0,
        explanation: {
          en: "Born's statistical interpretation states that |ψ|² represents the probability density of finding a particle at a particular location when measured. This probabilistic interpretation is fundamental to quantum mechanics.",
          es: "La interpretación estadística de Born establece que |ψ|² representa la densidad de probabilidad de encontrar una partícula en una ubicación particular cuando se mide. Esta interpretación probabilística es fundamental para la mecánica cuántica.",
          de: "Borns statistische Interpretation besagt, dass |ψ|² die Wahrscheinlichkeitsdichte repräsentiert, ein Teilchen an einem bestimmten Ort zu finden, wenn es gemessen wird. Diese probabilistische Interpretation ist fundamental für die Quantenmechanik.",
          nl: "Born's statistische interpretatie stelt dat |ψ|² de waarschijnlijkheidsdichtheid vertegenwoordigt van het vinden van een deeltje op een bepaalde locatie wanneer gemeten. Deze probabilistische interpretatie is fundamenteel voor de kwantummechanica."
        }
      },
      {
        question: {
          en: "What is quantum superposition?",
          es: "¿Qué es la superposición cuántica?",
          de: "Was ist Quantensuperposition?",
          nl: "Wat is kwantumsuperpositie?"
        },
        options: [
          {
            en: "A quantum system can exist in multiple states simultaneously until measured",
            es: "Un sistema cuántico puede existir en múltiples estados simultáneamente hasta ser medido",
            de: "Ein Quantensystem kann gleichzeitig in mehreren Zuständen existieren, bis es gemessen wird",
            nl: "Een kwantumsysteem kan gelijktijdig in meerdere toestanden bestaan totdat het wordt gemeten"
          },
          {
            en: "Particles can only exist in one definite state",
            es: "Las partículas solo pueden existir in un estado definido",
            de: "Teilchen können nur in einem definierten Zustand existieren",
            nl: "Deeltjes kunnen alleen in één bepaalde toestand bestaan"
          },
          {
            en: "Classical systems superimposed on quantum ones",
            es: "Sistemas clásicos superpuestos en sistemas cuánticos",
            de: "Klassische Systeme, die auf Quantensysteme überlagert sind",
            nl: "Klassieke systemen gesuperponeerd op kwantumsystemen"
          },
          {
            en: "The addition of quantum energies",
            es: "La suma de energías cuánticas",
            de: "Die Addition von Quantenenergien",
            nl: "De optelling van kwantumenergieën"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum superposition is the ability of a quantum system to be in a combination of multiple states at the same time. The system exists in all possible states simultaneously until a measurement collapses it to a definite state.",
          es: "La superposición cuántica es la capacidad de un sistema cuántico de estar en una combinación de múltiples estados al mismo tiempo. El sistema existe en todos los estados posibles simultáneamente hasta que una medición lo colapsa a un estado definido.",
          de: "Quantensuperposition ist die Fähigkeit eines Quantensystems, gleichzeitig in einer Kombination mehrerer Zustände zu sein. Das System existiert gleichzeitig in allen möglichen Zuständen, bis eine Messung es zu einem definierten Zustand kollabiert.",
          nl: "Kwantumsuperpositie is het vermogen van een kwantumsysteem om tegelijkertijd in een combinatie van meerdere toestanden te zijn. Het systeem bestaat gelijktijdig in alle mogelijke toestanden totdat een meting het laat instorten tot een bepaalde toestand."
        }
      },
      {
        question: {
          en: "What is quantum entanglement?",
          es: "¿Qué es el entrelazamiento cuántico?",
          de: "Was ist Quantenverschränkung?",
          nl: "Wat is kwantumverstrengeling?"
        },
        options: [
          {
            en: "A phenomenon where particles remain correlated regardless of distance",
            es: "Un fenómeno donde las partículas permanecen correlacionadas independientemente de la distancia",
            de: "Ein Phänomen, bei dem Teilchen unabhängig von der Entfernung korreliert bleiben",
            nl: "Een fenomeen waarbij deeltjes gecorreleerd blijven ongeacht de afstand"
          },
          {
            en: "Particles getting physically tangled together",
            es: "Partículas que se enredan físicamente juntas",
            de: "Teilchen, die physikalisch miteinander verheddert sind",
            nl: "Deeltjes die fysiek met elkaar verstrikt raken"
          },
          {
            en: "The collision of quantum particles",
            es: "La colisión de partículas cuánticas",
            de: "Die Kollision von Quantenteilchen",
            nl: "De botsing van kwantumdeeltjes"
          },
          {
            en: "Classical correlation between objects",
            es: "Correlación clásica entre objetos",
            de: "Klassische Korrelation zwischen Objekten",
            nl: "Klassieke correlatie tussen objecten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum entanglement occurs when particles interact in ways such that the quantum state of each particle cannot be described independently. Measuring one particle instantaneously affects the state of its entangled partner, regardless of distance.",
          es: "El entrelazamiento cuántico ocurre cuando las partículas interactúan de maneras tales que el estado cuántico de cada partícula no puede describirse independientemente. Medir una partícula afecta instantáneamente el estado de su compañera entrelazada, independientemente de la distancia.",
          de: "Quantenverschränkung tritt auf, wenn Teilchen auf eine Weise interagieren, dass der Quantenzustand jedes Teilchens nicht unabhängig beschrieben werden kann. Die Messung eines Teilchens beeinflusst sofort den Zustand seines verschränkten Partners, unabhängig von der Entfernung.",
          nl: "Kwantumverstrengeling treedt op wanneer deeltjes op zodanige wijze interacteren dat de kwantumtoestand van elk deeltje niet onafhankelijk kan worden beschreven. Het meten van één deeltje beïnvloedt onmiddellijk de toestand van zijn verstrengelde partner, ongeacht de afstand."
        }
      },
      {
        question: {
          en: "What is the quantum measurement problem?",
          es: "¿Qué es el problema de medición cuántica?",
          de: "Was ist das Quantenmessungsproblem?",
          nl: "Wat is het kwantummeetprobleem?"
        },
        options: [
          {
            en: "How and why measurement causes wavefunction collapse",
            es: "Cómo y por qué la medición causa el colapso de la función de onda",
            de: "Wie und warum Messung den Wellenfunktionskollaps verursacht",
            nl: "Hoe en waarom meting golffunctie-ineenstorting veroorzaakt"
          },
          {
            en: "The difficulty of measuring very small distances",
            es: "La dificultad de medir distancias muy pequeñas",
            de: "Die Schwierigkeit, sehr kleine Entfernungen zu messen",
            nl: "De moeilijkheid van het meten van zeer kleine afstanden"
          },
          {
            en: "Quantum computers being unreliable",
            es: "Las computadoras cuánticas siendo poco confiables",
            de: "Quantencomputer sind unzuverlässig",
            nl: "Kwantumcomputers zijn onbetrouwbaar"
          },
          {
            en: "The high cost of quantum experiments",
            es: "El alto costo de los experimentos cuánticos",
            de: "Die hohen Kosten von Quantenexperimenten",
            nl: "De hoge kosten van kwantumexperimenten"
          }
        ],
        correct: 0,
        explanation: {
          en: "The measurement problem asks why and how the act of measurement causes a quantum system to transition from a superposition of states to a single definite state (wavefunction collapse), a process not described by the Schrödinger equation.",
          es: "El problema de medición pregunta por qué y cómo el acto de medición causa que un sistema cuántico haga la transición de una superposición de estados a un solo estado definido (colapso de la función de onda), un proceso no descrito por la ecuación de Schrödinger.",
          de: "Das Messungsproblem fragt, warum und wie der Messvorgang dazu führt, dass ein Quantensystem von einer Superposition von Zuständen zu einem einzigen definierten Zustand (Wellenfunktionskollaps) übergeht, ein Prozess, der nicht durch die Schrödinger-Gleichung beschrieben wird.",
          nl: "Het meetprobleem vraagt waarom en hoe de handeling van meten ervoor zorgt dat een kwantumsysteem overgaat van een superpositie van toestanden naar een enkele bepaalde toestand (golffunctie-ineenstorting), een proces niet beschreven door de Schrödinger-vergelijking."
        }
      },
      {
        question: {
          en: "What is the de Broglie wavelength?",
          es: "¿Qué es la longitud de onda de De Broglie?",
          de: "Was ist die de-Broglie-Wellenlänge?",
          nl: "Wat is de de Broglie-golflengte?"
        },
        options: [
          {
            en: "λ = h/p, the wavelength associated with any particle's momentum",
            es: "λ = h/p, la longitud de onda asociada con el momento de cualquier partícula",
            de: "λ = h/p, die Wellenlänge, die mit dem Impuls eines Teilchens verbunden ist",
            nl: "λ = h/p, de golflengte geassocieerd met het momentum van een deeltje"
          },
          {
            en: "The wavelength of electromagnetic radiation only",
            es: "La longitud de onda de la radiación electromagnética solamente",
            de: "Die Wellenlänge nur von elektromagnetischer Strahlung",
            nl: "De golflengte van alleen elektromagnetische straling"
          },
          {
            en: "A constant equal to Planck's constant",
            es: "Una constante igual a la constante de Planck",
            de: "Eine Konstante gleich dem Planckschen Wirkungsquantum",
            nl: "Een constante gelijk aan Planck's constante"
          },
          {
            en: "The size of atomic nuclei",
            es: "El tamaño de los núcleos atómicos",
            de: "Die Größe von Atomkernen",
            nl: "De grootte van atoomkernen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The de Broglie wavelength λ = h/p relates a particle's momentum p to its associated wavelength, where h is Planck's constant. This relationship extends wave properties to all matter, not just light.",
          es: "La longitud de onda de De Broglie λ = h/p relaciona el momento p de una partícula con su longitud de onda asociada, donde h es la constante de Planck. Esta relación extiende las propiedades de onda a toda la materia, no solo a la luz.",
          de: "Die de-Broglie-Wellenlänge λ = h/p verknüpft den Impuls p eines Teilchens mit seiner zugehörigen Wellenlänge, wobei h das Plancksche Wirkungsquantum ist. Diese Beziehung erweitert Welleneigenschaften auf alle Materie, nicht nur auf Licht.",
          nl: "De de Broglie-golflengte λ = h/p relateert het momentum p van een deeltje aan zijn geassocieerde golflengte, waarbij h Planck's constante is. Deze relatie breidt golfeigenschappen uit naar alle materie, niet alleen licht."
        }
      },
      {
        question: {
          en: "What is the correspondence principle?",
          es: "¿Qué es el principio de correspondencia?",
          de: "Was ist das Korrespondenzprinzip?",
          nl: "Wat is het correspondentieprincipe?"
        },
        options: [
          {
            en: "Quantum mechanics must reduce to classical mechanics in the appropriate limit",
            es: "La mecánica cuántica debe reducirse a la mecánica clásica en el límite apropiado",
            de: "Die Quantenmechanik muss sich im entsprechenden Grenzfall auf die klassische Mechanik reduzieren",
            nl: "Kwantummechanica moet reduceren tot klassieke mechanica in de juiste limiet"
          },
          {
            en: "All physical theories are equivalent",
            es: "Todas las teorías físicas son equivalentes",
            de: "Alle physikalischen Theorien sind äquivalent",
            nl: "Alle fysieke theorieën zijn equivalent"
          },
          {
            en: "Quantum mechanics replaces classical physics entirely",
            es: "La mecánica cuántica reemplaza completamente la física clásica",
            de: "Die Quantenmechanik ersetzt die klassische Physik vollständig",
            nl: "Kwantummechanica vervangt klassieke fysica volledig"
          },
          {
            en: "Mathematics and physics are unrelated",
            es: "Las matemáticas y la física no están relacionadas",
            de: "Mathematik und Physik sind unabhängig",
            nl: "Wiskunde en fysica zijn ongerelateerd"
          }
        ],
        correct: 0,
        explanation: {
          en: "The correspondence principle states that quantum mechanical descriptions must reproduce classical physics in the limit where quantum effects become negligible (large quantum numbers, macroscopic objects).",
          es: "El principio de correspondencia establece que las descripciones de la mecánica cuántica deben reproducir la física clásica en el límite donde los efectos cuánticos se vuelven despreciables (números cuánticos grandes, objetos macroscópicos).",
          de: "Das Korrespondenzprinzip besagt, dass quantenmechanische Beschreibungen die klassische Physik im Grenzfall reproduzieren müssen, wo Quanteneffekte vernachlässigbar werden (große Quantenzahlen, makroskopische Objekte).",
          nl: "Het correspondentieprincipe stelt dat kwantummechanische beschrijvingen de klassieke fysica moeten reproduceren in de limiet waar kwantumeffecten verwaarloosbaar worden (grote kwantumgetallen, macroscopische objecten)."
        }
      },
      {
        question: {
          en: "What is the quantum harmonic oscillator?",
          es: "¿Qué es el oscilador armónico cuántico?",
          de: "Was ist der Quantenharmonische Oszillator?",
          nl: "Wat is de kwantum harmonische oscillator?"
        },
        options: [
          {
            en: "A quantum system with energy levels En = ℏω(n + 1/2)",
            es: "Un sistema cuántico con niveles de energía En = ℏω(n + 1/2)",
            de: "Ein Quantensystem mit Energieniveaus En = ℏω(n + 1/2)",
            nl: "Een kwantumsysteem met energieniveaus En = ℏω(n + 1/2)"
          },
          {
            en: "A classical spring-mass system",
            es: "Un sistema clásico de resorte-masa",
            de: "Ein klassisches Feder-Masse-System",
            nl: "Een klassiek veer-massa systeem"
          },
          {
            en: "A rotating rigid body",
            es: "Un cuerpo rígido en rotación",
            de: "Ein rotierender starrer Körper",
            nl: "Een roterend star lichaam"
          },
          {
            en: "An electromagnetic wave",
            es: "Una onda electromagnética",
            de: "Eine elektromagnetische Welle",
            nl: "Een elektromagnetische golf"
          }
        ],
        correct: 0,
        explanation: {
          en: "The quantum harmonic oscillator is a fundamental quantum system with equally spaced energy levels En = ℏω(n + 1/2), where n = 0, 1, 2, ... and ω is the angular frequency. The zero-point energy ℏω/2 is a purely quantum mechanical effect.",
          es: "El oscilador armónico cuántico es un sistema cuántico fundamental con niveles de energía igualmente espaciados En = ℏω(n + 1/2), donde n = 0, 1, 2, ... y ω es la frecuencia angular. La energía de punto cero ℏω/2 es un efecto puramente de mecánica cuántica.",
          de: "Der Quantenharmonische Oszillator ist ein fundamentales Quantensystem mit gleichmäßig verteilten Energieniveaus En = ℏω(n + 1/2), wobei n = 0, 1, 2, ... und ω die Winkelfrequenz ist. Die Nullpunktsenergie ℏω/2 ist ein rein quantenmechanischer Effekt.",
          nl: "De kwantum harmonische oscillator is een fundamentaal kwantumsysteem met gelijk gespreide energieniveaus En = ℏω(n + 1/2), waarbij n = 0, 1, 2, ... en ω de hoekfrequentie is. De nulpuntsenergie ℏω/2 is een puur kwantummechanisch effect."
        }
      },
      {
        question: {
          en: "What is the tunnel effect in quantum mechanics?",
          es: "¿Qué es el efecto túnel en mecánica cuántica?",
          de: "Was ist der Tunneleffekt in der Quantenmechanik?",
          nl: "Wat is het tunneleffect in de kwantummechanica?"
        },
        options: [
          {
            en: "Particles can penetrate potential barriers they classically cannot cross",
            es: "Las partículas pueden penetrar barreras de potencial que clásicamente no pueden cruzar",
            de: "Teilchen können Potentialbarrieren durchdringen, die sie klassisch nicht überwinden können",
            nl: "Deeltjes kunnen potentiaalbarrières penetreren die ze klassiek niet kunnen oversteken"
          },
          {
            en: "Particles create physical tunnels in materials",
            es: "Las partículas crean túneles físicos en los materiales",
            de: "Teilchen schaffen physische Tunnel in Materialien",
            nl: "Deeltjes creëren fysieke tunnels in materialen"
          },
          {
            en: "The collapse of wavefunctions under measurement",
            es: "El colapso de las funciones de onda bajo medición",
            de: "Der Kollaps von Wellenfunktionen unter Messung",
            nl: "De ineenstorting van golffuncties onder meting"
          },
          {
            en: "The interaction between light and matter",
            es: "La interacción entre luz y materia",
            de: "Die Wechselwirkung zwischen Licht und Materie",
            nl: "De interactie tussen licht en materie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum tunneling allows particles to pass through potential energy barriers that would be insurmountable in classical physics. This occurs because the wavefunction extends beyond the barrier, giving a non-zero probability of finding the particle on the other side.",
          es: "El túnel cuántico permite a las partículas pasar a través de barreras de energía potencial que serían insuperables en la física clásica. Esto ocurre porque la función de onda se extiende más allá de la barrera, dando una probabilidad no cero de encontrar la partícula del otro lado.",
          de: "Quantentunneling ermöglicht es Teilchen, Potentialenergiebarrieren zu durchdringen, die in der klassischen Physik unüberwindbar wären. Dies geschieht, weil sich die Wellenfunktion über die Barriere hinaus erstreckt und eine von Null verschiedene Wahrscheinlichkeit gibt, das Teilchen auf der anderen Seite zu finden.",
          nl: "Kwantumtunneling stelt deeltjes in staat om door potentiële energiebarrières te gaan die onoverkomelijk zouden zijn in de klassieke fysica. Dit gebeurt omdat de golffunctie zich uitstrekt voorbij de barrière, wat een niet-nul waarschijnlijkheid geeft om het deeltje aan de andere kant te vinden."
        }
      },
      {
        question: {
          en: "What is the principle of complementarity?",
          es: "¿Qué es el principio de complementariedad?",
          de: "Was ist das Komplementaritätsprinzip?",
          nl: "Wat is het complementariteitsbeginsel?"
        },
        options: [
          {
            en: "Wave and particle descriptions are complementary and mutually exclusive",
            es: "Las descripciones de onda y partícula son complementarias y mutuamente excluyentes",
            de: "Wellen- und Teilchenbeschreibungen sind komplementär und schließen sich gegenseitig aus",
            nl: "Golf- en deeltjebeschrijvingen zijn complementair en wederzijds uitsluitend"
          },
          {
            en: "All quantum properties can be measured simultaneously",
            es: "Todas las propiedades cuánticas pueden medirse simultáneamente",
            de: "Alle Quanteneigenschaften können gleichzeitig gemessen werden",
            nl: "Alle kwantumeigenschappen kunnen gelijktijdig worden gemeten"
          },
          {
            en: "Quantum and classical physics are identical",
            es: "La física cuántica y clásica son idénticas",
            de: "Quanten- und klassische Physik sind identisch",
            nl: "Kwantum- en klassieke fysica zijn identiek"
          },
          {
            en: "Matter and antimatter are equivalent",
            es: "La materia y la antimateria son equivalentes",
            de: "Materie und Antimaterie sind äquivalent",
            nl: "Materie en antimaterie zijn equivalent"
          }
        ],
        correct: 0,
        explanation: {
          en: "Niels Bohr's complementarity principle states that objects have pairs of properties that cannot be measured or observed simultaneously. The wave-particle duality is the most famous example - an experiment reveals either wave or particle nature, never both.",
          es: "El principio de complementariedad de Niels Bohr establece que los objetos tienen pares de propiedades que no pueden medirse u observarse simultáneamente. La dualidad onda-partícula es el ejemplo más famoso: un experimento revela la naturaleza de onda o partícula, nunca ambas.",
          de: "Niels Bohrs Komplementaritätsprinzip besagt, dass Objekte Eigenschaftspaare haben, die nicht gleichzeitig gemessen oder beobachtet werden können. Die Welle-Teilchen-Dualität ist das berühmteste Beispiel - ein Experiment offenbart entweder Wellen- oder Teilchennatur, niemals beide.",
          nl: "Niels Bohr's complementariteitsbeginsel stelt dat objecten paren van eigenschappen hebben die niet gelijktijdig kunnen worden gemeten of waargenomen. De golf-deeltje dualiteit is het beroemdste voorbeeld - een experiment onthult ofwel golf- ofwel deeltjesaard, nooit beide."
        }
      },
      {
        question: {
          en: "What is the quantum Zeno effect?",
          es: "¿Qué es el efecto Zeno cuántico?",
          de: "Was ist der Quantenzeno-Effekt?",
          nl: "Wat is het kwantum Zeno-effect?"
        },
        options: [
          {
            en: "Frequent measurements can inhibit quantum system evolution",
            es: "Las mediciones frecuentes pueden inhibir la evolución del sistema cuántico",
            de: "Häufige Messungen können die Evolution des Quantensystems hemmen",
            nl: "Frequente metingen kunnen de evolutie van het kwantumsysteem remmen"
          },
          {
            en: "Quantum systems accelerate under observation",
            es: "Los sistemas cuánticos se aceleran bajo observación",
            de: "Quantensysteme beschleunigen unter Beobachtung",
            nl: "Kwantumsystemen versnellen onder observatie"
          },
          {
            en: "Particles move backward in time",
            es: "Las partículas se mueven hacia atrás en el tiempo",
            de: "Teilchen bewegen sich rückwärts in der Zeit",
            nl: "Deeltjes bewegen achterwaarts in de tijd"
          },
          {
            en: "Energy conservation is violated",
            es: "La conservación de energía se viola",
            de: "Die Energieerhaltung wird verletzt",
            nl: "Energiebehoud wordt geschonden"
          }
        ],
        correct: 0,
        explanation: {
          en: "The quantum Zeno effect demonstrates that frequent measurement of a quantum system can freeze its evolution, preventing transitions between states. This occurs because each measurement projects the system back to its measured state.",
          es: "El efecto Zeno cuántico demuestra que la medición frecuente de un sistema cuántico puede congelar su evolución, previniendo transiciones entre estados. Esto ocurre porque cada medición proyecta el sistema de vuelta a su estado medido.",
          de: "Der Quantenzeno-Effekt zeigt, dass häufige Messung eines Quantensystems seine Evolution einfrieren kann und Übergänge zwischen Zuständen verhindert. Dies geschieht, weil jede Messung das System auf seinen gemessenen Zustand zurückprojiziert.",
          nl: "Het kwantum Zeno-effect toont aan dat frequente meting van een kwantumsysteem zijn evolutie kan bevriezen, overgangen tussen toestanden verhindert. Dit gebeurt omdat elke meting het systeem terug projecteert naar zijn gemeten toestand."
        }
      },
      {
        question: {
          en: "What is the no-cloning theorem?",
          es: "¿Qué es el teorema de no clonación?",
          de: "Was ist das Nicht-Klon-Theorem?",
          nl: "Wat is de geen-klonen stelling?"
        },
        options: [
          {
            en: "It is impossible to create an identical copy of an arbitrary unknown quantum state",
            es: "Es imposible crear una copia idéntica de un estado cuántico desconocido arbitrario",
            de: "Es ist unmöglich, eine identische Kopie eines beliebigen unbekannten Quantenzustands zu erstellen",
            nl: "Het is onmogelijk om een identieke kopie van een willekeurige onbekende kwantumtoestand te maken"
          },
          {
            en: "Quantum computers cannot be replicated",
            es: "Las computadoras cuánticas no pueden ser replicadas",
            de: "Quantencomputer können nicht repliziert werden",
            nl: "Kwantumcomputers kunnen niet worden gerepliceerd"
          },
          {
            en: "Particles cannot be created or destroyed",
            es: "Las partículas no pueden ser creadas o destruidas",
            de: "Teilchen können nicht erzeugt oder zerstört werden",
            nl: "Deeltjes kunnen niet worden gecreëerd of vernietigd"
          },
          {
            en: "Quantum entanglement is impossible",
            es: "El entrelazamiento cuántico es imposible",
            de: "Quantenverschränkung ist unmöglich",
            nl: "Kwantumverstrengeling is onmogelijk"
          }
        ],
        correct: 0,
        explanation: {
          en: "The no-cloning theorem states that it is impossible to create an identical copy of an arbitrary unknown quantum state. This fundamental limitation has important implications for quantum computing and quantum cryptography.",
          es: "El teorema de no clonación establece que es imposible crear una copia idéntica de un estado cuántico desconocido arbitrario. Esta limitación fundamental tiene implicaciones importantes para la computación cuántica y la criptografía cuántica.",
          de: "Das Nicht-Klon-Theorem besagt, dass es unmöglich ist, eine identische Kopie eines beliebigen unbekannten Quantenzustands zu erstellen. Diese grundlegende Einschränkung hat wichtige Implikationen für Quantencomputing und Quantenkryptographie.",
          nl: "De geen-klonen stelling stelt dat het onmogelijk is om een identieke kopie van een willekeurige onbekende kwantumtoestand te maken. Deze fundamentele beperking heeft belangrijke implicaties voor kwantumcomputing en kwantumcryptografie."
        }
      },
      {
        question: {
          en: "What is the quantum spin angular momentum?",
          es: "¿Qué es el momento angular de espín cuántico?",
          de: "Was ist der quantenmechanische Spin-Drehimpuls?",
          nl: "Wat is het kwantum spin impulsmoment?"
        },
        options: [
          {
            en: "An intrinsic angular momentum with magnitude √[s(s+1)]ℏ",
            es: "Un momento angular intrínseco con magnitud √[s(s+1)]ℏ",
            de: "Ein intrinsischer Drehimpuls mit Betrag √[s(s+1)]ℏ",
            nl: "Een intrinsiek impulsmoment met grootte √[s(s+1)]ℏ"
          },
          {
            en: "The classical rotation of particles around their axis",
            es: "La rotación clásica de partículas alrededor de su eje",
            de: "Die klassische Rotation von Teilchen um ihre Achse",
            nl: "De klassieke rotatie van deeltjes rond hun as"
          },
          {
            en: "The orbital motion of electrons",
            es: "El movimiento orbital de los electrones",
            de: "Die Orbitalbewegung von Elektronen",
            nl: "De orbitaalbeweging van elektronen"
          },
          {
            en: "The vibration of atomic nuclei",
            es: "La vibración de los núcleos atómicos",
            de: "Die Schwingung von Atomkernen",
            nl: "De trilling van atoomkernen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum spin is an intrinsic form of angular momentum carried by elementary particles. The magnitude is √[s(s+1)]ℏ where s is the spin quantum number, and it has no classical analog - particles don't literally spin.",
          es: "El espín cuántico es una forma intrínseca de momento angular llevado por partículas elementales. La magnitud es √[s(s+1)]ℏ donde s es el número cuántico de espín, y no tiene análogo clásico: las partículas no giran literalmente.",
          de: "Quantenspin ist eine intrinsische Form von Drehimpuls, den Elementarteilchen tragen. Der Betrag ist √[s(s+1)]ℏ, wobei s die Spin-Quantenzahl ist, und es hat keine klassische Analogie - Teilchen drehen sich nicht buchstäblich.",
          nl: "Kwantum spin is een intrinsieke vorm van impulsmoment gedragen door elementaire deeltjes. De grootte is √[s(s+1)]ℏ waarbij s het spin kwantumgetal is, en het heeft geen klassieke analogie - deeltjes draaien niet letterlijk."
        }
      },
      {
        question: {
          en: "What is Bell's theorem?",
          es: "¿Qué es el teorema de Bell?",
          de: "Was ist Bells Theorem?",
          nl: "Wat is Bell's stelling?"
        },
        options: [
          {
            en: "No physical theory based on local hidden variables can reproduce all predictions of quantum mechanics",
            es: "Ninguna teoría física basada en variables ocultas locales puede reproducir todas las predicciones de la mecánica cuántica",
            de: "Keine physikalische Theorie basierend auf lokalen verborgenen Variablen kann alle Vorhersagen der Quantenmechanik reproduzieren",
            nl: "Geen fysieke theorie gebaseerd op lokale verborgen variabelen kan alle voorspellingen van de kwantummechanica reproduceren"
          },
          {
            en: "Quantum mechanics is incomplete",
            es: "La mecánica cuántica está incompleta",
            de: "Die Quantenmechanik ist unvollständig",
            nl: "Kwantummechanica is incompleet"
          },
          {
            en: "All quantum systems are deterministic",
            es: "Todos los sistemas cuánticos son deterministas",
            de: "Alle Quantensysteme sind deterministisch",
            nl: "Alle kwantumsystemen zijn deterministisch"
          },
          {
            en: "Faster-than-light communication is possible",
            es: "La comunicación más rápida que la luz es posible",
            de: "Überlichtgeschwindigkeitskommunikation ist möglich",
            nl: "Sneller-dan-licht communicatie is mogelijk"
          }
        ],
        correct: 0,
        explanation: {
          en: "Bell's theorem proves that no theory based on local hidden variables can reproduce all the statistical predictions of quantum mechanics. This rules out local realism and confirms the non-local nature of quantum entanglement.",
          es: "El teorema de Bell prueba que ninguna teoría basada en variables ocultas locales puede reproducir todas las predicciones estadísticas de la mecánica cuántica. Esto descarta el realismo local y confirma la naturaleza no local del entrelazamiento cuántico.",
          de: "Bells Theorem beweist, dass keine Theorie basierend auf lokalen verborgenen Variablen alle statistischen Vorhersagen der Quantenmechanik reproduzieren kann. Dies schließt lokalen Realismus aus und bestätigt die nicht-lokale Natur der Quantenverschränkung.",
          nl: "Bell's stelling bewijst dat geen theorie gebaseerd op lokale verborgen variabelen alle statistische voorspellingen van de kwantummechanica kan reproduceren. Dit sluit lokaal realisme uit en bevestigt de niet-lokale aard van kwantumverstrengeling."
        }
      },
      {
        question: {
          en: "What is decoherence in quantum mechanics?",
          es: "¿Qué es la decoherencia en mecánica cuántica?",
          de: "Was ist Dekohärenz in der Quantenmechanik?",
          nl: "Wat is decoherentie in de kwantummechanica?"
        },
        options: [
          {
            en: "The loss of quantum coherence due to interaction with the environment",
            es: "La pérdida de coherencia cuántica debido a la interacción con el entorno",
            de: "Der Verlust von Quantenkohärenz durch Wechselwirkung mit der Umgebung",
            nl: "Het verlies van kwantumcoherentie door interactie met de omgeving"
          },
          {
            en: "The creation of quantum superposition states",
            es: "La creación de estados de superposición cuántica",
            de: "Die Erzeugung von Quantensuperpositionszuständen",
            nl: "De creatie van kwantumsuperpositie toestanden"
          },
          {
            en: "The strengthening of quantum entanglement",
            es: "El fortalecimiento del entrelazamiento cuántico",
            de: "Die Verstärkung der Quantenverschränkung",
            nl: "De versterking van kwantumverstrengeling"
          },
          {
            en: "The increase in measurement precision",
            es: "El aumento en la precisión de medición",
            de: "Die Erhöhung der Messgenauigkeit",
            nl: "De toename in meetprecisie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Decoherence describes the process by which quantum systems lose their quantum behavior through interaction with their environment, effectively destroying superposition and entanglement and leading to classical behavior.",
          es: "La decoherencia describe el proceso por el cual los sistemas cuánticos pierden su comportamiento cuántico a través de la interacción con su entorno, destruyendo efectivamente la superposición y el entrelazamiento y llevando a comportamiento clásico.",
          de: "Dekohärenz beschreibt den Prozess, bei dem Quantensysteme ihr Quantenverhalten durch Wechselwirkung mit ihrer Umgebung verlieren, Superposition und Verschränkung effektiv zerstören und zu klassischem Verhalten führen.",
          nl: "Decoherentie beschrijft het proces waarbij kwantumsystemen hun kwantumgedrag verliezen door interactie met hun omgeving, effectief superpositie en verstrengeling vernietigen en leiden tot klassiek gedrag."
        }
      },
      {
        question: {
          en: "What is the quantum field theory vacuum state?",
          es: "¿Qué es el estado de vacío en la teoría cuántica de campos?",
          de: "Was ist der Vakuumzustand der Quantenfeldtheorie?",
          nl: "Wat is de vacuümtoestand van de kwantumveldentheorie?"
        },
        options: [
          {
            en: "The ground state containing zero-point energy fluctuations",
            es: "El estado fundamental que contiene fluctuaciones de energía de punto cero",
            de: "Der Grundzustand mit Nullpunkts-Energiefluktuationen",
            nl: "De grondtoestand met nulpunts-energiefluctuaties"
          },
          {
            en: "Completely empty space with no energy",
            es: "Espacio completamente vacío sin energía",
            de: "Völlig leerer Raum ohne Energie",
            nl: "Volledig lege ruimte zonder energie"
          },
          {
            en: "The state with maximum energy",
            es: "El estado con máxima energía",
            de: "Der Zustand mit maximaler Energie",
            nl: "De toestand met maximale energie"
          },
          {
            en: "A classical electromagnetic field",
            es: "Un campo electromagnético clásico",
            de: "Ein klassisches elektromagnetisches Feld",
            nl: "Een klassiek elektromagnetisch veld"
          }
        ],
        correct: 0,
        explanation: {
          en: "The quantum vacuum is not empty but contains zero-point energy fluctuations due to the uncertainty principle. Virtual particles constantly appear and disappear, giving the vacuum a non-zero energy density and leading to observable effects like the Casimir force.",
          es: "El vacío cuántico no está vacío sino que contiene fluctuaciones de energía de punto cero debido al principio de incertidumbre. Las partículas virtuales aparecen y desaparecen constantemente, dando al vacío una densidad de energía no cero y llevando a efectos observables como la fuerza de Casimir.",
          de: "Das Quantenvakuum ist nicht leer, sondern enthält Nullpunkts-Energiefluktuationen aufgrund des Unschärfeprinzips. Virtuelle Teilchen erscheinen und verschwinden ständig, geben dem Vakuum eine von Null verschiedene Energiedichte und führen zu beobachtbaren Effekten wie der Casimir-Kraft.",
          nl: "Het kwantumvacuüm is niet leeg maar bevat nulpunts-energiefluctuaties vanwege het onzekerheidsbeginsel. Virtuele deeltjes verschijnen en verdwijnen voortdurend, geven het vacuüm een niet-nul energiedichtheid en leiden tot waarneembare effecten zoals de Casimir-kracht."
        }
      },
      {
        question: {
          en: "What distinguishes the many-worlds interpretation from the Copenhagen interpretation?",
          es: "¿Qué distingue la interpretación de muchos mundos de la interpretación de Copenhague?",
          de: "Was unterscheidet die Viele-Welten-Interpretation von der Kopenhagener Interpretation?",
          nl: "Wat onderscheidt de vele-werelden interpretatie van de Kopenhagen interpretatie?"
        },
        options: [
          {
            en: "Many-worlds claims all possibilities occur in parallel universes, Copenhagen invokes wavefunction collapse",
            es: "Muchos mundos afirma que todas las posibilidades ocurren en universos paralelos, Copenhague invoca el colapso de la función de onda",
            de: "Viele-Welten behauptet, alle Möglichkeiten treten in parallelen Universen auf, Kopenhagen beruft sich auf Wellenfunktionskollaps",
            nl: "Vele-werelden beweert dat alle mogelijkheden plaatsvinden in parallelle universums, Kopenhagen roept golffunctie-ineenstorting in"
          },
          {
            en: "They are identical interpretations",
            es: "Son interpretaciones idénticas",
            de: "Sie sind identische Interpretationen",
            nl: "Ze zijn identieke interpretaties"
          },
          {
            en: "Many-worlds rejects quantum mechanics entirely",
            es: "Muchos mundos rechaza completamente la mecánica cuántica",
            de: "Viele-Welten lehnt die Quantenmechanik vollständig ab",
            nl: "Vele-werelden verwerpt kwantummechanica volledig"
          },
          {
            en: "Copenhagen allows faster-than-light communication",
            es: "Copenhague permite comunicación más rápida que la luz",
            de: "Kopenhagen erlaubt Überlichtgeschwindigkeitskommunikation",
            nl: "Kopenhagen staat sneller-dan-licht communicatie toe"
          }
        ],
        correct: 0,
        explanation: {
          en: "The many-worlds interpretation suggests that all possible outcomes of quantum measurements occur simultaneously in separate, parallel universes, while the Copenhagen interpretation involves wavefunction collapse upon measurement, selecting one definite outcome.",
          es: "La interpretación de muchos mundos sugiere que todos los resultados posibles de las mediciones cuánticas ocurren simultáneamente en universos separados y paralelos, mientras que la interpretación de Copenhague involucra el colapso de la función de onda al medir, seleccionando un resultado definido.",
          de: "Die Viele-Welten-Interpretation schlägt vor, dass alle möglichen Ergebnisse von Quantenmessungen gleichzeitig in separaten, parallelen Universen auftreten, während die Kopenhagener Interpretation Wellenfunktionskollaps bei der Messung beinhaltet, der ein definitives Ergebnis auswählt.",
          nl: "De vele-werelden interpretatie suggereert dat alle mogelijke uitkomsten van kwantummetingen gelijktijdig plaatsvinden in afzonderlijke, parallelle universums, terwijl de Kopenhagen interpretatie golffunctie-ineenstorting bij meting inhoudt, waarbij één definitieve uitkomst wordt geselecteerd."
        }
      },
      {
        question: {
          en: "What is the quantum adiabatic theorem?",
          es: "¿Qué es el teorema adiabático cuántico?",
          de: "Was ist das quantenadiabatische Theorem?",
          nl: "Wat is de kwantum adiabatische stelling?"
        },
        options: [
          {
            en: "A quantum system remains in its instantaneous eigenstate if parameters change slowly",
            es: "Un sistema cuántico permanece en su estado propio instantáneo si los parámetros cambian lentamente",
            de: "Ein Quantensystem bleibt in seinem momentanen Eigenzustand, wenn sich Parameter langsam ändern",
            nl: "Een kwantumsysteem blijft in zijn momentane eigentoestand als parameters langzaam veranderen"
          },
          {
            en: "Energy is conserved in all quantum processes",
            es: "La energía se conserva en todos los procesos cuánticos",
            de: "Energie wird in allen Quantenprozessen erhalten",
            nl: "Energie wordt behouden in alle kwantumprocessen"
          },
          {
            en: "Temperature affects quantum systems linearly",
            es: "La temperatura afecta los sistemas cuánticos linealmente",
            de: "Temperatur beeinflusst Quantensysteme linear",
            nl: "Temperatuur beïnvloedt kwantumsystemen lineair"
          },
          {
            en: "Quantum tunneling is temperature independent",
            es: "El túnel cuántico es independiente de la temperatura",
            de: "Quantentunneling ist temperaturunabhängig",
            nl: "Kwantumtunneling is temperatuuronafhankelijk"
          }
        ],
        correct: 0,
        explanation: {
          en: "The adiabatic theorem states that if a quantum system starts in an eigenstate of the Hamiltonian and the Hamiltonian changes slowly enough, the system will remain in the corresponding instantaneous eigenstate throughout the evolution.",
          es: "El teorema adiabático establece que si un sistema cuántico comienza en un estado propio del hamiltoniano y el hamiltoniano cambia suficientemente lento, el sistema permanecerá en el estado propio instantáneo correspondiente durante toda la evolución.",
          de: "Das adiabatische Theorem besagt, dass wenn ein Quantensystem in einem Eigenzustand des Hamilton-Operators beginnt und sich der Hamilton-Operator langsam genug ändert, das System während der gesamten Evolution im entsprechenden momentanen Eigenzustand bleibt.",
          nl: "De adiabatische stelling stelt dat als een kwantumsysteem begint in een eigentoestand van de Hamiltoniaan en de Hamiltoniaan langzaam genoeg verandert, het systeem in de overeenkomstige momentane eigentoestand zal blijven gedurende de hele evolutie."
        }
      },
      {
        question: {
          en: "What is the quantum eraser experiment?",
          es: "¿Qué es el experimento del borrador cuántico?",
          de: "Was ist das Quantenradierer-Experiment?",
          nl: "Wat is het kwantumgum-experiment?"
        },
        options: [
          {
            en: "Demonstrates that quantum interference can be restored by erasing which-path information",
            es: "Demuestra que la interferencia cuántica puede restaurarse borrando la información de qué-camino",
            de: "Zeigt, dass Quanteninterferenz durch Löschen der Welcher-Weg-Information wiederhergestellt werden kann",
            nl: "Toont aan dat kwantuminterferentie kan worden hersteld door welk-pad informatie uit te wissen"
          },
          {
            en: "A method for deleting quantum information permanently",
            es: "Un método para eliminar información cuántica permanentemente",
            de: "Eine Methode zum dauerhaften Löschen von Quanteninformation",
            nl: "Een methode om kwantuminformatie permanent te verwijderen"
          },
          {
            en: "An experiment that violates the uncertainty principle",
            es: "Un experimento que viola el principio de incertidumbre",
            de: "Ein Experiment, das das Unschärfeprinzip verletzt",
            nl: "Een experiment dat het onzekerheidsbeginsel schendt"
          },
          {
            en: "A technique for faster-than-light communication",
            es: "Una técnica para comunicación más rápida que la luz",
            de: "Eine Technik für Überlichtgeschwindigkeitskommunikation",
            nl: "Een techniek voor sneller-dan-licht communicatie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The quantum eraser experiment shows that interference patterns can be restored even after which-path information has been obtained, by subsequently erasing that information. This demonstrates the fundamental role of information in quantum mechanics.",
          es: "El experimento del borrador cuántico muestra que los patrones de interferencia pueden restaurarse incluso después de que se ha obtenido la información de qué-camino, borrando posteriormente esa información. Esto demuestra el papel fundamental de la información en la mecánica cuántica.",
          de: "Das Quantenradierer-Experiment zeigt, dass Interferenzmuster wiederhergestellt werden können, selbst nachdem Welcher-Weg-Information erhalten wurde, indem diese Information anschließend gelöscht wird. Dies zeigt die fundamentale Rolle der Information in der Quantenmechanik.",
          nl: "Het kwantumgum-experiment toont aan dat interferentiepatronen kunnen worden hersteld zelfs nadat welk-pad informatie is verkregen, door die informatie vervolgens uit te wissen. Dit toont de fundamentele rol van informatie in de kwantummechanica aan."
        }
      },
      {
        question: {
          en: "What is the role of symmetry in quantum mechanics?",
          es: "¿Cuál es el papel de la simetría en la mecánica cuántica?",
          de: "Was ist die Rolle der Symmetrie in der Quantenmechanik?",
          nl: "Wat is de rol van symmetrie in de kwantummechanica?"
        },
        options: [
          {
            en: "Symmetries lead to conservation laws and quantum selection rules",
            es: "Las simetrías llevan a leyes de conservación y reglas de selección cuántica",
            de: "Symmetrien führen zu Erhaltungsgesetzen und Quantenauswahlregeln",
            nl: "Symmetrieën leiden tot behoudswetten en kwantumselectieregels"
          },
          {
            en: "Symmetries make quantum systems deterministic",
            es: "Las simetrías hacen deterministas los sistemas cuánticos",
            de: "Symmetrien machen Quantensysteme deterministisch",
            nl: "Symmetrieën maken kwantumsystemen deterministisch"
          },
          {
            en: "Symmetries eliminate quantum uncertainty",
            es: "Las simetrías eliminan la incertidumbre cuántica",
            de: "Symmetrien eliminieren Quantenunsicherheit",
            nl: "Symmetrieën elimineren kwantumonzekerheid"
          },
          {
            en: "Symmetries only apply to classical physics",
            es: "Las simetrías solo se aplican a la física clásica",
            de: "Symmetrien gelten nur für die klassische Physik",
            nl: "Symmetrieën gelden alleen voor klassieke fysica"
          }
        ],
        correct: 0,
        explanation: {
          en: "Symmetries in quantum mechanics lead to conservation laws through Noether's theorem and determine quantum selection rules that govern allowed transitions between states. They also lead to degeneracies in energy levels and classify quantum states.",
          es: "Las simetrías en mecánica cuántica llevan a leyes de conservación a través del teorema de Noether y determinan reglas de selección cuántica que gobiernan las transiciones permitidas entre estados. También llevan a degeneraciones en niveles de energía y clasifican estados cuánticos.",
          de: "Symmetrien in der Quantenmechanik führen durch Noethers Theorem zu Erhaltungsgesetzen und bestimmen Quantenauswahlregeln, die erlaubte Übergänge zwischen Zuständen regeln. Sie führen auch zu Entartungen in Energieniveaus und klassifizieren Quantenzustände.",
          nl: "Symmetrieën in de kwantummechanica leiden tot behoudswetten door Noether's stelling en bepalen kwantumselectieregels die toegestane overgangen tussen toestanden regeren. Ze leiden ook tot degeneraties in energieniveaus en classificeren kwantumtoestanden."
        }
      },
      {
        question: {
          en: "What is geometric phase (Berry phase) in quantum mechanics?",
          es: "¿Qué es la fase geométrica (fase de Berry) en mecánica cuántica?",
          de: "Was ist die geometrische Phase (Berry-Phase) in der Quantenmechanik?",
          nl: "Wat is geometrische fase (Berry-fase) in de kwantummechanica?"
        },
        options: [
          {
            en: "A phase acquired by a quantum state during adiabatic evolution around a closed path",
            es: "Una fase adquirida por un estado cuántico durante evolución adiabática alrededor de un camino cerrado",
            de: "Eine Phase, die ein Quantenzustand während adiabatischer Evolution um einen geschlossenen Pfad erwirbt",
            nl: "Een fase verworven door een kwantumtoestand tijdens adiabatische evolutie rond een gesloten pad"
          },
          {
            en: "The phase difference between entangled particles",
            es: "La diferencia de fase entre partículas entrelazadas",
            de: "Der Phasenunterschied zwischen verschränkten Teilchen",
            nl: "Het faseverschil tussen verstrengelde deeltjes"
          },
          {
            en: "The phase accumulated during measurement",
            es: "La fase acumulada durante la medición",
            de: "Die während der Messung angesammelte Phase",
            nl: "De fase geaccumuleerd tijdens meting"
          },
          {
            en: "The phase of electromagnetic waves",
            es: "La fase de las ondas electromagnéticas",
            de: "Die Phase elektromagnetischer Wellen",
            nl: "De fase van elektromagnetische golven"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Berry phase is a geometric phase factor acquired by a quantum system when its parameters are slowly varied around a closed loop. It depends only on the geometry of the path in parameter space, not on the speed of variation.",
          es: "La fase de Berry es un factor de fase geométrica adquirido por un sistema cuántico cuando sus parámetros se varían lentamente alrededor de un bucle cerrado. Depende solo de la geometría del camino en el espacio de parámetros, no de la velocidad de variación.",
          de: "Die Berry-Phase ist ein geometrischer Phasenfaktor, den ein Quantensystem erwirbt, wenn seine Parameter langsam um eine geschlossene Schleife variiert werden. Sie hängt nur von der Geometrie des Pfades im Parameterraum ab, nicht von der Geschwindigkeit der Variation.",
          nl: "De Berry-fase is een geometrische fasefactor verworven door een kwantumsysteem wanneer zijn parameters langzaam worden gevarieerd rond een gesloten lus. Het hangt alleen af van de geometrie van het pad in parameterruimte, niet van de snelheid van variatie."
        }
      },
      {
        question: {
          en: "What is the quantum contextuality principle?",
          es: "¿Qué es el principio de contextualidad cuántica?",
          de: "Was ist das Prinzip der Quantenkontextualität?",
          nl: "Wat is het kwantumcontextualiteitsbeginsel?"
        },
        options: [
          {
            en: "Measurement results depend on which other observables are measured simultaneously",
            es: "Los resultados de medición dependen de qué otros observables se miden simultáneamente",
            de: "Messergebnisse hängen davon ab, welche anderen Observablen gleichzeitig gemessen werden",
            nl: "Meetresultaten hangen af van welke andere observabelen gelijktijdig worden gemeten"
          },
          {
            en: "All quantum measurements are context-independent",
            es: "Todas las mediciones cuánticas son independientes del contexto",
            de: "Alle Quantenmessungen sind kontextunabhängig",
            nl: "Alle kwantummetingen zijn contextafhankelijk"
          },
          {
            en: "Quantum systems have definite properties before measurement",
            es: "Los sistemas cuánticos tienen propiedades definidas antes de la medición",
            de: "Quantensysteme haben vor der Messung definite Eigenschaften",
            nl: "Kwantumsystemen hebben bepaalde eigenschappen voor meting"
          },
          {
            en: "Classical logic applies to all quantum phenomena",
            es: "La lógica clásica se aplica a todos los fenómenos cuánticos",
            de: "Klassische Logik gilt für alle Quantenphänomene",
            nl: "Klassieke logica geldt voor alle kwantumfenomenen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum contextuality means that the result of measuring a quantum observable depends on which other compatible observables are measured alongside it. This violates classical notions of definite, context-independent properties.",
          es: "La contextualidad cuántica significa que el resultado de medir un observable cuántico depende de qué otros observables compatibles se miden junto con él. Esto viola las nociones clásicas de propiedades definidas e independientes del contexto.",
          de: "Quantenkontextualität bedeutet, dass das Ergebnis der Messung einer Quantenobservablen davon abhängt, welche anderen kompatiblen Observablen zusammen mit ihr gemessen werden. Dies verletzt klassische Vorstellungen von definiten, kontextunabhängigen Eigenschaften.",
          nl: "Kwantumcontextualiteit betekent dat het resultaat van het meten van een kwantum observabele afhangt van welke andere compatibele observabelen ermee worden gemeten. Dit schendt klassieke noties van bepaalde, contextafhankelijke eigenschappen."
        }
      },
      {
        question: {
          en: "What is the quantum teleportation protocol?",
          es: "¿Qué es el protocolo de teletransportación cuántica?",
          de: "Was ist das Quantenteleportationsprotokoll?",
          nl: "Wat is het kwantumteleportatieprotocol?"
        },
        options: [
          {
            en: "A method to transfer quantum states using entanglement and classical communication",
            es: "Un método para transferir estados cuánticos usando entrelazamiento y comunicación clásica",
            de: "Eine Methode zur Übertragung von Quantenzuständen mittels Verschränkung und klassischer Kommunikation",
            nl: "Een methode om kwantumtoestanden over te dragen met behulp van verstrengeling en klassieke communicatie"
          },
          {
            en: "Instantaneous transfer of matter across space",
            es: "Transferencia instantánea de materia a través del espacio",
            de: "Sofortige Übertragung von Materie durch den Raum",
            nl: "Onmiddellijke overdracht van materie door de ruimte"
          },
          {
            en: "Faster-than-light information transmission",
            es: "Transmisión de información más rápida que la luz",
            de: "Überlichtgeschwindigkeits-Informationsübertragung",
            nl: "Sneller-dan-licht informatietransmissie"
          },
          {
            en: "Cloning of arbitrary quantum states",
            es: "Clonación de estados cuánticos arbitrarios",
            de: "Klonen beliebiger Quantenzustände",
            nl: "Klonen van willekeurige kwantumtoestanden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum teleportation transfers the quantum state of a particle to another distant particle using quantum entanglement and classical communication. The original state is destroyed in the process, and no faster-than-light communication occurs.",
          es: "La teletransportación cuántica transfiere el estado cuántico de una partícula a otra partícula distante usando entrelazamiento cuántico y comunicación clásica. El estado original se destruye en el proceso, y no ocurre comunicación más rápida que la luz.",
          de: "Quantenteleportation überträgt den Quantenzustand eines Teilchens zu einem anderen entfernten Teilchen mittels Quantenverschränkung und klassischer Kommunikation. Der ursprüngliche Zustand wird dabei zerstört, und keine Überlichtgeschwindigkeitskommunikation findet statt.",
          nl: "Kwantumteleportatie draagt de kwantumtoestand van een deeltje over naar een ander ver deeltje met behulp van kwantumverstrengeling en klassieke communicatie. De oorspronkelijke toestand wordt vernietigd in het proces, en er vindt geen sneller-dan-licht communicatie plaats."
        }
      },
      {
        question: {
          en: "What is the quantum speed limit (quantum Zeno effect's opposite)?",
          es: "¿Qué es el límite de velocidad cuántico (lo opuesto al efecto Zeno cuántico)?",
          de: "Was ist das Quantengeschwindigkeitslimit (das Gegenteil des Quantenzeno-Effekts)?",
          nl: "Wat is de kwantumsnelheidslimiet (het tegenovergestelde van het kwantum Zeno-effect)?"
        },
        options: [
          {
            en: "The minimum time required for a quantum system to evolve to an orthogonal state",
            es: "El tiempo mínimo requerido para que un sistema cuántico evolucione a un estado ortogonal",
            de: "Die minimale Zeit, die ein Quantensystem benötigt, um zu einem orthogonalen Zustand zu evolvieren",
            nl: "De minimale tijd vereist voor een kwantumsysteem om te evolueren naar een orthogonale toestand"
          },
          {
            en: "The maximum speed of light in quantum systems",
            es: "La velocidad máxima de la luz en sistemas cuánticos",
            de: "Die maximale Lichtgeschwindigkeit in Quantensystemen",
            nl: "De maximale lichtsnelheid in kwantumsystemen"
          },
          {
            en: "The rate of quantum decoherence",
            es: "La tasa de decoherencia cuántica",
            de: "Die Rate der Quantendekohärenz",
            nl: "Het tempo van kwantumdecoherentie"
          },
          {
            en: "The frequency of quantum oscillations",
            es: "La frecuencia de las oscilaciones cuánticas",
            de: "Die Frequenz von Quantenoszillationen",
            nl: "De frequentie van kwantumoscillaties"
          }
        ],
        correct: 0,
        explanation: {
          en: "The quantum speed limit, related to the Mandelstam-Tamm bound, sets the minimum time τ ≥ π/(2ΔE/ℏ) for a quantum system to evolve from one state to an orthogonal state, where ΔE is the energy uncertainty.",
          es: "El límite de velocidad cuántico, relacionado con el límite de Mandelstam-Tamm, establece el tiempo mínimo τ ≥ π/(2ΔE/ℏ) para que un sistema cuántico evolucione de un estado a un estado ortogonal, donde ΔE es la incertidumbre de energía.",
          de: "Das Quantengeschwindigkeitslimit, verwandt mit der Mandelstam-Tamm-Grenze, setzt die minimale Zeit τ ≥ π/(2ΔE/ℏ) für ein Quantensystem, um von einem Zustand zu einem orthogonalen Zustand zu evolvieren, wobei ΔE die Energieunsicherheit ist.",
          nl: "De kwantumsnelheidslimiet, gerelateerd aan de Mandelstam-Tamm grens, stelt de minimale tijd τ ≥ π/(2ΔE/ℏ) vast voor een kwantumsysteem om te evolueren van één toestand naar een orthogonale toestand, waarbij ΔE de energie-onzekerheid is."
        }
      },
      {
        question: {
          en: "What is the concept of weak measurement in quantum mechanics?",
          es: "¿Qué es el concepto de medición débil en mecánica cuántica?",
          de: "Was ist das Konzept der schwachen Messung in der Quantenmechanik?",
          nl: "Wat is het concept van zwakke meting in de kwantummechanica?"
        },
        options: [
          {
            en: "A measurement that extracts partial information while minimally disturbing the system",
            es: "Una medición que extrae información parcial mientras perturba mínimamente el sistema",
            de: "Eine Messung, die partielle Information extrahiert und das System minimal stört",
            nl: "Een meting die gedeeltelijke informatie extraheert terwijl het systeem minimaal wordt verstoord"
          },
          {
            en: "A measurement with low precision instruments",
            es: "Una medición con instrumentos de baja precisión",
            de: "Eine Messung mit niedrigpräzisen Instrumenten",
            nl: "Een meting met lage precisie instrumenten"
          },
          {
            en: "Measurements performed on macroscopic objects only",
            es: "Mediciones realizadas solo en objetos macroscópicos",
            de: "Messungen, die nur an makroskopischen Objekten durchgeführt werden",
            nl: "Metingen uitgevoerd alleen op macroscopische objecten"
          },
          {
            en: "Classical measurements of quantum systems",
            es: "Mediciones clásicas de sistemas cuánticos",
            de: "Klassische Messungen von Quantensystemen",
            nl: "Klassieke metingen van kwantumsystemen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Weak measurement is a technique that allows extraction of information about a quantum system while causing minimal disturbance to its state. This enables investigation of quantum trajectories and weak values, providing insights into quantum evolution.",
          es: "La medición débil es una técnica que permite extraer información sobre un sistema cuántico mientras causa perturbación mínima a su estado. Esto permite investigar trayectorias cuánticas y valores débiles, proporcionando información sobre la evolución cuántica.",
          de: "Schwache Messung ist eine Technik, die die Extraktion von Information über ein Quantensystem ermöglicht, während sie minimale Störung seines Zustands verursacht. Dies ermöglicht die Untersuchung von Quantentrajektorien und schwachen Werten, die Einblicke in die Quantenevolution geben.",
          nl: "Zwakke meting is een techniek die extractie van informatie over een kwantumsysteem mogelijk maakt terwijl het minimale verstoring van zijn toestand veroorzaakt. Dit maakt onderzoek naar kwantumtrajecten en zwakke waarden mogelijk, wat inzichten in kwantumevolutie biedt."
        }
      },
      {
        question: {
          en: "What is quantum discord?",
          es: "¿Qué es la discordia cuántica?",
          de: "Was ist Quantendiskordanz?",
          nl: "Wat is kwantumdiscordantie?"
        },
        options: [
          {
            en: "A measure of quantum correlations beyond entanglement in mixed states",
            es: "Una medida de correlaciones cuánticas más allá del entrelazamiento in estados mixtos",
            de: "Ein Maß für Quantenkorrelationen jenseits von Verschränkung in gemischten Zuständen",
            nl: "Een maat voor kwantumcorrelaties voorbij verstrengeling in gemengde toestanden"
          },
          {
            en: "The disagreement between quantum and classical predictions",
            es: "El desacuerdo entre predicciones cuánticas y clásicas",
            de: "Die Uneinigkeit zwischen Quanten- und klassischen Vorhersagen",
            nl: "De onenigheid tussen kwantum en klassieke voorspellingen"
          },
          {
            en: "The noise in quantum communication channels",
            es: "El ruido en canales de comunicación cuántica",
            de: "Das Rauschen in Quantenkommunikationskanälen",
            nl: "De ruis in kwantumcommunicatiekanalen"
          },
          {
            en: "The conflict between different interpretations",
            es: "El conflicto entre diferentes interpretaciones",
            de: "Der Konflikt zwischen verschiedenen Interpretationen",
            nl: "Het conflict tussen verschillende interpretaties"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum discord measures the quantum correlations in mixed states that go beyond classical correlations, even in the absence of entanglement. It quantifies the non-classical nature of correlations and plays important roles in quantum information processing.",
          es: "La discordia cuántica mide las correlaciones cuánticas in estados mixtos que van más allá de las correlaciones clásicas, incluso en ausencia de entrelazamiento. Cuantifica la naturaleza no clásica de las correlaciones y juega papeles importantes en el procesamiento de información cuántica.",
          de: "Quantendiskordanz misst die Quantenkorrelationen in gemischten Zuständen, die über klassische Korrelationen hinausgehen, selbst bei Abwesenheit von Verschränkung. Sie quantifiziert die nicht-klassische Natur von Korrelationen und spielt wichtige Rollen in der Quanteninformationsverarbeitung.",
          nl: "Kwantumdiscordantie meet de kwantumcorrelaties in gemengde toestanden die voorbij klassieke correlaties gaan, zelfs bij afwezigheid van verstrengeling. Het kwantificeert de niet-klassieke aard van correlaties en speelt belangrijke rollen in kwantuminformatieverwerking."
        }
      },
      {
        question: {
          en: "What is the path integral formulation of quantum mechanics?",
          es: "¿Qué es la formulación de integral de camino de la mecánica cuántica?",
          de: "Was ist die Pfadintegral-Formulierung der Quantenmechanik?",
          nl: "Wat is de padintegraal formulering van de kwantummechanica?"
        },
        options: [
          {
            en: "A formulation where quantum amplitudes are calculated by summing over all possible paths",
            es: "Una formulación donde las amplitudes cuánticas se calculan sumando sobre todos los caminos posibles",
            de: "Eine Formulierung, bei der Quantenamplituden durch Summation über alle möglichen Pfade berechnet werden",
            nl: "Een formulering waarbij kwantumamplitudes worden berekend door te sommeren over alle mogelijke paden"
          },
          {
            en: "A method for calculating only classical trajectories",
            es: "Un método para calcular solo trayectorias clásicas",
            de: "Eine Methode zur Berechnung nur klassischer Bahnen",
            nl: "Een methode voor het berekenen van alleen klassieke trajecten"
          },
          {
            en: "A technique limited to harmonic oscillators",
            es: "Una técnica limitada a osciladores armónicos",
            de: "Eine Technik begrenzt auf harmonische Oszillatoren",
            nl: "Een techniek beperkt tot harmonische oscillatoren"
          },
          {
            en: "An approximation method for large quantum numbers",
            es: "Un método de aproximación para números cuánticos grandes",
            de: "Eine Näherungsmethode für große Quantenzahlen",
            nl: "Een benaderingsmethode voor grote kwantumgetallen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Feynman's path integral formulation calculates quantum amplitudes by considering all possible paths between initial and final states, each weighted by exp(iS/ℏ) where S is the classical action. This provides an alternative to the Schrödinger equation approach.",
          es: "La formulación de integral de camino de Feynman calcula amplitudes cuánticas considerando todos los caminos posibles entre estados inicial y final, cada uno ponderado por exp(iS/ℏ) donde S es la acción clásica. Esto proporciona una alternativa al enfoque de la ecuación de Schrödinger.",
          de: "Feynmans Pfadintegral-Formulierung berechnet Quantenamplituden durch Berücksichtigung aller möglichen Pfade zwischen Anfangs- und Endzuständen, jeder gewichtet mit exp(iS/ℏ), wobei S die klassische Wirkung ist. Dies bietet eine Alternative zum Schrödinger-Gleichungsansatz.",
          nl: "Feynman's padintegraal formulering berekent kwantumamplitudes door alle mogelijke paden tussen begin- en eindtoestanden te beschouwen, elk gewogen met exp(iS/ℏ) waarbij S de klassieke actie is. Dit biedt een alternatief voor de Schrödinger-vergelijking benadering."
        }
      },
      {
        question: {
          en: "What is the quantum entanglement monogamy principle?",
          es: "¿Qué es el principio de monogamia del entrelazamiento cuántico?",
          de: "Was ist das Monogamie-Prinzip der Quantenverschränkung?",
          nl: "Wat is het monogamieprincipe van kwantumverstrengeling?"
        },
        options: [
          {
            en: "A quantum system cannot be maximally entangled with two other systems simultaneously",
            es: "Un sistema cuántico no puede estar máximamente entrelazado con dos otros sistemas simultáneamente",
            de: "Ein Quantensystem kann nicht gleichzeitig maximal mit zwei anderen Systemen verschränkt sein",
            nl: "Een kwantumsysteem kan niet maximaal verstrengeld zijn met twee andere systemen tegelijkertijd"
          },
          {
            en: "All quantum systems must be entangled in pairs only",
            es: "Todos los sistemas cuánticos deben estar entrelazados solo en pares",
            de: "Alle Quantensysteme müssen nur paarweise verschränkt sein",
            nl: "Alle kwantumsystemen moeten alleen in paren verstrengeld zijn"
          },
          {
            en: "Entanglement can be shared equally among any number of particles",
            es: "El entrelazamiento puede compartirse igualmente entre cualquier número de partículas",
            de: "Verschränkung kann gleichmäßig unter beliebig vielen Teilchen geteilt werden",
            nl: "Verstrengeling kan gelijk worden gedeeld onder elk aantal deeltjes"
          },
          {
            en: "Quantum entanglement violates conservation laws",
            es: "El entrelazamiento cuántico viola las leyes de conservación",
            de: "Quantenverschränkung verletzt Erhaltungsgesetze",
            nl: "Kwantumverstrengeling schendt behoudswetten"
          }
        ],
        correct: 0,
        explanation: {
          en: "The monogamy of entanglement states that if two qubits A and B are maximally entangled, then neither can be entangled with a third qubit C. This fundamental property limits how entanglement can be distributed in multipartite quantum systems.",
          es: "La monogamia del entrelazamiento establece que si dos qubits A y B están máximamente entrelazados, entonces ninguno puede estar entrelazado con un tercer qubit C. Esta propiedad fundamental limita cómo el entrelazamiento puede distribuirse en sistemas cuánticos multipartitos.",
          de: "Die Monogamie der Verschränkung besagt, dass wenn zwei Qubits A und B maximal verschränkt sind, dann keines mit einem dritten Qubit C verschränkt sein kann. Diese fundamentale Eigenschaft begrenzt, wie Verschränkung in mehrparteiigen Quantensystemen verteilt werden kann.",
          nl: "De monogamie van verstrengeling stelt dat als twee qubits A en B maximaal verstrengeld zijn, dan kan geen van beide verstrengeld zijn met een derde qubit C. Deze fundamentele eigenschap beperkt hoe verstrengeling kan worden verdeeld in meerpartijen kwantumsystemen."
        }
      },
      {
        question: {
          en: "What is the quantum phase transition?",
          es: "¿Qué es la transición de fase cuántica?",
          de: "Was ist der Quantenphasenübergang?",
          nl: "Wat is de kwantumfase-overgang?"
        },
        options: [
          {
            en: "A transition between different ground states driven by quantum fluctuations at T=0",
            es: "Una transición entre diferentes estados fundamentales impulsada por fluctuaciones cuánticas a T=0",
            de: "Ein Übergang zwischen verschiedenen Grundzuständen, getrieben von Quantenfluktuationen bei T=0",
            nl: "Een overgang tussen verschillende grondtoestanden gedreven door kwantumfluctuaties bij T=0"
          },
          {
            en: "Any phase transition occurring in quantum systems",
            es: "Cualquier transición de fase que ocurra en sistemas cuánticos",
            de: "Jeder Phasenübergang, der in Quantensystemen auftritt",
            nl: "Elke fase-overgang die plaatsvindt in kwantumsystemen"
          },
          {
            en: "The collapse of quantum superposition states",
            es: "El colapso de estados de superposición cuántica",
            de: "Der Kollaps von Quantensuperpositionszuständen",
            nl: "De ineenstorting van kwantumsuperpositie toestanden"
          },
          {
            en: "The transition from quantum to classical behavior",
            es: "La transición del comportamiento cuántico al clásico",
            de: "Der Übergang von Quanten- zu klassischem Verhalten",
            nl: "De overgang van kwantum naar klassiek gedrag"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum phase transitions occur at absolute zero temperature and are driven by quantum fluctuations rather than thermal fluctuations. They involve changes in the ground state as a function of a non-thermal control parameter, leading to different phases of matter.",
          es: "Las transiciones de fase cuánticas ocurren a temperatura cero absoluto y son impulsadas por fluctuaciones cuánticas más que por fluctuaciones térmicas. Involucran cambios en el estado fundamental como función de un parámetro de control no térmico, llevando a diferentes fases de la materia.",
          de: "Quantenphasenübergänge treten bei absoluter Nulltemperatur auf und werden von Quantenfluktuationen statt von thermischen Fluktuationen getrieben. Sie beinhalten Änderungen im Grundzustand als Funktion eines nicht-thermischen Kontrollparameters, was zu verschiedenen Phasen der Materie führt.",
          nl: "Kwantumfase-overgangen treden op bij absolute nultemperatuur en worden gedreven door kwantumfluctuaties in plaats van thermische fluctuaties. Ze omvatten veranderingen in de grondtoestand als functie van een niet-thermische controleparameter, wat leidt tot verschillende fasen van materie."
        }
      },
      {
        question: {
          en: "What is the role of symmetry breaking in quantum field theory?",
          es: "¿Cuál es el papel de la ruptura de simetría en la teoría cuántica de campos?",
          de: "Was ist die Rolle der Symmetriebrechung in der Quantenfeldtheorie?",
          nl: "Wat is de rol van symmetriebreking in kwantumveldentheorie?"
        },
        options: [
          {
            en: "Spontaneous symmetry breaking generates mass for gauge bosons and fermions",
            es: "La ruptura espontánea de simetría genera masa para bosones de gauge y fermiones",
            de: "Spontane Symmetriebrechung erzeugt Masse für Eichbosonen und Fermionen",
            nl: "Spontane symmetriebreking genereert massa voor ijkbosonen en fermionen"
          },
          {
            en: "It eliminates all conservation laws in physics",
            es: "Elimina todas las leyes de conservación en física",
            de: "Es eliminiert alle Erhaltungsgesetze in der Physik",
            nl: "Het elimineert alle behoudswetten in de fysica"
          },
          {
            en: "It only occurs in classical field theories",
            es: "Solo ocurre en teorías de campos clásicas",
            de: "Es tritt nur in klassischen Feldtheorien auf",
            nl: "Het komt alleen voor in klassieke veldentheorieën"
          },
          {
            en: "It prevents quantum tunneling between states",
            es: "Previene el túnel cuántico entre estados",
            de: "Es verhindert Quantentunneling zwischen Zuständen",
            nl: "Het voorkomt kwantumtunneling tussen toestanden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Spontaneous symmetry breaking in quantum field theory allows originally massless particles to acquire mass through the Higgs mechanism. The vacuum state breaks the symmetry of the Lagrangian, leading to massive gauge bosons while preserving local gauge invariance.",
          es: "La ruptura espontánea de simetría en la teoría cuántica de campos permite que partículas originalmente sin masa adquieran masa a través del mecanismo de Higgs. El estado de vacío rompe la simetría del lagrangiano, llevando a bosones de gauge masivos mientras preserva la invariancia de gauge local.",
          de: "Spontane Symmetriebrechung in der Quantenfeldtheorie ermöglicht ursprünglich masselosen Teilchen, Masse durch den Higgs-Mechanismus zu erlangen. Der Vakuumzustand bricht die Symmetrie der Lagrange-Funktion und führt zu massiven Eichbosonen, während die lokale Eichinvarianz erhalten bleibt.",
          nl: "Spontane symmetriebreking in kwantumveldentheorie stelt oorspronkelijk massaloze deeltjes in staat om massa te verkrijgen door het Higgs-mechanisme. De vacuümtoestand breekt de symmetrie van de Lagrangiaan, wat leidt tot massieve ijkbosonen terwijl lokale ijkinvariantie behouden blijft."
        }
      },
      {
        question: {
          en: "What is the quantum criticality phenomenon?",
          es: "¿Qué es el fenómeno de criticidad cuántica?",
          de: "Was ist das Quantenkritikalitätsphänomen?",
          nl: "Wat is het kwantumkriticaliteitsfenomeen?"
        },
        options: [
          {
            en: "Scale-invariant behavior at quantum phase transition points with universal critical exponents",
            es: "Comportamiento invariante de escala en puntos de transición de fase cuántica con exponentes críticos universales",
            de: "Skalenivariantes Verhalten an Quantenphasenübergangspunkten mit universellen kritischen Exponenten",
            nl: "Schaal-invariant gedrag bij kwantumfase-overgang punten met universele kritieke exponenten"
          },
          {
            en: "The failure of quantum mechanics at high energies",
            es: "El fallo de la mecánica cuántica a altas energías",
            de: "Das Versagen der Quantenmechanik bei hohen Energien",
            nl: "Het falen van kwantummechanica bij hoge energieën"
          },
          {
            en: "Critical temperature where quantum effects disappear",
            es: "Temperatura crítica donde los efectos cuánticos desaparecen",
            de: "Kritische Temperatur, bei der Quanteneffekte verschwinden",
            nl: "Kritieke temperatuur waarbij kwantumeffecten verdwijnen"
          },
          {
            en: "The breakdown of perturbation theory",
            es: "La ruptura de la teoría de perturbaciones",
            de: "Der Zusammenbruch der Störungstheorie",
            nl: "De afbraak van storingstheorie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum criticality describes the scale-invariant behavior near quantum phase transitions, characterized by universal scaling laws and critical exponents. These systems exhibit long-range correlations and collective behavior that transcends microscopic details.",
          es: "La criticidad cuántica describe el comportamiento invariante de escala cerca de transiciones de fase cuánticas, caracterizado por leyes de escalamiento universales y exponentes críticos. Estos sistemas exhiben correlaciones de largo alcance y comportamiento colectivo que trasciende los detalles microscópicos.",
          de: "Quantenkritikalität beschreibt das skalenivariante Verhalten nahe Quantenphasenübergängen, charakterisiert durch universelle Skalierungsgesetze und kritische Exponenten. Diese Systeme zeigen langreichweitige Korrelationen und kollektives Verhalten, das mikroskopische Details transzendiert.",
          nl: "Kwantumkriticaliteit beschrijft het schaal-invariante gedrag nabij kwantumfase-overgangen, gekarakteriseerd door universele schaalwetten en kritieke exponenten. Deze systemen vertonen langereiks correlaties en collectief gedrag dat microscopische details overstijgt."
        }
      },
      {
        question: {
          en: "What is the quantum interference in double-slit experiment with detectors?",
          es: "¿Qué es la interferencia cuántica en el experimento de doble rendija con detectores?",
          de: "Was ist Quanteninterferenz im Doppelspalt-Experiment mit Detektoren?",
          nl: "Wat is kwantuminterferentie in het dubbele-spleet experiment met detectoren?"
        },
        options: [
          {
            en: "Interference disappears when which-path information is available, demonstrating complementarity",
            es: "La interferencia desaparece cuando la información de qué-camino está disponible, demostrando complementariedad",
            de: "Interferenz verschwindet, wenn Welcher-Weg-Information verfügbar ist, was Komplementarität demonstriert",
            nl: "Interferentie verdwijnt wanneer welk-pad informatie beschikbaar is, wat complementariteit demonstreert"
          },
          {
            en: "Detectors enhance the interference pattern visibility",
            es: "Los detectores mejoran la visibilidad del patrón de interferencia",
            de: "Detektoren verstärken die Sichtbarkeit des Interferenzmusters",
            nl: "Detectoren versterken de zichtbaarheid van het interferentiepatroon"
          },
          {
            en: "The interference pattern becomes classical with detectors",
            es: "El patrón de interferencia se vuelve clásico con detectores",
            de: "Das Interferenzmuster wird mit Detektoren klassisch",
            nl: "Het interferentiepatroon wordt klassiek met detectoren"
          },
          {
            en: "Multiple parallel universes are detected simultaneously",
            es: "Se detectan múltiples universos paralelos simultáneamente",
            de: "Mehrere parallele Universen werden gleichzeitig detektiert",
            nl: "Meerdere parallelle universums worden gelijktijdig gedetecteerd"
          }
        ],
        correct: 0,
        explanation: {
          en: "When detectors are placed at the slits to determine which path the particle takes, the interference pattern disappears. This exemplifies wave-particle complementarity: obtaining which-path information destroys the wave-like interference, demonstrating the fundamental measurement-disturbance relationship.",
          es: "Cuando se colocan detectores en las rendijas para determinar qué camino toma la partícula, el patrón de interferencia desaparece. Esto ejemplifica la complementariedad onda-partícula: obtener información de qué-camino destruye la interferencia similar a onda, demostrando la relación fundamental de medición-perturbación.",
          de: "Wenn Detektoren an den Spalten platziert werden, um zu bestimmen, welchen Weg das Teilchen nimmt, verschwindet das Interferenzmuster. Dies veranschaulicht die Welle-Teilchen-Komplementarität: Das Erhalten von Welcher-Weg-Information zerstört die wellenartige Interferenz und demonstriert die fundamentale Mess-Störungs-Beziehung.",
          nl: "Wanneer detectoren bij de spleten worden geplaatst om te bepalen welk pad het deeltje neemt, verdwijnt het interferentiepatroon. Dit illustreert golf-deeltje complementariteit: het verkrijgen van welk-pad informatie vernietigt de golf-achtige interferentie, wat de fundamentele meet-verstoringsrelatie demonstreert."
        }
      },
      {
        question: {
          en: "What is the quantum Einstein-Podolsky-Rosen (EPR) paradox?",
          es: "¿Qué es la paradoja cuántica de Einstein-Podolsky-Rosen (EPR)?",
          de: "Was ist das Quanten-Einstein-Podolsky-Rosen (EPR) Paradox?",
          nl: "Wat is de kwantum Einstein-Podolsky-Rosen (EPR) paradox?"
        },
        options: [
          {
            en: "A thought experiment questioning quantum mechanics completeness using entangled particles",
            es: "Un experimento mental que cuestiona la completitud de la mecánica cuántica usando partículas entrelazadas",
            de: "Ein Gedankenexperiment, das die Vollständigkeit der Quantenmechanik mit verschränkten Teilchen hinterfragt",
            nl: "Een gedachte-experiment dat de volledigheid van kwantummechanica in twijfel trekt met verstrengelde deeltjes"
          },
          {
            en: "A mathematical proof that quantum mechanics is wrong",
            es: "Una prueba matemática de que la mecánica cuántica es incorrecta",
            de: "Ein mathematischer Beweis, dass die Quantenmechanik falsch ist",
            nl: "Een wiskundig bewijs dat kwantummechanica verkeerd is"
          },
          {
            en: "An experiment showing faster-than-light communication",
            es: "Un experimento que muestra comunicación más rápida que la luz",
            de: "Ein Experiment, das Überlichtgeschwindigkeitskommunikation zeigt",
            nl: "Een experiment dat sneller-dan-licht communicatie toont"
          },
          {
            en: "A paradox about time travel in quantum systems",
            es: "Una paradoja sobre viaje en el tiempo en sistemas cuánticos",
            de: "Ein Paradox über Zeitreisen in Quantensystemen",
            nl: "Een paradox over tijdreizen in kwantumsystemen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The EPR paradox argued that quantum mechanics is incomplete because measuring one entangled particle instantly determines the state of its distant partner, suggesting 'spooky action at a distance.' Einstein favored local hidden variable theories, but Bell's theorem and experiments confirmed quantum non-locality.",
          es: "La paradoja EPR argumentó que la mecánica cuántica es incompleta porque medir una partícula entrelazada determina instantáneamente el estado de su compañera distante, sugiriendo 'acción fantasmal a distancia.' Einstein favoreció teorías de variables ocultas locales, pero el teorema de Bell y experimentos confirmaron la no-localidad cuántica.",
          de: "Das EPR-Paradox argumentierte, dass die Quantenmechanik unvollständig ist, weil die Messung eines verschränkten Teilchens sofort den Zustand seines entfernten Partners bestimmt, was 'spukhafte Fernwirkung' andeutet. Einstein bevorzugte lokale verborgene Variable-Theorien, aber Bells Theorem und Experimente bestätigten die Quanten-Nichtlokalität.",
          nl: "De EPR-paradox beweerde dat kwantummechanica incompleet is omdat het meten van één verstrengeld deeltje onmiddellijk de toestand van zijn verre partner bepaalt, wat 'spookachtige actie op afstand' suggereert. Einstein gaf de voorkeur aan lokale verborgen variabele theorieën, maar Bell's stelling en experimenten bevestigden kwantum niet-lokaliteit."
        }
      },
      {
        question: {
          en: "What is quantum decoherence time and coherence length?",
          es: "¿Qué es el tiempo de decoherencia cuántica y la longitud de coherencia?",
          de: "Was ist Quantendekohärenzzeit und Kohärenzlänge?",
          nl: "Wat is kwantumdecoherentietijd en coherentielengte?"
        },
        options: [
          {
            en: "The characteristic time and distance scales over which quantum coherence is maintained",
            es: "Las escalas características de tiempo y distancia sobre las cuales se mantiene la coherencia cuántica",
            de: "Die charakteristischen Zeit- und Entfernungsskalen, über die Quantenkohärenz erhalten bleibt",
            nl: "De karakteristieke tijd- en afstandsschalen waarover kwantumcoherentie wordt behouden"
          },
          {
            en: "Fixed universal constants for all quantum systems",
            es: "Constantes universales fijas para todos los sistemas cuánticos",
            de: "Feste universelle Konstanten für alle Quantensysteme",
            nl: "Vaste universele constanten voor alle kwantumsystemen"
          },
          {
            en: "The time for quantum states to become entangled",
            es: "El tiempo para que los estados cuánticos se entrelacen",
            de: "Die Zeit für Quantenzustände, verschränkt zu werden",
            nl: "De tijd voor kwantumtoestanden om verstrengeld te raken"
          },
          {
            en: "Measures of quantum tunneling probability",
            es: "Medidas de probabilidad de túnel cuántico",
            de: "Maße für Quantentunneling-Wahrscheinlichkeit",
            nl: "Maten van kwantumtunneling waarschijnlijkheid"
          }
        ],
        correct: 0,
        explanation: {
          en: "Decoherence time is how long a quantum system maintains coherence before environmental interaction destroys superposition. Coherence length is the spatial scale over which quantum phase relationships are preserved. Both depend on system-environment coupling strength and temperature.",
          es: "El tiempo de decoherencia es cuánto tiempo un sistema cuántico mantiene coherencia antes de que la interacción ambiental destruya la superposición. La longitud de coherencia es la escala espacial sobre la cual se preservan las relaciones de fase cuántica. Ambas dependen de la fuerza de acoplamiento sistema-ambiente y la temperatura.",
          de: "Dekohärenzzeit ist wie lange ein Quantensystem Kohärenz aufrechterhält, bevor Umgebungsinteraktion Superposition zerstört. Kohärenzlänge ist die räumliche Skala, über die Quantenphasenbeziehungen erhalten bleiben. Beide hängen von der System-Umgebung-Kopplungsstärke und Temperatur ab.",
          nl: "Decoherentietijd is hoe lang een kwantumsysteem coherentie behoudt voordat omgevingsinteractie superpositie vernietigt. Coherentielengte is de ruimtelijke schaal waarover kwantumfaserelaties behouden blijven. Beide hangen af van systeem-omgeving koppelingssterkte en temperatuur."
        }
      },
      {
        question: {
          en: "What is the quantum Hall effect and its topological nature?",
          es: "¿Qué es el efecto Hall cuántico y su naturaleza topológica?",
          de: "Was ist der Quanten-Hall-Effekt und seine topologische Natur?",
          nl: "Wat is het kwantum Hall-effect en zijn topologische aard?"
        },
        options: [
          {
            en: "Quantized Hall conductance σxy = νe²/h with topological protection from disorder",
            es: "Conductancia Hall cuantizada σxy = νe²/h con protección topológica contra el desorden",
            de: "Quantisierte Hall-Leitfähigkeit σxy = νe²/h mit topologischem Schutz vor Unordnung",
            nl: "Gekwantiseerde Hall-geleidbaarheid σxy = νe²/h met topologische bescherming tegen wanorde"
          },
          {
            en: "A classical electromagnetic phenomenon in conductors",
            es: "Un fenómeno electromagnético clásico en conductores",
            de: "Ein klassisches elektromagnetisches Phänomen in Leitern",
            nl: "Een klassiek elektromagnetisch fenomeen in geleiders"
          },
          {
            en: "The breakdown of Ohm's law at low temperatures",
            es: "La ruptura de la ley de Ohm a bajas temperaturas",
            de: "Der Zusammenbruch des Ohmschen Gesetzes bei niedrigen Temperaturen",
            nl: "De afbraak van de wet van Ohm bij lage temperaturen"
          },
          {
            en: "Quantum tunneling through Hall barriers",
            es: "Túnel cuántico a través de barreras Hall",
            de: "Quantentunneling durch Hall-Barrieren",
            nl: "Kwantumtunneling door Hall-barrières"
          }
        ],
        correct: 0,
        explanation: {
          en: "The quantum Hall effect shows precisely quantized Hall conductance σxy = νe²/h (where ν is the filling factor) in 2D electron systems under strong magnetic fields. This quantization has topological origin and is remarkably robust against disorder and interactions.",
          es: "El efecto Hall cuántico muestra conductancia Hall precisamente cuantizada σxy = νe²/h (donde ν es el factor de llenado) in sistemas electrónicos 2D bajo campos magnéticos fuertes. Esta cuantización tiene origen topológico y es notablemente robusta contra desorden e interacciones.",
          de: "Der Quanten-Hall-Effekt zeigt präzise quantisierte Hall-Leitfähigkeit σxy = νe²/h (wobei ν der Füllfaktor ist) in 2D-Elektronensystemen unter starken Magnetfeldern. Diese Quantisierung hat topologischen Ursprung und ist bemerkenswert robust gegen Unordnung und Wechselwirkungen.",
          nl: "Het kwantum Hall-effect toont precies gekwantiseerde Hall-geleidbaarheid σxy = νe²/h (waarbij ν de vullingsfactor is) in 2D-elektronensystemen onder sterke magnetische velden. Deze kwantisatie heeft topologische oorsprong en is opmerkelijk robuust tegen wanorde en interacties."
        }
      },
      {
        question: {
          en: "What is the concept of quantum non-demolition measurements?",
          es: "¿Qué es el concepto de mediciones cuánticas no demolitorias?",
          de: "Was ist das Konzept der Quanten-Nicht-Demolitions-Messungen?",
          nl: "Wat is het concept van kwantum niet-sloop metingen?"
        },
        options: [
          {
            en: "Measurements that preserve the quantum state while extracting information about commuting observables",
            es: "Mediciones que preservan el estado cuántico mientras extraen información sobre observables conmutativos",
            de: "Messungen, die den Quantenzustand bewahren, während sie Information über kommutierende Observablen extrahieren",
            nl: "Metingen die de kwantumtoestand behouden terwijl ze informatie extraheren over commuterende observabelen"
          },
          {
            en: "Measurements that destroy the quantum system completely",
            es: "Mediciones que destruyen completamente el sistema cuántico",
            de: "Messungen, die das Quantensystem vollständig zerstören",
            nl: "Metingen die het kwantumsysteem volledig vernietigen"
          },
          {
            en: "Classical measurements performed on quantum systems",
            es: "Mediciones clásicas realizadas en sistemas cuánticos",
            de: "Klassische Messungen an Quantensystemen durchgeführt",
            nl: "Klassieke metingen uitgevoerd op kwantumsystemen"
          },
          {
            en: "Measurements with infinite precision and no uncertainty",
            es: "Mediciones con precisión infinita y sin incertidumbre",
            de: "Messungen mit unendlicher Genauigkeit und ohne Unsicherheit",
            nl: "Metingen met oneindige precisie en geen onzekerheid"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum non-demolition (QND) measurements allow repeated measurements of the same observable without disturbing the quantum state. The measured observable must commute with the system's Hamiltonian, enabling continuous monitoring while preserving quantum coherence.",
          es: "Las mediciones cuánticas no demolitorias (QND) permiten mediciones repetidas del mismo observable sin perturbar el estado cuántico. El observable medido debe conmutar con el hamiltoniano del sistema, permitiendo monitoreo continuo mientras preserva la coherencia cuántica.",
          de: "Quanten-Nicht-Demolitions (QND) Messungen ermöglichen wiederholte Messungen derselben Observablen ohne Störung des Quantenzustands. Die gemessene Observable muss mit dem Hamilton-Operator des Systems kommutieren, was kontinuierliche Überwachung bei Erhaltung der Quantenkohärenz ermöglicht.",
          nl: "Kwantum niet-sloop (QND) metingen maken herhaalde metingen van dezelfde observabele mogelijk zonder de kwantumtoestand te verstoren. De gemeten observabele moet commuteren met de Hamiltoniaan van het systeem, wat continue monitoring mogelijk maakt terwijl kwantumcoherentie behouden blijft."
        }
      },
      {
        question: {
          en: "What is quantum error correction and its threshold theorem?",
          es: "¿Qué es la corrección de errores cuántica y su teorema de umbral?",
          de: "Was ist Quantenfehlerkorrektur und ihr Schwellenwerttheorem?",
          nl: "Wat is kwantumfoutcorrectie en zijn drempelstelling?"
        },
        options: [
          {
            en: "A method to protect quantum information using redundant encoding, with error rates below threshold enabling fault-tolerant computation",
            es: "Un método para proteger información cuántica usando codificación redundante, con tasas de error bajo el umbral permitiendo computación tolerante a fallas",
            de: "Eine Methode zum Schutz von Quanteninformation durch redundante Kodierung, mit Fehlerrate unter der Schwelle ermöglicht fehlertolerante Berechnung",
            nl: "Een methode om kwantuminformatie te beschermen met redundante codering, waarbij foutpercentages onder de drempel fouttolerante berekening mogelijk maken"
          },
          {
            en: "Classical error correction applied to quantum computers",
            es: "Corrección de errores clásica aplicada a computadoras cuánticas",
            de: "Klassische Fehlerkorrektur angewendet auf Quantencomputer",
            nl: "Klassieke foutcorrectie toegepast op kwantumcomputers"
          },
          {
            en: "A technique to eliminate quantum uncertainty principle",
            es: "Una técnica para eliminar el principio de incertidumbre cuántica",
            de: "Eine Technik zur Elimination des Quantenunschärfeprinzips",
            nl: "Een techniek om het kwantumonzekerheidsbeginsel te elimineren"
          },
          {
            en: "Prevention of quantum decoherence in all systems",
            es: "Prevención de decoherencia cuántica en todos los sistemas",
            de: "Verhinderung von Quantendekohärenz in allen Systemen",
            nl: "Preventie van kwantumdecoherentie in alle systemen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum error correction protects quantum information by encoding logical qubits into multiple physical qubits, detecting and correcting errors without measuring the quantum information directly. The threshold theorem proves that if error rates stay below a critical threshold (~1%), fault-tolerant quantum computation is possible.",
          es: "La corrección de errores cuántica protege información cuántica codificando qubits lógicos en múltiples qubits físicos, detectando y corrigiendo errores sin medir la información cuántica directamente. El teorema de umbral prueba que si las tasas de error se mantienen bajo un umbral crítico (~1%), la computación cuántica tolerante a fallas es posible.",
          de: "Quantenfehlerkorrektur schützt Quanteninformation durch Kodierung logischer Qubits in mehrere physische Qubits, Detektion und Korrektur von Fehlern ohne direkte Messung der Quanteninformation. Das Schwellenwerttheorem beweist, dass wenn Fehlerraten unter einem kritischen Schwellenwert (~1%) bleiben, fehlertolerante Quantenberechnung möglich ist.",
          nl: "Kwantumfoutcorrectie beschermt kwantuminformatie door logische qubits te coderen in meerdere fysieke qubits, fouten te detecteren en corrigeren zonder de kwantuminformatie direct te meten. De drempelstelling bewijst dat als foutpercentages onder een kritieke drempel (~1%) blijven, fouttolerante kwantumberekening mogelijk is."
        }
      },
      {
        question: {
          en: "What is the quantum Cheshire cat effect?",
          es: "¿Qué es el efecto del gato de Cheshire cuántico?",
          de: "Was ist der Quanten-Cheshire-Katze-Effekt?",
          nl: "Wat is het kwantum Cheshire-kat effect?"
        },
        options: [
          {
            en: "A quantum phenomenon where a particle's properties can be separated from the particle itself",
            es: "Un fenómeno cuántico donde las propiedades de una partícula pueden separarse de la partícula misma",
            de: "Ein Quantenphänomen, bei dem die Eigenschaften eines Teilchens von dem Teilchen selbst getrennt werden können",
            nl: "Een kwantumfenomeen waarbij de eigenschappen van een deeltje kunnen worden gescheiden van het deeltje zelf"
          },
          {
            en: "The disappearance of quantum superposition states",
            es: "La desaparición de estados de superposición cuántica",
            de: "Das Verschwinden von Quantensuperpositionszuständen",
            nl: "Het verdwijnen van kwantumsuperpositie toestanden"
          },
          {
            en: "A thought experiment about Schrödinger's cat",
            es: "Un experimento mental sobre el gato de Schrödinger",
            de: "Ein Gedankenexperiment über Schrödingers Katze",
            nl: "Een gedachte-experiment over Schrödinger's kat"
          },
          {
            en: "Quantum entanglement between macroscopic objects",
            es: "Entrelazamiento cuántico entre objetos macroscópicos",
            de: "Quantenverschränkung zwischen makroskopischen Objekten",
            nl: "Kwantumverstrengeling tussen macroscopische objecten"
          }
        ],
        correct: 0,
        explanation: {
          en: "The quantum Cheshire cat effect demonstrates that using weak measurements and pre- and post-selection, a particle's properties (like spin) can be found in a different location than where the particle itself is detected. This counterintuitive effect challenges our classical notion of properties being inherent to objects.",
          es: "El efecto del gato de Cheshire cuántico demuestra que usando mediciones débiles y pre- y post-selección, las propiedades de una partícula (como el espín) pueden encontrarse en una ubicación diferente de donde se detecta la partícula misma. Este efecto contraintuitivo desafía nuestra noción clásica de que las propiedades son inherentes a los objetos.",
          de: "Der Quanten-Cheshire-Katze-Effekt demonstriert, dass durch schwache Messungen und Vor- und Nachselektion die Eigenschaften eines Teilchens (wie Spin) an einem anderen Ort gefunden werden können als dort, wo das Teilchen selbst detektiert wird. Dieser kontraintuitive Effekt stellt unsere klassische Vorstellung in Frage, dass Eigenschaften Objekten inhärent sind.",
          nl: "Het kwantum Cheshire-kat effect demonstreert dat met behulp van zwakke metingen en voor- en na-selectie, de eigenschappen van een deeltje (zoals spin) kunnen worden gevonden op een andere locatie dan waar het deeltje zelf wordt gedetecteerd. Dit contra-intuïtieve effect daagt onze klassieke notie uit dat eigenschappen inherent zijn aan objecten."
        }
      },
      {
        question: {
          en: "What is the quantum supremacy and its implications?",
          es: "¿Qué es la supremacía cuántica y sus implicaciones?",
          de: "Was ist Quantenüberlegenheit und ihre Implikationen?",
          nl: "Wat is kwantumsuprematie en de implicaties ervan?"
        },
        options: [
          {
            en: "When quantum computers solve specific problems exponentially faster than classical computers",
            es: "Cuando las computadoras cuánticas resuelven problemas específicos exponencialmente más rápido que las computadoras clásicas",
            de: "Wenn Quantencomputer spezifische Probleme exponentiell schneller lösen als klassische Computer",
            nl: "Wanneer kwantumcomputers specifieke problemen exponentieel sneller oplossen dan klassieke computers"
          },
          {
            en: "Quantum computers replacing all classical computers",
            es: "Las computadoras cuánticas reemplazando todas las computadoras clásicas",
            de: "Quantencomputer ersetzen alle klassischen Computer",
            nl: "Kwantumcomputers vervangen alle klassieke computers"
          },
          {
            en: "The dominance of quantum mechanics over classical physics",
            es: "El dominio de la mecánica cuántica sobre la física clásica",
            de: "Die Dominanz der Quantenmechanik über die klassische Physik",
            nl: "De dominantie van kwantummechanica over klassieke fysica"
          },
          {
            en: "Quantum systems becoming classical at all scales",
            es: "Los sistemas cuánticos volviéndose clásicos a todas las escalas",
            de: "Quantensysteme werden auf allen Skalen klassisch",
            nl: "Kwantumsystemen worden klassiek op alle schalen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum supremacy refers to quantum computers solving certain computational problems exponentially faster than the best known classical algorithms. This milestone demonstrates the computational power unique to quantum systems, with implications for cryptography, optimization, and scientific simulation.",
          es: "La supremacía cuántica se refiere a las computadoras cuánticas resolviendo ciertos problemas computacionales exponencialmente más rápido que los mejores algoritmos clásicos conocidos. Este hito demuestra el poder computacional único de los sistemas cuánticos, con implicaciones para criptografía, optimización y simulación científica.",
          de: "Quantenüberlegenheit bezieht sich darauf, dass Quantencomputer bestimmte Berechnungsprobleme exponentiell schneller lösen als die besten bekannten klassischen Algorithmen. Dieser Meilenstein zeigt die einzigartige Rechenkraft von Quantensystemen mit Auswirkungen auf Kryptographie, Optimierung und wissenschaftliche Simulation.",
          nl: "Kwantumsuprematie verwijst naar kwantumcomputers die bepaalde computationele problemen exponentieel sneller oplossen dan de best bekende klassieke algoritmen. Deze mijlpaal toont de unieke rekenkracht van kwantumsystemen, met implicaties voor cryptografie, optimalisatie en wetenschappelijke simulatie."
        }
      },
      {
        question: {
          en: "What is the quantum backaction and its fundamental limits?",
          es: "¿Qué es la retroacción cuántica y sus límites fundamentales?",
          de: "Was ist Quantenrückwirkung und ihre fundamentalen Grenzen?",
          nl: "Wat is kwantumterugwerking en zijn fundamentele limieten?"
        },
        options: [
          {
            en: "The unavoidable disturbance of quantum systems during measurement, limited by the uncertainty principle",
            es: "La perturbación inevitable de sistemas cuánticos durante la medición, limitada por el principio de incertidumbre",
            de: "Die unvermeidliche Störung von Quantensystemen während der Messung, begrenzt durch das Unschärfeprinzip",
            nl: "De onvermijdelijke verstoring van kwantumsystemen tijdens meting, beperkt door het onzekerheidsbeginsel"
          },
          {
            en: "The reflection of quantum particles from barriers",
            es: "La reflexión de partículas cuánticas de las barreras",
            de: "Die Reflexion von Quantenteilchen an Barrieren",
            nl: "De reflectie van kwantumdeeltjes van barrières"
          },
          {
            en: "Quantum systems returning to their initial state",
            es: "Los sistemas cuánticos regresando a su estado inicial",
            de: "Quantensysteme kehren zu ihrem Ausgangszustand zurück",
            nl: "Kwantumsystemen keren terug naar hun oorspronkelijke toestand"
          },
          {
            en: "The classical response of measuring instruments",
            es: "La respuesta clásica de los instrumentos de medición",
            de: "Die klassische Antwort von Messinstrumenten",
            nl: "De klassieke reactie van meetinstrumenten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum backaction describes how measurement necessarily disturbs the system being measured, arising from the fundamental quantum uncertainty principle. This sets fundamental limits on measurement precision and plays a crucial role in quantum sensing and metrology applications.",
          es: "La retroacción cuántica describe cómo la medición necesariamente perturba el sistema siendo medido, surgiendo del principio fundamental de incertidumbre cuántica. Esto establece límites fundamentales en la precisión de medición y juega un papel crucial en aplicaciones de detección cuántica y metrología.",
          de: "Quantenrückwirkung beschreibt, wie Messung notwendigerweise das gemessene System stört, entstehend aus dem fundamentalen Quantenunschärfeprinzip. Dies setzt fundamentale Grenzen für Messgenauigkeit und spielt eine entscheidende Rolle in Quantensensing und Metrologie-Anwendungen.",
          nl: "Kwantumterugwerking beschrijft hoe meting noodzakelijkerwijs het gemeten systeem verstoort, voortkomend uit het fundamentele kwantumonzekerheidsbeginsel. Dit stelt fundamentele limieten aan meetprecisie en speelt een cruciale rol in kwantumsensing en metrologie toepassingen."
        }
      },
      {
        question: {
          en: "What is the quantum resource theory framework?",
          es: "¿Qué es el marco de teoría de recursos cuánticos?",
          de: "Was ist das Rahmenwerk der Quantenressourcentheorie?",
          nl: "Wat is het kwantumresourcentheorie raamwerk?"
        },
        options: [
          {
            en: "A framework quantifying and manipulating quantum properties like entanglement, coherence, and asymmetry as resources",
            es: "Un marco para cuantificar y manipular propiedades cuánticas como entrelazamiento, coherencia y asimetría como recursos",
            de: "Ein Rahmenwerk zur Quantifizierung und Manipulation von Quanteneigenschaften wie Verschränkung, Kohärenz und Asymmetrie als Ressourcen",
            nl: "Een raamwerk voor het kwantificeren en manipuleren van kwantumeigenschappen zoals verstrengeling, coherentie en asymmetrie als bronnen"
          },
          {
            en: "The energy requirements of quantum computations",
            es: "Los requerimientos energéticos de las computaciones cuánticas",
            de: "Die Energieanforderungen von Quantenberechnungen",
            nl: "De energievereisten van kwantumberekeningen"
          },
          {
            en: "Classical resource allocation in quantum laboratories",
            es: "Asignación clásica de recursos en laboratorios cuánticos",
            de: "Klassische Ressourcenzuteilung in Quantenlaboren",
            nl: "Klassieke bronnenallocatie in kwantumlaboratoria"
          },
          {
            en: "Financial cost analysis of quantum experiments",
            es: "Análisis de costos financieros de experimentos cuánticos",
            de: "Finanzielle Kostenanalyse von Quantenexperimenten",
            nl: "Financiële kostenanalyse van kwantumexperimenten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum resource theories provide a unified framework for understanding quantum advantages by treating quantum properties like entanglement, coherence, and asymmetry as resources. These theories establish when quantum properties can be created, manipulated, or converted, providing insights into quantum information processing capabilities.",
          es: "Las teorías de recursos cuánticos proporcionan un marco unificado para entender las ventajas cuánticas tratando propiedades cuánticas como entrelazamiento, coherencia y asimetría como recursos. Estas teorías establecen cuándo las propiedades cuánticas pueden ser creadas, manipuladas o convertidas, proporcionando perspectivas sobre las capacidades de procesamiento de información cuántica.",
          de: "Quantenressourcentheorien bieten ein einheitliches Rahmenwerk zum Verständnis von Quantenvorteilen durch Behandlung von Quanteneigenschaften wie Verschränkung, Kohärenz und Asymmetrie als Ressourcen. Diese Theorien etablieren, wann Quanteneigenschaften erstellt, manipuliert oder konvertiert werden können, und geben Einblicke in Quanteninformationsverarbeitungsfähigkeiten.",
          nl: "Kwantumresourcentheorien bieden een verenigd raamwerk voor het begrijpen van kwantumvoordelen door kwantumeigenschappen zoals verstrengeling, coherentie en asymmetrie als bronnen te behandelen. Deze theorieën bepalen wanneer kwantumeigenschappen kunnen worden gecreëerd, gemanipuleerd of geconverteerd, wat inzicht geeft in kwantuminformatieverwerking mogelijkheden."
        }
      },
      {
        question: {
          en: "What is the quantum-to-classical transition and environment-induced decoherence?",
          es: "¿Qué es la transición cuántica a clásica y la decoherencia inducida por el entorno?",
          de: "Was ist der Quanten-zu-klassisch-Übergang und umgebungsinduzierte Dekohärenz?",
          nl: "Wat is de kwantum-naar-klassieke overgang en omgeving-geïnduceerde decoherentie?"
        },
        options: [
          {
            en: "The process where quantum superposition is destroyed by environmental interaction, leading to classical behavior",
            es: "El proceso donde la superposición cuántica es destruida por interacción ambiental, llevando a comportamiento clásico",
            de: "Der Prozess, bei dem Quantensuperposition durch Umgebungsinteraktion zerstört wird, was zu klassischem Verhalten führt",
            nl: "Het proces waarbij kwantumsuperpositie wordt vernietigd door omgevingsinteractie, wat leidt tot klassiek gedrag"
          },
          {
            en: "The spontaneous collapse of wavefunctions without external influence",
            es: "El colapso espontáneo de funciones de onda sin influencia externa",
            de: "Der spontane Kollaps von Wellenfunktionen ohne äußeren Einfluss",
            nl: "De spontane ineenstorting van golffuncties zonder externe invloed"
          },
          {
            en: "The transition from quantum to relativistic physics",
            es: "La transición de física cuántica a relativista",
            de: "Der Übergang von Quanten- zu relativistischer Physik",
            nl: "De overgang van kwantum naar relativistische fysica"
          },
          {
            en: "Classical systems becoming quantum at high energies",
            es: "Sistemas clásicos volviéndose cuánticos a altas energías",
            de: "Klassische Systeme werden bei hohen Energien quantentheoretisch",
            nl: "Klassieke systemen worden kwantum bij hoge energieën"
          }
        ],
        correct: 0,
        explanation: {
          en: "Environment-induced decoherence explains the quantum-to-classical transition through entanglement between the system and its environment. This destroys quantum superposition in macroscopic objects, explaining why we observe classical behavior in everyday life while preserving quantum mechanics' fundamental validity.",
          es: "La decoherencia inducida por el entorno explica la transición cuántica-a-clásica a través del entrelazamiento entre el sistema y su entorno. Esto destruye la superposición cuántica en objetos macroscópicos, explicando por qué observamos comportamiento clásico en la vida cotidiana mientras preserva la validez fundamental de la mecánica cuántica.",
          de: "Umgebungsinduzierte Dekohärenz erklärt den Quanten-zu-klassisch-Übergang durch Verschränkung zwischen System und Umgebung. Dies zerstört Quantensuperposition in makroskopischen Objekten und erklärt, warum wir klassisches Verhalten im Alltag beobachten, während die fundamentale Gültigkeit der Quantenmechanik erhalten bleibt.",
          nl: "Omgeving-geïnduceerde decoherentie verklaart de kwantum-naar-klassieke overgang door verstrengeling tussen het systeem en zijn omgeving. Dit vernietigt kwantumsuperpositie in macroscopische objecten, wat verklaart waarom we klassiek gedrag waarnemen in het dagelijks leven terwijl de fundamentele geldigheid van kwantummechanica behouden blijft."
        }
      },
      {
        question: {
          en: "What is the quantum Fisher information and its role in parameter estimation?",
          es: "¿Qué es la información de Fisher cuántica y su papel en la estimación de parámetros?",
          de: "Was ist die Quanten-Fisher-Information und ihre Rolle in der Parameterschätzung?",
          nl: "Wat is de kwantum Fisher-informatie en zijn rol in parametereschatting?"
        },
        options: [
          {
            en: "A measure quantifying the maximum precision achievable in quantum parameter estimation, bounded by the quantum Cramér-Rao bound",
            es: "Una medida que cuantifica la máxima precisión alcanzable en estimación de parámetros cuánticos, limitada por el límite de Cramér-Rao cuántico",
            de: "Ein Maß zur Quantifizierung der maximal erreichbaren Präzision in Quantenparameterschätzung, begrenzt durch die Quanten-Cramér-Rao-Grenze",
            nl: "Een maat die de maximale precisie kwantificeert die haalbaar is in kwantumparametereschatting, begrensd door de kwantum Cramér-Rao grens"
          },
          {
            en: "Classical information theory applied to quantum systems",
            es: "Teoría de información clásica aplicada a sistemas cuánticos",
            de: "Klassische Informationstheorie angewendet auf Quantensysteme",
            nl: "Klassieke informatietheorie toegepast op kwantumsystemen"
          },
          {
            en: "The amount of classical information stored in quantum states",
            es: "La cantidad de información clásica almacenada en estados cuánticos",
            de: "Die Menge klassischer Information, die in Quantenzuständen gespeichert ist",
            nl: "De hoeveelheid klassieke informatie opgeslagen in kwantumtoestanden"
          },
          {
            en: "Statistical analysis of quantum measurement outcomes",
            es: "Análisis estadístico de resultados de mediciones cuánticas",
            de: "Statistische Analyse von Quantenmessergebnissen",
            nl: "Statistische analyse van kwantummeetuitkomsten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum Fisher information F_Q quantifies the sensitivity of quantum states to parameter changes, setting the ultimate precision limit via the quantum Cramér-Rao bound: (Δθ)² ≥ 1/(νF_Q), where ν is the number of measurements. This is fundamental to quantum metrology and sensing.",
          es: "La información de Fisher cuántica F_Q cuantifica la sensibilidad de estados cuánticos a cambios de parámetros, estableciendo el límite último de precisión vía el límite de Cramér-Rao cuántico: (Δθ)² ≥ 1/(νF_Q), donde ν es el número de mediciones. Esto es fundamental para la metrología y detección cuántica.",
          de: "Quanten-Fisher-Information F_Q quantifiziert die Sensitivität von Quantenzuständen gegenüber Parameteränderungen und setzt die ultimative Präzisionsgrenze über die Quanten-Cramér-Rao-Grenze: (Δθ)² ≥ 1/(νF_Q), wobei ν die Anzahl der Messungen ist. Dies ist fundamental für Quantenmetrologie und -sensorik.",
          nl: "Kwantum Fisher-informatie F_Q kwantificeert de gevoeligheid van kwantumtoestanden voor parameterveranderingen, waarbij de ultieme precisiegrens wordt gesteld via de kwantum Cramér-Rao grens: (Δθ)² ≥ 1/(νF_Q), waarbij ν het aantal metingen is. Dit is fundamenteel voor kwantummetrologie en sensing."
        }
      },
      {
        question: {
          en: "What is the quantum advantage in sensing and metrology?",
          es: "¿Qué es la ventaja cuántica en detección y metrología?",
          de: "Was ist der Quantenvorteil in Sensorik und Metrologie?",
          nl: "Wat is het kwantumvoordeel in sensing en metrologie?"
        },
        options: [
          {
            en: "Enhanced precision scaling with particle number N as 1/N (Heisenberg limit) versus classical 1/√N (shot-noise limit)",
            es: "Escalamiento de precisión mejorado con número de partículas N como 1/N (límite de Heisenberg) versus 1/√N clásico (límite de ruido de disparo)",
            de: "Verbesserte Präzisionsskalierung mit Teilchenzahl N als 1/N (Heisenberg-Grenze) versus klassisch 1/√N (Schrotrauschen-Grenze)",
            nl: "Verbeterde precisieschaling met deeltjesaantal N als 1/N (Heisenberg-limiet) versus klassieke 1/√N (shot-noise limiet)"
          },
          {
            en: "Quantum sensors are always more sensitive than classical ones",
            es: "Los sensores cuánticos son siempre más sensibles que los clásicos",
            de: "Quantensensoren sind immer empfindlicher als klassische",
            nl: "Kwantumsensoren zijn altijd gevoeliger dan klassieke"
          },
          {
            en: "Unlimited precision in all quantum measurements",
            es: "Precisión ilimitada en todas las mediciones cuánticas",
            de: "Unbegrenzte Präzision in allen Quantenmessungen",
            nl: "Onbeperkte precisie in alle kwantummetingen"
          },
          {
            en: "Faster measurement speed compared to classical instruments",
            es: "Velocidad de medición más rápida comparada con instrumentos clásicos",
            de: "Schnellere Messgeschwindigkeit im Vergleich zu klassischen Instrumenten",
            nl: "Snellere meetsnelheid vergeleken met klassieke instrumenten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum sensing exploits entanglement and squeezing to surpass the classical shot-noise limit. While classical sensors achieve precision scaling as 1/√N, quantum sensors can reach the Heisenberg limit with 1/N scaling, providing quadratic improvement in sensitivity for applications like gravitational wave detection and atomic clocks.",
          es: "La detección cuántica explota el entrelazamiento y la compresión para superar el límite clásico de ruido de disparo. Mientras que los sensores clásicos logran escalamiento de precisión como 1/√N, los sensores cuánticos pueden alcanzar el límite de Heisenberg con escalamiento 1/N, proporcionando mejora cuadrática en sensibilidad para aplicaciones como detección de ondas gravitacionales y relojes atómicos.",
          de: "Quantensensing nutzt Verschränkung und Quetschung, um die klassische Schrotrauschen-Grenze zu überwinden. Während klassische Sensoren Präzisionsskalierung als 1/√N erreichen, können Quantensensoren die Heisenberg-Grenze mit 1/N-Skalierung erreichen und bieten quadratische Verbesserung der Sensitivität für Anwendungen wie Gravitationswellendetektion und Atomuhren.",
          nl: "Kwantumsensing benut verstrengeling en samenpersing om de klassieke shot-noise limiet te overstijgen. Terwijl klassieke sensoren precisieschaling als 1/√N bereiken, kunnen kwantumsensoren de Heisenberg-limiet bereiken met 1/N schaling, wat kwadratische verbetering in gevoeligheid biedt voor toepassingen zoals gravitatiegolfdetectie en atoomklokken."
        }
      },
      {
        question: {
          en: "What is the quantum thermalization and eigenstate thermalization hypothesis (ETH)?",
          es: "¿Qué es la termalización cuántica y la hipótesis de termalización de estados propios (ETH)?",
          de: "Was ist Quantenthermalisierung und die Eigenstate-Thermalisierungs-Hypothese (ETH)?",
          nl: "Wat is kwantumthermalisatie en de eigenstate thermalisatie hypothese (ETH)?"
        },
        options: [
          {
            en: "A framework explaining how isolated quantum systems reach thermal equilibrium through eigenstate properties",
            es: "Un marco que explica cómo los sistemas cuánticos aislados alcanzan equilibrio térmico a través de propiedades de estados propios",
            de: "Ein Rahmenwerk, das erklärt, wie isolierte Quantensysteme durch Eigenstate-Eigenschaften thermisches Gleichgewicht erreichen",
            nl: "Een raamwerk dat verklaart hoe geïsoleerde kwantumsystemen thermisch evenwicht bereiken door eigenstate eigenschappen"
          },
          {
            en: "The process of cooling quantum systems to absolute zero",
            es: "El proceso de enfriar sistemas cuánticos a cero absoluto",
            de: "Der Prozess der Kühlung von Quantensystemen auf den absoluten Nullpunkt",
            nl: "Het proces van het koelen van kwantumsystemen tot het absolute nulpunt"
          },
          {
            en: "Quantum phase transitions at finite temperature",
            es: "Transiciones de fase cuánticas a temperatura finita",
            de: "Quantenphasenübergänge bei endlicher Temperatur",
            nl: "Kwantumfase-overgangen bij eindige temperatuur"
          },
          {
            en: "The breakdown of thermodynamics in quantum systems",
            es: "La ruptura de la termodinámica en sistemas cuánticos",
            de: "Der Zusammenbruch der Thermodynamik in Quantensystemen",
            nl: "De afbraak van thermodynamica in kwantumsystemen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The eigenstate thermalization hypothesis explains how isolated quantum many-body systems can thermalize internally. ETH states that individual energy eigenstates contain thermal properties, so that even pure quantum states can exhibit thermal behavior when measured with local observables, bridging quantum mechanics and statistical mechanics.",
          es: "La hipótesis de termalización de estados propios explica cómo los sistemas cuánticos de muchos cuerpos aislados pueden termalizarse internamente. ETH establece que los estados propios de energía individuales contienen propiedades térmicas, de modo que incluso los estados cuánticos puros pueden exhibir comportamiento térmico cuando se miden con observables locales, uniendo la mecánica cuántica y la mecánica estadística.",
          de: "Die Eigenstate-Thermalisierungs-Hypothese erklärt, wie isolierte Quantenvielteilchensysteme intern thermalisieren können. ETH besagt, dass individuelle Energie-Eigenzustände thermische Eigenschaften enthalten, sodass sogar reine Quantenzustände thermisches Verhalten zeigen können, wenn sie mit lokalen Observablen gemessen werden, was Quantenmechanik und statistische Mechanik verbindet.",
          nl: "De eigenstate thermalisatie hypothese verklaart hoe geïsoleerde kwantum veeldeeltjes systemen intern kunnen thermaliseren. ETH stelt dat individuele energie-eigentoestanden thermische eigenschappen bevatten, zodat zelfs pure kwantumtoestanden thermisch gedrag kunnen vertonen wanneer gemeten met lokale observabelen, wat kwantummechanica en statistische mechanica verbindt."
        }
      },
      {
        question: {
          en: "What is the quantum many-body localization phenomenon?",
          es: "¿Qué es el fenómeno de localización cuántica de muchos cuerpos?",
          de: "Was ist das Quantenvielteilchen-Lokalisierungsphänomen?",
          nl: "Wat is het kwantum veeldeeltjes lokalisatiefenomeen?"
        },
        options: [
          {
            en: "A phase where interacting quantum systems fail to thermalize due to disorder, preserving quantum information",
            es: "Una fase donde los sistemas cuánticos interactuantes fallan en termalizarse debido al desorden, preservando información cuántica",
            de: "Eine Phase, in der wechselwirkende Quantensysteme aufgrund von Unordnung nicht thermalisieren und Quanteninformation bewahren",
            nl: "Een fase waarbij interacterende kwantumsystemen falen te thermaliseren vanwege wanorde, kwantuminformatie behoudend"
          },
          {
            en: "The spatial confinement of particles in quantum wells",
            es: "El confinamiento espacial de partículas en pozos cuánticos",
            de: "Die räumliche Eingrenzung von Teilchen in Quantentöpfen",
            nl: "De ruimtelijke opsluiting van deeltjes in kwantumputten"
          },
          {
            en: "Quantum tunneling through localized barrier states",
            es: "Túnel cuántico a través de estados de barrera localizados",
            de: "Quantentunneling durch lokalisierte Barrierenzustände",
            nl: "Kwantumtunneling door gelokaliseerde barrièretoestanden"
          },
          {
            en: "Classical localization effects in quantum systems",
            es: "Efectos de localización clásica en sistemas cuánticos",
            de: "Klassische Lokalisierungseffekte in Quantensystemen",
            nl: "Klassieke lokalisatie-effecten in kwantumsystemen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Many-body localization (MBL) occurs in disordered interacting quantum systems where strong disorder prevents thermalization. Unlike single-particle Anderson localization, MBL systems retain memory of their initial conditions indefinitely, violating the eigenstate thermalization hypothesis and potentially enabling quantum information storage.",
          es: "La localización de muchos cuerpos (MBL) ocurre en sistemas cuánticos desordenados e interactuantes donde el desorden fuerte previene la termalización. A diferencia de la localización de Anderson de una partícula, los sistemas MBL retienen memoria de sus condiciones iniciales indefinidamente, violando la hipótesis de termalización de estados propios y potencialmente permitiendo almacenamiento de información cuántica.",
          de: "Vielteilchen-Lokalisierung (MBL) tritt in ungeordneten wechselwirkenden Quantensystemen auf, wo starke Unordnung Thermalisierung verhindert. Anders als bei der Einteilchen-Anderson-Lokalisierung behalten MBL-Systeme das Gedächtnis ihrer Anfangsbedingungen unbegrenzt bei, verletzen die Eigenstate-Thermalisierungs-Hypothese und ermöglichen potenziell Quanteninformationsspeicherung.",
          nl: "Veeldeeltjes lokalisatie (MBL) treedt op in wanordelijke interacterende kwantumsystemen waar sterke wanorde thermalisatie voorkomt. In tegenstelling tot enkeldeeltje Anderson lokalisatie behouden MBL-systemen het geheugen van hun beginvoorwaarden voor onbepaalde tijd, wat de eigenstate thermalisatie hypothese schendt en mogelijk kwantuminformatie opslag mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is the quantum simulation and its computational advantages?",
          es: "¿Qué es la simulación cuántica y sus ventajas computacionales?",
          de: "Was ist Quantensimulation und ihre rechnerischen Vorteile?",
          nl: "Wat is kwantumsimulatie en zijn computationele voordelen?"
        },
        options: [
          {
            en: "Using controllable quantum systems to simulate complex quantum many-body problems intractable classically",
            es: "Usar sistemas cuánticos controlables para simular problemas complejos de muchos cuerpos cuánticos intratables clásicamente",
            de: "Verwendung kontrollierbarer Quantensysteme zur Simulation komplexer Quantenvielteilchenprobleme, die klassisch unlösbar sind",
            nl: "Het gebruik van controleerbare kwantumsystemen om complexe kwantum veeldeeltjes problemen te simuleren die klassiek onoplosbaar zijn"
          },
          {
            en: "Classical computer simulation of quantum systems",
            es: "Simulación por computadora clásica de sistemas cuánticos",
            de: "Klassische Computersimulation von Quantensystemen",
            nl: "Klassieke computersimulatie van kwantumsystemen"
          },
          {
            en: "Virtual reality representation of quantum phenomena",
            es: "Representación de realidad virtual de fenómenos cuánticos",
            de: "Virtual-Reality-Darstellung von Quantenphänomenen",
            nl: "Virtual reality representatie van kwantumfenomenen"
          },
          {
            en: "Approximation methods for quantum calculations",
            es: "Métodos de aproximación para cálculos cuánticos",
            de: "Näherungsmethoden für Quantenberechnungen",
            nl: "Benaderingsmethoden voor kwantumberekeningen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum simulation uses well-controlled quantum systems (like ultracold atoms or trapped ions) to emulate other quantum systems that are difficult to study directly. This approach can exponentially outperform classical computers for simulating quantum many-body physics, potentially revolutionizing materials science, chemistry, and condensed matter physics.",
          es: "La simulación cuántica usa sistemas cuánticos bien controlados (como átomos ultra fríos o iones atrapados) para emular otros sistemas cuánticos que son difíciles de estudiar directamente. Este enfoque puede superar exponencialmente a las computadoras clásicas para simular física cuántica de muchos cuerpos, potencialmente revolucionando la ciencia de materiales, química y física de materia condensada.",
          de: "Quantensimulation verwendet gut kontrollierte Quantensysteme (wie ultrakalte Atome oder gefangene Ionen), um andere Quantensysteme zu emulieren, die schwer direkt zu studieren sind. Dieser Ansatz kann klassische Computer bei der Simulation von Quantenvielteilchenphysik exponentiell übertreffen und potenziell Materialwissenschaft, Chemie und Festkörperphysik revolutionieren.",
          nl: "Kwantumsimulatie gebruikt goed gecontroleerde kwantumsystemen (zoals ultrakoude atomen of gevangen ionen) om andere kwantumsystemen na te bootsen die moeilijk direct te bestuderen zijn. Deze benadering kan klassieke computers exponentieel overtreffen bij het simuleren van kwantum veeldeeltjes fysica, wat mogelijk materiaalwetenschap, chemie en gecondenseerde materie fysica revolutioneert."
        }
      },
      {
        question: {
          en: "What is the quantum metrology and Heisenberg scaling?",
          es: "¿Qué es la metrología cuántica y el escalamiento de Heisenberg?",
          de: "Was ist Quantenmetrologie und Heisenberg-Skalierung?",
          nl: "Wat is kwantummetrologie en Heisenberg-schaling?"
        },
        options: [
          {
            en: "Precision measurement technique achieving 1/N parameter uncertainty scaling using quantum entanglement",
            es: "Técnica de medición de precisión que logra escalamiento de incertidumbre de parámetros 1/N usando entrelazamiento cuántico",
            de: "Präzisionsmessungstechnik, die 1/N-Parameterunsicherheitsskalierung mit Quantenverschränkung erreicht",
            nl: "Precisiemeettechniek die 1/N parameter onzekerheidsschaling bereikt met behulp van kwantumverstrengeling"
          },
          {
            en: "Classical measurement methods applied to quantum systems",
            es: "Métodos de medición clásicos aplicados a sistemas cuánticos",
            de: "Klassische Messmethoden angewendet auf Quantensysteme",
            nl: "Klassieke meetmethoden toegepast op kwantumsystemen"
          },
          {
            en: "Uncertainty principle measurements in atomic physics",
            es: "Mediciones del principio de incertidumbre en física atómica",
            de: "Unschärfeprinzip-Messungen in der Atomphysik",
            nl: "Onzekerheidsbeginsel metingen in atoomfysica"
          },
          {
            en: "Length measurements at the Heisenberg scale",
            es: "Mediciones de longitud a escala de Heisenberg",
            de: "Längenmessungen auf Heisenberg-Skala",
            nl: "Lengtemetingen op Heisenberg-schaal"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum metrology exploits quantum entanglement to achieve the Heisenberg scaling limit δθ ∝ 1/N in parameter estimation, surpassing the classical shot-noise limit δθ ∝ 1/√N. This quadratic improvement enables unprecedented precision in atomic clocks, magnetometry, and gravitational wave detection.",
          es: "La metrología cuántica explota el entrelazamiento cuántico para lograr el límite de escalamiento de Heisenberg δθ ∝ 1/N en estimación de parámetros, superando el límite clásico de ruido de disparo δθ ∝ 1/√N. Esta mejora cuadrática permite precisión sin precedentes en relojes atómicos, magnetometría y detección de ondas gravitacionales.",
          de: "Quantenmetrologie nutzt Quantenverschränkung, um die Heisenberg-Skalierungsgrenze δθ ∝ 1/N in der Parameterschätzung zu erreichen und die klassische Schrotrauschen-Grenze δθ ∝ 1/√N zu übertreffen. Diese quadratische Verbesserung ermöglicht beispiellose Präzision in Atomuhren, Magnetometrie und Gravitationswellendetektion.",
          nl: "Kwantummetrologie benut kwantumverstrengeling om de Heisenberg-schalingslimiet δθ ∝ 1/N te bereiken in parametereschatting, wat de klassieke shot-noise limiet δθ ∝ 1/√N overstijgt. Deze kwadratische verbetering maakt ongekende precisie mogelijk in atoomklokken, magnetometrie en gravitatiegolfdetectie."
        }
      }
    ]

  if (typeof window.addLevel === 'function') {
    window.addLevel('mastermind/theoretical-physics', level1);
  }
})();
