// Physics - Level 4: Electricity and Magnetism
(function() {
    const level4 = {
        name: {
            en: "Electricity and Magnetism",
            es: "Electricidad y Magnetismo",
            de: "Elektrizität und Magnetismus",
            nl: "Elektriciteit en Magnetisme"
        },
        questions: [
            {
                question: {
                    en: "What is Ohm's Law?",
                    es: "¿Qué es la Ley de Ohm?",
                    de: "Was ist das Ohmsche Gesetz?",
                    nl: "Wat is de Wet van Ohm?"
                },
                options: [
                    {
                        en: "V = IR (Voltage equals current times resistance)",
                        es: "V = IR (Voltaje es igual a corriente por resistencia)",
                        de: "V = IR (Spannung gleich Strom mal Widerstand)",
                        nl: "V = IR (Spanning is gelijk aan stroom maal weerstand)"
                    },
                    {
                        en: "P = IV (Power equals current times voltage)",
                        es: "P = IV (Potencia es igual a corriente por voltaje)",
                        de: "P = IV (Leistung gleich Strom mal Spannung)",
                        nl: "P = IV (Vermogen is gelijk aan stroom maal spanning)"
                    },
                    {
                        en: "F = qE (Force equals charge times electric field)",
                        es: "F = qE (Fuerza es igual a carga por campo eléctrico)",
                        de: "F = kE (Kraft gleich Ladung mal elektrisches Feld)",
                        nl: "F = qE (Kracht is gelijk aan lading maal elektrisch veld)"
                    },
                    {
                        en: "Q = CV (Charge equals capacitance times voltage)",
                        es: "Q = CV (Carga es igual a capacitancia por voltaje)",
                        de: "Q = CV (Ladung gleich Kapazität mal Spannung)",
                        nl: "Q = CV (Lading is gelijk aan capaciteit maal spanning)"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Ohm's Law states that the voltage (V) across a conductor is directly proportional to the current (I) flowing through it, with the constant of proportionality being the resistance (R). This fundamental relationship V = IR applies to ohmic materials under constant temperature conditions.",
                    es: "La Ley de Ohm establece que el voltaje (V) a través de un conductor es directamente proporcional a la corriente (I) que fluye a través de él, siendo la constante de proporcionalidad la resistencia (R). Esta relación fundamental V = IR se aplica a materiales óhmicos bajo condiciones de temperatura constante.",
                    de: "Das Ohmsche Gesetz besagt, dass die Spannung (V) über einem Leiter direkt proportional zum durch ihn fließenden Strom (I) ist, wobei die Proportionalitätskonstante der Widerstand (R) ist. Diese grundlegende Beziehung V = IR gilt für ohmsche Materialien unter konstanten Temperaturbedingungen.",
                    nl: "De Wet van Ohm stelt dat de spanning (V) over een geleider direct evenredig is met de stroom (I) die er doorheen vloeit, waarbij de evenredigheidsconstante de weerstand (R) is. Deze fundamentele relatie V = IR geldt voor ohmse materialen onder constante temperatuurcondities."
                }
            },
            {
                question: {
                    en: "What is the difference between AC and DC current?",
                    es: "¿Cuál es la diferencia entre corriente AC y DC?",
                    de: "Was ist der Unterschied zwischen Wechsel- und Gleichstrom?",
                    nl: "Wat is het verschil tussen wisselstroom en gelijkstroom?"
                },
                options: [
                    {
                        en: "AC current changes direction periodically; DC current flows in one direction only",
                        es: "La corriente AC cambia de dirección periódicamente; la corriente DC fluye solo en una dirección",
                        de: "Wechselstrom ändert periodisch die Richtung; Gleichstrom fließt nur in eine Richtung",
                        nl: "Wisselstroom verandert periodiek van richting; gelijkstroom vloeit slechts in één richting"
                    },
                    {
                        en: "AC current is stronger than DC current",
                        es: "La corriente AC es más fuerte que la corriente DC",
                        de: "Wechselstrom ist stärker als Gleichstrom",
                        nl: "Wisselstroom is sterker dan gelijkstroom"
                    },
                    {
                        en: "AC current uses electrons; DC current uses protons",
                        es: "La corriente AC usa electrones; la corriente DC usa protones",
                        de: "Wechselstrom verwendet Elektronen; Gleichstrom verwendet Protonen",
                        nl: "Wisselstroom gebruikt elektronen; gelijkstroom gebruikt protonen"
                    },
                    {
                        en: "AC current requires higher voltage than DC current",
                        es: "La corriente AC requiere mayor voltaje que la corriente DC",
                        de: "Wechselstrom erfordert höhere Spannung als Gleichstrom",
                        nl: "Wisselstroom vereist hogere spanning dan gelijkstroom"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Alternating Current (AC) periodically reverses direction, typically in a sinusoidal pattern, while Direct Current (DC) flows consistently in one direction. AC is used for power transmission due to efficient voltage transformation, while DC is used in batteries and electronic devices.",
                    es: "La Corriente Alterna (AC) invierte periódicamente la dirección, típicamente en un patrón sinusoidal, mientras que la Corriente Directa (DC) fluye consistentemente en una dirección. AC se usa para transmisión de energía debido a la transformación eficiente de voltaje, mientras que DC se usa en baterías y dispositivos electrónicos.",
                    de: "Wechselstrom (AC) kehrt periodisch die Richtung um, typischerweise in einem sinusförmigen Muster, während Gleichstrom (DC) konstant in eine Richtung fließt. AC wird für Energieübertragung verwendet aufgrund effizienter Spannungstransformation, während DC in Batterien und elektronischen Geräten verwendet wird.",
                    nl: "Wisselstroom (AC) keert periodiek van richting om, typisch in een sinusoïdaal patroon, terwijl gelijkstroom (DC) consistent in één richting vloeit. AC wordt gebruikt voor energieoverdracht vanwege efficiënte spanningsomvorming, terwijl DC wordt gebruikt in batterijen en elektronische apparaten."
                }
            },
            {
                question: {
                    en: "What is Coulomb's Law?",
                    es: "¿Qué es la Ley de Coulomb?",
                    de: "Was ist das Coulombsche Gesetz?",
                    nl: "Wat is de Wet van Coulomb?"
                },
                options: [
                    {
                        en: "The force between two point charges is proportional to the product of charges and inversely proportional to the square of distance: F = kq₁q₂/r²",
                        es: "La fuerza entre dos cargas puntuales es proporcional al producto de las cargas e inversamente proporcional al cuadrado de la distancia: F = kq₁q₂/r²",
                        de: "Die Kraft zwischen zwei Punktladungen ist proportional zum Produkt der Ladungen und umgekehrt proportional zum Quadrat des Abstands: F = kq₁q₂/r²",
                        nl: "De kracht tussen twee puntladingen is evenredig met het product van de ladingen en omgekeerd evenredig met het kwadraat van de afstand: F = kq₁q₂/r²"
                    },
                    {
                        en: "Electric current is proportional to voltage and inversely proportional to resistance",
                        es: "La corriente eléctrica es proporcional al voltaje e inversamente proporcional a la resistencia",
                        de: "Elektrischer Strom ist proportional zur Spannung und umgekehrt proportional zum Widerstand",
                        nl: "Elektrische stroom is evenredig met spanning en omgekeerd evenredig met weerstand"
                    },
                    {
                        en: "The magnetic force on a moving charge depends on velocity and magnetic field strength",
                        es: "La fuerza magnética sobre una carga en movimiento depende de la velocidad y la intensidad del campo magnético",
                        de: "Die magnetische Kraft auf eine bewegte Ladung hängt von der Geschwindigkeit und der Magnetfeldstärke ab",
                        nl: "De magnetische kracht op een bewegende lading hangt af van snelheid en magnetische veldsterkte"
                    },
                    {
                        en: "Energy is conserved in all electrical circuits",
                        es: "La energía se conserva en todos los circuitos eléctricos",
                        de: "Energie wird in allen elektrischen Schaltungen erhalten",
                        nl: "Energie wordt behouden in alle elektrische circuits"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Coulomb's Law describes the electrostatic force between two point charges. The force is attractive for opposite charges and repulsive for like charges. The constant k = 8.99×10⁹ N⋅m²/C² in vacuum. This inverse square law is fundamental to understanding electric fields and forces.",
                    es: "La Ley de Coulomb describe la fuerza electrostática entre dos cargas puntuales. La fuerza es atractiva para cargas opuestas y repulsiva para cargas similares. La constante k = 8.99×10⁹ N⋅m²/C² en vacío. Esta ley del cuadrado inverso es fundamental para entender campos y fuerzas eléctricas.",
                    de: "Das Coulombsche Gesetz beschreibt die elektrostatische Kraft zwischen zwei Punktladungen. Die Kraft ist anziehend für entgegengesetzte Ladungen und abstoßend für gleiche Ladungen. Die Konstante k = 8,99×10⁹ N⋅m²/C² im Vakuum. Dieses umgekehrt quadratische Gesetz ist grundlegend für das Verständnis elektrischer Felder und Kräfte.",
                    nl: "De Wet van Coulomb beschrijft de elektrostatische kracht tussen twee puntladingen. De kracht is aantrekkend voor tegengestelde ladingen en afstotend voor gelijke ladingen. De constante k = 8,99×10⁹ N⋅m²/C² in vacuüm. Deze omgekeerd kwadratische wet is fundamenteel voor het begrijpen van elektrische velden en krachten."
                }
            },
            {
                question: {
                    en: "What is electric potential (voltage)?",
                    es: "¿Qué es el potencial eléctrico (voltaje)?",
                    de: "Was ist elektrisches Potenzial (Spannung)?",
                    nl: "Wat is elektrisch potentiaal (spanning)?"
                },
                options: [
                    {
                        en: "The amount of electrical potential energy per unit charge at a point in an electric field",
                        es: "La cantidad de energía potencial eléctrica por unidad de carga en un punto en un campo eléctrico",
                        de: "Die Menge elektrischer potentieller Energie pro Ladungseinheit an einem Punkt im elektrischen Feld",
                        nl: "De hoeveelheid elektrische potentiële energie per ladingseenheid op een punt in een elektrisch veld"
                    },
                    {
                        en: "The rate of flow of electric charge through a conductor",
                        es: "La velocidad de flujo de carga eléctrica a través de un conductor",
                        de: "Die Fließgeschwindigkeit elektrischer Ladung durch einen Leiter",
                        nl: "De snelheid van stroom van elektrische lading door een geleider"
                    },
                    {
                        en: "The opposition to electric current flow in a material",
                        es: "La oposición al flujo de corriente eléctrica en un material",
                        de: "Der Widerstand gegen elektrischen Stromfluss in einem Material",
                        nl: "De weerstand tegen elektrische stroomstroom in een materiaal"
                    },
                    {
                        en: "The total amount of electric charge stored in a capacitor",
                        es: "La cantidad total de carga eléctrica almacenada en un capacitor",
                        de: "Die Gesamtmenge elektrischer Ladung, die in einem Kondensator gespeichert ist",
                        nl: "De totale hoeveelheid elektrische lading opgeslagen in een condensator"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Electric potential (voltage) is the electric potential energy per unit charge. It represents the work done per unit charge to move a charge from infinity (or a reference point) to that location. Measured in volts (V), it drives electric current flow from high to low potential.",
                    es: "El potencial eléctrico (voltaje) es la energía potencial eléctrica por unidad de carga. Representa el trabajo realizado por unidad de carga para mover una carga desde el infinito (o un punto de referencia) hasta esa ubicación. Medido en voltios (V), impulsa el flujo de corriente eléctrica de alto a bajo potencial.",
                    de: "Elektrisches Potenzial (Spannung) ist die elektrische potenzielle Energie pro Ladungseinheit. Es stellt die Arbeit pro Ladungseinheit dar, um eine Ladung vom Unendlichen (oder einem Referenzpunkt) zu diesem Ort zu bewegen. Gemessen in Volt (V), treibt es elektrischen Stromfluss von hohem zu niedrigem Potenzial an.",
                    nl: "Elektrisch potentiaal (spanning) is de elektrische potentiële energie per ladingseenheid. Het vertegenwoordigt het werk verricht per ladingseenheid om een lading van oneindig (of een referentiepunt) naar die locatie te verplaatsen. Gemeten in volt (V), drijft het elektrische stroomstroom aan van hoog naar laag potentiaal."
                }
            },
            {
                question: {
                    en: "What is the difference between series and parallel circuits?",
                    es: "¿Cuál es la diferencia entre circuitos en serie y en paralelo?",
                    de: "Was ist der Unterschied zwischen Serien- und Parallelschaltungen?",
                    nl: "Wat is het verschil tussen serie- en parallelschakelingen?"
                },
                options: [
                    {
                        en: "In series circuits, current is the same through all components; in parallel circuits, voltage is the same across all components",
                        es: "En circuitos en serie, la corriente es la misma a través de todos los componentes; en circuitos en paralelo, el voltaje es el mismo en todos los componentes",
                        de: "In Serienschaltungen ist der Strom durch alle Komponenten gleich; in Parallelschaltungen ist die Spannung über alle Komponenten gleich",
                        nl: "In serieschakelingen is de stroom hetzelfde door alle componenten; in parallelschakelingen is de spanning hetzelfde over alle componenten"
                    },
                    {
                        en: "Series circuits use AC current; parallel circuits use DC current",
                        es: "Los circuitos en serie usan corriente AC; los circuitos en paralelo usan corriente DC",
                        de: "Serienschaltungen verwenden Wechselstrom; Parallelschaltungen verwenden Gleichstrom",
                        nl: "Serieschakelingen gebruiken wisselstroom; parallelschakelingen gebruiken gelijkstroom"
                    },
                    {
                        en: "Series circuits have higher voltage; parallel circuits have higher current",
                        es: "Los circuitos en serie tienen mayor voltaje; los circuitos en paralelo tienen mayor corriente",
                        de: "Serienschaltungen haben höhere Spannung; Parallelschaltungen haben höheren Strom",
                        nl: "Serieschakelingen hebben hogere spanning; parallelschakelingen hebben hogere stroom"
                    },
                    {
                        en: "There is no significant difference between the two types",
                        es: "No hay diferencia significativa entre los dos tipos",
                        de: "Es gibt keinen signifikanten Unterschied zwischen den beiden Typen",
                        nl: "Er is geen significant verschil tussen de twee types"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "In series circuits, components are connected end-to-end, so the same current flows through each component, but voltage divides among them. In parallel circuits, components share common connection points, so voltage across each component is the same, but current divides among the branches.",
                    es: "En circuitos en serie, los componentes están conectados extremo a extremo, por lo que la misma corriente fluye a través de cada componente, pero el voltaje se divide entre ellos. En circuitos en paralelo, los componentes comparten puntos de conexión comunes, por lo que el voltaje a través de cada componente es el mismo, pero la corriente se divide entre las ramas.",
                    de: "In Serienschaltungen sind Komponenten Ende-zu-Ende verbunden, sodass derselbe Strom durch jede Komponente fließt, aber die Spannung sich unter ihnen aufteilt. In Parallelschaltungen teilen sich Komponenten gemeinsame Verbindungspunkte, sodass die Spannung über jede Komponente gleich ist, aber der Strom sich unter den Zweigen aufteilt.",
                    nl: "In serieschakelingen zijn componenten eind-aan-eind verbonden, dus dezelfde stroom vloeit door elke component, maar spanning verdeelt zich onder hen. In parallelschakelingen delen componenten gemeenschappelijke verbindingspunten, dus spanning over elke component is hetzelfde, maar stroom verdeelt zich onder de takken."
                }
            },
            {
                question: {
                    en: "What is electromagnetic induction?",
                    es: "¿Qué es la inducción electromagnética?",
                    de: "Was ist elektromagnetische Induktion?",
                    nl: "Wat is elektromagnetische inductie?"
                },
                options: [
                    {
                        en: "The generation of electric current by changing magnetic fields, as described by Faraday's Law",
                        es: "La generación de corriente eléctrica por campos magnéticos cambiantes, como describe la Ley de Faraday",
                        de: "Die Erzeugung elektrischen Stroms durch sich ändernde Magnetfelder, wie durch das Faradaysche Gesetz beschrieben",
                        nl: "De opwekking van elektrische stroom door veranderende magnetische velden, zoals beschreven door de Wet van Faraday"
                    },
                    {
                        en: "The attraction between electric charges and magnetic poles",
                        es: "La atracción entre cargas eléctricas y polos magnéticos",
                        de: "Die Anziehung zwischen elektrischen Ladungen und magnetischen Polen",
                        nl: "De aantrekking tussen elektrische ladingen en magnetische polen"
                    },
                    {
                        en: "The conversion of electrical energy into mechanical energy",
                        es: "La conversión de energía eléctrica en energía mecánica",
                        de: "Die Umwandlung elektrischer Energie in mechanische Energie",
                        nl: "De omzetting van elektrische energie in mechanische energie"
                    },
                    {
                        en: "The process of magnetizing ferromagnetic materials with electric current",
                        es: "El proceso de magnetizar materiales ferromagnéticos con corriente eléctrica",
                        de: "Der Prozess der Magnetisierung ferromagnetischer Materialien mit elektrischem Strom",
                        nl: "Het proces van magnetiseren van ferromagnetische materialen met elektrische stroom"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Electromagnetic induction, discovered by Faraday, occurs when a changing magnetic field generates an electric field and current. The induced EMF is proportional to the rate of change of magnetic flux: ε = -dΦ/dt. This principle underlies generators, transformers, and many electrical devices.",
                    es: "La inducción electromagnética, descubierta por Faraday, ocurre cuando un campo magnético cambiante genera un campo eléctrico y corriente. La FEM inducida es proporcional a la tasa de cambio del flujo magnético: ε = -dΦ/dt. Este principio subyace a generadores, transformadores y muchos dispositivos eléctricos.",
                    de: "Elektromagnetische Induktion, von Faraday entdeckt, tritt auf, wenn ein sich änderndes Magnetfeld ein elektrisches Feld und Strom erzeugt. Die induzierte EMK ist proportional zur Änderungsrate des magnetischen Flusses: ε = -dΦ/dt. Dieses Prinzip liegt Generatoren, Transformatoren und vielen elektrischen Geräten zugrunde.",
                    nl: "Elektromagnetische inductie, ontdekt door Faraday, treedt op wanneer een veranderend magnetisch veld een elektrisch veld en stroom genereert. De geïnduceerde EMF is evenredig met de veranderingssnelheid van magnetische flux: ε = -dΦ/dt. Dit principe ligt ten grondslag aan generatoren, transformatoren en veel elektrische apparaten."
                }
            },
            {
                question: {
                    en: "What is the right-hand rule in electromagnetism?",
                    es: "¿Qué es la regla de la mano derecha en electromagnetismo?",
                    de: "Was ist die Rechte-Hand-Regel im Elektromagnetismus?",
                    nl: "Wat is de rechterhandregel in elektromagnetisme?"
                },
                options: [
                    {
                        en: "A method to determine the direction of magnetic field around a current-carrying wire or the force on a moving charge",
                        es: "Un método para determinar la dirección del campo magnético alrededor de un alambre que lleva corriente o la fuerza sobre una carga en movimiento",
                        de: "Eine Methode zur Bestimmung der Richtung des Magnetfelds um einen stromdurchflossenen Draht oder der Kraft auf eine bewegte Ladung",
                        nl: "Een methode om de richting van het magnetisch veld rond een stroomvoerende draad of de kracht op een bewegende lading te bepalen"
                    },
                    {
                        en: "A safety rule for handling electrical equipment with the right hand only",
                        es: "Una regla de seguridad para manipular equipo eléctrico solo con la mano derecha",
                        de: "Eine Sicherheitsregel für den Umgang mit elektrischen Geräten nur mit der rechten Hand",
                        nl: "Een veiligheidsregel voor het hanteren van elektrische apparatuur alleen met de rechterhand"
                    },
                    {
                        en: "The correct way to measure voltage using a voltmeter",
                        es: "La forma correcta de medir voltaje usando un voltímetro",
                        de: "Die korrekte Art, Spannung mit einem Voltmeter zu messen",
                        nl: "De juiste manier om spanning te meten met een voltmeter"
                    },
                    {
                        en: "A rule for the proper installation of electrical circuits",
                        es: "Una regla para la instalación adecuada de circuitos eléctricos",
                        de: "Eine Regel für die ordnungsgemäße Installation elektrischer Schaltungen",
                        nl: "Een regel voor de juiste installatie van elektrische circuits"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The right-hand rule helps determine directions in electromagnetic phenomena. For current direction: thumb points along current, fingers curl in direction of magnetic field. For force on moving charges: fingers point along velocity, bend toward magnetic field, thumb points along force direction.",
                    es: "La regla de la mano derecha ayuda a determinar direcciones en fenómenos electromagnéticos. Para la dirección de corriente: el pulgar apunta a lo largo de la corriente, los dedos se curvan en la dirección del campo magnético. Para la fuerza sobre cargas en movimiento: los dedos apuntan a lo largo de la velocidad, se doblan hacia el campo magnético, el pulgar apunta a lo largo de la dirección de la fuerza.",
                    de: "Die Rechte-Hand-Regel hilft bei der Bestimmung von Richtungen in elektromagnetischen Phänomenen. Für Stromrichtung: Daumen zeigt entlang des Stroms, Finger krümmen sich in Richtung des Magnetfelds. Für Kraft auf bewegte Ladungen: Finger zeigen entlang der Geschwindigkeit, biegen sich zum Magnetfeld, Daumen zeigt entlang der Kraftrichtung.",
                    nl: "De rechterhandregel helpt richtingen in elektromagnetische verschijnselen te bepalen. Voor stroomrichting: duim wijst langs stroom, vingers krommen in richting van magnetisch veld. Voor kracht op bewegende ladingen: vingers wijzen langs snelheid, buigen naar magnetisch veld, duim wijst langs krachtrichting."
                }
            },
            {
                question: {
                    en: "What is capacitance?",
                    es: "¿Qué es la capacitancia?",
                    de: "Was ist Kapazität?",
                    nl: "Wat is capaciteit?"
                },
                options: [
                    {
                        en: "The ability of a system to store electric charge, measured as charge per unit voltage: C = Q/V",
                        es: "La capacidad de un sistema para almacenar carga eléctrica, medida como carga por unidad de voltaje: C = Q/V",
                        de: "Die Fähigkeit eines Systems, elektrische Ladung zu speichern, gemessen als Ladung pro Spannungseinheit: C = Q/V",
                        nl: "Het vermogen van een systeem om elektrische lading op te slaan, gemeten als lading per spanningseenheid: C = Q/V"
                    },
                    {
                        en: "The opposition to changes in electric current",
                        es: "La oposición a cambios en la corriente eléctrica",
                        de: "Der Widerstand gegen Änderungen im elektrischen Strom",
                        nl: "De weerstand tegen veranderingen in elektrische stroom"
                    },
                    {
                        en: "The rate of electric charge flow through a conductor",
                        es: "La velocidad de flujo de carga eléctrica a través de un conductor",
                        de: "Die Rate des elektrischen Ladungsflusses durch einen Leiter",
                        nl: "De snelheid van elektrische ladingsstroom door een geleider"
                    },
                    {
                        en: "The maximum current that can flow through a circuit",
                        es: "La corriente máxima que puede fluir a través de un circuito",
                        de: "Der maximale Strom, der durch einen Schaltkreis fließen kann",
                        nl: "De maximale stroom die door een circuit kan vloeien"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Capacitance is the ability to store electric charge. A capacitor with capacitance C stores charge Q when voltage V is applied: Q = CV. Capacitance depends on the geometry of conductors and the dielectric material between them. Measured in farads (F).",
                    es: "La capacitancia es la capacidad de almacenar carga eléctrica. Un capacitor con capacitancia C almacena carga Q cuando se aplica voltaje V: Q = CV. La capacitancia depende de la geometría de los conductores y el material dieléctrico entre ellos. Medida en faradios (F).",
                    de: "Kapazität ist die Fähigkeit, elektrische Ladung zu speichern. Ein Kondensator mit Kapazität C speichert Ladung Q, wenn Spannung V angelegt wird: Q = CV. Kapazität hängt von der Geometrie der Leiter und dem dielektrischen Material zwischen ihnen ab. Gemessen in Farad (F).",
                    nl: "Capaciteit is het vermogen om elektrische lading op te slaan. Een condensator met capaciteit C slaat lading Q op wanneer spanning V wordt toegepast: Q = CV. Capaciteit hangt af van de geometrie van geleiders en het diëlektrische materiaal ertussen. Gemeten in farad (F)."
                }
            },
            {
                question: {
                    en: "What is the difference between conductors, insulators, and semiconductors?",
                    es: "¿Cuál es la diferencia entre conductores, aislantes y semiconductores?",
                    de: "Was ist der Unterschied zwischen Leitern, Isolatoren und Halbleitern?",
                    nl: "Wat is het verschil tussen geleiders, isolatoren en halfgeleiders?"
                },
                options: [
                    {
                        en: "Conductors have free electrons that move easily; insulators resist electron flow; semiconductors have controllable conductivity",
                        es: "Los conductores tienen electrones libres que se mueven fácilmente; los aislantes resisten el flujo de electrones; los semiconductores tienen conductividad controlable",
                        de: "Leiter haben freie Elektronen, die sich leicht bewegen; Isolatoren widersetzen sich dem Elektronenfluss; Halbleiter haben kontrollierbare Leitfähigkeit",
                        nl: "Geleiders hebben vrije elektronen die gemakkelijk bewegen; isolatoren weerstaan elektronenstroom; halfgeleiders hebben controleerbare geleidbaarheid"
                    },
                    {
                        en: "Conductors work only with AC current; insulators work only with DC current; semiconductors work with both",
                        es: "Los conductores funcionan solo con corriente AC; los aislantes funcionan solo con corriente DC; los semiconductores funcionan con ambos",
                        de: "Leiter arbeiten nur mit Wechselstrom; Isolatoren arbeiten nur mit Gleichstrom; Halbleiter arbeiten mit beiden",
                        nl: "Geleiders werken alleen met wisselstroom; isolatoren werken alleen met gelijkstroom; halfgeleiders werken met beide"
                    },
                    {
                        en: "Conductors are always metals; insulators are always nonmetals; semiconductors are always compounds",
                        es: "Los conductores son siempre metales; los aislantes son siempre no metales; los semiconductores son siempre compuestos",
                        de: "Leiter sind immer Metalle; Isolatoren sind immer Nichtmetalle; Halbleiter sind immer Verbindungen",
                        nl: "Geleiders zijn altijd metalen; isolatoren zijn altijd niet-metalen; halfgeleiders zijn altijd verbindingen"
                    },
                    {
                        en: "There is no significant difference in their electrical properties",
                        es: "No hay diferencia significativa en sus propiedades eléctricas",
                        de: "Es gibt keinen signifikanten Unterschied in ihren elektrischen Eigenschaften",
                        nl: "Er is geen significant verschil in hun elektrische eigenschappen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Conductors (like copper) have many free electrons that move easily, allowing electric current to flow freely. Insulators (like rubber) have tightly bound electrons that resist current flow. Semiconductors (like silicon) have intermediate properties that can be controlled by temperature, doping, or electric fields.",
                    es: "Los conductores (como el cobre) tienen muchos electrones libres que se mueven fácilmente, permitiendo que la corriente eléctrica fluya libremente. Los aislantes (como el caucho) tienen electrones fuertemente unidos que resisten el flujo de corriente. Los semiconductores (como el silicio) tienen propiedades intermedias que pueden controlarse por temperatura, dopaje o campos eléctricos.",
                    de: "Leiter (wie Kupfer) haben viele freie Elektronen, die sich leicht bewegen und elektrischen Strom frei fließen lassen. Isolatoren (wie Gummi) haben fest gebundene Elektronen, die dem Stromfluss widerstehen. Halbleiter (wie Silizium) haben Zwischeneigenschaften, die durch Temperatur, Dotierung oder elektrische Felder kontrolliert werden können.",
                    nl: "Geleiders (zoals koper) hebben veel vrije elektronen die gemakkelijk bewegen, waardoor elektrische stroom vrij kan vloeien. Isolatoren (zoals rubber) hebben strak gebonden elektronen die stroomstroom weerstaan. Halfgeleiders (zoals silicium) hebben tussenliggende eigenschappen die kunnen worden gecontroleerd door temperatuur, dotering of elektrische velden."
                }
            },
            {
                question: {
                    en: "What is Lenz's Law?",
                    es: "¿Qué es la Ley de Lenz?",
                    de: "Was ist das Lenzsche Gesetz?",
                    nl: "Wat is de Wet van Lenz?"
                },
                options: [
                    {
                        en: "The direction of induced current opposes the change in magnetic flux that produced it",
                        es: "La dirección de la corriente inducida se opone al cambio en el flujo magnético que la produjo",
                        de: "Die Richtung des induzierten Stroms widersetzt sich der Änderung des magnetischen Flusses, die ihn erzeugte",
                        nl: "De richting van geïnduceerde stroom weerstaat de verandering in magnetische flux die het veroorzaakte"
                    },
                    {
                        en: "The force between parallel current-carrying wires is proportional to their currents",
                        es: "La fuerza entre alambres paralelos que llevan corriente es proporcional a sus corrientes",
                        de: "Die Kraft zwischen parallelen stromdurchflossenen Drähten ist proportional zu ihren Strömen",
                        nl: "De kracht tussen parallelle stroomvoerende draden is evenredig met hun stromen"
                    },
                    {
                        en: "The magnetic field strength decreases with distance from the source",
                        es: "La intensidad del campo magnético disminuye con la distancia de la fuente",
                        de: "Die Magnetfeldstärke nimmt mit der Entfernung zur Quelle ab",
                        nl: "De magnetische veldsterkte neemt af met afstand van de bron"
                    },
                    {
                        en: "Electric charges naturally separate in conducting materials",
                        es: "Las cargas eléctricas se separan naturalmente en materiales conductores",
                        de: "Elektrische Ladungen trennen sich natürlich in leitenden Materialien",
                        nl: "Elektrische ladingen scheiden natuurlijk in geleidende materialen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Lenz's Law states that the direction of induced current (or EMF) is such that it opposes the change that caused it. This is a consequence of conservation of energy - the induced effects must oppose the change to prevent perpetual motion. It explains the negative sign in Faraday's law: ε = -dΦ/dt.",
                    es: "La Ley de Lenz establece que la dirección de la corriente inducida (o FEM) es tal que se opone al cambio que la causó. Esto es una consecuencia de la conservación de energía - los efectos inducidos deben oponerse al cambio para prevenir el movimiento perpetuo. Explica el signo negativo en la ley de Faraday: ε = -dΦ/dt.",
                    de: "Das Lenzsche Gesetz besagt, dass die Richtung des induzierten Stroms (oder der EMK) so ist, dass sie sich der Änderung widersetzt, die sie verursachte. Dies ist eine Folge der Energieerhaltung - die induzierten Effekte müssen sich der Änderung widersetzen, um Perpetuum Mobile zu verhindern. Es erklärt das negative Vorzeichen im Faradayschen Gesetz: ε = -dΦ/dt.",
                    nl: "De Wet van Lenz stelt dat de richting van geïnduceerde stroom (of EMF) zodanig is dat het de verandering die het veroorzaakte tegenwerkt. Dit is een gevolg van energiebehoud - de geïnduceerde effecten moeten de verandering tegengaan om perpetuum mobile te voorkomen. Het verklaart het negatieve teken in Faraday's wet: ε = -dΦ/dt."
                }
            },
            {
                question: {
                    en: "What is the difference between electric field and magnetic field?",
                    es: "¿Cuál es la diferencia entre campo eléctrico y campo magnético?",
                    de: "Was ist der Unterschied zwischen elektrischem und magnetischem Feld?",
                    nl: "Wat is het verschil tussen elektrisch en magnetisch veld?"
                },
                options: [
                    {
                        en: "Electric fields exert forces on all charges; magnetic fields only affect moving charges",
                        es: "Los campos eléctricos ejercen fuerzas sobre todas las cargas; los campos magnéticos solo afectan cargas en movimiento",
                        de: "Elektrische Felder üben Kräfte auf alle Ladungen aus; Magnetfelder beeinflussen nur bewegte Ladungen",
                        nl: "Elektrische velden oefenen krachten uit op alle ladingen; magnetische velden beïnvloeden alleen bewegende ladingen"
                    },
                    {
                        en: "Electric fields are stronger than magnetic fields",
                        es: "Los campos eléctricos son más fuertes que los campos magnéticos",
                        de: "Elektrische Felder sind stärker als Magnetfelder",
                        nl: "Elektrische velden zijn sterker dan magnetische velden"
                    },
                    {
                        en: "Electric fields exist only around positive charges; magnetic fields exist around negative charges",
                        es: "Los campos eléctricos existen solo alrededor de cargas positivas; los campos magnéticos existen alrededor de cargas negativas",
                        de: "Elektrische Felder existieren nur um positive Ladungen; Magnetfelder existieren um negative Ladungen",
                        nl: "Elektrische velden bestaan alleen rond positieve ladingen; magnetische velden bestaan rond negatieve ladingen"
                    },
                    {
                        en: "There is no fundamental difference between electric and magnetic fields",
                        es: "No hay diferencia fundamental entre campos eléctricos y magnéticos",
                        de: "Es gibt keinen grundlegenden Unterschied zwischen elektrischen und magnetischen Feldern",
                        nl: "Er is geen fundamenteel verschil tussen elektrische en magnetische velden"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Electric fields are created by electric charges and exert forces on any charge (stationary or moving). Magnetic fields are created by moving charges or current and only exert forces on moving charges. Both fields can influence each other, forming electromagnetic fields as described by Maxwell's equations.",
                    es: "Los campos eléctricos son creados por cargas eléctricas y ejercen fuerzas sobre cualquier carga (estacionaria o en movimiento). Los campos magnéticos son creados por cargas en movimiento o corriente y solo ejercen fuerzas sobre cargas en movimiento. Ambos campos pueden influenciarse mutuamente, formando campos electromagnéticos como describe las ecuaciones de Maxwell.",
                    de: "Elektrische Felder werden von elektrischen Ladungen erzeugt und üben Kräfte auf jede Ladung aus (stationär oder bewegt). Magnetfelder werden von bewegten Ladungen oder Strom erzeugt und üben nur Kräfte auf bewegte Ladungen aus. Beide Felder können sich gegenseitig beeinflussen und elektromagnetische Felder bilden, wie von Maxwells Gleichungen beschrieben.",
                    nl: "Elektrische velden worden gecreëerd door elektrische ladingen en oefenen krachten uit op elke lading (stationair of bewegend). Magnetische velden worden gecreëerd door bewegende ladingen of stroom en oefenen alleen krachten uit op bewegende ladingen. Beide velden kunnen elkaar beïnvloeden, elektromagnetische velden vormend zoals beschreven door Maxwell's vergelijkingen."
                }
            },
            {
                question: {
                    en: "What is electrical power and how is it calculated?",
                    es: "¿Qué es la potencia eléctrica y cómo se calcula?",
                    de: "Was ist elektrische Leistung und wie wird sie berechnet?",
                    nl: "Wat is elektrisch vermogen en hoe wordt het berekend?"
                },
                options: [
                    {
                        en: "The rate of electrical energy consumption, calculated as P = VI = I²R = V²/R",
                        es: "La velocidad de consumo de energía eléctrica, calculada como P = VI = I²R = V²/R",
                        de: "Die Rate des elektrischen Energieverbrauchs, berechnet als P = VI = I²R = V²/R",
                        nl: "De snelheid van elektrisch energieverbruik, berekend als P = VI = I²R = V²/R"
                    },
                    {
                        en: "The total amount of electric charge stored in a circuit",
                        es: "La cantidad total de carga eléctrica almacenada en un circuito",
                        de: "Die Gesamtmenge elektrischer Ladung, die in einem Schaltkreis gespeichert ist",
                        nl: "De totale hoeveelheid elektrische lading opgeslagen in een circuit"
                    },
                    {
                        en: "The opposition to electric current flow in a conductor",
                        es: "La oposición al flujo de corriente eléctrica en un conductor",
                        de: "Der Widerstand gegen elektrischen Stromfluss in einem Leiter",
                        nl: "De weerstand tegen elektrische stroomstroom in een geleider"
                    },
                    {
                        en: "The maximum voltage that can be applied to a circuit",
                        es: "El voltaje máximo que se puede aplicar a un circuito",
                        de: "Die maximale Spannung, die an einen Schaltkreis angelegt werden kann",
                        nl: "De maximale spanning die op een circuit kan worden toegepast"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Electrical power is the rate at which electrical energy is consumed or produced. It's measured in watts (W) and calculated using P = VI (power = voltage × current), P = I²R, or P = V²/R. Understanding power is crucial for electrical safety and energy efficiency calculations.",
                    es: "La potencia eléctrica es la velocidad a la cual se consume o produce energía eléctrica. Se mide en vatios (W) y se calcula usando P = VI (potencia = voltaje × corriente), P = I²R, o P = V²/R. Entender la potencia es crucial para la seguridad eléctrica y cálculos de eficiencia energética.",
                    de: "Elektrische Leistung ist die Rate, mit der elektrische Energie verbraucht oder erzeugt wird. Sie wird in Watt (W) gemessen und mit P = VI (Leistung = Spannung × Strom), P = I²R oder P = V²/R berechnet. Das Verständnis von Leistung ist entscheidend für elektrische Sicherheit und Energieeffizienzberechnungen.",
                    nl: "Elektrisch vermogen is de snelheid waarmee elektrische energie wordt verbruikt of geproduceerd. Het wordt gemeten in watt (W) en berekend met P = VI (vermogen = spanning × stroom), P = I²R, of P = V²/R. Het begrijpen van vermogen is cruciaal voor elektrische veiligheid en energie-efficiëntieberekeningen."
                }
            },
            {
                question: {
                    en: "What is the function of a transformer?",
                    es: "¿Cuál es la función de un transformador?",
                    de: "Was ist die Funktion eines Transformators?",
                    nl: "Wat is de functie van een transformator?"
                },
                options: [
                    {
                        en: "To change AC voltage levels using electromagnetic induction between coupled coils",
                        es: "Cambiar los niveles de voltaje AC usando inducción electromagnética entre bobinas acopladas",
                        de: "AC-Spannungspegel mittels elektromagnetischer Induktion zwischen gekoppelten Spulen zu ändern",
                        nl: "Om AC-spanningsniveaus te veranderen met behulp van elektromagnetische inductie tussen gekoppelde spoelen"
                    },
                    {
                        en: "To convert AC current to DC current",
                        es: "Convertir corriente AC a corriente DC",
                        de: "Wechselstrom in Gleichstrom umzuwandeln",
                        nl: "Om wisselstroom om te zetten naar gelijkstroom"
                    },
                    {
                        en: "To store electrical energy for later use",
                        es: "Almacenar energía eléctrica para uso posterior",
                        de: "Elektrische Energie für späteren Gebrauch zu speichern",
                        nl: "Om elektrische energie op te slaan voor later gebruik"
                    },
                    {
                        en: "To generate electrical energy from mechanical motion",
                        es: "Generar energía eléctrica a partir del movimiento mecánico",
                        de: "Elektrische Energie aus mechanischer Bewegung zu erzeugen",
                        nl: "Om elektrische energie op te wekken uit mechanische beweging"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "A transformer uses electromagnetic induction to change AC voltage levels. It consists of primary and secondary coils wound around a common magnetic core. The voltage ratio equals the turns ratio: V₂/V₁ = N₂/N₁. Transformers enable efficient long-distance power transmission.",
                    es: "Un transformador usa inducción electromagnética para cambiar los niveles de voltaje AC. Consiste en bobinas primarias y secundarias enrolladas alrededor de un núcleo magnético común. La relación de voltaje es igual a la relación de vueltas: V₂/V₁ = N₂/N₁. Los transformadores permiten transmisión eficiente de energía a larga distancia.",
                    de: "Ein Transformator verwendet elektromagnetische Induktion, um AC-Spannungspegel zu ändern. Er besteht aus Primär- und Sekundärspulen, die um einen gemeinsamen Magnetkern gewickelt sind. Das Spannungsverhältnis entspricht dem Windungsverhältnis: V₂/V₁ = N₂/N₁. Transformatoren ermöglichen effiziente Fernübertragung von Energie.",
                    nl: "Een transformator gebruikt elektromagnetische inductie om AC-spanningsniveaus te veranderen. Het bestaat uit primaire en secundaire spoelen gewikkeld rond een gemeenschappelijke magnetische kern. De spanningsverhouding is gelijk aan de windingsverhouding: V₂/V₁ = N₂/N₁. Transformatoren maken efficiënte langeafstands-energieoverdracht mogelijk."
                }
            },
            {
                question: {
                    en: "What causes electrical resistance in materials?",
                    es: "¿Qué causa la resistencia eléctrica en los materiales?",
                    de: "Was verursacht elektrischen Widerstand in Materialien?",
                    nl: "Wat veroorzaakt elektrische weerstand in materialen?"
                },
                options: [
                    {
                        en: "Collisions between moving electrons and atoms/defects in the material structure",
                        es: "Colisiones entre electrones en movimiento y átomos/defectos en la estructura del material",
                        de: "Kollisionen zwischen sich bewegenden Elektronen und Atomen/Defekten in der Materialstruktur",
                        nl: "Botsingen tussen bewegende elektronen en atomen/defecten in de materiaalstructuur"
                    },
                    {
                        en: "The natural repulsion between positive and negative charges",
                        es: "La repulsión natural entre cargas positivas y negativas",
                        de: "Die natürliche Abstoßung zwischen positiven und negativen Ladungen",
                        nl: "De natuurlijke afstoting tussen positieve en negatieve ladingen"
                    },
                    {
                        en: "The magnetic field generated by electric current",
                        es: "El campo magnético generado por la corriente eléctrica",
                        de: "Das von elektrischem Strom erzeugte Magnetfeld",
                        nl: "Het magnetisch veld gegenereerd door elektrische stroom"
                    },
                    {
                        en: "The gravitational force acting on electrons",
                        es: "La fuerza gravitacional que actúa sobre los electrones",
                        de: "Die Gravitationskraft, die auf Elektronen wirkt",
                        nl: "De zwaartekracht die inwerkt op elektronen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Electrical resistance arises from collisions between moving electrons and obstacles in the material - atoms, impurities, grain boundaries, and lattice vibrations (phonons). These collisions impede electron flow, converting kinetic energy to heat. Temperature increases resistance in most materials by increasing atomic vibrations.",
                    es: "La resistencia eléctrica surge de las colisiones entre electrones en movimiento y obstáculos en el material - átomos, impurezas, límites de grano, y vibraciones de la red (fonones). Estas colisiones impiden el flujo de electrones, convirtiendo energía cinética en calor. La temperatura aumenta la resistencia en la mayoría de materiales al incrementar las vibraciones atómicas.",
                    de: "Elektrischer Widerstand entsteht durch Kollisionen zwischen sich bewegenden Elektronen und Hindernissen im Material - Atome, Verunreinigungen, Korngrenzen und Gitterschwingungen (Phononen). Diese Kollisionen behindern den Elektronenfluss und wandeln kinetische Energie in Wärme um. Temperatur erhöht den Widerstand in den meisten Materialien durch verstärkte Atomschwingungen.",
                    nl: "Elektrische weerstand ontstaat door botsingen tussen bewegende elektronen en obstakels in het materiaal - atomen, onzuiverheden, korrelgrenzen, en roostervibraties (fononen). Deze botsingen belemmeren elektronenstroom, waardoor kinetische energie wordt omgezet in warmte. Temperatuur verhoogt weerstand in de meeste materialen door verhoogde atomvibraties."
                }
            },
            {
                question: {
                    en: "What is an electric motor and how does it work?",
                    es: "¿Qué es un motor eléctrico y cómo funciona?",
                    de: "Was ist ein Elektromotor und wie funktioniert er?",
                    nl: "Wat is een elektrische motor en hoe werkt deze?"
                },
                options: [
                    {
                        en: "A device that converts electrical energy to mechanical energy using magnetic forces on current-carrying conductors",
                        es: "Un dispositivo que convierte energía eléctrica en energía mecánica usando fuerzas magnéticas sobre conductores que llevan corriente",
                        de: "Ein Gerät, das elektrische Energie mittels magnetischer Kräfte auf stromdurchflossene Leiter in mechanische Energie umwandelt",
                        nl: "Een apparaat dat elektrische energie omzet in mechanische energie met behulp van magnetische krachten op stroomvoerende geleiders"
                    },
                    {
                        en: "A device that generates electricity from rotating magnetic fields",
                        es: "Un dispositivo que genera electricidad a partir de campos magnéticos rotatorios",
                        de: "Ein Gerät, das Elektrizität aus rotierenden Magnetfeldern erzeugt",
                        nl: "Een apparaat dat elektriciteit opwekt uit roterende magnetische velden"
                    },
                    {
                        en: "A transformer that changes voltage levels in AC circuits",
                        es: "Un transformador que cambia los niveles de voltaje en circuitos AC",
                        de: "Ein Transformator, der Spannungspegel in AC-Schaltungen ändert",
                        nl: "Een transformator die spanningsniveaus in AC-circuits verandert"
                    },
                    {
                        en: "A capacitor that stores electrical energy for high-power applications",
                        es: "Un capacitor que almacena energía eléctrica para aplicaciones de alta potencia",
                        de: "Ein Kondensator, der elektrische Energie für Hochleistungsanwendungen speichert",
                        nl: "Een condensator die elektrische energie opslaat voor toepassingen met hoog vermogen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "An electric motor converts electrical energy into mechanical rotation. Current-carrying conductors in a magnetic field experience forces (F = BIL). By arranging conductors on a rotor and switching current direction synchronously, continuous rotation is achieved. Motors are essentially generators operating in reverse.",
                    es: "Un motor eléctrico convierte energía eléctrica en rotación mecánica. Los conductores que llevan corriente en un campo magnético experimentan fuerzas (F = BIL). Al organizar conductores en un rotor y cambiar la dirección de corriente sincrónicamente, se logra rotación continua. Los motores son esencialmente generadores operando en reversa.",
                    de: "Ein Elektromotor wandelt elektrische Energie in mechanische Rotation um. Stromdurchflossene Leiter in einem Magnetfeld erfahren Kräfte (F = BIL). Durch Anordnung von Leitern auf einem Rotor und synchrones Umschalten der Stromrichtung wird kontinuierliche Rotation erreicht. Motoren sind im Wesentlichen rückwärts betriebene Generatoren.",
                    nl: "Een elektrische motor zet elektrische energie om in mechanische rotatie. Stroomvoerende geleiders in een magnetisch veld ondervinden krachten (F = BIL). Door geleiders op een rotor te rangschikken en stroomrichting synchroon om te schakelen, wordt continue rotatie bereikt. Motoren zijn in wezen generatoren die omgekeerd werken."
                }
            },
            {
                question: {
                    en: "What is electromagnetic radiation?",
                    es: "¿Qué es la radiación electromagnética?",
                    de: "Was ist elektromagnetische Strahlung?",
                    nl: "Wat is elektromagnetische straling?"
                },
                options: [
                    {
                        en: "Self-propagating waves of oscillating electric and magnetic fields traveling at the speed of light",
                        es: "Ondas autopropagantes de campos eléctricos y magnéticos oscilantes que viajan a la velocidad de la luz",
                        de: "Sich selbst ausbreitende Wellen oszillierender elektrischer und magnetischer Felder, die mit Lichtgeschwindigkeit reisen",
                        nl: "Zelf-voortplantende golven van oscillerende elektrische en magnetische velden die reizen met de snelheid van het licht"
                    },
                    {
                        en: "The emission of charged particles from radioactive materials",
                        es: "La emisión de partículas cargadas de materiales radiactivos",
                        de: "Die Emission geladener Teilchen aus radioaktiven Materialien",
                        nl: "De emissie van geladen deeltjes uit radioactieve materialen"
                    },
                    {
                        en: "The flow of electrons through conducting wires",
                        es: "El flujo de electrones a través de alambres conductores",
                        de: "Der Fluss von Elektronen durch leitende Drähte",
                        nl: "De stroom van elektronen door geleidende draden"
                    },
                    {
                        en: "The magnetic field produced by electric currents",
                        es: "El campo magnético producido por corrientes eléctricas",
                        de: "Das von elektrischen Strömen erzeugte Magnetfeld",
                        nl: "Het magnetisch veld geproduceerd door elektrische stromen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Electromagnetic radiation consists of oscillating electric and magnetic fields perpendicular to each other and to the direction of propagation. These waves travel at light speed in vacuum and include radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays - the electromagnetic spectrum.",
                    es: "La radiación electromagnética consiste en campos eléctricos y magnéticos oscilantes perpendiculares entre sí y a la dirección de propagación. Estas ondas viajan a la velocidad de la luz en el vacío e incluyen ondas de radio, microondas, infrarrojo, luz visible, ultravioleta, rayos X y rayos gamma - el espectro electromagnético.",
                    de: "Elektromagnetische Strahlung besteht aus oszillierenden elektrischen und magnetischen Feldern, die senkrecht zueinander und zur Ausbreitungsrichtung stehen. Diese Wellen reisen mit Lichtgeschwindigkeit im Vakuum und umfassen Radiowellen, Mikrowellen, Infrarot, sichtbares Licht, Ultraviolett, Röntgenstrahlen und Gammastrahlen - das elektromagnetische Spektrum.",
                    nl: "Elektromagnetische straling bestaat uit oscillerende elektrische en magnetische velden loodrecht op elkaar en op de voortplantingsrichting. Deze golven reizen met lichtsnelheid in vacuüm en omvatten radiogolven, microgolven, infrarood, zichtbaar licht, ultraviolet, röntgenstralen en gammastralen - het elektromagnetische spectrum."
                }
            },
            {
                question: {
                    en: "What is Kirchhoff's Current Law (KCL)?",
                    es: "¿Qué es la Ley de Corriente de Kirchhoff (KCL)?",
                    de: "Was ist Kirchhoffs Stromgesetz (KCL)?",
                    nl: "Wat is Kirchhoff's Stroomwet (KCL)?"
                },
                options: [
                    {
                        en: "The sum of currents entering a node equals the sum of currents leaving the node",
                        es: "La suma de corrientes que entran a un nodo es igual a la suma de corrientes que salen del nodo",
                        de: "Die Summe der in einen Knoten eintretenden Ströme entspricht der Summe der austretenden Ströme",
                        nl: "De som van stromen die een knooppunt binnenkomen is gelijk aan de som van stromen die het knooppunt verlaten"
                    },
                    {
                        en: "The sum of voltage drops around any closed loop equals zero",
                        es: "La suma de caídas de voltaje alrededor de cualquier bucle cerrado es igual a cero",
                        de: "Die Summe der Spannungsabfälle um jede geschlossene Schleife entspricht null",
                        nl: "De som van spanningsval rond elke gesloten lus is gelijk aan nul"
                    },
                    {
                        en: "Current is directly proportional to voltage and inversely proportional to resistance",
                        es: "La corriente es directamente proporcional al voltaje e inversamente proporcional a la resistencia",
                        de: "Strom ist direkt proportional zur Spannung und umgekehrt proportional zum Widerstand",
                        nl: "Stroom is direct evenredig met spanning en omgekeerd evenredig met weerstand"
                    },
                    {
                        en: "Power equals voltage times current in all electrical circuits",
                        es: "La potencia es igual al voltaje por la corriente en todos los circuitos eléctricos",
                        de: "Leistung entspricht Spannung mal Strom in allen elektrischen Schaltungen",
                        nl: "Vermogen is gelijk aan spanning maal stroom in alle elektrische circuits"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Kirchhoff's Current Law is based on conservation of electric charge. At any node (junction) in a circuit, the total current flowing in must equal the total current flowing out: ΣIin = ΣIout. This reflects the fact that charge cannot accumulate at a point in a steady-state circuit.",
                    es: "La Ley de Corriente de Kirchhoff se basa en la conservación de la carga eléctrica. En cualquier nodo (unión) en un circuito, la corriente total que fluye hacia adentro debe igualar la corriente total que fluye hacia afuera: ΣIin = ΣIout. Esto refleja el hecho de que la carga no puede acumularse en un punto en un circuito de estado estable.",
                    de: "Kirchhoffs Stromgesetz basiert auf der Erhaltung der elektrischen Ladung. An jedem Knoten (Verbindungspunkt) in einem Schaltkreis muss der gesamte hineinfließende Strom dem gesamten herausfließenden Strom entsprechen: ΣIin = ΣIout. Dies spiegelt die Tatsache wider, dass sich Ladung nicht an einem Punkt in einem stationären Schaltkreis ansammeln kann.",
                    nl: "Kirchhoff's Stroomwet is gebaseerd op behoud van elektrische lading. Bij elk knooppunt (kruispunt) in een circuit moet de totale stroom die binnenstroomt gelijk zijn aan de totale stroom die uitstroomt: ΣIin = ΣIout. Dit weerspiegelt het feit dat lading zich niet kan ophopen op een punt in een steady-state circuit."
                }
            },
            {
                question: {
                    en: "What is the Hall effect?",
                    es: "¿Qué es el efecto Hall?",
                    de: "Was ist der Hall-Effekt?",
                    nl: "Wat is het Hall-effect?"
                },
                options: [
                    {
                        en: "The generation of voltage across a conductor when current flows through it in a perpendicular magnetic field",
                        es: "La generación de voltaje a través de un conductor cuando la corriente fluye a través de él en un campo magnético perpendicular",
                        de: "Die Erzeugung von Spannung über einem Leiter, wenn Strom durch ihn in einem senkrechten Magnetfeld fließt",
                        nl: "De opwekking van spanning over een geleider wanneer stroom er doorheen vloeit in een loodrecht magnetisch veld"
                    },
                    {
                        en: "The resistance increase in materials when temperature rises",
                        es: "El aumento de resistencia en materiales cuando la temperatura sube",
                        de: "Die Widerstandszunahme in Materialien bei steigender Temperatur",
                        nl: "De weerstandstoename in materialen wanneer temperatuur stijgt"
                    },
                    {
                        en: "The emission of electrons from heated metal surfaces",
                        es: "La emisión de electrones desde superficies metálicas calentadas",
                        de: "Die Emission von Elektronen von erhitzten Metalloberflächen",
                        nl: "De emissie van elektronen van verhitte metalen oppervlakken"
                    },
                    {
                        en: "The bending of light in electric fields",
                        es: "La curvatura de la luz en campos eléctricos",
                        de: "Die Beugung von Licht in elektrischen Feldern",
                        nl: "Het buigen van licht in elektrische velden"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Hall effect occurs when current-carrying charges in a conductor are deflected by a perpendicular magnetic field, creating charge separation and voltage across the conductor. The Hall voltage VH = (IB)/(nqt), where I is current, B is magnetic field, n is charge carrier density, q is charge, and t is thickness.",
                    es: "El efecto Hall ocurre cuando las cargas que llevan corriente en un conductor son desviadas por un campo magnético perpendicular, creando separación de carga y voltaje a través del conductor. El voltaje Hall VH = (IB)/(nqt), donde I es corriente, B es campo magnético, n es densidad de portadores de carga, q es carga, y t es espesor.",
                    de: "Der Hall-Effekt tritt auf, wenn stromführende Ladungen in einem Leiter durch ein senkrechtes Magnetfeld abgelenkt werden, wodurch Ladungstrennung und Spannung über dem Leiter entstehen. Die Hall-Spannung VH = (IB)/(nqt), wobei I der Strom, B das Magnetfeld, n die Ladungsträgerdichte, q die Ladung und t die Dicke ist.",
                    nl: "Het Hall-effect treedt op wanneer stroomvoerende ladingen in een geleider worden afgebogen door een loodrecht magnetisch veld, wat ladingsscheiding en spanning over de geleider creëert. De Hall-spanning VH = (IB)/(nqt), waarbij I stroom is, B magnetisch veld, n ladingsdrager dichtheid, q lading, en t dikte."
                }
            },
            {
                question: {
                    en: "What is the magnetic flux quantum (flux quantum) and why is it fundamental in quantum mechanics?",
                    es: "¿Qué es el cuanto de flujo magnético y por qué es fundamental en la mecánica cuántica?",
                    de: "Was ist das magnetische Flussquant und warum ist es fundamental in der Quantenmechanik?",
                    nl: "Wat is het magnetische fluxkwantum en waarom is het fundamenteel in de kwantummechanica?"
                },
                options: [
                    {
                        en: "Φ₀ = h/2e ≈ 2.07×10⁻¹⁵ Wb, the smallest possible unit of magnetic flux in superconducting loops",
                        es: "Φ₀ = h/2e ≈ 2.07×10⁻¹⁵ Wb, la unidad más pequeña posible de flujo magnético en bucles superconductores",
                        de: "Φ₀ = h/2e ≈ 2,07×10⁻¹⁵ Wb, die kleinste mögliche Einheit des magnetischen Flusses in supraleitenden Schleifen",
                        nl: "Φ₀ = h/2e ≈ 2,07×10⁻¹⁵ Wb, de kleinst mogelijke eenheid van magnetische flux in supergeleidende lussen"
                    },
                    {
                        en: "The maximum magnetic field that can exist in a vacuum",
                        es: "El campo magnético máximo que puede existir en el vacío",
                        de: "Das maximale Magnetfeld, das im Vakuum existieren kann",
                        nl: "Het maximale magnetisch veld dat in vacuüm kan bestaan"
                    },
                    {
                        en: "The energy required to create a magnetic monopole",
                        es: "La energía requerida para crear un monopolo magnético",
                        de: "Die Energie, die erforderlich ist, um einen magnetischen Monopol zu erzeugen",
                        nl: "De energie vereist om een magnetische monopole te creëren"
                    },
                    {
                        en: "The spin angular momentum of an electron",
                        es: "El momento angular de espín de un electrón",
                        de: "Der Spin-Drehimpuls eines Elektrons",
                        nl: "Het spin-impulsmoment van een elektron"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The magnetic flux quantum Φ₀ = h/2e represents the fundamental quantum of magnetic flux threading through superconducting loops. It arises from the macroscopic quantum coherence in superconductors, where the wavefunction must be single-valued, quantizing the flux to integer multiples of Φ₀.",
                    es: "El cuanto de flujo magnético Φ₀ = h/2e representa el cuanto fundamental de flujo magnético que atraviesa bucles superconductores. Surge de la coherencia cuántica macroscópica en superconductores, donde la función de onda debe ser univaluada, cuantizando el flujo en múltiplos enteros de Φ₀.",
                    de: "Das magnetische Flussquant Φ₀ = h/2e repräsentiert das fundamentale Quantum des magnetischen Flusses durch supraleitende Schleifen. Es entsteht aus der makroskopischen Quantenkohärenz in Supraleitern, wo die Wellenfunktion eindeutig sein muss, wodurch der Fluss auf ganzzahlige Vielfache von Φ₀ quantisiert wird.",
                    nl: "Het magnetische fluxkwantum Φ₀ = h/2e vertegenwoordigt het fundamentele kwantum van magnetische flux door supergeleidende lussen. Het ontstaat uit macroscopische kwantumcoherentie in supergeleiders, waar de golffunctie eenduidig moet zijn, waardoor flux wordt gekwantiseerd in gehele veelvouden van Φ₀."
                }
            },
            {
                question: {
                    en: "In a cyclotron, why do particles with higher energy take longer to complete each orbit, seemingly contradicting the constant frequency principle?",
                    es: "En un ciclotrón, ¿por qué las partículas con mayor energía tardan más en completar cada órbita, aparentemente contradiciendo el principio de frecuencia constante?",
                    de: "Warum brauchen Teilchen mit höherer Energie in einem Zyklotron länger für jeden Umlauf, was scheinbar dem Prinzip konstanter Frequenz widerspricht?",
                    nl: "Waarom hebben deeltjes met hogere energie in een cyclotron meer tijd nodig om elke baan te voltooien, wat schijnbaar het constante frequentieprincipe tegenspreekt?"
                },
                options: [
                    {
                        en: "Relativistic effects increase the particle's mass, reducing the cyclotron frequency ωc = qB/γm where γ is the Lorentz factor",
                        es: "Los efectos relativistas aumentan la masa de la partícula, reduciendo la frecuencia del ciclotrón ωc = qB/γm donde γ es el factor de Lorentz",
                        de: "Relativistische Effekte erhöhen die Masse des Teilchens und reduzieren die Zyklotronfrequenz ωc = qB/γm, wobei γ der Lorentz-Faktor ist",
                        nl: "Relativistische effecten verhogen de massa van het deeltje, waardoor de cyclotronfrequentie ωc = qB/γm afneemt, waarbij γ de Lorentz-factor is"
                    },
                    {
                        en: "The magnetic field weakens at larger radii due to field inhomogeneity",
                        es: "El campo magnético se debilita en radios mayores debido a la inhomogeneidad del campo",
                        de: "Das Magnetfeld wird bei größeren Radien aufgrund von Feldinhomogenität schwächer",
                        nl: "Het magnetisch veld wordt zwakker bij grotere radii door veldinhomogeniteit"
                    },
                    {
                        en: "Air resistance increases quadratically with velocity",
                        es: "La resistencia del aire aumenta cuadráticamente con la velocidad",
                        de: "Der Luftwiderstand steigt quadratisch mit der Geschwindigkeit",
                        nl: "Luchtweerstand neemt kwadratisch toe met snelheid"
                    },
                    {
                        en: "The electric field becomes less effective at higher speeds",
                        es: "El campo eléctrico se vuelve menos efectivo a velocidades más altas",
                        de: "Das elektrische Feld wird bei höheren Geschwindigkeiten weniger effektiv",
                        nl: "Het elektrisch veld wordt minder effectief bij hogere snelheden"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "At high energies, relativistic effects become significant. The particle's relativistic mass increases by the Lorentz factor γ = 1/√(1-v²/c²), causing the cyclotron frequency ωc = qB/(γm₀) to decrease. This breaks the constant-frequency assumption used in classical cyclotron design, requiring synchrotron operation instead.",
                    es: "A altas energías, los efectos relativistas se vuelven significativos. La masa relativista de la partícula aumenta por el factor de Lorentz γ = 1/√(1-v²/c²), causando que la frecuencia del ciclotrón ωc = qB/(γm₀) disminuya. Esto rompe la suposición de frecuencia constante usada en el diseño clásico del ciclotrón, requiriendo operación de sincrotrón en su lugar.",
                    de: "Bei hohen Energien werden relativistische Effekte signifikant. Die relativistische Masse des Teilchens steigt um den Lorentz-Faktor γ = 1/√(1-v²/c²), wodurch die Zyklotronfrequenz ωc = qB/(γm₀) abnimmt. Dies durchbricht die Annahme konstanter Frequenz im klassischen Zyklotrondesign und erfordert stattdessen Synchrotronbetrieb.",
                    nl: "Bij hoge energieën worden relativistische effecten significant. De relativistische massa van het deeltje neemt toe met de Lorentz-factor γ = 1/√(1-v²/c²), waardoor de cyclotronfrequentie ωc = qB/(γm₀) afneemt. Dit doorbreekt de constante-frequentieaanname gebruikt in klassiek cyclotronontwerp, waardoor synchrotronoperatie vereist is."
                }
            },
            {
                question: {
                    en: "What is the physical significance of the vector potential A in electromagnetism, and why can't it be directly observed?",
                    es: "¿Cuál es el significado físico del potencial vectorial A en electromagnetismo, y por qué no puede ser observado directamente?",
                    de: "Was ist die physikalische Bedeutung des Vektorpotentials A im Elektromagnetismus, und warum kann es nicht direkt beobachtet werden?",
                    nl: "Wat is de fysieke betekenis van het vectorpotentiaal A in elektromagnetisme, en waarom kan het niet direct worden waargenomen?"
                },
                options: [
                    {
                        en: "A defines the magnetic field via B = ∇×A, but is gauge-dependent and not directly observable, though it has measurable effects in quantum mechanics (Aharonov-Bohm effect)",
                        es: "A define el campo magnético vía B = ∇×A, pero depende del calibre y no es directamente observable, aunque tiene efectos medibles en mecánica cuántica (efecto Aharonov-Bohm)",
                        de: "A definiert das Magnetfeld über B = ∇×A, ist aber eichabhängig und nicht direkt beobachtbar, hat jedoch messbare Effekte in der Quantenmechanik (Aharonov-Bohm-Effekt)",
                        nl: "A definieert het magnetisch veld via B = ∇×A, maar is ijkafhankelijk en niet direct waarneembaar, hoewel het meetbare effecten heeft in kwantummechanica (Aharonov-Bohm effect)"
                    },
                    {
                        en: "A represents the electric field strength and is directly measurable with voltmeters",
                        es: "A representa la intensidad del campo eléctrico y es directamente medible con voltímetros",
                        de: "A repräsentiert die elektrische Feldstärke und ist direkt mit Voltmetern messbar",
                        nl: "A vertegenwoordigt de elektrische veldsterkte en is direct meetbaar met voltmeters"
                    },
                    {
                        en: "A is the energy density of the electromagnetic field",
                        es: "A es la densidad de energía del campo electromagnético",
                        de: "A ist die Energiedichte des elektromagnetischen Feldes",
                        nl: "A is de energiedichtheid van het elektromagnetisch veld"
                    },
                    {
                        en: "A represents the force per unit charge on moving particles",
                        es: "A representa la fuerza por unidad de carga sobre partículas en movimiento",
                        de: "A repräsentiert die Kraft pro Ladungseinheit auf bewegte Teilchen",
                        nl: "A vertegenwoordigt de kracht per ladingseenheid op bewegende deeltjes"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The vector potential A is mathematically fundamental: B = ∇×A and E = -∇φ - ∂A/∂t. While A itself is gauge-dependent (A → A + ∇χ leaves B unchanged), it has profound physical significance in quantum mechanics, where particles respond to A even in regions where B = 0, as demonstrated by the Aharonov-Bohm effect.",
                    es: "El potencial vectorial A es matemáticamente fundamental: B = ∇×A y E = -∇φ - ∂A/∂t. Aunque A mismo depende del calibre (A → A + ∇χ deja B sin cambios), tiene profundo significado físico en mecánica cuántica, donde las partículas responden a A incluso en regiones donde B = 0, como demuestra el efecto Aharonov-Bohm.",
                    de: "Das Vektorpotential A ist mathematisch fundamental: B = ∇×A und E = -∇φ - ∂A/∂t. Obwohl A selbst eichabhängig ist (A → A + ∇χ lässt B unverändert), hat es tiefe physikalische Bedeutung in der Quantenmechanik, wo Teilchen auf A reagieren, selbst in Bereichen wo B = 0, wie der Aharonov-Bohm-Effekt zeigt.",
                    nl: "Het vectorpotentiaal A is wiskundig fundamenteel: B = ∇×A en E = -∇φ - ∂A/∂t. Hoewel A zelf ijkafhankelijk is (A → A + ∇χ laat B onveranderd), heeft het diepgaande fysieke betekenis in kwantummechanica, waar deeltjes reageren op A zelfs in gebieden waar B = 0, zoals aangetoond door het Aharonov-Bohm effect."
                }
            },
            {
                question: {
                    en: "Why does a superconductor expel magnetic fields (Meissner effect) rather than just having zero resistance?",
                    es: "¿Por qué un superconductor expulsa los campos magnéticos (efecto Meissner) en lugar de solo tener resistencia cero?",
                    de: "Warum stößt ein Supraleiter Magnetfelder ab (Meissner-Effekt) anstatt nur null Widerstand zu haben?",
                    nl: "Waarom stoot een supergeleider magnetische velden af (Meissner-effect) in plaats van alleen nul weerstand te hebben?"
                },
                options: [
                    {
                        en: "The Meissner effect is a distinct thermodynamic phase transition requiring B = 0 inside the superconductor, not just a consequence of zero resistance",
                        es: "El efecto Meissner es una transición de fase termodinámica distinta que requiere B = 0 dentro del superconductor, no solo una consecuencia de resistencia cero",
                        de: "Der Meissner-Effekt ist ein eigenständiger thermodynamischer Phasenübergang, der B = 0 im Supraleiter erfordert, nicht nur eine Folge von null Widerstand",
                        nl: "Het Meissner-effect is een afzonderlijke thermodynamische faseovergang die B = 0 binnen de supergeleider vereist, niet alleen een gevolg van nul weerstand"
                    },
                    {
                        en: "Zero resistance naturally leads to magnetic field expulsion through Lenz's law",
                        es: "La resistencia cero conduce naturalmente a la expulsión del campo magnético a través de la ley de Lenz",
                        de: "Null Widerstand führt natürlich zur Magnetfeldabstoßung durch das Lenzsche Gesetz",
                        nl: "Nul weerstand leidt natuurlijk tot magnetische veldverdrijving door de wet van Lenz"
                    },
                    {
                        en: "The superconductor becomes paramagnetic at low temperatures",
                        es: "El superconductor se vuelve paramagnético a bajas temperaturas",
                        de: "Der Supraleiter wird bei niedrigen Temperaturen paramagnetisch",
                        nl: "De supergeleider wordt paramagnetisch bij lage temperaturen"
                    },
                    {
                        en: "Magnetic fields are converted to electric fields in superconductors",
                        es: "Los campos magnéticos se convierten en campos eléctricos en superconductores",
                        de: "Magnetfelder werden in Supraleitern in elektrische Felder umgewandelt",
                        nl: "Magnetische velden worden omgezet naar elektrische velden in supergeleiders"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Meissner effect demonstrates that superconductivity is not merely zero resistance but a distinct thermodynamic state. Even if a magnetic field is applied after cooling below Tc, it's expelled. This requires B = 0 inside, achieved by surface currents creating opposing fields. A perfect conductor would only prevent field changes, not expel existing fields.",
                    es: "El efecto Meissner demuestra que la superconductividad no es meramente resistencia cero sino un estado termodinámico distinto. Incluso si se aplica un campo magnético después de enfriarse por debajo de Tc, es expulsado. Esto requiere B = 0 adentro, logrado por corrientes superficiales que crean campos opuestos. Un conductor perfecto solo evitaría cambios de campo, no expulsaría campos existentes.",
                    de: "Der Meissner-Effekt zeigt, dass Supraleitung nicht nur null Widerstand ist, sondern ein eigenständiger thermodynamischer Zustand. Selbst wenn ein Magnetfeld nach Abkühlung unter Tc angelegt wird, wird es abgestoßen. Dies erfordert B = 0 innen, erreicht durch Oberflächenströme, die entgegengesetzte Felder erzeugen. Ein perfekter Leiter würde nur Feldänderungen verhindern, nicht existierende Felder abstoßen.",
                    nl: "Het Meissner-effect toont aan dat supergeleiding niet alleen nul weerstand is maar een afzonderlijke thermodynamische toestand. Zelfs als een magnetisch veld wordt toegepast na afkoeling onder Tc, wordt het verdreven. Dit vereist B = 0 binnenin, bereikt door oppervlaktestromen die tegengestelde velden creëren. Een perfecte geleider zou alleen veldveranderingen voorkomen, niet bestaande velden verdrijven."
                }
            },
            {
                question: {
                    en: "What determines the characteristic impedance Z₀ = √(L/C) of a transmission line, and why is 50Ω so common?",
                    es: "¿Qué determina la impedancia característica Z₀ = √(L/C) de una línea de transmisión, y por qué 50Ω es tan común?",
                    de: "Was bestimmt die charakteristische Impedanz Z₀ = √(L/C) einer Übertragungsleitung, und warum ist 50Ω so häufig?",
                    nl: "Wat bepaalt de karakteristieke impedantie Z₀ = √(L/C) van een transmissielijn, en waarom is 50Ω zo gewoon?"
                },
                options: [
                    {
                        en: "Z₀ depends on geometry and dielectric properties; 50Ω optimizes the trade-off between power handling (minimized at 30Ω) and voltage breakdown (minimized at 77Ω)",
                        es: "Z₀ depende de la geometría y propiedades dieléctricas; 50Ω optimiza el equilibrio entre manejo de potencia (minimizado a 30Ω) y ruptura de voltaje (minimizada a 77Ω)",
                        de: "Z₀ hängt von Geometrie und dielektrischen Eigenschaften ab; 50Ω optimiert den Kompromiss zwischen Leistungsbehandlung (minimiert bei 30Ω) und Spannungsdurchschlag (minimiert bei 77Ω)",
                        nl: "Z₀ hangt af van geometrie en diëlektrische eigenschappen; 50Ω optimaliseert de afweging tussen vermogenbehandeling (geminimaliseerd bij 30Ω) en spanningsdoorslag (geminimaliseerd bij 77Ω)"
                    },
                    {
                        en: "50Ω is the impedance of free space divided by π",
                        es: "50Ω es la impedancia del espacio libre dividida por π",
                        de: "50Ω ist die Impedanz des freien Raums geteilt durch π",
                        nl: "50Ω is de impedantie van vrije ruimte gedeeld door π"
                    },
                    {
                        en: "50Ω minimizes signal reflections in all cable types",
                        es: "50Ω minimiza las reflexiones de señal en todos los tipos de cable",
                        de: "50Ω minimiert Signalreflexionen in allen Kabeltypen",
                        nl: "50Ω minimaliseert signaalreflecties in alle kabeltypes"
                    },
                    {
                        en: "50Ω was chosen arbitrarily as an industry standard",
                        es: "50Ω fue elegido arbitrariamente como estándar de la industria",
                        de: "50Ω wurde willkürlich als Industriestandard gewählt",
                        nl: "50Ω werd willekeurig gekozen als industriestandaard"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Characteristic impedance Z₀ = √(L/C) depends on the transmission line geometry and dielectric constant. For coaxial cables, minimum attenuation occurs at 77Ω, minimum power loss at 30Ω. 50Ω represents a practical compromise, providing good power handling while maintaining reasonable voltage breakdown margins. The impedance of free space (377Ω) is unrelated to this choice.",
                    es: "La impedancia característica Z₀ = √(L/C) depende de la geometría de la línea de transmisión y la constante dieléctrica. Para cables coaxiales, la atenuación mínima ocurre a 77Ω, la pérdida de potencia mínima a 30Ω. 50Ω representa un compromiso práctico, proporcionando buen manejo de potencia mientras mantiene márgenes razonables de ruptura de voltaje. La impedancia del espacio libre (377Ω) no está relacionada con esta elección.",
                    de: "Die charakteristische Impedanz Z₀ = √(L/C) hängt von der Geometrie der Übertragungsleitung und der Dielektrizitätskonstante ab. Bei Koaxialkabeln tritt minimale Dämpfung bei 77Ω auf, minimaler Leistungsverlust bei 30Ω. 50Ω stellt einen praktischen Kompromiss dar, der gute Leistungsbehandlung bietet und gleichzeitig vernünftige Spannungsdurchschlagsspannen aufrechterhält. Die Impedanz des freien Raums (377Ω) steht nicht im Zusammenhang mit dieser Wahl.",
                    nl: "Karakteristieke impedantie Z₀ = √(L/C) hangt af van transmissielijngeometrie en diëlektrische constante. Voor coaxkabels treedt minimale verzwakking op bij 77Ω, minimaal vermogenverlies bij 30Ω. 50Ω vertegenwoordigt een praktisch compromis, dat goede vermogenbehandeling biedt terwijl redelijke spanningsdoorslagmarges worden gehandhaafd. De impedantie van vrije ruimte (377Ω) is niet gerelateerd aan deze keuze."
                }
            },
            {
                question: {
                    en: "How does the skin effect in conductors depend on frequency, and what physical mechanism causes it?",
                    es: "¿Cómo depende el efecto pelicular en conductores de la frecuencia, y qué mecanismo físico lo causa?",
                    de: "Wie hängt der Skin-Effekt in Leitern von der Frequenz ab, und welcher physikalische Mechanismus verursacht ihn?",
                    nl: "Hoe hangt het huideffect in geleiders af van frequentie, en welk fysiek mechanisme veroorzaakt het?"
                },
                options: [
                    {
                        en: "Current concentrates near the surface with skin depth δ = √(2ρ/ωμ) ∝ 1/√f, caused by magnetic field diffusion into the conductor",
                        es: "La corriente se concentra cerca de la superficie con profundidad de penetración δ = √(2ρ/ωμ) ∝ 1/√f, causada por la difusión del campo magnético en el conductor",
                        de: "Strom konzentriert sich nahe der Oberfläche mit Eindringtiefe δ = √(2ρ/ωμ) ∝ 1/√f, verursacht durch Magnetfelddiffusion in den Leiter",
                        nl: "Stroom concentreert zich nabij het oppervlak met huiddiepte δ = √(2ρ/ωμ) ∝ 1/√f, veroorzaakt door magnetische velddiffusie in de geleider"
                    },
                    {
                        en: "High-frequency electrons are repelled from the conductor interior by Coulomb forces",
                        es: "Los electrones de alta frecuencia son repelidos del interior del conductor por fuerzas de Coulomb",
                        de: "Hochfrequenz-Elektronen werden durch Coulomb-Kräfte aus dem Leiterinneren abgestoßen",
                        nl: "Hoogfrequent-elektronen worden afgestoten van het geleiderinterior door Coulomb-krachten"
                    },
                    {
                        en: "The skin effect is independent of frequency but depends on conductor temperature",
                        es: "El efecto pelicular es independiente de la frecuencia pero depende de la temperatura del conductor",
                        de: "Der Skin-Effekt ist frequenzunabhängig, hängt aber von der Leitertemperatur ab",
                        nl: "Het huideffect is onafhankelijk van frequentie maar hangt af van geleidertemperatuur"
                    },
                    {
                        en: "The skin effect only occurs in ferromagnetic materials",
                        es: "El efecto pelicular solo ocurre en materiales ferromagnéticos",
                        de: "Der Skin-Effekt tritt nur in ferromagnetischen Materialien auf",
                        nl: "Het huideffect treedt alleen op in ferromagnetische materialen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The skin effect arises from electromagnetic induction. AC current creates a time-varying magnetic field that induces eddy currents opposing penetration into the conductor. The magnetic field diffuses into the conductor following the diffusion equation, with penetration depth δ = √(2ρ/ωμ₀μᵣ). Higher frequencies mean shallower penetration, concentrating current near the surface and increasing AC resistance.",
                    es: "El efecto pelicular surge de la inducción electromagnética. La corriente AC crea un campo magnético variable en el tiempo que induce corrientes de Foucault que se oponen a la penetración en el conductor. El campo magnético se difunde en el conductor siguiendo la ecuación de difusión, con profundidad de penetración δ = √(2ρ/ωμ₀μᵣ). Frecuencias más altas significan penetración más superficial, concentrando corriente cerca de la superficie y aumentando la resistencia AC.",
                    de: "Der Skin-Effekt entsteht durch elektromagnetische Induktion. Wechselstrom erzeugt ein zeitveränderliches Magnetfeld, das Wirbelströme induziert, die dem Eindringen in den Leiter entgegenwirken. Das Magnetfeld diffundiert in den Leiter nach der Diffusionsgleichung, mit Eindringtiefe δ = √(2ρ/ωμ₀μᵣ). Höhere Frequenzen bedeuten oberflächlichere Penetration, konzentrieren Strom nahe der Oberfläche und erhöhen den AC-Widerstand.",
                    nl: "Het huideffect ontstaat uit elektromagnetische inductie. AC-stroom creëert een tijdvariërend magnetisch veld dat wervelstromen induceert die penetratie in de geleider tegenwerken. Het magnetisch veld diffundeert in de geleider volgens de diffusievergelijking, met penetratiediepte δ = √(2ρ/ωμ₀μᵣ). Hogere frequenties betekenen ondiepe penetratie, concentreren stroom nabij het oppervlak en verhogen AC-weerstand."
                }
            },
            {
                question: {
                    en: "What is diamagnetic levitation and how does it differ from magnetic repulsion between like poles?",
                    es: "¿Qué es la levitación diamagnética y en qué se diferencia de la repulsión magnética entre polos similares?",
                    de: "Was ist diamagnetische Levitation und wie unterscheidet sie sich von der magnetischen Abstoßung zwischen gleichen Polen?",
                    nl: "Wat is diamagnetische levitatie en hoe verschilt het van magnetische afstoting tussen gelijke polen?"
                },
                options: [
                    {
                        en: "Diamagnetic materials create induced magnetic dipoles opposing external fields, providing stable levitation that violates neither energy conservation nor Earnshaw's theorem for static fields",
                        es: "Los materiales diamagnéticos crean dipolos magnéticos inducidos que se oponen a campos externos, proporcionando levitación estable que no viola ni la conservación de energía ni el teorema de Earnshaw para campos estáticos",
                        de: "Diamagnetische Materialien erzeugen induzierte magnetische Dipole, die äußeren Feldern entgegenwirken, und bieten stabile Levitation, die weder Energieerhaltung noch Earnshaws Theorem für statische Felder verletzt",
                        nl: "Diamagnetische materialen creëren geïnduceerde magnetische dipolen die externe velden tegenwerken, wat stabiele levitatie biedt die noch energiebehoud noch Earnshaw's stelling voor statische velden schendt"
                    },
                    {
                        en: "Diamagnetic levitation uses the same repulsive forces as permanent magnets with like poles",
                        es: "La levitación diamagnética usa las mismas fuerzas repulsivas que los imanes permanentes con polos similares",
                        de: "Diamagnetische Levitation nutzt dieselben abstoßenden Kräfte wie Permanentmagnete mit gleichen Polen",
                        nl: "Diamagnetische levitatie gebruikt dezelfde afstotende krachten als permanente magneten met gelijke polen"
                    },
                    {
                        en: "Diamagnetic materials become strongly magnetized and repel all magnetic fields",
                        es: "Los materiales diamagnéticos se magnetizan fuertemente y repelen todos los campos magnéticos",
                        de: "Diamagnetische Materialien werden stark magnetisiert und stoßen alle Magnetfelder ab",
                        nl: "Diamagnetische materialen worden sterk gemagnetiseerd en stoten alle magnetische velden af"
                    },
                    {
                        en: "Diamagnetic levitation requires superconducting materials at absolute zero temperature",
                        es: "La levitación diamagnética requiere materiales superconductores a temperatura de cero absoluto",
                        de: "Diamagnetische Levitation erfordert supraleitende Materialien bei absoluter Nulltemperatur",
                        nl: "Diamagnetische levitatie vereist supergeleidende materialen bij absolute nultemperatuur"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Diamagnetic levitation exploits the weak repulsion of diamagnetic materials (χ < 0) from magnetic field regions. Unlike permanent magnet repulsion, diamagnetic response is induced and proportional to field strength, creating a stable potential well. Famous examples include levitating frogs and graphite. This doesn't violate Earnshaw's theorem because the material response is field-dependent.",
                    es: "La levitación diamagnética explota la débil repulsión de materiales diamagnéticos (χ < 0) de regiones de campo magnético. A diferencia de la repulsión de imanes permanentes, la respuesta diamagnética es inducida y proporcional a la intensidad del campo, creando un pozo de potencial estable. Ejemplos famosos incluyen ranas levitando y grafito. Esto no viola el teorema de Earnshaw porque la respuesta del material depende del campo.",
                    de: "Diamagnetische Levitation nutzt die schwache Abstoßung diamagnetischer Materialien (χ < 0) von Magnetfeldregionen. Im Gegensatz zur Abstoßung von Permanentmagneten ist die diamagnetische Reaktion induziert und proportional zur Feldstärke, wodurch ein stabiler Potentialtopf entsteht. Berühmte Beispiele sind schwebende Frösche und Graphit. Dies verletzt Earnshaws Theorem nicht, weil die Materialreaktion feldabhängig ist.",
                    nl: "Diamagnetische levitatie benut de zwakke afstoting van diamagnetische materialen (χ < 0) van magnetische veldgebieden. In tegenstelling tot permanente magneetafstoting, is diamagnetische respons geïnduceerd en evenredig met veldsterkte, wat een stabiele potentiaalput creëert. Beroemde voorbeelden zijn zwevende kikkers en grafiet. Dit schendt Earnshaw's stelling niet omdat de materiaalrespons veldafhankelijk is."
                }
            },
            {
                question: {
                    en: "Why do LC oscillators have a natural resonant frequency ω₀ = 1/√(LC), and what determines the Q factor?",
                    es: "¿Por qué los osciladores LC tienen una frecuencia resonante natural ω₀ = 1/√(LC), y qué determina el factor Q?",
                    de: "Warum haben LC-Oszillatoren eine natürliche Resonanzfrequenz ω₀ = 1/√(LC), und was bestimmt den Q-Faktor?",
                    nl: "Waarom hebben LC-oscillatoren een natuurlijke resonantiefrequentie ω₀ = 1/√(LC), en wat bepaalt de Q-factor?"
                },
                options: [
                    {
                        en: "Energy oscillates between electric (capacitor) and magnetic (inductor) forms; Q = ωL/R = 1/(ωRC) represents the ratio of stored to dissipated energy per cycle",
                        es: "La energía oscila entre formas eléctrica (capacitor) y magnética (inductor); Q = ωL/R = 1/(ωRC) representa la relación de energía almacenada a disipada por ciclo",
                        de: "Energie oszilliert zwischen elektrischen (Kondensator) und magnetischen (Induktor) Formen; Q = ωL/R = 1/(ωRC) stellt das Verhältnis von gespeicherter zu dissipierter Energie pro Zyklus dar",
                        nl: "Energie oscilleert tussen elektrische (condensator) en magnetische (inductor) vormen; Q = ωL/R = 1/(ωRC) vertegenwoordigt de verhouding van opgeslagen tot gedissipeerde energie per cyclus"
                    },
                    {
                        en: "The frequency is determined by the speed of light in the circuit materials",
                        es: "La frecuencia está determinada por la velocidad de la luz en los materiales del circuito",
                        de: "Die Frequenz wird durch die Lichtgeschwindigkeit in den Schaltungsmaterialien bestimmt",
                        nl: "De frequentie wordt bepaald door de lichtsnelheid in de circuitmaterialen"
                    },
                    {
                        en: "LC circuits always oscillate at the same frequency regardless of component values",
                        es: "Los circuitos LC siempre oscilan a la misma frecuencia independientemente de los valores de los componentes",
                        de: "LC-Schaltungen oszillieren immer mit derselben Frequenz, unabhängig von den Komponentenwerten",
                        nl: "LC-circuits oscilleren altijd op dezelfde frequentie ongeacht componentwaarden"
                    },
                    {
                        en: "The Q factor is always equal to the resonant frequency",
                        es: "El factor Q siempre es igual a la frecuencia resonante",
                        de: "Der Q-Faktor ist immer gleich der Resonanzfrequenz",
                        nl: "De Q-factor is altijd gelijk aan de resonantiefrequentie"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "In an LC circuit, energy alternates between electric field energy (½CV²) in the capacitor and magnetic field energy (½LI²) in the inductor. The resonant frequency emerges from the balance condition: when capacitive reactance XC = 1/(ωC) equals inductive reactance XL = ωL, giving ω₀ = 1/√(LC). The Q factor quantifies energy storage versus dissipation, limited by resistive losses.",
                    es: "En un circuito LC, la energía alterna entre energía de campo eléctrico (½CV²) en el capacitor y energía de campo magnético (½LI²) en el inductor. La frecuencia resonante emerge de la condición de equilibrio: cuando la reactancia capacitiva XC = 1/(ωC) iguala la reactancia inductiva XL = ωL, dando ω₀ = 1/√(LC). El factor Q cuantifica el almacenamiento de energía versus disipación, limitado por pérdidas resistivas.",
                    de: "In einem LC-Schaltkreis wechselt Energie zwischen elektrischer Feldenergie (½CV²) im Kondensator und magnetischer Feldenergie (½LI²) in der Induktivität. Die Resonanzfrequenz entsteht aus der Gleichgewichtsbedingung: wenn kapazitive Reaktanz XC = 1/(ωC) der induktiven Reaktanz XL = ωL entspricht, ergibt sich ω₀ = 1/√(LC). Der Q-Faktor quantifiziert Energiespeicherung versus Dissipation, begrenzt durch resistive Verluste.",
                    nl: "In een LC-circuit wisselt energie tussen elektrische veldenergie (½CV²) in de condensator en magnetische veldenergie (½LI²) in de inductor. De resonantiefrequentie ontstaat uit de evenwichtsconditie: wanneer capacitieve reactantie XC = 1/(ωC) gelijk is aan inductieve reactantie XL = ωL, wat ω₀ = 1/√(LC) geeft. De Q-factor kwantificeert energieopslag versus dissipatie, beperkt door resistieve verliezen."
                }
            },
            {
                question: {
                    en: "What causes hysteresis in ferromagnetic materials, and why does it lead to energy loss?",
                    es: "¿Qué causa la histéresis en materiales ferromagnéticos, y por qué conduce a pérdida de energía?",
                    de: "Was verursacht Hysterese in ferromagnetischen Materialien, und warum führt sie zu Energieverlust?",
                    nl: "Wat veroorzaakt hysterese in ferromagnetische materialen, en waarom leidt het tot energieverlies?"
                },
                options: [
                    {
                        en: "Domain wall pinning by defects creates irreversible magnetization changes; energy loss equals the area of the B-H hysteresis loop per cycle",
                        es: "El anclaje de paredes de dominio por defectos crea cambios irreversibles de magnetización; la pérdida de energía es igual al área del bucle de histéresis B-H por ciclo",
                        de: "Domänenwandverankerung durch Defekte erzeugt irreversible Magnetisierungsänderungen; Energieverlust entspricht der Fläche der B-H-Hystereseschleife pro Zyklus",
                        nl: "Domeinwandpinning door defecten creëert onomkeerbare magnetisatieveranderingen; energieverlies is gelijk aan de oppervlakte van de B-H hysteresislus per cyclus"
                    },
                    {
                        en: "Hysteresis is caused by the finite speed of electromagnetic wave propagation",
                        es: "La histéresis es causada por la velocidad finita de propagación de ondas electromagnéticas",
                        de: "Hysterese wird durch die endliche Geschwindigkeit der elektromagnetischen Wellenausbreitung verursacht",
                        nl: "Hysterese wordt veroorzaakt door de eindige snelheid van elektromagnetische golfvoortplanting"
                    },
                    {
                        en: "Temperature fluctuations cause random domain switching",
                        es: "Las fluctuaciones de temperatura causan conmutación aleatoria de dominios",
                        de: "Temperaturschwankungen verursachen zufälliges Domänenschalten",
                        nl: "Temperatuurfluctuaties veroorzaken willekeurige domeinschakeling"
                    },
                    {
                        en: "Hysteresis only occurs in superconducting materials",
                        es: "La histéresis solo ocurre en materiales superconductores",
                        de: "Hysterese tritt nur in supraleitenden Materialien auf",
                        nl: "Hysterese treedt alleen op in supergeleidende materialen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Magnetic hysteresis arises from the irreversible movement of magnetic domain walls that get pinned at crystal defects, impurities, and grain boundaries. When the external field changes, domains don't return to their original configuration due to this pinning, creating the characteristic B-H loop. The enclosed area represents energy dissipated as heat per magnetization cycle, explaining core losses in transformers.",
                    es: "La histéresis magnética surge del movimiento irreversible de paredes de dominio magnético que se anclan en defectos cristalinos, impurezas y límites de grano. Cuando el campo externo cambia, los dominios no regresan a su configuración original debido a este anclaje, creando el bucle B-H característico. El área encerrada representa energía disipada como calor por ciclo de magnetización, explicando las pérdidas del núcleo en transformadores.",
                    de: "Magnetische Hysterese entsteht durch die irreversible Bewegung magnetischer Domänenwände, die an Kristalldefekten, Verunreinigungen und Korngrenzen verankert werden. Wenn sich das äußere Feld ändert, kehren Domänen aufgrund dieser Verankerung nicht zu ihrer ursprünglichen Konfiguration zurück, wodurch die charakteristische B-H-Schleife entsteht. Die eingeschlossene Fläche stellt Energie dar, die pro Magnetisierungszyklus als Wärme dissipiert wird, was Kernverluste in Transformatoren erklärt.",
                    nl: "Magnetische hysterese ontstaat uit de onomkeerbare beweging van magnetische domeinwanden die vastzitten aan kristaldefecten, onzuiverheden en korrelgrenzen. Wanneer het externe veld verandert, keren domeinen niet terug naar hun oorspronkelijke configuratie door deze vastzitten, wat de karakteristieke B-H lus creëert. De ingesloten oppervlakte vertegenwoordigt energie gedissipeerd als warmte per magnetisatiecyclus, wat kernverliezen in transformatoren verklaart."
                }
            },
            {
                question: {
                    en: "What is the physical origin of inductance, and why does it oppose changes in current?",
                    es: "¿Cuál es el origen físico de la inductancia, y por qué se opone a los cambios de corriente?",
                    de: "Was ist der physikalische Ursprung der Induktivität, und warum widersetzt sie sich Stromänderungen?",
                    nl: "Wat is de fysieke oorsprong van inductantie, en waarom weerstaat het veranderingen in stroom?"
                },
                options: [
                    {
                        en: "Inductance L = Φ/I arises from magnetic flux linkage; by Lenz's law, induced EMF ε = -L(dI/dt) opposes current changes to conserve energy",
                        es: "La inductancia L = Φ/I surge del enlace de flujo magnético; por la ley de Lenz, la FEM inducida ε = -L(dI/dt) se opone a cambios de corriente para conservar energía",
                        de: "Induktivität L = Φ/I entsteht durch magnetische Flussverkettung; nach dem Lenzschen Gesetz widersetzt sich die induzierte EMK ε = -L(dI/dt) Stromänderungen zur Energieerhaltung",
                        nl: "Inductantie L = Φ/I ontstaat uit magnetische fluxkoppeling; door Lenz's wet weerstaat geïnduceerde EMF ε = -L(dI/dt) stroomveranderingen om energie te behouden"
                    },
                    {
                        en: "Inductance is caused by the gravitational interaction between electrons in the conductor",
                        es: "La inductancia es causada por la interacción gravitacional entre electrones en el conductor",
                        de: "Induktivität wird durch die Gravitationswechselwirkung zwischen Elektronen im Leiter verursacht",
                        nl: "Inductantie wordt veroorzaakt door de gravitationele interactie tussen elektronen in de geleider"
                    },
                    {
                        en: "Inductance only occurs in superconducting coils at absolute zero",
                        es: "La inductancia solo ocurre en bobinas superconductoras a cero absoluto",
                        de: "Induktivität tritt nur in supraleitenden Spulen bei absolutem Nullpunkt auf",
                        nl: "Inductantie treedt alleen op in supergeleidende spoelen bij absolute nul"
                    },
                    {
                        en: "Inductance is the capacitance of magnetic fields",
                        es: "La inductancia es la capacitancia de los campos magnéticos",
                        de: "Induktivität ist die Kapazität magnetischer Felder",
                        nl: "Inductantie is de capaciteit van magnetische velden"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Inductance represents the magnetic flux linkage per unit current: L = Φ/I. When current changes, the changing magnetic field induces an EMF that opposes the change (Lenz's law): ε = -L(dI/dt). This is fundamentally about energy storage in magnetic fields (½LI²) and conservation laws. The inductor 'remembers' its current state and resists changes, similar to how mass resists acceleration in mechanics.",
                    es: "La inductancia representa el enlace de flujo magnético por unidad de corriente: L = Φ/I. Cuando la corriente cambia, el campo magnético cambiante induce una FEM que se opone al cambio (ley de Lenz): ε = -L(dI/dt). Esto es fundamentalmente sobre almacenamiento de energía en campos magnéticos (½LI²) y leyes de conservación. El inductor 'recuerda' su estado de corriente y resiste cambios, similar a como la masa resiste la aceleración en mecánica.",
                    de: "Induktivität repräsentiert die magnetische Flussverkettung pro Stromeinheit: L = Φ/I. Wenn sich der Strom ändert, induziert das sich ändernde Magnetfeld eine EMK, die sich der Änderung widersetzt (Lenzsches Gesetz): ε = -L(dI/dt). Dies geht grundlegend um Energiespeicherung in Magnetfeldern (½LI²) und Erhaltungsgesetze. Die Induktivität 'erinnert' sich an ihren Stromzustand und widersteht Änderungen, ähnlich wie Masse Beschleunigung in der Mechanik widersteht.",
                    nl: "Inductantie vertegenwoordigt de magnetische fluxkoppeling per stroomeeenheid: L = Φ/I. Wanneer stroom verandert, induceert het veranderende magnetisch veld een EMF die de verandering weerstaat (Lenz's wet): ε = -L(dI/dt). Dit gaat fundamenteel over energieopslag in magnetische velden (½LI²) en behoudswetten. De inductor 'herinnert' zijn stroomtoestand en weerstaat veranderingen, vergelijkbaar met hoe massa versnelling in mechanica weerstaat."
                }
            },
            {
                question: {
                    en: "How do eddy currents form in conductors, and what practical applications utilize them?",
                    es: "¿Cómo se forman las corrientes de Foucault en conductores, y qué aplicaciones prácticas las utilizan?",
                    de: "Wie entstehen Wirbelströme in Leitern, und welche praktischen Anwendungen nutzen sie?",
                    nl: "Hoe vormen wervelstromen zich in geleiders, en welke praktische toepassingen gebruiken ze?"
                },
                options: [
                    {
                        en: "Changing magnetic fields induce circular currents via Faraday's law; applications include induction heating, magnetic braking, and metal detection",
                        es: "Los campos magnéticos cambiantes inducen corrientes circulares vía la ley de Faraday; las aplicaciones incluyen calentamiento por inducción, frenado magnético y detección de metales",
                        de: "Sich ändernde Magnetfelder induzieren kreisförmige Ströme über das Faradaysche Gesetz; Anwendungen umfassen Induktionsheizung, magnetisches Bremsen und Metalldetektion",
                        nl: "Veranderende magnetische velden induceren circulaire stromen via Faraday's wet; toepassingen omvatten inductieverwarming, magnetisch remmen en metaaldetectie"
                    },
                    {
                        en: "Eddy currents are caused by thermal expansion of conductors",
                        es: "Las corrientes de Foucault son causadas por la expansión térmica de conductores",
                        de: "Wirbelströme werden durch thermische Ausdehnung von Leitern verursacht",
                        nl: "Wervelstromen worden veroorzaakt door thermische uitzetting van geleiders"
                    },
                    {
                        en: "Eddy currents only flow in ferromagnetic materials",
                        es: "Las corrientes de Foucault solo fluyen en materiales ferromagnéticos",
                        de: "Wirbelströme fließen nur in ferromagnetischen Materialien",
                        nl: "Wervelstromen stromen alleen in ferromagnetische materialen"
                    },
                    {
                        en: "Eddy currents are DC currents that flow in straight lines",
                        es: "Las corrientes de Foucault son corrientes DC que fluyen en líneas rectas",
                        de: "Wirbelströme sind Gleichströme, die in geraden Linien fließen",
                        nl: "Wervelstromen zijn DC-stromen die in rechte lijnen vloeien"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Eddy currents are closed-loop currents induced in conductors by changing magnetic flux, following Faraday's law. They flow in circular paths perpendicular to the magnetic field. Applications exploit either their heating effect (induction furnaces, cooking) or their magnetic interaction (eddy current brakes in trains, magnetic levitation, non-destructive testing). They're also unwanted losses in transformer cores.",
                    es: "Las corrientes de Foucault son corrientes de bucle cerrado inducidas en conductores por flujo magnético cambiante, siguiendo la ley de Faraday. Fluyen en caminos circulares perpendiculares al campo magnético. Las aplicaciones explotan su efecto de calentamiento (hornos de inducción, cocina) o su interacción magnética (frenos de corrientes de Foucault en trenes, levitación magnética, pruebas no destructivas). También son pérdidas no deseadas en núcleos de transformadores.",
                    de: "Wirbelströme sind geschlossene Schleifenströme, die in Leitern durch sich ändernden magnetischen Fluss induziert werden, nach dem Faradayschen Gesetz. Sie fließen in kreisförmigen Bahnen senkrecht zum Magnetfeld. Anwendungen nutzen entweder ihren Heizeffekt (Induktionsöfen, Kochen) oder ihre magnetische Wechselwirkung (Wirbelstrombremsen in Zügen, magnetische Levitation, zerstörungsfreie Prüfung). Sie sind auch unerwünschte Verluste in Transformatorkernen.",
                    nl: "Wervelstromen zijn gesloten-lus stromen geïnduceerd in geleiders door veranderende magnetische flux, volgend Faraday's wet. Ze vloeien in circulaire paden loodrecht op het magnetisch veld. Toepassingen benutten hun verwarmingseffect (inductieovens, koken) of hun magnetische interactie (wervelstroomremmen in treinen, magnetische levitatie, niet-destructief testen). Ze zijn ook ongewenste verliezen in transformatorkernen."
                }
            },
            {
                question: {
                    en: "What determines the breakdown voltage in dielectric materials, and how does it scale with thickness?",
                    es: "¿Qué determina el voltaje de ruptura en materiales dieléctricos, y cómo escala con el grosor?",
                    de: "Was bestimmt die Durchschlagspannung in dielektrischen Materialien, und wie skaliert sie mit der Dicke?",
                    nl: "Wat bepaalt de doorslagspanning in diëlektrische materialen, en hoe schaalt het met dikte?"
                },
                options: [
                    {
                        en: "Breakdown occurs when electric field exceeds the material's dielectric strength; for uniform fields, breakdown voltage scales linearly with thickness (Vb = Ed × thickness)",
                        es: "La ruptura ocurre cuando el campo eléctrico excede la resistencia dieléctrica del material; para campos uniformes, el voltaje de ruptura escala linealmente con el grosor (Vb = Ed × grosor)",
                        de: "Durchschlag tritt auf, wenn das elektrische Feld die dielektrische Festigkeit des Materials überschreitet; bei uniformen Feldern skaliert die Durchschlagspannung linear mit der Dicke (Vb = Ed × Dicke)",
                        nl: "Doorslag treedt op wanneer elektrisch veld de diëlektrische sterkte van het materiaal overschrijdt; voor uniforme velden schaalt doorslagspanning lineair met dikte (Vb = Ed × dikte)"
                    },
                    {
                        en: "Breakdown voltage is always independent of material thickness",
                        es: "El voltaje de ruptura siempre es independiente del grosor del material",
                        de: "Durchschlagspannung ist immer unabhängig von der Materialdicke",
                        nl: "Doorslagspanning is altijd onafhankelijk van materiaaldikte"
                    },
                    {
                        en: "Breakdown voltage decreases exponentially with increasing thickness",
                        es: "El voltaje de ruptura disminuye exponencialmente con el aumento del grosor",
                        de: "Durchschlagspannung nimmt exponentiell mit zunehmender Dicke ab",
                        nl: "Doorslagspanning neemt exponentieel af met toenemende dikte"
                    },
                    {
                        en: "Breakdown is caused by magnetic field penetration into the dielectric",
                        es: "La ruptura es causada por la penetración del campo magnético en el dieléctrico",
                        de: "Durchschlag wird durch Magnetfeldeindringung in das Dielektrikum verursacht",
                        nl: "Doorslag wordt veroorzaakt door magnetische veldpenetratie in het diëlektricum"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Dielectric breakdown occurs when the electric field exceeds the material's intrinsic dielectric strength (Ed), causing avalanche ionization and conductive path formation. For uniform fields and thin materials, Vb = Ed × d. However, real materials show deviations due to field enhancement at defects, statistical variations, and for very thin films, quantum tunneling effects become significant.",
                    es: "La ruptura dieléctrica ocurre cuando el campo eléctrico excede la resistencia dieléctrica intrínseca del material (Ed), causando ionización de avalancha y formación de camino conductivo. Para campos uniformes y materiales delgados, Vb = Ed × d. Sin embargo, materiales reales muestran desviaciones debido al realce de campo en defectos, variaciones estadísticas, y para películas muy delgadas, efectos de tunelamiento cuántico se vuelven significativos.",
                    de: "Dielektrischer Durchschlag tritt auf, wenn das elektrische Feld die intrinsische dielektrische Festigkeit des Materials (Ed) überschreitet, was Lawinenionisation und Leitpfadbildung verursacht. Für uniforme Felder und dünne Materialien gilt Vb = Ed × d. Jedoch zeigen reale Materialien Abweichungen aufgrund von Feldverstärkung an Defekten, statistischen Variationen, und bei sehr dünnen Filmen werden Quantentunneleffekte signifikant.",
                    nl: "Diëlektrische doorslag treedt op wanneer het elektrisch veld de intrinsieke diëlektrische sterkte van het materiaal (Ed) overschrijdt, wat lawineversterkte ionisatie en geleidende padvorming veroorzaakt. Voor uniforme velden en dunne materialen geldt Vb = Ed × d. Echter, echte materialen tonen afwijkingen door veldversterking bij defecten, statistische variaties, en voor zeer dunne films worden kwantumtunnelingeffecten significant."
                }
            },
            {
                question: {
                    en: "What causes the anomalous skin effect in metals at very high frequencies, and how does it differ from classical skin effect?",
                    es: "¿Qué causa el efecto pelicular anómalo en metales a frecuencias muy altas, y en qué difiere del efecto pelicular clásico?",
                    de: "Was verursacht den anomalen Skin-Effekt in Metallen bei sehr hohen Frequenzen, und wie unterscheidet er sich vom klassischen Skin-Effekt?",
                    nl: "Wat veroorzaakt het anomale huideffect in metalen bij zeer hoge frequenties, en hoe verschilt het van het klassieke huideffect?"
                },
                options: [
                    {
                        en: "When skin depth becomes comparable to mean free path, electron collisions become non-local, leading to δ ∝ ω^(-1/3) instead of ω^(-1/2)",
                        es: "Cuando la profundidad pelicular se vuelve comparable al camino libre medio, las colisiones de electrones se vuelven no locales, llevando a δ ∝ ω^(-1/3) en lugar de ω^(-1/2)",
                        de: "Wenn die Eindringtiefe mit der mittleren freien Weglänge vergleichbar wird, werden Elektronenstöße nicht-lokal, was zu δ ∝ ω^(-1/3) anstatt ω^(-1/2) führt",
                        nl: "Wanneer huiddiepte vergelijkbaar wordt met gemiddelde vrije weglengte, worden elektronenbotsingen niet-lokaal, wat leidt tot δ ∝ ω^(-1/3) in plaats van ω^(-1/2)"
                    },
                    {
                        en: "The anomalous skin effect is caused by relativistic effects at high frequencies",
                        es: "El efecto pelicular anómalo es causado por efectos relativistas a altas frecuencias",
                        de: "Der anomale Skin-Effekt wird durch relativistische Effekte bei hohen Frequenzen verursacht",
                        nl: "Het anomale huideffect wordt veroorzaakt door relativistische effecten bij hoge frequenties"
                    },
                    {
                        en: "At high frequencies, the metal becomes transparent to electromagnetic waves",
                        es: "A altas frecuencias, el metal se vuelve transparente a las ondas electromagnéticas",
                        de: "Bei hohen Frequenzen wird das Metall für elektromagnetische Wellen transparent",
                        nl: "Bij hoge frequenties wordt het metaal transparant voor elektromagnetische golven"
                    },
                    {
                        en: "The anomalous skin effect only occurs in superconductors",
                        es: "El efecto pelicular anómalo solo ocurre en superconductores",
                        de: "Der anomale Skin-Effekt tritt nur in Supraleitern auf",
                        nl: "Het anomale huideffect treedt alleen op in supergeleiders"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The anomalous skin effect occurs when the skin depth δ becomes comparable to the electron mean free path ℓ. In this regime, electrons can travel distances comparable to the field penetration depth without scattering, making the conductivity non-local. The frequency dependence changes from the classical δ ∝ ω^(-1/2) to δ ∝ ω^(-1/3), reflecting the ballistic nature of electron transport.",
                    es: "El efecto pelicular anómalo ocurre cuando la profundidad pelicular δ se vuelve comparable al camino libre medio de electrones ℓ. En este régimen, los electrones pueden viajar distancias comparables a la profundidad de penetración del campo sin dispersión, haciendo la conductividad no local. La dependencia de frecuencia cambia del clásico δ ∝ ω^(-1/2) a δ ∝ ω^(-1/3), reflejando la naturaleza balística del transporte de electrones.",
                    de: "Der anomale Skin-Effekt tritt auf, wenn die Eindringtiefe δ mit der mittleren freien Weglänge der Elektronen ℓ vergleichbar wird. In diesem Bereich können Elektronen Entfernungen vergleichbar mit der Feldeindringtiefe zurücklegen ohne Streuung, was die Leitfähigkeit nicht-lokal macht. Die Frequenzabhängigkeit ändert sich vom klassischen δ ∝ ω^(-1/2) zu δ ∝ ω^(-1/3), was die ballistische Natur des Elektronentransports widerspiegelt.",
                    nl: "Het anomale huideffect treedt op wanneer de huiddiepte δ vergelijkbaar wordt met de gemiddelde vrije weglengte van elektronen ℓ. In dit regime kunnen elektronen afstanden afleggen vergelijkbaar met de veldpenetratiediepte zonder verstrooiing, waardoor de geleidbaarheid niet-lokaal wordt. De frequentieafhankelijkheid verandert van de klassieke δ ∝ ω^(-1/2) naar δ ∝ ω^(-1/3), wat de ballistische aard van elektronentransport weergeeft."
                }
            },
            {
                question: {
                    en: "What is the London penetration depth in superconductors, and how does it relate to the coherence length?",
                    es: "¿Qué es la profundidad de penetración de London en superconductores, y cómo se relaciona con la longitud de coherencia?",
                    de: "Was ist die London-Eindringtiefe in Supraleitern, und wie verhält sie sich zur Kohärenzlänge?",
                    nl: "Wat is de London-penetratiediepte in supergeleiders, en hoe verhoudt het zich tot de coherentielengte?"
                },
                options: [
                    {
                        en: "λL = √(mc²/4πnse²) is the depth magnetic fields penetrate; coherence length ξ describes Cooper pair size; their ratio κ = λ/ξ distinguishes Type I (κ<1/√2) from Type II (κ>1/√2) superconductors",
                        es: "λL = √(mc²/4πnse²) es la profundidad que penetran los campos magnéticos; la longitud de coherencia ξ describe el tamaño del par de Cooper; su relación κ = λ/ξ distingue superconductores Tipo I (κ<1/√2) de Tipo II (κ>1/√2)",
                        de: "λL = √(mc²/4πnse²) ist die Tiefe, in die Magnetfelder eindringen; Kohärenzlänge ξ beschreibt Cooper-Paar-Größe; ihr Verhältnis κ = λ/ξ unterscheidet Typ I (κ<1/√2) von Typ II (κ>1/√2) Supraleitern",
                        nl: "λL = √(mc²/4πnse²) is de diepte waarin magnetische velden penetreren; coherentielengte ξ beschrijft Cooper-paar grootte; hun verhouding κ = λ/ξ onderscheidt Type I (κ<1/√2) van Type II (κ>1/√2) supergeleiders"
                    },
                    {
                        en: "London penetration depth is the same as the skin depth in normal conductors",
                        es: "La profundidad de penetración de London es la misma que la profundidad pelicular en conductores normales",
                        de: "Die London-Eindringtiefe ist dieselbe wie die Eindringtiefe in normalen Leitern",
                        nl: "London-penetratiediepte is hetzelfde als de huiddiepte in normale geleiders"
                    },
                    {
                        en: "The London penetration depth increases with temperature",
                        es: "La profundidad de penetración de London aumenta con la temperatura",
                        de: "Die London-Eindringtiefe steigt mit der Temperatur",
                        nl: "De London-penetratiediepte neemt toe met temperatuur"
                    },
                    {
                        en: "Coherence length and penetration depth are always equal in superconductors",
                        es: "La longitud de coherencia y la profundidad de penetración siempre son iguales en superconductores",
                        de: "Kohärenzlänge und Eindringtiefe sind in Supraleitern immer gleich",
                        nl: "Coherentielengte en penetratiediepte zijn altijd gelijk in supergeleiders"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The London penetration depth λL characterizes how deep magnetic fields penetrate into a superconductor surface. It depends on the superconducting electron density ns. The coherence length ξ describes the spatial extent of Cooper pairs. The Ginzburg-Landau parameter κ = λ/ξ determines the superconductor type: Type I expel fields completely (perfect diamagnetism), while Type II allow flux penetration in quantized vortices.",
                    es: "La profundidad de penetración de London λL caracteriza qué tan profundo penetran los campos magnéticos en una superficie superconductora. Depende de la densidad de electrones superconductores ns. La longitud de coherencia ξ describe la extensión espacial de los pares de Cooper. El parámetro de Ginzburg-Landau κ = λ/ξ determina el tipo de superconductor: Tipo I expulsa campos completamente (diamagnetismo perfecto), mientras que Tipo II permite penetración de flujo en vórtices cuantizados.",
                    de: "Die London-Eindringtiefe λL charakterisiert, wie tief Magnetfelder in eine Supraleiteroberfläche eindringen. Sie hängt von der supraleitenden Elektronendichte ns ab. Die Kohärenzlänge ξ beschreibt die räumliche Ausdehnung von Cooper-Paaren. Der Ginzburg-Landau-Parameter κ = λ/ξ bestimmt den Supraleitertyp: Typ I stößt Felder vollständig ab (perfekter Diamagnetismus), während Typ II Flusseindringung in quantisierten Wirbeln erlaubt.",
                    nl: "De London-penetratiediepte λL karakteriseert hoe diep magnetische velden penetreren in een supergeleideroppervlak. Het hangt af van de supergeleidende elektronendichtheid ns. De coherentielengte ξ beschrijft de ruimtelijke uitbreiding van Cooper-paren. De Ginzburg-Landau parameter κ = λ/ξ bepaalt het supergeleidertype: Type I stoten velden volledig af (perfecte diamagnetisme), terwijl Type II fluxpenetratie toestaan in gekwantiseerde vortices."
                }
            },
            {
                question: {
                    en: "Why do parallel conductors carrying current in the same direction attract each other, and how is this used to define the ampere?",
                    es: "¿Por qué los conductores paralelos que llevan corriente en la misma dirección se atraen mutuamente, y cómo se usa esto para definir el amperio?",
                    de: "Warum ziehen sich parallele Leiter, die Strom in derselben Richtung führen, gegenseitig an, und wie wird dies zur Definition des Ampere verwendet?",
                    nl: "Waarom trekken parallelle geleiders die stroom in dezelfde richting voeren elkaar aan, en hoe wordt dit gebruikt om de ampère te definiëren?"
                },
                options: [
                    {
                        en: "Each conductor creates a magnetic field that exerts force on the other; F/L = μ₀I₁I₂/2πd; the ampere was defined as the current producing 2×10⁻⁷ N/m force between 1m-separated wires",
                        es: "Cada conductor crea un campo magnético que ejerce fuerza sobre el otro; F/L = μ₀I₁I₂/2πd; el amperio se definía como la corriente que produce 2×10⁻⁷ N/m de fuerza entre alambres separados 1m",
                        de: "Jeder Leiter erzeugt ein Magnetfeld, das Kraft auf den anderen ausübt; F/L = μ₀I₁I₂/2πd; das Ampere wurde als Strom definiert, der 2×10⁻⁷ N/m Kraft zwischen 1m getrennten Drähten erzeugt",
                        nl: "Elke geleider creëert een magnetisch veld dat kracht uitoefent op de ander; F/L = μ₀I₁I₂/2πd; de ampère werd gedefinieerd als de stroom die 2×10⁻⁷ N/m kracht produceert tussen 1m gescheiden draden"
                    },
                    {
                        en: "The attraction is due to electrostatic forces between the charges in the conductors",
                        es: "La atracción se debe a fuerzas electrostáticas entre las cargas en los conductores",
                        de: "Die Anziehung ist auf elektrostatische Kräfte zwischen den Ladungen in den Leitern zurückzuführen",
                        nl: "De aantrekking is te wijten aan elektrostatische krachten tussen de ladingen in de geleiders"
                    },
                    {
                        en: "Parallel currents always repel each other regardless of direction",
                        es: "Las corrientes paralelas siempre se repelen sin importar la dirección",
                        de: "Parallele Ströme stoßen sich immer ab, unabhängig von der Richtung",
                        nl: "Parallelle stromen stoten elkaar altijd af, ongeacht de richting"
                    },
                    {
                        en: "The force between parallel conductors is independent of the current values",
                        es: "La fuerza entre conductores paralelos es independiente de los valores de corriente",
                        de: "Die Kraft zwischen parallelen Leitern ist unabhängig von den Stromwerten",
                        nl: "De kracht tussen parallelle geleiders is onafhankelijk van de stroomwaarden"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Current I₁ in wire 1 creates magnetic field B₁ = μ₀I₁/2πr around it. Wire 2 carrying current I₂ experiences force F = I₂L×B₁, giving attractive force per unit length F/L = μ₀I₁I₂/2πd for same-direction currents. The 2019 SI redefinition now defines the ampere via fixed values of fundamental constants, but the original definition used this magnetic force between parallel wires.",
                    es: "La corriente I₁ en el alambre 1 crea campo magnético B₁ = μ₀I₁/2πr a su alrededor. El alambre 2 que lleva corriente I₂ experimenta fuerza F = I₂L×B₁, dando fuerza atractiva por unidad de longitud F/L = μ₀I₁I₂/2πd para corrientes en la misma dirección. La redefinición SI de 2019 ahora define el amperio vía valores fijos de constantes fundamentales, pero la definición original usaba esta fuerza magnética entre alambres paralelos.",
                    de: "Strom I₁ in Draht 1 erzeugt Magnetfeld B₁ = μ₀I₁/2πr um ihn herum. Draht 2 mit Strom I₂ erfährt Kraft F = I₂L×B₁, was anziehende Kraft pro Längeneinheit F/L = μ₀I₁I₂/2πd für gleichgerichtete Ströme ergibt. Die SI-Neudefinition von 2019 definiert das Ampere nun über feste Werte fundamentaler Konstanten, aber die ursprüngliche Definition verwendete diese magnetische Kraft zwischen parallelen Drähten.",
                    nl: "Stroom I₁ in draad 1 creëert magnetisch veld B₁ = μ₀I₁/2πr eromheen. Draad 2 met stroom I₂ ondervindt kracht F = I₂L×B₁, wat aantrekkende kracht per lengte-eenheid F/L = μ₀I₁I₂/2πd geeft voor stromen in dezelfde richting. De 2019 SI-herdefinitie definieert nu de ampère via vaste waarden van fundamentele constanten, maar de oorspronkelijke definitie gebruikte deze magnetische kracht tussen parallelle draden."
                }
            },
            {
                question: {
                    en: "What is the physical meaning of the displacement current in Maxwell's equations, and why was it necessary?",
                    es: "¿Cuál es el significado físico de la corriente de desplazamiento en las ecuaciones de Maxwell, y por qué era necesaria?",
                    de: "Was ist die physikalische Bedeutung des Verschiebungsstroms in Maxwells Gleichungen, und warum war er notwendig?",
                    nl: "Wat is de fysieke betekenis van de verplaatsingsstroom in Maxwell's vergelijkingen, en waarom was het nodig?"
                },
                options: [
                    {
                        en: "JD = ε₀∂E/∂t represents changing electric flux; it was needed to make Ampère's law consistent with charge conservation and predict electromagnetic waves",
                        es: "JD = ε₀∂E/∂t representa flujo eléctrico cambiante; era necesaria para hacer la ley de Ampère consistente con la conservación de carga y predecir ondas electromagnéticas",
                        de: "JD = ε₀∂E/∂t stellt sich ändernden elektrischen Fluss dar; er war nötig, um das Ampèresche Gesetz mit Ladungserhaltung konsistent zu machen und elektromagnetische Wellen vorherzusagen",
                        nl: "JD = ε₀∂E/∂t vertegenwoordigt veranderende elektrische flux; het was nodig om Ampère's wet consistent te maken met ladingsbehoud en elektromagnetische golven te voorspellen"
                    },
                    {
                        en: "Displacement current is the actual movement of charges through vacuum",
                        es: "La corriente de desplazamiento es el movimiento real de cargas a través del vacío",
                        de: "Verschiebungsstrom ist die tatsächliche Bewegung von Ladungen durch das Vakuum",
                        nl: "Verplaatsingsstroom is de werkelijke beweging van ladingen door vacuüm"
                    },
                    {
                        en: "Displacement current only exists in conducting materials",
                        es: "La corriente de desplazamiento solo existe en materiales conductores",
                        de: "Verschiebungsstrom existiert nur in leitenden Materialien",
                        nl: "Verplaatsingsstroom bestaat alleen in geleidende materialen"
                    },
                    {
                        en: "Displacement current is a mathematical correction with no physical significance",
                        es: "La corriente de desplazamiento es una corrección matemática sin significado físico",
                        de: "Verschiebungsstrom ist eine mathematische Korrektur ohne physikalische Bedeutung",
                        nl: "Verplaatsingsstroom is een wiskundige correctie zonder fysieke betekenis"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Maxwell introduced displacement current JD = ε₀∂E/∂t to resolve an inconsistency: Ampère's original law ∇×B = μ₀J failed during charging capacitors where ∇⋅J ≠ 0, violating charge conservation. Adding JD gives ∇×B = μ₀(J + JD), ensuring ∇⋅(J + JD) = 0. This modification was crucial for predicting electromagnetic waves, as it couples changing electric fields to magnetic fields.",
                    es: "Maxwell introdujo la corriente de desplazamiento JD = ε₀∂E/∂t para resolver una inconsistencia: la ley original de Ampère ∇×B = μ₀J fallaba durante la carga de capacitores donde ∇⋅J ≠ 0, violando la conservación de carga. Agregar JD da ∇×B = μ₀(J + JD), asegurando ∇⋅(J + JD) = 0. Esta modificación fue crucial para predecir ondas electromagnéticas, ya que acopla campos eléctricos cambiantes a campos magnéticos.",
                    de: "Maxwell führte den Verschiebungsstrom JD = ε₀∂E/∂t ein, um eine Inkonsistenz zu lösen: Ampères ursprüngliches Gesetz ∇×B = μ₀J versagte beim Laden von Kondensatoren, wo ∇⋅J ≠ 0, was die Ladungserhaltung verletzte. Das Hinzufügen von JD ergibt ∇×B = μ₀(J + JD) und stellt sicher, dass ∇⋅(J + JD) = 0. Diese Modifikation war entscheidend für die Vorhersage elektromagnetischer Wellen, da sie sich ändernde elektrische Felder mit Magnetfeldern koppelt.",
                    nl: "Maxwell introduceerde verplaatsingsstroom JD = ε₀∂E/∂t om een inconsistentie op te lossen: Ampère's oorspronkelijke wet ∇×B = μ₀J faalde tijdens het opladen van condensatoren waar ∇⋅J ≠ 0, wat ladingsbehoud schond. JD toevoegen geeft ∇×B = μ₀(J + JD), wat ∇⋅(J + JD) = 0 verzekert. Deze modificatie was cruciaal voor het voorspellen van elektromagnetische golven, omdat het veranderende elektrische velden koppelt aan magnetische velden."
                }
            },
            {
                question: {
                    en: "How does the Lorentz force F = q(E + v×B) unify electric and magnetic forces, and what does this reveal about the nature of electromagnetic fields?",
                    es: "¿Cómo la fuerza de Lorentz F = q(E + v×B) unifica las fuerzas eléctricas y magnéticas, y qué revela esto sobre la naturaleza de los campos electromagnéticos?",
                    de: "Wie vereint die Lorentz-Kraft F = q(E + v×B) elektrische und magnetische Kräfte, und was enthüllt dies über die Natur elektromagnetischer Felder?",
                    nl: "Hoe verenigt de Lorentz-kracht F = q(E + v×B) elektrische en magnetische krachten, en wat onthult dit over de aard van elektromagnetische velden?"
                },
                options: [
                    {
                        en: "The Lorentz force shows that E and B are different aspects of a single electromagnetic field tensor; what appears as electric or magnetic depends on the observer's reference frame",
                        es: "La fuerza de Lorentz muestra que E y B son aspectos diferentes de un solo tensor de campo electromagnético; lo que parece eléctrico o magnético depende del marco de referencia del observador",
                        de: "Die Lorentz-Kraft zeigt, dass E und B verschiedene Aspekte eines einzigen elektromagnetischen Feldtensors sind; was als elektrisch oder magnetisch erscheint, hängt vom Bezugssystem des Beobachters ab",
                        nl: "De Lorentz-kracht toont dat E en B verschillende aspecten zijn van een enkele elektromagnetische veldtensor; wat als elektrisch of magnetisch verschijnt hangt af van het referentiekader van de waarnemer"
                    },
                    {
                        en: "Electric and magnetic forces are completely independent phenomena that happen to add vectorially",
                        es: "Las fuerzas eléctricas y magnéticas son fenómenos completamente independientes que por casualidad se suman vectorialmente",
                        de: "Elektrische und magnetische Kräfte sind völlig unabhängige Phänomene, die zufällig vektoriell addieren",
                        nl: "Elektrische en magnetische krachten zijn volledig onafhankelijke verschijnselen die toevallig vectorieel optellen"
                    },
                    {
                        en: "The magnetic force is always stronger than the electric force in the Lorentz equation",
                        es: "La fuerza magnética siempre es más fuerte que la fuerza eléctrica en la ecuación de Lorentz",
                        de: "Die magnetische Kraft ist in der Lorentz-Gleichung immer stärker als die elektrische Kraft",
                        nl: "De magnetische kracht is altijd sterker dan de elektrische kracht in de Lorentz-vergelijking"
                    },
                    {
                        en: "The Lorentz force only applies to relativistic particles moving near the speed of light",
                        es: "La fuerza de Lorentz solo se aplica a partículas relativistas que se mueven cerca de la velocidad de la luz",
                        de: "Die Lorentz-Kraft gilt nur für relativistische Teilchen, die sich nahe der Lichtgeschwindigkeit bewegen",
                        nl: "De Lorentz-kracht geldt alleen voor relativistische deeltjes die bewegen nabij de lichtsnelheid"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Lorentz force reveals the unified nature of electromagnetism. Electric and magnetic fields are components of the electromagnetic field tensor Fμν. Under Lorentz transformations, what one observer sees as a pure electric field, another moving observer sees as a mixture of electric and magnetic fields. This relativistic insight shows that the E/B distinction is observer-dependent, reflecting the deeper unity of spacetime and electromagnetism.",
                    es: "La fuerza de Lorentz revela la naturaleza unificada del electromagnetismo. Los campos eléctricos y magnéticos son componentes del tensor de campo electromagnético Fμν. Bajo transformaciones de Lorentz, lo que un observador ve como un campo eléctrico puro, otro observador en movimiento ve como una mezcla de campos eléctricos y magnéticos. Esta percepción relativista muestra que la distinción E/B depende del observador, reflejando la unidad más profunda del espacio-tiempo y el electromagnetismo.",
                    de: "Die Lorentz-Kraft enthüllt die vereinheitlichte Natur des Elektromagnetismus. Elektrische und magnetische Felder sind Komponenten des elektromagnetischen Feldtensors Fμν. Unter Lorentz-Transformationen sieht ein Beobachter ein reines elektrisches Feld, während ein anderer bewegter Beobachter eine Mischung aus elektrischen und magnetischen Feldern sieht. Diese relativistische Erkenntnis zeigt, dass die E/B-Unterscheidung beobachterabhängig ist und die tiefere Einheit von Raumzeit und Elektromagnetismus widerspiegelt.",
                    nl: "De Lorentz-kracht onthult de verenigde aard van elektromagnetisme. Elektrische en magnetische velden zijn componenten van de elektromagnetische veldtensor Fμν. Onder Lorentz-transformaties ziet wat een waarnemer als een puur elektrisch veld ziet, een andere bewegende waarnemer als een mengsel van elektrische en magnetische velden. Dit relativistische inzicht toont dat het E/B-onderscheid waarnemerafhankelijk is, wat de diepere eenheid van ruimtetijd en elektromagnetisme weergeeft."
                }
            },
            {
                question: {
                    en: "What is mutual inductance, and how does it enable energy transfer in transformers without direct electrical connection?",
                    es: "¿Qué es la inductancia mutua, y cómo permite la transferencia de energía en transformadores sin conexión eléctrica directa?",
                    de: "Was ist gegenseitige Induktivität, und wie ermöglicht sie Energieübertragung in Transformatoren ohne direkte elektrische Verbindung?",
                    nl: "Wat is wederzijdse inductantie, en hoe maakt het energieoverdracht in transformatoren mogelijk zonder directe elektrische verbinding?"
                },
                options: [
                    {
                        en: "Mutual inductance M = Φ₂₁/I₁ quantifies magnetic coupling between coils; changing current in primary induces EMF = -M(dI₁/dt) in secondary, enabling contactless energy transfer",
                        es: "La inductancia mutua M = Φ₂₁/I₁ cuantifica el acoplamiento magnético entre bobinas; la corriente cambiante en el primario induce FEM = -M(dI₁/dt) en el secundario, habilitando transferencia de energía sin contacto",
                        de: "Gegenseitige Induktivität M = Φ₂₁/I₁ quantifiziert magnetische Kopplung zwischen Spulen; sich ändernder Strom im Primärkreis induziert EMK = -M(dI₁/dt) im Sekundärkreis, wodurch kontaktlose Energieübertragung ermöglicht wird",
                        nl: "Wederzijdse inductantie M = Φ₂₁/I₁ kwantificeert magnetische koppeling tussen spoelen; veranderende stroom in primair induceert EMF = -M(dI₁/dt) in secundair, wat contactloze energieoverdracht mogelijk maakt"
                    },
                    {
                        en: "Mutual inductance requires physical contact between the transformer windings",
                        es: "La inductancia mutua requiere contacto físico entre los devanados del transformador",
                        de: "Gegenseitige Induktivität erfordert physischen Kontakt zwischen den Transformatorwicklungen",
                        nl: "Wederzijdse inductantie vereist fysiek contact tussen de transformatorwikkelingen"
                    },
                    {
                        en: "Mutual inductance only works with DC currents",
                        es: "La inductancia mutua solo funciona con corrientes DC",
                        de: "Gegenseitige Induktivität funktioniert nur mit Gleichströmen",
                        nl: "Wederzijdse inductantie werkt alleen met DC-stromen"
                    },
                    {
                        en: "Energy transfer in transformers is due to capacitive coupling, not mutual inductance",
                        es: "La transferencia de energía en transformadores se debe al acoplamiento capacitivo, no a la inductancia mutua",
                        de: "Energieübertragung in Transformatoren ist auf kapazitive Kopplung zurückzuführen, nicht auf gegenseitige Induktivität",
                        nl: "Energieoverdracht in transformatoren is te wijten aan capacitieve koppeling, niet wederzijdse inductantie"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Mutual inductance M quantifies how effectively the magnetic flux from one coil links with another. When current changes in the primary (I₁), it creates changing magnetic flux Φ₂₁ through the secondary coil, inducing EMF₂ = -M(dI₁/dt). This magnetic coupling, enhanced by iron cores with high permeability, enables efficient wireless energy transfer. The coupling coefficient k = M/√(L₁L₂) determines transfer efficiency.",
                    es: "La inductancia mutua M cuantifica qué tan efectivamente el flujo magnético de una bobina se enlaza con otra. Cuando la corriente cambia en el primario (I₁), crea flujo magnético cambiante Φ₂₁ a través de la bobina secundaria, induciendo FEM₂ = -M(dI₁/dt). Este acoplamiento magnético, mejorado por núcleos de hierro con alta permeabilidad, permite transferencia eficiente de energía inalámbrica. El coeficiente de acoplamiento k = M/√(L₁L₂) determina la eficiencia de transferencia.",
                    de: "Gegenseitige Induktivität M quantifiziert, wie effektiv der magnetische Fluss von einer Spule mit einer anderen verknüpft ist. Wenn sich der Strom im Primärkreis (I₁) ändert, erzeugt er sich ändernden magnetischen Fluss Φ₂₁ durch die Sekundärspule und induziert EMK₂ = -M(dI₁/dt). Diese magnetische Kopplung, verstärkt durch Eisenkerne mit hoher Permeabilität, ermöglicht effiziente drahtlose Energieübertragung. Der Kopplungskoeffizient k = M/√(L₁L₂) bestimmt die Übertragungseffizienz.",
                    nl: "Wederzijdse inductantie M kwantificeert hoe effectief de magnetische flux van één spoel koppelt met een andere. Wanneer stroom verandert in de primair (I₁), creëert het veranderende magnetische flux Φ₂₁ door de secundaire spoel, wat EMF₂ = -M(dI₁/dt) induceert. Deze magnetische koppeling, versterkt door ijzerkernen met hoge permeabiliteit, maakt efficiënte draadloze energieoverdracht mogelijk. De koppelingscoëfficiënt k = M/√(L₁L₂) bepaalt overdrachtsefficiëntie."
                }
            },
            {
                question: {
                    en: "How do Maxwell's equations predict the speed of electromagnetic waves, and what was the historical significance of this calculation?",
                    es: "¿Cómo las ecuaciones de Maxwell predicen la velocidad de las ondas electromagnéticas, y cuál fue la importancia histórica de este cálculo?",
                    de: "Wie sagen Maxwells Gleichungen die Geschwindigkeit elektromagnetischer Wellen voraus, und was war die historische Bedeutung dieser Berechnung?",
                    nl: "Hoe voorspellen Maxwell's vergelijkingen de snelheid van elektromagnetische golven, en wat was de historische betekenis van deze berekening?"
                },
                options: [
                    {
                        en: "Maxwell's equations yield wave equation with speed c = 1/√(ε₀μ₀) ≈ 3×10⁸ m/s, matching measured light speed and revealing that light is electromagnetic radiation",
                        es: "Las ecuaciones de Maxwell producen una ecuación de onda con velocidad c = 1/√(ε₀μ₀) ≈ 3×10⁸ m/s, coincidiendo con la velocidad medida de la luz y revelando que la luz es radiación electromagnética",
                        de: "Maxwells Gleichungen ergeben eine Wellengleichung mit Geschwindigkeit c = 1/√(ε₀μ₀) ≈ 3×10⁸ m/s, die der gemessenen Lichtgeschwindigkeit entspricht und enthüllt, dass Licht elektromagnetische Strahlung ist",
                        nl: "Maxwell's vergelijkingen leveren golfvergelijking met snelheid c = 1/√(ε₀μ₀) ≈ 3×10⁸ m/s, wat overeenkomt met gemeten lichtsnelheid en onthult dat licht elektromagnetische straling is"
                    },
                    {
                        en: "Maxwell calculated that electromagnetic waves travel at infinite speed in vacuum",
                        es: "Maxwell calculó que las ondas electromagnéticas viajan a velocidad infinita en el vacío",
                        de: "Maxwell berechnete, dass elektromagnetische Wellen im Vakuum mit unendlicher Geschwindigkeit reisen",
                        nl: "Maxwell berekende dat elektromagnetische golven met oneindige snelheid reizen in vacuüm"
                    },
                    {
                        en: "The speed of electromagnetic waves depends on their frequency and wavelength",
                        es: "La velocidad de las ondas electromagnéticas depende de su frecuencia y longitud de onda",
                        de: "Die Geschwindigkeit elektromagnetischer Wellen hängt von ihrer Frequenz und Wellenlänge ab",
                        nl: "De snelheid van elektromagnetische golven hangt af van hun frequentie en golflengte"
                    },
                    {
                        en: "Maxwell's equations cannot predict wave propagation speeds",
                        es: "Las ecuaciones de Maxwell no pueden predecir velocidades de propagación de ondas",
                        de: "Maxwells Gleichungen können keine Wellenausbreitungsgeschwindigkeiten vorhersagen",
                        nl: "Maxwell's vergelijkingen kunnen golfvoortplantingssnelheden niet voorspellen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Maxwell's equations, when combined, yield the wave equation for electromagnetic fields with propagation speed c = 1/√(ε₀μ₀). When Maxwell calculated this using known values of electric and magnetic constants, he obtained approximately 3×10⁸ m/s - remarkably close to the measured speed of light. This was the first theoretical prediction that light is electromagnetic radiation, unifying optics with electromagnetism.",
                    es: "Las ecuaciones de Maxwell, cuando se combinan, producen la ecuación de onda para campos electromagnéticos con velocidad de propagación c = 1/√(ε₀μ₀). Cuando Maxwell calculó esto usando valores conocidos de constantes eléctricas y magnéticas, obtuvo aproximadamente 3×10⁸ m/s - notablemente cercano a la velocidad medida de la luz. Esta fue la primera predicción teórica de que la luz es radiación electromagnética, unificando la óptica con el electromagnetismo.",
                    de: "Maxwells Gleichungen ergeben kombiniert die Wellengleichung für elektromagnetische Felder mit Ausbreitungsgeschwindigkeit c = 1/√(ε₀μ₀). Als Maxwell dies mit bekannten Werten elektrischer und magnetischer Konstanten berechnete, erhielt er etwa 3×10⁸ m/s - bemerkenswert nahe der gemessenen Lichtgeschwindigkeit. Dies war die erste theoretische Vorhersage, dass Licht elektromagnetische Strahlung ist, wodurch Optik mit Elektromagnetismus vereint wurde.",
                    nl: "Maxwell's vergelijkingen, wanneer gecombineerd, leveren de golfvergelijking voor elektromagnetische velden met voortplantingssnelheid c = 1/√(ε₀μ₀). Toen Maxwell dit berekende met bekende waarden van elektrische en magnetische constanten, verkreeg hij ongeveer 3×10⁸ m/s - opmerkelijk dicht bij de gemeten lichtsnelheid. Dit was de eerste theoretische voorspelling dat licht elektromagnetische straling is, wat optica met elektromagnetisme verenigde."
                }
            },
            {
                question: {
                    en: "What determines the resonant frequency of a cavity resonator, and why are they used in microwave applications?",
                    es: "¿Qué determina la frecuencia resonante de un resonador de cavidad, y por qué se usan en aplicaciones de microondas?",
                    de: "Was bestimmt die Resonanzfrequenz eines Hohlraumresonators, und warum werden sie in Mikrowellenanwendungen verwendet?",
                    nl: "Wat bepaalt de resonantiefrequentie van een holtereso​nator, en waarom worden ze gebruikt in microgolftoepassingen?"
                },
                options: [
                    {
                        en: "Resonant frequency depends on cavity dimensions and geometry; f = nc/2L for rectangular cavities, where standing electromagnetic waves form with perfect conducting walls",
                        es: "La frecuencia resonante depende de las dimensiones y geometría de la cavidad; f = nc/2L para cavidades rectangulares, donde ondas electromagnéticas estacionarias se forman con paredes conductoras perfectas",
                        de: "Resonanzfrequenz hängt von Hohlraumabmessungen und Geometrie ab; f = nc/2L für rechteckige Hohlräume, wo stehende elektromagnetische Wellen mit perfekt leitenden Wänden entstehen",
                        nl: "Resonantiefrequentie hangt af van holte-afmetingen en geometrie; f = nc/2L voor rechthoekige holtes, waar staande elektromagnetische golven vormen met perfect geleidende wanden"
                    },
                    {
                        en: "Cavity resonators work only at optical frequencies, not microwaves",
                        es: "Los resonadores de cavidad funcionan solo a frecuencias ópticas, no microondas",
                        de: "Hohlraumresonatoren funktionieren nur bei optischen Frequenzen, nicht bei Mikrowellen",
                        nl: "Holtereso​natoren werken alleen bij optische frequenties, niet microgolven"
                    },
                    {
                        en: "The resonant frequency is independent of cavity size and shape",
                        es: "La frecuencia resonante es independiente del tamaño y forma de la cavidad",
                        de: "Die Resonanzfrequenz ist unabhängig von Hohlraumgröße und -form",
                        nl: "De resonantiefrequentie is onafhankelijk van holtegrootte en -vorm"
                    },
                    {
                        en: "Cavity resonators require active electronic components to function",
                        es: "Los resonadores de cavidad requieren componentes electrónicos activos para funcionar",
                        de: "Hohlraumresonatoren benötigen aktive elektronische Komponenten zum Funktionieren",
                        nl: "Holtereso​natoren vereisen actieve elektronische componenten om te functioneren"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Cavity resonators are metal enclosures that support standing electromagnetic wave patterns. The resonant frequencies are determined by the requirement that electromagnetic fields satisfy boundary conditions at conducting walls. For a rectangular cavity of length L, the lowest mode has f₀ = c/2L. Cavity resonators offer extremely high Q factors (low loss) at microwave frequencies, making them ideal for filters, oscillators, and precise frequency references.",
                    es: "Los resonadores de cavidad son recintos metálicos que soportan patrones de ondas electromagnéticas estacionarias. Las frecuencias resonantes están determinadas por el requisito de que los campos electromagnéticos satisfagan condiciones de frontera en las paredes conductoras. Para una cavidad rectangular de longitud L, el modo más bajo tiene f₀ = c/2L. Los resonadores de cavidad ofrecen factores Q extremadamente altos (baja pérdida) a frecuencias de microondas, haciéndolos ideales para filtros, osciladores y referencias de frecuencia precisas.",
                    de: "Hohlraumresonatoren sind metallische Gehäuse, die stehende elektromagnetische Wellenmuster unterstützen. Die Resonanzfrequenzen werden durch die Anforderung bestimmt, dass elektromagnetische Felder Randbedingungen an leitenden Wänden erfüllen. Für einen rechteckigen Hohlraum der Länge L hat der niedrigste Modus f₀ = c/2L. Hohlraumresonatoren bieten extrem hohe Q-Faktoren (geringe Verluste) bei Mikrowellenfrequenzen, was sie ideal für Filter, Oszillatoren und präzise Frequenzreferenzen macht.",
                    nl: "Holtereso​natoren zijn metalen behuizingen die staande elektromagnetische golfpatronen ondersteunen. De resonantiefrequenties worden bepaald door de vereiste dat elektromagnetische velden randvoorwaarden aan geleidende wanden moeten voldoen. Voor een rechthoekige holte van lengte L heeft de laagste modus f₀ = c/2L. Holtereso​natoren bieden extreem hoge Q-factoren (lage verliezen) bij microgolffrequenties, waardoor ze ideaal zijn voor filters, oscillatoren en precieze frequentiereferenties."
                }
            },
            {
                question: {
                    en: "What is the Faraday cage effect and how does it provide electromagnetic shielding?",
                    es: "¿Qué es el efecto de la jaula de Faraday y cómo proporciona blindaje electromagnético?",
                    de: "Was ist der Faraday-Käfig-Effekt und wie bietet er elektromagnetische Abschirmung?",
                    nl: "Wat is het Faraday-kooi-effect en hoe biedt het elektromagnetische afscherming?"
                },
                options: [
                    {
                        en: "Electric fields inside a conducting enclosure are zero due to charge redistribution on the surface; external fields cannot penetrate the conductor's interior",
                        es: "Los campos eléctricos dentro de un recinto conductor son cero debido a la redistribución de carga en la superficie; los campos externos no pueden penetrar el interior del conductor",
                        de: "Elektrische Felder innerhalb einer leitenden Umhüllung sind null aufgrund von Ladungsumverteilung auf der Oberfläche; externe Felder können nicht in das Innere des Leiters eindringen",
                        nl: "Elektrische velden binnen een geleidende behuizing zijn nul door ladingsherverdeling op het oppervlak; externe velden kunnen niet het binnenste van de geleider binnendringen"
                    },
                    {
                        en: "The cage absorbs all electromagnetic energy and converts it to heat",
                        es: "La jaula absorbe toda la energía electromagnética y la convierte en calor",
                        de: "Der Käfig absorbiert alle elektromagnetische Energie und wandelt sie in Wärme um",
                        nl: "De kooi absorbeert alle elektromagnetische energie en zet het om in warmte"
                    },
                    {
                        en: "Magnetic fields are amplified inside the conductor to cancel external fields",
                        es: "Los campos magnéticos se amplifican dentro del conductor para cancelar campos externos",
                        de: "Magnetfelder werden im Leiter verstärkt, um externe Felder zu löschen",
                        nl: "Magnetische velden worden versterkt binnen de geleider om externe velden te annuleren"
                    },
                    {
                        en: "The Faraday cage only works for static electric fields, not time-varying fields",
                        es: "La jaula de Faraday solo funciona para campos eléctricos estáticos, no para campos variables en el tiempo",
                        de: "Der Faraday-Käfig funktioniert nur für statische elektrische Felder, nicht für zeitveränderliche Felder",
                        nl: "De Faraday-kooi werkt alleen voor statische elektrische velden, niet voor tijdvariërende velden"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "A Faraday cage works by redistributing electric charges on the conducting surface in response to external electric fields. This creates an internal field that exactly cancels the external field inside the conductor, resulting in zero electric field in the interior. For time-varying fields, skin effect limits penetration depth, providing good shielding at high frequencies.",
                    es: "Una jaula de Faraday funciona redistribuyendo cargas eléctricas en la superficie conductora en respuesta a campos eléctricos externos. Esto crea un campo interno que cancela exactamente el campo externo dentro del conductor, resultando en campo eléctrico cero en el interior. Para campos variables en el tiempo, el efecto pelicular limita la profundidad de penetración, proporcionando buen blindaje a altas frecuencias.",
                    de: "Ein Faraday-Käfig funktioniert durch Umverteilung elektrischer Ladungen auf der leitenden Oberfläche als Reaktion auf externe elektrische Felder. Dies erzeugt ein internes Feld, das das externe Feld im Inneren des Leiters genau aufhebt, was zu null elektrischem Feld im Inneren führt. Für zeitveränderliche Felder begrenzt der Skin-Effekt die Eindringtiefe und bietet gute Abschirmung bei hohen Frequenzen.",
                    nl: "Een Faraday-kooi werkt door elektrische ladingen te herverdelen op het geleidende oppervlak als reactie op externe elektrische velden. Dit creëert een intern veld dat het externe veld binnen de geleider precies annuleert, resulterend in nul elektrisch veld in het binnenste. Voor tijdvariërende velden beperkt het huideffect de penetratiediepte, wat goede afscherming biedt bij hoge frequenties."
                }
            },
            {
                question: {
                    en: "What causes the quantization of magnetic flux in superconducting loops, and what are flux pinning phenomena?",
                    es: "¿Qué causa la cuantización del flujo magnético en bucles superconductores, y qué son los fenómenos de anclaje de flujo?",
                    de: "Was verursacht die Quantisierung des magnetischen Flusses in supraleitenden Schleifen, und was sind Flussverankerungsphänomene?",
                    nl: "Wat veroorzaakt de kwantisering van magnetische flux in supergeleidende lussen, en wat zijn flux-pinning verschijnselen?"
                },
                options: [
                    {
                        en: "Single-valued wavefunction requirement quantizes flux as Φ = nΦ₀; flux pinning occurs when vortices get trapped at defects, leading to flux creep and critical current density",
                        es: "El requisito de función de onda univaluada cuantiza el flujo como Φ = nΦ₀; el anclaje de flujo ocurre cuando los vórtices quedan atrapados en defectos, llevando al arrastre de flujo y densidad de corriente crítica",
                        de: "Die Anforderung einer eindeutigen Wellenfunktion quantisiert den Fluss als Φ = nΦ₀; Flussverankerung tritt auf, wenn Wirbel an Defekten gefangen werden, was zu Flusskriechen und kritischer Stromdichte führt",
                        nl: "Eenduidige golffunctievereiste kwantiseert flux als Φ = nΦ₀; flux-pinning treedt op wanneer vortices gevangen raken bij defecten, wat leidt tot flux-kruip en kritische stroomdichtheid"
                    },
                    {
                        en: "Quantization is due to the relativistic mass increase of Cooper pairs",
                        es: "La cuantización se debe al aumento de masa relativista de los pares de Cooper",
                        de: "Quantisierung ist auf die relativistische Massenzunahme von Cooper-Paaren zurückzuführen",
                        nl: "Kwantisering is te wijten aan relativistische massa-toename van Cooper-paren"
                    },
                    {
                        en: "Flux quantization only occurs in Type I superconductors, not Type II",
                        es: "La cuantización de flujo solo ocurre en superconductores Tipo I, no Tipo II",
                        de: "Flussquantisierung tritt nur in Typ I Supraleitern auf, nicht in Typ II",
                        nl: "Flux-kwantisering treedt alleen op in Type I supergeleiders, niet Type II"
                    },
                    {
                        en: "Flux pinning is caused by thermal vibrations in the crystal lattice",
                        es: "El anclaje de flujo es causado por vibraciones térmicas en la red cristalina",
                        de: "Flussverankerung wird durch thermische Schwingungen im Kristallgitter verursacht",
                        nl: "Flux-pinning wordt veroorzaakt door thermische trillingen in het kristalrooster"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Magnetic flux quantization arises from the macroscopic quantum coherence of the superconducting state. The wavefunction must be single-valued around any closed loop, requiring Φ = nΦ₀ where Φ₀ = h/2e. In Type II superconductors, flux enters as quantized vortices. Pinning occurs when vortices become trapped at crystal defects, grain boundaries, or deliberately introduced pinning centers, which increases the critical current by preventing flux motion.",
                    es: "La cuantización del flujo magnético surge de la coherencia cuántica macroscópica del estado superconductor. La función de onda debe ser univaluada alrededor de cualquier bucle cerrado, requiriendo Φ = nΦ₀ donde Φ₀ = h/2e. En superconductores Tipo II, el flujo entra como vórtices cuantizados. El anclaje ocurre cuando los vórtices quedan atrapados en defectos cristalinos, límites de grano, o centros de anclaje introducidos deliberadamente, lo que aumenta la corriente crítica al prevenir el movimiento del flujo.",
                    de: "Magnetische Flussquantisierung entsteht aus der makroskopischen Quantenkohärenz des supraleitenden Zustands. Die Wellenfunktion muss um jeden geschlossenen Kreis eindeutig sein, was Φ = nΦ₀ erfordert, wobei Φ₀ = h/2e. In Typ II Supraleitern tritt Fluss als quantisierte Wirbel ein. Verankerung tritt auf, wenn Wirbel an Kristalldefekten, Korngrenzen oder absichtlich eingeführten Verankerungszentren gefangen werden, was den kritischen Strom durch Verhinderung der Flussbewegung erhöht.",
                    nl: "Magnetische flux-kwantisering ontstaat uit de macroscopische kwantumcoherentie van de supergeleidende toestand. De golffunctie moet eenduidig zijn rond elke gesloten lus, wat Φ = nΦ₀ vereist waarbij Φ₀ = h/2e. In Type II supergeleiders komt flux binnen als gekwantiseerde vortices. Pinning treedt op wanneer vortices gevangen raken bij kristaldefecten, korrelgrenzen, of opzettelijk geïntroduceerde pinning-centra, wat de kritische stroom verhoogt door flux-beweging te voorkomen."
                }
            },
            {
                question: {
                    en: "How do metamaterials achieve negative refractive index, and what unusual electromagnetic properties do they exhibit?",
                    es: "¿Cómo los metamateriales logran índice de refracción negativo, y qué propiedades electromagnéticas inusuales exhiben?",
                    de: "Wie erreichen Metamaterialien einen negativen Brechungsindex, und welche ungewöhnlichen elektromagnetischen Eigenschaften zeigen sie?",
                    nl: "Hoe bereiken metamaterialen negatieve brekingsindex, en welke ongewone elektromagnetische eigenschappen vertonen ze?"
                },
                options: [
                    {
                        en: "Engineered structures with ε < 0 and μ < 0 create negative refractive index n = -√(εμ), enabling reverse Doppler shift, negative phase velocity, and perfect lensing",
                        es: "Estructuras diseñadas con ε < 0 y μ < 0 crean índice de refracción negativo n = -√(εμ), habilitando desplazamiento Doppler reverso, velocidad de fase negativa, y lentes perfectas",
                        de: "Konstruierte Strukturen mit ε < 0 und μ < 0 erzeugen negativen Brechungsindex n = -√(εμ), was umgekehrte Doppler-Verschiebung, negative Phasengeschwindigkeit und perfekte Linsen ermöglicht",
                        nl: "Ontworpen structuren met ε < 0 en μ < 0 creëren negatieve brekingsindex n = -√(εμ), wat omgekeerde Doppler-verschuiving, negatieve fasesnelheid, en perfecte lenzen mogelijk maakt"
                    },
                    {
                        en: "Metamaterials use quantum tunneling effects to reverse electromagnetic propagation",
                        es: "Los metamateriales usan efectos de tunelamiento cuántico para revertir la propagación electromagnética",
                        de: "Metamaterialien nutzen Quantentunneleffekte, um elektromagnetische Ausbreitung umzukehren",
                        nl: "Metamaterialen gebruiken kwantumtunneling effecten om elektromagnetische voortplanting om te keren"
                    },
                    {
                        en: "Negative refractive index only occurs at optical frequencies, not microwaves",
                        es: "El índice de refracción negativo solo ocurre a frecuencias ópticas, no microondas",
                        de: "Negativer Brechungsindex tritt nur bei optischen Frequenzen auf, nicht bei Mikrowellen",
                        nl: "Negatieve brekingsindex treedt alleen op bij optische frequenties, niet microgolven"
                    },
                    {
                        en: "Metamaterials violate the laws of electromagnetism and energy conservation",
                        es: "Los metamateriales violan las leyes del electromagnetismo y la conservación de energía",
                        de: "Metamaterialien verletzen die Gesetze des Elektromagnetismus und der Energieerhaltung",
                        nl: "Metamaterialen schenden de wetten van elektromagnetisme en energiebehoud"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Metamaterials are artificially structured materials with subwavelength features that can exhibit both negative permittivity (ε < 0) and negative permeability (μ < 0). When both are negative, the refractive index n = √(εμ) becomes negative, leading to unusual phenomena: light bends backward at interfaces, Doppler shift is reversed, and 'perfect lenses' with resolution below the diffraction limit become theoretically possible.",
                    es: "Los metamateriales son materiales estructurados artificialmente con características sub-longitud de onda que pueden exhibir tanto permitividad negativa (ε < 0) como permeabilidad negativa (μ < 0). Cuando ambos son negativos, el índice de refracción n = √(εμ) se vuelve negativo, llevando a fenómenos inusuales: la luz se dobla hacia atrás en interfaces, el desplazamiento Doppler se invierte, y 'lentes perfectas' con resolución por debajo del límite de difracción se vuelven teóricamente posibles.",
                    de: "Metamaterialien sind künstlich strukturierte Materialien mit sub-wellenlängen Merkmalen, die sowohl negative Permittivität (ε < 0) als auch negative Permeabilität (μ < 0) aufweisen können. Wenn beide negativ sind, wird der Brechungsindex n = √(εμ) negativ, was zu ungewöhnlichen Phänomenen führt: Licht biegt rückwärts an Grenzflächen, Doppler-Verschiebung ist umgekehrt, und 'perfekte Linsen' mit Auflösung unter dem Beugungsgrenzwert werden theoretisch möglich.",
                    nl: "Metamaterialen zijn kunstmatig gestructureerde materialen met sub-golflengte kenmerken die zowel negatieve permittiviteit (ε < 0) als negatieve permeabiliteit (μ < 0) kunnen vertonen. Wanneer beide negatief zijn, wordt de brekingsindex n = √(εμ) negatief, wat leidt tot ongewone verschijnselen: licht buigt achterwaarts bij grensvlakken, Doppler-verschuiving is omgekeerd, en 'perfecte lenzen' met resolutie onder de diffractielimiet worden theoretisch mogelijk."
                }
            },
            {
                question: {
                    en: "What is the electromagnetic mass of a charged particle, and how does it relate to the concept of self-energy?",
                    es: "¿Qué es la masa electromagnética de una partícula cargada, y cómo se relaciona con el concepto de autoenergía?",
                    de: "Was ist die elektromagnetische Masse eines geladenen Teilchens, und wie bezieht sie sich auf das Konzept der Selbstenergie?",
                    nl: "Wat is de elektromagnetische massa van een geladen deeltje, en hoe verhoudt het zich tot het concept van zelfenergie?"
                },
                options: [
                    {
                        en: "The electromagnetic field energy E = ½ε₀E² around a charge contributes mass m = E/c² = q²/(6πε₀c²a) for a spherical charge of radius a, leading to the classical electron radius problem",
                        es: "La energía del campo electromagnético E = ½ε₀E² alrededor de una carga contribuye masa m = E/c² = q²/(6πε₀c²a) para una carga esférica de radio a, llevando al problema del radio clásico del electrón",
                        de: "Die elektromagnetische Feldenergie E = ½ε₀E² um eine Ladung trägt Masse bei m = E/c² = q²/(6πε₀c²a) für eine sphärische Ladung des Radius a, was zum klassischen Elektronenradius-Problem führt",
                        nl: "De elektromagnetische veldenergie E = ½ε₀E² rond een lading draagt massa bij m = E/c² = q²/(6πε₀c²a) voor een bolvormige lading van radius a, wat leidt tot het klassieke elektronenradius-probleem"
                    },
                    {
                        en: "Electromagnetic mass is always larger than the particle's rest mass",
                        es: "La masa electromagnética siempre es mayor que la masa en reposo de la partícula",
                        de: "Elektromagnetische Masse ist immer größer als die Ruhemasse des Teilchens",
                        nl: "Elektromagnetische massa is altijd groter dan de rustmassa van het deeltje"
                    },
                    {
                        en: "Only moving charges have electromagnetic mass due to magnetic field effects",
                        es: "Solo las cargas en movimiento tienen masa electromagnética debido a efectos de campo magnético",
                        de: "Nur bewegte Ladungen haben elektromagnetische Masse aufgrund von Magnetfeldeffekten",
                        nl: "Alleen bewegende ladingen hebben elektromagnetische massa door magnetische veldeffecten"
                    },
                    {
                        en: "Electromagnetic mass is a purely quantum mechanical effect with no classical analog",
                        es: "La masa electromagnética es un efecto puramente mecánico cuántico sin análogo clásico",
                        de: "Elektromagnetische Masse ist ein rein quantenmechanischer Effekt ohne klassisches Analogon",
                        nl: "Elektromagnetische massa is een puur kwantummechanisch effect zonder klassieke analoog"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The electromagnetic field of a charged particle carries energy, which by E=mc² corresponds to mass. For a point charge, this leads to infinite self-energy (the classical electron radius problem). Real particles are described by quantum field theory, where renormalization procedures handle these infinities. The concept highlights the deep connection between field energy and inertia, predating Einstein's mass-energy equivalence.",
                    es: "El campo electromagnético de una partícula cargada lleva energía, que por E=mc² corresponde a masa. Para una carga puntual, esto lleva a autoenergía infinita (el problema del radio clásico del electrón). Las partículas reales se describen por teoría cuántica de campos, donde procedimientos de renormalización manejan estas infinitudes. El concepto resalta la conexión profunda entre energía de campo e inercia, precediendo la equivalencia masa-energía de Einstein.",
                    de: "Das elektromagnetische Feld eines geladenen Teilchens trägt Energie, die durch E=mc² Masse entspricht. Für eine Punktladung führt dies zu unendlicher Selbstenergie (das klassische Elektronenradius-Problem). Reale Teilchen werden durch Quantenfeldtheorie beschrieben, wo Renormierungsverfahren diese Unendlichkeiten behandeln. Das Konzept hebt die tiefe Verbindung zwischen Feldenergie und Trägheit hervor, die Einsteins Masse-Energie-Äquivalenz vorausgeht.",
                    nl: "Het elektromagnetisch veld van een geladen deeltje draagt energie, die door E=mc² overeenkomt met massa. Voor een puntlading leidt dit tot oneindige zelfenergie (het klassieke elektronenradius-probleem). Echte deeltjes worden beschreven door kwantumveldtheorie, waar renormalisatieprocedures deze oneindigheidswaarden behandelen. Het concept benadrukt de diepe verbinding tussen veldenergie en inertie, voorafgaand aan Einstein's massa-energie equivalentie."
                }
            },
            {
                question: {
                    en: "What is electromagnetic induction heating, and how does frequency affect the heating depth and efficiency?",
                    es: "¿Qué es el calentamiento por inducción electromagnética, y cómo afecta la frecuencia la profundidad de calentamiento y eficiencia?",
                    de: "Was ist elektromagnetische Induktionsheizung, und wie beeinflusst die Frequenz die Heiztiefe und Effizienz?",
                    nl: "Wat is elektromagnetische inductieverwarming, en hoe beïnvloedt frequentie de verwarmingsdiepte en efficiëntie?"
                },
                options: [
                    {
                        en: "Alternating magnetic fields induce eddy currents that dissipate as Joule heat; higher frequencies penetrate less (skin effect) but heat surfaces more efficiently",
                        es: "Los campos magnéticos alternantes inducen corrientes de Foucault que se disipan como calor Joule; frecuencias más altas penetran menos (efecto pelicular) pero calientan superficies más eficientemente",
                        de: "Alternierende Magnetfelder induzieren Wirbelströme, die als Joule-Wärme dissipieren; höhere Frequenzen dringen weniger tief ein (Skin-Effekt), heizen aber Oberflächen effizienter",
                        nl: "Wisselende magnetische velden induceren wervelstromen die dissiperen als Joule-warmte; hogere frequenties penetreren minder (huideffect) maar verwarmen oppervlakken efficiënter"
                    },
                    {
                        en: "Induction heating works by directly heating the magnetic dipoles in the material",
                        es: "El calentamiento por inducción funciona calentando directamente los dipolos magnéticos en el material",
                        de: "Induktionsheizung funktioniert durch direktes Erhitzen der magnetischen Dipole im Material",
                        nl: "Inductieverwarming werkt door directe verwarming van de magnetische dipolen in het materiaal"
                    },
                    {
                        en: "Only ferromagnetic materials can be heated by electromagnetic induction",
                        es: "Solo los materiales ferromagnéticos pueden ser calentados por inducción electromagnética",
                        de: "Nur ferromagnetische Materialien können durch elektromagnetische Induktion erhitzt werden",
                        nl: "Alleen ferromagnetische materialen kunnen worden verwarmd door elektromagnetische inductie"
                    },
                    {
                        en: "Lower frequencies always provide more efficient heating than higher frequencies",
                        es: "Las frecuencias más bajas siempre proporcionan calentamiento más eficiente que las frecuencias más altas",
                        de: "Niedrigere Frequenzen bieten immer effizientere Heizung als höhere Frequenzen",
                        nl: "Lagere frequenties bieden altijd efficiëntere verwarming dan hogere frequenties"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Induction heating works by generating time-varying magnetic fields that induce eddy currents in conducting materials. These currents encounter resistance and dissipate energy as heat (P = I²R). The skin effect causes higher frequencies to concentrate currents near the surface, enabling rapid surface heating but limiting penetration depth. Lower frequencies penetrate deeper but heat more slowly. Optimal frequency depends on material properties and desired heating pattern.",
                    es: "El calentamiento por inducción funciona generando campos magnéticos variables en el tiempo que inducen corrientes de Foucault en materiales conductores. Estas corrientes encuentran resistencia y disipan energía como calor (P = I²R). El efecto pelicular hace que frecuencias más altas concentren corrientes cerca de la superficie, permitiendo calentamiento rápido de superficie pero limitando la profundidad de penetración. Frecuencias más bajas penetran más profundo pero calientan más lentamente. La frecuencia óptima depende de las propiedades del material y el patrón de calentamiento deseado.",
                    de: "Induktionsheizung funktioniert durch Erzeugung zeitveränderlicher Magnetfelder, die Wirbelströme in leitenden Materialien induzieren. Diese Ströme treffen auf Widerstand und dissipieren Energie als Wärme (P = I²R). Der Skin-Effekt bewirkt, dass höhere Frequenzen Ströme nahe der Oberfläche konzentrieren, was schnelle Oberflächenheizung ermöglicht, aber die Eindringtiefe begrenzt. Niedrigere Frequenzen dringen tiefer ein, heizen aber langsamer. Die optimale Frequenz hängt von Materialeigenschaften und gewünschtem Heizmuster ab.",
                    nl: "Inductieverwarming werkt door tijdvariërende magnetische velden te genereren die wervelstromen induceren in geleidende materialen. Deze stromen ondervinden weerstand en dissiperen energie als warmte (P = I²R). Het huideffect zorgt ervoor dat hogere frequenties stromen concentreren nabij het oppervlak, wat snelle oppervlakteverwarming mogelijk maakt maar penetratiediepte beperkt. Lagere frequenties penetreren dieper maar verwarmen langzamer. Optimale frequentie hangt af van materiaaleigenschappen en gewenst verwarmingspatroon."
                }
            },
            {
                question: {
                    en: "How does the concept of impedance unify resistance, reactance, and phase relationships in AC circuits?",
                    es: "¿Cómo el concepto de impedancia unifica resistencia, reactancia y relaciones de fase en circuitos AC?",
                    de: "Wie vereint das Konzept der Impedanz Widerstand, Reaktanz und Phasenbeziehungen in AC-Schaltungen?",
                    nl: "Hoe verenigt het concept van impedantie weerstand, reactantie en faseverhoudingen in AC-circuits?"
                },
                options: [
                    {
                        en: "Complex impedance Z = R + j(XL - XC) = |Z|e^(jφ) captures magnitude and phase; power relationships follow P = I²R, Q = I²X, S = I²|Z|",
                        es: "La impedancia compleja Z = R + j(XL - XC) = |Z|e^(jφ) captura magnitud y fase; las relaciones de potencia siguen P = I²R, Q = I²X, S = I²|Z|",
                        de: "Komplexe Impedanz Z = R + j(XL - XC) = |Z|e^(jφ) erfasst Betrag und Phase; Leistungsbeziehungen folgen P = I²R, Q = I²X, S = I²|Z|",
                        nl: "Complexe impedantie Z = R + j(XL - XC) = |Z|e^(jφ) vangt magnitude en fase; vermogensrelaties volgen P = I²R, Q = I²X, S = I²|Z|"
                    },
                    {
                        en: "Impedance is simply the sum of resistance and reactance: Z = R + XL + XC",
                        es: "La impedancia es simplemente la suma de resistencia y reactancia: Z = R + XL + XC",
                        de: "Impedanz ist einfach die Summe von Widerstand und Reaktanz: Z = R + XL + XC",
                        nl: "Impedantie is eenvoudig de som van weerstand en reactantie: Z = R + XL + XC"
                    },
                    {
                        en: "Impedance only applies to purely resistive circuits, not reactive components",
                        es: "La impedancia solo se aplica a circuitos puramente resistivos, no componentes reactivos",
                        de: "Impedanz gilt nur für rein resistive Schaltungen, nicht für reaktive Komponenten",
                        nl: "Impedantie geldt alleen voor puur resistieve circuits, niet reactieve componenten"
                    },
                    {
                        en: "Phase relationships are independent of impedance calculations",
                        es: "Las relaciones de fase son independientes de los cálculos de impedancia",
                        de: "Phasenbeziehungen sind unabhängig von Impedanzberechnungen",
                        nl: "Faseverhoudingen zijn onafhankelijk van impedantieberekeningen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Impedance Z = R + jX is a complex number that elegantly unifies all AC circuit analysis. The real part R represents resistance (energy dissipation), while the imaginary part X = XL - XC represents net reactance (energy storage). The magnitude |Z| determines current amplitude, while the phase angle φ = arctan(X/R) determines the phase relationship between voltage and current. This enables comprehensive analysis using complex exponentials and phasors.",
                    es: "La impedancia Z = R + jX es un número complejo que unifica elegantemente todo el análisis de circuitos AC. La parte real R representa resistencia (disipación de energía), mientras que la parte imaginaria X = XL - XC representa reactancia neta (almacenamiento de energía). La magnitud |Z| determina la amplitud de corriente, mientras que el ángulo de fase φ = arctan(X/R) determina la relación de fase entre voltaje y corriente. Esto permite análisis comprensivo usando exponenciales complejas y fasores.",
                    de: "Impedanz Z = R + jX ist eine komplexe Zahl, die elegant alle AC-Schaltungsanalyse vereint. Der Realteil R repräsentiert Widerstand (Energiedissipation), während der Imaginärteil X = XL - XC Netto-Reaktanz (Energiespeicherung) darstellt. Der Betrag |Z| bestimmt Stromamplitude, während der Phasenwinkel φ = arctan(X/R) die Phasenbeziehung zwischen Spannung und Strom bestimmt. Dies ermöglicht umfassende Analyse mit komplexen Exponentialfunktionen und Zeigern.",
                    nl: "Impedantie Z = R + jX is een complex getal dat elegant alle AC-circuitanalyse verenigt. Het reële deel R vertegenwoordigt weerstand (energiedissipatie), terwijl het imaginaire deel X = XL - XC netto-reactantie (energieopslag) vertegenwoordigt. De magnitude |Z| bepaalt stroomamplitude, terwijl de fasehoek φ = arctan(X/R) de faserelatie tussen spanning en stroom bepaalt. Dit maakt uitgebreide analyse mogelijk met complexe exponentialen en fasoren."
                }
            },
            {
                question: {
                    en: "What is the physical mechanism behind ferroelectric materials and their spontaneous electric polarization?",
                    es: "¿Cuál es el mecanismo físico detrás de los materiales ferroeléctricos y su polarización eléctrica espontánea?",
                    de: "Was ist der physikalische Mechanismus hinter ferroelektrischen Materialien und ihrer spontanen elektrischen Polarisation?",
                    nl: "Wat is het fysieke mechanisme achter ferro-elektrische materialen en hun spontane elektrische polarisatie?"
                },
                options: [
                    {
                        en: "Crystal structure asymmetry creates permanent electric dipoles; below Curie temperature, dipoles align spontaneously creating domains with switchable polarization direction",
                        es: "La asimetría de la estructura cristalina crea dipolos eléctricos permanentes; por debajo de la temperatura de Curie, los dipolos se alinean espontáneamente creando dominios con dirección de polarización conmutable",
                        de: "Kristallstrukturasymmetrie erzeugt permanente elektrische Dipole; unter der Curie-Temperatur richten sich Dipole spontan aus und erzeugen Domänen mit schaltbarer Polarisationsrichtung",
                        nl: "Kristalstructuurasymmetrie creëert permanente elektrische dipolen; onder Curie-temperatuur richten dipolen zich spontaan uit, wat domeinen creëert met schakelbare polarisatierichting"
                    },
                    {
                        en: "Ferroelectric polarization is caused by free electron movement like in conductors",
                        es: "La polarización ferroeléctrica es causada por el movimiento de electrones libres como en conductores",
                        de: "Ferroelektrische Polarisation wird durch freie Elektronenbewegung wie in Leitern verursacht",
                        nl: "Ferro-elektrische polarisatie wordt veroorzaakt door vrije elektronenbeweging zoals in geleiders"
                    },
                    {
                        en: "Only magnetic materials can exhibit ferroelectric properties",
                        es: "Solo los materiales magnéticos pueden exhibir propiedades ferroeléctricas",
                        de: "Nur magnetische Materialien können ferroelektrische Eigenschaften zeigen",
                        nl: "Alleen magnetische materialen kunnen ferro-elektrische eigenschappen vertonen"
                    },
                    {
                        en: "Ferroelectric polarization disappears completely above absolute zero temperature",
                        es: "La polarización ferroeléctrica desaparece completamente por encima de la temperatura del cero absoluto",
                        de: "Ferroelektrische Polarisation verschwindet vollständig oberhalb der absoluten Nulltemperatur",
                        nl: "Ferro-elektrische polarisatie verdwijnt volledig boven absolute nultemperatuur"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Ferroelectricity arises from non-centrosymmetric crystal structures where positive and negative charge centers don't coincide, creating permanent electric dipoles. Below the Curie temperature, these dipoles spontaneously align due to local field interactions, forming domains with uniform polarization. The polarization can be reversed by applying an external electric field, creating hysteresis loops similar to ferromagnetic materials. Common examples include BaTiO₃ and PZT ceramics.",
                    es: "La ferroelectricidad surge de estructuras cristalinas no centrosimétricas donde los centros de carga positiva y negativa no coinciden, creando dipolos eléctricos permanentes. Por debajo de la temperatura de Curie, estos dipolos se alinean espontáneamente debido a interacciones de campo local, formando dominios con polarización uniforme. La polarización puede revertirse aplicando un campo eléctrico externo, creando bucles de histéresis similares a materiales ferromagnéticos. Ejemplos comunes incluyen BaTiO₃ y cerámicas PZT.",
                    de: "Ferroelektrizität entsteht aus nicht-zentrosymmetrischen Kristallstrukturen, wo positive und negative Ladungszentren nicht zusammenfallen und permanente elektrische Dipole erzeugen. Unter der Curie-Temperatur richten sich diese Dipole spontan aufgrund lokaler Feldwechselwirkungen aus und bilden Domänen mit uniformer Polarisation. Die Polarisation kann durch Anlegen eines externen elektrischen Feldes umgekehrt werden, wodurch Hystereseschleifen ähnlich ferromagnetischen Materialien entstehen. Häufige Beispiele sind BaTiO₃ und PZT-Keramiken.",
                    nl: "Ferro-elektriciteit ontstaat uit niet-centrosymmetrische kristalstructuren waar positieve en negatieve ladingscentra niet samenvallen, wat permanente elektrische dipolen creëert. Onder de Curie-temperatuur richten deze dipolen zich spontaan uit door lokale veldinteracties, wat domeinen vormt met uniforme polarisatie. De polarisatie kan worden omgekeerd door een extern elektrisch veld toe te passen, wat hysteresislussen creëert vergelijkbaar met ferromagnetische materialen. Veel voorkomende voorbeelden zijn BaTiO₃ en PZT-keramiek."
                }
            },
            {
                question: {
                    en: "How does electromagnetic wave polarization affect antenna design and wireless communication systems?",
                    es: "¿Cómo afecta la polarización de ondas electromagnéticas el diseño de antenas y sistemas de comunicación inalámbrica?",
                    de: "Wie beeinflusst die elektromagnetische Wellenpolarisation das Antennendesign und drahtlose Kommunikationssysteme?",
                    nl: "Hoe beïnvloedt elektromagnetische golfpolarisatie antenneontwerp en draadloze communicatiesystemen?"
                },
                options: [
                    {
                        en: "Polarization mismatch causes coupling loss; linear, circular, and elliptical polarizations require different antenna geometries; polarization diversity improves signal reception in multipath environments",
                        es: "El desajuste de polarización causa pérdida de acoplamiento; polarizaciones lineal, circular y elíptica requieren diferentes geometrías de antena; la diversidad de polarización mejora la recepción de señal en ambientes de trayectoria múltiple",
                        de: "Polarisationsfehlpassung verursacht Kopplungsverlust; lineare, zirkulare und elliptische Polarisationen erfordern verschiedene Antennengeometrien; Polarisationsdiversität verbessert Signalempfang in Mehrweg-Umgebungen",
                        nl: "Polarisatie-mismatch veroorzaakt koppelingsverlies; lineaire, circulaire en elliptische polarisaties vereisen verschillende antennegeometrieën; polarisatiediversiteit verbetert signaalreceptie in multipath-omgevingen"
                    },
                    {
                        en: "All electromagnetic waves have the same polarization regardless of frequency",
                        es: "Todas las ondas electromagnéticas tienen la misma polarización independientemente de la frecuencia",
                        de: "Alle elektromagnetischen Wellen haben dieselbe Polarisation unabhängig von der Frequenz",
                        nl: "Alle elektromagnetische golven hebben dezelfde polarisatie ongeacht frequentie"
                    },
                    {
                        en: "Antenna polarization is determined only by the transmitter power level",
                        es: "La polarización de la antena está determinada solo por el nivel de potencia del transmisor",
                        de: "Antennenpolarisation wird nur durch die Sendeleistung bestimmt",
                        nl: "Antennepolarisatie wordt alleen bepaald door het zendervermogenniveau"
                    },
                    {
                        en: "Circular polarization cannot be achieved with practical antenna designs",
                        es: "La polarización circular no se puede lograr con diseños prácticos de antena",
                        de: "Zirkulare Polarisation kann nicht mit praktischen Antennendesigns erreicht werden",
                        nl: "Circulaire polarisatie kan niet worden bereikt met praktische antenneontwerpen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Electromagnetic wave polarization describes the orientation of the electric field vector. Antennas are naturally polarized based on their geometry: linear antennas (dipoles) produce linear polarization, while helical or crossed-dipole antennas can produce circular polarization. Polarization mismatch between transmit and receive antennas causes signal loss. In mobile communications, polarization diversity is used to combat multipath fading, as different polarizations experience uncorrelated fading.",
                    es: "La polarización de ondas electromagnéticas describe la orientación del vector de campo eléctrico. Las antenas están naturalmente polarizadas basadas en su geometría: antenas lineales (dipolos) producen polarización lineal, mientras que antenas helicoidales o de dipolo cruzado pueden producir polarización circular. El desajuste de polarización entre antenas de transmisión y recepción causa pérdida de señal. En comunicaciones móviles, la diversidad de polarización se usa para combatir el desvanecimiento por trayectoria múltiple, ya que diferentes polarizaciones experimentan desvanecimiento no correlacionado.",
                    de: "Elektromagnetische Wellenpolarisation beschreibt die Orientierung des elektrischen Feldvektors. Antennen sind natürlich polarisiert basierend auf ihrer Geometrie: lineare Antennen (Dipole) erzeugen lineare Polarisation, während spiralförmige oder gekreuzte Dipolantennen zirkulare Polarisation erzeugen können. Polarisationsfehlpassung zwischen Sende- und Empfangsantennen verursacht Signalverlust. In mobilen Kommunikationen wird Polarisationsdiversität verwendet, um Mehrweg-Fading zu bekämpfen, da verschiedene Polarisationen unkorreliertes Fading erfahren.",
                    nl: "Elektromagnetische golfpolarisatie beschrijft de oriëntatie van de elektrische veldvector. Antennes zijn natuurlijk gepolariseerd gebaseerd op hun geometrie: lineaire antennes (dipolen) produceren lineaire polarisatie, terwijl spiraalvormige of gekruiste-dipool antennes circulaire polarisatie kunnen produceren. Polarisatie-mismatch tussen zend- en ontvangstantennes veroorzaakt signaalverlies. In mobiele communicaties wordt polarisatiediversiteit gebruikt om multipath-fading te bestrijden, omdat verschillende polarisaties ongecorreleerde fading ervaren."
                }
            },
            {
                question: {
                    en: "What causes the critical current density in superconductors, and how do flux vortices limit current flow?",
                    es: "¿Qué causa la densidad de corriente crítica en superconductores, y cómo los vórtices de flujo limitan el flujo de corriente?",
                    de: "Was verursacht die kritische Stromdichte in Supraleitern, und wie begrenzen Flusswirbel den Stromfluss?",
                    nl: "Wat veroorzaakt de kritieke stroomdichtheid in supergeleiders, en hoe beperken flux-vortices de stroomstroom?"
                },
                options: [
                    {
                        en: "Critical current Jc occurs when magnetic field from current equals lower critical field Hc1; above Jc, flux vortices move and create resistance via flux flow",
                        es: "La corriente crítica Jc ocurre cuando el campo magnético de la corriente iguala el campo crítico inferior Hc1; por encima de Jc, los vórtices de flujo se mueven y crean resistencia vía flujo de flujo",
                        de: "Kritischer Strom Jc tritt auf, wenn das Magnetfeld vom Strom dem unteren kritischen Feld Hc1 entspricht; über Jc bewegen sich Flusswirbel und erzeugen Widerstand über Flussfluss",
                        nl: "Kritieke stroom Jc treedt op wanneer magnetisch veld van stroom gelijk is aan lager kritiek veld Hc1; boven Jc bewegen flux-vortices en creëren weerstand via flux-stroom"
                    },
                    {
                        en: "Critical current is limited only by the physical cross-sectional area of the superconductor",
                        es: "La corriente crítica está limitada solo por el área de sección transversal física del superconductor",
                        de: "Kritischer Strom ist nur durch die physische Querschnittsfläche des Supraleiters begrenzt",
                        nl: "Kritieke stroom wordt alleen beperkt door de fysieke dwarsdoorsnedeoppervlakte van de supergeleider"
                    },
                    {
                        en: "Superconductors can carry unlimited current without any critical values",
                        es: "Los superconductores pueden transportar corriente ilimitada sin valores críticos",
                        de: "Supraleiter können unbegrenzten Strom ohne kritische Werte tragen",
                        nl: "Supergeleiders kunnen onbeperkte stroom dragen zonder kritieke waarden"
                    },
                    {
                        en: "Critical current density is independent of temperature and magnetic field",
                        es: "La densidad de corriente crítica es independiente de la temperatura y el campo magnético",
                        de: "Kritische Stromdichte ist unabhängig von Temperatur und Magnetfeld",
                        nl: "Kritieke stroomdichtheid is onafhankelijk van temperatuur en magnetisch veld"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The critical current density Jc represents the maximum current a superconductor can carry without resistance. It occurs when the self-generated magnetic field reaches the lower critical field Hc1, allowing flux penetration as quantized vortices in Type II superconductors. Above Jc, these vortices become mobile under the Lorentz force, creating resistance through flux flow. Pinning centers (defects, grain boundaries) can increase Jc by immobilizing vortices.",
                    es: "La densidad de corriente crítica Jc representa la corriente máxima que un superconductor puede transportar sin resistencia. Ocurre cuando el campo magnético autogenerado alcanza el campo crítico inferior Hc1, permitiendo penetración de flujo como vórtices cuantizados en superconductores Tipo II. Por encima de Jc, estos vórtices se vuelven móviles bajo la fuerza de Lorentz, creando resistencia a través del flujo de flujo. Los centros de anclaje (defectos, límites de grano) pueden aumentar Jc inmovilizando vórtices.",
                    de: "Die kritische Stromdichte Jc stellt den maximalen Strom dar, den ein Supraleiter ohne Widerstand tragen kann. Sie tritt auf, wenn das selbsterzeugte Magnetfeld das untere kritische Feld Hc1 erreicht und Flusseindringung als quantisierte Wirbel in Typ II Supraleitern ermöglicht. Über Jc werden diese Wirbel unter der Lorentz-Kraft mobil und erzeugen Widerstand durch Flussfluss. Verankerungszentren (Defekte, Korngrenzen) können Jc erhöhen, indem sie Wirbel immobilisieren.",
                    nl: "De kritieke stroomdichtheid Jc vertegenwoordigt de maximale stroom die een supergeleider zonder weerstand kan dragen. Het treedt op wanneer het zelfgegenereerde magnetisch veld het lagere kritieke veld Hc1 bereikt, wat flux-penetratie als gekwantiseerde vortices in Type II supergeleiders toestaat. Boven Jc worden deze vortices mobiel onder de Lorentz-kracht, wat weerstand creëert door flux-stroom. Pinning-centra (defecten, korrelgrenzen) kunnen Jc verhogen door vortices te immobiliseren."
                }
            },
            {
                question: {
                    en: "How does the plasma frequency determine the electromagnetic response of metals and why do they become transparent at high frequencies?",
                    es: "¿Cómo la frecuencia del plasma determina la respuesta electromagnética de los metales y por qué se vuelven transparentes a altas frecuencias?",
                    de: "Wie bestimmt die Plasmafrequenz die elektromagnetische Antwort von Metallen und warum werden sie bei hohen Frequenzen transparent?",
                    nl: "Hoe bepaalt de plasmafrequentie de elektromagnetische respons van metalen en waarom worden ze transparant bij hoge frequenties?"
                },
                options: [
                    {
                        en: "Plasma frequency ωp = √(ne²/ε₀m) separates opaque (ω < ωp) from transparent (ω > ωp) regions; above ωp, free electrons cannot respond to rapid field oscillations",
                        es: "La frecuencia del plasma ωp = √(ne²/ε₀m) separa regiones opacas (ω < ωp) de transparentes (ω > ωp); por encima de ωp, los electrones libres no pueden responder a oscilaciones rápidas de campo",
                        de: "Plasmafrequenz ωp = √(ne²/ε₀m) trennt undurchsichtige (ω < ωp) von transparenten (ω > ωp) Bereichen; über ωp können freie Elektronen nicht auf schnelle Feldschwingungen reagieren",
                        nl: "Plasmafrequentie ωp = √(ne²/ε₀m) scheidt ondoorzichtige (ω < ωp) van transparante (ω > ωp) gebieden; boven ωp kunnen vrije elektronen niet reageren op snelle veldoscillaties"
                    },
                    {
                        en: "Metals are always opaque regardless of frequency due to their metallic bonding",
                        es: "Los metales son siempre opacos independientemente de la frecuencia debido a su enlace metálico",
                        de: "Metalle sind aufgrund ihrer metallischen Bindung immer undurchsichtig, unabhängig von der Frequenz",
                        nl: "Metalen zijn altijd ondoorzichtig ongeacht frequentie vanwege hun metaalverbinding"
                    },
                    {
                        en: "Plasma frequency only applies to ionized gases, not solid metals",
                        es: "La frecuencia del plasma solo se aplica a gases ionizados, no metales sólidos",
                        de: "Plasmafrequenz gilt nur für ionisierte Gase, nicht für feste Metalle",
                        nl: "Plasmafrequentie geldt alleen voor geïoniseerde gassen, niet vaste metalen"
                    },
                    {
                        en: "Higher plasma frequency always means better electrical conductivity",
                        es: "Mayor frecuencia de plasma siempre significa mejor conductividad eléctrica",
                        de: "Höhere Plasmafrequenz bedeutet immer bessere elektrische Leitfähigkeit",
                        nl: "Hogere plasmafrequentie betekent altijd betere elektrische geleidbaarheid"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The plasma frequency ωp represents the natural oscillation frequency of free electrons in a metal. Below ωp, electromagnetic waves are strongly reflected (metals appear shiny), while above ωp, they become transparent. This occurs because high-frequency fields oscillate too rapidly for the electron plasma to respond effectively. The transition typically occurs in the ultraviolet range for most metals, explaining why they appear opaque to visible light but can be transparent to X-rays.",
                    es: "La frecuencia del plasma ωp representa la frecuencia de oscilación natural de electrones libres en un metal. Por debajo de ωp, las ondas electromagnéticas son fuertemente reflejadas (los metales parecen brillantes), mientras que por encima de ωp, se vuelven transparentes. Esto ocurre porque los campos de alta frecuencia oscilan muy rápidamente para que el plasma de electrones responda efectivamente. La transición típicamente ocurre en el rango ultravioleta para la mayoría de metales, explicando por qué parecen opacos a la luz visible pero pueden ser transparentes a los rayos X.",
                    de: "Die Plasmafrequenz ωp stellt die natürliche Schwingungsfrequenz freier Elektronen in einem Metall dar. Unter ωp werden elektromagnetische Wellen stark reflektiert (Metalle erscheinen glänzend), während sie über ωp transparent werden. Dies tritt auf, weil hochfrequente Felder zu schnell oszillieren, als dass das Elektronenplasma effektiv reagieren könnte. Der Übergang tritt typischerweise im ultravioletten Bereich für die meisten Metalle auf, was erklärt, warum sie für sichtbares Licht undurchsichtig erscheinen, aber für Röntgenstrahlen transparent sein können.",
                    nl: "De plasmafrequentie ωp vertegenwoordigt de natuurlijke oscillatiefrequentie van vrije elektronen in een metaal. Onder ωp worden elektromagnetische golven sterk gereflecteerd (metalen lijken glanzend), terwijl ze boven ωp transparant worden. Dit treedt op omdat hoogfrequente velden te snel oscilleren voor het elektronenplasma om effectief te reageren. De overgang treedt typisch op in het ultraviolette bereik voor de meeste metalen, wat verklaart waarom ze ondoorzichtig lijken voor zichtbaar licht maar transparant kunnen zijn voor röntgenstralen."
                }
            },
            {
                question: {
                    en: "What determines the quality factor (Q) in electromagnetic resonators, and how does it relate to energy storage and loss mechanisms?",
                    es: "¿Qué determina el factor de calidad (Q) en resonadores electromagnéticos, y cómo se relaciona con el almacenamiento de energía y mecanismos de pérdida?",
                    de: "Was bestimmt den Qualitätsfaktor (Q) in elektromagnetischen Resonatoren, und wie bezieht er sich auf Energiespeicherung und Verlustmechanismen?",
                    nl: "Wat bepaalt de kwaliteitsfactor (Q) in elektromagnetische resonators, en hoe verhoudt het zich tot energieopslag en verlies­mechanismen?"
                },
                options: [
                    {
                        en: "Q = ωU/P = 2π(stored energy)/(energy lost per cycle); high Q requires low loss mechanisms like conductor losses, dielectric losses, and radiation losses",
                        es: "Q = ωU/P = 2π(energía almacenada)/(energía perdida por ciclo); Q alto requiere mecanismos de pérdida bajos como pérdidas de conductor, pérdidas dieléctricas, y pérdidas por radiación",
                        de: "Q = ωU/P = 2π(gespeicherte Energie)/(Energie pro Zyklus verloren); hohe Q erfordert niedrige Verlustmechanismen wie Leiterverluste, dielektrische Verluste und Strahlungsverluste",
                        nl: "Q = ωU/P = 2π(opgeslagen energie)/(energie verloren per cyclus); hoge Q vereist lage verliesmechanismen zoals geleidverliezen, diëlektrische verliezen, en stralingsverliezen"
                    },
                    {
                        en: "Q factor is determined only by the resonator's physical dimensions",
                        es: "El factor Q está determinado solo por las dimensiones físicas del resonador",
                        de: "Der Q-Faktor wird nur durch die physischen Abmessungen des Resonators bestimmt",
                        nl: "Q-factor wordt alleen bepaald door de fysieke afmetingen van de resonator"
                    },
                    {
                        en: "Higher Q always means higher resonant frequency",
                        es: "Q más alto siempre significa frecuencia resonante más alta",
                        de: "Höhere Q bedeutet immer höhere Resonanzfrequenz",
                        nl: "Hogere Q betekent altijd hogere resonantiefrequentie"
                    },
                    {
                        en: "Q factor has no relationship to energy storage or losses",
                        es: "El factor Q no tiene relación con el almacenamiento de energía o pérdidas",
                        de: "Q-Faktor hat keine Beziehung zu Energiespeicherung oder Verlusten",
                        nl: "Q-factor heeft geen relatie tot energieopslag of verliezen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The quality factor Q measures how 'sharp' a resonance is and directly relates to energy efficiency. Q = 2π × (energy stored)/(energy lost per cycle) = ωU/P. High Q resonators store energy efficiently with minimal losses. Loss mechanisms include: conductor resistance (surface currents in metals), dielectric loss (tan δ in insulators), and radiation losses (electromagnetic leakage). Cavity resonators achieve very high Q by minimizing these losses through perfect conductors and careful geometry.",
                    es: "El factor de calidad Q mide qué tan 'aguda' es una resonancia y se relaciona directamente con la eficiencia energética. Q = 2π × (energía almacenada)/(energía perdida por ciclo) = ωU/P. Resonadores de Q alto almacenan energía eficientemente con pérdidas mínimas. Los mecanismos de pérdida incluyen: resistencia del conductor (corrientes superficiales en metales), pérdida dieléctrica (tan δ en aislantes), y pérdidas por radiación (fuga electromagnética). Los resonadores de cavidad logran Q muy alto minimizando estas pérdidas a través de conductores perfectos y geometría cuidadosa.",
                    de: "Der Qualitätsfaktor Q misst, wie 'scharf' eine Resonanz ist und bezieht sich direkt auf Energieeffizienz. Q = 2π × (gespeicherte Energie)/(Energie pro Zyklus verloren) = ωU/P. Hohe Q Resonatoren speichern Energie effizient mit minimalen Verlusten. Verlustmechanismen umfassen: Leiterwiderstand (Oberflächenströme in Metallen), dielektrische Verluste (tan δ in Isolatoren) und Strahlungsverluste (elektromagnetische Leckage). Hohlraumresonatoren erreichen sehr hohe Q durch Minimierung dieser Verluste über perfekte Leiter und sorgfältige Geometrie.",
                    nl: "De kwaliteitsfactor Q meet hoe 'scherp' een resonantie is en heeft direct betrekking op energie-efficiëntie. Q = 2π × (opgeslagen energie)/(energie verloren per cyclus) = ωU/P. Hoge Q resonators slaan energie efficiënt op met minimale verliezen. Verlies­mechanismen omvatten: geleiderweerstand (oppervlaktestromen in metalen), diëlektrisch verlies (tan δ in isolatoren), en stralingsverliezen (elektromagnetische lekkage). Holtereso­natoren bereiken zeer hoge Q door deze verliezen te minimaliseren door perfecte geleiders en zorgvuldige geometrie."
                }
            },
            {
                question: {
                    en: "How do electromagnetic boundary conditions determine field behavior at interfaces between different materials?",
                    es: "¿Cómo las condiciones de frontera electromagnéticas determinan el comportamiento del campo en interfaces entre diferentes materiales?",
                    de: "Wie bestimmen elektromagnetische Randbedingungen das Feldverhalten an Grenzflächen zwischen verschiedenen Materialien?",
                    nl: "Hoe bepalen elektromagnetische randvoorwaarden veldgedrag aan grensvlakken tussen verschillende materialen?"
                },
                options: [
                    {
                        en: "Tangential E and normal D are continuous; tangential H and normal B are continuous (absent surface currents/charges); these conditions determine reflection/transmission coefficients",
                        es: "E tangencial y D normal son continuas; H tangencial y B normal son continuas (ausentes corrientes/cargas superficiales); estas condiciones determinan coeficientes de reflexión/transmisión",
                        de: "Tangentiales E und normales D sind stetig; tangentiales H und normales B sind stetig (ohne Oberflächenströme/-ladungen); diese Bedingungen bestimmen Reflexions-/Transmissionskoeffizienten",
                        nl: "Tangentiële E en normale D zijn continu; tangentiële H en normale B zijn continu (zonder oppervlaktestromen/-ladingen); deze condities bepalen reflectie-/transmissiecoëfficiënten"
                    },
                    {
                        en: "All electromagnetic field components are always continuous at material interfaces",
                        es: "Todos los componentes del campo electromagnético son siempre continuos en interfaces de materiales",
                        de: "Alle elektromagnetischen Feldkomponenten sind immer stetig an Materialgrenzflächen",
                        nl: "Alle elektromagnetische veldcomponenten zijn altijd continu bij materiaalgrens­vlakken"
                    },
                    {
                        en: "Boundary conditions only apply to static fields, not time-varying electromagnetic waves",
                        es: "Las condiciones de frontera solo se aplican a campos estáticos, no ondas electromagnéticas variables en el tiempo",
                        de: "Randbedingungen gelten nur für statische Felder, nicht für zeitveränderliche elektromagnetische Wellen",
                        nl: "Randvoorwaarden gelden alleen voor statische velden, niet tijdvariërende elektromagnetische golven"
                    },
                    {
                        en: "Electromagnetic fields are completely independent on either side of material boundaries",
                        es: "Los campos electromagnéticos son completamente independientes en ambos lados de las fronteras de materiales",
                        de: "Elektromagnetische Felder sind völlig unabhängig auf beiden Seiten von Materialgrenzen",
                        nl: "Elektromagnetische velden zijn volledig onafhankelijk aan beide zijden van materiaalgren­zen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Electromagnetic boundary conditions arise from Maxwell's equations in integral form. At interfaces: (1) tangential electric field components are continuous (from Faraday's law), (2) tangential magnetic field components are continuous if no surface currents exist (from Ampère's law), (3) normal electric displacement is continuous if no surface charges exist (from Gauss's law), (4) normal magnetic field is always continuous (no magnetic monopoles). These conditions determine how waves reflect and transmit at interfaces, governing phenomena like total internal reflection and impedance matching.",
                    es: "Las condiciones de frontera electromagnéticas surgen de las ecuaciones de Maxwell en forma integral. En interfaces: (1) los componentes tangenciales del campo eléctrico son continuos (de la ley de Faraday), (2) los componentes tangenciales del campo magnético son continuos si no existen corrientes superficiales (de la ley de Ampère), (3) el desplazamiento eléctrico normal es continuo si no existen cargas superficiales (de la ley de Gauss), (4) el campo magnético normal es siempre continuo (no hay monopolos magnéticos). Estas condiciones determinan cómo las ondas se reflejan y transmiten en interfaces, gobernando fenómenos como reflexión interna total y acoplamiento de impedancia.",
                    de: "Elektromagnetische Randbedingungen entstehen aus Maxwells Gleichungen in Integralform. An Grenzflächen: (1) tangentiale elektrische Feldkomponenten sind stetig (aus Faradays Gesetz), (2) tangentiale magnetische Feldkomponenten sind stetig, wenn keine Oberflächenströme existieren (aus Ampères Gesetz), (3) normale elektrische Verschiebung ist stetig, wenn keine Oberflächenladungen existieren (aus Gauß' Gesetz), (4) normales Magnetfeld ist immer stetig (keine magnetischen Monopole). Diese Bedingungen bestimmen, wie Wellen an Grenzflächen reflektieren und transmittieren und regieren Phänomene wie Totalreflexion und Impedanzanpassung.",
                    nl: "Elektromagnetische randvoorwaarden ontstaan uit Maxwell's vergelijkingen in integrale vorm. Bij grens­vlakken: (1) tangentiële elektrische veldcomponenten zijn continu (uit Faraday's wet), (2) tangentiële magnetische veldcomponenten zijn continu als geen oppervlaktestromen bestaan (uit Ampère's wet), (3) normale elektrische verplaatsing is continu als geen oppervlakteladingen bestaan (uit Gauss' wet), (4) normaal magnetisch veld is altijd continu (geen magnetische monopolen). Deze condities bepalen hoe golven reflecteren en transmitteren bij grens­vlakken, wat verschijnselen zoals totale interne reflectie en impedantie-aanpassing beheerst."
                }
            }
        ]
    };

    if (typeof window !== 'undefined' && typeof window.addLevel === 'function') {
        window.addLevel('brain-teaser', 'physics', 4, level4);
    }
})();
