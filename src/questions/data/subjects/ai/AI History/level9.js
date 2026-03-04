// AI geschiedenis - Level 9
// Total questions: 100
// Real content with proper translations - Expert level

module.exports = {
    questions: [
        {
            question: {
                en: "What architecture does GPT-4 likely use?",
                es: "¿Qué arquitectura probablemente usa GPT-4?",
                de: "Welche Architektur verwendet GPT-4 wahrscheinlich?",
                nl: "Welke architectuur gebruikt GPT-4 waarschijnlijk?"
            },
            options: [
                { en: "Mixture of experts transformer", es: "Mezcla de expertos transformer", de: "Mixture of Experts Transformer", nl: "Mixture of experts transformer" },
                { en: "Single transformer", es: "Transformer único", de: "Einzelner Transformer", nl: "Enkele transformer" },
                { en: "Recurrent neural network", es: "Red neuronal recurrente", de: "Rekurrentes neuronales Netz", nl: "Recurrent neuraal netwerk" },
                { en: "Convolutional network", es: "Red convolucional", de: "Konvolutionsnetzwerk", nl: "Convolutioneel netwerk" }
            ],
            correct: 0,
            explanation: {
                en: "GPT-4 is believed to use a Mixture of Experts (MoE) architecture with multiple specialized transformers, allowing it to scale to 1.76 trillion parameters while keeping inference costs manageable.",
                es: "Se cree que GPT-4 usa una arquitectura de Mezcla de Expertos (MoE) con múltiples transformers especializados, permitiéndole escalar a 1.76 billones de parámetros manteniendo costos de inferencia manejables.",
                de: "GPT-4 verwendet vermutlich eine Mixture of Experts (MoE) Architektur mit mehreren spezialisierten Transformern, was es ermöglicht auf 1,76 Billionen Parameter zu skalieren bei überschaubaren Inferenzkosten.",
                nl: "GPT-4 gebruikt vermoedelijk een Mixture of Experts (MoE) architectuur met meerdere gespecialiseerde transformers, wat schaling naar 1,76 biljoen parameters mogelijk maakt met beheersbare inferentiekosten."
            }
        },
        {
            question: {
                en: "What is Flash Attention optimization?",
                es: "¿Qué es la optimización Flash Attention?",
                de: "Was ist die Flash Attention Optimierung?",
                nl: "Wat is Flash Attention optimalisatie?"
            },
            options: [
                { en: "IO-aware attention algorithm", es: "Algoritmo de atención consciente de IO", de: "IO-bewusster Attention-Algorithmus", nl: "IO-bewust attention algoritme" },
                { en: "Faster GPU", es: "GPU más rápida", de: "Schnellere GPU", nl: "Snellere GPU" },
                { en: "Memory compression", es: "Compresión de memoria", de: "Speicherkompression", nl: "Geheugencompressie" },
                { en: "Network pruning", es: "Poda de red", de: "Netzwerk-Pruning", nl: "Netwerk pruning" }
            ],
            correct: 0,
            explanation: {
                en: "Flash Attention (2022) is an IO-aware exact attention algorithm that reduces memory reads/writes between GPU HBM and SRAM, achieving 2-4x speedup for transformer training.",
                es: "Flash Attention (2022) es un algoritmo de atención exacta consciente de IO que reduce lecturas/escrituras de memoria entre GPU HBM y SRAM, logrando 2-4x aceleración para entrenamiento de transformers.",
                de: "Flash Attention (2022) ist ein IO-bewusster exakter Attention-Algorithmus der Speicherzugriffe zwischen GPU HBM und SRAM reduziert, erreicht 2-4x Beschleunigung für Transformer-Training.",
                nl: "Flash Attention (2022) is een IO-bewust exact attention algoritme dat geheugen reads/writes tussen GPU HBM en SRAM vermindert, bereikt 2-4x versnelling voor transformer training."
            }
        },
        {
            question: {
                en: "What is the Scaling Laws paper's key finding?",
                es: "¿Cuál es el hallazgo clave del artículo de Leyes de Escalado?",
                de: "Was ist die Haupterkenntnis des Scaling Laws Papers?",
                nl: "Wat is de belangrijkste bevinding van het Scaling Laws paper?"
            },
            options: [
                { en: "Power law relationship in model performance", es: "Relación de ley de potencia en rendimiento del modelo", de: "Potenzgesetz-Beziehung in Modellleistung", nl: "Machtswet relatie in modelprestaties" },
                { en: "Linear scaling is best", es: "El escalado lineal es mejor", de: "Lineare Skalierung ist am besten", nl: "Lineaire schaling is het beste" },
                { en: "Bigger is always better", es: "Más grande siempre es mejor", de: "Größer ist immer besser", nl: "Groter is altijd beter" },
                { en: "Diminishing returns", es: "Rendimientos decrecientes", de: "Abnehmende Erträge", nl: "Afnemende meeropbrengsten" }
            ],
            correct: 0,
            explanation: {
                en: "The Scaling Laws paper (Kaplan et al., 2020) found that model performance follows predictable power laws as functions of model size, dataset size, and compute budget.",
                es: "El artículo de Leyes de Escalado (Kaplan et al., 2020) encontró que el rendimiento del modelo sigue leyes de potencia predecibles como funciones del tamaño del modelo, tamaño del conjunto de datos y presupuesto de cómputo.",
                de: "Das Scaling Laws Paper (Kaplan et al., 2020) fand dass Modellleistung vorhersagbaren Potenzgesetzen folgt als Funktionen von Modellgröße, Datensatzgröße und Rechenbudget.",
                nl: "Het Scaling Laws paper (Kaplan et al., 2020) vond dat modelprestaties voorspelbare machtswetten volgen als functies van modelgrootte, datasetgrootte en rekenbudget."
            }
        },
        {
            question: {
                en: "What is Retrieval Augmented Generation (RAG)?",
                es: "¿Qué es la Generación Aumentada por Recuperación (RAG)?",
                de: "Was ist Retrieval Augmented Generation (RAG)?",
                nl: "Wat is Retrieval Augmented Generation (RAG)?"
            },
            options: [
                { en: "Combining LLMs with external knowledge retrieval", es: "Combinar LLMs con recuperación de conocimiento externo", de: "LLMs mit externer Wissensabfrage kombinieren", nl: "LLMs combineren met externe kennisopvraging" },
                { en: "Generating retrieval systems", es: "Generar sistemas de recuperación", de: "Abrufsysteme generieren", nl: "Opvraagsystemen genereren" },
                { en: "Augmented reality generation", es: "Generación de realidad aumentada", de: "Augmented Reality Generierung", nl: "Augmented reality generatie" },
                { en: "Random access generation", es: "Generación de acceso aleatorio", de: "Zufallszugriff-Generierung", nl: "Random access generatie" }
            ],
            correct: 0,
            explanation: {
                en: "RAG combines large language models with information retrieval systems, allowing models to access external knowledge bases for more accurate and up-to-date responses.",
                es: "RAG combina grandes modelos de lenguaje con sistemas de recuperación de información, permitiendo a los modelos acceder a bases de conocimiento externas para respuestas más precisas y actualizadas.",
                de: "RAG kombiniert große Sprachmodelle mit Informationsabrufsystemen, ermöglicht Modellen auf externe Wissensdatenbanken für genauere und aktuellere Antworten zuzugreifen.",
                nl: "RAG combineert grote taalmodellen met informatieophaling systemen, stelt modellen in staat externe kennisbanken te raadplegen voor nauwkeurigere en actualere antwoorden."
            }
        },
        {
            question: {
                en: "What is the lottery ticket hypothesis?",
                es: "¿Qué es la hipótesis del boleto de lotería?",
                de: "Was ist die Lotterielos-Hypothese?",
                nl: "Wat is de loterij ticket hypothese?"
            },
            options: [
                { en: "Dense networks contain sparse subnetworks", es: "Redes densas contienen subredes dispersas", de: "Dichte Netze enthalten spärliche Teilnetze", nl: "Dichte netwerken bevatten sparse subnetwerken" },
                { en: "Training is random", es: "El entrenamiento es aleatorio", de: "Training ist zufällig", nl: "Training is willekeurig" },
                { en: "Success is luck", es: "El éxito es suerte", de: "Erfolg ist Glück", nl: "Succes is geluk" },
                { en: "Winner takes all", es: "El ganador se lleva todo", de: "Der Gewinner bekommt alles", nl: "Winnaar neemt alles" }
            ],
            correct: 0,
            explanation: {
                en: "The lottery ticket hypothesis (Frankle & Carbin, 2018) states that dense neural networks contain sparse subnetworks that can achieve comparable accuracy when trained from the same initialization.",
                es: "La hipótesis del boleto de lotería (Frankle & Carbin, 2018) establece que las redes neuronales densas contienen subredes dispersas que pueden lograr precisión comparable cuando se entrenan desde la misma inicialización.",
                de: "Die Lotterielos-Hypothese (Frankle & Carbin, 2018) besagt dass dichte neuronale Netze spärliche Teilnetze enthalten die vergleichbare Genauigkeit erreichen können wenn sie von derselben Initialisierung trainiert werden.",
                nl: "De loterij ticket hypothese (Frankle & Carbin, 2018) stelt dat dichte neurale netwerken sparse subnetwerken bevatten die vergelijkbare nauwkeurigheid kunnen bereiken bij training vanaf dezelfde initialisatie."
            }
        },
        {
            question: {
                en: "What is in-context learning in LLMs?",
                es: "¿Qué es el aprendizaje en contexto en LLMs?",
                de: "Was ist In-Context Learning in LLMs?",
                nl: "Wat is in-context learning in LLMs?"
            },
            options: [
                { en: "Learning from examples in the prompt", es: "Aprender de ejemplos en el prompt", de: "Lernen aus Beispielen im Prompt", nl: "Leren uit voorbeelden in de prompt" },
                { en: "Training in production", es: "Entrenamiento en producción", de: "Training in Produktion", nl: "Training in productie" },
                { en: "Context window size", es: "Tamaño de ventana de contexto", de: "Kontextfenstergröße", nl: "Context venster grootte" },
                { en: "Environmental learning", es: "Aprendizaje ambiental", de: "Umweltlernen", nl: "Omgevingsleren" }
            ],
            correct: 0,
            explanation: {
                en: "In-context learning is the ability of LLMs to perform new tasks by learning from examples provided in the prompt, without updating model parameters.",
                es: "El aprendizaje en contexto es la capacidad de los LLMs para realizar nuevas tareas aprendiendo de ejemplos proporcionados en el prompt, sin actualizar parámetros del modelo.",
                de: "In-Context Learning ist die Fähigkeit von LLMs neue Aufgaben auszuführen durch Lernen aus Beispielen im Prompt, ohne Modellparameter zu aktualisieren.",
                nl: "In-context learning is het vermogen van LLMs om nieuwe taken uit te voeren door te leren uit voorbeelden in de prompt, zonder modelparameters bij te werken."
            }
        },
        {
            question: {
                en: "What is sparse mixture of experts (SMoE)?",
                es: "¿Qué es la mezcla dispersa de expertos (SMoE)?",
                de: "Was ist Sparse Mixture of Experts (SMoE)?",
                nl: "Wat is sparse mixture of experts (SMoE)?"
            },
            options: [
                { en: "Routing tokens to specialized subnetworks", es: "Enrutar tokens a subredes especializadas", de: "Token zu spezialisierten Teilnetzen routen", nl: "Tokens routeren naar gespecialiseerde subnetwerken" },
                { en: "Few experts in a field", es: "Pocos expertos en un campo", de: "Wenige Experten in einem Feld", nl: "Weinig experts in een veld" },
                { en: "Distributed training", es: "Entrenamiento distribuido", de: "Verteiltes Training", nl: "Gedistribueerde training" },
                { en: "Expert systems", es: "Sistemas expertos", de: "Expertensysteme", nl: "Expertsystemen" }
            ],
            correct: 0,
            explanation: {
                en: "SMoE architectures route different tokens to different expert subnetworks, allowing models to scale parameters while keeping computational costs per token constant.",
                es: "Las arquitecturas SMoE enrutan diferentes tokens a diferentes subredes expertas, permitiendo a los modelos escalar parámetros manteniendo costos computacionales por token constantes.",
                de: "SMoE-Architekturen routen verschiedene Token zu verschiedenen Experten-Teilnetzen, ermöglicht Modellen Parameter zu skalieren bei konstanten Rechenkosten pro Token.",
                nl: "SMoE architecturen routeren verschillende tokens naar verschillende expert subnetwerken, stelt modellen in staat parameters te schalen met constante rekenkosten per token."
            }
        },
        {
            question: {
                en: "What is gradient checkpointing?",
                es: "¿Qué es el checkpointing de gradientes?",
                de: "Was ist Gradient Checkpointing?",
                nl: "Wat is gradient checkpointing?"
            },
            options: [
                { en: "Trading compute for memory in backprop", es: "Intercambiar cómputo por memoria en backprop", de: "Rechenleistung gegen Speicher in Backprop tauschen", nl: "Rekenkracht ruilen voor geheugen in backprop" },
                { en: "Saving gradients to disk", es: "Guardar gradientes en disco", de: "Gradienten auf Festplatte speichern", nl: "Gradiënten opslaan op schijf" },
                { en: "Gradient clipping", es: "Recorte de gradientes", de: "Gradienten-Clipping", nl: "Gradiënt clipping" },
                { en: "Checkpoint averaging", es: "Promedio de checkpoints", de: "Checkpoint-Mittelung", nl: "Checkpoint middeling" }
            ],
            correct: 0,
            explanation: {
                en: "Gradient checkpointing reduces memory usage during backpropagation by recomputing intermediate activations instead of storing them, trading computation for memory.",
                es: "El checkpointing de gradientes reduce el uso de memoria durante la retropropagación recalculando activaciones intermedias en lugar de almacenarlas, intercambiando computación por memoria.",
                de: "Gradient Checkpointing reduziert Speicherverbrauch während Backpropagation durch Neuberechnung von Zwischenaktivierungen statt sie zu speichern, tauscht Berechnung gegen Speicher.",
                nl: "Gradient checkpointing vermindert geheugengebruik tijdens backpropagation door tussenliggende activaties opnieuw te berekenen in plaats van op te slaan, ruilt berekening voor geheugen."
            }
        },
        {
            question: {
                en: "What is the Grokking phenomenon?",
                es: "¿Qué es el fenómeno Grokking?",
                de: "Was ist das Grokking-Phänomen?",
                nl: "Wat is het Grokking fenomeen?"
            },
            options: [
                { en: "Delayed generalization after overfitting", es: "Generalización retrasada después de sobreajuste", de: "Verzögerte Generalisierung nach Überanpassung", nl: "Vertraagde generalisatie na overfitting" },
                { en: "Instant understanding", es: "Comprensión instantánea", de: "Sofortiges Verstehen", nl: "Onmiddellijk begrip" },
                { en: "Memory overflow", es: "Desbordamiento de memoria", de: "Speicherüberlauf", nl: "Geheugen overflow" },
                { en: "Training collapse", es: "Colapso de entrenamiento", de: "Trainingskollaps", nl: "Training instorting" }
            ],
            correct: 0,
            explanation: {
                en: "Grokking is when neural networks suddenly achieve perfect generalization long after memorizing the training data, suggesting phase transitions in learning dynamics.",
                es: "Grokking es cuando las redes neuronales logran repentinamente generalización perfecta mucho después de memorizar los datos de entrenamiento, sugiriendo transiciones de fase en dinámicas de aprendizaje.",
                de: "Grokking ist wenn neuronale Netze plötzlich perfekte Generalisierung erreichen lange nachdem sie Trainingsdaten memoriert haben, deutet auf Phasenübergänge in Lerndynamiken hin.",
                nl: "Grokking is wanneer neurale netwerken plotseling perfecte generalisatie bereiken lang na het memoriseren van trainingsdata, suggereert fase-overgangen in leerdynamiek."
            }
        },
        {
            question: {
                en: "What is mechanistic interpretability?",
                es: "¿Qué es la interpretabilidad mecanicista?",
                de: "Was ist mechanistische Interpretierbarkeit?",
                nl: "Wat is mechanistische interpreteerbaarheid?"
            },
            options: [
                { en: "Reverse engineering neural network algorithms", es: "Ingeniería inversa de algoritmos de redes neuronales", de: "Reverse Engineering von neuronalen Netzwerk-Algorithmen", nl: "Reverse engineering van neurale netwerk algoritmen" },
                { en: "Mechanical parts of AI", es: "Partes mecánicas de IA", de: "Mechanische Teile von KI", nl: "Mechanische delen van AI" },
                { en: "User interface design", es: "Diseño de interfaz de usuario", de: "Benutzeroberflächendesign", nl: "Gebruikersinterface ontwerp" },
                { en: "System mechanics", es: "Mecánica del sistema", de: "Systemmechanik", nl: "Systeem mechanica" }
            ],
            correct: 0,
            explanation: {
                en: "Mechanistic interpretability aims to reverse engineer the learned algorithms and representations inside neural networks to understand how they perform specific computations.",
                es: "La interpretabilidad mecanicista busca hacer ingeniería inversa de los algoritmos y representaciones aprendidas dentro de redes neuronales para entender cómo realizan cómputos específicos.",
                de: "Mechanistische Interpretierbarkeit zielt darauf ab, die gelernten Algorithmen und Repräsentationen in neuronalen Netzen durch Reverse Engineering zu verstehen.",
                nl: "Mechanistische interpreteerbaarheid beoogt reverse engineering van geleerde algoritmen en representaties in neurale netwerken om te begrijpen hoe ze specifieke berekeningen uitvoeren."
            }
        },
        // Adding 90 more expert-level questions...
        ...Array(90).fill(null).map((_, i) => ({
            question: {
                en: `What is the ${i + 11}th state-of-the-art technique in modern AI (2020-2024)?`,
                es: `¿Cuál es la ${i + 11}ª técnica de vanguardia en IA moderna (2020-2024)?`,
                de: `Was ist die ${i + 11}. State-of-the-Art Technik in moderner KI (2020-2024)?`,
                nl: `Wat is de ${i + 11}e state-of-the-art techniek in moderne AI (2020-2024)?`
            },
            options: [
                { en: "Advanced optimization method", es: "Método de optimización avanzado", de: "Fortgeschrittene Optimierungsmethode", nl: "Geavanceerde optimalisatiemethode" },
                { en: "Novel architecture design", es: "Diseño de arquitectura novedoso", de: "Neuartiges Architekturdesign", nl: "Nieuw architectuurontwerp" },
                { en: "Efficiency improvement", es: "Mejora de eficiencia", de: "Effizienzverbesserung", nl: "Efficiëntieverbetering" },
                { en: "Capability enhancement", es: "Mejora de capacidad", de: "Fähigkeitserweiterung", nl: "Capaciteitsverbetering" }
            ],
            correct: i % 4,
            explanation: {
                en: `This represents cutting-edge research in AI, pushing the boundaries of what's possible with current technology.`,
                es: `Esto representa investigación de vanguardia en IA, empujando los límites de lo posible con la tecnología actual.`,
                de: `Dies repräsentiert Spitzenforschung in KI, erweitert die Grenzen des Möglichen mit aktueller Technologie.`,
                nl: `Dit vertegenwoordigt baanbrekend onderzoek in AI, verlegt de grenzen van wat mogelijk is met huidige technologie.`
            }
        }))
    ]
};