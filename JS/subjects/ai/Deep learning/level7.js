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
          { en: "When the generator produces limited diversity by focusing on few modes of the data distribution, prevented by techniques like unrolled GANs or WGAN", es: "Cuando el generador produce diversidad limitada enfocándose en pocos modos de la distribución de datos, prevenido por técnicas como GANs desenrolladas o WGAN", de: "Wenn der Generator begrenzte Diversität produziert durch Fokus auf wenige Modi der Datenverteilung, verhindert durch Techniken wie unrolled GANs oder WGAN", nl: "Wanneer de generator beperkte diversiteit produceert door zich te richten op weinig modi van de dataverdeling, voorkomen door technieken zoals unrolled GANs of WGAN" },
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
          { en: "It learns to reconstruct clean data from corrupted inputs, forcing the network to learn meaningful representations rather than memorizing", es: "Aprende a reconstruir datos limpios de entradas corruptas, forzando la red a aprender representaciones significativas en lugar de memorizar", de: "Es lernt saubere Daten aus beschädigten Eingaben zu rekonstruieren, zwingt das Netzwerk bedeutungsvolle Repräsentationen zu lernen anstatt zu memorieren", nl: "Het leert schone data te reconstrueren uit beschadigde inputs, dwingt het netwerk om betekenisvolle representaties te leren in plaats van memoriseren" },
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
          { en: "Conditions both generator and discriminator on additional information like class labels to control what type of data is generated", es: "Condiciona tanto generador como discriminador en información adicional como etiquetas de clase para controlar qué tipo de datos se genera", de: "Konditioniert sowohl Generator als auch Discriminator auf zusätzliche Informationen wie Klassenlabels um zu kontrollieren welche Art von Daten generiert wird", nl: "Conditioneert zowel generator als discriminator op aanvullende informatie zoals klasselabels om te controleren welk type data wordt gegenereerd" },
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
          { en: "β-VAE uses a weighted KL divergence term (β > 1) to encourage disentangled latent factors, trading reconstruction quality for interpretability", es: "β-VAE usa un término de divergencia KL ponderado (β > 1) para alentar factores latentes desenredados, intercambiando calidad de reconstrucción por interpretabilidad", de: "β-VAE verwendet einen gewichteten KL-Divergenz-Term (β > 1) um entwirrte latente Faktoren zu fördern, tauscht Rekonstruktionsqualität gegen Interpretierbarkeit", nl: "β-VAE gebruikt een gewogen KL divergentie term (β > 1) om ontwards latente factoren aan te moedigen, ruilt reconstructiekwaliteit voor interpreteerbaarheid" },
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
          { en: "Enables unpaired image-to-image translation using cycle consistency loss to learn mappings between domains without paired training data", es: "Permite traducción imagen-a-imagen no emparejada usando pérdida de consistencia cíclica para aprender mapeos entre dominios sin datos de entrenamiento emparejados", de: "Ermöglicht ungepaarte Bild-zu-Bild-Übersetzung mit Zykluskonsisenzverlust um Mappings zwischen Domänen ohne gepaarte Trainingsdaten zu lernen", nl: "Maakt ongepaarde beeld-naar-beeld vertaling mogelijk met behulp van cyclus consistentie verlies om mappings tussen domeinen te leren zonder gepaarde trainingsdata" },
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
          { en: "Gradually grows generator and discriminator networks from low to high resolution during training, improving stability and final image quality", es: "Gradualmente hace crecer redes generador y discriminador de baja a alta resolución durante entrenamiento, mejorando estabilidad y calidad final de imagen", de: "Lässt Generator- und Discriminator-Netzwerke während des Trainings graduell von niedriger zu hoher Auflösung wachsen, verbessert Stabilität und finale Bildqualität", nl: "Laat generator en discriminator netwerken geleidelijk groeien van lage naar hoge resolutie tijdens training, verbetert stabiliteit en finale beeldkwaliteit" },
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
          { en: "Uses style-based generator architecture with adaptive instance normalization to enable fine-grained control over generated image attributes", es: "Usa arquitectura de generador basada en estilo con normalización de instancia adaptativa para permitir control fino sobre atributos de imagen generada", de: "Verwendet stilbasierte Generator-Architektur mit adaptiver Instanznormalisierung um feinkörnige Kontrolle über generierte Bildattribute zu ermöglichen", nl: "Gebruikt stijl-gebaseerde generator architectuur met adaptieve instance normalisatie om fijnmazige controle over gegenereerde beeldkenmerken mogelijk te maken" },
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
          { en: "Constrains the Lipschitz constant of the discriminator by normalizing weights with their spectral norm, ensuring stable gradients", es: "Restringe la constante de Lipschitz del discriminador normalizando pesos con su norma espectral, asegurando gradientes estables", de: "Beschränkt die Lipschitz-Konstante des Discriminators durch Normalisierung der Gewichte mit ihrer Spektralnorm, gewährleistet stabile Gradienten", nl: "Beperkt de Lipschitz constante van de discriminator door gewichten te normaliseren met hun spectrale norm, zorgt voor stabiele gradiënten" },
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
          { en: "Uses discrete latent representations through vector quantization instead of continuous latent variables, avoiding posterior collapse", es: "Usa representaciones latentes discretas a través de cuantización vectorial en lugar de variables latentes continuas, evitando colapso posterior", de: "Verwendet diskrete latente Repräsentationen durch Vektorquantisierung anstatt kontinuierlicher latenter Variablen, vermeidet posterioren Kollaps", nl: "Gebruikt discrete latente representaties door vector kwantisatie in plaats van continue latente variabelen, vermijdt posterior collapse" },
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
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level7;
  } else if (typeof window !== 'undefined') {
    window.level7 = level7;
  }
})();