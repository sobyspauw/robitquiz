// Physics - Level 3: Waves and Oscillations
(function() {
    const level3 = {
        name: {
            en: "Waves and Oscillations",
            es: "Ondas y Oscilaciones",
            de: "Wellen und Schwingungen",
            nl: "Golven en Trillingen"
        },
        questions: [
            {
                question: {
                    en: "What is the relationship between frequency, wavelength, and wave speed?",
                    es: "¿Cuál es la relación entre frecuencia, longitud de onda y velocidad de onda?",
                    de: "Wie ist die Beziehung zwischen Frequenz, Wellenlänge und Wellengeschwindigkeit?",
                    nl: "Wat is de relatie tussen frequentie, golflengte en golfsnelheid?"
                },
                options: [
                    {
                        en: "v = fλ (wave speed equals frequency times wavelength)",
                        es: "v = fλ (velocidad de onda igual a frecuencia por longitud de onda)",
                        de: "v = fλ (Wellengeschwindigkeit gleich Frequenz mal Wellenlänge)",
                        nl: "v = fλ (golfsnelheid is gelijk aan frequentie maal golflengte)"
                    },
                    {
                        en: "v = f/λ (wave speed equals frequency divided by wavelength)",
                        es: "v = f/λ (velocidad de onda igual a frecuencia dividida por longitud de onda)",
                        de: "v = f/λ (Wellengeschwindigkeit gleich Frequenz geteilt durch Wellenlänge)",
                        nl: "v = f/λ (golfsnelheid is gelijk aan frequentie gedeeld door golflengte)"
                    },
                    {
                        en: "v = λ/f (wave speed equals wavelength divided by frequency)",
                        es: "v = λ/f (velocidad de onda igual a longitud de onda dividida por frecuencia)",
                        de: "v = λ/f (Wellengeschwindigkeit gleich Wellenlänge geteilt durch Frequenz)",
                        nl: "v = λ/f (golfsnelheid is gelijk aan golflengte gedeeld door frequentie)"
                    },
                    {
                        en: "v = f + λ (wave speed equals frequency plus wavelength)",
                        es: "v = f + λ (velocidad de onda igual a frecuencia más longitud de onda)",
                        de: "v = f + λ (Wellengeschwindigkeit gleich Frequenz plus Wellenlänge)",
                        nl: "v = f + λ (golfsnelheid is gelijk aan frequentie plus golflengte)"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The fundamental wave equation v = fλ relates wave speed (v) to frequency (f) and wavelength (λ). This means that for a given wave speed, higher frequency waves have shorter wavelengths, and lower frequency waves have longer wavelengths.",
                    es: "La ecuación fundamental de ondas v = fλ relaciona la velocidad de onda (v) con la frecuencia (f) y la longitud de onda (λ). Esto significa que para una velocidad de onda dada, las ondas de mayor frecuencia tienen longitudes de onda más cortas, y las ondas de menor frecuencia tienen longitudes de onda más largas.",
                    de: "Die fundamentale Wellengleichung v = fλ verknüpft Wellengeschwindigkeit (v) mit Frequenz (f) und Wellenlänge (λ). Das bedeutet, dass bei einer gegebenen Wellengeschwindigkeit höhere Frequenzen kürzere Wellenlängen haben und niedrigere Frequenzen längere Wellenlängen.",
                    nl: "De fundamentele golfvergelijking v = fλ relateert golfsnelheid (v) aan frequentie (f) en golflengte (λ). Dit betekent dat voor een gegeven golfsnelheid, hogere frequentie golven kortere golflengtes hebben, en lagere frequentie golven langere golflengtes."
                }
            },
            {
                question: {
                    en: "What is the difference between transverse and longitudinal waves?",
                    es: "¿Cuál es la diferencia entre ondas transversales y longitudinales?",
                    de: "Was ist der Unterschied zwischen Quer- und Längswellen?",
                    nl: "Wat is het verschil tussen transversale en longitudinale golven?"
                },
                options: [
                    {
                        en: "Transverse waves vibrate perpendicular to wave direction; longitudinal waves vibrate parallel to wave direction",
                        es: "Las ondas transversales vibran perpendicularmente a la dirección de la onda; las ondas longitudinales vibran paralelamente a la dirección de la onda",
                        de: "Transversalwellen schwingen senkrecht zur Wellenrichtung; Longitudinalwellen schwingen parallel zur Wellenrichtung",
                        nl: "Transversale golven trillen loodrecht op de golfrichting; longitudinale golven trillen evenwijdig aan de golfrichting"
                    },
                    {
                        en: "Transverse waves are faster than longitudinal waves",
                        es: "Las ondas transversales son más rápidas que las ondas longitudinales",
                        de: "Transversalwellen sind schneller als Longitudinalwellen",
                        nl: "Transversale golven zijn sneller dan longitudinale golven"
                    },
                    {
                        en: "Transverse waves carry more energy than longitudinal waves",
                        es: "Las ondas transversales transportan más energía que las ondas longitudinales",
                        de: "Transversalwellen tragen mehr Energie als Longitudinalwellen",
                        nl: "Transversale golven dragen meer energie dan longitudinale golven"
                    },
                    {
                        en: "Transverse waves can only travel through solids; longitudinal waves can travel through any medium",
                        es: "Las ondas transversales solo pueden viajar a través de sólidos; las ondas longitudinales pueden viajar a través de cualquier medio",
                        de: "Transversalwellen können nur durch Festkörper reisen; Longitudinalwellen können durch jedes Medium reisen",
                        nl: "Transversale golven kunnen alleen door vaste stoffen reizen; longitudinale golven kunnen door elk medium reizen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "In transverse waves, particles oscillate perpendicular to the wave's direction of travel (like waves on a string). In longitudinal waves, particles oscillate parallel to the wave's direction (like sound waves). Both types can exist in different media depending on the material properties.",
                    es: "En las ondas transversales, las partículas oscilan perpendicularmente a la dirección de viaje de la onda (como ondas en una cuerda). En las ondas longitudinales, las partículas oscilan paralelamente a la dirección de la onda (como ondas sonoras). Ambos tipos pueden existir en diferentes medios dependiendo de las propiedades del material.",
                    de: "Bei Transversalwellen schwingen Teilchen senkrecht zur Ausbreitungsrichtung der Welle (wie Wellen auf einem Seil). Bei Longitudinalwellen schwingen Teilchen parallel zur Wellenrichtung (wie Schallwellen). Beide Typen können in verschiedenen Medien existieren, abhängig von den Materialeigenschaften.",
                    nl: "Bij transversale golven oscilleren deeltjes loodrecht op de bewegingsrichting van de golf (zoals golven op een touw). Bij longitudinale golven oscilleren deeltjes evenwijdig aan de golfrichting (zoals geluidsgolven). Beide typen kunnen bestaan in verschillende media afhankelijk van materiaaleigenschappen."
                }
            },
            {
                question: {
                    en: "What is wave interference?",
                    es: "¿Qué es la interferencia de ondas?",
                    de: "Was ist Welleninterferenz?",
                    nl: "Wat is golfinterferentie?"
                },
                options: [
                    {
                        en: "The phenomenon where two or more waves combine to produce a resultant wave with modified amplitude",
                        es: "El fenómeno donde dos o más ondas se combinan para producir una onda resultante con amplitud modificada",
                        de: "Das Phänomen, bei dem sich zwei oder mehr Wellen kombinieren, um eine resultierende Welle mit modifizierter Amplitude zu erzeugen",
                        nl: "Het fenomeen waarbij twee of meer golven combineren om een resulterende golf te produceren met gemodificeerde amplitude"
                    },
                    {
                        en: "The blocking of waves by obstacles in their path",
                        es: "El bloqueo de ondas por obstáculos en su camino",
                        de: "Das Blockieren von Wellen durch Hindernisse auf ihrem Weg",
                        nl: "Het blokkeren van golven door obstakels in hun pad"
                    },
                    {
                        en: "The change in wave direction when entering a new medium",
                        es: "El cambio en la dirección de la onda al entrar en un nuevo medio",
                        de: "Die Änderung der Wellenrichtung beim Eintritt in ein neues Medium",
                        nl: "De verandering in golfrichting bij het betreden van een nieuw medium"
                    },
                    {
                        en: "The decrease in wave amplitude with distance",
                        es: "La disminución en la amplitud de la onda con la distancia",
                        de: "Die Abnahme der Wellenamplitude mit der Entfernung",
                        nl: "De afname van golfamplitude met afstand"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Wave interference occurs when multiple waves occupy the same space simultaneously. Constructive interference happens when waves are in phase (crests align), resulting in larger amplitude. Destructive interference occurs when waves are out of phase (crest meets trough), potentially canceling each other out.",
                    es: "La interferencia de ondas ocurre cuando múltiples ondas ocupan el mismo espacio simultáneamente. La interferencia constructiva ocurre cuando las ondas están en fase (las crestas se alinean), resultando en mayor amplitud. La interferencia destructiva ocurre cuando las ondas están fuera de fase (cresta se encuentra con valle), potencialmente cancelándose mutuamente.",
                    de: "Welleninterferenz tritt auf, wenn mehrere Wellen gleichzeitig denselben Raum einnehmen. Konstruktive Interferenz geschieht, wenn Wellen in Phase sind (Wellenberge ausgerichtet), was zu größerer Amplitude führt. Destruktive Interferenz tritt auf, wenn Wellen außer Phase sind (Wellenberg trifft Wellental), wodurch sie sich möglicherweise gegenseitig aufheben.",
                    nl: "Golfinterferentie treedt op wanneer meerdere golven tegelijkertijd dezelfde ruimte innemen. Constructieve interferentie gebeurt wanneer golven in fase zijn (toppen uitgelijnd), wat resulteert in grotere amplitude. Destructieve interferentie treedt op wanneer golven uit fase zijn (top ontmoet dal), waardoor ze elkaar mogelijk uitdoven."
                }
            },
            {
                question: {
                    en: "What is resonance in oscillating systems?",
                    es: "¿Qué es la resonancia en sistemas oscilantes?",
                    de: "Was ist Resonanz in schwingenden Systemen?",
                    nl: "Wat is resonantie in oscillerende systemen?"
                },
                options: [
                    {
                        en: "The dramatic increase in amplitude when a system is driven at its natural frequency",
                        es: "El aumento dramático en amplitud cuando un sistema es impulsado a su frecuencia natural",
                        de: "Die dramatische Amplitudensteigerung, wenn ein System mit seiner natürlichen Frequenz angetrieben wird",
                        nl: "De dramatische toename in amplitude wanneer een systeem wordt aangedreven op zijn natuurlijke frequentie"
                    },
                    {
                        en: "The gradual decrease in oscillation amplitude over time",
                        es: "La disminución gradual en la amplitud de oscilación con el tiempo",
                        de: "Die allmähliche Abnahme der Schwingungsamplitude über die Zeit",
                        nl: "De geleidelijke afname van oscillatieamplitude in de tijd"
                    },
                    {
                        en: "The change in frequency of oscillation with temperature",
                        es: "El cambio en la frecuencia de oscilación con la temperatura",
                        de: "Die Änderung der Schwingungsfrequenz mit der Temperatur",
                        nl: "De verandering in oscillatiefrequentie met temperatuur"
                    },
                    {
                        en: "The conversion of oscillation energy to heat",
                        es: "La conversión de energía de oscilación a calor",
                        de: "Die Umwandlung von Schwingungsenergie in Wärme",
                        nl: "De omzetting van oscillatie-energie naar warmte"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Resonance occurs when an oscillating system is driven by an external force at its natural (resonant) frequency. This causes a dramatic increase in amplitude as energy is efficiently transferred to the system. Examples include musical instruments, bridges, and atomic absorption spectra.",
                    es: "La resonancia ocurre cuando un sistema oscilante es impulsado por una fuerza externa a su frecuencia natural (resonante). Esto causa un aumento dramático en amplitud ya que la energía se transfiere eficientemente al sistema. Ejemplos incluyen instrumentos musicales, puentes y espectros de absorción atómica.",
                    de: "Resonanz tritt auf, wenn ein schwingendes System von einer externen Kraft mit seiner natürlichen (Resonanz-)Frequenz angetrieben wird. Dies verursacht eine dramatische Amplitudensteigerung, da Energie effizient auf das System übertragen wird. Beispiele sind Musikinstrumente, Brücken und atomare Absorptionsspektren.",
                    nl: "Resonantie treedt op wanneer een oscillerend systeem wordt aangedreven door een externe kracht op zijn natuurlijke (resonante) frequentie. Dit veroorzaakt een dramatische toename in amplitude omdat energie efficiënt wordt overgedragen aan het systeem. Voorbeelden zijn muziekinstrumenten, bruggen en atomaire absorptiespectra."
                }
            },
            {
                question: {
                    en: "What is the Doppler effect?",
                    es: "¿Qué es el efecto Doppler?",
                    de: "Was ist der Doppler-Effekt?",
                    nl: "Wat is het Doppler-effect?"
                },
                options: [
                    {
                        en: "The change in frequency of a wave due to relative motion between source and observer",
                        es: "El cambio en la frecuencia de una onda debido al movimiento relativo entre la fuente y el observador",
                        de: "Die Änderung der Wellenfrequenz aufgrund relativer Bewegung zwischen Quelle und Beobachter",
                        nl: "De verandering in frequentie van een golf door relatieve beweging tussen bron en waarnemer"
                    },
                    {
                        en: "The bending of waves around obstacles",
                        es: "La curvatura de ondas alrededor de obstáculos",
                        de: "Die Beugung von Wellen um Hindernisse",
                        nl: "Het buigen van golven rond obstakels"
                    },
                    {
                        en: "The spreading out of waves after passing through an opening",
                        es: "La expansión de ondas después de pasar a través de una abertura",
                        de: "Die Ausbreitung von Wellen nach dem Durchgang durch eine Öffnung",
                        nl: "Het uitspreiden van golven na het passeren van een opening"
                    },
                    {
                        en: "The reflection of waves from a surface",
                        es: "La reflexión de ondas desde una superficie",
                        de: "Die Reflexion von Wellen von einer Oberfläche",
                        nl: "De reflectie van golven van een oppervlak"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Doppler effect describes how the observed frequency of a wave changes when there's relative motion between the wave source and observer. When approaching, frequency increases (blue shift); when receding, frequency decreases (red shift). This applies to sound, light, and all wave phenomena.",
                    es: "El efecto Doppler describe cómo la frecuencia observada de una onda cambia cuando hay movimiento relativo entre la fuente de la onda y el observador. Al acercarse, la frecuencia aumenta (corrimiento al azul); al alejarse, la frecuencia disminuye (corrimiento al rojo). Esto se aplica al sonido, luz y todos los fenómenos ondulatorios.",
                    de: "Der Doppler-Effekt beschreibt, wie sich die beobachtete Frequenz einer Welle ändert, wenn relative Bewegung zwischen Wellenquelle und Beobachter besteht. Bei Annäherung steigt die Frequenz (Blauverschiebung); bei Entfernung sinkt die Frequenz (Rotverschiebung). Dies gilt für Schall, Licht und alle Wellenphänomene.",
                    nl: "Het Doppler-effect beschrijft hoe de waargenomen frequentie van een golf verandert wanneer er relatieve beweging is tussen de golfbron en waarnemer. Bij nadering neemt de frequentie toe (blauwverschuiving); bij verwijdering neemt de frequentie af (roodverschuiving). Dit geldt voor geluid, licht en alle golfverschijnselen."
                }
            },
            {
                question: {
                    en: "What is diffraction?",
                    es: "¿Qué es la difracción?",
                    de: "Was ist Beugung?",
                    nl: "Wat is diffractie?"
                },
                options: [
                    {
                        en: "The bending and spreading of waves when they encounter obstacles or pass through openings",
                        es: "La curvatura y expansión de ondas cuando encuentran obstáculos o pasan a través de aberturas",
                        de: "Die Beugung und Ausbreitung von Wellen, wenn sie auf Hindernisse treffen oder durch Öffnungen passieren",
                        nl: "Het buigen en spreiden van golven wanneer ze obstakels tegenkomen of door openingen passeren"
                    },
                    {
                        en: "The change in wave speed when entering a new medium",
                        es: "El cambio en la velocidad de onda al entrar en un nuevo medio",
                        de: "Die Änderung der Wellengeschwindigkeit beim Eintritt in ein neues Medium",
                        nl: "De verandering in golfsnelheid bij het betreden van een nieuw medium"
                    },
                    {
                        en: "The complete blocking of waves by solid barriers",
                        es: "El bloqueo completo de ondas por barreras sólidas",
                        de: "Das vollständige Blockieren von Wellen durch feste Barrieren",
                        nl: "Het volledig blokkeren van golven door vaste barrières"
                    },
                    {
                        en: "The amplification of wave energy at specific frequencies",
                        es: "La amplificación de energía de onda a frecuencias específicas",
                        de: "Die Verstärkung von Wellenenergie bei spezifischen Frequenzen",
                        nl: "De versterking van golfenergie bij specifieke frequenties"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Diffraction is the wave phenomenon where waves bend around obstacles or spread out after passing through narrow openings. The amount of diffraction depends on the wavelength relative to the obstacle size - longer wavelengths diffract more than shorter ones.",
                    es: "La difracción es el fenómeno ondulatorio donde las ondas se curvan alrededor de obstáculos o se expanden después de pasar a través de aberturas estrechas. La cantidad de difracción depende de la longitud de onda relativa al tamaño del obstáculo - longitudes de onda más largas se difractan más que las más cortas.",
                    de: "Beugung ist das Wellenphänomen, bei dem sich Wellen um Hindernisse biegen oder sich nach dem Durchgang durch schmale Öffnungen ausbreiten. Das Ausmaß der Beugung hängt von der Wellenlänge relativ zur Hindernisgröße ab - längere Wellenlängen beugen mehr als kürzere.",
                    nl: "Diffractie is het golfverschijnsel waarbij golven buigen rond obstakels of uitspreiden na het passeren van smalle openingen. De hoeveelheid diffractie hangt af van de golflengte relatief tot de obstakelgrootte - langere golflengtes diffracteren meer dan kortere."
                }
            },
            {
                question: {
                    en: "What is refraction?",
                    es: "¿Qué es la refracción?",
                    de: "Was ist Brechung?",
                    nl: "Wat is refractie?"
                },
                options: [
                    {
                        en: "The change in wave direction when passing from one medium to another with different wave speeds",
                        es: "El cambio en la dirección de la onda al pasar de un medio a otro con diferentes velocidades de onda",
                        de: "Die Richtungsänderung der Welle beim Übergang von einem Medium zu einem anderen mit unterschiedlichen Wellengeschwindigkeiten",
                        nl: "De verandering in golfrichting bij het overgaan van het ene medium naar het andere met verschillende golfsnelheden"
                    },
                    {
                        en: "The bouncing back of waves from a surface",
                        es: "El rebote de ondas desde una superficie",
                        de: "Das Zurückprallen von Wellen von einer Oberfläche",
                        nl: "Het terugkaatsen van golven van een oppervlak"
                    },
                    {
                        en: "The increase in wave amplitude in certain regions",
                        es: "El aumento en la amplitud de onda en ciertas regiones",
                        de: "Die Zunahme der Wellenamplitude in bestimmten Bereichen",
                        nl: "De toename van golfamplitude in bepaalde gebieden"
                    },
                    {
                        en: "The complete absorption of wave energy by a material",
                        es: "La absorción completa de energía de onda por un material",
                        de: "Die vollständige Absorption von Wellenenergie durch ein Material",
                        nl: "De volledige absorptie van golfenergie door een materiaal"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Refraction occurs when waves change speed as they enter a new medium, causing them to change direction. Snell's law describes this: n₁sin(θ₁) = n₂sin(θ₂), where n is the refractive index and θ is the angle from the normal. This explains why a straw looks bent in water.",
                    es: "La refracción ocurre cuando las ondas cambian de velocidad al entrar en un nuevo medio, causando que cambien de dirección. La ley de Snell describe esto: n₁sin(θ₁) = n₂sin(θ₂), donde n es el índice de refracción y θ es el ángulo desde la normal. Esto explica por qué una pajita se ve doblada en el agua.",
                    de: "Brechung tritt auf, wenn Wellen ihre Geschwindigkeit ändern, wenn sie in ein neues Medium eintreten, wodurch sie ihre Richtung ändern. Das Snellsche Gesetz beschreibt dies: n₁sin(θ₁) = n₂sin(θ₂), wobei n der Brechungsindex und θ der Winkel zur Normalen ist. Dies erklärt, warum ein Strohhalm im Wasser gebogen aussieht.",
                    nl: "Refractie treedt op wanneer golven van snelheid veranderen bij het betreden van een nieuw medium, waardoor ze van richting veranderen. Snell's wet beschrijft dit: n₁sin(θ₁) = n₂sin(θ₂), waarbij n de brekingsindex is en θ de hoek vanaf de normaal. Dit verklaart waarom een rietje er gebogen uitziet in water."
                }
            },
            {
                question: {
                    en: "What is the principle of superposition?",
                    es: "¿Cuál es el principio de superposición?",
                    de: "Was ist das Superpositionsprinzip?",
                    nl: "Wat is het principe van superpositie?"
                },
                options: [
                    {
                        en: "When multiple waves overlap, the resultant displacement is the algebraic sum of individual displacements",
                        es: "Cuando múltiples ondas se superponen, el desplazamiento resultante es la suma algebraica de los desplazamientos individuales",
                        de: "Wenn sich mehrere Wellen überlagern, ist die resultierende Auslenkung die algebraische Summe der einzelnen Auslenkungen",
                        nl: "Wanneer meerdere golven overlappen, is de resulterende verplaatsing de algebraïsche som van individuele verplaatsingen"
                    },
                    {
                        en: "Larger waves always dominate smaller waves",
                        es: "Las ondas más grandes siempre dominan a las ondas más pequeñas",
                        de: "Größere Wellen dominieren immer kleinere Wellen",
                        nl: "Grotere golven domineren altijd kleinere golven"
                    },
                    {
                        en: "Waves cannot exist in the same location simultaneously",
                        es: "Las ondas no pueden existir en la misma ubicación simultáneamente",
                        de: "Wellen können nicht gleichzeitig am selben Ort existieren",
                        nl: "Golven kunnen niet gelijktijdig op dezelfde locatie bestaan"
                    },
                    {
                        en: "The fastest wave determines the overall wave behavior",
                        es: "La onda más rápida determina el comportamiento general de la onda",
                        de: "Die schnellste Welle bestimmt das gesamte Wellenverhalten",
                        nl: "De snelste golf bepaalt het algehele golfgedrag"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The principle of superposition states that when two or more waves meet at a point, the resultant displacement is the vector sum of the individual wave displacements. This principle explains interference patterns, beats, and standing waves.",
                    es: "El principio de superposición establece que cuando dos o más ondas se encuentran en un punto, el desplazamiento resultante es la suma vectorial de los desplazamientos individuales de las ondas. Este principio explica los patrones de interferencia, batimientos y ondas estacionarias.",
                    de: "Das Superpositionsprinzip besagt, dass wenn zwei oder mehr Wellen an einem Punkt zusammentreffen, die resultierende Auslenkung die Vektorsumme der einzelnen Wellenauslenkungen ist. Dieses Prinzip erklärt Interferenzmuster, Schwebungen und stehende Wellen.",
                    nl: "Het principe van superpositie stelt dat wanneer twee of meer golven elkaar ontmoeten op een punt, de resulterende verplaatsing de vectorsom is van de individuele golfverplaatsingen. Dit principe verklaart interferentiepatronen, zweving en staande golven."
                }
            },
            {
                question: {
                    en: "What are standing waves?",
                    es: "¿Qué son las ondas estacionarias?",
                    de: "Was sind stehende Wellen?",
                    nl: "Wat zijn staande golven?"
                },
                options: [
                    {
                        en: "Wave patterns formed by interference of two identical waves traveling in opposite directions",
                        es: "Patrones de onda formados por interferencia de dos ondas idénticas viajando en direcciones opuestas",
                        de: "Wellenmuster, die durch Interferenz zweier identischer Wellen entstehen, die in entgegengesetzte Richtungen laufen",
                        nl: "Golfpatronen gevormd door interferentie van twee identieke golven die in tegengestelde richtingen reizen"
                    },
                    {
                        en: "Waves that remain stationary in space without any motion",
                        es: "Ondas que permanecen estacionarias en el espacio sin ningún movimiento",
                        de: "Wellen, die im Raum stationär bleiben ohne jede Bewegung",
                        nl: "Golven die stationair blijven in de ruimte zonder enige beweging"
                    },
                    {
                        en: "Waves with extremely high frequency and short wavelength",
                        es: "Ondas con frecuencia extremadamente alta y longitud de onda corta",
                        de: "Wellen mit extrem hoher Frequenz und kurzer Wellenlänge",
                        nl: "Golven met extreem hoge frequentie en korte golflengte"
                    },
                    {
                        en: "Waves that travel at the speed of light",
                        es: "Ondas que viajan a la velocidad de la luz",
                        de: "Wellen, die mit Lichtgeschwindigkeit reisen",
                        nl: "Golven die reizen met de snelheid van het licht"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Standing waves form when two identical waves traveling in opposite directions interfere. This creates stationary patterns with nodes (zero amplitude) and antinodes (maximum amplitude). Standing waves are fundamental to musical instruments and many resonant systems.",
                    es: "Las ondas estacionarias se forman cuando dos ondas idénticas que viajan en direcciones opuestas interfieren. Esto crea patrones estacionarios con nodos (amplitud cero) y antinodos (amplitud máxima). Las ondas estacionarias son fundamentales para los instrumentos musicales y muchos sistemas resonantes.",
                    de: "Stehende Wellen entstehen, wenn zwei identische Wellen, die in entgegengesetzte Richtungen laufen, interferieren. Dies erzeugt stationäre Muster mit Knoten (null Amplitude) und Bäuchen (maximale Amplitude). Stehende Wellen sind grundlegend für Musikinstrumente und viele Resonanzsysteme.",
                    nl: "Staande golven vormen zich wanneer twee identieke golven die in tegengestelde richtingen reizen interfereren. Dit creëert stationaire patronen met knopen (nul amplitude) en buiken (maximum amplitude). Staande golven zijn fundamenteel voor muziekinstrumenten en veel resonante systemen."
                }
            },
            {
                question: {
                    en: "What is beats in wave physics?",
                    es: "¿Qué son los batimientos en física de ondas?",
                    de: "Was sind Schwebungen in der Wellenphysik?",
                    nl: "Wat is zweving in golfnatuurkunde?"
                },
                options: [
                    {
                        en: "The periodic variation in amplitude when two waves of slightly different frequencies interfere",
                        es: "La variación periódica en amplitud cuando dos ondas de frecuencias ligeramente diferentes interfieren",
                        de: "Die periodische Amplitudenvariation, wenn zwei Wellen mit leicht unterschiedlichen Frequenzen interferieren",
                        nl: "De periodieke variatie in amplitude wanneer twee golven van enigszins verschillende frequenties interfereren"
                    },
                    {
                        en: "The rhythmic tapping sound produced by percussion instruments",
                        es: "El sonido de golpeteo rítmico producido por instrumentos de percusión",
                        de: "Das rhythmische Klopfgeräusch von Schlaginstrumenten",
                        nl: "Het ritmische tikkende geluid geproduceerd door percussie-instrumenten"
                    },
                    {
                        en: "The sudden increase in wave frequency during resonance",
                        es: "El aumento repentino en la frecuencia de onda durante la resonancia",
                        de: "Die plötzliche Frequenzsteigerung während der Resonanz",
                        nl: "De plotselinge toename in golffrequentie tijdens resonantie"
                    },
                    {
                        en: "The reflection of waves from multiple surfaces",
                        es: "La reflexión de ondas desde múltiples superficies",
                        de: "Die Reflexion von Wellen von mehreren Oberflächen",
                        nl: "De reflectie van golven van meerdere oppervlakken"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Beats occur when two waves of slightly different frequencies interfere, creating a periodic variation in amplitude. The beat frequency equals the difference between the two original frequencies. This phenomenon is used in tuning musical instruments and detecting small frequency differences.",
                    es: "Los batimientos ocurren cuando dos ondas de frecuencias ligeramente diferentes interfieren, creando una variación periódica en amplitud. La frecuencia de batimiento es igual a la diferencia entre las dos frecuencias originales. Este fenómeno se usa para afinar instrumentos musicales y detectar pequeñas diferencias de frecuencia.",
                    de: "Schwebungen treten auf, wenn zwei Wellen mit leicht unterschiedlichen Frequenzen interferieren und eine periodische Amplitudenvariation erzeugen. Die Schwebungsfrequenz entspricht der Differenz zwischen den beiden ursprünglichen Frequenzen. Dieses Phänomen wird zum Stimmen von Musikinstrumenten und zur Erkennung kleiner Frequenzunterschiede verwendet.",
                    nl: "Zweving treedt op wanneer twee golven van enigszins verschillende frequenties interfereren, wat een periodieke variatie in amplitude creëert. De zwevingsfrequentie is gelijk aan het verschil tussen de twee oorspronkelijke frequenties. Dit fenomeen wordt gebruikt bij het stemmen van muziekinstrumenten en het detecteren van kleine frequentieverschillen."
                }
            },
            {
                question: {
                    en: "What is the speed of sound in air at room temperature?",
                    es: "¿Cuál es la velocidad del sonido en el aire a temperatura ambiente?",
                    de: "Wie hoch ist die Schallgeschwindigkeit in Luft bei Raumtemperatur?",
                    nl: "Wat is de geluidssnelheid in lucht bij kamertemperatuur?"
                },
                options: [
                    {
                        en: "Approximately 343 m/s (about 1,125 ft/s)",
                        es: "Aproximadamente 343 m/s (alrededor de 1,125 ft/s)",
                        de: "Etwa 343 m/s (ungefähr 1.125 ft/s)",
                        nl: "Ongeveer 343 m/s (circa 1.125 ft/s)"
                    },
                    {
                        en: "Approximately 300,000,000 m/s (speed of light)",
                        es: "Aproximadamente 300,000,000 m/s (velocidad de la luz)",
                        de: "Etwa 300.000.000 m/s (Lichtgeschwindigkeit)",
                        nl: "Ongeveer 300.000.000 m/s (lichtsnelheid)"
                    },
                    {
                        en: "Approximately 1,500 m/s (speed of sound in water)",
                        es: "Aproximadamente 1,500 m/s (velocidad del sonido en agua)",
                        de: "Etwa 1.500 m/s (Schallgeschwindigkeit in Wasser)",
                        nl: "Ongeveer 1.500 m/s (geluidssnelheid in water)"
                    },
                    {
                        en: "Approximately 100 m/s (typical vehicle speed)",
                        es: "Aproximadamente 100 m/s (velocidad típica de vehículo)",
                        de: "Etwa 100 m/s (typische Fahrzeuggeschwindigkeit)",
                        nl: "Ongeveer 100 m/s (typische voertuigsnelheid)"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Sound travels at approximately 343 m/s in air at 20°C (68°F). The speed varies with temperature - it increases by about 0.6 m/s for each degree Celsius increase. Sound travels much faster in denser media like water (~1,500 m/s) and steel (~5,000 m/s).",
                    es: "El sonido viaja a aproximadamente 343 m/s en aire a 20°C (68°F). La velocidad varía con la temperatura - aumenta aproximadamente 0.6 m/s por cada grado Celsius de aumento. El sonido viaja mucho más rápido en medios más densos como agua (~1,500 m/s) y acero (~5,000 m/s).",
                    de: "Schall bewegt sich mit etwa 343 m/s in Luft bei 20°C (68°F). Die Geschwindigkeit variiert mit der Temperatur - sie steigt um etwa 0,6 m/s pro Grad Celsius Anstieg. Schall bewegt sich viel schneller in dichteren Medien wie Wasser (~1.500 m/s) und Stahl (~5.000 m/s).",
                    nl: "Geluid reist met ongeveer 343 m/s in lucht bij 20°C (68°F). De snelheid varieert met temperatuur - het neemt toe met ongeveer 0,6 m/s per graad Celsius stijging. Geluid reist veel sneller in dichtere media zoals water (~1.500 m/s) en staal (~5.000 m/s)."
                }
            },
            {
                question: {
                    en: "What determines the pitch of a sound wave?",
                    es: "¿Qué determina el tono de una onda sonora?",
                    de: "Was bestimmt die Tonhöhe einer Schallwelle?",
                    nl: "Wat bepaalt de toonhoogte van een geluidsgolf?"
                },
                options: [
                    {
                        en: "The frequency of the sound wave - higher frequency means higher pitch",
                        es: "La frecuencia de la onda sonora - mayor frecuencia significa tono más alto",
                        de: "Die Frequenz der Schallwelle - höhere Frequenz bedeutet höhere Tonhöhe",
                        nl: "De frequentie van de geluidsgolf - hogere frequentie betekent hogere toonhoogte"
                    },
                    {
                        en: "The amplitude of the sound wave - larger amplitude means higher pitch",
                        es: "La amplitud de la onda sonora - mayor amplitud significa tono más alto",
                        de: "Die Amplitude der Schallwelle - größere Amplitude bedeutet höhere Tonhöhe",
                        nl: "De amplitude van de geluidsgolf - grotere amplitude betekent hogere toonhoogte"
                    },
                    {
                        en: "The speed of the sound wave - faster waves have higher pitch",
                        es: "La velocidad de la onda sonora - ondas más rápidas tienen tono más alto",
                        de: "Die Geschwindigkeit der Schallwelle - schnellere Wellen haben höhere Tonhöhe",
                        nl: "De snelheid van de geluidsgolf - snellere golven hebben hogere toonhoogte"
                    },
                    {
                        en: "The wavelength only - shorter wavelengths are always higher pitch",
                        es: "Solo la longitud de onda - longitudes de onda más cortas siempre son de tono más alto",
                        de: "Nur die Wellenlänge - kürzere Wellenlängen sind immer höhere Tonhöhe",
                        nl: "Alleen de golflengte - kortere golflengtes zijn altijd hogere toonhoogte"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Pitch is determined by the frequency of sound waves. Higher frequency waves (more oscillations per second) produce higher pitch sounds, while lower frequency waves produce lower pitch sounds. Amplitude determines loudness, not pitch. Wavelength and frequency are inversely related through the wave equation v = fλ.",
                    es: "El tono está determinado por la frecuencia de las ondas sonoras. Ondas de mayor frecuencia (más oscilaciones por segundo) producen sonidos de tono más alto, mientras que ondas de menor frecuencia producen sonidos de tono más bajo. La amplitud determina el volumen, no el tono. La longitud de onda y la frecuencia están inversamente relacionadas a través de la ecuación de onda v = fλ.",
                    de: "Tonhöhe wird durch die Frequenz von Schallwellen bestimmt. Höhere Frequenzwellen (mehr Schwingungen pro Sekunde) erzeugen höhere Töne, während niedrigere Frequenzwellen tiefere Töne erzeugen. Amplitude bestimmt Lautstärke, nicht Tonhöhe. Wellenlänge und Frequenz sind durch die Wellengleichung v = fλ umgekehrt proportional verknüpft.",
                    nl: "Toonhoogte wordt bepaald door de frequentie van geluidsgolven. Hogere frequentie golven (meer oscillaties per seconde) produceren hogere tonen, terwijl lagere frequentie golven lagere tonen produceren. Amplitude bepaalt luidheid, niet toonhoogte. Golflengte en frequentie zijn omgekeerd gerelateerd via de golfvergelijking v = fλ."
                }
            },
            {
                question: {
                    en: "What is the fundamental frequency of a vibrating string?",
                    es: "¿Cuál es la frecuencia fundamental de una cuerda vibrante?",
                    de: "Was ist die Grundfrequenz einer schwingenden Saite?",
                    nl: "Wat is de grondfrequentie van een trillende snaar?"
                },
                options: [
                    {
                        en: "The lowest frequency at which the string can vibrate, with wavelength λ = 2L",
                        es: "La frecuencia más baja a la cual la cuerda puede vibrar, con longitud de onda λ = 2L",
                        de: "Die niedrigste Frequenz, bei der die Saite schwingen kann, mit Wellenlänge λ = 2L",
                        nl: "De laagste frequentie waarbij de snaar kan trillen, met golflengte λ = 2L"
                    },
                    {
                        en: "The highest frequency the string can produce without breaking",
                        es: "La frecuencia más alta que la cuerda puede producir sin romperse",
                        de: "Die höchste Frequenz, die die Saite erzeugen kann, ohne zu reißen",
                        nl: "De hoogste frequentie die de snaar kan produceren zonder te breken"
                    },
                    {
                        en: "The frequency that produces the loudest sound",
                        es: "La frecuencia que produce el sonido más fuerte",
                        de: "Die Frequenz, die den lautesten Ton erzeugt",
                        nl: "De frequentie die het luidste geluid produceert"
                    },
                    {
                        en: "The average of all possible frequencies the string can produce",
                        es: "El promedio de todas las frecuencias posibles que la cuerda puede producir",
                        de: "Der Durchschnitt aller möglichen Frequenzen, die die Saite erzeugen kann",
                        nl: "Het gemiddelde van alle mogelijke frequenties die de snaar kan produceren"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The fundamental frequency is the lowest frequency at which a string vibrates, creating a standing wave with wavelength equal to twice the string length (λ = 2L). This corresponds to one half-wavelength fitting along the string length, with nodes at both ends and one antinode in the middle.",
                    es: "La frecuencia fundamental es la frecuencia más baja a la cual vibra una cuerda, creando una onda estacionaria con longitud de onda igual a dos veces la longitud de la cuerda (λ = 2L). Esto corresponde a una media longitud de onda que cabe a lo largo de la longitud de la cuerda, con nodos en ambos extremos y un antinodo en el medio.",
                    de: "Die Grundfrequenz ist die niedrigste Frequenz, bei der eine Saite schwingt und eine stehende Welle mit einer Wellenlänge erzeugt, die doppelt so lang wie die Saite ist (λ = 2L). Dies entspricht einer halben Wellenlänge, die entlang der Saitenlänge passt, mit Knoten an beiden Enden und einem Bauch in der Mitte.",
                    nl: "De grondfrequentie is de laagste frequentie waarbij een snaar trilt, wat een staande golf creëert met golflengte gelijk aan twee keer de snaarlengte (λ = 2L). Dit komt overeen met een halve golflengte die past langs de snaarlengte, met knopen aan beide uiteinden en een buik in het midden."
                }
            },
            {
                question: {
                    en: "What is phase in wave motion?",
                    es: "¿Qué es la fase en el movimiento ondulatorio?",
                    de: "Was ist Phase in der Wellenbewegung?",
                    nl: "Wat is fase in golfbeweging?"
                },
                options: [
                    {
                        en: "A measure of how far a wave has progressed through its cycle at a given point and time",
                        es: "Una medida de qué tan lejos ha progresado una onda a través de su ciclo en un punto y tiempo dados",
                        de: "Ein Maß dafür, wie weit eine Welle durch ihren Zyklus an einem gegebenen Punkt und Zeit fortgeschritten ist",
                        nl: "Een maat voor hoe ver een golf is gevorderd door zijn cyclus op een gegeven punt en tijd"
                    },
                    {
                        en: "The physical state of matter through which the wave travels",
                        es: "El estado físico de la materia a través del cual viaja la onda",
                        de: "Der physische Zustand der Materie, durch den die Welle reist",
                        nl: "De fysieke toestand van materie waardoor de golf reist"
                    },
                    {
                        en: "The time required for one complete wavelength to pass a point",
                        es: "El tiempo requerido para que una longitud de onda completa pase por un punto",
                        de: "Die Zeit, die erforderlich ist, damit eine vollständige Wellenlänge einen Punkt passiert",
                        nl: "De tijd die nodig is voor een complete golflengte om een punt te passeren"
                    },
                    {
                        en: "The maximum displacement of the wave from its equilibrium position",
                        es: "El desplazamiento máximo de la onda desde su posición de equilibrio",
                        de: "Die maximale Auslenkung der Welle von ihrer Gleichgewichtsposition",
                        nl: "De maximale verplaatsing van de golf van zijn evenwichtspositie"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Phase describes the position of a wave at a particular point in its oscillation cycle, typically measured in degrees (0° to 360°) or radians (0 to 2π). Two waves are 'in phase' when their peaks and troughs align, and 'out of phase' when they don't. Phase determines interference patterns.",
                    es: "La fase describe la posición de una onda en un punto particular de su ciclo de oscilación, típicamente medida en grados (0° a 360°) o radianes (0 a 2π). Dos ondas están 'en fase' cuando sus picos y valles se alinean, y 'fuera de fase' cuando no lo hacen. La fase determina los patrones de interferencia.",
                    de: "Phase beschreibt die Position einer Welle an einem bestimmten Punkt ihres Schwingungszyklus, typischerweise gemessen in Grad (0° bis 360°) oder Radiant (0 bis 2π). Zwei Wellen sind 'in Phase', wenn ihre Spitzen und Täler ausgerichtet sind, und 'außer Phase', wenn nicht. Phase bestimmt Interferenzmuster.",
                    nl: "Fase beschrijft de positie van een golf op een bepaald punt in zijn oscillatiecyclus, typisch gemeten in graden (0° tot 360°) of radialen (0 tot 2π). Twee golven zijn 'in fase' wanneer hun pieken en dalen uitgelijnd zijn, en 'uit fase' wanneer ze dat niet zijn. Fase bepaalt interferentiepatronen."
                }
            },
            {
                question: {
                    en: "What is the period of a wave?",
                    es: "¿Cuál es el período de una onda?",
                    de: "Was ist die Periode einer Welle?",
                    nl: "Wat is de periode van een golf?"
                },
                options: [
                    {
                        en: "The time taken for one complete oscillation or wave cycle (T = 1/f)",
                        es: "El tiempo tomado para una oscilación completa o ciclo de onda (T = 1/f)",
                        de: "Die Zeit für eine vollständige Schwingung oder einen Wellenzyklus (T = 1/f)",
                        nl: "De tijd genomen voor één complete oscillatie of golfcyclus (T = 1/f)"
                    },
                    {
                        en: "The distance between two consecutive wave peaks",
                        es: "La distancia entre dos picos de onda consecutivos",
                        de: "Der Abstand zwischen zwei aufeinanderfolgenden Wellenbergen",
                        nl: "De afstand tussen twee opeenvolgende golfpieken"
                    },
                    {
                        en: "The maximum displacement of the wave from equilibrium",
                        es: "El desplazamiento máximo de la onda desde el equilibrio",
                        de: "Die maximale Auslenkung der Welle vom Gleichgewicht",
                        nl: "De maximale verplaatsing van de golf van evenwicht"
                    },
                    {
                        en: "The speed at which the wave travels through the medium",
                        es: "La velocidad a la cual la onda viaja a través del medio",
                        de: "Die Geschwindigkeit, mit der die Welle durch das Medium reist",
                        nl: "De snelheid waarmee de golf door het medium reist"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The period (T) is the time required for one complete wave cycle or oscillation. It's the reciprocal of frequency: T = 1/f. If a wave has a frequency of 100 Hz, its period is 0.01 seconds. Period is measured in seconds and represents the temporal aspect of wave motion.",
                    es: "El período (T) es el tiempo requerido para un ciclo de onda completo u oscilación. Es el recíproco de la frecuencia: T = 1/f. Si una onda tiene una frecuencia de 100 Hz, su período es 0.01 segundos. El período se mide en segundos y representa el aspecto temporal del movimiento ondulatorio.",
                    de: "Die Periode (T) ist die Zeit, die für einen vollständigen Wellenzyklus oder eine Schwingung benötigt wird. Sie ist der Kehrwert der Frequenz: T = 1/f. Wenn eine Welle eine Frequenz von 100 Hz hat, beträgt ihre Periode 0,01 Sekunden. Die Periode wird in Sekunden gemessen und repräsentiert den zeitlichen Aspekt der Wellenbewegung.",
                    nl: "De periode (T) is de tijd die nodig is voor één complete golfcyclus of oscillatie. Het is het omgekeerde van frequentie: T = 1/f. Als een golf een frequentie van 100 Hz heeft, is zijn periode 0,01 seconden. Periode wordt gemeten in seconden en vertegenwoordigt het temporele aspect van golfbeweging."
                }
            },
            {
                question: {
                    en: "What causes wave attenuation?",
                    es: "¿Qué causa la atenuación de ondas?",
                    de: "Was verursacht Wellendämpfung?",
                    nl: "Wat veroorzaakt golfverzwakking?"
                },
                options: [
                    {
                        en: "Energy loss due to friction, absorption, and scattering as the wave travels through a medium",
                        es: "Pérdida de energía debido a fricción, absorción y dispersión mientras la onda viaja a través de un medio",
                        de: "Energieverlust durch Reibung, Absorption und Streuung, während die Welle durch ein Medium reist",
                        nl: "Energieverlies door wrijving, absorptie en verstrooiing terwijl de golf door een medium reist"
                    },
                    {
                        en: "The natural decay of wave frequency over time",
                        es: "La descomposición natural de la frecuencia de onda con el tiempo",
                        de: "Der natürliche Zerfall der Wellenfrequenz über die Zeit",
                        nl: "Het natuurlijke verval van golffrequentie over tijd"
                    },
                    {
                        en: "The increase in wave speed causing amplitude reduction",
                        es: "El aumento en la velocidad de onda causando reducción de amplitud",
                        de: "Die Zunahme der Wellengeschwindigkeit, die Amplitudenreduktion verursacht",
                        nl: "De toename in golfsnelheid die amplitudevermindering veroorzaakt"
                    },
                    {
                        en: "The interference with other waves in the medium",
                        es: "La interferencia con otras ondas en el medio",
                        de: "Die Interferenz mit anderen Wellen im Medium",
                        nl: "De interferentie met andere golven in het medium"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Wave attenuation is the gradual loss of wave energy as it propagates through a medium. This occurs due to various mechanisms: absorption (energy converted to heat), scattering (energy redirected), and geometric spreading (energy distributed over larger areas). Different media have different attenuation coefficients.",
                    es: "La atenuación de ondas es la pérdida gradual de energía de onda mientras se propaga a través de un medio. Esto ocurre debido a varios mecanismos: absorción (energía convertida en calor), dispersión (energía redirigida), y dispersión geométrica (energía distribuida sobre áreas más grandes). Diferentes medios tienen diferentes coeficientes de atenuación.",
                    de: "Wellendämpfung ist der allmähliche Verlust von Wellenenergie, während sie sich durch ein Medium ausbreitet. Dies geschieht durch verschiedene Mechanismen: Absorption (Energie in Wärme umgewandelt), Streuung (Energie umgeleitet), und geometrische Ausbreitung (Energie über größere Bereiche verteilt). Verschiedene Medien haben unterschiedliche Dämpfungskoeffizienten.",
                    nl: "Golfverzwakking is het geleidelijke verlies van golfenergie terwijl het zich door een medium voortplant. Dit treedt op door verschillende mechanismen: absorptie (energie omgezet in warmte), verstrooiing (energie omgeleid), en geometrische spreiding (energie verdeeld over grotere gebieden). Verschillende media hebben verschillende verzwakkingscoëfficiënten."
                }
            },
            {
                question: {
                    en: "What is the relationship between tension and wave speed in a string?",
                    es: "¿Cuál es la relación entre tensión y velocidad de onda en una cuerda?",
                    de: "Wie ist die Beziehung zwischen Spannung und Wellengeschwindigkeit in einer Saite?",
                    nl: "Wat is de relatie tussen spanning en golfsnelheid in een snaar?"
                },
                options: [
                    {
                        en: "Wave speed increases with the square root of tension: v = √(T/μ)",
                        es: "La velocidad de onda aumenta con la raíz cuadrada de la tensión: v = √(T/μ)",
                        de: "Wellengeschwindigkeit steigt mit der Quadratwurzel der Spannung: v = √(T/μ)",
                        nl: "Golfsnelheid neemt toe met de vierkantswortel van spanning: v = √(T/μ)"
                    },
                    {
                        en: "Wave speed is directly proportional to tension: v = T/μ",
                        es: "La velocidad de onda es directamente proporcional a la tensión: v = T/μ",
                        de: "Wellengeschwindigkeit ist direkt proportional zur Spannung: v = T/μ",
                        nl: "Golfsnelheid is direct evenredig met spanning: v = T/μ"
                    },
                    {
                        en: "Wave speed is inversely proportional to tension: v = μ/T",
                        es: "La velocidad de onda es inversamente proporcional a la tensión: v = μ/T",
                        de: "Wellengeschwindigkeit ist umgekehrt proportional zur Spannung: v = μ/T",
                        nl: "Golfsnelheid is omgekeerd evenredig met spanning: v = μ/T"
                    },
                    {
                        en: "Wave speed is independent of tension",
                        es: "La velocidad de onda es independiente de la tensión",
                        de: "Wellengeschwindigkeit ist unabhängig von der Spannung",
                        nl: "Golfsnelheid is onafhankelijk van spanning"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "For waves on a string, the wave speed v = √(T/μ), where T is the tension and μ is the linear mass density (mass per unit length). Higher tension increases wave speed, while greater mass density decreases it. This relationship explains why guitar strings are tuned by adjusting tension.",
                    es: "Para ondas en una cuerda, la velocidad de onda v = √(T/μ), donde T es la tensión y μ es la densidad de masa lineal (masa por unidad de longitud). Mayor tensión aumenta la velocidad de onda, mientras que mayor densidad de masa la disminuye. Esta relación explica por qué las cuerdas de guitarra se afinan ajustando la tensión.",
                    de: "Für Wellen auf einer Saite gilt v = √(T/μ), wobei T die Spannung und μ die lineare Massendichte (Masse pro Längeneinheit) ist. Höhere Spannung erhöht die Wellengeschwindigkeit, während größere Massendichte sie verringert. Diese Beziehung erklärt, warum Gitarrensaiten durch Spannungsanpassung gestimmt werden.",
                    nl: "Voor golven op een snaar geldt v = √(T/μ), waarbij T de spanning is en μ de lineaire massadichtheid (massa per lengte-eenheid). Hogere spanning verhoogt de golfsnelheid, terwijl grotere massadichtheid deze verlaagt. Deze relatie verklaart waarom gitaarsnaren worden gestemd door spanning aan te passen."
                }
            },
            {
                question: {
                    en: "What is wave polarization?",
                    es: "¿Qué es la polarización de ondas?",
                    de: "Was ist Wellenpolarisation?",
                    nl: "Wat is golfpolarisatie?"
                },
                options: [
                    {
                        en: "The orientation of oscillations in transverse waves, perpendicular to propagation direction",
                        es: "La orientación de oscilaciones en ondas transversales, perpendicular a la dirección de propagación",
                        de: "Die Ausrichtung von Schwingungen in Transversalwellen, senkrecht zur Ausbreitungsrichtung",
                        nl: "De oriëntatie van oscillaties in transversale golven, loodrecht op de voortplantingsrichting"
                    },
                    {
                        en: "The separation of waves into positive and negative charges",
                        es: "La separación de ondas en cargas positivas y negativas",
                        de: "Die Trennung von Wellen in positive und negative Ladungen",
                        nl: "De scheiding van golven in positieve en negatieve ladingen"
                    },
                    {
                        en: "The filtering of waves based on their frequency content",
                        es: "El filtrado de ondas basado en su contenido de frecuencia",
                        de: "Die Filterung von Wellen basierend auf ihrem Frequenzinhalt",
                        nl: "Het filteren van golven gebaseerd op hun frequentie-inhoud"
                    },
                    {
                        en: "The magnetic alignment of wave particles in a field",
                        es: "La alineación magnética de partículas de onda en un campo",
                        de: "Die magnetische Ausrichtung von Wellenteilchen in einem Feld",
                        nl: "De magnetische uitlijning van golfdeeltjes in een veld"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Wave polarization describes the orientation of oscillations in transverse waves. Linear polarization occurs when oscillations are confined to one plane, circular when they rotate, and elliptical for intermediate cases. Only transverse waves can be polarized - longitudinal waves cannot.",
                    es: "La polarización de ondas describe la orientación de oscilaciones en ondas transversales. La polarización lineal ocurre cuando las oscilaciones están confinadas a un plano, circular cuando rotan, y elíptica para casos intermedios. Solo las ondas transversales pueden polarizarse - las ondas longitudinales no pueden.",
                    de: "Wellenpolarisation beschreibt die Ausrichtung von Schwingungen in Transversalwellen. Lineare Polarisation tritt auf, wenn Schwingungen auf eine Ebene beschränkt sind, zirkuläre wenn sie rotieren, und elliptische für Zwischenfälle. Nur Transversalwellen können polarisiert werden - Longitudinalwellen nicht.",
                    nl: "Golfpolarisatie beschrijft de oriëntatie van oscillaties in transversale golven. Lineaire polarisatie treedt op wanneer oscillaties beperkt zijn tot één vlak, circulair wanneer ze roteren, en elliptisch voor tussengevallen. Alleen transversale golven kunnen gepolariseerd worden - longitudinale golven niet."
                }
            },
            {
                question: {
                    en: "What is wave dispersion?",
                    es: "¿Qué es la dispersión de ondas?",
                    de: "Was ist Wellendispersion?",
                    nl: "Wat is golfdispersie?"
                },
                options: [
                    {
                        en: "The dependence of wave speed on frequency, causing different frequencies to travel at different speeds",
                        es: "La dependencia de la velocidad de onda en la frecuencia, causando que diferentes frecuencias viajen a diferentes velocidades",
                        de: "Die Abhängigkeit der Wellengeschwindigkeit von der Frequenz, wodurch verschiedene Frequenzen mit unterschiedlichen Geschwindigkeiten reisen",
                        nl: "De afhankelijkheid van golfsnelheid van frequentie, waardoor verschillende frequenties met verschillende snelheden reizen"
                    },
                    {
                        en: "The spreading out of wave energy over a large area",
                        es: "La expansión de energía de onda sobre un área grande",
                        de: "Die Ausbreitung von Wellenenergie über ein großes Gebiet",
                        nl: "Het uitspreiden van golfenergie over een groot gebied"
                    },
                    {
                        en: "The random scattering of waves in multiple directions",
                        es: "La dispersión aleatoria de ondas en múltiples direcciones",
                        de: "Die zufällige Streuung von Wellen in mehrere Richtungen",
                        nl: "De willekeurige verstrooiing van golven in meerdere richtingen"
                    },
                    {
                        en: "The conversion of one wave type to another",
                        es: "La conversión de un tipo de onda a otro",
                        de: "Die Umwandlung eines Wellentyps in einen anderen",
                        nl: "De conversie van het ene golftype naar het andere"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Wave dispersion occurs when wave speed depends on frequency, causing a wave packet to spread out as different frequency components travel at different speeds. This explains why white light separates into colors through a prism and why wave pulses change shape over distance.",
                    es: "La dispersión de ondas ocurre cuando la velocidad de onda depende de la frecuencia, causando que un paquete de ondas se expanda ya que diferentes componentes de frecuencia viajan a diferentes velocidades. Esto explica por qué la luz blanca se separa en colores a través de un prisma y por qué los pulsos de onda cambian de forma con la distancia.",
                    de: "Wellendispersion tritt auf, wenn die Wellengeschwindigkeit von der Frequenz abhängt, wodurch sich ein Wellenpaket ausbreitet, da verschiedene Frequenzkomponenten mit unterschiedlichen Geschwindigkeiten reisen. Dies erklärt, warum weißes Licht durch ein Prisma in Farben getrennt wird und warum Wellenpulse ihre Form über die Entfernung ändern.",
                    nl: "Golfdispersie treedt op wanneer golfsnelheid afhangt van frequentie, waardoor een golfpakket uitspreidt omdat verschillende frequentiecomponenten met verschillende snelheden reizen. Dit verklaart waarom wit licht scheidt in kleuren door een prisma en waarom golfpulsen van vorm veranderen over afstand."
                }
            },
            {
                question: {
                    en: "What is the acoustic intensity level in decibels for a sound with intensity I?",
                    es: "¿Cuál es el nivel de intensidad acústica en decibelios para un sonido con intensidad I?",
                    de: "Was ist der akustische Intensitätspegel in Dezibel für einen Schall mit Intensität I?",
                    nl: "Wat is het akoestische intensiteitsniveau in decibel voor een geluid met intensiteit I?"
                },
                options: [
                    {
                        en: "β = 10 log₁₀(I/I₀), where I₀ = 10⁻¹² W/m²",
                        es: "β = 10 log₁₀(I/I₀), donde I₀ = 10⁻¹² W/m²",
                        de: "β = 10 log₁₀(I/I₀), wobei I₀ = 10⁻¹² W/m²",
                        nl: "β = 10 log₁₀(I/I₀), waarbij I₀ = 10⁻¹² W/m²"
                    },
                    {
                        en: "β = 20 log₁₀(I/I₀), where I₀ = 1 W/m²",
                        es: "β = 20 log₁₀(I/I₀), donde I₀ = 1 W/m²",
                        de: "β = 20 log₁₀(I/I₀), wobei I₀ = 1 W/m²",
                        nl: "β = 20 log₁₀(I/I₀), waarbij I₀ = 1 W/m²"
                    },
                    {
                        en: "β = log₁₀(I), with no reference intensity",
                        es: "β = log₁₀(I), sin intensidad de referencia",
                        de: "β = log₁₀(I), ohne Referenzintensität",
                        nl: "β = log₁₀(I), zonder referentie-intensiteit"
                    },
                    {
                        en: "β = I × 10⁻¹², directly proportional to intensity",
                        es: "β = I × 10⁻¹², directamente proporcional a la intensidad",
                        de: "β = I × 10⁻¹², direkt proportional zur Intensität",
                        nl: "β = I × 10⁻¹², direct evenredig met intensiteit"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The decibel scale uses β = 10 log₁₀(I/I₀) where I₀ = 10⁻¹² W/m² is the threshold of hearing. This logarithmic scale means each 10 dB increase represents a 10-fold increase in intensity. A whisper is ~30 dB, normal conversation ~60 dB, rock concert ~110 dB.",
                    es: "La escala de decibelios usa β = 10 log₁₀(I/I₀) donde I₀ = 10⁻¹² W/m² es el umbral de audición. Esta escala logarítmica significa que cada aumento de 10 dB representa un aumento de 10 veces en intensidad. Un susurro es ~30 dB, conversación normal ~60 dB, concierto de rock ~110 dB.",
                    de: "Die Dezibel-Skala verwendet β = 10 log₁₀(I/I₀) wobei I₀ = 10⁻¹² W/m² die Hörschwelle ist. Diese logarithmische Skala bedeutet, dass jede 10 dB Erhöhung eine 10-fache Intensitätssteigerung darstellt. Ein Flüstern ist ~30 dB, normale Unterhaltung ~60 dB, Rockkonzert ~110 dB.",
                    nl: "De decibelschaal gebruikt β = 10 log₁₀(I/I₀) waarbij I₀ = 10⁻¹² W/m² de gehoordrempel is. Deze logaritmische schaal betekent dat elke 10 dB stijging een 10-voudige toename in intensiteit vertegenwoordigt. Een fluistering is ~30 dB, normaal gesprek ~60 dB, rockconcert ~110 dB."
                }
            },
            {
                question: {
                    en: "What is wave impedance?",
                    es: "¿Qué es la impedancia de onda?",
                    de: "Was ist Wellenimpedanz?",
                    nl: "Wat is golfimpedantie?"
                },
                options: [
                    {
                        en: "The ratio of pressure amplitude to particle velocity amplitude in a wave (Z = ρv)",
                        es: "La relación entre amplitud de presión y amplitud de velocidad de partícula en una onda (Z = ρv)",
                        de: "Das Verhältnis von Druckamplitude zu Teilchengeschwindigkeitsamplitude in einer Welle (Z = ρv)",
                        nl: "De verhouding van drukamplitude tot deeltjessnelheidsamplitude in een golf (Z = ρv)"
                    },
                    {
                        en: "The resistance to wave propagation due to medium viscosity",
                        es: "La resistencia a la propagación de ondas debido a la viscosidad del medio",
                        de: "Der Widerstand gegen Wellenausbreitung aufgrund der Mediumviskosität",
                        nl: "De weerstand tegen golfvoortplanting door mediumviscositeit"
                    },
                    {
                        en: "The electrical resistance of the wave-conducting material",
                        es: "La resistencia eléctrica del material conductor de ondas",
                        de: "Der elektrische Widerstand des wellenleitenden Materials",
                        nl: "De elektrische weerstand van het golfgeleidende materiaal"
                    },
                    {
                        en: "The phase delay between incident and transmitted waves",
                        es: "El retraso de fase entre ondas incidentes y transmitidas",
                        de: "Die Phasenverzögerung zwischen einfallenden und übertragenen Wellen",
                        nl: "De fasevertraging tussen invallende en doorgelaten golven"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Wave impedance Z = ρv is the ratio of pressure amplitude to particle velocity amplitude, where ρ is medium density and v is wave speed. It determines how much of a wave is reflected or transmitted at boundaries between different media. Impedance matching is crucial in acoustics and optics.",
                    es: "La impedancia de onda Z = ρv es la relación entre amplitud de presión y amplitud de velocidad de partícula, donde ρ es la densidad del medio y v es la velocidad de onda. Determina cuánta onda se refleja o transmite en límites entre diferentes medios. El emparejamiento de impedancia es crucial en acústica y óptica.",
                    de: "Wellenimpedanz Z = ρv ist das Verhältnis von Druckamplitude zu Teilchengeschwindigkeitsamplitude, wobei ρ die Mediumdichte und v die Wellengeschwindigkeit ist. Sie bestimmt, wie viel einer Welle an Grenzen zwischen verschiedenen Medien reflektiert oder übertragen wird. Impedanzanpassung ist entscheidend in Akustik und Optik.",
                    nl: "Golfimpedantie Z = ρv is de verhouding van drukamplitude tot deeltjessnelheidsamplitude, waarbij ρ de mediumdichtheid is en v de golfsnelheid. Het bepaalt hoeveel van een golf wordt gereflecteerd of doorgelaten aan grenzen tussen verschillende media. Impedantie-aanpassing is cruciaal in akoestiek en optica."
                }
            },
            {
                question: {
                    en: "What is the group velocity of a wave packet?",
                    es: "¿Cuál es la velocidad de grupo de un paquete de ondas?",
                    de: "Was ist die Gruppengeschwindigkeit eines Wellenpakets?",
                    nl: "Wat is de groepsnelheid van een golfpakket?"
                },
                options: [
                    {
                        en: "The velocity at which the envelope or modulation of a wave packet travels (vₓ = dω/dk)",
                        es: "La velocidad a la cual la envolvente o modulación de un paquete de ondas viaja (vₓ = dω/dk)",
                        de: "Die Geschwindigkeit, mit der die Hüllkurve oder Modulation eines Wellenpakets reist (vₓ = dω/dk)",
                        nl: "De snelheid waarmee de envelop of modulatie van een golfpakket reist (vₓ = dω/dk)"
                    },
                    {
                        en: "The average speed of all individual wave components in the packet",
                        es: "La velocidad promedio de todos los componentes de onda individuales en el paquete",
                        de: "Die Durchschnittsgeschwindigkeit aller einzelnen Wellenkomponenten im Paket",
                        nl: "De gemiddelde snelheid van alle individuele golfcomponenten in het pakket"
                    },
                    {
                        en: "The speed of the fastest wave component in the packet",
                        es: "La velocidad del componente de onda más rápido en el paquete",
                        de: "Die Geschwindigkeit der schnellsten Wellenkomponente im Paket",
                        nl: "De snelheid van de snelste golfcomponent in het pakket"
                    },
                    {
                        en: "The speed at which wave energy is absorbed by the medium",
                        es: "La velocidad a la cual la energía de onda es absorbida por el medio",
                        de: "Die Geschwindigkeit, mit der Wellenenergie vom Medium absorbiert wird",
                        nl: "De snelheid waarmee golfenergie door het medium wordt geabsorbeerd"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Group velocity vₓ = dω/dk is the speed at which the envelope of a wave packet travels, where ω is angular frequency and k is wave number. In dispersive media, group velocity differs from phase velocity and represents the speed of energy or information transmission.",
                    es: "La velocidad de grupo vₓ = dω/dk es la velocidad a la cual viaja la envolvente de un paquete de ondas, donde ω es la frecuencia angular y k es el número de onda. En medios dispersivos, la velocidad de grupo difiere de la velocidad de fase y representa la velocidad de transmisión de energía o información.",
                    de: "Gruppengeschwindigkeit vₓ = dω/dk ist die Geschwindigkeit, mit der die Hüllkurve eines Wellenpakets reist, wobei ω die Winkelfrequenz und k die Wellenzahl ist. In dispersiven Medien unterscheidet sich die Gruppengeschwindigkeit von der Phasengeschwindigkeit und repräsentiert die Geschwindigkeit der Energie- oder Informationsübertragung.",
                    nl: "Groepsnelheid vₓ = dω/dk is de snelheid waarmee de envelop van een golfpakket reist, waarbij ω de hoekfrequentie is en k het golfgetal. In dispersieve media verschilt groepsnelheid van fasesnelheid en vertegenwoordigt de snelheid van energie- of informatietransmissie."
                }
            },
            {
                question: {
                    en: "What is a Fourier transform in wave analysis?",
                    es: "¿Qué es una transformada de Fourier en análisis de ondas?",
                    de: "Was ist eine Fourier-Transformation in der Wellenanalyse?",
                    nl: "Wat is een Fourier-transformatie in golfanalyse?"
                },
                options: [
                    {
                        en: "A mathematical tool that decomposes a complex wave into its constituent frequency components",
                        es: "Una herramienta matemática que descompone una onda compleja en sus componentes de frecuencia constituyentes",
                        de: "Ein mathematisches Werkzeug, das eine komplexe Welle in ihre konstituierenden Frequenzkomponenten zerlegt",
                        nl: "Een wiskundig hulpmiddel dat een complexe golf ontleedt in zijn samenstellende frequentiecomponenten"
                    },
                    {
                        en: "A method for measuring the speed of wave propagation",
                        es: "Un método para medir la velocidad de propagación de ondas",
                        de: "Eine Methode zur Messung der Wellenausbreitungsgeschwindigkeit",
                        nl: "Een methode voor het meten van golfvoortplantingssnelheid"
                    },
                    {
                        en: "A technique for amplifying weak wave signals",
                        es: "Una técnica para amplificar señales de onda débiles",
                        de: "Eine Technik zur Verstärkung schwacher Wellensignale",
                        nl: "Een techniek voor het versterken van zwakke golfsignalen"
                    },
                    {
                        en: "A process for converting waves from one medium to another",
                        es: "Un proceso para convertir ondas de un medio a otro",
                        de: "Ein Prozess zur Umwandlung von Wellen von einem Medium zum anderen",
                        nl: "Een proces voor het converteren van golven van het ene naar het andere medium"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Fourier transform mathematically decomposes any complex waveform into its constituent sine and cosine waves of different frequencies and amplitudes. This reveals the frequency spectrum of the wave and is fundamental to signal processing, acoustics, and quantum mechanics.",
                    es: "La transformada de Fourier descompone matemáticamente cualquier forma de onda compleja en sus ondas sinusoidales y cosenoidales constituyentes de diferentes frecuencias y amplitudes. Esto revela el espectro de frecuencia de la onda y es fundamental para el procesamiento de señales, acústica y mecánica cuántica.",
                    de: "Die Fourier-Transformation zerlegt mathematisch jede komplexe Wellenform in ihre konstituierenden Sinus- und Kosinuswellen verschiedener Frequenzen und Amplituden. Dies offenbart das Frequenzspektrum der Welle und ist grundlegend für Signalverarbeitung, Akustik und Quantenmechanik.",
                    nl: "De Fourier-transformatie ontleedt wiskundig elke complexe golfvorm in zijn samenstellende sinus- en cosinusgolven van verschillende frequenties en amplitudes. Dit onthult het frequentiespectrum van de golf en is fundamenteel voor signaalverwerking, akoestiek en kwantummechanica."
                }
            },
            {
                question: {
                    en: "What is the critical angle for total internal reflection?",
                    es: "¿Cuál es el ángulo crítico para la reflexión interna total?",
                    de: "Was ist der kritische Winkel für Totalreflexion?",
                    nl: "Wat is de kritische hoek voor totale interne reflectie?"
                },
                options: [
                    {
                        en: "θc = arcsin(n₂/n₁), where n₁ > n₂ and light travels from denser to less dense medium",
                        es: "θc = arcsin(n₂/n₁), donde n₁ > n₂ y la luz viaja de un medio más denso a uno menos denso",
                        de: "θc = arcsin(n₂/n₁), wobei n₁ > n₂ und Licht vom dichteren zum weniger dichten Medium reist",
                        nl: "θc = arcsin(n₂/n₁), waarbij n₁ > n₂ en licht reist van dichter naar minder dicht medium"
                    },
                    {
                        en: "θc = arccos(n₁/n₂), regardless of medium density relationship",
                        es: "θc = arccos(n₁/n₂), independientemente de la relación de densidad del medio",
                        de: "θc = arccos(n₁/n₂), unabhängig von der Mediumdichtebeziehung",
                        nl: "θc = arccos(n₁/n₂), ongeacht de mediumdichtheidsrelatie"
                    },
                    {
                        en: "θc = 45° for all material interfaces",
                        es: "θc = 45° para todas las interfaces de materiales",
                        de: "θc = 45° für alle Materialgrenzflächen",
                        nl: "θc = 45° voor alle materiaalinterfaces"
                    },
                    {
                        en: "θc = 90° - the angle of refraction",
                        es: "θc = 90° - el ángulo de refracción",
                        de: "θc = 90° - der Brechungswinkel",
                        nl: "θc = 90° - de brekingshoek"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Total internal reflection occurs when light travels from a denser to a less dense medium (n₁ > n₂) at an angle greater than the critical angle θc = arcsin(n₂/n₁). Beyond this angle, no light is refracted and 100% is reflected. This principle enables fiber optics and explains why diamonds sparkle.",
                    es: "La reflexión interna total ocurre cuando la luz viaja de un medio más denso a uno menos denso (n₁ > n₂) en un ángulo mayor que el ángulo crítico θc = arcsin(n₂/n₁). Más allá de este ángulo, no se refracta luz y el 100% se refleja. Este principio permite la fibra óptica y explica por qué brillan los diamantes.",
                    de: "Totalreflexion tritt auf, wenn Licht von einem dichteren zu einem weniger dichten Medium (n₁ > n₂) in einem Winkel größer als der kritische Winkel θc = arcsin(n₂/n₁) reist. Jenseits dieses Winkels wird kein Licht gebrochen und 100% wird reflektiert. Dieses Prinzip ermöglicht Glasfasern und erklärt, warum Diamanten funkeln.",
                    nl: "Totale interne reflectie treedt op wanneer licht reist van een dichter naar een minder dicht medium (n₁ > n₂) onder een hoek groter dan de kritische hoek θc = arcsin(n₂/n₁). Voorbij deze hoek wordt geen licht gebroken en wordt 100% gereflecteerd. Dit principe maakt glasvezel mogelijk en verklaart waarom diamanten fonkelen."
                }
            },
            {
                question: {
                    en: "What is the principle behind noise-canceling headphones?",
                    es: "¿Cuál es el principio detrás de los auriculares con cancelación de ruido?",
                    de: "Was ist das Prinzip hinter geräuschunterdrückenden Kopfhörern?",
                    nl: "Wat is het principe achter ruisonderdrukkende koptelefoons?"
                },
                options: [
                    {
                        en: "Destructive interference: generating sound waves 180° out of phase with ambient noise",
                        es: "Interferencia destructiva: generar ondas sonoras 180° fuera de fase con el ruido ambiental",
                        de: "Destruktive Interferenz: Erzeugung von Schallwellen 180° außer Phase mit Umgebungslärm",
                        nl: "Destructieve interferentie: geluidsgolven genereren die 180° uit fase zijn met omgevingsgeluid"
                    },
                    {
                        en: "Physical sound absorption using dense foam materials",
                        es: "Absorción física de sonido usando materiales de espuma densa",
                        de: "Physikalische Schallabsorption mit dichten Schaumstoffmaterialien",
                        nl: "Fysieke geluidsabsorptie met dichte schuimmaterialen"
                    },
                    {
                        en: "High-frequency sound masking to overwhelm noise",
                        es: "Enmascaramiento de sonido de alta frecuencia para sobrepasar el ruido",
                        de: "Hochfrequenz-Schallmaskierung zur Überwältigung von Lärm",
                        nl: "Hoogfrequente geluidsmaskering om geluid te overstemmen"
                    },
                    {
                        en: "Creating a vacuum chamber around the ear",
                        es: "Crear una cámara de vacío alrededor del oído",
                        de: "Erzeugung einer Vakuumkammer um das Ohr",
                        nl: "Het creëren van een vacuümkamer rond het oor"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Active noise cancellation uses microphones to detect ambient sound, then generates sound waves exactly 180° out of phase with the detected noise. When these waves combine, destructive interference cancels the original noise. This works best for low-frequency, constant sounds like airplane engines.",
                    es: "La cancelación activa de ruido usa micrófonos para detectar sonido ambiental, luego genera ondas sonoras exactamente 180° fuera de fase con el ruido detectado. Cuando estas ondas se combinan, la interferencia destructiva cancela el ruido original. Esto funciona mejor para sonidos constantes de baja frecuencia como motores de avión.",
                    de: "Aktive Geräuschunterdrückung verwendet Mikrofone zur Erkennung von Umgebungsschall und erzeugt dann Schallwellen exakt 180° außer Phase mit dem erkannten Lärm. Wenn sich diese Wellen kombinieren, hebt destruktive Interferenz den ursprünglichen Lärm auf. Dies funktioniert am besten bei niederfrequenten, konstanten Geräuschen wie Flugzeugtriebwerken.",
                    nl: "Actieve ruisonderdrukking gebruikt microfoons om omgevingsgeluid te detecteren, en genereert vervolgens geluidsgolven precies 180° uit fase met het gedetecteerde geluid. Wanneer deze golven combineren, onderdrukt destructieve interferentie het oorspronkelijke geluid. Dit werkt het best voor laagfrequente, constante geluiden zoals vliegtuigmotoren."
                }
            },
            {
                question: {
                    en: "What is the difference between coherent and incoherent waves?",
                    es: "¿Cuál es la diferencia entre ondas coherentes e incoherentes?",
                    de: "Was ist der Unterschied zwischen kohärenten und inkohärenten Wellen?",
                    nl: "Wat is het verschil tussen coherente en incoherente golven?"
                },
                options: [
                    {
                        en: "Coherent waves maintain constant phase relationships; incoherent waves have random, fluctuating phases",
                        es: "Las ondas coherentes mantienen relaciones de fase constantes; las ondas incoherentes tienen fases aleatorias y fluctuantes",
                        de: "Kohärente Wellen behalten konstante Phasenbeziehungen bei; inkohärente Wellen haben zufällige, schwankende Phasen",
                        nl: "Coherente golven behouden constante faserelaties; incoherente golven hebben willekeurige, fluctuerende fasen"
                    },
                    {
                        en: "Coherent waves are always louder than incoherent waves",
                        es: "Las ondas coherentes siempre son más fuertes que las ondas incoherentes",
                        de: "Kohärente Wellen sind immer lauter als inkohärente Wellen",
                        nl: "Coherente golven zijn altijd luider dan incoherente golven"
                    },
                    {
                        en: "Coherent waves travel faster through all media",
                        es: "Las ondas coherentes viajan más rápido a través de todos los medios",
                        de: "Kohärente Wellen reisen schneller durch alle Medien",
                        nl: "Coherente golven reizen sneller door alle media"
                    },
                    {
                        en: "Coherent waves can only exist in solid materials",
                        es: "Las ondas coherentes solo pueden existir en materiales sólidos",
                        de: "Kohärente Wellen können nur in festen Materialien existieren",
                        nl: "Coherente golven kunnen alleen bestaan in vaste materialen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Coherent waves maintain fixed phase relationships over time and space, allowing predictable interference patterns. Laser light is coherent. Incoherent waves have randomly varying phases, like light from an incandescent bulb. Coherence is essential for holography, interferometry, and many optical applications.",
                    es: "Las ondas coherentes mantienen relaciones de fase fijas en el tiempo y el espacio, permitiendo patrones de interferencia predecibles. La luz láser es coherente. Las ondas incoherentes tienen fases que varían aleatoriamente, como la luz de una bombilla incandescente. La coherencia es esencial para holografía, interferometría y muchas aplicaciones ópticas.",
                    de: "Kohärente Wellen behalten feste Phasenbeziehungen über Zeit und Raum bei und ermöglichen vorhersagbare Interferenzmuster. Laserlicht ist kohärent. Inkohärente Wellen haben zufällig variierende Phasen, wie Licht von einer Glühbirne. Kohärenz ist wesentlich für Holografie, Interferometrie und viele optische Anwendungen.",
                    nl: "Coherente golven behouden vaste faserelaties in tijd en ruimte, waardoor voorspelbare interferentiepatronen mogelijk zijn. Laserlicht is coherent. Incoherente golven hebben willekeurig variërende fasen, zoals licht van een gloeilamp. Coherentie is essentieel voor holografie, interferometrie en veel optische toepassingen."
                }
            },
            {
                question: {
                    en: "What is the Fresnel zone in wave propagation?",
                    es: "¿Qué es la zona de Fresnel en la propagación de ondas?",
                    de: "Was ist die Fresnel-Zone in der Wellenausbreitung?",
                    nl: "Wat is de Fresnel-zone in golfvoortplanting?"
                },
                options: [
                    {
                        en: "Elliptical regions around the direct path where obstacles can significantly affect wave transmission",
                        es: "Regiones elípticas alrededor del camino directo donde los obstáculos pueden afectar significativamente la transmisión de ondas",
                        de: "Elliptische Bereiche um den direkten Pfad, wo Hindernisse die Wellenübertragung erheblich beeinträchtigen können",
                        nl: "Elliptische gebieden rond het directe pad waar obstakels de golftransmissie aanzienlijk kunnen beïnvloeden"
                    },
                    {
                        en: "Circular areas of maximum wave intensity around the source",
                        es: "Áreas circulares de máxima intensidad de onda alrededor de la fuente",
                        de: "Kreisförmige Bereiche maximaler Wellenintensität um die Quelle",
                        nl: "Cirkelvormige gebieden van maximale golfintensiteit rond de bron"
                    },
                    {
                        en: "The region where waves change from longitudinal to transverse",
                        es: "La región donde las ondas cambian de longitudinales a transversales",
                        de: "Der Bereich, wo Wellen von longitudinal zu transversal wechseln",
                        nl: "Het gebied waar golven veranderen van longitudinaal naar transversaal"
                    },
                    {
                        en: "Dead zones where no wave energy can penetrate",
                        es: "Zonas muertas donde no puede penetrar energía de onda",
                        de: "Tote Zonen, wo keine Wellenenergie eindringen kann",
                        nl: "Dode zones waar geen golfenergie kan penetreren"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Fresnel zones are elliptical regions between transmitter and receiver where the path difference is within multiples of λ/2. Objects in the first Fresnel zone can cause significant diffraction effects and signal loss. This concept is crucial for radio communications, radar, and optical system design.",
                    es: "Las zonas de Fresnel son regiones elípticas entre transmisor y receptor donde la diferencia de camino está dentro de múltiplos de λ/2. Objetos en la primera zona de Fresnel pueden causar efectos de difracción significativos y pérdida de señal. Este concepto es crucial para comunicaciones de radio, radar y diseño de sistemas ópticos.",
                    de: "Fresnel-Zonen sind elliptische Bereiche zwischen Sender und Empfänger, wo der Wegunterschied innerhalb von Vielfachen von λ/2 liegt. Objekte in der ersten Fresnel-Zone können erhebliche Beugungseffekte und Signalverlust verursachen. Dieses Konzept ist entscheidend für Funkkommunikation, Radar und optisches Systemdesign.",
                    nl: "Fresnel-zones zijn elliptische gebieden tussen zender en ontvanger waar het padverschil binnen veelvouden van λ/2 ligt. Objecten in de eerste Fresnel-zone kunnen significante diffractie-effecten en signailverlies veroorzaken. Dit concept is cruciaal voor radiocommunicatie, radar en optisch systeemontwerp."
                }
            },
            {
                question: {
                    en: "What is wave packet spreading (dispersion broadening)?",
                    es: "¿Qué es la dispersión de paquetes de ondas (ensanchamiento por dispersión)?",
                    de: "Was ist Wellenpaketspreizung (Dispersionsverbreiterung)?",
                    nl: "Wat is golfpakketverspreiding (dispersieverbreding)?"
                },
                options: [
                    {
                        en: "The broadening of a wave pulse as it travels due to different frequency components having different velocities",
                        es: "El ensanchamiento de un pulso de onda mientras viaja debido a que diferentes componentes de frecuencia tienen diferentes velocidades",
                        de: "Die Verbreiterung eines Wellenpulses während seiner Ausbreitung aufgrund verschiedener Geschwindigkeiten der Frequenzkomponenten",
                        nl: "De verbreding van een golfpuls tijdens het reizen doordat verschillende frequentiecomponenten verschillende snelheden hebben"
                    },
                    {
                        en: "The increase in wave amplitude due to constructive interference",
                        es: "El aumento en la amplitud de onda debido a interferencia constructiva",
                        de: "Die Zunahme der Wellenamplitude durch konstruktive Interferenz",
                        nl: "De toename in golfamplitude door constructieve interferentie"
                    },
                    {
                        en: "The scattering of waves in multiple directions from obstacles",
                        es: "La dispersión de ondas en múltiples direcciones desde obstáculos",
                        de: "Die Streuung von Wellen in mehrere Richtungen von Hindernissen",
                        nl: "De verstrooiing van golven in meerdere richtingen vanaf obstakels"
                    },
                    {
                        en: "The conversion of wave energy to heat in lossy materials",
                        es: "La conversión de energía de onda a calor en materiales con pérdidas",
                        de: "Die Umwandlung von Wellenenergie in Wärme in verlustbehafteten Materialien",
                        nl: "De conversie van golfenergie naar warmte in verliesgevende materialen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Wave packet spreading occurs in dispersive media where different frequencies travel at different speeds. A short pulse contains many frequencies; as it propagates, faster components outrun slower ones, causing the pulse to broaden. This limits data transmission rates in optical fibers and affects pulse propagation in many systems.",
                    es: "La dispersión de paquetes de ondas ocurre en medios dispersivos donde diferentes frecuencias viajan a diferentes velocidades. Un pulso corto contiene muchas frecuencias; al propagarse, los componentes más rápidos superan a los más lentos, causando que el pulso se ensanche. Esto limita las tasas de transmisión de datos en fibras ópticas y afecta la propagación de pulsos en muchos sistemas.",
                    de: "Wellenpaketspreizung tritt in dispersiven Medien auf, wo verschiedene Frequenzen mit verschiedenen Geschwindigkeiten reisen. Ein kurzer Puls enthält viele Frequenzen; bei der Ausbreitung überholen schnellere Komponenten langsamere, wodurch sich der Puls verbreitert. Dies begrenzt Datenübertragungsraten in Glasfasern und beeinflusst Pulsausbreitung in vielen Systemen.",
                    nl: "Golfpakketverspreiding treedt op in dispersieve media waar verschillende frequenties met verschillende snelheden reizen. Een korte puls bevat veel frequenties; tijdens voortplanting halen snellere componenten langzamere in, waardoor de puls verbreidt. Dit beperkt datatransmissiesnelheden in optische vezels en beïnvloedt pulsvoortplanting in veel systemen."
                }
            },
            {
                question: {
                    en: "What is the quality factor (Q factor) of a resonant system?",
                    es: "¿Qué es el factor de calidad (factor Q) de un sistema resonante?",
                    de: "Was ist der Gütefaktor (Q-Faktor) eines resonanten Systems?",
                    nl: "Wat is de kwaliteitsfactor (Q-factor) van een resonant systeem?"
                },
                options: [
                    {
                        en: "Q = f₀/Δf, where f₀ is resonant frequency and Δf is bandwidth at half-maximum amplitude",
                        es: "Q = f₀/Δf, donde f₀ es la frecuencia resonante y Δf es el ancho de banda a amplitud de media máxima",
                        de: "Q = f₀/Δf, wobei f₀ die Resonanzfrequenz und Δf die Bandbreite bei halber maximaler Amplitude ist",
                        nl: "Q = f₀/Δf, waarbij f₀ de resonantiefrequentie is en Δf de bandbreedte bij half-maximale amplitude"
                    },
                    {
                        en: "Q = Energy stored / Energy dissipated per cycle, measured in watts",
                        es: "Q = Energía almacenada / Energía disipada por ciclo, medida en watts",
                        de: "Q = Gespeicherte Energie / Energie dissipiert pro Zyklus, gemessen in Watt",
                        nl: "Q = Opgeslagen energie / Energie gedissipeerd per cyclus, gemeten in watt"
                    },
                    {
                        en: "Q = Maximum amplitude / Minimum amplitude during oscillation",
                        es: "Q = Amplitud máxima / Amplitud mínima durante la oscilación",
                        de: "Q = Maximale Amplitude / Minimale Amplitude während der Schwingung",
                        nl: "Q = Maximale amplitude / Minimale amplitude tijdens oscillatie"
                    },
                    {
                        en: "Q = Speed of sound / Resonant wavelength in the medium",
                        es: "Q = Velocidad del sonido / Longitud de onda resonante en el medio",
                        de: "Q = Schallgeschwindigkeit / Resonante Wellenlänge im Medium",
                        nl: "Q = Geluidssnelheid / Resonante golflengte in het medium"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Q factor measures the sharpness of resonance: Q = f₀/Δf = 2π × (Energy stored)/(Energy lost per cycle). High Q means narrow bandwidth and low damping - the system oscillates for many cycles. Low Q means broad resonance and high damping. Q is crucial in filters, oscillators, and musical instruments.",
                    es: "El factor Q mide la nitidez de la resonancia: Q = f₀/Δf = 2π × (Energía almacenada)/(Energía perdida por ciclo). Q alto significa ancho de banda estrecho y bajo amortiguamiento - el sistema oscila por muchos ciclos. Q bajo significa resonancia amplia y alto amortiguamiento. Q es crucial en filtros, osciladores e instrumentos musicales.",
                    de: "Der Q-Faktor misst die Schärfe der Resonanz: Q = f₀/Δf = 2π × (Gespeicherte Energie)/(Verlorene Energie pro Zyklus). Hohes Q bedeutet schmale Bandbreite und niedrige Dämpfung - das System schwingt über viele Zyklen. Niedriges Q bedeutet breite Resonanz und hohe Dämpfung. Q ist entscheidend in Filtern, Oszillatoren und Musikinstrumenten.",
                    nl: "De Q-factor meet de scherpte van resonantie: Q = f₀/Δf = 2π × (Opgeslagen energie)/(Verloren energie per cyclus). Hoge Q betekent smalle bandbreedte en lage demping - het systeem oscilleert gedurende vele cycli. Lage Q betekent brede resonantie en hoge demping. Q is cruciaal in filters, oscillatoren en muziekinstrumenten."
                }
            },
            {
                question: {
                    en: "What is the principle of wave reciprocity?",
                    es: "¿Cuál es el principio de reciprocidad de ondas?",
                    de: "Was ist das Prinzip der Wellenreziprozität?",
                    nl: "Wat is het principe van golfwederkerigheid?"
                },
                options: [
                    {
                        en: "If a wave travels from point A to B, the same wave can travel from B to A following the same path",
                        es: "Si una onda viaja del punto A al B, la misma onda puede viajar de B a A siguiendo el mismo camino",
                        de: "Wenn eine Welle von Punkt A nach B reist, kann dieselbe Welle von B nach A denselben Pfad nehmen",
                        nl: "Als een golf reist van punt A naar B, kan dezelfde golf van B naar A reizen langs hetzelfde pad"
                    },
                    {
                        en: "Waves always return to their original source after reflection",
                        es: "Las ondas siempre regresan a su fuente original después de la reflexión",
                        de: "Wellen kehren immer nach der Reflexion zu ihrer ursprünglichen Quelle zurück",
                        nl: "Golven keren altijd terug naar hun oorspronkelijke bron na reflectie"
                    },
                    {
                        en: "The amplitude of transmitted waves equals the amplitude of incident waves",
                        es: "La amplitud de ondas transmitidas es igual a la amplitud de ondas incidentes",
                        de: "Die Amplitude übertragener Wellen entspricht der Amplitude einfallender Wellen",
                        nl: "De amplitude van doorgelaten golven is gelijk aan de amplitude van invallende golven"
                    },
                    {
                        en: "Wave frequency remains constant regardless of the transmission medium",
                        es: "La frecuencia de onda permanece constante independientemente del medio de transmisión",
                        de: "Die Wellenfrequenz bleibt konstant unabhängig vom Übertragungsmedium",
                        nl: "Golffrequentie blijft constant ongeacht het transmissiemedium"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The reciprocity principle states that wave propagation is symmetric - if a wave can travel from source A to receiver B via a particular path, then a wave from B can reach A via the same path with identical characteristics. This fundamental principle underlies antenna theory, acoustics, and electromagnetic wave propagation.",
                    es: "El principio de reciprocidad establece que la propagación de ondas es simétrica - si una onda puede viajar de la fuente A al receptor B a través de un camino particular, entonces una onda desde B puede alcanzar A a través del mismo camino con características idénticas. Este principio fundamental subyace en la teoría de antenas, acústica y propagación de ondas electromagnéticas.",
                    de: "Das Reziprozitätsprinzip besagt, dass Wellenausbreitung symmetrisch ist - wenn eine Welle von Quelle A zu Empfänger B über einen bestimmten Pfad reisen kann, dann kann eine Welle von B A über denselben Pfad mit identischen Eigenschaften erreichen. Dieses fundamentale Prinzip liegt der Antennentheorie, Akustik und elektromagnetischer Wellenausbreitung zugrunde.",
                    nl: "Het wederkerigheidsprincipe stelt dat golfvoortplanting symmetrisch is - als een golf kan reizen van bron A naar ontvanger B via een bepaald pad, dan kan een golf van B A bereiken via hetzelfde pad met identieke eigenschappen. Dit fundamentele principe ligt ten grondslag aan antennetheorie, akoestiek en elektromagnetische golfvoortplanting."
                }
            },
            {
                question: {
                    en: "What is wavefront shaping in optics?",
                    es: "¿Qué es la formación de frente de ondas en óptica?",
                    de: "Was ist Wellenfrontformung in der Optik?",
                    nl: "Wat is golfrontvorming in optica?"
                },
                options: [
                    {
                        en: "Controlling the phase and amplitude of light at each point across the wavefront to achieve desired focusing or beam shaping",
                        es: "Controlar la fase y amplitud de la luz en cada punto a través del frente de ondas para lograr el enfoque o formación de haz deseados",
                        de: "Kontrolle von Phase und Amplitude des Lichts an jedem Punkt über die Wellenfront, um gewünschte Fokussierung oder Strahlformung zu erreichen",
                        nl: "Het controleren van fase en amplitude van licht op elk punt over het golffront om gewenste focussering of bundelvorming te bereiken"
                    },
                    {
                        en: "Physically shaping optical components to change wave direction",
                        es: "Dar forma física a componentes ópticos para cambiar la dirección de las ondas",
                        de: "Physikalische Formung optischer Komponenten zur Änderung der Wellenrichtung",
                        nl: "Het fysiek vormgeven van optische componenten om golfrichting te veranderen"
                    },
                    {
                        en: "Creating wave interference patterns using multiple sources",
                        es: "Crear patrones de interferencia de ondas usando múltiples fuentes",
                        de: "Erzeugung von Welleninterferenzmustern mit mehreren Quellen",
                        nl: "Het creëren van golfinterferentiepatronen met meerdere bronnen"
                    },
                    {
                        en: "Adjusting the frequency content of optical waves",
                        es: "Ajustar el contenido de frecuencia de ondas ópticas",
                        de: "Anpassung des Frequenzinhalts optischer Wellen",
                        nl: "Het aanpassen van de frequentie-inhoud van optische golven"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Wavefront shaping uses spatial light modulators or deformable mirrors to control the phase and amplitude of light across the beam cross-section. This enables correction of optical aberrations, focusing through scattering media, creation of complex beam patterns, and advanced microscopy techniques like adaptive optics.",
                    es: "La formación de frente de ondas usa moduladores espaciales de luz o espejos deformables para controlar la fase y amplitud de la luz a través de la sección transversal del haz. Esto permite la corrección de aberraciones ópticas, enfoque a través de medios de dispersión, creación de patrones de haz complejos, y técnicas de microscopía avanzadas como óptica adaptiva.",
                    de: "Wellenfrontformung verwendet räumliche Lichtmodulatoren oder verformbare Spiegel zur Kontrolle von Phase und Amplitude des Lichts über den Strahlquerschnitt. Dies ermöglicht Korrektur optischer Aberrationen, Fokussierung durch streuende Medien, Erzeugung komplexer Strahlmuster und fortgeschrittene Mikroskopietechniken wie adaptive Optik.",
                    nl: "Golfrontvorming gebruikt ruimtelijke lichtmodulatoren of vervormbare spiegels om fase en amplitude van licht over de bundeldoorsnede te controleren. Dit maakt correctie van optische aberraties mogelijk, focussering door verstrooiende media, creatie van complexe bundelpatronen, en geavanceerde microscopietechnieken zoals adaptieve optica."
                }
            },
            {
                question: {
                    en: "What is the Huygens-Fresnel principle?",
                    es: "¿Cuál es el principio de Huygens-Fresnel?",
                    de: "Was ist das Huygens-Fresnel-Prinzip?",
                    nl: "Wat is het Huygens-Fresnel principe?"
                },
                options: [
                    {
                        en: "Every point on a wavefront acts as a secondary source of spherical wavelets, and the new wavefront is the envelope of these wavelets",
                        es: "Cada punto en un frente de ondas actúa como una fuente secundaria de ondículas esféricas, y el nuevo frente de ondas es la envolvente de estas ondículas",
                        de: "Jeder Punkt auf einer Wellenfront wirkt als sekundäre Quelle sphärischer Wellchen, und die neue Wellenfront ist die Hüllkurve dieser Wellchen",
                        nl: "Elk punt op een golffront werkt als een secundaire bron van sferische golfjes, en het nieuwe golffront is de envelop van deze golfjes"
                    },
                    {
                        en: "Waves can only propagate in straight lines through homogeneous media",
                        es: "Las ondas solo pueden propagarse en líneas rectas a través de medios homogéneos",
                        de: "Wellen können sich nur in geraden Linien durch homogene Medien ausbreiten",
                        nl: "Golven kunnen zich alleen in rechte lijnen door homogene media voortplanten"
                    },
                    {
                        en: "The speed of a wave is determined by the properties of the medium only",
                        es: "La velocidad de una onda está determinada solo por las propiedades del medio",
                        de: "Die Geschwindigkeit einer Welle wird nur durch die Eigenschaften des Mediums bestimmt",
                        nl: "De snelheid van een golf wordt alleen bepaald door de eigenschappen van het medium"
                    },
                    {
                        en: "Wave amplitude decreases exponentially with distance from the source",
                        es: "La amplitud de onda disminuye exponencialmente con la distancia de la fuente",
                        de: "Die Wellenamplitude nimmt exponentiell mit der Entfernung von der Quelle ab",
                        nl: "Golfamplitude neemt exponentieel af met afstand van de bron"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Huygens-Fresnel principle explains wave propagation by treating each point on a wavefront as a source of secondary spherical waves. The envelope of all these secondary wavelets forms the new wavefront. This principle explains diffraction, interference, and wave propagation through apertures and around obstacles.",
                    es: "El principio de Huygens-Fresnel explica la propagación de ondas tratando cada punto en un frente de ondas como una fuente de ondas esféricas secundarias. La envolvente de todas estas ondículas secundarias forma el nuevo frente de ondas. Este principio explica la difracción, interferencia y propagación de ondas a través de aberturas y alrededor de obstáculos.",
                    de: "Das Huygens-Fresnel-Prinzip erklärt Wellenausbreitung, indem es jeden Punkt auf einer Wellenfront als Quelle sekundärer sphärischer Wellen behandelt. Die Hüllkurve aller dieser sekundären Wellchen bildet die neue Wellenfront. Dieses Prinzip erklärt Beugung, Interferenz und Wellenausbreitung durch Öffnungen und um Hindernisse.",
                    nl: "Het Huygens-Fresnel principe verklaart golfvoortplanting door elk punt op een golffront te behandelen als een bron van secundaire sferische golven. De envelop van al deze secundaire golfjes vormt het nieuwe golffront. Dit principe verklaart diffractie, interferentie en golfvoortplanting door openingen en rond obstakels."
                }
            },
            {
                question: {
                    en: "What is the phenomenon of wave mode conversion?",
                    es: "¿Qué es el fenómeno de conversión de modo de ondas?",
                    de: "Was ist das Phänomen der Wellenmodenkonversion?",
                    nl: "Wat is het fenomeen van golfmodenconversie?"
                },
                options: [
                    {
                        en: "The conversion between different wave types (e.g., longitudinal to transverse) at interfaces or due to geometric changes",
                        es: "La conversión entre diferentes tipos de ondas (ej., longitudinal a transversal) en interfaces o debido a cambios geométricos",
                        de: "Die Umwandlung zwischen verschiedenen Wellentypen (z.B. longitudinal zu transversal) an Grenzflächen oder durch geometrische Änderungen",
                        nl: "De conversie tussen verschillende golftypes (bijv. longitudinaal naar transversaal) bij interfaces of door geometrische veranderingen"
                    },
                    {
                        en: "The change in wave frequency due to medium properties",
                        es: "El cambio en la frecuencia de onda debido a las propiedades del medio",
                        de: "Die Änderung der Wellenfrequenz aufgrund von Medieneigenschaften",
                        nl: "De verandering in golffrequentie door mediumeigenschappen"
                    },
                    {
                        en: "The amplification of wave energy at resonant frequencies",
                        es: "La amplificación de energía de onda en frecuencias resonantes",
                        de: "Die Verstärkung von Wellenenergie bei Resonanzfrequenzen",
                        nl: "De versterking van golfenergie bij resonante frequenties"
                    },
                    {
                        en: "The splitting of single waves into multiple coherent beams",
                        es: "La división de ondas individuales en múltiples haces coherentes",
                        de: "Die Aufteilung einzelner Wellen in mehrere kohärente Strahlen",
                        nl: "Het splitsen van enkele golven in meerdere coherente bundels"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Mode conversion occurs when waves encounter boundaries or geometric discontinuities, causing partial conversion between different wave modes. For example, ultrasonic longitudinal waves can convert to shear waves at an interface. This is important in seismology, medical ultrasound, and non-destructive testing.",
                    es: "La conversión de modo ocurre cuando las ondas encuentran límites o discontinuidades geométricas, causando conversión parcial entre diferentes modos de onda. Por ejemplo, las ondas longitudinales ultrasónicas pueden convertirse en ondas de corte en una interfaz. Esto es importante en sismología, ultrasonido médico y pruebas no destructivas.",
                    de: "Modenkonversion tritt auf, wenn Wellen auf Grenzen oder geometrische Diskontinuitäten treffen, wodurch teilweise Umwandlung zwischen verschiedenen Wellenmoden verursacht wird. Zum Beispiel können longitudinale Ultraschallwellen an einer Grenzfläche zu Scherwellen konvertieren. Dies ist wichtig in Seismologie, medizinischem Ultraschall und zerstörungsfreier Prüfung.",
                    nl: "Modenconversie treedt op wanneer golven grenzen of geometrische discontinuïteiten tegenkomen, wat gedeeltelijke conversie tussen verschillende golfmodes veroorzaakt. Bijvoorbeeld, ultrasonische longitudinale golven kunnen converteren naar afschuifgolven bij een interface. Dit is belangrijk in seismologie, medische echografie en niet-destructief testen."
                }
            },
            {
                question: {
                    en: "What is the concept of wave vector and its relationship to wavelength?",
                    es: "¿Cuál es el concepto de vector de onda y su relación con la longitud de onda?",
                    de: "Was ist das Konzept des Wellenvektors und seine Beziehung zur Wellenlänge?",
                    nl: "Wat is het concept van golfvector en zijn relatie tot golflengte?"
                },
                options: [
                    {
                        en: "Wave vector k = 2π/λ points in the direction of wave propagation with magnitude inversely proportional to wavelength",
                        es: "El vector de onda k = 2π/λ apunta en la dirección de propagación de la onda con magnitud inversamente proporcional a la longitud de onda",
                        de: "Wellenvektor k = 2π/λ zeigt in Richtung der Wellenausbreitung mit Magnitude umgekehrt proportional zur Wellenlänge",
                        nl: "Golfvector k = 2π/λ wijst in de richting van golfvoortplanting met grootte omgekeerd evenredig aan golflengte"
                    },
                    {
                        en: "Wave vector represents the electric field strength in electromagnetic waves",
                        es: "El vector de onda representa la intensidad del campo eléctrico en ondas electromagnéticas",
                        de: "Wellenvektor repräsentiert die elektrische Feldstärke in elektromagnetischen Wellen",
                        nl: "Golfvector vertegenwoordigt de elektrische veldsterkte in elektromagnetische golven"
                    },
                    {
                        en: "Wave vector is the velocity of wave propagation in vector form",
                        es: "El vector de onda es la velocidad de propagación de onda en forma vectorial",
                        de: "Wellenvektor ist die Geschwindigkeit der Wellenausbreitung in Vektorform",
                        nl: "Golfvector is de snelheid van golfvoortplanting in vectorvorm"
                    },
                    {
                        en: "Wave vector measures the amplitude of oscillation at each point",
                        es: "El vector de onda mide la amplitud de oscilación en cada punto",
                        de: "Wellenvektor misst die Schwingungsamplitude an jedem Punkt",
                        nl: "Golfvector meet de oscillatieamplitude op elk punt"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The wave vector k is a fundamental concept in wave physics with magnitude k = 2π/λ and direction along wave propagation. It's essential for describing plane waves, Bragg diffraction, reciprocal lattices in crystallography, and quantum mechanical momentum (p = ℏk). Wave vectors add vectorially for interference analysis.",
                    es: "El vector de onda k es un concepto fundamental en física de ondas con magnitud k = 2π/λ y dirección a lo largo de la propagación de onda. Es esencial para describir ondas planas, difracción de Bragg, redes recíprocas en cristalografía, y momento mecánico cuántico (p = ℏk). Los vectores de onda se suman vectorialmente para análisis de interferencia.",
                    de: "Der Wellenvektor k ist ein fundamentales Konzept in der Wellenphysik mit Magnitude k = 2π/λ und Richtung entlang der Wellenausbreitung. Er ist wesentlich für die Beschreibung ebener Wellen, Bragg-Beugung, reziproke Gitter in der Kristallografie und quantenmechanischen Impuls (p = ℏk). Wellenvektoren addieren sich vektoriell für Interferenzanalyse.",
                    nl: "De golfvector k is een fundamenteel concept in golfnatuurkunde met grootte k = 2π/λ en richting langs golfvoortplanting. Het is essentieel voor het beschrijven van vlakke golven, Bragg-diffractie, reciproke roosters in kristallografie, en kwantummechanisch momentum (p = ℏk). Golfvectoren tellen vectorieel op voor interferentieanalyse."
                }
            },
            {
                question: {
                    en: "What is acoustic levitation?",
                    es: "¿Qué es la levitación acústica?",
                    de: "Was ist akustische Levitation?",
                    nl: "Wat is akoestische levitatie?"
                },
                options: [
                    {
                        en: "Using intense sound waves to create pressure gradients that can suspend objects against gravity",
                        es: "Usar ondas sonoras intensas para crear gradientes de presión que pueden suspender objetos contra la gravedad",
                        de: "Verwendung intensiver Schallwellen zur Erzeugung von Druckgradienten, die Objekte gegen die Schwerkraft schweben lassen können",
                        nl: "Het gebruik van intense geluidsgolven om drukgradiënten te creëren die objecten tegen de zwaartekracht kunnen laten zweven"
                    },
                    {
                        en: "Creating magnetic fields through sound wave interactions",
                        es: "Crear campos magnéticos a través de interacciones de ondas sonoras",
                        de: "Erzeugung magnetischer Felder durch Schallwellen-Wechselwirkungen",
                        nl: "Het creëren van magnetische velden door geluidsgolf-interacties"
                    },
                    {
                        en: "Using ultrasonic waves to reduce the effective weight of materials",
                        es: "Usar ondas ultrasónicas para reducir el peso efectivo de materiales",
                        de: "Verwendung von Ultraschallwellen zur Reduzierung des effektiven Gewichts von Materialien",
                        nl: "Het gebruik van ultrasone golven om het effectieve gewicht van materialen te verminderen"
                    },
                    {
                        en: "Converting sound energy directly into antigravitational force",
                        es: "Convertir energía sonora directamente en fuerza antigravitacional",
                        de: "Direkte Umwandlung von Schallenergie in antigravitative Kraft",
                        nl: "Het direct converteren van geluidsenergie naar zwaartekrachtweerstandskracht"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Acoustic levitation uses standing wave patterns created by high-intensity ultrasound to generate pressure nodes where objects can be trapped and suspended. The acoustic radiation pressure overcomes gravity, enabling contactless manipulation of small objects. This technique is used in materials processing, pharmaceutical research, and space applications.",
                    es: "La levitación acústica usa patrones de ondas estacionarias creados por ultrasonido de alta intensidad para generar nodos de presión donde los objetos pueden ser atrapados y suspendidos. La presión de radiación acústica supera la gravedad, permitiendo manipulación sin contacto de objetos pequeños. Esta técnica se usa en procesamiento de materiales, investigación farmacéutica y aplicaciones espaciales.",
                    de: "Akustische Levitation verwendet stehende Wellenmuster, die durch hochintensiven Ultraschall erzeugt werden, um Druckknoten zu generieren, wo Objekte eingefangen und schweben können. Der akustische Strahlungsdruck überwindet die Schwerkraft und ermöglicht berührungslose Manipulation kleiner Objekte. Diese Technik wird in der Materialverarbeitung, pharmazeutischen Forschung und Weltraumanwendungen verwendet.",
                    nl: "Akoestische levitatie gebruikt staande golfpatronen gecreëerd door hoog-intensieve ultrasound om drukknopen te genereren waar objecten gevangen en zwevend gehouden kunnen worden. De akoestische stralingsdruk overwint de zwaartekracht, wat contactloze manipulatie van kleine objecten mogelijk maakt. Deze techniek wordt gebruikt in materiaalverwerking, farmaceutisch onderzoek en ruimtetoepassingen."
                }
            },
            {
                question: {
                    en: "What is the role of boundary conditions in wave solutions?",
                    es: "¿Cuál es el papel de las condiciones de frontera en las soluciones de ondas?",
                    de: "Was ist die Rolle von Randbedingungen in Wellenlösungen?",
                    nl: "Wat is de rol van randvoorwaarden in golfoplossingen?"
                },
                options: [
                    {
                        en: "Boundary conditions determine which wave modes can exist and their specific frequencies in a confined system",
                        es: "Las condiciones de frontera determinan qué modos de onda pueden existir y sus frecuencias específicas en un sistema confinado",
                        de: "Randbedingungen bestimmen, welche Wellenmoden in einem begrenzten System existieren können und ihre spezifischen Frequenzen",
                        nl: "Randvoorwaarden bepalen welke golfmodes kunnen bestaan en hun specifieke frequenties in een beperkt systeem"
                    },
                    {
                        en: "Boundary conditions only affect the amplitude of waves, not their frequencies",
                        es: "Las condiciones de frontera solo afectan la amplitud de las ondas, no sus frecuencias",
                        de: "Randbedingungen beeinflussen nur die Amplitude von Wellen, nicht ihre Frequenzen",
                        nl: "Randvoorwaarden beïnvloeden alleen de amplitude van golven, niet hun frequenties"
                    },
                    {
                        en: "Boundary conditions determine the speed of wave propagation only",
                        es: "Las condiciones de frontera determinan solo la velocidad de propagación de ondas",
                        de: "Randbedingungen bestimmen nur die Geschwindigkeit der Wellenausbreitung",
                        nl: "Randvoorwaarden bepalen alleen de snelheid van golfvoortplanting"
                    },
                    {
                        en: "Boundary conditions are irrelevant for wave behavior in most practical situations",
                        es: "Las condiciones de frontera son irrelevantes para el comportamiento de ondas en la mayoría de situaciones prácticas",
                        de: "Randbedingungen sind für Wellenverhalten in den meisten praktischen Situationen irrelevant",
                        nl: "Randvoorwaarden zijn irrelevant voor golfgedrag in de meeste praktische situaties"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Boundary conditions specify constraints at the edges of a wave system (fixed, free, or mixed boundaries) and determine which standing wave patterns and frequencies are allowed. They explain why musical instruments have specific pitch relationships, why electromagnetic cavities resonate at particular frequencies, and how quantum states are quantized.",
                    es: "Las condiciones de frontera especifican restricciones en los bordes de un sistema de ondas (fronteras fijas, libres o mixtas) y determinan qué patrones de ondas estacionarias y frecuencias están permitidas. Explican por qué los instrumentos musicales tienen relaciones de tono específicas, por qué las cavidades electromagnéticas resuenan a frecuencias particulares, y cómo se cuantizan los estados cuánticos.",
                    de: "Randbedingungen spezifizieren Beschränkungen an den Rändern eines Wellensystems (feste, freie oder gemischte Grenzen) und bestimmen, welche stehenden Wellenmuster und Frequenzen erlaubt sind. Sie erklären, warum Musikinstrumente spezifische Tonhöhenverhältnisse haben, warum elektromagnetische Hohlräume bei bestimmten Frequenzen resonieren, und wie Quantenzustände quantisiert werden.",
                    nl: "Randvoorwaarden specificeren beperkingen aan de randen van een golfsysteem (vaste, vrije of gemengde grenzen) en bepalen welke staande golfpatronen en frequenties zijn toegestaan. Ze verklaren waarom muziekinstrumenten specifieke toonhoogteverhoudingen hebben, waarom elektromagnetische holtes resoneren bij bepaalde frequenties, en hoe kwantumtoestanden gekwantiseerd worden."
                }
            },
            {
                question: {
                    en: "What is the difference between near-field and far-field wave behavior?",
                    es: "¿Cuál es la diferencia entre el comportamiento de ondas en campo cercano y campo lejano?",
                    de: "Was ist der Unterschied zwischen Nahfeld- und Fernfeld-Wellenverhalten?",
                    nl: "Wat is het verschil tussen nabije-veld en verre-veld golfgedrag?"
                },
                options: [
                    {
                        en: "Near-field: complex, non-propagating evanescent waves close to source; Far-field: simple propagating waves with well-defined direction",
                        es: "Campo cercano: ondas evanescentes complejas y no propagantes cerca de la fuente; Campo lejano: ondas propagantes simples con dirección bien definida",
                        de: "Nahfeld: komplexe, nicht-propagierende evaneszente Wellen nahe der Quelle; Fernfeld: einfache propagierende Wellen mit klar definierter Richtung",
                        nl: "Nabije-veld: complexe, niet-voortplantende evanescente golven dichtbij bron; Verre-veld: eenvoudige voortplantende golven met goed gedefinieerde richting"
                    },
                    {
                        en: "Near-field waves are always stronger than far-field waves",
                        es: "Las ondas de campo cercano siempre son más fuertes que las ondas de campo lejano",
                        de: "Nahfeldwellen sind immer stärker als Fernfeldwellen",
                        nl: "Nabije-veld golven zijn altijd sterker dan verre-veld golven"
                    },
                    {
                        en: "Near-field and far-field refer only to the distance from the wave source",
                        es: "Campo cercano y campo lejano se refieren solo a la distancia de la fuente de ondas",
                        de: "Nahfeld und Fernfeld beziehen sich nur auf die Entfernung von der Wellenquelle",
                        nl: "Nabije-veld en verre-veld verwijzen alleen naar de afstand van de golfbron"
                    },
                    {
                        en: "Far-field waves cannot be detected by conventional instruments",
                        es: "Las ondas de campo lejano no pueden ser detectadas por instrumentos convencionales",
                        de: "Fernfeldwellen können nicht mit konventionellen Instrumenten detektiert werden",
                        nl: "Verre-veld golven kunnen niet gedetecteerd worden door conventionele instrumenten"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Near-field (within ~λ/2π from source) contains complex evanescent waves that don't transport energy far, with strong coupling between electric and magnetic fields. Far-field (>>λ) contains simple propagating waves with fixed impedance relationships. This distinction is crucial in antenna design, optical microscopy, and electromagnetic compatibility testing.",
                    es: "El campo cercano (dentro de ~λ/2π de la fuente) contiene ondas evanescentes complejas que no transportan energía lejos, con fuerte acoplamiento entre campos eléctricos y magnéticos. El campo lejano (>>λ) contiene ondas propagantes simples con relaciones de impedancia fijas. Esta distinción es crucial en diseño de antenas, microscopía óptica y pruebas de compatibilidad electromagnética.",
                    de: "Nahfeld (innerhalb ~λ/2π von der Quelle) enthält komplexe evaneszente Wellen, die keine Energie weit transportieren, mit starker Kopplung zwischen elektrischen und magnetischen Feldern. Fernfeld (>>λ) enthält einfache propagierende Wellen mit festen Impedanzverhältnissen. Diese Unterscheidung ist entscheidend im Antennendesign, optischer Mikroskopie und elektromagnetischen Verträglichkeitstests.",
                    nl: "Nabije-veld (binnen ~λ/2π van bron) bevat complexe evanescente golven die geen energie ver transporteren, met sterke koppeling tussen elektrische en magnetische velden. Verre-veld (>>λ) bevat eenvoudige voortplantende golven met vaste impedantieverhoudingen. Dit onderscheid is cruciaal in antenneontwerp, optische microscopie en elektromagnetische compatibiliteitstests."
                }
            },
            {
                question: {
                    en: "What is wave energy density and how does it relate to amplitude?",
                    es: "¿Qué es la densidad de energía de ondas y cómo se relaciona con la amplitud?",
                    de: "Was ist Wellenenergiedichte und wie bezieht sie sich auf die Amplitude?",
                    nl: "Wat is golfenergiedichtheid en hoe relateert het aan amplitude?"
                },
                options: [
                    {
                        en: "Energy density is proportional to the square of the amplitude (u ∝ A²), representing energy per unit volume",
                        es: "La densidad de energía es proporcional al cuadrado de la amplitud (u ∝ A²), representando energía por unidad de volumen",
                        de: "Energiedichte ist proportional zum Quadrat der Amplitude (u ∝ A²) und repräsentiert Energie pro Volumeneinheit",
                        nl: "Energiedichtheid is evenredig met het kwadraat van de amplitude (u ∝ A²), wat energie per volume-eenheid vertegenwoordigt"
                    },
                    {
                        en: "Energy density is directly proportional to amplitude (u ∝ A)",
                        es: "La densidad de energía es directamente proporcional a la amplitud (u ∝ A)",
                        de: "Energiedichte ist direkt proportional zur Amplitude (u ∝ A)",
                        nl: "Energiedichtheid is direct evenredig met amplitude (u ∝ A)"
                    },
                    {
                        en: "Energy density is independent of wave amplitude",
                        es: "La densidad de energía es independiente de la amplitud de onda",
                        de: "Energiedichte ist unabhängig von der Wellenamplitude",
                        nl: "Energiedichtheid is onafhankelijk van golfamplitude"
                    },
                    {
                        en: "Energy density decreases exponentially with increasing amplitude",
                        es: "La densidad de energía disminuye exponencialmente con el aumento de amplitud",
                        de: "Energiedichte nimmt exponentiell mit steigender Amplitude ab",
                        nl: "Energiedichtheid neemt exponentieel af met toenemende amplitude"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Wave energy density u = ½ρv²A² for mechanical waves (kinetic + potential energy), where ρ is medium density, v is particle velocity amplitude, and A is displacement amplitude. For electromagnetic waves, u = ½(εE² + B²/μ). The quadratic relationship means doubling amplitude quadruples energy density.",
                    es: "La densidad de energía de onda u = ½ρv²A² para ondas mecánicas (energía cinética + potencial), donde ρ es la densidad del medio, v es la amplitud de velocidad de partícula, y A es la amplitud de desplazamiento. Para ondas electromagnéticas, u = ½(εE² + B²/μ). La relación cuadrática significa que duplicar la amplitud cuadruplica la densidad de energía.",
                    de: "Wellenenergiedichte u = ½ρv²A² für mechanische Wellen (kinetische + potentielle Energie), wobei ρ die Mediumdichte, v die Teilchengeschwindigkeitsamplitude und A die Verschiebungsamplitude ist. Für elektromagnetische Wellen gilt u = ½(εE² + B²/μ). Die quadratische Beziehung bedeutet, dass Verdopplung der Amplitude die Energiedichte vervierfacht.",
                    nl: "Golfenergiedichtheid u = ½ρv²A² voor mechanische golven (kinetische + potentiële energie), waarbij ρ de mediumdichtheid is, v de deeltjessnelheidsamplitude en A de verplaatsingsamplitude. Voor elektromagnetische golven geldt u = ½(εE² + B²/μ). De kwadratische relatie betekent dat verdubbeling van amplitude de energiedichtheid verviervoudigt."
                }
            },
            {
                question: {
                    en: "What is the concept of wave tunneling in quantum mechanics?",
                    es: "¿Cuál es el concepto de tunelamiento de ondas en mecánica cuántica?",
                    de: "Was ist das Konzept des Wellentunnelns in der Quantenmechanik?",
                    nl: "Wat is het concept van golftunneling in kwantummechanica?"
                },
                options: [
                    {
                        en: "Wave functions can penetrate and transmit through potential barriers higher than their energy via exponential decay",
                        es: "Las funciones de onda pueden penetrar y transmitirse a través de barreras de potencial más altas que su energía mediante decaimiento exponencial",
                        de: "Wellenfunktionen können durch Potentialbarrieren höher als ihre Energie mittels exponentieller Abnahme eindringen und übertragen werden",
                        nl: "Golffuncties kunnen door potentiaalbarrières hoger dan hun energie doordringen en doorgelaten worden via exponentiële afname"
                    },
                    {
                        en: "Waves create physical tunnels through solid barriers to pass through",
                        es: "Las ondas crean túneles físicos a través de barreras sólidas para pasar",
                        de: "Wellen erzeugen physische Tunnel durch feste Barrieren zum Durchgang",
                        nl: "Golven creëren fysieke tunnels door vaste barrières om door te gaan"
                    },
                    {
                        en: "Classical waves can bend around obstacles to reach forbidden regions",
                        es: "Las ondas clásicas pueden curvarse alrededor de obstáculos para alcanzar regiones prohibidas",
                        de: "Klassische Wellen können sich um Hindernisse biegen, um verbotene Bereiche zu erreichen",
                        nl: "Klassieke golven kunnen buigen rond obstakels om verboden gebieden te bereiken"
                    },
                    {
                        en: "Wave energy increases when passing through barriers",
                        es: "La energía de onda aumenta al pasar a través de barreras",
                        de: "Wellenenergie steigt beim Durchgang durch Barrieren",
                        nl: "Golfenergie neemt toe bij het passeren door barrières"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Quantum tunneling occurs when matter waves encounter potential barriers. Even when particle energy E < barrier height V₀, there's finite probability of transmission due to exponential decay ψ ∝ e^(-κx) inside the barrier. This enables radioactive decay, STM microscopy, and tunnel diodes, defying classical physics predictions.",
                    es: "El tunelamiento cuántico ocurre cuando las ondas de materia encuentran barreras de potencial. Incluso cuando la energía de partícula E < altura de barrera V₀, hay probabilidad finita de transmisión debido al decaimiento exponencial ψ ∝ e^(-κx) dentro de la barrera. Esto permite desintegración radiactiva, microscopía STM y diodos túnel, desafiando predicciones de física clásica.",
                    de: "Quantentunnelung tritt auf, wenn Materiewellen auf Potentialbarrieren treffen. Selbst wenn Teilchenenergie E < Barrierenhöhe V₀, gibt es endliche Transmissionswahrscheinlichkeit aufgrund exponentieller Abnahme ψ ∝ e^(-κx) innerhalb der Barriere. Dies ermöglicht radioaktiven Zerfall, STM-Mikroskopie und Tunneldioden, entgegen klassischen Physikvorhersagen.",
                    nl: "Kwantumtunneling treedt op wanneer materiegolven potentiaalbarrières tegenkomen. Zelfs wanneer deeltjesenergie E < barrièrehoogte V₀, is er eindige transmissiekans door exponentiële afname ψ ∝ e^(-κx) binnen de barrière. Dit maakt radioactief verval, STM-microscopie en tunneldiodes mogelijk, in strijd met klassieke natuurkundevoorspellingen."
                }
            },
            {
                question: {
                    en: "What is the relationship between wave impedance matching and power transfer?",
                    es: "¿Cuál es la relación entre el emparejamiento de impedancia de ondas y la transferencia de potencia?",
                    de: "Was ist die Beziehung zwischen Wellenimpedanzanpassung und Leistungsübertragung?",
                    nl: "Wat is de relatie tussen golfimpedantie-aanpassing en vermogensoverdracht?"
                },
                options: [
                    {
                        en: "Maximum power transfer occurs when impedances are matched (Z₁ = Z₂); mismatched impedances cause reflections and power loss",
                        es: "La máxima transferencia de potencia ocurre cuando las impedancias coinciden (Z₁ = Z₂); impedancias desajustadas causan reflexiones y pérdida de potencia",
                        de: "Maximale Leistungsübertragung tritt bei angepassten Impedanzen auf (Z₁ = Z₂); falsch angepasste Impedanzen verursachen Reflexionen und Leistungsverlust",
                        nl: "Maximale vermogensoverdracht treedt op wanneer impedanties aangepast zijn (Z₁ = Z₂); verkeerd aangepaste impedanties veroorzaken reflecties en vermogensverlies"
                    },
                    {
                        en: "Power transfer is always independent of impedance values",
                        es: "La transferencia de potencia siempre es independiente de los valores de impedancia",
                        de: "Leistungsübertragung ist immer unabhängig von Impedanzwerten",
                        nl: "Vermogensoverdracht is altijd onafhankelijk van impedantiewaarden"
                    },
                    {
                        en: "Higher impedance always results in better power transfer",
                        es: "Mayor impedancia siempre resulta en mejor transferencia de potencia",
                        de: "Höhere Impedanz führt immer zu besserer Leistungsübertragung",
                        nl: "Hogere impedantie resulteert altijd in betere vermogensoverdracht"
                    },
                    {
                        en: "Power transfer efficiency decreases linearly with impedance ratio",
                        es: "La eficiencia de transferencia de potencia disminuye linealmente con la relación de impedancia",
                        de: "Leistungsübertragungseffizienz nimmt linear mit Impedanzverhältnis ab",
                        nl: "Vermogensoverdrachtsefficiëntie neemt lineair af met impedantieverhouding"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Impedance matching maximizes power transfer and minimizes reflections. Reflection coefficient R = (Z₂-Z₁)/(Z₂+Z₁); when Z₁ = Z₂, R = 0 (no reflection). Transmission coefficient T = 4Z₁Z₂/(Z₁+Z₂)² is maximized when impedances match. This principle is crucial in transmission lines, acoustics, and optical systems.",
                    es: "El emparejamiento de impedancia maximiza la transferencia de potencia y minimiza las reflexiones. Coeficiente de reflexión R = (Z₂-Z₁)/(Z₂+Z₁); cuando Z₁ = Z₂, R = 0 (sin reflexión). Coeficiente de transmisión T = 4Z₁Z₂/(Z₁+Z₂)² se maximiza cuando las impedancias coinciden. Este principio es crucial en líneas de transmisión, acústica y sistemas ópticos.",
                    de: "Impedanzanpassung maximiert Leistungsübertragung und minimiert Reflexionen. Reflexionskoeffizient R = (Z₂-Z₁)/(Z₂+Z₁); wenn Z₁ = Z₂, dann R = 0 (keine Reflexion). Transmissionskoeffizient T = 4Z₁Z₂/(Z₁+Z₂)² wird maximiert, wenn Impedanzen angepasst sind. Dieses Prinzip ist entscheidend in Übertragungsleitungen, Akustik und optischen Systemen.",
                    nl: "Impedantie-aanpassing maximaliseert vermogensoverdracht en minimaliseert reflecties. Reflectiecoëfficiënt R = (Z₂-Z₁)/(Z₂+Z₁); wanneer Z₁ = Z₂, dan R = 0 (geen reflectie). Transmissiecoëfficiënt T = 4Z₁Z₂/(Z₁+Z₂)² wordt gemaximaliseerd wanneer impedanties aangepast zijn. Dit principe is cruciaal in transmissielijnen, akoestiek en optische systemen."
                }
            },
            {
                question: {
                    en: "What is the physical significance of wave phase velocity vs group velocity?",
                    es: "¿Cuál es el significado físico de la velocidad de fase de ondas vs. velocidad de grupo?",
                    de: "Was ist die physikalische Bedeutung von Wellenphasengeschwindigkeit vs. Gruppengeschwindigkeit?",
                    nl: "Wat is de fysieke betekenis van golffasesnelheid vs. groepsnelheid?"
                },
                options: [
                    {
                        en: "Phase velocity is speed of constant phase surfaces; group velocity is speed of energy/information transport and wave packet envelope",
                        es: "La velocidad de fase es la velocidad de superficies de fase constante; la velocidad de grupo es la velocidad de transporte de energía/información y envolvente del paquete de ondas",
                        de: "Phasengeschwindigkeit ist Geschwindigkeit konstanter Phasenflächen; Gruppengeschwindigkeit ist Geschwindigkeit des Energie-/Informationstransports und Wellenpakethüllkurve",
                        nl: "Fasesnelheid is snelheid van constante faseoppervlakken; groepsnelheid is snelheid van energie-/informatietransport en golfpakketenvelop"
                    },
                    {
                        en: "Phase velocity is always faster than group velocity in all media",
                        es: "La velocidad de fase siempre es más rápida que la velocidad de grupo en todos los medios",
                        de: "Phasengeschwindigkeit ist immer schneller als Gruppengeschwindigkeit in allen Medien",
                        nl: "Fasesnelheid is altijd sneller dan groepsnelheid in alle media"
                    },
                    {
                        en: "Phase and group velocities are always equal for all wave types",
                        es: "Las velocidades de fase y grupo siempre son iguales para todos los tipos de ondas",
                        de: "Phasen- und Gruppengeschwindigkeit sind immer gleich für alle Wellentypen",
                        nl: "Fase- en groepsnelheden zijn altijd gelijk voor alle golftypes"
                    },
                    {
                        en: "Group velocity represents the maximum possible wave speed in any medium",
                        es: "La velocidad de grupo representa la velocidad máxima posible de onda en cualquier medio",
                        de: "Gruppengeschwindigkeit repräsentiert die maximal mögliche Wellengeschwindigkeit in jedem Medium",
                        nl: "Groepsnelheid vertegenwoordigt de maximaal mogelijke golfsnelheid in elk medium"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Phase velocity vₚ = ω/k describes how fast wave crests move, while group velocity vₓ = dω/dk describes energy propagation speed. In non-dispersive media, vₚ = vₓ. In dispersive media they differ: vₓ can be slower (normal dispersion) or faster (anomalous dispersion) than vₚ. Group velocity determines information transmission speed and causality limits.",
                    es: "La velocidad de fase vₚ = ω/k describe qué tan rápido se mueven las crestas de onda, mientras que la velocidad de grupo vₓ = dω/dk describe la velocidad de propagación de energía. En medios no dispersivos, vₚ = vₓ. En medios dispersivos difieren: vₓ puede ser más lenta (dispersión normal) o más rápida (dispersión anómala) que vₚ. La velocidad de grupo determina la velocidad de transmisión de información y los límites de causalidad.",
                    de: "Phasengeschwindigkeit vₚ = ω/k beschreibt, wie schnell sich Wellenberge bewegen, während Gruppengeschwindigkeit vₓ = dω/dk die Energieausbreitungsgeschwindigkeit beschreibt. In nicht-dispersiven Medien ist vₚ = vₓ. In dispersiven Medien unterscheiden sie sich: vₓ kann langsamer (normale Dispersion) oder schneller (anomale Dispersion) als vₚ sein. Gruppengeschwindigkeit bestimmt Informationsübertragungsgeschwindigkeit und Kausalitätsgrenzen.",
                    nl: "Fasesnelheid vₚ = ω/k beschrijft hoe snel golfkammen bewegen, terwijl groepsnelheid vₓ = dω/dk energievoortplantingssnelheid beschrijft. In niet-dispersieve media geldt vₚ = vₓ. In dispersieve media verschillen ze: vₓ kan langzamer (normale dispersie) of sneller (abnormale dispersie) zijn dan vₚ. Groepsnelheid bepaalt informatietransmissiesnelheid en causaliteitsgrenzen."
                }
            },
            {
                question: {
                    en: "What is the principle of least action in wave mechanics?",
                    es: "¿Cuál es el principio de mínima acción en mecánica ondulatoria?",
                    de: "Was ist das Prinzip der kleinsten Wirkung in der Wellenmechanik?",
                    nl: "Wat is het principe van kleinste actie in golfmechanica?"
                },
                options: [
                    {
                        en: "Waves follow paths that minimize the action integral, leading to Fermat's principle and Snell's law",
                        es: "Las ondas siguen caminos que minimizan la integral de acción, llevando al principio de Fermat y la ley de Snell",
                        de: "Wellen folgen Pfaden, die das Wirkungsintegral minimieren, was zu Fermats Prinzip und dem Snellschen Gesetz führt",
                        nl: "Golven volgen paden die de actie-integraal minimaliseren, wat leidt tot Fermat's principe en Snell's wet"
                    },
                    {
                        en: "Waves always travel the shortest geometric distance between points",
                        es: "Las ondas siempre viajan la distancia geométrica más corta entre puntos",
                        de: "Wellen reisen immer die kürzeste geometrische Entfernung zwischen Punkten",
                        nl: "Golven reizen altijd de kortste geometrische afstand tussen punten"
                    },
                    {
                        en: "Wave energy decreases along the path of propagation",
                        es: "La energía de onda disminuye a lo largo del camino de propagación",
                        de: "Wellenenergie nimmt entlang des Ausbreitungspfads ab",
                        nl: "Golfenergie neemt af langs het voortplantingspad"
                    },
                    {
                        en: "Waves choose paths with minimum amplitude variation",
                        es: "Las ondas eligen caminos con variación mínima de amplitud",
                        de: "Wellen wählen Pfade mit minimaler Amplitudenvariation",
                        nl: "Golven kiezen paden met minimale amplitudevariatie"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The principle of least action states that waves (and particles) follow paths that minimize the action integral ∫L dt, where L is the Lagrangian. For waves, this leads to Fermat's principle (light takes the path of least time) and explains refraction via Snell's law. This fundamental principle unifies geometric and wave optics.",
                    es: "El principio de mínima acción establece que las ondas (y partículas) siguen caminos que minimizan la integral de acción ∫L dt, donde L es el Lagrangiano. Para ondas, esto lleva al principio de Fermat (la luz toma el camino de menor tiempo) y explica la refracción vía la ley de Snell. Este principio fundamental unifica la óptica geométrica y ondulatoria.",
                    de: "Das Prinzip der kleinsten Wirkung besagt, dass Wellen (und Teilchen) Pfaden folgen, die das Wirkungsintegral ∫L dt minimieren, wobei L der Lagrangian ist. Für Wellen führt dies zu Fermats Prinzip (Licht nimmt den Weg der geringsten Zeit) und erklärt Brechung über das Snellsche Gesetz. Dieses fundamentale Prinzip vereint geometrische und Wellenoptik.",
                    nl: "Het principe van kleinste actie stelt dat golven (en deeltjes) paden volgen die de actie-integraal ∫L dt minimaliseren, waarbij L de Lagrangiaan is. Voor golven leidt dit tot Fermat's principe (licht neemt het pad van minste tijd) en verklaart refractie via Snell's wet. Dit fundamentele principe verenigt geometrische en golfoptica."
                }
            },
            {
                question: {
                    en: "What is waveguide dispersion in optical fibers?",
                    es: "¿Qué es la dispersión de guía de ondas en fibras ópticas?",
                    de: "Was ist Wellenleiterdispersion in optischen Fasern?",
                    nl: "Wat is golfgeleiderdispersie in optische vezels?"
                },
                options: [
                    {
                        en: "Variation in propagation speed with wavelength due to the geometry and refractive index profile of the waveguide",
                        es: "Variación en la velocidad de propagación con la longitud de onda debido a la geometría y perfil de índice de refracción de la guía de ondas",
                        de: "Variation der Ausbreitungsgeschwindigkeit mit der Wellenlänge aufgrund der Geometrie und des Brechungsindexprofils des Wellenleiters",
                        nl: "Variatie in voortplantingssnelheid met golflengte door de geometrie en brekingsindexprofiel van de golfgeleider"
                    },
                    {
                        en: "Loss of signal power due to fiber bending and microbending",
                        es: "Pérdida de potencia de señal debido a curvatura de fibra y microcurvatura",
                        de: "Signalleistungsverlust durch Faserbiegen und Mikrobiegen",
                        nl: "Verlies van signaalvermogen door vezelbuiging en microbuiging"
                    },
                    {
                        en: "Interference between multiple propagating modes in multimode fibers",
                        es: "Interferencia entre múltiples modos de propagación en fibras multimodo",
                        de: "Interferenz zwischen mehreren sich ausbreitenden Moden in Multimode-Fasern",
                        nl: "Interferentie tussen meerdere voortplantende modes in multimode vezels"
                    },
                    {
                        en: "Scattering of light due to impurities and defects in the fiber core",
                        es: "Dispersión de luz debido a impurezas y defectos en el núcleo de la fibra",
                        de: "Lichtstreuung aufgrund von Verunreinigungen und Defekten im Faserkern",
                        nl: "Verstrooiing van licht door onzuiverheden en defecten in de vezelkern"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Waveguide dispersion occurs because different wavelengths have different effective refractive indices in the optical fiber due to the confined geometry and the difference between core and cladding indices. This causes different wavelengths to travel at different speeds, leading to pulse broadening. It can be engineered to cancel material dispersion in dispersion-shifted fibers.",
                    es: "La dispersión de guía de ondas ocurre porque diferentes longitudes de onda tienen diferentes índices de refracción efectivos en la fibra óptica debido a la geometría confinada y la diferencia entre índices del núcleo y revestimiento. Esto causa que diferentes longitudes de onda viajen a diferentes velocidades, llevando al ensanchamiento de pulsos. Puede ser diseñada para cancelar la dispersión material en fibras de dispersión desplazada.",
                    de: "Wellenleiterdispersion tritt auf, weil verschiedene Wellenlängen aufgrund der begrenzten Geometrie und des Unterschieds zwischen Kern- und Mantelindizes verschiedene effektive Brechungsindizes in der optischen Faser haben. Dies führt dazu, dass verschiedene Wellenlängen mit unterschiedlichen Geschwindigkeiten reisen, was zu Pulsverbreiterung führt. Sie kann konstruiert werden, um Materialdispersion in dispersionsverstellten Fasern zu kompensieren.",
                    nl: "Golfgeleiderdispersie treedt op omdat verschillende golflengtes verschillende effectieve brekingsindices hebben in de optische vezel door de beperkte geometrie en het verschil tussen kern- en mantelindices. Dit zorgt ervoor dat verschillende golflengtes met verschillende snelheden reizen, wat tot pulsverbreding leidt. Het kan ontworpen worden om materiaaldispersie te compenseren in dispersie-verschoven vezels."
                }
            },
            {
                question: {
                    en: "What is the concept of wave localization in random media?",
                    es: "¿Cuál es el concepto de localización de ondas en medios aleatorios?",
                    de: "Was ist das Konzept der Wellenlokalisierung in zufälligen Medien?",
                    nl: "Wat is het concept van golflokalisatie in willekeurige media?"
                },
                options: [
                    {
                        en: "Waves become exponentially localized due to interference effects in strongly disordered media (Anderson localization)",
                        es: "Las ondas se localizan exponencialmente debido a efectos de interferencia en medios fuertemente desordenados (localización de Anderson)",
                        de: "Wellen werden durch Interferenzeffekte in stark ungeordneten Medien exponentiell lokalisiert (Anderson-Lokalisierung)",
                        nl: "Golven worden exponentieel gelokaliseerd door interferentie-effecten in sterk wanordelijke media (Anderson-lokalisatie)"
                    },
                    {
                        en: "Waves are concentrated only at the source and receiver locations",
                        es: "Las ondas se concentran solo en las ubicaciones de fuente y receptor",
                        de: "Wellen sind nur an Quelle und Empfänger konzentriert",
                        nl: "Golven zijn geconcentreerd alleen op bron- en ontvangerlocaties"
                    },
                    {
                        en: "Wave energy is uniformly distributed throughout random media",
                        es: "La energía de onda se distribuye uniformemente a través de medios aleatorios",
                        de: "Wellenenergie ist gleichmäßig in zufälligen Medien verteilt",
                        nl: "Golfenergie is uniform verdeeld door willekeurige media"
                    },
                    {
                        en: "Waves always follow the most direct path through disordered materials",
                        es: "Las ondas siempre siguen el camino más directo a través de materiales desordenados",
                        de: "Wellen folgen immer dem direktesten Pfad durch ungeordnete Materialien",
                        nl: "Golven volgen altijd het meest directe pad door wanordelijke materialen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Anderson localization occurs when multiple scattering in random media leads to constructive interference that confines waves to localized regions. The wave amplitude decreases exponentially with distance from the localization center. This quantum phenomenon affects electrons in disordered solids and has been observed with light, sound, and matter waves.",
                    es: "La localización de Anderson ocurre cuando la dispersión múltiple en medios aleatorios lleva a interferencia constructiva que confina ondas a regiones localizadas. La amplitud de onda disminuye exponencialmente con la distancia del centro de localización. Este fenómeno cuántico afecta electrones en sólidos desordenados y ha sido observado con luz, sonido y ondas de materia.",
                    de: "Anderson-Lokalisierung tritt auf, wenn Mehrfachstreuung in zufälligen Medien zu konstruktiver Interferenz führt, die Wellen in lokalisierten Bereichen einschließt. Die Wellenamplitude nimmt exponentiell mit der Entfernung vom Lokalisierungszentrum ab. Dieses Quantenphänomen betrifft Elektronen in ungeordneten Festkörpern und wurde mit Licht, Schall und Materiewellen beobachtet.",
                    nl: "Anderson-lokalisatie treedt op wanneer meervoudige verstrooiing in willekeurige media leidt tot constructieve interferentie die golven opsluit in gelokaliseerde gebieden. De golfamplitude neemt exponentieel af met afstand van het lokalisatiecentrum. Dit kwantumfenomeen beïnvloedt elektronen in wanordelijke vaste stoffen en is waargenomen met licht, geluid en materiegolven."
                }
            },
            {
                question: {
                    en: "What is the phenomenon of wave self-focusing (Kerr effect)?",
                    es: "¿Qué es el fenómeno de autoenfoque de ondas (efecto Kerr)?",
                    de: "Was ist das Phänomen der Wellenselbstfokussierung (Kerr-Effekt)?",
                    nl: "Wat is het fenomeen van golfzelfbundeling (Kerr-effect)?"
                },
                options: [
                    {
                        en: "Intense light beams create their own waveguide by inducing local refractive index changes proportional to intensity",
                        es: "Haces de luz intensos crean su propia guía de ondas induciendo cambios locales del índice de refracción proporcionales a la intensidad",
                        de: "Intensive Lichtstrahlen erzeugen ihren eigenen Wellenleiter durch Induzierung lokaler Brechungsindexänderungen proportional zur Intensität",
                        nl: "Intense lichtbundels creëren hun eigen golfgeleider door lokale brekingsindexveranderingen te induceren die evenredig zijn aan intensiteit"
                    },
                    {
                        en: "Waves automatically focus at the geometric center of any optical system",
                        es: "Las ondas se enfocan automáticamente en el centro geométrico de cualquier sistema óptico",
                        de: "Wellen fokussieren automatisch im geometrischen Zentrum jedes optischen Systems",
                        nl: "Golven focussen automatisch op het geometrische centrum van elk optisch systeem"
                    },
                    {
                        en: "Linear optical materials naturally concentrate light without external focusing elements",
                        es: "Los materiales ópticos lineales concentran naturalmente la luz sin elementos de enfoque externos",
                        de: "Lineare optische Materialien konzentrieren natürlich Licht ohne externe Fokussierungselemente",
                        nl: "Lineaire optische materialen concentreren natuurlijk licht zonder externe focuseerelementen"
                    },
                    {
                        en: "Wave interference patterns create permanent focusing structures in materials",
                        es: "Los patrones de interferencia de ondas crean estructuras de enfoque permanentes en materiales",
                        de: "Welleninterferenzmuster erzeugen permanente Fokussierungsstrukturen in Materialien",
                        nl: "Golfinterferentiepatronen creëren permanente focusstructuren in materialen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The optical Kerr effect causes the refractive index to change as n = n₀ + n₂I, where I is the light intensity and n₂ is the nonlinear coefficient. For positive n₂, intense beams create a higher refractive index in the center, acting like a self-induced lens. This can lead to self-focusing, soliton formation, or catastrophic optical damage.",
                    es: "El efecto Kerr óptico causa que el índice de refracción cambie como n = n₀ + n₂I, donde I es la intensidad de luz y n₂ es el coeficiente no lineal. Para n₂ positivo, haces intensos crean un índice de refracción mayor en el centro, actuando como una lente autoinducida. Esto puede llevar a autoenfoque, formación de solitones o daño óptico catastrófico.",
                    de: "Der optische Kerr-Effekt bewirkt, dass sich der Brechungsindex als n = n₀ + n₂I ändert, wobei I die Lichtintensität und n₂ der nichtlineare Koeffizient ist. Bei positivem n₂ erzeugen intensive Strahlen einen höheren Brechungsindex im Zentrum und wirken wie eine selbstinduzierte Linse. Dies kann zu Selbstfokussierung, Solitonenbildung oder katastrophalen optischen Schäden führen.",
                    nl: "Het optische Kerr-effect zorgt ervoor dat de brekingsindex verandert als n = n₀ + n₂I, waarbij I de lichtintensiteit is en n₂ de niet-lineaire coëfficiënt. Voor positieve n₂ creëren intense bundels een hogere brekingsindex in het centrum, wat werkt als een zelf-geïnduceerde lens. Dit kan leiden tot zelfbundeling, solitonvorming of catastrofale optische schade."
                }
            },
            {
                question: {
                    en: "What is the relationship between wave packet uncertainty and the uncertainty principle?",
                    es: "¿Cuál es la relación entre la incertidumbre del paquete de ondas y el principio de incertidumbre?",
                    de: "Was ist die Beziehung zwischen Wellenpaketunsicherheit und der Unschärferelation?",
                    nl: "Wat is de relatie tussen golfpakketonzekerheid en het onzekerheidsbeginsel?"
                },
                options: [
                    {
                        en: "Δx·Δk ≥ 1/2, meaning narrow spatial waves have broad momentum/frequency spread and vice versa",
                        es: "Δx·Δk ≥ 1/2, significando que ondas espacialmente estrechas tienen amplia dispersión de momento/frecuencia y viceversa",
                        de: "Δx·Δk ≥ 1/2, bedeutet dass räumlich schmale Wellen breite Impuls-/Frequenzverteilung haben und umgekehrt",
                        nl: "Δx·Δk ≥ 1/2, betekent dat ruimtelijk smalle golven brede momentum/frequentiespreiding hebben en omgekeerd"
                    },
                    {
                        en: "Wave packets can be made arbitrarily precise in both position and momentum simultaneously",
                        es: "Los paquetes de ondas pueden hacerse arbitrariamente precisos en posición y momento simultáneamente",
                        de: "Wellenpakete können beliebig präzise in Position und Impuls gleichzeitig gemacht werden",
                        nl: "Golfpakketten kunnen willekeurig precies gemaakt worden in zowel positie als momentum tegelijkertijd"
                    },
                    {
                        en: "Uncertainty only applies to quantum particles, not classical waves",
                        es: "La incertidumbre solo se aplica a partículas cuánticas, no a ondas clásicas",
                        de: "Unsicherheit gilt nur für Quantenteilchen, nicht für klassische Wellen",
                        nl: "Onzekerheid geldt alleen voor kwantumdeeltjes, niet voor klassieke golven"
                    },
                    {
                        en: "Wave packet width remains constant regardless of frequency content",
                        es: "El ancho del paquete de ondas permanece constante independientemente del contenido de frecuencia",
                        de: "Wellenpakebreite bleibt konstant unabhängig vom Frequenzinhalt",
                        nl: "Golfpakketbreedte blijft constant ongeacht frequentie-inhoud"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The wave packet uncertainty relation Δx·Δk ≥ 1/2 is fundamental to both classical and quantum waves. A localized wave packet requires many frequency components (large Δk), while a pure sine wave (small Δk) extends infinitely in space (large Δx). In quantum mechanics, this becomes Heisenberg's uncertainty principle ΔxΔp ≥ ℏ/2 via p = ℏk.",
                    es: "La relación de incertidumbre del paquete de ondas Δx·Δk ≥ 1/2 es fundamental tanto para ondas clásicas como cuánticas. Un paquete de ondas localizado requiere muchos componentes de frecuencia (gran Δk), mientras que una onda sinusoidal pura (pequeño Δk) se extiende infinitamente en el espacio (gran Δx). En mecánica cuántica, esto se convierte en el principio de incertidumbre de Heisenberg ΔxΔp ≥ ℏ/2 vía p = ℏk.",
                    de: "Die Wellenpaketunsicherheitsrelation Δx·Δk ≥ 1/2 ist fundamental für klassische und Quantenwellen. Ein lokalisiertes Wellenpaket erfordert viele Frequenzkomponenten (großes Δk), während eine reine Sinuswelle (kleines Δk) sich unendlich im Raum ausdehnt (großes Δx). In der Quantenmechanik wird dies zur Heisenbergschen Unschärferelation ΔxΔp ≥ ℏ/2 über p = ℏk.",
                    nl: "De golfpakketonzekerheidsrelatie Δx·Δk ≥ 1/2 is fundamenteel voor zowel klassieke als kwantumgolven. Een gelokaliseerd golfpakket vereist veel frequentiecomponenten (grote Δk), terwijl een pure sinusgolf (kleine Δk) oneindig uitstrekt in de ruimte (grote Δx). In kwantummechanica wordt dit Heisenberg's onzekerheidsbeginsel ΔxΔp ≥ ℏ/2 via p = ℏk."
                }
            },
            {
                question: {
                    en: "What is the concept of wave momentum and radiation pressure?",
                    es: "¿Cuál es el concepto de momento de onda y presión de radiación?",
                    de: "Was ist das Konzept des Wellenimpulses und Strahlungsdrucks?",
                    nl: "Wat is het concept van golfmomentum en stralingsdruk?"
                },
                options: [
                    {
                        en: "Waves carry momentum p = E/c (or ℏk) and exert pressure when absorbed or reflected, enabling solar sails and optical tweezers",
                        es: "Las ondas transportan momento p = E/c (o ℏk) y ejercen presión cuando se absorben o reflejan, permitiendo velas solares y pinzas ópticas",
                        de: "Wellen tragen Impuls p = E/c (oder ℏk) und üben Druck aus, wenn sie absorbiert oder reflektiert werden, was Sonnensegel und optische Pinzetten ermöglicht",
                        nl: "Golven dragen momentum p = E/c (of ℏk) en oefenen druk uit wanneer geabsorbeerd of gereflecteerd, wat zonnezeilen en optische pincetten mogelijk maakt"
                    },
                    {
                        en: "Only massive particles can carry momentum; waves transport only energy",
                        es: "Solo las partículas con masa pueden transportar momento; las ondas transportan solo energía",
                        de: "Nur massive Teilchen können Impuls tragen; Wellen transportieren nur Energie",
                        nl: "Alleen massieve deeltjes kunnen momentum dragen; golven transporteren alleen energie"
                    },
                    {
                        en: "Wave momentum is always perpendicular to the direction of propagation",
                        es: "El momento de onda siempre es perpendicular a la dirección de propagación",
                        de: "Wellenimpuls ist immer senkrecht zur Ausbreitungsrichtung",
                        nl: "Golfmomentum is altijd loodrecht op de voortplantingsrichting"
                    },
                    {
                        en: "Radiation pressure only exists for electromagnetic waves, not mechanical waves",
                        es: "La presión de radiación solo existe para ondas electromagnéticas, no ondas mecánicas",
                        de: "Strahlungsdruck existiert nur für elektromagnetische Wellen, nicht für mechanische Wellen",
                        nl: "Stralingsdruk bestaat alleen voor elektromagnetische golven, niet mechanische golven"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "All waves carry momentum in the direction of propagation. For electromagnetic waves, p = E/c where E is energy and c is light speed. For matter waves, p = ℏk. When waves are absorbed, their momentum is transferred to the object (radiation pressure). Solar sails use this for spacecraft propulsion, and optical tweezers use it to manipulate microscopic particles.",
                    es: "Todas las ondas transportan momento en la dirección de propagación. Para ondas electromagnéticas, p = E/c donde E es energía y c es la velocidad de la luz. Para ondas de materia, p = ℏk. Cuando las ondas se absorben, su momento se transfiere al objeto (presión de radiación). Las velas solares usan esto para propulsión de naves espaciales, y las pinzas ópticas lo usan para manipular partículas microscópicas.",
                    de: "Alle Wellen tragen Impuls in Ausbreitungsrichtung. Für elektromagnetische Wellen ist p = E/c, wobei E die Energie und c die Lichtgeschwindigkeit ist. Für Materiewellen ist p = ℏk. Wenn Wellen absorbiert werden, wird ihr Impuls auf das Objekt übertragen (Strahlungsdruck). Sonnensegel nutzen dies für Raumfahrzeugantrieb, und optische Pinzetten verwenden es zur Manipulation mikroskopischer Teilchen.",
                    nl: "Alle golven dragen momentum in de voortplantingsrichting. Voor elektromagnetische golven geldt p = E/c waarbij E energie is en c de lichtsnelheid. Voor materiegolven geldt p = ℏk. Wanneer golven geabsorbeerd worden, wordt hun momentum overgedragen aan het object (stralingsdruk). Zonnezeilen gebruiken dit voor ruimtevaartuigvoortstuwing, en optische pincetten gebruiken het om microscopische deeltjes te manipuleren."
                }
            },
            {
                question: {
                    en: "What is the significance of wave normal modes in coupled oscillator systems?",
                    es: "¿Cuál es la importancia de los modos normales de onda en sistemas de osciladores acoplados?",
                    de: "Was ist die Bedeutung von Wellennormalmoden in gekoppelten Oszillatorsystemen?",
                    nl: "Wat is de betekenis van golfnormale modes in gekoppelde oscillatorsystemen?"
                },
                options: [
                    {
                        en: "Normal modes are independent oscillation patterns where all components oscillate at the same frequency with fixed phase relationships",
                        es: "Los modos normales son patrones de oscilación independientes donde todos los componentes oscilan a la misma frecuencia con relaciones de fase fijas",
                        de: "Normalmoden sind unabhängige Schwingungsmuster, bei denen alle Komponenten mit derselben Frequenz und festen Phasenbeziehungen schwingen",
                        nl: "Normale modes zijn onafhankelijke oscillatiepatronen waarbij alle componenten oscilleren op dezelfde frequentie met vaste faserelaties"
                    },
                    {
                        en: "Normal modes occur only when oscillators are completely isolated from each other",
                        es: "Los modos normales ocurren solo cuando los osciladores están completamente aislados entre sí",
                        de: "Normalmoden treten nur auf, wenn Oszillatoren völlig voneinander isoliert sind",
                        nl: "Normale modes treden alleen op wanneer oscillatoren volledig geïsoleerd zijn van elkaar"
                    },
                    {
                        en: "Normal modes represent the chaotic behavior of strongly coupled systems",
                        es: "Los modos normales representan el comportamiento caótico de sistemas fuertemente acoplados",
                        de: "Normalmoden repräsentieren das chaotische Verhalten stark gekoppelter Systeme",
                        nl: "Normale modes vertegenwoordigen het chaotische gedrag van sterk gekoppelde systemen"
                    },
                    {
                        en: "Normal modes always have the same amplitude in all parts of the system",
                        es: "Los modos normales siempre tienen la misma amplitud en todas las partes del sistema",
                        de: "Normalmoden haben immer dieselbe Amplitude in allen Teilen des Systems",
                        nl: "Normale modes hebben altijd dezelfde amplitude in alle delen van het systeem"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Normal modes are fundamental oscillation patterns in coupled systems where each mode oscillates at a specific eigenfrequency with a characteristic spatial pattern (eigenmode). Any arbitrary oscillation can be expressed as a superposition of normal modes. This concept explains molecular vibrations, building resonances, and wave propagation in periodic structures like crystals.",
                    es: "Los modos normales son patrones de oscilación fundamentales en sistemas acoplados donde cada modo oscila a una eigenfrecuencia específica con un patrón espacial característico (eigenmodo). Cualquier oscilación arbitraria puede expresarse como superposición de modos normales. Este concepto explica vibraciones moleculares, resonancias de edificios y propagación de ondas en estructuras periódicas como cristales.",
                    de: "Normalmoden sind fundamentale Schwingungsmuster in gekoppelten Systemen, wo jeder Modus mit einer spezifischen Eigenfrequenz und einem charakteristischen räumlichen Muster (Eigenmode) schwingt. Jede beliebige Schwingung kann als Überlagerung von Normalmoden ausgedrückt werden. Dieses Konzept erklärt Molekülschwingungen, Gebäuderesonanzen und Wellenausbreitung in periodischen Strukturen wie Kristallen.",
                    nl: "Normale modes zijn fundamentele oscillatiepatronen in gekoppelde systemen waarbij elke mode oscilleert op een specifieke eigenfrequentie met een karakteristiek ruimtelijk patroon (eigenmode). Elke willekeurige oscillatie kan uitgedrukt worden als superpositie van normale modes. Dit concept verklaart moleculaire trillingen, gebouwresonanties en golfvoortplanting in periodieke structuren zoals kristallen."
                }
            },
            {
                question: {
                    en: "What is the phenomenon of wave amplification by stimulated emission (LASER principle)?",
                    es: "¿Qué es el fenómeno de amplificación de ondas por emisión estimulada (principio LÁSER)?",
                    de: "Was ist das Phänomen der Wellenverstärkung durch stimulierte Emission (LASER-Prinzip)?",
                    nl: "Wat is het fenomeen van golfversterking door gestimuleerde emissie (LASER-principe)?"
                },
                options: [
                    {
                        en: "Incident photons stimulate identical photon emission from excited atoms, creating coherent amplification when population inversion exists",
                        es: "Los fotones incidentes estimulan la emisión de fotones idénticos desde átomos excitados, creando amplificación coherente cuando existe inversión de población",
                        de: "Einfallende Photonen stimulieren identische Photonenemission von angeregten Atomen und erzeugen kohärente Verstärkung bei Besetzungsinversion",
                        nl: "Invallende fotonen stimuleren identieke fotonenemissie van geëxciteerde atomen, wat coherente versterking creëert wanneer populatie-inversie bestaat"
                    },
                    {
                        en: "Acoustic waves are amplified by resonance in laser cavities",
                        es: "Las ondas acústicas se amplifican por resonancia en cavidades láser",
                        de: "Akustische Wellen werden durch Resonanz in Laserkavitäten verstärkt",
                        nl: "Akoestische golven worden versterkt door resonantie in laserholtes"
                    },
                    {
                        en: "Light waves increase in amplitude automatically when passing through any transparent medium",
                        es: "Las ondas de luz aumentan en amplitud automáticamente al pasar a través de cualquier medio transparente",
                        de: "Lichtwellen nehmen automatisch an Amplitude zu, wenn sie durch transparente Medien passieren",
                        nl: "Lichtgolven nemen automatisch toe in amplitude wanneer ze door elk transparant medium passeren"
                    },
                    {
                        en: "Wave amplification occurs only through nonlinear optical effects",
                        es: "La amplificación de ondas ocurre solo a través de efectos ópticos no lineales",
                        de: "Wellenverstärkung tritt nur durch nichtlineare optische Effekte auf",
                        nl: "Golfversterking treedt alleen op door niet-lineaire optische effecten"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "In a laser, atoms are pumped to excited states creating population inversion (more atoms in upper than lower energy levels). When a photon of the right frequency encounters an excited atom, it stimulates emission of an identical photon (same frequency, phase, direction, polarization). This creates coherent amplification. Optical feedback from mirrors sustains oscillation, producing intense, coherent light.",
                    es: "En un láser, los átomos son bombeados a estados excitados creando inversión de población (más átomos en niveles de energía superiores que inferiores). Cuando un fotón de la frecuencia correcta encuentra un átomo excitado, estimula la emisión de un fotón idéntico (misma frecuencia, fase, dirección, polarización). Esto crea amplificación coherente. La retroalimentación óptica de espejos sostiene la oscilación, produciendo luz intensa y coherente.",
                    de: "In einem Laser werden Atome in angeregte Zustände gepumpt, wodurch Besetzungsinversion entsteht (mehr Atome in oberen als in unteren Energieniveaus). Wenn ein Photon der richtigen Frequenz auf ein angeregtes Atom trifft, stimuliert es die Emission eines identischen Photons (gleiche Frequenz, Phase, Richtung, Polarisation). Dies erzeugt kohärente Verstärkung. Optische Rückkopplung durch Spiegel erhält die Schwingung aufrecht und produziert intensives, kohärentes Licht.",
                    nl: "In een laser worden atomen gepompt naar geëxciteerde toestanden wat populatie-inversie creëert (meer atomen in hogere dan lagere energieniveaus). Wanneer een foton van de juiste frequentie een geëxciteerd atoom tegenkomt, stimuleert het emissie van een identiek foton (zelfde frequentie, fase, richting, polarisatie). Dit creëert coherente versterking. Optische feedback van spiegels onderhoudt oscillatie, wat intense, coherente licht produceert."
                }
            },
            {
                question: {
                    en: "What is the relationship between wave symmetry and conservation laws?",
                    es: "¿Cuál es la relación entre la simetría de ondas y las leyes de conservación?",
                    de: "Was ist die Beziehung zwischen Wellensymmetrie und Erhaltungsgesetzen?",
                    nl: "Wat is de relatie tussen golfsymmetrie en behoudswetten?"
                },
                options: [
                    {
                        en: "Noether's theorem: each continuous symmetry corresponds to a conserved quantity (time→energy, space→momentum, rotation→angular momentum)",
                        es: "Teorema de Noether: cada simetría continua corresponde a una cantidad conservada (tiempo→energía, espacio→momento, rotación→momento angular)",
                        de: "Noethers Theorem: jede kontinuierliche Symmetrie entspricht einer erhaltenen Größe (Zeit→Energie, Raum→Impuls, Rotation→Drehimpuls)",
                        nl: "Noether's stelling: elke continue symmetrie correspondeert met een behouden grootheid (tijd→energie, ruimte→momentum, rotatie→impulsmoment)"
                    },
                    {
                        en: "Symmetric waves always have higher energy than asymmetric ones",
                        es: "Las ondas simétricas siempre tienen mayor energía que las asimétricas",
                        de: "Symmetrische Wellen haben immer höhere Energie als asymmetrische",
                        nl: "Symmetrische golven hebben altijd hogere energie dan asymmetrische"
                    },
                    {
                        en: "Wave symmetry determines the speed of propagation in all media",
                        es: "La simetría de ondas determina la velocidad de propagación en todos los medios",
                        de: "Wellensymmetrie bestimmt die Ausbreitungsgeschwindigkeit in allen Medien",
                        nl: "Golfsymmetrie bepaalt de voortplantingssnelheid in alle media"
                    },
                    {
                        en: "Conservation laws apply only to electromagnetic waves, not mechanical waves",
                        es: "Las leyes de conservación se aplican solo a ondas electromagnéticas, no a ondas mecánicas",
                        de: "Erhaltungsgesetze gelten nur für elektromagnetische Wellen, nicht für mechanische Wellen",
                        nl: "Behoudswetten gelden alleen voor elektromagnetische golven, niet voor mechanische golven"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Noether's theorem establishes that every continuous symmetry of a physical system corresponds to a conservation law. For waves: time translation symmetry→energy conservation, spatial translation symmetry→momentum conservation, rotational symmetry→angular momentum conservation. This deep connection between geometry and physics explains why conservation laws are universal and fundamental to all wave phenomena.",
                    es: "El teorema de Noether establece que cada simetría continua de un sistema físico corresponde a una ley de conservación. Para ondas: simetría de traslación temporal→conservación de energía, simetría de traslación espacial→conservación de momento, simetría rotacional→conservación de momento angular. Esta conexión profunda entre geometría y física explica por qué las leyes de conservación son universales y fundamentales para todos los fenómenos ondulatorios.",
                    de: "Noethers Theorem stellt fest, dass jede kontinuierliche Symmetrie eines physikalischen Systems einem Erhaltungsgesetz entspricht. Für Wellen: Zeittranslationssymmetrie→Energieerhaltung, räumliche Translationssymmetrie→Impulserhaltung, Rotationssymmetrie→Drehimpulserhaltung. Diese tiefe Verbindung zwischen Geometrie und Physik erklärt, warum Erhaltungsgesetze universell und fundamental für alle Wellenphänomene sind.",
                    nl: "Noether's stelling stelt vast dat elke continue symmetrie van een fysiek systeem overeenkomt met een behoudswet. Voor golven: tijdtranslatie-symmetrie→energiebehoud, ruimtelijke translatie-symmetrie→momentumbehoud, rotatie-symmetrie→impulsmomentbehoud. Deze diepe verbinding tussen geometrie en natuurkunde verklaart waarom behoudswetten universeel en fundamenteel zijn voor alle golfverschijnselen."
                }
            }
        ]
    };

    if (typeof window !== 'undefined' && typeof window.addLevel === 'function') {
        window.addLevel('brain-teaser', 'physics', 3, level3);
    }
})();
