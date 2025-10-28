// Natural Language Processing Quiz - Level 10: Expert-Level NLP and Future Directions
(function() {
  const level10 = {
    name: {
      en: "GPT/BERT Architectures & Prompt Engineering",
      es: "Arquitecturas GPT/BERT e Ingeniería de Prompts",
      de: "GPT/BERT Architekturen & Prompt Engineering",
      nl: "GPT/BERT Architecturen & Prompt Engineering"
    },
    questions: [
      {
        question: {
          en: "What are multimodal language models and how do they extend traditional NLP capabilities?",
          es: "¿Qué son los modelos de lenguaje multimodales y cómo extienden las capacidades tradicionales de PLN?",
          de: "Was sind multimodale Sprachmodelle und wie erweitern sie traditionelle NLP-Fähigkeiten?",
          nl: "Wat zijn multimodale taalmodellen en hoe breiden ze traditionele NLP-capaciteiten uit?"
        },
        options: [
          { en: "Models that process text, images, audio, and other modalities together for richer understanding and generation", es: "Modelos que procesan texto, imágenes, audio y otras modalidades juntas para comprensión y generación más rica", de: "Modelle die Text, Bilder, Audio und andere Modalitäten zusammen verarbeiten für reicheres Verständnis und Generierung", nl: "Modellen die tekst, afbeeldingen, audio en andere modaliteiten samen verwerken voor rijkere begrip en generatie" },
          { en: "Models that work in multiple programming languages", es: "Modelos que funcionan en múltiples lenguajes de programación", de: "Modelle die in mehreren Programmiersprachen funktionieren", nl: "Modellen die werken in meerdere programmeertalen" },
          { en: "Language models with multiple layers", es: "Modelos de lenguaje con múltiples capas", de: "Sprachmodelle mit mehreren Schichten", nl: "Taalmodellen met meerdere lagen" },
          { en: "Models that support multiple human languages", es: "Modelos que soportan múltiples idiomas humanos", de: "Modelle die mehrere menschliche Sprachen unterstützen", nl: "Modellen die meerdere menselijke talen ondersteunen" }
        ],
        correct: 0,
        explanation: {
          en: "Multimodal models like GPT-4V, CLIP, and DALL-E integrate vision, language, and other modalities, enabling tasks like image captioning, visual question answering, and text-to-image generation.",
          es: "Los modelos multimodales como GPT-4V, CLIP y DALL-E integran visión, lenguaje y otras modalidades, permitiendo tareas como descripción de imágenes, respuesta a preguntas visuales y generación de texto a imagen.",
          de: "Multimodale Modelle wie GPT-4V, CLIP und DALL-E integrieren Vision, Sprache und andere Modalitäten, ermöglichen Aufgaben wie Bildbeschreibung, visuelle Fragebeantwortung und Text-zu-Bild-Generierung.",
          nl: "Multimodale modellen zoals GPT-4V, CLIP en DALL-E integreren visie, taal en andere modaliteiten, maken taken mogelijk zoals beeldbeschrijving, visuele vraagbeantwoording en tekst-naar-beeld generatie."
        }
      },
      {
        question: {
          en: "What is in-context learning and how does it differ from traditional fine-tuning?",
          es: "¿Qué es el aprendizaje en contexto y cómo difiere del ajuste fino tradicional?",
          de: "Was ist In-Context Learning und wie unterscheidet es sich von traditionellem Fine-Tuning?",
          nl: "Wat is in-context learning en hoe verschilt het van traditionele fine-tuning?"
        },
        options: [
          { en: "Learning new tasks through examples provided in the input context without updating model parameters", es: "Aprender nuevas tareas a través de ejemplos proporcionados en el contexto de entrada sin actualizar parámetros del modelo", de: "Neue Aufgaben durch im Eingabekontext bereitgestellte Beispiele lernen ohne Modellparameter zu aktualisieren", nl: "Nieuwe taken leren door voorbeelden in de invoercontext zonder modelparameters bij te werken" },
          { en: "Learning within the context of specific domains", es: "Aprender dentro del contexto de dominios específicos", de: "Lernen im Kontext spezifischer Domänen", nl: "Leren binnen de context van specifieke domeinen" },
          { en: "Contextual understanding of language", es: "Comprensión contextual del lenguaje", de: "Kontextelles Verstehen der Sprache", nl: "Contextueel begrip van taal" },
          { en: "Learning from context clues in text", es: "Aprender de pistas contextuales en texto", de: "Aus Kontexthinweisen im Text lernen", nl: "Leren van contextuele aanwijzingen in tekst" }
        ],
        correct: 0,
        explanation: {
          en: "In-context learning leverages the emergent ability of large language models to adapt to new tasks simply by seeing examples in their input, without requiring parameter updates or retraining.",
          es: "El aprendizaje en contexto aprovecha la capacidad emergente de modelos de lenguaje grandes para adaptarse a nuevas tareas simplemente viendo ejemplos en su entrada, sin requerir actualizaciones de parámetros o reentrenamiento.",
          de: "In-Context Learning nutzt die emergente Fähigkeit großer Sprachmodelle sich an neue Aufgaben anzupassen einfach durch Sehen von Beispielen in ihrer Eingabe, ohne Parameteraktualisierungen oder Umschulung zu benötigen.",
          nl: "In-context learning benut het emergente vermogen van grote taalmodellen om zich aan te passen aan nieuwe taken door simpelweg voorbeelden in hun invoer te zien, zonder parameter updates of hertraining te vereisen."
        }
      },
      {
        question: {
          en: "What is constitutional AI and how does it address AI safety in language models?",
          es: "¿Qué es la IA constitucional y cómo aborda la seguridad de IA en modelos de lenguaje?",
          de: "Was ist konstitutionelle KI und wie adressiert sie KI-Sicherheit in Sprachmodellen?",
          nl: "Wat is constitutionele AI en hoe pakt het AI-veiligheid aan in taalmodellen?"
        },
        options: [
          { en: "Training AI systems to follow a set of principles or constitution to ensure helpful, harmless, and honest behavior", es: "Entrenar sistemas de IA para seguir un conjunto de principios o constitución para asegurar comportamiento útil, inofensivo y honesto", de: "KI-Systeme trainieren um einem Satz von Prinzipien oder Verfassung zu folgen um hilfreiches, harmloses und ehrliches Verhalten sicherzustellen", nl: "AI systemen trainen om een set principes of grondwet te volgen om behulpzaam, ongevaarlijk en eerlijk gedrag te verzekeren" },
          { en: "AI systems designed for government applications", es: "Sistemas de IA diseñados para aplicaciones gubernamentales", de: "KI-Systeme entworfen für Regierungsanwendungen", nl: "AI systemen ontworpen voor overheidstoepassingen" },
          { en: "Legal frameworks for AI development", es: "Marcos legales para desarrollo de IA", de: "Rechtliche Rahmen für KI-Entwicklung", nl: "Juridische kaders voor AI ontwikkeling" },
          { en: "Constitutional rights for AI systems", es: "Derechos constitucionales para sistemas de IA", de: "Verfassungsrechte für KI-Systeme", nl: "Grondwettelijke rechten voor AI systemen" }
        ],
        correct: 0,
        explanation: {
          en: "Constitutional AI trains models to critique and revise their own outputs according to a set of principles, reducing harmful outputs and improving alignment with human values through self-supervision.",
          es: "La IA constitucional entrena modelos para criticar y revisar sus propias salidas según un conjunto de principios, reduciendo salidas dañinas y mejorando alineación con valores humanos a través de auto-supervisión.",
          de: "Konstitutionelle KI trainiert Modelle ihre eigenen Ausgaben nach einem Satz von Prinzipien zu kritisieren und zu revidieren, reduziert schädliche Ausgaben und verbessert Ausrichtung mit menschlichen Werten durch Selbstüberwachung.",
          nl: "Constitutionele AI traint modellen om hun eigen outputs te bekritiseren en herzien volgens een set principes, vermindert schadelijke outputs en verbetert uitlijning met menselijke waarden door zelf-supervisie."
        }
      },
      {
        question: {
          en: "What are the key challenges and considerations for deploying large language models in production environments?",
          es: "¿Cuáles son los desafíos clave y consideraciones para desplegar modelos de lenguaje grandes en entornos de producción?",
          de: "Was sind die Hauptherausforderungen und Überlegungen für die Bereitstellung großer Sprachmodelle in Produktionsumgebungen?",
          nl: "Wat zijn de belangrijkste uitdagingen en overwegingen voor het inzetten van grote taalmodellen in productieomgevingen?"
        },
        options: [
          { en: "Computational costs, latency, hallucinations, bias, safety measures, and responsible AI governance", es: "Costos computacionales, latencia, alucinaciones, sesgo, medidas de seguridad y gobernanza responsable de IA", de: "Rechenkosten, Latenz, Halluzinationen, Bias, Sicherheitsmaßnahmen und verantwortliche KI-Governance", nl: "Computationele kosten, latentie, hallucinaties, vooringenomenheid, veiligheidsmaatregelen en verantwoordelijke AI governance" },
          { en: "Only computational and memory requirements", es: "Solo requerimientos computacionales y de memoria", de: "Nur rechnerische und Speicheranforderungen", nl: "Alleen computationele en geheugenvereisten" },
          { en: "Language support and translation accuracy", es: "Soporte de idiomas y precisión de traducción", de: "Sprachunterstützung und Übersetzungsgenauigkeit", nl: "Taalondersteuning en vertaalnauwkeurigheid" },
          { en: "User interface and user experience design", es: "Diseño de interfaz de usuario y experiencia de usuario", de: "Benutzeroberflächen- und Benutzererfahrungsdesign", nl: "Gebruikersinterface en gebruikerservaring ontwerp" }
        ],
        correct: 0,
        explanation: {
          en: "Production deployment requires addressing technical challenges like inference costs and latency, safety issues like hallucinations and bias, plus establishing governance frameworks for responsible AI use and monitoring.",
          es: "El despliegue en producción requiere abordar desafíos técnicos como costos de inferencia y latencia, problemas de seguridad como alucinaciones y sesgo, además de establecer marcos de gobernanza para uso responsable de IA y monitoreo.",
          de: "Produktionsbereitstellung erfordert Adressierung technischer Herausforderungen wie Inferenzkosten und Latenz, Sicherheitsprobleme wie Halluzinationen und Bias, plus Etablierung von Governance-Frameworks für verantwortlichen KI-Einsatz und Überwachung.",
          nl: "Productie-implementatie vereist het aanpakken van technische uitdagingen zoals inferentiekosten en latentie, veiligheidsproblemen zoals hallucinaties en vooringenomenheid, plus het vestigen van governance frameworks voor verantwoordelijk AI gebruik en monitoring."
        }
      },
      {
        question: {
          en: "What are the future directions and emerging paradigms in natural language processing research?",
          es: "¿Cuáles son las direcciones futuras y paradigmas emergentes en investigación de procesamiento de lenguaje natural?",
          de: "Was sind die zukünftigen Richtungen und aufkommenden Paradigmen in der Forschung zur natürlichen Sprachverarbeitung?",
          nl: "Wat zijn de toekomstige richtingen en opkomende paradigma's in natuurlijke taalverwerking onderzoek?"
        },
        options: [
          { en: "Multimodal integration, reasoning capabilities, efficient architectures, neurosymbolic approaches, and embodied language understanding", es: "Integración multimodal, capacidades de razonamiento, arquitecturas eficientes, enfoques neurosimbólicos y comprensión de lenguaje encarnado", de: "Multimodale Integration, Reasoning-Fähigkeiten, effiziente Architekturen, neurosymbolische Ansätze und embodied Language Understanding", nl: "Multimodale integratie, redeneercapaciteiten, efficiënte architecturen, neurosymbolische benaderingen en belichaamd taalbegrip" },
          { en: "Only faster processing and larger models", es: "Solo procesamiento más rápido y modelos más grandes", de: "Nur schnellere Verarbeitung und größere Modelle", nl: "Alleen snellere verwerking en grotere modellen" },
          { en: "Traditional rule-based approaches", es: "Enfoques tradicionales basados en reglas", de: "Traditionelle regelbasierte Ansätze", nl: "Traditionele regel-gebaseerde benaderingen" },
          { en: "Focus solely on text processing", es: "Enfoque únicamente en procesamiento de texto", de: "Fokus ausschließlich auf Textverarbeitung", nl: "Focus uitsluitend op tekstverwerking" }
        ],
        correct: 0,
        explanation: {
          en: "Future NLP research focuses on integrating multiple modalities, improving reasoning and factual accuracy, developing more efficient models, combining neural and symbolic approaches, and enabling AI systems to understand language in physical and social contexts.",
          es: "La investigación futura de PLN se enfoca en integrar múltiples modalidades, mejorar razonamiento y precisión factual, desarrollar modelos más eficientes, combinar enfoques neuronales y simbólicos, y permitir que sistemas de IA entiendan lenguaje en contextos físicos y sociales.",
          de: "Zukünftige NLP-Forschung fokussiert auf Integration multipler Modalitäten, Verbesserung von Reasoning und faktischer Genauigkeit, Entwicklung effizienterer Modelle, Kombination neuronaler und symbolischer Ansätze, und Ermöglichung dass KI-Systeme Sprache in physischen und sozialen Kontexten verstehen.",
          nl: "Toekomstig NLP onderzoek richt zich op het integreren van meerdere modaliteiten, verbeteren van redeneren en feitelijke nauwkeurigheid, ontwikkelen van efficiëntere modellen, combineren van neurale en symbolische benaderingen, en AI systemen in staat stellen taal te begrijpen in fysieke en sociale contexten."
        }
      },
      {
        question: {
          en: "What is the key architectural difference between BERT and GPT models?",
          es: "¿Cuál es la diferencia arquitectónica clave entre los modelos BERT y GPT?",
          de: "Was ist der wichtigste architektonische Unterschied zwischen BERT- und GPT-Modellen?",
          nl: "Wat is het belangrijkste architecturale verschil tussen BERT en GPT modellen?"
        },
        options: [
          { en: "BERT uses bidirectional encoder-only architecture while GPT uses unidirectional decoder-only architecture", es: "BERT usa arquitectura bidireccional solo-encoder mientras GPT usa arquitectura unidireccional solo-decoder", de: "BERT verwendet bidirektionale Encoder-only Architektur während GPT unidirektionale Decoder-only Architektur verwendet", nl: "BERT gebruikt bidirectionele encoder-only architectuur terwijl GPT unidirectionele decoder-only architectuur gebruikt" },
          { en: "BERT is larger than GPT models", es: "BERT es más grande que los modelos GPT", de: "BERT ist größer als GPT-Modelle", nl: "BERT is groter dan GPT modellen" },
          { en: "BERT processes images while GPT only processes text", es: "BERT procesa imágenes mientras GPT solo procesa texto", de: "BERT verarbeitet Bilder während GPT nur Text verarbeitet", nl: "BERT verwerkt afbeeldingen terwijl GPT alleen tekst verwerkt" },
          { en: "There is no significant architectural difference", es: "No hay diferencia arquitectónica significativa", de: "Es gibt keinen signifikanten architektonischen Unterschied", nl: "Er is geen significant architecturaal verschil" }
        ],
        correct: 0,
        explanation: {
          en: "BERT uses bidirectional attention to see context from both directions for understanding tasks, while GPT uses causal (left-to-right) attention for autoregressive text generation.",
          es: "BERT usa atención bidireccional para ver contexto desde ambas direcciones para tareas de comprensión, mientras GPT usa atención causal (izquierda-a-derecha) para generación autoregresiva de texto.",
          de: "BERT verwendet bidirektionale Aufmerksamkeit um Kontext aus beiden Richtungen für Verständnisaufgaben zu sehen, während GPT kausale (links-nach-rechts) Aufmerksamkeit für autoregressive Textgenerierung verwendet.",
          nl: "BERT gebruikt bidirectionele aandacht om context vanuit beide richtingen te zien voor begrip taken, terwijl GPT causale (links-naar-rechts) aandacht gebruikt voor autoregressieve tekstgeneratie."
        }
      },
      {
        question: {
          en: "What is prompt engineering and why is it important for large language models?",
          es: "¿Qué es la ingeniería de prompts y por qué es importante para modelos de lenguaje grandes?",
          de: "Was ist Prompt Engineering und warum ist es wichtig für große Sprachmodelle?",
          nl: "Wat is prompt engineering en waarom is het belangrijk voor grote taalmodellen?"
        },
        options: [
          { en: "The practice of crafting effective input prompts to elicit desired responses from language models without fine-tuning", es: "La práctica de crear prompts de entrada efectivos para obtener respuestas deseadas de modelos de lenguaje sin ajuste fino", de: "Die Praxis effektive Eingabeprompts zu erstellen um gewünschte Antworten von Sprachmodellen ohne Fine-Tuning zu erhalten", nl: "De praktijk van het creëren van effectieve invoer prompts om gewenste reacties uit taalmodellen te krijgen zonder fine-tuning" },
          { en: "Building the technical infrastructure for language models", es: "Construir la infraestructura técnica para modelos de lenguaje", de: "Aufbau der technischen Infrastruktur für Sprachmodelle", nl: "Bouwen van de technische infrastructuur voor taalmodellen" },
          { en: "Training language models from scratch", es: "Entrenar modelos de lenguaje desde cero", de: "Sprachmodelle von Grund auf trainieren", nl: "Taalmodellen van nul af aan trainen" },
          { en: "Optimizing model architecture design", es: "Optimizar el diseño de arquitectura del modelo", de: "Optimierung des Modellarchitekturdesigns", nl: "Optimaliseren van model architectuur ontwerp" }
        ],
        correct: 0,
        explanation: {
          en: "Prompt engineering involves designing inputs that guide LLMs to produce accurate, relevant responses. It's crucial for leveraging pre-trained models effectively without expensive retraining.",
          es: "La ingeniería de prompts involucra diseñar entradas que guíen a LLMs para producir respuestas precisas y relevantes. Es crucial para aprovechar modelos preentrenados efectivamente sin reentrenamiento costoso.",
          de: "Prompt Engineering beinhaltet das Entwerfen von Eingaben die LLMs leiten um genaue, relevante Antworten zu produzieren. Es ist entscheidend um vortrainierte Modelle effektiv zu nutzen ohne teure Umschulung.",
          nl: "Prompt engineering houdt in het ontwerpen van invoer die LLMs leidt om nauwkeurige, relevante reacties te produceren. Het is cruciaal voor het effectief benutten van voorgetrainde modellen zonder dure hertraining."
        }
      },
      {
        question: {
          en: "What is the difference between few-shot and zero-shot prompting?",
          es: "¿Cuál es la diferencia entre prompting de pocos ejemplos y prompting de cero ejemplos?",
          de: "Was ist der Unterschied zwischen Few-Shot und Zero-Shot Prompting?",
          nl: "Wat is het verschil tussen few-shot en zero-shot prompting?"
        },
        options: [
          { en: "Few-shot provides examples in the prompt, zero-shot gives only task description without examples", es: "Few-shot proporciona ejemplos en el prompt, zero-shot da solo descripción de tarea sin ejemplos", de: "Few-Shot bietet Beispiele im Prompt, Zero-Shot gibt nur Aufgabenbeschreibung ohne Beispiele", nl: "Few-shot geeft voorbeelden in de prompt, zero-shot geeft alleen taakbeschrijving zonder voorbeelden" },
          { en: "Few-shot uses small models, zero-shot uses no models", es: "Few-shot usa modelos pequeños, zero-shot no usa modelos", de: "Few-Shot verwendet kleine Modelle, Zero-Shot verwendet keine Modelle", nl: "Few-shot gebruikt kleine modellen, zero-shot gebruikt geen modellen" },
          { en: "Few-shot requires fine-tuning, zero-shot doesn't", es: "Few-shot requiere ajuste fino, zero-shot no", de: "Few-Shot erfordert Fine-Tuning, Zero-Shot nicht", nl: "Few-shot vereist fine-tuning, zero-shot niet" },
          { en: "There is no difference between them", es: "No hay diferencia entre ellos", de: "Es gibt keinen Unterschied zwischen ihnen", nl: "Er is geen verschil tussen hen" }
        ],
        correct: 0,
        explanation: {
          en: "Zero-shot prompting asks the model to perform a task with only instructions, while few-shot prompting includes demonstration examples to help the model understand the desired format and approach.",
          es: "El prompting zero-shot pide al modelo realizar una tarea con solo instrucciones, mientras el prompting few-shot incluye ejemplos de demostración para ayudar al modelo entender el formato y enfoque deseado.",
          de: "Zero-Shot Prompting bittet das Modell eine Aufgabe nur mit Anweisungen auszuführen, während Few-Shot Prompting Demonstrationsbeispiele einschließt um dem Modell zu helfen das gewünschte Format und den Ansatz zu verstehen.",
          nl: "Zero-shot prompting vraagt het model een taak uit te voeren met alleen instructies, terwijl few-shot prompting demonstratievoorbeelden bevat om het model te helpen het gewenste formaat en benadering te begrijpen."
        }
      },
      {
        question: {
          en: "What is chain-of-thought prompting and how does it improve reasoning in language models?",
          es: "¿Qué es el prompting de cadena de pensamiento y cómo mejora el razonamiento en modelos de lenguaje?",
          de: "Was ist Chain-of-Thought Prompting und wie verbessert es das Reasoning in Sprachmodellen?",
          nl: "Wat is chain-of-thought prompting en hoe verbetert het redeneren in taalmodellen?"
        },
        options: [
          { en: "Encouraging models to show intermediate reasoning steps by including step-by-step examples in prompts", es: "Alentar a modelos a mostrar pasos de razonamiento intermedios incluyendo ejemplos paso a paso en prompts", de: "Modelle ermutigen Zwischenschritte des Reasonings zu zeigen durch Einschließen von Schritt-für-Schritt Beispielen in Prompts", nl: "Modellen aanmoedigen om tussenliggende redeneerstappen te tonen door stap-voor-stap voorbeelden in prompts op te nemen" },
          { en: "Linking multiple language models together", es: "Vincular múltiples modelos de lenguaje juntos", de: "Mehrere Sprachmodelle miteinander verknüpfen", nl: "Meerdere taalmodellen aan elkaar koppelen" },
          { en: "Creating a sequence of related prompts", es: "Crear una secuencia de prompts relacionados", de: "Eine Sequenz verwandter Prompts erstellen", nl: "Een reeks gerelateerde prompts creëren" },
          { en: "Training models to think sequentially", es: "Entrenar modelos para pensar secuencialmente", de: "Modelle trainieren sequenziell zu denken", nl: "Modellen trainen om sequentieel te denken" }
        ],
        correct: 0,
        explanation: {
          en: "Chain-of-thought prompting guides models to break down complex problems into logical steps, significantly improving performance on mathematical reasoning, logic puzzles, and multi-step problem solving.",
          es: "El prompting de cadena de pensamiento guía a modelos a descomponer problemas complejos en pasos lógicos, mejorando significativamente el rendimiento en razonamiento matemático, rompecabezas lógicos y resolución de problemas multi-paso.",
          de: "Chain-of-Thought Prompting leitet Modelle an komplexe Probleme in logische Schritte aufzuteilen, verbessert signifikant die Leistung bei mathematischem Reasoning, Logikrätseln und mehrstufiger Problemlösung.",
          nl: "Chain-of-thought prompting leidt modellen om complexe problemen op te splitsen in logische stappen, verbetert aanzienlijk de prestaties bij wiskundig redeneren, logische puzzels en meerstaps probleemoplossing."
        }
      },
      {
        question: {
          en: "What is the purpose of special tokens like [CLS], [SEP], and [MASK] in BERT?",
          es: "¿Cuál es el propósito de tokens especiales como [CLS], [SEP] y [MASK] en BERT?",
          de: "Was ist der Zweck spezieller Token wie [CLS], [SEP] und [MASK] in BERT?",
          nl: "Wat is het doel van speciale tokens zoals [CLS], [SEP] en [MASK] in BERT?"
        },
        options: [
          { en: "[CLS] for classification representation, [SEP] to separate sentences, [MASK] for masked language modeling", es: "[CLS] para representación de clasificación, [SEP] para separar oraciones, [MASK] para modelado de lenguaje enmascarado", de: "[CLS] für Klassifikationsrepräsentation, [SEP] um Sätze zu trennen, [MASK] für maskiertes Sprachmodellierung", nl: "[CLS] voor classificatie representatie, [SEP] om zinnen te scheiden, [MASK] voor gemaskeerde taalmodellering" },
          { en: "They are used only for tokenization", es: "Se usan solo para tokenización", de: "Sie werden nur für Tokenisierung verwendet", nl: "Ze worden alleen gebruikt voor tokenisatie" },
          { en: "They represent different languages", es: "Representan diferentes idiomas", de: "Sie repräsentieren verschiedene Sprachen", nl: "Ze vertegenwoordigen verschillende talen" },
          { en: "They are debugging tokens", es: "Son tokens de depuración", de: "Sie sind Debugging-Token", nl: "Het zijn debugging tokens" }
        ],
        correct: 0,
        explanation: {
          en: "BERT uses [CLS] at the beginning for sequence-level tasks, [SEP] to separate sentence pairs, and [MASK] during pre-training to hide tokens for the masked language modeling objective.",
          es: "BERT usa [CLS] al principio para tareas a nivel de secuencia, [SEP] para separar pares de oraciones, y [MASK] durante preentrenamiento para ocultar tokens para el objetivo de modelado de lenguaje enmascarado.",
          de: "BERT verwendet [CLS] am Anfang für Aufgaben auf Sequenzebene, [SEP] um Satzpaare zu trennen, und [MASK] während Vortraining um Token für das maskierte Sprachmodellierungsziel zu verbergen.",
          nl: "BERT gebruikt [CLS] aan het begin voor taken op sequentieniveau, [SEP] om zin paren te scheiden, en [MASK] tijdens voortraining om tokens te verbergen voor de gemaskeerde taalmodellering doelstelling."
        }
      },
      {
        question: {
          en: "What is the difference between autoregressive and autoencoding language models?",
          es: "¿Cuál es la diferencia entre modelos de lenguaje autoregresivos y autocodificadores?",
          de: "Was ist der Unterschied zwischen autoregressiven und autokodierenden Sprachmodellen?",
          nl: "Wat is het verschil tussen autoregressieve en autoencodende taalmodellen?"
        },
        options: [
          { en: "Autoregressive models predict next tokens sequentially (GPT), autoencoding models reconstruct masked tokens (BERT)", es: "Modelos autoregresivos predicen próximos tokens secuencialmente (GPT), modelos autocodificadores reconstruyen tokens enmascarados (BERT)", de: "Autoregressive Modelle sagen nächste Token sequenziell vorher (GPT), autokodierenden Modelle rekonstruieren maskierte Token (BERT)", nl: "Autoregressieve modellen voorspellen volgende tokens sequentieel (GPT), autoencodende modellen reconstrueren gemaskeerde tokens (BERT)" },
          { en: "They are the same type of model", es: "Son el mismo tipo de modelo", de: "Sie sind derselbe Modelltyp", nl: "Het zijn hetzelfde type model" },
          { en: "Autoregressive models are smaller than autoencoding models", es: "Modelos autoregresivos son más pequeños que modelos autocodificadores", de: "Autoregressive Modelle sind kleiner als autokodierenden Modelle", nl: "Autoregressieve modellen zijn kleiner dan autoencodende modellen" },
          { en: "The difference is only in their training data", es: "La diferencia está solo en sus datos de entrenamiento", de: "Der Unterschied liegt nur in ihren Trainingsdaten", nl: "Het verschil zit alleen in hun trainingsdata" }
        ],
        correct: 0,
        explanation: {
          en: "Autoregressive models like GPT generate text by predicting one token at a time from left to right, while autoencoding models like BERT use bidirectional context to fill in masked tokens.",
          es: "Modelos autoregresivos como GPT generan texto prediciendo un token a la vez de izquierda a derecha, mientras modelos autocodificadores como BERT usan contexto bidireccional para llenar tokens enmascarados.",
          de: "Autoregressive Modelle wie GPT generieren Text durch Vorhersage eines Tokens nach dem anderen von links nach rechts, während autokodierenden Modelle wie BERT bidirektionalen Kontext verwenden um maskierte Token zu füllen.",
          nl: "Autoregressieve modellen zoals GPT genereren tekst door één token tegelijk te voorspellen van links naar rechts, terwijl autoencodende modellen zoals BERT bidirectionele context gebruiken om gemaskeerde tokens in te vullen."
        }
      },
      {
        question: {
          en: "What is instruction tuning and how does it differ from standard fine-tuning?",
          es: "¿Qué es el ajuste de instrucciones y cómo difiere del ajuste fino estándar?",
          de: "Was ist Instruction Tuning und wie unterscheidet es sich von Standard Fine-Tuning?",
          nl: "Wat is instruction tuning en hoe verschilt het van standaard fine-tuning?"
        },
        options: [
          { en: "Training models to follow diverse natural language instructions rather than learning specific tasks", es: "Entrenar modelos para seguir diversas instrucciones en lenguaje natural en lugar de aprender tareas específicas", de: "Modelle trainieren verschiedene natürlichsprachliche Anweisungen zu befolgen anstatt spezifische Aufgaben zu lernen", nl: "Modellen trainen om diverse natuurlijke taal instructies te volgen in plaats van specifieke taken te leren" },
          { en: "A more efficient version of fine-tuning", es: "Una versión más eficiente de ajuste fino", de: "Eine effizientere Version von Fine-Tuning", nl: "Een efficiëntere versie van fine-tuning" },
          { en: "Fine-tuning with better instructions for developers", es: "Ajuste fino con mejores instrucciones para desarrolladores", de: "Fine-Tuning mit besseren Anweisungen für Entwickler", nl: "Fine-tuning met betere instructies voor ontwikkelaars" },
          { en: "Teaching models programming instructions", es: "Enseñar a modelos instrucciones de programación", de: "Modelle Programmierbefehle lehren", nl: "Modellen programmeerinstructies leren" }
        ],
        correct: 0,
        explanation: {
          en: "Instruction tuning trains models on diverse instruction-following datasets, enabling them to generalize to new tasks described in natural language without task-specific fine-tuning.",
          es: "El ajuste de instrucciones entrena modelos en diversos conjuntos de datos de seguimiento de instrucciones, permitiéndoles generalizar a nuevas tareas descritas en lenguaje natural sin ajuste fino específico de tarea.",
          de: "Instruction Tuning trainiert Modelle auf verschiedenen Anweisungsfolge-Datensätzen, ermöglicht ihnen zu neuen in natürlicher Sprache beschriebenen Aufgaben zu generalisieren ohne aufgabenspezifisches Fine-Tuning.",
          nl: "Instruction tuning traint modellen op diverse instructie-volgende datasets, waardoor ze kunnen generaliseren naar nieuwe taken beschreven in natuurlijke taal zonder taak-specifieke fine-tuning."
        }
      },
      {
        question: {
          en: "What is the role of positional encoding in Transformer architectures?",
          es: "¿Cuál es el papel de la codificación posicional en arquitecturas Transformer?",
          de: "Was ist die Rolle der Positionskodierung in Transformer-Architekturen?",
          nl: "Wat is de rol van positionele encoding in Transformer architecturen?"
        },
        options: [
          { en: "Providing sequence order information since self-attention is permutation invariant", es: "Proporcionar información de orden de secuencia ya que la auto-atención es invariante a permutaciones", de: "Bereitstellung von Sequenzordnungsinformation da Selbstaufmerksamkeit permutationsinvariant ist", nl: "Het verstrekken van sequentie volgorde informatie omdat zelf-aandacht permutatie invariant is" },
          { en: "Encoding the position of words in a dictionary", es: "Codificar la posición de palabras en un diccionario", de: "Kodierung der Position von Wörtern in einem Wörterbuch", nl: "Het coderen van de positie van woorden in een woordenboek" },
          { en: "Representing the physical position of text on a page", es: "Representar la posición física del texto en una página", de: "Repräsentation der physischen Position von Text auf einer Seite", nl: "Het representeren van de fysieke positie van tekst op een pagina" },
          { en: "Storing metadata about token positions", es: "Almacenar metadatos sobre posiciones de tokens", de: "Speicherung von Metadaten über Token-Positionen", nl: "Het opslaan van metadata over token posities" }
        ],
        correct: 0,
        explanation: {
          en: "Since Transformers process all tokens simultaneously through self-attention (unlike RNNs), positional encodings are added to input embeddings to maintain sequence order information.",
          es: "Como los Transformers procesan todos los tokens simultáneamente a través de auto-atención (a diferencia de RNNs), las codificaciones posicionales se agregan a embeddings de entrada para mantener información de orden de secuencia.",
          de: "Da Transformers alle Token gleichzeitig durch Selbstaufmerksamkeit verarbeiten (im Gegensatz zu RNNs), werden Positionskodierungen zu Eingabeeinbettungen hinzugefügt um Sequenzordnungsinformation zu erhalten.",
          nl: "Omdat Transformers alle tokens tegelijkertijd verwerken door zelf-aandacht (in tegenstelling tot RNNs), worden positionele encodings toegevoegd aan invoer embeddings om sequentie volgorde informatie te behouden."
        }
      },
      {
        question: {
          en: "What is model alignment in the context of large language models?",
          es: "¿Qué es la alineación de modelos en el contexto de modelos de lenguaje grandes?",
          de: "Was ist Modellausrichtung im Kontext großer Sprachmodelle?",
          nl: "Wat is model uitlijning in de context van grote taalmodellen?"
        },
        options: [
          { en: "Training models to behave according to human values, preferences, and intentions", es: "Entrenar modelos para comportarse según valores, preferencias e intenciones humanas", de: "Modelle trainieren sich nach menschlichen Werten, Präferenzen und Absichten zu verhalten", nl: "Modellen trainen om zich te gedragen volgens menselijke waarden, voorkeuren en intenties" },
          { en: "Aligning model parameters for better performance", es: "Alinear parámetros del modelo para mejor rendimiento", de: "Modellparameter für bessere Leistung ausrichten", nl: "Model parameters uitlijnen voor betere prestaties" },
          { en: "Synchronizing multiple models to work together", es: "Sincronizar múltiples modelos para trabajar juntos", de: "Mehrere Modelle synchronisieren um zusammenzuarbeiten", nl: "Meerdere modellen synchroniseren om samen te werken" },
          { en: "Aligning text inputs with model outputs", es: "Alinear entradas de texto con salidas del modelo", de: "Texteingaben mit Modellausgaben ausrichten", nl: "Tekst invoer uitlijnen met model uitvoer" }
        ],
        correct: 0,
        explanation: {
          en: "Model alignment ensures AI systems act helpfully, harmlessly, and honestly according to human values. It addresses issues like harmful outputs, misinformation, and unintended behaviors.",
          es: "La alineación de modelos asegura que sistemas de IA actúen de manera útil, inofensiva y honesta según valores humanos. Aborda problemas como salidas dañinas, desinformación y comportamientos no deseados.",
          de: "Modellausrichtung stellt sicher dass KI-Systeme hilfreich, harmlos und ehrlich nach menschlichen Werten handeln. Es adressiert Probleme wie schädliche Ausgaben, Fehlinformationen und unbeabsichtigte Verhaltensweisen.",
          nl: "Model uitlijning zorgt ervoor dat AI systemen behulpzaam, ongevaarlijk en eerlijk handelen volgens menselijke waarden. Het pakt problemen aan zoals schadelijke outputs, misinformatie en onbedoeld gedrag."
        }
      },
      {
        question: {
          en: "What are the key components of the GPT architecture?",
          es: "¿Cuáles son los componentes clave de la arquitectura GPT?",
          de: "Was sind die Schlüsselkomponenten der GPT-Architektur?",
          nl: "Wat zijn de belangrijkste componenten van de GPT architectuur?"
        },
        options: [
          { en: "Decoder-only Transformer blocks with causal self-attention, layer normalization, and feed-forward networks", es: "Bloques Transformer solo-decoder con auto-atención causal, normalización de capas y redes feed-forward", de: "Decoder-only Transformer-Blöcke mit kausaler Selbstaufmerksamkeit, Schichtnormalisierung und Feed-Forward-Netzwerken", nl: "Decoder-only Transformer blokken met causale zelf-aandacht, laag normalisatie en feed-forward netwerken" },
          { en: "Encoder-decoder architecture with bidirectional attention", es: "Arquitectura encoder-decoder con atención bidireccional", de: "Encoder-Decoder Architektur mit bidirektionaler Aufmerksamkeit", nl: "Encoder-decoder architectuur met bidirectionele aandacht" },
          { en: "Convolutional layers with pooling operations", es: "Capas convolucionales con operaciones de pooling", de: "Faltungsschichten mit Pooling-Operationen", nl: "Convolutionele lagen met pooling operaties" },
          { en: "Recurrent layers with LSTM cells", es: "Capas recurrentes con celdas LSTM", de: "Rekurrente Schichten mit LSTM-Zellen", nl: "Recurrente lagen met LSTM cellen" }
        ],
        correct: 0,
        explanation: {
          en: "GPT uses a decoder-only architecture with masked self-attention to prevent looking at future tokens, enabling autoregressive text generation while maintaining the Transformer's parallelizable training.",
          es: "GPT usa una arquitectura solo-decoder con auto-atención enmascarada para prevenir mirar tokens futuros, permitiendo generación autoregresiva de texto mientras mantiene entrenamiento paralelizable del Transformer.",
          de: "GPT verwendet eine Decoder-only Architektur mit maskierter Selbstaufmerksamkeit um das Betrachten zukünftiger Token zu verhindern, ermöglicht autoregressive Textgenerierung während es die parallelisierbare Schulung des Transformers beibehält.",
          nl: "GPT gebruikt een decoder-only architectuur met gemaskeerde zelf-aandacht om het kijken naar toekomstige tokens te voorkomen, maakt autoregressieve tekstgeneratie mogelijk terwijl het de paralleliseerbare training van de Transformer behoudt."
        }
      },
      {
        question: {
          en: "What is retrieval-augmented generation (RAG) and how does it enhance language models?",
          es: "¿Qué es la generación aumentada por recuperación (RAG) y cómo mejora los modelos de lenguaje?",
          de: "Was ist Retrieval-Augmented Generation (RAG) und wie verbessert es Sprachmodelle?",
          nl: "Wat is retrieval-augmented generation (RAG) en hoe verbetert het taalmodellen?"
        },
        options: [
          { en: "Combining pre-trained language models with external knowledge retrieval to ground responses in factual information", es: "Combinar modelos de lenguaje preentrenados con recuperación de conocimiento externo para fundamentar respuestas en información factual", de: "Kombination vortrainierter Sprachmodelle mit externer Wissensbeschaffung um Antworten in faktischen Informationen zu verankern", nl: "Het combineren van voorgetrainde taalmodellen met externe kennisopvraging om reacties te gronden in feitelijke informatie" },
          { en: "A new training algorithm for language models", es: "Un nuevo algoritmo de entrenamiento para modelos de lenguaje", de: "Ein neuer Trainingsalgorithmus für Sprachmodelle", nl: "Een nieuw trainingsalgoritme voor taalmodellen" },
          { en: "Generating random text augmentations", es: "Generar aumentos de texto aleatorios", de: "Zufällige Textvergrößerungen generieren", nl: "Het genereren van willekeurige tekst augmentaties" },
          { en: "Retrieving and storing model parameters", es: "Recuperar y almacenar parámetros del modelo", de: "Modellparameter abrufen und speichern", nl: "Het ophalen en opslaan van model parameters" }
        ],
        correct: 0,
        explanation: {
          en: "RAG retrieves relevant documents from external knowledge bases and incorporates them into the generation process, reducing hallucinations and providing access to up-to-date information beyond training data.",
          es: "RAG recupera documentos relevantes de bases de conocimiento externas y los incorpora en el proceso de generación, reduciendo alucinaciones y proporcionando acceso a información actualizada más allá de datos de entrenamiento.",
          de: "RAG ruft relevante Dokumente aus externen Wissensdatenbanken ab und integriert sie in den Generierungsprozess, reduziert Halluzinationen und bietet Zugang zu aktuellen Informationen jenseits der Trainingsdaten.",
          nl: "RAG haalt relevante documenten op uit externe kennisbanken en integreert ze in het generatieproces, vermindert hallucinaties en biedt toegang tot actuele informatie buiten trainingsdata."
        }
      },
      {
        question: {
          en: "What is the purpose of layer normalization in Transformer models?",
          es: "¿Cuál es el propósito de la normalización de capas en modelos Transformer?",
          de: "Was ist der Zweck der Schichtnormalisierung in Transformer-Modellen?",
          nl: "Wat is het doel van laag normalisatie in Transformer modellen?"
        },
        options: [
          { en: "Stabilizing training by normalizing activations and enabling deeper networks with residual connections", es: "Estabilizar entrenamiento normalizando activaciones y permitiendo redes más profundas con conexiones residuales", de: "Training stabilisieren durch Normalisierung von Aktivierungen und Ermöglichung tieferer Netzwerke mit residualen Verbindungen", nl: "Training stabiliseren door activaties te normaliseren en diepere netwerken mogelijk maken met residuele verbindingen" },
          { en: "Reducing the number of parameters in the model", es: "Reducir el número de parámetros en el modelo", de: "Reduzierung der Anzahl von Parametern im Modell", nl: "Het reduceren van het aantal parameters in het model" },
          { en: "Organizing layers in the correct order", es: "Organizar capas en el orden correcto", de: "Schichten in der richtigen Reihenfolge organisieren", nl: "Lagen in de juiste volgorde organiseren" },
          { en: "Converting layers to standard formats", es: "Convertir capas a formatos estándar", de: "Schichten in Standardformate konvertieren", nl: "Lagen converteren naar standaard formaten" }
        ],
        correct: 0,
        explanation: {
          en: "Layer normalization normalizes inputs across the feature dimension, helping with gradient flow and training stability, which is crucial for the deep architecture of Transformers.",
          es: "La normalización de capas normaliza entradas a través de la dimensión de características, ayudando con flujo de gradientes y estabilidad de entrenamiento, lo cual es crucial para la arquitectura profunda de Transformers.",
          de: "Schichtnormalisierung normalisiert Eingaben über die Merkmalsdimension, hilft bei Gradientenfluss und Trainingsstabilität, was für die tiefe Architektur von Transformers entscheidend ist.",
          nl: "Laag normalisatie normaliseert invoer over de kenmerk dimensie, helpt met gradiënt stroom en training stabiliteit, wat cruciaal is voor de diepe architectuur van Transformers."
        }
      },
      {
        question: {
          en: "What is prompt injection and how can it be mitigated?",
          es: "¿Qué es la inyección de prompts y cómo se puede mitigar?",
          de: "Was ist Prompt Injection und wie kann es gemildert werden?",
          nl: "Wat is prompt injection en hoe kan het worden beperkt?"
        },
        options: [
          { en: "Malicious inputs designed to override system instructions; mitigated through input validation, prompt filtering, and system message protection", es: "Entradas maliciosas diseñadas para anular instrucciones del sistema; mitigado a través de validación de entrada, filtrado de prompts y protección de mensajes del sistema", de: "Bösartige Eingaben entworfen um Systembefehle zu überschreiben; gemildert durch Eingabevalidierung, Prompt-Filterung und Systemnachrichten-Schutz", nl: "Kwaadaardige invoer ontworpen om systeeminstructies te overschrijven; beperkt door invoervalidatie, prompt filtering en systeembericht bescherming" },
          { en: "Adding extra prompts to improve model performance", es: "Agregar prompts extra para mejorar rendimiento del modelo", de: "Zusätzliche Prompts hinzufügen um Modellleistung zu verbessern", nl: "Extra prompts toevoegen om modelprestaties te verbeteren" },
          { en: "Injecting training data into prompts", es: "Inyectar datos de entrenamiento en prompts", de: "Trainingsdaten in Prompts injizieren", nl: "Trainingsdata injecteren in prompts" },
          { en: "A technique for improving prompt engineering", es: "Una técnica para mejorar ingeniería de prompts", de: "Eine Technik zur Verbesserung von Prompt Engineering", nl: "Een techniek voor het verbeteren van prompt engineering" }
        ],
        correct: 0,
        explanation: {
          en: "Prompt injection attacks attempt to manipulate LLM behavior by embedding malicious instructions in user inputs. Defenses include robust input sanitization, separating user content from system instructions, and implementing security boundaries.",
          es: "Los ataques de inyección de prompts intentan manipular el comportamiento de LLM incrustando instrucciones maliciosas en entradas de usuario. Las defensas incluyen sanitización robusta de entrada, separar contenido de usuario de instrucciones del sistema e implementar límites de seguridad.",
          de: "Prompt Injection Angriffe versuchen LLM-Verhalten zu manipulieren durch Einbettung bösartiger Anweisungen in Benutzereingaben. Verteidigungen umfassen robuste Eingabereinigung, Trennung von Benutzerinhalten von Systembefehlen und Implementierung von Sicherheitsgrenzen.",
          nl: "Prompt injection aanvallen proberen LLM gedrag te manipuleren door kwaadaardige instructies in gebruikersinvoer in te bedden. Verdedigingen omvatten robuuste invoer sanitatie, het scheiden van gebruikersinhoud van systeeminstructies en het implementeren van beveiligingsgrenzen."
        }
      },
      {
        question: {
          en: "What is the difference between BERT-base and BERT-large?",
          es: "¿Cuál es la diferencia entre BERT-base y BERT-large?",
          de: "Was ist der Unterschied zwischen BERT-base und BERT-large?",
          nl: "Wat is het verschil tussen BERT-base en BERT-large?"
        },
        options: [
          { en: "BERT-large has more layers (24 vs 12), larger hidden size (1024 vs 768), and more attention heads (16 vs 12)", es: "BERT-large tiene más capas (24 vs 12), tamaño oculto más grande (1024 vs 768) y más cabezas de atención (16 vs 12)", de: "BERT-large hat mehr Schichten (24 vs 12), größere versteckte Größe (1024 vs 768) und mehr Aufmerksamkeitsköpfe (16 vs 12)", nl: "BERT-large heeft meer lagen (24 vs 12), grotere verborgen grootte (1024 vs 768) en meer aandacht hoofden (16 vs 12)" },
          { en: "BERT-large supports more languages", es: "BERT-large soporta más idiomas", de: "BERT-large unterstützt mehr Sprachen", nl: "BERT-large ondersteunt meer talen" },
          { en: "BERT-large has different training objectives", es: "BERT-large tiene diferentes objetivos de entrenamiento", de: "BERT-large hat verschiedene Trainingsziele", nl: "BERT-large heeft verschillende trainingsdoelstellingen" },
          { en: "There is no significant difference", es: "No hay diferencia significativa", de: "Es gibt keinen signifikanten Unterschied", nl: "Er is geen significant verschil" }
        ],
        correct: 0,
        explanation: {
          en: "BERT-large is a scaled-up version with double the layers, larger hidden dimensions, and more attention heads, resulting in 340M parameters compared to BERT-base's 110M parameters, generally achieving better performance.",
          es: "BERT-large es una versión escalada con el doble de capas, dimensiones ocultas más grandes y más cabezas de atención, resultando en 340M parámetros comparado con los 110M parámetros de BERT-base, generalmente logrando mejor rendimiento.",
          de: "BERT-large ist eine skalierte Version mit doppelt so vielen Schichten, größeren versteckten Dimensionen und mehr Aufmerksamkeitsköpfen, resultiert in 340M Parametern verglichen mit BERT-base's 110M Parametern, erreicht generell bessere Leistung.",
          nl: "BERT-large is een opgeschaalde versie met dubbel zoveel lagen, grotere verborgen dimensies en meer aandacht hoofden, resulterend in 340M parameters vergeleken met BERT-base's 110M parameters, behaalt over het algemeen betere prestaties."
        }
      },
      {
        question: {
          en: "What is temperature in the context of text generation and how does it affect output?",
          es: "¿Qué es la temperatura en el contexto de generación de texto y cómo afecta la salida?",
          de: "Was ist Temperatur im Kontext der Textgenerierung und wie beeinflusst sie die Ausgabe?",
          nl: "Wat is temperatuur in de context van tekstgeneratie en hoe beïnvloedt het de output?"
        },
        options: [
          { en: "A parameter controlling randomness in sampling; lower values make output more deterministic, higher values more creative", es: "Un parámetro que controla aleatoriedad en muestreo; valores más bajos hacen salida más determinista, valores más altos más creativa", de: "Ein Parameter der Zufälligkeit beim Sampling kontrolliert; niedrigere Werte machen Ausgabe deterministischer, höhere Werte kreativer", nl: "Een parameter die willekeurigheid in sampling controleert; lagere waarden maken output deterministischer, hogere waarden creatiever" },
          { en: "The computational heat generated during inference", es: "El calor computacional generado durante inferencia", de: "Die rechnerische Wärme die während Inferenz generiert wird", nl: "De computationele warmte gegenereerd tijdens inferentie" },
          { en: "The speed of text generation", es: "La velocidad de generación de texto", de: "Die Geschwindigkeit der Textgenerierung", nl: "De snelheid van tekstgeneratie" },
          { en: "The training temperature of the model", es: "La temperatura de entrenamiento del modelo", de: "Die Trainingstemperatur des Modells", nl: "De trainingstemperatuur van het model" }
        ],
        correct: 0,
        explanation: {
          en: "Temperature scales the logits before applying softmax during sampling. Temperature of 0 gives deterministic outputs, 1.0 preserves original probabilities, and higher values increase randomness and creativity.",
          es: "La temperatura escala los logits antes de aplicar softmax durante muestreo. Temperatura de 0 da salidas deterministas, 1.0 preserva probabilidades originales, y valores más altos aumentan aleatoriedad y creatividad.",
          de: "Temperatur skaliert die Logits vor Anwendung von Softmax während Sampling. Temperatur von 0 gibt deterministische Ausgaben, 1.0 bewahrt ursprüngliche Wahrscheinlichkeiten, und höhere Werte erhöhen Zufälligkeit und Kreativität.",
          nl: "Temperatuur schaalt de logits voor het toepassen van softmax tijdens sampling. Temperatuur van 0 geeft deterministische outputs, 1.0 behoudt originele waarschijnlijkheden, en hogere waarden verhogen willekeurigheid en creativiteit."
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
