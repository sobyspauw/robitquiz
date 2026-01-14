// Machine Learning Quiz - Level 9: Expert-Level Machine Learning Research
(function() {
  const level9 = {
    name: {
      en: "ML Research & Innovation",
      es: "Investigación e Innovación en ML",
      de: "ML-Forschung & Innovation",
      nl: "ML Onderzoek & Innovatie"
    },
    questions: [
      {
        question: {
          en: "What is meta-learning (learning to learn) and how does it improve model adaptation?",
          es: "¿Qué es el meta-aprendizaje (aprender a aprender) y cómo mejora la adaptación del modelo?",
          de: "Was ist Meta-Learning (Lernen zu lernen) und wie verbessert es die Modellanpassung?",
          nl: "Wat is meta-learning (leren leren) en hoe verbetert het modelaanpassing?"
        },
        options: [
          { en: "Learning algorithms that can quickly adapt to new tasks with minimal data by learning optimization strategies", es: "Algoritmos de aprendizaje que pueden adaptarse rápidamente a nuevas tareas con datos mínimos aprendiendo estrategias de optimización", de: "Lernalgorithmen die sich schnell an neue Aufgaben mit minimalen Daten anpassen können durch Lernen von Optimierungsstrategien", nl: "Leeralgoritmes die zich snel kunnen aanpassen aan nieuwe taken met minimale data door optimalisatiestrategieën te leren" },
          { en: "Learning about the metadata of training datasets", es: "Aprender sobre los metadatos de conjuntos de datos de entrenamiento", de: "Lernen über Metadaten von Trainingsdatensätzen", nl: "Leren over metadata van trainingsdatasets" },
          { en: "Meta-analysis of different learning algorithms", es: "Meta-análisis de diferentes algoritmos de aprendizaje", de: "Meta-Analyse verschiedener Lernalgorithmen", nl: "Meta-analyse van verschillende leeralgoritmes" },
          { en: "Learning to select the best machine learning model", es: "Aprender a seleccionar el mejor modelo de machine learning", de: "Lernen das beste maschinelle Lernmodell auszuwählen", nl: "Leren het beste machine learning model te selecteren" }
        ],
        correct: 0,
        explanation: {
          en: "Meta-learning enables models to learn how to learn efficiently, allowing rapid adaptation to new tasks with few examples (few-shot learning), commonly implemented through gradient-based methods like MAML or metric learning approaches.",
          es: "El meta-aprendizaje permite a modelos aprender cómo aprender eficientemente, permitiendo adaptación rápida a nuevas tareas con pocos ejemplos (aprendizaje de pocos ejemplos), comúnmente implementado a través de métodos basados en gradientes como MAML o enfoques de aprendizaje métrico.",
          de: "Meta-Learning ermöglicht Modellen effizient zu lernen wie man lernt, ermöglicht schnelle Anpassung an neue Aufgaben mit wenigen Beispielen (Few-Shot Learning), häufig implementiert durch gradientenbasierte Methoden wie MAML oder metrische Lernansätze.",
          nl: "Meta-learning stelt modellen in staat om efficiënt te leren hoe te leren, maakt snelle aanpassing aan nieuwe taken mogelijk met weinig voorbeelden (few-shot learning), vaak geïmplementeerd door gradiënt-gebaseerde methoden zoals MAML of metrische leerbenaderingen."
        }
      },
      {
        question: {
          en: "What is the lottery ticket hypothesis in neural network pruning?",
          es: "¿Cuál es la hipótesis del boleto de lotería en la poda de redes neuronales?",
          de: "Was ist die Lottery Ticket Hypothesis beim Pruning neuronaler Netzwerke?",
          nl: "Wat is de lottery ticket hypothesis in neural network pruning?"
        },
        options: [
          { en: "Dense networks contain sparse subnetworks that can achieve comparable performance when trained in isolation", es: "Las redes densas contienen subredes dispersas que pueden lograr rendimiento comparable cuando se entrenan en aislamiento", de: "Dichte Netzwerke enthalten spärliche Teilnetzwerke die vergleichbare Leistung erreichen können wenn isoliert trainiert", nl: "Dichte netwerken bevatten dunne subnetwerken die vergelijkbare prestaties kunnen bereiken wanneer getraind in isolatie" },
          { en: "Random weight initialization determines training success", es: "La inicialización aleatoria de pesos determina el éxito del entrenamiento", de: "Zufällige Gewichtsinitialisierung bestimmt Trainingserfolg", nl: "Willekeurige gewichtsinitialisatie bepaalt trainingsucces" },
          { en: "Pruning networks improves their generalization ability", es: "La poda de redes mejora su capacidad de generalización", de: "Pruning von Netzwerken verbessert ihre Generalisierungsfähigkeit", nl: "Het snoeien van netwerken verbetert hun generalisatievermogen" },
          { en: "Only a few neurons contribute to network performance", es: "Solo unas pocas neuronas contribuyen al rendimiento de la red", de: "Nur wenige Neuronen tragen zur Netzwerkleistung bei", nl: "Slechts een paar neuronen dragen bij aan netwerkprestaties" }
        ],
        correct: 0,
        explanation: {
          en: "The lottery ticket hypothesis states that dense neural networks contain sparse subnetworks (winning tickets) that, when trained in isolation from the same random initialization, can match the performance of the original dense network.",
          es: "La hipótesis del boleto de lotería establece que las redes neuronales densas contienen subredes dispersas (boletos ganadores) que, cuando se entrenan en aislamiento desde la misma inicialización aleatoria, pueden igualar el rendimiento de la red densa original.",
          de: "Die Lottery Ticket Hypothesis besagt dass dichte neuronale Netzwerke spärliche Teilnetzwerke (Gewinntickets) enthalten die, wenn isoliert von derselben zufälligen Initialisierung trainiert, die Leistung des ursprünglichen dichten Netzwerks erreichen können.",
          nl: "De lottery ticket hypothesis stelt dat dichte neurale netwerken dunne subnetwerken (winnende tickets) bevatten die, wanneer getraind in isolatie vanaf dezelfde willekeurige initialisatie, de prestaties van het oorspronkelijke dichte netwerk kunnen evenaren."
        }
      },
      {
        question: {
          en: "What is neural architecture search (NAS) and how does it automate model design?",
          es: "¿Qué es la búsqueda de arquitectura neuronal (NAS) y cómo automatiza el diseño de modelos?",
          de: "Was ist Neural Architecture Search (NAS) und wie automatisiert es Modelldesign?",
          nl: "Wat is neural architecture search (NAS) en hoe automatiseert het modelontwerp?"
        },
        options: [
          { en: "Automated search algorithms that discover optimal neural architectures using reinforcement learning or evolutionary methods", es: "Algoritmos de búsqueda automatizada que descubren arquitecturas neuronales óptimas usando aprendizaje por refuerzo o métodos evolutivos", de: "Automatisierte Suchalgorithmen die optimale neuronale Architekturen durch Reinforcement Learning oder evolutionäre Methoden entdecken", nl: "Geautomatiseerde zoekalgoritmes die optimale neurale architecturen ontdekken met reinforcement learning of evolutionaire methoden" },
          { en: "Searching for the best hyperparameters manually", es: "Buscar los mejores hiperparámetros manualmente", de: "Manuelle Suche nach den besten Hyperparametern", nl: "Handmatig zoeken naar de beste hyperparameters" },
          { en: "Neural networks that search for patterns in data", es: "Redes neuronales que buscan patrones en datos", de: "Neuronale Netzwerke die nach Mustern in Daten suchen", nl: "Neurale netwerken die zoeken naar patronen in data" },
          { en: "Searching for optimal training algorithms", es: "Buscar algoritmos de entrenamiento óptimos", de: "Suche nach optimalen Trainingsalgorithmen", nl: "Zoeken naar optimale trainingsalgoritmes" }
        ],
        correct: 0,
        explanation: {
          en: "NAS automatically discovers neural network architectures that outperform hand-designed networks by using search algorithms to explore the architecture space, often finding novel designs that humans wouldn't consider.",
          es: "NAS descubre automáticamente arquitecturas de redes neuronales que superan redes diseñadas manualmente usando algoritmos de búsqueda para explorar el espacio de arquitectura, a menudo encontrando diseños novedosos que humanos no considerarían.",
          de: "NAS entdeckt automatisch neuronale Netzwerkarchitekturen die handdesignte Netzwerke übertreffen durch Verwendung von Suchalgorithmen um den Architekturraum zu erkunden, findet oft neuartige Designs die Menschen nicht berücksichtigen würden.",
          nl: "NAS ontdekt automatisch neurale netwerkarchitecturen die handmatig ontworpen netwerken overtreffen door zoekalgoritmes te gebruiken om de architectuurruimte te verkennen, vindt vaak nieuwe ontwerpen die mensen niet zouden overwegen."
        }
      },
      {
        question: {
          en: "What is differential privacy in machine learning and why is it important?",
          es: "¿Qué es la privacidad diferencial en machine learning y por qué es importante?",
          de: "Was ist differentielle Privatsphäre in maschinellem Lernen und warum ist sie wichtig?",
          nl: "Wat is differentiële privacy in machine learning en waarom is het belangrijk?"
        },
        options: [
          { en: "Mathematical framework that provides statistical guarantees about individual privacy in datasets by adding calibrated noise", es: "Marco matemático que proporciona garantías estadísticas sobre privacidad individual en conjuntos de datos agregando ruido calibrado", de: "Mathematisches Framework das statistische Garantien über individuelle Privatsphäre in Datensätzen durch Hinzufügen kalibriertem Rauschen bietet", nl: "Wiskundig raamwerk dat statistische garanties biedt over individuele privacy in datasets door gekalibreerde ruis toe te voegen" },
          { en: "Different privacy settings for different users", es: "Diferentes configuraciones de privacidad para diferentes usuarios", de: "Verschiedene Privatsphäreneinstellungen für verschiedene Benutzer", nl: "Verschillende privacy-instellingen voor verschillende gebruikers" },
          { en: "Privacy that varies based on data sensitivity", es: "Privacidad que varía según la sensibilidad de los datos", de: "Privatsphäre die je nach Datensensitivität variiert", nl: "Privacy die varieert op basis van datagevoeligheid" },
          { en: "Differential analysis of privacy breaches", es: "Análisis diferencial de violaciones de privacidad", de: "Differentielle Analyse von Privatsphärenverletzungen", nl: "Differentiële analyse van privacyschendingen" }
        ],
        correct: 0,
        explanation: {
          en: "Differential privacy ensures that the output of a learning algorithm is nearly indistinguishable whether any single individual's data is included or not, providing formal privacy guarantees crucial for sensitive applications.",
          es: "La privacidad diferencial asegura que la salida de un algoritmo de aprendizaje sea casi indistinguible si los datos de cualquier individuo están incluidos o no, proporcionando garantías formales de privacidad cruciales para aplicaciones sensibles.",
          de: "Differentielle Privatsphäre stellt sicher dass die Ausgabe eines Lernalgorithmus nahezu ununterscheidbar ist ob die Daten eines einzelnen Individuums enthalten sind oder nicht, bietet formale Privatsphärengarantien die für sensible Anwendungen entscheidend sind.",
          nl: "Differentiële privacy zorgt ervoor dat de output van een leeralgoritme bijna niet te onderscheiden is of de data van een individu wel of niet is opgenomen, biedt formele privacygaranties cruciaal voor gevoelige toepassingen."
        }
      },
      {
        question: {
          en: "What is continual learning and what are the main approaches to overcome catastrophic forgetting?",
          es: "¿Qué es el aprendizaje continuo y cuáles son los principales enfoques para superar el olvido catastrófico?",
          de: "Was ist kontinuierliches Lernen und was sind die Hauptansätze um katastrophales Vergessen zu überwinden?",
          nl: "Wat is continual learning en wat zijn de hoofdbenaderingen om catastrophic forgetting te overwinnen?"
        },
        options: [
          { en: "Learning new tasks sequentially without forgetting previous ones, using regularization, replay buffers, or dynamic architectures", es: "Aprender nuevas tareas secuencialmente sin olvidar las anteriores, usando regularización, buffers de repetición o arquitecturas dinámicas", de: "Neue Aufgaben sequenziell lernen ohne vorherige zu vergessen, verwendet Regularisierung, Replay-Puffer oder dynamische Architekturen", nl: "Nieuwe taken sequentieel leren zonder vorige te vergeten, gebruikt regularisatie, replay buffers of dynamische architecturen" },
          { en: "Continuously training models without stopping", es: "Entrenar modelos continuamente sin parar", de: "Modelle kontinuierlich ohne Stoppen trainieren", nl: "Modellen continu trainen zonder te stoppen" },
          { en: "Learning that continues throughout the model's lifecycle", es: "Aprendizaje que continúa durante todo el ciclo de vida del modelo", de: "Lernen das während des gesamten Modelllebenszyklus fortsetzt", nl: "Leren dat doorgaat gedurende de levenscyclus van het model" },
          { en: "Continuous optimization of learning rates", es: "Optimización continua de tasas de aprendizaje", de: "Kontinuierliche Optimierung von Lernraten", nl: "Continue optimalisatie van leersnelheden" }
        ],
        correct: 0,
        explanation: {
          en: "Continual learning enables AI systems to learn new tasks while retaining knowledge from previous tasks, addressing the stability-plasticity dilemma through techniques like elastic weight consolidation, experience replay, and progressive neural networks.",
          es: "El aprendizaje continuo permite a sistemas de IA aprender nuevas tareas mientras retienen conocimiento de tareas anteriores, abordando el dilema estabilidad-plasticidad a través de técnicas como consolidación elástica de pesos, repetición de experiencia y redes neuronales progresivas.",
          de: "Kontinuierliches Lernen ermöglicht KI-Systemen neue Aufgaben zu lernen während Wissen von vorherigen Aufgaben beibehalten wird, adressiert das Stabilität-Plastizität-Dilemma durch Techniken wie elastische Gewichtskonsolidierung, Erfahrungswiederholung und progressive neuronale Netzwerke.",
          nl: "Continual learning stelt AI systemen in staat nieuwe taken te leren terwijl kennis van vorige taken behouden blijft, pakt het stabiliteit-plasticiteit dilemma aan door technieken zoals elastische gewichtsconsolidatie, ervaring replay en progressieve neurale netwerken."
        }
      },
      {
        question: {
          en: "What is transfer learning and how does it leverage pre-trained models for new tasks?",
          es: "¿Qué es el aprendizaje por transferencia y cómo aprovecha modelos preentrenados para nuevas tareas?",
          de: "Was ist Transfer Learning und wie nutzt es vortrainierte Modelle für neue Aufgaben?",
          nl: "Wat is transfer learning en hoe benut het voorgetrainde modellen voor nieuwe taken?"
        },
        options: [
          { en: "Uses knowledge learned from one task to improve performance on related tasks by fine-tuning pre-trained models", es: "Usa conocimiento aprendido de una tarea para mejorar rendimiento en tareas relacionadas ajustando finamente modelos preentrenados", de: "Verwendet Wissen aus einer Aufgabe um Leistung bei verwandten Aufgaben durch Feinabstimmung vortrainierter Modelle zu verbessern", nl: "Gebruikt kennis geleerd van één taak om prestaties op gerelateerde taken te verbeteren door fine-tuning van voorgetrainde modellen" },
          { en: "Transfers data between different machine learning algorithms", es: "Transfiere datos entre diferentes algoritmos de machine learning", de: "Überträgt Daten zwischen verschiedenen maschinellen Lernalgorithmen", nl: "Draagt data over tussen verschillende machine learning algoritmes" },
          { en: "Moves models from training to production environments", es: "Mueve modelos de entornos de entrenamiento a producción", de: "Bewegt Modelle von Training- zu Produktionsumgebungen", nl: "Verplaatst modellen van training naar productieomgevingen" },
          { en: "Learns to transfer knowledge between human experts", es: "Aprende a transferir conocimiento entre expertos humanos", de: "Lernt Wissen zwischen menschlichen Experten zu übertragen", nl: "Leert kennis over te dragen tussen menselijke experts" }
        ],
        correct: 0,
        explanation: {
          en: "Transfer learning leverages features and patterns learned from large datasets (like ImageNet) and adapts them to new, often smaller datasets. This is especially powerful in deep learning where lower layers learn general features that can be reused, while higher layers are fine-tuned for specific tasks.",
          es: "Aprendizaje por transferencia aprovecha características y patrones aprendidos de conjuntos de datos grandes (como ImageNet) y los adapta a conjuntos de datos nuevos, a menudo más pequeños. Esto es especialmente poderoso en deep learning donde capas inferiores aprenden características generales que pueden reutilizarse, mientras capas superiores se ajustan finamente para tareas específicas.",
          de: "Transfer Learning nutzt Features und Muster die aus großen Datensätzen (wie ImageNet) gelernt wurden und passt sie an neue, oft kleinere Datensätze an. Dies ist besonders mächtig in Deep Learning wo untere Schichten allgemeine Features lernen die wiederverwendet werden können, während höhere Schichten für spezifische Aufgaben feinabgestimmt werden.",
          nl: "Transfer learning benut features en patronen geleerd van grote datasets (zoals ImageNet) en past ze aan voor nieuwe, vaak kleinere datasets. Dit is vooral krachtig in deep learning waar lagere lagen algemene features leren die kunnen worden hergebruikt, terwijl hogere lagen worden fine-getuned voor specifieke taken."
        }
      },
      {
        question: {
          en: "What is few-shot learning and how does it differ from traditional supervised learning?",
          es: "¿Qué es el aprendizaje de pocos ejemplos y cómo difiere del aprendizaje supervisado tradicional?",
          de: "Was ist Few-Shot Learning und wie unterscheidet es sich von traditionellem überwachtem Lernen?",
          nl: "Wat is few-shot learning en hoe verschilt het van traditioneel gesuperviseerd leren?"
        },
        options: [
          { en: "Learns new tasks from very few examples by leveraging prior knowledge and meta-learning strategies", es: "Aprende nuevas tareas con muy pocos ejemplos aprovechando conocimiento previo y estrategias de meta-aprendizaje", de: "Lernt neue Aufgaben aus sehr wenigen Beispielen durch Nutzung von Vorwissen und Meta-Learning-Strategien", nl: "Leert nieuwe taken van zeer weinig voorbeelden door gebruik te maken van voorkennis en meta-learning strategieën" },
          { en: "Uses only a few shots or iterations during training", es: "Usa solo unos pocos disparos o iteraciones durante entrenamiento", de: "Verwendet nur wenige Schüsse oder Iterationen während des Trainings", nl: "Gebruikt slechts een paar shots of iteraties tijdens training" },
          { en: "Trains models with fewer computational resources", es: "Entrena modelos con menos recursos computacionales", de: "Trainiert Modelle mit weniger Rechenressourcen", nl: "Traint modellen met minder computationele middelen" },
          { en: "Focuses on learning from small datasets only", es: "Se enfoca en aprender solo de conjuntos de datos pequeños", de: "Konzentriert sich nur auf Lernen aus kleinen Datensätzen", nl: "Richt zich alleen op leren van kleine datasets" }
        ],
        correct: 0,
        explanation: {
          en: "Few-shot learning enables models to quickly adapt to new tasks with only a few training examples (typically 1-10), using techniques like metric learning, memory-augmented networks, or meta-learning. It's crucial for scenarios where collecting large amounts of labeled data is expensive or impractical.",
          es: "Aprendizaje de pocos ejemplos permite a modelos adaptarse rápidamente a nuevas tareas con solo unos pocos ejemplos de entrenamiento (típicamente 1-10), usando técnicas como aprendizaje métrico, redes aumentadas con memoria o meta-aprendizaje. Es crucial para escenarios donde recolectar grandes cantidades de datos etiquetados es costoso o impractico.",
          de: "Few-Shot Learning ermöglicht Modellen sich schnell an neue Aufgaben mit nur wenigen Trainingsbeispielen (typisch 1-10) anzupassen, verwendet Techniken wie metrisches Lernen, speichererweiterte Netzwerke oder Meta-Learning. Es ist entscheidend für Szenarien wo das Sammeln großer Mengen beschrifteter Daten teuer oder unpraktisch ist.",
          nl: "Few-shot learning stelt modellen in staat om snel aan te passen aan nieuwe taken met slechts enkele trainingsvoorbeelden (typisch 1-10), gebruikt technieken zoals metrisch leren, geheugen-uitgebreide netwerken of meta-learning. Het is cruciaal voor scenario's waar het verzamelen van grote hoeveelheden gelabelde data duur of onpraktisch is."
        }
      },
      {
        question: {
          en: "What is the vanishing gradient problem in deep neural networks and how is it addressed?",
          es: "¿Qué es el problema del gradiente que desaparece en redes neuronales profundas y cómo se aborda?",
          de: "Was ist das Problem des verschwindenden Gradienten in tiefen neuronalen Netzwerken und wie wird es angegangen?",
          nl: "Wat is het vanishing gradient probleem in diepe neurale netwerken en hoe wordt het aangepakt?"
        },
        options: [
          { en: "Gradients become exponentially smaller in deeper layers, solved with residual connections, better activations, and normalization", es: "Gradientes se vuelven exponencialmente más pequeños en capas más profundas, resuelto con conexiones residuales, mejores activaciones y normalización", de: "Gradienten werden exponentiell kleiner in tieferen Schichten, gelöst mit residualen Verbindungen, besseren Aktivierungen und Normalisierung", nl: "Gradiënten worden exponentieel kleiner in diepere lagen, opgelost met residuele verbindingen, betere activaties en normalisatie" },
          { en: "Neural networks lose their gradient information during training", es: "Redes neuronales pierden su información de gradiente durante entrenamiento", de: "Neuronale Netzwerke verlieren ihre Gradienteninformation während des Trainings", nl: "Neurale netwerken verliezen hun gradiëntinformatie tijdens training" },
          { en: "Gradients disappear completely after a few epochs", es: "Gradientes desaparecen completamente después de unas pocas épocas", de: "Gradienten verschwinden vollständig nach wenigen Epochen", nl: "Gradiënten verdwijnen volledig na een paar epochs" },
          { en: "The gradient computation becomes too slow", es: "El cálculo del gradiente se vuelve demasiado lento", de: "Die Gradientenberechnung wird zu langsam", nl: "De gradiëntberekening wordt te langzaam" }
        ],
        correct: 0,
        explanation: {
          en: "In deep networks, gradients can become exponentially smaller as they propagate backward through layers, making it difficult to train early layers. Solutions include residual connections (ResNet), better activation functions (ReLU, Leaky ReLU), batch normalization, and gradient clipping.",
          es: "En redes profundas, gradientes pueden volverse exponencialmente más pequeños al propagarse hacia atrás a través de capas, dificultando entrenar capas tempranas. Soluciones incluyen conexiones residuales (ResNet), mejores funciones de activación (ReLU, Leaky ReLU), normalización por lotes y recorte de gradientes.",
          de: "In tiefen Netzwerken können Gradienten exponentiell kleiner werden wenn sie rückwärts durch Schichten propagieren, macht es schwer frühe Schichten zu trainieren. Lösungen umfassen residuale Verbindungen (ResNet), bessere Aktivierungsfunktionen (ReLU, Leaky ReLU), Batch-Normalisierung und Gradienten-Clipping.",
          nl: "In diepe netwerken kunnen gradiënten exponentieel kleiner worden wanneer ze achterwaarts door lagen propageren, maakt het moeilijk om vroege lagen te trainen. Oplossingen omvatten residuele verbindingen (ResNet), betere activatiefuncties (ReLU, Leaky ReLU), batch normalisatie en gradient clipping."
        }
      },
      {
        question: {
          en: "What is attention mechanism in neural networks and why has it revolutionized sequence modeling?",
          es: "¿Qué es el mecanismo de atención en redes neuronales y por qué ha revolucionado el modelado de secuencias?",
          de: "Was ist der Aufmerksamkeitsmechanismus in neuronalen Netzwerken und warum hat er die Sequenzmodellierung revolutioniert?",
          nl: "Wat is het attention mechanisme in neurale netwerken en waarom heeft het sequentiemodellering gerevolutioneerd?"
        },
        options: [
          { en: "Allows models to focus on relevant parts of input sequences dynamically, enabling better long-range dependencies", es: "Permite a modelos enfocarse en partes relevantes de secuencias de entrada dinámicamente, habilitando mejores dependencias de largo alcance", de: "Ermöglicht Modellen sich dynamisch auf relevante Teile von Eingabesequenzen zu fokussieren, ermöglicht bessere weitreichende Abhängigkeiten", nl: "Stelt modellen in staat om dynamisch te focussen op relevante delen van invoersequenties, maakt betere lange-afstand afhankelijkheden mogelijk" },
          { en: "Makes neural networks pay attention to training details", es: "Hace que redes neuronales presten atención a detalles de entrenamiento", de: "Bringt neuronale Netzwerke dazu auf Trainingsdetails zu achten", nl: "Zorgt ervoor dat neurale netwerken aandacht besteden aan trainingsdetails" },
          { en: "Focuses computational resources on important neurons", es: "Enfoca recursos computacionales en neuronas importantes", de: "Fokussiert Rechenressourcen auf wichtige Neuronen", nl: "Richt computationele middelen op belangrijke neuronen" },
          { en: "Automatically tunes hyperparameters during training", es: "Ajusta automáticamente hiperparámetros durante entrenamiento", de: "Stimmt automatisch Hyperparameter während des Trainings ab", nl: "Stemt automatisch hyperparameters af tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "Attention mechanisms allow models to dynamically weight and focus on different parts of the input sequence when making predictions, rather than relying on fixed-size hidden states. This has enabled breakthroughs in machine translation, language modeling, and led to transformer architectures.",
          es: "Mecanismos de atención permiten a modelos ponderar dinámicamente y enfocarse en diferentes partes de la secuencia de entrada al hacer predicciones, en lugar de depender de estados ocultos de tamaño fijo. Esto ha habilitado avances en traducción automática, modelado de lenguaje y llevado a arquitecturas transformer.",
          de: "Aufmerksamkeitsmechanismen ermöglichen Modellen dynamisch verschiedene Teile der Eingabesequenz zu gewichten und darauf zu fokussieren beim Treffen von Vorhersagen, anstatt auf feste Hidden States zu vertrauen. Dies hat Durchbrüche in maschineller Übersetzung, Sprachmodellierung ermöglicht und zu Transformer-Architekturen geführt.",
          nl: "Attention mechanismen stellen modellen in staat om dynamisch verschillende delen van de invoersequentie te wegen en daarop te focussen bij het maken van voorspellingen, in plaats van te vertrouwen op vaste hidden states. Dit heeft doorbraken mogelijk gemaakt in machinevertaling, taalmodellering en geleid tot transformer architecturen."
        }
      },
      {
        question: {
          en: "What is reinforcement learning and how does it differ from supervised and unsupervised learning?",
          es: "¿Qué es el aprendizaje por refuerzo y cómo difiere del aprendizaje supervisado y no supervisado?",
          de: "Was ist Reinforcement Learning und wie unterscheidet es sich von überwachtem und unüberwachtem Lernen?",
          nl: "Wat is reinforcement learning en hoe verschilt het van gesuperviseerd en ongesuperviseerd leren?"
        },
        options: [
          { en: "Agent learns optimal actions through trial-and-error interactions with environment using rewards and penalties", es: "Agente aprende acciones óptimas a través de interacciones de ensayo y error con entorno usando recompensas y penalizaciones", de: "Agent lernt optimale Aktionen durch Trial-and-Error-Interaktionen mit Umgebung unter Verwendung von Belohnungen und Strafen", nl: "Agent leert optimale acties door trial-and-error interacties met omgeving met behulp van beloningen en straffen" },
          { en: "Reinforces existing machine learning models with new data", es: "Refuerza modelos de machine learning existentes con nuevos datos", de: "Verstärkt bestehende maschinelle Lernmodelle mit neuen Daten", nl: "Versterkt bestaande machine learning modellen met nieuwe data" },
          { en: "Uses reinforcement techniques to improve supervised learning", es: "Usa técnicas de refuerzo para mejorar aprendizaje supervisado", de: "Verwendet Verstärkungstechniken um überwachtes Lernen zu verbessern", nl: "Gebruikt versterkingstechnieken om gesuperviseerd leren te verbeteren" },
          { en: "Learns only from positive examples and feedback", es: "Aprende solo de ejemplos positivos y retroalimentación", de: "Lernt nur aus positiven Beispielen und Feedback", nl: "Leert alleen van positieve voorbeelden en feedback" }
        ],
        correct: 0,
        explanation: {
          en: "Reinforcement learning involves an agent learning to make sequential decisions by interacting with an environment, receiving rewards or penalties for actions. Unlike supervised learning (which uses labeled data) or unsupervised learning (which finds patterns), RL learns optimal behavior through experience and delayed feedback.",
          es: "Aprendizaje por refuerzo involucra un agente aprendiendo a tomar decisiones secuenciales interactuando con un entorno, recibiendo recompensas o penalizaciones por acciones. A diferencia del aprendizaje supervisado (que usa datos etiquetados) o no supervisado (que encuentra patrones), RL aprende comportamiento óptimo a través de experiencia y retroalimentación retrasada.",
          de: "Reinforcement Learning beinhaltet einen Agenten der lernt sequenzielle Entscheidungen zu treffen durch Interaktion mit einer Umgebung, erhält Belohnungen oder Strafen für Aktionen. Im Gegensatz zu überwachtem Lernen (das beschriftete Daten verwendet) oder unüberwachtem Lernen (das Muster findet), lernt RL optimales Verhalten durch Erfahrung und verzögertes Feedback.",
          nl: "Reinforcement learning behelst een agent die leert sequentiële beslissingen te nemen door interactie met een omgeving, ontvangt beloningen of straffen voor acties. In tegenstelling tot gesuperviseerd leren (dat gelabelde data gebruikt) of ongesuperviseerd leren (dat patronen vindt), leert RL optimaal gedrag door ervaring en uitgestelde feedback."
        }
      },
      {
        question: {
          en: "What is time series forecasting and what are the key challenges in modeling temporal data?",
          es: "¿Qué es el pronóstico de series temporales y cuáles son los desafíos clave en modelar datos temporales?",
          de: "Was ist Zeitreihen-Vorhersage und was sind die Hauptherausforderungen bei der Modellierung zeitlicher Daten?",
          nl: "Wat is tijdreeks voorspelling en wat zijn de belangrijkste uitdagingen in het modelleren van temporele data?"
        },
        options: [
          { en: "Predicting future values using historical patterns while handling seasonality, trends, and non-stationarity", es: "Predecir valores futuros usando patrones históricos mientras se maneja estacionalidad, tendencias y no estacionariedad", de: "Zukünftige Werte unter Verwendung historischer Muster vorhersagen während Saisonalität, Trends und Nicht-Stationarität behandelt werden", nl: "Toekomstige waarden voorspellen met historische patronen terwijl seizoensgebondenheid, trends en niet-stationariteit worden behandeld" },
          { en: "Analyzing time complexity of machine learning algorithms", es: "Analizar complejidad temporal de algoritmos de machine learning", de: "Zeitkomplexität von maschinellen Lernalgorithmen analysieren", nl: "Tijdcomplexiteit van machine learning algoritmes analyseren" },
          { en: "Scheduling when to run time-sensitive models", es: "Programar cuándo ejecutar modelos sensibles al tiempo", de: "Planen wann zeitkritische Modelle ausgeführt werden", nl: "Plannen wanneer tijdgevoelige modellen uit te voeren" },
          { en: "Optimizing training time for large datasets", es: "Optimizar tiempo de entrenamiento para conjuntos de datos grandes", de: "Trainingszeit für große Datensätze optimieren", nl: "Trainingstijd optimaliseren voor grote datasets" }
        ],
        correct: 0,
        explanation: {
          en: "Time series forecasting predicts future values based on historical observations, dealing with challenges like seasonality (recurring patterns), trends (long-term directions), non-stationarity (changing statistical properties), and autocorrelation. Methods range from ARIMA to modern neural approaches like LSTMs and Transformers.",
          es: "Pronóstico de series temporales predice valores futuros basado en observaciones históricas, lidiando con desafíos como estacionalidad (patrones recurrentes), tendencias (direcciones a largo plazo), no estacionariedad (propiedades estadísticas cambiantes) y autocorrelación. Métodos van desde ARIMA hasta enfoques neuronales modernos como LSTMs y Transformers.",
          de: "Zeitreihen-Vorhersage sagt zukünftige Werte basierend auf historischen Beobachtungen vorher, behandelt Herausforderungen wie Saisonalität (wiederkehrende Muster), Trends (langfristige Richtungen), Nicht-Stationarität (sich ändernde statistische Eigenschaften) und Autokorrelation. Methoden reichen von ARIMA bis zu modernen neuronalen Ansätzen wie LSTMs und Transformers.",
          nl: "Tijdreeks voorspelling voorspelt toekomstige waarden gebaseerd op historische observaties, gaat om met uitdagingen zoals seizoensgebondenheid (terugkerende patronen), trends (lange-termijn richtingen), niet-stationariteit (veranderende statistische eigenschappen) en autocorrelatie. Methoden variëren van ARIMA tot moderne neurale benaderingen zoals LSTMs en Transformers."
        }
      },
      {
        question: {
          en: "What are Generative Adversarial Networks (GANs) and how do they work?",
          es: "¿Qué son las Redes Generativas Antagónicas (GANs) y cómo funcionan?",
          de: "Was sind Generative Adversarial Networks (GANs) und wie funktionieren sie?",
          nl: "Wat zijn Generative Adversarial Networks (GANs) en hoe werken ze?"
        },
        options: [
          { en: "Two neural networks compete: generator creates fake data, discriminator detects fakes, improving both through adversarial training", es: "Dos redes neuronales compiten: generador crea datos falsos, discriminador detecta falsos, mejorando ambos por entrenamiento adversarial", de: "Zwei neuronale Netzwerke konkurrieren: Generator erstellt gefälschte Daten, Diskriminator erkennt Fälschungen, verbessert beide durch Training", nl: "Twee neurale netwerken concurreren: generator creëert nep data, discriminator detecteert nep, verbetert beide door adversarial training" },
          { en: "Networks that generate adversarial examples for testing", es: "Redes que generan ejemplos adversariales para pruebas", de: "Netzwerke die adversariale Beispiele für Tests generieren", nl: "Netwerken die adversariale voorbeelden genereren voor testen" },
          { en: "Defensive networks against malicious attacks", es: "Redes defensivas contra ataques maliciosos", de: "Defensive Netzwerke gegen böswillige Angriffe", nl: "Defensieve netwerken tegen kwaadaardige aanvallen" },
          { en: "Networks trained on adversarial optimization techniques", es: "Redes entrenadas en técnicas de optimización adversarial", de: "Netzwerke trainiert auf adversarialen Optimierungstechniken", nl: "Netwerken getraind op adversariale optimalisatietechnieken" }
        ],
        correct: 0,
        explanation: {
          en: "GANs consist of a generator network that creates synthetic data and a discriminator network that tries to distinguish real from fake data. They're trained adversarially - the generator tries to fool the discriminator while the discriminator tries to catch fakes, leading to increasingly realistic generated content.",
          es: "GANs consisten en una red generadora que crea datos sintéticos y una red discriminadora que trata de distinguir datos reales de falsos. Se entrenan adversarialmente - el generador trata de engañar al discriminador mientras el discriminador trata de atrapar falsos, llevando a contenido generado cada vez más realista.",
          de: "GANs bestehen aus einem Generator-Netzwerk das synthetische Daten erstellt und einem Diskriminator-Netzwerk das versucht echte von gefälschten Daten zu unterscheiden. Sie werden adversarial trainiert - der Generator versucht den Diskriminator zu täuschen während der Diskriminator versucht Fälschungen zu erkennen, führt zu zunehmend realistischen generierten Inhalten.",
          nl: "GANs bestaan uit een generator netwerk dat synthetische data creëert en een discriminator netwerk dat probeert echte van nep data te onderscheiden. Ze worden adversarial getraind - de generator probeert de discriminator te misleiden terwijl de discriminator probeert nep te vangen, leidt tot steeds realistischer gegenereerde content."
        }
      },
      {
        question: {
          en: "What is LSTM (Long Short-Term Memory) and why is it effective for sequence modeling?",
          es: "¿Qué es LSTM (Memoria a Largo y Corto Plazo) y por qué es efectivo para modelado de secuencias?",
          de: "Was ist LSTM (Long Short-Term Memory) und warum ist es effektiv für Sequenzmodellierung?",
          nl: "Wat is LSTM (Long Short-Term Memory) en waarom is het effectief voor sequentiemodellering?"
        },
        options: [
          { en: "Recurrent network with gates to control information flow, solving vanishing gradients and capturing long-term dependencies", es: "Red recurrente con compuertas para controlar flujo de información, resolviendo gradientes que desaparecen y capturando dependencias a largo plazo", de: "Rekurrentes Netzwerk mit Gattern zur Kontrolle des Informationsflusses, löst verschwindende Gradienten und erfasst langfristige Abhängigkeiten", nl: "Recurrent netwerk met gates om informatieflow te controleren, lost vanishing gradients op en vangt lange-termijn afhankelijkheden" },
          { en: "Memory storage system for large datasets", es: "Sistema de almacenamiento de memoria para conjuntos de datos grandes", de: "Speichersystem für große Datensätze", nl: "Geheugenopslagsysteem voor grote datasets" },
          { en: "Long-term storage mechanism for trained models", es: "Mecanismo de almacenamiento a largo plazo para modelos entrenados", de: "Langzeitspeichermechanismus für trainierte Modelle", nl: "Lange-termijn opslagmechanisme voor getrainde modellen" },
          { en: "Short-term memory optimization technique", es: "Técnica de optimización de memoria a corto plazo", de: "Kurzzeitgedächtnis-Optimierungstechnik", nl: "Korte-termijn geheugen optimalisatietechniek" }
        ],
        correct: 0,
        explanation: {
          en: "LSTMs use gating mechanisms (forget, input, output gates) to control what information to remember, update, or output. This architecture allows them to maintain relevant information over long sequences while forgetting irrelevant details, making them excellent for tasks like language modeling and time series prediction.",
          es: "LSTMs usan mecanismos de compuertas (olvido, entrada, salida) para controlar qué información recordar, actualizar o producir. Esta arquitectura les permite mantener información relevante sobre secuencias largas mientras olvidan detalles irrelevantes, haciéndolos excelentes para tareas como modelado de lenguaje y predicción de series temporales.",
          de: "LSTMs verwenden Gatter-Mechanismen (Vergessen-, Eingabe-, Ausgabe-Gatter) um zu kontrollieren welche Information erinnert, aktualisiert oder ausgegeben wird. Diese Architektur ermöglicht ihnen relevante Information über lange Sequenzen zu erhalten während irrelevante Details vergessen werden, macht sie exzellent für Aufgaben wie Sprachmodellierung und Zeitreihenvorhersage.",
          nl: "LSTMs gebruiken gate mechanismen (forget, input, output gates) om te controleren welke informatie te onthouden, bij te werken of uit te voeren. Deze architectuur stelt hen in staat relevante informatie over lange sequenties te behouden terwijl irrelevante details worden vergeten, maakt ze uitstekend voor taken zoals taalmodellering en tijdreeks voorspelling."
        }
      },
      {
        question: {
          en: "What is the difference between online learning and batch learning in machine learning?",
          es: "¿Cuál es la diferencia entre aprendizaje en línea y aprendizaje por lotes en machine learning?",
          de: "Was ist der Unterschied zwischen Online Learning und Batch Learning im maschinellen Lernen?",
          nl: "Wat is het verschil tussen online learning en batch learning in machine learning?"
        },
        options: [
          { en: "Online learning updates model incrementally with new data, batch learning trains on entire dataset at once", es: "Aprendizaje en línea actualiza modelo incrementalmente con nuevos datos, aprendizaje por lotes entrena en todo el conjunto de datos a la vez", de: "Online Learning aktualisiert Modell inkrementell mit neuen Daten, Batch Learning trainiert auf gesamtem Datensatz auf einmal", nl: "Online learning werkt model incrementeel bij met nieuwe data, batch learning traint op hele dataset tegelijk" },
          { en: "Online learning requires internet connection, batch learning doesn't", es: "Aprendizaje en línea requiere conexión a internet, aprendizaje por lotes no", de: "Online Learning benötigt Internetverbindung, Batch Learning nicht", nl: "Online learning vereist internetverbinding, batch learning niet" },
          { en: "Batch learning is faster than online learning", es: "Aprendizaje por lotes es más rápido que aprendizaje en línea", de: "Batch Learning ist schneller als Online Learning", nl: "Batch learning is sneller dan online learning" },
          { en: "Online learning works only with neural networks", es: "Aprendizaje en línea funciona solo con redes neuronales", de: "Online Learning funktioniert nur mit neuronalen Netzwerken", nl: "Online learning werkt alleen met neurale netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "Online learning (incremental learning) continuously updates the model as new data arrives, making it suitable for streaming data and concept drift. Batch learning trains on the complete dataset before making predictions, typically providing better performance but requiring retraining when new data becomes available.",
          es: "Aprendizaje en línea (incremental) actualiza continuamente el modelo cuando llegan nuevos datos, haciéndolo adecuado para datos de flujo y deriva de conceptos. Aprendizaje por lotes entrena en el conjunto de datos completo antes de hacer predicciones, típicamente proporcionando mejor rendimiento pero requiriendo reentrenamiento cuando nuevos datos están disponibles.",
          de: "Online Learning (inkrementell) aktualisiert kontinuierlich das Modell wenn neue Daten ankommen, macht es geeignet für Streaming-Daten und Konzeptdrift. Batch Learning trainiert auf dem kompletten Datensatz vor dem Treffen von Vorhersagen, bietet typisch bessere Leistung aber erfordert Neutraining wenn neue Daten verfügbar werden.",
          nl: "Online learning (incrementeel) werkt het model continu bij wanneer nieuwe data arriveert, maakt het geschikt voor streaming data en concept drift. Batch learning traint op de complete dataset voordat voorspellingen gemaakt worden, biedt typisch betere prestaties maar vereist hertraining wanneer nieuwe data beschikbaar komt."
        }
      },
      {
        question: {
          en: "What is gradient boosting and how does it build an ensemble of weak learners?",
          es: "¿Qué es gradient boosting y cómo construye un conjunto de aprendices débiles?",
          de: "Was ist Gradient Boosting und wie baut es ein Ensemble schwacher Lerner auf?",
          nl: "Wat is gradient boosting en hoe bouwt het een ensemble van zwakke learners?"
        },
        options: [
          { en: "Sequentially adds weak learners that predict residual errors of previous models, optimizing any differentiable loss function", es: "Agrega secuencialmente aprendices débiles que predicen errores residuales de modelos anteriores, optimizando función pérdida diferenciable", de: "Fügt sequenziell schwache Lerner hinzu die Residualfehler vorheriger Modelle vorhersagen, optimiert differenzierbare Verlustfunktion", nl: "Voegt sequentieel zwakke learners toe die residuele fouten van vorige modellen voorspellen, optimaliseert elke differentieerbare verliesfunctie" },
          { en: "Boosts gradient computation for faster training", es: "Impulsa computación de gradiente para entrenamiento más rápido", de: "Verstärkt Gradientenberechnung für schnelleres Training", nl: "Boost gradiëntberekening voor snellere training" },
          { en: "Uses gradient ascent instead of gradient descent", es: "Usa ascenso de gradiente en lugar de descenso de gradiente", de: "Verwendet Gradientenaufstieg anstatt Gradientenabstieg", nl: "Gebruikt gradient ascent in plaats van gradient descent" },
          { en: "Applies boosting only to gradient-based algorithms", es: "Aplica boosting solo a algoritmos basados en gradiente", de: "Wendet Boosting nur auf gradientenbasierte Algorithmen an", nl: "Past boosting alleen toe op gradiënt-gebaseerde algoritmes" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient boosting builds models sequentially, where each new weak learner (typically decision trees) is trained to predict the residual errors of the ensemble so far. By iteratively reducing prediction errors through gradient descent on any differentiable loss function, it creates a strong ensemble predictor.",
          es: "Gradient boosting construye modelos secuencialmente, donde cada nuevo aprendiz débil (típicamente árboles de decisión) se entrena para predecir errores residuales del conjunto hasta ahora. Reduciendo iterativamente errores de predicción a través de descenso de gradiente en cualquier función de pérdida diferenciable, crea un predictor de conjunto fuerte.",
          de: "Gradient Boosting baut Modelle sequenziell auf, wobei jeder neue schwache Lerner (typisch Entscheidungsbäume) trainiert wird um die Residualfehler des bisherigen Ensembles vorherzusagen. Durch iterative Reduzierung von Vorhersagefehlern durch Gradientenabstieg auf jede differenzierbare Verlustfunktion erstellt es einen starken Ensemble-Prädiktor.",
          nl: "Gradient boosting bouwt modellen sequentieel, waarbij elke nieuwe zwakke learner (typisch beslisbomen) wordt getraind om de residuele fouten van het ensemble tot nu toe te voorspellen. Door iteratief voorspellingsfouten te verminderen door gradient descent op elke differentieerbare verliesfunctie, creëert het een sterke ensemble voorspeller."
        }
      },
      {
        question: {
          en: "What is multi-task learning and how does it improve model performance?",
          es: "¿Qué es el aprendizaje multi-tarea y cómo mejora el rendimiento del modelo?",
          de: "Was ist Multi-Task Learning und wie verbessert es die Modellleistung?",
          nl: "Wat is multi-task learning en hoe verbetert het modelprestaties?"
        },
        options: [
          { en: "Trains single model on multiple related tasks simultaneously, sharing representations to improve generalization", es: "Entrena un solo modelo en múltiples tareas relacionadas simultáneamente, compartiendo representaciones para mejorar generalización", de: "Trainiert einzelnes Modell auf mehreren verwandten Aufgaben gleichzeitig, teilt Repräsentationen um Generalisierung zu verbessern", nl: "Traint enkel model op meerdere gerelateerde taken tegelijk, deelt representaties om generalisatie te verbeteren" },
          { en: "Distributes different tasks across multiple models", es: "Distribuye diferentes tareas a través de múltiples modelos", de: "Verteilt verschiedene Aufgaben über mehrere Modelle", nl: "Verdeelt verschillende taken over meerdere modellen" },
          { en: "Uses multiple CPUs for parallel task execution", es: "Usa múltiples CPUs para ejecución paralela de tareas", de: "Verwendet mehrere CPUs für parallele Aufgabenausführung", nl: "Gebruikt meerdere CPUs voor parallelle taakuitvoering" },
          { en: "Sequentially learns one task after another", es: "Aprende secuencialmente una tarea tras otra", de: "Lernt sequenziell eine Aufgabe nach der anderen", nl: "Leert sequentieel de ene taak na de andere" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-task learning trains a single neural network to perform multiple related tasks by sharing lower-level representations while having task-specific output layers. This shared learning often leads to better generalization, reduced overfitting, and improved performance on individual tasks, especially when tasks are related.",
          es: "Aprendizaje multi-tarea entrena una sola red neuronal para realizar múltiples tareas relacionadas compartiendo representaciones de nivel inferior mientras tiene capas de salida específicas de tarea. Este aprendizaje compartido a menudo lleva a mejor generalización, overfitting reducido y rendimiento mejorado en tareas individuales, especialmente cuando tareas están relacionadas.",
          de: "Multi-Task Learning trainiert ein einzelnes neuronales Netzwerk um mehrere verwandte Aufgaben durchzuführen durch Teilen niedrigerer Repräsentationen während aufgabenspezifische Ausgabeschichten haben. Dieses geteilte Lernen führt oft zu besserer Generalisierung, reduziertem Overfitting und verbesserter Leistung bei individuellen Aufgaben, besonders wenn Aufgaben verwandt sind.",
          nl: "Multi-task learning traint een enkel neuraal netwerk om meerdere gerelateerde taken uit te voeren door lagere-niveau representaties te delen terwijl het taak-specifieke output lagen heeft. Dit gedeelde leren leidt vaak tot betere generalisatie, verminderde overfitting en verbeterde prestaties op individuele taken, vooral wanneer taken gerelateerd zijn."
        }
      },
      {
        question: {
          en: "What is domain adaptation and why is it important in machine learning deployment?",
          es: "¿Qué es la adaptación de dominio y por qué es importante en el despliegue de machine learning?",
          de: "Was ist Domain Adaptation und warum ist sie wichtig bei der Bereitstellung von maschinellem Lernen?",
          nl: "Wat is domain adaptation en waarom is het belangrijk in machine learning deployment?"
        },
        options: [
          { en: "Adapts models trained on source domain to perform well on different but related target domain", es: "Adapta modelos entrenados en dominio fuente para funcionar bien en dominio objetivo diferente pero relacionado", de: "Passt Modelle die auf Quelldomäne trainiert wurden an um gut auf verschiedener aber verwandter Zieldomäne zu funktionieren", nl: "Past modellen getraind op brondomein aan om goed te presteren op verschillend maar gerelateerd doeldomein" },
          { en: "Adapts models to different hardware architectures", es: "Adapta modelos a diferentes arquitecturas de hardware", de: "Passt Modelle an verschiedene Hardware-Architekturen an", nl: "Past modellen aan voor verschillende hardware architecturen" },
          { en: "Changes the domain name of machine learning applications", es: "Cambia el nombre de dominio de aplicaciones de machine learning", de: "Ändert den Domainnamen von maschinellen Lernanwendungen", nl: "Verandert de domeinnaam van machine learning applicaties" },
          { en: "Adapts models to work with different programming languages", es: "Adapta modelos para trabajar con diferentes lenguajes de programación", de: "Passt Modelle an um mit verschiedenen Programmiersprachen zu arbeiten", nl: "Past modellen aan om te werken met verschillende programmeertalen" }
        ],
        correct: 0,
        explanation: {
          en: "Domain adaptation addresses the problem when training and deployment data come from different but related distributions (domain shift). Techniques include feature alignment, adversarial training, and gradual fine-tuning to ensure models maintain performance when deployed in new environments or conditions.",
          es: "Adaptación de dominio aborda el problema cuando datos de entrenamiento y despliegue vienen de distribuciones diferentes pero relacionadas (cambio de dominio). Técnicas incluyen alineación de características, entrenamiento adversarial y ajuste fino gradual para asegurar que modelos mantengan rendimiento cuando se despliegan en nuevos entornos o condiciones.",
          de: "Domain Adaptation behandelt das Problem wenn Training- und Bereitstellungsdaten aus verschiedenen aber verwandten Verteilungen kommen (Domain Shift). Techniken umfassen Feature-Alignment, adversariales Training und graduelles Fine-Tuning um sicherzustellen dass Modelle Leistung beibehalten wenn in neuen Umgebungen oder Bedingungen bereitgestellt.",
          nl: "Domain adaptation pakt het probleem aan wanneer trainings- en deployment data komen van verschillende maar gerelateerde distributies (domain shift). Technieken omvatten feature alignment, adversarial training en graduele fine-tuning om ervoor te zorgen dat modellen prestaties behouden wanneer ingezet in nieuwe omgevingen of condities."
        }
      },
      {
        question: {
          en: "What is active learning and how does it optimize the labeling process?",
          es: "¿Qué es el aprendizaje activo y cómo optimiza el proceso de etiquetado?",
          de: "Was ist Active Learning und wie optimiert es den Beschriftungsprozess?",
          nl: "Wat is active learning en hoe optimaliseert het het labeling proces?"
        },
        options: [
          { en: "Strategically selects most informative examples for human labeling to maximize learning with minimal labeled data", es: "Selecciona estratégicamente ejemplos más informativos para etiquetado humano para maximizar aprendizaje con datos etiquetados mínimos", de: "Wählt strategisch informativste Beispiele für menschliche Beschriftung um Lernen mit minimalen beschrifteten Daten zu maximieren", nl: "Selecteert strategisch meest informatieve voorbeelden voor menselijke labeling om leren te maximaliseren met minimale gelabelde data" },
          { en: "Actively searches for new training data sources", es: "Busca activamente nuevas fuentes de datos de entrenamiento", de: "Sucht aktiv nach neuen Trainingsdatenquellen", nl: "Zoekt actief naar nieuwe trainingsdatabronnen" },
          { en: "Continuously learns from real-time data streams", es: "Aprende continuamente de flujos de datos en tiempo real", de: "Lernt kontinuierlich aus Echtzeit-Datenströmen", nl: "Leert continu van real-time datastromen" },
          { en: "Uses reinforcement learning for active decision making", es: "Usa aprendizaje por refuerzo para toma de decisiones activa", de: "Verwendet Reinforcement Learning für aktive Entscheidungsfindung", nl: "Gebruikt reinforcement learning voor actieve besluitvorming" }
        ],
        correct: 0,
        explanation: {
          en: "Active learning intelligently queries humans to label the most informative examples, using strategies like uncertainty sampling, query-by-committee, or expected model change. This approach significantly reduces labeling costs while maintaining model performance, especially valuable when expert annotation is expensive.",
          es: "Aprendizaje activo consulta inteligentemente a humanos para etiquetar ejemplos más informativos, usando estrategias como muestreo de incertidumbre, consulta por comité o cambio de modelo esperado. Este enfoque reduce significativamente costos de etiquetado mientras mantiene rendimiento del modelo, especialmente valioso cuando anotación experta es costosa.",
          de: "Active Learning fragt intelligent Menschen um die informativsten Beispiele zu beschriften, verwendet Strategien wie Uncertainty Sampling, Query-by-Committee oder erwartete Modelländerung. Dieser Ansatz reduziert signifikant Beschriftungskosten während Modellleistung erhalten bleibt, besonders wertvoll wenn Expertenannotation teuer ist.",
          nl: "Active learning bevraagt intelligent mensen om de meest informatieve voorbeelden te labelen, gebruikt strategieën zoals uncertainty sampling, query-by-committee of verwachte modelverandering. Deze benadering vermindert significant labelkosten terwijl modelprestaties behouden blijven, vooral waardevol wanneer expert annotatie duur is."
        }
      },
      {
        question: {
          en: "What is self-supervised learning and how does it leverage unlabeled data?",
          es: "¿Qué es el aprendizaje auto-supervisado y cómo aprovecha datos no etiquetados?",
          de: "Was ist selbstüberwachtes Lernen und wie nutzt es nicht beschriftete Daten?",
          nl: "Wat is self-supervised learning en hoe benut het ongelabelde data?"
        },
        options: [
          { en: "Creates supervision signals from data structure itself, learning representations through pretext tasks before fine-tuning", es: "Crea señales de supervisión de la estructura de datos misma, aprendiendo representaciones a través de tareas de pretexto antes de ajuste fino", de: "Erstellt Überwachungssignale aus Datenstruktur selbst, lernt Repräsentationen durch Pretext-Aufgaben vor Fine-Tuning", nl: "Creëert supervisiesignalen uit datastructuur zelf, leert representaties door pretext taken voor fine-tuning" },
          { en: "Supervises its own training process automatically", es: "Supervisa su propio proceso de entrenamiento automáticamente", de: "Überwacht seinen eigenen Trainingsprozess automatisch", nl: "Superviseert zijn eigen trainingsproces automatisch" },
          { en: "Uses self-reflection techniques during learning", es: "Usa técnicas de autorreflexión durante aprendizaje", de: "Verwendet Selbstreflexionstechniken während des Lernens", nl: "Gebruikt zelfreflectietechnieken tijdens leren" },
          { en: "Automatically labels data for supervised learning", es: "Etiqueta automáticamente datos para aprendizaje supervisado", de: "Beschriftet automatisch Daten für überwachtes Lernen", nl: "Labelt automatisch data voor gesuperviseerd leren" }
        ],
        correct: 0,
        explanation: {
          en: "Self-supervised learning creates learning objectives from the data itself without external labels, using tasks like predicting masked words (BERT), next frames in video, or image rotations. These pretext tasks force models to learn useful representations that can be fine-tuned for downstream tasks with minimal labeled data.",
          es: "Aprendizaje auto-supervisado crea objetivos de aprendizaje de los datos mismos sin etiquetas externas, usando tareas como predecir palabras enmascaradas (BERT), próximos marcos en video o rotaciones de imagen. Estas tareas de pretexto fuerzan modelos a aprender representaciones útiles que pueden ajustarse finamente para tareas posteriores con datos etiquetados mínimos.",
          de: "Selbstüberwachtes Lernen erstellt Lernziele aus den Daten selbst ohne externe Labels, verwendet Aufgaben wie Vorhersage maskierter Wörter (BERT), nächste Frames in Video oder Bildrotationen. Diese Pretext-Aufgaben zwingen Modelle nützliche Repräsentationen zu lernen die für nachgelagerte Aufgaben mit minimalen beschrifteten Daten feinabgestimmt werden können.",
          nl: "Self-supervised learning creëert leerdoelstellingen uit de data zelf zonder externe labels, gebruikt taken zoals het voorspellen van gemaskeerde woorden (BERT), volgende frames in video of beeldrotaties. Deze pretext taken dwingen modellen nuttige representaties te leren die kunnen worden fine-getuned voor downstream taken met minimale gelabelde data."
        }
      },
      {
        question: {
          en: "What is concept drift in machine learning and how can it be detected and handled?",
          es: "¿Qué es la deriva de conceptos en machine learning y cómo puede detectarse y manejarse?",
          de: "Was ist Concept Drift im maschinellen Lernen und wie kann es erkannt und behandelt werden?",
          nl: "Wat is concept drift in machine learning en hoe kan het gedetecteerd en behandeld worden?"
        },
        options: [
          { en: "Changes in underlying data distribution over time, detected through performance monitoring and handled by model retraining", es: "Cambios en distribución de datos subyacente con el tiempo, detectado a través de monitoreo de rendimiento y manejado por reentrenamiento de modelo", de: "Änderungen in zugrundeliegender Datenverteilung über Zeit, erkannt durch Leistungsüberwachung und behandelt durch Modell-Neutraining", nl: "Veranderingen in onderliggende dataverdeling over tijd, gedetecteerd door prestatiemonitoring en behandeld door model hertraining" },
          { en: "Gradual change in model architecture during training", es: "Cambio gradual en arquitectura del modelo durante entrenamiento", de: "Gradueller Wandel in Modellarchitektur während Training", nl: "Geleidelijke verandering in modelarchitectuur tijdens training" },
          { en: "Concept evolution in machine learning algorithms", es: "Evolución de conceptos en algoritmos de machine learning", de: "Konzeptentwicklung in maschinellen Lernalgorithmen", nl: "Conceptevolutie in machine learning algoritmes" },
          { en: "Changes in computational requirements over time", es: "Cambios en requerimientos computacionales con el tiempo", de: "Änderungen in Rechenanforderungen über Zeit", nl: "Veranderingen in computationele vereisten over tijd" }
        ],
        correct: 0,
        explanation: {
          en: "Concept drift occurs when the statistical properties of target variables change over time, causing model performance to degrade. Detection methods include monitoring prediction accuracy, data distribution changes, or statistical tests. Handling strategies include model retraining, ensemble methods, or adaptive learning algorithms.",
          es: "Deriva de conceptos ocurre cuando propiedades estadísticas de variables objetivo cambian con el tiempo, causando que rendimiento del modelo se degrade. Métodos de detección incluyen monitorear precisión de predicción, cambios de distribución de datos o pruebas estadísticas. Estrategias de manejo incluyen reentrenamiento de modelo, métodos de conjunto o algoritmos de aprendizaje adaptativo.",
          de: "Concept Drift tritt auf wenn statistische Eigenschaften von Zielvariablen sich über Zeit ändern, verursacht dass Modellleistung sich verschlechtert. Erkennungsmethoden umfassen Überwachung von Vorhersagegenauigkeit, Datenverteilungsänderungen oder statistische Tests. Behandlungsstrategien umfassen Modell-Neutraining, Ensemble-Methoden oder adaptive Lernalgorithmen.",
          nl: "Concept drift treedt op wanneer statistische eigenschappen van doelvariabelen veranderen over tijd, veroorzaakt dat modelprestaties verslechteren. Detectiemethoden omvatten monitoring van voorspellingsnauwkeurigheid, datadistributieveranderingen of statistische tests. Behandelingsstrategieën omvatten model hertraining, ensemble methoden of adaptieve leeralgoritmes."
        }
      },
      {
        question: {
          en: "What is model interpretability vs explainability in machine learning?",
          es: "¿Qué es interpretabilidad vs explicabilidad del modelo en machine learning?",
          de: "Was ist Modell-Interpretierbarkeit vs Erklärbarkeit im maschinellen Lernen?",
          nl: "Wat is model interpreteerbaarheid vs verklaarbaarheid in machine learning?"
        },
        options: [
          { en: "Interpretability: inherent transparency of model, explainability: post-hoc methods to understand black-box predictions", es: "Interpretabilidad: transparencia inherente del modelo, explicabilidad: métodos post-hoc para entender predicciones de caja negra", de: "Interpretierbarkeit: inhärente Transparenz des Modells, Erklärbarkeit: Post-Hoc-Methoden um Black-Box-Vorhersagen zu verstehen", nl: "Interpreteerbaarheid: inherente transparantie van model, verklaarbaarheid: post-hoc methoden om black-box voorspellingen te begrijpen" },
          { en: "Interpretability is for technical users, explainability for non-technical", es: "Interpretabilidad es para usuarios técnicos, explicabilidad para no técnicos", de: "Interpretierbarkeit ist für technische Benutzer, Erklärbarkeit für nicht-technische", nl: "Interpreteerbaarheid is voor technische gebruikers, verklaarbaarheid voor niet-technische" },
          { en: "Both terms mean exactly the same thing", es: "Ambos términos significan exactamente lo mismo", de: "Beide Begriffe bedeuten genau dasselbe", nl: "Beide termen betekenen precies hetzelfde" },
          { en: "Interpretability is quantitative, explainability is qualitative", es: "Interpretabilidad es cuantitativa, explicabilidad es cualitativa", de: "Interpretierbarkeit ist quantitativ, Erklärbarkeit ist qualitativ", nl: "Interpreteerbaarheid is kwantitatief, verklaarbaarheid is kwalitatief" }
        ],
        correct: 0,
        explanation: {
          en: "Interpretability refers to models that are inherently understandable (linear regression, decision trees), while explainability uses external techniques (LIME, SHAP) to explain predictions from complex black-box models. Both aim to build trust and enable human oversight in AI systems.",
          es: "Interpretabilidad se refiere a modelos que son inherentemente comprensibles (regresión lineal, árboles de decisión), mientras explicabilidad usa técnicas externas (LIME, SHAP) para explicar predicciones de modelos complejos de caja negra. Ambos buscan construir confianza y habilitar supervisión humana en sistemas de IA.",
          de: "Interpretierbarkeit bezieht sich auf Modelle die inhärent verständlich sind (lineare Regression, Entscheidungsbäume), während Erklärbarkeit externe Techniken (LIME, SHAP) verwendet um Vorhersagen von komplexen Black-Box-Modellen zu erklären. Beide zielen darauf ab Vertrauen aufzubauen und menschliche Aufsicht in KI-Systemen zu ermöglichen.",
          nl: "Interpreteerbaarheid verwijst naar modellen die inherent begrijpelijk zijn (lineaire regressie, beslisbomen), terwijl verklaarbaarheid externe technieken (LIME, SHAP) gebruikt om voorspellingen van complexe black-box modellen te verklaren. Beide streven ernaar vertrouwen op te bouwen en menselijk toezicht mogelijk te maken in AI systemen."
        }
      },
      {
        question: {
          en: "What is federated learning and why is it important for privacy-preserving ML?",
          es: "¿Qué es el aprendizaje federado y por qué es importante para ML que preserva privacidad?",
          de: "Was ist Federated Learning und warum ist es wichtig für datenschutzerhaltendes ML?",
          nl: "Wat is federated learning en waarom is het belangrijk voor privacy-behoudende ML?"
        },
        options: [
          { en: "Training models across decentralized devices without centralizing data, preserving user privacy", es: "Entrenar modelos a través de dispositivos descentralizados sin centralizar datos, preservando privacidad del usuario", de: "Training von Modellen über dezentrale Geräte ohne Daten zu zentralisieren, bewahrt Benutzerprivatsphäre", nl: "Trainen van modellen over gedecentraliseerde apparaten zonder data te centraliseren, behoudt gebruikersprivacy" },
          { en: "Federation of different machine learning algorithms", es: "Federación de diferentes algoritmos de machine learning", de: "Föderation verschiedener maschineller Lernalgorithmen", nl: "Federatie van verschillende machine learning algoritmes" },
          { en: "Learning from federated databases only", es: "Aprender solo de bases de datos federadas", de: "Lernen nur aus föderierten Datenbanken", nl: "Leren alleen van gefedereerde databases" },
          { en: "Combining multiple trained models into one", es: "Combinar múltiples modelos entrenados en uno", de: "Kombinieren mehrerer trainierter Modelle in eins", nl: "Combineren van meerdere getrainde modellen in één" }
        ],
        correct: 0,
        explanation: {
          en: "Federated learning trains ML models across distributed devices (smartphones, hospitals) without sharing raw data. Each device trains locally on its data, only sharing model updates which are aggregated centrally. This enables collaborative learning while maintaining data privacy and security.",
          es: "Aprendizaje federado entrena modelos ML a través de dispositivos distribuidos (teléfonos inteligentes, hospitales) sin compartir datos crudos. Cada dispositivo entrena localmente en sus datos, solo compartiendo actualizaciones de modelo que se agregan centralmente. Esto habilita aprendizaje colaborativo mientras mantiene privacidad y seguridad de datos.",
          de: "Federated Learning trainiert ML-Modelle über verteilte Geräte (Smartphones, Krankenhäuser) ohne Rohdaten zu teilen. Jedes Gerät trainiert lokal auf seinen Daten, teilt nur Modellaktualisierungen die zentral aggregiert werden. Dies ermöglicht kollaboratives Lernen während Datenprivatsphäre und Sicherheit erhalten bleiben.",
          nl: "Federated learning traint ML modellen over gedistribueerde apparaten (smartphones, ziekenhuizen) zonder ruwe data te delen. Elk apparaat traint lokaal op zijn data, deelt alleen modelupdates die centraal worden geaggregeerd. Dit maakt collaboratief leren mogelijk terwijl dataprivacy en beveiliging behouden blijven."
        }
      },
      {
        question: {
          en: "What is adversarial robustness and how do adversarial attacks exploit neural networks?",
          es: "¿Qué es la robustez adversarial y cómo explotan los ataques adversariales redes neuronales?",
          de: "Was ist adversariale Robustheit und wie nutzen adversariale Angriffe neuronale Netzwerke aus?",
          nl: "Wat is adversariale robuustheid en hoe exploiteren adversariale aanvallen neurale netwerken?"
        },
        options: [
          { en: "Adversarial attacks add imperceptible perturbations to fool models; robustness is resistance to such attacks", es: "Ataques adversariales agregan perturbaciones imperceptibles para engañar modelos; robustez es resistencia a tales ataques", de: "Adversariale Angriffe fügen nicht wahrnehmbare Störungen hinzu um Modelle zu täuschen; Robustheit ist Widerstand gegen solche Angriffe", nl: "Adversariale aanvallen voegen onmerkbare verstoringen toe om modellen te misleiden; robuustheid is weerstand tegen dergelijke aanvallen" },
          { en: "Adversarial robustness measures network's defense against malware", es: "Robustez adversarial mide defensa de red contra malware", de: "Adversariale Robustheit misst Netzwerkverteidigung gegen Malware", nl: "Adversariale robuustheid meet netwerkverdediging tegen malware" },
          { en: "Attacks that compete against other neural networks", es: "Ataques que compiten contra otras redes neuronales", de: "Angriffe die gegen andere neuronale Netzwerke konkurrieren", nl: "Aanvallen die concurreren met andere neurale netwerken" },
          { en: "Robustness to adversarial data distributions", es: "Robustez a distribuciones de datos adversariales", de: "Robustheit gegenüber adversarialen Datenverteilungen", nl: "Robuustheid tegen adversariale dataverdelingen" }
        ],
        correct: 0,
        explanation: {
          en: "Adversarial examples are inputs with small, carefully crafted perturbations that cause models to make incorrect predictions. Adversarial robustness techniques include adversarial training, defensive distillation, and certified defenses to make models resilient against such attacks, crucial for security-critical applications.",
          es: "Ejemplos adversariales son entradas con perturbaciones pequeñas cuidadosamente elaboradas que causan que modelos hagan predicciones incorrectas. Técnicas de robustez adversarial incluyen entrenamiento adversarial, destilación defensiva y defensas certificadas para hacer modelos resilientes contra tales ataques, crucial para aplicaciones críticas de seguridad.",
          de: "Adversariale Beispiele sind Eingaben mit kleinen, sorgfältig gestalteten Störungen die Modelle falsche Vorhersagen machen lassen. Adversariale Robustheits-Techniken umfassen adversariales Training, defensive Destillation und zertifizierte Verteidigungen um Modelle widerstandsfähig gegen solche Angriffe zu machen, entscheidend für sicherheitskritische Anwendungen.",
          nl: "Adversariale voorbeelden zijn inputs met kleine, zorgvuldig vervaardigde verstoringen die modellen incorrecte voorspellingen laten maken. Adversariale robuustheidstechnieken omvatten adversarial training, defensieve distillatie en gecertificeerde verdedigingen om modellen veerkrachtig te maken tegen dergelijke aanvallen, cruciaal voor beveiligingskritische toepassingen."
        }
      },
      {
        question: {
          en: "What is curriculum learning and how does it improve training efficiency?",
          es: "¿Qué es el aprendizaje curricular y cómo mejora la eficiencia del entrenamiento?",
          de: "Was ist Curriculum Learning und wie verbessert es Trainingseffizienz?",
          nl: "Wat is curriculum learning en hoe verbetert het trainingsefficiëntie?"
        },
        options: [
          { en: "Training models on progressively harder examples from simple to complex, mimicking human learning", es: "Entrenar modelos en ejemplos progresivamente más difíciles de simple a complejo, imitando aprendizaje humano", de: "Training von Modellen auf progressiv schwierigeren Beispielen von einfach zu komplex, ahmt menschliches Lernen nach", nl: "Trainen van modellen op progressief moeilijkere voorbeelden van simpel naar complex, imiteert menselijk leren" },
          { en: "Following a predefined curriculum of machine learning topics", es: "Seguir un currículum predefinido de temas de machine learning", de: "Folgen eines vordefinierten Curriculums von maschinellen Lernthemen", nl: "Volgen van een voorgedefinieerd curriculum van machine learning onderwerpen" },
          { en: "Organizing training data by subject matter", es: "Organizar datos de entrenamiento por materia", de: "Organisieren von Trainingsdaten nach Themengebiet", nl: "Organiseren van trainingsdata per onderwerp" },
          { en: "Scheduling different learning algorithms sequentially", es: "Programar diferentes algoritmos de aprendizaje secuencialmente", de: "Sequenzielles Planen verschiedener Lernalgorithmen", nl: "Plannen van verschillende leeralgoritmes sequentieel" }
        ],
        correct: 0,
        explanation: {
          en: "Curriculum learning trains models by presenting examples in a meaningful order, starting with simpler cases and gradually increasing difficulty. This strategy often leads to faster convergence, better generalization, and improved performance by allowing models to build foundational knowledge before tackling complex patterns.",
          es: "Aprendizaje curricular entrena modelos presentando ejemplos en orden significativo, comenzando con casos más simples y aumentando gradualmente dificultad. Esta estrategia a menudo lleva a convergencia más rápida, mejor generalización y rendimiento mejorado permitiendo que modelos construyan conocimiento fundamental antes de abordar patrones complejos.",
          de: "Curriculum Learning trainiert Modelle durch Präsentation von Beispielen in bedeutungsvoller Reihenfolge, beginnend mit einfacheren Fällen und schrittweiser Erhöhung der Schwierigkeit. Diese Strategie führt oft zu schnellerer Konvergenz, besserer Generalisierung und verbesserter Leistung durch Ermöglichen dass Modelle grundlegendes Wissen aufbauen bevor komplexe Muster angegangen werden.",
          nl: "Curriculum learning traint modellen door voorbeelden te presenteren in betekenisvolle volgorde, beginnend met simpelere gevallen en geleidelijk toenemende moeilijkheid. Deze strategie leidt vaak tot snellere convergentie, betere generalisatie en verbeterde prestaties door modellen toe te staan fundamentele kennis op te bouwen voordat complexe patronen worden aangepakt."
        }
      },
      {
        question: {
          en: "What is knowledge distillation and how does it transfer knowledge between models?",
          es: "¿Qué es la destilación de conocimiento y cómo transfiere conocimiento entre modelos?",
          de: "Was ist Knowledge Distillation und wie überträgt es Wissen zwischen Modellen?",
          nl: "Wat is knowledge distillation en hoe draagt het kennis over tussen modellen?"
        },
        options: [
          { en: "Trains smaller student model to mimic larger teacher model's soft predictions, compressing knowledge", es: "Entrena modelo estudiante más pequeño para imitar predicciones suaves de modelo maestro más grande, comprimiendo conocimiento", de: "Trainiert kleineres Schüler-Modell um weiche Vorhersagen größeren Lehrer-Modells nachzuahmen, komprimiert Wissen", nl: "Traint kleiner student model om zachte voorspellingen van groter leraar model na te bootsen, comprimeert kennis" },
          { en: "Distills essential features from training data", es: "Destila características esenciales de datos de entrenamiento", de: "Destilliert wesentliche Features aus Trainingsdaten", nl: "Destilleert essentiële features uit trainingsdata" },
          { en: "Extracts pure knowledge from noisy datasets", es: "Extrae conocimiento puro de conjuntos de datos ruidosos", de: "Extrahiert reines Wissen aus verrauschten Datensätzen", nl: "Extraheert pure kennis uit ruizige datasets" },
          { en: "Transfers knowledge from human experts to models", es: "Transfiere conocimiento de expertos humanos a modelos", de: "Überträgt Wissen von menschlichen Experten auf Modelle", nl: "Draagt kennis over van menselijke experts naar modellen" }
        ],
        correct: 0,
        explanation: {
          en: "Knowledge distillation trains a compact student model to reproduce the soft probability distributions (dark knowledge) of a larger teacher model, rather than just hard labels. The student learns richer information about relationships between classes, achieving competitive performance with significantly fewer parameters.",
          es: "Destilación de conocimiento entrena un modelo estudiante compacto para reproducir distribuciones de probabilidad suaves (conocimiento oscuro) de un modelo maestro más grande, en lugar de solo etiquetas duras. El estudiante aprende información más rica sobre relaciones entre clases, logrando rendimiento competitivo con significativamente menos parámetros.",
          de: "Knowledge Distillation trainiert ein kompaktes Schüler-Modell um die weichen Wahrscheinlichkeitsverteilungen (dunkles Wissen) eines größeren Lehrer-Modells zu reproduzieren, anstatt nur harte Labels. Der Schüler lernt reichere Information über Beziehungen zwischen Klassen, erreicht wettbewerbsfähige Leistung mit signifikant weniger Parametern.",
          nl: "Knowledge distillation traint een compact student model om de zachte waarschijnlijkheidsverdelingen (donkere kennis) van een groter leraar model te reproduceren, in plaats van alleen harde labels. De student leert rijkere informatie over relaties tussen klassen, bereikt competitieve prestaties met significant minder parameters."
        }
      },
      {
        question: {
          en: "What is ensemble learning and why does it often outperform single models?",
          es: "¿Qué es el aprendizaje en conjunto y por qué a menudo supera a modelos únicos?",
          de: "Was ist Ensemble Learning und warum übertrifft es oft einzelne Modelle?",
          nl: "Wat is ensemble learning en waarom presteert het vaak beter dan enkele modellen?"
        },
        options: [
          { en: "Combines multiple models to reduce variance, bias, and improve predictions through voting or averaging", es: "Combina múltiples modelos para reducir varianza, sesgo y mejorar predicciones a través de votación o promedio", de: "Kombiniert mehrere Modelle um Varianz, Bias zu reduzieren und Vorhersagen durch Abstimmung oder Mittelung zu verbessern", nl: "Combineert meerdere modellen om variantie, bias te verminderen en voorspellingen te verbeteren door stemmen of middeling" },
          { en: "Trains models in parallel for faster computation", es: "Entrena modelos en paralelo para computación más rápida", de: "Trainiert Modelle parallel für schnellere Berechnung", nl: "Traint modellen parallel voor snellere berekening" },
          { en: "Combines different types of neural network layers", es: "Combina diferentes tipos de capas de redes neuronales", de: "Kombiniert verschiedene Arten von neuronalen Netzwerkschichten", nl: "Combineert verschillende soorten neurale netwerklagen" },
          { en: "Uses ensemble of datasets for training", es: "Usa conjunto de conjuntos de datos para entrenamiento", de: "Verwendet Ensemble von Datensätzen für Training", nl: "Gebruikt ensemble van datasets voor training" }
        ],
        correct: 0,
        explanation: {
          en: "Ensemble learning aggregates predictions from multiple diverse models (e.g., random forests, gradient boosting). By combining different perspectives, ensembles reduce individual model errors, improve robustness, and generalization. Methods include bagging (parallel training), boosting (sequential error correction), and stacking (meta-learning).",
          es: "Aprendizaje en conjunto agrega predicciones de múltiples modelos diversos (ej., random forests, gradient boosting). Combinando diferentes perspectivas, conjuntos reducen errores de modelos individuales, mejoran robustez y generalización. Métodos incluyen bagging (entrenamiento paralelo), boosting (corrección de errores secuencial) y stacking (meta-aprendizaje).",
          de: "Ensemble Learning aggregiert Vorhersagen von mehreren diversen Modellen (z.B., Random Forests, Gradient Boosting). Durch Kombination verschiedener Perspektiven reduzieren Ensembles individuelle Modellfehler, verbessern Robustheit und Generalisierung. Methoden umfassen Bagging (paralleles Training), Boosting (sequenzielle Fehlerkorrektur) und Stacking (Meta-Learning).",
          nl: "Ensemble learning aggregeert voorspellingen van meerdere diverse modellen (bijv., random forests, gradient boosting). Door verschillende perspectieven te combineren, verminderen ensembles individuele modelfouten, verbeteren robuustheid en generalisatie. Methoden omvatten bagging (parallel training), boosting (sequentiële foutcorrectie) en stacking (meta-learning)."
        }
      },
      {
        question: {
          en: "What is the bias-variance tradeoff in machine learning?",
          es: "¿Qué es el compromiso sesgo-varianza en machine learning?",
          de: "Was ist der Bias-Varianz-Tradeoff im maschinellen Lernen?",
          nl: "Wat is de bias-variantie afweging in machine learning?"
        },
        options: [
          { en: "Balancing model complexity: high bias underfits, high variance overfits; optimal models balance both", es: "Equilibrar complejidad del modelo: alto sesgo subajusta, alta varianza sobreajusta; modelos óptimos equilibran ambos", de: "Modellkomplexität ausbalancieren: hoher Bias unterpasst, hohe Varianz überpasst; optimale Modelle balancieren beide", nl: "Modelcomplexiteit balanceren: hoge bias underfit, hoge variantie overfit; optimale modellen balanceren beide" },
          { en: "Trade-off between training speed and accuracy", es: "Compromiso entre velocidad de entrenamiento y precisión", de: "Tradeoff zwischen Trainingsgeschwindigkeit und Genauigkeit", nl: "Afweging tussen trainingssnelheid en nauwkeurigheid" },
          { en: "Balance between different types of data bias", es: "Balance entre diferentes tipos de sesgo de datos", de: "Balance zwischen verschiedenen Arten von Datenbias", nl: "Balans tussen verschillende soorten databias" },
          { en: "Choosing between biased and unbiased estimators", es: "Elegir entre estimadores sesgados y no sesgados", de: "Wahl zwischen biased und unbiased Schätzern", nl: "Kiezen tussen biased en unbiased schattingen" }
        ],
        correct: 0,
        explanation: {
          en: "Bias measures how far predictions are from true values (underfitting), variance measures sensitivity to training data fluctuations (overfitting). Simple models have high bias/low variance, complex models have low bias/high variance. The goal is finding the sweet spot minimizing total error = bias² + variance + irreducible noise.",
          es: "Sesgo mide qué tan lejos están predicciones de valores verdaderos (subajuste), varianza mide sensibilidad a fluctuaciones de datos de entrenamiento (sobreajuste). Modelos simples tienen alto sesgo/baja varianza, modelos complejos tienen bajo sesgo/alta varianza. El objetivo es encontrar el punto óptimo minimizando error total = sesgo² + varianza + ruido irreducible.",
          de: "Bias misst wie weit Vorhersagen von wahren Werten sind (Underfitting), Varianz misst Sensitivität auf Trainingsdaten-Schwankungen (Overfitting). Einfache Modelle haben hohen Bias/niedrige Varianz, komplexe Modelle haben niedrigen Bias/hohe Varianz. Ziel ist den Sweet Spot zu finden der Gesamtfehler minimiert = Bias² + Varianz + irreduzibles Rauschen.",
          nl: "Bias meet hoe ver voorspellingen zijn van ware waarden (underfitting), variantie meet gevoeligheid voor trainingsdata fluctuaties (overfitting). Simpele modellen hebben hoge bias/lage variantie, complexe modellen hebben lage bias/hoge variantie. Doel is de sweet spot vinden die totale fout minimaliseert = bias² + variantie + onherleidbare ruis."
        }
      },
      {
        question: {
          en: "What is neural pruning and how does it optimize model efficiency?",
          es: "¿Qué es la poda neuronal y cómo optimiza la eficiencia del modelo?",
          de: "Was ist neuronales Pruning und wie optimiert es Modelleffizienz?",
          nl: "Wat is neural pruning en hoe optimaliseert het modelefficiëntie?"
        },
        options: [
          { en: "Removes low-importance weights/neurons to reduce model size while maintaining performance", es: "Elimina pesos/neuronas de baja importancia para reducir tamaño del modelo mientras mantiene rendimiento", de: "Entfernt Gewichte/Neuronen mit geringer Wichtigkeit um Modellgröße zu reduzieren während Leistung erhalten bleibt", nl: "Verwijdert gewichten/neuronen met lage belangrijkheid om modelgrootte te verkleinen terwijl prestaties behouden blijven" },
          { en: "Prunes training data to remove outliers", es: "Poda datos de entrenamiento para eliminar valores atípicos", de: "Beschneidet Trainingsdaten um Ausreißer zu entfernen", nl: "Snoeit trainingsdata om uitbijters te verwijderen" },
          { en: "Cuts down training time by pruning epochs", es: "Reduce tiempo de entrenamiento podando épocas", de: "Reduziert Trainingszeit durch Beschneiden von Epochen", nl: "Vermindert trainingstijd door epochs te snoeien" },
          { en: "Removes unused features from input data", es: "Elimina características no usadas de datos de entrada", de: "Entfernt ungenutzte Features aus Eingabedaten", nl: "Verwijdert ongebruikte features uit invoerdata" }
        ],
        correct: 0,
        explanation: {
          en: "Neural pruning systematically removes redundant or low-magnitude weights, neurons, or filters from trained networks. Techniques include magnitude-based pruning, structured pruning (entire neurons/channels), and iterative pruning. This reduces computational cost, memory footprint, and inference time while preserving accuracy, crucial for deployment on resource-constrained devices.",
          es: "Poda neuronal elimina sistemáticamente pesos, neuronas o filtros redundantes o de baja magnitud de redes entrenadas. Técnicas incluyen poda basada en magnitud, poda estructurada (neuronas/canales enteros) y poda iterativa. Esto reduce costo computacional, huella de memoria y tiempo de inferencia mientras preserva precisión, crucial para despliegue en dispositivos con recursos limitados.",
          de: "Neuronales Pruning entfernt systematisch redundante oder niedrig-magnitude Gewichte, Neuronen oder Filter aus trainierten Netzwerken. Techniken umfassen magnitude-basiertes Pruning, strukturiertes Pruning (ganze Neuronen/Kanäle) und iteratives Pruning. Dies reduziert Rechenkosten, Speicher-Footprint und Inferenzzeit während Genauigkeit erhalten bleibt, entscheidend für Bereitstellung auf ressourcenbeschränkten Geräten.",
          nl: "Neural pruning verwijdert systematisch redundante of lage-magnitude gewichten, neuronen of filters uit getrainde netwerken. Technieken omvatten magnitude-gebaseerd pruning, gestructureerd pruning (hele neuronen/kanalen) en iteratief pruning. Dit vermindert computationele kosten, geheugenvoetafdruk en inferentietijd terwijl nauwkeurigheid behouden blijft, cruciaal voor deployment op resource-beperkte apparaten."
        }
      },
      {
        question: {
          en: "What is quantization in neural networks and how does it accelerate inference?",
          es: "¿Qué es la cuantización en redes neuronales y cómo acelera la inferencia?",
          de: "Was ist Quantisierung in neuronalen Netzwerken und wie beschleunigt sie Inferenz?",
          nl: "Wat is quantization in neurale netwerken en hoe versnelt het inferentie?"
        },
        options: [
          { en: "Reduces numerical precision of weights/activations from float32 to int8, enabling faster hardware computation", es: "Reduce precisión numérica de pesos/activaciones de float32 a int8, habilitando computación de hardware más rápida", de: "Reduziert numerische Präzision von Gewichten/Aktivierungen von float32 auf int8, ermöglicht schnellere Hardware-Berechnung", nl: "Vermindert numerieke precisie van gewichten/activaties van float32 naar int8, maakt snellere hardware berekening mogelijk" },
          { en: "Quantifies model performance with numerical metrics", es: "Cuantifica rendimiento del modelo con métricas numéricas", de: "Quantifiziert Modellleistung mit numerischen Metriken", nl: "Kwantificeert modelprestaties met numerieke metrieken" },
          { en: "Divides neural network into quantized segments", es: "Divide red neuronal en segmentos cuantizados", de: "Teilt neuronales Netzwerk in quantisierte Segmente", nl: "Verdeelt neuraal netwerk in gekwantiseerde segmenten" },
          { en: "Measures quantum effects in neural computations", es: "Mide efectos cuánticos en computaciones neuronales", de: "Misst Quanteneffekte in neuronalen Berechnungen", nl: "Meet kwantumeffecten in neurale berekeningen" }
        ],
        correct: 0,
        explanation: {
          en: "Quantization converts high-precision floating-point weights and activations to lower-precision formats (int8, int4). This dramatically reduces model size (4-8x), memory bandwidth, and enables faster integer arithmetic on specialized hardware. Techniques include post-training quantization and quantization-aware training to minimize accuracy loss.",
          es: "Cuantización convierte pesos y activaciones de punto flotante de alta precisión a formatos de menor precisión (int8, int4). Esto reduce dramáticamente tamaño del modelo (4-8x), ancho de banda de memoria y habilita aritmética entera más rápida en hardware especializado. Técnicas incluyen cuantización post-entrenamiento y entrenamiento consciente de cuantización para minimizar pérdida de precisión.",
          de: "Quantisierung konvertiert hochpräzise Floating-Point-Gewichte und Aktivierungen in niedrigere Präzisionsformate (int8, int4). Dies reduziert dramatisch Modellgröße (4-8x), Speicherbandbreite und ermöglicht schnellere Integer-Arithmetik auf spezialisierter Hardware. Techniken umfassen Post-Training-Quantisierung und Quantisierungs-bewusstes Training um Genauigkeitsverlust zu minimieren.",
          nl: "Quantization converteert hoge-precisie floating-point gewichten en activaties naar lagere-precisie formaten (int8, int4). Dit vermindert dramatisch modelgrootte (4-8x), geheugenbandwidth en maakt snellere integer rekenkunde mogelijk op gespecialiseerde hardware. Technieken omvatten post-training quantization en quantization-aware training om nauwkeurigheidsverlies te minimaliseren."
        }
      },
      {
        question: {
          en: "What is model compression and what are the main techniques used?",
          es: "¿Qué es la compresión de modelos y cuáles son las principales técnicas usadas?",
          de: "Was ist Modellkompression und was sind die Haupttechniken die verwendet werden?",
          nl: "Wat is modelcompressie en wat zijn de belangrijkste technieken die gebruikt worden?"
        },
        options: [
          { en: "Reduces model size/complexity using pruning, quantization, knowledge distillation, and low-rank factorization", es: "Reduce tamaño/complejidad del modelo usando poda, cuantización, destilación de conocimiento y factorización de bajo rango", de: "Reduziert Modellgröße/-komplexität mit Pruning, Quantisierung, Knowledge Distillation und Low-Rank-Faktorisierung", nl: "Vermindert modelgrootte/-complexiteit met pruning, quantization, knowledge distillation en low-rank factorisatie" },
          { en: "Compresses training data to reduce storage", es: "Comprime datos de entrenamiento para reducir almacenamiento", de: "Komprimiert Trainingsdaten um Speicherplatz zu reduzieren", nl: "Comprimeert trainingsdata om opslag te verminderen" },
          { en: "Uses compression algorithms on model files", es: "Usa algoritmos de compresión en archivos de modelo", de: "Verwendet Kompressionsalgorithmen auf Modelldateien", nl: "Gebruikt compressiealgoritmes op modelbestanden" },
          { en: "Reduces the number of layers in neural networks", es: "Reduce el número de capas en redes neuronales", de: "Reduziert die Anzahl der Schichten in neuronalen Netzwerken", nl: "Vermindert het aantal lagen in neurale netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "Model compression aims to reduce computational and memory requirements while maintaining performance. Key techniques: pruning removes unnecessary parameters, quantization reduces precision, knowledge distillation transfers knowledge to smaller models, and low-rank factorization decomposes weight matrices. Essential for deploying models on edge devices.",
          es: "Compresión de modelos busca reducir requisitos computacionales y de memoria mientras mantiene rendimiento. Técnicas clave: poda elimina parámetros innecesarios, cuantización reduce precisión, destilación de conocimiento transfiere conocimiento a modelos más pequeños, y factorización de bajo rango descompone matrices de pesos. Esencial para desplegar modelos en dispositivos edge.",
          de: "Modellkompression zielt darauf ab Rechen- und Speicheranforderungen zu reduzieren während Leistung erhalten bleibt. Schlüsseltechniken: Pruning entfernt unnötige Parameter, Quantisierung reduziert Präzision, Knowledge Distillation überträgt Wissen auf kleinere Modelle, und Low-Rank-Faktorisierung zerlegt Gewichtsmatrizen. Wesentlich für Bereitstellung von Modellen auf Edge-Geräten.",
          nl: "Modelcompressie streeft ernaar computationele en geheugenvereisten te verminderen terwijl prestaties behouden blijven. Belangrijke technieken: pruning verwijdert onnodige parameters, quantization vermindert precisie, knowledge distillation draagt kennis over naar kleinere modellen, en low-rank factorisatie decomponneert gewichtsmatrices. Essentieel voor deployment van modellen op edge apparaten."
        }
      },
      {
        question: {
          en: "What is neural architecture optimization and how does it differ from hyperparameter tuning?",
          es: "¿Qué es la optimización de arquitectura neuronal y cómo difiere del ajuste de hiperparámetros?",
          de: "Was ist neuronale Architekturoptimierung und wie unterscheidet sie sich von Hyperparameter-Tuning?",
          nl: "Wat is neurale architectuuroptimalisatie en hoe verschilt het van hyperparameter tuning?"
        },
        options: [
          { en: "Searches for optimal network structure (layers, connections) while hyperparameter tuning adjusts training settings", es: "Busca estructura de red óptima (capas, conexiones) mientras ajuste de hiperparámetros ajusta configuraciones de entrenamiento", de: "Sucht nach optimaler Netzwerkstruktur (Schichten, Verbindungen) während Hyperparameter-Tuning Trainingseinstellungen anpasst", nl: "Zoekt naar optimale netwerkstructuur (lagen, verbindingen) terwijl hyperparameter tuning trainingsinstellingen aanpast" },
          { en: "Both terms refer to the same optimization process", es: "Ambos términos se refieren al mismo proceso de optimización", de: "Beide Begriffe beziehen sich auf denselben Optimierungsprozess", nl: "Beide termen verwijzen naar hetzelfde optimalisatieproces" },
          { en: "Architecture optimization is faster than hyperparameter tuning", es: "Optimización de arquitectura es más rápida que ajuste de hiperparámetros", de: "Architekturoptimierung ist schneller als Hyperparameter-Tuning", nl: "Architectuuroptimalisatie is sneller dan hyperparameter tuning" },
          { en: "Hyperparameter tuning changes model architecture", es: "Ajuste de hiperparámetros cambia arquitectura del modelo", de: "Hyperparameter-Tuning ändert Modellarchitektur", nl: "Hyperparameter tuning verandert modelarchitectuur" }
        ],
        correct: 0,
        explanation: {
          en: "Neural architecture optimization (NAS) searches for optimal model topology - number of layers, layer types, connections, and neuron counts. Hyperparameter tuning adjusts training configuration like learning rate, batch size, and regularization strength. NAS is more computationally expensive but can discover novel architectures beyond human design.",
          es: "Optimización de arquitectura neuronal (NAS) busca topología de modelo óptima - número de capas, tipos de capas, conexiones y recuentos de neuronas. Ajuste de hiperparámetros ajusta configuración de entrenamiento como tasa de aprendizaje, tamaño de lote y fuerza de regularización. NAS es más costoso computacionalmente pero puede descubrir arquitecturas novedosas más allá del diseño humano.",
          de: "Neuronale Architekturoptimierung (NAS) sucht nach optimaler Modelltopologie - Anzahl Schichten, Schichttypen, Verbindungen und Neuronenzahlen. Hyperparameter-Tuning passt Trainingskonfiguration an wie Lernrate, Batch-Größe und Regularisierungsstärke. NAS ist rechnerisch teurer aber kann neuartige Architekturen jenseits menschlichen Designs entdecken.",
          nl: "Neurale architectuuroptimalisatie (NAS) zoekt naar optimale modeltopologie - aantal lagen, laagtypen, verbindingen en neuronenaantallen. Hyperparameter tuning past trainingsconfiguratie aan zoals learning rate, batch grootte en regularisatiesterkte. NAS is computationeel duurder maar kan nieuwe architecturen ontdekken buiten menselijk ontwerp."
        }
      },
      {
        question: {
          en: "What is transfer learning's fine-tuning strategy and when should you freeze layers?",
          es: "¿Qué es la estrategia de ajuste fino del aprendizaje por transferencia y cuándo deberías congelar capas?",
          de: "Was ist die Fine-Tuning-Strategie von Transfer Learning und wann sollten Schichten eingefroren werden?",
          nl: "Wat is de fine-tuning strategie van transfer learning en wanneer moet je lagen bevriezen?"
        },
        options: [
          { en: "Freeze early layers (general features) when data is limited, unfreeze more layers with larger related datasets", es: "Congelar capas tempranas (características generales) cuando datos son limitados, descongelar más capas con conjuntos de datos relacionados más grandes", de: "Frühe Schichten einfrieren (allgemeine Features) wenn Daten begrenzt sind, mehr Schichten auftauen mit größeren verwandten Datensätzen", nl: "Bevries vroege lagen (algemene features) wanneer data beperkt is, ontdooi meer lagen met grotere gerelateerde datasets" },
          { en: "Always freeze all layers except the last one", es: "Siempre congelar todas las capas excepto la última", de: "Immer alle Schichten außer der letzten einfrieren", nl: "Altijd alle lagen behalve de laatste bevriezen" },
          { en: "Never freeze any layers for best performance", es: "Nunca congelar ninguna capa para mejor rendimiento", de: "Niemals Schichten einfrieren für beste Leistung", nl: "Nooit lagen bevriezen voor beste prestaties" },
          { en: "Freeze layers randomly during training", es: "Congelar capas aleatoriamente durante entrenamiento", de: "Schichten zufällig während des Trainings einfrieren", nl: "Lagen willekeurig bevriezen tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "In transfer learning, early layers learn general features (edges, textures) and later layers learn task-specific features. With small target datasets, freeze early layers to prevent overfitting. With larger datasets similar to source domain, progressively unfreeze and fine-tune more layers. Very different domains may require unfreezing most layers.",
          es: "En aprendizaje por transferencia, capas tempranas aprenden características generales (bordes, texturas) y capas posteriores aprenden características específicas de tarea. Con conjuntos de datos objetivo pequeños, congelar capas tempranas para prevenir sobreajuste. Con conjuntos de datos más grandes similares a dominio fuente, progresivamente descongelar y ajustar finamente más capas. Dominios muy diferentes pueden requerir descongelar la mayoría de capas.",
          de: "In Transfer Learning lernen frühe Schichten allgemeine Features (Kanten, Texturen) und spätere Schichten lernen aufgabenspezifische Features. Mit kleinen Ziel-Datensätzen frühe Schichten einfrieren um Overfitting zu verhindern. Mit größeren Datensätzen ähnlich zur Quelldomäne progressiv mehr Schichten auftauen und feinabstimmen. Sehr unterschiedliche Domänen können Auftauen der meisten Schichten erfordern.",
          nl: "In transfer learning leren vroege lagen algemene features (randen, texturen) en latere lagen leren taak-specifieke features. Met kleine doeldatasets, bevries vroege lagen om overfitting te voorkomen. Met grotere datasets vergelijkbaar met brondomein, geleidelijk ontdooi en fine-tune meer lagen. Zeer verschillende domeinen kunnen ontdooien van de meeste lagen vereisen."
        }
      },
      {
        question: {
          en: "What is zero-shot learning and how does it generalize to unseen classes?",
          es: "¿Qué es el aprendizaje de cero ejemplos y cómo generaliza a clases no vistas?",
          de: "Was ist Zero-Shot Learning und wie generalisiert es auf ungesehene Klassen?",
          nl: "Wat is zero-shot learning en hoe generaliseert het naar ongeziene klassen?"
        },
        options: [
          { en: "Uses semantic attributes or embeddings to classify classes never seen during training", es: "Usa atributos semánticos o embeddings para clasificar clases nunca vistas durante entrenamiento", de: "Verwendet semantische Attribute oder Embeddings um Klassen zu klassifizieren die während Training nie gesehen wurden", nl: "Gebruikt semantische attributen of embeddings om klassen te classificeren die nooit gezien zijn tijdens training" },
          { en: "Learns without any training examples", es: "Aprende sin ningún ejemplo de entrenamiento", de: "Lernt ohne jegliche Trainingsbeispiele", nl: "Leert zonder trainingsvoorbeelden" },
          { en: "Uses zero initialization for model weights", es: "Usa inicialización cero para pesos del modelo", de: "Verwendet Null-Initialisierung für Modellgewichte", nl: "Gebruikt nul initialisatie voor modelgewichten" },
          { en: "Performs learning in zero iterations", es: "Realiza aprendizaje en cero iteraciones", de: "Führt Lernen in null Iterationen durch", nl: "Voert leren uit in nul iteraties" }
        ],
        correct: 0,
        explanation: {
          en: "Zero-shot learning classifies objects from categories not present in training data by leveraging auxiliary information like textual descriptions, attributes, or semantic embeddings. It maps visual features to semantic space where relationships between seen and unseen classes enable generalization. Examples include CLIP matching images to text descriptions.",
          es: "Aprendizaje de cero ejemplos clasifica objetos de categorías no presentes en datos de entrenamiento aprovechando información auxiliar como descripciones textuales, atributos o embeddings semánticos. Mapea características visuales a espacio semántico donde relaciones entre clases vistas y no vistas habilitan generalización. Ejemplos incluyen CLIP emparejando imágenes con descripciones de texto.",
          de: "Zero-Shot Learning klassifiziert Objekte aus Kategorien die nicht in Trainingsdaten vorhanden sind durch Nutzung von Hilfsinformationen wie Textbeschreibungen, Attribute oder semantische Embeddings. Es bildet visuelle Features auf semantischen Raum ab wo Beziehungen zwischen gesehenen und ungesehenen Klassen Generalisierung ermöglichen. Beispiele umfassen CLIP das Bilder mit Textbeschreibungen abgleicht.",
          nl: "Zero-shot learning classificeert objecten uit categorieën die niet aanwezig zijn in trainingsdata door gebruik te maken van hulpinformatie zoals tekstuele beschrijvingen, attributen of semantische embeddings. Het mapt visuele features naar semantische ruimte waar relaties tussen geziene en ongeziene klassen generalisatie mogelijk maken. Voorbeelden zijn CLIP die afbeeldingen koppelt aan tekstbeschrijvingen."
        }
      },
      {
        question: {
          en: "What is contrastive learning and how does it learn representations?",
          es: "¿Qué es el aprendizaje contrastivo y cómo aprende representaciones?",
          de: "Was ist kontrastives Lernen und wie lernt es Repräsentationen?",
          nl: "Wat is contrastive learning en hoe leert het representaties?"
        },
        options: [
          { en: "Learns by pulling similar samples together and pushing dissimilar samples apart in embedding space", es: "Aprende juntando muestras similares y separando muestras diferentes en espacio de embedding", de: "Lernt durch Zusammenziehen ähnlicher Samples und Auseinanderschieben unähnlicher Samples im Embedding-Raum", nl: "Leert door vergelijkbare samples samen te trekken en verschillende samples uit elkaar te duwen in embedding ruimte" },
          { en: "Contrasts different machine learning algorithms", es: "Contrasta diferentes algoritmos de machine learning", de: "Kontrastiert verschiedene maschinelle Lernalgorithmen", nl: "Contrasteert verschillende machine learning algoritmes" },
          { en: "Uses contrast enhancement on training images", es: "Usa mejora de contraste en imágenes de entrenamiento", de: "Verwendet Kontrastverbesserung auf Trainingsbildern", nl: "Gebruikt contrastverbetering op trainingsafbeeldingen" },
          { en: "Learns from contrasting positive and negative examples", es: "Aprende de contrastar ejemplos positivos y negativos", de: "Lernt aus Kontrastierung positiver und negativer Beispiele", nl: "Leert van contrasteren van positieve en negatieve voorbeelden" }
        ],
        correct: 0,
        explanation: {
          en: "Contrastive learning trains models to maximize agreement between differently augmented views of the same data (positive pairs) while minimizing agreement with other samples (negative pairs). Methods like SimCLR, MoCo use this to learn powerful representations without labels, achieving strong performance on downstream tasks.",
          es: "Aprendizaje contrastivo entrena modelos para maximizar acuerdo entre vistas aumentadas diferentes de los mismos datos (pares positivos) mientras minimiza acuerdo con otras muestras (pares negativos). Métodos como SimCLR, MoCo usan esto para aprender representaciones poderosas sin etiquetas, logrando rendimiento fuerte en tareas posteriores.",
          de: "Kontrastives Lernen trainiert Modelle um Übereinstimmung zwischen unterschiedlich augmentierten Ansichten derselben Daten (positive Paare) zu maximieren während Übereinstimmung mit anderen Samples (negative Paare) minimiert wird. Methoden wie SimCLR, MoCo verwenden dies um mächtige Repräsentationen ohne Labels zu lernen, erreichen starke Leistung bei nachgelagerten Aufgaben.",
          nl: "Contrastive learning traint modellen om overeenstemming te maximaliseren tussen verschillend geaugmenteerde views van dezelfde data (positieve paren) terwijl overeenstemming met andere samples (negatieve paren) wordt geminimaliseerd. Methoden zoals SimCLR, MoCo gebruiken dit om krachtige representaties te leren zonder labels, bereiken sterke prestaties op downstream taken."
        }
      },
      {
        question: {
          en: "What is model fairness and how can bias be measured and mitigated in ML systems?",
          es: "¿Qué es la equidad del modelo y cómo puede medirse y mitigarse el sesgo en sistemas ML?",
          de: "Was ist Modell-Fairness und wie kann Bias in ML-Systemen gemessen und gemildert werden?",
          nl: "Wat is model fairness en hoe kan bias gemeten en gemitigeerd worden in ML systemen?"
        },
        options: [
          { en: "Ensures equitable treatment across groups; measured by demographic parity, equal opportunity; mitigated through data balancing, fairness constraints", es: "Asegura tratamiento equitativo entre grupos; medido por paridad demográfica, igualdad de oportunidades; mitigado a través de balance de datos, restricciones de equidad", de: "Stellt gleichberechtigte Behandlung über Gruppen sicher; gemessen durch demografische Parität, Chancengleichheit; gemildert durch Datenausgleich, Fairness-Beschränkungen", nl: "Zorgt voor eerlijke behandeling tussen groepen; gemeten door demografische pariteit, gelijke kansen; gemitigeerd door data balancering, fairness beperkingen" },
          { en: "Ensures models perform fairly across different datasets", es: "Asegura que modelos funcionen equitativamente entre diferentes conjuntos de datos", de: "Stellt sicher dass Modelle fair über verschiedene Datensätze funktionieren", nl: "Zorgt ervoor dat modellen fair presteren over verschillende datasets" },
          { en: "Fairness in distributing computational resources", es: "Equidad en distribuir recursos computacionales", de: "Fairness bei Verteilung von Rechenressourcen", nl: "Fairheid in verdeling van computationele middelen" },
          { en: "Equal accuracy for all prediction classes", es: "Precisión igual para todas las clases de predicción", de: "Gleiche Genauigkeit für alle Vorhersageklassen", nl: "Gelijke nauwkeurigheid voor alle voorspellingsklassen" }
        ],
        correct: 0,
        explanation: {
          en: "Model fairness addresses discriminatory outcomes across protected groups (race, gender, age). Metrics include demographic parity (equal positive rates), equalized odds (equal TPR/FPR), individual fairness. Mitigation strategies: balanced training data, adversarial debiasing, post-processing calibration, and fairness-aware learning objectives. Critical for ethical AI deployment.",
          es: "Equidad del modelo aborda resultados discriminatorios entre grupos protegidos (raza, género, edad). Métricas incluyen paridad demográfica (tasas positivas iguales), probabilidades igualadas (TPR/FPR iguales), equidad individual. Estrategias de mitigación: datos de entrenamiento balanceados, debiasing adversarial, calibración post-procesamiento y objetivos de aprendizaje conscientes de equidad. Crítico para despliegue ético de IA.",
          de: "Modell-Fairness behandelt diskriminierende Ergebnisse über geschützte Gruppen (Rasse, Geschlecht, Alter). Metriken umfassen demografische Parität (gleiche Positivraten), ausgeglichene Chancen (gleiche TPR/FPR), individuelle Fairness. Milderungsstrategien: ausgewogene Trainingsdaten, adversariales Debiasing, Post-Processing-Kalibrierung und Fairness-bewusste Lernziele. Kritisch für ethische KI-Bereitstellung.",
          nl: "Model fairness pakt discriminerende resultaten aan over beschermde groepen (ras, geslacht, leeftijd). Metrieken omvatten demografische pariteit (gelijke positieve rates), gelijkgestelde kansen (gelijke TPR/FPR), individuele fairness. Mitigatiestrategieën: gebalanceerde trainingsdata, adversarial debiasing, post-processing kalibratie en fairness-bewuste leerdoelstellingen. Cruciaal voor ethische AI deployment."
        }
      },
      {
        question: {
          en: "What is multi-modal learning and what are its applications?",
          es: "¿Qué es el aprendizaje multimodal y cuáles son sus aplicaciones?",
          de: "Was ist multimodales Lernen und was sind seine Anwendungen?",
          nl: "Wat is multi-modaal leren en wat zijn de toepassingen?"
        },
        options: [
          { en: "Integrates information from multiple modalities (text, image, audio, video) for richer understanding and cross-modal tasks", es: "Integra información de múltiples modalidades (texto, imagen, audio, video) para comprensión más rica y tareas cross-modales", de: "Integriert Information aus mehreren Modalitäten (Text, Bild, Audio, Video) für reicheres Verständnis und cross-modale Aufgaben", nl: "Integreert informatie van meerdere modaliteiten (tekst, beeld, audio, video) voor rijker begrip en cross-modale taken" },
          { en: "Uses multiple statistical modes for prediction", es: "Usa múltiples modos estadísticos para predicción", de: "Verwendet mehrere statistische Modi für Vorhersage", nl: "Gebruikt meerdere statistische modi voor voorspelling" },
          { en: "Trains multiple models simultaneously", es: "Entrena múltiples modelos simultáneamente", de: "Trainiert mehrere Modelle gleichzeitig", nl: "Traint meerdere modellen gelijktijdig" },
          { en: "Applies different learning modes to same data", es: "Aplica diferentes modos de aprendizaje a mismos datos", de: "Wendet verschiedene Lernmodi auf dieselben Daten an", nl: "Past verschillende leermodi toe op dezelfde data" }
        ],
        correct: 0,
        explanation: {
          en: "Multi-modal learning combines data from different sources (vision, language, audio) to build richer representations. Applications include image captioning, visual question answering, video understanding, and cross-modal retrieval. Models like CLIP and GPT-4V demonstrate the power of joint vision-language understanding.",
          es: "Aprendizaje multimodal combina datos de diferentes fuentes (visión, lenguaje, audio) para construir representaciones más ricas. Aplicaciones incluyen subtitulado de imágenes, respuesta a preguntas visuales, comprensión de video y recuperación cross-modal. Modelos como CLIP y GPT-4V demuestran el poder de comprensión conjunta visión-lenguaje.",
          de: "Multimodales Lernen kombiniert Daten aus verschiedenen Quellen (Vision, Sprache, Audio) um reichere Repräsentationen zu bauen. Anwendungen umfassen Bildunterschriften, visuelles Frage-Antworten, Videoverständnis und cross-modale Suche. Modelle wie CLIP und GPT-4V demonstrieren die Macht gemeinsamen Vision-Sprache-Verständnisses.",
          nl: "Multi-modaal leren combineert data van verschillende bronnen (visie, taal, audio) om rijkere representaties te bouwen. Toepassingen omvatten afbeelding bijschriften, visuele vraagbeantwoording, videobegrip en cross-modale retrieval. Modellen zoals CLIP en GPT-4V demonstreren de kracht van gezamenlijk visie-taal begrip."
        }
      },
      {
        question: {
          en: "What is model calibration and why is it important for probabilistic predictions?",
          es: "¿Qué es la calibración del modelo y por qué es importante para predicciones probabilísticas?",
          de: "Was ist Modellkalibrierung und warum ist sie wichtig für probabilistische Vorhersagen?",
          nl: "Wat is modelkalibratie en waarom is het belangrijk voor probabilistische voorspellingen?"
        },
        options: [
          { en: "Ensures predicted probabilities match actual frequencies; crucial for decision-making under uncertainty", es: "Asegura que probabilidades predichas coincidan con frecuencias reales; crucial para toma de decisiones bajo incertidumbre", de: "Stellt sicher dass vorhergesagte Wahrscheinlichkeiten mit tatsächlichen Häufigkeiten übereinstimmen; entscheidend für Entscheidungsfindung unter Unsicherheit", nl: "Zorgt ervoor dat voorspelde waarschijnlijkheden overeenkomen met werkelijke frequenties; cruciaal voor besluitvorming onder onzekerheid" },
          { en: "Calibrates model parameters before training", es: "Calibra parámetros del modelo antes de entrenamiento", de: "Kalibriert Modellparameter vor dem Training", nl: "Kalibreert modelparameters voor training" },
          { en: "Adjusts model accuracy to 100%", es: "Ajusta precisión del modelo a 100%", de: "Passt Modellgenauigkeit auf 100% an", nl: "Past modelnauwkeurigheid aan naar 100%" },
          { en: "Ensures equal performance across all classes", es: "Asegura rendimiento igual en todas las clases", de: "Stellt gleiche Leistung über alle Klassen sicher", nl: "Zorgt voor gelijke prestaties over alle klassen" }
        ],
        correct: 0,
        explanation: {
          en: "A well-calibrated model's predicted probability of 0.7 means the event occurs 70% of the time. Neural networks often produce overconfident predictions. Calibration methods include temperature scaling, Platt scaling, and isotonic regression. Essential for medical diagnosis, risk assessment, and any application requiring reliable uncertainty estimates.",
          es: "Un modelo bien calibrado con probabilidad predicha de 0.7 significa que el evento ocurre 70% del tiempo. Redes neuronales a menudo producen predicciones con exceso de confianza. Métodos de calibración incluyen escalado de temperatura, escalado de Platt y regresión isotónica. Esencial para diagnóstico médico, evaluación de riesgos y cualquier aplicación que requiera estimaciones de incertidumbre confiables.",
          de: "Ein gut kalibriertes Modell mit vorhergesagter Wahrscheinlichkeit von 0.7 bedeutet dass das Ereignis 70% der Zeit eintritt. Neuronale Netzwerke produzieren oft überbeweisste Vorhersagen. Kalibrierungsmethoden umfassen Temperaturskalierung, Platt-Skalierung und isotonische Regression. Wesentlich für medizinische Diagnose, Risikobewertung und jede Anwendung die zuverlässige Unsicherheitsschätzungen benötigt.",
          nl: "Een goed gekalibreerd model met voorspelde waarschijnlijkheid van 0.7 betekent dat de gebeurtenis 70% van de tijd voorkomt. Neurale netwerken produceren vaak overconfident voorspellingen. Kalibratiemethoden omvatten temperatuurschaling, Platt schaling en isotone regressie. Essentieel voor medische diagnose, risicobeoordeling en elke toepassing die betrouwbare onzekerheidsschattingen vereist."
        }
      },
      {
        question: {
          en: "What is data augmentation and what are advanced augmentation techniques?",
          es: "¿Qué es el aumento de datos y cuáles son técnicas avanzadas de aumento?",
          de: "Was ist Datenaugmentierung und was sind fortgeschrittene Augmentierungstechniken?",
          nl: "Wat is data augmentatie en wat zijn geavanceerde augmentatietechnieken?"
        },
        options: [
          { en: "Artificially expands training data through transformations; advanced: mixup, cutout, AutoAugment, adversarial examples", es: "Expande artificialmente datos de entrenamiento a través de transformaciones; avanzado: mixup, cutout, AutoAugment, ejemplos adversariales", de: "Erweitert künstlich Trainingsdaten durch Transformationen; fortgeschritten: Mixup, Cutout, AutoAugment, adversariale Beispiele", nl: "Breidt kunstmatig trainingsdata uit door transformaties; geavanceerd: mixup, cutout, AutoAugment, adversariale voorbeelden" },
          { en: "Increases dataset size by collecting more data", es: "Aumenta tamaño del conjunto de datos recolectando más datos", de: "Erhöht Datensatzgröße durch Sammeln mehr Daten", nl: "Vergroot datasetgrootte door meer data te verzamelen" },
          { en: "Augments model architecture with more layers", es: "Aumenta arquitectura del modelo con más capas", de: "Erweitert Modellarchitektur mit mehr Schichten", nl: "Vergroot modelarchitectuur met meer lagen" },
          { en: "Enhances data quality through cleaning", es: "Mejora calidad de datos a través de limpieza", de: "Verbessert Datenqualität durch Bereinigung", nl: "Verbetert datakwaliteit door opschoning" }
        ],
        correct: 0,
        explanation: {
          en: "Data augmentation creates new training examples from existing ones through transformations (rotation, flipping, color jittering). Advanced techniques: mixup blends images, cutout masks patches, AutoAugment learns optimal policies, CutMix combines strategies. Reduces overfitting and improves generalization, especially with limited data.",
          es: "Aumento de datos crea nuevos ejemplos de entrenamiento de existentes a través de transformaciones (rotación, volteo, variación de color). Técnicas avanzadas: mixup mezcla imágenes, cutout enmascara parches, AutoAugment aprende políticas óptimas, CutMix combina estrategias. Reduce sobreajuste y mejora generalización, especialmente con datos limitados.",
          de: "Datenaugmentierung erstellt neue Trainingsbeispiele aus bestehenden durch Transformationen (Rotation, Spiegelung, Farbveränderung). Fortgeschrittene Techniken: Mixup mischt Bilder, Cutout maskiert Patches, AutoAugment lernt optimale Richtlinien, CutMix kombiniert Strategien. Reduziert Overfitting und verbessert Generalisierung, besonders bei begrenzten Daten.",
          nl: "Data augmentatie creëert nieuwe trainingsvoorbeelden uit bestaande door transformaties (rotatie, spiegelen, kleurverandering). Geavanceerde technieken: mixup mengt afbeeldingen, cutout maskeert patches, AutoAugment leert optimale policies, CutMix combineert strategieën. Vermindert overfitting en verbetert generalisatie, vooral met beperkte data."
        }
      },
      {
        question: {
          en: "What is model ensembling and what are different ensemble strategies?",
          es: "¿Qué es el ensamblaje de modelos y cuáles son diferentes estrategias de ensamblaje?",
          de: "Was ist Modell-Ensembling und was sind verschiedene Ensemble-Strategien?",
          nl: "Wat is model ensembling en wat zijn verschillende ensemble strategieën?"
        },
        options: [
          { en: "Combines predictions from multiple models via averaging, voting, or stacking for improved performance", es: "Combina predicciones de múltiples modelos vía promedio, votación o apilamiento para rendimiento mejorado", de: "Kombiniert Vorhersagen mehrerer Modelle via Mittelung, Abstimmung oder Stacking für verbesserte Leistung", nl: "Combineert voorspellingen van meerdere modellen via middeling, stemmen of stacking voor verbeterde prestaties" },
          { en: "Assembles model components into single architecture", es: "Ensambla componentes del modelo en arquitectura única", de: "Assembliert Modellkomponenten in einzelne Architektur", nl: "Assembleert modelcomponenten in enkele architectuur" },
          { en: "Groups similar models together for organization", es: "Agrupa modelos similares juntos para organización", de: "Gruppiert ähnliche Modelle zusammen zur Organisation", nl: "Groepeert vergelijkbare modellen samen voor organisatie" },
          { en: "Ensembles datasets before training models", es: "Ensambla conjuntos de datos antes de entrenar modelos", de: "Assembliert Datensätze vor dem Trainieren von Modellen", nl: "Assembleert datasets voor het trainen van modellen" }
        ],
        correct: 0,
        explanation: {
          en: "Ensemble strategies: Averaging/voting (simple aggregation), bagging (bootstrap aggregating, e.g., Random Forest), boosting (sequential error correction, e.g., XGBoost), stacking (meta-model combines base models), blending (holdout-based stacking). Ensembles reduce variance and often win ML competitions by leveraging model diversity.",
          es: "Estrategias de ensamblaje: Promedio/votación (agregación simple), bagging (agregación bootstrap, ej. Random Forest), boosting (corrección de errores secuencial, ej. XGBoost), stacking (meta-modelo combina modelos base), blending (stacking basado en holdout). Ensamblajes reducen varianza y a menudo ganan competencias ML aprovechando diversidad de modelos.",
          de: "Ensemble-Strategien: Mittelung/Abstimmung (einfache Aggregation), Bagging (Bootstrap-Aggregation, z.B. Random Forest), Boosting (sequenzielle Fehlerkorrektur, z.B. XGBoost), Stacking (Meta-Modell kombiniert Basismodelle), Blending (Holdout-basiertes Stacking). Ensembles reduzieren Varianz und gewinnen oft ML-Wettbewerbe durch Nutzung von Modellvielfalt.",
          nl: "Ensemble strategieën: Middeling/stemmen (eenvoudige aggregatie), bagging (bootstrap aggregatie, bijv. Random Forest), boosting (sequentiële foutcorrectie, bijv. XGBoost), stacking (meta-model combineert basismodellen), blending (holdout-gebaseerd stacking). Ensembles verminderen variantie en winnen vaak ML competities door modeldiversiteit te benutten."
        }
      },
      {
        question: {
          en: "What is the exploration-exploitation tradeoff in reinforcement learning?",
          es: "¿Qué es el compromiso exploración-explotación en aprendizaje por refuerzo?",
          de: "Was ist der Exploration-Exploitation-Tradeoff in Reinforcement Learning?",
          nl: "Wat is de exploratie-exploitatie afweging in reinforcement learning?"
        },
        options: [
          { en: "Balancing trying new actions (exploration) vs choosing known best actions (exploitation) to maximize long-term reward", es: "Equilibrar probar nuevas acciones (exploración) vs elegir mejores acciones conocidas (explotación) para maximizar recompensa a largo plazo", de: "Ausbalancieren neuer Aktionen versuchen (Exploration) vs bekannte beste Aktionen wählen (Exploitation) um langfristige Belohnung zu maximieren", nl: "Balanceren van nieuwe acties proberen (exploratie) vs bekende beste acties kiezen (exploitatie) om lange-termijn beloning te maximaliseren" },
          { en: "Exploring the environment vs exploiting computational resources", es: "Explorar el entorno vs explotar recursos computacionales", de: "Umgebung erkunden vs Rechenressourcen ausnutzen", nl: "Omgeving verkennen vs computationele middelen exploiteren" },
          { en: "Trading off exploration time vs exploitation accuracy", es: "Compensar tiempo de exploración vs precisión de explotación", de: "Abwägen von Explorationszeit vs Exploitation-Genauigkeit", nl: "Afwegen van exploratietijd vs exploitatie nauwkeurigheid" },
          { en: "Balancing different types of reward signals", es: "Equilibrar diferentes tipos de señales de recompensa", de: "Ausbalancieren verschiedener Arten von Belohnungssignalen", nl: "Balanceren van verschillende soorten beloningssignalen" }
        ],
        correct: 0,
        explanation: {
          en: "RL agents must balance exploration (trying new actions to discover potentially better strategies) with exploitation (using current best knowledge to maximize immediate rewards). Too much exploration wastes time on suboptimal actions; too much exploitation risks missing better alternatives. Solutions include ε-greedy, Upper Confidence Bound, Thompson sampling.",
          es: "Agentes RL deben equilibrar exploración (probar nuevas acciones para descubrir estrategias potencialmente mejores) con explotación (usar mejor conocimiento actual para maximizar recompensas inmediatas). Demasiada exploración desperdicia tiempo en acciones subóptimas; demasiada explotación arriesga perder mejores alternativas. Soluciones incluyen ε-greedy, Upper Confidence Bound, muestreo Thompson.",
          de: "RL-Agenten müssen Exploration (neue Aktionen versuchen um potentiell bessere Strategien zu entdecken) mit Exploitation (aktuelles bestes Wissen verwenden um unmittelbare Belohnungen zu maximieren) ausbalancieren. Zu viel Exploration verschwendet Zeit auf suboptimale Aktionen; zu viel Exploitation riskiert bessere Alternativen zu verpassen. Lösungen umfassen ε-greedy, Upper Confidence Bound, Thompson Sampling.",
          nl: "RL agents moeten exploratie (nieuwe acties proberen om potentieel betere strategieën te ontdekken) balanceren met exploitatie (huidige beste kennis gebruiken om onmiddellijke beloningen te maximaliseren). Te veel exploratie verspilt tijd op suboptimale acties; te veel exploitatie riskeert betere alternatieven te missen. Oplossingen omvatten ε-greedy, Upper Confidence Bound, Thompson sampling."
        }
      }
    ]
  };

  // Export for use in the quiz application
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  } else if (typeof window !== 'undefined') {
    window.level9 = level9;
  }
})();
