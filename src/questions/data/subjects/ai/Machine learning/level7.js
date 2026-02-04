module.exports = {
  questions: [
    {
      question: {
        en: "What is the Rademacher complexity and its role in learning theory?",
        es: "¿Qué es la complejidad de Rademacher y su rol en teoría del aprendizaje?",
        de: "Was ist die Rademacher-Komplexität und ihre Rolle in der Lerntheorie?",
        nl: "Wat is Rademacher-complexiteit en haar rol in leertheorie?"
      },
      options: [
        {
          en: "Measures hypothesis class capacity using random labels",
          es: "Mide la capacidad de clase de hipótesis usando etiquetas aleatorias",
          de: "Misst Hypothesenklassen-Kapazität mit zufälligen Labels",
          nl: "Meet hypotheseklasse-capaciteit met willekeurige labels"
        },
        {
          en: "Counts number of parameters",
          es: "Cuenta el número de parámetros",
          de: "Zählt Anzahl der Parameter",
          nl: "Telt aantal parameters"
        },
        {
          en: "Measures training speed",
          es: "Mide la velocidad de entrenamiento",
          de: "Misst Trainingsgeschwindigkeit",
          nl: "Meet trainingssnelheid"
        },
        {
          en: "Calculates model accuracy",
          es: "Calcula la precisión del modelo",
          de: "Berechnet Modellgenauigkeit",
          nl: "Berekent modelnauwkeurigheid"
        }
      ],
      correct: 0,
      explanation: {
        en: "Rademacher complexity measures the ability of a hypothesis class to fit random noise, providing generalization bounds. Higher complexity indicates greater risk of overfitting.",
        es: "La complejidad de Rademacher mide la capacidad de una clase de hipótesis para ajustar ruido aleatorio, proporcionando límites de generalización.",
        de: "Rademacher-Komplexität misst die Fähigkeit einer Hypothesenklasse, zufälliges Rauschen anzupassen und liefert Generalisierungsgrenzen.",
        nl: "Rademacher-complexiteit meet het vermogen van een hypotheseklasse om willekeurige ruis te fitten, geeft generalisatiegrenzen."
      }
    },
    {
      question: {
        en: "How does the Information Bottleneck principle apply to deep learning?",
        es: "¿Cómo se aplica el principio del Cuello de Botella de Información al deep learning?",
        de: "Wie gilt das Information Bottleneck Prinzip für Deep Learning?",
        nl: "Hoe is het Information Bottleneck principe van toepassing op deep learning?"
      },
      options: [
        {
          en: "Compresses input while preserving task-relevant information",
          es: "Comprime entrada preservando información relevante para la tarea",
          de: "Komprimiert Eingabe während aufgabenrelevante Information erhalten bleibt",
          nl: "Comprimeert input terwijl taakrelevante informatie behouden blijft"
        },
        {
          en: "Increases information flow",
          es: "Aumenta el flujo de información",
          de: "Erhöht Informationsfluss",
          nl: "Verhoogt informatiestroom"
        },
        {
          en: "Removes all bottlenecks",
          es: "Elimina todos los cuellos de botella",
          de: "Entfernt alle Flaschenhälse",
          nl: "Verwijdert alle knelpunten"
        },
        {
          en: "Maximizes entropy",
          es: "Maximiza la entropía",
          de: "Maximiert Entropie",
          nl: "Maximaliseert entropie"
        }
      ],
      correct: 0,
      explanation: {
        en: "The Information Bottleneck principle suggests deep networks learn by compressing input information while retaining what's needed for prediction, balancing compression and preservation.",
        es: "El principio del Cuello de Botella de Información sugiere que las redes profundas aprenden comprimiendo información de entrada mientras retienen lo necesario para predicción.",
        de: "Das Information Bottleneck Prinzip besagt, dass tiefe Netze durch Kompression der Eingabeinformation lernen während sie Vorhersage-relevante Information behalten.",
        nl: "Het Information Bottleneck principe suggereert dat diepe netwerken leren door input-informatie te comprimeren terwijl voorspellingsrelevante informatie behouden blijft."
      }
    },
    {
      question: {
        en: "What is the lottery ticket hypothesis in neural network pruning?",
        es: "¿Qué es la hipótesis del boleto de lotería en poda de redes neuronales?",
        de: "Was ist die Lottery Ticket Hypothese beim Neural Network Pruning?",
        nl: "Wat is de lottery ticket hypothese bij neural network pruning?"
      },
      options: [
        {
          en: "Sparse subnetworks can match full network performance when trained from scratch",
          es: "Subredes dispersas pueden igualar el rendimiento completo entrenando desde cero",
          de: "Dünne Teilnetze können volle Netzleistung erreichen bei Training von Grund auf",
          nl: "Sparse subnetwerken kunnen volledige netwerkprestatie evenaren bij training vanaf nul"
        },
        {
          en: "Random pruning works best",
          es: "La poda aleatoria funciona mejor",
          de: "Zufälliges Pruning funktioniert am besten",
          nl: "Willekeurig snoeien werkt het beste"
        },
        {
          en: "All weights are equally important",
          es: "Todos los pesos son igualmente importantes",
          de: "Alle Gewichte sind gleich wichtig",
          nl: "Alle gewichten zijn even belangrijk"
        },
        {
          en: "Pruning always reduces accuracy",
          es: "La poda siempre reduce la precisión",
          de: "Pruning reduziert immer die Genauigkeit",
          nl: "Snoeien vermindert altijd nauwkeurigheid"
        }
      ],
      correct: 0,
      explanation: {
        en: "The lottery ticket hypothesis states that dense networks contain sparse subnetworks (winning tickets) that, when trained with the same initialization, achieve comparable accuracy.",
        es: "La hipótesis del boleto de lotería afirma que las redes densas contienen subredes dispersas que, entrenadas con la misma inicialización, logran precisión comparable.",
        de: "Die Lottery Ticket Hypothese besagt, dass dichte Netze dünne Teilnetze enthalten, die bei gleichem Training vergleichbare Genauigkeit erreichen.",
        nl: "De lottery ticket hypothese stelt dat dichte netwerken sparse subnetwerken bevatten die bij dezelfde initialisatie vergelijkbare nauwkeurigheid bereiken."
      }
    },
    {
      question: {
        en: "What is the role of the Hessian matrix in second-order optimization?",
        es: "¿Cuál es el rol de la matriz Hessiana en optimización de segundo orden?",
        de: "Was ist die Rolle der Hesse-Matrix bei Second-Order-Optimierung?",
        nl: "Wat is de rol van de Hessische matrix in tweede-orde optimalisatie?"
      },
      options: [
        {
          en: "Captures curvature information for more informed parameter updates",
          es: "Captura información de curvatura para actualizaciones más informadas",
          de: "Erfasst Krümmungsinformation für informiertere Parameteraktualisierungen",
          nl: "Vangt krommingsinformatie voor beter geïnformeerde parameterupdates"
        },
        {
          en: "Stores gradients",
          es: "Almacena gradientes",
          de: "Speichert Gradienten",
          nl: "Slaat gradiënten op"
        },
        {
          en: "Reduces memory usage",
          es: "Reduce el uso de memoria",
          de: "Reduziert Speichernutzung",
          nl: "Vermindert geheugengebruik"
        },
        {
          en: "Speeds up backpropagation",
          es: "Acelera la retropropagación",
          de: "Beschleunigt Rückwärtspropagierung",
          nl: "Versnelt backpropagatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "The Hessian matrix contains second-order partial derivatives, providing curvature information that enables more efficient optimization by adapting to the loss landscape geometry.",
        es: "La matriz Hessiana contiene derivadas parciales de segundo orden, proporcionando información de curvatura para optimización más eficiente adaptándose a la geometría.",
        de: "Die Hesse-Matrix enthält partielle Ableitungen zweiter Ordnung und liefert Krümmungsinformation für effizientere Optimierung durch Anpassung an die Verlustlandschaft.",
        nl: "De Hessische matrix bevat tweede-orde partiële afgeleiden, geeft krommingsinformatie voor efficiëntere optimalisatie door aanpassing aan het verlieslandschap."
      }
    },
    {
      question: {
        en: "What is Neural Architecture Search (NAS) and its main approaches?",
        es: "¿Qué es Neural Architecture Search (NAS) y sus enfoques principales?",
        de: "Was ist Neural Architecture Search (NAS) und seine Hauptansätze?",
        nl: "Wat is Neural Architecture Search (NAS) en zijn hoofdbenaderingen?"
      },
      options: [
        {
          en: "Automated design of neural architectures using reinforcement learning or evolution",
          es: "Diseño automatizado de arquitecturas usando aprendizaje por refuerzo o evolución",
          de: "Automatisiertes Design von Architekturen mittels Reinforcement Learning oder Evolution",
          nl: "Geautomatiseerd ontwerp van architecturen met reinforcement learning of evolutie"
        },
        {
          en: "Manual architecture design",
          es: "Diseño manual de arquitectura",
          de: "Manuelles Architekturdesign",
          nl: "Handmatig architectuurontwerp"
        },
        {
          en: "Random architecture selection",
          es: "Selección aleatoria de arquitectura",
          de: "Zufällige Architekturauswahl",
          nl: "Willekeurige architectuurselectie"
        },
        {
          en: "Fixed architecture patterns",
          es: "Patrones de arquitectura fijos",
          de: "Feste Architekturmuster",
          nl: "Vaste architectuurpatronen"
        }
      ],
      correct: 0,
      explanation: {
        en: "NAS automates neural network design using methods like reinforcement learning, evolutionary algorithms, or gradient-based approaches to discover optimal architectures for specific tasks.",
        es: "NAS automatiza el diseño de redes neuronales usando métodos como aprendizaje por refuerzo, algoritmos evolutivos o enfoques basados en gradientes.",
        de: "NAS automatisiert Neuronales Netz-Design mittels Reinforcement Learning, evolutionären Algorithmen oder gradientenbasierten Ansätzen.",
        nl: "NAS automatiseert neuraal netwerkontwerp met methoden zoals reinforcement learning, evolutionaire algoritmen of gradiënt-gebaseerde benaderingen."
      }
    },
    {
      question: {
        en: "How do Normalizing Flows work for density estimation?",
        es: "¿Cómo funcionan los Flujos Normalizadores para estimación de densidad?",
        de: "Wie funktionieren Normalizing Flows für Dichteschätzung?",
        nl: "Hoe werken Normalizing Flows voor dichtheidsschatting?"
      },
      options: [
        {
          en: "Transform simple distributions through invertible functions with tractable Jacobians",
          es: "Transforman distribuciones simples mediante funciones invertibles con Jacobianos tratables",
          de: "Transformieren einfache Verteilungen durch invertierbare Funktionen mit berechenbaren Jacobi-Matrizen",
          nl: "Transformeren eenvoudige verdelingen via inverteerbare functies met berekenbare Jacobianen"
        },
        {
          en: "Use non-invertible transformations",
          es: "Usan transformaciones no invertibles",
          de: "Nutzen nicht-invertierbare Transformationen",
          nl: "Gebruiken niet-inverteerbare transformaties"
        },
        {
          en: "Approximate densities directly",
          es: "Aproximan densidades directamente",
          de: "Approximieren Dichten direkt",
          nl: "Benaderen dichtheden direct"
        },
        {
          en: "Sample without computing likelihood",
          es: "Muestrean sin calcular verosimilitud",
          de: "Samplen ohne Likelihood-Berechnung",
          nl: "Samplen zonder likelihood te berekenen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Normalizing Flows use a sequence of invertible transformations with computable Jacobian determinants to transform simple base distributions into complex target distributions while maintaining exact likelihood.",
        es: "Los Flujos Normalizadores usan secuencias de transformaciones invertibles con determinantes Jacobianos computables para transformar distribuciones base simples en complejas.",
        de: "Normalizing Flows nutzen Sequenzen invertierbarer Transformationen mit berechenbaren Jacobi-Determinanten um einfache Basisverteilungen in komplexe zu transformieren.",
        nl: "Normalizing Flows gebruiken sequenties van inverteerbare transformaties met berekenbare Jacobi-determinanten om eenvoudige basisverdelingen in complexe te transformeren."
      }
    },
    {
      question: {
        en: "What is the connection between SGD noise and generalization?",
        es: "¿Cuál es la conexión entre el ruido de SGD y la generalización?",
        de: "Was ist die Verbindung zwischen SGD-Rauschen und Generalisierung?",
        nl: "Wat is de verbinding tussen SGD-ruis en generalisatie?"
      },
      options: [
        {
          en: "Gradient noise helps escape sharp minima leading to flatter, more generalizable solutions",
          es: "El ruido del gradiente ayuda a escapar mínimos agudos llevando a soluciones más planas",
          de: "Gradientenrauschen hilft aus scharfen Minima zu entkommen für flachere Lösungen",
          nl: "Gradiëntruis helpt scherpe minima te ontsnappen voor vlakkere, generaliseerbare oplossingen"
        },
        {
          en: "Noise always hurts performance",
          es: "El ruido siempre daña el rendimiento",
          de: "Rauschen schadet immer der Leistung",
          nl: "Ruis schaadt altijd prestaties"
        },
        {
          en: "No connection exists",
          es: "No existe conexión",
          de: "Keine Verbindung existiert",
          nl: "Geen verbinding bestaat"
        },
        {
          en: "Noise only affects speed",
          es: "El ruido solo afecta la velocidad",
          de: "Rauschen beeinflusst nur Geschwindigkeit",
          nl: "Ruis beïnvloedt alleen snelheid"
        }
      ],
      correct: 0,
      explanation: {
        en: "SGD's inherent noise from mini-batch sampling acts as implicit regularization, helping models escape sharp minima and find flatter solutions that generalize better to unseen data.",
        es: "El ruido inherente de SGD del muestreo por mini-lotes actúa como regularización implícita, ayudando a encontrar soluciones más planas que generalizan mejor.",
        de: "SGDs inhärentes Rauschen aus Mini-Batch-Sampling wirkt als implizite Regularisierung und hilft flachere Lösungen zu finden die besser generalisieren.",
        nl: "SGD's inherente ruis van mini-batch sampling werkt als impliciete regularisatie, helpt vlakkere oplossingen te vinden die beter generaliseren."
      }
    },
    {
      question: {
        en: "What is the role of implicit regularization in deep learning?",
        es: "¿Cuál es el rol de la regularización implícita en deep learning?",
        de: "Was ist die Rolle impliziter Regularisierung im Deep Learning?",
        nl: "Wat is de rol van impliciete regularisatie in deep learning?"
      },
      options: [
        {
          en: "Optimization algorithms and architectures naturally bias toward simpler solutions",
          es: "Algoritmos de optimización y arquitecturas sesgan naturalmente hacia soluciones simples",
          de: "Optimierungsalgorithmen und Architekturen neigen natürlich zu einfacheren Lösungen",
          nl: "Optimalisatie-algoritmen en architecturen neigen natuurlijk naar eenvoudigere oplossingen"
        },
        {
          en: "Requires explicit penalty terms",
          es: "Requiere términos de penalización explícitos",
          de: "Benötigt explizite Strafterme",
          nl: "Vereist expliciete straftermen"
        },
        {
          en: "Only works with L2 regularization",
          es: "Solo funciona con regularización L2",
          de: "Funktioniert nur mit L2-Regularisierung",
          nl: "Werkt alleen met L2-regularisatie"
        },
        {
          en: "Prevents all overfitting",
          es: "Previene todo sobreajuste",
          de: "Verhindert jede Überanpassung",
          nl: "Voorkomt alle overfitting"
        }
      ],
      correct: 0,
      explanation: {
        en: "Implicit regularization refers to how SGD, network architecture, and initialization naturally bias learning toward simpler, more generalizable solutions without explicit regularization terms.",
        es: "La regularización implícita se refiere a cómo SGD, arquitectura e inicialización sesgan naturalmente el aprendizaje hacia soluciones más simples y generalizables.",
        de: "Implizite Regularisierung bezieht sich darauf, wie SGD, Architektur und Initialisierung natürlich zu einfacheren, generalisierbaren Lösungen führen.",
        nl: "Impliciete regularisatie verwijst naar hoe SGD, architectuur en initialisatie natuurlijk leiden naar eenvoudigere, generaliseerbare oplossingen."
      }
    },
    {
      question: {
        en: "What is the double descent phenomenon in deep learning?",
        es: "¿Qué es el fenómeno de doble descenso en deep learning?",
        de: "Was ist das Double Descent Phänomen im Deep Learning?",
        nl: "Wat is het double descent fenomeen in deep learning?"
      },
      options: [
        {
          en: "Test error decreases, increases, then decreases again with model complexity",
          es: "El error de prueba disminuye, aumenta, luego disminuye de nuevo con complejidad",
          de: "Testfehler sinkt, steigt, dann sinkt wieder mit Modellkomplexität",
          nl: "Testfout daalt, stijgt, daalt dan weer met modelcomplexiteit"
        },
        {
          en: "Error always decreases",
          es: "El error siempre disminuye",
          de: "Fehler sinkt immer",
          nl: "Fout daalt altijd"
        },
        {
          en: "Error always increases",
          es: "El error siempre aumenta",
          de: "Fehler steigt immer",
          nl: "Fout stijgt altijd"
        },
        {
          en: "Single descent only",
          es: "Solo descenso único",
          de: "Nur einfacher Abstieg",
          nl: "Alleen enkele daling"
        }
      ],
      correct: 0,
      explanation: {
        en: "Double descent shows test error first following classical U-curve, then decreasing again in overparameterized regime, challenging traditional bias-variance tradeoff understanding.",
        es: "El doble descenso muestra el error de prueba siguiendo primero la curva U clásica, luego disminuyendo en el régimen sobreparametrizado.",
        de: "Double Descent zeigt Testfehler folgt erst klassischer U-Kurve, dann sinkt wieder im überparametrisierten Bereich.",
        nl: "Double descent toont testfout volgt eerst klassieke U-curve, daalt dan weer in overgeparametriseerde regime."
      }
    },
    {
      question: {
        en: "How do Graph Neural Networks aggregate neighborhood information?",
        es: "¿Cómo agregan las Redes Neuronales de Grafos información del vecindario?",
        de: "Wie aggregieren Graph Neural Networks Nachbarschaftsinformation?",
        nl: "Hoe aggregeren Graph Neural Networks buurtinformatie?"
      },
      options: [
        {
          en: "Message passing between nodes using permutation-invariant functions",
          es: "Paso de mensajes entre nodos usando funciones invariantes a permutación",
          de: "Message Passing zwischen Knoten mit permutationsinvarianten Funktionen",
          nl: "Message passing tussen nodes met permutatie-invariante functies"
        },
        {
          en: "Random node sampling",
          es: "Muestreo aleatorio de nodos",
          de: "Zufälliges Knoten-Sampling",
          nl: "Willekeurige node-sampling"
        },
        {
          en: "Fixed adjacency patterns",
          es: "Patrones de adyacencia fijos",
          de: "Feste Adjazenz-Muster",
          nl: "Vaste adjacentiepatronen"
        },
        {
          en: "Sequential processing",
          es: "Procesamiento secuencial",
          de: "Sequentielle Verarbeitung",
          nl: "Sequentiële verwerking"
        }
      ],
      correct: 0,
      explanation: {
        en: "GNNs aggregate neighborhood information through message passing, where nodes exchange information with neighbors using permutation-invariant aggregation functions like sum, mean, or max.",
        es: "Las GNN agregan información del vecindario mediante paso de mensajes, donde los nodos intercambian información usando funciones de agregación invariantes.",
        de: "GNNs aggregieren Nachbarschaftsinformation durch Message Passing, wobei Knoten Information mit permutationsinvarianten Aggregationsfunktionen austauschen.",
        nl: "GNN's aggregeren buurtinformatie via message passing, waarbij nodes informatie uitwisselen met permutatie-invariante aggregatiefuncties."
      }
    },
    {
      question: {
        en: "What is contrastive predictive coding (CPC) and its objective?",
        es: "¿Qué es la codificación predictiva contrastiva (CPC) y su objetivo?",
        de: "Was ist Contrastive Predictive Coding (CPC) und sein Ziel?",
        nl: "Wat is contrastive predictive coding (CPC) en zijn doel?"
      },
      options: [
        {
          en: "Learns representations by predicting future in latent space using mutual information",
          es: "Aprende representaciones prediciendo futuro en espacio latente usando información mutua",
          de: "Lernt Repräsentationen durch Vorhersage der Zukunft im latenten Raum mittels gegenseitiger Information",
          nl: "Leert representaties door toekomst te voorspellen in latente ruimte met mutual information"
        },
        {
          en: "Direct supervised learning",
          es: "Aprendizaje supervisado directo",
          de: "Direktes überwachtes Lernen",
          nl: "Direct gesuperviseerd leren"
        },
        {
          en: "Random feature extraction",
          es: "Extracción aleatoria de características",
          de: "Zufällige Feature-Extraktion",
          nl: "Willekeurige feature-extractie"
        },
        {
          en: "Classification only",
          es: "Solo clasificación",
          de: "Nur Klassifikation",
          nl: "Alleen classificatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "CPC learns representations by maximizing mutual information between context and future observations, using a contrastive loss to distinguish true future samples from negatives.",
        es: "CPC aprende representaciones maximizando información mutua entre contexto y observaciones futuras, usando pérdida contrastiva para distinguir muestras verdaderas.",
        de: "CPC lernt Repräsentationen durch Maximierung gegenseitiger Information zwischen Kontext und zukünftigen Beobachtungen mittels kontrastivem Verlust.",
        nl: "CPC leert representaties door mutual information tussen context en toekomstige observaties te maximaliseren met contrastief verlies."
      }
    },
    {
      question: {
        en: "What is the manifold hypothesis in machine learning?",
        es: "¿Qué es la hipótesis del manifold en aprendizaje automático?",
        de: "Was ist die Mannigfaltigkeitshypothese im maschinellen Lernen?",
        nl: "Wat is de manifold-hypothese in machine learning?"
      },
      options: [
        {
          en: "High-dimensional data lies on lower-dimensional manifolds",
          es: "Datos de alta dimensión yacen en manifolds de menor dimensión",
          de: "Hochdimensionale Daten liegen auf niederdimensionalen Mannigfaltigkeiten",
          nl: "Hoogdimensionale data ligt op lagerdimensionale manifolds"
        },
        {
          en: "All data is uniformly distributed",
          es: "Todos los datos están uniformemente distribuidos",
          de: "Alle Daten sind gleichmäßig verteilt",
          nl: "Alle data is uniform verdeeld"
        },
        {
          en: "Dimensions are independent",
          es: "Las dimensiones son independientes",
          de: "Dimensionen sind unabhängig",
          nl: "Dimensies zijn onafhankelijk"
        },
        {
          en: "Data fills entire space",
          es: "Los datos llenan todo el espacio",
          de: "Daten füllen gesamten Raum",
          nl: "Data vult hele ruimte"
        }
      ],
      correct: 0,
      explanation: {
        en: "The manifold hypothesis states that real-world high-dimensional data concentrates near lower-dimensional manifolds, explaining why deep learning can learn efficient representations.",
        es: "La hipótesis del manifold establece que datos del mundo real de alta dimensión se concentran cerca de manifolds de menor dimensión.",
        de: "Die Mannigfaltigkeitshypothese besagt, dass hochdimensionale reale Daten sich auf niederdimensionalen Mannigfaltigkeiten konzentrieren.",
        nl: "De manifold-hypothese stelt dat hoogdimensionale real-world data zich concentreert nabij lagerdimensionale manifolds."
      }
    },
    {
      question: {
        en: "What is meta-learning's model-agnostic meta-learning (MAML) algorithm?",
        es: "¿Qué es el algoritmo MAML de meta-aprendizaje agnóstico al modelo?",
        de: "Was ist der modell-agnostische Meta-Learning (MAML) Algorithmus?",
        nl: "Wat is meta-learning's model-agnostic meta-learning (MAML) algoritme?"
      },
      options: [
        {
          en: "Optimizes for parameters that can be quickly fine-tuned to new tasks",
          es: "Optimiza parámetros que pueden ajustarse rápidamente a nuevas tareas",
          de: "Optimiert für Parameter die schnell auf neue Aufgaben feinabgestimmt werden können",
          nl: "Optimaliseert voor parameters die snel gefinetuned kunnen worden naar nieuwe taken"
        },
        {
          en: "Trains multiple models",
          es: "Entrena múltiples modelos",
          de: "Trainiert mehrere Modelle",
          nl: "Traint meerdere modellen"
        },
        {
          en: "Requires model-specific design",
          es: "Requiere diseño específico del modelo",
          de: "Benötigt modellspezifisches Design",
          nl: "Vereist modelspecifiek ontwerp"
        },
        {
          en: "Only works for classification",
          es: "Solo funciona para clasificación",
          de: "Funktioniert nur für Klassifikation",
          nl: "Werkt alleen voor classificatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "MAML learns initialization parameters that can be quickly adapted to new tasks with few gradient steps, enabling efficient few-shot learning across diverse tasks.",
        es: "MAML aprende parámetros de inicialización que pueden adaptarse rápidamente a nuevas tareas con pocos pasos de gradiente para aprendizaje few-shot eficiente.",
        de: "MAML lernt Initialisierungsparameter die schnell mit wenigen Gradientenschritten an neue Aufgaben angepasst werden können.",
        nl: "MAML leert initialisatieparameters die snel met weinig gradiëntstappen aangepast kunnen worden aan nieuwe taken."
      }
    },
    {
      question: {
        en: "How does spectral clustering differ from k-means?",
        es: "¿Cómo difiere el clustering espectral de k-means?",
        de: "Wie unterscheidet sich Spectral Clustering von k-means?",
        nl: "Hoe verschilt spectral clustering van k-means?"
      },
      options: [
        {
          en: "Uses graph Laplacian eigendecomposition to find non-convex clusters",
          es: "Usa descomposición propia del Laplaciano del grafo para clusters no convexos",
          de: "Nutzt Graph-Laplace Eigenzerlegung um nicht-konvexe Cluster zu finden",
          nl: "Gebruikt graph Laplacian eigendecompositie voor niet-convexe clusters"
        },
        {
          en: "Always finds spherical clusters",
          es: "Siempre encuentra clusters esféricos",
          de: "Findet immer sphärische Cluster",
          nl: "Vindt altijd sferische clusters"
        },
        {
          en: "Requires fewer computations",
          es: "Requiere menos cálculos",
          de: "Benötigt weniger Berechnungen",
          nl: "Vereist minder berekeningen"
        },
        {
          en: "Uses Euclidean distance only",
          es: "Usa solo distancia Euclidiana",
          de: "Nutzt nur euklidische Distanz",
          nl: "Gebruikt alleen Euclidische afstand"
        }
      ],
      correct: 0,
      explanation: {
        en: "Spectral clustering performs eigendecomposition on the graph Laplacian matrix, projecting data into a space where clusters are more separable, enabling discovery of non-convex clusters.",
        es: "El clustering espectral realiza descomposición propia en la matriz Laplaciana del grafo, proyectando datos donde los clusters son más separables.",
        de: "Spectral Clustering führt Eigenzerlegung der Graph-Laplace-Matrix durch, projiziert Daten in Raum wo Cluster besser trennbar sind.",
        nl: "Spectral clustering voert eigendecompositie uit op de graph Laplacian matrix, projecteert data waar clusters beter scheidbaar zijn."
      }
    },
    {
      question: {
        en: "What is the role of Fisher Information Matrix in natural gradients?",
        es: "¿Cuál es el rol de la Matriz de Información de Fisher en gradientes naturales?",
        de: "Was ist die Rolle der Fisher-Informationsmatrix bei natürlichen Gradienten?",
        nl: "Wat is de rol van de Fisher Information Matrix in natuurlijke gradiënten?"
      },
      options: [
        {
          en: "Defines the Riemannian metric for parameter space geometry",
          es: "Define la métrica Riemanniana para la geometría del espacio de parámetros",
          de: "Definiert die Riemannsche Metrik für die Parameterraum-Geometrie",
          nl: "Definieert de Riemannse metriek voor parameterruimte-geometrie"
        },
        {
          en: "Stores gradient history",
          es: "Almacena historial de gradientes",
          de: "Speichert Gradientenhistorie",
          nl: "Slaat gradiëntgeschiedenis op"
        },
        {
          en: "Reduces computation time",
          es: "Reduce tiempo de cálculo",
          de: "Reduziert Rechenzeit",
          nl: "Vermindert rekentijd"
        },
        {
          en: "Increases learning rate",
          es: "Aumenta tasa de aprendizaje",
          de: "Erhöht Lernrate",
          nl: "Verhoogt leersnelheid"
        }
      ],
      correct: 0,
      explanation: {
        en: "The Fisher Information Matrix captures the local curvature of the KL divergence, providing a natural Riemannian metric that makes natural gradient descent invariant to parameterization.",
        es: "La Matriz de Información de Fisher captura la curvatura local de la divergencia KL, proporcionando una métrica Riemanniana natural invariante a parametrización.",
        de: "Die Fisher-Informationsmatrix erfasst die lokale Krümmung der KL-Divergenz und liefert eine natürliche Riemannsche Metrik.",
        nl: "De Fisher Information Matrix vangt de lokale kromming van KL-divergentie, geeft natuurlijke Riemannse metriek invariant voor parametrisatie."
      }
    },
    {
      question: {
        en: "What is the Grokking phenomenon in neural network training?",
        es: "¿Qué es el fenómeno Grokking en entrenamiento de redes neuronales?",
        de: "Was ist das Grokking-Phänomen beim Training neuronaler Netze?",
        nl: "Wat is het Grokking-fenomeen bij neural network training?"
      },
      options: [
        {
          en: "Delayed generalization long after achieving perfect training accuracy",
          es: "Generalización retrasada mucho después de lograr precisión perfecta de entrenamiento",
          de: "Verzögerte Generalisierung lange nach Erreichen perfekter Trainingsgenauigkeit",
          nl: "Uitgestelde generalisatie lang na het bereiken van perfecte trainingsnauwkeurigheid"
        },
        {
          en: "Immediate generalization",
          es: "Generalización inmediata",
          de: "Sofortige Generalisierung",
          nl: "Onmiddellijke generalisatie"
        },
        {
          en: "Gradual improvement",
          es: "Mejora gradual",
          de: "Graduelle Verbesserung",
          nl: "Geleidelijke verbetering"
        },
        {
          en: "Training failure",
          es: "Fallo de entrenamiento",
          de: "Trainingsversagen",
          nl: "Trainingsfalen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Grokking refers to the phenomenon where neural networks suddenly achieve good generalization long after memorizing the training set, showing a delayed transition from memorization to understanding.",
        es: "Grokking se refiere al fenómeno donde las redes neuronales logran buena generalización mucho después de memorizar el conjunto de entrenamiento.",
        de: "Grokking bezeichnet das Phänomen, wo neuronale Netze plötzlich gute Generalisierung erreichen lange nach Memorierung des Trainingssatzes.",
        nl: "Grokking verwijst naar het fenomeen waarbij neurale netwerken plotseling goede generalisatie bereiken lang na memorisatie van de trainingsset."
      }
    },
    {
      question: {
        en: "What is the connection between overparameterization and optimization landscape?",
        es: "¿Cuál es la conexión entre sobreparametrización y paisaje de optimización?",
        de: "Was ist die Verbindung zwischen Überparametrisierung und Optimierungslandschaft?",
        nl: "Wat is de verbinding tussen overparametrisatie en optimalisatielandschap?"
      },
      options: [
        {
          en: "Overparameterized networks have mostly saddle points instead of bad local minima",
          es: "Redes sobreparametrizadas tienen principalmente puntos de silla en lugar de mínimos locales malos",
          de: "Überparametrisierte Netze haben hauptsächlich Sattelpunkte statt schlechter lokaler Minima",
          nl: "Overgeparametriseerde netwerken hebben vooral zadelpunten in plaats van slechte lokale minima"
        },
        {
          en: "More parameters mean more local minima",
          es: "Más parámetros significan más mínimos locales",
          de: "Mehr Parameter bedeuten mehr lokale Minima",
          nl: "Meer parameters betekenen meer lokale minima"
        },
        {
          en: "Landscape becomes more complex",
          es: "El paisaje se vuelve más complejo",
          de: "Landschaft wird komplexer",
          nl: "Landschap wordt complexer"
        },
        {
          en: "Optimization becomes impossible",
          es: "La optimización se vuelve imposible",
          de: "Optimierung wird unmöglich",
          nl: "Optimalisatie wordt onmogelijk"
        }
      ],
      correct: 0,
      explanation: {
        en: "In overparameterized networks, most critical points are saddle points rather than poor local minima, and global minima become more connected, facilitating optimization.",
        es: "En redes sobreparametrizadas, la mayoría de puntos críticos son puntos de silla en lugar de mínimos locales pobres, y los mínimos globales se conectan más.",
        de: "In überparametrisierten Netzen sind die meisten kritischen Punkte Sattelpunkte statt schlechter lokaler Minima, globale Minima werden verbundener.",
        nl: "In overgeparametriseerde netwerken zijn meeste kritieke punten zadelpunten in plaats van slechte lokale minima, globale minima worden meer verbonden."
      }
    },
    {
      question: {
        en: "What is sharpness-aware minimization (SAM) in optimization?",
        es: "¿Qué es la minimización consciente de la nitidez (SAM) en optimización?",
        de: "Was ist Sharpness-Aware Minimization (SAM) in der Optimierung?",
        nl: "Wat is sharpness-aware minimization (SAM) in optimalisatie?"
      },
      options: [
        {
          en: "Seeks parameters in neighborhoods with uniformly low loss for better generalization",
          es: "Busca parámetros en vecindarios con pérdida uniformemente baja para mejor generalización",
          de: "Sucht Parameter in Nachbarschaften mit gleichmäßig niedrigem Verlust für bessere Generalisierung",
          nl: "Zoekt parameters in buurten met uniform laag verlies voor betere generalisatie"
        },
        {
          en: "Minimizes sharpest gradients",
          es: "Minimiza gradientes más agudos",
          de: "Minimiert schärfste Gradienten",
          nl: "Minimaliseert scherpste gradiënten"
        },
        {
          en: "Increases learning rate",
          es: "Aumenta tasa de aprendizaje",
          de: "Erhöht Lernrate",
          nl: "Verhoogt leersnelheid"
        },
        {
          en: "Finds deepest minima",
          es: "Encuentra mínimos más profundos",
          de: "Findet tiefste Minima",
          nl: "Vindt diepste minima"
        }
      ],
      correct: 0,
      explanation: {
        en: "SAM explicitly seeks parameters that lie in neighborhoods with uniformly low loss by performing a gradient ascent step followed by gradient descent, finding flatter minima.",
        es: "SAM busca explícitamente parámetros en vecindarios con pérdida uniformemente baja realizando ascenso de gradiente seguido de descenso.",
        de: "SAM sucht explizit Parameter in Nachbarschaften mit gleichmäßig niedrigem Verlust durch Gradientenaufstieg gefolgt von Abstieg.",
        nl: "SAM zoekt expliciet parameters in buurten met uniform laag verlies door gradiënt ascent gevolgd door descent."
      }
    },
    {
      question: {
        en: "How do diffusion models generate samples?",
        es: "¿Cómo generan muestras los modelos de difusión?",
        de: "Wie generieren Diffusionsmodelle Samples?",
        nl: "Hoe genereren diffusiemodellen samples?"
      },
      options: [
        {
          en: "Learn to reverse a gradual noising process through denoising score matching",
          es: "Aprenden a revertir un proceso de ruido gradual mediante coincidencia de puntuación de eliminación de ruido",
          de: "Lernen einen graduellen Rauschprozess durch Denoising Score Matching umzukehren",
          nl: "Leren een geleidelijk ruisproces om te keren via denoising score matching"
        },
        {
          en: "Direct sampling from latent space",
          es: "Muestreo directo del espacio latente",
          de: "Direktes Sampling aus latentem Raum",
          nl: "Direct samplen uit latente ruimte"
        },
        {
          en: "Adversarial training only",
          es: "Solo entrenamiento adversario",
          de: "Nur adversarisches Training",
          nl: "Alleen adversarial training"
        },
        {
          en: "Random generation",
          es: "Generación aleatoria",
          de: "Zufällige Generierung",
          nl: "Willekeurige generatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "Diffusion models learn to reverse a forward process that gradually adds noise to data, generating samples by iteratively denoising from pure noise using learned score functions.",
        es: "Los modelos de difusión aprenden a revertir un proceso que añade ruido gradualmente, generando muestras mediante eliminación iterativa de ruido.",
        de: "Diffusionsmodelle lernen einen Vorwärtsprozess umzukehren der graduell Rauschen hinzufügt, generieren Samples durch iteratives Entrauschen.",
        nl: "Diffusiemodellen leren een voorwaarts proces om te keren dat geleidelijk ruis toevoegt, genereren samples door iteratief denoisen."
      }
    },
    {
      question: {
        en: "What is the neural tangent kernel (NTK) regime?",
        es: "¿Qué es el régimen del núcleo tangente neural (NTK)?",
        de: "Was ist das Neural Tangent Kernel (NTK) Regime?",
        nl: "Wat is het neural tangent kernel (NTK) regime?"
      },
      options: [
        {
          en: "Infinite-width networks behave like kernel methods with fixed kernels during training",
          es: "Redes de ancho infinito se comportan como métodos kernel con núcleos fijos durante entrenamiento",
          de: "Unendlich breite Netze verhalten sich wie Kernel-Methoden mit festen Kerneln beim Training",
          nl: "Oneindig brede netwerken gedragen zich als kernel-methoden met vaste kernels tijdens training"
        },
        {
          en: "Networks become linear",
          es: "Las redes se vuelven lineales",
          de: "Netze werden linear",
          nl: "Netwerken worden lineair"
        },
        {
          en: "Training becomes unstable",
          es: "El entrenamiento se vuelve inestable",
          de: "Training wird instabil",
          nl: "Training wordt instabiel"
        },
        {
          en: "Kernels change randomly",
          es: "Los núcleos cambian aleatoriamente",
          de: "Kernel ändern sich zufällig",
          nl: "Kernels veranderen willekeurig"
        }
      ],
      correct: 0,
      explanation: {
        en: "In the NTK regime, infinitely wide neural networks converge to kernel regression with a deterministic kernel that remains constant during training, providing theoretical insights.",
        es: "En el régimen NTK, redes neuronales infinitamente anchas convergen a regresión kernel con un núcleo determinista constante durante el entrenamiento.",
        de: "Im NTK-Regime konvergieren unendlich breite neuronale Netze zu Kernel-Regression mit deterministischem Kernel der konstant bleibt.",
        nl: "In het NTK-regime convergeren oneindig brede neurale netwerken naar kernel-regressie met deterministische kernel die constant blijft."
      }
    },
    {
      question: {
        en: "What is the role of Lipschitz constraints in neural networks?",
        es: "¿Cuál es el rol de las restricciones de Lipschitz en redes neuronales?",
        de: "Was ist die Rolle von Lipschitz-Bedingungen in neuronalen Netzen?",
        nl: "Wat is de rol van Lipschitz-constraints in neurale netwerken?"
      },
      options: [
        {
          en: "Control sensitivity to input perturbations and improve robustness",
          es: "Controlan sensibilidad a perturbaciones de entrada y mejoran robustez",
          de: "Kontrollieren Sensitivität gegenüber Eingabestörungen und verbessern Robustheit",
          nl: "Controleren gevoeligheid voor inputverstoringen en verbeteren robuustheid"
        },
        {
          en: "Speed up training",
          es: "Aceleran el entrenamiento",
          de: "Beschleunigen Training",
          nl: "Versnellen training"
        },
        {
          en: "Reduce model size",
          es: "Reducen tamaño del modelo",
          de: "Reduzieren Modellgröße",
          nl: "Verminderen modelgrootte"
        },
        {
          en: "Increase accuracy only",
          es: "Solo aumentan precisión",
          de: "Erhöhen nur Genauigkeit",
          nl: "Verhogen alleen nauwkeurigheid"
        }
      ],
      correct: 0,
      explanation: {
        en: "Lipschitz constraints bound the rate of change of network outputs with respect to inputs, improving adversarial robustness, generalization, and training stability.",
        es: "Las restricciones de Lipschitz limitan la tasa de cambio de salidas con respecto a entradas, mejorando robustez adversaria y estabilidad.",
        de: "Lipschitz-Bedingungen begrenzen die Änderungsrate der Netzausgaben bezüglich Eingaben, verbessern adversarische Robustheit.",
        nl: "Lipschitz-constraints begrenzen de veranderingssnelheid van netwerkoutputs t.o.v. inputs, verbeteren adversarial robuustheid."
      }
    },
    {
      question: {
        en: "What is the connection between SGD and Bayesian inference?",
        es: "¿Cuál es la conexión entre SGD y la inferencia Bayesiana?",
        de: "Was ist die Verbindung zwischen SGD und Bayesischer Inferenz?",
        nl: "Wat is de verbinding tussen SGD en Bayesiaanse inferentie?"
      },
      options: [
        {
          en: "SGD with constant learning rate samples from posterior under certain conditions",
          es: "SGD con tasa constante muestrea del posterior bajo ciertas condiciones",
          de: "SGD mit konstanter Lernrate sampelt aus Posterior unter bestimmten Bedingungen",
          nl: "SGD met constante leersnelheid samplet uit posterior onder bepaalde voorwaarden"
        },
        {
          en: "No connection exists",
          es: "No existe conexión",
          de: "Keine Verbindung existiert",
          nl: "Geen verbinding bestaat"
        },
        {
          en: "SGD is always Bayesian",
          es: "SGD es siempre Bayesiano",
          de: "SGD ist immer Bayesisch",
          nl: "SGD is altijd Bayesiaans"
        },
        {
          en: "They are opposites",
          es: "Son opuestos",
          de: "Sie sind Gegensätze",
          nl: "Ze zijn tegengestelden"
        }
      ],
      correct: 0,
      explanation: {
        en: "SGD with constant learning rate can be viewed as Langevin dynamics, approximately sampling from the posterior distribution when the learning rate and batch size satisfy certain conditions.",
        es: "SGD con tasa constante puede verse como dinámica de Langevin, muestreando aproximadamente de la distribución posterior bajo ciertas condiciones.",
        de: "SGD mit konstanter Lernrate kann als Langevin-Dynamik gesehen werden, sampelt approximativ aus Posterior-Verteilung.",
        nl: "SGD met constante leersnelheid kan gezien worden als Langevin-dynamica, samplet ongeveer uit posterior-verdeling."
      }
    },
    {
      question: {
        en: "How do Neural ODEs parameterize continuous transformations?",
        es: "¿Cómo parametrizan las Neural ODEs transformaciones continuas?",
        de: "Wie parametrisieren Neural ODEs kontinuierliche Transformationen?",
        nl: "Hoe parametriseren Neural ODEs continue transformaties?"
      },
      options: [
        {
          en: "Model dynamics as differential equations solved by ODE solvers",
          es: "Modelan dinámicas como ecuaciones diferenciales resueltas por solucionadores ODE",
          de: "Modellieren Dynamik als Differentialgleichungen gelöst durch ODE-Solver",
          nl: "Modelleren dynamica als differentiaalvergelijkingen opgelost door ODE-solvers"
        },
        {
          en: "Use discrete layers only",
          es: "Usan solo capas discretas",
          de: "Nutzen nur diskrete Schichten",
          nl: "Gebruiken alleen discrete lagen"
        },
        {
          en: "Fixed transformations",
          es: "Transformaciones fijas",
          de: "Feste Transformationen",
          nl: "Vaste transformaties"
        },
        {
          en: "Random dynamics",
          es: "Dinámicas aleatorias",
          de: "Zufällige Dynamik",
          nl: "Willekeurige dynamica"
        }
      ],
      correct: 0,
      explanation: {
        en: "Neural ODEs parameterize the derivative of hidden states using neural networks, treating the transformation as a continuous dynamical system solved with adaptive ODE solvers.",
        es: "Las Neural ODEs parametrizan la derivada de estados ocultos usando redes neuronales, tratando la transformación como sistema dinámico continuo.",
        de: "Neural ODEs parametrisieren die Ableitung versteckter Zustände mit neuronalen Netzen als kontinuierliches dynamisches System.",
        nl: "Neural ODEs parametriseren de afgeleide van verborgen states met neurale netwerken als continu dynamisch systeem."
      }
    },
    {
      question: {
        en: "What is importance sampling in the context of deep learning?",
        es: "¿Qué es el muestreo por importancia en el contexto del deep learning?",
        de: "Was ist Importance Sampling im Kontext des Deep Learning?",
        nl: "Wat is importance sampling in de context van deep learning?"
      },
      options: [
        {
          en: "Reduces variance by sampling from a proposal distribution and reweighting",
          es: "Reduce varianza muestreando de una distribución propuesta y reponderando",
          de: "Reduziert Varianz durch Sampling aus Vorschlagsverteilung und Umgewichtung",
          nl: "Vermindert variantie door sampling uit voorstelvereling en herwegen"
        },
        {
          en: "Samples uniformly",
          es: "Muestrea uniformemente",
          de: "Sampelt gleichmäßig",
          nl: "Samplet uniform"
        },
        {
          en: "Ignores sample importance",
          es: "Ignora importancia de muestras",
          de: "Ignoriert Sample-Wichtigkeit",
          nl: "Negeert sample-belangrijkheid"
        },
        {
          en: "Only for supervised learning",
          es: "Solo para aprendizaje supervisado",
          de: "Nur für überwachtes Lernen",
          nl: "Alleen voor gesuperviseerd leren"
        }
      ],
      correct: 0,
      explanation: {
        en: "Importance sampling estimates expectations by sampling from a proposal distribution and reweighting samples, reducing variance when the proposal matches regions of high importance.",
        es: "El muestreo por importancia estima expectativas muestreando de una distribución propuesta y reponderando para reducir varianza.",
        de: "Importance Sampling schätzt Erwartungswerte durch Sampling aus Vorschlagsverteilung und Umgewichtung zur Varianzreduktion.",
        nl: "Importance sampling schat verwachtingen door sampling uit voorstelverdeling en herwegen voor variantiereductie."
      }
    },
    {
      question: {
        en: "What is the role of skip connections in ResNets from an optimization perspective?",
        es: "¿Cuál es el rol de las conexiones skip en ResNets desde una perspectiva de optimización?",
        de: "Was ist die Rolle von Skip-Verbindungen in ResNets aus Optimierungsperspektive?",
        nl: "Wat is de rol van skip-verbindingen in ResNets vanuit optimalisatieperspectief?"
      },
      options: [
        {
          en: "Create identity mapping that preserves gradient flow through network depth",
          es: "Crean mapeo de identidad que preserva flujo de gradientes a través de la profundidad",
          de: "Schaffen Identitätsabbildung die Gradientenfluss durch Netztiefe erhält",
          nl: "Creëren identiteitsafbeelding die gradiëntenstroom door netwerkdiepte behoudt"
        },
        {
          en: "Add more parameters",
          es: "Añaden más parámetros",
          de: "Fügen mehr Parameter hinzu",
          nl: "Voegen meer parameters toe"
        },
        {
          en: "Slow down training",
          es: "Ralentizan el entrenamiento",
          de: "Verlangsamen Training",
          nl: "Vertragen training"
        },
        {
          en: "Increase memory usage",
          es: "Aumentan uso de memoria",
          de: "Erhöhen Speichernutzung",
          nl: "Verhogen geheugengebruik"
        }
      ],
      correct: 0,
      explanation: {
        en: "Skip connections create identity mappings that ensure gradients can flow directly through the network, preventing vanishing gradients and enabling optimization of very deep networks.",
        es: "Las conexiones skip crean mapeos de identidad que aseguran que los gradientes fluyan directamente, previniendo gradientes que desaparecen.",
        de: "Skip-Verbindungen schaffen Identitätsabbildungen die direkten Gradientenfluss sicherstellen und verschwindende Gradienten verhindern.",
        nl: "Skip-verbindingen creëren identiteitsafbeeldingen die directe gradiëntenstroom verzekeren en verdwijnende gradiënten voorkomen."
      }
    },
    {
      question: {
        en: "What is the Wasserstein distance and its advantage in GANs?",
        es: "¿Qué es la distancia de Wasserstein y su ventaja en GANs?",
        de: "Was ist die Wasserstein-Distanz und ihr Vorteil in GANs?",
        nl: "Wat is de Wasserstein-afstand en zijn voordeel in GANs?"
      },
      options: [
        {
          en: "Provides continuous measure even when distributions have disjoint support",
          es: "Proporciona medida continua incluso cuando distribuciones tienen soporte disjunto",
          de: "Liefert kontinuierliches Maß auch bei disjunktem Support der Verteilungen",
          nl: "Geeft continue maat zelfs bij disjuncte support van verdelingen"
        },
        {
          en: "Always zero",
          es: "Siempre cero",
          de: "Immer null",
          nl: "Altijd nul"
        },
        {
          en: "Only for discrete data",
          es: "Solo para datos discretos",
          de: "Nur für diskrete Daten",
          nl: "Alleen voor discrete data"
        },
        {
          en: "Requires less computation",
          es: "Requiere menos cálculo",
          de: "Benötigt weniger Berechnung",
          nl: "Vereist minder berekening"
        }
      ],
      correct: 0,
      explanation: {
        en: "Wasserstein distance measures the minimum cost of transporting mass between distributions, providing meaningful gradients even when distributions don't overlap, improving GAN stability.",
        es: "La distancia de Wasserstein mide el costo mínimo de transportar masa entre distribuciones, proporcionando gradientes significativos para mejorar estabilidad.",
        de: "Wasserstein-Distanz misst minimale Kosten des Massentransports zwischen Verteilungen, liefert sinnvolle Gradienten für GAN-Stabilität.",
        nl: "Wasserstein-afstand meet minimale kosten van massatransport tussen verdelingen, geeft betekenisvolle gradiënten voor GAN-stabiliteit."
      }
    },
    {
      question: {
        en: "How does self-supervised learning create useful representations?",
        es: "¿Cómo crea el aprendizaje auto-supervisado representaciones útiles?",
        de: "Wie erzeugt selbstüberwachtes Lernen nützliche Repräsentationen?",
        nl: "Hoe creëert self-supervised learning nuttige representaties?"
      },
      options: [
        {
          en: "Learns from pretext tasks that require understanding data structure",
          es: "Aprende de tareas pretexto que requieren entender estructura de datos",
          de: "Lernt aus Pretext-Aufgaben die Verständnis der Datenstruktur erfordern",
          nl: "Leert van pretext-taken die begrip van datastructuur vereisen"
        },
        {
          en: "Requires labeled data",
          es: "Requiere datos etiquetados",
          de: "Benötigt gelabelte Daten",
          nl: "Vereist gelabelde data"
        },
        {
          en: "Random feature learning",
          es: "Aprendizaje aleatorio de características",
          de: "Zufälliges Feature-Lernen",
          nl: "Willekeurig feature-leren"
        },
        {
          en: "Supervised fine-tuning only",
          es: "Solo ajuste fino supervisado",
          de: "Nur überwachtes Fine-Tuning",
          nl: "Alleen supervised fine-tuning"
        }
      ],
      correct: 0,
      explanation: {
        en: "Self-supervised learning creates supervision signals from the data itself through pretext tasks like prediction, reconstruction, or contrastive learning, learning representations without labels.",
        es: "El aprendizaje auto-supervisado crea señales de supervisión de los propios datos mediante tareas como predicción o reconstrucción sin etiquetas.",
        de: "Selbstüberwachtes Lernen erzeugt Überwachungssignale aus den Daten selbst durch Aufgaben wie Vorhersage oder Rekonstruktion ohne Labels.",
        nl: "Self-supervised learning creëert supervisiesignalen uit de data zelf via taken zoals predictie of reconstructie zonder labels."
      }
    },
    {
      question: {
        en: "What is the lottery ticket hypothesis in neural network pruning?",
        es: "¿Qué es la hipótesis del boleto de lotería en poda de redes neuronales?",
        de: "Was ist die Lottery Ticket Hypothese beim Neural Network Pruning?",
        nl: "Wat is de lottery ticket hypothese bij neural network pruning?"
      },
      options: [
        {
          en: "Sparse subnetworks can match full network performance when trained from scratch",
          es: "Subredes dispersas pueden igualar el rendimiento completo entrenando desde cero",
          de: "Dünne Teilnetze können volle Netzleistung erreichen bei Training von Grund auf",
          nl: "Sparse subnetwerken kunnen volledige netwerkprestatie evenaren bij training vanaf nul"
        },
        {
          en: "Random pruning works best",
          es: "La poda aleatoria funciona mejor",
          de: "Zufälliges Pruning funktioniert am besten",
          nl: "Willekeurig snoeien werkt het beste"
        },
        {
          en: "All weights are equally important",
          es: "Todos los pesos son igualmente importantes",
          de: "Alle Gewichte sind gleich wichtig",
          nl: "Alle gewichten zijn even belangrijk"
        },
        {
          en: "Pruning always reduces accuracy",
          es: "La poda siempre reduce la precisión",
          de: "Pruning reduziert immer die Genauigkeit",
          nl: "Snoeien vermindert altijd nauwkeurigheid"
        }
      ],
      correct: 0,
      explanation: {
        en: "The lottery ticket hypothesis states that dense networks contain sparse subnetworks (winning tickets) that, when trained with the same initialization, achieve comparable accuracy.",
        es: "La hipótesis del boleto de lotería afirma que las redes densas contienen subredes dispersas que logran precisión comparable con la misma inicialización.",
        de: "Die Lottery Ticket Hypothese besagt, dass dichte Netze dünne Teilnetze enthalten, die bei gleicher Initialisierung vergleichbare Genauigkeit erreichen.",
        nl: "De lottery ticket hypothese stelt dat dichte netwerken sparse subnetwerken bevatten die bij dezelfde initialisatie vergelijkbare nauwkeurigheid bereiken."
      }
    },
    {
      question: {
        en: "What is the role of the Hessian matrix in second-order optimization?",
        es: "¿Cuál es el rol de la matriz Hessiana en optimización de segundo orden?",
        de: "Was ist die Rolle der Hesse-Matrix bei Second-Order-Optimierung?",
        nl: "Wat is de rol van de Hessische matrix in tweede-orde optimalisatie?"
      },
      options: [
        {
          en: "Captures curvature information for more informed parameter updates",
          es: "Captura información de curvatura para actualizaciones más informadas",
          de: "Erfasst Krümmungsinformation für informiertere Parameteraktualisierungen",
          nl: "Vangt krommingsinformatie voor beter geïnformeerde parameterupdates"
        },
        {
          en: "Stores gradients",
          es: "Almacena gradientes",
          de: "Speichert Gradienten",
          nl: "Slaat gradiënten op"
        },
        {
          en: "Reduces memory usage",
          es: "Reduce el uso de memoria",
          de: "Reduziert Speichernutzung",
          nl: "Vermindert geheugengebruik"
        },
        {
          en: "Speeds up backpropagation",
          es: "Acelera la retropropagación",
          de: "Beschleunigt Rückwärtspropagierung",
          nl: "Versnelt backpropagatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "The Hessian matrix contains second-order partial derivatives, providing curvature information that enables more efficient optimization by adapting to the loss landscape geometry.",
        es: "La matriz Hessiana contiene derivadas parciales de segundo orden, proporcionando información de curvatura para optimización más eficiente.",
        de: "Die Hesse-Matrix enthält partielle Ableitungen zweiter Ordnung und liefert Krümmungsinformation für effizientere Optimierung.",
        nl: "De Hessische matrix bevat tweede-orde partiële afgeleiden, geeft krommingsinformatie voor efficiëntere optimalisatie."
      }
    },
    {
      question: {
        en: "What is Neural Architecture Search (NAS) and its main approaches?",
        es: "¿Qué es Neural Architecture Search (NAS) y sus enfoques principales?",
        de: "Was ist Neural Architecture Search (NAS) und seine Hauptansätze?",
        nl: "Wat is Neural Architecture Search (NAS) en zijn hoofdbenaderingen?"
      },
      options: [
        {
          en: "Automated design of neural architectures using reinforcement learning or evolution",
          es: "Diseño automatizado de arquitecturas usando aprendizaje por refuerzo o evolución",
          de: "Automatisiertes Design von Architekturen mittels Reinforcement Learning oder Evolution",
          nl: "Geautomatiseerd ontwerp van architecturen met reinforcement learning of evolutie"
        },
        {
          en: "Manual architecture design",
          es: "Diseño manual de arquitectura",
          de: "Manuelles Architekturdesign",
          nl: "Handmatig architectuurontwerp"
        },
        {
          en: "Random architecture selection",
          es: "Selección aleatoria de arquitectura",
          de: "Zufällige Architekturauswahl",
          nl: "Willekeurige architectuurselectie"
        },
        {
          en: "Fixed architecture patterns",
          es: "Patrones de arquitectura fijos",
          de: "Feste Architekturmuster",
          nl: "Vaste architectuurpatronen"
        }
      ],
      correct: 0,
      explanation: {
        en: "NAS automates neural network design using methods like reinforcement learning, evolutionary algorithms, or gradient-based approaches to discover optimal architectures.",
        es: "NAS automatiza el diseño de redes neuronales usando métodos como aprendizaje por refuerzo o algoritmos evolutivos para descubrir arquitecturas óptimas.",
        de: "NAS automatisiert Neuronales Netz-Design mittels Reinforcement Learning oder evolutionären Algorithmen zur Architektur-Entdeckung.",
        nl: "NAS automatiseert neuraal netwerkontwerp met methoden zoals reinforcement learning of evolutionaire algoritmen voor architectuur-ontdekking."
      }
    },
    {
      question: {
        en: "How do Normalizing Flows work for density estimation?",
        es: "¿Cómo funcionan los Flujos Normalizadores para estimación de densidad?",
        de: "Wie funktionieren Normalizing Flows für Dichteschätzung?",
        nl: "Hoe werken Normalizing Flows voor dichtheidsschatting?"
      },
      options: [
        {
          en: "Transform simple distributions through invertible functions with tractable Jacobians",
          es: "Transforman distribuciones simples mediante funciones invertibles con Jacobianos tratables",
          de: "Transformieren einfache Verteilungen durch invertierbare Funktionen mit berechenbaren Jacobi-Matrizen",
          nl: "Transformeren eenvoudige verdelingen via inverteerbare functies met berekenbare Jacobianen"
        },
        {
          en: "Use non-invertible transformations",
          es: "Usan transformaciones no invertibles",
          de: "Nutzen nicht-invertierbare Transformationen",
          nl: "Gebruiken niet-inverteerbare transformaties"
        },
        {
          en: "Approximate densities directly",
          es: "Aproximan densidades directamente",
          de: "Approximieren Dichten direkt",
          nl: "Benaderen dichtheden direct"
        },
        {
          en: "Sample without computing likelihood",
          es: "Muestrean sin calcular verosimilitud",
          de: "Samplen ohne Likelihood-Berechnung",
          nl: "Samplen zonder likelihood te berekenen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Normalizing Flows use sequences of invertible transformations with computable Jacobian determinants to transform simple base distributions into complex targets while maintaining exact likelihood.",
        es: "Los Flujos Normalizadores usan secuencias de transformaciones invertibles con determinantes Jacobianos computables para mantener verosimilitud exacta.",
        de: "Normalizing Flows nutzen invertierbare Transformationen mit berechenbaren Jacobi-Determinanten für exakte Likelihood.",
        nl: "Normalizing Flows gebruiken inverteerbare transformaties met berekenbare Jacobi-determinanten voor exacte likelihood."
      }
    },
    {
      question: {
        en: "What is the connection between SGD noise and generalization?",
        es: "¿Cuál es la conexión entre el ruido de SGD y la generalización?",
        de: "Was ist die Verbindung zwischen SGD-Rauschen und Generalisierung?",
        nl: "Wat is de verbinding tussen SGD-ruis en generalisatie?"
      },
      options: [
        {
          en: "Gradient noise helps escape sharp minima leading to flatter solutions",
          es: "El ruido del gradiente ayuda a escapar mínimos agudos llevando a soluciones planas",
          de: "Gradientenrauschen hilft aus scharfen Minima zu entkommen für flachere Lösungen",
          nl: "Gradiëntruis helpt scherpe minima te ontsnappen voor vlakkere oplossingen"
        },
        {
          en: "Noise always hurts",
          es: "El ruido siempre daña",
          de: "Rauschen schadet immer",
          nl: "Ruis schaadt altijd"
        },
        {
          en: "No connection",
          es: "Sin conexión",
          de: "Keine Verbindung",
          nl: "Geen verbinding"
        },
        {
          en: "Only affects speed",
          es: "Solo afecta velocidad",
          de: "Beeinflusst nur Geschwindigkeit",
          nl: "Beïnvloedt alleen snelheid"
        }
      ],
      correct: 0,
      explanation: {
        en: "SGD's inherent noise from mini-batch sampling acts as implicit regularization, helping models escape sharp minima and find flatter solutions that generalize better.",
        es: "El ruido inherente de SGD del muestreo por mini-lotes actúa como regularización implícita, encontrando soluciones más planas que generalizan mejor.",
        de: "SGDs inhärentes Rauschen aus Mini-Batch-Sampling wirkt als implizite Regularisierung für flachere, generalisierende Lösungen.",
        nl: "SGD's inherente ruis van mini-batch sampling werkt als impliciete regularisatie voor vlakkere, generaliserende oplossingen."
      }
    },
    {
      question: {
        en: "What is implicit regularization in deep learning?",
        es: "¿Qué es la regularización implícita en deep learning?",
        de: "Was ist implizite Regularisierung im Deep Learning?",
        nl: "Wat is impliciete regularisatie in deep learning?"
      },
      options: [
        {
          en: "Optimization and architecture naturally bias toward simpler solutions",
          es: "Optimización y arquitectura sesgan naturalmente hacia soluciones simples",
          de: "Optimierung und Architektur neigen natürlich zu einfacheren Lösungen",
          nl: "Optimalisatie en architectuur neigen natuurlijk naar eenvoudigere oplossingen"
        },
        {
          en: "Requires explicit penalties",
          es: "Requiere penalizaciones explícitas",
          de: "Benötigt explizite Strafen",
          nl: "Vereist expliciete straffen"
        },
        {
          en: "Only L2 regularization",
          es: "Solo regularización L2",
          de: "Nur L2-Regularisierung",
          nl: "Alleen L2-regularisatie"
        },
        {
          en: "Prevents all overfitting",
          es: "Previene todo sobreajuste",
          de: "Verhindert alle Überanpassung",
          nl: "Voorkomt alle overfitting"
        }
      ],
      correct: 0,
      explanation: {
        en: "Implicit regularization refers to how SGD, network architecture, and initialization naturally bias learning toward simpler, more generalizable solutions without explicit regularization.",
        es: "La regularización implícita se refiere a cómo SGD, arquitectura e inicialización sesgan naturalmente hacia soluciones más simples y generalizables.",
        de: "Implizite Regularisierung bezieht sich darauf, wie SGD, Architektur und Initialisierung natürlich zu einfacheren Lösungen führen.",
        nl: "Impliciete regularisatie verwijst naar hoe SGD, architectuur en initialisatie natuurlijk naar eenvoudigere oplossingen leiden."
      }
    },
    {
      question: {
        en: "What is the double descent phenomenon?",
        es: "¿Qué es el fenómeno de doble descenso?",
        de: "Was ist das Double Descent Phänomen?",
        nl: "Wat is het double descent fenomeen?"
      },
      options: [
        {
          en: "Test error decreases, increases, then decreases again with model size",
          es: "Error de prueba disminuye, aumenta, luego disminuye con tamaño del modelo",
          de: "Testfehler sinkt, steigt, dann sinkt wieder mit Modellgröße",
          nl: "Testfout daalt, stijgt, daalt weer met modelgrootte"
        },
        {
          en: "Error always decreases",
          es: "Error siempre disminuye",
          de: "Fehler sinkt immer",
          nl: "Fout daalt altijd"
        },
        {
          en: "Error always increases",
          es: "Error siempre aumenta",
          de: "Fehler steigt immer",
          nl: "Fout stijgt altijd"
        },
        {
          en: "Single descent only",
          es: "Solo descenso único",
          de: "Nur einfacher Abstieg",
          nl: "Alleen enkele daling"
        }
      ],
      correct: 0,
      explanation: {
        en: "Double descent shows test error first following classical U-curve, then decreasing again in overparameterized regime, challenging traditional bias-variance tradeoff.",
        es: "El doble descenso muestra el error siguiendo primero curva U clásica, luego disminuyendo en régimen sobreparametrizado.",
        de: "Double Descent zeigt Testfehler folgt erst U-Kurve, dann sinkt wieder im überparametrisierten Bereich.",
        nl: "Double descent toont testfout volgt eerst U-curve, daalt weer in overgeparametriseerde regime."
      }
    },
    {
      question: {
        en: "How do Graph Neural Networks aggregate information?",
        es: "¿Cómo agregan información las Redes Neuronales de Grafos?",
        de: "Wie aggregieren Graph Neural Networks Information?",
        nl: "Hoe aggregeren Graph Neural Networks informatie?"
      },
      options: [
        {
          en: "Message passing between nodes using permutation-invariant functions",
          es: "Paso de mensajes entre nodos usando funciones invariantes a permutación",
          de: "Message Passing zwischen Knoten mit permutationsinvarianten Funktionen",
          nl: "Message passing tussen nodes met permutatie-invariante functies"
        },
        {
          en: "Random sampling",
          es: "Muestreo aleatorio",
          de: "Zufälliges Sampling",
          nl: "Willekeurige sampling"
        },
        {
          en: "Fixed patterns",
          es: "Patrones fijos",
          de: "Feste Muster",
          nl: "Vaste patronen"
        },
        {
          en: "Sequential only",
          es: "Solo secuencial",
          de: "Nur sequentiell",
          nl: "Alleen sequentieel"
        }
      ],
      correct: 0,
      explanation: {
        en: "GNNs aggregate neighborhood information through message passing, where nodes exchange information using permutation-invariant aggregation functions like sum or mean.",
        es: "Las GNN agregan información del vecindario mediante paso de mensajes, intercambiando información con funciones de agregación invariantes.",
        de: "GNNs aggregieren Nachbarschaftsinformation durch Message Passing mit permutationsinvarianten Aggregationsfunktionen.",
        nl: "GNN's aggregeren buurtinformatie via message passing met permutatie-invariante aggregatiefuncties."
      }
    },
    {
      question: {
        en: "What is contrastive predictive coding (CPC)?",
        es: "¿Qué es la codificación predictiva contrastiva (CPC)?",
        de: "Was ist Contrastive Predictive Coding (CPC)?",
        nl: "Wat is contrastive predictive coding (CPC)?"
      },
      options: [
        {
          en: "Learns by predicting future in latent space using mutual information",
          es: "Aprende prediciendo futuro en espacio latente usando información mutua",
          de: "Lernt durch Vorhersage der Zukunft im latenten Raum mittels gegenseitiger Information",
          nl: "Leert door toekomst te voorspellen in latente ruimte met mutual information"
        },
        {
          en: "Supervised learning",
          es: "Aprendizaje supervisado",
          de: "Überwachtes Lernen",
          nl: "Gesuperviseerd leren"
        },
        {
          en: "Random features",
          es: "Características aleatorias",
          de: "Zufällige Features",
          nl: "Willekeurige features"
        },
        {
          en: "Classification only",
          es: "Solo clasificación",
          de: "Nur Klassifikation",
          nl: "Alleen classificatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "CPC learns representations by maximizing mutual information between context and future observations, using contrastive loss to distinguish true future samples.",
        es: "CPC aprende representaciones maximizando información mutua entre contexto y observaciones futuras, usando pérdida contrastiva.",
        de: "CPC lernt Repräsentationen durch Maximierung gegenseitiger Information zwischen Kontext und zukünftigen Beobachtungen.",
        nl: "CPC leert representaties door mutual information tussen context en toekomstige observaties te maximaliseren."
      }
    },
    {
      question: {
        en: "What is the manifold hypothesis?",
        es: "¿Qué es la hipótesis del manifold?",
        de: "Was ist die Mannigfaltigkeitshypothese?",
        nl: "Wat is de manifold-hypothese?"
      },
      options: [
        {
          en: "High-dimensional data lies on lower-dimensional manifolds",
          es: "Datos de alta dimensión yacen en manifolds de menor dimensión",
          de: "Hochdimensionale Daten liegen auf niederdimensionalen Mannigfaltigkeiten",
          nl: "Hoogdimensionale data ligt op lagerdimensionale manifolds"
        },
        {
          en: "Data is uniform",
          es: "Datos son uniformes",
          de: "Daten sind uniform",
          nl: "Data is uniform"
        },
        {
          en: "Dimensions independent",
          es: "Dimensiones independientes",
          de: "Dimensionen unabhängig",
          nl: "Dimensies onafhankelijk"
        },
        {
          en: "Data fills space",
          es: "Datos llenan espacio",
          de: "Daten füllen Raum",
          nl: "Data vult ruimte"
        }
      ],
      correct: 0,
      explanation: {
        en: "The manifold hypothesis states that real-world high-dimensional data concentrates near lower-dimensional manifolds, explaining why deep learning works.",
        es: "La hipótesis del manifold establece que datos de alta dimensión se concentran cerca de manifolds de menor dimensión.",
        de: "Die Mannigfaltigkeitshypothese besagt, dass hochdimensionale Daten sich auf niederdimensionalen Mannigfaltigkeiten konzentrieren.",
        nl: "De manifold-hypothese stelt dat hoogdimensionale data zich concentreert nabij lagerdimensionale manifolds."
      }
    },
    {
      question: {
        en: "What is MAML in meta-learning?",
        es: "¿Qué es MAML en meta-aprendizaje?",
        de: "Was ist MAML im Meta-Learning?",
        nl: "Wat is MAML in meta-learning?"
      },
      options: [
        {
          en: "Optimizes for parameters that adapt quickly to new tasks",
          es: "Optimiza parámetros que se adaptan rápido a nuevas tareas",
          de: "Optimiert für Parameter die sich schnell an neue Aufgaben anpassen",
          nl: "Optimaliseert voor parameters die snel aan nieuwe taken aanpassen"
        },
        {
          en: "Trains many models",
          es: "Entrena muchos modelos",
          de: "Trainiert viele Modelle",
          nl: "Traint veel modellen"
        },
        {
          en: "Model-specific",
          es: "Específico del modelo",
          de: "Modellspezifisch",
          nl: "Modelspecifiek"
        },
        {
          en: "Classification only",
          es: "Solo clasificación",
          de: "Nur Klassifikation",
          nl: "Alleen classificatie"
        }
      ],
      correct: 0,
      explanation: {
        en: "MAML learns initialization parameters that can be quickly adapted to new tasks with few gradient steps, enabling efficient few-shot learning.",
        es: "MAML aprende parámetros de inicialización que pueden adaptarse rápidamente a nuevas tareas con pocos pasos de gradiente.",
        de: "MAML lernt Initialisierungsparameter die schnell mit wenigen Gradientenschritten an neue Aufgaben angepasst werden.",
        nl: "MAML leert initialisatieparameters die snel met weinig gradiëntstappen aan nieuwe taken aangepast worden."
      }
    },
    {
      question: {
        en: "How does spectral clustering work?",
        es: "¿Cómo funciona el clustering espectral?",
        de: "Wie funktioniert Spectral Clustering?",
        nl: "Hoe werkt spectral clustering?"
      },
      options: [
        {
          en: "Uses graph Laplacian eigendecomposition for non-convex clusters",
          es: "Usa descomposición propia del Laplaciano para clusters no convexos",
          de: "Nutzt Graph-Laplace Eigenzerlegung für nicht-konvexe Cluster",
          nl: "Gebruikt graph Laplacian eigendecompositie voor niet-convexe clusters"
        },
        {
          en: "Finds spherical clusters",
          es: "Encuentra clusters esféricos",
          de: "Findet sphärische Cluster",
          nl: "Vindt sferische clusters"
        },
        {
          en: "Faster than k-means",
          es: "Más rápido que k-means",
          de: "Schneller als k-means",
          nl: "Sneller dan k-means"
        },
        {
          en: "Euclidean only",
          es: "Solo Euclidiano",
          de: "Nur euklidisch",
          nl: "Alleen Euclidisch"
        }
      ],
      correct: 0,
      explanation: {
        en: "Spectral clustering performs eigendecomposition on graph Laplacian, projecting data into space where clusters are more separable, finding non-convex clusters.",
        es: "El clustering espectral realiza descomposición propia en el Laplaciano, proyectando datos donde clusters son más separables.",
        de: "Spectral Clustering führt Eigenzerlegung der Graph-Laplace-Matrix durch für besser trennbare nicht-konvexe Cluster.",
        nl: "Spectral clustering voert eigendecompositie uit op graph Laplacian voor beter scheidbare niet-convexe clusters."
      }
    },
    {
      question: {
        en: "What is the Fisher Information Matrix?",
        es: "¿Qué es la Matriz de Información de Fisher?",
        de: "Was ist die Fisher-Informationsmatrix?",
        nl: "Wat is de Fisher Information Matrix?"
      },
      options: [
        {
          en: "Defines Riemannian metric for parameter space",
          es: "Define métrica Riemanniana para espacio de parámetros",
          de: "Definiert Riemannsche Metrik für Parameterraum",
          nl: "Definieert Riemannse metriek voor parameterruimte"
        },
        {
          en: "Stores gradients",
          es: "Almacena gradientes",
          de: "Speichert Gradienten",
          nl: "Slaat gradiënten op"
        },
        {
          en: "Reduces computation",
          es: "Reduce cálculo",
          de: "Reduziert Berechnung",
          nl: "Vermindert berekening"
        },
        {
          en: "Increases speed",
          es: "Aumenta velocidad",
          de: "Erhöht Geschwindigkeit",
          nl: "Verhoogt snelheid"
        }
      ],
      correct: 0,
      explanation: {
        en: "Fisher Information Matrix captures local curvature of KL divergence, providing natural Riemannian metric making natural gradient descent invariant to parameterization.",
        es: "La Matriz de Fisher captura curvatura local de divergencia KL, proporcionando métrica Riemanniana natural invariante a parametrización.",
        de: "Fisher-Informationsmatrix erfasst lokale Krümmung der KL-Divergenz, liefert natürliche Riemannsche Metrik.",
        nl: "Fisher Information Matrix vangt lokale kromming van KL-divergentie, geeft natuurlijke Riemannse metriek."
      }
    },
    {
      question: {
        en: "What is Grokking in neural networks?",
        es: "¿Qué es Grokking en redes neuronales?",
        de: "Was ist Grokking in neuronalen Netzen?",
        nl: "Wat is Grokking in neurale netwerken?"
      },
      options: [
        {
          en: "Delayed generalization after perfect training accuracy",
          es: "Generalización retrasada tras precisión perfecta de entrenamiento",
          de: "Verzögerte Generalisierung nach perfekter Trainingsgenauigkeit",
          nl: "Uitgestelde generalisatie na perfecte trainingsnauwkeurigheid"
        },
        {
          en: "Immediate learning",
          es: "Aprendizaje inmediato",
          de: "Sofortiges Lernen",
          nl: "Onmiddellijk leren"
        },
        {
          en: "Gradual improvement",
          es: "Mejora gradual",
          de: "Graduelle Verbesserung",
          nl: "Geleidelijke verbetering"
        },
        {
          en: "Training failure",
          es: "Fallo de entrenamiento",
          de: "Trainingsversagen",
          nl: "Trainingsfalen"
        }
      ],
      correct: 0,
      explanation: {
        en: "Grokking is when neural networks suddenly achieve good generalization long after memorizing training set, showing delayed transition from memorization to understanding.",
        es: "Grokking es cuando las redes logran buena generalización mucho después de memorizar el conjunto de entrenamiento.",
        de: "Grokking ist wenn neuronale Netze plötzlich gute Generalisierung erreichen lange nach Memorierung des Trainingssatzes.",
        nl: "Grokking is wanneer neurale netwerken plotseling goede generalisatie bereiken lang na memorisatie van trainingsset."
      }
    },
    {
      question: {
        en: "What is the Rademacher complexity and its role in learning theory?",
        es: "¿Qué es la complejidad de Rademacher y su rol en teoría del aprendizaje?",
        de: "Was ist die Rademacher-Komplexität und ihre Rolle in der Lerntheorie?",
        nl: "Wat is Rademacher-complexiteit en haar rol in leertheorie?"
      },
      options: [
        {
          en: "Measures hypothesis class capacity using random labels",
          es: "Mide la capacidad de clase de hipótesis usando etiquetas aleatorias",
          de: "Misst Hypothesenklassen-Kapazität mit zufälligen Labels",
          nl: "Meet hypotheseklasse-capaciteit met willekeurige labels"
        },
        {
          en: "Counts number of parameters",
          es: "Cuenta el número de parámetros",
          de: "Zählt Anzahl der Parameter",
          nl: "Telt aantal parameters"
        },
        {
          en: "Measures training speed",
          es: "Mide la velocidad de entrenamiento",
          de: "Misst Trainingsgeschwindigkeit",
          nl: "Meet trainingssnelheid"
        },
        {
          en: "Calculates model accuracy",
          es: "Calcula la precisión del modelo",
          de: "Berechnet Modellgenauigkeit",
          nl: "Berekent modelnauwkeurigheid"
        }
      ],
      correct: 0,
      explanation: {
        en: "Rademacher complexity measures the ability of a hypothesis class to fit random noise, providing generalization bounds. Higher complexity indicates greater risk of overfitting.",
        es: "La complejidad de Rademacher mide la capacidad de una clase de hipótesis para ajustar ruido aleatorio, proporcionando límites de generalización.",
        de: "Rademacher-Komplexität misst die Fähigkeit einer Hypothesenklasse, zufälliges Rauschen anzupassen und liefert Generalisierungsgrenzen.",
        nl: "Rademacher-complexiteit meet het vermogen van een hypotheseklasse om willekeurige ruis te fitten, geeft generalisatiegrenzen."
      }
    },
    {
      question: {
        en: "How does the Information Bottleneck principle apply to deep learning?",
        es: "¿Cómo se aplica el principio del Cuello de Botella de Información al deep learning?",
        de: "Wie gilt das Information Bottleneck Prinzip für Deep Learning?",
        nl: "Hoe is het Information Bottleneck principe van toepassing op deep learning?"
      },
      options: [
        {
          en: "Compresses input while preserving task-relevant information",
          es: "Comprime entrada preservando información relevante para la tarea",
          de: "Komprimiert Eingabe während aufgabenrelevante Information erhalten bleibt",
          nl: "Comprimeert input terwijl taakrelevante informatie behouden blijft"
        },
        {
          en: "Increases information flow",
          es: "Aumenta el flujo de información",
          de: "Erhöht Informationsfluss",
          nl: "Verhoogt informatiestroom"
        },
        {
          en: "Removes all bottlenecks",
          es: "Elimina todos los cuellos de botella",
          de: "Entfernt alle Flaschenhälse",
          nl: "Verwijdert alle knelpunten"
        },
        {
          en: "Maximizes entropy",
          es: "Maximiza la entropía",
          de: "Maximiert Entropie",
          nl: "Maximaliseert entropie"
        }
      ],
      correct: 0,
      explanation: {
        en: "The Information Bottleneck principle suggests deep networks learn by compressing input information while retaining what's needed for prediction, balancing compression and preservation.",
        es: "El principio del Cuello de Botella de Información sugiere que las redes profundas aprenden comprimiendo información de entrada mientras retienen lo necesario para predicción.",
        de: "Das Information Bottleneck Prinzip besagt, dass tiefe Netze durch Kompression der Eingabeinformation lernen während sie Vorhersage-relevante Information behalten.",
        nl: "Het Information Bottleneck principe suggereert dat diepe netwerken leren door input-informatie te comprimeren terwijl voorspellingsrelevante informatie behouden blijft."
      }
    }
  ]
};