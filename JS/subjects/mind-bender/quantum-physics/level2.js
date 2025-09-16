// Quantum Physics - Level 2: Schrödinger Equation and Wave Functions
(function() {
  const level2 = {
    name: {
      en: "Schrödinger Equation and Wave Functions",
      es: "Ecuación de Schrödinger y Funciones de Onda",
      de: "Schrödinger-Gleichung und Wellenfunktionen",
      nl: "Schrödinger Vergelijking en Golffuncties"
    },
    questions: [
      {
        question: {
          en: "What does the wave function ψ (psi) represent in quantum mechanics?",
          es: "¿Qué representa la función de onda ψ (psi) en mecánica cuántica?",
          de: "Was repräsentiert die Wellenfunktion ψ (psi) in der Quantenmechanik?",
          nl: "Wat vertegenwoordigt de golffunctie ψ (psi) in de quantummechanica?"
        },
        options: [
          {
            en: "The probability amplitude of finding a particle at a given location",
            es: "La amplitud de probabilidad de encontrar una partícula en una ubicación dada",
            de: "Die Wahrscheinlichkeitsamplitude, ein Teilchen an einem bestimmten Ort zu finden",
            nl: "De waarschijnlijkheidsamplitude van het vinden van een deeltje op een bepaalde locatie"
          },
          {
            en: "The exact position of a particle",
            es: "La posición exacta de una partícula",
            de: "Die exakte Position eines Teilchens",
            nl: "De exacte positie van een deeltje"
          },
          {
            en: "The velocity of a wave",
            es: "La velocidad de una onda",
            de: "Die Geschwindigkeit einer Welle",
            nl: "De snelheid van een golf"
          },
          {
            en: "The mass of an electron",
            es: "La masa de un electrón",
            de: "Die Masse eines Elektrons",
            nl: "De massa van een elektron"
          }
        ],
        correct: 0,
        explanation: {
          en: "The wave function ψ (psi) is a mathematical function that contains all the information about a quantum system. |ψ|² gives the probability density of finding a particle at a particular position and time. The wave function itself is not directly observable, but its square magnitude gives measurable probability distributions.",
          es: "La función de onda ψ (psi) es una función matemática que contiene toda la información sobre un sistema cuántico. |ψ|² da la densidad de probabilidad de encontrar una partícula en una posición y tiempo particular. La función de onda en sí no es directamente observable, pero su magnitud al cuadrado da distribuciones de probabilidad medibles.",
          de: "Die Wellenfunktion ψ (psi) ist eine mathematische Funktion, die alle Informationen über ein Quantensystem enthält. |ψ|² gibt die Wahrscheinlichkeitsdichte an, ein Teilchen an einer bestimmten Position und Zeit zu finden. Die Wellenfunktion selbst ist nicht direkt beobachtbar, aber ihr Betragsquadrat gibt messbare Wahrscheinlichkeitsverteilungen.",
          nl: "De golffunctie ψ (psi) is een wiskundige functie die alle informatie over een quantumsysteem bevat. |ψ|² geeft de waarschijnlijkheidsdichtheid van het vinden van een deeltje op een bepaalde positie en tijd. De golffunctie zelf is niet direct waarneembaar, maar het kwadraat van zijn magnitude geeft meetbare waarschijnlijkheidsverdelingen."
        }
      },
      {
        question: {
          en: "What is the time-dependent Schrödinger equation?",
          es: "¿Cuál es la ecuación de Schrödinger dependiente del tiempo?",
          de: "Was ist die zeitabhängige Schrödinger-Gleichung?",
          nl: "Wat is de tijdsafhankelijke Schrödinger vergelijking?"
        },
        options: [
          {
            en: "iℏ ∂ψ/∂t = Ĥψ",
            es: "iℏ ∂ψ/∂t = Ĥψ",
            de: "iℏ ∂ψ/∂t = Ĥψ",
            nl: "iℏ ∂ψ/∂t = Ĥψ"
          },
          {
            en: "E = mc²",
            es: "E = mc²",
            de: "E = mc²",
            nl: "E = mc²"
          },
          {
            en: "F = ma",
            es: "F = ma",
            de: "F = ma",
            nl: "F = ma"
          },
          {
            en: "λ = h/p",
            es: "λ = h/p",
            de: "λ = h/p",
            nl: "λ = h/p"
          }
        ],
        correct: 0,
        explanation: {
          en: "The time-dependent Schrödinger equation is iℏ ∂ψ/∂t = Ĥψ, where i is the imaginary unit, ℏ is the reduced Planck constant, ψ is the wave function, and Ĥ is the Hamiltonian operator representing the total energy. This fundamental equation describes how quantum systems evolve over time.",
          es: "La ecuación de Schrödinger dependiente del tiempo es iℏ ∂ψ/∂t = Ĥψ, donde i es la unidad imaginaria, ℏ es la constante reducida de Planck, ψ es la función de onda, y Ĥ es el operador hamiltoniano que representa la energía total. Esta ecuación fundamental describe cómo evolucionan los sistemas cuánticos con el tiempo.",
          de: "Die zeitabhängige Schrödinger-Gleichung ist iℏ ∂ψ/∂t = Ĥψ, wobei i die imaginäre Einheit, ℏ die reduzierte Plancksche Konstante, ψ die Wellenfunktion und Ĥ der Hamilton-Operator ist, der die Gesamtenergie repräsentiert. Diese fundamentale Gleichung beschreibt, wie sich Quantensysteme über die Zeit entwickeln.",
          nl: "De tijdsafhankelijke Schrödinger vergelijking is iℏ ∂ψ/∂t = Ĥψ, waar i de imaginaire eenheid is, ℏ de gereduceerde Planck constante, ψ de golffunctie, en Ĥ de Hamiltoniaan operator die de totale energie vertegenwoordigt. Deze fundamentele vergelijking beschrijft hoe quantumsystemen evolueren over tijd."
        }
      },
      {
        question: {
          en: "What is the Born interpretation of the wave function?",
          es: "¿Cuál es la interpretación de Born de la función de onda?",
          de: "Was ist die Born-Interpretation der Wellenfunktion?",
          nl: "Wat is de Born interpretatie van de golffunctie?"
        },
        options: [
          {
            en: "|ψ|² represents the probability density of finding a particle",
            es: "|ψ|² representa la densidad de probabilidad de encontrar una partícula",
            de: "|ψ|² repräsentiert die Wahrscheinlichkeitsdichte, ein Teilchen zu finden",
            nl: "|ψ|² vertegenwoordigt de waarschijnlijkheidsdichtheid van het vinden van een deeltje"
          },
          {
            en: "ψ represents the exact trajectory of a particle",
            es: "ψ representa la trayectoria exacta de una partícula",
            de: "ψ repräsentiert die exakte Trajektorie eines Teilchens",
            nl: "ψ vertegenwoordigt de exacte baan van een deeltje"
          },
          {
            en: "ψ is the energy of the system",
            es: "ψ es la energía del sistema",
            de: "ψ ist die Energie des Systems",
            nl: "ψ is de energie van het systeem"
          },
          {
            en: "ψ determines the mass of particles",
            es: "ψ determina la masa de las partículas",
            de: "ψ bestimmt die Masse der Teilchen",
            nl: "ψ bepaalt de massa van deeltjes"
          }
        ],
        correct: 0,
        explanation: {
          en: "Max Born's interpretation states that |ψ|² (the square of the absolute value of the wave function) represents the probability density of finding a particle at a given position. This probabilistic interpretation was revolutionary, replacing deterministic classical mechanics with statistical quantum mechanics.",
          es: "La interpretación de Max Born establece que |ψ|² (el cuadrado del valor absoluto de la función de onda) representa la densidad de probabilidad de encontrar una partícula en una posición dada. Esta interpretación probabilística fue revolucionaria, reemplazando la mecánica clásica determinística con mecánica cuántica estadística.",
          de: "Max Borns Interpretation besagt, dass |ψ|² (das Quadrat des Absolutwerts der Wellenfunktion) die Wahrscheinlichkeitsdichte repräsentiert, ein Teilchen an einer gegebenen Position zu finden. Diese probabilistische Interpretation war revolutionär und ersetzte die deterministische klassische Mechanik durch statistische Quantenmechanik.",
          nl: "Max Born's interpretatie stelt dat |ψ|² (het kwadraat van de absolute waarde van de golffunctie) de waarschijnlijkheidsdichtheid vertegenwoordigt van het vinden van een deeltje op een gegeven positie. Deze probabilistische interpretatie was revolutionair, waarbij deterministische klassieke mechanica werd vervangen door statistische quantummechanica."
        }
      },
      {
        question: {
          en: "What is normalization of the wave function?",
          es: "¿Qué es la normalización de la función de onda?",
          de: "Was ist die Normierung der Wellenfunktion?",
          nl: "Wat is normalisatie van de golffunctie?"
        },
        options: [
          {
            en: "Ensuring the total probability of finding the particle equals 1",
            es: "Asegurar que la probabilidad total de encontrar la partícula es igual a 1",
            de: "Sicherstellen, dass die Gesamtwahrscheinlichkeit, das Teilchen zu finden, gleich 1 ist",
            nl: "Verzekeren dat de totale waarschijnlijkheid van het vinden van het deeltje gelijk is aan 1"
          },
          {
            en: "Making the wave function equal to zero",
            es: "Hacer que la función de onda sea igual a cero",
            de: "Die Wellenfunktion gleich Null setzen",
            nl: "De golffunctie gelijk maken aan nul"
          },
          {
            en: "Converting the wave function to real numbers only",
            es: "Convertir la función de onda solo a números reales",
            de: "Die Wellenfunktion nur in reelle Zahlen umwandeln",
            nl: "De golffunctie converteren naar alleen reële getallen"
          },
          {
            en: "Making the wave function infinite",
            es: "Hacer que la función de onda sea infinita",
            de: "Die Wellenfunktion unendlich machen",
            nl: "De golffunctie oneindig maken"
          }
        ],
        correct: 0,
        explanation: {
          en: "Normalization ensures that ∫|ψ|²dx = 1 over all space, meaning the total probability of finding the particle somewhere is 1 (certainty). This is a fundamental requirement for quantum mechanical wave functions to be physically meaningful.",
          es: "La normalización asegura que ∫|ψ|²dx = 1 sobre todo el espacio, significando que la probabilidad total de encontrar la partícula en algún lugar es 1 (certeza). Este es un requisito fundamental para que las funciones de onda de mecánica cuántica sean físicamente significativas.",
          de: "Die Normierung stellt sicher, dass ∫|ψ|²dx = 1 über den gesamten Raum ist, was bedeutet, dass die Gesamtwahrscheinlichkeit, das Teilchen irgendwo zu finden, 1 (Gewissheit) ist. Dies ist eine fundamentale Anforderung für quantenmechanische Wellenfunktionen, um physikalisch sinnvoll zu sein.",
          nl: "Normalisatie zorgt ervoor dat ∫|ψ|²dx = 1 over alle ruimte, wat betekent dat de totale waarschijnlijkheid van het vinden van het deeltje ergens 1 is (zekerheid). Dit is een fundamentele vereiste voor quantummechanische golffuncties om fysiek betekenisvol te zijn."
        }
      },
      {
        question: {
          en: "What is a quantum operator?",
          es: "¿Qué es un operador cuántico?",
          de: "Was ist ein Quantenoperator?",
          nl: "Wat is een quantumoperator?"
        },
        options: [
          {
            en: "A mathematical operation that extracts physical quantities from wave functions",
            es: "Una operación matemática que extrae cantidades físicas de las funciones de onda",
            de: "Eine mathematische Operation, die physikalische Größen aus Wellenfunktionen extrahiert",
            nl: "Een wiskundige operatie die fysieke grootheden uit golffuncties haalt"
          },
          {
            en: "A person who operates quantum computers",
            es: "Una persona que opera computadoras cuánticas",
            de: "Eine Person, die Quantencomputer bedient",
            nl: "Een persoon die quantumcomputers bedient"
          },
          {
            en: "A device that measures quantum states",
            es: "Un dispositivo que mide estados cuánticos",
            de: "Ein Gerät, das Quantenzustände misst",
            nl: "Een apparaat dat quantumtoestanden meet"
          },
          {
            en: "A type of quantum particle",
            es: "Un tipo de partícula cuántica",
            de: "Eine Art Quantenteilchen",
            nl: "Een type quantumdeeltje"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum operators are mathematical tools that correspond to physical observables like position, momentum, and energy. When applied to wave functions, they extract the possible values and probabilities of these physical quantities. Examples include the position operator x̂, momentum operator p̂ = -iℏ∂/∂x, and Hamiltonian operator Ĥ.",
          es: "Los operadores cuánticos son herramientas matemáticas que corresponden a observables físicos como posición, momento y energía. Cuando se aplican a funciones de onda, extraen los valores posibles y probabilidades de estas cantidades físicas. Los ejemplos incluyen el operador de posición x̂, operador de momento p̂ = -iℏ∂/∂x, y operador hamiltoniano Ĥ.",
          de: "Quantenoperatoren sind mathematische Werkzeuge, die physikalischen Observablen wie Position, Impuls und Energie entsprechen. Wenn sie auf Wellenfunktionen angewendet werden, extrahieren sie die möglichen Werte und Wahrscheinlichkeiten dieser physikalischen Größen. Beispiele sind der Positionsoperator x̂, Impulsoperator p̂ = -iℏ∂/∂x und Hamilton-Operator Ĥ.",
          nl: "Quantumoperatoren zijn wiskundige tools die overeenkomen met fysieke observabelen zoals positie, momentum en energie. Wanneer toegepast op golffuncties, halen ze de mogelijke waarden en waarschijnlijkheden van deze fysieke grootheden eruit. Voorbeelden zijn de positieoperator x̂, momentumoperator p̂ = -iℏ∂/∂x, en Hamiltoniaan operator Ĥ."
        }
      },
      {
        question: {
          en: "What is an eigenvalue equation in quantum mechanics?",
          es: "¿Qué es una ecuación de eigenvalor en mecánica cuántica?",
          de: "Was ist eine Eigenwertgleichung in der Quantenmechanik?",
          nl: "Wat is een eigenwaarde vergelijking in de quantummechanica?"
        },
        options: [
          {
            en: "Âψ = aψ, where â is an operator, a is the eigenvalue, and ψ is the eigenfunction",
            es: "Âψ = aψ, donde â es un operador, a es el eigenvalor, y ψ es la eigenfunción",
            de: "Âψ = aψ, wobei â ein Operator, a der Eigenwert und ψ die Eigenfunktion ist",
            nl: "Âψ = aψ, waar â een operator is, a de eigenwaarde, en ψ de eigenfunctie"
          },
          {
            en: "ψ = E/m",
            es: "ψ = E/m",
            de: "ψ = E/m",
            nl: "ψ = E/m"
          },
          {
            en: "A × B = C",
            es: "A × B = C",
            de: "A × B = C",
            nl: "A × B = C"
          },
          {
            en: "∫ψdx = 1",
            es: "∫ψdx = 1",
            de: "∫ψdx = 1",
            nl: "∫ψdx = 1"
          }
        ],
        correct: 0,
        explanation: {
          en: "An eigenvalue equation Âψ = aψ means that when operator  operates on eigenfunction ψ, it returns the same function multiplied by a constant 'a' (the eigenvalue). The eigenvalue represents the measured value of the physical quantity corresponding to the operator, and the eigenfunction represents the state in which this measurement is certain.",
          es: "Una ecuación de eigenvalor Âψ = aψ significa que cuando el operador  opera en la eigenfunción ψ, devuelve la misma función multiplicada por una constante 'a' (el eigenvalor). El eigenvalor representa el valor medido de la cantidad física correspondiente al operador, y la eigenfunción representa el estado en el cual esta medición es cierta.",
          de: "Eine Eigenwertgleichung Âψ = aψ bedeutet, dass wenn der Operator  auf die Eigenfunktion ψ wirkt, er dieselbe Funktion multipliziert mit einer Konstanten 'a' (dem Eigenwert) zurückgibt. Der Eigenwert repräsentiert den gemessenen Wert der physikalischen Größe entsprechend dem Operator, und die Eigenfunktion repräsentiert den Zustand, in dem diese Messung sicher ist.",
          nl: "Een eigenwaarde vergelijking Âψ = aψ betekent dat wanneer operator  werkt op eigenfunctie ψ, het dezelfde functie vermenigvuldigd met een constante 'a' (de eigenwaarde) teruggeeft. De eigenwaarde vertegenwoordigt de gemeten waarde van de fysieke grootheid corresponderend met de operator, en de eigenfunctie vertegenwoordigt de toestand waarin deze meting zeker is."
        }
      },
      {
        question: {
          en: "What is the time-independent Schrödinger equation?",
          es: "¿Cuál es la ecuación de Schrödinger independiente del tiempo?",
          de: "Was ist die zeitunabhängige Schrödinger-Gleichung?",
          nl: "Wat is de tijdsonafhankelijke Schrödinger vergelijking?"
        },
        options: [
          {
            en: "Ĥψ = Eψ",
            es: "Ĥψ = Eψ",
            de: "Ĥψ = Eψ",
            nl: "Ĥψ = Eψ"
          },
          {
            en: "iℏ ∂ψ/∂t = Ĥψ",
            es: "iℏ ∂ψ/∂t = Ĥψ",
            de: "iℏ ∂ψ/∂t = Ĥψ",
            nl: "iℏ ∂ψ/∂t = Ĥψ"
          },
          {
            en: "∇²ψ = 0",
            es: "∇²ψ = 0",
            de: "∇²ψ = 0",
            nl: "∇²ψ = 0"
          },
          {
            en: "ψ²dx = 1",
            es: "ψ²dx = 1",
            de: "ψ²dx = 1",
            nl: "ψ²dx = 1"
          }
        ],
        correct: 0,
        explanation: {
          en: "The time-independent Schrödinger equation is Ĥψ = Eψ, where Ĥ is the Hamiltonian operator, E is the energy eigenvalue, and ψ is the energy eigenfunction. This equation is used for systems where the Hamiltonian doesn't change with time, and it gives the allowed energy levels and corresponding wave functions.",
          es: "La ecuación de Schrödinger independiente del tiempo es Ĥψ = Eψ, donde Ĥ es el operador hamiltoniano, E es el eigenvalor de energía, y ψ es la eigenfunción de energía. Esta ecuación se usa para sistemas donde el hamiltoniano no cambia con el tiempo, y da los niveles de energía permitidos y las funciones de onda correspondientes.",
          de: "Die zeitunabhängige Schrödinger-Gleichung ist Ĥψ = Eψ, wobei Ĥ der Hamilton-Operator, E der Energie-Eigenwert und ψ die Energie-Eigenfunktion ist. Diese Gleichung wird für Systeme verwendet, bei denen sich der Hamilton-Operator nicht mit der Zeit ändert, und sie gibt die erlaubten Energieniveaus und entsprechenden Wellenfunktionen an.",
          nl: "De tijdsonafhankelijke Schrödinger vergelijking is Ĥψ = Eψ, waar Ĥ de Hamiltoniaan operator is, E de energie eigenwaarde, en ψ de energie eigenfunctie. Deze vergelijking wordt gebruikt voor systemen waar de Hamiltoniaan niet verandert met tijd, en het geeft de toegestane energieniveaus en corresponderende golffuncties."
        }
      },
      {
        question: {
          en: "What is quantum superposition?",
          es: "¿Qué es la superposición cuántica?",
          de: "Was ist Quantensuperposition?",
          nl: "Wat is quantumsuperpositie?"
        },
        options: [
          {
            en: "A quantum system can exist in multiple states simultaneously until measured",
            es: "Un sistema cuántico puede existir en múltiples estados simultáneamente hasta ser medido",
            de: "Ein Quantensystem kann gleichzeitig in mehreren Zuständen existieren, bis es gemessen wird",
            nl: "Een quantumsysteem kan gelijktijdig in meerdere toestanden bestaan totdat het gemeten wordt"
          },
          {
            en: "Particles can be in two places at the same time visibly",
            es: "Las partículas pueden estar en dos lugares al mismo tiempo visiblemente",
            de: "Teilchen können sichtbar gleichzeitig an zwei Orten sein",
            nl: "Deeltjes kunnen zichtbaar op twee plaatsen tegelijk zijn"
          },
          {
            en: "Quantum systems always have definite properties",
            es: "Los sistemas cuánticos siempre tienen propiedades definidas",
            de: "Quantensysteme haben immer definitive Eigenschaften",
            nl: "Quantumsystemen hebben altijd gedefinieerde eigenschappen"
          },
          {
            en: "Energy levels stack on top of each other",
            es: "Los niveles de energía se apilan uno encima del otro",
            de: "Energieniveaus stapeln sich übereinander",
            nl: "Energieniveaus stapelen bovenop elkaar"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum superposition means that a quantum system can exist in a combination of multiple quantum states simultaneously. The wave function represents this superposition as ψ = c₁ψ₁ + c₂ψ₂ + ..., where each term represents a different state. Upon measurement, the superposition collapses to one definite state.",
          es: "La superposición cuántica significa que un sistema cuántico puede existir en una combinación de múltiples estados cuánticos simultáneamente. La función de onda representa esta superposición como ψ = c₁ψ₁ + c₂ψ₂ + ..., donde cada término representa un estado diferente. Al medirse, la superposición colapsa a un estado definido.",
          de: "Quantensuperposition bedeutet, dass ein Quantensystem gleichzeitig in einer Kombination mehrerer Quantenzustände existieren kann. Die Wellenfunktion repräsentiert diese Superposition als ψ = c₁ψ₁ + c₂ψ₂ + ..., wobei jeder Term einen anderen Zustand repräsentiert. Bei einer Messung kollabiert die Superposition zu einem definitiven Zustand.",
          nl: "Quantumsuperpositie betekent dat een quantumsysteem gelijktijdig kan bestaan in een combinatie van meerdere quantumtoestanden. De golffunctie vertegenwoordigt deze superpositie als ψ = c₁ψ₁ + c₂ψ₂ + ..., waar elke term een andere toestand vertegenwoordigt. Bij meting stort de superpositie in tot één gedefinieerde toestand."
        }
      },
      {
        question: {
          en: "What is wave function collapse?",
          es: "¿Qué es el colapso de la función de onda?",
          de: "Was ist der Kollaps der Wellenfunktion?",
          nl: "Wat is instorting van de golffunctie?"
        },
        options: [
          {
            en: "The reduction of a superposition to a definite state upon measurement",
            es: "La reducción de una superposición a un estado definido al medirse",
            de: "Die Reduktion einer Superposition zu einem definitiven Zustand bei der Messung",
            nl: "De reductie van een superpositie tot een gedefinieerde toestand bij meting"
          },
          {
            en: "The wave function becoming zero everywhere",
            es: "La función de onda volviéndose cero en todas partes",
            de: "Die Wellenfunktion wird überall Null",
            nl: "De golffunctie wordt overal nul"
          },
          {
            en: "The wave function growing infinitely large",
            es: "La función de onda creciendo infinitamente grande",
            de: "Die Wellenfunktion wird unendlich groß",
            nl: "De golffunctie wordt oneindig groot"
          },
          {
            en: "The conversion of waves to particles",
            es: "La conversión de ondas a partículas",
            de: "Die Umwandlung von Wellen zu Teilchen",
            nl: "De conversie van golven naar deeltjes"
          }
        ],
        correct: 0,
        explanation: {
          en: "Wave function collapse describes the transition from a quantum superposition of multiple states to a single definite state upon measurement. Before measurement, the system exists in all possible states simultaneously (superposition), but measurement forces it into one specific state with the probabilities given by |ψ|².",
          es: "El colapso de la función de onda describe la transición de una superposición cuántica de múltiples estados a un solo estado definido al medirse. Antes de la medición, el sistema existe en todos los estados posibles simultáneamente (superposición), pero la medición lo fuerza a un estado específico con las probabilidades dadas por |ψ|².",
          de: "Der Kollaps der Wellenfunktion beschreibt den Übergang von einer Quantensuperposition mehrerer Zustände zu einem einzigen definitiven Zustand bei der Messung. Vor der Messung existiert das System gleichzeitig in allen möglichen Zuständen (Superposition), aber die Messung zwingt es in einen spezifischen Zustand mit den durch |ψ|² gegebenen Wahrscheinlichkeiten.",
          nl: "Instorting van de golffunctie beschrijft de overgang van een quantumsuperpositie van meerdere toestanden naar een enkele gedefinieerde toestand bij meting. Voor meting bestaat het systeem gelijktijdig in alle mogelijke toestanden (superpositie), maar meting dwingt het in een specifieke toestand met de waarschijnlijkheden gegeven door |ψ|²."
        }
      },
      {
        question: {
          en: "What is the Hamiltonian operator in quantum mechanics?",
          es: "¿Qué es el operador hamiltoniano en mecánica cuántica?",
          de: "Was ist der Hamilton-Operator in der Quantenmechanik?",
          nl: "Wat is de Hamiltoniaan operator in de quantummechanica?"
        },
        options: [
          {
            en: "The operator corresponding to the total energy of a quantum system",
            es: "El operador que corresponde a la energía total de un sistema cuántico",
            de: "Der Operator, der der Gesamtenergie eines Quantensystems entspricht",
            nl: "De operator die overeenkomt met de totale energie van een quantumsysteem"
          },
          {
            en: "The operator for measuring position",
            es: "El operador para medir posición",
            de: "Der Operator zur Positionsmessung",
            nl: "De operator voor positiemeting"
          },
          {
            en: "The operator for measuring momentum",
            es: "El operador para medir momento",
            de: "Der Operator zur Impulsmessung",
            nl: "De operator voor momentummeting"
          },
          {
            en: "The operator for time evolution",
            es: "El operador para evolución temporal",
            de: "Der Operator für Zeitentwicklung",
            nl: "De operator voor tijdevolutie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Hamiltonian operator Ĥ represents the total energy of a quantum system (kinetic + potential energy). In the Schrödinger equation, it determines how the system evolves over time and what energy levels are allowed. For a single particle, Ĥ = -ℏ²/2m ∇² + V(x), where the first term is kinetic energy and V(x) is potential energy.",
          es: "El operador hamiltoniano Ĥ representa la energía total de un sistema cuántico (energía cinética + potencial). En la ecuación de Schrödinger, determina cómo evoluciona el sistema con el tiempo y qué niveles de energía están permitidos. Para una partícula sola, Ĥ = -ℏ²/2m ∇² + V(x), donde el primer término es energía cinética y V(x) es energía potencial.",
          de: "Der Hamilton-Operator Ĥ repräsentiert die Gesamtenergie eines Quantensystems (kinetische + potentielle Energie). In der Schrödinger-Gleichung bestimmt er, wie sich das System über die Zeit entwickelt und welche Energieniveaus erlaubt sind. Für ein einzelnes Teilchen ist Ĥ = -ℏ²/2m ∇² + V(x), wobei der erste Term kinetische Energie und V(x) potentielle Energie ist.",
          nl: "De Hamiltoniaan operator Ĥ vertegenwoordigt de totale energie van een quantumsysteem (kinetische + potentiële energie). In de Schrödinger vergelijking bepaalt het hoe het systeem evolueert over tijd en welke energieniveaus toegestaan zijn. Voor een enkel deeltje, Ĥ = -ℏ²/2m ∇² + V(x), waar de eerste term kinetische energie is en V(x) potentiële energie."
        }
      },
      {
        question: {
          en: "What is the time-dependent Schrödinger equation?",
          es: "¿Cuál es la ecuación de Schrödinger dependiente del tiempo?",
          de: "Was ist die zeitabhängige Schrödinger-Gleichung?",
          nl: "Wat is de tijdsafhankelijke Schrödinger vergelijking?"
        },
        options: [
          {
            en: "iℏ ∂ψ/∂t = Ĥψ",
            es: "iℏ ∂ψ/∂t = Ĥψ",
            de: "iℏ ∂ψ/∂t = Ĥψ",
            nl: "iℏ ∂ψ/∂t = Ĥψ"
          },
          {
            en: "E = mc²",
            es: "E = mc²",
            de: "E = mc²",
            nl: "E = mc²"
          },
          {
            en: "F = ma",
            es: "F = ma",
            de: "F = ma",
            nl: "F = ma"
          },
          {
            en: "∇²ψ = 0",
            es: "∇²ψ = 0",
            de: "∇²ψ = 0",
            nl: "∇²ψ = 0"
          }
        ],
        correct: 0,
        explanation: {
          en: "The time-dependent Schrödinger equation iℏ ∂ψ/∂t = Ĥψ describes how quantum systems evolve over time. Here, ℏ is the reduced Planck constant, ψ is the wave function, and Ĥ is the Hamiltonian operator representing the total energy of the system. This equation is fundamental to quantum mechanics.",
          es: "La ecuación de Schrödinger dependiente del tiempo iℏ ∂ψ/∂t = Ĥψ describe cómo evolucionan los sistemas cuánticos con el tiempo. Aquí, ℏ es la constante de Planck reducida, ψ es la función de onda, y Ĥ es el operador hamiltoniano que representa la energía total del sistema. Esta ecuación es fundamental para la mecánica cuántica.",
          de: "Die zeitabhängige Schrödinger-Gleichung iℏ ∂ψ/∂t = Ĥψ beschreibt, wie sich Quantensysteme über die Zeit entwickeln. Hier ist ℏ die reduzierte Planck-Konstante, ψ die Wellenfunktion und Ĥ der Hamilton-Operator, der die Gesamtenergie des Systems repräsentiert. Diese Gleichung ist fundamental für die Quantenmechanik.",
          nl: "De tijdsafhankelijke Schrödinger vergelijking iℏ ∂ψ/∂t = Ĥψ beschrijft hoe quantumsystemen evolueren over tijd. Hier is ℏ de gereduceerde Planck constante, ψ de golffunctie, en Ĥ de Hamiltoniaan operator die de totale energie van het systeem voorstelt. Deze vergelijking is fundamenteel voor quantummechanica."
        }
      },
      {
        question: {
          en: "What is the physical significance of |ψ|²?",
          es: "¿Cuál es la significancia física de |ψ|²?",
          de: "Was ist die physikalische Bedeutung von |ψ|²?",
          nl: "Wat is de fysieke betekenis van |ψ|²?"
        },
        options: [
          {
            en: "Probability density of finding a particle at a given position",
            es: "Densidad de probabilidad de encontrar una partícula en una posición dada",
            de: "Wahrscheinlichkeitsdichte, ein Teilchen an einer gegebenen Position zu finden",
            nl: "Waarschijnlijkheidsdichtheid van het vinden van een deeltje op een gegeven positie"
          },
          {
            en: "The energy of the particle",
            es: "La energía de la partícula",
            de: "Die Energie des Teilchens",
            nl: "De energie van het deeltje"
          },
          {
            en: "The momentum of the particle",
            es: "El momento de la partícula",
            de: "Der Impuls des Teilchens",
            nl: "Het momentum van het deeltje"
          },
          {
            en: "The charge of the particle",
            es: "La carga de la partícula",
            de: "Die Ladung des Teilchens",
            nl: "De lading van het deeltje"
          }
        ],
        correct: 0,
        explanation: {
          en: "|ψ|² represents the probability density function. The probability of finding a particle in a small volume element dV around position r is |ψ(r)|²dV. This Born interpretation connects the abstract mathematical wave function to measurable physical quantities through probability.",
          es: "|ψ|² representa la función de densidad de probabilidad. La probabilidad de encontrar una partícula en un pequeño elemento de volumen dV alrededor de la posición r es |ψ(r)|²dV. Esta interpretación de Born conecta la función de onda matemática abstracta con cantidades físicas medibles a través de probabilidad.",
          de: "|ψ|² repräsentiert die Wahrscheinlichkeitsdichtefunktion. Die Wahrscheinlichkeit, ein Teilchen in einem kleinen Volumenelement dV um die Position r zu finden, ist |ψ(r)|²dV. Diese Born-Interpretation verbindet die abstrakte mathematische Wellenfunktion über Wahrscheinlichkeit mit messbaren physikalischen Größen.",
          nl: "|ψ|² vertegenwoordigt de waarschijnlijkheidsdichtheidsfunctie. De waarschijnlijkheid om een deeltje te vinden in een klein volume-element dV rond positie r is |ψ(r)|²dV. Deze Born interpretatie verbindt de abstracte wiskundige golffunctie met meetbare fysieke grootheden door waarschijnlijkheid."
        }
      },
      {
        question: {
          en: "What is the momentum operator in quantum mechanics?",
          es: "¿Cuál es el operador de momento en mecánica cuántica?",
          de: "Was ist der Impulsoperator in der Quantenmechanik?",
          nl: "Wat is de momentum operator in quantummechanica?"
        },
        options: [
          {
            en: "p̂ = -iℏ∇",
            es: "p̂ = -iℏ∇",
            de: "p̂ = -iℏ∇",
            nl: "p̂ = -iℏ∇"
          },
          {
            en: "p̂ = mv",
            es: "p̂ = mv",
            de: "p̂ = mv",
            nl: "p̂ = mv"
          },
          {
            en: "p̂ = ½mv²",
            es: "p̂ = ½mv²",
            de: "p̂ = ½mv²",
            nl: "p̂ = ½mv²"
          },
          {
            en: "p̂ = ma",
            es: "p̂ = ma",
            de: "p̂ = ma",
            nl: "p̂ = ma"
          }
        ],
        correct: 0,
        explanation: {
          en: "The momentum operator in quantum mechanics is p̂ = -iℏ∇, where ∇ is the gradient operator and ℏ is the reduced Planck constant. In one dimension, this becomes p̂ₓ = -iℏ ∂/∂x. This operator acts on the wave function to give momentum information.",
          es: "El operador de momento en mecánica cuántica es p̂ = -iℏ∇, donde ∇ es el operador gradiente y ℏ es la constante de Planck reducida. En una dimensión, esto se convierte en p̂ₓ = -iℏ ∂/∂x. Este operador actúa sobre la función de onda para dar información de momento.",
          de: "Der Impulsoperator in der Quantenmechanik ist p̂ = -iℏ∇, wobei ∇ der Gradientenoperator und ℏ die reduzierte Planck-Konstante ist. In einer Dimension wird dies zu p̂ₓ = -iℏ ∂/∂x. Dieser Operator wirkt auf die Wellenfunktion, um Impulsinformationen zu liefern.",
          nl: "De momentum operator in quantummechanica is p̂ = -iℏ∇, waar ∇ de gradiënt operator is en ℏ de gereduceerde Planck constante. In één dimensie wordt dit p̂ₓ = -iℏ ∂/∂x. Deze operator werkt op de golffunctie om momentum informatie te geven."
        }
      },
      {
        question: {
          en: "What is the Hamiltonian operator?",
          es: "¿Cuál es el operador hamiltoniano?",
          de: "Was ist der Hamilton-Operator?",
          nl: "Wat is de Hamiltoniaan operator?"
        },
        options: [
          {
            en: "The total energy operator: Ĥ = T̂ + V̂",
            es: "El operador de energía total: Ĥ = T̂ + V̂",
            de: "Der Gesamtenergieoperator: Ĥ = T̂ + V̂",
            nl: "De totale energie operator: Ĥ = T̂ + V̂"
          },
          {
            en: "The momentum operator",
            es: "El operador de momento",
            de: "Der Impulsoperator",
            nl: "De momentum operator"
          },
          {
            en: "The position operator",
            es: "El operador de posición",
            de: "Der Ortsoperator",
            nl: "De positie operator"
          },
          {
            en: "The angular momentum operator",
            es: "El operador de momento angular",
            de: "Der Drehimpulsoperator",
            nl: "De hoekmomentum operator"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Hamiltonian operator Ĥ represents the total energy of a quantum system, consisting of kinetic energy T̂ and potential energy V̂ operators. For a particle, Ĥ = p̂²/(2m) + V̂(r̂). The Hamiltonian is central to the Schrödinger equation and determines the system's time evolution.",
          es: "El operador hamiltoniano Ĥ representa la energía total de un sistema cuántico, consistiendo de operadores de energía cinética T̂ y energía potencial V̂. Para una partícula, Ĥ = p̂²/(2m) + V̂(r̂). El hamiltoniano es central para la ecuación de Schrödinger y determina la evolución temporal del sistema.",
          de: "Der Hamilton-Operator Ĥ repräsentiert die Gesamtenergie eines Quantensystems, bestehend aus kinetischer Energie T̂ und potentieller Energie V̂ Operatoren. Für ein Teilchen ist Ĥ = p̂²/(2m) + V̂(r̂). Der Hamilton-Operator ist zentral für die Schrödinger-Gleichung und bestimmt die Zeitentwicklung des Systems.",
          nl: "De Hamiltoniaan operator Ĥ vertegenwoordigt de totale energie van een quantumsysteem, bestaande uit kinetische energie T̂ en potentiële energie V̂ operatoren. Voor een deeltje is Ĥ = p̂²/(2m) + V̂(r̂). De Hamiltoniaan is centraal voor de Schrödinger vergelijking en bepaalt de tijdsevolutie van het systeem."
        }
      },
      {
        question: {
          en: "What is an eigenvalue equation in quantum mechanics?",
          es: "¿Qué es una ecuación de eigenvalor en mecánica cuántica?",
          de: "Was ist eine Eigenwertgleichung in der Quantenmechanik?",
          nl: "Wat is een eigenwaarde vergelijking in quantummechanica?"
        },
        options: [
          {
            en: "Âψ = aψ, where â is an operator, a is eigenvalue, ψ is eigenfunction",
            es: "Âψ = aψ, donde â es un operador, a es eigenvalor, ψ es eigenfunción",
            de: "Âψ = aψ, wobei â ein Operator, a ein Eigenwert, ψ eine Eigenfunktion ist",
            nl: "Âψ = aψ, waar â een operator is, a een eigenwaarde, ψ een eigenfunctie"
          },
          {
            en: "ψ² = 1",
            es: "ψ² = 1",
            de: "ψ² = 1",
            nl: "ψ² = 1"
          },
          {
            en: "∇ψ = 0",
            es: "∇ψ = 0",
            de: "∇ψ = 0",
            nl: "∇ψ = 0"
          },
          {
            en: "ψ = constant",
            es: "ψ = constante",
            de: "ψ = Konstante",
            nl: "ψ = constante"
          }
        ],
        correct: 0,
        explanation: {
          en: "An eigenvalue equation Âψ = aψ shows that when operator  acts on eigenfunction ψ, it returns the same function multiplied by eigenvalue a. In quantum mechanics, measurable quantities correspond to eigenvalues of Hermitian operators. The time-independent Schrödinger equation Ĥψ = Eψ is a prime example.",
          es: "Una ecuación de eigenvalor Âψ = aψ muestra que cuando el operador  actúa sobre la eigenfunción ψ, devuelve la misma función multiplicada por el eigenvalor a. En mecánica cuántica, las cantidades medibles corresponden a eigenvalores de operadores hermitianos. La ecuación de Schrödinger independiente del tiempo Ĥψ = Eψ es un ejemplo principal.",
          de: "Eine Eigenwertgleichung Âψ = aψ zeigt, dass wenn der Operator  auf die Eigenfunktion ψ wirkt, er dieselbe Funktion multipliziert mit dem Eigenwert a zurückgibt. In der Quantenmechanik entsprechen messbare Größen Eigenwerten hermitescher Operatoren. Die zeitunabhängige Schrödinger-Gleichung Ĥψ = Eψ ist ein Hauptbeispiel.",
          nl: "Een eigenwaarde vergelijking Âψ = aψ toont aan dat wanneer operator  werkt op eigenfunctie ψ, het dezelfde functie teruggeeft vermenigvuldigd met eigenwaarde a. In quantummechanica komen meetbare grootheden overeen met eigenwaarden van Hermitiaanse operatoren. De tijdsonafhankelijke Schrödinger vergelijking Ĥψ = Eψ is een hoofdvoorbeeld."
        }
      },
      {
        question: {
          en: "What is the particle in a box model?",
          es: "¿Cuál es el modelo de partícula en una caja?",
          de: "Was ist das Teilchen-im-Kasten-Modell?",
          nl: "Wat is het deeltje-in-een-doos model?"
        },
        options: [
          {
            en: "A particle confined to a region with infinite potential walls",
            es: "Una partícula confinada a una región con paredes de potencial infinito",
            de: "Ein Teilchen, das in einem Bereich mit unendlichen Potentialwänden eingeschlossen ist",
            nl: "Een deeltje opgesloten in een gebied met oneindige potentiaalwanden"
          },
          {
            en: "A particle moving freely through space",
            es: "Una partícula moviéndose libremente por el espacio",
            de: "Ein Teilchen, das sich frei durch den Raum bewegt",
            nl: "Een deeltje dat vrij door de ruimte beweegt"
          },
          {
            en: "A particle bound to an atomic nucleus",
            es: "Una partícula unida a un núcleo atómico",
            de: "Ein Teilchen, das an einen Atomkern gebunden ist",
            nl: "Een deeltje gebonden aan een atoomkern"
          },
          {
            en: "A particle oscillating harmonically",
            es: "Una partícula oscilando armónicamente",
            de: "Ein Teilchen, das harmonisch oszilliert",
            nl: "Een deeltje dat harmonisch oscilleert"
          }
        ],
        correct: 0,
        explanation: {
          en: "The particle in a box (infinite square well) is a fundamental quantum mechanics model where a particle is confined to a region with infinite potential barriers. Inside the box V=0, outside V=∞. This leads to standing wave solutions with quantized energy levels En = n²π²ℏ²/(2mL²).",
          es: "La partícula en una caja (pozo cuadrado infinito) es un modelo fundamental de mecánica cuántica donde una partícula está confinada a una región con barreras de potencial infinito. Dentro de la caja V=0, fuera V=∞. Esto lleva a soluciones de ondas estacionarias con niveles de energía cuantizados En = n²π²ℏ²/(2mL²).",
          de: "Das Teilchen im Kasten (unendlicher Kastenpotentialtopf) ist ein fundamentales Quantenmechanik-Modell, bei dem ein Teilchen in einem Bereich mit unendlichen Potentialbarrieren eingeschlossen ist. Im Kasten ist V=0, außerhalb V=∞. Dies führt zu stehenden Wellenlösungen mit quantisierten Energieniveaus En = n²π²ℏ²/(2mL²).",
          nl: "Het deeltje in een doos (oneindige vierkante put) is een fundamenteel quantummechanica model waarbij een deeltje opgesloten zit in een gebied met oneindige potentiaalbarrières. Binnen de doos V=0, buiten V=∞. Dit leidt tot staande golf oplossingen met gekwantificeerde energieniveaus En = n²π²ℏ²/(2mL²)."
        }
      },
      {
        question: {
          en: "What is the quantum harmonic oscillator?",
          es: "¿Qué es el oscilador armónico cuántico?",
          de: "Was ist der quantenharmonische Oszillator?",
          nl: "Wat is de quantum harmonische oscillator?"
        },
        options: [
          {
            en: "A quantum system with potential V = ½kx² and equally spaced energy levels",
            es: "Un sistema cuántico con potencial V = ½kx² y niveles de energía igualmente espaciados",
            de: "Ein Quantensystem mit Potential V = ½kx² und gleichmäßig verteilten Energieniveaus",
            nl: "Een quantumsysteem met potentiaal V = ½kx² en gelijk verdeelde energieniveaus"
          },
          {
            en: "A particle moving in a circle",
            es: "Una partícula moviéndose en círculo",
            de: "Ein Teilchen, das sich im Kreis bewegt",
            nl: "Een deeltje dat in een cirkel beweegt"
          },
          {
            en: "A particle in free space",
            es: "Una partícula en espacio libre",
            de: "Ein Teilchen im freien Raum",
            nl: "Een deeltje in de vrije ruimte"
          },
          {
            en: "A particle with constant kinetic energy",
            es: "Una partícula con energía cinética constante",
            de: "Ein Teilchen mit konstanter kinetischer Energie",
            nl: "Een deeltje met constante kinetische energie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The quantum harmonic oscillator models a particle in a parabolic potential V = ½kx². Unlike the classical case, energy levels are quantized: En = ℏω(n + ½) where ω = √(k/m). Even the ground state (n=0) has zero-point energy E₀ = ½ℏω, demonstrating quantum uncertainty effects.",
          es: "El oscilador armónico cuántico modela una partícula en un potencial parabólico V = ½kx². A diferencia del caso clásico, los niveles de energía están cuantizados: En = ℏω(n + ½) donde ω = √(k/m). Incluso el estado fundamental (n=0) tiene energía de punto cero E₀ = ½ℏω, demostrando efectos de incertidumbre cuántica.",
          de: "Der quantenharmonische Oszillator modelliert ein Teilchen in einem parabolischen Potential V = ½kx². Im Gegensatz zum klassischen Fall sind die Energieniveaus quantisiert: En = ℏω(n + ½) wobei ω = √(k/m). Sogar der Grundzustand (n=0) hat Nullpunktsenergie E₀ = ½ℏω, was Quantenunsicherheitseffekte demonstriert.",
          nl: "De quantum harmonische oscillator modelleert een deeltje in een parabolische potentiaal V = ½kx². Anders dan in het klassieke geval zijn energieniveaus gekwantificeerd: En = ℏω(n + ½) waar ω = √(k/m). Zelfs de grondtoestand (n=0) heeft nulpuntsenergie E₀ = ½ℏω, wat quantum onzekerheidseffecten demonstreert."
        }
      },
      {
        question: {
          en: "What is wave function normalization?",
          es: "¿Qué es la normalización de función de onda?",
          de: "Was ist Wellenfunktions-Normalisierung?",
          nl: "Wat is golffunctie normalisatie?"
        },
        options: [
          {
            en: "Ensuring ∫|ψ|²dτ = 1 over all space",
            es: "Asegurar que ∫|ψ|²dτ = 1 sobre todo el espacio",
            de: "Sicherstellen, dass ∫|ψ|²dτ = 1 über den gesamten Raum",
            nl: "Zorgen dat ∫|ψ|²dτ = 1 over alle ruimte"
          },
          {
            en: "Making the wave function real",
            es: "Hacer que la función de onda sea real",
            de: "Die Wellenfunktion real machen",
            nl: "De golffunctie reëel maken"
          },
          {
            en: "Setting the amplitude to unity",
            es: "Establecer la amplitud en unidad",
            de: "Die Amplitude auf eins setzen",
            nl: "De amplitude op één zetten"
          },
          {
            en: "Eliminating complex numbers",
            es: "Eliminar números complejos",
            de: "Komplexe Zahlen eliminieren",
            nl: "Complexe getallen elimineren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Wave function normalization ensures that the total probability of finding the particle somewhere in space equals 1 (certainty). Mathematically, ∫|ψ|²dτ = 1 over all space. This is essential for the probabilistic interpretation of quantum mechanics and is maintained by the time evolution of the Schrödinger equation.",
          es: "La normalización de función de onda asegura que la probabilidad total de encontrar la partícula en algún lugar del espacio sea igual a 1 (certeza). Matemáticamente, ∫|ψ|²dτ = 1 sobre todo el espacio. Esto es esencial para la interpretación probabilística de la mecánica cuántica y se mantiene por la evolución temporal de la ecuación de Schrödinger.",
          de: "Die Wellenfunktions-Normalisierung stellt sicher, dass die Gesamtwahrscheinlichkeit, das Teilchen irgendwo im Raum zu finden, gleich 1 ist (Gewissheit). Mathematisch ∫|ψ|²dτ = 1 über den gesamten Raum. Dies ist wesentlich für die probabilistische Interpretation der Quantenmechanik und wird durch die Zeitentwicklung der Schrödinger-Gleichung aufrechterhalten.",
          nl: "Golffunctie normalisatie zorgt ervoor dat de totale waarschijnlijkheid om het deeltje ergens in de ruimte te vinden gelijk is aan 1 (zekerheid). Wiskundig, ∫|ψ|²dτ = 1 over alle ruimte. Dit is essentieel voor de probabilistische interpretatie van quantummechanica en wordt gehandhaafd door de tijdsevolutie van de Schrödinger vergelijking."
        }
      },
      {
        question: {
          en: "What is the correspondence principle?",
          es: "¿Cuál es el principio de correspondencia?",
          de: "Was ist das Korrespondenzprinzip?",
          nl: "Wat is het correspondentieprincipe?"
        },
        options: [
          {
            en: "Quantum mechanics reduces to classical mechanics in the appropriate limit",
            es: "La mecánica cuántica se reduce a mecánica clásica en el límite apropiado",
            de: "Quantenmechanik reduziert sich zur klassischen Mechanik im entsprechenden Grenzfall",
            nl: "Quantummechanica reduceert tot klassieke mechanica in de juiste limiet"
          },
          {
            en: "Particles and waves are equivalent",
            es: "Partículas y ondas son equivalentes",
            de: "Teilchen und Wellen sind äquivalent",
            nl: "Deeltjes en golven zijn equivalent"
          },
          {
            en: "Energy is always conserved",
            es: "La energía siempre se conserva",
            de: "Energie ist immer erhalten",
            nl: "Energie is altijd behouden"
          },
          {
            en: "All measurements are uncertain",
            es: "Todas las mediciones son inciertas",
            de: "Alle Messungen sind unsicher",
            nl: "Alle metingen zijn onzeker"
          }
        ],
        correct: 0,
        explanation: {
          en: "The correspondence principle, formulated by Niels Bohr, states that quantum mechanics must reproduce classical physics in the limit of large quantum numbers or when ℏ → 0. This ensures continuity between quantum and classical descriptions of nature and provides a crucial test for quantum theories.",
          es: "El principio de correspondencia, formulado por Niels Bohr, establece que la mecánica cuántica debe reproducir la física clásica en el límite de números cuánticos grandes o cuando ℏ → 0. Esto asegura continuidad entre descripciones cuánticas y clásicas de la naturaleza y proporciona una prueba crucial para teorías cuánticas.",
          de: "Das Korrespondenzprinzip, von Niels Bohr formuliert, besagt, dass Quantenmechanik klassische Physik im Grenzfall großer Quantenzahlen oder wenn ℏ → 0 reproduzieren muss. Dies gewährleistet Kontinuität zwischen quantenmechanischen und klassischen Beschreibungen der Natur und bietet einen entscheidenden Test für Quantentheorien.",
          nl: "Het correspondentieprincipe, geformuleerd door Niels Bohr, stelt dat quantummechanica klassieke fysica moet reproduceren in de limiet van grote quantumgetallen of wanneer ℏ → 0. Dit zorgt voor continuïteit tussen quantum en klassieke beschrijvingen van de natuur en biedt een cruciale test voor quantumtheorieën."
        }
      },
      {
        question: {
          en: "What are quantum numbers?",
          es: "¿Qué son los números cuánticos?",
          de: "Was sind Quantenzahlen?",
          nl: "Wat zijn quantumgetallen?"
        },
        options: [
          {
            en: "Discrete values that characterize quantum states and energy levels",
            es: "Valores discretos que caracterizan estados cuánticos y niveles de energía",
            de: "Diskrete Werte, die Quantenzustände und Energieniveaus charakterisieren",
            nl: "Discrete waarden die quantumtoestanden en energieniveaus karakteriseren"
          },
          {
            en: "Random numbers in quantum calculations",
            es: "Números aleatorios en cálculos cuánticos",
            de: "Zufallszahlen in Quantenberechnungen",
            nl: "Willekeurige getallen in quantumberekeningen"
          },
          {
            en: "The number of electrons in an atom",
            es: "El número de electrones en un átomo",
            de: "Die Anzahl der Elektronen in einem Atom",
            nl: "Het aantal elektronen in een atoom"
          },
          {
            en: "Mathematical constants in equations",
            es: "Constantes matemáticas en ecuaciones",
            de: "Mathematische Konstanten in Gleichungen",
            nl: "Wiskundige constanten in vergelijkingen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum numbers are discrete values that arise from solving the Schrödinger equation for bound systems. They specify the quantum state of a particle and determine allowed energy levels. Examples include principal quantum number n, orbital angular momentum l, magnetic quantum number m, and spin s.",
          es: "Los números cuánticos son valores discretos que surgen de resolver la ecuación de Schrödinger para sistemas ligados. Especifican el estado cuántico de una partícula y determinan niveles de energía permitidos. Los ejemplos incluyen número cuántico principal n, momento angular orbital l, número cuántico magnético m, y espín s.",
          de: "Quantenzahlen sind diskrete Werte, die sich aus der Lösung der Schrödinger-Gleichung für gebundene Systeme ergeben. Sie spezifizieren den Quantenzustand eines Teilchens und bestimmen erlaubte Energieniveaus. Beispiele sind Hauptquantenzahl n, Bahndrehimpuls l, magnetische Quantenzahl m und Spin s.",
          nl: "Quantumgetallen zijn discrete waarden die voortkomen uit het oplossen van de Schrödinger vergelijking voor gebonden systemen. Ze specificeren de quantumtoestand van een deeltje en bepalen toegestane energieniveaus. Voorbeelden zijn hoofdquantumgetal n, orbitaal hoekmomentum l, magnetisch quantumgetal m, en spin s."
        }
      },
      {
        question: {
          en: "What is the time-independent Schrödinger equation?",
          es: "¿Cuál es la ecuación de Schrödinger independiente del tiempo?",
          de: "Was ist die zeitunabhängige Schrödinger-Gleichung?",
          nl: "Wat is de tijdsonafhankelijke Schrödinger vergelijking?"
        },
        options: [
          {
            en: "Ĥψ = Eψ",
            es: "Ĥψ = Eψ",
            de: "Ĥψ = Eψ",
            nl: "Ĥψ = Eψ"
          },
          {
            en: "iℏ ∂ψ/∂t = Ĥψ",
            es: "iℏ ∂ψ/∂t = Ĥψ",
            de: "iℏ ∂ψ/∂t = Ĥψ",
            nl: "iℏ ∂ψ/∂t = Ĥψ"
          },
          {
            en: "∇²ψ + k²ψ = 0",
            es: "∇²ψ + k²ψ = 0",
            de: "∇²ψ + k²ψ = 0",
            nl: "∇²ψ + k²ψ = 0"
          },
          {
            en: "E = mc²",
            es: "E = mc²",
            de: "E = mc²",
            nl: "E = mc²"
          }
        ],
        correct: 0,
        explanation: {
          en: "The time-independent Schrödinger equation Ĥψ = Eψ is an eigenvalue equation where the Hamiltonian operator Ĥ acts on the wave function ψ to give the energy eigenvalue E. Solutions represent stationary states with definite energy. This equation is fundamental for finding energy levels and wave functions of quantum systems.",
          es: "La ecuación de Schrödinger independiente del tiempo Ĥψ = Eψ es una ecuación de eigenvalor donde el operador hamiltoniano Ĥ actúa sobre la función de onda ψ para dar el eigenvalor de energía E. Las soluciones representan estados estacionarios con energía definida. Esta ecuación es fundamental para encontrar niveles de energía y funciones de onda de sistemas cuánticos.",
          de: "Die zeitunabhängige Schrödinger-Gleichung Ĥψ = Eψ ist eine Eigenwertgleichung, bei der der Hamilton-Operator Ĥ auf die Wellenfunktion ψ wirkt, um den Energie-Eigenwert E zu ergeben. Lösungen repräsentieren stationäre Zustände mit definiter Energie. Diese Gleichung ist fundamental für das Finden von Energieniveaus und Wellenfunktionen von Quantensystemen.",
          nl: "De tijdsonafhankelijke Schrödinger vergelijking Ĥψ = Eψ is een eigenwaarde vergelijking waarbij de Hamiltoniaan operator Ĥ werkt op de golffunctie ψ om de energie eigenwaarde E te geven. Oplossingen vertegenwoordigen stationaire toestanden met gedefinieerde energie. Deze vergelijking is fundamenteel voor het vinden van energieniveaus en golffuncties van quantumsystemen."
        }
      },
      {
        question: {
          en: "What is the physical meaning of wave function phase?",
          es: "¿Cuál es el significado físico de la fase de función de onda?",
          de: "Was ist die physikalische Bedeutung der Wellenfunktionsphase?",
          nl: "Wat is de fysieke betekenis van golffunctie fase?"
        },
        options: [
          {
            en: "Phase differences create interference patterns and affect quantum evolution",
            es: "Las diferencias de fase crean patrones de interferencia y afectan la evolución cuántica",
            de: "Phasenunterschiede erzeugen Interferenzmuster und beeinflussen die Quantenentwicklung",
            nl: "Faseverschillen creëren interferentiepatronen en beïnvloeden quantumevolutie"
          },
          {
            en: "Phase determines the particle's position",
            es: "La fase determina la posición de la partícula",
            de: "Die Phase bestimmt die Position des Teilchens",
            nl: "Fase bepaalt de positie van het deeltje"
          },
          {
            en: "Phase represents the particle's energy",
            es: "La fase representa la energía de la partícula",
            de: "Die Phase repräsentiert die Energie des Teilchens",
            nl: "Fase vertegenwoordigt de energie van het deeltje"
          },
          {
            en: "Phase has no physical significance",
            es: "La fase no tiene significado físico",
            de: "Die Phase hat keine physikalische Bedeutung",
            nl: "Fase heeft geen fysieke betekenis"
          }
        ],
        correct: 0,
        explanation: {
          en: "While the global phase of a wave function has no observable consequences, relative phases between different parts of a wave function or different wave functions are crucial. Phase differences determine interference patterns, affect probability distributions in superposition states, and govern quantum evolution through the time-dependent phase factor e^(-iEt/ℏ).",
          es: "Aunque la fase global de una función de onda no tiene consecuencias observables, las fases relativas entre diferentes partes de una función de onda o diferentes funciones de onda son cruciales. Las diferencias de fase determinan patrones de interferencia, afectan distribuciones de probabilidad en estados de superposición, y gobiernan la evolución cuántica a través del factor de fase dependiente del tiempo e^(-iEt/ℏ).",
          de: "Während die globale Phase einer Wellenfunktion keine beobachtbaren Konsequenzen hat, sind relative Phasen zwischen verschiedenen Teilen einer Wellenfunktion oder verschiedenen Wellenfunktionen entscheidend. Phasenunterschiede bestimmen Interferenzmuster, beeinflussen Wahrscheinlichkeitsverteilungen in Superpositionszuständen und steuern die Quantenentwicklung durch den zeitabhängigen Phasenfaktor e^(-iEt/ℏ).",
          nl: "Hoewel de globale fase van een golffunctie geen waarneembare gevolgen heeft, zijn relatieve fasen tussen verschillende delen van een golffunctie of verschillende golffuncties cruciaal. Faseverschillen bepalen interferentiepatronen, beïnvloeden waarschijnlijkheidsverdelingen in superpositietoestanden, en besturen quantumevolutie door de tijdsafhankelijke fasefactor e^(-iEt/ℏ)."
        }
      },
      {
        question: {
          en: "What is the concept of quantum superposition?",
          es: "¿Cuál es el concepto de superposición cuántica?",
          de: "Was ist das Konzept der Quantensuperposition?",
          nl: "Wat is het concept van quantumsuperpositie?"
        },
        options: [
          {
            en: "A quantum system can exist in multiple states simultaneously",
            es: "Un sistema cuántico puede existir en múltiples estados simultáneamente",
            de: "Ein Quantensystem kann gleichzeitig in mehreren Zuständen existieren",
            nl: "Een quantumsysteem kan tegelijkertijd in meerdere toestanden bestaan"
          },
          {
            en: "Particles always have definite positions",
            es: "Las partículas siempre tienen posiciones definidas",
            de: "Teilchen haben immer definite Positionen",
            nl: "Deeltjes hebben altijd gedefinieerde posities"
          },
          {
            en: "Two particles cannot occupy the same space",
            es: "Dos partículas no pueden ocupar el mismo espacio",
            de: "Zwei Teilchen können nicht denselben Raum einnehmen",
            nl: "Twee deeltjes kunnen niet dezelfde ruimte innemen"
          },
          {
            en: "Energy levels are continuous",
            es: "Los niveles de energía son continuos",
            de: "Energieniveaus sind kontinuierlich",
            nl: "Energieniveaus zijn continu"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum superposition means that a quantum system can exist in a combination of multiple quantum states simultaneously until measurement occurs. Mathematically, if |ψ₁⟩ and |ψ₂⟩ are valid states, then |ψ⟩ = c₁|ψ₁⟩ + c₂|ψ₂⟩ is also valid. This principle underlies phenomena like interference and quantum computing.",
          es: "La superposición cuántica significa que un sistema cuántico puede existir en una combinación de múltiples estados cuánticos simultáneamente hasta que ocurre la medición. Matemáticamente, si |ψ₁⟩ y |ψ₂⟩ son estados válidos, entonces |ψ⟩ = c₁|ψ₁⟩ + c₂|ψ₂⟩ también es válido. Este principio subyace a fenómenos como interferencia y computación cuántica.",
          de: "Quantensuperposition bedeutet, dass ein Quantensystem gleichzeitig in einer Kombination mehrerer Quantenzustände existieren kann, bis eine Messung stattfindet. Mathematisch: wenn |ψ₁⟩ und |ψ₂⟩ gültige Zustände sind, dann ist auch |ψ⟩ = c₁|ψ₁⟩ + c₂|ψ₂⟩ gültig. Dieses Prinzip liegt Phänomenen wie Interferenz und Quantencomputing zugrunde.",
          nl: "Quantumsuperpositie betekent dat een quantumsysteem tegelijkertijd kan bestaan in een combinatie van meerdere quantumtoestanden totdat meting plaatsvindt. Wiskundig, als |ψ₁⟩ en |ψ₂⟩ geldige toestanden zijn, dan is |ψ⟩ = c₁|ψ₁⟩ + c₂|ψ₂⟩ ook geldig. Dit principe ligt ten grondslag aan fenomenen zoals interferentie en quantumcomputing."
        }
      },
      {
        question: {
          en: "What is the quantum tunneling effect?",
          es: "¿Qué es el efecto de túnel cuántico?",
          de: "Was ist der Quantentunneleffekt?",
          nl: "Wat is het quantum tunneleffect?"
        },
        options: [
          {
            en: "Particles can pass through potential barriers classically forbidden",
            es: "Las partículas pueden pasar a través de barreras de potencial clásicamente prohibidas",
            de: "Teilchen können durch klassisch verbotene Potentialbarrieren hindurchgehen",
            nl: "Deeltjes kunnen door klassiek verboden potentiaalbarrières heen gaan"
          },
          {
            en: "Particles always reflect from barriers",
            es: "Las partículas siempre se reflejan desde barreras",
            de: "Teilchen reflektieren immer von Barrieren",
            nl: "Deeltjes reflecteren altijd van barrières"
          },
          {
            en: "Energy is not conserved in quantum mechanics",
            es: "La energía no se conserva en mecánica cuántica",
            de: "Energie ist in der Quantenmechanik nicht erhalten",
            nl: "Energie wordt niet behouden in quantummechanica"
          },
          {
            en: "Particles can travel faster than light",
            es: "Las partículas pueden viajar más rápido que la luz",
            de: "Teilchen können schneller als Licht reisen",
            nl: "Deeltjes kunnen sneller reizen dan licht"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum tunneling is a phenomenon where particles can penetrate and pass through potential energy barriers that would be insurmountable in classical physics. The probability of tunneling depends exponentially on the barrier width and height. This effect is fundamental to many quantum devices and processes like nuclear fusion in stars.",
          es: "El túnel cuántico es un fenómeno donde las partículas pueden penetrar y pasar a través de barreras de energía potencial que serían insuperables en física clásica. La probabilidad del túnel depende exponencialmente del ancho y altura de la barrera. Este efecto es fundamental para muchos dispositivos y procesos cuánticos como la fusión nuclear en estrellas.",
          de: "Quantentunneln ist ein Phänomen, bei dem Teilchen Potentialenergiebarrieren durchdringen und durchqueren können, die in der klassischen Physik unüberwindbar wären. Die Tunnelwahrscheinlichkeit hängt exponentiell von der Breite und Höhe der Barriere ab. Dieser Effekt ist fundamental für viele Quantengeräte und -prozesse wie Kernfusion in Sternen.",
          nl: "Quantum tunneling is een fenomeen waarbij deeltjes door potentiële energiebarrières heen kunnen dringen die in klassieke fysica onoverkomelijk zouden zijn. De waarschijnlijkheid van tunneling hangt exponentieel af van de breedte en hoogte van de barrière. Dit effect is fundamenteel voor veel quantum apparaten en processen zoals kernfusie in sterren."
        }
      },
      {
        question: {
          en: "What is the concept of a quantum state vector?",
          es: "¿Cuál es el concepto de un vector de estado cuántico?",
          de: "Was ist das Konzept eines Quantenzustandsvektors?",
          nl: "Wat is het concept van een quantumtoestandvector?"
        },
        options: [
          {
            en: "A mathematical representation |ψ⟩ of a quantum system in Hilbert space",
            es: "Una representación matemática |ψ⟩ de un sistema cuántico en espacio de Hilbert",
            de: "Eine mathematische Darstellung |ψ⟩ eines Quantensystems im Hilbert-Raum",
            nl: "Een wiskundige representatie |ψ⟩ van een quantumsysteem in Hilbert ruimte"
          },
          {
            en: "The physical position of a particle",
            es: "La posición física de una partícula",
            de: "Die physische Position eines Teilchens",
            nl: "De fysieke positie van een deeltje"
          },
          {
            en: "The velocity vector of a particle",
            es: "El vector de velocidad de una partícula",
            de: "Der Geschwindigkeitsvektor eines Teilchens",
            nl: "De snelheidsvector van een deeltje"
          },
          {
            en: "A classical force vector",
            es: "Un vector de fuerza clásica",
            de: "Ein klassischer Kraftvektor",
            nl: "Een klassieke krachtvector"
          }
        ],
        correct: 0,
        explanation: {
          en: "A quantum state vector |ψ⟩ is an abstract mathematical object in Hilbert space that completely describes a quantum system. It contains all measurable information about the system. The notation |⟩ is Dirac's bra-ket notation, where |ψ⟩ is a 'ket'. State vectors can be expressed in different bases and undergo unitary evolution.",
          es: "Un vector de estado cuántico |ψ⟩ es un objeto matemático abstracto en espacio de Hilbert que describe completamente un sistema cuántico. Contiene toda la información medible sobre el sistema. La notación |⟩ es la notación bra-ket de Dirac, donde |ψ⟩ es un 'ket'. Los vectores de estado pueden expresarse en diferentes bases y experimentan evolución unitaria.",
          de: "Ein Quantenzustandsvektor |ψ⟩ ist ein abstraktes mathematisches Objekt im Hilbert-Raum, das ein Quantensystem vollständig beschreibt. Er enthält alle messbaren Informationen über das System. Die Notation |⟩ ist Diracs Bra-Ket-Notation, wobei |ψ⟩ ein 'Ket' ist. Zustandsvektoren können in verschiedenen Basen ausgedrückt werden und durchlaufen unitäre Entwicklung.",
          nl: "Een quantumtoestandvector |ψ⟩ is een abstract wiskundig object in Hilbert ruimte dat een quantumsysteem volledig beschrijft. Het bevat alle meetbare informatie over het systeem. De notatie |⟩ is Dirac's bra-ket notatie, waarbij |ψ⟩ een 'ket' is. Toestandvectors kunnen worden uitgedrukt in verschillende bases en ondergaan unitaire evolutie."
        }
      },
      {
        question: {
          en: "What is the Heisenberg picture in quantum mechanics?",
          es: "¿Qué es la imagen de Heisenberg en mecánica cuántica?",
          de: "Was ist das Heisenberg-Bild in der Quantenmechanik?",
          nl: "Wat is het Heisenberg beeld in quantummechanica?"
        },
        options: [
          {
            en: "Operators evolve in time while states remain constant",
            es: "Los operadores evolucionan en el tiempo mientras los estados permanecen constantes",
            de: "Operatoren entwickeln sich zeitlich, während Zustände konstant bleiben",
            nl: "Operatoren evolueren in tijd terwijl toestanden constant blijven"
          },
          {
            en: "States evolve in time while operators remain constant",
            es: "Los estados evolucionan en el tiempo mientras los operadores permanecen constantes",
            de: "Zustände entwickeln sich zeitlich, während Operatoren konstant bleiben",
            nl: "Toestanden evolueren in tijd terwijl operatoren constant blijven"
          },
          {
            en: "Both states and operators evolve together",
            es: "Tanto estados como operadores evolucionan juntos",
            de: "Sowohl Zustände als auch Operatoren entwickeln sich gemeinsam",
            nl: "Zowel toestanden als operatoren evolueren samen"
          },
          {
            en: "Neither states nor operators change with time",
            es: "Ni estados ni operadores cambian con el tiempo",
            de: "Weder Zustände noch Operatoren ändern sich mit der Zeit",
            nl: "Noch toestanden noch operatoren veranderen met tijd"
          }
        ],
        correct: 0,
        explanation: {
          en: "In the Heisenberg picture, the quantum state remains fixed while operators evolve according to the equation dÂ/dt = (i/ℏ)[Ĥ,Â] + ∂Â/∂t. This is complementary to the Schrödinger picture where states evolve and operators are constant. The Heisenberg picture is often more natural for field theory and provides insight into classical correspondence.",
          es: "En la imagen de Heisenberg, el estado cuántico permanece fijo mientras los operadores evolucionan según la ecuación dÂ/dt = (i/ℏ)[Ĥ,Â] + ∂Â/∂t. Esto es complementario a la imagen de Schrödinger donde los estados evolucionan y los operadores son constantes. La imagen de Heisenberg es a menudo más natural para teoría de campos y proporciona perspicacia sobre correspondencia clásica.",
          de: "Im Heisenberg-Bild bleibt der Quantenzustand fest, während sich Operatoren nach der Gleichung dÂ/dt = (i/ℏ)[Ĥ,Â] + ∂Â/∂t entwickeln. Dies ist komplementär zum Schrödinger-Bild, wo sich Zustände entwickeln und Operatoren konstant sind. Das Heisenberg-Bild ist oft natürlicher für Feldtheorie und bietet Einblick in klassische Korrespondenz.",
          nl: "In het Heisenberg beeld blijft de quantumtoestand vast terwijl operatoren evolueren volgens de vergelijking dÂ/dt = (i/ℏ)[Ĥ,Â] + ∂Â/∂t. Dit is complementair aan het Schrödinger beeld waar toestanden evolueren en operatoren constant zijn. Het Heisenberg beeld is vaak natuurlijker voor veldtheorie en biedt inzicht in klassieke correspondentie."
        }
      },
      {
        question: {
          en: "What is the Born rule in quantum mechanics?",
          es: "¿Cuál es la regla de Born en mecánica cuántica?",
          de: "Was ist die Born-Regel in der Quantenmechanik?",
          nl: "Wat is de Born regel in quantummechanica?"
        },
        options: [
          {
            en: "The probability of measuring eigenvalue a is |⟨ψₐ|ψ⟩|²",
            es: "La probabilidad de medir eigenvalor a es |⟨ψₐ|ψ⟩|²",
            de: "Die Wahrscheinlichkeit, Eigenwert a zu messen, ist |⟨ψₐ|ψ⟩|²",
            nl: "De waarschijnlijkheid om eigenwaarde a te meten is |⟨ψₐ|ψ⟩|²"
          },
          {
            en: "Energy is always conserved in measurements",
            es: "La energía siempre se conserva en mediciones",
            de: "Energie ist bei Messungen immer erhalten",
            nl: "Energie wordt altijd behouden bij metingen"
          },
          {
            en: "All measurements give definite results",
            es: "Todas las mediciones dan resultados definidos",
            de: "Alle Messungen geben definite Ergebnisse",
            nl: "Alle metingen geven definitieve resultaten"
          },
          {
            en: "Particles cannot be created or destroyed",
            es: "Las partículas no pueden ser creadas o destruidas",
            de: "Teilchen können nicht erschaffen oder zerstört werden",
            nl: "Deeltjes kunnen niet worden gecreëerd of vernietigd"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Born rule provides the fundamental link between quantum states and measurement probabilities. If a system is in state |ψ⟩ and we measure an observable with eigenstate |ψₐ⟩ and eigenvalue a, the probability of getting result a is |⟨ψₐ|ψ⟩|². This rule connects the abstract mathematical formalism to experimental observations.",
          es: "La regla de Born proporciona el enlace fundamental entre estados cuánticos y probabilidades de medición. Si un sistema está en estado |ψ⟩ y medimos un observable con eigenestado |ψₐ⟩ y eigenvalor a, la probabilidad de obtener resultado a es |⟨ψₐ|ψ⟩|². Esta regla conecta el formalismo matemático abstracto con observaciones experimentales.",
          de: "Die Born-Regel liefert die fundamentale Verbindung zwischen Quantenzuständen und Messwahrscheinlichkeiten. Wenn sich ein System im Zustand |ψ⟩ befindet und wir eine Observable mit Eigenzustand |ψₐ⟩ und Eigenwert a messen, ist die Wahrscheinlichkeit, Ergebnis a zu erhalten, |⟨ψₐ|ψ⟩|². Diese Regel verbindet den abstrakten mathematischen Formalismus mit experimentellen Beobachtungen.",
          nl: "De Born regel biedt de fundamentele link tussen quantumtoestanden en meetwaarschijnlijkheden. Als een systeem in toestand |ψ⟩ is en we meten een waarneembare met eigentoestand |ψₐ⟩ en eigenwaarde a, is de waarschijnlijkheid om resultaat a te krijgen |⟨ψₐ|ψ⟩|². Deze regel verbindt het abstracte wiskundige formalisme met experimentele waarnemingen."
        }
      },
      {
        question: {
          en: "What is a Hermitian operator in quantum mechanics?",
          es: "¿Qué es un operador hermitiano en mecánica cuántica?",
          de: "Was ist ein hermitescher Operator in der Quantenmechanik?",
          nl: "Wat is een Hermitiaanse operator in quantummechanica?"
        },
        options: [
          {
            en: "An operator equal to its complex conjugate transpose: Â† = Â",
            es: "Un operador igual a su transpuesta conjugada compleja: Â† = Â",
            de: "Ein Operator gleich seiner komplex konjugierten Transponierten: Â† = Â",
            nl: "Een operator gelijk aan zijn complex geconjugeerde getransponeerde: Â† = Â"
          },
          {
            en: "An operator that commutes with the Hamiltonian",
            es: "Un operador que conmuta con el hamiltoniano",
            de: "Ein Operator, der mit dem Hamilton-Operator kommutiert",
            nl: "Een operator die commuteert met de Hamiltoniaan"
          },
          {
            en: "An operator with only positive eigenvalues",
            es: "Un operador con solo eigenvalores positivos",
            de: "Ein Operator mit nur positiven Eigenwerten",
            nl: "Een operator met alleen positieve eigenwaarden"
          },
          {
            en: "An operator that preserves normalization",
            es: "Un operador que preserva la normalización",
            de: "Ein Operator, der die Normalisierung erhält",
            nl: "Een operator die normalisatie behoudt"
          }
        ],
        correct: 0,
        explanation: {
          en: "A Hermitian operator satisfies Â† = Â, where † denotes the complex conjugate transpose (adjoint). Hermitian operators are crucial because they represent physical observables and have real eigenvalues, which correspond to measurable quantities. Examples include position, momentum, angular momentum, and the Hamiltonian operators.",
          es: "Un operador hermitiano satisface Â† = Â, donde † denota la transpuesta conjugada compleja (adjunta). Los operadores hermitianos son cruciales porque representan observables físicos y tienen eigenvalores reales, que corresponden a cantidades medibles. Ejemplos incluyen operadores de posición, momento, momento angular y hamiltoniano.",
          de: "Ein hermitescher Operator erfüllt Â† = Â, wobei † die komplex konjugierte Transponierte (Adjungierte) bezeichnet. Hermitesche Operatoren sind entscheidend, weil sie physikalische Observablen repräsentieren und reelle Eigenwerte haben, die messbaren Größen entsprechen. Beispiele sind Orts-, Impuls-, Drehimpuls- und Hamilton-Operatoren.",
          nl: "Een Hermitiaanse operator voldoet aan Â† = Â, waar † de complex geconjugeerde getransponeerde (adjoint) aanduidt. Hermitiaanse operatoren zijn cruciaal omdat ze fysieke waarneembare grootheden vertegenwoordigen en reële eigenwaarden hebben, die overeenkomen met meetbare grootheden. Voorbeelden zijn positie-, momentum-, hoekmomentum- en Hamiltoniaan operatoren."
        }
      },
      {
        question: {
          en: "What is the commutator of two operators?",
          es: "¿Cuál es el conmutador de dos operadores?",
          de: "Was ist der Kommutator zweier Operatoren?",
          nl: "Wat is de commutator van twee operatoren?"
        },
        options: [
          {
            en: "[Â,B̂] = ÂB̂ - B̂Â",
            es: "[Â,B̂] = ÂB̂ - B̂Â",
            de: "[Â,B̂] = ÂB̂ - B̂Â",
            nl: "[Â,B̂] = ÂB̂ - B̂Â"
          },
          {
            en: "[Â,B̂] = ÂB̂ + B̂Â",
            es: "[Â,B̂] = ÂB̂ + B̂Â",
            de: "[Â,B̂] = ÂB̂ + B̂Â",
            nl: "[Â,B̂] = ÂB̂ + B̂Â"
          },
          {
            en: "[Â,B̂] = Â/B̂",
            es: "[Â,B̂] = Â/B̂",
            de: "[Â,B̂] = Â/B̂",
            nl: "[Â,B̂] = Â/B̂"
          },
          {
            en: "[Â,B̂] = √(ÂB̂)",
            es: "[Â,B̂] = √(ÂB̂)",
            de: "[Â,B̂] = √(ÂB̂)",
            nl: "[Â,B̂] = √(ÂB̂)"
          }
        ],
        correct: 0,
        explanation: {
          en: "The commutator [Â,B̂] = ÂB̂ - B̂Â measures how much two operators fail to commute. When [Â,B̂] = 0, the operators commute and can have simultaneous eigenstates. Non-zero commutators lead to uncertainty relations, like [x̂,p̂] = iℏ, which gives rise to the Heisenberg uncertainty principle.",
          es: "El conmutador [Â,B̂] = ÂB̂ - B̂Â mide cuánto fallan dos operadores en conmutar. Cuando [Â,B̂] = 0, los operadores conmutan y pueden tener eigenestados simultáneos. Conmutadores no cero llevan a relaciones de incertidumbre, como [x̂,p̂] = iℏ, que da lugar al principio de incertidumbre de Heisenberg.",
          de: "Der Kommutator [Â,B̂] = ÂB̂ - B̂Â misst, wie sehr zwei Operatoren darin versagen zu kommutieren. Wenn [Â,B̂] = 0, kommutieren die Operatoren und können simultane Eigenzustände haben. Nicht-null Kommutatoren führen zu Unschärferelationen, wie [x̂,p̂] = iℏ, was zur Heisenbergschen Unschärferelation führt.",
          nl: "De commutator [Â,B̂] = ÂB̂ - B̂Â meet hoeveel twee operatoren falen om te commuteren. Wanneer [Â,B̂] = 0, commuteren de operatoren en kunnen ze simultane eigentoestanden hebben. Niet-nul commutatoren leiden tot onzekerheidsrelaties, zoals [x̂,p̂] = iℏ, wat aanleiding geeft tot het Heisenberg onzekerheidsbeginsel."
        }
      },
      {
        question: {
          en: "What is the expectation value of an operator?",
          es: "¿Cuál es el valor esperado de un operador?",
          de: "Was ist der Erwartungswert eines Operators?",
          nl: "Wat is de verwachtingswaarde van een operator?"
        },
        options: [
          {
            en: "⟨Â⟩ = ⟨ψ|Â|ψ⟩ for normalized states",
            es: "⟨Â⟩ = ⟨ψ|Â|ψ⟩ para estados normalizados",
            de: "⟨Â⟩ = ⟨ψ|Â|ψ⟩ für normalisierte Zustände",
            nl: "⟨Â⟩ = ⟨ψ|Â|ψ⟩ voor genormaliseerde toestanden"
          },
          {
            en: "The largest eigenvalue of the operator",
            es: "El eigenvalor más grande del operador",
            de: "Der größte Eigenwert des Operators",
            nl: "De grootste eigenwaarde van de operator"
          },
          {
            en: "The sum of all eigenvalues",
            es: "La suma de todos los eigenvalores",
            de: "Die Summe aller Eigenwerte",
            nl: "De som van alle eigenwaarden"
          },
          {
            en: "The trace of the operator matrix",
            es: "La traza de la matriz del operador",
            de: "Die Spur der Operatormatrix",
            nl: "Het spoor van de operator matrix"
          }
        ],
        correct: 0,
        explanation: {
          en: "The expectation value ⟨Â⟩ = ⟨ψ|Â|ψ⟩ represents the average value of observable  that would be obtained from many measurements on identically prepared systems in state |ψ⟩. For a normalized state, this gives the statistical mean of measurement outcomes, providing the connection between quantum theory and experimental results.",
          es: "El valor esperado ⟨Â⟩ = ⟨ψ|Â|ψ⟩ representa el valor promedio del observable  que se obtendría de muchas mediciones en sistemas idénticamente preparados en estado |ψ⟩. Para un estado normalizado, esto da la media estadística de resultados de medición, proporcionando la conexión entre teoría cuántica y resultados experimentales.",
          de: "Der Erwartungswert ⟨Â⟩ = ⟨ψ|Â|ψ⟩ repräsentiert den Durchschnittswert der Observablen Â, der aus vielen Messungen an identisch präparierten Systemen im Zustand |ψ⟩ erhalten würde. Für einen normalisierten Zustand gibt dies das statistische Mittel der Messergebnisse und stellt die Verbindung zwischen Quantentheorie und experimentellen Ergebnissen her.",
          nl: "De verwachtingswaarde ⟨Â⟩ = ⟨ψ|Â|ψ⟩ vertegenwoordigt de gemiddelde waarde van waarneembare Â die zou worden verkregen uit vele metingen op identiek voorbereide systemen in toestand |ψ⟩. Voor een genormaliseerde toestand geeft dit het statistische gemiddelde van meetresultaten, wat de verbinding biedt tussen quantumtheorie en experimentele resultaten."
        }
      },
      {
        question: {
          en: "What is the uncertainty principle for position and momentum?",
          es: "¿Cuál es el principio de incertidumbre para posición y momento?",
          de: "Was ist das Unschärfeprinzip für Ort und Impuls?",
          nl: "Wat is het onzekerheidsbeginsel voor positie en momentum?"
        },
        options: [
          {
            en: "Δx·Δp ≥ ℏ/2",
            es: "Δx·Δp ≥ ℏ/2",
            de: "Δx·Δp ≥ ℏ/2",
            nl: "Δx·Δp ≥ ℏ/2"
          },
          {
            en: "Δx·Δp = ℏ",
            es: "Δx·Δp = ℏ",
            de: "Δx·Δp = ℏ",
            nl: "Δx·Δp = ℏ"
          },
          {
            en: "Δx + Δp ≥ ℏ",
            es: "Δx + Δp ≥ ℏ",
            de: "Δx + Δp ≥ ℏ",
            nl: "Δx + Δp ≥ ℏ"
          },
          {
            en: "Δx = Δp",
            es: "Δx = Δp",
            de: "Δx = Δp",
            nl: "Δx = Δp"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Heisenberg uncertainty principle states that Δx·Δp ≥ ℏ/2, where Δx and Δp are the standard deviations in position and momentum measurements. This fundamental limit arises from the non-commuting nature of position and momentum operators: [x̂,p̂] = iℏ. It's not due to measurement limitations but is intrinsic to quantum mechanics.",
          es: "El principio de incertidumbre de Heisenberg establece que Δx·Δp ≥ ℏ/2, donde Δx y Δp son las desviaciones estándar en mediciones de posición y momento. Este límite fundamental surge de la naturaleza no conmutativa de operadores de posición y momento: [x̂,p̂] = iℏ. No se debe a limitaciones de medición sino que es intrínseco a la mecánica cuántica.",
          de: "Das Heisenbergsche Unschärfeprinzip besagt, dass Δx·Δp ≥ ℏ/2, wobei Δx und Δp die Standardabweichungen bei Orts- und Impulsmessungen sind. Diese fundamentale Grenze entsteht aus der nicht-kommutierenden Natur von Orts- und Impulsoperatoren: [x̂,p̂] = iℏ. Sie ist nicht auf Messbegrenzungen zurückzuführen, sondern der Quantenmechanik inhärent.",
          nl: "Het Heisenberg onzekerheidsbeginsel stelt dat Δx·Δp ≥ ℏ/2, waarbij Δx en Δp de standaardafwijkingen in positie- en momentummetingen zijn. Deze fundamentele limiet ontstaat uit de niet-commuterende natuur van positie- en momentum operatoren: [x̂,p̂] = iℏ. Het is niet te wijten aan meetbeperkingen maar is intrinsiek aan quantummechanica."
        }
      },
      {
        question: {
          en: "What is the difference between discrete and continuous spectra?",
          es: "¿Cuál es la diferencia entre espectros discretos y continuos?",
          de: "Was ist der Unterschied zwischen diskreten und kontinuierlichen Spektren?",
          nl: "Wat is het verschil tussen discrete en continue spectra?"
        },
        options: [
          {
            en: "Discrete: bound states with quantized energies; Continuous: unbound states",
            es: "Discreto: estados ligados con energías cuantizadas; Continuo: estados no ligados",
            de: "Diskret: gebundene Zustände mit quantisierten Energien; Kontinuierlich: ungebundene Zustände",
            nl: "Discreet: gebonden toestanden met gekwantificeerde energieën; Continu: ongebonden toestanden"
          },
          {
            en: "Discrete spectra only occur in atoms, continuous in molecules",
            es: "Los espectros discretos solo ocurren en átomos, continuos en moléculas",
            de: "Diskrete Spektren treten nur in Atomen auf, kontinuierliche in Molekülen",
            nl: "Discrete spectra komen alleen voor in atomen, continue in moleculen"
          },
          {
            en: "Continuous spectra have higher energies than discrete",
            es: "Los espectros continuos tienen energías más altas que los discretos",
            de: "Kontinuierliche Spektren haben höhere Energien als diskrete",
            nl: "Continue spectra hebben hogere energieën dan discrete"
          },
          {
            en: "Discrete and continuous spectra are mathematically equivalent",
            es: "Los espectros discretos y continuos son matemáticamente equivalentes",
            de: "Diskrete und kontinuierliche Spektren sind mathematisch äquivalent",
            nl: "Discrete en continue spectra zijn wiskundig equivalent"
          }
        ],
        correct: 0,
        explanation: {
          en: "Discrete spectra arise from bound states where the particle is confined by a potential (like electron orbitals in atoms), leading to quantized energy levels. Continuous spectra occur for unbound states where particles have sufficient energy to escape the potential, allowing any positive energy. The transition occurs at the ionization or dissociation threshold.",
          es: "Los espectros discretos surgen de estados ligados donde la partícula está confinada por un potencial (como orbitales electrónicos en átomos), llevando a niveles de energía cuantizados. Los espectros continuos ocurren para estados no ligados donde las partículas tienen suficiente energía para escapar del potencial, permitiendo cualquier energía positiva. La transición ocurre en el umbral de ionización o disociación.",
          de: "Diskrete Spektren entstehen aus gebundenen Zuständen, wo das Teilchen durch ein Potential eingeschränkt ist (wie Elektronenorbitale in Atomen), was zu quantisierten Energieniveaus führt. Kontinuierliche Spektren treten bei ungebundenen Zuständen auf, wo Teilchen genug Energie haben, um dem Potential zu entkommen, was jede positive Energie erlaubt. Der Übergang erfolgt an der Ionisations- oder Dissoziationsschwelle.",
          nl: "Discrete spectra ontstaan uit gebonden toestanden waar het deeltje beperkt is door een potentiaal (zoals elektron orbitalen in atomen), wat leidt tot gekwantificeerde energieniveaus. Continue spectra treden op voor ongebonden toestanden waar deeltjes voldoende energie hebben om aan de potentiaal te ontsnappen, wat elke positieve energie toestaat. De overgang vindt plaats bij de ionisatie- of dissociatiedrempel."
        }
      },
      {
        question: {
          en: "What is the concept of quantum entanglement in wave functions?",
          es: "¿Cuál es el concepto de entrelazamiento cuántico en funciones de onda?",
          de: "Was ist das Konzept der Quantenverschränkung in Wellenfunktionen?",
          nl: "Wat is het concept van quantumverstrengeling in golffuncties?"
        },
        options: [
          {
            en: "A multi-particle state that cannot be written as a product of individual states",
            es: "Un estado de múltiples partículas que no puede escribirse como producto de estados individuales",
            de: "Ein Mehrteilchenzustand, der nicht als Produkt einzelner Zustände geschrieben werden kann",
            nl: "Een multi-deeltje toestand die niet kan worden geschreven als een product van individuele toestanden"
          },
          {
            en: "When particles are physically connected",
            es: "Cuando las partículas están físicamente conectadas",
            de: "Wenn Teilchen physisch verbunden sind",
            nl: "Wanneer deeltjes fysiek verbonden zijn"
          },
          {
            en: "When particles have the same energy",
            es: "Cuando las partículas tienen la misma energía",
            de: "Wenn Teilchen die gleiche Energie haben",
            nl: "Wanneer deeltjes dezelfde energie hebben"
          },
          {
            en: "When particles are in the same location",
            es: "Cuando las partículas están en la misma ubicación",
            de: "Wenn Teilchen am gleichen Ort sind",
            nl: "Wanneer deeltjes op dezelfde locatie zijn"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum entanglement occurs when a multi-particle wave function cannot be factored into individual particle wave functions: |ψ⟩ ≠ |ψ₁⟩⊗|ψ₂⟩. The particles remain correlated even when separated, meaning measuring one instantly affects the other. This non-local correlation is fundamental to quantum mechanics and enables applications like quantum computing and cryptography.",
          es: "El entrelazamiento cuántico ocurre cuando una función de onda de múltiples partículas no puede factorizarse en funciones de onda de partículas individuales: |ψ⟩ ≠ |ψ₁⟩⊗|ψ₂⟩. Las partículas permanecen correlacionadas incluso cuando están separadas, significando que medir una afecta instantáneamente a la otra. Esta correlación no local es fundamental para la mecánica cuántica y permite aplicaciones como computación cuántica y criptografía.",
          de: "Quantenverschränkung tritt auf, wenn eine Mehrteilchen-Wellenfunktion nicht in individuelle Teilchen-Wellenfunktionen faktorisiert werden kann: |ψ⟩ ≠ |ψ₁⟩⊗|ψ₂⟩. Die Teilchen bleiben korreliert, auch wenn sie getrennt sind, was bedeutet, dass die Messung eines sofort das andere beeinflusst. Diese nicht-lokale Korrelation ist fundamental für die Quantenmechanik und ermöglicht Anwendungen wie Quantencomputing und Kryptographie.",
          nl: "Quantumverstrengeling treedt op wanneer een multi-deeltje golffunctie niet kan worden gefactoriseerd in individuele deeltje golffuncties: |ψ⟩ ≠ |ψ₁⟩⊗|ψ₂⟩. De deeltjes blijven gecorreleerd zelfs wanneer gescheiden, wat betekent dat het meten van één onmiddellijk de ander beïnvloedt. Deze niet-lokale correlatie is fundamenteel voor quantummechanica en maakt toepassingen zoals quantumcomputing en cryptografie mogelijk."
        }
      },
      {
        question: {
          en: "What is a complete set of commuting observables (CSCO)?",
          es: "¿Qué es un conjunto completo de observables que conmutan (CSCO)?",
          de: "Was ist ein vollständiger Satz kommutierender Observablen (CSCO)?",
          nl: "Wat is een complete set van commuterende waarneembare grootheden (CSCO)?"
        },
        options: [
          {
            en: "A maximal set of operators that uniquely specify quantum states",
            es: "Un conjunto máximo de operadores que especifican únicamente estados cuánticos",
            de: "Ein maximaler Satz von Operatoren, die Quantenzustände eindeutig spezifizieren",
            nl: "Een maximale set operatoren die quantumtoestanden uniek specificeren"
          },
          {
            en: "Any two operators that commute",
            es: "Cualquier par de operadores que conmutan",
            de: "Beliebige zwei Operatoren, die kommutieren",
            nl: "Willekeurige twee operatoren die commuteren"
          },
          {
            en: "All Hermitian operators in a system",
            es: "Todos los operadores hermitianos en un sistema",
            de: "Alle hermiteschen Operatoren in einem System",
            nl: "Alle Hermitiaanse operatoren in een systeem"
          },
          {
            en: "Operators with the same eigenvalues",
            es: "Operadores con los mismos eigenvalores",
            de: "Operatoren mit denselben Eigenwerten",
            nl: "Operatoren met dezelfde eigenwaarden"
          }
        ],
        correct: 0,
        explanation: {
          en: "A Complete Set of Commuting Observables (CSCO) is a maximal set of mutually commuting Hermitian operators that uniquely specifies each quantum state. Since commuting operators share simultaneous eigenstates, the eigenvalues of a CSCO provide a complete labeling of states. For example, {Ĥ,L̂²,L̂z,Ŝz} forms a CSCO for electrons in atoms.",
          es: "Un Conjunto Completo de Observables que Conmutan (CSCO) es un conjunto máximo de operadores hermitianos mutuamente conmutantes que especifica únicamente cada estado cuántico. Como operadores que conmutan comparten eigenestados simultáneos, los eigenvalores de un CSCO proporcionan un etiquetado completo de estados. Por ejemplo, {Ĥ,L̂²,L̂z,Ŝz} forma un CSCO para electrones en átomos.",
          de: "Ein Vollständiger Satz Kommutierender Observablen (CSCO) ist ein maximaler Satz gegenseitig kommutierender hermitescher Operatoren, die jeden Quantenzustand eindeutig spezifizieren. Da kommutierende Operatoren simultane Eigenzustände teilen, liefern die Eigenwerte eines CSCO eine vollständige Kennzeichnung von Zuständen. Zum Beispiel bildet {Ĥ,L̂²,L̂z,Ŝz} einen CSCO für Elektronen in Atomen.",
          nl: "Een Complete Set van Commuterende Waarneembare grootheden (CSCO) is een maximale set van wederzijds commuterende Hermitiaanse operatoren die elke quantumtoestand uniek specificeren. Omdat commuterende operatoren simultane eigentoestanden delen, bieden de eigenwaarden van een CSCO een complete labeling van toestanden. Bijvoorbeeld, {Ĥ,L̂²,L̂z,Ŝz} vormt een CSCO voor elektronen in atomen."
        }
      },
      {
        question: {
          en: "What is the variational principle in quantum mechanics?",
          es: "¿Cuál es el principio variacional en mecánica cuántica?",
          de: "Was ist das Variationsprinzip in der Quantenmechanik?",
          nl: "Wat is het variationele principe in quantummechanica?"
        },
        options: [
          {
            en: "The expectation value of energy is minimized by the ground state",
            es: "El valor esperado de energía es minimizado por el estado fundamental",
            de: "Der Erwartungswert der Energie wird durch den Grundzustand minimiert",
            nl: "De verwachtingswaarde van energie wordt geminimaliseerd door de grondtoestand"
          },
          {
            en: "All physical quantities vary continuously",
            es: "Todas las cantidades físicas varían continuamente",
            de: "Alle physikalischen Größen variieren kontinuierlich",
            nl: "Alle fysieke grootheden variëren continu"
          },
          {
            en: "Wave functions must be differentiable",
            es: "Las funciones de onda deben ser diferenciables",
            de: "Wellenfunktionen müssen differenzierbar sein",
            nl: "Golffuncties moeten differentieerbaar zijn"
          },
          {
            en: "Quantum states change smoothly over time",
            es: "Los estados cuánticos cambian suavemente con el tiempo",
            de: "Quantenzustände ändern sich glatt über die Zeit",
            nl: "Quantumtoestanden veranderen geleidelijk over tijd"
          }
        ],
        correct: 0,
        explanation: {
          en: "The variational principle states that for any normalized trial wave function |ψ⟩, the expectation value ⟨ψ|Ĥ|ψ⟩ ≥ E₀, where E₀ is the ground state energy. This principle provides a systematic way to approximate ground state energies and wave functions by minimizing ⟨Ĥ⟩ over a class of trial functions.",
          es: "El principio variacional establece que para cualquier función de onda de prueba normalizada |ψ⟩, el valor esperado ⟨ψ|Ĥ|ψ⟩ ≥ E₀, donde E₀ es la energía del estado fundamental. Este principio proporciona una manera sistemática de aproximar energías y funciones de onda del estado fundamental minimizando ⟨Ĥ⟩ sobre una clase de funciones de prueba.",
          de: "Das Variationsprinzip besagt, dass für jede normalisierte Testfunktion |ψ⟩ der Erwartungswert ⟨ψ|Ĥ|ψ⟩ ≥ E₀, wobei E₀ die Grundzustandsenergie ist. Dieses Prinzip bietet eine systematische Weise, Grundzustandsenergien und -wellenfunktionen zu approximieren, indem ⟨Ĥ⟩ über eine Klasse von Testfunktionen minimiert wird.",
          nl: "Het variationele principe stelt dat voor elke genormaliseerde proef golffunctie |ψ⟩, de verwachtingswaarde ⟨ψ|Ĥ|ψ⟩ ≥ E₀, waar E₀ de grondtoestand energie is. Dit principe biedt een systematische manier om grondtoestand energieën en golffuncties te benaderen door ⟨Ĥ⟩ te minimaliseren over een klasse van proef functies."
        }
      },
      {
        question: {
          en: "What is the WKB (Wentzel-Kramers-Brillouin) approximation?",
          es: "¿Qué es la aproximación WKB (Wentzel-Kramers-Brillouin)?",
          de: "Was ist die WKB (Wentzel-Kramers-Brillouin) Näherung?",
          nl: "Wat is de WKB (Wentzel-Kramers-Brillouin) benadering?"
        },
        options: [
          {
            en: "A semiclassical method for solving the Schrödinger equation",
            es: "Un método semiclásico para resolver la ecuación de Schrödinger",
            de: "Eine semiklassische Methode zur Lösung der Schrödinger-Gleichung",
            nl: "Een semiclassieke methode voor het oplossen van de Schrödinger vergelijking"
          },
          {
            en: "An exact solution for the hydrogen atom",
            es: "Una solución exacta para el átomo de hidrógeno",
            de: "Eine exakte Lösung für das Wasserstoffatom",
            nl: "Een exacte oplossing voor het waterstofatoom"
          },
          {
            en: "A method for calculating spin-orbit coupling",
            es: "Un método para calcular acoplamiento espín-órbita",
            de: "Eine Methode zur Berechnung von Spin-Bahn-Kopplung",
            nl: "Een methode voor het berekenen van spin-baan koppeling"
          },
          {
            en: "A technique for measuring quantum states",
            es: "Una técnica para medir estados cuánticos",
            de: "Eine Technik zur Messung von Quantenzuständen",
            nl: "Een techniek voor het meten van quantumtoestanden"
          }
        ],
        correct: 0,
        explanation: {
          en: "The WKB approximation is a semiclassical method for solving the time-independent Schrödinger equation when the potential varies slowly compared to the wavelength. The wave function is approximated as ψ(x) ≈ A e^(iS(x)/ℏ), where S(x) is the classical action. It's particularly useful for tunneling problems and finding approximate energy levels.",
          es: "La aproximación WKB es un método semiclásico para resolver la ecuación de Schrödinger independiente del tiempo cuando el potencial varía lentamente comparado con la longitud de onda. La función de onda se aproxima como ψ(x) ≈ A e^(iS(x)/ℏ), donde S(x) es la acción clásica. Es particularmente útil para problemas de túnel y encontrar niveles de energía aproximados.",
          de: "Die WKB-Näherung ist eine semiklassische Methode zur Lösung der zeitunabhängigen Schrödinger-Gleichung, wenn das Potential langsam im Vergleich zur Wellenlänge variiert. Die Wellenfunktion wird approximiert als ψ(x) ≈ A e^(iS(x)/ℏ), wobei S(x) die klassische Wirkung ist. Sie ist besonders nützlich für Tunnelprobleme und das Finden approximativer Energieniveaus.",
          nl: "De WKB benadering is een semiclassieke methode voor het oplossen van de tijdsonafhankelijke Schrödinger vergelijking wanneer de potentiaal langzaam varieert vergeleken met de golflengte. De golffunctie wordt benaderd als ψ(x) ≈ A e^(iS(x)/ℏ), waar S(x) de klassieke actie is. Het is bijzonder nuttig voor tunnel problemen en het vinden van benaderende energieniveaus."
        }
      },
      {
        question: {
          en: "What is the hydrogen atom's ground state wave function?",
          es: "¿Cuál es la función de onda del estado fundamental del átomo de hidrógeno?",
          de: "Was ist die Grundzustand-Wellenfunktion des Wasserstoffatoms?",
          nl: "Wat is de grondtoestand golffunctie van het waterstofatoom?"
        },
        options: [
          {
            en: "ψ₁₀₀ = (1/√πa₀³) e^(-r/a₀)",
            es: "ψ₁₀₀ = (1/√πa₀³) e^(-r/a₀)",
            de: "ψ₁₀₀ = (1/√πa₀³) e^(-r/a₀)",
            nl: "ψ₁₀₀ = (1/√πa₀³) e^(-r/a₀)"
          },
          {
            en: "ψ₁₀₀ = (1/a₀) e^(-r²/a₀²)",
            es: "ψ₁₀₀ = (1/a₀) e^(-r²/a₀²)",
            de: "ψ₁₀₀ = (1/a₀) e^(-r²/a₀²)",
            nl: "ψ₁₀₀ = (1/a₀) e^(-r²/a₀²)"
          },
          {
            en: "ψ₁₀₀ = r e^(-r/a₀)",
            es: "ψ₁₀₀ = r e^(-r/a₀)",
            de: "ψ₁₀₀ = r e^(-r/a₀)",
            nl: "ψ₁₀₀ = r e^(-r/a₀)"
          },
          {
            en: "ψ₁₀₀ = sin(πr/a₀)",
            es: "ψ₁₀₀ = sin(πr/a₀)",
            de: "ψ₁₀₀ = sin(πr/a₀)",
            nl: "ψ₁₀₀ = sin(πr/a₀)"
          }
        ],
        correct: 0,
        explanation: {
          en: "The hydrogen atom ground state (1s orbital) wave function is ψ₁₀₀ = (1/√πa₀³) e^(-r/a₀), where a₀ is the Bohr radius (≈0.529 Å). This function is spherically symmetric and decreases exponentially with distance from the nucleus. The corresponding energy is E₁ = -13.6 eV, and |ψ₁₀₀|² gives the probability density of finding the electron.",
          es: "La función de onda del estado fundamental del átomo de hidrógeno (orbital 1s) es ψ₁₀₀ = (1/√πa₀³) e^(-r/a₀), donde a₀ es el radio de Bohr (≈0.529 Å). Esta función es esféricamente simétrica y decrece exponencialmente con la distancia del núcleo. La energía correspondiente es E₁ = -13.6 eV, y |ψ₁₀₀|² da la densidad de probabilidad de encontrar el electrón.",
          de: "Die Grundzustand-Wellenfunktion des Wasserstoffatoms (1s-Orbital) ist ψ₁₀₀ = (1/√πa₀³) e^(-r/a₀), wobei a₀ der Bohr-Radius ist (≈0.529 Å). Diese Funktion ist sphärisch symmetrisch und nimmt exponentiell mit der Entfernung vom Kern ab. Die entsprechende Energie ist E₁ = -13.6 eV, und |ψ₁₀₀|² gibt die Wahrscheinlichkeitsdichte für das Auffinden des Elektrons.",
          nl: "De grondtoestand golffunctie van het waterstofatoom (1s orbitaal) is ψ₁₀₀ = (1/√πa₀³) e^(-r/a₀), waar a₀ de Bohr radius is (≈0.529 Å). Deze functie is sferisch symmetrisch en neemt exponentieel af met afstand van de kern. De overeenkomstige energie is E₁ = -13.6 eV, en |ψ₁₀₀|² geeft de waarschijnlijkheidsdichtheid voor het vinden van het elektron."
        }
      },
      {
        question: {
          en: "What is the radial probability density for the hydrogen atom?",
          es: "¿Cuál es la densidad de probabilidad radial para el átomo de hidrógeno?",
          de: "Was ist die radiale Wahrscheinlichkeitsdichte für das Wasserstoffatom?",
          nl: "Wat is de radiale waarschijnlijkheidsdichtheid voor het waterstofatoom?"
        },
        options: [
          {
            en: "P(r) = |R(r)|² × 4πr², probability of finding electron at distance r",
            es: "P(r) = |R(r)|² × 4πr², probabilidad de encontrar electrón a distancia r",
            de: "P(r) = |R(r)|² × 4πr², Wahrscheinlichkeit, Elektron in Entfernung r zu finden",
            nl: "P(r) = |R(r)|² × 4πr², waarschijnlijkheid om elektron op afstand r te vinden"
          },
          {
            en: "P(r) = |ψ(r)|², the wave function squared",
            es: "P(r) = |ψ(r)|², la función de onda al cuadrado",
            de: "P(r) = |ψ(r)|², die Wellenfunktion im Quadrat",
            nl: "P(r) = |ψ(r)|², de golffunctie gekwadrateerd"
          },
          {
            en: "P(r) = r²e^(-r/a₀), directly proportional to r²",
            es: "P(r) = r²e^(-r/a₀), directamente proporcional a r²",
            de: "P(r) = r²e^(-r/a₀), direkt proportional zu r²",
            nl: "P(r) = r²e^(-r/a₀), direct evenredig met r²"
          },
          {
            en: "P(r) = 1/r², inverse square law",
            es: "P(r) = 1/r², ley del inverso del cuadrado",
            de: "P(r) = 1/r², umgekehrtes Quadratgesetz",
            nl: "P(r) = 1/r², omgekeerde kwadratenwet"
          }
        ],
        correct: 0,
        explanation: {
          en: "The radial probability density P(r) = |R(r)|² × 4πr² gives the probability of finding an electron in a spherical shell of radius r and thickness dr. The 4πr² factor accounts for the surface area of the sphere at radius r. For hydrogen's ground state, this peaks at r = a₀ (Bohr radius), showing the most probable distance where the electron can be found.",
          es: "La densidad de probabilidad radial P(r) = |R(r)|² × 4πr² da la probabilidad de encontrar un electrón en una cáscara esférica de radio r y grosor dr. El factor 4πr² cuenta por el área superficial de la esfera en radio r. Para el estado fundamental del hidrógeno, esto alcanza su máximo en r = a₀ (radio de Bohr), mostrando la distancia más probable donde se puede encontrar el electrón.",
          de: "Die radiale Wahrscheinlichkeitsdichte P(r) = |R(r)|² × 4πr² gibt die Wahrscheinlichkeit an, ein Elektron in einer Kugelschale mit Radius r und Dicke dr zu finden. Der 4πr²-Faktor berücksichtigt die Oberfläche der Kugel bei Radius r. Für Wasserstoffs Grundzustand hat dies ein Maximum bei r = a₀ (Bohr-Radius), was die wahrscheinlichste Entfernung zeigt, wo das Elektron gefunden werden kann.",
          nl: "De radiale waarschijnlijkheidsdichtheid P(r) = |R(r)|² × 4πr² geeft de waarschijnlijkheid om een elektron te vinden in een bolvormige schil van straal r en dikte dr. De 4πr² factor houdt rekening met het oppervlak van de bol op straal r. Voor waterstof's grondtoestand piekt dit bij r = a₀ (Bohr radius), wat de meest waarschijnlijke afstand toont waar het elektron kan worden gevonden."
        }
      },
      {
        question: {
          en: "What is the physical meaning of nodes in wave functions?",
          es: "¿Cuál es el significado físico de los nodos en las funciones de onda?",
          de: "Was ist die physikalische Bedeutung von Knoten in Wellenfunktionen?",
          nl: "Wat is de fysieke betekenis van knopen in golffuncties?"
        },
        options: [
          {
            en: "Points where ψ = 0 and probability density is zero",
            es: "Puntos donde ψ = 0 y la densidad de probabilidad es cero",
            de: "Punkte wo ψ = 0 und die Wahrscheinlichkeitsdichte null ist",
            nl: "Punten waar ψ = 0 en waarschijnlijkheidsdichtheid nul is"
          },
          {
            en: "Points of maximum wave function amplitude",
            es: "Puntos de amplitud máxima de función de onda",
            de: "Punkte maximaler Wellenfunktions-Amplitude",
            nl: "Punten van maximale golffunctie amplitude"
          },
          {
            en: "Regions where energy is highest",
            es: "Regiones donde la energía es más alta",
            de: "Bereiche wo die Energie am höchsten ist",
            nl: "Gebieden waar energie het hoogst is"
          },
          {
            en: "Points where particles are most likely found",
            es: "Puntos donde es más probable encontrar partículas",
            de: "Punkte wo Teilchen am wahrscheinlichsten gefunden werden",
            nl: "Punten waar deeltjes het meest waarschijnlijk worden gevonden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Nodes are points (or surfaces) where the wave function ψ = 0, making the probability density |ψ|² = 0. This means the particle has zero probability of being found at these locations. The number of nodes is related to the quantum numbers: higher energy states generally have more nodes. Nodes separate regions where the wave function has opposite phases.",
          es: "Los nodos son puntos (o superficies) donde la función de onda ψ = 0, haciendo que la densidad de probabilidad |ψ|² = 0. Esto significa que la partícula tiene probabilidad cero de ser encontrada en estas ubicaciones. El número de nodos está relacionado con los números cuánticos: estados de mayor energía generalmente tienen más nodos. Los nodos separan regiones donde la función de onda tiene fases opuestas.",
          de: "Knoten sind Punkte (oder Oberflächen), wo die Wellenfunktion ψ = 0 ist, wodurch die Wahrscheinlichkeitsdichte |ψ|² = 0 wird. Dies bedeutet, dass das Teilchen null Wahrscheinlichkeit hat, an diesen Orten gefunden zu werden. Die Anzahl der Knoten ist mit den Quantenzahlen verwandt: höhere Energiezustände haben generell mehr Knoten. Knoten trennen Bereiche, wo die Wellenfunktion entgegengesetzte Phasen hat.",
          nl: "Knopen zijn punten (of oppervlakken) waar de golffunctie ψ = 0, waardoor de waarschijnlijkheidsdichtheid |ψ|² = 0 wordt. Dit betekent dat het deeltje nul waarschijnlijkheid heeft om op deze locaties te worden gevonden. Het aantal knopen is gerelateerd aan de quantumgetallen: hogere energie toestanden hebben over het algemeen meer knopen. Knopen scheiden gebieden waar de golffunctie tegengestelde fasen heeft."
        }
      },
      {
        question: {
          en: "What is the Pauli exclusion principle in terms of wave functions?",
          es: "¿Cuál es el principio de exclusión de Pauli en términos de funciones de onda?",
          de: "Was ist das Pauli-Ausschlussprinzip in Bezug auf Wellenfunktionen?",
          nl: "Wat is het Pauli uitsluitingsbeginsel in termen van golffuncties?"
        },
        options: [
          {
            en: "Multi-fermion wave functions must be antisymmetric under particle exchange",
            es: "Las funciones de onda multi-fermión deben ser antisimétricas bajo intercambio de partículas",
            de: "Multi-Fermion-Wellenfunktionen müssen antisymmetrisch unter Teilchenaustausch sein",
            nl: "Multi-fermion golffuncties moeten antisymmetrisch zijn onder deeltjesuitwisseling"
          },
          {
            en: "No two particles can have the same position",
            es: "Ninguna dos partículas pueden tener la misma posición",
            de: "Keine zwei Teilchen können dieselbe Position haben",
            nl: "Geen twee deeltjes kunnen dezelfde positie hebben"
          },
          {
            en: "Wave functions must be normalized to unity",
            es: "Las funciones de onda deben estar normalizadas a la unidad",
            de: "Wellenfunktionen müssen auf eins normalisiert sein",
            nl: "Golffuncties moeten genormaliseerd zijn tot één"
          },
          {
            en: "All particles must have different energies",
            es: "Todas las partículas deben tener diferentes energías",
            de: "Alle Teilchen müssen verschiedene Energien haben",
            nl: "Alle deeltjes moeten verschillende energieën hebben"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Pauli exclusion principle requires that the total wave function for fermions (particles with half-integer spin) be antisymmetric under exchange of any two particles: ψ(r₁,r₂,...) = -ψ(r₂,r₁,...). This antisymmetry leads to the exclusion principle: no two fermions can occupy exactly the same quantum state. It's fundamental to atomic structure and the stability of matter.",
          es: "El principio de exclusión de Pauli requiere que la función de onda total para fermiones (partículas con espín semi-entero) sea antisimétrica bajo intercambio de cualquier dos partículas: ψ(r₁,r₂,...) = -ψ(r₂,r₁,...). Esta antisimetría lleva al principio de exclusión: ningún dos fermiones pueden ocupar exactamente el mismo estado cuántico. Es fundamental para la estructura atómica y la estabilidad de la materia.",
          de: "Das Pauli-Ausschlussprinzip erfordert, dass die Gesamtwellenfunktion für Fermionen (Teilchen mit halbzahligem Spin) antisymmetrisch unter Austausch beliebiger zwei Teilchen ist: ψ(r₁,r₂,...) = -ψ(r₂,r₁,...). Diese Antisymmetrie führt zum Ausschlussprinzip: keine zwei Fermionen können exakt denselben Quantenzustand besetzen. Es ist fundamental für die Atomstruktur und Stabilität der Materie.",
          nl: "Het Pauli uitsluitingsbeginsel vereist dat de totale golffunctie voor fermionen (deeltjes met halve spin) antisymmetrisch is onder uitwisseling van willekeurige twee deeltjes: ψ(r₁,r₂,...) = -ψ(r₂,r₁,...). Deze antisymmetrie leidt tot het uitsluitingsbeginsel: geen twee fermionen kunnen exact dezelfde quantumtoestand bezetten. Het is fundamenteel voor atomaire structuur en de stabiliteit van materie."
        }
      },
      {
        question: {
          en: "What is the time evolution operator in quantum mechanics?",
          es: "¿Cuál es el operador de evolución temporal en mecánica cuántica?",
          de: "Was ist der Zeitentwicklungsoperator in der Quantenmechanik?",
          nl: "Wat is de tijdgevolutie operator in quantummechanica?"
        },
        options: [
          {
            en: "Û(t) = e^(-iĤt/ℏ) for time-independent Hamiltonians",
            es: "Û(t) = e^(-iĤt/ℏ) para hamiltonianos independientes del tiempo",
            de: "Û(t) = e^(-iĤt/ℏ) für zeitunabhängige Hamiltonians",
            nl: "Û(t) = e^(-iĤt/ℏ) voor tijdsonafhankelijke Hamiltonianen"
          },
          {
            en: "Û(t) = Ĥt for all systems",
            es: "Û(t) = Ĥt para todos los sistemas",
            de: "Û(t) = Ĥt für alle Systeme",
            nl: "Û(t) = Ĥt voor alle systemen"
          },
          {
            en: "Û(t) = e^(Ĥt) without imaginary unit",
            es: "Û(t) = e^(Ĥt) sin unidad imaginaria",
            de: "Û(t) = e^(Ĥt) ohne imaginäre Einheit",
            nl: "Û(t) = e^(Ĥt) zonder imaginaire eenheid"
          },
          {
            en: "Û(t) = cos(Ĥt/ℏ) trigonometric operator",
            es: "Û(t) = cos(Ĥt/ℏ) operador trigonométrico",
            de: "Û(t) = cos(Ĥt/ℏ) trigonometrischer Operator",
            nl: "Û(t) = cos(Ĥt/ℏ) trigonometrische operator"
          }
        ],
        correct: 0,
        explanation: {
          en: "The time evolution operator Û(t) = e^(-iĤt/ℏ) describes how quantum states evolve: |ψ(t)⟩ = Û(t)|ψ(0)⟩. It's unitary (preserves normalization) and satisfies the time-dependent Schrödinger equation. For time-independent Hamiltonians, this exponential form provides exact time evolution. The operator encapsulates all quantum dynamics.",
          es: "El operador de evolución temporal Û(t) = e^(-iĤt/ℏ) describe cómo evolucionan los estados cuánticos: |ψ(t)⟩ = Û(t)|ψ(0)⟩. Es unitario (preserva normalización) y satisface la ecuación de Schrödinger dependiente del tiempo. Para hamiltonianos independientes del tiempo, esta forma exponencial proporciona evolución temporal exacta. El operador encapsula toda la dinámica cuántica.",
          de: "Der Zeitentwicklungsoperator Û(t) = e^(-iĤt/ℏ) beschreibt, wie sich Quantenzustände entwickeln: |ψ(t)⟩ = Û(t)|ψ(0)⟩. Er ist unitär (erhält Normalisierung) und erfüllt die zeitabhängige Schrödinger-Gleichung. Für zeitunabhängige Hamiltonians liefert diese Exponentialform exakte Zeitentwicklung. Der Operator kapselt die gesamte Quantendynamik ein.",
          nl: "De tijdgevolutie operator Û(t) = e^(-iĤt/ℏ) beschrijft hoe quantumtoestanden evolueren: |ψ(t)⟩ = Û(t)|ψ(0)⟩. Het is unitair (behoudt normalisatie) en voldoet aan de tijdsafhankelijke Schrödinger vergelijking. Voor tijdsonafhankelijke Hamiltonianen biedt deze exponentiële vorm exacte tijdgevolutie. De operator omvat alle quantumdynamica."
        }
      },
      {
        question: {
          en: "What is the difference between pure and mixed quantum states in terms of density matrices?",
          es: "¿Cuál es la diferencia entre estados cuánticos puros y mixtos en términos de matrices de densidad?",
          de: "Was ist der Unterschied zwischen reinen und gemischten Quantenzuständen in Bezug auf Dichtematrizen?",
          nl: "Wat is het verschil tussen pure en gemengde quantumtoestanden in termen van dichtheidsmatrices?"
        },
        options: [
          {
            en: "Pure: ρ² = ρ, Tr(ρ²) = 1; Mixed: ρ² ≠ ρ, Tr(ρ²) < 1",
            es: "Puro: ρ² = ρ, Tr(ρ²) = 1; Mixto: ρ² ≠ ρ, Tr(ρ²) < 1",
            de: "Rein: ρ² = ρ, Tr(ρ²) = 1; Gemischt: ρ² ≠ ρ, Tr(ρ²) < 1",
            nl: "Puur: ρ² = ρ, Tr(ρ²) = 1; Gemengd: ρ² ≠ ρ, Tr(ρ²) < 1"
          },
          {
            en: "Pure states have positive eigenvalues, mixed have negative",
            es: "Estados puros tienen eigenvalores positivos, mixtos tienen negativos",
            de: "Reine Zustände haben positive Eigenwerte, gemischte haben negative",
            nl: "Pure toestanden hebben positieve eigenwaarden, gemengde hebben negatieve"
          },
          {
            en: "Pure states are time-dependent, mixed are time-independent",
            es: "Estados puros son dependientes del tiempo, mixtos son independientes del tiempo",
            de: "Reine Zustände sind zeitabhängig, gemischte sind zeitunabhängig",
            nl: "Pure toestanden zijn tijdsafhankelijk, gemengde zijn tijdsonafhankelijk"
          },
          {
            en: "Pure states have infinite dimensions, mixed have finite",
            es: "Estados puros tienen dimensiones infinitas, mixtos tienen finitas",
            de: "Reine Zustände haben unendliche Dimensionen, gemischte haben endliche",
            nl: "Pure toestanden hebben oneindige dimensies, gemengde hebben eindige"
          }
        ],
        correct: 0,
        explanation: {
          en: "Pure states satisfy ρ² = ρ (idempotent) and Tr(ρ²) = 1, meaning the density matrix represents complete information about a quantum system. Mixed states have ρ² ≠ ρ and Tr(ρ²) < 1, representing statistical mixtures where we have incomplete knowledge. Pure states can show quantum interference, while mixed states cannot due to lost phase information.",
          es: "Estados puros satisfacen ρ² = ρ (idempotente) y Tr(ρ²) = 1, significando que la matriz de densidad representa información completa sobre un sistema cuántico. Estados mixtos tienen ρ² ≠ ρ y Tr(ρ²) < 1, representando mezclas estadísticas donde tenemos conocimiento incompleto. Estados puros pueden mostrar interferencia cuántica, mientras estados mixtos no pueden debido a información de fase perdida.",
          de: "Reine Zustände erfüllen ρ² = ρ (idempotent) und Tr(ρ²) = 1, was bedeutet, dass die Dichtematrix vollständige Information über ein Quantensystem repräsentiert. Gemischte Zustände haben ρ² ≠ ρ und Tr(ρ²) < 1, repräsentieren statistische Mischungen wo wir unvollständiges Wissen haben. Reine Zustände können Quanteninterferenz zeigen, während gemischte Zustände dies aufgrund verlorener Phaseninformation nicht können.",
          nl: "Pure toestanden voldoen aan ρ² = ρ (idempotent) en Tr(ρ²) = 1, wat betekent dat de dichtheidsmatrix volledige informatie over een quantumsysteem vertegenwoordigt. Gemengde toestanden hebben ρ² ≠ ρ en Tr(ρ²) < 1, vertegenwoordigen statistische mengsels waar we onvolledige kennis hebben. Pure toestanden kunnen quantuminterferentie tonen, terwijl gemengde toestanden dit niet kunnen vanwege verloren fase-informatie."
        }
      },
      {
        question: {
          en: "What is the Rydberg formula for hydrogen spectral lines?",
          es: "¿Cuál es la fórmula de Rydberg para líneas espectrales del hidrógeno?",
          de: "Was ist die Rydberg-Formel für Wasserstoff-Spektrallinien?",
          nl: "Wat is de Rydberg formule voor waterstof spectraallijnen?"
        },
        options: [
          {
            en: "1/λ = R∞(1/n₁² - 1/n₂²), where R∞ is Rydberg constant",
            es: "1/λ = R∞(1/n₁² - 1/n₂²), donde R∞ es la constante de Rydberg",
            de: "1/λ = R∞(1/n₁² - 1/n₂²), wobei R∞ die Rydberg-Konstante ist",
            nl: "1/λ = R∞(1/n₁² - 1/n₂²), waar R∞ de Rydberg constante is"
          },
          {
            en: "λ = hc/E, simple energy-wavelength relation",
            es: "λ = hc/E, relación simple energía-longitud de onda",
            de: "λ = hc/E, einfache Energie-Wellenlänge-Beziehung",
            nl: "λ = hc/E, eenvoudige energie-golflengte relatie"
          },
          {
            en: "ν = cR∞, frequency proportional to Rydberg constant",
            es: "ν = cR∞, frecuencia proporcional a constante de Rydberg",
            de: "ν = cR∞, Frequenz proportional zur Rydberg-Konstante",
            nl: "ν = cR∞, frequentie evenredig met Rydberg constante"
          },
          {
            en: "E = mc², relativistic energy formula",
            es: "E = mc², fórmula de energía relativística",
            de: "E = mc², relativistische Energieformel",
            nl: "E = mc², relativistische energie formule"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Rydberg formula 1/λ = R∞(1/n₁² - 1/n₂²) predicts the wavelengths of hydrogen spectral lines, where n₁ < n₂ are principal quantum numbers, λ is wavelength, and R∞ ≈ 1.097×10⁷ m⁻¹ is the Rydberg constant. Different series (Lyman, Balmer, Paschen) correspond to different values of n₁. This formula was crucial for developing quantum mechanics.",
          es: "La fórmula de Rydberg 1/λ = R∞(1/n₁² - 1/n₂²) predice las longitudes de onda de líneas espectrales del hidrógeno, donde n₁ < n₂ son números cuánticos principales, λ es longitud de onda, y R∞ ≈ 1.097×10⁷ m⁻¹ es la constante de Rydberg. Diferentes series (Lyman, Balmer, Paschen) corresponden a diferentes valores de n₁. Esta fórmula fue crucial para desarrollar la mecánica cuántica.",
          de: "Die Rydberg-Formel 1/λ = R∞(1/n₁² - 1/n₂²) sagt die Wellenlängen von Wasserstoff-Spektrallinien voraus, wobei n₁ < n₂ Hauptquantenzahlen sind, λ die Wellenlänge und R∞ ≈ 1.097×10⁷ m⁻¹ die Rydberg-Konstante ist. Verschiedene Serien (Lyman, Balmer, Paschen) entsprechen verschiedenen Werten von n₁. Diese Formel war entscheidend für die Entwicklung der Quantenmechanik.",
          nl: "De Rydberg formule 1/λ = R∞(1/n₁² - 1/n₂²) voorspelt de golflengtes van waterstof spectraallijnen, waar n₁ < n₂ hoofdquantumgetallen zijn, λ de golflengte is, en R∞ ≈ 1.097×10⁷ m⁻¹ de Rydberg constante is. Verschillende series (Lyman, Balmer, Paschen) komen overeen met verschillende waarden van n₁. Deze formule was cruciaal voor het ontwikkelen van quantummechanica."
        }
      },
      {
        question: {
          en: "What is the quantum mechanical treatment of the hydrogen atom energy levels?",
          es: "¿Cuál es el tratamiento mecánico cuántico de los niveles de energía del átomo de hidrógeno?",
          de: "Was ist die quantenmechanische Behandlung der Wasserstoffatom-Energieniveaus?",
          nl: "Wat is de quantummechanische behandeling van waterstofatoom energieniveaus?"
        },
        options: [
          {
            en: "En = -13.6 eV/n², where n is principal quantum number",
            es: "En = -13.6 eV/n², donde n es el número cuántico principal",
            de: "En = -13.6 eV/n², wobei n die Hauptquantenzahl ist",
            nl: "En = -13.6 eV/n², waar n het hoofdquantumgetal is"
          },
          {
            en: "En = n × 13.6 eV, linear in quantum number",
            es: "En = n × 13.6 eV, lineal en número cuántico",
            de: "En = n × 13.6 eV, linear in der Quantenzahl",
            nl: "En = n × 13.6 eV, lineair in quantumgetal"
          },
          {
            en: "En = 13.6/√n eV, square root dependence",
            es: "En = 13.6/√n eV, dependencia de raíz cuadrada",
            de: "En = 13.6/√n eV, Quadratwurzel-Abhängigkeit",
            nl: "En = 13.6/√n eV, vierkantswortel afhankelijkheid"
          },
          {
            en: "All energy levels are equal at 13.6 eV",
            es: "Todos los niveles de energía son iguales a 13.6 eV",
            de: "Alle Energieniveaus sind gleich bei 13.6 eV",
            nl: "Alle energieniveaus zijn gelijk aan 13.6 eV"
          }
        ],
        correct: 0,
        explanation: {
          en: "Solving the Schrödinger equation for hydrogen yields energy levels En = -13.6 eV/n², where n = 1,2,3,... is the principal quantum number. The ground state (n=1) has E₁ = -13.6 eV, and higher levels approach zero energy. The negative energies indicate bound states, while positive energies correspond to ionized hydrogen. This 1/n² dependence explains hydrogen spectral series.",
          es: "Resolver la ecuación de Schrödinger para hidrógeno produce niveles de energía En = -13.6 eV/n², donde n = 1,2,3,... es el número cuántico principal. El estado fundamental (n=1) tiene E₁ = -13.6 eV, y niveles más altos se aproximan a energía cero. Las energías negativas indican estados ligados, mientras energías positivas corresponden a hidrógeno ionizado. Esta dependencia 1/n² explica series espectrales del hidrógeno.",
          de: "Das Lösen der Schrödinger-Gleichung für Wasserstoff ergibt Energieniveaus En = -13.6 eV/n², wobei n = 1,2,3,... die Hauptquantenzahl ist. Der Grundzustand (n=1) hat E₁ = -13.6 eV, und höhere Niveaus nähern sich null Energie. Die negativen Energien zeigen gebundene Zustände an, während positive Energien ionisiertem Wasserstoff entsprechen. Diese 1/n²-Abhängigkeit erklärt Wasserstoff-Spektralserien.",
          nl: "Het oplossen van de Schrödinger vergelijking voor waterstof geeft energieniveaus En = -13.6 eV/n², waar n = 1,2,3,... het hoofdquantumgetal is. De grondtoestand (n=1) heeft E₁ = -13.6 eV, en hogere niveaus naderen nul energie. De negatieve energieën duiden gebonden toestanden aan, terwijl positieve energieën overeenkomen met geïoniseerd waterstof. Deze 1/n² afhankelijkheid verklaart waterstof spectrale series."
        }
      },
      {
        question: {
          en: "What is the concept of angular momentum quantization?",
          es: "¿Cuál es el concepto de cuantización del momento angular?",
          de: "Was ist das Konzept der Drehimpulsquantisierung?",
          nl: "Wat is het concept van hoekmomentum kwantisatie?"
        },
        options: [
          {
            en: "L² = ℏ²l(l+1) and Lz = ℏm, where l and m are quantum numbers",
            es: "L² = ℏ²l(l+1) y Lz = ℏm, donde l y m son números cuánticos",
            de: "L² = ℏ²l(l+1) und Lz = ℏm, wobei l und m Quantenzahlen sind",
            nl: "L² = ℏ²l(l+1) en Lz = ℏm, waar l en m quantumgetallen zijn"
          },
          {
            en: "Angular momentum is always zero in quantum mechanics",
            es: "El momento angular siempre es cero en mecánica cuántica",
            de: "Drehimpuls ist in der Quantenmechanik immer null",
            nl: "Hoekmomentum is altijd nul in quantummechanica"
          },
          {
            en: "L = mvr for all quantum systems",
            es: "L = mvr para todos los sistemas cuánticos",
            de: "L = mvr für alle Quantensysteme",
            nl: "L = mvr voor alle quantumsystemen"
          },
          {
            en: "Angular momentum can have any continuous value",
            es: "El momento angular puede tener cualquier valor continuo",
            de: "Drehimpuls kann jeden kontinuierlichen Wert haben",
            nl: "Hoekmomentum kan elke continue waarde hebben"
          }
        ],
        correct: 0,
        explanation: {
          en: "Angular momentum is quantized in quantum mechanics. The magnitude is |L| = ℏ√[l(l+1)] and the z-component is Lz = ℏm, where l = 0,1,2,... is the orbital quantum number and m = -l,-l+1,...,l-1,l is the magnetic quantum number. This quantization leads to discrete energy levels and explains atomic spectra.",
          es: "El momento angular está cuantizado en mecánica cuántica. La magnitud es |L| = ℏ√[l(l+1)] y la componente z es Lz = ℏm, donde l = 0,1,2,... es el número cuántico orbital y m = -l,-l+1,...,l-1,l es el número cuántico magnético. Esta cuantización lleva a niveles de energía discretos y explica espectros atómicos.",
          de: "Drehimpuls ist in der Quantenmechanik quantisiert. Der Betrag ist |L| = ℏ√[l(l+1)] und die z-Komponente ist Lz = ℏm, wobei l = 0,1,2,... die Bahnquantenzahl und m = -l,-l+1,...,l-1,l die magnetische Quantenzahl ist. Diese Quantisierung führt zu diskreten Energieniveaus und erklärt Atomspektren.",
          nl: "Hoekmomentum is gekwantiseerd in quantummechanica. De grootte is |L| = ℏ√[l(l+1)] en de z-component is Lz = ℏm, waar l = 0,1,2,... het orbitale quantumgetal is en m = -l,-l+1,...,l-1,l het magnetische quantumgetal. Deze kwantisatie leidt tot discrete energieniveaus en verklaart atomaire spectra."
        }
      },
      {
        question: {
          en: "What is the Zeeman effect in atomic physics?",
          es: "¿Qué es el efecto Zeeman en física atómica?",
          de: "Was ist der Zeeman-Effekt in der Atomphysik?",
          nl: "Wat is het Zeeman-effect in atomaire fysica?"
        },
        options: [
          {
            en: "Splitting of spectral lines in magnetic fields due to energy level splitting",
            es: "División de líneas espectrales en campos magnéticos debido a división de niveles de energía",
            de: "Aufspaltung von Spektrallinien in Magnetfeldern durch Energieniveauaufspaltung",
            nl: "Splitsing van spectraallijnen in magnetische velden door energieniveau splitsing"
          },
          {
            en: "Redshift of all spectral lines",
            es: "Desplazamiento al rojo de todas las líneas espectrales",
            de: "Rotverschiebung aller Spektrallinien",
            nl: "Roodverschuiving van alle spectraallijnen"
          },
          {
            en: "Complete disappearance of spectral lines",
            es: "Desaparición completa de líneas espectrales",
            de: "Vollständiges Verschwinden von Spektrallinien",
            nl: "Volledige verdwijning van spectraallijnen"
          },
          {
            en: "Doubling of atomic mass in magnetic fields",
            es: "Duplicación de masa atómica en campos magnéticos",
            de: "Verdopplung der Atommasse in Magnetfeldern",
            nl: "Verdubbeling van atomaire massa in magnetische velden"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Zeeman effect is the splitting of atomic spectral lines when atoms are placed in a magnetic field. It occurs because the magnetic field lifts the degeneracy of energy levels with the same n and l but different mⱼ values. The energy shift is ΔE = μᴮgⱼmⱼB, where μᴮ is the Bohr magneton and gⱼ is the Landé g-factor.",
          es: "El efecto Zeeman es la división de líneas espectrales atómicas cuando los átomos se colocan en un campo magnético. Ocurre porque el campo magnético levanta la degeneración de niveles de energía con los mismos n y l pero diferentes valores de mⱼ. El desplazamiento de energía es ΔE = μᴮgⱼmⱼB, donde μᴮ es el magnetón de Bohr y gⱼ es el factor g de Landé.",
          de: "Der Zeeman-Effekt ist die Aufspaltung atomarer Spektrallinien, wenn Atome in ein Magnetfeld gebracht werden. Er tritt auf, weil das Magnetfeld die Entartung von Energieniveaus mit gleichem n und l aber verschiedenen mⱼ-Werten aufhebt. Die Energieverschiebung ist ΔE = μᴮgⱼmⱼB, wobei μᴮ das Bohrsche Magneton und gⱼ der Landé-g-Faktor ist.",
          nl: "Het Zeeman-effect is de splitsing van atomaire spectraallijnen wanneer atomen in een magnetisch veld worden geplaatst. Het treedt op omdat het magnetische veld de degeneratie opheft van energieniveaus met dezelfde n en l maar verschillende mⱼ waarden. De energieverschuiving is ΔE = μᴮgⱼmⱼB, waar μᴮ het Bohr magneton is en gⱼ de Landé g-factor."
        }
      },
      {
        question: {
          en: "What is the Stark effect in atomic physics?",
          es: "¿Qué es el efecto Stark en física atómica?",
          de: "Was ist der Stark-Effekt in der Atomphysik?",
          nl: "Wat is het Stark-effect in atomaire fysica?"
        },
        options: [
          {
            en: "Shifting and splitting of spectral lines in electric fields",
            es: "Desplazamiento y división de líneas espectrales en campos eléctricos",
            de: "Verschiebung und Aufspaltung von Spektrallinien in elektrischen Feldern",
            nl: "Verschuiving en splitsing van spectraallijnen in elektrische velden"
          },
          {
            en: "Emission of additional spectral lines",
            es: "Emisión de líneas espectrales adicionales",
            de: "Emission zusätzlicher Spektrallinien",
            nl: "Emissie van extra spectraallijnen"
          },
          {
            en: "Complete quenching of atomic emission",
            es: "Extinción completa de emisión atómica",
            de: "Vollständige Löschung atomarer Emission",
            nl: "Volledige uitdoving van atomaire emissie"
          },
          {
            en: "Increase in atomic radius",
            es: "Aumento en radio atómico",
            de: "Zunahme des Atomradius",
            nl: "Toename in atomaire straal"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Stark effect is the shifting and splitting of atomic spectral lines when atoms are placed in an electric field. Unlike the Zeeman effect (magnetic field), the Stark effect arises from the electric field interacting with the electric dipole moment of the atom, breaking degeneracies and creating new energy level patterns.",
          es: "El efecto Stark es el desplazamiento y división de líneas espectrales atómicas cuando los átomos se colocan en un campo eléctrico. A diferencia del efecto Zeeman (campo magnético), el efecto Stark surge de la interacción del campo eléctrico con el momento dipolar eléctrico del átomo, rompiendo degeneraciones y creando nuevos patrones de niveles de energía.",
          de: "Der Stark-Effekt ist die Verschiebung und Aufspaltung atomarer Spektrallinien, wenn Atome in ein elektrisches Feld gebracht werden. Im Gegensatz zum Zeeman-Effekt (Magnetfeld) entsteht der Stark-Effekt durch die Wechselwirkung des elektrischen Feldes mit dem elektrischen Dipolmoment des Atoms, wodurch Entartungen aufgebrochen und neue Energieniveaumuster geschaffen werden.",
          nl: "Het Stark-effect is de verschuiving en splitsing van atomaire spectraallijnen wanneer atomen in een elektrisch veld worden geplaatst. In tegenstelling tot het Zeeman-effect (magnetisch veld) ontstaat het Stark-effect door de interactie van het elektrische veld met het elektrische dipoolmoment van het atoom, waarbij degeneraties worden opgebroken en nieuwe energieniveaupatronen ontstaan."
        }
      },
      {
        question: {
          en: "What is the concept of spin-orbit coupling?",
          es: "¿Cuál es el concepto de acoplamiento espín-órbita?",
          de: "Was ist das Konzept der Spin-Bahn-Kopplung?",
          nl: "Wat is het concept van spin-baan koppeling?"
        },
        options: [
          {
            en: "Interaction between electron spin and orbital angular momentum",
            es: "Interacción entre espín del electrón y momento angular orbital",
            de: "Wechselwirkung zwischen Elektronenspin und Bahndrehimpuls",
            nl: "Interactie tussen elektronspin en orbitaal hoekmomentum"
          },
          {
            en: "Coupling between different electron spins",
            es: "Acoplamiento entre diferentes espines electrónicos",
            de: "Kopplung zwischen verschiedenen Elektronenspins",
            nl: "Koppeling tussen verschillende elektronspins"
          },
          {
            en: "Interaction between nucleus and electrons",
            es: "Interacción entre núcleo y electrones",
            de: "Wechselwirkung zwischen Kern und Elektronen",
            nl: "Interactie tussen kern en elektronen"
          },
          {
            en: "Orbital motion affecting nuclear spin",
            es: "Movimiento orbital afectando espín nuclear",
            de: "Bahnbewegung beeinflusst Kernspin",
            nl: "Orbitale beweging die kernspin beïnvloedt"
          }
        ],
        correct: 0,
        explanation: {
          en: "Spin-orbit coupling is the interaction between an electron's intrinsic spin angular momentum and its orbital angular momentum. This relativistic effect arises because the electron experiences a magnetic field in its rest frame due to the nucleus's motion. It leads to fine structure in atomic spectra and is described by the coupling term ξ(r)L⃗·S⃗.",
          es: "El acoplamiento espín-órbita es la interacción entre el momento angular de espín intrínseco del electrón y su momento angular orbital. Este efecto relativístico surge porque el electrón experimenta un campo magnético en su marco de reposo debido al movimiento del núcleo. Lleva a estructura fina en espectros atómicos y se describe por el término de acoplamiento ξ(r)L⃗·S⃗.",
          de: "Spin-Bahn-Kopplung ist die Wechselwirkung zwischen dem intrinsischen Spin-Drehimpuls eines Elektrons und seinem Bahndrehimpuls. Dieser relativistische Effekt entsteht, weil das Elektron in seinem Ruhesystem aufgrund der Kernbewegung ein Magnetfeld erfährt. Er führt zur Feinstruktur in Atomspektren und wird durch den Kopplungsterm ξ(r)L⃗·S⃗ beschrieben.",
          nl: "Spin-baan koppeling is de interactie tussen de intrinsieke spin hoekmomentum van een elektron en zijn orbitale hoekmomentum. Dit relativistische effect ontstaat omdat het elektron een magnetisch veld ervaart in zijn rustframe door de beweging van de kern. Het leidt tot fijne structuur in atomaire spectra en wordt beschreven door de koppelingsterm ξ(r)L⃗·S⃗."
        }
      },
      {
        question: {
          en: "What is the fine structure constant in quantum mechanics?",
          es: "¿Cuál es la constante de estructura fina en mecánica cuántica?",
          de: "Was ist die Feinstrukturkonstante in der Quantenmechanik?",
          nl: "Wat is de fijnstructuurconstante in quantummechanica?"
        },
        options: [
          {
            en: "α = e²/(4πε₀ℏc) ≈ 1/137, characterizing electromagnetic interaction strength",
            es: "α = e²/(4πε₀ℏc) ≈ 1/137, caracterizando la fuerza de interacción electromagnética",
            de: "α = e²/(4πε₀ℏc) ≈ 1/137, charakterisiert die Stärke elektromagnetischer Wechselwirkung",
            nl: "α = e²/(4πε₀ℏc) ≈ 1/137, karakteriseert elektromagnetische interactiesterkte"
          },
          {
            en: "The ratio of electron mass to proton mass",
            es: "La razón de masa del electrón a masa del protón",
            de: "Das Verhältnis von Elektronenmasse zu Protonenmasse",
            nl: "De verhouding van elektronmassa tot protonmassa"
          },
          {
            en: "The speed of light in vacuum",
            es: "La velocidad de la luz en el vacío",
            de: "Die Lichtgeschwindigkeit im Vakuum",
            nl: "De lichtsnelheid in vacuüm"
          },
          {
            en: "Planck's constant divided by 2π",
            es: "La constante de Planck dividida por 2π",
            de: "Plancks Konstante geteilt durch 2π",
            nl: "Planck's constante gedeeld door 2π"
          }
        ],
        correct: 0,
        explanation: {
          en: "The fine structure constant α = e²/(4πε₀ℏc) ≈ 1/137 is a dimensionless fundamental constant that characterizes the strength of electromagnetic interactions. It determines the magnitude of fine structure splitting in atomic spectra and appears in many quantum electrodynamic calculations. Its small value indicates that electromagnetic perturbations are weak.",
          es: "La constante de estructura fina α = e²/(4πε₀ℏc) ≈ 1/137 es una constante fundamental adimensional que caracteriza la fuerza de las interacciones electromagnéticas. Determina la magnitud de la división de estructura fina en espectros atómicos y aparece en muchos cálculos de electrodinámica cuántica. Su valor pequeño indica que las perturbaciones electromagnéticas son débiles.",
          de: "Die Feinstrukturkonstante α = e²/(4πε₀ℏc) ≈ 1/137 ist eine dimensionslose Fundamentalkonstante, die die Stärke elektromagnetischer Wechselwirkungen charakterisiert. Sie bestimmt die Größe der Feinstrukturaufspaltung in Atomspektren und erscheint in vielen quantenelektrodynamischen Berechnungen. Ihr kleiner Wert zeigt an, dass elektromagnetische Störungen schwach sind.",
          nl: "De fijnstructuurconstante α = e²/(4πε₀ℏc) ≈ 1/137 is een dimensieloze fundamentele constante die de sterkte van elektromagnetische interacties karakteriseert. Het bepaalt de grootte van fijnstructuur splitsing in atomaire spectra en verschijnt in veel quantum elektrodynamische berekeningen. Zijn kleine waarde geeft aan dat elektromagnetische verstoringen zwak zijn."
        }
      },
      {
        question: {
          en: "What is the concept of quantum field quantization?",
          es: "¿Cuál es el concepto de cuantización de campo cuántico?",
          de: "Was ist das Konzept der Quantenfeldquantisierung?",
          nl: "Wat is het concept van quantumveld kwantisatie?"
        },
        options: [
          {
            en: "Treating classical fields as operators with creation and annihilation operators",
            es: "Tratar campos clásicos como operadores con operadores de creación y aniquilación",
            de: "Klassische Felder als Operatoren mit Erzeugungs- und Vernichtungsoperatoren behandeln",
            nl: "Klassieke velden behandelen als operatoren met creatie- en vernietigingsoperatoren"
          },
          {
            en: "Discretizing space-time into finite points",
            es: "Discretizar espacio-tiempo en puntos finitos",
            de: "Raum-Zeit in endliche Punkte diskretisieren",
            nl: "Ruimte-tijd discretiseren in eindige punten"
          },
          {
            en: "Converting continuous variables to discrete ones",
            es: "Convertir variables continuas a discretas",
            de: "Kontinuierliche Variablen in diskrete umwandeln",
            nl: "Continue variabelen omzetten naar discrete"
          },
          {
            en: "Applying boundary conditions to wave equations",
            es: "Aplicar condiciones de frontera a ecuaciones de onda",
            de: "Randbedingungen auf Wellengleichungen anwenden",
            nl: "Randvoorwaarden toepassen op golfvergelijkingen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum field quantization is the process of treating classical fields (like electromagnetic fields) as quantum operators. Field values at each point become operators that create and annihilate particles when acting on the vacuum state. This leads to quantum field theory, where particles emerge as excitations of underlying quantum fields, described by creation operators a† and annihilation operators a.",
          es: "La cuantización de campo cuántico es el proceso de tratar campos clásicos (como campos electromagnéticos) como operadores cuánticos. Los valores de campo en cada punto se convierten en operadores que crean y aniquilan partículas cuando actúan sobre el estado de vacío. Esto lleva a la teoría cuántica de campos, donde las partículas emergen como excitaciones de campos cuánticos subyacentes, descritos por operadores de creación a† y operadores de aniquilación a.",
          de: "Quantenfeldquantisierung ist der Prozess, klassische Felder (wie elektromagnetische Felder) als Quantenoperatoren zu behandeln. Feldwerte an jedem Punkt werden zu Operatoren, die Teilchen erzeugen und vernichten, wenn sie auf den Vakuumzustand wirken. Dies führt zur Quantenfeldtheorie, wo Teilchen als Anregungen zugrunde liegender Quantenfelder entstehen, beschrieben durch Erzeugungsoperatoren a† und Vernichtungsoperatoren a.",
          nl: "Quantumveld kwantisatie is het proces van het behandelen van klassieke velden (zoals elektromagnetische velden) als quantum operatoren. Veldwaarden op elk punt worden operatoren die deeltjes creëren en vernietigen wanneer ze werken op de vacuümtoestand. Dit leidt tot quantumveldtheorie, waar deeltjes ontstaan als excitaties van onderliggende quantumvelden, beschreven door creatie-operatoren a† en vernietigingsoperatoren a."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mind-bender/quantum-physics', level2);
  }
})();
