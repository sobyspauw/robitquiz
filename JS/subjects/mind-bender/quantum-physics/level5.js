// Quantum Physics - Level 5: Hydrogen Atom and Atomic Structure
(function() {
  const level5 = {
    name: {
      en: "Hydrogen Atom and Atomic Structure",
      es: "Átomo de Hidrógeno y Estructura Atómica",
      de: "Wasserstoffatom und Atomstruktur",
      nl: "Waterstofatoom en Atomaire Structuur"
    },
    questions: [
      {
        question: {
          en: "What are the quantum numbers that describe the hydrogen atom?",
          es: "¿Cuáles son los números cuánticos que describen el átomo de hidrógeno?",
          de: "Was sind die Quantenzahlen, die das Wasserstoffatom beschreiben?",
          nl: "Wat zijn de quantumgetallen die het waterstofatoom beschrijven?"
        },
        options: [
          {
            en: "n (principal), l (azimuthal), ml (magnetic), and ms (spin)",
            es: "n (principal), l (azimutal), ml (magnético), y ms (espín)",
            de: "n (Haupt-), l (Neben-), ml (magnetisch) und ms (Spin)",
            nl: "n (hoofdquantum), l (azimuthaal), ml (magnetisch), en ms (spin)"
          },
          {
            en: "Only n (principal) and l (azimuthal)",
            es: "Solo n (principal) y l (azimutal)",
            de: "Nur n (Haupt-) und l (Neben-)",
            nl: "Alleen n (hoofdquantum) en l (azimuthaal)"
          },
          {
            en: "x, y, z coordinates and energy",
            es: "Coordenadas x, y, z y energía",
            de: "x-, y-, z-Koordinaten und Energie",
            nl: "x, y, z coördinaten en energie"
          },
          {
            en: "Mass, charge, velocity, and position",
            es: "Masa, carga, velocidad y posición",
            de: "Masse, Ladung, Geschwindigkeit und Position",
            nl: "Massa, lading, snelheid en positie"
          }
        ],
        correct: 0,
        explanation: {
          en: "The hydrogen atom is completely described by four quantum numbers: n (principal quantum number, determining energy levels), l (azimuthal quantum number, determining orbital angular momentum), ml (magnetic quantum number, determining spatial orientation), and ms (spin quantum number, describing electron spin). These quantum numbers arise from solving the Schrödinger equation for the hydrogen atom.",
          es: "El átomo de hidrógeno se describe completamente por cuatro números cuánticos: n (número cuántico principal, determinando niveles de energía), l (número cuántico azimutal, determinando momento angular orbital), ml (número cuántico magnético, determinando orientación espacial), y ms (número cuántico de espín, describiendo el espín del electrón). Estos números cuánticos surgen de resolver la ecuación de Schrödinger para el átomo de hidrógeno.",
          de: "Das Wasserstoffatom wird vollständig durch vier Quantenzahlen beschrieben: n (Hauptquantenzahl, bestimmt Energieniveaus), l (Nebenquantenzahl, bestimmt Bahndrehimpuls), ml (magnetische Quantenzahl, bestimmt räumliche Orientierung) und ms (Spinquantenzahl, beschreibt Elektronenspin). Diese Quantenzahlen entstehen aus der Lösung der Schrödinger-Gleichung für das Wasserstoffatom.",
          nl: "Het waterstofatoom wordt volledig beschreven door vier quantumgetallen: n (hoofdquantumgetal, bepaalt energieniveaus), l (azimuthaal quantumgetal, bepaalt orbitaal hoekimpuls), ml (magnetisch quantumgetal, bepaalt ruimtelijke oriëntatie), en ms (spin quantumgetal, beschrijft elektronenspin). Deze quantumgetallen komen voort uit het oplossen van de Schrödinger-vergelijking voor het waterstofatoom."
        }
      },
      {
        question: {
          en: "What is the energy formula for hydrogen atom energy levels?",
          es: "¿Cuál es la fórmula de energía para los niveles de energía del átomo de hidrógeno?",
          de: "Was ist die Energieformel für die Energieniveaus des Wasserstoffatoms?",
          nl: "Wat is de energieformule voor waterstofatoom energieniveaus?"
        },
        options: [
          {
            en: "En = -13.6 eV/n², where n is the principal quantum number",
            es: "En = -13.6 eV/n², donde n es el número cuántico principal",
            de: "En = -13.6 eV/n², wobei n die Hauptquantenzahl ist",
            nl: "En = -13.6 eV/n², waar n het hoofdquantumgetal is"
          },
          {
            en: "En = 13.6 eV × n²",
            es: "En = 13.6 eV × n²",
            de: "En = 13.6 eV × n²",
            nl: "En = 13.6 eV × n²"
          },
          {
            en: "En = -13.6 eV × n",
            es: "En = -13.6 eV × n",
            de: "En = -13.6 eV × n",
            nl: "En = -13.6 eV × n"
          },
          {
            en: "En = ℏω(n + 1/2)",
            es: "En = ℏω(n + 1/2)",
            de: "En = ℏω(n + 1/2)",
            nl: "En = ℏω(n + 1/2)"
          }
        ],
        correct: 0,
        explanation: {
          en: "The energy levels of the hydrogen atom are given by En = -13.6 eV/n², where n is the principal quantum number (n = 1, 2, 3, ...). The negative sign indicates that the electron is bound to the nucleus. The ground state (n=1) has energy -13.6 eV, and higher energy levels approach zero as n approaches infinity (ionization limit).",
          es: "Los niveles de energía del átomo de hidrógeno están dados por En = -13.6 eV/n², donde n es el número cuántico principal (n = 1, 2, 3, ...). El signo negativo indica que el electrón está ligado al núcleo. El estado fundamental (n=1) tiene energía -13.6 eV, y los niveles de energía más altos se acercan a cero cuando n se acerca al infinito (límite de ionización).",
          de: "Die Energieniveaus des Wasserstoffatoms sind durch En = -13.6 eV/n² gegeben, wobei n die Hauptquantenzahl ist (n = 1, 2, 3, ...). Das negative Vorzeichen zeigt an, dass das Elektron an den Kern gebunden ist. Der Grundzustand (n=1) hat die Energie -13.6 eV, und höhere Energieniveaus nähern sich null, wenn n gegen unendlich geht (Ionisationsgrenze).",
          nl: "De energieniveaus van het waterstofatoom worden gegeven door En = -13.6 eV/n², waar n het hoofdquantumgetal is (n = 1, 2, 3, ...). Het negatieve teken geeft aan dat het elektron gebonden is aan de kern. De grondtoestand (n=1) heeft energie -13.6 eV, en hogere energieniveaus benaderen nul wanneer n naar oneindig gaat (ionisatielimiet)."
        }
      },
      {
        question: {
          en: "What determines the shape of atomic orbitals?",
          es: "¿Qué determina la forma de los orbitales atómicos?",
          de: "Was bestimmt die Form der Atomorbitale?",
          nl: "Wat bepaalt de vorm van atomaire orbitalen?"
        },
        options: [
          {
            en: "The azimuthal quantum number l determines the orbital angular momentum and shape",
            es: "El número cuántico azimutal l determina el momento angular orbital y la forma",
            de: "Die Nebenquantenzahl l bestimmt den Bahndrehimpuls und die Form",
            nl: "Het azimuthale quantumgetal l bepaalt het orbitaal hoekimpuls en vorm"
          },
          {
            en: "Only the principal quantum number n determines shape",
            es: "Solo el número cuántico principal n determina la forma",
            de: "Nur die Hauptquantenzahl n bestimmt die Form",
            nl: "Alleen het hoofdquantumgetal n bepaalt de vorm"
          },
          {
            en: "The magnetic quantum number ml is the sole determinant",
            es: "El número cuántico magnético ml es el único determinante",
            de: "Die magnetische Quantenzahl ml ist der einzige Bestimmungsfaktor",
            nl: "Het magnetische quantumgetal ml is de enige bepalende factor"
          },
          {
            en: "Orbital shapes are random and unpredictable",
            es: "Las formas orbitales son aleatorias e impredecibles",
            de: "Orbitalformen sind zufällig und unvorhersagbar",
            nl: "Orbitaalvormen zijn willekeurig en onvoorspelbaar"
          }
        ],
        correct: 0,
        explanation: {
          en: "The azimuthal quantum number l determines the shape of atomic orbitals by defining the orbital angular momentum. For l=0 (s orbitals), the shape is spherical. For l=1 (p orbitals), the shape is dumbbell-like. For l=2 (d orbitals), more complex shapes emerge. The magnetic quantum number ml determines the spatial orientation of these shapes, while n determines the size and energy.",
          es: "El número cuántico azimutal l determina la forma de los orbitales atómicos definiendo el momento angular orbital. Para l=0 (orbitales s), la forma es esférica. Para l=1 (orbitales p), la forma es similar a una mancuerna. Para l=2 (orbitales d), emergen formas más complejas. El número cuántico magnético ml determina la orientación espacial de estas formas, mientras que n determina el tamaño y la energía.",
          de: "Die Nebenquantenzahl l bestimmt die Form der Atomorbitale durch Definition des Bahndrehimpulses. Für l=0 (s-Orbitale) ist die Form kugelförmig. Für l=1 (p-Orbitale) ist die Form hantelförmig. Für l=2 (d-Orbitale) entstehen komplexere Formen. Die magnetische Quantenzahl ml bestimmt die räumliche Orientierung dieser Formen, während n die Größe und Energie bestimmt.",
          nl: "Het azimuthale quantumgetal l bepaalt de vorm van atomaire orbitalen door het orbitaal hoekimpuls te definiëren. Voor l=0 (s orbitalen) is de vorm sferisch. Voor l=1 (p orbitalen) is de vorm halterend. Voor l=2 (d orbitalen) ontstaan complexere vormen. Het magnetische quantumgetal ml bepaalt de ruimtelijke oriëntatie van deze vormen, terwijl n de grootte en energie bepaalt."
        }
      },
      {
        question: {
          en: "What is the physical meaning of the wave function ψ for the hydrogen atom?",
          es: "¿Cuál es el significado físico de la función de onda ψ para el átomo de hidrógeno?",
          de: "Was ist die physikalische Bedeutung der Wellenfunktion ψ für das Wasserstoffatom?",
          nl: "Wat is de fysieke betekenis van de golffunctie ψ voor het waterstofatoom?"
        },
        options: [
          {
            en: "|ψ|² gives the probability density of finding the electron at a specific location",
            es: "|ψ|² da la densidad de probabilidad de encontrar el electrón en una ubicación específica",
            de: "|ψ|² gibt die Wahrscheinlichkeitsdichte an, das Elektron an einem bestimmten Ort zu finden",
            nl: "|ψ|² geeft de waarschijnlijkheidsdichtheid om het elektron op een specifieke locatie te vinden"
          },
          {
            en: "ψ directly gives the position of the electron",
            es: "ψ da directamente la posición del electrón",
            de: "ψ gibt direkt die Position des Elektrons an",
            nl: "ψ geeft direct de positie van het elektron"
          },
          {
            en: "ψ represents the classical trajectory of the electron",
            es: "ψ representa la trayectoria clásica del electrón",
            de: "ψ repräsentiert die klassische Bahn des Elektrons",
            nl: "ψ vertegenwoordigt de klassieke baan van het elektron"
          },
          {
            en: "ψ is purely mathematical with no physical significance",
            es: "ψ es puramente matemática sin significado físico",
            de: "ψ ist rein mathematisch ohne physikalische Bedeutung",
            nl: "ψ is puur wiskundig zonder fysieke betekenis"
          }
        ],
        correct: 0,
        explanation: {
          en: "According to the Born interpretation, the square of the wave function's magnitude |ψ(r,θ,φ)|² represents the probability density of finding the electron at position (r,θ,φ) in spherical coordinates. This probabilistic interpretation is fundamental to quantum mechanics and explains the 'electron cloud' picture of atomic orbitals, where regions of high |ψ|² correspond to areas where the electron is most likely to be found.",
          es: "Según la interpretación de Born, el cuadrado de la magnitud de la función de onda |ψ(r,θ,φ)|² representa la densidad de probabilidad de encontrar el electrón en la posición (r,θ,φ) en coordenadas esféricas. Esta interpretación probabilística es fundamental en mecánica cuántica y explica la imagen de 'nube electrónica' de los orbitales atómicos, donde las regiones de alto |ψ|² corresponden a áreas donde es más probable encontrar el electrón.",
          de: "Nach der Born-Interpretation repräsentiert das Quadrat des Betrags der Wellenfunktion |ψ(r,θ,φ)|² die Wahrscheinlichkeitsdichte, das Elektron an der Position (r,θ,φ) in Kugelkoordinaten zu finden. Diese probabilistische Interpretation ist fundamental für die Quantenmechanik und erklärt das 'Elektronenwolken'-Bild der Atomorbitale, wobei Bereiche hoher |ψ|² Gebieten entsprechen, wo das Elektron am wahrscheinlichsten zu finden ist.",
          nl: "Volgens de Born-interpretatie vertegenwoordigt het kwadraat van de magnitude van de golffunctie |ψ(r,θ,φ)|² de waarschijnlijkheidsdichtheid om het elektron te vinden op positie (r,θ,φ) in sferische coördinaten. Deze probabilistische interpretatie is fundamenteel voor de quantummechanica en verklaart het 'elektronenwolk' beeld van atomaire orbitalen, waar gebieden van hoge |ψ|² corresponderen met gebieden waar het elektron het meest waarschijnlijk wordt gevonden."
        }
      },
      {
        question: {
          en: "What is the Bohr radius and its significance?",
          es: "¿Qué es el radio de Bohr y su importancia?",
          de: "Was ist der Bohr-Radius und seine Bedeutung?",
          nl: "Wat is de Bohr-straal en zijn betekenis?"
        },
        options: [
          {
            en: "a₀ = 0.529 Å, the most probable distance of electron from nucleus in ground state",
            es: "a₀ = 0.529 Å, la distancia más probable del electrón desde el núcleo en estado fundamental",
            de: "a₀ = 0.529 Å, der wahrscheinlichste Abstand des Elektrons vom Kern im Grundzustand",
            nl: "a₀ = 0.529 Å, de meest waarschijnlijke afstand van elektron tot kern in grondtoestand"
          },
          {
            en: "The exact radius of the electron's circular orbit",
            es: "El radio exacto de la órbita circular del electrón",
            de: "Der exakte Radius der kreisförmigen Elektronenbahn",
            nl: "De exacte straal van de circulaire elektronenbaan"
          },
          {
            en: "The maximum possible distance between electron and nucleus",
            es: "La máxima distancia posible entre electrón y núcleo",
            de: "Der maximal mögliche Abstand zwischen Elektron und Kern",
            nl: "De maximaal mogelijke afstand tussen elektron en kern"
          },
          {
            en: "The radius at which electron energy is zero",
            es: "El radio en el cual la energía del electrón es cero",
            de: "Der Radius, bei dem die Elektronenenergie null ist",
            nl: "De straal waarbij elektronenenergie nul is"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Bohr radius a₀ = 0.529 Å (angstroms) is the most probable distance between the electron and nucleus in the ground state of hydrogen. While quantum mechanics doesn't describe electrons as following definite orbits, the Bohr radius represents the characteristic size of the hydrogen atom and appears in the radial wave functions. It's derived from fundamental constants: a₀ = ℏ²/mₑe², where ℏ is reduced Planck constant, mₑ is electron mass, and e is elementary charge.",
          es: "El radio de Bohr a₀ = 0.529 Å (angstroms) es la distancia más probable entre el electrón y el núcleo en el estado fundamental del hidrógeno. Aunque la mecánica cuántica no describe electrones siguiendo órbitas definidas, el radio de Bohr representa el tamaño característico del átomo de hidrógeno y aparece en las funciones de onda radiales. Se deriva de constantes fundamentales: a₀ = ℏ²/mₑe², donde ℏ es la constante reducida de Planck, mₑ es la masa del electrón, y e es la carga elemental.",
          de: "Der Bohr-Radius a₀ = 0,529 Å (Angström) ist der wahrscheinlichste Abstand zwischen Elektron und Kern im Grundzustand des Wasserstoffs. Obwohl die Quantenmechanik Elektronen nicht als definierte Bahnen beschreibt, repräsentiert der Bohr-Radius die charakteristische Größe des Wasserstoffatoms und erscheint in den radialen Wellenfunktionen. Er leitet sich aus fundamentalen Konstanten ab: a₀ = ℏ²/mₑe², wobei ℏ die reduzierte Plancksche Konstante, mₑ die Elektronenmasse und e die Elementarladung ist.",
          nl: "De Bohr-straal a₀ = 0.529 Å (angstrom) is de meest waarschijnlijke afstand tussen het elektron en de kern in de grondtoestand van waterstof. Hoewel de quantummechanica elektronen niet beschrijft als volgers van bepaalde banen, vertegenwoordigt de Bohr-straal de karakteristieke grootte van het waterstofatoom en verschijnt in de radiale golffuncties. Het is afgeleid van fundamentele constanten: a₀ = ℏ²/mₑe², waar ℏ de gereduceerde Planck-constante is, mₑ de elektronenmassa, en e de elementaire lading."
        }
      },
      {
        question: {
          en: "How do electron orbitals differ from classical electron orbits?",
          es: "¿En qué se diferencian los orbitales electrónicos de las órbitas electrónicas clásicas?",
          de: "Wie unterscheiden sich Elektronenorbitale von klassischen Elektronenbahnen?",
          nl: "Hoe verschillen elektronenorbitalen van klassieke elektronenbanen?"
        },
        options: [
          {
            en: "Orbitals are probability distributions; orbits are definite paths",
            es: "Los orbitales son distribuciones de probabilidad; las órbitas son caminos definidos",
            de: "Orbitale sind Wahrscheinlichkeitsverteilungen; Bahnen sind definierte Pfade",
            nl: "Orbitalen zijn waarschijnlijkheidsverdelingen; banen zijn bepaalde paden"
          },
          {
            en: "Orbitals and orbits are essentially the same concept",
            es: "Los orbitales y las órbitas son esencialmente el mismo concepto",
            de: "Orbitale und Bahnen sind im Wesentlichen dasselbe Konzept",
            nl: "Orbitalen en banen zijn in wezen hetzelfde concept"
          },
          {
            en: "Orbitals are circular, orbits are elliptical",
            es: "Los orbitales son circulares, las órbitas son elípticas",
            de: "Orbitale sind kreisförmig, Bahnen sind elliptisch",
            nl: "Orbitalen zijn cirkelvormig, banen zijn elliptisch"
          },
          {
            en: "Orbits exist in quantum mechanics, orbitals in classical physics",
            es: "Las órbitas existen en mecánica cuántica, los orbitales en física clásica",
            de: "Bahnen existieren in der Quantenmechanik, Orbitale in der klassischen Physik",
            nl: "Banen bestaan in de quantummechanica, orbitalen in klassieke fysica"
          }
        ],
        correct: 0,
        explanation: {
          en: "Quantum mechanical orbitals represent three-dimensional probability distributions showing where an electron is likely to be found, not definite paths. Classical orbits, like planetary orbits, are specific trajectories that particles follow. In quantum mechanics, the uncertainty principle prevents us from knowing both position and momentum simultaneously, so we can only speak of probabilities. Orbitals show regions of space where the electron has a high probability of being detected.",
          es: "Los orbitales cuántico-mecánicos representan distribuciones de probabilidad tridimensionales que muestran dónde es probable encontrar un electrón, no caminos definidos. Las órbitas clásicas, como las órbitas planetarias, son trayectorias específicas que siguen las partículas. En mecánica cuántica, el principio de incertidumbre nos impide conocer posición y momento simultáneamente, así que solo podemos hablar de probabilidades. Los orbitales muestran regiones del espacio donde el electrón tiene alta probabilidad de ser detectado.",
          de: "Quantenmechanische Orbitale repräsentieren dreidimensionale Wahrscheinlichkeitsverteilungen, die zeigen, wo ein Elektron wahrscheinlich zu finden ist, nicht definierte Pfade. Klassische Bahnen, wie Planetenbahnen, sind spezifische Trajektorien, denen Teilchen folgen. In der Quantenmechanik verhindert das Unschärfeprinzip, dass wir Ort und Impuls gleichzeitig kennen, sodass wir nur von Wahrscheinlichkeiten sprechen können. Orbitale zeigen Raumbereiche, wo das Elektron eine hohe Aufenthaltswahrscheinlichkeit hat.",
          nl: "Quantummechanische orbitalen vertegenwoordigen driedimensionale waarschijnlijkheidsverdelingen die tonen waar een elektron waarschijnlijk wordt gevonden, geen bepaalde paden. Klassieke banen, zoals planetaire banen, zijn specifieke trajecten die deeltjes volgen. In de quantummechanica voorkomt het onzekerheidsprincipe dat we positie en momentum gelijktijdig kennen, dus kunnen we alleen spreken van waarschijnlijkheden. Orbitalen tonen gebieden in de ruimte waar het elektron een hoge waarschijnlijkheid heeft om gedetecteerd te worden."
        }
      },
      {
        question: {
          en: "What is electron spin and its quantum mechanical properties?",
          es: "¿Qué es el espín del electrón y sus propiedades cuántico-mecánicas?",
          de: "Was ist Elektronenspin und seine quantenmechanischen Eigenschaften?",
          nl: "Wat is elektronenspin en zijn quantummechanische eigenschappen?"
        },
        options: [
          {
            en: "An intrinsic angular momentum with ms = ±1/2, not classical rotation",
            es: "Un momento angular intrínseco con ms = ±1/2, no rotación clásica",
            de: "Ein intrinsischer Drehimpuls mit ms = ±1/2, keine klassische Rotation",
            nl: "Een intrinsiek hoekimpuls met ms = ±1/2, geen klassieke rotatie"
          },
          {
            en: "The physical rotation of the electron around its axis",
            es: "La rotación física del electrón alrededor de su eje",
            de: "Die physikalische Rotation des Elektrons um seine Achse",
            nl: "De fysieke rotatie van het elektron rond zijn as"
          },
          {
            en: "The electron's orbital motion around the nucleus",
            es: "El movimiento orbital del electrón alrededor del núcleo",
            de: "Die Orbitalbewegung des Elektrons um den Kern",
            nl: "De orbitaalbeweging van het elektron rond de kern"
          },
          {
            en: "A classical magnetic dipole moment",
            es: "Un momento dipolar magnético clásico",
            de: "Ein klassisches magnetisches Dipolmoment",
            nl: "Een klassiek magnetisch dipoolmoment"
          }
        ],
        correct: 0,
        explanation: {
          en: "Electron spin is an intrinsic quantum mechanical property, not classical rotation. It represents an intrinsic angular momentum with quantum number ms = ±1/2 (spin-up or spin-down). Despite its name, spin doesn't correspond to physical rotation of the electron around an axis, as this would require the electron surface to move faster than light. Instead, it's a fundamental quantum property that gives rise to magnetic moments and is crucial for understanding atomic structure, chemical bonding, and the Pauli exclusion principle.",
          es: "El espín del electrón es una propiedad cuántico-mecánica intrínseca, no rotación clásica. Representa un momento angular intrínseco con número cuántico ms = ±1/2 (espín hacia arriba o hacia abajo). A pesar de su nombre, el espín no corresponde a rotación física del electrón alrededor de un eje, ya que esto requeriría que la superficie del electrón se moviera más rápido que la luz. En cambio, es una propiedad cuántica fundamental que da lugar a momentos magnéticos y es crucial para entender la estructura atómica, enlaces químicos y el principio de exclusión de Pauli.",
          de: "Elektronenspin ist eine intrinsische quantenmechanische Eigenschaft, keine klassische Rotation. Er repräsentiert einen intrinsischen Drehimpuls mit Quantenzahl ms = ±1/2 (Spin-up oder Spin-down). Trotz des Namens entspricht Spin nicht der physikalischen Rotation des Elektrons um eine Achse, da dies erfordern würde, dass sich die Elektronenoberfläche schneller als Licht bewegt. Stattdessen ist es eine fundamentale Quanteneigenschaft, die magnetische Momente erzeugt und entscheidend für das Verständnis von Atomstruktur, chemischer Bindung und dem Pauli-Ausschlussprinzip ist.",
          nl: "Elektronenspin is een intrinsieke quantummechanische eigenschap, geen klassieke rotatie. Het vertegenwoordigt een intrinsiek hoekimpuls met quantumgetal ms = ±1/2 (spin-omhoog of spin-omlaag). Ondanks de naam komt spin niet overeen met fysieke rotatie van het elektron rond een as, omdat dit zou vereisen dat het elektron oppervlak sneller dan licht zou bewegen. In plaats daarvan is het een fundamentele quantumeigenschap die magnetische momenten veroorzaakt en cruciaal is voor het begrijpen van atomaire structuur, chemische binding en het Pauli-uitsluitingsprincipe."
        }
      },
      {
        question: {
          en: "What is the degeneracy of hydrogen atom energy levels?",
          es: "¿Qué es la degeneración de los niveles de energía del átomo de hidrógeno?",
          de: "Was ist die Entartung der Energieniveaus des Wasserstoffatoms?",
          nl: "Wat is de degeneratie van waterstofatoom energieniveaus?"
        },
        options: [
          {
            en: "Each energy level En has degeneracy n², with multiple orbitals having the same energy",
            es: "Cada nivel de energía En tiene degeneración n², con múltiples orbitales teniendo la misma energía",
            de: "Jedes Energieniveau En hat Entartung n², mit mehreren Orbitalen gleicher Energie",
            nl: "Elk energieniveau En heeft degeneratie n², met meerdere orbitalen met dezelfde energie"
          },
          {
            en: "All energy levels are non-degenerate (unique)",
            es: "Todos los niveles de energía son no degenerados (únicos)",
            de: "Alle Energieniveaus sind nicht entartet (einzigartig)",
            nl: "Alle energieniveaus zijn niet-gedegenereerd (uniek)"
          },
          {
            en: "Only the ground state is degenerate",
            es: "Solo el estado fundamental es degenerado",
            de: "Nur der Grundzustand ist entartet",
            nl: "Alleen de grondtoestand is gedegenereerd"
          },
          {
            en: "Degeneracy depends only on the magnetic quantum number",
            es: "La degeneración depende solo del número cuántico magnético",
            de: "Entartung hängt nur von der magnetischen Quantenzahl ab",
            nl: "Degeneratie hangt alleen af van het magnetische quantumgetal"
          }
        ],
        correct: 0,
        explanation: {
          en: "In hydrogen, each energy level En (determined by principal quantum number n) has a degeneracy of n². This means multiple quantum states have the same energy. For example, n=2 has 4 degenerate states (2s, 2px, 2py, 2pz), and n=3 has 9 degenerate states. This degeneracy arises because the energy depends only on n, not on l or ml. The degeneracy is lifted when external fields are applied or when electron-electron interactions are considered in multi-electron atoms.",
          es: "En el hidrógeno, cada nivel de energía En (determinado por el número cuántico principal n) tiene una degeneración de n². Esto significa que múltiples estados cuánticos tienen la misma energía. Por ejemplo, n=2 tiene 4 estados degenerados (2s, 2px, 2py, 2pz), y n=3 tiene 9 estados degenerados. Esta degeneración surge porque la energía depende solo de n, no de l o ml. La degeneración se elimina cuando se aplican campos externos o cuando se consideran las interacciones electrón-electrón en átomos multielectrónicos.",
          de: "Im Wasserstoff hat jedes Energieniveau En (bestimmt durch die Hauptquantenzahl n) eine Entartung von n². Das bedeutet, dass mehrere Quantenzustände dieselbe Energie haben. Zum Beispiel hat n=2 vier entartete Zustände (2s, 2px, 2py, 2pz), und n=3 hat neun entartete Zustände. Diese Entartung entsteht, weil die Energie nur von n abhängt, nicht von l oder ml. Die Entartung wird aufgehoben, wenn äußere Felder angelegt werden oder wenn Elektron-Elektron-Wechselwirkungen in Mehrelektronenatomen berücksichtigt werden.",
          nl: "In waterstof heeft elk energieniveau En (bepaald door het hoofdquantumgetal n) een degeneratie van n². Dit betekent dat meerdere quantumtoestanden dezelfde energie hebben. Bijvoorbeeld, n=2 heeft 4 gedegenereerde toestanden (2s, 2px, 2py, 2pz), en n=3 heeft 9 gedegenereerde toestanden. Deze degeneratie ontstaat omdat de energie alleen afhangt van n, niet van l of ml. De degeneratie wordt opgeheven wanneer externe velden worden toegepast of wanneer elektron-elektron interacties worden beschouwd in multi-elektron atomen."
        }
      },
      {
        question: {
          en: "What causes the fine structure in hydrogen atom spectra?",
          es: "¿Qué causa la estructura fina en los espectros del átomo de hidrógeno?",
          de: "Was verursacht die Feinstruktur in Wasserstoffatomspektren?",
          nl: "Wat veroorzaakt de fijnstructuur in waterstofatoom spectra?"
        },
        options: [
          {
            en: "Relativistic corrections and spin-orbit coupling split energy levels",
            es: "Correcciones relativistas y acoplamiento espín-órbita dividen los niveles de energía",
            de: "Relativistische Korrekturen und Spin-Bahn-Kopplung spalten Energieniveaus auf",
            nl: "Relativistische correcties en spin-baan koppeling splitsen energieniveaus"
          },
          {
            en: "Electron-electron repulsion in multi-electron atoms",
            es: "Repulsión electrón-electrón en átomos multielectrónicos",
            de: "Elektron-Elektron-Abstoßung in Mehrelektronenatomen",
            nl: "Elektron-elektron afstoting in multi-elektron atomen"
          },
          {
            en: "Nuclear vibrations and molecular rotations",
            es: "Vibraciones nucleares y rotaciones moleculares",
            de: "Kernschwingungen und Molekülrotationen",
            nl: "Nucleaire trillingen en moleculaire rotaties"
          },
          {
            en: "External magnetic field effects only",
            es: "Solo efectos de campo magnético externo",
            de: "Nur Effekte äußerer Magnetfelder",
            nl: "Alleen externe magnetische veld effecten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Fine structure in hydrogen spectra arises from relativistic corrections to the electron's kinetic energy and spin-orbit coupling. These effects are small compared to the main Coulomb interaction but cause slight energy shifts that split what appear to be single spectral lines into closely spaced multiplets. The fine structure constant α ≈ 1/137 characterizes the strength of these relativistic effects, and the energy shifts scale as α⁴ relative to the main energy levels.",
          es: "La estructura fina en espectros de hidrógeno surge de correcciones relativistas a la energía cinética del electrón y el acoplamiento espín-órbita. Estos efectos son pequeños comparados con la interacción Coulombiana principal pero causan ligeros desplazamientos de energía que dividen lo que parecen ser líneas espectrales únicas en multipletes estrechamente espaciados. La constante de estructura fina α ≈ 1/137 caracteriza la fuerza de estos efectos relativistas, y los desplazamientos de energía escalan como α⁴ respecto a los niveles de energía principales.",
          de: "Feinstruktur in Wasserstoffspektren entsteht durch relativistische Korrekturen zur kinetischen Energie des Elektrons und Spin-Bahn-Kopplung. Diese Effekte sind klein im Vergleich zur Haupt-Coulomb-Wechselwirkung, verursachen aber geringe Energieverschiebungen, die scheinbar einzelne Spektrallinien in eng beieinanderliegende Multipletts aufspalten. Die Feinstrukturkonstante α ≈ 1/137 charakterisiert die Stärke dieser relativistischen Effekte, und die Energieverschiebungen skalieren als α⁴ relativ zu den Hauptenergieniveaus.",
          nl: "Fijnstructuur in waterstofspectra ontstaat door relativistische correcties op de kinetische energie van het elektron en spin-baan koppeling. Deze effecten zijn klein vergeleken met de hoofdcoulomb-interactie maar veroorzaken kleine energieverschuivingen die wat lijken op enkele spectrale lijnen splitsen in nauw gespatieerde multipletten. De fijnstructuurconstante α ≈ 1/137 karakteriseert de sterkte van deze relativistische effecten, en de energieverschuivingen schalen als α⁴ relatief tot de hoofdenergieniveaus."
        }
      },
      {
        question: {
          en: "How does the hydrogen atom model apply to hydrogen-like ions?",
          es: "¿Cómo se aplica el modelo del átomo de hidrógeno a iones similares al hidrógeno?",
          de: "Wie wendet sich das Wasserstoffatommodell auf wasserstoffähnliche Ionen an?",
          nl: "Hoe past het waterstofatoom model toe op waterstof-achtige ionen?"
        },
        options: [
          {
            en: "Energy levels scale as Z²; wave functions contract by factor Z (Z = nuclear charge)",
            es: "Los niveles de energía escalan como Z²; las funciones de onda se contraen por factor Z (Z = carga nuclear)",
            de: "Energieniveaus skalieren als Z²; Wellenfunktionen kontrahieren um Faktor Z (Z = Kernladung)",
            nl: "Energieniveaus schalen als Z²; golffuncties trekken samen met factor Z (Z = kernlading)"
          },
          {
            en: "The model only works for hydrogen and cannot be extended",
            es: "El modelo solo funciona para hidrógeno y no puede extenderse",
            de: "Das Modell funktioniert nur für Wasserstoff und kann nicht erweitert werden",
            nl: "Het model werkt alleen voor waterstof en kan niet worden uitgebreid"
          },
          {
            en: "Energy levels remain the same regardless of nuclear charge",
            es: "Los niveles de energía permanecen iguales independientemente de la carga nuclear",
            de: "Energieniveaus bleiben unabhängig von der Kernladung gleich",
            nl: "Energieniveaus blijven hetzelfde ongeacht de kernlading"
          },
          {
            en: "Only the orbital shapes change, not the energies",
            es: "Solo cambian las formas orbitales, no las energías",
            de: "Nur die Orbitalformen ändern sich, nicht die Energien",
            nl: "Alleen de orbitaalvormen veranderen, niet de energieën"
          }
        ],
        correct: 0,
        explanation: {
          en: "Hydrogen-like ions (He⁺, Li²⁺, Be³⁺, etc.) have only one electron but different nuclear charges Z. The energy levels scale as Z²En = -13.6 Z² eV/n², making them more tightly bound than hydrogen. The wave functions contract by a factor of Z, meaning orbitals become smaller and more tightly bound around the more highly charged nucleus. This scaling reflects the stronger Coulomb attraction between the electron and the higher nuclear charge.",
          es: "Los iones similares al hidrógeno (He⁺, Li²⁺, Be³⁺, etc.) tienen solo un electrón pero diferentes cargas nucleares Z. Los niveles de energía escalan como Z²En = -13.6 Z² eV/n², haciéndolos más fuertemente ligados que el hidrógeno. Las funciones de onda se contraen por un factor de Z, lo que significa que los orbitales se vuelven más pequeños y más fuertemente ligados alrededor del núcleo más cargado. Este escalamiento refleja la atracción Coulombiana más fuerte entre el electrón y la mayor carga nuclear.",
          de: "Wasserstoffähnliche Ionen (He⁺, Li²⁺, Be³⁺, usw.) haben nur ein Elektron, aber unterschiedliche Kernladungen Z. Die Energieniveaus skalieren als Z²En = -13,6 Z² eV/n², wodurch sie stärker gebunden sind als Wasserstoff. Die Wellenfunktionen kontrahieren um einen Faktor Z, was bedeutet, dass Orbitale kleiner und stärker um den höher geladenen Kern gebunden werden. Diese Skalierung spiegelt die stärkere Coulomb-Anziehung zwischen Elektron und höherer Kernladung wider.",
          nl: "Waterstof-achtige ionen (He⁺, Li²⁺, Be³⁺, enz.) hebben slechts één elektron maar verschillende kernladingen Z. De energieniveaus schalen als Z²En = -13.6 Z² eV/n², waardoor ze sterker gebonden zijn dan waterstof. De golffuncties trekken samen met een factor Z, wat betekent dat orbitalen kleiner worden en sterker gebonden rond de hoger geladen kern. Deze schaling reflecteert de sterkere Coulomb-aantrekking tussen het elektron en de hogere kernlading."
        }
      },
      {
        question: {
          en: "What is the radial probability distribution function for hydrogen orbitals?",
          es: "¿Qué es la función de distribución de probabilidad radial para orbitales de hidrógeno?",
          de: "Was ist die radiale Wahrscheinlichkeitsverteilungsfunktion für Wasserstofforbitale?",
          nl: "Wat is de radiale waarschijnlijkheidsdistributiefunctie voor waterstof orbitalen?"
        },
        options: [
          {
            en: "P(r) = 4πr²|ψ(r)|², showing probability of finding electron at radius r",
            es: "P(r) = 4πr²|ψ(r)|², mostrando probabilidad de encontrar electrón en radio r",
            de: "P(r) = 4πr²|ψ(r)|², zeigt Wahrscheinlichkeit, Elektron bei Radius r zu finden",
            nl: "P(r) = 4πr²|ψ(r)|², toont waarschijnlijkheid om elektron te vinden op straal r"
          },
          {
            en: "P(r) = |ψ(r)|² only, without angular factors",
            es: "P(r) = |ψ(r)|² solamente, sin factores angulares",
            de: "P(r) = |ψ(r)|² nur, ohne Winkelfaktoren",
            nl: "P(r) = |ψ(r)|² alleen, zonder hoekfactoren"
          },
          {
            en: "P(r) = r²/a₀³, independent of the quantum state",
            es: "P(r) = r²/a₀³, independiente del estado cuántico",
            de: "P(r) = r²/a₀³, unabhängig vom Quantenzustand",
            nl: "P(r) = r²/a₀³, onafhankelijk van de quantumtoestand"
          },
          {
            en: "P(r) = e^(-r/a₀) for all hydrogen orbitals",
            es: "P(r) = e^(-r/a₀) para todos los orbitales de hidrógeno",
            de: "P(r) = e^(-r/a₀) für alle Wasserstofforbitale",
            nl: "P(r) = e^(-r/a₀) voor alle waterstof orbitalen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The radial probability distribution P(r) = 4πr²|ψ(r)|² gives the probability of finding the electron in a thin spherical shell of radius r and thickness dr. The factor 4πr² accounts for the increasing surface area of spherical shells at larger radii. This function shows characteristic peaks corresponding to the most probable distances of the electron from the nucleus, with the ground state 1s orbital having its maximum at the Bohr radius.",
          es: "La distribución de probabilidad radial P(r) = 4πr²|ψ(r)|² da la probabilidad de encontrar el electrón en una cáscara esférica delgada de radio r y grosor dr. El factor 4πr² cuenta el área superficial creciente de cáscaras esféricas en radios más grandes. Esta función muestra picos característicos correspondientes a las distancias más probables del electrón desde el núcleo, con el orbital fundamental 1s teniendo su máximo en el radio de Bohr.",
          de: "Die radiale Wahrscheinlichkeitsverteilung P(r) = 4πr²|ψ(r)|² gibt die Wahrscheinlichkeit an, das Elektron in einer dünnen Kugelschale mit Radius r und Dicke dr zu finden. Der Faktor 4πr² berücksichtigt die zunehmende Oberfläche der Kugelschalen bei größeren Radien. Diese Funktion zeigt charakteristische Peaks entsprechend den wahrscheinlichsten Abständen des Elektrons vom Kern, wobei das Grundzustands-1s-Orbital sein Maximum beim Bohr-Radius hat.",
          nl: "De radiale waarschijnlijkheidsdistributie P(r) = 4πr²|ψ(r)|² geeft de waarschijnlijkheid om het elektron te vinden in een dunne sferische schil van straal r en dikte dr. De factor 4πr² houdt rekening met het toenemende oppervlak van sferische schillen bij grotere stralen. Deze functie toont karakteristieke pieken overeenkomend met de meest waarschijnlijke afstanden van het elektron tot de kern, waarbij het grondtoestand 1s orbitaal zijn maximum heeft bij de Bohr-straal."
        }
      },
      {
        question: {
          en: "What is the Lamb shift in hydrogen?",
          es: "¿Qué es el desplazamiento de Lamb en el hidrógeno?",
          de: "Was ist die Lamb-Verschiebung im Wasserstoff?",
          nl: "Wat is de Lamb-verschuiving in waterstof?"
        },
        options: [
          {
            en: "A small energy difference between 2s₁/₂ and 2p₁/₂ states due to vacuum fluctuations",
            es: "Una pequeña diferencia de energía entre estados 2s₁/₂ y 2p₁/₂ debido a fluctuaciones del vacío",
            de: "Ein kleiner Energieunterschied zwischen 2s₁/₂ und 2p₁/₂ Zuständen aufgrund von Vakuumfluktuationen",
            nl: "Een klein energieverschil tussen 2s₁/₂ en 2p₁/₂ toestanden door vacuümfluctuaties"
          },
          {
            en: "The splitting of energy levels due to external magnetic fields",
            es: "La división de niveles de energía debido a campos magnéticos externos",
            de: "Die Aufspaltung von Energieniveaus durch äußere Magnetfelder",
            nl: "De splitsing van energieniveaus door externe magnetische velden"
          },
          {
            en: "The hyperfine structure caused by nuclear spin",
            es: "La estructura hiperfina causada por el espín nuclear",
            de: "Die Hyperfeinstruktur verursacht durch Kernspin",
            nl: "De hyperfijnstructuur veroorzaakt door nucleaire spin"
          },
          {
            en: "The Doppler shift of spectral lines due to thermal motion",
            es: "El desplazamiento Doppler de líneas espectrales debido al movimiento térmico",
            de: "Die Doppler-Verschiebung von Spektrallinien aufgrund thermischer Bewegung",
            nl: "De Doppler-verschuiving van spectrale lijnen door thermische beweging"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Lamb shift is a tiny energy difference (~1057 MHz) between the 2s₁/₂ and 2p₁/₂ hydrogen states that should be degenerate according to Dirac theory but are split due to quantum electrodynamic (QED) effects. This shift arises from the interaction of the electron with vacuum fluctuations of the electromagnetic field and virtual particle creation/annihilation. Its discovery by Willis Lamb in 1947 provided crucial evidence for QED and earned him the Nobel Prize.",
          es: "El desplazamiento de Lamb es una diminuta diferencia de energía (~1057 MHz) entre los estados de hidrógeno 2s₁/₂ y 2p₁/₂ que deberían ser degenerados según la teoría de Dirac pero están divididos debido a efectos electrodinámicos cuánticos (QED). Este desplazamiento surge de la interacción del electrón con fluctuaciones del vacío del campo electromagnético y creación/aniquilación de partículas virtuales. Su descubrimiento por Willis Lamb en 1947 proporcionó evidencia crucial para QED y le valió el Premio Nobel.",
          de: "Die Lamb-Verschiebung ist ein winziger Energieunterschied (~1057 MHz) zwischen den Wasserstoffzuständen 2s₁/₂ und 2p₁/₂, die nach der Dirac-Theorie entartet sein sollten, aber aufgrund quantenelektrodynamischer (QED) Effekte aufgespalten sind. Diese Verschiebung entsteht durch die Wechselwirkung des Elektrons mit Vakuumfluktuationen des elektromagnetischen Feldes und virtueller Teilchenerzeugung/vernichtung. Ihre Entdeckung durch Willis Lamb 1947 lieferte entscheidende Evidenz für QED und brachte ihm den Nobelpreis ein.",
          nl: "De Lamb-verschuiving is een klein energieverschil (~1057 MHz) tussen de waterstof 2s₁/₂ en 2p₁/₂ toestanden die gedegenereerd zouden moeten zijn volgens Dirac theorie maar gesplitst zijn door quantum elektro-dynamische (QED) effecten. Deze verschuiving ontstaat door de interactie van het elektron met vacuümfluctuaties van het elektromagnetische veld en virtuele deeltjes creatie/annihilatie. De ontdekking door Willis Lamb in 1947 leverde cruciaal bewijs voor QED en bezorgde hem de Nobelprijs."
        }
      },
      {
        question: {
          en: "What is the hyperfine structure in hydrogen?",
          es: "¿Qué es la estructura hiperfina en el hidrógeno?",
          de: "Was ist die Hyperfeinstruktur im Wasserstoff?",
          nl: "Wat is de hyperfijnstructuur in waterstof?"
        },
        options: [
          {
            en: "Energy splitting due to interaction between electron and proton magnetic moments (21-cm line)",
            es: "División de energía debido a la interacción entre momentos magnéticos del electrón y protón (línea de 21 cm)",
            de: "Energieaufspaltung durch Wechselwirkung zwischen Elektron- und Proton-Magnetmomenten (21-cm-Linie)",
            nl: "Energie splitsing door interactie tussen elektron en proton magnetische momenten (21-cm lijn)"
          },
          {
            en: "The fine structure splitting due to spin-orbit coupling",
            es: "La división de estructura fina debido al acoplamiento espín-órbita",
            de: "Die Feinstrukturaufspaltung durch Spin-Bahn-Kopplung",
            nl: "De fijnstructuur splitsing door spin-baan koppeling"
          },
          {
            en: "Energy levels splitting in external electric fields",
            es: "División de niveles de energía en campos eléctricos externos",
            de: "Energieniveauaufspaltung in äußeren elektrischen Feldern",
            nl: "Energieniveau splitsing in externe elektrische velden"
          },
          {
            en: "The Zeeman effect in strong magnetic fields",
            es: "El efecto Zeeman en campos magnéticos fuertes",
            de: "Der Zeeman-Effekt in starken Magnetfeldern",
            nl: "Het Zeeman-effect in sterke magnetische velden"
          }
        ],
        correct: 0,
        explanation: {
          en: "Hyperfine structure arises from the magnetic interaction between the electron's spin and the proton's nuclear magnetic moment. In hydrogen's ground state, this creates two energy levels: the parallel spin configuration (F=1) and antiparallel configuration (F=0). The transition between these levels produces the famous 21-cm radiation (1420 MHz) that is crucial for radio astronomy and was used to map the structure of our galaxy.",
          es: "La estructura hiperfina surge de la interacción magnética entre el espín del electrón y el momento magnético nuclear del protón. En el estado fundamental del hidrógeno, esto crea dos niveles de energía: la configuración de espín paralelo (F=1) y la configuración antiparalela (F=0). La transición entre estos niveles produce la famosa radiación de 21 cm (1420 MHz) que es crucial para la radioastronomía y se usó para mapear la estructura de nuestra galaxia.",
          de: "Hyperfeinstruktur entsteht durch die magnetische Wechselwirkung zwischen dem Elektronenspin und dem nuklearen Magnetmoment des Protons. Im Grundzustand des Wasserstoffs erzeugt dies zwei Energieniveaus: die parallele Spinkonfiguration (F=1) und die antiparallele Konfiguration (F=0). Der Übergang zwischen diesen Niveaus erzeugt die berühmte 21-cm-Strahlung (1420 MHz), die für die Radioastronomie entscheidend ist und zur Kartierung der Struktur unserer Galaxie verwendet wurde.",
          nl: "Hyperfijnstructuur ontstaat door de magnetische interactie tussen de elektronenspin en het nucleaire magnetische moment van het proton. In de grondtoestand van waterstof creëert dit twee energieniveaus: de parallelle spinconfiguratie (F=1) en antiparallelle configuratie (F=0). De overgang tussen deze niveaus produceert de beroemde 21-cm straling (1420 MHz) die cruciaal is voor radioastronomie en gebruikt werd om de structuur van onze melkweg in kaart te brengen."
        }
      },
      {
        question: {
          en: "What is the Stark effect in hydrogen atoms?",
          es: "¿Qué es el efecto Stark en átomos de hidrógeno?",
          de: "Was ist der Stark-Effekt in Wasserstoffatomen?",
          nl: "Wat is het Stark-effect in waterstofatomen?"
        },
        options: [
          {
            en: "Energy level shifts and splittings due to external electric fields",
            es: "Desplazamientos y divisiones de niveles de energía debido a campos eléctricos externos",
            de: "Energieniveau-Verschiebungen und -Aufspaltungen durch äußere elektrische Felder",
            nl: "Energieniveau verschuivingen en splitsingen door externe elektrische velden"
          },
          {
            en: "The splitting of spectral lines in magnetic fields",
            es: "La división de líneas espectrales en campos magnéticos",
            de: "Die Aufspaltung von Spektrallinien in Magnetfeldern",
            nl: "De splitsing van spectrale lijnen in magnetische velden"
          },
          {
            en: "The broadening of spectral lines due to pressure",
            es: "El ensanchamiento de líneas espectrales debido a la presión",
            de: "Die Verbreiterung von Spektrallinien aufgrund von Druck",
            nl: "De verbreding van spectrale lijnen door druk"
          },
          {
            en: "The redshift of hydrogen lines in expanding universe",
            es: "El corrimiento al rojo de líneas de hidrógeno en el universo en expansión",
            de: "Die Rotverschiebung von Wasserstofflinien im expandierenden Universum",
            nl: "De roodverschuiving van waterstoflijnen in het uitdijende heelal"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Stark effect describes how hydrogen energy levels shift and split when the atom is placed in an external electric field. In hydrogen, the effect is predominantly linear (first-order) due to the accidental degeneracy of n²levels. The electric field mixes states with the same n but different l values, causing linear energy shifts proportional to the field strength. This effect is used in spectroscopy to study electric fields in plasmas and astronomical objects.",
          es: "El efecto Stark describe cómo los niveles de energía del hidrógeno se desplazan y dividen cuando el átomo se coloca en un campo eléctrico externo. En el hidrógeno, el efecto es predominantemente lineal (primer orden) debido a la degeneración accidental de los niveles n². El campo eléctrico mezcla estados con el mismo n pero diferentes valores de l, causando desplazamientos de energía lineales proporcionales a la intensidad del campo. Este efecto se usa en espectroscopía para estudiar campos eléctricos en plasmas y objetos astronómicos.",
          de: "Der Stark-Effekt beschreibt, wie sich Wasserstoff-Energieniveaus verschieben und aufspalten, wenn das Atom in ein äußeres elektrisches Feld gebracht wird. Im Wasserstoff ist der Effekt überwiegend linear (erster Ordnung) aufgrund der zufälligen Entartung der n²-Niveaus. Das elektrische Feld mischt Zustände mit gleichem n aber unterschiedlichen l-Werten, was lineare Energieverschiebungen proportional zur Feldstärke verursacht. Dieser Effekt wird in der Spektroskopie verwendet, um elektrische Felder in Plasmen und astronomischen Objekten zu untersuchen.",
          nl: "Het Stark-effect beschrijft hoe waterstof energieniveaus verschuiven en splitsen wanneer het atoom in een extern elektrisch veld wordt geplaatst. In waterstof is het effect voornamelijk lineair (eerste orde) vanwege de toevallige degeneratie van n² niveaus. Het elektrische veld mengt toestanden met dezelfde n maar verschillende l waarden, wat lineaire energieverschuivingen veroorzaakt evenredig met de veldsterkte. Dit effect wordt gebruikt in spectroscopie om elektrische velden in plasma's en astronomische objecten te bestuderen."
        }
      },
      {
        question: {
          en: "What are the selection rules for hydrogen atom transitions?",
          es: "¿Cuáles son las reglas de selección para transiciones del átomo de hidrógeno?",
          de: "Was sind die Auswahlregeln für Wasserstoffatomübergänge?",
          nl: "Wat zijn de selectieregels voor waterstofatoom overgangen?"
        },
        options: [
          {
            en: "Δn = any integer, Δl = ±1, Δml = 0, ±1 for electric dipole transitions",
            es: "Δn = cualquier entero, Δl = ±1, Δml = 0, ±1 para transiciones de dipolo eléctrico",
            de: "Δn = beliebige ganze Zahl, Δl = ±1, Δml = 0, ±1 für elektrische Dipolübergänge",
            nl: "Δn = elk geheel getal, Δl = ±1, Δml = 0, ±1 voor elektrische dipool overgangen"
          },
          {
            en: "Only Δn = ±1 transitions are allowed",
            es: "Solo se permiten transiciones Δn = ±1",
            de: "Nur Δn = ±1 Übergänge sind erlaubt",
            nl: "Alleen Δn = ±1 overgangen zijn toegestaan"
          },
          {
            en: "All transitions between any quantum states are equally probable",
            es: "Todas las transiciones entre cualquier estado cuántico son igualmente probables",
            de: "Alle Übergänge zwischen beliebigen Quantenzuständen sind gleich wahrscheinlich",
            nl: "Alle overgangen tussen willekeurige quantumtoestanden zijn even waarschijnlijk"
          },
          {
            en: "Only transitions with Δl = 0 are allowed",
            es: "Solo se permiten transiciones con Δl = 0",
            de: "Nur Übergänge mit Δl = 0 sind erlaubt",
            nl: "Alleen overgangen met Δl = 0 zijn toegestaan"
          }
        ],
        correct: 0,
        explanation: {
          en: "Selection rules determine which quantum transitions are allowed by electromagnetic radiation. For electric dipole transitions (the strongest and most common), the rules are: Δn can be any integer (but n must decrease for emission), Δl = ±1 (angular momentum must change by one unit), and Δml = 0, ±1 (corresponding to linear or circular polarization). These rules arise from conservation of angular momentum and the vector nature of electromagnetic radiation.",
          es: "Las reglas de selección determinan qué transiciones cuánticas están permitidas por radiación electromagnética. Para transiciones de dipolo eléctrico (las más fuertes y comunes), las reglas son: Δn puede ser cualquier entero (pero n debe disminuir para emisión), Δl = ±1 (el momento angular debe cambiar en una unidad), y Δml = 0, ±1 (correspondiente a polarización lineal o circular). Estas reglas surgen de la conservación del momento angular y la naturaleza vectorial de la radiación electromagnética.",
          de: "Auswahlregeln bestimmen, welche Quantenübergänge durch elektromagnetische Strahlung erlaubt sind. Für elektrische Dipolübergänge (die stärksten und häufigsten) lauten die Regeln: Δn kann eine beliebige ganze Zahl sein (aber n muss für Emission abnehmen), Δl = ±1 (Drehimpuls muss sich um eine Einheit ändern) und Δml = 0, ±1 (entsprechend linearer oder zirkularer Polarisation). Diese Regeln entstehen aus der Drehimpulserhaltung und der Vektornatur elektromagnetischer Strahlung.",
          nl: "Selectieregels bepalen welke quantumovergangen toegestaan zijn door elektromagnetische straling. Voor elektrische dipool overgangen (de sterkste en meest voorkomende), zijn de regels: Δn kan elk geheel getal zijn (maar n moet afnemen voor emissie), Δl = ±1 (hoekimpuls moet veranderen met één eenheid), en Δml = 0, ±1 (overeenkomend met lineaire of circulaire polarisatie). Deze regels ontstaan uit behoud van hoekimpuls en de vector-natuur van elektromagnetische straling."
        }
      },
      {
        question: {
          en: "What is the physical meaning of the radial quantum number?",
          es: "¿Cuál es el significado físico del número cuántico radial?",
          de: "Was ist die physikalische Bedeutung der radialen Quantenzahl?",
          nl: "Wat is de fysieke betekenis van het radiale quantumgetal?"
        },
        options: [
          {
            en: "nr = n - l - 1 determines the number of radial nodes in the wave function",
            es: "nr = n - l - 1 determina el número de nodos radiales en la función de onda",
            de: "nr = n - l - 1 bestimmt die Anzahl der radialen Knoten in der Wellenfunktion",
            nl: "nr = n - l - 1 bepaalt het aantal radiale knopen in de golffunctie"
          },
          {
            en: "It directly gives the orbital radius in Bohr units",
            es: "Da directamente el radio orbital en unidades de Bohr",
            de: "Es gibt direkt den Orbitalradius in Bohr-Einheiten an",
            nl: "Het geeft direct de orbitaalstraal in Bohr eenheden"
          },
          {
            en: "It determines the magnetic orientation of the orbital",
            es: "Determina la orientación magnética del orbital",
            de: "Es bestimmt die magnetische Orientierung des Orbitals",
            nl: "Het bepaalt de magnetische oriëntatie van het orbitaal"
          },
          {
            en: "It equals the total angular momentum quantum number",
            es: "Es igual al número cuántico de momento angular total",
            de: "Es entspricht der Gesamtdrehimpuls-Quantenzahl",
            nl: "Het is gelijk aan het totale hoekimpuls quantumgetal"
          }
        ],
        correct: 0,
        explanation: {
          en: "The radial quantum number nr = n - l - 1 determines the number of nodes (zeros) in the radial wave function R(r). For example, the 1s orbital has nr = 0 (no radial nodes), 2s has nr = 1 (one radial node), and 3s has nr = 2 (two radial nodes). These nodes represent spherical surfaces where the electron probability density is zero, creating the characteristic shell structure of atomic orbitals.",
          es: "El número cuántico radial nr = n - l - 1 determina el número de nodos (ceros) en la función de onda radial R(r). Por ejemplo, el orbital 1s tiene nr = 0 (sin nodos radiales), 2s tiene nr = 1 (un nodo radial), y 3s tiene nr = 2 (dos nodos radiales). Estos nodos representan superficies esféricas donde la densidad de probabilidad del electrón es cero, creando la estructura característica de capas de los orbitales atómicos.",
          de: "Die radiale Quantenzahl nr = n - l - 1 bestimmt die Anzahl der Knoten (Nullstellen) in der radialen Wellenfunktion R(r). Zum Beispiel hat das 1s-Orbital nr = 0 (keine radialen Knoten), 2s hat nr = 1 (einen radialen Knoten) und 3s hat nr = 2 (zwei radiale Knoten). Diese Knoten repräsentieren sphärische Oberflächen, wo die Elektronenwahrscheinlichkeitsdichte null ist, und erzeugen die charakteristische Schalenstruktur der Atomorbitale.",
          nl: "Het radiale quantumgetal nr = n - l - 1 bepaalt het aantal knopen (nullen) in de radiale golffunctie R(r). Bijvoorbeeld, het 1s orbitaal heeft nr = 0 (geen radiale knopen), 2s heeft nr = 1 (één radiale knoop), en 3s heeft nr = 2 (twee radiale knopen). Deze knopen vertegenwoordigen sferische oppervlakken waar de elektron waarschijnlijkheidsdichtheid nul is, wat de karakteristieke schilstructuur van atomaire orbitalen creëert."
        }
      },
      {
        question: {
          en: "What is the angular momentum of hydrogen orbitals?",
          es: "¿Cuál es el momento angular de los orbitales de hidrógeno?",
          de: "Was ist der Drehimpuls der Wasserstofforbitale?",
          nl: "Wat is het hoekimpuls van waterstof orbitalen?"
        },
        options: [
          {
            en: "L = ℏ√[l(l+1)], with magnitude determined by azimuthal quantum number l",
            es: "L = ℏ√[l(l+1)], con magnitud determinada por el número cuántico azimutal l",
            de: "L = ℏ√[l(l+1)], mit Betrag bestimmt durch die Nebenquantenzahl l",
            nl: "L = ℏ√[l(l+1)], met grootte bepaald door azimuthaal quantumgetal l"
          },
          {
            en: "L = nlℏ, proportional to both n and l",
            es: "L = nlℏ, proporcional tanto a n como a l",
            de: "L = nlℏ, proportional zu sowohl n als auch l",
            nl: "L = nlℏ, evenredig aan zowel n als l"
          },
          {
            en: "L = nℏ for all hydrogen orbitals",
            es: "L = nℏ para todos los orbitales de hidrógeno",
            de: "L = nℏ für alle Wasserstofforbitale",
            nl: "L = nℏ voor alle waterstof orbitalen"
          },
          {
            en: "Angular momentum is always zero in hydrogen",
            es: "El momento angular siempre es cero en el hidrógeno",
            de: "Drehimpuls ist immer null im Wasserstoff",
            nl: "Hoekimpuls is altijd nul in waterstof"
          }
        ],
        correct: 0,
        explanation: {
          en: "The orbital angular momentum magnitude in hydrogen is L = ℏ√[l(l+1)], where l is the azimuthal quantum number. For s orbitals (l=0), L=0; for p orbitals (l=1), L=ℏ√2; for d orbitals (l=2), L=ℏ√6, etc. The z-component is quantized as Lz = mlℏ, where ml can range from -l to +l. This quantization reflects the fundamental quantum mechanical nature of angular momentum.",
          es: "La magnitud del momento angular orbital en hidrógeno es L = ℏ√[l(l+1)], donde l es el número cuántico azimutal. Para orbitales s (l=0), L=0; para orbitales p (l=1), L=ℏ√2; para orbitales d (l=2), L=ℏ√6, etc. La componente z está cuantizada como Lz = mlℏ, donde ml puede ir desde -l hasta +l. Esta cuantización refleja la naturaleza cuántico-mecánica fundamental del momento angular.",
          de: "Der Betrag des Bahndrehimpulses im Wasserstoff ist L = ℏ√[l(l+1)], wobei l die Nebenquantenzahl ist. Für s-Orbitale (l=0) ist L=0; für p-Orbitale (l=1) ist L=ℏ√2; für d-Orbitale (l=2) ist L=ℏ√6, usw. Die z-Komponente ist quantisiert als Lz = mlℏ, wobei ml von -l bis +l reichen kann. Diese Quantisierung spiegelt die grundlegende quantenmechanische Natur des Drehimpulses wider.",
          nl: "De orbitaal hoekimpuls magnitude in waterstof is L = ℏ√[l(l+1)], waar l het azimuthale quantumgetal is. Voor s orbitalen (l=0), L=0; voor p orbitalen (l=1), L=ℏ√2; voor d orbitalen (l=2), L=ℏ√6, enz. De z-component is gekwantiseerd als Lz = mlℏ, waar ml kan variëren van -l tot +l. Deze kwantisatie reflecteert de fundamentele quantummechanische natuur van hoekimpuls."
        }
      },
      {
        question: {
          en: "What is the electron probability current in hydrogen orbitals?",
          es: "¿Qué es la corriente de probabilidad del electrón en orbitales de hidrógeno?",
          de: "Was ist der Elektronenwahrscheinlichkeitsstrom in Wasserstofforbitalen?",
          nl: "Wat is de elektron waarschijnlijkheidsstroom in waterstof orbitalen?"
        },
        options: [
          {
            en: "J = (ℏ/2mi)[ψ*∇ψ - ψ∇ψ*], showing quantum flow of probability density",
            es: "J = (ℏ/2mi)[ψ*∇ψ - ψ∇ψ*], mostrando flujo cuántico de densidad de probabilidad",
            de: "J = (ℏ/2mi)[ψ*∇ψ - ψ∇ψ*], zeigt Quantenfluss der Wahrscheinlichkeitsdichte",
            nl: "J = (ℏ/2mi)[ψ*∇ψ - ψ∇ψ*], toont quantumstroom van waarschijnlijkheidsdichtheid"
          },
          {
            en: "It represents classical particle trajectories in the atom",
            es: "Representa trayectorias de partículas clásicas en el átomo",
            de: "Es repräsentiert klassische Teilchenbahnen im Atom",
            nl: "Het vertegenwoordigt klassieke deeltjesbanen in het atoom"
          },
          {
            en: "J = |ψ|²v, where v is the classical velocity",
            es: "J = |ψ|²v, donde v es la velocidad clásica",
            de: "J = |ψ|²v, wobei v die klassische Geschwindigkeit ist",
            nl: "J = |ψ|²v, waar v de klassieke snelheid is"
          },
          {
            en: "Probability current is always zero in bound states",
            es: "La corriente de probabilidad siempre es cero en estados ligados",
            de: "Wahrscheinlichkeitsstrom ist immer null in gebundenen Zuständen",
            nl: "Waarschijnlijkheidsstroom is altijd nul in gebonden toestanden"
          }
        ],
        correct: 0,
        explanation: {
          en: "The probability current density J = (ℏ/2mi)[ψ*∇ψ - ψ∇ψ*] describes the quantum mechanical flow of probability density. In hydrogen atoms, this current is generally zero for real wave functions (like s orbitals) but non-zero for complex orbitals with definite angular momentum (like px ± ipy combinations). The current satisfies the continuity equation ∂ρ/∂t + ∇·J = 0, ensuring probability conservation.",
          es: "La densidad de corriente de probabilidad J = (ℏ/2mi)[ψ*∇ψ - ψ∇ψ*] describe el flujo cuántico-mecánico de densidad de probabilidad. En átomos de hidrógeno, esta corriente es generalmente cero para funciones de onda reales (como orbitales s) pero no cero para orbitales complejos con momento angular definido (como combinaciones px ± ipy). La corriente satisface la ecuación de continuidad ∂ρ/∂t + ∇·J = 0, asegurando conservación de probabilidad.",
          de: "Die Wahrscheinlichkeitsstromdichte J = (ℏ/2mi)[ψ*∇ψ - ψ∇ψ*] beschreibt den quantenmechanischen Fluss der Wahrscheinlichkeitsdichte. In Wasserstoffatomen ist dieser Strom allgemein null für reelle Wellenfunktionen (wie s-Orbitale), aber ungleich null für komplexe Orbitale mit definitem Drehimpuls (wie px ± ipy Kombinationen). Der Strom erfüllt die Kontinuitätsgleichung ∂ρ/∂t + ∇·J = 0, wodurch Wahrscheinlichkeitserhaltung gewährleistet wird.",
          nl: "De waarschijnlijkheidsstroom dichtheid J = (ℏ/2mi)[ψ*∇ψ - ψ∇ψ*] beschrijft de quantummechanische stroom van waarschijnlijkheidsdichtheid. In waterstofatomen is deze stroom over het algemeen nul voor reële golffuncties (zoals s orbitalen) maar niet-nul voor complexe orbitalen met bepaald hoekimpuls (zoals px ± ipy combinaties). De stroom voldoet aan de continuiteitsvergelijking ∂ρ/∂t + ∇·J = 0, wat waarschijnlijkheidsbehoud verzekert."
        }
      },
      {
        question: {
          en: "What is the virial theorem applied to hydrogen atom?",
          es: "¿Qué es el teorema del virial aplicado al átomo de hidrógeno?",
          de: "Was ist das Virialtheorem angewandt auf das Wasserstoffatom?",
          nl: "Wat is de viriaalstelling toegepast op het waterstofatoom?"
        },
        options: [
          {
            en: "⟨T⟩ = -½⟨V⟩ and E = ⟨T⟩ + ⟨V⟩ = -½⟨V⟩, relating kinetic and potential energy",
            es: "⟨T⟩ = -½⟨V⟩ y E = ⟨T⟩ + ⟨V⟩ = -½⟨V⟩, relacionando energía cinética y potencial",
            de: "⟨T⟩ = -½⟨V⟩ und E = ⟨T⟩ + ⟨V⟩ = -½⟨V⟩, verbindet kinetische und potentielle Energie",
            nl: "⟨T⟩ = -½⟨V⟩ en E = ⟨T⟩ + ⟨V⟩ = -½⟨V⟩, relateert kinetische en potentiële energie"
          },
          {
            en: "The kinetic energy always equals the total energy",
            es: "La energía cinética siempre es igual a la energía total",
            de: "Die kinetische Energie entspricht immer der Gesamtenergie",
            nl: "De kinetische energie is altijd gelijk aan de totale energie"
          },
          {
            en: "Potential and kinetic energies are always equal",
            es: "Las energías potencial y cinética son siempre iguales",
            de: "Potential- und kinetische Energie sind immer gleich",
            nl: "Potentiële en kinetische energieën zijn altijd gelijk"
          },
          {
            en: "The virial theorem doesn't apply to quantum systems",
            es: "El teorema del virial no se aplica a sistemas cuánticos",
            de: "Das Virialtheorem gilt nicht für Quantensysteme",
            nl: "De viriaalstelling geldt niet voor quantumsystemen"
          }
        ],
        correct: 0,
        explanation: {
          en: "For hydrogen atom with Coulomb potential V = -ke²/r, the virial theorem gives ⟨T⟩ = -½⟨V⟩. Since E = ⟨T⟩ + ⟨V⟩, we get E = -½⟨V⟩ = ⟨T⟩. This means the kinetic energy is positive and equals the magnitude of half the potential energy. This relationship is crucial for understanding atomic stability and the scale invariance of the Coulomb potential.",
          es: "Para el átomo de hidrógeno con potencial de Coulomb V = -ke²/r, el teorema del virial da ⟨T⟩ = -½⟨V⟩. Como E = ⟨T⟩ + ⟨V⟩, obtenemos E = -½⟨V⟩ = ⟨T⟩. Esto significa que la energía cinética es positiva e igual a la magnitud de la mitad de la energía potencial. Esta relación es crucial para entender la estabilidad atómica y la invariancia de escala del potencial de Coulomb.",
          de: "Für das Wasserstoffatom mit Coulomb-Potential V = -ke²/r gibt das Virialtheorem ⟨T⟩ = -½⟨V⟩. Da E = ⟨T⟩ + ⟨V⟩, erhalten wir E = -½⟨V⟩ = ⟨T⟩. Das bedeutet, die kinetische Energie ist positiv und entspricht dem Betrag der Hälfte der potentiellen Energie. Diese Beziehung ist entscheidend für das Verständnis atomarer Stabilität und der Skaleninvarianz des Coulomb-Potentials.",
          nl: "Voor het waterstofatoom met Coulomb potentiaal V = -ke²/r, geeft de viriaalstelling ⟨T⟩ = -½⟨V⟩. Omdat E = ⟨T⟩ + ⟨V⟩, krijgen we E = -½⟨V⟩ = ⟨T⟩. Dit betekent dat de kinetische energie positief is en gelijk aan de magnitude van de helft van de potentiële energie. Deze relatie is cruciaal voor het begrijpen van atomaire stabiliteit en de schaalinvariantie van het Coulomb potentiaal."
        }
      },
      {
        question: {
          en: "What is the hydrogen atom wave function separation method?",
          es: "¿Qué es el método de separación de funciones de onda del átomo de hidrógeno?",
          de: "Was ist die Separationsmethode für Wasserstoffatom-Wellenfunktionen?",
          nl: "Wat is de scheidingsmethode voor waterstofatoom golffuncties?"
        },
        options: [
          {
            en: "ψ(r,θ,φ) = R(r)Y_l^ml(θ,φ), separating radial and angular parts",
            es: "ψ(r,θ,φ) = R(r)Y_l^ml(θ,φ), separando partes radiales y angulares",
            de: "ψ(r,θ,φ) = R(r)Y_l^ml(θ,φ), trennt radiale und Winkelanteile",
            nl: "ψ(r,θ,φ) = R(r)Y_l^ml(θ,φ), scheidt radiale en hoek delen"
          },
          {
            en: "The wave function cannot be separated in spherical coordinates",
            es: "La función de onda no puede separarse en coordenadas esféricas",
            de: "Die Wellenfunktion kann nicht in Kugelkoordinaten getrennt werden",
            nl: "De golffunctie kan niet worden gescheiden in sferische coördinaten"
          },
          {
            en: "ψ(x,y,z) = X(x)Y(y)Z(z) in Cartesian coordinates only",
            es: "ψ(x,y,z) = X(x)Y(y)Z(z) solo en coordenadas cartesianas",
            de: "ψ(x,y,z) = X(x)Y(y)Z(z) nur in kartesischen Koordinaten",
            nl: "ψ(x,y,z) = X(x)Y(y)Z(z) alleen in Cartesische coördinaten"
          },
          {
            en: "Separation requires external field perturbations",
            es: "La separación requiere perturbaciones de campo externo",
            de: "Trennung erfordert Störungen äußerer Felder",
            nl: "Scheiding vereist externe veld verstoringen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The hydrogen atom Schrödinger equation separates in spherical coordinates as ψ(r,θ,φ) = R(r)Y_l^ml(θ,φ), where R(r) is the radial wave function and Y_l^ml(θ,φ) are spherical harmonics. This separation occurs because the Coulomb potential depends only on r, allowing the angular and radial parts to be solved independently. The spherical harmonics represent the angular momentum states, while the radial function describes the electron distribution with distance from the nucleus.",
          es: "La ecuación de Schrödinger del átomo de hidrógeno se separa en coordenadas esféricas como ψ(r,θ,φ) = R(r)Y_l^ml(θ,φ), donde R(r) es la función de onda radial y Y_l^ml(θ,φ) son armónicos esféricos. Esta separación ocurre porque el potencial de Coulomb depende solo de r, permitiendo que las partes angular y radial se resuelvan independientemente. Los armónicos esféricos representan los estados de momento angular, mientras que la función radial describe la distribución del electrón con la distancia del núcleo.",
          de: "Die Schrödinger-Gleichung des Wasserstoffatoms separiert in Kugelkoordinaten als ψ(r,θ,φ) = R(r)Y_l^ml(θ,φ), wobei R(r) die radiale Wellenfunktion und Y_l^ml(θ,φ) Kugelflächenfunktionen sind. Diese Trennung tritt auf, weil das Coulomb-Potential nur von r abhängt, wodurch die Winkel- und Radialanteile unabhängig gelöst werden können. Die Kugelflächenfunktionen repräsentieren die Drehimpulszustände, während die radiale Funktion die Elektronenverteilung mit dem Abstand vom Kern beschreibt.",
          nl: "De Schrödinger-vergelijking van het waterstofatoom scheidt in sferische coördinaten als ψ(r,θ,φ) = R(r)Y_l^ml(θ,φ), waar R(r) de radiale golffunctie is en Y_l^ml(θ,φ) sferische harmonischen zijn. Deze scheiding treedt op omdat het Coulomb potentiaal alleen afhangt van r, waardoor de hoek en radiale delen onafhankelijk kunnen worden opgelost. De sferische harmonischen vertegenwoordigen de hoekimpuls toestanden, terwijl de radiale functie de elektronenverdeling beschrijft met afstand van de kern."
        }
      },
      {
        question: {
          en: "What is the magnetic moment of hydrogen atom orbitals?",
          es: "¿Cuál es el momento magnético de los orbitales del átomo de hidrógeno?",
          de: "Was ist das magnetische Moment der Wasserstoffatom-Orbitale?",
          nl: "Wat is het magnetische moment van waterstofatoom orbitalen?"
        },
        options: [
          {
            en: "μ_L = -μ_B√[l(l+1)] for orbital motion, where μ_B is the Bohr magneton",
            es: "μ_L = -μ_B√[l(l+1)] para movimiento orbital, donde μ_B es el magnetón de Bohr",
            de: "μ_L = -μ_B√[l(l+1)] für Orbitalbewegung, wobei μ_B das Bohrsche Magneton ist",
            nl: "μ_L = -μ_B√[l(l+1)] voor orbitaalbeweging, waar μ_B het Bohr magneton is"
          },
          {
            en: "The magnetic moment is always zero for all hydrogen orbitals",
            es: "El momento magnético siempre es cero para todos los orbitales de hidrógeno",
            de: "Das magnetische Moment ist immer null für alle Wasserstofforbitale",
            nl: "Het magnetische moment is altijd nul voor alle waterstof orbitalen"
          },
          {
            en: "μ = eℏ/2m for all quantum states",
            es: "μ = eℏ/2m para todos los estados cuánticos",
            de: "μ = eℏ/2m für alle Quantenzustände",
            nl: "μ = eℏ/2m voor alle quantumtoestanden"
          },
          {
            en: "Magnetic moment depends only on the principal quantum number n",
            es: "El momento magnético depende solo del número cuántico principal n",
            de: "Das magnetische Moment hängt nur von der Hauptquantenzahl n ab",
            nl: "Magnetisch moment hangt alleen af van het hoofdquantumgetal n"
          }
        ],
        correct: 0,
        explanation: {
          en: "The orbital magnetic moment is μ_L = -μ_B√[l(l+1)], where μ_B = eℏ/2m_e is the Bohr magneton. The negative sign indicates that the magnetic moment is opposite to the angular momentum vector (due to the negative electron charge). The z-component is μ_Lz = -μ_B m_l. For s orbitals (l=0), the orbital magnetic moment is zero, while p, d, f orbitals have non-zero orbital magnetic moments.",
          es: "El momento magnético orbital es μ_L = -μ_B√[l(l+1)], donde μ_B = eℏ/2m_e es el magnetón de Bohr. El signo negativo indica que el momento magnético es opuesto al vector de momento angular (debido a la carga negativa del electrón). La componente z es μ_Lz = -μ_B m_l. Para orbitales s (l=0), el momento magnético orbital es cero, mientras que los orbitales p, d, f tienen momentos magnéticos orbitales no cero.",
          de: "Das magnetische Bahnmoment ist μ_L = -μ_B√[l(l+1)], wobei μ_B = eℏ/2m_e das Bohrsche Magneton ist. Das negative Vorzeichen zeigt an, dass das magnetische Moment dem Drehimpulsvektor entgegengesetzt ist (aufgrund der negativen Elektronenladung). Die z-Komponente ist μ_Lz = -μ_B m_l. Für s-Orbitale (l=0) ist das magnetische Bahnmoment null, während p-, d-, f-Orbitale nicht-null magnetische Bahnmomente haben.",
          nl: "Het orbitaal magnetische moment is μ_L = -μ_B√[l(l+1)], waar μ_B = eℏ/2m_e het Bohr magneton is. Het negatieve teken geeft aan dat het magnetische moment tegengesteld is aan de hoekimpulsvector (vanwege de negatieve elektronenlading). De z-component is μ_Lz = -μ_B m_l. Voor s orbitalen (l=0) is het orbitaal magnetische moment nul, terwijl p, d, f orbitalen niet-nul orbitaal magnetische momenten hebben."
        }
      },
      {
        question: {
          en: "What is the correspondence principle applied to hydrogen atom?",
          es: "¿Qué es el principio de correspondencia aplicado al átomo de hidrógeno?",
          de: "Was ist das Korrespondenzprinzip angewandt auf das Wasserstoffatom?",
          nl: "Wat is het correspondentieprincipe toegepast op het waterstofatoom?"
        },
        options: [
          {
            en: "For large n, quantum predictions approach classical Bohr orbit results",
            es: "Para n grandes, las predicciones cuánticas se acercan a los resultados de órbitas de Bohr clásicas",
            de: "Für große n nähern sich Quantenvorhersagen klassischen Bohr-Bahn-Ergebnissen an",
            nl: "Voor grote n, benaderen quantumvoorspellingen klassieke Bohr baan resultaten"
          },
          {
            en: "Quantum mechanics never agrees with classical predictions",
            es: "La mecánica cuántica nunca concuerda con predicciones clásicas",
            de: "Quantenmechanik stimmt niemals mit klassischen Vorhersagen überein",
            nl: "Quantummechanica komt nooit overeen met klassieke voorspellingen"
          },
          {
            en: "Classical physics is always more accurate than quantum mechanics",
            es: "La física clásica es siempre más precisa que la mecánica cuántica",
            de: "Klassische Physik ist immer genauer als Quantenmechanik",
            nl: "Klassieke fysica is altijd nauwkeuriger dan quantummechanica"
          },
          {
            en: "The principle only applies to electromagnetic radiation",
            es: "El principio solo se aplica a radiación electromagnética",
            de: "Das Prinzip gilt nur für elektromagnetische Strahlung",
            nl: "Het principe geldt alleen voor elektromagnetische straling"
          }
        ],
        correct: 0,
        explanation: {
          en: "The correspondence principle states that quantum mechanical results must approach classical results in the appropriate limit. For hydrogen, as n becomes very large, the quantum orbital radius ⟨r⟩ ≈ n²a₀ approaches the classical Bohr radius rₙ = n²a₀. The electron wave packets become more localized and behavior resembles classical planetary motion. This principle guided the development of quantum mechanics and provides a crucial link between quantum and classical physics.",
          es: "El principio de correspondencia establece que los resultados cuántico-mecánicos deben acercarse a resultados clásicos en el límite apropiado. Para el hidrógeno, cuando n se vuelve muy grande, el radio orbital cuántico ⟨r⟩ ≈ n²a₀ se acerca al radio clásico de Bohr rₙ = n²a₀. Los paquetes de ondas del electrón se vuelven más localizados y el comportamiento se asemeja al movimiento planetario clásico. Este principio guió el desarrollo de la mecánica cuántica y proporciona un vínculo crucial entre la física cuántica y clásica.",
          de: "Das Korrespondenzprinzip besagt, dass quantenmechanische Ergebnisse sich klassischen Ergebnissen im entsprechenden Grenzfall nähern müssen. Für Wasserstoff nähert sich bei sehr großem n der Quantenorbitalradius ⟨r⟩ ≈ n²a₀ dem klassischen Bohr-Radius rₙ = n²a₀ an. Die Elektronenwellenpakete werden lokalisierter und das Verhalten ähnelt klassischer Planetenbewegung. Dieses Prinzip leitete die Entwicklung der Quantenmechanik und stellt eine entscheidende Verbindung zwischen Quanten- und klassischer Physik dar.",
          nl: "Het correspondentieprincipe stelt dat quantummechanische resultaten klassieke resultaten moeten benaderen in de juiste limiet. Voor waterstof, wanneer n zeer groot wordt, benadert de quantum orbitaal straal ⟨r⟩ ≈ n²a₀ de klassieke Bohr straal rₙ = n²a₀. De elektron golfpakketten worden meer gelokaliseerd en het gedrag lijkt op klassieke planetaire beweging. Dit principe leidde de ontwikkeling van de quantummechanica en biedt een cruciale link tussen quantum en klassieke fysica."
        }
      },
      {
        question: {
          en: "What is the penetration effect in multi-electron atoms vs hydrogen?",
          es: "¿Qué es el efecto de penetración en átomos multielectrónicos vs hidrógeno?",
          de: "Was ist der Penetrationseffekt in Mehrelektronenatomen vs. Wasserstoff?",
          nl: "Wat is het penetratie-effect in multi-elektron atomen vs waterstof?"
        },
        options: [
          {
            en: "Electrons in lower l orbitals penetrate inner shells more, experiencing higher effective nuclear charge",
            es: "Electrones en orbitales l menores penetran capas internas más, experimentando carga nuclear efectiva mayor",
            de: "Elektronen in niedrigeren l-Orbitalen penetrieren innere Schalen mehr und erfahren höhere effektive Kernladung",
            nl: "Elektronen in lagere l orbitalen penetreren binnenste schillen meer, ondervindend hogere effectieve kernlading"
          },
          {
            en: "Penetration effect only occurs in hydrogen atoms",
            es: "El efecto de penetración solo ocurre en átomos de hidrógeno",
            de: "Penetrationseffekt tritt nur in Wasserstoffatomen auf",
            nl: "Penetratie-effect treedt alleen op in waterstofatomen"
          },
          {
            en: "All orbitals with same n have identical penetration",
            es: "Todos los orbitales con la misma n tienen penetración idéntica",
            de: "Alle Orbitale mit gleichem n haben identische Penetration",
            nl: "Alle orbitalen met dezelfde n hebben identieke penetratie"
          },
          {
            en: "Penetration decreases the effective nuclear charge",
            es: "La penetración disminuye la carga nuclear efectiva",
            de: "Penetration verringert die effektive Kernladung",
            nl: "Penetratie vermindert de effectieve kernlading"
          }
        ],
        correct: 0,
        explanation: {
          en: "In multi-electron atoms, unlike hydrogen, electrons in different subshells (same n, different l) experience different effective nuclear charges due to penetration effects. Electrons in s orbitals penetrate closer to the nucleus than p electrons, which penetrate more than d electrons. This creates the energy order: ns < np < nd < nf. The penetration effect explains why electron configuration follows the aufbau principle rather than simple n-level filling.",
          es: "En átomos multielectrónicos, a diferencia del hidrógeno, electrones en diferentes subcapas (misma n, diferente l) experimentan diferentes cargas nucleares efectivas debido a efectos de penetración. Electrones en orbitales s penetran más cerca del núcleo que electrones p, que penetran más que electrones d. Esto crea el orden de energía: ns < np < nd < nf. El efecto de penetración explica por qué la configuración electrónica sigue el principio de aufbau en lugar de llenado simple de niveles n.",
          de: "In Mehrelektronenatomen erfahren Elektronen in verschiedenen Unterschalen (gleiches n, verschiedenes l) im Gegensatz zu Wasserstoff unterschiedliche effektive Kernladungen aufgrund von Penetrationseffekten. Elektronen in s-Orbitalen penetrieren näher zum Kern als p-Elektronen, die mehr als d-Elektronen penetrieren. Dies erzeugt die Energiereihenfolge: ns < np < nd < nf. Der Penetrationseffekt erklärt, warum Elektronenkonfiguration dem Aufbauprinzip folgt statt einfacher n-Niveau-Füllung.",
          nl: "In multi-elektron atomen, in tegenstelling tot waterstof, ondervinden elektronen in verschillende subschillen (zelfde n, verschillende l) verschillende effectieve kernladingen door penetratie-effecten. Elektronen in s orbitalen penetreren dichter bij de kern dan p elektronen, die meer penetreren dan d elektronen. Dit creëert de energievolgorde: ns < np < nd < nf. Het penetratie-effect verklaart waarom elektronenconfiguratie het aufbau principe volgt in plaats van eenvoudige n-niveau vulling."
        }
      },
      {
        question: {
          en: "What is the hydrogen atom in parabolic coordinates?",
          es: "¿Qué es el átomo de hidrógeno en coordenadas parabólicas?",
          de: "Was ist das Wasserstoffatom in parabolischen Koordinaten?",
          nl: "Wat is het waterstofatoom in parabolische coördinaten?"
        },
        options: [
          {
            en: "Alternative solution revealing different symmetries, useful for Stark effect analysis",
            es: "Solución alternativa que revela diferentes simetrías, útil para análisis del efecto Stark",
            de: "Alternative Lösung, die verschiedene Symmetrien offenbart, nützlich für Stark-Effekt-Analyse",
            nl: "Alternatieve oplossing die verschillende symmetrieën onthult, nuttig voor Stark-effect analyse"
          },
          {
            en: "The only correct way to solve the hydrogen atom",
            es: "La única forma correcta de resolver el átomo de hidrógeno",
            de: "Der einzig korrekte Weg, das Wasserstoffatom zu lösen",
            nl: "De enige juiste manier om het waterstofatoom op te lossen"
          },
          {
            en: "A coordinate system that cannot be used for hydrogen",
            es: "Un sistema de coordenadas que no puede usarse para hidrógeno",
            de: "Ein Koordinatensystem, das nicht für Wasserstoff verwendet werden kann",
            nl: "Een coördinatensysteem dat niet gebruikt kan worden voor waterstof"
          },
          {
            en: "Only valid for excited states, not ground state",
            es: "Solo válido para estados excitados, no estado fundamental",
            de: "Nur gültig für angeregte Zustände, nicht Grundzustand",
            nl: "Alleen geldig voor aangeslagen toestanden, niet grondtoestand"
          }
        ],
        correct: 0,
        explanation: {
          en: "Parabolic coordinates (ξ, η, φ) provide an alternative solution to the hydrogen atom that naturally incorporates the symmetry of electric fields. While spherical coordinates are most common, parabolic coordinates are particularly useful for analyzing the Stark effect, where the degeneracy is lifted by external electric fields. The wave functions in parabolic coordinates reveal the 'hidden' symmetry of the hydrogen atom and provide insight into how the atom responds to external perturbations.",
          es: "Las coordenadas parabólicas (ξ, η, φ) proporcionan una solución alternativa al átomo de hidrógeno que incorpora naturalmente la simetría de campos eléctricos. Aunque las coordenadas esféricas son más comunes, las coordenadas parabólicas son particularmente útiles para analizar el efecto Stark, donde la degeneración se elimina por campos eléctricos externos. Las funciones de onda en coordenadas parabólicas revelan la simetría 'oculta' del átomo de hidrógeno y proporcionan perspectiva sobre cómo el átomo responde a perturbaciones externas.",
          de: "Parabolische Koordinaten (ξ, η, φ) bieten eine alternative Lösung für das Wasserstoffatom, die natürlich die Symmetrie elektrischer Felder einbezieht. Während Kugelkoordinaten am gebräuchlichsten sind, sind parabolische Koordinaten besonders nützlich für die Analyse des Stark-Effekts, wo die Entartung durch äußere elektrische Felder aufgehoben wird. Die Wellenfunktionen in parabolischen Koordinaten offenbaren die 'verborgene' Symmetrie des Wasserstoffatoms und geben Einblick, wie das Atom auf äußere Störungen reagiert.",
          nl: "Parabolische coördinaten (ξ, η, φ) bieden een alternatieve oplossing voor het waterstofatoom die natuurlijk de symmetrie van elektrische velden incorporeert. Hoewel sferische coördinaten het meest gebruikelijk zijn, zijn parabolische coördinaten bijzonder nuttig voor het analyseren van het Stark-effect, waar de degeneratie wordt opgeheven door externe elektrische velden. De golffuncties in parabolische coördinaten onthullen de 'verborgen' symmetrie van het waterstofatoom en geven inzicht in hoe het atoom reageert op externe verstoringen."
        }
      },
      {
        question: {
          en: "What is the quantum defect in alkali atoms vs hydrogen?",
          es: "¿Qué es el defecto cuántico en átomos alcalinos vs hidrógeno?",
          de: "Was ist der Quantendefekt in Alkaliatomen vs. Wasserstoff?",
          nl: "Wat is het quantumdefect in alkali atomen vs waterstof?"
        },
        options: [
          {
            en: "δ = n - n*, where n* is effective principal quantum number accounting for core electron screening",
            es: "δ = n - n*, donde n* es el número cuántico principal efectivo considerando el blindaje de electrones internos",
            de: "δ = n - n*, wobei n* die effektive Hauptquantenzahl ist, die die Abschirmung der Rumpfelektronen berücksichtigt",
            nl: "δ = n - n*, waar n* het effectieve hoofdquantumgetal is dat rekening houdt met kern-elektron afscherming"
          },
          {
            en: "Hydrogen atoms have large quantum defects unlike alkali atoms",
            es: "Los átomos de hidrógeno tienen grandes defectos cuánticos a diferencia de los átomos alcalinos",
            de: "Wasserstoffatome haben große Quantendefekte im Gegensatz zu Alkaliatomen",
            nl: "Waterstofatomen hebben grote quantumdefecten in tegenstelling tot alkali atomen"
          },
          {
            en: "Quantum defect is the same for all orbital angular momentum states",
            es: "El defecto cuántico es el mismo para todos los estados de momento angular orbital",
            de: "Quantendefekt ist gleich für alle Bahndrehimpulszustände",
            nl: "Quantumdefect is hetzelfde voor alle orbitaal hoekimpuls toestanden"
          },
          {
            en: "The defect only affects ground state energy levels",
            es: "El defecto solo afecta los niveles de energía del estado fundamental",
            de: "Der Defekt betrifft nur Grundzustands-Energieniveaus",
            nl: "Het defect beïnvloedt alleen grondtoestand energieniveaus"
          }
        ],
        correct: 0,
        explanation: {
          en: "The quantum defect δ = n - n* accounts for the departure from hydrogen-like behavior in alkali atoms due to penetration of the valence electron into the inner electron core. The effective principal quantum number n* is typically non-integer because the valence electron experiences a different potential than the pure Coulomb potential of hydrogen. The defect is largest for s orbitals (which penetrate most) and decreases as l increases (p < d < f), explaining the fine structure of alkali spectra.",
          es: "El defecto cuántico δ = n - n* considera la desviación del comportamiento similar al hidrógeno en átomos alcalinos debido a la penetración del electrón de valencia en el núcleo electrónico interno. El número cuántico principal efectivo n* es típicamente no entero porque el electrón de valencia experimenta un potencial diferente al potencial Coulombiano puro del hidrógeno. El defecto es mayor para orbitales s (que penetran más) y disminuye cuando l aumenta (p < d < f), explicando la estructura fina de espectros alcalinos.",
          de: "Der Quantendefekt δ = n - n* berücksichtigt die Abweichung vom wasserstoffähnlichen Verhalten in Alkaliatomen aufgrund der Penetration des Valenzelektrons in den inneren Elektronenkern. Die effektive Hauptquantenzahl n* ist typischerweise nicht-ganzzahlig, weil das Valenzelektron ein anderes Potential als das reine Coulomb-Potential des Wasserstoffs erfährt. Der Defekt ist am größten für s-Orbitale (die am meisten penetrieren) und nimmt ab, wenn l zunimmt (p < d < f), was die Feinstruktur von Alkalispektren erklärt.",
          nl: "Het quantumdefect δ = n - n* houdt rekening met de afwijking van waterstof-achtig gedrag in alkali atomen door penetratie van het valentie-elektron in de binnenste elektronenkern. Het effectieve hoofdquantumgetal n* is typisch niet-geheel omdat het valentie-elektron een ander potentiaal ervaart dan het pure Coulomb potentiaal van waterstof. Het defect is het grootst voor s orbitalen (die het meest penetreren) en neemt af naarmate l toeneemt (p < d < f), wat de fijnstructuur van alkali spectra verklaart."
        }
      },
      {
        question: {
          en: "What is the relativistic correction to hydrogen energy levels?",
          es: "¿Cuál es la corrección relativista a los niveles de energía del hidrógeno?",
          de: "Was ist die relativistische Korrektur zu Wasserstoff-Energieniveaus?",
          nl: "Wat is de relativistische correctie voor waterstof energieniveaus?"
        },
        options: [
          {
            en: "ΔE = -α⁴mc²(Z⁴/n⁴)[n/(j+½) - ¾], where α is fine structure constant",
            es: "ΔE = -α⁴mc²(Z⁴/n⁴)[n/(j+½) - ¾], donde α es la constante de estructura fina",
            de: "ΔE = -α⁴mc²(Z⁴/n⁴)[n/(j+½) - ¾], wobei α die Feinstrukturkonstante ist",
            nl: "ΔE = -α⁴mc²(Z⁴/n⁴)[n/(j+½) - ¾], waar α de fijnstructuurconstante is"
          },
          {
            en: "Relativistic effects are negligible in hydrogen atoms",
            es: "Los efectos relativistas son despreciables en átomos de hidrógeno",
            de: "Relativistische Effekte sind in Wasserstoffatomen vernachlässigbar",
            nl: "Relativistische effecten zijn verwaarloosbaar in waterstofatomen"
          },
          {
            en: "The correction is proportional to v/c where v is orbital velocity",
            es: "La corrección es proporcional a v/c donde v es velocidad orbital",
            de: "Die Korrektur ist proportional zu v/c, wobei v die Bahngeschwindigkeit ist",
            nl: "De correctie is evenredig met v/c waar v de baansnelheid is"
          },
          {
            en: "Relativistic corrections only affect the ground state",
            es: "Las correcciones relativistas solo afectan el estado fundamental",
            de: "Relativistische Korrekturen betreffen nur den Grundzustand",
            nl: "Relativistische correcties beïnvloeden alleen de grondtoestand"
          }
        ],
        correct: 0,
        explanation: {
          en: "The relativistic correction to hydrogen energy levels arises from the relativistic kinetic energy and Darwin term. The correction scales as α⁴ (fine structure constant to the fourth power) and depends on the total angular momentum quantum number j = l ± s. This correction lifts the degeneracy between states with the same n but different l values, explaining the fine structure splitting observed in hydrogen spectra. The correction is larger for states that spend more time near the nucleus (smaller l).",
          es: "La corrección relativista a los niveles de energía del hidrógeno surge de la energía cinética relativista y el término de Darwin. La corrección escala como α⁴ (constante de estructura fina a la cuarta potencia) y depende del número cuántico de momento angular total j = l ± s. Esta corrección elimina la degeneración entre estados con la misma n pero diferentes valores de l, explicando la división de estructura fina observada en espectros de hidrógeno. La corrección es mayor para estados que pasan más tiempo cerca del núcleo (l menor).",
          de: "Die relativistische Korrektur zu Wasserstoff-Energieniveaus entsteht aus der relativistischen kinetischen Energie und dem Darwin-Term. Die Korrektur skaliert als α⁴ (Feinstrukturkonstante zur vierten Potenz) und hängt von der Gesamtdrehimpuls-Quantenzahl j = l ± s ab. Diese Korrektur hebt die Entartung zwischen Zuständen mit gleichem n aber verschiedenen l-Werten auf und erklärt die Feinstrukturaufspaltung in Wasserstoffspektren. Die Korrektur ist größer für Zustände, die mehr Zeit nahe dem Kern verbringen (kleineres l).",
          nl: "De relativistische correctie voor waterstof energieniveaus ontstaat uit de relativistische kinetische energie en Darwin term. De correctie schaalt als α⁴ (fijnstructuurconstante tot de vierde macht) en hangt af van het totale hoekimpuls quantumgetal j = l ± s. Deze correctie heft de degeneratie op tussen toestanden met dezelfde n maar verschillende l waarden, wat de fijnstructuur splitsing verklaart die wordt waargenomen in waterstof spectra. De correctie is groter voor toestanden die meer tijd doorbrengen nabij de kern (kleinere l)."
        }
      },
      {
        question: {
          en: "What is the Darwin term in hydrogen atom physics?",
          es: "¿Qué es el término de Darwin en la física del átomo de hidrógeno?",
          de: "Was ist der Darwin-Term in der Wasserstoffatomphysik?",
          nl: "Wat is de Darwin term in waterstofatoom fysica?"
        },
        options: [
          {
            en: "A relativistic correction due to 'zitterbewegung' - rapid oscillatory motion of electron",
            es: "Una corrección relativista debido a 'zitterbewegung' - movimiento oscilatorio rápido del electrón",
            de: "Eine relativistische Korrektur aufgrund der 'Zitterbewegung' - schnelle oszillatorische Elektronenbewegung",
            nl: "Een relativistische correctie door 'zitterbewegung' - snelle oscillerende beweging van elektron"
          },
          {
            en: "The classical electromagnetic self-energy of the electron",
            es: "La autoenergía electromagnética clásica del electrón",
            de: "Die klassische elektromagnetische Selbstenergie des Elektrons",
            nl: "De klassieke elektromagnetische zelf-energie van het elektron"
          },
          {
            en: "The kinetic energy correction for high velocities",
            es: "La corrección de energía cinética para altas velocidades",
            de: "Die kinetische Energiekorrektur für hohe Geschwindigkeiten",
            nl: "De kinetische energie correctie voor hoge snelheden"
          },
          {
            en: "The magnetic interaction between electron and nucleus",
            es: "La interacción magnética entre electrón y núcleo",
            de: "Die magnetische Wechselwirkung zwischen Elektron und Kern",
            nl: "De magnetische interactie tussen elektron en kern"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Darwin term arises from the relativistic treatment of the electron and represents a correction due to the rapid oscillatory motion (zitterbewegung) that the electron undergoes according to Dirac theory. This term contributes to the fine structure and affects only s orbitals (l=0) because it's proportional to |ψ(0)|², the probability density at the nucleus. The Darwin term partially cancels the relativistic kinetic energy correction, leading to the observed fine structure pattern.",
          es: "El término de Darwin surge del tratamiento relativista del electrón y representa una corrección debido al movimiento oscilatorio rápido (zitterbewegung) que el electrón experimenta según la teoría de Dirac. Este término contribuye a la estructura fina y afecta solo a orbitales s (l=0) porque es proporcional a |ψ(0)|², la densidad de probabilidad en el núcleo. El término de Darwin cancela parcialmente la corrección de energía cinética relativista, llevando al patrón de estructura fina observado.",
          de: "Der Darwin-Term entsteht aus der relativistischen Behandlung des Elektrons und repräsentiert eine Korrektur aufgrund der schnellen oszillatorischen Bewegung (Zitterbewegung), die das Elektron laut Dirac-Theorie durchläuft. Dieser Term trägt zur Feinstruktur bei und betrifft nur s-Orbitale (l=0), weil er proportional zu |ψ(0)|² ist, der Wahrscheinlichkeitsdichte am Kern. Der Darwin-Term kompensiert teilweise die relativistische kinetische Energiekorrektur und führt zum beobachteten Feinstrukturmuster.",
          nl: "De Darwin term ontstaat uit de relativistische behandeling van het elektron en vertegenwoordigt een correctie door de snelle oscillerende beweging (zitterbewegung) die het elektron ondergaat volgens de Dirac theorie. Deze term draagt bij aan de fijnstructuur en beïnvloedt alleen s orbitalen (l=0) omdat het evenredig is met |ψ(0)|², de waarschijnlijkheidsdichtheid bij de kern. De Darwin term compenseert gedeeltelijk de relativistische kinetische energie correctie, wat leidt tot het waargenomen fijnstructuurpatroon."
        }
      },
      {
        question: {
          en: "What is the concept of 'hidden symmetry' in hydrogen atom?",
          es: "¿Qué es el concepto de 'simetría oculta' en el átomo de hidrógeno?",
          de: "Was ist das Konzept der 'verborgenen Symmetrie' im Wasserstoffatom?",
          nl: "Wat is het concept van 'verborgen symmetrie' in het waterstofatoom?"
        },
        options: [
          {
            en: "SO(4) symmetry beyond obvious SO(3) rotational symmetry, explaining n² degeneracy",
            es: "Simetría SO(4) más allá de la simetría rotacional SO(3) obvia, explicando degeneración n²",
            de: "SO(4)-Symmetrie jenseits der offensichtlichen SO(3)-Rotationssymmetrie, erklärt n²-Entartung",
            nl: "SO(4) symmetrie voorbij de voor de hand liggende SO(3) rotatiesymmetrie, verklaart n² degeneratie"
          },
          {
            en: "There are no hidden symmetries in hydrogen atom",
            es: "No hay simetrías ocultas en el átomo de hidrógeno",
            de: "Es gibt keine verborgenen Symmetrien im Wasserstoffatom",
            nl: "Er zijn geen verborgen symmetrieën in het waterstofatoom"
          },
          {
            en: "Hidden symmetry only appears in excited states",
            es: "La simetría oculta solo aparece en estados excitados",
            de: "Verborgene Symmetrie erscheint nur in angeregten Zuständen",
            nl: "Verborgen symmetrie verschijnt alleen in aangeslagen toestanden"
          },
          {
            en: "The symmetry is related to time reversal only",
            es: "La simetría está relacionada solo con inversión temporal",
            de: "Die Symmetrie ist nur mit Zeitumkehr verbunden",
            nl: "De symmetrie is alleen gerelateerd aan tijdomkering"
          }
        ],
        correct: 0,
        explanation: {
          en: "The hydrogen atom possesses a 'hidden' SO(4) symmetry beyond the obvious SO(3) rotational symmetry. This higher symmetry arises from the special properties of the Coulomb potential and explains the 'accidental' degeneracy where all states with the same n have the same energy regardless of l. The SO(4) group includes rotations in four-dimensional space and relates to the conservation of the Runge-Lenz vector, providing deeper insight into the hydrogen atom's structure.",
          es: "El átomo de hidrógeno posee una simetría SO(4) 'oculta' más allá de la simetría rotacional SO(3) obvia. Esta simetría superior surge de las propiedades especiales del potencial de Coulomb y explica la degeneración 'accidental' donde todos los estados con la misma n tienen la misma energía independientemente de l. El grupo SO(4) incluye rotaciones en espacio tetradimensional y se relaciona con la conservación del vector de Runge-Lenz, proporcionando perspectiva más profunda en la estructura del átomo de hidrógeno.",
          de: "Das Wasserstoffatom besitzt eine 'verborgene' SO(4)-Symmetrie jenseits der offensichtlichen SO(3)-Rotationssymmetrie. Diese höhere Symmetrie entsteht aus den speziellen Eigenschaften des Coulomb-Potentials und erklärt die 'zufällige' Entartung, wo alle Zustände mit gleichem n dieselbe Energie haben, unabhängig von l. Die SO(4)-Gruppe umfasst Rotationen im vierdimensionalen Raum und bezieht sich auf die Erhaltung des Runge-Lenz-Vektors, was tieferen Einblick in die Wasserstoffatomstruktur bietet.",
          nl: "Het waterstofatoom bezit een 'verborgen' SO(4) symmetrie voorbij de voor de hand liggende SO(3) rotatiesymmetrie. Deze hogere symmetrie ontstaat uit de speciale eigenschappen van het Coulomb potentiaal en verklaart de 'toevallige' degeneratie waar alle toestanden met dezelfde n dezelfde energie hebben ongeacht l. De SO(4) groep omvat rotaties in vierdimensionale ruimte en relateert aan het behoud van de Runge-Lenz vector, wat dieper inzicht biedt in de waterstofatoom structuur."
        }
      },
      {
        question: {
          en: "What is the Runge-Lenz vector in hydrogen atom dynamics?",
          es: "¿Qué es el vector de Runge-Lenz en la dinámica del átomo de hidrógeno?",
          de: "Was ist der Runge-Lenz-Vektor in der Wasserstoffatomdynamik?",
          nl: "Wat is de Runge-Lenz vector in waterstofatoom dynamica?"
        },
        options: [
          {
            en: "A = (p × L)/m - ke²r/r, a conserved vector pointing along major axis of classical orbit",
            es: "A = (p × L)/m - ke²r/r, un vector conservado que apunta a lo largo del eje mayor de la órbita clásica",
            de: "A = (p × L)/m - ke²r/r, ein erhaltener Vektor entlang der Hauptachse der klassischen Bahn",
            nl: "A = (p × L)/m - ke²r/r, een behouden vector die wijst langs de hoofdas van de klassieke baan"
          },
          {
            en: "The angular momentum vector of the hydrogen electron",
            es: "El vector de momento angular del electrón de hidrógeno",
            de: "Der Drehimpulsvektor des Wasserstoffelektrons",
            nl: "De hoekimpulsvector van het waterstof elektron"
          },
          {
            en: "The position vector from nucleus to electron",
            es: "El vector de posición desde núcleo hasta electrón",
            de: "Der Positionsvektor vom Kern zum Elektron",
            nl: "De positievector van kern naar elektron"
          },
          {
            en: "A vector that changes rapidly with time",
            es: "Un vector que cambia rápidamente con el tiempo",
            de: "Ein Vektor, der sich schnell mit der Zeit ändert",
            nl: "Een vector die snel verandert met de tijd"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Runge-Lenz vector A = (p × L)/m - ke²r/r is a conserved quantity in classical Kepler problems and hydrogen atoms, pointing from the nucleus toward the perihelion of the classical elliptical orbit. In quantum mechanics, it becomes an operator that, together with angular momentum, generates the SO(4) symmetry group. This conservation law explains why all hydrogen states with the same n are degenerate and provides the quantum mechanical basis for Kepler's laws.",
          es: "El vector de Runge-Lenz A = (p × L)/m - ke²r/r es una cantidad conservada en problemas clásicos de Kepler y átomos de hidrógeno, apuntando desde el núcleo hacia el perihelio de la órbita elíptica clásica. En mecánica cuántica, se convierte en un operador que, junto con el momento angular, genera el grupo de simetría SO(4). Esta ley de conservación explica por qué todos los estados de hidrógeno con la misma n son degenerados y proporciona la base cuántico-mecánica para las leyes de Kepler.",
          de: "Der Runge-Lenz-Vektor A = (p × L)/m - ke²r/r ist eine erhaltene Größe in klassischen Kepler-Problemen und Wasserstoffatomen, die vom Kern zum Perihel der klassischen elliptischen Bahn zeigt. In der Quantenmechanik wird er zu einem Operator, der zusammen mit dem Drehimpuls die SO(4)-Symmetriegruppe erzeugt. Dieses Erhaltungsgesetz erklärt, warum alle Wasserstoffzustände mit gleichem n entartet sind und liefert die quantenmechanische Grundlage für Keplers Gesetze.",
          nl: "De Runge-Lenz vector A = (p × L)/m - ke²r/r is een behouden grootheid in klassieke Kepler problemen en waterstofatomen, wijzend van de kern naar het perihelium van de klassieke elliptische baan. In quantummechanica wordt het een operator die, samen met hoekimpuls, de SO(4) symmetriegroep genereert. Deze behoudswet verklaart waarom alle waterstof toestanden met dezelfde n gedegenereerd zijn en geeft de quantummechanische basis voor Keplers wetten."
        }
      },
      {
        question: {
          en: "What is the semiclassical approximation (WKB) applied to hydrogen?",
          es: "¿Qué es la aproximación semiclásica (WKB) aplicada al hidrógeno?",
          de: "Was ist die semiklassische Näherung (WKB) angewandt auf Wasserstoff?",
          nl: "Wat is de semi-klassieke benadering (WKB) toegepast op waterstof?"
        },
        options: [
          {
            en: "ψ(r) ≈ A exp[i∫p(r)dr/ℏ], connecting quantum and classical descriptions",
            es: "ψ(r) ≈ A exp[i∫p(r)dr/ℏ], conectando descripciones cuánticas y clásicas",
            de: "ψ(r) ≈ A exp[i∫p(r)dr/ℏ], verbindet Quanten- und klassische Beschreibungen",
            nl: "ψ(r) ≈ A exp[i∫p(r)dr/ℏ], verbindt quantum en klassieke beschrijvingen"
          },
          {
            en: "WKB approximation cannot be applied to bound states",
            es: "La aproximación WKB no puede aplicarse a estados ligados",
            de: "WKB-Näherung kann nicht auf gebundene Zustände angewandt werden",
            nl: "WKB benadering kan niet worden toegepast op gebonden toestanden"
          },
          {
            en: "The method only works for high energy scattering states",
            es: "El método solo funciona para estados de dispersión de alta energía",
            de: "Die Methode funktioniert nur für hochenergetische Streuzustände",
            nl: "De methode werkt alleen voor hoge energie verstrooiingstoestanden"
          },
          {
            en: "WKB gives exact results for all hydrogen states",
            es: "WKB da resultados exactos para todos los estados de hidrógeno",
            de: "WKB gibt exakte Ergebnisse für alle Wasserstoffzustände",
            nl: "WKB geeft exacte resultaten voor alle waterstoftoestanden"
          }
        ],
        correct: 0,
        explanation: {
          en: "The WKB (Wentzel-Kramers-Brillouin) semiclassical approximation treats the wave function as ψ(r) ≈ A exp[i∫p(r)dr/ℏ], where p(r) is the classical momentum. For hydrogen, this approach provides insight into the quantum-classical correspondence and can derive approximate energy levels. The method works well for highly excited states (large n) where quantum effects are less pronounced, bridging the gap between quantum mechanics and classical orbital mechanics.",
          es: "La aproximación semiclásica WKB (Wentzel-Kramers-Brillouin) trata la función de onda como ψ(r) ≈ A exp[i∫p(r)dr/ℏ], donde p(r) es el momento clásico. Para el hidrógeno, este enfoque proporciona perspectiva en la correspondencia cuántico-clásica y puede derivar niveles de energía aproximados. El método funciona bien para estados altamente excitados (n grande) donde los efectos cuánticos son menos pronunciados, cerrando la brecha entre mecánica cuántica y mecánica orbital clásica.",
          de: "Die WKB (Wentzel-Kramers-Brillouin) semiklassische Näherung behandelt die Wellenfunktion als ψ(r) ≈ A exp[i∫p(r)dr/ℏ], wobei p(r) der klassische Impuls ist. Für Wasserstoff bietet dieser Ansatz Einblick in die Quanten-klassische Korrespondenz und kann näherungsweise Energieniveaus ableiten. Die Methode funktioniert gut für hoch angeregte Zustände (großes n), wo Quanteneffekte weniger ausgeprägt sind, und überbrückt die Lücke zwischen Quantenmechanik und klassischer Bahnmechanik.",
          nl: "De WKB (Wentzel-Kramers-Brillouin) semi-klassieke benadering behandelt de golffunctie als ψ(r) ≈ A exp[i∫p(r)dr/ℏ], waar p(r) het klassieke momentum is. Voor waterstof biedt deze aanpak inzicht in de quantum-klassieke correspondentie en kan benaderende energieniveaus afleiden. De methode werkt goed voor hoogopgewonden toestanden (grote n) waar quantumeffecten minder uitgesproken zijn, wat de kloof overbrugt tussen quantummechanica en klassieke baanmechanica."
        }
      },
      {
        question: {
          en: "What is the hydrogen atom in momentum space representation?",
          es: "¿Qué es el átomo de hidrógeno en representación del espacio de momento?",
          de: "Was ist das Wasserstoffatom in Impulsraumdarstellung?",
          nl: "Wat is het waterstofatoom in momentum ruimte representatie?"
        },
        options: [
          {
            en: "φ(p) = ℱ[ψ(r)], revealing complementary structure with characteristic p⁻⁴ decay",
            es: "φ(p) = ℱ[ψ(r)], revelando estructura complementaria con decaimiento característico p⁻⁴",
            de: "φ(p) = ℱ[ψ(r)], offenbart komplementäre Struktur mit charakteristischem p⁻⁴-Zerfall",
            nl: "φ(p) = ℱ[ψ(r)], onthult complementaire structuur met karakteristiek p⁻⁴ verval"
          },
          {
            en: "Momentum space representation is identical to position space",
            es: "La representación del espacio de momento es idéntica al espacio de posición",
            de: "Impulsraumdarstellung ist identisch mit Ortsraum",
            nl: "Momentum ruimte representatie is identiek aan positie ruimte"
          },
          {
            en: "Hydrogen wave functions have no momentum space representation",
            es: "Las funciones de onda de hidrógeno no tienen representación en espacio de momento",
            de: "Wasserstoff-Wellenfunktionen haben keine Impulsraumdarstellung",
            nl: "Waterstof golffuncties hebben geen momentum ruimte representatie"
          },
          {
            en: "The momentum distribution is always Gaussian for all hydrogen states",
            es: "La distribución de momento es siempre gaussiana para todos los estados de hidrógeno",
            de: "Die Impulsverteilung ist immer gaussförmig für alle Wasserstoffzustände",
            nl: "De momentumverdeling is altijd Gaussiaans voor alle waterstoftoestanden"
          }
        ],
        correct: 0,
        explanation: {
          en: "The momentum space wave function φ(p) is the Fourier transform of the position wave function ψ(r). For hydrogen, these momentum space wave functions reveal complementary information about the electron's momentum distribution. The ground state, for example, has a characteristic p⁻⁴ tail in momentum space, reflecting the long-range nature of the Coulomb potential. This dual representation provides complete quantum mechanical information and illustrates the position-momentum uncertainty relation.",
          es: "La función de onda del espacio de momento φ(p) es la transformada de Fourier de la función de onda de posición ψ(r). Para el hidrógeno, estas funciones de onda del espacio de momento revelan información complementaria sobre la distribución de momento del electrón. El estado fundamental, por ejemplo, tiene una cola característica p⁻⁴ en el espacio de momento, reflejando la naturaleza de largo alcance del potencial de Coulomb. Esta representación dual proporciona información cuántico-mecánica completa e ilustra la relación de incertidumbre posición-momento.",
          de: "Die Impulsraum-Wellenfunktion φ(p) ist die Fourier-Transformation der Orts-Wellenfunktion ψ(r). Für Wasserstoff offenbaren diese Impulsraum-Wellenfunktionen komplementäre Informationen über die Impulsverteilung des Elektrons. Der Grundzustand hat beispielsweise einen charakteristischen p⁻⁴-Schwanz im Impulsraum, der die langreichweitige Natur des Coulomb-Potentials widerspiegelt. Diese duale Darstellung liefert vollständige quantenmechanische Information und illustriert die Orts-Impuls-Unschärferelation.",
          nl: "De momentum ruimte golffunctie φ(p) is de Fourier transformatie van de positie golffunctie ψ(r). Voor waterstof onthullen deze momentum ruimte golffuncties complementaire informatie over de momentum distributie van het elektron. De grondtoestand heeft bijvoorbeeld een karakteristieke p⁻⁴ staart in momentum ruimte, wat de lange-afstands natuur van het Coulomb potentiaal weergeeft. Deze duale representatie biedt volledige quantummechanische informatie en illustreert de positie-momentum onzekerheidsrelatie."
        }
      },
      {
        question: {
          en: "What are the scaling properties of hydrogen wave functions?",
          es: "¿Cuáles son las propiedades de escalamiento de las funciones de onda de hidrógeno?",
          de: "Was sind die Skalierungseigenschaften der Wasserstoff-Wellenfunktionen?",
          nl: "Wat zijn de schaalei genschappen van waterstof golffuncties?"
        },
        options: [
          {
            en: "ψₙₗₘ(r) = (Z/a₀)³/² fₙₗ(Zr/a₀) Yₗᵐ(θ,φ), scaling with nuclear charge Z",
            es: "ψₙₗₘ(r) = (Z/a₀)³/² fₙₗ(Zr/a₀) Yₗᵐ(θ,φ), escalando con carga nuclear Z",
            de: "ψₙₗₘ(r) = (Z/a₀)³/² fₙₗ(Zr/a₀) Yₗᵐ(θ,φ), skaliert mit Kernladung Z",
            nl: "ψₙₗₘ(r) = (Z/a₀)³/² fₙₗ(Zr/a₀) Yₗᵐ(θ,φ), schaalt met kernlading Z"
          },
          {
            en: "Wave functions do not scale with any physical parameters",
            es: "Las funciones de onda no escalan con ningún parámetro físico",
            de: "Wellenfunktionen skalieren nicht mit physikalischen Parametern",
            nl: "Golffuncties schalen niet met fysieke parameters"
          },
          {
            en: "Scaling only affects the energy levels, not wave functions",
            es: "El escalamiento solo afecta los niveles de energía, no las funciones de onda",
            de: "Skalierung betrifft nur Energieniveaus, nicht Wellenfunktionen",
            nl: "Schaling beïnvloedt alleen energieniveaus, niet golffuncties"
          },
          {
            en: "All hydrogen-like atoms have identical wave functions",
            es: "Todos los átomos similares al hidrógeno tienen funciones de onda idénticas",
            de: "Alle wasserstoffähnlichen Atome haben identische Wellenfunktionen",
            nl: "Alle waterstof-achtige atomen hebben identieke golffuncties"
          }
        ],
        correct: 0,
        explanation: {
          en: "Hydrogen wave functions exhibit simple scaling properties with nuclear charge Z. The radial coordinate scales as Zr/a₀, making orbitals smaller for higher Z, while the overall normalization scales as (Z/a₀)³/². This scaling reflects the Z-dependence of the Coulomb potential and explains why hydrogen-like ions have the same orbital shapes but different sizes. The scaling laws are fundamental to understanding periodic trends in atomic properties.",
          es: "Las funciones de onda de hidrógeno exhiben propiedades simples de escalamiento con la carga nuclear Z. La coordenada radial escala como Zr/a₀, haciendo orbitales más pequeños para Z mayor, mientras que la normalización general escala como (Z/a₀)³/². Este escalamiento refleja la dependencia en Z del potencial de Coulomb y explica por qué los iones similares al hidrógeno tienen las mismas formas orbitales pero diferentes tamaños. Las leyes de escalamiento son fundamentales para entender tendencias periódicas en propiedades atómicas.",
          de: "Wasserstoff-Wellenfunktionen zeigen einfache Skalierungseigenschaften mit der Kernladung Z. Die Radialkoordinate skaliert als Zr/a₀, wodurch Orbitale für höheres Z kleiner werden, während die Gesamtnormierung als (Z/a₀)³/² skaliert. Diese Skalierung spiegelt die Z-Abhängigkeit des Coulomb-Potentials wider und erklärt, warum wasserstoffähnliche Ionen dieselben Orbitalformen aber verschiedene Größen haben. Die Skalierungsgesetze sind fundamental für das Verständnis periodischer Trends in Atomeigenschaften.",
          nl: "Waterstof golffuncties vertonen eenvoudige schaaleigenschappen met kernlading Z. De radiale coördinaat schaalt als Zr/a₀, wat orbitalen kleiner maakt voor hogere Z, terwijl de algemene normalisatie schaalt als (Z/a₀)³/². Deze schaling reflecteert de Z-afhankelijkheid van het Coulomb potentiaal en verklaart waarom waterstof-achtige ionen dezelfde orbitaalvormen maar verschillende groottes hebben. De schaalwetten zijn fundamenteel voor het begrijpen van periodieke trends in atomaire eigenschappen."
        }
      },
      {
        question: {
          en: "What is the physical significance of the Bohr radius a₀?",
          es: "¿Cuál es el significado físico del radio de Bohr a₀?",
          de: "Was ist die physikalische Bedeutung des Bohr-Radius a₀?",
          nl: "Wat is de fysieke betekenis van de Bohr-straal a₀?"
        },
        options: [
          {
            en: "The most probable distance of the electron from the nucleus in the 1s orbital",
            es: "La distancia más probable del electrón desde el núcleo en el orbital 1s",
            de: "Der wahrscheinlichste Abstand des Elektrons vom Kern im 1s-Orbital",
            nl: "De meest waarschijnlijke afstand van het elektron tot de kern in het 1s orbitaal"
          },
          {
            en: "The maximum distance an electron can be from the nucleus",
            es: "La distancia máxima que un electrón puede estar del núcleo",
            de: "Der maximale Abstand, den ein Elektron vom Kern haben kann",
            nl: "De maximale afstand die een elektron van de kern kan hebben"
          },
          {
            en: "The radius of the nucleus",
            es: "El radio del núcleo",
            de: "Der Radius des Kerns",
            nl: "De straal van de kern"
          },
          {
            en: "The classical orbital radius in Bohr's model",
            es: "El radio orbital clásico en el modelo de Bohr",
            de: "Der klassische Orbitalradius in Bohrs Modell",
            nl: "De klassieke orbitaalstraal in Bohr's model"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Bohr radius a₀ ≈ 0.529 Å represents the most probable distance of the electron from the nucleus in the hydrogen 1s ground state orbital. It's the distance where the radial probability density |R₁₀(r)|²r² is maximum. This fundamental atomic unit of length appears throughout atomic physics and quantum chemistry calculations.",
          es: "El radio de Bohr a₀ ≈ 0.529 Å representa la distancia más probable del electrón desde el núcleo en el orbital fundamental 1s del hidrógeno. Es la distancia donde la densidad de probabilidad radial |R₁₀(r)|²r² es máxima. Esta unidad fundamental atómica de longitud aparece en todos los cálculos de física atómica y química cuántica.",
          de: "Der Bohr-Radius a₀ ≈ 0,529 Å repräsentiert den wahrscheinlichsten Abstand des Elektrons vom Kern im Wasserstoff-1s-Grundzustandsorbital. Es ist der Abstand, wo die radiale Wahrscheinlichkeitsdichte |R₁₀(r)|²r² maximal ist. Diese fundamentale atomare Längeneinheit erscheint in allen Berechnungen der Atomphysik und Quantenchemie.",
          nl: "De Bohr-straal a₀ ≈ 0,529 Å vertegenwoordigt de meest waarschijnlijke afstand van het elektron tot de kern in het waterstof 1s grondtoestand orbitaal. Het is de afstand waar de radiale waarschijnlijkheidsdichtheid |R₁₀(r)|²r² maximaal is. Deze fundamentele atomaire lengte-eenheid verschijnt in alle berekeningen van atoomfysica en quantumchemie."
        }
      },
      {
        question: {
          en: "What happens to hydrogen energy levels in the presence of a magnetic field?",
          es: "¿Qué pasa con los niveles de energía del hidrógeno en presencia de un campo magnético?",
          de: "Was passiert mit den Wasserstoff-Energieniveaus in Anwesenheit eines Magnetfeldes?",
          nl: "Wat gebeurt er met waterstof energieniveaus in aanwezigheid van een magnetisch veld?"
        },
        options: [
          {
            en: "Zeeman effect: degenerate levels split based on magnetic quantum number mₗ",
            es: "Efecto Zeeman: niveles degenerados se dividen según el número cuántico magnético mₗ",
            de: "Zeeman-Effekt: entartete Niveaus spalten basierend auf der magnetischen Quantenzahl mₗ auf",
            nl: "Zeeman-effect: gedegenereerde niveaus splitsen gebaseerd op magnetisch quantumgetal mₗ"
          },
          {
            en: "Energy levels remain unchanged",
            es: "Los niveles de energía permanecen sin cambios",
            de: "Energieniveaus bleiben unverändert",
            nl: "Energieniveaus blijven onveranderd"
          },
          {
            en: "All energy levels shift by the same amount",
            es: "Todos los niveles de energía se desplazan por la misma cantidad",
            de: "Alle Energieniveaus verschieben sich um den gleichen Betrag",
            nl: "Alle energieniveaus verschuiven met dezelfde hoeveelheid"
          },
          {
            en: "Energy levels double in number",
            es: "Los niveles de energía se duplican en número",
            de: "Energieniveaus verdoppeln sich in der Anzahl",
            nl: "Energieniveaus verdubbelen in aantal"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Zeeman effect describes the splitting of atomic energy levels in magnetic fields. For hydrogen, degenerate orbitals with the same n and l but different mₗ values split into separate energy levels. The energy shift is ΔE = μ_B g mₗ B, where μ_B is the Bohr magneton, g is the Landé g-factor, and B is the magnetic field strength.",
          es: "El efecto Zeeman describe la división de niveles de energía atómica en campos magnéticos. Para el hidrógeno, orbitales degenerados con el mismo n y l pero diferentes valores de mₗ se dividen en niveles de energía separados. El cambio de energía es ΔE = μ_B g mₗ B, donde μ_B es el magnetón de Bohr, g es el factor g de Landé, y B es la intensidad del campo magnético.",
          de: "Der Zeeman-Effekt beschreibt die Aufspaltung atomarer Energieniveaus in Magnetfeldern. Für Wasserstoff spalten entartete Orbitale mit gleichem n und l aber verschiedenen mₗ-Werten in separate Energieniveaus auf. Die Energieverschiebung ist ΔE = μ_B g mₗ B, wobei μ_B das Bohr-Magneton, g der Landé-g-Faktor und B die Magnetfeldstärke ist.",
          nl: "Het Zeeman-effect beschrijft de splitsing van atomaire energieniveaus in magnetische velden. Voor waterstof splitsen gedegenereerde orbitalen met dezelfde n en l maar verschillende mₗ waarden in afzonderlijke energieniveaus. De energieverschuiving is ΔE = μ_B g mₗ B, waar μ_B het Bohr magneton is, g de Landé g-factor, en B de magnetische veldsterkte."
        }
      },
      {
        question: {
          en: "What is the selection rule for electric dipole transitions in hydrogen?",
          es: "¿Cuál es la regla de selección para transiciones de dipolo eléctrico en hidrógeno?",
          de: "Was ist die Auswahlregel für elektrische Dipolübergänge in Wasserstoff?",
          nl: "Wat is de selectieregel voor elektrische dipool overgangen in waterstof?"
        },
        options: [
          {
            en: "Δl = ±1, Δmₗ = 0, ±1, and Δn can be any integer",
            es: "Δl = ±1, Δmₗ = 0, ±1, y Δn puede ser cualquier entero",
            de: "Δl = ±1, Δmₗ = 0, ±1, und Δn kann jede ganze Zahl sein",
            nl: "Δl = ±1, Δmₗ = 0, ±1, en Δn kan elk geheel getal zijn"
          },
          {
            en: "Δl = 0, Δmₗ = 0, Δn = ±1 only",
            es: "Δl = 0, Δmₗ = 0, Δn = ±1 solamente",
            de: "Δl = 0, Δmₗ = 0, Δn = ±1 nur",
            nl: "Δl = 0, Δmₗ = 0, Δn = ±1 alleen"
          },
          {
            en: "Any transitions are allowed",
            es: "Cualquier transición está permitida",
            de: "Alle Übergänge sind erlaubt",
            nl: "Alle overgangen zijn toegestaan"
          },
          {
            en: "Δl = ±2, Δmₗ = ±2, Δn = ±2",
            es: "Δl = ±2, Δmₗ = ±2, Δn = ±2",
            de: "Δl = ±2, Δmₗ = ±2, Δn = ±2",
            nl: "Δl = ±2, Δmₗ = ±2, Δn = ±2"
          }
        ],
        correct: 0,
        explanation: {
          en: "Electric dipole selection rules for hydrogen transitions require Δl = ±1 (orbital angular momentum must change by one unit), Δmₗ = 0, ±1 (magnetic quantum number can change by 0 or ±1), while Δn can be any integer. These rules arise from conservation of angular momentum when a photon (spin-1 particle) is absorbed or emitted.",
          es: "Las reglas de selección de dipolo eléctrico para transiciones de hidrógeno requieren Δl = ±1 (el momento angular orbital debe cambiar en una unidad), Δmₗ = 0, ±1 (el número cuántico magnético puede cambiar en 0 o ±1), mientras que Δn puede ser cualquier entero. Estas reglas surgen de la conservación del momento angular cuando se absorbe o emite un fotón (partícula de espín-1).",
          de: "Elektrische Dipol-Auswahlregeln für Wasserstoffübergänge erfordern Δl = ±1 (Bahndrehimpuls muss sich um eine Einheit ändern), Δmₗ = 0, ±1 (magnetische Quantenzahl kann sich um 0 oder ±1 ändern), während Δn jede ganze Zahl sein kann. Diese Regeln entstehen aus der Drehimpulserhaltung, wenn ein Photon (Spin-1-Teilchen) absorbiert oder emittiert wird.",
          nl: "Elektrische dipool selectieregels voor waterstof overgangen vereisen Δl = ±1 (orbitaal hoekimpuls moet met één eenheid veranderen), Δmₗ = 0, ±1 (magnetisch quantumgetal kan met 0 of ±1 veranderen), terwijl Δn elk geheel getal kan zijn. Deze regels ontstaan uit behoud van hoekimpuls wanneer een foton (spin-1 deeltje) wordt geabsorbeerd of uitgezonden."
        }
      },
      {
        question: {
          en: "What is the ground state binding energy of hydrogen?",
          es: "¿Cuál es la energía de enlace del estado fundamental del hidrógeno?",
          de: "Was ist die Grundzustandsbindungsenergie von Wasserstoff?",
          nl: "Wat is de grondtoestand bindingsenergie van waterstof?"
        },
        options: [
          {
            en: "13.6 eV (energy required to ionize from n=1 state)",
            es: "13.6 eV (energía requerida para ionizar desde el estado n=1)",
            de: "13.6 eV (Energie erforderlich zur Ionisation aus dem n=1-Zustand)",
            nl: "13.6 eV (energie nodig om te ioniseren vanuit n=1 toestand)"
          },
          {
            en: "27.2 eV",
            es: "27.2 eV",
            de: "27.2 eV",
            nl: "27.2 eV"
          },
          {
            en: "6.8 eV",
            es: "6.8 eV",
            de: "6.8 eV",
            nl: "6.8 eV"
          },
          {
            en: "1.51 eV",
            es: "1.51 eV",
            de: "1.51 eV",
            nl: "1.51 eV"
          }
        ],
        correct: 0,
        explanation: {
          en: "The ground state binding energy of hydrogen is 13.6 eV, which is the energy required to completely remove the electron from the n=1 state (ionization). This corresponds to the magnitude of the ground state energy |E₁| = |-13.6 eV| = 13.6 eV. This value is fundamental in atomic physics and represents one Rydberg unit of energy.",
          es: "La energía de enlace del estado fundamental del hidrógeno es 13.6 eV, que es la energía requerida para remover completamente el electrón del estado n=1 (ionización). Esto corresponde a la magnitud de la energía del estado fundamental |E₁| = |-13.6 eV| = 13.6 eV. Este valor es fundamental en física atómica y representa una unidad Rydberg de energía.",
          de: "Die Grundzustandsbindungsenergie von Wasserstoff ist 13,6 eV, was die Energie ist, die erforderlich ist, um das Elektron vollständig aus dem n=1-Zustand zu entfernen (Ionisation). Dies entspricht der Größe der Grundzustandsenergie |E₁| = |-13,6 eV| = 13,6 eV. Dieser Wert ist fundamental in der Atomphysik und repräsentiert eine Rydberg-Energieeinheit.",
          nl: "De grondtoestand bindingsenergie van waterstof is 13,6 eV, wat de energie is die nodig is om het elektron volledig te verwijderen uit de n=1 toestand (ionisatie). Dit komt overeen met de grootte van de grondtoestand energie |E₁| = |-13,6 eV| = 13,6 eV. Deze waarde is fundamenteel in de atoomfysica en vertegenwoordigt één Rydberg energie-eenheid."
        }
      },
      {
        question: {
          en: "How does the radial wave function R_{nl}(r) behave near the nucleus?",
          es: "¿Cómo se comporta la función de onda radial R_{nl}(r) cerca del núcleo?",
          de: "Wie verhält sich die radiale Wellenfunktion R_{nl}(r) in der Nähe des Kerns?",
          nl: "Hoe gedraagt de radiale golffunctie R_{nl}(r) zich nabij de kern?"
        },
        options: [
          {
            en: "R_{nl}(r) ∝ r^l for small r (depends on orbital angular momentum)",
            es: "R_{nl}(r) ∝ r^l para r pequeña (depende del momento angular orbital)",
            de: "R_{nl}(r) ∝ r^l für kleine r (abhängig vom Bahndrehimpuls)",
            nl: "R_{nl}(r) ∝ r^l voor kleine r (afhankelijk van orbitaal hoekimpuls)"
          },
          {
            en: "R_{nl}(r) = constant for all orbitals",
            es: "R_{nl}(r) = constante para todos los orbitales",
            de: "R_{nl}(r) = konstant für alle Orbitale",
            nl: "R_{nl}(r) = constant voor alle orbitalen"
          },
          {
            en: "R_{nl}(r) → ∞ as r → 0",
            es: "R_{nl}(r) → ∞ cuando r → 0",
            de: "R_{nl}(r) → ∞ wenn r → 0",
            nl: "R_{nl}(r) → ∞ als r → 0"
          },
          {
            en: "R_{nl}(r) = 0 exactly at r = 0",
            es: "R_{nl}(r) = 0 exactamente en r = 0",
            de: "R_{nl}(r) = 0 genau bei r = 0",
            nl: "R_{nl}(r) = 0 precies bij r = 0"
          }
        ],
        correct: 0,
        explanation: {
          en: "Near the nucleus (small r), the radial wave function behaves as R_{nl}(r) ∝ r^l. For s orbitals (l=0), the wave function is finite at r=0. For p orbitals (l=1), it goes as r, for d orbitals (l=2) as r², etc. This behavior arises from the centrifugal barrier term l(l+1)/r² in the radial Schrödinger equation, which prevents higher angular momentum electrons from getting too close to the nucleus.",
          es: "Cerca del núcleo (r pequeña), la función de onda radial se comporta como R_{nl}(r) ∝ r^l. Para orbitales s (l=0), la función de onda es finita en r=0. Para orbitales p (l=1), va como r, para orbitales d (l=2) como r², etc. Este comportamiento surge del término de barrera centrífuga l(l+1)/r² en la ecuación de Schrödinger radial, que impide que electrones con mayor momento angular se acerquen demasiado al núcleo.",
          de: "In der Nähe des Kerns (kleine r) verhält sich die radiale Wellenfunktion als R_{nl}(r) ∝ r^l. Für s-Orbitale (l=0) ist die Wellenfunktion bei r=0 endlich. Für p-Orbitale (l=1) geht sie wie r, für d-Orbitale (l=2) wie r², usw. Dieses Verhalten entsteht durch den Zentrifugalbarriere-Term l(l+1)/r² in der radialen Schrödinger-Gleichung, der verhindert, dass Elektronen mit höherem Drehimpuls zu nahe an den Kern kommen.",
          nl: "Nabij de kern (kleine r) gedraagt de radiale golffunctie zich als R_{nl}(r) ∝ r^l. Voor s orbitalen (l=0) is de golffunctie eindig bij r=0. Voor p orbitalen (l=1) gaat het als r, voor d orbitalen (l=2) als r², etc. Dit gedrag ontstaat door de centrifugale barrière term l(l+1)/r² in de radiale Schrödinger vergelijking, wat voorkomt dat elektronen met hoger hoekimpuls te dicht bij de kern komen."
        }
      },
      {
        question: {
          en: "What is the physical meaning of the quantum number l?",
          es: "¿Cuál es el significado físico del número cuántico l?",
          de: "Was ist die physikalische Bedeutung der Quantenzahl l?",
          nl: "Wat is de fysieke betekenis van het quantumgetal l?"
        },
        options: [
          {
            en: "Orbital angular momentum magnitude: |L| = ℏ√[l(l+1)]",
            es: "Magnitud del momento angular orbital: |L| = ℏ√[l(l+1)]",
            de: "Betrag des Bahndrehimpulses: |L| = ℏ√[l(l+1)]",
            nl: "Grootte van orbitaal hoekimpuls: |L| = ℏ√[l(l+1)]"
          },
          {
            en: "Energy of the orbital",
            es: "Energía del orbital",
            de: "Energie des Orbitals",
            nl: "Energie van het orbitaal"
          },
          {
            en: "Number of nodes in the wave function",
            es: "Número de nodos en la función de onda",
            de: "Anzahl der Knoten in der Wellenfunktion",
            nl: "Aantal knopen in de golffunctie"
          },
          {
            en: "Distance from the nucleus",
            es: "Distancia desde el núcleo",
            de: "Entfernung vom Kern",
            nl: "Afstand tot de kern"
          }
        ],
        correct: 0,
        explanation: {
          en: "The azimuthal quantum number l determines the magnitude of orbital angular momentum: |L| = ℏ√[l(l+1)]. It can take values l = 0, 1, 2, ..., n-1, corresponding to s, p, d, f, ... orbitals respectively. This quantum number arises from the angular part of the Schrödinger equation and determines the orbital shape and angular momentum properties.",
          es: "El número cuántico azimutal l determina la magnitud del momento angular orbital: |L| = ℏ√[l(l+1)]. Puede tomar valores l = 0, 1, 2, ..., n-1, correspondiendo a orbitales s, p, d, f, ... respectivamente. Este número cuántico surge de la parte angular de la ecuación de Schrödinger y determina la forma orbital y las propiedades del momento angular.",
          de: "Die azimutale Quantenzahl l bestimmt den Betrag des Bahndrehimpulses: |L| = ℏ√[l(l+1)]. Sie kann Werte l = 0, 1, 2, ..., n-1 annehmen, entsprechend s-, p-, d-, f-, ... Orbitalen. Diese Quantenzahl entsteht aus dem Winkelteil der Schrödinger-Gleichung und bestimmt die Orbitalform und Drehimpulseigenschaften.",
          nl: "Het azimuthale quantumgetal l bepaalt de grootte van orbitaal hoekimpuls: |L| = ℏ√[l(l+1)]. Het kan waarden l = 0, 1, 2, ..., n-1 aannemen, overeenkomend met s, p, d, f, ... orbitalen respectievelijk. Dit quantumgetal ontstaat uit het hoekdeel van de Schrödinger vergelijking en bepaalt de orbitaalvorm en hoekimpulseigenschappen."
        }
      },
      {
        question: {
          en: "What causes the fine structure in hydrogen spectra?",
          es: "¿Qué causa la estructura fina en los espectros de hidrógeno?",
          de: "Was verursacht die Feinstruktur in Wasserstoffspektren?",
          nl: "Wat veroorzaakt de fijne structuur in waterstofspectra?"
        },
        options: [
          {
            en: "Spin-orbit coupling and relativistic corrections",
            es: "Acoplamiento espín-órbita y correcciones relativistas",
            de: "Spin-Bahn-Kopplung und relativistische Korrekturen",
            nl: "Spin-baan koppeling en relativistische correcties"
          },
          {
            en: "Nuclear size effects only",
            es: "Solo efectos del tamaño nuclear",
            de: "Nur Kerngrößeneffekte",
            nl: "Alleen kerngrootte effecten"
          },
          {
            en: "Magnetic field interactions",
            es: "Interacciones de campo magnético",
            de: "Magnetfeldwechselwirkungen",
            nl: "Magnetische veld interacties"
          },
          {
            en: "Temperature broadening",
            es: "Ensanchamiento por temperatura",
            de: "Temperaturverbreiterung",
            nl: "Temperatuur verbreding"
          }
        ],
        correct: 0,
        explanation: {
          en: "Fine structure in hydrogen spectra arises from relativistic corrections and spin-orbit coupling. The relativistic kinetic energy correction and Darwin term lift the degeneracy between states with the same n but different l values. Spin-orbit coupling further splits levels with j = l ± 1/2, where j is the total angular momentum quantum number. These effects are proportional to α⁴ (fine structure constant to the fourth power).",
          es: "La estructura fina en los espectros de hidrógeno surge de correcciones relativistas y acoplamiento espín-órbita. La corrección de energía cinética relativista y el término de Darwin levantan la degeneración entre estados con el mismo n pero diferentes valores de l. El acoplamiento espín-órbita además divide niveles con j = l ± 1/2, donde j es el número cuántico de momento angular total. Estos efectos son proporcionales a α⁴ (constante de estructura fina a la cuarta potencia).",
          de: "Feinstruktur in Wasserstoffspektren entsteht durch relativistische Korrekturen und Spin-Bahn-Kopplung. Die relativistische kinetische Energiekorrektur und der Darwin-Term heben die Entartung zwischen Zuständen mit gleichem n aber verschiedenen l-Werten auf. Spin-Bahn-Kopplung spaltet zusätzlich Niveaus mit j = l ± 1/2 auf, wobei j die Quantenzahl des Gesamtdrehimpulses ist. Diese Effekte sind proportional zu α⁴ (Feinstrukturkonstante zur vierten Potenz).",
          nl: "Fijne structuur in waterstofspectra ontstaat door relativistische correcties en spin-baan koppeling. De relativistische kinetische energie correctie en Darwin term heffen de degeneratie op tussen toestanden met dezelfde n maar verschillende l waarden. Spin-baan koppeling splitst verder niveaus met j = l ± 1/2, waar j het totale hoekimpuls quantumgetal is. Deze effecten zijn evenredig met α⁴ (fijnstructuurconstante tot de vierde macht)."
        }
      },
      {
        question: {
          en: "What is the hyperfine structure in hydrogen?",
          es: "¿Qué es la estructura hiperfina en hidrógeno?",
          de: "Was ist die Hyperfeinstruktur in Wasserstoff?",
          nl: "Wat is de hyperfijne structuur in waterstof?"
        },
        options: [
          {
            en: "Splitting due to interaction between electron and proton magnetic moments",
            es: "División debido a la interacción entre momentos magnéticos del electrón y protón",
            de: "Aufspaltung durch Wechselwirkung zwischen Elektron- und Proton-Magnetmomenten",
            nl: "Splitsing door interactie tussen elektron en proton magnetische momenten"
          },
          {
            en: "Effect of nuclear size on electron orbitals",
            es: "Efecto del tamaño nuclear en los orbitales electrónicos",
            de: "Effekt der Kerngröße auf Elektronorbitale",
            nl: "Effect van kerngrootte op elektronorbitalen"
          },
          {
            en: "Interaction with cosmic background radiation",
            es: "Interacción con radiación cósmica de fondo",
            de: "Wechselwirkung mit kosmischer Hintergrundstrahlung",
            nl: "Interactie met kosmische achtergrondstraling"
          },
          {
            en: "Quantum field fluctuations in vacuum",
            es: "Fluctuaciones del campo cuántico en el vacío",
            de: "Quantenfeldfluktuationen im Vakuum",
            nl: "Quantumveld fluctuaties in vacuüm"
          }
        ],
        correct: 0,
        explanation: {
          en: "Hyperfine structure arises from the magnetic interaction between the electron spin and proton spin in hydrogen. This coupling splits the ground state into two levels: F = 1 (parallel spins) and F = 0 (antiparallel spins), separated by about 5.9 μeV. The famous 21-cm radio line of neutral hydrogen corresponds to the transition between these hyperfine levels.",
          es: "La estructura hiperfina surge de la interacción magnética entre el espín del electrón y el espín del protón en hidrógeno. Este acoplamiento divide el estado fundamental en dos niveles: F = 1 (espines paralelos) y F = 0 (espines antiparalelos), separados por aproximadamente 5.9 μeV. La famosa línea de radio de 21 cm del hidrógeno neutro corresponde a la transición entre estos niveles hiperfinos.",
          de: "Hyperfeinstruktur entsteht durch die magnetische Wechselwirkung zwischen Elektronenspin und Protonenspin in Wasserstoff. Diese Kopplung spaltet den Grundzustand in zwei Niveaus auf: F = 1 (parallele Spins) und F = 0 (antiparallele Spins), getrennt durch etwa 5,9 μeV. Die berühmte 21-cm-Radiolinie von neutralem Wasserstoff entspricht dem Übergang zwischen diesen Hyperfeinniveaus.",
          nl: "Hyperfijne structuur ontstaat door de magnetische interactie tussen elektronenspin en protonspin in waterstof. Deze koppeling splitst de grondtoestand in twee niveaus: F = 1 (parallelle spins) en F = 0 (antiparallelle spins), gescheiden door ongeveer 5,9 μeV. De beroemde 21-cm radiolijn van neutraal waterstof komt overeen met de overgang tussen deze hyperfijne niveaus."
        }
      },
      {
        question: {
          en: "How many radial nodes does the 3s orbital have?",
          es: "¿Cuántos nodos radiales tiene el orbital 3s?",
          de: "Wie viele radiale Knoten hat das 3s-Orbital?",
          nl: "Hoeveel radiale knopen heeft het 3s orbitaal?"
        },
        options: [
          {
            en: "2 radial nodes (n - l - 1 = 3 - 0 - 1 = 2)",
            es: "2 nodos radiales (n - l - 1 = 3 - 0 - 1 = 2)",
            de: "2 radiale Knoten (n - l - 1 = 3 - 0 - 1 = 2)",
            nl: "2 radiale knopen (n - l - 1 = 3 - 0 - 1 = 2)"
          },
          {
            en: "3 radial nodes",
            es: "3 nodos radiales",
            de: "3 radiale Knoten",
            nl: "3 radiale knopen"
          },
          {
            en: "1 radial node",
            es: "1 nodo radial",
            de: "1 radialer Knoten",
            nl: "1 radiale knoop"
          },
          {
            en: "0 radial nodes",
            es: "0 nodos radiales",
            de: "0 radiale Knoten",
            nl: "0 radiale knopen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The number of radial nodes in a hydrogen orbital is given by n - l - 1. For the 3s orbital: n = 3, l = 0, so there are 3 - 0 - 1 = 2 radial nodes. These are spherical surfaces where the radial wave function R₃₀(r) = 0. The 3s orbital has a complex radial structure with regions of positive and negative amplitude separated by these nodal surfaces.",
          es: "El número de nodos radiales en un orbital de hidrógeno está dado por n - l - 1. Para el orbital 3s: n = 3, l = 0, así que hay 3 - 0 - 1 = 2 nodos radiales. Estas son superficies esféricas donde la función de onda radial R₃₀(r) = 0. El orbital 3s tiene una estructura radial compleja con regiones de amplitud positiva y negativa separadas por estas superficies nodales.",
          de: "Die Anzahl radialer Knoten in einem Wasserstofforbital ist durch n - l - 1 gegeben. Für das 3s-Orbital: n = 3, l = 0, also gibt es 3 - 0 - 1 = 2 radiale Knoten. Dies sind sphärische Flächen, wo die radiale Wellenfunktion R₃₀(r) = 0 ist. Das 3s-Orbital hat eine komplexe radiale Struktur mit Bereichen positiver und negativer Amplitude, getrennt durch diese Knotenflächen.",
          nl: "Het aantal radiale knopen in een waterstof orbitaal wordt gegeven door n - l - 1. Voor het 3s orbitaal: n = 3, l = 0, dus zijn er 3 - 0 - 1 = 2 radiale knopen. Dit zijn bolvormige oppervlakken waar de radiale golffunctie R₃₀(r) = 0. Het 3s orbitaal heeft een complexe radiale structuur met gebieden van positieve en negatieve amplitude gescheiden door deze knoopoppervlakken."
        }
      },
      {
        question: {
          en: "What is the degeneracy of the n=3 energy level in hydrogen?",
          es: "¿Cuál es la degeneración del nivel de energía n=3 en hidrógeno?",
          de: "Was ist die Entartung des n=3-Energieniveaus in Wasserstoff?",
          nl: "Wat is de degeneratie van het n=3 energieniveau in waterstof?"
        },
        options: [
          {
            en: "9-fold degenerate (includes 3s, 3p, and 3d orbitals)",
            es: "Degeneración de 9 veces (incluye orbitales 3s, 3p y 3d)",
            de: "9-fach entartet (umfasst 3s-, 3p- und 3d-Orbitale)",
            nl: "9-voudig gedegenereerd (bevat 3s, 3p en 3d orbitalen)"
          },
          {
            en: "3-fold degenerate",
            es: "Degeneración de 3 veces",
            de: "3-fach entartet",
            nl: "3-voudig gedegenereerd"
          },
          {
            en: "6-fold degenerate",
            es: "Degeneración de 6 veces",
            de: "6-fach entartet",
            nl: "6-voudig gedegenereerd"
          },
          {
            en: "1-fold (non-degenerate)",
            es: "1 vez (no degenerado)",
            de: "1-fach (nicht entartet)",
            nl: "1-voudig (niet gedegenereerd)"
          }
        ],
        correct: 0,
        explanation: {
          en: "The n=3 level has 9-fold degeneracy: one 3s orbital (l=0, ml=0), three 3p orbitals (l=1, ml=-1,0,+1), and five 3d orbitals (l=2, ml=-2,-1,0,+1,+2). In general, the degeneracy of level n is n², since it contains orbitals with l = 0, 1, 2, ..., n-1, and each l has 2l+1 values of ml.",
          es: "El nivel n=3 tiene degeneración de 9 veces: un orbital 3s (l=0, ml=0), tres orbitales 3p (l=1, ml=-1,0,+1), y cinco orbitales 3d (l=2, ml=-2,-1,0,+1,+2). En general, la degeneración del nivel n es n², ya que contiene orbitales con l = 0, 1, 2, ..., n-1, y cada l tiene 2l+1 valores de ml.",
          de: "Das n=3-Niveau hat 9-fache Entartung: ein 3s-Orbital (l=0, ml=0), drei 3p-Orbitale (l=1, ml=-1,0,+1) und fünf 3d-Orbitale (l=2, ml=-2,-1,0,+1,+2). Im Allgemeinen ist die Entartung des Niveaus n gleich n², da es Orbitale mit l = 0, 1, 2, ..., n-1 enthält, und jedes l hat 2l+1 Werte von ml.",
          nl: "Het n=3 niveau heeft 9-voudige degeneratie: één 3s orbitaal (l=0, ml=0), drie 3p orbitalen (l=1, ml=-1,0,+1), en vijf 3d orbitalen (l=2, ml=-2,-1,0,+1,+2). In het algemeen is de degeneratie van niveau n gelijk aan n², omdat het orbitalen bevat met l = 0, 1, 2, ..., n-1, en elke l heeft 2l+1 waarden van ml."
        }
      },
      {
        question: {
          en: "What is the probability density |ψ|² for the hydrogen ground state at the nucleus (r=0)?",
          es: "¿Cuál es la densidad de probabilidad |ψ|² para el estado fundamental del hidrógeno en el núcleo (r=0)?",
          de: "Was ist die Wahrscheinlichkeitsdichte |ψ|² für den Wasserstoff-Grundzustand am Kern (r=0)?",
          nl: "Wat is de waarschijnlijkheidsdichtheid |ψ|² voor de waterstof grondtoestand bij de kern (r=0)?"
        },
        options: [
          {
            en: "|ψ₁₀₀(0)|² = 1/(πa₀³), where a₀ is the Bohr radius",
            es: "|ψ₁₀₀(0)|² = 1/(πa₀³), donde a₀ es el radio de Bohr",
            de: "|ψ₁₀₀(0)|² = 1/(πa₀³), wobei a₀ der Bohr-Radius ist",
            nl: "|ψ₁₀₀(0)|² = 1/(πa₀³), waar a₀ de Bohr-straal is"
          },
          {
            en: "|ψ₁₀₀(0)|² = 0 (electron cannot be at nucleus)",
            es: "|ψ₁₀₀(0)|² = 0 (el electrón no puede estar en el núcleo)",
            de: "|ψ₁₀₀(0)|² = 0 (Elektron kann nicht am Kern sein)",
            nl: "|ψ₁₀₀(0)|² = 0 (elektron kan niet bij de kern zijn)"
          },
          {
            en: "|ψ₁₀₀(0)|² = ∞ (infinite probability)",
            es: "|ψ₁₀₀(0)|² = ∞ (probabilidad infinita)",
            de: "|ψ₁₀₀(0)|² = ∞ (unendliche Wahrscheinlichkeit)",
            nl: "|ψ₁₀₀(0)|² = ∞ (oneindige waarschijnlijkheid)"
          },
          {
            en: "|ψ₁₀₀(0)|² = 1",
            es: "|ψ₁₀₀(0)|² = 1",
            de: "|ψ₁₀₀(0)|² = 1",
            nl: "|ψ₁₀₀(0)|² = 1"
          }
        ],
        correct: 0,
        explanation: {
          en: "The ground state wave function ψ₁₀₀ = (1/√(πa₀³))e^(-r/a₀) has maximum probability density at the nucleus: |ψ₁₀₀(0)|² = 1/(πa₀³). This finite, non-zero value means there's a finite probability of finding the electron at the nuclear position, which is important for contact interactions and hyperfine structure calculations.",
          es: "La función de onda del estado fundamental ψ₁₀₀ = (1/√(πa₀³))e^(-r/a₀) tiene densidad de probabilidad máxima en el núcleo: |ψ₁₀₀(0)|² = 1/(πa₀³). Este valor finito y no cero significa que hay una probabilidad finita de encontrar el electrón en la posición nuclear, lo cual es importante para interacciones de contacto y cálculos de estructura hiperfina.",
          de: "Die Grundzustands-Wellenfunktion ψ₁₀₀ = (1/√(πa₀³))e^(-r/a₀) hat maximale Wahrscheinlichkeitsdichte am Kern: |ψ₁₀₀(0)|² = 1/(πa₀³). Dieser endliche, nicht-null Wert bedeutet, dass es eine endliche Wahrscheinlichkeit gibt, das Elektron an der Kernposition zu finden, was für Kontaktwechselwirkungen und Hyperfeinstrukturberechnungen wichtig ist.",
          nl: "De grondtoestand golffunctie ψ₁₀₀ = (1/√(πa₀³))e^(-r/a₀) heeft maximale waarschijnlijkheidsdichtheid bij de kern: |ψ₁₀₀(0)|² = 1/(πa₀³). Deze eindige, niet-nul waarde betekent dat er een eindige waarschijnlijkheid is om het elektron bij de kernpositie te vinden, wat belangrijk is voor contactinteracties en hyperfijne structuurberekeningen."
        }
      },
      {
        question: {
          en: "What is the classical turning point for the hydrogen ground state?",
          es: "¿Cuál es el punto de retorno clásico para el estado fundamental del hidrógeno?",
          de: "Was ist der klassische Umkehrpunkt für den Wasserstoff-Grundzustand?",
          nl: "Wat is het klassieke keerpunt voor de waterstof grondtoestand?"
        },
        options: [
          {
            en: "r = 2a₀ (where total energy equals potential energy)",
            es: "r = 2a₀ (donde la energía total iguala la energía potencial)",
            de: "r = 2a₀ (wo die Gesamtenergie der potentiellen Energie entspricht)",
            nl: "r = 2a₀ (waar totale energie gelijk is aan potentiële energie)"
          },
          {
            en: "r = a₀ (Bohr radius)",
            es: "r = a₀ (radio de Bohr)",
            de: "r = a₀ (Bohr-Radius)",
            nl: "r = a₀ (Bohr-straal)"
          },
          {
            en: "r = 0 (at the nucleus)",
            es: "r = 0 (en el núcleo)",
            de: "r = 0 (am Kern)",
            nl: "r = 0 (bij de kern)"
          },
          {
            en: "There is no classical turning point",
            es: "No hay punto de retorno clásico",
            de: "Es gibt keinen klassischen Umkehrpunkt",
            nl: "Er is geen klassiek keerpunt"
          }
        ],
        correct: 0,
        explanation: {
          en: "The classical turning point occurs where the total energy E = -13.6 eV equals the potential energy V(r) = -ke²/r. Setting E = V gives: -13.6 eV = -ke²/r, which yields r = ke²/(13.6 eV) = 2a₀. Beyond this point, a classical particle would not be able to penetrate, but quantum mechanically the electron has significant probability density even at larger radii.",
          es: "El punto de retorno clásico ocurre donde la energía total E = -13.6 eV iguala la energía potencial V(r) = -ke²/r. Igualando E = V da: -13.6 eV = -ke²/r, lo cual produce r = ke²/(13.6 eV) = 2a₀. Más allá de este punto, una partícula clásica no podría penetrar, pero cuánticamente el electrón tiene densidad de probabilidad significativa incluso a radios mayores.",
          de: "Der klassische Umkehrpunkt tritt auf, wo die Gesamtenergie E = -13,6 eV der potentiellen Energie V(r) = -ke²/r entspricht. Setzen von E = V ergibt: -13,6 eV = -ke²/r, was r = ke²/(13,6 eV) = 2a₀ liefert. Jenseits dieses Punktes könnte ein klassisches Teilchen nicht eindringen, aber quantenmechanisch hat das Elektron signifikante Wahrscheinlichkeitsdichte sogar bei größeren Radien.",
          nl: "Het klassieke keerpunt treedt op waar de totale energie E = -13,6 eV gelijk is aan de potentiële energie V(r) = -ke²/r. Stellen van E = V geeft: -13,6 eV = -ke²/r, wat r = ke²/(13,6 eV) = 2a₀ oplevert. Voorbij dit punt zou een klassiek deeltje niet kunnen doordringen, maar quantummechanisch heeft het elektron significante waarschijnlijkheidsdichtheid zelfs bij grotere stralen."
        }
      },
      {
        question: {
          en: "How does the hydrogen atom wave function scale with nuclear charge Z?",
          es: "¿Cómo escala la función de onda del átomo de hidrógeno con la carga nuclear Z?",
          de: "Wie skaliert die Wasserstoff-Atom-Wellenfunktion mit der Kernladung Z?",
          nl: "Hoe schaalt de waterstofatoom golffunctie met kernlading Z?"
        },
        options: [
          {
            en: "ψ(r) → (Z/a₀)^(3/2) ψ(Zr/a₀) - wave function contracts and normalizes",
            es: "ψ(r) → (Z/a₀)^(3/2) ψ(Zr/a₀) - la función de onda se contrae y normaliza",
            de: "ψ(r) → (Z/a₀)^(3/2) ψ(Zr/a₀) - Wellenfunktion kontrahiert und normalisiert",
            nl: "ψ(r) → (Z/a₀)^(3/2) ψ(Zr/a₀) - golffunctie trekt samen en normaliseert"
          },
          {
            en: "Wave function remains unchanged with Z",
            es: "La función de onda permanece sin cambios con Z",
            de: "Wellenfunktion bleibt unverändert mit Z",
            nl: "Golffunctie blijft onveranderd met Z"
          },
          {
            en: "ψ(r) → Z ψ(r) - linear scaling only",
            es: "ψ(r) → Z ψ(r) - solo escalamiento lineal",
            de: "ψ(r) → Z ψ(r) - nur lineare Skalierung",
            nl: "ψ(r) → Z ψ(r) - alleen lineaire schaling"
          },
          {
            en: "All hydrogen-like atoms have identical wave functions",
            es: "Todos los átomos similares al hidrógeno tienen funciones de onda idénticas",
            de: "Alle wasserstoffähnlichen Atome haben identische Wellenfunktionen",
            nl: "Alle waterstof-achtige atomen hebben identieke golffuncties"
          }
        ],
        correct: 0,
        explanation: {
          en: "Hydrogen wave functions exhibit simple scaling properties with nuclear charge Z. The radial coordinate scales as Zr/a₀, making orbitals smaller for higher Z, while the overall normalization scales as (Z/a₀)³/². This scaling reflects the Z-dependence of the Coulomb potential and explains why hydrogen-like ions have the same orbital shapes but different sizes. The scaling laws are fundamental to understanding periodic trends in atomic properties.",
          es: "Las funciones de onda de hidrógeno exhiben propiedades simples de escalamiento con la carga nuclear Z. La coordenada radial escala como Zr/a₀, haciendo orbitales más pequeños para Z mayor, mientras que la normalización general escala como (Z/a₀)³/². Este escalamiento refleja la dependencia en Z del potencial de Coulomb y explica por qué los iones similares al hidrógeno tienen las mismas formas orbitales pero diferentes tamaños. Las leyes de escalamiento son fundamentales para entender tendencias periódicas en propiedades atómicas.",
          de: "Wasserstoff-Wellenfunktionen zeigen einfache Skalierungseigenschaften mit der Kernladung Z. Die Radialkoordinate skaliert als Zr/a₀, wodurch Orbitale für höheres Z kleiner werden, während die Gesamtnormierung als (Z/a₀)³/² skaliert. Diese Skalierung spiegelt die Z-Abhängigkeit des Coulomb-Potentials wider und erklärt, warum wasserstoffähnliche Ionen dieselben Orbitalformen aber verschiedene Größen haben. Die Skalierungsgesetze sind fundamental für das Verständnis periodischer Trends in Atomeigenschaften.",
          nl: "Waterstof golffuncties vertonen eenvoudige schaaleigenschappen met kernlading Z. De radiale coördinaat schaalt als Zr/a₀, wat orbitalen kleiner maakt voor hogere Z, terwijl de algemene normalisatie schaalt als (Z/a₀)³/². Deze schaling reflecteert de Z-afhankelijkheid van het Coulomb potentiaal en verklaart waarom waterstof-achtige ionen dezelfde orbitaalvormen maar verschillende groottes hebben. De schaalwetten zijn fundamenteel voor het begrijpen van periodieke trends in atomaire eigenschappen."
        }
      },
      {
        question: {
          en: "What is the virial theorem result for the hydrogen atom?",
          es: "¿Cuál es el resultado del teorema del virial para el átomo de hidrógeno?",
          de: "Was ist das Virial-Theorem-Ergebnis für das Wasserstoffatom?",
          nl: "Wat is het viriaaltheorema resultaat voor het waterstofatoom?"
        },
        options: [
          {
            en: "⟨T⟩ = -½⟨V⟩ and E = ⟨T⟩ + ⟨V⟩ = ½⟨V⟩",
            es: "⟨T⟩ = -½⟨V⟩ y E = ⟨T⟩ + ⟨V⟩ = ½⟨V⟩",
            de: "⟨T⟩ = -½⟨V⟩ und E = ⟨T⟩ + ⟨V⟩ = ½⟨V⟩",
            nl: "⟨T⟩ = -½⟨V⟩ en E = ⟨T⟩ + ⟨V⟩ = ½⟨V⟩"
          },
          {
            en: "⟨T⟩ = ⟨V⟩ (equipartition theorem)",
            es: "⟨T⟩ = ⟨V⟩ (teorema de equipartición)",
            de: "⟨T⟩ = ⟨V⟩ (Äquipartitionstheorem)",
            nl: "⟨T⟩ = ⟨V⟩ (equipartitietheorema)"
          },
          {
            en: "⟨T⟩ = 2⟨V⟩",
            es: "⟨T⟩ = 2⟨V⟩",
            de: "⟨T⟩ = 2⟨V⟩",
            nl: "⟨T⟩ = 2⟨V⟩"
          },
          {
            en: "⟨T⟩ and ⟨V⟩ are independent",
            es: "⟨T⟩ y ⟨V⟩ son independientes",
            de: "⟨T⟩ und ⟨V⟩ sind unabhängig",
            nl: "⟨T⟩ en ⟨V⟩ zijn onafhankelijk"
          }
        ],
        correct: 0,
        explanation: {
          en: "For the Coulomb potential V = -ke²/r (which scales as r⁻¹), the virial theorem gives 2⟨T⟩ + ⟨V⟩ = 0, so ⟨T⟩ = -½⟨V⟩. Since the total energy E = ⟨T⟩ + ⟨V⟩ = -½⟨V⟩ + ⟨V⟩ = ½⟨V⟩. For the ground state: ⟨T⟩ = 13.6 eV, ⟨V⟩ = -27.2 eV, and E = -13.6 eV.",
          es: "Para el potencial de Coulomb V = -ke²/r (que escala como r⁻¹), el teorema del virial da 2⟨T⟩ + ⟨V⟩ = 0, así que ⟨T⟩ = -½⟨V⟩. Como la energía total E = ⟨T⟩ + ⟨V⟩ = -½⟨V⟩ + ⟨V⟩ = ½⟨V⟩. Para el estado fundamental: ⟨T⟩ = 13.6 eV, ⟨V⟩ = -27.2 eV, y E = -13.6 eV.",
          de: "Für das Coulomb-Potential V = -ke²/r (das als r⁻¹ skaliert), gibt das Virial-Theorem 2⟨T⟩ + ⟨V⟩ = 0, also ⟨T⟩ = -½⟨V⟩. Da die Gesamtenergie E = ⟨T⟩ + ⟨V⟩ = -½⟨V⟩ + ⟨V⟩ = ½⟨V⟩. Für den Grundzustand: ⟨T⟩ = 13,6 eV, ⟨V⟩ = -27,2 eV, und E = -13,6 eV.",
          nl: "Voor het Coulomb potentiaal V = -ke²/r (dat schaalt als r⁻¹), geeft het viriaaltheorema 2⟨T⟩ + ⟨V⟩ = 0, dus ⟨T⟩ = -½⟨V⟩. Omdat de totale energie E = ⟨T⟩ + ⟨V⟩ = -½⟨V⟩ + ⟨V⟩ = ½⟨V⟩. Voor de grondtoestand: ⟨T⟩ = 13,6 eV, ⟨V⟩ = -27,2 eV, en E = -13,6 eV."
        }
      },
      {
        question: {
          en: "What determines the number of angular nodes in a hydrogen orbital?",
          es: "¿Qué determina el número de nodos angulares en un orbital de hidrógeno?",
          de: "Was bestimmt die Anzahl der Winkelknoten in einem Wasserstofforbital?",
          nl: "Wat bepaalt het aantal hoekknopen in een waterstof orbitaal?"
        },
        options: [
          {
            en: "The orbital angular momentum quantum number l",
            es: "El número cuántico de momento angular orbital l",
            de: "Die Bahndrehimpuls-Quantenzahl l",
            nl: "Het orbitaal hoekimpuls quantumgetal l"
          },
          {
            en: "The principal quantum number n",
            es: "El número cuántico principal n",
            de: "Die Hauptquantenzahl n",
            nl: "Het hoofdquantum getal n"
          },
          {
            en: "The magnetic quantum number mₗ",
            es: "El número cuántico magnético mₗ",
            de: "Die magnetische Quantenzahl mₗ",
            nl: "Het magnetische quantumgetal mₗ"
          },
          {
            en: "The spin quantum number mₛ",
            es: "El número cuántico de espín mₛ",
            de: "Die Spinquantenzahl mₛ",
            nl: "Het spin quantumgetal mₛ"
          }
        ],
        correct: 0,
        explanation: {
          en: "The number of angular nodes (nodal planes or surfaces) in a hydrogen orbital is determined by the orbital angular momentum quantum number l. An orbital has exactly l angular nodes. For example: s orbitals (l=0) have 0 angular nodes, p orbitals (l=1) have 1 angular node (a plane), d orbitals (l=2) have 2 angular nodes, and so on. This arises from the angular dependence of the spherical harmonics Yₗᵐ(θ,φ).",
          es: "El número de nodos angulares (planos o superficies nodales) en un orbital de hidrógeno está determinado por el número cuántico de momento angular orbital l. Un orbital tiene exactamente l nodos angulares. Por ejemplo: orbitales s (l=0) tienen 0 nodos angulares, orbitales p (l=1) tienen 1 nodo angular (un plano), orbitales d (l=2) tienen 2 nodos angulares, y así sucesivamente. Esto surge de la dependencia angular de los armónicos esféricos Yₗᵐ(θ,φ).",
          de: "Die Anzahl der Winkelknoten (Knotenebenen oder -flächen) in einem Wasserstofforbital wird durch die Bahndrehimpuls-Quantenzahl l bestimmt. Ein Orbital hat genau l Winkelknoten. Zum Beispiel: s-Orbitale (l=0) haben 0 Winkelknoten, p-Orbitale (l=1) haben 1 Winkelknoten (eine Ebene), d-Orbitale (l=2) haben 2 Winkelknoten, und so weiter. Dies entsteht aus der Winkelabhängigkeit der Kugelflächenfunktionen Yₗᵐ(θ,φ).",
          nl: "Het aantal hoekknopen (knoopvlakken of oppervlakken) in een waterstof orbitaal wordt bepaald door het orbitaal hoekimpuls quantumgetal l. Een orbitaal heeft precies l hoekknopen. Bijvoorbeeld: s orbitalen (l=0) hebben 0 hoekknopen, p orbitalen (l=1) hebben 1 hoekknoop (een vlak), d orbitalen (l=2) hebben 2 hoekknopen, enzovoort. Dit ontstaat door de hoekafhankelijkheid van de bolharmonischen Yₗᵐ(θ,φ)."
        }
      },
      {
        question: {
          en: "What is the Lamb shift in hydrogen?",
          es: "¿Qué es el desplazamiento de Lamb en hidrógeno?",
          de: "Was ist die Lamb-Verschiebung in Wasserstoff?",
          nl: "Wat is de Lamb-verschuiving in waterstof?"
        },
        options: [
          {
            en: "QED correction that splits the 2s₁/₂ and 2p₁/₂ levels",
            es: "Corrección QED que divide los niveles 2s₁/₂ y 2p₁/₂",
            de: "QED-Korrektur, die die 2s₁/₂- und 2p₁/₂-Niveaus aufspaltet",
            nl: "QED correctie die de 2s₁/₂ en 2p₁/₂ niveaus splitst"
          },
          {
            en: "Effect of Earth's magnetic field on hydrogen",
            es: "Efecto del campo magnético de la Tierra en hidrógeno",
            de: "Effekt des Erdmagnetfeldes auf Wasserstoff",
            nl: "Effect van het aardmagnetisch veld op waterstof"
          },
          {
            en: "Temperature-induced energy shift",
            es: "Desplazamiento de energía inducido por temperatura",
            de: "Temperaturinduzierte Energieverschiebung",
            nl: "Temperatuur-geïnduceerde energieverschuiving"
          },
          {
            en: "Pressure broadening of spectral lines",
            es: "Ensanchamiento por presión de líneas espectrales",
            de: "Druckverbreiterung von Spektrallinien",
            nl: "Druk verbreding van spectraallijnen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Lamb shift is a small energy difference between the 2s₁/₂ and 2p₁/₂ states in hydrogen, discovered by Willis Lamb in 1947. According to the Dirac equation, these states should be degenerate, but quantum electrodynamics (QED) corrections, particularly vacuum polarization and self-energy effects, lift this degeneracy. The 2s₁/₂ level is shifted upward by about 1057 MHz relative to 2p₁/₂. This discovery was crucial for the development of QED.",
          es: "El desplazamiento de Lamb es una pequeña diferencia de energía entre los estados 2s₁/₂ y 2p₁/₂ en hidrógeno, descubierta por Willis Lamb en 1947. Según la ecuación de Dirac, estos estados deberían ser degenerados, pero las correcciones de electrodinámica cuántica (QED), particularmente la polarización del vacío y efectos de auto-energía, levantan esta degeneración. El nivel 2s₁/₂ se desplaza hacia arriba aproximadamente 1057 MHz relativo a 2p₁/₂. Este descubrimiento fue crucial para el desarrollo de QED.",
          de: "Die Lamb-Verschiebung ist ein kleiner Energieunterschied zwischen den 2s₁/₂- und 2p₁/₂-Zuständen in Wasserstoff, entdeckt von Willis Lamb 1947. Nach der Dirac-Gleichung sollten diese Zustände entartet sein, aber Quantenelektrodynamik (QED)-Korrekturen, insbesondere Vakuumpolarisation und Selbstenergie-Effekte, heben diese Entartung auf. Das 2s₁/₂-Niveau ist um etwa 1057 MHz relativ zu 2p₁/₂ nach oben verschoben. Diese Entdeckung war entscheidend für die Entwicklung der QED.",
          nl: "De Lamb-verschuiving is een klein energieverschil tussen de 2s₁/₂ en 2p₁/₂ toestanden in waterstof, ontdekt door Willis Lamb in 1947. Volgens de Dirac-vergelijking zouden deze toestanden gedegenereerd moeten zijn, maar quantum-elektrodynamica (QED) correcties, vooral vacuümpolarisatie en zelf-energie effecten, heffen deze degeneratie op. Het 2s₁/₂ niveau wordt ongeveer 1057 MHz omhoog verschoven ten opzichte van 2p₁/₂. Deze ontdekking was cruciaal voor de ontwikkeling van QED."
        }
      },
      {
        question: {
          en: "What is the expectation value of r for the hydrogen ground state?",
          es: "¿Cuál es el valor esperado de r para el estado fundamental del hidrógeno?",
          de: "Was ist der Erwartungswert von r für den Wasserstoff-Grundzustand?",
          nl: "Wat is de verwachtingswaarde van r voor de waterstof grondtoestand?"
        },
        options: [
          {
            en: "⟨r⟩ = 3a₀/2 (1.5 times the Bohr radius)",
            es: "⟨r⟩ = 3a₀/2 (1.5 veces el radio de Bohr)",
            de: "⟨r⟩ = 3a₀/2 (1,5 mal der Bohr-Radius)",
            nl: "⟨r⟩ = 3a₀/2 (1,5 maal de Bohr-straal)"
          },
          {
            en: "⟨r⟩ = a₀ (equal to Bohr radius)",
            es: "⟨r⟩ = a₀ (igual al radio de Bohr)",
            de: "⟨r⟩ = a₀ (gleich dem Bohr-Radius)",
            nl: "⟨r⟩ = a₀ (gelijk aan Bohr-straal)"
          },
          {
            en: "⟨r⟩ = 2a₀",
            es: "⟨r⟩ = 2a₀",
            de: "⟨r⟩ = 2a₀",
            nl: "⟨r⟩ = 2a₀"
          },
          {
            en: "⟨r⟩ = a₀/2",
            es: "⟨r⟩ = a₀/2",
            de: "⟨r⟩ = a₀/2",
            nl: "⟨r⟩ = a₀/2"
          }
        ],
        correct: 0,
        explanation: {
          en: "The expectation value ⟨r⟩ = ∫₀^∞ r |R₁₀(r)|² r² dr = 3a₀/2 for the hydrogen ground state. This differs from the most probable radius (a₀) and the classical turning point (2a₀). The expectation value represents the average distance of the electron from the nucleus, weighted by the probability distribution |ψ₁₀₀|².",
          es: "El valor esperado ⟨r⟩ = ∫₀^∞ r |R₁₀(r)|² r² dr = 3a₀/2 para el estado fundamental del hidrógeno. Esto difiere del radio más probable (a₀) y el punto de retorno clásico (2a₀). El valor esperado representa la distancia promedio del electrón desde el núcleo, ponderada por la distribución de probabilidad |ψ₁₀₀|².",
          de: "Der Erwartungswert ⟨r⟩ = ∫₀^∞ r |R₁₀(r)|² r² dr = 3a₀/2 für den Wasserstoff-Grundzustand. Dies unterscheidet sich vom wahrscheinlichsten Radius (a₀) und dem klassischen Umkehrpunkt (2a₀). Der Erwartungswert repräsentiert den durchschnittlichen Abstand des Elektrons vom Kern, gewichtet mit der Wahrscheinlichkeitsverteilung |ψ₁₀₀|².",
          nl: "De verwachtingswaarde ⟨r⟩ = ∫₀^∞ r |R₁₀(r)|² r² dr = 3a₀/2 voor de waterstof grondtoestand. Dit verschilt van de meest waarschijnlijke straal (a₀) en het klassieke keerpunt (2a₀). De verwachtingswaarde vertegenwoordigt de gemiddelde afstand van het elektron tot de kern, gewogen met de waarschijnlijkheidsverdeling |ψ₁₀₀|²."
        }
      },
      {
        question: {
          en: "What is the angular momentum quantum number range for the n=4 level?",
          es: "¿Cuál es el rango del número cuántico de momento angular para el nivel n=4?",
          de: "Was ist der Bereich der Drehimpuls-Quantenzahl für das n=4-Niveau?",
          nl: "Wat is het bereik van het hoekimpuls quantumgetal voor het n=4 niveau?"
        },
        options: [
          {
            en: "l = 0, 1, 2, 3 (corresponding to 4s, 4p, 4d, 4f orbitals)",
            es: "l = 0, 1, 2, 3 (correspondiendo a orbitales 4s, 4p, 4d, 4f)",
            de: "l = 0, 1, 2, 3 (entsprechend 4s-, 4p-, 4d-, 4f-Orbitalen)",
            nl: "l = 0, 1, 2, 3 (overeenkomend met 4s, 4p, 4d, 4f orbitalen)"
          },
          {
            en: "l = 0, 1, 2 only",
            es: "l = 0, 1, 2 solamente",
            de: "l = 0, 1, 2 nur",
            nl: "l = 0, 1, 2 alleen"
          },
          {
            en: "l = 1, 2, 3, 4",
            es: "l = 1, 2, 3, 4",
            de: "l = 1, 2, 3, 4",
            nl: "l = 1, 2, 3, 4"
          },
          {
            en: "l can be any integer",
            es: "l puede ser cualquier entero",
            de: "l kann jede ganze Zahl sein",
            nl: "l kan elk geheel getal zijn"
          }
        ],
        correct: 0,
        explanation: {
          en: "For the n=4 energy level, the orbital angular momentum quantum number l can take values from 0 to n-1, so l = 0, 1, 2, 3. This gives us 4s (l=0), 4p (l=1), 4d (l=2), and 4f (l=3) orbitals. Each subshell has 2l+1 orbitals: 4s has 1, 4p has 3, 4d has 5, and 4f has 7 orbitals, for a total degeneracy of 16 = 4².",
          es: "Para el nivel de energía n=4, el número cuántico de momento angular orbital l puede tomar valores de 0 a n-1, así que l = 0, 1, 2, 3. Esto nos da orbitales 4s (l=0), 4p (l=1), 4d (l=2), y 4f (l=3). Cada subcapa tiene 2l+1 orbitales: 4s tiene 1, 4p tiene 3, 4d tiene 5, y 4f tiene 7 orbitales, para una degeneración total de 16 = 4².",
          de: "Für das n=4-Energieniveau kann die Bahndrehimpuls-Quantenzahl l Werte von 0 bis n-1 annehmen, also l = 0, 1, 2, 3. Dies gibt uns 4s- (l=0), 4p- (l=1), 4d- (l=2) und 4f-Orbitale (l=3). Jede Unterschale hat 2l+1 Orbitale: 4s hat 1, 4p hat 3, 4d hat 5 und 4f hat 7 Orbitale, für eine Gesamtentartung von 16 = 4².",
          nl: "Voor het n=4 energieniveau kan het orbitaal hoekimpuls quantumgetal l waarden aannemen van 0 tot n-1, dus l = 0, 1, 2, 3. Dit geeft ons 4s (l=0), 4p (l=1), 4d (l=2), en 4f (l=3) orbitalen. Elke subschil heeft 2l+1 orbitalen: 4s heeft 1, 4p heeft 3, 4d heeft 5, en 4f heeft 7 orbitalen, voor een totale degeneratie van 16 = 4²."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mind-bender/quantum-physics', level5);
  }
})();
