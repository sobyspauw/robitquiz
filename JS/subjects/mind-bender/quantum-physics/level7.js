// Quantum Physics - Level 7: Angular Momentum and Spin
(function() {
  const level7 = {
    name: {
      en: "Angular Momentum and Spin",
      es: "Momento Angular y Espín",
      de: "Drehimpuls und Spin",
      nl: "Hoekimpuls en Spin"
    },
    questions: [
      {
        question: {
          en: "What are the eigenvalues of the total angular momentum operator L²?",
          es: "¿Cuáles son los valores propios del operador de momento angular total L²?",
          de: "Was sind die Eigenwerte des Gesamtdrehimpulsoperators L²?",
          nl: "Wat zijn de eigenwaarden van de totaal hoekimpuls operator L²?"
        },
        options: [
          {
            en: "ℏ²l(l+1), where l = 0, 1, 2, 3, ...",
            es: "ℏ²l(l+1), donde l = 0, 1, 2, 3, ...",
            de: "ℏ²l(l+1), wobei l = 0, 1, 2, 3, ...",
            nl: "ℏ²l(l+1), waar l = 0, 1, 2, 3, ..."
          },
          {
            en: "ℏ²l², where l = 1, 2, 3, ...",
            es: "ℏ²l², donde l = 1, 2, 3, ...",
            de: "ℏ²l², wobei l = 1, 2, 3, ...",
            nl: "ℏ²l², waar l = 1, 2, 3, ..."
          },
          {
            en: "ℏl, where l = 0, 1, 2, 3, ...",
            es: "ℏl, donde l = 0, 1, 2, 3, ...",
            de: "ℏl, wobei l = 0, 1, 2, 3, ...",
            nl: "ℏl, waar l = 0, 1, 2, 3, ..."
          },
          {
            en: "l(l+1), where l = 1, 2, 3, ...",
            es: "l(l+1), donde l = 1, 2, 3, ...",
            de: "l(l+1), wobei l = 1, 2, 3, ...",
            nl: "l(l+1), waar l = 1, 2, 3, ..."
          }
        ],
        correct: 0,
        explanation: {
          en: "The total angular momentum squared operator L² has eigenvalues ℏ²l(l+1), where l is the orbital angular momentum quantum number that can take integer values l = 0, 1, 2, 3, ... The magnitude of the angular momentum vector is |L| = ℏ√(l(l+1)). This quantization arises from the commutation relations of angular momentum operators and the requirement that wave functions be single-valued.",
          es: "El operador de momento angular total al cuadrado L² tiene valores propios ℏ²l(l+1), donde l es el número cuántico de momento angular orbital que puede tomar valores enteros l = 0, 1, 2, 3, ... La magnitud del vector de momento angular es |L| = ℏ√(l(l+1)). Esta cuantización surge de las relaciones de conmutación de los operadores de momento angular y el requisito de que las funciones de onda sean univaluadas.",
          de: "Der Gesamtdrehimpulsquadrat-Operator L² hat Eigenwerte ℏ²l(l+1), wobei l die Bahndrehimpuls-Quantenzahl ist, die ganzzahlige Werte l = 0, 1, 2, 3, ... annehmen kann. Der Betrag des Drehimpulsvektors ist |L| = ℏ√(l(l+1)). Diese Quantisierung ergibt sich aus den Kommutatorrelationen der Drehimpulsoperatoren und der Forderung, dass Wellenfunktionen eindeutig sein müssen.",
          nl: "De totaal hoekimpuls kwadraat operator L² heeft eigenwaarden ℏ²l(l+1), waar l het orbitaal hoekimpuls quantumgetal is dat gehele waarden l = 0, 1, 2, 3, ... kan aannemen. De grootte van de hoekimpulsvector is |L| = ℏ√(l(l+1)). Deze kwantisatie ontstaat uit de commutatie-relaties van hoekimpulsoperatoren en de eis dat golffuncties enkelvoudig gewaardeerd zijn."
        }
      },
      {
        question: {
          en: "What are the possible values of the magnetic quantum number ml for a given l?",
          es: "¿Cuáles son los valores posibles del número cuántico magnético ml para un l dado?",
          de: "Was sind die möglichen Werte der magnetischen Quantenzahl ml für ein gegebenes l?",
          nl: "Wat zijn de mogelijke waarden van het magnetische quantumgetal ml voor een gegeven l?"
        },
        options: [
          {
            en: "ml = -l, -l+1, -l+2, ..., -1, 0, +1, ..., +l-2, +l-1, +l (2l+1 values total)",
            es: "ml = -l, -l+1, -l+2, ..., -1, 0, +1, ..., +l-2, +l-1, +l (2l+1 valores totales)",
            de: "ml = -l, -l+1, -l+2, ..., -1, 0, +1, ..., +l-2, +l-1, +l (insgesamt 2l+1 Werte)",
            nl: "ml = -l, -l+1, -l+2, ..., -1, 0, +1, ..., +l-2, +l-1, +l (totaal 2l+1 waarden)"
          },
          {
            en: "ml = 0, 1, 2, ..., l (l+1 values total)",
            es: "ml = 0, 1, 2, ..., l (l+1 valores totales)",
            de: "ml = 0, 1, 2, ..., l (insgesamt l+1 Werte)",
            nl: "ml = 0, 1, 2, ..., l (totaal l+1 waarden)"
          },
          {
            en: "ml = ±1/2 only",
            es: "ml = ±1/2 solamente",
            de: "ml = ±1/2 nur",
            nl: "ml = ±1/2 alleen"
          },
          {
            en: "ml = 1, 2, 3, ..., l (l values total)",
            es: "ml = 1, 2, 3, ..., l (l valores totales)",
            de: "ml = 1, 2, 3, ..., l (insgesamt l Werte)",
            nl: "ml = 1, 2, 3, ..., l (totaal l waarden)"
          }
        ],
        correct: 0,
        explanation: {
          en: "For a given orbital angular momentum quantum number l, the magnetic quantum number ml can take 2l+1 integer values: ml = -l, -l+1, ..., -1, 0, +1, ..., +l-1, +l. These values correspond to the different orientations of the angular momentum vector in space. For example, if l=2, then ml can be -2, -1, 0, +1, +2, giving 5 possible orientations.",
          es: "Para un número cuántico de momento angular orbital l dado, el número cuántico magnético ml puede tomar 2l+1 valores enteros: ml = -l, -l+1, ..., -1, 0, +1, ..., +l-1, +l. Estos valores corresponden a las diferentes orientaciones del vector de momento angular en el espacio. Por ejemplo, si l=2, entonces ml puede ser -2, -1, 0, +1, +2, dando 5 orientaciones posibles.",
          de: "Für eine gegebene Bahndrehimpuls-Quantenzahl l kann die magnetische Quantenzahl ml 2l+1 ganzzahlige Werte annehmen: ml = -l, -l+1, ..., -1, 0, +1, ..., +l-1, +l. Diese Werte entsprechen den verschiedenen Orientierungen des Drehimpulsvektors im Raum. Wenn zum Beispiel l=2 ist, kann ml -2, -1, 0, +1, +2 sein, was 5 mögliche Orientierungen ergibt.",
          nl: "Voor een gegeven orbitaal hoekimpuls quantumgetal l kan het magnetische quantumgetal ml 2l+1 gehele waarden aannemen: ml = -l, -l+1, ..., -1, 0, +1, ..., +l-1, +l. Deze waarden komen overeen met de verschillende oriëntaties van de hoekimpulsvector in de ruimte. Bijvoorbeeld, als l=2, dan kan ml -2, -1, 0, +1, +2 zijn, wat 5 mogelijke oriëntaties geeft."
        }
      },
      {
        question: {
          en: "What is the key difference between orbital angular momentum and spin angular momentum?",
          es: "¿Cuál es la diferencia clave entre momento angular orbital y momento angular de espín?",
          de: "Was ist der wichtigste Unterschied zwischen Bahndrehimpuls und Spin-Drehimpuls?",
          nl: "Wat is het belangrijkste verschil tussen orbitaal hoekimpuls en spin hoekimpuls?"
        },
        options: [
          {
            en: "Orbital angular momentum arises from spatial motion; spin is an intrinsic quantum property",
            es: "El momento angular orbital surge del movimiento espacial; el espín es una propiedad cuántica intrínseca",
            de: "Bahndrehimpuls entsteht durch räumliche Bewegung; Spin ist eine intrinsische Quanteneigenschaft",
            nl: "Orbitaal hoekimpuls ontstaat uit ruimtelijke beweging; spin is een intrinsieke quantumeigenschap"
          },
          {
            en: "Orbital angular momentum is always half-integer; spin is always integer",
            es: "El momento angular orbital es siempre semi-entero; el espín es siempre entero",
            de: "Bahndrehimpuls ist immer halbzahlig; Spin ist immer ganzzahlig",
            nl: "Orbitaal hoekimpuls is altijd half-geheel; spin is altijd geheel"
          },
          {
            en: "Spin can only be measured; orbital angular momentum cannot",
            es: "El espín solo puede medirse; el momento angular orbital no puede",
            de: "Spin kann nur gemessen werden; Bahndrehimpuls kann nicht gemessen werden",
            nl: "Spin kan alleen worden gemeten; orbitaal hoekimpuls kan niet"
          },
          {
            en: "There is no fundamental difference between them",
            es: "No hay diferencia fundamental entre ellos",
            de: "Es gibt keinen grundlegenden Unterschied zwischen ihnen",
            nl: "Er is geen fundamenteel verschil tussen hen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Orbital angular momentum arises from the spatial motion of particles (like an electron orbiting a nucleus) and is associated with the wave function's spatial dependence. Spin angular momentum, however, is an intrinsic quantum mechanical property that particles possess regardless of their motion - it's not related to spinning motion in the classical sense. Both follow angular momentum commutation relations but have different quantum numbers: orbital l is always integer (0,1,2,...), while spin s can be half-integer (1/2, 3/2, ...) or integer (0,1,2,...).",
          es: "El momento angular orbital surge del movimiento espacial de las partículas (como un electrón orbitando un núcleo) y está asociado con la dependencia espacial de la función de onda. El momento angular de espín, sin embargo, es una propiedad cuántico-mecánica intrínseca que las partículas poseen independientemente de su movimiento - no está relacionado con movimiento giratorio en el sentido clásico. Ambos siguen las relaciones de conmutación de momento angular pero tienen diferentes números cuánticos: orbital l es siempre entero (0,1,2,...), mientras que espín s puede ser semi-entero (1/2, 3/2, ...) o entero (0,1,2,...).",
          de: "Bahndrehimpuls entsteht durch die räumliche Bewegung von Teilchen (wie ein Elektron, das einen Kern umkreist) und ist mit der räumlichen Abhängigkeit der Wellenfunktion verbunden. Spin-Drehimpuls ist jedoch eine intrinsische quantenmechanische Eigenschaft, die Teilchen unabhängig von ihrer Bewegung besitzen - er ist nicht mit rotierender Bewegung im klassischen Sinne verbunden. Beide folgen Drehimpuls-Kommutatorrelationen, haben aber verschiedene Quantenzahlen: orbital l ist immer ganzzahlig (0,1,2,...), während Spin s halbzahlig (1/2, 3/2, ...) oder ganzzahlig (0,1,2,...) sein kann.",
          nl: "Orbitaal hoekimpuls ontstaat uit de ruimtelijke beweging van deeltjes (zoals een elektron dat rond een kern beweegt) en is geassocieerd met de ruimtelijke afhankelijkheid van de golffunctie. Spin hoekimpuls daarentegen is een intrinsieke quantummechanische eigenschap die deeltjes bezitten ongeacht hun beweging - het is niet gerelateerd aan draaiende beweging in klassieke zin. Beide volgen hoekimpuls commutatie-relaties maar hebben verschillende quantumgetallen: orbitaal l is altijd geheel (0,1,2,...), terwijl spin s half-geheel (1/2, 3/2, ...) of geheel (0,1,2,...) kan zijn."
        }
      },
      {
        question: {
          en: "What do the commutation relations [Li, Lj] = iℏεijk Lk tell us about angular momentum?",
          es: "¿Qué nos dicen las relaciones de conmutación [Li, Lj] = iℏεijk Lk sobre el momento angular?",
          de: "Was sagen uns die Kommutatorrelationen [Li, Lj] = iℏεijk Lk über Drehimpuls?",
          nl: "Wat vertellen de commutatie-relaties [Li, Lj] = iℏεijk Lk ons over hoekimpuls?"
        },
        options: [
          {
            en: "Different components of angular momentum cannot be simultaneously measured with perfect precision",
            es: "Los diferentes componentes del momento angular no pueden medirse simultáneamente con perfecta precisión",
            de: "Verschiedene Komponenten des Drehimpulses können nicht gleichzeitig mit perfekter Präzision gemessen werden",
            nl: "Verschillende componenten van hoekimpuls kunnen niet gelijktijdig met perfecte precisie worden gemeten"
          },
          {
            en: "All components of angular momentum can be measured simultaneously",
            es: "Todos los componentes del momento angular pueden medirse simultáneamente",
            de: "Alle Komponenten des Drehimpulses können gleichzeitig gemessen werden",
            nl: "Alle componenten van hoekimpuls kunnen gelijktijdig worden gemeten"
          },
          {
            en: "Angular momentum is not conserved in quantum mechanics",
            es: "El momento angular no se conserva en mecánica cuántica",
            de: "Drehimpuls ist in der Quantenmechanik nicht erhalten",
            nl: "Hoekimpuls is niet behouden in de quantummechanica"
          },
          {
            en: "Angular momentum components are always zero",
            es: "Los componentes del momento angular son siempre cero",
            de: "Drehimpulskomponenten sind immer null",
            nl: "Hoekimpulscomponenten zijn altijd nul"
          }
        ],
        correct: 0,
        explanation: {
          en: "The commutation relations [Li, Lj] = iℏεijk Lk (where εijk is the Levi-Civita symbol) show that different components of angular momentum do not commute with each other. This means they cannot be simultaneously measured with perfect precision - this is a fundamental uncertainty relation. However, L² commutes with each component Li, so the magnitude of angular momentum and one component (conventionally Lz) can be simultaneously determined. This is why we specify quantum states with quantum numbers l and ml.",
          es: "Las relaciones de conmutación [Li, Lj] = iℏεijk Lk (donde εijk es el símbolo de Levi-Civita) muestran que los diferentes componentes del momento angular no conmutan entre sí. Esto significa que no pueden medirse simultáneamente con perfecta precisión - esta es una relación de incertidumbre fundamental. Sin embargo, L² conmuta con cada componente Li, así que la magnitud del momento angular y un componente (convencionalmente Lz) pueden determinarse simultáneamente. Por esto especificamos estados cuánticos con números cuánticos l y ml.",
          de: "Die Kommutatorrelationen [Li, Lj] = iℏεijk Lk (wobei εijk das Levi-Civita-Symbol ist) zeigen, dass verschiedene Komponenten des Drehimpulses nicht miteinander kommutieren. Das bedeutet, sie können nicht gleichzeitig mit perfekter Präzision gemessen werden - dies ist eine fundamentale Unschärferelation. Jedoch kommutiert L² mit jeder Komponente Li, sodass der Betrag des Drehimpulses und eine Komponente (konventionell Lz) gleichzeitig bestimmt werden können. Deshalb spezifizieren wir Quantenzustände mit Quantenzahlen l und ml.",
          nl: "De commutatie-relaties [Li, Lj] = iℏεijk Lk (waar εijk het Levi-Civita symbool is) tonen dat verschillende componenten van hoekimpuls niet met elkaar commuteren. Dit betekent dat ze niet gelijktijdig met perfecte precisie kunnen worden gemeten - dit is een fundamentele onzekerheidsrelatie. L² commuteert echter wel met elke component Li, dus de grootte van hoekimpuls en één component (conventioneel Lz) kunnen gelijktijdig worden bepaald. Daarom specificeren we quantumtoestanden met quantumgetallen l en ml."
        }
      },
      {
        question: {
          en: "What is spin-orbit coupling and its physical origin?",
          es: "¿Qué es el acoplamiento espín-órbita y su origen físico?",
          de: "Was ist Spin-Bahn-Kopplung und ihr physikalischer Ursprung?",
          nl: "Wat is spin-baan koppeling en zijn fysieke oorsprong?"
        },
        options: [
          {
            en: "Interaction between electron spin and its orbital motion, arising from relativistic effects",
            es: "Interacción entre el espín del electrón y su movimiento orbital, surgiendo de efectos relativistas",
            de: "Wechselwirkung zwischen Elektronenspin und seiner Orbitalbewegung, entstehend aus relativistischen Effekten",
            nl: "Interactie tussen elektronenspin en zijn orbitaalbeweging, voortkomend uit relativistische effecten"
          },
          {
            en: "Direct magnetic interaction between electron and nucleus",
            es: "Interacción magnética directa entre electrón y núcleo",
            de: "Direkte magnetische Wechselwirkung zwischen Elektron und Kern",
            nl: "Directe magnetische interactie tussen elektron en kern"
          },
          {
            en: "Gravitational force between spinning particles",
            es: "Fuerza gravitacional entre partículas giratorias",
            de: "Gravitationskraft zwischen rotierenden Teilchen",
            nl: "Gravitatiekracht tussen draaiende deeltjes"
          },
          {
            en: "Electrostatic repulsion between electrons",
            es: "Repulsión electrostática entre electrones",
            de: "Elektrostatische Abstoßung zwischen Elektronen",
            nl: "Elektrostatische afstoting tussen elektronen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Spin-orbit coupling is the interaction between an electron's intrinsic spin angular momentum and its orbital angular momentum. It arises from relativistic effects: in the electron's rest frame, the nucleus appears to orbit around it, creating a magnetic field that interacts with the electron's magnetic moment due to spin. This coupling lifts the degeneracy of atomic energy levels, causing fine structure in atomic spectra. The coupling strength is proportional to Z⁴ (where Z is atomic number), making it more significant in heavy atoms.",
          es: "El acoplamiento espín-órbita es la interacción entre el momento angular de espín intrínseco del electrón y su momento angular orbital. Surge de efectos relativistas: en el sistema de referencia del electrón, el núcleo parece orbitar a su alrededor, creando un campo magnético que interactúa con el momento magnético del electrón debido al espín. Este acoplamiento rompe la degeneración de los niveles de energía atómicos, causando estructura fina en espectros atómicos. La fuerza del acoplamiento es proporcional a Z⁴ (donde Z es el número atómico), haciéndolo más significativo en átomos pesados.",
          de: "Spin-Bahn-Kopplung ist die Wechselwirkung zwischen dem intrinsischen Spin-Drehimpuls eines Elektrons und seinem Bahndrehimpuls. Sie entsteht aus relativistischen Effekten: im Ruhesystem des Elektrons scheint der Kern um es zu kreisen, wodurch ein Magnetfeld entsteht, das mit dem magnetischen Moment des Elektrons aufgrund des Spins wechselwirkt. Diese Kopplung hebt die Entartung atomarer Energieniveaus auf und verursacht Feinstruktur in Atomspektren. Die Kopplungsstärke ist proportional zu Z⁴ (wobei Z die Ordnungszahl ist), wodurch sie in schweren Atomen bedeutsamer wird.",
          nl: "Spin-baan koppeling is de interactie tussen een elektron's intrinsieke spin hoekimpuls en zijn orbitaal hoekimpuls. Het ontstaat uit relativistische effecten: in het rustframe van het elektron lijkt de kern eromheen te bewegen, wat een magnetisch veld creëert dat interacteert met het magnetische moment van het elektron vanwege spin. Deze koppeling heft de degeneratie van atomaire energieniveaus op, wat fijnstructuur in atomaire spectra veroorzaakt. De koppelingskracht is evenredig met Z⁴ (waar Z het atoomgetal is), waardoor het significanter wordt in zware atomen."
        }
      },
      {
        question: {
          en: "What is the total angular momentum quantum number j and how is it related to l and s?",
          es: "¿Qué es el número cuántico de momento angular total j y cómo se relaciona con l y s?",
          de: "Was ist die Gesamtdrehimpuls-Quantenzahl j und wie hängt sie mit l und s zusammen?",
          nl: "Wat is het totaal hoekimpuls quantumgetal j en hoe verhoudt het zich tot l en s?"
        },
        options: [
          {
            en: "j represents |l ± s|, taking values from |l - s| to l + s in integer steps",
            es: "j representa |l ± s|, tomando valores desde |l - s| hasta l + s en pasos enteros",
            de: "j repräsentiert |l ± s|, nimmt Werte von |l - s| bis l + s in ganzzahligen Schritten",
            nl: "j vertegenwoordigt |l ± s|, met waarden van |l - s| tot l + s in gehele stappen"
          },
          {
            en: "j = l + s always",
            es: "j = l + s siempre",
            de: "j = l + s immer",
            nl: "j = l + s altijd"
          },
          {
            en: "j = l - s always",
            es: "j = l - s siempre",
            de: "j = l - s immer",
            nl: "j = l - s altijd"
          },
          {
            en: "j is independent of both l and s",
            es: "j es independiente tanto de l como de s",
            de: "j ist unabhängig von sowohl l als auch s",
            nl: "j is onafhankelijk van zowel l als s"
          }
        ],
        correct: 0,
        explanation: {
          en: "The total angular momentum quantum number j results from the vector addition of orbital (l) and spin (s) angular momentum. Due to quantum mechanical rules for adding angular momentum, j can take values from |l - s| to l + s in integer steps. For an electron with spin s = 1/2: if l = 0, then j = 1/2; if l = 1, then j = 1/2 or 3/2; if l = 2, then j = 3/2 or 5/2, etc. This coupling scheme explains the fine structure of atomic spectra.",
          es: "El número cuántico de momento angular total j resulta de la suma vectorial del momento angular orbital (l) y de espín (s). Debido a las reglas cuántico-mecánicas para sumar momento angular, j puede tomar valores desde |l - s| hasta l + s en pasos enteros. Para un electrón con espín s = 1/2: si l = 0, entonces j = 1/2; si l = 1, entonces j = 1/2 o 3/2; si l = 2, entonces j = 3/2 o 5/2, etc. Este esquema de acoplamiento explica la estructura fina de espectros atómicos.",
          de: "Die Gesamtdrehimpuls-Quantenzahl j ergibt sich aus der Vektoraddition von Bahn- (l) und Spin- (s) Drehimpuls. Aufgrund quantenmechanischer Regeln für die Addition von Drehimpuls kann j Werte von |l - s| bis l + s in ganzzahligen Schritten annehmen. Für ein Elektron mit Spin s = 1/2: wenn l = 0, dann j = 1/2; wenn l = 1, dann j = 1/2 oder 3/2; wenn l = 2, dann j = 3/2 oder 5/2, usw. Dieses Kopplungsschema erklärt die Feinstruktur von Atomspektren.",
          nl: "Het totaal hoekimpuls quantumgetal j resulteert uit de vectoroptelling van orbitaal (l) en spin (s) hoekimpuls. Vanwege quantummechanische regels voor het optellen van hoekimpuls kan j waarden aannemen van |l - s| tot l + s in gehele stappen. Voor een elektron met spin s = 1/2: als l = 0, dan j = 1/2; als l = 1, dan j = 1/2 of 3/2; als l = 2, dan j = 3/2 of 5/2, enz. Dit koppelingschema verklaart de fijnstructuur van atomaire spectra."
        }
      },
      {
        question: {
          en: "What is the Pauli exclusion principle and how does it relate to electron spin?",
          es: "¿Qué es el principio de exclusión de Pauli y cómo se relaciona con el espín del electrón?",
          de: "Was ist das Pauli-Ausschlussprinzip und wie bezieht es sich auf Elektronenspin?",
          nl: "Wat is het Pauli-uitsluitingsprincipe en hoe verhoudt het zich tot elektronenspin?"
        },
        options: [
          {
            en: "No two electrons can occupy the same quantum state; at most two electrons per orbital with opposite spins",
            es: "Ningún par de electrones puede ocupar el mismo estado cuántico; máximo dos electrones por orbital con espines opuestos",
            de: "Keine zwei Elektronen können denselben Quantenzustand besetzen; höchstens zwei Elektronen pro Orbital mit entgegengesetzten Spins",
            nl: "Geen twee elektronen kunnen dezelfde quantumtoestand bezetten; hoogstens twee elektronen per orbitaal met tegengestelde spins"
          },
          {
            en: "All electrons must have the same spin orientation",
            es: "Todos los electrones deben tener la misma orientación de espín",
            de: "Alle Elektronen müssen dieselbe Spin-Orientierung haben",
            nl: "Alle elektronen moeten dezelfde spin-oriëntatie hebben"
          },
          {
            en: "Electrons can only exist in pairs",
            es: "Los electrones solo pueden existir en pares",
            de: "Elektronen können nur paarweise existieren",
            nl: "Elektronen kunnen alleen in paren bestaan"
          },
          {
            en: "Spin has no relationship to the exclusion principle",
            es: "El espín no tiene relación con el principio de exclusión",
            de: "Spin hat keine Beziehung zum Ausschlussprinzip",
            nl: "Spin heeft geen relatie met het uitsluitingsprincipe"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Pauli exclusion principle states that no two fermions (particles with half-integer spin, like electrons) can occupy the same quantum state simultaneously. For electrons in atoms, this means each orbital (characterized by n, l, ml) can hold at most two electrons, and they must have opposite spins (ms = +1/2 and ms = -1/2). This principle explains the shell structure of atoms, chemical bonding, and the stability of matter. It arises from the antisymmetric nature of fermionic wave functions.",
          es: "El principio de exclusión de Pauli establece que no hay dos fermiones (partículas con espín semi-entero, como electrones) que puedan ocupar el mismo estado cuántico simultáneamente. Para electrones en átomos, esto significa que cada orbital (caracterizado por n, l, ml) puede contener máximo dos electrones, y deben tener espines opuestos (ms = +1/2 y ms = -1/2). Este principio explica la estructura de capas de átomos, enlaces químicos, y la estabilidad de la materia. Surge de la naturaleza antisimétrica de las funciones de onda fermiónicas.",
          de: "Das Pauli-Ausschlussprinzip besagt, dass keine zwei Fermionen (Teilchen mit halbzahligem Spin, wie Elektronen) gleichzeitig denselben Quantenzustand besetzen können. Für Elektronen in Atomen bedeutet das, dass jedes Orbital (charakterisiert durch n, l, ml) höchstens zwei Elektronen enthalten kann, und sie müssen entgegengesetzte Spins haben (ms = +1/2 und ms = -1/2). Dieses Prinzip erklärt die Schalenstruktur von Atomen, chemische Bindungen und die Stabilität der Materie. Es entsteht aus der antisymmetrischen Natur fermionischer Wellenfunktionen.",
          nl: "Het Pauli-uitsluitingsprincipe stelt dat geen twee fermionen (deeltjes met half-geheel spin, zoals elektronen) gelijktijdig dezelfde quantumtoestand kunnen bezetten. Voor elektronen in atomen betekent dit dat elk orbitaal (gekarakteriseerd door n, l, ml) hoogstens twee elektronen kan bevatten, en ze moeten tegengestelde spins hebben (ms = +1/2 en ms = -1/2). Dit principe verklaart de schalstructuur van atomen, chemische binding, en de stabiliteit van materie. Het ontstaat uit de antisymmetrische aard van fermionische golffuncties."
        }
      },
      {
        question: {
          en: "What are spherical harmonics and their role in angular momentum eigenfunctions?",
          es: "¿Qué son los armónicos esféricos y su papel en las eigenfunciones de momento angular?",
          de: "Was sind Kugelflächenfunktionen und ihre Rolle in Drehimpuls-Eigenfunktionen?",
          nl: "Wat zijn sferische harmonischen en hun rol in hoekimpuls eigenfuncties?"
        },
        options: [
          {
            en: "Mathematical functions Ylᵐ(θ,φ) that describe angular dependence of wave functions in spherical coordinates",
            es: "Funciones matemáticas Ylᵐ(θ,φ) que describen la dependencia angular de funciones de onda en coordenadas esféricas",
            de: "Mathematische Funktionen Ylᵐ(θ,φ), die die Winkelabhängigkeit von Wellenfunktionen in Kugelkoordinaten beschreiben",
            nl: "Wiskundige functies Ylᵐ(θ,φ) die de hoekafhankelijkheid van golffuncties in sferische coördinaten beschrijven"
          },
          {
            en: "Classical trajectories of particles in circular motion",
            es: "Trayectorias clásicas de partículas en movimiento circular",
            de: "Klassische Bahnen von Teilchen in Kreisbewegung",
            nl: "Klassieke trajecten van deeltjes in circulaire beweging"
          },
          {
            en: "Musical harmonics produced by spherical instruments",
            es: "Armónicos musicales producidos por instrumentos esféricos",
            de: "Musikalische Harmonien, die von kugelförmigen Instrumenten erzeugt werden",
            nl: "Muzikale harmonischen geproduceerd door sferische instrumenten"
          },
          {
            en: "Energy levels in harmonic oscillator potentials",
            es: "Niveles de energía en potenciales de oscilador armónico",
            de: "Energieniveaus in harmonischen Oszillatorpotentialen",
            nl: "Energieniveaus in harmonische oscillator potentialen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Spherical harmonics Ylᵐ(θ,φ) are special functions that arise as the angular part of solutions to Laplace's equation in spherical coordinates. They are the eigenfunctions of the angular momentum operators L² and Lz, with eigenvalues ℏ²l(l+1) and ℏml respectively. These functions describe the angular distribution of quantum states in atoms and appear in the wave functions of hydrogen-like atoms. They are orthonormal and form a complete basis for functions on the sphere, making them fundamental in quantum mechanics, electromagnetism, and many other areas of physics.",
          es: "Los armónicos esféricos Ylᵐ(θ,φ) son funciones especiales que surgen como la parte angular de soluciones a la ecuación de Laplace en coordenadas esféricas. Son las eigenfunciones de los operadores de momento angular L² y Lz, con valores propios ℏ²l(l+1) y ℏml respectivamente. Estas funciones describen la distribución angular de estados cuánticos en átomos y aparecen en las funciones de onda de átomos similares al hidrógeno. Son ortonormales y forman una base completa para funciones en la esfera, haciéndolas fundamentales en mecánica cuántica, electromagnetismo, y muchas otras áreas de la física.",
          de: "Kugelflächenfunktionen Ylᵐ(θ,φ) sind spezielle Funktionen, die als Winkelteil von Lösungen der Laplace-Gleichung in Kugelkoordinaten auftreten. Sie sind die Eigenfunktionen der Drehimpulsoperatoren L² und Lz mit Eigenwerten ℏ²l(l+1) bzw. ℏml. Diese Funktionen beschreiben die Winkelverteilung von Quantenzuständen in Atomen und erscheinen in den Wellenfunktionen wasserstoffähnlicher Atome. Sie sind orthonormal und bilden eine vollständige Basis für Funktionen auf der Kugel, wodurch sie in Quantenmechanik, Elektromagnetismus und vielen anderen Bereichen der Physik fundamental sind.",
          nl: "Sferische harmonischen Ylᵐ(θ,φ) zijn speciale functies die ontstaan als het hoekdeel van oplossingen voor de Laplace-vergelijking in sferische coördinaten. Ze zijn de eigenfuncties van de hoekimpulsoperatoren L² en Lz, met eigenwaarden ℏ²l(l+1) en ℏml respectievelijk. Deze functies beschrijven de hoekverdeling van quantumtoestanden in atomen en verschijnen in de golffuncties van waterstof-achtige atomen. Ze zijn orthonormaal en vormen een complete basis voor functies op de bol, waardoor ze fundamenteel zijn in quantummechanica, elektromagnetisme, en veel andere gebieden van de fysica."
        }
      },
      {
        question: {
          en: "How does the addition of angular momenta work in quantum mechanics?",
          es: "¿Cómo funciona la suma de momentos angulares en mecánica cuántica?",
          de: "Wie funktioniert die Addition von Drehimpulsen in der Quantenmechanik?",
          nl: "Hoe werkt de optelling van hoekimpulsen in de quantummechanica?"
        },
        options: [
          {
            en: "Vector addition with quantum rules: |J₁ - J₂| ≤ J ≤ J₁ + J₂, using Clebsch-Gordan coefficients",
            es: "Suma vectorial con reglas cuánticas: |J₁ - J₂| ≤ J ≤ J₁ + J₂, usando coeficientes de Clebsch-Gordan",
            de: "Vektoraddition mit Quantenregeln: |J₁ - J₂| ≤ J ≤ J₁ + J₂, unter Verwendung von Clebsch-Gordan-Koeffizienten",
            nl: "Vectoroptelling met quantumregels: |J₁ - J₂| ≤ J ≤ J₁ + J₂, gebruik makend van Clebsch-Gordan coëfficiënten"
          },
          {
            en: "Simple algebraic addition: J = J₁ + J₂ always",
            es: "Suma algebraica simple: J = J₁ + J₂ siempre",
            de: "Einfache algebraische Addition: J = J₁ + J₂ immer",
            nl: "Eenvoudige algebraïsche optelling: J = J₁ + J₂ altijd"
          },
          {
            en: "Angular momenta cannot be added in quantum mechanics",
            es: "Los momentos angulares no pueden sumarse en mecánica cuántica",
            de: "Drehimpulse können in der Quantenmechanik nicht addiert werden",
            nl: "Hoekimpulsen kunnen niet worden opgeteld in de quantummechanica"
          },
          {
            en: "Only identical angular momenta can be added",
            es: "Solo momentos angulares idénticos pueden sumarse",
            de: "Nur identische Drehimpulse können addiert werden",
            nl: "Alleen identieke hoekimpulsen kunnen worden opgeteld"
          }
        ],
        correct: 0,
        explanation: {
          en: "In quantum mechanics, angular momentum addition follows specific rules different from classical vector addition. When combining two angular momenta J₁ and J₂, the total angular momentum J can take quantized values from |J₁ - J₂| to J₁ + J₂ in integer steps. The transformation between uncoupled |j₁m₁⟩|j₂m₂⟩ and coupled |JM⟩ basis states involves Clebsch-Gordan coefficients. This is crucial for understanding atomic spectroscopy, nuclear physics, and particle physics, where multiple sources of angular momentum must be combined.",
          es: "En mecánica cuántica, la suma de momento angular sigue reglas específicas diferentes de la suma vectorial clásica. Al combinar dos momentos angulares J₁ y J₂, el momento angular total J puede tomar valores cuantizados desde |J₁ - J₂| hasta J₁ + J₂ en pasos enteros. La transformación entre estados base no acoplados |j₁m₁⟩|j₂m₂⟩ y acoplados |JM⟩ involucra coeficientes de Clebsch-Gordan. Esto es crucial para entender espectroscopia atómica, física nuclear y física de partículas, donde múltiples fuentes de momento angular deben combinarse.",
          de: "In der Quantenmechanik folgt die Drehimpulsaddition spezifischen Regeln, die sich von der klassischen Vektoraddition unterscheiden. Beim Kombinieren zweier Drehimpulse J₁ und J₂ kann der Gesamtdrehimpuls J quantisierte Werte von |J₁ - J₂| bis J₁ + J₂ in ganzzahligen Schritten annehmen. Die Transformation zwischen ungekoppelten |j₁m₁⟩|j₂m₂⟩ und gekoppelten |JM⟩ Basiszuständen beinhaltet Clebsch-Gordan-Koeffizienten. Dies ist entscheidend für das Verständnis der Atomspektroskopie, Kernphysik und Teilchenphysik, wo mehrere Quellen von Drehimpuls kombiniert werden müssen.",
          nl: "In de quantummechanica volgt hoekimpulsoptelling specifieke regels die verschillen van klassieke vectoroptelling. Bij het combineren van twee hoekimpulsen J₁ en J₂ kan het totale hoekimpuls J gekwantiseerde waarden aannemen van |J₁ - J₂| tot J₁ + J₂ in gehele stappen. De transformatie tussen ongekoppelde |j₁m₁⟩|j₂m₂⟩ en gekoppelde |JM⟩ basistoestanden behelst Clebsch-Gordan coëfficiënten. Dit is cruciaal voor het begrijpen van atomaire spectroscopie, kernfysica, en deeltjesfysica, waar meerdere bronnen van hoekimpuls moeten worden gecombineerd."
        }
      },
      {
        question: {
          en: "What is the physical significance of the magnetic quantum number ml?",
          es: "¿Cuál es la importancia física del número cuántico magnético ml?",
          de: "Was ist die physikalische Bedeutung der magnetischen Quantenzahl ml?",
          nl: "Wat is de fysieke betekenis van het magnetische quantumgetal ml?"
        },
        options: [
          {
            en: "ml determines the spatial orientation of angular momentum and orbital shapes in magnetic fields",
            es: "ml determina la orientación espacial del momento angular y formas orbitales en campos magnéticos",
            de: "ml bestimmt die räumliche Orientierung des Drehimpulses und Orbitalformen in Magnetfeldern",
            nl: "ml bepaalt de ruimtelijke oriëntatie van hoekimpuls en orbitaalvormen in magnetische velden"
          },
          {
            en: "ml represents the mass of the electron",
            es: "ml representa la masa del electrón",
            de: "ml repräsentiert die Masse des Elektrons",
            nl: "ml vertegenwoordigt de massa van het elektron"
          },
          {
            en: "ml is the magnetic moment of the nucleus",
            es: "ml es el momento magnético del núcleo",
            de: "ml ist das magnetische Moment des Kerns",
            nl: "ml is het magnetische moment van de kern"
          },
          {
            en: "ml has no physical meaning",
            es: "ml no tiene significado físico",
            de: "ml hat keine physikalische Bedeutung",
            nl: "ml heeft geen fysieke betekenis"
          }
        ],
        correct: 0,
        explanation: {
          en: "The magnetic quantum number ml determines the z-component of orbital angular momentum: Lz = ℏml. It specifies the spatial orientation of the angular momentum vector and the orbital in three-dimensional space. In the absence of external fields, orbitals with different ml values (but same n and l) have the same energy (degeneracy). However, in magnetic fields (Zeeman effect), this degeneracy is lifted and different ml states have different energies. ml also determines the three-dimensional shapes and orientations of atomic orbitals (e.g., px, py, pz orbitals).",
          es: "El número cuántico magnético ml determina la componente z del momento angular orbital: Lz = ℏml. Especifica la orientación espacial del vector de momento angular y el orbital en el espacio tridimensional. En ausencia de campos externos, orbitales con diferentes valores de ml (pero mismo n y l) tienen la misma energía (degeneración). Sin embargo, en campos magnéticos (efecto Zeeman), esta degeneración se rompe y diferentes estados ml tienen diferentes energías. ml también determina las formas y orientaciones tridimensionales de orbitales atómicos (ej. orbitales px, py, pz).",
          de: "Die magnetische Quantenzahl ml bestimmt die z-Komponente des Bahndrehimpulses: Lz = ℏml. Sie spezifiziert die räumliche Orientierung des Drehimpulsvektors und des Orbitals im dreidimensionalen Raum. In Abwesenheit äußerer Felder haben Orbitale mit verschiedenen ml-Werten (aber gleichem n und l) dieselbe Energie (Entartung). In Magnetfeldern (Zeeman-Effekt) wird diese Entartung jedoch aufgehoben und verschiedene ml-Zustände haben verschiedene Energien. ml bestimmt auch die dreidimensionalen Formen und Orientierungen von Atomorbitalen (z.B. px, py, pz Orbitale).",
          nl: "Het magnetische quantumgetal ml bepaalt de z-component van orbitaal hoekimpuls: Lz = ℏml. Het specificeert de ruimtelijke oriëntatie van de hoekimpulsvector en het orbitaal in driedimensionale ruimte. Bij afwezigheid van externe velden hebben orbitalen met verschillende ml waarden (maar dezelfde n en l) dezelfde energie (degeneratie). In magnetische velden (Zeeman-effect) wordt deze degeneratie echter opgeheven en hebben verschillende ml toestanden verschillende energieën. ml bepaalt ook de driedimensionale vormen en oriëntaties van atomaire orbitalen (bijv. px, py, pz orbitalen)."
        }
      },
      {
        question: {
          en: "What is the spin magnetic moment of an electron?",
          es: "¿Cuál es el momento magnético de espín de un electrón?",
          de: "Was ist das magnetische Spinmoment eines Elektrons?",
          nl: "Wat is het magnetische spinmoment van een elektron?"
        },
        options: [
          {
            en: "μs = -gs(μB/ℏ)S, where gs ≈ 2.002 is the g-factor and μB is the Bohr magneton",
            es: "μs = -gs(μB/ℏ)S, donde gs ≈ 2.002 es el factor g y μB es el magnetón de Bohr",
            de: "μs = -gs(μB/ℏ)S, wobei gs ≈ 2.002 der g-Faktor und μB das Bohr-Magneton ist",
            nl: "μs = -gs(μB/ℏ)S, waar gs ≈ 2.002 de g-factor en μB het Bohr magneton is"
          },
          {
            en: "μs = -μB, exactly one Bohr magneton",
            es: "μs = -μB, exactamente un magnetón de Bohr",
            de: "μs = -μB, genau ein Bohr-Magneton",
            nl: "μs = -μB, precies één Bohr magneton"
          },
          {
            en: "μs = 0, electrons have no magnetic moment",
            es: "μs = 0, los electrones no tienen momento magnético",
            de: "μs = 0, Elektronen haben kein magnetisches Moment",
            nl: "μs = 0, elektronen hebben geen magnetisch moment"
          },
          {
            en: "μs = e/2mc, independent of spin",
            es: "μs = e/2mc, independiente del espín",
            de: "μs = e/2mc, unabhängig vom Spin",
            nl: "μs = e/2mc, onafhankelijk van spin"
          }
        ],
        correct: 0,
        explanation: {
          en: "The electron's spin magnetic moment is μs = -gs(μB/ℏ)S, where gs is the gyromagnetic ratio (g-factor) for spin, approximately 2.002. This differs from the orbital magnetic moment by a factor of 2, which was a puzzle before the development of relativistic quantum mechanics. The Bohr magneton μB = eℏ/2me is the natural unit for atomic magnetic moments. The negative sign indicates that the magnetic moment is antiparallel to the spin angular momentum.",
          es: "El momento magnético de espín del electrón es μs = -gs(μB/ℏ)S, donde gs es la relación giromagnética (factor g) para espín, aproximadamente 2.002. Esto difiere del momento magnético orbital por un factor de 2, lo que fue un enigma antes del desarrollo de la mecánica cuántica relativista. El magnetón de Bohr μB = eℏ/2me es la unidad natural para momentos magnéticos atómicos. El signo negativo indica que el momento magnético es antiparalelo al momento angular de espín.",
          de: "Das magnetische Spinmoment des Elektrons ist μs = -gs(μB/ℏ)S, wobei gs das gyromagnetische Verhältnis (g-Faktor) für Spin ist, etwa 2.002. Dies unterscheidet sich vom orbitalen magnetischen Moment um einen Faktor 2, was ein Rätsel war vor der Entwicklung der relativistischen Quantenmechanik. Das Bohr-Magneton μB = eℏ/2me ist die natürliche Einheit für atomare magnetische Momente. Das negative Vorzeichen zeigt an, dass das magnetische Moment antiparallel zum Spin-Drehimpuls ist.",
          nl: "Het magnetische spinmoment van het elektron is μs = -gs(μB/ℏ)S, waar gs de gyromagnetische verhouding (g-factor) voor spin is, ongeveer 2.002. Dit verschilt van het orbitale magnetische moment met een factor 2, wat een puzzel was voor de ontwikkeling van relativistische quantummechanica. Het Bohr magneton μB = eℏ/2me is de natuurlijke eenheid voor atomaire magnetische momenten. Het negatieve teken geeft aan dat het magnetische moment antiparallel is aan het spin hoekimpuls."
        }
      },
      {
        question: {
          en: "What is LS coupling (Russell-Saunders coupling) in multi-electron atoms?",
          es: "¿Qué es el acoplamiento LS (acoplamiento Russell-Saunders) en átomos multi-electrónicos?",
          de: "Was ist LS-Kopplung (Russell-Saunders-Kopplung) in Mehrelektronenatomen?",
          nl: "Wat is LS koppeling (Russell-Saunders koppeling) in multi-elektron atomen?"
        },
        options: [
          {
            en: "Scheme where individual orbital momenta couple first, then individual spins couple, then L and S couple to give J",
            es: "Esquema donde momentos orbitales individuales se acoplan primero, luego espines individuales se acoplan, después L y S se acoplan para dar J",
            de: "Schema, wobei individuelle Bahndrehimpulse zuerst koppeln, dann individuelle Spins koppeln, dann L und S zu J koppeln",
            nl: "Schema waarbij individuele orbitale impulsen eerst koppelen, dan individuele spins koppelen, dan L en S koppelen om J te geven"
          },
          {
            en: "Each electron's l and s couple individually before combining with others",
            es: "El l y s de cada electrón se acoplan individualmente antes de combinarse con otros",
            de: "Jedes Elektrons l und s koppeln individuell, bevor sie mit anderen kombiniert werden",
            nl: "Elk elektron's l en s koppelen individueel voordat ze met anderen combineren"
          },
          {
            en: "Only applies to hydrogen-like atoms",
            es: "Solo aplica a átomos similares al hidrógeno",
            de: "Gilt nur für wasserstoffähnliche Atome",
            nl: "Geldt alleen voor waterstof-achtige atomen"
          },
          {
            en: "Direct coupling between nuclear and electronic angular momenta",
            es: "Acoplamiento directo entre momentos angulares nuclear y electrónico",
            de: "Direkte Kopplung zwischen nuklearen und elektronischen Drehimpulsen",
            nl: "Directe koppeling tussen nucleaire en elektronische hoekimpulsen"
          }
        ],
        correct: 0,
        explanation: {
          en: "LS coupling (Russell-Saunders coupling) is a scheme for combining angular momenta in light atoms where spin-orbit coupling is weak compared to electron-electron interactions. First, all orbital angular momenta li couple to give total orbital L = Σli. Then all spin angular momenta si couple to give total spin S = Σsi. Finally, L and S couple to give the total angular momentum J. This gives rise to term symbols ²S+1LJ and explains the multiplet structure of atomic spectra in light elements.",
          es: "El acoplamiento LS (acoplamiento Russell-Saunders) es un esquema para combinar momentos angulares en átomos ligeros donde el acoplamiento espín-órbita es débil comparado con interacciones electrón-electrón. Primero, todos los momentos angulares orbitales li se acoplan para dar orbital total L = Σli. Luego todos los momentos angulares de espín si se acoplan para dar espín total S = Σsi. Finalmente, L y S se acoplan para dar el momento angular total J. Esto da lugar a símbolos de término ²S+1LJ y explica la estructura de multiplete de espectros atómicos en elementos ligeros.",
          de: "LS-Kopplung (Russell-Saunders-Kopplung) ist ein Schema zur Kombination von Drehimpulsen in leichten Atomen, wo Spin-Bahn-Kopplung schwach ist verglichen mit Elektron-Elektron-Wechselwirkungen. Zuerst koppeln alle Bahndrehimpulse li zum gesamten Bahndrehimpuls L = Σli. Dann koppeln alle Spin-Drehimpulse si zum Gesamtspin S = Σsi. Schließlich koppeln L und S zum Gesamtdrehimpuls J. Dies führt zu Termsymbolen ²S+1LJ und erklärt die Multiplettstruktur von Atomspektren in leichten Elementen.",
          nl: "LS koppeling (Russell-Saunders koppeling) is een schema voor het combineren van hoekimpulsen in lichte atomen waarbij spin-baan koppeling zwak is vergeleken met elektron-elektron interacties. Eerst koppelen alle orbitale hoekimpulsen li om totaal orbitaal L = Σli te geven. Dan koppelen alle spin hoekimpulsen si om totale spin S = Σsi te geven. Tenslotte koppelen L en S om de totale hoekimpuls J te geven. Dit geeft aanleiding tot termsymbolen ²S+1LJ en verklaart de multipletstructuur van atomaire spectra in lichte elementen."
        }
      },
      {
        question: {
          en: "What is jj coupling and when is it applicable?",
          es: "¿Qué es el acoplamiento jj y cuándo es aplicable?",
          de: "Was ist jj-Kopplung und wann ist sie anwendbar?",
          nl: "Wat is jj koppeling en wanneer is het toepasbaar?"
        },
        options: [
          {
            en: "Coupling scheme where each electron's l and s couple first to give j, then individual j values couple; used in heavy atoms",
            es: "Esquema de acoplamiento donde l y s de cada electrón se acoplan primero para dar j, luego valores j individuales se acoplan; usado en átomos pesados",
            de: "Kopplungsschema, wobei jedes Elektrons l und s zuerst zu j koppeln, dann individuelle j-Werte koppeln; verwendet in schweren Atomen",
            nl: "Koppelingsschema waarbij elk elektron's l en s eerst koppelen om j te geven, dan individuele j waarden koppelen; gebruikt in zware atomen"
          },
          {
            en: "Identical to LS coupling but with different notation",
            es: "Idéntico al acoplamiento LS pero con notación diferente",
            de: "Identisch mit LS-Kopplung aber mit verschiedener Notation",
            nl: "Identiek aan LS koppeling maar met verschillende notatie"
          },
          {
            en: "Only applicable to atoms with exactly two electrons",
            es: "Solo aplicable a átomos con exactamente dos electrones",
            de: "Nur anwendbar auf Atome mit genau zwei Elektronen",
            nl: "Alleen toepasbaar op atomen met precies twee elektronen"
          },
          {
            en: "Coupling between electron and nuclear angular momentum",
            es: "Acoplamiento entre momento angular electrónico y nuclear",
            de: "Kopplung zwischen elektronischem und nuklearem Drehimpuls",
            nl: "Koppeling tussen elektronisch en nucleair hoekimpuls"
          }
        ],
        correct: 0,
        explanation: {
          en: "jj coupling is an alternative to LS coupling used when spin-orbit coupling is strong compared to electron-electron interactions, typically in heavy atoms. In this scheme, each electron's orbital and spin angular momenta (l and s) couple first to form individual total angular momenta j = l ± s. These individual j values then couple to give the total atomic angular momentum J. This coupling is more appropriate for inner electrons in heavy atoms where the strong nuclear charge creates significant spin-orbit coupling.",
          es: "El acoplamiento jj es una alternativa al acoplamiento LS usado cuando el acoplamiento espín-órbita es fuerte comparado con interacciones electrón-electrón, típicamente en átomos pesados. En este esquema, los momentos angulares orbital y de espín de cada electrón (l y s) se acoplan primero para formar momentos angulares totales individuales j = l ± s. Estos valores j individuales luego se acoplan para dar el momento angular atómico total J. Este acoplamiento es más apropiado para electrones internos en átomos pesados donde la carga nuclear fuerte crea acoplamiento espín-órbita significativo.",
          de: "jj-Kopplung ist eine Alternative zur LS-Kopplung, die verwendet wird, wenn Spin-Bahn-Kopplung stark ist verglichen mit Elektron-Elektron-Wechselwirkungen, typischerweise in schweren Atomen. In diesem Schema koppeln zuerst die Bahn- und Spin-Drehimpulse jedes Elektrons (l und s) zu individuellen Gesamtdrehimpulsen j = l ± s. Diese individuellen j-Werte koppeln dann zum atomaren Gesamtdrehimpuls J. Diese Kopplung ist geeigneter für innere Elektronen in schweren Atomen, wo die starke Kernladung bedeutende Spin-Bahn-Kopplung erzeugt.",
          nl: "jj koppeling is een alternatief voor LS koppeling gebruikt wanneer spin-baan koppeling sterk is vergeleken met elektron-elektron interacties, typisch in zware atomen. In dit schema koppelen eerst elk elektron's orbitale en spin hoekimpulsen (l en s) om individuele totale hoekimpulsen j = l ± s te vormen. Deze individuele j waarden koppelen dan om de totale atomaire hoekimpuls J te geven. Deze koppeling is geschikter voor binnenste elektronen in zware atomen waar de sterke kernlading significante spin-baan koppeling creëert."
        }
      },
      {
        question: {
          en: "What is the Zeeman effect and how does it relate to magnetic quantum numbers?",
          es: "¿Qué es el efecto Zeeman y cómo se relaciona con números cuánticos magnéticos?",
          de: "Was ist der Zeeman-Effekt und wie bezieht er sich auf magnetische Quantenzahlen?",
          nl: "Wat is het Zeeman-effect en hoe verhoudt het zich tot magnetische quantumgetallen?"
        },
        options: [
          {
            en: "Splitting of atomic energy levels in magnetic fields, with splitting proportional to magnetic quantum numbers",
            es: "División de niveles de energía atómicos en campos magnéticos, con división proporcional a números cuánticos magnéticos",
            de: "Aufspaltung atomarer Energieniveaus in Magnetfeldern, mit Aufspaltung proportional zu magnetischen Quantenzahlen",
            nl: "Splitsing van atomaire energieniveaus in magnetische velden, met splitsing evenredig aan magnetische quantumgetallen"
          },
          {
            en: "Complete removal of electronic energy levels in strong fields",
            es: "Eliminación completa de niveles de energía electrónicos en campos fuertes",
            de: "Vollständige Entfernung elektronischer Energieniveaus in starken Feldern",
            nl: "Volledige verwijdering van elektronische energieniveaus in sterke velden"
          },
          {
            en: "Magnetic field effect only on nuclear energy levels",
            es: "Efecto de campo magnético solo en niveles de energía nuclear",
            de: "Magnetfeldeffekt nur auf nukleare Energieniveaus",
            nl: "Magnetisch veld effect alleen op nucleaire energieniveaus"
          },
          {
            en: "Temperature-dependent broadening of spectral lines",
            es: "Ensanchamiento dependiente de temperatura de líneas espectrales",
            de: "Temperaturabhängige Verbreiterung von Spektrallinien",
            nl: "Temperatuurafhankelijke verbreding van spectrale lijnen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Zeeman effect is the splitting of atomic spectral lines in the presence of a magnetic field. This occurs because the magnetic field interacts with the magnetic moments associated with orbital and spin angular momentum. In weak fields (normal Zeeman effect), the energy shift is ΔE = μBgJmJB, where gJ is the Landé g-factor and mJ is the total magnetic quantum number. Different mJ states, which are degenerate in the absence of a field, acquire different energies, leading to spectral line splitting. This effect confirmed the quantization of angular momentum and magnetic moments.",
          es: "El efecto Zeeman es la división de líneas espectrales atómicas en presencia de un campo magnético. Esto ocurre porque el campo magnético interactúa con los momentos magnéticos asociados con momento angular orbital y de espín. En campos débiles (efecto Zeeman normal), el cambio de energía es ΔE = μBgJmJB, donde gJ es el factor g de Landé y mJ es el número cuántico magnético total. Diferentes estados mJ, que son degenerados en ausencia de campo, adquieren diferentes energías, llevando a división de líneas espectrales. Este efecto confirmó la cuantización de momento angular y momentos magnéticos.",
          de: "Der Zeeman-Effekt ist die Aufspaltung atomarer Spektrallinien in Anwesenheit eines Magnetfelds. Dies tritt auf, weil das Magnetfeld mit den magnetischen Momenten wechselwirkt, die mit Bahn- und Spin-Drehimpuls verbunden sind. In schwachen Feldern (normaler Zeeman-Effekt) ist die Energieverschiebung ΔE = μBgJmJB, wobei gJ der Landé-g-Faktor und mJ die magnetische Gesamtquantenzahl ist. Verschiedene mJ-Zustände, die ohne Feld entartet sind, erhalten verschiedene Energien, was zur Spektralliniensaufspaltung führt. Dieser Effekt bestätigte die Quantisierung von Drehimpuls und magnetischen Momenten.",
          nl: "Het Zeeman-effect is de splitsing van atomaire spectrale lijnen in aanwezigheid van een magnetisch veld. Dit treedt op omdat het magnetische veld interacteert met de magnetische momenten geassocieerd met orbitaal en spin hoekimpuls. In zwakke velden (normaal Zeeman-effect) is de energieverschuiving ΔE = μBgJmJB, waar gJ de Landé g-factor en mJ het totale magnetische quantumgetal is. Verschillende mJ toestanden, die gedegenereerd zijn bij afwezigheid van een veld, verkrijgen verschillende energieën, leidend tot spectrale lijnsplitsing. Dit effect bevestigde de kwantisatie van hoekimpuls en magnetische momenten."
        }
      },
      {
        question: {
          en: "What are Wigner-Eckart theorem and reduced matrix elements in angular momentum theory?",
          es: "¿Qué son el teorema de Wigner-Eckart y elementos de matriz reducidos en teoría de momento angular?",
          de: "Was sind das Wigner-Eckart-Theorem und reduzierte Matrixelemente in der Drehimpulstheorie?",
          nl: "Wat zijn de Wigner-Eckart stelling en gereduceerde matrixelementen in hoekimpuls theorie?"
        },
        options: [
          {
            en: "Theorem separating angular dependence (Clebsch-Gordan coefficients) from radial dependence in matrix elements",
            es: "Teorema que separa dependencia angular (coeficientes de Clebsch-Gordan) de dependencia radial en elementos de matriz",
            de: "Theorem, das Winkelabhängigkeit (Clebsch-Gordan-Koeffizienten) von radialer Abhängigkeit in Matrixelementen trennt",
            nl: "Stelling die hoekafhankelijkheid (Clebsch-Gordan coëfficiënten) scheidt van radiale afhankelijkheid in matrixelementen"
          },
          {
            en: "Method for calculating eigenvalues of angular momentum operators",
            es: "Método para calcular valores propios de operadores de momento angular",
            de: "Methode zur Berechnung von Eigenwerten von Drehimpulsoperatoren",
            nl: "Methode voor het berekenen van eigenwaarden van hoekimpulsoperatoren"
          },
          {
            en: "Technique for solving the Schrödinger equation in spherical coordinates",
            es: "Técnica para resolver la ecuación de Schrödinger en coordenadas esféricas",
            de: "Technik zur Lösung der Schrödinger-Gleichung in Kugelkoordinaten",
            nl: "Techniek voor het oplossen van de Schrödinger-vergelijking in sferische coördinaten"
          },
          {
            en: "Formula for adding classical angular velocities",
            es: "Fórmula para sumar velocidades angulares clásicas",
            de: "Formel zur Addition klassischer Winkelgeschwindigkeiten",
            nl: "Formule voor het optellen van klassieke hoeksnelheden"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Wigner-Eckart theorem is a fundamental result in angular momentum theory that factorizes matrix elements of tensor operators into two parts: a geometric factor (Clebsch-Gordan coefficient) that contains all the angular momentum dependence, and a reduced matrix element that depends only on the radial quantum numbers and the nature of the states involved. This greatly simplifies calculations in atomic and nuclear physics by separating the universal angular dependence from the system-specific physics contained in the reduced matrix element.",
          es: "El teorema de Wigner-Eckart es un resultado fundamental en teoría de momento angular que factoriza elementos de matriz de operadores tensoriales en dos partes: un factor geométrico (coeficiente de Clebsch-Gordan) que contiene toda la dependencia de momento angular, y un elemento de matriz reducido que depende solo de los números cuánticos radiales y la naturaleza de los estados involucrados. Esto simplifica enormemente cálculos en física atómica y nuclear separando la dependencia angular universal de la física específica del sistema contenida en el elemento de matriz reducido.",
          de: "Das Wigner-Eckart-Theorem ist ein fundamentales Ergebnis in der Drehimpulstheorie, das Matrixelemente von Tensoroperatoren in zwei Teile faktorisiert: einen geometrischen Faktor (Clebsch-Gordan-Koeffizient), der die gesamte Drehimpulsabhängigkeit enthält, und ein reduziertes Matrixelement, das nur von den radialen Quantenzahlen und der Natur der beteiligten Zustände abhängt. Dies vereinfacht Berechnungen in Atom- und Kernphysik erheblich, indem die universelle Winkelabhängigkeit von der systemspezifischen Physik im reduzierten Matrixelement getrennt wird.",
          nl: "De Wigner-Eckart stelling is een fundamenteel resultaat in hoekimpuls theorie dat matrixelementen van tensoroperatoren factoriseert in twee delen: een geometrische factor (Clebsch-Gordan coëfficiënt) die alle hoekimpuls afhankelijkheid bevat, en een gereduceerd matrixelement dat alleen afhangt van de radiale quantumgetallen en de aard van de betrokken toestanden. Dit vereenvoudigt berekeningen in atomaire en kernfysica aanzienlijk door de universele hoekafhankelijkheid te scheiden van de systeemspecifieke fysica vervat in het gereduceerde matrixelement."
        }
      },
      {
        question: {
          en: "What is the Stern-Gerlach experiment and what did it demonstrate?",
          es: "¿Qué es el experimento de Stern-Gerlach y qué demostró?",
          de: "Was ist das Stern-Gerlach-Experiment und was hat es demonstriert?",
          nl: "Wat is het Stern-Gerlach experiment en wat demonstreerde het?"
        },
        options: [
          {
            en: "Silver atoms split into discrete beams in magnetic field, proving space quantization of angular momentum",
            es: "Átomos de plata se dividen en haces discretos en campo magnético, probando cuantización espacial del momento angular",
            de: "Silberatome spalten sich in diskrete Strahlen im Magnetfeld, beweist Raumquantisierung des Drehimpulses",
            nl: "Zilveratomen splitsen in discrete bundels in magnetisch veld, bewijst ruimtekwantisatie van hoekimpuls"
          },
          {
            en: "Continuous spectrum of deflections, disproving quantum theory",
            es: "Espectro continuo de deflexiones, refutando la teoría cuántica",
            de: "Kontinuierliches Spektrum von Ablenkungen, widerlegt Quantentheorie",
            nl: "Continu spectrum van afbuigingen, weerlegt quantumtheorie"
          },
          {
            en: "No deflection observed, proving atoms are not magnetic",
            es: "No se observó deflexión, probando que átomos no son magnéticos",
            de: "Keine Ablenkung beobachtet, beweist dass Atome nicht magnetisch sind",
            nl: "Geen afbuiging waargenomen, bewijst dat atomen niet magnetisch zijn"
          },
          {
            en: "Random scattering of atoms without pattern",
            es: "Dispersión aleatoria de átomos sin patrón",
            de: "Zufällige Streuung von Atomen ohne Muster",
            nl: "Willekeurige verstrooiing van atomen zonder patroon"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Stern-Gerlach experiment (1922) passed a beam of silver atoms through an inhomogeneous magnetic field. Instead of a continuous distribution, the beam split into two discrete spots, demonstrating that the projection of angular momentum (spin) along any axis is quantized. This was crucial evidence for space quantization and the existence of electron spin, as silver atoms have one unpaired electron with spin ±1/2ℏ. The experiment provided direct physical evidence for quantum mechanical predictions.",
          es: "El experimento de Stern-Gerlach (1922) pasó un haz de átomos de plata a través de un campo magnético no homogéneo. En lugar de una distribución continua, el haz se dividió en dos puntos discretos, demostrando que la proyección del momento angular (espín) a lo largo de cualquier eje está cuantizada. Esta fue evidencia crucial para la cuantización espacial y la existencia del espín electrónico, ya que los átomos de plata tienen un electrón desapareado con espín ±1/2ℏ. El experimento proporcionó evidencia física directa para predicciones mecánico-cuánticas.",
          de: "Das Stern-Gerlach-Experiment (1922) leitete einen Strahl von Silberatomen durch ein inhomogenes Magnetfeld. Anstatt einer kontinuierlichen Verteilung spaltete sich der Strahl in zwei diskrete Punkte auf, was demonstriert, dass die Projektion des Drehimpulses (Spin) entlang jeder Achse quantisiert ist. Dies war entscheidender Beweis für Raumquantisierung und die Existenz des Elektronenspins, da Silberatome ein ungepaartes Elektron mit Spin ±1/2ℏ haben. Das Experiment lieferte direkten physikalischen Beweis für quantenmechanische Vorhersagen.",
          nl: "Het Stern-Gerlach experiment (1922) leidde een bundel zilveratomen door een inhomogeen magnetisch veld. In plaats van een continue verdeling splitste de bundel zich in twee discrete vlekken, wat aantoont dat de projectie van hoekimpuls (spin) langs elke as gekwantiseerd is. Dit was cruciaal bewijs voor ruimtekwantisatie en het bestaan van elektronenspin, aangezien zilveratomen één ongepaard elektron hebben met spin ±1/2ℏ. Het experiment leverde direct fysiek bewijs voor quantummechanische voorspellingen."
        }
      },
      {
        question: {
          en: "What are raising and lowering operators (ladder operators) for angular momentum?",
          es: "¿Qué son los operadores de ascenso y descenso (operadores escalera) para momento angular?",
          de: "Was sind Auf- und Absteigeoperatoren (Leiteroperatoren) für Drehimpuls?",
          nl: "Wat zijn stijg- en daaloperatoren (ladderoperatoren) voor hoekimpuls?"
        },
        options: [
          {
            en: "L± = Lx ± iLy, operators that change ml by ±1 while keeping l constant",
            es: "L± = Lx ± iLy, operadores que cambian ml por ±1 manteniendo l constante",
            de: "L± = Lx ± iLy, Operatoren die ml um ±1 ändern während l konstant bleibt",
            nl: "L± = Lx ± iLy, operatoren die ml met ±1 veranderen terwijl l constant blijft"
          },
          {
            en: "Operators that change both l and ml simultaneously",
            es: "Operadores que cambian tanto l como ml simultáneamente",
            de: "Operatoren die sowohl l als auch ml gleichzeitig ändern",
            nl: "Operatoren die zowel l als ml gelijktijdig veranderen"
          },
          {
            en: "Operators that only measure angular momentum magnitude",
            es: "Operadores que solo miden la magnitud del momento angular",
            de: "Operatoren die nur den Betrag des Drehimpulses messen",
            nl: "Operatoren die alleen de grootte van hoekimpuls meten"
          },
          {
            en: "Classical rotation operators in three dimensions",
            es: "Operadores de rotación clásica en tres dimensiones",
            de: "Klassische Rotationsoperatoren in drei Dimensionen",
            nl: "Klassieke rotatie-operatoren in drie dimensies"
          }
        ],
        correct: 0,
        explanation: {
          en: "Raising and lowering operators L± = Lx ± iLy are fundamental tools in angular momentum theory. When applied to an eigenstate |l,ml⟩, they produce L±|l,ml⟩ = ℏ√[l(l+1) - ml(ml±1)]|l,ml±1⟩. These operators change the magnetic quantum number by ±1 while preserving the total angular momentum quantum number l. They're called ladder operators because they allow us to move up and down the 'ladder' of ml values from -l to +l. They're essential for deriving angular momentum eigenvalues and matrix elements.",
          es: "Los operadores de ascenso y descenso L± = Lx ± iLy son herramientas fundamentales en teoría de momento angular. Cuando se aplican a un eigenestado |l,ml⟩, producen L±|l,ml⟩ = ℏ√[l(l+1) - ml(ml±1)]|l,ml±1⟩. Estos operadores cambian el número cuántico magnético por ±1 mientras preservan el número cuántico de momento angular total l. Se llaman operadores escalera porque nos permiten movernos arriba y abajo de la 'escalera' de valores ml desde -l hasta +l. Son esenciales para derivar valores propios y elementos de matriz de momento angular.",
          de: "Auf- und Absteigeoperatoren L± = Lx ± iLy sind fundamentale Werkzeuge in der Drehimpulstheorie. Angewendet auf einen Eigenzustand |l,ml⟩ erzeugen sie L±|l,ml⟩ = ℏ√[l(l+1) - ml(ml±1)]|l,ml±1⟩. Diese Operatoren ändern die magnetische Quantenzahl um ±1 während sie die Gesamtdrehimpuls-Quantenzahl l erhalten. Sie heißen Leiteroperatoren, weil sie uns erlauben, die 'Leiter' der ml-Werte von -l bis +l auf- und abzusteigen. Sie sind essentiell für die Herleitung von Drehimpuls-Eigenwerten und Matrixelementen.",
          nl: "Stijg- en daaloperatoren L± = Lx ± iLy zijn fundamentele hulpmiddelen in hoekimpulstheorie. Toegepast op een eigentoestand |l,ml⟩ produceren ze L±|l,ml⟩ = ℏ√[l(l+1) - ml(ml±1)]|l,ml±1⟩. Deze operatoren veranderen het magnetische quantumgetal met ±1 terwijl ze het totale hoekimpuls quantumgetal l behouden. Ze worden ladderoperatoren genoemd omdat ze ons toestaan op en neer te bewegen op de 'ladder' van ml waarden van -l tot +l. Ze zijn essentieel voor het afleiden van hoekimpuls eigenwaarden en matrixelementen."
        }
      },
      {
        question: {
          en: "What is the anomalous Zeeman effect?",
          es: "¿Qué es el efecto Zeeman anómalo?",
          de: "Was ist der anomale Zeeman-Effekt?",
          nl: "Wat is het anomale Zeeman-effect?"
        },
        options: [
          {
            en: "Complex splitting pattern due to spin-orbit coupling and different g-factors for L and S",
            es: "Patrón de división complejo debido al acoplamiento espín-órbita y diferentes factores g para L y S",
            de: "Komplexes Aufspaltungsmuster aufgrund von Spin-Bahn-Kopplung und verschiedenen g-Faktoren für L und S",
            nl: "Complex splitsingspatroon door spin-baan koppeling en verschillende g-factoren voor L en S"
          },
          {
            en: "Simple triplet splitting in all spectral lines",
            es: "División simple en triplete en todas las líneas espectrales",
            de: "Einfache Triplett-Aufspaltung in allen Spektrallinien",
            nl: "Eenvoudige triplet splitsing in alle spectrale lijnen"
          },
          {
            en: "No splitting observed in weak magnetic fields",
            es: "No se observa división en campos magnéticos débiles",
            de: "Keine Aufspaltung in schwachen Magnetfeldern beobachtet",
            nl: "Geen splitsing waargenomen in zwakke magnetische velden"
          },
          {
            en: "Splitting only in nuclear energy levels",
            es: "División solo en niveles de energía nuclear",
            de: "Aufspaltung nur in nuklearen Energieniveaus",
            nl: "Splitsing alleen in nucleaire energieniveaus"
          }
        ],
        correct: 0,
        explanation: {
          en: "The anomalous Zeeman effect occurs when spin is involved and shows more complex splitting patterns than the normal Zeeman effect. It arises because the g-factor for spin (gs ≈ 2) differs from that for orbital angular momentum (gl = 1). In weak fields where LS coupling applies, the energy shift depends on the Landé g-factor: gJ = 1 + [J(J+1) - L(L+1) + S(S+1)]/[2J(J+1)]. This leads to different splittings for different transitions, creating complex spectral patterns that initially seemed 'anomalous' before the discovery of electron spin.",
          es: "El efecto Zeeman anómalo ocurre cuando el espín está involucrado y muestra patrones de división más complejos que el efecto Zeeman normal. Surge porque el factor g para espín (gs ≈ 2) difiere del momento angular orbital (gl = 1). En campos débiles donde aplica acoplamiento LS, el cambio de energía depende del factor g de Landé: gJ = 1 + [J(J+1) - L(L+1) + S(S+1)]/[2J(J+1)]. Esto lleva a diferentes divisiones para diferentes transiciones, creando patrones espectrales complejos que inicialmente parecían 'anómalos' antes del descubrimiento del espín electrónico.",
          de: "Der anomale Zeeman-Effekt tritt auf, wenn Spin beteiligt ist und zeigt komplexere Aufspaltungsmuster als der normale Zeeman-Effekt. Er entsteht, weil der g-Faktor für Spin (gs ≈ 2) vom Bahndrehimpuls (gl = 1) abweicht. In schwachen Feldern, wo LS-Kopplung gilt, hängt die Energieverschiebung vom Landé-g-Faktor ab: gJ = 1 + [J(J+1) - L(L+1) + S(S+1)]/[2J(J+1)]. Dies führt zu verschiedenen Aufspaltungen für verschiedene Übergänge und erzeugt komplexe Spektralmuster, die anfangs 'anomal' schienen, bevor der Elektronenspin entdeckt wurde.",
          nl: "Het anomale Zeeman-effect treedt op wanneer spin betrokken is en toont complexere splitsingspatronen dan het normale Zeeman-effect. Het ontstaat omdat de g-factor voor spin (gs ≈ 2) verschilt van die voor orbitaal hoekimpuls (gl = 1). In zwakke velden waar LS koppeling geldt, hangt de energieverschuiving af van de Landé g-factor: gJ = 1 + [J(J+1) - L(L+1) + S(S+1)]/[2J(J+1)]. Dit leidt tot verschillende splitsingen voor verschillende overgangen, wat complexe spectrale patronen creëert die aanvankelijk 'anomaal' leken voor de ontdekking van elektronenspin."
        }
      },
      {
        question: {
          en: "What is the hyperfine structure in atomic spectra?",
          es: "¿Qué es la estructura hiperfina en espectros atómicos?",
          de: "Was ist die Hyperfeinstruktur in Atomspektren?",
          nl: "Wat is de hyperfijnstructuur in atomaire spectra?"
        },
        options: [
          {
            en: "Very small splitting due to interaction between nuclear spin and electronic angular momentum",
            es: "División muy pequeña debido a interacción entre espín nuclear y momento angular electrónico",
            de: "Sehr kleine Aufspaltung aufgrund der Wechselwirkung zwischen Kernspin und elektronischem Drehimpuls",
            nl: "Zeer kleine splitsing door interactie tussen nucleaire spin en elektronisch hoekimpuls"
          },
          {
            en: "Large splitting between different electronic shells",
            es: "Gran división entre diferentes capas electrónicas",
            de: "Große Aufspaltung zwischen verschiedenen Elektronenschalen",
            nl: "Grote splitsing tussen verschillende elektronenschillen"
          },
          {
            en: "Splitting due to electron-electron repulsion",
            es: "División debido a repulsión electrón-electrón",
            de: "Aufspaltung aufgrund von Elektron-Elektron-Abstoßung",
            nl: "Splitsing door elektron-elektron afstoting"
          },
          {
            en: "Temperature-dependent line broadening",
            es: "Ensanchamiento de línea dependiente de temperatura",
            de: "Temperaturabhängige Linienverbreiterung",
            nl: "Temperatuurafhankelijke lijnverbreding"
          }
        ],
        correct: 0,
        explanation: {
          en: "Hyperfine structure is the very small splitting of atomic energy levels caused by the interaction between the nuclear spin I and the total electronic angular momentum J. The nuclear magnetic moment interacts with the magnetic field created by electrons, leading to coupling between I and J to form total angular momentum F = I + J. This splitting is typically 1000 times smaller than fine structure. The 21-cm line of hydrogen (used in radio astronomy) is a famous example of hyperfine transition between F = 0 and F = 1 states of the ground level.",
          es: "La estructura hiperfina es la división muy pequeña de niveles de energía atómicos causada por la interacción entre el espín nuclear I y el momento angular electrónico total J. El momento magnético nuclear interactúa con el campo magnético creado por electrones, llevando al acoplamiento entre I y J para formar momento angular total F = I + J. Esta división es típicamente 1000 veces menor que la estructura fina. La línea de 21 cm del hidrógeno (usada en radioastronomía) es un ejemplo famoso de transición hiperfina entre estados F = 0 y F = 1 del nivel fundamental.",
          de: "Die Hyperfeinstruktur ist die sehr kleine Aufspaltung atomarer Energieniveaus, verursacht durch die Wechselwirkung zwischen dem Kernspin I und dem gesamten elektronischen Drehimpuls J. Das kernmagnetische Moment wechselwirkt mit dem von Elektronen erzeugten Magnetfeld, was zur Kopplung zwischen I und J führt und den Gesamtdrehimpuls F = I + J bildet. Diese Aufspaltung ist typischerweise 1000-mal kleiner als die Feinstruktur. Die 21-cm-Linie des Wasserstoffs (in der Radioastronomie verwendet) ist ein berühmtes Beispiel für einen Hyperfeinübergang zwischen F = 0 und F = 1 Zuständen des Grundniveaus.",
          nl: "Hyperfijnstructuur is de zeer kleine splitsing van atomaire energieniveaus veroorzaakt door de interactie tussen de nucleaire spin I en het totale elektronische hoekimpuls J. Het nucleaire magnetische moment interacteert met het magnetische veld gecreëerd door elektronen, wat leidt tot koppeling tussen I en J om totaal hoekimpuls F = I + J te vormen. Deze splitsing is typisch 1000 keer kleiner dan fijnstructuur. De 21-cm lijn van waterstof (gebruikt in radioastronomie) is een beroemd voorbeeld van hyperfijne overgang tussen F = 0 en F = 1 toestanden van het grondniveau."
        }
      },
      {
        question: {
          en: "What is the physical meaning of the azimuthal quantum number l?",
          es: "¿Cuál es el significado físico del número cuántico azimutal l?",
          de: "Was ist die physikalische Bedeutung der azimutalen Quantenzahl l?",
          nl: "Wat is de fysieke betekenis van het azimutale quantumgetal l?"
        },
        options: [
          {
            en: "Determines orbital shape and magnitude of orbital angular momentum |L| = ℏ√[l(l+1)]",
            es: "Determina la forma orbital y magnitud del momento angular orbital |L| = ℏ√[l(l+1)]",
            de: "Bestimmt Orbitalform und Betrag des Bahndrehimpulses |L| = ℏ√[l(l+1)]",
            nl: "Bepaalt orbitaalvorm en grootte van orbitaal hoekimpuls |L| = ℏ√[l(l+1)]"
          },
          {
            en: "Specifies the electron's spin orientation",
            es: "Especifica la orientación del espín del electrón",
            de: "Spezifiziert die Spin-Orientierung des Elektrons",
            nl: "Specificeert de spin-oriëntatie van het elektron"
          },
          {
            en: "Determines the principal energy level only",
            es: "Determina solo el nivel de energía principal",
            de: "Bestimmt nur das Hauptenergieniveau",
            nl: "Bepaalt alleen het hoofdenergieniveau"
          },
          {
            en: "Has no physical significance",
            es: "No tiene significado físico",
            de: "Hat keine physikalische Bedeutung",
            nl: "Heeft geen fysieke betekenis"
          }
        ],
        correct: 0,
        explanation: {
          en: "The azimuthal (or orbital) quantum number l determines both the shape of atomic orbitals and the magnitude of orbital angular momentum. For l = 0, 1, 2, 3, we have s, p, d, f orbitals respectively, each with distinct shapes. The magnitude of orbital angular momentum is |L| = ℏ√[l(l+1)], not simply ℏl as might be classically expected. For a given principal quantum number n, l can range from 0 to n-1. The value of l also affects the energy in multi-electron atoms through shielding effects.",
          es: "El número cuántico azimutal (u orbital) l determina tanto la forma de orbitales atómicos como la magnitud del momento angular orbital. Para l = 0, 1, 2, 3, tenemos orbitales s, p, d, f respectivamente, cada uno con formas distintas. La magnitud del momento angular orbital es |L| = ℏ√[l(l+1)], no simplemente ℏl como se esperaría clásicamente. Para un número cuántico principal n dado, l puede variar de 0 a n-1. El valor de l también afecta la energía en átomos multi-electrónicos a través de efectos de blindaje.",
          de: "Die azimutale (oder Bahn-) Quantenzahl l bestimmt sowohl die Form von Atomorbitalen als auch den Betrag des Bahndrehimpulses. Für l = 0, 1, 2, 3 haben wir s-, p-, d-, f-Orbitale mit jeweils unterschiedlichen Formen. Der Betrag des Bahndrehimpulses ist |L| = ℏ√[l(l+1)], nicht einfach ℏl wie klassisch erwartet. Für eine gegebene Hauptquantenzahl n kann l von 0 bis n-1 reichen. Der Wert von l beeinflusst auch die Energie in Mehrelektronenatomen durch Abschirmungseffekte.",
          nl: "Het azimutale (of orbitale) quantumgetal l bepaalt zowel de vorm van atomaire orbitalen als de grootte van orbitaal hoekimpuls. Voor l = 0, 1, 2, 3 hebben we respectievelijk s, p, d, f orbitalen, elk met verschillende vormen. De grootte van orbitaal hoekimpuls is |L| = ℏ√[l(l+1)], niet simpelweg ℏl zoals klassiek verwacht. Voor een gegeven hoofdquantumgetal n kan l variëren van 0 tot n-1. De waarde van l beïnvloedt ook de energie in multi-elektron atomen door afschermingseffecten."
        }
      },
      {
        question: {
          en: "What is the Thomas precession in spin-orbit coupling?",
          es: "¿Qué es la precesión de Thomas en el acoplamiento espín-órbita?",
          de: "Was ist die Thomas-Präzession in der Spin-Bahn-Kopplung?",
          nl: "Wat is de Thomas precessie in spin-baan koppeling?"
        },
        options: [
          {
            en: "Relativistic correction factor of 1/2 due to the electron's accelerated reference frame",
            es: "Factor de corrección relativista de 1/2 debido al sistema de referencia acelerado del electrón",
            de: "Relativistischer Korrekturfaktor von 1/2 aufgrund des beschleunigten Bezugssystems des Elektrons",
            nl: "Relativistische correctiefactor van 1/2 door het versnelde referentiekader van het elektron"
          },
          {
            en: "Classical precession of electron orbit around nucleus",
            es: "Precesión clásica de la órbita del electrón alrededor del núcleo",
            de: "Klassische Präzession der Elektronenbahn um den Kern",
            nl: "Klassieke precessie van elektronbaan rond de kern"
          },
          {
            en: "Nuclear spin precession in magnetic field",
            es: "Precesión del espín nuclear en campo magnético",
            de: "Kernspin-Präzession im Magnetfeld",
            nl: "Nucleaire spin precessie in magnetisch veld"
          },
          {
            en: "Oscillation between spin-up and spin-down states",
            es: "Oscilación entre estados de espín arriba y espín abajo",
            de: "Oszillation zwischen Spin-up und Spin-down Zuständen",
            nl: "Oscillatie tussen spin-up en spin-down toestanden"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Thomas precession is a relativistic kinematic effect that introduces a factor of 1/2 in the spin-orbit coupling energy. When transforming from the lab frame to the electron's rest frame (which is accelerating as it orbits), there's an additional precession of coordinate axes. This Thomas precession effectively reduces the magnetic field seen by the electron by half. Without this correction, the calculated spin-orbit splitting would be twice the observed value. This factor was discovered by Llewellyn Thomas in 1926 and resolved discrepancies in fine structure calculations.",
          es: "La precesión de Thomas es un efecto cinemático relativista que introduce un factor de 1/2 en la energía de acoplamiento espín-órbita. Al transformar del sistema de laboratorio al sistema de reposo del electrón (que está acelerando mientras orbita), hay una precesión adicional de ejes coordenados. Esta precesión de Thomas efectivamente reduce el campo magnético visto por el electrón a la mitad. Sin esta corrección, la división espín-órbita calculada sería el doble del valor observado. Este factor fue descubierto por Llewellyn Thomas en 1926 y resolvió discrepancias en cálculos de estructura fina.",
          de: "Die Thomas-Präzession ist ein relativistischer kinematischer Effekt, der einen Faktor 1/2 in die Spin-Bahn-Kopplungsenergie einführt. Bei der Transformation vom Laborsystem zum Ruhesystem des Elektrons (das beschleunigt, während es umläuft) gibt es eine zusätzliche Präzession der Koordinatenachsen. Diese Thomas-Präzession reduziert effektiv das vom Elektron gesehene Magnetfeld um die Hälfte. Ohne diese Korrektur wäre die berechnete Spin-Bahn-Aufspaltung doppelt so groß wie der beobachtete Wert. Dieser Faktor wurde 1926 von Llewellyn Thomas entdeckt und löste Diskrepanzen in Feinstrukturberechnungen.",
          nl: "De Thomas precessie is een relativistisch kinematisch effect dat een factor 1/2 introduceert in de spin-baan kopplingsenergie. Bij transformatie van het lab-frame naar het rustframe van het elektron (dat versnelt terwijl het orbiteert) is er een aanvullende precessie van coördinaatassen. Deze Thomas precessie vermindert effectief het magnetische veld gezien door het elektron met de helft. Zonder deze correctie zou de berekende spin-baan splitsing twee keer de waargenomen waarde zijn. Deze factor werd ontdekt door Llewellyn Thomas in 1926 en loste discrepanties op in fijnstructuurberekeningen."
        }
      },
      {
        question: {
          en: "What is the significance of singlet and triplet states in two-electron systems?",
          es: "¿Cuál es la importancia de estados singlete y triplete en sistemas de dos electrones?",
          de: "Was ist die Bedeutung von Singulett- und Triplett-Zuständen in Zwei-Elektronen-Systemen?",
          nl: "Wat is de betekenis van singlet en triplet toestanden in twee-elektron systemen?"
        },
        options: [
          {
            en: "Singlet: antiparallel spins (S=0), antisymmetric; Triplet: parallel spins (S=1), symmetric spin function",
            es: "Singlete: espines antiparalelos (S=0), antisimétrico; Triplete: espines paralelos (S=1), función de espín simétrica",
            de: "Singulett: antiparallele Spins (S=0), antisymmetrisch; Triplett: parallele Spins (S=1), symmetrische Spinfunktion",
            nl: "Singlet: antiparallelle spins (S=0), antisymmetrisch; Triplet: parallelle spins (S=1), symmetrische spinfunctie"
          },
          {
            en: "Both have the same spin configuration but different energies",
            es: "Ambos tienen la misma configuración de espín pero diferentes energías",
            de: "Beide haben dieselbe Spin-Konfiguration aber verschiedene Energien",
            nl: "Beide hebben dezelfde spinconfiguratie maar verschillende energieën"
          },
          {
            en: "Only differ in their orbital angular momentum",
            es: "Solo difieren en su momento angular orbital",
            de: "Unterscheiden sich nur in ihrem Bahndrehimpuls",
            nl: "Verschillen alleen in hun orbitaal hoekimpuls"
          },
          {
            en: "No physical difference between them",
            es: "No hay diferencia física entre ellos",
            de: "Kein physikalischer Unterschied zwischen ihnen",
            nl: "Geen fysiek verschil tussen hen"
          }
        ],
        correct: 0,
        explanation: {
          en: "In two-electron systems like helium, electrons can form singlet (S=0) or triplet (S=1) states. Singlet states have antiparallel spins with total spin S=0, giving one state (²S+1=1). Triplet states have parallel spins with S=1, giving three states (ms = -1, 0, +1). Due to the Pauli principle, the total wave function must be antisymmetric. Triplet states (symmetric spin) require antisymmetric spatial functions, keeping electrons apart and lowering electron-electron repulsion. This makes triplet states generally lower in energy than corresponding singlets (Hund's first rule).",
          es: "En sistemas de dos electrones como el helio, los electrones pueden formar estados singlete (S=0) o triplete (S=1). Estados singlete tienen espines antiparalelos con espín total S=0, dando un estado (²S+1=1). Estados triplete tienen espines paralelos con S=1, dando tres estados (ms = -1, 0, +1). Debido al principio de Pauli, la función de onda total debe ser antisimétrica. Estados triplete (espín simétrico) requieren funciones espaciales antisimétricas, manteniendo electrones separados y reduciendo repulsión electrón-electrón. Esto hace que estados triplete generalmente sean más bajos en energía que singletes correspondientes (primera regla de Hund).",
          de: "In Zwei-Elektronen-Systemen wie Helium können Elektronen Singulett- (S=0) oder Triplett- (S=1) Zustände bilden. Singulett-Zustände haben antiparallele Spins mit Gesamtspin S=0, was einen Zustand ergibt (²S+1=1). Triplett-Zustände haben parallele Spins mit S=1, was drei Zustände ergibt (ms = -1, 0, +1). Aufgrund des Pauli-Prinzips muss die Gesamtwellenfunktion antisymmetrisch sein. Triplett-Zustände (symmetrischer Spin) erfordern antisymmetrische Raumfunktionen, halten Elektronen auseinander und verringern Elektron-Elektron-Abstoßung. Dies macht Triplett-Zustände im Allgemeinen energetisch niedriger als entsprechende Singuletts (Hundsche Regel).",
          nl: "In twee-elektron systemen zoals helium kunnen elektronen singlet (S=0) of triplet (S=1) toestanden vormen. Singlet toestanden hebben antiparallelle spins met totale spin S=0, wat één toestand geeft (²S+1=1). Triplet toestanden hebben parallelle spins met S=1, wat drie toestanden geeft (ms = -1, 0, +1). Door het Pauli-principe moet de totale golffunctie antisymmetrisch zijn. Triplet toestanden (symmetrische spin) vereisen antisymmetrische ruimtelijke functies, houden elektronen uit elkaar en verlagen elektron-elektron afstoting. Dit maakt triplet toestanden over het algemeen lager in energie dan corresponderende singlets (Hund's eerste regel)."
        }
      },
      {
        question: {
          en: "What is the role of parity in angular momentum eigenstates?",
          es: "¿Cuál es el papel de la paridad en eigenestados de momento angular?",
          de: "Was ist die Rolle der Parität in Drehimpuls-Eigenzuständen?",
          nl: "Wat is de rol van pariteit in hoekimpuls eigentoestanden?"
        },
        options: [
          {
            en: "Spherical harmonics have definite parity (-1)^l under spatial inversion",
            es: "Los armónicos esféricos tienen paridad definida (-1)^l bajo inversión espacial",
            de: "Kugelflächenfunktionen haben definierte Parität (-1)^l unter räumlicher Inversion",
            nl: "Sferische harmonischen hebben bepaalde pariteit (-1)^l onder ruimtelijke inversie"
          },
          {
            en: "Parity is always positive for all angular momentum states",
            es: "La paridad es siempre positiva para todos los estados de momento angular",
            de: "Parität ist immer positiv für alle Drehimpulszustände",
            nl: "Pariteit is altijd positief voor alle hoekimpulstoestanden"
          },
          {
            en: "Parity depends only on the magnetic quantum number ml",
            es: "La paridad depende solo del número cuántico magnético ml",
            de: "Parität hängt nur von der magnetischen Quantenzahl ml ab",
            nl: "Pariteit hangt alleen af van het magnetische quantumgetal ml"
          },
          {
            en: "Angular momentum states have no definite parity",
            es: "Los estados de momento angular no tienen paridad definida",
            de: "Drehimpulszustände haben keine definierte Parität",
            nl: "Hoekimpulstoestanden hebben geen bepaalde pariteit"
          }
        ],
        correct: 0,
        explanation: {
          en: "Parity is a fundamental symmetry operation where spatial coordinates are inverted: r → -r. Spherical harmonics Ylᵐ(θ,φ), which describe the angular part of wave functions, have definite parity given by (-1)^l. This means s-orbitals (l=0) are even, p-orbitals (l=1) are odd, d-orbitals (l=2) are even, etc. Parity is conserved in electromagnetic and strong interactions, leading to selection rules for transitions. For electric dipole transitions, the parity must change (Δl = ±1), which is part of the selection rules.",
          es: "La paridad es una operación de simetría fundamental donde las coordenadas espaciales se invierten: r → -r. Los armónicos esféricos Ylᵐ(θ,φ), que describen la parte angular de funciones de onda, tienen paridad definida dada por (-1)^l. Esto significa que orbitales s (l=0) son pares, orbitales p (l=1) son impares, orbitales d (l=2) son pares, etc. La paridad se conserva en interacciones electromagnéticas y fuertes, llevando a reglas de selección para transiciones. Para transiciones dipolo eléctrico, la paridad debe cambiar (Δl = ±1), que es parte de las reglas de selección.",
          de: "Parität ist eine fundamentale Symmetrieoperation, bei der räumliche Koordinaten invertiert werden: r → -r. Kugelflächenfunktionen Ylᵐ(θ,φ), die den Winkelteil von Wellenfunktionen beschreiben, haben definierte Parität gegeben durch (-1)^l. Das bedeutet s-Orbitale (l=0) sind gerade, p-Orbitale (l=1) sind ungerade, d-Orbitale (l=2) sind gerade, usw. Parität ist in elektromagnetischen und starken Wechselwirkungen erhalten, was zu Auswahlregeln für Übergänge führt. Für elektrische Dipolübergänge muss sich die Parität ändern (Δl = ±1), was Teil der Auswahlregeln ist.",
          nl: "Pariteit is een fundamentele symmetrie-operatie waarbij ruimtelijke coördinaten worden geïnverteerd: r → -r. Sferische harmonischen Ylᵐ(θ,φ), die het hoekdeel van golffuncties beschrijven, hebben bepaalde pariteit gegeven door (-1)^l. Dit betekent dat s-orbitalen (l=0) even zijn, p-orbitalen (l=1) oneven zijn, d-orbitalen (l=2) even zijn, enz. Pariteit is behouden in elektromagnetische en sterke interacties, wat leidt tot selectieregels voor overgangen. Voor elektrische dipool overgangen moet de pariteit veranderen (Δl = ±1), wat deel uitmaakt van de selectieregels."
        }
      },
      {
        question: {
          en: "What is the Paschen-Back effect?",
          es: "¿Qué es el efecto Paschen-Back?",
          de: "Was ist der Paschen-Back-Effekt?",
          nl: "Wat is het Paschen-Back effect?"
        },
        options: [
          {
            en: "Zeeman splitting in strong fields where magnetic energy exceeds spin-orbit coupling",
            es: "División Zeeman en campos fuertes donde energía magnética excede acoplamiento espín-órbita",
            de: "Zeeman-Aufspaltung in starken Feldern, wo magnetische Energie Spin-Bahn-Kopplung übersteigt",
            nl: "Zeeman splitsing in sterke velden waar magnetische energie spin-baan koppeling overschrijdt"
          },
          {
            en: "Complete suppression of all spectral lines in magnetic fields",
            es: "Supresión completa de todas las líneas espectrales en campos magnéticos",
            de: "Vollständige Unterdrückung aller Spektrallinien in Magnetfeldern",
            nl: "Volledige onderdrukking van alle spectrale lijnen in magnetische velden"
          },
          {
            en: "Splitting only observed in very weak magnetic fields",
            es: "División solo observada en campos magnéticos muy débiles",
            de: "Aufspaltung nur in sehr schwachen Magnetfeldern beobachtet",
            nl: "Splitsing alleen waargenomen in zeer zwakke magnetische velden"
          },
          {
            en: "Effect limited to hydrogen atoms only",
            es: "Efecto limitado solo a átomos de hidrógeno",
            de: "Effekt nur auf Wasserstoffatome beschränkt",
            nl: "Effect beperkt tot alleen waterstofatomen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Paschen-Back effect occurs in strong magnetic fields where the Zeeman energy (μBB) becomes larger than the spin-orbit coupling energy. In this regime, the LS coupling breaks down, and L and S couple independently to the external field rather than to each other. The energy levels are then characterized by ml and ms separately, not by j and mj. This leads to simpler, more symmetric splitting patterns compared to the anomalous Zeeman effect. The transition from weak-field (anomalous Zeeman) to strong-field (Paschen-Back) regime shows how external fields can overcome internal atomic interactions.",
          es: "El efecto Paschen-Back ocurre en campos magnéticos fuertes donde la energía Zeeman (μBB) se vuelve mayor que la energía de acoplamiento espín-órbita. En este régimen, el acoplamiento LS se rompe, y L y S se acoplan independientemente al campo externo en lugar de entre sí. Los niveles de energía se caracterizan entonces por ml y ms por separado, no por j y mj. Esto lleva a patrones de división más simples y simétricos comparados con el efecto Zeeman anómalo. La transición del régimen de campo débil (Zeeman anómalo) al campo fuerte (Paschen-Back) muestra cómo campos externos pueden superar interacciones atómicas internas.",
          de: "Der Paschen-Back-Effekt tritt in starken Magnetfeldern auf, wo die Zeeman-Energie (μBB) größer wird als die Spin-Bahn-Kopplungsenergie. In diesem Regime bricht die LS-Kopplung zusammen, und L und S koppeln unabhängig an das externe Feld statt aneinander. Die Energieniveaus werden dann durch ml und ms separat charakterisiert, nicht durch j und mj. Dies führt zu einfacheren, symmetrischeren Aufspaltungsmustern verglichen mit dem anomalen Zeeman-Effekt. Der Übergang vom Schwachfeld- (anomaler Zeeman) zum Starkfeld- (Paschen-Back) Regime zeigt, wie externe Felder interne atomare Wechselwirkungen überwinden können.",
          nl: "Het Paschen-Back effect treedt op in sterke magnetische velden waar de Zeeman energie (μBB) groter wordt dan de spin-baan kopplingsenergie. In dit regime breekt de LS koppeling af, en L en S koppelen onafhankelijk aan het externe veld in plaats van aan elkaar. De energieniveaus worden dan gekarakteriseerd door ml en ms afzonderlijk, niet door j en mj. Dit leidt tot eenvoudiger, meer symmetrische splitsingspatronen vergeleken met het anomale Zeeman-effect. De overgang van zwak-veld (anomaal Zeeman) naar sterk-veld (Paschen-Back) regime toont hoe externe velden interne atomaire interacties kunnen overwinnen."
        }
      },
      {
        question: {
          en: "What are term symbols and how do they describe atomic states?",
          es: "¿Qué son los símbolos de término y cómo describen estados atómicos?",
          de: "Was sind Termsymbole und wie beschreiben sie atomare Zustände?",
          nl: "Wat zijn termsymbolen en hoe beschrijven ze atomaire toestanden?"
        },
        options: [
          {
            en: "²S+1LJ notation: multiplicity, orbital angular momentum letter, total angular momentum",
            es: "Notación ²S+1LJ: multiplicidad, letra de momento angular orbital, momento angular total",
            de: "²S+1LJ Notation: Multiplizität, Bahndrehimpuls-Buchstabe, Gesamtdrehimpuls",
            nl: "²S+1LJ notatie: multipliciteit, orbitaal hoekimpuls letter, totaal hoekimpuls"
          },
          {
            en: "Simple electron configuration notation like 1s²2s²",
            es: "Notación simple de configuración electrónica como 1s²2s²",
            de: "Einfache Elektronenkonfigurationsnotation wie 1s²2s²",
            nl: "Eenvoudige elektronenconfiguratie notatie zoals 1s²2s²"
          },
          {
            en: "Only describes the number of electrons in an atom",
            es: "Solo describe el número de electrones en un átomo",
            de: "Beschreibt nur die Anzahl der Elektronen in einem Atom",
            nl: "Beschrijft alleen het aantal elektronen in een atoom"
          },
          {
            en: "Notation for nuclear energy levels only",
            es: "Notación solo para niveles de energía nuclear",
            de: "Notation nur für nukleare Energieniveaus",
            nl: "Notatie alleen voor nucleaire energieniveaus"
          }
        ],
        correct: 0,
        explanation: {
          en: "Term symbols use the notation ²S+1LJ to describe atomic states in LS coupling. ²S+1 is the multiplicity (number of possible ms values), L is represented by a letter (S, P, D, F, G... for L = 0, 1, 2, 3, 4...), and J is the total angular momentum quantum number. For example, ³P₂ means S = 1 (triplet), L = 1 (P state), J = 2. Term symbols efficiently convey the angular momentum structure and help predict spectroscopic properties, selection rules, and energy ordering through Hund's rules.",
          es: "Los símbolos de término usan la notación ²S+1LJ para describir estados atómicos en acoplamiento LS. ²S+1 es la multiplicidad (número de valores ms posibles), L se representa por una letra (S, P, D, F, G... para L = 0, 1, 2, 3, 4...), y J es el número cuántico de momento angular total. Por ejemplo, ³P₂ significa S = 1 (triplete), L = 1 (estado P), J = 2. Los símbolos de término transmiten eficientemente la estructura de momento angular y ayudan a predecir propiedades espectroscópicas, reglas de selección, y ordenamiento de energía a través de las reglas de Hund.",
          de: "Termsymbole verwenden die Notation ²S+1LJ zur Beschreibung atomarer Zustände in LS-Kopplung. ²S+1 ist die Multiplizität (Anzahl möglicher ms-Werte), L wird durch einen Buchstaben dargestellt (S, P, D, F, G... für L = 0, 1, 2, 3, 4...), und J ist die Gesamtdrehimpuls-Quantenzahl. Zum Beispiel bedeutet ³P₂: S = 1 (Triplett), L = 1 (P-Zustand), J = 2. Termsymbole vermitteln effizient die Drehimpulsstruktur und helfen bei der Vorhersage spektroskopischer Eigenschaften, Auswahlregeln und Energieordnung durch Hundsche Regeln.",
          nl: "Termsymbolen gebruiken de notatie ²S+1LJ om atomaire toestanden in LS koppeling te beschrijven. ²S+1 is de multipliciteit (aantal mogelijke ms waarden), L wordt weergegeven door een letter (S, P, D, F, G... voor L = 0, 1, 2, 3, 4...), en J is het totale hoekimpuls quantumgetal. Bijvoorbeeld, ³P₂ betekent S = 1 (triplet), L = 1 (P toestand), J = 2. Termsymbolen geven efficiënt de hoekimpulsstructuur weer en helpen spectroscopische eigenschappen, selectieregels, en energie-ordening via Hund's regels te voorspellen."
        }
      },
      {
        question: {
          en: "What is Hund's rule for maximum multiplicity?",
          es: "¿Qué es la regla de Hund para máxima multiplicidad?",
          de: "Was ist die Hundsche Regel für maximale Multiplizität?",
          nl: "Wat is Hund's regel voor maximale multipliciteit?"
        },
        options: [
          {
            en: "Electrons occupy orbitals to maximize total spin S before pairing",
            es: "Los electrones ocupan orbitales para maximizar el espín total S antes de aparearse",
            de: "Elektronen besetzen Orbitale um Gesamtspin S zu maximieren bevor sie paaren",
            nl: "Elektronen bezetten orbitalen om totale spin S te maximaliseren voor paring"
          },
          {
            en: "All electrons must pair immediately in the lowest orbital",
            es: "Todos los electrones deben aparearse inmediatamente en el orbital más bajo",
            de: "Alle Elektronen müssen sofort im niedrigsten Orbital paaren",
            nl: "Alle elektronen moeten onmiddellijk paren in het laagste orbitaal"
          },
          {
            en: "Electrons avoid all orbitals with the same l value",
            es: "Los electrones evitan todos los orbitales con el mismo valor l",
            de: "Elektronen vermeiden alle Orbitale mit demselben l-Wert",
            nl: "Elektronen vermijden alle orbitalen met dezelfde l waarde"
          },
          {
            en: "Spin orientation is random and has no effect on energy",
            es: "La orientación del espín es aleatoria y no tiene efecto en la energía",
            de: "Spin-Orientierung ist zufällig und hat keinen Einfluss auf Energie",
            nl: "Spin-oriëntatie is willekeurig en heeft geen effect op energie"
          }
        ],
        correct: 0,
        explanation: {
          en: "Hund's first rule states that electrons occupy degenerate orbitals singly with parallel spins to maximize the total spin S before any pairing occurs. This minimizes electron-electron repulsion because electrons with parallel spins must have different spatial wave functions (by the Pauli principle), keeping them farther apart on average. For example, in a p³ configuration, all three electrons have parallel spins in separate px, py, pz orbitals, giving S = 3/2. This rule, combined with Hund's second and third rules, determines the ground state term symbol of atoms.",
          es: "La primera regla de Hund establece que los electrones ocupan orbitales degenerados individualmente con espines paralelos para maximizar el espín total S antes de que ocurra cualquier apareamiento. Esto minimiza la repulsión electrón-electrón porque electrones con espines paralelos deben tener diferentes funciones de onda espaciales (por el principio de Pauli), manteniéndolos más separados en promedio. Por ejemplo, en una configuración p³, los tres electrones tienen espines paralelos en orbitales px, py, pz separados, dando S = 3/2. Esta regla, combinada con las segunda y tercera reglas de Hund, determina el símbolo de término del estado fundamental de átomos.",
          de: "Die erste Hundsche Regel besagt, dass Elektronen entartete Orbitale einzeln mit parallelen Spins besetzen, um den Gesamtspin S zu maximieren, bevor eine Paarung auftritt. Dies minimiert Elektron-Elektron-Abstoßung, weil Elektronen mit parallelen Spins verschiedene räumliche Wellenfunktionen haben müssen (nach dem Pauli-Prinzip), was sie im Durchschnitt weiter auseinander hält. Zum Beispiel haben in einer p³-Konfiguration alle drei Elektronen parallele Spins in getrennten px-, py-, pz-Orbitalen, was S = 3/2 ergibt. Diese Regel bestimmt zusammen mit der zweiten und dritten Hundschen Regel das Grundzustandstermsymbol von Atomen.",
          nl: "Hund's eerste regel stelt dat elektronen gedegenereerde orbitalen enkelvoudig bezetten met parallelle spins om de totale spin S te maximaliseren voordat enige paring optreedt. Dit minimaliseert elektron-elektron afstoting omdat elektronen met parallelle spins verschillende ruimtelijke golffuncties moeten hebben (door het Pauli-principe), wat ze gemiddeld verder uit elkaar houdt. Bijvoorbeeld, in een p³ configuratie hebben alle drie elektronen parallelle spins in afzonderlijke px, py, pz orbitalen, wat S = 3/2 geeft. Deze regel, gecombineerd met Hund's tweede en derde regels, bepaalt het grondtoestand termsymbool van atomen."
        }
      },
      {
        question: {
          en: "What is the Landé g-factor and how is it calculated?",
          es: "¿Qué es el factor g de Landé y cómo se calcula?",
          de: "Was ist der Landé-g-Faktor und wie wird er berechnet?",
          nl: "Wat is de Landé g-factor en hoe wordt hij berekend?"
        },
        options: [
          {
            en: "gJ = 1 + [J(J+1) - L(L+1) + S(S+1)]/[2J(J+1)], accounts for different g-values of L and S",
            es: "gJ = 1 + [J(J+1) - L(L+1) + S(S+1)]/[2J(J+1)], considera diferentes valores g de L y S",
            de: "gJ = 1 + [J(J+1) - L(L+1) + S(S+1)]/[2J(J+1)], berücksichtigt verschiedene g-Werte von L und S",
            nl: "gJ = 1 + [J(J+1) - L(L+1) + S(S+1)]/[2J(J+1)], houdt rekening met verschillende g-waarden van L en S"
          },
          {
            en: "g-factor is always exactly 2 for all atoms",
            es: "El factor g es siempre exactamente 2 para todos los átomos",
            de: "g-Faktor ist immer genau 2 für alle Atome",
            nl: "g-factor is altijd precies 2 voor alle atomen"
          },
          {
            en: "g-factor equals the atomic number Z",
            es: "El factor g es igual al número atómico Z",
            de: "g-Faktor gleicht der Ordnungszahl Z",
            nl: "g-factor is gelijk aan het atoomnummer Z"
          },
          {
            en: "g-factor is undefined in quantum mechanics",
            es: "El factor g no está definido en mecánica cuántica",
            de: "g-Faktor ist in der Quantenmechanik undefiniert",
            nl: "g-factor is ongedefinieerd in quantummechanica"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Landé g-factor accounts for the fact that orbital (gl = 1) and spin (gs ≈ 2) angular momenta have different magnetic moments. In LS coupling, when L and S combine to form J, the effective g-factor becomes gJ = 1 + [J(J+1) - L(L+1) + S(S+1)]/[2J(J+1)]. This formula gives the ratio of the magnetic moment to the angular momentum for the coupled state. For pure orbital momentum (S=0), gJ = 1; for pure spin (L=0), gJ = 2. The Landé g-factor is crucial for understanding Zeeman splitting and magnetic properties of atoms.",
          es: "El factor g de Landé considera que los momentos angulares orbital (gl = 1) y de espín (gs ≈ 2) tienen diferentes momentos magnéticos. En acoplamiento LS, cuando L y S se combinan para formar J, el factor g efectivo se vuelve gJ = 1 + [J(J+1) - L(L+1) + S(S+1)]/[2J(J+1)]. Esta fórmula da la razón del momento magnético al momento angular para el estado acoplado. Para momento orbital puro (S=0), gJ = 1; para espín puro (L=0), gJ = 2. El factor g de Landé es crucial para entender la división Zeeman y propiedades magnéticas de átomos.",
          de: "Der Landé-g-Faktor berücksichtigt, dass Bahn- (gl = 1) und Spin- (gs ≈ 2) Drehimpulse verschiedene magnetische Momente haben. In LS-Kopplung, wenn L und S sich zu J verbinden, wird der effektive g-Faktor gJ = 1 + [J(J+1) - L(L+1) + S(S+1)]/[2J(J+1)]. Diese Formel gibt das Verhältnis des magnetischen Moments zum Drehimpuls für den gekoppelten Zustand. Für reinen Bahndrehimpuls (S=0) ist gJ = 1; für reinen Spin (L=0) ist gJ = 2. Der Landé-g-Faktor ist entscheidend für das Verständnis der Zeeman-Aufspaltung und magnetischer Eigenschaften von Atomen.",
          nl: "De Landé g-factor houdt rekening met het feit dat orbitaal (gl = 1) en spin (gs ≈ 2) hoekimpulsen verschillende magnetische momenten hebben. In LS koppeling, wanneer L en S combineren tot J, wordt de effectieve g-factor gJ = 1 + [J(J+1) - L(L+1) + S(S+1)]/[2J(J+1)]. Deze formule geeft de verhouding van het magnetische moment tot het hoekimpuls voor de gekoppelde toestand. Voor puur orbitaal momentum (S=0), gJ = 1; voor pure spin (L=0), gJ = 2. De Landé g-factor is cruciaal voor het begrijpen van Zeeman splitsing en magnetische eigenschappen van atomen."
        }
      },
      {
        question: {
          en: "What is the vector model of angular momentum?",
          es: "¿Qué es el modelo vectorial del momento angular?",
          de: "Was ist das Vektormodell des Drehimpulses?",
          nl: "Wat is het vectormodel van hoekimpuls?"
        },
        options: [
          {
            en: "Semi-classical visualization where L and S precess around J, which precesses around z-axis",
            es: "Visualización semi-clásica donde L y S precesan alrededor de J, que precesa alrededor del eje z",
            de: "Halbklassische Visualisierung wo L und S um J präzedieren, welches um die z-Achse präzediert",
            nl: "Semi-klassieke visualisatie waar L en S precederen rond J, die precedeert rond de z-as"
          },
          {
            en: "Exact classical description of electron orbits",
            es: "Descripción clásica exacta de órbitas electrónicas",
            de: "Exakte klassische Beschreibung von Elektronenbahnen",
            nl: "Exacte klassieke beschrijving van elektronbanen"
          },
          {
            en: "Model where all angular momenta are aligned",
            es: "Modelo donde todos los momentos angulares están alineados",
            de: "Modell wo alle Drehimpulse ausgerichtet sind",
            nl: "Model waar alle hoekimpulsen uitgelijnd zijn"
          },
          {
            en: "Statistical model with no physical meaning",
            es: "Modelo estadístico sin significado físico",
            de: "Statistisches Modell ohne physikalische Bedeutung",
            nl: "Statistisch model zonder fysieke betekenis"
          }
        ],
        correct: 0,
        explanation: {
          en: "The vector model is a semi-classical visualization tool for understanding angular momentum coupling in atoms. In this model, angular momentum vectors are drawn with lengths proportional to ℏ√[j(j+1)], and they precess around their resultant due to the uncertainty principle (we can't know all components simultaneously). For LS coupling, L and S precess rapidly around J (due to spin-orbit coupling), while J precesses slowly around the z-axis (in an external field). This model helps visualize selection rules, coupling schemes, and magnetic interactions, though it's not fully quantum mechanically accurate.",
          es: "El modelo vectorial es una herramienta de visualización semi-clásica para entender el acoplamiento de momento angular en átomos. En este modelo, los vectores de momento angular se dibujan con longitudes proporcionales a ℏ√[j(j+1)], y precesan alrededor de su resultante debido al principio de incertidumbre (no podemos conocer todos los componentes simultáneamente). Para acoplamiento LS, L y S precesan rápidamente alrededor de J (debido al acoplamiento espín-órbita), mientras J precesa lentamente alrededor del eje z (en un campo externo). Este modelo ayuda a visualizar reglas de selección, esquemas de acoplamiento e interacciones magnéticas, aunque no es completamente preciso cuántico-mecánicamente.",
          de: "Das Vektormodell ist ein halbklassisches Visualisierungswerkzeug zum Verständnis der Drehimpulskopplung in Atomen. In diesem Modell werden Drehimpulsvektoren mit Längen proportional zu ℏ√[j(j+1)] gezeichnet, und sie präzedieren um ihre Resultante aufgrund der Unschärferelation (wir können nicht alle Komponenten gleichzeitig kennen). Für LS-Kopplung präzedieren L und S schnell um J (wegen Spin-Bahn-Kopplung), während J langsam um die z-Achse präzediert (in einem externen Feld). Dieses Modell hilft bei der Visualisierung von Auswahlregeln, Kopplungsschemata und magnetischen Wechselwirkungen, obwohl es nicht vollständig quantenmechanisch korrekt ist.",
          nl: "Het vectormodel is een semi-klassiek visualisatiehulpmiddel voor het begrijpen van hoekimpulskoppeling in atomen. In dit model worden hoekimpulsvectoren getekend met lengtes evenredig aan ℏ√[j(j+1)], en ze precederen rond hun resultante vanwege het onzekerheidsprincipe (we kunnen niet alle componenten gelijktijdig kennen). Voor LS koppeling precederen L en S snel rond J (door spin-baan koppeling), terwijl J langzaam precedeert rond de z-as (in een extern veld). Dit model helpt bij het visualiseren van selectieregels, koppelingsschema's en magnetische interacties, hoewel het niet volledig quantummechanisch accuraat is."
        }
      },
      {
        question: {
          en: "What are selection rules for electric dipole transitions involving angular momentum?",
          es: "¿Cuáles son las reglas de selección para transiciones dipolo eléctrico involucrando momento angular?",
          de: "Was sind die Auswahlregeln für elektrische Dipolübergänge mit Drehimpuls?",
          nl: "Wat zijn de selectieregels voor elektrische dipool overgangen met hoekimpuls?"
        },
        options: [
          {
            en: "ΔL = ±1, ΔS = 0, ΔJ = 0, ±1 (but J=0 ↔ J=0 forbidden)",
            es: "ΔL = ±1, ΔS = 0, ΔJ = 0, ±1 (pero J=0 ↔ J=0 prohibido)",
            de: "ΔL = ±1, ΔS = 0, ΔJ = 0, ±1 (aber J=0 ↔ J=0 verboten)",
            nl: "ΔL = ±1, ΔS = 0, ΔJ = 0, ±1 (maar J=0 ↔ J=0 verboden)"
          },
          {
            en: "All transitions are allowed between any states",
            es: "Todas las transiciones están permitidas entre cualquier estado",
            de: "Alle Übergänge sind zwischen beliebigen Zuständen erlaubt",
            nl: "Alle overgangen zijn toegestaan tussen alle toestanden"
          },
          {
            en: "Only ΔJ = ±2 transitions are allowed",
            es: "Solo transiciones ΔJ = ±2 están permitidas",
            de: "Nur ΔJ = ±2 Übergänge sind erlaubt",
            nl: "Alleen ΔJ = ±2 overgangen zijn toegestaan"
          },
          {
            en: "No transitions involving angular momentum change are possible",
            es: "No son posibles transiciones que involucren cambio de momento angular",
            de: "Keine Übergänge mit Drehimpulsänderung sind möglich",
            nl: "Geen overgangen met hoekimpulsverandering zijn mogelijk"
          }
        ],
        correct: 0,
        explanation: {
          en: "Selection rules for electric dipole transitions arise from conservation of angular momentum and parity. The photon carries one unit of angular momentum, leading to ΔL = ±1 (parity change requirement). Since photons don't interact with spin directly, ΔS = 0. For total angular momentum, ΔJ = 0, ±1, but J=0 ↔ J=0 is forbidden (a photon must carry angular momentum). These rules determine which spectral lines are observed and their relative intensities. Forbidden transitions can occur through magnetic dipole or electric quadrupole radiation, but are much weaker.",
          es: "Las reglas de selección para transiciones dipolo eléctrico surgen de la conservación del momento angular y paridad. El fotón lleva una unidad de momento angular, llevando a ΔL = ±1 (requisito de cambio de paridad). Como los fotones no interactúan directamente con el espín, ΔS = 0. Para momento angular total, ΔJ = 0, ±1, pero J=0 ↔ J=0 está prohibido (un fotón debe llevar momento angular). Estas reglas determinan qué líneas espectrales se observan y sus intensidades relativas. Las transiciones prohibidas pueden ocurrir a través de radiación dipolo magnético o cuadrupolo eléctrico, pero son mucho más débiles.",
          de: "Auswahlregeln für elektrische Dipolübergänge entstehen aus der Erhaltung von Drehimpuls und Parität. Das Photon trägt eine Einheit Drehimpuls, was zu ΔL = ±1 führt (Paritätswechsel-Anforderung). Da Photonen nicht direkt mit Spin wechselwirken, ist ΔS = 0. Für den Gesamtdrehimpuls gilt ΔJ = 0, ±1, aber J=0 ↔ J=0 ist verboten (ein Photon muss Drehimpuls tragen). Diese Regeln bestimmen, welche Spektrallinien beobachtet werden und ihre relativen Intensitäten. Verbotene Übergänge können durch magnetische Dipol- oder elektrische Quadrupolstrahlung auftreten, sind aber viel schwächer.",
          nl: "Selectieregels voor elektrische dipool overgangen ontstaan uit behoud van hoekimpuls en pariteit. Het foton draagt één eenheid hoekimpuls, wat leidt tot ΔL = ±1 (pariteitsverandering vereist). Omdat fotonen niet direct interacteren met spin, ΔS = 0. Voor totaal hoekimpuls, ΔJ = 0, ±1, maar J=0 ↔ J=0 is verboden (een foton moet hoekimpuls dragen). Deze regels bepalen welke spectrale lijnen worden waargenomen en hun relatieve intensiteiten. Verboden overgangen kunnen optreden via magnetische dipool of elektrische quadrupool straling, maar zijn veel zwakker."
        }
      },
      {
        question: {
          en: "What is the spin-statistics theorem?",
          es: "¿Qué es el teorema de espín-estadística?",
          de: "Was ist das Spin-Statistik-Theorem?",
          nl: "Wat is de spin-statistiek stelling?"
        },
        options: [
          {
            en: "Half-integer spin particles are fermions (antisymmetric), integer spin are bosons (symmetric)",
            es: "Partículas de espín semi-entero son fermiones (antisimétrico), espín entero son bosones (simétrico)",
            de: "Halbzahlige Spin-Teilchen sind Fermionen (antisymmetrisch), ganzzahlige Spin sind Bosonen (symmetrisch)",
            nl: "Half-geheel spin deeltjes zijn fermionen (antisymmetrisch), geheel spin zijn bosonen (symmetrisch)"
          },
          {
            en: "All particles follow the same statistics regardless of spin",
            es: "Todas las partículas siguen la misma estadística independientemente del espín",
            de: "Alle Teilchen folgen derselben Statistik unabhängig vom Spin",
            nl: "Alle deeltjes volgen dezelfde statistiek ongeacht spin"
          },
          {
            en: "Spin determines particle mass",
            es: "El espín determina la masa de la partícula",
            de: "Spin bestimmt die Teilchenmasse",
            nl: "Spin bepaalt deeltjesmassa"
          },
          {
            en: "Statistics are random and unrelated to spin",
            es: "Las estadísticas son aleatorias y no relacionadas con el espín",
            de: "Statistiken sind zufällig und nicht mit Spin verbunden",
            nl: "Statistiek is willekeurig en ongerelateerd aan spin"
          }
        ],
        correct: 0,
        explanation: {
          en: "The spin-statistics theorem is a fundamental result in quantum field theory stating that particles with half-integer spin (1/2, 3/2, ...) are fermions and obey Fermi-Dirac statistics with antisymmetric wave functions, while particles with integer spin (0, 1, 2, ...) are bosons and obey Bose-Einstein statistics with symmetric wave functions. This connection between spin and statistics has profound consequences: fermions obey the Pauli exclusion principle (leading to atomic structure and chemistry), while bosons can occupy the same quantum state (enabling phenomena like lasers and Bose-Einstein condensation).",
          es: "El teorema de espín-estadística es un resultado fundamental en teoría cuántica de campos que establece que partículas con espín semi-entero (1/2, 3/2, ...) son fermiones y obedecen estadística de Fermi-Dirac con funciones de onda antisimétricas, mientras partículas con espín entero (0, 1, 2, ...) son bosones y obedecen estadística de Bose-Einstein con funciones de onda simétricas. Esta conexión entre espín y estadística tiene consecuencias profundas: fermiones obedecen el principio de exclusión de Pauli (llevando a estructura atómica y química), mientras bosones pueden ocupar el mismo estado cuántico (permitiendo fenómenos como láseres y condensación de Bose-Einstein).",
          de: "Das Spin-Statistik-Theorem ist ein fundamentales Ergebnis der Quantenfeldtheorie, das besagt, dass Teilchen mit halbzahligem Spin (1/2, 3/2, ...) Fermionen sind und der Fermi-Dirac-Statistik mit antisymmetrischen Wellenfunktionen gehorchen, während Teilchen mit ganzzahligem Spin (0, 1, 2, ...) Bosonen sind und der Bose-Einstein-Statistik mit symmetrischen Wellenfunktionen folgen. Diese Verbindung zwischen Spin und Statistik hat tiefgreifende Konsequenzen: Fermionen gehorchen dem Pauli-Ausschlussprinzip (führt zu Atomstruktur und Chemie), während Bosonen denselben Quantenzustand besetzen können (ermöglicht Phänomene wie Laser und Bose-Einstein-Kondensation).",
          nl: "De spin-statistiek stelling is een fundamenteel resultaat in quantumveldentheorie dat stelt dat deeltjes met half-geheel spin (1/2, 3/2, ...) fermionen zijn en Fermi-Dirac statistiek volgen met antisymmetrische golffuncties, terwijl deeltjes met geheel spin (0, 1, 2, ...) bosonen zijn en Bose-Einstein statistiek volgen met symmetrische golffuncties. Deze connectie tussen spin en statistiek heeft diepgaande consequenties: fermionen gehoorzamen het Pauli uitsluitingsprincipe (leidend tot atomaire structuur en chemie), terwijl bosonen dezelfde quantumtoestand kunnen bezetten (mogelijk makend fenomenen zoals lasers en Bose-Einstein condensatie)."
        }
      },
      {
        question: {
          en: "What is the origin of the fine structure constant α ≈ 1/137?",
          es: "¿Cuál es el origen de la constante de estructura fina α ≈ 1/137?",
          de: "Was ist der Ursprung der Feinstrukturkonstante α ≈ 1/137?",
          nl: "Wat is de oorsprong van de fijnstructuur constante α ≈ 1/137?"
        },
        options: [
          {
            en: "α = e²/(4πε₀ℏc), dimensionless measure of electromagnetic coupling strength",
            es: "α = e²/(4πε₀ℏc), medida adimensional de la fuerza de acoplamiento electromagnético",
            de: "α = e²/(4πε₀ℏc), dimensionslose Maß der elektromagnetischen Kopplungsstärke",
            nl: "α = e²/(4πε₀ℏc), dimensieloze maat voor elektromagnetische koppelingskracht"
          },
          {
            en: "Arbitrary constant with no physical meaning",
            es: "Constante arbitraria sin significado físico",
            de: "Willkürliche Konstante ohne physikalische Bedeutung",
            nl: "Willekeurige constante zonder fysieke betekenis"
          },
          {
            en: "Ratio of electron mass to proton mass",
            es: "Razón de masa del electrón a masa del protón",
            de: "Verhältnis von Elektronenmasse zu Protonenmasse",
            nl: "Verhouding van elektronmassa tot protonmassa"
          },
          {
            en: "Speed of light in atomic units",
            es: "Velocidad de la luz en unidades atómicas",
            de: "Lichtgeschwindigkeit in atomaren Einheiten",
            nl: "Lichtsnelheid in atomaire eenheden"
          }
        ],
        correct: 0,
        explanation: {
          en: "The fine structure constant α = e²/(4πε₀ℏc) ≈ 1/137 is a fundamental dimensionless constant that characterizes the strength of electromagnetic interaction. It appears naturally in atomic physics: fine structure splitting is proportional to α², the ratio of electron velocity in the first Bohr orbit to c is α, and higher-order QED corrections involve powers of α. Its value determines atomic structure, chemistry, and even the stability of matter. The fact that α << 1 makes perturbation theory in QED extremely accurate. Its origin and precise value remain among physics' deepest mysteries.",
          es: "La constante de estructura fina α = e²/(4πε₀ℏc) ≈ 1/137 es una constante fundamental adimensional que caracteriza la fuerza de interacción electromagnética. Aparece naturalmente en física atómica: la división de estructura fina es proporcional a α², la razón de velocidad del electrón en la primera órbita de Bohr a c es α, y correcciones QED de orden superior involucran potencias de α. Su valor determina estructura atómica, química, e incluso la estabilidad de la materia. El hecho de que α << 1 hace la teoría de perturbaciones en QED extremadamente precisa. Su origen y valor preciso permanecen entre los misterios más profundos de la física.",
          de: "Die Feinstrukturkonstante α = e²/(4πε₀ℏc) ≈ 1/137 ist eine fundamentale dimensionslose Konstante, die die Stärke der elektromagnetischen Wechselwirkung charakterisiert. Sie erscheint natürlich in der Atomphysik: Feinstrukturaufspaltung ist proportional zu α², das Verhältnis der Elektronengeschwindigkeit in der ersten Bohr-Bahn zu c ist α, und höhere QED-Korrekturen beinhalten Potenzen von α. Ihr Wert bestimmt Atomstruktur, Chemie und sogar die Stabilität der Materie. Die Tatsache, dass α << 1 macht Störungstheorie in QED extrem genau. Ihr Ursprung und genauer Wert bleiben unter den tiefsten Mysterien der Physik.",
          nl: "De fijnstructuur constante α = e²/(4πε₀ℏc) ≈ 1/137 is een fundamentele dimensieloze constante die de sterkte van elektromagnetische interactie karakteriseert. Het verschijnt natuurlijk in atomaire fysica: fijnstructuur splitsing is evenredig met α², de verhouding van elektronsnelheid in de eerste Bohr baan tot c is α, en hogere-orde QED correcties bevatten machten van α. Zijn waarde bepaalt atomaire structuur, chemie, en zelfs de stabiliteit van materie. Het feit dat α << 1 maakt perturbatietheorie in QED extreem nauwkeurig. Zijn oorsprong en precieze waarde blijven onder de diepste mysteries van de fysica."
        }
      },
      {
        question: {
          en: "What is the role of orbital angular momentum in optical vortices?",
          es: "¿Cuál es el papel del momento angular orbital en vórtices ópticos?",
          de: "Was ist die Rolle des Bahndrehimpulses in optischen Wirbeln?",
          nl: "Wat is de rol van orbitaal hoekimpuls in optische vortices?"
        },
        options: [
          {
            en: "Light beams can carry orbital angular momentum lℏ per photon with helical phase fronts",
            es: "Los haces de luz pueden llevar momento angular orbital lℏ por fotón con frentes de fase helicoidales",
            de: "Lichtstrahlen können Bahndrehimpuls lℏ pro Photon mit helikalen Phasenfronten tragen",
            nl: "Lichtbundels kunnen orbitaal hoekimpuls lℏ per foton dragen met spiraalvormige fasefronten"
          },
          {
            en: "Light cannot carry any angular momentum",
            es: "La luz no puede llevar momento angular",
            de: "Licht kann keinen Drehimpuls tragen",
            nl: "Licht kan geen hoekimpuls dragen"
          },
          {
            en: "Only electrons can have orbital angular momentum",
            es: "Solo los electrones pueden tener momento angular orbital",
            de: "Nur Elektronen können Bahndrehimpuls haben",
            nl: "Alleen elektronen kunnen orbitaal hoekimpuls hebben"
          },
          {
            en: "Optical vortices violate angular momentum conservation",
            es: "Los vórtices ópticos violan la conservación del momento angular",
            de: "Optische Wirbel verletzen die Drehimpulserhaltung",
            nl: "Optische vortices schenden behoud van hoekimpuls"
          }
        ],
        correct: 0,
        explanation: {
          en: "Optical vortices are light beams with helical phase fronts that carry orbital angular momentum (OAM) distinct from spin angular momentum (circular polarization). The phase varies as exp(ilφ) around the beam axis, where l is the topological charge. Each photon carries lℏ of OAM, with l taking any integer value (positive, negative, or zero). This has applications in optical manipulation (optical tweezers with torque), quantum information (high-dimensional quantum states), astronomy (detecting rotating objects), and telecommunications (multiplexing channels). The discovery that light can carry OAM has opened new fields in modern optics.",
          es: "Los vórtices ópticos son haces de luz con frentes de fase helicoidales que llevan momento angular orbital (MAO) distinto del momento angular de espín (polarización circular). La fase varía como exp(ilφ) alrededor del eje del haz, donde l es la carga topológica. Cada fotón lleva lℏ de MAO, con l tomando cualquier valor entero (positivo, negativo o cero). Esto tiene aplicaciones en manipulación óptica (pinzas ópticas con torque), información cuántica (estados cuánticos de alta dimensión), astronomía (detectar objetos rotantes), y telecomunicaciones (multiplexar canales). El descubrimiento de que la luz puede llevar MAO ha abierto nuevos campos en óptica moderna.",
          de: "Optische Wirbel sind Lichtstrahlen mit helikalen Phasenfronten, die Bahndrehimpuls (BDI) tragen, der sich vom Spin-Drehimpuls (zirkulare Polarisation) unterscheidet. Die Phase variiert als exp(ilφ) um die Strahlachse, wobei l die topologische Ladung ist. Jedes Photon trägt lℏ an BDI, wobei l jeden ganzzahligen Wert annehmen kann (positiv, negativ oder null). Dies hat Anwendungen in optischer Manipulation (optische Pinzetten mit Drehmoment), Quanteninformation (hochdimensionale Quantenzustände), Astronomie (rotierende Objekte detektieren) und Telekommunikation (Kanäle multiplexen). Die Entdeckung, dass Licht BDI tragen kann, hat neue Felder in der modernen Optik eröffnet.",
          nl: "Optische vortices zijn lichtbundels met spiraalvormige fasefronten die orbitaal hoekimpuls (OAM) dragen verschillend van spin hoekimpuls (circulaire polarisatie). De fase varieert als exp(ilφ) rond de bundelas, waar l de topologische lading is. Elk foton draagt lℏ aan OAM, met l nemend elke gehele waarde (positief, negatief, of nul). Dit heeft toepassingen in optische manipulatie (optische pincetten met koppel), quantuminformatie (hoog-dimensionale quantumtoestanden), astronomie (roterende objecten detecteren), en telecommunicatie (kanalen multiplexen). De ontdekking dat licht OAM kan dragen heeft nieuwe velden in moderne optica geopend."
        }
      },
      {
        question: {
          en: "What is nuclear magnetic resonance (NMR) and its relation to nuclear spin?",
          es: "¿Qué es la resonancia magnética nuclear (RMN) y su relación con el espín nuclear?",
          de: "Was ist Kernspinresonanz (NMR) und ihre Beziehung zum Kernspin?",
          nl: "Wat is nucleaire magnetische resonantie (NMR) en zijn relatie tot nucleaire spin?"
        },
        options: [
          {
            en: "Nuclei with spin absorb RF radiation when in magnetic field at Larmor frequency ω = γB",
            es: "Núcleos con espín absorben radiación RF cuando están en campo magnético a frecuencia de Larmor ω = γB",
            de: "Kerne mit Spin absorbieren RF-Strahlung im Magnetfeld bei Larmor-Frequenz ω = γB",
            nl: "Kernen met spin absorberen RF straling in magnetisch veld bij Larmor frequentie ω = γB"
          },
          {
            en: "Only electrons show magnetic resonance",
            es: "Solo los electrones muestran resonancia magnética",
            de: "Nur Elektronen zeigen magnetische Resonanz",
            nl: "Alleen elektronen tonen magnetische resonantie"
          },
          {
            en: "NMR works without any magnetic field",
            es: "RMN funciona sin ningún campo magnético",
            de: "NMR funktioniert ohne jedes Magnetfeld",
            nl: "NMR werkt zonder enig magnetisch veld"
          },
          {
            en: "Nuclear spin has no observable effects",
            es: "El espín nuclear no tiene efectos observables",
            de: "Kernspin hat keine beobachtbaren Effekte",
            nl: "Nucleaire spin heeft geen waarneembare effecten"
          }
        ],
        correct: 0,
        explanation: {
          en: "Nuclear Magnetic Resonance occurs when atomic nuclei with non-zero spin (like ¹H, ¹³C, ³¹P) are placed in a strong magnetic field B₀. The nuclear magnetic moments align with or against the field, creating energy levels split by ΔE = γℏB₀, where γ is the gyromagnetic ratio. Transitions between these levels can be induced by radiofrequency radiation at the Larmor frequency ω = γB₀. Chemical shifts arise because electron clouds shield nuclei from the external field. NMR is fundamental for molecular structure determination, medical imaging (MRI), and quantum computing with nuclear spins.",
          es: "La Resonancia Magnética Nuclear ocurre cuando núcleos atómicos con espín no cero (como ¹H, ¹³C, ³¹P) se colocan en un campo magnético fuerte B₀. Los momentos magnéticos nucleares se alinean con o contra el campo, creando niveles de energía divididos por ΔE = γℏB₀, donde γ es la razón giromagnética. Las transiciones entre estos niveles pueden ser inducidas por radiación de radiofrecuencia a la frecuencia de Larmor ω = γB₀. Los desplazamientos químicos surgen porque las nubes electrónicas blindan los núcleos del campo externo. RMN es fundamental para determinación de estructura molecular, imagen médica (MRI), y computación cuántica con espines nucleares.",
          de: "Kernspinresonanz tritt auf, wenn Atomkerne mit nicht-null Spin (wie ¹H, ¹³C, ³¹P) in ein starkes Magnetfeld B₀ gebracht werden. Die kernmagnetischen Momente richten sich mit oder gegen das Feld aus und erzeugen Energieniveaus, die um ΔE = γℏB₀ aufgespalten sind, wobei γ das gyromagnetische Verhältnis ist. Übergänge zwischen diesen Niveaus können durch Radiofrequenzstrahlung bei der Larmor-Frequenz ω = γB₀ induziert werden. Chemische Verschiebungen entstehen, weil Elektronenwolken Kerne vom externen Feld abschirmen. NMR ist fundamental für Molekülstrukturbestimmung, medizinische Bildgebung (MRT) und Quantencomputing mit Kernspins.",
          nl: "Nucleaire Magnetische Resonantie treedt op wanneer atoomkernen met niet-nul spin (zoals ¹H, ¹³C, ³¹P) in een sterk magnetisch veld B₀ worden geplaatst. De nucleaire magnetische momenten richten zich met of tegen het veld, creërend energieniveaus gesplitst door ΔE = γℏB₀, waar γ de gyromagnetische verhouding is. Overgangen tussen deze niveaus kunnen worden geïnduceerd door radiofrequentie straling bij de Larmor frequentie ω = γB₀. Chemische verschuivingen ontstaan omdat elektronenwolken kernen afschermen van het externe veld. NMR is fundamenteel voor moleculaire structuurbepaling, medische beeldvorming (MRI), en quantumcomputing met nucleaire spins."
        }
      },
      {
        question: {
          en: "What is Berry phase in angular momentum systems?",
          es: "¿Qué es la fase de Berry en sistemas de momento angular?",
          de: "Was ist die Berry-Phase in Drehimpulssystemen?",
          nl: "Wat is Berry fase in hoekimpuls systemen?"
        },
        options: [
          {
            en: "Geometric phase acquired when angular momentum state undergoes adiabatic cyclic evolution",
            es: "Fase geométrica adquirida cuando estado de momento angular sufre evolución cíclica adiabática",
            de: "Geometrische Phase erworben wenn Drehimpulszustand adiabatische zyklische Evolution durchläuft",
            nl: "Geometrische fase verkregen wanneer hoekimpulstoestand adiabatische cyclische evolutie ondergaat"
          },
          {
            en: "Random phase with no physical significance",
            es: "Fase aleatoria sin significado físico",
            de: "Zufällige Phase ohne physikalische Bedeutung",
            nl: "Willekeurige fase zonder fysieke betekenis"
          },
          {
            en: "Phase that only appears in classical mechanics",
            es: "Fase que solo aparece en mecánica clásica",
            de: "Phase die nur in klassischer Mechanik erscheint",
            nl: "Fase die alleen in klassieke mechanica verschijnt"
          },
          {
            en: "Energy difference between spin states",
            es: "Diferencia de energía entre estados de espín",
            de: "Energiedifferenz zwischen Spinzuständen",
            nl: "Energieverschil tussen spintoestanden"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Berry phase (or geometric phase) is a quantum mechanical phase acquired by a system when its parameters undergo cyclic adiabatic evolution. For angular momentum, when the quantization axis is slowly rotated through a closed path, the state acquires a phase γ = -mΩ, where m is the magnetic quantum number and Ω is the solid angle subtended by the path. This phase is purely geometric, depending only on the path geometry, not the rate of traversal. Berry phases appear in molecular dynamics (Jahn-Teller effect), quantum Hall effect, and have been measured in neutron interferometry and NMR experiments.",
          es: "La fase de Berry (o fase geométrica) es una fase mecánico-cuántica adquirida por un sistema cuando sus parámetros sufren evolución cíclica adiabática. Para momento angular, cuando el eje de cuantización se rota lentamente a través de un camino cerrado, el estado adquiere una fase γ = -mΩ, donde m es el número cuántico magnético y Ω es el ángulo sólido subtendido por el camino. Esta fase es puramente geométrica, dependiendo solo de la geometría del camino, no de la velocidad de recorrido. Las fases de Berry aparecen en dinámica molecular (efecto Jahn-Teller), efecto Hall cuántico, y han sido medidas en interferometría de neutrones y experimentos RMN.",
          de: "Die Berry-Phase (oder geometrische Phase) ist eine quantenmechanische Phase, die ein System erwirbt, wenn seine Parameter eine zyklische adiabatische Evolution durchlaufen. Für Drehimpuls, wenn die Quantisierungsachse langsam durch einen geschlossenen Pfad rotiert wird, erwirbt der Zustand eine Phase γ = -mΩ, wobei m die magnetische Quantenzahl und Ω der vom Pfad aufgespannte Raumwinkel ist. Diese Phase ist rein geometrisch, hängt nur von der Pfadgeometrie ab, nicht von der Durchlaufgeschwindigkeit. Berry-Phasen erscheinen in Moleküldynamik (Jahn-Teller-Effekt), Quanten-Hall-Effekt, und wurden in Neutroneninterferometrie und NMR-Experimenten gemessen.",
          nl: "De Berry fase (of geometrische fase) is een quantummechanische fase verkregen door een systeem wanneer zijn parameters cyclische adiabatische evolutie ondergaan. Voor hoekimpuls, wanneer de kwantisatie-as langzaam door een gesloten pad wordt geroteerd, verkrijgt de toestand een fase γ = -mΩ, waar m het magnetische quantumgetal is en Ω de ruimtehoek opgespannen door het pad. Deze fase is puur geometrisch, hangt alleen af van de padgeometrie, niet van de doorloopsnelheid. Berry fasen verschijnen in moleculaire dynamica (Jahn-Teller effect), quantum Hall effect, en zijn gemeten in neutron interferometrie en NMR experimenten."
        }
      },
      {
        question: {
          en: "What is the role of angular momentum in atomic clocks?",
          es: "¿Cuál es el papel del momento angular en relojes atómicos?",
          de: "Was ist die Rolle des Drehimpulses in Atomuhren?",
          nl: "Wat is de rol van hoekimpuls in atomaire klokken?"
        },
        options: [
          {
            en: "Hyperfine transitions between F levels provide extremely stable frequency standards",
            es: "Transiciones hiperfinas entre niveles F proporcionan estándares de frecuencia extremadamente estables",
            de: "Hyperfein-Übergänge zwischen F-Niveaus liefern extrem stabile Frequenzstandards",
            nl: "Hyperfijne overgangen tussen F niveaus leveren extreem stabiele frequentiestandaarden"
          },
          {
            en: "Angular momentum has no role in timekeeping",
            es: "El momento angular no tiene papel en el cronometraje",
            de: "Drehimpuls hat keine Rolle in der Zeitmessung",
            nl: "Hoekimpuls heeft geen rol in tijdmeting"
          },
          {
            en: "Only mechanical rotation is used in atomic clocks",
            es: "Solo rotación mecánica se usa en relojes atómicos",
            de: "Nur mechanische Rotation wird in Atomuhren verwendet",
            nl: "Alleen mechanische rotatie wordt gebruikt in atomaire klokken"
          },
          {
            en: "Atomic clocks measure classical angular velocity",
            es: "Los relojes atómicos miden velocidad angular clásica",
            de: "Atomuhren messen klassische Winkelgeschwindigkeit",
            nl: "Atomaire klokken meten klassieke hoeksnelheid"
          }
        ],
        correct: 0,
        explanation: {
          en: "Atomic clocks rely on hyperfine transitions involving total angular momentum F = I + J. The cesium-133 atom's ground state hyperfine transition (F=3 ↔ F=4) at 9,192,631,770 Hz defines the second. This transition involves a flip of relative orientation between nuclear spin (I=7/2) and electronic angular momentum (J=1/2). The extreme stability comes from the transition's insensitivity to external perturbations and its narrow linewidth. Modern optical clocks use forbidden transitions in trapped ions, achieving fractional frequency uncertainties below 10^-19.",
          es: "Los relojes atómicos dependen de transiciones hiperfinas involucrando momento angular total F = I + J. La transición hiperfina del estado fundamental del átomo de cesio-133 (F=3 ↔ F=4) a 9.192.631.770 Hz define el segundo. Esta transición involucra un cambio de orientación relativa entre espín nuclear (I=7/2) y momento angular electrónico (J=1/2). La extrema estabilidad proviene de la insensibilidad de la transición a perturbaciones externas y su ancho de línea estrecho. Relojes ópticos modernos usan transiciones prohibidas en iones atrapados, logrando incertidumbres de frecuencia fraccionaria debajo de 10^-19.",
          de: "Atomuhren beruhen auf Hyperfein-Übergängen mit Gesamtdrehimpuls F = I + J. Der Grundzustands-Hyperfeinübergang des Cäsium-133-Atoms (F=3 ↔ F=4) bei 9.192.631.770 Hz definiert die Sekunde. Dieser Übergang beinhaltet eine Umkehr der relativen Orientierung zwischen Kernspin (I=7/2) und elektronischem Drehimpuls (J=1/2). Die extreme Stabilität kommt von der Unempfindlichkeit des Übergangs gegenüber äußeren Störungen und seiner schmalen Linienbreite. Moderne optische Uhren verwenden verbotene Übergänge in gefangenen Ionen und erreichen fraktionale Frequenzunsicherheiten unter 10^-19.",
          nl: "Atomaire klokken vertrouwen op hyperfijne overgangen met totaal hoekimpuls F = I + J. De grondtoestand hyperfijne overgang van het cesium-133 atoom (F=3 ↔ F=4) bij 9.192.631.770 Hz definieert de seconde. Deze overgang behelst een omkering van relatieve oriëntatie tussen nucleaire spin (I=7/2) en elektronisch hoekimpuls (J=1/2). De extreme stabiliteit komt van de ongevoeligheid van de overgang voor externe verstoringen en zijn smalle lijnbreedte. Moderne optische klokken gebruiken verboden overgangen in gevangen ionen, bereikend fractionele frequentie-onzekerheden onder 10^-19."
        }
      },
      {
        question: {
          en: "What is the Einstein-de Haas effect?",
          es: "¿Qué es el efecto Einstein-de Haas?",
          de: "Was ist der Einstein-de Haas-Effekt?",
          nl: "Wat is het Einstein-de Haas effect?"
        },
        options: [
          {
            en: "Magnetization change causes mechanical rotation due to angular momentum conservation",
            es: "El cambio de magnetización causa rotación mecánica debido a conservación del momento angular",
            de: "Magnetisierungsänderung verursacht mechanische Rotation aufgrund von Drehimpulserhaltung",
            nl: "Magnetisatieverandering veroorzaakt mechanische rotatie door behoud van hoekimpuls"
          },
          {
            en: "Light bending around massive objects",
            es: "Curvatura de la luz alrededor de objetos masivos",
            de: "Lichtbeugung um massive Objekte",
            nl: "Lichtbuiging rond massieve objecten"
          },
          {
            en: "Time dilation in strong gravitational fields",
            es: "Dilatación temporal en campos gravitacionales fuertes",
            de: "Zeitdilatation in starken Gravitationsfeldern",
            nl: "Tijddilatatie in sterke gravitatievelden"
          },
          {
            en: "Electron emission from metal surfaces",
            es: "Emisión de electrones desde superficies metálicas",
            de: "Elektronenemission von Metalloberflächen",
            nl: "Elektronenemissie van metaaloppervlakken"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Einstein-de Haas effect demonstrates that magnetization is due to electron angular momentum. When a ferromagnetic sample's magnetization is reversed, the sample mechanically rotates to conserve total angular momentum. This occurs because magnetic moments arise from electron spin and orbital angular momentum. When spins flip during magnetization reversal, their angular momentum changes, and the macroscopic sample must rotate oppositely. This effect, predicted by Einstein and measured by de Haas in 1915, provided early evidence that magnetism originates from electron angular momentum, predating the discovery of electron spin.",
          es: "El efecto Einstein-de Haas demuestra que la magnetización se debe al momento angular del electrón. Cuando se invierte la magnetización de una muestra ferromagnética, la muestra rota mecánicamente para conservar el momento angular total. Esto ocurre porque los momentos magnéticos surgen del espín del electrón y momento angular orbital. Cuando los espines se voltean durante la inversión de magnetización, su momento angular cambia, y la muestra macroscópica debe rotar opuestamente. Este efecto, predicho por Einstein y medido por de Haas en 1915, proporcionó evidencia temprana de que el magnetismo se origina del momento angular del electrón, precediendo el descubrimiento del espín del electrón.",
          de: "Der Einstein-de Haas-Effekt zeigt, dass Magnetisierung auf Elektronen-Drehimpuls zurückzuführen ist. Wenn die Magnetisierung einer ferromagnetischen Probe umgekehrt wird, rotiert die Probe mechanisch, um den Gesamtdrehimpuls zu erhalten. Dies geschieht, weil magnetische Momente aus Elektronenspin und Bahndrehimpuls entstehen. Wenn Spins während der Magnetisierungsumkehr umklappen, ändert sich ihr Drehimpuls, und die makroskopische Probe muss entgegengesetzt rotieren. Dieser Effekt, von Einstein vorhergesagt und von de Haas 1915 gemessen, lieferte frühe Beweise, dass Magnetismus vom Elektronen-Drehimpuls stammt, vor der Entdeckung des Elektronenspins.",
          nl: "Het Einstein-de Haas effect toont aan dat magnetisatie te wijten is aan elektron hoekimpuls. Wanneer de magnetisatie van een ferromagnetisch monster wordt omgekeerd, roteert het monster mechanisch om totaal hoekimpuls te behouden. Dit gebeurt omdat magnetische momenten ontstaan uit elektronenspin en orbitaal hoekimpuls. Wanneer spins omkeren tijdens magnetisatie-omkering, verandert hun hoekimpuls, en het macroscopische monster moet tegengesteld roteren. Dit effect, voorspeld door Einstein en gemeten door de Haas in 1915, leverde vroeg bewijs dat magnetisme ontstaat uit elektron hoekimpuls, voorafgaand aan de ontdekking van elektronenspin."
        }
      },
      {
        question: {
          en: "What is the gyromagnetic ratio for electron spin?",
          es: "¿Cuál es la razón giromagnética para el espín del electrón?",
          de: "Was ist das gyromagnetische Verhältnis für Elektronenspin?",
          nl: "Wat is de gyromagnetische verhouding voor elektronenspin?"
        },
        options: [
          {
            en: "γₛ ≈ 2.002 × (e/2mₑ) ≈ 1.76 × 10¹¹ rad/(s·T), with anomalous magnetic moment",
            es: "γₛ ≈ 2.002 × (e/2mₑ) ≈ 1.76 × 10¹¹ rad/(s·T), con momento magnético anómalo",
            de: "γₛ ≈ 2.002 × (e/2mₑ) ≈ 1.76 × 10¹¹ rad/(s·T), mit anomalem magnetischem Moment",
            nl: "γₛ ≈ 2.002 × (e/2mₑ) ≈ 1.76 × 10¹¹ rad/(s·T), met anomaal magnetisch moment"
          },
          {
            en: "Exactly e/2mₑ with no quantum corrections",
            es: "Exactamente e/2mₑ sin correcciones cuánticas",
            de: "Genau e/2mₑ ohne Quantenkorrekturen",
            nl: "Precies e/2mₑ zonder quantumcorrecties"
          },
          {
            en: "γₛ = e/mₑ, same as classical particle",
            es: "γₛ = e/mₑ, igual que partícula clásica",
            de: "γₛ = e/mₑ, gleich wie klassisches Teilchen",
            nl: "γₛ = e/mₑ, hetzelfde als klassiek deeltje"
          },
          {
            en: "Depends on the orbital angular momentum quantum number",
            es: "Depende del número cuántico de momento angular orbital",
            de: "Hängt von der Bahndrehimpuls-Quantenzahl ab",
            nl: "Hangt af van het orbitaal hoekimpuls quantumgetal"
          }
        ],
        correct: 0,
        explanation: {
          en: "The electron spin gyromagnetic ratio is approximately twice the classical value e/2mₑ due to relativistic quantum mechanics. The precise value is γₛ ≈ 2.00231930436 × (e/2mₑ), where the deviation from 2 is the anomalous magnetic moment arising from quantum electrodynamics corrections. This makes γₛ ≈ 1.76086 × 10¹¹ rad/(s·T), crucial for electron spin resonance and magnetic resonance imaging.",
          es: "La razón giromagnética del espín del electrón es aproximadamente el doble del valor clásico e/2mₑ debido a la mecánica cuántica relativista. El valor preciso es γₛ ≈ 2.00231930436 × (e/2mₑ), donde la desviación de 2 es el momento magnético anómalo que surge de correcciones de electrodinámica cuántica. Esto hace γₛ ≈ 1.76086 × 10¹¹ rad/(s·T), crucial para resonancia de espín electrónico e imagen de resonancia magnética.",
          de: "Das gyromagnetische Verhältnis des Elektronenspins ist etwa doppelt so groß wie der klassische Wert e/2mₑ aufgrund relativistischer Quantenmechanik. Der präzise Wert ist γₛ ≈ 2.00231930436 × (e/2mₑ), wobei die Abweichung von 2 das anomale magnetische Moment aus Quantenelektrodynamik-Korrekturen ist. Dies macht γₛ ≈ 1.76086 × 10¹¹ rad/(s·T), entscheidend für Elektronenspinresonanz und Magnetresonanztomographie.",
          nl: "De elektron spin gyromagnetische verhouding is ongeveer twee keer de klassieke waarde e/2mₑ vanwege relativistische quantummechanica. De precieze waarde is γₛ ≈ 2.00231930436 × (e/2mₑ), waar de afwijking van 2 het anomale magnetische moment is dat ontstaat uit quantum elektrodynamica correcties. Dit maakt γₛ ≈ 1.76086 × 10¹¹ rad/(s·T), cruciaal voor elektron spin resonantie en magnetische resonantie beeldvorming."
        }
      },
      {
        question: {
          en: "What are Clebsch-Gordan coefficients used for?",
          es: "¿Para qué se usan los coeficientes de Clebsch-Gordan?",
          de: "Wofür werden Clebsch-Gordan-Koeffizienten verwendet?",
          nl: "Waarvoor worden Clebsch-Gordan coëfficiënten gebruikt?"
        },
        options: [
          {
            en: "Coupling two angular momentum states: |j₁m₁⟩⊗|j₂m₂⟩ = Σ⟨j₁m₁j₂m₂|JM⟩|JM⟩",
            es: "Acoplar dos estados de momento angular: |j₁m₁⟩⊗|j₂m₂⟩ = Σ⟨j₁m₁j₂m₂|JM⟩|JM⟩",
            de: "Kopplung zweier Drehimpulszustände: |j₁m₁⟩⊗|j₂m₂⟩ = Σ⟨j₁m₁j₂m₂|JM⟩|JM⟩",
            nl: "Koppelen van twee hoekimpulstoestanden: |j₁m₁⟩⊗|j₂m₂⟩ = Σ⟨j₁m₁j₂m₂|JM⟩|JM⟩"
          },
          {
            en: "Solving the Schrödinger equation for hydrogen",
            es: "Resolver la ecuación de Schrödinger para hidrógeno",
            de: "Lösung der Schrödinger-Gleichung für Wasserstoff",
            nl: "Oplossen van de Schrödinger vergelijking voor waterstof"
          },
          {
            en: "Calculating transition probabilities in perturbation theory",
            es: "Calcular probabilidades de transición en teoría de perturbaciones",
            de: "Berechnung von Übergangswahrscheinlichkeiten in Störungstheorie",
            nl: "Berekenen van overgangskansen in storingstheorie"
          },
          {
            en: "Determining uncertainty relations between observables",
            es: "Determinar relaciones de incertidumbre entre observables",
            de: "Bestimmung von Unschärferelationen zwischen Observablen",
            nl: "Bepalen van onzekerheidsrelaties tussen observabelen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Clebsch-Gordan coefficients ⟨j₁m₁j₂m₂|JM⟩ are used to couple two angular momentum states into states of definite total angular momentum. They appear when expressing product states |j₁m₁⟩⊗|j₂m₂⟩ as linear combinations of coupled states |JM⟩ where J ranges from |j₁-j₂| to j₁+j₂. These coefficients are essential in atomic physics, nuclear physics, and particle physics for understanding multi-electron atoms, nuclear reactions, and particle interactions.",
          es: "Los coeficientes de Clebsch-Gordan ⟨j₁m₁j₂m₂|JM⟩ se usan para acoplar dos estados de momento angular en estados de momento angular total definido. Aparecen al expresar estados producto |j₁m₁⟩⊗|j₂m₂⟩ como combinaciones lineales de estados acoplados |JM⟩ donde J va desde |j₁-j₂| hasta j₁+j₂. Estos coeficientes son esenciales en física atómica, física nuclear y física de partículas para entender átomos multielectrónicos, reacciones nucleares e interacciones de partículas.",
          de: "Clebsch-Gordan-Koeffizienten ⟨j₁m₁j₂m₂|JM⟩ werden verwendet, um zwei Drehimpulszustände zu Zuständen mit definiertem Gesamtdrehimpuls zu koppeln. Sie erscheinen beim Ausdrücken von Produktzuständen |j₁m₁⟩⊗|j₂m₂⟩ als Linearkombinationen von gekoppelten Zuständen |JM⟩, wobei J von |j₁-j₂| bis j₁+j₂ reicht. Diese Koeffizienten sind in der Atomphysik, Kernphysik und Teilchenphysik wesentlich für das Verständnis von Mehrelektron-Atomen, Kernreaktionen und Teilchenwechselwirkungen.",
          nl: "Clebsch-Gordan coëfficiënten ⟨j₁m₁j₂m₂|JM⟩ worden gebruikt om twee hoekimpulstoestanden te koppelen tot toestanden met bepaalde totale hoekimpuls. Ze verschijnen bij het uitdrukken van producttoestanden |j₁m₁⟩⊗|j₂m₂⟩ als lineaire combinaties van gekoppelde toestanden |JM⟩ waarbij J varieert van |j₁-j₂| tot j₁+j₂. Deze coëfficiënten zijn essentieel in atoomfysica, kernfysica en deeltjesfysica voor het begrijpen van multi-elektron atomen, kernreacties en deeltjesinteracties."
        }
      },
      {
        question: {
          en: "What is the physical meaning of total angular momentum J = L + S?",
          es: "¿Cuál es el significado físico del momento angular total J = L + S?",
          de: "Was ist die physikalische Bedeutung des Gesamtdrehimpulses J = L + S?",
          nl: "Wat is de fysieke betekenis van totale hoekimpuls J = L + S?"
        },
        options: [
          {
            en: "Vector sum of orbital and spin angular momentum, with quantum addition rules |L-S| ≤ J ≤ L+S",
            es: "Suma vectorial de momento angular orbital y de espín, con reglas de adición cuánticas |L-S| ≤ J ≤ L+S",
            de: "Vektorsumme aus Bahn- und Spin-Drehimpuls, mit Quantenadditionsregeln |L-S| ≤ J ≤ L+S",
            nl: "Vectorsom van orbitale en spin hoekimpuls, met quantum optellingsregels |L-S| ≤ J ≤ L+S"
          },
          {
            en: "Simple arithmetic sum: J = L + S with classical addition",
            es: "Suma aritmética simple: J = L + S con adición clásica",
            de: "Einfache arithmetische Summe: J = L + S mit klassischer Addition",
            nl: "Eenvoudige rekenkundige som: J = L + S met klassieke optelling"
          },
          {
            en: "J represents only the orbital contribution to angular momentum",
            es: "J representa solo la contribución orbital al momento angular",
            de: "J repräsentiert nur den Bahnbeitrag zum Drehimpuls",
            nl: "J vertegenwoordigt alleen de orbitale bijdrage aan hoekimpuls"
          },
          {
            en: "J is always equal to the larger of L or S",
            es: "J siempre es igual al mayor de L o S",
            de: "J ist immer gleich dem größeren von L oder S",
            nl: "J is altijd gelijk aan de grootste van L of S"
          }
        ],
        correct: 0,
        explanation: {
          en: "Total angular momentum J = L + S represents the quantum mechanical vector addition of orbital (L) and spin (S) angular momentum. Unlike classical vectors, quantum angular momenta add according to specific rules: J can take values from |L-S| to L+S in integer steps. For example, if L=1 and S=1/2, then J can be 1/2 or 3/2. This coupling is crucial for understanding atomic spectra, fine structure, and selection rules in transitions.",
          es: "El momento angular total J = L + S representa la suma vectorial mecánico-cuántica de momento angular orbital (L) y de espín (S). A diferencia de vectores clásicos, los momentos angulares cuánticos se suman según reglas específicas: J puede tomar valores desde |L-S| hasta L+S en pasos enteros. Por ejemplo, si L=1 y S=1/2, entonces J puede ser 1/2 o 3/2. Este acoplamiento es crucial para entender espectros atómicos, estructura fina y reglas de selección en transiciones.",
          de: "Der Gesamtdrehimpuls J = L + S repräsentiert die quantenmechanische Vektoraddition von Bahn- (L) und Spin-Drehimpuls (S). Anders als klassische Vektoren addieren sich Quantendrehimpulse nach spezifischen Regeln: J kann Werte von |L-S| bis L+S in ganzzahligen Schritten annehmen. Wenn zum Beispiel L=1 und S=1/2, dann kann J 1/2 oder 3/2 sein. Diese Kopplung ist entscheidend für das Verständnis von Atomspektren, Feinstruktur und Auswahlregeln bei Übergängen.",
          nl: "Totale hoekimpuls J = L + S vertegenwoordigt de quantummechanische vectoroptelling van orbitale (L) en spin (S) hoekimpuls. Anders dan klassieke vectoren tellen quantum hoekimpulsen op volgens specifieke regels: J kan waarden aannemen van |L-S| tot L+S in gehele stappen. Als bijvoorbeeld L=1 en S=1/2, dan kan J 1/2 of 3/2 zijn. Deze koppeling is cruciaal voor het begrijpen van atoomspectra, fijnstructuur en selectieregels bij overgangen."
        }
      },
      {
        question: {
          en: "What is spin-orbit coupling in atoms?",
          es: "¿Qué es el acoplamiento espín-órbita en átomos?",
          de: "Was ist Spin-Bahn-Kopplung in Atomen?",
          nl: "Wat is spin-baan koppeling in atomen?"
        },
        options: [
          {
            en: "Magnetic interaction between electron spin and orbital motion: H_SO = ξ(r) L⃗·S⃗",
            es: "Interacción magnética entre espín electrónico y movimiento orbital: H_SO = ξ(r) L⃗·S⃗",
            de: "Magnetische Wechselwirkung zwischen Elektronenspin und Bahnbewegung: H_SO = ξ(r) L⃗·S⃗",
            nl: "Magnetische interactie tussen elektron spin en orbitale beweging: H_SO = ξ(r) L⃗·S⃗"
          },
          {
            en: "Coulomb repulsion between electrons in different orbitals",
            es: "Repulsión de Coulomb entre electrones en orbitales diferentes",
            de: "Coulomb-Abstoßung zwischen Elektronen in verschiedenen Orbitalen",
            nl: "Coulomb afstoting tussen elektronen in verschillende orbitalen"
          },
          {
            en: "Nuclear-electron magnetic dipole interaction",
            es: "Interacción dipolo magnético núcleo-electrón",
            de: "Kern-Elektron-Magnetdipol-Wechselwirkung",
            nl: "Kern-elektron magnetische dipool interactie"
          },
          {
            en: "Mechanical rotation of electron around nucleus",
            es: "Rotación mecánica del electrón alrededor del núcleo",
            de: "Mechanische Rotation des Elektrons um den Kern",
            nl: "Mechanische rotatie van elektron rond kern"
          }
        ],
        correct: 0,
        explanation: {
          en: "Spin-orbit coupling arises from the magnetic interaction between an electron's intrinsic spin magnetic moment and the magnetic field generated by its orbital motion around the nucleus. The coupling strength ξ(r) depends on the radial wave function and increases as Z⁴ for hydrogen-like atoms. This interaction causes fine structure splitting in atomic spectra, lifting degeneracies and creating J-multiplets. It's responsible for the familiar doublet structure in alkali atoms.",
          es: "El acoplamiento espín-órbita surge de la interacción magnética entre el momento magnético de espín intrínseco de un electrón y el campo magnético generado por su movimiento orbital alrededor del núcleo. La fuerza de acoplamiento ξ(r) depende de la función de onda radial y aumenta como Z⁴ para átomos similares al hidrógeno. Esta interacción causa división de estructura fina en espectros atómicos, levantando degeneraciones y creando J-múltiplos. Es responsable de la estructura doblete familiar en átomos alcalinos.",
          de: "Spin-Bahn-Kopplung entsteht aus der magnetischen Wechselwirkung zwischen dem intrinsischen Spin-Magnetmoment eines Elektrons und dem Magnetfeld, das durch seine Bahnbewegung um den Kern erzeugt wird. Die Kopplungsstärke ξ(r) hängt von der radialen Wellenfunktion ab und steigt wie Z⁴ für wasserstoffähnliche Atome. Diese Wechselwirkung verursacht Feinstruktur-Aufspaltung in Atomspektren, hebt Entartungen auf und erzeugt J-Multipletts. Sie ist verantwortlich für die bekannte Dublett-Struktur in Alkaliatomen.",
          nl: "Spin-baan koppeling ontstaat uit de magnetische interactie tussen het intrinsieke spin magnetische moment van een elektron en het magnetische veld gegenereerd door zijn orbitale beweging rond de kern. De koppelingssterkte ξ(r) hangt af van de radiale golffunctie en neemt toe als Z⁴ voor waterstof-achtige atomen. Deze interactie veroorzaakt fijnstructuur splitsing in atoomspectra, opheffend van degeneraties en creërend J-multipletten. Het is verantwoordelijk voor de bekende dublet structuur in alkaliatomen."
        }
      },
      {
        question: {
          en: "What is the Pauli exclusion principle for fermions?",
          es: "¿Qué es el principio de exclusión de Pauli para fermiones?",
          de: "Was ist das Pauli-Ausschlussprinzip für Fermionen?",
          nl: "Wat is het Pauli uitsluitingsprincipe voor fermionen?"
        },
        options: [
          {
            en: "No two fermions can occupy the same quantum state: Ψ(r₁,r₂) = -Ψ(r₂,r₁) for antisymmetric wavefunction",
            es: "Ningún dos fermiones pueden ocupar el mismo estado cuántico: Ψ(r₁,r₂) = -Ψ(r₂,r₁) para función de onda antisimétrica",
            de: "Keine zwei Fermionen können denselben Quantenzustand besetzen: Ψ(r₁,r₂) = -Ψ(r₂,r₁) für antisymmetrische Wellenfunktion",
            nl: "Geen twee fermionen kunnen dezelfde quantumtoestand bezetten: Ψ(r₁,r₂) = -Ψ(r₂,r₁) voor antisymmetrische golffunctie"
          },
          {
            en: "Fermions can only exist in pairs with opposite spins",
            es: "Los fermiones solo pueden existir en pares con espines opuestos",
            de: "Fermionen können nur paarweise mit entgegengesetzten Spins existieren",
            nl: "Fermionen kunnen alleen bestaan in paren met tegengestelde spins"
          },
          {
            en: "Maximum of two fermions per energy level regardless of spin",
            es: "Máximo dos fermiones por nivel de energía independientemente del espín",
            de: "Maximal zwei Fermionen pro Energieniveau unabhängig vom Spin",
            nl: "Maximaal twee fermionen per energieniveau ongeacht spin"
          },
          {
            en: "Fermions always have symmetric wavefunctions under particle exchange",
            es: "Los fermiones siempre tienen funciones de onda simétricas bajo intercambio de partículas",
            de: "Fermionen haben immer symmetrische Wellenfunktionen unter Teilchenaustausch",
            nl: "Fermionen hebben altijd symmetrische golffuncties onder deeltjesuitwisseling"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Pauli exclusion principle states that no two identical fermions can occupy the same complete quantum state. This is equivalent to requiring that the total wavefunction be antisymmetric under particle exchange: Ψ(r₁,s₁,r₂,s₂) = -Ψ(r₂,s₂,r₁,s₁). For electrons in atoms, this means no two electrons can have the same set of quantum numbers (n,l,m,ms). This principle is fundamental to atomic structure, the periodic table, and the stability of matter.",
          es: "El principio de exclusión de Pauli establece que ningún dos fermiones idénticos pueden ocupar el mismo estado cuántico completo. Esto es equivalente a requerir que la función de onda total sea antisimétrica bajo intercambio de partículas: Ψ(r₁,s₁,r₂,s₂) = -Ψ(r₂,s₂,r₁,s₁). Para electrones en átomos, esto significa que ningún dos electrones pueden tener el mismo conjunto de números cuánticos (n,l,m,ms). Este principio es fundamental para la estructura atómica, la tabla periódica y la estabilidad de la materia.",
          de: "Das Pauli-Ausschlussprinzip besagt, dass keine zwei identischen Fermionen denselben vollständigen Quantenzustand besetzen können. Dies ist äquivalent zur Forderung, dass die Gesamtwellenfunktion unter Teilchenaustausch antisymmetrisch sei: Ψ(r₁,s₁,r₂,s₂) = -Ψ(r₂,s₂,r₁,s₁). Für Elektronen in Atomen bedeutet dies, dass keine zwei Elektronen dieselben Quantenzahlen (n,l,m,ms) haben können. Dieses Prinzip ist fundamental für Atomstruktur, das Periodensystem und die Stabilität der Materie.",
          nl: "Het Pauli uitsluitingsprincipe stelt dat geen twee identieke fermionen dezelfde complete quantumtoestand kunnen bezetten. Dit is equivalent aan het vereisen dat de totale golffunctie antisymmetrisch is onder deeltjesuitwisseling: Ψ(r₁,s₁,r₂,s₂) = -Ψ(r₂,s₂,r₁,s₁). Voor elektronen in atomen betekent dit dat geen twee elektronen dezelfde set quantumgetallen (n,l,m,ms) kunnen hebben. Dit principe is fundamenteel voor atoomstructuur, het periodiek systeem en de stabiliteit van materie."
        }
      },
      {
        question: {
          en: "What is the Wigner-Eckart theorem?",
          es: "¿Qué es el teorema de Wigner-Eckart?",
          de: "Was ist das Wigner-Eckart-Theorem?",
          nl: "Wat is de Wigner-Eckart stelling?"
        },
        options: [
          {
            en: "⟨j'm'|T_q^(k)|jm⟩ = ⟨jm,kq|j'm'⟩⟨j'||T^(k)||j⟩/√(2j'+1) separating geometry from physics",
            es: "⟨j'm'|T_q^(k)|jm⟩ = ⟨jm,kq|j'm'⟩⟨j'||T^(k)||j⟩/√(2j'+1) separando geometría de física",
            de: "⟨j'm'|T_q^(k)|jm⟩ = ⟨jm,kq|j'm'⟩⟨j'||T^(k)||j⟩/√(2j'+1) trennt Geometrie von Physik",
            nl: "⟨j'm'|T_q^(k)|jm⟩ = ⟨jm,kq|j'm'⟩⟨j'||T^(k)||j⟩/√(2j'+1) scheidt geometrie van fysica"
          },
          {
            en: "Uncertainty principle for angular momentum components",
            es: "Principio de incertidumbre para componentes de momento angular",
            de: "Unschärfeprinzip für Drehimpulskomponenten",
            nl: "Onzekerheidsprincipe voor hoekimpulscomponenten"
          },
          {
            en: "Selection rules for electric dipole transitions only",
            es: "Reglas de selección solo para transiciones de dipolo eléctrico",
            de: "Auswahlregeln nur für elektrische Dipolübergänge",
            nl: "Selectieregels alleen voor elektrische dipool overgangen"
          },
          {
            en: "Conservation law for total angular momentum in isolated systems",
            es: "Ley de conservación para momento angular total en sistemas aislados",
            de: "Erhaltungsgesetz für Gesamtdrehimpuls in isolierten Systemen",
            nl: "Behoudswet voor totale hoekimpuls in geïsoleerde systemen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Wigner-Eckart theorem separates matrix elements of tensor operators into a geometric part (Clebsch-Gordan coefficient) and a physical part (reduced matrix element). For a tensor operator T_q^(k), the theorem states: ⟨j'm'|T_q^(k)|jm⟩ = ⟨jmkq|j'm'⟩⟨j'||T^(k)||j⟩/√(2j'+1). The reduced matrix element ⟨j'||T^(k)||j⟩ contains all the physics and is independent of magnetic quantum numbers m,m',q. This powerful theorem simplifies calculations and provides selection rules for transitions.",
          es: "El teorema de Wigner-Eckart separa elementos de matriz de operadores tensoriales en una parte geométrica (coeficiente de Clebsch-Gordan) y una parte física (elemento de matriz reducido). Para un operador tensorial T_q^(k), el teorema establece: ⟨j'm'|T_q^(k)|jm⟩ = ⟨jmkq|j'm'⟩⟨j'||T^(k)||j⟩/√(2j'+1). El elemento de matriz reducido ⟨j'||T^(k)||j⟩ contiene toda la física y es independiente de números cuánticos magnéticos m,m',q. Este teorema poderoso simplifica cálculos y proporciona reglas de selección para transiciones.",
          de: "Das Wigner-Eckart-Theorem trennt Matrixelemente von Tensoroperatoren in einen geometrischen Teil (Clebsch-Gordan-Koeffizient) und einen physikalischen Teil (reduziertes Matrixelement). Für einen Tensoroperator T_q^(k) besagt das Theorem: ⟨j'm'|T_q^(k)|jm⟩ = ⟨jmkq|j'm'⟩⟨j'||T^(k)||j⟩/√(2j'+1). Das reduzierte Matrixelement ⟨j'||T^(k)||j⟩ enthält die gesamte Physik und ist unabhängig von magnetischen Quantenzahlen m,m',q. Dieses mächtige Theorem vereinfacht Berechnungen und liefert Auswahlregeln für Übergänge.",
          nl: "De Wigner-Eckart stelling scheidt matrixelementen van tensor operatoren in een geometrisch deel (Clebsch-Gordan coëfficiënt) en een fysiek deel (gereduceerd matrixelement). Voor een tensor operator T_q^(k) stelt de stelling: ⟨j'm'|T_q^(k)|jm⟩ = ⟨jmkq|j'm'⟩⟨j'||T^(k)||j⟩/√(2j'+1). Het gereduceerde matrixelement ⟨j'||T^(k)||j⟩ bevat alle fysica en is onafhankelijk van magnetische quantumgetallen m,m',q. Deze krachtige stelling vereenvoudigt berekeningen en geeft selectieregels voor overgangen."
        }
      },
      {
        question: {
          en: "What is the quantum mechanical origin of magnetic moments in atoms?",
          es: "¿Cuál es el origen mecánico cuántico de momentos magnéticos en átomos?",
          de: "Was ist der quantenmechanische Ursprung magnetischer Momente in Atomen?",
          nl: "Wat is de quantummechanische oorsprong van magnetische momenten in atomen?"
        },
        options: [
          {
            en: "μ = -gJ μB √(J(J+1)) from orbital and spin angular momentum with Landé g-factor",
            es: "μ = -gJ μB √(J(J+1)) de momento angular orbital y de espín con factor g de Landé",
            de: "μ = -gJ μB √(J(J+1)) aus Bahn- und Spin-Drehimpuls mit Landé-g-Faktor",
            nl: "μ = -gJ μB √(J(J+1)) uit orbitale en spin hoekimpuls met Landé g-factor"
          },
          {
            en: "Classical current loops from electron orbital motion only",
            es: "Lazos de corriente clásicos solo del movimiento orbital del electrón",
            de: "Klassische Stromschleifen nur aus Elektronenbahnbewegung",
            nl: "Klassieke stroomlussen alleen uit elektron orbitale beweging"
          },
          {
            en: "Nuclear magnetic moments are the primary source",
            es: "Los momentos magnéticos nucleares son la fuente primaria",
            de: "Kernmagnetische Momente sind die primäre Quelle",
            nl: "Nucleaire magnetische momenten zijn de primaire bron"
          },
          {
            en: "Magnetic moments arise only from electron spin, not orbital motion",
            es: "Los momentos magnéticos surgen solo del espín electrónico, no del movimiento orbital",
            de: "Magnetische Momente entstehen nur aus Elektronenspin, nicht aus Bahnbewegung",
            nl: "Magnetische momenten ontstaan alleen uit elektron spin, niet uit orbitale beweging"
          }
        ],
        correct: 0,
        explanation: {
          en: "Atomic magnetic moments arise from both orbital and spin angular momentum of electrons. The total magnetic moment is μ = -gJ μB √(J(J+1)) where gJ is the Landé g-factor: gJ = 1 + [J(J+1) + S(S+1) - L(L+1)]/[2J(J+1)]. This combines the orbital contribution (g=1) and spin contribution (g≈2) weighted by their relative amounts. The μB is the Bohr magneton, the natural unit for atomic magnetic moments.",
          es: "Los momentos magnéticos atómicos surgen tanto del momento angular orbital como de espín de electrones. El momento magnético total es μ = -gJ μB √(J(J+1)) donde gJ es el factor g de Landé: gJ = 1 + [J(J+1) + S(S+1) - L(L+1)]/[2J(J+1)]. Esto combina la contribución orbital (g=1) y contribución de espín (g≈2) ponderadas por sus cantidades relativas. El μB es el magnetón de Bohr, la unidad natural para momentos magnéticos atómicos.",
          de: "Atomare magnetische Momente entstehen sowohl aus Bahn- als auch aus Spin-Drehimpuls von Elektronen. Das gesamte magnetische Moment ist μ = -gJ μB √(J(J+1)) wobei gJ der Landé-g-Faktor ist: gJ = 1 + [J(J+1) + S(S+1) - L(L+1)]/[2J(J+1)]. Dies kombiniert den Bahnbeitrag (g=1) und Spinbeitrag (g≈2) gewichtet nach ihren relativen Anteilen. Das μB ist das Bohr-Magneton, die natürliche Einheit für atomare magnetische Momente.",
          nl: "Atomaire magnetische momenten ontstaan uit zowel orbitale als spin hoekimpuls van elektronen. Het totale magnetische moment is μ = -gJ μB √(J(J+1)) waarbij gJ de Landé g-factor is: gJ = 1 + [J(J+1) + S(S+1) - L(L+1)]/[2J(J+1)]. Dit combineert de orbitale bijdrage (g=1) en spin bijdrage (g≈2) gewogen naar hun relatieve hoeveelheden. De μB is het Bohr magneton, de natuurlijke eenheid voor atomaire magnetische momenten."
        }
      },
      {
        question: {
          en: "What is Russell-Saunders (LS) coupling in multi-electron atoms?",
          es: "¿Qué es el acoplamiento Russell-Saunders (LS) en átomos multielectrónicos?",
          de: "Was ist Russell-Saunders-(LS)-Kopplung in Mehrelektronen-Atomen?",
          nl: "Wat is Russell-Saunders (LS) koppeling in multi-elektron atomen?"
        },
        options: [
          {
            en: "First couple all L⃗ᵢ → L⃗, all S⃗ᵢ → S⃗, then L⃗ + S⃗ → J⃗ when electrostatic >> spin-orbit",
            es: "Primero acoplar todos L⃗ᵢ → L⃗, todos S⃗ᵢ → S⃗, luego L⃗ + S⃗ → J⃗ cuando electrostático >> espín-órbita",
            de: "Zuerst alle L⃗ᵢ → L⃗, alle S⃗ᵢ → S⃗ koppeln, dann L⃗ + S⃗ → J⃗ wenn elektrostatisch >> Spin-Bahn",
            nl: "Eerst koppel alle L⃗ᵢ → L⃗, alle S⃗ᵢ → S⃗, dan L⃗ + S⃗ → J⃗ wanneer elektrostatisch >> spin-baan"
          },
          {
            en: "Each electron couples its own lᵢ and sᵢ first, then combine all jᵢ",
            es: "Cada electrón acopla primero su propio lᵢ y sᵢ, luego combina todos los jᵢ",
            de: "Jedes Elektron koppelt zuerst sein eigenes lᵢ und sᵢ, dann alle jᵢ kombinieren",
            nl: "Elk elektron koppelt eerst zijn eigen lᵢ en sᵢ, dan alle jᵢ combineren"
          },
          {
            en: "Only the outermost electron contributes to angular momentum",
            es: "Solo el electrón más externo contribuye al momento angular",
            de: "Nur das äußerste Elektron trägt zum Drehimpuls bei",
            nl: "Alleen het buitenste elektron draagt bij aan hoekimpuls"
          },
          {
            en: "Orbital and spin angular momenta are always perpendicular",
            es: "Los momentos angulares orbital y de espín son siempre perpendiculares",
            de: "Bahn- und Spin-Drehimpuls sind immer senkrecht",
            nl: "Orbitale en spin hoekimpuls zijn altijd loodrecht"
          }
        ],
        correct: 0,
        explanation: {
          en: "Russell-Saunders coupling applies when electrostatic interactions between electrons are much stronger than spin-orbit coupling. In this scheme, individual orbital angular momenta lᵢ couple to form total L = Σlᵢ, individual spins sᵢ couple to form total S = Σsᵢ, and finally L and S couple to form total J. This gives rise to ²ˢ⁺¹Lⱼ term symbols. This coupling is typical for light atoms where electrostatic energies (∼eV) >> spin-orbit energies (∼meV).",
          es: "El acoplamiento Russell-Saunders se aplica cuando las interacciones electrostáticas entre electrones son mucho más fuertes que el acoplamiento espín-órbita. En este esquema, los momentos angulares orbitales individuales lᵢ se acoplan para formar L total = Σlᵢ, los espines individuales sᵢ se acoplan para formar S total = Σsᵢ, y finalmente L y S se acoplan para formar J total. Esto da lugar a símbolos de término ²ˢ⁺¹Lⱼ. Este acoplamiento es típico para átomos ligeros donde energías electrostáticas (∼eV) >> energías espín-órbita (∼meV).",
          de: "Russell-Saunders-Kopplung gilt, wenn elektrostatische Wechselwirkungen zwischen Elektronen viel stärker sind als Spin-Bahn-Kopplung. In diesem Schema koppeln individuelle Bahndrehimpulse lᵢ zum Gesamt-L = Σlᵢ, individuelle Spins sᵢ koppeln zum Gesamt-S = Σsᵢ, und schließlich koppeln L und S zum Gesamt-J. Dies führt zu ²ˢ⁺¹Lⱼ-Termsymbolen. Diese Kopplung ist typisch für leichte Atome, wo elektrostatische Energien (∼eV) >> Spin-Bahn-Energien (∼meV).",
          nl: "Russell-Saunders koppeling is van toepassing wanneer elektrostatische interacties tussen elektronen veel sterker zijn dan spin-baan koppeling. In dit schema koppelen individuele orbitale hoekimpulsen lᵢ om totale L = Σlᵢ te vormen, individuele spins sᵢ koppelen om totale S = Σsᵢ te vormen, en uiteindelijk koppelen L en S om totale J te vormen. Dit geeft aanleiding tot ²ˢ⁺¹Lⱼ termen symbolen. Deze koppeling is typisch voor lichte atomen waar elektrostatische energieën (∼eV) >> spin-baan energieën (∼meV)."
        }
      },
      {
        question: {
          en: "What is the hyperfine structure in atomic spectra?",
          es: "¿Qué es la estructura hiperfina en espectros atómicos?",
          de: "Was ist die Hyperfeinstruktur in Atomspektren?",
          nl: "Wat is de hyperfijnstructuur in atoomspectra?"
        },
        options: [
          {
            en: "Energy splitting due to nuclear-electron magnetic interaction: H_hfs = A I⃗·J⃗",
            es: "División de energía debido a interacción magnética núcleo-electrón: H_hfs = A I⃗·J⃗",
            de: "Energieaufspaltung durch Kern-Elektron-Magnetwechselwirkung: H_hfs = A I⃗·J⃗",
            nl: "Energie splitsing door kern-elektron magnetische interactie: H_hfs = A I⃗·J⃗"
          },
          {
            en: "Splitting due to relativistic corrections to electron kinetic energy",
            es: "División debido a correcciones relativistas a energía cinética del electrón",
            de: "Aufspaltung durch relativistische Korrekturen zur Elektronenkinetik",
            nl: "Splitsing door relativistische correcties op elektron kinetische energie"
          },
          {
            en: "Fine structure due to electron-electron correlations",
            es: "Estructura fina debido a correlaciones electrón-electrón",
            de: "Feinstruktur durch Elektron-Elektron-Korrelationen",
            nl: "Fijnstructuur door elektron-elektron correlaties"
          },
          {
            en: "Doppler broadening of spectral lines from thermal motion",
            es: "Ensanchamiento Doppler de líneas espectrales por movimiento térmico",
            de: "Doppler-Verbreiterung von Spektrallinien durch thermische Bewegung",
            nl: "Doppler verbreding van spectrale lijnen door thermische beweging"
          }
        ],
        correct: 0,
        explanation: {
          en: "Hyperfine structure arises from magnetic interaction between the nuclear magnetic moment and the magnetic field generated by atomic electrons. The interaction Hamiltonian is H_hfs = A I⃗·J⃗, where I is nuclear spin, J is electronic angular momentum, and A is the hyperfine coupling constant. This creates additional splitting beyond fine structure, with total angular momentum F = I + J. Famous examples include the 21 cm hydrogen line and optical pumping in alkali atoms.",
          es: "La estructura hiperfina surge de la interacción magnética entre el momento magnético nuclear y el campo magnético generado por electrones atómicos. El hamiltoniano de interacción es H_hfs = A I⃗·J⃗, donde I es espín nuclear, J es momento angular electrónico, y A es la constante de acoplamiento hiperfino. Esto crea división adicional más allá de estructura fina, con momento angular total F = I + J. Ejemplos famosos incluyen la línea de 21 cm del hidrógeno y bombeo óptico en átomos alcalinos.",
          de: "Hyperfeinstruktur entsteht durch magnetische Wechselwirkung zwischen dem nuklearen magnetischen Moment und dem Magnetfeld, das von Atomelektronen erzeugt wird. Der Wechselwirkungshamiltonian ist H_hfs = A I⃗·J⃗, wobei I Kernspin, J elektronischer Drehimpuls und A die Hyperfein-Kopplungskonstante ist. Dies erzeugt zusätzliche Aufspaltung über Feinstruktur hinaus, mit Gesamtdrehimpuls F = I + J. Berühmte Beispiele sind die 21-cm-Wasserstofflinie und optisches Pumpen in Alkaliatomen.",
          nl: "Hyperfijnstructuur ontstaat uit magnetische interactie tussen het nucleaire magnetische moment en het magnetische veld gegenereerd door atomaire elektronen. De interactie Hamiltoniaan is H_hfs = A I⃗·J⃗, waarbij I kernspin, J elektronische hoekimpuls, en A de hyperfijn koppelingsconstaante is. Dit creëert additionele splitsing voorbij fijnstructuur, met totale hoekimpuls F = I + J. Beroemde voorbeelden zijn de 21 cm waterstof lijn en optisch pompen in alkaliatomen."
        }
      },
      {
        question: {
          en: "What is the Stern-Gerlach experiment and its significance?",
          es: "¿Qué es el experimento Stern-Gerlach y su significado?",
          de: "Was ist das Stern-Gerlach-Experiment und seine Bedeutung?",
          nl: "Wat is het Stern-Gerlach experiment en zijn betekenis?"
        },
        options: [
          {
            en: "Demonstrated spatial quantization of angular momentum by deflecting atoms in inhomogeneous magnetic field",
            es: "Demostró cuantización espacial de momento angular deflectando átomos en campo magnético inhomogéneo",
            de: "Bewies räumliche Quantisierung von Drehimpuls durch Ablenkung von Atomen im inhomogenen Magnetfeld",
            nl: "Toonde ruimtelijke kwantisatie van hoekimpuls aan door atomen af te buigen in inhomogeen magnetisch veld"
          },
          {
            en: "Measured the charge-to-mass ratio of the electron",
            es: "Midió la razón carga-masa del electrón",
            de: "Maß das Ladungs-Masse-Verhältnis des Elektrons",
            nl: "Meet de lading-massa verhouding van het elektron"
          },
          {
            en: "Discovered the wave nature of matter through diffraction",
            es: "Descubrió la naturaleza ondulatoria de la materia a través de difracción",
            de: "Entdeckte die Wellennatur der Materie durch Beugung",
            nl: "Ontdekte de golfaard van materie door diffractie"
          },
          {
            en: "Proved the existence of atomic nuclei through scattering",
            es: "Probó la existencia de núcleos atómicos a través de dispersión",
            de: "Bewies die Existenz von Atomkernen durch Streuung",
            nl: "Bewees het bestaan van atoomkernen door verstrooiing"
          }
        ],
        correct: 0,
        explanation: {
          en: "The Stern-Gerlach experiment (1922) passed silver atoms through an inhomogeneous magnetic field and observed discrete deflection patterns instead of the classical continuous distribution. This demonstrated spatial quantization - that angular momentum can only point in certain discrete directions relative to a magnetic field. For spin-1/2 particles like electrons, only two orientations are possible (±ℏ/2). This was crucial evidence for quantum mechanics and led to the discovery of electron spin.",
          es: "El experimento Stern-Gerlach (1922) pasó átomos de plata a través de un campo magnético inhomogéneo y observó patrones de deflexión discretos en lugar de la distribución continua clásica. Esto demostró cuantización espacial - que el momento angular solo puede apuntar en ciertas direcciones discretas relativas a un campo magnético. Para partículas de espín-1/2 como electrones, solo dos orientaciones son posibles (±ℏ/2). Esta fue evidencia crucial para mecánica cuántica y llevó al descubrimiento del espín del electrón.",
          de: "Das Stern-Gerlach-Experiment (1922) schickte Silberatome durch ein inhomogenes Magnetfeld und beobachtete diskrete Ablenkungsmuster anstatt der klassischen kontinuierlichen Verteilung. Dies bewies räumliche Quantisierung - dass Drehimpuls nur in bestimmte diskrete Richtungen relativ zu einem Magnetfeld zeigen kann. Für Spin-1/2-Teilchen wie Elektronen sind nur zwei Orientierungen möglich (±ℏ/2). Dies war entscheidender Beweis für Quantenmechanik und führte zur Entdeckung des Elektronenspins.",
          nl: "Het Stern-Gerlach experiment (1922) leidde zilver atomen door een inhomogeen magnetisch veld en observeerde discrete afbuigingspatronen in plaats van de klassieke continue verdeling. Dit toonde ruimtelijke kwantisatie aan - dat hoekimpuls alleen in bepaalde discrete richtingen kan wijzen relatief aan een magnetisch veld. Voor spin-1/2 deeltjes zoals elektronen zijn alleen twee oriëntaties mogelijk (±ℏ/2). Dit was cruciaal bewijs voor quantummechanica en leidde tot de ontdekking van elektron spin."
        }
      },
      {
        question: {
          en: "What is jj-coupling in heavy atoms?",
          es: "¿Qué es el acoplamiento jj en átomos pesados?",
          de: "Was ist jj-Kopplung in schweren Atomen?",
          nl: "Wat is jj-koppeling in zware atomen?"
        },
        options: [
          {
            en: "Each electron's lᵢ and sᵢ couple first to jᵢ = lᵢ + sᵢ, then all jᵢ combine when spin-orbit >> electrostatic",
            es: "El lᵢ y sᵢ de cada electrón se acoplan primero a jᵢ = lᵢ + sᵢ, luego todos los jᵢ se combinan cuando espín-órbita >> electrostático",
            de: "Jedes Elektrons lᵢ und sᵢ koppeln zuerst zu jᵢ = lᵢ + sᵢ, dann kombinieren sich alle jᵢ wenn Spin-Bahn >> elektrostatisch",
            nl: "Elk elektron's lᵢ en sᵢ koppelen eerst tot jᵢ = lᵢ + sᵢ, dan combineren alle jᵢ wanneer spin-baan >> elektrostatisch"
          },
          {
            en: "Total J is always the vector sum of individual orbital momenta only",
            es: "J total es siempre la suma vectorial solo de momentos orbitales individuales",
            de: "Gesamt-J ist immer die Vektorsumme nur der individuellen Bahnimpulse",
            nl: "Totaal J is altijd de vectorsom van alleen individuele orbitale impulsen"
          },
          {
            en: "Nuclear spin dominates over electronic angular momentum",
            es: "El espín nuclear domina sobre el momento angular electrónico",
            de: "Kernspin dominiert über elektronischen Drehimpuls",
            nl: "Kernspin domineert over elektronische hoekimpuls"
          },
          {
            en: "Only electrons in s-orbitals contribute to total angular momentum",
            es: "Solo electrones en orbitales s contribuyen al momento angular total",
            de: "Nur Elektronen in s-Orbitalen tragen zum Gesamtdrehimpuls bei",
            nl: "Alleen elektronen in s-orbitalen dragen bij aan totale hoekimpuls"
          }
        ],
        correct: 0,
        explanation: {
          en: "jj-coupling occurs in heavy atoms where spin-orbit interaction becomes stronger than electrostatic repulsion between electrons. In this limit, each electron's orbital and spin angular momenta (lᵢ, sᵢ) couple first to form jᵢ = lᵢ + sᵢ, then these individual j values combine to give the total J = Σjᵢ. This is opposite to LS-coupling and leads to different term structures. The transition from LS to jj-coupling occurs around Z ≈ 40-50 as spin-orbit energy scales as Z⁴.",
          es: "El acoplamiento jj ocurre en átomos pesados donde la interacción espín-órbita se vuelve más fuerte que la repulsión electrostática entre electrones. En este límite, los momentos angulares orbital y de espín de cada electrón (lᵢ, sᵢ) se acoplan primero para formar jᵢ = lᵢ + sᵢ, luego estos valores j individuales se combinan para dar el J total = Σjᵢ. Esto es opuesto al acoplamiento LS y lleva a diferentes estructuras de términos. La transición de acoplamiento LS a jj ocurre alrededor de Z ≈ 40-50 ya que la energía espín-órbita escala como Z⁴.",
          de: "jj-Kopplung tritt in schweren Atomen auf, wo Spin-Bahn-Wechselwirkung stärker wird als elektrostatische Abstoßung zwischen Elektronen. In dieser Grenze koppeln zuerst die Bahn- und Spin-Drehimpulse jedes Elektrons (lᵢ, sᵢ) zu jᵢ = lᵢ + sᵢ, dann kombinieren sich diese individuellen j-Werte zum Gesamt-J = Σjᵢ. Dies ist entgegengesetzt zur LS-Kopplung und führt zu verschiedenen Termstrukturen. Der Übergang von LS- zu jj-Kopplung erfolgt um Z ≈ 40-50, da Spin-Bahn-Energie wie Z⁴ skaliert.",
          nl: "jj-koppeling treedt op in zware atomen waar spin-baan interactie sterker wordt dan elektrostatische afstoting tussen elektronen. In deze limiet koppelen eerst elke elektron's orbitale en spin hoekimpulsen (lᵢ, sᵢ) om jᵢ = lᵢ + sᵢ te vormen, dan combineren deze individuele j waarden om de totale J = Σjᵢ te geven. Dit is tegengesteld aan LS-koppeling en leidt tot verschillende termstructuren. De overgang van LS naar jj-koppeling vindt plaats rond Z ≈ 40-50 omdat spin-baan energie schaalt als Z⁴."
        }
      },
      {
        question: {
          en: "What is the physical interpretation of spin angular momentum?",
          es: "¿Cuál es la interpretación física del momento angular de espín?",
          de: "Was ist die physikalische Interpretation des Spin-Drehimpulses?",
          nl: "Wat is de fysieke interpretatie van spin hoekimpuls?"
        },
        options: [
          {
            en: "Intrinsic quantum angular momentum with no classical analog, fundamental property like mass and charge",
            es: "Momento angular cuántico intrínseco sin análogo clásico, propiedad fundamental como masa y carga",
            de: "Intrinsischer Quanten-Drehimpuls ohne klassisches Analogon, fundamentale Eigenschaft wie Masse und Ladung",
            nl: "Intrinsieke quantum hoekimpuls zonder klassieke analogie, fundamentele eigenschap zoals massa en lading"
          },
          {
            en: "Classical rotation of particle around its own axis at light speed",
            es: "Rotación clásica de partícula alrededor de su propio eje a velocidad de la luz",
            de: "Klassische Rotation des Teilchens um seine eigene Achse mit Lichtgeschwindigkeit",
            nl: "Klassieke rotatie van deeltje rond zijn eigen as met lichtsnelheid"
          },
          {
            en: "Orbital motion in extremely small circular orbits inside the particle",
            es: "Movimiento orbital en órbitas circulares extremadamente pequeñas dentro de la partícula",
            de: "Bahnbewegung in extrem kleinen Kreisbahnen innerhalb des Teilchens",
            nl: "Orbitale beweging in extreem kleine circulaire banen binnen het deeltje"
          },
          {
            en: "Magnetic moment created by electric charge distribution in the particle",
            es: "Momento magnético creado por distribución de carga eléctrica en la partícula",
            de: "Magnetisches Moment erzeugt durch elektrische Ladungsverteilung im Teilchen",
            nl: "Magnetisch moment gecreëerd door elektrische ladingsverdeling in het deeltje"
          }
        ],
        correct: 0,
        explanation: {
          en: "Spin is an intrinsic quantum mechanical property with no classical analog. Unlike orbital angular momentum, which arises from particle motion, spin is an inherent characteristic like electric charge or mass. For electrons, |S| = ℏ√(s(s+1)) = ℏ√(3/4) with s=1/2. Attempting to model electron spin as classical rotation leads to impossible surface speeds exceeding light speed. Spin is a purely quantum phenomenon that nevertheless carries angular momentum and magnetic moment.",
          es: "El espín es una propiedad mecánico-cuántica intrínseca sin análogo clásico. A diferencia del momento angular orbital, que surge del movimiento de partículas, el espín es una característica inherente como carga eléctrica o masa. Para electrones, |S| = ℏ√(s(s+1)) = ℏ√(3/4) con s=1/2. Intentar modelar el espín del electrón como rotación clásica lleva a velocidades superficiales imposibles que exceden la velocidad de la luz. El espín es un fenómeno puramente cuántico que sin embargo porta momento angular y momento magnético.",
          de: "Spin ist eine intrinsische quantenmechanische Eigenschaft ohne klassisches Analogon. Anders als Bahndrehimpuls, der aus Teilchenbewegung entsteht, ist Spin eine inherente Charakteristik wie elektrische Ladung oder Masse. Für Elektronen ist |S| = ℏ√(s(s+1)) = ℏ√(3/4) mit s=1/2. Der Versuch, Elektronenspin als klassische Rotation zu modellieren, führt zu unmöglichen Oberflächengeschwindigkeiten über Lichtgeschwindigkeit. Spin ist ein rein quantenphysikalisches Phänomen, das dennoch Drehimpuls und magnetisches Moment trägt.",
          nl: "Spin is een intrinsieke quantummechanische eigenschap zonder klassieke analogie. Anders dan orbitale hoekimpuls, die ontstaat uit deeltjesbeweging, is spin een inherente karakteristiek zoals elektrische lading of massa. Voor elektronen is |S| = ℏ√(s(s+1)) = ℏ√(3/4) met s=1/2. Het proberen te modelleren van elektron spin als klassieke rotatie leidt tot onmogelijke oppervlaktesnelheden die de lichtsnelheid overschrijden. Spin is een puur quantum fenomeen dat niettemin hoekimpuls en magnetisch moment draagt."
        }
      },
      {
        question: {
          en: "What determines the selection rules for electric dipole transitions?",
          es: "¿Qué determina las reglas de selección para transiciones de dipolo eléctrico?",
          de: "Was bestimmt die Auswahlregeln für elektrische Dipolübergänge?",
          nl: "Wat bepaalt de selectieregels voor elektrische dipool overgangen?"
        },
        options: [
          {
            en: "Parity conservation and angular momentum conservation: Δl = ±1, Δj = 0,±1 (j=0↛j=0 forbidden)",
            es: "Conservación de paridad y conservación de momento angular: Δl = ±1, Δj = 0,±1 (j=0↛j=0 prohibido)",
            de: "Paritätserhaltung und Drehimpulserhaltung: Δl = ±1, Δj = 0,±1 (j=0↛j=0 verboten)",
            nl: "Pariteit behoud en hoekimpuls behoud: Δl = ±1, Δj = 0,±1 (j=0↛j=0 verboden)"
          },
          {
            en: "Only energy conservation determines allowed transitions",
            es: "Solo la conservación de energía determina transiciones permitidas",
            de: "Nur Energieerhaltung bestimmt erlaubte Übergänge",
            nl: "Alleen energiebehoud bepaalt toegestane overgangen"
          },
          {
            en: "Electric field strength of the radiation",
            es: "Intensidad del campo eléctrico de la radiación",
            de: "Elektrische Feldstärke der Strahlung",
            nl: "Elektrische veldsterkte van de straling"
          },
          {
            en: "Quantum numbers must all change by exactly 1",
            es: "Los números cuánticos deben cambiar todos exactamente por 1",
            de: "Quantenzahlen müssen alle um genau 1 ändern",
            nl: "Quantumgetallen moeten allemaal precies met 1 veranderen"
          }
        ],
        correct: 0,
        explanation: {
          en: "Electric dipole transition selection rules arise from conservation of angular momentum and parity. The photon carries angular momentum 1 and has odd parity, so: Δl = ±1 (orbital angular momentum changes), Δj = 0,±1 with j=0↛j=0 forbidden (total angular momentum conservation), and parity must change ((-1)ˡ → (-1)ˡ⁺¹). These rules determine which atomic transitions can occur via electric dipole radiation and explain the structure of atomic spectra.",
          es: "Las reglas de selección de transición de dipolo eléctrico surgen de la conservación de momento angular y paridad. El fotón lleva momento angular 1 y tiene paridad impar, así: Δl = ±1 (momento angular orbital cambia), Δj = 0,±1 con j=0↛j=0 prohibido (conservación de momento angular total), y la paridad debe cambiar ((-1)ˡ → (-1)ˡ⁺¹). Estas reglas determinan qué transiciones atómicas pueden ocurrir vía radiación de dipolo eléctrico y explican la estructura de espectros atómicos.",
          de: "Elektrische Dipolübergangs-Auswahlregeln entstehen aus Drehimpuls- und Paritätserhaltung. Das Photon trägt Drehimpuls 1 und hat ungerade Parität, daher: Δl = ±1 (Bahndrehimpuls ändert sich), Δj = 0,±1 mit j=0↛j=0 verboten (Gesamtdrehimpulserhaltung), und Parität muss sich ändern ((-1)ˡ → (-1)ˡ⁺¹). Diese Regeln bestimmen, welche Atomübergänge über elektrische Dipolstrahlung auftreten können und erklären die Struktur von Atomspektren.",
          nl: "Elektrische dipool overgang selectieregels ontstaan uit behoud van hoekimpuls en pariteit. Het foton draagt hoekimpuls 1 en heeft oneven pariteit, dus: Δl = ±1 (orbitale hoekimpuls verandert), Δj = 0,±1 met j=0↛j=0 verboden (totale hoekimpuls behoud), en pariteit moet veranderen ((-1)ˡ → (-1)ˡ⁺¹). Deze regels bepalen welke atomaire overgangen kunnen optreden via elektrische dipool straling en verklaren de structuur van atoomspectra."
        }
      },
      {
        question: {
          en: "What is quantum entanglement decoherence time?",
          es: "¿Qué es el tiempo de decoherencia del entrelazamiento cuántico?",
          de: "Was ist die Quantenverschränkungs-Dekohärenzzeit?",
          nl: "Wat is de decoherentietijd van quantumverstrengeling?"
        },
        options: [
          {
            en: "The time scale over which quantum entanglement is lost due to interaction with the environment",
            es: "La escala de tiempo durante la cual se pierde el entrelazamiento cuántico debido a la interacción con el ambiente",
            de: "Die Zeitskala, über die Quantenverschränkung durch Wechselwirkung mit der Umgebung verloren geht",
            nl: "De tijdschaal waarover quantumverstrengeling verloren gaat door interactie met de omgeving"
          },
          {
            en: "The time required to create maximum entanglement between particles",
            es: "El tiempo requerido para crear máximo entrelazamiento entre partículas",
            de: "Die Zeit, die benötigt wird, um maximale Verschränkung zwischen Teilchen zu erzeugen",
            nl: "De tijd die nodig is om maximale verstrengeling tussen deeltjes te creëren"
          },
          {
            en: "The lifetime of entangled particles before they decay",
            es: "El tiempo de vida de las partículas entrelazadas antes de que se desintegren",
            de: "Die Lebensdauer verschränkter Teilchen bevor sie zerfallen",
            nl: "De levensduur van verstrengelde deeltjes voordat ze vervallen"
          },
          {
            en: "The measurement time needed to verify entanglement",
            es: "El tiempo de medición necesario para verificar el entrelazamiento",
            de: "Die Messzeit, die zur Verifizierung der Verschränkung benötigt wird",
            nl: "De meettijd die nodig is om verstrengeling te verifiëren"
          }
        ],
        correct: 0,
        explanation: {
          en: "Decoherence time represents how quickly quantum entanglement degrades due to unwanted interactions with the environment. These interactions cause the quantum system to lose its coherent superposition states, effectively 'measuring' the system and destroying entanglement. Decoherence is one of the main challenges in quantum computing and quantum information processing. Different physical systems have different decoherence times - from nanoseconds in some solid-state systems to seconds in isolated atomic systems. Understanding and minimizing decoherence is crucial for practical quantum technologies.",
          es: "El tiempo de decoherencia representa qué tan rápido se degrada el entrelazamiento cuántico debido a interacciones no deseadas con el ambiente. Estas interacciones causan que el sistema cuántico pierda sus estados de superposición coherente, efectivamente 'midiendo' el sistema y destruyendo el entrelazamiento. La decoherencia es uno de los principales desafíos en computación cuántica y procesamiento de información cuántica. Diferentes sistemas físicos tienen diferentes tiempos de decoherencia - desde nanosegundos en algunos sistemas de estado sólido hasta segundos en sistemas atómicos aislados. Entender y minimizar la decoherencia es crucial para tecnologías cuánticas prácticas.",
          de: "Die Dekohärenzzeit stellt dar, wie schnell Quantenverschränkung aufgrund unerwünschter Wechselwirkungen mit der Umgebung abgebaut wird. Diese Wechselwirkungen verursachen, dass das Quantensystem seine kohärenten Superpositionszustände verliert, wodurch das System effektiv 'gemessen' und die Verschränkung zerstört wird. Dekohärenz ist eine der Hauptherausforderungen in der Quantencomputing und Quanteninformationsverarbeitung. Verschiedene physikalische Systeme haben unterschiedliche Dekohärenzzeiten - von Nanosekunden in einigen Festkörpersystemen bis zu Sekunden in isolierten Atomsystemen. Das Verstehen und Minimieren von Dekohärenz ist entscheidend für praktische Quantentechnologien.",
          nl: "Decoherentietijd vertegenwoordigt hoe snel quantumverstrengeling verslechtert door ongewenste interacties met de omgeving. Deze interacties zorgen ervoor dat het quantumsysteem zijn coherente superpositietoestanden verliest, waarbij het systeem effectief 'gemeten' wordt en verstrengeling vernietigd wordt. Decoherentie is een van de hoofduitdagingen in quantumcomputing en quantuminformatieverwerking. Verschillende fysieke systemen hebben verschillende decoherentietijden - van nanoseconden in sommige vastestof systemen tot seconden in geïsoleerde atomaire systemen. Het begrijpen en minimaliseren van decoherentie is cruciaal voor praktische quantumtechnologieën."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('mind-bender/quantum-physics', level7);
  }
})();
