// Engineering - Level 5: Electrical Engineering
(function() {
  const level5 = {
    name: {
      en: "Electrical Engineering",
      es: "Ingeniería Eléctrica", 
      de: "Elektrotechnik",
      nl: "Elektrotechniek"
    },
    questions: [
      {
        question: {
          en: "What is Ohm's law?",
          es: "¿Qué es la ley de Ohm?",
          de: "Was ist das Ohmsche Gesetz?",
          nl: "Wat is de wet van Ohm?"
        },
        options: [
          { en: "V = IR", es: "V = IR", de: "V = IR", nl: "V = IR" },
          { en: "P = VI", es: "P = VI", de: "P = VI", nl: "P = VI" },
          { en: "I = VR", es: "I = VR", de: "I = VR", nl: "I = VR" },
          { en: "V = I/R", es: "V = I/R", de: "V = I/R", nl: "V = I/R" }
        ],
        correct: 0,
        explanation: {
          en: "Ohm's law states that voltage (V) equals current (I) multiplied by resistance (R): V = IR. This fundamental relationship describes how voltage, current, and resistance relate in electrical circuits.",
          es: "La ley de Ohm establece que el voltaje (V) es igual a la corriente (I) multiplicada por la resistencia (R): V = IR. Esta relación fundamental describe cómo se relacionan voltaje, corriente y resistencia en circuitos eléctricos.",
          de: "Das Ohmsche Gesetz besagt, dass die Spannung (V) gleich dem Strom (I) multipliziert mit dem Widerstand (R) ist: V = IR. Diese fundamentale Beziehung beschreibt, wie sich Spannung, Strom und Widerstand in elektrischen Schaltungen verhalten.",
          nl: "De wet van Ohm stelt dat spanning (V) gelijk is aan stroom (I) vermenigvuldigd met weerstand (R): V = IR. Deze fundamentele relatie beschrijft hoe spanning, stroom en weerstand zich verhouden in elektrische circuits."
        }
      },
      {
        question: {
          en: "What is the unit of electrical power?",
          es: "¿Cuál es la unidad de potencia eléctrica?",
          de: "Was ist die Einheit der elektrischen Leistung?",
          nl: "Wat is de eenheid van elektrisch vermogen?"
        },
        options: [
          { en: "Watt (W)", es: "Vatio (W)", de: "Watt (W)", nl: "Watt (W)" },
          { en: "Volt (V)", es: "Voltio (V)", de: "Volt (V)", nl: "Volt (V)" },
          { en: "Ampere (A)", es: "Amperio (A)", de: "Ampere (A)", nl: "Ampère (A)" },
          { en: "Ohm (Ω)", es: "Ohmio (Ω)", de: "Ohm (Ω)", nl: "Ohm (Ω)" }
        ],
        correct: 0,
        explanation: {
          en: "The Watt (W) is the SI unit of electrical power, named after James Watt. Power is calculated as P = VI (voltage times current) or P = I²R or P = V²/R.",
          es: "El Vatio (W) es la unidad SI de potencia eléctrica, nombrada por James Watt. La potencia se calcula como P = VI (voltaje por corriente) o P = I²R o P = V²/R.",
          de: "Das Watt (W) ist die SI-Einheit der elektrischen Leistung, benannt nach James Watt. Die Leistung wird berechnet als P = VI (Spannung mal Strom) oder P = I²R oder P = V²/R.",
          nl: "De Watt (W) is de SI-eenheid van elektrisch vermogen, genoemd naar James Watt. Vermogen wordt berekend als P = VI (spanning maal stroom) of P = I²R of P = V²/R."
        }
      },
      {
        question: {
          en: "What is the difference between AC and DC current?",
          es: "¿Cuál es la diferencia entre corriente AC y DC?",
          de: "Was ist der Unterschied zwischen Wechselstrom und Gleichstrom?",
          nl: "Wat is het verschil tussen wisselstroom en gelijkstroom?"
        },
        options: [
          { en: "AC changes direction periodically, DC flows in one direction", es: "AC cambia de dirección periódicamente, DC fluye en una dirección", de: "Wechselstrom ändert periodisch die Richtung, Gleichstrom fließt in eine Richtung", nl: "Wisselstroom verandert periodiek van richting, gelijkstroom vloeit in één richting" },
          { en: "AC is always stronger than DC", es: "AC es siempre más fuerte que DC", de: "Wechselstrom ist immer stärker als Gleichstrom", nl: "Wisselstroom is altijd sterker dan gelijkstroom" },
          { en: "DC is only used in batteries", es: "DC se usa solo en baterías", de: "Gleichstrom wird nur in Batterien verwendet", nl: "Gelijkstroom wordt alleen gebruikt in batterijen" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "AC (Alternating Current) periodically changes direction, typically in a sinusoidal pattern, while DC (Direct Current) flows consistently in one direction. AC is used in power grids, while DC is used in batteries and electronic devices.",
          es: "AC (Corriente Alterna) cambia de dirección periódicamente, típicamente en un patrón sinusoidal, mientras que DC (Corriente Directa) fluye consistentemente en una dirección. AC se usa en redes eléctricas, mientras que DC se usa en baterías y dispositivos electrónicos.",
          de: "Wechselstrom ändert periodisch die Richtung, typischerweise in einem sinusförmigen Muster, während Gleichstrom konstant in eine Richtung fließt. Wechselstrom wird in Stromnetzen verwendet, Gleichstrom in Batterien und elektronischen Geräten.",
          nl: "Wisselstroom verandert periodiek van richting, typisch in een sinusvormig patroon, terwijl gelijkstroom consistent in één richting vloeit. Wisselstroom wordt gebruikt in stroomnetwerken, gelijkstroom in batterijen en elektronische apparaten."
        }
      },
      {
        question: {
          en: "What is Kirchhoff's Current Law (KCL)?",
          es: "¿Qué es la Ley de Corriente de Kirchhoff (KCL)?",
          de: "Was ist das Kirchhoffsche Stromgesetz (KCL)?",
          nl: "Wat is de Stroomwet van Kirchhoff (KCL)?"
        },
        options: [
          { en: "Sum of currents entering a node equals sum of currents leaving", es: "La suma de corrientes que entran a un nodo iguala la suma de corrientes que salen", de: "Summe der in einen Knoten eintretenden Ströme gleich der Summe der austretenden", nl: "Som van stromen die een knooppunt binnenkomen gelijk aan som van uitgaande stromen" },
          { en: "Voltage is constant in parallel circuits", es: "El voltaje es constante en circuitos paralelos", de: "Spannung ist konstant in Parallelschaltungen", nl: "Spanning is constant in parallelle circuits" },
          { en: "Current is same in series circuits", es: "La corriente es la misma en circuitos serie", de: "Strom ist gleich in Serienschaltungen", nl: "Stroom is hetzelfde in serieschakelingen" },
          { en: "Power equals voltage times current", es: "La potencia es igual al voltaje por la corriente", de: "Leistung gleich Spannung mal Strom", nl: "Vermogen gelijk spanning maal stroom" }
        ],
        correct: 0,
        explanation: {
          en: "Kirchhoff's Current Law states that the algebraic sum of currents entering a node (junction) must equal the sum of currents leaving that node. This is based on the conservation of electric charge.",
          es: "La Ley de Corriente de Kirchhoff establece que la suma algebraica de corrientes que entran a un nodo (unión) debe igualar la suma de corrientes que salen de ese nodo. Esto se basa en la conservación de carga eléctrica.",
          de: "Das Kirchhoffsche Stromgesetz besagt, dass die algebraische Summe der in einen Knoten eintretenden Ströme der Summe der austretenden Ströme entsprechen muss. Dies basiert auf der Erhaltung der elektrischen Ladung.",
          nl: "De Stroomwet van Kirchhoff stelt dat de algebraïsche som van stromen die een knooppunt binnenkomen gelijk moet zijn aan de som van uitgaande stromen. Dit is gebaseerd op behoud van elektrische lading."
        }
      },
      {
        question: {
          en: "What is a transformer used for?",
          es: "¿Para qué se usa un transformador?",
          de: "Wofür wird ein Transformator verwendet?",
          nl: "Waarvoor wordt een transformator gebruikt?"
        },
        options: [
          { en: "Change voltage levels in AC circuits", es: "Cambiar niveles de voltaje en circuitos AC", de: "Spannungspegel in Wechselstromkreisen ändern", nl: "Spanningsniveaus veranderen in wisselstroomcircuits" },
          { en: "Convert AC to DC", es: "Convertir AC a DC", de: "Wechselstrom in Gleichstrom umwandeln", nl: "Wisselstroom naar gelijkstroom omzetten" },
          { en: "Store electrical energy", es: "Almacenar energía eléctrica", de: "Elektrische Energie speichern", nl: "Elektrische energie opslaan" },
          { en: "Amplify electrical signals", es: "Amplificar señales eléctricas", de: "Elektrische Signale verstärken", nl: "Elektrische signalen versterken" }
        ],
        correct: 0,
        explanation: {
          en: "A transformer uses electromagnetic induction to transfer electrical energy between circuits and change voltage levels. It consists of primary and secondary windings around a magnetic core, working only with AC.",
          es: "Un transformador usa inducción electromagnética para transferir energía eléctrica entre circuitos y cambiar niveles de voltaje. Consiste en bobinados primarios y secundarios alrededor de un núcleo magnético, funcionando solo con AC.",
          de: "Ein Transformator nutzt elektromagnetische Induktion, um elektrische Energie zwischen Schaltkreisen zu übertragen und Spannungspegel zu ändern. Er besteht aus Primär- und Sekundärwicklungen um einen magnetischen Kern und funktioniert nur mit Wechselstrom.",
          nl: "Een transformator gebruikt elektromagnetische inductie om elektrische energie tussen circuits over te dragen en spanningsniveaus te veranderen. Het bestaat uit primaire en secundaire wikkelingen rond een magnetische kern, werkend alleen met wisselstroom."
        }
      },
      {
        question: {
          en: "What is the function of a capacitor in an electrical circuit?",
          es: "¿Cuál es la función de un capacitor en un circuito eléctrico?",
          de: "Was ist die Funktion eines Kondensators in einem elektrischen Schaltkreis?",
          nl: "Wat is de functie van een condensator in een elektrisch circuit?"
        },
        options: [
          { en: "Store electrical energy in an electric field", es: "Almacenar energía eléctrica en un campo eléctrico", de: "Elektrische Energie in einem elektrischen Feld speichern", nl: "Elektrische energie opslaan in een elektrisch veld" },
          { en: "Resist current flow", es: "Resistir el flujo de corriente", de: "Stromfluss widerstehen", nl: "Stroomflow weerstaan" },
          { en: "Generate electrical energy", es: "Generar energía eléctrica", de: "Elektrische Energie erzeugen", nl: "Elektrische energie opwekken" },
          { en: "Convert AC to DC", es: "Convertir AC a DC", de: "Wechselstrom in Gleichstrom umwandeln", nl: "Wisselstroom naar gelijkstroom omzetten" }
        ],
        correct: 0,
        explanation: {
          en: "A capacitor stores electrical energy in an electric field between two conducting plates separated by a dielectric material. It can store and release energy quickly, making it useful for filtering, timing circuits, and power supply smoothing.",
          es: "Un capacitor almacena energía eléctrica en un campo eléctrico entre dos placas conductoras separadas por un material dieléctrico. Puede almacenar y liberar energía rápidamente, haciéndolo útil para filtrado, circuitos de tiempo y suavizado de fuentes de poder.",
          de: "Ein Kondensator speichert elektrische Energie in einem elektrischen Feld zwischen zwei leitenden Platten, die durch ein dielektrisches Material getrennt sind. Er kann Energie schnell speichern und freigeben, wodurch er für Filterung, Zeitschaltungen und Netzglättung nützlich ist.",
          nl: "Een condensator slaat elektrische energie op in een elektrisch veld tussen twee geleidende platen gescheiden door een diëlektrisch materiaal. Het kan snel energie opslaan en vrijgeven, waardoor het nuttig is voor filtering, timing circuits en voedingsgladmaking."
        }
      },
      {
        question: {
          en: "What is an inductor and what does it do?",
          es: "¿Qué es un inductor y qué hace?",
          de: "Was ist eine Spule und was macht sie?",
          nl: "Wat is een inductor en wat doet het?"
        },
        options: [
          { en: "Stores energy in a magnetic field and opposes current changes", es: "Almacena energía en un campo magnético y se opone a cambios de corriente", de: "Speichert Energie in einem magnetischen Feld und widersteht Stromänderungen", nl: "Slaat energie op in een magnetisch veld en weerstaat stroomveranderingen" },
          { en: "Increases voltage amplitude", es: "Aumenta la amplitud del voltaje", de: "Erhöht die Spannungsamplitude", nl: "Verhoogt spanningsamplitude" },
          { en: "Converts electrical to mechanical energy", es: "Convierte energía eléctrica en mecánica", de: "Wandelt elektrische in mechanische Energie um", nl: "Zet elektrische energie om in mechanische energie" },
          { en: "Filters out AC components", es: "Filtra componentes AC", de: "Filtert Wechselstromkomponenten heraus", nl: "Filtert wisselstroomcomponenten eruit" }
        ],
        correct: 0,
        explanation: {
          en: "An inductor is a coil of wire that stores energy in a magnetic field when current flows through it. It opposes changes in current according to Lenz's law, making it useful for filtering, energy storage, and AC circuit applications.",
          es: "Un inductor es una bobina de alambre que almacena energía en un campo magnético cuando fluye corriente a través de él. Se opone a cambios en la corriente según la ley de Lenz, haciéndolo útil para filtrado, almacenamiento de energía y aplicaciones de circuitos AC.",
          de: "Eine Spule ist eine Drahtwicklung, die Energie in einem magnetischen Feld speichert, wenn Strom durch sie fließt. Sie widersteht Stromänderungen gemäß dem Lenzschen Gesetz, wodurch sie für Filterung, Energiespeicherung und Wechselstromschaltungen nützlich ist.",
          nl: "Een inductor is een draadspoel die energie opslaat in een magnetisch veld wanneer stroom erdoor vloeit. Het weerstaat veranderingen in stroom volgens de wet van Lenz, waardoor het nuttig is voor filtering, energieopslag en wisselstroomcircuittoepassingen."
        }
      },
      {
        question: {
          en: "What is the purpose of a diode in electronic circuits?",
          es: "¿Cuál es el propósito de un diodo en circuitos electrónicos?",
          de: "Was ist der Zweck einer Diode in elektronischen Schaltungen?",
          nl: "Wat is het doel van een diode in elektronische circuits?"
        },
        options: [
          { en: "Allow current to flow in only one direction", es: "Permitir que la corriente fluya en una sola dirección", de: "Strom nur in eine Richtung fließen lassen", nl: "Stroom laten vloeien in slechts één richting" },
          { en: "Amplify electrical signals", es: "Amplificar señales eléctricas", de: "Elektrische Signale verstärken", nl: "Elektrische signalen versterken" },
          { en: "Store electrical charge", es: "Almacenar carga eléctrica", de: "Elektrische Ladung speichern", nl: "Elektrische lading opslaan" },
          { en: "Generate electrical noise", es: "Generar ruido eléctrico", de: "Elektrisches Rauschen erzeugen", nl: "Elektrische ruis genereren" }
        ],
        correct: 0,
        explanation: {
          en: "A diode is a semiconductor device that allows current to flow in only one direction (forward bias) and blocks it in the reverse direction. This makes it useful for rectification, voltage regulation, and protection circuits.",
          es: "Un diodo es un dispositivo semiconductor que permite que la corriente fluya en una sola dirección (polarización directa) y la bloquea en la dirección inversa. Esto lo hace útil para rectificación, regulación de voltaje y circuitos de protección.",
          de: "Eine Diode ist ein Halbleiterbauteil, das Strom nur in eine Richtung (Vorwärtsspannung) fließen lässt und ihn in umgekehrter Richtung blockiert. Dies macht sie nützlich für Gleichrichtung, Spannungsregulierung und Schutzschaltungen.",
          nl: "Een diode is een halfgeleiderapparaat dat stroom slechts in één richting laat vloeien (voorwaartse spanning) en het in de omgekeerde richting blokkeert. Dit maakt het nuttig voor gelijkrichting, spanningsregeling en beveiligingscircuits."
        }
      },
      {
        question: {
          en: "What is the difference between series and parallel circuits?",
          es: "¿Cuál es la diferencia entre circuitos en serie y paralelo?",
          de: "Was ist der Unterschied zwischen Serien- und Parallelschaltungen?",
          nl: "Wat is het verschil tussen serie- en parallelle circuits?"
        },
        options: [
          { en: "Series: same current, different voltages; Parallel: same voltage, different currents", es: "Serie: misma corriente, diferentes voltajes; Paralelo: mismo voltaje, diferentes corrientes", de: "Serie: gleicher Strom, verschiedene Spannungen; Parallel: gleiche Spannung, verschiedene Ströme", nl: "Serie: zelfde stroom, verschillende spanningen; Parallel: zelfde spanning, verschillende stromen" },
          { en: "Series circuits are always faster", es: "Los circuitos serie son siempre más rápidos", de: "Serienschaltungen sind immer schneller", nl: "Seriecircuits zijn altijd sneller" },
          { en: "Parallel circuits use more power", es: "Los circuitos paralelos usan más potencia", de: "Parallelschaltungen verbrauchen mehr Leistung", nl: "Parallelle circuits gebruiken meer vermogen" },
          { en: "There is no significant difference", es: "No hay diferencia significativa", de: "Es gibt keinen wesentlichen Unterschied", nl: "Er is geen significant verschil" }
        ],
        correct: 0,
        explanation: {
          en: "In series circuits, components share the same current but have different voltages across them. In parallel circuits, components share the same voltage but may have different currents through them. Series circuits have one path, parallel circuits have multiple paths.",
          es: "En circuitos serie, los componentes comparten la misma corriente pero tienen diferentes voltajes a través de ellos. En circuitos paralelos, los componentes comparten el mismo voltaje pero pueden tener diferentes corrientes a través de ellos. Los circuitos serie tienen una ruta, los paralelos tienen múltiples rutas.",
          de: "In Serienschaltungen teilen sich Komponenten denselben Strom, haben aber verschiedene Spannungen. In Parallelschaltungen teilen sich Komponenten dieselbe Spannung, können aber verschiedene Ströme haben. Serienschaltungen haben einen Pfad, Parallelschaltungen haben mehrere Pfade.",
          nl: "In seriecircuits delen componenten dezelfde stroom maar hebben verschillende spanningen. In parallelle circuits delen componenten dezelfde spanning maar kunnen verschillende stromen hebben. Seriecircuits hebben één pad, parallelle circuits hebben meerdere paden."
        }
      },
      {
        question: {
          en: "What is electrical resistance and what causes it?",
          es: "¿Qué es la resistencia eléctrica y qué la causa?",
          de: "Was ist elektrischer Widerstand und was verursacht ihn?",
          nl: "Wat is elektrische weerstand en wat veroorzaakt het?"
        },
        options: [
          { en: "Opposition to current flow caused by material properties", es: "Oposición al flujo de corriente causada por propiedades del material", de: "Widerstand gegen Stromfluss durch Materialeigenschaften verursacht", nl: "Weerstand tegen stroomflow veroorzaakt door materiaaleigenschappen" },
          { en: "Energy stored in magnetic fields", es: "Energía almacenada en campos magnéticos", de: "In Magnetfeldern gespeicherte Energie", nl: "Energie opgeslagen in magnetische velden" },
          { en: "The speed of electrons", es: "La velocidad de los electrones", de: "Die Geschwindigkeit der Elektronen", nl: "De snelheid van elektronen" },
          { en: "Voltage divided by power", es: "Voltaje dividido por potencia", de: "Spannung geteilt durch Leistung", nl: "Spanning gedeeld door vermogen" }
        ],
        correct: 0,
        explanation: {
          en: "Electrical resistance is the opposition to the flow of electric current through a material. It's caused by collisions between moving electrons and atoms in the conductor, converting electrical energy into heat. Measured in ohms (Ω).",
          es: "La resistencia eléctrica es la oposición al flujo de corriente eléctrica a través de un material. Es causada por colisiones entre electrones en movimiento y átomos en el conductor, convirtiendo energía eléctrica en calor. Se mide en ohmios (Ω).",
          de: "Elektrischer Widerstand ist der Widerstand gegen den Fluss elektrischen Stroms durch ein Material. Er wird durch Kollisionen zwischen bewegten Elektronen und Atomen im Leiter verursacht, wodurch elektrische Energie in Wärme umgewandelt wird. Gemessen in Ohm (Ω).",
          nl: "Elektrische weerstand is de weerstand tegen de stroom van elektrische stroom door een materiaal. Het wordt veroorzaakt door botsingen tussen bewegende elektronen en atomen in de geleider, waarbij elektrische energie wordt omgezet in warmte. Gemeten in ohm (Ω)."
        }
      },
      {
        question: {
          en: "What is the function of a transistor?",
          es: "¿Cuál es la función de un transistor?",
          de: "Was ist die Funktion eines Transistors?",
          nl: "Wat is de functie van een transistor?"
        },
        options: [
          { en: "Amplify signals or act as an electronic switch", es: "Amplificar señales o actuar como interruptor electrónico", de: "Signale verstärken oder als elektronischer Schalter fungieren", nl: "Signalen versterken of fungeren als elektronische schakelaar" },
          { en: "Store electrical charge", es: "Almacenar carga eléctrica", de: "Elektrische Ladung speichern", nl: "Elektrische lading opslaan" },
          { en: "Convert AC to DC", es: "Convertir AC a DC", de: "Wechselstrom in Gleichstrom umwandeln", nl: "Wisselstroom naar gelijkstroom omzetten" },
          { en: "Generate electrical power", es: "Generar potencia eléctrica", de: "Elektrische Leistung erzeugen", nl: "Elektrisch vermogen opwekken" }
        ],
        correct: 0,
        explanation: {
          en: "A transistor is a semiconductor device that can amplify electrical signals or act as an electronic switch. It has three terminals (base, collector, emitter in BJT) and forms the foundation of modern electronics and digital logic.",
          es: "Un transistor es un dispositivo semiconductor que puede amplificar señales eléctricas o actuar como interruptor electrónico. Tiene tres terminales (base, colector, emisor en BJT) y forma la base de la electrónica moderna y lógica digital.",
          de: "Ein Transistor ist ein Halbleiterbauteil, das elektrische Signale verstärken oder als elektronischer Schalter fungieren kann. Er hat drei Anschlüsse (Basis, Kollektor, Emitter bei BJT) und bildet die Grundlage moderner Elektronik und digitaler Logik.",
          nl: "Een transistor is een halfgeleiderapparaat dat elektrische signalen kan versterken of kan fungeren als elektronische schakelaar. Het heeft drie aansluitingen (basis, collector, emitter bij BJT) en vormt de basis van moderne elektronica en digitale logica."
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
          { en: "Generation of voltage due to changing magnetic field", es: "Generación de voltaje debido a campo magnético cambiante", de: "Spannungserzeugung durch sich änderndes Magnetfeld", nl: "Opwekking van spanning door veranderend magnetisch veld" },
          { en: "Flow of electrons in a conductor", es: "Flujo de electrones en un conductor", de: "Fluss von Elektronen in einem Leiter", nl: "Stroom van elektronen in een geleider" },
          { en: "Attraction between magnets", es: "Atracción entre imanes", de: "Anziehung zwischen Magneten", nl: "Aantrekking tussen magneten" },
          { en: "Conversion of light to electricity", es: "Conversión de luz a electricidad", de: "Umwandlung von Licht in Elektrizität", nl: "Omzetting van licht naar elektriciteit" }
        ],
        correct: 0,
        explanation: {
          en: "Electromagnetic induction is the process of generating an electric voltage (EMF) in a conductor due to a changing magnetic field, as described by Faraday's law. This principle is fundamental to generators, transformers, and motors.",
          es: "La inducción electromagnética es el proceso de generar un voltaje eléctrico (EMF) en un conductor debido a un campo magnético cambiante, como describe la ley de Faraday. Este principio es fundamental para generadores, transformadores y motores.",
          de: "Elektromagnetische Induktion ist der Prozess der Erzeugung einer elektrischen Spannung (EMK) in einem Leiter aufgrund eines sich ändernden Magnetfelds, wie durch Faradays Gesetz beschrieben. Dieses Prinzip ist fundamental für Generatoren, Transformatoren und Motoren.",
          nl: "Elektromagnetische inductie is het proces van het opwekken van elektrische spanning (EMF) in een geleider door een veranderend magnetisch veld, zoals beschreven door de wet van Faraday. Dit principe is fundamenteel voor generatoren, transformatoren en motoren."
        }
      },
      {
        question: {
          en: "What is the power factor in AC circuits?",
          es: "¿Qué es el factor de potencia en circuitos AC?",
          de: "Was ist der Leistungsfaktor in Wechselstromkreisen?",
          nl: "Wat is de arbeidsfactor in wisselstroomcircuits?"
        },
        options: [
          { en: "Cosine of phase angle between voltage and current", es: "Coseno del ángulo de fase entre voltaje y corriente", de: "Kosinus des Phasenwinkels zwischen Spannung und Strom", nl: "Cosinus van fasehoek tussen spanning en stroom" },
          { en: "Maximum power divided by average power", es: "Potencia máxima dividida por potencia promedio", de: "Maximale Leistung geteilt durch durchschnittliche Leistung", nl: "Maximaal vermogen gedeeld door gemiddeld vermogen" },
          { en: "Voltage divided by current", es: "Voltaje dividido por corriente", de: "Spannung geteilt durch Strom", nl: "Spanning gedeeld door stroom" },
          { en: "Frequency of the AC signal", es: "Frecuencia de la señal AC", de: "Frequenz des Wechselstromsignals", nl: "Frequentie van het wisselstroomsignaal" }
        ],
        correct: 0,
        explanation: {
          en: "Power factor is the cosine of the phase angle between voltage and current in AC circuits. It represents the ratio of real power to apparent power, indicating how efficiently electrical power is being used. Unity (1.0) is ideal.",
          es: "El factor de potencia es el coseno del ángulo de fase entre voltaje y corriente en circuitos AC. Representa la relación entre potencia real y potencia aparente, indicando qué tan eficientemente se está usando la potencia eléctrica. La unidad (1.0) es ideal.",
          de: "Der Leistungsfaktor ist der Kosinus des Phasenwinkels zwischen Spannung und Strom in Wechselstromkreisen. Er repräsentiert das Verhältnis von Wirkleistung zu Scheinleistung und zeigt, wie effizient elektrische Leistung genutzt wird. Eins (1,0) ist ideal.",
          nl: "De arbeidsfactor is de cosinus van de fasehoek tussen spanning en stroom in wisselstroomcircuits. Het vertegenwoordigt de verhouding van werkelijk vermogen tot schijnbaar vermogen, wat aangeeft hoe efficiënt elektrisch vermogen wordt gebruikt. Eenheid (1,0) is ideaal."
        }
      },
      {
        question: {
          en: "What is a three-phase electrical system?",
          es: "¿Qué es un sistema eléctrico trifásico?",
          de: "Was ist ein Dreiphasen-Elektrosystem?",
          nl: "Wat is een driefasig elektrisch systeem?"
        },
        options: [
          { en: "Three sinusoidal voltages 120° apart in phase", es: "Tres voltajes sinusoidales separados 120° en fase", de: "Drei sinusförmige Spannungen mit 120° Phasenverschiebung", nl: "Drie sinusvormige spanningen 120° uit fase" },
          { en: "Three different voltage levels", es: "Tres niveles de voltaje diferentes", de: "Drei verschiedene Spannungspegel", nl: "Drie verschillende spanningsniveaus" },
          { en: "Three separate electrical circuits", es: "Tres circuitos eléctricos separados", de: "Drei separate elektrische Schaltkreise", nl: "Drie aparte elektrische circuits" },
          { en: "Three types of electrical components", es: "Tres tipos de componentes eléctricos", de: "Drei Arten elektrischer Komponenten", nl: "Drie types elektrische componenten" }
        ],
        correct: 0,
        explanation: {
          en: "A three-phase system uses three sinusoidal voltages of equal magnitude that are 120° apart in phase. This provides more efficient power transmission, smoother power delivery, and is widely used in industrial and power distribution systems.",
          es: "Un sistema trifásico usa tres voltajes sinusoidales de igual magnitud que están separados 120° en fase. Esto proporciona transmisión de potencia más eficiente, entrega de potencia más suave, y es ampliamente usado en sistemas industriales y de distribución de potencia.",
          de: "Ein Dreiphasensystem verwendet drei sinusförmige Spannungen gleicher Größe mit 120° Phasenverschiebung. Dies ermöglicht effizientere Leistungsübertragung, gleichmäßigere Leistungsabgabe und wird weithin in industriellen und Stromverteilungssystemen verwendet.",
          nl: "Een driefasig systeem gebruikt drie sinusvormige spanningen van gelijke grootte die 120° uit fase zijn. Dit zorgt voor efficiëntere vermogensoverdracht, gelijkmatigere vermogenslevering, en wordt veel gebruikt in industriële en stroomdistributiesystemen."
        }
      },
      {
        question: {
          en: "What is the purpose of a fuse in electrical circuits?",
          es: "¿Cuál es el propósito de un fusible en circuitos eléctricos?",
          de: "Was ist der Zweck einer Sicherung in elektrischen Schaltkreisen?",
          nl: "Wat is het doel van een zekering in elektrische circuits?"
        },
        options: [
          { en: "Protect circuit from overcurrent by melting when current is too high", es: "Proteger el circuito de sobrecorriente fundiéndose cuando la corriente es muy alta", de: "Schaltkreis vor Überstrom schützen durch Schmelzen bei zu hohem Strom", nl: "Circuit beschermen tegen overstroom door te smelten bij te hoge stroom" },
          { en: "Regulate voltage levels", es: "Regular niveles de voltaje", de: "Spannungspegel regulieren", nl: "Spanningsniveaus reguleren" },
          { en: "Filter electrical noise", es: "Filtrar ruido eléctrico", de: "Elektrisches Rauschen filtern", nl: "Elektrische ruis filteren" },
          { en: "Amplify electrical signals", es: "Amplificar señales eléctricas", de: "Elektrische Signale verstärken", nl: "Elektrische signalen versterken" }
        ],
        correct: 0,
        explanation: {
          en: "A fuse is a safety device that protects electrical circuits from overcurrent conditions. It contains a thin wire or strip that melts when current exceeds its rated value, breaking the circuit and preventing damage to equipment or fire hazards.",
          es: "Un fusible es un dispositivo de seguridad que protege circuitos eléctricos de condiciones de sobrecorriente. Contiene un alambre delgado o tira que se funde cuando la corriente excede su valor nominal, rompiendo el circuito y previniendo daño al equipo o peligros de incendio.",
          de: "Eine Sicherung ist ein Sicherheitsgerät, das elektrische Schaltkreise vor Überstromzuständen schützt. Sie enthält einen dünnen Draht oder Streifen, der schmilzt, wenn der Strom seinen Nennwert überschreitet, den Stromkreis unterbricht und Geräteschäden oder Brandgefahren verhindert.",
          nl: "Een zekering is een veiligheidsapparaat dat elektrische circuits beschermt tegen overstroomcondities. Het bevat een dunne draad of strip die smelt wanneer stroom zijn nominale waarde overschrijdt, het circuit verbreekt en schade aan apparatuur of brandgevaar voorkomt."
        }
      },
      {
        question: {
          en: "What is electrical impedance?",
          es: "¿Qué es la impedancia eléctrica?",
          de: "Was ist elektrische Impedanz?",
          nl: "Wat is elektrische impedantie?"
        },
        options: [
          { en: "Total opposition to AC current flow including resistance and reactance", es: "Oposición total al flujo de corriente AC incluyendo resistencia y reactancia", de: "Gesamtwiderstand gegen Wechselstromfluss einschließlich Widerstand und Reaktanz", nl: "Totale weerstand tegen wisselstroomflow inclusief weerstand en reactantie" },
          { en: "Only the resistance component", es: "Solo el componente de resistencia", de: "Nur die Widerstandskomponente", nl: "Alleen de weerstandscomponent" },
          { en: "Voltage multiplied by current", es: "Voltaje multiplicado por corriente", de: "Spannung multipliziert mit Strom", nl: "Spanning vermenigvuldigd met stroom" },
          { en: "The speed of electron flow", es: "La velocidad del flujo de electrones", de: "Die Geschwindigkeit des Elektronenflusses", nl: "De snelheid van elektronenstroom" }
        ],
        correct: 0,
        explanation: {
          en: "Electrical impedance (Z) is the total opposition to AC current flow in a circuit, combining resistance (R) and reactance (X). It's calculated as Z = √(R² + X²) and is measured in ohms, representing both magnitude and phase angle.",
          es: "La impedancia eléctrica (Z) es la oposición total al flujo de corriente AC en un circuito, combinando resistencia (R) y reactancia (X). Se calcula como Z = √(R² + X²) y se mide en ohmios, representando tanto magnitud como ángulo de fase.",
          de: "Elektrische Impedanz (Z) ist der Gesamtwiderstand gegen Wechselstromfluss in einem Schaltkreis, der Widerstand (R) und Reaktanz (X) kombiniert. Sie wird als Z = √(R² + X²) berechnet und in Ohm gemessen, repräsentiert sowohl Betrag als auch Phasenwinkel.",
          nl: "Elektrische impedantie (Z) is de totale weerstand tegen wisselstroomflow in een circuit, waarbij weerstand (R) en reactantie (X) worden gecombineerd. Het wordt berekend als Z = √(R² + X²) en gemeten in ohm, vertegenwoordigt zowel grootte als fasehoek."
        }
      },
      {
        question: {
          en: "What is the function of a rectifier?",
          es: "¿Cuál es la función de un rectificador?",
          de: "Was ist die Funktion eines Gleichrichters?",
          nl: "Wat is de functie van een gelijkrichter?"
        },
        options: [
          { en: "Convert AC to DC", es: "Convertir AC a DC", de: "Wechselstrom in Gleichstrom umwandeln", nl: "Wisselstroom naar gelijkstroom omzetten" },
          { en: "Convert DC to AC", es: "Convertir DC a AC", de: "Gleichstrom in Wechselstrom umwandeln", nl: "Gelijkstroom naar wisselstroom omzetten" },
          { en: "Amplify electrical signals", es: "Amplificar señales eléctricas", de: "Elektrische Signale verstärken", nl: "Elektrische signalen versterken" },
          { en: "Filter electrical noise", es: "Filtrar ruido eléctrico", de: "Elektrisches Rauschen filtern", nl: "Elektrische ruis filteren" }
        ],
        correct: 0,
        explanation: {
          en: "A rectifier converts alternating current (AC) to direct current (DC) using diodes. It can be half-wave (using one diode) or full-wave (using multiple diodes), and is essential in power supplies for electronic devices.",
          es: "Un rectificador convierte corriente alterna (AC) a corriente directa (DC) usando diodos. Puede ser de media onda (usando un diodo) o onda completa (usando múltiples diodos), y es esencial en fuentes de poder para dispositivos electrónicos.",
          de: "Ein Gleichrichter wandelt Wechselstrom (AC) in Gleichstrom (DC) mit Dioden um. Er kann halbwellen- (ein Diode) oder vollwellen- (mehrere Dioden) sein und ist wesentlich in Netzteilen für elektronische Geräte.",
          nl: "Een gelijkrichter zet wisselstroom (AC) om naar gelijkstroom (DC) met behulp van diodes. Het kan halfgolf (één diode) of volgolf (meerdere diodes) zijn, en is essentieel in voedingen voor elektronische apparaten."
        }
      },
      {
        question: {
          en: "What is the difference between analog and digital signals?",
          es: "¿Cuál es la diferencia entre señales analógicas y digitales?",
          de: "Was ist der Unterschied zwischen analogen und digitalen Signalen?",
          nl: "Wat is het verschil tussen analoge en digitale signalen?"
        },
        options: [
          { en: "Analog is continuous, digital is discrete (0s and 1s)", es: "Analógica es continua, digital es discreta (0s y 1s)", de: "Analog ist kontinuierlich, digital ist diskret (0en und 1en)", nl: "Analoog is continu, digitaal is discreet (0en en 1en)" },
          { en: "Analog is faster than digital", es: "Analógica es más rápida que digital", de: "Analog ist schneller als digital", nl: "Analoog is sneller dan digitaal" },
          { en: "Digital signals are always weaker", es: "Las señales digitales son siempre más débiles", de: "Digitale Signale sind immer schwächer", nl: "Digitale signalen zijn altijd zwakker" },
          { en: "There is no difference", es: "No hay diferencia", de: "Es gibt keinen Unterschied", nl: "Er is geen verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Analog signals are continuous and can take any value within a range, representing information as varying voltages. Digital signals are discrete, using only two states (0 and 1) to represent information, making them more immune to noise and suitable for computer processing.",
          es: "Las señales analógicas son continuas y pueden tomar cualquier valor dentro de un rango, representando información como voltajes variables. Las señales digitales son discretas, usando solo dos estados (0 y 1) para representar información, haciéndolas más inmunes al ruido y adecuadas para procesamiento por computadora.",
          de: "Analoge Signale sind kontinuierlich und können jeden Wert in einem Bereich annehmen, repräsentieren Information als variierende Spannungen. Digitale Signale sind diskret, verwenden nur zwei Zustände (0 und 1) zur Informationsdarstellung, machen sie rauschunempfindlicher und geeignet für Computerverarbeitung.",
          nl: "Analoge signalen zijn continu en kunnen elke waarde binnen een bereik aannemen, vertegenwoordigen informatie als variërende spanningen. Digitale signalen zijn discreet, gebruiken slechts twee toestanden (0 en 1) om informatie te vertegenwoordigen, waardoor ze meer immuun zijn voor ruis en geschikt voor computerverwerking."
        }
      },
      {
        question: {
          en: "What is an operational amplifier (op-amp)?",
          es: "¿Qué es un amplificador operacional (op-amp)?",
          de: "Was ist ein Operationsverstärker (Op-Amp)?",
          nl: "Wat is een operationele versterker (op-amp)?"
        },
        options: [
          { en: "High-gain differential amplifier with very high input impedance", es: "Amplificador diferencial de alta ganancia con muy alta impedancia de entrada", de: "Hochverstärkender Differenzverstärker mit sehr hoher Eingangsimpedanz", nl: "Hoge-versterkingsdifferentiaalversterker met zeer hoge ingangsimpedantie" },
          { en: "A type of power transistor", es: "Un tipo de transistor de potencia", de: "Eine Art Leistungstransistor", nl: "Een type vermogenstransistor" },
          { en: "A digital logic gate", es: "Una compuerta lógica digital", de: "Ein digitales Logikgatter", nl: "Een digitale logische poort" },
          { en: "A voltage regulator", es: "Un regulador de voltaje", de: "Ein Spannungsregler", nl: "Een spanningsregelaar" }
        ],
        correct: 0,
        explanation: {
          en: "An operational amplifier is a high-gain differential amplifier with very high input impedance, low output impedance, and high common-mode rejection ratio. It's used in analog circuits for amplification, filtering, mathematical operations, and signal conditioning.",
          es: "Un amplificador operacional es un amplificador diferencial de alta ganancia con muy alta impedancia de entrada, baja impedancia de salida y alta relación de rechazo de modo común. Se usa en circuitos analógicos para amplificación, filtrado, operaciones matemáticas y acondicionamiento de señales.",
          de: "Ein Operationsverstärker ist ein hochverstärkender Differenzverstärker mit sehr hoher Eingangsimpedanz, niedriger Ausgangsimpedanz und hoher Gleichtaktunterdrückung. Er wird in analogen Schaltungen für Verstärkung, Filterung, mathematische Operationen und Signalkonditionierung verwendet.",
          nl: "Een operationele versterker is een hoge-versterkingsdifferentiaalversterker met zeer hoge ingangsimpedantie, lage uitgangsimpedantie en hoge gemeenschappelijke-modus onderdrukkingsverhouding. Het wordt gebruikt in analoge circuits voor versterking, filtering, wiskundige bewerkingen en signaalconditionering."
        }
      },
      {
        question: {
          en: "What is a logic gate in digital electronics?",
          es: "¿Qué es una compuerta lógica en electrónica digital?",
          de: "Was ist ein Logikgatter in der Digitalelektronik?",
          nl: "Wat is een logische poort in digitale elektronica?"
        },
        options: [
          { en: "Electronic circuit that performs Boolean logic operations", es: "Circuito electrónico que realiza operaciones lógicas booleanas", de: "Elektronischer Schaltkreis, der boolesche Logikoperationen durchführt", nl: "Elektronisch circuit dat Booleaanse logische bewerkingen uitvoert" },
          { en: "A type of power switch", es: "Un tipo de interruptor de potencia", de: "Eine Art Leistungsschalter", nl: "Een type vermogensschakelaar" },
          { en: "An analog amplifier", es: "Un amplificador analógico", de: "Ein analoger Verstärker", nl: "Een analoge versterker" },
          { en: "A memory storage device", es: "Un dispositivo de almacenamiento de memoria", de: "Ein Speichergerät", nl: "Een geheugenopslagapparaat" }
        ],
        correct: 0,
        explanation: {
          en: "A logic gate is a fundamental building block of digital circuits that performs Boolean logic operations on binary inputs (0 and 1). Common types include AND, OR, NOT, NAND, NOR, and XOR gates, which form the basis of all digital systems.",
          es: "Una compuerta lógica es un bloque fundamental de circuitos digitales que realiza operaciones lógicas booleanas en entradas binarias (0 y 1). Los tipos comunes incluyen compuertas AND, OR, NOT, NAND, NOR y XOR, que forman la base de todos los sistemas digitales.",
          de: "Ein Logikgatter ist ein fundamentaler Baustein digitaler Schaltungen, der boolesche Logikoperationen an binären Eingängen (0 und 1) durchführt. Häufige Typen umfassen AND-, OR-, NOT-, NAND-, NOR- und XOR-Gatter, die die Basis aller digitalen Systeme bilden.",
          nl: "Een logische poort is een fundamenteel bouwblok van digitale circuits dat Booleaanse logische bewerkingen uitvoert op binaire ingangen (0 en 1). Veelvoorkomende types zijn AND, OR, NOT, NAND, NOR en XOR poorten, die de basis vormen van alle digitale systemen."
        }
      },
      {
        question: {
          en: "What is electrical grounding and why is it important?",
          es: "¿Qué es la puesta a tierra eléctrica y por qué es importante?",
          de: "Was ist elektrische Erdung und warum ist sie wichtig?",
          nl: "Wat is elektrische aarding en waarom is het belangrijk?"
        },
        options: [
          { en: "Connection to earth for safety and voltage reference", es: "Conexión a tierra para seguridad y referencia de voltaje", de: "Verbindung zur Erde für Sicherheit und Spannungsreferenz", nl: "Verbinding met aarde voor veiligheid en spanningsreferentie" },
          { en: "A way to increase voltage", es: "Una forma de aumentar voltaje", de: "Eine Methode zur Spannungserhöhung", nl: "Een manier om spanning te verhogen" },
          { en: "Insulation of electrical wires", es: "Aislamiento de cables eléctricos", de: "Isolierung elektrischer Drähte", nl: "Isolatie van elektrische draden" },
          { en: "Connection between different circuits", es: "Conexión entre diferentes circuitos", de: "Verbindung zwischen verschiedenen Schaltkreisen", nl: "Verbinding tussen verschillende circuits" }
        ],
        correct: 0,
        explanation: {
          en: "Electrical grounding provides a safe path for electrical current to flow to earth in case of faults, protecting people from electric shock. It also serves as a voltage reference point (zero volts) for electrical systems and helps reduce electrical noise.",
          es: "La puesta a tierra eléctrica proporciona una ruta segura para que la corriente eléctrica fluya a tierra en caso de fallas, protegiendo a las personas de descargas eléctricas. También sirve como punto de referencia de voltaje (cero voltios) para sistemas eléctricos y ayuda a reducir ruido eléctrico.",
          de: "Elektrische Erdung bietet einen sicheren Pfad für elektrischen Strom zur Erde bei Fehlern, schützt Menschen vor Stromschlag. Sie dient auch als Spannungsreferenzpunkt (null Volt) für elektrische Systeme und hilft, elektrisches Rauschen zu reduzieren.",
          nl: "Elektrische aarding biedt een veilig pad voor elektrische stroom om naar aarde te vloeien in geval van fouten, beschermt mensen tegen elektrische schok. Het dient ook als spanningsreferentiepunt (nul volt) voor elektrische systemen en helpt elektrische ruis te verminderen."
        }
      },
      {
        question: {
          en: "What is the function of a voltage regulator?",
          es: "¿Cuál es la función de un regulador de voltaje?",
          de: "Was ist die Funktion eines Spannungsreglers?",
          nl: "Wat is de functie van een spanningsregelaar?"
        },
        options: [
          { en: "Maintain constant output voltage despite input variations", es: "Mantener voltaje de salida constante a pesar de variaciones de entrada", de: "Konstante Ausgangsspannung trotz Eingangsschwankungen aufrechterhalten", nl: "Constante uitgangsspanning behouden ondanks ingangsvariaties" },
          { en: "Convert AC to DC", es: "Convertir AC a DC", de: "Wechselstrom in Gleichstrom umwandeln", nl: "Wisselstroom naar gelijkstroom omzetten" },
          { en: "Amplify voltage signals", es: "Amplificar señales de voltaje", de: "Spannungssignale verstärken", nl: "Spanningssignalen versterken" },
          { en: "Measure voltage levels", es: "Medir niveles de voltaje", de: "Spannungspegel messen", nl: "Spanningsniveaus meten" }
        ],
        correct: 0,
        explanation: {
          en: "A voltage regulator maintains a constant output voltage despite variations in input voltage or load current. It's essential in power supplies to ensure stable operation of electronic circuits and protect sensitive components from voltage fluctuations.",
          es: "Un regulador de voltaje mantiene un voltaje de salida constante a pesar de variaciones en voltaje de entrada o corriente de carga. Es esencial en fuentes de poder para asegurar operación estable de circuitos electrónicos y proteger componentes sensibles de fluctuaciones de voltaje.",
          de: "Ein Spannungsregler hält eine konstante Ausgangsspannung trotz Schwankungen der Eingangsspannung oder des Laststroms aufrecht. Er ist in Netzteilen wesentlich, um stabilen Betrieb elektronischer Schaltungen zu gewährleisten und empfindliche Komponenten vor Spannungsschwankungen zu schützen.",
          nl: "Een spanningsregelaar behoudt een constante uitgangsspanning ondanks variaties in ingangsspanning of belastingsstroom. Het is essentieel in voedingen om stabiele werking van elektronische circuits te waarborgen en gevoelige componenten te beschermen tegen spanningsfluctuaties."
        }
      },
      {
        question: {
          en: "What is electrical conductivity and what materials have high conductivity?",
          es: "¿Qué es la conductividad eléctrica y qué materiales tienen alta conductividad?",
          de: "Was ist elektrische Leitfähigkeit und welche Materialien haben hohe Leitfähigkeit?",
          nl: "Wat is elektrische geleidbaarheid en welke materialen hebben hoge geleidbaarheid?"
        },
        options: [
          { en: "Ability to conduct current; metals like copper and silver", es: "Capacidad de conducir corriente; metales como cobre y plata", de: "Fähigkeit, Strom zu leiten; Metalle wie Kupfer und Silber", nl: "Vermogen om stroom te geleiden; metalen zoals koper en zilver" },
          { en: "Resistance to current flow; plastics and rubber", es: "Resistencia al flujo de corriente; plásticos y caucho", de: "Widerstand gegen Stromfluss; Kunststoffe und Gummi", nl: "Weerstand tegen stroomflow; kunststoffen en rubber" },
          { en: "Magnetic properties; iron and steel", es: "Propiedades magnéticas; hierro y acero", de: "Magnetische Eigenschaften; Eisen und Stahl", nl: "Magnetische eigenschappen; ijzer en staal" },
          { en: "Heat resistance; ceramics", es: "Resistencia al calor; cerámicas", de: "Hitzebeständigkeit; Keramik", nl: "Warmteweerstand; keramiek" }
        ],
        correct: 0,
        explanation: {
          en: "Electrical conductivity is the ability of a material to conduct electric current. Metals like silver, copper, and aluminum have high conductivity due to free electrons. Insulators like rubber and glass have low conductivity, while semiconductors have intermediate conductivity.",
          es: "La conductividad eléctrica es la capacidad de un material para conducir corriente eléctrica. Metales como plata, cobre y aluminio tienen alta conductividad debido a electrones libres. Aislantes como caucho y vidrio tienen baja conductividad, mientras semiconductores tienen conductividad intermedia.",
          de: "Elektrische Leitfähigkeit ist die Fähigkeit eines Materials, elektrischen Strom zu leiten. Metalle wie Silber, Kupfer und Aluminium haben hohe Leitfähigkeit aufgrund freier Elektronen. Isolatoren wie Gummi und Glas haben niedrige Leitfähigkeit, Halbleiter haben mittlere Leitfähigkeit.",
          nl: "Elektrische geleidbaarheid is het vermogen van een materiaal om elektrische stroom te geleiden. Metalen zoals zilver, koper en aluminium hebben hoge geleidbaarheid vanwege vrije elektronen. Isolatoren zoals rubber en glas hebben lage geleidbaarheid, halfgeleiders hebben tussenliggende geleidbaarheid."
        }
      },
      {
        question: {
          en: "What is a motor and how does it work?",
          es: "¿Qué es un motor y cómo funciona?",
          de: "Was ist ein Motor und wie funktioniert er?",
          nl: "Wat is een motor en hoe werkt het?"
        },
        options: [
          { en: "Converts electrical energy to mechanical energy using magnetic fields", es: "Convierte energía eléctrica en energía mecánica usando campos magnéticos", de: "Wandelt elektrische Energie in mechanische Energie mit Magnetfeldern um", nl: "Zet elektrische energie om in mechanische energie met behulp van magnetische velden" },
          { en: "Stores electrical energy in batteries", es: "Almacena energía eléctrica en baterías", de: "Speichert elektrische Energie in Batterien", nl: "Slaat elektrische energie op in batterijen" },
          { en: "Generates electrical power from heat", es: "Genera potencia eléctrica del calor", de: "Erzeugt elektrische Leistung aus Wärme", nl: "Wekt elektrisch vermogen op uit warmte" },
          { en: "Transforms voltage levels", es: "Transforma niveles de voltaje", de: "Transformiert Spannungspegel", nl: "Transformeert spanningsniveaus" }
        ],
        correct: 0,
        explanation: {
          en: "An electric motor converts electrical energy into mechanical energy through the interaction of magnetic fields. When current flows through windings in a magnetic field, it creates a force (Lorentz force) that causes rotation of the rotor.",
          es: "Un motor eléctrico convierte energía eléctrica en energía mecánica a través de la interacción de campos magnéticos. Cuando la corriente fluye a través de bobinados en un campo magnético, crea una fuerza (fuerza de Lorentz) que causa rotación del rotor.",
          de: "Ein Elektromotor wandelt elektrische Energie in mechanische Energie durch die Wechselwirkung von Magnetfeldern um. Wenn Strom durch Wicklungen in einem Magnetfeld fließt, entsteht eine Kraft (Lorentz-Kraft), die die Rotation des Rotors verursacht.",
          nl: "Een elektrische motor zet elektrische energie om in mechanische energie door de interactie van magnetische velden. Wanneer stroom door wikkelingen in een magnetisch veld vloeit, creëert het een kracht (Lorentz-kracht) die rotatie van de rotor veroorzaakt."
        }
      },
      {
        question: {
          en: "What is the difference between step-up and step-down transformers?",
          es: "¿Cuál es la diferencia entre transformadores elevadores y reductores?",
          de: "Was ist der Unterschied zwischen Hoch- und Heruntertransformatoren?",
          nl: "Wat is het verschil tussen op- en neertransformatoren?"
        },
        options: [
          { en: "Step-up increases voltage, step-down decreases voltage", es: "Elevador aumenta voltaje, reductor disminuye voltaje", de: "Hochtransformator erhöht Spannung, Heruntertransformator verringert Spannung", nl: "Optransformator verhoogt spanning, neertransformator verlaagt spanning" },
          { en: "Step-up is for AC, step-down is for DC", es: "Elevador es para AC, reductor es para DC", de: "Hochtransformator ist für Wechselstrom, Heruntertransformator ist für Gleichstrom", nl: "Optransformator is voor wisselstroom, neertransformator is voor gelijkstroom" },
          { en: "Step-up is more efficient", es: "Elevador es más eficiente", de: "Hochtransformator ist effizienter", nl: "Optransformator is efficiënter" },
          { en: "They work the same way", es: "Funcionan de la misma manera", de: "Sie funktionieren gleich", nl: "Ze werken op dezelfde manier" }
        ],
        correct: 0,
        explanation: {
          en: "A step-up transformer increases voltage (and decreases current proportionally) with more turns in the secondary winding than primary. A step-down transformer decreases voltage (and increases current) with fewer turns in the secondary than primary.",
          es: "Un transformador elevador aumenta voltaje (y disminuye corriente proporcionalmente) con más vueltas en el bobinado secundario que primario. Un transformador reductor disminuye voltaje (y aumenta corriente) con menos vueltas en el secundario que primario.",
          de: "Ein Hochtransformator erhöht die Spannung (und verringert proportional den Strom) mit mehr Windungen in der Sekundärwicklung als in der Primären. Ein Heruntertransformator verringert die Spannung (und erhöht den Strom) mit weniger Windungen im Sekundär als im Primär.",
          nl: "Een optransformator verhoogt spanning (en verlaagt stroom proportioneel) met meer windingen in de secundaire wikkeling dan primaire. Een neertransformator verlaagt spanning (en verhoogt stroom) met minder windingen in de secundaire dan primaire."
        }
      },
      {
        question: {
          en: "What is electrical resonance?",
          es: "¿Qué es la resonancia eléctrica?",
          de: "Was ist elektrische Resonanz?",
          nl: "Wat is elektrische resonantie?"
        },
        options: [
          { en: "Condition where inductive and capacitive reactances cancel out", es: "Condición donde reactancias inductiva y capacitiva se cancelan", de: "Zustand, in dem sich induktive und kapazitive Reaktanzen aufheben", nl: "Toestand waarbij inductieve en capacitieve reactanties elkaar opheffen" },
          { en: "Maximum current flow in any circuit", es: "Flujo máximo de corriente en cualquier circuito", de: "Maximaler Stromfluss in jedem Schaltkreis", nl: "Maximale stroomflow in elk circuit" },
          { en: "Minimum voltage in AC circuits", es: "Voltaje mínimo en circuitos AC", de: "Minimale Spannung in Wechselstromkreisen", nl: "Minimale spanning in wisselstroomcircuits" },
          { en: "Phase difference between voltage and current", es: "Diferencia de fase entre voltaje y corriente", de: "Phasendifferenz zwischen Spannung und Strom", nl: "Faseverschil tussen spanning en stroom" }
        ],
        correct: 0,
        explanation: {
          en: "Electrical resonance occurs in LC circuits when the inductive reactance equals the capacitive reactance, causing them to cancel out. At resonance frequency, impedance is minimized (in series circuits) and current is maximized, making it useful in tuning circuits.",
          es: "La resonancia eléctrica ocurre en circuitos LC cuando la reactancia inductiva iguala la reactancia capacitiva, causando que se cancelen. En la frecuencia de resonancia, la impedancia se minimiza (en circuitos serie) y la corriente se maximiza, haciéndola útil en circuitos de sintonía.",
          de: "Elektrische Resonanz tritt in LC-Schaltkreisen auf, wenn die induktive Reaktanz der kapazitiven Reaktanz entspricht und sie sich aufheben. Bei Resonanzfrequenz wird die Impedanz minimiert (in Serienschaltungen) und der Strom maximiert, nützlich in Abstimmschaltungen.",
          nl: "Elektrische resonantie treedt op in LC-circuits wanneer de inductieve reactantie gelijk is aan de capacitieve reactantie, waardoor ze elkaar opheffen. Bij resonantiefrequentie wordt impedantie geminimaliseerd (in seriecircuits) en stroom gemaximaliseerd, nuttig in afstemmingscircuits."
        }
      },
      {
        question: {
          en: "What is a generator and how does it work?",
          es: "¿Qué es un generador y cómo funciona?",
          de: "Was ist ein Generator und wie funktioniert er?",
          nl: "Wat is een generator en hoe werkt het?"
        },
        options: [
          { en: "Converts mechanical energy to electrical energy using electromagnetic induction", es: "Convierte energía mecánica en energía eléctrica usando inducción electromagnética", de: "Wandelt mechanische Energie in elektrische Energie mit elektromagnetischer Induktion um", nl: "Zet mechanische energie om in elektrische energie met behulp van elektromagnetische inductie" },
          { en: "Stores electrical energy for later use", es: "Almacena energía eléctrica para uso posterior", de: "Speichert elektrische Energie für späteren Gebrauch", nl: "Slaat elektrische energie op voor later gebruik" },
          { en: "Amplifies electrical signals", es: "Amplifica señales eléctricas", de: "Verstärkt elektrische Signale", nl: "Versterkt elektrische signalen" },
          { en: "Converts DC to AC", es: "Convierte DC a AC", de: "Wandelt Gleichstrom in Wechselstrom um", nl: "Zet gelijkstroom om naar wisselstroom" }
        ],
        correct: 0,
        explanation: {
          en: "An electrical generator converts mechanical energy into electrical energy through electromagnetic induction. When a conductor moves through a magnetic field (or vice versa), it generates an EMF according to Faraday's law, producing electrical current.",
          es: "Un generador eléctrico convierte energía mecánica en energía eléctrica a través de inducción electromagnética. Cuando un conductor se mueve a través de un campo magnético (o viceversa), genera una EMF según la ley de Faraday, produciendo corriente eléctrica.",
          de: "Ein elektrischer Generator wandelt mechanische Energie in elektrische Energie durch elektromagnetische Induktion um. Wenn sich ein Leiter durch ein Magnetfeld bewegt (oder umgekehrt), erzeugt er eine EMK nach Faradays Gesetz und produziert elektrischen Strom.",
          nl: "Een elektrische generator zet mechanische energie om in elektrische energie door elektromagnetische inductie. Wanneer een geleider door een magnetisch veld beweegt (of vice versa), genereert het een EMF volgens de wet van Faraday, wat elektrische stroom produceert."
        }
      },
      {
        question: {
          en: "What is a semiconductor and what makes it special?",
          es: "¿Qué es un semiconductor y qué lo hace especial?",
          de: "Was ist ein Halbleiter und was macht ihn besonders?",
          nl: "Wat is een halfgeleider en wat maakt het speciaal?"
        },
        options: [
          { en: "Material with conductivity between conductor and insulator, controllable by doping", es: "Material con conductividad entre conductor y aislante, controlable por dopaje", de: "Material mit Leitfähigkeit zwischen Leiter und Isolator, steuerbar durch Dotierung", nl: "Materiaal met geleidbaarheid tussen geleider en isolator, controleerbaar door doping" },
          { en: "Material that only conducts in one direction", es: "Material que solo conduce en una dirección", de: "Material, das nur in eine Richtung leitet", nl: "Materiaal dat alleen in één richting geleidt" },
          { en: "Perfect conductor at all temperatures", es: "Conductor perfecto a todas las temperaturas", de: "Perfekter Leiter bei allen Temperaturen", nl: "Perfecte geleider bij alle temperaturen" },
          { en: "Material that blocks all electrical current", es: "Material que bloquea toda corriente eléctrica", de: "Material, das allen elektrischen Strom blockiert", nl: "Materiaal dat alle elektrische stroom blokkeert" }
        ],
        correct: 0,
        explanation: {
          en: "A semiconductor has electrical conductivity between that of conductors and insulators. Its conductivity can be precisely controlled by adding impurities (doping), making it the foundation of modern electronics including diodes, transistors, and integrated circuits.",
          es: "Un semiconductor tiene conductividad eléctrica entre la de conductores y aislantes. Su conductividad puede ser controlada precisamente agregando impurezas (dopaje), haciéndolo la base de la electrónica moderna incluyendo diodos, transistores y circuitos integrados.",
          de: "Ein Halbleiter hat eine elektrische Leitfähigkeit zwischen der von Leitern und Isolatoren. Seine Leitfähigkeit kann durch Zugabe von Verunreinigungen (Dotierung) präzise gesteuert werden, wodurch er die Grundlage moderner Elektronik einschließlich Dioden, Transistoren und integrierten Schaltungen bildet.",
          nl: "Een halfgeleider heeft elektrische geleidbaarheid tussen die van geleiders en isolatoren. Zijn geleidbaarheid kan precies worden gecontroleerd door onzuiverheden toe te voegen (doping), waardoor het de basis vormt van moderne elektronica inclusief diodes, transistors en geïntegreerde circuits."
        }
      },
      {
        question: {
          en: "What is electrical frequency and what is the standard frequency in most countries?",
          es: "¿Qué es la frecuencia eléctrica y cuál es la frecuencia estándar en la mayoría de países?",
          de: "Was ist elektrische Frequenz und was ist die Standardfrequenz in den meisten Ländern?",
          nl: "Wat is elektrische frequentie en wat is de standaardfrequentie in de meeste landen?"
        },
        options: [
          { en: "Number of AC cycles per second; 50Hz or 60Hz", es: "Número de ciclos AC por segundo; 50Hz o 60Hz", de: "Anzahl der Wechselstromzyklen pro Sekunde; 50Hz oder 60Hz", nl: "Aantal wisselstroomcycli per seconde; 50Hz of 60Hz" },
          { en: "Voltage level in power systems; 110V or 220V", es: "Nivel de voltaje en sistemas de potencia; 110V o 220V", de: "Spannungspegel in Energiesystemen; 110V oder 220V", nl: "Spanningsniveau in energiesystemen; 110V of 220V" },
          { en: "Current amplitude in electrical circuits", es: "Amplitud de corriente en circuitos eléctricos", de: "Stromamplitude in elektrischen Schaltkreisen", nl: "Stroomamplitude in elektrische circuits" },
          { en: "Power consumption rate", es: "Tasa de consumo de potencia", de: "Leistungsverbrauchsrate", nl: "Stroomverbruikspercentage" }
        ],
        correct: 0,
        explanation: {
          en: "Electrical frequency is the number of complete AC cycles per second, measured in Hertz (Hz). Most countries use either 50Hz (Europe, Asia, Africa) or 60Hz (North America, parts of South America). This frequency affects motor speeds and transformer design.",
          es: "La frecuencia eléctrica es el número de ciclos AC completos por segundo, medida en Hertz (Hz). La mayoría de países usan 50Hz (Europa, Asia, África) o 60Hz (Norte América, partes de Sud América). Esta frecuencia afecta velocidades de motores y diseño de transformadores.",
          de: "Elektrische Frequenz ist die Anzahl vollständiger Wechselstromzyklen pro Sekunde, gemessen in Hertz (Hz). Die meisten Länder verwenden entweder 50Hz (Europa, Asien, Afrika) oder 60Hz (Nordamerika, Teile Südamerikas). Diese Frequenz beeinflusst Motorgeschwindigkeiten und Transformatorendesign.",
          nl: "Elektrische frequentie is het aantal complete wisselstroomcycli per seconde, gemeten in Hertz (Hz). De meeste landen gebruiken ofwel 50Hz (Europa, Azië, Afrika) of 60Hz (Noord-Amerika, delen van Zuid-Amerika). Deze frequentie beïnvloedt motorsnelheden en transformatorontwerp."
        }
      },
      {
        question: {
          en: "What is a circuit breaker and how does it differ from a fuse?",
          es: "¿Qué es un interruptor de circuito y cómo difiere de un fusible?",
          de: "Was ist ein Schutzschalter und wie unterscheidet er sich von einer Sicherung?",
          nl: "Wat is een circuitonderbreker en hoe verschilt het van een zekering?"
        },
        options: [
          { en: "Reusable protection device that can be reset, unlike single-use fuses", es: "Dispositivo de protección reutilizable que puede ser reiniciado, a diferencia de fusibles de un solo uso", de: "Wiederverwendbare Schutzvorrichtung, die zurückgesetzt werden kann, im Gegensatz zu Einwegsicherungen", nl: "Herbruikbaar beschermingsapparaat dat kan worden gereset, in tegenstelling tot eenmalig gebruik zekeringen" },
          { en: "Works only with DC current", es: "Funciona solo con corriente DC", de: "Funktioniert nur mit Gleichstrom", nl: "Werkt alleen met gelijkstroom" },
          { en: "More expensive but less reliable than fuses", es: "Más caro pero menos confiable que fusibles", de: "Teurer aber weniger zuverlässig als Sicherungen", nl: "Duurder maar minder betrouwbaar dan zekeringen" },
          { en: "Only used in low-voltage applications", es: "Solo usado en aplicaciones de bajo voltaje", de: "Nur in Niederspannungsanwendungen verwendet", nl: "Alleen gebruikt in laagspanningstoepassingen" }
        ],
        correct: 0,
        explanation: {
          en: "A circuit breaker is a reusable protective device that automatically opens when overcurrent occurs and can be manually reset. Unlike fuses which must be replaced after operation, circuit breakers can be reset multiple times, making them more convenient and cost-effective for most applications.",
          es: "Un interruptor de circuito es un dispositivo de protección reutilizable que se abre automáticamente cuando ocurre sobrecorriente y puede ser reiniciado manualmente. A diferencia de fusibles que deben ser reemplazados después de operar, los interruptores pueden ser reiniciados múltiples veces, haciéndolos más convenientes y costo-efectivos para la mayoría de aplicaciones.",
          de: "Ein Schutzschalter ist eine wiederverwendbare Schutzvorrichtung, die sich automatisch öffnet, wenn Überstrom auftritt, und manuell zurückgesetzt werden kann. Im Gegensatz zu Sicherungen, die nach dem Betrieb ersetzt werden müssen, können Schutzschalter mehrfach zurückgesetzt werden, wodurch sie für die meisten Anwendungen praktischer und kostengünstiger sind.",
          nl: "Een circuitonderbreker is een herbruikbaar beschermingsapparaat dat automatisch opent wanneer overstroom optreedt en handmatig kan worden gereset. In tegenstelling tot zekeringen die na werking moeten worden vervangen, kunnen circuitonderbrekers meerdere keren worden gereset, waardoor ze handiger en kosteneffectiever zijn voor de meeste toepassingen."
        }
      },
      {
        question: {
          en: "What is electrical insulation and why is it important?",
          es: "¿Qué es el aislamiento eléctrico y por qué es importante?",
          de: "Was ist elektrische Isolierung und warum ist sie wichtig?",
          nl: "Wat is elektrische isolatie en waarom is het belangrijk?"
        },
        options: [
          { en: "Material that prevents current flow, ensuring safety and preventing short circuits", es: "Material que previene el flujo de corriente, asegurando seguridad y previniendo cortocircuitos", de: "Material, das Stromfluss verhindert, Sicherheit gewährleistet und Kurzschlüsse verhindert", nl: "Materiaal dat stroomflow voorkomt, veiligheid waarborgt en kortsluiting voorkomt" },
          { en: "Material that increases conductivity", es: "Material que aumenta la conductividad", de: "Material, das die Leitfähigkeit erhöht", nl: "Materiaal dat geleidbaarheid verhoogt" },
          { en: "Only used for high-voltage applications", es: "Solo usado para aplicaciones de alto voltaje", de: "Nur für Hochspannungsanwendungen verwendet", nl: "Alleen gebruikt voor hoogspanningstoepassingen" },
          { en: "Material that stores electrical energy", es: "Material que almacena energía eléctrica", de: "Material, das elektrische Energie speichert", nl: "Materiaal dat elektrische energie opslaat" }
        ],
        correct: 0,
        explanation: {
          en: "Electrical insulation consists of materials with high resistance that prevent unwanted current flow. It's crucial for safety (preventing electric shock), preventing short circuits, and isolating different voltage levels. Common insulators include rubber, plastic, glass, and ceramics.",
          es: "El aislamiento eléctrico consiste en materiales con alta resistencia que previenen flujo de corriente no deseado. Es crucial para seguridad (previniendo descarga eléctrica), previniendo cortocircuitos, y aislando diferentes niveles de voltaje. Aislantes comunes incluyen caucho, plástico, vidrio y cerámicas.",
          de: "Elektrische Isolierung besteht aus Materialien mit hohem Widerstand, die unerwünschten Stromfluss verhindern. Sie ist entscheidend für Sicherheit (Stromschlagprävention), Kurzschlussprävention und Isolierung verschiedener Spannungspegel. Häufige Isolatoren sind Gummi, Kunststoff, Glas und Keramik.",
          nl: "Elektrische isolatie bestaat uit materialen met hoge weerstand die ongewenste stroomflow voorkomen. Het is cruciaal voor veiligheid (elektrische schok voorkoming), kortsluitingpreventie, en isolatie van verschillende spanningsniveaus. Gebruikelijke isolatoren zijn rubber, kunststof, glas en keramiek."
        }
      },
      {
        question: {
          en: "What is a relay and what is its primary function?",
          es: "¿Qué es un relé y cuál es su función principal?",
          de: "Was ist ein Relais und was ist seine Hauptfunktion?",
          nl: "Wat is een relais en wat is zijn primaire functie?"
        },
        options: [
          { en: "Electrically operated switch controlled by low power to switch high power circuits", es: "Interruptor operado eléctricamente controlado por baja potencia para conmutar circuitos de alta potencia", de: "Elektrisch betätigter Schalter, gesteuert durch niedrige Leistung zum Schalten von Hochleistungskreisen", nl: "Elektrisch bediende schakelaar bestuurd door laag vermogen om hoog vermogen circuits te schakelen" },
          { en: "Device that amplifies electrical signals", es: "Dispositivo que amplifica señales eléctricas", de: "Gerät, das elektrische Signale verstärkt", nl: "Apparaat dat elektrische signalen versterkt" },
          { en: "Component that stores electrical energy", es: "Componente que almacena energía eléctrica", de: "Komponente, die elektrische Energie speichert", nl: "Component dat elektrische energie opslaat" },
          { en: "Converts AC to DC current", es: "Convierte corriente AC a DC", de: "Wandelt Wechselstrom in Gleichstrom um", nl: "Zet wisselstroom om naar gelijkstroom" }
        ],
        correct: 0,
        explanation: {
          en: "A relay is an electrically operated switch that uses a low-power signal to control a high-power circuit. It provides electrical isolation, amplification of control signals, and allows remote switching. Relays are essential in automation, protection systems, and control circuits.",
          es: "Un relé es un interruptor operado eléctricamente que usa una señal de baja potencia para controlar un circuito de alta potencia. Proporciona aislamiento eléctrico, amplificación de señales de control, y permite conmutación remota. Los relés son esenciales en automatización, sistemas de protección y circuitos de control.",
          de: "Ein Relais ist ein elektrisch betätigter Schalter, der ein schwaches Signal verwendet, um einen Hochleistungskreis zu steuern. Es bietet elektrische Isolierung, Verstärkung von Steuersignalen und ermöglicht Fernschaltung. Relais sind wesentlich in Automatisierung, Schutzsystemen und Steuerschaltungen.",
          nl: "Een relais is een elektrisch bediende schakelaar die een laag-vermogen signaal gebruikt om een hoog-vermogen circuit te besturen. Het biedt elektrische isolatie, versterking van stuursignalen, en maakt schakelaar op afstand mogelijk. Relais zijn essentieel in automatisering, beschermingssystemen en stuurcircuits."
        }
      },
      {
        question: {
          en: "What is the skin effect in electrical conductors?",
          es: "¿Qué es el efecto piel en conductores eléctricos?",
          de: "Was ist der Skin-Effekt in elektrischen Leitern?",
          nl: "Wat is het huideffect in elektrische geleiders?"
        },
        options: [
          { en: "High-frequency AC current concentrates near conductor surface", es: "Corriente AC de alta frecuencia se concentra cerca de la superficie del conductor", de: "Hochfrequenter Wechselstrom konzentriert sich nahe der Leiteroberfläche", nl: "Hoogfrequente wisselstroom concentreert zich nabij geleideroppervlak" },
          { en: "Insulation degradation over time", es: "Degradación del aislamiento con el tiempo", de: "Isolierungsabbau über die Zeit", nl: "Isolatieverslechtering over tijd" },
          { en: "Corrosion of conductor surface", es: "Corrosión de la superficie del conductor", de: "Korrosion der Leiteroberfläche", nl: "Corrosie van geleideroppervlak" },
          { en: "Heating effect in resistors", es: "Efecto de calentamiento en resistores", de: "Heizeffekt in Widerständen", nl: "Verwarmingseffect in weerstanden" }
        ],
        correct: 0,
        explanation: {
          en: "The skin effect is the tendency for high-frequency alternating current to distribute unevenly in a conductor, concentrating near the surface. This increases effective resistance and reduces the effective cross-sectional area, leading to higher losses at high frequencies.",
          es: "El efecto piel es la tendencia de la corriente alterna de alta frecuencia a distribuirse desigualmente en un conductor, concentrándose cerca de la superficie. Esto aumenta la resistencia efectiva y reduce el área transversal efectiva, llevando a mayores pérdidas en altas frecuencias.",
          de: "Der Skin-Effekt ist die Tendenz von hochfrequentem Wechselstrom, sich ungleichmäßig in einem Leiter zu verteilen und sich nahe der Oberfläche zu konzentrieren. Dies erhöht den effektiven Widerstand und reduziert die effektive Querschnittsfläche, was zu höheren Verlusten bei hohen Frequenzen führt.",
          nl: "Het huideffect is de neiging van hoogfrequente wisselstroom om ongelijk te verdelen in een geleider, concentrerend nabij het oppervlak. Dit verhoogt effectieve weerstand en vermindert het effectieve dwarsdoorsnede-oppervlak, wat leidt tot hogere verliezen bij hoge frequenties."
        }
      },
      {
        question: {
          en: "What is electrical reactance?",
          es: "¿Qué es la reactancia eléctrica?",
          de: "Was ist elektrische Reaktanz?",
          nl: "Wat is elektrische reactantie?"
        },
        options: [
          { en: "Opposition to AC current due to inductance or capacitance", es: "Oposición a corriente AC debido a inductancia o capacitancia", de: "Widerstand gegen Wechselstrom aufgrund von Induktivität oder Kapazität", nl: "Weerstand tegen wisselstroom vanwege inductantie of capacitantie" },
          { en: "Only resistance to DC current", es: "Solo resistencia a corriente DC", de: "Nur Widerstand gegen Gleichstrom", nl: "Alleen weerstand tegen gelijkstroom" },
          { en: "Power consumed by circuit", es: "Potencia consumida por el circuito", de: "Vom Schaltkreis verbrauchte Leistung", nl: "Vermogen verbruikt door circuit" },
          { en: "Voltage divided by impedance", es: "Voltaje dividido por impedancia", de: "Spannung geteilt durch Impedanz", nl: "Spanning gedeeld door impedantie" }
        ],
        correct: 0,
        explanation: {
          en: "Electrical reactance is the opposition to alternating current due to inductance (inductive reactance XL = 2πfL) or capacitance (capacitive reactance XC = 1/(2πfC)). Unlike resistance, reactance doesn't dissipate power but stores and releases energy.",
          es: "La reactancia eléctrica es la oposición a corriente alterna debido a inductancia (reactancia inductiva XL = 2πfL) o capacitancia (reactancia capacitiva XC = 1/(2πfC)). A diferencia de la resistencia, la reactancia no disipa potencia sino almacena y libera energía.",
          de: "Elektrische Reaktanz ist der Widerstand gegen Wechselstrom aufgrund von Induktivität (induktive Reaktanz XL = 2πfL) oder Kapazität (kapazitive Reaktanz XC = 1/(2πfC)). Im Gegensatz zum Widerstand dissipiert Reaktanz keine Leistung, sondern speichert und gibt Energie frei.",
          nl: "Elektrische reactantie is de weerstand tegen wisselstroom vanwege inductantie (inductieve reactantie XL = 2πfL) of capacitantie (capacitieve reactantie XC = 1/(2πfC)). In tegenstelling tot weerstand dissipeert reactantie geen vermogen maar slaat energie op en geeft het vrij."
        }
      },
      {
        question: {
          en: "What is a photodiode and how does it work?",
          es: "¿Qué es un fotodiodo y cómo funciona?",
          de: "Was ist eine Fotodiode und wie funktioniert sie?",
          nl: "Wat is een fotodiode en hoe werkt het?"
        },
        options: [
          { en: "Semiconductor device that converts light into electrical current", es: "Dispositivo semiconductor que convierte luz en corriente eléctrica", de: "Halbleiterbauteil, das Licht in elektrischen Strom umwandelt", nl: "Halfgeleiderapparaat dat licht omzet in elektrische stroom" },
          { en: "Device that emits light when current flows", es: "Dispositivo que emite luz cuando fluye corriente", de: "Gerät, das Licht emittiert, wenn Strom fließt", nl: "Apparaat dat licht uitstraalt wanneer stroom vloeit" },
          { en: "Amplifier for optical signals", es: "Amplificador para señales ópticas", de: "Verstärker für optische Signale", nl: "Versterker voor optische signalen" },
          { en: "Switch operated by magnetic field", es: "Interruptor operado por campo magnético", de: "Schalter betätigt durch Magnetfeld", nl: "Schakelaar bediend door magnetisch veld" }
        ],
        correct: 0,
        explanation: {
          en: "A photodiode is a semiconductor device that generates electrical current when exposed to light through the photovoltaic effect. It operates in reverse bias and is used in optical communication, light sensors, solar cells, and photodetectors.",
          es: "Un fotodiodo es un dispositivo semiconductor que genera corriente eléctrica cuando se expone a luz a través del efecto fotovoltaico. Opera en polarización inversa y se usa en comunicación óptica, sensores de luz, celdas solares y fotodetectores.",
          de: "Eine Fotodiode ist ein Halbleiterbauteil, das elektrischen Strom erzeugt, wenn es durch den photovoltaischen Effekt Licht ausgesetzt wird. Sie arbeitet in Sperrrichtung und wird in optischer Kommunikation, Lichtsensoren, Solarzellen und Photodetektoren verwendet.",
          nl: "Een fotodiode is een halfgeleiderapparaat dat elektrische stroom genereert wanneer het wordt blootgesteld aan licht door het fotovoltaïsche effect. Het werkt in omgekeerde spanning en wordt gebruikt in optische communicatie, lichtsensoren, zonnecellen en fotodetectoren."
        }
      },
      {
        question: {
          en: "What is an inverter in electrical systems?",
          es: "¿Qué es un inversor en sistemas eléctricos?",
          de: "Was ist ein Wechselrichter in elektrischen Systemen?",
          nl: "Wat is een omvormer in elektrische systemen?"
        },
        options: [
          { en: "Converts DC power to AC power", es: "Convierte potencia DC a potencia AC", de: "Wandelt Gleichstromleistung in Wechselstromleistung um", nl: "Zet gelijkstroomvermogen om naar wisselstroomvermogen" },
          { en: "Converts AC power to DC power", es: "Convierte potencia AC a potencia DC", de: "Wandelt Wechselstromleistung in Gleichstromleistung um", nl: "Zet wisselstroomvermogen om naar gelijkstroomvermogen" },
          { en: "Amplifies electrical signals", es: "Amplifica señales eléctricas", de: "Verstärkt elektrische Signale", nl: "Versterkt elektrische signalen" },
          { en: "Stores electrical energy", es: "Almacena energía eléctrica", de: "Speichert elektrische Energie", nl: "Slaat elektrische energie op" }
        ],
        correct: 0,
        explanation: {
          en: "An inverter converts direct current (DC) power into alternating current (AC) power. It's essential in renewable energy systems (solar panels, batteries), uninterruptible power supplies (UPS), and variable frequency drives for motors.",
          es: "Un inversor convierte potencia de corriente directa (DC) en potencia de corriente alterna (AC). Es esencial en sistemas de energía renovable (paneles solares, baterías), fuentes de poder ininterrumpible (UPS), y variadores de frecuencia para motores.",
          de: "Ein Wechselrichter wandelt Gleichstromleistung in Wechselstromleistung um. Er ist wesentlich in erneuerbaren Energiesystemen (Solarpanels, Batterien), unterbrechungsfreien Stromversorgungen (USV) und Frequenzumrichtern für Motoren.",
          nl: "Een omvormer zet gelijkstroomvermogen om naar wisselstroomvermogen. Het is essentieel in hernieuwbare energiesystemen (zonnepanelen, batterijen), ononderbreekbare stroomvoorzieningen (UPS), en frequentie-omvormers voor motoren."
        }
      },
      {
        question: {
          en: "What is eddy current and where does it occur?",
          es: "¿Qué es la corriente de Foucault y dónde ocurre?",
          de: "Was ist Wirbelstrom und wo tritt er auf?",
          nl: "Wat is wervelstroom en waar komt het voor?"
        },
        options: [
          { en: "Circular currents in conductors due to changing magnetic fields", es: "Corrientes circulares en conductores debido a campos magnéticos cambiantes", de: "Kreisströme in Leitern aufgrund sich ändernder Magnetfelder", nl: "Cirkelvormige stromen in geleiders door veranderende magnetische velden" },
          { en: "Direct current in straight conductors", es: "Corriente directa en conductores rectos", de: "Gleichstrom in geraden Leitern", nl: "Gelijkstroom in rechte geleiders" },
          { en: "High-frequency oscillations in capacitors", es: "Oscilaciones de alta frecuencia en capacitores", de: "Hochfrequente Schwingungen in Kondensatoren", nl: "Hoogfrequente oscillaties in condensatoren" },
          { en: "Static electricity buildup", es: "Acumulación de electricidad estática", de: "Aufbau statischer Elektrizität", nl: "Statische elektriciteitsopbouw" }
        ],
        correct: 0,
        explanation: {
          en: "Eddy currents are loops of electrical current induced in conductors by changing magnetic fields according to Faraday's law. They create losses in transformers and motors but are useful in induction heating, magnetic braking, and non-destructive testing.",
          es: "Las corrientes de Foucault son bucles de corriente eléctrica inducidos en conductores por campos magnéticos cambiantes según la ley de Faraday. Crean pérdidas en transformadores y motores pero son útiles en calentamiento por inducción, frenado magnético y pruebas no destructivas.",
          de: "Wirbelströme sind Schleifen elektrischen Stroms, die in Leitern durch sich ändernde Magnetfelder nach Faradays Gesetz induziert werden. Sie verursachen Verluste in Transformatoren und Motoren, sind aber nützlich in Induktionsheizung, magnetischer Bremsung und zerstörungsfreier Prüfung.",
          nl: "Wervelstromen zijn lussen van elektrische stroom geïnduceerd in geleiders door veranderende magnetische velden volgens de wet van Faraday. Ze veroorzaken verliezen in transformatoren en motoren maar zijn nuttig in inductieverwarming, magnetisch remmen en niet-destructief testen."
        }
      },
      {
        question: {
          en: "What is the purpose of a power factor correction in electrical systems?",
          es: "¿Cuál es el propósito de la corrección del factor de potencia en sistemas eléctricos?",
          de: "Was ist der Zweck der Leistungsfaktorkorrektur in elektrischen Systemen?",
          nl: "Wat is het doel van arbeidsfactorcorrectie in elektrische systemen?"
        },
        options: [
          { en: "Improve efficiency by reducing reactive power and phase lag", es: "Mejorar eficiencia reduciendo potencia reactiva y desfase", de: "Effizienz durch Reduzierung von Blindleistung und Phasenverschiebung verbessern", nl: "Efficiëntie verbeteren door reactief vermogen en faseverschuiving te verminderen" },
          { en: "Increase voltage levels", es: "Aumentar niveles de voltaje", de: "Spannungspegel erhöhen", nl: "Spanningsniveaus verhogen" },
          { en: "Convert AC to DC", es: "Convertir AC a DC", de: "Wechselstrom in Gleichstrom umwandeln", nl: "Wisselstroom naar gelijkstroom omzetten" },
          { en: "Reduce frequency fluctuations", es: "Reducir fluctuaciones de frecuencia", de: "Frequenzschwankungen reduzieren", nl: "Frequentiefluctuaties verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "Power factor correction improves electrical system efficiency by reducing reactive power consumption and bringing voltage and current more in phase. This reduces power losses, improves voltage regulation, and can lower electricity costs for industrial users.",
          es: "La corrección del factor de potencia mejora la eficiencia del sistema eléctrico reduciendo consumo de potencia reactiva y llevando voltaje y corriente más en fase. Esto reduce pérdidas de potencia, mejora regulación de voltaje, y puede reducir costos de electricidad para usuarios industriales.",
          de: "Leistungsfaktorkorrektur verbessert die Effizienz elektrischer Systeme durch Reduzierung des Blindleistungsverbrauchs und Annäherung von Spannung und Strom in Phase. Dies reduziert Leistungsverluste, verbessert Spannungsregulierung und kann Stromkosten für Industrienutzer senken.",
          nl: "Arbeidsfactorcorrectie verbetert de efficiëntie van elektrische systemen door reactief vermogenverbruik te verminderen en spanning en stroom meer in fase te brengen. Dit vermindert vermogenverliezen, verbetert spanningsregulering, en kan elektriciteitskosten voor industriële gebruikers verlagen."
        }
      },
      {
        question: {
          en: "What is a thyristor and what are its main applications?",
          es: "¿Qué es un tiristor y cuáles son sus principales aplicaciones?",
          de: "Was ist ein Thyristor und was sind seine Hauptanwendungen?",
          nl: "Wat is een thyristor en wat zijn zijn hoofdtoepassingen?"
        },
        options: [
          { en: "Four-layer semiconductor switch for power control and AC/DC conversion", es: "Interruptor semiconductor de cuatro capas para control de potencia y conversión AC/DC", de: "Vierschichtiger Halbleiterschalter für Leistungssteuerung und AC/DC-Umwandlung", nl: "Vierlaagse halfgeleider schakelaar voor vermogensregeling en AC/DC omzetting" },
          { en: "Linear amplifier for small signals", es: "Amplificador lineal para señales pequeñas", de: "Linearverstärker für kleine Signale", nl: "Lineaire versterker voor kleine signalen" },
          { en: "Energy storage device like capacitor", es: "Dispositivo de almacenamiento de energía como capacitor", de: "Energiespeichergerät wie Kondensator", nl: "Energieopslag apparaat zoals condensator" },
          { en: "Passive filter component", es: "Componente pasivo de filtro", de: "Passive Filterkomponente", nl: "Passieve filtercomponent" }
        ],
        correct: 0,
        explanation: {
          en: "A thyristor (SCR - Silicon Controlled Rectifier) is a four-layer semiconductor device that acts as a controlled switch for high-power applications. It's used in motor drives, power supplies, lighting control, and HVDC transmission systems for efficient power control.",
          es: "Un tiristor (SCR - Rectificador Controlado de Silicio) es un dispositivo semiconductor de cuatro capas que actúa como interruptor controlado para aplicaciones de alta potencia. Se usa en variadores de motores, fuentes de poder, control de iluminación, y sistemas de transmisión HVDC para control eficiente de potencia.",
          de: "Ein Thyristor (SCR - Silizium-gesteuerter Gleichrichter) ist ein vierschichtiges Halbleiterbauteil, das als gesteuerter Schalter für Hochleistungsanwendungen fungiert. Er wird in Motorantrieben, Netzteilen, Beleuchtungssteuerung und HGÜ-Übertragungssystemen für effiziente Leistungssteuerung verwendet.",
          nl: "Een thyristor (SCR - Silicium Gecontroleerde Gelijkrichter) is een vierlaagse halfgeleiderinrichting die fungeert als gecontroleerde schakelaar voor hoog-vermogen toepassingen. Het wordt gebruikt in motoraandrijvingen, voedingen, verlichtingsregeling, en HVDC transmissiesystemen voor efficiënte vermogensregeling."
        }
      },
      {
        question: {
          en: "What is the difference between single-phase and three-phase electrical systems?",
          es: "¿Cuál es la diferencia entre sistemas eléctricos monofásicos y trifásicos?",
          de: "Was ist der Unterschied zwischen einphasigen und dreiphasigen elektrischen Systemen?",
          nl: "Wat is het verschil tussen eenfasige en driefasige elektrische systemen?"
        },
        options: [
          { en: "Single-phase has one voltage wave, three-phase has three waves 120° apart", es: "Monofásico tiene una onda de voltaje, trifásico tiene tres ondas separadas 120°", de: "Einphasig hat eine Spannungswelle, dreiphasig hat drei Wellen mit 120° Abstand", nl: "Eenfasig heeft één spanningsgolf, driefasig heeft drie golven 120° uit elkaar" },
          { en: "Single-phase is DC, three-phase is AC", es: "Monofásico es DC, trifásico es AC", de: "Einphasig ist Gleichstrom, dreiphasig ist Wechselstrom", nl: "Eenfasig is gelijkstroom, driefasig is wisselstroom" },
          { en: "Single-phase uses less power", es: "Monofásico usa menos potencia", de: "Einphasig verwendet weniger Leistung", nl: "Eenfasig gebruikt minder vermogen" },
          { en: "Three-phase is only for high voltage", es: "Trifásico es solo para alto voltaje", de: "Dreiphasig ist nur für Hochspannung", nl: "Driefasig is alleen voor hoogspanning" }
        ],
        correct: 0,
        explanation: {
          en: "Single-phase systems use one alternating voltage waveform, while three-phase systems use three sinusoidal voltages 120° apart. Three-phase systems provide more efficient power transmission, balanced loads, constant power flow, and are preferred for industrial applications and large motors.",
          es: "Los sistemas monofásicos usan una forma de onda de voltaje alternante, mientras que sistemas trifásicos usan tres voltajes sinusoidales separados 120°. Los sistemas trifásicos proporcionan transmisión de potencia más eficiente, cargas balanceadas, flujo de potencia constante, y son preferidos para aplicaciones industriales y motores grandes.",
          de: "Einphasige Systeme verwenden eine Wechselspannungswellenform, während dreiphasige Systeme drei sinusförmige Spannungen mit 120° Abstand verwenden. Dreiphasige Systeme bieten effizientere Leistungsübertragung, ausgewogene Lasten, konstanten Leistungsfluss und werden für industrielle Anwendungen und große Motoren bevorzugt.",
          nl: "Eenfasige systemen gebruiken één wisselspanningsgolfvorm, terwijl driefasige systemen drie sinusvormige spanningen 120° uit elkaar gebruiken. Driefasige systemen bieden efficiëntere vermogensoverdracht, gebalanceerde belastingen, constante vermogensstroom, en hebben de voorkeur voor industriële toepassingen en grote motoren."
        }
      },
      {
        question: {
          en: "What is electromagnetic compatibility (EMC) and why is it important?",
          es: "¿Qué es la compatibilidad electromagnética (EMC) y por qué es importante?",
          de: "Was ist elektromagnetische Verträglichkeit (EMV) und warum ist sie wichtig?",
          nl: "Wat is elektromagnetische compatibiliteit (EMC) en waarom is het belangrijk?"
        },
        options: [
          { en: "Ability of devices to operate without interfering with each other electromagnetically", es: "Capacidad de dispositivos de operar sin interferir electromagnéticamente entre sí", de: "Fähigkeit von Geräten, ohne gegenseitige elektromagnetische Störung zu arbeiten", nl: "Vermogen van apparaten om te werken zonder elkaar elektromagnetisch te storen" },
          { en: "Matching impedances in transmission lines", es: "Coincidencia de impedancias en líneas de transmisión", de: "Impedanzanpassung in Übertragungsleitungen", nl: "Impedantie-matching in transmissielijnen" },
          { en: "Synchronization of AC power systems", es: "Sincronización de sistemas de potencia AC", de: "Synchronisation von Wechselstromsystemen", nl: "Synchronisatie van wisselstroomsystemen" },
          { en: "Compatibility between AC and DC systems", es: "Compatibilidad entre sistemas AC y DC", de: "Kompatibilität zwischen AC- und DC-Systemen", nl: "Compatibiliteit tussen AC en DC systemen" }
        ],
        correct: 0,
        explanation: {
          en: "EMC ensures electrical devices can operate in their intended environment without causing or suffering from electromagnetic interference. It's crucial for device reliability, regulatory compliance, and preventing disruption of communication systems, medical equipment, and other sensitive electronics.",
          es: "EMC asegura que dispositivos eléctricos puedan operar en su ambiente previsto sin causar o sufrir interferencia electromagnética. Es crucial para confiabilidad de dispositivos, cumplimiento regulatorio, y prevenir disrupción de sistemas de comunicación, equipo médico, y otros electrónicos sensibles.",
          de: "EMV stellt sicher, dass elektrische Geräte in ihrer vorgesehenen Umgebung arbeiten können, ohne elektromagnetische Störungen zu verursachen oder zu erleiden. Es ist entscheidend für Gerätezuverlässigkeit, regulatorische Compliance und Verhinderung von Störungen bei Kommunikationssystemen, Medizingeräten und anderen empfindlichen Elektronikgeräten.",
          nl: "EMC zorgt ervoor dat elektrische apparaten kunnen werken in hun bedoelde omgeving zonder elektromagnetische interferentie te veroorzaken of te ondervinden. Het is cruciaal voor apparaatbetrouwbaarheid, regelgevingsnaleving, en het voorkomen van verstoring van communicatiesystemen, medische apparatuur en andere gevoelige elektronica."
        }
      },
      {
        question: {
          en: "What is a smart grid and how does it differ from traditional power grids?",
          es: "¿Qué es una red inteligente y cómo difiere de las redes eléctricas tradicionales?",
          de: "Was ist ein intelligentes Stromnetz und wie unterscheidet es sich von herkömmlichen Stromnetzen?",
          nl: "Wat is een smart grid en hoe verschilt het van traditionele stroomnetwerken?"
        },
        options: [
          { en: "Digitally controlled grid with two-way communication and automation", es: "Red controlada digitalmente con comunicación bidireccional y automatización", de: "Digital gesteuertes Netz mit bidirektionaler Kommunikation und Automatisierung", nl: "Digitaal gecontroleerd netwerk met tweerichtingscommunicatie en automatisering" },
          { en: "Grid that only uses renewable energy sources", es: "Red que solo usa fuentes de energía renovable", de: "Netz, das nur erneuerbare Energiequellen nutzt", nl: "Netwerk dat alleen hernieuwbare energiebronnen gebruikt" },
          { en: "High-voltage transmission system only", es: "Solo sistema de transmisión de alto voltaje", de: "Nur Hochspannungsübertragungssystem", nl: "Alleen hoogspanningstransmissiesysteem" },
          { en: "Grid with more power plants", es: "Red con más centrales eléctricas", de: "Netz mit mehr Kraftwerken", nl: "Netwerk met meer energiecentrales" }
        ],
        correct: 0,
        explanation: {
          en: "A smart grid uses digital technology, sensors, and two-way communication to monitor, control, and optimize electricity flow. It enables demand response, integrates renewable energy, improves reliability, reduces losses, and allows distributed generation and storage.",
          es: "Una red inteligente usa tecnología digital, sensores y comunicación bidireccional para monitorear, controlar y optimizar el flujo de electricidad. Permite respuesta de demanda, integra energía renovable, mejora confiabilidad, reduce pérdidas, y permite generación y almacenamiento distribuidos.",
          de: "Ein intelligentes Stromnetz nutzt digitale Technologie, Sensoren und bidirektionale Kommunikation zur Überwachung, Steuerung und Optimierung des Stromflusses. Es ermöglicht Demand Response, integriert erneuerbare Energie, verbessert Zuverlässigkeit, reduziert Verluste und erlaubt verteilte Erzeugung und Speicherung.",
          nl: "Een smart grid gebruikt digitale technologie, sensoren en tweerichtingscommunicatie om elektriciteitsflow te monitoren, controleren en optimaliseren. Het maakt vraagrespons mogelijk, integreert hernieuwbare energie, verbetert betrouwbaarheid, vermindert verliezen, en staat gedistribueerde opwekking en opslag toe."
        }
      },
      {
        question: {
          en: "What is the phenomenon of skin effect in AC conductors and why does it occur?",
          es: "¿Qué es el fenómeno del efecto pelicular en conductores AC y por qué ocurre?",
          de: "Was ist das Phänomen des Skin-Effekts in Wechselstromleitern und warum tritt er auf?",
          nl: "Wat is het fenomeen van het huid-effect in wisselstroomgeleiders en waarom treedt het op?"
        },
        options: [
          { en: "Current concentrates at conductor surface due to magnetic field effects", es: "La corriente se concentra en la superficie del conductor debido a efectos del campo magnético", de: "Strom konzentriert sich an Leiteroberfläche aufgrund von Magnetfeldeffekten", nl: "Stroom concentreert zich op geleideroppervlak vanwege magnetische veldeffecten" },
          { en: "Current flows evenly throughout conductor cross-section", es: "La corriente fluye uniformemente a través de la sección transversal del conductor", de: "Strom fließt gleichmäßig durch den Leiterquerschnitt", nl: "Stroom vloeit gelijkmatig door geleiderdoorsnede" },
          { en: "Conductor resistance decreases with frequency", es: "La resistencia del conductor disminuye con la frecuencia", de: "Leiterwiderstand nimmt mit Frequenz ab", nl: "Geleiderweerstand neemt af met frequentie" },
          { en: "Only occurs in DC circuits", es: "Solo ocurre en circuitos DC", de: "Tritt nur in Gleichstromkreisen auf", nl: "Komt alleen voor in gelijkstroomcircuits" }
        ],
        correct: 0,
        explanation: {
          en: "Skin effect causes AC current to concentrate near the conductor surface due to self-induced magnetic fields that oppose current flow in the center. Higher frequencies increase this effect, effectively reducing the conductor's cross-sectional area and increasing resistance.",
          es: "El efecto pelicular causa que la corriente AC se concentre cerca de la superficie del conductor debido a campos magnéticos autoinducidos que se oponen al flujo de corriente en el centro. Frecuencias más altas aumentan este efecto, reduciendo efectivamente el área transversal del conductor y aumentando la resistencia.",
          de: "Der Skin-Effekt führt dazu, dass sich Wechselstrom nahe der Leiteroberfläche konzentriert aufgrund selbstinduzierter Magnetfelder, die dem Stromfluss im Zentrum entgegenwirken. Höhere Frequenzen verstärken diesen Effekt, reduzieren effektiv die Leiterquerschnittsfläche und erhöhen den Widerstand.",
          nl: "Het huid-effect zorgt ervoor dat wisselstroom zich concentreert nabij het geleideroppervlak vanwege zelf-geïnduceerde magnetische velden die stroomflow in het centrum tegenwerken. Hogere frequenties versterken dit effect, verminderen effectief het geleiderdoorsnede-oppervlak en verhogen de weerstand."
        }
      },
      {
        question: {
          en: "What is the purpose of a soft starter in motor control systems?",
          es: "¿Cuál es el propósito de un arrancador suave en sistemas de control de motores?",
          de: "Was ist der Zweck eines Sanftanlaufers in Motorsteuerungssystemen?",
          nl: "Wat is het doel van een zachte starter in motorbesturingssystemen?"
        },
        options: [
          { en: "Gradually increase voltage to reduce inrush current and mechanical stress", es: "Aumentar gradualmente el voltaje para reducir corriente de arranque y estrés mecánico", de: "Spannung schrittweise erhöhen um Einschaltstrom und mechanische Belastung zu reduzieren", nl: "Geleidelijk spanning verhogen om inschakelstroom en mechanische stress te verminderen" },
          { en: "Convert DC power to AC power for motors", es: "Convertir potencia DC a potencia AC para motores", de: "Gleichstrom in Wechselstrom für Motoren umwandeln", nl: "Gelijkstroom omzetten naar wisselstroom voor motoren" },
          { en: "Measure motor speed and torque", es: "Medir velocidad y torque del motor", de: "Motorgeschwindigkeit und Drehmoment messen", nl: "Motorsnelheid en koppel meten" },
          { en: "Provide emergency stopping only", es: "Proporcionar solo parada de emergencia", de: "Nur Notabschaltung bereitstellen", nl: "Alleen noodstop bieden" }
        ],
        correct: 0,
        explanation: {
          en: "A soft starter uses thyristors or similar devices to gradually ramp up voltage to motors during startup, reducing the high inrush current (typically 6-8 times normal) and mechanical shock. This extends motor life, reduces power system stress, and provides smoother operation.",
          es: "Un arrancador suave usa tiristores o dispositivos similares para aumentar gradualmente el voltaje a motores durante el arranque, reduciendo la alta corriente de arranque (típicamente 6-8 veces lo normal) y el choque mecánico. Esto extiende la vida del motor, reduce el estrés del sistema eléctrico, y proporciona operación más suave.",
          de: "Ein Sanftanlaufer verwendet Thyristoren oder ähnliche Geräte, um die Spannung zu Motoren während des Starts schrittweise zu erhöhen, wodurch der hohe Einschhaltstrom (typisch 6-8 mal normal) und mechanische Stöße reduziert werden. Dies verlängert die Motorlebensdauer, reduziert Stromversorgungsstress und sorgt für sanfteren Betrieb.",
          nl: "Een zachte starter gebruikt thyristors of soortgelijke apparaten om geleidelijk spanning naar motoren op te voeren tijdens opstarten, waardoor de hoge inschakelstroom (typisch 6-8 keer normaal) en mechanische schok wordt verminderd. Dit verlengt motorlevensduur, vermindert stroomsysteemstress, en zorgt voor vloeiendere werking."
        }
      },
      {
        question: {
          en: "What is electrical impedance and how does it differ from resistance?",
          es: "¿Qué es la impedancia eléctrica y cómo difiere de la resistencia?",
          de: "Was ist elektrische Impedanz und wie unterscheidet sie sich vom Widerstand?",
          nl: "Wat is elektrische impedantie en hoe verschilt het van weerstand?"
        },
        options: [
          { en: "Impedance includes resistance plus reactive components (inductive and capacitive)", es: "La impedancia incluye resistencia más componentes reactivos (inductivos y capacitivos)", de: "Impedanz umfasst Widerstand plus reaktive Komponenten (induktiv und kapazitiv)", nl: "Impedantie omvat weerstand plus reactieve componenten (inductief en capacitief)" },
          { en: "Impedance is only for DC circuits, resistance for AC", es: "La impedancia es solo para circuitos DC, resistencia para AC", de: "Impedanz ist nur für Gleichstromkreise, Widerstand für Wechselstrom", nl: "Impedantie is alleen voor gelijkstroomcircuits, weerstand voor wisselstroom" },
          { en: "They are exactly the same thing", es: "Son exactamente lo mismo", de: "Sie sind genau dasselbe", nl: "Ze zijn precies hetzelfde" },
          { en: "Impedance is measured in different units", es: "La impedancia se mide en unidades diferentes", de: "Impedanz wird in anderen Einheiten gemessen", nl: "Impedantie wordt gemeten in andere eenheden" }
        ],
        correct: 0,
        explanation: {
          en: "Impedance (Z) is the total opposition to AC current flow, combining resistance (R) with reactance (X): Z = R + jX. Reactance includes inductive reactance (XL = 2πfL) and capacitive reactance (XC = 1/2πfC). Resistance opposes current in all circuits, while impedance is frequency-dependent in AC circuits.",
          es: "La impedancia (Z) es la oposición total al flujo de corriente AC, combinando resistencia (R) con reactancia (X): Z = R + jX. La reactancia incluye reactancia inductiva (XL = 2πfL) y reactancia capacitiva (XC = 1/2πfC). La resistencia se opone a la corriente en todos los circuitos, mientras que la impedancia depende de la frecuencia en circuitos AC.",
          de: "Impedanz (Z) ist der gesamte Widerstand gegen Wechselstromfluss, kombiniert Widerstand (R) mit Reaktanz (X): Z = R + jX. Reaktanz umfasst induktive Reaktanz (XL = 2πfL) und kapazitive Reaktanz (XC = 1/2πfC). Widerstand wirkt Strom in allen Schaltungen entgegen, während Impedanz in Wechselstromkreisen frequenzabhängig ist.",
          nl: "Impedantie (Z) is de totale weerstand tegen wisselstroomflow, combineert weerstand (R) met reactantie (X): Z = R + jX. Reactantie omvat inductieve reactantie (XL = 2πfL) en capacitieve reactantie (XC = 1/2πfC). Weerstand werkt stroom tegen in alle circuits, terwijl impedantie frequentie-afhankelijk is in wisselstroomcircuits."
        }
      },
      {
        question: {
          en: "What is the principle behind Variable Frequency Drives (VFDs) for motor control?",
          es: "¿Cuál es el principio detrás de los Variadores de Frecuencia (VFDs) para control de motores?",
          de: "Was ist das Prinzip hinter Frequenzumrichtern (VFDs) für Motorsteuerung?",
          nl: "Wat is het principe achter Variabele Frequentie Aandrijvingen (VFDs) voor motorbesturing?"
        },
        options: [
          { en: "Control motor speed by varying frequency and voltage of AC power supply", es: "Controlar velocidad del motor variando frecuencia y voltaje de la fuente de potencia AC", de: "Motorgeschwindigkeit durch Variation von Frequenz und Spannung der Wechselstromversorgung steuern", nl: "Motorsnelheid regelen door frequentie en spanning van wisselstroomvoeding te variëren" },
          { en: "Use mechanical gears to change motor speed", es: "Usar engranajes mecánicos para cambiar velocidad del motor", de: "Mechanische Getriebe zur Änderung der Motorgeschwindigkeit verwenden", nl: "Mechanische versnellingen gebruiken om motorsnelheid te veranderen" },
          { en: "Only control starting torque of motors", es: "Solo controlar el torque de arranque de motores", de: "Nur das Anlaufdrehmoment von Motoren steuern", nl: "Alleen startkoppel van motoren regelen" },
          { en: "Convert all motors to DC operation", es: "Convertir todos los motores a operación DC", de: "Alle Motoren auf Gleichstrombetrieb umstellen", nl: "Alle motoren omzetten naar gelijkstroombedrijf" }
        ],
        correct: 0,
        explanation: {
          en: "VFDs convert fixed-frequency AC power to variable frequency AC power using rectification, DC bus filtering, and PWM inverter stages. Motor speed is proportional to frequency (N = 120f/p), so varying frequency controls speed. Voltage is adjusted proportionally to maintain constant flux and torque capability.",
          es: "Los VFDs convierten potencia AC de frecuencia fija a potencia AC de frecuencia variable usando rectificación, filtrado de bus DC, e etapas inversoras PWM. La velocidad del motor es proporcional a la frecuencia (N = 120f/p), así que variar frecuencia controla velocidad. El voltaje se ajusta proporcionalmente para mantener flujo constante y capacidad de torque.",
          de: "VFDs wandeln Wechselstrom mit fester Frequenz in Wechselstrom mit variabler Frequenz um mittels Gleichrichtung, Gleichstromzwischenkreisfilterung und PWM-Wechselrichterstufen. Motorgeschwindigkeit ist proportional zur Frequenz (N = 120f/p), daher steuert Frequenzvariation die Geschwindigkeit. Spannung wird proportional angepasst, um konstanten Fluss und Drehmomentfähigkeit zu erhalten.",
          nl: "VFDs zetten vaste-frequentie wisselstroom om naar variabele frequentie wisselstroom met behulp van gelijkrichting, DC-bus filtering en PWM omvormer trappen. Motorsnelheid is evenredig met frequentie (N = 120f/p), dus frequentievariatie regelt snelheid. Spanning wordt proportioneel aangepast om constante flux en koppelcapaciteit te behouden."
        }
      },
      {
        question: {
          en: "What is the purpose of protective relaying in power systems?",
          es: "¿Cuál es el propósito de los relés de protección en sistemas de potencia?",
          de: "Was ist der Zweck von Schutzrelais in Energiesystemen?",
          nl: "Wat is het doel van beschermingsrelais in energiesystemen?"
        },
        options: [
          { en: "Detect faults and isolate faulty sections to protect equipment and maintain stability", es: "Detectar fallas y aislar secciones defectuosas para proteger equipos y mantener estabilidad", de: "Fehler erkennen und fehlerhafte Abschnitte isolieren zum Schutz von Ausrüstung und Stabilitätserhaltung", nl: "Fouten detecteren en defecte secties isoleren om apparatuur te beschermen en stabiliteit te behouden" },
          { en: "Regulate voltage levels throughout the power system", es: "Regular niveles de voltaje en todo el sistema de potencia", de: "Spannungspegel im gesamten Energiesystem regeln", nl: "Spanningsniveaus door het energiesysteem reguleren" },
          { en: "Convert power between different frequency systems", es: "Convertir potencia entre sistemas de diferentes frecuencias", de: "Leistung zwischen verschiedenen Frequenzsystemen umwandeln", nl: "Vermogen omzetten tussen verschillende frequentiesystemen" },
          { en: "Store energy during peak demand periods", es: "Almacenar energía durante períodos de demanda pico", de: "Energie während Spitzenlastperioden speichern", nl: "Energie opslaan tijdens piekvraagtijden" }
        ],
        correct: 0,
        explanation: {
          en: "Protective relays monitor electrical parameters and automatically operate circuit breakers to isolate faulted equipment or lines. They use various protection schemes (overcurrent, differential, distance, frequency) to detect abnormal conditions like short circuits, ground faults, or equipment failures, preventing damage and maintaining system stability.",
          es: "Los relés de protección monitorean parámetros eléctricos y operan automáticamente interruptores para aislar equipos o líneas con fallas. Usan varios esquemas de protección (sobrecorriente, diferencial, distancia, frecuencia) para detectar condiciones anormales como cortocircuitos, fallas a tierra, o fallas de equipos, previniendo daños y manteniendo estabilidad del sistema.",
          de: "Schutzrelais überwachen elektrische Parameter und betätigen automatisch Leistungsschalter zur Isolierung fehlerhafter Ausrüstung oder Leitungen. Sie verwenden verschiedene Schutzschemas (Überstrom, Differential, Distanz, Frequenz) zur Erkennung abnormaler Zustände wie Kurzschlüsse, Erdschlüsse oder Ausrüstungsausfälle, verhindern Schäden und erhalten Systemstabilität.",
          nl: "Beschermingsrelais monitoren elektrische parameters en bedienen automatisch stroomonderbrekers om defecte apparatuur of lijnen te isoleren. Ze gebruiken verschillende beschermingsschema's (overstroom, differentiaal, afstand, frequentie) om abnormale condities zoals kortsluiting, aardfout of apparatuurstoringen te detecteren, schade te voorkomen en systeemstabiliteit te behouden."
        }
      },
      {
        question: {
          en: "What is power factor correction and why is it important for industrial facilities?",
          es: "¿Qué es la corrección del factor de potencia y por qué es importante para instalaciones industriales?",
          de: "Was ist Leistungsfaktorkorrektur und warum ist sie für Industrieanlagen wichtig?",
          nl: "Wat is arbeidsfactorcorrectie en waarom is het belangrijk voor industriële faciliteiten?"
        },
        options: [
          { en: "Reduces reactive power demand, improves efficiency, and lowers electricity costs", es: "Reduce demanda de potencia reactiva, mejora eficiencia y reduce costos de electricidad", de: "Reduziert Blindleistungsbedarf, verbessert Effizienz und senkt Stromkosten", nl: "Vermindert reactief vermogenvraag, verbetert efficiëntie en verlaagt elektriciteitskosten" },
          { en: "Converts AC power to DC power for sensitive equipment", es: "Convierte potencia AC a DC para equipos sensibles", de: "Wandelt Wechselstrom in Gleichstrom für empfindliche Ausrüstung um", nl: "Zet wisselstroom om naar gelijkstroom voor gevoelige apparatuur" },
          { en: "Increases the total power consumption of facilities", es: "Aumenta el consumo total de potencia de las instalaciones", de: "Erhöht den Gesamtenergieverbrauch von Anlagen", nl: "Verhoogt het totale energieverbruik van faciliteiten" },
          { en: "Only affects lighting systems in buildings", es: "Solo afecta sistemas de iluminación en edificios", de: "Betrifft nur Beleuchtungssysteme in Gebäuden", nl: "Beïnvloedt alleen verlichtingssystemen in gebouwen" }
        ],
        correct: 0,
        explanation: {
          en: "Power factor correction reduces reactive power (kVAR) consumption by adding capacitors to counteract inductive loads like motors and transformers. This improves power factor (closer to unity), reduces kVA demand, minimizes I²R losses in distribution, and can significantly reduce utility demand charges for industrial customers.",
          es: "La corrección del factor de potencia reduce el consumo de potencia reactiva (kVAR) añadiendo capacitores para contrarrestar cargas inductivas como motores y transformadores. Esto mejora el factor de potencia (más cerca de la unidad), reduce demanda de kVA, minimiza pérdidas I²R en distribución, y puede reducir significativamente cargos de demanda de servicios para clientes industriales.",
          de: "Leistungsfaktorkorrektur reduziert Blindleistungsverbrauch (kVAR) durch Hinzufügung von Kondensatoren zur Kompensation induktiver Lasten wie Motoren und Transformatoren. Dies verbessert den Leistungsfaktor (näher zur Einheit), reduziert kVA-Bedarf, minimiert I²R-Verluste in der Verteilung und kann Versorgernachfragegebühren für Industriekunden erheblich reduzieren.",
          nl: "Arbeidsfactorcorrectie vermindert reactief vermogenverbruik (kVAR) door condensatoren toe te voegen om inductieve belastingen zoals motoren en transformatoren tegen te werken. Dit verbetert de arbeidsfactor (dichter bij eenheid), vermindert kVA-vraag, minimaliseert I²R-verliezen in distributie, en kan vraagtarieven van nutsbedrijven voor industriële klanten aanzienlijk verlagen."
        }
      },
      {
        question: {
          en: "What is the difference between a fuse and a circuit breaker in electrical protection?",
          es: "¿Cuál es la diferencia entre un fusible y un disyuntor en protección eléctrica?",
          de: "Was ist der Unterschied zwischen einer Sicherung und einem Leistungsschalter beim elektrischen Schutz?",
          nl: "Wat is het verschil tussen een zekering en een stroomonderbreker in elektrische bescherming?"
        },
        options: [
          { en: "Fuse is one-time use and melts, breaker is reusable and trips mechanically", es: "Fusible es de un solo uso y se funde, disyuntor es reutilizable y actúa mecánicamente", de: "Sicherung ist einmalig verwendbar und schmilzt, Schalter ist wiederverwendbar und löst mechanisch aus", nl: "Zekering is eenmalig gebruik en smelt, onderbreker is herbruikbaar en schakelt mechanisch uit" },
          { en: "Fuses only work with DC, breakers only with AC", es: "Fusibles solo funcionan con DC, disyuntores solo con AC", de: "Sicherungen funktionieren nur mit Gleichstrom, Schalter nur mit Wechselstrom", nl: "Zekeringen werken alleen met gelijkstroom, onderbrekers alleen met wisselstroom" },
          { en: "Circuit breakers are always faster than fuses", es: "Los disyuntores siempre son más rápidos que los fusibles", de: "Leistungsschalter sind immer schneller als Sicherungen", nl: "Stroomonderbrekers zijn altijd sneller dan zekeringen" },
          { en: "They provide exactly the same protection characteristics", es: "Proporcionan exactamente las mismas características de protección", de: "Sie bieten genau die gleichen Schutzcharakteristiken", nl: "Ze bieden exact dezelfde beschermingskarakteristieken" }
        ],
        correct: 0,
        explanation: {
          en: "Fuses contain a metal element that melts when overcurrent occurs, creating an open circuit - they must be replaced after operation. Circuit breakers use mechanical/magnetic mechanisms to open contacts and can be reset/reused. Fuses are typically faster for short circuits, while breakers offer adjustable trip settings and remote operation capabilities.",
          es: "Los fusibles contienen un elemento metálico que se funde cuando ocurre sobrecorriente, creando un circuito abierto - deben reemplazarse después de operar. Los disyuntores usan mecanismos mecánicos/magnéticos para abrir contactos y pueden restablecerse/reutilizarse. Los fusibles son típicamente más rápidos para cortocircuitos, mientras disyuntores ofrecen ajustes de disparo ajustables y capacidades de operación remota.",
          de: "Sicherungen enthalten ein Metallelement, das bei Überstrom schmilzt und einen offenen Stromkreis erzeugt - sie müssen nach dem Ansprechen ersetzt werden. Leistungsschalter verwenden mechanische/magnetische Mechanismen zum Öffnen der Kontakte und können zurückgesetzt/wiederverwendet werden. Sicherungen sind typisch schneller bei Kurzschlüssen, während Schalter einstellbare Auslöseeinstellungen und Fernbetriebsmöglichkeiten bieten.",
          nl: "Zekeringen bevatten een metalen element dat smelt bij overstroom, waardoor een open circuit ontstaat - ze moeten vervangen worden na werking. Stroomonderbrekers gebruiken mechanische/magnetische mechanismen om contacten te openen en kunnen gereset/hergebruikt worden. Zekeringen zijn typisch sneller voor kortsluitingen, terwijl onderbrekers instelbare uitschakelinstellingen en externe bedieningsmogelijkheden bieden."
        }
      },
      {
        question: {
          en: "What is electromagnetic induction and what are its practical applications?",
          es: "¿Qué es la inducción electromagnética y cuáles son sus aplicaciones prácticas?",
          de: "Was ist elektromagnetische Induktion und was sind ihre praktischen Anwendungen?",
          nl: "Wat is elektromagnetische inductie en wat zijn de praktische toepassingen?"
        },
        options: [
          { en: "Voltage induced in conductor by changing magnetic field; used in generators, transformers, and induction motors", es: "Voltaje inducido en conductor por campo magnético cambiante; usado en generadores, transformadores y motores de inducción", de: "Spannung induziert in Leiter durch sich änderndes Magnetfeld; verwendet in Generatoren, Transformatoren und Induktionsmotoren", nl: "Spanning geïnduceerd in geleider door veranderend magnetisch veld; gebruikt in generatoren, transformatoren en inductiemotoren" },
          { en: "Static electricity buildup on conductor surfaces", es: "Acumulación de electricidad estática en superficies de conductores", de: "Ansammlung statischer Elektrizität auf Leiteroberflächen", nl: "Statische elektriciteit opbouw op geleideroppervlakken" },
          { en: "Direct current flow through magnetic materials", es: "Flujo de corriente directa a través de materiales magnéticos", de: "Gleichstromfluss durch magnetische Materialien", nl: "Gelijkstroom door magnetische materialen" },
          { en: "Resistance changes in conductors due to temperature", es: "Cambios de resistencia en conductores debido a temperatura", de: "Widerstandsänderungen in Leitern aufgrund von Temperatur", nl: "Weerstandsveranderingen in geleiders door temperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Electromagnetic induction, described by Faraday's law, occurs when a changing magnetic field induces voltage in a conductor (EMF = -dΦ/dt). This principle enables electrical generators (mechanical energy to electrical), transformers (voltage level changes), induction motors (rotating magnetic fields), and many other electrical devices.",
          es: "La inducción electromagnética, descrita por la ley de Faraday, ocurre cuando un campo magnético cambiante induce voltaje en un conductor (EMF = -dΦ/dt). Este principio permite generadores eléctricos (energía mecánica a eléctrica), transformadores (cambios de nivel de voltaje), motores de inducción (campos magnéticos rotatorios), y muchos otros dispositivos eléctricos.",
          de: "Elektromagnetische Induktion, beschrieben durch Faradays Gesetz, tritt auf, wenn ein sich änderndes Magnetfeld Spannung in einem Leiter induziert (EMK = -dΦ/dt). Dieses Prinzip ermöglicht elektrische Generatoren (mechanische zu elektrischer Energie), Transformatoren (Spannungspegeländerungen), Induktionsmotoren (rotierende Magnetfelder) und viele andere elektrische Geräte.",
          nl: "Elektromagnetische inductie, beschreven door Faraday's wet, treedt op wanneer een veranderend magnetisch veld spanning induceert in een geleider (EMF = -dΦ/dt). Dit principe maakt elektrische generatoren mogelijk (mechanische naar elektrische energie), transformatoren (spanningsniveauveranderingen), inductiemotoren (roterende magnetische velden), en vele andere elektrische apparaten."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/engineering', level5);
  }
})();
