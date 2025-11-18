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
          { en: "Capabilities that appear at scale that weren't present in smaller models, enabling complex reasoning and multi-step tasks", es: "Capacidades que aparecen a escala que no estaban presentes en modelos más pequeños, permitiendo razonamiento complejo y tareas de múltiples pasos", de: "Fähigkeiten die bei großem Maßstab auftreten die in kleineren Modellen nicht vorhanden waren, ermöglichen komplexes Reasoning und mehrstufige Aufgaben", nl: "Capaciteiten die verschijnen op schaal die niet aanwezig waren in kleinere modellen, maken complex redeneren en meerstaps taken mogelijk" },
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
          { en: "Loss of previously learned knowledge when learning new tasks, addressed by elastic weight consolidation, replay buffers, or architectural solutions", es: "Pérdida de conocimiento previamente aprendido al aprender nuevas tareas, abordado por consolidación elástica de pesos, buffers de repetición o soluciones arquitectónicas", de: "Verlust zuvor gelernten Wissens beim Lernen neuer Aufgaben, adressiert durch elastische Gewichtskonsolidierung, Replay-Puffer oder architektonische Lösungen", nl: "Verlies van eerder geleerde kennis bij het leren van nieuwe taken, aangepakt door elastische gewichtsconsolidatie, replay buffers of architecturale oplossingen" },
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
          { en: "Ensuring AI systems pursue goals that are aligned with human values and intentions, preventing unintended harmful behaviors", es: "Asegurar que sistemas de IA persigan objetivos alineados con valores e intenciones humanas, previniendo comportamientos dañinos no intencionados", de: "Sicherstellen dass KI-Systeme Ziele verfolgen die mit menschlichen Werten und Absichten ausgerichtet sind, verhindern unbeabsichtigte schädliche Verhaltensweisen", nl: "Ervoor zorgen dat AI systemen doelen nastreven die uitgelijnd zijn met menselijke waarden en intenties, voorkomen van onbedoelde schadelijke gedragingen" },
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
          { en: "Dense networks contain sparse subnetworks that can achieve comparable accuracy when trained in isolation from random initialization", es: "Redes densas contienen subredes dispersas que pueden lograr precisión comparable cuando se entrenan en aislamiento desde inicialización aleatoria", de: "Dichte Netzwerke enthalten spärliche Teilnetzwerke die vergleichbare Genauigkeit erreichen können wenn isoliert von zufälliger Initialisierung trainiert", nl: "Dichte netwerken bevatten dunne subnetwerken die vergelijkbare nauwkeurigheid kunnen bereiken wanneer getraind in isolatie vanaf willekeurige initialisatie" },
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
          { en: "Developing systems with human-level reasoning, generalization, and adaptability across diverse domains through scaling, multimodal learning, and architectural innovations", es: "Desarrollar sistemas con razonamiento de nivel humano, generalización y adaptabilidad a través de dominios diversos mediante escalado, aprendizaje multimodal e innovaciones arquitectónicas", de: "Systeme mit menschlichem Reasoning, Generalisierung und Anpassungsfähigkeit über diverse Bereiche durch Skalierung, multimodales Lernen und architektonische Innovationen entwickeln", nl: "Systemen ontwikkelen met menselijk niveau redeneren, generalisatie en aanpasbaarheid over diverse domeinen door schaling, multimodaal leren en architecturale innovaties" },
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
          { en: "Learn to reverse a gradual noising process by training a neural network to predict and remove noise at each step, generating images through iterative denoising", es: "Aprenden a revertir un proceso gradual de ruido entrenando una red neuronal para predecir y remover ruido en cada paso, generando imágenes a través de reducción iterativa de ruido", de: "Lernen einen graduellen Rauschprozess umzukehren durch Training eines neuronalen Netzwerks Rauschen in jedem Schritt vorherzusagen und zu entfernen, generieren Bilder durch iterative Entrauschung", nl: "Leren een geleidelijk ruisproces om te keren door een neuraal netwerk te trainen om ruis bij elke stap te voorspellen en te verwijderen, genereren afbeeldingen door iteratieve ruisverwijdering" },
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
          { en: "Enables models to perform new tasks by providing examples within the input context without parameter updates, demonstrating emergent meta-learning capabilities", es: "Permite a modelos realizar nuevas tareas proporcionando ejemplos dentro del contexto de entrada sin actualizaciones de parámetros, demostrando capacidades emergentes de meta-aprendizaje", de: "Ermöglicht Modellen neue Aufgaben durchzuführen durch Bereitstellung von Beispielen im Eingabekontext ohne Parameterupdates, demonstriert emergente Meta-Learning-Fähigkeiten", nl: "Stelt modellen in staat om nieuwe taken uit te voeren door voorbeelden te geven binnen de input context zonder parameter updates, toont emergente meta-learning capaciteiten" },
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
          { en: "Trains models to optimize for human preferences by learning a reward model from human feedback and using reinforcement learning to maximize this reward", es: "Entrena modelos para optimizar preferencias humanas aprendiendo un modelo de recompensa de retroalimentación humana y usando aprendizaje por refuerzo para maximizar esta recompensa", de: "Trainiert Modelle um für menschliche Präferenzen zu optimieren durch Lernen eines Belohnungsmodells aus menschlichem Feedback und Verwendung von Reinforcement Learning um diese Belohnung zu maximieren", nl: "Traint modellen om te optimaliseren voor menselijke voorkeuren door een beloningsmodel te leren uit menselijke feedback en reinforcement learning te gebruiken om deze beloning te maximaliseren" },
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
          { en: "Uses a set of principles (constitution) to guide AI behavior through self-critique and revision, reducing harmful outputs and improving helpfulness", es: "Usa un conjunto de principios (constitución) para guiar comportamiento de IA a través de autocrítica y revisión, reduciendo salidas dañinas y mejorando utilidad", de: "Verwendet einen Satz von Prinzipien (Verfassung) um KI-Verhalten durch Selbstkritik und Revision zu leiten, reduziert schädliche Ausgaben und verbessert Hilfsbereitschaft", nl: "Gebruikt een set principes (grondwet) om AI gedrag te leiden door zelfkritiek en herziening, vermindert schadelijke outputs en verbetert hulpvaardigheid" },
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
          { en: "Large-scale models trained on diverse data that serve as adaptable foundations for numerous downstream applications, enabling broad AI capabilities from a single base model", es: "Modelos a gran escala entrenados en datos diversos que sirven como fundaciones adaptables para numerosas aplicaciones posteriores, permitiendo capacidades amplias de IA desde un modelo base único", de: "Großangelegte Modelle trainiert auf vielfältigen Daten die als anpassbare Grundlagen für zahlreiche nachgelagerte Anwendungen dienen, ermöglichen breite KI-Fähigkeiten von einem einzigen Basismodell", nl: "Grootschalige modellen getraind op diverse data die dienen als aanpasbare fundamenten voor talrijke downstream applicaties, maken brede AI capaciteiten mogelijk vanuit één basismodel" },
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
          { en: "Provides step-by-step reasoning examples in prompts, encouraging models to break down complex problems and show their work, significantly improving performance on reasoning tasks", es: "Proporciona ejemplos de razonamiento paso a paso en prompts, alentando modelos a descomponer problemas complejos y mostrar su trabajo, mejorando significativamente rendimiento en tareas de razonamiento", de: "Bietet schrittweise Reasoning-Beispiele in Prompts, ermutigt Modelle komplexe Probleme aufzuteilen und ihre Arbeit zu zeigen, verbessert signifikant Leistung bei Reasoning-Aufgaben", nl: "Biedt stap-voor-stap redeneer voorbeelden in prompts, moedigt modellen aan om complexe problemen op te splitsen en hun werk te tonen, verbetert significant prestaties op redeneertaken" },
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
          { en: "Capabilities that suddenly appear at certain scales without being explicitly trained, such as arithmetic, few-shot learning, and instruction following", es: "Capacidades que aparecen súbitamente en ciertas escalas sin ser entrenadas explícitamente, como aritmética, aprendizaje de pocos ejemplos y seguimiento de instrucciones", de: "Fähigkeiten die plötzlich bei bestimmten Skalierungen auftreten ohne explizit trainiert zu werden, wie Arithmetik, Few-Shot Learning und Instruktionsbefolgung", nl: "Capaciteiten die plotseling verschijnen op bepaalde schalen zonder expliciet getraind te zijn, zoals rekenen, few-shot learning en instructie volgen" },
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
          { en: "AI that processes and integrates multiple types of data (text, images, audio, video), facing challenges in alignment, fusion, and cross-modal understanding", es: "IA que procesa e integra múltiples tipos de datos (texto, imágenes, audio, video), enfrentando desafíos en alineación, fusión y comprensión cruzada modal", de: "KI die mehrere Datentypen verarbeitet und integriert (Text, Bilder, Audio, Video), steht vor Herausforderungen in Alignment, Fusion und kreuzmodalen Verständnis", nl: "AI die meerdere datatypes verwerkt en integreert (tekst, afbeeldingen, audio, video), geconfronteerd met uitdagingen in alignment, fusie en cross-modale begrip" },
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
          { en: "Enable massive model scaling by activating only a subset of parameters for each input, achieving better performance with similar computational cost", es: "Permiten escalado masivo de modelos activando solo un subconjunto de parámetros para cada entrada, logrando mejor rendimiento con costo computacional similar", de: "Ermöglichen massive Modellskalierung durch Aktivierung nur einer Teilmenge von Parametern für jede Eingabe, erreichen bessere Leistung mit ähnlichen rechnerischen Kosten", nl: "Maken massieve modelschaling mogelijk door slechts een subset van parameters te activeren voor elke input, bereiken betere prestaties met vergelijkbare computationele kosten" },
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
          { en: "The ability to understand and explain how AI models make decisions, enabling accountability, debugging, and building user trust in AI systems", es: "La capacidad de entender y explicar cómo modelos de IA toman decisiones, permitiendo responsabilidad, depuración y construcción de confianza de usuario en sistemas de IA", de: "Die Fähigkeit zu verstehen und zu erklären wie KI-Modelle Entscheidungen treffen, ermöglicht Rechenschaftspflicht, Debugging und Aufbau von Nutzervertrauen in KI-Systeme", nl: "Het vermogen om te begrijpen en uit te leggen hoe AI modellen beslissingen nemen, maakt verantwoording, debugging en het opbouwen van gebruikersvertrouwen in AI systemen mogelijk" },
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
          { en: "Ensuring AI systems behave reliably, avoid harmful actions, and remain under human control through techniques like alignment research, robustness testing, and capability control", es: "Asegurar que sistemas de IA se comporten confiablemente, eviten acciones dañinas y permanezcan bajo control humano a través de técnicas como investigación de alineación, pruebas de robustez y control de capacidades", de: "Sicherstellung dass KI-Systeme zuverlässig verhalten, schädliche Aktionen vermeiden und unter menschlicher Kontrolle bleiben durch Techniken wie Alignment-Forschung, Robustheitstests und Fähigkeitskontrolle", nl: "Ervoor zorgen dat AI systemen zich betrouwbaar gedragen, schadelijke acties vermijden en onder menselijke controle blijven door technieken zoals alignment onderzoek, robuustheidstesten en capaciteitscontrole" },
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
          { en: "Systematic increases in model size, data, and compute revealing predictable performance improvements and sudden capability emergence at specific scales", es: "Aumentos sistemáticos en tamaño de modelo, datos y cómputo revelando mejoras de rendimiento predecibles y emergencia súbita de capacidades en escalas específicas", de: "Systematische Erhöhungen in Modellgröße, Daten und Compute zeigen vorhersagbare Leistungsverbesserungen und plötzliche Fähigkeits-Emergenz bei spezifischen Skalen", nl: "Systematische verhogingen in modelgrootte, data en compute onthullen voorspelbare prestatie verbeteringen en plotselinge capaciteits emergentie op specifieke schalen" },
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
          { en: "Narrow AI excels at specific tasks but lacks general reasoning, while AGI would match human cognitive abilities across diverse domains with autonomous learning and adaptation", es: "IA estrecha sobresale en tareas específicas pero carece de razonamiento general, mientras AGI igualaría habilidades cognitivas humanas a través de dominios diversos con aprendizaje autónomo y adaptación", de: "Enge KI excelliert bei spezifischen Aufgaben aber fehlt allgemeines Reasoning, während AGI menschliche kognitive Fähigkeiten über diverse Bereiche mit autonomem Lernen und Anpassung erreichen würde", nl: "Smalle AI excelleert in specifieke taken maar mist algemeen redeneren, terwijl AGI menselijke cognitieve vaardigheden zou evenaren over diverse domeinen met autonoom leren en aanpassing" },
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
          { en: "Enables models to perform tasks with just a few examples provided in the prompt, demonstrating remarkable generalization without explicit training on those specific tasks", es: "Permite a modelos realizar tareas con solo unos pocos ejemplos proporcionados en el prompt, demostrando generalización notable sin entrenamiento explícito en esas tareas específicas", de: "Ermöglicht Modellen Aufgaben mit nur wenigen im Prompt bereitgestellten Beispielen durchzuführen, demonstriert bemerkenswerte Generalisierung ohne explizites Training auf diese spezifischen Aufgaben", nl: "Stelt modellen in staat om taken uit te voeren met slechts een paar voorbeelden gegeven in de prompt, toont opmerkelijke generalisatie zonder expliciete training op die specifieke taken" },
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
          { en: "Capabilities that appear unpredictably at certain scales, not present in smaller models, suggesting qualitative changes in intelligence", es: "Capacidades que aparecen impredeciblemente en ciertas escalas, no presentes en modelos más pequeños, sugiriendo cambios cualitativos en inteligencia", de: "Fähigkeiten die unvorhersagbar bei bestimmten Skalierungen erscheinen, nicht in kleineren Modellen vorhanden, deuten auf qualitative Veränderungen in Intelligenz hin", nl: "Capaciteiten die onvoorspelbaar verschijnen op bepaalde schalen, niet aanwezig in kleinere modellen, suggereren kwalitatieve veranderingen in intelligentie" },
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
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level10;
  } else if (typeof window !== 'undefined') {
    window.level10 = level10;
  }
})();