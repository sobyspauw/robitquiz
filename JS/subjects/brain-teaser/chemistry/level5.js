window.addLevel('brain-teaser/chemistry', {
  name: { 
    en: 'Thermodynamics & Electrochemistry', 
    es: 'Termodinámica y Electroquímica', 
    de: 'Thermodynamik und Elektrochemie', 
    nl: 'Thermodynamica en Elektrochemie' 
  },
  questions: [
    {
      question: {
        en: "For the reaction 2A + B → C at 298K, if ΔH° = -150 kJ/mol and ΔS° = -200 J/mol·K, what is the standard Gibbs free energy change?",
        es: "Para la reacción 2A + B → C a 298K, si ΔH° = -150 kJ/mol y ΔS° = -200 J/mol·K, ¿cuál es el cambio de energía libre de Gibbs estándar?",
        de: "Für die Reaktion 2A + B → C bei 298K, wenn ΔH° = -150 kJ/mol und ΔS° = -200 J/mol·K, wie groß ist die Standard-Gibbs-Energieänderung?",
        nl: "Voor de reactie 2A + B → C bij 298K, als ΔH° = -150 kJ/mol en ΔS° = -200 J/mol·K, wat is de standaard Gibbs vrije energie verandering?"
      },
      options: [
        { en: "-89.4 kJ/mol", es: "-89,4 kJ/mol", de: "-89,4 kJ/mol", nl: "-89,4 kJ/mol" },
        { en: "-210.6 kJ/mol", es: "-210,6 kJ/mol", de: "-210,6 kJ/mol", nl: "-210,6 kJ/mol" },
        { en: "-90.4 kJ/mol", es: "-90,4 kJ/mol", de: "-90,4 kJ/mol", nl: "-90,4 kJ/mol" },
        { en: "-59.6 kJ/mol", es: "-59,6 kJ/mol", de: "-59,6 kJ/mol", nl: "-59,6 kJ/mol" }
      ],
      correct: 0,
      explanation: {
        en: "Using ΔG° = ΔH° - TΔS°: ΔG° = -150,000 - (298)(-200) = -150,000 + 59,600 = -90,400 J/mol = -90.4 kJ/mol. The positive TΔS term partially offsets the negative enthalpy.",
        es: "Usando ΔG° = ΔH° - TΔS°: ΔG° = -150.000 - (298)(-200) = -150.000 + 59.600 = -90.400 J/mol = -90,4 kJ/mol. El término TΔS positivo compensa parcialmente la entalpía negativa.",
        de: "Mit ΔG° = ΔH° - TΔS°: ΔG° = -150.000 - (298)(-200) = -150.000 + 59.600 = -90.400 J/mol = -90,4 kJ/mol. Der positive TΔS-Term gleicht die negative Enthalpie teilweise aus.",
        nl: "Met ΔG° = ΔH° - TΔS°: ΔG° = -150.000 - (298)(-200) = -150.000 + 59.600 = -90.400 J/mol = -90,4 kJ/mol. De positieve TΔS term compenseert gedeeltelijk de negatieve enthalpie."
      }
    },
    {
      question: {
        en: "What is the standard cell potential for a galvanic cell with Cu²⁺/Cu (E° = +0.34 V) cathode and Zn²⁺/Zn (E° = -0.76 V) anode?",
        es: "¿Cuál es el potencial de celda estándar para una celda galvánica con cátodo Cu²⁺/Cu (E° = +0,34 V) y ánodo Zn²⁺/Zn (E° = -0,76 V)?",
        de: "Wie groß ist das Standardzellpotential für eine galvanische Zelle mit Cu²⁺/Cu (E° = +0,34 V) Kathode und Zn²⁺/Zn (E° = -0,76 V) Anode?",
        nl: "Wat is de standaard cel potentiaal voor een galvanische cel met Cu²⁺/Cu (E° = +0,34 V) kathode en Zn²⁺/Zn (E° = -0,76 V) anode?"
      },
      options: [
        { en: "+1.10 V", es: "+1,10 V", de: "+1,10 V", nl: "+1,10 V" },
        { en: "+0.42 V", es: "+0,42 V", de: "+0,42 V", nl: "+0,42 V" },
        { en: "-0.42 V", es: "-0,42 V", de: "-0,42 V", nl: "-0,42 V" },
        { en: "-1.10 V", es: "-1,10 V", de: "-1,10 V", nl: "-1,10 V" }
      ],
      correct: 0,
      explanation: {
        en: "E°cell = E°cathode - E°anode = (+0.34) - (-0.76) = +1.10 V. The cell potential is positive, confirming this is a spontaneous galvanic cell reaction.",
        es: "E°celda = E°cátodo - E°ánodo = (+0,34) - (-0,76) = +1,10 V. El potencial de celda es positivo, confirmando que esta es una reacción espontánea de celda galvánica.",
        de: "E°Zelle = E°Kathode - E°Anode = (+0,34) - (-0,76) = +1,10 V. Das Zellpotential ist positiv, was bestätigt, dass dies eine spontane galvanische Zellreaktion ist.",
        nl: "E°cel = E°kathode - E°anode = (+0,34) - (-0,76) = +1,10 V. De cel potentiaal is positief, wat bevestigt dat dit een spontane galvanische cel reactie is."
      }
    },
    {
      question: {
        en: "At what temperature will a reaction with ΔH° = +75 kJ/mol and ΔS° = +150 J/mol·K become thermodynamically favorable?",
        es: "¿A qué temperatura será termodinámicamente favorable una reacción con ΔH° = +75 kJ/mol y ΔS° = +150 J/mol·K?",
        de: "Bei welcher Temperatur wird eine Reaktion mit ΔH° = +75 kJ/mol und ΔS° = +150 J/mol·K thermodynamisch günstig?",
        nl: "Bij welke temperatuur wordt een reactie met ΔH° = +75 kJ/mol en ΔS° = +150 J/mol·K thermodynamisch gunstig?"
      },
      options: [
        { en: "Above 500 K", es: "Por encima de 500 K", de: "Über 500 K", nl: "Boven 500 K" },
        { en: "Above 300 K", es: "Por encima de 300 K", de: "Über 300 K", nl: "Boven 300 K" },
        { en: "Below 500 K", es: "Por debajo de 500 K", de: "Unter 500 K", nl: "Onder 500 K" },
        { en: "At any temperature", es: "A cualquier temperatura", de: "Bei jeder Temperatur", nl: "Bij elke temperatuur" }
      ],
      correct: 0,
      explanation: {
        en: "For spontaneity, ΔG° < 0. At equilibrium: ΔG° = 0 = ΔH° - TΔS°, so T = ΔH°/ΔS° = 75,000/150 = 500 K. The reaction becomes favorable above 500 K where TΔS° > ΔH°.",
        es: "Para la espontaneidad, ΔG° < 0. En equilibrio: ΔG° = 0 = ΔH° - TΔS°, entonces T = ΔH°/ΔS° = 75.000/150 = 500 K. La reacción se vuelve favorable por encima de 500 K donde TΔS° > ΔH°.",
        de: "Für Spontaneität muss ΔG° < 0 sein. Im Gleichgewicht: ΔG° = 0 = ΔH° - TΔS°, also T = ΔH°/ΔS° = 75.000/150 = 500 K. Die Reaktion wird über 500 K günstig, wo TΔS° > ΔH°.",
        nl: "Voor spontaniteit geldt ΔG° < 0. In evenwicht: ΔG° = 0 = ΔH° - TΔS°, dus T = ΔH°/ΔS° = 75.000/150 = 500 K. De reactie wordt gunstig boven 500 K waar TΔS° > ΔH°."
      }
    },
    {
      question: {
        en: "In the Nernst equation E = E° - (RT/nF)ln(Q), what happens to the cell potential when the reaction quotient Q increases?",
        es: "En la ecuación de Nernst E = E° - (RT/nF)ln(Q), ¿qué sucede con el potencial de celda cuando aumenta el cociente de reacción Q?",
        de: "In der Nernst-Gleichung E = E° - (RT/nF)ln(Q), was passiert mit dem Zellpotential, wenn der Reaktionsquotient Q zunimmt?",
        nl: "In de Nernst vergelijking E = E° - (RT/nF)ln(Q), wat gebeurt er met de cel potentiaal wanneer het reactie quotiënt Q toeneemt?"
      },
      options: [
        { en: "Cell potential decreases", es: "El potencial de celda disminuye", de: "Zellpotential nimmt ab", nl: "Cel potentiaal neemt af" },
        { en: "Cell potential increases", es: "El potencial de celda aumenta", de: "Zellpotential nimmt zu", nl: "Cel potentiaal neemt toe" },
        { en: "Cell potential remains constant", es: "El potencial de celda permanece constante", de: "Zellpotential bleibt konstant", nl: "Cel potentiaal blijft constant" },
        { en: "Cell potential becomes zero", es: "El potencial de celda se vuelve cero", de: "Zellpotential wird null", nl: "Cel potentiaal wordt nul" }
      ],
      correct: 0,
      explanation: {
        en: "As Q increases, ln(Q) increases, making the term -(RT/nF)ln(Q) more negative, which decreases the overall cell potential E. This reflects the approach toward equilibrium where E approaches zero.",
        es: "Cuando Q aumenta, ln(Q) aumenta, haciendo que el término -(RT/nF)ln(Q) sea más negativo, lo que disminuye el potencial total de la celda E. Esto refleja el acercamiento hacia el equilibrio donde E se aproxima a cero.",
        de: "Wenn Q zunimmt, nimmt ln(Q) zu, wodurch der Term -(RT/nF)ln(Q) negativer wird, was das Gesamtzellpotential E verringert. Dies spiegelt die Annäherung an das Gleichgewicht wider, wo E gegen null geht.",
        nl: "Als Q toeneemt, neemt ln(Q) toe, waardoor de term -(RT/nF)ln(Q) negatiever wordt, wat de totale cel potentiaal E verlaagt. Dit weerspiegelt de benadering van evenwicht waar E naar nul gaat."
      }
    },
    {
      question: {
        en: "What is the relationship between the equilibrium constant K and the standard cell potential E° for an electrochemical reaction?",
        es: "¿Cuál es la relación entre la constante de equilibrio K y el potencial de celda estándar E° para una reacción electroquímica?",
        de: "Wie ist die Beziehung zwischen der Gleichgewichtskonstante K und dem Standardzellpotential E° für eine elektrochemische Reaktion?",
        nl: "Wat is de relatie tussen de evenwichtsconstante K en de standaard cel potentiaal E° voor een elektrochemische reactie?"
      },
      options: [
        { en: "ln(K) = nFE°/RT", es: "ln(K) = nFE°/RT", de: "ln(K) = nFE°/RT", nl: "ln(K) = nFE°/RT" },
        { en: "K = nFE°/RT", es: "K = nFE°/RT", de: "K = nFE°/RT", nl: "K = nFE°/RT" },
        { en: "ln(K) = RT/nFE°", es: "ln(K) = RT/nFE°", de: "ln(K) = RT/nFE°", nl: "ln(K) = RT/nFE°" },
        { en: "K = RT/nFE°", es: "K = RT/nFE°", de: "K = RT/nFE°", nl: "K = RT/nFE°" }
      ],
      correct: 0,
      explanation: {
        en: "At equilibrium, ΔG° = -RT ln(K) = -nFE°, therefore ln(K) = nFE°/RT. This equation connects thermodynamics (K) with electrochemistry (E°), showing that larger positive E° values correspond to larger equilibrium constants.",
        es: "En equilibrio, ΔG° = -RT ln(K) = -nFE°, por lo tanto ln(K) = nFE°/RT. Esta ecuación conecta la termodinámica (K) con la electroquímica (E°), mostrando que valores más grandes de E° positivo corresponden a constantes de equilibrio más grandes.",
        de: "Im Gleichgewicht ist ΔG° = -RT ln(K) = -nFE°, daher ln(K) = nFE°/RT. Diese Gleichung verbindet Thermodynamik (K) mit Elektrochemie (E°) und zeigt, dass größere positive E°-Werte größeren Gleichgewichtskonstanten entsprechen.",
        nl: "In evenwicht is ΔG° = -RT ln(K) = -nFE°, daarom ln(K) = nFE°/RT. Deze vergelijking verbindt thermodynamica (K) met elektrochemie (E°), wat toont dat grotere positieve E° waarden corresponderen met grotere evenwichtsconstanten."
      }
    },
    {
      question: {
        en: "For a reversible process, which statement about entropy is correct?",
        es: "Para un proceso reversible, ¿cuál afirmación sobre la entropía es correcta?",
        de: "Für einen reversiblen Prozess, welche Aussage über Entropie ist korrekt?",
        nl: "Voor een reversibel proces, welke bewering over entropie is correct?"
      },
      options: [
        { en: "ΔS_universe = 0", es: "ΔS_universo = 0", de: "ΔS_Universum = 0", nl: "ΔS_universum = 0" },
        { en: "ΔS_universe > 0", es: "ΔS_universo > 0", de: "ΔS_Universum > 0", nl: "ΔS_universum > 0" },
        { en: "ΔS_universe < 0", es: "ΔS_universo < 0", de: "ΔS_Universum < 0", nl: "ΔS_universum < 0" },
        { en: "ΔS_system = ΔS_surroundings", es: "ΔS_sistema = ΔS_alrededores", de: "ΔS_System = ΔS_Umgebung", nl: "ΔS_systeem = ΔS_omgeving" }
      ],
      correct: 0,
      explanation: {
        en: "For a reversible process, the total entropy change of the universe is zero (ΔS_universe = ΔS_system + ΔS_surroundings = 0). The system and surroundings exchange entropy equally and oppositely, maintaining overall entropy balance.",
        es: "Para un proceso reversible, el cambio total de entropía del universo es cero (ΔS_universo = ΔS_sistema + ΔS_alrededores = 0). El sistema y los alrededores intercambian entropía de manera igual y opuesta, manteniendo el equilibrio total de entropía.",
        de: "Für einen reversiblen Prozess ist die gesamte Entropieänderung des Universums null (ΔS_Universum = ΔS_System + ΔS_Umgebung = 0). System und Umgebung tauschen Entropie gleichmäßig und entgegengesetzt aus und halten das Gesamtentropie-Gleichgewicht aufrecht.",
        nl: "Voor een reversibel proces is de totale entropie verandering van het universum nul (ΔS_universum = ΔS_systeem + ΔS_omgeving = 0). Het systeem en de omgeving wisselen entropie gelijk en tegengesteld uit, waardoor de totale entropie balans behouden blijft."
      }
    },
    {
      question: {
        en: "In a Carnot engine operating between 600K and 300K, what is the theoretical maximum efficiency?",
        es: "En una máquina de Carnot que opera entre 600K y 300K, ¿cuál es la eficiencia máxima teórica?",
        de: "Bei einer Carnot-Maschine, die zwischen 600K und 300K arbeitet, wie hoch ist der theoretische Maximalwirkungsgrad?",
        nl: "In een Carnot machine die werkt tussen 600K en 300K, wat is de theoretische maximale efficiëntie?"
      },
      options: [
        { en: "50%", es: "50%", de: "50%", nl: "50%" },
        { en: "66.7%", es: "66,7%", de: "66,7%", nl: "66,7%" },
        { en: "33.3%", es: "33,3%", de: "33,3%", nl: "33,3%" },
        { en: "75%", es: "75%", de: "75%", nl: "75%" }
      ],
      correct: 0,
      explanation: {
        en: "Carnot efficiency = 1 - (T_cold/T_hot) = 1 - (300K/600K) = 1 - 0.5 = 0.5 or 50%. This represents the theoretical maximum efficiency for any heat engine operating between these temperatures.",
        es: "Eficiencia de Carnot = 1 - (T_fría/T_caliente) = 1 - (300K/600K) = 1 - 0,5 = 0,5 o 50%. Esto representa la eficiencia máxima teórica para cualquier máquina térmica que opere entre estas temperaturas.",
        de: "Carnot-Wirkungsgrad = 1 - (T_kalt/T_heiß) = 1 - (300K/600K) = 1 - 0,5 = 0,5 oder 50%. Dies stellt den theoretischen Maximalwirkungsgrad für jede Wärmekraftmaschine dar, die zwischen diesen Temperaturen arbeitet.",
        nl: "Carnot efficiëntie = 1 - (T_koud/T_heet) = 1 - (300K/600K) = 1 - 0,5 = 0,5 of 50%. Dit vertegenwoordigt de theoretische maximale efficiëntie voor elke warmtemotor die tussen deze temperaturen werkt."
      }
    },
    {
      question: {
        en: "What is the standard enthalpy of formation (ΔH°f) for O₂(g) at 25°C?",
        es: "¿Cuál es la entalpía estándar de formación (ΔH°f) para O₂(g) a 25°C?",
        de: "Wie groß ist die Standardbildungsenthalpie (ΔH°f) für O₂(g) bei 25°C?",
        nl: "Wat is de standaard vormingsenthalpie (ΔH°f) voor O₂(g) bij 25°C?"
      },
      options: [
        { en: "0 kJ/mol", es: "0 kJ/mol", de: "0 kJ/mol", nl: "0 kJ/mol" },
        { en: "-286 kJ/mol", es: "-286 kJ/mol", de: "-286 kJ/mol", nl: "-286 kJ/mol" },
        { en: "+498 kJ/mol", es: "+498 kJ/mol", de: "+498 kJ/mol", nl: "+498 kJ/mol" },
        { en: "-394 kJ/mol", es: "-394 kJ/mol", de: "-394 kJ/mol", nl: "-394 kJ/mol" }
      ],
      correct: 0,
      explanation: {
        en: "By definition, the standard enthalpy of formation for any element in its most stable form at standard conditions is zero. O₂(g) is the most stable form of oxygen at 25°C and 1 atm, so ΔH°f = 0 kJ/mol.",
        es: "Por definición, la entalpía estándar de formación para cualquier elemento en su forma más estable en condiciones estándar es cero. O₂(g) es la forma más estable del oxígeno a 25°C y 1 atm, por lo que ΔH°f = 0 kJ/mol.",
        de: "Per Definition ist die Standardbildungsenthalpie für jedes Element in seiner stabilsten Form unter Standardbedingungen null. O₂(g) ist die stabilste Form von Sauerstoff bei 25°C und 1 atm, daher ΔH°f = 0 kJ/mol.",
        nl: "Per definitie is de standaard vormingsenthalpie voor elk element in zijn meest stabiele vorm onder standaard omstandigheden nul. O₂(g) is de meest stabiele vorm van zuurstof bij 25°C en 1 atm, dus ΔH°f = 0 kJ/mol."
      }
    },
    {
      question: {
        en: "Which process has the largest entropy increase?",
        es: "¿Qué proceso tiene el mayor aumento de entropía?",
        de: "Welcher Prozess hat die größte Entropiezunahme?",
        nl: "Welk proces heeft de grootste entropie toename?"
      },
      options: [
        { en: "H₂O(l) → H₂O(g)", es: "H₂O(l) → H₂O(g)", de: "H₂O(l) → H₂O(g)", nl: "H₂O(l) → H₂O(g)" },
        { en: "H₂O(s) → H₂O(l)", es: "H₂O(s) → H₂O(l)", de: "H₂O(s) → H₂O(l)", nl: "H₂O(s) → H₂O(l)" },
        { en: "2H₂(g) + O₂(g) → 2H₂O(l)", es: "2H₂(g) + O₂(g) → 2H₂O(l)", de: "2H₂(g) + O₂(g) → 2H₂O(l)", nl: "2H₂(g) + O₂(g) → 2H₂O(l)" },
        { en: "Diamond → Graphite", es: "Diamante → Grafito", de: "Diamant → Graphit", nl: "Diamant → Grafiet" }
      ],
      correct: 0,
      explanation: {
        en: "Vaporization (H₂O(l) → H₂O(g)) involves the largest entropy increase because molecules transition from a highly ordered liquid state to a much more disordered gas state, with dramatically increased molecular motion and available microstates.",
        es: "La vaporización (H₂O(l) → H₂O(g)) implica el mayor aumento de entropía porque las moléculas pasan de un estado líquido altamente ordenado a un estado gaseoso mucho más desordenado, con movimiento molecular dramáticamente aumentado y microestados disponibles.",
        de: "Die Verdampfung (H₂O(l) → H₂O(g)) beinhaltet die größte Entropiezunahme, da Moleküle von einem hoch geordneten flüssigen Zustand zu einem viel ungeordneteren Gaszustand übergehen, mit dramatisch erhöhter Molekularbewegung und verfügbaren Mikrozuständen.",
        nl: "Verdamping (H₂O(l) → H₂O(g)) heeft de grootste entropie toename omdat moleculen overgaan van een zeer geordende vloeistof toestand naar een veel meer wanordelijke gas toestand, met dramatisch verhoogde moleculaire beweging en beschikbare microtoestanden."
      }
    },
    {
      question: {
        en: "In electrolysis of molten NaCl, what is produced at the cathode?",
        es: "En la electrólisis de NaCl fundido, ¿qué se produce en el cátodo?",
        de: "Bei der Elektrolyse von geschmolzenem NaCl, was wird an der Kathode produziert?",
        nl: "Bij elektrolyse van gesmolten NaCl, wat wordt er geproduceerd bij de kathode?"
      },
      options: [
        { en: "Na metal", es: "Metal Na", de: "Na-Metall", nl: "Na metaal" },
        { en: "Cl₂ gas", es: "Gas Cl₂", de: "Cl₂-Gas", nl: "Cl₂ gas" },
        { en: "H₂ gas", es: "Gas H₂", de: "H₂-Gas", nl: "H₂ gas" },
        { en: "O₂ gas", es: "Gas O₂", de: "O₂-Gas", nl: "O₂ gas" }
      ],
      correct: 0,
      explanation: {
        en: "At the cathode (negative electrode), reduction occurs. Na⁺ ions gain electrons to form metallic sodium: Na⁺ + e⁻ → Na. At the anode, Cl⁻ ions are oxidized to Cl₂ gas. This is the industrial process for producing sodium metal.",
        es: "En el cátodo (electrodo negativo), ocurre la reducción. Los iones Na⁺ ganan electrones para formar sodio metálico: Na⁺ + e⁻ → Na. En el ánodo, los iones Cl⁻ se oxidan a gas Cl₂. Este es el proceso industrial para producir sodio metálico.",
        de: "An der Kathode (negative Elektrode) findet Reduktion statt. Na⁺-Ionen nehmen Elektronen auf und bilden metallisches Natrium: Na⁺ + e⁻ → Na. An der Anode werden Cl⁻-Ionen zu Cl₂-Gas oxidiert. Dies ist der industrielle Prozess zur Natriumherstellung.",
        nl: "Bij de kathode (negatieve elektrode) vindt reductie plaats. Na⁺ ionen krijgen elektronen om metallisch natrium te vormen: Na⁺ + e⁻ → Na. Bij de anode worden Cl⁻ ionen geoxideerd tot Cl₂ gas. Dit is het industriële proces voor het produceren van natrium metaal."
      }
    },
    {
      question: {
        en: "What is the sign of ΔG for a spontaneous process at constant temperature and pressure?",
        es: "¿Cuál es el signo de ΔG para un proceso espontáneo a temperatura y presión constantes?",
        de: "Welches Vorzeichen hat ΔG für einen spontanen Prozess bei konstanter Temperatur und Druck?",
        nl: "Wat is het teken van ΔG voor een spontaan proces bij constante temperatuur en druk?"
      },
      options: [
        { en: "Negative", es: "Negativo", de: "Negativ", nl: "Negatief" },
        { en: "Positive", es: "Positivo", de: "Positiv", nl: "Positief" },
        { en: "Zero", es: "Cero", de: "Null", nl: "Nul" },
        { en: "Can be either positive or negative", es: "Puede ser positivo o negativo", de: "Kann positiv oder negativ sein", nl: "Kan positief of negatief zijn" }
      ],
      correct: 0,
      explanation: {
        en: "For a spontaneous process at constant T and P, ΔG < 0 (negative). This is the fundamental criterion for spontaneity in thermodynamics. When ΔG = 0, the system is at equilibrium, and when ΔG > 0, the process is non-spontaneous.",
        es: "Para un proceso espontáneo a T y P constantes, ΔG < 0 (negativo). Este es el criterio fundamental para la espontaneidad en termodinámica. Cuando ΔG = 0, el sistema está en equilibrio, y cuando ΔG > 0, el proceso no es espontáneo.",
        de: "Für einen spontanen Prozess bei konstantem T und P ist ΔG < 0 (negativ). Dies ist das grundlegende Kriterium für Spontaneität in der Thermodynamik. Wenn ΔG = 0, ist das System im Gleichgewicht, und wenn ΔG > 0, ist der Prozess nicht spontan.",
        nl: "Voor een spontaan proces bij constante T en P is ΔG < 0 (negatief). Dit is het fundamentele criterium voor spontaniteit in de thermodynamica. Wanneer ΔG = 0 is het systeem in evenwicht, en wanneer ΔG > 0 is het proces niet-spontaan."
      }
    },
    {
      question: {
        en: "How many electrons are transferred in the balanced equation: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O?",
        es: "¿Cuántos electrones se transfieren en la ecuación equilibrada: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O?",
        de: "Wie viele Elektronen werden in der ausgeglichenen Gleichung übertragen: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O?",
        nl: "Hoeveel elektronen worden overgedragen in de gebalanceerde vergelijking: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O?"
      },
      options: [
        { en: "6 electrons", es: "6 electrones", de: "6 Elektronen", nl: "6 elektronen" },
        { en: "3 electrons", es: "3 electrones", de: "3 Elektronen", nl: "3 elektronen" },
        { en: "12 electrons", es: "12 electrones", de: "12 Elektronen", nl: "12 elektronen" },
        { en: "14 electrons", es: "14 electrones", de: "14 Elektronen", nl: "14 elektronen" }
      ],
      correct: 0,
      explanation: {
        en: "The equation shows 6e⁻ explicitly, indicating 6 electrons are gained by the dichromate ion. Each Cr changes from +6 oxidation state (in Cr₂O₇²⁻) to +3 (in Cr³⁺), requiring 3 electrons per Cr atom, so 2 × 3 = 6 total electrons.",
        es: "La ecuación muestra 6e⁻ explícitamente, indicando que el ion dicromato gana 6 electrones. Cada Cr cambia del estado de oxidación +6 (en Cr₂O₇²⁻) a +3 (en Cr³⁺), requiriendo 3 electrones por átomo de Cr, entonces 2 × 3 = 6 electrones totales.",
        de: "Die Gleichung zeigt explizit 6e⁻, was bedeutet, dass das Dichromat-Ion 6 Elektronen aufnimmt. Jedes Cr ändert sich von Oxidationsstufe +6 (in Cr₂O₇²⁻) zu +3 (in Cr³⁺), wobei 3 Elektronen pro Cr-Atom benötigt werden, also 2 × 3 = 6 Elektronen insgesamt.",
        nl: "De vergelijking toont expliciet 6e⁻, wat aangeeft dat het dichromaat ion 6 elektronen krijgt. Elke Cr verandert van oxidatietoestand +6 (in Cr₂O₇²⁻) naar +3 (in Cr³⁺), waarbij 3 elektronen per Cr atoom nodig zijn, dus 2 × 3 = 6 totale elektronen."
      }
    },
    {
      question: {
        en: "In a galvanic cell, which direction do electrons flow in the external circuit?",
        es: "En una celda galvánica, ¿en qué dirección fluyen los electrones en el circuito externo?",
        de: "In einer galvanischen Zelle, in welche Richtung fließen die Elektronen im äußeren Stromkreis?",
        nl: "In een galvanische cel, in welke richting stromen de elektronen in het externe circuit?"
      },
      options: [
        { en: "From anode to cathode", es: "Del ánodo al cátodo", de: "Von Anode zur Kathode", nl: "Van anode naar kathode" },
        { en: "From cathode to anode", es: "Del cátodo al ánodo", de: "Von Kathode zur Anode", nl: "Van kathode naar anode" },
        { en: "In both directions equally", es: "En ambas direcciones por igual", de: "In beide Richtungen gleich", nl: "In beide richtingen gelijk" },
        { en: "No electron flow occurs", es: "No hay flujo de electrones", de: "Kein Elektronenfluss tritt auf", nl: "Er vindt geen elektronenstroom plaats" }
      ],
      correct: 0,
      explanation: {
        en: "Electrons flow from anode (where oxidation occurs) to cathode (where reduction occurs) through the external circuit. The anode is the negative terminal and cathode is the positive terminal in a galvanic cell, creating the driving force for electron flow.",
        es: "Los electrones fluyen del ánodo (donde ocurre la oxidación) al cátodo (donde ocurre la reducción) a través del circuito externo. El ánodo es el terminal negativo y el cátodo es el terminal positivo en una celda galvánica, creando la fuerza motriz para el flujo de electrones.",
        de: "Elektronen fließen von der Anode (wo Oxidation stattfindet) zur Kathode (wo Reduktion stattfindet) durch den äußeren Stromkreis. Die Anode ist der negative und die Kathode der positive Pol in einer galvanischen Zelle, was die treibende Kraft für den Elektronenfluss erzeugt.",
        nl: "Elektronen stromen van anode (waar oxidatie plaatsvindt) naar kathode (waar reductie plaatsvindt) door het externe circuit. De anode is de negatieve pool en kathode is de positieve pool in een galvanische cel, wat de drijvende kracht voor elektronenstroom creëert."
      }
    },
    {
      question: {
        en: "What is the entropy change when 1 mole of ice melts at 0°C? (ΔH_fusion = 6.01 kJ/mol)",
        es: "¿Cuál es el cambio de entropía cuando 1 mol de hielo se derrite a 0°C? (ΔH_fusión = 6,01 kJ/mol)",
        de: "Wie groß ist die Entropieänderung, wenn 1 mol Eis bei 0°C schmilzt? (ΔH_Schmelz = 6,01 kJ/mol)",
        nl: "Wat is de entropie verandering wanneer 1 mol ijs smelt bij 0°C? (ΔH_fusie = 6,01 kJ/mol)"
      },
      options: [
        { en: "22.0 J/mol·K", es: "22,0 J/mol·K", de: "22,0 J/mol·K", nl: "22,0 J/mol·K" },
        { en: "6.01 J/mol·K", es: "6,01 J/mol·K", de: "6,01 J/mol·K", nl: "6,01 J/mol·K" },
        { en: "16.5 J/mol·K", es: "16,5 J/mol·K", de: "16,5 J/mol·K", nl: "16,5 J/mol·K" },
        { en: "273 J/mol·K", es: "273 J/mol·K", de: "273 J/mol·K", nl: "273 J/mol·K" }
      ],
      correct: 0,
      explanation: {
        en: "For a phase transition at constant temperature: ΔS = ΔH/T = (6010 J/mol)/(273.15 K) = 22.0 J/mol·K. This represents the entropy increase as the ordered solid structure becomes a more disordered liquid.",
        es: "Para una transición de fase a temperatura constante: ΔS = ΔH/T = (6010 J/mol)/(273,15 K) = 22,0 J/mol·K. Esto representa el aumento de entropía cuando la estructura sólida ordenada se convierte en un líquido más desordenado.",
        de: "Für einen Phasenübergang bei konstanter Temperatur: ΔS = ΔH/T = (6010 J/mol)/(273,15 K) = 22,0 J/mol·K. Dies stellt die Entropiezunahme dar, wenn die geordnete feste Struktur zu einer ungeordneteren Flüssigkeit wird.",
        nl: "Voor een faseovergang bij constante temperatuur: ΔS = ΔH/T = (6010 J/mol)/(273,15 K) = 22,0 J/mol·K. Dit vertegenwoordigt de entropie toename wanneer de geordende vaste structuur een meer wanordelijke vloeistof wordt."
      }
    },
    {
      question: {
        en: "Which statement correctly describes the Second Law of Thermodynamics?",
        es: "¿Cuál afirmación describe correctamente la Segunda Ley de la Termodinámica?",
        de: "Welche Aussage beschreibt das Zweite Hauptgesetz der Thermodynamik korrekt?",
        nl: "Welke bewering beschrijft correct de Tweede Hoofdwet van de Thermodynamica?"
      },
      options: [
        { en: "The entropy of an isolated system always increases", es: "La entropía de un sistema aislado siempre aumenta", de: "Die Entropie eines isolierten Systems nimmt immer zu", nl: "De entropie van een geïsoleerd systeem neemt altijd toe" },
        { en: "Energy cannot be created or destroyed", es: "La energía no se puede crear ni destruir", de: "Energie kann nicht erzeugt oder zerstört werden", nl: "Energie kan niet gecreëerd of vernietigd worden" },
        { en: "All matter consists of atoms", es: "Toda la materia consiste en átomos", de: "Alle Materie besteht aus Atomen", nl: "Alle materie bestaat uit atomen" },
        { en: "Heat flows from cold to hot spontaneously", es: "El calor fluye del frío al caliente espontáneamente", de: "Wärme fließt spontan von kalt zu heiß", nl: "Warmte stroomt spontaan van koud naar heet" }
      ],
      correct: 0,
      explanation: {
        en: "The Second Law states that the entropy of an isolated system always increases or remains constant for reversible processes. This drives the direction of spontaneous processes and explains why certain processes are irreversible in nature.",
        es: "La Segunda Ley establece que la entropía de un sistema aislado siempre aumenta o permanece constante para procesos reversibles. Esto impulsa la dirección de los procesos espontáneos y explica por qué ciertos procesos son irreversibles en la naturaleza.",
        de: "Das Zweite Hauptgesetz besagt, dass die Entropie eines isolierten Systems immer zunimmt oder bei reversiblen Prozessen konstant bleibt. Dies bestimmt die Richtung spontaner Prozesse und erklärt, warum bestimmte Prozesse in der Natur irreversibel sind.",
        nl: "De Tweede Hoofdwet stelt dat de entropie van een geïsoleerd systeem altijd toeneemt of constant blijft voor reversibele processen. Dit drijft de richting van spontane processen aan en verklaart waarom bepaalde processen in de natuur onomkeerbaar zijn."
      }
    },
    {
      question: {
        en: "What is the oxidation state of manganese in KMnO₄?",
        es: "¿Cuál es el estado de oxidación del manganeso en KMnO₄?",
        de: "Welche Oxidationsstufe hat Mangan in KMnO₄?",
        nl: "Wat is de oxidatietoestand van mangaan in KMnO₄?"
      },
      options: [
        { en: "+7", es: "+7", de: "+7", nl: "+7" },
        { en: "+6", es: "+6", de: "+6", nl: "+6" },
        { en: "+5", es: "+5", de: "+5", nl: "+5" },
        { en: "+4", es: "+4", de: "+4", nl: "+4" }
      ],
      correct: 0,
      explanation: {
        en: "In KMnO₄: K is +1, each O is -2 (4 × -2 = -8), so Mn must be +7 to make the total charge zero: (+1) + (+7) + (-8) = 0. Manganese in permanganate ion has its highest possible oxidation state.",
        es: "En KMnO₄: K es +1, cada O es -2 (4 × -2 = -8), entonces Mn debe ser +7 para hacer que la carga total sea cero: (+1) + (+7) + (-8) = 0. El manganeso en el ion permanganato tiene su estado de oxidación más alto posible.",
        de: "In KMnO₄: K ist +1, jedes O ist -2 (4 × -2 = -8), also muss Mn +7 sein, um die Gesamtladung null zu machen: (+1) + (+7) + (-8) = 0. Mangan im Permanganat-Ion hat seine höchstmögliche Oxidationsstufe.",
        nl: "In KMnO₄: K is +1, elke O is -2 (4 × -2 = -8), dus Mn moet +7 zijn om de totale lading nul te maken: (+1) + (+7) + (-8) = 0. Mangaan in het permanganaat ion heeft zijn hoogst mogelijke oxidatietoestand."
      }
    },
    {
      question: {
        en: "In a concentration cell with identical electrodes, what determines the cell potential?",
        es: "En una celda de concentración con electrodos idénticos, ¿qué determina el potencial de la celda?",
        de: "In einer Konzentrationszelle mit identischen Elektroden, was bestimmt das Zellpotential?",
        nl: "In een concentratie cel met identieke elektroden, wat bepaalt de cel potentiaal?"
      },
      options: [
        { en: "Concentration difference between half-cells", es: "Diferencia de concentración entre semiceldas", de: "Konzentrationsunterschied zwischen Halbzellen", nl: "Concentratieverschil tussen halve cellen" },
        { en: "Temperature difference", es: "Diferencia de temperatura", de: "Temperaturunterschied", nl: "Temperatuurverschil" },
        { en: "Electrode surface area", es: "Área superficial del electrodo", de: "Elektrodenoberfläche", nl: "Elektrode oppervlakte" },
        { en: "Pressure difference", es: "Diferencia de presión", de: "Druckunterschied", nl: "Drukverschil" }
      ],
      correct: 0,
      explanation: {
        en: "Since E° = 0 for identical electrodes, the Nernst equation shows that cell potential depends only on the concentration ratio: E = -(RT/nF)ln([dilute]/[concentrated]). The cell generates voltage to equalize concentrations.",
        es: "Dado que E° = 0 para electrodos idénticos, la ecuación de Nernst muestra que el potencial de celda depende solo de la relación de concentración: E = -(RT/nF)ln([diluida]/[concentrada]). La celda genera voltaje para igualar las concentraciones.",
        de: "Da E° = 0 für identische Elektroden ist, zeigt die Nernst-Gleichung, dass das Zellpotential nur vom Konzentrationsverhältnis abhängt: E = -(RT/nF)ln([verdünnt]/[konzentriert]). Die Zelle erzeugt Spannung, um Konzentrationen auszugleichen.",
        nl: "Omdat E° = 0 voor identieke elektroden, toont de Nernst vergelijking dat cel potentiaal alleen afhangt van de concentratie verhouding: E = -(RT/nF)ln([verdund]/[geconcentreerd]). De cel genereert spanning om concentraties gelijk te maken."
      }
    },
    {
      question: {
        en: "What happens to the equilibrium constant K when temperature increases for an exothermic reaction?",
        es: "¿Qué sucede con la constante de equilibrio K cuando la temperatura aumenta para una reacción exotérmica?",
        de: "Was passiert mit der Gleichgewichtskonstante K, wenn die Temperatur für eine exotherme Reaktion steigt?",
        nl: "Wat gebeurt er met de evenwichtsconstante K wanneer de temperatuur toeneemt voor een exotherme reactie?"
      },
      options: [
        { en: "K decreases", es: "K disminuye", de: "K nimmt ab", nl: "K neemt af" },
        { en: "K increases", es: "K aumenta", de: "K nimmt zu", nl: "K neemt toe" },
        { en: "K remains constant", es: "K permanece constante", de: "K bleibt konstant", nl: "K blijft constant" },
        { en: "K becomes zero", es: "K se vuelve cero", de: "K wird null", nl: "K wordt nul" }
      ],
      correct: 0,
      explanation: {
        en: "For exothermic reactions (ΔH < 0), increasing temperature shifts equilibrium toward reactants (Le Chatelier's principle), decreasing K. The van 't Hoff equation shows that ln(K) is inversely related to temperature for exothermic reactions.",
        es: "Para reacciones exotérmicas (ΔH < 0), el aumento de temperatura desplaza el equilibrio hacia los reactivos (principio de Le Chatelier), disminuyendo K. La ecuación de van 't Hoff muestra que ln(K) está inversamente relacionado con la temperatura para reacciones exotérmicas.",
        de: "Für exotherme Reaktionen (ΔH < 0) verschiebt eine Temperaturerhöhung das Gleichgewicht zu den Reaktanten (Le Chatelier-Prinzip), wodurch K abnimmt. Die van 't Hoff-Gleichung zeigt, dass ln(K) für exotherme Reaktionen umgekehrt zur Temperatur steht.",
        nl: "Voor exotherme reacties (ΔH < 0) verschuift temperatuurverhoging het evenwicht naar reactanten (Le Chatelier principe), waardoor K afneemt. De van 't Hoff vergelijking toont dat ln(K) omgekeerd gerelateerd is aan temperatuur voor exotherme reacties."
      }
    },
    {
      question: {
        en: "What is the relationship between ΔG°, ΔH°, and ΔS° at constant temperature?",
        es: "¿Cuál es la relación entre ΔG°, ΔH° y ΔS° a temperatura constante?",
        de: "Wie ist die Beziehung zwischen ΔG°, ΔH° und ΔS° bei konstanter Temperatur?",
        nl: "Wat is de relatie tussen ΔG°, ΔH° en ΔS° bij constante temperatuur?"
      },
      options: [
        { en: "ΔG° = ΔH° - TΔS°", es: "ΔG° = ΔH° - TΔS°", de: "ΔG° = ΔH° - TΔS°", nl: "ΔG° = ΔH° - TΔS°" },
        { en: "ΔG° = ΔH° + TΔS°", es: "ΔG° = ΔH° + TΔS°", de: "ΔG° = ΔH° + TΔS°", nl: "ΔG° = ΔH° + TΔS°" },
        { en: "ΔG° = TΔS° - ΔH°", es: "ΔG° = TΔS° - ΔH°", de: "ΔG° = TΔS° - ΔH°", nl: "ΔG° = TΔS° - ΔH°" },
        { en: "ΔG° = ΔH°/TΔS°", es: "ΔG° = ΔH°/TΔS°", de: "ΔG° = ΔH°/TΔS°", nl: "ΔG° = ΔH°/TΔS°" }
      ],
      correct: 0,
      explanation: {
        en: "The Gibbs-Helmholtz equation is ΔG° = ΔH° - TΔS°. This fundamental relationship shows that free energy depends on both enthalpy (ΔH°) and entropy (ΔS°) contributions, weighted by temperature T.",
        es: "La ecuación de Gibbs-Helmholtz es ΔG° = ΔH° - TΔS°. Esta relación fundamental muestra que la energía libre depende de las contribuciones tanto de entalpía (ΔH°) como de entropía (ΔS°), ponderadas por la temperatura T.",
        de: "Die Gibbs-Helmholtz-Gleichung ist ΔG° = ΔH° - TΔS°. Diese grundlegende Beziehung zeigt, dass freie Energie sowohl von Enthalpie- (ΔH°) als auch von Entropie-Beiträgen (ΔS°) abhängt, gewichtet nach Temperatur T.",
        nl: "De Gibbs-Helmholtz vergelijking is ΔG° = ΔH° - TΔS°. Deze fundamentele relatie toont dat vrije energie afhangt van zowel enthalpie (ΔH°) als entropie (ΔS°) bijdragen, gewogen naar temperatuur T."
      }
    },
    {
      question: {
        en: "Which factor does NOT affect the cell potential in the Nernst equation?",
        es: "¿Qué factor NO afecta el potencial de celda en la ecuación de Nernst?",
        de: "Welcher Faktor beeinflusst das Zellpotential in der Nernst-Gleichung NICHT?",
        nl: "Welke factor beïnvloedt de cel potentiaal in de Nernst vergelijking NIET?"
      },
      options: [
        { en: "Electrode surface area", es: "Área superficial del electrodo", de: "Elektrodenoberfläche", nl: "Elektrode oppervlakte" },
        { en: "Temperature", es: "Temperatura", de: "Temperatur", nl: "Temperatuur" },
        { en: "Concentration of ions", es: "Concentración de iones", de: "Ionenkonzentration", nl: "Concentratie van ionen" },
        { en: "Number of electrons transferred", es: "Número de electrones transferidos", de: "Anzahl übertragener Elektronen", nl: "Aantal overgedragen elektronen" }
      ],
      correct: 0,
      explanation: {
        en: "Electrode surface area does not appear in the Nernst equation: E = E° - (RT/nF)ln(Q). The equation depends on standard potential (E°), temperature (T), number of electrons (n), and reaction quotient (Q), but not on electrode surface area.",
        es: "El área superficial del electrodo no aparece en la ecuación de Nernst: E = E° - (RT/nF)ln(Q). La ecuación depende del potencial estándar (E°), temperatura (T), número de electrones (n) y cociente de reacción (Q), pero no del área superficial del electrodo.",
        de: "Die Elektrodenoberfläche erscheint nicht in der Nernst-Gleichung: E = E° - (RT/nF)ln(Q). Die Gleichung hängt vom Standardpotential (E°), Temperatur (T), Elektronenanzahl (n) und Reaktionsquotient (Q) ab, aber nicht von der Elektrodenoberfläche.",
        nl: "Elektrode oppervlakte verschijnt niet in de Nernst vergelijking: E = E° - (RT/nF)ln(Q). De vergelijking hangt af van standaard potentiaal (E°), temperatuur (T), aantal elektronen (n) en reactie quotiënt (Q), maar niet van elektrode oppervlakte."
      }
    },
    {
      question: {
        en: "What is the Gibbs free energy change for a system at equilibrium?",
        es: "¿Cuál es el cambio de energía libre de Gibbs para un sistema en equilibrio?",
        de: "Wie groß ist die Gibbs-Energieänderung für ein System im Gleichgewicht?",
        nl: "Wat is de Gibbs vrije energie verandering voor een systeem in evenwicht?"
      },
      options: [
        { en: "ΔG = 0", es: "ΔG = 0", de: "ΔG = 0", nl: "ΔG = 0" },
        { en: "ΔG > 0", es: "ΔG > 0", de: "ΔG > 0", nl: "ΔG > 0" },
        { en: "ΔG < 0", es: "ΔG < 0", de: "ΔG < 0", nl: "ΔG < 0" },
        { en: "ΔG = ΔH", es: "ΔG = ΔH", de: "ΔG = ΔH", nl: "ΔG = ΔH" }
      ],
      correct: 0,
      explanation: {
        en: "At equilibrium, there is no net driving force for change, so ΔG = 0. This is the condition where forward and reverse reaction rates are equal, and the system has reached its most stable state under the given conditions.",
        es: "En equilibrio, no hay fuerza motriz neta para el cambio, por lo que ΔG = 0. Esta es la condición donde las velocidades de reacción directa e inversa son iguales, y el sistema ha alcanzado su estado más estable bajo las condiciones dadas.",
        de: "Im Gleichgewicht gibt es keine Nettotriebkraft für Veränderungen, daher ΔG = 0. Dies ist der Zustand, wo Vorwärts- und Rückwärtsreaktionsgeschwindigkeiten gleich sind und das System seinen stabilsten Zustand unter den gegebenen Bedingungen erreicht hat.",
        nl: "In evenwicht is er geen netto drijvende kracht voor verandering, dus ΔG = 0. Dit is de conditie waar voorwaartse en achterwaartse reactie snelheden gelijk zijn, en het systeem zijn meest stabiele toestand heeft bereikt onder de gegeven omstandigheden."
      }
    },
    {
      question: {
        en: "In electroplating, which electrode gains mass?",
        es: "En el galvanoplastia, ¿qué electrodo gana masa?",
        de: "Beim Galvanisieren, welche Elektrode nimmt an Masse zu?",
        nl: "Bij galvaniseren, welke elektrode krijgt massa?"
      },
      options: [
        { en: "Cathode", es: "Cátodo", de: "Kathode", nl: "Kathode" },
        { en: "Anode", es: "Ánodo", de: "Anode", nl: "Anode" },
        { en: "Both electrodes equally", es: "Ambos electrodos por igual", de: "Beide Elektroden gleich", nl: "Beide elektroden gelijk" },
        { en: "Neither electrode", es: "Ningún electrodo", de: "Keine Elektrode", nl: "Geen van beide elektroden" }
      ],
      correct: 0,
      explanation: {
        en: "In electroplating, metal ions are reduced at the cathode (negative terminal), depositing solid metal and increasing the cathode's mass. The anode typically dissolves, providing metal ions to the solution and losing mass.",
        es: "En el galvanoplastia, los iones metálicos se reducen en el cátodo (terminal negativo), depositando metal sólido y aumentando la masa del cátodo. El ánodo típicamente se disuelve, proporcionando iones metálicos a la solución y perdiendo masa.",
        de: "Beim Galvanisieren werden Metallionen an der Kathode (negativer Pol) reduziert, wodurch festes Metall abgeschieden wird und die Masse der Kathode zunimmt. Die Anode löst sich typischerweise auf und stellt Metallionen für die Lösung bereit, wodurch sie an Masse verliert.",
        nl: "Bij galvaniseren worden metaal ionen gereduceerd bij de kathode (negatieve pool), waarbij vast metaal wordt afgezet en de massa van de kathode toeneemt. De anode lost typisch op, waarbij metaal ionen aan de oplossing worden toegevoegd en massa verliest."
      }
    },
    {
      question: {
        en: "What is the standard hydrogen electrode (SHE) potential by definition?",
        es: "¿Cuál es el potencial del electrodo estándar de hidrógeno (SHE) por definición?",
        de: "Wie groß ist das Potential der Standard-Wasserstoff-Elektrode (SHE) per Definition?",
        nl: "Wat is de standaard waterstof elektrode (SHE) potentiaal per definitie?"
      },
      options: [
        { en: "0.00 V", es: "0,00 V", de: "0,00 V", nl: "0,00 V" },
        { en: "+1.00 V", es: "+1,00 V", de: "+1,00 V", nl: "+1,00 V" },
        { en: "-1.00 V", es: "-1,00 V", de: "-1,00 V", nl: "-1,00 V" },
        { en: "+0.76 V", es: "+0,76 V", de: "+0,76 V", nl: "+0,76 V" }
      ],
      correct: 0,
      explanation: {
        en: "The standard hydrogen electrode is defined as the reference point with E° = 0.00 V. All other electrode potentials are measured relative to this standard, making it the universal reference for electrochemical potential measurements.",
        es: "El electrodo estándar de hidrógeno se define como el punto de referencia con E° = 0,00 V. Todos los otros potenciales de electrodo se miden relativos a este estándar, convirtiéndolo en la referencia universal para mediciones de potencial electroquímico.",
        de: "Die Standard-Wasserstoff-Elektrode ist als Bezugspunkt mit E° = 0,00 V definiert. Alle anderen Elektrodenpotentiale werden relativ zu diesem Standard gemessen, wodurch sie zur universellen Referenz für elektrochemische Potentialmessungen wird.",
        nl: "De standaard waterstof elektrode is gedefinieerd als het referentiepunt met E° = 0,00 V. Alle andere elektrode potentialen worden gemeten ten opzichte van deze standaard, waardoor het de universele referentie wordt voor elektrochemische potentiaal metingen."
      }
    },
    {
      question: {
        en: "Which process requires the input of electrical energy?",
        es: "¿Qué proceso requiere la entrada de energía eléctrica?",
        de: "Welcher Prozess erfordert die Zufuhr elektrischer Energie?",
        nl: "Welk proces vereist de invoer van elektrische energie?"
      },
      options: [
        { en: "Electrolysis", es: "Electrólisis", de: "Elektrolyse", nl: "Elektrolyse" },
        { en: "Galvanic cell operation", es: "Operación de celda galvánica", de: "Galvanische Zellenfunktion", nl: "Galvanische cel werking" },
        { en: "Battery discharge", es: "Descarga de batería", de: "Batterieentladung", nl: "Batterij ontlading" },
        { en: "Fuel cell operation", es: "Operación de celda de combustible", de: "Brennstoffzellenfunktion", nl: "Brandstofcel werking" }
      ],
      correct: 0,
      explanation: {
        en: "Electrolysis is a non-spontaneous process (ΔG > 0) that requires external electrical energy to drive the reaction. Galvanic cells, batteries, and fuel cells all generate electrical energy from spontaneous chemical reactions.",
        es: "La electrólisis es un proceso no espontáneo (ΔG > 0) que requiere energía eléctrica externa para impulsar la reacción. Las celdas galvánicas, baterías y celdas de combustible generan energía eléctrica a partir de reacciones químicas espontáneas.",
        de: "Elektrolyse ist ein nicht spontaner Prozess (ΔG > 0), der externe elektrische Energie benötigt, um die Reaktion anzutreiben. Galvanische Zellen, Batterien und Brennstoffzellen erzeugen alle elektrische Energie aus spontanen chemischen Reaktionen.",
        nl: "Elektrolyse is een niet-spontaan proces (ΔG > 0) dat externe elektrische energie nodig heeft om de reactie aan te drijven. Galvanische cellen, batterijen en brandstofcellen genereren allemaal elektrische energie uit spontane chemische reacties."
      }
    },
    {
      question: {
        en: "What happens to entropy during a spontaneous mixing of two gases?",
        es: "¿Qué sucede con la entropía durante la mezcla espontánea de dos gases?",
        de: "Was passiert mit der Entropie bei der spontanen Mischung zweier Gase?",
        nl: "Wat gebeurt er met entropie tijdens spontane menging van twee gassen?"
      },
      options: [
        { en: "Entropy increases", es: "La entropía aumenta", de: "Entropie nimmt zu", nl: "Entropie neemt toe" },
        { en: "Entropy decreases", es: "La entropía disminuye", de: "Entropie nimmt ab", nl: "Entropie neemt af" },
        { en: "Entropy remains constant", es: "La entropía permanece constante", de: "Entropie bleibt konstant", nl: "Entropie blijft constant" },
        { en: "Entropy becomes zero", es: "La entropía se vuelve cero", de: "Entropie wird null", nl: "Entropie wordt nul" }
      ],
      correct: 0,
      explanation: {
        en: "Spontaneous mixing increases entropy because the number of available microstates increases dramatically when gases occupy the entire volume rather than being separated. This is driven by the statistical tendency toward maximum disorder.",
        es: "La mezcla espontánea aumenta la entropía porque el número de microestados disponibles aumenta dramáticamente cuando los gases ocupan todo el volumen en lugar de estar separados. Esto es impulsado por la tendencia estadística hacia el máximo desorden.",
        de: "Spontane Mischung erhöht die Entropie, da die Anzahl verfügbarer Mikrozustände dramatisch zunimmt, wenn Gase das gesamte Volumen einnehmen, anstatt getrennt zu sein. Dies wird durch die statistische Tendenz zur maximalen Unordnung angetrieben.",
        nl: "Spontane menging verhoogt entropie omdat het aantal beschikbare microtoestanden dramatisch toeneemt wanneer gassen het gehele volume innemen in plaats van gescheiden te zijn. Dit wordt gedreven door de statistische neiging naar maximale wanorde."
      }
    },
    {
      question: {
        en: "In a fuel cell, what is the typical product at the cathode when oxygen is the oxidant?",
        es: "En una celda de combustible, ¿cuál es el producto típico en el cátodo cuando el oxígeno es el oxidante?",
        de: "In einer Brennstoffzelle, was ist das typische Produkt an der Kathode, wenn Sauerstoff das Oxidationsmittel ist?",
        nl: "In een brandstofcel, wat is het typische product bij de kathode wanneer zuurstof het oxidatiemiddel is?"
      },
      options: [
        { en: "H₂O", es: "H₂O", de: "H₂O", nl: "H₂O" },
        { en: "O₂", es: "O₂", de: "O₂", nl: "O₂" },
        { en: "H₂", es: "H₂", de: "H₂", nl: "H₂" },
        { en: "CO₂", es: "CO₂", de: "CO₂", nl: "CO₂" }
      ],
      correct: 0,
      explanation: {
        en: "At the cathode, oxygen is reduced by combining with protons (H⁺) and electrons to form water: O₂ + 4H⁺ + 4e⁻ → 2H₂O. This is the key reaction that makes hydrogen fuel cells environmentally clean, producing only water as a byproduct.",
        es: "En el cátodo, el oxígeno se reduce combinándose con protones (H⁺) y electrones para formar agua: O₂ + 4H⁺ + 4e⁻ → 2H₂O. Esta es la reacción clave que hace que las celdas de combustible de hidrógeno sean ambientalmente limpias, produciendo solo agua como subproducto.",
        de: "An der Kathode wird Sauerstoff reduziert, indem er sich mit Protonen (H⁺) und Elektronen zu Wasser verbindet: O₂ + 4H⁺ + 4e⁻ → 2H₂O. Dies ist die Schlüsselreaktion, die Wasserstoff-Brennstoffzellen umweltfreundlich macht und nur Wasser als Nebenprodukt erzeugt.",
        nl: "Bij de kathode wordt zuurstof gereduceerd door te combineren met protonen (H⁺) en elektronen om water te vormen: O₂ + 4H⁺ + 4e⁻ → 2H₂O. Dit is de sleutelreactie die waterstof brandstofcellen milieuvriendelijk maakt, waarbij alleen water als bijproduct wordt geproduceerd."
      }
    },
    {
      question: {
        en: "What is the relationship between the rate constant k and temperature T according to the Arrhenius equation?",
        es: "¿Cuál es la relación entre la constante de velocidad k y la temperatura T según la ecuación de Arrhenius?",
        de: "Wie ist die Beziehung zwischen der Geschwindigkeitskonstante k und der Temperatur T nach der Arrhenius-Gleichung?",
        nl: "Wat is de relatie tussen de snelheidsconstante k en temperatuur T volgens de Arrhenius vergelijking?"
      },
      options: [
        { en: "k increases exponentially with T", es: "k aumenta exponencialmente con T", de: "k nimmt exponentiell mit T zu", nl: "k neemt exponentieel toe met T" },
        { en: "k decreases exponentially with T", es: "k disminuye exponencialmente con T", de: "k nimmt exponentiell mit T ab", nl: "k neemt exponentieel af met T" },
        { en: "k increases linearly with T", es: "k aumenta linealmente con T", de: "k nimmt linear mit T zu", nl: "k neemt lineair toe met T" },
        { en: "k is independent of T", es: "k es independiente de T", de: "k ist unabhängig von T", nl: "k is onafhankelijk van T" }
      ],
      correct: 0,
      explanation: {
        en: "The Arrhenius equation k = Ae^(-Ea/RT) shows that k increases exponentially with temperature. Higher temperatures provide more molecules with energy ≥ Ea (activation energy), dramatically increasing reaction rates.",
        es: "La ecuación de Arrhenius k = Ae^(-Ea/RT) muestra que k aumenta exponencialmente con la temperatura. Las temperaturas más altas proporcionan más moléculas con energía ≥ Ea (energía de activación), aumentando dramáticamente las velocidades de reacción.",
        de: "Die Arrhenius-Gleichung k = Ae^(-Ea/RT) zeigt, dass k exponentiell mit der Temperatur zunimmt. Höhere Temperaturen stellen mehr Moleküle mit Energie ≥ Ea (Aktivierungsenergie) bereit, was die Reaktionsgeschwindigkeiten dramatisch erhöht.",
        nl: "De Arrhenius vergelijking k = Ae^(-Ea/RT) toont dat k exponentieel toeneemt met temperatuur. Hogere temperaturen zorgen voor meer moleculen met energie ≥ Ea (activeringsenergie), waardoor reactiesnelheden dramatisch toenemen."
      }
    },
    {
      question: {
        en: "Which statement about reversible and irreversible processes is correct?",
        es: "¿Cuál afirmación sobre procesos reversibles e irreversibles es correcta?",
        de: "Welche Aussage über reversible und irreversible Prozesse ist korrekt?",
        nl: "Welke bewering over reversibele en irreversibele processen is correct?"
      },
      options: [
        { en: "Reversible processes proceed infinitely slowly through equilibrium states", es: "Los procesos reversibles proceden infinitamente lentos a través de estados de equilibrio", de: "Reversible Prozesse verlaufen unendlich langsam durch Gleichgewichtszustände", nl: "Reversibele processen verlopen oneindig langzaam door evenwichtstoestanden" },
        { en: "Irreversible processes can be undone without external work", es: "Los procesos irreversibles pueden deshacerse sin trabajo externo", de: "Irreversible Prozesse können ohne externe Arbeit rückgängig gemacht werden", nl: "Irreversibele processen kunnen ongedaan gemaakt worden zonder extern werk" },
        { en: "All real processes are reversible", es: "Todos los procesos reales son reversibles", de: "Alle realen Prozesse sind reversibel", nl: "Alle echte processen zijn reversibel" },
        { en: "Reversible processes generate more entropy than irreversible ones", es: "Los procesos reversibles generan más entropía que los irreversibles", de: "Reversible Prozesse erzeugen mehr Entropie als irreversible", nl: "Reversibele processen genereren meer entropie dan irreversibele" }
      ],
      correct: 0,
      explanation: {
        en: "Reversible processes are idealized processes that proceed infinitely slowly through a series of equilibrium states, allowing the system to be reversed with no net change in universe entropy. Real processes are always irreversible and generate entropy.",
        es: "Los procesos reversibles son procesos idealizados que proceden infinitamente lentos a través de una serie de estados de equilibrio, permitiendo que el sistema sea revertido sin cambio neto en la entropía del universo. Los procesos reales son siempre irreversibles y generan entropía.",
        de: "Reversible Prozesse sind idealisierte Prozesse, die unendlich langsam durch eine Reihe von Gleichgewichtszuständen verlaufen und es dem System ermöglichen, ohne Nettoänderung der Universentropie umgekehrt zu werden. Reale Prozesse sind immer irreversibel und erzeugen Entropie.",
        nl: "Reversibele processen zijn geïdealiseerde processen die oneindig langzaam verlopen door een reeks evenwichtstoestanden, waardoor het systeem kan worden omgekeerd zonder netto verandering in universum entropie. Echte processen zijn altijd irreversibel en genereren entropie."
      }
    },
    {
      question: {
        en: "What determines the maximum work obtainable from a thermodynamic process at constant temperature and pressure?",
        es: "¿Qué determina el trabajo máximo obtenible de un proceso termodinámico a temperatura y presión constantes?",
        de: "Was bestimmt die maximale Arbeit, die aus einem thermodynamischen Prozess bei konstanter Temperatur und Druck gewonnen werden kann?",
        nl: "Wat bepaalt het maximale werk dat verkrijgbaar is uit een thermodynamisch proces bij constante temperatuur en druk?"
      },
      options: [
        { en: "The negative of Gibbs free energy change (-ΔG)", es: "El negativo del cambio de energía libre de Gibbs (-ΔG)", de: "Das Negative der Gibbs-Energieänderung (-ΔG)", nl: "Het negatieve van de Gibbs vrije energie verandering (-ΔG)" },
        { en: "The enthalpy change (ΔH)", es: "El cambio de entalpía (ΔH)", de: "Die Enthalpieänderung (ΔH)", nl: "De enthalpie verandering (ΔH)" },
        { en: "The entropy change (ΔS)", es: "El cambio de entropía (ΔS)", de: "Die Entropieänderung (ΔS)", nl: "De entropie verandering (ΔS)" },
        { en: "The internal energy change (ΔU)", es: "El cambio de energía interna (ΔU)", de: "Die innere Energieänderung (ΔU)", nl: "De interne energie verandering (ΔU)" }
      ],
      correct: 0,
      explanation: {
        en: "At constant T and P, the maximum work obtainable from a spontaneous process is -ΔG. This represents the maximum useful work that can be extracted, with any remaining energy lost as heat to maintain constant temperature.",
        es: "A T y P constantes, el trabajo máximo obtenible de un proceso espontáneo es -ΔG. Esto representa el trabajo útil máximo que se puede extraer, con cualquier energía restante perdida como calor para mantener la temperatura constante.",
        de: "Bei konstantem T und P ist die maximale Arbeit, die aus einem spontanen Prozess gewonnen werden kann, -ΔG. Dies stellt die maximale nutzbare Arbeit dar, die extrahiert werden kann, wobei jede verbleibende Energie als Wärme verloren geht, um die konstante Temperatur zu halten.",
        nl: "Bij constante T en P is het maximale werk dat verkrijgbaar is uit een spontaan proces -ΔG. Dit vertegenwoordigt het maximale nuttige werk dat kan worden geëxtraheerd, waarbij eventuele resterende energie verloren gaat als warmte om constante temperatuur te behouden."
      }
    },
    {
      question: {
        en: "In a concentration cell, when does the cell potential become zero?",
        es: "En una celda de concentración, ¿cuándo el potencial de celda se vuelve cero?",
        de: "In einer Konzentrationszelle, wann wird das Zellpotential null?",
        nl: "In een concentratie cel, wanneer wordt de cel potentiaal nul?"
      },
      options: [
        { en: "When concentrations in both half-cells become equal", es: "Cuando las concentraciones en ambas semiceldas se vuelven iguales", de: "Wenn die Konzentrationen in beiden Halbzellen gleich werden", nl: "Wanneer concentraties in beide halve cellen gelijk worden" },
        { en: "When temperature reaches 0 K", es: "Cuando la temperatura alcanza 0 K", de: "Wenn die Temperatur 0 K erreicht", nl: "Wanneer temperatuur 0 K bereikt" },
        { en: "When pressure becomes zero", es: "Cuando la presión se vuelve cero", de: "Wenn der Druck null wird", nl: "Wanneer druk nul wordt" },
        { en: "When the salt bridge is removed", es: "Cuando se remueve el puente salino", de: "Wenn die Salzbrücke entfernt wird", nl: "Wanneer de zoutbrug wordt weggenomen" }
      ],
      correct: 0,
      explanation: {
        en: "In a concentration cell, E = -(RT/nF)ln(Q) where Q is the concentration ratio. When concentrations equalize, Q = 1, ln(Q) = 0, and E = 0. The cell reaches equilibrium with no driving force for further electron flow.",
        es: "En una celda de concentración, E = -(RT/nF)ln(Q) donde Q es la relación de concentración. Cuando las concentraciones se igualan, Q = 1, ln(Q) = 0, y E = 0. La celda alcanza el equilibrio sin fuerza motriz para más flujo de electrones.",
        de: "In einer Konzentrationszelle ist E = -(RT/nF)ln(Q), wobei Q das Konzentrationsverhältnis ist. Wenn sich Konzentrationen angleichen, ist Q = 1, ln(Q) = 0, und E = 0. Die Zelle erreicht Gleichgewicht ohne treibende Kraft für weiteren Elektronenfluss.",
        nl: "In een concentratie cel is E = -(RT/nF)ln(Q) waar Q de concentratie verhouding is. Wanneer concentraties gelijk worden, is Q = 1, ln(Q) = 0, en E = 0. De cel bereikt evenwicht zonder drijvende kracht voor verdere elektronenstroom."
      }
    },
    {
      question: {
        en: "What is the primary driving force for all spontaneous processes?",
        es: "¿Cuál es la fuerza motriz principal para todos los procesos espontáneos?",
        de: "Was ist die primäre treibende Kraft für alle spontanen Prozesse?",
        nl: "Wat is de primaire drijvende kracht voor alle spontane processen?"
      },
      options: [
        { en: "Increase in total entropy of the universe", es: "Aumento en la entropía total del universo", de: "Zunahme der Gesamtentropie des Universums", nl: "Toename van totale entropie van het universum" },
        { en: "Decrease in enthalpy", es: "Disminución de entalpía", de: "Abnahme der Enthalpie", nl: "Afname van enthalpie" },
        { en: "Increase in temperature", es: "Aumento de temperatura", de: "Temperaturanstieg", nl: "Temperatuurstijging" },
        { en: "Decrease in pressure", es: "Disminución de presión", de: "Druckabnahme", nl: "Drukafname" }
      ],
      correct: 0,
      explanation: {
        en: "The Second Law of Thermodynamics states that all spontaneous processes result in an increase in the total entropy of the universe. This fundamental principle drives the direction of all natural processes and explains why certain changes occur without external intervention.",
        es: "La Segunda Ley de la Termodinámica establece que todos los procesos espontáneos resultan en un aumento de la entropía total del universo. Este principio fundamental impulsa la dirección de todos los procesos naturales y explica por qué ocurren ciertos cambios sin intervención externa.",
        de: "Das Zweite Hauptgesetz der Thermodynamik besagt, dass alle spontanen Prozesse zu einer Zunahme der Gesamtentropie des Universums führen. Dieses grundlegende Prinzip bestimmt die Richtung aller natürlichen Prozesse und erklärt, warum bestimmte Änderungen ohne äußeren Eingriff auftreten.",
        nl: "De Tweede Hoofdwet van de Thermodynamica stelt dat alle spontane processen resulteren in een toename van de totale entropie van het universum. Dit fundamentele principe drijft de richting van alle natuurlijke processen aan en verklaart waarom bepaalde veranderingen optreden zonder externe interventie."
      },
    {
      question: {
        en: "What is the relationship between Gibbs free energy and equilibrium constant?",
        es: "¿Cuál es la relación entre la energía libre de Gibbs y la constante de equilibrio?",
        de: "Was ist die Beziehung zwischen Gibbs-freier Energie und Gleichgewichtskonstante?",
        nl: "Wat is de relatie tussen Gibbs vrije energie en evenwichtsconstante?"
      },
      options: [
        { en: "ΔG° = -RT ln K", es: "ΔG° = -RT ln K", de: "ΔG° = -RT ln K", nl: "ΔG° = -RT ln K" },
        { en: "ΔG° = RT ln K", es: "ΔG° = RT ln K", de: "ΔG° = RT ln K", nl: "ΔG° = RT ln K" },
        { en: "ΔG° = -RT/ln K", es: "ΔG° = -RT/ln K", de: "ΔG° = -RT/ln K", nl: "ΔG° = -RT/ln K" },
        { en: "ΔG° = RT/ln K", es: "ΔG° = RT/ln K", de: "ΔG° = RT/ln K", nl: "ΔG° = RT/ln K" }
      ],
      correct: 0,
      explanation: {
        en: "The fundamental relationship between standard Gibbs free energy change and equilibrium constant is ΔG° = -RT ln K. When ΔG° < 0, K > 1 (products favored); when ΔG° > 0, K < 1 (reactants favored); when ΔG° = 0, K = 1 (equal concentrations).",
        es: "La relación fundamental entre el cambio de energía libre de Gibbs estándar y la constante de equilibrio es ΔG° = -RT ln K. Cuando ΔG° < 0, K > 1 (productos favorecidos); cuando ΔG° > 0, K < 1 (reactivos favorecidos); cuando ΔG° = 0, K = 1 (concentraciones iguales).",
        de: "Die fundamentale Beziehung zwischen Standard-Gibbs-freier Energieänderung und Gleichgewichtskonstante ist ΔG° = -RT ln K. Wenn ΔG° < 0, K > 1 (Produkte bevorzugt); wenn ΔG° > 0, K < 1 (Reaktanten bevorzugt); wenn ΔG° = 0, K = 1 (gleiche Konzentrationen).",
        nl: "De fundamentele relatie tussen standaard Gibbs vrije energie verandering en evenwichtsconstante is ΔG° = -RT ln K. Wanneer ΔG° < 0, K > 1 (producten begunstigd); wanneer ΔG° > 0, K < 1 (reactanten begunstigd); wanneer ΔG° = 0, K = 1 (gelijke concentraties)."
      }
    },
    {
      question: {
        en: "What is the Nernst equation and its significance in electrochemistry?",
        es: "¿Qué es la ecuación de Nernst y su significancia en electroquímica?",
        de: "Was ist die Nernst-Gleichung und ihre Bedeutung in der Elektrochemie?",
        nl: "Wat is de Nernst vergelijking en zijn betekenis in elektrochemie?"
      },
      options: [
        { en: "E = E° - (RT/nF) ln Q; relates cell potential to concentrations", es: "E = E° - (RT/nF) ln Q; relaciona el potencial de celda con concentraciones", de: "E = E° - (RT/nF) ln Q; verknüpft Zellpotential mit Konzentrationen", nl: "E = E° - (RT/nF) ln Q; relateert cel potentiaal aan concentraties" },
        { en: "E = E° + (RT/nF) ln Q", es: "E = E° + (RT/nF) ln Q", de: "E = E° + (RT/nF) ln Q", nl: "E = E° + (RT/nF) ln Q" },
        { en: "Only applies at standard conditions", es: "Solo se aplica en condiciones estándar", de: "Gilt nur unter Standardbedingungen", nl: "Geldt alleen onder standaard omstandigheden" },
        { en: "Independent of temperature", es: "Independiente de la temperatura", de: "Temperaturunabhängig", nl: "Onafhankelijk van temperatuur" }
      ],
      correct: 0,
      explanation: {
        en: "The Nernst equation E = E° - (RT/nF) ln Q calculates cell potential under non-standard conditions. E° is standard potential, R is gas constant, T is temperature, n is electrons transferred, F is Faraday constant, and Q is reaction quotient. It shows how potential varies with concentration.",
        es: "La ecuación de Nernst E = E° - (RT/nF) ln Q calcula el potencial de celda bajo condiciones no estándar. E° es potencial estándar, R es constante de gas, T es temperatura, n es electrones transferidos, F es constante de Faraday, y Q es cociente de reacción. Muestra cómo el potencial varía con concentración.",
        de: "Die Nernst-Gleichung E = E° - (RT/nF) ln Q berechnet Zellpotential unter Nicht-Standard-Bedingungen. E° ist Standardpotential, R ist Gaskonstante, T ist Temperatur, n ist übertragene Elektronen, F ist Faraday-Konstante, und Q ist Reaktionsquotient. Sie zeigt, wie Potential mit Konzentration variiert.",
        nl: "De Nernst vergelijking E = E° - (RT/nF) ln Q berekent cel potentiaal onder niet-standaard omstandigheden. E° is standaard potentiaal, R is gasconstante, T is temperatuur, n is overgedragen elektronen, F is Faraday constante, en Q is reactie quotiënt. Het toont hoe potentiaal varieert met concentratie."
      }
    },
    {
      question: {
        en: "What is the difference between heat capacity at constant pressure (Cp) and constant volume (Cv)?",
        es: "¿Cuál es la diferencia entre capacidad calorífica a presión constante (Cp) y volumen constante (Cv)?",
        de: "Was ist der Unterschied zwischen Wärmekapazität bei konstantem Druck (Cp) und konstantem Volumen (Cv)?",
        nl: "Wat is het verschil tussen warmtecapaciteit bij constante druk (Cp) en constant volume (Cv)?"
      },
      options: [
        { en: "Cp > Cv because work is done during expansion at constant pressure; Cp - Cv = nR for ideal gases", es: "Cp > Cv porque se realiza trabajo durante expansión a presión constante; Cp - Cv = nR para gases ideales", de: "Cp > Cv weil Arbeit während Expansion bei konstantem Druck geleistet wird; Cp - Cv = nR für ideale Gase", nl: "Cp > Cv omdat werk wordt verricht tijdens expansie bij constante druk; Cp - Cv = nR voor ideale gassen" },
        { en: "Cp < Cv always", es: "Cp < Cv siempre", de: "Cp < Cv immer", nl: "Cp < Cv altijd" },
        { en: "Cp = Cv for all substances", es: "Cp = Cv para todas las sustancias", de: "Cp = Cv für alle Substanzen", nl: "Cp = Cv voor alle stoffen" },
        { en: "The difference depends only on molecular weight", es: "La diferencia depende solo del peso molecular", de: "Der Unterschied hängt nur vom Molekulargewicht ab", nl: "Het verschil hangt alleen af van molecuulgewicht" }
      ],
      correct: 0,
      explanation: {
        en: "At constant pressure, some heat goes into expansion work (PΔV), so more heat is needed for the same temperature rise compared to constant volume. For ideal gases, Cp - Cv = nR. This relationship reflects the fundamental difference in energy requirements for heating under different constraints.",
        es: "A presión constante, algo de calor va al trabajo de expansión (PΔV), así que se necesita más calor para el mismo aumento de temperatura comparado con volumen constante. Para gases ideales, Cp - Cv = nR. Esta relación refleja la diferencia fundamental en requerimientos energéticos para calentamiento bajo diferentes restricciones.",
        de: "Bei konstantem Druck geht etwas Wärme in Expansionsarbeit (PΔV), sodass mehr Wärme für denselben Temperaturanstieg im Vergleich zu konstantem Volumen benötigt wird. Für ideale Gase gilt Cp - Cv = nR. Diese Beziehung spiegelt den fundamentalen Unterschied in Energieanforderungen für Heizung unter verschiedenen Beschränkungen wider.",
        nl: "Bij constante druk gaat wat warmte naar expansie werk (PΔV), dus meer warmte is nodig voor dezelfde temperatuurstijging vergeleken met constant volume. Voor ideale gassen geldt Cp - Cv = nR. Deze relatie reflecteert het fundamentele verschil in energie vereisten voor verwarming onder verschillende beperkingen."
      }
    },
    {
      question: {
        en: "What is the concept of chemical potential and its role in phase equilibria?",
        es: "¿Qué es el concepto de potencial químico y su papel en equilibrios de fase?",
        de: "Was ist das Konzept des chemischen Potentials und seine Rolle in Phasengleichgewichten?",
        nl: "Wat is het concept van chemisch potentiaal en zijn rol in fase evenwichten?"
      },
      options: [
        { en: "Chemical potential is the partial molar Gibbs free energy; substances flow from high to low chemical potential until equilibrium", es: "El potencial químico es la energía libre de Gibbs molar parcial; las sustancias fluyen de alto a bajo potencial químico hasta equilibrio", de: "Chemisches Potential ist die partielle molare Gibbs-freie Energie; Substanzen fließen von hohem zu niedrigem chemischen Potential bis zum Gleichgewicht", nl: "Chemisch potentiaal is de partiële molaire Gibbs vrije energie; stoffen stromen van hoog naar laag chemisch potentiaal tot evenwicht" },
        { en: "Chemical potential is always constant in all phases", es: "El potencial químico es siempre constante en todas las fases", de: "Chemisches Potential ist immer konstant in allen Phasen", nl: "Chemisch potentiaal is altijd constant in alle fasen" },
        { en: "Only applies to pure substances", es: "Solo se aplica a sustancias puras", de: "Gilt nur für reine Substanzen", nl: "Geldt alleen voor pure stoffen" },
        { en: "Independent of temperature and pressure", es: "Independiente de temperatura y presión", de: "Unabhängig von Temperatur und Druck", nl: "Onafhankelijk van temperatuur en druk" }
      ],
      correct: 0,
      explanation: {
        en: "Chemical potential (μ) is the partial molar Gibbs free energy, representing the change in system energy when one mole of substance is added. At equilibrium, chemical potential of each component is equal in all phases. This drives phase transitions and determines distribution of substances between phases.",
        es: "El potencial químico (μ) es la energía libre de Gibbs molar parcial, representando el cambio en energía del sistema cuando se añade un mol de sustancia. En equilibrio, el potencial químico de cada componente es igual en todas las fases. Esto impulsa transiciones de fase y determina distribución de sustancias entre fases.",
        de: "Chemisches Potential (μ) ist die partielle molare Gibbs-freie Energie, die die Änderung der Systemenergie darstellt, wenn ein Mol Substanz hinzugefügt wird. Im Gleichgewicht ist das chemische Potential jeder Komponente in allen Phasen gleich. Dies treibt Phasenübergänge an und bestimmt die Verteilung von Substanzen zwischen Phasen.",
        nl: "Chemisch potentiaal (μ) is de partiële molaire Gibbs vrije energie, representerend de verandering in systeem energie wanneer één mol stof wordt toegevoegd. Bij evenwicht is het chemisch potentiaal van elke component gelijk in alle fasen. Dit drijft fase overgangen aan en bepaalt verdeling van stoffen tussen fasen."
      }
    },
    {
      question: {
        en: "What is the difference between reversible and irreversible processes in thermodynamics?",
        es: "¿Cuál es la diferencia entre procesos reversibles e irreversibles en termodinámica?",
        de: "Was ist der Unterschied zwischen reversiblen und irreversiblen Prozessen in der Thermodynamik?",
        nl: "Wat is het verschil tussen reversibele en irreversibele processen in thermodynamica?"
      },
      options: [
        { en: "Reversible processes are infinitely slow with maximum work output; irreversible processes are finite-time with entropy increase", es: "Procesos reversibles son infinitamente lentos con máximo trabajo de salida; procesos irreversibles son de tiempo finito con aumento de entropía", de: "Reversible Prozesse sind unendlich langsam mit maximaler Arbeitsausbeute; irreversible Prozesse sind endlich-zeitlich mit Entropiezunahme", nl: "Reversibele processen zijn oneindig langzaam met maximale werk output; irreversibele processen zijn eindige-tijd met entropie toename" },
        { en: "Reversible processes always release more heat", es: "Los procesos reversibles siempre liberan más calor", de: "Reversible Prozesse setzen immer mehr Wärme frei", nl: "Reversibele processen geven altijd meer warmte af" },
        { en: "All real processes are reversible", es: "Todos los procesos reales son reversibles", de: "Alle realen Prozesse sind reversibel", nl: "Alle echte processen zijn reversibel" },
        { en: "Irreversible processes violate thermodynamic laws", es: "Los procesos irreversibles violan las leyes termodinámicas", de: "Irreversible Prozesse verletzen thermodynamische Gesetze", nl: "Irreversibele processen schenden thermodynamische wetten" }
      ],
      correct: 0,
      explanation: {
        en: "Reversible processes are theoretical ideals occurring infinitely slowly through equilibrium states, allowing maximum work extraction and no entropy increase. Irreversible processes are real processes occurring in finite time with friction, heat conduction, or other dissipative effects, always increasing total entropy.",
        es: "Los procesos reversibles son ideales teóricos que ocurren infinitamente lentamente a través de estados de equilibrio, permitiendo extracción máxima de trabajo y sin aumento de entropía. Los procesos irreversibles son procesos reales que ocurren en tiempo finito con fricción, conducción de calor u otros efectos disipativos, siempre aumentando entropía total.",
        de: "Reversible Prozesse sind theoretische Ideale, die unendlich langsam durch Gleichgewichtszustände ablaufen und maximale Arbeitsausbeute ohne Entropiezunahme ermöglichen. Irreversible Prozesse sind reale Prozesse, die in endlicher Zeit mit Reibung, Wärmeleitung oder anderen dissipativen Effekten ablaufen und immer die Gesamtentropie erhöhen.",
        nl: "Reversibele processen zijn theoretische idealen die oneindig langzaam verlopen door evenwichtstoestanden, waardoor maximale werk extractie mogelijk is zonder entropie toename. Irreversibele processen zijn echte processen die in eindige tijd verlopen met wrijving, warmte geleiding of andere dissipatieve effecten, waarbij altijd totale entropie toeneemt."
      }
    },
    {
      question: {
        en: "What is the concept of fugacity and its relationship to activity?",
        es: "¿Qué es el concepto de fugacidad y su relación con la actividad?",
        de: "Was ist das Konzept der Fugazität und ihre Beziehung zur Aktivität?",
        nl: "Wat is het concept van fugaciteit en zijn relatie tot activiteit?"
      },
      options: [
        { en: "Fugacity is the effective pressure of a real gas; activity is the effective concentration corrected for non-ideality", es: "La fugacidad es la presión efectiva de un gas real; la actividad es la concentración efectiva corregida por no-idealidad", de: "Fugazität ist der effektive Druck eines realen Gases; Aktivität ist die effektive Konzentration korrigiert für Nicht-Idealität", nl: "Fugaciteit is de effectieve druk van een echt gas; activiteit is de effectieve concentratie gecorrigeerd voor niet-idealiteit" },
        { en: "Fugacity equals pressure for all gases", es: "La fugacidad iguala la presión para todos los gases", de: "Fugazität gleicht Druck für alle Gase", nl: "Fugaciteit is gelijk aan druk voor alle gassen" },
        { en: "Activity is always equal to concentration", es: "La actividad siempre es igual a la concentración", de: "Aktivität ist immer gleich Konzentration", nl: "Activiteit is altijd gelijk aan concentratie" },
        { en: "Both concepts only apply to solids", es: "Ambos conceptos solo se aplican a sólidos", de: "Beide Konzepte gelten nur für Feststoffe", nl: "Beide concepten gelden alleen voor vaste stoffen" }
      ],
      correct: 0,
      explanation: {
        en: "Fugacity (f) is the effective pressure that makes thermodynamic equations valid for real gases, related to pressure by fugacity coefficient (γ = f/P). Activity (a) is the effective concentration accounting for intermolecular interactions, related to concentration by activity coefficient. Both correct for deviations from ideal behavior.",
        es: "La fugacidad (f) es la presión efectiva que hace válidas las ecuaciones termodinámicas para gases reales, relacionada con la presión por coeficiente de fugacidad (γ = f/P). La actividad (a) es la concentración efectiva considerando interacciones intermoleculares, relacionada con concentración por coeficiente de actividad. Ambas corrigen desviaciones del comportamiento ideal.",
        de: "Fugazität (f) ist der effektive Druck, der thermodynamische Gleichungen für reale Gase gültig macht, durch Fugazitätskoeffizient mit Druck verbunden (γ = f/P). Aktivität (a) ist die effektive Konzentration unter Berücksichtigung intermolekularer Wechselwirkungen, durch Aktivitätskoeffizient mit Konzentration verbunden. Beide korrigieren Abweichungen von idealem Verhalten.",
        nl: "Fugaciteit (f) is de effectieve druk die thermodynamische vergelijkingen geldig maakt voor echte gassen, gerelateerd aan druk door fugaciteitscoëfficiënt (γ = f/P). Activiteit (a) is de effectieve concentratie rekening houdend met intermoleculaire interacties, gerelateerd aan concentratie door activiteitscoëfficiënt. Beide corrigeren voor afwijkingen van ideaal gedrag."
      }
    },
    {
      question: {
        en: "What is the Carnot cycle and its significance in thermodynamics?",
        es: "¿Qué es el ciclo de Carnot y su significancia en termodinámica?",
        de: "Was ist der Carnot-Zyklus und seine Bedeutung in der Thermodynamik?",
        nl: "Wat is de Carnot cyclus en zijn betekenis in thermodynamica?"
      },
      options: [
        { en: "A theoretical reversible heat engine cycle with maximum possible efficiency η = 1 - Tc/Th between two thermal reservoirs", es: "Un ciclo teórico de máquina térmica reversible con máxima eficiencia posible η = 1 - Tc/Th entre dos reservorios térmicos", de: "Ein theoretischer reversibler Wärmemaschinenzyklus mit maximal möglicher Effizienz η = 1 - Tc/Th zwischen zwei Wärmereservoirs", nl: "Een theoretische reversibele warmtemotor cyclus met maximaal mogelijke efficiëntie η = 1 - Tc/Th tussen twee thermische reservoirs" },
        { en: "Always has 100% efficiency", es: "Siempre tiene 100% de eficiencia", de: "Hat immer 100% Effizienz", nl: "Heeft altijd 100% efficiëntie" },
        { en: "Only works with ideal gases", es: "Solo funciona con gases ideales", de: "Funktioniert nur mit idealen Gasen", nl: "Werkt alleen met ideale gassen" },
        { en: "Is the least efficient possible cycle", es: "Es el ciclo menos eficiente posible", de: "Ist der am wenigsten effiziente mögliche Zyklus", nl: "Is de minst efficiënte mogelijke cyclus" }
      ],
      correct: 0,
      explanation: {
        en: "The Carnot cycle consists of two isothermal and two adiabatic reversible steps, representing the most efficient heat engine between two reservoirs. Its efficiency η = 1 - Tc/Th depends only on temperatures, establishing the theoretical limit for all heat engines and defining thermodynamic temperature scale.",
        es: "El ciclo de Carnot consiste en dos pasos isotérmicos y dos adiabáticos reversibles, representando la máquina térmica más eficiente entre dos reservorios. Su eficiencia η = 1 - Tc/Th depende solo de temperaturas, estableciendo el límite teórico para todas las máquinas térmicas y definiendo escala de temperatura termodinámica.",
        de: "Der Carnot-Zyklus besteht aus zwei isothermen und zwei adiabatischen reversiblen Schritten und stellt die effizienteste Wärmemaschine zwischen zwei Reservoirs dar. Seine Effizienz η = 1 - Tc/Th hängt nur von Temperaturen ab, etabliert die theoretische Grenze für alle Wärmemaschinen und definiert die thermodynamische Temperaturskala.",
        nl: "De Carnot cyclus bestaat uit twee isothermische en twee adiabatische reversibele stappen, representerend de meest efficiënte warmtemotor tussen twee reservoirs. Zijn efficiëntie η = 1 - Tc/Th hangt alleen af van temperaturen, stellend de theoretische limiet vast voor alle warmtemotoren en definieert thermodynamische temperatuurschaal."
      }
    },
    {
      question: {
        en: "What is the concept of electrochemical potential and its role in membrane transport?",
        es: "¿Qué es el concepto de potencial electroquímico y su papel en el transporte de membrana?",
        de: "Was ist das Konzept des elektrochemischen Potentials und seine Rolle im Membrantransport?",
        nl: "Wat is het concept van elektrochemisch potentiaal en zijn rol in membraan transport?"
      },
      options: [
        { en: "Electrochemical potential combines chemical potential and electrical potential; drives ion transport across membranes", es: "El potencial electroquímico combina potencial químico y potencial eléctrico; impulsa transporte iónico a través de membranas", de: "Elektrochemisches Potential kombiniert chemisches Potential und elektrisches Potential; treibt Ionentransport über Membranen an", nl: "Elektrochemisch potentiaal combineert chemisch potentiaal en elektrisch potentiaal; drijft ion transport over membranen aan" },
        { en: "Only considers concentration gradients", es: "Solo considera gradientes de concentración", de: "Berücksichtigt nur Konzentrationsgradienten", nl: "Houdt alleen rekening met concentratiegradiënten" },
        { en: "Is identical to chemical potential", es: "Es idéntico al potencial químico", de: "Ist identisch mit chemischem Potential", nl: "Is identiek aan chemisch potentiaal" },
        { en: "Only applies to neutral molecules", es: "Solo se aplica a moléculas neutras", de: "Gilt nur für neutrale Moleküle", nl: "Geldt alleen voor neutrale moleculen" }
      ],
      correct: 0,
      explanation: {
        en: "Electrochemical potential (μ̃) equals chemical potential (μ) plus electrical potential energy (zFφ), where z is charge, F is Faraday constant, and φ is electrical potential. This drives ion movement across membranes, combining concentration and electrical gradients in biological systems.",
        es: "El potencial electroquímico (μ̃) iguala el potencial químico (μ) más energía potencial eléctrica (zFφ), donde z es carga, F es constante de Faraday, y φ es potencial eléctrico. Esto impulsa movimiento iónico a través de membranas, combinando gradientes de concentración y eléctricos en sistemas biológicos.",
        de: "Elektrochemisches Potential (μ̃) gleicht chemischem Potential (μ) plus elektrischer potentieller Energie (zFφ), wobei z Ladung, F Faraday-Konstante und φ elektrisches Potential ist. Dies treibt Ionenbewegung über Membranen an und kombiniert Konzentrations- und elektrische Gradienten in biologischen Systemen.",
        nl: "Elektrochemisch potentiaal (μ̃) is gelijk aan chemisch potentiaal (μ) plus elektrische potentiële energie (zFφ), waar z lading is, F de Faraday constante, en φ elektrisch potentiaal. Dit drijft ion beweging over membranen aan, combinerend concentratie en elektrische gradiënten in biologische systemen."
      }
    },
    {
      question: {
        en: "What is the Maxwell-Boltzmann distribution and its applications?",
        es: "¿Qué es la distribución de Maxwell-Boltzmann y sus aplicaciones?",
        de: "Was ist die Maxwell-Boltzmann-Verteilung und ihre Anwendungen?",
        nl: "Wat is de Maxwell-Boltzmann verdeling en zijn toepassingen?"
      },
      options: [
        { en: "Statistical distribution of molecular speeds in gases, explaining reaction rates, evaporation, and transport properties", es: "Distribución estadística de velocidades moleculares en gases, explicando velocidades de reacción, evaporación y propiedades de transporte", de: "Statistische Verteilung molekularer Geschwindigkeiten in Gasen, erklärt Reaktionsgeschwindigkeiten, Verdampfung und Transporteigenschaften", nl: "Statistische verdeling van moleculaire snelheden in gassen, verklarend reactiesnelheden, verdamping en transport eigenschappen" },
        { en: "Only applies to solids at absolute zero", es: "Solo se aplica a sólidos en cero absoluto", de: "Gilt nur für Feststoffe am absoluten Nullpunkt", nl: "Geldt alleen voor vaste stoffen bij absoluut nulpunt" },
        { en: "All molecules have the same speed", es: "Todas las moléculas tienen la misma velocidad", de: "Alle Moleküle haben dieselbe Geschwindigkeit", nl: "Alle moleculen hebben dezelfde snelheid" },
        { en: "Independent of temperature", es: "Independiente de la temperatura", de: "Temperaturunabhängig", nl: "Onafhankelijk van temperatuur" }
      ],
      correct: 0,
      explanation: {
        en: "The Maxwell-Boltzmann distribution describes the statistical distribution of molecular speeds in gases at thermal equilibrium. It explains why only molecules with sufficient energy react (Arrhenius equation), determines evaporation rates, gas effusion, and transport properties like viscosity and diffusion.",
        es: "La distribución de Maxwell-Boltzmann describe la distribución estadística de velocidades moleculares en gases en equilibrio térmico. Explica por qué solo moléculas con energía suficiente reaccionan (ecuación de Arrhenius), determina velocidades de evaporación, efusión de gas y propiedades de transporte como viscosidad y difusión.",
        de: "Die Maxwell-Boltzmann-Verteilung beschreibt die statistische Verteilung molekularer Geschwindigkeiten in Gasen im thermischen Gleichgewicht. Sie erklärt, warum nur Moleküle mit ausreichender Energie reagieren (Arrhenius-Gleichung), bestimmt Verdampfungsraten, Gaseffusion und Transporteigenschaften wie Viskosität und Diffusion.",
        nl: "De Maxwell-Boltzmann verdeling beschrijft de statistische verdeling van moleculaire snelheden in gassen in thermisch evenwicht. Het verklaart waarom alleen moleculen met voldoende energie reageren (Arrhenius vergelijking), bepaalt verdampingssnelheden, gas effusie en transport eigenschappen zoals viscositeit en diffusie."
      }
    },
    {
      question: {
        en: "What is the concept of standard reduction potential and its use in predicting reaction spontaneity?",
        es: "¿Qué es el concepto de potencial de reducción estándar y su uso en predecir espontaneidad de reacción?",
        de: "Was ist das Konzept des Standard-Reduktionspotentials und seine Verwendung zur Vorhersage der Reaktionsspontaneität?",
        nl: "Wat is het concept van standaard reductie potentiaal en zijn gebruik in het voorspellen van reactie spontaniteit?"
      },
      options: [
        { en: "Standard potential for reduction half-reactions; E°cell = E°cathode - E°anode > 0 indicates spontaneous reaction", es: "Potencial estándar para semirreacciones de reducción; E°celda = E°cátodo - E°ánodo > 0 indica reacción espontánea", de: "Standardpotential für Reduktions-Halbreaktionen; E°Zelle = E°Kathode - E°Anode > 0 zeigt spontane Reaktion an", nl: "Standaard potentiaal voor reductie half-reacties; E°cel = E°kathode - E°anode > 0 geeft spontane reactie aan" },
        { en: "All reduction potentials are positive", es: "Todos los potenciales de reducción son positivos", de: "Alle Reduktionspotentiale sind positiv", nl: "Alle reductie potentialen zijn positief" },
        { en: "Cannot predict reaction direction", es: "No puede predecir dirección de reacción", de: "Kann Reaktionsrichtung nicht vorhersagen", nl: "Kan reactierichting niet voorspellen" },
        { en: "Only useful at non-standard conditions", es: "Solo útil en condiciones no estándar", de: "Nur bei Nicht-Standard-Bedingungen nützlich", nl: "Alleen nuttig bij niet-standaard omstandigheden" }
      ],
      correct: 0,
      explanation: {
        en: "Standard reduction potentials (E°) are measured relative to standard hydrogen electrode (0 V). Higher E° means greater tendency to gain electrons. For galvanic cells, E°cell = E°cathode - E°anode. When E°cell > 0, the reaction is spontaneous (ΔG° < 0). This allows prediction of redox reaction feasibility.",
        es: "Los potenciales de reducción estándar (E°) se miden relativos al electrodo estándar de hidrógeno (0 V). Mayor E° significa mayor tendencia a ganar electrones. Para celdas galvánicas, E°celda = E°cátodo - E°ánodo. Cuando E°celda > 0, la reacción es espontánea (ΔG° < 0). Esto permite predecir factibilidad de reacciones redox.",
        de: "Standard-Reduktionspotentiale (E°) werden relativ zur Standard-Wasserstoffelektrode (0 V) gemessen. Höheres E° bedeutet größere Tendenz, Elektronen zu gewinnen. Für galvanische Zellen gilt E°Zelle = E°Kathode - E°Anode. Wenn E°Zelle > 0, ist die Reaktion spontan (ΔG° < 0). Dies ermöglicht Vorhersage der Redoxreaktions-Durchführbarkeit.",
        nl: "Standaard reductie potentialen (E°) worden gemeten relatief tot standaard waterstof elektrode (0 V). Hoger E° betekent grotere neiging om elektronen te winnen. Voor galvanische cellen geldt E°cel = E°kathode - E°anode. Wanneer E°cel > 0, is de reactie spontaan (ΔG° < 0). Dit maakt voorspelling van redox reactie haalbaarheid mogelijk."
      }
    },
    {
      question: {
        en: "What is the concept of partial molar quantities and their significance?",
        es: "¿Qué es el concepto de cantidades molares parciales y su significancia?",
        de: "Was ist das Konzept partieller molarer Größen und ihre Bedeutung?",
        nl: "Wat is het concept van partiële molaire grootheden en hun betekenis?"
      },
      options: [
        { en: "Partial molar property is the change in extensive property when one mole of component is added at constant T, P, and other compositions", es: "La propiedad molar parcial es el cambio en propiedad extensiva cuando se añade un mol de componente a T, P constantes y otras composiciones", de: "Partielle molare Eigenschaft ist die Änderung einer extensiven Eigenschaft, wenn ein Mol Komponente bei konstantem T, P und anderen Zusammensetzungen hinzugefügt wird", nl: "Partiële molaire eigenschap is de verandering in extensieve eigenschap wanneer één mol component wordt toegevoegd bij constante T, P en andere samenstellingen" },
        { en: "Always equals the molar property of pure substance", es: "Siempre iguala la propiedad molar de sustancia pura", de: "Entspricht immer der molaren Eigenschaft der reinen Substanz", nl: "Is altijd gelijk aan de molaire eigenschap van pure stof" },
        { en: "Only applies to ideal solutions", es: "Solo se aplica a soluciones ideales", de: "Gilt nur für ideale Lösungen", nl: "Geldt alleen voor ideale oplossingen" },
        { en: "Independent of composition", es: "Independiente de la composición", de: "Unabhängig von der Zusammensetzung", nl: "Onafhankelijk van samenstelling" }
      ],
      correct: 0,
      explanation: {
        en: "Partial molar quantities describe how extensive properties change with composition in mixtures. For example, partial molar volume V̄ᵢ = (∂V/∂nᵢ)T,P,nⱼ shows volume change when adding component i. These account for molecular interactions and are essential for understanding solution thermodynamics and mixing effects.",
        es: "Las cantidades molares parciales describen cómo las propiedades extensivas cambian con composición en mezclas. Por ejemplo, volumen molar parcial V̄ᵢ = (∂V/∂nᵢ)T,P,nⱼ muestra cambio de volumen al añadir componente i. Estas consideran interacciones moleculares y son esenciales para entender termodinámica de solución y efectos de mezcla.",
        de: "Partielle molare Größen beschreiben, wie extensive Eigenschaften sich mit der Zusammensetzung in Mischungen ändern. Zum Beispiel zeigt partielles Molvolumen V̄ᵢ = (∂V/∂nᵢ)T,P,nⱼ Volumenänderung beim Hinzufügen von Komponente i. Diese berücksichtigen molekulare Wechselwirkungen und sind wesentlich für das Verständnis von Lösungsthermodynamik und Mischungseffekten.",
        nl: "Partiële molaire grootheden beschrijven hoe extensieve eigenschappen veranderen met samenstelling in mengsels. Bijvoorbeeld, partieel molair volume V̄ᵢ = (∂V/∂nᵢ)T,P,nⱼ toont volume verandering bij toevoegen van component i. Deze houden rekening met moleculaire interacties en zijn essentieel voor begrip van oplossings thermodynamica en meng effecten."
      }
    },
    {
      question: {
        en: "What is the Gibbs-Duhem equation and its applications?",
        es: "¿Qué es la ecuación de Gibbs-Duhem y sus aplicaciones?",
        de: "Was ist die Gibbs-Duhem-Gleichung und ihre Anwendungen?",
        nl: "Wat is de Gibbs-Duhem vergelijking en zijn toepassingen?"
      },
      options: [
        { en: "Σnᵢdμᵢ = 0 at constant T,P; relates changes in chemical potentials of components in mixtures", es: "Σnᵢdμᵢ = 0 a T,P constantes; relaciona cambios en potenciales químicos de componentes en mezclas", de: "Σnᵢdμᵢ = 0 bei konstantem T,P; verknüpft Änderungen chemischer Potentiale von Komponenten in Mischungen", nl: "Σnᵢdμᵢ = 0 bij constante T,P; relateert veranderingen in chemische potentialen van componenten in mengsels" },
        { en: "Only applies to single-component systems", es: "Solo se aplica a sistemas de un componente", de: "Gilt nur für Ein-Komponenten-Systeme", nl: "Geldt alleen voor één-component systemen" },
        { en: "Chemical potentials can change independently", es: "Los potenciales químicos pueden cambiar independientemente", de: "Chemische Potentiale können unabhängig ändern", nl: "Chemische potentialen kunnen onafhankelijk veranderen" },
        { en: "Has no practical applications", es: "No tiene aplicaciones prácticas", de: "Hat keine praktischen Anwendungen", nl: "Heeft geen praktische toepassingen" }
      ],
      correct: 0,
      explanation: {
        en: "The Gibbs-Duhem equation shows that chemical potential changes are not independent in mixtures. At constant T and P, Σnᵢdμᵢ = 0. This constraint allows calculation of one component's activity from another's, validates thermodynamic models, and is essential for phase equilibrium calculations in multicomponent systems.",
        es: "La ecuación de Gibbs-Duhem muestra que los cambios de potencial químico no son independientes en mezclas. A T y P constantes, Σnᵢdμᵢ = 0. Esta restricción permite calcular la actividad de un componente a partir de otro, valida modelos termodinámicos y es esencial para cálculos de equilibrio de fase en sistemas multicomponente.",
        de: "Die Gibbs-Duhem-Gleichung zeigt, dass chemische Potentialänderungen in Mischungen nicht unabhängig sind. Bei konstantem T und P gilt Σnᵢdμᵢ = 0. Diese Einschränkung ermöglicht Berechnung der Aktivität einer Komponente aus einer anderen, validiert thermodynamische Modelle und ist wesentlich für Phasengleichgewichtsberechnungen in Mehrkomponen-systemen.",
        nl: "De Gibbs-Duhem vergelijking toont dat chemische potentiaal veranderingen niet onafhankelijk zijn in mengsels. Bij constante T en P geldt Σnᵢdμᵢ = 0. Deze beperking maakt berekening van activiteit van één component uit een andere mogelijk, valideert thermodynamische modellen en is essentieel voor fase evenwicht berekeningen in meercomponent systemen."
      }
    },
    {
      question: {
        en: "What is the concept of overpotential in electrochemistry?",
        es: "¿Qué es el concepto de sobrepotencial en electroquímica?",
        de: "Was ist das Konzept der Überspannung in der Elektrochemie?",
        nl: "Wat is het concept van overpotentiaal in elektrochemie?"
      },
      options: [
        { en: "Additional voltage beyond equilibrium potential required to drive electrode reactions at measurable rates", es: "Voltaje adicional más allá del potencial de equilibrio requerido para impulsar reacciones de electrodo a velocidades medibles", de: "Zusätzliche Spannung über Gleichgewichtspotential hinaus erforderlich, um Elektrodenreaktionen bei messbaren Geschwindigkeiten anzutreiben", nl: "Additionele spanning voorbij evenwicht potentiaal vereist om elektrode reacties aan meetbare snelheden aan te drijven" },
        { en: "Always equals the equilibrium potential", es: "Siempre iguala el potencial de equilibrio", de: "Entspricht immer dem Gleichgewichtspotential", nl: "Is altijd gelijk aan het evenwicht potentiaal" },
        { en: "Only occurs in batteries", es: "Solo ocurre en baterías", de: "Tritt nur in Batterien auf", nl: "Komt alleen voor in batterijen" },
        { en: "Independent of current density", es: "Independiente de la densidad de corriente", de: "Unabhängig von Stromdichte", nl: "Onafhankelijk van stroomdichtheid" }
      ],
      correct: 0,
      explanation: {
        en: "Overpotential (η) is the difference between applied potential and equilibrium potential needed to drive electrode reactions. It overcomes activation barriers, mass transport limitations, and ohmic resistance. Types include activation overpotential (Butler-Volmer kinetics), concentration overpotential (mass transfer), and ohmic overpotential (resistance).",
        es: "El sobrepotencial (η) es la diferencia entre potencial aplicado y potencial de equilibrio necesario para impulsar reacciones de electrodo. Supera barreras de activación, limitaciones de transporte de masa y resistencia óhmica. Los tipos incluyen sobrepotencial de activación (cinética Butler-Volmer), sobrepotencial de concentración (transferencia de masa) y sobrepotencial óhmico (resistencia).",
        de: "Überspannung (η) ist die Differenz zwischen angelegtem Potential und Gleichgewichtspotential, die zur Antreibung von Elektrodenreaktionen benötigt wird. Sie überwindet Aktivierungsbarrieren, Stofftransportbegrenzungen und ohmschen Widerstand. Typen umfassen Aktivierungsüberspannung (Butler-Volmer-Kinetik), Konzentrationsüberspannung (Stoffübertragung) und ohmsche Überspannung (Widerstand).",
        nl: "Overpotentiaal (η) is het verschil tussen toegepast potentiaal en evenwicht potentiaal nodig om elektrode reacties aan te drijven. Het overwint activerings barrières, massa transport beperkingen en ohmse weerstand. Types omvatten activerings overpotentiaal (Butler-Volmer kinetiek), concentratie overpotentiaal (massa overdracht) en ohmse overpotentiaal (weerstand)."
      }
    },
    {
      question: {
        en: "What is the relationship between entropy and probability in statistical thermodynamics?",
        es: "¿Cuál es la relación entre entropía y probabilidad en termodinámica estadística?",
        de: "Was ist die Beziehung zwischen Entropie und Wahrscheinlichkeit in der statistischen Thermodynamik?",
        nl: "Wat is de relatie tussen entropie en waarschijnlijkheid in statistische thermodynamica?"
      },
      options: [
        { en: "S = k ln Ω (Boltzmann equation); entropy measures number of microstates accessible to system", es: "S = k ln Ω (ecuación de Boltzmann); entropía mide número de microestados accesibles al sistema", de: "S = k ln Ω (Boltzmann-Gleichung); Entropie misst Anzahl der für System zugänglichen Mikrozustände", nl: "S = k ln Ω (Boltzmann vergelijking); entropie meet aantal microtoestanden toegankelijk voor systeem" },
        { en: "Entropy decreases with increasing probability", es: "La entropía disminuye con probabilidad creciente", de: "Entropie nimmt mit steigender Wahrscheinlichkeit ab", nl: "Entropie neemt af met toenemende waarschijnlijkheid" },
        { en: "No relationship exists between entropy and probability", es: "No existe relación entre entropía y probabilidad", de: "Keine Beziehung zwischen Entropie und Wahrscheinlichkeit existiert", nl: "Er bestaat geen relatie tussen entropie en waarschijnlijkheid" },
        { en: "Probability is always zero for any system", es: "La probabilidad es siempre cero para cualquier sistema", de: "Wahrscheinlichkeit ist immer null für jedes System", nl: "Waarschijnlijkheid is altijd nul voor elk systeem" }
      ],
      correct: 0,
      explanation: {
        en: "Boltzmann's equation S = k ln Ω connects macroscopic entropy to microscopic probability through the number of microstates (Ω). Higher entropy corresponds to more ways to arrange the system, making it more probable. This fundamental relationship bridges thermodynamics and statistical mechanics, explaining why entropy increases spontaneously.",
        es: "La ecuación de Boltzmann S = k ln Ω conecta entropía macroscópica con probabilidad microscópica a través del número de microestados (Ω). Mayor entropía corresponde a más formas de arreglar el sistema, haciéndolo más probable. Esta relación fundamental une termodinámica y mecánica estadística, explicando por qué la entropía aumenta espontáneamente.",
        de: "Boltzmanns Gleichung S = k ln Ω verbindet makroskopische Entropie mit mikroskopischer Wahrscheinlichkeit durch die Anzahl der Mikrozustände (Ω). Höhere Entropie entspricht mehr Wegen zur Systemanordnung, macht es wahrscheinlicher. Diese fundamentale Beziehung verbindet Thermodynamik und Statistische Mechanik, erklärt warum Entropie spontan zunimmt.",
        nl: "Boltzmann's vergelijking S = k ln Ω verbindt macroscopische entropie met microscopische waarschijnlijkheid door het aantal microtoestanden (Ω). Hogere entropie komt overeen met meer manieren om het systeem te arrangeren, makend het waarschijnlijker. Deze fundamentele relatie verbindt thermodynamica en statistische mechanica, verklarend waarom entropie spontaan toeneemt."
      }
    },
    {
      question: {
        en: "What is the concept of phase rule and its application to phase diagrams?",
        es: "¿Qué es el concepto de regla de fases y su aplicación a diagramas de fase?",
        de: "Was ist das Konzept der Phasenregel und ihre Anwendung auf Phasendiagramme?",
        nl: "Wat is het concept van faseregel en zijn toepassing op fasediagrammen?"
      },
      options: [
        { en: "F = C - P + 2 (Gibbs phase rule); relates degrees of freedom to components and phases", es: "F = C - P + 2 (regla de fases de Gibbs); relaciona grados de libertad con componentes y fases", de: "F = C - P + 2 (Gibbs'sche Phasenregel); verknüpft Freiheitsgrade mit Komponenten und Phasen", nl: "F = C - P + 2 (Gibbs faseregel); relateert vrijheidsgraden aan componenten en fasen" },
        { en: "F = C + P - 2", es: "F = C + P - 2", de: "F = C + P - 2", nl: "F = C + P - 2" },
        { en: "Only applies to single-component systems", es: "Solo se aplica a sistemas de un componente", de: "Gilt nur für Ein-Komponenten-Systeme", nl: "Geldt alleen voor één-component systemen" },
        { en: "Phase diagrams are independent of composition", es: "Los diagramas de fase son independientes de la composición", de: "Phasendiagramme sind unabhängig von der Zusammensetzung", nl: "Fasediagrammen zijn onafhankelijk van samenstelling" }
      ],
      correct: 0,
      explanation: {
        en: "The Gibbs phase rule F = C - P + 2 determines degrees of freedom (F) in equilibrium systems with C components and P phases. The '2' accounts for temperature and pressure. At the triple point of pure water (C=1, P=3), F=0 (invariant). This rule predicts how many intensive properties can be varied independently.",
        es: "La regla de fases de Gibbs F = C - P + 2 determina grados de libertad (F) en sistemas de equilibrio con C componentes y P fases. El '2' considera temperatura y presión. En el punto triple de agua pura (C=1, P=3), F=0 (invariante). Esta regla predice cuántas propiedades intensivas pueden variarse independientemente.",
        de: "Die Gibbs'sche Phasenregel F = C - P + 2 bestimmt Freiheitsgrade (F) in Gleichgewichtssystemen mit C Komponenten und P Phasen. Die '2' berücksichtigt Temperatur und Druck. Am Tripelpunkt von reinem Wasser (C=1, P=3) ist F=0 (invariant). Diese Regel sagt voraus, wie viele intensive Eigenschaften unabhängig variiert werden können.",
        nl: "De Gibbs faseregel F = C - P + 2 bepaalt vrijheidsgraden (F) in evenwicht systemen met C componenten en P fasen. De '2' houdt rekening met temperatuur en druk. Bij het tripelpunt van puur water (C=1, P=3) is F=0 (invariant). Deze regel voorspelt hoeveel intensieve eigenschappen onafhankelijk gevarieerd kunnen worden."
      }
    },
    {
      question: {
        en: "What is the concept of ionic strength and its effect on activity coefficients?",
        es: "¿Qué es el concepto de fuerza iónica y su efecto en coeficientes de actividad?",
        de: "Was ist das Konzept der Ionenstärke und ihr Effekt auf Aktivitätskoeffizienten?",
        nl: "Wat is het concept van ionsterkte en zijn effect op activiteitscoëfficiënten?"
      },
      options: [
        { en: "I = ½Σcᵢzᵢ²; higher ionic strength decreases activity coefficients due to electrostatic interactions (Debye-Hückel theory)", es: "I = ½Σcᵢzᵢ²; mayor fuerza iónica disminuye coeficientes de actividad debido a interacciones electrostáticas (teoría Debye-Hückel)", de: "I = ½Σcᵢzᵢ²; höhere Ionenstärke verringert Aktivitätskoeffizienten aufgrund elektrostatischer Wechselwirkungen (Debye-Hückel-Theorie)", nl: "I = ½Σcᵢzᵢ²; hogere ionsterkte vermindert activiteitscoëfficiënten door elektrostatische interacties (Debye-Hückel theorie)" },
        { en: "Ionic strength has no effect on activity", es: "La fuerza iónica no tiene efecto en la actividad", de: "Ionenstärke hat keinen Effekt auf Aktivität", nl: "Ionsterkte heeft geen effect op activiteit" },
        { en: "Only considers positive ions", es: "Solo considera iones positivos", de: "Berücksichtigt nur positive Ionen", nl: "Houdt alleen rekening met positieve ionen" },
        { en: "Activity coefficients always increase with ionic strength", es: "Los coeficientes de actividad siempre aumentan con fuerza iónica", de: "Aktivitätskoeffizienten steigen immer mit Ionenstärke", nl: "Activiteitscoëfficiënten nemen altijd toe met ionsterkte" }
      ],
      correct: 0,
      explanation: {
        en: "Ionic strength I = ½Σcᵢzᵢ² measures the total concentration of ions weighted by charge squared. According to Debye-Hückel theory, electrostatic interactions in ionic solutions cause activity coefficients to decrease with increasing ionic strength, especially for multiply charged ions. This affects equilibria, solubility, and reaction rates.",
        es: "La fuerza iónica I = ½Σcᵢzᵢ² mide la concentración total de iones ponderada por carga al cuadrado. Según la teoría Debye-Hückel, las interacciones electrostáticas en soluciones iónicas causan que los coeficientes de actividad disminuyan con fuerza iónica creciente, especialmente para iones multicargados. Esto afecta equilibrios, solubilidad y velocidades de reacción.",
        de: "Ionenstärke I = ½Σcᵢzᵢ² misst die Gesamtkonzentration von Ionen gewichtet mit dem Ladungsquadrat. Laut Debye-Hückel-Theorie verursachen elektrostatische Wechselwirkungen in ionischen Lösungen, dass Aktivitätskoeffizienten mit steigender Ionenstärke abnehmen, besonders bei mehrfach geladenen Ionen. Dies beeinflusst Gleichgewichte, Löslichkeit und Reaktionsgeschwindigkeiten.",
        nl: "Ionsterkte I = ½Σcᵢzᵢ² meet de totale concentratie van ionen gewogen naar lading gekwadrateerd. Volgens Debye-Hückel theorie veroorzaken elektrostatische interacties in ionische oplossingen dat activiteitscoëfficiënten afnemen met toenemende ionsterkte, vooral voor meervoudig geladen ionen. Dit beïnvloedt evenwichten, oplosbaarheid en reactiesnelheden."
      }
    },
    {
      question: {
        en: "What is the Butler-Volmer equation and its significance in electrode kinetics?",
        es: "¿Qué es la ecuación de Butler-Volmer y su significancia en cinética de electrodo?",
        de: "Was ist die Butler-Volmer-Gleichung und ihre Bedeutung in der Elektrodenkinetik?",
        nl: "Wat is de Butler-Volmer vergelijking en zijn betekenis in elektrode kinetiek?"
      },
      options: [
        { en: "Describes relationship between current density and overpotential in electrode reactions; i = i₀[exp(αnFη/RT) - exp(-(1-α)nFη/RT)]", es: "Describe relación entre densidad de corriente y sobrepotencial en reacciones de electrodo; i = i₀[exp(αnFη/RT) - exp(-(1-α)nFη/RT)]", de: "Beschreibt Beziehung zwischen Stromdichte und Überspannung bei Elektrodenreaktionen; i = i₀[exp(αnFη/RT) - exp(-(1-α)nFη/RT)]", nl: "Beschrijft relatie tussen stroomdichtheid en overpotentiaal in elektrode reacties; i = i₀[exp(αnFη/RT) - exp(-(1-α)nFη/RT)]" },
        { en: "Only applies to reversible electrodes", es: "Solo se aplica a electrodos reversibles", de: "Gilt nur für reversible Elektroden", nl: "Geldt alleen voor reversibele elektroden" },
        { en: "Current is independent of overpotential", es: "La corriente es independiente del sobrepotencial", de: "Strom ist unabhängig von Überspannung", nl: "Stroom is onafhankelijk van overpotentiaal" },
        { en: "Has no practical applications", es: "No tiene aplicaciones prácticas", de: "Hat keine praktischen Anwendungen", nl: "Heeft geen praktische toepassingen" }
      ],
      correct: 0,
      explanation: {
        en: "The Butler-Volmer equation relates current density to overpotential in electrode reactions, considering both forward and reverse reaction contributions. i₀ is exchange current density, α is transfer coefficient, and η is overpotential. It's fundamental for understanding battery performance, corrosion, and electroplating processes.",
        es: "La ecuación de Butler-Volmer relaciona densidad de corriente con sobrepotencial en reacciones de electrodo, considerando contribuciones de reacción directa e inversa. i₀ es densidad de corriente de intercambio, α es coeficiente de transferencia, y η es sobrepotencial. Es fundamental para entender rendimiento de baterías, corrosión y procesos de electrodeposición.",
        de: "Die Butler-Volmer-Gleichung verknüpft Stromdichte mit Überspannung bei Elektrodenreaktionen unter Berücksichtigung sowohl von Vorwärts- als auch Rückwärtsreaktionsbeiträgen. i₀ ist Austauschstromdichte, α ist Übertragungskoeffizient, und η ist Überspannung. Sie ist grundlegend für das Verständnis von Batterieleistung, Korrosion und Galvanisierprozessen.",
        nl: "De Butler-Volmer vergelijking relateert stroomdichtheid aan overpotentiaal in elektrode reacties, rekening houdend met zowel voorwaartse als achterwaartse reactie bijdragen. i₀ is uitwisseling stroomdichtheid, α is overdrachtscoëfficiënt, en η is overpotentiaal. Het is fundamenteel voor begrip van batterij prestatie, corrosie en galvanisatie processen."
      }
    },
    {
      question: {
        en: "What is the concept of electrochemical impedance spectroscopy (EIS)?",
        es: "¿Qué es el concepto de espectroscopia de impedancia electroquímica (EIS)?",
        de: "Was ist das Konzept der elektrochemischen Impedanzspektroskopie (EIS)?",
        nl: "Wat is het concept van elektrochemische impedantie spectroscopie (EIS)?"
      },
      options: [
        { en: "Technique measuring frequency-dependent impedance to study electrode kinetics, mass transport, and interfacial properties", es: "Técnica que mide impedancia dependiente de frecuencia para estudiar cinética de electrodo, transporte de masa y propiedades interfaciales", de: "Technik zur Messung frequenzabhängiger Impedanz zur Untersuchung von Elektrodenkinetik, Stofftransport und Grenzflächeneigenschaften", nl: "Techniek die frequentie-afhankelijke impedantie meet om elektrode kinetiek, massa transport en grenslaag eigenschappen te bestuderen" },
        { en: "Only measures DC resistance", es: "Solo mide resistencia DC", de: "Misst nur DC-Widerstand", nl: "Meet alleen DC weerstand" },
        { en: "Cannot distinguish between different processes", es: "No puede distinguir entre diferentes procesos", de: "Kann nicht zwischen verschiedenen Prozessen unterscheiden", nl: "Kan niet onderscheiden tussen verschillende processen" },
        { en: "Only works at high voltages", es: "Solo funciona a altos voltajes", de: "Funktioniert nur bei hohen Spannungen", nl: "Werkt alleen bij hoge spanningen" }
      ],
      correct: 0,
      explanation: {
        en: "EIS applies small AC perturbations over a frequency range and measures the resulting current response. Different processes (charge transfer, mass transport, double layer charging) have characteristic frequency responses, appearing as distinct features in Nyquist or Bode plots. This allows separation and quantification of multiple electrochemical processes.",
        es: "EIS aplica pequeñas perturbaciones AC sobre un rango de frecuencia y mide la respuesta de corriente resultante. Diferentes procesos (transferencia de carga, transporte de masa, carga de doble capa) tienen respuestas de frecuencia características, apareciendo como características distintas en gráficos de Nyquist o Bode. Esto permite separación y cuantificación de múltiples procesos electroquímicos.",
        de: "EIS wendet kleine AC-Störungen über einen Frequenzbereich an und misst die resultierende Stromantwort. Verschiedene Prozesse (Ladungsübertragung, Stofftransport, Doppelschichtaufladung) haben charakteristische Frequenzantworten, die als unterschiedliche Merkmale in Nyquist- oder Bode-Diagrammen erscheinen. Dies ermöglicht Trennung und Quantifizierung mehrerer elektrochemischer Prozesse.",
        nl: "EIS past kleine AC verstoringen toe over een frequentiebereik en meet de resulterende stroom respons. Verschillende processen (lading overdracht, massa transport, dubbele laag oplading) hebben karakteristieke frequentie responsen, verschijnend als onderscheidende kenmerken in Nyquist of Bode plots. Dit maakt scheiding en kwantificatie van meerdere elektrochemische processen mogelijk."
      }
    },
    {
      question: {
        en: "What is the relationship between work function and thermionic emission?",
        es: "¿Cuál es la relación entre función de trabajo y emisión termiónica?",
        de: "Was ist die Beziehung zwischen Austrittsarbeit und thermionischer Emission?",
        nl: "Wat is de relatie tussen werkfunctie en thermo-ionische emissie?"
      },
      options: [
        { en: "Work function is minimum energy to remove electron; thermionic emission follows Richardson-Dushman equation J = AT²exp(-φ/kT)", es: "La función de trabajo es energía mínima para remover electrón; emisión termiónica sigue ecuación Richardson-Dushman J = AT²exp(-φ/kT)", de: "Austrittsarbeit ist minimale Energie zur Elektronenentfernung; thermionische Emission folgt Richardson-Dushman-Gleichung J = AT²exp(-φ/kT)", nl: "Werkfunctie is minimum energie om elektron te verwijderen; thermo-ionische emissie volgt Richardson-Dushman vergelijking J = AT²exp(-φ/kT)" },
        { en: "Work function increases thermionic emission", es: "La función de trabajo aumenta emisión termiónica", de: "Austrittsarbeit erhöht thermionische Emission", nl: "Werkfunctie verhoogt thermo-ionische emissie" },
        { en: "Temperature has no effect on emission", es: "La temperatura no tiene efecto en emisión", de: "Temperatur hat keinen Effekt auf Emission", nl: "Temperatuur heeft geen effect op emissie" },
        { en: "Only occurs in vacuum", es: "Solo ocurre en vacío", de: "Tritt nur im Vakuum auf", nl: "Treedt alleen op in vacuüm" }
      ],
      correct: 0,
      explanation: {
        en: "Work function (φ) is the minimum energy required to remove an electron from a material's surface. Thermionic emission occurs when thermal energy overcomes this barrier. The Richardson-Dushman equation shows current density J depends exponentially on -φ/kT, making lower work function materials better electron emitters at given temperature.",
        es: "La función de trabajo (φ) es la energía mínima requerida para remover un electrón de la superficie de un material. La emisión termiónica ocurre cuando la energía térmica supera esta barrera. La ecuación Richardson-Dushman muestra que la densidad de corriente J depende exponencialmente de -φ/kT, haciendo que materiales con menor función de trabajo sean mejores emisores de electrones a temperatura dada.",
        de: "Austrittsarbeit (φ) ist die minimale Energie, die erforderlich ist, um ein Elektron von einer Materialoberfläche zu entfernen. Thermionische Emission tritt auf, wenn thermische Energie diese Barriere überwindet. Die Richardson-Dushman-Gleichung zeigt, dass Stromdichte J exponentiell von -φ/kT abhängt, wodurch Materialien mit niedrigerer Austrittsarbeit bessere Elektronenemitter bei gegebener Temperatur sind.",
        nl: "Werkfunctie (φ) is de minimum energie vereist om een elektron van een materiaal oppervlak te verwijderen. Thermo-ionische emissie treedt op wanneer thermische energie deze barrière overwint. De Richardson-Dushman vergelijking toont dat stroomdichtheid J exponentieel afhangt van -φ/kT, waardoor lagere werkfunctie materialen betere elektron emitters zijn bij gegeven temperatuur."
      }
    }
  ]
});
