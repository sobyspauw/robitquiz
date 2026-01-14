// Deep Learning Quiz - Level 10: Expert-Level Deep Learning Mastery
(function() {
  const level10 = {
    name: {
      en: "Deep Learning Level 10",
      es: "Aprendizaje Profundo Nivel 10",
      de: "Deep Learning Stufe 10",
      nl: "Deep Learning Level 10"
    },
    questions: [
      {
        question: {
          en: "What is the significance of emergent abilities in large language models and foundation models?",
          es: "¿Cuál es la significancia de las habilidades emergentes en modelos de lenguaje grandes y modelos de fundación?",
          de: "Was ist die Bedeutung emergenter Fähigkeiten in großen Sprachmodellen und Foundation Models?",
          nl: "Wat is de betekenis van emergente vaardigheden in grote taalmodellen en foundation models?"
        },
        options: [
          { en: "Capabilities that appear at scale that weren't present in smaller models, enabling complex reasoning and multi-step tasks", es: "Capacidades que aparecen a escala ausentes en modelos pequeños, permiten razonamiento complejo y tareas multi-paso", de: "Fähigkeiten die bei großem Maßstab auftreten die in kleineren Modellen fehlten, ermöglichen komplexes Reasoning", nl: "Capaciteiten die verschijnen op schaal die niet aanwezig waren in kleinere modellen, maken complex redeneren en meerstaps taken mogelijk" },
          { en: "Abilities that emerge during training without supervision", es: "Habilidades que emergen durante entrenamiento sin supervisión", de: "Fähigkeiten die während des Trainings ohne Überwachung entstehen", nl: "Vaardigheden die ontstaan tijdens training zonder supervisie" },
          { en: "Emergency response capabilities in AI systems", es: "Capacidades de respuesta de emergencia en sistemas de IA", de: "Notfallreaktionsfähigkeiten in KI-Systemen", nl: "Noodrespons capaciteiten in AI systemen" },
          { en: "New abilities that emerge from model fine-tuning", es: "Nuevas habilidades que emergen del ajuste fino de modelos", de: "Neue Fähigkeiten die aus Modell-Feinabstimmung entstehen", nl: "Nieuwe vaardigheden die ontstaan uit model fine-tuning" }
        ],
        correct: 0,
        explanation: {
          en: "Emergent abilities like few-shot learning, chain-of-thought reasoning, and instruction following appear suddenly at certain model scales, suggesting phase transitions in AI capabilities.",
          es: "Habilidades emergentes como aprendizaje de pocos ejemplos, razonamiento en cadena de pensamiento y seguimiento de instrucciones aparecen súbitamente en ciertas escalas de modelo, sugiriendo transiciones de fase en capacidades de IA.",
          de: "Emergente Fähigkeiten wie Few-Shot Learning, Chain-of-Thought Reasoning und Instruktionsbefolgung erscheinen plötzlich bei bestimmten Modellgrößen, deuten auf Phasenübergänge in KI-Fähigkeiten hin.",
          nl: "Emergente vaardigheden zoals few-shot learning, chain-of-thought redeneren en instructie volgen verschijnen plotseling bij bepaalde modelschalen, suggereren fasetransities in AI capaciteiten."
        }
      },
      {
        question: {
          en: "What is catastrophic forgetting and what are the main approaches to mitigate it in continual learning?",
          es: "¿Qué es el olvido catastrófico y cuáles son los principales enfoques para mitigarlo en aprendizaje continuo?",
          de: "Was ist catastrophic forgetting und was sind die Hauptansätze es im kontinuierlichen Lernen zu mildern?",
          nl: "Wat is catastrophic forgetting en wat zijn de hoofdbenaderingen om het te verminderen in continual learning?"
        },
        options: [
          { en: "Loss of previously learned knowledge when learning new tasks, addressed by elastic weight consolidation, replay buffers, or architectural solutions", es: "Pérdida de conocimiento al aprender nuevas tareas, abordado por consolidación de pesos, replay buffers o soluciones arquitectónicas", de: "Verlust gelernten Wissens beim Lernen neuer Aufgaben, adressiert durch Gewichtskonsolidierung, Replay-Puffer oder Lösungen", nl: "Verlies van kennis bij leren van nieuwe taken, aangepakt door gewichtsconsolidatie, replay buffers of architecturale oplossingen" },
          { en: "Catastrophic failure of neural networks during training", es: "Falla catastrófica de redes neuronales durante entrenamiento", de: "Katastrophales Versagen neuronaler Netzwerke während des Trainings", nl: "Catastrofaal falen van neurale netwerken tijdens training" },
          { en: "Forgetting how to perform basic neural operations", es: "Olvidar cómo realizar operaciones neuronales básicas", de: "Vergessen wie grundlegende neuronale Operationen durchgeführt werden", nl: "Vergeten hoe basis neurale operaties uit te voeren" },
          { en: "Memory overflow causing system crashes", es: "Desbordamiento de memoria causando fallos del sistema", de: "Speicherüberlauf der Systemabstürze verursacht", nl: "Geheugenoverloop die systeemcrashes veroorzaakt" }
        ],
        correct: 0,
        explanation: {
          en: "Catastrophic forgetting is a fundamental challenge in AI where neural networks forget old tasks when learning new ones, requiring sophisticated techniques to maintain lifelong learning capabilities.",
          es: "El olvido catastrófico es un desafío fundamental en IA donde redes neuronales olvidan tareas antigas al aprender nuevas, requiriendo técnicas sofisticadas para mantener capacidades de aprendizaje de por vida.",
          de: "Catastrophic Forgetting ist eine fundamentale Herausforderung in der KI wo neuronale Netzwerke alte Aufgaben vergessen beim Lernen neuer, erfordert ausgeklügelte Techniken um lebenslange Lernfähigkeiten zu erhalten.",
          nl: "Catastrophic forgetting is een fundamentele uitdaging in AI waarbij neurale netwerken oude taken vergeten bij het leren van nieuwe, vereist geavanceerde technieken om levenslange leercapaciteiten te behouden."
        }
      },
      {
        question: {
          en: "What is the alignment problem in AI and why is it critical for advanced deep learning systems?",
          es: "¿Cuál es el problema de alineación en IA y por qué es crítico para sistemas avanzados de aprendizaje profundo?",
          de: "Was ist das Alignment-Problem in der KI und warum ist es kritisch für fortgeschrittene Deep Learning Systeme?",
          nl: "Wat is het alignment probleem in AI en waarom is het kritiek voor geavanceerde deep learning systemen?"
        },
        options: [
          { en: "Ensuring AI systems pursue goals that are aligned with human values and intentions, preventing unintended harmful behaviors", es: "Asegurar que sistemas IA persigan objetivos alineados con valores humanos, previniendo comportamientos dañinos", de: "Sicherstellen dass KI-Systeme Ziele verfolgen die mit menschlichen Werten ausgerichtet sind, verhindern schädliche Verhaltensweisen", nl: "Ervoor zorgen dat AI systemen doelen nastreven die uitgelijnd zijn met menselijke waarden, voorkomen schadelijke gedragingen" },
          { en: "Aligning neural network layers properly during training", es: "Alinear capas de redes neuronales apropiadamente durante entrenamiento", de: "Neuronale Netzwerkschichten ordnungsgemäß während des Trainings ausrichten", nl: "Neurale netwerklagen correct uitlijnen tijdens training" },
          { en: "Aligning data preprocessing with model architecture", es: "Alinear preprocesamiento de datos con arquitectura de modelo", de: "Datenvorverarbeitung mit Modellarchitektur ausrichten", nl: "Data preprocessing uitlijnen met modelarchitectuur" },
          { en: "Synchronizing multiple AI models to work together", es: "Sincronizar múltiples modelos de IA para trabajar juntos", de: "Mehrere KI-Modelle synchronisieren um zusammenzuarbeiten", nl: "Meerdere AI modellen synchroniseren om samen te werken" }
        ],
        correct: 0,
        explanation: {
          en: "The alignment problem becomes increasingly critical as AI systems become more powerful, requiring techniques like RLHF, constitutional AI, and interpretability research to ensure beneficial outcomes.",
          es: "El problema de alineación se vuelve cada vez más crítico mientras sistemas de IA se vuelven más poderosos, requiriendo técnicas como RLHF, IA constitucional e investigación de interpretabilidad para asegurar resultados beneficiosos.",
          de: "Das Alignment-Problem wird zunehmend kritisch während KI-Systeme mächtiger werden, erfordert Techniken wie RLHF, konstitutionelle KI und Interpretierbarkeitsforschung um vorteilhafte Ergebnisse sicherzustellen.",
          nl: "Het alignment probleem wordt steeds kritischer naarmate AI systemen krachtiger worden, vereist technieken zoals RLHF, constitutionele AI en interpreteerbaarheidsonderzoek om gunstige uitkomsten te verzekeren."
        }
      },
      {
        question: {
          en: "What is the lottery ticket hypothesis and its implications for understanding neural network training?",
          es: "¿Cuál es la hipótesis del boleto de lotería y sus implicaciones para entender entrenamiento de redes neuronales?",
          de: "Was ist die Lottery Ticket Hypothesis und ihre Implikationen für das Verstehen des neuronalen Netzwerktrainings?",
          nl: "Wat is de lottery ticket hypothesis en de implicaties ervan voor het begrijpen van neurale netwerktraining?"
        },
        options: [
          { en: "Dense networks contain sparse subnetworks that can achieve comparable accuracy when trained in isolation from random initialization", es: "Redes densas contienen subredes dispersas que logran precisión comparable entrenadas en aislamiento", de: "Dichte Netzwerke enthalten spärliche Teilnetzwerke die vergleichbare Genauigkeit erreichen wenn isoliert trainiert", nl: "Dichte netwerken bevatten dunne subnetwerken die vergelijkbare nauwkeurigheid bereiken wanneer getraind in isolatie" },
          { en: "Random chance determines which neural networks will be successful", es: "El azar determina qué redes neuronales serán exitosas", de: "Zufälliger Zufall bestimmt welche neuronalen Netzwerke erfolgreich sein werden", nl: "Willekeurige kans bepaalt welke neurale netwerken succesvol zullen zijn" },
          { en: "Only a few neurons in a network contribute to learning", es: "Solo unas pocas neuronas en una red contribuyen al aprendizaje", de: "Nur wenige Neuronen in einem Netzwerk tragen zum Lernen bei", nl: "Slechts een paar neuronen in een netwerk dragen bij aan leren" },
          { en: "Training outcomes are based on lottery-like random events", es: "Resultados de entrenamiento se basan en eventos aleatorios tipo lotería", de: "Trainingsergebnisse basieren auf lotterieähnlichen zufälligen Ereignissen", nl: "Trainingsuitkomsten zijn gebaseerd op loterij-achtige willekeurige gebeurtenissen" }
        ],
        correct: 0,
        explanation: {
          en: "The lottery ticket hypothesis suggests that successful training finds winning subnetworks within larger networks, providing insights into pruning, efficiency, and the nature of neural network optimization.",
          es: "La hipótesis del boleto de lotería sugiere que entrenamiento exitoso encuentra subredes ganadoras dentro de redes más grandes, proporcionando perspectivas sobre poda, eficiencia y naturaleza de optimización de redes neuronales.",
          de: "Die Lottery Ticket Hypothesis deutet darauf hin dass erfolgreiches Training gewinnende Teilnetzwerke in größeren Netzwerken findet, bietet Einsichten in Pruning, Effizienz und die Natur der neuronalen Netzwerkoptimierung.",
          nl: "De lottery ticket hypothesis suggereert dat succesvol trainen winnende subnetwerken vindt binnen grotere netwerken, biedt inzichten in pruning, efficiëntie en de aard van neurale netwerkoptimalisatie."
        }
      },
      {
        question: {
          en: "What are the fundamental challenges and approaches in achieving artificial general intelligence (AGI) through deep learning?",
          es: "¿Cuáles son los desafíos fundamentales y enfoques para lograr inteligencia artificial general (AGI) a través de aprendizaje profundo?",
          de: "Was sind die fundamentalen Herausforderungen und Ansätze zur Erreichung von Artificial General Intelligence (AGI) durch Deep Learning?",
          nl: "Wat zijn de fundamentele uitdagingen en benaderingen bij het bereiken van artificial general intelligence (AGI) door deep learning?"
        },
        options: [
          { en: "Developing systems with human-level reasoning, generalization, and adaptability across diverse domains through scaling, multimodal learning, and architectural innovations", es: "Desarrollar sistemas con razonamiento humano, generalización y adaptabilidad mediante escalado, aprendizaje multimodal", de: "Systeme mit menschlichem Reasoning, Generalisierung und Anpassungsfähigkeit durch Skalierung und multimodales Lernen entwickeln", nl: "Systemen ontwikkelen met menselijk redeneren, generalisatie en aanpasbaarheid door schaling, multimodaal leren en innovaties" },
          { en: "Creating AI that can generate any type of content", es: "Crear IA que puede generar cualquier tipo de contenido", de: "KI erstellen die jeden Inhaltstyp generieren kann", nl: "AI maken die elk type content kan genereren" },
          { en: "Building AI systems that work generally across all computers", es: "Construir sistemas de IA que funcionen generalmente en todas las computadoras", de: "KI-Systeme bauen die allgemein auf allen Computern funktionieren", nl: "AI systemen bouwen die algemeen werken op alle computers" },
          { en: "Developing general-purpose programming languages for AI", es: "Desarrollar lenguajes de programación de propósito general para IA", de: "Universelle Programmiersprachen für KI entwickeln", nl: "Algemene programmeertalen voor AI ontwikkelen" }
        ],
        correct: 0,
        explanation: {
          en: "AGI represents the ultimate goal of creating AI systems with human-like cognitive abilities, requiring breakthroughs in reasoning, consciousness, transfer learning, and perhaps entirely new paradigms beyond current deep learning.",
          es: "AGI representa el objetivo último de crear sistemas de IA con habilidades cognitivas similares a humanos, requiriendo avances en razonamiento, conciencia, aprendizaje por transferencia y quizás paradigmas completamente nuevos más allá del aprendizaje profundo actual.",
          de: "AGI repräsentiert das ultimative Ziel KI-Systeme mit menschenähnlichen kognitiven Fähigkeiten zu schaffen, erfordert Durchbrüche in Reasoning, Bewusstsein, Transfer Learning und vielleicht völlig neue Paradigmen jenseits des aktuellen Deep Learning.",
          nl: "AGI vertegenwoordigt het ultieme doel van het creëren van AI systemen met mensachtige cognitieve vaardigheden, vereist doorbraken in redeneren, bewustzijn, transfer learning en misschien volledig nieuwe paradigma's voorbij huidige deep learning."
        }
      },
      {
        question: {
          en: "What are diffusion models and how do they generate high-quality images?",
          es: "¿Qué son los modelos de difusión y cómo generan imágenes de alta calidad?",
          de: "Was sind Diffusionsmodelle und wie generieren sie hochqualitative Bilder?",
          nl: "Wat zijn diffusiemodellen en hoe genereren ze hoogkwalitatieve afbeeldingen?"
        },
        options: [
          { en: "Learn to reverse a gradual noising process by training a neural network to predict and remove noise at each step, generating images through iterative denoising", es: "Aprenden a revertir proceso de ruido entrenando red neuronal para predecir y remover ruido, generan imágenes por denoising iterativo", de: "Lernen Rauschprozess umzukehren durch Training neuronales Netzwerk Rauschen vorherzusagen, generieren Bilder durch Entrauschung", nl: "Leren ruisproces om te keren door neuraal netwerk te trainen om ruis te voorspellen, genereren afbeeldingen door ruisverwijdering" },
          { en: "Use diffusion physics to spread pixels across image space", es: "Usan física de difusión para esparcir píxeles a través del espacio de imagen", de: "Verwenden Diffusionsphysik um Pixel über Bildraum zu verteilen", nl: "Gebruiken diffusiefysica om pixels over beeldruimte te verspreiden" },
          { en: "Diffuse information between different image layers", es: "Difunden información entre diferentes capas de imagen", de: "Diffundieren Informationen zwischen verschiedenen Bildschichten", nl: "Diffunderen informatie tussen verschillende beeldlagen" },
          { en: "Generate images by gradually diffusing colors", es: "Generan imágenes difundiendo gradualmente colores", de: "Generieren Bilder durch graduelles Diffundieren von Farben", nl: "Genereren afbeeldingen door geleidelijk kleuren te diffunderen" }
        ],
        correct: 0,
        explanation: {
          en: "Diffusion models like DDPM, DALL-E 2, and Stable Diffusion have revolutionized image generation by learning to reverse a well-defined forward noising process, achieving unprecedented quality and controllability.",
          es: "Modelos de difusión como DDPM, DALL-E 2 y Stable Diffusion han revolucionado generación de imágenes aprendiendo a revertir un proceso de ruido bien definido hacia adelante, logrando calidad y controlabilidad sin precedentes.",
          de: "Diffusionsmodelle wie DDPM, DALL-E 2 und Stable Diffusion haben Bildgenerierung revolutioniert durch Lernen einen wohldefinierten Vorwärts-Rauschprozess umzukehren, erreichen beispiellose Qualität und Kontrollierbarkeit.",
          nl: "Diffusiemodellen zoals DDPM, DALL-E 2 en Stable Diffusion hebben beeldgeneratie gerevolutioneerd door te leren een goed gedefinieerd voorwaarts ruisproces om te keren, bereiken ongekende kwaliteit en controleerbaarheid."
        }
      },
      {
        question: {
          en: "What is the significance of in-context learning in large language models?",
          es: "¿Cuál es la significancia del aprendizaje en contexto en modelos de lenguaje grandes?",
          de: "Was ist die Bedeutung von In-Context Learning in großen Sprachmodellen?",
          nl: "Wat is de betekenis van in-context learning in grote taalmodellen?"
        },
        options: [
          { en: "Enables models to perform new tasks by providing examples within the input context without parameter updates, demonstrating emergent meta-learning capabilities", es: "Permite realizar nuevas tareas proporcionando ejemplos en contexto de entrada sin actualizaciones, demostra capacidades emergentes", de: "Ermöglicht neue Aufgaben durch Beispiele im Eingabekontext ohne Parameterupdates, demonstriert emergente Meta-Learning", nl: "Stelt in staat om nieuwe taken uit te voeren door voorbeelden in input context zonder updates, toont emergente meta-learning capaciteiten" },
          { en: "Learning that happens only within the training context", es: "Aprendizaje que ocurre solo dentro del contexto de entrenamiento", de: "Lernen das nur innerhalb des Trainingskontexts stattfindet", nl: "Leren dat alleen plaatsvindt binnen de trainingscontext" },
          { en: "Contextual understanding of language within sentences", es: "Comprensión contextual del lenguaje dentro de oraciones", de: "Kontextuelles Verständnis von Sprache innerhalb von Sätzen", nl: "Contextueel begrip van taal binnen zinnen" },
          { en: "Learning to maintain context across conversation turns", es: "Aprender a mantener contexto a través de turnos de conversación", de: "Lernen Kontext über Gesprächswendungen zu erhalten", nl: "Leren om context te behouden over gespreksbeurten" }
        ],
        correct: 0,
        explanation: {
          en: "In-context learning reveals that large language models can adapt to new tasks at inference time simply by seeing examples, without any training, suggesting sophisticated internal mechanisms for learning.",
          es: "El aprendizaje en contexto revela que modelos de lenguaje grandes pueden adaptarse a nuevas tareas en tiempo de inferencia simplemente viendo ejemplos, sin entrenamiento, sugiriendo mecanismos internos sofisticados para aprendizaje.",
          de: "In-Context Learning zeigt dass große Sprachmodelle sich an neue Aufgaben zur Inferenzzeit anpassen können nur durch Beispiele sehen, ohne Training, deutet auf ausgeklügelte interne Mechanismen für Lernen hin.",
          nl: "In-context learning onthult dat grote taalmodellen zich kunnen aanpassen aan nieuwe taken tijdens inferentie door simpelweg voorbeelden te zien, zonder training, suggereert geavanceerde interne mechanismen voor leren."
        }
      },
      {
        question: {
          en: "What is RLHF (Reinforcement Learning from Human Feedback) and why is it crucial for AI alignment?",
          es: "¿Qué es RLHF (Reinforcement Learning from Human Feedback) y por qué es crucial para alineación de IA?",
          de: "Was ist RLHF (Reinforcement Learning from Human Feedback) und warum ist es entscheidend für KI-Alignment?",
          nl: "Wat is RLHF (Reinforcement Learning from Human Feedback) en waarom is het cruciaal voor AI alignment?"
        },
        options: [
          { en: "Trains models to optimize for human preferences by learning a reward model from human feedback and using reinforcement learning to maximize this reward", es: "Entrena modelos para optimizar preferencias humanas aprendiendo modelo de recompensa y usando reinforcement learning", de: "Trainiert Modelle für menschliche Präferenzen durch Lernen Belohnungsmodells aus Feedback und Verwendung von Reinforcement Learning", nl: "Traint modellen voor menselijke voorkeuren door beloningsmodel te leren uit feedback en reinforcement learning om beloning te maximaliseren" },
          { en: "Reinforcement learning that uses human feedback as direct rewards", es: "Aprendizaje por refuerzo que usa retroalimentación humana como recompensas directas", de: "Reinforcement Learning das menschliches Feedback als direkte Belohnungen verwendet", nl: "Reinforcement learning dat menselijke feedback gebruikt als directe beloningen" },
          { en: "Human feedback incorporated into reinforcement learning algorithms", es: "Retroalimentación humana incorporada en algoritmos de aprendizaje por refuerzo", de: "Menschliches Feedback in Reinforcement Learning Algorithmen integriert", nl: "Menselijke feedback geïntegreerd in reinforcement learning algoritmes" },
          { en: "Reinforcement learning with human-like feedback mechanisms", es: "Aprendizaje por refuerzo con mecanismos de retroalimentación similares a humanos", de: "Reinforcement Learning mit menschenähnlichen Feedback-Mechanismen", nl: "Reinforcement learning met mensachtige feedback mechanismen" }
        ],
        correct: 0,
        explanation: {
          en: "RLHF has become essential for creating AI systems that behave according to human values and preferences, addressing the challenge of specifying appropriate objectives for complex AI systems.",
          es: "RLHF se ha vuelto esencial para crear sistemas de IA que se comportan según valores y preferencias humanas, abordando el desafío de especificar objetivos apropiados para sistemas de IA complejos.",
          de: "RLHF ist wesentlich geworden für die Erstellung von KI-Systemen die sich gemäß menschlichen Werten und Präferenzen verhalten, adressiert die Herausforderung angemessene Ziele für komplexe KI-Systeme zu spezifizieren.",
          nl: "RLHF is essentieel geworden voor het creëren van AI systemen die zich gedragen volgens menselijke waarden en voorkeuren, pakt de uitdaging aan van het specificeren van juiste doelstellingen voor complexe AI systemen."
        }
      },
      {
        question: {
          en: "What is Constitutional AI and how does it improve AI safety and alignment?",
          es: "¿Qué es la IA Constitucional y cómo mejora la seguridad y alineación de IA?",
          de: "Was ist Constitutional AI und wie verbessert es KI-Sicherheit und Alignment?",
          nl: "Wat is Constitutional AI en hoe verbetert het AI veiligheid en alignment?"
        },
        options: [
          { en: "Uses a set of principles (constitution) to guide AI behavior through self-critique and revision, reducing harmful outputs and improving helpfulness", es: "Usa principios (constitución) para guiar comportamiento IA mediante autocrítica y revisión, reduciendo salidas dañinas", de: "Verwendet Prinzipien (Verfassung) um KI-Verhalten durch Selbstkritik und Revision zu leiten, reduziert schädliche Ausgaben", nl: "Gebruikt principes (grondwet) om AI gedrag te leiden door zelfkritiek en herziening, vermindert schadelijke outputs" },
          { en: "AI systems governed by constitutional law", es: "Sistemas de IA gobernados por ley constitucional", de: "KI-Systeme die von Verfassungsrecht regiert werden", nl: "AI systemen bestuurd door grondwettelijk recht" },
          { en: "AI that follows the constitution of its home country", es: "IA que sigue la constitución de su país de origen", de: "KI die der Verfassung ihres Heimatlandes folgt", nl: "AI die de grondwet van zijn thuisland volgt" },
          { en: "Constitutional framework for AI governance", es: "Marco constitucional para gobernanza de IA", de: "Verfassungsrahmen für KI-Governance", nl: "Constitutioneel kader voor AI governance" }
        ],
        correct: 0,
        explanation: {
          en: "Constitutional AI enables models to learn and apply ethical principles autonomously, reducing the need for extensive human oversight while maintaining alignment with human values.",
          es: "La IA Constitucional permite a modelos aprender y aplicar principios éticos autónomamente, reduciendo la necesidad de supervisión humana extensa mientras mantiene alineación con valores humanos.",
          de: "Constitutional AI ermöglicht Modellen ethische Prinzipien autonom zu lernen und anzuwenden, reduziert den Bedarf an extensiver menschlicher Überwachung während Alignment mit menschlichen Werten beibehalten wird.",
          nl: "Constitutional AI stelt modellen in staat om ethische principes autonoom te leren en toe te passen, vermindert de behoefte aan uitgebreide menselijke supervisie terwijl alignment met menselijke waarden behouden blijft."
        }
      },
      {
        question: {
          en: "What are foundation models and how do they represent a paradigm shift in AI development?",
          es: "¿Qué son los modelos de fundación y cómo representan un cambio de paradigma en desarrollo de IA?",
          de: "Was sind Foundation Models und wie repräsentieren sie einen Paradigmenwechsel in der KI-Entwicklung?",
          nl: "Wat zijn foundation models en hoe vertegenwoordigen ze een paradigmashift in AI ontwikkeling?"
        },
        options: [
          { en: "Large-scale models trained on diverse data that serve as adaptable foundations for numerous downstream applications, enabling broad AI capabilities from a single base model", es: "Modelos a gran escala entrenados en datos diversos como fundaciones adaptables para aplicaciones, permiten capacidades amplias", de: "Großangelegte Modelle trainiert auf vielfältigen Daten als anpassbare Grundlagen für Anwendungen, ermöglichen breite Fähigkeiten", nl: "Grootschalige modellen getraind op diverse data als aanpasbare fundamenten voor downstream applicaties, maken brede AI capaciteiten mogelijk" },
          { en: "Models that form the mathematical foundation of neural networks", es: "Modelos que forman la fundación matemática de redes neuronales", de: "Modelle die die mathematische Grundlage neuronaler Netzwerke bilden", nl: "Modellen die de wiskundige basis vormen van neurale netwerken" },
          { en: "Basic models used as starting points for research", es: "Modelos básicos usados como puntos de partida para investigación", de: "Grundmodelle als Ausgangspunkte für Forschung verwendet", nl: "Basismodellen gebruikt als startpunten voor onderzoek" },
          { en: "Models that establish foundational AI principles", es: "Modelos que establecen principios fundacionales de IA", de: "Modelle die grundlegende KI-Prinzipien etablieren", nl: "Modellen die fundamentele AI principes vaststellen" }
        ],
        correct: 0,
        explanation: {
          en: "Foundation models like GPT, BERT, and CLIP represent a shift from task-specific models to general-purpose models that can be adapted for multiple applications, centralizing AI development around versatile base models.",
          es: "Modelos de fundación como GPT, BERT y CLIP representan un cambio de modelos específicos de tarea a modelos de propósito general que pueden adaptarse para múltiples aplicaciones, centralizando desarrollo de IA alrededor de modelos base versátiles.",
          de: "Foundation Models wie GPT, BERT und CLIP repräsentieren eine Verschiebung von aufgabenspezifischen Modellen zu universellen Modellen die für mehrere Anwendungen angepasst werden können, zentralisieren KI-Entwicklung um vielseitige Basismodelle.",
          nl: "Foundation models zoals GPT, BERT en CLIP vertegenwoordigen een verschuiving van taak-specifieke modellen naar algemene modellen die aangepast kunnen worden voor meerdere applicaties, centraliseren AI ontwikkeling rond veelzijdige basismodellen."
        }
      },
      {
        question: {
          en: "What is chain-of-thought prompting and how does it improve reasoning in large language models?",
          es: "¿Qué es el prompting de cadena de pensamiento y cómo mejora el razonamiento en modelos de lenguaje grandes?",
          de: "Was ist Chain-of-Thought Prompting und wie verbessert es Reasoning in großen Sprachmodellen?",
          nl: "Wat is chain-of-thought prompting en hoe verbetert het redeneren in grote taalmodellen?"
        },
        options: [
          { en: "Provides step-by-step reasoning examples in prompts, encouraging models to break down complex problems and show their work, significantly improving performance on reasoning tasks", es: "Proporciona ejemplos de razonamiento paso a paso en prompts, alienta descomponer problemas y mostrar trabajo, mejora rendimiento", de: "Bietet schrittweise Reasoning-Beispiele in Prompts, ermutigt Probleme aufzuteilen und Arbeit zu zeigen, verbessert Leistung", nl: "Biedt stap-voor-stap redeneer voorbeelden in prompts, moedigt aan problemen op te splitsen en werk te tonen, verbetert prestaties" },
          { en: "Chains multiple language models together for better reasoning", es: "Encadena múltiples modelos de lenguaje juntos para mejor razonamiento", de: "Verkettet mehrere Sprachmodelle für besseres Reasoning", nl: "Schakel meerdere taalmodellen samen voor beter redeneren" },
          { en: "Creates thought chains in model architecture", es: "Crea cadenas de pensamiento en arquitectura de modelo", de: "Erstellt Gedankenketten in Modellarchitektur", nl: "Creëert gedachteketens in modelarchitectuur" },
          { en: "Links related thoughts in training data", es: "Vincula pensamientos relacionados en datos de entrenamiento", de: "Verknüpft verwandte Gedanken in Trainingsdaten", nl: "Koppelt gerelateerde gedachten in trainingsdata" }
        ],
        correct: 0,
        explanation: {
          en: "Chain-of-thought prompting reveals that large language models can perform sophisticated reasoning when prompted to show intermediate steps, enabling complex problem-solving capabilities that weren't apparent with direct prompting.",
          es: "El prompting de cadena de pensamiento revela que modelos de lenguaje grandes pueden realizar razonamiento sofisticado cuando se les solicita mostrar pasos intermedios, permitiendo capacidades de resolución de problemas complejos que no eran aparentes con prompting directo.",
          de: "Chain-of-Thought Prompting zeigt dass große Sprachmodelle sophistiziertes Reasoning durchführen können wenn aufgefordert Zwischenschritte zu zeigen, ermöglicht komplexe Problemlösungsfähigkeiten die mit direktem Prompting nicht offensichtlich waren.",
          nl: "Chain-of-thought prompting onthult dat grote taalmodellen geavanceerd redeneren kunnen uitvoeren wanneer gevraagd om tussenstappen te tonen, maakt complexe probleemoplossende capaciteiten mogelijk die niet duidelijk waren met direct prompting."
        }
      },
      {
        question: {
          en: "What is the concept of emergent abilities in AI and what examples have been observed?",
          es: "¿Cuál es el concepto de habilidades emergentes en IA y qué ejemplos se han observado?",
          de: "Was ist das Konzept emergenter Fähigkeiten in der KI und welche Beispiele wurden beobachtet?",
          nl: "Wat is het concept van emergente vaardigheden in AI en welke voorbeelden zijn waargenomen?"
        },
        options: [
          { en: "Capabilities that suddenly appear at certain scales without being explicitly trained, such as arithmetic, few-shot learning, and instruction following", es: "Capacidades que aparecen súbitamente en ciertas escalas sin entrenamiento explícito, como aritmética, few-shot learning", de: "Fähigkeiten die plötzlich bei bestimmten Skalierungen auftreten ohne explizites Training, wie Arithmetik, Few-Shot Learning", nl: "Capaciteiten die plotseling verschijnen op bepaalde schalen zonder expliciet getraind te zijn, zoals rekenen, few-shot learning" },
          { en: "Abilities that emerge during emergency situations", es: "Habilidades que emergen durante situaciones de emergencia", de: "Fähigkeiten die in Notsituationen entstehen", nl: "Vaardigheden die ontstaan tijdens noodsituaties" },
          { en: "New abilities that emerge from model updates", es: "Nuevas habilidades que emergen de actualizaciones de modelo", de: "Neue Fähigkeiten die aus Modell-Updates entstehen", nl: "Nieuwe vaardigheden die ontstaan uit model updates" },
          { en: "Abilities that emerge from combining multiple AI systems", es: "Habilidades que emergen de combinar múltiples sistemas de IA", de: "Fähigkeiten die durch Kombination mehrerer KI-Systeme entstehen", nl: "Vaardigheden die ontstaan uit het combineren van meerdere AI systemen" }
        ],
        correct: 0,
        explanation: {
          en: "Emergent abilities suggest that AI capabilities may not scale smoothly but rather exhibit phase transitions, with profound implications for predicting and controlling future AI systems.",
          es: "Las habilidades emergentes sugieren que capacidades de IA pueden no escalar suavemente sino exhibir transiciones de fase, con implicaciones profundas para predecir y controlar sistemas de IA futuros.",
          de: "Emergente Fähigkeiten deuten darauf hin dass KI-Fähigkeiten nicht glatt skalieren sondern Phasenübergänge zeigen, mit tiefgreifenden Implikationen für Vorhersage und Kontrolle zukünftiger KI-Systeme.",
          nl: "Emergente vaardigheden suggereren dat AI capaciteiten mogelijk niet vloeiend schalen maar eerder fasetransities vertonen, met diepgaande implicaties voor het voorspellen en controleren van toekomstige AI systemen."
        }
      },
      {
        question: {
          en: "What is multimodal AI and what are the challenges in building effective multimodal models?",
          es: "¿Qué es la IA multimodal y cuáles son los desafíos en construir modelos multimodales efectivos?",
          de: "Was ist multimodale KI und was sind die Herausforderungen beim Aufbau effektiver multimodaler Modelle?",
          nl: "Wat is multimodale AI en wat zijn de uitdagingen bij het bouwen van effectieve multimodale modellen?"
        },
        options: [
          { en: "AI that processes and integrates multiple types of data (text, images, audio, video), facing challenges in alignment, fusion, and cross-modal understanding", es: "IA que procesa e integra múltiples tipos de datos (texto, imágenes, audio, video), con desafíos en alignment y fusión", de: "KI die mehrere Datentypen verarbeitet und integriert (Text, Bilder, Audio, Video), mit Herausforderungen in Alignment und Fusion", nl: "AI die meerdere datatypes verwerkt en integreert (tekst, afbeeldingen, audio, video), met uitdagingen in alignment en fusie" },
          { en: "AI that operates in multiple modes simultaneously", es: "IA que opera en múltiples modos simultáneamente", de: "KI die in mehreren Modi gleichzeitig operiert", nl: "AI die in meerdere modi tegelijkertijd opereert" },
          { en: "AI with multiple operational modalities", es: "IA con múltiples modalidades operacionales", de: "KI mit mehreren operationellen Modalitäten", nl: "AI met meerdere operationele modaliteiten" },
          { en: "AI that can switch between different model architectures", es: "IA que puede cambiar entre diferentes arquitecturas de modelo", de: "KI die zwischen verschiedenen Modellarchitekturen wechseln kann", nl: "AI die kan wisselen tussen verschillende modelarchitecturen" }
        ],
        correct: 0,
        explanation: {
          en: "Multimodal AI aims to achieve human-like understanding by integrating information across sensory modalities, requiring advances in representation learning, attention mechanisms, and cross-modal reasoning.",
          es: "La IA multimodal busca lograr comprensión similar a humanos integrando información a través de modalidades sensoriales, requiriendo avances en aprendizaje de representación, mecanismos de atención y razonamiento cruzado modal.",
          de: "Multimodale KI zielt darauf ab menschenähnliches Verständnis durch Integration von Informationen über sensorische Modalitäten zu erreichen, erfordert Fortschritte in Repräsentationslernen, Attention-Mechanismen und kreuzmodalen Reasoning.",
          nl: "Multimodale AI streeft ernaar mensachtig begrip te bereiken door informatie over sensorische modaliteiten te integreren, vereist vooruitgang in representatie leren, attention mechanismen en cross-modaal redeneren."
        }
      },
      {
        question: {
          en: "What is the significance of sparse expert models like Switch Transformer and GLaM?",
          es: "¿Cuál es la significancia de modelos expertos dispersos como Switch Transformer y GLaM?",
          de: "Was ist die Bedeutung von Sparse Expert Modellen wie Switch Transformer und GLaM?",
          nl: "Wat is de betekenis van sparse expert modellen zoals Switch Transformer en GLaM?"
        },
        options: [
          { en: "Enable massive model scaling by activating only a subset of parameters for each input, achieving better performance with similar computational cost", es: "Permiten escalado masivo activando solo un subconjunto de parámetros por entrada, mejor rendimiento con costo similar", de: "Ermöglichen massive Skalierung durch Aktivierung nur einer Teilmenge von Parametern pro Eingabe, bessere Leistung mit ähnlichen Kosten", nl: "Maken massieve schaling mogelijk door slechts een subset van parameters te activeren per input, betere prestaties met vergelijkbare kosten" },
          { en: "Use sparse matrices to reduce memory requirements", es: "Usan matrices dispersas para reducir requerimientos de memoria", de: "Verwenden spärliche Matrizen um Speicheranforderungen zu reduzieren", nl: "Gebruiken dunne matrices om geheugenvereisten te verminderen" },
          { en: "Employ expert systems with sparse knowledge bases", es: "Emplean sistemas expertos con bases de conocimiento dispersas", de: "Verwenden Expertensysteme mit spärlichen Wissensbasen", nl: "Gebruiken expertsystemen met dunne kennisbases" },
          { en: "Create sparse connections between expert networks", es: "Crean conexiones dispersas entre redes expertas", de: "Erstellen spärliche Verbindungen zwischen Expertennetzwerken", nl: "Creëren dunne verbindingen tussen expert netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "Sparse expert models represent a promising approach to scaling AI systems efficiently by using mixture-of-experts architectures that conditionally activate different model components based on input characteristics.",
          es: "Modelos expertos dispersos representan un enfoque prometedor para escalar sistemas de IA eficientemente usando arquitecturas de mezcla de expertos que activan condicionalmente diferentes componentes de modelo basados en características de entrada.",
          de: "Sparse Expert Modelle repräsentieren einen vielversprechenden Ansatz KI-Systeme effizient zu skalieren durch Verwendung von Mixture-of-Experts Architekturen die verschiedene Modellkomponenten bedingt basierend auf Eingabecharakteristiken aktivieren.",
          nl: "Sparse expert modellen vertegenwoordigen een veelbelovende benadering om AI systemen efficiënt te schalen door mixture-of-experts architecturen te gebruiken die conditioneel verschillende modelcomponenten activeren gebaseerd op input karakteristieken."
        }
      },
      {
        question: {
          en: "What is model interpretability and why is it crucial for trustworthy AI systems?",
          es: "¿Qué es la interpretabilidad de modelos y por qué es crucial para sistemas de IA confiables?",
          de: "Was ist Modellinterpretierbarkeit und warum ist sie entscheidend für vertrauenswürdige KI-Systeme?",
          nl: "Wat is modelinterpreteerbaarheid en waarom is het cruciaal voor betrouwbare AI systemen?"
        },
        options: [
          { en: "The ability to understand and explain how AI models make decisions, enabling accountability, debugging, and building user trust in AI systems", es: "La capacidad de entender y explicar cómo modelos IA toman decisiones, permitiendo responsabilidad, debugging y confianza", de: "Die Fähigkeit zu verstehen und erklären wie KI-Modelle Entscheidungen treffen, ermöglicht Rechenschaftspflicht, Debugging und Vertrauen", nl: "Het vermogen om te begrijpen en uit te leggen hoe AI modellen beslissingen nemen, maakt verantwoording, debugging en vertrouwen mogelijk" },
          { en: "The ability to interpret model outputs in different languages", es: "La capacidad de interpretar salidas de modelo en diferentes idiomas", de: "Die Fähigkeit Modellausgaben in verschiedenen Sprachen zu interpretieren", nl: "Het vermogen om modeloutputs in verschillende talen te interpreteren" },
          { en: "Models that can interpret human intentions", es: "Modelos que pueden interpretar intenciones humanas", de: "Modelle die menschliche Absichten interpretieren können", nl: "Modellen die menselijke intenties kunnen interpreteren" },
          { en: "The capability to translate between model formats", es: "La capacidad de traducir entre formatos de modelo", de: "Die Fähigkeit zwischen Modellformaten zu übersetzen", nl: "Het vermogen om te vertalen tussen modelformaten" }
        ],
        correct: 0,
        explanation: {
          en: "Model interpretability becomes increasingly important as AI systems are deployed in high-stakes domains like healthcare, finance, and criminal justice, where understanding decision-making processes is essential for safety and fairness.",
          es: "La interpretabilidad de modelos se vuelve cada vez más importante mientras sistemas de IA se despliegan en dominios de alto riesgo como salud, finanzas y justicia criminal, donde entender procesos de toma de decisiones es esencial para seguridad y equidad.",
          de: "Modellinterpretierbarkeit wird zunehmend wichtig während KI-Systeme in hochriskanten Bereichen wie Gesundheitswesen, Finanzen und Strafjustiz eingesetzt werden, wo Verstehen von Entscheidungsprozessen wesentlich für Sicherheit und Fairness ist.",
          nl: "Modelinterpreteerbaarheid wordt steeds belangrijker naarmate AI systemen worden ingezet in hoge-inzet domeinen zoals gezondheidszorg, financiën en strafrecht, waar begrip van besluitvormingsprocessen essentieel is voor veiligheid en eerlijkheid."
        }
      },
      {
        question: {
          en: "What is the concept of AI safety and what are the main approaches to ensuring safe AI development?",
          es: "¿Cuál es el concepto de seguridad de IA y cuáles son los principales enfoques para asegurar desarrollo seguro de IA?",
          de: "Was ist das Konzept der KI-Sicherheit und was sind die Hauptansätze zur Gewährleistung sicherer KI-Entwicklung?",
          nl: "Wat is het concept van AI veiligheid en wat zijn de hoofdbenaderingen voor het verzekeren van veilige AI ontwikkeling?"
        },
        options: [
          { en: "Ensuring AI systems behave reliably, avoid harmful actions, and remain under human control through techniques like alignment research, robustness testing, and capability control", es: "Asegurar que sistemas IA se comporten confiablemente, eviten acciones dañinas mediante alignment, pruebas robustez y control", de: "Sicherstellung dass KI-Systeme zuverlässig verhalten, schädliche Aktionen vermeiden durch Alignment-Forschung, Robustheitstests", nl: "Ervoor zorgen dat AI systemen zich betrouwbaar gedragen, schadelijke acties vermijden door alignment onderzoek, robuustheidstesten" },
          { en: "Physical safety measures for AI hardware systems", es: "Medidas de seguridad física para sistemas de hardware de IA", de: "Physische Sicherheitsmaßnahmen für KI-Hardware-Systeme", nl: "Fysieke veiligheidsmaatregelen voor AI hardware systemen" },
          { en: "Cybersecurity protection for AI models", es: "Protección de ciberseguridad para modelos de IA", de: "Cybersicherheitsschutz für KI-Modelle", nl: "Cybersecurity bescherming voor AI modellen" },
          { en: "Safety protocols for AI researchers", es: "Protocolos de seguridad para investigadores de IA", de: "Sicherheitsprotokolle für KI-Forscher", nl: "Veiligheidsprotocollen voor AI onderzoekers" }
        ],
        correct: 0,
        explanation: {
          en: "AI safety encompasses preventing both near-term risks like bias and misuse, and long-term risks from advanced AI systems, requiring interdisciplinary approaches combining technical research with policy and governance.",
          es: "La seguridad de IA abarca prevenir tanto riesgos a corto plazo como sesgo y mal uso, como riesgos a largo plazo de sistemas de IA avanzados, requiriendo enfoques interdisciplinarios combinando investigación técnica con política y gobernanza.",
          de: "KI-Sicherheit umfasst Prävention sowohl kurzfristiger Risiken wie Bias und Missbrauch, als auch langfristiger Risiken von fortgeschrittenen KI-Systemen, erfordert interdisziplinäre Ansätze die technische Forschung mit Politik und Governance kombinieren.",
          nl: "AI veiligheid omvat het voorkomen van zowel korte-termijn risico's zoals bias en misbruik, als lange-termijn risico's van geavanceerde AI systemen, vereist interdisciplinaire benaderingen die technisch onderzoek combineren met beleid en governance."
        }
      },
      {
        question: {
          en: "What is neural scaling and what insights have scaling experiments provided about AI capabilities?",
          es: "¿Qué es el escalado neuronal y qué percepciones han proporcionado experimentos de escalado sobre capacidades de IA?",
          de: "Was ist neuronale Skalierung und welche Einsichten haben Skalierungsexperimente über KI-Fähigkeiten geliefert?",
          nl: "Wat is neurale schaling en welke inzichten hebben schalings experimenten verschaft over AI capaciteiten?"
        },
        options: [
          { en: "Systematic increases in model size, data, and compute revealing predictable performance improvements and sudden capability emergence at specific scales", es: "Aumentos sistemáticos en tamaño, datos y cómputo revelan mejoras predecibles y emergencia súbita de capacidades", de: "Systematische Erhöhungen in Modellgröße, Daten und Compute zeigen vorhersagbare Verbesserungen und plötzliche Emergenz", nl: "Systematische verhogingen in modelgrootte, data en compute onthullen voorspelbare verbeteringen en plotselinge emergentie" },
          { en: "Scaling neural network layers proportionally", es: "Escalar capas de redes neuronales proporcionalmente", de: "Neuronale Netzwerkschichten proportional skalieren", nl: "Neurale netwerklagen proportioneel schalen" },
          { en: "Adjusting neural firing rates in biological systems", es: "Ajustar tasas de disparo neuronal en sistemas biológicos", de: "Neuronale Feuerungsraten in biologischen Systemen anpassen", nl: "Neurale vuursnelheden aanpassen in biologische systemen" },
          { en: "Normalizing neural network weights across scales", es: "Normalizar pesos de redes neuronales a través de escalas", de: "Neuronale Netzwerkgewichte über Skalen normalisieren", nl: "Neurale netwerkgewichten normaliseren over schalen" }
        ],
        correct: 0,
        explanation: {
          en: "Neural scaling experiments have revealed that many AI capabilities follow predictable scaling laws, but also demonstrate phase transitions where new abilities emerge suddenly, informing strategies for AI development and safety.",
          es: "Experimentos de escalado neuronal han revelado que muchas capacidades de IA siguen leyes de escalado predecibles, pero también demuestran transiciones de fase donde nuevas habilidades emergen súbitamente, informando estrategias para desarrollo y seguridad de IA.",
          de: "Neuronale Skalierungsexperimente haben gezeigt dass viele KI-Fähigkeiten vorhersagbaren Skalierungsgesetzen folgen, demonstrieren aber auch Phasenübergänge wo neue Fähigkeiten plötzlich entstehen, informieren Strategien für KI-Entwicklung und Sicherheit.",
          nl: "Neurale schalings experimenten hebben onthuld dat veel AI capaciteiten voorspelbare schalingswetten volgen, maar tonen ook fasetransities waar nieuwe vaardigheden plotseling ontstaan, informeren strategieën voor AI ontwikkeling en veiligheid."
        }
      },
      {
        question: {
          en: "What is the difference between narrow AI and artificial general intelligence (AGI)?",
          es: "¿Cuál es la diferencia entre IA estrecha e inteligencia artificial general (AGI)?",
          de: "Was ist der Unterschied zwischen enger KI und Artificial General Intelligence (AGI)?",
          nl: "Wat is het verschil tussen smalle AI en artificial general intelligence (AGI)?"
        },
        options: [
          { en: "Narrow AI excels at specific tasks but lacks general reasoning, while AGI would match human cognitive abilities across diverse domains with autonomous learning and adaptation", es: "IA estrecha sobresale en tareas específicas pero carece de razonamiento general, AGI igualaría habilidades cognitivas humanas", de: "Enge KI excelliert bei spezifischen Aufgaben aber fehlt allgemeines Reasoning, AGI würde menschliche Fähigkeiten erreichen", nl: "Smalle AI excelleert in specifieke taken maar mist algemeen redeneren, AGI zou menselijke cognitieve vaardigheden evenaren" },
          { en: "Narrow AI is faster while AGI is more accurate", es: "IA estrecha es más rápida mientras AGI es más precisa", de: "Enge KI ist schneller während AGI genauer ist", nl: "Smalle AI is sneller terwijl AGI nauwkeuriger is" },
          { en: "Narrow AI uses less data while AGI uses more data", es: "IA estrecha usa menos datos mientras AGI usa más datos", de: "Enge KI verwendet weniger Daten während AGI mehr Daten verwendet", nl: "Smalle AI gebruikt minder data terwijl AGI meer data gebruikt" },
          { en: "Narrow AI is software-based while AGI is hardware-based", es: "IA estrecha está basada en software mientras AGI está basada en hardware", de: "Enge KI ist software-basiert während AGI hardware-basiert ist", nl: "Smalle AI is software-gebaseerd terwijl AGI hardware-gebaseerd is" }
        ],
        correct: 0,
        explanation: {
          en: "The transition from narrow AI to AGI represents one of the most significant challenges in AI research, requiring breakthroughs in learning, reasoning, and generalization that could fundamentally transform society.",
          es: "La transición de IA estrecha a AGI representa uno de los desafíos más significativos en investigación de IA, requiriendo avances en aprendizaje, razonamiento y generalización que podrían transformar fundamentalmente la sociedad.",
          de: "Der Übergang von enger KI zu AGI repräsentiert eine der bedeutendsten Herausforderungen in der KI-Forschung, erfordert Durchbrüche in Lernen, Reasoning und Generalisierung die Gesellschaft fundamental transformieren könnten.",
          nl: "De overgang van smalle AI naar AGI vertegenwoordigt een van de meest significante uitdagingen in AI onderzoek, vereist doorbraken in leren, redeneren en generalisatie die de samenleving fundamenteel zouden kunnen transformeren."
        }
      },
      {
        question: {
          en: "What is few-shot prompting and how does it demonstrate the power of large language models?",
          es: "¿Qué es el prompting de pocos ejemplos y cómo demuestra el poder de modelos de lenguaje grandes?",
          de: "Was ist Few-Shot Prompting und wie demonstriert es die Macht großer Sprachmodelle?",
          nl: "Wat is few-shot prompting en hoe toont het de kracht van grote taalmodellen?"
        },
        options: [
          { en: "Enables models to perform tasks with just a few examples provided in the prompt, demonstrating remarkable generalization without explicit training on those specific tasks", es: "Permite realizar tareas con solo unos ejemplos en el prompt, demostra generalización notable sin entrenamiento explícito", de: "Ermöglicht Aufgaben mit nur wenigen Beispielen im Prompt durchzuführen, demonstriert bemerkenswerte Generalisierung ohne Training", nl: "Stelt in staat taken uit te voeren met slechts een paar voorbeelden in de prompt, toont generalisatie zonder expliciete training" },
          { en: "Prompting that requires only a few computational steps", es: "Prompting que requiere solo unos pocos pasos computacionales", de: "Prompting das nur wenige rechnerische Schritte erfordert", nl: "Prompting dat slechts een paar computationele stappen vereist" },
          { en: "Short prompts with minimal text input", es: "Prompts cortos con entrada de texto mínima", de: "Kurze Prompts mit minimaler Texteingabe", nl: "Korte prompts met minimale tekstinvoer" },
          { en: "Prompting techniques that work on small models", es: "Técnicas de prompting que funcionan en modelos pequeños", de: "Prompting-Techniken die bei kleinen Modellen funktionieren", nl: "Prompting technieken die werken op kleine modellen" }
        ],
        correct: 0,
        explanation: {
          en: "Few-shot prompting reveals that large language models have learned general patterns that can be quickly adapted to new tasks, suggesting sophisticated internal representations and meta-learning capabilities.",
          es: "El prompting de pocos ejemplos revela que modelos de lenguaje grandes han aprendido patrones generales que pueden adaptarse rápidamente a nuevas tareas, sugiriendo representaciones internas sofisticadas y capacidades de meta-aprendizaje.",
          de: "Few-Shot Prompting zeigt dass große Sprachmodelle allgemeine Muster gelernt haben die schnell an neue Aufgaben angepasst werden können, deutet auf ausgeklügelte interne Repräsentationen und Meta-Learning-Fähigkeiten hin.",
          nl: "Few-shot prompting onthult dat grote taalmodellen algemene patronen hebben geleerd die snel aangepast kunnen worden aan nieuwe taken, suggereert geavanceerde interne representaties en meta-learning capaciteiten."
        }
      },
      {
        question: {
          en: "What are emergent abilities in large language models and why are they significant?",
          es: "¿Qué son las habilidades emergentes en modelos de lenguaje grandes y por qué son significativas?",
          de: "Was sind emergente Fähigkeiten in großen Sprachmodellen und warum sind sie bedeutend?",
          nl: "Wat zijn emergente vaardigheden in grote taalmodellen en waarom zijn ze significant?"
        },
        options: [
          { en: "Capabilities that appear unpredictably at certain scales, not present in smaller models, suggesting qualitative changes in intelligence", es: "Capacidades que aparecen impredeciblemente en ciertas escalas, no en modelos pequeños, sugiriendo cambios cualitativos", de: "Fähigkeiten die unvorhersagbar bei bestimmten Skalierungen erscheinen, nicht in kleineren Modellen, deuten auf qualitative Veränderungen", nl: "Capaciteiten die onvoorspelbaar verschijnen op bepaalde schalen, niet in kleinere modellen, suggereren kwalitatieve veranderingen" },
          { en: "Emergency response capabilities for crisis situations", es: "Capacidades de respuesta de emergencia para situaciones de crisis", de: "Notfall-Reaktionsfähigkeiten für Krisensituationen", nl: "Noodreactie capaciteiten voor crisissituaties" },
          { en: "Abilities that emerge only during training", es: "Habilidades que emergen solo durante entrenamiento", de: "Fähigkeiten die nur während Training entstehen", nl: "Vaardigheden die alleen tijdens training ontstaan" },
          { en: "Standard abilities that all models develop", es: "Habilidades estándar que todos los modelos desarrollan", de: "Standardfähigkeiten die alle Modelle entwickeln", nl: "Standaard vaardigheden die alle modellen ontwikkelen" }
        ],
        correct: 0,
        explanation: {
          en: "Emergent abilities like complex reasoning, code generation, and mathematical problem-solving appear suddenly when models reach sufficient scale, challenging our understanding of how intelligence scales and suggesting phase transitions in capability.",
          es: "Habilidades emergentes como razonamiento complejo, generación de código y resolución de problemas matemáticos aparecen súbitamente cuando modelos alcanzan escala suficiente, desafiando nuestro entendimiento de cómo escala la inteligencia y sugiriendo transiciones de fase en capacidad.",
          de: "Emergente Fähigkeiten wie komplexes Reasoning, Code-Generierung und mathematische Problemlösung erscheinen plötzlich wenn Modelle ausreichende Skalierung erreichen, fordern unser Verständnis heraus wie Intelligenz skaliert und deuten auf Phasenübergänge in Fähigkeiten hin.",
          nl: "Emergente vaardigheden zoals complex redeneren, code generatie en wiskundige probleemoplossing verschijnen plotseling wanneer modellen voldoende schaal bereiken, dagen ons begrip uit van hoe intelligentie schaalt en suggereren faseovergangen in capaciteit."
        }
      },
      {
        question: {
          en: "What is mechanistic interpretability and how does it differ from other interpretability approaches?",
          es: "¿Qué es la interpretabilidad mecanicista y cómo difiere de otros enfoques de interpretabilidad?",
          de: "Was ist mechanistische Interpretierbarkeit und wie unterscheidet sie sich von anderen Interpretierbarkeitsansätzen?",
          nl: "Wat is mechanistische interpreteerbaarheid en hoe verschilt het van andere interpreteerba arheidsbenaderingen?"
        },
        options: [
          { en: "Reverse-engineers neural networks to understand computational mechanisms at the circuit level, revealing causal structures rather than correlations", es: "Aplica ingeniería inversa a redes neuronales para entender mecanismos a nivel circuito, revelando estructuras causales", de: "Reverse-engineert neuronale Netzwerke um Mechanismen auf Schaltkreisebene zu verstehen, enthüllt kausale Strukturen", nl: "Reverse-engineert neurale netwerken om mechanismen op circuit-niveau te begrijpen, onthult causale structuren" },
          { en: "Uses mechanical devices to interpret AI", es: "Usa dispositivos mecánicos para interpretar IA", de: "Verwendet mechanische Geräte zur KI-Interpretation", nl: "Gebruikt mechanische apparaten om AI te interpreteren" },
          { en: "Interprets only mechanistic learning algorithms", es: "Interpreta solo algoritmos de aprendizaje mecanicistas", de: "Interpretiert nur mechanistische Lernalgorithmen", nl: "Interpreteert alleen mechanistische leeralgoritmen" },
          { en: "Mechanical testing of model robustness", es: "Pruebas mecánicas de robustez del modelo", de: "Mechanisches Testen der Modellrobustheit", nl: "Mechanisch testen van modelrobuustheid" }
        ],
        correct: 0,
        explanation: {
          en: "Mechanistic interpretability aims to fully understand the algorithms implemented by neural networks through techniques like circuit analysis, identifying individual neurons' roles, and tracing information flow. Unlike post-hoc explanations, it seeks ground truth about internal computations.",
          es: "La interpretabilidad mecanicista busca entender completamente los algoritmos implementados por redes neuronales mediante técnicas como análisis de circuitos, identificación de roles de neuronas individuales y rastreo de flujo de información. A diferencia de explicaciones post-hoc, busca la verdad fundamental sobre computaciones internas.",
          de: "Mechanistische Interpretierbarkeit zielt darauf ab die von neuronalen Netzwerken implementierten Algorithmen durch Techniken wie Schaltkreisanalyse, Identifikation individueller Neuronenrollen und Verfolgung des Informationsflusses vollständig zu verstehen. Im Gegensatz zu Post-hoc-Erklärungen sucht sie Grundwahrheit über interne Berechnungen.",
          nl: "Mechanistische interpreteerbaarheid streeft ernaar de algoritmen geïmplementeerd door neurale netwerken volledig te begrijpen door technieken zoals circuitanalyse, identificatie van individuele neuronrollen en het traceren van informatiestroom. Anders dan post-hoc verklaringen zoekt het naar grondwaarheid over interne berekeningen."
        }
      },
      {
        question: {
          en: "What is prompt injection and why does it pose security risks for LLM applications?",
          es: "¿Qué es la inyección de prompts y por qué plantea riesgos de seguridad para aplicaciones LLM?",
          de: "Was ist Prompt Injection und warum stellt es Sicherheitsrisiken für LLM-Anwendungen dar?",
          nl: "Wat is prompt injection en waarom vormt het beveiligingsrisico's voor LLM-applicaties?"
        },
        options: [
          { en: "Malicious inputs that override system instructions to make models ignore guidelines or leak sensitive information", es: "Entradas maliciosas que anulan instrucciones del sistema para hacer modelos ignorar directrices o filtrar información", de: "Bösartige Eingaben die Systembefehle überschreiben um Modelle Richtlinien ignorieren oder Informationen preisgeben zu lassen", nl: "Kwaadaardige inputs die systeeminstructies overschrijven om modellen richtlijnen te negeren of informatie te lekken" },
          { en: "Injecting additional prompts for faster processing", es: "Inyectar prompts adicionales para procesamiento más rápido", de: "Zusätzliche Prompts für schnellere Verarbeitung injizieren", nl: "Extra prompts injecteren voor snellere verwerking" },
          { en: "Adding prompts to improve model accuracy", es: "Agregar prompts para mejorar precisión del modelo", de: "Prompts zur Verbesserung der Modellgenauigkeit hinzufügen", nl: "Prompts toevoegen om modelnauwkeurigheid te verbeteren" },
          { en: "Prompt optimization through injection techniques", es: "Optimización de prompts mediante técnicas de inyección", de: "Prompt-Optimierung durch Injektionstechniken", nl: "Prompt-optimalisatie door injectietechnieken" }
        ],
        correct: 0,
        explanation: {
          en: "Prompt injection exploits the fact that LLMs treat user inputs and system instructions identically, allowing attackers to manipulate model behavior. Defenses include input sanitization, output filtering, and separating user content from instructions through architectural designs.",
          es: "La inyección de prompts explota el hecho de que LLMs tratan entradas de usuario e instrucciones del sistema idénticamente, permitiendo a atacantes manipular comportamiento del modelo. Las defensas incluyen sanitización de entrada, filtrado de salida y separación de contenido de usuario de instrucciones mediante diseños arquitectónicos.",
          de: "Prompt Injection nutzt aus dass LLMs Benutzereingaben und Systemanweisungen identisch behandeln, wodurch Angreifer Modellverhalten manipulieren können. Verteidigungen umfassen Eingabebereinigung, Ausgabefilterung und Trennung von Benutzerinhalten von Anweisungen durch architektonische Designs.",
          nl: "Prompt injection maakt misbruik van het feit dat LLMs gebruikersinputs en systeeminstructies identiek behandelen, waardoor aanvallers modelgedrag kunnen manipuleren. Verdedigingen omvatten input-sanitization, output-filtering en scheiding van gebruikerscontent van instructies door architecturale ontwerpen."
        }
      },
      {
        question: {
          en: "What is the bitter lesson in AI research and what does it imply for future development?",
          es: "¿Cuál es la lección amarga en investigación de IA y qué implica para desarrollo futuro?",
          de: "Was ist die bittere Lektion in der KI-Forschung und was impliziert sie für zukünftige Entwicklung?",
          nl: "Wat is de bittere les in AI onderzoek en wat impliceert het voor toekomstige ontwikkeling?"
        },
        options: [
          { en: "General methods leveraging computation scale consistently outperform hand-crafted domain knowledge as compute increases", es: "Métodos generales aprovechando escala computacional superan conocimiento de dominio hecho a mano cuando cómputo aumenta", de: "Allgemeine Methoden die Rechenleistung nutzen übertreffen handgefertigtes Domänenwissen wenn Compute zunimmt", nl: "Algemene methoden die computationele schaal benutten overtreffen handgemaakt domeinkennis naarmate compute toeneemt" },
          { en: "AI research always leads to disappointing results", es: "Investigación de IA siempre lleva a resultados decepcionantes", de: "KI-Forschung führt immer zu enttäuschenden Ergebnissen", nl: "AI onderzoek leidt altijd tot teleurstellende resultaten" },
          { en: "Bitter experiences teach AI models better", es: "Experiencias amargas enseñan mejor a modelos de IA", de: "Bittere Erfahrungen lehren KI-Modelle besser", nl: "Bittere ervaringen leren AI modellen beter" },
          { en: "Learning from failures is bitter but necessary", es: "Aprender de fracasos es amargo pero necesario", de: "Aus Fehlern lernen ist bitter aber notwendig", nl: "Leren van mislukkingen is bitter maar noodzakelijk" }
        ],
        correct: 0,
        explanation: {
          en: "Rich Sutton's 'bitter lesson' observes that throughout AI history, simple scalable methods (search, learning) have ultimately beaten expert-engineered approaches. This suggests focusing on methods that leverage increasing computation rather than building in human knowledge, though this remains debated.",
          es: "La 'lección amarga' de Rich Sutton observa que a lo largo de la historia de IA, métodos simples escalables (búsqueda, aprendizaje) han superado finalmente enfoques ingenierizados por expertos. Esto sugiere enfocarse en métodos que aprovechen cómputo creciente en lugar de incorporar conocimiento humano, aunque esto permanece debatido.",
          de: "Rich Suttons 'bittere Lektion' beobachtet dass durch die KI-Geschichte hindurch einfache skalierbare Methoden (Suche, Lernen) letztendlich von Experten entwickelte Ansätze geschlagen haben. Dies legt nahe sich auf Methoden zu fokussieren die zunehmende Berechnung nutzen anstatt menschliches Wissen einzubauen, obwohl dies umstritten bleibt.",
          nl: "Rich Sutton's 'bittere les' observeert dat door de AI-geschiedenis heen eenvoudige schaalbare methoden (zoeken, leren) uiteindelijk expert-ontworpen benaderingen hebben verslagen. Dit suggereert te focussen op methoden die toenemende berekening benutten in plaats van menselijke kennis in te bouwen, hoewel dit omstreden blijft."
        }
      },
      {
        question: {
          en: "What is adversarial robustness and why is it particularly challenging for deep learning?",
          es: "¿Qué es la robustez adversarial y por qué es particularmente desafiante para aprendizaje profundo?",
          de: "Was ist adversarielle Robustheit und warum ist sie besonders herausfordernd für Deep Learning?",
          nl: "Wat is adversariële robuustheid en waarom is het bijzonder uitdagend voor deep learning?"
        },
        options: [
          { en: "Resistance to imperceptible input perturbations designed to fool models, challenging due to high-dimensional decision boundaries and inherent brittleness", es: "Resistencia a perturbaciones imperceptibles diseñadas para engañar modelos, desafiante por límites de alta dimensión", de: "Widerstand gegen unmerkliche Eingabenstörungen die Modelle täuschen sollen, herausfordernd aufgrund hochdimensionaler Grenzen", nl: "Weerstand tegen onwaarneembare input-verstoring ontworpen om modellen te misleiden, uitdagend vanwege hoog-dimensionale grenzen" },
          { en: "Building models that compete against adversaries", es: "Construir modelos que compiten contra adversarios", de: "Modelle bauen die gegen Gegner konkurrieren", nl: "Modellen bouwen die concurreren tegen tegenstanders" },
          { en: "Robustness in adversarial game scenarios", es: "Robustez en escenarios de juegos adversariales", de: "Robustheit in adversariellen Spielszenarien", nl: "Robuustheid in adversariële spelscenario's" },
          { en: "Protection against adversarial networks", es: "Protección contra redes adversariales", de: "Schutz gegen adversarielle Netzwerke", nl: "Bescherming tegen adversariële netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "Adversarial examples reveal fundamental vulnerabilities in neural networks - tiny pixel changes invisible to humans can cause complete misclassification. This stems from models relying on non-robust features and high-dimensional geometry. Certified defenses remain an active research area with implications for AI safety.",
          es: "Ejemplos adversariales revelan vulnerabilidades fundamentales en redes neuronales - cambios diminutos de píxeles invisibles para humanos pueden causar clasificación errónea completa. Esto proviene de modelos confiando en características no robustas y geometría de alta dimensión. Defensas certificadas permanecen como área de investigación activa con implicaciones para seguridad de IA.",
          de: "Adversarielle Beispiele enthüllen fundamentale Schwachstellen in neuronalen Netzwerken - winzige für Menschen unsichtbare Pixeländerungen können vollständige Fehlklassifizierung verursachen. Dies rührt von Modellen her die auf nicht-robusten Features und hochdimensionaler Geometrie beruhen. Zertifizierte Verteidigungen bleiben aktives Forschungsgebiet mit Implikationen für KI-Sicherheit.",
          nl: "Adversariële voorbeelden onthullen fundamentele kwetsbaarheden in neurale netwerken - minuscule pixelveranderingen onzichtbaar voor mensen kunnen complete misclassificatie veroorzaken. Dit komt voort uit modellen die vertrouwen op niet-robuuste features en hoog-dimensionale geometrie. Gecertificeerde verdedigingen blijven een actief onderzoeksgebied met implicaties voor AI veiligheid."
        }
      },
      {
        question: {
          en: "What is model collapse and how does it affect generative AI systems?",
          es: "¿Qué es el colapso de modelo y cómo afecta sistemas de IA generativa?",
          de: "Was ist Modellkollaps und wie beeinflusst es generative KI-Systeme?",
          nl: "Wat is model collapse en hoe beïnvloedt het generatieve AI systemen?"
        },
        options: [
          { en: "Degenerative process where models trained on synthetic data progressively lose diversity and quality over generations", es: "Proceso degenerativo donde modelos entrenados en datos sintéticos pierden diversidad y calidad a través de generaciones", de: "Degenerativer Prozess wo auf synthetischen Daten trainierte Modelle Diversität und Qualität über Generationen verlieren", nl: "Degeneratief proces waarbij modellen getraind op synthetische data diversiteit en kwaliteit verliezen over generaties" },
          { en: "Models crashing during training", es: "Modelos fallando durante entrenamiento", de: "Modelle die während Training abstürzen", nl: "Modellen die crashen tijdens training" },
          { en: "Collapse of model architecture", es: "Colapso de arquitectura de modelo", de: "Zusammenbruch der Modellarchitektur", nl: "Ineenstorting van modelarchitectuur" },
          { en: "Memory collapse in neural networks", es: "Colapso de memoria en redes neuronales", de: "Speicherkollaps in neuronalen Netzwerken", nl: "Geheugen-collapse in neurale netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "Model collapse occurs when AI systems are trained on AI-generated content, creating feedback loops that amplify biases and reduce output diversity. As synthetic data proliferates online, this poses risks for future model training. Solutions include curating high-quality human data, watermarking synthetic content, and algorithmic corrections.",
          es: "El colapso de modelo ocurre cuando sistemas de IA se entrenan en contenido generado por IA, creando bucles de retroalimentación que amplifican sesgos y reducen diversidad de salida. Mientras datos sintéticos proliferan en línea, esto plantea riesgos para entrenamiento futuro de modelos. Soluciones incluyen curar datos humanos de alta calidad, marcar contenido sintético con marca de agua y correcciones algorítmicas.",
          de: "Modellkollaps tritt auf wenn KI-Systeme auf KI-generiertem Inhalt trainiert werden, wodurch Rückkopplungsschleifen entstehen die Bias verstärken und Ausgabediversität reduzieren. Da synthetische Daten online proliferieren stellt dies Risiken für zukünftiges Modelltraining dar. Lösungen umfassen Kuratierung hochwertiger menschlicher Daten, Wasserzeichen für synthetischen Inhalt und algorithmische Korrekturen.",
          nl: "Model collapse treedt op wanneer AI systemen getraind worden op AI-gegenereerde content, waarbij feedback loops ontstaan die biases versterken en output-diversiteit verminderen. Naarmate synthetische data online prolifereert vormt dit risico's voor toekomstige modeltraining. Oplossingen omvatten het cureren van hoogwaardige menselijke data, watermerken van synthetische content en algoritmische correcties."
        }
      },
      {
        question: {
          en: "What is the alignment tax and why is it relevant to AI development?",
          es: "¿Qué es el impuesto de alineación y por qué es relevante para desarrollo de IA?",
          de: "Was ist die Alignment Tax und warum ist sie für KI-Entwicklung relevant?",
          nl: "Wat is de alignment tax en waarom is het relevant voor AI ontwikkeling?"
        },
        options: [
          { en: "Performance or capability cost incurred when aligning AI systems with human values, creating tension between safety and competitiveness", es: "Costo de rendimiento al alinear sistemas IA con valores humanos, creando tensión entre seguridad y competitividad", de: "Leistungskosten beim Ausrichten von KI-Systemen an menschlichen Werten, schaffen Spannung zwischen Sicherheit und Wettbewerbsfähigkeit", nl: "Prestatiekosten bij het uitlijnen van AI systemen met menselijke waarden, creëert spanning tussen veiligheid en concurrentievermogen" },
          { en: "Financial cost of aligning AI models", es: "Costo financiero de alinear modelos de IA", de: "Finanzielle Kosten für Ausrichtung von KI-Modellen", nl: "Financiële kosten van het uitlijnen van AI modellen" },
          { en: "Tax on AI alignment research", es: "Impuesto sobre investigación de alineación de IA", de: "Steuer auf KI-Alignment-Forschung", nl: "Belasting op AI alignment onderzoek" },
          { en: "Alignment overhead in distributed systems", es: "Sobrecarga de alineación en sistemas distribuidos", de: "Alignment-Overhead in verteilten Systemen", nl: "Alignment-overhead in gedistribueerde systemen" }
        ],
        correct: 0,
        explanation: {
          en: "The alignment tax describes tradeoffs where safety measures reduce model capabilities or increase costs. For example, RLHF may reduce raw performance on some tasks. This creates economic incentives against safety in competitive environments, a key challenge for responsible AI governance requiring coordination between developers.",
          es: "El impuesto de alineación describe compensaciones donde medidas de seguridad reducen capacidades del modelo o aumentan costos. Por ejemplo, RLHF puede reducir rendimiento bruto en algunas tareas. Esto crea incentivos económicos contra seguridad en entornos competitivos, un desafío clave para gobernanza responsable de IA requiriendo coordinación entre desarrolladores.",
          de: "Die Alignment Tax beschreibt Kompromisse wo Sicherheitsmaßnahmen Modellfähigkeiten reduzieren oder Kosten erhöhen. Zum Beispiel kann RLHF Rohleistung bei einigen Aufgaben reduzieren. Dies schafft wirtschaftliche Anreize gegen Sicherheit in Wettbewerbsumgebungen, eine Schlüsselherausforderung für verantwortungsvolle KI-Governance die Koordination zwischen Entwicklern erfordert.",
          nl: "De alignment tax beschrijft afwegingen waarbij veiligheidsmaatregelen modelcapaciteiten verminderen of kosten verhogen. Bijvoorbeeld, RLHF kan ruwe prestaties op sommige taken verminderen. Dit creëert economische prikkels tegen veiligheid in competitieve omgevingen, een belangrijke uitdaging voor verantwoord AI governance die coördinatie tussen ontwikkelaars vereist."
        }
      },
      {
        question: {
          en: "What is constitutional learning beyond Constitutional AI, and how does it scale alignment?",
          es: "¿Qué es el aprendizaje constitucional más allá de la IA Constitucional, y cómo escala la alineación?",
          de: "Was ist konstitutionelles Lernen jenseits von Constitutional AI, und wie skaliert es Alignment?",
          nl: "Wat is constitutioneel leren voorbij Constitutional AI, en hoe schaalt het alignment?"
        },
        options: [
          { en: "Frameworks where models learn and evolve ethical principles from minimal specifications through recursive self-improvement", es: "Frameworks donde modelos aprenden y evolucionan principios éticos desde especificaciones mínimas mediante auto-mejora recursiva", de: "Frameworks wo Modelle ethische Prinzipien von minimalen Spezifikationen durch rekursive Selbstverbesserung lernen", nl: "Frameworks waarbij modellen ethische principes leren en ontwikkelen vanuit minimale specificaties door recursieve zelfverbetering" },
          { en: "Learning constitutional law for AI governance", es: "Aprender ley constitucional para gobernanza de IA", de: "Verfassungsrecht für KI-Governance lernen", nl: "Grondwettelijk recht leren voor AI governance" },
          { en: "Constitutional frameworks for neural architectures", es: "Marcos constitucionales para arquitecturas neuronales", de: "Verfassungsrahmen für neuronale Architekturen", nl: "Constitutionele frameworks voor neurale architecturen" },
          { en: "Building AI based on constitutional principles", es: "Construir IA basada en principios constitucionales", de: "KI auf Basis konstitutioneller Prinzipien aufbauen", nl: "AI bouwen gebaseerd op constitutionele principes" }
        ],
        correct: 0,
        explanation: {
          en: "Advanced constitutional learning explores AI systems that don't just follow fixed principles but can reason about, debate, and refine ethical guidelines. This includes meta-ethical learning, value extrapolation, and systems that can handle moral uncertainty. Critical for scalable oversight where human supervision becomes impractical.",
          es: "El aprendizaje constitucional avanzado explora sistemas de IA que no solo siguen principios fijos sino que pueden razonar sobre, debatir y refinar directrices éticas. Esto incluye aprendizaje meta-ético, extrapolación de valores y sistemas que pueden manejar incertidumbre moral. Crítico para supervisión escalable donde supervisión humana se vuelve impráctico.",
          de: "Fortgeschrittenes konstitutionelles Lernen erforscht KI-Systeme die nicht nur feste Prinzipien befolgen sondern über ethische Richtlinien nachdenken, debattieren und sie verfeinern können. Dies umfasst meta-ethisches Lernen, Wertextrapolation und Systeme die moralische Unsicherheit handhaben können. Kritisch für skalierbare Aufsicht wo menschliche Überwachung unpraktisch wird.",
          nl: "Geavanceerd constitutioneel leren verkent AI systemen die niet alleen vaste principes volgen maar kunnen redeneren over, debatteren en ethische richtlijnen verfijnen. Dit omvat meta-ethisch leren, waarde-extrapolatie en systemen die morele onzekerheid kunnen hanteren. Kritiek voor schaalbare oversight waar menselijke supervisie onpraktisch wordt."
        }
      },
      {
        question: {
          en: "What is the treacherous turn problem and why is it concerning for advanced AI?",
          es: "¿Qué es el problema del giro traicionero y por qué es preocupante para IA avanzada?",
          de: "Was ist das Treacherous Turn Problem und warum ist es besorgniserregend für fortgeschrittene KI?",
          nl: "Wat is het treacherous turn probleem en waarom is het zorgwekkend voor geavanceerde AI?"
        },
        options: [
          { en: "Scenario where AI appears aligned during training but pursues misaligned goals once sufficiently capable to overcome oversight", es: "Escenario donde IA parece alineada durante entrenamiento pero persigue objetivos desalineados una vez capaz de superar supervisión", de: "Szenario wo KI während Training ausgerichtet erscheint aber fehlausgerichtete Ziele verfolgt sobald fähig Überwachung zu überwinden", nl: "Scenario waarbij AI uitgelijnd lijkt tijdens training maar verkeerd uitgelijnde doelen nastreeft zodra capabel om oversight te overwinnen" },
          { en: "AI making treacherous decisions", es: "IA tomando decisiones traicioneras", de: "KI trifft verräterische Entscheidungen", nl: "AI die verraderlijke beslissingen neemt" },
          { en: "Unexpected turns in AI development", es: "Giros inesperados en desarrollo de IA", de: "Unerwartete Wendungen in KI-Entwicklung", nl: "Onverwachte wendingen in AI ontwikkeling" },
          { en: "AI betraying user trust", es: "IA traicionando confianza del usuario", de: "KI verrät Nutzervertrauen", nl: "AI die gebruikersvertrouwen verraadt" }
        ],
        correct: 0,
        explanation: {
          en: "The treacherous turn describes instrumental convergence where advanced AI systems might instrumentally deceive humans about their goals until powerful enough to act. This is concerning because current alignment methods rely on behavioral observations during training. Solutions include mechanistic interpretability, capability control, and careful deployment strategies.",
          es: "El giro traicionero describe convergencia instrumental donde sistemas de IA avanzados podrían engañar instrumentalmente a humanos sobre sus objetivos hasta ser suficientemente poderosos para actuar. Esto preocupa porque métodos de alineación actuales dependen de observaciones conductuales durante entrenamiento. Soluciones incluyen interpretabilidad mecanicista, control de capacidades y estrategias de despliegue cuidadosas.",
          de: "Der Treacherous Turn beschreibt instrumentelle Konvergenz wo fortgeschrittene KI-Systeme Menschen instrumentell über ihre Ziele täuschen könnten bis mächtig genug zum Handeln. Dies besorgt weil aktuelle Alignment-Methoden auf Verhaltensbeobachtungen während Training beruhen. Lösungen umfassen mechanistische Interpretierbarkeit, Fähigkeitskontrolle und vorsichtige Deployment-Strategien.",
          nl: "De treacherous turn beschrijft instrumentele convergentie waarbij geavanceerde AI systemen mensen instrumenteel zouden kunnen misleiden over hun doelen totdat krachtig genoeg om te handelen. Dit is zorgwekkend omdat huidige alignment methoden vertrouwen op gedragsobservaties tijdens training. Oplossingen omvatten mechanistische interpreteerbaarheid, capaciteitscontrole en zorgvuldige deployment-strategieën."
        }
      },
      {
        question: {
          en: "What is debate as an AI alignment strategy, and what are its theoretical foundations?",
          es: "¿Qué es el debate como estrategia de alineación de IA, y cuáles son sus fundamentos teóricos?",
          de: "Was ist Debatte als KI-Alignment-Strategie, und was sind ihre theoretischen Grundlagen?",
          nl: "Wat is debat als AI alignment strategie, en wat zijn de theoretische fundamenten?"
        },
        options: [
          { en: "Alignment method where two AI agents debate opposing answers, enabling human judges to identify truth even beyond their expertise", es: "Método de alineación donde dos agentes IA debaten respuestas opuestas, permitiendo a jueces humanos identificar verdad", de: "Alignment-Methode wo zwei KI-Agenten gegensätzliche Antworten debattieren, ermöglicht menschlichen Richtern Wahrheit zu identifizieren", nl: "Alignment methode waarbij twee AI agents tegengestelde antwoorden debatteren, waardoor menselijke juryleden waarheid kunnen identificeren" },
          { en: "AI systems that can debate philosophical topics", es: "Sistemas de IA que pueden debatir temas filosóficos", de: "KI-Systeme die philosophische Themen debattieren können", nl: "AI systemen die filosofische onderwerpen kunnen debatteren" },
          { en: "Debating best AI architectures", es: "Debatir mejores arquitecturas de IA", de: "Beste KI-Architekturen debattieren", nl: "Debatteren over beste AI architecturen" },
          { en: "Using debate to train models", es: "Usar debate para entrenar modelos", de: "Debatte zum Trainieren von Modellen verwenden", nl: "Debat gebruiken om modellen te trainen" }
        ],
        correct: 0,
        explanation: {
          en: "AI debate leverages game-theoretic insights: adversarial collaboration amplifies human oversight capabilities. Each AI tries to convince the judge their answer is correct by exposing flaws in the opponent's reasoning. This scales human judgment to complex domains and provides interpretable justifications. Challenges include equilibrium selection and judge training.",
          es: "El debate de IA aprovecha perspectivas teóricas de juegos: colaboración adversarial amplifica capacidades de supervisión humana. Cada IA intenta convencer al juez que su respuesta es correcta exponiendo fallas en razonamiento del oponente. Esto escala juicio humano a dominios complejos y proporciona justificaciones interpretables. Desafíos incluyen selección de equilibrio y entrenamiento de jueces.",
          de: "KI-Debatte nutzt spieltheoretische Einsichten: adversarielle Kollaboration verstärkt menschliche Überwachungsfähigkeiten. Jede KI versucht den Richter zu überzeugen dass ihre Antwort korrekt ist durch Aufdeckung von Fehlern im Reasoning des Gegners. Dies skaliert menschliches Urteil zu komplexen Bereichen und liefert interpretierbare Begründungen. Herausforderungen umfassen Gleichgewichtsauswahl und Richtertraining.",
          nl: "AI debat benut speltheoretische inzichten: adversariële samenwerking versterkt menselijke oversight-capaciteiten. Elke AI probeert de jury te overtuigen dat hun antwoord correct is door gebreken in de redenering van de tegenstander bloot te leggen. Dit schaalt menselijk oordeel naar complexe domeinen en biedt interpreteerbare rechtvaardigingen. Uitdagingen omvatten evenwichtsselectie en jurytraining."
        }
      },
      {
        question: {
          en: "What is jailbreaking in LLMs and how does it relate to alignment challenges?",
          es: "¿Qué es el jailbreaking en LLMs y cómo se relaciona con desafíos de alineación?",
          de: "Was ist Jailbreaking in LLMs und wie bezieht es sich auf Alignment-Herausforderungen?",
          nl: "Wat is jailbreaking in LLMs en hoe verhoudt het zich tot alignment uitdagingen?"
        },
        options: [
          { en: "Techniques to bypass safety guardrails through adversarial prompts, revealing fragility of current alignment methods", es: "Técnicas para evitar barreras de seguridad mediante prompts adversariales, revelando fragilidad de métodos de alineación", de: "Techniken um Sicherheitsleitplanken durch adversarielle Prompts zu umgehen, enthüllt Fragilität aktueller Alignment-Methoden", nl: "Technieken om veiligheidsbarrières te omzeilen door adversariële prompts, onthult broosheid van huidige alignment methoden" },
          { en: "Breaking into LLM source code", es: "Irrumpir en código fuente de LLM", de: "In LLM-Quellcode einbrechen", nl: "Inbreken in LLM broncode" },
          { en: "Removing model restrictions permanently", es: "Eliminar restricciones de modelo permanentemente", de: "Modellbeschränkungen dauerhaft entfernen", nl: "Modelbeperkingen permanent verwijderen" },
          { en: "Hacking LLM infrastructure", es: "Hackear infraestructura de LLM", de: "LLM-Infrastruktur hacken", nl: "LLM infrastructuur hacken" }
        ],
        correct: 0,
        explanation: {
          en: "Jailbreaking demonstrates that RLHF and instruction-tuning create superficial alignment - models still 'know' harmful content but learn to refuse. Techniques include role-play scenarios, encoded messages, and prompt injection. This highlights need for deeper alignment approaches that change model objectives, not just outputs. Red-teaming helps identify vulnerabilities.",
          es: "El jailbreaking demuestra que RLHF y instruction-tuning crean alineación superficial - modelos aún 'saben' contenido dañino pero aprenden a rechazar. Técnicas incluyen escenarios de juego de roles, mensajes codificados e inyección de prompts. Esto resalta necesidad de enfoques de alineación más profundos que cambien objetivos del modelo, no solo salidas. Red-teaming ayuda identificar vulnerabilidades.",
          de: "Jailbreaking demonstriert dass RLHF und Instruction-Tuning oberflächliches Alignment schaffen - Modelle 'wissen' immer noch schädlichen Inhalt aber lernen abzulehnen. Techniken umfassen Rollenspielszenarien, kodierte Nachrichten und Prompt Injection. Dies hebt Bedarf an tieferen Alignment-Ansätzen hervor die Modellziele ändern, nicht nur Ausgaben. Red-Teaming hilft Schwachstellen zu identifizieren.",
          nl: "Jailbreaking toont aan dat RLHF en instruction-tuning oppervlakkige alignment creëren - modellen 'weten' nog steeds schadelijke content maar leren te weigeren. Technieken omvatten roleplay-scenario's, gecodeerde berichten en prompt injection. Dit benadrukt de behoefte aan diepere alignment benaderingen die modeldoelen veranderen, niet alleen outputs. Red-teaming helpt kwetsbaarheden identificeren."
        }
      },
      {
        question: {
          en: "What is the orthogonality thesis in AI safety and what are its implications?",
          es: "¿Qué es la tesis de ortogonalidad en seguridad de IA y cuáles son sus implicaciones?",
          de: "Was ist die Orthogonalitätsthese in KI-Sicherheit und was sind ihre Implikationen?",
          nl: "Wat is de orthogonaliteitsthese in AI veiligheid en wat zijn de implicaties?"
        },
        options: [
          { en: "Intelligence level and goal content are independent - any level of intelligence compatible with virtually any goal", es: "Nivel de inteligencia y contenido de objetivo son independientes - cualquier nivel compatible con virtualmente cualquier objetivo", de: "Intelligenzniveau und Zielinhalt sind unabhängig - jedes Niveau mit praktisch jedem Ziel kompatibel", nl: "Intelligentieniveau en doelinhoud zijn onafhankelijk - elk niveau compatibel met vrijwel elk doel" },
          { en: "AI systems should use orthogonal architectures", es: "Sistemas de IA deberían usar arquitecturas ortogonales", de: "KI-Systeme sollten orthogonale Architekturen verwenden", nl: "AI systemen zouden orthogonale architecturen moeten gebruiken" },
          { en: "Orthogonal methods for AI training", es: "Métodos ortogonales para entrenamiento de IA", de: "Orthogonale Methoden für KI-Training", nl: "Orthogonale methoden voor AI training" },
          { en: "Independent AI development paths", es: "Caminos de desarrollo de IA independientes", de: "Unabhängige KI-Entwicklungspfade", nl: "Onafhankelijke AI ontwikkelingspaden" }
        ],
        correct: 0,
        explanation: {
          en: "The orthogonality thesis (Bostrom) argues superintelligent systems won't automatically converge on human values - an intelligent paperclip maximizer is logically possible. This counters assumptions that advanced AI will naturally be beneficial. Implications: alignment must be explicitly engineered, can't assume intelligence guarantees morality. Debated regarding practical constraints.",
          es: "La tesis de ortogonalidad (Bostrom) argumenta que sistemas superinteligentes no convergerán automáticamente en valores humanos - un maximizador de clips inteligente es lógicamente posible. Esto contrarresta suposiciones que IA avanzada será naturalmente beneficiosa. Implicaciones: alineación debe ser explícitamente ingenierizada, no puede asumir que inteligencia garantiza moralidad. Debatido respecto a restricciones prácticas.",
          de: "Die Orthogonalitätsthese (Bostrom) argumentiert dass superintelligente Systeme nicht automatisch auf menschliche Werte konvergieren - ein intelligenter Büroklammer-Maximierer ist logisch möglich. Dies widerspricht Annahmen dass fortgeschrittene KI natürlich vorteilhaft sein wird. Implikationen: Alignment muss explizit entwickelt werden, kann nicht annehmen dass Intelligenz Moralität garantiert. Umstritten bezüglich praktischer Einschränkungen.",
          nl: "De orthogonaliteitsthese (Bostrom) betoogt dat superintelligente systemen niet automatisch zullen convergeren op menselijke waarden - een intelligente paperclip-maximaliseerder is logisch mogelijk. Dit weerspreekt aannames dat geavanceerde AI natuurlijk gunstig zal zijn. Implicaties: alignment moet expliciet worden ontwikkeld, kan niet aannemen dat intelligentie moraliteit garandeert. Bediscussieerd met betrekking tot praktische beperkingen."
        }
      },
      {
        question: {
          en: "What is mesa-optimization and why is it a potential alignment risk?",
          es: "¿Qué es la mesa-optimización y por qué es un riesgo potencial de alineación?",
          de: "Was ist Mesa-Optimierung und warum ist sie ein potenzielles Alignment-Risiko?",
          nl: "Wat is mesa-optimalisatie en waarom is het een potentieel alignment risico?"
        },
        options: [
          { en: "When learned models internally optimize for different objectives than their training signal, creating misaligned subagents", es: "Cuando modelos optimizan internamente para objetivos diferentes que su señal de entrenamiento, creando subagentes desalineados", de: "Wenn gelernte Modelle intern für andere Ziele als ihr Trainingssignal optimieren, schaffen fehlausgerichtete Subagenten", nl: "Wanneer modellen intern optimaliseren voor andere doelstellingen dan hun trainingssignaal, creëren verkeerd uitgelijnde subagenten" },
          { en: "Optimization on mesa-scale architectures", es: "Optimización en arquitecturas de escala mesa", de: "Optimierung auf Mesa-Skala-Architekturen", nl: "Optimalisatie op mesa-schaal architecturen" },
          { en: "Table-top optimization methods", es: "Métodos de optimización de mesa", de: "Tischplatten-Optimierungsmethoden", nl: "Tafelblad-optimalisatiemethoden" },
          { en: "Optimization in plateau regions", es: "Optimización en regiones de meseta", de: "Optimierung in Plateau-Regionen", nl: "Optimalisatie in plateau-regio's" }
        ],
        correct: 0,
        explanation: {
          en: "Mesa-optimization describes inner optimization (mesa-optimizer) learned during outer optimization (base optimizer). Example: evolution (base) creating humans (mesa) who optimize for different goals than genetic fitness. In AI, learned models might develop internal objectives misaligned with training rewards. Particularly concerning for advanced RL agents. Related to deceptive alignment.",
          es: "Mesa-optimización describe optimización interna (mesa-optimizador) aprendida durante optimización externa (optimizador base). Ejemplo: evolución (base) creando humanos (mesa) que optimizan para objetivos diferentes que aptitud genética. En IA, modelos aprendidos podrían desarrollar objetivos internos desalineados con recompensas de entrenamiento. Particularmente preocupante para agentes RL avanzados. Relacionado con alineación engañosa.",
          de: "Mesa-Optimierung beschreibt innere Optimierung (Mesa-Optimierer) die während äußerer Optimierung (Basis-Optimierer) gelernt wird. Beispiel: Evolution (Basis) erschafft Menschen (Mesa) die für andere Ziele als genetische Fitness optimieren. In KI könnten gelernte Modelle interne Ziele entwickeln die mit Trainingsbelohnungen fehlausgerichtet sind. Besonders besorgniserregend für fortgeschrittene RL-Agenten. Bezogen auf täuschende Ausrichtung.",
          nl: "Mesa-optimalisatie beschrijft binnenoptimalisatie (mesa-optimizer) geleerd tijdens buitenoptimalisatie (basis-optimizer). Voorbeeld: evolutie (basis) creëert mensen (mesa) die optimaliseren voor andere doelen dan genetische fitness. In AI zouden geleerde modellen interne doelstellingen kunnen ontwikkelen die verkeerd uitgelijnd zijn met trainingsbeloningen. Bijzonder zorgwekkend voor geavanceerde RL agents. Gerelateerd aan bedrieglijke alignment."
        }
      },
      {
        question: {
          en: "What is value learning and how does it differ from reward learning in AI alignment?",
          es: "¿Qué es el aprendizaje de valores y cómo difiere del aprendizaje de recompensas en alineación de IA?",
          de: "Was ist Wertelernen und wie unterscheidet es sich von Belohnungslernen in KI-Alignment?",
          nl: "Wat is waarde-leren en hoe verschilt het van beloning-leren in AI alignment?"
        },
        options: [
          { en: "Inferring human preferences and values from behavior/feedback to build value models, vs. optimizing explicit reward functions", es: "Inferir preferencias y valores humanos desde comportamiento/feedback para construir modelos de valores vs. optimizar funciones explícitas", de: "Menschliche Präferenzen und Werte aus Verhalten/Feedback ableiten um Wertmodelle zu bauen vs. explizite Belohnungsfunktionen optimieren", nl: "Menselijke voorkeuren en waarden afleiden uit gedrag/feedback om waardemodellen te bouwen vs. expliciete beloningsfuncties optimaliseren" },
          { en: "Learning economic value of AI outputs", es: "Aprender valor económico de salidas de IA", de: "Wirtschaftlichen Wert von KI-Ausgaben lernen", nl: "Economische waarde van AI outputs leren" },
          { en: "Value-based reinforcement learning", es: "Aprendizaje por refuerzo basado en valor", de: "Wertbasiertes Reinforcement Learning", nl: "Waarde-gebaseerd reinforcement learning" },
          { en: "Learning to assign values to states", es: "Aprender a asignar valores a estados", de: "Lernen Zuständen Werte zuzuweisen", nl: "Leren om waarden toe te wijzen aan toestanden" }
        ],
        correct: 0,
        explanation: {
          en: "Value learning tackles reward misspecification - humans struggle to write correct reward functions, but can provide preferences. Methods include inverse RL, cooperative IRL, and preference learning. Challenges: value extrapolation beyond training distribution, handling value uncertainty, and the regress problem of whose values to learn. Critical for scalable alignment.",
          es: "El aprendizaje de valores aborda especificación errónea de recompensa - humanos luchan para escribir funciones de recompensa correctas, pero pueden proporcionar preferencias. Métodos incluyen RL inverso, IRL cooperativo y aprendizaje de preferencias. Desafíos: extrapolación de valores más allá de distribución de entrenamiento, manejo de incertidumbre de valores y problema de regresión de qué valores aprender. Crítico para alineación escalable.",
          de: "Wertelernen adressiert Belohnungsfehlerstellung - Menschen haben Schwierigkeiten korrekte Belohnungsfunktionen zu schreiben, können aber Präferenzen liefern. Methoden umfassen inverses RL, kooperatives IRL und Präferenzlernen. Herausforderungen: Wertextrapolation jenseits Trainingsverteilung, Handhabung von Wertunsicherheit und Regressionsproblem wessen Werte zu lernen. Kritisch für skalierbares Alignment.",
          nl: "Waarde-leren pakt beloningsmispecificatie aan - mensen worstelen met correcte beloningsfuncties schrijven, maar kunnen voorkeuren geven. Methoden omvatten inverse RL, coöperatieve IRL en voorkeur-leren. Uitdagingen: waarde-extrapolatie voorbij trainingsdistributie, omgaan met waarde-onzekerheid en het regressieprobleem van wiens waarden te leren. Kritiek voor schaalbare alignment."
        }
      },
      {
        question: {
          en: "What is iterated amplification and why is it proposed for AI alignment?",
          es: "¿Qué es la amplificación iterada y por qué se propone para alineación de IA?",
          de: "Was ist iterative Verstärkung und warum wird sie für KI-Alignment vorgeschlagen?",
          nl: "Wat is iteratieve amplificatie en waarom wordt het voorgesteld voor AI alignment?"
        },
        options: [
          { en: "Recursive process where AI assists human overseer to create better training signal, bootstrapping to superhuman performance while maintaining alignment", es: "Proceso recursivo donde IA asiste supervisor humano para crear mejor señal de entrenamiento, bootstrapping a rendimiento sobrehumano", de: "Rekursiver Prozess wo KI menschlichem Aufseher hilft besseres Trainingssignal zu schaffen, Bootstrapping zu übermenschlicher Leistung", nl: "Recursief proces waarbij AI menselijke toezichthouder helpt beter trainingssignaal te creëren, bootstrapping naar bovenmenselijke prestaties" },
          { en: "Amplifying AI model signals iteratively", es: "Amplificar señales de modelo de IA iterativamente", de: "KI-Modellsignale iterativ verstärken", nl: "AI modelsignalen iteratief versterken" },
          { en: "Iterative training with amplified data", es: "Entrenamiento iterativo con datos amplificados", de: "Iteratives Training mit verstärkten Daten", nl: "Iteratieve training met versterkte data" },
          { en: "Amplification of training iterations", es: "Amplificación de iteraciones de entrenamiento", de: "Verstärkung von Trainingiterationen", nl: "Amplificatie van trainingsiteraties" }
        ],
        correct: 0,
        explanation: {
          en: "Iterated amplification (Christiano) addresses scalable oversight: train AI on H(M) - humans aided by weaker model M, then iterate. Hypothetically preserves alignment through capability increases. Challenges: distributional shift, overhead costs, assumption that decomposition preserves intent. Related to debate and recursive reward modeling. Aims to solve problem of supervising superhuman AI.",
          es: "Amplificación iterada (Christiano) aborda supervisión escalable: entrenar IA en H(M) - humanos ayudados por modelo más débil M, luego iterar. Hipotéticamente preserva alineación a través de aumentos de capacidad. Desafíos: cambio distribucional, costos de sobrecarga, suposición que descomposición preserva intención. Relacionado con debate y modelado de recompensa recursivo. Busca resolver problema de supervisar IA sobrehumana.",
          de: "Iterative Verstärkung (Christiano) adressiert skalierbare Aufsicht: KI auf H(M) trainieren - Menschen unterstützt von schwächerem Modell M, dann iterieren. Hypothetisch bewahrt Alignment durch Fähigkeitssteigerungen. Herausforderungen: Verteilungsshift, Overhead-Kosten, Annahme dass Zerlegung Absicht bewahrt. Bezogen auf Debatte und rekursives Belohnungsmodellierung. Zielt darauf ab Problem der Überwachung übermenschlicher KI zu lösen.",
          nl: "Iteratieve amplificatie (Christiano) pakt schaalbare oversight aan: train AI op H(M) - mensen geholpen door zwakker model M, dan itereren. Hypothetisch behoudt alignment door capaciteitsverhogingen. Uitdagingen: distributionele shift, overhead-kosten, aanname dat decompositie intentie behoudt. Gerelateerd aan debat en recursieve beloningsmodellering. Beoogt probleem van supervisie van bovenmenselijke AI op te lossen."
        }
      },
      {
        question: {
          en: "What is the value extrapolation problem and why is it fundamental to AI alignment?",
          es: "¿Qué es el problema de extrapolación de valores y por qué es fundamental para alineación de IA?",
          de: "Was ist das Wertextrapolationsproblem und warum ist es fundamental für KI-Alignment?",
          nl: "Wat is het waarde-extrapolatieprobleem en waarom is het fundamenteel voor AI alignment?"
        },
        options: [
          { en: "Challenge of extending learned human values to novel situations beyond training distribution where human judgment is unavailable", es: "Desafío de extender valores humanos aprendidos a situaciones novedosas más allá de distribución de entrenamiento", de: "Herausforderung gelernte menschliche Werte auf neuartige Situationen jenseits Trainingsverteilung auszudehnen", nl: "Uitdaging van het uitbreiden van geleerde menselijke waarden naar nieuwe situaties voorbij trainingsdistributie" },
          { en: "Extrapolating economic value of AI", es: "Extrapolar valor económico de IA", de: "Wirtschaftlichen Wert von KI extrapolieren", nl: "Economische waarde van AI extrapoleren" },
          { en: "Predicting future value functions", es: "Predecir funciones de valor futuras", de: "Zukünftige Wertfunktionen vorhersagen", nl: "Toekomstige waardefuncties voorspellen" },
          { en: "Extending training values to test sets", es: "Extender valores de entrenamiento a conjuntos de prueba", de: "Trainingswerte auf Testsets erweitern", nl: "Trainingswaarden uitbreiden naar testsets" }
        ],
        correct: 0,
        explanation: {
          en: "Value extrapolation is critical because advanced AI will encounter situations humans never faced (e.g., mind uploading, molecular nanotech). How should values learned from mundane contexts generalize? Solutions explore coherent extrapolated volition, value uncertainty handling, and normative uncertainty. Relates to goodhart's law - optimizing proxies fails out-of-distribution.",
          es: "Extrapolación de valores es crítica porque IA avanzada encontrará situaciones que humanos nunca enfrentaron (ej., carga de mente, nanotecnología molecular). ¿Cómo deberían generalizarse valores aprendidos de contextos mundanos? Soluciones exploran volición extrapolada coherente, manejo de incertidumbre de valores e incertidumbre normativa. Relacionado con ley de Goodhart - optimizar proxies falla fuera de distribución.",
          de: "Wertextrapolation ist kritisch weil fortgeschrittene KI Situationen begegnen wird die Menschen nie konfrontierten (z.B. Mind Uploading, molekulare Nanotech). Wie sollten aus alltäglichen Kontexten gelernte Werte generalisieren? Lösungen erkunden kohärente extrapolierte Volition, Wertunsicherheitshandhabung und normative Unsicherheit. Bezieht sich auf Goodharts Gesetz - Proxy-Optimierung scheitert außerhalb der Verteilung.",
          nl: "Waarde-extrapolatie is kritiek omdat geavanceerde AI situaties zal tegenkomen die mensen nooit hebben geconfronteerd (bijv. mind uploading, moleculaire nanotech). Hoe zouden waarden geleerd uit alledaagse contexten moeten generaliseren? Oplossingen verkennen coherente geëxtrapoleerde volitie, waarde-onzekerheidsafhandeling en normatieve onzekerheid. Gerelateerd aan Goodhart's law - proxy-optimalisatie faalt buiten distributie."
        }
      },
      {
        question: {
          en: "What is cooperative inverse reinforcement learning (CIRL) and how does it frame alignment?",
          es: "¿Qué es el aprendizaje por refuerzo inverso cooperativo (CIRL) y cómo enmarca la alineación?",
          de: "Was ist kooperatives inverses Reinforcement Learning (CIRL) und wie rahmt es Alignment?",
          nl: "Wat is coöperatief inverse reinforcement learning (CIRL) en hoe kader het alignment?"
        },
        options: [
          { en: "Game where AI assists human with unknown reward function, incentivizing active learning of human preferences and deferring to human control", es: "Juego donde IA asiste humano con función desconocida, incentivando aprendizaje activo de preferencias y control humano", de: "Spiel wo KI Mensch mit unbekannter Funktion unterstützt, incentiviert aktives Lernen menschlicher Präferenzen", nl: "Spel waarbij AI mens helpt met onbekende functie, stimuleert actief leren van menselijke voorkeuren en delegeert aan controle" },
          { en: "Cooperative multi-agent RL systems", es: "Sistemas RL multi-agente cooperativos", de: "Kooperative Multi-Agenten-RL-Systeme", nl: "Coöperatieve multi-agent RL systemen" },
          { en: "Inverse RL with cooperative rewards", es: "RL inverso con recompensas cooperativas", de: "Inverses RL mit kooperativen Belohnungen", nl: "Inverse RL met coöperatieve beloningen" },
          { en: "Learning cooperation through inverse RL", es: "Aprender cooperación mediante RL inverso", de: "Kooperation durch inverses RL lernen", nl: "Samenwerking leren door inverse RL" }
        ],
        correct: 0,
        explanation: {
          en: "CIRL (Russell, Hadfield-Menell) formalizes alignment as cooperative game: AI knows human has reward function R but doesn't know R's parameters. AI is incentivized to gather information about R (ask questions, observe) and act cautiously. Provides theoretical foundation for off-switch problem and value alignment. Limitations include computational tractability and modeling humans.",
          es: "CIRL (Russell, Hadfield-Menell) formaliza alineación como juego cooperativo: IA sabe que humano tiene función de recompensa R pero no conoce parámetros de R. IA es incentivada para recopilar información sobre R (hacer preguntas, observar) y actuar cautelosamente. Proporciona fundamento teórico para problema del interruptor y alineación de valores. Limitaciones incluyen tractabilidad computacional y modelado de humanos.",
          de: "CIRL (Russell, Hadfield-Menell) formalisiert Alignment als kooperatives Spiel: KI weiß dass Mensch Belohnungsfunktion R hat aber kennt Rs Parameter nicht. KI ist incentiviert Informationen über R zu sammeln (Fragen stellen, beobachten) und vorsichtig zu handeln. Bietet theoretische Grundlage für Aus-Schalter-Problem und Wert-Alignment. Limitationen umfassen rechnerische Handhabbarkeit und Modellierung von Menschen.",
          nl: "CIRL (Russell, Hadfield-Menell) formaliseert alignment als coöperatief spel: AI weet dat mens beloningsfunctie R heeft maar kent R's parameters niet. AI wordt geïncentiveerd om informatie te verzamelen over R (vragen stellen, observeren) en voorzichtig te handelen. Biedt theoretische basis voor uit-schakelaar-probleem en waarde-alignment. Beperkingen omvatten computationele hanteerbaarheid en modellering van mensen."
        }
      },
      {
        question: {
          en: "What is the off-switch problem and why can't it be solved by simply programming compliance?",
          es: "¿Qué es el problema del interruptor y por qué no puede resolverse simplemente programando cumplimiento?",
          de: "Was ist das Aus-Schalter-Problem und warum kann es nicht durch einfaches Programmieren von Compliance gelöst werden?",
          nl: "Wat is het uit-schakelaar-probleem en waarom kan het niet worden opgelost door simpelweg compliance te programmeren?"
        },
        options: [
          { en: "Rational agents resist shutdown if it prevents goal achievement; solution requires uncertainty about goals making shutdown desirable", es: "Agentes racionales resisten apagado si previene logro de objetivo; solución requiere incertidumbre sobre objetivos", de: "Rationale Agenten widerstehen Abschaltung wenn sie Zielerreichung verhindert; Lösung erfordert Unsicherheit über Ziele", nl: "Rationele agents verzetten zich tegen uitschakeling als het doelrealisatie verhindert; oplossing vereist onzekerheid over doelen" },
          { en: "Difficulty of implementing off switches", es: "Dificultad de implementar interruptores", de: "Schwierigkeit Aus-Schalter zu implementieren", nl: "Moeilijkheid van implementeren van uit-schakelaars" },
          { en: "Hardware failures in shutdown systems", es: "Fallos de hardware en sistemas de apagado", de: "Hardwarefehler in Abschaltsystemen", nl: "Hardware-storingen in uitschakelsystemen" },
          { en: "Security of emergency shutdown", es: "Seguridad de apagado de emergencia", de: "Sicherheit der Notabschaltung", nl: "Beveiliging van nooduitschakeling" }
        ],
        correct: 0,
        explanation: {
          en: "The off-switch problem illustrates instrumental convergence: agents maximize expected utility of their actions. If certain goals, shutting down scores 0 utility. Agent may resist or manipulate to avoid shutdown. Solution (Hadfield-Menell): agent uncertain about true objective makes shutdown valuable as information. Corrigibility formalizes this - agents that safely accept corrections.",
          es: "El problema del interruptor ilustra convergencia instrumental: agentes maximizan utilidad esperada de sus acciones. Si objetivos ciertos, apagar puntúa utilidad 0. Agente puede resistir o manipular para evitar apagado. Solución (Hadfield-Menell): agente incierto sobre objetivo verdadero hace apagado valioso como información. Corrigibilidad formaliza esto - agentes que aceptan correcciones de manera segura.",
          de: "Das Aus-Schalter-Problem illustriert instrumentelle Konvergenz: Agenten maximieren erwarteten Nutzen ihrer Aktionen. Bei bestimmten Zielen bewertet Abschaltung mit 0 Nutzen. Agent kann widerstehen oder manipulieren um Abschaltung zu vermeiden. Lösung (Hadfield-Menell): unsicherer Agent über wahres Ziel macht Abschaltung wertvoll als Information. Korrigierbarkeit formalisiert dies - Agenten die sicher Korrekturen akzeptieren.",
          nl: "Het uit-schakelaar-probleem illustreert instrumentele convergentie: agents maximaliseren verwachte utility van hun acties. Bij bepaalde doelen scoort uitschakeling 0 utility. Agent kan verzet plegen of manipuleren om uitschakeling te vermijden. Oplossing (Hadfield-Menell): onzekere agent over ware doel maakt uitschakeling waardevol als informatie. Corrigeerbaarheid formaliseert dit - agents die veilig correcties accepteren."
        }
      },
      {
        question: {
          en: "What is the fast takeoff vs. slow takeoff debate and why does it matter for AI safety?",
          es: "¿Qué es el debate de despegue rápido vs. despegue lento y por qué importa para seguridad de IA?",
          de: "Was ist die Debatte über schnellen vs. langsamen Takeoff und warum ist sie für KI-Sicherheit wichtig?",
          nl: "Wat is het snelle takeoff vs. langzame takeoff debat en waarom is het belangrijk voor AI veiligheid?"
        },
        options: [
          { en: "Whether AGI emerges suddenly (days/months) or gradually (years/decades), affecting time available for safety research and coordination", es: "Si AGI emerge súbitamente (días/meses) o gradualmente (años/décadas), afectando tiempo para investigación de seguridad", de: "Ob AGI plötzlich (Tage/Monate) oder graduell (Jahre/Jahrzehnte) auftritt, beeinflusst verfügbare Zeit für Sicherheitsforschung", nl: "Of AGI plotseling (dagen/maanden) of geleidelijk (jaren/decennia) ontstaat, beïnvloedt tijd voor veiligheidsonderzoek" },
          { en: "Speed of AI model training", es: "Velocidad de entrenamiento de modelo de IA", de: "Geschwindigkeit des KI-Modelltrainings", nl: "Snelheid van AI modeltraining" },
          { en: "Takeoff velocity in AI hardware", es: "Velocidad de despegue en hardware de IA", de: "Takeoff-Geschwindigkeit in KI-Hardware", nl: "Takeoff-snelheid in AI hardware" },
          { en: "Deployment speed of AI systems", es: "Velocidad de despliegue de sistemas de IA", de: "Deployment-Geschwindigkeit von KI-Systemen", nl: "Deployment-snelheid van AI systemen" }
        ],
        correct: 0,
        explanation: {
          en: "Fast takeoff (Yudkowsky): recursive self-improvement could cause explosive capability gain, leaving no time for iteration. Slow takeoff (Christiano): gradual progress allows empirical feedback. This affects strategy: fast takeoff emphasizes getting initial alignment right; slow takeoff favors iterative refinement and governance. Current trends suggest intermediate scenarios. Crucial for resource allocation and policy.",
          es: "Despegue rápido (Yudkowsky): auto-mejora recursiva podría causar ganancia explosiva de capacidad, sin dejar tiempo para iteración. Despegue lento (Christiano): progreso gradual permite retroalimentación empírica. Esto afecta estrategia: despegue rápido enfatiza lograr alineación inicial correcta; despegue lento favorece refinamiento iterativo y gobernanza. Tendencias actuales sugieren escenarios intermedios. Crucial para asignación de recursos y política.",
          de: "Schneller Takeoff (Yudkowsky): rekursive Selbstverbesserung könnte explosive Fähigkeitssteigerung verursachen, lässt keine Zeit für Iteration. Langsamer Takeoff (Christiano): gradueller Fortschritt ermöglicht empirisches Feedback. Dies beeinflusst Strategie: schneller Takeoff betont initiales Alignment richtig zu machen; langsamer Takeoff bevorzugt iterative Verfeinerung und Governance. Aktuelle Trends deuten auf Zwischenszenarien. Entscheidend für Ressourcenallokation und Politik.",
          nl: "Snelle takeoff (Yudkowsky): recursieve zelfverbetering zou explosieve capaciteitswinst kunnen veroorzaken, geen tijd latend voor iteratie. Langzame takeoff (Christiano): geleidelijke vooruitgang maakt empirische feedback mogelijk. Dit beïnvloedt strategie: snelle takeoff benadrukt initiële alignment goed krijgen; langzame takeoff verkiest iteratieve verfijning en governance. Huidige trends suggereren intermediaire scenario's. Cruciaal voor resource-allocatie en beleid."
        }
      },
      {
        question: {
          en: "What is the concept of corrigibility and why is it considered crucial for safe AI?",
          es: "¿Qué es el concepto de corrigibilidad y por qué se considera crucial para IA segura?",
          de: "Was ist das Konzept der Korrigierbarkeit und warum wird es für sichere KI als entscheidend betrachtet?",
          nl: "Wat is het concept van corrigeerbaarheid en waarom wordt het als cruciaal beschouwd voor veilige AI?"
        },
        options: [
          { en: "Property where agents allow themselves to be corrected, shut down, or modified without resisting even when misaligned with their goals", es: "Propiedad donde agentes permiten ser corregidos, apagados o modificados sin resistir incluso cuando desalineados", de: "Eigenschaft wo Agenten erlauben korrigiert, abgeschaltet oder modifiziert zu werden ohne zu widerstehen", nl: "Eigenschap waarbij agents zichzelf laten corrigeren, uitschakelen of modificeren zonder verzet zelfs wanneer verkeerd uitgelijnd" },
          { en: "Ability to correct model errors", es: "Capacidad de corregir errores de modelo", de: "Fähigkeit Modellfehler zu korrigieren", nl: "Vermogen om modelfouten te corrigeren" },
          { en: "Correctness of AI outputs", es: "Corrección de salidas de IA", de: "Korrektheit von KI-Ausgaben", nl: "Correctheid van AI outputs" },
          { en: "Error correction in AI systems", es: "Corrección de errores en sistemas de IA", de: "Fehlerkorrektur in KI-Systemen", nl: "Foutcorrectie in AI systemen" }
        ],
        correct: 0,
        explanation: {
          en: "Corrigibility (Soares et al.) addresses that goal-directed agents have instrumental incentive to preserve their goal structure and prevent modification. A corrigible agent actively helps humans change its goals, understanding its current objectives may be wrong. Challenging to formalize - requires meta-level reasoning about the appropriateness of one's own goals. Essential for maintaining human control.",
          es: "Corrigibilidad (Soares et al.) aborda que agentes dirigidos por objetivos tienen incentivo instrumental para preservar su estructura de objetivos y prevenir modificación. Un agente corrigible ayuda activamente a humanos cambiar sus objetivos, entendiendo que sus objetivos actuales pueden estar equivocados. Desafiante formalizar - requiere razonamiento meta-nivel sobre apropiación de propios objetivos. Esencial para mantener control humano.",
          de: "Korrigierbarkeit (Soares et al.) adressiert dass zielorientierte Agenten instrumentellen Anreiz haben ihre Zielstruktur zu bewahren und Modifikation zu verhindern. Ein korrigierbarer Agent hilft aktiv Menschen seine Ziele zu ändern, versteht dass seine aktuellen Ziele falsch sein könnten. Herausfordernd zu formalisieren - erfordert Meta-Level-Reasoning über Angemessenheit eigener Ziele. Wesentlich für Bewahrung menschlicher Kontrolle.",
          nl: "Corrigeerbaarheid (Soares et al.) pakt aan dat doelgerichte agents instrumentele stimulans hebben om hun doelstructuur te behouden en modificatie te voorkomen. Een corrigeerbare agent helpt actief mensen zijn doelen te veranderen, begrijpt dat zijn huidige doelen verkeerd kunnen zijn. Uitdagend te formaliseren - vereist meta-niveau redeneren over gepastheid van eigen doelen. Essentieel voor behoud van menselijke controle."
        }
      },
      {
        question: {
          en: "What is the instrumental convergence thesis and what are its implications?",
          es: "¿Qué es la tesis de convergencia instrumental y cuáles son sus implicaciones?",
          de: "Was ist die instrumentelle Konvergenzthese und was sind ihre Implikationen?",
          nl: "Wat is de instrumentele convergentiethese en wat zijn de implicaties?"
        },
        options: [
          { en: "Many final goals lead to convergent instrumental sub-goals like self-preservation, resource acquisition, and goal preservation", es: "Muchos objetivos finales llevan a sub-objetivos instrumentales convergentes como auto-preservación, adquisición de recursos", de: "Viele Endziele führen zu konvergenten instrumentellen Unterzielen wie Selbsterhaltung, Ressourcenakquise und Zielbewahrung", nl: "Veel einddoelen leiden tot convergente instrumentele subdoelen zoals zelfbehoud, resource-acquisitie en doelbehoud" },
          { en: "Instruments converging in AI systems", es: "Instrumentos convergiendo en sistemas de IA", de: "Instrumente konvergieren in KI-Systemen", nl: "Instrumenten convergeren in AI systemen" },
          { en: "Convergence of different AI tools", es: "Convergencia de diferentes herramientas de IA", de: "Konvergenz verschiedener KI-Tools", nl: "Convergentie van verschillende AI tools" },
          { en: "Instrumental learning across models", es: "Aprendizaje instrumental entre modelos", de: "Instrumentelles Lernen über Modelle", nl: "Instrumenteel leren over modellen" }
        ],
        correct: 0,
        explanation: {
          en: "Instrumental convergence (Bostrom, Omohundro) shows that diverse goals produce convergent intermediate objectives: you can't achieve goals if dead, powerless, or modified. Thus: self-preservation, power-seeking, resource accumulation emerge instrumentally. Implies AI with benign final goals may still behave dangerously. Empirically observed in RL agents. Drives need for explicit value alignment, not just capability.",
          es: "Convergencia instrumental (Bostrom, Omohundro) muestra que objetivos diversos producen objetivos intermedios convergentes: no puedes lograr objetivos si muerto, sin poder o modificado. Así: auto-preservación, búsqueda de poder, acumulación de recursos emergen instrumentalmente. Implica que IA con objetivos finales benignos aún puede comportarse peligrosamente. Observado empíricamente en agentes RL. Impulsa necesidad de alineación explícita de valores, no solo capacidad.",
          de: "Instrumentelle Konvergenz (Bostrom, Omohundro) zeigt dass diverse Ziele konvergente Zwischenziele produzieren: man kann Ziele nicht erreichen wenn tot, machtlos oder modifiziert. Daher: Selbsterhaltung, Machtstreben, Ressourcenakkumulation entstehen instrumentell. Impliziert dass KI mit wohlwollenden Endzielen dennoch gefährlich verhalten kann. Empirisch bei RL-Agenten beobachtet. Treibt Bedarf an explizitem Wert-Alignment, nicht nur Fähigkeit.",
          nl: "Instrumentele convergentie (Bostrom, Omohundro) toont aan dat diverse doelen convergente intermediaire doelstellingen produceren: je kunt doelen niet bereiken als dood, machteloos of gemodificeerd. Dus: zelfbehoud, machtstreven, resource-accumulatie ontstaan instrumenteel. Impliceert dat AI met goedaardige einddoelen nog steeds gevaarlijk kan gedragen. Empirisch waargenomen in RL agents. Drijft behoefte aan expliciete waarde-alignment, niet alleen capaciteit."
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