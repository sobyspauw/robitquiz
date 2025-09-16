// Physics - Level 2: Thermodynamics and Heat
(function() {
    const level2 = {
        name: {
            en: "Thermodynamics and Heat",
            es: "Termodinámica y Calor",
            de: "Thermodynamik und Wärme",
            nl: "Thermodynamica en Warmte"
        },
        questions: [
            {
                question: {
                    en: "What is the First Law of Thermodynamics?",
                    es: "¿Cuál es la Primera Ley de la Termodinámica?",
                    de: "Was ist der Erste Hauptsatz der Thermodynamik?",
                    nl: "Wat is de Eerste Hoofdwet van de Thermodynamica?"
                },
                options: [
                    {
                        en: "Energy cannot be created or destroyed, only converted from one form to another (ΔU = Q - W)",
                        es: "La energía no puede ser creada ni destruida, solo convertida de una forma a otra (ΔU = Q - W)",
                        de: "Energie kann nicht erzeugt oder vernichtet werden, nur von einer Form in eine andere umgewandelt (ΔU = Q - W)",
                        nl: "Energie kan niet worden gecreëerd of vernietigd, alleen omgezet van de ene vorm naar de andere (ΔU = Q - W)"
                    },
                    {
                        en: "Heat flows from hot objects to cold objects",
                        es: "El calor fluye de objetos calientes a objetos fríos",
                        de: "Wärme fließt von heißen zu kalten Objekten",
                        nl: "Warmte stroomt van warme naar koude objecten"
                    },
                    {
                        en: "The entropy of an isolated system always increases",
                        es: "La entropía de un sistema aislado siempre aumenta",
                        de: "Die Entropie eines isolierten Systems nimmt immer zu",
                        nl: "De entropie van een geïsoleerd systeem neemt altijd toe"
                    },
                    {
                        en: "Absolute zero temperature cannot be reached",
                        es: "La temperatura de cero absoluto no puede ser alcanzada",
                        de: "Die absolute Nulltemperatur kann nicht erreicht werden",
                        nl: "Absolute nultemperatuur kan niet worden bereikt"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The First Law of Thermodynamics states that the change in internal energy (ΔU) of a system equals the heat added to the system (Q) minus the work done by the system (W). This is the conservation of energy principle applied to thermodynamic systems.",
                    es: "La Primera Ley de la Termodinámica establece que el cambio en la energía interna (ΔU) de un sistema es igual al calor agregado al sistema (Q) menos el trabajo realizado por el sistema (W). Este es el principio de conservación de energía aplicado a sistemas termodinámicos.",
                    de: "Der Erste Hauptsatz der Thermodynamik besagt, dass die Änderung der inneren Energie (ΔU) eines Systems gleich der dem System zugeführten Wärme (Q) minus der vom System verrichteten Arbeit (W) ist. Dies ist das Prinzip der Energieerhaltung angewandt auf thermodynamische Systeme.",
                    nl: "De Eerste Hoofdwet van de Thermodynamica stelt dat de verandering in interne energie (ΔU) van een systeem gelijk is aan de warmte toegevoegd aan het systeem (Q) minus het werk verricht door het systeem (W). Dit is het principe van energiebehoud toegepast op thermodynamische systemen."
                }
            },
            {
                question: {
                    en: "What is the difference between heat and temperature?",
                    es: "¿Cuál es la diferencia entre calor y temperatura?",
                    de: "Was ist der Unterschied zwischen Wärme und Temperatur?",
                    nl: "Wat is het verschil tussen warmte en temperatuur?"
                },
                options: [
                    {
                        en: "Heat is energy transfer; temperature is the average kinetic energy of particles",
                        es: "El calor es transferencia de energía; la temperatura es la energía cinética promedio de las partículas",
                        de: "Wärme ist Energieübertragung; Temperatur ist die durchschnittliche kinetische Energie der Teilchen",
                        nl: "Warmte is energieoverdracht; temperatuur is de gemiddelde kinetische energie van deeltjes"
                    },
                    {
                        en: "Heat and temperature are the same thing measured differently",
                        es: "El calor y la temperatura son lo mismo medido de manera diferente",
                        de: "Wärme und Temperatur sind dasselbe, nur anders gemessen",
                        nl: "Warmte en temperatuur zijn hetzelfde anders gemeten"
                    },
                    {
                        en: "Temperature is energy transfer; heat is particle motion",
                        es: "La temperatura es transferencia de energía; el calor es movimiento de partículas",
                        de: "Temperatur ist Energieübertragung; Wärme ist Teilchenbewegung",
                        nl: "Temperatuur is energieoverdracht; warmte is deeltjesbeweging"
                    },
                    {
                        en: "Heat is measured in Celsius; temperature is measured in Joules",
                        es: "El calor se mide en Celsius; la temperatura se mide en Joules",
                        de: "Wärme wird in Celsius gemessen; Temperatur wird in Joule gemessen",
                        nl: "Warmte wordt gemeten in Celsius; temperatuur wordt gemeten in Joules"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Heat is the transfer of thermal energy from one object to another due to temperature difference, measured in Joules. Temperature is a measure of the average kinetic energy of particles in a substance, measured in Kelvin, Celsius, or Fahrenheit.",
                    es: "El calor es la transferencia de energía térmica de un objeto a otro debido a la diferencia de temperatura, medido en Joules. La temperatura es una medida de la energía cinética promedio de las partículas en una sustancia, medida en Kelvin, Celsius o Fahrenheit.",
                    de: "Wärme ist die Übertragung thermischer Energie von einem Objekt zum anderen aufgrund eines Temperaturunterschieds, gemessen in Joule. Temperatur ist ein Maß für die durchschnittliche kinetische Energie der Teilchen in einer Substanz, gemessen in Kelvin, Celsius oder Fahrenheit.",
                    nl: "Warmte is de overdracht van thermische energie van het ene object naar het andere vanwege temperatuurverschil, gemeten in Joules. Temperatuur is een maat voor de gemiddelde kinetische energie van deeltjes in een stof, gemeten in Kelvin, Celsius of Fahrenheit."
                }
            },
            {
                question: {
                    en: "What are the three methods of heat transfer?",
                    es: "¿Cuáles son los tres métodos de transferencia de calor?",
                    de: "Was sind die drei Methoden der Wärmeübertragung?",
                    nl: "Wat zijn de drie methoden van warmteoverdracht?"
                },
                options: [
                    {
                        en: "Conduction, convection, and radiation",
                        es: "Conducción, convección y radiación",
                        de: "Leitung, Konvektion und Strahlung",
                        nl: "Geleiding, convectie en straling"
                    },
                    {
                        en: "Absorption, reflection, and transmission",
                        es: "Absorción, reflexión y transmisión",
                        de: "Absorption, Reflexion und Transmission",
                        nl: "Absorptie, reflectie en transmissie"
                    },
                    {
                        en: "Heating, cooling, and equilibrium",
                        es: "Calentamiento, enfriamiento y equilibrio",
                        de: "Erhitzen, Abkühlen und Gleichgewicht",
                        nl: "Verwarming, koeling en evenwicht"
                    },
                    {
                        en: "Expansion, contraction, and phase change",
                        es: "Expansión, contracción y cambio de fase",
                        de: "Ausdehnung, Kontraktion und Phasenwechsel",
                        nl: "Uitzetting, samentrekking en faseovergang"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Heat transfer occurs through three mechanisms: conduction (direct contact between particles), convection (movement of fluids carrying thermal energy), and radiation (electromagnetic waves that can travel through vacuum).",
                    es: "La transferencia de calor ocurre a través de tres mecanismos: conducción (contacto directo entre partículas), convección (movimiento de fluidos que transportan energía térmica), y radiación (ondas electromagnéticas que pueden viajar a través del vacío).",
                    de: "Wärmeübertragung erfolgt durch drei Mechanismen: Leitung (direkter Kontakt zwischen Teilchen), Konvektion (Bewegung von Flüssigkeiten, die thermische Energie transportieren), und Strahlung (elektromagnetische Wellen, die durch Vakuum reisen können).",
                    nl: "Warmteoverdracht vindt plaats via drie mechanismen: geleiding (direct contact tussen deeltjes), convectie (beweging van vloeistoffen die thermische energie transporteren), en straling (elektromagnetische golven die door vacuüm kunnen reizen)."
                }
            },
            {
                question: {
                    en: "What is specific heat capacity?",
                    es: "¿Qué es la capacidad calorífica específica?",
                    de: "Was ist spezifische Wärmekapazität?",
                    nl: "Wat is soortelijke warmte?"
                },
                options: [
                    {
                        en: "The amount of energy required to raise the temperature of 1 kg of a substance by 1 K",
                        es: "La cantidad de energía requerida para elevar la temperatura de 1 kg de una sustancia en 1 K",
                        de: "Die Energiemenge, die erforderlich ist, um die Temperatur von 1 kg einer Substanz um 1 K zu erhöhen",
                        nl: "De hoeveelheid energie die nodig is om de temperatuur van 1 kg van een stof met 1 K te verhogen"
                    },
                    {
                        en: "The maximum temperature a substance can reach",
                        es: "La temperatura máxima que puede alcanzar una sustancia",
                        de: "Die maximale Temperatur, die eine Substanz erreichen kann",
                        nl: "De maximale temperatuur die een stof kan bereiken"
                    },
                    {
                        en: "The rate at which heat flows through a material",
                        es: "La velocidad a la que el calor fluye a través de un material",
                        de: "Die Rate, mit der Wärme durch ein Material fließt",
                        nl: "De snelheid waarmee warmte door een materiaal stroomt"
                    },
                    {
                        en: "The total thermal energy contained in an object",
                        es: "La energía térmica total contenida en un objeto",
                        de: "Die gesamte in einem Objekt enthaltene thermische Energie",
                        nl: "De totale thermische energie in een object"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Specific heat capacity (c) is the amount of energy needed to raise the temperature of 1 kilogram of a substance by 1 Kelvin. It's calculated using Q = mcΔT, where Q is heat energy, m is mass, and ΔT is temperature change.",
                    es: "La capacidad calorífica específica (c) es la cantidad de energía necesaria para elevar la temperatura de 1 kilogramo de una sustancia en 1 Kelvin. Se calcula usando Q = mcΔT, donde Q es energía calorífica, m es masa, y ΔT es cambio de temperatura.",
                    de: "Die spezifische Wärmekapazität (c) ist die Energiemenge, die benötigt wird, um die Temperatur von 1 Kilogramm einer Substanz um 1 Kelvin zu erhöhen. Sie wird mit Q = mcΔT berechnet, wobei Q die Wärmeenergie, m die Masse und ΔT die Temperaturänderung ist.",
                    nl: "Soortelijke warmte (c) is de hoeveelheid energie die nodig is om de temperatuur van 1 kilogram van een stof met 1 Kelvin te verhogen. Het wordt berekend met Q = mcΔT, waarbij Q warmte-energie is, m massa, en ΔT temperatuurverandering."
                }
            },
            {
                question: {
                    en: "What is thermal expansion?",
                    es: "¿Qué es la expansión térmica?",
                    de: "Was ist thermische Ausdehnung?",
                    nl: "Wat is thermische uitzetting?"
                },
                options: [
                    {
                        en: "The increase in size of materials when heated due to increased particle motion",
                        es: "El aumento en tamaño de los materiales cuando se calientan debido al aumento del movimiento de partículas",
                        de: "Die Größenzunahme von Materialien beim Erhitzen aufgrund verstärkter Teilchenbewegung",
                        nl: "De toename in grootte van materialen bij verwarming door verhoogde deeltjesbeweging"
                    },
                    {
                        en: "The process of materials becoming lighter when heated",
                        es: "El proceso de que los materiales se vuelvan más ligeros cuando se calientan",
                        de: "Der Prozess, bei dem Materialien beim Erhitzen leichter werden",
                        nl: "Het proces waarbij materialen lichter worden bij verwarming"
                    },
                    {
                        en: "The change in chemical composition due to temperature",
                        es: "El cambio en composición química debido a la temperatura",
                        de: "Die Änderung der chemischen Zusammensetzung aufgrund der Temperatur",
                        nl: "De verandering in chemische samenstelling door temperatuur"
                    },
                    {
                        en: "The ability of materials to conduct heat better at higher temperatures",
                        es: "La capacidad de los materiales para conducir mejor el calor a temperaturas más altas",
                        de: "Die Fähigkeit von Materialien, bei höheren Temperaturen Wärme besser zu leiten",
                        nl: "Het vermogen van materialen om warmte beter te geleiden bij hogere temperaturen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Thermal expansion occurs when materials increase in size as temperature rises. Higher thermal energy causes particles to vibrate more vigorously, requiring more space. The expansion is quantified by the coefficient of thermal expansion.",
                    es: "La expansión térmica ocurre cuando los materiales aumentan de tamaño al subir la temperatura. La mayor energía térmica causa que las partículas vibren más vigorosamente, requiriendo más espacio. La expansión se cuantifica por el coeficiente de expansión térmica.",
                    de: "Thermische Ausdehnung tritt auf, wenn Materialien mit steigender Temperatur an Größe zunehmen. Höhere thermische Energie verursacht stärkere Teilchenschwingungen, die mehr Raum benötigen. Die Ausdehnung wird durch den thermischen Ausdehnungskoeffizienten quantifiziert.",
                    nl: "Thermische uitzetting treedt op wanneer materialen groter worden naarmate de temperatuur stijgt. Hogere thermische energie zorgt ervoor dat deeltjes heftiger trillen, waardoor meer ruimte nodig is. De uitzetting wordt gekwantificeerd door de thermische uitzettingscoëfficiënt."
                }
            },
            {
                question: {
                    en: "What is the Second Law of Thermodynamics?",
                    es: "¿Cuál es la Segunda Ley de la Termodinámica?",
                    de: "Was ist der Zweite Hauptsatz der Thermodynamik?",
                    nl: "Wat is de Tweede Hoofdwet van de Thermodynamica?"
                },
                options: [
                    {
                        en: "The entropy of an isolated system always increases, and heat flows from hot to cold",
                        es: "La entropía de un sistema aislado siempre aumenta, y el calor fluye de caliente a frío",
                        de: "Die Entropie eines isolierten Systems nimmt immer zu, und Wärme fließt von heiß zu kalt",
                        nl: "De entropie van een geïsoleerd systeem neemt altijd toe, en warmte stroomt van warm naar koud"
                    },
                    {
                        en: "Energy cannot be created or destroyed, only transformed",
                        es: "La energía no puede ser creada ni destruida, solo transformada",
                        de: "Energie kann nicht erzeugt oder vernichtet werden, nur umgewandelt",
                        nl: "Energie kan niet worden gecreëerd of vernietigd, alleen getransformeerd"
                    },
                    {
                        en: "The volume of a gas is proportional to its temperature",
                        es: "El volumen de un gas es proporcional a su temperatura",
                        de: "Das Volumen eines Gases ist proportional zu seiner Temperatur",
                        nl: "Het volume van een gas is evenredig met zijn temperatuur"
                    },
                    {
                        en: "Work done equals force times distance",
                        es: "El trabajo realizado es igual a la fuerza por la distancia",
                        de: "Verrichtete Arbeit gleich Kraft mal Entfernung",
                        nl: "Verrichte arbeid is gelijk aan kracht maal afstand"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Second Law states that entropy (disorder) in an isolated system always increases over time, and heat spontaneously flows from hot to cold objects. This law explains why perpetual motion machines are impossible and defines the arrow of time.",
                    es: "La Segunda Ley establece que la entropía (desorden) en un sistema aislado siempre aumenta con el tiempo, y el calor fluye espontáneamente de objetos calientes a fríos. Esta ley explica por qué las máquinas de movimiento perpetuo son imposibles y define la flecha del tiempo.",
                    de: "Der Zweite Hauptsatz besagt, dass die Entropie (Unordnung) in einem isolierten System mit der Zeit immer zunimmt, und Wärme spontan von heißen zu kalten Objekten fließt. Dieses Gesetz erklärt, warum Perpetuum-Mobile-Maschinen unmöglich sind und definiert den Zeitpfeil.",
                    nl: "De Tweede Wet stelt dat entropie (wanorde) in een geïsoleerd systeem altijd toeneemt in de tijd, en warmte spontaan stroomt van warme naar koude objecten. Deze wet verklaart waarom perpetuum mobile machines onmogelijk zijn en definieert de pijl van de tijd."
                }
            },
            {
                question: {
                    en: "What is absolute zero temperature?",
                    es: "¿Qué es la temperatura de cero absoluto?",
                    de: "Was ist die absolute Nulltemperatur?",
                    nl: "Wat is absolute nultemperatuur?"
                },
                options: [
                    {
                        en: "The temperature at which all molecular motion theoretically stops (-273.15°C or 0 K)",
                        es: "La temperatura a la cual todo movimiento molecular teóricamente se detiene (-273.15°C o 0 K)",
                        de: "Die Temperatur, bei der theoretisch alle molekulare Bewegung aufhört (-273.15°C oder 0 K)",
                        nl: "De temperatuur waarbij alle moleculaire beweging theoretisch stopt (-273.15°C of 0 K)"
                    },
                    {
                        en: "The freezing point of water (0°C)",
                        es: "El punto de congelación del agua (0°C)",
                        de: "Der Gefrierpunkt von Wasser (0°C)",
                        nl: "Het vriespunt van water (0°C)"
                    },
                    {
                        en: "The temperature of outer space (-100°C)",
                        es: "La temperatura del espacio exterior (-100°C)",
                        de: "Die Temperatur des Weltraums (-100°C)",
                        nl: "De temperatuur van de ruimte (-100°C)"
                    },
                    {
                        en: "The lowest temperature ever recorded on Earth (-89°C)",
                        es: "La temperatura más baja jamás registrada en la Tierra (-89°C)",
                        de: "Die niedrigste jemals auf der Erde gemessene Temperatur (-89°C)",
                        nl: "De laagste temperatuur ooit gemeten op aarde (-89°C)"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Absolute zero is the theoretical temperature at which particles have minimal kinetic energy and molecular motion essentially stops. It corresponds to -273.15°C, -459.67°F, or 0 K on the Kelvin scale, though it cannot actually be reached according to the Third Law of Thermodynamics.",
                    es: "El cero absoluto es la temperatura teórica a la cual las partículas tienen energía cinética mínima y el movimiento molecular esencialmente se detiene. Corresponde a -273.15°C, -459.67°F, o 0 K en la escala Kelvin, aunque no puede ser alcanzado según la Tercera Ley de la Termodinámica.",
                    de: "Der absolute Nullpunkt ist die theoretische Temperatur, bei der Teilchen minimale kinetische Energie haben und molekulare Bewegung im Wesentlichen aufhört. Er entspricht -273.15°C, -459.67°F oder 0 K auf der Kelvin-Skala, kann aber nach dem Dritten Hauptsatz der Thermodynamik tatsächlich nicht erreicht werden.",
                    nl: "Absolute nul is de theoretische temperatuur waarbij deeltjes minimale kinetische energie hebben en moleculaire beweging in wezen stopt. Het komt overeen met -273.15°C, -459.67°F, of 0 K op de Kelvin-schaal, hoewel het volgens de Derde Wet van de Thermodynamica niet werkelijk kan worden bereikt."
                }
            },
            {
                question: {
                    en: "What is latent heat?",
                    es: "¿Qué es el calor latente?",
                    de: "Was ist latente Wärme?",
                    nl: "Wat is latente warmte?"
                },
                options: [
                    {
                        en: "The energy required to change the phase of a substance without changing its temperature",
                        es: "La energía requerida para cambiar la fase de una sustancia sin cambiar su temperatura",
                        de: "Die Energie, die benötigt wird, um die Phase einer Substanz zu ändern, ohne ihre Temperatur zu ändern",
                        nl: "De energie die nodig is om de fase van een stof te veranderen zonder zijn temperatuur te veranderen"
                    },
                    {
                        en: "The heat that remains in an object after cooling",
                        es: "El calor que permanece en un objeto después del enfriamiento",
                        de: "Die Wärme, die nach dem Abkühlen in einem Objekt verbleibt",
                        nl: "De warmte die in een object blijft na afkoeling"
                    },
                    {
                        en: "The energy stored in chemical bonds",
                        es: "La energía almacenada en enlaces químicos",
                        de: "Die in chemischen Bindungen gespeicherte Energie",
                        nl: "De energie opgeslagen in chemische bindingen"
                    },
                    {
                        en: "The heat produced by friction",
                        es: "El calor producido por la fricción",
                        de: "Die durch Reibung erzeugte Wärme",
                        nl: "De warmte geproduceerd door wrijving"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Latent heat is the energy required to change a substance's phase (solid↔liquid↔gas) at constant temperature. During phase transitions, added energy goes into breaking or forming intermolecular bonds rather than increasing temperature. Examples include heat of fusion (melting) and heat of vaporization (boiling).",
                    es: "El calor latente es la energía requerida para cambiar la fase de una sustancia (sólido↔líquido↔gas) a temperatura constante. Durante las transiciones de fase, la energía agregada va hacia romper o formar enlaces intermoleculares en lugar de aumentar la temperatura. Los ejemplos incluyen calor de fusión (derretimiento) y calor de vaporización (ebullición).",
                    de: "Latente Wärme ist die Energie, die benötigt wird, um die Phase einer Substanz (fest↔flüssig↔gasförmig) bei konstanter Temperatur zu ändern. Während Phasenübergängen geht die zugeführte Energie in das Aufbrechen oder Bilden intermolekularer Bindungen, anstatt die Temperatur zu erhöhen. Beispiele sind Schmelzwärme (Schmelzen) und Verdampfungswärme (Sieden).",
                    nl: "Latente warmte is de energie die nodig is om de fase van een stof te veranderen (vast↔vloeibaar↔gas) bij constante temperatuur. Tijdens faseovergangen gaat toegevoegde energie naar het breken of vormen van intermoleculaire bindingen in plaats van het verhogen van temperatuur. Voorbeelden zijn smeltingswarmte (smelten) en verdampingswarmte (koken)."
                }
            },
            {
                question: {
                    en: "What is thermal conductivity?",
                    es: "¿Qué es la conductividad térmica?",
                    de: "Was ist Wärmeleitfähigkeit?",
                    nl: "Wat is thermische geleidbaarheid?"
                },
                options: [
                    {
                        en: "The ability of a material to conduct heat, measured as heat flow per unit area per unit temperature gradient",
                        es: "La capacidad de un material para conducir calor, medida como flujo de calor por unidad de área por unidad de gradiente de temperatura",
                        de: "Die Fähigkeit eines Materials, Wärme zu leiten, gemessen als Wärmefluss pro Flächeneinheit pro Temperaturgradienten-Einheit",
                        nl: "Het vermogen van een materiaal om warmte te geleiden, gemeten als warmtestroom per oppervlakte-eenheid per temperatuurgradiënt-eenheid"
                    },
                    {
                        en: "The temperature at which materials become good conductors",
                        es: "La temperatura a la cual los materiales se vuelven buenos conductores",
                        de: "Die Temperatur, bei der Materialien gute Leiter werden",
                        nl: "De temperatuur waarbij materialen goede geleiders worden"
                    },
                    {
                        en: "The expansion of materials when heated",
                        es: "La expansión de materiales cuando se calientan",
                        de: "Die Ausdehnung von Materialien beim Erhitzen",
                        nl: "De uitzetting van materialen bij verwarming"
                    },
                    {
                        en: "The resistance of materials to temperature change",
                        es: "La resistencia de los materiales al cambio de temperatura",
                        de: "Der Widerstand von Materialien gegen Temperaturänderungen",
                        nl: "De weerstand van materialen tegen temperatuurverandering"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Thermal conductivity (k) quantifies a material's ability to conduct heat. It's defined by Fourier's law: q = -kA(dT/dx), where q is heat flow rate, A is area, and dT/dx is temperature gradient. Metals typically have high thermal conductivity, while insulators have low values.",
                    es: "La conductividad térmica (k) cuantifica la capacidad de un material para conducir calor. Se define por la ley de Fourier: q = -kA(dT/dx), donde q es la tasa de flujo de calor, A es el área, y dT/dx es el gradiente de temperatura. Los metales típicamente tienen alta conductividad térmica, mientras que los aislantes tienen valores bajos.",
                    de: "Die Wärmeleitfähigkeit (k) quantifiziert die Fähigkeit eines Materials, Wärme zu leiten. Sie wird durch das Fouriersche Gesetz definiert: q = -kA(dT/dx), wobei q die Wärmeflussrate, A die Fläche und dT/dx der Temperaturgradient ist. Metalle haben typischerweise hohe Wärmeleitfähigkeit, während Isolatoren niedrige Werte haben.",
                    nl: "Thermische geleidbaarheid (k) kwantificeert het vermogen van een materiaal om warmte te geleiden. Het wordt gedefinieerd door Fourier's wet: q = -kA(dT/dx), waarbij q warmtestroomsnelheid is, A oppervlak, en dT/dx temperatuurgradiënt. Metalen hebben typisch hoge thermische geleidbaarheid, terwijl isolatoren lage waarden hebben."
                }
            },
            {
                question: {
                    en: "What happens during adiabatic processes?",
                    es: "¿Qué sucede durante los procesos adiabáticos?",
                    de: "Was passiert bei adiabatischen Prozessen?",
                    nl: "Wat gebeurt er tijdens adiabatische processen?"
                },
                options: [
                    {
                        en: "No heat is transferred to or from the system (Q = 0), so all energy changes appear as work",
                        es: "No se transfiere calor hacia o desde el sistema (Q = 0), por lo que todos los cambios de energía aparecen como trabajo",
                        de: "Es wird keine Wärme zum oder vom System übertragen (Q = 0), sodass alle Energieänderungen als Arbeit erscheinen",
                        nl: "Er wordt geen warmte overgedragen naar of van het systeem (Q = 0), dus alle energieveranderingen verschijnen als werk"
                    },
                    {
                        en: "Temperature remains constant throughout the process",
                        es: "La temperatura permanece constante durante todo el proceso",
                        de: "Die Temperatur bleibt während des gesamten Prozesses konstant",
                        nl: "Temperatuur blijft constant gedurende het hele proces"
                    },
                    {
                        en: "Pressure remains constant throughout the process",
                        es: "La presión permanece constante durante todo el proceso",
                        de: "Der Druck bleibt während des gesamten Prozesses konstant",
                        nl: "Druk blijft constant gedurende het hele proces"
                    },
                    {
                        en: "Volume remains constant throughout the process",
                        es: "El volumen permanece constante durante todo el proceso",
                        de: "Das Volumen bleibt während des gesamten Prozesses konstant",
                        nl: "Volume blijft constant gedurende het hele proces"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "In adiabatic processes, the system is thermally isolated so no heat transfer occurs (Q = 0). From the First Law (ΔU = Q - W), all internal energy changes must equal negative work done by the system. Rapid compressions and expansions often approximate adiabatic conditions.",
                    es: "En procesos adiabáticos, el sistema está térmicamente aislado por lo que no ocurre transferencia de calor (Q = 0). Desde la Primera Ley (ΔU = Q - W), todos los cambios de energía interna deben igualar el trabajo negativo realizado por el sistema. Las compresiones y expansiones rápidas a menudo aproximan condiciones adiabáticas.",
                    de: "Bei adiabatischen Prozessen ist das System thermisch isoliert, sodass kein Wärmeaustausch stattfindet (Q = 0). Aus dem Ersten Hauptsatz (ΔU = Q - W) müssen alle inneren Energieänderungen der negativen vom System verrichteten Arbeit entsprechen. Schnelle Kompressionen und Expansionen nähern oft adiabatische Bedingungen an.",
                    nl: "Bij adiabatische processen is het systeem thermisch geïsoleerd zodat er geen warmteoverdracht plaatsvindt (Q = 0). Uit de Eerste Wet (ΔU = Q - W) moeten alle interne energieveranderingen gelijk zijn aan negatief werk verricht door het systeem. Snelle compressies en expansies benaderen vaak adiabatische omstandigheden."
                }
            },
            {
                question: {
                    en: "What is the Carnot cycle and why is it important?",
                    es: "¿Qué es el ciclo de Carnot y por qué es importante?",
                    de: "Was ist der Carnot-Kreisprozess und warum ist er wichtig?",
                    nl: "Wat is de Carnot-cyclus en waarom is deze belangrijk?"
                },
                options: [
                    {
                        en: "An idealized heat engine cycle that represents the maximum theoretical efficiency for any heat engine",
                        es: "Un ciclo de motor térmico idealizado que representa la máxima eficiencia teórica para cualquier motor térmico",
                        de: "Ein idealisierter Wärmemotorkreislauf, der die maximale theoretische Effizienz für jeden Wärmemotor darstellt",
                        nl: "Een geïdealiseerde warmtemotorcyclus die de maximale theoretische efficiëntie voor elke warmtemotor vertegenwoordigt"
                    },
                    {
                        en: "A process where heat is converted to work with 100% efficiency",
                        es: "Un proceso donde el calor se convierte en trabajo con 100% de eficiencia",
                        de: "Ein Prozess, bei dem Wärme mit 100% Effizienz in Arbeit umgewandelt wird",
                        nl: "Een proces waarbij warmte wordt omgezet in werk met 100% efficiëntie"
                    },
                    {
                        en: "The cycle used in all modern car engines",
                        es: "El ciclo usado en todos los motores de automóviles modernos",
                        de: "Der Kreislauf, der in allen modernen Automotoren verwendet wird",
                        nl: "De cyclus gebruikt in alle moderne automotoren"
                    },
                    {
                        en: "A refrigeration cycle that can reach absolute zero",
                        es: "Un ciclo de refrigeración que puede alcanzar el cero absoluto",
                        de: "Ein Kühlkreislauf, der den absoluten Nullpunkt erreichen kann",
                        nl: "Een koelcyclus die absolute nul kan bereiken"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Carnot cycle consists of four reversible processes (two isothermal, two adiabatic) and defines the theoretical maximum efficiency η = 1 - Tc/Th for heat engines operating between temperatures Th and Tc. No real engine can exceed Carnot efficiency, making it a fundamental benchmark.",
                    es: "El ciclo de Carnot consiste en cuatro procesos reversibles (dos isotérmicos, dos adiabáticos) y define la máxima eficiencia teórica η = 1 - Tc/Th para motores térmicos operando entre temperaturas Th y Tc. Ningún motor real puede exceder la eficiencia de Carnot, haciéndolo un punto de referencia fundamental.",
                    de: "Der Carnot-Kreisprozess besteht aus vier reversiblen Prozessen (zwei isotherm, zwei adiabatisch) und definiert die theoretische Maximaleffizienz η = 1 - Tc/Th für Wärmemotoren, die zwischen den Temperaturen Th und Tc arbeiten. Kein realer Motor kann die Carnot-Effizienz übertreffen, was ihn zu einem fundamentalen Maßstab macht.",
                    nl: "De Carnot-cyclus bestaat uit vier omkeerbare processen (twee isotherm, twee adiabatisch) en definieert de theoretische maximale efficiëntie η = 1 - Tc/Th voor warmtemotoren die werken tussen temperaturen Th en Tc. Geen echte motor kan de Carnot-efficiëntie overtreffen, wat het een fundamentele benchmark maakt."
                }
            },
            {
                question: {
                    en: "What is entropy in thermodynamics?",
                    es: "¿Qué es la entropía en termodinámica?",
                    de: "Was ist Entropie in der Thermodynamik?",
                    nl: "Wat is entropie in de thermodynamica?"
                },
                options: [
                    {
                        en: "A measure of the disorder or randomness in a system, which tends to increase over time",
                        es: "Una medida del desorden o aleatoriedad en un sistema, que tiende a aumentar con el tiempo",
                        de: "Ein Maß für die Unordnung oder Zufälligkeit in einem System, das mit der Zeit zu steigen neigt",
                        nl: "Een maat voor de wanorde of willekeur in een systeem, die de neiging heeft om toe te nemen in de tijd"
                    },
                    {
                        en: "The total energy content of a thermodynamic system",
                        es: "El contenido total de energía de un sistema termodinámico",
                        de: "Der Gesamtenergiegehalt eines thermodynamischen Systems",
                        nl: "De totale energie-inhoud van een thermodynamisch systeem"
                    },
                    {
                        en: "The rate of heat transfer in a system",
                        es: "La velocidad de transferencia de calor en un sistema",
                        de: "Die Rate der Wärmeübertragung in einem System",
                        nl: "De snelheid van warmteoverdracht in een systeem"
                    },
                    {
                        en: "The maximum temperature a system can reach",
                        es: "La temperatura máxima que puede alcanzar un sistema",
                        de: "Die maximale Temperatur, die ein System erreichen kann",
                        nl: "De maximale temperatuur die een systeem kan bereiken"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Entropy (S) quantifies the microscopic disorder in a system. The Second Law states that entropy always increases in isolated systems. Mathematically, dS = dQ/T for reversible processes. Higher entropy corresponds to more possible microscopic arrangements and greater disorder.",
                    es: "La entropía (S) cuantifica el desorden microscópico en un sistema. La Segunda Ley establece que la entropía siempre aumenta en sistemas aislados. Matemáticamente, dS = dQ/T para procesos reversibles. Mayor entropía corresponde a más arreglos microscópicos posibles y mayor desorden.",
                    de: "Entropie (S) quantifiziert die mikroskopische Unordnung in einem System. Der Zweite Hauptsatz besagt, dass die Entropie in isolierten Systemen immer zunimmt. Mathematisch gilt dS = dQ/T für reversible Prozesse. Höhere Entropie entspricht mehr möglichen mikroskopischen Anordnungen und größerer Unordnung.",
                    nl: "Entropie (S) kwantificeert de microscopische wanorde in een systeem. De Tweede Wet stelt dat entropie altijd toeneemt in geïsoleerde systemen. Wiskundig geldt dS = dQ/T voor omkeerbare processen. Hogere entropie komt overeen met meer mogelijke microscopische arrangementen en meer wanorde."
                }
            },
            {
                question: {
                    en: "What is the difference between an isothermal and isobaric process?",
                    es: "¿Cuál es la diferencia entre un proceso isotérmico e isobárico?",
                    de: "Was ist der Unterschied zwischen einem isothermen und isobaren Prozess?",
                    nl: "Wat is het verschil tussen een isotherm en isobaar proces?"
                },
                options: [
                    {
                        en: "Isothermal processes maintain constant temperature; isobaric processes maintain constant pressure",
                        es: "Los procesos isotérmicos mantienen temperatura constante; los procesos isobáricos mantienen presión constante",
                        de: "Isotherme Prozesse halten konstante Temperatur; isobare Prozesse halten konstanten Druck",
                        nl: "Isotherme processen houden constante temperatuur; isobare processen houden constante druk"
                    },
                    {
                        en: "Isothermal processes maintain constant pressure; isobaric processes maintain constant temperature",
                        es: "Los procesos isotérmicos mantienen presión constante; los procesos isobáricos mantienen temperatura constante",
                        de: "Isotherme Prozesse halten konstanten Druck; isobare Prozesse halten konstante Temperatur",
                        nl: "Isotherme processen houden constante druk; isobare processen houden constante temperatuur"
                    },
                    {
                        en: "Isothermal processes maintain constant volume; isobaric processes maintain constant entropy",
                        es: "Los procesos isotérmicos mantienen volumen constante; los procesos isobáricos mantienen entropía constante",
                        de: "Isotherme Prozesse halten konstantes Volumen; isobare Prozesse halten konstante Entropie",
                        nl: "Isotherme processen houden constant volume; isobare processen houden constante entropie"
                    },
                    {
                        en: "There is no difference between these two processes",
                        es: "No hay diferencia entre estos dos procesos",
                        de: "Es gibt keinen Unterschied zwischen diesen beiden Prozessen",
                        nl: "Er is geen verschil tussen deze twee processen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Isothermal processes occur at constant temperature (T = constant), requiring slow changes to maintain thermal equilibrium. Isobaric processes occur at constant pressure (P = constant), such as heating a gas in an open container where it can expand freely against atmospheric pressure.",
                    es: "Los procesos isotérmicos ocurren a temperatura constante (T = constante), requiriendo cambios lentos para mantener equilibrio térmico. Los procesos isobáricos ocurren a presión constante (P = constante), como calentar un gas en un contenedor abierto donde puede expandirse libremente contra la presión atmosférica.",
                    de: "Isotherme Prozesse laufen bei konstanter Temperatur ab (T = konstant) und erfordern langsame Änderungen zur Aufrechterhaltung des thermischen Gleichgewichts. Isobare Prozesse laufen bei konstantem Druck ab (P = konstant), wie das Erhitzen eines Gases in einem offenen Behälter, wo es sich frei gegen den atmosphärischen Druck ausdehnen kann.",
                    nl: "Isotherme processen vinden plaats bij constante temperatuur (T = constant), wat langzame veranderingen vereist om thermisch evenwicht te behouden. Isobare processen vinden plaats bij constante druk (P = constant), zoals het verwarmen van een gas in een open container waar het zich vrij kan uitzetten tegen atmosferische druk."
                }
            },
            {
                question: {
                    en: "What is the coefficient of thermal expansion?",
                    es: "¿Qué es el coeficiente de expansión térmica?",
                    de: "Was ist der thermische Ausdehnungskoeffizient?",
                    nl: "Wat is de thermische uitzettingscoëfficiënt?"
                },
                options: [
                    {
                        en: "A measure of how much a material expands per unit length per degree of temperature change",
                        es: "Una medida de cuánto se expande un material por unidad de longitud por grado de cambio de temperatura",
                        de: "Ein Maß dafür, wie stark sich ein Material pro Längeneinheit pro Grad Temperaturänderung ausdehnt",
                        nl: "Een maat voor hoeveel een materiaal uitzet per lengte-eenheid per graad temperatuurverandering"
                    },
                    {
                        en: "The maximum temperature a material can withstand before melting",
                        es: "La temperatura máxima que puede soportar un material antes de fundirse",
                        de: "Die maximale Temperatur, die ein Material vor dem Schmelzen aushalten kann",
                        nl: "De maximale temperatuur die een materiaal kan weerstaan voordat het smelt"
                    },
                    {
                        en: "The rate at which materials conduct heat",
                        es: "La velocidad a la cual los materiales conducen calor",
                        de: "Die Rate, mit der Materialien Wärme leiten",
                        nl: "De snelheid waarmee materialen warmte geleiden"
                    },
                    {
                        en: "The energy required to change a material's phase",
                        es: "La energía requerida para cambiar la fase de un material",
                        de: "Die Energie, die benötigt wird, um die Phase eines Materials zu ändern",
                        nl: "De energie die nodig is om de fase van een materiaal te veranderen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The coefficient of thermal expansion (α) quantifies how materials change size with temperature: ΔL = αL₀ΔT, where ΔL is length change, L₀ is original length, and ΔT is temperature change. Different materials have different α values, which is crucial for engineering applications where thermal stresses must be managed.",
                    es: "El coeficiente de expansión térmica (α) cuantifica cómo los materiales cambian de tamaño con la temperatura: ΔL = αL₀ΔT, donde ΔL es cambio de longitud, L₀ es longitud original, y ΔT es cambio de temperatura. Diferentes materiales tienen diferentes valores α, lo cual es crucial para aplicaciones de ingeniería donde se deben manejar tensiones térmicas.",
                    de: "Der thermische Ausdehnungskoeffizient (α) quantifiziert, wie Materialien ihre Größe mit der Temperatur ändern: ΔL = αL₀ΔT, wobei ΔL die Längenänderung, L₀ die ursprüngliche Länge und ΔT die Temperaturänderung ist. Verschiedene Materialien haben verschiedene α-Werte, was für technische Anwendungen entscheidend ist, wo thermische Spannungen bewältigt werden müssen.",
                    nl: "De thermische uitzettingscoëfficiënt (α) kwantificeert hoe materialen van grootte veranderen met temperatuur: ΔL = αL₀ΔT, waarbij ΔL lengtewijziging is, L₀ oorspronkelijke lengte, en ΔT temperatuurverandering. Verschillende materialen hebben verschillende α waarden, wat cruciaal is voor technische toepassingen waar thermische spanningen beheerd moeten worden."
                }
            },
            {
                question: {
                    en: "What is a heat pump and how does it work?",
                    es: "¿Qué es una bomba de calor y cómo funciona?",
                    de: "Was ist eine Wärmepumpe und wie funktioniert sie?",
                    nl: "Wat is een warmtepomp en hoe werkt deze?"
                },
                options: [
                    {
                        en: "A device that uses work to transfer heat from a cold reservoir to a hot reservoir, opposite to natural heat flow",
                        es: "Un dispositivo que usa trabajo para transferir calor de un reservorio frío a uno caliente, opuesto al flujo natural de calor",
                        de: "Ein Gerät, das Arbeit nutzt, um Wärme von einem kalten Reservoir zu einem heißen Reservoir zu übertragen, entgegen dem natürlichen Wärmefluss",
                        nl: "Een apparaat dat werk gebruikt om warmte over te dragen van een koude reservoir naar een warme reservoir, tegenovergesteld aan natuurlijke warmtestroom"
                    },
                    {
                        en: "A machine that generates heat by burning fuel",
                        es: "Una máquina que genera calor quemando combustible",
                        de: "Eine Maschine, die Wärme durch Verbrennen von Kraftstoff erzeugt",
                        nl: "Een machine die warmte genereert door brandstof te verbranden"
                    },
                    {
                        en: "A system that converts heat directly into electricity",
                        es: "Un sistema que convierte calor directamente en electricidad",
                        de: "Ein System, das Wärme direkt in Elektrizität umwandelt",
                        nl: "Een systeem dat warmte direct omzet in elektriciteit"
                    },
                    {
                        en: "A device that only works to cool buildings",
                        es: "Un dispositivo que solo funciona para enfriar edificios",
                        de: "Ein Gerät, das nur zum Kühlen von Gebäuden funktioniert",
                        nl: "Een apparaat dat alleen werkt om gebouwen te koelen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "A heat pump is essentially a refrigerator run in reverse. It uses electrical energy to drive a refrigeration cycle, extracting heat from a cold environment (like outside air) and delivering it to a warm environment (like inside a house). This violates natural heat flow direction but is thermodynamically allowed with energy input.",
                    es: "Una bomba de calor es esencialmente un refrigerador funcionando al revés. Usa energía eléctrica para impulsar un ciclo de refrigeración, extrayendo calor de un ambiente frío (como aire exterior) y entregándolo a un ambiente cálido (como dentro de una casa). Esto viola la dirección natural del flujo de calor pero es termodinámicamente permitido con entrada de energía.",
                    de: "Eine Wärmepumpe ist im Wesentlichen ein umgekehrt betriebener Kühlschrank. Sie nutzt elektrische Energie, um einen Kühlkreislauf anzutreiben, Wärme aus einer kalten Umgebung (wie Außenluft) zu extrahieren und an eine warme Umgebung (wie das Innere eines Hauses) abzugeben. Dies verstößt gegen die natürliche Wärmeflussrichtung, ist aber thermodynamisch mit Energiezufuhr erlaubt.",
                    nl: "Een warmtepomp is in wezen een omgekeerd werkende koelkast. Het gebruikt elektrische energie om een koelcyclus aan te drijven, warmte uit een koude omgeving (zoals buitenlucht) te halen en af te leveren aan een warme omgeving (zoals binnenshuis). Dit gaat tegen de natuurlijke warmtestroomrichting in maar is thermodynamisch toegestaan met energie-input."
                }
            },
            {
                question: {
                    en: "What is blackbody radiation?",
                    es: "¿Qué es la radiación de cuerpo negro?",
                    de: "Was ist Schwarzkörperstrahlung?",
                    nl: "Wat is zwarte-lichaamsstraling?"
                },
                options: [
                    {
                        en: "The electromagnetic radiation emitted by a perfect absorber at thermal equilibrium, following Planck's law",
                        es: "La radiación electromagnética emitida por un absorbedor perfecto en equilibrio térmico, siguiendo la ley de Planck",
                        de: "Die elektromagnetische Strahlung, die von einem perfekten Absorber im thermischen Gleichgewicht emittiert wird und dem Planckschen Gesetz folgt",
                        nl: "De elektromagnetische straling uitgezonden door een perfecte absorber in thermisch evenwicht, volgens Planck's wet"
                    },
                    {
                        en: "Radiation emitted only by black objects",
                        es: "Radiación emitida solo por objetos negros",
                        de: "Strahlung, die nur von schwarzen Objekten emittiert wird",
                        nl: "Straling uitgezonden alleen door zwarte objecten"
                    },
                    {
                        en: "The absence of all electromagnetic radiation",
                        es: "La ausencia de toda radiación electromagnética",
                        de: "Die Abwesenheit aller elektromagnetischen Strahlung",
                        nl: "De afwezigheid van alle elektromagnetische straling"
                    },
                    {
                        en: "Radiation that travels faster than the speed of light",
                        es: "Radiación que viaja más rápido que la velocidad de la luz",
                        de: "Strahlung, die schneller als Lichtgeschwindigkeit reist",
                        nl: "Straling die sneller reist dan de lichtsnelheid"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "A blackbody is an idealized object that absorbs all incident electromagnetic radiation. At thermal equilibrium, it emits radiation according to Planck's law, with intensity depending only on temperature. Real objects approximate blackbody behavior, and this concept led to quantum mechanics development.",
                    es: "Un cuerpo negro es un objeto idealizado que absorbe toda la radiación electromagnética incidente. En equilibrio térmico, emite radiación según la ley de Planck, con intensidad que depende solo de la temperatura. Los objetos reales aproximan el comportamiento de cuerpo negro, y este concepto llevó al desarrollo de la mecánica cuántica.",
                    de: "Ein Schwarzkörper ist ein idealisiertes Objekt, das alle auftreffende elektromagnetische Strahlung absorbiert. Im thermischen Gleichgewicht emittiert er Strahlung nach dem Planckschen Gesetz, wobei die Intensität nur von der Temperatur abhängt. Reale Objekte nähern sich dem Schwarzkörperverhalten an, und dieses Konzept führte zur Entwicklung der Quantenmechanik.",
                    nl: "Een zwart lichaam is een geïdealiseerd object dat alle invallende elektromagnetische straling absorbeert. In thermisch evenwicht zendt het straling uit volgens Planck's wet, met intensiteit die alleen afhangt van temperatuur. Echte objecten benaderen zwarte-lichaamsgedrag, en dit concept leidde tot de ontwikkeling van de quantummechanica."
                }
            },
            {
                question: {
                    en: "What is the Stefan-Boltzmann law?",
                    es: "¿Qué es la ley de Stefan-Boltzmann?",
                    de: "Was ist das Stefan-Boltzmann-Gesetz?",
                    nl: "Wat is de Stefan-Boltzmann wet?"
                },
                options: [
                    {
                        en: "The total power radiated by a blackbody is proportional to the fourth power of its temperature (P = σAT⁴)",
                        es: "La potencia total radiada por un cuerpo negro es proporcional a la cuarta potencia de su temperatura (P = σAT⁴)",
                        de: "Die gesamte von einem Schwarzkörper abgestrahlte Leistung ist proportional zur vierten Potenz seiner Temperatur (P = σAT⁴)",
                        nl: "Het totale vermogen uitgestraald door een zwart lichaam is evenredig met de vierde macht van zijn temperatuur (P = σAT⁴)"
                    },
                    {
                        en: "The wavelength of peak emission is inversely proportional to temperature",
                        es: "La longitud de onda de emisión máxima es inversamente proporcional a la temperatura",
                        de: "Die Wellenlänge der Spitzenemission ist umgekehrt proportional zur Temperatur",
                        nl: "De golflengte van piekemissie is omgekeerd evenredig met temperatuur"
                    },
                    {
                        en: "The speed of light is constant in all reference frames",
                        es: "La velocidad de la luz es constante en todos los marcos de referencia",
                        de: "Die Lichtgeschwindigkeit ist in allen Bezugssystemen konstant",
                        nl: "De lichtsnelheid is constant in alle referentiekaders"
                    },
                    {
                        en: "Energy is proportional to frequency for electromagnetic radiation",
                        es: "La energía es proporcional a la frecuencia para la radiación electromagnética",
                        de: "Energie ist proportional zur Frequenz bei elektromagnetischer Strahlung",
                        nl: "Energie is evenredig met frequentie voor elektromagnetische straling"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Stefan-Boltzmann law states that the total power radiated by a blackbody per unit area is proportional to T⁴: P/A = σT⁴, where σ = 5.67×10⁻⁸ W/(m²K⁴) is the Stefan-Boltzmann constant. This explains why hot objects glow brighter and why small temperature increases cause large radiation increases.",
                    es: "La ley de Stefan-Boltzmann establece que la potencia total radiada por un cuerpo negro por unidad de área es proporcional a T⁴: P/A = σT⁴, donde σ = 5.67×10⁻⁸ W/(m²K⁴) es la constante de Stefan-Boltzmann. Esto explica por qué los objetos calientes brillan más y por qué pequeños aumentos de temperatura causan grandes aumentos de radiación.",
                    de: "Das Stefan-Boltzmann-Gesetz besagt, dass die gesamte von einem Schwarzkörper pro Flächeneinheit abgestrahlte Leistung proportional zu T⁴ ist: P/A = σT⁴, wobei σ = 5,67×10⁻⁸ W/(m²K⁴) die Stefan-Boltzmann-Konstante ist. Dies erklärt, warum heiße Objekte heller leuchten und warum kleine Temperaturerhöhungen große Strahlungsanstiege verursachen.",
                    nl: "De Stefan-Boltzmann wet stelt dat het totale vermogen uitgestraald door een zwart lichaam per oppervlakte-eenheid evenredig is met T⁴: P/A = σT⁴, waarbij σ = 5.67×10⁻⁸ W/(m²K⁴) de Stefan-Boltzmann constante is. Dit verklaart waarom warme objecten helderder gloeien en waarom kleine temperatuurstijgingen grote stralingsstijgingen veroorzaken."
                }
            },
            {
                question: {
                    en: "What is the Ideal Gas Law?",
                    es: "¿Cuál es la Ley de Gases Ideales?",
                    de: "Was ist das ideale Gasgesetz?",
                    nl: "Wat is de Ideale Gaswet?"
                },
                options: [
                    {
                        en: "PV = nRT, relating pressure, volume, amount, and temperature of an ideal gas",
                        es: "PV = nRT, relacionando presión, volumen, cantidad y temperatura de un gas ideal",
                        de: "PV = nRT, das Druck, Volumen, Stoffmenge und Temperatur eines idealen Gases verknüpft",
                        nl: "PV = nRT, die druk, volume, hoeveelheid en temperatuur van een ideaal gas relateert"
                    },
                    {
                        en: "F = ma, the fundamental law of mechanics",
                        es: "F = ma, la ley fundamental de la mecánica",
                        de: "F = ma, das Grundgesetz der Mechanik",
                        nl: "F = ma, de fundamentele wet van de mechanica"
                    },
                    {
                        en: "E = mc², the mass-energy equivalence",
                        es: "E = mc², la equivalencia masa-energía",
                        de: "E = mc², die Masse-Energie-Äquivalenz",
                        nl: "E = mc², de massa-energie equivalentie"
                    },
                    {
                        en: "Q = mcΔT, the heat capacity equation",
                        es: "Q = mcΔT, la ecuación de capacidad calorífica",
                        de: "Q = mcΔT, die Wärmekapazitätsgleichung",
                        nl: "Q = mcΔT, de warmtecapaciteitsvergelijking"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Ideal Gas Law PV = nRT combines Boyle's, Charles's, and Avogadro's laws, where P is pressure, V is volume, n is number of moles, R is the gas constant (8.314 J/mol·K), and T is absolute temperature. It describes the behavior of gases under most conditions.",
                    es: "La Ley de Gases Ideales PV = nRT combina las leyes de Boyle, Charles y Avogadro, donde P es presión, V es volumen, n es número de moles, R es la constante de gases (8.314 J/mol·K), y T es temperatura absoluta. Describe el comportamiento de gases bajo la mayoría de condiciones.",
                    de: "Das ideale Gasgesetz PV = nRT kombiniert die Gesetze von Boyle, Charles und Avogadro, wobei P der Druck, V das Volumen, n die Stoffmenge, R die Gaskonstante (8,314 J/mol·K) und T die absolute Temperatur ist. Es beschreibt das Verhalten von Gasen unter den meisten Bedingungen.",
                    nl: "De Ideale Gaswet PV = nRT combineert Boyle's, Charles's, en Avogadro's wetten, waarbij P druk is, V volume, n aantal mol, R de gasconstante (8.314 J/mol·K), en T absolute temperatuur. Het beschrijft het gedrag van gassen onder de meeste omstandigheden."
                }
            },
            {
                question: {
                    en: "What is the kinetic theory of gases?",
                    es: "¿Qué es la teoría cinética de los gases?",
                    de: "Was ist die kinetische Gastheorie?",
                    nl: "Wat is de kinetische theorie van gassen?"
                },
                options: [
                    {
                        en: "A model explaining gas behavior through the motion of individual molecules, relating microscopic motion to macroscopic properties",
                        es: "Un modelo que explica el comportamiento de gases a través del movimiento de moléculas individuales, relacionando movimiento microscópico con propiedades macroscópicas",
                        de: "Ein Modell, das Gasverhalten durch die Bewegung einzelner Moleküle erklärt und mikroskopische Bewegung mit makroskopischen Eigenschaften verknüpft",
                        nl: "Een model dat gasgedrag verklaart door de beweging van individuele moleculen, dat microscopische beweging relateert aan macroscopische eigenschappen"
                    },
                    {
                        en: "The study of how gases change color with temperature",
                        es: "El estudio de cómo los gases cambian de color con la temperatura",
                        de: "Das Studium, wie Gase ihre Farbe mit der Temperatur ändern",
                        nl: "De studie van hoe gassen van kleur veranderen met temperatuur"
                    },
                    {
                        en: "A theory about gas compression and expansion rates",
                        es: "Una teoría sobre las tasas de compresión y expansión de gases",
                        de: "Eine Theorie über Gas-Kompressions- und Expansionsraten",
                        nl: "Een theorie over gascompressie en -expansiesnelheden"
                    },
                    {
                        en: "The mathematical relationship between gas density and pressure",
                        es: "La relación matemática entre densidad de gas y presión",
                        de: "Die mathematische Beziehung zwischen Gasdichte und Druck",
                        nl: "De wiskundige relatie tussen gasdichtheid en druk"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Kinetic theory explains gas properties through molecular motion assumptions: molecules are point masses in constant random motion, collisions are elastic, and intermolecular forces are negligible except during collisions. It shows that temperature is proportional to average kinetic energy and derives gas laws from molecular behavior.",
                    es: "La teoría cinética explica las propiedades de los gases a través de suposiciones sobre movimiento molecular: las moléculas son masas puntuales en movimiento aleatorio constante, las colisiones son elásticas, y las fuerzas intermoleculares son despreciables excepto durante colisiones. Muestra que la temperatura es proporcional a la energía cinética promedio y deriva leyes de gases del comportamiento molecular.",
                    de: "Die kinetische Theorie erklärt Gaseigenschaften durch molekulare Bewegungsannahmen: Moleküle sind Punktmassen in konstanter zufälliger Bewegung, Kollisionen sind elastisch, und intermolekulare Kräfte sind vernachlässigbar außer während Kollisionen. Sie zeigt, dass Temperatur proportional zur durchschnittlichen kinetischen Energie ist und leitet Gasgesetze aus molekularem Verhalten ab.",
                    nl: "Kinetische theorie verklaart gaseigenschappen door moleculaire bewegingsaannames: moleculen zijn puntmassa's in constante willekeurige beweging, botsingen zijn elastisch, en intermoleculaire krachten zijn verwaarloosbaar behalve tijdens botsingen. Het toont dat temperatuur evenredig is met gemiddelde kinetische energie en leidt gaswetten af uit moleculair gedrag."
                }
            },
            {
                question: {
                    en: "What is the relationship between entropy and the number of microstates in a system?",
                    es: "¿Cuál es la relación entre entropía y el número de microestados en un sistema?",
                    de: "Wie ist die Beziehung zwischen Entropie und der Anzahl von Mikrozuständen in einem System?",
                    nl: "Wat is de relatie tussen entropie en het aantal microtoestanden in een systeem?"
                },
                options: [
                    {
                        en: "S = k ln(Ω), where Ω is the number of microstates and k is Boltzmann's constant",
                        es: "S = k ln(Ω), donde Ω es el número de microestados y k es la constante de Boltzmann",
                        de: "S = k ln(Ω), wobei Ω die Anzahl der Mikrozustände und k die Boltzmann-Konstante ist",
                        nl: "S = k ln(Ω), waarbij Ω het aantal microtoestanden is en k de constante van Boltzmann"
                    },
                    {
                        en: "Entropy is inversely proportional to the number of microstates",
                        es: "La entropía es inversamente proporcional al número de microestados",
                        de: "Entropie ist umgekehrt proportional zur Anzahl der Mikrozustände",
                        nl: "Entropie is omgekeerd evenredig met het aantal microtoestanden"
                    },
                    {
                        en: "There is no mathematical relationship between entropy and microstates",
                        es: "No hay relación matemática entre entropía y microestados",
                        de: "Es gibt keine mathematische Beziehung zwischen Entropie und Mikrozuständen",
                        nl: "Er is geen wiskundige relatie tussen entropie en microtoestanden"
                    },
                    {
                        en: "Entropy equals the square of the number of microstates",
                        es: "La entropía es igual al cuadrado del número de microestados",
                        de: "Entropie gleich dem Quadrat der Anzahl von Mikrozuständen",
                        nl: "Entropie is gelijk aan het kwadraat van het aantal microtoestanden"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Boltzmann's entropy formula S = k ln(Ω) connects the macroscopic concept of entropy to the microscopic number of ways (Ω) a system can be arranged. More microstates mean higher entropy, reflecting greater disorder at the molecular level.",
                    es: "La fórmula de entropía de Boltzmann S = k ln(Ω) conecta el concepto macroscópico de entropía con el número microscópico de maneras (Ω) en que un sistema puede organizarse. Más microestados significan mayor entropía, reflejando mayor desorden a nivel molecular.",
                    de: "Boltzmanns Entropieformel S = k ln(Ω) verbindet das makroskopische Konzept der Entropie mit der mikroskopischen Anzahl von Möglichkeiten (Ω), wie ein System angeordnet werden kann. Mehr Mikrozustände bedeuten höhere Entropie und spiegeln größere Unordnung auf molekularer Ebene wider.",
                    nl: "Boltzmann's entropieformule S = k ln(Ω) verbindt het macroscopische concept van entropie met het microscopische aantal manieren (Ω) waarop een systeem kan worden gerangschikt. Meer microtoestanden betekenen hogere entropie, wat meer wanorde op moleculair niveau weergeeft."
                }
            },
            {
                question: {
                    en: "What is the Maxwell-Boltzmann distribution?",
                    es: "¿Qué es la distribución de Maxwell-Boltzmann?",
                    de: "Was ist die Maxwell-Boltzmann-Verteilung?",
                    nl: "Wat is de Maxwell-Boltzmann verdeling?"
                },
                options: [
                    {
                        en: "The probability distribution of molecular speeds in an ideal gas at thermal equilibrium",
                        es: "La distribución de probabilidad de velocidades moleculares en un gas ideal en equilibrio térmico",
                        de: "Die Wahrscheinlichkeitsverteilung molekularer Geschwindigkeiten in einem idealen Gas im thermischen Gleichgewicht",
                        nl: "De waarschijnlijkheidsverdeling van moleculaire snelheden in een ideaal gas in thermisch evenwicht"
                    },
                    {
                        en: "The distribution of energy levels in atoms",
                        es: "La distribución de niveles de energía en átomos",
                        de: "Die Verteilung von Energieniveaus in Atomen",
                        nl: "De verdeling van energieniveaus in atomen"
                    },
                    {
                        en: "The temperature profile in a heated solid",
                        es: "El perfil de temperatura en un sólido calentado",
                        de: "Das Temperaturprofil in einem erhitzten Festkörper",
                        nl: "Het temperatuurprofiel in een verwarmd vast voorwerp"
                    },
                    {
                        en: "The pressure distribution in fluids",
                        es: "La distribución de presión en fluidos",
                        de: "Die Druckverteilung in Flüssigkeiten",
                        nl: "De drukverdeling in vloeistoffen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Maxwell-Boltzmann distribution describes how molecular speeds are distributed in a gas at thermal equilibrium. It shows most molecules have intermediate speeds, with few very slow or very fast molecules. The distribution shifts to higher speeds as temperature increases.",
                    es: "La distribución de Maxwell-Boltzmann describe cómo se distribuyen las velocidades moleculares en un gas en equilibrio térmico. Muestra que la mayoría de las moléculas tienen velocidades intermedias, con pocas moléculas muy lentas o muy rápidas. La distribución se desplaza a velocidades más altas al aumentar la temperatura.",
                    de: "Die Maxwell-Boltzmann-Verteilung beschreibt, wie molekulare Geschwindigkeiten in einem Gas im thermischen Gleichgewicht verteilt sind. Sie zeigt, dass die meisten Moleküle mittlere Geschwindigkeiten haben, mit wenigen sehr langsamen oder sehr schnellen Molekülen. Die Verteilung verschiebt sich zu höheren Geschwindigkeiten, wenn die Temperatur steigt.",
                    nl: "De Maxwell-Boltzmann verdeling beschrijft hoe moleculaire snelheden verdeeld zijn in een gas in thermisch evenwicht. Het toont dat de meeste moleculen gemiddelde snelheden hebben, met weinig zeer langzame of zeer snelle moleculen. De verdeling verschuift naar hogere snelheden wanneer de temperatuur stijgt."
                }
            },
            {
                question: {
                    en: "What is the difference between reversible and irreversible thermodynamic processes?",
                    es: "¿Cuál es la diferencia entre procesos termodinámicos reversibles e irreversibles?",
                    de: "Was ist der Unterschied zwischen reversiblen und irreversiblen thermodynamischen Prozessen?",
                    nl: "Wat is het verschil tussen omkeerbare en onomkeerbare thermodynamische processen?"
                },
                options: [
                    {
                        en: "Reversible processes can be undone without net change to surroundings; irreversible processes increase total entropy",
                        es: "Los procesos reversibles pueden deshacerse sin cambio neto en el entorno; los procesos irreversibles aumentan la entropía total",
                        de: "Reversible Prozesse können ohne Nettoänderung der Umgebung rückgängig gemacht werden; irreversible Prozesse erhöhen die Gesamtentropie",
                        nl: "Omkeerbare processen kunnen ongedaan worden gemaakt zonder nettoverandering in de omgeving; onomkeerbare processen verhogen de totale entropie"
                    },
                    {
                        en: "Reversible processes happen quickly; irreversible processes happen slowly",
                        es: "Los procesos reversibles ocurren rápidamente; los procesos irreversibles ocurren lentamente",
                        de: "Reversible Prozesse laufen schnell ab; irreversible Prozesse laufen langsam ab",
                        nl: "Omkeerbare processen gebeuren snel; onomkeerbare processen gebeuren langzaam"
                    },
                    {
                        en: "Reversible processes require external energy; irreversible processes are spontaneous",
                        es: "Los procesos reversibles requieren energía externa; los procesos irreversibles son espontáneos",
                        de: "Reversible Prozesse benötigen externe Energie; irreversible Prozesse sind spontan",
                        nl: "Omkeerbare processen vereisen externe energie; onomkeerbare processen zijn spontaan"
                    },
                    {
                        en: "There is no fundamental difference between these process types",
                        es: "No hay diferencia fundamental entre estos tipos de procesos",
                        de: "Es gibt keinen grundlegenden Unterschied zwischen diesen Prozesstypen",
                        nl: "Er is geen fundamenteel verschil tussen deze proces typen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Reversible processes are idealized processes that can be reversed without leaving any trace on the surroundings, maintaining constant entropy. Real processes are irreversible and increase total entropy according to the Second Law. Reversible processes represent the maximum efficiency limit.",
                    es: "Los procesos reversibles son procesos idealizados que pueden revertirse sin dejar rastro en el entorno, manteniendo entropía constante. Los procesos reales son irreversibles y aumentan la entropía total según la Segunda Ley. Los procesos reversibles representan el límite máximo de eficiencia.",
                    de: "Reversible Prozesse sind idealisierte Prozesse, die ohne Spuren in der Umgebung umgekehrt werden können und konstante Entropie aufrechterhalten. Reale Prozesse sind irreversibel und erhöhen die Gesamtentropie nach dem Zweiten Hauptsatz. Reversible Prozesse stellen die maximale Effizienzgrenze dar.",
                    nl: "Omkeerbare processen zijn geïdealiseerde processen die omgekeerd kunnen worden zonder sporen achter te laten in de omgeving, waarbij constante entropie behouden blijft. Echte processen zijn onomkeerbaar en verhogen totale entropie volgens de Tweede Wet. Omkeerbare processen vertegenwoordigen de maximale efficiëntiegrens."
                }
            },
            {
                question: {
                    en: "What is the Joule-Thomson effect?",
                    es: "¿Qué es el efecto Joule-Thomson?",
                    de: "Was ist der Joule-Thomson-Effekt?",
                    nl: "Wat is het Joule-Thomson effect?"
                },
                options: [
                    {
                        en: "The temperature change of a real gas when it expands through a throttling valve at constant enthalpy",
                        es: "El cambio de temperatura de un gas real cuando se expande a través de una válvula de estrangulación a entalpía constante",
                        de: "Die Temperaturänderung eines realen Gases, wenn es durch ein Drosselventil bei konstanter Enthalpie expandiert",
                        nl: "De temperatuurverandering van een echt gas wanneer het uitzet door een smoorklep bij constante enthalpie"
                    },
                    {
                        en: "The heating effect when electric current passes through a resistor",
                        es: "El efecto de calentamiento cuando la corriente eléctrica pasa a través de una resistencia",
                        de: "Der Heizeffekt, wenn elektrischer Strom durch einen Widerstand fließt",
                        nl: "Het verwarmingseffect wanneer elektrische stroom door een weerstand gaat"
                    },
                    {
                        en: "The pressure drop in flowing fluids",
                        es: "La caída de presión en fluidos que fluyen",
                        de: "Der Druckabfall in strömenden Flüssigkeiten",
                        nl: "De drukval in stromende vloeistoffen"
                    },
                    {
                        en: "The expansion of solids when heated",
                        es: "La expansión de sólidos cuando se calientan",
                        de: "Die Ausdehnung von Festkörpern beim Erhitzen",
                        nl: "De uitzetting van vaste stoffen bij verwarming"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Joule-Thomson effect describes how real gases change temperature during throttling expansion at constant enthalpy. Most gases cool during expansion (positive Joule-Thomson coefficient), but some warm up at certain conditions. This effect is used in gas liquefaction and refrigeration.",
                    es: "El efecto Joule-Thomson describe cómo los gases reales cambian de temperatura durante la expansión de estrangulación a entalpía constante. La mayoría de los gases se enfrían durante la expansión (coeficiente Joule-Thomson positivo), pero algunos se calientan bajo ciertas condiciones. Este efecto se usa en licuefacción de gases y refrigeración.",
                    de: "Der Joule-Thomson-Effekt beschreibt, wie reale Gase ihre Temperatur während der Drosselexpansion bei konstanter Enthalpie ändern. Die meisten Gase kühlen sich während der Expansion ab (positiver Joule-Thomson-Koeffizient), aber einige erwärmen sich unter bestimmten Bedingungen. Dieser Effekt wird bei der Gasverflüssigung und Kühlung verwendet.",
                    nl: "Het Joule-Thomson effect beschrijft hoe echte gassen van temperatuur veranderen tijdens smoorexpansie bij constante enthalpie. De meeste gassen koelen af tijdens expansie (positieve Joule-Thomson coëfficiënt), maar sommige warmen op onder bepaalde omstandigheden. Dit effect wordt gebruikt bij gasvervloeibaarmaking en koeling."
                }
            },
            {
                question: {
                    en: "What is Wien's displacement law?",
                    es: "¿Qué es la ley de desplazamiento de Wien?",
                    de: "Was ist das Wiensche Verschiebungsgesetz?",
                    nl: "Wat is Wien's verschuivingswet?"
                },
                options: [
                    {
                        en: "The wavelength of peak blackbody emission is inversely proportional to temperature (λₘₐₓ = b/T)",
                        es: "La longitud de onda de emisión máxima de cuerpo negro es inversamente proporcional a la temperatura (λₘₐₓ = b/T)",
                        de: "Die Wellenlänge der maximalen Schwarzkörperemission ist umgekehrt proportional zur Temperatur (λₘₐₓ = b/T)",
                        nl: "De golflengte van piek zwarte-lichaamsemissie is omgekeerd evenredig met temperatuur (λₘₐₓ = b/T)"
                    },
                    {
                        en: "The frequency of electromagnetic waves increases with distance",
                        es: "La frecuencia de ondas electromagnéticas aumenta con la distancia",
                        de: "Die Frequenz elektromagnetischer Wellen nimmt mit der Entfernung zu",
                        nl: "De frequentie van elektromagnetische golven neemt toe met afstand"
                    },
                    {
                        en: "Light bends when passing through different media",
                        es: "La luz se curva al pasar por diferentes medios",
                        de: "Licht biegt sich beim Durchgang durch verschiedene Medien",
                        nl: "Licht buigt bij het passeren door verschillende media"
                    },
                    {
                        en: "The speed of light varies with temperature",
                        es: "La velocidad de la luz varía con la temperatura",
                        de: "Die Lichtgeschwindigkeit variiert mit der Temperatur",
                        nl: "De lichtsnelheid varieert met temperatuur"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Wien's displacement law states that λₘₐₓT = b, where b = 2.898×10⁻³ m·K. Hot objects emit peak radiation at shorter wavelengths (blue/UV), while cooler objects peak at longer wavelengths (red/IR). This explains why stars have different colors based on temperature.",
                    es: "La ley de desplazamiento de Wien establece que λₘₐₓT = b, donde b = 2.898×10⁻³ m·K. Los objetos calientes emiten radiación máxima en longitudes de onda más cortas (azul/UV), mientras que los objetos más fríos alcanzan su máximo en longitudes de onda más largas (rojo/IR). Esto explica por qué las estrellas tienen diferentes colores según la temperatura.",
                    de: "Das Wiensche Verschiebungsgesetz besagt, dass λₘₐₓT = b, wobei b = 2,898×10⁻³ m·K. Heiße Objekte emittieren Spitzenstrahlung bei kürzeren Wellenlängen (blau/UV), während kühlere Objekte bei längeren Wellenlängen (rot/IR) ihren Höhepunkt haben. Dies erklärt, warum Sterne je nach Temperatur verschiedene Farben haben.",
                    nl: "Wien's verschuivingswet stelt dat λₘₐₓT = b, waarbij b = 2.898×10⁻³ m·K. Hete objecten zenden piekstraling uit bij kortere golflengten (blauw/UV), terwijl koelere objecten pieken bij langere golflengten (rood/IR). Dit verklaart waarom sterren verschillende kleuren hebben gebaseerd op temperatuur."
                }
            },
            {
                question: {
                    en: "What is the triple point of a substance?",
                    es: "¿Qué es el punto triple de una sustancia?",
                    de: "Was ist der Tripelpunkt einer Substanz?",
                    nl: "Wat is het tripelpunt van een stof?"
                },
                options: [
                    {
                        en: "The unique temperature and pressure where solid, liquid, and gas phases coexist in equilibrium",
                        es: "La temperatura y presión únicas donde las fases sólida, líquida y gaseosa coexisten en equilibrio",
                        de: "Die einzigartige Temperatur und der Druck, bei denen feste, flüssige und gasförmige Phasen im Gleichgewicht koexistieren",
                        nl: "De unieke temperatuur en druk waarbij vaste, vloeibare en gasvormige fasen in evenwicht naast elkaar bestaan"
                    },
                    {
                        en: "The temperature at which three different chemical reactions occur simultaneously",
                        es: "La temperatura a la cual ocurren simultáneamente tres reacciones químicas diferentes",
                        de: "Die Temperatur, bei der drei verschiedene chemische Reaktionen gleichzeitig auftreten",
                        nl: "De temperatuur waarbij drie verschillende chemische reacties gelijktijdig optreden"
                    },
                    {
                        en: "The point where thermal expansion stops in all three dimensions",
                        es: "El punto donde la expansión térmica se detiene en las tres dimensiones",
                        de: "Der Punkt, wo die thermische Ausdehnung in allen drei Dimensionen aufhört",
                        nl: "Het punt waar thermische uitzetting stopt in alle drie dimensies"
                    },
                    {
                        en: "The maximum density point of a substance",
                        es: "El punto de densidad máxima de una sustancia",
                        de: "Der maximale Dichtepunkt einer Substanz",
                        nl: "Het maximale dichtheidspunt van een stof"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The triple point is the unique combination of temperature and pressure where all three phases of a substance can exist simultaneously in thermodynamic equilibrium. For water, this occurs at 273.16 K (0.01°C) and 611.657 Pa. The triple point of water defines the Kelvin temperature scale.",
                    es: "El punto triple es la combinación única de temperatura y presión donde las tres fases de una sustancia pueden existir simultáneamente en equilibrio termodinámico. Para el agua, esto ocurre a 273.16 K (0.01°C) y 611.657 Pa. El punto triple del agua define la escala de temperatura Kelvin.",
                    de: "Der Tripelpunkt ist die einzigartige Kombination von Temperatur und Druck, bei der alle drei Phasen einer Substanz gleichzeitig im thermodynamischen Gleichgewicht existieren können. Für Wasser tritt dies bei 273,16 K (0,01°C) und 611,657 Pa auf. Der Tripelpunkt des Wassers definiert die Kelvin-Temperaturskala.",
                    nl: "Het tripelpunt is de unieke combinatie van temperatuur en druk waarbij alle drie fasen van een stof gelijktijdig kunnen bestaan in thermodynamisch evenwicht. Voor water gebeurt dit bij 273.16 K (0.01°C) en 611.657 Pa. Het tripelpunt van water definieert de Kelvin temperatuurschaal."
                }
            },
            {
                question: {
                    en: "What is the difference between heat capacity and specific heat capacity?",
                    es: "¿Cuál es la diferencia entre capacidad calorífica y capacidad calorífica específica?",
                    de: "Was ist der Unterschied zwischen Wärmekapazität und spezifischer Wärmekapazität?",
                    nl: "Wat is het verschil tussen warmtecapaciteit en soortelijke warmte?"
                },
                options: [
                    {
                        en: "Heat capacity is per object (C = Q/ΔT); specific heat capacity is per unit mass (c = C/m)",
                        es: "La capacidad calorífica es por objeto (C = Q/ΔT); la capacidad calorífica específica es por unidad de masa (c = C/m)",
                        de: "Wärmekapazität ist pro Objekt (C = Q/ΔT); spezifische Wärmekapazität ist pro Masseneinheit (c = C/m)",
                        nl: "Warmtecapaciteit is per object (C = Q/ΔT); soortelijke warmte is per massa-eenheid (c = C/m)"
                    },
                    {
                        en: "Heat capacity measures temperature; specific heat capacity measures energy",
                        es: "La capacidad calorífica mide temperatura; la capacidad calorífica específica mide energía",
                        de: "Wärmekapazität misst Temperatur; spezifische Wärmekapazität misst Energie",
                        nl: "Warmtecapaciteit meet temperatuur; soortelijke warmte meet energie"
                    },
                    {
                        en: "Heat capacity is for solids; specific heat capacity is for liquids",
                        es: "La capacidad calorífica es para sólidos; la capacidad calorífica específica es para líquidos",
                        de: "Wärmekapazität ist für Feststoffe; spezifische Wärmekapazität ist für Flüssigkeiten",
                        nl: "Warmtecapaciteit is voor vaste stoffen; soortelijke warmte is voor vloeistoffen"
                    },
                    {
                        en: "There is no difference between these two concepts",
                        es: "No hay diferencia entre estos dos conceptos",
                        de: "Es gibt keinen Unterschied zwischen diesen beiden Konzepten",
                        nl: "Er is geen verschil tussen deze twee concepten"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Heat capacity (C) is the energy required to raise the temperature of an entire object by 1 K, measured in J/K. Specific heat capacity (c) is the energy required to raise 1 kg of a substance by 1 K, measured in J/(kg·K). They relate through C = mc, where m is mass.",
                    es: "La capacidad calorífica (C) es la energía requerida para elevar la temperatura de un objeto completo en 1 K, medida en J/K. La capacidad calorífica específica (c) es la energía requerida para elevar 1 kg de una sustancia en 1 K, medida en J/(kg·K). Se relacionan a través de C = mc, donde m es masa.",
                    de: "Wärmekapazität (C) ist die Energie, die benötigt wird, um die Temperatur eines ganzen Objekts um 1 K zu erhöhen, gemessen in J/K. Spezifische Wärmekapazität (c) ist die Energie, die benötigt wird, um 1 kg einer Substanz um 1 K zu erhöhen, gemessen in J/(kg·K). Sie sind durch C = mc verbunden, wobei m die Masse ist.",
                    nl: "Warmtecapaciteit (C) is de energie die nodig is om de temperatuur van een heel object met 1 K te verhogen, gemeten in J/K. Soortelijke warmte (c) is de energie die nodig is om 1 kg van een stof met 1 K te verhogen, gemeten in J/(kg·K). Ze zijn gerelateerd door C = mc, waarbij m massa is."
                }
            },
            {
                question: {
                    en: "What is the Clausius-Clapeyron equation?",
                    es: "¿Qué es la ecuación de Clausius-Clapeyron?",
                    de: "Was ist die Clausius-Clapeyron-Gleichung?",
                    nl: "Wat is de Clausius-Clapeyron vergelijking?"
                },
                options: [
                    {
                        en: "An equation relating the slope of phase boundary curves to latent heat: dP/dT = L/(TΔV)",
                        es: "Una ecuación que relaciona la pendiente de las curvas de frontera de fase con el calor latente: dP/dT = L/(TΔV)",
                        de: "Eine Gleichung, die die Steigung von Phasengrenzenkurven mit latenter Wärme verknüpft: dP/dT = L/(TΔV)",
                        nl: "Een vergelijking die de helling van fasegrenskrommen relateert aan latente warmte: dP/dT = L/(TΔV)"
                    },
                    {
                        en: "The relationship between gas pressure and temperature",
                        es: "La relación entre presión de gas y temperatura",
                        de: "Die Beziehung zwischen Gasdruck und Temperatur",
                        nl: "De relatie tussen gasdruk en temperatuur"
                    },
                    {
                        en: "An equation for calculating thermal expansion coefficients",
                        es: "Una ecuación para calcular coeficientes de expansión térmica",
                        de: "Eine Gleichung zur Berechnung thermischer Ausdehnungskoeffizienten",
                        nl: "Een vergelijking voor het berekenen van thermische uitzettingscoëfficiënten"
                    },
                    {
                        en: "The formula for entropy change in reversible processes",
                        es: "La fórmula para cambio de entropía en procesos reversibles",
                        de: "Die Formel für Entropieänderung in reversiblen Prozessen",
                        nl: "De formule voor entropieverandering in omkeerbare processen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Clausius-Clapeyron equation describes how pressure and temperature relate along phase transition boundaries. The slope dP/dT equals the latent heat L divided by the product of temperature and volume change (TΔV). This explains why ice melts under pressure and water's unusual phase diagram.",
                    es: "La ecuación de Clausius-Clapeyron describe cómo la presión y temperatura se relacionan a lo largo de las fronteras de transición de fase. La pendiente dP/dT es igual al calor latente L dividido por el producto de temperatura y cambio de volumen (TΔV). Esto explica por qué el hielo se derrite bajo presión y el diagrama de fase inusual del agua.",
                    de: "Die Clausius-Clapeyron-Gleichung beschreibt, wie Druck und Temperatur entlang Phasenübergangsgrenzen zusammenhängen. Die Steigung dP/dT entspricht der latenten Wärme L geteilt durch das Produkt aus Temperatur und Volumenänderung (TΔV). Dies erklärt, warum Eis unter Druck schmilzt und Wassers ungewöhnliches Phasendiagramm.",
                    nl: "De Clausius-Clapeyron vergelijking beschrijft hoe druk en temperatuur relateren langs faseovergangsgrenzen. De helling dP/dT is gelijk aan de latente warmte L gedeeld door het product van temperatuur en volumeverandering (TΔV). Dit verklaart waarom ijs smelt onder druk en water's ongewone fasediagram."
                }
            },
            {
                question: {
                    en: "What is the significance of absolute temperature in thermodynamics?",
                    es: "¿Cuál es el significado de la temperatura absoluta en termodinámica?",
                    de: "Was ist die Bedeutung der absoluten Temperatur in der Thermodynamik?",
                    nl: "Wat is de betekenis van absolute temperatuur in de thermodynamica?"
                },
                options: [
                    {
                        en: "Absolute temperature is proportional to average molecular kinetic energy and makes thermodynamic laws universal",
                        es: "La temperatura absoluta es proporcional a la energía cinética molecular promedio y hace universales las leyes termodinámicas",
                        de: "Absolute Temperatur ist proportional zur mittleren molekularen kinetischen Energie und macht thermodynamische Gesetze universell",
                        nl: "Absolute temperatuur is evenredig met gemiddelde moleculaire kinetische energie en maakt thermodynamische wetten universeel"
                    },
                    {
                        en: "Absolute temperature is needed to measure heat accurately",
                        es: "La temperatura absoluta es necesaria para medir el calor con precisión",
                        de: "Absolute Temperatur wird benötigt, um Wärme genau zu messen",
                        nl: "Absolute temperatuur is nodig om warmte nauwkeurig te meten"
                    },
                    {
                        en: "Absolute temperature only applies to gases, not solids or liquids",
                        es: "La temperatura absoluta solo se aplica a gases, no a sólidos o líquidos",
                        de: "Absolute Temperatur gilt nur für Gase, nicht für Feststoffe oder Flüssigkeiten",
                        nl: "Absolute temperatuur geldt alleen voor gassen, niet voor vaste stoffen of vloeistoffen"
                    },
                    {
                        en: "Absolute temperature is just a mathematical convenience with no physical meaning",
                        es: "La temperatura absoluta es solo una conveniencia matemática sin significado físico",
                        de: "Absolute Temperatur ist nur eine mathematische Bequemlichkeit ohne physikalische Bedeutung",
                        nl: "Absolute temperatuur is slechts een wiskundige gemak zonder fysieke betekenis"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Absolute temperature (Kelvin scale) is fundamental because it's directly proportional to average molecular kinetic energy through (3/2)kT. This makes thermodynamic equations universal and allows concepts like efficiency limits and entropy to be precisely defined. Zero absolute temperature represents the theoretical minimum kinetic energy state.",
                    es: "La temperatura absoluta (escala Kelvin) es fundamental porque es directamente proporcional a la energía cinética molecular promedio a través de (3/2)kT. Esto hace universales las ecuaciones termodinámicas y permite que conceptos como límites de eficiencia y entropía se definan con precisión. Cero absoluto representa el estado teórico de energía cinética mínima.",
                    de: "Absolute Temperatur (Kelvin-Skala) ist grundlegend, weil sie direkt proportional zur mittleren molekularen kinetischen Energie durch (3/2)kT ist. Dies macht thermodynamische Gleichungen universell und ermöglicht es, Konzepte wie Effizienzgrenzen und Entropie präzise zu definieren. Null absolute Temperatur stellt den theoretischen minimalen kinetischen Energiezustand dar.",
                    nl: "Absolute temperatuur (Kelvin schaal) is fundamenteel omdat het direct evenredig is met gemiddelde moleculaire kinetische energie door (3/2)kT. Dit maakt thermodynamische vergelijkingen universeel en stelt concepten zoals efficiëntiegrenzen en entropie in staat precies gedefinieerd te worden. Nul absolute temperatuur vertegenwoordigt de theoretische minimale kinetische energietoestand."
                }
            },
            {
                question: {
                    en: "What happens to entropy during a spontaneous process?",
                    es: "¿Qué sucede con la entropía durante un proceso espontáneo?",
                    de: "Was passiert mit der Entropie bei einem spontanen Prozess?",
                    nl: "Wat gebeurt er met entropie tijdens een spontaan proces?"
                },
                options: [
                    {
                        en: "The total entropy of the universe increases, even if local entropy decreases",
                        es: "La entropía total del universo aumenta, aunque la entropía local disminuya",
                        de: "Die Gesamtentropie des Universums nimmt zu, auch wenn die lokale Entropie abnimmt",
                        nl: "De totale entropie van het universum neemt toe, zelfs als lokale entropie afneemt"
                    },
                    {
                        en: "Entropy always decreases in spontaneous processes",
                        es: "La entropía siempre disminuye en procesos espontáneos",
                        de: "Entropie nimmt bei spontanen Prozessen immer ab",
                        nl: "Entropie neemt altijd af bij spontane processen"
                    },
                    {
                        en: "Entropy remains constant in all spontaneous processes",
                        es: "La entropía permanece constante en todos los procesos espontáneos",
                        de: "Entropie bleibt bei allen spontanen Prozessen konstant",
                        nl: "Entropie blijft constant bij alle spontane processen"
                    },
                    {
                        en: "Entropy change is unpredictable in spontaneous processes",
                        es: "El cambio de entropía es impredecible en procesos espontáneos",
                        de: "Entropieänderung ist bei spontanen Prozessen unvorhersagbar",
                        nl: "Entropieverandering is onvoorspelbaar bij spontane processen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "According to the Second Law, the total entropy of the universe always increases during spontaneous processes (ΔS_total > 0). While local entropy can decrease (like in biological systems or crystallization), this is always compensated by larger entropy increases elsewhere, ensuring net positive entropy change.",
                    es: "Según la Segunda Ley, la entropía total del universo siempre aumenta durante procesos espontáneos (ΔS_total > 0). Aunque la entropía local puede disminuir (como en sistemas biológicos o cristalización), esto siempre se compensa con aumentos mayores de entropía en otros lugares, asegurando un cambio neto positivo de entropía.",
                    de: "Nach dem Zweiten Hauptsatz nimmt die Gesamtentropie des Universums bei spontanen Prozessen immer zu (ΔS_total > 0). Während lokale Entropie abnehmen kann (wie in biologischen Systemen oder Kristallisation), wird dies immer durch größere Entropiezunahmen anderswo kompensiert, was eine netto positive Entropieänderung sicherstellt.",
                    nl: "Volgens de Tweede Wet neemt de totale entropie van het universum altijd toe tijdens spontane processen (ΔS_totaal > 0). Hoewel lokale entropie kan afnemen (zoals in biologische systemen of kristallisatie), wordt dit altijd gecompenseerd door grotere entropiestijgingen elders, wat netto positieve entropieverandering garandeert."
                }
            },
            {
                question: {
                    en: "What is thermal equilibrium and its relationship to temperature?",
                    es: "¿Qué es el equilibrio térmico y su relación con la temperatura?",
                    de: "Was ist thermisches Gleichgewicht und seine Beziehung zur Temperatur?",
                    nl: "Wat is thermisch evenwicht en zijn relatie tot temperatuur?"
                },
                options: [
                    {
                        en: "A state where objects have the same temperature and no net heat flow occurs between them",
                        es: "Un estado donde los objetos tienen la misma temperatura y no ocurre flujo neto de calor entre ellos",
                        de: "Ein Zustand, in dem Objekte dieselbe Temperatur haben und kein Netto-Wärmefluss zwischen ihnen auftritt",
                        nl: "Een toestand waarbij objecten dezelfde temperatuur hebben en er geen netto warmtestroom tussen hen optreedt"
                    },
                    {
                        en: "When all objects in a system have equal mass",
                        es: "Cuando todos los objetos en un sistema tienen igual masa",
                        de: "Wenn alle Objekte in einem System gleiche Masse haben",
                        nl: "Wanneer alle objecten in een systeem gelijke massa hebben"
                    },
                    {
                        en: "The point where thermal expansion stops",
                        es: "El punto donde la expansión térmica se detiene",
                        de: "Der Punkt, wo thermische Ausdehnung aufhört",
                        nl: "Het punt waar thermische uitzetting stopt"
                    },
                    {
                        en: "When heat capacity becomes infinite",
                        es: "Cuando la capacidad calorífica se vuelve infinita",
                        de: "Wenn die Wärmekapazität unendlich wird",
                        nl: "Wanneer warmtecapaciteit oneindig wordt"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Thermal equilibrium is achieved when objects reach the same temperature and heat flow between them ceases. This is the basis of the Zeroth Law of Thermodynamics, which defines temperature as the property that determines thermal equilibrium. Objects in thermal equilibrium have equal average molecular kinetic energies.",
                    es: "El equilibrio térmico se alcanza cuando los objetos alcanzan la misma temperatura y cesa el flujo de calor entre ellos. Esta es la base de la Ley Cero de la Termodinámica, que define la temperatura como la propiedad que determina el equilibrio térmico. Los objetos en equilibrio térmico tienen energías cinéticas moleculares promedio iguales.",
                    de: "Thermisches Gleichgewicht wird erreicht, wenn Objekte dieselbe Temperatur erreichen und der Wärmefluss zwischen ihnen aufhört. Dies ist die Grundlage des Nullten Hauptsatzes der Thermodynamik, der Temperatur als die Eigenschaft definiert, die thermisches Gleichgewicht bestimmt. Objekte im thermischen Gleichgewicht haben gleiche mittlere molekulare kinetische Energien.",
                    nl: "Thermisch evenwicht wordt bereikt wanneer objecten dezelfde temperatuur bereiken en warmtestroom tussen hen ophoudt. Dit is de basis van de Nulde Wet van de Thermodynamica, die temperatuur definieert als de eigenschap die thermisch evenwicht bepaalt. Objecten in thermisch evenwicht hebben gelijke gemiddelde moleculaire kinetische energieën."
                }
            },
            {
                question: {
                    en: "What is the difference between intensive and extensive thermodynamic properties?",
                    es: "¿Cuál es la diferencia entre propiedades termodinámicas intensivas y extensivas?",
                    de: "Was ist der Unterschied zwischen intensiven und extensiven thermodynamischen Eigenschaften?",
                    nl: "Wat is het verschil tussen intensieve en extensieve thermodynamische eigenschappen?"
                },
                options: [
                    {
                        en: "Intensive properties are independent of system size (T, P); extensive properties depend on amount (V, U, S)",
                        es: "Las propiedades intensivas son independientes del tamaño del sistema (T, P); las propiedades extensivas dependen de la cantidad (V, U, S)",
                        de: "Intensive Eigenschaften sind unabhängig von der Systemgröße (T, P); extensive Eigenschaften hängen von der Menge ab (V, U, S)",
                        nl: "Intensieve eigenschappen zijn onafhankelijk van systeemgrootte (T, P); extensieve eigenschappen hangen af van hoeveelheid (V, U, S)"
                    },
                    {
                        en: "Intensive properties are measured in SI units; extensive properties use Imperial units",
                        es: "Las propiedades intensivas se miden en unidades SI; las propiedades extensivas usan unidades imperiales",
                        de: "Intensive Eigenschaften werden in SI-Einheiten gemessen; extensive Eigenschaften verwenden imperiale Einheiten",
                        nl: "Intensieve eigenschappen worden gemeten in SI eenheden; extensieve eigenschappen gebruiken Engelse eenheden"
                    },
                    {
                        en: "Intensive properties apply only to gases; extensive properties apply to solids and liquids",
                        es: "Las propiedades intensivas se aplican solo a gases; las propiedades extensivas se aplican a sólidos y líquidos",
                        de: "Intensive Eigenschaften gelten nur für Gase; extensive Eigenschaften gelten für Feststoffe und Flüssigkeiten",
                        nl: "Intensieve eigenschappen gelden alleen voor gassen; extensieve eigenschappen gelden voor vaste stoffen en vloeistoffen"
                    },
                    {
                        en: "There is no fundamental difference between these property types",
                        es: "No hay diferencia fundamental entre estos tipos de propiedades",
                        de: "Es gibt keinen grundlegenden Unterschied zwischen diesen Eigenschaftstypen",
                        nl: "Er is geen fundamenteel verschil tussen deze eigenschapstypen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Intensive properties (temperature, pressure, density, specific heat) don't depend on the amount of substance present - they're the same whether you have 1 g or 1 kg. Extensive properties (volume, internal energy, entropy, heat capacity) are proportional to the amount of substance. This distinction is crucial for scaling thermodynamic systems.",
                    es: "Las propiedades intensivas (temperatura, presión, densidad, calor específico) no dependen de la cantidad de sustancia presente - son las mismas ya sea que tengas 1 g o 1 kg. Las propiedades extensivas (volumen, energía interna, entropía, capacidad calorífica) son proporcionales a la cantidad de sustancia. Esta distinción es crucial para escalar sistemas termodinámicos.",
                    de: "Intensive Eigenschaften (Temperatur, Druck, Dichte, spezifische Wärme) hängen nicht von der vorhandenen Substanzmenge ab - sie sind gleich, ob man 1 g oder 1 kg hat. Extensive Eigenschaften (Volumen, innere Energie, Entropie, Wärmekapazität) sind proportional zur Substanzmenge. Diese Unterscheidung ist entscheidend für die Skalierung thermodynamischer Systeme.",
                    nl: "Intensieve eigenschappen (temperatuur, druk, dichtheid, soortelijke warmte) hangen niet af van de hoeveelheid aanwezige stof - ze zijn hetzelfde of je nu 1 g of 1 kg hebt. Extensieve eigenschappen (volume, interne energie, entropie, warmtecapaciteit) zijn evenredig met de hoeveelheid stof. Dit onderscheid is cruciaal voor het schalen van thermodynamische systemen."
                }
            },
            {
                question: {
                    en: "What is the equipartition theorem in statistical thermodynamics?",
                    es: "¿Qué es el teorema de equipartición en termodinámica estadística?",
                    de: "Was ist das Gleichverteilungstheorem in der statistischen Thermodynamik?",
                    nl: "Wat is de equipartitiestelling in statistische thermodynamica?"
                },
                options: [
                    {
                        en: "Each quadratic term in the energy expression contributes (1/2)kT to the average energy",
                        es: "Cada término cuadrático en la expresión de energía contribuye (1/2)kT a la energía promedio",
                        de: "Jeder quadratische Term im Energieausdruck trägt (1/2)kT zur durchschnittlichen Energie bei",
                        nl: "Elke kwadratische term in de energie-uitdrukking draagt (1/2)kT bij aan de gemiddelde energie"
                    },
                    {
                        en: "All particles in a system have equal kinetic energy",
                        es: "Todas las partículas en un sistema tienen igual energía cinética",
                        de: "Alle Teilchen in einem System haben gleiche kinetische Energie",
                        nl: "Alle deeltjes in een systeem hebben gelijke kinetische energie"
                    },
                    {
                        en: "Energy is equally distributed among all types of motion",
                        es: "La energía se distribuye igualmente entre todos los tipos de movimiento",
                        de: "Energie ist gleichmäßig auf alle Bewegungsarten verteilt",
                        nl: "Energie is gelijk verdeeld over alle soorten beweging"
                    },
                    {
                        en: "Temperature is the same in all parts of a system",
                        es: "La temperatura es la misma en todas las partes de un sistema",
                        de: "Temperatur ist in allen Teilen eines Systems gleich",
                        nl: "Temperatuur is hetzelfde in alle delen van een systeem"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The equipartition theorem states that each quadratic term (degree of freedom) in the energy expression contributes (1/2)kT to the average thermal energy. For a monatomic gas with 3 translational degrees of freedom, this gives E_avg = (3/2)kT per particle. This explains the temperature dependence of heat capacities.",
                    es: "El teorema de equipartición establece que cada término cuadrático (grado de libertad) en la expresión de energía contribuye (1/2)kT a la energía térmica promedio. Para un gas monoatómico con 3 grados de libertad traslacionales, esto da E_promedio = (3/2)kT por partícula. Esto explica la dependencia de temperatura de las capacidades caloríficas.",
                    de: "Das Gleichverteilungstheorem besagt, dass jeder quadratische Term (Freiheitsgrad) im Energieausdruck (1/2)kT zur durchschnittlichen thermischen Energie beiträgt. Für ein einatomiges Gas mit 3 translatorischen Freiheitsgraden ergibt dies E_durchschn = (3/2)kT pro Teilchen. Dies erklärt die Temperaturabhängigkeit von Wärmekapazitäten.",
                    nl: "De equipartitiestelling stelt dat elke kwadratische term (vrijheidsgraad) in de energie-uitdrukking (1/2)kT bijdraagt aan de gemiddelde thermische energie. Voor een eenatomig gas met 3 translationele vrijheidsgraden geeft dit E_gem = (3/2)kT per deeltje. Dit verklaart de temperatuurafhankelijkheid van warmtecapaciteiten."
                }
            },
            {
                question: {
                    en: "What is supercooling and why does it occur?",
                    es: "¿Qué es el sobreenfriamiento y por qué ocurre?",
                    de: "Was ist Unterkühlung und warum tritt sie auf?",
                    nl: "Wat is onderkoeling en waarom treedt het op?"
                },
                options: [
                    {
                        en: "Cooling a liquid below its freezing point without crystallization due to lack of nucleation sites",
                        es: "Enfriar un líquido por debajo de su punto de congelación sin cristalización debido a la falta de sitios de nucleación",
                        de: "Abkühlung einer Flüssigkeit unter ihren Gefrierpunkt ohne Kristallisation aufgrund fehlender Nukleationsstellen",
                        nl: "Afkoelen van een vloeistof onder haar vriespunt zonder kristallisatie door gebrek aan nucleatieplaatsen"
                    },
                    {
                        en: "Rapid cooling that changes the chemical composition of substances",
                        es: "Enfriamiento rápido que cambia la composición química de las sustancias",
                        de: "Schnelle Abkühlung, die die chemische Zusammensetzung von Substanzen verändert",
                        nl: "Snelle afkoeling die de chemische samenstelling van stoffen verandert"
                    },
                    {
                        en: "Cooling below absolute zero temperature",
                        es: "Enfriamiento por debajo de la temperatura de cero absoluto",
                        de: "Abkühlung unter die absolute Nulltemperatur",
                        nl: "Afkoeling onder absolute nultemperatuur"
                    },
                    {
                        en: "The maximum cooling rate possible for any substance",
                        es: "La tasa máxima de enfriamiento posible para cualquier sustancia",
                        de: "Die maximal mögliche Abkühlungsrate für jede Substanz",
                        nl: "De maximale afkoelingssnelheid mogelijk voor elke stof"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Supercooling occurs when a pure liquid is cooled below its freezing point without solidifying because crystallization requires nucleation sites (impurities, container walls, or disturbances). The liquid exists in a metastable state until nucleation is triggered, causing rapid crystallization and temperature rise to the freezing point.",
                    es: "El sobreenfriamiento ocurre cuando un líquido puro se enfría por debajo de su punto de congelación sin solidificarse porque la cristalización requiere sitios de nucleación (impurezas, paredes del contenedor, o perturbaciones). El líquido existe en un estado metaestable hasta que se desencadena la nucleación, causando cristalización rápida y aumento de temperatura al punto de congelación.",
                    de: "Unterkühlung tritt auf, wenn eine reine Flüssigkeit unter ihren Gefrierpunkt abgekühlt wird, ohne zu erstarren, weil Kristallisation Nukleationsstellen (Verunreinigungen, Behälterwände oder Störungen) benötigt. Die Flüssigkeit existiert in einem metastabilen Zustand, bis Nukleation ausgelöst wird, was schnelle Kristallisation und Temperaturanstieg auf den Gefrierpunkt verursacht.",
                    nl: "Onderkoeling treedt op wanneer een zuivere vloeistof onder haar vriespunt wordt afgekoeld zonder te stollen omdat kristallisatie nucleatieplaatsen vereist (onzuiverheden, containerwanden, of verstoringen). De vloeistof bestaat in een metastabiele toestand totdat nucleatie wordt getriggerd, wat snelle kristallisatie en temperatuurstijging naar het vriespunt veroorzaakt."
                }
            },
            {
                question: {
                    en: "What is the difference between heat and work in thermodynamics?",
                    es: "¿Cuál es la diferencia entre calor y trabajo en termodinámica?",
                    de: "Was ist der Unterschied zwischen Wärme und Arbeit in der Thermodynamik?",
                    nl: "Wat is het verschil tussen warmte en werk in de thermodynamica?"
                },
                options: [
                    {
                        en: "Heat is disordered energy transfer; work is ordered energy transfer through mechanical means",
                        es: "El calor es transferencia de energía desordenada; el trabajo es transferencia de energía ordenada a través de medios mecánicos",
                        de: "Wärme ist ungeordnete Energieübertragung; Arbeit ist geordnete Energieübertragung durch mechanische Mittel",
                        nl: "Warmte is ongeordende energieoverdracht; werk is geordende energieoverdracht door mechanische middelen"
                    },
                    {
                        en: "Heat is measured in Celsius; work is measured in Joules",
                        es: "El calor se mide en Celsius; el trabajo se mide en Joules",
                        de: "Wärme wird in Celsius gemessen; Arbeit wird in Joule gemessen",
                        nl: "Warmte wordt gemeten in Celsius; werk wordt gemeten in Joules"
                    },
                    {
                        en: "Heat only occurs in gases; work only occurs in solids",
                        es: "El calor solo ocurre en gases; el trabajo solo ocurre en sólidos",
                        de: "Wärme tritt nur in Gasen auf; Arbeit tritt nur in Feststoffen auf",
                        nl: "Warmte treedt alleen op in gassen; werk treedt alleen op in vaste stoffen"
                    },
                    {
                        en: "There is no fundamental difference between heat and work",
                        es: "No hay diferencia fundamental entre calor y trabajo",
                        de: "Es gibt keinen grundlegenden Unterschied zwischen Wärme und Arbeit",
                        nl: "Er is geen fundamenteel verschil tussen warmte en werk"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Heat involves random molecular motion and energy transfer due to temperature differences - it's 'disordered' energy. Work involves organized motion like piston movement or rotation - it's 'ordered' energy that can be completely converted to other forms. Both are energy in transit, but work has higher 'quality' or availability for useful purposes.",
                    es: "El calor involucra movimiento molecular aleatorio y transferencia de energía debido a diferencias de temperatura - es energía 'desordenada'. El trabajo involucra movimiento organizado como movimiento de pistón o rotación - es energía 'ordenada' que puede convertirse completamente a otras formas. Ambos son energía en tránsito, pero el trabajo tiene mayor 'calidad' o disponibilidad para propósitos útiles.",
                    de: "Wärme beinhaltet zufällige molekulare Bewegung und Energieübertragung aufgrund von Temperaturunterschieden - es ist 'ungeordnete' Energie. Arbeit beinhaltet organisierte Bewegung wie Kolbenbewegung oder Rotation - es ist 'geordnete' Energie, die vollständig in andere Formen umgewandelt werden kann. Beide sind Energie im Transit, aber Arbeit hat höhere 'Qualität' oder Verfügbarkeit für nützliche Zwecke.",
                    nl: "Warmte behelst willekeurige moleculaire beweging en energieoverdracht door temperatuurverschillen - het is 'ongeordende' energie. Werk behelst georganiseerde beweging zoals zuigerbeweging of rotatie - het is 'geordende' energie die volledig kan worden omgezet naar andere vormen. Beide zijn energie in transit, maar werk heeft hogere 'kwaliteit' of beschikbaarheid voor nuttige doeleinden."
                }
            },
            {
                question: {
                    en: "What is the van der Waals equation and when is it used?",
                    es: "¿Qué es la ecuación de van der Waals y cuándo se usa?",
                    de: "Was ist die van-der-Waals-Gleichung und wann wird sie verwendet?",
                    nl: "Wat is de van der Waals vergelijking en wanneer wordt deze gebruikt?"
                },
                options: [
                    {
                        en: "A real gas equation accounting for molecular size and intermolecular forces: (P + a/V²)(V - b) = RT",
                        es: "Una ecuación de gas real que considera el tamaño molecular y fuerzas intermoleculares: (P + a/V²)(V - b) = RT",
                        de: "Eine reale Gasgleichung, die molekulare Größe und intermolekulare Kräfte berücksichtigt: (P + a/V²)(V - b) = RT",
                        nl: "Een reale gasvergelijking die rekening houdt met moleculaire grootte en intermoleculaire krachten: (P + a/V²)(V - b) = RT"
                    },
                    {
                        en: "An equation for calculating thermal conductivity in materials",
                        es: "Una ecuación para calcular conductividad térmica en materiales",
                        de: "Eine Gleichung zur Berechnung der Wärmeleitfähigkeit in Materialien",
                        nl: "Een vergelijking voor het berekenen van thermische geleidbaarheid in materialen"
                    },
                    {
                        en: "The relationship between entropy and temperature",
                        es: "La relación entre entropía y temperatura",
                        de: "Die Beziehung zwischen Entropie und Temperatur",
                        nl: "De relatie tussen entropie en temperatuur"
                    },
                    {
                        en: "An equation describing heat transfer rates",
                        es: "Una ecuación que describe tasas de transferencia de calor",
                        de: "Eine Gleichung, die Wärmeübertragungsraten beschreibt",
                        nl: "Een vergelijking die warmteoverdrachtsnelheden beschrijft"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The van der Waals equation modifies the ideal gas law to account for real gas behavior: (P + a/V²)(V - b) = RT. The 'a' term corrects for intermolecular attractive forces, and 'b' corrects for molecular volume. It's used when gases are at high pressure or low temperature where ideal gas behavior breaks down.",
                    es: "La ecuación de van der Waals modifica la ley de gases ideales para considerar el comportamiento de gas real: (P + a/V²)(V - b) = RT. El término 'a' corrige por fuerzas atractivas intermoleculares, y 'b' corrige por volumen molecular. Se usa cuando los gases están a alta presión o baja temperatura donde el comportamiento de gas ideal falla.",
                    de: "Die van-der-Waals-Gleichung modifiziert das ideale Gasgesetz, um reales Gasverhalten zu berücksichtigen: (P + a/V²)(V - b) = RT. Der 'a'-Term korrigiert intermolekulare Anziehungskräfte, und 'b' korrigiert das molekulare Volumen. Sie wird verwendet, wenn Gase bei hohem Druck oder niedriger Temperatur sind, wo ideales Gasverhalten versagt.",
                    nl: "De van der Waals vergelijking wijzigt de ideale gaswet om echt gasgedrag te verantwoorden: (P + a/V²)(V - b) = RT. De 'a' term corrigeert voor intermoleculaire aantrekkingskrachten, en 'b' corrigeert voor moleculair volume. Het wordt gebruikt wanneer gassen onder hoge druk of lage temperatuur staan waar ideaal gasgedrag faalt."
                }
            },
            {
                question: {
                    en: "What is the critical point of a substance?",
                    es: "¿Qué es el punto crítico de una sustancia?",
                    de: "Was ist der kritische Punkt einer Substanz?",
                    nl: "Wat is het kritieke punt van een stof?"
                },
                options: [
                    {
                        en: "The temperature and pressure above which distinct liquid and gas phases cannot exist",
                        es: "La temperatura y presión por encima de las cuales no pueden existir fases líquida y gaseosa distintas",
                        de: "Die Temperatur und der Druck, oberhalb derer unterschiedliche flüssige und gasförmige Phasen nicht existieren können",
                        nl: "De temperatuur en druk waarboven verschillende vloeibare en gasfasen niet kunnen bestaan"
                    },
                    {
                        en: "The point where all three phases coexist simultaneously",
                        es: "El punto donde las tres fases coexisten simultáneamente",
                        de: "Der Punkt, wo alle drei Phasen gleichzeitig koexistieren",
                        nl: "Het punt waar alle drie fasen gelijktijdig naast elkaar bestaan"
                    },
                    {
                        en: "The maximum density point of any substance",
                        es: "El punto de densidad máxima de cualquier sustancia",
                        de: "Der maximale Dichtepunkt jeder Substanz",
                        nl: "Het maximale dichtheidspunt van elke stof"
                    },
                    {
                        en: "The temperature where thermal expansion becomes zero",
                        es: "La temperatura donde la expansión térmica se vuelve cero",
                        de: "Die Temperatur, bei der die thermische Ausdehnung null wird",
                        nl: "De temperatuur waar thermische uitzetting nul wordt"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "At the critical point (critical temperature Tc and critical pressure Pc), the distinction between liquid and gas phases disappears. Above this point, only a supercritical fluid exists with properties intermediate between liquids and gases. The critical point represents the endpoint of the liquid-gas phase boundary.",
                    es: "En el punto crítico (temperatura crítica Tc y presión crítica Pc), desaparece la distinción entre fases líquida y gaseosa. Por encima de este punto, solo existe un fluido supercrítico con propiedades intermedias entre líquidos y gases. El punto crítico representa el punto final de la frontera de fase líquido-gas.",
                    de: "Am kritischen Punkt (kritische Temperatur Tc und kritischer Druck Pc) verschwindet die Unterscheidung zwischen flüssigen und gasförmigen Phasen. Oberhalb dieses Punktes existiert nur ein überkritisches Fluid mit Eigenschaften zwischen Flüssigkeiten und Gasen. Der kritische Punkt stellt den Endpunkt der Flüssig-Gas-Phasengrenze dar.",
                    nl: "Op het kritieke punt (kritieke temperatuur Tc en kritieke druk Pc) verdwijnt het onderscheid tussen vloeibare en gasfasen. Boven dit punt bestaat alleen een superkritische vloeistof met eigenschappen tussen vloeistoffen en gassen in. Het kritieke punt vertegenwoordigt het eindpunt van de vloeistof-gasovergang."
                }
            },
            {
                question: {
                    en: "What is the Gibbs free energy and its significance?",
                    es: "¿Qué es la energía libre de Gibbs y su significado?",
                    de: "Was ist die Gibbs-freie Energie und ihre Bedeutung?",
                    nl: "Wat is de Gibbs vrije energie en zijn betekenis?"
                },
                options: [
                    {
                        en: "G = H - TS; it determines the spontaneity of processes at constant temperature and pressure",
                        es: "G = H - TS; determina la espontaneidad de procesos a temperatura y presión constantes",
                        de: "G = H - TS; sie bestimmt die Spontaneität von Prozessen bei konstanter Temperatur und Druck",
                        nl: "G = H - TS; het bepaalt de spontaniteit van processen bij constante temperatuur en druk"
                    },
                    {
                        en: "The energy available to perform non-mechanical work in any system",
                        es: "La energía disponible para realizar trabajo no mecánico en cualquier sistema",
                        de: "Die verfügbare Energie zur Verrichtung nicht-mechanischer Arbeit in jedem System",
                        nl: "De energie beschikbaar voor het verrichten van niet-mechanisch werk in elk systeem"
                    },
                    {
                        en: "The total thermal energy content of a closed system",
                        es: "El contenido total de energía térmica de un sistema cerrado",
                        de: "Der gesamte thermische Energiegehalt eines geschlossenen Systems",
                        nl: "De totale thermische energie-inhoud van een gesloten systeem"
                    },
                    {
                        en: "The minimum energy required for phase transitions",
                        es: "La energía mínima requerida para transiciones de fase",
                        de: "Die minimale Energie, die für Phasenübergänge erforderlich ist",
                        nl: "De minimale energie vereist voor faseovergangen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Gibbs free energy G = H - TS (where H is enthalpy, T is temperature, S is entropy) predicts process spontaneity at constant T and P. If ΔG < 0, the process is spontaneous; if ΔG > 0, it's non-spontaneous; if ΔG = 0, the system is at equilibrium. It combines both energy and entropy effects.",
                    es: "La energía libre de Gibbs G = H - TS (donde H es entalpía, T es temperatura, S es entropía) predice la espontaneidad de procesos a T y P constantes. Si ΔG < 0, el proceso es espontáneo; si ΔG > 0, es no espontáneo; si ΔG = 0, el sistema está en equilibrio. Combina efectos tanto de energía como de entropía.",
                    de: "Die Gibbs-freie Energie G = H - TS (wobei H Enthalpie, T Temperatur, S Entropie ist) sagt Prozessspontaneität bei konstantem T und P vorher. Wenn ΔG < 0, ist der Prozess spontan; wenn ΔG > 0, ist er nicht spontan; wenn ΔG = 0, ist das System im Gleichgewicht. Sie kombiniert sowohl Energie- als auch Entropieeffekte.",
                    nl: "Gibbs vrije energie G = H - TS (waarbij H enthalpie is, T temperatuur, S entropie) voorspelt processen spontaniteit bij constante T en P. Als ΔG < 0 is het proces spontaan; als ΔG > 0 is het niet-spontaan; als ΔG = 0 is het systeem in evenwicht. Het combineert zowel energie- als entropie-effecten."
                }
            },
            {
                question: {
                    en: "What is the difference between conduction, convection, and radiation heat transfer rates?",
                    es: "¿Cuál es la diferencia entre las tasas de transferencia de calor por conducción, convección y radiación?",
                    de: "Was ist der Unterschied zwischen Wärmeübertragungsraten durch Leitung, Konvektion und Strahlung?",
                    nl: "Wat is het verschil tussen warmteoverdrachtssnelheden door geleiding, convectie en straling?"
                },
                options: [
                    {
                        en: "Conduction: q∝ΔT/Δx; Convection: q∝ΔT; Radiation: q∝T⁴",
                        es: "Conducción: q∝ΔT/Δx; Convección: q∝ΔT; Radiación: q∝T⁴",
                        de: "Leitung: q∝ΔT/Δx; Konvektion: q∝ΔT; Strahlung: q∝T⁴",
                        nl: "Geleiding: q∝ΔT/Δx; Convectie: q∝ΔT; Straling: q∝T⁴"
                    },
                    {
                        en: "All three mechanisms have identical temperature dependencies",
                        es: "Los tres mecanismos tienen dependencias de temperatura idénticas",
                        de: "Alle drei Mechanismen haben identische Temperaturabhängigkeiten",
                        nl: "Alle drie mechanismen hebben identieke temperatuurafhankelijkheden"
                    },
                    {
                        en: "Only radiation heat transfer rate depends on temperature",
                        es: "Solo la tasa de transferencia de calor por radiación depende de la temperatura",
                        de: "Nur die Strahlungswärmeübertragungsrate hängt von der Temperatur ab",
                        nl: "Alleen warmteoverdrachtsnelheid door straling hangt af van temperatuur"
                    },
                    {
                        en: "Conduction is fastest, followed by convection, then radiation",
                        es: "La conducción es la más rápida, seguida de convección, luego radiación",
                        de: "Leitung ist am schnellsten, gefolgt von Konvektion, dann Strahlung",
                        nl: "Geleiding is het snelst, gevolgd door convectie, dan straling"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Heat transfer rates differ by mechanism: Conduction follows Fourier's law (q = -kA∇T), proportional to temperature gradient. Convection follows Newton's law (q = hAΔT), proportional to temperature difference. Radiation follows Stefan-Boltzmann law (q = εσAT⁴), proportional to fourth power of absolute temperature, making it dominant at high temperatures.",
                    es: "Las tasas de transferencia de calor difieren por mecanismo: La conducción sigue la ley de Fourier (q = -kA∇T), proporcional al gradiente de temperatura. La convección sigue la ley de Newton (q = hAΔT), proporcional a la diferencia de temperatura. La radiación sigue la ley de Stefan-Boltzmann (q = εσAT⁴), proporcional a la cuarta potencia de temperatura absoluta, haciéndola dominante a altas temperaturas.",
                    de: "Wärmeübertragungsraten unterscheiden sich nach Mechanismus: Leitung folgt Fouriers Gesetz (q = -kA∇T), proportional zum Temperaturgradienten. Konvektion folgt Newtons Gesetz (q = hAΔT), proportional zur Temperaturdifferenz. Strahlung folgt Stefan-Boltzmanns Gesetz (q = εσAT⁴), proportional zur vierten Potenz der absoluten Temperatur, was sie bei hohen Temperaturen dominant macht.",
                    nl: "Warmteoverdrachtssnelheden verschillen per mechanisme: Geleiding volgt Fourier's wet (q = -kA∇T), evenredig met temperatuurgradiënt. Convectie volgt Newton's wet (q = hAΔT), evenredig met temperatuurverschil. Straling volgt Stefan-Boltzmann wet (q = εσAT⁴), evenredig met vierde macht van absolute temperatuur, wat het dominant maakt bij hoge temperaturen."
                }
            },
            {
                question: {
                    en: "What is the relationship between molecular speeds and temperature in kinetic theory?",
                    es: "¿Cuál es la relación entre velocidades moleculares y temperatura en teoría cinética?",
                    de: "Wie ist die Beziehung zwischen molekularen Geschwindigkeiten und Temperatur in der kinetischen Theorie?",
                    nl: "Wat is de relatie tussen moleculaire snelheden en temperatuur in kinetische theorie?"
                },
                options: [
                    {
                        en: "Root mean square speed is proportional to √T: v_rms = √(3RT/M)",
                        es: "La velocidad cuadrática media es proporcional a √T: v_rms = √(3RT/M)",
                        de: "Die quadratische Mittelgeschwindigkeit ist proportional zu √T: v_rms = √(3RT/M)",
                        nl: "Wortel van gemiddelde kwadraat snelheid is evenredig met √T: v_rms = √(3RT/M)"
                    },
                    {
                        en: "Molecular speed is directly proportional to temperature: v ∝ T",
                        es: "La velocidad molecular es directamente proporcional a la temperatura: v ∝ T",
                        de: "Molekulare Geschwindigkeit ist direkt proportional zur Temperatur: v ∝ T",
                        nl: "Moleculaire snelheid is direct evenredig met temperatuur: v ∝ T"
                    },
                    {
                        en: "Molecular speed is inversely related to temperature: v ∝ 1/T",
                        es: "La velocidad molecular está inversamente relacionada con la temperatura: v ∝ 1/T",
                        de: "Molekulare Geschwindigkeit ist umgekehrt zur Temperatur: v ∝ 1/T",
                        nl: "Moleculaire snelheid is omgekeerd gerelateerd aan temperatuur: v ∝ 1/T"
                    },
                    {
                        en: "There is no relationship between molecular speed and temperature",
                        es: "No hay relación entre velocidad molecular y temperatura",
                        de: "Es gibt keine Beziehung zwischen molekularer Geschwindigkeit und Temperatur",
                        nl: "Er is geen relatie tussen moleculaire snelheid en temperatuur"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Kinetic theory shows that average molecular kinetic energy equals (3/2)kT, leading to v_rms = √(3RT/M) = √(3kT/m), where M is molar mass and m is molecular mass. This square root relationship means doubling temperature increases molecular speeds by factor √2 ≈ 1.41, not 2.",
                    es: "La teoría cinética muestra que la energía cinética molecular promedio es igual a (3/2)kT, llevando a v_rms = √(3RT/M) = √(3kT/m), donde M es masa molar y m es masa molecular. Esta relación de raíz cuadrada significa que duplicar la temperatura aumenta velocidades moleculares por factor √2 ≈ 1.41, no 2.",
                    de: "Die kinetische Theorie zeigt, dass die mittlere molekulare kinetische Energie (3/2)kT entspricht, was zu v_rms = √(3RT/M) = √(3kT/m) führt, wobei M die Molmasse und m die Molekülmasse ist. Diese Quadratwurzelbeziehung bedeutet, dass eine Verdopplung der Temperatur die molekularen Geschwindigkeiten um den Faktor √2 ≈ 1,41 erhöht, nicht um 2.",
                    nl: "Kinetische theorie toont dat gemiddelde moleculaire kinetische energie gelijk is aan (3/2)kT, leidend tot v_rms = √(3RT/M) = √(3kT/m), waarbij M molaire massa is en m moleculaire massa. Deze vierkantswortelrelatie betekent dat temperatuurverdubbeling moleculaire snelheden verhoogt met factor √2 ≈ 1.41, niet 2."
                }
            },
            {
                question: {
                    en: "What is the thermodynamic definition of temperature?",
                    es: "¿Cuál es la definición termodinámica de temperatura?",
                    de: "Was ist die thermodynamische Definition von Temperatur?",
                    nl: "Wat is de thermodynamische definitie van temperatuur?"
                },
                options: [
                    {
                        en: "Temperature is defined by (∂U/∂S)_V = T, relating internal energy change to entropy change",
                        es: "La temperatura se define por (∂U/∂S)_V = T, relacionando cambio de energía interna con cambio de entropía",
                        de: "Temperatur wird durch (∂U/∂S)_V = T definiert, was die Änderung der inneren Energie mit der Entropieänderung verknüpft",
                        nl: "Temperatuur wordt gedefinieerd door (∂U/∂S)_V = T, die interne energieverandering relateert aan entropieverandering"
                    },
                    {
                        en: "Temperature is the average kinetic energy of particles",
                        es: "La temperatura es la energía cinética promedio de las partículas",
                        de: "Temperatur ist die durchschnittliche kinetische Energie der Teilchen",
                        nl: "Temperatuur is de gemiddelde kinetische energie van deeltjes"
                    },
                    {
                        en: "Temperature is the degree of hotness or coldness",
                        es: "La temperatura es el grado de calor o frío",
                        de: "Temperatur ist der Grad der Wärme oder Kälte",
                        nl: "Temperatuur is de graad van warmte of koude"
                    },
                    {
                        en: "Temperature is what thermometers measure",
                        es: "La temperatura es lo que miden los termómetros",
                        de: "Temperatur ist das, was Thermometer messen",
                        nl: "Temperatuur is wat thermometers meten"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The rigorous thermodynamic definition of temperature comes from the fundamental equation: T = (∂U/∂S)_V,N, meaning temperature is the partial derivative of internal energy with respect to entropy at constant volume and particle number. This connects temperature to how energy increases per unit entropy increase, making it more fundamental than kinetic definitions.",
                    es: "La definición termodinámica rigurosa de temperatura viene de la ecuación fundamental: T = (∂U/∂S)_V,N, significando que temperatura es la derivada parcial de energía interna respecto a entropía a volumen y número de partículas constante. Esto conecta temperatura con cómo la energía aumenta por unidad de aumento de entropía, haciéndola más fundamental que definiciones cinéticas.",
                    de: "Die rigorose thermodynamische Definition von Temperatur stammt aus der Fundamentalgleichung: T = (∂U/∂S)_V,N, was bedeutet, dass Temperatur die partielle Ableitung der inneren Energie nach der Entropie bei konstantem Volumen und Teilchenzahl ist. Dies verbindet Temperatur damit, wie Energie pro Entropieeinheit zunimmt, was es fundamentaler macht als kinetische Definitionen.",
                    nl: "De rigoureuze thermodynamische definitie van temperatuur komt uit de fundamentaalvergelijking: T = (∂U/∂S)_V,N, wat betekent dat temperatuur de partiële afgeleide van interne energie naar entropie is bij constant volume en deeltjesaantal. Dit verbindt temperatuur met hoe energie toeneemt per entropie-eenheidstoename, wat het fundamenteler maakt dan kinetische definities."
                }
            },
            {
                question: {
                    en: "What is the difference between reversible and irreversible adiabatic processes?",
                    es: "¿Cuál es la diferencia entre procesos adiabáticos reversibles e irreversibles?",
                    de: "Was ist der Unterschied zwischen reversiblen und irreversiblen adiabatischen Prozessen?",
                    nl: "Wat is het verschil tussen omkeerbare en onomkeerbare adiabatische processen?"
                },
                options: [
                    {
                        en: "Reversible adiabatic is isentropic (ΔS = 0); irreversible adiabatic increases entropy (ΔS > 0)",
                        es: "Adiabático reversible es isentrópico (ΔS = 0); adiabático irreversible aumenta entropía (ΔS > 0)",
                        de: "Reversibel adiabatisch ist isentropisch (ΔS = 0); irreversibel adiabatisch erhöht Entropie (ΔS > 0)",
                        nl: "Omkeerbaar adiabatisch is isentropisch (ΔS = 0); onomkeerbaar adiabatisch verhoogt entropie (ΔS > 0)"
                    },
                    {
                        en: "Reversible processes are faster than irreversible processes",
                        es: "Los procesos reversibles son más rápidos que los procesos irreversibles",
                        de: "Reversible Prozesse sind schneller als irreversible Prozesse",
                        nl: "Omkeerbare processen zijn sneller dan onomkeerbare processen"
                    },
                    {
                        en: "Reversible processes require more energy input",
                        es: "Los procesos reversibles requieren más entrada de energía",
                        de: "Reversible Prozesse benötigen mehr Energiezufuhr",
                        nl: "Omkeerbare processen vereisen meer energie-input"
                    },
                    {
                        en: "There is no difference in adiabatic processes",
                        es: "No hay diferencia en procesos adiabáticos",
                        de: "Es gibt keinen Unterschied bei adiabatischen Prozessen",
                        nl: "Er is geen verschil bij adiabatische processen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "In adiabatic processes (Q = 0), reversible ones are also isentropic (constant entropy, ΔS = 0) due to no heat transfer and no irreversibilities. Irreversible adiabatic processes have ΔS > 0 due to friction, turbulence, or other dissipative effects. Both conserve internal energy, but irreversible processes generate entropy internally.",
                    es: "En procesos adiabáticos (Q = 0), los reversibles también son isentrópicos (entropía constante, ΔS = 0) debido a que no hay transferencia de calor ni irreversibilidades. Los procesos adiabáticos irreversibles tienen ΔS > 0 debido a fricción, turbulencia, u otros efectos disipativos. Ambos conservan energía interna, pero los procesos irreversibles generan entropía internamente.",
                    de: "Bei adiabatischen Prozessen (Q = 0) sind reversible auch isentropisch (konstante Entropie, ΔS = 0) aufgrund keines Wärmeaustauschs und keiner Irreversibilitäten. Irreversible adiabatische Prozesse haben ΔS > 0 aufgrund von Reibung, Turbulenz oder anderen dissipativen Effekten. Beide erhalten innere Energie, aber irreversible Prozesse erzeugen Entropie intern.",
                    nl: "Bij adiabatische processen (Q = 0) zijn omkeerbare ook isentropisch (constante entropie, ΔS = 0) door geen warmteoverdracht en geen onomkeerbaarheid. Onomkeerbare adiabatische processen hebben ΔS > 0 door wrijving, turbulentie, of andere dissipatieve effecten. Beide behouden interne energie, maar onomkeerbare processen genereren entropie intern."
                }
            },
            {
                question: {
                    en: "What is the physical meaning of enthalpy (H = U + PV)?",
                    es: "¿Cuál es el significado físico de la entalpía (H = U + PV)?",
                    de: "Was ist die physikalische Bedeutung der Enthalpie (H = U + PV)?",
                    nl: "Wat is de fysieke betekenis van enthalpie (H = U + PV)?"
                },
                options: [
                    {
                        en: "Enthalpy represents the total energy content including the energy needed to make room for the system",
                        es: "La entalpía representa el contenido total de energía incluyendo la energía necesaria para hacer espacio para el sistema",
                        de: "Enthalpie stellt den gesamten Energieinhalt dar, einschließlich der Energie, die benötigt wird, um Raum für das System zu schaffen",
                        nl: "Enthalpie vertegenwoordigt de totale energie-inhoud inclusief de energie nodig om ruimte te maken voor het systeem"
                    },
                    {
                        en: "Enthalpy is the heat content of a system at constant volume",
                        es: "La entalpía es el contenido de calor de un sistema a volumen constante",
                        de: "Enthalpie ist der Wärmeinhalt eines Systems bei konstantem Volumen",
                        nl: "Enthalpie is de warmte-inhoud van een systeem bij constant volume"
                    },
                    {
                        en: "Enthalpy measures the disorder in a thermodynamic system",
                        es: "La entalpía mide el desorden en un sistema termodinámico",
                        de: "Enthalpie misst die Unordnung in einem thermodynamischen System",
                        nl: "Enthalpie meet de wanorde in een thermodynamisch systeem"
                    },
                    {
                        en: "Enthalpy is the maximum work obtainable from a system",
                        es: "La entalpía es el trabajo máximo obtenible de un sistema",
                        de: "Enthalpie ist die maximale aus einem System gewinnbare Arbeit",
                        nl: "Enthalpie is het maximale werk verkrijgbaar uit een systeem"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Enthalpy H = U + PV includes the internal energy U plus the 'flow work' or 'push-out work' PV needed to make room for the system against ambient pressure. The PV term represents the energy cost of occupying space. For constant pressure processes, ΔH equals the heat transferred, making it very useful for chemical reactions and phase changes.",
                    es: "La entalpía H = U + PV incluye la energía interna U más el 'trabajo de flujo' o 'trabajo de empuje' PV necesario para hacer espacio para el sistema contra la presión ambiental. El término PV representa el costo energético de ocupar espacio. Para procesos a presión constante, ΔH es igual al calor transferido, haciéndola muy útil para reacciones químicas y cambios de fase.",
                    de: "Enthalpie H = U + PV umfasst die innere Energie U plus die 'Strömungsarbeit' oder 'Verdrängungsarbeit' PV, die benötigt wird, um Raum für das System gegen den Umgebungsdruck zu schaffen. Der PV-Term stellt die Energiekosten des Raumeinnehmens dar. Für Prozesse bei konstantem Druck entspricht ΔH der übertragenen Wärme, was sie sehr nützlich für chemische Reaktionen und Phasenübergänge macht.",
                    nl: "Enthalpie H = U + PV bevat de interne energie U plus het 'stroomwerk' of 'wegduwwerk' PV nodig om ruimte te maken voor het systeem tegen omgevingsdruk. De PV term vertegenwoordigt de energiekosten van ruimte innemen. Voor constante drukprocessen is ΔH gelijk aan overgedragen warmte, wat het zeer nuttig maakt voor chemische reacties en faseovergangen."
                }
            },
            {
                question: {
                    en: "What is thermal diffusivity and how does it differ from thermal conductivity?",
                    es: "¿Qué es la difusividad térmica y cómo difiere de la conductividad térmica?",
                    de: "Was ist Temperaturleitfähigkeit und wie unterscheidet sie sich von der Wärmeleitfähigkeit?",
                    nl: "Wat is thermische diffusiviteit en hoe verschilt het van thermische geleidbaarheid?"
                },
                options: [
                    {
                        en: "Thermal diffusivity α = k/(ρcp) measures how quickly temperature changes propagate; conductivity measures heat flow rate",
                        es: "La difusividad térmica α = k/(ρcp) mide qué tan rápido se propagan los cambios de temperatura; la conductividad mide la tasa de flujo de calor",
                        de: "Temperaturleitfähigkeit α = k/(ρcp) misst, wie schnell sich Temperaturänderungen ausbreiten; Leitfähigkeit misst die Wärmeflussrate",
                        nl: "Thermische diffusiviteit α = k/(ρcp) meet hoe snel temperatuurveranderingen zich voortplanten; geleidbaarheid meet warmtestroomsnelheid"
                    },
                    {
                        en: "Thermal diffusivity applies to liquids; thermal conductivity applies to solids",
                        es: "La difusividad térmica se aplica a líquidos; la conductividad térmica se aplica a sólidos",
                        de: "Temperaturleitfähigkeit gilt für Flüssigkeiten; Wärmeleitfähigkeit gilt für Feststoffe",
                        nl: "Thermische diffusiviteit geldt voor vloeistoffen; thermische geleidbaarheid geldt voor vaste stoffen"
                    },
                    {
                        en: "They are the same property measured in different units",
                        es: "Son la misma propiedad medida en diferentes unidades",
                        de: "Sie sind dieselbe Eigenschaft, gemessen in verschiedenen Einheiten",
                        nl: "Het zijn dezelfde eigenschap gemeten in verschillende eenheden"
                    },
                    {
                        en: "Thermal diffusivity is the inverse of thermal conductivity",
                        es: "La difusividad térmica es la inversa de la conductividad térmica",
                        de: "Temperaturleitfähigkeit ist die Umkehrung der Wärmeleitfähigkeit",
                        nl: "Thermische diffusiviteit is de omgekeerde van thermische geleidbaarheid"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Thermal diffusivity α = k/(ρcp) characterizes how fast temperature disturbances spread through a material, combining thermal conductivity k, density ρ, and specific heat cp. High diffusivity means rapid temperature equalization. Conductivity measures steady-state heat flow, while diffusivity governs transient heat conduction behavior.",
                    es: "La difusividad térmica α = k/(ρcp) caracteriza qué tan rápido se propagan las perturbaciones de temperatura a través de un material, combinando conductividad térmica k, densidad ρ, y calor específico cp. Alta difusividad significa igualación rápida de temperatura. La conductividad mide flujo de calor en estado estacionario, mientras que la difusividad gobierna el comportamiento de conducción de calor transitorio.",
                    de: "Temperaturleitfähigkeit α = k/(ρcp) charakterisiert, wie schnell sich Temperaturstörungen durch ein Material ausbreiten, und kombiniert Wärmeleitfähigkeit k, Dichte ρ und spezifische Wärme cp. Hohe Diffusivität bedeutet schnelle Temperaturausgleichung. Leitfähigkeit misst stationären Wärmefluss, während Diffusivität transientes Wärmeleitungsverhalten bestimmt.",
                    nl: "Thermische diffusiviteit α = k/(ρcp) karakteriseert hoe snel temperatuurverstoringen zich door een materiaal verspreiden, combinerend thermische geleidbaarheid k, dichtheid ρ, en soortelijke warmte cp. Hoge diffusiviteit betekent snelle temperatuuregalisatie. Geleidbaarheid meet stabiele warmtestroom, terwijl diffusiviteit transiënt warmtegeleidingsgedrag beheerst."
                }
            },
            {
                question: {
                    en: "What is a phase diagram and what information does it provide?",
                    es: "¿Qué es un diagrama de fases y qué información proporciona?",
                    de: "Was ist ein Phasendiagramm und welche Informationen liefert es?",
                    nl: "Wat is een fasediagram en welke informatie verschaft het?"
                },
                options: [
                    {
                        en: "A graphical representation showing which phase exists under different temperature and pressure conditions",
                        es: "Una representación gráfica que muestra qué fase existe bajo diferentes condiciones de temperatura y presión",
                        de: "Eine grafische Darstellung, die zeigt, welche Phase unter verschiedenen Temperatur- und Druckbedingungen existiert",
                        nl: "Een grafische voorstelling die toont welke fase bestaat onder verschillende temperatuur- en drukomstandigheden"
                    },
                    {
                        en: "A chart showing the chemical composition changes during reactions",
                        es: "Un gráfico que muestra los cambios de composición química durante las reacciones",
                        de: "Ein Diagramm, das Änderungen der chemischen Zusammensetzung während Reaktionen zeigt",
                        nl: "Een grafiek die de chemische samenstellingsveranderingen tijdens reacties toont"
                    },
                    {
                        en: "A diagram illustrating molecular structure and bonding",
                        es: "Un diagrama que ilustra la estructura molecular y los enlaces",
                        de: "Ein Diagramm, das molekulare Struktur und Bindungen illustriert",
                        nl: "Een diagram dat moleculaire structuur en bindingen illustreert"
                    },
                    {
                        en: "A plot of heat capacity versus temperature for different materials",
                        es: "Un gráfico de capacidad calorífica versus temperatura para diferentes materiales",
                        de: "Ein Plot der Wärmekapazität gegen Temperatur für verschiedene Materialien",
                        nl: "Een plot van warmtecapaciteit versus temperatuur voor verschillende materialen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Phase diagrams map the stability regions of different phases (solid, liquid, gas) as functions of temperature and pressure. They show phase boundaries, triple points, critical points, and help predict phase transitions. The slopes of boundary lines follow the Clausius-Clapeyron equation.",
                    es: "Los diagramas de fase mapean las regiones de estabilidad de diferentes fases (sólido, líquido, gas) como funciones de temperatura y presión. Muestran fronteras de fase, puntos triples, puntos críticos, y ayudan a predecir transiciones de fase. Las pendientes de las líneas de frontera siguen la ecuación de Clausius-Clapeyron.",
                    de: "Phasendiagramme kartieren die Stabilitätsregionen verschiedener Phasen (fest, flüssig, gasförmig) als Funktionen von Temperatur und Druck. Sie zeigen Phasengrenzen, Tripelpunkte, kritische Punkte und helfen bei der Vorhersage von Phasenübergängen. Die Steigungen der Grenzlinien folgen der Clausius-Clapeyron-Gleichung.",
                    nl: "Fasediagrammen brengen de stabiliteitsgebieden van verschillende fasen (vast, vloeibaar, gas) in kaart als functies van temperatuur en druk. Ze tonen fasegrenzen, tripelpunten, kritische punten, en helpen faseovergangen voorspellen. De hellingen van grenslijnen volgen de Clausius-Clapeyron vergelijking."
                }
            },
            {
                question: {
                    en: "What is the Bose-Einstein distribution in statistical thermodynamics?",
                    es: "¿Qué es la distribución de Bose-Einstein en termodinámica estadística?",
                    de: "Was ist die Bose-Einstein-Verteilung in der statistischen Thermodynamik?",
                    nl: "Wat is de Bose-Einstein verdeling in statistische thermodynamica?"
                },
                options: [
                    {
                        en: "The distribution describing the occupation of energy states by indistinguishable particles with integer spin (bosons)",
                        es: "La distribución que describe la ocupación de estados de energía por partículas indistinguibles con espín entero (bosones)",
                        de: "Die Verteilung, die die Besetzung von Energiezuständen durch ununterscheidbare Teilchen mit ganzzahligem Spin (Bosonen) beschreibt",
                        nl: "De verdeling die de bezetting van energietoestanden door ononderscheidbare deeltjes met gehele spin (bosonen) beschrijft"
                    },
                    {
                        en: "The distribution of molecular velocities in quantum gases",
                        es: "La distribución de velocidades moleculares en gases cuánticos",
                        de: "Die Verteilung molekularer Geschwindigkeiten in Quantengasen",
                        nl: "De verdeling van moleculaire snelheden in quantumgassen"
                    },
                    {
                        en: "The probability distribution for electron positions in atoms",
                        es: "La distribución de probabilidad para posiciones de electrones en átomos",
                        de: "Die Wahrscheinlichkeitsverteilung für Elektronenpositionen in Atomen",
                        nl: "De waarschijnlijkheidsverdeling voor elektronenposities in atomen"
                    },
                    {
                        en: "The distribution of thermal energy among vibrational modes",
                        es: "La distribución de energía térmica entre modos vibracionales",
                        de: "Die Verteilung thermischer Energie unter Schwingungsmoden",
                        nl: "De verdeling van thermische energie onder vibratiemodi"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Bose-Einstein distribution n = 1/(e^((E-μ)/kT) - 1) describes how bosons (particles with integer spin like photons, phonons, and helium-4 atoms) occupy energy states. Unlike fermions, multiple bosons can occupy the same quantum state, leading to phenomena like Bose-Einstein condensation at very low temperatures.",
                    es: "La distribución de Bose-Einstein n = 1/(e^((E-μ)/kT) - 1) describe cómo los bosones (partículas con espín entero como fotones, fonones, y átomos de helio-4) ocupan estados de energía. A diferencia de los fermiones, múltiples bosones pueden ocupar el mismo estado cuántico, llevando a fenómenos como la condensación de Bose-Einstein a temperaturas muy bajas.",
                    de: "Die Bose-Einstein-Verteilung n = 1/(e^((E-μ)/kT) - 1) beschreibt, wie Bosonen (Teilchen mit ganzzahligem Spin wie Photonen, Phononen und Helium-4-Atome) Energiezustände besetzen. Anders als Fermionen können mehrere Bosonen denselben Quantenzustand besetzen, was zu Phänomenen wie Bose-Einstein-Kondensation bei sehr niedrigen Temperaturen führt.",
                    nl: "De Bose-Einstein verdeling n = 1/(e^((E-μ)/kT) - 1) beschrijft hoe bosonen (deeltjes met gehele spin zoals fotonen, fononen, en helium-4 atomen) energietoestanden bezetten. In tegenstelling tot fermionen kunnen meerdere bosonen dezelfde quantumtoestand bezetten, wat leidt tot fenomenen zoals Bose-Einstein condensatie bij zeer lage temperaturen."
                }
            },
            {
                question: {
                    en: "What is the Fermi-Dirac distribution and when is it relevant?",
                    es: "¿Qué es la distribución de Fermi-Dirac y cuándo es relevante?",
                    de: "Was ist die Fermi-Dirac-Verteilung und wann ist sie relevant?",
                    nl: "Wat is de Fermi-Dirac verdeling en wanneer is deze relevant?"
                },
                options: [
                    {
                        en: "The distribution for fermions (half-integer spin particles) that obey the Pauli exclusion principle",
                        es: "La distribución para fermiones (partículas de espín semi-entero) que obedecen el principio de exclusión de Pauli",
                        de: "Die Verteilung für Fermionen (Teilchen mit halbzahligem Spin), die dem Pauli-Ausschlussprinzip gehorchen",
                        nl: "De verdeling voor fermionen (half-gehele spin deeltjes) die het Pauli-uitsluitingsprincipe gehoorzamen"
                    },
                    {
                        en: "A classical distribution for high-energy particles",
                        es: "Una distribución clásica para partículas de alta energía",
                        de: "Eine klassische Verteilung für hochenergetische Teilchen",
                        nl: "Een klassieke verdeling voor hoog-energetische deeltjes"
                    },
                    {
                        en: "The distribution of particle masses in nuclear reactions",
                        es: "La distribución de masas de partículas en reacciones nucleares",
                        de: "Die Verteilung von Teilchenmassen in Kernreaktionen",
                        nl: "De verdeling van deeltjesmassa's in nucleaire reacties"
                    },
                    {
                        en: "A distribution only applicable to photons and electromagnetic radiation",
                        es: "Una distribución solo aplicable a fotones y radiación electromagnética",
                        de: "Eine Verteilung, die nur für Photonen und elektromagnetische Strahlung gilt",
                        nl: "Een verdeling die alleen toepasbaar is op fotonen en elektromagnetische straling"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Fermi-Dirac distribution f = 1/(e^((E-μ)/kT) + 1) describes the occupation probability for fermions like electrons, protons, and neutrons. Due to Pauli exclusion, only one fermion can occupy each quantum state. This distribution is crucial for understanding electron behavior in metals and semiconductors.",
                    es: "La distribución de Fermi-Dirac f = 1/(e^((E-μ)/kT) + 1) describe la probabilidad de ocupación para fermiones como electrones, protones y neutrones. Debido a la exclusión de Pauli, solo un fermión puede ocupar cada estado cuántico. Esta distribución es crucial para entender el comportamiento de electrones en metales y semiconductores.",
                    de: "Die Fermi-Dirac-Verteilung f = 1/(e^((E-μ)/kT) + 1) beschreibt die Besetzungswahrscheinlichkeit für Fermionen wie Elektronen, Protonen und Neutronen. Aufgrund des Pauli-Ausschlusses kann nur ein Fermion jeden Quantenzustand besetzen. Diese Verteilung ist entscheidend für das Verständnis des Elektronenverhaltens in Metallen und Halbleitern.",
                    nl: "De Fermi-Dirac verdeling f = 1/(e^((E-μ)/kT) + 1) beschrijft de bezettingswaarschijnlijkheid voor fermionen zoals elektronen, protonen en neutronen. Door Pauli-uitsluiting kan slechts één fermion elke quantumtoestand bezetten. Deze verdeling is cruciaal voor het begrijpen van elektronengedrag in metalen en halfgeleiders."
                }
            },
            {
                question: {
                    en: "What is the relationship between temperature and molecular rotational energy?",
                    es: "¿Cuál es la relación entre temperatura y energía rotacional molecular?",
                    de: "Wie ist die Beziehung zwischen Temperatur und molekularer Rotationsenergie?",
                    nl: "Wat is de relatie tussen temperatuur en moleculaire rotatieenergie?"
                },
                options: [
                    {
                        en: "Each rotational degree of freedom contributes (1/2)kT to the average energy per molecule",
                        es: "Cada grado de libertad rotacional contribuye (1/2)kT a la energía promedio por molécula",
                        de: "Jeder Rotationsfreiheitsgrad trägt (1/2)kT zur durchschnittlichen Energie pro Molekül bei",
                        nl: "Elke rotatievrijheidsgraad draagt (1/2)kT bij aan de gemiddelde energie per molecuul"
                    },
                    {
                        en: "Rotational energy is independent of temperature in all molecules",
                        es: "La energía rotacional es independiente de la temperatura en todas las moléculas",
                        de: "Rotationsenergie ist bei allen Molekülen unabhängig von der Temperatur",
                        nl: "Rotatieenergie is onafhankelijk van temperatuur in alle moleculen"
                    },
                    {
                        en: "Only linear molecules have temperature-dependent rotational energy",
                        es: "Solo las moléculas lineales tienen energía rotacional dependiente de la temperatura",
                        de: "Nur lineare Moleküle haben temperaturabhängige Rotationsenergie",
                        nl: "Alleen lineaire moleculen hebben temperatuurafhankelijke rotatieenergie"
                    },
                    {
                        en: "Rotational energy is proportional to T² rather than T",
                        es: "La energía rotacional es proporcional a T² en lugar de T",
                        de: "Rotationsenergie ist proportional zu T² statt zu T",
                        nl: "Rotatieenergie is evenredig met T² in plaats van T"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "According to the equipartition theorem, each quadratic degree of freedom (including rotational) contributes (1/2)kT to the average energy. Linear molecules have 2 rotational degrees of freedom, while non-linear molecules have 3. However, quantum effects become important at low temperatures where kT becomes comparable to rotational energy level spacings.",
                    es: "Según el teorema de equipartición, cada grado de libertad cuadrático (incluyendo rotacional) contribuye (1/2)kT a la energía promedio. Las moléculas lineales tienen 2 grados de libertad rotacionales, mientras que las moléculas no lineales tienen 3. Sin embargo, los efectos cuánticos se vuelven importantes a bajas temperaturas donde kT se vuelve comparable a los espacios entre niveles de energía rotacional.",
                    de: "Nach dem Gleichverteilungstheorem trägt jeder quadratische Freiheitsgrad (einschließlich Rotation) (1/2)kT zur durchschnittlichen Energie bei. Lineare Moleküle haben 2 Rotationsfreiheitsgrade, während nichtlineare Moleküle 3 haben. Quanteneffekte werden jedoch bei niedrigen Temperaturen wichtig, wo kT vergleichbar mit Rotationsenergieniveau-Abständen wird.",
                    nl: "Volgens de equipartitiestelling draagt elke kwadratische vrijheidsgraad (inclusief rotatie) (1/2)kT bij aan de gemiddelde energie. Lineaire moleculen hebben 2 rotatievrijheidsgraden, terwijl niet-lineaire moleculen er 3 hebben. Echter, quantumeffecten worden belangrijk bij lage temperaturen waar kT vergelijkbaar wordt met rotatie-energieniveau-afstanden."
                }
            },
            {
                question: {
                    en: "What is the concept of chemical potential in thermodynamics?",
                    es: "¿Qué es el concepto de potencial químico en termodinámica?",
                    de: "Was ist das Konzept des chemischen Potentials in der Thermodynamik?",
                    nl: "Wat is het concept van chemische potentiaal in de thermodynamica?"
                },
                options: [
                    {
                        en: "The partial derivative of Gibbs free energy with respect to particle number: μ = (∂G/∂N)_{T,P}",
                        es: "La derivada parcial de la energía libre de Gibbs respecto al número de partículas: μ = (∂G/∂N)_{T,P}",
                        de: "Die partielle Ableitung der Gibbs-freien Energie nach der Teilchenzahl: μ = (∂G/∂N)_{T,P}",
                        nl: "De partiële afgeleide van Gibbs vrije energie naar het aantal deeltjes: μ = (∂G/∂N)_{T,P}"
                    },
                    {
                        en: "The electrical potential created by charged particles in solution",
                        es: "El potencial eléctrico creado por partículas cargadas en solución",
                        de: "Das elektrische Potential, das von geladenen Teilchen in Lösung erzeugt wird",
                        nl: "De elektrische potentiaal gecreëerd door geladen deeltjes in oplossing"
                    },
                    {
                        en: "The kinetic energy of molecules in chemical reactions",
                        es: "La energía cinética de las moléculas en reacciones químicas",
                        de: "Die kinetische Energie von Molekülen in chemischen Reaktionen",
                        nl: "De kinetische energie van moleculen in chemische reacties"
                    },
                    {
                        en: "The activation energy barrier for phase transitions",
                        es: "La barrera de energía de activación para transiciones de fase",
                        de: "Die Aktivierungsenergie-Barriere für Phasenübergänge",
                        nl: "De activeringsenergie-barrière voor faseovergangen"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "Chemical potential μ represents the change in Gibbs free energy when one particle is added to a system at constant temperature and pressure. It's the driving force for particle flow and chemical reactions - particles flow from regions of high to low chemical potential until equilibrium (equal μ) is reached.",
                    es: "El potencial químico μ representa el cambio en energía libre de Gibbs cuando se agrega una partícula a un sistema a temperatura y presión constantes. Es la fuerza impulsora para el flujo de partículas y reacciones químicas - las partículas fluyen de regiones de alto a bajo potencial químico hasta que se alcanza el equilibrio (μ igual).",
                    de: "Das chemische Potential μ stellt die Änderung der Gibbs-freien Energie dar, wenn ein Teilchen zu einem System bei konstanter Temperatur und Druck hinzugefügt wird. Es ist die treibende Kraft für Teilchenfluss und chemische Reaktionen - Teilchen fließen von Regionen hohen zu niedrigen chemischen Potentials, bis Gleichgewicht (gleiches μ) erreicht wird.",
                    nl: "Chemische potentiaal μ vertegenwoordigt de verandering in Gibbs vrije energie wanneer één deeltje wordt toegevoegd aan een systeem bij constante temperatuur en druk. Het is de drijvende kracht voor deeltjesstroom en chemische reacties - deeltjes stromen van gebieden met hoge naar lage chemische potentiaal totdat evenwicht (gelijke μ) wordt bereikt."
                }
            },
            {
                question: {
                    en: "What is the Debye model for heat capacity of solids?",
                    es: "¿Qué es el modelo de Debye para la capacidad calorífica de sólidos?",
                    de: "Was ist das Debye-Modell für die Wärmekapazität von Festkörpern?",
                    nl: "Wat is het Debye-model voor warmtecapaciteit van vaste stoffen?"
                },
                options: [
                    {
                        en: "A quantum mechanical model treating lattice vibrations as a gas of phonons with a cutoff frequency",
                        es: "Un modelo cuántico-mecánico que trata las vibraciones de red como un gas de fonones con una frecuencia de corte",
                        de: "Ein quantenmechanisches Modell, das Gitterschwingungen als Gas von Phononen mit einer Cutoff-Frequenz behandelt",
                        nl: "Een quantummechanisch model dat roostertrillingen behandelt als een gas van fononen met een afsnijfrequentie"
                    },
                    {
                        en: "A classical model assuming all atoms vibrate with the same frequency",
                        es: "Un modelo clásico que asume que todos los átomos vibran con la misma frecuencia",
                        de: "Ein klassisches Modell, das annimmt, dass alle Atome mit derselben Frequenz schwingen",
                        nl: "Een klassiek model dat aanneemt dat alle atomen trillen met dezelfde frequentie"
                    },
                    {
                        en: "A model based on free electron behavior in metals",
                        es: "Un modelo basado en el comportamiento de electrones libres en metales",
                        de: "Ein Modell basierend auf freiem Elektronenverhalten in Metallen",
                        nl: "Een model gebaseerd op vrij elektronengedrag in metalen"
                    },
                    {
                        en: "A model that only applies to crystalline structures at room temperature",
                        es: "Un modelo que solo se aplica a estructuras cristalinas a temperatura ambiente",
                        de: "Ein Modell, das nur für kristalline Strukturen bei Raumtemperatur gilt",
                        nl: "Een model dat alleen geldt voor kristallijne structuren bij kamertemperatuur"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The Debye model treats lattice vibrations as quantized phonons in a solid, with energies ℏω. It introduces a Debye cutoff frequency ωD to limit the total number of modes. At low temperatures, CV ∝ T³ (Debye T³ law), while at high temperatures it approaches the classical limit of 3R per mole (Dulong-Petit law).",
                    es: "El modelo de Debye trata las vibraciones de red como fonones cuantizados en un sólido, con energías ℏω. Introduce una frecuencia de corte de Debye ωD para limitar el número total de modos. A bajas temperaturas, CV ∝ T³ (ley T³ de Debye), mientras que a altas temperaturas se acerca al límite clásico de 3R por mol (ley de Dulong-Petit).",
                    de: "Das Debye-Modell behandelt Gitterschwingungen als quantisierte Phononen in einem Festkörper mit Energien ℏω. Es führt eine Debye-Cutoff-Frequenz ωD ein, um die Gesamtzahl der Moden zu begrenzen. Bei niedrigen Temperaturen gilt CV ∝ T³ (Debye T³-Gesetz), während es bei hohen Temperaturen dem klassischen Grenzwert von 3R pro Mol nähert (Dulong-Petit-Gesetz).",
                    nl: "Het Debye-model behandelt roostertrillingen als gekwantiseerde fononen in een vaste stof, met energieën ℏω. Het introduceert een Debye afsnijfrequentie ωD om het totale aantal modi te beperken. Bij lage temperaturen geldt CV ∝ T³ (Debye T³ wet), terwijl het bij hoge temperaturen de klassieke limiet van 3R per mol benadert (Dulong-Petit wet)."
                }
            },
            {
                question: {
                    en: "What is the significance of the virial equation of state for real gases?",
                    es: "¿Cuál es el significado de la ecuación virial de estado para gases reales?",
                    de: "Was ist die Bedeutung der Virialgleichung für reale Gase?",
                    nl: "Wat is de betekenis van de viriaalvergelijking van toestand voor echte gassen?"
                },
                options: [
                    {
                        en: "A series expansion PV = RT(1 + B/V + C/V² + ...) that systematically corrects ideal gas behavior",
                        es: "Una expansión en serie PV = RT(1 + B/V + C/V² + ...) que corrige sistemáticamente el comportamiento de gas ideal",
                        de: "Eine Reihenentwicklung PV = RT(1 + B/V + C/V² + ...), die systematisch ideales Gasverhalten korrigiert",
                        nl: "Een reeksontwikkeling PV = RT(1 + B/V + C/V² + ...) die systematisch ideaal gasgedrag corrigeert"
                    },
                    {
                        en: "An equation that only applies to noble gases at standard conditions",
                        es: "Una ecuación que solo se aplica a gases nobles en condiciones estándar",
                        de: "Eine Gleichung, die nur für Edelgase unter Standardbedingungen gilt",
                        nl: "Een vergelijking die alleen geldt voor edelgassen bij standaardomstandigheden"
                    },
                    {
                        en: "A classical equation that ignores quantum mechanical effects",
                        es: "Una ecuación clásica que ignora efectos cuántico-mecánicos",
                        de: "Eine klassische Gleichung, die quantenmechanische Effekte ignoriert",
                        nl: "Een klassieke vergelijking die quantummechanische effecten negeert"
                    },
                    {
                        en: "An equation specifically designed for gas mixtures only",
                        es: "Una ecuación específicamente diseñada solo para mezclas de gases",
                        de: "Eine Gleichung, die speziell nur für Gasmischungen entwickelt wurde",
                        nl: "Een vergelijking speciaal ontworpen alleen voor gasmengsels"
                    }
                ],
                correct: 0,
                explanation: {
                    en: "The virial equation of state is a systematic expansion that accounts for intermolecular interactions through virial coefficients B, C, D, etc. The second virial coefficient B describes two-body interactions, C describes three-body interactions, and so on. It provides theoretical foundation for understanding deviations from ideal gas behavior and connects molecular properties to macroscopic measurements.",
                    es: "La ecuación virial de estado es una expansión sistemática que considera interacciones intermoleculares a través de coeficientes viriales B, C, D, etc. El segundo coeficiente virial B describe interacciones de dos cuerpos, C describe interacciones de tres cuerpos, y así sucesivamente. Proporciona fundamento teórico para entender desviaciones del comportamiento de gas ideal y conecta propiedades moleculares con mediciones macroscópicas.",
                    de: "Die Virialgleichung ist eine systematische Entwicklung, die intermolekulare Wechselwirkungen durch Virialkoeffizienten B, C, D, usw. berücksichtigt. Der zweite Virialkoeffizient B beschreibt Zwei-Körper-Wechselwirkungen, C beschreibt Drei-Körper-Wechselwirkungen, und so weiter. Sie liefert theoretische Grundlagen zum Verständnis von Abweichungen vom idealen Gasverhalten und verbindet molekulare Eigenschaften mit makroskopischen Messungen.",
                    nl: "De viriaalvergelijking van toestand is een systematische ontwikkeling die intermoleculaire interacties beschouwt via viriaalcoëfficiënten B, C, D, enz. De tweede viriaalcoëfficiënt B beschrijft twee-lichaam interacties, C beschrijft drie-lichaam interacties, enzovoort. Het biedt theoretische basis voor het begrijpen van afwijkingen van ideaal gasgedrag en verbindt moleculaire eigenschappen met macroscopische metingen."
                }
            }
        ]
    };

    if (typeof window !== 'undefined' && typeof window.addLevel === 'function') {
        window.addLevel('brain-teaser', 'physics', 2, level2);
    }
})();
