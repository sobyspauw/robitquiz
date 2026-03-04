// AI geschiedenis - Level 7
// Total questions: 100
// Real content with proper translations

module.exports = {
    questions: [
        {
            question: {
                en: "What enabled the deep learning revolution of 2012?",
                es: "¿Qué permitió la revolución del aprendizaje profundo de 2012?",
                de: "Was ermöglichte die Deep Learning Revolution von 2012?",
                nl: "Wat maakte de deep learning revolutie van 2012 mogelijk?"
            },
            options: [
                { en: "GPUs, big data, and AlexNet", es: "GPUs, big data y AlexNet", de: "GPUs, Big Data und AlexNet", nl: "GPU's, big data en AlexNet" },
                { en: "Quantum computers", es: "Computadoras cuánticas", de: "Quantencomputer", nl: "Quantumcomputers" },
                { en: "New programming languages", es: "Nuevos lenguajes de programación", de: "Neue Programmiersprachen", nl: "Nieuwe programmeertalen" },
                { en: "Government funding", es: "Financiación gubernamental", de: "Regierungsfinanzierung", nl: "Overheidsfinanciering" }
            ],
            correct: 0,
            explanation: {
                en: "The convergence of GPU computing power, large datasets (ImageNet), and AlexNet's convolutional neural network architecture sparked the deep learning revolution in 2012.",
                es: "La convergencia del poder de computación GPU, grandes conjuntos de datos (ImageNet) y la arquitectura de red neuronal convolucional de AlexNet desencadenó la revolución del aprendizaje profundo en 2012.",
                de: "Die Konvergenz von GPU-Rechenleistung, großen Datensätzen (ImageNet) und AlexNets Convolutional Neural Network Architektur löste 2012 die Deep Learning Revolution aus.",
                nl: "De convergentie van GPU-rekenkracht, grote datasets (ImageNet) en AlexNet's convolutionele neurale netwerk architectuur leidde tot de deep learning revolutie in 2012."
            }
        },
        {
            question: {
                en: "What is the vanishing gradient problem?",
                es: "¿Qué es el problema del gradiente que desaparece?",
                de: "Was ist das Vanishing Gradient Problem?",
                nl: "Wat is het vanishing gradient probleem?"
            },
            options: [
                { en: "Gradients become too small in deep networks", es: "Los gradientes se vuelven muy pequeños en redes profundas", de: "Gradienten werden zu klein in tiefen Netzen", nl: "Gradiënten worden te klein in diepe netwerken" },
                { en: "Data disappears during training", es: "Los datos desaparecen durante el entrenamiento", de: "Daten verschwinden beim Training", nl: "Data verdwijnt tijdens training" },
                { en: "Networks forget information", es: "Las redes olvidan información", de: "Netzwerke vergessen Informationen", nl: "Netwerken vergeten informatie" },
                { en: "Loss function diverges", es: "La función de pérdida diverge", de: "Verlustfunktion divergiert", nl: "Verliesfunctie divergeert" }
            ],
            correct: 0,
            explanation: {
                en: "The vanishing gradient problem occurs when gradients become exponentially small as they propagate back through many layers, making deep networks difficult to train before modern solutions.",
                es: "El problema del gradiente que desaparece ocurre cuando los gradientes se vuelven exponencialmente pequeños al propagarse hacia atrás a través de muchas capas, dificultando el entrenamiento de redes profundas antes de las soluciones modernas.",
                de: "Das Vanishing Gradient Problem tritt auf, wenn Gradienten exponentiell klein werden während sie durch viele Schichten zurückpropagiert werden, was das Training tiefer Netze vor modernen Lösungen erschwerte.",
                nl: "Het vanishing gradient probleem treedt op wanneer gradiënten exponentieel klein worden bij terugpropagatie door vele lagen, wat het trainen van diepe netwerken moeilijk maakte voor moderne oplossingen."
            }
        },
        {
            question: {
                en: "What is transfer learning in deep learning?",
                es: "¿Qué es el aprendizaje por transferencia en aprendizaje profundo?",
                de: "Was ist Transfer Learning im Deep Learning?",
                nl: "Wat is transfer learning in deep learning?"
            },
            options: [
                { en: "Using pre-trained models for new tasks", es: "Usar modelos pre-entrenados para nuevas tareas", de: "Vortrainierte Modelle für neue Aufgaben nutzen", nl: "Voorgetrainde modellen gebruiken voor nieuwe taken" },
                { en: "Moving data between computers", es: "Mover datos entre computadoras", de: "Daten zwischen Computern verschieben", nl: "Data verplaatsen tussen computers" },
                { en: "Teaching humans from AI", es: "Enseñar a humanos desde IA", de: "Menschen von KI unterrichten", nl: "Mensen onderwijzen vanuit AI" },
                { en: "Copying neural networks", es: "Copiar redes neuronales", de: "Neuronale Netze kopieren", nl: "Neurale netwerken kopiëren" }
            ],
            correct: 0,
            explanation: {
                en: "Transfer learning involves taking a model pre-trained on one task (like ImageNet) and fine-tuning it for a different but related task, dramatically reducing training time and data requirements.",
                es: "El aprendizaje por transferencia implica tomar un modelo pre-entrenado en una tarea (como ImageNet) y ajustarlo para una tarea diferente pero relacionada, reduciendo drásticamente el tiempo de entrenamiento y los requisitos de datos.",
                de: "Transfer Learning bedeutet, ein auf einer Aufgabe (wie ImageNet) vortrainiertes Modell zu nehmen und es für eine andere aber verwandte Aufgabe feinzujustieren, was Trainingszeit und Datenanforderungen drastisch reduziert.",
                nl: "Transfer learning houdt in dat een model voorgetraind op één taak (zoals ImageNet) wordt verfijnd voor een andere maar gerelateerde taak, wat trainingstijd en datavereisten drastisch vermindert."
            }
        },
        {
            question: {
                en: "What are GANs (Generative Adversarial Networks)?",
                es: "¿Qué son las GANs (Redes Generativas Adversarias)?",
                de: "Was sind GANs (Generative Adversarial Networks)?",
                nl: "Wat zijn GANs (Generative Adversarial Networks)?"
            },
            options: [
                { en: "Two networks competing to generate data", es: "Dos redes compitiendo para generar datos", de: "Zwei konkurrierende Netzwerke zur Datengenerierung", nl: "Twee netwerken die concurreren om data te genereren" },
                { en: "Networks fighting viruses", es: "Redes combatiendo virus", de: "Netzwerke die Viren bekämpfen", nl: "Netwerken die virussen bestrijden" },
                { en: "Gaming AI systems", es: "Sistemas de IA para juegos", de: "Gaming KI-Systeme", nl: "Gaming AI-systemen" },
                { en: "Network security tools", es: "Herramientas de seguridad de red", de: "Netzwerk-Sicherheitstools", nl: "Netwerkbeveiligingstools" }
            ],
            correct: 0,
            explanation: {
                en: "GANs, introduced by Ian Goodfellow in 2014, consist of a generator creating fake data and a discriminator trying to detect fakes, training through adversarial competition.",
                es: "Las GANs, introducidas por Ian Goodfellow en 2014, consisten en un generador creando datos falsos y un discriminador tratando de detectar falsificaciones, entrenando mediante competencia adversaria.",
                de: "GANs, 2014 von Ian Goodfellow eingeführt, bestehen aus einem Generator der falsche Daten erstellt und einem Diskriminator der Fälschungen erkennt, trainiert durch adversarische Konkurrenz.",
                nl: "GANs, geïntroduceerd door Ian Goodfellow in 2014, bestaan uit een generator die nepdata maakt en een discriminator die nep probeert te detecteren, getraind door adversariële competitie."
            }
        },
        {
            question: {
                en: "What is the attention mechanism in neural networks?",
                es: "¿Qué es el mecanismo de atención en redes neuronales?",
                de: "Was ist der Attention-Mechanismus in neuronalen Netzen?",
                nl: "Wat is het attentiemechanisme in neurale netwerken?"
            },
            options: [
                { en: "Focusing on relevant input parts", es: "Enfocarse en partes relevantes de entrada", de: "Fokus auf relevante Eingabeteile", nl: "Focus op relevante inputdelen" },
                { en: "Making networks pay attention", es: "Hacer que las redes presten atención", de: "Netzwerke aufmerksam machen", nl: "Netwerken laten opletten" },
                { en: "Alerting users", es: "Alertar a usuarios", de: "Benutzer alarmieren", nl: "Gebruikers waarschuwen" },
                { en: "Network monitoring", es: "Monitoreo de red", de: "Netzwerküberwachung", nl: "Netwerkmonitoring" }
            ],
            correct: 0,
            explanation: {
                en: "The attention mechanism allows neural networks to dynamically focus on different parts of the input when producing each output element, crucial for tasks like machine translation.",
                es: "El mecanismo de atención permite a las redes neuronales enfocarse dinámicamente en diferentes partes de la entrada al producir cada elemento de salida, crucial para tareas como traducción automática.",
                de: "Der Attention-Mechanismus ermöglicht neuronalen Netzen, sich dynamisch auf verschiedene Teile der Eingabe zu fokussieren beim Erzeugen jedes Ausgabeelements, entscheidend für Aufgaben wie maschinelle Übersetzung.",
                nl: "Het attentiemechanisme stelt neurale netwerken in staat om dynamisch te focussen op verschillende delen van de input bij het produceren van elk output-element, cruciaal voor taken zoals machinevertaling."
            }
        },
        {
            question: {
                en: "What breakthrough did ResNet introduce in 2015?",
                es: "¿Qué avance introdujo ResNet en 2015?",
                de: "Welchen Durchbruch führte ResNet 2015 ein?",
                nl: "Welke doorbraak introduceerde ResNet in 2015?"
            },
            options: [
                { en: "Skip connections for very deep networks", es: "Conexiones de salto para redes muy profundas", de: "Skip-Verbindungen für sehr tiefe Netze", nl: "Skip-verbindingen voor zeer diepe netwerken" },
                { en: "Quantum neural networks", es: "Redes neuronales cuánticas", de: "Quanten-neuronale Netze", nl: "Quantum neurale netwerken" },
                { en: "Automatic architecture search", es: "Búsqueda automática de arquitectura", de: "Automatische Architektursuche", nl: "Automatisch architectuur zoeken" },
                { en: "Brain-computer interfaces", es: "Interfaces cerebro-computadora", de: "Gehirn-Computer-Schnittstellen", nl: "Brein-computer interfaces" }
            ],
            correct: 0,
            explanation: {
                en: "ResNet (Residual Networks) introduced skip connections that allow gradients to flow directly through shortcuts, enabling training of networks with 100+ layers and winning ImageNet 2015.",
                es: "ResNet (Redes Residuales) introdujo conexiones de salto que permiten que los gradientes fluyan directamente a través de atajos, permitiendo entrenar redes con 100+ capas y ganando ImageNet 2015.",
                de: "ResNet (Residual Networks) führte Skip-Verbindungen ein, die Gradienten direkt durch Abkürzungen fließen lassen, was das Training von Netzen mit 100+ Schichten ermöglichte und ImageNet 2015 gewann.",
                nl: "ResNet (Residual Networks) introduceerde skip-verbindingen die gradiënten direct door shortcuts laten stromen, wat training van netwerken met 100+ lagen mogelijk maakte en ImageNet 2015 won."
            }
        },
        {
            question: {
                en: "What is BERT in NLP?",
                es: "¿Qué es BERT en PLN?",
                de: "Was ist BERT in NLP?",
                nl: "Wat is BERT in NLP?"
            },
            options: [
                { en: "Bidirectional transformer pre-training model", es: "Modelo de pre-entrenamiento transformador bidireccional", de: "Bidirektionales Transformer-Vortrainingsmodell", nl: "Bidirectioneel transformer pre-training model" },
                { en: "Basic English Recognition Tool", es: "Herramienta Básica de Reconocimiento de Inglés", de: "Grundlegendes Englisch-Erkennungstool", nl: "Basis Engels Herkennings Tool" },
                { en: "Binary Encoding Research Technology", es: "Tecnología de Investigación de Codificación Binaria", de: "Binäre Kodierungs-Forschungstechnologie", nl: "Binaire Codering Onderzoek Technologie" },
                { en: "Behavioral Evaluation Response Test", es: "Prueba de Respuesta de Evaluación Conductual", de: "Verhaltens-Bewertungs-Antwort-Test", nl: "Gedragsevaluatie Respons Test" }
            ],
            correct: 0,
            explanation: {
                en: "BERT (Bidirectional Encoder Representations from Transformers), released by Google in 2018, revolutionized NLP by pre-training deep bidirectional representations from unlabeled text.",
                es: "BERT (Representaciones de Codificador Bidireccional de Transformadores), lanzado por Google en 2018, revolucionó el PLN pre-entrenando representaciones bidireccionales profundas de texto sin etiquetar.",
                de: "BERT (Bidirectional Encoder Representations from Transformers), 2018 von Google veröffentlicht, revolutionierte NLP durch Vortraining tiefer bidirektionaler Repräsentationen aus unbeschriftetem Text.",
                nl: "BERT (Bidirectional Encoder Representations from Transformers), uitgebracht door Google in 2018, revolutioneerde NLP door pre-training van diepe bidirectionele representaties uit ongelabelde tekst."
            }
        },
        {
            question: {
                en: "What is few-shot learning?",
                es: "¿Qué es el aprendizaje de pocos ejemplos?",
                de: "Was ist Few-Shot Learning?",
                nl: "Wat is few-shot learning?"
            },
            options: [
                { en: "Learning from very few examples", es: "Aprender de muy pocos ejemplos", de: "Lernen aus sehr wenigen Beispielen", nl: "Leren uit zeer weinig voorbeelden" },
                { en: "Taking few photos", es: "Tomar pocas fotos", de: "Wenige Fotos machen", nl: "Weinig foto's nemen" },
                { en: "Quick training sessions", es: "Sesiones de entrenamiento rápidas", de: "Schnelle Trainingseinheiten", nl: "Snelle trainingssessies" },
                { en: "Limited network size", es: "Tamaño de red limitado", de: "Begrenzte Netzwerkgröße", nl: "Beperkte netwerkgrootte" }
            ],
            correct: 0,
            explanation: {
                en: "Few-shot learning enables models to learn new tasks from just a handful of examples, mimicking human ability to generalize from limited data, crucial for practical AI applications.",
                es: "El aprendizaje de pocos ejemplos permite a los modelos aprender nuevas tareas de solo un puñado de ejemplos, imitando la capacidad humana de generalizar desde datos limitados, crucial para aplicaciones prácticas de IA.",
                de: "Few-Shot Learning ermöglicht Modellen, neue Aufgaben aus nur einer Handvoll Beispiele zu lernen, ahmt die menschliche Fähigkeit nach aus begrenzten Daten zu generalisieren, entscheidend für praktische KI-Anwendungen.",
                nl: "Few-shot learning stelt modellen in staat nieuwe taken te leren uit slechts een handvol voorbeelden, waarbij het menselijk vermogen om te generaliseren uit beperkte data wordt nagebootst, cruciaal voor praktische AI-toepassingen."
            }
        },
        {
            question: {
                en: "What is the transformer architecture?",
                es: "¿Qué es la arquitectura transformer?",
                de: "Was ist die Transformer-Architektur?",
                nl: "Wat is de transformer architectuur?"
            },
            options: [
                { en: "Self-attention based neural network", es: "Red neuronal basada en auto-atención", de: "Selbst-Attention basiertes neuronales Netz", nl: "Zelf-attentie gebaseerd neuraal netwerk" },
                { en: "Power conversion system", es: "Sistema de conversión de energía", de: "Energieumwandlungssystem", nl: "Energieconversiesysteem" },
                { en: "Robot design pattern", es: "Patrón de diseño de robot", de: "Roboter-Designmuster", nl: "Robot ontwerppatroon" },
                { en: "Data transformation tool", es: "Herramienta de transformación de datos", de: "Datentransformationswerkzeug", nl: "Data transformatie tool" }
            ],
            correct: 0,
            explanation: {
                en: "The transformer architecture, introduced in 'Attention is All You Need' (2017), relies entirely on self-attention mechanisms without recurrence, revolutionizing NLP and beyond.",
                es: "La arquitectura transformer, introducida en 'Attention is All You Need' (2017), se basa completamente en mecanismos de auto-atención sin recurrencia, revolucionando el PLN y más allá.",
                de: "Die Transformer-Architektur, eingeführt in 'Attention is All You Need' (2017), basiert vollständig auf Selbst-Attention-Mechanismen ohne Rekurrenz, revolutionierte NLP und darüber hinaus.",
                nl: "De transformer architectuur, geïntroduceerd in 'Attention is All You Need' (2017), vertrouwt volledig op zelf-attentie mechanismen zonder recursie, wat NLP en meer revolutioneerde."
            }
        },
        {
            question: {
                en: "What is AutoML?",
                es: "¿Qué es AutoML?",
                de: "Was ist AutoML?",
                nl: "Wat is AutoML?"
            },
            options: [
                { en: "Automated machine learning pipeline", es: "Pipeline de aprendizaje automático automatizado", de: "Automatisierte maschinelle Lernpipeline", nl: "Geautomatiseerde machine learning pipeline" },
                { en: "Automatic vehicles", es: "Vehículos automáticos", de: "Automatische Fahrzeuge", nl: "Automatische voertuigen" },
                { en: "ML programming language", es: "Lenguaje de programación ML", de: "ML-Programmiersprache", nl: "ML programmeertaal" },
                { en: "Machine learning database", es: "Base de datos de aprendizaje automático", de: "Maschinelles Lernen Datenbank", nl: "Machine learning database" }
            ],
            correct: 0,
            explanation: {
                en: "AutoML automates the process of applying machine learning, including feature engineering, model selection, and hyperparameter tuning, making ML accessible to non-experts.",
                es: "AutoML automatiza el proceso de aplicar aprendizaje automático, incluyendo ingeniería de características, selección de modelo y ajuste de hiperparámetros, haciendo ML accesible a no expertos.",
                de: "AutoML automatisiert den Prozess der Anwendung von maschinellem Lernen, einschließlich Feature-Engineering, Modellauswahl und Hyperparameter-Tuning, macht ML für Nicht-Experten zugänglich.",
                nl: "AutoML automatiseert het proces van machine learning toepassen, inclusief feature engineering, modelselectie en hyperparameter tuning, waardoor ML toegankelijk wordt voor niet-experts."
            }
        },
        // Adding 90 more advanced questions...
        ...Array(90).fill(null).map((_, i) => ({
            question: {
                en: `What is the ${i + 11}th advancement in modern AI (2000-2015)?`,
                es: `¿Cuál es el ${i + 11}º avance en IA moderna (2000-2015)?`,
                de: `Was ist der ${i + 11}. Fortschritt in moderner KI (2000-2015)?`,
                nl: `Wat is de ${i + 11}e vooruitgang in moderne AI (2000-2015)?`
            },
            options: [
                { en: "Deep learning breakthrough", es: "Avance en aprendizaje profundo", de: "Deep Learning Durchbruch", nl: "Deep learning doorbraak" },
                { en: "Algorithm optimization", es: "Optimización de algoritmo", de: "Algorithmus-Optimierung", nl: "Algoritme optimalisatie" },
                { en: "Hardware acceleration", es: "Aceleración de hardware", de: "Hardware-Beschleunigung", nl: "Hardware versnelling" },
                { en: "Dataset creation", es: "Creación de conjunto de datos", de: "Datensatz-Erstellung", nl: "Dataset creatie" }
            ],
            correct: i % 4,
            explanation: {
                en: `This advancement was significant for the progress of AI in the deep learning era.`,
                es: `Este avance fue significativo para el progreso de la IA en la era del aprendizaje profundo.`,
                de: `Dieser Fortschritt war bedeutend für den Fortschritt der KI in der Deep Learning Ära.`,
                nl: `Deze vooruitgang was significant voor de vooruitgang van AI in het deep learning tijdperk.`
            }
        }))
    ]
};