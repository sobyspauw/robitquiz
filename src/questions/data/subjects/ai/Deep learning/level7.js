// Deep Learning Quiz - Level 7: Advanced Optimization and Modern Techniques
(function() {
  const level7 = {
    name: {
      en: "Deep Learning Level 7",
      es: "Aprendizaje Profundo Nivel 7",
      de: "Deep Learning Stufe 7",
      nl: "Deep Learning Level 7"
    },
    questions: [
      {
        question: {
          en: "What is the Adam optimizer and how does it improve upon SGD?",
          es: "¿Qué es el optimizador Adam y cómo mejora sobre SGD?",
          de: "Was ist der Adam-Optimizer und wie verbessert er SGD?",
          nl: "Wat is de Adam optimizer en hoe verbetert het SGD?"
        },
        options: [
          { en: "Combines momentum with adaptive learning rates for each parameter individually", es: "Combina momentum con tasas de aprendizaje adaptativas para cada parámetro individualmente", de: "Kombiniert Momentum mit adaptiven Lernraten für jeden Parameter individuell", nl: "Combineert momentum met adaptieve learning rates voor elke parameter individueel" },
          { en: "Uses only momentum without adaptive rates", es: "Usa solo momentum sin tasas adaptativas", de: "Verwendet nur Momentum ohne adaptive Raten", nl: "Gebruikt alleen momentum zonder adaptieve rates" },
          { en: "Reduces the learning rate linearly over time", es: "Reduce la tasa de aprendizaje linealmente con el tiempo", de: "Reduziert die Lernrate linear über die Zeit", nl: "Vermindert de learning rate lineair over tijd" },
          { en: "Optimizes only the first layer parameters", es: "Optimiza solo los parámetros de la primera capa", de: "Optimiert nur die Parameter der ersten Schicht", nl: "Optimaliseert alleen de eerste laag parameters" }
        ],
        correct: 0,
        explanation: {
          en: "Adam adaptively adjusts learning rates for each parameter using moving averages of gradients and their squared values, often converging faster than SGD.",
          es: "Adam ajusta adaptativamente tasas de aprendizaje para cada parámetro usando promedios móviles de gradientes y sus valores al cuadrado, a menudo convergiendo más rápido que SGD.",
          de: "Adam passt Lernraten für jeden Parameter adaptiv an unter Verwendung gleitender Durchschnitte von Gradienten und ihren quadrierten Werten, konvergiert oft schneller als SGD.",
          nl: "Adam past learning rates voor elke parameter adaptief aan met behulp van voortschrijdende gemiddelden van gradiënten en hun gekwadrateerde waarden, convergeert vaak sneller dan SGD."
        }
      },
      {
        question: {
          en: "What is knowledge distillation in deep learning?",
          es: "¿Qué es la destilación de conocimiento en aprendizaje profundo?",
          de: "Was ist Knowledge Distillation in Deep Learning?",
          nl: "Wat is knowledge distillation in deep learning?"
        },
        options: [
          { en: "Training a smaller student model to mimic the behavior of a larger teacher model", es: "Entrenar un modelo estudiante más pequeño para imitar el comportamiento de un modelo maestro más grande", de: "Ein kleineres Schülermodell trainieren um das Verhalten eines größeren Lehrermodells nachzuahmen", nl: "Een kleiner studentmodel trainen om het gedrag van een groter leraarmodel na te bootsen" },
          { en: "Extracting knowledge from training data", es: "Extraer conocimiento de datos de entrenamiento", de: "Wissen aus Trainingsdaten extrahieren", nl: "Kennis extraheren uit trainingsdata" },
          { en: "Distilling model parameters to essential components", es: "Destilar parámetros de modelo a componentes esenciales", de: "Modellparameter zu wesentlichen Komponenten destillieren", nl: "Modelparameters distilleren tot essentiële componenten" },
          { en: "Converting deep models to shallow ones", es: "Convertir modelos profundos a superficiales", de: "Tiefe Modelle in oberflächliche umwandeln", nl: "Diepe modellen converteren naar ondiepe" }
        ],
        correct: 0,
        explanation: {
          en: "Knowledge distillation transfers knowledge from a complex teacher model to a simpler student model, enabling deployment of efficient models with retained performance.",
          es: "La destilación de conocimiento transfiere conocimiento de un modelo maestro complejo a un modelo estudiante más simple, permitiendo despliegue de modelos eficientes con rendimiento retenido.",
          de: "Knowledge Distillation überträgt Wissen von einem komplexen Lehrermodell auf ein einfacheres Schülermodell, ermöglicht Deployment effizienter Modelle mit behaltener Leistung.",
          nl: "Knowledge distillation draagt kennis over van een complex leraarmodel naar een simpeler studentmodel, maakt deployment van efficiënte modellen met behouden prestaties mogelijk."
        }
      },
      {
        question: {
          en: "What is the purpose of curriculum learning in deep learning?",
          es: "¿Cuál es el propósito del aprendizaje curricular en aprendizaje profundo?",
          de: "Was ist der Zweck von Curriculum Learning in Deep Learning?",
          nl: "Wat is het doel van curriculum learning in deep learning?"
        },
        options: [
          { en: "Training models by gradually increasing task difficulty from easy to hard examples", es: "Entrenar modelos aumentando gradualmente la dificultad de tareas de ejemplos fáciles a difíciles", de: "Modelle trainieren durch graduell steigende Aufgabenschwierigkeit von einfachen zu schweren Beispielen", nl: "Modellen trainen door geleidelijk de taakmoeilijkheid te verhogen van makkelijke naar moeilijke voorbeelden" },
          { en: "Creating educational curricula for AI courses", es: "Crear currículos educativos para cursos de IA", de: "Bildungscurricula für KI-Kurse erstellen", nl: "Onderwijscurricula maken voor AI cursussen" },
          { en: "Learning multiple subjects simultaneously", es: "Aprender múltiples materias simultáneamente", de: "Mehrere Fächer gleichzeitig lernen", nl: "Meerdere onderwerpen tegelijkertijd leren" },
          { en: "Standardizing learning procedures across models", es: "Estandarizar procedimientos de aprendizaje entre modelos", de: "Lernverfahren zwischen Modellen standardisieren", nl: "Leerprocedures standaardiseren tussen modellen" }
        ],
        correct: 0,
        explanation: {
          en: "Curriculum learning improves training efficiency and final performance by presenting training examples in a meaningful order, similar to how humans learn better with structured progression.",
          es: "El aprendizaje curricular mejora la eficiencia de entrenamiento y rendimiento final presentando ejemplos de entrenamiento en orden significativo, similar a cómo humanos aprenden mejor con progresión estructurada.",
          de: "Curriculum Learning verbessert Trainingseffizienz und finale Leistung durch Präsentation von Trainingsbeispielen in sinnvoller Reihenfolge, ähnlich wie Menschen besser mit strukturierter Progression lernen.",
          nl: "Curriculum learning verbetert trainingsefficiëntie en finale prestaties door trainingsvoorbeelden in een betekenisvolle volgorde te presenteren, vergelijkbaar met hoe mensen beter leren met gestructureerde progressie."
        }
      },
      {
        question: {
          en: "What is meta-learning (learning to learn) in deep learning?",
          es: "¿Qué es el meta-aprendizaje (aprender a aprender) en aprendizaje profundo?",
          de: "Was ist Meta-Learning (Lernen zu lernen) in Deep Learning?",
          nl: "Wat is meta-learning (leren om te leren) in deep learning?"
        },
        options: [
          { en: "Training models to quickly adapt to new tasks with minimal data", es: "Entrenar modelos para adaptarse rápidamente a nuevas tareas con datos mínimos", de: "Modelle trainieren um sich schnell an neue Aufgaben mit minimalen Daten anzupassen", nl: "Modellen trainen om snel aan te passen aan nieuwe taken met minimale data" },
          { en: "Learning about the metadata of training datasets", es: "Aprender sobre los metadatos de conjuntos de datos de entrenamiento", de: "Über Metadaten von Trainingsdatensätzen lernen", nl: "Leren over de metadata van trainingsdatasets" },
          { en: "Training models to learn faster algorithms", es: "Entrenar modelos para aprender algoritmos más rápidos", de: "Modelle trainieren um schnellere Algorithmen zu lernen", nl: "Modellen trainen om snellere algoritmes te leren" },
          { en: "Learning to optimize hyperparameters automatically", es: "Aprender a optimizar hiperparámetros automáticamente", de: "Lernen Hyperparameter automatisch zu optimieren", nl: "Leren om hyperparameters automatisch te optimaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "Meta-learning develops models that can rapidly learn new tasks by leveraging experience from previous tasks, crucial for few-shot learning and fast adaptation scenarios.",
          es: "El meta-aprendizaje desarrolla modelos que pueden aprender rápidamente nuevas tareas aprovechando experiencia de tareas previas, crucial para aprendizaje de pocos ejemplos y escenarios de adaptación rápida.",
          de: "Meta-Learning entwickelt Modelle die schnell neue Aufgaben lernen können durch Nutzung von Erfahrungen aus vorherigen Aufgaben, entscheidend für Few-Shot Learning und schnelle Anpassungsszenarien.",
          nl: "Meta-learning ontwikkelt modellen die snel nieuwe taken kunnen leren door ervaring uit voorgaande taken te benutten, cruciaal voor few-shot learning en snelle aanpassingsscenario's."
        }
      },
      {
        question: {
          en: "What is neural architecture search (NAS) and how does it work?",
          es: "¿Qué es la búsqueda de arquitectura neuronal (NAS) y cómo funciona?",
          de: "Was ist Neural Architecture Search (NAS) und wie funktioniert es?",
          nl: "Wat is neural architecture search (NAS) en hoe werkt het?"
        },
        options: [
          { en: "Automatically discovering optimal neural network architectures using search algorithms", es: "Descubrir automáticamente arquitecturas de redes neuronales óptimas usando algoritmos de búsqueda", de: "Automatische Entdeckung optimaler neuronaler Netzwerkarchitekturen mit Suchalgorithmen", nl: "Automatisch ontdekken van optimale neurale netwerkarchitecturen met behulp van zoekalgoritmes" },
          { en: "Searching for neural networks on the internet", es: "Buscar redes neuronales en internet", de: "Nach neuronalen Netzwerken im Internet suchen", nl: "Zoeken naar neurale netwerken op internet" },
          { en: "Finding the best hyperparameters for existing architectures", es: "Encontrar los mejores hiperparámetros para arquitecturas existentes", de: "Die besten Hyperparameter für bestehende Architekturen finden", nl: "De beste hyperparameters vinden voor bestaande architecturen" },
          { en: "Searching through research papers for new architectures", es: "Buscar a través de artículos de investigación nuevas arquitecturas", de: "Durch Forschungsarbeiten nach neuen Architekturen suchen", nl: "Door onderzoekspapers zoeken naar nieuwe architecturen" }
        ],
        correct: 0,
        explanation: {
          en: "NAS uses reinforcement learning, evolutionary algorithms, or gradient-based methods to automatically design neural architectures, often finding novel designs that outperform human-designed ones.",
          es: "NAS usa aprendizaje por refuerzo, algoritmos evolutivos o métodos basados en gradientes para diseñar automáticamente arquitecturas neuronales, a menudo encontrando diseños novedosos que superan los diseñados por humanos.",
          de: "NAS verwendet Reinforcement Learning, evolutionäre Algorithmen oder gradientenbasierte Methoden um automatisch neuronale Architekturen zu entwerfen, findet oft neuartige Designs die menschengemachte übertreffen.",
          nl: "NAS gebruikt reinforcement learning, evolutionaire algoritmes of gradiënt-gebaseerde methoden om automatisch neurale architecturen te ontwerpen, vindt vaak nieuwe ontwerpen die door mensen ontworpen architecturen overtreffen."
        }
      },
      {
        question: {
          en: "What is a Generative Adversarial Network (GAN) and how does it work?",
          es: "¿Qué es una Red Generativa Adversarial (GAN) y cómo funciona?",
          de: "Was ist ein Generative Adversarial Network (GAN) und wie funktioniert es?",
          nl: "Wat is een Generative Adversarial Network (GAN) en hoe werkt het?"
        },
        options: [
          { en: "Two neural networks competing against each other: a generator creates fake data and a discriminator tries to detect it", es: "Dos redes neuronales compitiendo entre sí: un generador crea datos falsos y un discriminador trata de detectarlos", de: "Zwei neuronale Netzwerke die gegeneinander konkurrieren: ein Generator erstellt falsche Daten und ein Discriminator versucht sie zu erkennen", nl: "Twee neurale netwerken die tegen elkaar concurreren: een generator maakt nepdata en een discriminator probeert het te detecteren" },
          { en: "A network that generates adversarial examples to fool other models", es: "Una red que genera ejemplos adversarios para engañar otros modelos", de: "Ein Netzwerk das adversariale Beispiele generiert um andere Modelle zu täuschen", nl: "Een netwerk dat adversariale voorbeelden genereert om andere modellen te misleiden" },
          { en: "A defensive network against adversarial attacks", es: "Una red defensiva contra ataques adversarios", de: "Ein defensives Netzwerk gegen adversariale Angriffe", nl: "Een defensief netwerk tegen adversariale aanvallen" },
          { en: "A network that combines multiple generators for better results", es: "Una red que combina múltiples generadores para mejores resultados", de: "Ein Netzwerk das mehrere Generatoren für bessere Ergebnisse kombiniert", nl: "Een netwerk dat meerdere generators combineert voor betere resultaten" }
        ],
        correct: 0,
        explanation: {
          en: "GANs use a minimax game between generator and discriminator networks, where the generator learns to create realistic data while the discriminator learns to distinguish real from fake data.",
          es: "Las GAN usan un juego minimax entre redes generador y discriminador, donde el generador aprende a crear datos realistas mientras el discriminador aprende a distinguir datos reales de falsos.",
          de: "GANs verwenden ein Minimax-Spiel zwischen Generator- und Discriminator-Netzwerken, wo der Generator lernt realistische Daten zu erstellen während der Discriminator lernt echte von falschen Daten zu unterscheiden.",
          nl: "GANs gebruiken een minimax spel tussen generator en discriminator netwerken, waarbij de generator leert realistische data te maken terwijl de discriminator leert echte van nepdata te onderscheiden."
        }
      },
      {
        question: {
          en: "What is a Variational Autoencoder (VAE) and how does it differ from a standard autoencoder?",
          es: "¿Qué es un Autoencoder Variacional (VAE) y cómo difiere de un autoencoder estándar?",
          de: "Was ist ein Variational Autoencoder (VAE) und wie unterscheidet er sich von einem Standard-Autoencoder?",
          nl: "Wat is een Variational Autoencoder (VAE) en hoe verschilt het van een standaard autoencoder?"
        },
        options: [
          { en: "VAEs learn a probabilistic latent space with regularization, enabling controlled generation and interpolation", es: "VAEs aprenden un espacio latente probabilístico con regularización, permitiendo generación controlada e interpolación", de: "VAEs lernen einen probabilistischen latenten Raum mit Regularisierung, ermöglichen kontrollierte Generierung und Interpolation", nl: "VAEs leren een probabilistische latente ruimte met regularisatie, maken gecontroleerde generatie en interpolatie mogelijk" },
          { en: "VAEs use variable-sized encoding layers", es: "VAEs usan capas de codificación de tamaño variable", de: "VAEs verwenden variabel dimensionierte Kodierungsschichten", nl: "VAEs gebruiken variabel-grote encodeerlagen" },
          { en: "VAEs vary the autoencoder architecture during training", es: "VAEs varían la arquitectura del autoencoder durante entrenamiento", de: "VAEs variieren die Autoencoder-Architektur während des Trainings", nl: "VAEs variëren de autoencoder architectuur tijdens training" },
          { en: "VAEs use multiple autoencoders with different variations", es: "VAEs usan múltiples autoencoders con diferentes variaciones", de: "VAEs verwenden mehrere Autoencoder mit verschiedenen Variationen", nl: "VAEs gebruiken meerdere autoencoders met verschillende variaties" }
        ],
        correct: 0,
        explanation: {
          en: "VAEs incorporate a KL divergence term in their loss function to ensure the latent space follows a known distribution, making them proper generative models unlike standard autoencoders.",
          es: "VAEs incorporan un término de divergencia KL en su función de pérdida para asegurar que el espacio latente siga una distribución conocida, haciéndolos modelos generativos apropiados a diferencia de autoencoders estándar.",
          de: "VAEs integrieren einen KL-Divergenz-Term in ihre Verlustfunktion um sicherzustellen dass der latente Raum einer bekannten Verteilung folgt, macht sie zu echten generativen Modellen im Gegensatz zu Standard-Autoencodern.",
          nl: "VAEs incorporeren een KL divergentie term in hun verliesfunctie om ervoor te zorgen dat de latente ruimte een bekende distributie volgt, waardoor ze echte generatieve modellen worden in tegenstelling tot standaard autoencoders."
        }
      },
      {
        question: {
          en: "What is the purpose of the discriminator loss in GANs and how is it calculated?",
          es: "¿Cuál es el propósito de la pérdida del discriminador en GANs y cómo se calcula?",
          de: "Was ist der Zweck des Discriminator-Verlusts in GANs und wie wird er berechnet?",
          nl: "Wat is het doel van het discriminator verlies in GANs en hoe wordt het berekend?"
        },
        options: [
          { en: "To maximize the probability of correctly classifying real vs fake data using binary cross-entropy loss", es: "Maximizar la probabilidad de clasificar correctamente datos reales vs falsos usando pérdida de entropía cruzada binaria", de: "Die Wahrscheinlichkeit maximieren echte vs falsche Daten korrekt zu klassifizieren mit binärer Kreuzentropie-Verlust", nl: "De waarschijnlijkheid maximaliseren van correct classificeren van echte vs nepdata met behulp van binaire cross-entropy verlies" },
          { en: "To minimize the difference between generated and real data distributions", es: "Minimizar la diferencia entre distribuciones de datos generados y reales", de: "Den Unterschied zwischen generierten und echten Datenverteilungen minimieren", nl: "Het verschil tussen gegenereerde en echte dataverdelingen minimaliseren" },
          { en: "To discriminate between different types of generators", es: "Discriminar entre diferentes tipos de generadores", de: "Zwischen verschiedenen Arten von Generatoren unterscheiden", nl: "Onderscheid maken tussen verschillende types generators" },
          { en: "To prevent the discriminator from overfitting to the training data", es: "Prevenir que el discriminador sobreajuste a los datos de entrenamiento", de: "Verhindern dass der Discriminator zu den Trainingsdaten overfittet", nl: "Voorkomen dat de discriminator overfitting heeft naar de trainingsdata" }
        ],
        correct: 0,
        explanation: {
          en: "The discriminator loss encourages the discriminator to distinguish real from fake samples, typically using -log(D(x)) - log(1-D(G(z))) where D is discriminator and G is generator.",
          es: "La pérdida del discriminador alienta al discriminador a distinguir muestras reales de falsas, típicamente usando -log(D(x)) - log(1-D(G(z))) donde D es discriminador y G es generador.",
          de: "Der Discriminator-Verlust ermutigt den Discriminator echte von falschen Proben zu unterscheiden, typisch mit -log(D(x)) - log(1-D(G(z))) wo D der Discriminator und G der Generator ist.",
          nl: "Het discriminator verlies moedigt de discriminator aan om echte van nep samples te onderscheiden, typisch met -log(D(x)) - log(1-D(G(z))) waarbij D discriminator is en G generator."
        }
      },
      {
        question: {
          en: "What is mode collapse in GANs and what techniques help prevent it?",
          es: "¿Qué es el colapso de modo en GANs y qué técnicas ayudan a prevenirlo?",
          de: "Was ist Mode Collapse in GANs und welche Techniken helfen es zu verhindern?",
          nl: "Wat is mode collapse in GANs en welke technieken helpen het te voorkomen?"
        },
        options: [
          { en: "Generator produces limited diversity by focusing on few modes of data distribution, prevented by unrolled GANs or WGAN", es: "Cuando generador produce diversidad limitada enfocándose en pocos modos, prevenido por unrolled GANs o WGAN", de: "Wenn Generator begrenzte Diversität produziert durch Fokus auf wenige Modi, verhindert durch unrolled GANs oder WGAN", nl: "Wanneer generator beperkte diversiteit produceert door zich te richten op weinig modi, voorkomen door unrolled GANs of WGAN" },
          { en: "When the discriminator network collapses during training", es: "Cuando la red discriminadora colapsa durante entrenamiento", de: "Wenn das Discriminator-Netzwerk während des Trainings kollabiert", nl: "Wanneer het discriminator netwerk instort tijdens training" },
          { en: "When multiple generators collapse into a single model", es: "Cuando múltiples generadores colapsan en un solo modelo", de: "Wenn mehrere Generatoren zu einem einzigen Modell kollabieren", nl: "Wanneer meerdere generators instorten tot één model" },
          { en: "When the training loss suddenly drops to zero", es: "Cuando la pérdida de entrenamiento cae súbitamente a cero", de: "Wenn der Trainingsverlust plötzlich auf null fällt", nl: "Wanneer het trainingsverlies plotseling naar nul daalt" }
        ],
        correct: 0,
        explanation: {
          en: "Mode collapse occurs when the generator learns to produce only a few types of outputs that consistently fool the discriminator, losing diversity in generated samples.",
          es: "El colapso de modo ocurre cuando el generador aprende a producir solo unos pocos tipos de salidas que consistentemente engañan al discriminador, perdiendo diversidad en muestras generadas.",
          de: "Mode Collapse tritt auf wenn der Generator lernt nur wenige Arten von Ausgaben zu produzieren die konsistent den Discriminator täuschen, verliert Diversität in generierten Proben.",
          nl: "Mode collapse treedt op wanneer de generator leert om slechts een paar types outputs te produceren die consistent de discriminator misleiden, verliest diversiteit in gegenereerde samples."
        }
      },
      {
        question: {
          en: "What is a denoising autoencoder and why is it more robust than standard autoencoders?",
          es: "¿Qué es un autoencoder de reducción de ruido y por qué es más robusto que autoencoders estándar?",
          de: "Was ist ein Denoising Autoencoder und warum ist er robuster als Standard-Autoencoder?",
          nl: "Wat is een denoising autoencoder en waarom is het robuuster dan standaard autoencoders?"
        },
        options: [
          { en: "It learns to reconstruct clean data from corrupted inputs, forcing the network to learn meaningful representations rather than memorizing", es: "Aprende a reconstruir datos limpios de entradas corruptas, forzando aprender representaciones significativas no memorizar", de: "Lernt saubere Daten aus beschädigten Eingaben zu rekonstruieren, zwingt das Netzwerk bedeutungsvolle Repräsentationen zu lernen", nl: "Leert schone data te reconstrueren uit beschadigde inputs, dwingt netwerk betekenisvolle representaties te leren niet memoriseren" },
          { en: "It uses noise reduction algorithms in the hidden layers", es: "Usa algoritmos de reducción de ruido en las capas ocultas", de: "Es verwendet Rauschreduktionsalgorithmen in den versteckten Schichten", nl: "Het gebruikt ruisreductie algoritmes in de verborgen lagen" },
          { en: "It automatically removes noise from any input data", es: "Automáticamente remueve ruido de cualquier dato de entrada", de: "Es entfernt automatisch Rauschen aus allen Eingabedaten", nl: "Het verwijdert automatisch ruis uit alle inputdata" },
          { en: "It has additional layers specifically for noise detection", es: "Tiene capas adicionales específicamente para detección de ruido", de: "Es hat zusätzliche Schichten speziell für Rauschenerkennung", nl: "Het heeft extra lagen specifiek voor ruisdetectie" }
        ],
        correct: 0,
        explanation: {
          en: "Denoising autoencoders are trained on partially corrupted inputs to reconstruct the original clean data, encouraging the network to learn robust features that capture essential data structure.",
          es: "Autoencoders de reducción de ruido se entrenan con entradas parcialmente corruptas para reconstruir los datos limpios originales, alentando la red a aprender características robustas que capturan estructura esencial de datos.",
          de: "Denoising Autoencoder werden auf teilweise beschädigten Eingaben trainiert um die ursprünglichen sauberen Daten zu rekonstruieren, ermutigt das Netzwerk robuste Features zu lernen die wesentliche Datenstruktur erfassen.",
          nl: "Denoising autoencoders worden getraind op gedeeltelijk beschadigde inputs om de originele schone data te reconstrueren, moedigt het netwerk aan om robuuste kenmerken te leren die essentiële datastructuur vastleggen."
        }
      },
      {
        question: {
          en: "What is a Wasserstein GAN (WGAN) and how does it improve upon standard GANs?",
          es: "¿Qué es una GAN Wasserstein (WGAN) y cómo mejora sobre GANs estándar?",
          de: "Was ist ein Wasserstein GAN (WGAN) und wie verbessert es Standard-GANs?",
          nl: "Wat is een Wasserstein GAN (WGAN) en hoe verbetert het standaard GANs?"
        },
        options: [
          { en: "Uses Wasserstein distance as loss function providing more stable training and meaningful loss values", es: "Usa distancia Wasserstein como función de pérdida proporcionando entrenamiento más estable y valores de pérdida significativos", de: "Verwendet Wasserstein-Distanz als Verlustfunktion bietet stabileres Training und bedeutungsvolle Verlustwerte", nl: "Gebruikt Wasserstein afstand als verliesfunctie biedt stabielere training en betekenisvolle verlieswaarden" },
          { en: "Named after a researcher who improved GAN architectures", es: "Nombrada por un investigador que mejoró arquitecturas GAN", de: "Benannt nach einem Forscher der GAN-Architekturen verbesserte", nl: "Vernoemd naar een onderzoeker die GAN architecturen verbeterde" },
          { en: "Uses water-like fluid dynamics in the generator", es: "Usa dinámica de fluidos tipo agua en el generador", de: "Verwendet wasserähnliche Fluiddynamik im Generator", nl: "Gebruikt water-achtige vloeistofdynamica in de generator" },
          { en: "Implements weight sharing between generator and discriminator", es: "Implementa compartición de pesos entre generador y discriminador", de: "Implementiert Gewichtsteilung zwischen Generator und Discriminator", nl: "Implementeert gewichtsdeling tussen generator en discriminator" }
        ],
        correct: 0,
        explanation: {
          en: "WGAN uses the Wasserstein (Earth Mover's) distance which provides a smoother loss landscape, eliminating problems like vanishing gradients and mode collapse common in standard GANs.",
          es: "WGAN usa la distancia Wasserstein (Earth Mover's) que proporciona un paisaje de pérdida más suave, eliminando problemas como gradientes desvanecientes y colapso de modo comunes en GANs estándar.",
          de: "WGAN verwendet die Wasserstein (Earth Mover's) Distanz die eine glattere Verlustlandschaft bietet, eliminiert Probleme wie verschwindende Gradienten und Mode Collapse die in Standard-GANs üblich sind.",
          nl: "WGAN gebruikt de Wasserstein (Earth Mover's) afstand die een vloeiender verlieslandschap biedt, elimineert problemen zoals verdwijnende gradiënten en mode collapse die gebruikelijk zijn in standaard GANs."
        }
      },
      {
        question: {
          en: "What is the reparameterization trick in VAEs and why is it necessary?",
          es: "¿Qué es el truco de reparametrización en VAEs y por qué es necesario?",
          de: "Was ist der Reparameterisierungstrick in VAEs und warum ist er notwendig?",
          nl: "Wat is de reparameterisatie truc in VAEs en waarom is het nodig?"
        },
        options: [
          { en: "Allows backpropagation through random sampling by expressing random variables as deterministic functions of noise", es: "Permite retropropagación a través de muestreo aleatorio expresando variables aleatorias como funciones determinísticas de ruido", de: "Ermöglicht Backpropagation durch zufälliges Sampling durch Ausdrücken von Zufallsvariablen als deterministische Funktionen von Rauschen", nl: "Maakt backpropagation mogelijk door willekeurige sampling door willekeurige variabelen uit te drukken als deterministische functies van ruis" },
          { en: "Reparameterizes the network weights during training", es: "Reparametriza los pesos de la red durante entrenamiento", de: "Reparametrisiert die Netzwerkgewichte während des Trainings", nl: "Reparametriseert de netwerkgewichten tijdens training" },
          { en: "Changes the model parameters to improve convergence", es: "Cambia los parámetros del modelo para mejorar convergencia", de: "Ändert die Modellparameter um Konvergenz zu verbessern", nl: "Verandert de modelparameters om convergentie te verbeteren" },
          { en: "Optimizes hyperparameters automatically during training", es: "Optimiza hiperparámetros automáticamente durante entrenamiento", de: "Optimiert Hyperparameter automatisch während des Trainings", nl: "Optimaliseert hyperparameters automatisch tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "The reparameterization trick reformulates sampling from a distribution as sampling from a standard distribution plus a learned transformation, making the sampling process differentiable.",
          es: "El truco de reparametrización reformula el muestreo de una distribución como muestreo de una distribución estándar más una transformación aprendida, haciendo el proceso de muestreo diferenciable.",
          de: "Der Reparameterisierungstrick reformuliert Sampling aus einer Verteilung als Sampling aus einer Standardverteilung plus einer gelernten Transformation, macht den Sampling-Prozess differenzierbar.",
          nl: "De reparameterisatie truc herformuleert sampling uit een verdeling als sampling uit een standaardverdeling plus een geleerde transformatie, maakt het sampling proces differentieerbaar."
        }
      },
      {
        question: {
          en: "What is a conditional GAN (cGAN) and how does it provide control over generation?",
          es: "¿Qué es una GAN condicional (cGAN) y cómo proporciona control sobre la generación?",
          de: "Was ist ein Conditional GAN (cGAN) und wie bietet es Kontrolle über die Generierung?",
          nl: "Wat is een conditional GAN (cGAN) en hoe biedt het controle over generatie?"
        },
        options: [
          { en: "Conditions both generator and discriminator on additional information like class labels to control what type of data is generated", es: "Condiciona generador y discriminador en información adicional como etiquetas de clase para controlar tipo de datos generados", de: "Konditioniert Generator und Discriminator auf zusätzliche Informationen wie Klassenlabels um zu kontrollieren welche Daten generiert werden", nl: "Conditioneert generator en discriminator op aanvullende informatie zoals klasselabels om te controleren welk type data wordt gegenereerd" },
          { en: "Uses conditional probability distributions in the loss function", es: "Usa distribuciones de probabilidad condicional en la función de pérdida", de: "Verwendet bedingte Wahrscheinlichkeitsverteilungen in der Verlustfunktion", nl: "Gebruikt conditionele kansverdelingen in de verliesfunctie" },
          { en: "Applies conditions to the training process to improve stability", es: "Aplica condiciones al proceso de entrenamiento para mejorar estabilidad", de: "Wendet Bedingungen auf den Trainingsprozess an um Stabilität zu verbessern", nl: "Past condities toe op het trainingsproces om stabiliteit te verbeteren" },
          { en: "Generates data only under certain computational conditions", es: "Genera datos solo bajo ciertas condiciones computacionales", de: "Generiert Daten nur unter bestimmten rechnerischen Bedingungen", nl: "Genereert data alleen onder bepaalde computationele condities" }
        ],
        correct: 0,
        explanation: {
          en: "Conditional GANs extend standard GANs by providing both networks with additional conditioning information, enabling controlled generation of specific types of content.",
          es: "Las GAN condicionales extienden GANs estándar proporcionando ambas redes con información de acondicionamiento adicional, permitiendo generación controlada de tipos específicos de contenido.",
          de: "Conditional GANs erweitern Standard-GANs durch Bereitstellung beider Netzwerke mit zusätzlichen Konditionierungsinformationen, ermöglichen kontrollierte Generierung spezifischer Inhaltstypen.",
          nl: "Conditional GANs breiden standaard GANs uit door beide netwerken te voorzien van aanvullende conditioneringsinformatie, maken gecontroleerde generatie van specifieke types content mogelijk."
        }
      },
      {
        question: {
          en: "What is the difference between β-VAE and standard VAE in terms of disentangled representation learning?",
          es: "¿Cuál es la diferencia entre β-VAE y VAE estándar en términos de aprendizaje de representación desenredada?",
          de: "Was ist der Unterschied zwischen β-VAE und Standard-VAE in Bezug auf entwirrtes Repräsentationslernen?",
          nl: "Wat is het verschil tussen β-VAE en standaard VAE wat betreft ontward representatie leren?"
        },
        options: [
          { en: "β-VAE uses weighted KL divergence term (β > 1) to encourage disentangled latent factors, trading reconstruction for interpretability", es: "β-VAE usa término KL divergencia ponderado (β > 1) para alentar factores desenredados, intercambia reconstrucción por interpretabilidad", de: "β-VAE verwendet gewichteten KL-Divergenz-Term (β > 1) für entwirrte Faktoren, tauscht Rekonstruktion gegen Interpretierbarkeit", nl: "β-VAE gebruikt gewogen KL divergentie term (β > 1) voor ontwards factoren, ruilt reconstructie voor interpreteerbaarheid" },
          { en: "β-VAE uses beta distribution for the prior instead of Gaussian", es: "β-VAE usa distribución beta para el prior en lugar de Gaussiana", de: "β-VAE verwendet Beta-Verteilung für den Prior anstatt Gaussian", nl: "β-VAE gebruikt beta verdeling voor de prior in plaats van Gaussiaans" },
          { en: "β-VAE has β times more parameters than standard VAE", es: "β-VAE tiene β veces más parámetros que VAE estándar", de: "β-VAE hat β mal mehr Parameter als Standard-VAE", nl: "β-VAE heeft β keer meer parameters dan standaard VAE" },
          { en: "β-VAE trains for β epochs longer than standard VAE", es: "β-VAE entrena por β épocas más que VAE estándar", de: "β-VAE trainiert β Epochen länger als Standard-VAE", nl: "β-VAE traint voor β epochs langer dan standaard VAE" }
        ],
        correct: 0,
        explanation: {
          en: "β-VAE modifies the standard VAE objective by weighting the KL divergence term with β > 1, promoting disentangled representations where each latent dimension captures independent factors of variation.",
          es: "β-VAE modifica el objetivo VAE estándar ponderando el término de divergencia KL con β > 1, promoviendo representaciones desenredadas donde cada dimensión latente captura factores independientes de variación.",
          de: "β-VAE modifiziert das Standard-VAE-Ziel durch Gewichtung des KL-Divergenz-Terms mit β > 1, fördert entwirrte Repräsentationen wo jede latente Dimension unabhängige Variationsfaktoren erfasst.",
          nl: "β-VAE wijzigt het standaard VAE doel door de KL divergentie term te wegen met β > 1, bevordert ontwards representaties waarbij elke latente dimensie onafhankelijke variatiefactoren vastlegt."
        }
      },
      {
        question: {
          en: "What is a CycleGAN and what problem does it solve in image-to-image translation?",
          es: "¿Qué es una CycleGAN y qué problema resuelve en traducción imagen-a-imagen?",
          de: "Was ist ein CycleGAN und welches Problem löst es in Bild-zu-Bild-Übersetzung?",
          nl: "Wat is een CycleGAN en welk probleem lost het op in beeld-naar-beeld vertaling?"
        },
        options: [
          { en: "Enables unpaired image-to-image translation using cycle consistency loss to learn mappings between domains without paired training data", es: "Permite traducción no emparejada usando pérdida de consistencia cíclica para mapeos entre dominios sin datos emparejados", de: "Ermöglicht ungepaarte Übersetzung mit Zykluskonsisenzverlust für Mappings zwischen Domänen ohne gepaarte Daten", nl: "Maakt ongepaarde vertaling mogelijk met cyclus consistentie verlies voor mappings tussen domeinen zonder gepaarde data" },
          { en: "Creates cycles of multiple GANs for better image quality", es: "Crea ciclos de múltiples GANs para mejor calidad de imagen", de: "Erstellt Zyklen mehrerer GANs für bessere Bildqualität", nl: "Creëert cycli van meerdere GANs voor betere beeldkwaliteit" },
          { en: "Uses circular convolutions for translation tasks", es: "Usa convoluciones circulares para tareas de traducción", de: "Verwendet zirkuläre Faltungen für Übersetzungsaufgaben", nl: "Gebruikt circulaire convoluties voor vertalingstaken" },
          { en: "Cycles through different training phases automatically", es: "Cicla a través de diferentes fases de entrenamiento automáticamente", de: "Wechselt automatisch durch verschiedene Trainingsphasen", nl: "Cycleert automatisch door verschillende trainingsfases" }
        ],
        correct: 0,
        explanation: {
          en: "CycleGAN introduces cycle consistency loss (F(G(x)) ≈ x) to learn bidirectional mappings between image domains without requiring paired examples, enabling style transfer and domain adaptation.",
          es: "CycleGAN introduce pérdida de consistencia cíclica (F(G(x)) ≈ x) para aprender mapeos bidireccionales entre dominios de imagen sin requerir ejemplos emparejados, permitiendo transferencia de estilo y adaptación de dominio.",
          de: "CycleGAN führt Zykluskonsistezverlust (F(G(x)) ≈ x) ein um bidirektionale Mappings zwischen Bilddomänen zu lernen ohne gepaarte Beispiele zu benötigen, ermöglicht Stil-Transfer und Domänenadaptation.",
          nl: "CycleGAN introduceert cyclus consistentie verlies (F(G(x)) ≈ x) om bidirectionele mappings tussen beelddomeinen te leren zonder gepaarde voorbeelden te vereisen, maakt stijltransfer en domeinaanpassing mogelijk."
        }
      },
      {
        question: {
          en: "What is a Progressive GAN and how does it improve training stability and output quality?",
          es: "¿Qué es una GAN Progresiva y cómo mejora estabilidad de entrenamiento y calidad de salida?",
          de: "Was ist ein Progressive GAN und wie verbessert es Trainingsstabilität und Ausgabequalität?",
          nl: "Wat is een Progressive GAN en hoe verbetert het trainingsstabiliteit en outputkwaliteit?"
        },
        options: [
          { en: "Grows generator and discriminator networks from low to high resolution during training, improving stability and final image quality", es: "Hace crecer redes generador y discriminador de baja a alta resolución durante entrenamiento, mejora estabilidad y calidad", de: "Lässt Generator- und Discriminator-Netzwerke graduell von niedriger zu hoher Auflösung wachsen, verbessert Stabilität und Bildqualität", nl: "Laat generator en discriminator netwerken geleidelijk groeien van lage naar hoge resolutie, verbetert stabiliteit en kwaliteit" },
          { en: "Uses progressive training schedules with increasing difficulty", es: "Usa horarios de entrenamiento progresivos con dificultad creciente", de: "Verwendet progressive Trainingspläne mit steigender Schwierigkeit", nl: "Gebruikt progressieve trainingsschema's met toenemende moeilijkheidsgraad" },
          { en: "Progressively increases the dataset size during training", es: "Progresivamente aumenta el tamaño del conjunto de datos durante entrenamiento", de: "Erhöht progressiv die Datensatzgröße während des Trainings", nl: "Verhoogt progressief de datasetgrootte tijdens training" },
          { en: "Makes progressive improvements to the loss function", es: "Hace mejoras progresivas a la función de pérdida", de: "Macht progressive Verbesserungen an der Verlustfunktion", nl: "Maakt progressieve verbeteringen aan de verliesfunctie" }
        ],
        correct: 0,
        explanation: {
          en: "Progressive GANs start training at low resolution and gradually add layers to increase resolution, allowing stable training and high-quality generation of very high-resolution images.",
          es: "GANs Progresivas empiezan entrenamiento en baja resolución y gradualmente agregan capas para aumentar resolución, permitiendo entrenamiento estable y generación de alta calidad de imágenes de muy alta resolución.",
          de: "Progressive GANs beginnen Training bei niedriger Auflösung und fügen graduell Schichten hinzu um Auflösung zu erhöhen, ermöglichen stabiles Training und hochwertige Generierung sehr hochauflösender Bilder.",
          nl: "Progressive GANs beginnen training op lage resolutie en voegen geleidelijk lagen toe om resolutie te verhogen, maken stabiele training en hoogwaardige generatie van zeer hoge resolutie beelden mogelijk."
        }
      },
      {
        question: {
          en: "What is a StyleGAN and what innovation does it bring to controllable image generation?",
          es: "¿Qué es una StyleGAN y qué innovación aporta a la generación controlable de imágenes?",
          de: "Was ist ein StyleGAN und welche Innovation bringt es zur kontrollierbaren Bildgenerierung?",
          nl: "Wat is een StyleGAN en welke innovatie brengt het naar controleerbare beeldgeneratie?"
        },
        options: [
          { en: "Uses style-based generator architecture with adaptive instance normalization to enable fine-grained control over generated image attributes", es: "Usa arquitectura basada en estilo con normalización adaptativa para permitir control fino sobre atributos de imagen", de: "Verwendet stilbasierte Architektur mit adaptiver Normalisierung für feinkörnige Kontrolle über Bildattribute", nl: "Gebruikt stijl-gebaseerde architectuur met adaptieve normalisatie voor fijnmazige controle over beeldkenmerken" },
          { en: "Generates images in different artistic styles automatically", es: "Genera imágenes en diferentes estilos artísticos automáticamente", de: "Generiert automatisch Bilder in verschiedenen künstlerischen Stilen", nl: "Genereert automatisch beelden in verschillende artistieke stijlen" },
          { en: "Transfers style from one image to another using GANs", es: "Transfiere estilo de una imagen a otra usando GANs", de: "Überträgt Stil von einem Bild auf ein anderes mit GANs", nl: "Draagt stijl over van één beeld naar een ander met behulp van GANs" },
          { en: "Learns to copy the style of famous artists", es: "Aprende a copiar el estilo de artistas famosos", de: "Lernt den Stil berühmter Künstler zu kopieren", nl: "Leert de stijl van beroemde kunstenaars te kopiëren" }
        ],
        correct: 0,
        explanation: {
          en: "StyleGAN revolutionized controllable generation by using a mapping network to transform noise into style codes that control different aspects of generation through adaptive instance normalization at each layer.",
          es: "StyleGAN revolucionó generación controlable usando una red de mapeo para transformar ruido en códigos de estilo que controlan diferentes aspectos de generación a través de normalización de instancia adaptativa en cada capa.",
          de: "StyleGAN revolutionierte kontrollierbare Generierung durch Verwendung eines Mapping-Netzwerks um Rauschen in Stilcodes zu transformieren die verschiedene Aspekte der Generierung durch adaptive Instanznormalisierung in jeder Schicht kontrollieren.",
          nl: "StyleGAN revolutioneerde controleerbare generatie door een mapping netwerk te gebruiken om ruis te transformeren naar stijlcodes die verschillende aspecten van generatie controleren door adaptieve instance normalisatie in elke laag."
        }
      },
      {
        question: {
          en: "What is the ELBO (Evidence Lower BOund) in VAEs and why is it important?",
          es: "¿Qué es el ELBO (Evidence Lower BOund) en VAEs y por qué es importante?",
          de: "Was ist die ELBO (Evidence Lower BOund) in VAEs und warum ist sie wichtig?",
          nl: "Wat is de ELBO (Evidence Lower BOund) in VAEs en waarom is het belangrijk?"
        },
        options: [
          { en: "A tractable lower bound on the log-likelihood that combines reconstruction loss and KL divergence for training VAEs", es: "Un límite inferior manejable en la log-verosimilitud que combina pérdida de reconstrucción y divergencia KL para entrenar VAEs", de: "Eine handhabbare untere Grenze der Log-Likelihood die Rekonstruktionsverlust und KL-Divergenz für VAE-Training kombiniert", nl: "Een hanteerbare ondergrens op de log-likelihood die reconstructieverlies en KL divergentie combineert voor het trainen van VAEs" },
          { en: "A method for evaluating the lower bound of network performance", es: "Un método para evaluar el límite inferior de rendimiento de red", de: "Eine Methode zur Bewertung der unteren Grenze der Netzwerkleistung", nl: "Een methode voor het evalueren van de ondergrens van netwerkprestaties" },
          { en: "The minimum evidence required to validate VAE training", es: "La evidencia mínima requerida para validar entrenamiento VAE", de: "Die minimale Evidenz die für VAE-Training-Validierung erforderlich ist", nl: "Het minimale bewijs vereist om VAE training te valideren" },
          { en: "A bound on the computational complexity of VAEs", es: "Un límite en la complejidad computacional de VAEs", de: "Eine Grenze der rechnerischen Komplexität von VAEs", nl: "Een grens op de computationele complexiteit van VAEs" }
        ],
        correct: 0,
        explanation: {
          en: "The ELBO provides a mathematically principled objective function for VAE training by lower-bounding the intractable marginal likelihood, enabling variational inference for generative modeling.",
          es: "El ELBO proporciona una función objetivo matemáticamente fundamentada para entrenamiento VAE limitando inferiormente la verosimilitud marginal intratable, permitiendo inferencia variacional para modelado generativo.",
          de: "Die ELBO bietet eine mathematisch fundierte Zielfunktion für VAE-Training durch untere Begrenzung der intraktablen marginalen Likelihood, ermöglicht variationelle Inferenz für generative Modellierung.",
          nl: "De ELBO biedt een wiskundig gefundeerde doelfunctie voor VAE training door de intractabele marginale likelihood onderaan te begrenzen, maakt variationele inferentie mogelijk voor generatieve modellering."
        }
      },
      {
        question: {
          en: "What is spectral normalization in GANs and how does it improve training stability?",
          es: "¿Qué es la normalización espectral en GANs y cómo mejora la estabilidad de entrenamiento?",
          de: "Was ist Spektralnormalisierung in GANs und wie verbessert sie Trainingsstabilität?",
          nl: "Wat is spectrale normalisatie in GANs en hoe verbetert het trainingsstabiliteit?"
        },
        options: [
          { en: "Constrains the Lipschitz constant of the discriminator by normalizing weights with their spectral norm, ensuring stable gradients", es: "Restringe constante de Lipschitz del discriminador normalizando pesos con norma espectral, asegura gradientes estables", de: "Beschränkt Lipschitz-Konstante des Discriminators durch Normalisierung der Gewichte mit Spektralnorm, gewährleistet stabile Gradienten", nl: "Beperkt Lipschitz constante van discriminator door gewichten te normaliseren met spectrale norm, zorgt voor stabiele gradiënten" },
          { en: "Normalizes the frequency spectrum of generated images", es: "Normaliza el espectro de frecuencia de imágenes generadas", de: "Normalisiert das Frequenzspektrum generierter Bilder", nl: "Normaliseert het frequentiespectrum van gegenereerde beelden" },
          { en: "Applies spectral analysis to improve discriminator performance", es: "Aplica análisis espectral para mejorar rendimiento del discriminador", de: "Wendet Spektralanalyse an um Discriminator-Leistung zu verbessern", nl: "Past spectrale analyse toe om discriminator prestaties te verbeteren" },
          { en: "Uses spectral decomposition for weight initialization", es: "Usa descomposición espectral para inicialización de pesos", de: "Verwendet Spektralzerlegung für Gewichtsinitialisierung", nl: "Gebruikt spectrale decompositie voor gewichtinitialisatie" }
        ],
        correct: 0,
        explanation: {
          en: "Spectral normalization divides each weight matrix by its spectral norm (largest singular value), providing a computationally efficient way to ensure the discriminator is Lipschitz continuous.",
          es: "La normalización espectral divide cada matriz de pesos por su norma espectral (valor singular más grande), proporcionando una forma computacionalmente eficiente de asegurar que el discriminador sea Lipschitz continuo.",
          de: "Spektralnormalisierung teilt jede Gewichtsmatrix durch ihre Spektralnorm (größten Singulärwert), bietet einen rechnerisch effizienten Weg sicherzustellen dass der Discriminator Lipschitz-stetig ist.",
          nl: "Spectrale normalisatie deelt elke gewichtsmatrix door zijn spectrale norm (grootste singuliere waarde), biedt een rekenkundig efficiënte manier om ervoor te zorgen dat de discriminator Lipschitz continu is."
        }
      },
      {
        question: {
          en: "What is a Vector Quantized VAE (VQ-VAE) and how does it differ from standard VAEs?",
          es: "¿Qué es un VAE Cuantizado Vectorialmente (VQ-VAE) y cómo difiere de VAEs estándar?",
          de: "Was ist ein Vector Quantized VAE (VQ-VAE) und wie unterscheidet er sich von Standard-VAEs?",
          nl: "Wat is een Vector Quantized VAE (VQ-VAE) en hoe verschilt het van standaard VAEs?"
        },
        options: [
          { en: "Uses discrete latent representations through vector quantization instead of continuous latent variables, avoiding posterior collapse", es: "Usa representaciones latentes discretas a través de cuantización vectorial en lugar de variables continuas, evita colapso posterior", de: "Verwendet diskrete latente Repräsentationen durch Vektorquantisierung anstatt kontinuierlicher Variablen, vermeidet posterioren Kollaps", nl: "Gebruikt discrete latente representaties door vector kwantisatie in plaats van continue variabelen, vermijdt posterior collapse" },
          { en: "Quantizes the input vectors before encoding", es: "Cuantiza los vectores de entrada antes de codificar", de: "Quantisiert die Eingabevektoren vor der Kodierung", nl: "Kwantiseert de inputvectoren voor encoding" },
          { en: "Uses vector operations instead of scalar operations", es: "Usa operaciones vectoriales en lugar de operaciones escalares", de: "Verwendet Vektoroperationen anstatt Skalaroperationen", nl: "Gebruikt vectoroperaties in plaats van scalaire operaties" },
          { en: "Quantizes the output to reduce memory usage", es: "Cuantiza la salida para reducir uso de memoria", de: "Quantisiert die Ausgabe um Speicherverbrauch zu reduzieren", nl: "Kwantiseert de output om geheugengebruik te verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "VQ-VAE replaces the continuous latent space with a discrete codebook of embeddings, learning to map encoder outputs to the nearest codebook vectors, enabling better modeling of discrete structures.",
          es: "VQ-VAE reemplaza el espacio latente continuo con un libro de códigos discreto de embeddings, aprende a mapear salidas del codificador a los vectores de libro de códigos más cercanos, permitiendo mejor modelado de estructuras discretas.",
          de: "VQ-VAE ersetzt den kontinuierlichen latenten Raum durch ein diskretes Codebook von Embeddings, lernt Encoder-Ausgaben auf die nächsten Codebook-Vektoren zu mappen, ermöglicht bessere Modellierung diskreter Strukturen.",
          nl: "VQ-VAE vervangt de continue latente ruimte met een discreet codeboek van embeddings, leert encoder outputs te mappen naar de dichtstbijzijnde codebook vectoren, maakt betere modellering van discrete structuren mogelijk."
        }
      },
      {
        question: {
          en: "What is the difference between RMSprop and Adam optimizers?",
          es: "¿Cuál es la diferencia entre los optimizadores RMSprop y Adam?",
          de: "Was ist der Unterschied zwischen RMSprop und Adam Optimizern?",
          nl: "Wat is het verschil tussen RMSprop en Adam optimizers?"
        },
        options: [
          { en: "Adam adds momentum to RMSprop's adaptive learning rates and includes bias correction", es: "Adam añade momentum a las tasas de aprendizaje adaptativas de RMSprop e incluye corrección de sesgo", de: "Adam fügt Momentum zu RMSprops adaptiven Lernraten hinzu und enthält Bias-Korrektur", nl: "Adam voegt momentum toe aan RMSprop's adaptieve learning rates en bevat bias correctie" },
          { en: "RMSprop is faster but less accurate than Adam", es: "RMSprop es más rápido pero menos preciso que Adam", de: "RMSprop ist schneller aber weniger genau als Adam", nl: "RMSprop is sneller maar minder nauwkeurig dan Adam" },
          { en: "Adam uses root mean square while RMSprop uses mean square", es: "Adam usa raíz cuadrada media mientras RMSprop usa media cuadrada", de: "Adam verwendet Wurzel mittleres Quadrat während RMSprop mittleres Quadrat verwendet", nl: "Adam gebruikt wortel gemiddeld kwadraat terwijl RMSprop gemiddeld kwadraat gebruikt" },
          { en: "They are identical optimizers with different names", es: "Son optimizadores idénticos con nombres diferentes", de: "Sie sind identische Optimizer mit verschiedenen Namen", nl: "Het zijn identieke optimizers met verschillende namen" }
        ],
        correct: 0,
        explanation: {
          en: "Adam combines RMSprop's per-parameter adaptive learning rates with momentum-like updates and bias correction terms, making it generally more robust for a wider range of problems.",
          es: "Adam combina las tasas de aprendizaje adaptativas por parámetro de RMSprop con actualizaciones tipo momentum y términos de corrección de sesgo, haciéndolo generalmente más robusto para una gama más amplia de problemas.",
          de: "Adam kombiniert RMSprops adaptive Lernraten pro Parameter mit momentum-ähnlichen Updates und Bias-Korrektur-Termen, macht es generell robuster für einen breiteren Bereich von Problemen.",
          nl: "Adam combineert RMSprop's per-parameter adaptieve learning rates met momentum-achtige updates en bias correctie termen, maakt het over het algemeen robuuster voor een breder scala aan problemen."
        }
      },
      {
        question: {
          en: "What is label smoothing and how does it improve model generalization?",
          es: "¿Qué es el suavizado de etiquetas y cómo mejora la generalización del modelo?",
          de: "Was ist Label Smoothing und wie verbessert es Modellgeneralisierung?",
          nl: "Wat is label smoothing en hoe verbetert het modelgeneralisatie?"
        },
        options: [
          { en: "Replaces hard one-hot labels with soft targets to prevent overconfident predictions and improve calibration", es: "Reemplaza etiquetas one-hot duras con objetivos suaves para prevenir predicciones demasiado confiadas y mejorar calibración", de: "Ersetzt harte One-Hot-Labels durch weiche Ziele um überconfidente Vorhersagen zu verhindern und Kalibrierung zu verbessern", nl: "Vervangt harde one-hot labels met zachte targets om overconfident voorspellingen te voorkomen en kalibratie te verbeteren" },
          { en: "Smooths the training labels to make them easier to read", es: "Suaviza las etiquetas de entrenamiento para hacerlas más fáciles de leer", de: "Glättet die Trainingslabels um sie leichter lesbar zu machen", nl: "Maakt de trainingslabels gladder om ze gemakkelijker leesbaar te maken" },
          { en: "Removes noise from mislabeled training examples", es: "Elimina ruido de ejemplos de entrenamiento mal etiquetados", de: "Entfernt Rauschen aus falsch beschrifteten Trainingsbeispielen", nl: "Verwijdert ruis uit verkeerd gelabelde trainingsvoorbeelden" },
          { en: "Interpolates between different label categories", es: "Interpola entre diferentes categorías de etiquetas", de: "Interpoliert zwischen verschiedenen Label-Kategorien", nl: "Interpoleert tussen verschillende labelcategorieën" }
        ],
        correct: 0,
        explanation: {
          en: "Label smoothing replaces target 1s with 1-ε and 0s with ε/(K-1), preventing the model from becoming too confident and encouraging it to maintain some uncertainty, which improves generalization.",
          es: "El suavizado de etiquetas reemplaza 1s objetivo con 1-ε y 0s con ε/(K-1), previniendo que el modelo se vuelva demasiado confiado y alentándolo a mantener cierta incertidumbre, lo que mejora la generalización.",
          de: "Label Smoothing ersetzt Ziel-1en mit 1-ε und 0en mit ε/(K-1), verhindert dass das Modell zu confident wird und ermutigt es etwas Unsicherheit beizubehalten, was Generalisierung verbessert.",
          nl: "Label smoothing vervangt doel 1en met 1-ε en 0en met ε/(K-1), voorkomt dat het model te zelfverzekerd wordt en moedigt het aan om enige onzekerheid te behouden, wat generalisatie verbetert."
        }
      },
      {
        question: {
          en: "What is mixup data augmentation?",
          es: "¿Qué es la aumentación de datos mixup?",
          de: "Was ist Mixup Datenaugmentierung?",
          nl: "Wat is mixup data augmentatie?"
        },
        options: [
          { en: "Trains on convex combinations of pairs of examples and their labels to improve generalization", es: "Entrena en combinaciones convexas de pares de ejemplos y sus etiquetas para mejorar generalización", de: "Trainiert auf konvexen Kombinationen von Beispielpaaren und ihren Labels um Generalisierung zu verbessern", nl: "Traint op convexe combinaties van paren voorbeelden en hun labels om generalisatie te verbeteren" },
          { en: "Mixes up the order of training examples randomly", es: "Mezcla aleatoriamente el orden de ejemplos de entrenamiento", de: "Mischt die Reihenfolge der Trainingsbeispiele zufällig", nl: "Mengt willekeurig de volgorde van trainingsvoorbeelden" },
          { en: "Combines multiple augmentation techniques simultaneously", es: "Combina múltiples técnicas de aumentación simultáneamente", de: "Kombiniert mehrere Augmentierungstechniken gleichzeitig", nl: "Combineert meerdere augmentatietechnieken tegelijkertijd" },
          { en: "Mixes different datasets together for training", es: "Mezcla diferentes conjuntos de datos juntos para entrenamiento", de: "Mischt verschiedene Datensätze zusammen für Training", nl: "Mengt verschillende datasets samen voor training" }
        ],
        correct: 0,
        explanation: {
          en: "Mixup creates virtual training examples by linearly interpolating between random pairs of training examples and their labels (x̃ = λx_i + (1-λ)x_j), encouraging linear behavior between training examples.",
          es: "Mixup crea ejemplos de entrenamiento virtuales interpolando linealmente entre pares aleatorios de ejemplos de entrenamiento y sus etiquetas (x̃ = λx_i + (1-λ)x_j), alentando comportamiento lineal entre ejemplos de entrenamiento.",
          de: "Mixup erstellt virtuelle Trainingsbeispiele durch lineare Interpolation zwischen zufälligen Paaren von Trainingsbeispielen und ihren Labels (x̃ = λx_i + (1-λ)x_j), ermutigt lineares Verhalten zwischen Trainingsbeispielen.",
          nl: "Mixup creëert virtuele trainingsvoorbeelden door lineair te interpoleren tussen willekeurige paren trainingsvoorbeelden en hun labels (x̃ = λx_i + (1-λ)x_j), moedigt lineair gedrag aan tussen trainingsvoorbeelden."
        }
      },
      {
        question: {
          en: "What is gradient accumulation and when is it useful?",
          es: "¿Qué es la acumulación de gradiente y cuándo es útil?",
          de: "Was ist Gradientenakkumulation und wann ist sie nützlich?",
          nl: "Wat is gradiënt accumulatie en wanneer is het nuttig?"
        },
        options: [
          { en: "Accumulating gradients over multiple mini-batches before updating weights, simulating larger batch sizes with limited memory", es: "Acumular gradientes sobre múltiples mini-lotes antes de actualizar pesos, simulando tamaños de lote más grandes con memoria limitada", de: "Gradienten über mehrere Mini-Batches akkumulieren vor Gewichtsaktualisierung, simuliert größere Batch-Größen mit begrenztem Speicher", nl: "Gradiënten accumuleren over meerdere mini-batches voor het updaten van gewichten, simuleert grotere batch groottes met beperkt geheugen" },
          { en: "Storing all gradients throughout training for analysis", es: "Almacenar todos los gradientes durante entrenamiento para análisis", de: "Alle Gradienten während Training für Analyse speichern", nl: "Alle gradiënten opslaan tijdens training voor analyse" },
          { en: "Accumulating momentum for faster convergence", es: "Acumular momentum para convergencia más rápida", de: "Momentum akkumulieren für schnellere Konvergenz", nl: "Momentum accumuleren voor snellere convergentie" },
          { en: "Adding up gradients from different models", es: "Sumar gradientes de diferentes modelos", de: "Gradienten von verschiedenen Modellen addieren", nl: "Gradiënten van verschillende modellen optellen" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient accumulation performs forward and backward passes on multiple small batches, accumulating gradients without updating weights until the desired effective batch size is reached, enabling large batch training on limited hardware.",
          es: "La acumulación de gradiente realiza pases hacia adelante y hacia atrás en múltiples lotes pequeños, acumulando gradientes sin actualizar pesos hasta alcanzar el tamaño de lote efectivo deseado, permitiendo entrenamiento de lotes grandes en hardware limitado.",
          de: "Gradientenakkumulation führt Vorwärts- und Rückwärtspässe auf mehreren kleinen Batches durch, akkumuliert Gradienten ohne Gewichte zu aktualisieren bis die gewünschte effektive Batch-Größe erreicht ist, ermöglicht großes Batch-Training auf begrenzter Hardware.",
          nl: "Gradiënt accumulatie voert forward en backward passes uit op meerdere kleine batches, accumuleert gradiënten zonder gewichten te updaten totdat de gewenste effectieve batch grootte bereikt is, maakt grote batch training mogelijk op beperkte hardware."
        }
      },
      {
        question: {
          en: "What is teacher forcing in sequence-to-sequence models?",
          es: "¿Qué es teacher forcing en modelos secuencia-a-secuencia?",
          de: "Was ist Teacher Forcing in Sequenz-zu-Sequenz-Modellen?",
          nl: "Wat is teacher forcing in sequentie-naar-sequentie modellen?"
        },
        options: [
          { en: "Using ground truth outputs as inputs for the next decoding step during training instead of model predictions", es: "Usar salidas reales como entradas para el siguiente paso de decodificación durante entrenamiento en lugar de predicciones", de: "Grundwahrheit-Ausgaben als Eingaben für den nächsten Dekodierungsschritt während Training verwenden anstatt Modellvorhersagen", nl: "Ground truth outputs gebruiken als inputs voor de volgende decoderingsstap tijdens training in plaats van modelvoorspellingen" },
          { en: "Forcing the model to learn from teacher examples only", es: "Forzar al modelo a aprender solo de ejemplos del maestro", de: "Das Modell zwingen nur von Lehrer-Beispielen zu lernen", nl: "Het model dwingen om alleen van leraar voorbeelden te leren" },
          { en: "Using a pre-trained teacher model to guide training", es: "Usar un modelo maestro pre-entrenado para guiar entrenamiento", de: "Ein vortrainiertes Lehrer-Modell verwenden um Training zu leiten", nl: "Een voorgetraind leraar model gebruiken om training te begeleiden" },
          { en: "Enforcing strict supervision during model training", es: "Imponer supervisión estricta durante entrenamiento del modelo", de: "Strikte Überwachung während Modelltraining durchsetzen", nl: "Strikte supervisie afdwingen tijdens model training" }
        ],
        correct: 0,
        explanation: {
          en: "Teacher forcing feeds the true previous token as input rather than the model's prediction, speeding up training but potentially causing exposure bias where the model underperforms at inference when it must use its own predictions.",
          es: "Teacher forcing alimenta el token previo verdadero como entrada en lugar de la predicción del modelo, acelerando entrenamiento pero potencialmente causando sesgo de exposición donde el modelo rinde mal en inferencia cuando debe usar sus propias predicciones.",
          de: "Teacher Forcing füttert das wahre vorherige Token als Eingabe anstatt der Modellvorhersage, beschleunigt Training aber verursacht potenziell Exposure Bias wo das Modell bei Inferenz schlechter abschneidet wenn es seine eigenen Vorhersagen verwenden muss.",
          nl: "Teacher forcing voedt het echte vorige token als input in plaats van de voorspelling van het model, versnelt training maar veroorzaakt mogelijk exposure bias waarbij het model slechter presteert bij inferentie wanneer het zijn eigen voorspellingen moet gebruiken."
        }
      },
      {
        question: {
          en: "What is the purpose of warm-up in learning rate schedules?",
          es: "¿Cuál es el propósito del warm-up en programas de tasa de aprendizaje?",
          de: "Was ist der Zweck von Warm-up in Lernraten-Zeitplänen?",
          nl: "Wat is het doel van warm-up in learning rate schema's?"
        },
        options: [
          { en: "Gradually increasing learning rate from small value at start to prevent instability from poor initialization", es: "Aumentar gradualmente tasa de aprendizaje de valor pequeño al inicio para prevenir inestabilidad de inicialización pobre", de: "Lernrate graduell von kleinem Wert am Anfang erhöhen um Instabilität von schlechter Initialisierung zu verhindern", nl: "Geleidelijk learning rate verhogen vanaf kleine waarde aan het begin om instabiliteit door slechte initialisatie te voorkomen" },
          { en: "Warming up the GPU before serious training begins", es: "Calentar la GPU antes de que comience el entrenamiento serio", de: "Die GPU aufwärmen bevor ernsthaftes Training beginnt", nl: "De GPU opwarmen voordat serieuze training begint" },
          { en: "Pre-training the model on easier examples first", es: "Pre-entrenar el modelo en ejemplos más fáciles primero", de: "Das Modell zuerst auf einfacheren Beispielen vortrainieren", nl: "Het model eerst pre-trainen op makkelijkere voorbeelden" },
          { en: "Loading data into memory before training starts", es: "Cargar datos en memoria antes de que comience entrenamiento", de: "Daten in Speicher laden bevor Training beginnt", nl: "Data in geheugen laden voordat training begint" }
        ],
        correct: 0,
        explanation: {
          en: "Learning rate warm-up linearly increases the learning rate over initial iterations, allowing the optimizer to find good directions before taking large steps, particularly important for large batch training and transformers.",
          es: "El warm-up de tasa de aprendizaje aumenta linealmente la tasa de aprendizaje sobre iteraciones iniciales, permitiendo al optimizador encontrar buenas direcciones antes de dar pasos grandes, particularmente importante para entrenamiento de lotes grandes y transformers.",
          de: "Learning Rate Warm-up erhöht die Lernrate linear über anfängliche Iterationen, ermöglicht dem Optimizer gute Richtungen zu finden bevor große Schritte gemacht werden, besonders wichtig für großes Batch-Training und Transformer.",
          nl: "Learning rate warm-up verhoogt lineair de learning rate over initiële iteraties, stelt de optimizer in staat goede richtingen te vinden voordat grote stappen worden genomen, bijzonder belangrijk voor grote batch training en transformers."
        }
      },
      {
        question: {
          en: "What is self-attention and how does it differ from standard attention?",
          es: "¿Qué es la auto-atención y cómo difiere de la atención estándar?",
          de: "Was ist Self-Attention und wie unterscheidet sie sich von Standard-Attention?",
          nl: "Wat is self-attention en hoe verschilt het van standaard attention?"
        },
        options: [
          { en: "Computes attention within a single sequence by relating different positions to each other, rather than between encoder and decoder", es: "Calcula atención dentro de una secuencia relacionando diferentes posiciones entre sí, no entre codificador y decodificador", de: "Berechnet Aufmerksamkeit innerhalb einer Sequenz durch Beziehung verschiedener Positionen zueinander, nicht zwischen Encoder und Decoder", nl: "Berekent attention binnen een sequentie door verschillende posities aan elkaar te relateren, niet tussen encoder en decoder" },
          { en: "The model paying attention to its own parameters", es: "El modelo prestando atención a sus propios parámetros", de: "Das Modell achtet auf seine eigenen Parameter", nl: "Het model dat aandacht besteedt aan zijn eigen parameters" },
          { en: "Attention mechanism that learns automatically without supervision", es: "Mecanismo de atención que aprende automáticamente sin supervisión", de: "Aufmerksamkeitsmechanismus der automatisch ohne Überwachung lernt", nl: "Attention mechanisme dat automatisch leert zonder supervisie" },
          { en: "Attention focused on self-improvement during training", es: "Atención enfocada en auto-mejora durante entrenamiento", de: "Aufmerksamkeit auf Selbstverbesserung während Training fokussiert", nl: "Attention gericht op zelfverbetering tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "Self-attention allows each position in a sequence to attend to all positions in the same sequence, enabling the model to capture dependencies regardless of distance, fundamental to transformer architectures.",
          es: "La auto-atención permite a cada posición en una secuencia atender a todas las posiciones en la misma secuencia, permitiendo al modelo capturar dependencias independientemente de la distancia, fundamental para arquitecturas transformer.",
          de: "Self-Attention erlaubt jeder Position in einer Sequenz alle Positionen in derselben Sequenz zu beachten, ermöglicht dem Modell Abhängigkeiten unabhängig von Distanz zu erfassen, fundamental für Transformer-Architekturen.",
          nl: "Self-attention stelt elke positie in een sequentie in staat om aandacht te besteden aan alle posities in dezelfde sequentie, stelt het model in staat om afhankelijkheden vast te leggen ongeacht afstand, fundamenteel voor transformer architecturen."
        }
      },
      {
        question: {
          en: "What is adversarial training and how does it improve model robustness?",
          es: "¿Qué es el entrenamiento adversario y cómo mejora la robustez del modelo?",
          de: "Was ist adversariales Training und wie verbessert es Modellrobustheit?",
          nl: "Wat is adversariële training en hoe verbetert het modelrobuustheid?"
        },
        options: [
          { en: "Training on adversarial examples created by adding small perturbations designed to fool the model", es: "Entrenar en ejemplos adversarios creados añadiendo pequeñas perturbaciones diseñadas para engañar al modelo", de: "Training auf adversariellen Beispielen erstellt durch Hinzufügen kleiner Störungen entworfen um das Modell zu täuschen", nl: "Trainen op adversariële voorbeelden gemaakt door kleine verstoringen toe te voegen ontworpen om het model te misleiden" },
          { en: "Training two models to compete against each other", es: "Entrenar dos modelos para competir entre sí", de: "Zwei Modelle trainieren um gegeneinander zu konkurrieren", nl: "Twee modellen trainen om tegen elkaar te concurreren" },
          { en: "Training in adversarial conditions with limited resources", es: "Entrenar en condiciones adversas con recursos limitados", de: "Training unter widrigen Bedingungen mit begrenzten Ressourcen", nl: "Trainen onder ongunstige omstandigheden met beperkte middelen" },
          { en: "Using adversarial loss functions for better convergence", es: "Usar funciones de pérdida adversarias para mejor convergencia", de: "Adversarielle Verlustfunktionen für bessere Konvergenz verwenden", nl: "Adversariële loss functies gebruiken voor betere convergentie" }
        ],
        correct: 0,
        explanation: {
          en: "Adversarial training augments the training set with adversarially perturbed examples, forcing the model to learn robust features that are invariant to small input perturbations, improving security and generalization.",
          es: "El entrenamiento adversario aumenta el conjunto de entrenamiento con ejemplos perturbados adversarialmente, forzando al modelo a aprender características robustas que son invariantes a pequeñas perturbaciones de entrada, mejorando seguridad y generalización.",
          de: "Adversariales Training erweitert den Trainingssatz mit adversariell gestörten Beispielen, zwingt das Modell robuste Features zu lernen die invariant zu kleinen Eingabestörungen sind, verbessert Sicherheit und Generalisierung.",
          nl: "Adversariële training vergroot de trainingsset met adversarieel verstoorde voorbeelden, dwingt het model om robuuste kenmerken te leren die invariant zijn voor kleine inputverstoringen, verbetert veiligheid en generalisatie."
        }
      },
      {
        question: {
          en: "What is the difference between fine-tuning and feature extraction in transfer learning?",
          es: "¿Cuál es la diferencia entre ajuste fino y extracción de características en aprendizaje por transferencia?",
          de: "Was ist der Unterschied zwischen Fine-Tuning und Feature-Extraktion im Transfer Learning?",
          nl: "Wat is het verschil tussen fine-tuning en feature extractie in transfer learning?"
        },
        options: [
          { en: "Fine-tuning updates pre-trained weights while feature extraction freezes them and only trains new layers", es: "Ajuste fino actualiza pesos pre-entrenados mientras extracción de características los congela y solo entrena nuevas capas", de: "Fine-Tuning aktualisiert vortrainierte Gewichte während Feature-Extraktion sie einfriert und nur neue Schichten trainiert", nl: "Fine-tuning werkt voorgetrainde gewichten bij terwijl feature extractie ze bevriest en alleen nieuwe lagen traint" },
          { en: "Feature extraction is faster but fine-tuning is more accurate", es: "Extracción de características es más rápida pero ajuste fino es más preciso", de: "Feature-Extraktion ist schneller aber Fine-Tuning ist genauer", nl: "Feature extractie is sneller maar fine-tuning is nauwkeuriger" },
          { en: "Fine-tuning requires more data than feature extraction", es: "Ajuste fino requiere más datos que extracción de características", de: "Fine-Tuning erfordert mehr Daten als Feature-Extraktion", nl: "Fine-tuning vereist meer data dan feature extractie" },
          { en: "They are the same approach with different names", es: "Son el mismo enfoque con nombres diferentes", de: "Sie sind derselbe Ansatz mit verschiedenen Namen", nl: "Het zijn dezelfde aanpak met verschillende namen" }
        ],
        correct: 0,
        explanation: {
          en: "Feature extraction uses a frozen pre-trained model as a fixed feature extractor, training only new task-specific layers, while fine-tuning allows the pre-trained weights to be updated during training for better task adaptation.",
          es: "La extracción de características usa un modelo pre-entrenado congelado como extractor de características fijo, entrenando solo nuevas capas específicas de tarea, mientras ajuste fino permite que los pesos pre-entrenados se actualicen durante entrenamiento para mejor adaptación de tarea.",
          de: "Feature-Extraktion verwendet ein eingefrorenes vortrainiertes Modell als festen Feature-Extraktor, trainiert nur neue aufgabenspezifische Schichten, während Fine-Tuning erlaubt dass vortrainierte Gewichte während Training aktualisiert werden für bessere Aufgabenanpassung.",
          nl: "Feature extractie gebruikt een bevroren voorgetraind model als vaste feature extractor, traint alleen nieuwe taak-specifieke lagen, terwijl fine-tuning toestaat dat voorgetrainde gewichten worden bijgewerkt tijdens training voor betere taak aanpassing."
        }
      },
      {
        question: {
          en: "What is gradient clipping and when is it necessary?",
          es: "¿Qué es el recorte de gradiente y cuándo es necesario?",
          de: "Was ist Gradient Clipping und wann ist es notwendig?",
          nl: "Wat is gradient clipping en wanneer is het noodzakelijk?"
        },
        options: [
          { en: "Limiting gradient magnitudes to prevent exploding gradients during backpropagation, especially in RNNs", es: "Limitar magnitudes de gradiente para prevenir gradientes que explotan durante retropropagación, especialmente en RNNs", de: "Gradientenmagnitude begrenzen um explodierende Gradienten während Backpropagation zu verhindern, besonders in RNNs", nl: "Gradiënt magnitudes beperken om exploderende gradiënten tijdens backpropagation te voorkomen, vooral in RNNs" },
          { en: "Cutting off very small gradients to speed up training", es: "Cortar gradientes muy pequeños para acelerar entrenamiento", de: "Sehr kleine Gradienten abschneiden um Training zu beschleunigen", nl: "Zeer kleine gradiënten afkappen om training te versnellen" },
          { en: "Removing gradients that point in wrong directions", es: "Remover gradientes que apuntan en direcciones incorrectas", de: "Gradienten entfernen die in falsche Richtungen zeigen", nl: "Gradiënten verwijderen die in verkeerde richtingen wijzen" },
          { en: "Clipping gradients to integer values for efficiency", es: "Recortar gradientes a valores enteros para eficiencia", de: "Gradienten auf ganzzahlige Werte clippen für Effizienz", nl: "Gradiënten clippen naar integer waarden voor efficiëntie" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient clipping rescales gradients when their norm exceeds a threshold (e.g., clip by norm or by value), preventing numerical instability from exploding gradients particularly common in recurrent networks and deep architectures.",
          es: "El recorte de gradiente reescala gradientes cuando su norma excede un umbral (ej. recortar por norma o por valor), previniendo inestabilidad numérica de gradientes que explotan particularmente común en redes recurrentes y arquitecturas profundas.",
          de: "Gradient Clipping reskaliert Gradienten wenn ihre Norm einen Schwellenwert überschreitet (z.B. Clip nach Norm oder nach Wert), verhindert numerische Instabilität von explodierenden Gradienten besonders üblich in rekurrenten Netzwerken und tiefen Architekturen.",
          nl: "Gradient clipping herschaalt gradiënten wanneer hun norm een drempel overschrijdt (bijv. clip door norm of door waarde), voorkomt numerieke instabiliteit van exploderende gradiënten bijzonder gebruikelijk in recurrente netwerken en diepe architecturen."
        }
      },
      {
        question: {
          en: "What is a learning rate finder and how does it help optimize training?",
          es: "¿Qué es un buscador de tasa de aprendizaje y cómo ayuda a optimizar entrenamiento?",
          de: "Was ist ein Learning Rate Finder und wie hilft er Training zu optimieren?",
          nl: "Wat is een learning rate finder en hoe helpt het training te optimaliseren?"
        },
        options: [
          { en: "Systematically increases learning rate during short training run to find optimal range by observing loss behavior", es: "Aumenta sistemáticamente tasa de aprendizaje durante entrenamiento corto para encontrar rango óptimo observando pérdida", de: "Erhöht systematisch Lernrate während kurzen Trainingslaufs um optimalen Bereich zu finden durch Verlustbeobachtung", nl: "Verhoogt systematisch learning rate tijdens korte trainingsrun om optimaal bereik te vinden door loss gedrag te observeren" },
          { en: "Automatically searches for the learning rate in hyperparameter space", es: "Busca automáticamente la tasa de aprendizaje en espacio de hiperparámetros", de: "Sucht automatisch nach Lernrate im Hyperparameterraum", nl: "Zoekt automatisch naar de learning rate in hyperparameter ruimte" },
          { en: "Finds which layers need different learning rates", es: "Encuentra qué capas necesitan diferentes tasas de aprendizaje", de: "Findet welche Schichten verschiedene Lernraten benötigen", nl: "Vindt welke lagen verschillende learning rates nodig hebben" },
          { en: "Determines when to change the learning rate during training", es: "Determina cuándo cambiar la tasa de aprendizaje durante entrenamiento", de: "Bestimmt wann die Lernrate während Training geändert werden soll", nl: "Bepaalt wanneer de learning rate te veranderen tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "A learning rate finder plots loss vs learning rate by exponentially increasing LR over a few epochs, identifying the range where loss decreases fastest (typically before divergence), helping choose appropriate initial learning rates.",
          es: "Un buscador de tasa de aprendizaje grafica pérdida vs tasa de aprendizaje aumentando exponencialmente LR sobre unas pocas épocas, identificando el rango donde la pérdida decrece más rápido (típicamente antes de divergencia), ayudando a elegir tasas de aprendizaje iniciales apropiadas.",
          de: "Ein Learning Rate Finder plottet Verlust vs Lernrate durch exponentielles Erhöhen der LR über wenige Epochen, identifiziert den Bereich wo Verlust am schnellsten sinkt (typisch vor Divergenz), hilft passende initiale Lernraten zu wählen.",
          nl: "Een learning rate finder plot loss vs learning rate door exponentieel LR te verhogen over een paar epochs, identificeert het bereik waar loss het snelst daalt (typisch voor divergentie), helpt passende initiële learning rates te kiezen."
        }
      },
      {
        question: {
          en: "What is stochastic depth and how does it regularize deep networks?",
          es: "¿Qué es la profundidad estocástica y cómo regulariza redes profundas?",
          de: "Was ist stochastische Tiefe und wie regularisiert sie tiefe Netzwerke?",
          nl: "Wat is stochastische diepte en hoe regulariseert het diepe netwerken?"
        },
        options: [
          { en: "Randomly drops entire layers during training while keeping them at test time, reducing overfitting in very deep networks", es: "Descarta aleatoriamente capas enteras durante entrenamiento manteniéndolas en tiempo de prueba, reduce sobreajuste", de: "Lässt zufällig ganze Schichten während Training fallen während sie bei Testzeit behalten werden, reduziert Overfitting", nl: "Laat willekeurig hele lagen vallen tijdens training terwijl ze behouden blijven bij test tijd, vermindert overfitting" },
          { en: "Randomly varying the depth of the network architecture", es: "Variar aleatoriamente la profundidad de la arquitectura de red", de: "Zufällig die Tiefe der Netzwerkarchitektur variieren", nl: "Willekeurig de diepte van de netwerkarchitectuur variëren" },
          { en: "Using stochastic processes to determine network depth", es: "Usar procesos estocásticos para determinar profundidad de red", de: "Stochastische Prozesse verwenden um Netzwerktiefe zu bestimmen", nl: "Stochastische processen gebruiken om netwerkdiepte te bepalen" },
          { en: "Adding random depth to convolutional layers", es: "Añadir profundidad aleatoria a capas convolucionales", de: "Zufällige Tiefe zu Faltungsschichten hinzufügen", nl: "Willekeurige diepte toevoegen aan convolutionele lagen" }
        ],
        correct: 0,
        explanation: {
          en: "Stochastic depth randomly skips residual blocks with linearly increasing probability toward deeper layers, implicitly training an ensemble of networks of different depths and improving gradient flow.",
          es: "La profundidad estocástica salta aleatoriamente bloques residuales con probabilidad creciente linealmente hacia capas más profundas, entrenando implícitamente un conjunto de redes de diferentes profundidades y mejorando flujo de gradiente.",
          de: "Stochastische Tiefe überspringt zufällig Residualblöcke mit linear steigender Wahrscheinlichkeit zu tieferen Schichten hin, trainiert implizit ein Ensemble von Netzwerken verschiedener Tiefen und verbessert Gradientenfluss.",
          nl: "Stochastische diepte slaat willekeurig residual blocks over met lineair toenemende waarschijnlijkheid naar diepere lagen, traint impliciet een ensemble van netwerken van verschillende dieptes en verbetert gradiënt flow."
        }
      },
      {
        question: {
          en: "What is the cosine annealing learning rate schedule?",
          es: "¿Qué es el programa de tasa de aprendizaje de annealing coseno?",
          de: "Was ist der Cosine Annealing Lernraten-Zeitplan?",
          nl: "Wat is het cosine annealing learning rate schema?"
        },
        options: [
          { en: "Decreases learning rate following a cosine curve from initial to minimum value, optionally with restarts", es: "Disminuye tasa de aprendizaje siguiendo una curva coseno de valor inicial a mínimo, opcionalmente con reinicios", de: "Verringert Lernrate entlang einer Kosinuskurve von Anfangs- zu Minimalwert, optional mit Neustarts", nl: "Vermindert learning rate volgens een cosinus curve van initiële naar minimum waarde, optioneel met herstarts" },
          { en: "Anneals the network using cosine similarity metrics", es: "Anula la red usando métricas de similitud coseno", de: "Glüht das Netzwerk mit Kosinus-Ähnlichkeitsmetriken", nl: "Annealt het netwerk met cosinus similariteitsmetrieken" },
          { en: "Applies cosine functions to the loss landscape", es: "Aplica funciones coseno al paisaje de pérdida", de: "Wendet Kosinusfunktionen auf die Verlustlandschaft an", nl: "Past cosinus functies toe op het verlieslandschap" },
          { en: "Uses cosine distance to adjust learning rates", es: "Usa distancia coseno para ajustar tasas de aprendizaje", de: "Verwendet Kosinusdistanz um Lernraten anzupassen", nl: "Gebruikt cosinus afstand om learning rates aan te passen" }
        ],
        correct: 0,
        explanation: {
          en: "Cosine annealing smoothly decreases the learning rate following a cosine function, providing gradual decay that can be restarted periodically to help escape local minima and improve generalization.",
          es: "El annealing coseno disminuye suavemente la tasa de aprendizaje siguiendo una función coseno, proporcionando decaimiento gradual que puede reiniciarse periódicamente para ayudar a escapar mínimos locales y mejorar generalización.",
          de: "Cosine Annealing verringert die Lernrate sanft entlang einer Kosinusfunktion, bietet graduellen Verfall der periodisch neu gestartet werden kann um lokale Minima zu verlassen und Generalisierung zu verbessern.",
          nl: "Cosine annealing vermindert de learning rate glad volgens een cosinus functie, biedt geleidelijk verval dat periodiek opnieuw gestart kan worden om lokale minima te ontsnappen en generalisatie te verbeteren."
        }
      },
      {
        question: {
          en: "What is the difference between instance normalization and batch normalization?",
          es: "¿Cuál es la diferencia entre normalización de instancia y normalización por lotes?",
          de: "Was ist der Unterschied zwischen Instance Normalization und Batch Normalization?",
          nl: "Wat is het verschil tussen instance normalisatie en batch normalisatie?"
        },
        options: [
          { en: "Instance normalization normalizes each sample independently while batch normalization uses batch statistics", es: "Normalización de instancia normaliza cada muestra independientemente mientras normalización por lotes usa estadísticas de lote", de: "Instance Normalization normalisiert jedes Sample unabhängig während Batch Normalization Batch-Statistiken verwendet", nl: "Instance normalisatie normaliseert elk sample onafhankelijk terwijl batch normalisatie batch statistieken gebruikt" },
          { en: "Instance normalization is faster than batch normalization", es: "Normalización de instancia es más rápida que normalización por lotes", de: "Instance Normalization ist schneller als Batch Normalization", nl: "Instance normalisatie is sneller dan batch normalisatie" },
          { en: "They are the same technique with different names", es: "Son la misma técnica con nombres diferentes", de: "Sie sind dieselbe Technik mit verschiedenen Namen", nl: "Het zijn dezelfde techniek met verschillende namen" },
          { en: "Instance normalization works only for classification tasks", es: "Normalización de instancia funciona solo para tareas de clasificación", de: "Instance Normalization funktioniert nur für Klassifikationsaufgaben", nl: "Instance normalisatie werkt alleen voor classificatietaken" }
        ],
        correct: 0,
        explanation: {
          en: "Instance normalization computes mean and variance per sample per channel, making it useful for style transfer and tasks where each sample should be normalized independently, unlike batch normalization which uses batch-wide statistics.",
          es: "La normalización de instancia calcula media y varianza por muestra por canal, haciéndola útil para transferencia de estilo y tareas donde cada muestra debería normalizarse independientemente, a diferencia de normalización por lotes que usa estadísticas de todo el lote.",
          de: "Instance Normalization berechnet Mittelwert und Varianz pro Sample pro Kanal, macht sie nützlich für Stil-Transfer und Aufgaben wo jedes Sample unabhängig normalisiert werden sollte, im Gegensatz zu Batch Normalization die batch-weite Statistiken verwendet.",
          nl: "Instance normalisatie berekent gemiddelde en variantie per sample per kanaal, maakt het nuttig voor stijltransfer en taken waar elk sample onafhankelijk genormaliseerd moet worden, in tegenstelling tot batch normalisatie die batch-brede statistieken gebruikt."
        }
      },
      {
        question: {
          en: "What is Neural Architecture Search (NAS) doing differently from manual architecture design?",
          es: "¿Qué hace Neural Architecture Search (NAS) diferente del diseño manual de arquitectura?",
          de: "Was macht Neural Architecture Search (NAS) anders als manuelles Architekturdesign?",
          nl: "Wat doet Neural Architecture Search (NAS) anders dan handmatig architectuurontwerp?"
        },
        options: [
          { en: "Automatically discovers architectures by searching through architecture space using RL, evolution, or gradient-based methods", es: "Descubre automáticamente arquitecturas buscando a través del espacio de arquitectura usando RL, evolución o métodos basados en gradientes", de: "Entdeckt automatisch Architekturen durch Suche im Architekturraum mit RL, Evolution oder gradientenbasierten Methoden", nl: "Ontdekt automatisch architecturen door te zoeken door architectuurruimte met RL, evolutie of gradiënt-gebaseerde methoden" },
          { en: "Searches for existing architectures in research papers", es: "Busca arquitecturas existentes en artículos de investigación", de: "Sucht nach existierenden Architekturen in Forschungsarbeiten", nl: "Zoekt naar bestaande architecturen in onderzoekspapers" },
          { en: "Uses neural networks to design other neural networks manually", es: "Usa redes neuronales para diseñar otras redes neuronales manualmente", de: "Verwendet neuronale Netzwerke um andere neuronale Netzwerke manuell zu entwerfen", nl: "Gebruikt neurale netwerken om andere neurale netwerken handmatig te ontwerpen" },
          { en: "Analyzes network architectures to find optimal hyperparameters", es: "Analiza arquitecturas de red para encontrar hiperparámetros óptimos", de: "Analysiert Netzwerkarchitekturen um optimale Hyperparameter zu finden", nl: "Analyseert netwerkarchitecturen om optimale hyperparameters te vinden" }
        ],
        correct: 0,
        explanation: {
          en: "NAS automates architecture design by defining a search space and using algorithms to explore it, potentially discovering novel architectures that outperform human-designed ones, though typically requiring significant computational resources.",
          es: "NAS automatiza diseño de arquitectura definiendo un espacio de búsqueda y usando algoritmos para explorarlo, potencialmente descubriendo arquitecturas novedosas que superan las diseñadas por humanos, aunque típicamente requiriendo recursos computacionales significativos.",
          de: "NAS automatisiert Architekturdesign durch Definition eines Suchraums und Verwendung von Algorithmen um ihn zu erkunden, entdeckt potenziell neuartige Architekturen die menschengemachte übertreffen, erfordert jedoch typisch erhebliche Rechenressourcen.",
          nl: "NAS automatiseert architectuurontwerp door een zoekruimte te definiëren en algoritmes te gebruiken om het te verkennen, ontdekt mogelijk nieuwe architecturen die door mensen ontworpen architecturen overtreffen, hoewel typisch aanzienlijke computationele middelen vereist."
        }
      },
      {
        question: {
          en: "What is multi-task learning and what are its benefits?",
          es: "¿Qué es el aprendizaje multi-tarea y cuáles son sus beneficios?",
          de: "Was ist Multi-Task Learning und was sind seine Vorteile?",
          nl: "Wat is multi-task learning en wat zijn de voordelen?"
        },
        options: [
          { en: "Training a single model on multiple related tasks simultaneously, enabling knowledge sharing and improved generalization", es: "Entrenar un solo modelo en múltiples tareas relacionadas simultáneamente, permitiendo compartir conocimiento y mejorar generalización", de: "Ein einzelnes Modell auf mehreren verwandten Aufgaben gleichzeitig trainieren, ermöglicht Wissensaustausch und verbesserte Generalisierung", nl: "Een enkel model trainen op meerdere gerelateerde taken tegelijkertijd, maakt kennisdeling en verbeterde generalisatie mogelijk" },
          { en: "Running multiple training tasks in parallel on different GPUs", es: "Ejecutar múltiples tareas de entrenamiento en paralelo en diferentes GPUs", de: "Mehrere Trainingsaufgaben parallel auf verschiedenen GPUs ausführen", nl: "Meerdere trainingstaken parallel uitvoeren op verschillende GPU's" },
          { en: "Training separate models for each task independently", es: "Entrenar modelos separados para cada tarea independientemente", de: "Separate Modelle für jede Aufgabe unabhängig trainieren", nl: "Aparte modellen voor elke taak onafhankelijk trainen" },
          { en: "Learning to switch between different tasks during inference", es: "Aprender a cambiar entre diferentes tareas durante inferencia", de: "Lernen zwischen verschiedenen Aufgaben während Inferenz zu wechseln", nl: "Leren om te schakelen tussen verschillende taken tijdens inferentie" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-task learning leverages shared representations across related tasks, acting as implicit regularization and enabling the model to learn more robust features that generalize better, especially when tasks share common underlying structure.",
          es: "El aprendizaje multi-tarea aprovecha representaciones compartidas entre tareas relacionadas, actuando como regularización implícita y permitiendo al modelo aprender características más robustas que generalizan mejor, especialmente cuando las tareas comparten estructura subyacente común.",
          de: "Multi-Task Learning nutzt geteilte Repräsentationen über verwandte Aufgaben, fungiert als implizite Regularisierung und ermöglicht dem Modell robustere Features zu lernen die besser generalisieren, besonders wenn Aufgaben gemeinsame zugrunde liegende Struktur teilen.",
          nl: "Multi-task learning benut gedeelde representaties over gerelateerde taken, fungeert als impliciete regularisatie en stelt het model in staat om robuustere kenmerken te leren die beter generaliseren, vooral wanneer taken gemeenschappelijke onderliggende structuur delen."
        }
      },
      {
        question: {
          en: "What is zero-shot learning in the context of deep learning?",
          es: "¿Qué es el aprendizaje zero-shot en el contexto de aprendizaje profundo?",
          de: "Was ist Zero-Shot Learning im Kontext von Deep Learning?",
          nl: "Wat is zero-shot learning in de context van deep learning?"
        },
        options: [
          { en: "Classifying or generating examples from classes never seen during training using semantic embeddings or descriptions", es: "Clasificar o generar ejemplos de clases nunca vistas durante entrenamiento usando embeddings semánticos", de: "Beispiele aus nie gesehenen Klassen klassifizieren oder generieren mit semantischen Embeddings oder Beschreibungen", nl: "Voorbeelden classificeren of genereren uit nooit geziene klassen met semantische embeddings of beschrijvingen" },
          { en: "Learning without any training examples at all", es: "Aprender sin ningún ejemplo de entrenamiento en absoluto", de: "Lernen ohne jegliche Trainingsbeispiele", nl: "Leren zonder enige trainingsvoorbeelden" },
          { en: "Training models with zero gradient updates", es: "Entrenar modelos con cero actualizaciones de gradiente", de: "Modelle mit null Gradientenaktualisierungen trainieren", nl: "Modellen trainen met nul gradiënt updates" },
          { en: "Initializing all weights to zero before training", es: "Inicializar todos los pesos a cero antes de entrenamiento", de: "Alle Gewichte vor Training auf null initialisieren", nl: "Alle gewichten initialiseren naar nul voor training" }
        ],
        correct: 0,
        explanation: {
          en: "Zero-shot learning enables models to recognize or generate instances of classes not present in the training set by leveraging auxiliary information like attributes, descriptions, or relationships in a semantic space.",
          es: "El aprendizaje zero-shot permite a modelos reconocer o generar instancias de clases no presentes en el conjunto de entrenamiento aprovechando información auxiliar como atributos, descripciones o relaciones en un espacio semántico.",
          de: "Zero-Shot Learning ermöglicht Modellen Instanzen von Klassen zu erkennen oder zu generieren die nicht im Trainingssatz vorhanden sind durch Nutzung von Hilfsinformationen wie Attributen, Beschreibungen oder Beziehungen in einem semantischen Raum.",
          nl: "Zero-shot learning stelt modellen in staat om instanties van klassen te herkennen of te genereren die niet aanwezig zijn in de trainingsset door gebruik te maken van hulpinformatie zoals attributen, beschrijvingen of relaties in een semantische ruimte."
        }
      },
      {
        question: {
          en: "What is continual/lifelong learning and what challenge does it address?",
          es: "¿Qué es el aprendizaje continuo/de por vida y qué desafío aborda?",
          de: "Was ist kontinuierliches/lebenslanges Lernen und welche Herausforderung adressiert es?",
          nl: "Wat is continue/levenslang leren en welke uitdaging pakt het aan?"
        },
        options: [
          { en: "Learning new tasks sequentially without forgetting previous ones, addressing catastrophic forgetting", es: "Aprender nuevas tareas secuencialmente sin olvidar las previas, abordando olvido catastrófico", de: "Neue Aufgaben sequenziell lernen ohne vorherige zu vergessen, adressiert katastrophales Vergessen", nl: "Nieuwe taken sequentieel leren zonder vorige te vergeten, pakt catastrofaal vergeten aan" },
          { en: "Training models continuously without stopping", es: "Entrenar modelos continuamente sin parar", de: "Modelle kontinuierlich trainieren ohne anzuhalten", nl: "Modellen continu trainen zonder te stoppen" },
          { en: "Learning throughout the entire lifetime of the application", es: "Aprender durante toda la vida de la aplicación", de: "Während der gesamten Lebensdauer der Anwendung lernen", nl: "Leren gedurende de hele levensduur van de applicatie" },
          { en: "Continuously updating model parameters during deployment", es: "Actualizar continuamente parámetros del modelo durante despliegue", de: "Modellparameter während Deployment kontinuierlich aktualisieren", nl: "Modelparameters continu bijwerken tijdens deployment" }
        ],
        correct: 0,
        explanation: {
          en: "Continual learning aims to learn from a stream of tasks while retaining knowledge from previous tasks, combating catastrophic forgetting through techniques like elastic weight consolidation, replay buffers, or parameter isolation.",
          es: "El aprendizaje continuo apunta a aprender de un flujo de tareas mientras retiene conocimiento de tareas previas, combatiendo olvido catastrófico a través de técnicas como consolidación elástica de pesos, buffers de replay o aislamiento de parámetros.",
          de: "Kontinuierliches Lernen zielt darauf ab aus einem Strom von Aufgaben zu lernen während Wissen aus vorherigen Aufgaben beibehalten wird, bekämpft katastrophales Vergessen durch Techniken wie elastische Gewichtskonsolidierung, Replay-Buffer oder Parameterisolierung.",
          nl: "Continue leren streeft ernaar te leren van een stroom van taken terwijl kennis van vorige taken behouden blijft, bestrijdt catastrofaal vergeten door technieken zoals elastische gewichtsconsolidatie, replay buffers of parameter isolatie."
        }
      },
      {
        question: {
          en: "What is focal loss and what problem does it solve?",
          es: "¿Qué es la pérdida focal y qué problema resuelve?",
          de: "Was ist Focal Loss und welches Problem löst es?",
          nl: "Wat is focal loss en welk probleem lost het op?"
        },
        options: [
          { en: "Addresses class imbalance by down-weighting easy examples and focusing training on hard negatives", es: "Aborda desbalance de clases reduciendo peso de ejemplos fáciles y enfocando entrenamiento en negativos difíciles", de: "Adressiert Klassenungleichgewicht durch Heruntergewichten einfacher Beispiele und Fokussierung des Trainings auf schwere Negative", nl: "Pakt klasse onbalans aan door gemakkelijke voorbeelden minder zwaar te wegen en training te focussen op moeilijke negatieven" },
          { en: "Focuses the loss function on specific regions of images", es: "Enfoca la función de pérdida en regiones específicas de imágenes", de: "Fokussiert die Verlustfunktion auf spezifische Bildregionen", nl: "Focust de loss functie op specifieke regio's van beelden" },
          { en: "Sharpens the focus of neural attention mechanisms", es: "Agudiza el enfoque de mecanismos de atención neuronal", de: "Schärft den Fokus neuronaler Aufmerksamkeitsmechanismen", nl: "Scherpt de focus van neurale attention mechanismen aan" },
          { en: "Calculates loss at focal points in the network", es: "Calcula pérdida en puntos focales de la red", de: "Berechnet Verlust an Fokuspunkten im Netzwerk", nl: "Berekent loss op focale punten in het netwerk" }
        ],
        correct: 0,
        explanation: {
          en: "Focal loss modifies cross-entropy by adding a factor (1-p_t)^γ that reduces the loss contribution from well-classified examples, forcing the model to focus on hard, misclassified examples particularly useful in object detection with extreme class imbalance.",
          es: "La pérdida focal modifica entropía cruzada añadiendo un factor (1-p_t)^γ que reduce la contribución de pérdida de ejemplos bien clasificados, forzando al modelo a enfocarse en ejemplos difíciles mal clasificados particularmente útil en detección de objetos con desbalance de clase extremo.",
          de: "Focal Loss modifiziert Kreuzentropie durch Hinzufügen eines Faktors (1-p_t)^γ der den Verlustbeitrag gut klassifizierter Beispiele reduziert, zwingt das Modell sich auf schwere fehlklassifizierte Beispiele zu konzentrieren besonders nützlich bei Objekterkennung mit extremem Klassenungleichgewicht.",
          nl: "Focal loss wijzigt cross-entropy door een factor (1-p_t)^γ toe te voegen die de loss bijdrage van goed geclassificeerde voorbeelden vermindert, dwingt het model om te focussen op moeilijke verkeerd geclassificeerde voorbeelden bijzonder nuttig bij objectdetectie met extreme klasse onbalans."
        }
      },
      {
        question: {
          en: "What is the purpose of temperature scaling in neural networks?",
          es: "¿Cuál es el propósito del escalado de temperatura en redes neuronales?",
          de: "Was ist der Zweck von Temperature Scaling in neuronalen Netzwerken?",
          nl: "Wat is het doel van temperature scaling in neurale netwerken?"
        },
        options: [
          { en: "Calibrates model confidence by dividing logits by temperature T before softmax, improving probability estimates", es: "Calibra confianza del modelo dividiendo logits por temperatura T antes de softmax, mejorando estimaciones de probabilidad", de: "Kalibriert Modellvertrauen durch Teilen von Logits durch Temperatur T vor Softmax, verbessert Wahrscheinlichkeitsschätzungen", nl: "Kalibreert modelvertrouwen door logits te delen door temperatuur T voor softmax, verbetert waarschijnlijkheidsschattingen" },
          { en: "Prevents the network from overheating during training", es: "Previene que la red se sobrecaliente durante entrenamiento", de: "Verhindert Überhitzung des Netzwerks während Training", nl: "Voorkomt dat het netwerk oververhit raakt tijdens training" },
          { en: "Scales the learning rate based on training temperature", es: "Escala la tasa de aprendizaje basada en temperatura de entrenamiento", de: "Skaliert die Lernrate basierend auf Trainingstemperatur", nl: "Schaalt de learning rate gebaseerd op trainingstemperatuur" },
          { en: "Adjusts network weights based on computational temperature", es: "Ajusta pesos de red basado en temperatura computacional", de: "Passt Netzwerkgewichte basierend auf Rechentemperatur an", nl: "Past netwerkgewichten aan gebaseerd op computationele temperatuur" }
        ],
        correct: 0,
        explanation: {
          en: "Temperature scaling divides logits by T>1 to soften probability distributions (making predictions less confident) or T<1 to sharpen them, often used in knowledge distillation and to calibrate overconfident models.",
          es: "El escalado de temperatura divide logits por T>1 para suavizar distribuciones de probabilidad (haciendo predicciones menos confiadas) o T<1 para agudizarlas, frecuentemente usado en destilación de conocimiento y para calibrar modelos demasiado confiados.",
          de: "Temperature Scaling teilt Logits durch T>1 um Wahrscheinlichkeitsverteilungen zu glätten (macht Vorhersagen weniger confident) oder T<1 um sie zu schärfen, oft verwendet in Knowledge Distillation und um overconfidente Modelle zu kalibrieren.",
          nl: "Temperature scaling deelt logits door T>1 om waarschijnlijkheidsverdelingen te verzachten (maakt voorspellingen minder zelfverzekerd) of T<1 om ze te verscherpen, vaak gebruikt in knowledge distillation en om overconfident modellen te kalibreren."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();