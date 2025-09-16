// Chemistry - Level 4: Reaction Mechanisms and Kinetics
window.addLevel('brain-teaser/chemistry', {
  name: { 
    en: 'Reaction Mechanisms & Kinetics', 
    es: 'Mecanismos de Reacción y Cinética', 
    de: 'Reaktionsmechanismen und Kinetik', 
    nl: 'Reactiemechanismen en Kinetiek' 
  },
  questions: [
    {
      question: {
        en: "In the SN2 reaction mechanism, what is the relationship between the rate of reaction and the concentration of both the nucleophile and substrate?",
        es: "En el mecanismo de reacción SN2, ¿cuál es la relación entre la velocidad de reacción y la concentración tanto del nucleófilo como del sustrato?",
        de: "Beim SN2-Reaktionsmechanismus, was ist die Beziehung zwischen der Reaktionsgeschwindigkeit und der Konzentration sowohl des Nukleophils als auch des Substrats?",
        nl: "In het SN2-reactiemechanisme, wat is de relatie tussen de reactiesnelheid en de concentratie van zowel de nucleofiel als het substraat?"
      },
      options: [
        { en: "Rate = k[substrate]", es: "Velocidad = k[sustrato]", de: "Rate = k[Substrat]", nl: "Snelheid = k[substraat]" },
        { en: "Rate = k[nucleophile]", es: "Velocidad = k[nucleófilo]", de: "Rate = k[Nukleophil]", nl: "Snelheid = k[nucleofiel]" },
        { en: "Rate = k[substrate][nucleophile]", es: "Velocidad = k[sustrato][nucleófilo]", de: "Rate = k[Substrat][Nukleophil]", nl: "Snelheid = k[substraat][nucleofiel]" },
        { en: "Rate = k[substrate]²", es: "Velocidad = k[sustrato]²", de: "Rate = k[Substrat]²", nl: "Snelheid = k[substraat]²" }
      ],
      correct: 2,
      explanation: {
        en: "SN2 reactions follow second-order kinetics because both the substrate and nucleophile participate in the rate-determining step. The rate law is: Rate = k[substrate][nucleophile], making it a bimolecular reaction.",
        es: "Las reacciones SN2 siguen cinética de segundo orden porque tanto el sustrato como el nucleófilo participan en el paso determinante de la velocidad. La ley de velocidad es: Velocidad = k[sustrato][nucleófilo], haciéndola una reacción bimolecular.",
        de: "SN2-Reaktionen folgen der Kinetik zweiter Ordnung, weil sowohl Substrat als auch Nukleophil am geschwindigkeitsbestimmenden Schritt beteiligt sind. Das Geschwindigkeitsgesetz ist: Rate = k[Substrat][Nukleophil], was sie zu einer bimolekularen Reaktion macht.",
        nl: "SN2-reacties volgen tweede-orde kinetiek omdat zowel het substraat als de nucleofiel deelnemen aan de snelheidsbepalende stap. De snelheidswet is: Snelheid = k[substraat][nucleofiel], wat het een bimoleculaire reactie maakt."
      }
    },
    {
      question: {
        en: "What is the rate-determining step in a multi-step reaction mechanism?",
        es: "¿Cuál es el paso determinante de la velocidad en un mecanismo de reacción de múltiples pasos?",
        de: "Was ist der geschwindigkeitsbestimmende Schritt in einem mehrstufigen Reaktionsmechanismus?",
        nl: "Wat is de snelheidsbepalende stap in een meerstaps reactiemechanisme?"
      },
      options: [
        { en: "The first step", es: "El primer paso", de: "Der erste Schritt", nl: "De eerste stap" },
        { en: "The last step", es: "El último paso", de: "Der letzte Schritt", nl: "De laatste stap" },
        { en: "The slowest step", es: "El paso más lento", de: "Der langsamste Schritt", nl: "De langzaamste stap" },
        { en: "The fastest step", es: "El paso más rápido", de: "Der schnellste Schritt", nl: "De snelste stap" }
      ],
      correct: 2,
      explanation: {
        en: "The rate-determining step is the slowest step in a multi-step reaction mechanism. It acts as a 'bottleneck' that controls the overall reaction rate, regardless of how fast the other steps proceed.",
        es: "El paso determinante de la velocidad es el paso más lento en un mecanismo de reacción de múltiples pasos. Actúa como un 'cuello de botella' que controla la velocidad general de la reacción, independientemente de qué tan rápido procedan los otros pasos.",
        de: "Der geschwindigkeitsbestimmende Schritt ist der langsamste Schritt in einem mehrstufigen Reaktionsmechanismus. Er wirkt als 'Flaschenhals', der die Gesamtreaktionsgeschwindigkeit kontrolliert, unabhängig davon, wie schnell die anderen Schritte ablaufen.",
        nl: "De snelheidsbepalende stap is de langzaamste stap in een meerstaps reactiemechanisme. Het werkt als een 'knelpunt' dat de algehele reactiesnelheid controleert, ongeacht hoe snel de andere stappen verlopen."
      }
    },
    {
      question: {
        en: "In enzyme kinetics, what does the Michaelis constant (Km) represent?",
        es: "En cinética enzimática, ¿qué representa la constante de Michaelis (Km)?",
        de: "Was repräsentiert die Michaelis-Konstante (Km) in der Enzymkinetik?",
        nl: "Wat stelt de Michaelis-constante (Km) voor in enzymkinetiek?"
      },
      options: [
        { en: "The maximum reaction velocity", es: "La velocidad máxima de reacción", de: "Die maximale Reaktionsgeschwindigkeit", nl: "De maximale reactiesnelheid" },
        { en: "The substrate concentration at half-maximum velocity", es: "La concentración de sustrato a velocidad semi-máxima", de: "Die Substratkonzentration bei halbmaximaler Geschwindigkeit", nl: "De substraatconcentratie bij half-maximale snelheid" },
        { en: "The enzyme concentration", es: "La concentración de enzima", de: "Die Enzymkonzentration", nl: "De enzymconcentratie" },
        { en: "The activation energy", es: "La energía de activación", de: "Die Aktivierungsenergie", nl: "De activeringsenergie" }
      ],
      correct: 1,
      explanation: {
        en: "The Michaelis constant (Km) is the substrate concentration at which the reaction velocity is exactly half of the maximum velocity (Vmax). It provides a measure of the enzyme's affinity for its substrate.",
        es: "La constante de Michaelis (Km) es la concentración de sustrato a la cual la velocidad de reacción es exactamente la mitad de la velocidad máxima (Vmax). Proporciona una medida de la afinidad de la enzima por su sustrato.",
        de: "Die Michaelis-Konstante (Km) ist die Substratkonzentration, bei der die Reaktionsgeschwindigkeit genau die Hälfte der maximalen Geschwindigkeit (Vmax) beträgt. Sie bietet ein Maß für die Affinität des Enzyms zu seinem Substrat.",
        nl: "De Michaelis-constante (Km) is de substraatconcentratie waarbij de reactiesnelheid precies de helft is van de maximale snelheid (Vmax). Het geeft een maat voor de affiniteit van het enzym voor zijn substraat."
      }
    },
    {
      question: {
        en: "What is the order of a reaction if doubling the concentration of a reactant quadruples the reaction rate?",
        es: "¿Cuál es el orden de una reacción si duplicar la concentración de un reactivo cuadruplica la velocidad de reacción?",
        de: "Was ist die Ordnung einer Reaktion, wenn die Verdopplung der Konzentration eines Reaktanten die Reaktionsgeschwindigkeit vervierfacht?",
        nl: "Wat is de orde van een reactie als het verdubbelen van de concentratie van een reactant de reactiesnelheid verviervoudigt?"
      },
      options: [
        { en: "Zero order", es: "Orden cero", de: "Nullte Ordnung", nl: "Nulde orde" },
        { en: "First order", es: "Primer orden", de: "Erste Ordnung", nl: "Eerste orde" },
        { en: "Second order", es: "Segundo orden", de: "Zweite Ordnung", nl: "Tweede orde" },
        { en: "Third order", es: "Tercer orden", de: "Dritte Ordnung", nl: "Derde orde" }
      ],
      correct: 2,
      explanation: {
        en: "If doubling the concentration quadruples the rate, then rate ∝ [concentration]². This indicates a second-order reaction with respect to that reactant, since 2² = 4.",
        es: "Si duplicar la concentración cuadruplica la velocidad, entonces velocidad ∝ [concentración]². Esto indica una reacción de segundo orden con respecto a ese reactivo, ya que 2² = 4.",
        de: "Wenn die Verdopplung der Konzentration die Geschwindigkeit vervierfacht, dann ist Rate ∝ [Konzentration]². Dies zeigt eine Reaktion zweiter Ordnung bezüglich dieses Reaktanten an, da 2² = 4.",
        nl: "Als het verdubbelen van de concentratie de snelheid verviervoudigt, dan is snelheid ∝ [concentratie]². Dit duidt op een tweede-orde reactie ten opzichte van die reactant, omdat 2² = 4."
      }
    },
    {
      question: {
        en: "What is the primary difference between homogeneous and heterogeneous catalysis?",
        es: "¿Cuál es la diferencia principal entre catálisis homogénea y heterogénea?",
        de: "Was ist der Hauptunterschied zwischen homogener und heterogener Katalyse?",
        nl: "Wat is het belangrijkste verschil tussen homogene en heterogene katalyse?"
      },
      options: [
        { en: "The type of catalyst used", es: "El tipo de catalizador usado", de: "Die Art des verwendeten Katalysators", nl: "Het type gebruikte katalysator" },
        { en: "The phase of the catalyst relative to reactants", es: "La fase del catalizador relativa a los reactivos", de: "Die Phase des Katalysators relativ zu den Reaktanten", nl: "De fase van de katalysator ten opzichte van reactanten" },
        { en: "The reaction temperature", es: "La temperatura de reacción", de: "Die Reaktionstemperatur", nl: "De reactietemperatuur" },
        { en: "The activation energy", es: "La energía de activación", de: "Die Aktivierungsenergie", nl: "De activeringsenergie" }
      ],
      correct: 1,
      explanation: {
        en: "Homogeneous catalysis occurs when the catalyst is in the same phase as the reactants (usually all in solution), while heterogeneous catalysis involves a catalyst in a different phase (typically a solid catalyst with liquid or gas reactants).",
        es: "La catálisis homogénea ocurre cuando el catalizador está en la misma fase que los reactivos (usualmente todos en solución), mientras que la catálisis heterogénea involucra un catalizador en una fase diferente (típicamente un catalizador sólido con reactivos líquidos o gaseosos).",
        de: "Homogene Katalyse tritt auf, wenn der Katalysator in derselben Phase wie die Reaktanten ist (normalerweise alle in Lösung), während heterogene Katalyse einen Katalysator in einer anderen Phase beinhaltet (typischerweise ein fester Katalysator mit flüssigen oder gasförmigen Reaktanten).",
        nl: "Homogene katalyse treedt op wanneer de katalysator in dezelfde fase is als de reactanten (meestal allemaal in oplossing), terwijl heterogene katalyse een katalysator in een andere fase behelst (typisch een vaste katalysator met vloeibare of gasvormige reactanten)."
      }
    },
    {
      question: {
        en: "What is the half-life of a first-order reaction with a rate constant of 0.693 s⁻¹?",
        es: "¿Cuál es la vida media de una reacción de primer orden con una constante de velocidad de 0.693 s⁻¹?",
        de: "Was ist die Halbwertszeit einer Reaktion erster Ordnung mit einer Geschwindigkeitskonstante von 0,693 s⁻¹?",
        nl: "Wat is de halfwaardetijd van een eerste-orde reactie met een snelheidsconstante van 0,693 s⁻¹?"
      },
      options: [
        { en: "0.5 s", es: "0.5 s", de: "0,5 s", nl: "0,5 s" },
        { en: "1.0 s", es: "1.0 s", de: "1,0 s", nl: "1,0 s" },
        { en: "1.44 s", es: "1.44 s", de: "1,44 s", nl: "1,44 s" },
        { en: "2.0 s", es: "2.0 s", de: "2,0 s", nl: "2,0 s" }
      ],
      correct: 1,
      explanation: {
        en: "For first-order reactions, the half-life is given by t₁/₂ = ln(2)/k = 0.693/k. With k = 0.693 s⁻¹, t₁/₂ = 0.693/0.693 = 1.0 s. The half-life is independent of concentration for first-order reactions.",
        es: "Para reacciones de primer orden, la vida media está dada por t₁/₂ = ln(2)/k = 0.693/k. Con k = 0.693 s⁻¹, t₁/₂ = 0.693/0.693 = 1.0 s. La vida media es independiente de la concentración para reacciones de primer orden.",
        de: "Für Reaktionen erster Ordnung ist die Halbwertszeit gegeben durch t₁/₂ = ln(2)/k = 0,693/k. Mit k = 0,693 s⁻¹ ist t₁/₂ = 0,693/0,693 = 1,0 s. Die Halbwertszeit ist unabhängig von der Konzentration für Reaktionen erster Ordnung.",
        nl: "Voor eerste-orde reacties is de halfwaardetijd gegeven door t₁/₂ = ln(2)/k = 0,693/k. Met k = 0,693 s⁻¹ is t₁/₂ = 0,693/0,693 = 1,0 s. De halfwaardetijd is onafhankelijk van concentratie voor eerste-orde reacties."
      }
    },
    {
      question: {
        en: "In the Arrhenius equation k = Ae^(-Ea/RT), what happens to the rate constant when temperature increases?",
        es: "En la ecuación de Arrhenius k = Ae^(-Ea/RT), ¿qué pasa a la constante de velocidad cuando aumenta la temperatura?",
        de: "In der Arrhenius-Gleichung k = Ae^(-Ea/RT), was passiert mit der Geschwindigkeitskonstante, wenn die Temperatur steigt?",
        nl: "In de Arrhenius-vergelijking k = Ae^(-Ea/RT), wat gebeurt er met de snelheidsconstante als de temperatuur stijgt?"
      },
      options: [
        { en: "It decreases exponentially", es: "Disminuye exponencialmente", de: "Sie nimmt exponentiell ab", nl: "Het neemt exponentieel af" },
        { en: "It increases exponentially", es: "Aumenta exponencialmente", de: "Sie nimmt exponentiell zu", nl: "Het neemt exponentieel toe" },
        { en: "It remains constant", es: "Permanece constante", de: "Sie bleibt konstant", nl: "Het blijft constant" },
        { en: "It increases linearly", es: "Aumenta linealmente", de: "Sie nimmt linear zu", nl: "Het neemt lineair toe" }
      ],
      correct: 1,
      explanation: {
        en: "As temperature increases, the exponent -Ea/RT becomes less negative (closer to zero), making e^(-Ea/RT) larger. This causes the rate constant k to increase exponentially with temperature, explaining why reactions generally proceed faster at higher temperatures.",
        es: "Cuando la temperatura aumenta, el exponente -Ea/RT se vuelve menos negativo (más cerca de cero), haciendo que e^(-Ea/RT) sea mayor. Esto causa que la constante de velocidad k aumente exponencialmente con la temperatura, explicando por qué las reacciones generalmente proceden más rápido a temperaturas más altas.",
        de: "Wenn die Temperatur steigt, wird der Exponent -Ea/RT weniger negativ (näher zu null), wodurch e^(-Ea/RT) größer wird. Dies führt dazu, dass die Geschwindigkeitskonstante k exponentiell mit der Temperatur zunimmt, was erklärt, warum Reaktionen bei höheren Temperaturen schneller ablaufen.",
        nl: "Als de temperatuur stijgt, wordt de exponent -Ea/RT minder negatief (dichter bij nul), waardoor e^(-Ea/RT) groter wordt. Dit zorgt ervoor dat de snelheidsconstante k exponentieel toeneemt met temperatuur, wat verklaart waarom reacties over het algemeen sneller verlopen bij hogere temperaturen."
      }
    },
    {
      question: {
        en: "What type of intermediate is formed in an SN1 reaction mechanism?",
        es: "¿Qué tipo de intermedio se forma en un mecanismo de reacción SN1?",
        de: "Welche Art von Zwischenstufe wird in einem SN1-Reaktionsmechanismus gebildet?",
        nl: "Welk type tussenproduct wordt gevormd in een SN1-reactiemechanisme?"
      },
      options: [
        { en: "Free radical", es: "Radical libre", de: "Freies Radikal", nl: "Vrije radicaal" },
        { en: "Carbocation", es: "Carbocatión", de: "Carbokation", nl: "Carbokation" },
        { en: "Carbanion", es: "Carbanión", de: "Carbanion", nl: "Carbanion" },
        { en: "Transition state", es: "Estado de transición", de: "Übergangszustand", nl: "Overgangstoestand" }
      ],
      correct: 1,
      explanation: {
        en: "In SN1 reactions, the leaving group departs first to form a carbocation intermediate. This positively charged carbon species is then attacked by the nucleophile in a separate step, making SN1 a two-step mechanism.",
        es: "En reacciones SN1, el grupo saliente se va primero para formar un intermedio carbocatión. Esta especie de carbono con carga positiva es luego atacada por el nucleófilo en un paso separado, haciendo que SN1 sea un mecanismo de dos pasos.",
        de: "In SN1-Reaktionen verlässt die Abgangsgruppe zuerst, um ein Carbokation-Zwischenprodukt zu bilden. Diese positiv geladene Kohlenstoffspezies wird dann vom Nukleophil in einem separaten Schritt angegriffen, wodurch SN1 ein zweistufiger Mechanismus ist.",
        nl: "In SN1-reacties vertrekt de vertrekkende groep eerst om een carbokation-tussenproduct te vormen. Deze positief geladen koolstofspecies wordt dan aangevallen door de nucleofiel in een aparte stap, waardoor SN1 een tweestaps mechanisme is."
      }
    },
    {
      question: {
        en: "What is the molecularity of an elementary reaction step?",
        es: "¿Cuál es la molecularidad de un paso de reacción elemental?",
        de: "Was ist die Molekularität eines elementaren Reaktionsschrittes?",
        nl: "Wat is de moleculariteit van een elementaire reactiestap?"
      },
      options: [
        { en: "The number of bonds formed", es: "El número de enlaces formados", de: "Die Anzahl der gebildeten Bindungen", nl: "Het aantal gevormde bindingen" },
        { en: "The number of molecules that participate", es: "El número de moléculas que participan", de: "Die Anzahl der teilnehmenden Moleküle", nl: "Het aantal deelnemende moleculen" },
        { en: "The number of electrons transferred", es: "El número de electrones transferidos", de: "Die Anzahl der übertragenen Elektronen", nl: "Het aantal overgedragen elektronen" },
        { en: "The number of products formed", es: "El número de productos formados", de: "Die Anzahl der gebildeten Produkte", nl: "Het aantal gevormde producten" }
      ],
      correct: 1,
      explanation: {
        en: "Molecularity is the number of molecules that come together to react in an elementary step. It can be 1 (unimolecular), 2 (bimolecular), or rarely 3 (termolecular). Unlike reaction order, molecularity is always a positive integer.",
        es: "La molecularidad es el número de moléculas que se unen para reaccionar en un paso elemental. Puede ser 1 (unimolecular), 2 (bimolecular), o rara vez 3 (termolecular). A diferencia del orden de reacción, la molecularidad siempre es un entero positivo.",
        de: "Molekularität ist die Anzahl der Moleküle, die zusammenkommen, um in einem elementaren Schritt zu reagieren. Sie kann 1 (unimolekular), 2 (bimolekular) oder selten 3 (termolekular) sein. Im Gegensatz zur Reaktionsordnung ist die Molekularität immer eine positive ganze Zahl.",
        nl: "Moleculariteit is het aantal moleculen dat samenkomt om te reageren in een elementaire stap. Het kan 1 (unimoleculair), 2 (bimoleculair), of zelden 3 (termoleculair) zijn. In tegenstelling tot reactie-orde is moleculariteit altijd een positief geheel getal."
      }
    },
    {
      question: {
        en: "Which factor does NOT affect the rate of a chemical reaction?",
        es: "¿Qué factor NO afecta la velocidad de una reacción química?",
        de: "Welcher Faktor beeinflusst NICHT die Geschwindigkeit einer chemischen Reaktion?",
        nl: "Welke factor beïnvloedt NIET de snelheid van een chemische reactie?"
      },
      options: [
        { en: "Temperature", es: "Temperatura", de: "Temperatur", nl: "Temperatuur" },
        { en: "Concentration of reactants", es: "Concentración de reactivos", de: "Konzentration der Reaktanten", nl: "Concentratie van reactanten" },
        { en: "Enthalpy change (ΔH)", es: "Cambio de entalpía (ΔH)", de: "Enthalpieänderung (ΔH)", nl: "Enthalpieverandering (ΔH)" },
        { en: "Presence of catalyst", es: "Presencia de catalizador", de: "Anwesenheit eines Katalysators", nl: "Aanwezigheid van katalysator" }
      ],
      correct: 2,
      explanation: {
        en: "Enthalpy change (ΔH) determines whether a reaction is exothermic or endothermic but does not affect the reaction rate. The reaction rate depends on the activation energy, not the overall energy change of the reaction.",
        es: "El cambio de entalpía (ΔH) determina si una reacción es exotérmica o endotérmica pero no afecta la velocidad de reacción. La velocidad de reacción depende de la energía de activación, no del cambio energético total de la reacción.",
        de: "Die Enthalpieänderung (ΔH) bestimmt, ob eine Reaktion exotherm oder endotherm ist, beeinflusst aber nicht die Reaktionsgeschwindigkeit. Die Reaktionsgeschwindigkeit hängt von der Aktivierungsenergie ab, nicht von der Gesamtenergieänderung der Reaktion.",
        nl: "Enthalpieverandering (ΔH) bepaalt of een reactie exotherm of endotherm is maar beïnvloedt niet de reactiesnelheid. De reactiesnelheid hangt af van de activeringsenergie, niet van de totale energieverandering van de reactie."
      }
    },
    {
      question: {
        en: "What is the integrated rate law for a first-order reaction?",
        es: "¿Cuál es la ley de velocidad integrada para una reacción de primer orden?",
        de: "Was ist das integrierte Geschwindigkeitsgesetz für eine Reaktion erster Ordnung?",
        nl: "Wat is de geïntegreerde snelheidswet voor een eerste-orde reactie?"
      },
      options: [
        { en: "[A] = [A]₀ - kt", es: "[A] = [A]₀ - kt", de: "[A] = [A]₀ - kt", nl: "[A] = [A]₀ - kt" },
        { en: "ln[A] = ln[A]₀ - kt", es: "ln[A] = ln[A]₀ - kt", de: "ln[A] = ln[A]₀ - kt", nl: "ln[A] = ln[A]₀ - kt" },
        { en: "1/[A] = 1/[A]₀ + kt", es: "1/[A] = 1/[A]₀ + kt", de: "1/[A] = 1/[A]₀ + kt", nl: "1/[A] = 1/[A]₀ + kt" },
        { en: "[A]² = [A]₀² - kt", es: "[A]² = [A]₀² - kt", de: "[A]² = [A]₀² - kt", nl: "[A]² = [A]₀² - kt" }
      ],
      correct: 1,
      explanation: {
        en: "For first-order reactions, the integrated rate law is ln[A] = ln[A]₀ - kt, where [A] is concentration at time t, [A]₀ is initial concentration, k is the rate constant, and t is time. This shows exponential decay of reactant concentration.",
        es: "Para reacciones de primer orden, la ley de velocidad integrada es ln[A] = ln[A]₀ - kt, donde [A] es la concentración en el tiempo t, [A]₀ es la concentración inicial, k es la constante de velocidad, y t es el tiempo. Esto muestra decaimiento exponencial de la concentración del reactivo.",
        de: "Für Reaktionen erster Ordnung ist das integrierte Geschwindigkeitsgesetz ln[A] = ln[A]₀ - kt, wobei [A] die Konzentration zur Zeit t ist, [A]₀ die Anfangskonzentration, k die Geschwindigkeitskonstante und t die Zeit. Dies zeigt exponentiellen Zerfall der Reaktantenkonzentration.",
        nl: "Voor eerste-orde reacties is de geïntegreerde snelheidswet ln[A] = ln[A]₀ - kt, waarbij [A] de concentratie op tijd t is, [A]₀ de beginconcentratie, k de snelheidsconstante, en t de tijd. Dit toont exponentieel verval van reactantconcentratie."
      }
    },
    {
      question: {
        en: "In competitive inhibition of enzymes, how does the inhibitor affect the Km and Vmax values?",
        es: "En inhibición competitiva de enzimas, ¿cómo afecta el inhibidor los valores de Km y Vmax?",
        de: "Bei kompetitiver Enzymhemmung, wie beeinflusst der Inhibitor die Km- und Vmax-Werte?",
        nl: "In competitieve remming van enzymen, hoe beïnvloedt de remmer de Km en Vmax waarden?"
      },
      options: [
        { en: "Increases Km, decreases Vmax", es: "Aumenta Km, disminuye Vmax", de: "Erhöht Km, verringert Vmax", nl: "Verhoogt Km, verlaagt Vmax" },
        { en: "Increases Km, Vmax unchanged", es: "Aumenta Km, Vmax sin cambios", de: "Erhöht Km, Vmax unverändert", nl: "Verhoogt Km, Vmax onveranderd" },
        { en: "Km unchanged, decreases Vmax", es: "Km sin cambios, disminuye Vmax", de: "Km unverändert, verringert Vmax", nl: "Km onveranderd, verlaagt Vmax" },
        { en: "Decreases Km, increases Vmax", es: "Disminuye Km, aumenta Vmax", de: "Verringert Km, erhöht Vmax", nl: "Verlaagt Km, verhoogt Vmax" }
      ],
      correct: 1,
      explanation: {
        en: "In competitive inhibition, the inhibitor competes with substrate for the active site, effectively increasing the apparent Km (requiring higher substrate concentration to reach half-maximum velocity). However, Vmax remains unchanged because the inhibition can be overcome by increasing substrate concentration.",
        es: "En inhibición competitiva, el inhibidor compite con el sustrato por el sitio activo, aumentando efectivamente el Km aparente (requiriendo mayor concentración de sustrato para alcanzar velocidad semi-máxima). Sin embargo, Vmax permanece sin cambios porque la inhibición puede superarse aumentando la concentración de sustrato.",
        de: "Bei kompetitiver Hemmung konkurriert der Inhibitor mit dem Substrat um die aktive Stelle, wodurch das scheinbare Km effektiv erhöht wird (höhere Substratkonzentration erforderlich, um halbmaximale Geschwindigkeit zu erreichen). Vmax bleibt jedoch unverändert, weil die Hemmung durch Erhöhung der Substratkonzentration überwunden werden kann.",
        nl: "In competitieve remming concurreert de remmer met het substraat om de actieve plaats, waardoor de schijnbare Km effectief wordt verhoogd (hogere substraatconcentratie nodig om half-maximale snelheid te bereiken). Echter, Vmax blijft onveranderd omdat de remming kan worden overwonnen door substraatconcentratie te verhogen."
      }
    },
    {
      question: {
        en: "What is the transition state theory's explanation for reaction rates?",
        es: "¿Cuál es la explicación de la teoría del estado de transición para las velocidades de reacción?",
        de: "Was ist die Erklärung der Übergangszustandstheorie für Reaktionsgeschwindigkeiten?",
        nl: "Wat is de verklaring van de overgangstoestand theorie voor reactiesnelheden?"
      },
      options: [
        { en: "Reactions occur through direct collision of reactants", es: "Las reacciones ocurren por colisión directa de reactivos", de: "Reaktionen erfolgen durch direkte Kollision der Reaktanten", nl: "Reacties treden op door directe botsing van reactanten" },
        { en: "Reactions proceed through a high-energy transition state", es: "Las reacciones proceden a través de un estado de transición de alta energía", de: "Reaktionen verlaufen über einen hochenergetischen Übergangszustand", nl: "Reacties verlopen via een hoge-energie overgangstoestand" },
        { en: "Reactions follow quantum mechanical tunneling", es: "Las reacciones siguen tunelaje cuántico", de: "Reaktionen folgen dem Quantentunneln", nl: "Reacties volgen kwantummechanische tunneling" },
        { en: "Reactions require specific molecular orientations", es: "Las reacciones requieren orientaciones moleculares específicas", de: "Reaktionen erfordern spezifische Molekülorientierungen", nl: "Reacties vereisen specifieke moleculaire oriëntaties" }
      ],
      correct: 1,
      explanation: {
        en: "Transition state theory proposes that reactants must pass through a high-energy transition state (activated complex) to form products. The energy barrier to reach this transition state determines the reaction rate, with higher barriers leading to slower reactions.",
        es: "La teoría del estado de transición propone que los reactivos deben pasar a través de un estado de transición de alta energía (complejo activado) para formar productos. La barrera energética para alcanzar este estado de transición determina la velocidad de reacción, con barreras más altas llevando a reacciones más lentas.",
        de: "Die Übergangszustandstheorie schlägt vor, dass Reaktanten durch einen hochenergetischen Übergangszustand (aktivierter Komplex) gehen müssen, um Produkte zu bilden. Die Energiebarriere zum Erreichen dieses Übergangszustands bestimmt die Reaktionsgeschwindigkeit, wobei höhere Barrieren zu langsameren Reaktionen führen.",
        nl: "Overgangstoestand theorie stelt voor dat reactanten door een hoge-energie overgangstoestand (geactiveerd complex) moeten gaan om producten te vormen. De energiebarrière om deze overgangstoestand te bereiken bepaalt de reactiesnelheid, waarbij hogere barrières leiden tot langzamere reacties."
      }
    },
    {
      question: {
        en: "What is the effect of increasing temperature on the equilibrium constant of an exothermic reaction?",
        es: "¿Cuál es el efecto de aumentar la temperatura en la constante de equilibrio de una reacción exotérmica?",
        de: "Was ist der Effekt einer Temperaturerhöhung auf die Gleichgewichtskonstante einer exothermen Reaktion?",
        nl: "Wat is het effect van temperatuurverhoging op de evenwichtsconstante van een exotherme reactie?"
      },
      options: [
        { en: "K increases", es: "K aumenta", de: "K steigt", nl: "K neemt toe" },
        { en: "K decreases", es: "K disminuye", de: "K sinkt", nl: "K neemt af" },
        { en: "K remains constant", es: "K permanece constante", de: "K bleibt konstant", nl: "K blijft constant" },
        { en: "K becomes zero", es: "K se vuelve cero", de: "K wird null", nl: "K wordt nul" }
      ],
      correct: 1,
      explanation: {
        en: "For exothermic reactions, increasing temperature favors the reverse (endothermic) direction according to Le Chatelier's principle. This shifts the equilibrium toward reactants, decreasing the equilibrium constant K. The van 't Hoff equation quantifies this temperature dependence.",
        es: "Para reacciones exotérmicas, aumentar la temperatura favorece la dirección inversa (endotérmica) según el principio de Le Chatelier. Esto desplaza el equilibrio hacia los reactivos, disminuyendo la constante de equilibrio K. La ecuación de van 't Hoff cuantifica esta dependencia de la temperatura.",
        de: "Bei exothermen Reaktionen begünstigt eine Temperaturerhöhung die umgekehrte (endotherme) Richtung nach dem Prinzip von Le Chatelier. Dies verschiebt das Gleichgewicht zu den Reaktanten und verringert die Gleichgewichtskonstante K. Die van-'t-Hoff-Gleichung quantifiziert diese Temperaturabhängigkeit.",
        nl: "Voor exotherme reacties begunstigt temperatuurverhoging de omgekeerde (endotherme) richting volgens het principe van Le Chatelier. Dit verschuift het evenwicht naar reactanten, waardoor de evenwichtsconstante K afneemt. De van 't Hoff vergelijking kwantificeert deze temperatuurafhankelijkheid."
      }
    },
    {
      question: {
        en: "In a zero-order reaction, what is the relationship between concentration and time?",
        es: "En una reacción de orden cero, ¿cuál es la relación entre concentración y tiempo?",
        de: "Bei einer Reaktion nullter Ordnung, was ist die Beziehung zwischen Konzentration und Zeit?",
        nl: "In een nulde-orde reactie, wat is de relatie tussen concentratie en tijd?"
      },
      options: [
        { en: "Exponential decay", es: "Decaimiento exponencial", de: "Exponentieller Zerfall", nl: "Exponentieel verval" },
        { en: "Linear decrease", es: "Disminución lineal", de: "Linearer Rückgang", nl: "Lineaire afname" },
        { en: "Quadratic decrease", es: "Disminución cuadrática", de: "Quadratischer Rückgang", nl: "Kwadratische afname" },
        { en: "Logarithmic decrease", es: "Disminución logarítmica", de: "Logarithmischer Rückgang", nl: "Logaritmische afname" }
      ],
      correct: 1,
      explanation: {
        en: "In zero-order reactions, the rate is independent of concentration: Rate = k. The integrated rate law is [A] = [A]₀ - kt, showing a linear decrease in concentration over time with slope = -k.",
        es: "En reacciones de orden cero, la velocidad es independiente de la concentración: Velocidad = k. La ley de velocidad integrada es [A] = [A]₀ - kt, mostrando una disminución lineal en concentración con el tiempo con pendiente = -k.",
        de: "Bei Reaktionen nullter Ordnung ist die Geschwindigkeit unabhängig von der Konzentration: Rate = k. Das integrierte Geschwindigkeitsgesetz ist [A] = [A]₀ - kt, was eine lineare Abnahme der Konzentration über die Zeit mit Steigung = -k zeigt.",
        nl: "In nulde-orde reacties is de snelheid onafhankelijk van concentratie: Snelheid = k. De geïntegreerde snelheidswet is [A] = [A]₀ - kt, wat een lineaire afname in concentratie over tijd toont met helling = -k."
      }
    },
    {
      question: {
        en: "What is the pre-exponential factor (A) in the Arrhenius equation?",
        es: "¿Qué es el factor preexponencial (A) en la ecuación de Arrhenius?",
        de: "Was ist der Vorfaktor (A) in der Arrhenius-Gleichung?",
        nl: "Wat is de pre-exponentiële factor (A) in de Arrhenius-vergelijking?"
      },
      options: [
        { en: "The activation energy", es: "La energía de activación", de: "Die Aktivierungsenergie", nl: "De activeringsenergie" },
        { en: "The frequency of molecular collisions", es: "La frecuencia de colisiones moleculares", de: "Die Häufigkeit molekularer Kollisionen", nl: "De frequentie van moleculaire botsingen" },
        { en: "The temperature coefficient", es: "El coeficiente de temperatura", de: "Der Temperaturkoeffizient", nl: "De temperatuurcoëfficiënt" },
        { en: "The gas constant", es: "La constante de gases", de: "Die Gaskonstante", nl: "De gasconstante" }
      ],
      correct: 1,
      explanation: {
        en: "The pre-exponential factor (A) represents the frequency of molecular collisions with proper orientation for reaction. It accounts for the collision frequency and steric factors, essentially the maximum possible rate constant if all collisions had sufficient energy.",
        es: "El factor preexponencial (A) representa la frecuencia de colisiones moleculares con orientación apropiada para la reacción. Considera la frecuencia de colisión y factores estéricos, esencialmente la constante de velocidad máxima posible si todas las colisiones tuvieran energía suficiente.",
        de: "Der Vorfaktor (A) repräsentiert die Häufigkeit molekularer Kollisionen mit der richtigen Orientierung für die Reaktion. Er berücksichtigt die Kollisionsfrequenz und sterische Faktoren, im Wesentlichen die maximal mögliche Geschwindigkeitskonstante, wenn alle Kollisionen ausreichende Energie hätten.",
        nl: "De pre-exponentiële factor (A) vertegenwoordigt de frequentie van moleculaire botsingen met de juiste oriëntatie voor reactie. Het houdt rekening met botsingsfrequentie en sterische factoren, essentially de maximaal mogelijke snelheidsconstante als alle botsingen voldoende energie hadden."
      }
    },
    {
      question: {
        en: "Which statement best describes autocatalysis?",
        es: "¿Cuál afirmación describe mejor la autocatálisis?",
        de: "Welche Aussage beschreibt Autokatalyse am besten?",
        nl: "Welke bewering beschrijft autocatalyse het beste?"
      },
      options: [
        { en: "The reaction is catalyzed by an external catalyst", es: "La reacción es catalizada por un catalizador externo", de: "Die Reaktion wird von einem externen Katalysator katalysiert", nl: "De reactie wordt gekatalyseerd door een externe katalysator" },
        { en: "One of the reaction products acts as a catalyst", es: "Uno de los productos de reacción actúa como catalizador", de: "Eines der Reaktionsprodukte wirkt als Katalysator", nl: "Een van de reactieproducten werkt als katalysator" },
        { en: "The reaction occurs without any catalyst", es: "La reacción ocurre sin catalizador", de: "Die Reaktion erfolgt ohne Katalysator", nl: "De reactie treedt op zonder katalysator" },
        { en: "The catalyst is consumed during the reaction", es: "El catalizador se consume durante la reacción", de: "Der Katalysator wird während der Reaktion verbraucht", nl: "De katalysator wordt verbruikt tijdens de reactie" }
      ],
      correct: 1,
      explanation: {
        en: "Autocatalysis occurs when one of the products of a reaction acts as a catalyst for that same reaction. This creates a positive feedback loop where the reaction accelerates as more product (catalyst) is formed, leading to characteristic S-shaped kinetic curves.",
        es: "La autocatálisis ocurre cuando uno de los productos de una reacción actúa como catalizador para esa misma reacción. Esto crea un bucle de retroalimentación positiva donde la reacción se acelera al formarse más producto (catalizador), llevando a curvas cinéticas características en forma de S.",
        de: "Autokatalyse tritt auf, wenn eines der Produkte einer Reaktion als Katalysator für dieselbe Reaktion wirkt. Dies erzeugt eine positive Rückkopplung, bei der die Reaktion beschleunigt wird, während mehr Produkt (Katalysator) gebildet wird, was zu charakteristischen S-förmigen kinetischen Kurven führt.",
        nl: "Autocatalyse treedt op wanneer een van de producten van een reactie als katalysator werkt voor diezelfde reactie. Dit creëert een positieve feedbacklus waarbij de reactie versnelt naarmate meer product (katalysator) wordt gevormd, wat leidt tot karakteristieke S-vormige kinetische curven."
      }
    },
    {
      question: {
        en: "What is the relationship between rate constants for forward and reverse reactions at equilibrium?",
        es: "¿Cuál es la relación entre las constantes de velocidad para reacciones directa e inversa en equilibrio?",
        de: "Was ist die Beziehung zwischen den Geschwindigkeitskonstanten für Hin- und Rückreaktionen im Gleichgewicht?",
        nl: "Wat is de relatie tussen snelheidsconstanten voor voorwaartse en achterwaartse reacties bij evenwicht?"
      },
      options: [
        { en: "kforward = kreverse", es: "kdirecta = kinversa", de: "kvorwärts = krückwärts", nl: "kvoorwaarts = kachterwaarts" },
        { en: "kforward × kreverse = K", es: "kdirecta × kinversa = K", de: "kvorwärts × krückwärts = K", nl: "kvoorwaarts × kachterwaarts = K" },
        { en: "kforward / kreverse = K", es: "kdirecta / kinversa = K", de: "kvorwärts / krückwärts = K", nl: "kvoorwaarts / kachterwaarts = K" },
        { en: "kforward - kreverse = K", es: "kdirecta - kinversa = K", de: "kvorwärts - krückwärts = K", nl: "kvoorwaarts - kachterwaarts = K" }
      ],
      correct: 2,
      explanation: {
        en: "At equilibrium, the equilibrium constant K equals the ratio of forward to reverse rate constants: K = kforward/kreverse. This relationship comes from the fact that at equilibrium, the forward and reverse rates are equal.",
        es: "En equilibrio, la constante de equilibrio K es igual a la razón de constantes de velocidad directa e inversa: K = kdirecta/kinversa. Esta relación proviene del hecho de que en equilibrio, las velocidades directa e inversa son iguales.",
        de: "Im Gleichgewicht entspricht die Gleichgewichtskonstante K dem Verhältnis der Vorwärts- zu Rückwärts-Geschwindigkeitskonstanten: K = kvorwärts/krückwärts. Diese Beziehung ergibt sich daraus, dass im Gleichgewicht die Vorwärts- und Rückwärtsgeschwindigkeiten gleich sind.",
        nl: "Bij evenwicht is de evenwichtsconstante K gelijk aan de verhouding van voorwaartse tot achterwaartse snelheidsconstanten: K = kvoorwaarts/kachterwaarts. Deze relatie komt voort uit het feit dat bij evenwicht de voorwaartse en achterwaartse snelheden gelijk zijn."
      }
    },
    {
      question: {
        en: "What is the collision theory's requirement for a successful reaction?",
        es: "¿Cuál es el requisito de la teoría de colisiones para una reacción exitosa?",
        de: "Was ist die Anforderung der Kollisionstheorie für eine erfolgreiche Reaktion?",
        nl: "Wat is de vereiste van de botsingstheorie voor een succesvolle reactie?"
      },
      options: [
        { en: "Only sufficient kinetic energy", es: "Solo energía cinética suficiente", de: "Nur ausreichende kinetische Energie", nl: "Alleen voldoende kinetische energie" },
        { en: "Only proper molecular orientation", es: "Solo orientación molecular apropiada", de: "Nur richtige Molekülorientierung", nl: "Alleen juiste moleculaire oriëntatie" },
        { en: "Both sufficient energy and proper orientation", es: "Tanto energía suficiente como orientación apropiada", de: "Sowohl ausreichende Energie als auch richtige Orientierung", nl: "Zowel voldoende energie als juiste oriëntatie" },
        { en: "Presence of a catalyst", es: "Presencia de un catalizador", de: "Anwesenheit eines Katalysators", nl: "Aanwezigheid van een katalysator" }
      ],
      correct: 2,
      explanation: {
        en: "According to collision theory, for a reaction to occur, colliding molecules must have both sufficient kinetic energy (≥ activation energy) and proper spatial orientation to allow bond breaking and formation. The steric factor accounts for the orientation requirement.",
        es: "Según la teoría de colisiones, para que ocurra una reacción, las moléculas que colisionan deben tener tanto energía cinética suficiente (≥ energía de activación) como orientación espacial apropiada para permitir ruptura y formación de enlaces. El factor estérico considera el requisito de orientación.",
        de: "Nach der Kollisionstheorie müssen kollidierende Moleküle sowohl ausreichende kinetische Energie (≥ Aktivierungsenergie) als auch die richtige räumliche Orientierung haben, um Bindungsbruch und -bildung zu ermöglichen. Der sterische Faktor berücksichtigt die Orientierungsanforderung.",
        nl: "Volgens de botsingstheorie moeten botsende moleculen voor een reactie zowel voldoende kinetische energie hebben (≥ activeringsenergie) als de juiste ruimtelijke oriëntatie om bindingsbreking en -vorming mogelijk te maken. De sterische factor houdt rekening met de oriëntatievereiste."
      }
    },
    {
      question: {
        en: "What characterizes a chain reaction mechanism?",
        es: "¿Qué caracteriza un mecanismo de reacción en cadena?",
        de: "Was charakterisiert einen Kettenreaktionsmechanismus?",
        nl: "Wat kenmerkt een kettingreactiemechanisme?"
      },
      options: [
        { en: "Single initiation step only", es: "Solo paso de iniciación único", de: "Nur ein einzelner Initiierungsschritt", nl: "Alleen enkele initiatiestap" },
        { en: "Initiation, propagation, and termination steps", es: "Pasos de iniciación, propagación y terminación", de: "Initiierungs-, Fortpflanzungs- und Terminierungsschritte", nl: "Initiatie-, propagatie- en terminatiestappen" },
        { en: "Only termination steps", es: "Solo pasos de terminación", de: "Nur Terminierungsschritte", nl: "Alleen terminatiestappen" },
        { en: "Parallel reaction pathways", es: "Vías de reacción paralelas", de: "Parallele Reaktionswege", nl: "Parallelle reactieroutes" }
      ],
      correct: 1,
      explanation: {
        en: "Chain reaction mechanisms consist of three types of steps: initiation (formation of reactive intermediates like radicals), propagation (reactions that consume and regenerate intermediates), and termination (reactions that remove intermediates and end the chain).",
        es: "Los mecanismos de reacción en cadena consisten en tres tipos de pasos: iniciación (formación de intermedios reactivos como radicales), propagación (reacciones que consumen y regeneran intermedios), y terminación (reacciones que eliminan intermedios y terminan la cadena).",
        de: "Kettenreaktionsmechanismen bestehen aus drei Arten von Schritten: Initiierung (Bildung reaktiver Zwischenprodukte wie Radikale), Fortpflanzung (Reaktionen, die Zwischenprodukte verbrauchen und regenerieren), und Terminierung (Reaktionen, die Zwischenprodukte entfernen und die Kette beenden).",
        nl: "Kettingreactiemechanismen bestaan uit drie soorten stappen: initiatie (vorming van reactieve tussenproducten zoals radicalen), propagatie (reacties die tussenproducten verbruiken en regenereren), en terminatie (reacties die tussenproducten verwijderen en de ketting beëindigen)."
      }
    },
    {
      question: {
        en: "How does the addition of an inert gas at constant volume affect the rate of a gas-phase reaction?",
        es: "¿Cómo afecta la adición de un gas inerte a volumen constante la velocidad de una reacción en fase gaseosa?",
        de: "Wie beeinflusst die Zugabe eines inerten Gases bei konstantem Volumen die Geschwindigkeit einer Gasphasenreaktion?",
        nl: "Hoe beïnvloedt de toevoeging van een inert gas bij constant volume de snelheid van een gasfase-reactie?"
      },
      options: [
        { en: "Increases the reaction rate", es: "Aumenta la velocidad de reacción", de: "Erhöht die Reaktionsgeschwindigkeit", nl: "Verhoogt de reactiesnelheid" },
        { en: "Decreases the reaction rate", es: "Disminuye la velocidad de reacción", de: "Verringert die Reaktionsgeschwindigkeit", nl: "Verlaagt de reactiesnelheid" },
        { en: "No effect on reaction rate", es: "Sin efecto en la velocidad de reacción", de: "Kein Effekt auf die Reaktionsgeschwindigkeit", nl: "Geen effect op reactiesnelheid" },
        { en: "Stops the reaction", es: "Detiene la reacción", de: "Stoppt die Reaktion", nl: "Stopt de reactie" }
      ],
      correct: 2,
      explanation: {
        en: "Adding an inert gas at constant volume does not affect the reaction rate because the partial pressures (and thus concentrations) of the reactants remain unchanged. The inert gas does not participate in the reaction and doesn't alter the collision frequency between reactants.",
        es: "Añadir un gas inerte a volumen constante no afecta la velocidad de reacción porque las presiones parciales (y por tanto las concentraciones) de los reactivos permanecen sin cambios. El gas inerte no participa en la reacción y no altera la frecuencia de colisión entre reactivos.",
        de: "Die Zugabe eines inerten Gases bei konstantem Volumen beeinflusst die Reaktionsgeschwindigkeit nicht, da die Partialdrücke (und damit die Konzentrationen) der Reaktanten unverändert bleiben. Das inerte Gas nimmt nicht an der Reaktion teil und verändert nicht die Kollisionsfrequenz zwischen den Reaktanten.",
        nl: "Het toevoegen van een inert gas bij constant volume beïnvloedt de reactiesnelheid niet omdat de partiële drukken (en dus concentraties) van de reactanten onveranderd blijven. Het inerte gas neemt niet deel aan de reactie en verandert de botsingsfrequentie tussen reactanten niet."
      }
    },
    {
      question: {
        en: "What is the steady-state approximation used for in reaction mechanisms?",
        es: "¿Para qué se usa la aproximación de estado estacionario en mecanismos de reacción?",
        de: "Wofür wird die Steady-State-Näherung in Reaktionsmechanismen verwendet?",
        nl: "Waarvoor wordt de steady-state benadering gebruikt in reactiemechanismen?"
      },
      options: [
        { en: "To determine the overall reaction stoichiometry", es: "Para determinar la estequiometría general de la reacción", de: "Zur Bestimmung der Gesamtreaktionsstöchiometrie", nl: "Om de algehele reactiestoichiometrie te bepalen" },
        { en: "To simplify rate laws for reactive intermediates", es: "Para simplificar leyes de velocidad para intermedios reactivos", de: "Zur Vereinfachung von Geschwindigkeitsgesetzen für reaktive Zwischenprodukte", nl: "Om snelheidswetten voor reactieve tussenproducten te vereenvoudigen" },
        { en: "To calculate activation energies", es: "Para calcular energías de activación", de: "Zur Berechnung von Aktivierungsenergien", nl: "Om activeringsenergieën te berekenen" },
        { en: "To determine reaction thermodynamics", es: "Para determinar la termodinámica de reacción", de: "Zur Bestimmung der Reaktionsthermodynamik", nl: "Om reactiethermodyn‭amica te bepalen" }
      ],
      correct: 1,
      explanation: {
        en: "The steady-state approximation assumes that the concentration of reactive intermediates remains approximately constant during the reaction. This allows setting d[intermediate]/dt ≈ 0, simplifying the derivation of rate laws for complex multi-step mechanisms.",
        es: "La aproximación de estado estacionario asume que la concentración de intermedios reactivos permanece aproximadamente constante durante la reacción. Esto permite establecer d[intermedio]/dt ≈ 0, simplificando la derivación de leyes de velocidad para mecanismos complejos de múltiples pasos.",
        de: "Die Steady-State-Näherung nimmt an, dass die Konzentration reaktiver Zwischenprodukte während der Reaktion ungefähr konstant bleibt. Dies ermöglicht es, d[Zwischenprodukt]/dt ≈ 0 zu setzen und vereinfacht die Ableitung von Geschwindigkeitsgesetzen für komplexe mehrstufige Mechanismen.",
        nl: "De steady-state benadering veronderstelt dat de concentratie van reactieve tussenproducten ongeveer constant blijft tijdens de reactie. Dit maakt het mogelijk om d[tussenproduct]/dt ≈ 0 te stellen, wat de afleiding van snelheidswetten voor complexe meerstaps mechanismen vereenvoudigt."
      }
    },
    {
      question: {
        en: "In unimolecular reactions, what is the relationship between the observed rate and the pressure of the reactant gas?",
        es: "En reacciones unimoleculares, ¿cuál es la relación entre la velocidad observada y la presión del gas reactivo?",
        de: "Bei unimolekularen Reaktionen, was ist die Beziehung zwischen der beobachteten Geschwindigkeit und dem Druck des Reaktantengases?",
        nl: "In unimoleculaire reacties, wat is de relatie tussen de waargenomen snelheid en de druk van het reactantgas?"
      },
      options: [
        { en: "Always first-order in pressure", es: "Siempre primer orden en presión", de: "Immer erste Ordnung im Druck", nl: "Altijd eerste orde in druk" },
        { en: "First-order at high pressure, zero-order at low pressure", es: "Primer orden a alta presión, orden cero a baja presión", de: "Erste Ordnung bei hohem Druck, nullte Ordnung bei niedrigem Druck", nl: "Eerste orde bij hoge druk, nulde orde bij lage druk" },
        { en: "Zero-order at high pressure, first-order at low pressure", es: "Orden cero a alta presión, primer orden a baja presión", de: "Nullte Ordnung bei hohem Druck, erste Ordnung bei niedrigem Druck", nl: "Nulde orde bij hoge druk, eerste orde bij lage druk" },
        { en: "Always second-order in pressure", es: "Siempre segundo orden en presión", de: "Immer zweite Ordnung im Druck", nl: "Altijd tweede orde in druk" }
      ],
      correct: 1,
      explanation: {
        en: "According to the Lindemann-Hinshelwood mechanism, unimolecular reactions show first-order kinetics at high pressures (where collisional activation is fast) and approach zero-order kinetics at very low pressures (where collisional activation becomes rate-limiting).",
        es: "Según el mecanismo de Lindemann-Hinshelwood, las reacciones unimoleculares muestran cinética de primer orden a altas presiones (donde la activación por colisión es rápida) y se aproximan a cinética de orden cero a presiones muy bajas (donde la activación por colisión se vuelve limitante de la velocidad).",
        de: "Nach dem Lindemann-Hinshelwood-Mechanismus zeigen unimolekulare Reaktionen Kinetik erster Ordnung bei hohen Drücken (wo die Kollisionsaktivierung schnell ist) und nähern sich der Kinetik nullter Ordnung bei sehr niedrigen Drücken (wo die Kollisionsaktivierung geschwindigkeitsbestimmend wird).",
        nl: "Volgens het Lindemann-Hinshelwood mechanisme tonen unimoleculaire reacties eerste-orde kinetiek bij hoge drukken (waar botsingsactivering snel is) en benaderen nulde-orde kinetiek bij zeer lage drukken (waar botsingsactivering snelheidsbepalend wordt)."
      }
    },
    {
      question: {
        en: "What is the kinetic isotope effect?",
        es: "¿Qué es el efecto isotópico cinético?",
        de: "Was ist der kinetische Isotopeneffekt?",
        nl: "Wat is het kinetische isotoop-effect?"
      },
      options: [
        { en: "Different isotopes have different equilibrium constants", es: "Diferentes isótopos tienen diferentes constantes de equilibrio", de: "Verschiedene Isotope haben unterschiedliche Gleichgewichtskonstanten", nl: "Verschillende isotopen hebben verschillende evenwichtsconstanten" },
        { en: "Different isotopes react at different rates", es: "Diferentes isótopos reaccionan a diferentes velocidades", de: "Verschiedene Isotope reagieren mit unterschiedlichen Geschwindigkeiten", nl: "Verschillende isotopen reageren met verschillende snelheden" },
        { en: "Isotopes change the reaction mechanism", es: "Los isótopos cambian el mecanismo de reacción", de: "Isotope ändern den Reaktionsmechanismus", nl: "Isotopen veranderen het reactiemechanisme" },
        { en: "Isotopes affect only the thermodynamics", es: "Los isótopos afectan solo la termodinámica", de: "Isotope beeinflussen nur die Thermodynamik", nl: "Isotopen beïnvloeden alleen de thermodynamica" }
      ],
      correct: 1,
      explanation: {
        en: "The kinetic isotope effect refers to the phenomenon where different isotopes of the same element react at different rates due to differences in their vibrational frequencies and zero-point energies. Heavier isotopes typically react slower, with deuterium showing particularly large effects.",
        es: "El efecto isotópico cinético se refiere al fenómeno donde diferentes isótopos del mismo elemento reaccionan a diferentes velocidades debido a diferencias en sus frecuencias vibracionales y energías de punto cero. Los isótopos más pesados típicamente reaccionan más lentamente, con el deuterio mostrando efectos particularmente grandes.",
        de: "Der kinetische Isotopeneffekt bezieht sich auf das Phänomen, dass verschiedene Isotope desselben Elements mit unterschiedlichen Geschwindigkeiten reagieren aufgrund von Unterschieden in ihren Schwingungsfrequenzen und Nullpunktsenergien. Schwerere Isotope reagieren typischerweise langsamer, wobei Deuterium besonders große Effekte zeigt.",
        nl: "Het kinetische isotoop-effect verwijst naar het fenomeen waarbij verschillende isotopen van hetzelfde element met verschillende snelheden reageren vanwege verschillen in hun trillingsfrequenties en nulpuntsenergieën. Zwaardere isotopen reageren typisch langzamer, waarbij deuterium bijzonder grote effecten toont."
      }
    },
    {
      question: {
        en: "What does a negative activation energy indicate?",
        es: "¿Qué indica una energía de activación negativa?",
        de: "Was zeigt eine negative Aktivierungsenergie an?",
        nl: "Wat geeft een negatieve activeringsenergie aan?"
      },
      options: [
        { en: "The reaction is thermodynamically unfavorable", es: "La reacción es termodinámicamente desfavorable", de: "Die Reaktion ist thermodynamisch ungünstig", nl: "De reactie is thermodynamisch ongunstig" },
        { en: "The reaction rate decreases with temperature", es: "La velocidad de reacción disminuye con la temperatura", de: "Die Reaktionsgeschwindigkeit nimmt mit der Temperatur ab", nl: "De reactiesnelheid neemt af met temperatuur" },
        { en: "The reaction proceeds through tunneling", es: "La reacción procede por tunelaje", de: "Die Reaktion verläuft durch Tunneln", nl: "De reactie verloopt via tunneling" },
        { en: "The reaction is impossible", es: "La reacción es imposible", de: "Die Reaktion ist unmöglich", nl: "De reactie is onmogelijk" }
      ],
      correct: 1,
      explanation: {
        en: "A negative activation energy indicates that the reaction rate decreases as temperature increases. This can occur in complex reactions where the pre-equilibrium step has a negative enthalpy change, or in some enzyme-catalyzed reactions where protein denaturation occurs at higher temperatures.",
        es: "Una energía de activación negativa indica que la velocidad de reacción disminuye cuando aumenta la temperatura. Esto puede ocurrir en reacciones complejas donde el paso de preequilibrio tiene un cambio de entalpía negativo, o en algunas reacciones catalizadas por enzimas donde ocurre desnaturalización de proteínas a temperaturas más altas.",
        de: "Eine negative Aktivierungsenergie zeigt an, dass die Reaktionsgeschwindigkeit mit steigender Temperatur abnimmt. Dies kann bei komplexen Reaktionen auftreten, bei denen der Vorgleichgewichtsschritt eine negative Enthalpieänderung hat, oder bei einigen enzymkatalysierten Reaktionen, bei denen Proteindenaturierung bei höheren Temperaturen auftritt.",
        nl: "Een negatieve activeringsenergie geeft aan dat de reactiesnelheid afneemt naarmate de temperatuur stijgt. Dit kan optreden in complexe reacties waar de pre-evenwichtsstap een negatieve enthalpieverandering heeft, of in sommige enzym-gekatalyseerde reacties waar eiwitdenaturatie optreedt bij hogere temperaturen."
      }
    },
    {
      question: {
        en: "In photochemistry, what is the quantum yield?",
        es: "En fotoquímica, ¿qué es el rendimiento cuántico?",
        de: "Was ist die Quantenausbeute in der Photochemie?",
        nl: "Wat is de kwantumopbrengst in fotochemie?"
      },
      options: [
        { en: "The energy of a photon", es: "La energía de un fotón", de: "Die Energie eines Photons", nl: "De energie van een foton" },
        { en: "The number of molecules that react per photon absorbed", es: "El número de moléculas que reaccionan por fotón absorbido", de: "Die Anzahl der Moleküle, die pro absorbiertem Photon reagieren", nl: "Het aantal moleculen dat reageert per geabsorbeerd foton" },
        { en: "The wavelength of light used", es: "La longitud de onda de luz usada", de: "Die Wellenlänge des verwendeten Lichts", nl: "De golflengte van gebruikt licht" },
        { en: "The intensity of the light source", es: "La intensidad de la fuente de luz", de: "Die Intensität der Lichtquelle", nl: "De intensiteit van de lichtbron" }
      ],
      correct: 1,
      explanation: {
        en: "Quantum yield (Φ) is defined as the number of molecules that undergo a specific photochemical process per photon absorbed. It can be greater than 1 for chain reactions initiated by light, equal to 1 for simple photolysis, or less than 1 when competing processes occur.",
        es: "El rendimiento cuántico (Φ) se define como el número de moléculas que experimentan un proceso fotoquímico específico por fotón absorbido. Puede ser mayor que 1 para reacciones en cadena iniciadas por luz, igual a 1 para fotólisis simple, o menor que 1 cuando ocurren procesos competitivos.",
        de: "Die Quantenausbeute (Φ) ist definiert als die Anzahl der Moleküle, die einen spezifischen photochemischen Prozess pro absorbiertem Photon durchlaufen. Sie kann größer als 1 für durch Licht initiierte Kettenreaktionen, gleich 1 für einfache Photolyse oder kleiner als 1 bei konkurrierenden Prozessen sein.",
        nl: "Kwantumopbrengst (Φ) wordt gedefinieerd als het aantal moleculen dat een specifiek fotochemisch proces ondergaat per geabsorbeerd foton. Het kan groter zijn dan 1 voor kettingreacties geïnitieerd door licht, gelijk aan 1 voor eenvoudige fotolyse, of kleiner dan 1 wanneer concurrerende processen optreden."
      }
    },
    {
      question: {
        en: "What characterizes a pseudo-first-order reaction?",
        es: "¿Qué caracteriza una reacción pseudo-primer orden?",
        de: "Was charakterisiert eine Pseudo-erste-Ordnung-Reaktion?",
        nl: "Wat kenmerkt een pseudo-eerste-orde reactie?"
      },
      options: [
        { en: "Only one reactant is present", es: "Solo un reactivo está presente", de: "Nur ein Reaktant ist vorhanden", nl: "Slechts één reactant is aanwezig" },
        { en: "One reactant is in large excess", es: "Un reactivo está en gran exceso", de: "Ein Reaktant ist in großem Überschuss", nl: "Eén reactant is in groot overmaat" },
        { en: "The reaction is catalyzed", es: "La reacción es catalizada", de: "Die Reaktion ist katalysiert", nl: "De reactie is gekatalyseerd" },
        { en: "The temperature is very low", es: "La temperatura es muy baja", de: "Die Temperatur ist sehr niedrig", nl: "De temperatuur is zeer laag" }
      ],
      correct: 1,
      explanation: {
        en: "A pseudo-first-order reaction occurs when one reactant is present in large excess, making its concentration essentially constant during the reaction. This simplifies a higher-order reaction to apparent first-order kinetics in the limiting reactant.",
        es: "Una reacción pseudo-primer orden ocurre cuando un reactivo está presente en gran exceso, haciendo que su concentración sea esencialmente constante durante la reacción. Esto simplifica una reacción de orden superior a cinética aparente de primer orden en el reactivo limitante.",
        de: "Eine Pseudo-erste-Ordnung-Reaktion tritt auf, wenn ein Reaktant in großem Überschuss vorhanden ist, wodurch seine Konzentration während der Reaktion im Wesentlichen konstant bleibt. Dies vereinfacht eine Reaktion höherer Ordnung zu scheinbarer Kinetik erster Ordnung im limitierenden Reaktanten.",
        nl: "Een pseudo-eerste-orde reactie treedt op wanneer één reactant in groot overmaat aanwezig is, waardoor zijn concentratie essentieel constant blijft tijdens de reactie. Dit vereenvoudigt een hogere-orde reactie tot schijnbare eerste-orde kinetiek in de limiterende reactant."
      }
    },
    {
      question: {
        en: "What is the rate expression for a reversible first-order reaction A ⇌ B?",
        es: "¿Cuál es la expresión de velocidad para una reacción reversible de primer orden A ⇌ B?",
        de: "Was ist der Geschwindigkeitsausdruck für eine reversible Reaktion erster Ordnung A ⇌ B?",
        nl: "Wat is de snelheidsuitdrukking voor een reversibele eerste-orde reactie A ⇌ B?"
      },
      options: [
        { en: "d[A]/dt = k[A]", es: "d[A]/dt = k[A]", de: "d[A]/dt = k[A]", nl: "d[A]/dt = k[A]" },
        { en: "d[A]/dt = -k₁[A]", es: "d[A]/dt = -k₁[A]", de: "d[A]/dt = -k₁[A]", nl: "d[A]/dt = -k₁[A]" },
        { en: "d[A]/dt = -k₁[A] + k₋₁[B]", es: "d[A]/dt = -k₁[A] + k₋₁[B]", de: "d[A]/dt = -k₁[A] + k₋₁[B]", nl: "d[A]/dt = -k₁[A] + k₋₁[B]" },
        { en: "d[A]/dt = k₁[A] - k₋₁[B]", es: "d[A]/dt = k₁[A] - k₋₁[B]", de: "d[A]/dt = k₁[A] - k₋₁[B]", nl: "d[A]/dt = k₁[A] - k₋₁[B]" }
      ],
      correct: 2,
      explanation: {
        en: "For the reversible reaction A ⇌ B, the rate of change of [A] includes both the forward reaction (consumption of A) and reverse reaction (formation of A from B): d[A]/dt = -k₁[A] + k₋₁[B], where k₁ and k₋₁ are the forward and reverse rate constants.",
        es: "Para la reacción reversible A ⇌ B, la velocidad de cambio de [A] incluye tanto la reacción directa (consumo de A) como la reacción inversa (formación de A desde B): d[A]/dt = -k₁[A] + k₋₁[B], donde k₁ y k₋₁ son las constantes de velocidad directa e inversa.",
        de: "Für die reversible Reaktion A ⇌ B umfasst die Änderungsrate von [A] sowohl die Vorwärtsreaktion (Verbrauch von A) als auch die Rückreaktion (Bildung von A aus B): d[A]/dt = -k₁[A] + k₋₁[B], wobei k₁ und k₋₁ die Vorwärts- und Rückwärts-Geschwindigkeitskonstanten sind.",
        nl: "Voor de reversibele reactie A ⇌ B omvat de veranderingssnelheid van [A] zowel de voorwaartse reactie (verbruik van A) als de achterwaartse reactie (vorming van A uit B): d[A]/dt = -k₁[A] + k₋₁[B], waarbij k₁ en k₋₁ de voorwaartse en achterwaartse snelheidsconstanten zijn."
      }
    },
    {
      question: {
        en: "What is the primary kinetic difference between SN1 and SN2 mechanisms?",
        es: "¿Cuál es la diferencia cinética principal entre mecanismos SN1 y SN2?",
        de: "Was ist der hauptsächliche kinetische Unterschied zwischen SN1- und SN2-Mechanismen?",
        nl: "Wat is het belangrijkste kinetische verschil tussen SN1 en SN2 mechanismen?"
      },
      options: [
        { en: "SN1 is faster than SN2", es: "SN1 es más rápido que SN2", de: "SN1 ist schneller als SN2", nl: "SN1 is sneller dan SN2" },
        { en: "SN1 shows first-order, SN2 shows second-order kinetics", es: "SN1 muestra cinética de primer orden, SN2 muestra cinética de segundo orden", de: "SN1 zeigt Kinetik erster Ordnung, SN2 zeigt Kinetik zweiter Ordnung", nl: "SN1 toont eerste-orde, SN2 toont tweede-orde kinetiek" },
        { en: "SN1 requires a catalyst, SN2 does not", es: "SN1 requiere catalizador, SN2 no", de: "SN1 benötigt einen Katalysator, SN2 nicht", nl: "SN1 vereist een katalysator, SN2 niet" },
        { en: "SN1 occurs at lower temperatures than SN2", es: "SN1 ocurre a temperaturas más bajas que SN2", de: "SN1 tritt bei niedrigeren Temperaturen auf als SN2", nl: "SN1 treedt op bij lagere temperaturen dan SN2" }
      ],
      correct: 1,
      explanation: {
        en: "The key kinetic difference is that SN1 reactions follow first-order kinetics (rate depends only on substrate concentration) because the rate-determining step is unimolecular carbocation formation, while SN2 reactions follow second-order kinetics (rate depends on both substrate and nucleophile concentrations) because the reaction is bimolecular.",
        es: "La diferencia cinética clave es que las reacciones SN1 siguen cinética de primer orden (la velocidad depende solo de la concentración del sustrato) porque el paso determinante de la velocidad es la formación unimolecular del carbocatión, mientras que las reacciones SN2 siguen cinética de segundo orden (la velocidad depende de las concentraciones del sustrato y nucleófilo) porque la reacción es bimolecular.",
        de: "Der wichtigste kinetische Unterschied ist, dass SN1-Reaktionen Kinetik erster Ordnung folgen (Rate hängt nur von der Substratkonzentration ab), weil der geschwindigkeitsbestimmende Schritt die unimolekulare Carbokation-Bildung ist, während SN2-Reaktionen Kinetik zweiter Ordnung folgen (Rate hängt von beiden Substrat- und Nukleophilkonzentrationen ab), weil die Reaktion bimolekular ist.",
        nl: "Het belangrijkste kinetische verschil is dat SN1-reacties eerste-orde kinetiek volgen (snelheid hangt alleen af van substraatconcentratie) omdat de snelheidsbepalende stap unimoleculaire carbokationvorming is, terwijl SN2-reacties tweede-orde kinetiek volgen (snelheid hangt af van zowel substraat- als nucleofielconcentraties) omdat de reactie bimoleculair is."
      }
    },
    {
      question: {
        en: "What is the Hammond postulate?",
        es: "¿Qué es el postulado de Hammond?",
        de: "Was ist das Hammond-Postulat?",
        nl: "Wat is het Hammond-postulaat?"
      },
      options: [
        { en: "Transition states resemble the less stable species", es: "Los estados de transición se parecen a las especies menos estables", de: "Übergangszustände ähneln den weniger stabilen Spezies", nl: "Overgangstoestand‭en lijken op de minder stabiele species" },
        { en: "Transition states resemble the more stable species", es: "Los estados de transición se parecen a las especies más estables", de: "Übergangszustände ähneln den stabileren Spezies", nl: "Overgangstoestanden lijken op de meer stabiele species" },
        { en: "Transition states are always identical to reactants", es: "Los estados de transición son siempre idénticos a los reactivos", de: "Übergangszustände sind immer identisch mit Reaktanten", nl: "Overgangstoestanden zijn altijd identiek aan reactanten" },
        { en: "All reactions have the same transition state", es: "Todas las reacciones tienen el mismo estado de transición", de: "Alle Reaktionen haben denselben Übergangszustand", nl: "Alle reacties hebben dezelfde overgangstoestand" }
      ],
      correct: 1,
      explanation: {
        en: "The Hammond postulate states that the transition state of a reaction step resembles the structure of the closest species in energy. For endothermic steps, the transition state resembles the products; for exothermic steps, it resembles the reactants. This helps predict reaction selectivity and rates.",
        es: "El postulado de Hammond establece que el estado de transición de un paso de reacción se parece a la estructura de las especies más cercanas en energía. Para pasos endotérmicos, el estado de transición se parece a los productos; para pasos exotérmicos, se parece a los reactivos. Esto ayuda a predecir la selectividad y velocidades de reacción.",
        de: "Das Hammond-Postulat besagt, dass der Übergangszustand eines Reaktionsschritts der Struktur der energetisch nächsten Spezies ähnelt. Bei endothermen Schritten ähnelt der Übergangszustand den Produkten; bei exothermen Schritten ähnelt er den Reaktanten. Dies hilft bei der Vorhersage von Reaktionsselektivität und -geschwindigkeiten.",
        nl: "Het Hammond-postulaat stelt dat de overgangstoestand van een reactiestap lijkt op de structuur van de dichtsbijzijnde species in energie. Voor endotherme stappen lijkt de overgangstoestand op de producten; voor exotherme stappen lijkt het op de reactanten. Dit helpt bij het voorspellen van reactieselectiviteit en snelheden."
      }
    },
    {
      question: {
        en: "How does pressure affect the rate of a reaction in solution compared to gas phase?",
        es: "¿Cómo afecta la presión la velocidad de una reacción en solución comparado con fase gaseosa?",
        de: "Wie beeinflusst Druck die Reaktionsgeschwindigkeit in Lösung im Vergleich zur Gasphase?",
        nl: "Hoe beïnvloedt druk de reactiesnelheid in oplossing vergeleken met gasfase?"
      },
      options: [
        { en: "Same effect in both phases", es: "Mismo efecto en ambas fases", de: "Gleiche Wirkung in beiden Phasen", nl: "Zelfde effect in beide fasen" },
        { en: "Larger effect in gas phase than solution", es: "Mayor efecto en fase gaseosa que en solución", de: "Größere Wirkung in der Gasphase als in Lösung", nl: "Groter effect in gasfase dan in oplossing" },
        { en: "Larger effect in solution than gas phase", es: "Mayor efecto en solución que en fase gaseosa", de: "Größere Wirkung in Lösung als in der Gasphase", nl: "Groter effect in oplossing dan in gasfase" },
        { en: "No effect in either phase", es: "Sin efecto en ninguna fase", de: "Keine Wirkung in beiden Phasen", nl: "Geen effect in beide fasen" }
      ],
      correct: 1,
      explanation: {
        en: "Pressure has a much larger effect on gas-phase reaction rates than on solution-phase reactions. In gases, pressure directly affects concentration, while in solutions, the effect of pressure on density (and thus concentration) is minimal due to the incompressibility of liquids.",
        es: "La presión tiene un efecto mucho mayor en las velocidades de reacción en fase gaseosa que en reacciones en fase de solución. En gases, la presión afecta directamente la concentración, mientras que en soluciones, el efecto de la presión en la densidad (y por tanto concentración) es mínimo debido a la incompresibilidad de los líquidos.",
        de: "Druck hat eine viel größere Wirkung auf Gasphasenreaktionsgeschwindigkeiten als auf Lösungsphasenreaktionen. In Gasen beeinflusst Druck direkt die Konzentration, während in Lösungen der Effekt des Drucks auf die Dichte (und damit Konzentration) aufgrund der Inkompressibilität von Flüssigkeiten minimal ist.",
        nl: "Druk heeft een veel groter effect op gasfase-reactiesnelheden dan op oplossingsfase-reacties. In gassen beïnvloedt druk direct de concentratie, terwijl in oplossingen het effect van druk op dichtheid (en dus concentratie) minimaal is vanwege de onsamendrukbaarheid van vloeistoffen."
      }
    },
    {
      question: {
        en: "What is the Marcus theory used to predict?",
        es: "¿Qué se usa para predecir la teoría de Marcus?",
        de: "Wofür wird die Marcus-Theorie verwendet?",
        nl: "Waarvoor wordt de Marcus-theorie gebruikt om te voorspellen?"
      },
      options: [
        { en: "Reaction equilibrium constants", es: "Constantes de equilibrio de reacción", de: "Reaktionsgleichgewichtskonstanten", nl: "Reactie-evenwichtsconstanten" },
        { en: "Electron transfer reaction rates", es: "Velocidades de reacción de transferencia electrónica", de: "Elektronenübertragungsreaktionsgeschwindigkeiten", nl: "Elektronenoverdracht reactiesnelheden" },
        { en: "Proton transfer mechanisms", es: "Mecanismos de transferencia protónica", de: "Protonenübertragungsmechanismen", nl: "Protonoverdracht mechanismen" },
        { en: "Catalytic activity", es: "Actividad catalítica", de: "Katalytische Aktivität", nl: "Katalytische activiteit" }
      ],
      correct: 1,
      explanation: {
        en: "Marcus theory is used to predict the rates of electron transfer reactions. It relates the activation barrier to the reorganization energy required to restructure the solvent and reactants during electron transfer, explaining the bell-shaped relationship between driving force and reaction rate.",
        es: "La teoría de Marcus se usa para predecir las velocidades de reacciones de transferencia electrónica. Relaciona la barrera de activación con la energía de reorganización requerida para reestructurar el solvente y reactivos durante la transferencia electrónica, explicando la relación en forma de campana entre fuerza impulsora y velocidad de reacción.",
        de: "Die Marcus-Theorie wird verwendet, um die Geschwindigkeiten von Elektronenübertragungsreaktionen vorherzusagen. Sie verknüpft die Aktivierungsbarriere mit der Reorganisationsenergie, die zur Umstrukturierung des Lösungsmittels und der Reaktanten während der Elektronenübertragung erforderlich ist, und erklärt die glockenförmige Beziehung zwischen Triebkraft und Reaktionsgeschwindigkeit.",
        nl: "Marcus-theorie wordt gebruikt om de snelheden van elektronenoverdracht reacties te voorspellen. Het relateert de activeringsbarrière aan de reorganisatie-energie die nodig is om het oplosmiddel en reactanten te herstructureren tijdens elektronenoverdracht, wat de klokvormige relatie tussen drijvende kracht en reactiesnelheid verklaart."
      },
    {
      question: {
        en: "What is the Hammond postulate and how does it relate to transition state stability?",
        es: "¿Qué es el postulado de Hammond y cómo se relaciona con la estabilidad del estado de transición?",
        de: "Was ist das Hammond-Postulat und wie bezieht es sich auf die Stabilität des Übergangszustands?",
        nl: "Wat is het Hammond-postulaat en hoe relateert het aan de stabiliteit van de overgangstoestand?"
      },
      options: [
        { en: "For similar reactions, the transition state resembles the less stable species (reactant or product)", es: "Para reacciones similares, el estado de transición se asemeja a la especie menos estable (reactivo o producto)", de: "Für ähnliche Reaktionen ähnelt der Übergangszustand der weniger stabilen Spezies (Reaktant oder Produkt)", nl: "Voor vergelijkbare reacties lijkt de overgangstoestand op de minder stabiele soort (reactant of product)" },
        { en: "For similar reactions, the transition state resembles the more stable species (reactant or product)", es: "Para reacciones similares, el estado de transición se asemeja a la especie más estable (reactivo o producto)", de: "Für ähnliche Reaktionen ähnelt der Übergangszustand der stabileren Spezies (Reaktant oder Produkt)", nl: "Voor vergelijkbare reacties lijkt de overgangstoestand op de meer stabiele soort (reactant of product)" },
        { en: "Transition states are always identical regardless of thermodynamics", es: "Los estados de transición son siempre idénticos independientemente de la termodinámica", de: "Übergangszustände sind unabhängig von der Thermodynamik immer identisch", nl: "Overgangstoestanden zijn altijd identiek ongeacht de thermodynamica" },
        { en: "Hammond postulate only applies to gas phase reactions", es: "El postulado de Hammond solo se aplica a reacciones en fase gaseosa", de: "Hammond-Postulat gilt nur für Gasphasenreaktionen", nl: "Hammond-postulaat geldt alleen voor gasfasereacties" }
      ],
      correct: 1,
      explanation: {
        en: "The Hammond postulate states that for a series of similar reactions, the transition state will resemble whichever is closer in energy - the reactant or product. For endothermic reactions, the TS resembles the product; for exothermic reactions, it resembles the reactant.",
        es: "El postulado de Hammond establece que para una serie de reacciones similares, el estado de transición se parecerá a lo que esté más cerca en energía - el reactivo o producto. Para reacciones endotérmicas, el ET se parece al producto; para exotérmicas, se parece al reactivo.",
        de: "Das Hammond-Postulat besagt, dass bei einer Reihe ähnlicher Reaktionen der Übergangszustand demjenigen ähnelt, der energetisch näher liegt - dem Reaktanten oder Produkt. Bei endothermen Reaktionen ähnelt der ÜZ dem Produkt; bei exothermen dem Reaktanten.",
        nl: "Het Hammond-postulaat stelt dat voor een reeks vergelijkbare reacties, de overgangstoestand zal lijken op wat energetisch het dichtst bij is - de reactant of het product. Voor endotherme reacties lijkt de OT op het product; voor exotherme op de reactant."
      }
    },
    {
      question: {
        en: "What is the difference between homolytic and heterolytic bond cleavage?",
        es: "¿Cuál es la diferencia entre ruptura homolítica y heterolítica de enlaces?",
        de: "Was ist der Unterschied zwischen homolytischer und heterolytischer Bindungsspaltung?",
        nl: "Wat is het verschil tussen homolytische en heterolytische bindingsbreuk?"
      },
      options: [
        { en: "Homolytic: each atom gets one electron; Heterolytic: one atom gets both electrons", es: "Homolítica: cada átomo obtiene un electrón; Heterolítica: un átomo obtiene ambos electrones", de: "Homolytisch: jedes Atom bekommt ein Elektron; Heterolytisch: ein Atom bekommt beide Elektronen", nl: "Homolytisch: elk atoom krijgt één elektron; Heterolytisch: één atoom krijgt beide elektronen" },
        { en: "Homolytic: one atom gets both electrons; Heterolytic: each atom gets one electron", es: "Homolítica: un átomo obtiene ambos electrones; Heterolítica: cada átomo obtiene un electrón", de: "Homolytisch: ein Atom bekommt beide Elektronen; Heterolytisch: jedes Atom bekommt ein Elektron", nl: "Homolytisch: één atoom krijgt beide elektronen; Heterolytisch: elk atoom krijgt één elektron" },
        { en: "Both processes are identical", es: "Ambos procesos son idénticos", de: "Beide Prozesse sind identisch", nl: "Beide processen zijn identiek" },
        { en: "Only homolytic cleavage produces radicals", es: "Solo la ruptura homolítica produce radicales", de: "Nur homolytische Spaltung produziert Radikale", nl: "Alleen homolytische breuk produceert radicalen" }
      ],
      correct: 0,
      explanation: {
        en: "In homolytic cleavage, the bonding electrons are distributed equally (one to each atom), forming radicals. In heterolytic cleavage, both electrons go to one atom, forming ions (cation and anion). Homolytic cleavage typically occurs in nonpolar solvents or gas phase.",
        es: "En ruptura homolítica, los electrones de enlace se distribuyen igualmente (uno a cada átomo), formando radicales. En ruptura heterolítica, ambos electrones van a un átomo, formando iones (catión y anión). La ruptura homolítica típicamente ocurre en solventes no polares o fase gaseosa.",
        de: "Bei homolytischer Spaltung werden die Bindungselektronen gleichmäßig verteilt (eines zu jedem Atom) und bilden Radikale. Bei heterolytischer Spaltung gehen beide Elektronen zu einem Atom und bilden Ionen (Kation und Anion). Homolytische Spaltung tritt typischerweise in unpolaren Lösungsmitteln oder der Gasphase auf.",
        nl: "Bij homolytische breuk worden de bindingselektronen gelijk verdeeld (één naar elk atoom), waarbij radicalen ontstaan. Bij heterolytische breuk gaan beide elektronen naar één atoom, waarbij ionen ontstaan (kation en anion). Homolytische breuk treedt typisch op in niet-polaire oplosmiddelen of gasfase."
      }
    },
    {
      question: {
        en: "What is the steady-state approximation in enzyme kinetics?",
        es: "¿Qué es la aproximación de estado estacionario en cinética enzimática?",
        de: "Was ist die Steady-State-Näherung in der Enzymkinetik?",
        nl: "Wat is de steady-state benadering in enzymkinetiek?"
      },
      options: [
        { en: "The enzyme-substrate complex concentration remains constant during the reaction", es: "La concentración del complejo enzima-sustrato permanece constante durante la reacción", de: "Die Konzentration des Enzym-Substrat-Komplexes bleibt während der Reaktion konstant", nl: "De concentratie van het enzym-substraat complex blijft constant tijdens de reactie" },
        { en: "The enzyme concentration changes linearly with time", es: "La concentración de enzima cambia linealmente con el tiempo", de: "Die Enzymkonzentration ändert sich linear mit der Zeit", nl: "De enzymconcentratie verandert lineair met de tijd" },
        { en: "The reaction rate is always at maximum", es: "La velocidad de reacción está siempre al máximo", de: "Die Reaktionsgeschwindigkeit ist immer maximal", nl: "De reactiesnelheid is altijd maximaal" },
        { en: "No products are formed during the reaction", es: "No se forman productos durante la reacción", de: "Während der Reaktion werden keine Produkte gebildet", nl: "Er worden geen producten gevormd tijdens de reactie" }
      ],
      correct: 0,
      explanation: {
        en: "The steady-state approximation assumes that the concentration of the enzyme-substrate complex ([ES]) remains constant during the reaction, meaning d[ES]/dt = 0. This occurs when the rate of ES formation equals the rate of ES breakdown, simplifying kinetic analysis.",
        es: "La aproximación de estado estacionario asume que la concentración del complejo enzima-sustrato ([ES]) permanece constante durante la reacción, significando d[ES]/dt = 0. Esto ocurre cuando la velocidad de formación de ES iguala la velocidad de descomposición de ES, simplificando el análisis cinético.",
        de: "Die Steady-State-Näherung nimmt an, dass die Konzentration des Enzym-Substrat-Komplexes ([ES]) während der Reaktion konstant bleibt, was bedeutet d[ES]/dt = 0. Dies tritt auf, wenn die Bildungsrate von ES gleich der Abbaurate von ES ist, was die kinetische Analyse vereinfacht.",
        nl: "De steady-state benadering gaat ervan uit dat de concentratie van het enzym-substraat complex ([ES]) constant blijft tijdens de reactie, betekenend d[ES]/dt = 0. Dit treedt op wanneer de vormingssnelheid van ES gelijk is aan de afbraaksnelheid van ES, wat de kinetische analyse vereenvoudigt."
      }
    },
    {
      question: {
        en: "What is the principle behind isotope effects in reaction mechanisms?",
        es: "¿Cuál es el principio detrás de los efectos isotópicos en mecanismos de reacción?",
        de: "Was ist das Prinzip hinter Isotopeneffekten in Reaktionsmechanismen?",
        nl: "Wat is het principe achter isotoop effecten in reactiemechanismen?"
      },
      options: [
        { en: "Heavier isotopes have lower zero-point energies and react slower when bonds to them are broken in the rate-determining step", es: "Los isótopos más pesados tienen energías de punto cero más bajas y reaccionan más lentamente cuando los enlaces hacia ellos se rompen en el paso determinante de velocidad", de: "Schwerere Isotope haben niedrigere Nullpunktsenergien und reagieren langsamer, wenn Bindungen zu ihnen im geschwindigkeitsbestimmenden Schritt gebrochen werden", nl: "Zwaardere isotopen hebben lagere nulpuntenergieën en reageren langzamer wanneer bindingen naar hen worden gebroken in de snelheidsbepalende stap" },
        { en: "Heavier isotopes always react faster", es: "Los isótopos más pesados siempre reaccionan más rápido", de: "Schwerere Isotope reagieren immer schneller", nl: "Zwaardere isotopen reageren altijd sneller" },
        { en: "Isotope effects only occur in gas phase reactions", es: "Los efectos isotópicos solo ocurren en reacciones en fase gaseosa", de: "Isotopeneffekte treten nur in Gasphasenreaktionen auf", nl: "Isotoop effecten treden alleen op in gasfase reacties" },
        { en: "All isotopes have identical reaction rates", es: "Todos los isótopos tienen velocidades de reacción idénticas", de: "Alle Isotope haben identische Reaktionsgeschwindigkeiten", nl: "Alle isotopen hebben identieke reactiesnelheden" }
      ],
      correct: 0,
      explanation: {
        en: "Kinetic isotope effects arise because heavier isotopes (like deuterium vs hydrogen) have lower zero-point vibrational energies. When a bond to the heavier isotope is broken in the rate-determining step, more energy is required, resulting in a slower reaction rate (kH/kD typically 2-8).",
        es: "Los efectos isotópicos cinéticos surgen porque los isótopos más pesados (como deuterio vs hidrógeno) tienen energías vibracionales de punto cero más bajas. Cuando un enlace al isótopo más pesado se rompe en el paso determinante de velocidad, se requiere más energía, resultando en una velocidad de reacción más lenta (kH/kD típicamente 2-8).",
        de: "Kinetische Isotopeneffekte entstehen, weil schwerere Isotope (wie Deuterium vs Wasserstoff) niedrigere Nullpunkt-Schwingungsenergien haben. Wenn eine Bindung zum schwereren Isotop im geschwindigkeitsbestimmenden Schritt gebrochen wird, ist mehr Energie erforderlich, was zu einer langsameren Reaktionsgeschwindigkeit führt (kH/kD typisch 2-8).",
        nl: "Kinetische isotoop effecten ontstaan omdat zwaardere isotopen (zoals deuterium vs waterstof) lagere nulpunt trillingsenergiën hebben. Wanneer een binding naar het zwaardere isotoop wordt gebroken in de snelheidsbepalende stap, is meer energie vereist, resulterend in een langzamere reactiesnelheid (kH/kD typisch 2-8)."
      }
    },
    {
      question: {
        en: "What distinguishes SN1 from SN2 reaction mechanisms?",
        es: "¿Qué distingue los mecanismos de reacción SN1 de SN2?",
        de: "Was unterscheidet SN1- von SN2-Reaktionsmechanismen?",
        nl: "Wat onderscheidt SN1 van SN2 reactiemechanismen?"
      },
      options: [
        { en: "SN1 is two-step with carbocation intermediate; SN2 is one-step with backside attack", es: "SN1 es de dos pasos con intermedio carbocatión; SN2 es de un paso con ataque por detrás", de: "SN1 ist zweistufig mit Carbokation-Zwischenprodukt; SN2 ist einstufig mit Rückseitenangriff", nl: "SN1 is tweestaps met carbokation tussenproduct; SN2 is eenstaps met achterzijde aanval" },
        { en: "SN1 is one-step; SN2 is two-step", es: "SN1 es de un paso; SN2 es de dos pasos", de: "SN1 ist einstufig; SN2 ist zweistufig", nl: "SN1 is eenstaps; SN2 is tweestaps" },
        { en: "Both mechanisms are identical", es: "Ambos mecanismos son idénticos", de: "Beide Mechanismen sind identisch", nl: "Beide mechanismen zijn identiek" },
        { en: "SN1 only occurs with primary carbons", es: "SN1 solo ocurre con carbonos primarios", de: "SN1 tritt nur bei primären Kohlenstoffen auf", nl: "SN1 treedt alleen op bij primaire koolstoffen" }
      ],
      correct: 0,
      explanation: {
        en: "SN1 (unimolecular) involves two steps: first, leaving group departure forming a carbocation intermediate, then nucleophile attack. It occurs at tertiary carbons and shows racemization. SN2 (bimolecular) is a concerted one-step process with backside attack, leading to inversion of configuration.",
        es: "SN1 (unimolecular) involucra dos pasos: primero, salida del grupo saliente formando un intermedio carbocatión, luego ataque nucleófilo. Ocurre en carbonos terciarios y muestra racemización. SN2 (bimolecular) es un proceso concertado de un paso con ataque por detrás, llevando a inversión de configuración.",
        de: "SN1 (unimolekular) umfasst zwei Schritte: erst Abgangsgruppen-Abgang unter Bildung eines Carbokation-Zwischenprodukts, dann Nukleophil-Angriff. Es tritt bei tertiären Kohlenstoffen auf und zeigt Racemisierung. SN2 (bimolekular) ist ein konzertierter einstufiger Prozess mit Rückseitenangriff, der zur Konfigurationsinversion führt.",
        nl: "SN1 (unimoleculair) omvat twee stappen: eerst vertrek van de vertrekkende groep met vorming van een carbokation tussenproduct, dan nucleofiele aanval. Het treedt op bij tertiaire koolstoffen en toont racemisatie. SN2 (bimoleculair) is een gecoördineerd eenstaps proces met achterzijde aanval, leidend tot configuratie inversie."
      }
    },
    {
      question: {
        en: "What is the role of catalysts in reaction mechanisms?",
        es: "¿Cuál es el papel de los catalizadores en los mecanismos de reacción?",
        de: "Was ist die Rolle von Katalysatoren in Reaktionsmechanismen?",
        nl: "Wat is de rol van katalysatoren in reactiemechanismen?"
      },
      options: [
        { en: "Provide alternative reaction pathway with lower activation energy", es: "Proporcionan una vía de reacción alternativa con menor energía de activación", de: "Bieten alternativen Reaktionsweg mit niedrigerer Aktivierungsenergie", nl: "Bieden alternatieve reactieroute met lagere activeringsenergie" },
        { en: "Increase the activation energy of reactions", es: "Aumentan la energía de activación de las reacciones", de: "Erhöhen die Aktivierungsenergie von Reaktionen", nl: "Verhogen de activeringsenergie van reacties" },
        { en: "Change the thermodynamics of reactions", es: "Cambian la termodinámica de las reacciones", de: "Ändern die Thermodynamik von Reaktionen", nl: "Veranderen de thermodynamica van reacties" },
        { en: "Are consumed in the reaction", es: "Se consumen en la reacción", de: "Werden in der Reaktion verbraucht", nl: "Worden verbruikt in de reactie" }
      ],
      correct: 0,
      explanation: {
        en: "Catalysts provide alternative reaction pathways with lower activation energies, increasing reaction rates without being consumed. They don't change the thermodynamics (ΔG) but stabilize transition states, making reactions proceed faster by lowering energy barriers.",
        es: "Los catalizadores proporcionan vías de reacción alternativas con energías de activación más bajas, aumentando las velocidades de reacción sin ser consumidos. No cambian la termodinámica (ΔG) pero estabilizan estados de transición, haciendo que las reacciones procedan más rápido al reducir barreras energéticas.",
        de: "Katalysatoren bieten alternative Reaktionswege mit niedrigeren Aktivierungsenergien und erhöhen Reaktionsgeschwindigkeiten, ohne verbraucht zu werden. Sie ändern nicht die Thermodynamik (ΔG), sondern stabilisieren Übergangszustände und lassen Reaktionen durch Senkung der Energiebarrieren schneller ablaufen.",
        nl: "Katalysatoren bieden alternatieve reactieroutes met lagere activeringsenergiën, verhogend reactiesnelheden zonder verbruikt te worden. Ze veranderen de thermodynamica (ΔG) niet maar stabiliseren overgangstoestanden, waardoor reacties sneller verlopen door energiebarrières te verlagen."
      }
    },
    {
      question: {
        en: "What is the difference between thermodynamic and kinetic control in chemical reactions?",
        es: "¿Cuál es la diferencia entre control termodinámico y cinético en reacciones químicas?",
        de: "Was ist der Unterschied zwischen thermodynamischer und kinetischer Kontrolle in chemischen Reaktionen?",
        nl: "Wat is het verschil tussen thermodynamische en kinetische controle in chemische reacties?"
      },
      options: [
        { en: "Thermodynamic control favors most stable product; kinetic control favors fastest-forming product", es: "Control termodinámico favorece el producto más estable; control cinético favorece el producto que se forma más rápido", de: "Thermodynamische Kontrolle bevorzugt das stabilste Produkt; kinetische Kontrolle bevorzugt das sich am schnellsten bildende Produkt", nl: "Thermodynamische controle begunstigt het meest stabiele product; kinetische controle begunstigt het snelst vormende product" },
        { en: "Both controls always give the same product distribution", es: "Ambos controles siempre dan la misma distribución de productos", de: "Beide Kontrollen ergeben immer dieselbe Produktverteilung", nl: "Beide controles geven altijd dezelfde productverdeling" },
        { en: "Kinetic control only occurs at high temperatures", es: "El control cinético solo ocurre a altas temperaturas", de: "Kinetische Kontrolle tritt nur bei hohen Temperaturen auf", nl: "Kinetische controle treedt alleen op bij hoge temperaturen" },
        { en: "Thermodynamic control is faster than kinetic control", es: "El control termodinámico es más rápido que el control cinético", de: "Thermodynamische Kontrolle ist schneller als kinetische Kontrolle", nl: "Thermodynamische controle is sneller dan kinetische controle" }
      ],
      correct: 0,
      explanation: {
        en: "Under kinetic control (low temperature, short time), the major product is the one that forms fastest (lowest activation energy). Under thermodynamic control (high temperature, long time, reversible conditions), the major product is the most stable (lowest free energy).",
        es: "Bajo control cinético (baja temperatura, tiempo corto), el producto principal es el que se forma más rápido (menor energía de activación). Bajo control termodinámico (alta temperatura, tiempo largo, condiciones reversibles), el producto principal es el más estable (menor energía libre).",
        de: "Unter kinetischer Kontrolle (niedrige Temperatur, kurze Zeit) ist das Hauptprodukt dasjenige, das sich am schnellsten bildet (niedrigste Aktivierungsenergie). Unter thermodynamischer Kontrolle (hohe Temperatur, lange Zeit, reversible Bedingungen) ist das Hauptprodukt das stabilste (niedrigste freie Energie).",
        nl: "Onder kinetische controle (lage temperatuur, korte tijd) is het hoofdproduct degene die het snelst vormt (laagste activeringsenergie). Onder thermodynamische controle (hoge temperatuur, lange tijd, reversibele condities) is het hoofdproduct het meest stabiele (laagste vrije energie)."
      }
    },
    {
      question: {
        en: "What is the Curtin-Hammett principle?",
        es: "¿Qué es el principio de Curtin-Hammett?",
        de: "Was ist das Curtin-Hammett-Prinzip?",
        nl: "Wat is het Curtin-Hammett principe?"
      },
      options: [
        { en: "Product distribution is determined by the relative energies of competing transition states, not ground state conformers", es: "La distribución de productos está determinada por las energías relativas de estados de transición competidores, no por confórmeros de estado basal", de: "Produktverteilung wird durch relative Energien konkurrierender Übergangszustände bestimmt, nicht durch Grundzustand-Konformere", nl: "Productverdeling wordt bepaald door de relatieve energieën van concurrerende overgangstoestanden, niet door grondtoestand conformeren" },
        { en: "Product distribution depends only on ground state stability", es: "La distribución de productos depende solo de la estabilidad del estado basal", de: "Produktverteilung hängt nur von Grundzustandsstabilität ab", nl: "Productverdeling hangt alleen af van grondtoestand stabiliteit" },
        { en: "All conformers react at the same rate", es: "Todos los confórmeros reaccionan a la misma velocidad", de: "Alle Konformere reagieren mit derselben Geschwindigkeit", nl: "Alle conformeren reageren met dezelfde snelheid" },
        { en: "Temperature has no effect on product distribution", es: "La temperatura no tiene efecto en la distribución de productos", de: "Temperatur hat keinen Einfluss auf Produktverteilung", nl: "Temperatuur heeft geen effect op productverdeling" }
      ],
      correct: 0,
      explanation: {
        en: "The Curtin-Hammett principle states that when conformers are in rapid equilibrium, the product distribution is determined by the relative activation energies from each conformer to their respective transition states, not by the ground state conformer populations.",
        es: "El principio de Curtin-Hammett establece que cuando los confórmeros están en equilibrio rápido, la distribución de productos está determinada por las energías de activación relativas de cada confórmero a sus respectivos estados de transición, no por las poblaciones de confórmeros de estado basal.",
        de: "Das Curtin-Hammett-Prinzip besagt, dass bei schnellem Gleichgewicht der Konformere die Produktverteilung durch die relativen Aktivierungsenergien von jedem Konformer zu ihren jeweiligen Übergangszuständen bestimmt wird, nicht durch die Grundzustand-Konformerpopulationen.",
        nl: "Het Curtin-Hammett principe stelt dat wanneer conformeren in snel evenwicht zijn, de productverdeling wordt bepaald door de relatieve activeringsenergiën van elke conformeer naar hun respectievelijke overgangstoestanden, niet door de grondtoestand conformeer populaties."
      }
    },
    {
      question: {
        en: "What is the bell-shaped curve in Marcus theory for electron transfer?",
        es: "¿Qué es la curva en forma de campana en la teoría de Marcus para transferencia electrónica?",
        de: "Was ist die glockenförmige Kurve in der Marcus-Theorie für Elektronenübertragung?",
        nl: "Wat is de klokvormige curve in Marcus theorie voor elektronenoverdracht?"
      },
      options: [
        { en: "Rate vs driving force relationship showing optimal ΔG° for maximum rate, with rate decreasing at very negative ΔG° values", es: "Relación velocidad vs fuerza impulsora mostrando ΔG° óptimo para velocidad máxima, con velocidad disminuyendo a valores muy negativos de ΔG°", de: "Rate vs Triebkraft-Beziehung zeigt optimales ΔG° für maximale Geschwindigkeit, mit abnehmender Rate bei sehr negativen ΔG°-Werten", nl: "Snelheid vs drijvende kracht relatie tonend optimale ΔG° voor maximale snelheid, met snelheid afnemend bij zeer negatieve ΔG° waarden" },
        { en: "Linear relationship between rate and driving force", es: "Relación lineal entre velocidad y fuerza impulsora", de: "Lineare Beziehung zwischen Geschwindigkeit und Triebkraft", nl: "Lineaire relatie tussen snelheid en drijvende kracht" },
        { en: "Rate always increases with more negative ΔG°", es: "La velocidad siempre aumenta con ΔG° más negativo", de: "Rate steigt immer mit negativerer ΔG°", nl: "Snelheid neemt altijd toe met meer negatieve ΔG°" },
        { en: "Temperature has no effect on the curve shape", es: "La temperatura no tiene efecto en la forma de la curva", de: "Temperatur hat keinen Einfluss auf die Kurvenform", nl: "Temperatuur heeft geen effect op de curve vorm" }
      ],
      correct: 0,
      explanation: {
        en: "Marcus theory predicts that electron transfer rate initially increases with more negative ΔG° (normal region), reaches a maximum when -ΔG° = λ (reorganization energy), then decreases with even more negative ΔG° (inverted region) due to increasing activation barrier in highly exergonic reactions.",
        es: "La teoría de Marcus predice que la velocidad de transferencia electrónica inicialmente aumenta con ΔG° más negativo (región normal), alcanza un máximo cuando -ΔG° = λ (energía de reorganización), luego disminuye con ΔG° aún más negativo (región invertida) debido al aumento de barrera de activación en reacciones altamente exergónicas.",
        de: "Marcus-Theorie sagt voraus, dass die Elektronenübertragungsrate zunächst mit negativerer ΔG° steigt (normaler Bereich), ein Maximum erreicht wenn -ΔG° = λ (Reorganisationsenergie), dann mit noch negativerer ΔG° abnimmt (invertierter Bereich) aufgrund steigender Aktivierungsbarriere in hoch exergonischen Reaktionen.",
        nl: "Marcus theorie voorspelt dat elektronenoverdracht snelheid initieel toeneemt met meer negatieve ΔG° (normale regio), een maximum bereikt wanneer -ΔG° = λ (reorganisatie energie), dan afneemt met nog meer negatieve ΔG° (geïnverteerde regio) door toenemende activeringsbarrière in sterk exergonische reacties."
      }
    },
    {
      question: {
        en: "What characterizes a chain reaction mechanism?",
        es: "¿Qué caracteriza un mecanismo de reacción en cadena?",
        de: "Was charakterisiert einen Kettenreaktionsmechanismus?",
        nl: "Wat kenmerkt een kettingreactie mechanisme?"
      },
      options: [
        { en: "Initiation, propagation, and termination steps where propagation steps regenerate reactive intermediates", es: "Pasos de iniciación, propagación y terminación donde los pasos de propagación regeneran intermedios reactivos", de: "Initiations-, Propagations- und Terminationsschritte, wobei Propagationsschritte reaktive Zwischenprodukte regenerieren", nl: "Initiatie, propagatie en terminatie stappen waarbij propagatie stappen reactieve tussenproducten regenereren" },
        { en: "Only one elementary step occurs", es: "Solo ocurre un paso elemental", de: "Nur ein Elementarschritt tritt auf", nl: "Slechts één elementaire stap vindt plaats" },
        { en: "No reactive intermediates are involved", es: "No hay intermedios reactivos involucrados", de: "Keine reaktiven Zwischenprodukte sind beteiligt", nl: "Geen reactieve tussenproducten zijn betrokken" },
        { en: "The reaction rate is independent of initiator concentration", es: "La velocidad de reacción es independiente de la concentración del iniciador", de: "Die Reaktionsgeschwindigkeit ist unabhängig von der Initiatorkonzentration", nl: "De reactiesnelheid is onafhankelijk van de initiator concentratie" }
      ],
      correct: 0,
      explanation: {
        en: "Chain reactions consist of three stages: initiation (formation of reactive intermediates like radicals), propagation (reactive intermediates react to form products while regenerating themselves), and termination (destruction of reactive intermediates). The propagation steps allow the reaction to continue with small amounts of initiator.",
        es: "Las reacciones en cadena consisten en tres etapas: iniciación (formación de intermedios reactivos como radicales), propagación (intermedios reactivos reaccionan para formar productos mientras se regeneran), y terminación (destrucción de intermedios reactivos). Los pasos de propagación permiten que la reacción continúe con pequeñas cantidades de iniciador.",
        de: "Kettenreaktionen bestehen aus drei Stufen: Initiation (Bildung reaktiver Zwischenprodukte wie Radikale), Propagation (reaktive Zwischenprodukte reagieren zur Produktbildung während sie sich selbst regenerieren), und Termination (Zerstörung reaktiver Zwischenprodukte). Die Propagationsschritte ermöglichen der Reaktion mit kleinen Initiatormengen fortzufahren.",
        nl: "Kettingreacties bestaan uit drie fasen: initiatie (vorming van reactieve tussenproducten zoals radicalen), propagatie (reactieve tussenproducten reageren om producten te vormen terwijl ze zichzelf regenereren), en terminatie (vernietiging van reactieve tussenproducten). De propagatie stappen stellen de reactie in staat door te gaan met kleine hoeveelheden initiator."
      }
    },
    {
      question: {
        en: "What is the microscopic reversibility principle in reaction mechanisms?",
        es: "¿Qué es el principio de reversibilidad microscópica en mecanismos de reacción?",
        de: "Was ist das Prinzip der mikroskopischen Reversibilität in Reaktionsmechanismen?",
        nl: "Wat is het microscopische reversibiliteit principe in reactiemechanismen?"
      },
      options: [
        { en: "Forward and reverse reactions follow the same pathway but in opposite directions", es: "Las reacciones directa e inversa siguen la misma vía pero en direcciones opuestas", de: "Vorwärts- und Rückwärtsreaktionen folgen demselben Weg, aber in entgegengesetzte Richtungen", nl: "Voorwaartse en achterwaartse reacties volgen hetzelfde pad maar in tegengestelde richtingen" },
        { en: "Forward and reverse reactions use completely different mechanisms", es: "Las reacciones directa e inversa usan mecanismos completamente diferentes", de: "Vorwärts- und Rückwärtsreaktionen verwenden völlig unterschiedliche Mechanismen", nl: "Voorwaartse en achterwaartse reacties gebruiken volledig verschillende mechanismen" },
        { en: "Only irreversible reactions follow this principle", es: "Solo las reacciones irreversibles siguen este principio", de: "Nur irreversible Reaktionen folgen diesem Prinzip", nl: "Alleen onomkeerbare reacties volgen dit principe" },
        { en: "The principle only applies to gas phase reactions", es: "El principio solo se aplica a reacciones en fase gaseosa", de: "Das Prinzip gilt nur für Gasphasenreaktionen", nl: "Het principe geldt alleen voor gasfase reacties" }
      ],
      correct: 0,
      explanation: {
        en: "The principle of microscopic reversibility states that at equilibrium, the forward and reverse reactions must follow the same mechanism but in opposite directions. This means the detailed pathway and all intermediates are the same, ensuring the same transition states are accessed in both directions.",
        es: "El principio de reversibilidad microscópica establece que en equilibrio, las reacciones directa e inversa deben seguir el mismo mecanismo pero en direcciones opuestas. Esto significa que la vía detallada y todos los intermedios son los mismos, asegurando que los mismos estados de transición se accedan en ambas direcciones.",
        de: "Das Prinzip der mikroskopischen Reversibilität besagt, dass im Gleichgewicht Vorwärts- und Rückwärtsreaktionen demselben Mechanismus folgen müssen, aber in entgegengesetzte Richtungen. Dies bedeutet, dass der detaillierte Weg und alle Zwischenprodukte gleich sind, wodurch sichergestellt wird, dass dieselben Übergangszustände in beiden Richtungen erreicht werden.",
        nl: "Het principe van microscopische reversibiliteit stelt dat in evenwicht, de voorwaartse en achterwaartse reacties hetzelfde mechanisme moeten volgen maar in tegengestelde richtingen. Dit betekent dat het gedetailleerde pad en alle tussenproducten hetzelfde zijn, waardoor wordt gewaarborgd dat dezelfde overgangstoestanden in beide richtingen worden bereikt."
      }
    },
    {
      question: {
        en: "What is the difference between concerted and stepwise mechanisms?",
        es: "¿Cuál es la diferencia entre mecanismos concertados y por pasos?",
        de: "Was ist der Unterschied zwischen konzertierten und stufenweisen Mechanismen?",
        nl: "Wat is het verschil tussen gecoördineerde en stapsgewijze mechanismen?"
      },
      options: [
        { en: "Concerted: all bond changes occur simultaneously; Stepwise: bond changes occur in sequence with intermediates", es: "Concertado: todos los cambios de enlaces ocurren simultáneamente; Por pasos: cambios de enlaces ocurren en secuencia con intermedios", de: "Konzertiert: alle Bindungsänderungen treten gleichzeitig auf; Stufenweise: Bindungsänderungen treten nacheinander mit Zwischenprodukten auf", nl: "Gecoördineerd: alle bindingsveranderingen treden gelijktijdig op; Stapsgewijs: bindingsveranderingen treden opeenvolgend op met tussenproducten" },
        { en: "Concerted mechanisms are always slower", es: "Los mecanismos concertados son siempre más lentos", de: "Konzertierte Mechanismen sind immer langsamer", nl: "Gecoördineerde mechanismen zijn altijd langzamer" },
        { en: "Stepwise mechanisms never have intermediates", es: "Los mecanismos por pasos nunca tienen intermedios", de: "Stufenweise Mechanismen haben nie Zwischenprodukte", nl: "Stapsgewijze mechanismen hebben nooit tussenproducten" },
        { en: "Both mechanisms always give the same products", es: "Ambos mecanismos siempre dan los mismos productos", de: "Beide Mechanismen ergeben immer dieselben Produkte", nl: "Beide mechanismen geven altijd dezelfde producten" }
      ],
      correct: 0,
      explanation: {
        en: "In concerted mechanisms, all bond-forming and bond-breaking occurs simultaneously in a single step through one transition state. In stepwise mechanisms, bonds are made and broken in sequence through multiple steps with discrete intermediates and multiple transition states.",
        es: "En mecanismos concertados, toda formación y ruptura de enlaces ocurre simultáneamente en un solo paso a través de un estado de transición. En mecanismos por pasos, los enlaces se forman y rompen en secuencia a través de múltiples pasos con intermedios discretos y múltiples estados de transición.",
        de: "Bei konzertierten Mechanismen erfolgen alle Bindungsbildungen und -brüche gleichzeitig in einem einzigen Schritt durch einen Übergangszustand. Bei stufenweisen Mechanismen werden Bindungen nacheinander in mehreren Schritten mit diskreten Zwischenprodukten und mehreren Übergangszuständen gebildet und gebrochen.",
        nl: "In gecoördineerde mechanismen treden alle bindingsvorming en bindingsbreuk gelijktijdig op in één enkele stap door één overgangstoestand. In stapsgewijze mechanismen worden bindingen gemaakt en gebroken in volgorde door meerdere stappen met discrete tussenproducten en meerdere overgangstoestanden."
      }
    },
    {
      question: {
        en: "What is the role of pre-equilibrium approximation in multi-step reactions?",
        es: "¿Cuál es el papel de la aproximación de pre-equilibrio en reacciones de múltiples pasos?",
        de: "Was ist die Rolle der Vorgleichgewichts-Näherung in mehrstufigen Reaktionen?",
        nl: "Wat is de rol van pre-evenwicht benadering in meerstaps reacties?"
      },
      options: [
        { en: "Assumes fast pre-equilibrium before rate-determining step, simplifying kinetic derivations", es: "Asume pre-equilibrio rápido antes del paso determinante de velocidad, simplificando derivaciones cinéticas", de: "Nimmt schnelles Vorgleichgewicht vor dem geschwindigkeitsbestimmenden Schritt an, vereinfacht kinetische Ableitungen", nl: "Neemt snel pre-evenwicht aan voor snelheidsbepalende stap, vereenvoudigt kinetische afleidingen" },
        { en: "All steps have equal rates", es: "Todos los pasos tienen velocidades iguales", de: "Alle Schritte haben gleiche Geschwindigkeiten", nl: "Alle stappen hebben gelijke snelheden" },
        { en: "No equilibrium exists between intermediates", es: "No existe equilibrio entre intermedios", de: "Kein Gleichgewicht existiert zwischen Zwischenprodukten", nl: "Er bestaat geen evenwicht tussen tussenproducten" },
        { en: "The first step is always rate-determining", es: "El primer paso siempre es determinante de velocidad", de: "Der erste Schritt ist immer geschwindigkeitsbestimmend", nl: "De eerste stap is altijd snelheidsbepalend" }
      ],
      correct: 0,
      explanation: {
        en: "The pre-equilibrium approximation assumes that initial reversible steps reach equilibrium rapidly compared to the rate-determining step. This allows us to express intermediate concentrations in terms of reactant concentrations using equilibrium constants, simplifying overall rate law derivations.",
        es: "La aproximación de pre-equilibrio asume que los pasos reversibles iniciales alcanzan equilibrio rápidamente comparado con el paso determinante de velocidad. Esto permite expresar concentraciones de intermedios en términos de concentraciones de reactivos usando constantes de equilibrio, simplificando derivaciones de ley de velocidad general.",
        de: "Die Vorgleichgewichts-Näherung nimmt an, dass anfängliche reversible Schritte schnell im Vergleich zum geschwindigkeitsbestimmenden Schritt das Gleichgewicht erreichen. Dies ermöglicht es, Zwischenproduktkonzentrationen durch Reaktantenkonzentrationen mittels Gleichgewichtskonstanten auszudrücken und vereinfacht die Ableitung des Gesamtgeschwindigkeitsgesetzes.",
        nl: "De pre-evenwicht benadering neemt aan dat initiële reversibele stappen snel evenwicht bereiken vergeleken met de snelheidsbepalende stap. Dit stelt ons in staat tussenproduct concentraties uit te drukken in termen van reactant concentraties met behulp van evenwichtsconstanten, vereenvoudigt algemene snelheidswet afleidingen."
      }
    },
    {
      question: {
        en: "What determines regioselectivity in addition reactions?",
        es: "¿Qué determina la regioselectividad en reacciones de adición?",
        de: "Was bestimmt Regioselektivität in Additionsreaktionen?",
        nl: "Wat bepaalt regioselectiviteit in additiereacties?"
      },
      options: [
        { en: "Stability of carbocation intermediates (Markovnikov's rule) or radical stability in radical additions", es: "Estabilidad de intermedios carbocatión (regla de Markovnikov) o estabilidad de radicales en adiciones radicalarias", de: "Stabilität von Carbokation-Zwischenprodukten (Markovnikov-Regel) oder Radikalstabilität bei Radikaladditionen", nl: "Stabiliteit van carbokation tussenproducten (Markovnikov regel) of radicaal stabiliteit in radicaal additie" },
        { en: "Random addition with no preference", es: "Adición aleatoria sin preferencia", de: "Zufällige Addition ohne Präferenz", nl: "Willekeurige additie zonder voorkeur" },
        { en: "Always favors primary carbon formation", es: "Siempre favorece la formación de carbono primario", de: "Bevorzugt immer primäre Kohlenstoffbildung", nl: "Begunstigt altijd primaire koolstof vorming" },
        { en: "Only depends on steric factors", es: "Solo depende de factores estéricos", de: "Hängt nur von sterischen Faktoren ab", nl: "Hangt alleen af van sterische factoren" }
      ],
      correct: 0,
      explanation: {
        en: "Regioselectivity in addition reactions follows Markovnikov's rule for ionic mechanisms (hydrogen adds to carbon with more hydrogens, forming more stable carbocation) or anti-Markovnikov for radical mechanisms (forming more stable radical intermediate). Electronic and steric effects both contribute.",
        es: "La regioselectividad en reacciones de adición sigue la regla de Markovnikov para mecanismos iónicos (hidrógeno se adiciona al carbono con más hidrógenos, formando carbocatión más estable) o anti-Markovnikov para mecanismos radicalarios (formando intermedio radical más estable). Efectos electrónicos y estéricos contribuyen.",
        de: "Regioselektivität in Additionsreaktionen folgt Markovnikovs Regel für ionische Mechanismen (Wasserstoff addiert an Kohlenstoff mit mehr Wasserstoffen, bildet stabileres Carbokation) oder Anti-Markovnikov für Radikalmechanismen (bildet stabileres Radikalzwischenprodukt). Elektronische und sterische Effekte tragen beide bei.",
        nl: "Regioselectiviteit in additiereacties volgt Markovnikov regel voor ionische mechanismen (waterstof addeert aan koolstof met meer waterstofatomen, vormend meer stabiel carbokation) of anti-Markovnikov voor radicaal mechanismen (vormend meer stabiel radicaal tussenproduct). Elektronische en sterische effecten dragen beide bij."
      }
    },
    {
      question: {
        en: "What is the significance of activation parameters (ΔH‡, ΔS‡) in reaction mechanisms?",
        es: "¿Cuál es la significancia de parámetros de activación (ΔH‡, ΔS‡) en mecanismos de reacción?",
        de: "Was ist die Bedeutung von Aktivierungsparametern (ΔH‡, ΔS‡) in Reaktionsmechanismen?",
        nl: "Wat is de betekenis van activeringsparameters (ΔH‡, ΔS‡) in reactiemechanismen?"
      },
      options: [
        { en: "ΔH‡ indicates bond-breaking/making; ΔS‡ indicates molecularity and organization changes in transition state", es: "ΔH‡ indica ruptura/formación de enlaces; ΔS‡ indica cambios de molecularidad y organización en estado de transición", de: "ΔH‡ zeigt Bindungsbruch/-bildung an; ΔS‡ zeigt Molekularität und Organisationsänderungen im Übergangszustand an", nl: "ΔH‡ geeft bindingsbreuk/-vorming aan; ΔS‡ geeft moleculariteit en organisatie veranderingen in overgangstoestand aan" },
        { en: "Both parameters are always positive", es: "Ambos parámetros son siempre positivos", de: "Beide Parameter sind immer positiv", nl: "Beide parameters zijn altijd positief" },
        { en: "They have no relationship to mechanism", es: "No tienen relación con el mecanismo", de: "Sie haben keine Beziehung zum Mechanismus", nl: "Ze hebben geen relatie tot mechanisme" },
        { en: "ΔS‡ is always zero for all reactions", es: "ΔS‡ es siempre cero para todas las reacciones", de: "ΔS‡ ist immer null für alle Reaktionen", nl: "ΔS‡ is altijd nul voor alle reacties" }
      ],
      correct: 0,
      explanation: {
        en: "Activation enthalpy (ΔH‡) reflects energy required for bond breaking/forming in the transition state. Activation entropy (ΔS‡) indicates changes in molecular organization - negative for associative mechanisms (two molecules → one TS), positive for dissociative mechanisms (one molecule → multiple fragments in TS).",
        es: "La entalpía de activación (ΔH‡) refleja energía requerida para ruptura/formación de enlaces en el estado de transición. La entropía de activación (ΔS‡) indica cambios en organización molecular - negativa para mecanismos asociativos (dos moléculas → un ET), positiva para mecanismos disociativos (una molécula → múltiples fragmentos en ET).",
        de: "Aktivierungsenthalpie (ΔH‡) spiegelt die für Bindungsbruch/-bildung im Übergangszustand erforderliche Energie wider. Aktivierungsentropie (ΔS‡) zeigt Änderungen in molekularer Organisation - negativ für assoziative Mechanismen (zwei Moleküle → ein ÜZ), positiv für dissoziative Mechanismen (ein Molekül → mehrere Fragmente im ÜZ).",
        nl: "Activerings enthalpie (ΔH‡) reflecteert energie vereist voor bindingsbreuk/-vorming in de overgangstoestand. Activerings entropie (ΔS‡) geeft veranderingen in moleculaire organisatie aan - negatief voor associatieve mechanismen (twee moleculen → één OT), positief voor dissociatieve mechanismen (één molecuul → meerdere fragmenten in OT)."
      }
    },
    {
      question: {
        en: "What is the difference between primary and secondary kinetic isotope effects?",
        es: "¿Cuál es la diferencia entre efectos isotópicos cinéticos primarios y secundarios?",
        de: "Was ist der Unterschied zwischen primären und sekundären kinetischen Isotopeneffekten?",
        nl: "Wat is het verschil tussen primaire en secundaire kinetische isotoop effecten?"
      },
      options: [
        { en: "Primary: bond to isotope breaks in rate-determining step; Secondary: isotope affects reaction without bond breaking", es: "Primario: enlace al isótopo se rompe en paso determinante; Secundario: isótopo afecta reacción sin ruptura de enlace", de: "Primär: Bindung zum Isotop bricht im geschwindigkeitsbestimmenden Schritt; Sekundär: Isotop beeinflusst Reaktion ohne Bindungsbruch", nl: "Primair: binding naar isotoop breekt in snelheidsbepalende stap; Secundair: isotoop beïnvloedt reactie zonder bindingsbreuk" },
        { en: "Primary effects are always smaller than secondary effects", es: "Los efectos primarios son siempre menores que los secundarios", de: "Primäre Effekte sind immer kleiner als sekundäre Effekte", nl: "Primaire effecten zijn altijd kleiner dan secundaire effecten" },
        { en: "Secondary effects only occur with carbon isotopes", es: "Los efectos secundarios solo ocurren con isótopos de carbono", de: "Sekundäre Effekte treten nur bei Kohlenstoffisotopen auf", nl: "Secundaire effecten treden alleen op bij koolstof isotopen" },
        { en: "Both effects have identical magnitudes", es: "Ambos efectos tienen magnitudes idénticas", de: "Beide Effekte haben identische Größenordnungen", nl: "Beide effecten hebben identieke grootten" }
      ],
      correct: 0,
      explanation: {
        en: "Primary kinetic isotope effects occur when the bond to the isotopic atom is broken in the rate-determining step (typically kH/kD = 2-8). Secondary isotope effects occur when the isotope influences the reaction rate without direct bond breaking, usually through hyperconjugation or steric effects (typically kH/kD = 1.1-1.5).",
        es: "Los efectos isotópicos cinéticos primarios ocurren cuando el enlace al átomo isotópico se rompe en el paso determinante de velocidad (típicamente kH/kD = 2-8). Los efectos isotópicos secundarios ocurren cuando el isótopo influye en la velocidad de reacción sin ruptura directa de enlace, usualmente a través de hiperconjugación o efectos estéricos (típicamente kH/kD = 1.1-1.5).",
        de: "Primäre kinetische Isotopeneffekte treten auf, wenn die Bindung zum isotopischen Atom im geschwindigkeitsbestimmenden Schritt gebrochen wird (typisch kH/kD = 2-8). Sekundäre Isotopeneffekte treten auf, wenn das Isotop die Reaktionsgeschwindigkeit ohne direkten Bindungsbruch beeinflusst, meist durch Hyperkonjugation oder sterische Effekte (typisch kH/kD = 1.1-1.5).",
        nl: "Primaire kinetische isotoop effecten treden op wanneer de binding naar het isotopische atoom wordt gebroken in de snelheidsbepalende stap (typisch kH/kD = 2-8). Secundaire isotoop effecten treden op wanneer het isotoop de reactiesnelheid beïnvloedt zonder directe bindingsbreuk, gewoonlijk door hyperconjugatie of sterische effecten (typisch kH/kD = 1.1-1.5)."
      }
    },
    {
      question: {
        en: "What is the role of tunneling in chemical reactions?",
        es: "¿Cuál es el papel del efecto túnel en reacciones químicas?",
        de: "Was ist die Rolle des Tunnelns in chemischen Reaktionen?",
        nl: "Wat is de rol van tunneling in chemische reacties?"
      },
      options: [
        { en: "Allows particles to pass through energy barriers rather than over them, especially important for light atoms like hydrogen", es: "Permite que partículas pasen a través de barreras energéticas en lugar de sobre ellas, especialmente importante para átomos ligeros como hidrógeno", de: "Ermöglicht Partikeln, durch Energiebarrieren zu passieren statt über sie, besonders wichtig für leichte Atome wie Wasserstoff", nl: "Stelt deeltjes in staat door energie barrières te passeren in plaats van eroverheen, vooral belangrijk voor lichte atomen zoals waterstof" },
        { en: "Only occurs at very high temperatures", es: "Solo ocurre a temperaturas muy altas", de: "Tritt nur bei sehr hohen Temperaturen auf", nl: "Treedt alleen op bij zeer hoge temperaturen" },
        { en: "Has no effect on reaction rates", es: "No tiene efecto en las velocidades de reacción", de: "Hat keinen Einfluss auf Reaktionsgeschwindigkeiten", nl: "Heeft geen effect op reactiesnelheden" },
        { en: "Only important for heavy atoms", es: "Solo importante para átomos pesados", de: "Nur wichtig für schwere Atome", nl: "Alleen belangrijk voor zware atomen" }
      ],
      correct: 0,
      explanation: {
        en: "Quantum tunneling allows particles to pass through energy barriers without having sufficient classical energy to go over them. This is particularly important for hydrogen transfer reactions at low temperatures, where the light mass of hydrogen enables significant tunneling contributions, leading to temperature-independent rate components and unusual isotope effects.",
        es: "El efecto túnel cuántico permite que partículas pasen a través de barreras energéticas sin tener suficiente energía clásica para pasar sobre ellas. Esto es particularmente importante para reacciones de transferencia de hidrógeno a bajas temperaturas, donde la masa ligera del hidrógeno permite contribuciones significativas de túnel, llevando a componentes de velocidad independientes de temperatura y efectos isotópicos inusuales.",
        de: "Quantentunneln ermöglicht Partikeln, durch Energiebarrieren zu passieren, ohne ausreichend klassische Energie zu haben, um über sie zu gehen. Dies ist besonders wichtig für Wasserstofftransferreaktionen bei niedrigen Temperaturen, wo die geringe Masse des Wasserstoffs erhebliche Tunnelbeiträge ermöglicht, was zu temperaturunabhängigen Ratenkomponenten und ungewöhnlichen Isotopeneffekten führt.",
        nl: "Kwantum tunneling stelt deeltjes in staat door energie barrières te passeren zonder voldoende klassieke energie te hebben om eroverheen te gaan. Dit is bijzonder belangrijk voor waterstof overdracht reacties bij lage temperaturen, waar de lichte massa van waterstof significante tunneling bijdragen mogelijk maakt, leidend tot temperatuur-onafhankelijke snelheidscomponenten en ongewone isotoop effecten."
      },
    {
      question: {
        en: "What is the role of solvent effects in reaction mechanisms?",
        es: "¿Cuál es el papel de los efectos del solvente en los mecanismos de reacción?",
        de: "Was ist die Rolle von Lösungsmitteleffekten in Reaktionsmechanismen?",
        nl: "Wat is de rol van oplosmiddel effecten in reactiemechanismen?"
      },
      options: [
        { en: "Polar solvents stabilize ionic intermediates; nonpolar solvents favor radical mechanisms and homolytic processes", es: "Solventes polares estabilizan intermedios iónicos; solventes no polares favorecen mecanismos radicalarios y procesos homolíticos", de: "Polare Lösungsmittel stabilisieren ionische Zwischenprodukte; unpolare Lösungsmittel bevorzugen Radikalmechanismen und homolytische Prozesse", nl: "Polaire oplosmiddelen stabiliseren ionische tussenproducten; niet-polaire oplosmiddelen begunstigunnen radicaal mechanismen en homolytische processen" },
        { en: "All solvents have identical effects on reaction rates", es: "Todos los solventes tienen efectos idénticos en las velocidades de reacción", de: "Alle Lösungsmittel haben identische Auswirkungen auf Reaktionsgeschwindigkeiten", nl: "Alle oplosmiddelen hebben identieke effecten op reactiesnelheden" },
        { en: "Solvent effects only matter at high temperatures", es: "Los efectos del solvente solo importan a altas temperaturas", de: "Lösungsmitteleffekte sind nur bei hohen Temperaturen wichtig", nl: "Oplosmiddel effecten zijn alleen belangrijk bij hoge temperaturen" },
        { en: "Solvents cannot change reaction mechanisms", es: "Los solventes no pueden cambiar mecanismos de reacción", de: "Lösungsmittel können Reaktionsmechanismen nicht ändern", nl: "Oplosmiddelen kunnen reactiemechanismen niet veranderen" }
      ],
      correct: 0,
      explanation: {
        en: "Solvent polarity significantly affects reaction mechanisms by stabilizing or destabilizing charged intermediates. Polar protic solvents (water, alcohols) stabilize ionic species and favor SN1/E1 mechanisms. Nonpolar solvents favor radical reactions and SN2/E2 mechanisms. Solvent can even change the mechanism entirely.",
        es: "La polaridad del solvente afecta significativamente los mecanismos de reacción estabilizando o desestabilizando intermedios cargados. Los solventes próticos polares (agua, alcoholes) estabilizan especies iónicas y favorecen mecanismos SN1/E1. Los solventes no polares favorecen reacciones radicalarias y mecanismos SN2/E2. El solvente puede incluso cambiar completamente el mecanismo.",
        de: "Lösungsmittelpolarität beeinflusst Reaktionsmechanismen erheblich durch Stabilisierung oder Destabilisierung geladener Zwischenprodukte. Polare protische Lösungsmittel (Wasser, Alkohole) stabilisieren ionische Spezies und bevorzugen SN1/E1-Mechanismen. Unpolare Lösungsmittel bevorzugen Radikalreaktionen und SN2/E2-Mechanismen. Lösungsmittel können den Mechanismus sogar vollständig ändern.",
        nl: "Oplosmiddel polariteit beïnvloedt reactiemechanismen significant door het stabiliseren of destabiliseren van geladen tussenproducten. Polaire protische oplosmiddelen (water, alcoholen) stabiliseren ionische species en begunstigenen SN1/E1 mechanismen. Niet-polaire oplosmiddelen begunstigenen radicaal reacties en SN2/E2 mechanismen. Oplosmiddel kan het mechanisme zelfs volledig veranderen."
      }
    }
  ]
});
