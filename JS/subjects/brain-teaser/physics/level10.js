// Physics - Level 10: Advanced Modern Physics
(function() {
    const level10 = {
        name: {
            en: "Advanced Modern Physics",
            es: "Física Moderna Avanzada",
            de: "Fortgeschrittene Moderne Physik",
            nl: "Geavanceerde Moderne Fysica"
        },
        questions: [
            {
                question: {
                    en: "What is the fundamental principle behind wave-particle duality?",
                    es: "¿Cuál es el principio fundamental detrás de la dualidad onda-partícula?",
                    de: "Was ist das fundamentale Prinzip hinter dem Welle-Teilchen-Dualismus?",
                    nl: "Wat is het fundamentele principe achter golf-deeltje dualiteit?"
                },
                options: [
                    {
                        en: "Quantum objects exhibit both wave and particle properties depending on measurement context",
                        es: "Los objetos cuánticos exhiben propiedades tanto de onda como de partícula dependiendo del contexto de medición",
                        de: "Quantenobjekte zeigen sowohl Wellen- als auch Teilcheneigenschaften je nach Messkontext",
                        nl: "Quantumobjecten vertonen zowel golf- als deeltjeseigenschappen afhankelijk van meetcontext"
                    },
                    {
                        en: "All particles are actually waves in disguise",
                        es: "Todas las partículas son en realidad ondas disfrazadas",
                        de: "Alle Teilchen sind eigentlich getarnte Wellen",
                        nl: "Alle deeltjes zijn eigenlijk golven in vermomming"
                    },
                    {
                        en: "Waves and particles are completely separate phenomena",
                        es: "Ondas y partículas son fenómenos completamente separados",
                        de: "Wellen und Teilchen sind völlig getrennte Phänomene",
                        nl: "Golven en deeltjes zijn volledig gescheiden fenomenen"
                    },
                    {
                        en: "Only light exhibits wave-particle duality",
                        es: "Solo la luz exhibe dualidad onda-partícula",
                        de: "Nur Licht zeigt Welle-Teilchen-Dualismus",
                        nl: "Alleen licht vertoont golf-deeltje dualiteit"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Wave-particle duality is a fundamental quantum mechanical principle stating that all quantum objects exhibit both wave-like and particle-like properties. The observed behavior depends on the experimental setup and measurement method, as demonstrated by the double-slit experiment with electrons or photons.",
                    es: "La dualidad onda-partícula es un principio fundamental de la mecánica cuántica que establece que todos los objetos cuánticos exhiben propiedades tanto ondulatorias como corpusculares. El comportamiento observado depende de la configuración experimental y el método de medición, como lo demuestra el experimento de doble rendija con electrones o fotones.",
                    de: "Der Welle-Teilchen-Dualismus ist ein fundamentales quantenmechanisches Prinzip, das besagt, dass alle Quantenobjekte sowohl wellenähnliche als auch teilchenähnliche Eigenschaften zeigen. Das beobachtete Verhalten hängt vom experimentellen Aufbau und der Messmethode ab, wie das Doppelspaltexperiment mit Elektronen oder Photonen zeigt.",
                    nl: "Golf-deeltje dualiteit is een fundamenteel quantummechanisch principe dat stelt dat alle quantumobjecten zowel golfachtige als deeltjesachtige eigenschappen vertonen. Het waargenomen gedrag hangt af van de experimentele opstelling en meetmethode, zoals aangetoond door het dubbelspeetexperiment met elektronen of fotonen."
                }
            },
            {
                question: {
                    en: "What is the Heisenberg Uncertainty Principle?",
                    es: "¿Qué es el Principio de Incertidumbre de Heisenberg?",
                    de: "Was ist die Heisenbergsche Unschärferelation?",
                    nl: "Wat is het Heisenberg Onzekerheidsprincipe?"
                },
                options: [
                    {
                        en: "Δx·Δp ≥ ℏ/2; position and momentum cannot be simultaneously measured with perfect precision",
                        es: "Δx·Δp ≥ ℏ/2; posición y momento no pueden medirse simultáneamente con precisión perfecta",
                        de: "Δx·Δp ≥ ℏ/2; Ort und Impuls können nicht gleichzeitig mit perfekter Präzision gemessen werden",
                        nl: "Δx·Δp ≥ ℏ/2; positie en momentum kunnen niet gelijktijdig met perfecte precisie worden gemeten"
                    },
                    {
                        en: "Measurement instruments are not precise enough to measure quantum particles",
                        es: "Los instrumentos de medición no son lo suficientemente precisos para medir partículas cuánticas",
                        de: "Messinstrumente sind nicht präzise genug, um Quantenteilchen zu messen",
                        nl: "Meetinstrumenten zijn niet precies genoeg om quantumdeeltjes te meten"
                    },
                    {
                        en: "Quantum particles move too fast to be measured accurately",
                        es: "Las partículas cuánticas se mueven demasiado rápido para ser medidas con precisión",
                        de: "Quantenteilchen bewegen sich zu schnell, um genau gemessen zu werden",
                        nl: "Quantumdeeltjes bewegen te snel om nauwkeurig gemeten te worden"
                    },
                    {
                        en: "Energy and time are the only complementary variables",
                        es: "Energía y tiempo son las únicas variables complementarias",
                        de: "Energie und Zeit sind die einzigen komplementären Variablen",
                        nl: "Energie en tijd zijn de enige complementaire variabelen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Heisenberg Uncertainty Principle states that the more precisely we know a particle's position, the less precisely we can know its momentum, and vice versa. This is not due to measurement limitations but is a fundamental property of quantum systems, expressed mathematically as Δx·Δp ≥ ℏ/2.",
                    es: "El Principio de Incertidumbre de Heisenberg establece que mientras más precisamente conocemos la posición de una partícula, menos precisamente podemos conocer su momento, y viceversa. Esto no se debe a limitaciones de medición sino que es una propiedad fundamental de los sistemas cuánticos, expresada matemáticamente como Δx·Δp ≥ ℏ/2.",
                    de: "Die Heisenbergsche Unschärferelation besagt, dass je präziser wir die Position eines Teilchens kennen, desto ungenauer können wir seinen Impuls kennen und umgekehrt. Dies liegt nicht an Messbeschränkungen, sondern ist eine fundamentale Eigenschaft von Quantensystemen, mathematisch ausgedrückt als Δx·Δp ≥ ℏ/2.",
                    nl: "Het Heisenberg Onzekerheidsprincipe stelt dat hoe preciezer we de positie van een deeltje kennen, hoe minder precies we zijn momentum kunnen kennen, en vice versa. Dit is niet te wijten aan meetbeperkingen maar is een fundamentele eigenschap van quantumsystemen, wiskundig uitgedrukt als Δx·Δp ≥ ℏ/2."
                }
            },
            {
                question: {
                    en: "What is the concept of quantum entanglement?",
                    es: "¿Cuál es el concepto de entrelazamiento cuántico?",
                    de: "Was ist das Konzept der Quantenverschränkung?",
                    nl: "Wat is het concept van quantumverstrengeling?"
                },
                options: [
                    {
                        en: "Quantum systems that remain correlated even when spatially separated",
                        es: "Sistemas cuánticos que permanecen correlacionados incluso cuando están separados espacialmente",
                        de: "Quantensysteme, die korreliert bleiben, auch wenn sie räumlich getrennt sind",
                        nl: "Quantumsystemen die gecorreleerd blijven zelfs wanneer ruimtelijk gescheiden"
                    },
                    {
                        en: "Particles that are physically connected by invisible strings",
                        es: "Partículas que están físicamente conectadas por cuerdas invisibles",
                        de: "Teilchen, die physisch durch unsichtbare Fäden verbunden sind",
                        nl: "Deeltjes die fysiek verbonden zijn door onzichtbare touwen"
                    },
                    {
                        en: "A classical effect where particles influence each other",
                        es: "Un efecto clásico donde las partículas se influencian entre sí",
                        de: "Ein klassischer Effekt, bei dem Teilchen sich gegenseitig beeinflussen",
                        nl: "Een klassiek effect waarbij deeltjes elkaar beïnvloeden"
                    },
                    {
                        en: "The attractive force between opposite charges",
                        es: "La fuerza atractiva entre cargas opuestas",
                        de: "Die Anziehungskraft zwischen entgegengesetzten Ladungen",
                        nl: "De aantrekkingskracht tussen tegengestelde ladingen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Quantum entanglement is a phenomenon where quantum particles become interconnected in such a way that the quantum state of each particle cannot be described independently. Measuring one particle instantaneously affects the other, regardless of distance. Einstein called this 'spooky action at a distance.'",
                    es: "El entrelazamiento cuántico es un fenómeno donde las partículas cuánticas se vuelven interconectadas de tal manera que el estado cuántico de cada partícula no puede describirse independientemente. Medir una partícula afecta instantáneamente a la otra, independientemente de la distancia. Einstein llamó a esto 'acción fantasmal a distancia.'",
                    de: "Quantenverschränkung ist ein Phänomen, bei dem Quantenteilchen so miteinander verbunden werden, dass der Quantenzustand jedes Teilchens nicht unabhängig beschrieben werden kann. Die Messung eines Teilchens beeinflusst das andere augenblicklich, unabhängig von der Entfernung. Einstein nannte dies 'spukhafte Fernwirkung.'",
                    nl: "Quantumverstrengeling is een fenomeen waarbij quantumdeeltjes zo onderling verbonden raken dat de quantumtoestand van elk deeltje niet onafhankelijk kan worden beschreven. Het meten van één deeltje beïnvloedt het andere onmiddellijk, ongeacht de afstand. Einstein noemde dit 'spookachtige actie op afstand.'"
                }
            },
            {
                question: {
                    en: "What is the significance of Schrödinger's equation in quantum mechanics?",
                    es: "¿Cuál es la significancia de la ecuación de Schrödinger en mecánica cuántica?",
                    de: "Was ist die Bedeutung der Schrödinger-Gleichung in der Quantenmechanik?",
                    nl: "Wat is de betekenis van Schrödinger's vergelijking in quantummechanica?"
                },
                options: [
                    {
                        en: "Fundamental equation governing the time evolution of quantum wavefunctions",
                        es: "Ecuación fundamental que gobierna la evolución temporal de funciones de onda cuánticas",
                        de: "Grundlegende Gleichung, die die zeitliche Entwicklung von Quantenwellenfunktionen regiert",
                        nl: "Fundamentele vergelijking die de tijdsevolutie van quantumgolffuncties beheerst"
                    },
                    {
                        en: "Describes the motion of classical particles only",
                        es: "Describe el movimiento de partículas clásicas solamente",
                        de: "Beschreibt nur die Bewegung klassischer Teilchen",
                        nl: "Beschrijft alleen de beweging van klassieke deeltjes"
                    },
                    {
                        en: "Explains why cats can be both alive and dead",
                        es: "Explica por qué los gatos pueden estar vivos y muertos a la vez",
                        de: "Erklärt, warum Katzen sowohl lebendig als auch tot sein können",
                        nl: "Verklaart waarom katten zowel levend als dood kunnen zijn"
                    },
                    {
                        en: "Only applies to electromagnetic waves",
                        es: "Solo se aplica a ondas electromagnéticas",
                        de: "Gilt nur für elektromagnetische Wellen",
                        nl: "Geldt alleen voor elektromagnetische golven"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Schrödinger's equation (iℏ∂ψ/∂t = Ĥψ) is the fundamental equation of quantum mechanics that describes how the wavefunction ψ of a quantum system evolves over time. It allows us to predict the probability of finding particles in different states and locations.",
                    es: "La ecuación de Schrödinger (iℏ∂ψ/∂t = Ĥψ) es la ecuación fundamental de la mecánica cuántica que describe cómo evoluciona la función de onda ψ de un sistema cuántico a lo largo del tiempo. Nos permite predecir la probabilidad de encontrar partículas en diferentes estados y ubicaciones.",
                    de: "Die Schrödinger-Gleichung (iℏ∂ψ/∂t = Ĥψ) ist die grundlegende Gleichung der Quantenmechanik, die beschreibt, wie sich die Wellenfunktion ψ eines Quantensystems über die Zeit entwickelt. Sie ermöglicht es uns, die Wahrscheinlichkeit vorherzusagen, Teilchen in verschiedenen Zuständen und Orten zu finden.",
                    nl: "Schrödinger's vergelijking (iℏ∂ψ/∂t = Ĥψ) is de fundamentele vergelijking van quantummechanica die beschrijft hoe de golffunctie ψ van een quantumsysteem evolueert over tijd. Het stelt ons in staat de waarschijnlijkheid te voorspellen van het vinden van deeltjes in verschillende toestanden en locaties."
                }
            },
            {
                question: {
                    en: "What is special relativity's fundamental postulate about the speed of light?",
                    es: "¿Cuál es el postulado fundamental de la relatividad especial sobre la velocidad de la luz?",
                    de: "Was ist das fundamentale Postulat der speziellen Relativitätstheorie über die Lichtgeschwindigkeit?",
                    nl: "Wat is het fundamentele postulaat van speciale relativiteit over de lichtsnelheid?"
                },
                options: [
                    {
                        en: "The speed of light in vacuum is constant for all observers in inertial frames",
                        es: "La velocidad de la luz en el vacío es constante para todos los observadores en marcos inerciales",
                        de: "Die Lichtgeschwindigkeit im Vakuum ist konstant für alle Beobachter in Trägheitssystemen",
                        nl: "De lichtsnelheid in vacuüm is constant voor alle waarnemers in inertiaalkaders"
                    },
                    {
                        en: "Light speed depends on the motion of the source",
                        es: "La velocidad de la luz depende del movimiento de la fuente",
                        de: "Die Lichtgeschwindigkeit hängt von der Bewegung der Quelle ab",
                        nl: "Lichtsnelheid hangt af van de beweging van de bron"
                    },
                    {
                        en: "Light speed is relative to the observer's velocity",
                        es: "La velocidad de la luz es relativa a la velocidad del observador",
                        de: "Die Lichtgeschwindigkeit ist relativ zur Geschwindigkeit des Beobachters",
                        nl: "Lichtsnelheid is relatief ten opzichte van de snelheid van de waarnemer"
                    },
                    {
                        en: "Light can travel faster than c under certain conditions",
                        es: "La luz puede viajar más rápido que c bajo ciertas condiciones",
                        de: "Licht kann unter bestimmten Bedingungen schneller als c reisen",
                        nl: "Licht kan sneller dan c reizen onder bepaalde omstandigheden"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Einstein's second postulate of special relativity states that the speed of light in vacuum (c ≈ 3×10⁸ m/s) is the same for all observers in inertial reference frames, regardless of their motion or the motion of the light source. This led to revolutionary consequences like time dilation and length contraction.",
                    es: "El segundo postulado de Einstein de la relatividad especial establece que la velocidad de la luz en el vacío (c ≈ 3×10⁸ m/s) es la misma para todos los observadores en marcos de referencia inerciales, independientemente de su movimiento o el movimiento de la fuente de luz. Esto llevó a consecuencias revolucionarias como dilatación temporal y contracción de longitud.",
                    de: "Einsteins zweites Postulat der speziellen Relativitätstheorie besagt, dass die Lichtgeschwindigkeit im Vakuum (c ≈ 3×10⁸ m/s) für alle Beobachter in Trägheitsbezugssystemen gleich ist, unabhängig von ihrer Bewegung oder der Bewegung der Lichtquelle. Dies führte zu revolutionären Konsequenzen wie Zeitdilatation und Längenkontraktion.",
                    nl: "Einstein's tweede postulaat van speciale relativiteit stelt dat de lichtsnelheid in vacuüm (c ≈ 3×10⁸ m/s) hetzelfde is voor alle waarnemers in inertiaalsystemen, ongeacht hun beweging of de beweging van de lichtbron. Dit leidde tot revolutionaire gevolgen zoals tijddilatatie en lengtecontractie."
                }
            },
            {
                question: {
                    en: "What is time dilation in special relativity?",
                    es: "¿Qué es la dilatación temporal en relatividad especial?",
                    de: "Was ist Zeitdilatation in der speziellen Relativitätstheorie?",
                    nl: "Wat is tijddilatatie in speciale relativiteit?"
                },
                options: [
                    {
                        en: "Time passes slower for objects moving at high speeds relative to observer",
                        es: "El tiempo pasa más lento para objetos moviéndose a altas velocidades relativas al observador",
                        de: "Die Zeit vergeht langsamer für Objekte, die sich mit hoher Geschwindigkeit relativ zum Beobachter bewegen",
                        nl: "Tijd gaat langzamer voor objecten die bewegen met hoge snelheden relatief tot de waarnemer"
                    },
                    {
                        en: "Time speeds up near massive objects",
                        es: "El tiempo se acelera cerca de objetos masivos",
                        de: "Die Zeit beschleunigt sich in der Nähe massereicher Objekte",
                        nl: "Tijd versnelt nabij massieve objecten"
                    },
                    {
                        en: "Clocks run faster when moving at high speeds",
                        es: "Los relojes corren más rápido cuando se mueven a altas velocidades",
                        de: "Uhren laufen schneller, wenn sie sich mit hoher Geschwindigkeit bewegen",
                        nl: "Klokken lopen sneller wanneer ze bewegen met hoge snelheden"
                    },
                    {
                        en: "Time is completely independent of motion",
                        es: "El tiempo es completamente independiente del movimiento",
                        de: "Die Zeit ist völlig unabhängig von der Bewegung",
                        nl: "Tijd is volledig onafhankelijk van beweging"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Time dilation is the relativistic effect where time passes more slowly for objects moving at high speeds relative to an observer. The time dilation factor is γ = 1/√(1-v²/c²). As velocity approaches the speed of light, time dilation becomes more pronounced.",
                    es: "La dilatación temporal es el efecto relativista donde el tiempo pasa más lentamente para objetos que se mueven a altas velocidades relativas a un observador. El factor de dilatación temporal es γ = 1/√(1-v²/c²). Cuando la velocidad se acerca a la velocidad de la luz, la dilatación temporal se vuelve más pronunciada.",
                    de: "Zeitdilatation ist der relativistische Effekt, bei dem die Zeit für Objekte, die sich mit hoher Geschwindigkeit relativ zu einem Beobachter bewegen, langsamer vergeht. Der Zeitdilatationsfaktor ist γ = 1/√(1-v²/c²). Wenn sich die Geschwindigkeit der Lichtgeschwindigkeit nähert, wird die Zeitdilatation ausgeprägter.",
                    nl: "Tijddilatatie is het relativistische effect waarbij tijd langzamer gaat voor objecten die bewegen met hoge snelheden relatief tot een waarnemer. De tijddilatatiefactor is γ = 1/√(1-v²/c²). Wanneer snelheid de lichtsnelheid benadert, wordt tijddilatatie meer uitgesproken."
                }
            },
            {
                question: {
                    en: "What is the mass-energy equivalence principle?",
                    es: "¿Cuál es el principio de equivalencia masa-energía?",
                    de: "Was ist das Masse-Energie-Äquivalenzprinzip?",
                    nl: "Wat is het massa-energie equivalentieprincipe?"
                },
                options: [
                    {
                        en: "E = mc²; mass and energy are interconvertible forms of the same quantity",
                        es: "E = mc²; masa y energía son formas interconvertibles de la misma cantidad",
                        de: "E = mc²; Masse und Energie sind ineinander umwandelbare Formen derselben Größe",
                        nl: "E = mc²; massa en energie zijn onderling omwisselbare vormen van dezelfde grootheid"
                    },
                    {
                        en: "Mass always increases with energy",
                        es: "La masa siempre aumenta con la energía",
                        de: "Die Masse nimmt immer mit der Energie zu",
                        nl: "Massa neemt altijd toe met energie"
                    },
                    {
                        en: "Energy and mass are completely unrelated",
                        es: "Energía y masa son completamente no relacionadas",
                        de: "Energie und Masse sind völlig unabhängig",
                        nl: "Energie en massa zijn volledig ongerelateerd"
                    },
                    {
                        en: "Only applies to nuclear reactions",
                        es: "Solo se aplica a reacciones nucleares",
                        de: "Gilt nur für Kernreaktionen",
                        nl: "Geldt alleen voor kernreacties"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Einstein's famous equation E = mc² shows that mass and energy are equivalent and interconvertible. A small amount of mass can be converted to enormous amounts of energy (as in nuclear reactions), and energy can create mass (as in particle accelerators).",
                    es: "La famosa ecuación de Einstein E = mc² muestra que masa y energía son equivalentes e interconvertibles. Una pequeña cantidad de masa puede convertirse en enormes cantidades de energía (como en reacciones nucleares), y la energía puede crear masa (como en aceleradores de partículas).",
                    de: "Einsteins berühmte Gleichung E = mc² zeigt, dass Masse und Energie äquivalent und ineinander umwandelbar sind. Eine kleine Menge Masse kann in enorme Energiemengen umgewandelt werden (wie bei Kernreaktionen), und Energie kann Masse erzeugen (wie in Teilchenbeschleunigern).",
                    nl: "Einstein's beroemde vergelijking E = mc² toont dat massa en energie equivalent en onderling omwisselbaar zijn. Een kleine hoeveelheid massa kan worden omgezet in enorme hoeveelheden energie (zoals bij kernreacties), en energie kan massa creëren (zoals in deeltjesversnellers)."
                }
            },
            {
                question: {
                    en: "What is the photoelectric effect and its significance?",
                    es: "¿Qué es el efecto fotoeléctrico y su significancia?",
                    de: "Was ist der photoelektrische Effekt und seine Bedeutung?",
                    nl: "Wat is het foto-elektrisch effect en de betekenis ervan?"
                },
                options: [
                    {
                        en: "Emission of electrons from matter when illuminated by light; demonstrates light's particle nature",
                        es: "Emisión de electrones de la materia cuando es iluminada por luz; demuestra la naturaleza corpuscular de la luz",
                        de: "Emission von Elektronen aus Materie bei Beleuchtung durch Licht; zeigt die Teilchennatur des Lichts",
                        nl: "Emissie van elektronen uit materie bij belichting door licht; toont de deeltjesnatur van licht aan"
                    },
                    {
                        en: "Light creates electrical current in all materials",
                        es: "La luz crea corriente eléctrica en todos los materiales",
                        de: "Licht erzeugt elektrischen Strom in allen Materialien",
                        nl: "Licht creëert elektrische stroom in alle materialen"
                    },
                    {
                        en: "Electrons absorb light and become brighter",
                        es: "Los electrones absorben luz y se vuelven más brillantes",
                        de: "Elektronen absorbieren Licht und werden heller",
                        nl: "Elektronen absorberen licht en worden helderder"
                    },
                    {
                        en: "Only visible light can eject electrons from metals",
                        es: "Solo la luz visible puede expulsar electrones de los metales",
                        de: "Nur sichtbares Licht kann Elektronen aus Metallen herausschlagen",
                        nl: "Alleen zichtbaar licht kan elektronen uit metalen werpen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The photoelectric effect, explained by Einstein, occurs when photons with sufficient energy strike a material and eject electrons. The key insight is that electron emission depends on light frequency, not intensity, providing evidence for light's quantized nature and earning Einstein the Nobel Prize.",
                    es: "El efecto fotoeléctrico, explicado por Einstein, ocurre cuando fotones con energía suficiente golpean un material y expulsan electrones. La clave es que la emisión de electrones depende de la frecuencia de la luz, no de la intensidad, proporcionando evidencia de la naturaleza cuantizada de la luz y ganando a Einstein el Premio Nobel.",
                    de: "Der photoelektrische Effekt, von Einstein erklärt, tritt auf, wenn Photonen mit ausreichender Energie auf ein Material treffen und Elektronen herausschlagen. Die Schlüsselerkenntnis ist, dass die Elektronenemission von der Lichtfrequenz abhängt, nicht von der Intensität, was Beweise für die quantisierte Natur des Lichts liefert und Einstein den Nobelpreis einbrachte.",
                    nl: "Het foto-elektrisch effect, verklaard door Einstein, treedt op wanneer fotonen met voldoende energie een materiaal raken en elektronen wegwerpen. Het belangrijkste inzicht is dat elektronemissie afhangt van lichtfrequentie, niet intensiteit, wat bewijs levert voor de gekwantiseerde aard van licht en Einstein de Nobelprijs opleverde."
                }
            },
            {
                question: {
                    en: "What is the concept of spin in quantum mechanics?",
                    es: "¿Cuál es el concepto de espín en mecánica cuántica?",
                    de: "Was ist das Konzept des Spins in der Quantenmechanik?",
                    nl: "Wat is het concept van spin in quantummechanica?"
                },
                options: [
                    {
                        en: "Intrinsic angular momentum of particles; not classical rotation but quantum property",
                        es: "Momento angular intrínseco de partículas; no rotación clásica sino propiedad cuántica",
                        de: "Intrinsischer Drehimpuls von Teilchen; nicht klassische Rotation, sondern Quanteneigenschaft",
                        nl: "Intrinsiek hoekmomentum van deeltjes; geen klassieke rotatie maar quantumeigenschap"
                    },
                    {
                        en: "Physical rotation of particles around their axis",
                        es: "Rotación física de partículas alrededor de su eje",
                        de: "Physikalische Rotation von Teilchen um ihre Achse",
                        nl: "Fysieke rotatie van deeltjes rond hun as"
                    },
                    {
                        en: "The speed at which particles move through space",
                        es: "La velocidad a la que las partículas se mueven por el espacio",
                        de: "Die Geschwindigkeit, mit der sich Teilchen durch den Raum bewegen",
                        nl: "De snelheid waarmee deeltjes door de ruimte bewegen"
                    },
                    {
                        en: "The magnetic charge of elementary particles",
                        es: "La carga magnética de partículas elementales",
                        de: "Die magnetische Ladung von Elementarteilchen",
                        nl: "De magnetische lading van elementaire deeltjes"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Quantum spin is an intrinsic form of angular momentum carried by elementary particles. Despite the name, it's not classical spinning motion but a fundamental quantum property that determines magnetic moments and statistics (fermions have half-integer spin, bosons have integer spin).",
                    es: "El espín cuántico es una forma intrínseca de momento angular llevado por partículas elementales. A pesar del nombre, no es movimiento de giro clásico sino una propiedad cuántica fundamental que determina momentos magnéticos y estadísticas (fermiones tienen espín semi-entero, bosones tienen espín entero).",
                    de: "Quantenspin ist eine intrinsische Form von Drehimpuls, die von Elementarteilchen getragen wird. Trotz des Namens ist es keine klassische Drehbewegung, sondern eine fundamentale Quanteneigenschaft, die magnetische Momente und Statistiken bestimmt (Fermionen haben halbzahligen Spin, Bosonen haben ganzzahligen Spin).",
                    nl: "Quantum spin is een intrinsieke vorm van hoekmomentum gedragen door elementaire deeltjes. Ondanks de naam is het geen klassieke draaibeweging maar een fundamentele quantumeigenschap die magnetische momenten en statistieken bepaalt (fermionen hebben halftallige spin, bosonen hebben gehele spin)."
                }
            },
            {
                question: {
                    en: "What is the Pauli exclusion principle?",
                    es: "¿Qué es el principio de exclusión de Pauli?",
                    de: "Was ist das Pauli-Ausschlussprinzip?",
                    nl: "Wat is het Pauli uitsluitingsprincipe?"
                },
                options: [
                    {
                        en: "No two fermions can occupy the same quantum state simultaneously",
                        es: "No dos fermiones pueden ocupar el mismo estado cuántico simultáneamente",
                        de: "Keine zwei Fermionen können gleichzeitig denselben Quantenzustand besetzen",
                        nl: "Geen twee fermionen kunnen tegelijkertijd dezelfde quantumtoestand bezetten"
                    },
                    {
                        en: "Particles with the same charge repel each other",
                        es: "Partículas con la misma carga se repelen entre sí",
                        de: "Teilchen mit gleicher Ladung stoßen sich ab",
                        nl: "Deeltjes met dezelfde lading stoten elkaar af"
                    },
                    {
                        en: "Energy levels in atoms are quantized",
                        es: "Los niveles de energía en átomos están cuantizados",
                        de: "Energieniveaus in Atomen sind quantisiert",
                        nl: "Energieniveaus in atomen zijn gekwantiseerd"
                    },
                    {
                        en: "Bosons cannot exist in the same location",
                        es: "Los bosones no pueden existir en la misma ubicación",
                        de: "Bosonen können nicht am selben Ort existieren",
                        nl: "Bosonen kunnen niet op dezelfde locatie bestaan"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Pauli exclusion principle states that no two fermions (particles with half-integer spin like electrons) can occupy identical quantum states. This principle explains atomic structure, the periodic table, and why matter has bulk properties like incompressibility.",
                    es: "El principio de exclusión de Pauli establece que no dos fermiones (partículas con espín semi-entero como electrones) pueden ocupar estados cuánticos idénticos. Este principio explica la estructura atómica, la tabla periódica y por qué la materia tiene propiedades masivas como incompresibilidad.",
                    de: "Das Pauli-Ausschlussprinzip besagt, dass keine zwei Fermionen (Teilchen mit halbzahligem Spin wie Elektronen) identische Quantenzustände besetzen können. Dieses Prinzip erklärt die Atomstruktur, das Periodensystem und warum Materie Volumeneigenschaften wie Inkompressibilität hat.",
                    nl: "Het Pauli uitsluitingsprincipe stelt dat geen twee fermionen (deeltjes met halftallige spin zoals elektronen) identieke quantumtoestanden kunnen bezetten. Dit principe verklaart atomaire structuur, het periodiek systeem en waarom materie bulk eigenschappen heeft zoals onsamendrukbaarheid."
                }
            },
            {
                question: {
                    en: "What is general relativity's fundamental insight about gravity?",
                    es: "¿Cuál es la perspectiva fundamental de la relatividad general sobre la gravedad?",
                    de: "Was ist die fundamentale Erkenntnis der allgemeinen Relativitätstheorie über die Gravitation?",
                    nl: "Wat is het fundamentele inzicht van algemene relativiteit over zwaartekracht?"
                },
                options: [
                    {
                        en: "Gravity is the curvature of spacetime caused by mass and energy",
                        es: "La gravedad es la curvatura del espacio-tiempo causada por masa y energía",
                        de: "Gravitation ist die Krümmung der Raumzeit, verursacht durch Masse und Energie",
                        nl: "Zwaartekracht is de kromming van ruimtetijd veroorzaakt door massa en energie"
                    },
                    {
                        en: "Gravity is a fundamental force like electromagnetism",
                        es: "La gravedad es una fuerza fundamental como el electromagnetismo",
                        de: "Gravitation ist eine fundamentale Kraft wie der Elektromagnetismus",
                        nl: "Zwaartekracht is een fundamentele kracht zoals elektromagnetisme"
                    },
                    {
                        en: "Gravity only affects objects with mass, not light",
                        es: "La gravedad solo afecta objetos con masa, no la luz",
                        de: "Gravitation beeinflusst nur Objekte mit Masse, nicht Licht",
                        nl: "Zwaartekracht beïnvloedt alleen objecten met massa, niet licht"
                    },
                    {
                        en: "Gravity becomes stronger at higher speeds",
                        es: "La gravedad se vuelve más fuerte a velocidades más altas",
                        de: "Gravitation wird bei höheren Geschwindigkeiten stärker",
                        nl: "Zwaartekracht wordt sterker bij hogere snelheden"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Einstein's general relativity revolutionized our understanding by showing that gravity is not a force but rather the curvature of spacetime caused by mass and energy. Objects follow geodesics (shortest paths) in this curved spacetime, which we perceive as gravitational attraction.",
                    es: "La relatividad general de Einstein revolucionó nuestro entendimiento mostrando que la gravedad no es una fuerza sino la curvatura del espacio-tiempo causada por masa y energía. Los objetos siguen geodésicas (caminos más cortos) en este espacio-tiempo curvado, lo que percibimos como atracción gravitacional.",
                    de: "Einsteins allgemeine Relativitätstheorie revolutionierte unser Verständnis, indem sie zeigte, dass Gravitation keine Kraft ist, sondern die Krümmung der Raumzeit, verursacht durch Masse und Energie. Objekte folgen Geodäten (kürzeste Wege) in dieser gekrümmten Raumzeit, was wir als Gravitationsanziehung wahrnehmen.",
                    nl: "Einstein's algemene relativiteit revolutioneerde ons begrip door te tonen dat zwaartekracht geen kracht is maar eerder de kromming van ruimtetijd veroorzaakt door massa en energie. Objecten volgen geodeten (kortste paden) in deze gekromde ruimtetijd, wat we waarnemen als gravitationele aantrekking."
                }
            },
            {
                question: {
                    en: "What is a black hole according to general relativity?",
                    es: "¿Qué es un agujero negro según la relatividad general?",
                    de: "Was ist ein Schwarzes Loch nach der allgemeinen Relativitätstheorie?",
                    nl: "Wat is een zwart gat volgens algemene relativiteit?"
                },
                options: [
                    {
                        en: "Region of spacetime where gravity is so strong that nothing, including light, can escape",
                        es: "Región del espacio-tiempo donde la gravedad es tan fuerte que nada, incluyendo luz, puede escapar",
                        de: "Region der Raumzeit, wo die Gravitation so stark ist, dass nichts, einschließlich Licht, entkommen kann",
                        nl: "Gebied van ruimtetijd waar zwaartekracht zo sterk is dat niets, inclusief licht, kan ontsnappen"
                    },
                    {
                        en: "A hole in space that leads to another dimension",
                        es: "Un agujero en el espacio que lleva a otra dimensión",
                        de: "Ein Loch im Raum, das zu einer anderen Dimension führt",
                        nl: "Een gat in de ruimte dat naar een andere dimensie leidt"
                    },
                    {
                        en: "A region where time moves backwards",
                        es: "Una región donde el tiempo se mueve hacia atrás",
                        de: "Eine Region, wo die Zeit rückwärts läuft",
                        nl: "Een gebied waar tijd achterwaarts beweegt"
                    },
                    {
                        en: "A star that has completely burned out",
                        es: "Una estrella que se ha quemado completamente",
                        de: "Ein Stern, der völlig ausgebrannt ist",
                        nl: "Een ster die volledig is opgebrand"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "A black hole is a region of spacetime where gravitational effects have become so extreme that the curvature creates an event horizon - a boundary beyond which nothing can escape, not even light. They form when massive stars collapse under their own gravity.",
                    es: "Un agujero negro es una región del espacio-tiempo donde los efectos gravitacionales se han vuelto tan extremos que la curvatura crea un horizonte de eventos - una frontera más allá de la cual nada puede escapar, ni siquiera la luz. Se forman cuando estrellas masivas colapsan bajo su propia gravedad.",
                    de: "Ein Schwarzes Loch ist eine Region der Raumzeit, wo Gravitationseffekte so extrem geworden sind, dass die Krümmung einen Ereignishorizont schafft - eine Grenze, jenseits derer nichts entkommen kann, nicht einmal Licht. Sie entstehen, wenn massive Sterne unter ihrer eigenen Gravitation kollabieren.",
                    nl: "Een zwart gat is een gebied van ruimtetijd waar gravitationele effecten zo extreem zijn geworden dat de kromming een gebeurtenishorizon creëert - een grens voorbij welke niets kan ontsnappen, zelfs licht niet. Ze vormen wanneer massieve sterren ineenstorten onder hun eigen zwaartekracht."
                }
            },
            {
                question: {
                    en: "What is the concept of antimatter?",
                    es: "¿Cuál es el concepto de antimateria?",
                    de: "Was ist das Konzept der Antimaterie?",
                    nl: "Wat is het concept van antimaterie?"
                },
                options: [
                    {
                        en: "Matter composed of antiparticles with opposite charge and other quantum numbers",
                        es: "Materia compuesta de antipartículas con carga opuesta y otros números cuánticos",
                        de: "Materie, die aus Antiteilchen mit entgegengesetzter Ladung und anderen Quantenzahlen besteht",
                        nl: "Materie samengesteld uit antideeltjes met tegengestelde lading en andere quantumgetallen"
                    },
                    {
                        en: "Matter that travels backwards in time",
                        es: "Materia que viaja hacia atrás en el tiempo",
                        de: "Materie, die rückwärts in der Zeit reist",
                        nl: "Materie die achterwaarts in tijd reist"
                    },
                    {
                        en: "Matter with negative mass that repels gravity",
                        es: "Materia con masa negativa que repele la gravedad",
                        de: "Materie mit negativer Masse, die Gravitation abstößt",
                        nl: "Materie met negatieve massa die zwaartekracht afstoot"
                    },
                    {
                        en: "Hypothetical matter that doesn't interact with anything",
                        es: "Materia hipotética que no interactúa con nada",
                        de: "Hypothetische Materie, die mit nichts wechselwirkt",
                        nl: "Hypothetische materie die met niets interacteert"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Antimatter consists of antiparticles that have the same mass as their corresponding particles but opposite electric charge and other quantum properties. When matter and antimatter meet, they annihilate completely, converting to pure energy (E=mc²).",
                    es: "La antimateria consiste en antipartículas que tienen la misma masa que sus partículas correspondientes pero carga eléctrica opuesta y otras propiedades cuánticas. Cuando materia y antimateria se encuentran, se aniquilan completamente, convirtiéndose en energía pura (E=mc²).",
                    de: "Antimaterie besteht aus Antiteilchen, die dieselbe Masse wie ihre entsprechenden Teilchen haben, aber entgegengesetzte elektrische Ladung und andere Quanteneigenschaften. Wenn Materie und Antimaterie sich treffen, vernichten sie sich vollständig und wandeln sich in reine Energie um (E=mc²).",
                    nl: "Antimaterie bestaat uit antideeltjes die dezelfde massa hebben als hun corresponderende deeltjes maar tegengestelde elektrische lading en andere quantumeigenschappen. Wanneer materie en antimaterie elkaar ontmoeten, vernietigen ze elkaar volledig en zetten om in pure energie (E=mc²)."
                }
            },
            {
                question: {
                    en: "What is the fundamental concept behind nuclear fusion?",
                    es: "¿Cuál es el concepto fundamental detrás de la fusión nuclear?",
                    de: "Was ist das fundamentale Konzept hinter der Kernfusion?",
                    nl: "Wat is het fundamentele concept achter kernfusie?"
                },
                options: [
                    {
                        en: "Light nuclei combine to form heavier nuclei, releasing binding energy",
                        es: "Núcleos ligeros se combinan para formar núcleos más pesados, liberando energía de enlace",
                        de: "Leichte Kerne verschmelzen zu schwereren Kernen und setzen Bindungsenergie frei",
                        nl: "Lichte kernen combineren om zwaardere kernen te vormen, waarbij bindingsenergie vrijkomt"
                    },
                    {
                        en: "Heavy nuclei split into lighter fragments",
                        es: "Núcleos pesados se dividen en fragmentos más ligeros",
                        de: "Schwere Kerne spalten sich in leichtere Fragmente",
                        nl: "Zware kernen splitsen in lichtere fragmenten"
                    },
                    {
                        en: "Electrons are stripped from atomic nuclei",
                        es: "Los electrones son arrancados de núcleos atómicos",
                        de: "Elektronen werden von Atomkernen abgestreift",
                        nl: "Elektronen worden weggenomen van atoomkernen"
                    },
                    {
                        en: "Neutrons decay into protons and electrons",
                        es: "Los neutrones se descomponen en protones y electrones",
                        de: "Neutronen zerfallen in Protonen und Elektronen",
                        nl: "Neutronen vervallen in protonen en elektronen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Nuclear fusion occurs when light atomic nuclei (like hydrogen isotopes) overcome their electrostatic repulsion and combine to form heavier nuclei. The mass difference is converted to energy according to E=mc². This process powers stars and has potential for clean energy.",
                    es: "La fusión nuclear ocurre cuando núcleos atómicos ligeros (como isótopos de hidrógeno) superan su repulsión electrostática y se combinan para formar núcleos más pesados. La diferencia de masa se convierte en energía según E=mc². Este proceso alimenta las estrellas y tiene potencial para energía limpia.",
                    de: "Kernfusion tritt auf, wenn leichte Atomkerne (wie Wasserstoffisotope) ihre elektrostatische Abstoßung überwinden und sich zu schwereren Kernen verbinden. Die Massendifferenz wird nach E=mc² in Energie umgewandelt. Dieser Prozess treibt Sterne an und hat Potenzial für saubere Energie.",
                    nl: "Kernfusie treedt op wanneer lichte atoomkernen (zoals waterstofisotopen) hun elektrostatische afstoting overwinnen en combineren om zwaardere kernen te vormen. Het massaverschil wordt omgezet in energie volgens E=mc². Dit proces voedt sterren en heeft potentieel voor schone energie."
                }
            },
            {
                question: {
                    en: "What is the Doppler effect for electromagnetic radiation?",
                    es: "¿Qué es el efecto Doppler para radiación electromagnética?",
                    de: "Was ist der Doppler-Effekt für elektromagnetische Strahlung?",
                    nl: "Wat is het Doppler effect voor elektromagnetische straling?"
                },
                options: [
                    {
                        en: "Frequency shift due to relative motion; redshift when receding, blueshift when approaching",
                        es: "Cambio de frecuencia debido a movimiento relativo; corrimiento al rojo cuando se aleja, al azul cuando se acerca",
                        de: "Frequenzverschiebung aufgrund relativer Bewegung; Rotverschiebung beim Entfernen, Blauverschiebung beim Nähern",
                        nl: "Frequentieverschuiving door relatieve beweging; roodverschuiving bij wegbewegen, blauwverschuiving bij naderen"
                    },
                    {
                        en: "Light intensity changes with source motion",
                        es: "La intensidad de luz cambia con el movimiento de la fuente",
                        de: "Lichtintensität ändert sich mit der Quellenbewegung",
                        nl: "Lichtintensiteit verandert met bronbeweging"
                    },
                    {
                        en: "Electromagnetic waves can only travel in straight lines",
                        es: "Las ondas electromagnéticas solo pueden viajar en líneas rectas",
                        de: "Elektromagnetische Wellen können nur in geraden Linien reisen",
                        nl: "Elektromagnetische golven kunnen alleen in rechte lijnen reizen"
                    },
                    {
                        en: "Light speed changes depending on source velocity",
                        es: "La velocidad de la luz cambia dependiendo de la velocidad de la fuente",
                        de: "Lichtgeschwindigkeit ändert sich je nach Quellengeschwindigkeit",
                        nl: "Lichtsnelheid verandert afhankelijk van bronsnelheid"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The relativistic Doppler effect causes electromagnetic radiation to shift frequency when source and observer move relative to each other. Recession causes redshift (lower frequency), approach causes blueshift (higher frequency). This is crucial for measuring stellar motion and cosmic expansion.",
                    es: "El efecto Doppler relativista causa que la radiación electromagnética cambie de frecuencia cuando fuente y observador se mueven relativamente entre sí. El alejamiento causa corrimiento al rojo (menor frecuencia), el acercamiento causa corrimiento al azul (mayor frecuencia). Esto es crucial para medir movimiento estelar y expansión cósmica.",
                    de: "Der relativistische Doppler-Effekt bewirkt, dass elektromagnetische Strahlung die Frequenz verschiebt, wenn sich Quelle und Beobachter relativ zueinander bewegen. Entfernung verursacht Rotverschiebung (niedrigere Frequenz), Annäherung verursacht Blauverschiebung (höhere Frequenz). Dies ist entscheidend für die Messung stellarer Bewegung und kosmischer Expansion.",
                    nl: "Het relativistische Doppler effect zorgt ervoor dat elektromagnetische straling frequentie verschuift wanneer bron en waarnemer relatief ten opzichte van elkaar bewegen. Wegbeweging veroorzaakt roodverschuiving (lagere frequentie), nadering veroorzaakt blauwverschuiving (hogere frequentie). Dit is cruciaal voor het meten van stellaire beweging en kosmische expansie."
                }
            },
            {
                question: {
                    en: "What is the concept of quantum superposition?",
                    es: "¿Cuál es el concepto de superposición cuántica?",
                    de: "Was ist das Konzept der Quantensuperposition?",
                    nl: "Wat is het concept van quantum superpositie?"
                },
                options: [
                    {
                        en: "Quantum systems exist in multiple states simultaneously until measured",
                        es: "Los sistemas cuánticos existen en múltiples estados simultáneamente hasta ser medidos",
                        de: "Quantensysteme existieren gleichzeitig in mehreren Zuständen bis zur Messung",
                        nl: "Quantumsystemen bestaan gelijktijdig in meerdere toestanden tot gemeten"
                    },
                    {
                        en: "Particles can be in two places at the same time physically",
                        es: "Las partículas pueden estar en dos lugares al mismo tiempo físicamente",
                        de: "Teilchen können physisch gleichzeitig an zwei Orten sein",
                        nl: "Deeltjes kunnen fysiek op twee plaatsen tegelijk zijn"
                    },
                    {
                        en: "Quantum effects only occur at absolute zero temperature",
                        es: "Los efectos cuánticos solo ocurren a temperatura de cero absoluto",
                        de: "Quanteneffekte treten nur bei absoluter Nulltemperatur auf",
                        nl: "Quantumeffecten treden alleen op bij absolute nul temperatuur"
                    },
                    {
                        en: "Large objects can also exist in superposition states",
                        es: "Los objetos grandes también pueden existir en estados de superposición",
                        de: "Große Objekte können auch in Superpositionszuständen existieren",
                        nl: "Grote objecten kunnen ook bestaan in superpositietoestanden"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Quantum superposition means a quantum system can exist in multiple states simultaneously until a measurement collapses it to a definite state. This is illustrated by Schrödinger's cat thought experiment and enables quantum computing and interference effects.",
                    es: "La superposición cuántica significa que un sistema cuántico puede existir en múltiples estados simultáneamente hasta que una medición lo colapsa a un estado definido. Esto se ilustra por el experimento mental del gato de Schrödinger y permite computación cuántica y efectos de interferencia.",
                    de: "Quantensuperposition bedeutet, dass ein Quantensystem gleichzeitig in mehreren Zuständen existieren kann, bis eine Messung es zu einem bestimmten Zustand kollabiert. Dies wird durch Schrödingers Katzen-Gedankenexperiment veranschaulicht und ermöglicht Quantencomputing und Interferenzeffekte.",
                    nl: "Quantum superpositie betekent dat een quantumsysteem gelijktijdig in meerdere toestanden kan bestaan tot een meting het laat instorten tot een bepaalde toestand. Dit wordt geïllustreerd door Schrödinger's kat gedachte-experiment en maakt quantumcomputing en interferentie-effecten mogelijk."
                }
            },
            {
                question: {
                    en: "What is the weak nuclear force responsible for?",
                    es: "¿De qué es responsable la fuerza nuclear débil?",
                    de: "Wofür ist die schwache Kernkraft verantwortlich?",
                    nl: "Waarvoor is de zwakke kernkracht verantwoordelijk?"
                },
                options: [
                    {
                        en: "Beta decay and other processes involving neutrinos and W/Z bosons",
                        es: "Decaimiento beta y otros procesos involucrando neutrinos y bosones W/Z",
                        de: "Beta-Zerfall und andere Prozesse mit Neutrinos und W/Z-Bosonen",
                        nl: "Bètaverval en andere processen met neutrino's en W/Z bosonen"
                    },
                    {
                        en: "Binding protons and neutrons in atomic nuclei",
                        es: "Unir protones y neutrones en núcleos atómicos",
                        de: "Bindung von Protonen und Neutronen in Atomkernen",
                        nl: "Binden van protonen en neutronen in atoomkernen"
                    },
                    {
                        en: "Electromagnetic interactions between charged particles",
                        es: "Interacciones electromagnéticas entre partículas cargadas",
                        de: "Elektromagnetische Wechselwirkungen zwischen geladenen Teilchen",
                        nl: "Elektromagnetische interacties tussen geladen deeltjes"
                    },
                    {
                        en: "Gravitational attraction between massive objects",
                        es: "Atracción gravitacional entre objetos masivos",
                        de: "Gravitationsanziehung zwischen massereichen Objekten",
                        nl: "Gravitationele aantrekking tussen massieve objecten"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The weak nuclear force is responsible for certain types of radioactive decay, particularly beta decay where neutrons convert to protons (or vice versa) with emission of electrons/positrons and neutrinos. It's mediated by W and Z bosons and is much weaker than electromagnetic and strong forces.",
                    es: "La fuerza nuclear débil es responsable de ciertos tipos de decaimiento radiactivo, particularmente el decaimiento beta donde neutrones se convierten en protones (o viceversa) con emisión de electrones/positrones y neutrinos. Es mediada por bosones W y Z y es mucho más débil que fuerzas electromagnéticas y fuertes.",
                    de: "Die schwache Kernkraft ist für bestimmte Arten radioaktiven Zerfalls verantwortlich, insbesondere Beta-Zerfall, wo Neutronen sich in Protonen umwandeln (oder umgekehrt) unter Emission von Elektronen/Positronen und Neutrinos. Sie wird durch W- und Z-Bosonen vermittelt und ist viel schwächer als elektromagnetische und starke Kräfte.",
                    nl: "De zwakke kernkracht is verantwoordelijk voor bepaalde soorten radioactief verval, vooral bètaverval waarbij neutronen omzetten naar protonen (of omgekeerd) met emissie van elektronen/positronen en neutrino's. Het wordt overgebracht door W en Z bosonen en is veel zwakker dan elektromagnetische en sterke krachten."
                }
            },
            {
                question: {
                    en: "What is the concept of dark matter in cosmology?",
                    es: "¿Cuál es el concepto de materia oscura en cosmología?",
                    de: "Was ist das Konzept der Dunklen Materie in der Kosmologie?",
                    nl: "Wat is het concept van donkere materie in kosmologie?"
                },
                options: [
                    {
                        en: "Invisible matter that interacts gravitationally but not electromagnetically",
                        es: "Materia invisible que interactúa gravitacionalmente pero no electromagnéticamente",
                        de: "Unsichtbare Materie, die gravitativ, aber nicht elektromagnetisch wechselwirkt",
                        nl: "Onzichtbare materie die gravitationeel maar niet elektromagnetisch interacteert"
                    },
                    {
                        en: "Regular matter that has been turned black by gravity",
                        es: "Materia regular que ha sido ennegrecida por la gravedad",
                        de: "Normale Materie, die durch Gravitation schwarz geworden ist",
                        nl: "Gewone materie die zwart is gemaakt door zwaartekracht"
                    },
                    {
                        en: "Energy that exists only in the vacuum of space",
                        es: "Energía que existe solo en el vacío del espacio",
                        de: "Energie, die nur im Vakuum des Weltraums existiert",
                        nl: "Energie die alleen bestaat in het vacuüm van de ruimte"
                    },
                    {
                        en: "Matter that travels faster than light",
                        es: "Materia que viaja más rápido que la luz",
                        de: "Materie, die schneller als Licht reist",
                        nl: "Materie die sneller reist dan licht"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Dark matter is a hypothetical form of matter that makes up about 27% of the universe. It doesn't emit, absorb, or reflect electromagnetic radiation, making it invisible, but its gravitational effects are observed in galaxy rotation curves, gravitational lensing, and cosmic structure formation.",
                    es: "La materia oscura es una forma hipotética de materia que constituye aproximadamente el 27% del universo. No emite, absorbe o refleja radiación electromagnética, haciéndola invisible, pero sus efectos gravitacionales se observan en curvas de rotación galácticas, lente gravitacional y formación de estructura cósmica.",
                    de: "Dunkle Materie ist eine hypothetische Form von Materie, die etwa 27% des Universums ausmacht. Sie emittiert, absorbiert oder reflektiert keine elektromagnetische Strahlung, was sie unsichtbar macht, aber ihre Gravitationseffekte werden in Galaxienrotationskurven, Gravitationslinsen und kosmischer Strukturbildung beobachtet.",
                    nl: "Donkere materie is een hypothetische vorm van materie die ongeveer 27% van het universum uitmaakt. Het zendt geen elektromagnetische straling uit, absorbeert of reflecteert deze niet, waardoor het onzichtbaar is, maar zijn gravitationele effecten worden waargenomen in galaxy rotatie curven, gravitationele lenzen en kosmische structuurvorming."
                }
            },
            {
                question: {
                    en: "What is the Compton effect?",
                    es: "¿Qué es el efecto Compton?",
                    de: "Was ist der Compton-Effekt?",
                    nl: "Wat is het Compton effect?"
                },
                options: [
                    {
                        en: "Scattering of X-rays by electrons, demonstrating photon particle nature",
                        es: "Dispersión de rayos X por electrones, demostrando la naturaleza corpuscular del fotón",
                        de: "Streuung von Röntgenstrahlen durch Elektronen, die die Teilchennatur von Photonen zeigt",
                        nl: "Verstrooiing van röntgenstralen door elektronen, wat de deeltjesnatur van fotonen toont"
                    },
                    {
                        en: "Emission of light when atoms are heated to high temperatures",
                        es: "Emisión de luz cuando los átomos se calientan a altas temperaturas",
                        de: "Emission von Licht, wenn Atome auf hohe Temperaturen erhitzt werden",
                        nl: "Emissie van licht wanneer atomen verhit worden tot hoge temperaturen"
                    },
                    {
                        en: "Interference pattern created by electron beams",
                        es: "Patrón de interferencia creado por haces de electrones",
                        de: "Interferenzmuster, das von Elektronenstrahlen erzeugt wird",
                        nl: "Interferentiepatroon gecreëerd door elektronenbundels"
                    },
                    {
                        en: "Absorption of electromagnetic radiation by atomic nuclei",
                        es: "Absorción de radiación electromagnética por núcleos atómicos",
                        de: "Absorption elektromagnetischer Strahlung durch Atomkerne",
                        nl: "Absorptie van elektromagnetische straling door atoomkernen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Compton effect occurs when high-energy photons (X-rays) scatter off electrons, transferring energy and momentum. The scattered photons have longer wavelengths (lower energy), confirming that electromagnetic radiation behaves as particles (photons) with definite energy and momentum.",
                    es: "El efecto Compton ocurre cuando fotones de alta energía (rayos X) se dispersan en electrones, transfiriendo energía y momento. Los fotones dispersos tienen longitudes de onda más largas (menor energía), confirmando que la radiación electromagnética se comporta como partículas (fotones) con energía y momento definidos.",
                    de: "Der Compton-Effekt tritt auf, wenn hochenergetische Photonen (Röntgenstrahlen) an Elektronen gestreut werden und dabei Energie und Impuls übertragen. Die gestreuten Photonen haben längere Wellenlängen (niedrigere Energie), was bestätigt, dass elektromagnetische Strahlung sich wie Teilchen (Photonen) mit bestimmter Energie und Impuls verhält.",
                    nl: "Het Compton effect treedt op wanneer hoog-energetische fotonen (röntgenstralen) verstrooien aan elektronen, waarbij energie en momentum worden overgedragen. De verstrooide fotonen hebben langere golflengtes (lagere energie), wat bevestigt dat elektromagnetische straling zich gedraagt als deeltjes (fotonen) met bepaalde energie en momentum."
                }
            },
            {
                question: {
                    en: "What is the concept of color charge in quantum chromodynamics (QCD)?",
                    es: "¿Cuál es el concepto de carga de color en cromodinámica cuántica (QCD)?",
                    de: "Was ist das Konzept der Farbladung in der Quantenchromodynamik (QCD)?",
                    nl: "Wat is het concept van kleurlading in quantum chromodynamica (QCD)?"
                },
                options: [
                    {
                        en: "Property of quarks and gluons; comes in three types (red, green, blue)",
                        es: "Propiedad de quarks y gluones; viene en tres tipos (rojo, verde, azul)",
                        de: "Eigenschaft von Quarks und Gluonen; kommt in drei Arten vor (rot, grün, blau)",
                        nl: "Eigenschap van quarks en gluonen; komt in drie types (rood, groen, blauw)"
                    },
                    {
                        en: "The actual visible color of subatomic particles",
                        es: "El color visible real de partículas subatómicas",
                        de: "Die tatsächliche sichtbare Farbe subatomarer Teilchen",
                        nl: "De werkelijke zichtbare kleur van subatomaire deeltjes"
                    },
                    {
                        en: "Electric charge that determines electromagnetic interactions",
                        es: "Carga eléctrica que determina interacciones electromagnéticas",
                        de: "Elektrische Ladung, die elektromagnetische Wechselwirkungen bestimmt",
                        nl: "Elektrische lading die elektromagnetische interacties bepaalt"
                    },
                    {
                        en: "Temperature-dependent property of matter",
                        es: "Propiedad dependiente de temperatura de la materia",
                        de: "Temperaturabhängige Eigenschaft der Materie",
                        nl: "Temperatuurafhankelijke eigenschap van materie"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Color charge is a quantum property of quarks and gluons analogous to electric charge but for the strong force. Quarks carry one of three color charges (conventionally called red, green, blue), while gluons carry color-anticolor combinations. Hadrons must be color-neutral (colorless).",
                    es: "La carga de color es una propiedad cuántica de quarks y gluones análoga a la carga eléctrica pero para la fuerza fuerte. Los quarks llevan una de tres cargas de color (convencionalmente llamadas rojo, verde, azul), mientras los gluones llevan combinaciones color-anticolor. Los hadrones deben ser neutrales en color (incoloros).",
                    de: "Farbladung ist eine Quanteneigenschaft von Quarks und Gluonen, analog zur elektrischen Ladung, aber für die starke Kraft. Quarks tragen eine von drei Farbladungen (konventionell rot, grün, blau genannt), während Gluonen Farb-Antifarb-Kombinationen tragen. Hadronen müssen farbneutral (farblos) sein.",
                    nl: "Kleurlading is een quantumeigenschap van quarks en gluonen analoog aan elektrische lading maar voor de sterke kracht. Quarks dragen een van drie kleurladingen (conventioneel rood, groen, blauw genoemd), terwijl gluonen kleur-antikleur combinaties dragen. Hadronen moeten kleurneutraal (kleurloos) zijn."
                }
            },
            {
                question: {
                    en: "What is Hawking radiation?",
                    es: "¿Qué es la radiación de Hawking?",
                    de: "Was ist Hawking-Strahlung?",
                    nl: "Wat is Hawking straling?"
                },
                options: [
                    {
                        en: "Thermal radiation predicted to be emitted by black holes due to quantum effects",
                        es: "Radiación térmica predicha para ser emitida por agujeros negros debido a efectos cuánticos",
                        de: "Thermische Strahlung, die von Schwarzen Löchern aufgrund von Quanteneffekten emittiert werden soll",
                        nl: "Thermische straling voorspeld te worden uitgezonden door zwarte gaten door quantumeffecten"
                    },
                    {
                        en: "Radio waves emitted by rotating neutron stars",
                        es: "Ondas de radio emitidas por estrellas de neutrones rotantes",
                        de: "Radiowellen, die von rotierenden Neutronensternen emittiert werden",
                        nl: "Radiogolven uitgezonden door roterende neutronensterren"
                    },
                    {
                        en: "X-rays produced by matter falling into black holes",
                        es: "Rayos X producidos por materia cayendo en agujeros negros",
                        de: "Röntgenstrahlen, die durch in Schwarze Löcher fallende Materie erzeugt werden",
                        nl: "Röntgenstralen geproduceerd door materie die in zwarte gaten valt"
                    },
                    {
                        en: "Cosmic microwave background radiation",
                        es: "Radiación cósmica de fondo de microondas",
                        de: "Kosmische Mikrowellen-Hintergrundstrahlung",
                        nl: "Kosmische microgolf achtergrondstraling"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Hawking radiation is theoretical thermal emission from black holes arising from quantum vacuum fluctuations near the event horizon. Virtual particle pairs are created, with one particle escaping while the other falls in, causing the black hole to slowly evaporate and lose mass.",
                    es: "La radiación de Hawking es emisión térmica teórica de agujeros negros que surge de fluctuaciones cuánticas del vacío cerca del horizonte de eventos. Se crean pares de partículas virtuales, con una partícula escapando mientras la otra cae, causando que el agujero negro se evapore lentamente y pierda masa.",
                    de: "Hawking-Strahlung ist theoretische thermische Emission von Schwarzen Löchern, die aus Quantenvakuumfluktuationen in der Nähe des Ereignishorizonts entsteht. Virtuelle Teilchenpaare werden erzeugt, wobei ein Teilchen entkommt, während das andere hineinfällt, was dazu führt, dass das Schwarze Loch langsam verdampft und Masse verliert.",
                    nl: "Hawking straling is theoretische thermische emissie van zwarte gaten die ontstaat door quantum vacuümfluctuaties nabij de gebeurtenishorizon. Virtuele deeltjesparen worden gecreëerd, waarbij één deeltje ontsnapt terwijl het andere naar binnen valt, waardoor het zwarte gat langzaam verdampt en massa verliest."
                }
            },
            {
                question: {
                    en: "What is the concept of virtual particles in quantum field theory?",
                    es: "¿Cuál es el concepto de partículas virtuales en teoría cuántica de campos?",
                    de: "Was ist das Konzept virtueller Teilchen in der Quantenfeldtheorie?",
                    nl: "Wat is het concept van virtuele deeltjes in quantum veldtheorie?"
                },
                options: [
                    {
                        en: "Temporary fluctuations in quantum fields that mediate forces between particles",
                        es: "Fluctuaciones temporales en campos cuánticos que median fuerzas entre partículas",
                        de: "Vorübergehende Fluktuationen in Quantenfeldern, die Kräfte zwischen Teilchen vermitteln",
                        nl: "Tijdelijke fluctuaties in quantumvelden die krachten tussen deeltjes bemiddelen"
                    },
                    {
                        en: "Particles that exist only in computer simulations",
                        es: "Partículas que existen solo en simulaciones de computadora",
                        de: "Teilchen, die nur in Computersimulationen existieren",
                        nl: "Deeltjes die alleen bestaan in computersimulaties"
                    },
                    {
                        en: "Hypothetical particles that travel backwards in time",
                        es: "Partículas hipotéticas que viajan hacia atrás en el tiempo",
                        de: "Hypothetische Teilchen, die rückwärts in der Zeit reisen",
                        nl: "Hypothetische deeltjes die achterwaarts in tijd reizen"
                    },
                    {
                        en: "Particles that can only be observed indirectly",
                        es: "Partículas que solo pueden observarse indirectamente",
                        de: "Teilchen, die nur indirekt beobachtet werden können",
                        nl: "Deeltjes die alleen indirect kunnen worden waargenomen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Virtual particles are quantum fluctuations in fields that don't directly appear as final particles but are essential for calculating interaction processes. They represent intermediate states in Feynman diagrams and can temporarily violate energy conservation due to the uncertainty principle.",
                    es: "Las partículas virtuales son fluctuaciones cuánticas en campos que no aparecen directamente como partículas finales pero son esenciales para calcular procesos de interacción. Representan estados intermedios en diagramas de Feynman y pueden violar temporalmente la conservación de energía debido al principio de incertidumbre.",
                    de: "Virtuelle Teilchen sind Quantenfluktuationen in Feldern, die nicht direkt als finale Teilchen erscheinen, aber für die Berechnung von Wechselwirkungsprozessen wesentlich sind. Sie repräsentieren Zwischenzustände in Feynman-Diagrammen und können aufgrund des Unschärfeprinzips vorübergehend die Energieerhaltung verletzen.",
                    nl: "Virtuele deeltjes zijn quantumfluctuaties in velden die niet direct verschijnen als einddeeltjes maar essentieel zijn voor het berekenen van interactieprocessen. Ze vertegenwoordigen tussentoestanden in Feynman diagrammen en kunnen tijdelijk energiebehoud schenden door het onzekerheidsprincipe."
                }
            },
            {
                question: {
                    en: "What is the significance of the cosmic microwave background (CMB)?",
                    es: "¿Cuál es la significancia del fondo cósmico de microondas (CMB)?",
                    de: "Was ist die Bedeutung der kosmischen Mikrowellen-Hintergrundstrahlung (CMB)?",
                    nl: "Wat is de betekenis van de kosmische microgolf achtergrond (CMB)?"
                },
                options: [
                    {
                        en: "Relic radiation from the Big Bang when universe became transparent",
                        es: "Radiación reliquia del Big Bang cuando el universo se volvió transparente",
                        de: "Reliktstrahlung vom Urknall, als das Universum transparent wurde",
                        nl: "Reliek straling van de Oerknal toen het universum transparant werd"
                    },
                    {
                        en: "Radiation emitted by distant galaxies",
                        es: "Radiación emitida por galaxias distantes",
                        de: "Strahlung, die von fernen Galaxien emittiert wird",
                        nl: "Straling uitgezonden door verre sterrenstelsels"
                    },
                    {
                        en: "Heat generated by nuclear fusion in stars",
                        es: "Calor generado por fusión nuclear en estrellas",
                        de: "Wärme, die durch Kernfusion in Sternen erzeugt wird",
                        nl: "Warmte gegenereerd door kernfusie in sterren"
                    },
                    {
                        en: "Electromagnetic waves from black hole mergers",
                        es: "Ondas electromagnéticas de fusiones de agujeros negros",
                        de: "Elektromagnetische Wellen von Schwarzen Loch-Verschmelzungen",
                        nl: "Elektromagnetische golven van zwarte gat fusies"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The CMB is the afterglow of the Big Bang, discovered in 1965. It represents the moment about 380,000 years after the Big Bang when the universe cooled enough for protons and electrons to combine into hydrogen atoms, making the universe transparent to radiation. Its near-perfect blackbody spectrum and tiny fluctuations provide crucial evidence for Big Bang cosmology.",
                    es: "El CMB es el resplandor posterior del Big Bang, descubierto en 1965. Representa el momento aproximadamente 380,000 años después del Big Bang cuando el universo se enfrió lo suficiente para que protones y electrones se combinaran en átomos de hidrógeno, haciendo el universo transparente a la radiación. Su espectro de cuerpo negro casi perfecto y fluctuaciones diminutas proporcionan evidencia crucial para la cosmología del Big Bang.",
                    de: "Die CMB ist das Nachglühen des Urknalls, entdeckt 1965. Sie repräsentiert den Moment etwa 380.000 Jahre nach dem Urknall, als das Universum genug abkühlte, damit sich Protonen und Elektronen zu Wasserstoffatomen verbanden und das Universum für Strahlung transparent machten. Ihr nahezu perfektes Schwarzkörperspektrum und winzige Fluktuationen liefern entscheidende Beweise für die Urknall-Kosmologie.",
                    nl: "De CMB is de nagloeiing van de Oerknal, ontdekt in 1965. Het vertegenwoordigt het moment ongeveer 380.000 jaar na de Oerknal toen het universum genoeg afkoelde voor protonen en elektronen om te combineren tot waterstofatomen, waardoor het universum transparant werd voor straling. Het bijna perfecte zwarte lichaam spectrum en kleine fluctuaties bieden cruciaal bewijs voor Oerknal kosmologie."
                }
            },
            {
                question: {
                    en: "What is the concept of renormalization in quantum field theory?",
                    es: "¿Cuál es el concepto de renormalización en teoría cuántica de campos?",
                    de: "Was ist das Konzept der Renormierung in der Quantenfeldtheorie?",
                    nl: "Wat is het concept van renormalisatie in quantum veldtheorie?"
                },
                options: [
                    {
                        en: "Mathematical procedure to handle infinite quantities in quantum field calculations",
                        es: "Procedimiento matemático para manejar cantidades infinitas en cálculos de campos cuánticos",
                        de: "Mathematisches Verfahren zur Behandlung unendlicher Größen in Quantenfeldberechnungen",
                        nl: "Wiskundige procedure om oneindige grootheden in quantumveld berekeningen te behandelen"
                    },
                    {
                        en: "Process of normalizing wave functions in quantum mechanics",
                        es: "Proceso de normalizar funciones de onda en mecánica cuántica",
                        de: "Prozess der Normierung von Wellenfunktionen in der Quantenmechanik",
                        nl: "Proces van normaliseren van golffuncties in quantummechanica"
                    },
                    {
                        en: "Method to convert units between different measurement systems",
                        es: "Método para convertir unidades entre diferentes sistemas de medición",
                        de: "Methode zur Umrechnung von Einheiten zwischen verschiedenen Messsystemen",
                        nl: "Methode om eenheden tussen verschillende meetsystemen om te zetten"
                    },
                    {
                        en: "Technique for approximating complex integrals numerically",
                        es: "Técnica para aproximar integrales complejas numéricamente",
                        de: "Technik zur numerischen Annäherung komplexer Integrale",
                        nl: "Techniek voor numerieke benadering van complexe integralen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Renormalization is a crucial technique in quantum field theory for dealing with infinite results that appear in perturbative calculations. It involves redefining parameters (like mass and coupling constants) to absorb infinities, allowing finite, measurable predictions. This process revealed deep insights about the scale-dependence of physical laws.",
                    es: "La renormalización es una técnica crucial en teoría cuántica de campos para lidiar con resultados infinitos que aparecen en cálculos perturbativos. Involucra redefinir parámetros (como masa y constantes de acoplamiento) para absorber infinitudes, permitiendo predicciones finitas y medibles. Este proceso reveló perspectivas profundas sobre la dependencia de escala de las leyes físicas.",
                    de: "Renormierung ist eine entscheidende Technik in der Quantenfeldtheorie für den Umgang mit unendlichen Ergebnissen, die in störungstheoretischen Berechnungen auftreten. Sie beinhaltet die Neudefinition von Parametern (wie Masse und Kopplungskonstanten), um Unendlichkeiten zu absorbieren und endliche, messbare Vorhersagen zu ermöglichen. Dieser Prozess enthüllte tiefe Einsichten über die Skalenabhängigkeit physikalischer Gesetze.",
                    nl: "Renormalisatie is een cruciale techniek in quantum veldtheorie voor het omgaan met oneindige resultaten die verschijnen in verstoringsberekeningen. Het behelst het herdefiniëren van parameters (zoals massa en koppeling constanten) om oneindigheid te absorberen, wat eindige, meetbare voorspellingen mogelijk maakt. Dit proces onthulde diepe inzichten over de schaalafhankelijkheid van fysische wetten."
                }
            },
            {
                question: {
                    en: "What is the concept of gauge invariance in physics?",
                    es: "¿Cuál es el concepto de invariancia de gauge en física?",
                    de: "Was ist das Konzept der Eichinvarianz in der Physik?",
                    nl: "Wat is het concept van ijkinvariantie in de fysica?"
                },
                options: [
                    {
                        en: "Physical laws remain unchanged under certain mathematical transformations of fields",
                        es: "Las leyes físicas permanecen sin cambios bajo ciertas transformaciones matemáticas de campos",
                        de: "Physikalische Gesetze bleiben unter bestimmten mathematischen Transformationen von Feldern unverändert",
                        nl: "Fysische wetten blijven onveranderd onder bepaalde wiskundige transformaties van velden"
                    },
                    {
                        en: "All measurement instruments must be calibrated to the same standard",
                        es: "Todos los instrumentos de medición deben calibrarse al mismo estándar",
                        de: "Alle Messinstrumente müssen auf denselben Standard kalibriert werden",
                        nl: "Alle meetinstrumenten moeten gekalibreerd worden naar dezelfde standaard"
                    },
                    {
                        en: "Physical quantities have the same value in all reference frames",
                        es: "Las cantidades físicas tienen el mismo valor en todos los marcos de referencia",
                        de: "Physikalische Größen haben in allen Bezugssystemen denselben Wert",
                        nl: "Fysische grootheden hebben dezelfde waarde in alle referentiekaders"
                    },
                    {
                        en: "The speed of light is constant in all inertial frames",
                        es: "La velocidad de la luz es constante en todos los marcos inerciales",
                        de: "Die Lichtgeschwindigkeit ist in allen Trägheitssystemen konstant",
                        nl: "De lichtsnelheid is constant in alle inertiaalkaders"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Gauge invariance means that the physics described by a theory doesn't change when we make certain mathematical transformations (gauge transformations) to the fields. This principle is fundamental to our understanding of electromagnetic, weak, and strong forces, and leads to the existence of gauge bosons that mediate these interactions.",
                    es: "La invariancia de gauge significa que la física descrita por una teoría no cambia cuando hacemos ciertas transformaciones matemáticas (transformaciones de gauge) a los campos. Este principio es fundamental para nuestro entendimiento de fuerzas electromagnéticas, débiles y fuertes, y lleva a la existencia de bosones de gauge que median estas interacciones.",
                    de: "Eichinvarianz bedeutet, dass die von einer Theorie beschriebene Physik sich nicht ändert, wenn wir bestimmte mathematische Transformationen (Eichtransformationen) an den Feldern vornehmen. Dieses Prinzip ist fundamental für unser Verständnis elektromagnetischer, schwacher und starker Kräfte und führt zur Existenz von Eichbosonen, die diese Wechselwirkungen vermitteln.",
                    nl: "IJkinvariantie betekent dat de fysica beschreven door een theorie niet verandert wanneer we bepaalde wiskundige transformaties (ijktransformaties) maken op de velden. Dit principe is fundamenteel voor ons begrip van elektromagnetische, zwakke en sterke krachten, en leidt tot het bestaan van ijkbosonen die deze interacties bemiddelen."
                }
            },
            {
                question: {
                    en: "What is the Higgs mechanism?",
                    es: "¿Qué es el mecanismo de Higgs?",
                    de: "Was ist der Higgs-Mechanismus?",
                    nl: "Wat is het Higgs mechanisme?"
                },
                options: [
                    {
                        en: "Mechanism by which particles acquire mass through interaction with the Higgs field",
                        es: "Mecanismo por el cual las partículas adquieren masa a través de interacción con el campo de Higgs",
                        de: "Mechanismus, durch den Teilchen durch Wechselwirkung mit dem Higgs-Feld Masse erlangen",
                        nl: "Mechanisme waardoor deeltjes massa verkrijgen door interactie met het Higgs veld"
                    },
                    {
                        en: "Process by which black holes evaporate through radiation",
                        es: "Proceso por el cual los agujeros negros se evaporan a través de radiación",
                        de: "Prozess, durch den Schwarze Löcher durch Strahlung verdampfen",
                        nl: "Proces waarbij zwarte gaten verdampen door straling"
                    },
                    {
                        en: "Method for particles to tunnel through energy barriers",
                        es: "Método para que las partículas pasen a través de barreras energéticas por efecto túnel",
                        de: "Methode für Teilchen, durch Energiebarrieren zu tunneln",
                        nl: "Methode voor deeltjes om door energiebarrières te tunnelen"
                    },
                    {
                        en: "Way that virtual particles become real particles",
                        es: "Forma en que las partículas virtuales se convierten en partículas reales",
                        de: "Art, wie virtuelle Teilchen zu realen Teilchen werden",
                        nl: "Manier waarop virtuele deeltjes echte deeltjes worden"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Higgs mechanism explains how fundamental particles acquire mass through spontaneous symmetry breaking. The Higgs field fills all of space with a non-zero vacuum expectation value, and particles that interact with this field gain mass. The Higgs boson, discovered in 2012, is the quantum excitation of this field.",
                    es: "El mecanismo de Higgs explica cómo las partículas fundamentales adquieren masa a través de ruptura espontánea de simetría. El campo de Higgs llena todo el espacio con un valor de expectación de vacío no nulo, y las partículas que interactúan con este campo ganan masa. El bosón de Higgs, descubierto en 2012, es la excitación cuántica de este campo.",
                    de: "Der Higgs-Mechanismus erklärt, wie fundamentale Teilchen durch spontane Symmetriebrechung Masse erlangen. Das Higgs-Feld füllt den gesamten Raum mit einem von null verschiedenen Vakuumerwartungswert, und Teilchen, die mit diesem Feld wechselwirken, gewinnen Masse. Das Higgs-Boson, 2012 entdeckt, ist die Quantenanregung dieses Feldes.",
                    nl: "Het Higgs mechanisme verklaart hoe fundamentele deeltjes massa verkrijgen door spontane symmetriebreking. Het Higgs veld vult alle ruimte met een niet-nul vacuüm verwachtingswaarde, en deeltjes die interacteren met dit veld krijgen massa. Het Higgs boson, ontdekt in 2012, is de quantum excitatie van dit veld."
                }
            },
            {
                question: {
                    en: "What is the concept of supersymmetry in particle physics?",
                    es: "¿Cuál es el concepto de supersimetría en física de partículas?",
                    de: "Was ist das Konzept der Supersymmetrie in der Teilchenphysik?",
                    nl: "Wat is het concept van supersymmetrie in deeltjesfysica?"
                },
                options: [
                    {
                        en: "Proposed symmetry relating fermions and bosons, predicting superpartner particles",
                        es: "Simetría propuesta relacionando fermiones y bosones, prediciendo partículas supercompañeras",
                        de: "Vorgeschlagene Symmetrie, die Fermionen und Bosonen verknüpft und Superpartner-Teilchen vorhersagt",
                        nl: "Voorgestelde symmetrie die fermionen en bosonen relateert, superpartner deeltjes voorspellend"
                    },
                    {
                        en: "Perfect balance between matter and antimatter in the universe",
                        es: "Equilibrio perfecto entre materia y antimateria en el universo",
                        de: "Perfektes Gleichgewicht zwischen Materie und Antimaterie im Universum",
                        nl: "Perfect evenwicht tussen materie en antimaterie in het universum"
                    },
                    {
                        en: "Symmetry that explains why fundamental constants are fine-tuned",
                        es: "Simetría que explica por qué las constantes fundamentales están finamente ajustadas",
                        de: "Symmetrie, die erklärt, warum fundamentale Konstanten fein abgestimmt sind",
                        nl: "Symmetrie die verklaart waarom fundamentele constanten fijn afgestemd zijn"
                    },
                    {
                        en: "Mathematical framework for unifying all four fundamental forces",
                        es: "Marco matemático para unificar las cuatro fuerzas fundamentales",
                        de: "Mathematischer Rahmen zur Vereinigung aller vier fundamentalen Kräfte",
                        nl: "Wiskundig kader voor het verenigen van alle vier fundamentele krachten"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Supersymmetry (SUSY) is a theoretical framework proposing that every fermion has a bosonic superpartner and vice versa. This symmetry would help solve several problems in particle physics, including the hierarchy problem and provide dark matter candidates. However, no supersymmetric particles have been experimentally confirmed yet.",
                    es: "La supersimetría (SUSY) es un marco teórico que propone que cada fermión tiene un supercompañero bosónico y viceversa. Esta simetría ayudaría a resolver varios problemas en física de partículas, incluyendo el problema de jerarquía y proporcionar candidatos a materia oscura. Sin embargo, ninguna partícula supersimétrica ha sido confirmada experimentalmente aún.",
                    de: "Supersymmetrie (SUSY) ist ein theoretischer Rahmen, der vorschlägt, dass jedes Fermion einen bosonischen Superpartner hat und umgekehrt. Diese Symmetrie würde helfen, mehrere Probleme in der Teilchenphysik zu lösen, einschließlich des Hierarchieproblems, und Dunkle Materie-Kandidaten liefern. Jedoch wurden noch keine supersymmetrischen Teilchen experimentell bestätigt.",
                    nl: "Supersymmetrie (SUSY) is een theoretisch kader dat voorstelt dat elke fermion een bosonische superpartner heeft en omgekeerd. Deze symmetrie zou helpen verschillende problemen in deeltjesfysica op te lossen, inclusief het hiërarchieproblem en donkere materie kandidaten leveren. Echter, geen supersymmetrische deeltjes zijn nog experimenteel bevestigd."
                }
            },
            {
                question: {
                    en: "What is the concept of string theory?",
                    es: "¿Cuál es el concepto de la teoría de cuerdas?",
                    de: "Was ist das Konzept der Stringtheorie?",
                    nl: "Wat is het concept van snaartheorie?"
                },
                options: [
                    {
                        en: "Theory describing fundamental particles as vibrating one-dimensional strings",
                        es: "Teoría describiendo partículas fundamentales como cuerdas unidimensionales vibrantes",
                        de: "Theorie, die fundamentale Teilchen als vibrierende eindimensionale Strings beschreibt",
                        nl: "Theorie die fundamentele deeltjes beschrijft als vibrerende eendimensionale snaren"
                    },
                    {
                        en: "Mathematical description of guitar string vibrations",
                        es: "Descripción matemática de vibraciones de cuerdas de guitarra",
                        de: "Mathematische Beschreibung von Gitarrensaitenschwingungen",
                        nl: "Wiskundige beschrijving van gitaarsnaar vibraties"
                    },
                    {
                        en: "Theory explaining how cosmic strings formed after the Big Bang",
                        es: "Teoría explicando cómo se formaron las cuerdas cósmicas después del Big Bang",
                        de: "Theorie, die erklärt, wie sich kosmische Strings nach dem Urknall bildeten",
                        nl: "Theorie die verklaart hoe kosmische snaren zich vormden na de Oerknal"
                    },
                    {
                        en: "Model describing DNA as string-like molecular structures",
                        es: "Modelo describiendo ADN como estructuras moleculares tipo cuerda",
                        de: "Modell, das DNA als seilartige molekulare Strukturen beschreibt",
                        nl: "Model dat DNA beschrijft als snaarachtige moleculaire structuren"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "String theory proposes that fundamental particles are not point-like but rather tiny vibrating strings in multiple dimensions (typically 10 or 11). Different vibrational modes correspond to different particles. It attempts to unify quantum mechanics and general relativity, potentially providing a 'theory of everything,' though it remains unproven experimentally.",
                    es: "La teoría de cuerdas propone que las partículas fundamentales no son puntuales sino más bien cuerdas diminutas vibrantes en múltiples dimensiones (típicamente 10 u 11). Diferentes modos vibracionales corresponden a diferentes partículas. Intenta unificar mecánica cuántica y relatividad general, potencialmente proporcionando una 'teoría del todo', aunque permanece sin pruebas experimentales.",
                    de: "Die Stringtheorie schlägt vor, dass fundamentale Teilchen nicht punktförmig sind, sondern winzige vibrierende Strings in mehreren Dimensionen (typischerweise 10 oder 11). Verschiedene Vibrationsmodi entsprechen verschiedenen Teilchen. Sie versucht, Quantenmechanik und allgemeine Relativitätstheorie zu vereinigen und möglicherweise eine 'Theorie von allem' zu liefern, obwohl sie experimentell unbewiesen bleibt.",
                    nl: "Snaartheorie stelt voor dat fundamentele deeltjes niet puntachtig zijn maar eerder kleine vibrerende snaren in meerdere dimensies (typisch 10 of 11). Verschillende vibratiemodi komen overeen met verschillende deeltjes. Het probeert quantummechanica en algemene relativiteit te verenigen, mogelijk een 'theorie van alles' leverend, hoewel het experimenteel onbewezen blijft."
                }
            },
            {
                question: {
                    en: "What is the concept of quantum decoherence?",
                    es: "¿Cuál es el concepto de decoherencia cuántica?",
                    de: "Was ist das Konzept der Quantendekohärenz?",
                    nl: "Wat is het concept van quantum decoherentie?"
                },
                options: [
                    {
                        en: "Process by which quantum systems lose their quantum properties through environmental interaction",
                        es: "Proceso por el cual sistemas cuánticos pierden sus propiedades cuánticas a través de interacción ambiental",
                        de: "Prozess, durch den Quantensysteme ihre Quanteneigenschaften durch Umgebungswechselwirkung verlieren",
                        nl: "Proces waarbij quantumsystemen hun quantumeigenschappen verliezen door omgevingsinteractie"
                    },
                    {
                        en: "Phenomenon where quantum particles split into multiple copies",
                        es: "Fenómeno donde partículas cuánticas se dividen en múltiples copias",
                        de: "Phänomen, bei dem sich Quantenteilchen in mehrere Kopien aufteilen",
                        nl: "Fenomeen waarbij quantumdeeltjes splitsen in meerdere kopieën"
                    },
                    {
                        en: "Process of measuring quantum states without disturbing them",
                        es: "Proceso de medir estados cuánticos sin perturbarlos",
                        de: "Prozess der Messung von Quantenzuständen ohne sie zu stören",
                        nl: "Proces van meten van quantumtoestanden zonder ze te verstoren"
                    },
                    {
                        en: "Method for creating quantum entanglement between particles",
                        es: "Método para crear entrelazamiento cuántico entre partículas",
                        de: "Methode zur Erzeugung von Quantenverschränkung zwischen Teilchen",
                        nl: "Methode voor het creëren van quantumverstrengeling tussen deeltjes"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Quantum decoherence explains why quantum superposition and entanglement are not observed in macroscopic objects. When a quantum system interacts with its environment, information about the system's quantum state spreads into the environment, effectively destroying quantum coherence and making the system behave classically.",
                    es: "La decoherencia cuántica explica por qué la superposición cuántica y el entrelazamiento no se observan en objetos macroscópicos. Cuando un sistema cuántico interactúa con su ambiente, la información sobre el estado cuántico del sistema se dispersa en el ambiente, efectivamente destruyendo la coherencia cuántica y haciendo que el sistema se comporte clásicamente.",
                    de: "Quantendekohärenz erklärt, warum Quantensuperposition und Verschränkung bei makroskopischen Objekten nicht beobachtet werden. Wenn ein Quantensystem mit seiner Umgebung wechselwirkt, verbreiten sich Informationen über den Quantenzustand des Systems in die Umgebung, was die Quantenkohärenz effektiv zerstört und das System klassisch verhalten lässt.",
                    nl: "Quantum decoherentie verklaart waarom quantum superpositie en verstrengeling niet worden waargenomen in macroscopische objecten. Wanneer een quantumsysteem interacteert met zijn omgeving, verspreidt informatie over de quantumtoestand van het systeem zich in de omgeving, wat quantum coherentie effectief vernietigt en het systeem klassiek laat gedragen."
                }
            },
            {
                question: {
                    en: "What is the concept of cosmic inflation in Big Bang cosmology?",
                    es: "¿Cuál es el concepto de inflación cósmica en cosmología del Big Bang?",
                    de: "Was ist das Konzept der kosmischen Inflation in der Urknall-Kosmologie?",
                    nl: "Wat is het concept van kosmische inflatie in Oerknal kosmologie?"
                },
                options: [
                    {
                        en: "Rapid exponential expansion of spacetime in the early universe",
                        es: "Expansión exponencial rápida del espacio-tiempo en el universo temprano",
                        de: "Schnelle exponentielle Expansion der Raumzeit im frühen Universum",
                        nl: "Snelle exponentiële expansie van ruimtetijd in het vroege universum"
                    },
                    {
                        en: "Gradual cooling of the universe as it expanded",
                        es: "Enfriamiento gradual del universo mientras se expandía",
                        de: "Allmähliche Abkühlung des Universums während seiner Expansion",
                        nl: "Geleidelijke afkoeling van het universum tijdens expansie"
                    },
                    {
                        en: "Formation of the first stars and galaxies",
                        es: "Formación de las primeras estrellas y galaxias",
                        de: "Entstehung der ersten Sterne und Galaxien",
                        nl: "Vorming van de eerste sterren en sterrenstelsels"
                    },
                    {
                        en: "Process by which matter separated from antimatter",
                        es: "Proceso por el cual la materia se separó de la antimateria",
                        de: "Prozess, durch den sich Materie von Antimaterie trennte",
                        nl: "Proces waarbij materie zich scheidde van antimaterie"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Cosmic inflation proposes that the universe underwent a period of extremely rapid exponential expansion in its first fraction of a second. This theory explains the universe's large-scale homogeneity, flatness, and the absence of magnetic monopoles, while providing seeds for structure formation through quantum fluctuations.",
                    es: "La inflación cósmica propone que el universo experimentó un período de expansión exponencial extremadamente rápida en su primera fracción de segundo. Esta teoría explica la homogeneidad a gran escala del universo, su planitud y la ausencia de monopolos magnéticos, mientras proporciona semillas para formación de estructura a través de fluctuaciones cuánticas.",
                    de: "Die kosmische Inflation schlägt vor, dass das Universum in seinem ersten Sekundenbruchteil eine Phase extrem schneller exponentieller Expansion durchlief. Diese Theorie erklärt die großräumige Homogenität des Universums, seine Flachheit und das Fehlen magnetischer Monopole, während sie durch Quantenfluktuationen Keime für die Strukturbildung liefert.",
                    nl: "Kosmische inflatie stelt voor dat het universum een periode doormaakte van extreem snelle exponentiële expansie in zijn eerste fractie van een seconde. Deze theorie verklaart de grootschalige homogeniteit van het universum, vlakheid en de afwezigheid van magnetische monopolen, terwijl het zaden levert voor structuurvorming door quantumfluctuaties."
                }
            },
            {
                question: {
                    en: "What is the concept of dark energy?",
                    es: "¿Cuál es el concepto de energía oscura?",
                    de: "Was ist das Konzept der Dunklen Energie?",
                    nl: "Wat is het concept van donkere energie?"
                },
                options: [
                    {
                        en: "Mysterious energy causing the accelerating expansion of the universe",
                        es: "Energía misteriosa causando la expansión acelerada del universo",
                        de: "Mysteriöse Energie, die die beschleunigte Expansion des Universums verursacht",
                        nl: "Mysterieuze energie die de versnellende expansie van het universum veroorzaakt"
                    },
                    {
                        en: "Energy stored in the gravitational field of black holes",
                        es: "Energía almacenada en el campo gravitacional de agujeros negros",
                        de: "Energie, die im Gravitationsfeld von Schwarzen Löchern gespeichert ist",
                        nl: "Energie opgeslagen in het gravitationele veld van zwarte gaten"
                    },
                    {
                        en: "Kinetic energy of galaxies moving through space",
                        es: "Energía cinética de galaxias moviéndose por el espacio",
                        de: "Kinetische Energie von Galaxien, die sich durch den Raum bewegen",
                        nl: "Kinetische energie van sterrenstelsels die door de ruimte bewegen"
                    },
                    {
                        en: "Energy released by nuclear reactions in massive stars",
                        es: "Energía liberada por reacciones nucleares en estrellas masivas",
                        de: "Energie, die durch Kernreaktionen in massereichen Sternen freigesetzt wird",
                        nl: "Energie vrijgegeven door kernreacties in massieve sterren"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Dark energy is a hypothetical form of energy that makes up approximately 68% of the universe and is responsible for its accelerating expansion, discovered through observations of distant supernovae. Its nature remains one of the biggest mysteries in cosmology, possibly related to vacuum energy or a cosmological constant.",
                    es: "La energía oscura es una forma hipotética de energía que constituye aproximadamente el 68% del universo y es responsable de su expansión acelerada, descubierta a través de observaciones de supernovas distantes. Su naturaleza permanece como uno de los misterios más grandes en cosmología, posiblemente relacionada con energía de vacío o una constante cosmológica.",
                    de: "Dunkle Energie ist eine hypothetische Energieform, die etwa 68% des Universums ausmacht und für seine beschleunigte Expansion verantwortlich ist, entdeckt durch Beobachtungen entfernter Supernovae. Ihre Natur bleibt eines der größten Geheimnisse in der Kosmologie, möglicherweise mit Vakuumenergie oder einer kosmologischen Konstante verbunden.",
                    nl: "Donkere energie is een hypothetische energievorm die ongeveer 68% van het universum uitmaakt en verantwoordelijk is voor zijn versnellende expansie, ontdekt door waarnemingen van verre supernovae. Zijn aard blijft een van de grootste mysteries in kosmologie, mogelijk gerelateerd aan vacuümenergie of een kosmologische constante."
                }
            },
            {
                question: {
                    en: "What is the concept of quantum superposition?",
                    es: "¿Cuál es el concepto de superposición cuántica?",
                    de: "Was ist das Konzept der Quantensuperposition?",
                    nl: "Wat is het concept van quantum superpositie?"
                },
                options: [
                    {
                        en: "A quantum system exists in multiple states simultaneously until measured",
                        es: "Un sistema cuántico existe en múltiples estados simultáneamente hasta ser medido",
                        de: "Ein Quantensystem existiert gleichzeitig in mehreren Zuständen bis zur Messung",
                        nl: "Een quantumsysteem bestaat tegelijkertijd in meerdere toestanden tot het gemeten wordt"
                    },
                    {
                        en: "Particles can exist in two places at the same time",
                        es: "Las partículas pueden existir en dos lugares al mismo tiempo",
                        de: "Teilchen können gleichzeitig an zwei Orten existieren",
                        nl: "Deeltjes kunnen op twee plaatsen tegelijk bestaan"
                    },
                    {
                        en: "Energy levels in atoms overlap with each other",
                        es: "Los niveles de energía en átomos se superponen entre sí",
                        de: "Energieniveaus in Atomen überlappen sich miteinander",
                        nl: "Energieniveaus in atomen overlappen met elkaar"
                    },
                    {
                        en: "Matter can be converted directly into energy",
                        es: "La materia puede convertirse directamente en energía",
                        de: "Materie kann direkt in Energie umgewandelt werden",
                        nl: "Materie kan direct omgezet worden in energie"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Quantum superposition is a fundamental principle where quantum systems can exist in a combination of all possible states simultaneously until a measurement forces the system to 'collapse' into one specific state. This is famously illustrated by Schrödinger's cat thought experiment.",
                    es: "La superposición cuántica es un principio fundamental donde los sistemas cuánticos pueden existir en una combinación de todos los estados posibles simultáneamente hasta que una medición fuerza al sistema a 'colapsar' en un estado específico. Esto se ilustra famosamente con el experimento mental del gato de Schrödinger.",
                    de: "Quantensuperposition ist ein grundlegendes Prinzip, bei dem Quantensysteme gleichzeitig in einer Kombination aller möglichen Zustände existieren können, bis eine Messung das System dazu zwingt, in einen spezifischen Zustand zu 'kollabieren'. Dies wird berühmt durch Schrödingers Katze-Gedankenexperiment veranschaulicht.",
                    nl: "Quantum superpositie is een fundamenteel principe waarbij quantumsystemen kunnen bestaan in een combinatie van alle mogelijke toestanden tegelijkertijd totdat een meting het systeem dwingt om te 'instorten' in één specifieke toestand. Dit wordt beroemd geïllustreerd door Schrödinger's kat gedachte-experiment."
                }
            },
            {
                question: {
                    en: "What is quantum decoherence?",
                    es: "¿Qué es la decoherencia cuántica?",
                    de: "Was ist Quantendecoherenz?",
                    nl: "Wat is quantum decoherentie?"
                },
                options: [
                    {
                        en: "Loss of quantum coherence through interaction with environment",
                        es: "Pérdida de coherencia cuántica a través de interacción con el entorno",
                        de: "Verlust der Quantenkohärenz durch Wechselwirkung mit der Umgebung",
                        nl: "Verlies van quantum coherentie door interactie met de omgeving"
                    },
                    {
                        en: "Process by which particles split into smaller components",
                        es: "Proceso por el cual las partículas se dividen en componentes más pequeños",
                        de: "Prozess, bei dem sich Teilchen in kleinere Komponenten aufteilen",
                        nl: "Proces waarbij deeltjes splitsen in kleinere componenten"
                    },
                    {
                        en: "Alignment of particle spins in magnetic fields",
                        es: "Alineación de espines de partículas en campos magnéticos",
                        de: "Ausrichtung von Teilchenspins in Magnetfeldern",
                        nl: "Uitlijning van deeltjesspins in magnetische velden"
                    },
                    {
                        en: "Formation of matter-antimatter pairs from vacuum",
                        es: "Formación de pares materia-antimateria del vacío",
                        de: "Bildung von Materie-Antimaterie-Paaren aus dem Vakuum",
                        nl: "Vorming van materie-antimaterie paren uit vacuüm"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Quantum decoherence occurs when a quantum system loses its coherence through interaction with its environment, causing the quantum superposition to effectively collapse into classical behavior. This process explains why quantum effects are not observed in macroscopic objects.",
                    es: "La decoherencia cuántica ocurre cuando un sistema cuántico pierde su coherencia a través de interacción con su entorno, causando que la superposición cuántica efectivamente colapse en comportamiento clásico. Este proceso explica por qué los efectos cuánticos no se observan en objetos macroscópicos.",
                    de: "Quantendecoherenz tritt auf, wenn ein Quantensystem seine Kohärenz durch Wechselwirkung mit seiner Umgebung verliert, wodurch die Quantensuperposition effektiv in klassisches Verhalten kollabiert. Dieser Prozess erklärt, warum Quanteneffekte bei makroskopischen Objekten nicht beobachtet werden.",
                    nl: "Quantum decoherentie treedt op wanneer een quantumsysteem zijn coherentie verliest door interactie met zijn omgeving, waardoor de quantum superpositie effectief instort tot klassiek gedrag. Dit proces verklaart waarom quantum effecten niet worden waargenomen in macroscopische objecten."
                }
            },
            {
                question: {
                    en: "What is the concept of virtual particles in quantum field theory?",
                    es: "¿Cuál es el concepto de partículas virtuales en teoría cuántica de campos?",
                    de: "Was ist das Konzept virtueller Teilchen in der Quantenfeldtheorie?",
                    nl: "Wat is het concept van virtuele deeltjes in quantum veldtheorie?"
                },
                options: [
                    {
                        en: "Temporary quantum fluctuations that mediate fundamental forces",
                        es: "Fluctuaciones cuánticas temporales que median fuerzas fundamentales",
                        de: "Temporäre Quantenfluktuationen, die fundamentale Kräfte vermitteln",
                        nl: "Tijdelijke quantum fluctuaties die fundamentele krachten overbrengen"
                    },
                    {
                        en: "Particles that exist only in computer simulations",
                        es: "Partículas que existen solo en simulaciones computacionales",
                        de: "Teilchen, die nur in Computersimulationen existieren",
                        nl: "Deeltjes die alleen bestaan in computersimulaties"
                    },
                    {
                        en: "Hypothetical particles predicted but never observed",
                        es: "Partículas hipotéticas predichas pero nunca observadas",
                        de: "Hypothetische Teilchen, die vorhergesagt, aber nie beobachtet wurden",
                        nl: "Hypothetische deeltjes voorspeld maar nooit waargenomen"
                    },
                    {
                        en: "Particles moving faster than the speed of light",
                        es: "Partículas que se mueven más rápido que la velocidad de la luz",
                        de: "Teilchen, die sich schneller als Lichtgeschwindigkeit bewegen",
                        nl: "Deeltjes die sneller bewegen dan de lichtsnelheid"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Virtual particles are quantum fluctuations that arise from the uncertainty principle, appearing and disappearing in extremely short times. They mediate fundamental forces (photons for electromagnetic, gluons for strong force, etc.) and contribute to observable effects like the Casimir effect and Hawking radiation.",
                    es: "Las partículas virtuales son fluctuaciones cuánticas que surgen del principio de incertidumbre, apareciendo y desapareciendo en tiempos extremadamente cortos. Median fuerzas fundamentales (fotones para electromagnética, gluones para fuerza fuerte, etc.) y contribuyen a efectos observables como el efecto Casimir y radiación de Hawking.",
                    de: "Virtuelle Teilchen sind Quantenfluktuationen, die aus der Unschärferelation entstehen und in extrem kurzen Zeiten erscheinen und verschwinden. Sie vermitteln fundamentale Kräfte (Photonen für elektromagnetische, Gluonen für starke Kraft, etc.) und tragen zu beobachtbaren Effekten wie dem Casimir-Effekt und Hawking-Strahlung bei.",
                    nl: "Virtuele deeltjes zijn quantum fluctuaties die voortkomen uit het onzekerheidsbeginsel, verschijnend en verdwijnend in extreem korte tijden. Ze brengen fundamentele krachten over (fotonen voor elektromagnetische, gluonen voor sterke kracht, etc.) en dragen bij aan waarneembare effecten zoals het Casimir effect en Hawking straling."
                }
            },
            {
                question: {
                    en: "What is the photoelectric effect and its significance?",
                    es: "¿Qué es el efecto fotoeléctrico y su significado?",
                    de: "Was ist der photoelektrische Effekt und seine Bedeutung?",
                    nl: "Wat is het foto-elektrisch effect en zijn betekenis?"
                },
                options: [
                    {
                        en: "Emission of electrons when light hits a metal surface, proving photon nature",
                        es: "Emisión de electrones cuando la luz golpea una superficie metálica, probando naturaleza fotónica",
                        de: "Emission von Elektronen wenn Licht auf eine Metalloberfläche trifft, beweist Photonennatur",
                        nl: "Emissie van elektronen wanneer licht een metaaloppervlak raakt, bewijst fotonnnatuur"
                    },
                    {
                        en: "Change in electrical resistance when exposed to light",
                        es: "Cambio en resistencia eléctrica cuando se expone a la luz",
                        de: "Änderung des elektrischen Widerstands bei Lichteinfall",
                        nl: "Verandering in elektrische weerstand bij blootstelling aan licht"
                    },
                    {
                        en: "Generation of magnetic fields by moving electric charges",
                        es: "Generación de campos magnéticos por cargas eléctricas en movimiento",
                        de: "Erzeugung magnetischer Felder durch bewegte elektrische Ladungen",
                        nl: "Generatie van magnetische velden door bewegende elektrische ladingen"
                    },
                    {
                        en: "Conversion of electrical energy into visible light",
                        es: "Conversión de energía eléctrica en luz visible",
                        de: "Umwandlung elektrischer Energie in sichtbares Licht",
                        nl: "Omzetting van elektrische energie in zichtbaar licht"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The photoelectric effect, explained by Einstein in 1905, occurs when photons with sufficient energy strike electrons in a material, ejecting them. This phenomenon provided crucial evidence for the particle nature of light and earned Einstein the Nobel Prize, contributing to the development of quantum mechanics.",
                    es: "El efecto fotoeléctrico, explicado por Einstein en 1905, ocurre cuando fotones con energía suficiente golpean electrones en un material, expulsándolos. Este fenómeno proporcionó evidencia crucial para la naturaleza corpuscular de la luz y le valió a Einstein el Premio Nobel, contribuyendo al desarrollo de la mecánica cuántica.",
                    de: "Der photoelektrische Effekt, 1905 von Einstein erklärt, tritt auf, wenn Photonen mit ausreichender Energie auf Elektronen in einem Material treffen und diese ausstoßen. Dieses Phänomen lieferte entscheidende Beweise für die Teilchennatur des Lichts und brachte Einstein den Nobelpreis ein, was zur Entwicklung der Quantenmechanik beitrug.",
                    nl: "Het foto-elektrisch effect, uitgelegd door Einstein in 1905, treedt op wanneer fotonen met voldoende energie elektronen in een materiaal raken en ze uitschieten. Dit fenomeen leverde cruciaal bewijs voor de deeltjesnatur van licht en leverde Einstein de Nobelprijs op, bijdragend aan de ontwikkeling van quantummechanica."
                }
            },
            {
                question: {
                    en: "What is Hawking radiation and its implications?",
                    es: "¿Qué es la radiación de Hawking y sus implicaciones?",
                    de: "Was ist Hawking-Strahlung und ihre Auswirkungen?",
                    nl: "Wat is Hawking straling en zijn implicaties?"
                },
                options: [
                    {
                        en: "Thermal radiation emitted by black holes due to quantum effects near event horizon",
                        es: "Radiación térmica emitida por agujeros negros debido a efectos cuánticos cerca del horizonte de eventos",
                        de: "Thermische Strahlung, die von schwarzen Löchern aufgrund von Quanteneffekten nahe dem Ereignishorizont emittiert wird",
                        nl: "Thermische straling uitgezonden door zwarte gaten door quantum effecten nabij de waarnemingshorizon"
                    },
                    {
                        en: "Radio waves detected from distant galaxies",
                        es: "Ondas de radio detectadas desde galaxias distantes",
                        de: "Radiowellen, die von entfernten Galaxien entdeckt wurden",
                        nl: "Radiogolven gedetecteerd van verre sterrenstelsels"
                    },
                    {
                        en: "X-rays produced during nuclear fusion in stars",
                        es: "Rayos X producidos durante fusión nuclear en estrellas",
                        de: "Röntgenstrahlen, die während der Kernfusion in Sternen produziert werden",
                        nl: "Röntgenstralen geproduceerd tijdens kernfusie in sterren"
                    },
                    {
                        en: "Cosmic background radiation from the Big Bang",
                        es: "Radiación cósmica de fondo del Big Bang",
                        de: "Kosmische Hintergrundstrahlung vom Urknall",
                        nl: "Kosmische achtergrondstraling van de Oerknal"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Hawking radiation is theoretical thermal radiation predicted by Stephen Hawking to be emitted by black holes due to quantum effects near the event horizon. Virtual particle pairs near the horizon can result in one particle escaping while the other falls in, causing the black hole to slowly evaporate over time.",
                    es: "La radiación de Hawking es radiación térmica teórica predicha por Stephen Hawking para ser emitida por agujeros negros debido a efectos cuánticos cerca del horizonte de eventos. Pares de partículas virtuales cerca del horizonte pueden resultar en una partícula escapando mientras la otra cae, causando que el agujero negro se evapore lentamente con el tiempo.",
                    de: "Hawking-Strahlung ist theoretische thermische Strahlung, die Stephen Hawking vorhergesagt hat, von schwarzen Löchern aufgrund von Quanteneffekten nahe dem Ereignishorizont emittiert zu werden. Virtuelle Teilchenpaare nahe dem Horizont können dazu führen, dass ein Teilchen entkommt, während das andere hineinfällt, wodurch das schwarze Loch langsam über die Zeit verdampft.",
                    nl: "Hawking straling is theoretische thermische straling voorspeld door Stephen Hawking om uitgezonden te worden door zwarte gaten door quantum effecten nabij de waarnemingshorizon. Virtuele deeltjesparen nabij de horizon kunnen resulteren in één deeltje dat ontsnapt terwijl het andere valt, waardoor het zwarte gat langzaam verdampt over tijd."
                }
            },
            {
                question: {
                    en: "What is the concept of spacetime curvature in general relativity?",
                    es: "¿Cuál es el concepto de curvatura del espacio-tiempo en relatividad general?",
                    de: "Was ist das Konzept der Raumzeit-Krümmung in der allgemeinen Relativitätstheorie?",
                    nl: "Wat is het concept van ruimtetijd kromming in algemene relativiteit?"
                },
                options: [
                    {
                        en: "Mass and energy warp the geometry of spacetime, creating gravitational effects",
                        es: "Masa y energía deforman la geometría del espacio-tiempo, creando efectos gravitacionales",
                        de: "Masse und Energie verzerren die Geometrie der Raumzeit und erzeugen Gravitationseffekte",
                        nl: "Massa en energie vervormen de geometrie van ruimtetijd, creërend gravitationele effecten"
                    },
                    {
                        en: "Space contracts and time dilates at high velocities",
                        es: "El espacio se contrae y el tiempo se dilata a altas velocidades",
                        de: "Raum kontrahiert und Zeit dilatiert bei hohen Geschwindigkeiten",
                        nl: "Ruimte contraheert en tijd dilateert bij hoge snelheden"
                    },
                    {
                        en: "Matter and antimatter repel each other gravitationally",
                        es: "Materia y antimateria se repelen gravitacionalmente",
                        de: "Materie und Antimaterie stoßen sich gravitativ ab",
                        nl: "Materie en antimaterie stoten elkaar gravitationeel af"
                    },
                    {
                        en: "Electromagnetic fields bend light rays in vacuum",
                        es: "Campos electromagnéticos doblan rayos de luz en vacío",
                        de: "Elektromagnetische Felder beugen Lichtstrahlen im Vakuum",
                        nl: "Elektromagnetische velden buigen lichtstralen in vacuüm"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "In Einstein's general relativity, gravity is not a force but a curvature of spacetime caused by mass and energy. Objects follow the shortest paths (geodesics) through this curved spacetime, which we perceive as gravitational attraction. This explains phenomena like gravitational lensing and time dilation near massive objects.",
                    es: "En la relatividad general de Einstein, la gravedad no es una fuerza sino una curvatura del espacio-tiempo causada por masa y energía. Los objetos siguen los caminos más cortos (geodésicas) a través de este espacio-tiempo curvado, lo que percibimos como atracción gravitacional. Esto explica fenómenos como lente gravitacional y dilatación temporal cerca de objetos masivos.",
                    de: "In Einsteins allgemeiner Relativitätstheorie ist Gravitation keine Kraft, sondern eine Krümmung der Raumzeit, die durch Masse und Energie verursacht wird. Objekte folgen den kürzesten Wegen (Geodäten) durch diese gekrümmte Raumzeit, die wir als Gravitationsanziehung wahrnehmen. Dies erklärt Phänomene wie Gravitationslinsen und Zeitdilatation in der Nähe massereicher Objekte.",
                    nl: "In Einstein's algemene relativiteit is zwaartekracht geen kracht maar een kromming van ruimtetijd veroorzaakt door massa en energie. Objecten volgen de kortste paden (geodeten) door deze gekromde ruimtetijd, wat we waarnemen als gravitationele aantrekking. Dit verklaart fenomenen zoals gravitationele lenzen en tijdvertraging nabij massieve objecten."
                }
            },
            {
                question: {
                    en: "What is quantum tunneling and its applications?",
                    es: "¿Qué es el túnel cuántico y sus aplicaciones?",
                    de: "Was ist Quantentunneling und seine Anwendungen?",
                    nl: "Wat is quantum tunneling en zijn toepassingen?"
                },
                options: [
                    {
                        en: "Particles passing through energy barriers they classically shouldn't penetrate",
                        es: "Partículas atravesando barreras de energía que clásicamente no deberían penetrar",
                        de: "Teilchen, die Energiebarrieren durchdringen, die sie klassisch nicht durchdringen sollten",
                        nl: "Deeltjes die door energiebarrières gaan die ze klassiek niet zouden kunnen penetreren"
                    },
                    {
                        en: "Movement of particles through underground tunnels",
                        es: "Movimiento de partículas a través de túneles subterráneos",
                        de: "Bewegung von Teilchen durch unterirdische Tunnel",
                        nl: "Beweging van deeltjes door ondergrondse tunnels"
                    },
                    {
                        en: "Creation of wormholes connecting distant regions of space",
                        es: "Creación de agujeros de gusano conectando regiones distantes del espacio",
                        de: "Erschaffung von Wurmlöchern, die entfernte Raumregionen verbinden",
                        nl: "Creatie van wormgaten die verre ruimtegebieden verbinden"
                    },
                    {
                        en: "Acceleration of particles to near light speed",
                        es: "Aceleración de partículas a velocidades cercanas a la luz",
                        de: "Beschleunigung von Teilchen auf nahezu Lichtgeschwindigkeit",
                        nl: "Versnelling van deeltjes tot nabij lichtsnelheid"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Quantum tunneling allows particles to pass through potential energy barriers that would be insurmountable according to classical physics. This quantum effect is essential for nuclear fusion in stars, radioactive decay, and modern technologies like tunnel diodes, scanning tunneling microscopes, and flash memory devices.",
                    es: "El túnel cuántico permite a las partículas atravesar barreras de energía potencial que serían insuperables según la física clásica. Este efecto cuántico es esencial para fusión nuclear en estrellas, decaimiento radiactivo y tecnologías modernas como diodos túnel, microscopios de efecto túnel y dispositivos de memoria flash.",
                    de: "Quantentunneling ermöglicht es Teilchen, potentielle Energiebarrieren zu durchdringen, die nach klassischer Physik unüberwindbar wären. Dieser Quanteneffekt ist essentiell für Kernfusion in Sternen, radioaktiven Zerfall und moderne Technologien wie Tunneldioden, Rastertunnelmikroskope und Flash-Speichergeräte.",
                    nl: "Quantum tunneling stelt deeltjes in staat om door potentiële energiebarrières te gaan die onoverkomelijk zouden zijn volgens klassieke fysica. Dit quantum effect is essentieel voor kernfusie in sterren, radioactief verval en moderne technologieën zoals tunneldiodes, scanning tunneling microscopen en flash geheugenapparaten."
                }
            },
            {
                question: {
                    en: "What is the concept of antimatter and matter-antimatter annihilation?",
                    es: "¿Cuál es el concepto de antimateria y aniquilación materia-antimateria?",
                    de: "Was ist das Konzept von Antimaterie und Materie-Antimaterie-Vernichtung?",
                    nl: "Wat is het concept van antimaterie en materie-antimaterie vernietiging?"
                },
                options: [
                    {
                        en: "Particles with opposite charge that annihilate with matter, releasing pure energy",
                        es: "Partículas con carga opuesta que se aniquilan con materia, liberando energía pura",
                        de: "Teilchen mit entgegengesetzter Ladung, die sich mit Materie vernichten und reine Energie freisetzen",
                        nl: "Deeltjes met tegengestelde lading die vernietigen met materie, pure energie vrijsettend"
                    },
                    {
                        en: "Negative mass particles that repel regular matter",
                        es: "Partículas de masa negativa que repelen materia regular",
                        de: "Teilchen mit negativer Masse, die gewöhnliche Materie abstoßen",
                        nl: "Negatieve massa deeltjes die gewone materie afstoten"
                    },
                    {
                        en: "Particles that exist only in parallel universes",
                        es: "Partículas que existen solo en universos paralelos",
                        de: "Teilchen, die nur in Paralleluniversen existieren",
                        nl: "Deeltjes die alleen bestaan in parallelle universums"
                    },
                    {
                        en: "Matter that has been converted to electromagnetic radiation",
                        es: "Materia que ha sido convertida a radiación electromagnética",
                        de: "Materie, die in elektromagnetische Strahlung umgewandelt wurde",
                        nl: "Materie die is omgezet naar elektromagnetische straling"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Antimatter consists of particles with properties opposite to normal matter (positrons vs electrons, antiprotons vs protons). When matter and antimatter meet, they annihilate completely, converting their mass to energy according to E=mc². This process releases tremendous amounts of energy and is used in PET scans and theoretical propulsion systems.",
                    es: "La antimateria consiste en partículas con propiedades opuestas a la materia normal (positrones vs electrones, antiprotones vs protones). Cuando materia y antimateria se encuentran, se aniquilan completamente, convirtiendo su masa en energía según E=mc². Este proceso libera tremendas cantidades de energía y se usa en escaneos PET y sistemas de propulsión teóricos.",
                    de: "Antimaterie besteht aus Teilchen mit entgegengesetzten Eigenschaften zur normalen Materie (Positronen vs. Elektronen, Antiprotonen vs. Protonen). Wenn Materie und Antimaterie aufeinandertreffen, vernichten sie sich vollständig und wandeln ihre Masse gemäß E=mc² in Energie um. Dieser Prozess setzt gewaltige Energiemengen frei und wird in PET-Scans und theoretischen Antriebssystemen verwendet.",
                    nl: "Antimaterie bestaat uit deeltjes met eigenschappen tegengesteld aan normale materie (positronen vs elektronen, antiprotonen vs protonen). Wanneer materie en antimaterie elkaar ontmoeten, vernietigen ze volledig, hun massa converterend naar energie volgens E=mc². Dit proces geeft enorme hoeveelheden energie vrij en wordt gebruikt in PET-scans en theoretische voortstuwingssystemen."
                }
            },
            {
                question: {
                    en: "What is the Standard Model of particle physics?",
                    es: "¿Qué es el Modelo Estándar de física de partículas?",
                    de: "Was ist das Standardmodell der Teilchenphysik?",
                    nl: "Wat is het Standaardmodel van deeltjesfysica?"
                },
                options: [
                    {
                        en: "Theory describing fundamental particles and three of the four forces",
                        es: "Teoría que describe partículas fundamentales y tres de las cuatro fuerzas",
                        de: "Theorie, die fundamentale Teilchen und drei der vier Kräfte beschreibt",
                        nl: "Theorie die fundamentele deeltjes en drie van de vier krachten beschrijft"
                    },
                    {
                        en: "Mathematical model for predicting atomic behavior",
                        es: "Modelo matemático para predecir comportamiento atómico",
                        de: "Mathematisches Modell zur Vorhersage atomaren Verhaltens",
                        nl: "Wiskundig model voor het voorspellen van atomair gedrag"
                    },
                    {
                        en: "Framework for understanding stellar evolution",
                        es: "Marco para entender evolución estelar",
                        de: "Rahmen zum Verständnis der Sternentwicklung",
                        nl: "Raamwerk voor het begrijpen van stellaire evolutie"
                    },
                    {
                        en: "Theory explaining the structure of molecules",
                        es: "Teoría explicando la estructura de moléculas",
                        de: "Theorie, die die Struktur von Molekülen erklärt",
                        nl: "Theorie die de structuur van moleculen verklaart"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Standard Model is our most successful theory of fundamental particles and forces, describing 17 particles including quarks, leptons, gauge bosons, and the Higgs boson. It explains electromagnetic, weak nuclear, and strong nuclear forces, but notably excludes gravity and doesn't account for dark matter or dark energy.",
                    es: "El Modelo Estándar es nuestra teoría más exitosa de partículas y fuerzas fundamentales, describiendo 17 partículas incluyendo quarks, leptones, bosones de gauge y el bosón de Higgs. Explica fuerzas electromagnéticas, nuclear débil y nuclear fuerte, pero notablemente excluye gravedad y no cuenta para materia oscura o energía oscura.",
                    de: "Das Standardmodell ist unsere erfolgreichste Theorie fundamentaler Teilchen und Kräfte, die 17 Teilchen beschreibt, einschließlich Quarks, Leptonen, Eichbosonen und dem Higgs-Boson. Es erklärt elektromagnetische, schwache Kernkraft und starke Kernkraft, schließt aber bemerkenswerterweise die Gravitation aus und erklärt nicht dunkle Materie oder dunkle Energie.",
                    nl: "Het Standaardmodel is onze meest succesvolle theorie van fundamentele deeltjes en krachten, die 17 deeltjes beschrijft inclusief quarks, leptonen, ijkbosonen en het Higgs boson. Het verklaart elektromagnetische, zwakke kern- en sterke kernkrachten, maar sluit merkwaardigerwijs zwaartekracht uit en verklaart geen donkere materie of donkere energie."
                }
            },
            {
                question: {
                    en: "What is quantum field theory and its significance?",
                    es: "¿Qué es la teoría cuántica de campos y su significado?",
                    de: "Was ist Quantenfeldtheorie und ihre Bedeutung?",
                    nl: "Wat is quantum veldtheorie en zijn betekenis?"
                },
                options: [
                    {
                        en: "Framework combining quantum mechanics with special relativity for particle interactions",
                        es: "Marco que combina mecánica cuántica con relatividad especial para interacciones de partículas",
                        de: "Rahmen, der Quantenmechanik mit spezieller Relativität für Teilchenwechselwirkungen kombiniert",
                        nl: "Raamwerk dat quantummechanica combineert met speciale relativiteit voor deeltjesinteracties"
                    },
                    {
                        en: "Study of gravitational fields in curved spacetime",
                        es: "Estudio de campos gravitacionales en espacio-tiempo curvado",
                        de: "Studie gravitativer Felder in gekrümmter Raumzeit",
                        nl: "Studie van gravitationele velden in gekromde ruimtetijd"
                    },
                    {
                        en: "Theory describing electromagnetic wave propagation",
                        es: "Teoría describiendo propagación de ondas electromagnéticas",
                        de: "Theorie, die elektromagnetische Wellenausbreitung beschreibt",
                        nl: "Theorie die elektromagnetische golfvoortplanting beschrijft"
                    },
                    {
                        en: "Mathematical approach to solving atomic structure problems",
                        es: "Enfoque matemático para resolver problemas de estructura atómica",
                        de: "Mathematischer Ansatz zur Lösung von Atomstrukturproblemen",
                        nl: "Wiskundige benadering voor het oplossen van atomaire structuurproblemen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Quantum field theory (QFT) is the theoretical framework that combines quantum mechanics with special relativity to describe the quantum physics of fields and their interactions. It treats particles as excitations of underlying quantum fields and forms the foundation of the Standard Model, enabling precise calculations of particle interactions and predictions of new phenomena.",
                    es: "La teoría cuántica de campos (QFT) es el marco teórico que combina mecánica cuántica con relatividad especial para describir la física cuántica de campos y sus interacciones. Trata partículas como excitaciones de campos cuánticos subyacentes y forma la base del Modelo Estándar, permitiendo cálculos precisos de interacciones de partículas y predicciones de nuevos fenómenos.",
                    de: "Quantenfeldtheorie (QFT) ist der theoretische Rahmen, der Quantenmechanik mit spezieller Relativität kombiniert, um die Quantenphysik von Feldern und ihren Wechselwirkungen zu beschreiben. Sie behandelt Teilchen als Anregungen zugrundeliegender Quantenfelder und bildet die Grundlage des Standardmodells, ermöglicht präzise Berechnungen von Teilchenwechselwirkungen und Vorhersagen neuer Phänomene.",
                    nl: "Quantum veldtheorie (QFT) is het theoretische raamwerk dat quantummechanica combineert met speciale relativiteit om de quantumfysica van velden en hun interacties te beschrijven. Het behandelt deeltjes als opwekkingen van onderliggende quantumvelden en vormt de basis van het Standaardmodel, waardoor precieze berekeningen van deeltjesinteracties en voorspellingen van nieuwe fenomenen mogelijk zijn."
                }
            },
            {
                question: {
                    en: "What are gravitational waves and their detection?",
                    es: "¿Qué son las ondas gravitacionales y su detección?",
                    de: "Was sind Gravitationswellen und ihre Entdeckung?",
                    nl: "Wat zijn gravitatiegolven en hun detectie?"
                },
                options: [
                    {
                        en: "Ripples in spacetime fabric caused by accelerating massive objects",
                        es: "Ondulaciones en el tejido del espacio-tiempo causadas por objetos masivos acelerados",
                        de: "Wellen im Gewebe der Raumzeit, verursacht durch beschleunigende massive Objekte",
                        nl: "Rimpelingen in de ruimtetijd weefsel veroorzaakt door versnellende massieve objecten"
                    },
                    {
                        en: "Electromagnetic radiation from collapsing stars",
                        es: "Radiación electromagnética de estrellas colapsantes",
                        de: "Elektromagnetische Strahlung von kollabierenden Sternen",
                        nl: "Elektromagnetische straling van ineenstortende sterren"
                    },
                    {
                        en: "Sound waves propagating through cosmic dust",
                        es: "Ondas sonoras propagándose a través del polvo cósmico",
                        de: "Schallwellen, die sich durch kosmischen Staub ausbreiten",
                        nl: "Geluidsgolven die zich voortplanten door kosmisch stof"
                    },
                    {
                        en: "Magnetic field oscillations in galaxy centers",
                        es: "Oscilaciones del campo magnético en centros galácticos",
                        de: "Magnetfeldoszillationen in Galaxienzentren",
                        nl: "Magnetische veld oscillaties in galaxy centra"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Gravitational waves are ripples in the curvature of spacetime that propagate at the speed of light, predicted by Einstein's general relativity and first directly detected by LIGO in 2015. They're produced by some of the most violent events in the universe, such as merging black holes or neutron stars, opening a new window for observing cosmic phenomena.",
                    es: "Las ondas gravitacionales son ondulaciones en la curvatura del espacio-tiempo que se propagan a la velocidad de la luz, predichas por la relatividad general de Einstein y detectadas directamente por primera vez por LIGO en 2015. Son producidas por algunos de los eventos más violentos del universo, como fusión de agujeros negros o estrellas de neutrones, abriendo una nueva ventana para observar fenómenos cósmicos.",
                    de: "Gravitationswellen sind Wellen in der Krümmung der Raumzeit, die sich mit Lichtgeschwindigkeit ausbreiten, von Einsteins allgemeiner Relativität vorhergesagt und 2015 erstmals direkt von LIGO entdeckt. Sie werden von einigen der gewalttätigsten Ereignisse im Universum erzeugt, wie verschmelzenden schwarzen Löchern oder Neutronensternen, und öffnen ein neues Fenster zur Beobachtung kosmischer Phänomene.",
                    nl: "Gravitatiegolven zijn rimpelingen in de kromming van ruimtetijd die zich voortplanten met de lichtsnelheid, voorspeld door Einstein's algemene relativiteit en voor het eerst direct gedetecteerd door LIGO in 2015. Ze worden geproduceerd door enkele van de gewelddadigste gebeurtenissen in het universum, zoals samenvoegende zwarte gaten of neutronensterren, waardoor een nieuw venster opent voor het observeren van kosmische fenomenen."
                }
            },
            {
                question: {
                    en: "What is the concept of nuclear binding energy?",
                    es: "¿Cuál es el concepto de energía de enlace nuclear?",
                    de: "Was ist das Konzept der Kernbindungsenergie?",
                    nl: "Wat is het concept van nucleaire bindingsenergie?"
                },
                options: [
                    {
                        en: "Energy required to separate a nucleus into individual nucleons",
                        es: "Energía requerida para separar un núcleo en nucleones individuales",
                        de: "Energie, die erforderlich ist, um einen Kern in einzelne Nukleonen zu trennen",
                        nl: "Energie vereist om een kern te scheiden in individuele nucleonen"
                    },
                    {
                        en: "Energy stored in chemical bonds between atoms",
                        es: "Energía almacenada en enlaces químicos entre átomos",
                        de: "Energie, die in chemischen Bindungen zwischen Atomen gespeichert ist",
                        nl: "Energie opgeslagen in chemische bindingen tussen atomen"
                    },
                    {
                        en: "Kinetic energy of electrons orbiting the nucleus",
                        es: "Energía cinética de electrones orbitando el núcleo",
                        de: "Kinetische Energie von Elektronen, die den Kern umkreisen",
                        nl: "Kinetische energie van elektronen die rond de kern draaien"
                    },
                    {
                        en: "Potential energy between nucleus and electrons",
                        es: "Energía potencial entre núcleo y electrones",
                        de: "Potentielle Energie zwischen Kern und Elektronen",
                        nl: "Potentiële energie tussen kern en elektronen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Nuclear binding energy is the energy required to disassemble a nucleus into its constituent protons and neutrons. It represents the mass defect converted to energy according to E=mc². Elements near iron-56 have the highest binding energy per nucleon, which is why both fusion (for light elements) and fission (for heavy elements) can release energy.",
                    es: "La energía de enlace nuclear es la energía requerida para desarmar un núcleo en sus protones y neutrones constituyentes. Representa el defecto de masa convertido en energía según E=mc². Elementos cerca del hierro-56 tienen la energía de enlace más alta por nucleón, por lo que tanto fusión (para elementos ligeros) como fisión (para elementos pesados) pueden liberar energía.",
                    de: "Kernbindungsenergie ist die Energie, die erforderlich ist, um einen Kern in seine konstituierenden Protonen und Neutronen zu zerlegen. Sie repräsentiert den Massendefekt, der gemäß E=mc² in Energie umgewandelt wird. Elemente in der Nähe von Eisen-56 haben die höchste Bindungsenergie pro Nukleon, weshalb sowohl Fusion (für leichte Elemente) als auch Spaltung (für schwere Elemente) Energie freisetzen können.",
                    nl: "Nucleaire bindingsenergie is de energie vereist om een kern te ontmantelen in zijn samenstellende protonen en neutronen. Het vertegenwoordigt het massadefect omgezet naar energie volgens E=mc². Elementen nabij ijzer-56 hebben de hoogste bindingsenergie per nucleon, daarom kunnen zowel fusie (voor lichte elementen) als splijting (voor zware elementen) energie vrijgeven."
                }
            },
            {
                question: {
                    en: "What is the uncertainty principle and its fundamental implications?",
                    es: "¿Qué es el principio de incertidumbre y sus implicaciones fundamentales?",
                    de: "Was ist die Unschärferelation und ihre fundamentalen Auswirkungen?",
                    nl: "Wat is het onzekerheidsbeginsel en zijn fundamentele implicaties?"
                },
                options: [
                    {
                        en: "Fundamental limit on simultaneously knowing position and momentum precisely",
                        es: "Límite fundamental en conocer simultáneamente posición y momento con precisión",
                        de: "Fundamentale Grenze für das gleichzeitige präzise Bestimmen von Position und Impuls",
                        nl: "Fundamentele limiet op het gelijktijdig precies kennen van positie en momentum"
                    },
                    {
                        en: "Inability to predict when radioactive decay will occur",
                        es: "Incapacidad de predecir cuándo ocurrirá desintegración radiactiva",
                        de: "Unfähigkeit vorherzusagen, wann radioaktiver Zerfall auftreten wird",
                        nl: "Onvermogen om te voorspellen wanneer radioactief verval zal optreden"
                    },
                    {
                        en: "Limitation in measuring very small distances accurately",
                        es: "Limitación en medir distancias muy pequeñas con precisión",
                        de: "Begrenzung beim genauen Messen sehr kleiner Entfernungen",
                        nl: "Beperking in het nauwkeurig meten van zeer kleine afstanden"
                    },
                    {
                        en: "Error introduced by measuring instruments at quantum scales",
                        es: "Error introducido por instrumentos de medición a escalas cuánticas",
                        de: "Fehler, der durch Messinstrumente auf Quantenskalen eingeführt wird",
                        nl: "Fout geïntroduceerd door meetinstrumenten op quantumschalen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Heisenberg's uncertainty principle states that certain pairs of physical properties (like position and momentum) cannot be simultaneously measured with arbitrary precision. This isn't due to measurement limitations but reflects the fundamental quantum nature of reality, leading to phenomena like zero-point energy and virtual particles.",
                    es: "El principio de incertidumbre de Heisenberg establece que ciertos pares de propiedades físicas (como posición y momento) no pueden medirse simultáneamente con precisión arbitraria. Esto no se debe a limitaciones de medición sino que refleja la naturaleza cuántica fundamental de la realidad, llevando a fenómenos como energía de punto cero y partículas virtuales.",
                    de: "Heisenbergs Unschärferelation besagt, dass bestimmte Paare physikalischer Eigenschaften (wie Position und Impuls) nicht gleichzeitig mit beliebiger Genauigkeit gemessen werden können. Dies liegt nicht an Messbeschränkungen, sondern spiegelt die fundamentale Quantennatur der Realität wider und führt zu Phänomenen wie Nullpunktsenergie und virtuellen Teilchen.",
                    nl: "Heisenberg's onzekerheidsbeginsel stelt dat bepaalde paren van fysische eigenschappen (zoals positie en momentum) niet gelijktijdig met willekeurige precisie gemeten kunnen worden. Dit komt niet door meetbeperkingen maar reflecteert de fundamentele quantumnatuur van de werkelijkheid, leidend tot fenomenen zoals nulpuntsenergie en virtuele deeltjes."
                }
            },
            {
                question: {
                    en: "What is the Casimir effect in quantum field theory?",
                    es: "¿Qué es el efecto Casimir en teoría cuántica de campos?",
                    de: "Was ist der Casimir-Effekt in der Quantenfeldtheorie?",
                    nl: "Wat is het Casimir effect in quantum veldtheorie?"
                },
                options: [
                    {
                        en: "Attractive force between conducting plates due to vacuum energy fluctuations",
                        es: "Fuerza atractiva entre placas conductoras debido a fluctuaciones de energía del vacío",
                        de: "Anziehende Kraft zwischen leitenden Platten aufgrund von Vakuumenergie-Fluktuationen",
                        nl: "Aantrekkende kracht tussen geleidende platen door vacuüm energie fluctuaties"
                    },
                    {
                        en: "Emission of photons when electrons change energy levels",
                        es: "Emisión de fotones cuando electrones cambian niveles de energía",
                        de: "Emission von Photonen, wenn Elektronen Energieniveaus wechseln",
                        nl: "Emissie van fotonen wanneer elektronen energieniveaus veranderen"
                    },
                    {
                        en: "Scattering of light by free electrons in plasma",
                        es: "Dispersión de luz por electrones libres en plasma",
                        de: "Streuung von Licht durch freie Elektronen im Plasma",
                        nl: "Verstrooiing van licht door vrije elektronen in plasma"
                    },
                    {
                        en: "Interference pattern created by coherent light sources",
                        es: "Patrón de interferencia creado por fuentes de luz coherentes",
                        de: "Interferenzmuster, das von kohärenten Lichtquellen erzeugt wird",
                        nl: "Interferentiepatroon gecreëerd door coherente lichtbronnen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Casimir effect demonstrates that even 'empty' space contains energy due to quantum vacuum fluctuations. Between two closely spaced conducting plates, certain virtual photon modes are suppressed, creating lower energy density between the plates compared to outside, resulting in an attractive force. This effect provides direct evidence for the reality of vacuum energy.",
                    es: "El efecto Casimir demuestra que incluso el espacio 'vacío' contiene energía debido a fluctuaciones cuánticas del vacío. Entre dos placas conductoras muy cercanas, ciertos modos de fotones virtuales son suprimidos, creando menor densidad de energía entre las placas comparado con afuera, resultando en una fuerza atractiva. Este efecto proporciona evidencia directa de la realidad de energía del vacío.",
                    de: "Der Casimir-Effekt zeigt, dass selbst 'leerer' Raum aufgrund von Quantenvakuum-Fluktuationen Energie enthält. Zwischen zwei eng beieinander liegenden leitenden Platten werden bestimmte virtuelle Photonenmoden unterdrückt, wodurch zwischen den Platten eine geringere Energiedichte entsteht als außerhalb, was zu einer anziehenden Kraft führt. Dieser Effekt liefert direkten Beweis für die Realität von Vakuumenergie.",
                    nl: "Het Casimir effect toont aan dat zelfs 'lege' ruimte energie bevat door quantum vacuüm fluctuaties. Tussen twee dicht op elkaar geplaatste geleidende platen worden bepaalde virtuele foton modi onderdrukt, creërend lagere energiedichtheid tussen de platen vergeleken met buiten, resulterend in een aantrekkende kracht. Dit effect levert direct bewijs voor de realiteit van vacuüm energie."
                }
            },
            {
                question: {
                    en: "What is the concept of cosmic microwave background radiation?",
                    es: "¿Cuál es el concepto de radiación cósmica de fondo de microondas?",
                    de: "Was ist das Konzept der kosmischen Mikrowellen-Hintergrundstrahlung?",
                    nl: "Wat is het concept van kosmische microgolf achtergrondstraling?"
                },
                options: [
                    {
                        en: "Thermal radiation remnant from the early universe when it became transparent",
                        es: "Remanente de radiación térmica del universo temprano cuando se volvió transparente",
                        de: "Thermische Strahlungsrest aus dem frühen Universum, als es durchsichtig wurde",
                        nl: "Thermische stralingsrest uit het vroege universum toen het transparant werd"
                    },
                    {
                        en: "Radio waves emitted by supermassive black holes",
                        es: "Ondas de radio emitidas por agujeros negros supermasivos",
                        de: "Radiowellen, die von supermassereichen schwarzen Löchern emittiert werden",
                        nl: "Radiogolven uitgezonden door supermassieve zwarte gaten"
                    },
                    {
                        en: "Electromagnetic noise from modern technology",
                        es: "Ruido electromagnético de tecnología moderna",
                        de: "Elektromagnetisches Rauschen moderner Technologie",
                        nl: "Elektromagnetische ruis van moderne technologie"
                    },
                    {
                        en: "Microwave radiation from stellar formation regions",
                        es: "Radiación de microondas de regiones de formación estelar",
                        de: "Mikrowellenstrahlung aus Sternentstehungsregionen",
                        nl: "Microgolfstraling van stellaire vormingsgebieden"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The cosmic microwave background (CMB) is thermal radiation left over from when the universe was about 380,000 years old and first became transparent to light during recombination. This nearly uniform radiation at 2.7 K provides crucial evidence for the Big Bang theory and reveals tiny fluctuations that seeded large-scale structure formation.",
                    es: "El fondo cósmico de microondas (CMB) es radiación térmica remanente de cuando el universo tenía aproximadamente 380,000 años y se volvió transparente a la luz por primera vez durante recombinación. Esta radiación casi uniforme a 2.7 K proporciona evidencia crucial para la teoría del Big Bang y revela fluctuaciones diminutas que sembraron formación de estructura a gran escala.",
                    de: "Die kosmische Mikrowellen-Hintergrundstrahlung (CMB) ist thermische Strahlung, die übrig blieb, als das Universum etwa 380.000 Jahre alt war und erstmals während der Rekombination für Licht durchlässig wurde. Diese nahezu gleichförmige Strahlung bei 2,7 K liefert entscheidende Beweise für die Urknalltheorie und enthüllt winzige Fluktuationen, die die großräumige Strukturbildung initiierten.",
                    nl: "De kosmische microgolf achtergrond (CMB) is thermische straling overgebleven van toen het universum ongeveer 380.000 jaar oud was en voor het eerst transparant werd voor licht tijdens recombinatie. Deze bijna uniforme straling op 2,7 K levert cruciaal bewijs voor de Oerknal theorie en onthult kleine fluctuaties die grootschalige structuurvorming hebben gezaaid."
                }
            },
            {
                question: {
                    en: "What is the concept of quasar and its extreme luminosity?",
                    es: "¿Cuál es el concepto de quásar y su luminosidad extrema?",
                    de: "Was ist das Konzept eines Quasars und seiner extremen Leuchtkraft?",
                    nl: "Wat is het concept van quasar en zijn extreme helderheid?"
                },
                options: [
                    {
                        en: "Extremely bright galactic nuclei powered by supermassive black hole accretion",
                        es: "Núcleos galácticos extremadamente brillantes alimentados por acreción de agujeros negros supermasivos",
                        de: "Extrem helle galaktische Kerne, die von der Akkretion supermassereicher schwarzer Löcher angetrieben werden",
                        nl: "Extreem heldere galactische kernen aangedreven door supermassieve zwarte gat accretie"
                    },
                    {
                        en: "Rapidly rotating neutron stars emitting radio pulses",
                        es: "Estrellas de neutrones rotando rápidamente emitiendo pulsos de radio",
                        de: "Schnell rotierende Neutronensterne, die Radiopulse emittieren",
                        nl: "Snel roterende neutronensterren die radiopulsen uitzenden"
                    },
                    {
                        en: "Stellar explosions visible from intergalactic distances",
                        es: "Explosiones estelares visibles desde distancias intergalácticas",
                        de: "Sternexplosionen, die aus intergalaktischen Entfernungen sichtbar sind",
                        nl: "Stellaire explosies zichtbaar van intergalactische afstanden"
                    },
                    {
                        en: "Dense clusters of young, massive stars",
                        es: "Cúmulos densos de estrellas jóvenes y masivas",
                        de: "Dichte Ansammlungen junger, massereicher Sterne",
                        nl: "Dichte clusters van jonge, massieve sterren"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Quasars (quasi-stellar radio sources) are among the most luminous objects in the universe, powered by matter falling into supermassive black holes at the centers of distant galaxies. The accretion disk around the black hole heats up to millions of degrees, emitting tremendous amounts of energy across the electromagnetic spectrum, sometimes outshining entire galaxies.",
                    es: "Los quásares (fuentes de radio cuasi-estelares) están entre los objetos más luminosos del universo, alimentados por materia cayendo en agujeros negros supermasivos en centros de galaxias distantes. El disco de acreción alrededor del agujero negro se calienta a millones de grados, emitiendo tremendas cantidades de energía a través del espectro electromagnético, a veces opacando galaxias enteras.",
                    de: "Quasare (quasi-stellare Radioquellen) gehören zu den leuchtkräftigsten Objekten im Universum, angetrieben von Materie, die in supermassereiche schwarze Löcher in den Zentren entfernter Galaxien fällt. Die Akkretionsscheibe um das schwarze Loch erhitzt sich auf Millionen von Grad und emittiert gewaltige Energiemengen über das elektromagnetische Spektrum, manchmal ganze Galaxien überstrahlend.",
                    nl: "Quasars (quasi-stellaire radiobronnen) behoren tot de meest lumineuze objecten in het universum, aangedreven door materie die valt in supermassieve zwarte gaten in de centra van verre sterrenstelsels. De accretieschijf rond het zwarte gat verwarmt tot miljoenen graden, uitstralend enorme hoeveelheden energie over het elektromagnetische spectrum, soms hele sterrenstelsels overtreffend."
                }
            },
            {
                question: {
                    en: "What is the concept of neutron degeneracy pressure in neutron stars?",
                    es: "¿Cuál es el concepto de presión de degeneración neutrónica en estrellas de neutrones?",
                    de: "Was ist das Konzept des Neutronendegenerationsdrucks in Neutronensternen?",
                    nl: "Wat is het concept van neutron degeneratie druk in neutronensterren?"
                },
                options: [
                    {
                        en: "Quantum pressure preventing neutrons from occupying identical states",
                        es: "Presión cuántica previniendo neutrones de ocupar estados idénticos",
                        de: "Quantendruck, der Neutronen daran hindert, identische Zustände zu besetzen",
                        nl: "Quantumdruk die neutrons verhindert identieke toestanden te bezetten"
                    },
                    {
                        en: "Electromagnetic repulsion between neutron magnetic moments",
                        es: "Repulsión electromagnética entre momentos magnéticos de neutrones",
                        de: "Elektromagnetische Abstoßung zwischen magnetischen Momenten von Neutronen",
                        nl: "Elektromagnetische afstoting tussen neutron magnetische momenten"
                    },
                    {
                        en: "Gravitational pressure from the star's core collapse",
                        es: "Presión gravitacional del colapso del núcleo estelar",
                        de: "Gravitationsdruck vom Kollaps des Sternkerns",
                        nl: "Gravitationele druk van het instorten van de stellaire kern"
                    },
                    {
                        en: "Nuclear fusion reactions creating outward pressure",
                        es: "Reacciones de fusión nuclear creando presión hacia afuera",
                        de: "Kernfusionsreaktionen, die Außendruck erzeugen",
                        nl: "Kernfusiereacties die buitenwaartse druk creëren"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Neutron degeneracy pressure arises from the Pauli exclusion principle, which forbids neutrons (fermions) from occupying the same quantum state. In neutron stars, this quantum mechanical pressure balances the enormous gravitational collapse, creating objects with nuclear density throughout - roughly a teaspoon would weigh as much as Mount Everest.",
                    es: "La presión de degeneración neutrónica surge del principio de exclusión de Pauli, que prohíbe a neutrones (fermiones) ocupar el mismo estado cuántico. En estrellas de neutrones, esta presión mecánica cuántica equilibra el enorme colapso gravitacional, creando objetos con densidad nuclear en toda su extensión - aproximadamente una cucharadita pesaría tanto como el Monte Everest.",
                    de: "Neutronendegenerationsdruck entsteht durch das Pauli-Ausschlussprinzip, das Neutronen (Fermionen) verbietet, denselben Quantenzustand zu besetzen. In Neutronensternen gleicht dieser quantenmechanische Druck den enormen Gravitationskollaps aus und erzeugt Objekte mit Kerndichte überall - etwa ein Teelöffel würde so viel wiegen wie der Mount Everest.",
                    nl: "Neutron degeneratie druk ontstaat door het Pauli uitsluitingsbeginsel, dat neutrons (fermionen) verbiedt dezelfde quantumtoestand te bezetten. In neutronensterren balanceert deze quantummechanische druk de enorme gravitationele instorting, creërend objecten met kerndichtheid overal - ongeveer een theelepel zou zoveel wegen als de Mount Everest."
                }
            },
            {
                question: {
                    en: "What is the concept of time dilation in special relativity?",
                    es: "¿Cuál es el concepto de dilatación temporal en relatividad especial?",
                    de: "Was ist das Konzept der Zeitdilatation in der speziellen Relativität?",
                    nl: "Wat is het concept van tijddilatatie in speciale relativiteit?"
                },
                options: [
                    {
                        en: "Time passes slower for objects moving at high velocities relative to observer",
                        es: "El tiempo pasa más lento para objetos moviéndose a altas velocidades relativas al observador",
                        de: "Zeit vergeht langsamer für Objekte, die sich mit hohen Geschwindigkeiten relativ zum Beobachter bewegen",
                        nl: "Tijd gaat langzamer voor objecten die bewegen met hoge snelheden relatief aan de waarnemer"
                    },
                    {
                        en: "Expansion of the universe causes time to accelerate",
                        es: "La expansión del universo causa que el tiempo se acelere",
                        de: "Die Expansion des Universums führt dazu, dass die Zeit sich beschleunigt",
                        nl: "Expansie van het universum veroorzaakt dat tijd versnelt"
                    },
                    {
                        en: "Strong gravitational fields compress time intervals",
                        es: "Campos gravitacionales fuertes comprimen intervalos temporales",
                        de: "Starke Gravitationsfelder komprimieren Zeitintervalle",
                        nl: "Sterke gravitationele velden comprimeren tijdsintervallen"
                    },
                    {
                        en: "Quantum fluctuations make time measurements uncertain",
                        es: "Fluctuaciones cuánticas hacen mediciones temporales inciertas",
                        de: "Quantenfluktuationen machen Zeitmessungen ungewiss",
                        nl: "Quantum fluctuaties maken tijdmetingen onzeker"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Time dilation in special relativity occurs when objects move at high velocities relative to an observer. Time literally runs slower for the moving object as measured by the stationary observer, described by the Lorentz factor γ = 1/√(1-v²/c²). This effect becomes significant as velocities approach the speed of light and has been confirmed by experiments with particles and atomic clocks.",
                    es: "La dilatación temporal en relatividad especial ocurre cuando objetos se mueven a altas velocidades relativas a un observador. El tiempo literalmente corre más lento para el objeto en movimiento según es medido por el observador estacionario, descrito por el factor de Lorentz γ = 1/√(1-v²/c²). Este efecto se vuelve significativo cuando las velocidades se acercan a la velocidad de la luz y ha sido confirmado por experimentos con partículas y relojes atómicos.",
                    de: "Zeitdilatation in der speziellen Relativität tritt auf, wenn sich Objekte mit hohen Geschwindigkeiten relativ zu einem Beobachter bewegen. Die Zeit läuft buchstäblich langsamer für das bewegte Objekt, gemessen vom ruhenden Beobachter, beschrieben durch den Lorentz-Faktor γ = 1/√(1-v²/c²). Dieser Effekt wird signifikant, wenn sich Geschwindigkeiten der Lichtgeschwindigkeit nähern und wurde durch Experimente mit Teilchen und Atomuhren bestätigt.",
                    nl: "Tijddilatatie in speciale relativiteit treedt op wanneer objecten bewegen met hoge snelheden relatief aan een waarnemer. Tijd loopt letterlijk langzamer voor het bewegende object zoals gemeten door de stilstaande waarnemer, beschreven door de Lorentz factor γ = 1/√(1-v²/c²). Dit effect wordt significant wanneer snelheden de lichtsnelheid benaderen en is bevestigd door experimenten met deeltjes en atoomklokken."
                }
            },
            {
                question: {
                    en: "What is quantum chromodynamics (QCD) and the strong force?",
                    es: "¿Qué es la cromodinámica cuántica (QCD) y la fuerza fuerte?",
                    de: "Was ist Quantenchromodynamik (QCD) und die starke Kraft?",
                    nl: "Wat is quantum chromodynamica (QCD) en de sterke kracht?"
                },
                options: [
                    {
                        en: "Theory describing strong nuclear force between quarks via gluon exchange",
                        es: "Teoría que describe la fuerza nuclear fuerte entre quarks mediante intercambio de gluones",
                        de: "Theorie, die die starke Kernkraft zwischen Quarks durch Gluonenaustausch beschreibt",
                        nl: "Theorie die de sterke kernkracht tussen quarks via gluon uitwisseling beschrijft"
                    },
                    {
                        en: "Study of electromagnetic interactions in atomic nuclei",
                        es: "Estudio de interacciones electromagnéticas en núcleos atómicos",
                        de: "Studie elektromagnetischer Wechselwirkungen in Atomkernen",
                        nl: "Studie van elektromagnetische interacties in atoomkernen"
                    },
                    {
                        en: "Theory explaining weak nuclear force and beta decay",
                        es: "Teoría explicando fuerza nuclear débil y decaimiento beta",
                        de: "Theorie, die schwache Kernkraft und Beta-Zerfall erklärt",
                        nl: "Theorie die zwakke kernkracht en bèta verval verklaart"
                    },
                    {
                        en: "Framework for gravitational interactions at quantum scales",
                        es: "Marco para interacciones gravitacionales a escalas cuánticas",
                        de: "Rahmen für Gravitationswechselwirkungen auf Quantenskalen",
                        nl: "Raamwerk voor gravitationele interacties op quantumschalen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Quantum chromodynamics (QCD) is the quantum field theory describing the strong nuclear force, one of the four fundamental forces. It explains how quarks and gluons interact via the exchange of gluons, which carry color charge. QCD exhibits unique properties like confinement (quarks cannot exist alone) and asymptotic freedom (the force becomes weaker at short distances).",
                    es: "La cromodinámica cuántica (QCD) es la teoría cuántica de campos que describe la fuerza nuclear fuerte, una de las cuatro fuerzas fundamentales. Explica cómo quarks y gluones interactúan mediante el intercambio de gluones, que portan carga de color. QCD exhibe propiedades únicas como confinamiento (quarks no pueden existir solos) y libertad asintótica (la fuerza se debilita a distancias cortas).",
                    de: "Quantenchromodynamik (QCD) ist die Quantenfeldtheorie, die die starke Kernkraft beschreibt, eine der vier fundamentalen Kräfte. Sie erklärt, wie Quarks und Gluonen durch den Austausch von Gluonen wechselwirken, die Farbladung tragen. QCD zeigt einzigartige Eigenschaften wie Confinement (Quarks können nicht allein existieren) und asymptotische Freiheit (die Kraft wird bei kurzen Entfernungen schwächer).",
                    nl: "Quantum chromodynamica (QCD) is de quantumveldtheorie die de sterke kernkracht beschrijft, een van de vier fundamentele krachten. Het verklaart hoe quarks en gluonen interacteren via de uitwisseling van gluonen, die kleurlading dragen. QCD vertoont unieke eigenschappen zoals opsluiting (quarks kunnen niet alleen bestaan) en asymptotische vrijheid (de kracht wordt zwakker op korte afstanden)."
                }
            }
        ]
    };

    if (typeof window !== 'undefined' && typeof window.addLevel === 'function') {
        window.addLevel('brain-teaser', 'physics', 10, level10);
    }
})();