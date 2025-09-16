// Biology - Level 3: Advanced Systems Biology and Molecular Interactions
(function() {
  const level3 = {
    name: {
      en: "Advanced Systems Biology",
      es: "Biología de Sistemas Avanzada",
      de: "Erweiterte Systembiologie",
      nl: "Geavanceerde Systeembiologie"
    },
    questions: [
      {
        question: {
          en: "Which mathematical model best describes the dynamics of enzymatic reactions at substrate saturation?",
          es: "¿Qué modelo matemático describe mejor la dinámica de reacciones enzimáticas en saturación de sustrato?",
          de: "Welches mathematische Modell beschreibt am besten die Dynamik enzymatischer Reaktionen bei Substratsättigung?",
          nl: "Welk wiskundig model beschrijft het beste de dynamiek van enzymatische reacties bij substraatsaturatie?"
        },
        options: [
          { en: "Michaelis-Menten kinetics", es: "Cinética de Michaelis-Menten", de: "Michaelis-Menten-Kinetik", nl: "Michaelis-Menten kinetiek" },
          { en: "First-order kinetics", es: "Cinética de primer orden", de: "Erste-Ordnung-Kinetik", nl: "Eerste-orde kinetiek" },
          { en: "Arrhenius equation", es: "Ecuación de Arrhenius", de: "Arrhenius-Gleichung", nl: "Arrhenius vergelijking" },
          { en: "Henderson-Hasselbalch equation", es: "Ecuación de Henderson-Hasselbalch", de: "Henderson-Hasselbalch-Gleichung", nl: "Henderson-Hasselbalch vergelijking" }
        ],
        correct: 0,
        explanation: {
          en: "Michaelis-Menten kinetics describes the rate of enzymatic reactions as a function of substrate concentration, showing saturation behavior at high substrate concentrations where Vmax is approached.",
          es: "La cinética de Michaelis-Menten describe la tasa de reacciones enzimáticas en función de la concentración de sustrato, mostrando comportamiento de saturación a altas concentraciones donde se aproxima Vmax.",
          de: "Die Michaelis-Menten-Kinetik beschreibt die Rate enzymatischer Reaktionen als Funktion der Substratkonzentration und zeigt Sättigungsverhalten bei hohen Konzentrationen, wo sich Vmax nähert.",
          nl: "Michaelis-Menten kinetiek beschrijft de snelheid van enzymatische reacties als functie van substraatconcentratie, waarbij saturatiegedrag wordt getoond bij hoge concentraties waar Vmax wordt benaderd."
        }
      },
      {
        question: {
          en: "What type of network topology characterizes most biological regulatory networks?",
          es: "¿Qué tipo de topología de red caracteriza a la mayoría de las redes regulatorias biológicas?",
          de: "Welche Art von Netzwerktopologie charakterisiert die meisten biologischen regulatorischen Netzwerke?",
          nl: "Welk type netwerktopologie kenmerkt de meeste biologische regulatoire netwerken?"
        },
        options: [
          { en: "Scale-free networks", es: "Redes libres de escala", de: "Skalenfreie Netzwerke", nl: "Schaalvrije netwerken" },
          { en: "Random networks", es: "Redes aleatorias", de: "Zufallsnetzwerke", nl: "Willekeurige netwerken" },
          { en: "Regular lattice networks", es: "Redes de celosía regular", de: "Regelmäßige Gitternetzwerke", nl: "Reguliere roosternetwerken" },
          { en: "Fully connected networks", es: "Redes completamente conectadas", de: "Vollständig verbundene Netzwerke", nl: "Volledig verbonden netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "Biological regulatory networks typically exhibit scale-free topology, where most nodes have few connections but a small number of 'hub' nodes have many connections, following a power-law degree distribution.",
          es: "Las redes regulatorias biológicas típicamente exhiben topología libre de escala, donde la mayoría de nodos tienen pocas conexiones pero un número pequeño de nodos 'hub' tienen muchas conexiones, siguiendo una distribución de grado de ley de potencia.",
          de: "Biologische regulatorische Netzwerke zeigen typischerweise skalenfreie Topologie, wo die meisten Knoten wenige Verbindungen haben, aber eine kleine Anzahl von 'Hub'-Knoten viele Verbindungen hat, entsprechend einer Potenzgesetz-Gradverteilung.",
          nl: "Biologische regulatoire netwerken vertonen meestal schaalvrije topologie, waarbij de meeste knooppunten weinig verbindingen hebben maar een klein aantal 'hub' knooppunten veel verbindingen heeft, volgens een machtswet graadverdeling."
        }
      },
      {
        question: {
          en: "Which principle explains how metabolic pathways achieve robustness against perturbations?",
          es: "¿Qué principio explica cómo las vías metabólicas logran robustez contra perturbaciones?",
          de: "Welches Prinzip erklärt, wie Stoffwechselwege Robustheit gegen Störungen erreichen?",
          nl: "Welk principe verklaart hoe metabolische routes robuustheid tegen verstoringen bereiken?"
        },
        options: [
          { en: "Metabolic control analysis and flux control coefficients", es: "Análisis de control metabólico y coeficientes de control de flujo", de: "Metabolische Kontrollanalyse und Flusskontrollkoeffizienten", nl: "Metabolische controleanalyse en fluxcontrolecoëfficiënten" },
          { en: "Simple linear pathways", es: "Vías lineales simples", de: "Einfache lineare Wege", nl: "Eenvoudige lineaire routes" },
          { en: "Single enzyme control", es: "Control de enzima única", de: "Einzelenzymkontrolle", nl: "Enkele enzymcontrole" },
          { en: "Uniform enzyme distribution", es: "Distribución uniforme de enzimas", de: "Gleichmäßige Enzymverteilung", nl: "Uniforme enzymverdeling" }
        ],
        correct: 0,
        explanation: {
          en: "Metabolic control analysis shows that flux control is distributed among multiple enzymes in a pathway, with flux control coefficients quantifying each enzyme's contribution to pathway robustness and regulation.",
          es: "El análisis de control metabólico muestra que el control de flujo se distribuye entre múltiples enzimas en una vía, con coeficientes de control de flujo cuantificando la contribución de cada enzima a la robustez y regulación de la vía.",
          de: "Die metabolische Kontrollanalyse zeigt, dass Flusskontrolle unter mehreren Enzymen in einem Weg verteilt ist, wobei Flusskontrollkoeffizienten den Beitrag jedes Enzyms zur Wegrobustheit und -regulation quantifizieren.",
          nl: "Metabolische controleanalyse toont aan dat fluxcontrole verdeeld is over meerdere enzymen in een route, waarbij fluxcontrolecoëfficiënten de bijdrage van elk enzym aan route-robuustheid en regulatie kwantificeren."
        }
      },
      {
        question: {
          en: "What is the primary mechanism by which biological systems exhibit emergent properties?",
          es: "¿Cuál es el mecanismo primario por el cual los sistemas biológicos exhiben propiedades emergentes?",
          de: "Was ist der primäre Mechanismus, durch den biologische Systeme emergente Eigenschaften zeigen?",
          nl: "Wat is het primaire mechanisme waardoor biologische systemen emergente eigenschappen vertonen?"
        },
        options: [
          { en: "Non-linear interactions between system components", es: "Interacciones no lineales entre componentes del sistema", de: "Nichtlineare Interaktionen zwischen Systemkomponenten", nl: "Niet-lineaire interacties tussen systeemcomponenten" },
          { en: "Linear summation of individual parts", es: "Suma lineal de partes individuales", de: "Lineare Summierung einzelner Teile", nl: "Lineaire sommatie van individuele delen" },
          { en: "Single component dominance", es: "Dominancia de un solo componente", de: "Einzelkomponentendominanz", nl: "Enkele componentdominantie" },
          { en: "Random component behavior", es: "Comportamiento aleatorio de componentes", de: "Zufälliges Komponentenverhalten", nl: "Willekeurig componentgedrag" }
        ],
        correct: 0,
        explanation: {
          en: "Emergent properties arise from non-linear interactions between system components, where the collective behavior cannot be predicted from studying individual components alone, creating system-level phenomena.",
          es: "Las propiedades emergentes surgen de interacciones no lineales entre componentes del sistema, donde el comportamiento colectivo no puede predecirse estudiando componentes individuales solos, creando fenómenos a nivel de sistema.",
          de: "Emergente Eigenschaften entstehen aus nichtlinearen Interaktionen zwischen Systemkomponenten, wo kollektives Verhalten nicht durch das Studium einzelner Komponenten allein vorhergesagt werden kann, was systemebene Phänomene schafft.",
          nl: "Emergente eigenschappen ontstaan uit niet-lineaire interacties tussen systeemcomponenten, waarbij collectief gedrag niet kan worden voorspeld door alleen individuele componenten te bestuderen, wat systeemniveau fenomenen creëert."
        }
      },
      {
        question: {
          en: "Which mathematical approach is most suitable for modeling stochastic gene expression?",
          es: "¿Qué enfoque matemático es más adecuado para modelar expresión génica estocástica?",
          de: "Welcher mathematische Ansatz ist am besten geeignet für die Modellierung stochastischer Genexpression?",
          nl: "Welke wiskundige benadering is het meest geschikt voor het modelleren van stochastische genexpressie?"
        },
        options: [
          { en: "Master equation and chemical Langevin equation", es: "Ecuación maestra y ecuación de Langevin química", de: "Mastergleichung und chemische Langevin-Gleichung", nl: "Master vergelijking en chemische Langevin vergelijking" },
          { en: "Deterministic differential equations", es: "Ecuaciones diferenciales deterministas", de: "Deterministische Differentialgleichungen", nl: "Deterministische differentiaalvergelijkingen" },
          { en: "Linear algebra", es: "Álgebra lineal", de: "Lineare Algebra", nl: "Lineaire algebra" },
          { en: "Simple algebraic equations", es: "Ecuaciones algebraicas simples", de: "Einfache algebraische Gleichungen", nl: "Eenvoudige algebraïsche vergelijkingen" }
        ],
        correct: 0,
        explanation: {
          en: "Stochastic gene expression involves random fluctuations due to low molecule numbers. The master equation captures exact stochastic dynamics, while the chemical Langevin equation provides a computationally efficient approximation.",
          es: "La expresión génica estocástica involucra fluctuaciones aleatorias debido a números bajos de moléculas. La ecuación maestra captura dinámicas estocásticas exactas, mientras que la ecuación de Langevin química proporciona una aproximación computacionalmente eficiente.",
          de: "Stochastische Genexpression beinhaltet zufällige Fluktuationen aufgrund niedriger Molekülzahlen. Die Mastergleichung erfasst exakte stochastische Dynamik, während die chemische Langevin-Gleichung eine rechnerisch effiziente Näherung bietet.",
          nl: "Stochastische genexpressie omvat willekeurige fluctuaties door lage molecuulaantallen. De master vergelijking legt exacte stochastische dynamiek vast, terwijl de chemische Langevin vergelijking een computationeel efficiënte benadering biedt."
        }
      },
      {
        question: {
          en: "What is the key characteristic of bistable systems in cell signaling?",
          es: "¿Cuál es la característica clave de los sistemas biestables en señalización celular?",
          de: "Was ist die Schlüsseleigenschaft bistabiler Systeme in der Zellsignalübertragung?",
          nl: "Wat is de sleuteleigenschap van bistabiele systemen in celsignalering?"
        },
        options: [
          { en: "Two stable steady states separated by an unstable threshold", es: "Dos estados estables separados por un umbral inestable", de: "Zwei stabile stationäre Zustände getrennt durch eine instabile Schwelle", nl: "Twee stabiele evenwichtstoestanden gescheiden door een instabiele drempel" },
          { en: "Linear dose-response relationship", es: "Relación dosis-respuesta lineal", de: "Lineare Dosis-Wirkungs-Beziehung", nl: "Lineaire dosis-respons relatie" },
          { en: "Single stable equilibrium", es: "Equilibrio estable único", de: "Einzelnes stabiles Gleichgewicht", nl: "Enkel stabiel evenwicht" },
          { en: "Oscillatory behavior only", es: "Solo comportamiento oscilatorio", de: "Nur oszillatorisches Verhalten", nl: "Alleen oscillerend gedrag" }
        ],
        correct: 0,
        explanation: {
          en: "Bistable systems have two stable steady states with different output levels for the same input, separated by an unstable saddle point. This creates hysteresis and enables switch-like cellular decision making.",
          es: "Los sistemas biestables tienen dos estados estables con diferentes niveles de salida para la misma entrada, separados por un punto de silla inestable. Esto crea histéresis y permite toma de decisiones celulares tipo interruptor.",
          de: "Bistabile Systeme haben zwei stabile stationäre Zustände mit verschiedenen Ausgangsniveaus für dieselbe Eingabe, getrennt durch einen instabilen Sattelpunkt. Dies schafft Hysterese und ermöglicht schalterähnliche zelluläre Entscheidungsfindung.",
          nl: "Bistabiele systemen hebben twee stabiele evenwichtstoestanden met verschillende outputniveaus voor dezelfde input, gescheiden door een instabiel zadelpunt. Dit creëert hysterese en maakt schakelaar-achtige cellulaire besluitvorming mogelijk."
        }
      },
      {
        question: {
          en: "Which type of feedback loop is most effective for maintaining homeostasis?",
          es: "¿Qué tipo de bucle de retroalimentación es más efectivo para mantener homeostasis?",
          de: "Welche Art von Rückkopplungsschleife ist am effektivsten für die Aufrechterhaltung der Homöostase?",
          nl: "Welk type feedback loop is het meest effectief voor het behouden van homeostase?"
        },
        options: [
          { en: "Negative feedback with integral control", es: "Retroalimentación negativa con control integral", de: "Negative Rückkopplung mit Integralkontrolle", nl: "Negatieve feedback met integrale controle" },
          { en: "Positive feedback only", es: "Solo retroalimentación positiva", de: "Nur positive Rückkopplung", nl: "Alleen positieve feedback" },
          { en: "No feedback control", es: "Sin control de retroalimentación", de: "Keine Rückkopplungskontrolle", nl: "Geen feedback controle" },
          { en: "Proportional control only", es: "Solo control proporcional", de: "Nur proportionale Kontrolle", nl: "Alleen proportionele controle" }
        ],
        correct: 0,
        explanation: {
          en: "Negative feedback with integral control provides robust homeostasis by both responding to deviations from the set point and eliminating steady-state error, ensuring perfect adaptation to disturbances.",
          es: "La retroalimentación negativa con control integral proporciona homeostasis robusta tanto respondiendo a desviaciones del punto establecido como eliminando error de estado estable, asegurando adaptación perfecta a perturbaciones.",
          de: "Negative Rückkopplung mit Integralkontrolle bietet robuste Homöostase, indem sie sowohl auf Abweichungen vom Sollwert reagiert als auch stationären Fehler eliminiert, was perfekte Anpassung an Störungen gewährleistet.",
          nl: "Negatieve feedback met integrale controle biedt robuuste homeostase door zowel te reageren op afwijkingen van het setpoint als steady-state fout te elimineren, wat perfecte aanpassing aan verstoringen verzekert."
        }
      },
      {
        question: {
          en: "What is the primary advantage of allosteric regulation over competitive inhibition?",
          es: "¿Cuál es la ventaja primaria de la regulación alostérica sobre la inhibición competitiva?",
          de: "Was ist der primäre Vorteil allosterischer Regulation gegenüber kompetitiver Hemmung?",
          nl: "Wat is het primaire voordeel van allosterische regulatie ten opzichte van competitieve inhibitie?"
        },
        options: [
          { en: "Cooperative binding and ultrasensitive response", es: "Unión cooperativa y respuesta ultrasensible", de: "Kooperative Bindung und ultrasensible Antwort", nl: "Coöperatieve binding en ultragevoelige respons" },
          { en: "Linear dose-response relationship", es: "Relación dosis-respuesta lineal", de: "Lineare Dosis-Wirkungs-Beziehung", nl: "Lineaire dosis-respons relatie" },
          { en: "Irreversible inhibition", es: "Inhibición irreversible", de: "Irreversible Hemmung", nl: "Irreversibele inhibitie" },
          { en: "Single binding site interaction", es: "Interacción de sitio de unión único", de: "Einzelbindungsstelleninteraktion", nl: "Enkele bindingsplaats interactie" }
        ],
        correct: 0,
        explanation: {
          en: "Allosteric regulation enables cooperative binding between multiple sites, creating ultrasensitive responses with steep dose-response curves. This allows for more precise control and switch-like behavior compared to hyperbolic competitive inhibition.",
          es: "La regulación alostérica permite unión cooperativa entre múltiples sitios, creando respuestas ultrasensibles con curvas dosis-respuesta empinadas. Esto permite control más preciso y comportamiento tipo interruptor comparado con inhibición competitiva hiperbólica.",
          de: "Allosterische Regulation ermöglicht kooperative Bindung zwischen mehreren Stellen, was ultrasensible Antworten mit steilen Dosis-Wirkungs-Kurven schafft. Dies ermöglicht präzisere Kontrolle und schalterähnliches Verhalten im Vergleich zu hyperbolischer kompetitiver Hemmung.",
          nl: "Allosterische regulatie maakt coöperatieve binding tussen meerdere plaatsen mogelijk, wat ultragevoelige responsen creëert met steile dosis-respons curven. Dit maakt preciezere controle en schakelaar-achtig gedrag mogelijk vergeleken met hyperbolische competitieve inhibitie."
        }
      },
      {
        question: {
          en: "Which principle describes the relationship between network structure and dynamics in biological systems?",
          es: "¿Qué principio describe la relación entre estructura de red y dinámica en sistemas biológicos?",
          de: "Welches Prinzip beschreibt die Beziehung zwischen Netzwerkstruktur und Dynamik in biologischen Systemen?",
          nl: "Welk principe beschrijft de relatie tussen netwerkstructuur en dynamiek in biologische systemen?"
        },
        options: [
          { en: "Structure-function relationship and network motifs", es: "Relación estructura-función y motivos de red", de: "Struktur-Funktions-Beziehung und Netzwerkmotive", nl: "Structuur-functie relatie en netwerkmotieven" },
          { en: "Random network connections", es: "Conexiones de red aleatorias", de: "Zufällige Netzwerkverbindungen", nl: "Willekeurige netwerkverbindingen" },
          { en: "Uniform connectivity patterns", es: "Patrones de conectividad uniformes", de: "Einheitliche Verbindungsmuster", nl: "Uniforme connectiviteitspatronen" },
          { en: "Independence of structure and function", es: "Independencia de estructura y función", de: "Unabhängigkeit von Struktur und Funktion", nl: "Onafhankelijkheid van structuur en functie" }
        ],
        correct: 0,
        explanation: {
          en: "Network structure determines function through recurring circuit patterns called motifs (feedforward loops, feedback loops) that generate specific dynamic behaviors like oscillations, switches, and filters in biological networks.",
          es: "La estructura de red determina función a través de patrones de circuito recurrentes llamados motivos (bucles de avance, bucles de retroalimentación) que generan comportamientos dinámicos específicos como oscilaciones, interruptores y filtros en redes biológicas.",
          de: "Netzwerkstruktur bestimmt Funktion durch wiederkehrende Schaltkreismuster namens Motive (Vorwärtsschleifen, Rückkopplungsschleifen), die spezifische dynamische Verhalten wie Oszillationen, Schalter und Filter in biologischen Netzwerken erzeugen.",
          nl: "Netwerkstructuur bepaalt functie door terugkerende circuitpatronen genaamd motieven (feedforward loops, feedback loops) die specifieke dynamische gedragingen zoals oscillaties, schakelaars en filters genereren in biologische netwerken."
        }
      },
      {
        question: {
          en: "What is the fundamental principle behind metabolic flux analysis?",
          es: "¿Cuál es el principio fundamental detrás del análisis de flujo metabólico?",
          de: "Was ist das grundlegende Prinzip hinter der metabolischen Flussanalyse?",
          nl: "Wat is het fundamentele principe achter metabolische flux analyse?"
        },
        options: [
          { en: "Mass balance and steady-state assumption", es: "Balance de masa y suposición de estado estacionario", de: "Massenbilanz und Steady-State-Annahme", nl: "Massabalans en steady-state aanname" },
          { en: "Enzyme kinetics only", es: "Solo cinética enzimática", de: "Nur Enzymkinetik", nl: "Alleen enzymkinetiek" },
          { en: "Thermodynamic equilibrium", es: "Equilibrio termodinámico", de: "Thermodynamisches Gleichgewicht", nl: "Thermodynamisch evenwicht" },
          { en: "Maximum entropy principle", es: "Principio de máxima entropía", de: "Prinzip der maximalen Entropie", nl: "Maximale entropie principe" }
        ],
        correct: 0,
        explanation: {
          en: "Metabolic flux analysis is based on mass balance constraints at steady state, where the rate of production equals consumption for each metabolite. This creates a system of linear equations that can be solved to determine flux distributions.",
          es: "El análisis de flujo metabólico se basa en restricciones de balance de masa en estado estacionario, donde la tasa de producción iguala el consumo para cada metabolito. Esto crea un sistema de ecuaciones lineales que puede resolverse para determinar distribuciones de flujo.",
          de: "Metabolische Flussanalyse basiert auf Massenbilanzeinschränkungen im stationären Zustand, wo die Produktionsrate dem Verbrauch für jeden Metaboliten entspricht. Dies schafft ein System linearer Gleichungen, das gelöst werden kann, um Flussverteilungen zu bestimmen.",
          nl: "Metabolische flux analyse is gebaseerd op massabalans restricties in steady state, waar de productiesnelheid gelijk is aan het verbruik voor elke metaboliet. Dit creëert een systeem van lineaire vergelijkingen dat kan worden opgelost om flux distributies te bepalen."
        }
      },
      {
        question: {
          en: "Which mechanism allows biological systems to exhibit adaptive behavior without genetic changes?",
          es: "¿Qué mecanismo permite a los sistemas biológicos exhibir comportamiento adaptativo sin cambios genéticos?",
          de: "Welcher Mechanismus ermöglicht es biologischen Systemen, adaptives Verhalten ohne genetische Veränderungen zu zeigen?",
          nl: "Welk mechanisme stelt biologische systemen in staat adaptief gedrag te vertonen zonder genetische veranderingen?"
        },
        options: [
          { en: "Phenotypic plasticity and epigenetic regulation", es: "Plasticidad fenotípica y regulación epigenética", de: "Phänotypische Plastizität und epigenetische Regulation", nl: "Fenotypische plasticiteit en epigenetische regulatie" },
          { en: "DNA mutations only", es: "Solo mutaciones de ADN", de: "Nur DNA-Mutationen", nl: "Alleen DNA-mutaties" },
          { en: "Fixed genetic programs", es: "Programas genéticos fijos", de: "Feste genetische Programme", nl: "Vaste genetische programma's" },
          { en: "Random protein interactions", es: "Interacciones proteicas aleatorias", de: "Zufällige Proteininteraktionen", nl: "Willekeurige eiwitinteracties" }
        ],
        correct: 0,
        explanation: {
          en: "Phenotypic plasticity allows organisms to modify their phenotype in response to environmental conditions through epigenetic mechanisms, alternative splicing, and regulatory network reconfiguration without altering DNA sequence.",
          es: "La plasticidad fenotípica permite a organismos modificar su fenotipo en respuesta a condiciones ambientales a través de mecanismos epigenéticos, empalme alternativo y reconfiguración de redes regulatorias sin alterar la secuencia de ADN.",
          de: "Phänotypische Plastizität ermöglicht es Organismen, ihren Phänotyp als Reaktion auf Umweltbedingungen durch epigenetische Mechanismen, alternatives Spleißen und regulatorische Netzwerkrekonfiguration zu modifizieren, ohne die DNA-Sequenz zu verändern.",
          nl: "Fenotypische plasticiteit stelt organismen in staat hun fenotype te modificeren als reactie op omgevingscondities via epigenetische mechanismen, alternatieve splicing en regulatoire netwerk herconfiguratie zonder DNA-sequentie te veranderen."
        }
      },
      {
        question: {
          en: "What is the key concept in understanding robustness of biological networks?",
          es: "¿Cuál es el concepto clave para entender la robustez de redes biológicas?",
          de: "Was ist das Schlüsselkonzept zum Verständnis der Robustheit biologischer Netzwerke?",
          nl: "Wat is het sleutelconcept voor het begrijpen van robuustheid van biologische netwerken?"
        },
        options: [
          { en: "Functional redundancy and pathway multiplicity", es: "Redundancia funcional y multiplicidad de vías", de: "Funktionale Redundanz und Wegvielfalt", nl: "Functionele redundantie en route multipliciteit" },
          { en: "Single point of failure", es: "Punto único de falla", de: "Einzelner Fehlerpunkt", nl: "Enkel foutpunt" },
          { en: "Linear pathway dependence", es: "Dependencia de vía lineal", de: "Lineare Wegabhängigkeit", nl: "Lineaire route afhankelijkheid" },
          { en: "Maximum efficiency optimization", es: "Optimización de máxima eficiencia", de: "Maximale Effizienzoptimierung", nl: "Maximale efficiëntie optimalisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Robustness in biological networks arises from functional redundancy (multiple components performing similar functions) and pathway multiplicity (multiple routes to achieve the same outcome), ensuring system function despite component failures.",
          es: "La robustez en redes biológicas surge de redundancia funcional (múltiples componentes realizando funciones similares) y multiplicidad de vías (múltiples rutas para lograr el mismo resultado), asegurando función del sistema a pesar de fallas de componentes.",
          de: "Robustheit in biologischen Netzwerken entsteht durch funktionale Redundanz (mehrere Komponenten, die ähnliche Funktionen ausführen) und Wegvielfalt (mehrere Routen zum gleichen Ergebnis), was Systemfunktion trotz Komponentenausfällen gewährleistet.",
          nl: "Robuustheid in biologische netwerken ontstaat door functionele redundantie (meerdere componenten die vergelijkbare functies uitvoeren) en route multipliciteit (meerdere routes om hetzelfde resultaat te bereiken), wat systeemfunctie verzekert ondanks componentfalen."
        }
      },
      {
        question: {
          en: "Which mathematical framework is most appropriate for analyzing gene regulatory networks?",
          es: "¿Qué marco matemático es más apropiado para analizar redes regulatorias de genes?",
          de: "Welcher mathematische Rahmen ist am besten geeignet für die Analyse genregulatorischer Netzwerke?",
          nl: "Welk wiskundig raamwerk is het meest geschikt voor het analyseren van genregulatie netwerken?"
        },
        options: [
          { en: "Boolean networks and ordinary differential equations", es: "Redes booleanas y ecuaciones diferenciales ordinarias", de: "Boolesche Netzwerke und gewöhnliche Differentialgleichungen", nl: "Boolean netwerken en gewone differentiaalvergelijkingen" },
          { en: "Simple linear regression", es: "Regresión lineal simple", de: "Einfache lineare Regression", nl: "Eenvoudige lineaire regressie" },
          { en: "Static network analysis only", es: "Solo análisis de red estática", de: "Nur statische Netzwerkanalyse", nl: "Alleen statische netwerkanalyse" },
          { en: "Frequency domain analysis", es: "Análisis de dominio de frecuencia", de: "Frequenzbereichsanalyse", nl: "Frequentiedomein analyse" }
        ],
        correct: 0,
        explanation: {
          en: "Gene regulatory networks are best analyzed using Boolean networks for discrete on/off gene states and ordinary differential equations for continuous concentration dynamics, capturing both logical relationships and quantitative kinetics.",
          es: "Las redes regulatorias de genes se analizan mejor usando redes booleanas para estados génicos discretos encendido/apagado y ecuaciones diferenciales ordinarias para dinámicas de concentración continuas, capturando tanto relaciones lógicas como cinética cuantitativa.",
          de: "Genregulatorische Netzwerke werden am besten mit Booleschen Netzwerken für diskrete An/Aus-Genzustände und gewöhnlichen Differentialgleichungen für kontinuierliche Konzentrationsdynamik analysiert, was sowohl logische Beziehungen als auch quantitative Kinetik erfasst.",
          nl: "Genregulatie netwerken worden het best geanalyseerd met Boolean netwerken voor discrete aan/uit gentoestanden en gewone differentiaalvergelijkingen voor continue concentratie dynamiek, waarbij zowel logische relaties als kwantitatieve kinetiek worden vastgelegd."
        }
      },
      {
        question: {
          en: "What is the fundamental principle of systems-level drug design?",
          es: "¿Cuál es el principio fundamental del diseño de fármacos a nivel de sistemas?",
          de: "Was ist das grundlegende Prinzip des systemweiten Arzneimitteldesigns?",
          nl: "Wat is het fundamentele principe van systeem-niveau medicijnontwerp?"
        },
        options: [
          { en: "Network-based polypharmacology and pathway targeting", es: "Polifarmacología basada en redes y direccionamiento de vías", de: "Netzwerkbasierte Polypharmakologie und Weg-Targeting", nl: "Netwerk-gebaseerde polyfarmacie en route targeting" },
          { en: "Single target optimization only", es: "Solo optimización de objetivo único", de: "Nur Einzelzieloptimierung", nl: "Alleen enkele doeloptimalisatie" },
          { en: "Maximum potency approach", es: "Enfoque de máxima potencia", de: "Maximaler Potenzansatz", nl: "Maximale potentie benadering" },
          { en: "Random drug screening", es: "Cribado aleatorio de fármacos", de: "Zufälliges Arzneimittel-Screening", nl: "Willekeurige medicijnscreening" }
        ],
        correct: 0,
        explanation: {
          en: "Systems-level drug design considers the entire network of molecular interactions, targeting multiple nodes or pathways simultaneously to achieve therapeutic efficacy while minimizing resistance and side effects.",
          es: "El diseño de fármacos a nivel de sistemas considera toda la red de interacciones moleculares, dirigiéndose a múltiples nodos o vías simultáneamente para lograr eficacia terapéutica mientras minimiza resistencia y efectos secundarios.",
          de: "Systemweites Arzneimitteldesign berücksichtigt das gesamte Netzwerk molekularer Interaktionen und zielt auf mehrere Knoten oder Wege gleichzeitig ab, um therapeutische Wirksamkeit zu erreichen und gleichzeitig Resistenz und Nebenwirkungen zu minimieren.",
          nl: "Systeem-niveau medicijnontwerp overweegt het hele netwerk van moleculaire interacties, waarbij meerdere knooppunten of routes tegelijk worden beoogd om therapeutische werkzaamheid te bereiken terwijl resistentie en bijwerkingen worden geminimaliseerd."
        }
      },
      {
        question: {
          en: "Which concept explains how small changes can lead to large effects in biological systems?",
          es: "¿Qué concepto explica cómo pequeños cambios pueden llevar a grandes efectos en sistemas biológicos?",
          de: "Welches Konzept erklärt, wie kleine Veränderungen zu großen Effekten in biologischen Systemen führen können?",
          nl: "Welk concept verklaart hoe kleine veranderingen tot grote effecten kunnen leiden in biologische systemen?"
        },
        options: [
          { en: "Sensitive dependence on initial conditions and bifurcations", es: "Dependencia sensible de condiciones iniciales y bifurcaciones", de: "Sensible Abhängigkeit von Anfangsbedingungen und Bifurkationen", nl: "Gevoelige afhankelijkheid van beginvoorwaarden en bifurcaties" },
          { en: "Linear proportionality", es: "Proporcionalidad lineal", de: "Lineare Proportionalität", nl: "Lineaire proportionaliteit" },
          { en: "Static system behavior", es: "Comportamiento estático del sistema", de: "Statisches Systemverhalten", nl: "Statisch systeemgedrag" },
          { en: "Independent component action", es: "Acción independiente de componentes", de: "Unabhängige Komponentenaktion", nl: "Onafhankelijke componentactie" }
        ],
        correct: 0,
        explanation: {
          en: "Biological systems can exhibit sensitive dependence on initial conditions (chaos) and undergo bifurcations where small parameter changes lead to qualitatively different system behaviors, enabling dramatic phenotypic switches.",
          es: "Los sistemas biológicos pueden exhibir dependencia sensible de condiciones iniciales (caos) y sufrir bifurcaciones donde pequeños cambios de parámetros llevan a comportamientos del sistema cualitativamente diferentes, permitiendo interruptores fenotípicos dramáticos.",
          de: "Biologische Systeme können sensible Abhängigkeit von Anfangsbedingungen (Chaos) zeigen und Bifurkationen durchlaufen, wo kleine Parameteränderungen zu qualitativ verschiedenen Systemverhalten führen, was dramatische phänotypische Schalter ermöglicht.",
          nl: "Biologische systemen kunnen gevoelige afhankelijkheid van beginvoorwaarden (chaos) vertonen en bifurcaties ondergaan waarbij kleine parameterveranderingen leiden tot kwalitatief verschillend systeemgedrag, wat dramatische fenotypische schakelaars mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is the primary mechanism for achieving temporal coordination in cellular processes?",
          es: "¿Cuál es el mecanismo primario para lograr coordinación temporal en procesos celulares?",
          de: "Was ist der primäre Mechanismus zur Erreichung zeitlicher Koordination in zellulären Prozessen?",
          nl: "Wat is het primaire mechanisme voor het bereiken van temporele coördinatie in cellulaire processen?"
        },
        options: [
          { en: "Coupled oscillators and circadian clocks", es: "Osciladores acoplados y relojes circadianos", de: "Gekoppelte Oszillatoren und zirkadiane Uhren", nl: "Gekoppelde oscillatoren en circadiane klokken" },
          { en: "Random timing mechanisms", es: "Mecanismos de tiempo aleatorios", de: "Zufällige Zeitsteuerungsmechanismen", nl: "Willekeurige timingmechanismen" },
          { en: "Single master timer", es: "Temporizador maestro único", de: "Einzelner Master-Timer", nl: "Enkele master timer" },
          { en: "Independent process timing", es: "Temporización de procesos independientes", de: "Unabhängige Prozesszeitsteuerung", nl: "Onafhankelijke procestiming" }
        ],
        correct: 0,
        explanation: {
          en: "Temporal coordination in cells is achieved through coupled oscillators that synchronize various cellular processes, with circadian clocks providing master timing signals that coordinate metabolism, cell division, and other functions.",
          es: "La coordinación temporal en células se logra a través de osciladores acoplados que sincronizan varios procesos celulares, con relojes circadianos proporcionando señales de tiempo maestras que coordinan metabolismo, división celular y otras funciones.",
          de: "Zeitliche Koordination in Zellen wird durch gekoppelte Oszillatoren erreicht, die verschiedene zelluläre Prozesse synchronisieren, wobei zirkadiane Uhren Master-Zeitsignale bereitstellen, die Stoffwechsel, Zellteilung und andere Funktionen koordinieren.",
          nl: "Temporele coördinatie in cellen wordt bereikt door gekoppelde oscillatoren die verschillende cellulaire processen synchroniseren, waarbij circadiane klokken master timingsignalen leveren die metabolisme, celdeling en andere functies coördineren."
        }
      },
      {
        question: {
          en: "Which principle governs the evolution of biological networks?",
          es: "¿Qué principio gobierna la evolución de redes biológicas?",
          de: "Welches Prinzip regiert die Evolution biologischer Netzwerke?",
          nl: "Welk principe beheerst de evolutie van biologische netwerken?"
        },
        options: [
          { en: "Preferential attachment and duplication-divergence", es: "Unión preferencial y duplicación-divergencia", de: "Bevorzugte Anheftung und Duplikation-Divergenz", nl: "Preferentiële hechting en duplicatie-divergentie" },
          { en: "Random network growth", es: "Crecimiento de red aleatorio", de: "Zufälliges Netzwerkwachstum", nl: "Willekeurige netwerkgroei" },
          { en: "Uniform node addition", es: "Adición uniforme de nodos", de: "Einheitliche Knotenerweiterung", nl: "Uniforme knooppunttoevoeging" },
          { en: "Complete network rewiring", es: "Recableado completo de red", de: "Vollständige Netzwerkneuverdrahtung", nl: "Complete netwerkherbedrading" }
        ],
        correct: 0,
        explanation: {
          en: "Biological networks evolve through preferential attachment (new nodes preferentially connect to highly connected hubs) and duplication-divergence (gene/protein duplication followed by functional divergence), creating scale-free architectures.",
          es: "Las redes biológicas evolucionan a través de unión preferencial (nodos nuevos se conectan preferencialmente a hubs altamente conectados) y duplicación-divergencia (duplicación de genes/proteínas seguida de divergencia funcional), creando arquitecturas libres de escala.",
          de: "Biologische Netzwerke entwickeln sich durch bevorzugte Anheftung (neue Knoten verbinden sich bevorzugt mit hochverknüpften Hubs) und Duplikation-Divergenz (Gen-/Proteinduplikation gefolgt von funktionaler Divergenz), was skalenfreie Architekturen schafft.",
          nl: "Biologische netwerken evolueren via preferentiële hechting (nieuwe knooppunten verbinden bij voorkeur met sterk verbonden hubs) en duplicatie-divergentie (gen/eiwit duplicatie gevolgd door functionele divergentie), wat schaalvrije architecturen creëert."
        }
      },
      {
        question: {
          en: "What is the key advantage of distributed control in metabolic networks?",
          es: "¿Cuál es la ventaja clave del control distribuido en redes metabólicas?",
          de: "Was ist der Schlüsselvorteil verteilter Kontrolle in metabolischen Netzwerken?",
          nl: "Wat is het belangrijkste voordeel van gedistribueerde controle in metabolische netwerken?"
        },
        options: [
          { en: "Increased robustness and reduced metabolic burden", es: "Mayor robustez y reducción de carga metabólica", de: "Erhöhte Robustheit und reduzierte metabolische Belastung", nl: "Verhoogde robuustheid en verminderde metabolische last" },
          { en: "Single point control efficiency", es: "Eficiencia de control de punto único", de: "Einzelpunktkontrolleffizienz", nl: "Enkele punt controle efficiëntie" },
          { en: "Maximum metabolite concentrations", es: "Concentraciones máximas de metabolitos", de: "Maximale Metabolitkonzentrationen", nl: "Maximale metaboliet concentraties" },
          { en: "Simplified regulatory mechanisms", es: "Mecanismos regulatorios simplificados", de: "Vereinfachte Regulationsmechanismen", nl: "Vereenvoudigde regulatiemechanismen" }
        ],
        correct: 0,
        explanation: {
          en: "Distributed control spreads regulatory responsibility across multiple enzymes, preventing single points of failure while reducing the metabolic cost of producing high concentrations of single regulatory enzymes.",
          es: "El control distribuido distribuye responsabilidad regulatoria a través de múltiples enzimas, previniendo puntos únicos de falla mientras reduce el costo metabólico de producir altas concentraciones de enzimas regulatorias únicas.",
          de: "Verteilte Kontrolle verteilt regulatorische Verantwortung über mehrere Enzyme, verhindert einzelne Fehlerpunkte und reduziert gleichzeitig die metabolischen Kosten der Produktion hoher Konzentrationen einzelner regulatorischer Enzyme.",
          nl: "Gedistribueerde controle verspreidt regulatoire verantwoordelijkheid over meerdere enzymen, wat enkele foutpunten voorkomt terwijl het de metabolische kosten vermindert van het produceren van hoge concentraties van enkele regulatoire enzymen."
        }
      },
      {
        question: {
          en: "Which mathematical concept is essential for understanding biological pattern formation?",
          es: "¿Qué concepto matemático es esencial para entender la formación de patrones biológicos?",
          de: "Welches mathematische Konzept ist für das Verständnis biologischer Musterbildung wesentlich?",
          nl: "Welk wiskundig concept is essentieel voor het begrijpen van biologische patroonvorming?"
        },
        options: [
          { en: "Reaction-diffusion systems and Turing instabilities", es: "Sistemas de reacción-difusión e inestabilidades de Turing", de: "Reaktions-Diffusions-Systeme und Turing-Instabilitäten", nl: "Reactie-diffusie systemen en Turing instabiliteiten" },
          { en: "Static concentration gradients", es: "Gradientes de concentración estáticos", de: "Statische Konzentrationsgradienten", nl: "Statische concentratie gradiënten" },
          { en: "Uniform distribution models", es: "Modelos de distribución uniforme", de: "Einheitliche Verteilungsmodelle", nl: "Uniforme verdelingsmodellen" },
          { en: "Linear diffusion only", es: "Solo difusión lineal", de: "Nur lineare Diffusion", nl: "Alleen lineaire diffusie" }
        ],
        correct: 0,
        explanation: {
          en: "Pattern formation in biology emerges from reaction-diffusion systems where Turing instabilities create spatial patterns from initially uniform conditions through the interplay of activating and inhibiting morphogens with different diffusion rates.",
          es: "La formación de patrones en biología emerge de sistemas de reacción-difusión donde inestabilidades de Turing crean patrones espaciales de condiciones inicialmente uniformes a través de la interacción de morfógenos activadores e inhibidores con diferentes tasas de difusión.",
          de: "Musterbildung in der Biologie entsteht aus Reaktions-Diffusions-Systemen, wo Turing-Instabilitäten räumliche Muster aus ursprünglich uniformen Bedingungen durch das Zusammenspiel aktivierender und hemmender Morphogene mit verschiedenen Diffusionsraten erzeugen.",
          nl: "Patroonvorming in biologie ontstaat uit reactie-diffusie systemen waarbij Turing instabiliteiten ruimtelijke patronen creëren uit aanvankelijk uniforme condities door het samenspel van activerende en remmende morfogenen met verschillende diffusiesnelheden."
        }
      },
      {
        question: {
          en: "What is the primary mechanism for noise reduction in biological signaling?",
          es: "¿Cuál es el mecanismo primario para reducción de ruido en señalización biológica?",
          de: "Was ist der primäre Mechanismus zur Rauschreduktion in biologischer Signalübertragung?",
          nl: "Wat is het primaire mechanisme voor ruisreductie in biologische signalering?"
        },
        options: [
          { en: "Signal averaging and cooperative binding", es: "Promedio de señales y unión cooperativa", de: "Signalmittelwertbildung und kooperative Bindung", nl: "Signaal middeling en coöperatieve binding" },
          { en: "Signal amplification only", es: "Solo amplificación de señal", de: "Nur Signalverstärkung", nl: "Alleen signaalpversterking" },
          { en: "Random signal fluctuations", es: "Fluctuaciones de señal aleatorias", de: "Zufällige Signalschwankungen", nl: "Willekeurige signaalfluctuaties" },
          { en: "Single molecule detection", es: "Detección de molécula única", de: "Einzelmoleküldetektion", nl: "Enkele molecuul detectie" }
        ],
        correct: 0,
        explanation: {
          en: "Noise reduction in biological systems is achieved through signal averaging across multiple molecules/measurements and cooperative binding that creates nonlinear responses, filtering out random fluctuations while preserving signal information.",
          es: "La reducción de ruido en sistemas biológicos se logra a través de promedio de señales a través de múltiples moléculas/mediciones y unión cooperativa que crea respuestas no lineales, filtrando fluctuaciones aleatorias mientras preserva información de señal.",
          de: "Rauschreduktion in biologischen Systemen wird durch Signalmittelwertbildung über mehrere Moleküle/Messungen und kooperative Bindung erreicht, die nichtlineare Antworten erzeugt, zufällige Schwankungen filtert und dabei Signalinformation bewahrt.",
          nl: "Ruisreductie in biologische systemen wordt bereikt door signaal middeling over meerdere moleculen/metingen en coöperatieve binding die niet-lineaire responsen creëert, willekeurige fluctuaties filtert terwijl signaalinformatie behouden blijft."
        }
      },
      {
        question: {
          en: "Which principle explains the trade-offs in biological system design?",
          es: "¿Qué principio explica las compensaciones en el diseño de sistemas biológicos?",
          de: "Welches Prinzip erklärt die Kompromisse im biologischen Systemdesign?",
          nl: "Welk principe verklaart de afwegingen in biologisch systeemontwerp?"
        },
        options: [
          { en: "Pareto optimality and evolutionary constraints", es: "Optimalidad de Pareto y restricciones evolutivas", de: "Pareto-Optimalität und evolutionäre Beschränkungen", nl: "Pareto optimaliteit en evolutionaire beperkingen" },
          { en: "Single objective optimization", es: "Optimización de objetivo único", de: "Einzelzieloptimierung", nl: "Enkele doeloptimalisatie" },
          { en: "Perfect system efficiency", es: "Eficiencia perfecta del sistema", de: "Perfekte Systemeffizienz", nl: "Perfecte systeemefficiëntie" },
          { en: "Unlimited resource availability", es: "Disponibilidad ilimitada de recursos", de: "Unbegrenzte Ressourcenverfügbarkeit", nl: "Onbeperkte hulpbronbeschikbaarheid" }
        ],
        correct: 0,
        explanation: {
          en: "Biological systems exhibit Pareto optimal designs where improving one performance metric requires sacrificing another, shaped by evolutionary constraints such as limited resources, competing objectives, and historical contingency.",
          es: "Los sistemas biológicos exhiben diseños óptimos de Pareto donde mejorar una métrica de rendimiento requiere sacrificar otra, moldeados por restricciones evolutivas como recursos limitados, objetivos competidores y contingencia histórica.",
          de: "Biologische Systeme zeigen Pareto-optimale Designs, wo die Verbesserung einer Leistungsmetrik das Opfern einer anderen erfordert, geformt durch evolutionäre Beschränkungen wie begrenzte Ressourcen, konkurrierende Ziele und historische Kontingenz.",
          nl: "Biologische systemen vertonen Pareto optimale ontwerpen waarbij het verbeteren van één prestatiemetriek het opofferen van een andere vereist, gevormd door evolutionaire beperkingen zoals beperkte hulpbronnen, concurrerende doelstellingen en historische contingentie."
        }
      },
      {
        question: {
          en: "What is the fundamental principle underlying biological information processing?",
          es: "¿Cuál es el principio fundamental que subyace al procesamiento de información biológica?",
          de: "Was ist das grundlegende Prinzip der biologischen Informationsverarbeitung?",
          nl: "Wat is het fundamentele principe onderliggend aan biologische informatieverwerking?"
        },
        options: [
          { en: "Mutual information maximization and efficient coding", es: "Maximización de información mutua y codificación eficiente", de: "Maximierung der gegenseitigen Information und effiziente Kodierung", nl: "Wederzijdse informatie maximalisatie en efficiënte codering" },
          { en: "Random information transmission", es: "Transmisión de información aleatoria", de: "Zufällige Informationsübertragung", nl: "Willekeurige informatieoverdracht" },
          { en: "Linear information encoding", es: "Codificación de información lineal", de: "Lineare Informationskodierung", nl: "Lineaire informatie codering" },
          { en: "Single channel communication", es: "Comunicación de canal único", de: "Einkanalkommunikation", nl: "Enkele kanaal communicatie" }
        ],
        correct: 0,
        explanation: {
          en: "Biological information processing systems maximize mutual information between input and output while using efficient coding schemes that minimize metabolic costs, optimizing the information-to-energy ratio for survival advantage.",
          es: "Los sistemas de procesamiento de información biológica maximizan información mutua entre entrada y salida mientras usan esquemas de codificación eficientes que minimizan costos metabólicos, optimizando la relación información-energía para ventaja de supervivencia.",
          de: "Biologische Informationsverarbeitungssysteme maximieren gegenseitige Information zwischen Eingabe und Ausgabe, während sie effiziente Kodierungsschemata verwenden, die metabolische Kosten minimieren, das Information-zu-Energie-Verhältnis für Überlebensvorteil optimieren.",
          nl: "Biologische informatieverwerking systemen maximaliseren wederzijdse informatie tussen input en output terwijl ze efficiënte coderingschema's gebruiken die metabolische kosten minimaliseren, het informatie-naar-energie verhouden optimaliseren voor overlevingsvoordeel."
        }
      },
      {
        question: {
          en: "Which concept describes the hierarchical organization of biological complexity?",
          es: "¿Qué concepto describe la organización jerárquica de la complejidad biológica?",
          de: "Welches Konzept beschreibt die hierarchische Organisation biologischer Komplexität?",
          nl: "Welk concept beschrijft de hiërarchische organisatie van biologische complexiteit?"
        },
        options: [
          { en: "Multi-scale modeling and level-specific properties", es: "Modelado multi-escala y propiedades específicas de nivel", de: "Multi-Skalen-Modellierung und ebenenspezifische Eigenschaften", nl: "Multi-schaal modellering en niveau-specifieke eigenschappen" },
          { en: "Single scale analysis", es: "Análisis de escala única", de: "Einskalenanalyse", nl: "Enkele schaal analyse" },
          { en: "Bottom-up reduction only", es: "Solo reducción de abajo hacia arriba", de: "Nur Bottom-up-Reduktion", nl: "Alleen bottom-up reductie" },
          { en: "Top-down control only", es: "Solo control de arriba hacia abajo", de: "Nur Top-down-Kontrolle", nl: "Alleen top-down controle" }
        ],
        correct: 0,
        explanation: {
          en: "Biological complexity spans multiple organizational levels (molecular, cellular, tissue, organism) with each level having emergent properties. Multi-scale modeling integrates these levels while recognizing level-specific behaviors and cross-scale interactions.",
          es: "La complejidad biológica abarca múltiples niveles organizacionales (molecular, celular, tisular, organismo) con cada nivel teniendo propiedades emergentes. El modelado multi-escala integra estos niveles mientras reconoce comportamientos específicos de nivel e interacciones entre escalas.",
          de: "Biologische Komplexität umfasst mehrere Organisationsebenen (molekular, zellulär, Gewebe, Organismus), wobei jede Ebene emergente Eigenschaften hat. Multi-Skalen-Modellierung integriert diese Ebenen und erkennt ebenenspezifische Verhaltensweisen und ebenenübergreifende Interaktionen.",
          nl: "Biologische complexiteit omspant meerdere organisatieniveaus (moleculair, cellulair, weefsel, organisme) waarbij elk niveau emergente eigenschappen heeft. Multi-schaal modellering integreert deze niveaus terwijl niveau-specifiek gedrag en cross-schaal interacties worden erkend."
        }
      },
      {
        question: {
          en: "What is the key mechanism for achieving specificity in biological recognition processes?",
          es: "¿Cuál es el mecanismo clave para lograr especificidad en procesos de reconocimiento biológicos?",
          de: "Was ist der Schlüsselmechanismus zur Erreichung von Spezifität in biologischen Erkennungsprozessen?",
          nl: "Wat is het sleutelmechanisme voor het bereiken van specificiteit in biologische herkenningsprocessen?"
        },
        options: [
          { en: "Shape complementarity and induced fit", es: "Complementariedad de forma y ajuste inducido", de: "Formkomplementarität und induzierte Anpassung", nl: "Vorm complementariteit en geïnduceerde passing" },
          { en: "Random binding events", es: "Eventos de unión aleatorios", de: "Zufällige Bindungsereignisse", nl: "Willekeurige bindingsgebeurtenissen" },
          { en: "Size exclusion only", es: "Solo exclusión por tamaño", de: "Nur Größenausschluss", nl: "Alleen grootte uitsluiting" },
          { en: "Electrostatic repulsion", es: "Repulsión electrostática", de: "Elektrostatische Abstoßung", nl: "Elektrostatische afstoting" }
        ],
        correct: 0,
        explanation: {
          en: "Biological recognition achieves specificity through shape complementarity (lock-and-key) and induced fit mechanisms, where binding partners undergo conformational changes that optimize interactions and exclude non-specific binding.",
          es: "El reconocimiento biológico logra especificidad a través de complementariedad de forma (llave-cerradura) y mecanismos de ajuste inducido, donde los socios de unión sufren cambios conformacionales que optimizan interacciones y excluyen unión no específica.",
          de: "Biologische Erkennung erreicht Spezifität durch Formkomplementarität (Schlüssel-Schloss) und induzierte Anpassungsmechanismen, wo Bindungspartner Konformationsänderungen durchlaufen, die Interaktionen optimieren und unspezifische Bindung ausschließen.",
          nl: "Biologische herkenning bereikt specificiteit door vorm complementariteit (sleutel-slot) en geïnduceerde passingmechanismen, waarbij bindingspartners conformationele veranderingen ondergaan die interacties optimaliseren en niet-specifieke binding uitsluiten."
        }
      },
      {
        question: {
          en: "Which principle governs the relationship between network connectivity and system stability?",
          es: "¿Qué principio gobierna la relación entre conectividad de red y estabilidad del sistema?",
          de: "Welches Prinzip regiert die Beziehung zwischen Netzwerkkonnektivität und Systemstabilität?",
          nl: "Welk principe beheerst de relatie tussen netwerkconnectiviteit en systeemstabiliteit?"
        },
        options: [
          { en: "Complexity-stability paradox and network resilience", es: "Paradoja complejidad-estabilidad y resistencia de red", de: "Komplexitäts-Stabilitäts-Paradox und Netzwerkresilienz", nl: "Complexiteit-stabiliteit paradox en netwerk veerkracht" },
          { en: "More connections always increase stability", es: "Más conexiones siempre aumentan estabilidad", de: "Mehr Verbindungen erhöhen immer die Stabilität", nl: "Meer verbindingen verhogen altijd stabiliteit" },
          { en: "Connectivity has no effect on stability", es: "La conectividad no tiene efecto en estabilidad", de: "Konnektivität hat keinen Effekt auf Stabilität", nl: "Connectiviteit heeft geen effect op stabiliteit" },
          { en: "Random connectivity patterns", es: "Patrones de conectividad aleatorios", de: "Zufällige Konnektivitätsmuster", nl: "Willekeurige connectiviteitspatronen" }
        ],
        correct: 0,
        explanation: {
          en: "The complexity-stability paradox shows that while increased connectivity can destabilize random networks, biological networks achieve stability through specific topological features like modularity and hierarchical organization that enhance resilience.",
          es: "La paradoja complejidad-estabilidad muestra que mientras el aumento de conectividad puede desestabilizar redes aleatorias, las redes biológicas logran estabilidad a través de características topológicas específicas como modularidad y organización jerárquica que mejoran resistencia.",
          de: "Das Komplexitäts-Stabilitäts-Paradox zeigt, dass erhöhte Konnektivität zufällige Netzwerke destabilisieren kann, biologische Netzwerke aber Stabilität durch spezifische topologische Merkmale wie Modularität und hierarchische Organisation erreichen, die Resilienz verstärken.",
          nl: "Het complexiteit-stabiliteit paradox toont aan dat hoewel verhoogde connectiviteit willekeurige netwerken kan destabiliseren, biologische netwerken stabiliteit bereiken door specifieke topologische kenmerken zoals modulariteit en hiërarchische organisatie die veerkracht versterken."
        }
      },
      {
        question: {
          en: "What is the fundamental mechanism for biological adaptation to environmental changes?",
          es: "¿Cuál es el mecanismo fundamental para adaptación biológica a cambios ambientales?",
          de: "Was ist der grundlegende Mechanismus für biologische Anpassung an Umweltveränderungen?",
          nl: "Wat is het fundamentele mechanisme voor biologische aanpassing aan omgevingsveranderingen?"
        },
        options: [
          { en: "Adaptive feedback control and sensor-actuator loops", es: "Control de retroalimentación adaptativa y bucles sensor-actuador", de: "Adaptive Rückkopplungskontrolle und Sensor-Aktuator-Schleifen", nl: "Adaptieve feedback controle en sensor-actuator lussen" },
          { en: "Fixed response programs", es: "Programas de respuesta fijos", de: "Feste Antwortprogramme", nl: "Vaste responsprogramma's" },
          { en: "Random behavioral changes", es: "Cambios conductuales aleatorios", de: "Zufällige Verhaltensänderungen", nl: "Willekeurige gedragsveranderingen" },
          { en: "Passive environmental tolerance", es: "Tolerancia ambiental pasiva", de: "Passive Umwelttoleranz", nl: "Passieve omgevingstolerantie" }
        ],
        correct: 0,
        explanation: {
          en: "Biological adaptation relies on adaptive feedback control systems with environmental sensors detecting changes and actuators implementing appropriate responses, creating closed-loop systems that maintain homeostasis and optimize performance.",
          es: "La adaptación biológica depende de sistemas de control de retroalimentación adaptativa con sensores ambientales detectando cambios y actuadores implementando respuestas apropiadas, creando sistemas de bucle cerrado que mantienen homeostasis y optimizan rendimiento.",
          de: "Biologische Anpassung beruht auf adaptiven Rückkopplungskontrollsystemen mit Umweltsensoren, die Veränderungen erkennen, und Aktuatoren, die angemessene Antworten implementieren, wodurch geschlossene Schleifen entstehen, die Homöostase aufrechterhalten und Leistung optimieren.",
          nl: "Biologische aanpassing is afhankelijk van adaptieve feedback controlesystemen met omgevingssensoren die veranderingen detecteren en actuatoren die gepaste responsen implementeren, waarbij gesloten-lus systemen ontstaan die homeostase behouden en prestatie optimaliseren."
        }
      },
      {
        question: {
          en: "What determines the directionality of molecular transport in biological systems?",
          es: "¿Qué determina la direccionalidad del transporte molecular en sistemas biológicos?",
          de: "Was bestimmt die Richtung des molekularen Transports in biologischen Systemen?",
          nl: "Wat bepaalt de richting van moleculair transport in biologische systemen?"
        },
        options: [
          { en: "Electrochemical gradients and energy coupling", es: "Gradientes electroquímicos y acoplamiento energético", de: "Elektrochemische Gradienten und Energiekopplung", nl: "Elektrochemische gradiënten en energiekoppeling" },
          { en: "Random diffusion only", es: "Solo difusión aleatoria", de: "Nur zufällige Diffusion", nl: "Alleen willekeurige diffusie" },
          { en: "Molecular size exclusion", es: "Exclusión por tamaño molecular", de: "Molekularer Größenausschluss", nl: "Moleculaire grootte uitsluiting" },
          { en: "Temperature gradients", es: "Gradientes de temperatura", de: "Temperaturgradienten", nl: "Temperatuurgradiënten" }
        ],
        correct: 0,
        explanation: {
          en: "Molecular transport directionality is governed by electrochemical gradients (concentration and electrical potential differences) and energy coupling mechanisms that can drive transport against gradients using ATP or other energy sources.",
          es: "La direccionalidad del transporte molecular se rige por gradientes electroquímicos (diferencias de concentración y potencial eléctrico) y mecanismos de acoplamiento energético que pueden impulsar transporte contra gradientes usando ATP u otras fuentes de energía.",
          de: "Die Richtung des molekularen Transports wird durch elektrochemische Gradienten (Konzentrations- und elektrische Potentialunterschiede) und Energiekopplungsmechanismen bestimmt, die Transport gegen Gradienten mit ATP oder anderen Energiequellen antreiben können.",
          nl: "Moleculaire transport richting wordt beheerst door elektrochemische gradiënten (concentratie en elektrische potentiaalverschillen) en energiekoppelingmechanismen die transport tegen gradiënten kunnen aandrijven met ATP of andere energiebronnen."
        }
      },
      {
        question: {
          en: "How do biological systems achieve temporal coordination across multiple scales?",
          es: "¿Cómo logran los sistemas biológicos coordinación temporal a través de múltiples escalas?",
          de: "Wie erreichen biologische Systeme zeitliche Koordination über mehrere Skalen hinweg?",
          nl: "Hoe bereiken biologische systemen temporele coördinatie over meerdere schalen?"
        },
        options: [
          { en: "Hierarchical oscillators and phase synchronization", es: "Osciladores jerárquicos y sincronización de fase", de: "Hierarchische Oszillatoren und Phasensynchronisation", nl: "Hiërarchische oscillators en fasesynchronisatie" },
          { en: "Independent timing mechanisms", es: "Mecanismos de tiempo independientes", de: "Unabhängige Zeitmechanismen", nl: "Onafhankelijke timingmechanismen" },
          { en: "External environmental cues only", es: "Solo señales ambientales externas", de: "Nur externe Umweltsignale", nl: "Alleen externe omgevingssignalen" },
          { en: "Random temporal patterns", es: "Patrones temporales aleatorios", de: "Zufällige zeitliche Muster", nl: "Willekeurige temporele patronen" }
        ],
        correct: 0,
        explanation: {
          en: "Biological systems use hierarchical networks of coupled oscillators that can synchronize phases across different temporal scales, from millisecond neural firing to circadian rhythms, enabling coordinated multi-scale timing.",
          es: "Los sistemas biológicos usan redes jerárquicas de osciladores acoplados que pueden sincronizar fases a través de diferentes escalas temporales, desde disparos neuronales de milisegundos hasta ritmos circadianos, permitiendo tiempo multi-escala coordinado.",
          de: "Biologische Systeme verwenden hierarchische Netzwerke gekoppelter Oszillatoren, die Phasen über verschiedene zeitliche Skalen synchronisieren können, von Millisekunden-Neuronenfeuern bis zu circadianen Rhythmen, wodurch koordiniertes Multi-Skalen-Timing ermöglicht wird.",
          nl: "Biologische systemen gebruiken hiërarchische netwerken van gekoppelde oscillators die fasen kunnen synchroniseren over verschillende temporele schalen, van milliseconde neurale vuring tot circadiane ritmes, waardoor gecoördineerde multi-schaal timing mogelijk wordt."
        }
      },
      {
        question: {
          en: "What principle governs information processing efficiency in neural networks?",
          es: "¿Qué principio gobierna la eficiencia de procesamiento de información en redes neuronales?",
          de: "Welches Prinzip regiert die Informationsverarbeitungseffizienz in neuronalen Netzwerken?",
          nl: "Welk principe beheerst informatieverwerking efficiëntie in neurale netwerken?"
        },
        options: [
          { en: "Sparse coding and metabolic constraints", es: "Codificación dispersa y restricciones metabólicas", de: "Spärliche Kodierung und metabolische Einschränkungen", nl: "Spaarzame codering en metabole beperkingen" },
          { en: "Maximum connectivity density", es: "Densidad máxima de conectividad", de: "Maximale Konnektivitätsdichte", nl: "Maximale connectiviteitsdichtheid" },
          { en: "Uniform activation patterns", es: "Patrones de activación uniformes", de: "Einheitliche Aktivierungsmuster", nl: "Uniforme activatiepatronen" },
          { en: "Random signal propagation", es: "Propagación de señal aleatoria", de: "Zufällige Signalausbreitung", nl: "Willekeurige signaalvoortplanting" }
        ],
        correct: 0,
        explanation: {
          en: "Neural networks optimize information processing through sparse coding, where only a small fraction of neurons are active for any given input, minimizing metabolic costs while maximizing information capacity and reducing interference.",
          es: "Las redes neuronales optimizan procesamiento de información a través de codificación dispersa, donde solo una pequeña fracción de neuronas está activa para cualquier entrada dada, minimizando costos metabólicos mientras maximiza capacidad de información y reduce interferencia.",
          de: "Neuronale Netzwerke optimieren Informationsverarbeitung durch spärliche Kodierung, wo nur ein kleiner Bruchteil der Neuronen für jede gegebene Eingabe aktiv ist, wodurch metabolische Kosten minimiert und Informationskapazität maximiert und Interferenz reduziert wird.",
          nl: "Neurale netwerken optimaliseren informatieverwerking door spaarzame codering, waarbij slechts een kleine fractie van neuronen actief is voor elke gegeven invoer, metabole kosten minimizerend terwijl informatiecapaciteit wordt gemaximaliseerd en interferentie wordt verminderd."
        }
      },
      {
        question: {
          en: "How do biological systems balance exploration and exploitation in adaptive behavior?",
          es: "¿Cómo equilibran los sistemas biológicos exploración y explotación en comportamiento adaptativo?",
          de: "Wie balancieren biologische Systeme Exploration und Exploitation in adaptivem Verhalten?",
          nl: "Hoe balanceren biologische systemen exploratie en exploitatie in adaptief gedrag?"
        },
        options: [
          { en: "Dynamic trade-off mechanisms and uncertainty estimation", es: "Mecanismos dinámicos de compromiso y estimación de incertidumbre", de: "Dynamische Kompromissmechanismen und Unsicherheitsschätzung", nl: "Dynamische afwegingsmechanismen en onzekerheidschatting" },
          { en: "Fixed exploration rates", es: "Tasas de exploración fijas", de: "Feste Explorationsraten", nl: "Vaste exploratiesnelheden" },
          { en: "Pure exploitation strategy", es: "Estrategia de pura explotación", de: "Reine Exploitationsstrategie", nl: "Zuivere exploitatiestrategie" },
          { en: "Random behavioral switching", es: "Cambio conductual aleatorio", de: "Zufälliger Verhaltenswechsel", nl: "Willekeurige gedragswisseling" }
        ],
        correct: 0,
        explanation: {
          en: "Biological systems use dynamic trade-off mechanisms that adjust exploration levels based on environmental uncertainty, resource availability, and learning progress, optimizing the balance between exploiting known opportunities and exploring new ones.",
          es: "Los sistemas biológicos usan mecanismos dinámicos de compromiso que ajustan niveles de exploración basados en incertidumbre ambiental, disponibilidad de recursos y progreso de aprendizaje, optimizando el equilibrio entre explotar oportunidades conocidas y explorar nuevas.",
          de: "Biologische Systeme verwenden dynamische Kompromissmechanismen, die Explorationsniveaus basierend auf Umweltunsicherheit, Ressourcenverfügbarkeit und Lernfortschritt anpassen und die Balance zwischen der Nutzung bekannter Möglichkeiten und der Exploration neuer optimieren.",
          nl: "Biologische systemen gebruiken dynamische afwegingsmechanismen die exploratieniveaus aanpassen gebaseerd op omgevingsonzekerheid, beschikbaarheid van middelen en leervoortgang, waarbij de balans tussen het exploiteren van bekende kansen en het exploreren van nieuwe wordt geoptimaliseerd."
        }
      },
      {
        question: {
          en: "What mechanism enables rapid cellular responses to environmental stimuli?",
          es: "¿Qué mecanismo permite respuestas celulares rápidas a estímulos ambientales?",
          de: "Welcher Mechanismus ermöglicht schnelle zelluläre Antworten auf Umweltstimuli?",
          nl: "Welk mechanisme maakt snelle cellulaire responsen op omgevingsstimuli mogelijk?"
        },
        options: [
          { en: "Signal amplification cascades and allosteric regulation", es: "Cascadas de amplificación de señal y regulación alostérica", de: "Signalverstärkungskaskaden und allosterische Regulation", nl: "Signalamplificatie cascades en allosterische regulatie" },
          { en: "Slow transcriptional changes only", es: "Solo cambios transcripcionales lentos", de: "Nur langsame transkriptionelle Änderungen", nl: "Alleen langzame transcriptionele veranderingen" },
          { en: "Passive diffusion processes", es: "Procesos de difusión pasiva", de: "Passive Diffusionsprozesse", nl: "Passieve diffusieprocessen" },
          { en: "Random molecular interactions", es: "Interacciones moleculares aleatorias", de: "Zufällige molekulare Interaktionen", nl: "Willekeurige moleculaire interacties" }
        ],
        correct: 0,
        explanation: {
          en: "Rapid cellular responses rely on signal amplification cascades where small stimuli trigger large downstream effects, combined with allosteric regulation that enables immediate conformational changes in key regulatory proteins without requiring new protein synthesis.",
          es: "Las respuestas celulares rápidas dependen de cascadas de amplificación de señal donde pequeños estímulos desencadenan grandes efectos aguas abajo, combinado con regulación alostérica que permite cambios conformacionales inmediatos en proteínas reguladoras clave sin requerir nueva síntesis proteica.",
          de: "Schnelle zelluläre Antworten beruhen auf Signalverstärkungskaskaden, wo kleine Stimuli große nachgelagerte Effekte auslösen, kombiniert mit allosterischer Regulation, die sofortige Konformationsänderungen in wichtigen regulatorischen Proteinen ermöglicht, ohne neue Proteinsynthese zu erfordern.",
          nl: "Snelle cellulaire responsen vertrouwen op signalamplificatie cascades waarbij kleine stimuli grote stroomafwaartse effecten veroorzaken, gecombineerd met allosterische regulatie die directe conformationele veranderingen in belangrijke regulatoire eiwitten mogelijk maakt zonder nieuwe eiwitsynhese te vereisen."
        }
      },
      {
        question: {
          en: "How do biological systems maintain functional integrity under perturbations?",
          es: "¿Cómo mantienen los sistemas biológicos integridad funcional bajo perturbaciones?",
          de: "Wie erhalten biologische Systeme funktionale Integrität unter Störungen aufrecht?",
          nl: "Hoe behouden biologische systemen functionele integriteit onder verstoringen?"
        },
        options: [
          { en: "Robustness mechanisms and redundancy", es: "Mecanismos de robustez y redundancia", de: "Robustheitsmechanismen und Redundanz", nl: "Robuustheidsmechanismen en redundantie" },
          { en: "Rigid structural constraints", es: "Restricciones estructurales rígidas", de: "Starre strukturelle Einschränkungen", nl: "Rigide structurele beperkingen" },
          { en: "Complete isolation from environment", es: "Aislamiento completo del ambiente", de: "Vollständige Isolation von der Umwelt", nl: "Volledige isolatie van de omgeving" },
          { en: "Single-point-of-failure systems", es: "Sistemas de falla de punto único", de: "Einzelfehlerpunkt-Systeme", nl: "Enkele-foutpunt systemen" }
        ],
        correct: 0,
        explanation: {
          en: "Biological systems maintain integrity through robustness mechanisms including functional redundancy, distributed control, error correction, and adaptive responses that allow systems to continue functioning despite component failures or environmental changes.",
          es: "Los sistemas biológicos mantienen integridad a través de mecanismos de robustez incluyendo redundancia funcional, control distribuido, corrección de errores y respuestas adaptativas que permiten a los sistemas continuar funcionando a pesar de fallas de componentes o cambios ambientales.",
          de: "Biologische Systeme erhalten Integrität durch Robustheitsmechanismen einschließlich funktionaler Redundanz, verteilter Kontrolle, Fehlerkorrektur und adaptiver Antworten, die es Systemen ermöglichen, trotz Komponentenausfällen oder Umweltveränderungen weiter zu funktionieren.",
          nl: "Biologische systemen behouden integriteit door robuustheidsmechanismen inclusief functionele redundantie, gedistribueerde controle, foutcorrectie en adaptieve responsen die systemen toestaan te blijven functioneren ondanks componentfalen of omgevingsveranderingen."
        }
      },
      {
        question: {
          en: "What determines the evolution of complexity in biological systems?",
          es: "¿Qué determina la evolución de complejidad en sistemas biológicos?",
          de: "Was bestimmt die Evolution der Komplexität in biologischen Systemen?",
          nl: "Wat bepaalt de evolutie van complexiteit in biologische systemen?"
        },
        options: [
          { en: "Selection pressure and evolutionary trade-offs", es: "Presión selectiva y compromisos evolutivos", de: "Selektionsdruck und evolutionäre Kompromisse", nl: "Selectiedruk en evolutionaire afwegingen" },
          { en: "Random accumulation of components", es: "Acumulación aleatoria de componentes", de: "Zufällige Ansammlung von Komponenten", nl: "Willekeurige accumulatie van componenten" },
          { en: "Complexity always increases", es: "La complejidad siempre aumenta", de: "Komplexität nimmt immer zu", nl: "Complexiteit neemt altijd toe" },
          { en: "Environmental size limitations", es: "Limitaciones de tamaño ambiental", de: "Umweltgrößenbeschränkungen", nl: "Omgevingsgrootte beperkingen" }
        ],
        correct: 0,
        explanation: {
          en: "Complexity evolution is driven by selection pressures favoring adaptive advantages, balanced against costs of maintaining complex systems. Trade-offs between robustness, efficiency, and evolvability shape the trajectory of complexity increase or reduction.",
          es: "La evolución de complejidad es impulsada por presiones selectivas favoreciendo ventajas adaptativas, equilibrada contra costos de mantener sistemas complejos. Los compromisos entre robustez, eficiencia y evolucionabilidad moldean la trayectoria de aumento o reducción de complejidad.",
          de: "Komplexitätsevolution wird durch Selektionsdrücke angetrieben, die adaptive Vorteile begünstigen, ausbalanciert gegen die Kosten der Aufrechterhaltung komplexer Systeme. Kompromisse zwischen Robustheit, Effizienz und Evolvierbarkeit formen die Trajektorie der Komplexitätszunahme oder -reduktion.",
          nl: "Complexiteitsevolutie wordt gedreven door selectiedrukken die adaptieve voordelen bevoordelen, gebalanceerd tegen kosten van het onderhouden van complexe systemen. Afwegingen tussen robuustheid, efficiëntie en evolueerbaarheid vormen de trajectorie van complexiteitstoename of -reductie."
        }
      },
      {
        question: {
          en: "How do biological systems achieve precise spatial organization?",
          es: "¿Cómo logran los sistemas biológicos organización espacial precisa?",
          de: "Wie erreichen biologische Systeme präzise räumliche Organisation?",
          nl: "Hoe bereiken biologische systemen precieze ruimtelijke organisatie?"
        },
        options: [
          { en: "Morphogen gradients and positional information", es: "Gradientes de morfógeno e información posicional", de: "Morphogengradienten und Positionsinformation", nl: "Morfogeen gradiënten en positionele informatie" },
          { en: "Random molecular arrangement", es: "Disposición molecular aleatoria", de: "Zufällige molekulare Anordnung", nl: "Willekeurige moleculaire rangschikking" },
          { en: "External mechanical forces only", es: "Solo fuerzas mecánicas externas", de: "Nur externe mechanische Kräfte", nl: "Alleen externe mechanische krachten" },
          { en: "Uniform distribution patterns", es: "Patrones de distribución uniforme", de: "Einheitliche Verteilungsmuster", nl: "Uniforme distributiepatronen" }
        ],
        correct: 0,
        explanation: {
          en: "Biological systems create precise spatial organization through morphogen gradients that provide positional information to cells, enabling them to differentiate and organize according to their location within concentration gradients of signaling molecules.",
          es: "Los sistemas biológicos crean organización espacial precisa a través de gradientes de morfógeno que proporcionan información posicional a las células, permitiéndoles diferenciarse y organizarse según su ubicación dentro de gradientes de concentración de moléculas de señalización.",
          de: "Biologische Systeme schaffen präzise räumliche Organisation durch Morphogengradienten, die Zellen Positionsinformation liefern und es ihnen ermöglichen, sich entsprechend ihrer Lage innerhalb von Konzentrationsgradienten von Signalmolekülen zu differenzieren und zu organisieren.",
          nl: "Biologische systemen creëren precieze ruimtelijke organisatie door morfogeen gradiënten die positionele informatie aan cellen verstrekken, waardoor ze kunnen differentiëren en organiseren volgens hun locatie binnen concentratiegradiënten van signaalmoleculen."
        }
      },
      {
        question: {
          en: "What principle governs energy flow efficiency in biological systems?",
          es: "¿Qué principio gobierna la eficiencia del flujo de energía en sistemas biológicos?",
          de: "Welches Prinzip regiert die Energieflussef­fizienz in biologischen Systemen?",
          nl: "Welk principe beheerst energiestroom efficiëntie in biologische systemen?"
        },
        options: [
          { en: "Thermodynamic optimization and metabolic control", es: "Optimización termodinámica y control metabólico", de: "Thermodynamische Optimierung und metabolische Kontrolle", nl: "Thermodynamische optimalisatie en metabole controle" },
          { en: "Maximum energy consumption", es: "Consumo máximo de energía", de: "Maximaler Energieverbrauch", nl: "Maximaal energieverbruik" },
          { en: "Random energy distribution", es: "Distribución aleatoria de energía", de: "Zufällige Energieverteilung", nl: "Willekeurige energieverdeling" },
          { en: "Constant energy output", es: "Producción constante de energía", de: "Konstante Energieabgabe", nl: "Constante energie-uitvoer" }
        ],
        correct: 0,
        explanation: {
          en: "Biological systems optimize energy flow through thermodynamic principles that minimize entropy production and metabolic control mechanisms that regulate flux through pathways, balancing energy yield with system stability and responsiveness.",
          es: "Los sistemas biológicos optimizan flujo de energía a través de principios termodinámicos que minimizan producción de entropía y mecanismos de control metabólico que regulan flujo a través de vías, equilibrando rendimiento energético con estabilidad del sistema y capacidad de respuesta.",
          de: "Biologische Systeme optimieren Energiefluss durch thermodynamische Prinzipien, die Entropieproduktion minimieren, und metabolische Kontrollmechanismen, die Fluss durch Stoffwechselwege regulieren, wobei Energieausbeute mit Systemstabilität und Reaktionsfähigkeit ausbalanciert wird.",
          nl: "Biologische systemen optimaliseren energiestroom door thermodynamische principes die entropieproductie minimaliseren en metabole controlemechanismen die flux door paden reguleren, energieopbrengst balanserend met systeemstabiliteit en responsiviteit."
        }
      },
      {
        question: {
          en: "How do biological systems integrate multiple information sources for decision-making?",
          es: "¿Cómo integran los sistemas biológicos múltiples fuentes de información para toma de decisiones?",
          de: "Wie integrieren biologische Systeme mehrere Informationsquellen für Entscheidungsfindung?",
          nl: "Hoe integreren biologische systemen meerdere informatiebronnen voor besluitvorming?"
        },
        options: [
          { en: "Weighted signal integration and computational processing", es: "Integración de señal ponderada y procesamiento computacional", de: "Gewichtete Signalintegration und rechnerische Verarbeitung", nl: "Gewogen signaalintegratie en computationele verwerking" },
          { en: "Single dominant signal selection", es: "Selección de señal dominante única", de: "Einzelne dominante Signalauswahl", nl: "Enkele dominante signaalselectie" },
          { en: "Sequential information processing", es: "Procesamiento secuencial de información", de: "Sequenzielle Informationsverarbeitung", nl: "Sequentiële informatieverwerking" },
          { en: "Random information sampling", es: "Muestreo aleatorio de información", de: "Zufällige Informationsprobenahme", nl: "Willekeurige informatiebemonstering" }
        ],
        correct: 0,
        explanation: {
          en: "Biological systems integrate multiple information sources through weighted signal integration mechanisms that combine and process diverse inputs computationally, allowing for context-dependent decision-making that considers multiple factors simultaneously.",
          es: "Los sistemas biológicos integran múltiples fuentes de información a través de mecanismos de integración de señal ponderada que combinan y procesan entradas diversas computacionalmente, permitiendo toma de decisiones dependiente del contexto que considera múltiples factores simultáneamente.",
          de: "Biologische Systeme integrieren mehrere Informationsquellen durch gewichtete Signalintegrationsmechanismen, die diverse Eingaben rechnerisch kombinieren und verarbeiten, wodurch kontextabhängige Entscheidungsfindung ermöglicht wird, die mehrere Faktoren gleichzeitig berücksichtigt.",
          nl: "Biologische systemen integreren meerdere informatiebronnen door gewogen signaalintegratiemechanismen die diverse inputs computationeel combineren en verwerken, waardoor contextafhankelijke besluitvorming mogelijk wordt die meerdere factoren tegelijkertijd overweegt."
        }
      },
      {
        question: {
          en: "What mechanism enables biological systems to maintain functionality across scale transitions?",
          es: "¿Qué mecanismo permite a los sistemas biológicos mantener funcionalidad a través de transiciones de escala?",
          de: "Welcher Mechanismus ermöglicht biologischen Systemen, Funktionalität über Skalenübergänge hinweg aufrechtzuerhalten?",
          nl: "Welk mechanisme stelt biologische systemen in staat functionaliteit te behouden over schaal­overgangen?"
        },
        options: [
          { en: "Scale-invariant organization and hierarchical control", es: "Organización invariante a escala y control jerárquico", de: "Skaleninvariante Organisation und hierarchische Kontrolle", nl: "Schaal-invariante organisatie en hiërarchische controle" },
          { en: "Fixed-scale operation only", es: "Solo operación a escala fija", de: "Nur feste Skalenbetrieb", nl: "Alleen vaste-schaal operatie" },
          { en: "Random scale selection", es: "Selección aleatoria de escala", de: "Zufällige Skalenauswahl", nl: "Willekeurige schaalselectie" },
          { en: "Single-level control mechanisms", es: "Mecanismos de control de un solo nivel", de: "Einstufige Kontrollmechanismen", nl: "Eenniveau controlemechanismen" }
        ],
        correct: 0,
        explanation: {
          en: "Biological systems maintain functionality across scales through scale-invariant organizational principles and hierarchical control structures that preserve essential properties and enable coordination between molecular, cellular, tissue, and organism levels.",
          es: "Los sistemas biológicos mantienen funcionalidad a través de escalas mediante principios organizacionales invariantes a escala y estructuras de control jerárquico que preservan propiedades esenciales y permiten coordinación entre niveles molecular, celular, tisular y organísmico.",
          de: "Biologische Systeme erhalten Funktionalität über Skalen hinweg durch skaleninvariante Organisationsprinzipien und hierarchische Kontrollstrukturen, die wesentliche Eigenschaften bewahren und Koordination zwischen molekularen, zellulären, Gewebe- und Organismus-Ebenen ermöglichen.",
          nl: "Biologische systemen behouden functionaliteit over schalen door schaal-invariante organisatieprincipes en hiërarchische controlestructuren die essentiële eigenschappen behouden en coördinatie mogelijk maken tussen moleculaire, cellulaire, weefsel- en organismeniveaus."
        }
      },
      {
        question: {
          en: "How do biological systems achieve optimal resource allocation under constraints?",
          es: "¿Cómo logran los sistemas biológicos asignación óptima de recursos bajo restricciones?",
          de: "Wie erreichen biologische Systeme optimale Ressourcenallokation unter Einschränkungen?",
          nl: "Hoe bereiken biologische systemen optimale hulpbronnenallocatie onder beperkingen?"
        },
        options: [
          { en: "Dynamic programming and constraint optimization", es: "Programación dinámica y optimización con restricciones", de: "Dynamische Programmierung und Einschränkungsoptimierung", nl: "Dynamische programmering en beperkingsoptimalisatie" },
          { en: "Equal resource distribution", es: "Distribución equitativa de recursos", de: "Gleichmäßige Ressourcenverteilung", nl: "Gelijke hulpbronnenverdeling" },
          { en: "Random resource allocation", es: "Asignación aleatoria de recursos", de: "Zufällige Ressourcenzuteilung", nl: "Willekeurige hulpbronnenallocatie" },
          { en: "Single-priority resource use", es: "Uso de recursos de prioridad única", de: "Einzelpriorität-Ressourcennutzung", nl: "Enkele-prioriteit hulpbronnengebruik" }
        ],
        correct: 0,
        explanation: {
          en: "Biological systems solve resource allocation problems using dynamic programming principles that optimize allocation over time and constraint optimization methods that balance competing demands while respecting physical and energetic limitations.",
          es: "Los sistemas biológicos resuelven problemas de asignación de recursos usando principios de programación dinámica que optimizan asignación a lo largo del tiempo y métodos de optimización con restricciones que equilibran demandas competidoras mientras respetan limitaciones físicas y energéticas.",
          de: "Biologische Systeme lösen Ressourcenallokationsprobleme mit dynamischen Programmierungsprinzipien, die Allokation über Zeit optimieren, und Einschränkungsoptimierungsmethoden, die konkurrierende Anforderungen ausbalancieren, während physische und energetische Grenzen respektiert werden.",
          nl: "Biologische systemen lossen hulpbronnenallocatieproblemen op met dynamische programmeringsprincipes die allocatie over tijd optimaliseren en beperkingsoptimalisatiemethoden die concurrerende eisen balanceren terwijl fysieke en energetische beperkingen worden gerespecteerd."
        }
      },
      {
        question: {
          en: "What principle governs the emergence of collective behavior in biological systems?",
          es: "¿Qué principio gobierna la emergencia de comportamiento colectivo en sistemas biológicos?",
          de: "Welches Prinzip regiert das Entstehen kollektiven Verhaltens in biologischen Systemen?",
          nl: "Welk principe beheerst de opkomst van collectief gedrag in biologische systemen?"
        },
        options: [
          { en: "Self-organization and local interaction rules", es: "Auto-organización y reglas de interacción local", de: "Selbstorganisation und lokale Interaktionsregeln", nl: "Zelforganisatie en lokale interactieregels" },
          { en: "Central command and control", es: "Comando y control central", de: "Zentrale Kommando und Kontrolle", nl: "Centrale commando en controle" },
          { en: "Random individual behaviors", es: "Comportamientos individuales aleatorios", de: "Zufällige individuelle Verhaltensweisen", nl: "Willekeurige individuele gedragingen" },
          { en: "External environmental forcing", es: "Forzado ambiental externo", de: "Externe Umwelterzwingung", nl: "Externe omgevingsdwang" }
        ],
        correct: 0,
        explanation: {
          en: "Collective behavior emerges from self-organization processes where simple local interaction rules between individual components give rise to complex, coordinated system-level behaviors without centralized control, as seen in flocking, swarming, and neural synchronization.",
          es: "El comportamiento colectivo emerge de procesos de auto-organización donde reglas simples de interacción local entre componentes individuales dan lugar a comportamientos complejos y coordinados a nivel de sistema sin control centralizado, como se ve en formación de bandadas, enjambres y sincronización neural.",
          de: "Kollektives Verhalten entsteht aus Selbstorganisationsprozessen, wo einfache lokale Interaktionsregeln zwischen individuellen Komponenten komplexe, koordinierte Verhaltensweisen auf Systemebene ohne zentralisierte Kontrolle hervorbringen, wie in Schwarmbildung und neuronaler Synchronisation zu sehen.",
          nl: "Collectief gedrag ontstaat uit zelforganisatieprocessen waarbij eenvoudige lokale interactieregels tussen individuele componenten complexe, gecoördineerde gedragingen op systeemniveau veroorzaken zonder gecentraliseerde controle, zoals gezien in zwermgedrag en neuronale synchronisatie."
        }
      },
      {
        question: {
          en: "How do biological systems maintain coherence across distributed components?",
          es: "¿Cómo mantienen los sistemas biológicos coherencia a través de componentes distribuidos?",
          de: "Wie erhalten biologische Systeme Kohärenz über verteilte Komponenten hinweg aufrecht?",
          nl: "Hoe behouden biologische systemen coherentie over gedistribueerde componenten?"
        },
        options: [
          { en: "Global synchronization and information sharing", es: "Sincronización global y compartición de información", de: "Globale Synchronisation und Informationsaustausch", nl: "Globale synchronisatie en informatie­deling" },
          { en: "Independent component operation", es: "Operación independiente de componentes", de: "Unabhängiger Komponentenbetrieb", nl: "Onafhankelijke componentoperatie" },
          { en: "Physical structural connections only", es: "Solo conexiones estructurales físicas", de: "Nur physische strukturelle Verbindungen", nl: "Alleen fysieke structurele verbindingen" },
          { en: "Temporal isolation mechanisms", es: "Mecanismos de aislamiento temporal", de: "Zeitliche Isolationsmechanismen", nl: "Temporele isolatiemechanismen" }
        ],
        correct: 0,
        explanation: {
          en: "Biological systems maintain coherence through global synchronization mechanisms and distributed information sharing that enable coordinated behavior across spatially separated components, using signaling networks, entrainment, and feedback loops.",
          es: "Los sistemas biológicos mantienen coherencia a través de mecanismos de sincronización global y compartición distribuida de información que permite comportamiento coordinado a través de componentes espacialmente separados, usando redes de señalización, arrastre y bucles de retroalimentación.",
          de: "Biologische Systeme erhalten Kohärenz durch globale Synchronisationsmechanismen und verteilten Informationsaustausch, die koordiniertes Verhalten über räumlich getrennte Komponenten ermöglichen, mit Signalnetzwerken, Mitnahme und Rückkopplungsschleifen.",
          nl: "Biologische systemen behouden coherentie door globale synchronisatiemechanismen en gedistribueerde informatiedeling die gecoördineerd gedrag mogelijk maken over ruimtelijk gescheiden componenten, gebruikmakend van signaalnetwerken, meesleuring en feedbacklussen."
        }
      },
      {
        question: {
          en: "What mechanism enables biological systems to adapt their structure to function?",
          es: "¿Qué mecanismo permite a los sistemas biológicos adaptar su estructura a la función?",
          de: "Welcher Mechanismus ermöglicht biologischen Systemen, ihre Struktur an die Funktion anzupassen?",
          nl: "Welk mechanisme stelt biologische systemen in staat hun structuur aan te passen aan functie?"
        },
        options: [
          { en: "Activity-dependent remodeling and plasticity", es: "Remodelación dependiente de actividad y plasticidad", de: "Aktivitätsabhängige Umgestaltung und Plastizität", nl: "Activiteit-afhankelijke hermodellering en plasticiteit" },
          { en: "Fixed structural templates", es: "Plantillas estructurales fijas", de: "Feste strukturelle Schablonen", nl: "Vaste structurele sjablonen" },
          { en: "Random structural changes", es: "Cambios estructurales aleatorios", de: "Zufällige strukturelle Änderungen", nl: "Willekeurige structurele veranderingen" },
          { en: "External mechanical molding", es: "Moldeo mecánico externo", de: "Externe mechanische Formung", nl: "Externe mechanische vorming" }
        ],
        correct: 0,
        explanation: {
          en: "Biological systems adapt structure to function through activity-dependent remodeling mechanisms and plasticity that modify organization based on usage patterns, load requirements, and functional demands, optimizing structure-function relationships dynamically.",
          es: "Los sistemas biológicos adaptan estructura a función a través de mecanismos de remodelación dependientes de actividad y plasticidad que modifican organización basada en patrones de uso, requisitos de carga y demandas funcionales, optimizando relaciones estructura-función dinámicamente.",
          de: "Biologische Systeme passen Struktur an Funktion durch aktivitätsabhängige Umgestaltungsmechanismen und Plastizität an, die Organisation basierend auf Nutzungsmustern, Lastanforderungen und funktionalen Anforderungen modifizieren und Struktur-Funktions-Beziehungen dynamisch optimieren.",
          nl: "Biologische systemen passen structuur aan functie aan door activiteit-afhankelijke hermodelleringsmechanismen en plasticiteit die organisatie modificeren gebaseerd op gebruikspatronen, belastingvereisten en functionele eisen, waarbij structuur-functie relaties dynamisch worden geoptimaliseerd."
        }
      },
      {
        question: {
          en: "How do biological systems achieve fault tolerance in critical functions?",
          es: "¿Cómo logran los sistemas biológicos tolerancia a fallos en funciones críticas?",
          de: "Wie erreichen biologische Systeme Fehlertoleranz in kritischen Funktionen?",
          nl: "Hoe bereiken biologische systemen fouttolerantie in kritieke functies?"
        },
        options: [
          { en: "Redundancy, backup systems, and graceful degradation", es: "Redundancia, sistemas de respaldo y degradación elegante", de: "Redundanz, Backup-Systeme und elegante Degradation", nl: "Redundantie, back-upsystemen en elegante degradatie" },
          { en: "Single critical point design", es: "Diseño de punto crítico único", de: "Einzelner kritischer Punkt Design", nl: "Enkel kritiek punt ontwerp" },
          { en: "Perfect component reliability", es: "Confiabilidad perfecta de componentes", de: "Perfekte Komponentenzuverlässigkeit", nl: "Perfecte componentbetrouwbaarheid" },
          { en: "External error correction only", es: "Solo corrección de errores externa", de: "Nur externe Fehlerkorrektur", nl: "Alleen externe foutcorrectie" }
        ],
        correct: 0,
        explanation: {
          en: "Biological systems achieve fault tolerance through multiple strategies: functional redundancy provides backup pathways, distributed control prevents single points of failure, and graceful degradation maintains partial function when components fail, ensuring system survival.",
          es: "Los sistemas biológicos logran tolerancia a fallos a través de múltiples estrategias: redundancia funcional proporciona vías de respaldo, control distribuido previene puntos únicos de falla, y degradación elegante mantiene función parcial cuando componentes fallan, asegurando supervivencia del sistema.",
          de: "Biologische Systeme erreichen Fehlertoleranz durch mehrere Strategien: funktionale Redundanz bietet Backup-Pfade, verteilte Kontrolle verhindert einzelne Ausfallpunkte, und elegante Degradation erhält Teilfunktion bei Komponentenausfall aufrecht, wodurch Systemüberleben sichergestellt wird.",
          nl: "Biologische systemen bereiken fouttolerantie door meerdere strategieën: functionele redundantie biedt back-uppaden, gedistribueerde controle voorkomt enkele foutpunten, en elegante degradatie behoudt gedeeltelijke functie wanneer componenten falen, waardoor systeem­overleving wordt verzekerd."
        }
      },
      {
        question: {
          en: "What principle governs the optimization of biological network architectures?",
          es: "¿Qué principio gobierna la optimización de arquitecturas de redes biológicas?",
          de: "Welches Prinzip regiert die Optimierung biologischer Netzwerkarchitekturen?",
          nl: "Welk principe beheerst de optimalisatie van biologische netwerkarchitecturen?"
        },
        options: [
          { en: "Multi-objective optimization and evolutionary constraints", es: "Optimización multi-objetivo y restricciones evolutivas", de: "Mehrzieloptimierung und evolutionäre Einschränkungen", nl: "Multi-objectief optimalisatie en evolutionaire beperkingen" },
          { en: "Maximum connectivity approach", es: "Enfoque de conectividad máxima", de: "Maximale Konnektivitätsansatz", nl: "Maximale connectiviteits­benadering" },
          { en: "Minimum network size", es: "Tamaño mínimo de red", de: "Minimale Netzwerkgröße", nl: "Minimale netwerkgrootte" },
          { en: "Random wiring patterns", es: "Patrones de cableado aleatorios", de: "Zufällige Verdrahtungsmuster", nl: "Willekeurige bedradingspatronen" }
        ],
        correct: 0,
        explanation: {
          en: "Biological network architectures evolve through multi-objective optimization that simultaneously considers efficiency, robustness, evolvability, and resource costs, subject to developmental and physical constraints that shape the space of possible solutions.",
          es: "Las arquitecturas de redes biológicas evolucionan a través de optimización multi-objetivo que considera simultáneamente eficiencia, robustez, evolucionabilidad y costos de recursos, sujeto a restricciones de desarrollo y físicas que moldean el espacio de soluciones posibles.",
          de: "Biologische Netzwerkarchitekturen entwickeln sich durch Mehrzieloptimierung, die gleichzeitig Effizienz, Robustheit, Evolvierbarkeit und Ressourcenkosten berücksichtigt, unterworfen entwicklungs- und physikalischen Einschränkungen, die den Raum möglicher Lösungen formen.",
          nl: "Biologische netwerkarchitecturen evolueren door multi-objectief optimalisatie die tegelijkertijd efficiëntie, robuustheid, evolueerbaarheid en hulpbronnenkosten overweegt, onderworpen aan ontwikkelings- en fysieke beperkingen die de ruimte van mogelijke oplossingen vormen."
        }
      },
      {
        question: {
          en: "How do biological systems balance stability and adaptability in dynamic environments?",
          es: "¿Cómo equilibran los sistemas biológicos estabilidad y adaptabilidad en ambientes dinámicos?",
          de: "Wie balancieren biologische Systeme Stabilität und Anpassungsfähigkeit in dynamischen Umgebungen?",
          nl: "Hoe balanceren biologische systemen stabiliteit en aanpasbaarheid in dynamische omgevingen?"
        },
        options: [
          { en: "Meta-stability and adaptive landscapes", es: "Meta-estabilidad y paisajes adaptativos", de: "Meta-Stabilität und adaptive Landschaften", nl: "Meta-stabiliteit en adaptieve landschappen" },
          { en: "Complete rigidity", es: "Rigidez completa", de: "Vollständige Starrheit", nl: "Volledige rigiditeit" },
          { en: "Constant random changes", es: "Cambios aleatorios constantes", de: "Konstante zufällige Änderungen", nl: "Constante willekeurige veranderingen" },
          { en: "Single equilibrium state", es: "Estado de equilibrio único", de: "Einzelner Gleichgewichtszustand", nl: "Enkele evenwichtstoestand" }
        ],
        correct: 0,
        explanation: {
          en: "Biological systems achieve optimal balance through meta-stable states that provide stability for normal function while maintaining capacity for rapid transitions when environmental changes require adaptation, navigating adaptive landscapes with multiple stable configurations.",
          es: "Los sistemas biológicos logran equilibrio óptimo a través de estados meta-estables que proporcionan estabilidad para función normal mientras mantienen capacidad para transiciones rápidas cuando cambios ambientales requieren adaptación, navegando paisajes adaptativos con múltiples configuraciones estables.",
          de: "Biologische Systeme erreichen optimale Balance durch meta-stabile Zustände, die Stabilität für normale Funktion bieten, während sie Kapazität für schnelle Übergänge erhalten, wenn Umweltveränderungen Anpassung erfordern, und navigieren adaptive Landschaften mit mehreren stabilen Konfigurationen.",
          nl: "Biologische systemen bereiken optimale balans door meta-stabiele toestanden die stabiliteit bieden voor normale functie terwijl capaciteit wordt behouden voor snelle overgangen wanneer omgevingsveranderingen aanpassing vereisen, navigerend door adaptieve landschappen met meerdere stabiele configuraties."
        }
      },
      {
        question: {
          en: "What mechanism enables biological systems to extract maximum information from minimal signals?",
          es: "¿Qué mecanismo permite a los sistemas biológicos extraer información máxima de señales mínimas?",
          de: "Welcher Mechanismus ermöglicht biologischen Systemen, maximale Information aus minimalen Signalen zu extrahieren?",
          nl: "Welk mechanisme stelt biologische systemen in staat maximale informatie te extraheren uit minimale signalen?"
        },
        options: [
          { en: "Signal amplification and noise filtering", es: "Amplificación de señal y filtrado de ruido", de: "Signalverstärkung und Rauschfilterung", nl: "Signalamplificatie en ruisfiltering" },
          { en: "Signal attenuation", es: "Atenuación de señal", de: "Signaldämpfung", nl: "Signaalverzwakking" },
          { en: "Random signal processing", es: "Procesamiento aleatorio de señal", de: "Zufällige Signalverarbeitung", nl: "Willekeurige signaalverwerking" },
          { en: "Signal delay mechanisms", es: "Mecanismos de retardo de señal", de: "Signalverzögerungsmechanismen", nl: "Signaaltragheid mechanismen" }
        ],
        correct: 0,
        explanation: {
          en: "Biological systems maximize information extraction through sophisticated signal amplification cascades that boost weak signals and advanced noise filtering mechanisms that enhance signal-to-noise ratios, enabling detection and processing of minimal environmental cues.",
          es: "Los sistemas biológicos maximizan extracción de información a través de cascadas sofisticadas de amplificación de señal que refuerzan señales débiles y mecanismos avanzados de filtrado de ruido que mejoran ratios señal-ruido, permitiendo detección y procesamiento de señales ambientales mínimas.",
          de: "Biologische Systeme maximieren Informationsextraktion durch sophistizierte Signalverstärkungskaskaden, die schwache Signale verstärken, und fortgeschrittene Rauschfilterungsmechanismen, die Signal-Rausch-Verhältnisse verbessern, wodurch Erkennung und Verarbeitung minimaler Umweltsignale ermöglicht wird.",
          nl: "Biologische systemen maximaliseren informatie-extractie door geavanceerde signalamplificatie cascades die zwakke signalen versterken en geavanceerde ruisfiltering mechanismen die signaal-ruis verhoudingen verbeteren, waardoor detectie en verwerking van minimale omgevingssignalen mogelijk wordt."
        }
      },
      {
        question: {
          en: "What principle governs the emergence of hierarchical organization in biological systems?",
          es: "¿Qué principio gobierna la emergencia de organización jerárquica en sistemas biológicos?",
          de: "Welches Prinzip regiert das Entstehen hierarchischer Organisation in biologischen Systemen?",
          nl: "Welk principe beheerst de opkomst van hiërarchische organisatie in biologische systemen?"
        },
        options: [
          { en: "Modular assembly and functional integration", es: "Ensamblaje modular e integración funcional", de: "Modularer Aufbau und funktionale Integration", nl: "Modulaire assemblage en functionele integratie" },
          { en: "Random structural accumulation", es: "Acumulación estructural aleatoria", de: "Zufällige strukturelle Ansammlung", nl: "Willekeurige structurele accumulatie" },
          { en: "Top-down imposed organization", es: "Organización impuesta de arriba abajo", de: "Von oben auferlegte Organisation", nl: "Top-down opgelegde organisatie" },
          { en: "Single-level flat architecture", es: "Arquitectura plana de un solo nivel", de: "Einstufige flache Architektur", nl: "Eenniveau platte architectuur" }
        ],
        correct: 0,
        explanation: {
          en: "Hierarchical organization emerges through modular assembly where functional units combine into higher-order structures, with each level providing emergent properties while maintaining integration and coordination across organizational scales.",
          es: "La organización jerárquica emerge a través de ensamblaje modular donde unidades funcionales se combinan en estructuras de orden superior, con cada nivel proporcionando propiedades emergentes mientras mantiene integración y coordinación a través de escalas organizacionales.",
          de: "Hierarchische Organisation entsteht durch modularen Aufbau, wo funktionale Einheiten sich zu höheren Strukturen kombinieren, wobei jede Ebene emergente Eigenschaften bietet und gleichzeitig Integration und Koordination über organisatorische Skalen hinweg aufrechterhält.",
          nl: "Hiërarchische organisatie ontstaat door modulaire assemblage waarbij functionele eenheden combineren tot hogere-orde structuren, waarbij elk niveau emergente eigenschappen biedt terwijl integratie en coördinatie over organisatorische schalen wordt behouden."
        }
      },
      {
        question: {
          en: "How do biological systems optimize trade-offs between multiple competing objectives?",
          es: "¿Cómo optimizan los sistemas biológicos compromisos entre múltiples objetivos competidores?",
          de: "Wie optimieren biologische Systeme Kompromisse zwischen mehreren konkurrierenden Zielen?",
          nl: "Hoe optimaliseren biologische systemen afwegingen tussen meerdere concurrerende doelstellingen?"
        },
        options: [
          { en: "Pareto optimization and contextual prioritization", es: "Optimización de Pareto y priorización contextual", de: "Pareto-Optimierung und kontextuelle Priorisierung", nl: "Pareto optimalisatie en contextuele prioritering" },
          { en: "Single-objective maximization", es: "Maximización de objetivo único", de: "Einzielobjektiv-Maximierung", nl: "Enkele-doelstelling maximalisatie" },
          { en: "Random objective selection", es: "Selección aleatoria de objetivos", de: "Zufällige Zielauswahl", nl: "Willekeurige doelstellingselectie" },
          { en: "Sequential objective pursuit", es: "Persecución secuencial de objetivos", de: "Sequenzielle Zielverfolgung", nl: "Sequentiële doelstelling achtervolging" }
        ],
        correct: 0,
        explanation: {
          en: "Biological systems navigate multi-objective optimization through Pareto-efficient solutions that balance competing demands, using contextual prioritization mechanisms that dynamically adjust the relative importance of different objectives based on environmental conditions and internal states.",
          es: "Los sistemas biológicos navegan optimización multi-objetivo a través de soluciones Pareto-eficientes que equilibran demandas competidoras, usando mecanismos de priorización contextual que ajustan dinámicamente la importancia relativa de diferentes objetivos basada en condiciones ambientales y estados internos.",
          de: "Biologische Systeme navigieren Mehrzieloptimierung durch Pareto-effiziente Lösungen, die konkurrierende Anforderungen ausbalancieren, mit kontextuellen Priorisierungsmechanismen, die die relative Bedeutung verschiedener Ziele basierend auf Umweltbedingungen und internen Zuständen dynamisch anpassen.",
          nl: "Biologische systemen navigeren multi-objectief optimalisatie door Pareto-efficiënte oplossingen die concurrerende eisen balanceren, gebruikmakend van contextuele prioriteringsmechanismen die de relatieve belangrijkheid van verschillende doelstellingen dynamisch aanpassen gebaseerd op omgevingscondities en interne toestanden."
        }
      },
      {
        question: {
          en: "What mechanism enables biological systems to achieve precise timing without external clocks?",
          es: "¿Qué mecanismo permite a los sistemas biológicos lograr tiempo preciso sin relojes externos?",
          de: "Welcher Mechanismus ermöglicht biologischen Systemen, präzise Zeitmessung ohne externe Uhren zu erreichen?",
          nl: "Welk mechanisme stelt biologische systemen in staat precieze timing te bereiken zonder externe klokken?"
        },
        options: [
          { en: "Endogenous oscillators and molecular clocks", es: "Osciladores endógenos y relojes moleculares", de: "Endogene Oszillatoren und molekulare Uhren", nl: "Endogene oscillators en moleculaire klokken" },
          { en: "Environmental time cues only", es: "Solo señales de tiempo ambientales", de: "Nur Umweltzeitsignale", nl: "Alleen omgevings-tijdsignalen" },
          { en: "Random timing intervals", es: "Intervalos de tiempo aleatorios", de: "Zufällige Zeitintervalle", nl: "Willekeurige timing intervallen" },
          { en: "Fixed temporal sequences", es: "Secuencias temporales fijas", de: "Feste zeitliche Sequenzen", nl: "Vaste temporele sequenties" }
        ],
        correct: 0,
        explanation: {
          en: "Biological systems achieve precise timing through endogenous oscillators and molecular clock mechanisms that generate autonomous rhythms, including circadian clocks, cell cycle timers, and developmental clocks that can operate independently of external time cues.",
          es: "Los sistemas biológicos logran tiempo preciso a través de osciladores endógenos y mecanismos de reloj molecular que generan ritmos autónomos, incluyendo relojes circadianos, temporizadores del ciclo celular y relojes de desarrollo que pueden operar independientemente de señales de tiempo externas.",
          de: "Biologische Systeme erreichen präzise Zeitmessung durch endogene Oszillatoren und molekulare Uhrmechanismen, die autonome Rhythmen erzeugen, einschließlich circadianer Uhren, Zellzyklus-Timer und Entwicklungsuhren, die unabhängig von externen Zeitreizen funktionieren können.",
          nl: "Biologische systemen bereiken precieze timing door endogene oscillators en moleculaire klokmechanismen die autonome ritmes genereren, inclusief circadiane klokken, celcyclus timers, en ontwikkelingsklokken die onafhankelijk van externe tijdsignalen kunnen opereren."
        }
      },
      {
        question: {
          en: "How do biological systems maintain performance under resource scarcity?",
          es: "¿Cómo mantienen los sistemas biológicos rendimiento bajo escasez de recursos?",
          de: "Wie erhalten biologische Systeme Leistung unter Ressourcenknappheit aufrecht?",
          nl: "Hoe behouden biologische systemen prestatie onder hulpbronnen-schaarste?"
        },
        options: [
          { en: "Adaptive resource allocation and metabolic flexibility", es: "Asignación adaptiva de recursos y flexibilidad metabólica", de: "Adaptive Ressourcenallokation und metabolische Flexibilität", nl: "Adaptieve hulpbronnenallocatie en metabole flexibiliteit" },
          { en: "Uniform resource distribution", es: "Distribución uniforme de recursos", de: "Einheitliche Ressourcenverteilung", nl: "Uniforme hulpbronnenverdeling" },
          { en: "System shutdown mechanisms", es: "Mecanismos de cierre del sistema", de: "System-Abschaltmechanismen", nl: "Systeem uitschakelmechanismen" },
          { en: "Fixed resource consumption", es: "Consumo fijo de recursos", de: "Fester Ressourcenverbrauch", nl: "Vast hulpbronnenverbruik" }
        ],
        correct: 0,
        explanation: {
          en: "Under resource scarcity, biological systems maintain performance through adaptive resource allocation that prioritizes critical functions and metabolic flexibility that enables switching to alternative pathways and energy sources while reducing non-essential processes.",
          es: "Bajo escasez de recursos, los sistemas biológicos mantienen rendimiento a través de asignación adaptiva de recursos que prioriza funciones críticas y flexibilidad metabólica que permite cambiar a vías alternativas y fuentes de energía mientras reduce procesos no esenciales.",
          de: "Unter Ressourcenknappheit erhalten biologische Systeme Leistung durch adaptive Ressourcenallokation, die kritische Funktionen priorisiert, und metabolische Flexibilität, die das Umschalten auf alternative Stoffwechselwege und Energiequellen ermöglicht, während nicht-essentielle Prozesse reduziert werden.",
          nl: "Onder hulpbronnen-schaarste behouden biologische systemen prestatie door adaptieve hulpbronnenallocatie die kritieke functies prioriteert en metabole flexibiliteit die omschakeling naar alternatieve paden en energiebronnen mogelijk maakt terwijl niet-essentiële processen worden verminderd."
        }
      },
      {
        question: {
          en: "What principle governs the evolution of cooperative behavior in biological systems?",
          es: "¿Qué principio gobierna la evolución de comportamiento cooperativo en sistemas biológicos?",
          de: "Welches Prinzip regiert die Evolution kooperativen Verhaltens in biologischen Systemen?",
          nl: "Welk principe beheerst de evolutie van coöperatief gedrag in biologische systemen?"
        },
        options: [
          { en: "Reciprocity and group selection mechanisms", es: "Mecanismos de reciprocidad y selección de grupo", de: "Reziprozitäts- und Gruppenselektion-Mechanismen", nl: "Wederkerigheid en groepsselectie mechanismen" },
          { en: "Pure individual competition", es: "Competencia individual pura", de: "Reine individuelle Konkurrenz", nl: "Zuivere individuele competitie" },
          { en: "Random altruistic behavior", es: "Comportamiento altruista aleatorio", de: "Zufälliges altruistisches Verhalten", nl: "Willekeurig altruïstisch gedrag" },
          { en: "External coercive forces", es: "Fuerzas coercitivas externas", de: "Externe Zwangskräfte", nl: "Externe dwingende krachten" }
        ],
        correct: 0,
        explanation: {
          en: "Cooperative behavior evolves through mechanisms like reciprocal altruism, kin selection, and group selection, where cooperation provides mutual benefits, supports related individuals, or enhances group survival, creating evolutionary advantages despite individual costs.",
          es: "El comportamiento cooperativo evoluciona a través de mecanismos como altruismo recíproco, selección de parentesco y selección de grupo, donde cooperación proporciona beneficios mutuos, apoya individuos relacionados, o mejora supervivencia grupal, creando ventajas evolutivas a pesar de costos individuales.",
          de: "Kooperatives Verhalten entwickelt sich durch Mechanismen wie reziproken Altruismus, Verwandtenselektion und Gruppenselektion, wo Kooperation gegenseitige Vorteile bietet, verwandte Individuen unterstützt oder Gruppenüberleben verbessert, wodurch evolutionäre Vorteile trotz individueller Kosten entstehen.",
          nl: "Coöperatief gedrag evolueert door mechanismen zoals wederzijds altruïsme, verwantenselectie, en groepsselectie, waarbij coöperatie wederzijdse voordelen biedt, gerelateerde individuen ondersteunt, of groepsoverleving verbetert, waarbij evolutionaire voordelen ontstaan ondanks individuele kosten."
        }
      }
    ]
  };

  if (typeof window.addLevel === 'function') {
    window.addLevel('brain-teaser/biology', level3);
  }
})();