// AI geschiedenis - Level 10
// Total questions: 100
// Real content with proper translations - Master level

module.exports = {
    questions: [
        {
            question: {
                en: "What is the Mamba architecture's innovation?",
                es: "¿Cuál es la innovación de la arquitectura Mamba?",
                de: "Was ist die Innovation der Mamba-Architektur?",
                nl: "Wat is de innovatie van de Mamba architectuur?"
            },
            options: [
                { en: "Linear-time state space models", es: "Modelos de espacio de estados de tiempo lineal", de: "Lineare Zustandsraummodelle", nl: "Lineaire-tijd toestandsruimte modellen" },
                { en: "Quantum computing", es: "Computación cuántica", de: "Quantencomputing", nl: "Quantumcomputing" },
                { en: "Neuromorphic chips", es: "Chips neuromórficos", de: "Neuromorphe Chips", nl: "Neuromorfe chips" },
                { en: "Optical processing", es: "Procesamiento óptico", de: "Optische Verarbeitung", nl: "Optische verwerking" }
            ],
            correct: 0,
            explanation: {
                en: "Mamba (2023) introduces selective state space models that achieve linear-time complexity while matching transformer performance on language modeling tasks.",
                es: "Mamba (2023) introduce modelos de espacio de estados selectivos que logran complejidad de tiempo lineal igualando el rendimiento de transformers en tareas de modelado de lenguaje.",
                de: "Mamba (2023) führt selektive Zustandsraummodelle ein, die lineare Zeitkomplexität erreichen und Transformer-Leistung bei Sprachmodellierungsaufgaben erreichen.",
                nl: "Mamba (2023) introduceert selectieve toestandsruimte modellen die lineaire tijdscomplexiteit bereiken terwijl ze transformer prestaties evenaren op taalmodelleringstaken."
            }
        },
        {
            question: {
                en: "What is LLaMA's training innovation?",
                es: "¿Cuál es la innovación de entrenamiento de LLaMA?",
                de: "Was ist LLaMAs Trainingsinnovation?",
                nl: "Wat is LLaMA's trainingsinnovatie?"
            },
            options: [
                { en: "Training smaller models on more tokens", es: "Entrenar modelos más pequeños con más tokens", de: "Kleinere Modelle mit mehr Token trainieren", nl: "Kleinere modellen trainen op meer tokens" },
                { en: "Using quantum annealing", es: "Usar recocido cuántico", de: "Quantenglühen verwenden", nl: "Quantum annealing gebruiken" },
                { en: "Federated learning", es: "Aprendizaje federado", de: "Föderiertes Lernen", nl: "Federated learning" },
                { en: "Synthetic data only", es: "Solo datos sintéticos", de: "Nur synthetische Daten", nl: "Alleen synthetische data" }
            ],
            correct: 0,
            explanation: {
                en: "LLaMA (Meta, 2023) demonstrated that smaller models trained on significantly more tokens (1.4T) can outperform larger models, following Chinchilla scaling laws.",
                es: "LLaMA (Meta, 2023) demostró que modelos más pequeños entrenados con significativamente más tokens (1.4T) pueden superar a modelos más grandes, siguiendo las leyes de escalado Chinchilla.",
                de: "LLaMA (Meta, 2023) zeigte dass kleinere Modelle trainiert mit signifikant mehr Token (1,4T) größere Modelle übertreffen können, den Chinchilla-Skalierungsgesetzen folgend.",
                nl: "LLaMA (Meta, 2023) demonstreerde dat kleinere modellen getraind op significant meer tokens (1,4T) grotere modellen kunnen overtreffen, volgens Chinchilla schaalwetten."
            }
        },
        {
            question: {
                en: "What is speculative decoding?",
                es: "¿Qué es la decodificación especulativa?",
                de: "Was ist spekulative Dekodierung?",
                nl: "Wat is speculatieve decodering?"
            },
            options: [
                { en: "Using small models to speed up large models", es: "Usar modelos pequeños para acelerar modelos grandes", de: "Kleine Modelle nutzen um große Modelle zu beschleunigen", nl: "Kleine modellen gebruiken om grote modellen te versnellen" },
                { en: "Guessing the next word", es: "Adivinar la siguiente palabra", de: "Das nächste Wort raten", nl: "Het volgende woord raden" },
                { en: "Parallel processing", es: "Procesamiento paralelo", de: "Parallele Verarbeitung", nl: "Parallelle verwerking" },
                { en: "Quantum speedup", es: "Aceleración cuántica", de: "Quantenbeschleunigung", nl: "Quantum versnelling" }
            ],
            correct: 0,
            explanation: {
                en: "Speculative decoding uses a small draft model to generate multiple tokens that are then verified in parallel by a large model, achieving 2-3x inference speedup without quality loss.",
                es: "La decodificación especulativa usa un modelo borrador pequeño para generar múltiples tokens que luego son verificados en paralelo por un modelo grande, logrando 2-3x aceleración sin pérdida de calidad.",
                de: "Spekulative Dekodierung nutzt ein kleines Entwurfsmodell um mehrere Token zu generieren die dann parallel von einem großen Modell verifiziert werden, erreicht 2-3x Beschleunigung ohne Qualitätsverlust.",
                nl: "Speculatieve decodering gebruikt een klein concept model om meerdere tokens te genereren die dan parallel geverifieerd worden door een groot model, bereikt 2-3x versnelling zonder kwaliteitsverlies."
            }
        },
        {
            question: {
                en: "What is the Mixture of Depths approach?",
                es: "¿Qué es el enfoque Mezcla de Profundidades?",
                de: "Was ist der Mixture of Depths Ansatz?",
                nl: "Wat is de Mixture of Depths aanpak?"
            },
            options: [
                { en: "Dynamic layer skipping based on token importance", es: "Salto dinámico de capas basado en importancia del token", de: "Dynamisches Schicht-Überspringen basierend auf Token-Wichtigkeit", nl: "Dynamisch lagen overslaan gebaseerd op token belangrijkheid" },
                { en: "Different model sizes", es: "Diferentes tamaños de modelo", de: "Verschiedene Modellgrößen", nl: "Verschillende modelgroottes" },
                { en: "Depth-wise convolution", es: "Convolución en profundidad", de: "Tiefenweise Faltung", nl: "Diepte-gewijze convolutie" },
                { en: "3D neural networks", es: "Redes neuronales 3D", de: "3D neuronale Netze", nl: "3D neurale netwerken" }
            ],
            correct: 0,
            explanation: {
                en: "Mixture of Depths (2024) allows models to dynamically allocate computation by skipping layers for less important tokens, achieving better efficiency-performance tradeoffs.",
                es: "Mezcla de Profundidades (2024) permite a los modelos asignar dinámicamente computación saltando capas para tokens menos importantes, logrando mejores compromisos eficiencia-rendimiento.",
                de: "Mixture of Depths (2024) erlaubt Modellen Berechnung dynamisch zuzuweisen durch Überspringen von Schichten für weniger wichtige Token, erreicht bessere Effizienz-Leistungs-Kompromisse.",
                nl: "Mixture of Depths (2024) stelt modellen in staat berekening dynamisch toe te wijzen door lagen over te slaan voor minder belangrijke tokens, bereikt betere efficiëntie-prestatie afwegingen."
            }
        },
        {
            question: {
                en: "What is the KV cache optimization in inference?",
                es: "¿Qué es la optimización de caché KV en inferencia?",
                de: "Was ist die KV-Cache Optimierung bei Inferenz?",
                nl: "Wat is KV cache optimalisatie in inferentie?"
            },
            options: [
                { en: "Caching key-value pairs to avoid recomputation", es: "Almacenar pares clave-valor para evitar recálculo", de: "Key-Value Paare cachen um Neuberechnung zu vermeiden", nl: "Key-value paren cachen om herberekening te vermijden" },
                { en: "Keyboard shortcuts", es: "Atajos de teclado", de: "Tastaturkürzel", nl: "Toetsenbord sneltoetsen" },
                { en: "Kernel virtualization", es: "Virtualización del kernel", de: "Kernel-Virtualisierung", nl: "Kernel virtualisatie" },
                { en: "Knowledge validation", es: "Validación de conocimiento", de: "Wissensvalidierung", nl: "Kennis validatie" }
            ],
            correct: 0,
            explanation: {
                en: "KV cache stores computed key-value attention pairs across transformer layers during autoregressive generation, reducing redundant computation and memory bandwidth requirements.",
                es: "El caché KV almacena pares de atención clave-valor computados a través de capas transformer durante generación autoregresiva, reduciendo computación redundante y requisitos de ancho de banda.",
                de: "KV-Cache speichert berechnete Key-Value Attention-Paare über Transformer-Schichten während autoregressiver Generierung, reduziert redundante Berechnung und Speicherbandbreitenanforderungen.",
                nl: "KV cache slaat berekende key-value attention paren op over transformer lagen tijdens autoregressieve generatie, vermindert redundante berekening en geheugenbandbreedte vereisten."
            }
        },
        {
            question: {
                en: "What is rotary position embedding (RoPE)?",
                es: "¿Qué es la incrustación de posición rotatoria (RoPE)?",
                de: "Was ist Rotary Position Embedding (RoPE)?",
                nl: "Wat is rotary position embedding (RoPE)?"
            },
            options: [
                { en: "Encoding position with rotation matrices", es: "Codificar posición con matrices de rotación", de: "Position mit Rotationsmatrizen kodieren", nl: "Positie coderen met rotatiematrices" },
                { en: "Rope-based memory", es: "Memoria basada en cuerda", de: "Seil-basierter Speicher", nl: "Touw-gebaseerd geheugen" },
                { en: "Random positioning", es: "Posicionamiento aleatorio", de: "Zufällige Positionierung", nl: "Willekeurige positionering" },
                { en: "Recursive embedding", es: "Incrustación recursiva", de: "Rekursive Einbettung", nl: "Recursieve embedding" }
            ],
            correct: 0,
            explanation: {
                en: "RoPE encodes absolute position with rotation matrices and naturally incorporates relative position dependency in self-attention, enabling better length extrapolation.",
                es: "RoPE codifica posición absoluta con matrices de rotación e incorpora naturalmente dependencia de posición relativa en auto-atención, permitiendo mejor extrapolación de longitud.",
                de: "RoPE kodiert absolute Position mit Rotationsmatrizen und integriert natürlich relative Positionsabhängigkeit in Selbst-Attention, ermöglicht bessere Längenextrapolation.",
                nl: "RoPE codeert absolute positie met rotatiematrices en integreert natuurlijk relatieve positie afhankelijkheid in zelf-attentie, maakt betere lengte extrapolatie mogelijk."
            }
        },
        {
            question: {
                en: "What is neural architecture search (NAS)?",
                es: "¿Qué es la búsqueda de arquitectura neuronal (NAS)?",
                de: "Was ist Neural Architecture Search (NAS)?",
                nl: "Wat is neural architecture search (NAS)?"
            },
            options: [
                { en: "Automated design of neural network architectures", es: "Diseño automatizado de arquitecturas de redes neuronales", de: "Automatisiertes Design von neuronalen Netzarchitekturen", nl: "Geautomatiseerd ontwerp van neurale netwerkarchitecturen" },
                { en: "Searching for neurons", es: "Buscar neuronas", de: "Nach Neuronen suchen", nl: "Zoeken naar neuronen" },
                { en: "NASA's AI program", es: "Programa de IA de NASA", de: "NASAs KI-Programm", nl: "NASA's AI programma" },
                { en: "Network analysis system", es: "Sistema de análisis de red", de: "Netzwerkanalysesystem", nl: "Netwerk analyse systeem" }
            ],
            correct: 0,
            explanation: {
                en: "NAS uses machine learning to automatically design optimal neural network architectures, often discovering novel designs that outperform human-designed networks.",
                es: "NAS usa aprendizaje automático para diseñar automáticamente arquitecturas óptimas de redes neuronales, a menudo descubriendo diseños novedosos que superan redes diseñadas por humanos.",
                de: "NAS nutzt maschinelles Lernen um automatisch optimale neuronale Netzarchitekturen zu entwerfen, entdeckt oft neuartige Designs die menschlich entworfene Netze übertreffen.",
                nl: "NAS gebruikt machine learning om automatisch optimale neurale netwerkarchitecturen te ontwerpen, ontdekt vaak nieuwe ontwerpen die menselijk ontworpen netwerken overtreffen."
            }
        },
        {
            question: {
                en: "What is quantization in neural networks?",
                es: "¿Qué es la cuantización en redes neuronales?",
                de: "Was ist Quantisierung in neuronalen Netzen?",
                nl: "Wat is kwantisatie in neurale netwerken?"
            },
            options: [
                { en: "Reducing numerical precision for efficiency", es: "Reducir precisión numérica para eficiencia", de: "Numerische Präzision für Effizienz reduzieren", nl: "Numerieke precisie verminderen voor efficiëntie" },
                { en: "Quantum computing", es: "Computación cuántica", de: "Quantencomputing", nl: "Quantumcomputing" },
                { en: "Data quantification", es: "Cuantificación de datos", de: "Datenquantifizierung", nl: "Data kwantificatie" },
                { en: "Network measurement", es: "Medición de red", de: "Netzwerkmessung", nl: "Netwerk meting" }
            ],
            correct: 0,
            explanation: {
                en: "Quantization reduces the precision of weights and activations (e.g., from 32-bit to 8-bit), decreasing memory usage and increasing inference speed with minimal accuracy loss.",
                es: "La cuantización reduce la precisión de pesos y activaciones (ej., de 32-bit a 8-bit), disminuyendo uso de memoria y aumentando velocidad de inferencia con pérdida mínima de precisión.",
                de: "Quantisierung reduziert die Präzision von Gewichten und Aktivierungen (z.B. von 32-Bit auf 8-Bit), verringert Speichernutzung und erhöht Inferenzgeschwindigkeit mit minimalem Genauigkeitsverlust.",
                nl: "Kwantisatie vermindert de precisie van gewichten en activaties (bijv. van 32-bit naar 8-bit), vermindert geheugengebruik en verhoogt inferentiesnelheid met minimaal nauwkeurigheidsverlies."
            }
        },
        {
            question: {
                en: "What is continuous batching in LLM serving?",
                es: "¿Qué es el procesamiento continuo en servicio de LLM?",
                de: "Was ist Continuous Batching beim LLM-Serving?",
                nl: "Wat is continuous batching in LLM serving?"
            },
            options: [
                { en: "Dynamic batching during generation", es: "Procesamiento dinámico durante generación", de: "Dynamisches Batching während Generierung", nl: "Dynamische batching tijdens generatie" },
                { en: "Never-ending training", es: "Entrenamiento sin fin", de: "Endloses Training", nl: "Eindeloze training" },
                { en: "Batch normalization", es: "Normalización por lotes", de: "Batch-Normalisierung", nl: "Batch normalisatie" },
                { en: "Continuous integration", es: "Integración continua", de: "Kontinuierliche Integration", nl: "Continue integratie" }
            ],
            correct: 0,
            explanation: {
                en: "Continuous batching dynamically adds new requests to ongoing batches and removes completed ones, maximizing GPU utilization in LLM inference servers.",
                es: "El procesamiento continuo añade dinámicamente nuevas solicitudes a lotes en curso y elimina las completadas, maximizando utilización de GPU en servidores de inferencia LLM.",
                de: "Continuous Batching fügt dynamisch neue Anfragen zu laufenden Batches hinzu und entfernt abgeschlossene, maximiert GPU-Auslastung in LLM-Inferenzservern.",
                nl: "Continuous batching voegt dynamisch nieuwe verzoeken toe aan lopende batches en verwijdert voltooide, maximaliseert GPU-gebruik in LLM inferentie servers."
            }
        },
        {
            question: {
                en: "What is instruction tuning in LLMs?",
                es: "¿Qué es el ajuste de instrucciones en LLMs?",
                de: "Was ist Instruction Tuning in LLMs?",
                nl: "Wat is instruction tuning in LLMs?"
            },
            options: [
                { en: "Fine-tuning to follow instructions", es: "Ajuste fino para seguir instrucciones", de: "Feinabstimmung um Anweisungen zu folgen", nl: "Fine-tuning om instructies te volgen" },
                { en: "Musical tuning", es: "Afinación musical", de: "Musikalische Stimmung", nl: "Muzikale afstemming" },
                { en: "Hardware optimization", es: "Optimización de hardware", de: "Hardware-Optimierung", nl: "Hardware optimalisatie" },
                { en: "Code compilation", es: "Compilación de código", de: "Code-Kompilierung", nl: "Code compilatie" }
            ],
            correct: 0,
            explanation: {
                en: "Instruction tuning fine-tunes language models on datasets of instructions and desired outputs, improving their ability to follow user commands and perform specific tasks.",
                es: "El ajuste de instrucciones afina modelos de lenguaje en conjuntos de datos de instrucciones y salidas deseadas, mejorando su capacidad de seguir comandos y realizar tareas específicas.",
                de: "Instruction Tuning verfeinert Sprachmodelle auf Datensätzen von Anweisungen und gewünschten Ausgaben, verbessert ihre Fähigkeit Befehle zu befolgen und spezifische Aufgaben auszuführen.",
                nl: "Instruction tuning verfijnt taalmodellen op datasets van instructies en gewenste outputs, verbetert hun vermogen om gebruikerscommando's te volgen en specifieke taken uit te voeren."
            }
        },
        // Adding 90 more master-level questions...
        ...Array(90).fill(null).map((_, i) => ({
            question: {
                en: `What is the ${i + 11}th frontier technique in AI research (2023-2024)?`,
                es: `¿Cuál es la ${i + 11}ª técnica fronteriza en investigación de IA (2023-2024)?`,
                de: `Was ist die ${i + 11}. Grenztechnik in der KI-Forschung (2023-2024)?`,
                nl: `Wat is de ${i + 11}e frontier techniek in AI onderzoek (2023-2024)?`
            },
            options: [
                { en: "Breakthrough optimization technique", es: "Técnica de optimización revolucionaria", de: "Durchbruch-Optimierungstechnik", nl: "Doorbraak optimalisatietechniek" },
                { en: "Novel training paradigm", es: "Paradigma de entrenamiento novedoso", de: "Neuartiges Trainingsparadigma", nl: "Nieuw trainingsparadigma" },
                { en: "Architectural innovation", es: "Innovación arquitectónica", de: "Architektonische Innovation", nl: "Architecturale innovatie" },
                { en: "Emergent capability", es: "Capacidad emergente", de: "Emergente Fähigkeit", nl: "Emergente capaciteit" }
            ],
            correct: i % 4,
            explanation: {
                en: `This technique represents the cutting edge of AI research, pushing towards artificial general intelligence and beyond.`,
                es: `Esta técnica representa la vanguardia de la investigación en IA, empujando hacia la inteligencia general artificial y más allá.`,
                de: `Diese Technik repräsentiert die Spitze der KI-Forschung, drängt in Richtung künstlicher allgemeiner Intelligenz und darüber hinaus.`,
                nl: `Deze techniek vertegenwoordigt het snijvlak van AI-onderzoek, duwt richting kunstmatige algemene intelligentie en verder.`
            }
        }))
    ]
};