// Quiz Level 10: Currencies - Cryptocurrency - Master Level
(function() {
  const level10 = {
    name: {
      en: "Cryptocurrency - Master Level",
      es: "Criptomonedas - Nivel Maestro",
      de: "Kryptowährungen - Meisterstufe",
      nl: "Cryptocurrency - Meesterniveau"
    },
    questions: [
      {
        question: {
          en: "In the context of Universal Composability (UC) framework, what fundamental limitation prevents achieving perfect privacy in concurrent zero-knowledge protocols under polynomial-time assumptions?",
          es: "En el contexto del marco de Composabilidad Universal (UC), ¿qué limitación fundamental impide lograr privacidad perfecta en protocolos de conocimiento cero concurrentes bajo suposiciones de tiempo polinomial?",
          de: "Im Kontext des Universal Composability (UC) Frameworks, welche fundamentale Begrenzung verhindert das Erreichen perfekter Privatsphäre in konkurrierenden Zero-Knowledge-Protokollen unter polynomialen Zeitannahmen?",
          nl: "In de context van het Universal Composability (UC) framework, welke fundamentele beperking voorkomt het bereiken van perfecte privacy in gelijktijdige zero-knowledge protocollen onder polynomiale tijd aannames?"
        },
        options: [
          {
            en: "The impossibility of simulation-sound extractability",
            es: "La imposibilidad de extractabilidad de sonido de simulación",
            de: "Die Unmöglichkeit der simulationsechten Extrahierbarkeit",
            nl: "De onmogelijkheid van simulatie-geluid extracteerbaarheid"
          },
          {
            en: "The concurrent zero-knowledge impossibility result",
            es: "El resultado de imposibilidad de conocimiento cero concurrente",
            de: "Das Unmöglichkeitsergebnis für concurrent Zero-Knowledge",
            nl: "Het gelijktijdige zero-knowledge onmogelijkheidsresultaat"
          },
          {
            en: "The global setup requirement contradiction",
            es: "La contradicción del requisito de configuración global",
            de: "Der Widerspruch der globalen Setup-Anforderung",
            nl: "De globale setup vereiste contradictie"
          },
          {
            en: "The adaptive corruption model breakdown",
            es: "La ruptura del modelo de corrupción adaptiva",
            de: "Der Zusammenbruch des adaptiven Korruptionsmodells",
            nl: "De adaptieve corruptie model afbraak"
          }
        ],
        correct: 1,
        explanation: {
          en: "The concurrent zero-knowledge impossibility result by Canetti, Kilian, Petrank, and Rosen shows that concurrent zero-knowledge is impossible in the plain model under polynomial-time assumptions, requiring trusted setup or timing assumptions.",
          es: "El resultado de imposibilidad de conocimiento cero concurrente de Canetti, Kilian, Petrank y Rosen muestra que el conocimiento cero concurrente es imposible en el modelo plano bajo suposiciones de tiempo polinomial, requiriendo configuración confiable o suposiciones de temporización.",
          de: "Das Unmöglichkeitsergebnis für concurrent Zero-Knowledge von Canetti, Kilian, Petrank und Rosen zeigt, dass concurrent Zero-Knowledge im Plain-Modell unter polynomialen Zeitannahmen unmöglich ist und vertrauensvolle Einrichtung oder Timing-Annahmen erfordert.",
          nl: "Het gelijktijdige zero-knowledge onmogelijkheidsresultaat van Canetti, Kilian, Petrank en Rosen toont aan dat gelijktijdige zero-knowledge onmogelijk is in het gewone model onder polynomiale tijd aannames, waarbij vertrouwde setup of timing aannames vereist zijn."
        }
      },
      {
        question: {
          en: "What is the fundamental reason why Rational Proofs cannot achieve soundness error below 1/2 against computationally unbounded provers in the utility-maximizing game-theoretic model?",
          es: "¿Cuál es la razón fundamental por la que las Pruebas Racionales no pueden lograr un error de solidez por debajo de 1/2 contra probadores computacionalmente ilimitados en el modelo teórico de juegos que maximiza la utilidad?",
          de: "Was ist der fundamentale Grund, warum Rational Proofs keinen Soundness-Fehler unter 1/2 gegen rechnerisch unbegrenzte Beweiser im nutzenmaximierenden spieltheoretischen Modell erreichen können?",
          nl: "Wat is de fundamentele reden waarom Rational Proofs geen soundness fout onder de 1/2 kunnen bereiken tegen computationeel onbegrensde bewijzers in het nut-maximaliserende speltheoretische model?"
        },
        options: [
          {
            en: "The minimax theorem constraint on mixed strategies",
            es: "La restricción del teorema minimax en estrategias mixtas",
            de: "Die Minimax-Theorem-Beschränkung bei gemischten Strategien",
            nl: "De minimax theorema beperking op gemengde strategieën"
          },
          {
            en: "The impossibility of punishment in single-shot games",
            es: "La imposibilidad de castigo en juegos de una sola vez",
            de: "Die Unmöglichkeit der Bestrafung in einmaligen Spielen",
            nl: "De onmogelijkheid van bestraffing in eenmalige spellen"
          },
          {
            en: "The computational indistinguishability breakdown",
            es: "La ruptura de la indistinguibilidad computacional",
            de: "Der Zusammenbruch der rechnerischen Ununterscheidbarkeit",
            nl: "De computationele ononderscheidbaarheid afbraak"
          },
          {
            en: "The Nash equilibrium uniqueness requirement",
            es: "El requisito de unicidad del equilibrio de Nash",
            de: "Die Eindeutigkeitsanforderung des Nash-Gleichgewichts",
            nl: "De Nash evenwicht uniekheid vereiste"
          }
        ],
        correct: 0,
        explanation: {
          en: "By the minimax theorem, in any finite game, the value of the game for the prover is at least the maximum over mixed strategies they can guarantee, which for binary outcome verification games cannot exceed 1/2 when facing an optimal verifier.",
          es: "Por el teorema minimax, en cualquier juego finito, el valor del juego para el probador es al menos el máximo sobre las estrategias mixtas que pueden garantizar, que para juegos de verificación de resultado binario no puede exceder 1/2 cuando se enfrenta a un verificador óptimo.",
          de: "Nach dem Minimax-Theorem ist in jedem endlichen Spiel der Wert des Spiels für den Beweiser mindestens das Maximum über gemischte Strategien, die sie garantieren können, was bei binären Ergebnis-Verifikationsspielen 1/2 nicht überschreiten kann, wenn sie einem optimalen Verifizierer gegenüberstehen.",
          nl: "Volgens het minimax theorema is in elk eindig spel de waarde van het spel voor de bewijzer ten minste het maximum over gemengde strategieën die zij kunnen garanderen, wat voor binaire uitkomst verificatie spellen niet meer dan 1/2 kan zijn wanneer geconfronteerd met een optimale verifieerder."
        }
      },
      {
        question: {
          en: "In the algebraic group model (AGM), what property distinguishes algebraic adversaries from generic adversaries in the context of discrete logarithm-based assumptions?",
          es: "En el modelo de grupo algebraico (AGM), ¿qué propiedad distingue a los adversarios algebraicos de los adversarios genéricos en el contexto de las suposiciones basadas en logaritmos discretos?",
          de: "Im algebraischen Gruppenmodell (AGM), welche Eigenschaft unterscheidet algebraische Adversaries von generischen Adversaries im Kontext diskreter logarithmusbasierter Annahmen?",
          nl: "In het algebraïsche groep model (AGM), welke eigenschap onderscheidt algebraïsche tegenstanders van generieke tegenstanders in de context van discrete logaritme-gebaseerde aannames?"
        },
        options: [
          {
            en: "Knowledge of group element representations as linear combinations",
            es: "Conocimiento de representaciones de elementos de grupo como combinaciones lineales",
            de: "Kenntnis von Gruppenelement-Darstellungen als Linearkombinationen",
            nl: "Kennis van groep element representaties als lineaire combinaties"
          },
          {
            en: "Access to the group operation oracle without restrictions",
            es: "Acceso al oráculo de operación de grupo sin restricciones",
            de: "Zugang zum Gruppenoperations-Orakel ohne Beschränkungen",
            nl: "Toegang tot het groep operatie orakel zonder beperkingen"
          },
          {
            en: "Ability to compute discrete logarithms in subgroups",
            es: "Capacidad de calcular logaritmos discretos en subgrupos",
            de: "Fähigkeit, diskrete Logarithmen in Untergruppen zu berechnen",
            nl: "Vermogen om discrete logaritmen in subgroepen te berekenen"
          },
          {
            en: "Polynomial-time solution to the representation problem",
            es: "Solución en tiempo polinomial al problema de representación",
            de: "Polynomialzeit-Lösung für das Darstellungsproblem",
            nl: "Polynomiale tijd oplossing voor het representatie probleem"
          }
        ],
        correct: 0,
        explanation: {
          en: "In the AGM, algebraic adversaries must provide, alongside any group element they output, a representation of that element as a linear combination of previously seen group elements, capturing the algebraic nature of their computations.",
          es: "En el AGM, los adversarios algebraicos deben proporcionar, junto con cualquier elemento de grupo que produzcan, una representación de ese elemento como una combinación lineal de elementos de grupo vistos previamente, capturando la naturaleza algebraica de sus cálculos.",
          de: "Im AGM müssen algebraische Adversaries zusammen mit jedem Gruppenelement, das sie ausgeben, eine Darstellung dieses Elements als Linearkombination zuvor gesehener Gruppenelemente liefern, was die algebraische Natur ihrer Berechnungen erfasst.",
          nl: "In het AGM moeten algebraïsche tegenstanders, naast elk groep element dat zij uitvoeren, een representatie van dat element leveren als een lineaire combinatie van eerder geziene groep elementen, waarbij de algebraïsche aard van hun berekeningen wordt vastgelegd."
        }
      },
      {
        question: {
          en: "What fundamental cryptographic assumption is violated when a blockchain achieves both perfect forward secrecy and post-compromise security simultaneously in the continuous key-leakage model?",
          es: "¿Qué suposición criptográfica fundamental se viola cuando una blockchain logra tanto secreto hacia adelante perfecto como seguridad post-compromiso simultáneamente en el modelo de fuga continua de claves?",
          de: "Welche fundamentale kryptographische Annahme wird verletzt, wenn eine Blockchain sowohl perfekte Forward Secrecy als auch Post-Compromise Security gleichzeitig im kontinuierlichen Schlüssel-Leakage-Modell erreicht?",
          nl: "Welke fundamentele cryptografische aanname wordt geschonden wanneer een blockchain zowel perfecte forward secrecy als post-compromise security gelijktijdig bereikt in het continue sleutel-lekkage model?"
        },
        options: [
          {
            en: "The impossibility of self-healing in the presence of continuous leakage",
            es: "La imposibilidad de auto-sanación en presencia de fuga continua",
            de: "Die Unmöglichkeit der Selbstheilung bei kontinuierlicher Leckage",
            nl: "De onmogelijkheid van zelf-genezing in aanwezigheid van continue lekkage"
          },
          {
            en: "The bounded storage assumption for adversarial memory",
            es: "La suposición de almacenamiento limitado para la memoria adversarial",
            de: "Die begrenzte Speicherannahme für adversariales Gedächtnis",
            nl: "De begrensde opslag aanname voor adversarieel geheugen"
          },
          {
            en: "The non-committing encryption impossibility in the standard model",
            es: "La imposibilidad de cifrado no comprometedor en el modelo estándar",
            de: "Die Non-Committing Encryption Unmöglichkeit im Standardmodell",
            nl: "De non-committing encryptie onmogelijkheid in het standaard model"
          },
          {
            en: "The erasure-free adversarial model requirement",
            es: "El requisito del modelo adversarial libre de borrado",
            de: "Die Anforderung des löschfreien adversarialen Modells",
            nl: "De wisvrije adversariële model vereiste"
          }
        ],
        correct: 0,
        explanation: {
          en: "Perfect forward secrecy and post-compromise security are fundamentally incompatible in continuous leakage models because achieving both requires the system to simultaneously 'forget' past states and 'recover' from future compromises, violating the self-healing impossibility theorem.",
          es: "El secreto hacia adelante perfecto y la seguridad post-compromiso son fundamentalmente incompatibles en modelos de fuga continua porque lograr ambos requiere que el sistema simultáneamente 'olvide' estados pasados y se 'recupere' de compromisos futuros, violando el teorema de imposibilidad de auto-sanación.",
          de: "Perfekte Forward Secrecy und Post-Compromise Security sind in kontinuierlichen Leakage-Modellen grundsätzlich unvereinbar, da das Erreichen beider erfordert, dass das System gleichzeitig vergangene Zustände 'vergisst' und sich von zukünftigen Kompromittierungen 'erholt', was das Selbstheilungs-Unmöglichkeitstheorem verletzt.",
          nl: "Perfecte forward secrecy en post-compromise security zijn fundamenteel incompatibel in continue lekkage modellen omdat het bereiken van beide vereist dat het systeem gelijktijdig vroegere toestanden 'vergeet' en 'herstelt' van toekomstige compromissen, wat het zelf-genezing onmogelijkheidstheorema schendt."
        }
      },
      {
        question: {
          en: "In the context of Incrementally Verifiable Computation (IVC), what mathematical structure is required for the folding scheme to maintain perfect completeness under adversarial accumulator manipulation?",
          es: "En el contexto de Computación Incrementalmente Verificable (IVC), ¿qué estructura matemática se requiere para que el esquema de plegado mantenga completitud perfecta bajo manipulación adversarial del acumulador?",
          de: "Im Kontext der Incrementally Verifiable Computation (IVC), welche mathematische Struktur ist erforderlich, damit das Folding-Schema perfekte Vollständigkeit unter adversarialer Akkumulator-Manipulation aufrechterhält?",
          nl: "In de context van Incrementally Verifiable Computation (IVC), welke wiskundige structuur is vereist voor het folding schema om perfecte volledigheid te behouden onder adversariële accumulator manipulatie?"
        },
        options: [
          {
            en: "A homomorphic commitment scheme with extractable binding",
            es: "Un esquema de compromiso homomórfico con vinculación extraíble",
            de: "Ein homomorphes Commitment-Schema mit extrahierbarer Bindung",
            nl: "Een homomorf commitment schema met extraheerbare binding"
          },
          {
            en: "A collision-resistant accumulator with witness indistinguishability",
            es: "Un acumulador resistente a colisiones con indistinguibilidad de testigos",
            de: "Ein kollisionsresistenter Akkumulator mit Zeugen-Ununterscheidbarkeit",
            nl: "Een botsingsbestendige accumulator met getuige ononderscheidbaarheid"
          },
          {
            en: "A bilinear group with efficient pairing and trusted setup",
            es: "Un grupo bilineal con emparejamiento eficiente y configuración confiable",
            de: "Eine bilineare Gruppe mit effizienter Paarung und vertrauensvoller Einrichtung",
            nl: "Een bilineaire groep met efficiënte pairing en vertrouwde setup"
          },
          {
            en: "A polynomial commitment with degree-hiding and simulation extractability",
            es: "Un compromiso polinomial con ocultación de grado y extractabilidad de simulación",
            de: "Ein polynomiales Commitment mit Grad-Verschleierung und Simulations-Extrahierbarkeit",
            nl: "Een polynomiaal commitment met graad-verberging en simulatie extracteerbaarheid"
          }
        ],
        correct: 3,
        explanation: {
          en: "IVC folding schemes require polynomial commitments with both degree-hiding (to prevent leakage about computation structure) and simulation extractability (to ensure soundness even when the adversary sees simulated proofs), which is essential for maintaining completeness under accumulator manipulation.",
          es: "Los esquemas de plegado IVC requieren compromisos polinomiales con ocultación de grado (para prevenir filtración sobre la estructura de computación) y extractabilidad de simulación (para asegurar solidez incluso cuando el adversario ve pruebas simuladas), lo cual es esencial para mantener completitud bajo manipulación del acumulador.",
          de: "IVC-Folding-Schemas erfordern polynomiale Commitments mit sowohl Grad-Verschleierung (um Leckage über die Berechnungsstruktur zu verhindern) als auch Simulations-Extrahierbarkeit (um Soundness auch dann zu gewährleisten, wenn der Adversary simulierte Beweise sieht), was für die Aufrechterhaltung der Vollständigkeit unter Akkumulator-Manipulation wesentlich ist.",
          nl: "IVC folding schema's vereisen polynomiale commitments met zowel graad-verberging (om lekkage over computatie structuur te voorkomen) als simulatie extracteerbaarheid (om soundness te verzekeren zelfs wanneer de tegenstander gesimuleerde bewijzen ziet), wat essentieel is voor het behouden van volledigheid onder accumulator manipulatie."
        }
      },
      {
        question: {
          en: "What is the fundamental barrier that prevents achieving sub-exponential security reduction tightness in lattice-based cryptography under the Learning With Errors (LWE) assumption?",
          es: "¿Cuál es la barrera fundamental que impide lograr estrechez de reducción de seguridad sub-exponencial en criptografía basada en retículas bajo la suposición de Aprender Con Errores (LWE)?",
          de: "Was ist die fundamentale Barriere, die das Erreichen einer sub-exponentiellen Sicherheitsreduktions-Strenge in gitterbasierten Kryptographie unter der Learning With Errors (LWE) Annahme verhindert?",
          nl: "Wat is de fundamentele barrière die het bereiken van sub-exponentiële beveiligingsreductie strakheid in rooster-gebaseerde cryptografie onder de Learning With Errors (LWE) aanname voorkomt?"
        },
        options: [
          {
            en: "The noise flooding requirement in the reduction argument",
            es: "El requisito de inundación de ruido en el argumento de reducción",
            de: "Die Rausch-Flutungs-Anforderung im Reduktionsargument",
            nl: "De ruis overstroming vereiste in het reductie argument"
          },
          {
            en: "The dimension-noise trade-off in the worst-case to average-case reduction",
            es: "El intercambio dimensión-ruido en la reducción de peor caso a caso promedio",
            de: "Der Dimensions-Rausch-Kompromiss in der Worst-Case zu Average-Case Reduktion",
            nl: "De dimensie-ruis afweging in de slechtste geval naar gemiddelde geval reductie"
          },
          {
            en: "The quantum versus classical hardness gap for lattice problems",
            es: "La brecha de dureza cuántica versus clásica para problemas de retícula",
            de: "Die Quantum-versus-Klassische Härtelücke für Gitterprobleme",
            nl: "De quantum versus klassieke hardheid kloof voor rooster problemen"
          },
          {
            en: "The approximation factor limitation in the shortest vector problem",
            es: "La limitación del factor de aproximación en el problema del vector más corto",
            de: "Die Approximationsfaktor-Begrenzung im kürzesten Vektorproblem",
            nl: "De benadering factor beperking in het kortste vector probleem"
          }
        ],
        correct: 1,
        explanation: {
          en: "The fundamental barrier is the dimension-noise trade-off inherent in the worst-case to average-case reduction for LWE. Achieving tighter reductions requires either increasing the dimension (making the problem harder) or decreasing the noise (making LWE easier), creating an unavoidable tension that prevents sub-exponential tightness.",
          es: "La barrera fundamental es el intercambio dimensión-ruido inherente en la reducción de peor caso a caso promedio para LWE. Lograr reducciones más estrictas requiere aumentar la dimensión (haciendo el problema más difícil) o disminuir el ruido (haciendo LWE más fácil), creando una tensión inevitable que impide la estrechez sub-exponencial.",
          de: "Die fundamentale Barriere ist der Dimensions-Rausch-Kompromiss, der der Worst-Case zu Average-Case Reduktion für LWE innewohnt. Das Erreichen strafferer Reduktionen erfordert entweder eine Erhöhung der Dimension (was das Problem schwieriger macht) oder eine Verringerung des Rauschens (was LWE einfacher macht), was eine unvermeidliche Spannung schafft, die sub-exponentielle Strenge verhindert.",
          nl: "De fundamentele barrière is de dimensie-ruis afweging inherent aan de slechtste geval naar gemiddelde geval reductie voor LWE. Het bereiken van strakkere reducties vereist ofwel het verhogen van de dimensie (waardoor het probleem moeilijker wordt) of het verlagen van de ruis (waardoor LWE makkelijker wordt), wat een onvermijdelijke spanning creëert die sub-exponentiële strakheid voorkomt."
        }
      },
      {
        question: {
          en: "In Multi-Party Computation with Covert Security, what mathematical property ensures that the probability of detecting malicious behavior approaches 1 as the number of parallel executions increases?",
          es: "En Computación Multi-Parte con Seguridad Encubierta, ¿qué propiedad matemática asegura que la probabilidad de detectar comportamiento malicioso se acerque a 1 a medida que aumenta el número de ejecuciones paralelas?",
          de: "In Multi-Party Computation mit Covert Security, welche mathematische Eigenschaft stellt sicher, dass die Wahrscheinlichkeit der Erkennung bösartigen Verhaltens sich 1 nähert, wenn die Anzahl paralleler Ausführungen steigt?",
          nl: "In Multi-Party Computation met Covert Security, welke wiskundige eigenschap zorgt ervoor dat de kans op het detecteren van kwaadaardig gedrag nadert tot 1 naarmate het aantal parallelle uitvoeringen toeneemt?"
        },
        options: [
          {
            en: "The exponential concentration of the binomial distribution",
            es: "La concentración exponencial de la distribución binomial",
            de: "Die exponentielle Konzentration der Binomialverteilung",
            nl: "De exponentiële concentratie van de binomiale verdeling"
          },
          {
            en: "The statistical independence of challenge-response pairs",
            es: "La independencia estadística de pares desafío-respuesta",
            de: "Die statistische Unabhängigkeit von Challenge-Response-Paaren",
            nl: "De statistische onafhankelijkheid van uitdaging-reactie paren"
          },
          {
            en: "The threshold secret sharing reconstruction property",
            es: "La propiedad de reconstrucción de compartición de secretos de umbral",
            de: "Die Threshold Secret Sharing Rekonstruktionseigenschaft",
            nl: "De drempel geheim delen reconstructie eigenschap"
          },
          {
            en: "The cut-and-choose amplification via Chernoff bound",
            es: "La amplificación de cortar y elegir vía límite de Chernoff",
            de: "Die Cut-and-Choose Verstärkung über Chernoff-Schranke",
            nl: "De knippen-en-kiezen versterking via Chernoff grens"
          }
        ],
        correct: 3,
        explanation: {
          en: "Covert security relies on cut-and-choose amplification where the detection probability is amplified through parallel executions. The Chernoff bound guarantees exponential concentration, ensuring that with high probability, a sufficient fraction of executions will be checked to detect malicious behavior.",
          es: "La seguridad encubierta se basa en la amplificación de cortar y elegir donde la probabilidad de detección se amplifica a través de ejecuciones paralelas. El límite de Chernoff garantiza concentración exponencial, asegurando que con alta probabilidad, una fracción suficiente de ejecuciones será verificada para detectar comportamiento malicioso.",
          de: "Covert Security beruht auf Cut-and-Choose Verstärkung, bei der die Erkennungswahrscheinlichkeit durch parallele Ausführungen verstärkt wird. Die Chernoff-Schranke garantiert exponentielle Konzentration und stellt sicher, dass mit hoher Wahrscheinlichkeit ein ausreichender Anteil der Ausführungen überprüft wird, um bösartiges Verhalten zu erkennen.",
          nl: "Covert security berust op knippen-en-kiezen versterking waarbij de detectiekans wordt versterkt door parallelle uitvoeringen. De Chernoff grens garandeert exponentiële concentratie, waardoor met hoge waarschijnlijkheid een voldoende fractie van uitvoeringen wordt gecontroleerd om kwaadaardig gedrag te detecteren."
        }
      },
      {
        question: {
          en: "What fundamental impossibility result explains why Byzantine Fault Tolerant consensus cannot achieve both optimal resilience (f < n/3) and optimal communication complexity (O(n²)) simultaneously in asynchronous networks?",
          es: "¿Qué resultado fundamental de imposibilidad explica por qué el consenso Tolerante a Fallas Bizantinas no puede lograr tanto resistencia óptima (f < n/3) como complejidad de comunicación óptima (O(n²)) simultáneamente en redes asíncronas?",
          de: "Welches fundamentale Unmöglichkeitsergebnis erklärt, warum Byzantine Fault Tolerant Konsens nicht sowohl optimale Widerstandsfähigkeit (f < n/3) als auch optimale Kommunikationskomplexität (O(n²)) gleichzeitig in asynchronen Netzwerken erreichen kann?",
          nl: "Welk fundamenteel onmogelijkheidsresultaat verklaart waarom Byzantine Fault Tolerant consensus niet zowel optimale veerkracht (f < n/3) als optimale communicatie complexiteit (O(n²)) gelijktijdig kan bereiken in asynchrone netwerken?"
        },
        options: [
          {
            en: "The FLP impossibility theorem for deterministic consensus",
            es: "El teorema de imposibilidad FLP para consenso determinístico",
            de: "Das FLP-Unmöglichkeitstheorem für deterministischen Konsens",
            nl: "Het FLP onmogelijkheidstheorema voor deterministische consensus"
          },
          {
            en: "The Dolev-Reischuk lower bound for Byzantine agreement",
            es: "El límite inferior de Dolev-Reischuk para acuerdo Bizantino",
            de: "Die Dolev-Reischuk Untergrenze für Byzantine Agreement",
            nl: "De Dolev-Reischuk ondergrens voor Byzantine agreement"
          },
          {
            en: "The CAP theorem constraint on distributed consistency",
            es: "La restricción del teorema CAP en consistencia distribuida",
            de: "Die CAP-Theorem Beschränkung bei verteilter Konsistenz",
            nl: "De CAP theorema beperking op gedistribueerde consistentie"
          },
          {
            en: "The impossibility of simultaneous broadcast in asynchronous systems",
            es: "La imposibilidad de difusión simultánea en sistemas asíncronos",
            de: "Die Unmöglichkeit simultaner Broadcast in asynchronen Systemen",
            nl: "De onmogelijkheid van gelijktijdige broadcast in asynchrone systemen"
          }
        ],
        correct: 1,
        explanation: {
          en: "The Dolev-Reischuk lower bound proves that any Byzantine agreement protocol that tolerates f failures requires Ω(n²) communication complexity in the worst case. This creates a fundamental trade-off: achieving optimal resilience f < n/3 while maintaining optimal communication O(n²) is impossible.",
          es: "El límite inferior de Dolev-Reischuk prueba que cualquier protocolo de acuerdo Bizantino que tolere f fallas requiere complejidad de comunicación Ω(n²) en el peor caso. Esto crea un intercambio fundamental: lograr resistencia óptima f < n/3 mientras se mantiene comunicación óptima O(n²) es imposible.",
          de: "Die Dolev-Reischuk Untergrenze beweist, dass jedes Byzantine Agreement Protokoll, das f Ausfälle toleriert, Ω(n²) Kommunikationskomplexität im schlimmsten Fall erfordert. Dies schafft einen fundamentalen Kompromiss: optimale Widerstandsfähigkeit f < n/3 bei gleichzeitiger Aufrechterhaltung optimaler Kommunikation O(n²) zu erreichen ist unmöglich.",
          nl: "De Dolev-Reischuk ondergrens bewijst dat elk Byzantine agreement protocol dat f fouten tolereert Ω(n²) communicatie complexiteit vereist in het slechtste geval. Dit creëert een fundamentele afweging: het bereiken van optimale veerkracht f < n/3 terwijl optimale communicatie O(n²) wordt behouden is onmogelijk."
        }
      },
      {
        question: {
          en: "In the context of Verifiable Delay Functions (VDFs), what cryptographic property ensures that parallel computation cannot significantly reduce the sequential work required?",
          es: "En el contexto de Funciones de Retraso Verificables (VDFs), ¿qué propiedad criptográfica asegura que la computación paralela no pueda reducir significativamente el trabajo secuencial requerido?",
          de: "Im Kontext von Verifiable Delay Functions (VDFs), welche kryptographische Eigenschaft stellt sicher, dass parallele Berechnung die erforderliche sequenzielle Arbeit nicht signifikant reduzieren kann?",
          nl: "In de context van Verifiable Delay Functions (VDFs), welke cryptografische eigenschap zorgt ervoor dat parallelle berekening het vereiste sequentiële werk niet significant kan verminderen?"
        },
        options: [
          {
            en: "The inherent sequentiality of modular exponentiation chains",
            es: "La secuencialidad inherente de las cadenas de exponenciación modular",
            de: "Die inhärente Sequenzialität von modularen Exponentiationsketten",
            nl: "De inherente sequentialiteit van modulaire exponentiatie ketens"
          },
          {
            en: "The time-lock encryption with witness indistinguishability",
            es: "El cifrado de bloqueo temporal con indistinguibilidad de testigos",
            de: "Die Time-Lock Verschlüsselung mit Zeugen-Ununterscheidbarkeit",
            nl: "De tijd-slot encryptie met getuige ononderscheidbaarheid"
          },
          {
            en: "The computational depth versus parallel time separation",
            es: "La separación de profundidad computacional versus tiempo paralelo",
            de: "Die Trennung von Berechnungstiefe versus paralleler Zeit",
            nl: "De scheiding van computationele diepte versus parallelle tijd"
          },
          {
            en: "The random oracle assumption for sequential function evaluation",
            es: "La suposición de oráculo aleatorio para evaluación de función secuencial",
            de: "Die Random Oracle Annahme für sequenzielle Funktionsevaluierung",
            nl: "De willekeurige orakel aanname voor sequentiële functie evaluatie"
          }
        ],
        correct: 2,
        explanation: {
          en: "VDFs rely on the computational depth versus parallel time separation, meaning that even with unlimited parallelism, certain computations require a minimum sequential depth that cannot be parallelized, creating an inherent time delay that parallel computation cannot circumvent.",
          es: "Los VDFs se basan en la separación de profundidad computacional versus tiempo paralelo, lo que significa que incluso con paralelismo ilimitado, ciertas computaciones requieren una profundidad secuencial mínima que no puede ser paralelizada, creando un retraso temporal inherente que la computación paralela no puede eludir.",
          de: "VDFs beruhen auf der Trennung von Berechnungstiefe versus paralleler Zeit, was bedeutet, dass selbst bei unbegrenztem Parallelismus bestimmte Berechnungen eine minimale sequenzielle Tiefe erfordern, die nicht parallelisiert werden kann, wodurch eine inhärente Zeitverzögerung entsteht, die parallele Berechnung nicht umgehen kann.",
          nl: "VDFs vertrouwen op de scheiding van computationele diepte versus parallelle tijd, wat betekent dat zelfs met onbeperkte parallellisatie, bepaalde berekeningen een minimale sequentiële diepte vereisen die niet geparallelliseerd kan worden, waardoor een inherente tijdvertraging ontstaat die parallelle berekening niet kan omzeilen."
        }
      },
      {
        question: {
          en: "What mathematical structure underlies the impossibility of achieving adaptive security for Identity-Based Encryption (IBE) schemes without complexity leveraging or random oracles?",
          es: "¿Qué estructura matemática subyace a la imposibilidad de lograr seguridad adaptiva para esquemas de Cifrado Basado en Identidad (IBE) sin aprovechamiento de complejidad u oráculos aleatorios?",
          de: "Welche mathematische Struktur liegt der Unmöglichkeit zugrunde, adaptive Sicherheit für Identity-Based Encryption (IBE) Schemas ohne Komplexitätsleveraging oder Random Oracles zu erreichen?",
          nl: "Welke wiskundige structuur ligt ten grondslag aan de onmogelijkheid om adaptieve beveiliging te bereiken voor Identity-Based Encryption (IBE) schema's zonder complexiteit leveraging of willekeurige orakels?"
        },
        options: [
          {
            en: "The committing versus non-committing encryption dichotomy",
            es: "La dicotomía de cifrado comprometedor versus no comprometedor",
            de: "Die Dichotomie zwischen Committing und Non-Committing Encryption",
            nl: "De dichotomie tussen committing versus non-committing encryptie"
          },
          {
            en: "The partitioning strategy failure in the standard model",
            es: "El fallo de la estrategia de particionamiento en el modelo estándar",
            de: "Das Versagen der Partitionierungsstrategie im Standardmodell",
            nl: "Het falen van de partitionering strategie in het standaard model"
          },
          {
            en: "The selective versus adaptive indistinguishability gap",
            es: "La brecha de indistinguibilidad selectiva versus adaptiva",
            de: "Die Lücke zwischen selektiver und adaptiver Ununterscheidbarkeit",
            nl: "De selectieve versus adaptieve ononderscheidbaarheid kloof"
          },
          {
            en: "The dual system encryption methodology limitation",
            es: "La limitación de la metodología de cifrado de sistema dual",
            de: "Die Begrenzung der Dual System Encryption Methodologie",
            nl: "De dual systeem encryptie methodologie beperking"
          }
        ],
        correct: 1,
        explanation: {
          en: "The partitioning strategy failure in the standard model is the core mathematical barrier. IBE security proofs typically require partitioning the identity space, but adaptive adversaries can choose identities after seeing public parameters, making it impossible to guess which identities to prepare for without complexity leveraging.",
          es: "El fallo de la estrategia de particionamiento en el modelo estándar es la barrera matemática central. Las pruebas de seguridad de IBE típicamente requieren particionar el espacio de identidades, pero los adversarios adaptativos pueden elegir identidades después de ver parámetros públicos, haciendo imposible adivinar para qué identidades prepararse sin aprovechamiento de complejidad.",
          de: "Das Versagen der Partitionierungsstrategie im Standardmodell ist die zentrale mathematische Barriere. IBE-Sicherheitsbeweise erfordern typischerweise die Partitionierung des Identitätsraums, aber adaptive Adversaries können Identitäten nach dem Sehen öffentlicher Parameter wählen, was es unmöglich macht zu erraten, für welche Identitäten man sich ohne Komplexitätsleveraging vorbereiten sollte.",
          nl: "Het falen van de partitionering strategie in het standaard model is de kernwiskundige barrière. IBE beveiligingsbewijzen vereisen typisch het partitioneren van de identiteitsruimte, maar adaptieve tegenstanders kunnen identiteiten kiezen na het zien van publieke parameters, waardoor het onmogelijk wordt te raden voor welke identiteiten men zich moet voorbereiden zonder complexiteit leveraging."
        }
      },
      {
        question: {
          en: "In lattice-based Post-Quantum Cryptography, what fundamental trade-off prevents achieving both CCA2 security and compact ciphertexts without structured assumptions beyond Ring-LWE?",
          es: "En criptografía post-cuántica basada en retículas, ¿qué intercambio fundamental impide lograr tanto seguridad CCA2 como textos cifrados compactos sin suposiciones estructuradas más allá de Ring-LWE?",
          de: "In gitterbasierten Post-Quanten-Kryptographie, welcher fundamentale Kompromiss verhindert das Erreichen sowohl von CCA2-Sicherheit als auch kompakten Chiffretexten ohne strukturierte Annahmen jenseits von Ring-LWE?",
          nl: "In rooster-gebaseerde Post-Quantum Cryptografie, welke fundamentele afweging voorkomt het bereiken van zowel CCA2 beveiliging als compacte cijferteksten zonder gestructureerde aannames voorbij Ring-LWE?"
        },
        options: [
          {
            en: "The decryption error versus ciphertext expansion dilemma",
            es: "El dilema de error de descifrado versus expansión de texto cifrado",
            de: "Das Entschlüsselungsfehler versus Chiffretext-Expansion Dilemma",
            nl: "Het ontsleuteling fout versus cijfertekst uitbreiding dilemma"
          },
          {
            en: "The noise growth in homomorphic evaluation chains",
            es: "El crecimiento de ruido en cadenas de evaluación homomórfica",
            de: "Das Rauschwachstum in homomorphen Evaluationsketten",
            nl: "De ruis groei in homomorfische evaluatie ketens"
          },
          {
            en: "The key-switching matrix size explosion",
            es: "La explosión del tamaño de la matriz de cambio de clave",
            de: "Die Key-Switching Matrix Größenexplosion",
            nl: "De sleutel-wissel matrix grootte explosie"
          },
          {
            en: "The relinearization complexity versus security reduction tightness",
            es: "La complejidad de relinealización versus estrechez de reducción de seguridad",
            de: "Die Relinearisierungs-Komplexität versus Sicherheitsreduktions-Strenge",
            nl: "De relinearisatie complexiteit versus beveiligingsreductie strakheid"
          }
        ],
        correct: 0,
        explanation: {
          en: "The fundamental trade-off is between decryption error probability and ciphertext expansion. CCA2 security requires error-free decryption with high probability, but compact ciphertexts limit noise tolerance. This forces either larger ciphertexts or stronger structured assumptions like Module-LWE beyond Ring-LWE.",
          es: "El intercambio fundamental es entre la probabilidad de error de descifrado y la expansión del texto cifrado. La seguridad CCA2 requiere descifrado sin errores con alta probabilidad, pero los textos cifrados compactos limitan la tolerancia al ruido. Esto fuerza textos cifrados más grandes o suposiciones estructuradas más fuertes como Module-LWE más allá de Ring-LWE.",
          de: "Der fundamentale Kompromiss liegt zwischen Entschlüsselungsfehler-Wahrscheinlichkeit und Chiffretext-Expansion. CCA2-Sicherheit erfordert fehlerfreie Entschlüsselung mit hoher Wahrscheinlichkeit, aber kompakte Chiffretexte begrenzen die Rauschtoleranz. Dies erzwingt entweder größere Chiffretexte oder stärkere strukturierte Annahmen wie Module-LWE jenseits von Ring-LWE.",
          nl: "De fundamentele afweging is tussen ontsleuteling fout waarschijnlijkheid en cijfertekst uitbreiding. CCA2 beveiliging vereist foutloze ontsleuteling met hoge waarschijnlijkheid, maar compacte cijferteksten beperken ruis tolerantie. Dit dwingt ofwel grotere cijferteksten of sterkere gestructureerde aannames zoals Module-LWE voorbij Ring-LWE."
        }
      },
      {
        question: {
          en: "What information-theoretic limitation fundamentally constrains the efficiency of Zero-Knowledge Proofs of Knowledge (ZKPoK) for NP-complete problems in the plain model?",
          es: "¿Qué limitación teórica de información limita fundamentalmente la eficiencia de las Pruebas de Conocimiento de Conocimiento Cero (ZKPoK) para problemas NP-completos en el modelo plano?",
          de: "Welche informationstheoretische Begrenzung beschränkt fundamental die Effizienz von Zero-Knowledge Proofs of Knowledge (ZKPoK) für NP-vollständige Probleme im Plain-Modell?",
          nl: "Welke informatietheorische beperking beperkt fundamenteel de efficiëntie van Zero-Knowledge Proofs of Knowledge (ZKPoK) voor NP-complete problemen in het gewone model?"
        },
        options: [
          {
            en: "The communication complexity lower bound from query complexity",
            es: "El límite inferior de complejidad de comunicación de la complejidad de consulta",
            de: "Die Kommunikationskomplexitäts-Untergrenze aus der Query-Komplexität",
            nl: "De communicatie complexiteit ondergrens van query complexiteit"
          },
          {
            en: "The soundness error versus round complexity trade-off",
            es: "El intercambio de error de solidez versus complejidad de rondas",
            de: "Der Soundness-Fehler versus Rundenkomplexitäts-Kompromiss",
            nl: "De soundness fout versus ronde complexiteit afweging"
          },
          {
            en: "The prover complexity versus verifier efficiency paradox",
            es: "La paradoja de complejidad del probador versus eficiencia del verificador",
            de: "Das Beweiser-Komplexität versus Verifizierer-Effizienz Paradox",
            nl: "De bewijzer complexiteit versus verifieerder efficiëntie paradox"
          },
          {
            en: "The witness encoding versus simulation indistinguishability constraint",
            es: "La restricción de codificación de testigos versus indistinguibilidad de simulación",
            de: "Die Zeugen-Kodierung versus Simulations-Ununterscheidbarkeits-Beschränkung",
            nl: "De getuige codering versus simulatie ononderscheidbaarheid beperking"
          }
        ],
        correct: 0,
        explanation: {
          en: "The communication complexity lower bound derived from query complexity theory provides the fundamental constraint. For NP-complete problems, any ZKPoK must have communication proportional to the witness size in the worst case, as the verifier must gain enough information to be convinced while the zero-knowledge property limits information transfer.",
          es: "El límite inferior de complejidad de comunicación derivado de la teoría de complejidad de consulta proporciona la restricción fundamental. Para problemas NP-completos, cualquier ZKPoK debe tener comunicación proporcional al tamaño del testigo en el peor caso, ya que el verificador debe obtener suficiente información para ser convencido mientras que la propiedad de conocimiento cero limita la transferencia de información.",
          de: "Die Kommunikationskomplexitäts-Untergrenze, die aus der Query-Komplexitätstheorie abgeleitet wird, liefert die fundamentale Beschränkung. Für NP-vollständige Probleme muss jedes ZKPoK im schlimmsten Fall Kommunikation proportional zur Zeugengröße haben, da der Verifizierer genügend Informationen erhalten muss, um überzeugt zu werden, während die Zero-Knowledge-Eigenschaft den Informationstransfer begrenzt.",
          nl: "De communicatie complexiteit ondergrens afgeleid van query complexiteit theorie biedt de fundamentele beperking. Voor NP-complete problemen moet elke ZKPoK communicatie hebben die proportioneel is aan de getuige grootte in het slechtste geval, omdat de verifieerder genoeg informatie moet krijgen om overtuigd te worden terwijl de zero-knowledge eigenschap informatieoverdracht beperkt."
        }
      },
      {
        question: {
          en: "In the context of Functional Encryption with indistinguishability-based security, what mathematical barrier prevents achieving simulation-based security for general functionalities without indistinguishability obfuscation?",
          es: "En el contexto de Cifrado Funcional con seguridad basada en indistinguibilidad, ¿qué barrera matemática impide lograr seguridad basada en simulación para funcionalidades generales sin ofuscación de indistinguibilidad?",
          de: "Im Kontext von Functional Encryption mit ununterscheidbarkeitsbasierter Sicherheit, welche mathematische Barriere verhindert das Erreichen simulationsbasierter Sicherheit für allgemeine Funktionalitäten ohne Indistinguishability Obfuscation?",
          nl: "In de context van Functional Encryption met ononderscheidbaarheidgebaseerde beveiliging, welke wiskundige barrière voorkomt het bereiken van simulatiegebaseerde beveiliging voor algemene functionaliteiten zonder indistinguishability obfuscation?"
        },
        options: [
          {
            en: "The impossibility of general virtual black-box obfuscation",
            es: "La imposibilidad de ofuscación general de caja negra virtual",
            de: "Die Unmöglichkeit der allgemeinen virtuellen Black-Box Obfuskation",
            nl: "De onmogelijkheid van algemene virtuele black-box obfuscation"
          },
          {
            en: "The selective versus adaptive security gap for functional keys",
            es: "La brecha de seguridad selectiva versus adaptiva para claves funcionales",
            de: "Die Lücke zwischen selektiver und adaptiver Sicherheit für funktionale Schlüssel",
            nl: "De selectieve versus adaptieve beveiligingskloof voor functionele sleutels"
          },
          {
            en: "The simulation paradigm breakdown for complex functionalities",
            es: "La ruptura del paradigma de simulación para funcionalidades complejas",
            de: "Der Zusammenbruch des Simulationsparadigmas für komplexe Funktionalitäten",
            nl: "De simulatie paradigma afbraak voor complexe functionaliteiten"
          },
          {
            en: "The bounded collusion assumption versus unbounded adversaries",
            es: "La suposición de colusión limitada versus adversarios ilimitados",
            de: "Die begrenzte Kollusions-Annahme versus unbegrenzte Adversaries",
            nl: "De begrensde samenzwering aanname versus onbegrensde tegenstanders"
          }
        ],
        correct: 2,
        explanation: {
          en: "The simulation paradigm breakdown for complex functionalities is the core barrier. For general functions, a simulator must produce functional keys that enable the same computations as real keys but without access to the plaintext. This becomes impossible for complex functionalities without additional assumptions like iO.",
          es: "La ruptura del paradigma de simulación para funcionalidades complejas es la barrera central. Para funciones generales, un simulador debe producir claves funcionales que permitan las mismas computaciones que las claves reales pero sin acceso al texto plano. Esto se vuelve imposible para funcionalidades complejas sin suposiciones adicionales como iO.",
          de: "Der Zusammenbruch des Simulationsparadigmas für komplexe Funktionalitäten ist die zentrale Barriere. Für allgemeine Funktionen muss ein Simulator funktionale Schlüssel produzieren, die dieselben Berechnungen wie echte Schlüssel ermöglichen, aber ohne Zugang zum Klartext. Dies wird für komplexe Funktionalitäten ohne zusätzliche Annahmen wie iO unmöglich.",
          nl: "De simulatie paradigma afbraak voor complexe functionaliteiten is de kernbarrière. Voor algemene functies moet een simulator functionele sleutels produceren die dezelfde berekeningen mogelijk maken als echte sleutels maar zonder toegang tot de platte tekst. Dit wordt onmogelijk voor complexe functionaliteiten zonder aanvullende aannames zoals iO."
        }
      },
      {
        question: {
          en: "What complexity-theoretic assumption underlies the hardness of the Unique Shortest Vector Problem (uSVP) that makes it potentially easier than the general Shortest Vector Problem (SVP) in high dimensions?",
          es: "¿Qué suposición teórica de complejidad subyace a la dureza del Problema del Vector Más Corto Único (uSVP) que lo hace potencialmente más fácil que el Problema del Vector Más Corto general (SVP) en altas dimensiones?",
          de: "Welche komplexitätstheoretische Annahme liegt der Härte des Unique Shortest Vector Problem (uSVP) zugrunde, die es in hohen Dimensionen möglicherweise einfacher macht als das allgemeine Shortest Vector Problem (SVP)?",
          nl: "Welke complexiteittheoretische aanname ligt ten grondslag aan de hardheid van het Unique Shortest Vector Problem (uSVP) dat het mogelijk makkelijker maakt dan het algemene Shortest Vector Problem (SVP) in hoge dimensies?"
        },
        options: [
          {
            en: "The existence of a unique shortest vector with polynomial gap",
            es: "La existencia de un vector más corto único con brecha polinomial",
            de: "Die Existenz eines eindeutigen kürzesten Vektors mit polynomialer Lücke",
            nl: "Het bestaan van een unieke kortste vector met polynomiale kloof"
          },
          {
            en: "The quantum versus classical approximation factor separation",
            es: "La separación del factor de aproximación cuántico versus clásico",
            de: "Die Quantum-versus-Klassische Approximationsfaktor-Trennung",
            nl: "De quantum versus klassieke benadering factor scheiding"
          },
          {
            en: "The lattice basis reduction algorithm efficiency improvement",
            es: "La mejora de eficiencia del algoritmo de reducción de base de retícula",
            de: "Die Effizienzverbesserung des Gitterbasis-Reduktionsalgorithmus",
            nl: "De rooster basis reductie algoritme efficiëntie verbetering"
          },
          {
            en: "The geometric series convergence in high-dimensional spheres",
            es: "La convergencia de series geométricas en esferas de alta dimensión",
            de: "Die geometrische Reihenkonvergenz in hochdimensionalen Sphären",
            nl: "De geometrische reeks convergentie in hoogdimensionale sferen"
          }
        ],
        correct: 0,
        explanation: {
          en: "The uSVP assumption relies on the existence of a unique shortest vector with a polynomial gap, meaning the shortest vector is significantly shorter than all other vectors. This additional structure potentially makes the problem easier than general SVP, where multiple short vectors may exist without clear separation.",
          es: "La suposición uSVP se basa en la existencia de un vector más corto único con una brecha polinomial, lo que significa que el vector más corto es significativamente más corto que todos los otros vectores. Esta estructura adicional potencialmente hace que el problema sea más fácil que el SVP general, donde pueden existir múltiples vectores cortos sin separación clara.",
          de: "Die uSVP-Annahme beruht auf der Existenz eines eindeutigen kürzesten Vektors mit einer polynomialen Lücke, was bedeutet, dass der kürzeste Vektor deutlich kürzer ist als alle anderen Vektoren. Diese zusätzliche Struktur macht das Problem möglicherweise einfacher als das allgemeine SVP, wo mehrere kurze Vektoren ohne klare Trennung existieren können.",
          nl: "De uSVP aanname berust op het bestaan van een unieke kortste vector met een polynomiale kloof, wat betekent dat de kortste vector significant korter is dan alle andere vectoren. Deze aanvullende structuur maakt het probleem mogelijk makkelijker dan algemene SVP, waar meerdere korte vectoren kunnen bestaan zonder duidelijke scheiding."
        }
      },
      {
        question: {
          en: "In Interactive Oracle Proofs (IOPs), what fundamental limitation prevents achieving both polylogarithmic query complexity and constant soundness error simultaneously for NP relations?",
          es: "En Pruebas de Oráculo Interactivas (IOPs), ¿qué limitación fundamental impide lograr tanto complejidad de consulta polivalgarítmica como error de solidez constante simultáneamente para relaciones NP?",
          de: "In Interactive Oracle Proofs (IOPs), welche fundamentale Begrenzung verhindert das gleichzeitige Erreichen sowohl polylogarithmischer Query-Komplexität als auch konstanten Soundness-Fehlers für NP-Relationen?",
          nl: "In Interactive Oracle Proofs (IOPs), welke fundamentele beperking voorkomt het bereiken van zowel polylogaritmische query complexiteit als constante soundness fout gelijktijdig voor NP relaties?"
        },
        options: [
          {
            en: "The tension between local testability and global consistency",
            es: "La tensión entre testabilidad local y consistencia global",
            de: "Die Spannung zwischen lokaler Testbarkeit und globaler Konsistenz",
            nl: "De spanning tussen lokale testbaarheid en globale consistentie"
          },
          {
            en: "The oracle access pattern versus randomness requirement trade-off",
            es: "El intercambio del patrón de acceso al oráculo versus el requisito de aleatoriedad",
            de: "Der Oracle-Zugriffsmuster versus Zufallsanforderungs-Kompromiss",
            nl: "De orakel toegang patroon versus willekeurigheid vereiste afweging"
          },
          {
            en: "The proof length versus verification time exponential gap",
            es: "La brecha exponencial de longitud de prueba versus tiempo de verificación",
            de: "Die exponentielle Lücke zwischen Beweis-Länge und Verifikationszeit",
            nl: "De bewijs lengte versus verificatie tijd exponentiële kloof"
          },
          {
            en: "The interactive rounds versus non-adaptive query limitation",
            es: "La limitación de rondas interactivas versus consulta no adaptiva",
            de: "Die Begrenzung interaktiver Runden versus nicht-adaptiver Queries",
            nl: "De interactieve rondes versus niet-adaptieve query beperking"
          }
        ],
        correct: 0,
        explanation: {
          en: "The fundamental tension is between local testability and global consistency. Achieving constant soundness error requires detecting inconsistencies with constant probability, but polylogarithmic queries can only probe a small fraction of the proof, making it hard to ensure global consistency from local tests.",
          es: "La tensión fundamental es entre testabilidad local y consistencia global. Lograr error de solidez constante requiere detectar inconsistencias con probabilidad constante, pero las consultas polivalgarítmicas solo pueden sondear una pequeña fracción de la prueba, haciendo difícil asegurar consistencia global desde pruebas locales.",
          de: "Die fundamentale Spannung liegt zwischen lokaler Testbarkeit und globaler Konsistenz. Das Erreichen konstanten Soundness-Fehlers erfordert die Erkennung von Inkonsistenzen mit konstanter Wahrscheinlichkeit, aber polylogarithmische Queries können nur einen kleinen Bruchteil des Beweises untersuchen, was es schwer macht, globale Konsistenz aus lokalen Tests zu gewährleisten.",
          nl: "De fundamentele spanning is tussen lokale testbaarheid en globale consistentie. Het bereiken van constante soundness fout vereist het detecteren van inconsistenties met constante waarschijnlijkheid, maar polylogaritmische queries kunnen slechts een klein deel van het bewijs onderzoeken, waardoor het moeilijk wordt om globale consistentie van lokale tests te verzekeren."
        }
      },
      {
        question: {
          en: "What game-theoretic property ensures that Proof-of-Stake consensus remains incentive-compatible under adaptive corruption with bounded rationality assumptions?",
          es: "¿Qué propiedad teórica de juegos asegura que el consenso Proof-of-Stake permanezca compatible con incentivos bajo corrupción adaptiva con suposiciones de racionalidad limitada?",
          de: "Welche spieltheoretische Eigenschaft stellt sicher, dass Proof-of-Stake Konsens unter adaptiver Korruption mit begrenzten Rationalitätsannahmen anreizkompatibel bleibt?",
          nl: "Welke speltheoretische eigenschap zorgt ervoor dat Proof-of-Stake consensus incentief-compatibel blijft onder adaptieve corruptie met begrensde rationaliteit aannames?"
        },
        options: [
          {
            en: "The evolutionary stable strategy (ESS) equilibrium condition",
            es: "La condición de equilibrio de estrategia evolutivamente estable (ESS)",
            de: "Die evolutionär stabile Strategie (ESS) Gleichgewichtsbedingung",
            nl: "De evolutionair stabiele strategie (ESS) evenwicht conditie"
          },
          {
            en: "The subgame perfect equilibrium with reputation effects",
            es: "El equilibrio perfecto de subjuego con efectos de reputación",
            de: "Das teilspielperfekte Gleichgewicht mit Reputationseffekten",
            nl: "Het subspel perfecte evenwicht met reputatie effecten"
          },
          {
            en: "The coalition-proof Nash equilibrium under bounded coalitions",
            es: "El equilibrio de Nash a prueba de coalición bajo coaliciones limitadas",
            de: "Das koalitionssichere Nash-Gleichgewicht unter begrenzten Koalitionen",
            nl: "Het coalitie-proof Nash evenwicht onder begrensde coalities"
          },
          {
            en: "The mechanism design revelation principle with truthful reporting",
            es: "El principio de revelación de diseño de mecanismo con reporte veraz",
            de: "Das Mechanismus-Design Offenbarungsprinzip mit wahrheitsgemäßer Berichterstattung",
            nl: "Het mechanisme ontwerp openbaringsprincipe met waarheidsgetrouwe rapportage"
          }
        ],
        correct: 2,
        explanation: {
          en: "Coalition-proof Nash equilibrium under bounded coalitions is essential for PoS security. It ensures that even when adversaries can adaptively corrupt validators and form coalitions, the honest strategy remains optimal as long as coalition size is bounded below the security threshold (typically 1/3 or 1/2).",
          es: "El equilibrio de Nash a prueba de coalición bajo coaliciones limitadas es esencial para la seguridad de PoS. Asegura que incluso cuando los adversarios pueden corromper adaptativamente a los validadores y formar coaliciones, la estrategia honesta permanece óptima mientras el tamaño de la coalición esté limitado por debajo del umbral de seguridad (típicamente 1/3 o 1/2).",
          de: "Das koalitionssichere Nash-Gleichgewicht unter begrenzten Koalitionen ist für die PoS-Sicherheit wesentlich. Es stellt sicher, dass selbst wenn Adversaries adaptiv Validatoren korrumpieren und Koalitionen bilden können, die ehrliche Strategie optimal bleibt, solange die Koalitionsgröße unter der Sicherheitsschwelle (typischerweise 1/3 oder 1/2) begrenzt ist.",
          nl: "Coalitie-proof Nash evenwicht onder begrensde coalities is essentieel voor PoS beveiliging. Het zorgt ervoor dat zelfs wanneer tegenstanders adaptief validators kunnen corrumperen en coalities kunnen vormen, de eerlijke strategie optimaal blijft zolang de coalitie grootte begrensd is onder de beveiligingsdrempel (typisch 1/3 of 1/2)."
        }
      },
      {
        question: {
          en: "In the context of Succinct Non-interactive Arguments of Knowledge (SNARKs), what mathematical barrier prevents achieving both universal setup and post-quantum security simultaneously?",
          es: "En el contexto de Argumentos Sucintos No Interactivos de Conocimiento (SNARKs), ¿qué barrera matemática impide lograr tanto configuración universal como seguridad post-cuántica simultáneamente?",
          de: "Im Kontext von Succinct Non-interactive Arguments of Knowledge (SNARKs), welche mathematische Barriere verhindert das gleichzeitige Erreichen sowohl universeller Einrichtung als auch Post-Quanten-Sicherheit?",
          nl: "In de context van Succinct Non-interactive Arguments of Knowledge (SNARKs), welke wiskundige barrière voorkomt het bereiken van zowel universele setup als post-quantum beveiliging gelijktijdig?"
        },
        options: [
          {
            en: "The structured reference string dependency on bilinear groups",
            es: "La dependencia de cadena de referencia estructurada en grupos bilineales",
            de: "Die strukturierte Referenzstring-Abhängigkeit von bilinearen Gruppen",
            nl: "De gestructureerde referentie string afhankelijkheid van bilineaire groepen"
          },
          {
            en: "The polynomial commitment scheme quantum vulnerability",
            es: "La vulnerabilidad cuántica del esquema de compromiso polinomial",
            de: "Die Quanten-Verletzlichkeit des polynomialen Commitment-Schemas",
            nl: "De polynomiale commitment schema quantum kwetsbaarheid"
          },
          {
            en: "The knowledge soundness versus computational assumptions conflict",
            es: "El conflicto de solidez de conocimiento versus suposiciones computacionales",
            de: "Der Konflikt zwischen Wissens-Soundness und rechnerischen Annahmen",
            nl: "Het kennis soundness versus computationele aannames conflict"
          },
          {
            en: "The trusted setup elimination versus proof size exponential growth",
            es: "La eliminación de configuración confiable versus crecimiento exponencial del tamaño de prueba",
            de: "Die Vertrauensvolle-Setup-Eliminierung versus exponentielles Beweisgröße-Wachstum",
            nl: "De vertrouwde setup eliminatie versus bewijs grootte exponentiële groei"
          }
        ],
        correct: 1,
        explanation: {
          en: "The polynomial commitment scheme quantum vulnerability is the core barrier. Universal SNARKs typically rely on polynomial commitments like KZG which are based on discrete logarithm assumptions that are broken by quantum computers, making it impossible to achieve both universality and post-quantum security simultaneously.",
          es: "La vulnerabilidad cuántica del esquema de compromiso polinomial es la barrera central. Los SNARKs universales típicamente dependen de compromisos polinomiales como KZG que se basan en suposiciones de logaritmo discreto que son rotas por computadoras cuánticas, haciendo imposible lograr tanto universalidad como seguridad post-cuántica simultáneamente.",
          de: "Die Quanten-Verletzlichkeit des polynomialen Commitment-Schemas ist die zentrale Barriere. Universelle SNARKs beruhen typischerweise auf polynomialen Commitments wie KZG, die auf diskreten Logarithmusannahmen basieren, die von Quantencomputern gebrochen werden, was es unmöglich macht, sowohl Universalität als auch Post-Quanten-Sicherheit gleichzeitig zu erreichen.",
          nl: "De polynomiale commitment schema quantum kwetsbaarheid is de kernbarrière. Universele SNARKs vertrouwen typisch op polynomiale commitments zoals KZG die gebaseerd zijn op discrete logaritme aannames die gebroken worden door quantumcomputers, waardoor het onmogelijk wordt om zowel universaliteit als post-quantum beveiliging gelijktijdig te bereiken."
        }
      },
      {
        question: {
          en: "What information-theoretic bound limits the concrete efficiency of Multi-Party Computation protocols in the presence of malicious adversaries with abort capabilities?",
          es: "¿Qué límite teórico de información limita la eficiencia concreta de los protocolos de Computación Multi-Parte en presencia de adversarios maliciosos con capacidades de aborto?",
          de: "Welche informationstheoretische Schranke begrenzt die konkrete Effizienz von Multi-Party Computation Protokollen in Anwesenheit bösartiger Adversaries mit Abbruchfähigkeiten?",
          nl: "Welke informatietheorische grens beperkt de concrete efficiëntie van Multi-Party Computation protocollen in aanwezigheid van kwaadaardige tegenstanders met afbreek mogelijkheden?"
        },
        options: [
          {
            en: "The binary entropy bound on secret sharing redundancy",
            es: "El límite de entropía binaria en la redundancia de compartición de secretos",
            de: "Die binäre Entropie-Schranke bei Secret Sharing Redundanz",
            nl: "De binaire entropie grens op geheim delen redundantie"
          },
          {
            en: "The mutual information preservation requirement for correctness",
            es: "El requisito de preservación de información mutua para corrección",
            de: "Die Anforderung der gegenseitigen Informationserhaltung für Korrektheit",
            nl: "De wederzijdse informatie behoud vereiste voor correctheid"
          },
          {
            en: "The channel capacity limitation in the secure channels model",
            es: "La limitación de capacidad de canal en el modelo de canales seguros",
            de: "Die Kanalkapazitäts-Begrenzung im Secure Channels Modell",
            nl: "De kanaal capaciteit beperking in het veilige kanalen model"
          },
          {
            en: "The min-entropy requirement for extractable randomness",
            es: "El requisito de min-entropía para aleatoriedad extraíble",
            de: "Die Min-Entropie-Anforderung für extrahierbare Zufälligkeit",
            nl: "De min-entropie vereiste voor extraheerbare willekeurigheid"
          }
        ],
        correct: 1,
        explanation: {
          en: "The mutual information preservation requirement for correctness is the fundamental bound. In malicious MPC with abort, parties must maintain sufficient mutual information about the computation state to detect inconsistencies and ensure correctness, creating an unavoidable communication overhead proportional to the security parameter.",
          es: "El requisito de preservación de información mutua para corrección es el límite fundamental. En MPC malicioso con aborto, las partes deben mantener información mutua suficiente sobre el estado de computación para detectar inconsistencias y asegurar corrección, creando una sobrecarga de comunicación inevitable proporcional al parámetro de seguridad.",
          de: "Die Anforderung der gegenseitigen Informationserhaltung für Korrektheit ist die fundamentale Schranke. In bösartigem MPC mit Abbruch müssen die Parteien ausreichende gegenseitige Informationen über den Berechnungszustand aufrechterhalten, um Inkonsistenzen zu erkennen und Korrektheit zu gewährleisten, was einen unvermeidlichen Kommunikations-Overhead proportional zum Sicherheitsparameter schafft.",
          nl: "De wederzijdse informatie behoud vereiste voor correctheid is de fundamentele grens. In kwaadaardige MPC met afbreking moeten partijen voldoende wederzijdse informatie over de computatie toestand behouden om inconsistenties te detecteren en correctheid te verzekeren, wat een onvermijdelijke communicatie overhead creëert die proportioneel is aan de beveiligingsparameter."
        }
      },
      {
        question: {
          en: "In threshold cryptography for distributed key generation (DKG), what fundamental impossibility arises when attempting to achieve both non-interactive setup and adaptive security simultaneously?",
          es: "En criptografía de umbral para generación de claves distribuidas (DKG), ¿qué imposibilidad fundamental surge al intentar lograr tanto configuración no interactiva como seguridad adaptiva simultáneamente?",
          de: "In der Threshold-Kryptographie für verteilte Schlüsselerzeugung (DKG), welche fundamentale Unmöglichkeit entsteht beim Versuch, sowohl nicht-interaktive Einrichtung als auch adaptive Sicherheit gleichzeitig zu erreichen?",
          nl: "In drempel cryptografie voor gedistribueerde sleutelgeneratie (DKG), welke fundamentele onmogelijkheid ontstaat bij het proberen om zowel non-interactieve setup als adaptieve beveiliging gelijktijdig te bereiken?"
        },
        options: [
          {
            en: "The erasure assumption violation in adaptive corruption models",
            es: "La violación de la suposición de borrado en modelos de corrupción adaptiva",
            de: "Die Verletzung der Löschannahme in adaptiven Korruptionsmodellen",
            nl: "De schending van de wisaanname in adaptieve corruptie modellen"
          },
          {
            en: "The commitment-extractability trade-off in zero-knowledge proofs",
            es: "El intercambio de compromiso-extractabilidad en pruebas de conocimiento cero",
            de: "Der Commitment-Extrahierbarkeits-Kompromiss in Zero-Knowledge-Beweisen",
            nl: "De commitment-extracteerbaarheid afweging in zero-knowledge bewijzen"
          },
          {
            en: "The honest-majority assumption breakdown under adaptive adversaries",
            es: "La ruptura de la suposición de mayoría honesta bajo adversarios adaptativos",
            de: "Der Zusammenbruch der ehrlichen-Mehrheits-Annahme unter adaptiven Adversaries",
            nl: "De eerlijke-meerderheid aanname afbraak onder adaptieve tegenstanders"
          },
          {
            en: "The simulation-based security impossibility without trusted setup",
            es: "La imposibilidad de seguridad basada en simulación sin configuración confiable",
            de: "Die simulationsbasierte Sicherheitsunmöglichkeit ohne vertrauensvolle Einrichtung",
            nl: "De simulatie-gebaseerde beveiligings onmogelijkheid zonder vertrouwde setup"
          }
        ],
        correct: 3,
        explanation: {
          en: "Non-interactive DKG with adaptive security faces the fundamental barrier that simulation-based security requires the simulator to extract secrets before corruption occurs, but without interaction or trusted setup, there's no mechanism to perform this extraction, making the security proof impossible.",
          es: "DKG no interactivo con seguridad adaptiva enfrenta la barrera fundamental de que la seguridad basada en simulación requiere que el simulador extraiga secretos antes de que ocurra la corrupción, pero sin interacción o configuración confiable, no hay mecanismo para realizar esta extracción, haciendo imposible la prueba de seguridad.",
          de: "Nicht-interaktive DKG mit adaptiver Sicherheit steht vor der fundamentalen Barriere, dass simulationsbasierte Sicherheit erfordert, dass der Simulator Geheimnisse vor der Korruption extrahiert, aber ohne Interaktion oder vertrauensvolle Einrichtung gibt es keinen Mechanismus für diese Extraktion, was den Sicherheitsbeweis unmöglich macht.",
          nl: "Non-interactieve DKG met adaptieve beveiliging staat voor de fundamentele barrière dat simulatie-gebaseerde beveiliging vereist dat de simulator geheimen extraheert voordat corruptie plaatsvindt, maar zonder interactie of vertrouwde setup is er geen mechanisme om deze extractie uit te voeren, waardoor het beveiligingsbewijs onmogelijk wordt."
        }
      },
      {
        question: {
          en: "What cryptographic hardness assumption underlies the security of STARK (Scalable Transparent ARgument of Knowledge) systems that distinguishes them fundamentally from SNARKs?",
          es: "¿Qué suposición de dureza criptográfica subyace a la seguridad de los sistemas STARK (Argumento Escalable Transparente de Conocimiento) que los distingue fundamentalmente de los SNARKs?",
          de: "Welche kryptographische Härte-Annahme liegt der Sicherheit von STARK (Scalable Transparent ARgument of Knowledge) Systemen zugrunde, die sie fundamental von SNARKs unterscheidet?",
          nl: "Welke cryptografische hardheid aanname ligt ten grondslag aan de beveiliging van STARK (Scalable Transparent ARgument of Knowledge) systemen die hen fundamenteel onderscheidt van SNARKs?"
        },
        options: [
          {
            en: "Collision-resistant hash functions without algebraic structure assumptions",
            es: "Funciones hash resistentes a colisiones sin suposiciones de estructura algebraica",
            de: "Kollisionsresistente Hash-Funktionen ohne algebraische Strukturannahmen",
            nl: "Botsingsbestendige hash functies zonder algebraïsche structuur aannames"
          },
          {
            en: "Lattice-based assumptions with quantum resistance guarantees",
            es: "Suposiciones basadas en retículas con garantías de resistencia cuántica",
            de: "Gitterbasierte Annahmen mit Quantenresistenz-Garantien",
            nl: "Rooster-gebaseerde aannames met quantum weerstand garanties"
          },
          {
            en: "Polynomial commitment schemes with computational hiding",
            es: "Esquemas de compromiso polinomial con ocultación computacional",
            de: "Polynomiale Commitment-Schemas mit rechnerischer Verschleierung",
            nl: "Polynomiale commitment schema's met computationele verberging"
          },
          {
            en: "Knowledge-of-exponent assumptions in bilinear groups",
            es: "Suposiciones de conocimiento-de-exponente en grupos bilineales",
            de: "Wissen-des-Exponenten-Annahmen in bilinearen Gruppen",
            nl: "Kennis-van-exponent aannames in bilineaire groepen"
          }
        ],
        correct: 0,
        explanation: {
          en: "STARKs rely solely on collision-resistant hash functions without requiring algebraic structure assumptions like bilinear pairings or knowledge-of-exponent assumptions, making them transparent (no trusted setup) and potentially post-quantum secure, fundamentally distinguishing them from SNARKs which depend on structured algebraic assumptions.",
          es: "Los STARKs se basan únicamente en funciones hash resistentes a colisiones sin requerir suposiciones de estructura algebraica como emparejamientos bilineales o suposiciones de conocimiento-de-exponente, haciéndolos transparentes (sin configuración confiable) y potencialmente seguros post-cuánticos, distinguiéndolos fundamentalmente de los SNARKs que dependen de suposiciones algebraicas estructuradas.",
          de: "STARKs verlassen sich ausschließlich auf kollisionsresistente Hash-Funktionen ohne algebraische Strukturannahmen wie bilineare Paarungen oder Wissen-des-Exponenten-Annahmen zu benötigen, was sie transparent macht (keine vertrauensvolle Einrichtung) und potenziell post-quanten-sicher, wodurch sie sich fundamental von SNARKs unterscheiden, die von strukturierten algebraischen Annahmen abhängen.",
          nl: "STARKs vertrouwen uitsluitend op botsingsbestendige hash functies zonder algebraïsche structuur aannames te vereisen zoals bilineaire pairings of kennis-van-exponent aannames, waardoor ze transparant worden (geen vertrouwde setup) en mogelijk post-quantum veilig, waardoor ze fundamenteel verschillen van SNARKs die afhankelijk zijn van gestructureerde algebraïsche aannames."
        }
      }
    ]
  };
  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  } else if (typeof window !== 'undefined') {
    window.level10 = level10;
  }
})();
