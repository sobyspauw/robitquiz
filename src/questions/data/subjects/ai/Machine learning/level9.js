module.exports = {
  questions: [
    {
      question: {
        en: "What is the role of Jacobian determinant in normalizing flows for density estimation?",
        es: "¿Cuál es el rol del determinante jacobiano en flujos normalizadores para estimación de densidad?",
        de: "Was ist die Rolle der Jacobi-Determinante in Normalizing Flows für Dichteschätzung?",
        nl: "Wat is de rol van de Jacobiaanse determinant in normalizing flows voor dichtheidsschatting?"
      },
      options: [
        {
          en: "Tracks volume change through transformations for correct likelihood computation",
          es: "Rastrea cambio de volumen a través de transformaciones para cálculo correcto de verosimilitud",
          de: "Verfolgt Volumenänderung durch Transformationen für korrekte Likelihood-Berechnung",
          nl: "Volgt volumeverandering door transformaties voor correcte likelihood-berekening"
        },
        {
          en: "Optimizes network parameters during backpropagation",
          es: "Optimiza parámetros de red durante retropropagación",
          de: "Optimiert Netzwerkparameter während Backpropagation",
          nl: "Optimaliseert netwerkparameters tijdens backpropagation"
        },
        {
          en: "Regularizes the model to prevent overfitting",
          es: "Regulariza el modelo para prevenir sobreajuste",
          de: "Regularisiert das Modell zur Vermeidung von Überanpassung",
          nl: "Regulariseert het model om overfitting te voorkomen"
        },
        {
          en: "Computes gradients for parameter updates",
          es: "Calcula gradientes para actualizaciones de parámetros",
          de: "Berechnet Gradienten für Parameteraktualisierungen",
          nl: "Berekent gradiënten voor parameter-updates"
        }
      ],
      correct: 0,
      explanation: {
        en: "The Jacobian determinant in normalizing flows tracks how volumes change through invertible transformations, essential for computing exact likelihoods via change of variables formula.",
        es: "El determinante jacobiano en flujos normalizadores rastrea cómo cambian los volúmenes a través de transformaciones invertibles, esencial para calcular verosimilitudes exactas.",
        de: "Die Jacobi-Determinante in Normalizing Flows verfolgt Volumenänderungen durch invertierbare Transformationen, essentiell für exakte Likelihood-Berechnung.",
        nl: "De Jacobiaanse determinant in normalizing flows volgt hoe volumes veranderen door inverteerbare transformaties, essentieel voor exacte likelihood-berekening."
      }
    },
    {
      question: {
        en: "What is the theoretical foundation of why overparameterized networks generalize well despite classical learning theory?",
        es: "¿Cuál es el fundamento teórico de por qué redes sobreparametrizadas generalizan bien a pesar de la teoría clásica?",
        de: "Was ist die theoretische Grundlage warum überparametrisierte Netze trotz klassischer Lerntheorie gut generalisieren?",
        nl: "Wat is de theoretische basis waarom overgeparametriseerde netwerken goed generaliseren ondanks klassieke leertheorie?"
      },
      options: [
        {
          en: "Implicit regularization through gradient descent dynamics and inductive biases",
          es: "Regularización implícita a través de dinámicas de descenso de gradiente y sesgos inductivos",
          de: "Implizite Regularisierung durch Gradientenabstiegsdynamik und induktive Verzerrungen",
          nl: "Impliciete regularisatie door gradiënt descent dynamiek en inductieve biases"
        },
        {
          en: "Explicit L2 regularization prevents overfitting",
          es: "Regularización L2 explícita previene sobreajuste",
          de: "Explizite L2-Regularisierung verhindert Überanpassung",
          nl: "Expliciete L2-regularisatie voorkomt overfitting"
        },
        {
          en: "Smaller models always generalize better",
          es: "Modelos más pequeños siempre generalizan mejor",
          de: "Kleinere Modelle generalisieren immer besser",
          nl: "Kleinere modellen generaliseren altijd beter"
        },
        {
          en: "Random initialization guarantees good solutions",
          es: "Inicialización aleatoria garantiza buenas soluciones",
          de: "Zufällige Initialisierung garantiert gute Lösungen",
          nl: "Willekeurige initialisatie garandeert goede oplossingen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Overparameterized networks generalize through implicit regularization from SGD dynamics, which biases toward simpler functions, plus architectural inductive biases that favor generalizable solutions.",
        es: "Las redes sobreparametrizadas generalizan a través de regularización implícita de dinámicas SGD, que sesgan hacia funciones más simples, más sesgos inductivos arquitectónicos.",
        de: "Überparametrisierte Netze generalisieren durch implizite Regularisierung aus SGD-Dynamik, die zu einfacheren Funktionen neigt, plus architektonische induktive Verzerrungen.",
        nl: "Overgeparametriseerde netwerken generaliseren door impliciete regularisatie van SGD-dynamiek, die naar eenvoudigere functies neigt, plus architecturale inductieve biases."
      }
    },
    {
      question: {
        en: "What is the connection between SGD noise and generalization in the context of PAC-Bayes bounds?",
        es: "¿Cuál es la conexión entre ruido SGD y generalización en el contexto de límites PAC-Bayes?",
        de: "Was ist die Verbindung zwischen SGD-Rauschen und Generalisierung im Kontext von PAC-Bayes-Schranken?",
        nl: "Wat is de verbinding tussen SGD-ruis en generalisatie in de context van PAC-Bayes grenzen?"
      },
      options: [
        {
          en: "SGD noise acts as exploration mechanism finding flatter minima with tighter bounds",
          es: "Ruido SGD actúa como mecanismo de exploración encontrando mínimos más planos con límites más ajustados",
          de: "SGD-Rauschen wirkt als Explorationsmechanismus und findet flachere Minima mit engeren Schranken",
          nl: "SGD-ruis werkt als exploratiemechanisme dat vlakkere minima vindt met strakkere grenzen"
        },
        {
          en: "Noise always degrades model performance",
          es: "El ruido siempre degrada el rendimiento del modelo",
          de: "Rauschen verschlechtert immer die Modellleistung",
          nl: "Ruis verslechtert altijd modelprestaties"
        },
        {
          en: "PAC-Bayes bounds are independent of optimization",
          es: "Los límites PAC-Bayes son independientes de la optimización",
          de: "PAC-Bayes-Schranken sind unabhängig von der Optimierung",
          nl: "PAC-Bayes grenzen zijn onafhankelijk van optimalisatie"
        },
        {
          en: "Deterministic optimization yields better bounds",
          es: "Optimización determinista produce mejores límites",
          de: "Deterministische Optimierung liefert bessere Schranken",
          nl: "Deterministische optimalisatie levert betere grenzen"
        }
      ],
      correct: 0,
      explanation: {
        en: "SGD noise helps explore loss landscape, preferentially finding flatter minima that correspond to simpler posteriors in PAC-Bayes framework, yielding tighter generalization bounds.",
        es: "El ruido SGD ayuda a explorar el paisaje de pérdida, encontrando preferentemente mínimos más planos que corresponden a posteriores más simples en el marco PAC-Bayes.",
        de: "SGD-Rauschen hilft bei der Erkundung der Verlustlandschaft, findet bevorzugt flachere Minima, die einfacheren Posterioren im PAC-Bayes-Framework entsprechen.",
        nl: "SGD-ruis helpt het verlieslandschap te verkennen, vindt bij voorkeur vlakkere minima die overeenkomen met eenvoudigere posteriors in PAC-Bayes kader."
      }
    },
    {
      question: {
        en: "What is the theoretical justification for self-attention's effectiveness in capturing long-range dependencies?",
        es: "¿Cuál es la justificación teórica para la efectividad de auto-atención capturando dependencias de largo alcance?",
        de: "Was ist die theoretische Rechtfertigung für die Effektivität von Self-Attention bei langreichweitigen Abhängigkeiten?",
        nl: "Wat is de theoretische rechtvaardiging voor self-attention's effectiviteit in het vastleggen van lange-afstandsafhankelijkheden?"
      },
      options: [
        {
          en: "Constant path length between any positions enables gradient flow without decay",
          es: "Longitud de camino constante entre cualquier posición permite flujo de gradiente sin decaimiento",
          de: "Konstante Pfadlänge zwischen beliebigen Positionen ermöglicht Gradientenfluss ohne Abklingen",
          nl: "Constante padlengte tussen willekeurige posities maakt gradiëntstroom zonder verval mogelijk"
        },
        {
          en: "Recurrent connections are more efficient",
          es: "Las conexiones recurrentes son más eficientes",
          de: "Rekurrente Verbindungen sind effizienter",
          nl: "Recurrente verbindingen zijn efficiënter"
        },
        {
          en: "Convolutions capture global context better",
          es: "Las convoluciones capturan mejor el contexto global",
          de: "Faltungen erfassen globalen Kontext besser",
          nl: "Convoluties vangen globale context beter"
        },
        {
          en: "Local attention patterns are sufficient",
          es: "Los patrones de atención local son suficientes",
          de: "Lokale Aufmerksamkeitsmuster sind ausreichend",
          nl: "Lokale aandachtspatronen zijn voldoende"
        }
      ],
      correct: 0,
      explanation: {
        en: "Self-attention creates direct connections between all positions with constant path length O(1), allowing gradients to flow without the decay issues of RNNs' O(n) sequential paths.",
        es: "La auto-atención crea conexiones directas entre todas las posiciones con longitud de camino constante O(1), permitiendo flujo de gradientes sin problemas de decaimiento.",
        de: "Self-Attention schafft direkte Verbindungen zwischen allen Positionen mit konstanter Pfadlänge O(1), ermöglicht Gradientenfluss ohne Abklingprobleme.",
        nl: "Self-attention creëert directe verbindingen tussen alle posities met constante padlengte O(1), waardoor gradiënten kunnen stromen zonder verval."
      }
    },
    {
      question: {
        en: "What is the mathematical relationship between Neural ODEs and ResNets in the continuous depth limit?",
        es: "¿Cuál es la relación matemática entre ODEs Neuronales y ResNets en el límite de profundidad continua?",
        de: "Was ist die mathematische Beziehung zwischen Neural ODEs und ResNets im kontinuierlichen Tiefenlimit?",
        nl: "Wat is de wiskundige relatie tussen Neural ODEs en ResNets in de continue dieptelimiet?"
      },
      options: [
        {
          en: "ResNets are Euler discretizations of Neural ODEs with step size as layer depth",
          es: "ResNets son discretizaciones de Euler de ODEs Neuronales con tamaño de paso como profundidad de capa",
          de: "ResNets sind Euler-Diskretisierungen von Neural ODEs mit Schrittweite als Schichttiefe",
          nl: "ResNets zijn Euler-discretisaties van Neural ODEs met stapgrootte als laagdiepte"
        },
        {
          en: "They are completely unrelated architectures",
          es: "Son arquitecturas completamente no relacionadas",
          de: "Sie sind völlig unabhängige Architekturen",
          nl: "Het zijn volledig ongerelateerde architecturen"
        },
        {
          en: "Neural ODEs are deeper versions of ResNets",
          es: "Las ODEs Neuronales son versiones más profundas de ResNets",
          de: "Neural ODEs sind tiefere Versionen von ResNets",
          nl: "Neural ODEs zijn diepere versies van ResNets"
        },
        {
          en: "ResNets use different optimization methods",
          es: "ResNets usan métodos de optimización diferentes",
          de: "ResNets verwenden andere Optimierungsmethoden",
          nl: "ResNets gebruiken andere optimalisatiemethoden"
        }
      ],
      correct: 0,
      explanation: {
        en: "ResNets with skip connections h_{t+1} = h_t + f(h_t) are Euler discretizations of the ODE dh/dt = f(h(t)). As layers increase, ResNets approach continuous Neural ODE dynamics.",
        es: "ResNets con conexiones de salto h_{t+1} = h_t + f(h_t) son discretizaciones de Euler del ODE dh/dt = f(h(t)). Al aumentar capas, ResNets se aproximan a dinámicas continuas.",
        de: "ResNets mit Skip-Verbindungen h_{t+1} = h_t + f(h_t) sind Euler-Diskretisierungen der ODE dh/dt = f(h(t)). Mit mehr Schichten nähern sich ResNets kontinuierlichen Dynamiken.",
        nl: "ResNets met skip-verbindingen h_{t+1} = h_t + f(h_t) zijn Euler-discretisaties van de ODE dh/dt = f(h(t)). Met meer lagen benaderen ResNets continue dynamiek."
      }
    },
    {
      question: {
        en: "What is the Wasserstein distance's advantage over KL divergence in generative modeling?",
        es: "¿Cuál es la ventaja de la distancia Wasserstein sobre divergencia KL en modelado generativo?",
        de: "Was ist der Vorteil der Wasserstein-Distanz gegenüber KL-Divergenz in der generativen Modellierung?",
        nl: "Wat is het voordeel van Wasserstein-afstand boven KL-divergentie in generatief modelleren?"
      },
      options: [
        {
          en: "Provides meaningful gradients even when distributions have disjoint support",
          es: "Proporciona gradientes significativos incluso cuando distribuciones tienen soporte disjunto",
          de: "Liefert aussagekräftige Gradienten auch bei disjunktem Support der Verteilungen",
          nl: "Geeft betekenisvolle gradiënten zelfs bij disjuncte ondersteuning van distributies"
        },
        {
          en: "Computationally cheaper to calculate",
          es: "Computacionalmente más barato de calcular",
          de: "Rechnerisch günstiger zu berechnen",
          nl: "Rekenkundig goedkoper om te berekenen"
        },
        {
          en: "Always converges to global optimum",
          es: "Siempre converge al óptimo global",
          de: "Konvergiert immer zum globalen Optimum",
          nl: "Convergeert altijd naar globaal optimum"
        },
        {
          en: "Requires fewer training samples",
          es: "Requiere menos muestras de entrenamiento",
          de: "Benötigt weniger Trainingsdaten",
          nl: "Vereist minder trainingssamples"
        }
      ],
      correct: 0,
      explanation: {
        en: "Wasserstein distance measures optimal transport cost between distributions, providing smooth, meaningful gradients even for non-overlapping supports where KL divergence becomes infinite.",
        es: "La distancia Wasserstein mide el costo de transporte óptimo entre distribuciones, proporcionando gradientes suaves y significativos incluso para soportes no superpuestos.",
        de: "Wasserstein-Distanz misst optimale Transportkosten zwischen Verteilungen, liefert glatte, aussagekräftige Gradienten auch bei nicht-überlappenden Supports.",
        nl: "Wasserstein-afstand meet optimale transportkosten tussen distributies, geeft vloeiende, betekenisvolle gradiënten zelfs bij niet-overlappende ondersteuningen."
      }
    },
    {
      question: {
        en: "What is the role of Hutchinson trace estimator in scalable second-order optimization?",
        es: "¿Cuál es el rol del estimador de traza de Hutchinson en optimización de segundo orden escalable?",
        de: "Was ist die Rolle des Hutchinson-Spurschätzers in skalierbarer Second-Order-Optimierung?",
        nl: "Wat is de rol van Hutchinson trace estimator in schaalbare tweede-orde optimalisatie?"
      },
      options: [
        {
          en: "Estimates trace of Hessian using random projections without forming full matrix",
          es: "Estima traza del Hessiano usando proyecciones aleatorias sin formar matriz completa",
          de: "Schätzt Spur der Hesse-Matrix mit Zufallsprojektionen ohne vollständige Matrix",
          nl: "Schat trace van Hessian met willekeurige projecties zonder volledige matrix te vormen"
        },
        {
          en: "Computes exact eigenvalues efficiently",
          es: "Calcula valores propios exactos eficientemente",
          de: "Berechnet exakte Eigenwerte effizient",
          nl: "Berekent exacte eigenwaarden efficiënt"
        },
        {
          en: "Stores Hessian in compressed format",
          es: "Almacena Hessiano en formato comprimido",
          de: "Speichert Hesse-Matrix in komprimiertem Format",
          nl: "Slaat Hessian op in gecomprimeerd formaat"
        },
        {
          en: "Approximates gradients for large batches",
          es: "Aproxima gradientes para lotes grandes",
          de: "Approximiert Gradienten für große Batches",
          nl: "Benadert gradiënten voor grote batches"
        }
      ],
      correct: 0,
      explanation: {
        en: "Hutchinson trace estimator uses random vector projections (E[v^T H v] for v ~ N(0,I)) to estimate trace(H) without explicitly computing or storing the full Hessian matrix.",
        es: "El estimador de traza de Hutchinson usa proyecciones de vectores aleatorios para estimar trace(H) sin calcular o almacenar explícitamente la matriz Hessiana completa.",
        de: "Hutchinson-Spurschätzer nutzt Zufallsvektorprojektionen zur Schätzung von trace(H) ohne explizite Berechnung oder Speicherung der vollständigen Hesse-Matrix.",
        nl: "Hutchinson trace estimator gebruikt willekeurige vectorprojecties om trace(H) te schatten zonder de volledige Hessian matrix expliciet te berekenen of op te slaan."
      }
    },
    {
      question: {
        en: "What is the theoretical basis for why Batch Normalization helps optimization beyond gradient issues?",
        es: "¿Cuál es la base teórica de por qué Normalización por Lotes ayuda a optimización más allá de problemas de gradiente?",
        de: "Was ist die theoretische Grundlage warum Batch-Normalisierung bei Optimierung über Gradientenprobleme hinaus hilft?",
        nl: "Wat is de theoretische basis waarom Batch Normalization optimalisatie helpt voorbij gradiëntproblemen?"
      },
      options: [
        {
          en: "Smooths optimization landscape making loss surface more Lipschitz",
          es: "Suaviza paisaje de optimización haciendo superficie de pérdida más Lipschitz",
          de: "Glättet Optimierungslandschaft und macht Verlustfläche mehr Lipschitz",
          nl: "Verzacht optimalisatielandschap waardoor verliesoppervlak meer Lipschitz wordt"
        },
        {
          en: "Only prevents gradient vanishing",
          es: "Solo previene desvanecimiento de gradiente",
          de: "Verhindert nur Gradientenverschwinden",
          nl: "Voorkomt alleen gradiënt verdwijning"
        },
        {
          en: "Reduces model capacity",
          es: "Reduce capacidad del modelo",
          de: "Reduziert Modellkapazität",
          nl: "Vermindert modelcapaciteit"
        },
        {
          en: "Increases learning rate only",
          es: "Solo aumenta tasa de aprendizaje",
          de: "Erhöht nur die Lernrate",
          nl: "Verhoogt alleen leersnelheid"
        }
      ],
      correct: 0,
      explanation: {
        en: "Batch Normalization smooths the optimization landscape by making gradients more predictable and loss surface more Lipschitz, enabling larger learning rates and faster convergence.",
        es: "La Normalización por Lotes suaviza el paisaje de optimización haciendo gradientes más predecibles y superficie de pérdida más Lipschitz, permitiendo tasas de aprendizaje mayores.",
        de: "Batch-Normalisierung glättet die Optimierungslandschaft, macht Gradienten vorhersagbarer und Verlustfläche mehr Lipschitz, ermöglicht größere Lernraten.",
        nl: "Batch Normalization verzacht het optimalisatielandschap door gradiënten voorspelbaarder te maken en verliesoppervlak meer Lipschitz, wat grotere leersnelheden mogelijk maakt."
      }
    },
    {
      question: {
        en: "What is the connection between mutual information and representation learning in InfoMax principle?",
        es: "¿Cuál es la conexión entre información mutua y aprendizaje de representaciones en el principio InfoMax?",
        de: "Was ist die Verbindung zwischen gegenseitiger Information und Repräsentationslernen im InfoMax-Prinzip?",
        nl: "Wat is de verbinding tussen wederzijdse informatie en representatieleren in het InfoMax-principe?"
      },
      options: [
        {
          en: "Maximizing MI between input and representation preserves task-relevant information",
          es: "Maximizar IM entre entrada y representación preserva información relevante para la tarea",
          de: "Maximierung der MI zwischen Eingabe und Repräsentation bewahrt aufgabenrelevante Information",
          nl: "Maximaliseren van MI tussen input en representatie behoudt taakrelevante informatie"
        },
        {
          en: "Minimizing MI improves compression",
          es: "Minimizar IM mejora compresión",
          de: "Minimierung der MI verbessert Kompression",
          nl: "Minimaliseren van MI verbetert compressie"
        },
        {
          en: "MI is irrelevant to representation quality",
          es: "IM es irrelevante para calidad de representación",
          de: "MI ist irrelevant für Repräsentationsqualität",
          nl: "MI is irrelevant voor representatiekwaliteit"
        },
        {
          en: "Random representations maximize MI",
          es: "Representaciones aleatorias maximizan IM",
          de: "Zufällige Repräsentationen maximieren MI",
          nl: "Willekeurige representaties maximaliseren MI"
        }
      ],
      correct: 0,
      explanation: {
        en: "InfoMax principle suggests maximizing mutual information between input and learned representations preserves all potentially useful information while enabling dimensionality reduction.",
        es: "El principio InfoMax sugiere que maximizar información mutua entre entrada y representaciones aprendidas preserva toda información potencialmente útil.",
        de: "Das InfoMax-Prinzip schlägt vor, gegenseitige Information zwischen Eingabe und gelernten Repräsentationen zu maximieren, um alle potenziell nützlichen Informationen zu bewahren.",
        nl: "Het InfoMax-principe suggereert dat maximaliseren van wederzijdse informatie tussen input en geleerde representaties alle potentieel nuttige informatie behoudt."
      }
    },
    {
      question: {
        en: "What is the significance of the Rademacher complexity in deep learning generalization bounds?",
        es: "¿Cuál es el significado de la complejidad de Rademacher en límites de generalización de deep learning?",
        de: "Was ist die Bedeutung der Rademacher-Komplexität in Deep Learning Generalisierungsschranken?",
        nl: "Wat is de betekenis van Rademacher-complexiteit in deep learning generalisatiegrenzen?"
      },
      options: [
        {
          en: "Measures capacity by ability to fit random labels, tighter than VC dimension",
          es: "Mide capacidad por habilidad de ajustar etiquetas aleatorias, más ajustado que dimensión VC",
          de: "Misst Kapazität durch Fähigkeit zufällige Labels anzupassen, enger als VC-Dimension",
          nl: "Meet capaciteit door vermogen willekeurige labels te fitten, strakker dan VC-dimensie"
        },
        {
          en: "Only applies to linear models",
          es: "Solo aplica a modelos lineales",
          de: "Gilt nur für lineare Modelle",
          nl: "Geldt alleen voor lineaire modellen"
        },
        {
          en: "Measures training accuracy",
          es: "Mide precisión de entrenamiento",
          de: "Misst Trainingsgenauigkeit",
          nl: "Meet trainingsnauwkeurigheid"
        },
        {
          en: "Unrelated to model complexity",
          es: "No relacionado con complejidad del modelo",
          de: "Unabhängig von Modellkomplexität",
          nl: "Ongerelateerd aan modelcomplexiteit"
        }
      ],
      correct: 0,
      explanation: {
        en: "Rademacher complexity measures a hypothesis class's ability to fit random noise by correlating with random ±1 labels, providing data-dependent generalization bounds tighter than VC dimension.",
        es: "La complejidad de Rademacher mide la capacidad de una clase de hipótesis para ajustar ruido aleatorio correlacionando con etiquetas ±1 aleatorias.",
        de: "Rademacher-Komplexität misst die Fähigkeit einer Hypothesenklasse, zufälliges Rauschen durch Korrelation mit zufälligen ±1 Labels anzupassen.",
        nl: "Rademacher-complexiteit meet het vermogen van een hypotheseklasse om willekeurige ruis te fitten door correlatie met willekeurige ±1 labels."
      }
    },
    {
      question: {
        en: "What is the implicit bias of gradient descent in linear models regarding margin maximization?",
        es: "¿Cuál es el sesgo implícito del descenso de gradiente en modelos lineales respecto a maximización de margen?",
        de: "Was ist die implizite Verzerrung des Gradientenabstiegs in linearen Modellen bezüglich Marginmaximierung?",
        nl: "Wat is de impliciete bias van gradiënt descent in lineaire modellen betreffende margemaximalisatie?"
      },
      options: [
        {
          en: "Converges to max-margin solution minimizing L2 norm among perfect classifiers",
          es: "Converge a solución de margen máximo minimizando norma L2 entre clasificadores perfectos",
          de: "Konvergiert zur Max-Margin-Lösung mit minimaler L2-Norm unter perfekten Klassifikatoren",
          nl: "Convergeert naar max-marge oplossing die L2-norm minimaliseert onder perfecte classifiers"
        },
        {
          en: "Finds random perfect classifier",
          es: "Encuentra clasificador perfecto aleatorio",
          de: "Findet zufälligen perfekten Klassifikator",
          nl: "Vindt willekeurige perfecte classifier"
        },
        {
          en: "Always overfits to training data",
          es: "Siempre sobreajusta a datos de entrenamiento",
          de: "Überpasst immer an Trainingsdaten",
          nl: "Overfit altijd op trainingsdata"
        },
        {
          en: "Margin is irrelevant to convergence",
          es: "El margen es irrelevante para convergencia",
          de: "Margin ist irrelevant für Konvergenz",
          nl: "Marge is irrelevant voor convergentie"
        }
      ],
      correct: 0,
      explanation: {
        en: "For separable data, gradient descent on linear models implicitly biases toward the max-margin solution (SVM solution), converging to the minimum L2 norm solution among all perfect classifiers.",
        es: "Para datos separables, el descenso de gradiente en modelos lineales sesga implícitamente hacia la solución de margen máximo (solución SVM).",
        de: "Für trennbare Daten neigt der Gradientenabstieg bei linearen Modellen implizit zur Max-Margin-Lösung (SVM-Lösung).",
        nl: "Voor scheidbare data heeft gradiënt descent op lineaire modellen impliciete bias naar de max-marge oplossing (SVM-oplossing)."
      }
    },
    {
      question: {
        en: "What is the lottery ticket hypothesis's implication for neural network pruning at initialization?",
        es: "¿Cuál es la implicación de la hipótesis del billete de lotería para poda de redes neuronales en inicialización?",
        de: "Was ist die Implikation der Lotterielos-Hypothese für das Pruning neuronaler Netze bei Initialisierung?",
        nl: "Wat is de implicatie van de loterijticket-hypothese voor neural network pruning bij initialisatie?"
      },
      options: [
        {
          en: "Winning tickets exist at initialization but require original init weights after identifying structure",
          es: "Billetes ganadores existen en inicialización pero requieren pesos originales después de identificar estructura",
          de: "Gewinnlose existieren bei Initialisierung, benötigen aber ursprüngliche Gewichte nach Strukturidentifikation",
          nl: "Winnende tickets bestaan bij initialisatie maar vereisen originele gewichten na structuuridentificatie"
        },
        {
          en: "Any random subnetwork performs equally well",
          es: "Cualquier subred aleatoria funciona igualmente bien",
          de: "Jedes zufällige Teilnetz funktioniert gleich gut",
          nl: "Elk willekeurig subnetwerk presteert even goed"
        },
        {
          en: "Pruning before training always fails",
          es: "Podar antes de entrenar siempre falla",
          de: "Pruning vor dem Training scheitert immer",
          nl: "Pruning voor training faalt altijd"
        },
        {
          en: "Dense networks are always optimal",
          es: "Redes densas son siempre óptimas",
          de: "Dichte Netze sind immer optimal",
          nl: "Dichte netwerken zijn altijd optimaal"
        }
      ],
      correct: 0,
      explanation: {
        en: "The lottery ticket hypothesis shows that sparse winning tickets exist at initialization, but they need their original initialization values—rewinding is crucial for successful training.",
        es: "La hipótesis del billete de lotería muestra que existen billetes ganadores dispersos en inicialización, pero necesitan sus valores de inicialización originales.",
        de: "Die Lotterielos-Hypothese zeigt, dass spärliche Gewinnlose bei Initialisierung existieren, aber ihre ursprünglichen Initialisierungswerte benötigen.",
        nl: "De loterijticket-hypothese toont dat sparse winnende tickets bestaan bij initialisatie, maar ze hebben hun originele initialisatiewaarden nodig."
      }
    },
    {
      question: {
        en: "What is the role of spectral bias in neural network learning dynamics?",
        es: "¿Cuál es el rol del sesgo espectral en dinámicas de aprendizaje de redes neuronales?",
        de: "Was ist die Rolle der spektralen Verzerrung in der Lerndynamik neuronaler Netze?",
        nl: "Wat is de rol van spectrale bias in neural network leerdynamiek?"
      },
      options: [
        {
          en: "Networks learn low-frequency patterns first, gradually fitting higher frequencies",
          es: "Redes aprenden patrones de baja frecuencia primero, ajustando gradualmente frecuencias más altas",
          de: "Netze lernen zuerst niederfrequente Muster, passen allmählich höhere Frequenzen an",
          nl: "Netwerken leren eerst laagfrequente patronen, passen geleidelijk hogere frequenties aan"
        },
        {
          en: "High frequencies are learned immediately",
          es: "Frecuencias altas se aprenden inmediatamente",
          de: "Hohe Frequenzen werden sofort gelernt",
          nl: "Hoge frequenties worden onmiddellijk geleerd"
        },
        {
          en: "All frequencies learned simultaneously",
          es: "Todas las frecuencias se aprenden simultáneamente",
          de: "Alle Frequenzen werden gleichzeitig gelernt",
          nl: "Alle frequenties worden gelijktijdig geleerd"
        },
        {
          en: "Frequency is irrelevant to learning",
          es: "La frecuencia es irrelevante para el aprendizaje",
          de: "Frequenz ist irrelevant für das Lernen",
          nl: "Frequentie is irrelevant voor leren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Neural networks exhibit spectral bias, preferentially learning low-frequency components of target functions first. This F-principle explains why networks generalize despite high capacity.",
        es: "Las redes neuronales exhiben sesgo espectral, aprendiendo preferentemente componentes de baja frecuencia de funciones objetivo primero.",
        de: "Neuronale Netze zeigen spektrale Verzerrung, lernen bevorzugt niederfrequente Komponenten der Zielfunktionen zuerst.",
        nl: "Neurale netwerken vertonen spectrale bias, leren bij voorkeur eerst laagfrequente componenten van doelfuncties."
      }
    },
    {
      question: {
        en: "What is the theoretical foundation of contrastive learning's success in self-supervised representation learning?",
        es: "¿Cuál es el fundamento teórico del éxito del aprendizaje contrastivo en aprendizaje de representación autosupervisado?",
        de: "Was ist die theoretische Grundlage des Erfolgs von kontrastivem Lernen im selbstüberwachten Repräsentationslernen?",
        nl: "Wat is de theoretische basis van het succes van contrastief leren in zelf-gesuperviseerd representatieleren?"
      },
      options: [
        {
          en: "Maximizes lower bound on mutual information between different augmented views",
          es: "Maximiza límite inferior de información mutua entre diferentes vistas aumentadas",
          de: "Maximiert untere Schranke der gegenseitigen Information zwischen verschiedenen augmentierten Ansichten",
          nl: "Maximaliseert ondergrens van wederzijdse informatie tussen verschillende geaugmenteerde views"
        },
        {
          en: "Minimizes all pairwise distances",
          es: "Minimiza todas las distancias por pares",
          de: "Minimiert alle paarweisen Abstände",
          nl: "Minimaliseert alle paarsgewijze afstanden"
        },
        {
          en: "Requires labeled data for success",
          es: "Requiere datos etiquetados para éxito",
          de: "Benötigt gelabelte Daten für Erfolg",
          nl: "Vereist gelabelde data voor succes"
        },
        {
          en: "Random projections work equally well",
          es: "Proyecciones aleatorias funcionan igualmente bien",
          de: "Zufällige Projektionen funktionieren gleich gut",
          nl: "Willekeurige projecties werken even goed"
        }
      ],
      correct: 0,
      explanation: {
        en: "Contrastive learning maximizes a lower bound on mutual information between different augmented views of the same data, learning invariances while preserving semantic information.",
        es: "El aprendizaje contrastivo maximiza un límite inferior de información mutua entre diferentes vistas aumentadas de los mismos datos.",
        de: "Kontrastives Lernen maximiert eine untere Schranke der gegenseitigen Information zwischen verschiedenen augmentierten Ansichten derselben Daten.",
        nl: "Contrastief leren maximaliseert een ondergrens van wederzijdse informatie tussen verschillende geaugmenteerde views van dezelfde data."
      }
    },
    {
      question: {
        en: "What is the connection between the Neural Tangent Kernel and infinite-width network training dynamics?",
        es: "¿Cuál es la conexión entre el Kernel Tangente Neural y dinámicas de entrenamiento de redes de ancho infinito?",
        de: "Was ist die Verbindung zwischen dem Neural Tangent Kernel und Trainingsdynamik unendlich breiter Netze?",
        nl: "Wat is de verbinding tussen de Neural Tangent Kernel en trainings dynamiek van oneindig brede netwerken?"
      },
      options: [
        {
          en: "NTK remains constant during training, reducing dynamics to kernel regression",
          es: "NTK permanece constante durante entrenamiento, reduciendo dinámicas a regresión kernel",
          de: "NTK bleibt während Training konstant, reduziert Dynamik auf Kernel-Regression",
          nl: "NTK blijft constant tijdens training, reduceert dynamiek tot kernel regressie"
        },
        {
          en: "NTK changes dramatically throughout training",
          es: "NTK cambia dramáticamente durante el entrenamiento",
          de: "NTK ändert sich dramatisch während des Trainings",
          nl: "NTK verandert dramatisch tijdens training"
        },
        {
          en: "Width is irrelevant to kernel behavior",
          es: "El ancho es irrelevante para el comportamiento del kernel",
          de: "Breite ist irrelevant für Kernel-Verhalten",
          nl: "Breedte is irrelevant voor kernel gedrag"
        },
        {
          en: "Finite networks behave identically",
          es: "Redes finitas se comportan idénticamente",
          de: "Endliche Netze verhalten sich identisch",
          nl: "Eindige netwerken gedragen zich identiek"
        }
      ],
      correct: 0,
      explanation: {
        en: "In infinite-width limit, the Neural Tangent Kernel becomes deterministic and remains constant during training, making neural network training equivalent to kernel regression with NTK.",
        es: "En el límite de ancho infinito, el Kernel Tangente Neural se vuelve determinista y permanece constante durante entrenamiento.",
        de: "Im Grenzwert unendlicher Breite wird der Neural Tangent Kernel deterministisch und bleibt während des Trainings konstant.",
        nl: "In de oneindig brede limiet wordt de Neural Tangent Kernel deterministisch en blijft constant tijdens training."
      }
    },
    {
      question: {
        en: "What is the mechanism behind gradient flow in Graph Neural Networks for learning node representations?",
        es: "¿Cuál es el mecanismo detrás del flujo de gradiente en Redes Neuronales de Grafos para aprender representaciones de nodos?",
        de: "Was ist der Mechanismus hinter dem Gradientenfluss in Graph Neural Networks zum Lernen von Knotendarstellungen?",
        nl: "Wat is het mechanisme achter gradiënt flow in Graph Neural Networks voor het leren van node representaties?"
      },
      options: [
        {
          en: "Gradients propagate through graph structure via message passing aggregation",
          es: "Gradientes se propagan a través de estructura del grafo vía agregación de paso de mensajes",
          de: "Gradienten propagieren durch Graphstruktur über Message-Passing-Aggregation",
          nl: "Gradiënten propageren door graafstructuur via message passing aggregatie"
        },
        {
          en: "Each node trains independently",
          es: "Cada nodo entrena independientemente",
          de: "Jeder Knoten trainiert unabhängig",
          nl: "Elke node traint onafhankelijk"
        },
        {
          en: "Only local gradients matter",
          es: "Solo gradientes locales importan",
          de: "Nur lokale Gradienten sind wichtig",
          nl: "Alleen lokale gradiënten zijn belangrijk"
        },
        {
          en: "Graph structure is ignored",
          es: "La estructura del grafo se ignora",
          de: "Graphstruktur wird ignoriert",
          nl: "Graafstructuur wordt genegeerd"
        }
      ],
      correct: 0,
      explanation: {
        en: "In GNNs, gradients flow through the graph topology during backpropagation, with each node's gradient influenced by its neighbors through the message passing aggregation structure.",
        es: "En GNNs, los gradientes fluyen a través de la topología del grafo durante retropropagación, con el gradiente de cada nodo influenciado por sus vecinos.",
        de: "In GNNs fließen Gradienten während Backpropagation durch die Graphtopologie, wobei der Gradient jedes Knotens durch Nachbarn beeinflusst wird.",
        nl: "In GNNs stromen gradiënten door de graaftopologie tijdens backpropagation, waarbij de gradiënt van elke node beïnvloed wordt door buren."
      }
    },
    {
      question: {
        en: "What is the theoretical justification for skip connections beyond gradient flow?",
        es: "¿Cuál es la justificación teórica para conexiones de salto más allá del flujo de gradiente?",
        de: "Was ist die theoretische Rechtfertigung für Skip-Verbindungen über Gradientenfluss hinaus?",
        nl: "Wat is de theoretische rechtvaardiging voor skip-verbindingen voorbij gradiënt flow?"
      },
      options: [
        {
          en: "Enable learning of residual functions which are easier to optimize than full transformations",
          es: "Permiten aprendizaje de funciones residuales que son más fáciles de optimizar que transformaciones completas",
          de: "Ermöglichen Lernen von Residualfunktionen, die einfacher zu optimieren sind als vollständige Transformationen",
          nl: "Maken leren van residuele functies mogelijk die makkelijker te optimaliseren zijn dan volledige transformaties"
        },
        {
          en: "Only prevent vanishing gradients",
          es: "Solo previenen gradientes que desvanecen",
          de: "Verhindern nur verschwindende Gradienten",
          nl: "Voorkomen alleen verdwijnende gradiënten"
        },
        {
          en: "Reduce model parameters",
          es: "Reducen parámetros del modelo",
          de: "Reduzieren Modellparameter",
          nl: "Verminderen modelparameters"
        },
        {
          en: "Speed up inference only",
          es: "Solo aceleran inferencia",
          de: "Beschleunigen nur Inferenz",
          nl: "Versnellen alleen inferentie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Skip connections reformulate learning as finding residual mappings F(x) = H(x) - x. Learning the residual (difference) is often easier than learning the entire transformation H(x).",
        es: "Las conexiones de salto reformulan el aprendizaje como encontrar mapeos residuales F(x) = H(x) - x. Aprender el residuo es más fácil que aprender toda la transformación.",
        de: "Skip-Verbindungen formulieren das Lernen als Finden von Residualabbildungen F(x) = H(x) - x um. Das Lernen des Residuums ist einfacher als die gesamte Transformation.",
        nl: "Skip-verbindingen herformuleren leren als het vinden van residuele mappings F(x) = H(x) - x. Het residu leren is makkelijker dan de hele transformatie."
      }
    },
    {
      question: {
        en: "What is the role of the Hessian's eigenspectrum in understanding loss landscape geometry?",
        es: "¿Cuál es el rol del espectro propio del Hessiano en entender la geometría del paisaje de pérdida?",
        de: "Was ist die Rolle des Eigenspektrums der Hesse-Matrix beim Verstehen der Verlustlandschaftsgeometrie?",
        nl: "Wat is de rol van het eigenspectrum van de Hessian in het begrijpen van verlieslandschap geometrie?"
      },
      options: [
        {
          en: "Eigenvalues indicate sharpness/flatness, eigenvectors show descent directions",
          es: "Valores propios indican nitidez/planitud, vectores propios muestran direcciones de descenso",
          de: "Eigenwerte zeigen Schärfe/Flachheit, Eigenvektoren zeigen Abstiegsrichtungen",
          nl: "Eigenwaarden geven scherpte/vlakheid aan, eigenvectoren tonen afdalingsrichtingen"
        },
        {
          en: "Only largest eigenvalue matters",
          es: "Solo el valor propio más grande importa",
          de: "Nur der größte Eigenwert ist wichtig",
          nl: "Alleen grootste eigenwaarde is belangrijk"
        },
        {
          en: "Eigenspectrum is random noise",
          es: "El espectro propio es ruido aleatorio",
          de: "Eigenspektrum ist zufälliges Rauschen",
          nl: "Eigenspectrum is willekeurige ruis"
        },
        {
          en: "Hessian is always identity matrix",
          es: "El Hessiano es siempre matriz identidad",
          de: "Hesse-Matrix ist immer Einheitsmatrix",
          nl: "Hessian is altijd identiteitsmatrix"
        }
      ],
      correct: 0,
      explanation: {
        en: "The Hessian's eigenvalues measure curvature magnitude (sharpness/flatness of minima), while eigenvectors indicate principal curvature directions, crucial for optimization and generalization.",
        es: "Los valores propios del Hessiano miden magnitud de curvatura (nitidez/planitud de mínimos), mientras vectores propios indican direcciones principales de curvatura.",
        de: "Die Eigenwerte der Hesse-Matrix messen Krümmungsstärke (Schärfe/Flachheit von Minima), während Eigenvektoren Hauptkrümmungsrichtungen angeben.",
        nl: "De eigenwaarden van de Hessian meten kromming magnitude (scherpte/vlakheid van minima), terwijl eigenvectoren hoofdkrommingsrichtingen aangeven."
      }
    },
    {
      question: {
        en: "What is the fundamental trade-off in meta-learning between task-specific adaptation and cross-task generalization?",
        es: "¿Cuál es el trade-off fundamental en meta-aprendizaje entre adaptación específica de tarea y generalización entre tareas?",
        de: "Was ist der fundamentale Trade-off im Meta-Learning zwischen aufgabenspezifischer Anpassung und aufgabenübergreifender Generalisierung?",
        nl: "Wat is de fundamentele trade-off in meta-learning tussen taakspecifieke adaptatie en cross-task generalisatie?"
      },
      options: [
        {
          en: "Initialization must balance being close to all tasks while allowing rapid specialization",
          es: "Inicialización debe equilibrar estar cerca de todas las tareas permitiendo especialización rápida",
          de: "Initialisierung muss Balance zwischen Nähe zu allen Aufgaben und schneller Spezialisierung finden",
          nl: "Initialisatie moet balanceren tussen dicht bij alle taken zijn en snelle specialisatie toestaan"
        },
        {
          en: "Tasks are always independent",
          es: "Las tareas son siempre independientes",
          de: "Aufgaben sind immer unabhängig",
          nl: "Taken zijn altijd onafhankelijk"
        },
        {
          en: "Specialization is unnecessary",
          es: "La especialización es innecesaria",
          de: "Spezialisierung ist unnötig",
          nl: "Specialisatie is onnodig"
        },
        {
          en: "One model fits all tasks perfectly",
          es: "Un modelo ajusta todas las tareas perfectamente",
          de: "Ein Modell passt perfekt zu allen Aufgaben",
          nl: "Één model past perfect op alle taken"
        }
      ],
      correct: 0,
      explanation: {
        en: "Meta-learning must find initializations in a 'Goldilocks zone'—close enough to all tasks for few-shot adaptation but not overspecialized to the meta-training distribution.",
        es: "El meta-aprendizaje debe encontrar inicializaciones en una 'zona Goldilocks'—suficientemente cerca de todas las tareas para adaptación de pocos disparos.",
        de: "Meta-Learning muss Initialisierungen in einer 'Goldilocks-Zone' finden—nah genug an allen Aufgaben für Few-Shot-Anpassung.",
        nl: "Meta-learning moet initialisaties vinden in een 'Goldilocks zone'—dicht genoeg bij alle taken voor few-shot adaptatie."
      }
    },
    {
      question: {
        en: "What is the role of Jacobian determinant in normalizing flows for density estimation?",
        es: "¿Cuál es el rol del determinante jacobiano en flujos normalizadores para estimación de densidad?",
        de: "Was ist die Rolle der Jacobi-Determinante in Normalizing Flows für Dichteschätzung?",
        nl: "Wat is de rol van de Jacobiaanse determinant in normalizing flows voor dichtheidsschatting?"
      },
      options: [
        {
          en: "Tracks volume change through transformations for correct likelihood computation",
          es: "Rastrea cambio de volumen a través de transformaciones para cálculo correcto de verosimilitud",
          de: "Verfolgt Volumenänderung durch Transformationen für korrekte Likelihood-Berechnung",
          nl: "Volgt volumeverandering door transformaties voor correcte likelihood-berekening"
        },
        {
          en: "Optimizes network parameters during backpropagation",
          es: "Optimiza parámetros de red durante retropropagación",
          de: "Optimiert Netzwerkparameter während Backpropagation",
          nl: "Optimaliseert netwerkparameters tijdens backpropagation"
        },
        {
          en: "Regularizes the model to prevent overfitting",
          es: "Regulariza el modelo para prevenir sobreajuste",
          de: "Regularisiert das Modell zur Vermeidung von Überanpassung",
          nl: "Regulariseert het model om overfitting te voorkomen"
        },
        {
          en: "Computes gradients for parameter updates",
          es: "Calcula gradientes para actualizaciones de parámetros",
          de: "Berechnet Gradienten für Parameteraktualisierungen",
          nl: "Berekent gradiënten voor parameter-updates"
        }
      ],
      correct: 0,
      explanation: {
        en: "The Jacobian determinant in normalizing flows tracks how volumes change through invertible transformations, essential for computing exact likelihoods via change of variables formula.",
        es: "El determinante jacobiano en flujos normalizadores rastrea cómo cambian los volúmenes a través de transformaciones invertibles, esencial para calcular verosimilitudes exactas.",
        de: "Die Jacobi-Determinante in Normalizing Flows verfolgt Volumenänderungen durch invertierbare Transformationen, essentiell für exakte Likelihood-Berechnung.",
        nl: "De Jacobiaanse determinant in normalizing flows volgt hoe volumes veranderen door inverteerbare transformaties, essentieel voor exacte likelihood-berekening."
      }
    },
    {
      question: {
        en: "What is the theoretical foundation of why overparameterized networks generalize well despite classical learning theory?",
        es: "¿Cuál es el fundamento teórico de por qué redes sobreparametrizadas generalizan bien a pesar de la teoría clásica?",
        de: "Was ist die theoretische Grundlage warum überparametrisierte Netze trotz klassischer Lerntheorie gut generalisieren?",
        nl: "Wat is de theoretische basis waarom overgeparametriseerde netwerken goed generaliseren ondanks klassieke leertheorie?"
      },
      options: [
        {
          en: "Implicit regularization through gradient descent dynamics and inductive biases",
          es: "Regularización implícita a través de dinámicas de descenso de gradiente y sesgos inductivos",
          de: "Implizite Regularisierung durch Gradientenabstiegsdynamik und induktive Verzerrungen",
          nl: "Impliciete regularisatie door gradiënt descent dynamiek en inductieve biases"
        },
        {
          en: "Explicit L2 regularization prevents overfitting",
          es: "Regularización L2 explícita previene sobreajuste",
          de: "Explizite L2-Regularisierung verhindert Überanpassung",
          nl: "Expliciete L2-regularisatie voorkomt overfitting"
        },
        {
          en: "Smaller models always generalize better",
          es: "Modelos más pequeños siempre generalizan mejor",
          de: "Kleinere Modelle generalisieren immer besser",
          nl: "Kleinere modellen generaliseren altijd beter"
        },
        {
          en: "Random initialization guarantees good solutions",
          es: "Inicialización aleatoria garantiza buenas soluciones",
          de: "Zufällige Initialisierung garantiert gute Lösungen",
          nl: "Willekeurige initialisatie garandeert goede oplossingen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Overparameterized networks generalize through implicit regularization from SGD dynamics, which biases toward simpler functions, plus architectural inductive biases that favor generalizable solutions.",
        es: "Las redes sobreparametrizadas generalizan a través de regularización implícita de dinámicas SGD, que sesgan hacia funciones más simples, más sesgos inductivos arquitectónicos.",
        de: "Überparametrisierte Netze generalisieren durch implizite Regularisierung aus SGD-Dynamik, die zu einfacheren Funktionen neigt, plus architektonische induktive Verzerrungen.",
        nl: "Overgeparametriseerde netwerken generaliseren door impliciete regularisatie van SGD-dynamiek, die naar eenvoudigere functies neigt, plus architecturale inductieve biases."
      }
    },
    {
      question: {
        en: "What is the connection between SGD noise and generalization in the context of PAC-Bayes bounds?",
        es: "¿Cuál es la conexión entre ruido SGD y generalización en el contexto de límites PAC-Bayes?",
        de: "Was ist die Verbindung zwischen SGD-Rauschen und Generalisierung im Kontext von PAC-Bayes-Schranken?",
        nl: "Wat is de verbinding tussen SGD-ruis en generalisatie in de context van PAC-Bayes grenzen?"
      },
      options: [
        {
          en: "SGD noise acts as exploration mechanism finding flatter minima with tighter bounds",
          es: "Ruido SGD actúa como mecanismo de exploración encontrando mínimos más planos con límites más ajustados",
          de: "SGD-Rauschen wirkt als Explorationsmechanismus und findet flachere Minima mit engeren Schranken",
          nl: "SGD-ruis werkt als exploratiemechanisme dat vlakkere minima vindt met strakkere grenzen"
        },
        {
          en: "Noise always degrades model performance",
          es: "El ruido siempre degrada el rendimiento del modelo",
          de: "Rauschen verschlechtert immer die Modellleistung",
          nl: "Ruis verslechtert altijd modelprestaties"
        },
        {
          en: "PAC-Bayes bounds are independent of optimization",
          es: "Los límites PAC-Bayes son independientes de la optimización",
          de: "PAC-Bayes-Schranken sind unabhängig von der Optimierung",
          nl: "PAC-Bayes grenzen zijn onafhankelijk van optimalisatie"
        },
        {
          en: "Deterministic optimization yields better bounds",
          es: "Optimización determinista produce mejores límites",
          de: "Deterministische Optimierung liefert bessere Schranken",
          nl: "Deterministische optimalisatie levert betere grenzen"
        }
      ],
      correct: 0,
      explanation: {
        en: "SGD noise helps explore loss landscape, preferentially finding flatter minima that correspond to simpler posteriors in PAC-Bayes framework, yielding tighter generalization bounds.",
        es: "El ruido SGD ayuda a explorar el paisaje de pérdida, encontrando preferentemente mínimos más planos que corresponden a posteriores más simples en el marco PAC-Bayes.",
        de: "SGD-Rauschen hilft bei der Erkundung der Verlustlandschaft, findet bevorzugt flachere Minima, die einfacheren Posterioren im PAC-Bayes-Framework entsprechen.",
        nl: "SGD-ruis helpt het verlieslandschap te verkennen, vindt bij voorkeur vlakkere minima die overeenkomen met eenvoudigere posteriors in PAC-Bayes kader."
      }
    },
    {
      question: {
        en: "What is the theoretical justification for self-attention's effectiveness in capturing long-range dependencies?",
        es: "¿Cuál es la justificación teórica para la efectividad de auto-atención capturando dependencias de largo alcance?",
        de: "Was ist die theoretische Rechtfertigung für die Effektivität von Self-Attention bei langreichweitigen Abhängigkeiten?",
        nl: "Wat is de theoretische rechtvaardiging voor self-attention's effectiviteit in het vastleggen van lange-afstandsafhankelijkheden?"
      },
      options: [
        {
          en: "Constant path length between any positions enables gradient flow without decay",
          es: "Longitud de camino constante entre cualquier posición permite flujo de gradiente sin decaimiento",
          de: "Konstante Pfadlänge zwischen beliebigen Positionen ermöglicht Gradientenfluss ohne Abklingen",
          nl: "Constante padlengte tussen willekeurige posities maakt gradiëntstroom zonder verval mogelijk"
        },
        {
          en: "Recurrent connections are more efficient",
          es: "Las conexiones recurrentes son más eficientes",
          de: "Rekurrente Verbindungen sind effizienter",
          nl: "Recurrente verbindingen zijn efficiënter"
        },
        {
          en: "Convolutions capture global context better",
          es: "Las convoluciones capturan mejor el contexto global",
          de: "Faltungen erfassen globalen Kontext besser",
          nl: "Convoluties vangen globale context beter"
        },
        {
          en: "Local attention patterns are sufficient",
          es: "Los patrones de atención local son suficientes",
          de: "Lokale Aufmerksamkeitsmuster sind ausreichend",
          nl: "Lokale aandachtspatronen zijn voldoende"
        }
      ],
      correct: 0,
      explanation: {
        en: "Self-attention creates direct connections between all positions with constant path length O(1), allowing gradients to flow without the decay issues of RNNs' O(n) sequential paths.",
        es: "La auto-atención crea conexiones directas entre todas las posiciones con longitud de camino constante O(1), permitiendo flujo de gradientes sin problemas de decaimiento.",
        de: "Self-Attention schafft direkte Verbindungen zwischen allen Positionen mit konstanter Pfadlänge O(1), ermöglicht Gradientenfluss ohne Abklingprobleme.",
        nl: "Self-attention creëert directe verbindingen tussen alle posities met constante padlengte O(1), waardoor gradiënten kunnen stromen zonder verval."
      }
    },
    {
      question: {
        en: "What is the mathematical relationship between Neural ODEs and ResNets in the continuous depth limit?",
        es: "¿Cuál es la relación matemática entre ODEs Neuronales y ResNets en el límite de profundidad continua?",
        de: "Was ist die mathematische Beziehung zwischen Neural ODEs und ResNets im kontinuierlichen Tiefenlimit?",
        nl: "Wat is de wiskundige relatie tussen Neural ODEs en ResNets in de continue dieptelimiet?"
      },
      options: [
        {
          en: "ResNets are Euler discretizations of Neural ODEs with step size as layer depth",
          es: "ResNets son discretizaciones de Euler de ODEs Neuronales con tamaño de paso como profundidad de capa",
          de: "ResNets sind Euler-Diskretisierungen von Neural ODEs mit Schrittweite als Schichttiefe",
          nl: "ResNets zijn Euler-discretisaties van Neural ODEs met stapgrootte als laagdiepte"
        },
        {
          en: "They are completely unrelated architectures",
          es: "Son arquitecturas completamente no relacionadas",
          de: "Sie sind völlig unabhängige Architekturen",
          nl: "Het zijn volledig ongerelateerde architecturen"
        },
        {
          en: "Neural ODEs are deeper versions of ResNets",
          es: "Las ODEs Neuronales son versiones más profundas de ResNets",
          de: "Neural ODEs sind tiefere Versionen von ResNets",
          nl: "Neural ODEs zijn diepere versies van ResNets"
        },
        {
          en: "ResNets use different optimization methods",
          es: "ResNets usan métodos de optimización diferentes",
          de: "ResNets verwenden andere Optimierungsmethoden",
          nl: "ResNets gebruiken andere optimalisatiemethoden"
        }
      ],
      correct: 0,
      explanation: {
        en: "ResNets with skip connections h_{t+1} = h_t + f(h_t) are Euler discretizations of the ODE dh/dt = f(h(t)). As layers increase, ResNets approach continuous Neural ODE dynamics.",
        es: "ResNets con conexiones de salto h_{t+1} = h_t + f(h_t) son discretizaciones de Euler del ODE dh/dt = f(h(t)). Al aumentar capas, ResNets se aproximan a dinámicas continuas.",
        de: "ResNets mit Skip-Verbindungen h_{t+1} = h_t + f(h_t) sind Euler-Diskretisierungen der ODE dh/dt = f(h(t)). Mit mehr Schichten nähern sich ResNets kontinuierlichen Dynamiken.",
        nl: "ResNets met skip-verbindingen h_{t+1} = h_t + f(h_t) zijn Euler-discretisaties van de ODE dh/dt = f(h(t)). Met meer lagen benaderen ResNets continue dynamiek."
      }
    },
    {
      question: {
        en: "What is the Wasserstein distance's advantage over KL divergence in generative modeling?",
        es: "¿Cuál es la ventaja de la distancia Wasserstein sobre divergencia KL en modelado generativo?",
        de: "Was ist der Vorteil der Wasserstein-Distanz gegenüber KL-Divergenz in der generativen Modellierung?",
        nl: "Wat is het voordeel van Wasserstein-afstand boven KL-divergentie in generatief modelleren?"
      },
      options: [
        {
          en: "Provides meaningful gradients even when distributions have disjoint support",
          es: "Proporciona gradientes significativos incluso cuando distribuciones tienen soporte disjunto",
          de: "Liefert aussagekräftige Gradienten auch bei disjunktem Support der Verteilungen",
          nl: "Geeft betekenisvolle gradiënten zelfs bij disjuncte ondersteuning van distributies"
        },
        {
          en: "Computationally cheaper to calculate",
          es: "Computacionalmente más barato de calcular",
          de: "Rechnerisch günstiger zu berechnen",
          nl: "Rekenkundig goedkoper om te berekenen"
        },
        {
          en: "Always converges to global optimum",
          es: "Siempre converge al óptimo global",
          de: "Konvergiert immer zum globalen Optimum",
          nl: "Convergeert altijd naar globaal optimum"
        },
        {
          en: "Requires fewer training samples",
          es: "Requiere menos muestras de entrenamiento",
          de: "Benötigt weniger Trainingsdaten",
          nl: "Vereist minder trainingssamples"
        }
      ],
      correct: 0,
      explanation: {
        en: "Wasserstein distance measures optimal transport cost between distributions, providing smooth, meaningful gradients even for non-overlapping supports where KL divergence becomes infinite.",
        es: "La distancia Wasserstein mide el costo de transporte óptimo entre distribuciones, proporcionando gradientes suaves y significativos incluso para soportes no superpuestos.",
        de: "Wasserstein-Distanz misst optimale Transportkosten zwischen Verteilungen, liefert glatte, aussagekräftige Gradienten auch bei nicht-überlappenden Supports.",
        nl: "Wasserstein-afstand meet optimale transportkosten tussen distributies, geeft vloeiende, betekenisvolle gradiënten zelfs bij niet-overlappende ondersteuningen."
      }
    },
    {
      question: {
        en: "What is the role of Hutchinson trace estimator in scalable second-order optimization?",
        es: "¿Cuál es el rol del estimador de traza de Hutchinson en optimización de segundo orden escalable?",
        de: "Was ist die Rolle des Hutchinson-Spurschätzers in skalierbarer Second-Order-Optimierung?",
        nl: "Wat is de rol van Hutchinson trace estimator in schaalbare tweede-orde optimalisatie?"
      },
      options: [
        {
          en: "Estimates trace of Hessian using random projections without forming full matrix",
          es: "Estima traza del Hessiano usando proyecciones aleatorias sin formar matriz completa",
          de: "Schätzt Spur der Hesse-Matrix mit Zufallsprojektionen ohne vollständige Matrix",
          nl: "Schat trace van Hessian met willekeurige projecties zonder volledige matrix te vormen"
        },
        {
          en: "Computes exact eigenvalues efficiently",
          es: "Calcula valores propios exactos eficientemente",
          de: "Berechnet exakte Eigenwerte effizient",
          nl: "Berekent exacte eigenwaarden efficiënt"
        },
        {
          en: "Stores Hessian in compressed format",
          es: "Almacena Hessiano en formato comprimido",
          de: "Speichert Hesse-Matrix in komprimiertem Format",
          nl: "Slaat Hessian op in gecomprimeerd formaat"
        },
        {
          en: "Approximates gradients for large batches",
          es: "Aproxima gradientes para lotes grandes",
          de: "Approximiert Gradienten für große Batches",
          nl: "Benadert gradiënten voor grote batches"
        }
      ],
      correct: 0,
      explanation: {
        en: "Hutchinson trace estimator uses random vector projections (E[v^T H v] for v ~ N(0,I)) to estimate trace(H) without explicitly computing or storing the full Hessian matrix.",
        es: "El estimador de traza de Hutchinson usa proyecciones de vectores aleatorios para estimar trace(H) sin calcular o almacenar explícitamente la matriz Hessiana completa.",
        de: "Hutchinson-Spurschätzer nutzt Zufallsvektorprojektionen zur Schätzung von trace(H) ohne explizite Berechnung oder Speicherung der vollständigen Hesse-Matrix.",
        nl: "Hutchinson trace estimator gebruikt willekeurige vectorprojecties om trace(H) te schatten zonder de volledige Hessian matrix expliciet te berekenen of op te slaan."
      }
    },
    {
      question: {
        en: "What is the theoretical basis for why Batch Normalization helps optimization beyond gradient issues?",
        es: "¿Cuál es la base teórica de por qué Normalización por Lotes ayuda a optimización más allá de problemas de gradiente?",
        de: "Was ist die theoretische Grundlage warum Batch-Normalisierung bei Optimierung über Gradientenprobleme hinaus hilft?",
        nl: "Wat is de theoretische basis waarom Batch Normalization optimalisatie helpt voorbij gradiëntproblemen?"
      },
      options: [
        {
          en: "Smooths optimization landscape making loss surface more Lipschitz",
          es: "Suaviza paisaje de optimización haciendo superficie de pérdida más Lipschitz",
          de: "Glättet Optimierungslandschaft und macht Verlustfläche mehr Lipschitz",
          nl: "Verzacht optimalisatielandschap waardoor verliesoppervlak meer Lipschitz wordt"
        },
        {
          en: "Only prevents gradient vanishing",
          es: "Solo previene desvanecimiento de gradiente",
          de: "Verhindert nur Gradientenverschwinden",
          nl: "Voorkomt alleen gradiënt verdwijning"
        },
        {
          en: "Reduces model capacity",
          es: "Reduce capacidad del modelo",
          de: "Reduziert Modellkapazität",
          nl: "Vermindert modelcapaciteit"
        },
        {
          en: "Increases learning rate only",
          es: "Solo aumenta tasa de aprendizaje",
          de: "Erhöht nur die Lernrate",
          nl: "Verhoogt alleen leersnelheid"
        }
      ],
      correct: 0,
      explanation: {
        en: "Batch Normalization smooths the optimization landscape by making gradients more predictable and loss surface more Lipschitz, enabling larger learning rates and faster convergence.",
        es: "La Normalización por Lotes suaviza el paisaje de optimización haciendo gradientes más predecibles y superficie de pérdida más Lipschitz, permitiendo tasas de aprendizaje mayores.",
        de: "Batch-Normalisierung glättet die Optimierungslandschaft, macht Gradienten vorhersagbarer und Verlustfläche mehr Lipschitz, ermöglicht größere Lernraten.",
        nl: "Batch Normalization verzacht het optimalisatielandschap door gradiënten voorspelbaarder te maken en verliesoppervlak meer Lipschitz, wat grotere leersnelheden mogelijk maakt."
      }
    },
    {
      question: {
        en: "What is the connection between mutual information and representation learning in InfoMax principle?",
        es: "¿Cuál es la conexión entre información mutua y aprendizaje de representaciones en el principio InfoMax?",
        de: "Was ist die Verbindung zwischen gegenseitiger Information und Repräsentationslernen im InfoMax-Prinzip?",
        nl: "Wat is de verbinding tussen wederzijdse informatie en representatieleren in het InfoMax-principe?"
      },
      options: [
        {
          en: "Maximizing MI between input and representation preserves task-relevant information",
          es: "Maximizar IM entre entrada y representación preserva información relevante para la tarea",
          de: "Maximierung der MI zwischen Eingabe und Repräsentation bewahrt aufgabenrelevante Information",
          nl: "Maximaliseren van MI tussen input en representatie behoudt taakrelevante informatie"
        },
        {
          en: "Minimizing MI improves compression",
          es: "Minimizar IM mejora compresión",
          de: "Minimierung der MI verbessert Kompression",
          nl: "Minimaliseren van MI verbetert compressie"
        },
        {
          en: "MI is irrelevant to representation quality",
          es: "IM es irrelevante para calidad de representación",
          de: "MI ist irrelevant für Repräsentationsqualität",
          nl: "MI is irrelevant voor representatiekwaliteit"
        },
        {
          en: "Random representations maximize MI",
          es: "Representaciones aleatorias maximizan IM",
          de: "Zufällige Repräsentationen maximieren MI",
          nl: "Willekeurige representaties maximaliseren MI"
        }
      ],
      correct: 0,
      explanation: {
        en: "InfoMax principle suggests maximizing mutual information between input and learned representations preserves all potentially useful information while enabling dimensionality reduction.",
        es: "El principio InfoMax sugiere que maximizar información mutua entre entrada y representaciones aprendidas preserva toda información potencialmente útil.",
        de: "Das InfoMax-Prinzip schlägt vor, gegenseitige Information zwischen Eingabe und gelernten Repräsentationen zu maximieren, um alle potenziell nützlichen Informationen zu bewahren.",
        nl: "Het InfoMax-principe suggereert dat maximaliseren van wederzijdse informatie tussen input en geleerde representaties alle potentieel nuttige informatie behoudt."
      }
    },
    {
      question: {
        en: "What is the significance of the Rademacher complexity in deep learning generalization bounds?",
        es: "¿Cuál es el significado de la complejidad de Rademacher en límites de generalización de deep learning?",
        de: "Was ist die Bedeutung der Rademacher-Komplexität in Deep Learning Generalisierungsschranken?",
        nl: "Wat is de betekenis van Rademacher-complexiteit in deep learning generalisatiegrenzen?"
      },
      options: [
        {
          en: "Measures capacity by ability to fit random labels, tighter than VC dimension",
          es: "Mide capacidad por habilidad de ajustar etiquetas aleatorias, más ajustado que dimensión VC",
          de: "Misst Kapazität durch Fähigkeit zufällige Labels anzupassen, enger als VC-Dimension",
          nl: "Meet capaciteit door vermogen willekeurige labels te fitten, strakker dan VC-dimensie"
        },
        {
          en: "Only applies to linear models",
          es: "Solo aplica a modelos lineales",
          de: "Gilt nur für lineare Modelle",
          nl: "Geldt alleen voor lineaire modellen"
        },
        {
          en: "Measures training accuracy",
          es: "Mide precisión de entrenamiento",
          de: "Misst Trainingsgenauigkeit",
          nl: "Meet trainingsnauwkeurigheid"
        },
        {
          en: "Unrelated to model complexity",
          es: "No relacionado con complejidad del modelo",
          de: "Unabhängig von Modellkomplexität",
          nl: "Ongerelateerd aan modelcomplexiteit"
        }
      ],
      correct: 0,
      explanation: {
        en: "Rademacher complexity measures a hypothesis class's ability to fit random noise by correlating with random ±1 labels, providing data-dependent generalization bounds tighter than VC dimension.",
        es: "La complejidad de Rademacher mide la capacidad de una clase de hipótesis para ajustar ruido aleatorio correlacionando con etiquetas ±1 aleatorias.",
        de: "Rademacher-Komplexität misst die Fähigkeit einer Hypothesenklasse, zufälliges Rauschen durch Korrelation mit zufälligen ±1 Labels anzupassen.",
        nl: "Rademacher-complexiteit meet het vermogen van een hypotheseklasse om willekeurige ruis te fitten door correlatie met willekeurige ±1 labels."
      }
    },
    {
      question: {
        en: "What is the implicit bias of gradient descent in linear models regarding margin maximization?",
        es: "¿Cuál es el sesgo implícito del descenso de gradiente en modelos lineales respecto a maximización de margen?",
        de: "Was ist die implizite Verzerrung des Gradientenabstiegs in linearen Modellen bezüglich Marginmaximierung?",
        nl: "Wat is de impliciete bias van gradiënt descent in lineaire modellen betreffende margemaximalisatie?"
      },
      options: [
        {
          en: "Converges to max-margin solution minimizing L2 norm among perfect classifiers",
          es: "Converge a solución de margen máximo minimizando norma L2 entre clasificadores perfectos",
          de: "Konvergiert zur Max-Margin-Lösung mit minimaler L2-Norm unter perfekten Klassifikatoren",
          nl: "Convergeert naar max-marge oplossing die L2-norm minimaliseert onder perfecte classifiers"
        },
        {
          en: "Finds random perfect classifier",
          es: "Encuentra clasificador perfecto aleatorio",
          de: "Findet zufälligen perfekten Klassifikator",
          nl: "Vindt willekeurige perfecte classifier"
        },
        {
          en: "Always overfits to training data",
          es: "Siempre sobreajusta a datos de entrenamiento",
          de: "Überpasst immer an Trainingsdaten",
          nl: "Overfit altijd op trainingsdata"
        },
        {
          en: "Margin is irrelevant to convergence",
          es: "El margen es irrelevante para convergencia",
          de: "Margin ist irrelevant für Konvergenz",
          nl: "Marge is irrelevant voor convergentie"
        }
      ],
      correct: 0,
      explanation: {
        en: "For separable data, gradient descent on linear models implicitly biases toward the max-margin solution (SVM solution), converging to the minimum L2 norm solution among all perfect classifiers.",
        es: "Para datos separables, el descenso de gradiente en modelos lineales sesga implícitamente hacia la solución de margen máximo (solución SVM).",
        de: "Für trennbare Daten neigt der Gradientenabstieg bei linearen Modellen implizit zur Max-Margin-Lösung (SVM-Lösung).",
        nl: "Voor scheidbare data heeft gradiënt descent op lineaire modellen impliciete bias naar de max-marge oplossing (SVM-oplossing)."
      }
    },
    {
      question: {
        en: "What is the lottery ticket hypothesis's implication for neural network pruning at initialization?",
        es: "¿Cuál es la implicación de la hipótesis del billete de lotería para poda de redes neuronales en inicialización?",
        de: "Was ist die Implikation der Lotterielos-Hypothese für das Pruning neuronaler Netze bei Initialisierung?",
        nl: "Wat is de implicatie van de loterijticket-hypothese voor neural network pruning bij initialisatie?"
      },
      options: [
        {
          en: "Winning tickets exist at initialization but require original init weights after identifying structure",
          es: "Billetes ganadores existen en inicialización pero requieren pesos originales después de identificar estructura",
          de: "Gewinnlose existieren bei Initialisierung, benötigen aber ursprüngliche Gewichte nach Strukturidentifikation",
          nl: "Winnende tickets bestaan bij initialisatie maar vereisen originele gewichten na structuuridentificatie"
        },
        {
          en: "Any random subnetwork performs equally well",
          es: "Cualquier subred aleatoria funciona igualmente bien",
          de: "Jedes zufällige Teilnetz funktioniert gleich gut",
          nl: "Elk willekeurig subnetwerk presteert even goed"
        },
        {
          en: "Pruning before training always fails",
          es: "Podar antes de entrenar siempre falla",
          de: "Pruning vor dem Training scheitert immer",
          nl: "Pruning voor training faalt altijd"
        },
        {
          en: "Dense networks are always optimal",
          es: "Redes densas son siempre óptimas",
          de: "Dichte Netze sind immer optimal",
          nl: "Dichte netwerken zijn altijd optimaal"
        }
      ],
      correct: 0,
      explanation: {
        en: "The lottery ticket hypothesis shows that sparse winning tickets exist at initialization, but they need their original initialization values—rewinding is crucial for successful training.",
        es: "La hipótesis del billete de lotería muestra que existen billetes ganadores dispersos en inicialización, pero necesitan sus valores de inicialización originales.",
        de: "Die Lotterielos-Hypothese zeigt, dass spärliche Gewinnlose bei Initialisierung existieren, aber ihre ursprünglichen Initialisierungswerte benötigen.",
        nl: "De loterijticket-hypothese toont dat sparse winnende tickets bestaan bij initialisatie, maar ze hebben hun originele initialisatiewaarden nodig."
      }
    },
    {
      question: {
        en: "What is the role of spectral bias in neural network learning dynamics?",
        es: "¿Cuál es el rol del sesgo espectral en dinámicas de aprendizaje de redes neuronales?",
        de: "Was ist die Rolle der spektralen Verzerrung in der Lerndynamik neuronaler Netze?",
        nl: "Wat is de rol van spectrale bias in neural network leerdynamiek?"
      },
      options: [
        {
          en: "Networks learn low-frequency patterns first, gradually fitting higher frequencies",
          es: "Redes aprenden patrones de baja frecuencia primero, ajustando gradualmente frecuencias más altas",
          de: "Netze lernen zuerst niederfrequente Muster, passen allmählich höhere Frequenzen an",
          nl: "Netwerken leren eerst laagfrequente patronen, passen geleidelijk hogere frequenties aan"
        },
        {
          en: "High frequencies are learned immediately",
          es: "Frecuencias altas se aprenden inmediatamente",
          de: "Hohe Frequenzen werden sofort gelernt",
          nl: "Hoge frequenties worden onmiddellijk geleerd"
        },
        {
          en: "All frequencies learned simultaneously",
          es: "Todas las frecuencias se aprenden simultáneamente",
          de: "Alle Frequenzen werden gleichzeitig gelernt",
          nl: "Alle frequenties worden gelijktijdig geleerd"
        },
        {
          en: "Frequency is irrelevant to learning",
          es: "La frecuencia es irrelevante para el aprendizaje",
          de: "Frequenz ist irrelevant für das Lernen",
          nl: "Frequentie is irrelevant voor leren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Neural networks exhibit spectral bias, preferentially learning low-frequency components of target functions first. This F-principle explains why networks generalize despite high capacity.",
        es: "Las redes neuronales exhiben sesgo espectral, aprendiendo preferentemente componentes de baja frecuencia de funciones objetivo primero.",
        de: "Neuronale Netze zeigen spektrale Verzerrung, lernen bevorzugt niederfrequente Komponenten der Zielfunktionen zuerst.",
        nl: "Neurale netwerken vertonen spectrale bias, leren bij voorkeur eerst laagfrequente componenten van doelfuncties."
      }
    },
    {
      question: {
        en: "What is the theoretical foundation of contrastive learning's success in self-supervised representation learning?",
        es: "¿Cuál es el fundamento teórico del éxito del aprendizaje contrastivo en aprendizaje de representación autosupervisado?",
        de: "Was ist die theoretische Grundlage des Erfolgs von kontrastivem Lernen im selbstüberwachten Repräsentationslernen?",
        nl: "Wat is de theoretische basis van het succes van contrastief leren in zelf-gesuperviseerd representatieleren?"
      },
      options: [
        {
          en: "Maximizes lower bound on mutual information between different augmented views",
          es: "Maximiza límite inferior de información mutua entre diferentes vistas aumentadas",
          de: "Maximiert untere Schranke der gegenseitigen Information zwischen verschiedenen augmentierten Ansichten",
          nl: "Maximaliseert ondergrens van wederzijdse informatie tussen verschillende geaugmenteerde views"
        },
        {
          en: "Minimizes all pairwise distances",
          es: "Minimiza todas las distancias por pares",
          de: "Minimiert alle paarweisen Abstände",
          nl: "Minimaliseert alle paarsgewijze afstanden"
        },
        {
          en: "Requires labeled data for success",
          es: "Requiere datos etiquetados para éxito",
          de: "Benötigt gelabelte Daten für Erfolg",
          nl: "Vereist gelabelde data voor succes"
        },
        {
          en: "Random projections work equally well",
          es: "Proyecciones aleatorias funcionan igualmente bien",
          de: "Zufällige Projektionen funktionieren gleich gut",
          nl: "Willekeurige projecties werken even goed"
        }
      ],
      correct: 0,
      explanation: {
        en: "Contrastive learning maximizes a lower bound on mutual information between different augmented views of the same data, learning invariances while preserving semantic information.",
        es: "El aprendizaje contrastivo maximiza un límite inferior de información mutua entre diferentes vistas aumentadas de los mismos datos.",
        de: "Kontrastives Lernen maximiert eine untere Schranke der gegenseitigen Information zwischen verschiedenen augmentierten Ansichten derselben Daten.",
        nl: "Contrastief leren maximaliseert een ondergrens van wederzijdse informatie tussen verschillende geaugmenteerde views van dezelfde data."
      }
    },
    {
      question: {
        en: "What is the connection between the Neural Tangent Kernel and infinite-width network training dynamics?",
        es: "¿Cuál es la conexión entre el Kernel Tangente Neural y dinámicas de entrenamiento de redes de ancho infinito?",
        de: "Was ist die Verbindung zwischen dem Neural Tangent Kernel und Trainingsdynamik unendlich breiter Netze?",
        nl: "Wat is de verbinding tussen de Neural Tangent Kernel en trainings dynamiek van oneindig brede netwerken?"
      },
      options: [
        {
          en: "NTK remains constant during training, reducing dynamics to kernel regression",
          es: "NTK permanece constante durante entrenamiento, reduciendo dinámicas a regresión kernel",
          de: "NTK bleibt während Training konstant, reduziert Dynamik auf Kernel-Regression",
          nl: "NTK blijft constant tijdens training, reduceert dynamiek tot kernel regressie"
        },
        {
          en: "NTK changes dramatically throughout training",
          es: "NTK cambia dramáticamente durante el entrenamiento",
          de: "NTK ändert sich dramatisch während des Trainings",
          nl: "NTK verandert dramatisch tijdens training"
        },
        {
          en: "Width is irrelevant to kernel behavior",
          es: "El ancho es irrelevante para el comportamiento del kernel",
          de: "Breite ist irrelevant für Kernel-Verhalten",
          nl: "Breedte is irrelevant voor kernel gedrag"
        },
        {
          en: "Finite networks behave identically",
          es: "Redes finitas se comportan idénticamente",
          de: "Endliche Netze verhalten sich identisch",
          nl: "Eindige netwerken gedragen zich identiek"
        }
      ],
      correct: 0,
      explanation: {
        en: "In infinite-width limit, the Neural Tangent Kernel becomes deterministic and remains constant during training, making neural network training equivalent to kernel regression with NTK.",
        es: "En el límite de ancho infinito, el Kernel Tangente Neural se vuelve determinista y permanece constante durante entrenamiento.",
        de: "Im Grenzwert unendlicher Breite wird der Neural Tangent Kernel deterministisch und bleibt während des Trainings konstant.",
        nl: "In de oneindig brede limiet wordt de Neural Tangent Kernel deterministisch en blijft constant tijdens training."
      }
    },
    {
      question: {
        en: "What is the mechanism behind gradient flow in Graph Neural Networks for learning node representations?",
        es: "¿Cuál es el mecanismo detrás del flujo de gradiente en Redes Neuronales de Grafos para aprender representaciones de nodos?",
        de: "Was ist der Mechanismus hinter dem Gradientenfluss in Graph Neural Networks zum Lernen von Knotendarstellungen?",
        nl: "Wat is het mechanisme achter gradiënt flow in Graph Neural Networks voor het leren van node representaties?"
      },
      options: [
        {
          en: "Gradients propagate through graph structure via message passing aggregation",
          es: "Gradientes se propagan a través de estructura del grafo vía agregación de paso de mensajes",
          de: "Gradienten propagieren durch Graphstruktur über Message-Passing-Aggregation",
          nl: "Gradiënten propageren door graafstructuur via message passing aggregatie"
        },
        {
          en: "Each node trains independently",
          es: "Cada nodo entrena independientemente",
          de: "Jeder Knoten trainiert unabhängig",
          nl: "Elke node traint onafhankelijk"
        },
        {
          en: "Only local gradients matter",
          es: "Solo gradientes locales importan",
          de: "Nur lokale Gradienten sind wichtig",
          nl: "Alleen lokale gradiënten zijn belangrijk"
        },
        {
          en: "Graph structure is ignored",
          es: "La estructura del grafo se ignora",
          de: "Graphstruktur wird ignoriert",
          nl: "Graafstructuur wordt genegeerd"
        }
      ],
      correct: 0,
      explanation: {
        en: "In GNNs, gradients flow through the graph topology during backpropagation, with each node's gradient influenced by its neighbors through the message passing aggregation structure.",
        es: "En GNNs, los gradientes fluyen a través de la topología del grafo durante retropropagación, con el gradiente de cada nodo influenciado por sus vecinos.",
        de: "In GNNs fließen Gradienten während Backpropagation durch die Graphtopologie, wobei der Gradient jedes Knotens durch Nachbarn beeinflusst wird.",
        nl: "In GNNs stromen gradiënten door de graaftopologie tijdens backpropagation, waarbij de gradiënt van elke node beïnvloed wordt door buren."
      }
    },
    {
      question: {
        en: "What is the theoretical justification for skip connections beyond gradient flow?",
        es: "¿Cuál es la justificación teórica para conexiones de salto más allá del flujo de gradiente?",
        de: "Was ist die theoretische Rechtfertigung für Skip-Verbindungen über Gradientenfluss hinaus?",
        nl: "Wat is de theoretische rechtvaardiging voor skip-verbindingen voorbij gradiënt flow?"
      },
      options: [
        {
          en: "Enable learning of residual functions which are easier to optimize than full transformations",
          es: "Permiten aprendizaje de funciones residuales que son más fáciles de optimizar que transformaciones completas",
          de: "Ermöglichen Lernen von Residualfunktionen, die einfacher zu optimieren sind als vollständige Transformationen",
          nl: "Maken leren van residuele functies mogelijk die makkelijker te optimaliseren zijn dan volledige transformaties"
        },
        {
          en: "Only prevent vanishing gradients",
          es: "Solo previenen gradientes que desvanecen",
          de: "Verhindern nur verschwindende Gradienten",
          nl: "Voorkomen alleen verdwijnende gradiënten"
        },
        {
          en: "Reduce model parameters",
          es: "Reducen parámetros del modelo",
          de: "Reduzieren Modellparameter",
          nl: "Verminderen modelparameters"
        },
        {
          en: "Speed up inference only",
          es: "Solo aceleran inferencia",
          de: "Beschleunigen nur Inferenz",
          nl: "Versnellen alleen inferentie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Skip connections reformulate learning as finding residual mappings F(x) = H(x) - x. Learning the residual (difference) is often easier than learning the entire transformation H(x).",
        es: "Las conexiones de salto reformulan el aprendizaje como encontrar mapeos residuales F(x) = H(x) - x. Aprender el residuo es más fácil que aprender toda la transformación.",
        de: "Skip-Verbindungen formulieren das Lernen als Finden von Residualabbildungen F(x) = H(x) - x um. Das Lernen des Residuums ist einfacher als die gesamte Transformation.",
        nl: "Skip-verbindingen herformuleren leren als het vinden van residuele mappings F(x) = H(x) - x. Het residu leren is makkelijker dan de hele transformatie."
      }
    },
    {
      question: {
        en: "What is the role of the Hessian's eigenspectrum in understanding loss landscape geometry?",
        es: "¿Cuál es el rol del espectro propio del Hessiano en entender la geometría del paisaje de pérdida?",
        de: "Was ist die Rolle des Eigenspektrums der Hesse-Matrix beim Verstehen der Verlustlandschaftsgeometrie?",
        nl: "Wat is de rol van het eigenspectrum van de Hessian in het begrijpen van verlieslandschap geometrie?"
      },
      options: [
        {
          en: "Eigenvalues indicate sharpness/flatness, eigenvectors show descent directions",
          es: "Valores propios indican nitidez/planitud, vectores propios muestran direcciones de descenso",
          de: "Eigenwerte zeigen Schärfe/Flachheit, Eigenvektoren zeigen Abstiegsrichtungen",
          nl: "Eigenwaarden geven scherpte/vlakheid aan, eigenvectoren tonen afdalingsrichtingen"
        },
        {
          en: "Only largest eigenvalue matters",
          es: "Solo el valor propio más grande importa",
          de: "Nur der größte Eigenwert ist wichtig",
          nl: "Alleen grootste eigenwaarde is belangrijk"
        },
        {
          en: "Eigenspectrum is random noise",
          es: "El espectro propio es ruido aleatorio",
          de: "Eigenspektrum ist zufälliges Rauschen",
          nl: "Eigenspectrum is willekeurige ruis"
        },
        {
          en: "Hessian is always identity matrix",
          es: "El Hessiano es siempre matriz identidad",
          de: "Hesse-Matrix ist immer Einheitsmatrix",
          nl: "Hessian is altijd identiteitsmatrix"
        }
      ],
      correct: 0,
      explanation: {
        en: "The Hessian's eigenvalues measure curvature magnitude (sharpness/flatness of minima), while eigenvectors indicate principal curvature directions, crucial for optimization and generalization.",
        es: "Los valores propios del Hessiano miden magnitud de curvatura (nitidez/planitud de mínimos), mientras vectores propios indican direcciones principales de curvatura.",
        de: "Die Eigenwerte der Hesse-Matrix messen Krümmungsstärke (Schärfe/Flachheit von Minima), während Eigenvektoren Hauptkrümmungsrichtungen angeben.",
        nl: "De eigenwaarden van de Hessian meten kromming magnitude (scherpte/vlakheid van minima), terwijl eigenvectoren hoofdkrommingsrichtingen aangeven."
      }
    },
    {
      question: {
        en: "What is the fundamental trade-off in meta-learning between task-specific adaptation and cross-task generalization?",
        es: "¿Cuál es el trade-off fundamental en meta-aprendizaje entre adaptación específica de tarea y generalización entre tareas?",
        de: "Was ist der fundamentale Trade-off im Meta-Learning zwischen aufgabenspezifischer Anpassung und aufgabenübergreifender Generalisierung?",
        nl: "Wat is de fundamentele trade-off in meta-learning tussen taakspecifieke adaptatie en cross-task generalisatie?"
      },
      options: [
        {
          en: "Initialization must balance being close to all tasks while allowing rapid specialization",
          es: "Inicialización debe equilibrar estar cerca de todas las tareas permitiendo especialización rápida",
          de: "Initialisierung muss Balance zwischen Nähe zu allen Aufgaben und schneller Spezialisierung finden",
          nl: "Initialisatie moet balanceren tussen dicht bij alle taken zijn en snelle specialisatie toestaan"
        },
        {
          en: "Tasks are always independent",
          es: "Las tareas son siempre independientes",
          de: "Aufgaben sind immer unabhängig",
          nl: "Taken zijn altijd onafhankelijk"
        },
        {
          en: "Specialization is unnecessary",
          es: "La especialización es innecesaria",
          de: "Spezialisierung ist unnötig",
          nl: "Specialisatie is onnodig"
        },
        {
          en: "One model fits all tasks perfectly",
          es: "Un modelo ajusta todas las tareas perfectamente",
          de: "Ein Modell passt perfekt zu allen Aufgaben",
          nl: "Één model past perfect op alle taken"
        }
      ],
      correct: 0,
      explanation: {
        en: "Meta-learning must find initializations in a 'Goldilocks zone'—close enough to all tasks for few-shot adaptation but not overspecialized to the meta-training distribution.",
        es: "El meta-aprendizaje debe encontrar inicializaciones en una 'zona Goldilocks'—suficientemente cerca de todas las tareas para adaptación de pocos disparos.",
        de: "Meta-Learning muss Initialisierungen in einer 'Goldilocks-Zone' finden—nah genug an allen Aufgaben für Few-Shot-Anpassung.",
        nl: "Meta-learning moet initialisaties vinden in een 'Goldilocks zone'—dicht genoeg bij alle taken voor few-shot adaptatie."
      }
    }
  ]
};