// Natural Language Processing Quiz - Level 9: Advanced NLP and Research Topics
(function() {
  const level9 = {
    name: {
      en: "Large Language Models & Modern NLP",
      es: "Modelos de Lenguaje Grandes y PLN Moderno",
      de: "Große Sprachmodelle & Modernes NLP",
      nl: "Grote Taalmodellen & Modern NLP"
    },
    questions: [
      {
        question: {
          en: "What are large language models (LLMs) and what capabilities do they demonstrate?",
          es: "¿Qué son los modelos de lenguaje grandes (LLM) y qué capacidades demuestran?",
          de: "Was sind große Sprachmodelle (LLMs) und welche Fähigkeiten zeigen sie?",
          nl: "Wat zijn grote taalmodellen (LLMs) en welke capaciteiten tonen ze?"
        },
        options: [
          { en: "Neural networks trained on massive text corpora that can generate human-like text and perform various language tasks", es: "Redes neuronales entrenadas en corpus de texto masivos que pueden generar texto similar al humano y realizar varias tareas de lenguaje", de: "Neuronale Netzwerke trainiert auf massiven Textkorpora die menschenähnlichen Text generieren und verschiedene Sprachaufgaben durchführen können", nl: "Neurale netwerken getraind op massieve tekstcorpora die mensachtige tekst kunnen genereren en verschillende taaltaken kunnen uitvoeren" },
          { en: "Models that only work with large vocabularies", es: "Modelos que solo funcionan con vocabularios grandes", de: "Modelle die nur mit großen Vokabularen funktionieren", nl: "Modellen die alleen werken met grote vocabulaires" },
          { en: "Language models that require large amounts of memory", es: "Modelos de lenguaje que requieren grandes cantidades de memoria", de: "Sprachmodelle die große Mengen an Speicher benötigen", nl: "Taalmodellen die grote hoeveelheden geheugen vereisen" },
          { en: "Models designed for processing long documents", es: "Modelos diseñados para procesar documentos largos", de: "Modelle entworfen für die Verarbeitung langer Dokumente", nl: "Modellen ontworpen voor het verwerken van lange documenten" }
        ],
        correct: 0,
        explanation: {
          en: "LLMs like GPT, BERT, and T5 are transformer-based models trained on billions of parameters that demonstrate emergent abilities in text generation, reasoning, and few-shot learning across diverse language tasks.",
          es: "LLMs como GPT, BERT y T5 son modelos basados en transformadores entrenados en miles de millones de parámetros que demuestran habilidades emergentes en generación de texto, razonamiento y aprendizaje de pocos ejemplos en diversas tareas de lenguaje.",
          de: "LLMs wie GPT, BERT und T5 sind transformer-basierte Modelle trainiert auf Milliarden von Parametern die emergente Fähigkeiten in Textgenerierung, Reasoning und Few-Shot Learning über diverse Sprachaufgaben zeigen.",
          nl: "LLMs zoals GPT, BERT en T5 zijn transformer-gebaseerde modellen getraind op miljarden parameters die emergente vaardigheden tonen in tekstgeneratie, redeneren en few-shot learning over diverse taaltaken."
        }
      },
      {
        question: {
          en: "What is few-shot learning in the context of NLP?",
          es: "¿Qué es el aprendizaje de pocos ejemplos en el contexto de PLN?",
          de: "Was ist Few-Shot Learning im Kontext von NLP?",
          nl: "Wat is few-shot learning in de context van NLP?"
        },
        options: [
          { en: "Learning to perform new tasks with only a few examples provided in the input prompt", es: "Aprender a realizar nuevas tareas con solo unos pocos ejemplos proporcionados en el prompt de entrada", de: "Lernen neue Aufgaben mit nur wenigen Beispielen im Eingabeprompt durchzuführen", nl: "Leren om nieuwe taken uit te voeren met slechts enkele voorbeelden in de invoerprompt" },
          { en: "Training models with small datasets", es: "Entrenar modelos con datasets pequeños", de: "Modelle mit kleinen Datensätzen trainieren", nl: "Modellen trainen met kleine datasets" },
          { en: "Learning in a few iterations", es: "Aprender en pocas iteraciones", de: "In wenigen Iterationen lernen", nl: "Leren in enkele iteraties" },
          { en: "Quick learning algorithms", es: "Algoritmos de aprendizaje rápido", de: "Schnelle Lernalgorithmen", nl: "Snelle leeralgoritmes" }
        ],
        correct: 0,
        explanation: {
          en: "Few-shot learning allows models to generalize to new tasks by providing just a few demonstration examples in the context, without additional training or fine-tuning.",
          es: "El aprendizaje de pocos ejemplos permite a modelos generalizar a nuevas tareas proporcionando solo unos pocos ejemplos de demostración en el contexto, sin entrenamiento adicional o ajuste fino.",
          de: "Few-Shot Learning ermöglicht Modellen zu neuen Aufgaben zu generalisieren durch Bereitstellung nur weniger Demonstrationsbeispiele im Kontext, ohne zusätzliches Training oder Fine-Tuning.",
          nl: "Few-shot learning stelt modellen in staat te generaliseren naar nieuwe taken door slechts enkele demonstratievoorbeelden in de context te geven, zonder extra training of fine-tuning."
        }
      },
      {
        question: {
          en: "What is prompt engineering and why is it important for modern NLP systems?",
          es: "¿Qué es la ingeniería de prompts y por qué es importante para sistemas modernos de PLN?",
          de: "Was ist Prompt Engineering und warum ist es wichtig für moderne NLP-Systeme?",
          nl: "Wat is prompt engineering en waarom is het belangrijk voor moderne NLP-systemen?"
        },
        options: [
          { en: "Designing effective input prompts to guide language models toward desired outputs and behaviors", es: "Diseñar prompts de entrada efectivos para guiar modelos de lenguaje hacia salidas y comportamientos deseados", de: "Effektive Eingabeprompts entwerfen um Sprachmodelle zu gewünschten Ausgaben und Verhaltensweisen zu führen", nl: "Effectieve invoerprompts ontwerpen om taalmodellen naar gewenste outputs en gedragingen te leiden" },
          { en: "Engineering faster prompts for better performance", es: "Diseñar prompts más rápidos para mejor rendimiento", de: "Schnellere Prompts für bessere Leistung entwickeln", nl: "Snellere prompts engineeren voor betere prestaties" },
          { en: "Creating prompts for engineering applications", es: "Crear prompts para aplicaciones de ingeniería", de: "Prompts für Ingenieuranwendungen erstellen", nl: "Prompts maken voor technische toepassingen" },
          { en: "Automating prompt generation", es: "Automatizar generación de prompts", de: "Prompt-Generierung automatisieren", nl: "Prompt generatie automatiseren" }
        ],
        correct: 0,
        explanation: {
          en: "Prompt engineering is crucial for maximizing LLM performance by crafting instructions, examples, and context that effectively communicate the intended task and desired output format.",
          es: "La ingeniería de prompts es crucial para maximizar el rendimiento de LLM diseñando instrucciones, ejemplos y contexto que comuniquen efectivamente la tarea pretendida y formato de salida deseado.",
          de: "Prompt Engineering ist entscheidend für die Maximierung der LLM-Leistung durch Gestaltung von Anweisungen, Beispielen und Kontext die die beabsichtigte Aufgabe und gewünschtes Ausgabeformat effektiv kommunizieren.",
          nl: "Prompt engineering is cruciaal voor het maximaliseren van LLM prestaties door het ontwerpen van instructies, voorbeelden en context die de beoogde taak en gewenste outputformaat effectief communiceren."
        }
      },
      {
        question: {
          en: "What is retrieval-augmented generation (RAG) in NLP?",
          es: "¿Qué es la generación aumentada por recuperación (RAG) en PLN?",
          de: "Was ist Retrieval-Augmented Generation (RAG) in NLP?",
          nl: "Wat is retrieval-augmented generation (RAG) in NLP?"
        },
        options: [
          { en: "Combining language models with external knowledge retrieval to enhance generation with relevant information", es: "Combinar modelos de lenguaje con recuperación de conocimiento externo para mejorar generación con información relevante", de: "Sprachmodelle mit externer Wissensabfrage kombinieren um Generierung mit relevanter Information zu verbessern", nl: "Taalmodellen combineren met externe kennisophaling om generatie te verbeteren met relevante informatie" },
          { en: "Retrieving and generating random text", es: "Recuperar y generar texto aleatorio", de: "Zufälligen Text abrufen und generieren", nl: "Willekeurige tekst ophalen en genereren" },
          { en: "A method for improving text retrieval speed", es: "Un método para mejorar velocidad de recuperación de texto", de: "Eine Methode zur Verbesserung der Textabrufgeschwindigkeit", nl: "Een methode voor het verbeteren van tekstophalings snelheid" },
          { en: "Generating text from retrieved documents", es: "Generar texto de documentos recuperados", de: "Text aus abgerufenen Dokumenten generieren", nl: "Tekst genereren uit opgehaalde documenten" }
        ],
        correct: 0,
        explanation: {
          en: "RAG systems first retrieve relevant documents from external knowledge bases, then use this information to inform and ground the language model's generation, reducing hallucinations and improving factual accuracy.",
          es: "Los sistemas RAG primero recuperan documentos relevantes de bases de conocimiento externas, luego usan esta información para informar y fundamentar la generación del modelo de lenguaje, reduciendo alucinaciones y mejorando precisión factual.",
          de: "RAG-Systeme rufen zuerst relevante Dokumente aus externen Wissensbasen ab, verwenden dann diese Information um die Generierung des Sprachmodells zu informieren und zu begründen, reduzieren Halluzinationen und verbessern faktische Genauigkeit.",
          nl: "RAG systemen halen eerst relevante documenten op uit externe kennisbases, gebruiken dan deze informatie om de generatie van het taalmodel te informeren en te gronden, verminderen hallucinaties en verbeteren feitelijke nauwkeurigheid."
        }
      },
      {
        question: {
          en: "What is the alignment problem in language models and why is it significant?",
          es: "¿Cuál es el problema de alineación en modelos de lenguaje y por qué es significativo?",
          de: "Was ist das Alignment-Problem in Sprachmodellen und warum ist es bedeutsam?",
          nl: "Wat is het alignment probleem in taalmodellen en waarom is het significant?"
        },
        options: [
          { en: "Ensuring language models behave according to human values and intentions rather than optimizing for unintended objectives", es: "Asegurar que modelos de lenguaje se comporten según valores e intenciones humanas en lugar de optimizar objetivos no deseados", de: "Sicherstellen dass Sprachmodelle sich nach menschlichen Werten und Absichten verhalten anstatt unbeabsichtigte Ziele zu optimieren", nl: "Ervoor zorgen dat taalmodellen zich gedragen volgens menselijke waarden en intenties in plaats van onbedoelde doelstellingen te optimaliseren" },
          { en: "Aligning text properly in generated output", es: "Alinear texto apropiadamente en salida generada", de: "Text ordnungsgemäß in generierter Ausgabe ausrichten", nl: "Tekst correct uitlijnen in gegenereerde output" },
          { en: "Synchronizing multiple language models", es: "Sincronizar múltiples modelos de lenguaje", de: "Mehrere Sprachmodelle synchronisieren", nl: "Meerdere taalmodellen synchroniseren" },
          { en: "Aligning model parameters during training", es: "Alinear parámetros del modelo durante entrenamiento", de: "Modellparameter während des Trainings ausrichten", nl: "Modelparameters uitlijnen tijdens training" }
        ],
        correct: 0,
        explanation: {
          en: "The alignment problem addresses the challenge of making AI systems pursue goals that are beneficial and aligned with human values, using techniques like RLHF (Reinforcement Learning from Human Feedback) and constitutional AI.",
          es: "El problema de alineación aborda el desafío de hacer que sistemas de IA persigan objetivos beneficiosos y alineados con valores humanos, usando técnicas como RLHF (Aprendizaje por Refuerzo de Retroalimentación Humana) e IA constitucional.",
          de: "Das Alignment-Problem adressiert die Herausforderung KI-Systeme dazu zu bringen Ziele zu verfolgen die vorteilhaft und mit menschlichen Werten ausgerichtet sind, verwendet Techniken wie RLHF (Reinforcement Learning from Human Feedback) und konstitutionelle KI.",
          nl: "Het alignment probleem pakt de uitdaging aan om AI systemen doelen te laten nastreven die gunstig en uitgelijnd zijn met menselijke waarden, gebruikt technieken zoals RLHF (Reinforcement Learning from Human Feedback) en constitutionele AI."
        }
      },
      {
        question: {
          en: "What is emergent behavior in large language models?",
          es: "¿Qué es el comportamiento emergente en modelos de lenguaje grandes?",
          de: "Was ist emergentes Verhalten in großen Sprachmodellen?",
          nl: "Wat is emergent gedrag in grote taalmodellen?"
        },
        options: [
          { en: "Capabilities that arise spontaneously at certain model scales, not explicitly programmed or trained for", es: "Capacidades que surgen espontáneamente en ciertas escalas de modelo, no programadas o entrenadas explícitamente", de: "Fähigkeiten die spontan bei bestimmten Modellgrößen entstehen, nicht explizit programmiert oder trainiert", nl: "Capaciteiten die spontaan ontstaan bij bepaalde modelschalen, niet expliciet geprogrammeerd of getraind" },
          { en: "Behaviors that emerge during the first training epoch", es: "Comportamientos que emergen durante la primera época de entrenamiento", de: "Verhalten das während der ersten Trainingsepoche entsteht", nl: "Gedragingen die opkomen tijdens de eerste training epoch" },
          { en: "Emergency protocols for model failures", es: "Protocolos de emergencia para fallas del modelo", de: "Notfallprotokolle für Modellausfälle", nl: "Noodprotocollen voor modelfouten" },
          { en: "Quickly emerging trends in NLP research", es: "Tendencias que emergen rápidamente en investigación de PLN", de: "Schnell entstehende Trends in der NLP-Forschung", nl: "Snel opkomende trends in NLP-onderzoek" }
        ],
        correct: 0,
        explanation: {
          en: "Emergent behaviors like few-shot learning, chain-of-thought reasoning, and instruction following appear when models reach certain scales (typically billions of parameters), without being explicitly trained for these capabilities.",
          es: "Comportamientos emergentes como aprendizaje de pocos ejemplos, razonamiento de cadena de pensamiento, y seguimiento de instrucciones aparecen cuando los modelos alcanzan ciertas escalas (típicamente miles de millones de parámetros), sin ser entrenados explícitamente para estas capacidades.",
          de: "Emergente Verhalten wie Few-Shot Learning, Chain-of-Thought Reasoning und Instruktionsbefolgung erscheinen wenn Modelle bestimmte Größen erreichen (typisch Milliarden von Parametern), ohne explizit für diese Fähigkeiten trainiert zu werden.",
          nl: "Emergent gedrag zoals few-shot learning, chain-of-thought redeneren, en instructieopvolging verschijnt wanneer modellen bepaalde schalen bereiken (typisch miljarden parameters), zonder expliciet getraind te worden voor deze capaciteiten."
        }
      },
      {
        question: {
          en: "What is chain-of-thought (CoT) prompting?",
          es: "¿Qué es el prompting de cadena de pensamiento (CoT)?",
          de: "Was ist Chain-of-Thought (CoT) Prompting?",
          nl: "Wat is chain-of-thought (CoT) prompting?"
        },
        options: [
          { en: "Encouraging models to show their reasoning steps by providing examples of step-by-step problem solving", es: "Alentar modelos a mostrar sus pasos de razonamiento proporcionando ejemplos de resolución de problemas paso a paso", de: "Modelle ermutigen ihre Denkschritte zu zeigen durch Bereitstellung von Beispielen schrittweiser Problemlösung", nl: "Modellen aanmoedigen hun redeneerstappen te tonen door voorbeelden van stap-voor-stap probleemoplossing te geven" },
          { en: "Linking multiple prompts together in sequence", es: "Vincular múltiples prompts juntos en secuencia", de: "Mehrere Prompts in Sequenz verknüpfen", nl: "Meerdere prompts in volgorde aan elkaar koppelen" },
          { en: "Creating prompts based on thought patterns", es: "Crear prompts basados en patrones de pensamiento", de: "Prompts basierend auf Denkmustern erstellen", nl: "Prompts maken gebaseerd op denkpatronen" },
          { en: "Using chains of related concepts in prompts", es: "Usar cadenas de conceptos relacionados en prompts", de: "Ketten verwandter Konzepte in Prompts verwenden", nl: "Ketens van gerelateerde concepten gebruiken in prompts" }
        ],
        correct: 0,
        explanation: {
          en: "CoT prompting improves complex reasoning by demonstrating intermediate reasoning steps, helping models break down problems and arrive at better solutions through explicit reasoning chains.",
          es: "El prompting CoT mejora el razonamiento complejo demostrando pasos de razonamiento intermedios, ayudando a modelos a descomponer problemas y llegar a mejores soluciones a través de cadenas de razonamiento explícitas.",
          de: "CoT-Prompting verbessert komplexes Reasoning durch Demonstration von Zwischenschritten, hilft Modellen Probleme zu zerlegen und bessere Lösungen durch explizite Denkschritte zu erreichen.",
          nl: "CoT prompting verbetert complex redeneren door tussenliggende redeneerstappen te demonstreren, helpt modellen problemen op te breken en betere oplossingen te bereiken door expliciete redeneerketens."
        }
      },
      {
        question: {
          en: "What is reinforcement learning from human feedback (RLHF)?",
          es: "¿Qué es el aprendizaje por refuerzo con retroalimentación humana (RLHF)?",
          de: "Was ist Reinforcement Learning from Human Feedback (RLHF)?",
          nl: "Wat is reinforcement learning from human feedback (RLHF)?"
        },
        options: [
          { en: "Training language models using human preferences to align outputs with human values and improve safety", es: "Entrenar modelos de lenguaje usando preferencias humanas para alinear salidas con valores humanos y mejorar seguridad", de: "Sprachmodelle mit menschlichen Präferenzen trainieren um Ausgaben mit menschlichen Werten auszurichten und Sicherheit zu verbessern", nl: "Taalmodellen trainen met menselijke voorkeuren om outputs uit te lijnen met menselijke waarden en veiligheid te verbeteren" },
          { en: "Getting real-time feedback during model inference", es: "Obtener retroalimentación en tiempo real durante inferencia del modelo", de: "Echtzeit-Feedback während der Modellinferenz erhalten", nl: "Real-time feedback krijgen tijdens modelinferentie" },
          { en: "Using humans to label training data", es: "Usar humanos para etiquetar datos de entrenamiento", de: "Menschen verwenden um Trainingsdaten zu beschriften", nl: "Mensen gebruiken om trainingsgegevens te labelen" },
          { en: "Learning from human error patterns", es: "Aprender de patrones de error humano", de: "Von menschlichen Fehlermustern lernen", nl: "Leren van menselijke foutpatronen" }
        ],
        correct: 0,
        explanation: {
          en: "RLHF involves training a reward model on human preferences, then using reinforcement learning to optimize the language model against this reward model, making outputs more helpful, harmless, and honest.",
          es: "RLHF implica entrenar un modelo de recompensa en preferencias humanas, luego usar aprendizaje por refuerzo para optimizar el modelo de lenguaje contra este modelo de recompensa, haciendo salidas más útiles, inofensivas y honestas.",
          de: "RLHF beinhaltet das Training eines Belohnungsmodells auf menschlichen Präferenzen, dann Reinforcement Learning verwenden um das Sprachmodell gegen dieses Belohnungsmodell zu optimieren, macht Ausgaben hilfreicher, harmloser und ehrlicher.",
          nl: "RLHF houdt in het trainen van een beloningsmodel op menselijke voorkeuren, dan reinforcement learning gebruiken om het taalmodel te optimaliseren tegen dit beloningsmodel, maakt outputs nuttiger, ongevaarlijker en eerlijker."
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
          { en: "Training AI systems to follow a set of principles or constitution to ensure safe and beneficial behavior", es: "Entrenar sistemas de IA para seguir un conjunto de principios o constitución para asegurar comportamiento seguro y beneficioso", de: "KI-Systeme trainieren um einer Reihe von Prinzipien oder Verfassung zu folgen um sicheres und vorteilhaftes Verhalten zu gewährleisten", nl: "AI-systemen trainen om een set principes of grondwet te volgen om veilig en gunstig gedrag te waarborgen" },
          { en: "AI systems designed for government use", es: "Sistemas de IA diseñados para uso gubernamental", de: "KI-Systeme für Regierungsgebrauch entwickelt", nl: "AI-systemen ontworpen voor overheidsgebruik" },
          { en: "AI that follows constitutional law", es: "IA que sigue la ley constitucional", de: "KI die Verfassungsrecht folgt", nl: "AI die grondwettelijk recht volgt" },
          { en: "Building AI systems with legal frameworks", es: "Construir sistemas de IA con marcos legales", de: "KI-Systeme mit rechtlichen Rahmen aufbauen", nl: "AI-systemen bouwen met juridische kaders" }
        ],
        correct: 0,
        explanation: {
          en: "Constitutional AI trains models to self-critique and revise their outputs according to a set of principles, reducing the need for human oversight while maintaining alignment with human values.",
          es: "La IA constitucional entrena modelos para auto-criticarse y revisar sus salidas según un conjunto de principios, reduciendo la necesidad de supervisión humana mientras mantiene alineación con valores humanos.",
          de: "Konstitutionelle KI trainiert Modelle sich selbst zu kritisieren und ihre Ausgaben nach Prinzipien zu revidieren, reduziert den Bedarf an menschlicher Aufsicht während Ausrichtung mit menschlichen Werten beibehalten wird.",
          nl: "Constitutionele AI traint modellen om zichzelf te bekritiseren en hun outputs te herzien volgens een set principes, vermindert de behoefte aan menselijk toezicht terwijl uitlijning met menselijke waarden behouden blijft."
        }
      },
      {
        question: {
          en: "What is in-context learning in large language models?",
          es: "¿Qué es el aprendizaje en contexto en modelos de lenguaje grandes?",
          de: "Was ist In-Context Learning in großen Sprachmodellen?",
          nl: "Wat is in-context learning in grote taalmodellen?"
        },
        options: [
          { en: "The ability to learn and adapt to new tasks using only examples provided in the input context, without parameter updates", es: "La capacidad de aprender y adaptarse a nuevas tareas usando solo ejemplos proporcionados en el contexto de entrada, sin actualizaciones de parámetros", de: "Die Fähigkeit neue Aufgaben zu lernen und sich anzupassen nur mit Beispielen im Eingabekontext, ohne Parameterupdates", nl: "Het vermogen om nieuwe taken te leren en zich aan te passen met alleen voorbeelden in de invoercontext, zonder parameterupdates" },
          { en: "Learning about the context of conversations", es: "Aprender sobre el contexto de conversaciones", de: "Den Kontext von Gesprächen lernen", nl: "Leren over de context van gesprekken" },
          { en: "Training models on contextual embeddings", es: "Entrenar modelos en embeddings contextuales", de: "Modelle auf kontextuellen Embeddings trainieren", nl: "Modellen trainen op contextuele embeddings" },
          { en: "Learning within specific application contexts", es: "Aprender dentro de contextos de aplicación específicos", de: "Lernen innerhalb spezifischer Anwendungskontexte", nl: "Leren binnen specifieke toepassingscontexten" }
        ],
        correct: 0,
        explanation: {
          en: "In-context learning allows LLMs to perform new tasks by conditioning on task demonstrations within their context window, showing remarkable adaptation without weight updates.",
          es: "El aprendizaje en contexto permite a LLMs realizar nuevas tareas condicionándose en demostraciones de tareas dentro de su ventana de contexto, mostrando adaptación notable sin actualizaciones de pesos.",
          de: "In-Context Learning ermöglicht LLMs neue Aufgaben auszuführen durch Konditionierung auf Aufgabendemonstrativen innerhalb ihres Kontextfensters, zeigt bemerkenswerte Anpassung ohne Gewichtsupdates.",
          nl: "In-context learning stelt LLMs in staat nieuwe taken uit te voeren door te conditioneren op taakdemonstraties binnen hun contextvenster, toont opmerkelijke aanpassing zonder gewichtsupdates."
        }
      },
      {
        question: {
          en: "What are foundation models?",
          es: "¿Qué son los modelos fundacionales?",
          de: "Was sind Foundation Models?",
          nl: "Wat zijn foundation models?"
        },
        options: [
          { en: "Large-scale pre-trained models that serve as a base for adapting to many downstream tasks across different domains", es: "Modelos pre-entrenados a gran escala que sirven como base para adaptarse a muchas tareas posteriores en diferentes dominios", de: "Großskalige vortrainierte Modelle die als Basis dienen für Anpassung an viele nachgelagerte Aufgaben über verschiedene Domänen", nl: "Grootschalige voorgetrainde modellen die dienen als basis voor aanpassing aan veel downstream-taken over verschillende domeinen" },
          { en: "The first models developed in a research field", es: "Los primeros modelos desarrollados en un campo de investigación", de: "Die ersten Modelle die in einem Forschungsbereich entwickelt wurden", nl: "De eerste modellen ontwikkeld in een onderzoeksgebied" },
          { en: "Models built on foundational mathematical principles", es: "Modelos construidos en principios matemáticos fundamentales", de: "Modelle basierend auf grundlegenden mathematischen Prinzipien", nl: "Modellen gebouwd op fundamentele wiskundige principes" },
          { en: "Basic models that require significant additional training", es: "Modelos básicos que requieren entrenamiento adicional significativo", de: "Grundmodelle die erhebliches zusätzliches Training benötigen", nl: "Basismodellen die aanzienlijke aanvullende training vereisen" }
        ],
        correct: 0,
        explanation: {
          en: "Foundation models like GPT, BERT, and CLIP are trained on broad data and can be adapted to various tasks, serving as a foundation for numerous applications across language, vision, and other modalities.",
          es: "Los modelos fundacionales como GPT, BERT y CLIP se entrenan en datos amplios y pueden adaptarse a varias tareas, sirviendo como fundación para numerosas aplicaciones en lenguaje, visión y otras modalidades.",
          de: "Foundation Models wie GPT, BERT und CLIP werden auf breiten Daten trainiert und können an verschiedene Aufgaben angepasst werden, dienen als Grundlage für zahlreiche Anwendungen über Sprache, Vision und andere Modalitäten.",
          nl: "Foundation models zoals GPT, BERT en CLIP worden getraind op brede gegevens en kunnen worden aangepast aan verschillende taken, dienen als foundation voor talrijke toepassingen over taal, vision en andere modaliteiten."
        }
      },
      {
        question: {
          en: "What is multimodal AI in the context of language models?",
          es: "¿Qué es la IA multimodal en el contexto de modelos de lenguaje?",
          de: "Was ist multimodale KI im Kontext von Sprachmodellen?",
          nl: "Wat is multimodale AI in de context van taalmodellen?"
        },
        options: [
          { en: "AI systems that can process and generate content across multiple modalities like text, images, audio, and video", es: "Sistemas de IA que pueden procesar y generar contenido a través de múltiples modalidades como texto, imágenes, audio y video", de: "KI-Systeme die Inhalte über mehrere Modalitäten wie Text, Bilder, Audio und Video verarbeiten und generieren können", nl: "AI-systemen die inhoud kunnen verwerken en genereren over meerdere modaliteiten zoals tekst, afbeeldingen, audio en video" },
          { en: "Models that work in multiple programming languages", es: "Modelos que funcionan en múltiples lenguajes de programación", de: "Modelle die in mehreren Programmiersprachen funktionieren", nl: "Modellen die werken in meerdere programmeertalen" },
          { en: "AI with multiple operating modes", es: "IA con múltiples modos operativos", de: "KI mit mehreren Betriebsmodi", nl: "AI met meerdere operationele modi" },
          { en: "Language models trained on multiple datasets", es: "Modelos de lenguaje entrenados en múltiples conjuntos de datos", de: "Sprachmodelle auf mehreren Datensätzen trainiert", nl: "Taalmodellen getraind op meerdere datasets" }
        ],
        correct: 0,
        explanation: {
          en: "Multimodal AI systems like GPT-4V, DALL-E, and CLIP can understand and generate content across different modalities, enabling applications that combine language, vision, and other sensory inputs.",
          es: "Los sistemas de IA multimodal como GPT-4V, DALL-E y CLIP pueden entender y generar contenido a través de diferentes modalidades, habilitando aplicaciones que combinan lenguaje, visión y otras entradas sensoriales.",
          de: "Multimodale KI-Systeme wie GPT-4V, DALL-E und CLIP können Inhalte über verschiedene Modalitäten verstehen und generieren, ermöglichen Anwendungen die Sprache, Vision und andere sensorische Eingaben kombinieren.",
          nl: "Multimodale AI-systemen zoals GPT-4V, DALL-E en CLIP kunnen inhoud begrijpen en genereren over verschillende modaliteiten, maken toepassingen mogelijk die taal, vision en andere sensorische inputs combineren."
        }
      },
      {
        question: {
          en: "What is model scaling in the context of language models?",
          es: "¿Qué es el escalamiento de modelos en el contexto de modelos de lenguaje?",
          de: "Was ist Modellskalierung im Kontext von Sprachmodellen?",
          nl: "Wat is modelschaling in de context van taalmodellen?"
        },
        options: [
          { en: "Increasing model size (parameters), training data, or compute to improve performance following predictable scaling laws", es: "Aumentar tamaño del modelo (parámetros), datos de entrenamiento, o cómputo para mejorar rendimiento siguiendo leyes de escalamiento predecibles", de: "Modellgröße (Parameter), Trainingsdaten oder Berechnung erhöhen um Leistung zu verbessern nach vorhersagbaren Skalierungsgesetzen", nl: "Modelgrootte (parameters), trainingsgegevens, of rekenkracht verhogen om prestaties te verbeteren volgens voorspelbare schalingswetten" },
          { en: "Scaling models to work on different hardware", es: "Escalar modelos para trabajar en diferentes hardware", de: "Modelle skalieren um auf verschiedener Hardware zu funktionieren", nl: "Modellen schalen om te werken op verschillende hardware" },
          { en: "Adjusting model complexity for different tasks", es: "Ajustar complejidad del modelo para diferentes tareas", de: "Modellkomplexität für verschiedene Aufgaben anpassen", nl: "Modelcomplexiteit aanpassen voor verschillende taken" },
          { en: "Resizing input and output dimensions", es: "Redimensionar dimensiones de entrada y salida", de: "Eingabe- und Ausgabedimensionen ändern", nl: "Invoer- en uitvoerdimensies aanpassen" }
        ],
        correct: 0,
        explanation: {
          en: "Model scaling follows predictable laws where increasing parameters, data, and compute leads to better performance, driving the development of increasingly large models like GPT-4, PaLM, and others.",
          es: "El escalamiento de modelos sigue leyes predecibles donde aumentar parámetros, datos y cómputo lleva a mejor rendimiento, impulsando el desarrollo de modelos cada vez más grandes como GPT-4, PaLM y otros.",
          de: "Modellskalierung folgt vorhersagbaren Gesetzen wo Erhöhung von Parametern, Daten und Berechnung zu besserer Leistung führt, treibt Entwicklung zunehmend großer Modelle wie GPT-4, PaLM und andere an.",
          nl: "Modelschaling volgt voorspelbare wetten waarbij het verhogen van parameters, gegevens en rekenkracht tot betere prestaties leidt, drijft de ontwikkeling aan van steeds grotere modellen zoals GPT-4, PaLM en anderen."
        }
      },
      {
        question: {
          en: "What is hallucination in language models?",
          es: "¿Qué es la alucinación en modelos de lenguaje?",
          de: "Was ist Halluzination in Sprachmodellen?",
          nl: "Wat is hallucinatie in taalmodellen?"
        },
        options: [
          { en: "When models generate plausible-sounding but factually incorrect or fabricated information", es: "Cuando modelos generan información que suena plausible pero es factualmente incorrecta o fabricada", de: "Wenn Modelle plausibel klingende aber faktisch falsche oder erfundene Informationen generieren", nl: "Wanneer modellen plausibel klinkende maar feitelijk onjuiste of verzonnen informatie genereren" },
          { en: "Models experiencing visual distortions", es: "Modelos experimentando distorsiones visuales", de: "Modelle die visuelle Verzerrungen erfahren", nl: "Modellen die visuele verstoringen ervaren" },
          { en: "Generating creative or imaginative content", es: "Generar contenido creativo o imaginativo", de: "Kreativen oder fantasievollen Inhalt generieren", nl: "Creatieve of fantasierijke inhoud genereren" },
          { en: "Random outputs due to model errors", es: "Salidas aleatorias debido a errores del modelo", de: "Zufällige Ausgaben aufgrund von Modellfehlern", nl: "Willekeurige outputs door modelfouten" }
        ],
        correct: 0,
        explanation: {
          en: "Hallucination is a major challenge where language models confidently generate false information, making techniques like retrieval augmentation and fact-checking crucial for reliable AI systems.",
          es: "La alucinación es un desafío mayor donde modelos de lenguaje generan con confianza información falsa, haciendo técnicas como aumento por recuperación y verificación de hechos cruciales para sistemas de IA confiables.",
          de: "Halluzination ist eine große Herausforderung wo Sprachmodelle selbstbewusst falsche Informationen generieren, macht Techniken wie Retrieval Augmentation und Fact-Checking entscheidend für zuverlässige KI-Systeme.",
          nl: "Hallucinatie is een grote uitdaging waarbij taalmodellen vol vertrouwen valse informatie genereren, maakt technieken zoals retrieval augmentation en fact-checking cruciaal voor betrouwbare AI-systemen."
        }
      },
      {
        question: {
          en: "What is model compression in the context of large language models?",
          es: "¿Qué es la compresión de modelos en el contexto de modelos de lenguaje grandes?",
          de: "Was ist Modellkompression im Kontext großer Sprachmodelle?",
          nl: "Wat is modelcompressie in de context van grote taalmodellen?"
        },
        options: [
          { en: "Techniques to reduce model size and computational requirements while maintaining performance through methods like quantization, pruning, and distillation", es: "Técnicas para reducir tamaño del modelo y requisitos computacionales mientras mantienen rendimiento a través de métodos como cuantización, poda y destilación", de: "Techniken um Modellgröße und Rechenanforderungen zu reduzieren während Leistung beibehalten wird durch Methoden wie Quantisierung, Pruning und Destillation", nl: "Technieken om modelgrootte en computationele vereisten te verminderen terwijl prestaties behouden blijven door methoden zoals kwantisatie, pruning en distillatie" },
          { en: "Compressing training data to reduce storage", es: "Comprimir datos de entrenamiento para reducir almacenamiento", de: "Trainingsdaten komprimieren um Speicher zu reduzieren", nl: "Trainingsgegevens comprimeren om opslag te verminderen" },
          { en: "Reducing the length of model outputs", es: "Reducir la longitud de salidas del modelo", de: "Die Länge der Modellausgaben reduzieren", nl: "De lengte van modeloutputs verminderen" },
          { en: "Simplifying model architecture design", es: "Simplificar diseño de arquitectura del modelo", de: "Modellarchitektur-Design vereinfachen", nl: "Modelarchitectuurontwerp vereenvoudigen" }
        ],
        correct: 0,
        explanation: {
          en: "Model compression makes large language models more efficient and deployable through techniques like quantization (reducing precision), pruning (removing parameters), and knowledge distillation (training smaller student models).",
          es: "La compresión de modelos hace modelos de lenguaje grandes más eficientes y desplegables a través de técnicas como cuantización (reducir precisión), poda (remover parámetros), y destilación de conocimiento (entrenar modelos estudiante más pequeños).",
          de: "Modellkompression macht große Sprachmodelle effizienter und einsetzbarer durch Techniken wie Quantisierung (Präzision reduzieren), Pruning (Parameter entfernen) und Wissensdestillation (kleinere Studenten-Modelle trainieren).",
          nl: "Modelcompressie maakt grote taalmodellen efficiënter en implementeerbaar door technieken zoals kwantisatie (precisie verminderen), pruning (parameters verwijderen), en kennisdistillatie (kleinere studentmodellen trainen)."
        }
      },
      {
        question: {
          en: "What is instruction tuning in large language models?",
          es: "¿Qué es el ajuste de instrucciones en modelos de lenguaje grandes?",
          de: "Was ist Instruction Tuning in großen Sprachmodellen?",
          nl: "Wat is instruction tuning in grote taalmodellen?"
        },
        options: [
          { en: "Fine-tuning models on diverse instruction-following datasets to improve their ability to understand and follow natural language instructions", es: "Ajustar modelos en conjuntos de datos diversos de seguimiento de instrucciones para mejorar su capacidad de entender y seguir instrucciones en lenguaje natural", de: "Modelle auf diversen instruktionsfolgenden Datensätzen feinabstimmen um ihre Fähigkeit zu verbessern natürlichsprachliche Anweisungen zu verstehen und zu befolgen", nl: "Modellen fine-tunen op diverse instructievolgingsdatasets om hun vermogen te verbeteren natuurlijke taalinstructies te begrijpen en te volgen" },
          { en: "Teaching models to follow programming instructions", es: "Enseñar modelos a seguir instrucciones de programación", de: "Modelle lehren Programmieranweisungen zu folgen", nl: "Modellen leren programmeringsinstructies te volgen" },
          { en: "Optimizing model training instructions", es: "Optimizar instrucciones de entrenamiento del modelo", de: "Modelltrainingsanweisungen optimieren", nl: "Modeltrainingsinstructies optimaliseren" },
          { en: "Providing better documentation for model use", es: "Proporcionar mejor documentación para uso del modelo", de: "Bessere Dokumentation für Modellnutzung bereitstellen", nl: "Betere documentatie bieden voor modelgebruik" }
        ],
        correct: 0,
        explanation: {
          en: "Instruction tuning trains models on datasets containing instruction-response pairs, making them better at following user instructions and performing tasks as requested, which is crucial for practical AI assistants.",
          es: "El ajuste de instrucciones entrena modelos en conjuntos de datos que contienen pares instrucción-respuesta, haciéndolos mejores en seguir instrucciones de usuario y realizar tareas según se solicita, lo cual es crucial para asistentes de IA prácticos.",
          de: "Instruction Tuning trainiert Modelle auf Datensätzen mit Instruktion-Antwort-Paaren, macht sie besser im Befolgen von Benutzeranweisungen und Ausführen von Aufgaben wie angefordert, was für praktische KI-Assistenten entscheidend ist.",
          nl: "Instruction tuning traint modellen op datasets met instructie-respons paren, maakt ze beter in het volgen van gebruikersinstructies en het uitvoeren van taken zoals gevraagd, wat cruciaal is voor praktische AI-assistenten."
        }
      },
      {
        question: {
          en: "What is the difference between parametric and non-parametric knowledge in language models?",
          es: "¿Cuál es la diferencia entre conocimiento paramétrico y no paramétrico en modelos de lenguaje?",
          de: "Was ist der Unterschied zwischen parametrischem und nicht-parametrischem Wissen in Sprachmodellen?",
          nl: "Wat is het verschil tussen parametrische en niet-parametrische kennis in taalmodellen?"
        },
        options: [
          { en: "Parametric knowledge is stored in model weights, non-parametric knowledge is retrieved from external sources during inference", es: "El conocimiento paramétrico se almacena en pesos del modelo, el conocimiento no paramétrico se recupera de fuentes externas durante inferencia", de: "Parametrisches Wissen wird in Modellgewichten gespeichert, nicht-parametrisches Wissen wird während der Inferenz aus externen Quellen abgerufen", nl: "Parametrische kennis wordt opgeslagen in modelgewichten, niet-parametrische kennis wordt opgehaald uit externe bronnen tijdens inferentie" },
          { en: "Parametric models have more parameters than non-parametric ones", es: "Los modelos paramétricos tienen más parámetros que los no paramétricos", de: "Parametrische Modelle haben mehr Parameter als nicht-parametrische", nl: "Parametrische modellen hebben meer parameters dan niet-parametrische" },
          { en: "Parametric knowledge is more accurate than non-parametric", es: "El conocimiento paramétrico es más preciso que el no paramétrico", de: "Parametrisches Wissen ist genauer als nicht-parametrisches", nl: "Parametrische kennis is nauwkeuriger dan niet-parametrische" },
          { en: "Non-parametric models cannot learn from data", es: "Los modelos no paramétricos no pueden aprender de datos", de: "Nicht-parametrische Modelle können nicht aus Daten lernen", nl: "Niet-parametrische modellen kunnen niet leren van gegevens" }
        ],
        correct: 0,
        explanation: {
          en: "Parametric knowledge is baked into model weights during training and can become outdated. Non-parametric approaches like RAG retrieve fresh information from external knowledge bases, providing more current and factual responses.",
          es: "El conocimiento paramétrico se integra en los pesos del modelo durante entrenamiento y puede quedar desactualizado. Los enfoques no paramétricos como RAG recuperan información fresca de bases de conocimiento externas, proporcionando respuestas más actuales y factuales.",
          de: "Parametrisches Wissen wird während des Trainings in Modellgewichte eingebacken und kann veralten. Nicht-parametrische Ansätze wie RAG rufen frische Informationen aus externen Wissensbasen ab, bieten aktuellere und faktischere Antworten.",
          nl: "Parametrische kennis wordt ingebakken in modelgewichten tijdens training en kan verouderd raken. Niet-parametrische benaderingen zoals RAG halen verse informatie op uit externe kennisbases, bieden meer actuele en feitelijke reacties."
        }
      },
      {
        question: {
          en: "What is model alignment evaluation and why is it important?",
          es: "¿Qué es la evaluación de alineación de modelos y por qué es importante?",
          de: "Was ist Modell-Alignment-Bewertung und warum ist sie wichtig?",
          nl: "Wat is model alignment evaluatie en waarom is het belangrijk?"
        },
        options: [
          { en: "Assessing whether AI systems behave according to human values and intentions, measuring safety, helpfulness, and harmlessness", es: "Evaluar si los sistemas de IA se comportan según valores e intenciones humanas, midiendo seguridad, utilidad e inocuidad", de: "Bewerten ob KI-Systeme sich nach menschlichen Werten und Absichten verhalten, misst Sicherheit, Hilfsbereitschaft und Harmlosigkeit", nl: "Beoordelen of AI-systemen zich gedragen volgens menselijke waarden en intenties, meet veiligheid, behulpzaamheid en onschadelijkheid" },
          { en: "Checking if model weights are properly aligned", es: "Verificar si los pesos del modelo están apropiadamente alineados", de: "Prüfen ob Modellgewichte ordnungsgemäß ausgerichtet sind", nl: "Controleren of modelgewichten correct uitgelijnd zijn" },
          { en: "Measuring model accuracy on benchmark tasks", es: "Medir precisión del modelo en tareas de referencia", de: "Modellgenauigkeit bei Benchmark-Aufgaben messen", nl: "Modelnauwkeurigheid meten op benchmark-taken" },
          { en: "Aligning model outputs with expected formats", es: "Alinear salidas del modelo con formatos esperados", de: "Modellausgaben mit erwarteten Formaten ausrichten", nl: "Modeloutputs uitlijnen met verwachte formaten" }
        ],
        correct: 0,
        explanation: {
          en: "Model alignment evaluation uses benchmarks and human evaluation to assess whether AI systems are helpful, harmless, and honest, critical for ensuring AI safety and beneficial deployment.",
          es: "La evaluación de alineación de modelos usa benchmarks y evaluación humana para evaluar si los sistemas de IA son útiles, inofensivos y honestos, crítico para asegurar seguridad de IA y despliegue beneficioso.",
          de: "Modell-Alignment-Bewertung verwendet Benchmarks und menschliche Bewertung um zu beurteilen ob KI-Systeme hilfreich, harmlos und ehrlich sind, kritisch für KI-Sicherheit und vorteilhafte Bereitstellung.",
          nl: "Model alignment evaluatie gebruikt benchmarks en menselijke evaluatie om te beoordelen of AI-systemen behulpzaam, onschadelijk en eerlijk zijn, kritiek voor het waarborgen van AI-veiligheid en gunstige implementatie."
        }
      },
      {
        question: {
          en: "What are AI safety considerations specific to large language models?",
          es: "¿Cuáles son las consideraciones de seguridad de IA específicas para modelos de lenguaje grandes?",
          de: "Was sind KI-Sicherheitsüberlegungen spezifisch für große Sprachmodelle?",
          nl: "Wat zijn AI-veiligheidsoverwegingen specifiek voor grote taalmodellen?"
        },
        options: [
          { en: "Risks include misinformation generation, bias amplification, misuse for harmful content, and potential for deception or manipulation", es: "Los riesgos incluyen generación de desinformación, amplificación de sesgos, mal uso para contenido dañino, y potencial para engaño o manipulación", de: "Risiken umfassen Fehlinformationsgenerierung, Bias-Verstärkung, Missbrauch für schädlichen Inhalt und Potenzial für Täuschung oder Manipulation", nl: "Risico's omvatten desinformatiegeneratie, bias-versterking, misbruik voor schadelijke inhoud, en potentieel voor misleiding of manipulatie" },
          { en: "Only concerns about computational resource usage", es: "Solo preocupaciones sobre uso de recursos computacionales", de: "Nur Bedenken über Rechenressourcennutzung", nl: "Alleen zorgen over computationeel resourcegebruik" },
          { en: "Primarily issues with model training speed", es: "Principalmente problemas con velocidad de entrenamiento del modelo", de: "Hauptsächlich Probleme mit Modelltrainingsgeschwindigkeit", nl: "Voornamelijk problemen met modeltrainingsnelheid" },
          { en: "Safety is not a concern for language models", es: "La seguridad no es una preocupación para modelos de lenguaje", de: "Sicherheit ist kein Anliegen für Sprachmodelle", nl: "Veiligheid is geen zorg voor taalmodellen" }
        ],
        correct: 0,
        explanation: {
          en: "LLM safety involves addressing risks like generating false information, perpetuating societal biases, enabling harmful applications, and ensuring models remain controllable and aligned with human values as they become more capable.",
          es: "La seguridad de LLM implica abordar riesgos como generar información falsa, perpetuar sesgos sociales, habilitar aplicaciones dañinas, y asegurar que los modelos permanezcan controlables y alineados con valores humanos mientras se vuelven más capaces.",
          de: "LLM-Sicherheit beinhaltet die Behandlung von Risiken wie Generierung falscher Informationen, Perpetuierung gesellschaftlicher Vorurteile, Ermöglichung schädlicher Anwendungen und Sicherstellung dass Modelle kontrollierbar und mit menschlichen Werten ausgerichtet bleiben während sie fähiger werden.",
          nl: "LLM veiligheid houdt in het aanpakken van risico's zoals het genereren van valse informatie, het bestendigen van maatschappelijke vooroordelen, het mogelijk maken van schadelijke toepassingen, en ervoor zorgen dat modellen controleerbaar en uitgelijnd blijven met menselijke waarden terwijl ze capabeler worden."
        }
      },
      {
        question: {
          en: "What is the transformer architecture and why is it fundamental to modern language models?",
          es: "¿Qué es la arquitectura transformer y por qué es fundamental para modelos de lenguaje modernos?",
          de: "Was ist die Transformer-Architektur und warum ist sie fundamental für moderne Sprachmodelle?",
          nl: "Wat is de transformer architectuur en waarom is het fundamenteel voor moderne taalmodellen?"
        },
        options: [
          { en: "A neural architecture using self-attention mechanisms that can process sequences in parallel, enabling efficient training and better long-range dependencies", es: "Una arquitectura neuronal usando mecanismos de auto-atención que puede procesar secuencias en paralelo, habilitando entrenamiento eficiente y mejores dependencias de largo alcance", de: "Eine neuronale Architektur die Selbstaufmerksamkeitsmechanismen verwendet um Sequenzen parallel zu verarbeiten, ermöglicht effizientes Training und bessere weitreichende Abhängigkeiten", nl: "Een neurale architectuur die zelf-aandachtmechanismen gebruikt die sequenties parallel kan verwerken, maakt efficiënte training en betere lange-afstand afhankelijkheden mogelijk" },
          { en: "A method for transforming text between different formats", es: "Un método para transformar texto entre diferentes formatos", de: "Eine Methode um Text zwischen verschiedenen Formaten zu transformieren", nl: "Een methode voor het transformeren van tekst tussen verschillende formaten" },
          { en: "A technique for compressing language models", es: "Una técnica para comprimir modelos de lenguaje", de: "Eine Technik zur Komprimierung von Sprachmodellen", nl: "Een techniek voor het comprimeren van taalmodellen" },
          { en: "A programming framework for NLP applications", es: "Un framework de programación para aplicaciones de PLN", de: "Ein Programmierungsframework für NLP-Anwendungen", nl: "Een programmeerframework voor NLP-toepassingen" }
        ],
        correct: 0,
        explanation: {
          en: "The transformer architecture revolutionized NLP by replacing recurrent connections with self-attention, enabling parallel processing and better modeling of long-range dependencies. It forms the foundation of models like BERT, GPT, and T5.",
          es: "La arquitectura transformer revolucionó PLN reemplazando conexiones recurrentes con auto-atención, habilitando procesamiento paralelo y mejor modelado de dependencias de largo alcance. Forma la base de modelos como BERT, GPT y T5.",
          de: "Die Transformer-Architektur revolutionierte NLP durch Ersetzen rekurrenter Verbindungen mit Selbstaufmerksamkeit, ermöglicht parallele Verarbeitung und bessere Modellierung weitreichender Abhängigkeiten. Sie bildet die Grundlage von Modellen wie BERT, GPT und T5.",
          nl: "De transformer architectuur heeft NLP gerevolutioneerd door terugkerende verbindingen te vervangen met zelf-aandacht, maakt parallelle verwerking en betere modellering van lange-afstand afhankelijkheden mogelijk. Het vormt de basis van modellen zoals BERT, GPT en T5."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level9;
  } else if (typeof window !== 'undefined') {
    window.level9 = level9;
  }
})();
