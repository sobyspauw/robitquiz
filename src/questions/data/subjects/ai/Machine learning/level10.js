module.exports = {
  questions: [
  {
    question: {
      en: "What is the connection between transformer attention and graph neural networks?",
      es: "¿Cuál es la conexión entre atención de transformers y redes neuronales de grafos?",
      de: "Was ist die Verbindung zwischen Transformer-Attention und Graph Neural Networks?",
      nl: "Wat is de verbinding tussen transformer-aandacht en graph neural networks?"
    },
    options: [
      {
        en: "Self-attention can be viewed as message passing on fully connected graphs",
        es: "Auto-atención puede verse como paso de mensajes en grafos completamente conectados",
        de: "Self-Attention als Nachrichtenübertragung auf vollständig verbundenen Graphen",
        nl: "Self-attention kan gezien worden als message passing op volledig verbonden grafen"
      },
      {
        en: "They use completely different mathematical frameworks with no connection",
        es: "Usan marcos matemáticos completamente diferentes sin conexión",
        de: "Sie verwenden völlig unterschiedliche mathematische Frameworks ohne Verbindung",
        nl: "Ze gebruiken volledig verschillende wiskundige kaders zonder verbinding"
      },
      {
        en: "GNNs are always more efficient than transformers for all tasks",
        es: "GNNs son siempre más eficientes que transformers para todas las tareas",
        de: "GNNs sind immer effizienter als Transformer für alle Aufgaben",
        nl: "GNNs zijn altijd efficiënter dan transformers voor alle taken"
      },
      {
        en: "Transformers cannot model graph-structured data effectively",
        es: "Transformers no pueden modelar datos estructurados en grafos efectivamente",
        de: "Transformer können graphstrukturierte Daten nicht effektiv modellieren",
        nl: "Transformers kunnen graph-gestructureerde data niet effectief modelleren"
      }
    ],
    correct: 0,
    explanation: {
      en: "Self-attention in transformers can be interpreted as message passing on fully connected graphs where each token attends to every other token, establishing deep connections between these architectures.",
      es: "La auto-atención en transformers puede interpretarse como paso de mensajes en grafos completamente conectados donde cada token atiende a todos los demás tokens.",
      de: "Self-Attention in Transformern kann als Nachrichtenübertragung auf vollständig verbundenen Graphen interpretiert werden, wo jedes Token alle anderen beachtet.",
      nl: "Self-attention in transformers kan geïnterpreteerd worden als message passing op volledig verbonden grafen waar elk token aandacht geeft aan alle andere tokens."
    }
  },
  {
    question: {
      en: "How does the neural collapse phenomenon relate to deep learning generalization?",
      es: "¿Cómo se relaciona el fenómeno de colapso neural con la generalización en aprendizaje profundo?",
      de: "Wie hängt das Neural Collapse Phänomen mit Deep Learning Generalisierung zusammen?",
      nl: "Hoe relateert het neural collapse fenomeen aan deep learning generalisatie?"
    },
    options: [
      {
        en: "Class means converge to simplex vertices and within-class variance vanishes",
        es: "Medias de clase convergen a vértices simplex y varianza intra-clase desaparece",
        de: "Klassenmittel konvergieren zu Simplex-Eckpunkten und Innerklassen-Varianz verschwindet",
        nl: "Klassegemiddelden convergeren naar simplex-hoekpunten en binnen-klasse variantie verdwijnt"
      },
      {
        en: "Neural networks completely forget training data at convergence",
        es: "Redes neuronales olvidan completamente datos de entrenamiento en convergencia",
        de: "Neuronale Netze vergessen Trainingsdaten vollständig bei Konvergenz",
        nl: "Neurale netwerken vergeten trainingsdata volledig bij convergentie"
      },
      {
        en: "All neurons collapse to identical representations",
        es: "Todas las neuronas colapsan a representaciones idénticas",
        de: "Alle Neuronen kollabieren zu identischen Repräsentationen",
        nl: "Alle neuronen collapseren naar identieke representaties"
      },
      {
        en: "The network becomes completely linear at convergence",
        es: "La red se vuelve completamente lineal en convergencia",
        de: "Das Netzwerk wird bei Konvergenz vollständig linear",
        nl: "Het netwerk wordt volledig lineair bij convergentie"
      }
    ],
    correct: 0,
    explanation: {
      en: "Neural collapse describes how in the terminal phase of training, last-layer features collapse to their class means forming a simplex equiangular tight frame, while within-class variance approaches zero.",
      es: "El colapso neural describe cómo en la fase terminal del entrenamiento, las características de última capa colapsan a sus medias de clase formando un marco apretado equiangular simplex.",
      de: "Neural Collapse beschreibt, wie in der Endphase des Trainings die Features der letzten Schicht zu ihren Klassenmitteln kollabieren und einen Simplex bilden.",
      nl: "Neural collapse beschrijft hoe in de eindfase van training, laatste-laag features collapseren naar hun klassegemiddelden vormend een simplex equiangular tight frame."
    }
  },
  {
    question: {
      en: "What is the lottery ticket hypothesis's implication for transfer learning?",
      es: "¿Cuál es la implicación de la hipótesis del billete de lotería para aprendizaje por transferencia?",
      de: "Was ist die Implikation der Lotterielos-Hypothese für Transfer Learning?",
      nl: "Wat is de implicatie van de loterijticket-hypothese voor transfer learning?"
    },
    options: [
      {
        en: "Winning tickets found in one task may transfer to related tasks",
        es: "Billetes ganadores encontrados en una tarea pueden transferirse a tareas relacionadas",
        de: "Gewinnlose aus einer Aufgabe können auf verwandte Aufgaben übertragen werden",
        nl: "Winnende tickets gevonden in één taak kunnen overgezet worden naar gerelateerde taken"
      },
      {
        en: "Lottery tickets never transfer between different tasks",
        es: "Billetes de lotería nunca se transfieren entre tareas diferentes",
        de: "Lotterielose übertragen sich nie zwischen verschiedenen Aufgaben",
        nl: "Loterijtickets worden nooit overgedragen tussen verschillende taken"
      },
      {
        en: "Transfer learning always requires full network retraining",
        es: "Aprendizaje por transferencia siempre requiere reentrenamiento completo",
        de: "Transfer Learning erfordert immer vollständiges Neutraining",
        nl: "Transfer learning vereist altijd volledige hertraining"
      },
      {
        en: "Sparse networks cannot be used for transfer learning",
        es: "Redes dispersas no pueden usarse para aprendizaje por transferencia",
        de: "Spärliche Netze können nicht für Transfer Learning verwendet werden",
        nl: "Sparse netwerken kunnen niet gebruikt worden voor transfer learning"
      }
    ],
    correct: 0,
    explanation: {
      en: "Research shows that winning lottery tickets (sparse subnetworks) discovered in one task can transfer effectively to related tasks, suggesting universal sparse patterns exist for task families.",
      es: "La investigación muestra que los billetes ganadores descubiertos en una tarea pueden transferirse efectivamente a tareas relacionadas, sugiriendo patrones dispersos universales.",
      de: "Forschung zeigt, dass Gewinnlose aus einer Aufgabe effektiv auf verwandte Aufgaben übertragen werden können, was universelle spärliche Muster nahelegt.",
      nl: "Onderzoek toont dat winnende loterijtickets ontdekt in één taak effectief kunnen overgezet worden naar gerelateerde taken, suggererend universele sparse patronen."
    }
  },
  {
    question: {
      en: "How does mode connectivity relate to loss landscape geometry in deep learning?",
      es: "¿Cómo se relaciona la conectividad de modos con la geometría del paisaje de pérdida?",
      de: "Wie hängt Mode Connectivity mit der Verlustlandschaftsgeometrie zusammen?",
      nl: "Hoe relateert mode connectivity aan loss landscape geometrie in deep learning?"
    },
    options: [
      {
        en: "Good minima are connected by simple curves of low loss",
        es: "Buenos mínimos están conectados por curvas simples de baja pérdida",
        de: "Gute Minima sind durch einfache Kurven niedriger Verluste verbunden",
        nl: "Goede minima zijn verbonden door simpele curves van laag verlies"
      },
      {
        en: "All minima are completely isolated from each other",
        es: "Todos los mínimos están completamente aislados entre sí",
        de: "Alle Minima sind vollständig voneinander isoliert",
        nl: "Alle minima zijn volledig geïsoleerd van elkaar"
      },
      {
        en: "Loss landscapes are always convex in deep networks",
        es: "Paisajes de pérdida son siempre convexos en redes profundas",
        de: "Verlustlandschaften sind in tiefen Netzen immer konvex",
        nl: "Loss landscapes zijn altijd convex in diepe netwerken"
      },
      {
        en: "Mode connectivity only exists in linear models",
        es: "Conectividad de modos solo existe en modelos lineales",
        de: "Mode Connectivity existiert nur in linearen Modellen",
        nl: "Mode connectivity bestaat alleen in lineaire modellen"
      }
    ],
    correct: 0,
    explanation: {
      en: "Mode connectivity reveals that independently trained networks' minima are often connected by simple curves (like Bezier curves) along which loss remains low, indicating connected solution manifolds.",
      es: "La conectividad de modos revela que los mínimos de redes entrenadas independientemente están conectados por curvas simples con pérdida baja, indicando variedades de solución conectadas.",
      de: "Mode Connectivity zeigt, dass Minima unabhängig trainierter Netze oft durch einfache Kurven verbunden sind, entlang derer der Verlust niedrig bleibt.",
      nl: "Mode connectivity onthult dat minima van onafhankelijk getrainde netwerken vaak verbonden zijn door simpele curves waarlangs verlies laag blijft."
    }
  },
  {
    question: {
      en: "What role does the Hessian's spectrum play in generalization bounds?",
      es: "¿Qué papel juega el espectro del Hessiano en límites de generalización?",
      de: "Welche Rolle spielt das Spektrum der Hesse-Matrix bei Generalisierungsgrenzen?",
      nl: "Welke rol speelt het spectrum van de Hessian in generalisatiegrenzen?"
    },
    options: [
      {
        en: "Flatter minima with smaller eigenvalues tend to generalize better",
        es: "Mínimos más planos con eigenvalores menores tienden a generalizar mejor",
        de: "Flachere Minima mit kleineren Eigenwerten generalisieren besser",
        nl: "Vlakkere minima met kleinere eigenwaarden generaliseren beter"
      },
      {
        en: "Sharp minima always provide better generalization",
        es: "Mínimos agudos siempre proporcionan mejor generalización",
        de: "Scharfe Minima bieten immer bessere Generalisierung",
        nl: "Scherpe minima bieden altijd betere generalisatie"
      },
      {
        en: "Hessian spectrum is irrelevant for generalization",
        es: "El espectro del Hessiano es irrelevante para generalización",
        de: "Das Hesse-Spektrum ist irrelevant für Generalisierung",
        nl: "Hessian spectrum is irrelevant voor generalisatie"
      },
      {
        en: "Only negative eigenvalues matter for generalization",
        es: "Solo eigenvalores negativos importan para generalización",
        de: "Nur negative Eigenwerte sind wichtig für Generalisierung",
        nl: "Alleen negatieve eigenwaarden zijn belangrijk voor generalisatie"
      }
    ],
    correct: 0,
    explanation: {
      en: "The Hessian's spectrum at minima provides insights into loss landscape sharpness; flatter minima with smaller maximum eigenvalues correlate with better generalization, supporting PAC-Bayes bounds.",
      es: "El espectro del Hessiano en mínimos proporciona información sobre la agudeza del paisaje de pérdida; mínimos más planos con eigenvalores máximos menores correlacionan con mejor generalización.",
      de: "Das Spektrum der Hesse-Matrix an Minima gibt Einblicke in die Schärfe der Verlustlandschaft; flachere Minima mit kleineren maximalen Eigenwerten korrelieren mit besserer Generalisierung.",
      nl: "Het spectrum van de Hessian bij minima geeft inzicht in de scherpte van het loss landscape; vlakkere minima met kleinere maximale eigenwaarden correleren met betere generalisatie."
    }
  },
  {
    question: {
      en: "How do diffusion models relate to score matching and Langevin dynamics?",
      es: "¿Cómo se relacionan modelos de difusión con score matching y dinámica de Langevin?",
      de: "Wie hängen Diffusionsmodelle mit Score Matching und Langevin-Dynamik zusammen?",
      nl: "Hoe relateren diffusiemodellen aan score matching en Langevin-dynamica?"
    },
    options: [
      {
        en: "They learn score functions to reverse diffusion via Langevin sampling",
        es: "Aprenden funciones de score para revertir difusión vía muestreo de Langevin",
        de: "Sie lernen Score-Funktionen zur Umkehrung der Diffusion via Langevin-Sampling",
        nl: "Ze leren score-functies om diffusie om te keren via Langevin-sampling"
      },
      {
        en: "Diffusion models don't use score functions at all",
        es: "Modelos de difusión no usan funciones de score en absoluto",
        de: "Diffusionsmodelle verwenden überhaupt keine Score-Funktionen",
        nl: "Diffusiemodellen gebruiken helemaal geen score-functies"
      },
      {
        en: "Langevin dynamics is only used during training, not sampling",
        es: "Dinámica de Langevin solo se usa durante entrenamiento, no muestreo",
        de: "Langevin-Dynamik wird nur beim Training verwendet, nicht beim Sampling",
        nl: "Langevin-dynamica wordt alleen gebruikt tijdens training, niet sampling"
      },
      {
        en: "Score matching and diffusion models are unrelated concepts",
        es: "Score matching y modelos de difusión son conceptos no relacionados",
        de: "Score Matching und Diffusionsmodelle sind unverbundene Konzepte",
        nl: "Score matching en diffusiemodellen zijn ongerelateerde concepten"
      }
    ],
    correct: 0,
    explanation: {
      en: "Diffusion models learn to estimate the score (gradient of log probability) at different noise levels, then use annealed Langevin dynamics to sample by following these learned gradients.",
      es: "Los modelos de difusión aprenden a estimar el score (gradiente de log probabilidad) en diferentes niveles de ruido, luego usan dinámica de Langevin para muestrear siguiendo estos gradientes.",
      de: "Diffusionsmodelle lernen, den Score (Gradient der Log-Wahrscheinlichkeit) bei verschiedenen Rauschleveln zu schätzen und verwenden dann Langevin-Dynamik zum Sampling.",
      nl: "Diffusiemodellen leren de score (gradiënt van log-waarschijnlijkheid) te schatten bij verschillende ruisniveaus, gebruiken dan Langevin-dynamica voor sampling."
    }
  },
  {
    question: {
      en: "What is the significance of the Neural Tangent Kernel in infinite-width networks?",
      es: "¿Cuál es la significancia del Kernel Tangente Neural en redes de ancho infinito?",
      de: "Was ist die Bedeutung des Neural Tangent Kernels in unendlich breiten Netzen?",
      nl: "Wat is de betekenis van de Neural Tangent Kernel in oneindig-brede netwerken?"
    },
    options: [
      {
        en: "Training dynamics become linear in function space with fixed kernel",
        es: "Dinámica de entrenamiento se vuelve lineal en espacio de funciones con kernel fijo",
        de: "Trainingsdynamik wird linear im Funktionsraum mit festem Kernel",
        nl: "Trainingsdynamiek wordt lineair in functieruimte met vaste kernel"
      },
      {
        en: "NTK only applies to convolutional networks",
        es: "NTK solo aplica a redes convolucionales",
        de: "NTK gilt nur für Convolutional Networks",
        nl: "NTK geldt alleen voor convolutionele netwerken"
      },
      {
        en: "Infinite-width networks cannot be trained effectively",
        es: "Redes de ancho infinito no pueden entrenarse efectivamente",
        de: "Unendlich breite Netze können nicht effektiv trainiert werden",
        nl: "Oneindig-brede netwerken kunnen niet effectief getraind worden"
      },
      {
        en: "The kernel changes dramatically during training",
        es: "El kernel cambia dramáticamente durante entrenamiento",
        de: "Der Kernel ändert sich dramatisch während des Trainings",
        nl: "De kernel verandert dramatisch tijdens training"
      }
    ],
    correct: 0,
    explanation: {
      en: "In the infinite-width limit, the Neural Tangent Kernel remains constant during training, making gradient descent equivalent to kernel regression with a fixed kernel determined by architecture.",
      es: "En el límite de ancho infinito, el Kernel Tangente Neural permanece constante durante entrenamiento, haciendo descenso de gradiente equivalente a regresión de kernel con kernel fijo.",
      de: "Im Grenzfall unendlicher Breite bleibt der Neural Tangent Kernel während des Trainings konstant, wodurch Gradientenabstieg äquivalent zur Kernel-Regression wird.",
      nl: "In de oneindig-brede limiet blijft de Neural Tangent Kernel constant tijdens training, makend gradiënt-afdaling equivalent aan kernel-regressie met vaste kernel."
    }
  },
  {
    question: {
      en: "How does implicit regularization in gradient descent affect solution selection?",
      es: "¿Cómo afecta la regularización implícita en descenso de gradiente la selección de solución?",
      de: "Wie beeinflusst implizite Regularisierung im Gradientenabstieg die Lösungsauswahl?",
      nl: "Hoe beïnvloedt impliciete regularisatie in gradiënt-afdaling de selectie van oplossingen?"
    },
    options: [
      {
        en: "Gradient descent implicitly selects minimum norm solutions",
        es: "Descenso de gradiente selecciona implícitamente soluciones de norma mínima",
        de: "Gradientenabstieg wählt implizit Lösungen minimaler Norm",
        nl: "Gradiënt-afdaling selecteert impliciet minimum-norm oplossingen"
      },
      {
        en: "All solutions are equally likely regardless of optimization",
        es: "Todas las soluciones son igualmente probables sin importar optimización",
        de: "Alle Lösungen sind gleich wahrscheinlich unabhängig von Optimierung",
        nl: "Alle oplossingen zijn even waarschijnlijk ongeacht optimalisatie"
      },
      {
        en: "Gradient descent always finds the sharpest minimum",
        es: "Descenso de gradiente siempre encuentra el mínimo más agudo",
        de: "Gradientenabstieg findet immer das schärfste Minimum",
        nl: "Gradiënt-afdaling vindt altijd het scherpste minimum"
      },
      {
        en: "Implicit regularization only occurs with explicit penalties",
        es: "Regularización implícita solo ocurre con penalizaciones explícitas",
        de: "Implizite Regularisierung tritt nur mit expliziten Strafen auf",
        nl: "Impliciete regularisatie gebeurt alleen met expliciete penalties"
      }
    ],
    correct: 0,
    explanation: {
      en: "Gradient descent exhibits implicit regularization by naturally converging to solutions with certain properties (like minimum norm or maximum margin) even without explicit regularization terms.",
      es: "Descenso de gradiente exhibe regularización implícita convergiendo naturalmente a soluciones con ciertas propiedades (como norma mínima o margen máximo) sin términos de regularización explícitos.",
      de: "Gradientenabstieg zeigt implizite Regularisierung durch natürliche Konvergenz zu Lösungen mit bestimmten Eigenschaften ohne explizite Regularisierungsterme.",
      nl: "Gradiënt-afdaling vertoont impliciete regularisatie door natuurlijk te convergeren naar oplossingen met bepaalde eigenschappen zonder expliciete regularisatietermijnen."
    }
  },
  {
    question: {
      en: "What is the double descent curve's implication for model selection?",
      es: "¿Cuál es la implicación de la curva de doble descenso para selección de modelos?",
      de: "Was ist die Implikation der Doppelabstiegskurve für Modellauswahl?",
      nl: "Wat is de implicatie van de dubbele-afdalingscurve voor modelselectie?"
    },
    options: [
      {
        en: "Test error can decrease again after interpolation threshold",
        es: "Error de prueba puede decrecer nuevamente después del umbral de interpolación",
        de: "Testfehler kann nach Interpolationsschwelle wieder sinken",
        nl: "Testfout kan weer afnemen na interpolatiedrempel"
      },
      {
        en: "Larger models always perform worse than smaller ones",
        es: "Modelos más grandes siempre rinden peor que los pequeños",
        de: "Größere Modelle sind immer schlechter als kleinere",
        nl: "Grotere modellen presteren altijd slechter dan kleinere"
      },
      {
        en: "Model complexity and generalization are linearly related",
        es: "Complejidad del modelo y generalización están linealmente relacionadas",
        de: "Modellkomplexität und Generalisierung sind linear verbunden",
        nl: "Modelcomplexiteit en generalisatie zijn lineair gerelateerd"
      },
      {
        en: "Double descent only occurs in toy problems",
        es: "Doble descenso solo ocurre en problemas de juguete",
        de: "Doppelabstieg tritt nur bei Spielzeugproblemen auf",
        nl: "Dubbele afdaling gebeurt alleen bij speelgoedproblemen"
      }
    ],
    correct: 0,
    explanation: {
      en: "Double descent shows that after the interpolation threshold where models fit training data perfectly, test error can decrease again with increased model capacity, challenging classical bias-variance trade-off.",
      es: "Doble descenso muestra que después del umbral de interpolación donde modelos ajustan datos perfectamente, el error de prueba puede decrecer con capacidad aumentada.",
      de: "Doppelabstieg zeigt, dass nach der Interpolationsschwelle, wo Modelle Trainingsdaten perfekt anpassen, der Testfehler mit erhöhter Kapazität wieder sinken kann.",
      nl: "Dubbele afdaling toont dat na de interpolatiedrempel waar modellen trainingsdata perfect fitten, testfout weer kan afnemen met verhoogde capaciteit."
    }
  },
  {
    question: {
      en: "How do vision transformers challenge convolutional inductive biases?",
      es: "¿Cómo desafían los transformers de visión los sesgos inductivos convolucionales?",
      de: "Wie stellen Vision Transformer konvolutionale induktive Verzerrungen in Frage?",
      nl: "Hoe dagen vision transformers convolutionele inductieve biases uit?"
    },
    options: [
      {
        en: "They achieve superior performance without built-in translation equivariance",
        es: "Logran rendimiento superior sin equivarianza de traducción incorporada",
        de: "Sie erreichen überlegene Leistung ohne eingebaute Translationsäquivarianz",
        nl: "Ze bereiken superieure prestaties zonder ingebouwde translatie-equivariantie"
      },
      {
        en: "Vision transformers require convolutional layers to work",
        es: "Transformers de visión requieren capas convolucionales para funcionar",
        de: "Vision Transformer benötigen Convolutional Layers zum Funktionieren",
        nl: "Vision transformers vereisen convolutionele lagen om te werken"
      },
      {
        en: "They perform worse than CNNs on all vision tasks",
        es: "Rinden peor que CNNs en todas las tareas de visión",
        de: "Sie sind schlechter als CNNs bei allen Vision-Aufgaben",
        nl: "Ze presteren slechter dan CNNs op alle vision-taken"
      },
      {
        en: "Inductive biases are always necessary for good performance",
        es: "Sesgos inductivos son siempre necesarios para buen rendimiento",
        de: "Induktive Verzerrungen sind immer notwendig für gute Leistung",
        nl: "Inductieve biases zijn altijd noodzakelijk voor goede prestaties"
      }
    ],
    correct: 0,
    explanation: {
      en: "Vision transformers demonstrate that with sufficient data and compute, models can learn effective representations without strong architectural priors like translation equivariance built into CNNs.",
      es: "Los transformers de visión demuestran que con suficientes datos y cómputo, los modelos pueden aprender representaciones efectivas sin priors arquitectónicos fuertes.",
      de: "Vision Transformer zeigen, dass mit genügend Daten und Rechenleistung Modelle effektive Repräsentationen ohne starke architektonische Priors lernen können.",
      nl: "Vision transformers demonstreren dat met voldoende data en rekenkracht, modellen effectieve representaties kunnen leren zonder sterke architectonische priors."
    }
  },
  {
    question: {
      en: "What makes contrastive predictive coding effective for representation learning?",
      es: "¿Qué hace efectiva la codificación predictiva contrastiva para aprendizaje de representaciones?",
      de: "Was macht Contrastive Predictive Coding effektiv für Representation Learning?",
      nl: "Wat maakt contrastive predictive coding effectief voor representatieleren?"
    },
    options: [
      {
        en: "Maximizes mutual information between different views of data",
        es: "Maximiza información mutua entre diferentes vistas de datos",
        de: "Maximiert gegenseitige Information zwischen verschiedenen Datenansichten",
        nl: "Maximaliseert wederzijdse informatie tussen verschillende views van data"
      },
      {
        en: "Requires labeled data for all training samples",
        es: "Requiere datos etiquetados para todas las muestras de entrenamiento",
        de: "Benötigt gelabelte Daten für alle Trainingsproben",
        nl: "Vereist gelabelde data voor alle trainingssamples"
      },
      {
        en: "Only works with supervised learning objectives",
        es: "Solo funciona con objetivos de aprendizaje supervisado",
        de: "Funktioniert nur mit überwachten Lernzielen",
        nl: "Werkt alleen met supervised learning doelstellingen"
      },
      {
        en: "Cannot learn useful representations without fine-tuning",
        es: "No puede aprender representaciones útiles sin ajuste fino",
        de: "Kann ohne Feinabstimmung keine nützlichen Repräsentationen lernen",
        nl: "Kan geen nuttige representaties leren zonder fine-tuning"
      }
    ],
    correct: 0,
    explanation: {
      en: "CPC learns representations by maximizing mutual information between context and future observations through a contrastive loss, enabling powerful self-supervised pretraining without labels.",
      es: "CPC aprende representaciones maximizando información mutua entre contexto y observaciones futuras a través de pérdida contrastiva, permitiendo preentrenamiento autosupervisado sin etiquetas.",
      de: "CPC lernt Repräsentationen durch Maximierung der gegenseitigen Information zwischen Kontext und zukünftigen Beobachtungen, ermöglicht selbstüberwachtes Vortraining ohne Labels.",
      nl: "CPC leert representaties door wederzijdse informatie tussen context en toekomstige observaties te maximaliseren, mogelijk makend krachtige self-supervised pretraining zonder labels."
    }
  },
  {
    question: {
      en: "How does sharpness-aware minimization (SAM) improve generalization?",
      es: "¿Cómo mejora la generalización la minimización consciente de agudeza (SAM)?",
      de: "Wie verbessert Sharpness-Aware Minimization (SAM) die Generalisierung?",
      nl: "Hoe verbetert sharpness-aware minimization (SAM) generalisatie?"
    },
    options: [
      {
        en: "Seeks parameters that minimize loss in worst-case neighborhood",
        es: "Busca parámetros que minimizan pérdida en vecindario del peor caso",
        de: "Sucht Parameter die Verlust in Worst-Case-Nachbarschaft minimieren",
        nl: "Zoekt parameters die verlies minimaliseren in worst-case buurt"
      },
      {
        en: "Always converges faster than standard SGD",
        es: "Siempre converge más rápido que SGD estándar",
        de: "Konvergiert immer schneller als Standard-SGD",
        nl: "Convergeert altijd sneller dan standaard SGD"
      },
      {
        en: "Requires second-order derivatives to work",
        es: "Requiere derivadas de segundo orden para funcionar",
        de: "Benötigt Ableitungen zweiter Ordnung zum Funktionieren",
        nl: "Vereist tweede-orde afgeleiden om te werken"
      },
      {
        en: "Only effective for convex optimization problems",
        es: "Solo efectivo para problemas de optimización convexa",
        de: "Nur effektiv für konvexe Optimierungsprobleme",
        nl: "Alleen effectief voor convexe optimalisatieproblemen"
      }
    ],
    correct: 0,
    explanation: {
      en: "SAM simultaneously minimizes loss value and loss sharpness by seeking parameters whose entire neighborhoods have uniformly low loss, leading to flatter minima that generalize better.",
      es: "SAM minimiza simultáneamente valor de pérdida y agudeza de pérdida buscando parámetros cuyos vecindarios completos tienen pérdida uniformemente baja.",
      de: "SAM minimiert gleichzeitig Verlustwert und Verlustschärfe durch Suche nach Parametern deren gesamte Nachbarschaften einheitlich niedrigen Verlust haben.",
      nl: "SAM minimaliseert gelijktijdig verlieswaarde en verliesscherpte door parameters te zoeken waarvan hele buurten uniform laag verlies hebben."
    }
  },
  {
    question: {
      en: "What is the theoretical foundation of gradient flow in Graph Neural Networks?",
      es: "¿Cuál es la base teórica del flujo de gradiente en Redes Neuronales de Grafos?",
      de: "Was ist die theoretische Grundlage des Gradientenflusses in Graph Neural Networks?",
      nl: "Wat is de theoretische basis van gradiënt-flow in Graph Neural Networks?"
    },
    options: [
      {
        en: "Spectral graph theory connects gradient flow to graph Laplacian",
        es: "Teoría espectral de grafos conecta flujo de gradiente con Laplaciano del grafo",
        de: "Spektrale Graphentheorie verbindet Gradientenfluss mit Graph-Laplace-Operator",
        nl: "Spectrale grafentheorie verbindt gradiënt-flow met graph Laplaciaan"
      },
      {
        en: "Gradient flow is independent of graph structure",
        es: "Flujo de gradiente es independiente de estructura del grafo",
        de: "Gradientenfluss ist unabhängig von Graphstruktur",
        nl: "Gradiënt-flow is onafhankelijk van grafstructuur"
      },
      {
        en: "GNNs don't use gradient-based optimization",
        es: "GNNs no usan optimización basada en gradientes",
        de: "GNNs verwenden keine gradientenbasierte Optimierung",
        nl: "GNNs gebruiken geen gradiënt-gebaseerde optimalisatie"
      },
      {
        en: "Only works for directed acyclic graphs",
        es: "Solo funciona para grafos acíclicos dirigidos",
        de: "Funktioniert nur für gerichtete azyklische Graphen",
        nl: "Werkt alleen voor gerichte acyclische grafen"
      }
    ],
    correct: 0,
    explanation: {
      en: "GNN gradient flow is deeply connected to spectral graph theory where the graph Laplacian eigenvalues determine convergence rates and the eigenvectors define the learned representations.",
      es: "El flujo de gradiente en GNN está conectado con teoría espectral de grafos donde eigenvalores del Laplaciano determinan tasas de convergencia.",
      de: "GNN-Gradientenfluss ist eng mit spektraler Graphentheorie verbunden, wo Laplace-Eigenwerte Konvergenzraten bestimmen.",
      nl: "GNN gradiënt-flow is diep verbonden met spectrale grafentheorie waar graph Laplaciaan eigenwaarden convergentiesnelheden bepalen."
    }
  },
  {
    question: {
      en: "How does the information bottleneck principle apply to deep learning?",
      es: "¿Cómo se aplica el principio del cuello de botella de información al aprendizaje profundo?",
      de: "Wie gilt das Information Bottleneck Prinzip für Deep Learning?",
      nl: "Hoe is het information bottleneck principe van toepassing op deep learning?"
    },
    options: [
      {
        en: "Networks compress input while preserving task-relevant information",
        es: "Redes comprimen entrada preservando información relevante para la tarea",
        de: "Netze komprimieren Eingabe während aufgabenrelevante Information erhalten bleibt",
        nl: "Netwerken comprimeren input terwijl taak-relevante informatie behouden blijft"
      },
      {
        en: "All information must be preserved through every layer",
        es: "Toda información debe preservarse a través de cada capa",
        de: "Alle Information muss durch jede Schicht erhalten bleiben",
        nl: "Alle informatie moet behouden blijven door elke laag"
      },
      {
        en: "Information bottleneck only applies to autoencoders",
        es: "Cuello de botella de información solo aplica a autoencoders",
        de: "Information Bottleneck gilt nur für Autoencoder",
        nl: "Information bottleneck geldt alleen voor autoencoders"
      },
      {
        en: "Compression always hurts model performance",
        es: "Compresión siempre daña el rendimiento del modelo",
        de: "Kompression schadet immer der Modellleistung",
        nl: "Compressie schaadt altijd modelprestaties"
      }
    ],
    correct: 0,
    explanation: {
      en: "The information bottleneck principle suggests deep networks learn by first fitting data then compressing representations, keeping only information relevant for the task while discarding noise.",
      es: "El principio del cuello de botella sugiere que redes profundas aprenden primero ajustando datos luego comprimiendo representaciones, manteniendo solo información relevante.",
      de: "Das Information Bottleneck Prinzip besagt, dass tiefe Netze durch Datenfitting und anschließende Kompression lernen, wobei nur aufgabenrelevante Information behalten wird.",
      nl: "Het information bottleneck principe suggereert dat diepe netwerken leren door eerst data te fitten dan representaties te comprimeren, alleen taak-relevante informatie behoudend."
    }
  },
  {
    question: {
      en: "What role does overparameterization play in optimization landscape?",
      es: "¿Qué papel juega la sobreparametrización en el paisaje de optimización?",
      de: "Welche Rolle spielt Überparametrisierung in der Optimierungslandschaft?",
      nl: "Welke rol speelt overparametrisatie in het optimalisatielandschap?"
    },
    options: [
      {
        en: "Creates more connected solution manifolds with better conditioning",
        es: "Crea variedades de solución más conectadas con mejor condicionamiento",
        de: "Erzeugt besser verbundene Lösungsmannigfaltigkeiten mit besserer Konditionierung",
        nl: "Creëert meer verbonden oplossingsmanifolds met betere conditionering"
      },
      {
        en: "Always makes optimization harder due to more parameters",
        es: "Siempre hace optimización más difícil debido a más parámetros",
        de: "Macht Optimierung immer schwieriger wegen mehr Parametern",
        nl: "Maakt optimalisatie altijd moeilijker door meer parameters"
      },
      {
        en: "Has no effect on the loss landscape geometry",
        es: "No tiene efecto en la geometría del paisaje de pérdida",
        de: "Hat keinen Effekt auf die Verlustlandschaftsgeometrie",
        nl: "Heeft geen effect op de loss landscape geometrie"
      },
      {
        en: "Only helps with convex optimization problems",
        es: "Solo ayuda con problemas de optimización convexa",
        de: "Hilft nur bei konvexen Optimierungsproblemen",
        nl: "Helpt alleen bij convexe optimalisatieproblemen"
      }
    ],
    correct: 0,
    explanation: {
      en: "Overparameterization improves optimization by creating wider minima basins, more connected solution paths, and better-conditioned Hessians, paradoxically making optimization easier despite more parameters.",
      es: "La sobreparametrización mejora la optimización creando cuencas de mínimos más amplias, rutas de solución más conectadas y Hessianos mejor condicionados.",
      de: "Überparametrisierung verbessert Optimierung durch breitere Minima-Becken, besser verbundene Lösungspfade und besser konditionierte Hesse-Matrizen.",
      nl: "Overparametrisatie verbetert optimalisatie door bredere minima-bekkens, meer verbonden oplossingspaden en beter-geconditioneerde Hessianen te creëren."
    }
  },
  {
    question: {
      en: "How does neural architecture search relate to hyperparameter optimization?",
      es: "¿Cómo se relaciona la búsqueda de arquitectura neural con optimización de hiperparámetros?",
      de: "Wie hängt Neural Architecture Search mit Hyperparameter-Optimierung zusammen?",
      nl: "Hoe relateert neural architecture search aan hyperparameter-optimalisatie?"
    },
    options: [
      {
        en: "NAS is a special case of hyperparameter optimization over discrete spaces",
        es: "NAS es un caso especial de optimización de hiperparámetros sobre espacios discretos",
        de: "NAS ist ein Spezialfall der Hyperparameter-Optimierung über diskrete Räume",
        nl: "NAS is een speciaal geval van hyperparameter-optimalisatie over discrete ruimtes"
      },
      {
        en: "They are completely unrelated optimization problems",
        es: "Son problemas de optimización completamente no relacionados",
        de: "Sie sind völlig unverbundene Optimierungsprobleme",
        nl: "Het zijn volledig ongerelateerde optimalisatieproblemen"
      },
      {
        en: "NAS doesn't involve any optimization",
        es: "NAS no involucra ninguna optimización",
        de: "NAS beinhaltet keine Optimierung",
        nl: "NAS behelst geen optimalisatie"
      },
      {
        en: "Hyperparameter optimization is always more complex than NAS",
        es: "Optimización de hiperparámetros es siempre más compleja que NAS",
        de: "Hyperparameter-Optimierung ist immer komplexer als NAS",
        nl: "Hyperparameter-optimalisatie is altijd complexer dan NAS"
      }
    ],
    correct: 0,
    explanation: {
      en: "NAS can be viewed as hyperparameter optimization where the hyperparameters define the network architecture, often using techniques like differentiable architecture search or evolutionary algorithms.",
      es: "NAS puede verse como optimización de hiperparámetros donde los hiperparámetros definen la arquitectura de red, usando técnicas como búsqueda diferenciable.",
      de: "NAS kann als Hyperparameter-Optimierung betrachtet werden, wo Hyperparameter die Netzarchitektur definieren, oft mit differenzierbarer Architektursuche.",
      nl: "NAS kan gezien worden als hyperparameter-optimalisatie waar hyperparameters de netwerkarchitectuur definiëren, vaak gebruikmakend van differentieerbare architectuurzoektechnieken."
    }
  },
  {
    question: {
      en: "What is the role of Lipschitz continuity in neural network optimization?",
      es: "¿Cuál es el papel de la continuidad de Lipschitz en optimización de redes neuronales?",
      de: "Was ist die Rolle der Lipschitz-Stetigkeit bei der Optimierung neuronaler Netze?",
      nl: "Wat is de rol van Lipschitz-continuïteit in neurale netwerkoptimalisatie?"
    },
    options: [
      {
        en: "Ensures stable gradients and convergence guarantees for optimization",
        es: "Asegura gradientes estables y garantías de convergencia para optimización",
        de: "Gewährleistet stabile Gradienten und Konvergenzgarantien für Optimierung",
        nl: "Verzekert stabiele gradiënten en convergentiegaranties voor optimalisatie"
      },
      {
        en: "Only relevant for linear models, not neural networks",
        es: "Solo relevante para modelos lineales, no redes neuronales",
        de: "Nur relevant für lineare Modelle, nicht neuronale Netze",
        nl: "Alleen relevant voor lineaire modellen, niet neurale netwerken"
      },
      {
        en: "Lipschitz constraints always hurt model expressiveness",
        es: "Restricciones de Lipschitz siempre dañan expresividad del modelo",
        de: "Lipschitz-Beschränkungen schaden immer der Modellausdruckskraft",
        nl: "Lipschitz-beperkingen schaden altijd model-expressiviteit"
      },
      {
        en: "Has no impact on training stability",
        es: "No tiene impacto en estabilidad del entrenamiento",
        de: "Hat keinen Einfluss auf Trainingsstabilität",
        nl: "Heeft geen impact op trainingsstabiliteit"
      }
    ],
    correct: 0,
    explanation: {
      en: "Lipschitz continuity bounds gradient magnitudes preventing exploding gradients, enables convergence proofs, and techniques like spectral normalization enforce it for training stability.",
      es: "La continuidad de Lipschitz limita magnitudes de gradientes previniendo gradientes explosivos, permite pruebas de convergencia y técnicas como normalización espectral.",
      de: "Lipschitz-Stetigkeit begrenzt Gradientengrößen, verhindert explodierende Gradienten, ermöglicht Konvergenzbeweise und Techniken wie Spektralnormalisierung.",
      nl: "Lipschitz-continuïteit begrenst gradiëntmagnitudes voorkomend exploderende gradiënten, maakt convergentiebewijzen mogelijk en technieken zoals spectrale normalisatie."
    }
  },
  {
    question: {
      en: "How does meta-learning relate to few-shot learning theoretically?",
      es: "¿Cómo se relaciona el meta-aprendizaje con aprendizaje de pocos ejemplos teóricamente?",
      de: "Wie hängt Meta-Learning theoretisch mit Few-Shot Learning zusammen?",
      nl: "Hoe relateert meta-learning theoretisch aan few-shot learning?"
    },
    options: [
      {
        en: "Meta-learning optimizes for rapid adaptation to new tasks with minimal data",
        es: "Meta-aprendizaje optimiza para adaptación rápida a nuevas tareas con datos mínimos",
        de: "Meta-Learning optimiert für schnelle Anpassung an neue Aufgaben mit minimalen Daten",
        nl: "Meta-learning optimaliseert voor snelle adaptatie aan nieuwe taken met minimale data"
      },
      {
        en: "They are unrelated concepts in machine learning",
        es: "Son conceptos no relacionados en aprendizaje automático",
        de: "Sie sind unverbundene Konzepte im maschinellen Lernen",
        nl: "Het zijn ongerelateerde concepten in machine learning"
      },
      {
        en: "Few-shot learning doesn't benefit from meta-learning",
        es: "Aprendizaje de pocos ejemplos no se beneficia del meta-aprendizaje",
        de: "Few-Shot Learning profitiert nicht von Meta-Learning",
        nl: "Few-shot learning profiteert niet van meta-learning"
      },
      {
        en: "Meta-learning only works with large datasets",
        es: "Meta-aprendizaje solo funciona con conjuntos de datos grandes",
        de: "Meta-Learning funktioniert nur mit großen Datensätzen",
        nl: "Meta-learning werkt alleen met grote datasets"
      }
    ],
    correct: 0,
    explanation: {
      en: "Meta-learning provides theoretical framework for few-shot learning by learning priors over task distributions, enabling models to quickly adapt to new tasks using only a few examples.",
      es: "Meta-aprendizaje proporciona marco teórico para aprendizaje de pocos ejemplos aprendiendo priors sobre distribuciones de tareas, permitiendo adaptación rápida.",
      de: "Meta-Learning bietet theoretischen Rahmen für Few-Shot Learning durch Lernen von Priors über Aufgabenverteilungen, ermöglicht schnelle Anpassung.",
      nl: "Meta-learning biedt theoretisch kader voor few-shot learning door priors over taakdistributies te leren, mogelijk makend snelle adaptatie."
    }
  },
  {
    question: {
      en: "What is the connection between transformer attention and graph neural networks?",
      es: "¿Cuál es la conexión entre atención de transformers y redes neuronales de grafos?",
      de: "Was ist die Verbindung zwischen Transformer-Attention und Graph Neural Networks?",
      nl: "Wat is de verbinding tussen transformer-aandacht en graph neural networks?"
    },
    options: [
      {
        en: "Self-attention can be viewed as message passing on fully connected graphs",
        es: "Auto-atención puede verse como paso de mensajes en grafos completamente conectados",
        de: "Self-Attention als Nachrichtenübertragung auf vollständig verbundenen Graphen",
        nl: "Self-attention kan gezien worden als message passing op volledig verbonden grafen"
      },
      {
        en: "They use completely different mathematical frameworks with no connection",
        es: "Usan marcos matemáticos completamente diferentes sin conexión",
        de: "Sie verwenden völlig unterschiedliche mathematische Frameworks ohne Verbindung",
        nl: "Ze gebruiken volledig verschillende wiskundige kaders zonder verbinding"
      },
      {
        en: "GNNs are always more efficient than transformers for all tasks",
        es: "GNNs son siempre más eficientes que transformers para todas las tareas",
        de: "GNNs sind immer effizienter als Transformer für alle Aufgaben",
        nl: "GNNs zijn altijd efficiënter dan transformers voor alle taken"
      },
      {
        en: "Transformers cannot model graph-structured data effectively",
        es: "Transformers no pueden modelar datos estructurados en grafos efectivamente",
        de: "Transformer können graphstrukturierte Daten nicht effektiv modellieren",
        nl: "Transformers kunnen graph-gestructureerde data niet effectief modelleren"
      }
    ],
    correct: 0,
    explanation: {
      en: "Self-attention in transformers can be interpreted as message passing on fully connected graphs where each token attends to every other token, establishing deep connections between these architectures.",
      es: "La auto-atención en transformers puede interpretarse como paso de mensajes en grafos completamente conectados donde cada token atiende a todos los demás tokens.",
      de: "Self-Attention in Transformern kann als Nachrichtenübertragung auf vollständig verbundenen Graphen interpretiert werden, wo jedes Token alle anderen beachtet.",
      nl: "Self-attention in transformers kan geïnterpreteerd worden als message passing op volledig verbonden grafen waar elk token aandacht geeft aan alle andere tokens."
    }
  },
  {
    question: {
      en: "How does the neural collapse phenomenon relate to deep learning generalization?",
      es: "¿Cómo se relaciona el fenómeno de colapso neural con la generalización en aprendizaje profundo?",
      de: "Wie hängt das Neural Collapse Phänomen mit Deep Learning Generalisierung zusammen?",
      nl: "Hoe relateert het neural collapse fenomeen aan deep learning generalisatie?"
    },
    options: [
      {
        en: "Class means converge to simplex vertices and within-class variance vanishes",
        es: "Medias de clase convergen a vértices simplex y varianza intra-clase desaparece",
        de: "Klassenmittel konvergieren zu Simplex-Eckpunkten und Innerklassen-Varianz verschwindet",
        nl: "Klassegemiddelden convergeren naar simplex-hoekpunten en binnen-klasse variantie verdwijnt"
      },
      {
        en: "Neural networks completely forget training data at convergence",
        es: "Redes neuronales olvidan completamente datos de entrenamiento en convergencia",
        de: "Neuronale Netze vergessen Trainingsdaten vollständig bei Konvergenz",
        nl: "Neurale netwerken vergeten trainingsdata volledig bij convergentie"
      },
      {
        en: "All neurons collapse to identical representations",
        es: "Todas las neuronas colapsan a representaciones idénticas",
        de: "Alle Neuronen kollabieren zu identischen Repräsentationen",
        nl: "Alle neuronen collapseren naar identieke representaties"
      },
      {
        en: "The network becomes completely linear at convergence",
        es: "La red se vuelve completamente lineal en convergencia",
        de: "Das Netzwerk wird bei Konvergenz vollständig linear",
        nl: "Het netwerk wordt volledig lineair bij convergentie"
      }
    ],
    correct: 0,
    explanation: {
      en: "Neural collapse describes how in the terminal phase of training, last-layer features collapse to their class means forming a simplex equiangular tight frame, while within-class variance approaches zero.",
      es: "El colapso neural describe cómo en la fase terminal del entrenamiento, las características de última capa colapsan a sus medias de clase formando un marco apretado equiangular simplex.",
      de: "Neural Collapse beschreibt, wie in der Endphase des Trainings die Features der letzten Schicht zu ihren Klassenmitteln kollabieren und einen Simplex bilden.",
      nl: "Neural collapse beschrijft hoe in de eindfase van training, laatste-laag features collapseren naar hun klassegemiddelden vormend een simplex equiangular tight frame."
    }
  },
  {
    question: {
      en: "What is the lottery ticket hypothesis's implication for transfer learning?",
      es: "¿Cuál es la implicación de la hipótesis del billete de lotería para aprendizaje por transferencia?",
      de: "Was ist die Implikation der Lotterielos-Hypothese für Transfer Learning?",
      nl: "Wat is de implicatie van de loterijticket-hypothese voor transfer learning?"
    },
    options: [
      {
        en: "Winning tickets found in one task may transfer to related tasks",
        es: "Billetes ganadores encontrados en una tarea pueden transferirse a tareas relacionadas",
        de: "Gewinnlose aus einer Aufgabe können auf verwandte Aufgaben übertragen werden",
        nl: "Winnende tickets gevonden in één taak kunnen overgezet worden naar gerelateerde taken"
      },
      {
        en: "Lottery tickets never transfer between different tasks",
        es: "Billetes de lotería nunca se transfieren entre tareas diferentes",
        de: "Lotterielose übertragen sich nie zwischen verschiedenen Aufgaben",
        nl: "Loterijtickets worden nooit overgedragen tussen verschillende taken"
      },
      {
        en: "Transfer learning always requires full network retraining",
        es: "Aprendizaje por transferencia siempre requiere reentrenamiento completo",
        de: "Transfer Learning erfordert immer vollständiges Neutraining",
        nl: "Transfer learning vereist altijd volledige hertraining"
      },
      {
        en: "Sparse networks cannot be used for transfer learning",
        es: "Redes dispersas no pueden usarse para aprendizaje por transferencia",
        de: "Spärliche Netze können nicht für Transfer Learning verwendet werden",
        nl: "Sparse netwerken kunnen niet gebruikt worden voor transfer learning"
      }
    ],
    correct: 0,
    explanation: {
      en: "Research shows that winning lottery tickets (sparse subnetworks) discovered in one task can transfer effectively to related tasks, suggesting universal sparse patterns exist for task families.",
      es: "La investigación muestra que los billetes ganadores descubiertos en una tarea pueden transferirse efectivamente a tareas relacionadas, sugiriendo patrones dispersos universales.",
      de: "Forschung zeigt, dass Gewinnlose aus einer Aufgabe effektiv auf verwandte Aufgaben übertragen werden können, was universelle spärliche Muster nahelegt.",
      nl: "Onderzoek toont dat winnende loterijtickets ontdekt in één taak effectief kunnen overgezet worden naar gerelateerde taken, suggererend universele sparse patronen."
    }
  },
  {
    question: {
      en: "How does mode connectivity relate to loss landscape geometry in deep learning?",
      es: "¿Cómo se relaciona la conectividad de modos con la geometría del paisaje de pérdida?",
      de: "Wie hängt Mode Connectivity mit der Verlustlandschaftsgeometrie zusammen?",
      nl: "Hoe relateert mode connectivity aan loss landscape geometrie in deep learning?"
    },
    options: [
      {
        en: "Good minima are connected by simple curves of low loss",
        es: "Buenos mínimos están conectados por curvas simples de baja pérdida",
        de: "Gute Minima sind durch einfache Kurven niedriger Verluste verbunden",
        nl: "Goede minima zijn verbonden door simpele curves van laag verlies"
      },
      {
        en: "All minima are completely isolated from each other",
        es: "Todos los mínimos están completamente aislados entre sí",
        de: "Alle Minima sind vollständig voneinander isoliert",
        nl: "Alle minima zijn volledig geïsoleerd van elkaar"
      },
      {
        en: "Loss landscapes are always convex in deep networks",
        es: "Paisajes de pérdida son siempre convexos en redes profundas",
        de: "Verlustlandschaften sind in tiefen Netzen immer konvex",
        nl: "Loss landscapes zijn altijd convex in diepe netwerken"
      },
      {
        en: "Mode connectivity only exists in linear models",
        es: "Conectividad de modos solo existe en modelos lineales",
        de: "Mode Connectivity existiert nur in linearen Modellen",
        nl: "Mode connectivity bestaat alleen in lineaire modellen"
      }
    ],
    correct: 0,
    explanation: {
      en: "Mode connectivity reveals that independently trained networks' minima are often connected by simple curves (like Bezier curves) along which loss remains low, indicating connected solution manifolds.",
      es: "La conectividad de modos revela que los mínimos de redes entrenadas independientemente están conectados por curvas simples con pérdida baja, indicando variedades de solución conectadas.",
      de: "Mode Connectivity zeigt, dass Minima unabhängig trainierter Netze oft durch einfache Kurven verbunden sind, entlang derer der Verlust niedrig bleibt.",
      nl: "Mode connectivity onthult dat minima van onafhankelijk getrainde netwerken vaak verbonden zijn door simpele curves waarlangs verlies laag blijft."
    }
  },
  {
    question: {
      en: "What role does the Hessian's spectrum play in generalization bounds?",
      es: "¿Qué papel juega el espectro del Hessiano en límites de generalización?",
      de: "Welche Rolle spielt das Spektrum der Hesse-Matrix bei Generalisierungsgrenzen?",
      nl: "Welke rol speelt het spectrum van de Hessian in generalisatiegrenzen?"
    },
    options: [
      {
        en: "Flatter minima with smaller eigenvalues tend to generalize better",
        es: "Mínimos más planos con eigenvalores menores tienden a generalizar mejor",
        de: "Flachere Minima mit kleineren Eigenwerten generalisieren besser",
        nl: "Vlakkere minima met kleinere eigenwaarden generaliseren beter"
      },
      {
        en: "Sharp minima always provide better generalization",
        es: "Mínimos agudos siempre proporcionan mejor generalización",
        de: "Scharfe Minima bieten immer bessere Generalisierung",
        nl: "Scherpe minima bieden altijd betere generalisatie"
      },
      {
        en: "Hessian spectrum is irrelevant for generalization",
        es: "El espectro del Hessiano es irrelevante para generalización",
        de: "Das Hesse-Spektrum ist irrelevant für Generalisierung",
        nl: "Hessian spectrum is irrelevant voor generalisatie"
      },
      {
        en: "Only negative eigenvalues matter for generalization",
        es: "Solo eigenvalores negativos importan para generalización",
        de: "Nur negative Eigenwerte sind wichtig für Generalisierung",
        nl: "Alleen negatieve eigenwaarden zijn belangrijk voor generalisatie"
      }
    ],
    correct: 0,
    explanation: {
      en: "The Hessian's spectrum at minima provides insights into loss landscape sharpness; flatter minima with smaller maximum eigenvalues correlate with better generalization, supporting PAC-Bayes bounds.",
      es: "El espectro del Hessiano en mínimos proporciona información sobre la agudeza del paisaje de pérdida; mínimos más planos con eigenvalores máximos menores correlacionan con mejor generalización.",
      de: "Das Spektrum der Hesse-Matrix an Minima gibt Einblicke in die Schärfe der Verlustlandschaft; flachere Minima mit kleineren maximalen Eigenwerten korrelieren mit besserer Generalisierung.",
      nl: "Het spectrum van de Hessian bij minima geeft inzicht in de scherpte van het loss landscape; vlakkere minima met kleinere maximale eigenwaarden correleren met betere generalisatie."
    }
  },
  {
    question: {
      en: "How do diffusion models relate to score matching and Langevin dynamics?",
      es: "¿Cómo se relacionan modelos de difusión con score matching y dinámica de Langevin?",
      de: "Wie hängen Diffusionsmodelle mit Score Matching und Langevin-Dynamik zusammen?",
      nl: "Hoe relateren diffusiemodellen aan score matching en Langevin-dynamica?"
    },
    options: [
      {
        en: "They learn score functions to reverse diffusion via Langevin sampling",
        es: "Aprenden funciones de score para revertir difusión vía muestreo de Langevin",
        de: "Sie lernen Score-Funktionen zur Umkehrung der Diffusion via Langevin-Sampling",
        nl: "Ze leren score-functies om diffusie om te keren via Langevin-sampling"
      },
      {
        en: "Diffusion models don't use score functions at all",
        es: "Modelos de difusión no usan funciones de score en absoluto",
        de: "Diffusionsmodelle verwenden überhaupt keine Score-Funktionen",
        nl: "Diffusiemodellen gebruiken helemaal geen score-functies"
      },
      {
        en: "Langevin dynamics is only used during training, not sampling",
        es: "Dinámica de Langevin solo se usa durante entrenamiento, no muestreo",
        de: "Langevin-Dynamik wird nur beim Training verwendet, nicht beim Sampling",
        nl: "Langevin-dynamica wordt alleen gebruikt tijdens training, niet sampling"
      },
      {
        en: "Score matching and diffusion models are unrelated concepts",
        es: "Score matching y modelos de difusión son conceptos no relacionados",
        de: "Score Matching und Diffusionsmodelle sind unverbundene Konzepte",
        nl: "Score matching en diffusiemodellen zijn ongerelateerde concepten"
      }
    ],
    correct: 0,
    explanation: {
      en: "Diffusion models learn to estimate the score (gradient of log probability) at different noise levels, then use annealed Langevin dynamics to sample by following these learned gradients.",
      es: "Los modelos de difusión aprenden a estimar el score (gradiente de log probabilidad) en diferentes niveles de ruido, luego usan dinámica de Langevin para muestrear siguiendo estos gradientes.",
      de: "Diffusionsmodelle lernen, den Score (Gradient der Log-Wahrscheinlichkeit) bei verschiedenen Rauschleveln zu schätzen und verwenden dann Langevin-Dynamik zum Sampling.",
      nl: "Diffusiemodellen leren de score (gradiënt van log-waarschijnlijkheid) te schatten bij verschillende ruisniveaus, gebruiken dan Langevin-dynamica voor sampling."
    }
  },
  {
    question: {
      en: "What is the significance of the Neural Tangent Kernel in infinite-width networks?",
      es: "¿Cuál es la significancia del Kernel Tangente Neural en redes de ancho infinito?",
      de: "Was ist die Bedeutung des Neural Tangent Kernels in unendlich breiten Netzen?",
      nl: "Wat is de betekenis van de Neural Tangent Kernel in oneindig-brede netwerken?"
    },
    options: [
      {
        en: "Training dynamics become linear in function space with fixed kernel",
        es: "Dinámica de entrenamiento se vuelve lineal en espacio de funciones con kernel fijo",
        de: "Trainingsdynamik wird linear im Funktionsraum mit festem Kernel",
        nl: "Trainingsdynamiek wordt lineair in functieruimte met vaste kernel"
      },
      {
        en: "NTK only applies to convolutional networks",
        es: "NTK solo aplica a redes convolucionales",
        de: "NTK gilt nur für Convolutional Networks",
        nl: "NTK geldt alleen voor convolutionele netwerken"
      },
      {
        en: "Infinite-width networks cannot be trained effectively",
        es: "Redes de ancho infinito no pueden entrenarse efectivamente",
        de: "Unendlich breite Netze können nicht effektiv trainiert werden",
        nl: "Oneindig-brede netwerken kunnen niet effectief getraind worden"
      },
      {
        en: "The kernel changes dramatically during training",
        es: "El kernel cambia dramáticamente durante entrenamiento",
        de: "Der Kernel ändert sich dramatisch während des Trainings",
        nl: "De kernel verandert dramatisch tijdens training"
      }
    ],
    correct: 0,
    explanation: {
      en: "In the infinite-width limit, the Neural Tangent Kernel remains constant during training, making gradient descent equivalent to kernel regression with a fixed kernel determined by architecture.",
      es: "En el límite de ancho infinito, el Kernel Tangente Neural permanece constante durante entrenamiento, haciendo descenso de gradiente equivalente a regresión de kernel con kernel fijo.",
      de: "Im Grenzfall unendlicher Breite bleibt der Neural Tangent Kernel während des Trainings konstant, wodurch Gradientenabstieg äquivalent zur Kernel-Regression wird.",
      nl: "In de oneindig-brede limiet blijft de Neural Tangent Kernel constant tijdens training, makend gradiënt-afdaling equivalent aan kernel-regressie met vaste kernel."
    }
  },
  {
    question: {
      en: "How does implicit regularization in gradient descent affect solution selection?",
      es: "¿Cómo afecta la regularización implícita en descenso de gradiente la selección de solución?",
      de: "Wie beeinflusst implizite Regularisierung im Gradientenabstieg die Lösungsauswahl?",
      nl: "Hoe beïnvloedt impliciete regularisatie in gradiënt-afdaling de selectie van oplossingen?"
    },
    options: [
      {
        en: "Gradient descent implicitly selects minimum norm solutions",
        es: "Descenso de gradiente selecciona implícitamente soluciones de norma mínima",
        de: "Gradientenabstieg wählt implizit Lösungen minimaler Norm",
        nl: "Gradiënt-afdaling selecteert impliciet minimum-norm oplossingen"
      },
      {
        en: "All solutions are equally likely regardless of optimization",
        es: "Todas las soluciones son igualmente probables sin importar optimización",
        de: "Alle Lösungen sind gleich wahrscheinlich unabhängig von Optimierung",
        nl: "Alle oplossingen zijn even waarschijnlijk ongeacht optimalisatie"
      },
      {
        en: "Gradient descent always finds the sharpest minimum",
        es: "Descenso de gradiente siempre encuentra el mínimo más agudo",
        de: "Gradientenabstieg findet immer das schärfste Minimum",
        nl: "Gradiënt-afdaling vindt altijd het scherpste minimum"
      },
      {
        en: "Implicit regularization only occurs with explicit penalties",
        es: "Regularización implícita solo ocurre con penalizaciones explícitas",
        de: "Implizite Regularisierung tritt nur mit expliziten Strafen auf",
        nl: "Impliciete regularisatie gebeurt alleen met expliciete penalties"
      }
    ],
    correct: 0,
    explanation: {
      en: "Gradient descent exhibits implicit regularization by naturally converging to solutions with certain properties (like minimum norm or maximum margin) even without explicit regularization terms.",
      es: "Descenso de gradiente exhibe regularización implícita convergiendo naturalmente a soluciones con ciertas propiedades (como norma mínima o margen máximo) sin términos de regularización explícitos.",
      de: "Gradientenabstieg zeigt implizite Regularisierung durch natürliche Konvergenz zu Lösungen mit bestimmten Eigenschaften ohne explizite Regularisierungsterme.",
      nl: "Gradiënt-afdaling vertoont impliciete regularisatie door natuurlijk te convergeren naar oplossingen met bepaalde eigenschappen zonder expliciete regularisatietermijnen."
    }
  },
  {
    question: {
      en: "What is the double descent curve's implication for model selection?",
      es: "¿Cuál es la implicación de la curva de doble descenso para selección de modelos?",
      de: "Was ist die Implikation der Doppelabstiegskurve für Modellauswahl?",
      nl: "Wat is de implicatie van de dubbele-afdalingscurve voor modelselectie?"
    },
    options: [
      {
        en: "Test error can decrease again after interpolation threshold",
        es: "Error de prueba puede decrecer nuevamente después del umbral de interpolación",
        de: "Testfehler kann nach Interpolationsschwelle wieder sinken",
        nl: "Testfout kan weer afnemen na interpolatiedrempel"
      },
      {
        en: "Larger models always perform worse than smaller ones",
        es: "Modelos más grandes siempre rinden peor que los pequeños",
        de: "Größere Modelle sind immer schlechter als kleinere",
        nl: "Grotere modellen presteren altijd slechter dan kleinere"
      },
      {
        en: "Model complexity and generalization are linearly related",
        es: "Complejidad del modelo y generalización están linealmente relacionadas",
        de: "Modellkomplexität und Generalisierung sind linear verbunden",
        nl: "Modelcomplexiteit en generalisatie zijn lineair gerelateerd"
      },
      {
        en: "Double descent only occurs in toy problems",
        es: "Doble descenso solo ocurre en problemas de juguete",
        de: "Doppelabstieg tritt nur bei Spielzeugproblemen auf",
        nl: "Dubbele afdaling gebeurt alleen bij speelgoedproblemen"
      }
    ],
    correct: 0,
    explanation: {
      en: "Double descent shows that after the interpolation threshold where models fit training data perfectly, test error can decrease again with increased model capacity, challenging classical bias-variance trade-off.",
      es: "Doble descenso muestra que después del umbral de interpolación donde modelos ajustan datos perfectamente, el error de prueba puede decrecer con capacidad aumentada.",
      de: "Doppelabstieg zeigt, dass nach der Interpolationsschwelle, wo Modelle Trainingsdaten perfekt anpassen, der Testfehler mit erhöhter Kapazität wieder sinken kann.",
      nl: "Dubbele afdaling toont dat na de interpolatiedrempel waar modellen trainingsdata perfect fitten, testfout weer kan afnemen met verhoogde capaciteit."
    }
  },
  {
    question: {
      en: "How do vision transformers challenge convolutional inductive biases?",
      es: "¿Cómo desafían los transformers de visión los sesgos inductivos convolucionales?",
      de: "Wie stellen Vision Transformer konvolutionale induktive Verzerrungen in Frage?",
      nl: "Hoe dagen vision transformers convolutionele inductieve biases uit?"
    },
    options: [
      {
        en: "They achieve superior performance without built-in translation equivariance",
        es: "Logran rendimiento superior sin equivarianza de traducción incorporada",
        de: "Sie erreichen überlegene Leistung ohne eingebaute Translationsäquivarianz",
        nl: "Ze bereiken superieure prestaties zonder ingebouwde translatie-equivariantie"
      },
      {
        en: "Vision transformers require convolutional layers to work",
        es: "Transformers de visión requieren capas convolucionales para funcionar",
        de: "Vision Transformer benötigen Convolutional Layers zum Funktionieren",
        nl: "Vision transformers vereisen convolutionele lagen om te werken"
      },
      {
        en: "They perform worse than CNNs on all vision tasks",
        es: "Rinden peor que CNNs en todas las tareas de visión",
        de: "Sie sind schlechter als CNNs bei allen Vision-Aufgaben",
        nl: "Ze presteren slechter dan CNNs op alle vision-taken"
      },
      {
        en: "Inductive biases are always necessary for good performance",
        es: "Sesgos inductivos son siempre necesarios para buen rendimiento",
        de: "Induktive Verzerrungen sind immer notwendig für gute Leistung",
        nl: "Inductieve biases zijn altijd noodzakelijk voor goede prestaties"
      }
    ],
    correct: 0,
    explanation: {
      en: "Vision transformers demonstrate that with sufficient data and compute, models can learn effective representations without strong architectural priors like translation equivariance built into CNNs.",
      es: "Los transformers de visión demuestran que con suficientes datos y cómputo, los modelos pueden aprender representaciones efectivas sin priors arquitectónicos fuertes.",
      de: "Vision Transformer zeigen, dass mit genügend Daten und Rechenleistung Modelle effektive Repräsentationen ohne starke architektonische Priors lernen können.",
      nl: "Vision transformers demonstreren dat met voldoende data en rekenkracht, modellen effectieve representaties kunnen leren zonder sterke architectonische priors."
    }
  },
  {
    question: {
      en: "What makes contrastive predictive coding effective for representation learning?",
      es: "¿Qué hace efectiva la codificación predictiva contrastiva para aprendizaje de representaciones?",
      de: "Was macht Contrastive Predictive Coding effektiv für Representation Learning?",
      nl: "Wat maakt contrastive predictive coding effectief voor representatieleren?"
    },
    options: [
      {
        en: "Maximizes mutual information between different views of data",
        es: "Maximiza información mutua entre diferentes vistas de datos",
        de: "Maximiert gegenseitige Information zwischen verschiedenen Datenansichten",
        nl: "Maximaliseert wederzijdse informatie tussen verschillende views van data"
      },
      {
        en: "Requires labeled data for all training samples",
        es: "Requiere datos etiquetados para todas las muestras de entrenamiento",
        de: "Benötigt gelabelte Daten für alle Trainingsproben",
        nl: "Vereist gelabelde data voor alle trainingssamples"
      },
      {
        en: "Only works with supervised learning objectives",
        es: "Solo funciona con objetivos de aprendizaje supervisado",
        de: "Funktioniert nur mit überwachten Lernzielen",
        nl: "Werkt alleen met supervised learning doelstellingen"
      },
      {
        en: "Cannot learn useful representations without fine-tuning",
        es: "No puede aprender representaciones útiles sin ajuste fino",
        de: "Kann ohne Feinabstimmung keine nützlichen Repräsentationen lernen",
        nl: "Kan geen nuttige representaties leren zonder fine-tuning"
      }
    ],
    correct: 0,
    explanation: {
      en: "CPC learns representations by maximizing mutual information between context and future observations through a contrastive loss, enabling powerful self-supervised pretraining without labels.",
      es: "CPC aprende representaciones maximizando información mutua entre contexto y observaciones futuras a través de pérdida contrastiva, permitiendo preentrenamiento autosupervisado sin etiquetas.",
      de: "CPC lernt Repräsentationen durch Maximierung der gegenseitigen Information zwischen Kontext und zukünftigen Beobachtungen, ermöglicht selbstüberwachtes Vortraining ohne Labels.",
      nl: "CPC leert representaties door wederzijdse informatie tussen context en toekomstige observaties te maximaliseren, mogelijk makend krachtige self-supervised pretraining zonder labels."
    }
  },
  {
    question: {
      en: "How does sharpness-aware minimization (SAM) improve generalization?",
      es: "¿Cómo mejora la generalización la minimización consciente de agudeza (SAM)?",
      de: "Wie verbessert Sharpness-Aware Minimization (SAM) die Generalisierung?",
      nl: "Hoe verbetert sharpness-aware minimization (SAM) generalisatie?"
    },
    options: [
      {
        en: "Seeks parameters that minimize loss in worst-case neighborhood",
        es: "Busca parámetros que minimizan pérdida en vecindario del peor caso",
        de: "Sucht Parameter die Verlust in Worst-Case-Nachbarschaft minimieren",
        nl: "Zoekt parameters die verlies minimaliseren in worst-case buurt"
      },
      {
        en: "Always converges faster than standard SGD",
        es: "Siempre converge más rápido que SGD estándar",
        de: "Konvergiert immer schneller als Standard-SGD",
        nl: "Convergeert altijd sneller dan standaard SGD"
      },
      {
        en: "Requires second-order derivatives to work",
        es: "Requiere derivadas de segundo orden para funcionar",
        de: "Benötigt Ableitungen zweiter Ordnung zum Funktionieren",
        nl: "Vereist tweede-orde afgeleiden om te werken"
      },
      {
        en: "Only effective for convex optimization problems",
        es: "Solo efectivo para problemas de optimización convexa",
        de: "Nur effektiv für konvexe Optimierungsprobleme",
        nl: "Alleen effectief voor convexe optimalisatieproblemen"
      }
    ],
    correct: 0,
    explanation: {
      en: "SAM simultaneously minimizes loss value and loss sharpness by seeking parameters whose entire neighborhoods have uniformly low loss, leading to flatter minima that generalize better.",
      es: "SAM minimiza simultáneamente valor de pérdida y agudeza de pérdida buscando parámetros cuyos vecindarios completos tienen pérdida uniformemente baja.",
      de: "SAM minimiert gleichzeitig Verlustwert und Verlustschärfe durch Suche nach Parametern deren gesamte Nachbarschaften einheitlich niedrigen Verlust haben.",
      nl: "SAM minimaliseert gelijktijdig verlieswaarde en verliesscherpte door parameters te zoeken waarvan hele buurten uniform laag verlies hebben."
    }
  },
  {
    question: {
      en: "What is the theoretical foundation of gradient flow in Graph Neural Networks?",
      es: "¿Cuál es la base teórica del flujo de gradiente en Redes Neuronales de Grafos?",
      de: "Was ist die theoretische Grundlage des Gradientenflusses in Graph Neural Networks?",
      nl: "Wat is de theoretische basis van gradiënt-flow in Graph Neural Networks?"
    },
    options: [
      {
        en: "Spectral graph theory connects gradient flow to graph Laplacian",
        es: "Teoría espectral de grafos conecta flujo de gradiente con Laplaciano del grafo",
        de: "Spektrale Graphentheorie verbindet Gradientenfluss mit Graph-Laplace-Operator",
        nl: "Spectrale grafentheorie verbindt gradiënt-flow met graph Laplaciaan"
      },
      {
        en: "Gradient flow is independent of graph structure",
        es: "Flujo de gradiente es independiente de estructura del grafo",
        de: "Gradientenfluss ist unabhängig von Graphstruktur",
        nl: "Gradiënt-flow is onafhankelijk van grafstructuur"
      },
      {
        en: "GNNs don't use gradient-based optimization",
        es: "GNNs no usan optimización basada en gradientes",
        de: "GNNs verwenden keine gradientenbasierte Optimierung",
        nl: "GNNs gebruiken geen gradiënt-gebaseerde optimalisatie"
      },
      {
        en: "Only works for directed acyclic graphs",
        es: "Solo funciona para grafos acíclicos dirigidos",
        de: "Funktioniert nur für gerichtete azyklische Graphen",
        nl: "Werkt alleen voor gerichte acyclische grafen"
      }
    ],
    correct: 0,
    explanation: {
      en: "GNN gradient flow is deeply connected to spectral graph theory where the graph Laplacian eigenvalues determine convergence rates and the eigenvectors define the learned representations.",
      es: "El flujo de gradiente en GNN está conectado con teoría espectral de grafos donde eigenvalores del Laplaciano determinan tasas de convergencia.",
      de: "GNN-Gradientenfluss ist eng mit spektraler Graphentheorie verbunden, wo Laplace-Eigenwerte Konvergenzraten bestimmen.",
      nl: "GNN gradiënt-flow is diep verbonden met spectrale grafentheorie waar graph Laplaciaan eigenwaarden convergentiesnelheden bepalen."
    }
  },
  {
    question: {
      en: "How does the information bottleneck principle apply to deep learning?",
      es: "¿Cómo se aplica el principio del cuello de botella de información al aprendizaje profundo?",
      de: "Wie gilt das Information Bottleneck Prinzip für Deep Learning?",
      nl: "Hoe is het information bottleneck principe van toepassing op deep learning?"
    },
    options: [
      {
        en: "Networks compress input while preserving task-relevant information",
        es: "Redes comprimen entrada preservando información relevante para la tarea",
        de: "Netze komprimieren Eingabe während aufgabenrelevante Information erhalten bleibt",
        nl: "Netwerken comprimeren input terwijl taak-relevante informatie behouden blijft"
      },
      {
        en: "All information must be preserved through every layer",
        es: "Toda información debe preservarse a través de cada capa",
        de: "Alle Information muss durch jede Schicht erhalten bleiben",
        nl: "Alle informatie moet behouden blijven door elke laag"
      },
      {
        en: "Information bottleneck only applies to autoencoders",
        es: "Cuello de botella de información solo aplica a autoencoders",
        de: "Information Bottleneck gilt nur für Autoencoder",
        nl: "Information bottleneck geldt alleen voor autoencoders"
      },
      {
        en: "Compression always hurts model performance",
        es: "Compresión siempre daña el rendimiento del modelo",
        de: "Kompression schadet immer der Modellleistung",
        nl: "Compressie schaadt altijd modelprestaties"
      }
    ],
    correct: 0,
    explanation: {
      en: "The information bottleneck principle suggests deep networks learn by first fitting data then compressing representations, keeping only information relevant for the task while discarding noise.",
      es: "El principio del cuello de botella sugiere que redes profundas aprenden primero ajustando datos luego comprimiendo representaciones, manteniendo solo información relevante.",
      de: "Das Information Bottleneck Prinzip besagt, dass tiefe Netze durch Datenfitting und anschließende Kompression lernen, wobei nur aufgabenrelevante Information behalten wird.",
      nl: "Het information bottleneck principe suggereert dat diepe netwerken leren door eerst data te fitten dan representaties te comprimeren, alleen taak-relevante informatie behoudend."
    }
  },
  {
    question: {
      en: "What role does overparameterization play in optimization landscape?",
      es: "¿Qué papel juega la sobreparametrización en el paisaje de optimización?",
      de: "Welche Rolle spielt Überparametrisierung in der Optimierungslandschaft?",
      nl: "Welke rol speelt overparametrisatie in het optimalisatielandschap?"
    },
    options: [
      {
        en: "Creates more connected solution manifolds with better conditioning",
        es: "Crea variedades de solución más conectadas con mejor condicionamiento",
        de: "Erzeugt besser verbundene Lösungsmannigfaltigkeiten mit besserer Konditionierung",
        nl: "Creëert meer verbonden oplossingsmanifolds met betere conditionering"
      },
      {
        en: "Always makes optimization harder due to more parameters",
        es: "Siempre hace optimización más difícil debido a más parámetros",
        de: "Macht Optimierung immer schwieriger wegen mehr Parametern",
        nl: "Maakt optimalisatie altijd moeilijker door meer parameters"
      },
      {
        en: "Has no effect on the loss landscape geometry",
        es: "No tiene efecto en la geometría del paisaje de pérdida",
        de: "Hat keinen Effekt auf die Verlustlandschaftsgeometrie",
        nl: "Heeft geen effect op de loss landscape geometrie"
      },
      {
        en: "Only helps with convex optimization problems",
        es: "Solo ayuda con problemas de optimización convexa",
        de: "Hilft nur bei konvexen Optimierungsproblemen",
        nl: "Helpt alleen bij convexe optimalisatieproblemen"
      }
    ],
    correct: 0,
    explanation: {
      en: "Overparameterization improves optimization by creating wider minima basins, more connected solution paths, and better-conditioned Hessians, paradoxically making optimization easier despite more parameters.",
      es: "La sobreparametrización mejora la optimización creando cuencas de mínimos más amplias, rutas de solución más conectadas y Hessianos mejor condicionados.",
      de: "Überparametrisierung verbessert Optimierung durch breitere Minima-Becken, besser verbundene Lösungspfade und besser konditionierte Hesse-Matrizen.",
      nl: "Overparametrisatie verbetert optimalisatie door bredere minima-bekkens, meer verbonden oplossingspaden en beter-geconditioneerde Hessianen te creëren."
    }
  },
  {
    question: {
      en: "How does neural architecture search relate to hyperparameter optimization?",
      es: "¿Cómo se relaciona la búsqueda de arquitectura neural con optimización de hiperparámetros?",
      de: "Wie hängt Neural Architecture Search mit Hyperparameter-Optimierung zusammen?",
      nl: "Hoe relateert neural architecture search aan hyperparameter-optimalisatie?"
    },
    options: [
      {
        en: "NAS is a special case of hyperparameter optimization over discrete spaces",
        es: "NAS es un caso especial de optimización de hiperparámetros sobre espacios discretos",
        de: "NAS ist ein Spezialfall der Hyperparameter-Optimierung über diskrete Räume",
        nl: "NAS is een speciaal geval van hyperparameter-optimalisatie over discrete ruimtes"
      },
      {
        en: "They are completely unrelated optimization problems",
        es: "Son problemas de optimización completamente no relacionados",
        de: "Sie sind völlig unverbundene Optimierungsprobleme",
        nl: "Het zijn volledig ongerelateerde optimalisatieproblemen"
      },
      {
        en: "NAS doesn't involve any optimization",
        es: "NAS no involucra ninguna optimización",
        de: "NAS beinhaltet keine Optimierung",
        nl: "NAS behelst geen optimalisatie"
      },
      {
        en: "Hyperparameter optimization is always more complex than NAS",
        es: "Optimización de hiperparámetros es siempre más compleja que NAS",
        de: "Hyperparameter-Optimierung ist immer komplexer als NAS",
        nl: "Hyperparameter-optimalisatie is altijd complexer dan NAS"
      }
    ],
    correct: 0,
    explanation: {
      en: "NAS can be viewed as hyperparameter optimization where the hyperparameters define the network architecture, often using techniques like differentiable architecture search or evolutionary algorithms.",
      es: "NAS puede verse como optimización de hiperparámetros donde los hiperparámetros definen la arquitectura de red, usando técnicas como búsqueda diferenciable.",
      de: "NAS kann als Hyperparameter-Optimierung betrachtet werden, wo Hyperparameter die Netzarchitektur definieren, oft mit differenzierbarer Architektursuche.",
      nl: "NAS kan gezien worden als hyperparameter-optimalisatie waar hyperparameters de netwerkarchitectuur definiëren, vaak gebruikmakend van differentieerbare architectuurzoektechnieken."
    }
  },
  {
    question: {
      en: "What is the role of Lipschitz continuity in neural network optimization?",
      es: "¿Cuál es el papel de la continuidad de Lipschitz en optimización de redes neuronales?",
      de: "Was ist die Rolle der Lipschitz-Stetigkeit bei der Optimierung neuronaler Netze?",
      nl: "Wat is de rol van Lipschitz-continuïteit in neurale netwerkoptimalisatie?"
    },
    options: [
      {
        en: "Ensures stable gradients and convergence guarantees for optimization",
        es: "Asegura gradientes estables y garantías de convergencia para optimización",
        de: "Gewährleistet stabile Gradienten und Konvergenzgarantien für Optimierung",
        nl: "Verzekert stabiele gradiënten en convergentiegaranties voor optimalisatie"
      },
      {
        en: "Only relevant for linear models, not neural networks",
        es: "Solo relevante para modelos lineales, no redes neuronales",
        de: "Nur relevant für lineare Modelle, nicht neuronale Netze",
        nl: "Alleen relevant voor lineaire modellen, niet neurale netwerken"
      },
      {
        en: "Lipschitz constraints always hurt model expressiveness",
        es: "Restricciones de Lipschitz siempre dañan expresividad del modelo",
        de: "Lipschitz-Beschränkungen schaden immer der Modellausdruckskraft",
        nl: "Lipschitz-beperkingen schaden altijd model-expressiviteit"
      },
      {
        en: "Has no impact on training stability",
        es: "No tiene impacto en estabilidad del entrenamiento",
        de: "Hat keinen Einfluss auf Trainingsstabilität",
        nl: "Heeft geen impact op trainingsstabiliteit"
      }
    ],
    correct: 0,
    explanation: {
      en: "Lipschitz continuity bounds gradient magnitudes preventing exploding gradients, enables convergence proofs, and techniques like spectral normalization enforce it for training stability.",
      es: "La continuidad de Lipschitz limita magnitudes de gradientes previniendo gradientes explosivos, permite pruebas de convergencia y técnicas como normalización espectral.",
      de: "Lipschitz-Stetigkeit begrenzt Gradientengrößen, verhindert explodierende Gradienten, ermöglicht Konvergenzbeweise und Techniken wie Spektralnormalisierung.",
      nl: "Lipschitz-continuïteit begrenst gradiëntmagnitudes voorkomend exploderende gradiënten, maakt convergentiebewijzen mogelijk en technieken zoals spectrale normalisatie."
    }
  },
  {
    question: {
      en: "How does meta-learning relate to few-shot learning theoretically?",
      es: "¿Cómo se relaciona el meta-aprendizaje con aprendizaje de pocos ejemplos teóricamente?",
      de: "Wie hängt Meta-Learning theoretisch mit Few-Shot Learning zusammen?",
      nl: "Hoe relateert meta-learning theoretisch aan few-shot learning?"
    },
    options: [
      {
        en: "Meta-learning optimizes for rapid adaptation to new tasks with minimal data",
        es: "Meta-aprendizaje optimiza para adaptación rápida a nuevas tareas con datos mínimos",
        de: "Meta-Learning optimiert für schnelle Anpassung an neue Aufgaben mit minimalen Daten",
        nl: "Meta-learning optimaliseert voor snelle adaptatie aan nieuwe taken met minimale data"
      },
      {
        en: "They are unrelated concepts in machine learning",
        es: "Son conceptos no relacionados en aprendizaje automático",
        de: "Sie sind unverbundene Konzepte im maschinellen Lernen",
        nl: "Het zijn ongerelateerde concepten in machine learning"
      },
      {
        en: "Few-shot learning doesn't benefit from meta-learning",
        es: "Aprendizaje de pocos ejemplos no se beneficia del meta-aprendizaje",
        de: "Few-Shot Learning profitiert nicht von Meta-Learning",
        nl: "Few-shot learning profiteert niet van meta-learning"
      },
      {
        en: "Meta-learning only works with large datasets",
        es: "Meta-aprendizaje solo funciona con conjuntos de datos grandes",
        de: "Meta-Learning funktioniert nur mit großen Datensätzen",
        nl: "Meta-learning werkt alleen met grote datasets"
      }
    ],
    correct: 0,
    explanation: {
      en: "Meta-learning provides theoretical framework for few-shot learning by learning priors over task distributions, enabling models to quickly adapt to new tasks using only a few examples.",
      es: "Meta-aprendizaje proporciona marco teórico para aprendizaje de pocos ejemplos aprendiendo priors sobre distribuciones de tareas, permitiendo adaptación rápida.",
      de: "Meta-Learning bietet theoretischen Rahmen für Few-Shot Learning durch Lernen von Priors über Aufgabenverteilungen, ermöglicht schnelle Anpassung.",
      nl: "Meta-learning biedt theoretisch kader voor few-shot learning door priors over taakdistributies te leren, mogelijk makend snelle adaptatie."
    }
  }
  ]
};