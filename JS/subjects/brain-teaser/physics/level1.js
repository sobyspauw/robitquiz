// Physics - Level 1: Classical Mechanics
(function() {
    const level1 = {
        name: {
            en: "Classical Mechanics",
            es: "Mecánica Clásica",
            de: "Klassische Mechanik",
            nl: "Klassieke Mechanica"
        },
        questions: [
            {
                question: {
                    en: "What is Newton's First Law of Motion?",
                    es: "¿Cuál es la Primera Ley del Movimiento de Newton?",
                    de: "Was ist Newtons Erstes Bewegungsgesetz?",
                    nl: "Wat is Newton's Eerste Bewegingswet?"
                },
                options: [
                    {
                        en: "An object at rest stays at rest, and an object in motion stays in motion, unless acted upon by an unbalanced force",
                        es: "Un objeto en reposo permanece en reposo, y un objeto en movimiento permanece en movimiento, a menos que actúe sobre él una fuerza no equilibrada",
                        de: "Ein Objekt in Ruhe bleibt in Ruhe, und ein Objekt in Bewegung bleibt in Bewegung, es sei denn, es wird von einer unausgeglichenen Kraft beeinflusst",
                        nl: "Een object in rust blijft in rust, en een object in beweging blijft in beweging, tenzij er een onevenwichtige kracht op wordt uitgeoefend"
                    },
                    {
                        en: "Force equals mass times acceleration (F = ma)",
                        es: "La fuerza es igual a la masa por la aceleración (F = ma)",
                        de: "Kraft gleich Masse mal Beschleunigung (F = ma)",
                        nl: "Kracht is gelijk aan massa maal versnelling (F = ma)"
                    },
                    {
                        en: "For every action, there is an equal and opposite reaction",
                        es: "Para cada acción, hay una reacción igual y opuesta",
                        de: "Für jede Aktion gibt es eine gleiche und entgegengesetzte Reaktion",
                        nl: "Voor elke actie is er een gelijke en tegenovergestelde reactie"
                    },
                    {
                        en: "Energy cannot be created or destroyed, only transformed",
                        es: "La energía no puede ser creada ni destruida, solo transformada",
                        de: "Energie kann nicht erzeugt oder zerstört werden, nur umgewandelt",
                        nl: "Energie kan niet worden gecreëerd of vernietigd, alleen getransformeerd"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Newton's First Law, also known as the law of inertia, states that objects maintain their state of motion unless acted upon by an external force. This fundamental principle establishes the concept of inertial reference frames.",
                    es: "La Primera Ley de Newton, también conocida como ley de inercia, establece que los objetos mantienen su estado de movimiento a menos que actúe sobre ellos una fuerza externa. Este principio fundamental establece el concepto de marcos de referencia inerciales.",
                    de: "Newtons Erstes Gesetz, auch als Trägheitsgesetz bekannt, besagt, dass Objekte ihren Bewegungszustand beibehalten, es sei denn, sie werden von einer externen Kraft beeinflusst. Dieses grundlegende Prinzip etabliert das Konzept der Trägheitsreferenzsysteme.",
                    nl: "Newton's Eerste Wet, ook bekend als de traagheidswet, stelt dat objecten hun bewegingstoestand behouden tenzij er een externe kracht op wordt uitgeoefend. Dit fundamentele principe vestigt het concept van inertiaalsystemen."
                }
            },
            {
                question: {
                    en: "What is the relationship between displacement, velocity, and acceleration in uniformly accelerated motion?",
                    es: "¿Cuál es la relación entre desplazamiento, velocidad y aceleración en movimiento uniformemente acelerado?",
                    de: "Wie ist das Verhältnis zwischen Verschiebung, Geschwindigkeit und Beschleunigung bei gleichmäßig beschleunigter Bewegung?",
                    nl: "Wat is de relatie tussen verplaatsing, snelheid en versnelling in uniform versnelde beweging?"
                },
                options: [
                    {
                        en: "s = ut + ½at² (where s is displacement, u is initial velocity, a is acceleration, t is time)",
                        es: "s = ut + ½at² (donde s es desplazamiento, u es velocidad inicial, a es aceleración, t es tiempo)",
                        de: "s = ut + ½at² (wobei s die Verschiebung, u die Anfangsgeschwindigkeit, a die Beschleunigung, t die Zeit ist)",
                        nl: "s = ut + ½at² (waarbij s verplaatsing is, u beginsnelheid, a versnelling, t tijd)"
                    },
                    {
                        en: "s = vt (where s is displacement, v is constant velocity, t is time)",
                        es: "s = vt (donde s es desplazamiento, v es velocidad constante, t es tiempo)",
                        de: "s = vt (wobei s die Verschiebung, v die konstante Geschwindigkeit, t die Zeit ist)",
                        nl: "s = vt (waarbij s verplaatsing is, v constante snelheid, t tijd)"
                    },
                    {
                        en: "s = at² (where s is displacement, a is acceleration, t is time)",
                        es: "s = at² (donde s es desplazamiento, a es aceleración, t es tiempo)",
                        de: "s = at² (wobei s die Verschiebung, a die Beschleunigung, t die Zeit ist)",
                        nl: "s = at² (waarbij s verplaatsing is, a versnelling, t tijd)"
                    },
                    {
                        en: "s = u/a (where s is displacement, u is initial velocity, a is acceleration)",
                        es: "s = u/a (donde s es desplazamiento, u es velocidad inicial, a es aceleración)",
                        de: "s = u/a (wobei s die Verschiebung, u die Anfangsgeschwindigkeit, a die Beschleunigung ist)",
                        nl: "s = u/a (waarbij s verplaatsing is, u beginsnelheid, a versnelling)"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The kinematic equation s = ut + ½at² describes how displacement varies with time for uniformly accelerated motion. It combines the initial velocity component (ut) with the acceleration component (½at²).",
                    es: "La ecuación cinemática s = ut + ½at² describe cómo varía el desplazamiento con el tiempo para el movimiento uniformemente acelerado. Combina el componente de velocidad inicial (ut) con el componente de aceleración (½at²).",
                    de: "Die kinematische Gleichung s = ut + ½at² beschreibt, wie sich die Verschiebung mit der Zeit bei gleichmäßig beschleunigter Bewegung ändert. Sie kombiniert die Anfangsgeschwindigkeitskomponente (ut) mit der Beschleunigungskomponente (½at²).",
                    nl: "De kinematische vergelijking s = ut + ½at² beschrijft hoe verplaatsing varieert met tijd voor uniform versnelde beweging. Het combineert de beginsnelheidscomponent (ut) met de versnellingscomponent (½at²)."
                }
            },
            {
                question: {
                    en: "What is the principle behind conservation of momentum?",
                    es: "¿Cuál es el principio detrás de la conservación del momento?",
                    de: "Was ist das Prinzip hinter der Impulserhaltung?",
                    nl: "Wat is het principe achter behoud van impuls?"
                },
                options: [
                    {
                        en: "In a closed system with no external forces, the total momentum remains constant",
                        es: "En un sistema cerrado sin fuerzas externas, el momento total permanece constante",
                        de: "In einem geschlossenen System ohne externe Kräfte bleibt der Gesamtimpuls konstant",
                        nl: "In een gesloten systeem zonder externe krachten blijft de totale impuls constant"
                    },
                    {
                        en: "Momentum increases proportionally with velocity",
                        es: "El momento aumenta proporcionalmente con la velocidad",
                        de: "Der Impuls steigt proportional zur Geschwindigkeit",
                        nl: "Impuls neemt evenredig toe met snelheid"
                    },
                    {
                        en: "Momentum equals force times time",
                        es: "El momento es igual a la fuerza por el tiempo",
                        de: "Impuls gleich Kraft mal Zeit",
                        nl: "Impuls is gelijk aan kracht maal tijd"
                    },
                    {
                        en: "Heavy objects always have more momentum than light objects",
                        es: "Los objetos pesados siempre tienen más momento que los objetos livianos",
                        de: "Schwere Objekte haben immer mehr Impuls als leichte Objekte",
                        nl: "Zware objecten hebben altijd meer impuls dan lichte objecten"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Conservation of momentum states that in an isolated system (no external forces), the total momentum before an interaction equals the total momentum after the interaction. This follows from Newton's Third Law and is fundamental to collision analysis.",
                    es: "La conservación del momento establece que en un sistema aislado (sin fuerzas externas), el momento total antes de una interacción es igual al momento total después de la interacción. Esto se deriva de la Tercera Ley de Newton y es fundamental para el análisis de colisiones.",
                    de: "Die Impulserhaltung besagt, dass in einem isolierten System (keine externen Kräfte) der Gesamtimpuls vor einer Wechselwirkung dem Gesamtimpuls nach der Wechselwirkung entspricht. Dies folgt aus Newtons Drittem Gesetz und ist grundlegend für die Kollisionsanalyse.",
                    nl: "Behoud van impuls stelt dat in een geïsoleerd systeem (geen externe krachten) de totale impuls voor een interactie gelijk is aan de totale impuls na de interactie. Dit volgt uit Newton's Derde Wet en is fundamenteel voor botsingsanalyse."
                }
            },
            {
                question: {
                    en: "What is the difference between mass and weight?",
                    es: "¿Cuál es la diferencia entre masa y peso?",
                    de: "Was ist der Unterschied zwischen Masse und Gewicht?",
                    nl: "Wat is het verschil tussen massa en gewicht?"
                },
                options: [
                    {
                        en: "Mass is the amount of matter in an object; weight is the gravitational force acting on that mass",
                        es: "La masa es la cantidad de materia en un objeto; el peso es la fuerza gravitacional que actúa sobre esa masa",
                        de: "Masse ist die Menge an Materie in einem Objekt; Gewicht ist die Gravitationskraft, die auf diese Masse wirkt",
                        nl: "Massa is de hoeveelheid materie in een object; gewicht is de zwaartekracht die op die massa inwerkt"
                    },
                    {
                        en: "Mass and weight are the same thing measured in different units",
                        es: "La masa y el peso son lo mismo medido en diferentes unidades",
                        de: "Masse und Gewicht sind dasselbe, gemessen in verschiedenen Einheiten",
                        nl: "Massa en gewicht zijn hetzelfde gemeten in verschillende eenheden"
                    },
                    {
                        en: "Weight is constant everywhere; mass varies with location",
                        es: "El peso es constante en todas partes; la masa varía con la ubicación",
                        de: "Das Gewicht ist überall konstant; die Masse variiert je nach Standort",
                        nl: "Gewicht is overal constant; massa varieert met locatie"
                    },
                    {
                        en: "Mass is measured in newtons; weight is measured in kilograms",
                        es: "La masa se mide en newtons; el peso se mide en kilogramos",
                        de: "Masse wird in Newton gemessen; Gewicht wird in Kilogramm gemessen",
                        nl: "Massa wordt gemeten in newton; gewicht wordt gemeten in kilogram"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Mass is an intrinsic property of matter (measured in kg) that remains constant regardless of location. Weight is the force (measured in N) exerted by gravity on that mass, calculated as W = mg, and varies with gravitational field strength.",
                    es: "La masa es una propiedad intrínseca de la materia (medida en kg) que permanece constante independientemente de la ubicación. El peso es la fuerza (medida en N) ejercida por la gravedad sobre esa masa, calculada como W = mg, y varía con la intensidad del campo gravitacional.",
                    de: "Masse ist eine intrinsische Eigenschaft der Materie (gemessen in kg), die unabhängig vom Standort konstant bleibt. Gewicht ist die Kraft (gemessen in N), die von der Schwerkraft auf diese Masse ausgeübt wird, berechnet als W = mg, und variiert mit der Gravitationsfeldstärke.",
                    nl: "Massa is een intrinsieke eigenschap van materie (gemeten in kg) die constant blijft ongeacht locatie. Gewicht is de kracht (gemeten in N) die door zwaartekracht op die massa wordt uitgeoefend, berekend als W = mg, en varieert met gravitatieveldsterkte."
                }
            },
            {
                question: {
                    en: "What is centripetal force?",
                    es: "¿Qué es la fuerza centrípeta?",
                    de: "Was ist Zentripetalkraft?",
                    nl: "Wat is middelpuntzoekende kracht?"
                },
                options: [
                    {
                        en: "The force directed toward the center of curvature that keeps an object moving in a circular path",
                        es: "La fuerza dirigida hacia el centro de curvatura que mantiene un objeto moviéndose en una trayectoria circular",
                        de: "Die Kraft, die zum Krümmungsmittelpunkt gerichtet ist und ein Objekt auf einer kreisförmigen Bahn hält",
                        nl: "De kracht gericht naar het middelpunt van kromming die een object in een cirkelvormige baan houdt"
                    },
                    {
                        en: "The outward force that pushes objects away from the center of rotation",
                        es: "La fuerza hacia afuera que empuja los objetos lejos del centro de rotación",
                        de: "Die nach außen gerichtete Kraft, die Objekte vom Rotationszentrum wegschiebt",
                        nl: "De naar buiten gerichte kracht die objecten van het rotatiecentrum wegduwt"
                    },
                    {
                        en: "The force that causes objects to move faster in circular motion",
                        es: "La fuerza que hace que los objetos se muevan más rápido en movimiento circular",
                        de: "Die Kraft, die Objekte bei kreisförmiger Bewegung schneller macht",
                        nl: "De kracht die objecten sneller doet bewegen in cirkelvormige beweging"
                    },
                    {
                        en: "The gravitational force acting on rotating objects",
                        es: "La fuerza gravitacional que actúa sobre objetos en rotación",
                        de: "Die Gravitationskraft, die auf rotierende Objekte wirkt",
                        nl: "De zwaartekracht die inwerkt op roterende objecten"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Centripetal force is the net inward force required to keep an object moving in a circular path. It's always directed toward the center of the circle and has magnitude F = mv²/r, where m is mass, v is speed, and r is radius.",
                    es: "La fuerza centrípeta es la fuerza neta hacia adentro requerida para mantener un objeto moviéndose en una trayectoria circular. Siempre está dirigida hacia el centro del círculo y tiene magnitud F = mv²/r, donde m es masa, v es velocidad, y r es radio.",
                    de: "Zentripetalkraft ist die resultierende Einwärtskraft, die erforderlich ist, um ein Objekt auf einer kreisförmigen Bahn zu halten. Sie ist immer zum Mittelpunkt des Kreises gerichtet und hat die Größe F = mv²/r, wobei m die Masse, v die Geschwindigkeit und r der Radius ist.",
                    nl: "Middelpuntzoekende kracht is de netto naar binnen gerichte kracht die nodig is om een object in een cirkelvormige baan te houden. Het is altijd gericht naar het middelpunt van de cirkel en heeft grootte F = mv²/r, waarbij m massa is, v snelheid, en r straal."
                }
            },
            {
                question: {
                    en: "What is work in physics?",
                    es: "¿Qué es el trabajo en física?",
                    de: "Was ist Arbeit in der Physik?",
                    nl: "Wat is arbeid in de natuurkunde?"
                },
                options: [
                    {
                        en: "Work is done when a force causes displacement in the direction of the force (W = F·d·cosθ)",
                        es: "Se realiza trabajo cuando una fuerza causa desplazamiento en la dirección de la fuerza (W = F·d·cosθ)",
                        de: "Arbeit wird verrichtet, wenn eine Kraft eine Verschiebung in Richtung der Kraft verursacht (W = F·d·cosθ)",
                        nl: "Arbeid wordt verricht wanneer een kracht verplaatsing veroorzaakt in de richting van de kracht (W = F·d·cosθ)"
                    },
                    {
                        en: "Work is any force applied to an object, regardless of motion",
                        es: "El trabajo es cualquier fuerza aplicada a un objeto, independientemente del movimiento",
                        de: "Arbeit ist jede Kraft, die auf ein Objekt ausgeübt wird, unabhängig von der Bewegung",
                        nl: "Arbeid is elke kracht die op een object wordt toegepast, ongeacht beweging"
                    },
                    {
                        en: "Work equals power times velocity",
                        es: "El trabajo es igual a la potencia por la velocidad",
                        de: "Arbeit gleich Leistung mal Geschwindigkeit",
                        nl: "Arbeid is gelijk aan vermogen maal snelheid"
                    },
                    {
                        en: "Work is the energy stored in an object",
                        es: "El trabajo es la energía almacenada en un objeto",
                        de: "Arbeit ist die in einem Objekt gespeicherte Energie",
                        nl: "Arbeid is de energie opgeslagen in een object"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Work is defined as the dot product of force and displacement: W = F·d·cosθ, where θ is the angle between force and displacement vectors. Work is only done when there is both force and displacement in the direction of that force.",
                    es: "El trabajo se define como el producto punto de fuerza y desplazamiento: W = F·d·cosθ, donde θ es el ángulo entre los vectores de fuerza y desplazamiento. Solo se realiza trabajo cuando hay tanto fuerza como desplazamiento en la dirección de esa fuerza.",
                    de: "Arbeit wird definiert als das Skalarprodukt von Kraft und Verschiebung: W = F·d·cosθ, wobei θ der Winkel zwischen Kraft- und Verschiebungsvektoren ist. Arbeit wird nur verrichtet, wenn sowohl Kraft als auch Verschiebung in Richtung dieser Kraft vorhanden sind.",
                    nl: "Arbeid wordt gedefinieerd als het inproduct van kracht en verplaatsing: W = F·d·cosθ, waarbij θ de hoek is tussen kracht- en verplaatsingsvectoren. Arbeid wordt alleen verricht wanneer er zowel kracht als verplaatsing is in de richting van die kracht."
                }
            },
            {
                question: {
                    en: "What is the principle of conservation of energy?",
                    es: "¿Cuál es el principio de conservación de la energía?",
                    de: "Was ist das Prinzip der Energieerhaltung?",
                    nl: "Wat is het principe van energiebehoud?"
                },
                options: [
                    {
                        en: "Energy cannot be created or destroyed, only transformed from one form to another",
                        es: "La energía no puede ser creada ni destruida, solo transformada de una forma a otra",
                        de: "Energie kann nicht erzeugt oder zerstört werden, sondern nur von einer Form in eine andere umgewandelt",
                        nl: "Energie kan niet worden gecreëerd of vernietigd, alleen getransformeerd van de ene vorm naar de andere"
                    },
                    {
                        en: "Energy always increases in a closed system",
                        es: "La energía siempre aumenta en un sistema cerrado",
                        de: "Energie nimmt in einem geschlossenen System immer zu",
                        nl: "Energie neemt altijd toe in een gesloten systeem"
                    },
                    {
                        en: "Kinetic energy is always greater than potential energy",
                        es: "La energía cinética es siempre mayor que la energía potencial",
                        de: "Kinetische Energie ist immer größer als potentielle Energie",
                        nl: "Kinetische energie is altijd groter dan potentiële energie"
                    },
                    {
                        en: "Energy flows from hot objects to cold objects",
                        es: "La energía fluye de objetos calientes a objetos fríos",
                        de: "Energie fließt von heißen zu kalten Objekten",
                        nl: "Energie stroomt van warme objecten naar koude objecten"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The conservation of energy principle states that the total energy of an isolated system remains constant over time. Energy can change forms (kinetic ↔ potential, mechanical ↔ thermal, etc.) but the total amount remains unchanged.",
                    es: "El principio de conservación de la energía establece que la energía total de un sistema aislado permanece constante a lo largo del tiempo. La energía puede cambiar de forma (cinética ↔ potencial, mecánica ↔ térmica, etc.) pero la cantidad total permanece sin cambios.",
                    de: "Das Prinzip der Energieerhaltung besagt, dass die Gesamtenergie eines isolierten Systems über die Zeit konstant bleibt. Energie kann ihre Form ändern (kinetisch ↔ potentiell, mechanisch ↔ thermisch, etc.), aber die Gesamtmenge bleibt unverändert.",
                    nl: "Het principe van energiebehoud stelt dat de totale energie van een geïsoleerd systeem constant blijft over tijd. Energie kan van vorm veranderen (kinetisch ↔ potentieel, mechanisch ↔ thermisch, enz.) maar de totale hoeveelheid blijft onveranderd."
                }
            },
            {
                question: {
                    en: "What is simple harmonic motion?",
                    es: "¿Qué es el movimiento armónico simple?",
                    de: "Was ist einfache harmonische Bewegung?",
                    nl: "Wat is eenvoudige harmonische beweging?"
                },
                options: [
                    {
                        en: "Periodic motion where the restoring force is proportional to displacement (F = -kx)",
                        es: "Movimiento periódico donde la fuerza restauradora es proporcional al desplazamiento (F = -kx)",
                        de: "Periodische Bewegung, bei der die Rückstellkraft proportional zur Verschiebung ist (F = -kx)",
                        nl: "Periodieke beweging waarbij de herstellende kracht evenredig is met verplaatsing (F = -kx)"
                    },
                    {
                        en: "Motion in a straight line with constant velocity",
                        es: "Movimiento en línea recta con velocidad constante",
                        de: "Bewegung in einer geraden Linie mit konstanter Geschwindigkeit",
                        nl: "Beweging in een rechte lijn met constante snelheid"
                    },
                    {
                        en: "Circular motion with constant angular velocity",
                        es: "Movimiento circular con velocidad angular constante",
                        de: "Kreisbewegung mit konstanter Winkelgeschwindigkeit",
                        nl: "Cirkelvormige beweging met constante hoeksnelheid"
                    },
                    {
                        en: "Motion under constant acceleration",
                        es: "Movimiento bajo aceleración constante",
                        de: "Bewegung unter konstanter Beschleunigung",
                        nl: "Beweging onder constante versnelling"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Simple harmonic motion occurs when an object experiences a restoring force proportional to its displacement from equilibrium position (F = -kx). This results in sinusoidal motion with characteristic period T = 2π√(m/k).",
                    es: "El movimiento armónico simple ocurre cuando un objeto experimenta una fuerza restauradora proporcional a su desplazamiento de la posición de equilibrio (F = -kx). Esto resulta en movimiento sinusoidal con período característico T = 2π√(m/k).",
                    de: "Einfache harmonische Bewegung tritt auf, wenn ein Objekt eine Rückstellkraft erfährt, die proportional zu seiner Verschiebung von der Gleichgewichtsposition ist (F = -kx). Dies führt zu sinusförmiger Bewegung mit charakteristischer Periode T = 2π√(m/k).",
                    nl: "Eenvoudige harmonische beweging treedt op wanneer een object een herstellende kracht ervaart die evenredig is met zijn verplaatsing van evenwichtspositie (F = -kx). Dit resulteert in sinusoïdale beweging met karakteristieke periode T = 2π√(m/k)."
                }
            },
            {
                question: {
                    en: "What is the difference between elastic and inelastic collisions?",
                    es: "¿Cuál es la diferencia entre colisiones elásticas e inelásticas?",
                    de: "Was ist der Unterschied zwischen elastischen und unelastischen Stößen?",
                    nl: "Wat is het verschil tussen elastische en inelastische botsingen?"
                },
                options: [
                    {
                        en: "Elastic collisions conserve both momentum and kinetic energy; inelastic collisions conserve only momentum",
                        es: "Las colisiones elásticas conservan tanto el momento como la energía cinética; las colisiones inelásticas conservan solo el momento",
                        de: "Elastische Stöße erhalten sowohl Impuls als auch kinetische Energie; unelastische Stöße erhalten nur den Impuls",
                        nl: "Elastische botsingen behouden zowel impuls als kinetische energie; inelastische botsingen behouden alleen impuls"
                    },
                    {
                        en: "Elastic collisions involve soft objects; inelastic collisions involve hard objects",
                        es: "Las colisiones elásticas involucran objetos blandos; las colisiones inelásticas involucran objetos duros",
                        de: "Elastische Stöße betreffen weiche Objekte; unelastische Stöße betreffen harte Objekte",
                        nl: "Elastische botsingen betreffen zachte objecten; inelastische botsingen betreffen harde objecten"
                    },
                    {
                        en: "Elastic collisions conserve only momentum; inelastic collisions conserve only energy",
                        es: "Las colisiones elásticas conservan solo el momento; las colisiones inelásticas conservan solo la energía",
                        de: "Elastische Stöße erhalten nur den Impuls; unelastische Stöße erhalten nur die Energie",
                        nl: "Elastische botsingen behouden alleen impuls; inelastische botsingen behouden alleen energie"
                    },
                    {
                        en: "There is no difference; both types conserve the same quantities",
                        es: "No hay diferencia; ambos tipos conservan las mismas cantidades",
                        de: "Es gibt keinen Unterschied; beide Typen erhalten dieselben Größen",
                        nl: "Er is geen verschil; beide typen behouden dezelfde grootheden"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "In elastic collisions, both momentum and kinetic energy are conserved - objects bounce off each other without permanent deformation. In inelastic collisions, momentum is conserved but some kinetic energy is converted to other forms (heat, sound, deformation).",
                    es: "En las colisiones elásticas, tanto el momento como la energía cinética se conservan - los objetos rebotan entre sí sin deformación permanente. En las colisiones inelásticas, el momento se conserva pero parte de la energía cinética se convierte en otras formas (calor, sonido, deformación).",
                    de: "Bei elastischen Stößen bleiben sowohl Impuls als auch kinetische Energie erhalten - Objekte prallen voneinander ab ohne permanente Verformung. Bei unelastischen Stößen bleibt der Impuls erhalten, aber ein Teil der kinetischen Energie wird in andere Formen umgewandelt (Wärme, Schall, Verformung).",
                    nl: "Bij elastische botsingen blijven zowel impuls als kinetische energie behouden - objecten stuiteren van elkaar af zonder permanente vervorming. Bij inelastische botsingen blijft impuls behouden maar wordt een deel van de kinetische energie omgezet in andere vormen (warmte, geluid, vervorming)."
                }
            },
            {
                question: {
                    en: "What is torque and how is it calculated?",
                    es: "¿Qué es el torque y cómo se calcula?",
                    de: "Was ist Drehmoment und wie wird es berechnet?",
                    nl: "Wat is koppel en hoe wordt het berekend?"
                },
                options: [
                    {
                        en: "Torque is rotational force, calculated as τ = r × F (force times perpendicular distance from axis)",
                        es: "El torque es fuerza rotacional, calculado como τ = r × F (fuerza por distancia perpendicular del eje)",
                        de: "Drehmoment ist Rotationskraft, berechnet als τ = r × F (Kraft mal senkrechter Abstand zur Achse)",
                        nl: "Koppel is rotationele kracht, berekend als τ = r × F (kracht maal loodrechte afstand van as)"
                    },
                    {
                        en: "Torque is linear momentum, calculated as τ = mv",
                        es: "El torque es momento lineal, calculado como τ = mv",
                        de: "Drehmoment ist linearer Impuls, berechnet als τ = mv",
                        nl: "Koppel is lineaire impuls, berekend als τ = mv"
                    },
                    {
                        en: "Torque is rotational energy, calculated as τ = ½Iω²",
                        es: "El torque es energía rotacional, calculado como τ = ½Iω²",
                        de: "Drehmoment ist Rotationsenergie, berechnet als τ = ½Iω²",
                        nl: "Koppel is rotatie-energie, berekend als τ = ½Iω²"
                    },
                    {
                        en: "Torque is angular velocity, calculated as τ = θ/t",
                        es: "El torque es velocidad angular, calculado como τ = θ/t",
                        de: "Drehmoment ist Winkelgeschwindigkeit, berechnet als τ = θ/t",
                        nl: "Koppel is hoeksnelheid, berekend als τ = θ/t"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Torque is the rotational equivalent of force, representing the tendency of a force to cause rotation about an axis. It's calculated as τ = rF sin θ, where r is the distance from axis, F is the applied force, and θ is the angle between them.",
                    es: "El torque es el equivalente rotacional de la fuerza, representando la tendencia de una fuerza a causar rotación alrededor de un eje. Se calcula como τ = rF sin θ, donde r es la distancia del eje, F es la fuerza aplicada, y θ es el ángulo entre ellos.",
                    de: "Drehmoment ist das rotatorische Äquivalent zur Kraft und stellt die Tendenz einer Kraft dar, eine Drehung um eine Achse zu verursachen. Es wird berechnet als τ = rF sin θ, wobei r der Abstand zur Achse, F die aufgebrachte Kraft und θ der Winkel zwischen ihnen ist.",
                    nl: "Koppel is het rotationele equivalent van kracht, het vertegenwoordigt de neiging van een kracht om rotatie rond een as te veroorzaken. Het wordt berekend als τ = rF sin θ, waarbij r de afstand van de as is, F de toegepaste kracht, en θ de hoek tussen hen."
                }
            },
            {
                question: {
                    en: "What is the moment of inertia and how does it affect rotational motion?",
                    es: "¿Qué es el momento de inercia y cómo afecta el movimiento rotacional?",
                    de: "Was ist das Trägheitsmoment und wie beeinflusst es die Rotationsbewegung?",
                    nl: "Wat is het traagheidsmoment en hoe beïnvloedt het rotationele beweging?"
                },
                options: [
                    {
                        en: "Moment of inertia is rotational mass; larger I means greater resistance to angular acceleration",
                        es: "El momento de inercia es masa rotacional; mayor I significa mayor resistencia a la aceleración angular",
                        de: "Das Trägheitsmoment ist die Rotationsmasse; größeres I bedeutet größeren Widerstand gegen Winkelbeschleunigung",
                        nl: "Traagheidsmoment is rotationele massa; groter I betekent grotere weerstand tegen hoekversnelling"
                    },
                    {
                        en: "Moment of inertia is the same for all objects regardless of shape",
                        es: "El momento de inercia es el mismo para todos los objetos independientemente de la forma",
                        de: "Das Trägheitsmoment ist für alle Objekte unabhängig von der Form gleich",
                        nl: "Traagheidsmoment is hetzelfde voor alle objecten ongeacht vorm"
                    },
                    {
                        en: "Moment of inertia only depends on mass, not on mass distribution",
                        es: "El momento de inercia solo depende de la masa, no de la distribución de masa",
                        de: "Das Trägheitsmoment hängt nur von der Masse ab, nicht von der Massenverteilung",
                        nl: "Traagheidsmoment hangt alleen af van massa, niet van massaverdeling"
                    },
                    {
                        en: "Moment of inertia is the same as linear momentum",
                        es: "El momento de inercia es lo mismo que el momento lineal",
                        de: "Das Trägheitsmoment ist dasselbe wie der lineare Impuls",
                        nl: "Traagheidsmoment is hetzelfde als lineaire impuls"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Moment of inertia (I) is the rotational analog of mass, measuring how mass is distributed relative to the axis of rotation. It appears in rotational dynamics as τ = Iα, where τ is torque and α is angular acceleration. Different shapes have different moments of inertia even with the same mass.",
                    es: "El momento de inercia (I) es el análogo rotacional de la masa, midiendo cómo se distribuye la masa en relación al eje de rotación. Aparece en la dinámica rotacional como τ = Iα, donde τ es torque y α es aceleración angular. Diferentes formas tienen diferentes momentos de inercia incluso con la misma masa.",
                    de: "Das Trägheitsmoment (I) ist das rotatorische Analogon zur Masse und misst, wie die Masse relativ zur Rotationsachse verteilt ist. Es erscheint in der Rotationsdynamik als τ = Iα, wobei τ das Drehmoment und α die Winkelbeschleunigung ist. Verschiedene Formen haben verschiedene Trägheitsmomente auch bei gleicher Masse.",
                    nl: "Traagheidsmoment (I) is de rotationele analogie van massa, het meet hoe massa verdeeld is ten opzichte van de rotatieas. Het verschijnt in rotationele dynamica als τ = Iα, waarbij τ koppel is en α hoekversnelling. Verschillende vormen hebben verschillende traagheidsmomenten zelfs met dezelfde massa."
                }
            },
            {
                question: {
                    en: "What is the relationship between linear and angular quantities in rotational motion?",
                    es: "¿Cuál es la relación entre cantidades lineales y angulares en movimiento rotacional?",
                    de: "Wie ist die Beziehung zwischen linearen und Winkelgrößen bei der Rotationsbewegung?",
                    nl: "Wat is de relatie tussen lineaire en hoekgrootheden in rotationele beweging?"
                },
                options: [
                    {
                        en: "v = rω, a = rα, where v is linear velocity, ω is angular velocity, r is radius",
                        es: "v = rω, a = rα, donde v es velocidad lineal, ω es velocidad angular, r es radio",
                        de: "v = rω, a = rα, wobei v die lineare Geschwindigkeit, ω die Winkelgeschwindigkeit, r der Radius ist",
                        nl: "v = rω, a = rα, waarbij v lineaire snelheid is, ω hoeksnelheid, r straal"
                    },
                    {
                        en: "v = ω/r, a = α/r, where distance is in the denominator",
                        es: "v = ω/r, a = α/r, donde la distancia está en el denominador",
                        de: "v = ω/r, a = α/r, wobei die Entfernung im Nenner steht",
                        nl: "v = ω/r, a = α/r, waarbij afstand in de noemer staat"
                    },
                    {
                        en: "Linear and angular quantities are independent of each other",
                        es: "Las cantidades lineales y angulares son independientes entre sí",
                        de: "Lineare und Winkelgrößen sind unabhängig voneinander",
                        nl: "Lineaire en hoekgrootheden zijn onafhankelijk van elkaar"
                    },
                    {
                        en: "v = ω², a = α², with quadratic relationships",
                        es: "v = ω², a = α², con relaciones cuadráticas",
                        de: "v = ω², a = α², mit quadratischen Beziehungen",
                        nl: "v = ω², a = α², met kwadratische relaties"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "For circular motion, linear velocity v = rω and linear acceleration a = rα, where r is the distance from the rotation axis. These relationships connect the linear motion of points on a rotating object to the object's angular motion. The farther from the axis, the faster the linear speed.",
                    es: "Para movimiento circular, velocidad lineal v = rω y aceleración lineal a = rα, donde r es la distancia del eje de rotación. Estas relaciones conectan el movimiento lineal de puntos en un objeto rotante al movimiento angular del objeto. Mientras más lejos del eje, más rápida la velocidad lineal.",
                    de: "Für kreisförmige Bewegung gilt: lineare Geschwindigkeit v = rω und lineare Beschleunigung a = rα, wobei r der Abstand zur Rotationsachse ist. Diese Beziehungen verbinden die lineare Bewegung von Punkten auf einem rotierenden Objekt mit der Winkelbewegung des Objekts. Je weiter von der Achse entfernt, desto schneller die lineare Geschwindigkeit.",
                    nl: "Voor cirkelvormige beweging geldt: lineaire snelheid v = rω en lineaire versnelling a = rα, waarbij r de afstand van de rotatieas is. Deze relaties verbinden de lineaire beweging van punten op een roterend object met de hoekbeweging van het object. Hoe verder van de as, hoe sneller de lineaire snelheid."
                }
            },
            {
                question: {
                    en: "What is angular momentum and how is it conserved?",
                    es: "¿Qué es el momento angular y cómo se conserva?",
                    de: "Was ist Drehimpuls und wie bleibt er erhalten?",
                    nl: "Wat is hoekimpuls en hoe wordt het behouden?"
                },
                options: [
                    {
                        en: "Angular momentum L = Iω; conserved when net external torque is zero",
                        es: "Momento angular L = Iω; se conserva cuando el torque externo neto es cero",
                        de: "Drehimpuls L = Iω; bleibt erhalten, wenn das externe Netto-Drehmoment null ist",
                        nl: "Hoekimpuls L = Iω; behouden wanneer netto extern koppel nul is"
                    },
                    {
                        en: "Angular momentum is the same as linear momentum",
                        es: "El momento angular es lo mismo que el momento lineal",
                        de: "Drehimpuls ist dasselbe wie linearer Impuls",
                        nl: "Hoekimpuls is hetzelfde als lineaire impuls"
                    },
                    {
                        en: "Angular momentum always increases in rotation",
                        es: "El momento angular siempre aumenta en rotación",
                        de: "Drehimpuls nimmt bei Rotation immer zu",
                        nl: "Hoekimpuls neemt altijd toe bij rotatie"
                    },
                    {
                        en: "Angular momentum depends only on mass, not on rotation rate",
                        es: "El momento angular depende solo de la masa, no de la velocidad de rotación",
                        de: "Drehimpuls hängt nur von der Masse ab, nicht von der Rotationsgeschwindigkeit",
                        nl: "Hoekimpuls hangt alleen af van massa, niet van rotatiesnelheid"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Angular momentum L = Iω is the rotational analog of linear momentum. It's conserved when no external torques act on the system. This explains phenomena like ice skaters spinning faster when they pull in their arms (reducing I, so ω increases to keep L constant).",
                    es: "El momento angular L = Iω es el análogo rotacional del momento lineal. Se conserva cuando no actúan torques externos en el sistema. Esto explica fenómenos como patinadores que giran más rápido cuando encogen sus brazos (reduciendo I, así ω aumenta para mantener L constante).",
                    de: "Drehimpuls L = Iω ist das rotatorische Analogon zum linearen Impuls. Er bleibt erhalten, wenn keine externen Drehmomente auf das System wirken. Dies erklärt Phänomene wie Eisläufer, die schneller drehen, wenn sie ihre Arme anziehen (I reduziert sich, also steigt ω, um L konstant zu halten).",
                    nl: "Hoekimpuls L = Iω is de rotationele analogie van lineaire impuls. Het wordt behouden wanneer geen externe koppels op het systeem inwerken. Dit verklaart fenomenen zoals schaatsers die sneller draaien wanneer ze hun armen intrekken (I vermindert, dus ω stijgt om L constant te houden)."
                }
            },
            {
                question: {
                    en: "What is the difference between static and kinetic friction?",
                    es: "¿Cuál es la diferencia entre fricción estática y cinética?",
                    de: "Was ist der Unterschied zwischen statischer und kinetischer Reibung?",
                    nl: "Wat is het verschil tussen statische en kinetische wrijving?"
                },
                options: [
                    {
                        en: "Static friction acts on stationary objects; kinetic friction acts on moving objects",
                        es: "La fricción estática actúa en objetos estacionarios; la fricción cinética actúa en objetos en movimiento",
                        de: "Statische Reibung wirkt auf stationäre Objekte; kinetische Reibung wirkt auf bewegte Objekte",
                        nl: "Statische wrijving werkt op stilstaande objecten; kinetische wrijving werkt op bewegende objecten"
                    },
                    {
                        en: "Static friction is always greater than kinetic friction",
                        es: "La fricción estática es siempre mayor que la fricción cinética",
                        de: "Statische Reibung ist immer größer als kinetische Reibung",
                        nl: "Statische wrijving is altijd groter dan kinetische wrijving"
                    },
                    {
                        en: "Static friction depends on surface area; kinetic friction does not",
                        es: "La fricción estática depende del área de superficie; la fricción cinética no",
                        de: "Statische Reibung hängt von der Oberfläche ab; kinetische Reibung nicht",
                        nl: "Statische wrijving hangt af van oppervlakte; kinetische wrijving niet"
                    },
                    {
                        en: "There is no difference; they are the same phenomenon",
                        es: "No hay diferencia; son el mismo fenómeno",
                        de: "Es gibt keinen Unterschied; sie sind dasselbe Phänomen",
                        nl: "Er is geen verschil; het is hetzelfde fenomeen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Static friction prevents relative motion between surfaces at rest (f ≤ μₛN), while kinetic friction opposes relative motion between surfaces already in motion (f = μₖN). Typically, μₛ > μₖ, so it takes more force to start motion than to maintain it.",
                    es: "La fricción estática previene el movimiento relativo entre superficies en reposo (f ≤ μₛN), mientras que la fricción cinética se opone al movimiento relativo entre superficies ya en movimiento (f = μₖN). Típicamente, μₛ > μₖ, así que se requiere más fuerza para iniciar el movimiento que para mantenerlo.",
                    de: "Statische Reibung verhindert relative Bewegung zwischen ruhenden Oberflächen (f ≤ μₛN), während kinetische Reibung der relativen Bewegung zwischen bereits bewegten Oberflächen entgegenwirkt (f = μₖN). Typischerweise gilt μₛ > μₖ, daher braucht es mehr Kraft, Bewegung zu starten als sie aufrechtzuerhalten.",
                    nl: "Statische wrijving voorkomt relatieve beweging tussen stilstaande oppervlakken (f ≤ μₛN), terwijl kinetische wrijving relatieve beweging tussen reeds bewegende oppervlakken tegengaat (f = μₖN). Doorgaans geldt μₛ > μₖ, dus het kost meer kracht om beweging te starten dan om het te onderhouden."
                }
            },
            {
                question: {
                    en: "What is the principle of superposition in wave mechanics?",
                    es: "¿Cuál es el principio de superposición en mecánica de ondas?",
                    de: "Was ist das Superpositionsprinzip in der Wellenmechanik?",
                    nl: "Wat is het superpositieprincipe in golfmechanica?"
                },
                options: [
                    {
                        en: "When waves meet, their amplitudes add algebraically at each point",
                        es: "Cuando las ondas se encuentran, sus amplitudes se suman algebraicamente en cada punto",
                        de: "Wenn Wellen sich treffen, addieren sich ihre Amplituden algebraisch an jedem Punkt",
                        nl: "Wanneer golven elkaar ontmoeten, tellen hun amplitudes algebraïsch op bij elk punt"
                    },
                    {
                        en: "Waves always cancel each other out when they meet",
                        es: "Las ondas siempre se cancelan cuando se encuentran",
                        de: "Wellen löschen sich immer aus, wenn sie sich treffen",
                        nl: "Golven heffen elkaar altijd op wanneer ze elkaar ontmoeten"
                    },
                    {
                        en: "Only the strongest wave survives when waves interact",
                        es: "Solo la onda más fuerte sobrevive cuando las ondas interactúan",
                        de: "Nur die stärkste Welle überlebt, wenn Wellen interagieren",
                        nl: "Alleen de sterkste golf overleeft wanneer golven interacteren"
                    },
                    {
                        en: "Waves cannot pass through each other",
                        es: "Las ondas no pueden pasar una a través de la otra",
                        de: "Wellen können nicht durcheinander hindurchgehen",
                        nl: "Golven kunnen niet door elkaar heen gaan"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The superposition principle states that when two or more waves overlap, the resulting wave amplitude at any point is the algebraic sum of the individual wave amplitudes. This can result in constructive interference (waves reinforce) or destructive interference (waves cancel).",
                    es: "El principio de superposición establece que cuando dos o más ondas se superponen, la amplitud de onda resultante en cualquier punto es la suma algebraica de las amplitudes individuales de las ondas. Esto puede resultar en interferencia constructiva (las ondas se refuerzan) o interferencia destructiva (las ondas se cancelan).",
                    de: "Das Superpositionsprinzip besagt, dass wenn zwei oder mehr Wellen sich überlappen, die resultierende Wellenamplitude an jedem Punkt die algebraische Summe der individuellen Wellenamplituden ist. Dies kann zu konstruktiver Interferenz (Wellen verstärken sich) oder destruktiver Interferenz (Wellen löschen sich aus) führen.",
                    nl: "Het superpositieprincipe stelt dat wanneer twee of meer golven overlappen, de resulterende golfamplitude op elk punt de algebraïsche som is van de individuele golfamplitudes. Dit kan leiden tot constructieve interferentie (golven versterken elkaar) of destructieve interferentie (golven heffen elkaar op)."
                }
            },
            {
                question: {
                    en: "What is the relationship between frequency, wavelength, and wave speed?",
                    es: "¿Cuál es la relación entre frecuencia, longitud de onda y velocidad de onda?",
                    de: "Wie ist die Beziehung zwischen Frequenz, Wellenlänge und Wellengeschwindigkeit?",
                    nl: "Wat is de relatie tussen frequentie, golflengte en golfsnelheid?"
                },
                options: [
                    {
                        en: "v = fλ, where v is wave speed, f is frequency, λ is wavelength",
                        es: "v = fλ, donde v es velocidad de onda, f es frecuencia, λ es longitud de onda",
                        de: "v = fλ, wobei v die Wellengeschwindigkeit, f die Frequenz, λ die Wellenlänge ist",
                        nl: "v = fλ, waarbij v golfsnelheid is, f frequentie, λ golflengte"
                    },
                    {
                        en: "v = f/λ, with frequency divided by wavelength",
                        es: "v = f/λ, con frecuencia dividida por longitud de onda",
                        de: "v = f/λ, mit Frequenz geteilt durch Wellenlänge",
                        nl: "v = f/λ, met frequentie gedeeld door golflengte"
                    },
                    {
                        en: "v = f + λ, with frequency plus wavelength",
                        es: "v = f + λ, con frecuencia más longitud de onda",
                        de: "v = f + λ, mit Frequenz plus Wellenlänge",
                        nl: "v = f + λ, met frequentie plus golflengte"
                    },
                    {
                        en: "These quantities are independent of each other",
                        es: "Estas cantidades son independientes entre sí",
                        de: "Diese Größen sind unabhängig voneinander",
                        nl: "Deze grootheden zijn onafhankelijk van elkaar"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The wave equation v = fλ shows that wave speed equals frequency times wavelength. This fundamental relationship applies to all types of waves. In a given medium, wave speed is often constant, so frequency and wavelength are inversely proportional.",
                    es: "La ecuación de onda v = fλ muestra que la velocidad de onda es igual a la frecuencia por la longitud de onda. Esta relación fundamental se aplica a todos los tipos de ondas. En un medio dado, la velocidad de onda es a menudo constante, así que la frecuencia y la longitud de onda son inversamente proporcionales.",
                    de: "Die Wellengleichung v = fλ zeigt, dass die Wellengeschwindigkeit gleich Frequenz mal Wellenlänge ist. Diese fundamentale Beziehung gilt für alle Arten von Wellen. In einem gegebenen Medium ist die Wellengeschwindigkeit oft konstant, daher sind Frequenz und Wellenlänge umgekehrt proportional.",
                    nl: "De golfvergelijking v = fλ toont dat golfsnelheid gelijk is aan frequentie maal golflengte. Deze fundamentele relatie geldt voor alle soorten golven. In een gegeven medium is golfsnelheid vaak constant, dus frequentie en golflengte zijn omgekeerd evenredig."
                }
            },
            {
                question: {
                    en: "What is the Doppler effect?",
                    es: "¿Qué es el efecto Doppler?",
                    de: "Was ist der Doppler-Effekt?",
                    nl: "Wat is het Doppler effect?"
                },
                options: [
                    {
                        en: "The apparent change in frequency when source and observer move relative to each other",
                        es: "El cambio aparente en frecuencia cuando la fuente y el observador se mueven relativamente entre sí",
                        de: "Die scheinbare Änderung der Frequenz, wenn sich Quelle und Beobachter relativ zueinander bewegen",
                        nl: "De schijnbare verandering in frequentie wanneer bron en waarnemer ten opzichte van elkaar bewegen"
                    },
                    {
                        en: "The bending of waves around obstacles",
                        es: "La curvatura de ondas alrededor de obstáculos",
                        de: "Die Beugung von Wellen um Hindernisse",
                        nl: "De buiging van golven rond obstakels"
                    },
                    {
                        en: "The reflection of waves from surfaces",
                        es: "La reflexión de ondas desde superficies",
                        de: "Die Reflexion von Wellen von Oberflächen",
                        nl: "De reflectie van golven van oppervlakken"
                    },
                    {
                        en: "The splitting of white light into colors",
                        es: "La división de luz blanca en colores",
                        de: "Die Aufspaltung weißen Lichts in Farben",
                        nl: "De splitsing van wit licht in kleuren"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Doppler effect occurs when there's relative motion between a wave source and observer, causing the observed frequency to differ from the emitted frequency. If they approach each other, frequency increases (blue shift); if they separate, frequency decreases (red shift).",
                    es: "El efecto Doppler ocurre cuando hay movimiento relativo entre una fuente de ondas y un observador, causando que la frecuencia observada difiera de la frecuencia emitida. Si se acercan entre sí, la frecuencia aumenta (corrimiento al azul); si se separan, la frecuencia disminuye (corrimiento al rojo).",
                    de: "Der Doppler-Effekt tritt auf, wenn relative Bewegung zwischen einer Wellenquelle und einem Beobachter besteht, wodurch die beobachtete Frequenz von der emittierten Frequenz abweicht. Wenn sie sich nähern, steigt die Frequenz (Blauverschiebung); wenn sie sich entfernen, sinkt die Frequenz (Rotverschiebung).",
                    nl: "Het Doppler effect treedt op wanneer er relatieve beweging is tussen een golfbron en waarnemer, waardoor de waargenomen frequentie verschilt van de uitgezonden frequentie. Als ze elkaar naderen, stijgt de frequentie (blauwverschuiving); als ze zich van elkaar verwijderen, daalt de frequentie (roodverschuiving)."
                }
            },
            {
                question: {
                    en: "What is resonance in mechanical systems?",
                    es: "¿Qué es la resonancia en sistemas mecánicos?",
                    de: "Was ist Resonanz in mechanischen Systemen?",
                    nl: "Wat is resonantie in mechanische systemen?"
                },
                options: [
                    {
                        en: "Maximum amplitude oscillation when driving frequency matches natural frequency",
                        es: "Oscilación de amplitud máxima cuando la frecuencia de conducción coincide con la frecuencia natural",
                        de: "Maximale Amplitudenschwingung, wenn die Antriebsfrequenz mit der Eigenfrequenz übereinstimmt",
                        nl: "Maximum amplitude oscillatie wanneer aandrijvende frequentie overeenkomt met natuurlijke frequentie"
                    },
                    {
                        en: "Complete cancellation of oscillations",
                        es: "Cancelación completa de oscilaciones",
                        de: "Vollständige Auslöschung von Schwingungen",
                        nl: "Volledige annulering van oscillaties"
                    },
                    {
                        en: "Random oscillation patterns",
                        es: "Patrones de oscilación aleatorios",
                        de: "Zufällige Schwingungsmuster",
                        nl: "Willekeurige oscillatiepatronen"
                    },
                    {
                        en: "Oscillation that only occurs at very high frequencies",
                        es: "Oscilación que solo ocurre a frecuencias muy altas",
                        de: "Schwingung, die nur bei sehr hohen Frequenzen auftritt",
                        nl: "Oscillatie die alleen optreedt bij zeer hoge frequenties"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Resonance occurs when a system is driven at its natural frequency, resulting in maximum amplitude oscillations. This happens because energy input is perfectly timed with the system's natural motion, causing constructive reinforcement. Examples include musical instruments and building vibrations.",
                    es: "La resonancia ocurre cuando un sistema es conducido a su frecuencia natural, resultando en oscilaciones de amplitud máxima. Esto sucede porque la entrada de energía está perfectamente sincronizada con el movimiento natural del sistema, causando refuerzo constructivo. Ejemplos incluyen instrumentos musicales y vibraciones de edificios.",
                    de: "Resonanz tritt auf, wenn ein System bei seiner Eigenfrequenz angetrieben wird, was zu maximalen Amplitudenschwingungen führt. Dies geschieht, weil die Energiezufuhr perfekt mit der natürlichen Bewegung des Systems synchronisiert ist und konstruktive Verstärkung verursacht. Beispiele sind Musikinstrumente und Gebäudeschwingungen.",
                    nl: "Resonantie treedt op wanneer een systeem wordt aangedreven op zijn natuurlijke frequentie, wat resulteert in maximum amplitude oscillaties. Dit gebeurt omdat energie-input perfect getimed is met de natuurlijke beweging van het systeem, wat constructieve versterking veroorzaakt. Voorbeelden zijn muziekinstrumenten en gebouwvibraties."
                }
            },
            {
                question: {
                    en: "What is the coefficient of restitution in collisions?",
                    es: "¿Qué es el coeficiente de restitución en colisiones?",
                    de: "Was ist der Restitutionskoeffizient bei Stößen?",
                    nl: "Wat is de restitutiecoëfficiënt bij botsingen?"
                },
                options: [
                    {
                        en: "Ratio of relative velocities after and before collision (e = v_separation/v_approach)",
                        es: "Relación de velocidades relativas después y antes de la colisión (e = v_separación/v_aproximación)",
                        de: "Verhältnis der relativen Geschwindigkeiten nach und vor dem Stoß (e = v_trennung/v_annäherung)",
                        nl: "Verhouding van relatieve snelheden na en voor de botsing (e = v_scheiding/v_nadering)"
                    },
                    {
                        en: "Total kinetic energy before collision",
                        es: "Energía cinética total antes de la colisión",
                        de: "Gesamte kinetische Energie vor dem Stoß",
                        nl: "Totale kinetische energie voor botsing"
                    },
                    {
                        en: "Mass ratio of colliding objects",
                        es: "Relación de masa de objetos que colisionan",
                        de: "Massenverhältnis der kollidierenden Objekte",
                        nl: "Massaverhouding van botsende objecten"
                    },
                    {
                        en: "Force during collision divided by time",
                        es: "Fuerza durante la colisión dividida por tiempo",
                        de: "Kraft während des Stoßes geteilt durch Zeit",
                        nl: "Kracht tijdens botsing gedeeld door tijd"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The coefficient of restitution (e) measures how bouncy a collision is, defined as the ratio of separation speed to approach speed. e = 1 for perfectly elastic collisions, e = 0 for perfectly inelastic collisions, and 0 < e < 1 for real collisions.",
                    es: "El coeficiente de restitución (e) mide qué tan elástica es una colisión, definido como la relación de velocidad de separación a velocidad de aproximación. e = 1 para colisiones perfectamente elásticas, e = 0 para colisiones perfectamente inelásticas, y 0 < e < 1 para colisiones reales.",
                    de: "Der Restitutionskoeffizient (e) misst, wie elastisch ein Stoß ist, definiert als das Verhältnis von Trennungsgeschwindigkeit zu Annäherungsgeschwindigkeit. e = 1 für perfekt elastische Stöße, e = 0 für perfekt unelastische Stöße, und 0 < e < 1 für reale Stöße.",
                    nl: "De restitutiecoëfficiënt (e) meet hoe elastisch een botsing is, gedefinieerd als de verhouding van scheidingssnelheid tot naderingssnelheid. e = 1 voor perfect elastische botsingen, e = 0 voor perfect inelastische botsingen, en 0 < e < 1 voor echte botsingen."
                }
            },
            {
                question: {
                    en: "What is the work-energy theorem?",
                    es: "¿Qué es el teorema trabajo-energía?",
                    de: "Was ist das Arbeit-Energie-Theorem?",
                    nl: "Wat is de arbeid-energie stelling?"
                },
                options: [
                    {
                        en: "The net work done on an object equals its change in kinetic energy (W_net = ΔKE)",
                        es: "El trabajo neto realizado en un objeto es igual a su cambio en energía cinética (W_neto = ΔEC)",
                        de: "Die Nettoarbeit an einem Objekt entspricht seiner Änderung der kinetischen Energie (W_netto = ΔKE)",
                        nl: "De netto arbeid verricht op een object is gelijk aan zijn verandering in kinetische energie (W_netto = ΔKE)"
                    },
                    {
                        en: "Work always equals potential energy",
                        es: "El trabajo siempre es igual a la energía potencial",
                        de: "Arbeit ist immer gleich potentieller Energie",
                        nl: "Arbeid is altijd gelijk aan potentiële energie"
                    },
                    {
                        en: "Energy cannot be converted to work",
                        es: "La energía no puede convertirse en trabajo",
                        de: "Energie kann nicht in Arbeit umgewandelt werden",
                        nl: "Energie kan niet worden omgezet in arbeid"
                    },
                    {
                        en: "Work is independent of the path taken",
                        es: "El trabajo es independiente del camino tomado",
                        de: "Arbeit ist unabhängig vom gewählten Weg",
                        nl: "Arbeid is onafhankelijk van het gekozen pad"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The work-energy theorem states that the net work done on an object equals the change in its kinetic energy: W_net = KE_final - KE_initial = ½mv² - ½mv₀². This provides a powerful method for solving dynamics problems without directly using Newton's laws.",
                    es: "El teorema trabajo-energía establece que el trabajo neto realizado en un objeto es igual al cambio en su energía cinética: W_neto = EC_final - EC_inicial = ½mv² - ½mv₀². Esto proporciona un método poderoso para resolver problemas de dinámica sin usar directamente las leyes de Newton.",
                    de: "Das Arbeit-Energie-Theorem besagt, dass die Nettoarbeit an einem Objekt gleich der Änderung seiner kinetischen Energie ist: W_netto = KE_final - KE_anfang = ½mv² - ½mv₀². Dies bietet eine mächtige Methode zur Lösung von Dynamikproblemen ohne direkte Anwendung der Newtonschen Gesetze.",
                    nl: "De arbeid-energie stelling stelt dat de netto arbeid verricht op een object gelijk is aan de verandering in zijn kinetische energie: W_netto = KE_eind - KE_begin = ½mv² - ½mv₀². Dit biedt een krachtige methode voor het oplossen van dynamica problemen zonder direct Newton's wetten te gebruiken."
                }
            },
            {
                question: {
                    en: "What is the difference between speed and velocity?",
                    es: "¿Cuál es la diferencia entre rapidez y velocidad?",
                    de: "Was ist der Unterschied zwischen Geschwindigkeit und Geschwindigkeitsvektor?",
                    nl: "Wat is het verschil tussen snelheid en snelheidsvector?"
                },
                options: [
                    {
                        en: "Speed is scalar (magnitude only); velocity is vector (magnitude and direction)",
                        es: "La rapidez es escalar (solo magnitud); la velocidad es vector (magnitud y dirección)",
                        de: "Geschwindigkeit ist skalar (nur Betrag); Geschwindigkeitsvektor ist Vektor (Betrag und Richtung)",
                        nl: "Snelheid is scalair (alleen grootte); snelheidsvector is vector (grootte en richting)"
                    },
                    {
                        en: "Speed and velocity are identical quantities",
                        es: "Rapidez y velocidad son cantidades idénticas",
                        de: "Geschwindigkeit und Geschwindigkeitsvektor sind identische Größen",
                        nl: "Snelheid en snelheidsvector zijn identieke grootheden"
                    },
                    {
                        en: "Speed is always greater than velocity",
                        es: "La rapidez es siempre mayor que la velocidad",
                        de: "Geschwindigkeit ist immer größer als der Geschwindigkeitsvektor",
                        nl: "Snelheid is altijd groter dan snelheidsvector"
                    },
                    {
                        en: "Velocity can be negative but speed cannot",
                        es: "La velocidad puede ser negativa pero la rapidez no puede",
                        de: "Der Geschwindigkeitsvektor kann negativ sein, aber die Geschwindigkeit nicht",
                        nl: "Snelheidsvector kan negatief zijn maar snelheid niet"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Speed is a scalar quantity representing the rate of change of distance (always positive). Velocity is a vector quantity representing the rate of change of displacement, including both magnitude and direction. An object moving in a circle at constant speed has changing velocity due to direction changes.",
                    es: "La rapidez es una cantidad escalar que representa la tasa de cambio de distancia (siempre positiva). La velocidad es una cantidad vectorial que representa la tasa de cambio de desplazamiento, incluyendo tanto magnitud como dirección. Un objeto moviéndose en círculo a rapidez constante tiene velocidad cambiante debido a cambios de dirección.",
                    de: "Geschwindigkeit ist eine skalare Größe, die die Änderungsrate der Strecke darstellt (immer positiv). Der Geschwindigkeitsvektor ist eine Vektorgröße, die die Änderungsrate der Verschiebung darstellt, einschließlich Betrag und Richtung. Ein Objekt, das sich mit konstanter Geschwindigkeit im Kreis bewegt, hat einen sich ändernden Geschwindigkeitsvektor aufgrund von Richtungsänderungen.",
                    nl: "Snelheid is een scalaire grootheid die de veranderingssnelheid van afstand voorstelt (altijd positief). Snelheidsvector is een vectorgrootheid die de veranderingssnelheid van verplaatsing voorstelt, inclusief zowel grootte als richting. Een object dat in een cirkel beweegt met constante snelheid heeft een veranderende snelheidsvector door richtingsveranderingen."
                }
            },
            {
                question: {
                    en: "What is uniform circular motion and what forces are involved?",
                    es: "¿Qué es el movimiento circular uniforme y qué fuerzas están involucradas?",
                    de: "Was ist gleichförmige Kreisbewegung und welche Kräfte sind beteiligt?",
                    nl: "Wat is uniforme cirkelvormige beweging en welke krachten zijn betrokken?"
                },
                options: [
                    {
                        en: "Motion in a circle at constant speed; requires centripetal force toward center",
                        es: "Movimiento en círculo a velocidad constante; requiere fuerza centrípeta hacia el centro",
                        de: "Bewegung im Kreis mit konstanter Geschwindigkeit; erfordert Zentripetalkraft zum Zentrum",
                        nl: "Beweging in een cirkel met constante snelheid; vereist middelpuntzoekende kracht naar het centrum"
                    },
                    {
                        en: "Motion in a circle with increasing speed; no forces required",
                        es: "Movimiento en círculo con velocidad creciente; no se requieren fuerzas",
                        de: "Bewegung im Kreis mit zunehmender Geschwindigkeit; keine Kräfte erforderlich",
                        nl: "Beweging in een cirkel met toenemende snelheid; geen krachten vereist"
                    },
                    {
                        en: "Motion that requires both centripetal and centrifugal forces",
                        es: "Movimiento que requiere tanto fuerzas centrípetas como centrífugas",
                        de: "Bewegung, die sowohl Zentripetal- als auch Zentrifugalkräfte erfordert",
                        nl: "Beweging die zowel middelpuntzoekende als middelpuntvliedende krachten vereist"
                    },
                    {
                        en: "Motion in an elliptical path with varying speed",
                        es: "Movimiento en una trayectoria elíptica con velocidad variable",
                        de: "Bewegung auf einer elliptischen Bahn mit veränderlicher Geschwindigkeit",
                        nl: "Beweging in een elliptische baan met variërende snelheid"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Uniform circular motion involves movement in a perfect circle at constant speed. Although speed is constant, velocity changes due to changing direction, creating centripetal acceleration a = v²/r directed toward the center. This requires a net centripetal force F = mv²/r provided by tension, friction, gravity, etc.",
                    es: "El movimiento circular uniforme involucra movimiento en un círculo perfecto a velocidad constante. Aunque la rapidez es constante, la velocidad cambia debido a la dirección cambiante, creando aceleración centrípeta a = v²/r dirigida hacia el centro. Esto requiere una fuerza centrípeta neta F = mv²/r proporcionada por tensión, fricción, gravedad, etc.",
                    de: "Gleichförmige Kreisbewegung beinhaltet Bewegung in einem perfekten Kreis mit konstanter Geschwindigkeit. Obwohl die Geschwindigkeit konstant ist, ändert sich der Geschwindigkeitsvektor aufgrund der sich ändernden Richtung, was Zentripetalbeschleunigung a = v²/r zum Zentrum hin erzeugt. Dies erfordert eine Netto-Zentripetalkraft F = mv²/r, die durch Spannung, Reibung, Schwerkraft usw. bereitgestellt wird.",
                    nl: "Uniforme cirkelvormige beweging behelst beweging in een perfecte cirkel met constante snelheid. Hoewel snelheid constant is, verandert de snelheidsvector door veranderende richting, wat middelpuntzoekende versnelling a = v²/r naar het centrum toe creëert. Dit vereist een netto middelpuntzoekende kracht F = mv²/r geleverd door spanning, wrijving, zwaartekracht, enz."
                }
            },
            {
                question: {
                    en: "What is impulse and how does it relate to momentum?",
                    es: "¿Qué es el impulso y cómo se relaciona con el momento?",
                    de: "Was ist Impuls und wie hängt er mit dem Bewegungsimpuls zusammen?",
                    nl: "Wat is impuls en hoe verhoudt het zich tot momentum?"
                },
                options: [
                    {
                        en: "Impulse is force times time (J = FΔt); impulse equals change in momentum",
                        es: "El impulso es fuerza por tiempo (J = FΔt); el impulso es igual al cambio en momento",
                        de: "Impuls ist Kraft mal Zeit (J = FΔt); Impuls gleich Änderung des Bewegungsimpulses",
                        nl: "Impuls is kracht maal tijd (J = FΔt); impuls is gelijk aan verandering in momentum"
                    },
                    {
                        en: "Impulse is the same as kinetic energy",
                        es: "El impulso es lo mismo que la energía cinética",
                        de: "Impuls ist dasselbe wie kinetische Energie",
                        nl: "Impuls is hetzelfde als kinetische energie"
                    },
                    {
                        en: "Impulse only applies to collisions, not general motion",
                        es: "El impulso solo se aplica a colisiones, no al movimiento general",
                        de: "Impuls gilt nur für Stöße, nicht für allgemeine Bewegung",
                        nl: "Impuls geldt alleen voor botsingen, niet voor algemene beweging"
                    },
                    {
                        en: "Impulse is always positive and cannot be negative",
                        es: "El impulso es siempre positivo y no puede ser negativo",
                        de: "Impuls ist immer positiv und kann nicht negativ sein",
                        nl: "Impuls is altijd positief en kan niet negatief zijn"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Impulse is the product of force and time interval: J = FΔt. The impulse-momentum theorem states that impulse equals the change in momentum: J = Δp = m(v_final - v_initial). This is particularly useful for analyzing collisions and impacts where forces act for short time periods.",
                    es: "El impulso es el producto de fuerza e intervalo de tiempo: J = FΔt. El teorema impulso-momento establece que el impulso es igual al cambio en momento: J = Δp = m(v_final - v_inicial). Esto es particularmente útil para analizar colisiones e impactos donde las fuerzas actúan por períodos cortos de tiempo.",
                    de: "Impuls ist das Produkt aus Kraft und Zeitintervall: J = FΔt. Das Impuls-Bewegungsimpuls-Theorem besagt, dass Impuls gleich der Änderung des Bewegungsimpulses ist: J = Δp = m(v_final - v_anfang). Dies ist besonders nützlich für die Analyse von Stößen und Aufprallen, wo Kräfte für kurze Zeiträume wirken.",
                    nl: "Impuls is het product van kracht en tijdsinterval: J = FΔt. De impuls-momentum stelling stelt dat impuls gelijk is aan de verandering in momentum: J = Δp = m(v_eind - v_begin). Dit is bijzonder nuttig voor het analyseren van botsingen en impacts waarbij krachten voor korte tijdsperioden inwerken."
                }
            },
            {
                question: {
                    en: "What is the principle behind the conservation of mechanical energy?",
                    es: "¿Cuál es el principio detrás de la conservación de energía mecánica?",
                    de: "Was ist das Prinzip hinter der Erhaltung mechanischer Energie?",
                    nl: "Wat is het principe achter behoud van mechanische energie?"
                },
                options: [
                    {
                        en: "In absence of friction, total mechanical energy (KE + PE) remains constant",
                        es: "En ausencia de fricción, la energía mecánica total (EC + EP) permanece constante",
                        de: "Bei Abwesenheit von Reibung bleibt die gesamte mechanische Energie (KE + PE) konstant",
                        nl: "Bij afwezigheid van wrijving blijft totale mechanische energie (KE + PE) constant"
                    },
                    {
                        en: "Kinetic energy is always greater than potential energy",
                        es: "La energía cinética es siempre mayor que la energía potencial",
                        de: "Kinetische Energie ist immer größer als potentielle Energie",
                        nl: "Kinetische energie is altijd groter dan potentiële energie"
                    },
                    {
                        en: "Mechanical energy constantly increases in all systems",
                        es: "La energía mecánica constantemente aumenta en todos los sistemas",
                        de: "Mechanische Energie nimmt in allen Systemen ständig zu",
                        nl: "Mechanische energie neemt constant toe in alle systemen"
                    },
                    {
                        en: "Only potential energy is conserved in mechanical systems",
                        es: "Solo la energía potencial se conserva en sistemas mecánicos",
                        de: "Nur potentielle Energie bleibt in mechanischen Systemen erhalten",
                        nl: "Alleen potentiële energie wordt behouden in mechanische systemen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Conservation of mechanical energy states that in the absence of non-conservative forces (like friction), the total mechanical energy (sum of kinetic and potential energy) remains constant: E = KE + PE = constant. Energy transforms between kinetic and potential forms but the total remains unchanged.",
                    es: "La conservación de energía mecánica establece que en ausencia de fuerzas no conservativas (como fricción), la energía mecánica total (suma de energía cinética y potencial) permanece constante: E = EC + EP = constante. La energía se transforma entre formas cinética y potencial pero el total permanece sin cambios.",
                    de: "Die Erhaltung mechanischer Energie besagt, dass bei Abwesenheit nicht-konservativer Kräfte (wie Reibung) die gesamte mechanische Energie (Summe aus kinetischer und potentieller Energie) konstant bleibt: E = KE + PE = konstant. Energie transformiert zwischen kinetischen und potentiellen Formen, aber die Gesamtmenge bleibt unverändert.",
                    nl: "Behoud van mechanische energie stelt dat bij afwezigheid van niet-conservatieve krachten (zoals wrijving) de totale mechanische energie (som van kinetische en potentiële energie) constant blijft: E = KE + PE = constant. Energie transformeert tussen kinetische en potentiële vormen maar het totaal blijft onveranderd."
                }
            },
            {
                question: {
                    en: "What is projectile motion and what are its key characteristics?",
                    es: "¿Qué es el movimiento proyectil y cuáles son sus características clave?",
                    de: "Was ist Wurfbewegung und was sind ihre Schlüsselmerkmale?",
                    nl: "Wat is projectielbeweging en wat zijn de belangrijkste kenmerken?"
                },
                options: [
                    {
                        en: "Motion under gravity alone; parabolic trajectory with independent horizontal and vertical components",
                        es: "Movimiento bajo gravedad solamente; trayectoria parabólica con componentes horizontal y vertical independientes",
                        de: "Bewegung nur unter Schwerkraft; parabolische Bahn mit unabhängigen horizontalen und vertikalen Komponenten",
                        nl: "Beweging onder alleen zwaartekracht; parabolische baan met onafhankelijke horizontale en verticale componenten"
                    },
                    {
                        en: "Motion in a straight line with constant acceleration",
                        es: "Movimiento en línea recta con aceleración constante",
                        de: "Bewegung in gerader Linie mit konstanter Beschleunigung",
                        nl: "Beweging in rechte lijn met constante versnelling"
                    },
                    {
                        en: "Circular motion with varying radius",
                        es: "Movimiento circular con radio variable",
                        de: "Kreisbewegung mit veränderlichem Radius",
                        nl: "Cirkelvormige beweging met variërende straal"
                    },
                    {
                        en: "Motion that requires continuous force input",
                        es: "Movimiento que requiere entrada continua de fuerza",
                        de: "Bewegung, die kontinuierliche Kraftzufuhr erfordert",
                        nl: "Beweging die continue krachttoevoer vereist"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Projectile motion occurs when an object moves under the influence of gravity alone. The motion can be analyzed by separating it into independent horizontal (constant velocity) and vertical (uniformly accelerated) components. The trajectory is parabolic, with maximum range at 45° launch angle.",
                    es: "El movimiento proyectil ocurre cuando un objeto se mueve bajo la influencia de la gravedad solamente. El movimiento puede analizarse separándolo en componentes horizontal (velocidad constante) y vertical (uniformemente acelerado) independientes. La trayectoria es parabólica, con alcance máximo a 45° de ángulo de lanzamiento.",
                    de: "Wurfbewegung tritt auf, wenn sich ein Objekt nur unter dem Einfluss der Schwerkraft bewegt. Die Bewegung kann durch Trennung in unabhängige horizontale (konstante Geschwindigkeit) und vertikale (gleichmäßig beschleunigte) Komponenten analysiert werden. Die Bahn ist parabolisch, mit maximaler Reichweite bei 45° Abwurfwinkel.",
                    nl: "Projectielbeweging treedt op wanneer een object beweegt onder invloed van alleen zwaartekracht. De beweging kan worden geanalyseerd door het te scheiden in onafhankelijke horizontale (constante snelheid) en verticale (uniform versnelde) componenten. De baan is parabolisch, met maximum bereik bij 45° lanceerhoek."
                }
            },
            {
                question: {
                    en: "What is the difference between conservative and non-conservative forces?",
                    es: "¿Cuál es la diferencia entre fuerzas conservativas y no conservativas?",
                    de: "Was ist der Unterschied zwischen konservativen und nicht-konservativen Kräften?",
                    nl: "Wat is het verschil tussen conservatieve en niet-conservatieve krachten?"
                },
                options: [
                    {
                        en: "Conservative forces have path-independent work; non-conservative forces depend on path taken",
                        es: "Las fuerzas conservativas tienen trabajo independiente del camino; las fuerzas no conservativas dependen del camino tomado",
                        de: "Konservative Kräfte haben wegunabhängige Arbeit; nicht-konservative Kräfte hängen vom gewählten Weg ab",
                        nl: "Conservatieve krachten hebben padOnafhankelijke arbeid; niet-conservatieve krachten hangen af van het gekozen pad"
                    },
                    {
                        en: "Conservative forces are always stronger than non-conservative forces",
                        es: "Las fuerzas conservativas son siempre más fuertes que las fuerzas no conservativas",
                        de: "Konservative Kräfte sind immer stärker als nicht-konservative Kräfte",
                        nl: "Conservatieve krachten zijn altijd sterker dan niet-conservatieve krachten"
                    },
                    {
                        en: "Conservative forces only act vertically; non-conservative forces act horizontally",
                        es: "Las fuerzas conservativas solo actúan verticalmente; las fuerzas no conservativas actúan horizontalmente",
                        de: "Konservative Kräfte wirken nur vertikal; nicht-konservative Kräfte wirken horizontal",
                        nl: "Conservatieve krachten werken alleen verticaal; niet-conservatieve krachten werken horizontaal"
                    },
                    {
                        en: "There is no practical difference between these force types",
                        es: "No hay diferencia práctica entre estos tipos de fuerzas",
                        de: "Es gibt keinen praktischen Unterschied zwischen diesen Krafttypen",
                        nl: "Er is geen praktisch verschil tussen deze krachttypes"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Conservative forces (gravity, springs) do work that depends only on initial and final positions, not the path taken. They can be associated with potential energy. Non-conservative forces (friction, air resistance) do path-dependent work and typically dissipate mechanical energy as heat.",
                    es: "Las fuerzas conservativas (gravedad, resortes) realizan trabajo que depende solo de las posiciones inicial y final, no del camino tomado. Pueden asociarse con energía potencial. Las fuerzas no conservativas (fricción, resistencia del aire) realizan trabajo dependiente del camino y típicamente disipan energía mecánica como calor.",
                    de: "Konservative Kräfte (Schwerkraft, Federn) verrichten Arbeit, die nur von Anfangs- und Endposition abhängt, nicht vom gewählten Weg. Sie können mit potentieller Energie verbunden werden. Nicht-konservative Kräfte (Reibung, Luftwiderstand) verrichten wegabhängige Arbeit und dissipieren typischerweise mechanische Energie als Wärme.",
                    nl: "Conservatieve krachten (zwaartekracht, veren) verrichten arbeid die alleen afhangt van begin- en eindposities, niet van het gekozen pad. Ze kunnen worden geassocieerd met potentiële energie. Niet-conservatieve krachten (wrijving, luchtweerstand) verrichten padafhankelijke arbeid en dissiperen typisch mechanische energie als warmte."
                }
            },
            {
                question: {
                    en: "What is the relationship between period and frequency in oscillatory motion?",
                    es: "¿Cuál es la relación entre período y frecuencia en movimiento oscilatorio?",
                    de: "Wie ist die Beziehung zwischen Periode und Frequenz bei oszillierender Bewegung?",
                    nl: "Wat is de relatie tussen periode en frequentie in oscillerende beweging?"
                },
                options: [
                    {
                        en: "T = 1/f, where T is period (time per cycle) and f is frequency (cycles per time)",
                        es: "T = 1/f, donde T es período (tiempo por ciclo) y f es frecuencia (ciclos por tiempo)",
                        de: "T = 1/f, wobei T die Periode (Zeit pro Zyklus) und f die Frequenz (Zyklen pro Zeit) ist",
                        nl: "T = 1/f, waarbij T periode is (tijd per cyclus) en f frequentie (cycli per tijd)"
                    },
                    {
                        en: "T = f, period and frequency are equal",
                        es: "T = f, período y frecuencia son iguales",
                        de: "T = f, Periode und Frequenz sind gleich",
                        nl: "T = f, periode en frequentie zijn gelijk"
                    },
                    {
                        en: "T = 2πf, with a factor of 2π",
                        es: "T = 2πf, con un factor de 2π",
                        de: "T = 2πf, mit einem Faktor von 2π",
                        nl: "T = 2πf, met een factor van 2π"
                    },
                    {
                        en: "Period and frequency are independent quantities",
                        es: "Período y frecuencia son cantidades independientes",
                        de: "Periode und Frequenz sind unabhängige Größen",
                        nl: "Periode en frequentie zijn onafhankelijke grootheden"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Period (T) is the time required for one complete oscillation cycle, measured in seconds. Frequency (f) is the number of complete cycles per unit time, measured in Hz (cycles per second). They are reciprocals: T = 1/f or f = 1/T. Higher frequency means shorter period.",
                    es: "El período (T) es el tiempo requerido para un ciclo completo de oscilación, medido en segundos. La frecuencia (f) es el número de ciclos completos por unidad de tiempo, medida en Hz (ciclos por segundo). Son recíprocos: T = 1/f o f = 1/T. Mayor frecuencia significa período más corto.",
                    de: "Die Periode (T) ist die Zeit, die für einen vollständigen Schwingungszyklus benötigt wird, gemessen in Sekunden. Die Frequenz (f) ist die Anzahl vollständiger Zyklen pro Zeiteinheit, gemessen in Hz (Zyklen pro Sekunde). Sie sind Kehrwerte: T = 1/f oder f = 1/T. Höhere Frequenz bedeutet kürzere Periode.",
                    nl: "Periode (T) is de tijd die nodig is voor één volledige oscillatiecyclus, gemeten in seconden. Frequentie (f) is het aantal volledige cycli per tijdseenheid, gemeten in Hz (cycli per seconde). Ze zijn elkaars reciproken: T = 1/f of f = 1/T. Hogere frequentie betekent kortere periode."
                }
            },
            {
                question: {
                    en: "What is the principle of mechanical advantage in simple machines?",
                    es: "¿Cuál es el principio de ventaja mecánica en máquinas simples?",
                    de: "Was ist das Prinzip des mechanischen Vorteils bei einfachen Maschinen?",
                    nl: "Wat is het principe van mechanisch voordeel bij eenvoudige machines?"
                },
                options: [
                    {
                        en: "Machines trade force for distance; work input equals work output (ignoring friction)",
                        es: "Las máquinas intercambian fuerza por distancia; trabajo de entrada igual trabajo de salida (ignorando fricción)",
                        de: "Maschinen tauschen Kraft gegen Distanz; Eingabearbeit gleich Ausgabearbeit (Reibung vernachlässigt)",
                        nl: "Machines ruilen kracht voor afstand; ingevoerde arbeid gelijk uitgevoerde arbeid (wrijving genegeerd)"
                    },
                    {
                        en: "Simple machines create energy from nothing",
                        es: "Las máquinas simples crean energía de la nada",
                        de: "Einfache Maschinen erzeugen Energie aus dem Nichts",
                        nl: "Eenvoudige machines creëren energie uit het niets"
                    },
                    {
                        en: "Mechanical advantage always increases both force and distance",
                        es: "La ventaja mecánica siempre aumenta tanto fuerza como distancia",
                        de: "Mechanischer Vorteil erhöht immer sowohl Kraft als auch Distanz",
                        nl: "Mechanisch voordeel verhoogt altijd zowel kracht als afstand"
                    },
                    {
                        en: "The output force is always less than the input force",
                        es: "La fuerza de salida es siempre menor que la fuerza de entrada",
                        de: "Die Ausgangskraft ist immer kleiner als die Eingangskraft",
                        nl: "De uitgangskracht is altijd kleiner dan de ingangskracht"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Mechanical advantage allows machines to amplify force at the expense of distance (or vice versa), but the total work remains the same: W_in = W_out (ideal case). A lever that triples force requires you to move your end three times farther. This principle applies to levers, pulleys, inclined planes, etc.",
                    es: "La ventaja mecánica permite que las máquinas amplifiquen fuerza a expensas de distancia (o viceversa), pero el trabajo total permanece igual: W_entrada = W_salida (caso ideal). Una palanca que triplica fuerza requiere que muevas tu extremo tres veces más lejos. Este principio se aplica a palancas, poleas, planos inclinados, etc.",
                    de: "Mechanischer Vorteil ermöglicht es Maschinen, Kraft auf Kosten der Distanz zu verstärken (oder umgekehrt), aber die Gesamtarbeit bleibt gleich: W_ein = W_aus (idealer Fall). Ein Hebel, der die Kraft verdreifacht, erfordert, dass Sie Ihr Ende dreimal weiter bewegen. Dieses Prinzip gilt für Hebel, Rollen, schiefe Ebenen usw.",
                    nl: "Mechanisch voordeel stelt machines in staat kracht te versterken ten koste van afstand (of omgekeerd), maar de totale arbeid blijft hetzelfde: W_in = W_uit (ideale geval). Een hefboom die kracht verdrievoudigt vereist dat je jouw eind drie keer verder beweegt. Dit principe geldt voor hefbomen, katrolsystemen, hellende vlakken, enz."
                }
            },
            {
                question: {
                    en: "What is damped harmonic motion?",
                    es: "¿Qué es el movimiento armónico amortiguado?",
                    de: "Was ist gedämpfte harmonische Bewegung?",
                    nl: "Wat is gedempte harmonische beweging?"
                },
                options: [
                    {
                        en: "Oscillation with decreasing amplitude due to energy loss (friction, air resistance)",
                        es: "Oscilación con amplitud decreciente debido a pérdida de energía (fricción, resistencia del aire)",
                        de: "Schwingung mit abnehmender Amplitude aufgrund von Energieverlust (Reibung, Luftwiderstand)",
                        nl: "Oscillatie met afnemende amplitude door energieverlies (wrijving, luchtweerstand)"
                    },
                    {
                        en: "Oscillation with constant amplitude forever",
                        es: "Oscilación con amplitud constante para siempre",
                        de: "Schwingung mit konstanter Amplitude für immer",
                        nl: "Oscillatie met constante amplitude voor altijd"
                    },
                    {
                        en: "Oscillation with increasing amplitude over time",
                        es: "Oscilación con amplitud creciente con el tiempo",
                        de: "Schwingung mit im Laufe der Zeit zunehmender Amplitude",
                        nl: "Oscillatie met toenemende amplitude over tijd"
                    },
                    {
                        en: "Motion that only occurs in vacuum conditions",
                        es: "Movimiento que solo ocurre en condiciones de vacío",
                        de: "Bewegung, die nur unter Vakuumbedingungen auftritt",
                        nl: "Beweging die alleen optreedt in vacuümomstandigheden"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Damped harmonic motion occurs when a damping force (proportional to velocity) acts on an oscillating system, causing energy loss and decreasing amplitude over time. The motion can be underdamped (oscillatory decay), critically damped (fastest return to equilibrium), or overdamped (slow non-oscillatory return).",
                    es: "El movimiento armónico amortiguado ocurre cuando una fuerza amortiguadora (proporcional a la velocidad) actúa en un sistema oscilante, causando pérdida de energía y amplitud decreciente con el tiempo. El movimiento puede ser subamortiguado (decaimiento oscilatorio), críticamente amortiguado (retorno más rápido al equilibrio), o sobreamortiguado (retorno lento no oscilatorio).",
                    de: "Gedämpfte harmonische Bewegung tritt auf, wenn eine Dämpfungskraft (proportional zur Geschwindigkeit) auf ein schwingendes System wirkt und Energieverlust sowie abnehmende Amplitude über die Zeit verursacht. Die Bewegung kann unterdämpft (oszillierender Zerfall), kritisch gedämpft (schnellste Rückkehr zum Gleichgewicht) oder überdämpft (langsame nicht-oszillierende Rückkehr) sein.",
                    nl: "Gedempte harmonische beweging treedt op wanneer een dempingskracht (evenredig met snelheid) inwerkt op een oscillerend systeem, wat energieverlies en afnemende amplitude over tijd veroorzaakt. De beweging kan ondergedempt (oscillerende verval), kritisch gedempt (snelste terugkeer naar evenwicht), of overgedempt (langzame niet-oscillerende terugkeer) zijn."
                }
            },
            {
                question: {
                    en: "What is the concept of equilibrium in statics?",
                    es: "¿Cuál es el concepto de equilibrio en estática?",
                    de: "Was ist das Konzept des Gleichgewichts in der Statik?",
                    nl: "Wat is het concept van evenwicht in statica?"
                },
                options: [
                    {
                        en: "Object at rest with zero net force and zero net torque about any point",
                        es: "Objeto en reposo con fuerza neta cero y torque neto cero sobre cualquier punto",
                        de: "Objekt in Ruhe mit null Nettokraft und null Netto-Drehmoment um jeden Punkt",
                        nl: "Object in rust met netto kracht nul en netto koppel nul rond elk punt"
                    },
                    {
                        en: "Object moving at constant velocity in any direction",
                        es: "Objeto moviéndose a velocidad constante en cualquier dirección",
                        de: "Objekt, das sich mit konstanter Geschwindigkeit in beliebiger Richtung bewegt",
                        nl: "Object dat beweegt met constante snelheid in elke richting"
                    },
                    {
                        en: "Object with maximum possible kinetic energy",
                        es: "Objeto con la máxima energía cinética posible",
                        de: "Objekt mit maximal möglicher kinetischer Energie",
                        nl: "Object met maximaal mogelijke kinetische energie"
                    },
                    {
                        en: "Object experiencing the strongest possible forces",
                        es: "Objeto experimentando las fuerzas más fuertes posibles",
                        de: "Objekt, das die stärksten möglichen Kräfte erfährt",
                        nl: "Object dat de sterkste mogelijke krachten ervaart"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Static equilibrium requires two conditions: (1) The net force on the object must be zero (ΣF = 0), and (2) The net torque about any point must be zero (Στ = 0). This ensures the object remains at rest with no translational or rotational acceleration. These conditions apply to structures like bridges, buildings, and balanced objects.",
                    es: "El equilibrio estático requiere dos condiciones: (1) La fuerza neta sobre el objeto debe ser cero (ΣF = 0), y (2) El torque neto sobre cualquier punto debe ser cero (Στ = 0). Esto asegura que el objeto permanezca en reposo sin aceleración traslacional o rotacional. Estas condiciones se aplican a estructuras como puentes, edificios y objetos equilibrados.",
                    de: "Statisches Gleichgewicht erfordert zwei Bedingungen: (1) Die Nettokraft auf das Objekt muss null sein (ΣF = 0), und (2) Das Netto-Drehmoment um jeden Punkt muss null sein (Στ = 0). Dies stellt sicher, dass das Objekt in Ruhe bleibt ohne translatorische oder rotatorische Beschleunigung. Diese Bedingungen gelten für Strukturen wie Brücken, Gebäude und ausgewogene Objekte.",
                    nl: "Statisch evenwicht vereist twee voorwaarden: (1) De netto kracht op het object moet nul zijn (ΣF = 0), en (2) Het netto koppel rond elk punt moet nul zijn (Στ = 0). Dit zorgt ervoor dat het object in rust blijft zonder translationele of rotationele versnelling. Deze voorwaarden gelden voor structuren zoals bruggen, gebouwen en gebalanceerde objecten."
                }
            },
            {
                question: {
                    en: "What is the difference between distance and displacement?",
                    es: "¿Cuál es la diferencia entre distancia y desplazamiento?",
                    de: "Was ist der Unterschied zwischen Strecke und Verschiebung?",
                    nl: "Wat is het verschil tussen afstand en verplaatsing?"
                },
                options: [
                    {
                        en: "Distance is total path length (scalar); displacement is straight-line distance from start to end (vector)",
                        es: "La distancia es longitud total del camino (escalar); el desplazamiento es distancia en línea recta desde inicio hasta final (vector)",
                        de: "Strecke ist die gesamte Weglänge (skalar); Verschiebung ist die geradlinige Entfernung vom Start zum Ende (Vektor)",
                        nl: "Afstand is totale padlengte (scalair); verplaatsing is rechte afstand van start naar eind (vector)"
                    },
                    {
                        en: "Distance and displacement are always equal",
                        es: "Distancia y desplazamiento son siempre iguales",
                        de: "Strecke und Verschiebung sind immer gleich",
                        nl: "Afstand en verplaatsing zijn altijd gelijk"
                    },
                    {
                        en: "Distance is always less than displacement",
                        es: "La distancia es siempre menor que el desplazamiento",
                        de: "Die Strecke ist immer kleiner als die Verschiebung",
                        nl: "Afstand is altijd kleiner dan verplaatsing"
                    },
                    {
                        en: "Displacement includes only horizontal motion; distance includes vertical motion",
                        es: "El desplazamiento incluye solo movimiento horizontal; la distancia incluye movimiento vertical",
                        de: "Verschiebung umfasst nur horizontale Bewegung; Strecke umfasst vertikale Bewegung",
                        nl: "Verplaatsing omvat alleen horizontale beweging; afstand omvat verticale beweging"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Distance is a scalar quantity measuring the total length of path traveled, always positive. Displacement is a vector quantity measuring the straight-line distance and direction from initial to final position. If you walk in a circle and return to start, distance > 0 but displacement = 0.",
                    es: "La distancia es una cantidad escalar que mide la longitud total del camino recorrido, siempre positiva. El desplazamiento es una cantidad vectorial que mide la distancia en línea recta y dirección desde la posición inicial hasta la final. Si caminas en círculo y regresas al inicio, distancia > 0 pero desplazamiento = 0.",
                    de: "Strecke ist eine skalare Größe, die die Gesamtlänge des zurückgelegten Weges misst, immer positiv. Verschiebung ist eine Vektorgröße, die die geradlinige Entfernung und Richtung von der Anfangs- zur Endposition misst. Wenn Sie im Kreis gehen und zum Start zurückkehren, ist Strecke > 0, aber Verschiebung = 0.",
                    nl: "Afstand is een scalaire grootheid die de totale lengte van het afgelegde pad meet, altijd positief. Verplaatsing is een vectorgrootheid die de rechte afstand en richting van begin- naar eindpositie meet. Als je in een cirkel loopt en terugkeert naar start, dan is afstand > 0 maar verplaatsing = 0."
                }
            },
            {
                question: {
                    en: "What is the principle of relativity in classical mechanics?",
                    es: "¿Cuál es el principio de relatividad en mecánica clásica?",
                    de: "Was ist das Relativitätsprinzip in der klassischen Mechanik?",
                    nl: "Wat is het relativiteitsbeginsel in klassieke mechanica?"
                },
                options: [
                    {
                        en: "Physical laws are the same in all inertial reference frames moving at constant velocity",
                        es: "Las leyes físicas son las mismas en todos los marcos de referencia inerciales que se mueven a velocidad constante",
                        de: "Physikalische Gesetze sind in allen Trägheitsreferenzsystemen, die sich mit konstanter Geschwindigkeit bewegen, gleich",
                        nl: "Fysische wetten zijn hetzelfde in alle inertiaalsystemen die bewegen met constante snelheid"
                    },
                    {
                        en: "Time and space are absolute and independent of motion",
                        es: "El tiempo y el espacio son absolutos e independientes del movimiento",
                        de: "Zeit und Raum sind absolut und unabhängig von der Bewegung",
                        nl: "Tijd en ruimte zijn absoluut en onafhankelijk van beweging"
                    },
                    {
                        en: "All motion is relative to a fixed universal reference frame",
                        es: "Todo movimiento es relativo a un marco de referencia universal fijo",
                        de: "Alle Bewegung ist relativ zu einem festen universellen Bezugssystem",
                        nl: "Alle beweging is relatief ten opzichte van een vast universeel referentiekader"
                    },
                    {
                        en: "Physical laws change depending on the observer's speed",
                        es: "Las leyes físicas cambian dependiendo de la velocidad del observador",
                        de: "Physikalische Gesetze ändern sich je nach Geschwindigkeit des Beobachters",
                        nl: "Fysische wetten veranderen afhankelijk van de snelheid van de waarnemer"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Galilean relativity states that the laws of mechanics are identical in all inertial reference frames (frames moving at constant velocity relative to each other). This means there's no preferred reference frame, and you cannot detect uniform motion without reference to external objects. For example, physics experiments give the same results on a smoothly moving train as on the ground.",
                    es: "La relatividad galileana establece que las leyes de la mecánica son idénticas en todos los marcos de referencia inerciales (marcos que se mueven a velocidad constante relativos entre sí). Esto significa que no hay marco de referencia preferido, y no puedes detectar movimiento uniforme sin referencia a objetos externos. Por ejemplo, los experimentos de física dan los mismos resultados en un tren que se mueve suavemente que en el suelo.",
                    de: "Die Galileische Relativität besagt, dass die Gesetze der Mechanik in allen Trägheitsreferenzsystemen (Systeme, die sich mit konstanter Geschwindigkeit relativ zueinander bewegen) identisch sind. Das bedeutet, es gibt kein bevorzugtes Bezugssystem, und Sie können gleichförmige Bewegung nicht ohne Bezug auf externe Objekte erkennen. Zum Beispiel geben Physikexperimente in einem gleichmäßig fahrenden Zug dieselben Ergebnisse wie am Boden.",
                    nl: "Galileïsche relativiteit stelt dat de wetten van de mechanica identiek zijn in alle inertiaalsystemen (systemen die bewegen met constante snelheid ten opzichte van elkaar). Dit betekent dat er geen voorkeursreferentiekader is, en je kunt uniforme beweging niet detecteren zonder verwijzing naar externe objecten. Bijvoorbeeld, natuurkunde experimenten geven dezelfde resultaten in een soepel bewegende trein als op de grond."
                }
            },
            {
                question: {
                    en: "What is the concept of center of mass and why is it important?",
                    es: "¿Cuál es el concepto de centro de masa y por qué es importante?",
                    de: "Was ist das Konzept des Schwerpunkts und warum ist es wichtig?",
                    nl: "Wat is het concept van massamiddelpunt en waarom is het belangrijk?"
                },
                options: [
                    {
                        en: "Point where total mass appears concentrated; system moves as if all external forces act there",
                        es: "Punto donde la masa total parece concentrada; el sistema se mueve como si todas las fuerzas externas actuaran allí",
                        de: "Punkt, wo die gesamte Masse konzentriert erscheint; System bewegt sich, als würden alle externen Kräfte dort wirken",
                        nl: "Punt waar totale massa geconcentreerd lijkt; systeem beweegt alsof alle externe krachten daar aangrijpen"
                    },
                    {
                        en: "The heaviest point in any object or system",
                        es: "El punto más pesado en cualquier objeto o sistema",
                        de: "Der schwerste Punkt in einem Objekt oder System",
                        nl: "Het zwaarste punt in elk object of systeem"
                    },
                    {
                        en: "The geometric center of any object regardless of mass distribution",
                        es: "El centro geométrico de cualquier objeto independientemente de la distribución de masa",
                        de: "Das geometrische Zentrum jedes Objekts unabhängig von der Massenverteilung",
                        nl: "Het geometrische centrum van elk object ongeacht massaverdeling"
                    },
                    {
                        en: "The point where gravitational force is strongest",
                        es: "El punto donde la fuerza gravitacional es más fuerte",
                        de: "Der Punkt, wo die Gravitationskraft am stärksten ist",
                        nl: "Het punt waar zwaartekracht het sterkst is"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The center of mass is the weighted average position of all mass in a system. It's the point where the system behaves as if all its mass were concentrated and where all external forces appear to act. For uniform objects, it coincides with the geometric center. The center of mass follows a parabolic trajectory in projectile motion, even if the object rotates.",
                    es: "El centro de masa es la posición promedio ponderada de toda la masa en un sistema. Es el punto donde el sistema se comporta como si toda su masa estuviera concentrada y donde todas las fuerzas externas parecen actuar. Para objetos uniformes, coincide con el centro geométrico. El centro de masa sigue una trayectoria parabólica en movimiento proyectil, incluso si el objeto rota.",
                    de: "Der Schwerpunkt ist die gewichtete durchschnittliche Position aller Masse in einem System. Es ist der Punkt, wo sich das System verhält, als wäre seine gesamte Masse dort konzentriert und wo alle externen Kräfte zu wirken scheinen. Bei gleichförmigen Objekten fällt er mit dem geometrischen Zentrum zusammen. Der Schwerpunkt folgt einer parabolischen Bahn bei Wurfbewegung, auch wenn das Objekt rotiert.",
                    nl: "Het massamiddelpunt is de gewogen gemiddelde positie van alle massa in een systeem. Het is het punt waar het systeem zich gedraagt alsof al zijn massa daar geconcentreerd is en waar alle externe krachten lijken aan te grijpen. Voor uniforme objecten valt het samen met het geometrische centrum. Het massamiddelpunt volgt een parabolische baan in projectielbeweging, zelfs als het object roteert."
                }
            },
            {
                question: {
                    en: "What is the rolling motion of a sphere and how does it combine translation and rotation?",
                    es: "¿Qué es el movimiento de rodadura de una esfera y cómo combina traslación y rotación?",
                    de: "Was ist die Rollbewegung einer Kugel und wie kombiniert sie Translation und Rotation?",
                    nl: "Wat is de rolbeweging van een bol en hoe combineert het translatie en rotatie?"
                },
                options: [
                    {
                        en: "Rolling without slipping: v_cm = rω, where contact point has zero velocity",
                        es: "Rodadura sin deslizamiento: v_cm = rω, donde el punto de contacto tiene velocidad cero",
                        de: "Rollen ohne Rutschen: v_cm = rω, wobei der Kontaktpunkt null Geschwindigkeit hat",
                        nl: "Rollen zonder slippen: v_cm = rω, waarbij contactpunt nul snelheid heeft"
                    },
                    {
                        en: "Rolling motion is purely translational with no rotation",
                        es: "El movimiento de rodadura es puramente traslacional sin rotación",
                        de: "Rollbewegung ist rein translatorisch ohne Rotation",
                        nl: "Rolbeweging is puur translationeel zonder rotatie"
                    },
                    {
                        en: "Rolling motion is purely rotational with no translation",
                        es: "El movimiento de rodadura es puramente rotacional sin traslación",
                        de: "Rollbewegung ist rein rotatorisch ohne Translation",
                        nl: "Rolbeweging is puur rotationeel zonder translatie"
                    },
                    {
                        en: "In rolling motion, all points move at the same speed",
                        es: "En movimiento de rodadura, todos los puntos se mueven a la misma velocidad",
                        de: "Bei Rollbewegung bewegen sich alle Punkte mit derselben Geschwindigkeit",
                        nl: "Bij rolbeweging bewegen alle punten met dezelfde snelheid"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Rolling motion combines translation of the center of mass with rotation about the center. For rolling without slipping, v_cm = rω, where v_cm is the center of mass velocity, r is the radius, and ω is angular velocity. The contact point instantaneously has zero velocity, while the top point moves at 2v_cm. The kinetic energy is KE = ½mv² + ½Iω².",
                    es: "El movimiento de rodadura combina traslación del centro de masa con rotación alrededor del centro. Para rodadura sin deslizamiento, v_cm = rω, donde v_cm es la velocidad del centro de masa, r es el radio, y ω es velocidad angular. El punto de contacto instantáneamente tiene velocidad cero, mientras el punto superior se mueve a 2v_cm. La energía cinética es EC = ½mv² + ½Iω².",
                    de: "Rollbewegung kombiniert Translation des Schwerpunkts mit Rotation um das Zentrum. Für Rollen ohne Rutschen gilt v_cm = rω, wobei v_cm die Schwerpunktsgeschwindigkeit, r der Radius und ω die Winkelgeschwindigkeit ist. Der Kontaktpunkt hat momentan null Geschwindigkeit, während sich der obere Punkt mit 2v_cm bewegt. Die kinetische Energie ist KE = ½mv² + ½Iω².",
                    nl: "Rolbeweging combineert translatie van het massamiddelpunt met rotatie rond het centrum. Voor rollen zonder slippen geldt v_cm = rω, waarbij v_cm de massamiddelpuntsnelheid is, r de straal, en ω de hoeksnelheid. Het contactpunt heeft momentaan nul snelheid, terwijl het bovenste punt beweegt met 2v_cm. De kinetische energie is KE = ½mv² + ½Iω²."
                }
            },
            {
                question: {
                    en: "What is the difference between elastic potential energy and gravitational potential energy?",
                    es: "¿Cuál es la diferencia entre energía potencial elástica y energía potencial gravitacional?",
                    de: "Was ist der Unterschied zwischen elastischer potentieller Energie und gravitationeller potentieller Energie?",
                    nl: "Wat is het verschil tussen elastische potentiële energie en gravitationele potentiële energie?"
                },
                options: [
                    {
                        en: "Elastic: PE = ½kx² (springs); Gravitational: PE = mgh (height in uniform field)",
                        es: "Elástica: EP = ½kx² (resortes); Gravitacional: EP = mgh (altura en campo uniforme)",
                        de: "Elastisch: PE = ½kx² (Federn); Gravitationell: PE = mgh (Höhe in gleichförmigem Feld)",
                        nl: "Elastisch: PE = ½kx² (veren); Gravitationeel: PE = mgh (hoogte in uniform veld)"
                    },
                    {
                        en: "They are identical forms of energy with the same formula",
                        es: "Son formas idénticas de energía con la misma fórmula",
                        de: "Sie sind identische Energieformen mit derselben Formel",
                        nl: "Ze zijn identieke energievormen met dezelfde formule"
                    },
                    {
                        en: "Elastic energy depends on mass; gravitational energy depends on spring constant",
                        es: "La energía elástica depende de la masa; la energía gravitacional depende de la constante del resorte",
                        de: "Elastische Energie hängt von der Masse ab; Gravitationsenergie hängt von der Federkonstante ab",
                        nl: "Elastische energie hangt af van massa; gravitationele energie hangt af van veerconstante"
                    },
                    {
                        en: "Gravitational energy is always greater than elastic energy",
                        es: "La energía gravitacional es siempre mayor que la energía elástica",
                        de: "Gravitationsenergie ist immer größer als elastische Energie",
                        nl: "Gravitationele energie is altijd groter dan elastische energie"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Elastic potential energy (PE = ½kx²) is stored in deformed springs or elastic materials, depending on displacement from equilibrium and spring stiffness. Gravitational potential energy (PE = mgh) is stored due to position in a gravitational field, depending on mass, gravity, and height. Both can be converted to kinetic energy.",
                    es: "La energía potencial elástica (EP = ½kx²) se almacena en resortes deformados o materiales elásticos, dependiendo del desplazamiento del equilibrio y la rigidez del resorte. La energía potencial gravitacional (EP = mgh) se almacena debido a la posición en un campo gravitacional, dependiendo de la masa, gravedad y altura. Ambas pueden convertirse en energía cinética.",
                    de: "Elastische potentielle Energie (PE = ½kx²) wird in verformten Federn oder elastischen Materialien gespeichert, abhängig von der Verschiebung vom Gleichgewicht und der Federsteifigkeit. Gravitationelle potentielle Energie (PE = mgh) wird aufgrund der Position in einem Gravitationsfeld gespeichert, abhängig von Masse, Schwerkraft und Höhe. Beide können in kinetische Energie umgewandelt werden.",
                    nl: "Elastische potentiële energie (PE = ½kx²) wordt opgeslagen in vervormde veren of elastische materialen, afhankelijk van verplaatsing van evenwicht en veerstijfheid. Gravitationele potentiële energie (PE = mgh) wordt opgeslagen door positie in een gravitatieveld, afhankelijk van massa, zwaartekracht en hoogte. Beide kunnen worden omgezet in kinetische energie."
                }
            },
            {
                question: {
                    en: "What is the concept of instantaneous velocity versus average velocity?",
                    es: "¿Cuál es el concepto de velocidad instantánea versus velocidad promedio?",
                    de: "Was ist das Konzept der Momentangeschwindigkeit gegenüber der Durchschnittsgeschwindigkeit?",
                    nl: "Wat is het concept van momentane snelheid versus gemiddelde snelheid?"
                },
                options: [
                    {
                        en: "Instantaneous velocity is limit of Δs/Δt as Δt→0; average velocity is total displacement/total time",
                        es: "Velocidad instantánea es límite de Δs/Δt cuando Δt→0; velocidad promedio es desplazamiento total/tiempo total",
                        de: "Momentangeschwindigkeit ist Grenzwert von Δs/Δt für Δt→0; Durchschnittsgeschwindigkeit ist Gesamtverschiebung/Gesamtzeit",
                        nl: "Momentane snelheid is limiet van Δs/Δt als Δt→0; gemiddelde snelheid is totale verplaatsing/totale tijd"
                    },
                    {
                        en: "Instantaneous and average velocity are always equal",
                        es: "Velocidad instantánea y promedio son siempre iguales",
                        de: "Momentan- und Durchschnittsgeschwindigkeit sind immer gleich",
                        nl: "Momentane en gemiddelde snelheid zijn altijd gelijk"
                    },
                    {
                        en: "Instantaneous velocity can only be measured, never calculated",
                        es: "La velocidad instantánea solo puede medirse, nunca calcularse",
                        de: "Momentangeschwindigkeit kann nur gemessen, nie berechnet werden",
                        nl: "Momentane snelheid kan alleen gemeten worden, nooit berekend"
                    },
                    {
                        en: "Average velocity is always greater than instantaneous velocity",
                        es: "La velocidad promedio es siempre mayor que la velocidad instantánea",
                        de: "Durchschnittsgeschwindigkeit ist immer größer als Momentangeschwindigkeit",
                        nl: "Gemiddelde snelheid is altijd groter dan momentane snelheid"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Instantaneous velocity is the velocity at a specific instant, found by taking the limit of average velocity as the time interval approaches zero (derivative of position). Average velocity is total displacement divided by total time interval. For uniform motion they're equal, but for changing velocity they differ.",
                    es: "La velocidad instantánea es la velocidad en un instante específico, encontrada tomando el límite de velocidad promedio cuando el intervalo de tiempo se acerca a cero (derivada de posición). La velocidad promedio es desplazamiento total dividido por intervalo de tiempo total. Para movimiento uniforme son iguales, pero para velocidad cambiante difieren.",
                    de: "Momentangeschwindigkeit ist die Geschwindigkeit zu einem bestimmten Zeitpunkt, gefunden durch Grenzwertbildung der Durchschnittsgeschwindigkeit, wenn das Zeitintervall gegen null geht (Ableitung der Position). Durchschnittsgeschwindigkeit ist Gesamtverschiebung geteilt durch Gesamtzeitintervall. Bei gleichförmiger Bewegung sind sie gleich, bei sich ändernder Geschwindigkeit unterscheiden sie sich.",
                    nl: "Momentane snelheid is de snelheid op een specifiek moment, gevonden door de limiet van gemiddelde snelheid te nemen als het tijdsinterval naar nul gaat (afgeleide van positie). Gemiddelde snelheid is totale verplaatsing gedeeld door totaal tijdsinterval. Voor uniforme beweging zijn ze gelijk, maar voor veranderende snelheid verschillen ze."
                }
            },
            {
                question: {
                    en: "What is the significance of Newton's Third Law in rocket propulsion?",
                    es: "¿Cuál es la significancia de la Tercera Ley de Newton en propulsión de cohetes?",
                    de: "Was ist die Bedeutung von Newtons Drittem Gesetz für den Raketenantrieb?",
                    nl: "Wat is de betekenis van Newton's Derde Wet bij raketvoortstuwing?"
                },
                options: [
                    {
                        en: "Rocket pushes exhaust gases backward; gases push rocket forward with equal force",
                        es: "El cohete empuja gases de escape hacia atrás; los gases empujan el cohete hacia adelante con fuerza igual",
                        de: "Rakete schiebt Abgase nach hinten; Gase schieben Rakete mit gleicher Kraft nach vorn",
                        nl: "Raket duwt uitlaatgassen naar achteren; gassen duwen raket voorwaarts met gelijke kracht"
                    },
                    {
                        en: "Rockets work by pushing against the ground or air",
                        es: "Los cohetes funcionan empujando contra el suelo o el aire",
                        de: "Raketen funktionieren, indem sie gegen den Boden oder die Luft drücken",
                        nl: "Raketten werken door tegen de grond of lucht te duwen"
                    },
                    {
                        en: "Rockets violate Newton's laws by accelerating without external force",
                        es: "Los cohetes violan las leyes de Newton acelerando sin fuerza externa",
                        de: "Raketen verletzen Newtons Gesetze, indem sie ohne externe Kraft beschleunigen",
                        nl: "Raketten schenden Newton's wetten door te versnellen zonder externe kracht"
                    },
                    {
                        en: "Rocket propulsion only works in Earth's atmosphere",
                        es: "La propulsión de cohete solo funciona en la atmósfera terrestre",
                        de: "Raketenantrieb funktioniert nur in der Erdatmosphäre",
                        nl: "Raketvoortstuwing werkt alleen in de atmosfeer van de aarde"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Newton's Third Law (action-reaction) explains rocket propulsion: the rocket exerts a force on exhaust gases, accelerating them backward. By Newton's Third Law, the gases exert an equal and opposite force on the rocket, accelerating it forward. This works in vacuum because no external medium is needed - the reaction is internal between rocket and exhaust.",
                    es: "La Tercera Ley de Newton (acción-reacción) explica la propulsión de cohetes: el cohete ejerce fuerza en gases de escape, acelerándolos hacia atrás. Por la Tercera Ley de Newton, los gases ejercen fuerza igual y opuesta en el cohete, acelerándolo hacia adelante. Esto funciona en vacío porque no se necesita medio externo - la reacción es interna entre cohete y escape.",
                    de: "Newtons Drittes Gesetz (Aktion-Reaktion) erklärt den Raketenantrieb: die Rakete übt Kraft auf Abgase aus und beschleunigt sie nach hinten. Durch Newtons Drittes Gesetz üben die Gase eine gleiche und entgegengesetzte Kraft auf die Rakete aus und beschleunigen sie nach vorn. Dies funktioniert im Vakuum, weil kein externes Medium benötigt wird - die Reaktion ist intern zwischen Rakete und Abgas.",
                    nl: "Newton's Derde Wet (actie-reactie) verklaart raketvoortstuwing: de raket oefent kracht uit op uitlaatgassen, versnelt ze naar achteren. Door Newton's Derde Wet oefenen de gassen een gelijke en tegengestelde kracht uit op de raket, versnelt hem voorwaarts. Dit werkt in vacuüm omdat geen extern medium nodig is - de reactie is intern tussen raket en uitlaat."
                }
            },
            {
                question: {
                    en: "What is the concept of normal force?",
                    es: "¿Cuál es el concepto de fuerza normal?",
                    de: "Was ist das Konzept der Normalkraft?",
                    nl: "Wat is het concept van normaalkracht?"
                },
                options: [
                    {
                        en: "Force perpendicular to contact surface that prevents objects from passing through each other",
                        es: "Fuerza perpendicular a superficie de contacto que previene que objetos pasen uno a través del otro",
                        de: "Kraft senkrecht zur Kontaktoberfläche, die verhindert, dass Objekte durcheinander hindurchgehen",
                        nl: "Kracht loodrecht op contactoppervlak die voorkomt dat objecten door elkaar heen gaan"
                    },
                    {
                        en: "Force that always equals the weight of an object",
                        es: "Fuerza que siempre es igual al peso de un objeto",
                        de: "Kraft, die immer dem Gewicht eines Objekts entspricht",
                        nl: "Kracht die altijd gelijk is aan het gewicht van een object"
                    },
                    {
                        en: "Force that acts parallel to surfaces",
                        es: "Fuerza que actúa paralela a superficies",
                        de: "Kraft, die parallel zu Oberflächen wirkt",
                        nl: "Kracht die parallel aan oppervlakken werkt"
                    },
                    {
                        en: "Force that only exists in horizontal situations",
                        es: "Fuerza que solo existe en situaciones horizontales",
                        de: "Kraft, die nur in horizontalen Situationen existiert",
                        nl: "Kracht die alleen bestaat in horizontale situaties"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Normal force is the contact force exerted by a surface perpendicular to the surface. It arises from electromagnetic repulsion between atoms and prevents solid objects from passing through each other. It adjusts automatically to maintain contact and can differ from an object's weight on inclines.",
                    es: "La fuerza normal es la fuerza de contacto ejercida por una superficie perpendicular a la superficie. Surge de la repulsión electromagnética entre átomos y previene que objetos sólidos pasen uno a través del otro. Se ajusta automáticamente para mantener contacto y puede diferir del peso de un objeto en inclinaciones.",
                    de: "Die Normalkraft ist die Kontaktkraft, die von einer Oberfläche senkrecht zur Oberfläche ausgeübt wird. Sie entsteht durch elektromagnetische Abstoßung zwischen Atomen und verhindert, dass feste Objekte durcheinander hindurchgehen. Sie passt sich automatisch an, um Kontakt aufrechtzuerhalten, und kann sich vom Gewicht eines Objekts auf Neigungen unterscheiden.",
                    nl: "Normaalkracht is de contactkracht uitgeoefend door een oppervlak loodrecht op het oppervlak. Het ontstaat door elektromagnetische afstoting tussen atomen en voorkomt dat vaste objecten door elkaar heen gaan. Het past zich automatisch aan om contact te behouden en kan verschillen van het gewicht van een object op hellingen."
                }
            },
            {
                question: {
                    en: "What is the principle behind pendulum motion?",
                    es: "¿Cuál es el principio detrás del movimiento del péndulo?",
                    de: "Was ist das Prinzip hinter der Pendelbewegung?",
                    nl: "Wat is het principe achter slinger beweging?"
                },
                options: [
                    {
                        en: "Gravitational restoring force creates periodic motion; period depends on length and gravity",
                        es: "Fuerza restauradora gravitacional crea movimiento periódico; período depende de longitud y gravedad",
                        de: "Gravitationsrückstellkraft erzeugt periodische Bewegung; Periode hängt von Länge und Schwerkraft ab",
                        nl: "Gravitationele herstellende kracht creëert periodieke beweging; periode hangt af van lengte en zwaartekracht"
                    },
                    {
                        en: "Period depends only on the mass of the pendulum bob",
                        es: "El período depende solo de la masa de la pesa del péndulo",
                        de: "Die Periode hängt nur von der Masse des Pendelgewichts ab",
                        nl: "Periode hangt alleen af van de massa van het slingergewicht"
                    },
                    {
                        en: "Amplitude determines the period of oscillation",
                        es: "La amplitud determina el período de oscilación",
                        de: "Die Amplitude bestimmt die Schwingungsperiode",
                        nl: "Amplitude bepaalt de oscillatieperiode"
                    },
                    {
                        en: "Pendulums only work in vacuum conditions",
                        es: "Los péndulos solo funcionan en condiciones de vacío",
                        de: "Pendel funktionieren nur unter Vakuumbedingungen",
                        nl: "Slingers werken alleen onder vacuümomstandigheden"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "A pendulum oscillates due to the restoring force component of gravity (mg sin θ). For small angles, the period T = 2π√(L/g) depends only on length L and gravitational acceleration g, not on mass or amplitude. This makes pendulums excellent timekeeping devices.",
                    es: "Un péndulo oscila debido al componente de fuerza restauradora de la gravedad (mg sin θ). Para ángulos pequeños, el período T = 2π√(L/g) depende solo de la longitud L y aceleración gravitacional g, no de masa o amplitud. Esto hace que los péndulos sean excelentes dispositivos de cronometraje.",
                    de: "Ein Pendel schwingt aufgrund der Rückstellkraftkomponente der Schwerkraft (mg sin θ). Für kleine Winkel hängt die Periode T = 2π√(L/g) nur von der Länge L und der Gravitationsbeschleunigung g ab, nicht von Masse oder Amplitude. Das macht Pendel zu ausgezeichneten Zeitmessgeräten.",
                    nl: "Een slinger oscilleert door de herstellende krachtcomponent van zwaartekracht (mg sin θ). Voor kleine hoeken hangt de periode T = 2π√(L/g) alleen af van lengte L en gravitationele versnelling g, niet van massa of amplitude. Dit maakt slingers uitstekende tijdmeetapparaten."
                }
            },
            {
                question: {
                    en: "What is the concept of apparent weight in accelerating reference frames?",
                    es: "¿Cuál es el concepto de peso aparente en marcos de referencia acelerados?",
                    de: "Was ist das Konzept des scheinbaren Gewichts in beschleunigten Bezugssystemen?",
                    nl: "Wat is het concept van schijnbaar gewicht in versnellende referentiekaders?"
                },
                options: [
                    {
                        en: "Weight felt by observer differs from mg due to pseudo-forces in non-inertial frames",
                        es: "Peso sentido por observador difiere de mg debido a pseudo-fuerzas en marcos no inerciales",
                        de: "Vom Beobachter gefühltes Gewicht unterscheidet sich von mg aufgrund von Scheinkräften in nicht-inertialen Systemen",
                        nl: "Gewicht gevoeld door waarnemer verschilt van mg door pseudo-krachten in niet-inertiaalsystemen"
                    },
                    {
                        en: "Weight is always constant regardless of acceleration",
                        es: "El peso es siempre constante independientemente de la aceleración",
                        de: "Das Gewicht ist unabhängig von der Beschleunigung immer konstant",
                        nl: "Gewicht is altijd constant ongeacht versnelling"
                    },
                    {
                        en: "Apparent weight only changes in gravitational fields",
                        es: "El peso aparente solo cambia en campos gravitacionales",
                        de: "Das scheinbare Gewicht ändert sich nur in Gravitationsfeldern",
                        nl: "Schijnbaar gewicht verandert alleen in gravitationele velden"
                    },
                    {
                        en: "Mass changes with acceleration to create apparent weight",
                        es: "La masa cambia con aceleración para crear peso aparente",
                        de: "Die Masse ändert sich mit der Beschleunigung, um scheinbares Gewicht zu erzeugen",
                        nl: "Massa verandert met versnelling om schijnbaar gewicht te creëren"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "In accelerating reference frames, observers experience pseudo-forces that change apparent weight. In an upward accelerating elevator, apparent weight = m(g + a). In free fall, apparent weight = 0 (weightlessness). The actual gravitational force remains mg, but the felt force differs.",
                    es: "En marcos de referencia acelerados, los observadores experimentan pseudo-fuerzas que cambian el peso aparente. En un ascensor acelerando hacia arriba, peso aparente = m(g + a). En caída libre, peso aparente = 0 (ingravidez). La fuerza gravitacional actual permanece mg, pero la fuerza sentida difiere.",
                    de: "In beschleunigten Bezugssystemen erfahren Beobachter Scheinkräfte, die das scheinbare Gewicht ändern. In einem nach oben beschleunigenden Aufzug ist das scheinbare Gewicht = m(g + a). Im freien Fall ist das scheinbare Gewicht = 0 (Schwerelosigkeit). Die tatsächliche Gravitationskraft bleibt mg, aber die gefühlte Kraft unterscheidet sich.",
                    nl: "In versnellende referentiekaders ervaren waarnemers pseudo-krachten die schijnbaar gewicht veranderen. In een naar boven versnellende lift is schijnbaar gewicht = m(g + a). In vrije val is schijnbaar gewicht = 0 (gewichtloosheid). De werkelijke gravitationele kracht blijft mg, maar de gevoelde kracht verschilt."
                }
            },
            {
                question: {
                    en: "What is the relationship between force, impulse, and momentum change?",
                    es: "¿Cuál es la relación entre fuerza, impulso y cambio de momento?",
                    de: "Wie ist die Beziehung zwischen Kraft, Impuls und Impulsänderung?",
                    nl: "Wat is de relatie tussen kracht, impuls en momentum verandering?"
                },
                options: [
                    {
                        en: "F = dp/dt; impulse J = ∫F dt = Δp; connecting force, time, and momentum change",
                        es: "F = dp/dt; impulso J = ∫F dt = Δp; conectando fuerza, tiempo y cambio de momento",
                        de: "F = dp/dt; Impuls J = ∫F dt = Δp; verbindet Kraft, Zeit und Impulsänderung",
                        nl: "F = dp/dt; impuls J = ∫F dt = Δp; verbindt kracht, tijd en momentum verandering"
                    },
                    {
                        en: "Force and momentum are completely independent quantities",
                        es: "Fuerza y momento son cantidades completamente independientes",
                        de: "Kraft und Impuls sind völlig unabhängige Größen",
                        nl: "Kracht en momentum zijn volledig onafhankelijke grootheden"
                    },
                    {
                        en: "Impulse only applies to elastic collisions",
                        es: "El impulso solo se aplica a colisiones elásticas",
                        de: "Impuls gilt nur für elastische Stöße",
                        nl: "Impuls geldt alleen voor elastische botsingen"
                    },
                    {
                        en: "Momentum change requires infinite force",
                        es: "El cambio de momento requiere fuerza infinita",
                        de: "Impulsänderung erfordert unendliche Kraft",
                        nl: "Momentum verandering vereist oneindige kracht"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Newton's second law in its most general form states F = dp/dt (force equals rate of momentum change). Impulse J = ∫F dt represents the total effect of force over time and equals the change in momentum: J = Δp. This connects force, time duration, and momentum change in a unified framework.",
                    es: "La segunda ley de Newton en su forma más general establece F = dp/dt (fuerza igual tasa de cambio de momento). El impulso J = ∫F dt representa el efecto total de fuerza sobre tiempo e iguala el cambio en momento: J = Δp. Esto conecta fuerza, duración de tiempo y cambio de momento en un marco unificado.",
                    de: "Newtons zweites Gesetz in seiner allgemeinsten Form besagt F = dp/dt (Kraft gleich Impulsänderungsrate). Impuls J = ∫F dt repräsentiert die Gesamtwirkung der Kraft über die Zeit und entspricht der Impulsänderung: J = Δp. Dies verbindet Kraft, Zeitdauer und Impulsänderung in einem einheitlichen Rahmen.",
                    nl: "Newton's tweede wet in zijn meest algemene vorm stelt F = dp/dt (kracht is gelijk aan snelheid van momentum verandering). Impuls J = ∫F dt vertegenwoordigt het totale effect van kracht over tijd en is gelijk aan de verandering in momentum: J = Δp. Dit verbindt kracht, tijdsduur en momentum verandering in een verenigd kader."
                }
            },
            {
                question: {
                    en: "What is the principle of virtual work in statics?",
                    es: "¿Cuál es el principio del trabajo virtual en estática?",
                    de: "Was ist das Prinzip der virtuellen Arbeit in der Statik?",
                    nl: "Wat is het principe van virtuele arbeid in statica?"
                },
                options: [
                    {
                        en: "For equilibrium, virtual work done by all forces for any virtual displacement is zero",
                        es: "Para equilibrio, trabajo virtual hecho por todas las fuerzas para cualquier desplazamiento virtual es cero",
                        de: "Für Gleichgewicht ist die virtuelle Arbeit aller Kräfte für jede virtuelle Verschiebung null",
                        nl: "Voor evenwicht is virtuele arbeid door alle krachten voor elke virtuele verplaatsing nul"
                    },
                    {
                        en: "Virtual work is always positive for stable equilibrium",
                        es: "El trabajo virtual es siempre positivo para equilibrio estable",
                        de: "Virtuelle Arbeit ist immer positiv für stabiles Gleichgewicht",
                        nl: "Virtuele arbeid is altijd positief voor stabiel evenwicht"
                    },
                    {
                        en: "Virtual work only applies to moving systems",
                        es: "El trabajo virtual solo se aplica a sistemas en movimiento",
                        de: "Virtuelle Arbeit gilt nur für bewegte Systeme",
                        nl: "Virtuele arbeid geldt alleen voor bewegende systemen"
                    },
                    {
                        en: "Virtual work equals kinetic energy in static systems",
                        es: "El trabajo virtual iguala energía cinética en sistemas estáticos",
                        de: "Virtuelle Arbeit entspricht kinetischer Energie in statischen Systemen",
                        nl: "Virtuele arbeid is gelijk aan kinetische energie in statische systemen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The principle of virtual work states that a system is in equilibrium if and only if the total virtual work done by all forces (including constraint forces) is zero for every possible virtual displacement. This provides a powerful method for analyzing complex static systems without explicitly considering all constraint forces.",
                    es: "El principio de trabajo virtual establece que un sistema está en equilibrio si y solo si el trabajo virtual total hecho por todas las fuerzas (incluyendo fuerzas de restricción) es cero para cada desplazamiento virtual posible. Esto proporciona un método poderoso para analizar sistemas estáticos complejos sin considerar explícitamente todas las fuerzas de restricción.",
                    de: "Das Prinzip der virtuellen Arbeit besagt, dass ein System genau dann im Gleichgewicht ist, wenn die gesamte virtuelle Arbeit aller Kräfte (einschließlich Zwangskräfte) für jede mögliche virtuelle Verschiebung null ist. Dies bietet eine mächtige Methode zur Analyse komplexer statischer Systeme, ohne alle Zwangskräfte explizit zu berücksichtigen.",
                    nl: "Het principe van virtuele arbeid stelt dat een systeem in evenwicht is als en slechts als de totale virtuele arbeid door alle krachten (inclusief beperkingskrachten) nul is voor elke mogelijke virtuele verplaatsing. Dit biedt een krachtige methode voor het analyseren van complexe statische systemen zonder alle beperkingskrachten expliciet te overwegen."
                }
            },
            {
                question: {
                    en: "What is the concept of reduced mass in two-body problems?",
                    es: "¿Cuál es el concepto de masa reducida en problemas de dos cuerpos?",
                    de: "Was ist das Konzept der reduzierten Masse bei Zweikörperproblemen?",
                    nl: "Wat is het concept van gereduceerde massa in twee-lichaam problemen?"
                },
                options: [
                    {
                        en: "μ = m₁m₂/(m₁ + m₂); converts two-body problem to single-particle problem",
                        es: "μ = m₁m₂/(m₁ + m₂); convierte problema de dos cuerpos en problema de partícula única",
                        de: "μ = m₁m₂/(m₁ + m₂); wandelt Zweikörperproblem in Einteilchenproblem um",
                        nl: "μ = m₁m₂/(m₁ + m₂); converteert twee-lichaam probleem naar enkel-deeltje probleem"
                    },
                    {
                        en: "Reduced mass is always the smaller of the two masses",
                        es: "La masa reducida es siempre la menor de las dos masas",
                        de: "Die reduzierte Masse ist immer die kleinere der beiden Massen",
                        nl: "Gereduceerde massa is altijd de kleinere van de twee massa's"
                    },
                    {
                        en: "Reduced mass only applies to gravitational problems",
                        es: "La masa reducida solo se aplica a problemas gravitacionales",
                        de: "Reduzierte Masse gilt nur für Gravitationsprobleme",
                        nl: "Gereduceerde massa geldt alleen voor gravitationele problemen"
                    },
                    {
                        en: "Reduced mass equals the sum of individual masses",
                        es: "La masa reducida iguala la suma de masas individuales",
                        de: "Reduzierte Masse entspricht der Summe der Einzelmassen",
                        nl: "Gereduceerde massa is gelijk aan de som van individuele massa's"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Reduced mass μ = m₁m₂/(m₁ + m₂) allows transformation of a two-body problem into an equivalent single-body problem. The relative motion behaves as if a single particle of mass μ moves in the potential created by the interaction. This simplifies analysis of binary systems, collisions, and orbital mechanics.",
                    es: "La masa reducida μ = m₁m₂/(m₁ + m₂) permite transformar un problema de dos cuerpos en un problema equivalente de un solo cuerpo. El movimiento relativo se comporta como si una partícula única de masa μ se moviera en el potencial creado por la interacción. Esto simplifica el análisis de sistemas binarios, colisiones y mecánica orbital.",
                    de: "Die reduzierte Masse μ = m₁m₂/(m₁ + m₂) ermöglicht die Transformation eines Zweikörperproblems in ein äquivalentes Einkörperproblem. Die relative Bewegung verhält sich, als würde sich ein einzelnes Teilchen der Masse μ im durch die Wechselwirkung erzeugten Potential bewegen. Dies vereinfacht die Analyse von Doppelsternsystemen, Kollisionen und Bahnmechanik.",
                    nl: "Gereduceerde massa μ = m₁m₂/(m₁ + m₂) maakt transformatie van een twee-lichaam probleem mogelijk naar een equivalent enkel-lichaam probleem. De relatieve beweging gedraagt zich alsof een enkel deeltje van massa μ beweegt in het potentiaal gecreëerd door de interactie. Dit vereenvoudigt analyse van binaire systemen, botsingen en baanmechanica."
                }
            },
            {
                question: {
                    en: "What is the concept of phase space in classical mechanics?",
                    es: "¿Cuál es el concepto de espacio de fase en mecánica clásica?",
                    de: "Was ist das Konzept des Phasenraums in der klassischen Mechanik?",
                    nl: "Wat is het concept van faseruimte in klassieke mechanica?"
                },
                options: [
                    {
                        en: "Abstract space with position and momentum coordinates; each point represents system state",
                        es: "Espacio abstracto con coordenadas de posición y momento; cada punto representa estado del sistema",
                        de: "Abstrakter Raum mit Positions- und Impulskoordinaten; jeder Punkt repräsentiert Systemzustand",
                        nl: "Abstracte ruimte met positie en momentum coördinaten; elk punt vertegenwoordigt systeemtoestand"
                    },
                    {
                        en: "Three-dimensional physical space where particles move",
                        es: "Espacio físico tridimensional donde se mueven las partículas",
                        de: "Dreidimensionaler physikalischer Raum, in dem sich Teilchen bewegen",
                        nl: "Drie-dimensionale fysieke ruimte waarin deeltjes bewegen"
                    },
                    {
                        en: "Time-dependent space that changes with system evolution",
                        es: "Espacio dependiente del tiempo que cambia con evolución del sistema",
                        de: "Zeitabhängiger Raum, der sich mit der Systemevolution ändert",
                        nl: "Tijd-afhankelijke ruimte die verandert met systeem evolutie"
                    },
                    {
                        en: "Configuration space with only position coordinates",
                        es: "Espacio de configuración con solo coordenadas de posición",
                        de: "Konfigurationsraum mit nur Positionskoordinaten",
                        nl: "Configuratie ruimte met alleen positie coördinaten"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Phase space is a 6N-dimensional space (for N particles) where each point uniquely specifies the complete state of a classical system through position and momentum coordinates. Trajectories in phase space represent the time evolution of the system, and Liouville's theorem governs the evolution of probability distributions in this space.",
                    es: "El espacio de fase es un espacio 6N-dimensional (para N partículas) donde cada punto especifica únicamente el estado completo de un sistema clásico a través de coordenadas de posición y momento. Las trayectorias en espacio de fase representan la evolución temporal del sistema, y el teorema de Liouville gobierna la evolución de distribuciones de probabilidad en este espacio.",
                    de: "Der Phasenraum ist ein 6N-dimensionaler Raum (für N Teilchen), wo jeder Punkt eindeutig den vollständigen Zustand eines klassischen Systems durch Positions- und Impulskoordinaten spezifiziert. Trajektorien im Phasenraum repräsentieren die zeitliche Evolution des Systems, und Liouvilles Theorem regiert die Evolution von Wahrscheinlichkeitsverteilungen in diesem Raum.",
                    nl: "Faseruimte is een 6N-dimensionale ruimte (voor N deeltjes) waarbij elk punt uniek de volledige toestand van een klassiek systeem specificeert door positie en momentum coördinaten. Trajecten in faseruimte vertegenwoordigen de tijdsevolutie van het systeem, en Liouville's theorem beheerst de evolutie van kansdistributies in deze ruimte."
                }
            },
            {
                question: {
                    en: "What is the principle of least action (Hamilton's principle)?",
                    es: "¿Cuál es el principio de menor acción (principio de Hamilton)?",
                    de: "Was ist das Prinzip der kleinsten Wirkung (Hamiltonisches Prinzip)?",
                    nl: "Wat is het principe van minste actie (Hamilton's principe)?"
                },
                options: [
                    {
                        en: "Physical systems evolve along paths that extremize the action integral ∫L dt",
                        es: "Los sistemas físicos evolucionan a lo largo de caminos que extreman la integral de acción ∫L dt",
                        de: "Physikalische Systeme entwickeln sich entlang Pfaden, die das Wirkungsintegral ∫L dt extremisieren",
                        nl: "Fysische systemen evolueren langs paden die de actie integraal ∫L dt extremeren"
                    },
                    {
                        en: "Systems always choose paths of minimum energy",
                        es: "Los sistemas siempre eligen caminos de energía mínima",
                        de: "Systeme wählen immer Pfade minimaler Energie",
                        nl: "Systemen kiezen altijd paden van minimale energie"
                    },
                    {
                        en: "Motion occurs along the shortest geometric path",
                        es: "El movimiento ocurre a lo largo del camino geométrico más corto",
                        de: "Bewegung erfolgt entlang des kürzesten geometrischen Pfads",
                        nl: "Beweging vindt plaats langs het kortste geometrische pad"
                    },
                    {
                        en: "Systems minimize momentum at all times",
                        es: "Los sistemas minimizan momento en todo momento",
                        de: "Systeme minimieren Impuls zu allen Zeiten",
                        nl: "Systemen minimaliseren momentum te allen tijde"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Hamilton's principle states that the actual path taken by a physical system between two states is the one that makes the action S = ∫L dt stationary (usually minimal), where L is the Lagrangian. This variational principle provides an elegant reformulation of mechanics and leads to the Euler-Lagrange equations of motion.",
                    es: "El principio de Hamilton establece que el camino real tomado por un sistema físico entre dos estados es aquel que hace la acción S = ∫L dt estacionaria (usualmente mínima), donde L es el lagrangiano. Este principio variacional proporciona una reformulación elegante de la mecánica y lleva a las ecuaciones de movimiento de Euler-Lagrange.",
                    de: "Das Hamiltonsche Prinzip besagt, dass der tatsächliche Pfad, den ein physikalisches System zwischen zwei Zuständen nimmt, derjenige ist, der die Wirkung S = ∫L dt stationär (meist minimal) macht, wobei L der Lagrangian ist. Dieses Variationsprinzip bietet eine elegante Neuformulierung der Mechanik und führt zu den Euler-Lagrange-Bewegungsgleichungen.",
                    nl: "Hamilton's principe stelt dat het werkelijke pad genomen door een fysisch systeem tussen twee toestanden degene is die de actie S = ∫L dt stationair (meestal minimaal) maakt, waarbij L de Lagrangiaan is. Dit variatie principe biedt een elegante herformulering van mechanica en leidt tot de Euler-Lagrange bewegingsvergelijkingen."
                }
            },
            {
                question: {
                    en: "What is the concept of adiabatic invariants in slowly varying systems?",
                    es: "¿Cuál es el concepto de invariantes adiabáticas en sistemas que varían lentamente?",
                    de: "Was ist das Konzept adiabatischer Invarianten in langsam veränderlichen Systemen?",
                    nl: "Wat is het concept van adiabatische invarianten in langzaam variërende systemen?"
                },
                options: [
                    {
                        en: "Quantities conserved when system parameters change much slower than oscillation period",
                        es: "Cantidades conservadas cuando parámetros del sistema cambian mucho más lento que período de oscilación",
                        de: "Größen, die erhalten bleiben, wenn sich Systemparameter viel langsamer ändern als die Schwingungsperiode",
                        nl: "Grootheden behouden wanneer systeemparameters veel langzamer veranderen dan oscillatieperiode"
                    },
                    {
                        en: "Variables that change rapidly with system parameters",
                        es: "Variables que cambian rápidamente con parámetros del sistema",
                        de: "Variablen, die sich schnell mit Systemparametern ändern",
                        nl: "Variabelen die snel veranderen met systeemparameters"
                    },
                    {
                        en: "Constants that never change under any conditions",
                        es: "Constantes que nunca cambian bajo ninguna condición",
                        de: "Konstanten, die sich unter keinen Bedingungen ändern",
                        nl: "Constanten die nooit veranderen onder enige omstandigheden"
                    },
                    {
                        en: "Thermodynamic quantities in isolated systems",
                        es: "Cantidades termodinámicas en sistemas aislados",
                        de: "Thermodynamische Größen in isolierten Systemen",
                        nl: "Thermodynamische grootheden in geïsoleerde systemen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Adiabatic invariants are quantities that remain approximately constant when system parameters change slowly compared to the characteristic oscillation time. Examples include action variables in oscillators and magnetic moment in slowly varying magnetic fields. This concept is crucial in plasma physics and celestial mechanics.",
                    es: "Los invariantes adiabáticas son cantidades que permanecen aproximadamente constantes cuando los parámetros del sistema cambian lentamente comparado con el tiempo característico de oscilación. Ejemplos incluyen variables de acción en osciladores y momento magnético en campos magnéticos que varían lentamente. Este concepto es crucial en física de plasmas y mecánica celeste.",
                    de: "Adiabatische Invarianten sind Größen, die ungefähr konstant bleiben, wenn sich Systemparameter langsam im Vergleich zur charakteristischen Schwingungszeit ändern. Beispiele sind Wirkungsvariablen in Oszillatoren und magnetisches Moment in langsam veränderlichen Magnetfeldern. Dieses Konzept ist entscheidend in der Plasmaphysik und Himmelsmechanik.",
                    nl: "Adiabatische invarianten zijn grootheden die ongeveer constant blijven wanneer systeemparameters langzaam veranderen vergeleken met de karakteristieke oscillatietijd. Voorbeelden zijn actievariabelen in oscillatoren en magnetisch moment in langzaam variërende magnetische velden. Dit concept is cruciaal in plasmafysica en hemelmechanica."
                }
            },
            {
                question: {
                    en: "What is the concept of canonical transformations in Hamiltonian mechanics?",
                    es: "¿Cuál es el concepto de transformaciones canónicas en mecánica hamiltoniana?",
                    de: "Was ist das Konzept kanonischer Transformationen in der Hamiltonschen Mechanik?",
                    nl: "Wat is het concept van canonieke transformaties in Hamiltoniaanse mechanica?"
                },
                options: [
                    {
                        en: "Coordinate transformations that preserve the form of Hamilton's equations",
                        es: "Transformaciones de coordenadas que preservan la forma de las ecuaciones de Hamilton",
                        de: "Koordinatentransformationen, die die Form der Hamiltonschen Gleichungen erhalten",
                        nl: "Coördinaattransformaties die de vorm van Hamilton's vergelijkingen behouden"
                    },
                    {
                        en: "Transformations that change the total energy of the system",
                        es: "Transformaciones que cambian la energía total del sistema",
                        de: "Transformationen, die die Gesamtenergie des Systems ändern",
                        nl: "Transformaties die de totale energie van het systeem veranderen"
                    },
                    {
                        en: "Rotations in three-dimensional space only",
                        es: "Solo rotaciones en espacio tridimensional",
                        de: "Nur Rotationen im dreidimensionalen Raum",
                        nl: "Alleen rotaties in drie-dimensionale ruimte"
                    },
                    {
                        en: "Time-dependent coordinate changes",
                        es: "Cambios de coordenadas dependientes del tiempo",
                        de: "Zeitabhängige Koordinatenänderungen",
                        nl: "Tijdafhankelijke coördinaatveranderingen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Canonical transformations are coordinate and momentum transformations (q,p) → (Q,P) that preserve the canonical form of Hamilton's equations. They satisfy certain conditions (often involving generating functions) and include rotations, scalings, and more general symplectic transformations that maintain the geometric structure of phase space.",
                    es: "Las transformaciones canónicas son transformaciones de coordenadas y momento (q,p) → (Q,P) que preservan la forma canónica de las ecuaciones de Hamilton. Satisfacen ciertas condiciones (frecuentemente involucrando funciones generadoras) e incluyen rotaciones, escalamientos y transformaciones simplécticas más generales que mantienen la estructura geométrica del espacio de fase.",
                    de: "Kanonische Transformationen sind Koordinaten- und Impulstransformationen (q,p) → (Q,P), die die kanonische Form der Hamiltonschen Gleichungen erhalten. Sie erfüllen bestimmte Bedingungen (oft mit erzeugenden Funktionen) und umfassen Rotationen, Skalierungen und allgemeinere symplektische Transformationen, die die geometrische Struktur des Phasenraums erhalten.",
                    nl: "Canonieke transformaties zijn coördinaat- en momentumtransformaties (q,p) → (Q,P) die de canonieke vorm van Hamilton's vergelijkingen behouden. Ze voldoen aan bepaalde voorwaarden (vaak met genererende functies) en omvatten rotaties, schalingsoperaties en meer algemene symplectische transformaties die de geometrische structuur van faseruimte behouden."
                }
            },
            {
                question: {
                    en: "What is the physical meaning of Poisson brackets in classical mechanics?",
                    es: "¿Cuál es el significado físico de los corchetes de Poisson en mecánica clásica?",
                    de: "Was ist die physikalische Bedeutung der Poisson-Klammern in der klassischen Mechanik?",
                    nl: "Wat is de fysieke betekenis van Poisson haken in klassieke mechanica?"
                },
                options: [
                    {
                        en: "Measure of how one dynamical variable changes with respect to another; {f,g} = ∂f/∂q ∂g/∂p - ∂f/∂p ∂g/∂q",
                        es: "Medida de cómo una variable dinámica cambia respecto a otra; {f,g} = ∂f/∂q ∂g/∂p - ∂f/∂p ∂g/∂q",
                        de: "Maß dafür, wie sich eine dynamische Variable bezüglich einer anderen ändert; {f,g} = ∂f/∂q ∂g/∂p - ∂f/∂p ∂g/∂q",
                        nl: "Maat voor hoe één dynamische variabele verandert ten opzichte van een andere; {f,g} = ∂f/∂q ∂g/∂p - ∂f/∂p ∂g/∂q"
                    },
                    {
                        en: "Simple algebraic multiplication of two functions",
                        es: "Multiplicación algebraica simple de dos funciones",
                        de: "Einfache algebraische Multiplikation zweier Funktionen",
                        nl: "Eenvoudige algebraïsche vermenigvuldiging van twee functies"
                    },
                    {
                        en: "Time derivative of the Hamiltonian function",
                        es: "Derivada temporal de la función hamiltoniana",
                        de: "Zeitableitung der Hamiltonschen Funktion",
                        nl: "Tijdsafgeleide van de Hamiltoniaanse functie"
                    },
                    {
                        en: "Integration over phase space coordinates",
                        es: "Integración sobre coordenadas del espacio de fase",
                        de: "Integration über Phasenraumkoordinaten",
                        nl: "Integratie over faseruimte coördinaten"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Poisson brackets {f,g} quantify how dynamical variables f and g are correlated in phase space. They determine the time evolution of observables through df/dt = {f,H}, provide the classical analog of quantum commutators, and are preserved under canonical transformations, making them fundamental to the geometric structure of classical mechanics.",
                    es: "Los corchetes de Poisson {f,g} cuantifican cómo las variables dinámicas f y g están correlacionadas en espacio de fase. Determinan la evolución temporal de observables a través de df/dt = {f,H}, proporcionan el análogo clásico de conmutadores cuánticos, y se preservan bajo transformaciones canónicas, haciéndolos fundamentales para la estructura geométrica de mecánica clásica.",
                    de: "Poisson-Klammern {f,g} quantifizieren, wie dynamische Variablen f und g im Phasenraum korreliert sind. Sie bestimmen die zeitliche Evolution von Observablen durch df/dt = {f,H}, liefern das klassische Analogon zu Quantenkommutatoren und bleiben unter kanonischen Transformationen erhalten, was sie fundamental für die geometrische Struktur der klassischen Mechanik macht.",
                    nl: "Poisson haken {f,g} kwantificeren hoe dynamische variabelen f en g gecorreleerd zijn in faseruimte. Ze bepalen de tijdsevolutie van observabelen door df/dt = {f,H}, leveren de klassieke analogie van quantum commutatoren, en worden behouden onder canonieke transformaties, waardoor ze fundamenteel zijn voor de geometrische structuur van klassieke mechanica."
                }
            },
            {
                question: {
                    en: "What is the significance of Kepler's laws in understanding orbital mechanics?",
                    es: "¿Cuál es la significancia de las leyes de Kepler para entender mecánica orbital?",
                    de: "Was ist die Bedeutung der Keplerschen Gesetze für das Verständnis der Bahnmechanik?",
                    nl: "Wat is de betekenis van Kepler's wetten in het begrijpen van baanmechanica?"
                },
                options: [
                    {
                        en: "Describe elliptical orbits, equal areas in equal times, and T² ∝ a³ relationship",
                        es: "Describen órbitas elípticas, áreas iguales en tiempos iguales, y relación T² ∝ a³",
                        de: "Beschreiben elliptische Bahnen, gleiche Flächen in gleichen Zeiten und T² ∝ a³ Beziehung",
                        nl: "Beschrijven elliptische banen, gelijke gebieden in gelijke tijden, en T² ∝ a³ relatie"
                    },
                    {
                        en: "Prove that all orbits are perfectly circular",
                        es: "Prueban que todas las órbitas son perfectamente circulares",
                        de: "Beweisen, dass alle Bahnen perfekt kreisförmig sind",
                        nl: "Bewijzen dat alle banen perfect cirkelvormig zijn"
                    },
                    {
                        en: "Show that orbital speed is always constant",
                        es: "Muestran que la velocidad orbital es siempre constante",
                        de: "Zeigen, dass die Bahngeschwindigkeit immer konstant ist",
                        nl: "Tonen aan dat baansnelheid altijd constant is"
                    },
                    {
                        en: "Apply only to artificial satellites, not planets",
                        es: "Se aplican solo a satélites artificiales, no a planetas",
                        de: "Gelten nur für künstliche Satelliten, nicht für Planeten",
                        nl: "Gelden alleen voor kunstmatige satellieten, niet voor planeten"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Kepler's three laws revolutionized astronomy: (1) Planets orbit in ellipses with the Sun at one focus, (2) A line from Sun to planet sweeps equal areas in equal times (conservation of angular momentum), (3) The square of orbital period is proportional to the cube of semi-major axis (T² ∝ a³). These laws are derivable from Newton's law of universal gravitation.",
                    es: "Las tres leyes de Kepler revolucionaron la astronomía: (1) Los planetas orbitan en elipses con el Sol en un foco, (2) Una línea del Sol al planeta barre áreas iguales en tiempos iguales (conservación de momento angular), (3) El cuadrado del período orbital es proporcional al cubo del semieje mayor (T² ∝ a³). Estas leyes son derivables de la ley de gravitación universal de Newton.",
                    de: "Keplers drei Gesetze revolutionierten die Astronomie: (1) Planeten bewegen sich in Ellipsen mit der Sonne in einem Brennpunkt, (2) Eine Linie von der Sonne zum Planeten überstreicht gleiche Flächen in gleichen Zeiten (Erhaltung des Drehimpulses), (3) Das Quadrat der Umlaufzeit ist proportional zur dritten Potenz der großen Halbachse (T² ∝ a³). Diese Gesetze sind aus Newtons Gravitationsgesetz ableitbar.",
                    nl: "Kepler's drie wetten revolutioneerden astronomie: (1) Planeten bewegen in ellipsen met de Zon in één brandpunt, (2) Een lijn van Zon naar planeet veegt gelijke gebieden in gelijke tijden (behoud van hoekmomentum), (3) Het kwadraat van omlooptijd is evenredig met de derdemacht van halve lange as (T² ∝ a³). Deze wetten zijn afleidbaar uit Newton's wet van universele gravitatie."
                }
            },
            {
                question: {
                    en: "What is the concept of escape velocity and how is it derived?",
                    es: "¿Cuál es el concepto de velocidad de escape y cómo se deriva?",
                    de: "Was ist das Konzept der Fluchtgeschwindigkeit und wie wird sie abgeleitet?",
                    nl: "Wat is het concept van ontsnappingssnelheid en hoe wordt het afgeleid?"
                },
                options: [
                    {
                        en: "Minimum speed needed to escape gravitational field; v_esc = √(2GM/r) from energy conservation",
                        es: "Velocidad mínima necesaria para escapar campo gravitacional; v_esc = √(2GM/r) de conservación de energía",
                        de: "Mindestgeschwindigkeit zum Entkommen aus Gravitationsfeld; v_esc = √(2GM/r) aus Energieerhaltung",
                        nl: "Minimale snelheid nodig om aan gravitatieveld te ontsnappen; v_esc = √(2GM/r) uit energiebehoud"
                    },
                    {
                        en: "Speed needed to orbit at any altitude",
                        es: "Velocidad necesaria para orbitar a cualquier altitud",
                        de: "Geschwindigkeit, die für eine Umlaufbahn in beliebiger Höhe benötigt wird",
                        nl: "Snelheid nodig om te cirkelen op elke hoogte"
                    },
                    {
                        en: "Maximum speed possible in gravitational field",
                        es: "Velocidad máxima posible en campo gravitacional",
                        de: "Maximalgeschwindigkeit im Gravitationsfeld",
                        nl: "Maximum snelheid mogelijk in gravitatieveld"
                    },
                    {
                        en: "Speed that depends on the direction of motion",
                        es: "Velocidad que depende de la dirección del movimiento",
                        de: "Geschwindigkeit, die von der Bewegungsrichtung abhängt",
                        nl: "Snelheid die afhangt van bewegingsrichting"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Escape velocity is the minimum initial speed needed for an object to escape from a gravitational field to infinity. It's derived by setting total mechanical energy to zero: ½mv² - GMm/r = 0, yielding v_esc = √(2GM/r). This speed is independent of the object's mass and depends only on the gravitational source and distance.",
                    es: "La velocidad de escape es la velocidad inicial mínima necesaria para que un objeto escape de un campo gravitacional al infinito. Se deriva estableciendo energía mecánica total a cero: ½mv² - GMm/r = 0, produciendo v_esc = √(2GM/r). Esta velocidad es independiente de la masa del objeto y depende solo de la fuente gravitacional y distancia.",
                    de: "Fluchtgeschwindigkeit ist die minimale Anfangsgeschwindigkeit, die ein Objekt braucht, um aus einem Gravitationsfeld ins Unendliche zu entkommen. Sie wird abgeleitet, indem die gesamte mechanische Energie auf null gesetzt wird: ½mv² - GMm/r = 0, was v_esc = √(2GM/r) ergibt. Diese Geschwindigkeit ist unabhängig von der Objektmasse und hängt nur von der Gravitationsquelle und Entfernung ab.",
                    nl: "Ontsnappingssnelheid is de minimale beginsnelheid nodig voor een object om te ontsnappen uit een gravitatieveld naar oneindigheid. Het wordt afgeleid door totale mechanische energie op nul te zetten: ½mv² - GMm/r = 0, wat v_esc = √(2GM/r) oplevert. Deze snelheid is onafhankelijk van de objectmassa en hangt alleen af van de gravitatiebron en afstand."
                }
            }
        ]
    };

    if (typeof window !== 'undefined' && typeof window.addLevel === 'function') {
        window.addLevel('brain-teaser', 'physics', 1, level1);
    }
})();
