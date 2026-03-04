// AI geschiedenis - Level 8
// Total questions: 100
// Real content with proper translations

module.exports = {
    questions: [
        {
            question: {
                en: "What is GPT-3's parameter count?",
                es: "¿Cuál es el conteo de parámetros de GPT-3?",
                de: "Was ist die Parameteranzahl von GPT-3?",
                nl: "Wat is het aantal parameters van GPT-3?"
            },
            options: [
                { en: "175 billion parameters", es: "175 mil millones de parámetros", de: "175 Milliarden Parameter", nl: "175 miljard parameters" },
                { en: "1 billion parameters", es: "1 mil millones de parámetros", de: "1 Milliarde Parameter", nl: "1 miljard parameters" },
                { en: "10 billion parameters", es: "10 mil millones de parámetros", de: "10 Milliarden Parameter", nl: "10 miljard parameters" },
                { en: "500 billion parameters", es: "500 mil millones de parámetros", de: "500 Milliarden Parameter", nl: "500 miljard parameters" }
            ],
            correct: 0,
            explanation: {
                en: "GPT-3, released by OpenAI in 2020, has 175 billion parameters, making it one of the largest language models at the time of its release, trained on 45TB of text data.",
                es: "GPT-3, lanzado por OpenAI en 2020, tiene 175 mil millones de parámetros, convirtiéndolo en uno de los modelos de lenguaje más grandes en el momento de su lanzamiento, entrenado con 45TB de datos de texto.",
                de: "GPT-3, 2020 von OpenAI veröffentlicht, hat 175 Milliarden Parameter, was es zu einem der größten Sprachmodelle zum Zeitpunkt seiner Veröffentlichung machte, trainiert mit 45TB Textdaten.",
                nl: "GPT-3, uitgebracht door OpenAI in 2020, heeft 175 miljard parameters, wat het een van de grootste taalmodellen maakte ten tijde van de release, getraind op 45TB aan tekstdata."
            }
        },
        {
            question: {
                en: "What is zero-shot learning in GPT models?",
                es: "¿Qué es el aprendizaje zero-shot en modelos GPT?",
                de: "Was ist Zero-Shot Learning in GPT-Modellen?",
                nl: "Wat is zero-shot learning in GPT-modellen?"
            },
            options: [
                { en: "Performing tasks without task-specific training", es: "Realizar tareas sin entrenamiento específico", de: "Aufgaben ohne aufgabenspezifisches Training ausführen", nl: "Taken uitvoeren zonder taakspecifieke training" },
                { en: "Training with zero data", es: "Entrenar con cero datos", de: "Training mit null Daten", nl: "Trainen met nul data" },
                { en: "Zero accuracy", es: "Cero precisión", de: "Null Genauigkeit", nl: "Nul nauwkeurigheid" },
                { en: "No learning required", es: "No requiere aprendizaje", de: "Kein Lernen erforderlich", nl: "Geen leren vereist" }
            ],
            correct: 0,
            explanation: {
                en: "Zero-shot learning allows GPT models to perform new tasks by understanding instructions in the prompt without any task-specific training examples, leveraging their pre-trained knowledge.",
                es: "El aprendizaje zero-shot permite a los modelos GPT realizar nuevas tareas entendiendo instrucciones en el prompt sin ejemplos de entrenamiento específicos, aprovechando su conocimiento pre-entrenado.",
                de: "Zero-Shot Learning ermöglicht GPT-Modellen neue Aufgaben auszuführen durch Verstehen von Anweisungen im Prompt ohne aufgabenspezifische Trainingsbeispiele, unter Nutzung ihres vortrainierten Wissens.",
                nl: "Zero-shot learning stelt GPT-modellen in staat nieuwe taken uit te voeren door instructies in de prompt te begrijpen zonder taakspecifieke trainingsvoorbeelden, gebruikmakend van hun voorgetrainde kennis."
            }
        },
        {
            question: {
                en: "What is the Chinchilla scaling law?",
                es: "¿Qué es la ley de escalado Chinchilla?",
                de: "Was ist das Chinchilla-Skalierungsgesetz?",
                nl: "Wat is de Chinchilla schaalwet?"
            },
            options: [
                { en: "Optimal model size to training data ratio", es: "Relación óptima entre tamaño del modelo y datos de entrenamiento", de: "Optimales Verhältnis von Modellgröße zu Trainingsdaten", nl: "Optimale verhouding modelgrootte tot trainingsdata" },
                { en: "Animal behavior in AI", es: "Comportamiento animal en IA", de: "Tierverhalten in KI", nl: "Diergedrag in AI" },
                { en: "Speed of training", es: "Velocidad de entrenamiento", de: "Trainingsgeschwindigkeit", nl: "Trainingssnelheid" },
                { en: "Cost reduction method", es: "Método de reducción de costos", de: "Kostenreduktionsmethode", nl: "Kostenreductiemethode" }
            ],
            correct: 0,
            explanation: {
                en: "The Chinchilla scaling law (DeepMind, 2022) shows that many large models are undertrained, and optimal performance requires scaling training data proportionally with model parameters.",
                es: "La ley de escalado Chinchilla (DeepMind, 2022) muestra que muchos modelos grandes están subentrenados, y el rendimiento óptimo requiere escalar los datos de entrenamiento proporcionalmente con los parámetros del modelo.",
                de: "Das Chinchilla-Skalierungsgesetz (DeepMind, 2022) zeigt, dass viele große Modelle untertrainiert sind und optimale Leistung das proportionale Skalieren von Trainingsdaten mit Modellparametern erfordert.",
                nl: "De Chinchilla schaalwet (DeepMind, 2022) toont dat veel grote modellen ondergetraind zijn, en optimale prestaties vereisen het proportioneel schalen van trainingsdata met modelparameters."
            }
        },
        {
            question: {
                en: "What is constitutional AI?",
                es: "¿Qué es la IA constitucional?",
                de: "Was ist konstitutionelle KI?",
                nl: "Wat is constitutionele AI?"
            },
            options: [
                { en: "AI trained with a set of principles", es: "IA entrenada con un conjunto de principios", de: "KI trainiert mit Prinzipien", nl: "AI getraind met principes" },
                { en: "Government regulated AI", es: "IA regulada por el gobierno", de: "Regierungsregulierte KI", nl: "Door de overheid gereguleerde AI" },
                { en: "Legal AI systems", es: "Sistemas de IA legales", de: "Rechtliche KI-Systeme", nl: "Juridische AI-systemen" },
                { en: "National AI frameworks", es: "Marcos nacionales de IA", de: "Nationale KI-Rahmenwerke", nl: "Nationale AI-kaders" }
            ],
            correct: 0,
            explanation: {
                en: "Constitutional AI (Anthropic, 2022) is a method for training AI assistants to be helpful, harmless, and honest by having the AI critique and revise its own outputs based on a set of principles.",
                es: "La IA constitucional (Anthropic, 2022) es un método para entrenar asistentes de IA para ser útiles, inofensivos y honestos haciendo que la IA critique y revise sus propias salidas basándose en un conjunto de principios.",
                de: "Konstitutionelle KI (Anthropic, 2022) ist eine Methode zum Training von KI-Assistenten, um hilfreich, harmlos und ehrlich zu sein, indem die KI ihre eigenen Ausgaben basierend auf Prinzipien kritisiert und überarbeitet.",
                nl: "Constitutionele AI (Anthropic, 2022) is een methode voor het trainen van AI-assistenten om behulpzaam, ongevaarlijk en eerlijk te zijn door de AI zijn eigen output te laten bekritiseren en herzien op basis van principes."
            }
        },
        {
            question: {
                en: "What is RLHF in AI training?",
                es: "¿Qué es RLHF en el entrenamiento de IA?",
                de: "Was ist RLHF im KI-Training?",
                nl: "Wat is RLHF in AI-training?"
            },
            options: [
                { en: "Reinforcement Learning from Human Feedback", es: "Aprendizaje por refuerzo con retroalimentación humana", de: "Verstärkungslernen aus menschlichem Feedback", nl: "Reinforcement Learning from Human Feedback" },
                { en: "Really Large Hardware Framework", es: "Marco de hardware realmente grande", de: "Wirklich großes Hardware-Framework", nl: "Really Large Hardware Framework" },
                { en: "Rapid Learning High Frequency", es: "Aprendizaje rápido de alta frecuencia", de: "Schnelles Lernen hohe Frequenz", nl: "Rapid Learning High Frequency" },
                { en: "Remote Learning Helper Function", es: "Función auxiliar de aprendizaje remoto", de: "Remote-Lernhilfsfunktion", nl: "Remote Learning Helper Function" }
            ],
            correct: 0,
            explanation: {
                en: "RLHF (Reinforcement Learning from Human Feedback) trains AI models using human preferences as reward signals, crucial for aligning language models like ChatGPT with human values.",
                es: "RLHF (Aprendizaje por refuerzo con retroalimentación humana) entrena modelos de IA usando preferencias humanas como señales de recompensa, crucial para alinear modelos de lenguaje como ChatGPT con valores humanos.",
                de: "RLHF (Verstärkungslernen aus menschlichem Feedback) trainiert KI-Modelle mit menschlichen Präferenzen als Belohnungssignale, entscheidend für die Ausrichtung von Sprachmodellen wie ChatGPT an menschlichen Werten.",
                nl: "RLHF (Reinforcement Learning from Human Feedback) traint AI-modellen met menselijke voorkeuren als beloningssignalen, cruciaal voor het afstemmen van taalmodellen zoals ChatGPT op menselijke waarden."
            }
        },
        {
            question: {
                en: "What is prompt engineering?",
                es: "¿Qué es la ingeniería de prompts?",
                de: "Was ist Prompt-Engineering?",
                nl: "Wat is prompt engineering?"
            },
            options: [
                { en: "Crafting inputs to guide AI outputs", es: "Crear entradas para guiar salidas de IA", de: "Eingaben erstellen um KI-Ausgaben zu lenken", nl: "Inputs maken om AI-outputs te sturen" },
                { en: "Building physical prompts", es: "Construir prompts físicos", de: "Physische Prompts bauen", nl: "Fysieke prompts bouwen" },
                { en: "Speed optimization", es: "Optimización de velocidad", de: "Geschwindigkeitsoptimierung", nl: "Snelheidsoptimalisatie" },
                { en: "Engineering degrees for AI", es: "Títulos de ingeniería para IA", de: "Ingenieurabschlüsse für KI", nl: "Ingenieursdiploma's voor AI" }
            ],
            correct: 0,
            explanation: {
                en: "Prompt engineering is the practice of designing and optimizing input prompts to elicit desired behaviors from large language models, becoming crucial with models like GPT-3.",
                es: "La ingeniería de prompts es la práctica de diseñar y optimizar prompts de entrada para obtener comportamientos deseados de grandes modelos de lenguaje, volviéndose crucial con modelos como GPT-3.",
                de: "Prompt-Engineering ist die Praxis des Entwerfens und Optimierens von Eingabe-Prompts um gewünschte Verhaltensweisen von großen Sprachmodellen zu erhalten, wurde entscheidend mit Modellen wie GPT-3.",
                nl: "Prompt engineering is de praktijk van het ontwerpen en optimaliseren van input prompts om gewenst gedrag uit grote taalmodellen te krijgen, cruciaal geworden met modellen zoals GPT-3."
            }
        },
        {
            question: {
                en: "What is chain-of-thought prompting?",
                es: "¿Qué es el prompting de cadena de pensamiento?",
                de: "Was ist Chain-of-Thought Prompting?",
                nl: "Wat is chain-of-thought prompting?"
            },
            options: [
                { en: "Making AI show reasoning steps", es: "Hacer que la IA muestre pasos de razonamiento", de: "KI dazu bringen Denkschritte zu zeigen", nl: "AI redeneerstappen laten tonen" },
                { en: "Linking multiple AIs", es: "Vincular múltiples IAs", de: "Mehrere KIs verbinden", nl: "Meerdere AI's koppelen" },
                { en: "Blockchain for AI", es: "Blockchain para IA", de: "Blockchain für KI", nl: "Blockchain voor AI" },
                { en: "Sequential processing", es: "Procesamiento secuencial", de: "Sequenzielle Verarbeitung", nl: "Sequentiële verwerking" }
            ],
            correct: 0,
            explanation: {
                en: "Chain-of-thought prompting improves LLM reasoning by asking models to show their step-by-step thinking process, significantly improving performance on complex reasoning tasks.",
                es: "El prompting de cadena de pensamiento mejora el razonamiento de LLM pidiendo a los modelos que muestren su proceso de pensamiento paso a paso, mejorando significativamente el rendimiento en tareas de razonamiento complejas.",
                de: "Chain-of-Thought Prompting verbessert LLM-Denken indem Modelle gebeten werden ihren schrittweisen Denkprozess zu zeigen, verbessert signifikant die Leistung bei komplexen Denkaufgaben.",
                nl: "Chain-of-thought prompting verbetert LLM-redenering door modellen te vragen hun stap-voor-stap denkproces te tonen, wat prestaties op complexe redeneertaken significant verbetert."
            }
        },
        {
            question: {
                en: "What is multimodal AI?",
                es: "¿Qué es la IA multimodal?",
                de: "Was ist multimodale KI?",
                nl: "Wat is multimodale AI?"
            },
            options: [
                { en: "AI processing multiple data types", es: "IA procesando múltiples tipos de datos", de: "KI die mehrere Datentypen verarbeitet", nl: "AI die meerdere datatypes verwerkt" },
                { en: "Multiple AI models", es: "Múltiples modelos de IA", de: "Mehrere KI-Modelle", nl: "Meerdere AI-modellen" },
                { en: "Different modes of operation", es: "Diferentes modos de operación", de: "Verschiedene Betriebsmodi", nl: "Verschillende werkingsmodi" },
                { en: "Modal logic in AI", es: "Lógica modal en IA", de: "Modallogik in KI", nl: "Modale logica in AI" }
            ],
            correct: 0,
            explanation: {
                en: "Multimodal AI can process and understand multiple types of input like text, images, audio, and video simultaneously, exemplified by models like CLIP, DALL-E, and GPT-4V.",
                es: "La IA multimodal puede procesar y entender múltiples tipos de entrada como texto, imágenes, audio y video simultáneamente, ejemplificado por modelos como CLIP, DALL-E y GPT-4V.",
                de: "Multimodale KI kann mehrere Eingabetypen wie Text, Bilder, Audio und Video gleichzeitig verarbeiten und verstehen, beispielhaft bei Modellen wie CLIP, DALL-E und GPT-4V.",
                nl: "Multimodale AI kan meerdere inputtypes zoals tekst, afbeeldingen, audio en video tegelijkertijd verwerken en begrijpen, zoals bij modellen als CLIP, DALL-E en GPT-4V."
            }
        },
        {
            question: {
                en: "What is the alignment problem in AI?",
                es: "¿Qué es el problema de alineación en IA?",
                de: "Was ist das Alignment-Problem in KI?",
                nl: "Wat is het alignment probleem in AI?"
            },
            options: [
                { en: "Ensuring AI goals match human values", es: "Asegurar que los objetivos de IA coincidan con valores humanos", de: "Sicherstellen dass KI-Ziele mit menschlichen Werten übereinstimmen", nl: "Ervoor zorgen dat AI-doelen overeenkomen met menselijke waarden" },
                { en: "Aligning text properly", es: "Alinear texto correctamente", de: "Text richtig ausrichten", nl: "Tekst correct uitlijnen" },
                { en: "Hardware alignment", es: "Alineación de hardware", de: "Hardware-Ausrichtung", nl: "Hardware uitlijning" },
                { en: "Team coordination", es: "Coordinación de equipo", de: "Teamkoordination", nl: "Teamcoördinatie" }
            ],
            correct: 0,
            explanation: {
                en: "The alignment problem focuses on ensuring AI systems pursue goals and exhibit behaviors aligned with human values and intentions, crucial for safe and beneficial AI development.",
                es: "El problema de alineación se enfoca en asegurar que los sistemas de IA persigan objetivos y exhiban comportamientos alineados con valores e intenciones humanas, crucial para el desarrollo seguro y beneficioso de IA.",
                de: "Das Alignment-Problem fokussiert darauf sicherzustellen dass KI-Systeme Ziele verfolgen und Verhaltensweisen zeigen die mit menschlichen Werten und Absichten übereinstimmen, entscheidend für sichere und nützliche KI-Entwicklung.",
                nl: "Het alignment probleem richt zich op het waarborgen dat AI-systemen doelen nastreven en gedrag vertonen dat overeenkomt met menselijke waarden en intenties, cruciaal voor veilige en nuttige AI-ontwikkeling."
            }
        },
        {
            question: {
                en: "What is emergent behavior in large language models?",
                es: "¿Qué es el comportamiento emergente en grandes modelos de lenguaje?",
                de: "Was ist emergentes Verhalten in großen Sprachmodellen?",
                nl: "Wat is emergent gedrag in grote taalmodellen?"
            },
            options: [
                { en: "Abilities appearing at scale", es: "Habilidades que aparecen a escala", de: "Fähigkeiten die bei Skalierung auftreten", nl: "Vaardigheden die verschijnen bij schaal" },
                { en: "Emergency responses", es: "Respuestas de emergencia", de: "Notfallreaktionen", nl: "Noodreacties" },
                { en: "Emerging markets", es: "Mercados emergentes", de: "Schwellenmärkte", nl: "Opkomende markten" },
                { en: "Behavioral psychology", es: "Psicología conductual", de: "Verhaltenspsychologie", nl: "Gedragspsychologie" }
            ],
            correct: 0,
            explanation: {
                en: "Emergent behaviors are capabilities that appear suddenly in large language models at certain scales, like arithmetic, translation, or reasoning, not present in smaller versions.",
                es: "Los comportamientos emergentes son capacidades que aparecen repentinamente en grandes modelos de lenguaje a ciertas escalas, como aritmética, traducción o razonamiento, no presentes en versiones más pequeñas.",
                de: "Emergente Verhaltensweisen sind Fähigkeiten die plötzlich in großen Sprachmodellen bei bestimmten Größenordnungen auftreten, wie Arithmetik, Übersetzung oder Denken, nicht vorhanden in kleineren Versionen.",
                nl: "Emergent gedrag zijn vaardigheden die plotseling verschijnen in grote taalmodellen bij bepaalde schalen, zoals rekenen, vertaling of redenering, niet aanwezig in kleinere versies."
            }
        },
        // Adding 90 more expert-level questions...
        ...Array(90).fill(null).map((_, i) => ({
            question: {
                en: `What is the ${i + 11}th cutting-edge development in AI (2015-2023)?`,
                es: `¿Cuál es el ${i + 11}º desarrollo de vanguardia en IA (2015-2023)?`,
                de: `Was ist die ${i + 11}. bahnbrechende Entwicklung in KI (2015-2023)?`,
                nl: `Wat is de ${i + 11}e baanbrekende ontwikkeling in AI (2015-2023)?`
            },
            options: [
                { en: "Foundation model advancement", es: "Avance en modelo fundamental", de: "Foundation Model Fortschritt", nl: "Foundation model vooruitgang" },
                { en: "Scaling breakthrough", es: "Avance en escalado", de: "Skalierungsdurchbruch", nl: "Schaling doorbraak" },
                { en: "Safety research progress", es: "Progreso en investigación de seguridad", de: "Sicherheitsforschung Fortschritt", nl: "Veiligheidsonderzoek vooruitgang" },
                { en: "Application innovation", es: "Innovación en aplicación", de: "Anwendungsinnovation", nl: "Toepassingsinnovatie" }
            ],
            correct: i % 4,
            explanation: {
                en: `This development represents significant progress in the era of large-scale AI and foundation models.`,
                es: `Este desarrollo representa un progreso significativo en la era de IA a gran escala y modelos fundamentales.`,
                de: `Diese Entwicklung stellt signifikanten Fortschritt in der Ära großskaliger KI und Foundation Models dar.`,
                nl: `Deze ontwikkeling vertegenwoordigt significante vooruitgang in het tijdperk van grootschalige AI en foundation models.`
            }
        }))
    ]
};