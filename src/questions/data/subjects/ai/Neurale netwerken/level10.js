// Neural Networks Quiz - Level 10: Research Frontiers and Advanced Topics
(function() {
  const level10 = {
    name: {
      en: "Research Frontiers and Advanced Topics",
      es: "Fronteras de Investigación y Temas Avanzados",
      de: "Forschungsgrenzen und Erweiterte Themen",
      nl: "Onderzoeksgrenzen en Geavanceerde Onderwerpen"
    },
    questions: [
      {
        question: {
          en: "What is the key innovation behind Neural Architecture Search (NAS)?",
          es: "¿Cuál es la innovación clave detrás de Neural Architecture Search (NAS)?",
          de: "Was ist die Schlüsselinnovation hinter Neural Architecture Search (NAS)?",
          nl: "Wat is de belangrijkste innovatie achter Neural Architecture Search (NAS)?"
        },
        options: [
          { en: "Automatically discover optimal network architectures using machine learning", es: "Descubrir automáticamente arquitecturas de red óptimas usando aprendizaje automático", de: "Automatisch optimale Netzwerkarchitekturen mit maschinellem Lernen entdecken", nl: "Automatisch optimale netwerkarchitecturen ontdekken met machine learning" },
          { en: "Manually design architectures based on domain expertise", es: "Diseñar manualmente arquitecturas basadas en expertise de dominio", de: "Manuell Architekturen basierend auf Domänen-Expertise entwerfen", nl: "Handmatig architecturen ontwerpen gebaseerd op domeinexpertise" },
          { en: "Use pre-defined templates for all network designs", es: "Usar plantillas predefinidas para todos los diseños de red", de: "Vordefinierte Vorlagen für alle Netzwerkdesigns verwenden", nl: "Voorgedefinieerde sjablonen gebruiken voor alle netwerkontwerpen" },
          { en: "Copy architectures from successful existing models", es: "Copiar arquitecturas de modelos existentes exitosos", de: "Architekturen von erfolgreichen bestehenden Modellen kopieren", nl: "Architecturen kopiëren van succesvolle bestaande modellen" }
        ],
        correct: 0,
        explanation: {
          en: "NAS uses algorithms like reinforcement learning, evolutionary algorithms, or differentiable search to automatically explore and discover network architectures that achieve optimal performance for specific tasks, eliminating the need for manual architecture design.",
          es: "NAS usa algoritmos como aprendizaje por refuerzo, algoritmos evolutivos o búsqueda diferenciable para explorar y descubrir automáticamente arquitecturas de red que logren rendimiento óptimo para tareas específicas, eliminando la necesidad de diseño manual de arquitectura.",
          de: "NAS verwendet Algorithmen wie Verstärkungslernen, evolutionäre Algorithmen oder differenzierbare Suche um automatisch Netzwerkarchitekturen zu erkunden und zu entdecken die optimale Leistung für spezifische Aufgaben erreichen, eliminiert die Notwendigkeit für manuelles Architekturdesign.",
          nl: "NAS gebruikt algoritmen zoals reinforcement learning, evolutionaire algoritmen of differentieerbare zoektocht om automatisch netwerkarchitecturen te verkennen en ontdekken die optimale prestaties behalen voor specifieke taken, waardoor de noodzaak voor handmatig architectuurontwerp wordt weggenomen."
        }
      },
      {
        question: {
          en: "What is the main concept behind Federated Learning?",
          es: "¿Cuál es el concepto principal detrás del Aprendizaje Federado?",
          de: "Was ist das Hauptkonzept hinter Federated Learning?",
          nl: "Wat is het hoofdconcept achter Federated Learning?"
        },
        options: [
          { en: "Train models across decentralized data sources without sharing raw data", es: "Entrenar modelos a través de fuentes de datos descentralizadas sin compartir datos crudos", de: "Modelle über dezentrale Datenquellen trainieren ohne Rohdaten zu teilen", nl: "Modellen trainen over gedecentraliseerde databronnen zonder ruwe data te delen" },
          { en: "Combine multiple pre-trained models into one ensemble", es: "Combinar múltiples modelos pre-entrenados en un ensamble", de: "Mehrere vortrainierte Modelle zu einem Ensemble kombinieren", nl: "Meerdere voorgetrainde modellen combineren tot één ensemble" },
          { en: "Distribute training across multiple GPUs in a single machine", es: "Distribuir entrenamiento a través de múltiples GPUs en una sola máquina", de: "Training über mehrere GPUs in einer einzelnen Maschine verteilen", nl: "Training verdelen over meerdere GPU's in één machine" },
          { en: "Use federal government regulations to guide AI development", es: "Usar regulaciones del gobierno federal para guiar el desarrollo de IA", de: "Bundesregulierungen zur Anleitung der KI-Entwicklung verwenden", nl: "Federale overheidsregulaties gebruiken om AI-ontwikkeling te sturen" }
        ],
        correct: 0,
        explanation: {
          en: "Federated Learning enables training machine learning models across distributed datasets without centralizing the data. Each participant trains locally and only shares model updates, preserving privacy while enabling collaborative learning.",
          es: "El Aprendizaje Federado permite entrenar modelos de aprendizaje automático a través de conjuntos de datos distribuidos sin centralizar los datos. Cada participante entrena localmente y solo comparte actualizaciones del modelo, preservando privacidad mientras habilita aprendizaje colaborativo.",
          de: "Federated Learning ermöglicht das Training von maschinellen Lernmodellen über verteilte Datensätze ohne Zentralisierung der Daten. Jeder Teilnehmer trainiert lokal und teilt nur Modell-Updates, erhält Privatsphäre während kollaboratives Lernen ermöglicht wird.",
          nl: "Federated Learning maakt het mogelijk om machine learning-modellen te trainen over gedistribueerde datasets zonder de data te centraliseren. Elke deelnemer traint lokaal en deelt alleen modelupdates, waardoor privacy wordt behouden terwijl collaboratief leren mogelijk wordt."
        }
      },
      {
        question: {
          en: "What is a key characteristic of Self-Supervised Learning?",
          es: "¿Cuál es una característica clave del Aprendizaje Auto-Supervisado?",
          de: "Was ist ein Schlüsselmerkmal von Self-Supervised Learning?",
          nl: "Wat is een belangrijk kenmerk van Self-Supervised Learning?"
        },
        options: [
          { en: "Learning representations from unlabeled data by predicting parts of the input", es: "Aprender representaciones de datos sin etiquetar prediciendo partes de la entrada", de: "Repräsentationen aus ungelabelten Daten lernen durch Vorhersage von Eingabeteilen", nl: "Representaties leren van ongelabelde data door delen van de invoer te voorspellen" },
          { en: "Training models to supervise their own learning without human intervention", es: "Entrenar modelos para supervisar su propio aprendizaje sin intervención humana", de: "Modelle trainieren um ihr eigenes Lernen ohne menschliche Intervention zu überwachen", nl: "Modellen trainen om hun eigen leren te superviseren zonder menselijke interventie" },
          { en: "Using reinforcement learning with self-generated rewards", es: "Usar aprendizaje por refuerzo con recompensas auto-generadas", de: "Verstärkungslernen mit selbst-generierten Belohnungen verwenden", nl: "Reinforcement learning gebruiken met zelf-gegenereerde beloningen" },
          { en: "Learning only from synthetic or artificially generated data", es: "Aprender solo de datos sintéticos o artificialmente generados", de: "Nur von synthetischen oder künstlich generierten Daten lernen", nl: "Alleen leren van synthetische of kunstmatig gegenereerde data" }
        ],
        correct: 0,
        explanation: {
          en: "Self-supervised learning creates supervisory signals from the data itself, such as predicting masked words in text, future frames in video, or rotated versions of images. This enables learning rich representations without manual labeling.",
          es: "El aprendizaje auto-supervisado crea señales supervisoras de los datos mismos, como predecir palabras enmascaradas en texto, frames futuros en video, o versiones rotadas de imágenes. Esto permite aprender representaciones ricas sin etiquetado manual.",
          de: "Self-Supervised Learning erstellt Überwachungssignale aus den Daten selbst, wie Vorhersage maskierter Wörter in Text, zukünftiger Frames in Video oder rotierter Versionen von Bildern. Dies ermöglicht das Lernen reicher Repräsentationen ohne manuelles Labeling.",
          nl: "Self-supervised learning creëert supervisiesignalen vanuit de data zelf, zoals het voorspellen van gemaskeerde woorden in tekst, toekomstige frames in video, of geroteerde versies van beelden. Dit maakt het mogelijk rijke representaties te leren zonder handmatige labeling."
        }
      },
      {
        question: {
          en: "What is the primary goal of Continual Learning (Lifelong Learning)?",
          es: "¿Cuál es el objetivo principal del Aprendizaje Continuo (Aprendizaje de por Vida)?",
          de: "Was ist das Hauptziel von Continual Learning (Lebenslanges Lernen)?",
          nl: "Wat is het hoofddoel van Continual Learning (Levenslang Leren)?"
        },
        options: [
          { en: "Learn new tasks sequentially without forgetting previous knowledge", es: "Aprender nuevas tareas secuencialmente sin olvidar conocimiento previo", de: "Neue Aufgaben sequenziell lernen ohne vorheriges Wissen zu vergessen", nl: "Nieuwe taken sequentieel leren zonder vorige kennis te vergeten" },
          { en: "Continuously update the learning rate during training", es: "Actualizar continuamente la tasa de aprendizaje durante entrenamiento", de: "Lernrate während des Trainings kontinuierlich aktualisieren", nl: "Leersnelheid continu bijwerken tijdens training" },
          { en: "Train models that never stop learning from new data", es: "Entrenar modelos que nunca dejan de aprender de nuevos datos", de: "Modelle trainieren die nie aufhören von neuen Daten zu lernen", nl: "Modellen trainen die nooit stoppen met leren van nieuwe data" },
          { en: "Create models that learn throughout their entire operational lifetime", es: "Crear modelos que aprendan durante toda su vida operativa", de: "Modelle erstellen die während ihrer gesamten Betriebszeit lernen", nl: "Modellen creëren die gedurende hun hele operationele levensduur leren" }
        ],
        correct: 0,
        explanation: {
          en: "Continual learning addresses catastrophic forgetting by enabling models to learn new tasks while retaining knowledge from previous tasks. This is crucial for building AI systems that can adapt to new environments and requirements over time.",
          es: "El aprendizaje continuo aborda el olvido catastrófico permitiendo a los modelos aprender nuevas tareas mientras retienen conocimiento de tareas previas. Esto es crucial para construir sistemas de IA que puedan adaptarse a nuevos entornos y requerimientos con el tiempo.",
          de: "Continual Learning adressiert katastrophales Vergessen durch Ermöglichung von Modellen neue Aufgaben zu lernen während Wissen von vorherigen Aufgaben erhalten bleibt. Dies ist entscheidend für den Aufbau von KI-Systemen die sich an neue Umgebungen und Anforderungen über Zeit anpassen können.",
          nl: "Continual learning pakt catastrofaal vergeten aan door modellen in staat te stellen nieuwe taken te leren terwijl kennis van vorige taken behouden blijft. Dit is cruciaal voor het bouwen van AI-systemen die zich kunnen aanpassen aan nieuwe omgevingen en vereisten over tijd."
        }
      },
      {
        question: {
          en: "What is the main innovation of Meta-Learning (Learning to Learn)?",
          es: "¿Cuál es la principal innovación del Meta-Aprendizaje (Aprender a Aprender)?",
          de: "Was ist die Hauptinnovation von Meta-Learning (Lernen zu Lernen)?",
          nl: "Wat is de belangrijkste innovatie van Meta-Learning (Leren om te Leren)?"
        },
        options: [
          { en: "Train models to quickly adapt to new tasks with minimal examples", es: "Entrenar modelos para adaptarse rápidamente a nuevas tareas con ejemplos mínimos", de: "Modelle trainieren um sich schnell an neue Aufgaben mit minimalen Beispielen anzupassen", nl: "Modellen trainen om zich snel aan te passen aan nieuwe taken met minimale voorbeelden" },
          { en: "Use metadata to improve training efficiency", es: "Usar metadatos para mejorar eficiencia de entrenamiento", de: "Metadaten zur Verbesserung der Trainingseffizienz verwenden", nl: "Metadata gebruiken om trainingsefficiëntie te verbeteren" },
          { en: "Learn about the learning process itself through introspection", es: "Aprender sobre el proceso de aprendizaje mismo a través de introspección", de: "Über den Lernprozess selbst durch Introspektion lernen", nl: "Leren over het leerproces zelf door introspectie" },
          { en: "Combine multiple learning algorithms into one meta-algorithm", es: "Combinar múltiples algoritmos de aprendizaje en un meta-algoritmo", de: "Mehrere Lernalgorithmen zu einem Meta-Algorithmus kombinieren", nl: "Meerdere leeralgoritmen combineren tot één meta-algoritme" }
        ],
        correct: 0,
        explanation: {
          en: "Meta-learning focuses on learning algorithms that can quickly adapt to new tasks with few examples (few-shot learning). The model learns general strategies for learning across different tasks, enabling rapid adaptation to novel scenarios.",
          es: "El meta-aprendizaje se enfoca en algoritmos de aprendizaje que pueden adaptarse rápidamente a nuevas tareas con pocos ejemplos (aprendizaje de pocos disparos). El modelo aprende estrategias generales para aprender a través de diferentes tareas, habilitando adaptación rápida a escenarios nuevos.",
          de: "Meta-Learning konzentriert sich auf Lernalgorithmen die sich schnell an neue Aufgaben mit wenigen Beispielen anpassen können (Few-Shot Learning). Das Modell lernt allgemeine Strategien für das Lernen über verschiedene Aufgaben hinweg und ermöglicht schnelle Anpassung an neue Szenarien.",
          nl: "Meta-learning richt zich op leeralgoritmen die zich snel kunnen aanpassen aan nieuwe taken met weinig voorbeelden (few-shot learning). Het model leert algemene strategieën voor leren over verschillende taken heen, waardoor snelle aanpassing aan nieuwe scenario's mogelijk wordt."
        }
      },
      {
        question: {
          en: "What is Mixture of Experts (MoE) architecture designed to achieve?",
          es: "¿Qué está diseñada a lograr la arquitectura Mixture of Experts (MoE)?",
          de: "Was soll die Mixture of Experts (MoE) Architektur erreichen?",
          nl: "Wat is de Mixture of Experts (MoE) architectuur ontworpen om te bereiken?"
        },
        options: [
          { en: "Scale model capacity efficiently by using only relevant expert networks for each input", es: "Escalar capacidad del modelo eficientemente usando solo redes expertas relevantes para cada entrada", de: "Modellkapazität effizient skalieren durch Verwendung nur relevanter Experten-Netzwerke für jede Eingabe", nl: "Modelcapaciteit efficiënt schalen door alleen relevante expertnetwerken te gebruiken voor elke invoer" },
          { en: "Combine predictions from multiple independent expert models", es: "Combinar predicciones de múltiples modelos expertos independientes", de: "Vorhersagen von mehreren unabhängigen Experten-Modellen kombinieren", nl: "Voorspellingen van meerdere onafhankelijke expertmodellen combineren" },
          { en: "Train separate models for each domain expert", es: "Entrenar modelos separados para cada experto de dominio", de: "Separate Modelle für jeden Domänen-Experten trainieren", nl: "Afzonderlijke modellen trainen voor elke domeinexpert" },
          { en: "Use expert knowledge to manually design network architectures", es: "Usar conocimiento experto para diseñar manualmente arquitecturas de red", de: "Expertenwissen zur manuellen Gestaltung von Netzwerkarchitekturen verwenden", nl: "Expertkennis gebruiken om netwerkarchitecturen handmatig te ontwerpen" }
        ],
        correct: 0,
        explanation: {
          en: "MoE uses a gating network to route inputs to relevant expert sub-networks, allowing models to scale capacity while keeping computational cost manageable. Only a subset of experts are activated for each input, enabling efficient scaling.",
          es: "MoE usa una red de compuerta para dirigir entradas a sub-redes expertas relevantes, permitiendo a los modelos escalar capacidad mientras mantienen costo computacional manejable. Solo un subconjunto de expertos se activa para cada entrada, habilitando escalado eficiente.",
          de: "MoE verwendet ein Gating-Netzwerk um Eingaben an relevante Experten-Subnetzwerke zu leiten, ermöglicht Modellen Kapazität zu skalieren während Rechenkosten handhabbar bleiben. Nur eine Teilmenge von Experten wird für jede Eingabe aktiviert und ermöglicht effiziente Skalierung.",
          nl: "MoE gebruikt een gating-netwerk om invoer te routeren naar relevante expert-subnetwerken, waardoor modellen capaciteit kunnen schalen terwijl rekenkosten beheersbaar blijven. Alleen een subset van experts wordt geactiveerd voor elke invoer, wat efficiënte schaling mogelijk maakt."
        }
      },
      {
        question: {
          en: "What is the key principle behind Diffusion Models for generation?",
          es: "¿Cuál es el principio clave detrás de los Modelos de Difusión para generación?",
          de: "Was ist das Schlüsselprinzip hinter Diffusions-Modellen für Generierung?",
          nl: "Wat is het kernprincipe achter Diffusiemodellen voor generatie?"
        },
        options: [
          { en: "Learn to reverse a gradual noise addition process to generate data", es: "Aprender a revertir un proceso gradual de adición de ruido para generar datos", de: "Lernen einen graduellen Rausch-Hinzufügungsprozess umzukehren um Daten zu generieren", nl: "Leren om een geleidelijk ruistoevoegingsproces om te keren om data te genereren" },
          { en: "Diffuse information across different layers of the network", es: "Difundir información a través de diferentes capas de la red", de: "Informationen über verschiedene Schichten des Netzwerks verteilen", nl: "Informatie verspreiden over verschillende lagen van het netwerk" },
          { en: "Generate data by diffusing latent representations", es: "Generar datos difundiendo representaciones latentes", de: "Daten durch Diffusion latenter Repräsentationen generieren", nl: "Data genereren door latente representaties te verspreiden" },
          { en: "Use molecular diffusion principles in neural computation", es: "Usar principios de difusión molecular en computación neural", de: "Molekulare Diffusionsprinzipien in neuraler Berechnung verwenden", nl: "Moleculaire diffusieprincipes gebruiken in neurale berekening" }
        ],
        correct: 0,
        explanation: {
          en: "Diffusion models learn to generate data by reversing a forward diffusion process that gradually adds noise to real data. The model learns to denoise data step by step, eventually generating new samples from pure noise.",
          es: "Los modelos de difusión aprenden a generar datos revirtiendo un proceso de difusión hacia adelante que gradualmente agrega ruido a datos reales. El modelo aprende a quitar ruido de datos paso a paso, eventualmente generando nuevas muestras de ruido puro.",
          de: "Diffusions-Modelle lernen Daten zu generieren durch Umkehrung eines Vorwärts-Diffusionsprozesses der schrittweise Rauschen zu echten Daten hinzufügt. Das Modell lernt Daten Schritt für Schritt zu entrauschen und generiert schließlich neue Proben aus reinem Rauschen.",
          nl: "Diffusiemodellen leren data te genereren door een voorwaarts diffusieproces om te keren dat geleidelijk ruis toevoegt aan echte data. Het model leert data stap voor stap te ontruisen, en genereert uiteindelijk nieuwe samples vanuit pure ruis."
        }
      },
      {
        question: {
          en: "What is the main advantage of Neural Radiance Fields (NeRF)?",
          es: "¿Cuál es la principal ventaja de Neural Radiance Fields (NeRF)?",
          de: "Was ist der Hauptvorteil von Neural Radiance Fields (NeRF)?",
          nl: "Wat is het belangrijkste voordeel van Neural Radiance Fields (NeRF)?"
        },
        options: [
          { en: "Generate photorealistic novel views of 3D scenes from limited 2D images", es: "Generar vistas nuevas fotorealistas de escenas 3D desde imágenes 2D limitadas", de: "Fotorealistische neue Ansichten von 3D-Szenen aus begrenzten 2D-Bildern generieren", nl: "Fotorealistische nieuwe weergaven van 3D-scènes genereren vanuit beperkte 2D-beelden" },
          { en: "Compress neural networks using radiance-based techniques", es: "Comprimir redes neuronales usando técnicas basadas en radiancia", de: "Neurale Netzwerke mit radianz-basierten Techniken komprimieren", nl: "Neurale netwerken comprimeren met op straling gebaseerde technieken" },
          { en: "Create neural networks that emit light for visualization", es: "Crear redes neuronales que emiten luz para visualización", de: "Neurale Netzwerke erstellen die Licht für Visualisierung emittieren", nl: "Neurale netwerken creëren die licht uitstralen voor visualisatie" },
          { en: "Model electromagnetic radiation patterns in neural architectures", es: "Modelar patrones de radiación electromagnética en arquitecturas neurales", de: "Elektromagnetische Strahlungsmuster in neuralen Architekturen modellieren", nl: "Elektromagnetische stralingspatronen modelleren in neurale architecturen" }
        ],
        correct: 0,
        explanation: {
          en: "NeRF represents scenes as continuous 5D neural radiance fields, encoding both spatial coordinates and viewing directions. This enables rendering photorealistic novel views of complex 3D scenes from sparse input views, revolutionizing 3D scene reconstruction.",
          es: "NeRF representa escenas como campos de radiancia neurales 5D continuos, codificando tanto coordenadas espaciales como direcciones de vista. Esto permite renderizar vistas nuevas fotorealistas de escenas 3D complejas desde vistas de entrada dispersas, revolucionando la reconstrucción de escenas 3D.",
          de: "NeRF repräsentiert Szenen als kontinuierliche 5D neurale Radianz-Felder und kodiert sowohl räumliche Koordinaten als auch Blickrichtungen. Dies ermöglicht Rendering fotorealistischer neuer Ansichten komplexer 3D-Szenen aus spärlichen Eingabeansichten und revolutioniert 3D-Szenenrekonstruktion.",
          nl: "NeRF representeert scènes als continue 5D neurale stralingsvelderr, die zowel ruimtelijke coördinaten als kijkrichtingen coderen. Dit maakt het mogelijk om fotorealistische nieuwe weergaven van complexe 3D-scènes te renderen vanuit schaarse invoerweergaven, wat 3D-scènereconstructie revolutioneert."
        }
      },
      {
        question: {
          en: "What is the primary contribution of Graph Neural Networks (GNNs)?",
          es: "¿Cuál es la contribución principal de las Graph Neural Networks (GNNs)?",
          de: "Was ist der Hauptbeitrag von Graph Neural Networks (GNNs)?",
          nl: "Wat is de belangrijkste bijdrage van Graph Neural Networks (GNN's)?"
        },
        options: [
          { en: "Enable deep learning on non-Euclidean graph-structured data", es: "Habilitar aprendizaje profundo en datos estructurados en grafos no-euclidianos", de: "Deep Learning auf nicht-euklidischen graphstrukturierten Daten ermöglichen", nl: "Deep learning mogelijk maken op niet-Euclidische grafisch gestructureerde data" },
          { en: "Visualize neural network architectures as graphs", es: "Visualizar arquitecturas de redes neuronales como grafos", de: "Neurale Netzwerkarchitekturen als Graphen visualisieren", nl: "Neurale netwerkarchitecturen visualiseren als grafieken" },
          { en: "Generate graph-like network topologies automatically", es: "Generar topologías de red similares a grafos automáticamente", de: "Graph-ähnliche Netzwerktopologien automatisch generieren", nl: "Grafiekachtige netwerktopologieën automatisch genereren" },
          { en: "Use graph theory to optimize neural network training", es: "Usar teoría de grafos para optimizar entrenamiento de redes neuronales", de: "Graphentheorie zur Optimierung des neuronalen Netzwerktrainings verwenden", nl: "Grafiektheorie gebruiken om neurale netwerktraining te optimaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "GNNs extend deep learning to graph-structured data by operating on nodes, edges, and graph topology. This enables learning on social networks, molecular structures, knowledge graphs, and other non-grid data where relationships are crucial.",
          es: "Las GNNs extienden el aprendizaje profundo a datos estructurados en grafos operando en nodos, aristas y topología de grafos. Esto habilita aprendizaje en redes sociales, estructuras moleculares, grafos de conocimiento y otros datos no-grid donde las relaciones son cruciales.",
          de: "GNNs erweitern Deep Learning auf graphstrukturierte Daten durch Operationen auf Knoten, Kanten und Graphtopologie. Dies ermöglicht Lernen auf sozialen Netzwerken, molekularen Strukturen, Wissensgraphen und anderen Nicht-Grid-Daten wo Beziehungen entscheidend sind.",
          nl: "GNN's breiden deep learning uit naar grafisch gestructureerde data door te opereren op knooppunten, randen en grafiektopologie. Dit maakt leren mogelijk op sociale netwerken, moleculaire structuren, kennisgrafieken en andere niet-grid data waar relaties cruciaal zijn."
        }
      },
      {
        question: {
          en: "What is the main challenge addressed by Neural Ordinary Differential Equations (NODEs)?",
          es: "¿Cuál es el principal desafío abordado por Neural Ordinary Differential Equations (NODEs)?",
          de: "Was ist die Hauptherausforderung die von Neural Ordinary Differential Equations (NODEs) adressiert wird?",
          nl: "Wat is de belangrijkste uitdaging die wordt aangepakt door Neural Ordinary Differential Equations (NODE's)?"
        },
        options: [
          { en: "Model continuous-time dynamics instead of discrete layer transformations", es: "Modelar dinámicas de tiempo continuo en lugar de transformaciones discretas de capas", de: "Kontinuierliche Zeitdynamiken anstatt diskreter Schichttransformationen modellieren", nl: "Continue-tijd dynamiek modelleren in plaats van discrete laagtransformaties" },
          { en: "Solve ordinary differential equations using neural networks", es: "Resolver ecuaciones diferenciales ordinarias usando redes neuronales", de: "Gewöhnliche Differentialgleichungen mit neuronalen Netzwerken lösen", nl: "Gewone differentiaalvergelijkingen oplossen met neurale netwerken" },
          { en: "Create networks that adapt their depth dynamically", es: "Crear redes que adapten su profundidad dinámicamente", de: "Netzwerke erstellen die ihre Tiefe dynamisch anpassen", nl: "Netwerken creëren die hun diepte dynamisch aanpassen" },
          { en: "Integrate calculus-based operations into neural architectures", es: "Integrar operaciones basadas en cálculo en arquitecturas neurales", de: "Kalkül-basierte Operationen in neurale Architekturen integrieren", nl: "Calculus-gebaseerde operaties integreren in neurale architecturen" }
        ],
        correct: 0,
        explanation: {
          en: "NODEs treat neural networks as continuous transformations defined by differential equations rather than discrete layer operations. This enables modeling smooth dynamics, adaptive computation, and memory-efficient training through continuous normalizing flows.",
          es: "Los NODEs tratan las redes neuronales como transformaciones continuas definidas por ecuaciones diferenciales en lugar de operaciones discretas de capas. Esto habilita modelar dinámicas suaves, computación adaptativa y entrenamiento eficiente en memoria a través de flujos normalizadores continuos.",
          de: "NODEs behandeln neurale Netzwerke als kontinuierliche Transformationen definiert durch Differentialgleichungen anstatt diskreter Schichtoperationen. Dies ermöglicht Modellierung glatter Dynamiken, adaptiver Berechnung und speichereffizienter Training durch kontinuierliche normalisierende Flüsse.",
          nl: "NODE's behandelen neurale netwerken als continue transformaties gedefinieerd door differentiaalvergelijkingen in plaats van discrete laagoperaties. Dit maakt het mogelijk om vloeiende dynamiek, adaptieve berekening en geheugenefficiënte training te modelleren via continue normaliserende stromen."
        }
      },
      {
        question: {
          en: "What is the key innovation of Capsule Networks compared to traditional CNNs?",
          es: "¿Cuál es la innovación clave de las Capsule Networks comparadas con CNNs tradicionales?",
          de: "Was ist die Schlüsselinnovation von Capsule Networks im Vergleich zu traditionellen CNNs?",
          nl: "Wat is de belangrijkste innovatie van Capsule Networks vergeleken met traditionele CNN's?"
        },
        options: [
          { en: "Preserve spatial hierarchies and part-whole relationships through vector outputs", es: "Preservar jerarquías espaciales y relaciones parte-todo a través de salidas vectoriales", de: "Räumliche Hierarchien und Teil-Ganzes-Beziehungen durch Vektorausgaben erhalten", nl: "Ruimtelijke hiërarchieën en deel-geheel relaties behouden via vectoruitvoer" },
          { en: "Use capsules to encapsulate different types of neural networks", es: "Usar cápsulas para encapsular diferentes tipos de redes neuronales", de: "Kapseln zur Kapselung verschiedener Arten neuronaler Netzwerke verwenden", nl: "Capsules gebruiken om verschillende soorten neurale netwerken te kapselen" },
          { en: "Create modular networks that can be assembled dynamically", es: "Crear redes modulares que pueden ensamblarse dinámicamente", de: "Modulare Netzwerke erstellen die dynamisch zusammengebaut werden können", nl: "Modulaire netwerken creëren die dynamisch kunnen worden samengesteld" },
          { en: "Replace convolutional operations with capsule-based filtering", es: "Reemplazar operaciones convolucionales con filtrado basado en cápsulas", de: "Faltungsoperationen durch kapselbasierte Filterung ersetzen", nl: "Convolutionele operaties vervangen door capsule-gebaseerde filtering" }
        ],
        correct: 0,
        explanation: {
          en: "Capsule Networks use groups of neurons (capsules) that output vectors instead of scalars, preserving information about spatial relationships, orientation, and part-whole hierarchies that traditional CNNs lose through pooling operations.",
          es: "Las Capsule Networks usan grupos de neuronas (cápsulas) que emiten vectores en lugar de escalares, preservando información sobre relaciones espaciales, orientación y jerarquías parte-todo que las CNNs tradicionales pierden a través de operaciones de pooling.",
          de: "Capsule Networks verwenden Gruppen von Neuronen (Kapseln) die Vektoren anstatt Skalare ausgeben und Informationen über räumliche Beziehungen, Orientierung und Teil-Ganzes-Hierarchien erhalten die traditionelle CNNs durch Pooling-Operationen verlieren.",
          nl: "Capsule Networks gebruiken groepen neuronen (capsules) die vectoren uitvoeren in plaats van scalairs, waardoor informatie over ruimtelijke relaties, oriëntatie en deel-geheel hiërarchieën behouden blijft die traditionele CNN's verliezen door pooling-operaties."
        }
      },
      {
        question: {
          en: "What is the main goal of Adversarial Machine Learning research?",
          es: "¿Cuál es el objetivo principal de la investigación en Adversarial Machine Learning?",
          de: "Was ist das Hauptziel der Adversarial Machine Learning Forschung?",
          nl: "Wat is het hoofddoel van Adversarial Machine Learning onderzoek?"
        },
        options: [
          { en: "Understand and defend against malicious attacks on ML models", es: "Entender y defenderse contra ataques maliciosos en modelos de ML", de: "Bösartige Angriffe auf ML-Modelle verstehen und abwehren", nl: "Begrijpen en verdedigen tegen kwaadaardige aanvallen op ML-modellen" },
          { en: "Create adversarial networks that compete against each other", es: "Crear redes adversarias que compiten entre sí", de: "Adversariale Netzwerke erstellen die gegeneinander konkurrieren", nl: "Adversariële netwerken creëren die tegen elkaar concurreren" },
          { en: "Develop machine learning for adversarial game theory", es: "Desarrollar aprendizaje automático para teoría de juegos adversaria", de: "Maschinelles Lernen für adversariale Spieltheorie entwickeln", nl: "Machine learning ontwikkelen voor adversariële speltheorie" },
          { en: "Use adversarial training exclusively for model improvement", es: "Usar entrenamiento adversario exclusivamente para mejora de modelos", de: "Adversariales Training ausschließlich zur Modellverbesserung verwenden", nl: "Adversariële training uitsluitend gebruiken voor modelverbetering" }
        ],
        correct: 0,
        explanation: {
          en: "Adversarial ML studies vulnerabilities of machine learning models to adversarial examples - inputs deliberately designed to fool models. Research focuses on understanding these attacks and developing robust defenses to make AI systems more secure.",
          es: "ML Adversario estudia vulnerabilidades de modelos de aprendizaje automático a ejemplos adversarios - entradas deliberadamente diseñadas para engañar modelos. La investigación se enfoca en entender estos ataques y desarrollar defensas robustas para hacer sistemas de IA más seguros.",
          de: "Adversariales ML studiert Vulnerabilitäten von maschinellen Lernmodellen gegenüber adversarialen Beispielen - Eingaben die absichtlich entworfen sind um Modelle zu täuschen. Forschung konzentriert sich auf das Verstehen dieser Angriffe und Entwicklung robuster Verteidigungen um KI-Systeme sicherer zu machen.",
          nl: "Adversariële ML bestudeert kwetsbaarheden van machine learning-modellen voor adversariële voorbeelden - invoer die opzettelijk is ontworpen om modellen te misleiden. Onderzoek richt zich op het begrijpen van deze aanvallen en het ontwikkelen van robuuste verdedigingen om AI-systemen veiliger te maken."
        }
      },
      {
        question: {
          en: "What is the core principle of Contrastive Learning?",
          es: "¿Cuál es el principio central del Aprendizaje Contrastivo?",
          de: "Was ist das Kernprinzip von Contrastive Learning?",
          nl: "Wat is het kernprincipe van Contrastive Learning?"
        },
        options: [
          { en: "Learn representations by pulling similar examples together and pushing dissimilar ones apart", es: "Aprender representaciones acercando ejemplos similares y alejando los disimilares", de: "Repräsentationen lernen durch Zusammenziehen ähnlicher Beispiele und Auseinanderdrängen unähnlicher", nl: "Representaties leren door vergelijkbare voorbeelden samen te trekken en ongelijksoortige uiteen te drijven" },
          { en: "Create contrasting network architectures for comparison", es: "Crear arquitecturas de red contrastantes para comparación", de: "Kontrastierende Netzwerkarchitekturen für Vergleich erstellen", nl: "Contrasterende netwerkarchitecturen creëren voor vergelijking" },
          { en: "Learn by contrasting predictions with ground truth labels", es: "Aprender contrastando predicciones con etiquetas de verdad fundamental", de: "Lernen durch Kontrastierung von Vorhersagen mit Ground-Truth-Labels", nl: "Leren door voorspellingen te contrasteren met ground truth labels" },
          { en: "Use contrasting colors and features in visual learning", es: "Usar colores y características contrastantes en aprendizaje visual", de: "Kontrastierende Farben und Merkmale im visuellen Lernen verwenden", nl: "Contrasterende kleuren en kenmerken gebruiken in visueel leren" }
        ],
        correct: 0,
        explanation: {
          en: "Contrastive learning learns meaningful representations by training models to distinguish between similar (positive) and dissimilar (negative) examples. This self-supervised approach has proven highly effective for learning general-purpose representations.",
          es: "El aprendizaje contrastivo aprende representaciones significativas entrenando modelos para distinguir entre ejemplos similares (positivos) y disimilares (negativos). Este enfoque auto-supervisado ha demostrado ser altamente efectivo para aprender representaciones de propósito general.",
          de: "Contrastive Learning lernt bedeutungsvolle Repräsentationen durch Training von Modellen zur Unterscheidung zwischen ähnlichen (positiven) und unähnlichen (negativen) Beispielen. Dieser selbst-überwachte Ansatz hat sich als hocheffektiv für das Lernen allgemeiner Repräsentationen erwiesen.",
          nl: "Contrastive learning leert betekenisvolle representaties door modellen te trainen om onderscheid te maken tussen vergelijkbare (positieve) en ongelijksoortige (negatieve) voorbeelden. Deze zelf-gesuperviseerde benadering heeft zich zeer effectief bewezen voor het leren van algemene representaties."
        }
      },
      {
        question: {
          en: "What is the primary innovation of Transformers with Retrieval (e.g., RAG, RETRO)?",
          es: "¿Cuál es la innovación principal de los Transformers con Recuperación (ej., RAG, RETRO)?",
          de: "Was ist die Hauptinnovation von Transformers mit Retrieval (z.B. RAG, RETRO)?",
          nl: "Wat is de belangrijkste innovatie van Transformers met Retrieval (bijv. RAG, RETRO)?"
        },
        options: [
          { en: "Augment model knowledge by retrieving relevant information from external databases", es: "Aumentar conocimiento del modelo recuperando información relevante de bases de datos externas", de: "Modellwissen durch Abrufen relevanter Informationen aus externen Datenbanken erweitern", nl: "Modelkennis uitbreiden door relevante informatie op te halen uit externe databases" },
          { en: "Retrieve and reuse previously computed attention patterns", es: "Recuperar y reutilizar patrones de atención previamente computados", de: "Zuvor berechnete Aufmerksamkeitsmuster abrufen und wiederverwenden", nl: "Eerder berekende aandachtspatronen ophalen en hergebruiken" },
          { en: "Automatically retrieve optimal hyperparameters during training", es: "Recuperar automáticamente hiperparámetros óptimos durante entrenamiento", de: "Optimale Hyperparameter während des Trainings automatisch abrufen", nl: "Automatisch optimale hyperparameters ophalen tijdens training" },
          { en: "Retrieve and combine multiple pre-trained transformer models", es: "Recuperar y combinar múltiples modelos transformer pre-entrenados", de: "Mehrere vortrainierte Transformer-Modelle abrufen und kombinieren", nl: "Meerdere voorgetrainde transformer-modellen ophalen en combineren" }
        ],
        correct: 0,
        explanation: {
          en: "Retrieval-augmented transformers combine parametric knowledge stored in model weights with non-parametric knowledge from external sources. This enables access to up-to-date information and reduces hallucination while maintaining the model's generative capabilities.",
          es: "Los transformers aumentados con recuperación combinan conocimiento paramétrico almacenado en pesos del modelo con conocimiento no-paramétrico de fuentes externas. Esto habilita acceso a información actualizada y reduce alucinación mientras mantiene las capacidades generativas del modelo.",
          de: "Retrieval-erweiterte Transformers kombinieren parametrisches Wissen gespeichert in Modellgewichten mit nicht-parametrischem Wissen aus externen Quellen. Dies ermöglicht Zugang zu aktuellen Informationen und reduziert Halluzination während die generativen Fähigkeiten des Modells erhalten bleiben.",
          nl: "Retrieval-versterkte transformers combineren parametrische kennis opgeslagen in modelgewichten met niet-parametrische kennis uit externe bronnen. Dit maakt toegang mogelijk tot actuele informatie en vermindert hallucinatie terwijl de generatieve mogelijkheden van het model behouden blijven."
        }
      },
      {
        question: {
          en: "What is the main challenge in Scaling Laws for neural networks?",
          es: "¿Cuál es el principal desafío en las Leyes de Escalado para redes neuronales?",
          de: "Was ist die Hauptherausforderung bei Scaling Laws für neuronale Netzwerke?",
          nl: "Wat is de belangrijkste uitdaging in Scaling Laws voor neurale netwerken?"
        },
        options: [
          { en: "Predict optimal model size, data requirements, and compute for given performance targets", es: "Predecir tamaño óptimo del modelo, requerimientos de datos y cómputo para objetivos de rendimiento dados", de: "Optimale Modellgröße, Datenanforderungen und Rechenaufwand für gegebene Leistungsziele vorhersagen", nl: "Optimale modelgrootte, datavereisten en rekenkracht voorspellen voor gegeven prestatiedoelen" },
          { en: "Scale neural networks to run on different hardware architectures", es: "Escalar redes neuronales para ejecutar en diferentes arquitecturas de hardware", de: "Neurale Netzwerke zur Ausführung auf verschiedenen Hardware-Architekturen skalieren", nl: "Neurale netwerken schalen om te draaien op verschillende hardware-architecturen" },
          { en: "Develop mathematical laws that govern neural network behavior", es: "Desarrollar leyes matemáticas que gobiernen el comportamiento de redes neuronales", de: "Mathematische Gesetze entwickeln die das Verhalten neuronaler Netzwerke regeln", nl: "Wiskundige wetten ontwikkelen die het gedrag van neurale netwerken regeren" },
          { en: "Create networks that can automatically scale their complexity", es: "Crear redes que pueden escalar automáticamente su complejidad", de: "Netzwerke erstellen die ihre Komplexität automatisch skalieren können", nl: "Netwerken creëren die hun complexiteit automatisch kunnen schalen" }
        ],
        correct: 0,
        explanation: {
          en: "Scaling laws research empirically studies how model performance scales with factors like model size, dataset size, and computational budget. This helps predict optimal resource allocation and guides efficient development of large-scale AI systems.",
          es: "La investigación de leyes de escalado estudia empíricamente cómo el rendimiento del modelo escala con factores como tamaño del modelo, tamaño del conjunto de datos y presupuesto computacional. Esto ayuda a predecir asignación óptima de recursos y guía el desarrollo eficiente de sistemas de IA a gran escala.",
          de: "Scaling Laws Forschung studiert empirisch wie Modellleistung mit Faktoren wie Modellgröße, Datensatzgröße und Rechenbudget skaliert. Dies hilft optimale Ressourcenallokation vorherzusagen und leitet effiziente Entwicklung großskaliger KI-Systeme.",
          nl: "Scaling laws onderzoek bestudeert empirisch hoe modelprestaties schalen met factoren zoals modelgrootte, datasetgrootte en rekenbudget. Dit helpt optimale resource-allocatie voorspellen en gidst efficiënte ontwikkeling van grootschalige AI-systemen."
        }
      },
      {
        question: {
          en: "What is the key insight behind Implicit Neural Representations (INRs)?",
          es: "¿Cuál es el insight clave detrás de las Implicit Neural Representations (INRs)?",
          de: "Was ist die Schlüsselerkenntnis hinter Implicit Neural Representations (INRs)?",
          nl: "Wat is het belangrijkste inzicht achter Implicit Neural Representations (INR's)?"
        },
        options: [
          { en: "Represent continuous signals as neural network functions instead of discrete samples", es: "Representar señales continuas como funciones de redes neuronales en lugar de muestras discretas", de: "Kontinuierliche Signale als neuronale Netzwerkfunktionen anstatt diskrete Samples repräsentieren", nl: "Continue signalen representeren als neurale netwerkfuncties in plaats van discrete samples" },
          { en: "Learn representations that are implicitly encoded in network weights", es: "Aprender representaciones que están implícitamente codificadas en pesos de red", de: "Repräsentationen lernen die implizit in Netzwerkgewichten kodiert sind", nl: "Representaties leren die impliciet gecodeerd zijn in netwerkgewichten" },
          { en: "Create neural networks with implicit rather than explicit connections", es: "Crear redes neuronales con conexiones implícitas en lugar de explícitas", de: "Neurale Netzwerke mit impliziten anstatt expliziten Verbindungen erstellen", nl: "Neurale netwerken creëren met impliciete in plaats van expliciete verbindingen" },
          { en: "Use implicit differentiation for more efficient training", es: "Usar diferenciación implícita para entrenamiento más eficiente", de: "Implizite Differentiation für effizienteres Training verwenden", nl: "Impliciete differentiatie gebruiken voor efficiëntere training" }
        ],
        correct: 0,
        explanation: {
          en: "INRs use neural networks to represent signals (images, audio, 3D shapes) as continuous functions mapping coordinates to values. This enables resolution-independent representations, smooth interpolation, and novel applications in computer graphics and signal processing.",
          es: "Las INRs usan redes neuronales para representar señales (imágenes, audio, formas 3D) como funciones continuas que mapean coordenadas a valores. Esto habilita representaciones independientes de resolución, interpolación suave y aplicaciones nuevas en gráficos computacionales y procesamiento de señales.",
          de: "INRs verwenden neurale Netzwerke um Signale (Bilder, Audio, 3D-Formen) als kontinuierliche Funktionen zu repräsentieren die Koordinaten auf Werte abbilden. Dies ermöglicht auflösungsunabhängige Repräsentationen, glatte Interpolation und neue Anwendungen in Computergrafik und Signalverarbeitung.",
          nl: "INR's gebruiken neurale netwerken om signalen (beelden, audio, 3D-vormen) te representeren als continue functies die coördinaten naar waarden mappen. Dit maakt resolutie-onafhankelijke representaties mogelijk, vloeiende interpolatie en nieuwe toepassingen in computergraphics en signaalverwerking."
        }
      },
      {
        question: {
          en: "What is the main innovation of Parameter-Efficient Fine-tuning (PEFT) methods?",
          es: "¿Cuál es la principal innovación de los métodos Parameter-Efficient Fine-tuning (PEFT)?",
          de: "Was ist die Hauptinnovation von Parameter-Efficient Fine-tuning (PEFT) Methoden?",
          nl: "Wat is de belangrijkste innovatie van Parameter-Efficient Fine-tuning (PEFT) methoden?"
        },
        options: [
          { en: "Adapt large pre-trained models to new tasks while updating only a small fraction of parameters", es: "Adaptar modelos pre-entrenados grandes a nuevas tareas actualizando solo una pequeña fracción de parámetros", de: "Große vortrainierte Modelle an neue Aufgaben anpassen während nur ein kleiner Bruchteil der Parameter aktualisiert wird", nl: "Grote voorgetrainde modellen aanpassen aan nieuwe taken terwijl slechts een kleine fractie van parameters wordt bijgewerkt" },
          { en: "Automatically tune hyperparameters for optimal performance", es: "Ajustar automáticamente hiperparámetros para rendimiento óptimo", de: "Hyperparameter automatisch für optimale Leistung abstimmen", nl: "Automatisch hyperparameters afstemmen voor optimale prestaties" },
          { en: "Fine-tune models using fewer computational resources", es: "Ajustar modelos usando menos recursos computacionales", de: "Modelle mit weniger Rechenressourcen feinabstimmen", nl: "Modellen fijn afstemmen met minder computationele bronnen" },
          { en: "Create efficient parameter sharing across different model architectures", es: "Crear compartición eficiente de parámetros a través de diferentes arquitecturas de modelo", de: "Effiziente Parameterteilung über verschiedene Modellarchitekturen erstellen", nl: "Efficiënte parameterdeling creëren over verschillende modelarchitecturen" }
        ],
        correct: 0,
        explanation: {
          en: "PEFT methods like LoRA, adapters, and prompt tuning enable adapting large pre-trained models to specific tasks by updating only a small subset of parameters. This dramatically reduces computational costs while maintaining competitive performance.",
          es: "Los métodos PEFT como LoRA, adaptadores y ajuste de prompts permiten adaptar modelos pre-entrenados grandes a tareas específicas actualizando solo un pequeño subconjunto de parámetros. Esto reduce dramáticamente costos computacionales mientras mantiene rendimiento competitivo.",
          de: "PEFT-Methoden wie LoRA, Adapter und Prompt-Tuning ermöglichen die Anpassung großer vortrainierter Modelle an spezifische Aufgaben durch Aktualisierung nur einer kleinen Teilmenge von Parametern. Dies reduziert Rechenkosten dramatisch bei Beibehaltung wettbewerbsfähiger Leistung.",
          nl: "PEFT-methoden zoals LoRA, adapters en prompt tuning maken het mogelijk grote voorgetrainde modellen aan te passen aan specifieke taken door slechts een kleine subset van parameters bij te werken. Dit vermindert rekenkosten drastisch terwijl competitieve prestaties behouden blijven."
        }
      },
      {
        question: {
          en: "What is the core concept behind Liquid Neural Networks?",
          es: "¿Cuál es el concepto central detrás de las Liquid Neural Networks?",
          de: "Was ist das Kernkonzept hinter Liquid Neural Networks?",
          nl: "Wat is het kernconcept achter Liquid Neural Networks?"
        },
        options: [
          { en: "Networks with time-varying, adaptive dynamics inspired by biological neurons", es: "Redes con dinámicas adaptativas que varían en el tiempo inspiradas en neuronas biológicas", de: "Netzwerke mit zeitveränderlichen, adaptiven Dynamiken inspiriert von biologischen Neuronen", nl: "Netwerken met tijdvariërende, adaptieve dynamiek geïnspireerd door biologische neuronen" },
          { en: "Neural networks that can physically flow like liquids", es: "Redes neuronales que pueden fluir físicamente como líquidos", de: "Neurale Netzwerke die physisch wie Flüssigkeiten fließen können", nl: "Neurale netwerken die fysiek kunnen stromen zoals vloeistoffen" },
          { en: "Networks designed to process liquid-state data efficiently", es: "Redes diseñadas para procesar datos de estado líquido eficientemente", de: "Netzwerke entworfen um Flüssigzustandsdaten effizient zu verarbeiten", nl: "Netwerken ontworpen om vloeistofstatusdata efficiënt te verwerken" },
          { en: "Fluid-based analog computers using neural network principles", es: "Computadoras analógicas basadas en fluidos usando principios de redes neuronales", de: "Flüssigkeitsbasierte Analogcomputer mit neuronalen Netzwerkprinzipien", nl: "Op vloeistof gebaseerde analoge computers met neurale netwerkprincipes" }
        ],
        correct: 0,
        explanation: {
          en: "Liquid Neural Networks feature neurons with time-varying parameters and nonlinear dynamics that adapt based on input patterns. This enables more flexible computation, better handling of temporal data, and improved adaptability to changing environments.",
          es: "Las Liquid Neural Networks presentan neuronas con parámetros que varían en el tiempo y dinámicas no lineales que se adaptan basadas en patrones de entrada. Esto habilita computación más flexible, mejor manejo de datos temporales y mejor adaptabilidad a entornos cambiantes.",
          de: "Liquid Neural Networks verfügen über Neuronen mit zeitveränderlichen Parametern und nichtlinearen Dynamiken die sich basierend auf Eingabemustern anpassen. Dies ermöglicht flexiblere Berechnung, bessere Handhabung temporaler Daten und verbesserte Anpassungsfähigkeit an sich ändernde Umgebungen.",
          nl: "Liquid Neural Networks bevatten neuronen met tijdvariërende parameters en niet-lineaire dynamiek die zich aanpassen op basis van invoerpatronen. Dit maakt flexibelere berekening mogelijk, betere behandeling van temporele data en verbeterde aanpasbaarheid aan veranderende omgevingen."
        }
      },
      {
        question: {
          en: "What is the primary research goal of Emergent Abilities in Large Language Models?",
          es: "¿Cuál es el objetivo principal de investigación de las Habilidades Emergentes en Modelos de Lenguaje Grande?",
          de: "Was ist das primäre Forschungsziel von Emergent Abilities in Large Language Models?",
          nl: "Wat is het primaire onderzoeksdoel van Emergent Abilities in Large Language Models?"
        },
        options: [
          { en: "Understand how complex capabilities arise unpredictably as models scale beyond certain thresholds", es: "Entender cómo capacidades complejas surgen impredeciblemente cuando los modelos escalan más allá de ciertos umbrales", de: "Verstehen wie komplexe Fähigkeiten unvorhersagbar entstehen wenn Modelle über bestimmte Schwellwerte hinaus skalieren", nl: "Begrijpen hoe complexe mogelijkheden onvoorspelbaar ontstaan wanneer modellen schalen voorbij bepaalde drempels" },
          { en: "Design emergency response systems using language models", es: "Diseñar sistemas de respuesta de emergencia usando modelos de lenguaje", de: "Notfallresponse-Systeme mit Sprachmodellen entwerfen", nl: "Noodresponsesystemen ontwerpen met behulp van taalmodellen" },
          { en: "Create models that can emerge from distributed training automatically", es: "Crear modelos que pueden emerger de entrenamiento distribuido automáticamente", de: "Modelle erstellen die automatisch aus verteiltem Training entstehen können", nl: "Modellen creëren die automatisch kunnen ontstaan uit gedistribueerde training" },
          { en: "Study how language models adapt to emerging trends in data", es: "Estudiar cómo los modelos de lenguaje se adaptan a tendencias emergentes en datos", de: "Studieren wie Sprachmodelle sich an aufkommende Trends in Daten anpassen", nl: "Bestuderen hoe taalmodellen zich aanpassen aan opkomende trends in data" }
        ],
        correct: 0,
        explanation: {
          en: "Emergent abilities research studies how capabilities like few-shot learning, reasoning, and complex problem-solving suddenly appear in language models once they reach sufficient scale, often without being explicitly trained for these tasks.",
          es: "La investigación de habilidades emergentes estudia cómo capacidades como aprendizaje de pocos disparos, razonamiento y resolución de problemas complejos aparecen súbitamente en modelos de lenguaje una vez que alcanzan escala suficiente, a menudo sin ser entrenados explícitamente para estas tareas.",
          de: "Forschung zu emergenten Fähigkeiten studiert wie Fähigkeiten wie Few-Shot Learning, Reasoning und komplexe Problemlösung plötzlich in Sprachmodellen erscheinen sobald sie ausreichende Größe erreichen, oft ohne explizit für diese Aufgaben trainiert zu sein.",
          nl: "Onderzoek naar emergente vaardigheden bestudeert hoe mogelijkheden zoals few-shot learning, redeneren en complexe probleemoplossing plotseling verschijnen in taalmodellen zodra ze voldoende schaal bereiken, vaak zonder expliciet getraind te zijn voor deze taken."
        }
      },
      {
        question: {
          en: "What is the main contribution of Sparse Expert Models to efficient AI?",
          es: "¿Cuál es la principal contribución de los Sparse Expert Models a la IA eficiente?",
          de: "Was ist der Hauptbeitrag von Sparse Expert Models zur effizienten KI?",
          nl: "Wat is de belangrijkste bijdrage van Sparse Expert Models aan efficiënte AI?"
        },
        options: [
          { en: "Scale model capacity while keeping computational cost constant through selective activation", es: "Escalar capacidad del modelo manteniendo costo computacional constante a través de activación selectiva", de: "Modellkapazität skalieren während Rechenkosten konstant gehalten werden durch selektive Aktivierung", nl: "Modelcapaciteit schalen terwijl rekenkosten constant blijven door selectieve activatie" },
          { en: "Create models with sparse, interpretable expert knowledge representations", es: "Crear modelos con representaciones de conocimiento experto dispersas e interpretables", de: "Modelle mit sparsamen, interpretierbaren Experten-Wissensrepräsentationen erstellen", nl: "Modellen creëren met schaarse, interpreteerbare expert kennisrepresentaties" },
          { en: "Reduce model size by removing non-essential expert components", es: "Reducir tamaño del modelo removiendo componentes expertos no esenciales", de: "Modellgröße durch Entfernung nicht-essentieller Expertenkomponenten reduzieren", nl: "Modelgrootte verminderen door niet-essentiële expertcomponenten te verwijderen" },
          { en: "Automatically identify and utilize domain experts during training", es: "Identificar y utilizar automáticamente expertos de dominio durante entrenamiento", de: "Domänen-Experten während des Trainings automatisch identifizieren und nutzen", nl: "Automatisch domeinexperts identificeren en gebruiken tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "Sparse expert models like Switch Transformer and GLaM use routing mechanisms to activate only a subset of expert parameters for each input, achieving massive scale while maintaining computational efficiency through conditional computation.",
          es: "Los modelos de expertos dispersos como Switch Transformer y GLaM usan mecanismos de enrutamiento para activar solo un subconjunto de parámetros expertos para cada entrada, logrando escala masiva mientras mantienen eficiencia computacional a través de computación condicional.",
          de: "Sparse Expert Modelle wie Switch Transformer und GLaM verwenden Routing-Mechanismen um nur eine Teilmenge von Expertenparametern für jede Eingabe zu aktivieren, erreichen massive Skalierung während rechnerische Effizienz durch bedingte Berechnung erhalten bleibt.",
          nl: "Sparse expert modellen zoals Switch Transformer en GLaM gebruiken routeringsmechanismen om slechts een subset van expertparameters te activeren voor elke invoer, waarbij massale schaal wordt bereikt terwijl rekenkundige efficiëntie behouden blijft door conditionele berekening."
        }
      },
      {
        question: {
          en: "What is the key principle of Neural Network Pruning for model compression?",
          es: "¿Cuál es el principio clave del Podado de Redes Neuronales para compresión de modelos?",
          de: "Was ist das Schlüsselprinzip von Neural Network Pruning für Modellkompression?",
          nl: "Wat is het kernprincipe van Neural Network Pruning voor modelcompressie?"
        },
        options: [
          { en: "Remove redundant connections and parameters while preserving model performance", es: "Eliminar conexiones y parámetros redundantes mientras se preserva rendimiento del modelo", de: "Redundante Verbindungen und Parameter entfernen während Modellleistung erhalten bleibt", nl: "Redundante verbindingen en parameters verwijderen terwijl modelprestaties behouden blijven" },
          { en: "Trim training data to reduce computational requirements", es: "Recortar datos de entrenamiento para reducir requerimientos computacionales", de: "Trainingsdaten beschneiden um Rechenanforderungen zu reduzieren", nl: "Trainingsdata trimmen om rekenkundige vereisten te verminderen" },
          { en: "Gradually remove layers from the network during training", es: "Eliminar gradualmente capas de la red durante entrenamiento", de: "Schichten während des Trainings schrittweise aus dem Netzwerk entfernen", nl: "Geleidelijk lagen verwijderen uit het netwerk tijdens training" },
          { en: "Prune decision trees within neural architectures", es: "Podar árboles de decisión dentro de arquitecturas neurales", de: "Entscheidungsbäume innerhalb neuraler Architekturen beschneiden", nl: "Beslisbomen snoeien binnen neurale architecturen" }
        ],
        correct: 0,
        explanation: {
          en: "Neural network pruning identifies and removes weights, neurons, or entire structures that contribute minimally to model performance. This reduces model size and inference cost while maintaining accuracy through techniques like magnitude-based pruning, structured pruning, or lottery ticket hypothesis approaches.",
          es: "El podado de redes neuronales identifica y elimina pesos, neuronas o estructuras enteras que contribuyen mínimamente al rendimiento del modelo. Esto reduce tamaño del modelo y costo de inferencia mientras mantiene precisión a través de técnicas como podado basado en magnitud, podado estructurado o enfoques de hipótesis del billete de lotería.",
          de: "Neural Network Pruning identifiziert und entfernt Gewichte, Neuronen oder ganze Strukturen die minimal zur Modellleistung beitragen. Dies reduziert Modellgröße und Inferenzkosten während Genauigkeit durch Techniken wie magnitudenbasiertes Pruning, strukturiertes Pruning oder Lottery Ticket Hypothesis Ansätze erhalten bleibt.",
          nl: "Neural network pruning identificeert en verwijdert gewichten, neuronen of hele structuren die minimaal bijdragen aan modelprestaties. Dit vermindert modelgrootte en inferentiekosten terwijl nauwkeurigheid behouden blijft door technieken zoals magnitude-gebaseerd pruning, gestructureerd pruning of lottery ticket hypothesis benaderingen."
        }
      },
      {
        question: {
          en: "What is the main concept behind Neuromorphic Computing?",
          es: "¿Cuál es el concepto principal detrás de la Computación Neuromórfica?",
          de: "Was ist das Hauptkonzept hinter Neuromorphic Computing?",
          nl: "Wat is het hoofdconcept achter Neuromorphic Computing?"
        },
        options: [
          { en: "Hardware architectures that mimic biological neural systems for energy-efficient computation", es: "Arquitecturas de hardware que imitan sistemas neurales biológicos para computación eficiente en energía", de: "Hardware-Architekturen die biologische neurale Systeme für energieeffiziente Berechnung nachahmen", nl: "Hardware-architecturen die biologische neurale systemen nabootsen voor energie-efficiënte berekening" },
          { en: "Software that morphs neural network architectures dynamically", es: "Software que transforma arquitecturas de redes neuronales dinámicamente", de: "Software die neurale Netzwerkarchitekturen dynamisch transformiert", nl: "Software die neurale netwerkarchitecturen dynamisch transformeert" },
          { en: "Algorithms that change network topology based on input morphology", es: "Algoritmos que cambian topología de red basada en morfología de entrada", de: "Algorithmen die Netzwerktopologie basierend auf Eingabemorphologie ändern", nl: "Algoritmen die netwerktopologie veranderen op basis van invoermorfologie" },
          { en: "Neural networks designed to process morphological image data", es: "Redes neuronales diseñadas para procesar datos de imágenes morfológicas", de: "Neurale Netzwerke entworfen um morphologische Bilddaten zu verarbeiten", nl: "Neurale netwerken ontworpen om morfologische beelddata te verwerken" }
        ],
        correct: 0,
        explanation: {
          en: "Neuromorphic computing designs specialized hardware (like spiking neural networks on chips) that closely mimics the structure and function of biological neurons and synapses. This enables massively parallel, event-driven, and energy-efficient computation, particularly suitable for edge AI applications.",
          es: "La computación neuromórfica diseña hardware especializado (como redes neuronales de picos en chips) que imita estrechamente la estructura y función de neuronas y sinapsis biológicas. Esto habilita computación masivamente paralela, impulsada por eventos y eficiente en energía, particularmente adecuada para aplicaciones de IA en el borde.",
          de: "Neuromorphic Computing entwirft spezialisierte Hardware (wie Spiking Neural Networks auf Chips) die Struktur und Funktion biologischer Neuronen und Synapsen eng nachahmt. Dies ermöglicht massiv parallele, ereignisgesteuerte und energieeffiziente Berechnung, besonders geeignet für Edge-AI-Anwendungen.",
          nl: "Neuromorphic computing ontwerpt gespecialiseerde hardware (zoals spiking neural networks op chips) die de structuur en functie van biologische neuronen en synapsen nauw nabootst. Dit maakt massaal parallelle, gebeurtenisgedreven en energie-efficiënte berekening mogelijk, bijzonder geschikt voor edge AI-toepassingen."
        }
      },
      {
        question: {
          en: "What is the primary goal of Explainable AI (XAI) research?",
          es: "¿Cuál es el objetivo principal de la investigación en IA Explicable (XAI)?",
          de: "Was ist das primäre Ziel der Explainable AI (XAI) Forschung?",
          nl: "Wat is het primaire doel van Explainable AI (XAI) onderzoek?"
        },
        options: [
          { en: "Make neural network decisions transparent and interpretable to humans", es: "Hacer las decisiones de redes neuronales transparentes e interpretables para humanos", de: "Neurale Netzwerkentscheidungen für Menschen transparent und interpretierbar machen", nl: "Neurale netwerkbeslissingen transparant en interpreteerbaar maken voor mensen" },
          { en: "Train AI systems to explain their training process", es: "Entrenar sistemas de IA para explicar su proceso de entrenamiento", de: "KI-Systeme trainieren um ihren Trainingsprozess zu erklären", nl: "AI-systemen trainen om hun trainingsproces uit te leggen" },
          { en: "Create models that can be easily explained to non-technical users", es: "Crear modelos que puedan ser fácilmente explicados a usuarios no técnicos", de: "Modelle erstellen die einfach an nicht-technische Nutzer erklärt werden können", nl: "Modellen creëren die gemakkelijk kunnen worden uitgelegd aan niet-technische gebruikers" },
          { en: "Develop AI that can generate natural language explanations", es: "Desarrollar IA que pueda generar explicaciones en lenguaje natural", de: "KI entwickeln die natürlichsprachige Erklärungen generieren kann", nl: "AI ontwikkelen die natuurlijke taal uitleg kan genereren" }
        ],
        correct: 0,
        explanation: {
          en: "XAI aims to make black-box neural network models more interpretable by providing insights into how and why models make specific decisions. Techniques include attention visualization, saliency maps, LIME, SHAP, and feature attribution methods, crucial for trust, debugging, and regulatory compliance.",
          es: "XAI tiene como objetivo hacer modelos de redes neuronales de caja negra más interpretables proporcionando insights sobre cómo y por qué los modelos toman decisiones específicas. Las técnicas incluyen visualización de atención, mapas de saliencia, LIME, SHAP y métodos de atribución de características, cruciales para confianza, depuración y cumplimiento regulatorio.",
          de: "XAI zielt darauf ab Black-Box-Neuronale-Netzwerk-Modelle interpretierbarer zu machen durch Bereitstellung von Einblicken wie und warum Modelle spezifische Entscheidungen treffen. Techniken umfassen Aufmerksamkeitsvisualisierung, Saliency Maps, LIME, SHAP und Feature-Attribution-Methoden, entscheidend für Vertrauen, Debugging und regulatorische Compliance.",
          nl: "XAI heeft tot doel black-box neurale netwerkmodellen interpreteerbaarder te maken door inzichten te bieden in hoe en waarom modellen specifieke beslissingen nemen. Technieken omvatten aandachtsvisualisatie, saliency maps, LIME, SHAP en feature attributie methoden, cruciaal voor vertrouwen, debugging en naleving van regelgeving."
        }
      },
      {
        question: {
          en: "What is the core idea behind Capsule Networks (CapsNets)?",
          es: "¿Cuál es la idea central detrás de las Redes de Cápsulas (CapsNets)?",
          de: "Was ist die Kernidee hinter Capsule Networks (CapsNets)?",
          nl: "Wat is het kernidee achter Capsule Networks (CapsNets)?"
        },
        options: [
          { en: "Group neurons into capsules that output vectors encoding both presence and properties of features", es: "Agrupar neuronas en cápsulas que producen vectores codificando tanto presencia como propiedades de características", de: "Neuronen in Kapseln gruppieren die Vektoren ausgeben welche sowohl Vorhandensein als auch Eigenschaften von Features kodieren", nl: "Neuronen groeperen in capsules die vectoren uitvoeren die zowel aanwezigheid als eigenschappen van features coderen" },
          { en: "Encapsulate multiple layers into reusable modules", es: "Encapsular múltiples capas en módulos reutilizables", de: "Mehrere Schichten in wiederverwendbare Module kapseln", nl: "Meerdere lagen inkapselen in herbruikbare modules" },
          { en: "Create isolated network components that don't share information", es: "Crear componentes de red aislados que no comparten información", de: "Isolierte Netzwerkkomponenten erstellen die keine Informationen teilen", nl: "Geïsoleerde netwerkcomponenten creëren die geen informatie delen" },
          { en: "Package trained models into deployable capsules", es: "Empaquetar modelos entrenados en cápsulas desplegables", de: "Trainierte Modelle in einsetzbare Kapseln verpacken", nl: "Getrainde modellen verpakken in implementeerbare capsules" }
        ],
        correct: 0,
        explanation: {
          en: "Capsule Networks represent features as vectors instead of scalars, where vector length encodes probability of feature presence and orientation encodes instantiation parameters. Dynamic routing between capsules enables better preservation of spatial hierarchies and part-whole relationships.",
          es: "Las Redes de Cápsulas representan características como vectores en lugar de escalares, donde la longitud del vector codifica probabilidad de presencia de característica y orientación codifica parámetros de instanciación. El enrutamiento dinámico entre cápsulas permite mejor preservación de jerarquías espaciales y relaciones parte-todo.",
          de: "Capsule Networks repräsentieren Features als Vektoren statt Skalare, wobei Vektorlänge Wahrscheinlichkeit der Feature-Anwesenheit kodiert und Orientierung Instanziierungsparameter kodiert. Dynamisches Routing zwischen Kapseln ermöglicht bessere Erhaltung räumlicher Hierarchien und Teil-Ganzes-Beziehungen.",
          nl: "Capsule Networks representeren features als vectoren in plaats van scalars, waarbij vectorlengte waarschijnlijkheid van feature-aanwezigheid codeert en oriëntatie instantiatie-parameters codeert. Dynamische routing tussen capsules maakt betere behoud van ruimtelijke hiërarchieën en deel-geheel relaties mogelijk."
        }
      },
      {
        question: {
          en: "What is Neural Tangent Kernel (NTK) theory about?",
          es: "¿De qué trata la teoría del Neural Tangent Kernel (NTK)?",
          de: "Worum geht es bei der Neural Tangent Kernel (NTK) Theorie?",
          nl: "Waar gaat Neural Tangent Kernel (NTK) theorie over?"
        },
        options: [
          { en: "Mathematical framework showing infinitely wide networks behave like kernel methods during training", es: "Marco matemático mostrando que redes infinitamente anchas se comportan como métodos de kernel durante entrenamiento", de: "Mathematischer Rahmen der zeigt dass unendlich breite Netzwerke sich während des Trainings wie Kernel-Methoden verhalten", nl: "Wiskundig kader dat aantoont dat oneindig brede netwerken zich gedragen als kernel-methoden tijdens training" },
          { en: "Hardware kernel design optimized for neural network computations", es: "Diseño de kernel de hardware optimizado para cálculos de redes neuronales", de: "Hardware-Kernel-Design optimiert für neuronale Netzwerkberechnungen", nl: "Hardware-kernelontwerp geoptimaliseerd voor neurale netwerkberekeningen" },
          { en: "Tangent-based optimization methods for faster convergence", es: "Métodos de optimización basados en tangentes para convergencia más rápida", de: "Tangenten-basierte Optimierungsmethoden für schnellere Konvergenz", nl: "Tangent-gebaseerde optimalisatiemethoden voor snellere convergentie" },
          { en: "Kernel functions designed to work with neural tangent spaces", es: "Funciones de kernel diseñadas para trabajar con espacios tangentes neuronales", de: "Kernel-Funktionen entworfen um mit neuralen Tangentenräumen zu arbeiten", nl: "Kernelfuncties ontworpen om te werken met neurale tangentruimtes" }
        ],
        correct: 0,
        explanation: {
          en: "NTK theory provides theoretical insights into neural network training by showing that infinitely wide networks with proper initialization evolve deterministically like kernel methods. This bridges classical machine learning theory with deep learning, helping explain generalization and optimization dynamics.",
          es: "La teoría NTK proporciona insights teóricos sobre entrenamiento de redes neuronales mostrando que redes infinitamente anchas con inicialización apropiada evolucionan determinísticamente como métodos de kernel. Esto une teoría clásica de aprendizaje automático con aprendizaje profundo, ayudando a explicar generalización y dinámica de optimización.",
          de: "NTK-Theorie bietet theoretische Einblicke in neuronales Netzwerk-Training durch Zeigen dass unendlich breite Netzwerke mit geeigneter Initialisierung deterministisch wie Kernel-Methoden evolvieren. Dies verbindet klassische maschinelle Lerntheorie mit Deep Learning und hilft Generalisierung und Optimierungsdynamik zu erklären.",
          nl: "NTK-theorie biedt theoretische inzichten in neurale netwerktraining door aan te tonen dat oneindig brede netwerken met juiste initialisatie deterministisch evolueren zoals kernel-methoden. Dit verbindt klassieke machine learning-theorie met deep learning, wat helpt generalisatie en optimalisatiedynamiek te verklaren."
        }
      },
      {
        question: {
          en: "What is the double descent phenomenon in neural networks?",
          es: "¿Qué es el fenómeno de doble descenso en redes neuronales?",
          de: "Was ist das Double-Descent-Phänomen in neuronalen Netzwerken?",
          nl: "Wat is het dubbele afname-fenomeen in neurale netwerken?"
        },
        options: [
          { en: "Test error decreases, then increases, then decreases again as model capacity grows beyond interpolation threshold", es: "Error de prueba disminuye, luego aumenta, luego disminuye nuevamente cuando capacidad del modelo crece más allá del umbral de interpolación", de: "Testfehler nimmt ab, dann zu, dann wieder ab wenn Modellkapazität über Interpolationsschwelle hinaus wächst", nl: "Testfout neemt af, neemt toe, neemt dan weer af wanneer modelcapaciteit groeit voorbij interpolatiedrempel" },
          { en: "Loss function decreases twice during training epochs", es: "Función de pérdida disminuye dos veces durante épocas de entrenamiento", de: "Verlustfunktion nimmt während Trainingsepochen zweimal ab", nl: "Verliesfunctie neemt twee keer af tijdens trainingsepochen" },
          { en: "Network architecture requires two descent paths for optimal performance", es: "Arquitectura de red requiere dos caminos de descenso para rendimiento óptimo", de: "Netzwerkarchitektur erfordert zwei Abstiegspfade für optimale Leistung", nl: "Netwerkarchitectuur vereist twee afnamepaden voor optimale prestaties" },
          { en: "Gradient descent algorithm runs twice with different learning rates", es: "Algoritmo de descenso de gradiente se ejecuta dos veces con diferentes tasas de aprendizaje", de: "Gradienten-Descent-Algorithmus läuft zweimal mit unterschiedlichen Lernraten", nl: "Gradiënt-descent algoritme draait twee keer met verschillende leersnelheden" }
        ],
        correct: 0,
        explanation: {
          en: "The double descent phenomenon challenges classical bias-variance tradeoff. As model capacity increases beyond perfectly fitting training data (interpolation threshold), test error initially rises then surprisingly decreases again in over-parameterized regime. This suggests implicit regularization in large models.",
          es: "El fenómeno de doble descenso desafía el equilibrio clásico sesgo-varianza. A medida que la capacidad del modelo aumenta más allá de ajustar perfectamente datos de entrenamiento (umbral de interpolación), el error de prueba inicialmente aumenta luego sorprendentemente disminuye nuevamente en régimen sobre-parametrizado. Esto sugiere regularización implícita en modelos grandes.",
          de: "Das Double-Descent-Phänomen stellt klassisches Bias-Varianz-Trade-off in Frage. Wenn Modellkapazität über perfektes Anpassen von Trainingsdaten (Interpolationsschwelle) hinaus steigt, steigt Testfehler zunächst dann sinkt überraschenderweise wieder im überparametrisierten Regime. Dies deutet auf implizite Regularisierung in großen Modellen hin.",
          nl: "Het dubbele afname-fenomeen daagt klassieke bias-variantie afweging uit. Wanneer modelcapaciteit toeneemt voorbij perfect passen van trainingsdata (interpolatiedrempel), neemt testfout aanvankelijk toe dan verrassend weer af in over-geparametriseerd regime. Dit suggereert impliciete regularisatie in grote modellen."
        }
      },
      {
        question: {
          en: "What is the lottery ticket hypothesis about?",
          es: "¿De qué trata la hipótesis del billete de lotería?",
          de: "Worum geht es bei der Lottery Ticket Hypothesis?",
          nl: "Waar gaat de lottery ticket hypothese over?"
        },
        options: [
          { en: "Dense networks contain sparse subnetworks that can match full network performance when trained from initialization", es: "Redes densas contienen subredes dispersas que pueden igualar rendimiento de red completa cuando se entrenan desde inicialización", de: "Dichte Netzwerke enthalten spärliche Subnetzwerke die vollständige Netzwerkleistung erreichen können wenn von Initialisierung trainiert", nl: "Dichte netwerken bevatten schaarse subnetwerken die volledige netwerkprestaties kunnen evenaren wanneer getraind vanaf initialisatie" },
          { en: "Random weight initialization has a lottery-like effect on final model performance", es: "Inicialización aleatoria de pesos tiene un efecto tipo lotería en rendimiento final del modelo", de: "Zufällige Gewichtsinitialisierung hat einen lotterieartigen Effekt auf finale Modellleistung", nl: "Willekeurige gewichtsinitialisatie heeft een loterij-achtig effect op uiteindelijke modelprestaties" },
          { en: "Only lucky training runs achieve good convergence", es: "Solo ejecuciones de entrenamiento afortunadas logran buena convergencia", de: "Nur glückliche Trainingsläufe erreichen gute Konvergenz", nl: "Alleen gelukkige trainingsruns bereiken goede convergentie" },
          { en: "Winning models are selected randomly from ensemble of candidates", es: "Modelos ganadores se seleccionan aleatoriamente de ensamble de candidatos", de: "Gewinnende Modelle werden zufällig aus Ensemble von Kandidaten ausgewählt", nl: "Winnende modellen worden willekeurig geselecteerd uit ensemble van kandidaten" }
        ],
        correct: 0,
        explanation: {
          en: "The lottery ticket hypothesis states that randomly initialized dense networks contain sparse subnetworks (winning tickets) that, when trained in isolation from their original initialization, can match the performance of the full network. This suggests initialization is more important than previously thought.",
          es: "La hipótesis del billete de lotería establece que redes densas inicializadas aleatoriamente contienen subredes dispersas (billetes ganadores) que, cuando se entrenan aisladamente desde su inicialización original, pueden igualar el rendimiento de la red completa. Esto sugiere que la inicialización es más importante de lo que se pensaba.",
          de: "Die Lottery Ticket Hypothesis besagt dass zufällig initialisierte dichte Netzwerke spärliche Subnetzwerke (Gewinn-Tickets) enthalten die, wenn von ihrer ursprünglichen Initialisierung isoliert trainiert, die Leistung des vollständigen Netzwerks erreichen können. Dies deutet darauf hin dass Initialisierung wichtiger ist als zuvor gedacht.",
          nl: "De lottery ticket hypothese stelt dat willekeurig geïnitialiseerde dichte netwerken schaarse subnetwerken (winnende tickets) bevatten die, wanneer getraind in isolatie vanaf hun oorspronkelijke initialisatie, de prestaties van het volledige netwerk kunnen evenaren. Dit suggereert dat initialisatie belangrijker is dan eerder gedacht."
        }
      },
      {
        question: {
          en: "What is the primary contribution of Vision Transformers (ViT)?",
          es: "¿Cuál es la contribución principal de Vision Transformers (ViT)?",
          de: "Was ist der primäre Beitrag von Vision Transformers (ViT)?",
          nl: "Wat is de primaire bijdrage van Vision Transformers (ViT)?"
        },
        options: [
          { en: "Apply pure transformer architecture to image patches without convolutions, achieving state-of-the-art results", es: "Aplicar arquitectura transformer pura a parches de imagen sin convoluciones, logrando resultados estado del arte", de: "Reine Transformer-Architektur auf Bild-Patches ohne Faltungen anwenden und State-of-the-Art-Ergebnisse erzielen", nl: "Pure transformer-architectuur toepassen op beeldpatches zonder convoluties, waarbij state-of-the-art resultaten worden behaald" },
          { en: "Transform visual data into text for better interpretability", es: "Transformar datos visuales en texto para mejor interpretabilidad", de: "Visuelle Daten in Text transformieren für bessere Interpretierbarkeit", nl: "Visuele data transformeren naar tekst voor betere interpreteerbaarheid" },
          { en: "Use transformers to generate realistic images from noise", es: "Usar transformers para generar imágenes realistas desde ruido", de: "Transformer verwenden um realistische Bilder aus Rauschen zu generieren", nl: "Transformers gebruiken om realistische beelden te genereren uit ruis" },
          { en: "Combine CNNs and transformers for hybrid vision models", es: "Combinar CNNs y transformers para modelos de visión híbridos", de: "CNNs und Transformer für hybride Visionsmodelle kombinieren", nl: "CNN's en transformers combineren voor hybride visiemodellen" }
        ],
        correct: 0,
        explanation: {
          en: "Vision Transformers treat images as sequences of patches and apply standard transformer architecture without inductive biases from convolutions. When pre-trained on large datasets, ViTs match or exceed CNN performance, demonstrating transformers' effectiveness beyond NLP and changing computer vision paradigms.",
          es: "Vision Transformers tratan imágenes como secuencias de parches y aplican arquitectura transformer estándar sin sesgos inductivos de convoluciones. Cuando se pre-entrenan en grandes conjuntos de datos, ViTs igualan o superan rendimiento de CNN, demostrando efectividad de transformers más allá de PLN y cambiando paradigmas de visión por computadora.",
          de: "Vision Transformers behandeln Bilder als Sequenzen von Patches und wenden Standard-Transformer-Architektur ohne induktive Biases von Faltungen an. Wenn auf großen Datensätzen vortrainiert, erreichen oder übertreffen ViTs CNN-Leistung, demonstrieren Transformer-Effektivität über NLP hinaus und ändern Computer-Vision-Paradigmen.",
          nl: "Vision Transformers behandelen beelden als sequenties van patches en passen standaard transformer-architectuur toe zonder inductieve biases van convoluties. Wanneer voorgetraind op grote datasets, evenaren of overtreffen ViTs CNN-prestaties, wat de effectiviteit van transformers buiten NLP aantoont en computer vision-paradigma's verandert."
        }
      },
      {
        question: {
          en: "What is the key idea behind Neural Ordinary Differential Equations (Neural ODEs)?",
          es: "¿Cuál es la idea clave detrás de las Ecuaciones Diferenciales Ordinarias Neuronales (Neural ODEs)?",
          de: "Was ist die Schlüsselidee hinter Neural Ordinary Differential Equations (Neural ODEs)?",
          nl: "Wat is het kernidee achter Neural Ordinary Differential Equations (Neural ODEs)?"
        },
        options: [
          { en: "Model hidden state evolution as continuous-time differential equations instead of discrete layers", es: "Modelar evolución de estado oculto como ecuaciones diferenciales de tiempo continuo en lugar de capas discretas", de: "Versteckten Zustand als zeitkontinuierliche Differentialgleichungen statt diskrete Schichten modellieren", nl: "Verborgen toestandsevolutie modelleren als continue-tijd differentiaalvergelijkingen in plaats van discrete lagen" },
          { en: "Use ordinary differential equations to initialize network weights", es: "Usar ecuaciones diferenciales ordinarias para inicializar pesos de red", de: "Gewöhnliche Differentialgleichungen zur Initialisierung von Netzwerkgewichten verwenden", nl: "Gewone differentiaalvergelijkingen gebruiken om netwerkgewichten te initialiseren" },
          { en: "Solve ODEs numerically within each neural network layer", es: "Resolver ODEs numéricamente dentro de cada capa de red neuronal", de: "ODEs numerisch innerhalb jeder neuronalen Netzwerkschicht lösen", nl: "ODE's numeriek oplossen binnen elke neurale netwerklaag" },
          { en: "Train neural networks to approximate solutions to differential equations", es: "Entrenar redes neuronales para aproximar soluciones a ecuaciones diferenciales", de: "Neuronale Netzwerke trainieren um Lösungen zu Differentialgleichungen zu approximieren", nl: "Neurale netwerken trainen om oplossingen voor differentiaalvergelijkingen te benaderen" }
        ],
        correct: 0,
        explanation: {
          en: "Neural ODEs parameterize continuous transformations of hidden states using ODEs, replacing discrete residual layers. This enables constant memory cost for backpropagation, adaptive computation, and natural modeling of continuous-time data like physics simulations or irregular time series.",
          es: "Neural ODEs parametrizan transformaciones continuas de estados ocultos usando ODEs, reemplazando capas residuales discretas. Esto habilita costo de memoria constante para retropropagación, cálculo adaptativo y modelado natural de datos de tiempo continuo como simulaciones físicas o series temporales irregulares.",
          de: "Neural ODEs parametrisieren kontinuierliche Transformationen versteckter Zustände mit ODEs und ersetzen diskrete residuale Schichten. Dies ermöglicht konstante Speicherkosten für Backpropagation, adaptive Berechnung und natürliche Modellierung zeitkontinuierlicher Daten wie Physiksimulationen oder irreguläre Zeitreihen.",
          nl: "Neural ODEs parametriseren continue transformaties van verborgen toestanden met ODE's, waarbij discrete residuele lagen worden vervangen. Dit maakt constante geheugenkosten mogelijk voor backpropagation, adaptieve berekening en natuurlijke modellering van continue-tijdsdata zoals natuurkundesimulaties of onregelmatige tijdreeksen."
        }
      },
      {
        question: {
          en: "What is the main advantage of Contrastive Learning methods like SimCLR?",
          es: "¿Cuál es la principal ventaja de métodos de Aprendizaje Contrastivo como SimCLR?",
          de: "Was ist der Hauptvorteil von Contrastive Learning Methoden wie SimCLR?",
          nl: "Wat is het belangrijkste voordeel van Contrastive Learning methoden zoals SimCLR?"
        },
        options: [
          { en: "Learn powerful representations by maximizing agreement between augmented views of same data", es: "Aprender representaciones poderosas maximizando acuerdo entre vistas aumentadas de los mismos datos", de: "Leistungsstarke Repräsentationen lernen durch Maximierung der Übereinstimmung zwischen augmentierten Ansichten derselben Daten", nl: "Krachtige representaties leren door overeenstemming te maximaliseren tussen geaugmenteerde weergaven van dezelfde data" },
          { en: "Compare different models to select the best architecture", es: "Comparar diferentes modelos para seleccionar la mejor arquitectura", de: "Verschiedene Modelle vergleichen um die beste Architektur auszuwählen", nl: "Verschillende modellen vergelijken om de beste architectuur te selecteren" },
          { en: "Train models that contrast positive and negative examples equally", es: "Entrenar modelos que contrastan ejemplos positivos y negativos por igual", de: "Modelle trainieren die positive und negative Beispiele gleichermaßen kontrastieren", nl: "Modellen trainen die positieve en negatieve voorbeelden gelijkelijk contrasteren" },
          { en: "Use contrasting loss functions for different training phases", es: "Usar funciones de pérdida contrastantes para diferentes fases de entrenamiento", de: "Kontrastierende Verlustfunktionen für verschiedene Trainingsphasen verwenden", nl: "Contrasterende verliesfuncties gebruiken voor verschillende trainingsfasen" }
        ],
        correct: 0,
        explanation: {
          en: "Contrastive learning learns representations by pulling together embeddings of augmented versions of the same image (positive pairs) while pushing apart embeddings of different images (negative pairs). This self-supervised approach achieves strong transfer learning performance without labels.",
          es: "El aprendizaje contrastivo aprende representaciones acercando embeddings de versiones aumentadas de la misma imagen (pares positivos) mientras aleja embeddings de diferentes imágenes (pares negativos). Este enfoque auto-supervisado logra fuerte rendimiento de aprendizaje por transferencia sin etiquetas.",
          de: "Contrastive Learning lernt Repräsentationen durch Zusammenziehen von Embeddings augmentierter Versionen desselben Bildes (positive Paare) während Embeddings verschiedener Bilder auseinandergedrückt werden (negative Paare). Dieser selbstüberwachte Ansatz erreicht starke Transfer-Learning-Leistung ohne Labels.",
          nl: "Contrastive learning leert representaties door embeddings van geaugmenteerde versies van hetzelfde beeld samen te trekken (positieve paren) terwijl embeddings van verschillende beelden uit elkaar worden geduwd (negatieve paren). Deze zelf-gesuperviseerde aanpak bereikt sterke transfer learning-prestaties zonder labels."
        }
      },
      {
        question: {
          en: "What is the significance of the Chinchilla scaling laws?",
          es: "¿Cuál es la significación de las leyes de escalado de Chinchilla?",
          de: "Was ist die Bedeutung der Chinchilla-Skalierungsgesetze?",
          nl: "Wat is de betekenis van de Chinchilla-schallingswetten?"
        },
        options: [
          { en: "Optimal model size and training tokens should scale proportionally for compute-efficient training", es: "Tamaño de modelo óptimo y tokens de entrenamiento deben escalar proporcionalmente para entrenamiento eficiente en cómputo", de: "Optimale Modellgröße und Trainings-Tokens sollten proportional für compute-effizientes Training skalieren", nl: "Optimale modelgrootte en trainingstokens moeten proportioneel schalen voor rekenefficiënte training" },
          { en: "Larger models always perform better regardless of data size", es: "Modelos más grandes siempre tienen mejor rendimiento independientemente del tamaño de datos", de: "Größere Modelle performen immer besser unabhängig von Datengröße", nl: "Grotere modellen presteren altijd beter ongeacht datagrootte" },
          { en: "Training data should be scaled exponentially with model depth", es: "Datos de entrenamiento deben escalarse exponencialmente con profundidad del modelo", de: "Trainingsdaten sollten exponentiell mit Modelltiefe skaliert werden", nl: "Trainingsdata moet exponentieel geschaald worden met modeldiepte" },
          { en: "Chinchilla-sized models are most efficient for all tasks", es: "Modelos tamaño Chinchilla son más eficientes para todas las tareas", de: "Chinchilla-große Modelle sind am effizientesten für alle Aufgaben", nl: "Chinchilla-grote modellen zijn meest efficiënt voor alle taken" }
        ],
        correct: 0,
        explanation: {
          en: "Chinchilla scaling laws revealed that previous large models were undertrained. For a given compute budget, model size and training data should scale proportionally (roughly 1:1 ratio of parameters to tokens), not just making models bigger. This led to more efficient training of models like Chinchilla and LLaMA.",
          es: "Las leyes de escalado de Chinchilla revelaron que modelos grandes previos estaban sub-entrenados. Para un presupuesto de cómputo dado, tamaño de modelo y datos de entrenamiento deben escalar proporcionalmente (aproximadamente ratio 1:1 de parámetros a tokens), no solo hacer modelos más grandes. Esto llevó a entrenamiento más eficiente de modelos como Chinchilla y LLaMA.",
          de: "Chinchilla-Skalierungsgesetze enthüllten dass vorherige große Modelle untertrainiert waren. Für ein gegebenes Compute-Budget sollten Modellgröße und Trainingsdaten proportional skalieren (ungefähr 1:1-Verhältnis von Parametern zu Tokens), nicht nur Modelle größer machen. Dies führte zu effizienteren Training von Modellen wie Chinchilla und LLaMA.",
          nl: "Chinchilla-schallingswetten onthulden dat eerdere grote modellen ondergetraind waren. Voor een gegeven rekenbudget moeten modelgrootte en trainingsdata proportioneel schalen (ongeveer 1:1 verhouding van parameters tot tokens), niet alleen modellen groter maken. Dit leidde tot efficiënter training van modellen zoals Chinchilla en LLaMA."
        }
      },
      {
        question: {
          en: "What is the primary goal of Diffusion Models in generative AI?",
          es: "¿Cuál es el objetivo principal de los Modelos de Difusión en IA generativa?",
          de: "Was ist das primäre Ziel von Diffusionsmodellen in generativer KI?",
          nl: "Wat is het primaire doel van Diffusiemodellen in generatieve AI?"
        },
        options: [
          { en: "Learn to reverse a gradual noising process to generate high-quality samples from noise", es: "Aprender a revertir un proceso gradual de ruido para generar muestras de alta calidad desde ruido", de: "Lernen einen graduellen Rauschprozess umzukehren um hochwertige Samples aus Rauschen zu generieren", nl: "Leren een geleidelijk ruisproces om te keren om hoogwaardige samples te genereren uit ruis" },
          { en: "Diffuse information across all network layers equally", es: "Difundir información a través de todas las capas de red por igual", de: "Informationen gleichmäßig über alle Netzwerkschichten diffundieren", nl: "Informatie gelijkmatig verspreiden over alle netwerklagen" },
          { en: "Model how concepts diffuse through semantic space", es: "Modelar cómo los conceptos se difunden a través del espacio semántico", de: "Modellieren wie Konzepte durch semantischen Raum diffundieren", nl: "Modelleren hoe concepten diffunderen door semantische ruimte" },
          { en: "Spread training signal diffusely to prevent overfitting", es: "Distribuir señal de entrenamiento difusamente para prevenir sobreajuste", de: "Trainingssignal diffus verteilen um Overfitting zu verhindern", nl: "Trainingssignaal diffuus verspreiden om overfitting te voorkomen" }
        ],
        correct: 0,
        explanation: {
          en: "Diffusion models gradually add noise to data in forward process, then learn to reverse this by denoising. During generation, they iteratively denoise pure noise into realistic samples. This approach powers state-of-the-art image generation models like DALL-E 2, Stable Diffusion, and Imagen.",
          es: "Los modelos de difusión agregan gradualmente ruido a datos en proceso directo, luego aprenden a revertir esto desruidando. Durante generación, iterativamente desruidan ruido puro en muestras realistas. Este enfoque impulsa modelos de generación de imágenes estado del arte como DALL-E 2, Stable Diffusion e Imagen.",
          de: "Diffusionsmodelle fügen Daten im Vorwärtsprozess schrittweise Rauschen hinzu, lernen dann dies durch Entrauschen umzukehren. Während Generierung entrauschen sie iterativ reines Rauschen zu realistischen Samples. Dieser Ansatz treibt State-of-the-Art-Bildgenerierungsmodelle wie DALL-E 2, Stable Diffusion und Imagen an.",
          nl: "Diffusiemodellen voegen geleidelijk ruis toe aan data in voorwaarts proces, leren dan dit om te keren door te denoisen. Tijdens generatie denoisen ze iteratief pure ruis tot realistische samples. Deze aanpak drijft state-of-the-art beeldgeneratiemodellen zoals DALL-E 2, Stable Diffusion en Imagen aan."
        }
      },
      {
        question: {
          en: "What is the main innovation of Mixture of Experts (MoE) at scale in large language models?",
          es: "¿Cuál es la principal innovación de Mezcla de Expertos (MoE) a escala en grandes modelos de lenguaje?",
          de: "Was ist die Hauptinnovation von Mixture of Experts (MoE) im großen Maßstab in großen Sprachmodellen?",
          nl: "Wat is de belangrijkste innovatie van Mixture of Experts (MoE) op schaal in grote taalmodellen?"
        },
        options: [
          { en: "Scale model capacity dramatically while keeping inference cost manageable through sparse activation", es: "Escalar capacidad de modelo dramáticamente manteniendo costo de inferencia manejable a través de activación dispersa", de: "Modellkapazität dramatisch skalieren während Inferenzkosten durch spärliche Aktivierung handhabbar bleiben", nl: "Modelcapaciteit dramatisch schalen terwijl inferentiekosten beheersbaar blijven door schaarse activering" },
          { en: "Mix different expert models trained on separate domains", es: "Mezclar diferentes modelos expertos entrenados en dominios separados", de: "Verschiedene Expertenmodelle gemischt trainiert auf separaten Domänen", nl: "Verschillende expertmodellen mixen getraind op aparte domeinen" },
          { en: "Create ensemble of specialist networks for different tasks", es: "Crear ensamble de redes especialistas para diferentes tareas", de: "Ensemble von Spezialistennetzwerken für verschiedene Aufgaben erstellen", nl: "Ensemble van specialistennetwerken creëren voor verschillende taken" },
          { en: "Allow human experts to guide model training decisions", es: "Permitir que expertos humanos guíen decisiones de entrenamiento del modelo", de: "Menschlichen Experten erlauben Modell-Trainingsentscheidungen zu leiten", nl: "Menselijke experts toestaan modeltrainingsbeslissingen te sturen" }
        ],
        correct: 0,
        explanation: {
          en: "Large-scale MoE (like Switch Transformer, GLaM) routes each token to a small subset of expert networks, activating only a fraction of total parameters per forward pass. This enables trillion-parameter models with practical inference costs, as only activated experts consume computation.",
          es: "MoE a gran escala (como Switch Transformer, GLaM) enruta cada token a un pequeño subconjunto de redes expertas, activando solo una fracción de parámetros totales por pase directo. Esto habilita modelos de billones de parámetros con costos prácticos de inferencia, ya que solo expertos activados consumen computación.",
          de: "Großmaßstäbliches MoE (wie Switch Transformer, GLaM) routet jeden Token zu einer kleinen Teilmenge von Expertennetzwerken, aktiviert nur einen Bruchteil der Gesamtparameter pro Vorwärtsdurchlauf. Dies ermöglicht Billionen-Parameter-Modelle mit praktischen Inferenzkosten, da nur aktivierte Experten Berechnung verbrauchen.",
          nl: "Grootschalige MoE (zoals Switch Transformer, GLaM) routeert elk token naar een kleine subset van expertnetwerken, waarbij slechts een fractie van totale parameters per voorwaartse doorgang wordt geactiveerd. Dit maakt biljoen-parameter modellen mogelijk met praktische inferentiekosten, aangezien alleen geactiveerde experts berekening verbruiken."
        }
      },
      {
        question: {
          en: "What is the key concept behind RLHF (Reinforcement Learning from Human Feedback)?",
          es: "¿Cuál es el concepto clave detrás de RLHF (Aprendizaje por Refuerzo desde Retroalimentación Humana)?",
          de: "Was ist das Schlüsselkonzept hinter RLHF (Reinforcement Learning from Human Feedback)?",
          nl: "Wat is het kernconcept achter RLHF (Reinforcement Learning from Human Feedback)?"
        },
        options: [
          { en: "Train reward models from human preferences to align AI behavior with human values", es: "Entrenar modelos de recompensa desde preferencias humanas para alinear comportamiento de IA con valores humanos", de: "Belohnungsmodelle aus menschlichen Präferenzen trainieren um KI-Verhalten mit menschlichen Werten auszurichten", nl: "Beloningsmodellen trainen vanuit menselijke voorkeuren om AI-gedrag af te stemmen op menselijke waarden" },
          { en: "Have humans directly provide feedback during each training iteration", es: "Tener humanos proporcionando retroalimentación directamente durante cada iteración de entrenamiento", de: "Menschen direkt Feedback während jeder Trainingsiteration geben lassen", nl: "Mensen directe feedback laten geven tijdens elke trainingiteratie" },
          { en: "Use reinforcement learning to optimize human-computer interaction", es: "Usar aprendizaje por refuerzo para optimizar interacción humano-computadora", de: "Verstärkungslernen zur Optimierung der Mensch-Computer-Interaktion verwenden", nl: "Reinforcement learning gebruiken om mens-computer interactie te optimaliseren" },
          { en: "Reinforce learning through human-labeled datasets", es: "Reforzar aprendizaje a través de conjuntos de datos etiquetados por humanos", de: "Lernen durch menschlich gelabelte Datensätze verstärken", nl: "Leren versterken door menselijk gelabelde datasets" }
        ],
        correct: 0,
        explanation: {
          en: "RLHF trains a reward model from human comparisons of model outputs, then uses reinforcement learning (typically PPO) to optimize the language model to maximize this learned reward. This approach made models like ChatGPT more helpful, harmless, and honest by aligning them with human preferences.",
          es: "RLHF entrena un modelo de recompensa desde comparaciones humanas de salidas del modelo, luego usa aprendizaje por refuerzo (típicamente PPO) para optimizar el modelo de lenguaje para maximizar esta recompensa aprendida. Este enfoque hizo modelos como ChatGPT más útiles, inofensivos y honestos alineándolos con preferencias humanas.",
          de: "RLHF trainiert ein Belohnungsmodell aus menschlichen Vergleichen von Modellausgaben, verwendet dann Verstärkungslernen (typischerweise PPO) um das Sprachmodell zu optimieren diese gelernte Belohnung zu maximieren. Dieser Ansatz machte Modelle wie ChatGPT hilfreicher, harmloser und ehrlicher durch Ausrichtung an menschlichen Präferenzen.",
          nl: "RLHF traint een beloningsmodel vanuit menselijke vergelijkingen van model-outputs, gebruikt dan reinforcement learning (typisch PPO) om het taalmodel te optimaliseren om deze geleerde beloning te maximaliseren. Deze aanpak maakte modellen zoals ChatGPT nuttiger, onschadelijker en eerlijker door ze af te stemmen op menselijke voorkeuren."
        }
      },
      {
        question: {
          en: "What is the significance of the Grokking phenomenon in neural networks?",
          es: "¿Cuál es la significación del fenómeno de Grokking en redes neuronales?",
          de: "Was ist die Bedeutung des Grokking-Phänomens in neuronalen Netzwerken?",
          nl: "Wat is de betekenis van het Grokking-fenomeen in neurale netwerken?"
        },
        options: [
          { en: "Models suddenly generalize well after initially memorizing, showing delayed understanding", es: "Modelos generalizan súbitamente bien después de inicialmente memorizar, mostrando comprensión retrasada", de: "Modelle generalisieren plötzlich gut nach anfänglichem Auswendiglernen, zeigen verzögertes Verständnis", nl: "Modellen generaliseren plotseling goed na aanvankelijk memoriseren, wat vertraagd begrip toont" },
          { en: "Networks develop human-like intuition about problems", es: "Redes desarrollan intuición tipo humana sobre problemas", de: "Netzwerke entwickeln menschenähnliche Intuition über Probleme", nl: "Netwerken ontwikkelen mensachtige intuïtie over problemen" },
          { en: "Gradual improvement in training follows predictable patterns", es: "Mejora gradual en entrenamiento sigue patrones predecibles", de: "Graduelle Verbesserung im Training folgt vorhersagbaren Mustern", nl: "Geleidelijke verbetering in training volgt voorspelbare patronen" },
          { en: "Models achieve perfect memorization of training data", es: "Modelos logran memorización perfecta de datos de entrenamiento", de: "Modelle erreichen perfekte Auswendiglernen von Trainingsdaten", nl: "Modellen bereiken perfecte memorisatie van trainingsdata" }
        ],
        correct: 0,
        explanation: {
          en: "Grokking describes the phenomenon where a neural network first memorizes training data (achieving low train error but high test error), then after continued training, suddenly transitions to generalizing well. This challenges assumptions about overfitting and suggests models can find generalizable solutions even after appearing to overfit.",
          es: "Grokking describe el fenómeno donde una red neuronal primero memoriza datos de entrenamiento (logrando bajo error de entrenamiento pero alto error de prueba), luego después de entrenamiento continuado, súbitamente transiciona a generalizar bien. Esto desafía suposiciones sobre sobreajuste y sugiere que modelos pueden encontrar soluciones generalizables incluso después de parecer sobreajustar.",
          de: "Grokking beschreibt das Phänomen wo ein neuronales Netzwerk zunächst Trainingsdaten auswendig lernt (niedrigen Trainingsfehler aber hohen Testfehler erreicht), dann nach fortgesetztem Training plötzlich zu guter Generalisierung übergeht. Dies stellt Annahmen über Overfitting in Frage und deutet darauf hin dass Modelle generalisierbare Lösungen finden können selbst nach scheinbarem Overfitting.",
          nl: "Grokking beschrijft het fenomeen waarbij een neuraal netwerk eerst trainingsdata memoriseert (lage trainingsfout maar hoge testfout bereikt), dan na voortgezette training plotseling overgaat naar goed generaliseren. Dit daagt aannames over overfitting uit en suggereert dat modellen generaliseerbare oplossingen kunnen vinden zelfs na ogenschijnlijk overfitten."
        }
      },
      {
        question: {
          en: "What is the main purpose of Parameter-Efficient Fine-Tuning (PEFT) methods like LoRA?",
          es: "¿Cuál es el propósito principal de métodos de Ajuste Fino Eficiente en Parámetros (PEFT) como LoRA?",
          de: "Was ist der Hauptzweck von Parameter-Efficient Fine-Tuning (PEFT) Methoden wie LoRA?",
          nl: "Wat is het hoofddoel van Parameter-Efficient Fine-Tuning (PEFT) methoden zoals LoRA?"
        },
        options: [
          { en: "Adapt large pre-trained models to new tasks by training only a small fraction of parameters", es: "Adaptar grandes modelos pre-entrenados a nuevas tareas entrenando solo una pequeña fracción de parámetros", de: "Große vortrainierte Modelle auf neue Aufgaben anpassen durch Training nur eines kleinen Bruchteils der Parameter", nl: "Grote voorgetrainde modellen aanpassen aan nieuwe taken door slechts een kleine fractie van parameters te trainen" },
          { en: "Efficiently search for optimal hyperparameters", es: "Buscar eficientemente hiperparámetros óptimos", de: "Effizient nach optimalen Hyperparametern suchen", nl: "Efficiënt zoeken naar optimale hyperparameters" },
          { en: "Reduce the number of parameters in trained models", es: "Reducir el número de parámetros en modelos entrenados", de: "Anzahl der Parameter in trainierten Modellen reduzieren", nl: "Aantal parameters in getrainde modellen verminderen" },
          { en: "Tune parameters more precisely than standard methods", es: "Ajustar parámetros más precisamente que métodos estándar", de: "Parameter präziser als Standardmethoden tunen", nl: "Parameters nauwkeuriger afstemmen dan standaardmethoden" }
        ],
        correct: 0,
        explanation: {
          en: "PEFT methods like LoRA (Low-Rank Adaptation) freeze most pre-trained weights and only train small adapter modules or low-rank decompositions. This enables efficient fine-tuning of billion-parameter models with minimal compute and memory, making personalized AI more accessible.",
          es: "Métodos PEFT como LoRA (Adaptación de Bajo Rango) congelan la mayoría de pesos pre-entrenados y solo entrenan pequeños módulos adaptadores o descomposiciones de bajo rango. Esto habilita ajuste fino eficiente de modelos de miles de millones de parámetros con mínimo cómputo y memoria, haciendo IA personalizada más accesible.",
          de: "PEFT-Methoden wie LoRA (Low-Rank Adaptation) frieren die meisten vortrainierten Gewichte ein und trainieren nur kleine Adapter-Module oder Low-Rank-Zerlegungen. Dies ermöglicht effizientes Fine-Tuning von Milliarden-Parameter-Modellen mit minimalem Compute und Speicher, macht personalisierte KI zugänglicher.",
          nl: "PEFT-methoden zoals LoRA (Low-Rank Adaptation) bevriezen de meeste voorgetrainde gewichten en trainen alleen kleine adapter-modules of lage-rang decompositionen. Dit maakt efficiënte fine-tuning mogelijk van miljard-parameter modellen met minimale berekening en geheugen, waardoor gepersonaliseerde AI toegankelijker wordt."
        }
      },
      {
        question: {
          en: "What is the primary innovation of Retrieval-Augmented Generation (RAG)?",
          es: "¿Cuál es la innovación principal de la Generación Aumentada por Recuperación (RAG)?",
          de: "Was ist die primäre Innovation von Retrieval-Augmented Generation (RAG)?",
          nl: "Wat is de primaire innovatie van Retrieval-Augmented Generation (RAG)?"
        },
        options: [
          { en: "Combine neural generation with retrieved external knowledge to improve factuality and reduce hallucinations", es: "Combinar generación neuronal con conocimiento externo recuperado para mejorar factualidad y reducir alucinaciones", de: "Neuronale Generierung mit abgerufenem externen Wissen kombinieren um Faktizität zu verbessern und Halluzinationen zu reduzieren", nl: "Neurale generatie combineren met opgehaalde externe kennis om feitelijkheid te verbeteren en hallucinaties te verminderen" },
          { en: "Retrieve and reuse previously generated outputs", es: "Recuperar y reutilizar salidas previamente generadas", de: "Zuvor generierte Ausgaben abrufen und wiederverwenden", nl: "Eerder gegenereerde outputs ophalen en hergebruiken" },
          { en: "Generate synthetic training data through retrieval methods", es: "Generar datos de entrenamiento sintéticos a través de métodos de recuperación", de: "Synthetische Trainingsdaten durch Abrufmethoden generieren", nl: "Synthetische trainingsdata genereren via ophaalmethoden" },
          { en: "Augment model capacity by retrieving additional parameters", es: "Aumentar capacidad del modelo recuperando parámetros adicionales", de: "Modellkapazität durch Abruf zusätzlicher Parameter erweitern", nl: "Modelcapaciteit vergroten door extra parameters op te halen" }
        ],
        correct: 0,
        explanation: {
          en: "RAG retrieves relevant documents from external knowledge bases, then conditions language model generation on both the input query and retrieved context. This grounds generation in factual information, enables updating knowledge without retraining, and significantly reduces hallucinations in outputs.",
          es: "RAG recupera documentos relevantes de bases de conocimiento externas, luego condiciona generación del modelo de lenguaje tanto en la consulta de entrada como en contexto recuperado. Esto fundamenta generación en información factual, habilita actualizar conocimiento sin reentrenar y reduce significativamente alucinaciones en salidas.",
          de: "RAG ruft relevante Dokumente aus externen Wissensbasen ab, konditioniert dann Sprachmodellgenerierung sowohl auf Eingabeabfrage als auch abgerufenen Kontext. Dies gründet Generierung in faktischen Informationen, ermöglicht Wissensaktualisierung ohne Nachtraining und reduziert Halluzinationen in Ausgaben signifikant.",
          nl: "RAG haalt relevante documenten op uit externe kennisbanken, conditioneert dan taalmodelgeneratie op zowel de invoerquery als opgehaalde context. Dit grondt generatie in feitelijke informatie, maakt kennisupdate mogelijk zonder hertraining en vermindert hallucinaties in outputs aanzienlijk."
        }
      },
      {
        question: {
          en: "What is the key challenge addressed by Constitutional AI?",
          es: "¿Cuál es el desafío clave abordado por IA Constitucional?",
          de: "Was ist die Schlüsselherausforderung die Constitutional AI adressiert?",
          nl: "Wat is de belangrijkste uitdaging aangepakt door Constitutional AI?"
        },
        options: [
          { en: "Train AI systems to be helpful, harmless, and honest using self-improvement guided by principles", es: "Entrenar sistemas de IA para ser útiles, inofensivos y honestos usando auto-mejora guiada por principios", de: "KI-Systeme trainieren hilfreich, harmlos und ehrlich zu sein unter Verwendung von Selbstverbesserung geleitet durch Prinzipien", nl: "AI-systemen trainen om nuttig, onschadelijk en eerlijk te zijn met zelfverbetering geleid door principes" },
          { en: "Ensure AI systems follow constitutional law and regulations", es: "Asegurar que sistemas de IA sigan ley constitucional y regulaciones", de: "Sicherstellen dass KI-Systeme Verfassungsrecht und Vorschriften folgen", nl: "Ervoor zorgen dat AI-systemen grondwettelijk recht en regels volgen" },
          { en: "Build AI governance structures like democratic constitutions", es: "Construir estructuras de gobernanza de IA como constituciones democráticas", de: "KI-Governance-Strukturen wie demokratische Verfassungen aufbauen", nl: "AI-governance structuren bouwen zoals democratische grondwetten" },
          { en: "Create fundamental rights for AI systems", es: "Crear derechos fundamentales para sistemas de IA", de: "Grundrechte für KI-Systeme schaffen", nl: "Fundamentele rechten creëren voor AI-systemen" }
        ],
        correct: 0,
        explanation: {
          en: "Constitutional AI trains models to critique and revise their own responses according to a set of principles (a 'constitution') before RLHF. This reduces reliance on human feedback for safety, enables transparent value specification, and helps create more aligned AI systems through principle-based self-improvement.",
          es: "IA Constitucional entrena modelos para criticar y revisar sus propias respuestas según un conjunto de principios (una 'constitución') antes de RLHF. Esto reduce dependencia de retroalimentación humana para seguridad, habilita especificación transparente de valores y ayuda a crear sistemas de IA más alineados a través de auto-mejora basada en principios.",
          de: "Constitutional AI trainiert Modelle ihre eigenen Antworten gemäß einem Satz von Prinzipien (einer 'Verfassung') vor RLHF zu kritisieren und zu revidieren. Dies reduziert Abhängigkeit von menschlichem Feedback für Sicherheit, ermöglicht transparente Wertspezifikation und hilft durch prinzipienbasierte Selbstverbesserung besser ausgerichtete KI-Systeme zu schaffen.",
          nl: "Constitutional AI traint modellen om hun eigen antwoorden te bekritiseren en herzien volgens een set principes (een 'grondwet') vóór RLHF. Dit vermindert afhankelijkheid van menselijke feedback voor veiligheid, maakt transparante waardespecificatie mogelijk en helpt meer afgestemde AI-systemen te creëren door principe-gebaseerde zelfverbetering."
        }
      },
      {
        question: {
          en: "What is the main concept behind Prompt Engineering and In-Context Learning?",
          es: "¿Cuál es el concepto principal detrás de Ingeniería de Prompts y Aprendizaje en Contexto?",
          de: "Was ist das Hauptkonzept hinter Prompt Engineering und In-Context Learning?",
          nl: "Wat is het hoofdconcept achter Prompt Engineering en In-Context Learning?"
        },
        options: [
          { en: "Guide model behavior through carefully designed input examples without changing model weights", es: "Guiar comportamiento del modelo a través de ejemplos de entrada cuidadosamente diseñados sin cambiar pesos del modelo", de: "Modellverhalten durch sorgfältig entworfene Eingabebeispiele leiten ohne Modellgewichte zu ändern", nl: "Modelgedrag sturen door zorgvuldig ontworpen invoervoorbeelden zonder modelgewichten te veranderen" },
          { en: "Engineer better prompts for human-computer interaction", es: "Ingeniar mejores prompts para interacción humano-computadora", de: "Bessere Prompts für Mensch-Computer-Interaktion entwickeln", nl: "Betere prompts ontwerpen voor mens-computer interactie" },
          { en: "Learn optimal prompting strategies through reinforcement learning", es: "Aprender estrategias de prompting óptimas a través de aprendizaje por refuerzo", de: "Optimale Prompting-Strategien durch Verstärkungslernen lernen", nl: "Optimale prompting-strategieën leren via reinforcement learning" },
          { en: "Create prompts that train models more efficiently", es: "Crear prompts que entrenan modelos más eficientemente", de: "Prompts erstellen die Modelle effizienter trainieren", nl: "Prompts creëren die modellen efficiënter trainen" }
        ],
        correct: 0,
        explanation: {
          en: "In-context learning allows large language models to perform new tasks by providing examples in the prompt, without gradient updates. Through techniques like few-shot prompting, chain-of-thought, and instruction following, models adapt their behavior based purely on context, demonstrating remarkable generalization abilities.",
          es: "El aprendizaje en contexto permite a grandes modelos de lenguaje realizar nuevas tareas proporcionando ejemplos en el prompt, sin actualizaciones de gradiente. A través de técnicas como prompting de pocos ejemplos, cadena de pensamiento y seguimiento de instrucciones, modelos adaptan su comportamiento puramente basado en contexto, demostrando habilidades de generalización notables.",
          de: "In-Context Learning ermöglicht großen Sprachmodellen neue Aufgaben durchzuführen durch Bereitstellung von Beispielen im Prompt, ohne Gradient-Updates. Durch Techniken wie Few-Shot-Prompting, Chain-of-Thought und Instruktionsbefolgung passen Modelle ihr Verhalten rein auf Kontext basierend an, demonstrieren bemerkenswerte Generalisierungsfähigkeiten.",
          nl: "In-context learning stelt grote taalmodellen in staat nieuwe taken uit te voeren door voorbeelden in de prompt te geven, zonder gradiëntupdates. Door technieken zoals few-shot prompting, chain-of-thought en instructievolging passen modellen hun gedrag aan puur gebaseerd op context, wat opmerkelijke generalisatievaardigheden toont."
        }
      },
      {
        question: {
          en: "What is the significance of model merging and model soups in neural networks?",
          es: "¿Cuál es la significación de fusión de modelos y sopas de modelos en redes neuronales?",
          de: "Was ist die Bedeutung von Modellverschmelzung und Model Soups in neuronalen Netzwerken?",
          nl: "Wat is de betekenis van model merging en model soups in neurale netwerken?"
        },
        options: [
          { en: "Averaging weights from multiple trained models often improves performance without additional training", es: "Promediar pesos de múltiples modelos entrenados a menudo mejora rendimiento sin entrenamiento adicional", de: "Gewichte von mehreren trainierten Modellen mitteln verbessert oft Leistung ohne zusätzliches Training", nl: "Gewichten middelen van meerdere getrainde modellen verbetert vaak prestaties zonder extra training" },
          { en: "Merge different architectures into hybrid models", es: "Fusionar diferentes arquitecturas en modelos híbridos", de: "Verschiedene Architekturen in Hybridmodelle verschmelzen", nl: "Verschillende architecturen samenvoegen tot hybride modellen" },
          { en: "Combine training datasets from multiple sources", es: "Combinar conjuntos de datos de entrenamiento de múltiples fuentes", de: "Trainingsdatensätze von mehreren Quellen kombinieren", nl: "Trainingsdatasets van meerdere bronnen combineren" },
          { en: "Create ensemble predictions by mixing model outputs", es: "Crear predicciones de ensamble mezclando salidas de modelos", de: "Ensemble-Vorhersagen durch Mischen von Modellausgaben erstellen", nl: "Ensemble-voorspellingen creëren door model-outputs te mixen" }
        ],
        correct: 0,
        explanation: {
          en: "Model soups average weights from multiple models trained with different hyperparameters or data orders. Surprisingly, this simple averaging often matches or exceeds individual model performance and ensemble predictions, providing a compute-free way to improve model quality and robustness.",
          es: "Sopas de modelos promedian pesos de múltiples modelos entrenados con diferentes hiperparámetros u órdenes de datos. Sorprendentemente, este promediado simple a menudo iguala o supera rendimiento de modelos individuales y predicciones de ensamble, proporcionando una forma libre de cómputo para mejorar calidad y robustez del modelo.",
          de: "Model Soups mitteln Gewichte von mehreren Modellen trainiert mit verschiedenen Hyperparametern oder Datenreihenfolgen. Überraschenderweise entspricht oder übertrifft diese einfache Mittelung oft individuelle Modellleistung und Ensemble-Vorhersagen, bietet eine rechenfreie Möglichkeit Modellqualität und Robustheit zu verbessern.",
          nl: "Model soups middelen gewichten van meerdere modellen getraind met verschillende hyperparameters of data-volgordes. Verrassend genoeg evenaart of overtreft dit eenvoudige middelen vaak individuele modelprestaties en ensemble-voorspellingen, wat een rekenvrije manier biedt om modelkwaliteit en robuustheid te verbeteren."
        }
      },
      {
        question: {
          en: "What is the main goal of Mechanistic Interpretability research?",
          es: "¿Cuál es el objetivo principal de la investigación en Interpretabilidad Mecanicista?",
          de: "Was ist das Hauptziel der Mechanistic Interpretability Forschung?",
          nl: "Wat is het hoofddoel van Mechanistic Interpretability onderzoek?"
        },
        options: [
          { en: "Reverse-engineer neural networks to understand the algorithms and circuits they learn", es: "Realizar ingeniería inversa de redes neuronales para entender los algoritmos y circuitos que aprenden", de: "Neuronale Netzwerke zurück-entwickeln um die Algorithmen und Schaltungen die sie lernen zu verstehen", nl: "Neurale netwerken reverse-engineeren om de algoritmen en circuits die ze leren te begrijpen" },
          { en: "Build mechanical systems that interpret neural network outputs", es: "Construir sistemas mecánicos que interpreten salidas de redes neuronales", de: "Mechanische Systeme bauen die neuronale Netzwerkausgaben interpretieren", nl: "Mechanische systemen bouwen die neurale netwerkoutputs interpreteren" },
          { en: "Create interpretable mechanisms for model training", es: "Crear mecanismos interpretables para entrenamiento de modelos", de: "Interpretierbare Mechanismen für Modelltraining erstellen", nl: "Interpreteerbare mechanismen creëren voor modeltraining" },
          { en: "Develop mechanical analogies for neural network behavior", es: "Desarrollar analogías mecánicas para comportamiento de redes neuronales", de: "Mechanische Analogien für neuronales Netzwerkverhalten entwickeln", nl: "Mechanische analogieën ontwikkelen voor neuraal netwerkgedrag" }
        ],
        correct: 0,
        explanation: {
          en: "Mechanistic interpretability aims to understand neural networks at the level of individual neurons and circuits, identifying specific features they detect and algorithms they implement. This goes beyond black-box interpretability to reverse-engineer the actual computational mechanisms, crucial for AI safety and scientific understanding.",
          es: "La interpretabilidad mecanicista tiene como objetivo entender redes neuronales al nivel de neuronas individuales y circuitos, identificando características específicas que detectan y algoritmos que implementan. Esto va más allá de interpretabilidad de caja negra para realizar ingeniería inversa de mecanismos computacionales reales, crucial para seguridad de IA y comprensión científica.",
          de: "Mechanistic Interpretability zielt darauf ab neuronale Netzwerke auf Ebene einzelner Neuronen und Schaltungen zu verstehen, spezifische Features die sie erkennen und Algorithmen die sie implementieren zu identifizieren. Dies geht über Black-Box-Interpretierbarkeit hinaus um tatsächliche rechnerische Mechanismen zurück zu entwickeln, entscheidend für KI-Sicherheit und wissenschaftliches Verständnis.",
          nl: "Mechanistic interpretability heeft tot doel neurale netwerken te begrijpen op het niveau van individuele neuronen en circuits, specifieke features die ze detecteren en algoritmen die ze implementeren te identificeren. Dit gaat verder dan black-box interpreteerbaarheid om de werkelijke computationele mechanismen te reverse-engineeren, cruciaal voor AI-veiligheid en wetenschappelijk begrip."
        }
      },
      {
        question: {
          en: "What is the primary innovation of Sparse Autoencoders (SAEs) in interpretability research?",
          es: "¿Cuál es la innovación principal de Autocodificadores Dispersos (SAEs) en investigación de interpretabilidad?",
          de: "Was ist die primäre Innovation von Sparse Autoencoders (SAEs) in der Interpretabilitätsforschung?",
          nl: "Wat is de primaire innovatie van Sparse Autoencoders (SAE's) in interpreteerbaarheidsonderzoek?"
        },
        options: [
          { en: "Decompose superposed neural activations into interpretable monosemantic features", es: "Descomponer activaciones neuronales superpuestas en características monosemánticas interpretables", de: "Überlagerte neuronale Aktivierungen in interpretierbare monosemantische Features zerlegen", nl: "Gesuperponeerde neurale activeringen ontleden in interpreteerbare monosemantische features" },
          { en: "Compress neural network representations with minimal information loss", es: "Comprimir representaciones de redes neuronales con mínima pérdida de información", de: "Neuronale Netzwerkrepräsentationen mit minimalem Informationsverlust komprimieren", nl: "Neurale netwerkrepresentaties comprimeren met minimaal informatieverlies" },
          { en: "Create sparse network architectures for efficient inference", es: "Crear arquitecturas de red dispersas para inferencia eficiente", de: "Spärliche Netzwerkarchitekturen für effiziente Inferenz erstellen", nl: "Schaarse netwerkarchitecturen creëren voor efficiënte inferentie" },
          { en: "Automatically encode data with minimal redundancy", es: "Codificar datos automáticamente con mínima redundancia", de: "Daten automatisch mit minimaler Redundanz kodieren", nl: "Data automatisch coderen met minimale redundantie" }
        ],
        correct: 0,
        explanation: {
          en: "SAEs address polysemanticity (neurons responding to multiple unrelated concepts) by learning sparse overcomplete representations that separate out individual interpretable features. This enables identifying what specific concepts models represent, crucial for understanding and controlling AI behavior at a fine-grained level.",
          es: "SAEs abordan polisemantismo (neuronas respondiendo a múltiples conceptos no relacionados) aprendiendo representaciones dispersas sobrecompletas que separan características interpretables individuales. Esto habilita identificar qué conceptos específicos representan modelos, crucial para entender y controlar comportamiento de IA a nivel granular fino.",
          de: "SAEs adressieren Polysemantik (Neuronen die auf mehrere unabhängige Konzepte reagieren) durch Lernen spärlicher übervollständiger Repräsentationen die einzelne interpretierbare Features trennen. Dies ermöglicht Identifizierung welche spezifischen Konzepte Modelle repräsentieren, entscheidend für Verständnis und Kontrolle von KI-Verhalten auf feinkörniger Ebene.",
          nl: "SAE's pakken polysemantiek aan (neuronen die reageren op meerdere ongerelateerde concepten) door schaarse overcomplete representaties te leren die individuele interpreteerbare features scheiden. Dit maakt het mogelijk te identificeren welke specifieke concepten modellen representeren, cruciaal voor begrip en controle van AI-gedrag op fijnmazig niveau."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  } else if (typeof window !== 'undefined') {
    window.level10 = level10;
  }
})();
